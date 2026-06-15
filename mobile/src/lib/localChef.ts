/**
 * On-device AI Chef. When no Worker/Anthropic backend is configured, this
 * produces real recipe "options" tailored to the user's pantry + constraints by
 * ranking the shared 229-recipe catalog with the real scoring/pricing/nutrition
 * engines — so AI Chef always works, instantly and offline, with honest cost &
 * macros. When a Worker URL IS set, the worker path (GPT originals) is used
 * instead (see ai.ts).
 */
import { INGREDIENT_MAP } from "@/data/ingredients";
import {
  calculateCostPerServing,
  ingredientCostBreakdown,
} from "@/lib/recipeScoring";
import { bestEffortNutrition } from "@/lib/nutritionEngine";
import { ALL_RECIPES, rankPantryCatalog, rankCheapCatalog } from "./catalog";
import { recipeFitsEquipment } from "@/lib/equipmentFilters";
import type { Recipe, Equipment, DietTag } from "@/lib/types";
import type { GeneratedRecipe, GeneratedRecipeOptionSet, OptionLabel } from "@/lib/workerClient";

function ingredientLabel(id: string): string {
  return INGREDIENT_MAP.get(id)?.name ?? id;
}

export interface LocalChefInput {
  pantryIds: string[];
  budgetPerServing?: number;
  servings?: number;
  equipment?: string[];
  dietTags?: string[];
  notes?: string;
}

function mapDifficulty(d: Recipe["difficulty"]): GeneratedRecipe["difficulty"] {
  return d === "hard" ? "medium" : d;
}

function recipeToGenerated(r: Recipe, pantry: Set<string>, why: string): GeneratedRecipe {
  const nut = bestEffortNutrition(r).estimate;
  const cps = calculateCostPerServing(r);
  const costByIng = new Map<string, number>();
  for (const b of ingredientCostBreakdown(r)) {
    if (b.ingredient) costByIng.set(b.ingredient.id, b.cost);
  }
  const missing = r.ingredients.filter((ri) => !ri.optional && !pantry.has(ri.ingredientId));
  return {
    name: r.name,
    description: r.description,
    userRequestSummary: "",
    whyThisFits: why,
    mealType: r.mealType,
    cuisineStyle: r.cuisine ?? "",
    servings: r.servings,
    prepTimeMinutes: r.prepTimeMinutes ?? Math.round(r.totalTimeMinutes * 0.3),
    cookTimeMinutes: r.cookTimeMinutes ?? Math.round(r.totalTimeMinutes * 0.7),
    totalTimeMinutes: r.totalTimeMinutes,
    difficulty: mapDifficulty(r.difficulty),
    equipment: r.equipment,
    primaryCookingMethod: r.primaryCookingMethod ?? "stovetop",
    noStovetopRequired: !!r.noStovetopRequired,
    estimatedTotalCost: Number((cps * r.servings).toFixed(2)),
    estimatedCostPerServing: Number(cps.toFixed(2)),
    estimatedMissingIngredientCost: Number(missing.reduce((s, ri) => s + (costByIng.get(ri.ingredientId) ?? 0), 0).toFixed(2)),
    ingredients: r.ingredients.map((ri) => ({
      name: ingredientLabel(ri.ingredientId),
      quantity: ri.quantity,
      unit: INGREDIENT_MAP.get(ri.ingredientId)?.unit ?? "",
      estimatedCost: Number((costByIng.get(ri.ingredientId) ?? 0).toFixed(2)),
      userAlreadyHas: pantry.has(ri.ingredientId),
      optional: !!ri.optional,
      category: INGREDIENT_MAP.get(ri.ingredientId)?.category ?? "",
    })),
    missingIngredients: missing.map((ri) => ({
      name: ingredientLabel(ri.ingredientId),
      estimatedCost: Number((costByIng.get(ri.ingredientId) ?? 0).toFixed(2)),
      importance: "required" as const,
      cheapSubstitute: null,
    })),
    steps: r.steps,
    guidedCookingSteps: (r.guidedCookingSteps ?? []).map((s) => ({
      title: s.title,
      instruction: s.instruction,
      timerMinutes: s.timerMinutes ?? null,
      safetyNote: null,
    })),
    cheapTips: r.cheapTips ?? [],
    substitutions: (r.substitutions ?? []).map((s) => ({
      original: ingredientLabel(s.forIngredientId),
      swap: s.swap,
      why: s.savings ?? "",
      estimatedSavings: null,
    })),
    makeItCheaper: [],
    makeItHealthier: r.healthierTips ?? [],
    makeItHigherProtein: [],
    pantryStaplesUsed: r.ingredients.filter((ri) => pantry.has(ri.ingredientId)).map((ri) => ingredientLabel(ri.ingredientId)),
    optionalAddIns: r.optionalAddIns ?? [],
    studentTips: r.cheapTips ?? [],
    storageInstructions: r.storageInstructions ?? "",
    reheatingInstructions: r.reheatingInstructions ?? "",
    safetyNotes: [],
    estimatedNutrition: { calories: nut.calories, protein: nut.protein, carbs: nut.carbs, fat: nut.fat, fiber: nut.fiber ?? 0 },
    tags: r.tags ?? [],
    imagePromptHint: r.name,
  };
}

