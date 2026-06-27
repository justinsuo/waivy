/**
 * Ranked, typo-tolerant ingredient search for the pantry add-flow.
 *
 * The catalog has ~1,900 ingredients, so a plain `includes()` filter buries the
 * obvious match (typing "rice" surfaced "Rice noodles" before "Rice"). This
 * ranks by how the query hits the name — exact > prefix > word-start >
 * substring > fuzzy (typo) — then by name length so the shortest, most direct
 * match wins ties. Fuzzy tolerance is reused from the web's `fuzzyMatch`.
 */
import { INGREDIENTS } from "@/data/ingredients";
import { isFuzzyMatch } from "@/lib/search/fuzzyMatch";
import type { Ingredient } from "@/lib/types";

export function rankIngredients(
  query: string,
  exclude: (id: string) => boolean,
  limit = 12,
): Ingredient[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { ing: Ingredient; tier: number }[] = [];
  for (const ing of INGREDIENTS) {
    if (exclude(ing.id)) continue;
    const name = ing.name.toLowerCase();
    let tier = -1;
    if (name === q) tier = 0;
    else if (name.startsWith(q)) tier = 1;
    else if (name.split(/\s+/).some((w) => w.startsWith(q))) tier = 2;
    else if (name.includes(q)) tier = 3;
    else if (isFuzzyMatch(q, ing.name)) tier = 4;
    if (tier >= 0) scored.push({ ing, tier });
  }

  scored.sort((a, b) => a.tier - b.tier || a.ing.name.length - b.ing.name.length);
  return scored.slice(0, limit).map((s) => s.ing);
}
