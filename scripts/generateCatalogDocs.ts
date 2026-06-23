import { mkdirSync, writeFileSync } from "fs";
import type { Recipe, RecipeImage } from "../src/lib/types";
import { CATALOG_RECIPES, ALL_RECIPES } from "../src/data/recipes";
import { RECIPE_IMAGES } from "../src/data/recipeImages";
import { INGREDIENTS } from "../src/data/ingredients";
import { calculateCostPerServing } from "../src/lib/recipeScoring";
import { bestEffortNutrition } from "../src/lib/nutritionEngine";

/**
 * Generates a browseable, visual recipe catalog under docs/catalog/:
 *   - README.md         index: stats, collection table, featured grid, links
 *   - <section>-N.md    visual gallery pages (image + full details) for every
 *                       recipe that has a hand-verified photo
 *   - all-recipes.csv   every browseable recipe with key details (full list)
 *
 * Run: npx tsx scripts/generateCatalogDocs.ts
 */

const SITE = "https://justinsuo.github.io/waivy";
const OUT = "docs/catalog";
const PER_PAGE = 100;

const nameOf: Record<string, string> = {};
const unitOf: Record<string, string> = {};
for (const i of INGREDIENTS) { nameOf[i.id] = i.name; unitOf[i.id] = i.unit; }

function liveUrl(id: string) { return `${SITE}/recipes/${id}/`; }

// shrink wikimedia thumbs for faster page loads; leave others as-is
function thumb(src: string) {
  if (src.includes("upload.wikimedia.org")) return src.replace(/\/\d+px-/, "/480px-");
  if (src.includes("images.unsplash.com")) return /[?&]w=/.test(src) ? src : (src.includes("?") ? `${src}&w=480` : `${src}?w=480`);
  return src;
}

function costStr(r: Recipe): string {
  try { const c = calculateCostPerServing(r); return c > 0 ? `$${c.toFixed(2)}` : "—"; }
  catch { return "—"; }
}
function nutOf(r: Recipe) {
  try { return bestEffortNutrition(r).estimate; }
  catch { return r.estimatedNutrition; }
}

function galleryCollection(id: string): "Baking" | "Drinks" | "Curated Classics" | "Signature & Global" {
  if (id.startsWith("bake-") || id.startsWith("bake2-")) return "Baking";
  if (id.startsWith("drink-")) return "Drinks";
  if (id.startsWith("cur-")) return "Curated Classics";
  return "Signature & Global";
}

function ingLine(ri: Recipe["ingredients"][number]): string {
  const nm = nameOf[ri.ingredientId] || ri.ingredientId;
  const detail = ri.note && ri.note.trim()
    ? ri.note.trim()
    : `${ri.quantity} ${unitOf[ri.ingredientId] || ""}`.replace(/\s+/g, " ").trim();
  return `**${nm}** — ${detail}${ri.optional ? " _(optional)_" : ""}`;
}

