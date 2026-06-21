/** Recipes Hub — category tiles + searchable, filterable, sortable seed catalog. */
import React, { useMemo, useState } from "react";
import { Dimensions, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Screen, ScreenHeader } from "~/components/Screen";
import {
  Txt,
  Row,
  Spacer,
  Card,
  Press,
  Button,
  Pill,
  Field,
  SegmentedControl,
  EmptyState,
  SectionHeading,
} from "~/components/ui";
import { RecipeCard } from "~/components/RecipeCard";
import { allSeedViews, type RecipeView } from "~/lib/recipes";
import { tap } from "~/lib/haptics";
import { colors, space, radius, accent, font, shadow, type AccentKey } from "~/theme";

type FeatherName = React.ComponentProps<typeof Feather>["name"];

// ── Category tiles ───────────────────────────────────────────────────────────

const TILES: {
  label: string;
  hint: string;
  icon: FeatherName;
  tone: AccentKey;
  route: string;
}[] = [
  { label: "Cheap", hint: "Best price per serving", icon: "dollar-sign", tone: "cheap", route: "/cheap" },
  { label: "Explore", hint: "Cuisines from everywhere", icon: "compass", tone: "explore", route: "/explore" },
  { label: "Saved", hint: "Your bookmarked recipes", icon: "bookmark", tone: "saved", route: "/saved" },
  { label: "Recipe Studio", hint: "Build & AI-generate", icon: "edit-3", tone: "ai-chef", route: "/studio" },
];

function CategoryTile({
  label,
  hint,
  icon,
  tone,
  route,
  width,
}: (typeof TILES)[number] & { width: number }) {
  const a = accent[tone];
  return (
    <Press
      scaleTo={0.96}
      onPress={() => {
        tap();
        router.push(route as any);
      }}
      style={{ width }}
    >
      <Card padded={false} style={{ backgroundColor: a.tint, borderColor: a.tint, padding: space.lg, ...shadow.sm }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: radius.md,
            backgroundColor: a.main,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: space.sm,
            ...shadow.sm,
          }}
        >
          <Feather name={icon} size={22} color={a.on} />
        </View>
        <Txt variant="subheading" numberOfLines={1}>{label}</Txt>
        <Txt variant="caption" muted numberOfLines={2} style={{ marginTop: 2, minHeight: 30 }}>
          {hint}
        </Txt>
      </Card>
    </Press>
  );
}

// ── Filters ──────────────────────────────────────────────────────────────────

const EQUIPMENT: { label: string; value: string; icon: FeatherName }[] = [
  { label: "Microwave", value: "microwave", icon: "zap" },
  { label: "Stovetop", value: "stovetop", icon: "thermometer" },
  { label: "Oven", value: "oven", icon: "box" },
  { label: "Rice Cooker", value: "rice-cooker", icon: "archive" },
  { label: "Air Fryer", value: "air-fryer", icon: "wind" },
  { label: "Blender", value: "blender", icon: "loader" },
  { label: "No Kitchen", value: "no-kitchen", icon: "coffee" },
];

const DIET: { label: string; value: string }[] = [
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Vegan", value: "vegan" },
  { label: "High Protein", value: "high-protein" },
  { label: "Gluten Free", value: "gluten-free" },
  { label: "Dairy Free", value: "dairy-free" },
];

type SortKey = "best" | "cheap" | "fast" | "protein";

const SORTS: { label: string; value: SortKey }[] = [
  { label: "Best", value: "best" },
  { label: "Cheapest", value: "cheap" },
  { label: "Fastest", value: "fast" },
  { label: "Protein", value: "protein" },
];

/**
 * Waivy's own "Best" ranking — a weighted blend tuned for a broke, busy student:
 * mostly value (protein per dollar) + affordability, with bonuses for being
 * quick and genuinely high-protein. Each term is normalized to 0–1 so the
 * weights below are the real knobs. Higher score = surfaced first.
 */
function bestScore(v: { costPerServing: number; totalTimeMinutes: number; nutrition: { protein?: number } }): number {
  const cost = v.costPerServing > 0 ? v.costPerServing : 3;
  const time = v.totalTimeMinutes > 0 ? v.totalTimeMinutes : 30;
  const protein = v.nutrition.protein || 0;
  const proteinPerDollar = protein / Math.max(cost, 0.5);
  const valueN = Math.min(proteinPerDollar / 25, 1); // ~25 g/$ is excellent
  const affordN = Math.max(0, 1 - cost / 8); // $0 → 1, $8+ → 0
  const quickN = Math.max(0, 1 - time / 75); // instant → 1, 75 min+ → 0
  const proteinN = Math.min(protein / 40, 1); // 40 g/serving → 1
  return 0.34 * valueN + 0.24 * affordN + 0.2 * quickN + 0.22 * proteinN;
}

const PAGE = 12;

