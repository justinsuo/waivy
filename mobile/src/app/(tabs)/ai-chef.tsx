import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Screen } from "~/components/Screen";
import { Sheet } from "~/components/Sheet";
import { Txt, Row, Card, Button, Field, Press, Badge, Pill, SegmentedControl, EmptyState, SectionHeading, Divider } from "~/components/ui";
import { toast } from "~/components/Toast";
import { colors, space, radius, accent } from "~/theme";
import { usePantry, useGrocery } from "~/lib/stores/app";
import { useRecipeCart } from "~/lib/grocery/recipeCartStore";
import { logFood } from "~/lib/stores/nourish";
import { ingredientLabel } from "~/lib/recipes";
import { Image } from "expo-image";
import { localImageUri } from "~/lib/imageStore";
import { isWorkerConfigured } from "@/lib/workerClient";
import {
  aiBackendAvailable, aiMode, instantOptions, generateAiOnly, dbCloseness, refine, persistGenerated, generateAndStoreImage,
  type GeneratedRecipe, type GeneratedRecipeOptionSet,
} from "~/lib/ai";
import { tap } from "~/lib/haptics";
import type { FoodItem, MealSlot } from "@/lib/nourish/types";

const EQUIPMENT = ["microwave", "stovetop", "oven", "air-fryer", "rice-cooker", "no-kitchen"] as const;
const DIET = ["vegetarian", "vegan", "high-protein", "gluten-free", "dairy-free"] as const;
const BUDGETS = [3, 5, 8, 0];
const OPTION_TONE: Record<string, any> = { "best-match": "pantry", cheapest: "cheap", fastest: "nourish", wildcard: "ai-chef" };

function mealSlotNow(): MealSlot {
  const h = new Date().getHours();
  if (h < 11) return "breakfast";
  if (h < 15) return "lunch";
  if (h < 21) return "dinner";
  return "snack";
}

