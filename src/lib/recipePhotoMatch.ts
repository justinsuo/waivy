/**
 * Borrowed-photo matcher.
 *
 * Most recipes in the catalog have no hand-verified photo (AI-generated rows,
 * macro variants) and user AI-Chef recipes never do. Rather than show a
 * placeholder — or pay to generate an image — we reuse the *real* photo of the
 * most similar recipe that DOES have one (the ~660 verified Wikimedia/Unsplash
 * shots). A "garlic shrimp linguine" borrows a real pasta photo; a novel dish
 * with no close match falls through to the gradient placeholder.
 *
 * Pure + free. Used by both web (RecipeImage) and mobile (seedToView) and as
 * the first step of AI image generation so we only pay the API when nothing
 * in the catalog is close enough.
 */
import type { RecipeImage } from "@/lib/types";
import { RECIPE_MAP } from "@/data/recipes";
import { RECIPE_IMAGES } from "@/data/recipeImages";

/** Minimal shape accepted from Recipe, CustomRecipe, or any AI recipe. */
type Matchable = {
  id?: string;
  name: string;
  ingredients?: readonly unknown[];
  cuisine?: string;
};

const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "with", "in", "on", "for", "to", "your",
  "classic", "homemade", "easy", "quick", "simple", "best", "ultimate", "perfect",
  "real", "authentic", "traditional", "style", "creamy", "crispy", "fresh", "hearty",
  "loaded", "spiced", "spicy", "sweet", "savory", "rich", "tender", "juicy", "golden",
  "recipe", "dish", "made", "minute", "min", "pot", "pan", "sheet", "skillet", "one",
  "two", "no", "low", "high", "extra", "super", "mini", "big", "little", "old",
  "fashioned", "favorite", "famous", "world", "grandmas", "moms",
]);

// True pantry staples — ignored for ingredient similarity so two unrelated
// dishes don't "match" just because both use salt + oil + flour.
const STAPLE = new Set([
  "salt", "pepper", "black-pepper", "water", "oil", "olive-oil", "vegetable-oil",
  "canola-oil", "sugar", "brown-sugar", "flour", "baking-soda", "baking-powder",
  "butter", "garlic", "onion", "cornstarch", "vanilla", "ice",
]);

interface Candidate {
  id: string;
  image: RecipeImage;
  tokens: Set<string>;
  ings: Set<string>;
  cuisine: string;
}

function tokenize(name: string): Set<string> {
  const out = new Set<string>();
  for (const raw of (name || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)) {
    if (raw.length > 2 && !STOP.has(raw)) out.add(raw);
  }
  return out;
}

function mainIngredients(recipe: Matchable): Set<string> {
  const out = new Set<string>();
  for (const ri of recipe.ingredients || []) {
    const id = (ri as { ingredientId?: string }).ingredientId;
    if (id && !STAPLE.has(id)) out.add(id);
  }
  return out;
}

let CANDIDATES: Candidate[] | null = null;
function candidates(): Candidate[] {
  if (CANDIDATES) return CANDIDATES;
  const list: Candidate[] = [];
  for (const id of Object.keys(RECIPE_IMAGES)) {
    const r = RECIPE_MAP.get(id);
    const image = RECIPE_IMAGES[id];
    if (!r || !image || !image.src) continue;
    list.push({
      id,
      image,
      tokens: tokenize(r.name),
      ings: mainIngredients(r),
      cuisine: (r.cuisine || "").toLowerCase(),
    });
  }
  CANDIDATES = list;
  return list;
}

const CACHE = new Map<string, RecipeImage | null>();

function inter<T>(a: Set<T>, b: Set<T>): number {
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n;
}

/**
 * Find a real photo from a similar recipe, or null if nothing is close enough.
 * Memoized per recipe id so list rendering stays cheap.
 */
export function findBorrowedPhoto(recipe: Matchable): RecipeImage | null {
  if (recipe.id && CACHE.has(recipe.id)) return CACHE.get(recipe.id)!;

  const tokens = tokenize(recipe.name);
  const ings = mainIngredients(recipe);
  const cuisine = (recipe.cuisine || "").toLowerCase();

  let best: Candidate | null = null;
  let bestScore = 0;
  let bestName = 0;
  let bestIng = 0;
  for (const c of candidates()) {
    if (c.id === recipe.id) continue;
    const nameOverlap = inter(tokens, c.tokens);
    const ingOverlap = inter(ings, c.ings);
    const cuisineMatch = cuisine && cuisine === c.cuisine ? 1 : 0;
    if (nameOverlap === 0 && ingOverlap === 0) continue;
    const score = nameOverlap * 5 + ingOverlap + cuisineMatch * 2;
    if (score > bestScore) {
      bestScore = score;
      best = c;
      bestName = nameOverlap;
      bestIng = ingOverlap;
    }
  }

  // Require a real signal: a shared dish word, or strong ingredient overlap.
  const ok = best && (bestName >= 1 || bestIng >= 2);
  const result: RecipeImage | null = ok
    ? { ...best!.image, verifiedMatch: false }
    : null;
  if (recipe.id) CACHE.set(recipe.id, result);
  return result;
}
