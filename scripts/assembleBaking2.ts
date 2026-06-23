import { readFileSync, writeFileSync } from "fs";
import type { Recipe, RecipeImage } from "../src/lib/types";
import { INGREDIENTS, INGREDIENT_MAP } from "../src/data/ingredients";
import { ALL_RECIPES } from "../src/data/recipes";

// Reads /tmp/baking-2-kept.json (the workflow's `kept` array: [{dish,recipe,verdict,image}]),
// normalizes ingredient quantities to catalog units from the human notes, drops collisions,
// and emits src/data/bakingRecipes2.ts + bakingRecipePhotos2.ts.

type Kept = {
  dish: { slug: string; name: string };
  recipe: Recipe & { id?: string };
  verdict: { qualityScore: number; reasoning?: string };
  image: null | { found?: boolean; verifiedMatch?: boolean; src?: string; sourceUrl?: string; license?: string; attributionText?: string };
};

const kept: Kept[] = JSON.parse(readFileSync("/tmp/baking-2-kept.json", "utf8"));

// id -> catalog unit
const unitOf: Record<string, string> = {};
for (const ing of INGREDIENTS) unitOf[ing.id] = ing.unit;

// ---- note -> catalog-unit quantity normalizer (source of truth = the human note) ----
function parseNote(note: string | undefined) {
  if (!note) return null;
  const n = note.toLowerCase();
  const m = n.match(/(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)\s*(cups?|tbsps?|tablespoons?|tsps?|teaspoons?|ounces?|oz|sticks?|cloves?|pinch(?:es)?)/);
  if (!m) return null;
  const a = m[1].trim();
  let amt: number;
  if (/\s/.test(a)) { const [w, f] = a.split(/\s+/); const [p, q] = f.split("/"); amt = parseFloat(w) + +p / +q; }
  else if (a.includes("/")) { const [p, q] = a.split("/"); amt = +p / +q; }
  else amt = parseFloat(a);
  let u = m[2];
  if (/cup/.test(u)) u = "cup"; else if (/tbsp|tablespoon/.test(u)) u = "tbsp"; else if (/tsp|teaspoon/.test(u)) u = "tsp";
  else if (/oz|ounce/.test(u)) u = "oz"; else if (/stick/.test(u)) u = "stick"; else if (/clove/.test(u)) u = "clove"; else u = "pinch";
  return { amt, u };
}
const TBSP: Record<string, number> = { cup: 16, tbsp: 1, tsp: 1 / 3, oz: 2, stick: 8, pinch: 1 / 16, clove: 0 };
const CUP: Record<string, number> = { cup: 1, tbsp: 1 / 16, tsp: 1 / 48, oz: 1 / 8, stick: 1 / 2, pinch: 0, clove: 0 };
const TSP: Record<string, number> = { tsp: 1, tbsp: 3, cup: 48, oz: 6, stick: 24, pinch: 1 / 16, clove: 0 };
const OZ: Record<string, number> = { oz: 1, cup: 8, tbsp: 0.5, tsp: 1 / 6, stick: 4, pinch: 0, clove: 0 };
function convert(amt: number, from: string, to: string): number | null {
  const T = ({ tbsp: TBSP, cup: CUP, tsp: TSP, oz: OZ } as Record<string, Record<string, number>>)[to];
  if (!T || T[from] == null) return null;
  return amt * T[from];
}

// exclude this batch's own ids so a re-run after wiring doesn't self-collide
const priorRecipes = ALL_RECIPES.filter((r) => !r.id.startsWith("bake2-"));
const existingNames = new Set(priorRecipes.map((r) => r.name.toLowerCase().trim()));
const existingIds = new Set(priorRecipes.map((r) => r.id));

const VALID_DIFF = new Set(["easy", "medium", "hard"]);
const VALID_EQUIP = new Set(["microwave", "stovetop", "oven", "rice-cooker", "air-fryer", "blender", "no-kitchen"]);
const VALID_DIET = new Set(["vegetarian", "vegan", "high-protein", "gluten-free", "dairy-free"]);
const unknownIds = new Map<string, number>();
const recipes: Recipe[] = [];
const photos: Record<string, RecipeImage> = {};
const dropped: string[] = [];
let fixedQty = 0;

const seenName = new Set<string>();
const seenId = new Set<string>();