function esc(s: string): string { return (s || "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim(); }

function card(r: Recipe, img: RecipeImage): string {
  const n = nutOf(r);
  const meta = [r.cuisine, r.mealType, r.difficulty].filter(Boolean).join(" · ");
  const time = r.totalTimeMinutes ? `⏱ ${r.totalTimeMinutes} min` : "";
  const macros = n ? `${Math.round(n.calories)} kcal · P${Math.round(n.protein)} · C${Math.round(n.carbs)} · F${Math.round(n.fat)}` : "";
  const ings = r.ingredients.map((i) => `- ${ingLine(i)}`).join("\n");
  const steps = r.steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
  const credit = img.attributionRequired && img.attributionText
    ? `📷 ${img.attributionText}`
    : `📷 ${img.license || "Wikimedia Commons"}`;
  const lines = [
    `<img align="left" width="240" src="${thumb(img.src)}" alt="${esc(img.alt || r.name)}">`,
    ``,
    `#### ${r.emoji || "🍽"} [${r.name}](${liveUrl(r.id)})`,
    `${meta}  `,
    `**${costStr(r)}/serving** · ${macros} · ${time} · 🍽 ${r.servings}  `,
    ``,
    r.description ? `${r.description}` : "",
    ``,
    `<details><summary>📋 Ingredients & steps</summary>`,
    ``,
    `**Ingredients**`,
    ``,
    ings,
    ``,
    `**Steps**`,
    ``,
    steps,
    ``,
    `</details>`,
    ``,
    `<sub>${credit} · [Open in app →](${liveUrl(r.id)})</sub>`,
    ``,
    `<br clear="left">`,
    ``,
    `---`,
    ``,
  ];
  return lines.join("\n");
}

mkdirSync(OUT, { recursive: true });

// ---- gather recipes with images, grouped by gallery section ----
const sections: Record<string, Recipe[]> = { "Baking": [], "Drinks": [], "Curated Classics": [], "Signature & Global": [] };
for (const r of CATALOG_RECIPES) {
  if (!RECIPE_IMAGES[r.id]) continue;
  sections[galleryCollection(r.id)].push(r);
}
for (const k of Object.keys(sections)) sections[k].sort((a, b) => (a.cuisine || "").localeCompare(b.cuisine || "") || a.name.localeCompare(b.name));

const slug: Record<string, string> = { "Baking": "baking", "Drinks": "drinks", "Curated Classics": "curated", "Signature & Global": "signature" };
const sectionEmoji: Record<string, string> = { "Baking": "🍰", "Drinks": "🍹", "Curated Classics": "⭐", "Signature & Global": "🌍" };

type PageRef = { section: string; file: string; from: number; to: number; count: number };
const pages: PageRef[] = [];

for (const [section, list] of Object.entries(sections)) {
  if (!list.length) continue;
  const nPages = Math.ceil(list.length / PER_PAGE);
  for (let p = 0; p < nPages; p++) {
    const chunk = list.slice(p * PER_PAGE, (p + 1) * PER_PAGE);
    const file = nPages === 1 ? `${slug[section]}.md` : `${slug[section]}-${p + 1}.md`;
    const nav = nPages > 1
      ? `Pages: ${Array.from({ length: nPages }, (_, i) => i === p ? `**${i + 1}**` : `[${i + 1}](${nPages === 1 ? slug[section] : `${slug[section]}-${i + 1}`}.md)`).join(" · ")}\n\n`
      : "";
    const body = [
      `[← Catalog index](./README.md)`,
      ``,
      `# ${sectionEmoji[section]} ${section}${nPages > 1 ? ` (page ${p + 1}/${nPages})` : ""}`,
      ``,
      `${list.length} recipes with photos in this section. Every card links to the live, interactive recipe.`,
      ``,
      nav,
      `---`,
      ``,
      ...chunk.map((r) => card(r, RECIPE_IMAGES[r.id])),
      `[← Catalog index](./README.md)`,
      ``,
    ].join("\n");
    writeFileSync(`${OUT}/${file}`, body);
    pages.push({ section, file, from: p * PER_PAGE + 1, to: p * PER_PAGE + chunk.length, count: chunk.length });
  }
}

// ---- full CSV of every browseable recipe ----
const csvHead = ["id", "name", "collection", "cuisine", "mealType", "equipment", "difficulty", "costPerServing", "calories", "protein", "carbs", "fat", "fiber", "totalTimeMinutes", "servings", "hasPhoto", "liveUrl"];
const collOf = (id: string) => {
  if (id.startsWith("bake2-") || id.startsWith("bake-")) return "Baking";
  if (id.startsWith("drink-")) return "Drinks";
  if (id.startsWith("cur-")) return "Curated Classics";
  if (id.startsWith("mfr-")) return "Macro-Friendly";
  if (id.startsWith("gen-")) return "AI-Generated";
  return "Signature & Global";
};
const q = (v: string | number) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const rows = [csvHead.join(",")];
for (const r of CATALOG_RECIPES) {
  const n = nutOf(r);
  let cost = 0; try { cost = calculateCostPerServing(r); } catch { /* keep 0 */ }
  rows.push([
    q(r.id), q(r.name), q(collOf(r.id)), q(r.cuisine || ""), q(r.mealType || ""),
    q((r.equipment || []).join(";")), q(r.difficulty || ""), q(cost.toFixed(2)),
    q(Math.round(n?.calories || 0)), q(Math.round(n?.protein || 0)), q(Math.round(n?.carbs || 0)),
    q(Math.round(n?.fat || 0)), q(Math.round(n?.fiber || 0)), q(r.totalTimeMinutes || ""),
    q(r.servings || ""), q(RECIPE_IMAGES[r.id] ? "yes" : "no"), q(liveUrl(r.id)),
  ].join(","));
}
writeFileSync(`${OUT}/all-recipes.csv`, rows.join("\n") + "\n");

// ---- index README ----
const collCounts: Record<string, { total: number; photos: number }> = {};
for (const r of CATALOG_RECIPES) {
  const c = collOf(r.id);
  collCounts[c] ??= { total: 0, photos: 0 };
  collCounts[c].total++;
  if (RECIPE_IMAGES[r.id]) collCounts[c].photos++;
}
const totalPhotos = CATALOG_RECIPES.filter((r) => RECIPE_IMAGES[r.id]).length;

// featured grid: 12 photogenic picks across sections
const featuredPool = [
  ...sections["Baking"], ...sections["Drinks"], ...sections["Curated Classics"], ...sections["Signature & Global"],
].filter((r) => RECIPE_IMAGES[r.id]);
const featured: Recipe[] = [];
const step = Math.max(1, Math.floor(featuredPool.length / 12));
for (let i = 0; i < featuredPool.length && featured.length < 12; i += step) featured.push(featuredPool[i]);
const grid: string[] = ["<table>"];
for (let i = 0; i < featured.length; i += 3) {
  grid.push("<tr>");
  for (const r of featured.slice(i, i + 3)) {
    grid.push(`<td align="center" width="33%"><a href="${liveUrl(r.id)}"><img src="${thumb(RECIPE_IMAGES[r.id].src)}" width="220" height="150" alt="${esc(r.name)}"></a><br><sub><b>${esc(r.name)}</b><br>${costStr(r)}/serving</sub></td>`);
  }
  grid.push("</tr>");
}
grid.push("</table>");

const sectionLinks = Object.keys(sections).filter((s) => sections[s].length).map((s) => {
  const ps = pages.filter((p) => p.section === s);
  const links = ps.map((p, i) => `[${ps.length > 1 ? `part ${i + 1}` : "browse"}](${p.file})`).join(" · ");
  return `| ${sectionEmoji[s]} **${s}** | ${sections[s].length} | ${links} |`;
});

const collTable = Object.entries(collCounts).sort((a, b) => b[1].total - a[1].total).map(([c, v]) => {
  const gal = v.photos > 0 && slug[c] ? `[gallery](${pages.find((p) => p.section === c)?.file || `${slug[c]}.md`})` : `[in CSV](all-recipes.csv)`;
  return `| ${c} | ${v.total.toLocaleString()} | ${v.photos.toLocaleString()} | ${gal} |`;
});

const readme = [
  `# 🍳 Waivy Recipe Catalog`,
  ``,
  `A browseable snapshot of every recipe in the app — no need to open Waivy. Generated from the source data with the app's own pricing and nutrition engines.`,
  ``,
  `> 🔗 **Live app:** ${SITE}/ · Regenerate with \`npx tsx scripts/generateCatalogDocs.ts\``,
  ``,
  `## At a glance`,
  ``,
  `| | |`,
  `| --- | --- |`,
  `| **Browseable recipes** | ${CATALOG_RECIPES.length.toLocaleString()} |`,
  `| **Total (incl. variants)** | ${ALL_RECIPES.length.toLocaleString()} |`,
  `| **With hand-verified photo** | ${totalPhotos.toLocaleString()} |`,
  `| **Catalog ingredients** | ${INGREDIENTS.length.toLocaleString()} |`,
  ``,
  `## ✨ Featured`,
  ``,
  ...grid,
  ``,
  `## 📸 Visual galleries`,
  ``,
  `Image + full details (ingredients & steps) for every recipe that has a verified photo.`,
  ``,
  `| Section | Recipes | Browse |`,
  `| --- | --: | --- |`,
  ...sectionLinks,
  ``,
  `## 📚 Full collection breakdown`,
  ``,
  `Every browseable recipe, by collection. Imageless collections (AI-generated & macro variants) are in the CSV with full cost/macro details.`,
  ``,
  `| Collection | Recipes | With photo | Browse |`,
  `| --- | --: | --: | --- |`,
  ...collTable,
  ``,
  `## 🗂 Complete list (all details)`,
  ``,
  `**[all-recipes.csv](all-recipes.csv)** — every one of the ${CATALOG_RECIPES.length.toLocaleString()} browseable recipes with id, name, collection, cuisine, meal type, equipment, difficulty, **cost/serving**, calories, protein, carbs, fat, fiber, time, servings, photo flag, and live link. Opens in any spreadsheet.`,
  ``,
  `---`,
  `<sub>Photos are freely licensed (Wikimedia Commons / Unsplash) and hand-verified to depict the dish; attribution is on each card and in the app. Costs use Waivy's regional pricing engine (national average); nutrition is USDA-derived per-ingredient.</sub>`,
  ``,
].join("\n");
writeFileSync(`${OUT}/README.md`, readme);

console.log(`wrote ${OUT}/README.md`);
console.log(`gallery pages: ${pages.length} (${pages.map((p) => p.file).join(", ")})`);
console.log(`CSV rows: ${CATALOG_RECIPES.length} | featured: ${featured.length} | total photos: ${totalPhotos}`);
for (const [s, l] of Object.entries(sections)) if (l.length) console.log(`  ${s}: ${l.length}`);
