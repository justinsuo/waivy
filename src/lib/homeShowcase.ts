import type { Recipe } from "@/lib/types";
import { calculateCostPerServing } from "@/lib/recipeScoring";

/**
 * Home-page recipe rotation — shared by the web home (`src/app/page.tsx`) and
 * the mobile home (`mobile/src/app/(tabs)/index.tsx`) so both behave the same.
 *
 * Goals:
 *  - Don't let baking/desserts dominate the home (cheap flour/sugar bakes
 *    otherwise win a pure cost sort). `homeSurcharge` softly pushes sweets +
 *    involved/big recipes down — a ranking nudge, NOT a filter, so a genuinely
 *    cheap treat can still occasionally appear.
 *  - Show *different* recipes each visit/launch. `pickHomeShowcase` draws a fresh,
 *    diversity-capped, seeded-random set from the top of the ranking, leaning
 *    cheap + savory but rotating so the home feels alive.
 *
 * Pure / React-Native-safe: only Math, Map/Set — no web-only or RN-only APIs.
 */

export const isBakingRecipe = (r: Recipe): boolean => !!r.tags?.includes("baking");

/**
 * Sweets/desserts: baking, a dessert/sweet tag, or the "Dessert" cuisine. Kept
 * off the home lead so "what should we cook" surfaces savory food first (a
 * $0.25 chocolate cake otherwise wins the cheap sort just like baking did).
 */
export const isSweetRecipe = (r: Recipe): boolean =>
  isBakingRecipe(r) ||
  r.cuisine === "Dessert" ||
  !!r.tags?.some((t) => t === "dessert" || t === "sweet");

// Gentle, home-only bias toward quick everyday meals. Returns a
// $/serving-equivalent surcharge added to cost before ranking (not a filter).
export function homeSurcharge(r: Recipe): number {
  let s = 0;
  if (isSweetRecipe(r)) s += 2.5; // soft "tend not to lead" on home
  const ing = r.ingredients?.length ?? 0;
  if (ing > 8) s += (ing - 8) * 0.06; // involved: many ingredients
  const t = r.totalTimeMinutes ?? 0;
  if (t > 30) s += (t - 30) * 0.012; // involved: long time
  if (r.difficulty === "medium") s += 0.25;
  else if (r.difficulty === "hard") s += 0.7; // involved: harder
  const sv = r.servings ?? 0;
  if (sv > 6) s += (sv - 6) * 0.08; // large batch
  return s;
}

export function homeRank(r: Recipe): number {
  return calculateCostPerServing(r) + homeSurcharge(r);
}

/** Top `poolSize` recipes by home rank (cheapest + savory first). */
export function rankedHomePool(recipes: Recipe[], poolSize = 48): Recipe[] {
  return [...recipes]
    .sort((a, b) => homeRank(a) - homeRank(b))
    .slice(0, Math.max(poolSize, 0));
}

// Small, fast, seedable PRNG. Same seed → same sequence (lets SSR + the first
// client render agree, then we reseed on mount to rotate).
function mulberry32(seed: number) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface ShowcaseOpts {
  maxSweet?: number; // hard cap on sweet/dessert items in the result (default 1)
  maxPerCuisine?: number; // hard cap per cuisine, for variety (default 2)
  tau?: number; // exponential decay over pool rank; bigger = flatter/more variety (default 18)
}

/**
 * Pick `count` recipes from a PRE-RANKED pool (best first) using seeded weighted
 * sampling without replacement. Weights decay with rank so cheaper/savory
 * recipes are favored but not guaranteed, giving rotation + variety. Diversity
 * caps (sweets, cuisine) are enforced first, then relaxed only if needed to fill.
 * Deterministic for a given (pool, count, seed).
 */
export function pickHomeShowcase(
  pool: Recipe[],
  count: number,
  seed: number,
  opts: ShowcaseOpts = {},
): Recipe[] {
  const { maxSweet = 1, maxPerCuisine = 2, tau = 18 } = opts;
  if (pool.length <= count) return [...pool];

  const rng = mulberry32(seed);
  const weights = pool.map((_, i) => Math.exp(-i / tau));
  const used = new Set<number>();
  const chosen: Recipe[] = [];
  let sweetCount = 0;
  const cuisineCount = new Map<string, number>();

  const pickIndex = (enforceCaps: boolean): number | null => {
    const eligible: number[] = [];
    let totalW = 0;
    for (let i = 0; i < pool.length; i++) {
      if (used.has(i)) continue;
      if (enforceCaps) {
        if (isSweetRecipe(pool[i]) && sweetCount >= maxSweet) continue;
        const c = pool[i].cuisine || "";
        if (c && (cuisineCount.get(c) || 0) >= maxPerCuisine) continue;
      }
      eligible.push(i);
      totalW += weights[i];
    }
    if (!eligible.length) return null;
    let r = rng() * totalW;
    for (const i of eligible) {
      r -= weights[i];
      if (r <= 0) return i;
    }
    return eligible[eligible.length - 1];
  };

  while (chosen.length < count) {
    let idx = pickIndex(true);
    if (idx == null) idx = pickIndex(false); // relax caps to guarantee a full set
    if (idx == null) break;
    used.add(idx);
    const r = pool[idx];
    chosen.push(r);
    if (isSweetRecipe(r)) sweetCount++;
    if (r.cuisine) cuisineCount.set(r.cuisine, (cuisineCount.get(r.cuisine) || 0) + 1);
  }
  return chosen;
}
