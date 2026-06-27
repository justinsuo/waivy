import { useCallback, useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Screen } from "~/components/Screen";
import { Txt, Row, Card, Press, IconButton, Badge, SectionHeading, Button } from "~/components/ui";
import { RecipeCard, RecipeRow } from "~/components/RecipeCard";
import { ProgressRing, MacroBar } from "~/components/Charts";
import { space, radius, AccentKey, shadow } from "~/theme";
import { useTheme } from "~/theme/ThemeProvider";
import { seedToView } from "~/lib/recipes";
import { CATALOG_RECIPES } from "@/data/recipes";
import { RECIPE_IMAGES } from "@/data/recipeImages";
import { rankedHomePool, pickHomeShowcase } from "@/lib/homeShowcase";
import { usePantry, useGrocery } from "~/lib/stores/app";
import { useToday } from "~/lib/stores/nourish";
import { useStreak } from "~/lib/streak";
import { rankPantryCatalog, ALL_RECIPES } from "~/lib/catalog";
import { light as hapticLight } from "~/lib/haptics";

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

const QUICK: { label: string; icon: any; tone: AccentKey; href: string }[] = [
  { label: "Ask AI Chef", icon: "zap", tone: "ai-chef", href: "/ai-chef" },
  { label: "Use pantry", icon: "archive", tone: "pantry", href: "/pantry" },
  { label: "Log food", icon: "plus-circle", tone: "nourish", href: "/nourish/log-food" },
  { label: "Cheap meal", icon: "dollar-sign", tone: "cheap", href: "/cheap" },
  { label: "Grocery", icon: "shopping-cart", tone: "grocery", href: "/grocery" },
];

