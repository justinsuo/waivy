/**
 * Generate a human-readable catalog of every pantry ingredient:
 *   docs/catalog/ingredients.csv   — full data (one row per ingredient)
 *   docs/catalog/ingredients.md    — grouped by category, with price + macros
 * Run: npx tsx scripts/generateIngredientDocs.ts
 */
import { INGREDIENTS, CATEGORY_LABEL } from "@/data/ingredients";
import { INGREDIENT_NUTRITION } from "@/data/ingredientNutrition";
import * as fs from "fs";

const sorted = [...INGREDIENTS].sort(
  (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name),
);

const csvEsc = (v: unknown) => {
  const s = v === undefined || v === null ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

// ----- CSV -----
const header = ["id", "name", "category", "unit", "estimatedUnitCost", "commonPackageSize", "shelfLifeDays", "tags", "calories", "protein_g", "carbs_g", "fat_g", "fiber_g"];
const rows = [header.join(",")];
for (const i of sorted) {
  const n = INGREDIENT_NUTRITION[i.id];
  rows.push([
    i.id, i.name, i.category, i.unit, i.estimatedUnitCost,
    i.commonPackageSize ?? "", i.shelfLifeDays ?? "", (i.tags ?? []).join("; "),
    n?.calories ?? "", n?.protein ?? "", n?.carbs ?? "", n?.fat ?? "", n?.fiber ?? "",
  ].map(csvEsc).join(","));
}
fs.writeFileSync("docs/catalog/ingredients.csv", rows.join("\n") + "\n");

// ----- Markdown -----
const byCat: Record<string, typeof sorted> = {};
for (const i of sorted) (byCat[i.category] ||= []).push(i);
const cats = Object.keys(byCat).sort((a, b) => (CATEGORY_LABEL[a] ?? a).localeCompare(CATEGORY_LABEL[b] ?? b));

const md: string[] = [
  "# Ingredient Catalog",
  "",
  `Every ingredient the pantry knows about — **${INGREDIENTS.length}** in total, grouped by category. ` +
    "Prices are 2026 US grocery estimates per the listed unit; macros are per one unit. " +
    "Generated from `src/data/ingredients.ts` + `ingredientNutrition.ts` by `scripts/generateIngredientDocs.ts`.",
  "",
  "| Category | Count |",
  "| --- | ---: |",
  ...cats.map((c) => `| ${CATEGORY_LABEL[c] ?? c} | ${byCat[c].length} |`),
  `| **Total** | **${INGREDIENTS.length}** |`,
  "",
];
for (const c of cats) {
  md.push(`## ${CATEGORY_LABEL[c] ?? c} (${byCat[c].length})`, "");
  md.push("| Ingredient | id | Unit | $/unit | kcal | Protein | Carbs | Fat |");
  md.push("| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |");
  for (const i of byCat[c]) {
    const n = INGREDIENT_NUTRITION[i.id];
    md.push(
      `| ${i.name} | \`${i.id}\` | ${i.unit} | $${i.estimatedUnitCost.toFixed(2)} | ` +
        `${n ? n.calories : "—"} | ${n ? n.protein + "g" : "—"} | ${n ? n.carbs + "g" : "—"} | ${n ? n.fat + "g" : "—"} |`,
    );
  }
  md.push("");
}
fs.writeFileSync("docs/catalog/ingredients.md", md.join("\n") + "\n");

const withNut = sorted.filter((i) => INGREDIENT_NUTRITION[i.id]).length;
console.log(`Wrote docs/catalog/ingredients.csv + ingredients.md — ${INGREDIENTS.length} ingredients (${withNut} with nutrition) across ${cats.length} categories.`);
