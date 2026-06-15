/**
 * Recipe Cart — the heart of the recipe-centric Grocery system.
 *
 * Recipes are first-class objects here: each cart entry is a self-contained
 * snapshot (name, image, cost, macros, and a normalized ingredient list whose
 * items carry a resolved `ingredientId` — a catalog id or a stable `ff:` id —
 * so the aggregator, pantry-matching and shopping list all work uniformly across
 * catalog, AI Chef, saved and explore recipes).
 *
 * Flow:  Recipes I want to cook  →  Ingredients needed  →  Shopping list
 *
 * The cart lives in `srf:recipe-cart`; the shopping list stays in `srf:grocery`.
 */
import { useCallback } from "react";
import { kv } from "@shared/platform/kv";
import { useKVRaw } from "../store";
import { resolveGroceryId } from "../stores/app";
import { getSeedRecipe, getCustom, ingredientLabel } from "../recipes";
import { getRecipeImage } from "@/data/recipeImages";
import { INGREDIENT_MAP } from "@/data/ingredients";
import { calculateCostPerServing } from "@/lib/recipeScoring";
import { bestEffortNutrition } from "@/lib/nutritionEngine";
import type { Recipe } from "@/lib/types";
import type { CustomRecipe } from "@/lib/customRecipeTypes";

export type CartSource = "catalog" | "ai" | "custom" | "explore";
export interface CartIngredient {
  ingredientId: string; // catalog id or stable ff: id
  name: string;
  quantity: number;
  unit: string;
  optional?: boolean;
}
export interface CartRecipe {
  key: string;
  recipeId?: string; // catalog/custom id, for "cook later" navigation
  source: CartSource;
  name: string;
  image?: string;
  servings: number;
  costPerServing: number;
  calories: number;
  protein: number;
  ingredients: CartIngredient[];
}

const KEY = "srf:recipe-cart";

function read(): CartRecipe[] {
  try {
    const r = kv().getItem(KEY);
    const list = r ? JSON.parse(r) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}
function write(list: CartRecipe[]) {
  kv().setItem(KEY, JSON.stringify(list));
}
function newKey() {
  return "rc-" + Math.random().toString(36).slice(2, 9);
}
const norm = (s: string) => s.toLowerCase().trim();

// ── Converters ───────────────────────────────────────────────────────────────

export function cartFromRecipe(r: Recipe): CartRecipe {
  const nut = bestEffortNutrition(r).estimate;
  return {
    key: newKey(),
    recipeId: r.id,
    source: "catalog",
    name: r.name,
    image: getRecipeImage(r.id)?.src,
    servings: r.servings,
    costPerServing: calculateCostPerServing(r),
    calories: nut.calories,
    protein: nut.protein,
    ingredients: r.ingredients.map((ri) => ({
      ingredientId: ri.ingredientId,
      name: ingredientLabel(ri.ingredientId),
      quantity: ri.quantity,
      unit: INGREDIENT_MAP.get(ri.ingredientId)?.unit ?? "",
      optional: ri.optional,
    })),
  };
}

export function cartFromCustom(c: CustomRecipe): CartRecipe {
  return {
    key: newKey(),
    recipeId: c.id,
    source: "custom",
    name: c.name,
    image: undefined,
    servings: c.servings || 1,
    costPerServing: c.estimatedCostPerServing || 0,
    calories: c.estimatedNutrition?.calories || 0,
    protein: c.estimatedNutrition?.protein || 0,
    ingredients: c.ingredients.map((i) => ({
      ingredientId: resolveGroceryId(i.name),
      name: i.name,
      quantity: i.quantity || 1,
      unit: i.unit || "",
      optional: i.optional,
    })),
  };
}

/** AI Chef GeneratedRecipe (free-text ingredients). */
export function cartFromGenerated(g: any, recipeId?: string): CartRecipe {
  return {
    key: newKey(),
    recipeId,
    source: "ai",
    name: g.name ?? "Recipe",
    image: undefined,
    servings: g.servings || 1,
    costPerServing: Number(g.estimatedCostPerServing) || 0,
    calories: g.estimatedNutrition?.calories || 0,
    protein: g.estimatedNutrition?.protein || 0,
    ingredients: (g.ingredients ?? []).map((i: any) => ({
      ingredientId: resolveGroceryId(i.name),
      name: i.name,
      quantity: Number(i.quantity) || 1,
      unit: i.unit || "",
      optional: i.optional,
    })),
  };
}

/** Explore (external API) recipe — { name, ingredients: [{name,...}], ... }. */
export function cartFromExternal(e: any): CartRecipe {
  const ings: any[] = Array.isArray(e.ingredients) ? e.ingredients : [];
  return {
    key: newKey(),
    recipeId: undefined,
    source: "explore",
    name: e.name ?? e.title ?? "Recipe",
    image: e.image ?? e.imageUrl,
    servings: e.servings || 2,
    costPerServing: Number(e.estimatedCostPerServing) || 0,
    calories: e.calories || e.nutrition?.calories || 0,
    protein: e.protein || e.nutrition?.protein || 0,
    ingredients: ings.map((i: any) => {
      const name = typeof i === "string" ? i : i.name ?? i.original ?? "";
      return { ingredientId: resolveGroceryId(name), name, quantity: Number(i?.quantity) || 1, unit: i?.unit || "" };
    }).filter((i: CartIngredient) => i.name),
  };
}

// ── Store hook ───────────────────────────────────────────────────────────────

export function useRecipeCart() {
  useKVRaw(KEY);
  const cart = read();

  const addCart = useCallback((c: CartRecipe) => {
    const cur = read();
    // Dedupe by recipeId when known, else by name.
    const dup = cur.some((x) => (c.recipeId && x.recipeId === c.recipeId) || (!c.recipeId && norm(x.name) === norm(c.name)));
    if (dup) return false;
    write([...cur, c]);
    return true;
  }, []);

  const addById = useCallback((id: string): boolean => {
    const seed = getSeedRecipe(id);
    if (seed) return addCart(cartFromRecipe(seed));
    const custom = getCustom(id);
    if (custom) return addCart(cartFromCustom(custom));
    return false;
  }, [addCart]);

  const addGenerated = useCallback((g: any, recipeId?: string) => addCart(cartFromGenerated(g, recipeId)), [addCart]);
  const addExternal = useCallback((e: any) => addCart(cartFromExternal(e)), [addCart]);

  const has = useCallback((idOrName: string) => {
    return read().some((x) => x.recipeId === idOrName || norm(x.name) === norm(idOrName));
  }, []);

  const remove = useCallback((key: string) => write(read().filter((x) => x.key !== key)), []);
  const setServings = useCallback((key: string, servings: number) => {
    write(read().map((x) => (x.key === key ? { ...x, servings: Math.max(1, servings) } : x)));
  }, []);
  const clear = useCallback(() => write([]), []);

  return { cart, addCart, addById, addGenerated, addExternal, has, remove, setServings, clear };
}
