import { readFileSync, writeFileSync } from "fs";

// [id, name, category, cost, unit, pkg, shelfDays, calories, protein, carbs, fat]
const DRINKS: [string, string, string, number, string, string, number, number, number, number, number][] = [
  // spirits (per oz)
  ["gin", "Gin", "condiment", 0.78, "oz", "750ml (~$20)", 1825, 73, 0, 0, 0],
  ["rum", "Rum", "condiment", 0.7, "oz", "750ml (~$17)", 1825, 64, 0, 0, 0],
  ["white-rum", "White rum", "condiment", 0.7, "oz", "750ml (~$17)", 1825, 64, 0, 0, 0],
  ["tequila", "Tequila", "condiment", 0.85, "oz", "750ml (~$22)", 1825, 69, 0, 0, 0],
  ["whiskey", "Whiskey", "condiment", 0.9, "oz", "750ml (~$24)", 1825, 70, 0, 0, 0],
  ["bourbon", "Bourbon", "condiment", 0.9, "oz", "750ml (~$24)", 1825, 70, 0, 0, 0],
  ["triple-sec", "Triple sec", "condiment", 0.5, "oz", "750ml (~$13)", 1825, 80, 0, 9, 0],
  ["aperol", "Aperol", "condiment", 0.7, "oz", "750ml (~$25)", 1825, 45, 0, 5, 0],
  ["campari", "Campari", "condiment", 0.8, "oz", "750ml (~$28)", 1825, 65, 0, 8, 0],
  ["sweet-vermouth", "Sweet vermouth", "condiment", 0.4, "oz", "750ml (~$10)", 180, 45, 0, 5, 0],
  ["coffee-liqueur", "Coffee liqueur", "condiment", 0.7, "oz", "750ml (~$22)", 1825, 91, 0, 11, 0],
  ["prosecco", "Prosecco", "condiment", 0.45, "oz", "750ml (~$13)", 30, 20, 0, 1.5, 0],
  // mixers (per oz unless noted)
  ["simple-syrup", "Simple syrup", "condiment", 0.08, "oz", "homemade (sugar+water)", 30, 80, 0, 21, 0],
  ["tonic-water", "Tonic water", "condiment", 0.06, "oz", "1L (~$2)", 365, 10, 0, 2.5, 0],
  ["club-soda", "Club soda", "condiment", 0.04, "oz", "1L (~$1.50)", 365, 0, 0, 0, 0],
  ["ginger-beer", "Ginger beer", "condiment", 0.1, "oz", "4-pack (~$6)", 365, 12, 0, 3, 0],
  ["ginger-ale", "Ginger ale", "condiment", 0.07, "oz", "2L (~$2.50)", 365, 10, 0, 2.6, 0],
  ["cola", "Cola", "condiment", 0.06, "oz", "2L (~$2.50)", 365, 12, 0, 3.3, 0],
  ["grenadine", "Grenadine", "condiment", 0.2, "oz", "750ml (~$6)", 365, 80, 0, 20, 0],
  ["bitters", "Aromatic bitters", "condiment", 0.15, "tsp", "small bottle (~$8)", 1825, 2, 0, 0, 0],
  // juices (per oz)
  ["cranberry-juice", "Cranberry juice", "fruit", 0.1, "oz", "64 oz (~$4)", 30, 17, 0, 4, 0],
  ["pineapple-juice", "Pineapple juice", "fruit", 0.1, "oz", "46 oz (~$3.50)", 30, 16, 0, 4, 0],
  ["grapefruit-juice", "Grapefruit juice", "fruit", 0.1, "oz", "64 oz (~$4)", 30, 12, 0, 3, 0],
  ["tomato-juice", "Tomato juice", "fruit", 0.08, "oz", "46 oz (~$3)", 30, 5, 0.2, 1.1, 0],
  // coffee / tea
  ["coffee", "Brewed coffee", "condiment", 0.2, "cup", "ground (~per cup)", 365, 2, 0.3, 0, 0],
  ["espresso", "Espresso", "condiment", 0.3, "shot", "ground (~per shot)", 365, 3, 0.1, 0.5, 0],
  ["cold-brew", "Cold brew concentrate", "condiment", 0.4, "cup", "bottle (~$5)", 14, 5, 0.5, 0, 0],
  ["black-tea", "Black tea", "condiment", 0.08, "bag", "box of 20 (~$1.60)", 730, 2, 0, 0.5, 0],
  ["green-tea", "Green tea", "condiment", 0.1, "bag", "box of 20 (~$2)", 730, 2, 0, 0.4, 0],
  ["matcha", "Matcha powder", "condiment", 0.4, "tsp", "tin (~$12)", 365, 5, 1, 1, 0],
  ["chai-tea", "Chai tea", "condiment", 0.12, "bag", "box of 20 (~$2.40)", 730, 3, 0, 0.6, 0],
  // sweeteners
  ["agave-syrup", "Agave syrup", "condiment", 0.18, "tbsp", "11 oz (~$5)", 730, 60, 0, 16, 0],
  ["vanilla-extract", "Vanilla extract", "condiment", 0.25, "tsp", "2 oz (~$6)", 1825, 12, 0, 0.5, 0],
  // misc
  ["ice", "Ice", "condiment", 0.01, "cup", "from your freezer", 9999, 0, 0, 0, 0],
];

// 1) ingredients.ts
const ingFile = "src/data/ingredients.ts";
let ing = readFileSync(ingFile, "utf8");
const ingBlock =
  "\n  // ===== Drinks: spirits / liqueurs / mixers / juices / coffee / tea =====\n" +
  DRINKS.map(
    ([id, name, cat, cost, unit, pkg, shelf]) =>
      `  { id: "${id}", name: "${name}", category: "${cat}", estimatedUnitCost: ${cost}, unit: "${unit}", commonPackageSize: "${pkg}", shelfLifeDays: ${shelf}, tags: ["drink"] },`,
  ).join("\n");
const vodkaLine = '  { id: "vodka", name: "Vodka", category: "condiment", estimatedUnitCost: 0.75, unit: "oz", commonPackageSize: "750ml (~$18)", shelfLifeDays: 730 },';
if (!ing.includes(vodkaLine)) throw new Error("vodka anchor not found");
ing = ing.replace(vodkaLine, vodkaLine + ingBlock);
writeFileSync(ingFile, ing);

// 2) ingredientNutrition.ts
const nutFile = "src/data/ingredientNutrition.ts";
let nut = readFileSync(nutFile, "utf8");
const nutBlock =
  "\n  // ===== Drinks =====\n" +
  DRINKS.map(
    ([id, , , , , , , cal, prot, carb, fat]) =>
      `  "${id}": { calories: ${cal}, protein: ${prot}, carbs: ${carb}, fat: ${fat}, confidence: "high" },`,
  ).join("\n");
const almondLine = '  "almond-milk": { calories: 60, protein: 1, carbs: 8, fat: 2.5, confidence: "high" }, // 1 cup vanilla unsweetened';
if (!nut.includes(almondLine)) throw new Error("almond-milk nutrition anchor not found");
nut = nut.replace(almondLine, almondLine + nutBlock);
writeFileSync(nutFile, nut);

// 3) aliases (mint-leaves -> mint, lime-juice -> lime, etc.)
const aliasAnchor = '  "chicken-sausage": "sausage",';
if (ing.includes(aliasAnchor)) {
  // already written above to `ing` var but file re-read needed; handle separately below
}
console.log("inserted", DRINKS.length, "drink ingredients + nutrition entries");
