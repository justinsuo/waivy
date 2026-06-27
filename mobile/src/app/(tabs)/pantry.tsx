import { useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Screen } from "~/components/Screen";
import { Sheet } from "~/components/Sheet";
import { Txt, Row, Card, Button, Field, Press, Badge, IconButton, EmptyState, SectionHeading } from "~/components/ui";
import { RecipeRow } from "~/components/RecipeCard";
import { toast } from "~/components/Toast";
import { space, radius, makeCategoryTone, CategoryToneKey } from "~/theme";
import { useTheme } from "~/theme/ThemeProvider";
import { usePantry } from "~/lib/stores/app";
import { usePantries } from "~/lib/stores/pantries";
import { ingredientLabel, categoryLabel, seedToView } from "~/lib/recipes";
import { parsePantryText, aiAvailable } from "~/lib/ai";
import { tap } from "~/lib/haptics";
import { INGREDIENT_MAP, QUICK_ADD_STAPLES } from "@/data/ingredients";
import { PANTRY_PRESETS } from "@/data/pantryPresets";
import { matchIngredientByName } from "@/lib/nutritionEngine";
import { rankPantryCatalog } from "~/lib/catalog";
import { groupPantryResults, recommendSmartBuys } from "@/lib/recipeScoring";
import { rankIngredients } from "~/lib/ingredientSearch";
import { recognizeIngredientsFromImage } from "@/lib/anthropic";

const CATEGORY_ORDER = ["protein", "vegetable", "fruit", "dairy", "grain", "canned", "frozen", "condiment", "spice", "snack"];