export default function RecipesHub() {
  const all = useMemo(() => allSeedViews(), []);

  const [query, setQuery] = useState("");
  const [equip, setEquip] = useState<string[]>([]);
  const [diet, setDiet] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("best");
  const [visible, setVisible] = useState(PAGE);

  const screenW = Dimensions.get("window").width;
  // Screen padding is space.lg on each side; one gutter between two columns.
  const colGap = space.md;
  const cardW = Math.floor((screenW - space.lg * 2 - colGap) / 2);
  const tileW = Math.floor((screenW - space.lg * 2 - space.md) / 2);

  function toggle(list: string[], v: string, set: (l: string[]) => void) {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
    setVisible(PAGE);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = all.filter((v) => {
      if (q) {
        const hay = `${v.name} ${v.description} ${v.cuisine ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      // Equipment: keep recipes whose equipment is a subset of the selected set.
      if (equip.length) {
        const ok = v.equipment.every((e) => equip.includes(e));
        if (!ok) return false;
      }
      // Diet: recipe must carry every selected diet tag.
      if (diet.length) {
        const ok = diet.every((d) => v.dietTags.includes(d));
        if (!ok) return false;
      }
      return true;
    });

    if (sort === "best") {
      // Decorate-sort-undecorate: compute each recipe's score ONCE rather than
      // re-running bestScore on every comparison (matters across thousands of
      // recipes on each keystroke).
      return out
        .map((v) => ({ v, s: bestScore(v) }))
        .sort((a, b) => b.s - a.s)
        .map((x) => x.v);
    }
    const sorted = [...out];
    sorted.sort((a, b) => {
      if (sort === "cheap") return a.costPerServing - b.costPerServing;
      if (sort === "fast") return a.totalTimeMinutes - b.totalTimeMinutes;
      return (b.nutrition.protein || 0) - (a.nutrition.protein || 0); // "protein"
    });
    return sorted;
  }, [all, query, equip, diet, sort]);

  const shown = filtered.slice(0, visible);
  const hasFilters = equip.length > 0 || diet.length > 0 || query.trim().length > 0;

  return (
    <Screen>
      <ScreenHeader title="Recipes" subtitle="Find something to cook tonight" back />

      {/* Category tiles */}
      <Row gap={space.md} wrap justify="space-between">
        {TILES.map((t) => (
          <CategoryTile key={t.label} {...t} width={tileW} />
        ))}
      </Row>

      <Spacer h={space.xl} />

      {/* Search */}
      <Field
        placeholder="Search recipes, cuisines…"
        value={query}
        onChangeText={(t) => {
          setQuery(t);
          setVisible(PAGE);
        }}
        autoCorrect={false}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />

      <Spacer h={space.md} />

      {/* Equipment filter */}
      <Txt variant="label" style={{ marginBottom: space.sm }}>Equipment</Txt>
      <Row gap={space.sm} wrap>
        {EQUIPMENT.map((e) => (
          <Pill
            key={e.value}
            label={e.label}
            icon={e.icon}
            tone="pantry"
            selected={equip.includes(e.value)}
            onPress={() => toggle(equip, e.value, setEquip)}
          />
        ))}
      </Row>

      <Spacer h={space.md} />

      {/* Diet filter */}
      <Txt variant="label" style={{ marginBottom: space.sm }}>Diet</Txt>
      <Row gap={space.sm} wrap>
        {DIET.map((d) => (
          <Pill
            key={d.value}
            label={d.label}
            tone="nourish"
            selected={diet.includes(d.value)}
            onPress={() => toggle(diet, d.value, setDiet)}
          />
        ))}
      </Row>

      <Spacer h={space.lg} />

      {/* Sort */}
      <Txt variant="label" style={{ marginBottom: 8 }}>SORT BY</Txt>
      <SegmentedControl
        options={SORTS}
        value={sort}
        onChange={(v) => {
          setSort(v);
          setVisible(PAGE);
        }}
      />

      <Spacer h={space.lg} />

      <SectionHeading
        title={`${filtered.length} ${filtered.length === 1 ? "recipe" : "recipes"}`}
        action={hasFilters ? "Clear" : undefined}
        onAction={
          hasFilters
            ? () => {
                tap();
                setQuery("");
                setEquip([]);
                setDiet([]);
                setVisible(PAGE);
              }
            : undefined
        }
      />

      {shown.length === 0 ? (
        <EmptyState
          emoji="🥬"
          title="No recipes match"
          subtitle="Try removing a filter or searching for something else."
          action={
            hasFilters ? (
              <Button
                title="Clear filters"
                variant="ghost"
                icon="x"
                onPress={() => {
                  setQuery("");
                  setEquip([]);
                  setDiet([]);
                  setVisible(PAGE);
                }}
              />
            ) : undefined
          }
        />
      ) : (
        <>
          <Row gap={colGap} wrap justify="space-between" align="flex-start">
            {shown.map((v: RecipeView) => (
              <RecipeCard key={v.id} view={v} width={cardW} />
            ))}
            {/* Keep the last odd card left-aligned in the 2-col grid. */}
            {shown.length % 2 === 1 ? <View style={{ width: cardW }} /> : null}
          </Row>

          {visible < filtered.length ? (
            <>
              <Spacer h={space.lg} />
              <Button
                title={`Load more (${filtered.length - visible})`}
                variant="secondary"
                icon="chevron-down"
                full
                onPress={() => {
                  tap();
                  setVisible((n) => n + PAGE);
                }}
              />
            </>
          ) : null}
        </>
      )}
    </Screen>
  );
}