// ── Notes / cravings → ranking signal ────────────────────────────────────────
// The on-device path used to ignore the user's note entirely; now it actually
// boosts recipes that match what they asked for (keywords + intent).
const NOTE_STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "with", "without", "some", "something", "make",
  "want", "need", "for", "me", "my", "i", "is", "of", "to", "in", "on", "that",
  "please", "really", "very", "like", "im", "give", "cook", "recipe", "food",
  "dish", "meal", "would", "love", "can", "you", "have", "got", "use", "using",
]);

function parseNotes(notes?: string): string[] {
  if (!notes) return [];
  return notes
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !NOTE_STOPWORDS.has(w));
}

function notesBoost(r: Recipe, tokens: string[], rawNotes: string): number {
  if (!tokens.length) return 0;
  const hay = `${r.name} ${r.description} ${r.cuisine ?? ""} ${(r.tags ?? []).join(" ")} ${r.dietTags.join(" ")} ${r.mealType}`.toLowerCase();
  let boost = 0;
  for (const t of tokens) {
    if (hay.includes(t)) boost += 26;
    else if (r.ingredients.some((ri) => ingredientLabel(ri.ingredientId).toLowerCase().includes(t))) boost += 18;
  }
  const n = rawNotes.toLowerCase();
  const nut = bestEffortNutrition(r).estimate;
  if (/protein/.test(n) && nut.protein >= 25) boost += 22;
  if (/(spic|chil|\bhot\b|fiery)/.test(n) && /(spic|chil|\bhot\b|sriracha|curry|jalape|cajun|harissa|gochu)/.test(hay)) boost += 22;
  if (/(health|light|lean|low.?cal|clean)/.test(n) && nut.calories <= 450) boost += 16;
  if (/(quick|fast|easy|hurry|\b10\b|\b15\b|\b20\b)/.test(n) && r.totalTimeMinutes <= 20) boost += 16;
  if (/(cheap|budget|broke|afford)/.test(n) && calculateCostPerServing(r) <= 2.5) boost += 16;
  if (/(vegetarian|veggie|meatless)/.test(n) && r.dietTags.includes("vegetarian")) boost += 22;
  if (/\bvegan\b/.test(n) && r.dietTags.includes("vegan")) boost += 24;
  if (/(comfort|cozy|hearty|filling)/.test(n) && nut.calories >= 500) boost += 12;
  return boost;
}

function candidatePool(input: LocalChefInput): { recipe: Recipe; score: number }[] {
  const equipment = (input.equipment ?? []) as Equipment[];
  const diet = (input.dietTags ?? []) as DietTag[];
  const budget = input.budgetPerServing && input.budgetPerServing > 0 ? input.budgetPerServing : 999;

  let ranked: { recipe: Recipe; score: number }[] = [];
  if (input.pantryIds.length > 0) {
    ranked = rankPantryCatalog(input.pantryIds.map((id) => ({ ingredientId: id })), { equipment, diet })
      .map((r) => ({ recipe: r.recipe, score: r.score }));
  }
  if (!ranked.length) {
    ranked = rankCheapCatalog({ budgetPerServing: budget, equipment, diet })
      .map((r) => ({ recipe: r.recipe, score: r.score }));
  }
  if (!ranked.length) {
    // Last resort: still honor equipment + diet (only ignore them if nothing at
    // all matches, so the UI always has *something* to show).
    const fits = (r: Recipe) =>
      (!equipment.length || recipeFitsEquipment(r, equipment)) &&
      (!diet.length || diet.every((d) => r.dietTags.includes(d)));
    const filtered = ALL_RECIPES.filter(fits);
    ranked = (filtered.length ? filtered : ALL_RECIPES)
      .slice()
      .sort((a, b) => calculateCostPerServing(a) - calculateCostPerServing(b))
      .map((recipe) => ({ recipe, score: 0 }));
  }

  // Apply the note boost + a soft over-budget penalty across the whole pool, so
  // every lens (best/cheap/fast/protein) is drawn from genuinely relevant dishes.
  const tokens = parseNotes(input.notes);
  const raw = input.notes ?? "";
  for (const x of ranked) {
    x.score += notesBoost(x.recipe, tokens, raw);
    if (budget < 999 && calculateCostPerServing(x.recipe) > budget) x.score -= 45;
  }
  ranked.sort((a, b) => b.score - a.score);
  return ranked;
}

