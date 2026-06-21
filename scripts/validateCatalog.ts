import { ALL_RECIPES, CATALOG_RECIPES } from "../src/data/recipes";
import { INGREDIENT_MAP } from "../src/data/ingredients";

const invalidIds = new Map<string, string[]>();
const idCounts = new Map<string, number>();
const nameCounts = new Map<string, string[]>();
const emptyIssues: string[] = [];
const proteinShakes: { id: string; name: string }[] = [];

for (const r of ALL_RECIPES) {
  idCounts.set(r.id, (idCounts.get(r.id) || 0) + 1);
  const nk = r.name.toLowerCase().trim();
  if (!nameCounts.has(nk)) nameCounts.set(nk, []);
  nameCounts.get(nk)!.push(r.id);
  for (const ing of r.ingredients || []) {
    if (!INGREDIENT_MAP.has(ing.ingredientId)) {
      if (!invalidIds.has(ing.ingredientId)) invalidIds.set(ing.ingredientId, []);
      invalidIds.get(ing.ingredientId)!.push(r.id);
    }
  }
  if (!r.ingredients?.length) emptyIssues.push(r.id + " (no ingredients)");
  if (!r.steps?.length) emptyIssues.push(r.id + " (no steps)");
  const hasPP = (r.ingredients || []).some((i) => i.ingredientId === "protein-powder");
  const txt = (r.name + " " + (r.description || "")).toLowerCase();
  if ((hasPP && /shake|smoothie|blend|milkshake/.test(txt)) || /protein shake|protein smoothie|protein milkshake/.test(txt)) {
    proteinShakes.push({ id: r.id, name: r.name });
  }
}

console.log("ALL_RECIPES:", ALL_RECIPES.length, "| CATALOG_RECIPES:", CATALOG_RECIPES.length);
console.log("\n=== INVALID ingredient ids:", invalidIds.size, "===");
for (const [id, rs] of invalidIds) console.log("  " + id + "  (" + rs.length + " recipes, e.g. " + rs.slice(0, 3).join(", ") + ")");
console.log("\n=== DUPLICATE recipe ids ===");
let dup = 0;
for (const [id, c] of idCounts) if (c > 1) { console.log("  " + id + " x" + c); dup++; }
if (!dup) console.log("  (none)");
console.log("\n=== DUPLICATE names (>1 id share a name) ===");
let dn = 0;
for (const [nm, ids] of nameCounts) if (ids.length > 1) { if (dn < 25) console.log("  \"" + nm + "\" → " + ids.join(", ")); dn++; }
console.log("  total duplicate-name groups:", dn);
console.log("\n=== EMPTY ingredients/steps:", emptyIssues.length, "===");
emptyIssues.slice(0, 15).forEach((e) => console.log("  " + e));
console.log("\n=== PROTEIN-SHAKE recipes (" + proteinShakes.length + ") ===");
proteinShakes.forEach((p) => console.log("  " + p.id + "  —  " + p.name));