export default function PantryScreen() {
  const { colors, accent } = useTheme();
  const { pantry, add, addMany, remove, toggleUseSoon, clear, has } = usePantry();
  const { pantries, active, switchTo, createPantry, rename, removePantry, shuffle } = usePantries();
  const [addOpen, setAddOpen] = useState(false);
  const [pasteOpen, setPasteOpen] = useState(false);
  const [presetConfirm, setPresetConfirm] = useState<(typeof PANTRY_PRESETS)[number] | null>(null);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [query, setQuery] = useState("");
  const [itemQuery, setItemQuery] = useState("");
  const [pasteText, setPasteText] = useState("");
  const [busy, setBusy] = useState(false);
  const activePantry = pantries.find((p) => p.id === active);

  const catTone = makeCategoryTone(colors);
  const toneFor = (cat: string) => (cat in catTone ? catTone[cat as CategoryToneKey] : catTone.snack);

  // Items matching the in-pantry search (used for both the use-soon strip + groups).
  const shownItems = useMemo(() => {
    const q = itemQuery.trim().toLowerCase();
    if (!q) return pantry;
    return pantry.filter((p) => ingredientLabel(p.ingredientId).toLowerCase().includes(q));
  }, [pantry, itemQuery]);

  const useSoonItems = useMemo(() => shownItems.filter((p) => p.useSoon), [shownItems]);

  const grouped = useMemo(() => {
    const g: Record<string, typeof pantry> = {};
    for (const p of shownItems) {
      if (p.useSoon) continue; // shown in the Use Soon strip instead
      const cat = INGREDIENT_MAP.get(p.ingredientId)?.category ?? "snack";
      (g[cat] ||= []).push(p);
    }
    return g;
  }, [shownItems]);

  // The reward loop: what the pantry already cooks, what one buy unlocks.
  const ranked = useMemo(() => (pantry.length ? rankPantryCatalog(pantry) : []), [pantry]);
  const groups = useMemo(() => groupPantryResults(ranked, pantry), [ranked, pantry]);
  const needFew = useMemo(() => {
    const seen = new Set<string>();
    const out: typeof groups.buyOneUnlock = [];
    for (const r of [...groups.buyOneUnlock, ...groups.needFewItems]) {
      if (seen.has(r.recipe.id)) continue;
      seen.add(r.recipe.id);
      out.push(r);
    }
    return out;
  }, [groups]);
  const smartBuys = useMemo(() => (pantry.length ? recommendSmartBuys(pantry) : []), [pantry]);
  const topBuy = smartBuys.find((b) => b.unlocks > 0) ?? null;

  const searchResults = useMemo(() => rankIngredients(query, has, 12), [query, pantry]);

  async function handlePaste() {
    const text = pasteText.trim();
    if (!text) return;
    setBusy(true);
    let added = 0;
    const parsed = await parsePantryText(text);
    const ids: string[] = [];
    if (parsed && parsed.recognized?.length) {
      // AI mapped each item to a catalog id already; fall back to name match.
      for (const ing of parsed.recognized) {
        const id = ing.id && INGREDIENT_MAP.has(ing.id) ? ing.id : matchIngredientByName(ing.name);
        if (id) ids.push(id);
      }
      // Try to salvage anything the AI saw but couldn't map to a catalog id.
      for (const label of parsed.unrecognized ?? []) {
        const id = matchIngredientByName(label);
        if (id) ids.push(id);
      }
    } else {
      for (const raw of text.split(/[,\n]/)) {
        const id = matchIngredientByName(raw);
        if (id) ids.push(id);
      }
    }
    addMany(ids);
    added = ids.length;
    setBusy(false);
    setPasteText("");
    setPasteOpen(false);
    toast(added ? `Added ${added} item${added === 1 ? "" : "s"}` : "Couldn't match those — try typing them", added ? "success" : "info");
  }

  async function handlePhoto() {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) { toast("Photo permission needed", "error"); return; }
    const res = await ImagePicker.launchImageLibraryAsync({ base64: true, quality: 0.6, mediaTypes: ["images"] });
    if (res.canceled || !res.assets?.[0]?.base64) return;
    if (!aiAvailable()) { toast("Add an AI key in Settings to scan photos", "error"); return; }
    setBusy(true);
    try {
      const out = await recognizeIngredientsFromImage(res.assets[0].base64, res.assets[0].mimeType ?? "image/jpeg");
      const ids: string[] = [];
      for (const d of out.recognized ?? []) {
        const id = INGREDIENT_MAP.has(d.id) ? d.id : matchIngredientByName(d.name);
        if (id) ids.push(id);
      }
      addMany(ids);
      toast(ids.length ? `Found ${ids.length} ingredient${ids.length === 1 ? "" : "s"}` : "No ingredients recognized", ids.length ? "success" : "info");
    } catch {
      toast("Couldn't read that photo", "error");
    } finally {
      setBusy(false);
      setAddOpen(false);
    }
  }

  // A pantry item, color-coded by category. The body toggles "use soon"; a
  // separate, generously-tapped button removes it (no more accidental deletes).
  const itemChip = (p: (typeof pantry)[number]) => {
    const cat = INGREDIENT_MAP.get(p.ingredientId)?.category ?? "snack";
    const t = toneFor(cat);
    const bg = p.useSoon ? accent.cheap.tint : t.tint;
    const fg = p.useSoon ? accent.cheap.shadow : t.color;
    const bd = p.useSoon ? accent.cheap.main : t.tint;
    const name = ingredientLabel(p.ingredientId);
    return (
      <View key={p.ingredientId}
        style={{ flexDirection: "row", alignItems: "center", backgroundColor: bg, borderWidth: 1.5, borderColor: bd, borderRadius: radius.pill, paddingLeft: 12, paddingRight: 4, paddingVertical: 3 }}>
        <Press haptic="selection" onPress={() => toggleUseSoon(p.ingredientId)} accessibilityLabel={`Mark ${name} use soon`}
          style={{ flexDirection: "row", alignItems: "center", gap: 5, paddingVertical: 6, paddingRight: 4 }}>
          {p.useSoon ? <Feather name="clock" size={12} color={fg} /> : null}
          <Txt variant="caption" weight="700" color={fg}>{name}</Txt>
        </Press>
        <Press onPress={() => { remove(p.ingredientId); tap(); toast(`Removed ${name}`, "info"); }}
          accessibilityLabel={`Remove ${name}`} hitSlop={8}
          style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: colors.surface, alignItems: "center", justifyContent: "center" }}>
          <Feather name="x" size={14} color={fg} />
        </Press>
      </View>
    );
  };

  const stats = [
    { value: pantry.length, label: "ingredients", color: colors.text },
    { value: groups.canMakeNow.length, label: "ready now", color: accent.pantry.shadow },
    { value: useSoonItems.length, label: "use soon", color: accent.cheap.shadow },
    { value: topBuy?.unlocks ?? 0, label: "1 buy unlocks", color: accent["ai-chef"].shadow },
  ];

  return (
    <View style={{ flex: 1 }}>
    <Screen>
      {/* Compact header — pantry name is a dropdown into all pantry options. */}
      <Row justify="space-between" align="center" style={{ marginBottom: space.md }}>
        <Press onPress={() => setOptionsOpen(true)} haptic="selection" containerStyle={{ flex: 1, marginRight: space.md }}>
          <Txt variant="label">PANTRY</Txt>
          <Row gap={6} align="center">
            <Txt variant="title" numberOfLines={1} style={{ flexShrink: 1 }}>{activePantry?.name ?? "My Pantry"}</Txt>
            <Feather name="chevron-down" size={18} color={colors.textFaint} />
          </Row>
        </Press>
        <Row gap={8} align="center">
          <Badge label={`${pantry.length}`} tone="pantry" icon="archive" />
          <IconButton icon="more-horizontal" onPress={() => setOptionsOpen(true)} />
        </Row>
      </Row>

      {/* Search-first add — the #1 action, always one tap away. */}
      <Press onPress={() => { setQuery(""); setAddOpen(true); }} haptic="light"
        style={{ flexDirection: "row", alignItems: "center", gap: 9, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: 14, paddingVertical: 13, marginBottom: space.lg }}>
        <Feather name="search" size={18} color={colors.textFaint} />
        <Txt variant="body" color={colors.textFaint} style={{ flex: 1 }}>Add ingredients (rice, eggs, tofu…)</Txt>
        <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: accent.pantry.tint, alignItems: "center", justifyContent: "center" }}>
          <Feather name="plus" size={16} color={accent.pantry.shadow} />
        </View>
      </Press>

      {pantry.length === 0 ? (
        <EmptyState emoji="🥫" title="Your pantry is empty"
          subtitle="Add what you already have and Waivy instantly matches recipes you can cook right now."
          action={<Button title="Add ingredients" icon="plus" accentKey="pantry" variant="accent" onPress={() => { setQuery(""); setAddOpen(true); }} />} />
      ) : (
        <>
          {/* Stat strip — orientation + a sense of progress at a glance. */}
          <Row gap={8} align="stretch" style={{ marginBottom: space.lg }}>
            {stats.map((s) => (
              <View key={s.label} style={{ flex: 1, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingVertical: 11, paddingHorizontal: 6, alignItems: "center", gap: 2 }}>
                <Txt weight="800" color={s.color} style={{ fontSize: 19 }}>{s.value}</Txt>
                <Txt variant="caption" muted center numberOfLines={2} style={{ fontSize: 10.5, lineHeight: 13 }}>{s.label}</Txt>
              </View>
            ))}
          </Row>

          {/* WHAT YOU CAN COOK — the payoff, surfaced above the item list. */}
          {groups.canMakeNow.length > 0 ? (
            <View style={{ marginBottom: space.lg }}>
              <SectionHeading title={`${groups.canMakeNow.length} ready to cook now`} action="See all" onAction={() => router.push("/recipes")} />
              <View style={{ gap: space.sm }}>
                {groups.canMakeNow.slice(0, 3).map((r) => <RecipeRow key={r.recipe.id} view={seedToView(r.recipe)} />)}
              </View>
            </View>
          ) : null}

          {needFew.length > 0 ? (
            <View style={{ marginBottom: space.lg }}>
              <Txt variant="heading" style={{ marginBottom: space.sm }}>Almost there — need 1–2 more</Txt>
              <View style={{ gap: space.sm }}>
                {needFew.slice(0, 2).map((r) => (
                  <View key={r.recipe.id} style={{ gap: 4 }}>
                    <RecipeRow view={seedToView(r.recipe)} />
                    <Row gap={5} align="center" style={{ paddingHorizontal: 4 }}>
                      <Feather name="shopping-cart" size={11} color={colors.carrotShadow} />
                      <Txt variant="caption" muted style={{ flex: 1 }}>
                        Grab {r.missingIngredients.map((m) => ingredientLabel(m.ingredientId)).slice(0, 2).join(" + ")}
                      </Txt>
                    </Row>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {topBuy ? (
            <Card soft style={{ marginBottom: space.lg }}>
              <Row justify="space-between" align="center" gap={10}>
                <Row gap={10} align="center" style={{ flex: 1 }}>
                  <Txt style={{ fontSize: 22 }}>🛒</Txt>
                  <Txt variant="body" style={{ flex: 1 }}>
                    Buy <Txt weight="800">{ingredientLabel(topBuy.ingredientId)}</Txt> to unlock <Txt weight="800">{topBuy.unlocks}</Txt> more recipe{topBuy.unlocks === 1 ? "" : "s"}
                  </Txt>
                </Row>
                <Button title="Add" icon="plus" accentKey="pantry" variant="accent" size="sm"
                  onPress={() => { add({ ingredientId: topBuy.ingredientId }); tap(); toast(`Added ${ingredientLabel(topBuy.ingredientId)}`, "success"); }} />
              </Row>
            </Card>
          ) : null}

          {/* YOUR INGREDIENTS — color-coded by category. */}
          <Row justify="space-between" align="center" style={{ marginBottom: space.md }}>
            <Txt variant="heading">Your ingredients</Txt>
            <Button title="Add" icon="plus" accentKey="pantry" variant="accent" size="sm" onPress={() => { setQuery(""); setAddOpen(true); }} />
          </Row>
          {pantry.length >= 8 || itemQuery ? (
            <Field placeholder="Search your items…" value={itemQuery} onChangeText={setItemQuery} style={{ marginBottom: space.md }} />
          ) : null}

          {useSoonItems.length ? (
            <View style={{ marginBottom: space.lg }}>
              <Row gap={6} align="center" style={{ marginBottom: 8 }}>
                <Feather name="clock" size={13} color={accent.cheap.shadow} />
                <Txt variant="label" style={{ color: accent.cheap.shadow }}>USE SOON</Txt>
                <Badge label={`${useSoonItems.length}`} tone="cheap" />
              </Row>
              <Row gap={8} wrap>{useSoonItems.map(itemChip)}</Row>
            </View>
          ) : null}

          {CATEGORY_ORDER.filter((c) => grouped[c]?.length).map((cat) => {
            const t = toneFor(cat);
            return (
              <View key={cat} style={{ marginBottom: space.lg }}>
                <Row gap={7} align="center" style={{ marginBottom: 8 }}>
                  <View style={{ width: 22, height: 22, borderRadius: 7, backgroundColor: t.tint, alignItems: "center", justifyContent: "center" }}>
                    <Feather name={t.icon} size={12} color={t.color} />
                  </View>
                  <Txt variant="label" style={{ color: t.color }}>{categoryLabel(cat).toUpperCase()}</Txt>
                  <Txt variant="caption" muted>{grouped[cat].length}</Txt>
                </Row>
                <Row gap={8} wrap>{grouped[cat].map(itemChip)}</Row>
              </View>
            );
          })}
          {shownItems.length === 0 ? <Txt variant="caption" muted center>No items match "{itemQuery.trim()}".</Txt> : null}
          {pantry.length < 5 ? (
            <Txt variant="caption" muted>Add a few more items (or load a Starter pack via + Add) so Waivy can match more recipes.</Txt>
          ) : (
            <Txt variant="caption" muted>Tap an item to flag "use soon" ⏱ · tap the ✕ to remove.</Txt>
          )}
        </>
      )}

      {/* ── Add to pantry (search-first) ────────────────────────────────── */}
      <Sheet visible={addOpen} onClose={() => { setAddOpen(false); setQuery(""); }} title="Add to pantry">
        <Field placeholder="Search 1,900+ ingredients…" value={query} onChangeText={setQuery} autoFocus style={{ marginBottom: space.sm }} />
        {query.trim() ? (
          searchResults.length ? (
            <View>
              {searchResults.map((i) => {
                const t = toneFor(i.category);
                return (
                  <Press key={i.id} onPress={() => { add({ ingredientId: i.id }); tap(); toast(`Added ${i.name}`, "success"); }}
                    style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 11, borderBottomWidth: 1, borderBottomColor: colors.border }}>
                    <View style={{ width: 30, height: 30, borderRadius: 9, backgroundColor: t.tint, alignItems: "center", justifyContent: "center" }}>
                      <Feather name={t.icon} size={14} color={t.color} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Txt variant="body">{i.name}</Txt>
                      <Txt variant="caption" muted>{categoryLabel(i.category)}</Txt>
                    </View>
                    <Feather name="plus-circle" size={24} color={colors.basil} />
                  </Press>
                );
              })}
            </View>
          ) : (
            <View style={{ paddingVertical: 16, alignItems: "center", gap: 10 }}>
              <Txt variant="caption" muted center>No ingredient matches "{query.trim()}".</Txt>
              <Button title="Paste a list instead" icon="clipboard" variant="secondary" size="sm" onPress={() => { setAddOpen(false); setPasteOpen(true); }} />
            </View>
          )
        ) : (
          <View style={{ gap: space.lg, marginTop: space.sm }}>
            <View>
              <Txt variant="label" style={{ marginBottom: 8 }}>QUICK ADD STAPLES</Txt>
              <Row gap={8} wrap>
                {QUICK_ADD_STAPLES.filter((id) => !has(id)).slice(0, 14).map((id) => (
                  <Press key={id} haptic="selection" onPress={() => { add({ ingredientId: id }); tap(); toast(`Added ${ingredientLabel(id)}`); }}
                    style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 8 }}>
                    <Feather name="plus" size={13} color={colors.basil} />
                    <Txt variant="caption" weight="600">{ingredientLabel(id)}</Txt>
                  </Press>
                ))}
              </Row>
            </View>
            <View>
              <Txt variant="label" style={{ marginBottom: 8 }}>STARTER PACKS</Txt>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingBottom: 2 }}>
                {PANTRY_PRESETS.map((preset) => (
                  <Press key={preset.id} onPress={() => { setAddOpen(false); setPresetConfirm(preset); }} scaleTo={0.97}
                    style={{ width: 150, backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, padding: space.md, gap: 6 }}>
                    <Txt style={{ fontSize: 28 }}>{preset.emoji}</Txt>
                    <Txt variant="subheading" numberOfLines={1}>{preset.name}</Txt>
                    <Txt variant="caption" muted numberOfLines={2}>{preset.description}</Txt>
                    <Badge label={`${preset.ingredientIds.length} items`} tone="pantry" />
                  </Press>
                ))}
              </ScrollView>
            </View>
            <Row gap={10}>
              <Button title="Paste a list" icon="clipboard" variant="secondary" style={{ flex: 1 }} onPress={() => { setAddOpen(false); setPasteOpen(true); }} />
              <Button title="Scan a photo" icon="camera" variant="secondary" style={{ flex: 1 }} loading={busy} onPress={handlePhoto} />
            </Row>
          </View>
        )}
      </Sheet>

      {/* ── Pantry options — switch / new / rename / shuffle / clear ─────── */}
      <Sheet visible={optionsOpen} onClose={() => setOptionsOpen(false)} title="Your pantries">
        <View style={{ gap: space.sm }}>
          {pantries.map((p) => {
            const on = p.id === active;
            return (
              <Press key={p.id} haptic="selection" onPress={() => { if (!on) switchTo(p.id); setOptionsOpen(false); }}
                style={{ flexDirection: "row", alignItems: "center", gap: 10, padding: 12, borderRadius: radius.md, backgroundColor: on ? accent.pantry.tint : colors.surface, borderWidth: 1.5, borderColor: on ? accent.pantry.main : colors.border }}>
                <Feather name="archive" size={16} color={on ? accent.pantry.shadow : colors.textMuted} />
                <Txt variant="body" weight={on ? "700" : "500"} style={{ flex: 1 }} numberOfLines={1}>{p.name}</Txt>
                {on ? <Feather name="check" size={16} color={accent.pantry.shadow} /> : null}
              </Press>
            );
          })}
          <View style={{ height: 1, backgroundColor: colors.border, marginVertical: space.xs }} />
          <Row gap={10}>
            <Button title="New pantry" icon="plus" accentKey="pantry" variant="accent" style={{ flex: 1 }}
              onPress={() => { setOptionsOpen(false); setNameDraft(""); setCreateOpen(true); }} />
            <Button title="Rename" icon="edit-2" variant="secondary" style={{ flex: 1 }}
              onPress={() => { setOptionsOpen(false); setNameDraft(activePantry?.name ?? ""); setManageOpen(true); }} />
          </Row>
          <Button title="Shuffle a random pantry 🎲" icon="shuffle" variant="ghost" full
            onPress={() => { const name = shuffle(); tap(); setOptionsOpen(false); toast(`Rolled a fresh ${name} pantry 🎲`, "reward"); }} />
          {pantry.length > 0 ? (
            <Button title="Clear this pantry" icon="trash-2" variant="danger" full
              onPress={() => { clear(); tap(); setOptionsOpen(false); toast("Pantry cleared", "info"); }} />
          ) : null}
        </View>
      </Sheet>

      <Sheet visible={pasteOpen} onClose={() => setPasteOpen(false)} title="Paste your ingredients">
        <Txt variant="caption" muted>e.g. "eggs, half a bag of frozen broccoli, old tortillas, soy sauce"</Txt>
        <Field placeholder="Type or paste a messy list…" value={pasteText} onChangeText={setPasteText} multiline style={{ minHeight: 110, textAlignVertical: "top" }} />
        <Button title={aiAvailable() ? "Smart add with AI" : "Add (offline matching)"} icon="zap" accentKey="pantry" variant="accent" full loading={busy} onPress={handlePaste} />
      </Sheet>

      <Sheet visible={!!presetConfirm} onClose={() => setPresetConfirm(null)} title={presetConfirm?.name} scroll={false}>
        {presetConfirm ? (
          <View style={{ gap: space.md }}>
            <Txt variant="body" muted>{presetConfirm.description}</Txt>
            <Txt variant="caption" muted>Adds {presetConfirm.ingredientIds.length} items: {presetConfirm.ingredientIds.slice(0, 8).map(ingredientLabel).join(", ")}…</Txt>
            <Button title={`Add ${presetConfirm.ingredientIds.length} items`} icon="check" accentKey="pantry" variant="accent" full
              onPress={() => { addMany(presetConfirm.ingredientIds); toast(`Loaded ${presetConfirm.name}`, "reward"); setPresetConfirm(null); }} />
          </View>
        ) : null}
      </Sheet>

      <Sheet visible={createOpen} onClose={() => { setCreateOpen(false); setNameDraft(""); }} title="New pantry" scroll={false}>
        <View style={{ gap: space.md }}>
          <Txt variant="caption" muted>Keep separate pantries for different situations — e.g. "Vegan week", "Camping", "Mom's house".</Txt>
          <Field placeholder="Pantry name…" value={nameDraft} onChangeText={setNameDraft} autoFocus />
          <Row gap={10}>
            <Button title="Create empty" icon="plus" accentKey="pantry" variant="accent" style={{ flex: 1 }}
              onPress={() => { createPantry(nameDraft); toast("New pantry created", "reward"); setCreateOpen(false); setNameDraft(""); }} />
            <Button title="Copy current" icon="copy" variant="secondary" style={{ flex: 1 }}
              onPress={() => { createPantry(nameDraft, true); toast("Pantry duplicated", "reward"); setCreateOpen(false); setNameDraft(""); }} />
          </Row>
        </View>
      </Sheet>

      <Sheet visible={manageOpen} onClose={() => setManageOpen(false)} title="Rename or delete" scroll={false}>
        <View style={{ gap: space.md }}>
          <Field label="Name" value={nameDraft} onChangeText={setNameDraft} />
          <Button title="Save name" icon="check" accentKey="pantry" variant="accent" full
            onPress={() => { rename(active, nameDraft); toast("Renamed", "success"); setManageOpen(false); }} />
          {pantries.length > 1 ? (
            <Button title="Delete this pantry" icon="trash-2" variant="danger" full
              onPress={() => { removePantry(active); toast("Pantry deleted", "info"); setManageOpen(false); }} />
          ) : (
            <Txt variant="caption" muted center>This is your only pantry — create another to delete this one.</Txt>
          )}
        </View>
      </Sheet>
    </Screen>

      {/* Floating add button — outside the scroll so it stays put. */}
      <Press onPress={() => { setQuery(""); setAddOpen(true); }} haptic="light"
        containerStyle={{ position: "absolute", right: space.lg, bottom: 30 }}
        style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: colors.basil, alignItems: "center", justifyContent: "center", shadowColor: colors.basilShadow, shadowOpacity: 0.4, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 6 }}>
        <Feather name="plus" size={26} color="#fff" />
      </Press>
    </View>
  );
}