/** Whether the user's note clearly matched the best pick (for an honest summary). */
function noteMatched(r: Recipe, input: LocalChefInput): boolean {
  const tokens = parseNotes(input.notes);
  return notesBoost(r, tokens, input.notes ?? "") >= 18;
}

/** Build a 4-option set (best-match / cheapest / fastest / high-protein). */
export function generateOptionsLocal(input: LocalChefInput): GeneratedRecipeOptionSet {
  const pantry = new Set(input.pantryIds);
  const pool = candidatePool(input).slice(0, 60).map((x) => x.recipe);
  if (pool.length === 0) {
    // truly nothing — synthesize from the cheapest recipe so the UI still works
    const fallback = [...ALL_RECIPES].sort((a, b) => calculateCostPerServing(a) - calculateCostPerServing(b))[0];
    if (fallback) pool.push(fallback);
  }

  const byCost = [...pool].sort((a, b) => calculateCostPerServing(a) - calculateCostPerServing(b));
  const byTime = [...pool].sort((a, b) => a.totalTimeMinutes - b.totalTimeMinutes);
  const byProtein = [...pool].sort((a, b) => bestEffortNutrition(b).estimate.protein - bestEffortNutrition(a).estimate.protein);

  const picks: { recipe: Recipe; label: OptionLabel; reason: string }[] = [];
  const used = new Set<string>();
  const add = (r: Recipe | undefined, label: OptionLabel, reason: string) => {
    if (!r || used.has(r.id)) return;
    used.add(r.id);
    picks.push({ recipe: r, label, reason });
  };
  const bestReason = input.notes && noteMatched(pool[0], input)
    ? `Best match for "${input.notes.trim()}"`
    : input.pantryIds.length ? "Best use of what's in your pantry" : "A great all-round pick";
  add(pool[0], "best-match", bestReason);
  add(byCost[0], "cheapest", `Cheapest option at $${calculateCostPerServing(byCost[0]).toFixed(2)}/serving`);
  add(byTime[0], "fastest", `Fastest — ready in ${byTime[0].totalTimeMinutes} min`);
  add(byProtein[0], "high-protein", `Highest protein (${Math.round(bestEffortNutrition(byProtein[0]).estimate.protein)}g/serving)`);
  // fill to 4 — prefer a different cuisine first for variety, then anything left
  const pickedCuisines = new Set(picks.map((p) => (p.recipe.cuisine ?? "").toLowerCase()));
  for (const r of pool) {
    if (picks.length >= 4) break;
    const c = (r.cuisine ?? "").toLowerCase();
    if (!used.has(r.id) && (!c || !pickedCuisines.has(c))) {
      add(r, "wildcard", "A tasty change of pace");
      pickedCuisines.add(c);
    }
  }
  for (const r of pool) {
    if (picks.length >= 4) break;
    add(r, "wildcard", "Another good match for your pantry");
  }

  const options = picks.slice(0, 4).map((p, i) => ({
    id: `local-${i + 1}`,
    optionLabel: p.label,
    shortReason: p.reason,
    pantryMatchScore: 0,
    selectedByDefault: i === 0,
    notesInfluenceSummary: input.notes
      ? (noteMatched(p.recipe, input) ? `Matches your note: "${input.notes.trim()}"` : `Considered your note: "${input.notes.trim()}"`)
      : "",
    recipe: recipeToGenerated(p.recipe, pantry, p.reason),
  }));

  return { mainOptionId: options[0]?.id ?? "local-1", options };
}

/** Local refinement — re-pick from the catalog optimizing for the request. */
export function refineLocal(base: GeneratedRecipe, request: string, input: LocalChefInput): GeneratedRecipe {
  const pantry = new Set(input.pantryIds);
  const pool = candidatePool(input).slice(0, 60).map((x) => x.recipe).filter((r) => r.name !== base.name);
  if (pool.length === 0) return base;
  const r = request.toLowerCase();
  let pick: Recipe;
  if (r.includes("cheap")) pick = [...pool].sort((a, b) => calculateCostPerServing(a) - calculateCostPerServing(b))[0];
  else if (r.includes("protein")) pick = [...pool].sort((a, b) => bestEffortNutrition(b).estimate.protein - bestEffortNutrition(a).estimate.protein)[0];
  else if (r.includes("fast")) pick = [...pool].sort((a, b) => a.totalTimeMinutes - b.totalTimeMinutes)[0];
  else if (r.includes("fewer")) pick = [...pool].sort((a, b) => a.ingredients.filter((x) => !pantry.has(x.ingredientId)).length - b.ingredients.filter((x) => !pantry.has(x.ingredientId)).length)[0];
  else pick = pool[0];
  return recipeToGenerated(pick, pantry, `Refined for "${request}"`);
}