export default function HomeScreen() {
  const { colors, accent } = useTheme();
  const { pantry } = usePantry();
  const { grocery } = useGrocery();
  const today = useToday();
  const streak = useStreak();

  // Fresh seed per screen mount (app launch) AND on pull-to-refresh, so the home
  // rotates and shows different recipes each time instead of the same set.
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 2 ** 31));
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    hapticLight();
    setRefreshing(true);
    setSeed(Math.floor(Math.random() * 2 ** 31)); // re-roll the picks
    // Let the native spinner make a visible turn before it snaps closed.
    setTimeout(() => setRefreshing(false), 700);
  }, []);

  // Ranked pool of curated-photo recipes (same predicate as web for parity, and
  // these images load reliably in-app): de-prioritizes baking/desserts + involved
  // dishes (see homeShowcase) so cheap bakes/plain staples no longer dominate.
  const picksPool = useMemo(
    () =>
      rankedHomePool(
        CATALOG_RECIPES.filter((r) => RECIPE_IMAGES[r.id] && r.mealType !== "drink"),
        72,
      ),
    [],
  );
  // 15 picks: first 12 fill the carousel, the last 3 the "Quick & cheap" row, so
  // no recipe appears twice on screen.
  const cheapest = useMemo(
    () => pickHomeShowcase(picksPool, 15, seed).map(seedToView),
    [picksPool, seed],
  );

  const canMakeNow = useMemo(() => {
    if (pantry.length === 0) return null;
    return rankPantryCatalog(pantry).filter((r) => r.missingIngredients.length === 0);
  }, [pantry]);

  const useSoon = pantry.filter((p) => p.useSoon).length;
  const groceryLeft = grocery.filter((g) => !g.checked).length;
  const calPct = today.target.calorieTarget ? today.totals.kcal / today.target.calorieTarget : 0;

  return (
    <Screen refreshing={refreshing} onRefresh={onRefresh}>
      <Row justify="space-between" style={{ marginBottom: space.lg }}>
        <View style={{ flex: 1, marginRight: space.md }}>
          <Txt variant="label" numberOfLines={1}>{greeting()} 👋</Txt>
          <Txt variant="title" numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.85}>What should we cook?</Txt>
        </View>
        <Row gap={8}>
          {streak.count > 0 ? (
            <Row
              gap={3}
              style={{
                backgroundColor: accent.cheap.tint,
                paddingHorizontal: 11,
                paddingVertical: 7,
                borderRadius: radius.pill,
              }}
            >
              <Txt style={{ fontSize: 15 }}>🔥</Txt>
              <Txt weight="800" color={accent.cheap.shadow}>{streak.count}</Txt>
            </Row>
          ) : null}
          <IconButton icon="settings" onPress={() => router.push("/settings")} />
        </Row>
      </Row>

      {/* Quick actions */}
      <Row gap={10} style={{ marginBottom: space.xl }} justify="space-between">
        {QUICK.map((q) => {
          const a = accent[q.tone];
          return (
            <Press key={q.label} onPress={() => router.push(q.href as any)} style={{ alignItems: "center", flex: 1, gap: 6 }}>
              <View style={{ width: 54, height: 54, borderRadius: 18, backgroundColor: a.tint, alignItems: "center", justifyContent: "center", ...shadow.sm }}>
                <Feather name={q.icon} size={22} color={a.shadow} />
              </View>
              <Txt variant="caption" center numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.85} style={{ fontSize: 10.5 }}>{q.label}</Txt>
            </Press>
          );
        })}
      </Row>

      {/* Today's pick */}
      <SectionHeading title="Fresh picks for you" action="See all" onAction={() => router.push("/cheap")} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingRight: space.lg }}
        style={{ marginHorizontal: -space.lg, paddingHorizontal: space.lg, marginBottom: space.md }}
      >
        {cheapest.slice(0, 12).map((v) => (
          <RecipeCard key={v.id} view={v} width={250} />
        ))}
      </ScrollView>

      {/* Browse the whole catalog */}
      <Press onPress={() => router.push("/recipes")}>
        <Card>
          <Row justify="space-between">
            <Row gap={10}>
              <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: accent.explore.tint, alignItems: "center", justifyContent: "center" }}>
                <Feather name="book-open" size={18} color={accent.explore.shadow} />
              </View>
              <View>
                <Txt variant="subheading">Browse all recipes</Txt>
                <Txt variant="caption" muted>{ALL_RECIPES.length} student-friendly recipes — search & filter</Txt>
              </View>
            </Row>
            <Feather name="chevron-right" size={20} color={colors.textFaint} />
          </Row>
        </Card>
      </Press>

      {/* Nourish + Pantry status row */}
      <Row gap={space.md} align="stretch" style={{ marginTop: space.xl }}>
        <Press onPress={() => router.push("/nourish")} style={{ flex: 1 }}>
          <Card style={{ alignItems: "center", gap: 8, flex: 1 }}>
            <ProgressRing size={92} stroke={10} progress={calPct} color={colors.carrot}>
              <Txt variant="subheading">{Math.round(today.totals.kcal)}</Txt>
              <Txt variant="caption" muted>/{today.target.calorieTarget}</Txt>
            </ProgressRing>
            <Txt variant="label">Calories today</Txt>
          </Card>
        </Press>
        <Press onPress={() => router.push("/pantry")} style={{ flex: 1 }}>
          <Card style={{ flex: 1, gap: 10, justifyContent: "center" }}>
            <Feather name="archive" size={22} color={colors.basil} />
            <Txt variant="title">{pantry.length}</Txt>
            <Txt variant="label">ingredients in pantry</Txt>
            {canMakeNow ? (
              <Badge label={`${canMakeNow.length} ready to cook`} tone="pantry" icon="check" />
            ) : (
              <Txt variant="caption" muted>Add items to match recipes</Txt>
            )}
          </Card>
        </Press>
      </Row>

      {/* Macros mini */}
      <Card style={{ marginTop: space.md, gap: 12 }}>
        <Row justify="space-between">
          <Txt variant="subheading">Today's macros</Txt>
          <Press onPress={() => router.push("/nourish")} haptic="selection">
            <Txt variant="label" color={colors.basilShadow}>Open Nourish →</Txt>
          </Press>
        </Row>
        <Row gap={14}>
          <MacroBar label="Protein" value={today.totals.proteinG} target={today.target.proteinG} color={colors.grape} />
          <MacroBar label="Carbs" value={today.totals.carbG} target={today.target.carbG} color={colors.sky} />
          <MacroBar label="Fat" value={today.totals.fatG} target={today.target.fatG} color={colors.butter} />
        </Row>
      </Card>

      {/* Use soon nudge */}
      {useSoon > 0 ? (
        <Card soft style={{ marginTop: space.md }}>
          <Row gap={10}>
            <Feather name="clock" size={20} color={colors.carrotShadow} />
            <Txt variant="body" style={{ flex: 1 }}>
              You have <Txt weight="700">{useSoon}</Txt> item{useSoon > 1 ? "s" : ""} to use soon. Cook them before they spoil.
            </Txt>
          </Row>
        </Card>
      ) : null}

      {/* Grocery summary */}
      <Press onPress={() => router.push("/grocery")}>
        <Card style={{ marginTop: space.md }}>
          <Row justify="space-between">
            <Row gap={10}>
              <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: accent.grocery.tint, alignItems: "center", justifyContent: "center" }}>
                <Feather name="shopping-cart" size={18} color={accent.grocery.shadow} />
              </View>
              <View>
                <Txt variant="subheading">Grocery list</Txt>
                <Txt variant="caption" muted>{groceryLeft} item{groceryLeft === 1 ? "" : "s"} to buy</Txt>
              </View>
            </Row>
            <Feather name="chevron-right" size={20} color={colors.textFaint} />
          </Row>
        </Card>
      </Press>

      {/* Recommendations — full-width rows so titles/macros aren't crammed */}
      <SectionHeading title="Quick & cheap ideas" action="Browse" onAction={() => router.push("/recipes")} style={{ marginTop: space.xl }} />
      <View style={{ gap: space.sm }}>
        {cheapest.slice(12, 15).map((v) => (
          <RecipeRow key={v.id} view={v} />
        ))}
      </View>

      <Button
        title="Generate a recipe with AI Chef"
        icon="zap"
        accentKey="ai-chef"
        variant="accent"
        full
        style={{ marginTop: space.xl }}
        onPress={() => router.push("/ai-chef")}
      />
    </Screen>
  );
}
