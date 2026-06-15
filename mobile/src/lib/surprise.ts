/**
 * "Surprise me" pantry picker for AI Chef.
 *
 * Not random noise — it assembles a *coherent, cookable* basket the way a real
 * dish is built: a substantial base (protein / grain / beans), a vegetable or
 * two, an aromatic, and a sauce/condiment, plus implied staples (oil, salt).
 * Picks differ each call so it feels like a surprise, but the shape always makes
 * a sensible recipe.
 */
import { INGREDIENT_MAP } from "@/data/ingredients";
import { CATALOG_RECIPES } from "@/data/recipes";

// The most-used ingredients across the recipe catalog are exactly the everyday
// ones — a data-driven "common" pool, bucketed by category. Computed once.
let _commonByCat: Record<string, string[]> | null = null;
function commonByCategory(): Record<string, string[]> {
  if (_commonByCat) return _commonByCat;
  const freq = new Map<string, number>();
  for (const r of CATALOG_RECIPES) {
    for (const ing of r.ingredients) freq.set(ing.ingredientId, (freq.get(ing.ingredientId) ?? 0) + 1);
  }
  const ranked = [...freq.entries()]
    .filter(([id]) => INGREDIENT_MAP.has(id))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 140)
    .map(([id]) => id);
  const byCat: Record<string, string[]> = {};
  for (const id of ranked) {
    const cat = INGREDIENT_MAP.get(id)?.category ?? "other";
    (byCat[cat] ||= []).push(id);
  }
  _commonByCat = byCat;
  return byCat;
}

// Alliums/aromatics live in the "vegetable" category but act as a flavor base.
const AROMATIC_IDS = new Set([
  "onion", "garlic", "green-onion", "green onion", "scallion", "scallions",
  "shallot", "ginger", "leek", "garlic-powder", "onion-powder",
]);
// Always keep these if present — they're assumed for almost any dish.
const STAPLE_IDS = new Set([
  "oil", "olive-oil", "olive oil", "evoo", "vegetable-oil", "salt", "kosher-salt",
  "pepper", "black-pepper", "butter",
]);

function key(id: string): { id: string; name: string; cat: string } {
  const ing = INGREDIENT_MAP.get(id);
  return { id, name: (ing?.name ?? id).toLowerCase(), cat: ing?.category ?? "other" };
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build a fresh, *meaningful* random pantry from the curated catalog — a
 * realistic, cookable stock rather than random noise: everyday staples plus a
 * spread across proteins, grains, vegetables, condiments, dairy, canned goods,
 * a fruit and a frozen item. ~16-22 ingredients. Each shuffle differs.
 */
export function randomMeaningfulPantry(): string[] {
  const byCat = commonByCategory();
  const out = new Set<string>();
  // Staples almost any kitchen has.
  ["oil", "olive-oil", "evoo", "salt", "pepper", "garlic", "onion", "butter", "eggs"].forEach((id) => {
    if (INGREDIENT_MAP.has(id)) out.add(id);
  });
  const pick = (cat: string, n: number) => shuffle(byCat[cat] ?? []).slice(0, n).forEach((id) => out.add(id));
  pick("protein", 3);
  pick("grain", 3);
  pick("vegetable", 5);
  pick("condiment", 3);
  pick("dairy", 2);
  pick("canned", 2);
  pick("spice", 2);
  pick("fruit", 1);
  pick("frozen", 1);
  return [...out];
}

/**
 * Returns the subset of `pantryIds` to KEEP selected. Caller excludes the rest.
 */
export function surprisePantrySelection(pantryIds: string[]): string[] {
  // Too few to thin out — keep everything.
  if (pantryIds.length <= 4) return [...pantryIds];

  const staples: string[] = [];
  const aromatics: string[] = [];
  const byCat: Record<string, string[]> = {};
  for (const id of pantryIds) {
    const { name, cat } = key(id);
    if (STAPLE_IDS.has(id) || STAPLE_IDS.has(name)) staples.push(id);
    else if (AROMATIC_IDS.has(id) || AROMATIC_IDS.has(name)) aromatics.push(id);
    else (byCat[cat] ||= []).push(id);
  }
  const take = (arr: string[] | undefined, n: number) => shuffle(arr ?? []).slice(0, n);

  const out = new Set<string>();
  staples.forEach((s) => out.add(s)); // oil/salt are free to keep

  const proteins = byCat["protein"] ?? [];
  const beans = (byCat["canned"] ?? []).filter((id) => /bean|chickpea|lentil|tuna|salmon/.test(key(id).name));
  // A substantial base: a protein if we have one, else beans/canned, else a grain.
  if (proteins.length) take(proteins, 1).forEach((x) => out.add(x));
  else if (beans.length) take(beans, 1).forEach((x) => out.add(x));

  take(byCat["grain"], 1).forEach((x) => out.add(x)); // rice/pasta/etc. as the carb
  take(byCat["vegetable"], Math.random() < 0.5 ? 1 : 2).forEach((x) => out.add(x));
  take(aromatics, 1).forEach((x) => out.add(x));
  take(byCat["condiment"], 1).forEach((x) => out.add(x)); // a sauce ties it together
  if (Math.random() < 0.5) take(byCat["dairy"], 1).forEach((x) => out.add(x)); // cheese/yogurt sometimes
  if (Math.random() < 0.35) take(byCat["frozen"], 1).forEach((x) => out.add(x));
  if (out.size < 5) take(byCat["spice"], 1).forEach((x) => out.add(x));

  // Guarantee a usable minimum even if the pantry is oddly distributed.
  const pool = shuffle(pantryIds);
  let i = 0;
  while (out.size < Math.min(4, pantryIds.length) && i < pool.length) out.add(pool[i++]);

  return [...out];
}