export default function AiChefScreen() {
  const { pantry } = usePantry();
  const grocery = useGrocery();
  const { addGenerated } = useRecipeCart();

  const [usePantryItems, setUsePantryItems] = useState(true);
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");
  const [budget, setBudget] = useState(5);
  const [servings, setServings] = useState(1);
  const [equipment, setEquipment] = useState<Set<string>>(new Set(["stovetop", "microwave"]));
  const [diet, setDiet] = useState<Set<string>>(new Set());
  const [creativity, setCreativity] = useState<"practical" | "balanced" | "creative">("balanced");

  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [refiningId, setRefiningId] = useState<string | null>(null);
  const [results, setResults] = useState<GeneratedRecipeOptionSet | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Record<string, string>>({});
  const [optionImages, setOptionImages] = useState<Record<string, string>>({});
  const [imageLoadingId, setImageLoadingId] = useState<string | null>(null);
  const [setupOpen, setSetupOpen] = useState(false);
  const [chipsOpen, setChipsOpen] = useState(false); // pantry list collapsed by default

  const selectedPantryIds = useMemo(
    () => (usePantryItems ? pantry.map((p) => p.ingredientId).filter((id) => !excluded.has(id)) : []),
    [usePantryItems, pantry, excluded],
  );
  const selectedOption = results?.options.find((o) => o.id === selectedId);

  function toggle(set: Set<string>, val: string, setter: (s: Set<string>) => void) {
    const next = new Set(set);
    next.has(val) ? next.delete(val) : next.add(val);
    setter(next);
    tap();
  }

  const selectAllPantry = () => { setExcluded(new Set()); tap(); };
  const deselectAllPantry = () => { setExcluded(new Set(pantry.map((p) => p.ingredientId))); tap(); };

  async function generate(opts?: { creative?: boolean; pantryOverride?: string[] }) {
    // "Surprise me" always produces a recipe — an AI original when a key is
    // set, otherwise a creative surprise pick from the on-device catalog.
    // (No more dead-end "Open Settings" prompt.)
    // A surprise pass uses its own basket; everything else uses the user's
    // selected pantry (untouched by Surprise me).
    const pantryIds = opts?.pantryOverride ?? selectedPantryIds;
    const input = {
      pantryIngredients: pantryIds.map(ingredientLabel),
      selectedPantryIngredientIds: pantryIds,
      cravingText: notes,
      aiNotes: notes,
      budgetPerServing: budget || undefined,
      servings,
      equipment: Array.from(equipment),
      dietTags: Array.from(diet),
      creativityLevel: (opts?.creative ? "creative" : creativity) as "practical" | "balanced" | "creative",
    };

    setLoading(true);
    setResults(null);

    // 1) Instant on-device options from the catalog — shown immediately.
    const db = instantOptions(input);
    const close = dbCloseness(input).closeEnough;
    const backend = aiBackendAvailable();

    if (!backend) {
      // No AI key → pure on-device, instant.
      setResults(db);
      setSelectedId(db.mainOptionId);
      setLoading(false);
      toast("Recipes ready 🍳", "reward");
      return;
    }

    // 2) Hybrid: if a DB recipe is close enough, show it right away while AI
    //    cooks up the rest; otherwise show one DB pick as a placeholder.
    const keep = opts?.creative ? (close ? 1 : 0) : close ? 2 : 1;
    const instant = db.options.slice(0, Math.max(1, keep));
    // db.options can be empty (very restrictive pantry/diet) — only show an
    // instant pick if we actually have one; otherwise wait for the AI options.
    if (instant.length) {
      setResults({ mainOptionId: instant[0].id, options: instant });
      setSelectedId(instant[0].id);
    }
    setLoading(false);
    setAiLoading(true);
    if (close && instant.length) toast("Instant match — cooking up more with AI ✨");

    try {
      const ai = await generateAiOnly(input);
      const merged = [...db.options.slice(0, keep), ...ai.options].slice(0, 4);
      if (merged.length) {
        setResults({ mainOptionId: merged[0].id, options: merged });
        setSelectedId((prev) => (merged.some((o) => o.id === prev) ? prev : merged[0].id));
        toast(opts?.creative ? "Fresh AI originals ✨" : "Recipes ready 🍳", "reward");
      } else {
        toast("No matches — try fewer filters", "info");
      }
    } catch {
      // AI failed — fall back to the on-device set if we have one.
      if (db.options.length) {
        setResults(db);
        setSelectedId(db.mainOptionId);
        toast("Showing pantry matches", "info");
      } else {
        toast("Couldn't generate — try fewer filters", "error");
      }
    } finally {
      setAiLoading(false);
    }
  }

  function ensureSaved(optId: string, recipe: GeneratedRecipe): string {
    if (savedIds[optId]) return savedIds[optId];
    const custom = persistGenerated(recipe);
    setSavedIds((s) => ({ ...s, [optId]: custom.id }));
    // Surface an image immediately if one was already generated for this recipe.
    const existing = localImageUri(custom.id);
    if (existing) setOptionImages((s) => ({ ...s, [optId]: existing }));
    return custom.id;
  }

  function onSave(optId: string, recipe: GeneratedRecipe) {
    ensureSaved(optId, recipe);
    toast("Saved to Recipe Studio", "reward");
  }

  // Opt-in AI image generation ("if wanted"). Needs the Worker (OpenAI); the
  // recipe is saved first so the image attaches to it everywhere it appears.
  async function onGenerateImage(optId: string, recipe: GeneratedRecipe) {
    const id = ensureSaved(optId, recipe);
    if (!isWorkerConfigured()) {
      toast("Add your Worker URL in Settings to generate AI images", "info");
      return;
    }
    setImageLoadingId(optId);
    try {
      const uri = await generateAndStoreImage(id, recipe);
      if (uri) {
        setOptionImages((s) => ({ ...s, [optId]: uri }));
        toast("Image generated ✨", "reward");
      } else {
        toast("Couldn't generate image — check your Worker URL", "error");
      }
    } catch {
      toast("Couldn't generate image — try again", "error");
    } finally {
      setImageLoadingId(null);
    }
  }

  function onAddMissing(recipe: GeneratedRecipe) {
    const names = (recipe.missingIngredients ?? []).map((m) => m.name);
    if (names.length === 0) { toast("Nothing missing — you have it all!", "info"); return; }
    grocery.addNames(names, recipe.name);
    toast(`Added ${names.length} item${names.length === 1 ? "" : "s"} to grocery`);
  }

  function onLog(recipe: GeneratedRecipe) {
    const n = recipe.estimatedNutrition;
    const food: FoodItem = {
      id: `recipe-${Date.now().toString(36)}`,
      source: "recipe",
      name: recipe.name,
      servingDescription: "1 serving",
      kcal: n.calories, proteinG: n.protein, carbG: n.carbs, fatG: n.fat, fiberG: n.fiber,
    };
    logFood(food, mealSlotNow(), 1);
    toast(`Logged to Nourish (${Math.round(n.calories)} cal)`, "reward");
  }

  async function onRefine(optId: string, recipe: GeneratedRecipe, request: string) {
    setRefiningId(optId);
    try {
      const refined = await refine(recipe, request, {
        pantryIngredients: selectedPantryIds.map(ingredientLabel),
        budgetPerServing: budget || undefined, servings,
        equipment: Array.from(equipment), dietTags: Array.from(diet),
      });
      setResults((prev) => prev ? { ...prev, options: prev.options.map((o) => o.id === optId ? { ...o, recipe: refined } : o) } : prev);
      setSavedIds((s) => { const n = { ...s }; delete n[optId]; return n; });
      toast("Recipe updated ✨");
    } catch {
      toast("Couldn't refine — try again", "error");
    } finally {
      setRefiningId(null);
    }
  }

  const mode = aiMode();

  return (
    <Screen>
      <Row justify="space-between" style={{ marginBottom: space.lg }}>
        <View>
          <Txt variant="label">AI CHEF</Txt>
          <Txt variant="title">Cook something custom</Txt>
        </View>
        <Badge
          label={mode === "worker" ? "Secure AI" : mode === "haiku" ? "Fast AI" : "On-device"}
          tone="ai-chef"
          icon={mode === "local" ? "cpu" : "shield"}
        />
      </Row>

      {mode === "local" ? (
        <Press onPress={() => router.push("/settings")}>
          <Card soft style={{ marginBottom: space.md }}>
            <Row gap={10}>
              <Feather name="zap" size={18} color={accent["ai-chef"].shadow} />
              <Txt variant="caption" muted style={{ flex: 1 }}>
                Building recipes on-device from your pantry + Waivy's 1,200+ recipe catalog with real cost & macros. Tap <Txt weight="700" color={accent["ai-chef"].shadow}>Surprise me</Txt> below for original AI recipes.
              </Txt>
            </Row>
          </Card>
        </Press>
      ) : null}

      <Card style={{ gap: 12, marginBottom: space.md }}>
        <Press onPress={() => { setUsePantryItems((v) => !v); tap(); }}>
          <Row justify="space-between">
            <Row gap={10}><Feather name="archive" size={18} color={colors.basil} /><Txt variant="subheading">Use my pantry</Txt></Row>
            <View style={{ width: 46, height: 28, borderRadius: 14, backgroundColor: usePantryItems ? colors.basil : colors.borderSoft, justifyContent: "center", padding: 3 }}>
              <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "#fff", alignSelf: usePantryItems ? "flex-end" : "flex-start" }} />
            </View>
          </Row>
        </Press>
        {usePantryItems && pantry.length > 0 ? (
          <>
            {/* Compact summary + show-all toggle (the full list is collapsed by default). */}
            <Row justify="space-between" align="center">
              <Txt variant="caption" muted>Using {selectedPantryIds.length} of {pantry.length} ingredients</Txt>
              <Press
                onPress={() => { setChipsOpen((v) => !v); tap(); }}
                haptic="none"
                style={{ flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 10, paddingVertical: 6, borderRadius: radius.pill, backgroundColor: colors.oat }}
              >
                <Txt variant="label" weight="700" color={colors.basilShadow}>{chipsOpen ? "Hide" : "Show all"}</Txt>
                <Feather name={chipsOpen ? "chevron-up" : "chevron-down"} size={14} color={colors.basilShadow} />
              </Press>
            </Row>

            {chipsOpen ? (
              <>
                <Row gap={8}>
                  <Press onPress={selectAllPantry} haptic="none" style={{ paddingHorizontal: 12, paddingVertical: 7, borderRadius: radius.pill, backgroundColor: colors.basilSoft }}>
                    <Txt variant="label" weight="700" color={colors.basilShadow}>Select all</Txt>
                  </Press>
                  <Press onPress={deselectAllPantry} haptic="none" style={{ paddingHorizontal: 12, paddingVertical: 7, borderRadius: radius.pill, backgroundColor: colors.oat }}>
                    <Txt variant="label" weight="700" color={colors.textMuted}>Deselect all</Txt>
                  </Press>
                </Row>
                <Row gap={8} wrap>
                  {pantry.map((p) => {
                    const on = !excluded.has(p.ingredientId);
                    return <Pill key={p.ingredientId} label={ingredientLabel(p.ingredientId)} tone="pantry" selected={on}
                      onPress={() => { const n = new Set(excluded); on ? n.add(p.ingredientId) : n.delete(p.ingredientId); setExcluded(n); }} />;
                  })}
                </Row>
              </>
            ) : null}
          </>
        ) : usePantryItems ? <Txt variant="caption" muted>Your pantry is empty — add items or describe what you have below.</Txt> : null}
      </Card>

      <Field label="Notes / cravings" placeholder="e.g. something spicy and high-protein, under 20 min" value={notes} onChangeText={setNotes} style={{ marginBottom: space.md }} />

      <Row gap={space.md} style={{ marginBottom: space.md }}>
        <View style={{ flex: 1, gap: 6 }}>
          <Txt variant="label">Budget / serving</Txt>
          <Row gap={6} wrap>
            {BUDGETS.map((b) => <Pill key={b} label={b ? `$${b}` : "Any"} tone="cheap" selected={budget === b} onPress={() => setBudget(b)} />)}
          </Row>
        </View>
        <View style={{ gap: 6 }}>
          <Txt variant="label">Servings</Txt>
          <Row gap={8}>
            <Press onPress={() => setServings((s) => Math.max(1, s - 1))} style={stepBtn}><Feather name="minus" size={18} color={colors.text} /></Press>
            <Txt variant="heading" style={{ minWidth: 26, textAlign: "center" }}>{servings}</Txt>
            <Press onPress={() => setServings((s) => Math.min(8, s + 1))} style={stepBtn}><Feather name="plus" size={18} color={colors.text} /></Press>
          </Row>
        </View>
      </Row>

      <Txt variant="label" style={{ marginBottom: 6 }}>Equipment</Txt>
      <Row gap={8} wrap style={{ marginBottom: space.md }}>
        {EQUIPMENT.map((e) => <Pill key={e} label={e.replace("-", " ")} tone="grocery" selected={equipment.has(e)} onPress={() => toggle(equipment, e, setEquipment)} />)}
      </Row>

      <Txt variant="label" style={{ marginBottom: 6 }}>Diet</Txt>
      <Row gap={8} wrap style={{ marginBottom: space.md }}>
        {DIET.map((d) => <Pill key={d} label={d.replace("-", " ")} tone="ai-chef" selected={diet.has(d)} onPress={() => toggle(diet, d, setDiet)} />)}
      </Row>

      <Txt variant="label" style={{ marginBottom: 6 }}>Creativity</Txt>
      <SegmentedControl value={creativity} onChange={setCreativity}
        options={[{ label: "Practical", value: "practical" }, { label: "Balanced", value: "balanced" }, { label: "Creative", value: "creative" }]} />

      <Button title={loading ? "Cooking up ideas…" : "Generate recipes"} icon="zap" accentKey="ai-chef" variant="accent" full loading={loading}
        style={{ marginTop: space.lg }} onPress={() => generate()} />

      <Press onPress={() => generate({ creative: true })} disabled={loading} style={{ marginTop: space.sm }}>
        <View style={{ borderWidth: 1.5, borderColor: accent["ai-chef"].main, borderStyle: "dashed", borderRadius: radius.md, paddingVertical: 13, paddingHorizontal: 12, alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 8, backgroundColor: accent["ai-chef"].tint }}>
          <Feather name="feather" size={17} color={accent["ai-chef"].shadow} />
          <Txt weight="700" color={accent["ai-chef"].shadow} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.85} style={{ flexShrink: 1, textAlign: "center" }}>Surprise me — get creative with AI</Txt>
        </View>
      </Press>
      {aiBackendAvailable() ? (
        <Txt variant="caption" muted center style={{ marginTop: 6 }}>Writes a fresh original recipe with AI ✨</Txt>
      ) : (
        <Press onPress={() => setSetupOpen(true)} haptic="selection" style={{ marginTop: 6, alignSelf: "center" }}>
          <Txt variant="caption" muted center>
            Surprises you from 1,200+ recipes ·{" "}
            <Txt variant="caption" weight="700" color={accent["ai-chef"].shadow}>add an AI key</Txt> for GPT originals
          </Txt>
        </Press>
      )}

      {results ? (
        <View style={{ marginTop: space.xl }}>
          <Row justify="space-between" style={{ marginBottom: space.sm }}>
            <Txt variant="heading">Your options</Txt>
            {aiLoading ? (
              <Row gap={6}><ActivityIndicator size="small" color={accent["ai-chef"].main} /><Txt variant="caption" color={accent["ai-chef"].shadow} weight="700">AI cooking more…</Txt></Row>
            ) : null}
          </Row>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }} style={{ marginHorizontal: -space.lg, paddingHorizontal: space.lg, marginBottom: space.md }}>
            {results.options.map((o) => {
              const fromDb = o.id.startsWith("local");
              return (
                <Press key={o.id} onPress={() => setSelectedId(o.id)} scaleTo={0.97}
                  style={{ width: 172, padding: 13, borderRadius: radius.lg, borderWidth: 2, borderColor: o.id === selectedId ? accent[(OPTION_TONE[o.optionLabel] ?? "ai-chef") as keyof typeof accent].main : colors.border, backgroundColor: o.id === selectedId ? accent[(OPTION_TONE[o.optionLabel] ?? "ai-chef") as keyof typeof accent].tint : colors.surface, gap: 8 }}>
                  <Row justify="space-between" align="center">
                    <Badge label={o.optionLabel.replace("-", " ")} tone={(OPTION_TONE[o.optionLabel] ?? "ai-chef") as keyof typeof accent} />
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                      <Feather name={fromDb ? "zap" : "feather"} size={12} color={fromDb ? accent.cheap.shadow : accent["ai-chef"].shadow} />
                      <Txt style={{ fontSize: 10.5, fontWeight: "700", color: fromDb ? accent.cheap.shadow : accent["ai-chef"].shadow }}>{fromDb ? "instant" : "AI"}</Txt>
                    </View>
                  </Row>
                  <Txt variant="subheading" numberOfLines={2} style={{ minHeight: 44 }}>{o.recipe.name || "Recipe"}</Txt>
                  <Txt variant="caption" muted numberOfLines={2} style={{ minHeight: 32 }}>{o.shortReason || ""}</Txt>
                  <Row gap={6}><Txt variant="caption" weight="700" color={colors.basilShadow}>${(Number(o.recipe.estimatedCostPerServing) || 0).toFixed(2)}</Txt><Txt variant="caption" muted>· {o.recipe.totalTimeMinutes || 0}m</Txt></Row>
                </Press>
              );
            })}
            {aiLoading ? (
              <View style={{ width: 172, padding: 13, borderRadius: radius.lg, borderWidth: 2, borderStyle: "dashed", borderColor: accent["ai-chef"].main, backgroundColor: accent["ai-chef"].tint, alignItems: "center", justifyContent: "center", gap: 8 }}>
                <ActivityIndicator color={accent["ai-chef"].main} />
                <Txt variant="caption" color={accent["ai-chef"].shadow} weight="700" center>Writing AI originals…</Txt>
              </View>
            ) : null}
          </ScrollView>

          {selectedOption ? <ResultPanel
            option={selectedOption}
            saved={!!savedIds[selectedOption.id]}
            refining={refiningId === selectedOption.id}
            image={optionImages[selectedOption.id]}
            imageLoading={imageLoadingId === selectedOption.id}
            canMakeImage={isWorkerConfigured()}
            onGenerateImage={() => onGenerateImage(selectedOption.id, selectedOption.recipe)}
            onSave={() => onSave(selectedOption.id, selectedOption.recipe)}
            onAddMissing={() => onAddMissing(selectedOption.recipe)}
            onAddToPlan={() => { if (addGenerated(selectedOption.recipe, savedIds[selectedOption.id])) toast(`Added ${selectedOption.recipe.name} to grocery plan 🛒`, "reward"); else router.push("/grocery"); }}
            onLog={() => onLog(selectedOption.recipe)}
            onCook={() => { const id = ensureSaved(selectedOption.id, selectedOption.recipe); router.push(`/cook/${id}`); }}
            onAsk={() => { const id = ensureSaved(selectedOption.id, selectedOption.recipe); router.push(`/chat?recipe=${id}`); }}
            onRefine={(req: string) => onRefine(selectedOption.id, selectedOption.recipe, req)}
          /> : null}
        </View>
      ) : null}
      <Sheet visible={setupOpen} onClose={() => setSetupOpen(false)} title="Turn on creative AI" scroll={false}>
        <View style={{ gap: space.md }}>
          <Row gap={10}>
            <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: accent["ai-chef"].tint, alignItems: "center", justifyContent: "center" }}>
              <Feather name="feather" size={20} color={accent["ai-chef"].shadow} />
            </View>
            <Txt variant="body" style={{ flex: 1 }}>
              Generate <Txt weight="700">original</Txt> recipes written by AI (not matched from the catalog). It needs an AI key — your data stays yours and keys are stored only on this device.
            </Txt>
          </Row>
          <Card soft style={{ gap: 6 }}>
            <Txt variant="subheading">Two ways to enable it:</Txt>
            <Txt variant="caption" muted>• <Txt weight="700">Anthropic key</Txt> (Claude Haiku) — fastest, paste it in Settings. A free-tier key works.</Txt>
            <Txt variant="caption" muted>• <Txt weight="700">Worker URL</Txt> — your Cloudflare Worker (OpenAI) for full GPT originals + images.</Txt>
          </Card>
          <Button title="Open Settings" icon="settings" accentKey="ai-chef" variant="accent" full onPress={() => { setSetupOpen(false); router.push("/settings"); }} />
          <Txt variant="caption" muted center>The instant on-device generator above always works — no key needed.</Txt>
        </View>
      </Sheet>
    </Screen>
  );
}