for (const k of kept) {
  const r = k.recipe;
  const id = k.dish.slug;
  const nameKey = (r.name || k.dish.name).toLowerCase().trim();
  // collisions (vs catalog + within this batch)
  if (existingIds.has(id) || existingNames.has(nameKey) || seenId.has(id) || seenName.has(nameKey)) { dropped.push(r.name || k.dish.name); continue; }
  seenId.add(id); seenName.add(nameKey);

  // normalize quantities from notes; track unknown ids
  for (const ing of r.ingredients) {
    const cu = unitOf[ing.ingredientId];
    if (!cu) { unknownIds.set(ing.ingredientId, (unknownIds.get(ing.ingredientId) || 0) + 1); continue; }
    if (!["cup", "tbsp", "tsp", "oz"].includes(cu)) continue;
    const p = parseNote(ing.note);
    if (!p) continue;
    const q = convert(p.amt, p.u, cu);
    if (q == null || !(q > 0)) continue;
    if (Math.abs(q - ing.quantity) > 0.05 * Math.max(q, ing.quantity)) { ing.quantity = Math.round(q * 100) / 100; fixedQty++; }
  }

  // enforce invariants — equipment must be from the strict Equipment union
  const stepText = (r.steps || []).join(" ").toLowerCase();
  const needsStove = /saucepan|stovetop|stove top|double boiler|simmer|bring .*to a boil|over (?:medium|low|high)(?:-high|-low)? heat|in a (?:small |medium |large )?(?:pot|pan)\b|melt .*(?:in|over)/.test(stepText);
  const equipment = Array.from(new Set([
    ...(r.equipment || []).filter((e) => VALID_EQUIP.has(e as string)),
    "oven",
    ...(needsStove ? ["stovetop"] : []),
  ])) as Recipe["equipment"];
  const noStovetopRequired = !equipment.includes("stovetop");
  const tags = Array.from(new Set([...(r.tags || []), "baking"]));
  const difficulty = VALID_DIFF.has(r.difficulty as string) ? r.difficulty : "medium";
  const dietTags = (r.dietTags || []).filter((d) => VALID_DIET.has(d as string)) as Recipe["dietTags"];
  const n = r.estimatedNutrition;

  // build from an explicit whitelist so stray agent fields (prepTime, tips, …) are dropped
  const out: Recipe = {
    id,
    name: r.name,
    description: r.description,
    mealType: r.mealType,
    servings: r.servings,
    ingredients: r.ingredients.map((ing) => ({
      ingredientId: ing.ingredientId,
      quantity: ing.quantity,
      ...(ing.optional ? { optional: true } : {}),
      ...(ing.note ? { note: ing.note } : {}),
    })),
    steps: r.steps,
    totalTimeMinutes: r.totalTimeMinutes,
    prepTimeMinutes: r.prepTimeMinutes,
    cookTimeMinutes: r.cookTimeMinutes,
    difficulty: difficulty as Recipe["difficulty"],
    equipment,
    primaryCookingMethod: "oven",
    noStovetopRequired,
    dietTags,
    cheapTips: r.cheapTips || [],
    substitutions: (r.substitutions || [])
      .filter((s) => s && s.forIngredientId && s.swap)
      .map((s) => ({ forIngredientId: s.forIngredientId, swap: s.swap, ...(s.savings ? { savings: s.savings } : {}) })),
    estimatedNutrition: { calories: n.calories, protein: n.protein, carbs: n.carbs, fat: n.fat, fiber: n.fiber },
    emoji: r.emoji || "🍰",
    accentColor: r.accentColor || "bg-amber-100",
    cuisine: r.cuisine,
    tags,
  };
  recipes.push(out);

  // image
  const im = k.image;
  if (im && im.found && im.verifiedMatch && im.src) {
    const lic = im.license || "";
    const attribReq = /cc by/i.test(lic);
    const entry: RecipeImage = {
      src: im.src,
      alt: `Photo of ${r.name}`,
      sourceName: "Wikimedia Commons",
      sourceUrl: im.sourceUrl || im.src,
      license: lic || "CC0",
      attributionRequired: attribReq,
      verifiedMatch: true,
    };
    if (attribReq && im.attributionText) entry.attributionText = im.attributionText;
    photos[id] = entry;
  }
}

const header = `import type { Recipe } from "@/lib/types";

/**
 * Baking recipes — batch 2 (oven). A large quality-gated set of niche + regional
 * bakes: French, Italian, Spanish/Portuguese, Eastern-European, Greek/Turkish/ME,
 * Indian/SE-Asian/East-Asian classics plus American regional pies & cakes. Each was
 * authored with valid catalog ingredient ids in catalog units, then judged by a
 * strict pastry chef that REJECTS slop; only authentic, score >= 7 keepers made it
 * in. All tagged "baking" + equipment "oven". Photos in bakingRecipePhotos2.ts.
 */
export const BAKING_RECIPES_2: Recipe[] = `;
writeFileSync("src/data/bakingRecipes2.ts", header + JSON.stringify(recipes, null, 2) + ";\n");

const phHeader = `import type { RecipeImage } from "@/lib/types";

/** Freely-licensed, hand-verified photos for baking batch 2 (Wikimedia Commons, CC0/CC BY/CC BY-SA). */
export const BAKING_RECIPE_PHOTOS_2: Record<string, RecipeImage> = `;
writeFileSync("src/data/bakingRecipePhotos2.ts", phHeader + JSON.stringify(photos, null, 2) + ";\n");

console.log(`kept input: ${kept.length}`);
console.log(`written recipes: ${recipes.length} | photos: ${Object.keys(photos).length} | emoji-fallback: ${recipes.length - Object.keys(photos).length}`);
console.log(`quantities normalized from notes: ${fixedQty}`);
console.log(`dropped as collisions: ${dropped.length}${dropped.length ? " -> " + dropped.join(", ") : ""}`);
if (unknownIds.size) {
  console.log(`\nUNKNOWN ingredient ids (need alias or fix), count by id:`);
  for (const [id, n] of [...unknownIds.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${id}  x${n}`);
} else {
  console.log(`unknown ingredient ids: 0`);
}
