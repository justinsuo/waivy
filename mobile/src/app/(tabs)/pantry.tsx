import { useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Screen } from "~/components/Screen";
import { Sheet } from "~/components/Sheet";
import { Txt, Row, Card, Button, Field, Press, Badge, IconButton, EmptyState } from "~/components/ui";
import { toast } from "~/components/Toast";
import { colors, space, radius, accent } from "~/theme";
import { usePantry } from "~/lib/stores/app";
import { usePantries } from "~/lib/stores/pantries";
import { ingredientLabel, categoryLabel } from "~/lib/recipes";
import { parsePantryText, aiAvailable } from "~/lib/ai";
import { tap } from "~/lib/haptics";
import { INGREDIENTS, INGREDIENT_MAP, QUICK_ADD_STAPLES } from "@/data/ingredients";
import { PANTRY_PRESETS } from "@/data/pantryPresets";
import { matchIngredientByName } from "@/lib/nutritionEngine";
import { rankPantryCatalog } from "~/lib/catalog";
import { recognizeIngredientsFromImage } from "@/lib/anthropic";

const CATEGORY_ORDER = ["protein", "vegetable", "fruit", "dairy", "grain", "canned", "frozen", "condiment", "spice", "snack"];

export default function PantryScreen() {
  const { pantry, add, addMany, remove, toggleUseSoon, clear, has } = usePantry();
  const { pantries, active, switchTo, createPantry, rename, removePantry, shuffle } = usePantries();
  const [addOpen, setAddOpen] = useState(false);
  const [pasteOpen, setPasteOpen] = useState(false);
  const [presetConfirm, setPresetConfirm] = useState<(typeof PANTRY_PRESETS)[number] | null>(null);
  const [manageOpen, setManageOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [query, setQuery] = useState("");
  const [itemQuery, setItemQuery] = useState("");
  const [pasteText, setPasteText] = useState("");
  const [busy, setBusy] = useState(false);
  const activePantry = pantries.find((p) => p.id === active);

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

  const readyCount = useMemo(() => {
    if (pantry.length === 0) return 0;
    return rankPantryCatalog(pantry).filter((r) => r.missingIngredients.length === 0).length;
  }, [pantry]);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INGREDIENTS.filter((i) => i.name.toLowerCase().includes(q) && !has(i.id)).slice(0, 8);
  }, [query, pantry]);

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
        const id = ing.id || matchIngredientByName(ing.name);
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

  const itemChip = (p: (typeof pantry)[number]) => (
    <Press key={p.ingredientId} haptic="selection" onPress={() => toggleUseSoon(p.ingredientId)}
      style={{ flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: p.useSoon ? accent.cheap.tint : colors.surface, borderWidth: 1.5, borderColor: p.useSoon ? accent.cheap.main : colors.border, borderRadius: radius.pill, paddingLeft: 12, paddingRight: 5, paddingVertical: 8 }}>
      {p.useSoon ? <Feather name="clock" size={12} color={accent.cheap.shadow} /> : null}
      <Txt variant="caption" weight="600">{ingredientLabel(p.ingredientId)}</Txt>
      <Press onPress={() => { remove(p.ingredientId); tap(); toast(`Removed ${ingredientLabel(p.ingredientId)}`, "info"); }}
        style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: colors.oat, alignItems: "center", justifyContent: "center" }}>
        <Feather name="x" size={13} color={colors.textMuted} />
      </Press>
    </Press>
  );

  return (
    <View style={{ flex: 1 }}>
    <Screen>
      <Row justify="space-between" align="flex-start" style={{ marginBottom: space.md }}>
        <View style={{ flex: 1 }}>
          <Txt variant="label">PANTRY</Txt>
          <Txt variant="title" numberOfLines={1}>{activePantry?.name ?? "My Pantry"}</Txt>
          <Txt variant="caption" muted>{pantry.length} ingredient{pantry.length === 1 ? "" : "s"}</Txt>
        </View>
        {pantry.length > 0 ? <IconButton icon="trash-2" onPress={() => { clear(); tap(); toast("Pantry cleared", "info"); }} bg={colors.tomatoTint} color={colors.tomato} /> : null}
      </Row>

      {/* Pantry switcher — multiple saved pantries; tap the active one to manage. */}
      <Txt variant="label" style={{ marginBottom: 8 }}>YOUR PANTRIES</Txt>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingRight: space.lg }}
        style={{ marginHorizontal: -space.lg, paddingHorizontal: space.lg, marginBottom: 6 }}>
        {pantries.map((p) => {
          const on = p.id === active;
          return (
            <Press key={p.id} haptic="selection"
              onPress={() => { if (on) { setNameDraft(p.name); setManageOpen(true); } else switchTo(p.id); }}
              style={{ flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 9, borderRadius: radius.pill, backgroundColor: on ? colors.basil : colors.surface, borderWidth: 1.5, borderColor: on ? colors.basil : colors.border }}>
              <Feather name="archive" size={13} color={on ? "#fff" : colors.textMuted} />
              <Txt variant="label" weight="700" color={on ? "#fff" : colors.text}>{p.name}</Txt>
              {on ? <Feather name="more-horizontal" size={14} color="rgba(255,255,255,0.85)" /> : null}
            </Press>
          );
        })}
        <Press haptic="selection" onPress={() => { setNameDraft(""); setCreateOpen(true); }}
          style={{ flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 14, paddingVertical: 9, borderRadius: radius.pill, backgroundColor: colors.basilSoft }}>
          <Feather name="plus" size={14} color={colors.basilShadow} />
          <Txt variant="label" weight="700" color={colors.basilShadow}>New</Txt>
        </Press>
      </ScrollView>
      <Txt variant="caption" muted style={{ marginBottom: space.md }}>
        {pantries.length > 1 ? "Tap a pantry to switch · tap the active one to rename or delete." : "Keep separate pantries for different situations — tap + New."}
      </Txt>

      {/* Shuffle into a dedicated, non-destructive "Surprise" pantry. */}
      <Press haptic="selection" onPress={() => { const name = shuffle(); tap(); toast(`Rolled a fresh ${name} pantry 🎲`, "reward"); }}
        style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 7, paddingVertical: 12, borderRadius: radius.md, backgroundColor: accent["ai-chef"].tint, marginBottom: space.lg }}>
        <Txt style={{ fontSize: 16 }}>🎲</Txt>
        <Txt variant="label" weight="800" color={accent["ai-chef"].shadow}>Surprise me — shuffle a random pantry</Txt>
      </Press>

      {readyCount >= 3 ? (
        <Press onPress={() => router.push("/recipes")}>
          <Card soft style={{ marginBottom: space.lg }}>
            <Row justify="space-between">
              <Row gap={10}>
                <Feather name="check-circle" size={20} color={colors.basilShadow} />
                <Txt variant="body"><Txt weight="700">{readyCount} recipes</Txt> you can cook right now</Txt>
              </Row>
              <Feather name="chevron-right" size={18} color={colors.textFaint} />
            </Row>
          </Card>
        </Press>
      ) : null}

      {pantry.length === 0 ? (
        <EmptyState emoji="🥫" title="This pantry is empty"
          subtitle="Add what you already have and Waivy matches recipes to it — or roll a Surprise pantry above."
          action={<Button title="Add ingredients" icon="plus" accentKey="pantry" variant="accent" onPress={() => setAddOpen(true)} />} />
      ) : (
        <>
          <Row justify="space-between" align="center" style={{ marginBottom: space.md }}>
            <Txt variant="heading">Your ingredients</Txt>
            <Button title="Add" icon="plus" accentKey="pantry" variant="accent" size="sm" onPress={() => setAddOpen(true)} />
          </Row>
          {pantry.length >= 8 ? (
            <Field placeholder="Search your items…" value={itemQuery} onChangeText={setItemQuery} style={{ marginBottom: space.md }} />
          ) : null}

          {useSoonItems.length ? (
            <View style={{ marginBottom: space.lg }}>
              <Txt variant="label" style={{ marginBottom: 8, color: accent.cheap.shadow }}>⏱ USE SOON</Txt>
              <Row gap={8} wrap>{useSoonItems.map(itemChip)}</Row>
            </View>
          ) : null}

          {CATEGORY_ORDER.filter((c) => grouped[c]?.length).map((cat) => (
            <View key={cat} style={{ marginBottom: space.lg }}>
              <Txt variant="label" style={{ marginBottom: 8 }}>{categoryLabel(cat).toUpperCase()}</Txt>
              <Row gap={8} wrap>{grouped[cat].map(itemChip)}</Row>
            </View>
          ))}
          {shownItems.length === 0 ? <Txt variant="caption" muted center>No items match "{itemQuery.trim()}".</Txt> : null}
          {pantry.length < 5 ? (
            <Txt variant="caption" muted>Add a few more items (or load a Starter pack via + Add) so Waivy can match more recipes.</Txt>
          ) : (
            <Txt variant="caption" muted>Tap an item to flag "use soon" ⏱ · tap ✕ to remove.</Txt>
          )}
        </>
      )}

      <Sheet visible={addOpen} onClose={() => { setAddOpen(false); setQuery(""); }} title="Add to pantry">
        <Field placeholder="Search ingredients…" value={query} onChangeText={setQuery} />
        {query.trim() ? (
          matches.length ? matches.map((i) => (
            <Press key={i.id} onPress={() => { add({ ingredientId: i.id }); tap(); toast(`Added ${i.name}`); setQuery(""); }}
              style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border }}>
              <Txt variant="body">{i.name}</Txt>
              <Feather name="plus-circle" size={20} color={colors.basil} />
            </Press>
          )) : <Txt variant="caption" muted style={{ paddingVertical: 12 }}>No ingredient matches “{query.trim()}”. Try the Paste option below.</Txt>
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

      <Sheet visible={manageOpen} onClose={() => setManageOpen(false)} title="Manage pantry" scroll={false}>
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
      <Press onPress={() => setAddOpen(true)} haptic="light"
        containerStyle={{ position: "absolute", right: space.lg, bottom: 30 }}
        style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: colors.basil, alignItems: "center", justifyContent: "center", shadowColor: colors.basilShadow, shadowOpacity: 0.4, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 6 }}>
        <Feather name="plus" size={26} color="#fff" />
      </Press>
    </View>
  );
}
