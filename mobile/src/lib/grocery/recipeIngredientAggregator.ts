/**
 * Smart grocery aggregation for the Recipe Cart.
 *
 * Merges the ingredients of every recipe in the cart into a single deduplicated
 * list: same ingredient across recipes collapses into one row, quantities add up
 * (when units match), and every row remembers which recipes need it + whether
 * it's already in the pantry.
 *
 *   Egg Fried Rice + Breakfast Sandwich  →  Eggs · 6 total · needed for 2 recipes
 */
import { INGREDIENT_MAP } from "@/data/ingredients";
import { quoteIngredient } from "@/lib/pricing/pricingEngine";
import type { CartRecipe, CartIngredient } from "./recipeCartStore";

export interface AggIngredient {
  ingredientId: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  cost: number;
  recipes: string[]; // names of recipes that need this
  inPantry: boolean;
}

function priceOf(id: string, qty: number): number {
  try {
    return quoteIngredient(id, qty || 1)?.totalCost ?? 0;
  } catch {
    return 0;
  }
}

/** One merged row per ingredient across the whole cart. */
export function mergeIngredientsAcrossRecipes(cart: CartRecipe[], pantry: Set<string>): AggIngredient[] {
  const map = new Map<string, AggIngredient>();
  for (const r of cart) {
    for (const ing of r.ingredients) {
      if (ing.optional) continue;
      const cost = priceOf(ing.ingredientId, ing.quantity);
      const ex = map.get(ing.ingredientId);
      if (ex) {
        if (ex.unit === ing.unit) ex.quantity += ing.quantity;
        ex.cost += cost;
        if (!ex.recipes.includes(r.name)) ex.recipes.push(r.name);
      } else {
        map.set(ing.ingredientId, {
          ingredientId: ing.ingredientId,
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.unit,
          category: INGREDIENT_MAP.get(ing.ingredientId)?.category ?? "other",
          cost,
          recipes: [r.name],
          inPantry: pantry.has(ing.ingredientId),
        });
      }
    }
  }
  // Stable order: need-to-buy first, then by name.
  return [...map.values()].sort((a, b) => Number(a.inPantry) - Number(b.inPantry) || a.name.localeCompare(b.name));
}

/** Which recipes (names) in the cart use a given ingredient. */
export function getIngredientSources(cart: CartRecipe[], ingredientId: string): string[] {
  return cart.filter((r) => r.ingredients.some((i) => i.ingredientId === ingredientId)).map((r) => r.name);
}

/** Split one recipe's required ingredients into "already have" vs "need". */
export function calculateRecipeMissingItems(
  r: CartRecipe,
  pantry: Set<string>,
): { have: CartIngredient[]; need: CartIngredient[] } {
  const have: CartIngredient[] = [];
  const need: CartIngredient[] = [];
  for (const ing of r.ingredients) {
    if (ing.optional) continue;
    (pantry.has(ing.ingredientId) ? have : need).push(ing);
  }
  return { have, need };
}

export interface CartSummary {
  recipes: number;
  ingredientsNeeded: number;
  totalCost: number; // cost to buy what you don't already have
  protein: number; // total protein across all servings
}

export function summarizeCart(cart: CartRecipe[], agg: AggIngredient[]): CartSummary {
  const needed = agg.filter((a) => !a.inPantry);
  return {
    recipes: cart.length,
    ingredientsNeeded: needed.length,
    totalCost: Math.round(needed.reduce((s, a) => s + a.cost, 0) * 100) / 100,
    protein: Math.round(cart.reduce((s, r) => s + (r.protein || 0) * (r.servings || 1), 0)),
  };
}