function ResultPanel({ option, saved, refining, image, imageLoading, canMakeImage, onGenerateImage, onSave, onAddMissing, onAddToPlan, onLog, onCook, onAsk, onRefine }: any) {
  const r: GeneratedRecipe = option.recipe;
  const n = r.estimatedNutrition;
  return (
    <Card style={{ gap: 14 }}>
      {/* Recipe image — generated on demand via the Worker (OpenAI). */}
      {image ? (
        <Image source={{ uri: image }} style={{ width: "100%", height: 180, borderRadius: radius.md, backgroundColor: colors.oat }} contentFit="cover" transition={200} />
      ) : imageLoading ? (
        <View style={{ width: "100%", height: 180, borderRadius: radius.md, backgroundColor: accent["ai-chef"].tint, alignItems: "center", justifyContent: "center", gap: 8 }}>
          <ActivityIndicator color={accent["ai-chef"].main} />
          <Txt variant="caption" color={accent["ai-chef"].shadow} weight="700">Generating image…</Txt>
        </View>
      ) : null}

      <View>
        <Txt variant="heading">{r.name}</Txt>
        {r.whyThisFits ? <Txt variant="caption" muted style={{ marginTop: 2 }}>{r.whyThisFits}</Txt> : null}
      </View>
      <Row gap={6} wrap>
        <Badge label={`$${(Number(r.estimatedCostPerServing) || 0).toFixed(2)}/serving`} tone="cheap" icon="dollar-sign" />
        <Badge label={`${Math.round(n.calories)} cal`} tone="nourish" icon="zap" />
        <Badge label={`${Math.round(n.protein)}g protein`} tone="ai-chef" />
        <Badge label={`${r.totalTimeMinutes} min`} tone="grocery" icon="clock" />
      </Row>

      <View>
        <Txt variant="label" style={{ marginBottom: 6 }}>INGREDIENTS</Txt>
        {r.ingredients.map((i, idx) => (
          <Row key={idx} justify="space-between" style={{ paddingVertical: 5 }}>
            <Row gap={8} style={{ flex: 1 }}>
              <Feather name={i.userAlreadyHas ? "check-circle" : "circle"} size={15} color={i.userAlreadyHas ? colors.basil : colors.textFaint} />
              <Txt variant="body" style={{ flex: 1 }}>{i.quantity} {i.unit} {i.name}{i.optional ? " (optional)" : ""}</Txt>
            </Row>
            <Txt variant="caption" muted>${(i.estimatedCost ?? 0).toFixed(2)}</Txt>
          </Row>
        ))}
      </View>

      {r.missingIngredients?.length ? (
        <View style={{ backgroundColor: accent.cheap.tint, borderRadius: radius.md, padding: 12 }}>
          <Txt variant="label" style={{ marginBottom: 4 }}>YOU'LL NEED TO BUY</Txt>
          <Txt variant="caption" muted>{r.missingIngredients.map((m) => m.name).join(", ")}</Txt>
        </View>
      ) : null}

      <View>
        <Txt variant="label" style={{ marginBottom: 6 }}>STEPS</Txt>
        {r.steps.map((s, idx) => (
          <Row key={idx} gap={10} align="flex-start" style={{ paddingVertical: 5 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: accent["ai-chef"].tint, alignItems: "center", justifyContent: "center" }}>
              <Txt variant="caption" weight="700" color={accent["ai-chef"].shadow}>{idx + 1}</Txt>
            </View>
            <Txt variant="body" style={{ flex: 1 }}>{s}</Txt>
          </Row>
        ))}
      </View>

      {r.cheapTips?.length ? (
        <View>
          <Txt variant="label" style={{ marginBottom: 4 }}>💡 CHEAP TIPS</Txt>
          {r.cheapTips.slice(0, 3).map((t, i) => <Txt key={i} variant="caption" muted style={{ paddingVertical: 2 }}>• {t}</Txt>)}
        </View>
      ) : null}

      <Divider />
      <Txt variant="label">REFINE</Txt>
      <Row gap={8} wrap>
        {[["Make it cheaper", "make it cheaper"], ["Higher protein", "make it higher protein"], ["Faster", "make it faster"], ["Fewer missing", "use fewer ingredients I don't have"]].map(([label, req]) => (
          <Pill key={label} label={label} tone="grocery" onPress={() => onRefine(req)} />
        ))}
      </Row>
      {refining ? <Txt variant="caption" muted center>Refining…</Txt> : null}

      <Divider />
      <Row gap={10}>
        <Button title="Start cooking" icon="play" accentKey="ai-chef" variant="accent" style={{ flex: 1 }} onPress={onCook} />
        <Button title={saved ? "Saved ✓" : "Save"} icon="bookmark" variant="secondary" style={{ flex: 1 }} onPress={onSave} />
      </Row>
      <Row gap={10}>
        <Button title="Add to grocery plan" icon="shopping-cart" accentKey="grocery" variant="accent" size="sm" style={{ flex: 1 }} onPress={onAddToPlan} />
        <Button title="Log to Nourish" icon="heart" variant="secondary" size="sm" style={{ flex: 1 }} onPress={onLog} />
      </Row>
      <Button
        title={imageLoading ? "Generating image…" : image ? "Regenerate image" : "Generate image"}
        icon="image"
        variant="secondary"
        full
        disabled={imageLoading}
        onPress={onGenerateImage}
      />
      {!canMakeImage && !image ? (
        <Txt variant="caption" muted center>AI images need your Worker URL (Settings → AI & connection).</Txt>
      ) : null}
      <Button title="Ask AI Chef about this recipe" icon="message-circle" variant="ghost" full onPress={onAsk} />
    </Card>
  );
}

const stepBtn = { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.oat, alignItems: "center" as const, justifyContent: "center" as const };
