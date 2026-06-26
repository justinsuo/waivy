import type { Ingredient } from "@/lib/types";
import type { NutritionPerUnit } from "@/data/ingredientNutrition";

/**
 * Catalog expansion — common kitchen ingredients added so the pantry covers
 * essentially anything a home cook might have on hand (and every ingredient any
 * recipe references). 2026 US per-unit prices computed from realistic package
 * sizes; per-unit nutrition included. Generated + deduped against the catalog,
 * then validated. Wired into INGREDIENTS / INGREDIENT_MAP and INGREDIENT_NUTRITION.
 */
export const EXTRA_INGREDIENTS: Ingredient[] = [
  {
    "id": "halibut-fillet",
    "name": "Halibut Fillet",
    "category": "protein",
    "estimatedUnitCost": 8.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$25.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "catfish-fillet",
    "name": "Catfish Fillet",
    "category": "protein",
    "estimatedUnitCost": 3,
    "unit": "serving",
    "commonPackageSize": "1 lb fillets (~$9.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "fresh",
      "high-protein"
    ]
  },
  {
    "id": "mahi-mahi",
    "name": "Mahi Mahi",
    "category": "protein",
    "estimatedUnitCost": 6.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$19.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "sea-bass",
    "name": "Sea Bass",
    "category": "protein",
    "estimatedUnitCost": 9,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$27.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "fresh",
      "high-protein"
    ]
  },
  {
    "id": "red-snapper",
    "name": "Red Snapper",
    "category": "protein",
    "estimatedUnitCost": 7,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$21.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "haddock-fillet",
    "name": "Haddock Fillet",
    "category": "protein",
    "estimatedUnitCost": 5.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$16.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "mackerel-fillet",
    "name": "Mackerel Fillet",
    "category": "protein",
    "estimatedUnitCost": 4.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$13.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "oily-fish",
      "omega-3",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "pollock-fillet",
    "name": "Pollock Fillet",
    "category": "protein",
    "estimatedUnitCost": 3,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$9.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "high-protein",
      "budget"
    ]
  },
  {
    "id": "swordfish-steak",
    "name": "Swordfish Steak",
    "category": "protein",
    "estimatedUnitCost": 8,
    "unit": "serving",
    "commonPackageSize": "1 lb steak (~$24.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "steak-fish",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "flounder-fillet",
    "name": "Flounder Fillet",
    "category": "protein",
    "estimatedUnitCost": 6,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$18.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "flatfish",
      "fresh"
    ]
  },
  {
    "id": "sole-fillet",
    "name": "Sole Fillet",
    "category": "protein",
    "estimatedUnitCost": 6.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$19.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "flatfish",
      "fresh"
    ]
  },
  {
    "id": "branzino",
    "name": "Branzino",
    "category": "protein",
    "estimatedUnitCost": 8.5,
    "unit": "serving",
    "commonPackageSize": "1 whole fish ~1 lb (~$12.00, ~2 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "whole-fish",
      "mediterranean",
      "fresh"
    ]
  },
  {
    "id": "grouper-fillet",
    "name": "Grouper Fillet",
    "category": "protein",
    "estimatedUnitCost": 9.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$28.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "white-fish",
      "lean",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "arctic-char",
    "name": "Arctic Char",
    "category": "protein",
    "estimatedUnitCost": 7.5,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$22.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "oily-fish",
      "omega-3",
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "tuna-steak",
    "name": "Tuna Steak",
    "category": "protein",
    "estimatedUnitCost": 8,
    "unit": "serving",
    "commonPackageSize": "1 lb ahi steak (~$24.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "steak-fish",
      "lean",
      "high-protein",
      "fresh",
      "sushi-grade"
    ]
  },
  {
    "id": "prawns",
    "name": "Prawns",
    "category": "protein",
    "estimatedUnitCost": 5,
    "unit": "serving",
    "commonPackageSize": "1 lb raw (~$15.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein"
    ]
  },
  {
    "id": "jumbo-shrimp",
    "name": "Jumbo Shrimp",
    "category": "protein",
    "estimatedUnitCost": 6,
    "unit": "serving",
    "commonPackageSize": "1 lb 16/20 ct (~$18.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein"
    ]
  },
  {
    "id": "fresh-clams",
    "name": "Fresh Clams",
    "category": "protein",
    "estimatedUnitCost": 4.5,
    "unit": "serving",
    "commonPackageSize": "2 lb in shell (~$13.50, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "in-shell"
    ]
  },
  {
    "id": "lobster-tail",
    "name": "Lobster Tail",
    "category": "protein",
    "estimatedUnitCost": 11,
    "unit": "serving",
    "commonPackageSize": "1 tail ~5 oz (~$11.00, 1 serving)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein",
      "premium"
    ]
  },
  {
    "id": "whole-lobster",
    "name": "Whole Lobster",
    "category": "protein",
    "estimatedUnitCost": 16,
    "unit": "serving",
    "commonPackageSize": "1.25 lb live (~$16.00, ~1 serving)",
    "shelfLifeDays": 1,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein",
      "premium",
      "live"
    ]
  },
  {
    "id": "snow-crab-legs",
    "name": "Snow Crab Legs",
    "category": "protein",
    "estimatedUnitCost": 9,
    "unit": "serving",
    "commonPackageSize": "1 lb cluster (~$18.00, ~2 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein",
      "premium"
    ]
  },
  {
    "id": "king-crab-legs",
    "name": "King Crab Legs",
    "category": "protein",
    "estimatedUnitCost": 17,
    "unit": "serving",
    "commonPackageSize": "1 lb legs (~$34.00, ~2 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein",
      "premium"
    ]
  },
  {
    "id": "dungeness-crab",
    "name": "Dungeness Crab",
    "category": "protein",
    "estimatedUnitCost": 10,
    "unit": "serving",
    "commonPackageSize": "1.5 lb whole cooked (~$15.00, ~1.5 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein"
    ]
  },
  {
    "id": "lump-crab-meat",
    "name": "Lump Crab Meat",
    "category": "protein",
    "estimatedUnitCost": 10,
    "unit": "serving",
    "commonPackageSize": "8 oz tub (~$20.00, ~2 servings)",
    "shelfLifeDays": 4,
    "tags": [
      "seafood",
      "shellfish",
      "lean",
      "high-protein",
      "premium",
      "refrigerated"
    ]
  },
  {
    "id": "soft-shell-crab",
    "name": "Soft Shell Crab",
    "category": "protein",
    "estimatedUnitCost": 7,
    "unit": "serving",
    "commonPackageSize": "1 crab (~$7.00, 1 serving)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "whole",
      "high-protein"
    ]
  },
  {
    "id": "crawfish",
    "name": "Crawfish",
    "category": "protein",
    "estimatedUnitCost": 4,
    "unit": "serving",
    "commonPackageSize": "3 lb live in shell (~$24.00, ~6 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "cajun",
      "high-protein"
    ]
  },
  {
    "id": "calamari",
    "name": "Calamari",
    "category": "protein",
    "estimatedUnitCost": 5,
    "unit": "serving",
    "commonPackageSize": "1 lb cleaned tubes & tentacles (~$15.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "cephalopod",
      "lean",
      "high-protein"
    ]
  },
  {
    "id": "fresh-oysters",
    "name": "Fresh Oysters",
    "category": "protein",
    "estimatedUnitCost": 6,
    "unit": "serving",
    "commonPackageSize": "1 dozen in shell (~$18.00, ~3 servings)",
    "shelfLifeDays": 3,
    "tags": [
      "seafood",
      "shellfish",
      "in-shell",
      "raw"
    ]
  },
  {
    "id": "surimi",
    "name": "Surimi",
    "category": "protein",
    "estimatedUnitCost": 2.5,
    "unit": "serving",
    "commonPackageSize": "1 lb pack (~$7.50, ~3 servings)",
    "shelfLifeDays": 14,
    "tags": [
      "seafood",
      "processed",
      "refrigerated",
      "budget"
    ]
  },
  {
    "id": "eel",
    "name": "Eel",
    "category": "protein",
    "estimatedUnitCost": 9,
    "unit": "serving",
    "commonPackageSize": "1 lb fillet (~$27.00, ~3 servings)",
    "shelfLifeDays": 2,
    "tags": [
      "fish",
      "oily-fish",
      "japanese",
      "unagi",
      "high-protein"
    ]
  },
  {
    "id": "smoked-trout",
    "name": "Smoked Trout",
    "category": "protein",
    "estimatedUnitCost": 6,
    "unit": "serving",
    "commonPackageSize": "8 oz pack (~$12.00, ~2 servings)",
    "shelfLifeDays": 14,
    "tags": [
      "fish",
      "smoked",
      "oily-fish",
      "omega-3",
      "refrigerated"
    ]
  },
  {
    "id": "smoked-mackerel",
    "name": "Smoked Mackerel",
    "category": "protein",
    "estimatedUnitCost": 5,
    "unit": "serving",
    "commonPackageSize": "8 oz fillet (~$10.00, ~2 servings)",
    "shelfLifeDays": 14,
    "tags": [
      "fish",
      "smoked",
      "oily-fish",
      "omega-3",
      "refrigerated"
    ]
  },
  {
    "id": "lox",
    "name": "Lox",
    "category": "protein",
    "estimatedUnitCost": 7,
    "unit": "serving",
    "commonPackageSize": "4 oz pack (~$9.00, ~2 servings)",
    "shelfLifeDays": 7,
    "tags": [
      "fish",
      "cured",
      "salmon",
      "refrigerated"
    ]
  },
  {
    "id": "salmon-roe",
    "name": "Salmon Roe",
    "category": "protein",
    "estimatedUnitCost": 6,
    "unit": "oz",
    "commonPackageSize": "2 oz jar (~$12.00)",
    "shelfLifeDays": 14,
    "tags": [
      "seafood",
      "roe",
      "ikura",
      "japanese",
      "premium",
      "refrigerated"
    ]
  },
  {
    "id": "tobiko",
    "name": "Tobiko",
    "category": "protein",
    "estimatedUnitCost": 4,
    "unit": "oz",
    "commonPackageSize": "8 oz tub (~$32.00)",
    "shelfLifeDays": 30,
    "tags": [
      "seafood",
      "roe",
      "flying-fish",
      "japanese",
      "frozen"
    ]
  },
  {
    "id": "canned-tuna-in-oil",
    "name": "Canned Tuna in Oil",
    "category": "canned",
    "estimatedUnitCost": 1.8,
    "unit": "can",
    "commonPackageSize": "5 oz can (~$1.80)",
    "shelfLifeDays": 1095,
    "tags": [
      "seafood",
      "canned",
      "shelf-stable",
      "high-protein"
    ]
  },
  {
    "id": "canned-crab",
    "name": "Canned Crab",
    "category": "canned",
    "estimatedUnitCost": 4.5,
    "unit": "can",
    "commonPackageSize": "6 oz can (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "seafood",
      "canned",
      "shelf-stable",
      "high-protein"
    ]
  },
  {
    "id": "smoked-oysters",
    "name": "Smoked Oysters",
    "category": "canned",
    "estimatedUnitCost": 2.5,
    "unit": "can",
    "commonPackageSize": "3 oz tin (~$2.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "seafood",
      "canned",
      "smoked",
      "shelf-stable"
    ]
  },
  {
    "id": "anchovy-fillets",
    "name": "Anchovy Fillets in Oil",
    "category": "canned",
    "estimatedUnitCost": 2.5,
    "unit": "can",
    "commonPackageSize": "2 oz tin (~$2.50)",
    "shelfLifeDays": 730,
    "tags": [
      "seafood",
      "canned",
      "umami",
      "shelf-stable"
    ]
  },
  {
    "id": "kippers",
    "name": "Kippers",
    "category": "canned",
    "estimatedUnitCost": 2.8,
    "unit": "can",
    "commonPackageSize": "3.5 oz tin (~$2.80)",
    "shelfLifeDays": 1095,
    "tags": [
      "seafood",
      "canned",
      "smoked-herring",
      "shelf-stable",
      "omega-3"
    ]
  },
  {
    "id": "frozen-shrimp",
    "name": "Frozen Shrimp",
    "category": "frozen",
    "estimatedUnitCost": 3,
    "unit": "serving",
    "commonPackageSize": "1 lb bag peeled & deveined (~$9.00, ~3 servings)",
    "shelfLifeDays": 365,
    "tags": [
      "seafood",
      "shellfish",
      "frozen",
      "lean",
      "high-protein"
    ]
  },
  {
    "id": "frozen-cod-fillet",
    "name": "Frozen Cod Fillet",
    "category": "frozen",
    "estimatedUnitCost": 3.5,
    "unit": "serving",
    "commonPackageSize": "1 lb bag (~$10.50, ~3 servings)",
    "shelfLifeDays": 365,
    "tags": [
      "fish",
      "white-fish",
      "frozen",
      "lean",
      "high-protein",
      "budget"
    ]
  },
  {
    "id": "frozen-salmon-fillet",
    "name": "Frozen Salmon Fillet",
    "category": "frozen",
    "estimatedUnitCost": 4.5,
    "unit": "serving",
    "commonPackageSize": "1 lb bag (~$13.50, ~3 servings)",
    "shelfLifeDays": 365,
    "tags": [
      "fish",
      "oily-fish",
      "frozen",
      "omega-3",
      "high-protein"
    ]
  },
  {
    "id": "soft-tofu",
    "name": "Soft tofu",
    "category": "protein",
    "estimatedUnitCost": 0.16,
    "unit": "oz",
    "commonPackageSize": "14 oz tub (~$2.30)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "cheap"
    ]
  },
  {
    "id": "smoked-tofu",
    "name": "Smoked tofu",
    "category": "protein",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "8 oz pack (~$3.60)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "umami"
    ]
  },
  {
    "id": "baked-tofu",
    "name": "Baked tofu",
    "category": "protein",
    "estimatedUnitCost": 0.43,
    "unit": "oz",
    "commonPackageSize": "8 oz pack (~$3.45)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "tofu-skin",
    "name": "Tofu skin (yuba)",
    "category": "protein",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "8 oz dried (~$6)",
    "shelfLifeDays": 180,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free",
      "umami"
    ]
  },
  {
    "id": "seitan",
    "name": "Seitan",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "8 oz pack (~$4.40)",
    "shelfLifeDays": 14,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free"
    ]
  },
  {
    "id": "vital-wheat-gluten",
    "name": "Vital wheat gluten",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "22 oz bag (~$6.60)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free",
      "baking"
    ]
  },
  {
    "id": "tvp",
    "name": "Textured vegetable protein (TVP)",
    "category": "protein",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "10 oz bag (~$3.10)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free",
      "cheap"
    ]
  },
  {
    "id": "soy-curls",
    "name": "Soy curls",
    "category": "protein",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$4)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free"
    ]
  },
  {
    "id": "dried-soybeans",
    "name": "Dried soybeans",
    "category": "protein",
    "estimatedUnitCost": 0.18,
    "unit": "oz",
    "commonPackageSize": "16 oz bag (~$2.90)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "cheap"
    ]
  },
  {
    "id": "black-soybeans",
    "name": "Black soybeans",
    "category": "protein",
    "estimatedUnitCost": 1.8,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.80)",
    "shelfLifeDays": 1095,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "low-carb"
    ]
  },
  {
    "id": "natto",
    "name": "Natto",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "3-pack 6.3 oz (~$3.50)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "umami",
      "fermented"
    ]
  },
  {
    "id": "edamame-shelled",
    "name": "Shelled edamame",
    "category": "protein",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "12 oz frozen bag (~$2.80)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "frozen"
    ]
  },
  {
    "id": "green-jackfruit",
    "name": "Green jackfruit",
    "category": "protein",
    "estimatedUnitCost": 2.8,
    "unit": "can",
    "commonPackageSize": "20 oz can in brine (~$2.80)",
    "shelfLifeDays": 1095,
    "tags": [
      "vegan",
      "vegetarian",
      "dairy-free",
      "gluten-free"
    ]
  },
  {
    "id": "lupini-beans",
    "name": "Lupini beans",
    "category": "protein",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "14.1 oz jar (~$5.60)",
    "shelfLifeDays": 540,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "low-carb"
    ]
  },
  {
    "id": "plant-based-sausage",
    "name": "Plant-based sausage",
    "category": "protein",
    "estimatedUnitCost": 1.5,
    "unit": "serving",
    "commonPackageSize": "14 oz pack of 4 (~$6)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free"
    ]
  },
  {
    "id": "plant-based-patty",
    "name": "Plant-based burger patty",
    "category": "protein",
    "estimatedUnitCost": 2.25,
    "unit": "serving",
    "commonPackageSize": "2-pack 8 oz (~$4.50)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "plant-based-nuggets",
    "name": "Plant-based nuggets",
    "category": "frozen",
    "estimatedUnitCost": 1.4,
    "unit": "serving",
    "commonPackageSize": "13.5 oz bag (~$5.60)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free",
      "frozen"
    ]
  },
  {
    "id": "plant-based-chicken",
    "name": "Plant-based chicken strips",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "8 oz pack (~$4.40)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free"
    ]
  },
  {
    "id": "plant-based-meatballs",
    "name": "Plant-based meatballs",
    "category": "frozen",
    "estimatedUnitCost": 2,
    "unit": "serving",
    "commonPackageSize": "10 oz bag (~$5.50)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free",
      "frozen"
    ]
  },
  {
    "id": "plant-based-bacon",
    "name": "Plant-based bacon",
    "category": "protein",
    "estimatedUnitCost": 0.65,
    "unit": "oz",
    "commonPackageSize": "5.5 oz pack (~$3.60)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "dairy-free"
    ]
  },
  {
    "id": "plant-based-deli-slices",
    "name": "Plant-based deli slices",
    "category": "protein",
    "estimatedUnitCost": 0.7,
    "unit": "oz",
    "commonPackageSize": "5.5 oz pack (~$3.85)",
    "shelfLifeDays": 21,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free"
    ]
  },
  {
    "id": "soy-chorizo",
    "name": "Soy chorizo",
    "category": "protein",
    "estimatedUnitCost": 0.35,
    "unit": "oz",
    "commonPackageSize": "12 oz pack (~$4.20)",
    "shelfLifeDays": 30,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free",
      "spicy"
    ]
  },
  {
    "id": "falafel-mix",
    "name": "Falafel mix",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "10 oz box (~$3)",
    "shelfLifeDays": 540,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "dairy-free"
    ]
  },
  {
    "id": "whey-protein-powder",
    "name": "Whey protein powder",
    "category": "protein",
    "estimatedUnitCost": 1.1,
    "unit": "scoop",
    "commonPackageSize": "2 lb tub (~$32)",
    "shelfLifeDays": 730,
    "tags": [
      "high-protein",
      "vegetarian",
      "gluten-free"
    ]
  },
  {
    "id": "casein-protein-powder",
    "name": "Casein protein powder",
    "category": "protein",
    "estimatedUnitCost": 1.4,
    "unit": "scoop",
    "commonPackageSize": "2 lb tub (~$40)",
    "shelfLifeDays": 730,
    "tags": [
      "high-protein",
      "vegetarian",
      "gluten-free"
    ]
  },
  {
    "id": "pea-protein-powder",
    "name": "Pea protein powder",
    "category": "protein",
    "estimatedUnitCost": 1.2,
    "unit": "scoop",
    "commonPackageSize": "2 lb tub (~$35)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "soy-protein-powder",
    "name": "Soy protein powder",
    "category": "protein",
    "estimatedUnitCost": 0.85,
    "unit": "scoop",
    "commonPackageSize": "2 lb tub (~$25)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "collagen-peptides",
    "name": "Collagen peptides",
    "category": "protein",
    "estimatedUnitCost": 0.95,
    "unit": "scoop",
    "commonPackageSize": "16 oz tub (~$25)",
    "shelfLifeDays": 1095,
    "tags": [
      "high-protein",
      "gluten-free",
      "dairy-free",
      "keto"
    ]
  },
  {
    "id": "egg-white-protein-powder",
    "name": "Egg white protein powder",
    "category": "protein",
    "estimatedUnitCost": 1.3,
    "unit": "scoop",
    "commonPackageSize": "2 lb tub (~$38)",
    "shelfLifeDays": 730,
    "tags": [
      "high-protein",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "egg-yolks",
    "name": "Egg yolks",
    "category": "dairy",
    "estimatedUnitCost": 0.42,
    "unit": "egg",
    "commonPackageSize": "dozen large eggs (~$5)",
    "shelfLifeDays": 28,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein",
      "keto"
    ]
  },
  {
    "id": "duck-eggs",
    "name": "Duck eggs",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "egg",
    "commonPackageSize": "6-pack (~$6.60)",
    "shelfLifeDays": 35,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ]
  },
  {
    "id": "quail-eggs",
    "name": "Quail eggs",
    "category": "dairy",
    "estimatedUnitCost": 0.45,
    "unit": "egg",
    "commonPackageSize": "18-pack (~$8)",
    "shelfLifeDays": 35,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ]
  },
  {
    "id": "liquid-whole-eggs",
    "name": "Liquid whole eggs",
    "category": "dairy",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "32 oz carton (~$6.40)",
    "shelfLifeDays": 60,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ]
  },
  {
    "id": "egg-substitute",
    "name": "Egg substitute (liquid)",
    "category": "dairy",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "16 oz carton (~$4.40)",
    "shelfLifeDays": 75,
    "tags": [
      "vegetarian",
      "gluten-free",
      "dairy-free",
      "low-fat",
      "high-protein"
    ]
  },
  {
    "id": "vegan-egg-replacer",
    "name": "Vegan egg replacer (powder)",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "16 oz box (~$10)",
    "shelfLifeDays": 540,
    "tags": [
      "vegan",
      "vegetarian",
      "dairy-free",
      "baking"
    ]
  },
  {
    "id": "hard-boiled-eggs",
    "name": "Hard-boiled eggs (peeled)",
    "category": "dairy",
    "estimatedUnitCost": 0.7,
    "unit": "egg",
    "commonPackageSize": "6-pack peeled (~$4.20)",
    "shelfLifeDays": 14,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein",
      "keto"
    ]
  },
  {
    "id": "salted-duck-eggs",
    "name": "Salted duck eggs",
    "category": "dairy",
    "estimatedUnitCost": 1.3,
    "unit": "egg",
    "commonPackageSize": "6-pack (~$7.80)",
    "shelfLifeDays": 120,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein",
      "umami"
    ]
  },
  {
    "id": "century-eggs",
    "name": "Century eggs",
    "category": "dairy",
    "estimatedUnitCost": 1.2,
    "unit": "egg",
    "commonPackageSize": "6-pack (~$7.20)",
    "shelfLifeDays": 120,
    "tags": [
      "vegetarian",
      "gluten-free",
      "high-protein",
      "umami"
    ]
  },
  {
    "id": "ramps",
    "name": "Ramps",
    "category": "vegetable",
    "estimatedUnitCost": 2.5,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~4 oz (~$8)",
    "shelfLifeDays": 5,
    "tags": [
      "allium",
      "wild",
      "spring",
      "leafy"
    ]
  },
  {
    "id": "garlic-scapes",
    "name": "Garlic Scapes",
    "category": "vegetable",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~6 oz (~$4)",
    "shelfLifeDays": 14,
    "tags": [
      "allium",
      "spring",
      "stir-fry"
    ]
  },
  {
    "id": "swiss-chard",
    "name": "Swiss Chard",
    "category": "vegetable",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~10 oz (~$2.99)",
    "shelfLifeDays": 5,
    "tags": [
      "leafy-green",
      "braising"
    ]
  },
  {
    "id": "rainbow-chard",
    "name": "Rainbow Chard",
    "category": "vegetable",
    "estimatedUnitCost": 0.75,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~10 oz (~$3.49)",
    "shelfLifeDays": 5,
    "tags": [
      "leafy-green",
      "braising"
    ]
  },
  {
    "id": "watercress",
    "name": "Watercress",
    "category": "vegetable",
    "estimatedUnitCost": 0.8,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~4 oz (~$2.99)",
    "shelfLifeDays": 4,
    "tags": [
      "leafy-green",
      "salad",
      "peppery"
    ]
  },
  {
    "id": "radicchio",
    "name": "Radicchio",
    "category": "vegetable",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "1 head ~6 oz (~$2.99)",
    "shelfLifeDays": 14,
    "tags": [
      "leafy-green",
      "salad",
      "bitter",
      "chicory"
    ]
  },
  {
    "id": "frisee",
    "name": "Frisee",
    "category": "vegetable",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "1 head ~6 oz (~$2.99)",
    "shelfLifeDays": 7,
    "tags": [
      "leafy-green",
      "salad",
      "chicory",
      "bitter"
    ]
  },
  {
    "id": "escarole",
    "name": "Escarole",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "1 head ~12 oz (~$2.99)",
    "shelfLifeDays": 7,
    "tags": [
      "leafy-green",
      "chicory",
      "braising",
      "salad"
    ]
  },
  {
    "id": "mustard-greens",
    "name": "Mustard Greens",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~12 oz (~$2.49)",
    "shelfLifeDays": 5,
    "tags": [
      "leafy-green",
      "braising",
      "peppery"
    ]
  },
  {
    "id": "turnip-greens",
    "name": "Turnip Greens",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~12 oz (~$2.49)",
    "shelfLifeDays": 5,
    "tags": [
      "leafy-green",
      "braising",
      "southern"
    ]
  },
  {
    "id": "dandelion-greens",
    "name": "Dandelion Greens",
    "category": "vegetable",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~10 oz (~$2.99)",
    "shelfLifeDays": 4,
    "tags": [
      "leafy-green",
      "bitter",
      "braising"
    ]
  },
  {
    "id": "baby-bok-choy",
    "name": "Baby Bok Choy",
    "category": "vegetable",
    "estimatedUnitCost": 0.9,
    "unit": "piece",
    "commonPackageSize": "1 lb ~5 heads (~$3.99)",
    "shelfLifeDays": 5,
    "tags": [
      "brassica",
      "stir-fry",
      "asian"
    ]
  },
  {
    "id": "tatsoi",
    "name": "Tatsoi",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~6 oz (~$3.49)",
    "shelfLifeDays": 5,
    "tags": [
      "leafy-green",
      "asian",
      "salad",
      "brassica"
    ]
  },
  {
    "id": "mizuna",
    "name": "Mizuna",
    "category": "vegetable",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~5 oz (~$3.49)",
    "shelfLifeDays": 5,
    "tags": [
      "leafy-green",
      "asian",
      "salad",
      "peppery"
    ]
  },
  {
    "id": "rutabaga",
    "name": "Rutabaga",
    "category": "vegetable",
    "estimatedUnitCost": 1.6,
    "unit": "piece",
    "commonPackageSize": "1 root ~1.3 lb (~$2.10)",
    "shelfLifeDays": 30,
    "tags": [
      "root",
      "brassica",
      "roasting"
    ]
  },
  {
    "id": "jicama",
    "name": "Jicama",
    "category": "vegetable",
    "estimatedUnitCost": 0.6,
    "unit": "cup",
    "commonPackageSize": "1 root ~1.5 lb (~$2.49)",
    "shelfLifeDays": 21,
    "tags": [
      "root",
      "raw",
      "crunchy",
      "mexican"
    ]
  },
  {
    "id": "kohlrabi",
    "name": "Kohlrabi",
    "category": "vegetable",
    "estimatedUnitCost": 1.1,
    "unit": "piece",
    "commonPackageSize": "1 bulb ~5 oz (~$1.79)",
    "shelfLifeDays": 21,
    "tags": [
      "brassica",
      "root",
      "raw",
      "roasting"
    ]
  },
  {
    "id": "sunchoke",
    "name": "Sunchoke",
    "category": "vegetable",
    "estimatedUnitCost": 2,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$5.99)",
    "shelfLifeDays": 14,
    "tags": [
      "root",
      "jerusalem-artichoke",
      "roasting"
    ]
  },
  {
    "id": "yuca",
    "name": "Yuca",
    "category": "vegetable",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "1 lb cassava root (~$1.49)",
    "shelfLifeDays": 7,
    "tags": [
      "root",
      "starchy",
      "cassava",
      "latin"
    ]
  },
  {
    "id": "lotus-root",
    "name": "Lotus Root",
    "category": "vegetable",
    "estimatedUnitCost": 1.8,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$4.99)",
    "shelfLifeDays": 10,
    "tags": [
      "root",
      "asian",
      "stir-fry",
      "crunchy"
    ]
  },
  {
    "id": "heirloom-tomato",
    "name": "Heirloom Tomato",
    "category": "vegetable",
    "estimatedUnitCost": 1.5,
    "unit": "piece",
    "commonPackageSize": "~10 oz each (~$3.99/lb)",
    "shelfLifeDays": 5,
    "tags": [
      "nightshade",
      "fresh",
      "summer"
    ]
  },
  {
    "id": "grape-tomatoes",
    "name": "Grape Tomatoes",
    "category": "vegetable",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "1 pint ~10 oz (~$3.49)",
    "shelfLifeDays": 7,
    "tags": [
      "nightshade",
      "fresh",
      "salad",
      "snacking"
    ]
  },
  {
    "id": "green-tomato",
    "name": "Green Tomato",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "piece",
    "commonPackageSize": "~5 oz each (~$2.49/lb)",
    "shelfLifeDays": 10,
    "tags": [
      "nightshade",
      "frying",
      "tart"
    ]
  },
  {
    "id": "italian-eggplant",
    "name": "Italian Eggplant",
    "category": "vegetable",
    "estimatedUnitCost": 1.6,
    "unit": "piece",
    "commonPackageSize": "~12 oz each (~$2.29/lb)",
    "shelfLifeDays": 7,
    "tags": [
      "nightshade",
      "roasting",
      "grilling"
    ]
  },
  {
    "id": "japanese-eggplant",
    "name": "Japanese Eggplant",
    "category": "vegetable",
    "estimatedUnitCost": 1.2,
    "unit": "piece",
    "commonPackageSize": "~6 oz each (~$3.49/lb)",
    "shelfLifeDays": 7,
    "tags": [
      "nightshade",
      "asian",
      "stir-fry",
      "grilling"
    ]
  },
  {
    "id": "thai-eggplant",
    "name": "Thai Eggplant",
    "category": "vegetable",
    "estimatedUnitCost": 1.9,
    "unit": "cup",
    "commonPackageSize": "~8 oz (~$4.99/lb)",
    "shelfLifeDays": 7,
    "tags": [
      "nightshade",
      "thai",
      "curry"
    ]
  },
  {
    "id": "yellow-bell-pepper",
    "name": "Yellow Bell Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 1.25,
    "unit": "piece",
    "commonPackageSize": "~6 oz each (~$1.49)",
    "shelfLifeDays": 10,
    "tags": [
      "nightshade",
      "sweet",
      "raw",
      "roasting"
    ]
  },
  {
    "id": "orange-bell-pepper",
    "name": "Orange Bell Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 1.25,
    "unit": "piece",
    "commonPackageSize": "~6 oz each (~$1.49)",
    "shelfLifeDays": 10,
    "tags": [
      "nightshade",
      "sweet",
      "raw",
      "roasting"
    ]
  },
  {
    "id": "red-bell-pepper",
    "name": "Red Bell Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 1.25,
    "unit": "piece",
    "commonPackageSize": "~6 oz each (~$1.49)",
    "shelfLifeDays": 10,
    "tags": [
      "nightshade",
      "sweet",
      "raw",
      "roasting"
    ]
  },
  {
    "id": "anaheim-pepper",
    "name": "Anaheim Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 0.5,
    "unit": "piece",
    "commonPackageSize": "~2 oz each (~$3.49/lb)",
    "shelfLifeDays": 10,
    "tags": [
      "nightshade",
      "chili",
      "mild",
      "roasting"
    ]
  },
  {
    "id": "banana-pepper",
    "name": "Banana Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "~1.5 oz each (~$2.99/lb)",
    "shelfLifeDays": 14,
    "tags": [
      "nightshade",
      "chili",
      "mild",
      "sweet"
    ]
  },
  {
    "id": "cubanelle",
    "name": "Cubanelle Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 0.6,
    "unit": "piece",
    "commonPackageSize": "~3 oz each (~$2.99/lb)",
    "shelfLifeDays": 10,
    "tags": [
      "nightshade",
      "frying",
      "mild",
      "sweet"
    ]
  },
  {
    "id": "fresno-chili",
    "name": "Fresno Chili",
    "category": "vegetable",
    "estimatedUnitCost": 0.35,
    "unit": "piece",
    "commonPackageSize": "~0.7 oz each (~$3.99/lb)",
    "shelfLifeDays": 14,
    "tags": [
      "nightshade",
      "chili",
      "spicy"
    ]
  },
  {
    "id": "yellow-squash",
    "name": "Yellow Squash",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "piece",
    "commonPackageSize": "~6 oz each (~$1.79/lb)",
    "shelfLifeDays": 7,
    "tags": [
      "summer-squash",
      "sauteing",
      "grilling"
    ]
  },
  {
    "id": "pattypan-squash",
    "name": "Pattypan Squash",
    "category": "vegetable",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "~10 oz (~$2.99/lb)",
    "shelfLifeDays": 7,
    "tags": [
      "summer-squash",
      "roasting",
      "grilling"
    ]
  },
  {
    "id": "acorn-squash",
    "name": "Acorn Squash",
    "category": "vegetable",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "1 squash ~1.3 lb (~$1.49/lb)",
    "shelfLifeDays": 60,
    "tags": [
      "winter-squash",
      "roasting"
    ]
  },
  {
    "id": "kabocha-squash",
    "name": "Kabocha Squash",
    "category": "vegetable",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "1 squash ~2.5 lb (~$1.99/lb)",
    "shelfLifeDays": 60,
    "tags": [
      "winter-squash",
      "japanese",
      "roasting",
      "sweet"
    ]
  },
  {
    "id": "delicata-squash",
    "name": "Delicata Squash",
    "category": "vegetable",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "1 squash ~12 oz (~$2.49/lb)",
    "shelfLifeDays": 30,
    "tags": [
      "winter-squash",
      "roasting",
      "edible-skin"
    ]
  },
  {
    "id": "calabaza",
    "name": "Calabaza",
    "category": "vegetable",
    "estimatedUnitCost": 0.75,
    "unit": "cup",
    "commonPackageSize": "~1 lb chunk (~$1.49/lb)",
    "shelfLifeDays": 30,
    "tags": [
      "winter-squash",
      "latin",
      "caribbean",
      "stewing"
    ]
  },
  {
    "id": "broccoli-rabe",
    "name": "Broccoli Rabe",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~12 oz (~$3.49)",
    "shelfLifeDays": 5,
    "tags": [
      "brassica",
      "braising",
      "bitter",
      "italian"
    ]
  },
  {
    "id": "savoy-cabbage",
    "name": "Savoy Cabbage",
    "category": "vegetable",
    "estimatedUnitCost": 0.4,
    "unit": "cup",
    "commonPackageSize": "1 head ~2 lb (~$1.49/lb)",
    "shelfLifeDays": 21,
    "tags": [
      "brassica",
      "braising",
      "wraps"
    ]
  },
  {
    "id": "romanesco",
    "name": "Romanesco",
    "category": "vegetable",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "1 head ~1.5 lb (~$3.99)",
    "shelfLifeDays": 7,
    "tags": [
      "brassica",
      "roasting"
    ]
  },
  {
    "id": "lacinato-kale",
    "name": "Lacinato Kale",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "1 bunch ~8 oz (~$2.79)",
    "shelfLifeDays": 6,
    "tags": [
      "leafy-green",
      "brassica",
      "tuscan",
      "salad"
    ]
  },
  {
    "id": "baby-kale",
    "name": "Baby Kale",
    "category": "vegetable",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "5 oz clamshell (~$3.49)",
    "shelfLifeDays": 6,
    "tags": [
      "leafy-green",
      "brassica",
      "salad",
      "prewashed"
    ]
  },
  {
    "id": "button-mushroom",
    "name": "Button Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "8 oz package (~$2.49)",
    "shelfLifeDays": 7,
    "tags": [
      "mushroom",
      "sauteing",
      "raw"
    ]
  },
  {
    "id": "oyster-mushroom",
    "name": "Oyster Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "6 oz package (~$4.49)",
    "shelfLifeDays": 5,
    "tags": [
      "mushroom",
      "sauteing",
      "umami"
    ]
  },
  {
    "id": "enoki-mushroom",
    "name": "Enoki Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "7 oz package (~$1.99)",
    "shelfLifeDays": 7,
    "tags": [
      "mushroom",
      "asian",
      "soup",
      "hot-pot"
    ]
  },
  {
    "id": "king-oyster-mushroom",
    "name": "King Oyster Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 1.8,
    "unit": "cup",
    "commonPackageSize": "6 oz package (~$4.99)",
    "shelfLifeDays": 10,
    "tags": [
      "mushroom",
      "meaty",
      "grilling",
      "umami"
    ]
  },
  {
    "id": "maitake-mushroom",
    "name": "Maitake Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "4 oz package (~$4.99)",
    "shelfLifeDays": 7,
    "tags": [
      "mushroom",
      "hen-of-the-woods",
      "roasting",
      "umami"
    ]
  },
  {
    "id": "beech-mushroom",
    "name": "Beech Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "3.5 oz package (~$2.99)",
    "shelfLifeDays": 10,
    "tags": [
      "mushroom",
      "shimeji",
      "asian",
      "stir-fry"
    ]
  },
  {
    "id": "snow-peas",
    "name": "Snow Peas",
    "category": "vegetable",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "8 oz package (~$3.49)",
    "shelfLifeDays": 5,
    "tags": [
      "legume",
      "stir-fry",
      "raw",
      "crunchy"
    ]
  },
  {
    "id": "globe-artichoke",
    "name": "Globe Artichoke",
    "category": "vegetable",
    "estimatedUnitCost": 1.75,
    "unit": "piece",
    "commonPackageSize": "~12 oz each (~$2.50)",
    "shelfLifeDays": 7,
    "tags": [
      "thistle",
      "steaming",
      "grilling"
    ]
  },
  {
    "id": "turmeric-root",
    "name": "Turmeric Root",
    "category": "vegetable",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "~4 oz fresh (~$3.99)",
    "shelfLifeDays": 21,
    "tags": [
      "aromatic",
      "fresh",
      "rhizome"
    ]
  },
  {
    "id": "russet-potato",
    "name": "Russet Potato",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "piece",
    "commonPackageSize": "5 lb bag ~10 potatoes (~$4.49)",
    "shelfLifeDays": 45,
    "tags": [
      "root",
      "starchy",
      "baking",
      "frying"
    ]
  },
  {
    "id": "yukon-gold-potato",
    "name": "Yukon Gold Potato",
    "category": "vegetable",
    "estimatedUnitCost": 0.5,
    "unit": "piece",
    "commonPackageSize": "5 lb bag ~15 potatoes (~$5.49)",
    "shelfLifeDays": 45,
    "tags": [
      "root",
      "waxy",
      "mashing",
      "roasting"
    ]
  },
  {
    "id": "fingerling-potato",
    "name": "Fingerling Potato",
    "category": "vegetable",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "1.5 lb bag (~$4.49)",
    "shelfLifeDays": 30,
    "tags": [
      "root",
      "waxy",
      "roasting"
    ]
  },
  {
    "id": "cranberries",
    "name": "Cranberries",
    "category": "fruit",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "12 oz bag (~$3)",
    "shelfLifeDays": 30,
    "tags": [
      "seasonal",
      "tart"
    ]
  },
  {
    "id": "honeydew",
    "name": "Honeydew Melon",
    "category": "fruit",
    "estimatedUnitCost": 0.8,
    "unit": "cup",
    "commonPackageSize": "whole melon (~$4)",
    "shelfLifeDays": 14,
    "tags": [
      "summer"
    ]
  },
  {
    "id": "nectarine",
    "name": "Nectarine",
    "category": "fruit",
    "estimatedUnitCost": 0.95,
    "unit": "nectarine",
    "commonPackageSize": "single (~$0.95)",
    "shelfLifeDays": 7,
    "tags": [
      "stone-fruit",
      "summer"
    ]
  },
  {
    "id": "plum",
    "name": "Plum",
    "category": "fruit",
    "estimatedUnitCost": 0.75,
    "unit": "plum",
    "commonPackageSize": "single (~$0.75)",
    "shelfLifeDays": 7,
    "tags": [
      "stone-fruit",
      "summer"
    ]
  },
  {
    "id": "apricot",
    "name": "Apricot",
    "category": "fruit",
    "estimatedUnitCost": 0.55,
    "unit": "apricot",
    "commonPackageSize": "single (~$0.55)",
    "shelfLifeDays": 5,
    "tags": [
      "stone-fruit",
      "summer"
    ]
  },
  {
    "id": "clementine",
    "name": "Clementine",
    "category": "fruit",
    "estimatedUnitCost": 0.4,
    "unit": "clementine",
    "commonPackageSize": "3 lb bag (~$6)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "snack"
    ]
  },
  {
    "id": "lychee",
    "name": "Lychee",
    "category": "fruit",
    "estimatedUnitCost": 2.5,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$6)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "papaya",
    "name": "Papaya",
    "category": "fruit",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "whole (~$3.50)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "passionfruit",
    "name": "Passion Fruit",
    "category": "fruit",
    "estimatedUnitCost": 1.25,
    "unit": "passionfruit",
    "commonPackageSize": "single (~$1.25)",
    "shelfLifeDays": 10,
    "tags": [
      "tropical",
      "tart"
    ]
  },
  {
    "id": "dragonfruit",
    "name": "Dragon Fruit",
    "category": "fruit",
    "estimatedUnitCost": 2.75,
    "unit": "cup",
    "commonPackageSize": "whole (~$4.50)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "guava",
    "name": "Guava",
    "category": "fruit",
    "estimatedUnitCost": 1.1,
    "unit": "guava",
    "commonPackageSize": "single (~$1.10)",
    "shelfLifeDays": 5,
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "coconut",
    "name": "Coconut",
    "category": "fruit",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "whole (~$3)",
    "shelfLifeDays": 21,
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "starfruit",
    "name": "Starfruit",
    "category": "fruit",
    "estimatedUnitCost": 1.5,
    "unit": "starfruit",
    "commonPackageSize": "single (~$1.50)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical",
      "tart"
    ]
  },
  {
    "id": "persimmon",
    "name": "Persimmon",
    "category": "fruit",
    "estimatedUnitCost": 1.2,
    "unit": "persimmon",
    "commonPackageSize": "single (~$1.20)",
    "shelfLifeDays": 10,
    "tags": [
      "seasonal"
    ]
  },
  {
    "id": "kumquat",
    "name": "Kumquat",
    "category": "fruit",
    "estimatedUnitCost": 2,
    "unit": "cup",
    "commonPackageSize": "8 oz (~$4)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus"
    ]
  },
  {
    "id": "fresh-fig",
    "name": "Fresh Fig",
    "category": "fruit",
    "estimatedUnitCost": 0.85,
    "unit": "fig",
    "commonPackageSize": "8 oz (~$5)",
    "shelfLifeDays": 5,
    "tags": [
      "seasonal"
    ]
  },
  {
    "id": "tangerine",
    "name": "Tangerine",
    "category": "fruit",
    "estimatedUnitCost": 0.55,
    "unit": "tangerine",
    "commonPackageSize": "single (~$0.55)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "snack"
    ]
  },
  {
    "id": "blood-orange",
    "name": "Blood Orange",
    "category": "fruit",
    "estimatedUnitCost": 1.1,
    "unit": "blood-orange",
    "commonPackageSize": "single (~$1.10)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "seasonal"
    ]
  },
  {
    "id": "key-lime",
    "name": "Key Lime",
    "category": "fruit",
    "estimatedUnitCost": 0.25,
    "unit": "key-lime",
    "commonPackageSize": "1 lb bag (~$4)",
    "shelfLifeDays": 21,
    "tags": [
      "citrus",
      "tart"
    ]
  },
  {
    "id": "meyer-lemon",
    "name": "Meyer Lemon",
    "category": "fruit",
    "estimatedUnitCost": 0.9,
    "unit": "meyer-lemon",
    "commonPackageSize": "single (~$0.90)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus"
    ]
  },
  {
    "id": "green-apple",
    "name": "Green Apple",
    "category": "fruit",
    "estimatedUnitCost": 0.9,
    "unit": "apple",
    "commonPackageSize": "single (~$0.90)",
    "shelfLifeDays": 21,
    "tags": [
      "tart"
    ]
  },
  {
    "id": "asian-pear",
    "name": "Asian Pear",
    "category": "fruit",
    "estimatedUnitCost": 1.75,
    "unit": "asian-pear",
    "commonPackageSize": "single (~$1.75)",
    "shelfLifeDays": 21,
    "tags": [
      "crisp"
    ]
  },
  {
    "id": "mangosteen",
    "name": "Mangosteen",
    "category": "fruit",
    "estimatedUnitCost": 4,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$10)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical",
      "exotic"
    ]
  },
  {
    "id": "rambutan",
    "name": "Rambutan",
    "category": "fruit",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$7)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical",
      "exotic"
    ]
  },
  {
    "id": "jackfruit-fresh",
    "name": "Fresh Jackfruit",
    "category": "fruit",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$5)",
    "shelfLifeDays": 7,
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "cherimoya",
    "name": "Cherimoya",
    "category": "fruit",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "whole (~$6)",
    "shelfLifeDays": 5,
    "tags": [
      "tropical",
      "exotic"
    ]
  },
  {
    "id": "gooseberry",
    "name": "Gooseberry",
    "category": "fruit",
    "estimatedUnitCost": 2.5,
    "unit": "cup",
    "commonPackageSize": "6 oz (~$4)",
    "shelfLifeDays": 10,
    "tags": [
      "tart",
      "seasonal"
    ]
  },
  {
    "id": "elderberry",
    "name": "Elderberry",
    "category": "fruit",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "6 oz (~$5)",
    "shelfLifeDays": 7,
    "tags": [
      "tart"
    ]
  },
  {
    "id": "blackcurrants",
    "name": "Blackcurrants",
    "category": "fruit",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "6 oz (~$5)",
    "shelfLifeDays": 10,
    "tags": [
      "tart",
      "seasonal"
    ]
  },
  {
    "id": "boysenberry",
    "name": "Boysenberry",
    "category": "fruit",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "6 oz (~$5)",
    "shelfLifeDays": 5,
    "tags": [
      "berry"
    ]
  },
  {
    "id": "golden-raisins",
    "name": "Golden Raisins",
    "category": "fruit",
    "estimatedUnitCost": 0.55,
    "unit": "1/4 cup",
    "commonPackageSize": "1 lb (~$5)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "pantry"
    ]
  },
  {
    "id": "dried-cherries",
    "name": "Dried Cherries",
    "category": "fruit",
    "estimatedUnitCost": 1.2,
    "unit": "1/4 cup",
    "commonPackageSize": "8 oz (~$6)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "pantry"
    ]
  },
  {
    "id": "dried-figs",
    "name": "Dried Figs",
    "category": "fruit",
    "estimatedUnitCost": 0.45,
    "unit": "fig",
    "commonPackageSize": "9 oz (~$5)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "pantry"
    ]
  },
  {
    "id": "goji-berries",
    "name": "Goji Berries",
    "category": "fruit",
    "estimatedUnitCost": 1.5,
    "unit": "1/4 cup",
    "commonPackageSize": "8 oz (~$10)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "superfood",
      "pantry"
    ]
  },
  {
    "id": "dried-blueberries",
    "name": "Dried Blueberries",
    "category": "fruit",
    "estimatedUnitCost": 1.3,
    "unit": "1/4 cup",
    "commonPackageSize": "5 oz (~$6)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "pantry"
    ]
  },
  {
    "id": "dried-pineapple",
    "name": "Dried Pineapple",
    "category": "fruit",
    "estimatedUnitCost": 1.1,
    "unit": "1/4 cup",
    "commonPackageSize": "6 oz (~$5)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "pantry"
    ]
  },
  {
    "id": "banana-chips",
    "name": "Banana Chips",
    "category": "fruit",
    "estimatedUnitCost": 0.6,
    "unit": "1/4 cup",
    "commonPackageSize": "12 oz (~$4)",
    "shelfLifeDays": 180,
    "tags": [
      "dried",
      "snack",
      "pantry"
    ]
  },
  {
    "id": "candied-ginger",
    "name": "Candied Ginger",
    "category": "fruit",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "8 oz (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "pantry"
    ]
  },
  {
    "id": "maraschino-cherries",
    "name": "Maraschino Cherries",
    "category": "fruit",
    "estimatedUnitCost": 1.8,
    "unit": "cup",
    "commonPackageSize": "10 oz jar (~$3.50)",
    "shelfLifeDays": 730,
    "tags": [
      "jarred",
      "garnish"
    ]
  },
  {
    "id": "low-moisture-mozzarella",
    "name": "Low-Moisture Mozzarella",
    "category": "dairy",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "16 oz block/shredded (~$5.00)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "melting",
      "pizza"
    ]
  },
  {
    "id": "fresh-mozzarella",
    "name": "Fresh Mozzarella",
    "category": "dairy",
    "estimatedUnitCost": 0.44,
    "unit": "oz",
    "commonPackageSize": "8 oz ball in brine (~$3.50)",
    "shelfLifeDays": 14,
    "tags": [
      "cheese",
      "fresh",
      "caprese"
    ]
  },
  {
    "id": "burrata",
    "name": "Burrata",
    "category": "dairy",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "8 oz (2 balls) (~$7.50)",
    "shelfLifeDays": 10,
    "tags": [
      "cheese",
      "fresh",
      "creamy"
    ]
  },
  {
    "id": "pecorino",
    "name": "Pecorino",
    "category": "dairy",
    "estimatedUnitCost": 1.06,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$8.50)",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "hard",
      "grating",
      "sheep"
    ]
  },
  {
    "id": "romano",
    "name": "Romano",
    "category": "dairy",
    "estimatedUnitCost": 0.81,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$6.50)",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "hard",
      "grating"
    ]
  },
  {
    "id": "camembert",
    "name": "Camembert",
    "category": "dairy",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "8 oz wheel (~$5.50)",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "soft",
      "bloomy-rind"
    ]
  },
  {
    "id": "gorgonzola",
    "name": "Gorgonzola",
    "category": "dairy",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$6.00)",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "blue",
      "creamy"
    ]
  },
  {
    "id": "colby",
    "name": "Colby",
    "category": "dairy",
    "estimatedUnitCost": 0.34,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$2.75)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "mild",
      "melting"
    ]
  },
  {
    "id": "colby-jack",
    "name": "Colby Jack",
    "category": "dairy",
    "estimatedUnitCost": 0.34,
    "unit": "oz",
    "commonPackageSize": "8 oz block/shredded (~$2.75)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "mild",
      "melting"
    ]
  },
  {
    "id": "muenster",
    "name": "Muenster",
    "category": "dairy",
    "estimatedUnitCost": 0.44,
    "unit": "oz",
    "commonPackageSize": "8 oz deli sliced (~$3.50)",
    "shelfLifeDays": 40,
    "tags": [
      "cheese",
      "mild",
      "melting",
      "deli"
    ]
  },
  {
    "id": "havarti",
    "name": "Havarti",
    "category": "dairy",
    "estimatedUnitCost": 0.56,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$4.50)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "semi-soft",
      "creamy",
      "melting"
    ]
  },
  {
    "id": "fontina",
    "name": "Fontina",
    "category": "dairy",
    "estimatedUnitCost": 0.81,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$6.50)",
    "shelfLifeDays": 50,
    "tags": [
      "cheese",
      "semi-soft",
      "melting",
      "nutty"
    ]
  },
  {
    "id": "asiago",
    "name": "Asiago",
    "category": "dairy",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$5.50)",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "hard",
      "grating",
      "nutty"
    ]
  },
  {
    "id": "oaxaca",
    "name": "Oaxaca",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "12 oz ball (~$6.00)",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "melting",
      "mexican",
      "quesadilla"
    ]
  },
  {
    "id": "string-cheese",
    "name": "String Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.42,
    "unit": "piece",
    "commonPackageSize": "12-pack sticks (~$5.00)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "snack",
      "mozzarella",
      "kids"
    ]
  },
  {
    "id": "boursin",
    "name": "Boursin",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "5.2 oz round (~$5.20)",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "spreadable",
      "herb",
      "soft"
    ]
  },
  {
    "id": "neufchatel",
    "name": "Neufchâtel",
    "category": "dairy",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$2.50)",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "spreadable",
      "light",
      "soft"
    ]
  },
  {
    "id": "roquefort",
    "name": "Roquefort",
    "category": "dairy",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "5 oz wedge (~$7.50)",
    "shelfLifeDays": 40,
    "tags": [
      "cheese",
      "blue",
      "sheep",
      "strong"
    ]
  },
  {
    "id": "stilton",
    "name": "Stilton",
    "category": "dairy",
    "estimatedUnitCost": 1.06,
    "unit": "oz",
    "commonPackageSize": "6 oz wedge (~$6.40)",
    "shelfLifeDays": 40,
    "tags": [
      "cheese",
      "blue",
      "british",
      "strong"
    ]
  },
  {
    "id": "emmental",
    "name": "Emmental",
    "category": "dairy",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$5.50)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "swiss-style",
      "melting",
      "nutty"
    ]
  },
  {
    "id": "jarlsberg",
    "name": "Jarlsberg",
    "category": "dairy",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$5.50)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "swiss-style",
      "mild",
      "nutty"
    ]
  },
  {
    "id": "edam",
    "name": "Edam",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "8 oz wheel (~$4.00)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "semi-hard",
      "mild",
      "dutch"
    ]
  },
  {
    "id": "raclette",
    "name": "Raclette",
    "category": "dairy",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$7.50)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "melting",
      "alpine"
    ]
  },
  {
    "id": "ricotta-salata",
    "name": "Ricotta Salata",
    "category": "dairy",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$6.00)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "firm",
      "salted",
      "grating",
      "sheep"
    ]
  },
  {
    "id": "queso-blanco",
    "name": "Queso Blanco",
    "category": "dairy",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "12 oz block (~$4.50)",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "mexican",
      "frying",
      "mild"
    ]
  },
  {
    "id": "queso-panela",
    "name": "Queso Panela",
    "category": "dairy",
    "estimatedUnitCost": 0.42,
    "unit": "oz",
    "commonPackageSize": "12 oz round (~$5.00)",
    "shelfLifeDays": 18,
    "tags": [
      "cheese",
      "mexican",
      "fresh",
      "mild"
    ]
  },
  {
    "id": "shredded-cheddar",
    "name": "Shredded Cheddar",
    "category": "dairy",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$3.00)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "shredded",
      "melting",
      "convenience"
    ]
  },
  {
    "id": "shredded-mexican-blend",
    "name": "Shredded Mexican Blend",
    "category": "dairy",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$3.00)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "shredded",
      "melting",
      "tacos"
    ]
  },
  {
    "id": "shredded-parmesan",
    "name": "Shredded Parmesan",
    "category": "dairy",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "6 oz tub (~$4.15)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "shredded",
      "grating",
      "topping"
    ]
  },
  {
    "id": "grated-parmesan",
    "name": "Grated Parmesan",
    "category": "dairy",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "8 oz shaker (~$5.50)",
    "shelfLifeDays": 180,
    "tags": [
      "cheese",
      "grated",
      "topping",
      "shelf-stable"
    ]
  },
  {
    "id": "smoked-gouda",
    "name": "Smoked Gouda",
    "category": "dairy",
    "estimatedUnitCost": 0.63,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge (~$5.00)",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "smoked",
      "semi-hard",
      "melting"
    ]
  },
  {
    "id": "sharp-cheddar",
    "name": "Sharp Cheddar",
    "category": "dairy",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$3.00)",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "aged",
      "melting"
    ]
  },
  {
    "id": "white-cheddar",
    "name": "White Cheddar",
    "category": "dairy",
    "estimatedUnitCost": 0.44,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$3.50)",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "aged",
      "melting"
    ]
  },
  {
    "id": "queso-oaxaca-shredded",
    "name": "Quesadilla Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.44,
    "unit": "oz",
    "commonPackageSize": "10 oz bag (~$4.40)",
    "shelfLifeDays": 40,
    "tags": [
      "cheese",
      "melting",
      "mexican",
      "shredded"
    ]
  },
  {
    "id": "chevre",
    "name": "Chèvre Log",
    "category": "dairy",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "4 oz log (~$3.00)",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "goat",
      "soft",
      "spreadable"
    ]
  },
  {
    "id": "queso-de-cabra",
    "name": "Aged Gouda",
    "category": "dairy",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge (~$6.60)",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "aged",
      "hard",
      "nutty"
    ]
  },
  {
    "id": "comte",
    "name": "Comté",
    "category": "dairy",
    "estimatedUnitCost": 1.25,
    "unit": "oz",
    "commonPackageSize": "6 oz wedge (~$7.50)",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "alpine",
      "hard",
      "nutty"
    ]
  },
  {
    "id": "queso-de-freir",
    "name": "Frying Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "12 oz block (~$6.00)",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "frying",
      "firm",
      "latin"
    ]
  },
  {
    "id": "halloumi-light",
    "name": "Quark Cheese Spread",
    "category": "dairy",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "8 oz tub (~$3.20)",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "fresh",
      "spreadable",
      "high-protein"
    ]
  },
  {
    "id": "pizza-cheese-blend",
    "name": "Pizza Cheese Blend",
    "category": "dairy",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$3.00)",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "shredded",
      "melting",
      "pizza"
    ]
  },
  {
    "id": "queso-dip",
    "name": "Queso Dip",
    "category": "dairy",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "15 oz jar (~$4.65)",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "dip",
      "processed",
      "snack"
    ]
  },
  {
    "id": "limburger",
    "name": "Limburger",
    "category": "dairy",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "8 oz block (~$6.00)",
    "shelfLifeDays": 40,
    "tags": [
      "cheese",
      "soft",
      "washed-rind",
      "strong"
    ]
  },
  {
    "id": "black-rice",
    "name": "Black Rice",
    "category": "grain",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "15 oz bag (~$4.50)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "wholesome"
    ]
  },
  {
    "id": "amaranth",
    "name": "Amaranth",
    "category": "grain",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$5)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "gluten-free"
    ]
  },
  {
    "id": "teff",
    "name": "Teff",
    "category": "grain",
    "estimatedUnitCost": 1.05,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$6.50)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "gluten-free"
    ]
  },
  {
    "id": "steel-cut-oats",
    "name": "Steel-Cut Oats",
    "category": "grain",
    "estimatedUnitCost": 0.45,
    "unit": "cup",
    "commonPackageSize": "30 oz tub (~$5.50)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "breakfast"
    ]
  },
  {
    "id": "wheat-berries",
    "name": "Wheat Berries",
    "category": "grain",
    "estimatedUnitCost": 0.4,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$4)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain"
    ]
  },
  {
    "id": "spelt",
    "name": "Spelt",
    "category": "grain",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$6)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "ancient-grain"
    ]
  },
  {
    "id": "fusilli",
    "name": "Fusilli",
    "category": "grain",
    "estimatedUnitCost": 0.38,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$1.80)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta",
      "staple"
    ]
  },
  {
    "id": "rotini",
    "name": "Rotini",
    "category": "grain",
    "estimatedUnitCost": 0.38,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$1.80)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta",
      "staple"
    ]
  },
  {
    "id": "ziti",
    "name": "Ziti",
    "category": "grain",
    "estimatedUnitCost": 0.38,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$1.80)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta",
      "staple"
    ]
  },
  {
    "id": "pasta-shells",
    "name": "Pasta Shells",
    "category": "grain",
    "estimatedUnitCost": 0.4,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$1.90)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta",
      "staple"
    ]
  },
  {
    "id": "cavatappi",
    "name": "Cavatappi",
    "category": "grain",
    "estimatedUnitCost": 0.45,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$2.20)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta"
    ]
  },
  {
    "id": "angel-hair",
    "name": "Angel Hair Pasta",
    "category": "grain",
    "estimatedUnitCost": 0.4,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$1.90)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta",
      "staple"
    ]
  },
  {
    "id": "pappardelle",
    "name": "Pappardelle",
    "category": "grain",
    "estimatedUnitCost": 0.7,
    "unit": "serving",
    "commonPackageSize": "8.8 oz box (~$3.20)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta"
    ]
  },
  {
    "id": "tagliatelle",
    "name": "Tagliatelle",
    "category": "grain",
    "estimatedUnitCost": 0.65,
    "unit": "serving",
    "commonPackageSize": "8.8 oz box (~$3)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta"
    ]
  },
  {
    "id": "orecchiette",
    "name": "Orecchiette",
    "category": "grain",
    "estimatedUnitCost": 0.48,
    "unit": "serving",
    "commonPackageSize": "1 lb box (~$2.40)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta"
    ]
  },
  {
    "id": "manicotti",
    "name": "Manicotti Shells",
    "category": "grain",
    "estimatedUnitCost": 0.85,
    "unit": "serving",
    "commonPackageSize": "8 oz box (~$3.20)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta"
    ]
  },
  {
    "id": "cannelloni",
    "name": "Cannelloni Tubes",
    "category": "grain",
    "estimatedUnitCost": 0.85,
    "unit": "serving",
    "commonPackageSize": "8 oz box (~$3.40)",
    "shelfLifeDays": 730,
    "tags": [
      "pasta"
    ]
  },
  {
    "id": "ravioli",
    "name": "Cheese Ravioli",
    "category": "grain",
    "estimatedUnitCost": 1.4,
    "unit": "serving",
    "commonPackageSize": "9 oz pack (~$4.20)",
    "shelfLifeDays": 45,
    "tags": [
      "pasta",
      "refrigerated"
    ]
  },
  {
    "id": "tortellini",
    "name": "Tortellini",
    "category": "grain",
    "estimatedUnitCost": 1.3,
    "unit": "serving",
    "commonPackageSize": "9 oz pack (~$4)",
    "shelfLifeDays": 45,
    "tags": [
      "pasta",
      "refrigerated"
    ]
  },
  {
    "id": "lo-mein-noodles",
    "name": "Lo Mein Noodles",
    "category": "grain",
    "estimatedUnitCost": 0.5,
    "unit": "serving",
    "commonPackageSize": "14 oz pack (~$3)",
    "shelfLifeDays": 540,
    "tags": [
      "noodles",
      "asian"
    ]
  },
  {
    "id": "chow-mein-noodles",
    "name": "Chow Mein Noodles",
    "category": "grain",
    "estimatedUnitCost": 0.55,
    "unit": "serving",
    "commonPackageSize": "14 oz pack (~$3.20)",
    "shelfLifeDays": 540,
    "tags": [
      "noodles",
      "asian"
    ]
  },
  {
    "id": "wide-rice-noodles",
    "name": "Wide Rice Noodles",
    "category": "grain",
    "estimatedUnitCost": 0.5,
    "unit": "serving",
    "commonPackageSize": "14 oz pack (~$3)",
    "shelfLifeDays": 730,
    "tags": [
      "noodles",
      "asian",
      "gluten-free"
    ]
  },
  {
    "id": "focaccia",
    "name": "Focaccia",
    "category": "grain",
    "estimatedUnitCost": 0.75,
    "unit": "slice",
    "commonPackageSize": "12 oz loaf (~$5)",
    "shelfLifeDays": 4,
    "tags": [
      "bread",
      "bakery"
    ]
  },
  {
    "id": "multigrain-bread",
    "name": "Multigrain Bread",
    "category": "grain",
    "estimatedUnitCost": 0.22,
    "unit": "slice",
    "commonPackageSize": "24 oz loaf (~$4)",
    "shelfLifeDays": 7,
    "tags": [
      "bread",
      "whole-grain"
    ]
  },
  {
    "id": "pumpernickel",
    "name": "Pumpernickel Bread",
    "category": "grain",
    "estimatedUnitCost": 0.35,
    "unit": "slice",
    "commonPackageSize": "16 oz loaf (~$4.50)",
    "shelfLifeDays": 7,
    "tags": [
      "bread"
    ]
  },
  {
    "id": "challah",
    "name": "Challah",
    "category": "grain",
    "estimatedUnitCost": 0.4,
    "unit": "slice",
    "commonPackageSize": "16 oz loaf (~$5)",
    "shelfLifeDays": 5,
    "tags": [
      "bread",
      "bakery"
    ]
  },
  {
    "id": "cornbread",
    "name": "Cornbread",
    "category": "grain",
    "estimatedUnitCost": 0.55,
    "unit": "slice",
    "commonPackageSize": "16 oz loaf (~$5)",
    "shelfLifeDays": 4,
    "tags": [
      "bread"
    ]
  },
  {
    "id": "dinner-rolls",
    "name": "Dinner Rolls",
    "category": "grain",
    "estimatedUnitCost": 0.3,
    "unit": "roll",
    "commonPackageSize": "12 ct (~$3.60)",
    "shelfLifeDays": 7,
    "tags": [
      "bread"
    ]
  },
  {
    "id": "kaiser-rolls",
    "name": "Kaiser Rolls",
    "category": "grain",
    "estimatedUnitCost": 0.5,
    "unit": "roll",
    "commonPackageSize": "8 ct (~$4)",
    "shelfLifeDays": 7,
    "tags": [
      "bread"
    ]
  },
  {
    "id": "sub-rolls",
    "name": "Sub Rolls",
    "category": "grain",
    "estimatedUnitCost": 0.55,
    "unit": "roll",
    "commonPackageSize": "6 ct (~$3.30)",
    "shelfLifeDays": 6,
    "tags": [
      "bread"
    ]
  },
  {
    "id": "croissant",
    "name": "Croissant",
    "category": "grain",
    "estimatedUnitCost": 0.85,
    "unit": "piece",
    "commonPackageSize": "6 ct (~$5)",
    "shelfLifeDays": 4,
    "tags": [
      "bread",
      "bakery"
    ]
  },
  {
    "id": "flatbread",
    "name": "Flatbread",
    "category": "grain",
    "estimatedUnitCost": 0.6,
    "unit": "piece",
    "commonPackageSize": "6 ct (~$3.60)",
    "shelfLifeDays": 14,
    "tags": [
      "bread"
    ]
  },
  {
    "id": "lavash",
    "name": "Lavash",
    "category": "grain",
    "estimatedUnitCost": 0.7,
    "unit": "piece",
    "commonPackageSize": "5 ct (~$3.50)",
    "shelfLifeDays": 14,
    "tags": [
      "bread",
      "wrap"
    ]
  },
  {
    "id": "roti",
    "name": "Roti",
    "category": "grain",
    "estimatedUnitCost": 0.35,
    "unit": "piece",
    "commonPackageSize": "10 ct (~$3.50)",
    "shelfLifeDays": 14,
    "tags": [
      "bread",
      "flatbread"
    ]
  },
  {
    "id": "crumpets",
    "name": "Crumpets",
    "category": "grain",
    "estimatedUnitCost": 0.5,
    "unit": "piece",
    "commonPackageSize": "6 ct (~$3)",
    "shelfLifeDays": 10,
    "tags": [
      "bread",
      "breakfast"
    ]
  },
  {
    "id": "texas-toast",
    "name": "Texas Toast",
    "category": "grain",
    "estimatedUnitCost": 0.3,
    "unit": "slice",
    "commonPackageSize": "20 oz loaf (~$4)",
    "shelfLifeDays": 7,
    "tags": [
      "bread",
      "thick-cut"
    ]
  },
  {
    "id": "breadsticks",
    "name": "Breadsticks",
    "category": "grain",
    "estimatedUnitCost": 0.2,
    "unit": "piece",
    "commonPackageSize": "12 ct (~$2.40)",
    "shelfLifeDays": 120,
    "tags": [
      "bread",
      "snack"
    ]
  },
  {
    "id": "bread-flour",
    "name": "Bread Flour",
    "category": "grain",
    "estimatedUnitCost": 0.3,
    "unit": "cup",
    "commonPackageSize": "5 lb bag (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "staple"
    ]
  },
  {
    "id": "cake-flour",
    "name": "Cake Flour",
    "category": "grain",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "32 oz box (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking"
    ]
  },
  {
    "id": "self-rising-flour",
    "name": "Self-Rising Flour",
    "category": "grain",
    "estimatedUnitCost": 0.28,
    "unit": "cup",
    "commonPackageSize": "5 lb bag (~$4)",
    "shelfLifeDays": 365,
    "tags": [
      "baking"
    ]
  },
  {
    "id": "semolina-flour",
    "name": "Semolina Flour",
    "category": "grain",
    "estimatedUnitCost": 0.45,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "pasta"
    ]
  },
  {
    "id": "oat-bran",
    "name": "Oat Bran",
    "category": "grain",
    "estimatedUnitCost": 0.4,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$4)",
    "shelfLifeDays": 300,
    "tags": [
      "whole-grain",
      "fiber"
    ]
  },
  {
    "id": "wheat-germ",
    "name": "Wheat Germ",
    "category": "grain",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "12 oz jar (~$5)",
    "shelfLifeDays": 270,
    "tags": [
      "whole-grain",
      "topping"
    ]
  },
  {
    "id": "cream-of-wheat",
    "name": "Cream of Wheat",
    "category": "grain",
    "estimatedUnitCost": 0.35,
    "unit": "cup",
    "commonPackageSize": "28 oz box (~$4.50)",
    "shelfLifeDays": 540,
    "tags": [
      "breakfast",
      "hot-cereal"
    ]
  },
  {
    "id": "coconut-flour",
    "name": "Coconut Flour",
    "category": "grain",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$6.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "flour",
      "gluten-free",
      "grain-free",
      "high-fiber"
    ]
  },
  {
    "id": "chickpea-flour",
    "name": "Chickpea Flour",
    "category": "grain",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "2 lb (~$5.50)",
    "shelfLifeDays": 270,
    "tags": [
      "baking",
      "flour",
      "gluten-free",
      "besan",
      "high-protein"
    ]
  },
  {
    "id": "cassava-flour",
    "name": "Cassava Flour",
    "category": "grain",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "2 lb (~$8.00)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "flour",
      "gluten-free",
      "grain-free"
    ]
  },
  {
    "id": "tapioca-flour",
    "name": "Tapioca Flour",
    "category": "grain",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "1.5 lb (~$5.00)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "flour",
      "gluten-free",
      "thickener"
    ]
  },
  {
    "id": "pastry-flour",
    "name": "Pastry Flour",
    "category": "grain",
    "estimatedUnitCost": 0.6,
    "unit": "cup",
    "commonPackageSize": "2 lb (~$5.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "flour",
      "low-protein"
    ]
  },
  {
    "id": "gluten-free-flour",
    "name": "Gluten-Free All-Purpose Flour",
    "category": "grain",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "2.5 lb (~$6.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "flour",
      "gluten-free",
      "blend"
    ]
  },
  {
    "id": "buckwheat-flour",
    "name": "Buckwheat Flour",
    "category": "grain",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "1.5 lb (~$5.50)",
    "shelfLifeDays": 270,
    "tags": [
      "baking",
      "flour",
      "gluten-free",
      "whole-grain"
    ]
  },
  {
    "id": "spelt-flour",
    "name": "Spelt Flour",
    "category": "grain",
    "estimatedUnitCost": 0.8,
    "unit": "cup",
    "commonPackageSize": "2 lb (~$6.00)",
    "shelfLifeDays": 270,
    "tags": [
      "baking",
      "flour",
      "whole-grain",
      "ancient-grain"
    ]
  },
  {
    "id": "caster-sugar",
    "name": "Caster Sugar",
    "category": "spice",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$3.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "baking",
      "sugar",
      "superfine"
    ]
  },
  {
    "id": "demerara-sugar",
    "name": "Demerara Sugar",
    "category": "spice",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "24 oz (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "baking",
      "sugar",
      "raw"
    ]
  },
  {
    "id": "muscovado-sugar",
    "name": "Muscovado Sugar",
    "category": "spice",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "1 lb (~$6.00)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "sugar",
      "dark",
      "molasses"
    ]
  },
  {
    "id": "sanding-sugar",
    "name": "Sanding Sugar",
    "category": "spice",
    "estimatedUnitCost": 0.25,
    "unit": "tbsp",
    "commonPackageSize": "3.8 oz (~$4.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "baking",
      "decoration",
      "coarse-sugar"
    ]
  },
  {
    "id": "milk-chocolate-chips",
    "name": "Milk Chocolate Chips",
    "category": "snack",
    "estimatedUnitCost": 0.42,
    "unit": "oz",
    "commonPackageSize": "11.5 oz bag (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "chocolate",
      "chips"
    ]
  },
  {
    "id": "milk-chocolate",
    "name": "Milk Chocolate",
    "category": "snack",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "4 oz bar (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "chocolate",
      "bar"
    ]
  },
  {
    "id": "white-chocolate",
    "name": "White Chocolate",
    "category": "snack",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "4 oz bar (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "chocolate",
      "bar"
    ]
  },
  {
    "id": "chocolate-chunks",
    "name": "Chocolate Chunks",
    "category": "snack",
    "estimatedUnitCost": 0.48,
    "unit": "oz",
    "commonPackageSize": "10 oz bag (~$4.80)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "chocolate",
      "semisweet"
    ]
  },
  {
    "id": "mini-chocolate-chips",
    "name": "Mini Chocolate Chips",
    "category": "snack",
    "estimatedUnitCost": 0.42,
    "unit": "oz",
    "commonPackageSize": "10 oz bag (~$4.20)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "chocolate",
      "chips"
    ]
  },
  {
    "id": "baking-chocolate",
    "name": "Bittersweet Baking Chocolate",
    "category": "snack",
    "estimatedUnitCost": 0.65,
    "unit": "oz",
    "commonPackageSize": "4 oz bar (~$2.80)",
    "shelfLifeDays": 545,
    "tags": [
      "baking",
      "chocolate",
      "bittersweet"
    ]
  },
  {
    "id": "butterscotch-chips",
    "name": "Butterscotch Chips",
    "category": "snack",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "11 oz bag (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "chips",
      "butterscotch"
    ]
  },
  {
    "id": "cacao-nibs",
    "name": "Cacao Nibs",
    "category": "snack",
    "estimatedUnitCost": 0.95,
    "unit": "oz",
    "commonPackageSize": "8 oz (~$7.50)",
    "shelfLifeDays": 545,
    "tags": [
      "baking",
      "chocolate",
      "unsweetened"
    ]
  },
  {
    "id": "lemon-extract",
    "name": "Lemon Extract",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "1 fl oz (~$4.50)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "extract",
      "flavoring"
    ]
  },
  {
    "id": "orange-extract",
    "name": "Orange Extract",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "1 fl oz (~$4.50)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "extract",
      "flavoring"
    ]
  },
  {
    "id": "rum-extract",
    "name": "Rum Extract",
    "category": "spice",
    "estimatedUnitCost": 0.28,
    "unit": "tsp",
    "commonPackageSize": "1 fl oz (~$4.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "extract",
      "flavoring"
    ]
  },
  {
    "id": "coconut-extract",
    "name": "Coconut Extract",
    "category": "spice",
    "estimatedUnitCost": 0.28,
    "unit": "tsp",
    "commonPackageSize": "2 fl oz (~$5.50)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "extract",
      "flavoring"
    ]
  },
  {
    "id": "maple-extract",
    "name": "Maple Extract",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "2 fl oz (~$6.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "extract",
      "flavoring"
    ]
  },
  {
    "id": "vanilla-bean-paste",
    "name": "Vanilla Bean Paste",
    "category": "spice",
    "estimatedUnitCost": 0.95,
    "unit": "tsp",
    "commonPackageSize": "4 fl oz (~$15.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "baking",
      "vanilla",
      "flavoring"
    ]
  },
  {
    "id": "vanilla-bean",
    "name": "Vanilla Bean",
    "category": "spice",
    "estimatedUnitCost": 2.5,
    "unit": "piece",
    "commonPackageSize": "2 beans (~$5.00)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "vanilla",
      "whole"
    ]
  },
  {
    "id": "pectin",
    "name": "Fruit Pectin",
    "category": "spice",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "1.75 oz box (~$3.50)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "jam",
      "gelling-agent"
    ]
  },
  {
    "id": "xanthan-gum",
    "name": "Xanthan Gum",
    "category": "spice",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "8 oz (~$9.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "baking",
      "gluten-free",
      "thickener",
      "binder"
    ]
  },
  {
    "id": "meringue-powder",
    "name": "Meringue Powder",
    "category": "spice",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "8 oz (~$9.50)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "royal-icing",
      "egg-white"
    ]
  },
  {
    "id": "pie-crust",
    "name": "Refrigerated Pie Crust",
    "category": "grain",
    "estimatedUnitCost": 2.25,
    "unit": "piece",
    "commonPackageSize": "2 crusts (~$4.50)",
    "shelfLifeDays": 60,
    "tags": [
      "baking",
      "pastry",
      "refrigerated"
    ]
  },
  {
    "id": "graham-cracker-crust",
    "name": "Graham Cracker Crust",
    "category": "grain",
    "estimatedUnitCost": 2.8,
    "unit": "piece",
    "commonPackageSize": "1 crust 6 oz (~$2.80)",
    "shelfLifeDays": 180,
    "tags": [
      "baking",
      "pastry",
      "prepared"
    ]
  },
  {
    "id": "crescent-dough",
    "name": "Crescent Roll Dough",
    "category": "grain",
    "estimatedUnitCost": 3,
    "unit": "can",
    "commonPackageSize": "8 oz can (~$3.00)",
    "shelfLifeDays": 60,
    "tags": [
      "baking",
      "dough",
      "refrigerated"
    ]
  },
  {
    "id": "sweetened-shredded-coconut",
    "name": "Sweetened Shredded Coconut",
    "category": "snack",
    "estimatedUnitCost": 0.42,
    "unit": "oz",
    "commonPackageSize": "14 oz bag (~$5.50)",
    "shelfLifeDays": 270,
    "tags": [
      "baking",
      "coconut",
      "sweetened"
    ]
  },
  {
    "id": "sprinkles",
    "name": "Rainbow Sprinkles",
    "category": "snack",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "3.5 oz (~$3.00)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "decoration"
    ]
  },
  {
    "id": "gel-food-coloring",
    "name": "Gel Food Coloring",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "4 colors (~$8.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "decoration",
      "coloring"
    ]
  },
  {
    "id": "liquid-food-coloring",
    "name": "Liquid Food Coloring",
    "category": "spice",
    "estimatedUnitCost": 0.15,
    "unit": "tsp",
    "commonPackageSize": "4 x 1 fl oz (~$5.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "baking",
      "decoration",
      "coloring"
    ]
  },
  {
    "id": "frosting",
    "name": "Vanilla Frosting",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "oz",
    "commonPackageSize": "16 oz tub (~$3.50)",
    "shelfLifeDays": 300,
    "tags": [
      "baking",
      "frosting",
      "prepared"
    ]
  },
  {
    "id": "fondant",
    "name": "Rolled Fondant",
    "category": "snack",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "24 oz (~$13.00)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "decoration",
      "fondant"
    ]
  },
  {
    "id": "candy-melts",
    "name": "Candy Melts",
    "category": "snack",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "12 oz bag (~$6.00)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "decoration",
      "coating"
    ]
  },
  {
    "id": "golden-syrup",
    "name": "Golden Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "16 oz (~$6.00)",
    "shelfLifeDays": 730,
    "tags": [
      "baking",
      "sweetener",
      "invert-syrup"
    ]
  },
  {
    "id": "dry-milk-powder",
    "name": "Nonfat Dry Milk Powder",
    "category": "dairy",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "22 oz (~$12.00)",
    "shelfLifeDays": 545,
    "tags": [
      "baking",
      "milk",
      "powder",
      "shelf-stable"
    ]
  },
  {
    "id": "toffee-bits",
    "name": "Toffee Bits",
    "category": "snack",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "decoration",
      "toffee"
    ]
  },
  {
    "id": "almond-paste",
    "name": "Almond Paste",
    "category": "snack",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "8 oz (~$7.00)",
    "shelfLifeDays": 365,
    "tags": [
      "baking",
      "almond",
      "filling"
    ]
  },
  {
    "id": "graham-cracker-crumbs",
    "name": "Graham Cracker Crumbs",
    "category": "grain",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "13.5 oz box (~$4.50)",
    "shelfLifeDays": 270,
    "tags": [
      "baking",
      "crust",
      "crumbs"
    ]
  },
  {
    "id": "sunflower-oil",
    "name": "Sunflower Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.09,
    "unit": "tbsp",
    "commonPackageSize": "48 fl oz (~$8.50)",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "neutral",
      "high-smoke-point"
    ]
  },
  {
    "id": "corn-oil",
    "name": "Corn Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.07,
    "unit": "tbsp",
    "commonPackageSize": "48 fl oz (~$6.50)",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "neutral",
      "frying"
    ]
  },
  {
    "id": "safflower-oil",
    "name": "Safflower Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.13,
    "unit": "tbsp",
    "commonPackageSize": "32 fl oz (~$8.00)",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "neutral",
      "high-smoke-point"
    ]
  },
  {
    "id": "walnut-oil",
    "name": "Walnut Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "8.4 fl oz (~$11.00)",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "finishing",
      "nutty"
    ]
  },
  {
    "id": "flaxseed-oil",
    "name": "Flaxseed Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "8 fl oz (~$10.00)",
    "shelfLifeDays": 180,
    "tags": [
      "oil",
      "finishing",
      "omega-3",
      "refrigerate"
    ]
  },
  {
    "id": "mustard-oil",
    "name": "Mustard Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$7.00)",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "indian",
      "pungent"
    ]
  },
  {
    "id": "rice-bran-oil",
    "name": "Rice Bran Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.16,
    "unit": "tbsp",
    "commonPackageSize": "24 fl oz (~$9.00)",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "neutral",
      "high-smoke-point"
    ]
  },
  {
    "id": "lard",
    "name": "Lard",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "16 oz (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "fat",
      "baking",
      "rendered"
    ]
  },
  {
    "id": "malt-vinegar",
    "name": "Malt Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.05,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$3.50)",
    "shelfLifeDays": 1825,
    "tags": [
      "vinegar",
      "british",
      "fish-and-chips"
    ]
  },
  {
    "id": "distilled-white-vinegar",
    "name": "Distilled White Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.02,
    "unit": "tbsp",
    "commonPackageSize": "32 fl oz (~$2.50)",
    "shelfLifeDays": 3650,
    "tags": [
      "vinegar",
      "cleaning",
      "pickling"
    ]
  },
  {
    "id": "champagne-vinegar",
    "name": "Champagne Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.13,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz (~$5.50)",
    "shelfLifeDays": 1825,
    "tags": [
      "vinegar",
      "mild",
      "dressing"
    ]
  },
  {
    "id": "tabasco-sauce",
    "name": "Tabasco Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "2 fl oz (~$3.50)",
    "shelfLifeDays": 1825,
    "tags": [
      "hot-sauce",
      "spicy",
      "louisiana"
    ]
  },
  {
    "id": "franks-hot-sauce",
    "name": "Frank's Hot Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "12 fl oz (~$4.00)",
    "shelfLifeDays": 1825,
    "tags": [
      "hot-sauce",
      "buffalo",
      "cayenne"
    ]
  },
  {
    "id": "cholula-hot-sauce",
    "name": "Cholula Hot Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "5 fl oz (~$3.50)",
    "shelfLifeDays": 1825,
    "tags": [
      "hot-sauce",
      "mexican",
      "mild"
    ]
  },
  {
    "id": "tapatio-hot-sauce",
    "name": "Tapatio Hot Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.03,
    "unit": "tsp",
    "commonPackageSize": "12 fl oz (~$3.00)",
    "shelfLifeDays": 1825,
    "tags": [
      "hot-sauce",
      "mexican"
    ]
  },
  {
    "id": "honey-mustard",
    "name": "Honey Mustard",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "12 oz (~$3.50)",
    "shelfLifeDays": 365,
    "tags": [
      "mustard",
      "sweet",
      "sandwich"
    ]
  },
  {
    "id": "whole-grain-mustard",
    "name": "Whole Grain Mustard",
    "category": "condiment",
    "estimatedUnitCost": 0.15,
    "unit": "tbsp",
    "commonPackageSize": "7 oz (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "mustard",
      "grainy"
    ]
  },
  {
    "id": "spicy-brown-mustard",
    "name": "Spicy Brown Mustard",
    "category": "condiment",
    "estimatedUnitCost": 0.07,
    "unit": "tbsp",
    "commonPackageSize": "9 oz (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "mustard",
      "deli"
    ]
  },
  {
    "id": "sweet-pickle-relish",
    "name": "Sweet Pickle Relish",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tbsp",
    "commonPackageSize": "10 oz (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "relish",
      "hot-dog",
      "sweet"
    ]
  },
  {
    "id": "dill-relish",
    "name": "Dill Relish",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tbsp",
    "commonPackageSize": "10 oz (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "relish",
      "tangy"
    ]
  },
  {
    "id": "tartar-sauce",
    "name": "Tartar Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "8 oz (~$3.00)",
    "shelfLifeDays": 180,
    "tags": [
      "seafood",
      "creamy"
    ]
  },
  {
    "id": "cocktail-sauce",
    "name": "Cocktail Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.12,
    "unit": "tbsp",
    "commonPackageSize": "12 oz (~$3.50)",
    "shelfLifeDays": 365,
    "tags": [
      "seafood",
      "shrimp",
      "horseradish"
    ]
  },
  {
    "id": "remoulade",
    "name": "Remoulade Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.14,
    "unit": "tbsp",
    "commonPackageSize": "10 oz (~$4.50)",
    "shelfLifeDays": 120,
    "tags": [
      "cajun",
      "creamy",
      "seafood"
    ]
  },
  {
    "id": "aioli",
    "name": "Garlic Aioli",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "10 oz (~$5.50)",
    "shelfLifeDays": 120,
    "tags": [
      "garlic",
      "creamy",
      "spread"
    ]
  },
  {
    "id": "horseradish-sauce",
    "name": "Creamy Horseradish Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.12,
    "unit": "tbsp",
    "commonPackageSize": "9.5 oz (~$3.50)",
    "shelfLifeDays": 120,
    "tags": [
      "creamy",
      "beef",
      "spicy"
    ]
  },
  {
    "id": "giardiniera",
    "name": "Giardiniera",
    "category": "condiment",
    "estimatedUnitCost": 0.13,
    "unit": "tbsp",
    "commonPackageSize": "16 oz (~$5.00)",
    "shelfLifeDays": 365,
    "tags": [
      "pickled",
      "italian",
      "spicy"
    ]
  },
  {
    "id": "duck-sauce",
    "name": "Duck Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.07,
    "unit": "tbsp",
    "commonPackageSize": "9.5 oz (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "sweet",
      "chinese-american",
      "dipping"
    ]
  },
  {
    "id": "chili-sauce",
    "name": "Tomato Chili Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.09,
    "unit": "tbsp",
    "commonPackageSize": "12 oz (~$3.50)",
    "shelfLifeDays": 365,
    "tags": [
      "tomato",
      "tangy",
      "cocktail-meatballs"
    ]
  },
  {
    "id": "french-dressing",
    "name": "French Dressing",
    "category": "condiment",
    "estimatedUnitCost": 0.06,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$3.00)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "sweet",
      "tomato"
    ]
  },
  {
    "id": "honey-mustard-dressing",
    "name": "Honey Mustard Dressing",
    "category": "condiment",
    "estimatedUnitCost": 0.07,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$3.50)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "sweet",
      "tangy"
    ]
  },
  {
    "id": "greek-dressing",
    "name": "Greek Dressing",
    "category": "condiment",
    "estimatedUnitCost": 0.09,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$4.00)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "mediterranean",
      "oregano"
    ]
  },
  {
    "id": "green-goddess-dressing",
    "name": "Green Goddess Dressing",
    "category": "condiment",
    "estimatedUnitCost": 0.13,
    "unit": "tbsp",
    "commonPackageSize": "12 fl oz (~$4.50)",
    "shelfLifeDays": 120,
    "tags": [
      "dressing",
      "herby",
      "creamy"
    ]
  },
  {
    "id": "poppyseed-dressing",
    "name": "Poppyseed Dressing",
    "category": "condiment",
    "estimatedUnitCost": 0.09,
    "unit": "tbsp",
    "commonPackageSize": "12 fl oz (~$4.00)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "sweet",
      "salad"
    ]
  },
  {
    "id": "sesame-ginger-dressing",
    "name": "Sesame Ginger Dressing",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "12 fl oz (~$4.50)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "asian",
      "tangy"
    ]
  },
  {
    "id": "raspberry-vinaigrette",
    "name": "Raspberry Vinaigrette",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$3.50)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "fruity",
      "sweet"
    ]
  },
  {
    "id": "red-wine-vinaigrette",
    "name": "Red Wine Vinaigrette",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz (~$3.50)",
    "shelfLifeDays": 270,
    "tags": [
      "dressing",
      "tangy"
    ]
  },
  {
    "id": "almond-butter",
    "name": "Almond Butter",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "16 oz (~$10.00)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "nut-butter",
      "protein"
    ]
  },
  {
    "id": "cashew-butter",
    "name": "Cashew Butter",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "11 oz (~$11.00)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "nut-butter"
    ]
  },
  {
    "id": "sunflower-seed-butter",
    "name": "Sunflower Seed Butter",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "16 oz (~$7.00)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "nut-free",
      "seed-butter"
    ]
  },
  {
    "id": "grape-jelly",
    "name": "Grape Jelly",
    "category": "condiment",
    "estimatedUnitCost": 0.05,
    "unit": "tbsp",
    "commonPackageSize": "18 oz (~$3.00)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "sweet",
      "pbj"
    ]
  },
  {
    "id": "strawberry-jam",
    "name": "Strawberry Jam",
    "category": "condiment",
    "estimatedUnitCost": 0.07,
    "unit": "tbsp",
    "commonPackageSize": "18 oz (~$4.00)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "sweet",
      "fruit"
    ]
  },
  {
    "id": "raspberry-jam",
    "name": "Raspberry Jam",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tbsp",
    "commonPackageSize": "18 oz (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "sweet",
      "fruit"
    ]
  },
  {
    "id": "fig-jam",
    "name": "Fig Jam",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "12 oz (~$6.00)",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "cheese-board",
      "sweet"
    ]
  },
  {
    "id": "light-soy-sauce",
    "name": "Light soy sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.14,
    "unit": "tbsp",
    "commonPackageSize": "16.9 oz bottle (~$4.50)",
    "shelfLifeDays": 730,
    "tags": [
      "umami",
      "staple",
      "vegan"
    ]
  },
  {
    "id": "shaoxing-wine",
    "name": "Shaoxing cooking wine",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "21 oz bottle (~$4)",
    "shelfLifeDays": 730,
    "tags": [
      "umami",
      "vegan"
    ]
  },
  {
    "id": "chinkiang-vinegar",
    "name": "Chinkiang black vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.13,
    "unit": "tbsp",
    "commonPackageSize": "18.6 oz bottle (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "acidic",
      "vegan"
    ]
  },
  {
    "id": "char-siu-sauce",
    "name": "Char siu sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "14 oz jar (~$5)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "sweet"
    ]
  },
  {
    "id": "black-bean-paste",
    "name": "Korean black bean paste (chunjang)",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz tub (~$6)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "vegan"
    ]
  },
  {
    "id": "sweet-bean-sauce",
    "name": "Sweet bean sauce (tianmianjiang)",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "14 oz jar (~$5)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "vegan",
      "sweet"
    ]
  },
  {
    "id": "vegetarian-oyster-sauce",
    "name": "Vegetarian oyster sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.16,
    "unit": "tbsp",
    "commonPackageSize": "12.8 oz bottle (~$4.50)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "vegan"
    ]
  },
  {
    "id": "coconut-aminos",
    "name": "Coconut aminos",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "8 oz bottle (~$5)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "vegan",
      "gluten-free"
    ]
  },
  {
    "id": "liquid-aminos",
    "name": "Liquid aminos",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "16 oz bottle (~$6)",
    "shelfLifeDays": 730,
    "tags": [
      "umami",
      "vegan",
      "gluten-free"
    ]
  },
  {
    "id": "katsu-sauce",
    "name": "Tonkatsu / katsu sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz bottle (~$5.50)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "sweet",
      "vegan"
    ]
  },
  {
    "id": "okonomiyaki-sauce",
    "name": "Okonomiyaki sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.28,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz bottle (~$6.50)",
    "shelfLifeDays": 540,
    "tags": [
      "umami",
      "sweet"
    ]
  },
  {
    "id": "japanese-curry-roux",
    "name": "Japanese curry roux",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "cube",
    "commonPackageSize": "8.4 oz box / 8 cubes (~$4.50)",
    "shelfLifeDays": 540,
    "tags": [
      "umami"
    ]
  },
  {
    "id": "mentsuyu",
    "name": "Mentsuyu (noodle soup base)",
    "category": "condiment",
    "estimatedUnitCost": 0.16,
    "unit": "tbsp",
    "commonPackageSize": "16.2 oz bottle (~$6)",
    "shelfLifeDays": 365,
    "tags": [
      "umami"
    ]
  },
  {
    "id": "hondashi",
    "name": "Hondashi (dashi granules)",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "2.1 oz jar (~$5)",
    "shelfLifeDays": 730,
    "tags": [
      "umami"
    ]
  },
  {
    "id": "wasabi-paste",
    "name": "Wasabi paste",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "1.52 oz tube (~$4)",
    "shelfLifeDays": 365,
    "tags": [
      "spicy",
      "vegan"
    ]
  },
  {
    "id": "pickled-ginger",
    "name": "Pickled ginger (gari)",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "6 oz jar (~$4)",
    "shelfLifeDays": 365,
    "tags": [
      "acidic",
      "vegan"
    ]
  },
  {
    "id": "goma-dressing",
    "name": "Japanese sesame dressing (goma)",
    "category": "condiment",
    "estimatedUnitCost": 0.24,
    "unit": "tbsp",
    "commonPackageSize": "8 oz bottle (~$5)",
    "shelfLifeDays": 180,
    "tags": [
      "nutty"
    ]
  },
  {
    "id": "yuzu-juice",
    "name": "Yuzu juice",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "5 oz bottle (~$9)",
    "shelfLifeDays": 365,
    "tags": [
      "acidic",
      "vegan"
    ]
  },
  {
    "id": "tom-yum-paste",
    "name": "Tom yum paste",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar (~$5.50)",
    "shelfLifeDays": 540,
    "tags": [
      "spicy",
      "umami"
    ]
  },
  {
    "id": "nam-prik-pao",
    "name": "Thai chili jam (nam prik pao)",
    "category": "condiment",
    "estimatedUnitCost": 0.38,
    "unit": "tbsp",
    "commonPackageSize": "7.5 oz jar (~$5.50)",
    "shelfLifeDays": 540,
    "tags": [
      "spicy",
      "sweet",
      "umami"
    ]
  },
  {
    "id": "thai-sweet-soy",
    "name": "Thai sweet soy sauce (kecap-style)",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "10 oz bottle (~$4.50)",
    "shelfLifeDays": 730,
    "tags": [
      "sweet",
      "umami",
      "vegan"
    ]
  },
  {
    "id": "golden-mountain-sauce",
    "name": "Thai seasoning sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "20 oz bottle (~$4)",
    "shelfLifeDays": 730,
    "tags": [
      "umami",
      "vegan"
    ]
  },
  {
    "id": "rendang-paste",
    "name": "Rendang curry paste",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "6.7 oz jar (~$5)",
    "shelfLifeDays": 540,
    "tags": [
      "spicy",
      "umami"
    ]
  },
  {
    "id": "galangal-paste",
    "name": "Galangal paste",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "7 oz jar (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "makrut-lime-leaves",
    "name": "Makrut lime leaves",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "leaf",
    "commonPackageSize": "0.2 oz pack / ~20 leaves (~$2.50)",
    "shelfLifeDays": 365,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "tamarind-concentrate",
    "name": "Tamarind concentrate",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "14 oz jar (~$5)",
    "shelfLifeDays": 730,
    "tags": [
      "acidic",
      "vegan"
    ]
  },
  {
    "id": "belacan",
    "name": "Belacan (shrimp paste, dried)",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "7 oz block (~$5)",
    "shelfLifeDays": 730,
    "tags": [
      "umami"
    ]
  },
  {
    "id": "sazon-seasoning",
    "name": "Sazón seasoning",
    "category": "spice",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (~$2.50)",
    "shelfLifeDays": 730,
    "tags": [
      "aromatic"
    ]
  },
  {
    "id": "recaito",
    "name": "Recaito (green sofrito)",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "12 oz jar (~$3.50)",
    "shelfLifeDays": 180,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "achiote-paste",
    "name": "Achiote paste",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "3.5 oz block (~$3)",
    "shelfLifeDays": 540,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "annatto",
    "name": "Annatto (achiote) seeds",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "2.5 oz bag (~$3)",
    "shelfLifeDays": 730,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "epazote",
    "name": "Epazote (dried)",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz pack (~$2.50)",
    "shelfLifeDays": 730,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "green-seasoning",
    "name": "Caribbean green seasoning",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "10 oz bottle (~$4.50)",
    "shelfLifeDays": 180,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "ginger-scallion-sauce",
    "name": "Ginger scallion sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar (~$7)",
    "shelfLifeDays": 90,
    "tags": [
      "aromatic",
      "vegan"
    ]
  },
  {
    "id": "thai-fish-sauce",
    "name": "Thai fish sauce (premium)",
    "category": "condiment",
    "estimatedUnitCost": 0.09,
    "unit": "tsp",
    "commonPackageSize": "24 oz bottle (~$8)",
    "shelfLifeDays": 1095,
    "tags": [
      "umami"
    ]
  },
  {
    "id": "mole-paste",
    "name": "Mole paste (concentrate)",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "8.25 oz jar (~$5)",
    "shelfLifeDays": 365,
    "tags": [
      "umami"
    ]
  },
  {
    "id": "adobo-paste",
    "name": "Adobo paste (Mexican)",
    "category": "condiment",
    "estimatedUnitCost": 0.28,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "spicy",
      "umami",
      "vegan"
    ]
  },
  {
    "id": "banana-leaves",
    "name": "Banana leaves (frozen)",
    "category": "frozen",
    "estimatedUnitCost": 0.25,
    "unit": "oz",
    "commonPackageSize": "1 lb pack (~$4)",
    "shelfLifeDays": 180,
    "tags": [
      "vegan"
    ]
  },
  {
    "id": "fine-sea-salt",
    "name": "Fine Sea Salt",
    "category": "spice",
    "estimatedUnitCost": 0.01,
    "unit": "tsp",
    "commonPackageSize": "26 oz (~$3.00)",
    "shelfLifeDays": 3650,
    "tags": [
      "salt",
      "baking",
      "essential"
    ]
  },
  {
    "id": "table-salt",
    "name": "Table Salt",
    "category": "spice",
    "estimatedUnitCost": 0,
    "unit": "tsp",
    "commonPackageSize": "26 oz iodized (~$1.50)",
    "shelfLifeDays": 3650,
    "tags": [
      "salt",
      "iodized",
      "essential"
    ]
  },
  {
    "id": "pink-himalayan-salt",
    "name": "Pink Himalayan Salt",
    "category": "spice",
    "estimatedUnitCost": 0.02,
    "unit": "tsp",
    "commonPackageSize": "5 lb (~$11.00)",
    "shelfLifeDays": 3650,
    "tags": [
      "salt",
      "finishing"
    ]
  },
  {
    "id": "smoked-salt",
    "name": "Smoked Salt",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "4 oz (~$7.00)",
    "shelfLifeDays": 3650,
    "tags": [
      "salt",
      "smoked",
      "finishing"
    ]
  },
  {
    "id": "pink-peppercorns",
    "name": "Pink Peppercorns",
    "category": "spice",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz (~$8.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "pepper",
      "whole",
      "finishing"
    ]
  },
  {
    "id": "green-peppercorns",
    "name": "Green Peppercorns",
    "category": "spice",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "2 oz dried (~$7.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "pepper",
      "whole"
    ]
  },
  {
    "id": "rainbow-peppercorns",
    "name": "Rainbow Peppercorns",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz blend (~$6.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "pepper",
      "whole",
      "blend"
    ]
  },
  {
    "id": "dried-basil",
    "name": "Dried Basil",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "0.62 oz (~$3.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "herb",
      "dried",
      "italian"
    ]
  },
  {
    "id": "dried-cilantro",
    "name": "Dried Cilantro",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "0.4 oz (~$3.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "herb",
      "dried"
    ]
  },
  {
    "id": "dried-mint",
    "name": "Dried Mint",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz (~$4.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "herb",
      "dried"
    ]
  },
  {
    "id": "dried-chives",
    "name": "Dried Chives",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "0.16 oz freeze-dried (~$4.00)",
    "shelfLifeDays": 730,
    "tags": [
      "herb",
      "dried"
    ]
  },
  {
    "id": "dried-savory",
    "name": "Dried Savory",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "0.6 oz (~$5.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "herb",
      "dried"
    ]
  },
  {
    "id": "culinary-lavender",
    "name": "Culinary Lavender",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "1 oz dried buds (~$8.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "herb",
      "dried",
      "floral",
      "baking"
    ]
  },
  {
    "id": "ground-cardamom",
    "name": "Ground Cardamom",
    "category": "spice",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "1.6 oz (~$9.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "ground",
      "baking",
      "indian"
    ]
  },
  {
    "id": "ground-mace",
    "name": "Ground Mace",
    "category": "spice",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "1.4 oz (~$8.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "ground",
      "warm"
    ]
  },
  {
    "id": "asafoetida",
    "name": "Asafoetida",
    "category": "spice",
    "estimatedUnitCost": 0.08,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz hing (~$6.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "ground",
      "indian",
      "aromatic"
    ]
  },
  {
    "id": "ajwain",
    "name": "Ajwain Seeds",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz carom (~$4.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "seed",
      "indian",
      "whole"
    ]
  },
  {
    "id": "nigella-seeds",
    "name": "Nigella Seeds",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "3 oz black cumin (~$5.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "seed",
      "whole",
      "finishing"
    ]
  },
  {
    "id": "ground-fennel",
    "name": "Ground Fennel",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz (~$4.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "ground"
    ]
  },
  {
    "id": "anise-seed",
    "name": "Anise Seed",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz whole (~$5.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "seed",
      "whole",
      "baking"
    ]
  },
  {
    "id": "aleppo-pepper",
    "name": "Aleppo Pepper",
    "category": "spice",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "2 oz flakes (~$7.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "chili",
      "flakes",
      "mild"
    ]
  },
  {
    "id": "guajillo-chili-powder",
    "name": "Guajillo Chili Powder",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "2.5 oz (~$5.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "chili",
      "ground",
      "mexican"
    ]
  },
  {
    "id": "chile-de-arbol",
    "name": "Chile de Arbol",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "2 oz dried (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "chili",
      "dried",
      "hot",
      "mexican"
    ]
  },
  {
    "id": "cinnamon-sticks",
    "name": "Cinnamon Sticks",
    "category": "spice",
    "estimatedUnitCost": 0.25,
    "unit": "piece",
    "commonPackageSize": "8 sticks (~$4.50)",
    "shelfLifeDays": 1825,
    "tags": [
      "whole",
      "baking",
      "mulling"
    ]
  },
  {
    "id": "whole-nutmeg",
    "name": "Whole Nutmeg",
    "category": "spice",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "6 whole (~$8.00)",
    "shelfLifeDays": 1825,
    "tags": [
      "whole",
      "baking"
    ]
  },
  {
    "id": "whole-allspice",
    "name": "Whole Allspice Berries",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "2 oz (~$5.00)",
    "shelfLifeDays": 1460,
    "tags": [
      "whole",
      "mulling",
      "jerk"
    ]
  },
  {
    "id": "fajita-seasoning",
    "name": "Fajita Seasoning",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "1 oz packet (~$1.20)",
    "shelfLifeDays": 730,
    "tags": [
      "blend",
      "mexican",
      "tex-mex"
    ]
  },
  {
    "id": "baharat",
    "name": "Baharat",
    "category": "spice",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "2 oz (~$6.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "middle-eastern"
    ]
  },
  {
    "id": "pumpkin-pie-spice",
    "name": "Pumpkin Pie Spice",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz (~$4.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "baking",
      "fall"
    ]
  },
  {
    "id": "apple-pie-spice",
    "name": "Apple Pie Spice",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz (~$4.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "baking",
      "fall"
    ]
  },
  {
    "id": "montreal-steak-seasoning",
    "name": "Montreal Steak Seasoning",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "3.4 oz (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "grilling",
      "steak"
    ]
  },
  {
    "id": "greek-seasoning",
    "name": "Greek Seasoning",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "2 oz (~$5.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "mediterranean"
    ]
  },
  {
    "id": "chaat-masala",
    "name": "Chaat Masala",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "indian",
      "tangy"
    ]
  },
  {
    "id": "tandoori-masala",
    "name": "Tandoori Masala",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (~$5.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "indian"
    ]
  },
  {
    "id": "shawarma-seasoning",
    "name": "Shawarma Seasoning",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "2 oz (~$5.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "middle-eastern"
    ]
  },
  {
    "id": "blackening-seasoning",
    "name": "Blackening Seasoning",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "3 oz (~$5.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "cajun",
      "grilling"
    ]
  },
  {
    "id": "bbq-rub",
    "name": "BBQ Dry Rub",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "tsp",
    "commonPackageSize": "5 oz (~$6.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "grilling",
      "bbq"
    ]
  },
  {
    "id": "pickling-spice",
    "name": "Pickling Spice",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz (~$4.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "whole",
      "preserving"
    ]
  },
  {
    "id": "mulling-spices",
    "name": "Mulling Spices",
    "category": "spice",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "2 oz (~$6.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "whole",
      "beverage"
    ]
  },
  {
    "id": "gomasio",
    "name": "Gomasio",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz sesame salt (~$5.50)",
    "shelfLifeDays": 730,
    "tags": [
      "blend",
      "japanese",
      "finishing"
    ]
  },
  {
    "id": "vadouvan-curry",
    "name": "Vadouvan Curry Blend",
    "category": "spice",
    "estimatedUnitCost": 0.09,
    "unit": "tsp",
    "commonPackageSize": "2 oz french curry (~$8.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "curry",
      "french-indian"
    ]
  },
  {
    "id": "hot-paprika",
    "name": "Hot Paprika",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "2 oz (~$5.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "ground",
      "chili",
      "hot"
    ]
  },
  {
    "id": "ground-anise",
    "name": "Ground Anise",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "1.5 oz (~$5.00)",
    "shelfLifeDays": 1095,
    "tags": [
      "ground",
      "baking",
      "licorice"
    ]
  },
  {
    "id": "adobo-con-pimienta",
    "name": "Adobo With Pepper",
    "category": "spice",
    "estimatedUnitCost": 0.03,
    "unit": "tsp",
    "commonPackageSize": "16.5 oz (~$3.50)",
    "shelfLifeDays": 1095,
    "tags": [
      "blend",
      "latin",
      "all-purpose"
    ]
  },
  {
    "id": "lima-beans",
    "name": "Lima beans (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.25,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.25)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "high-protein",
      "cheap"
    ]
  },
  {
    "id": "butter-beans",
    "name": "Butter beans (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.35,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.35)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "high-protein",
      "cheap"
    ]
  },
  {
    "id": "great-northern-beans",
    "name": "Great northern beans (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.3,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.30)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "high-protein",
      "cheap"
    ]
  },
  {
    "id": "whole-peeled-tomatoes",
    "name": "Whole peeled tomatoes (canned)",
    "category": "canned",
    "estimatedUnitCost": 2,
    "unit": "can",
    "commonPackageSize": "28 oz can (~$2)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "staple",
      "cheap"
    ]
  },
  {
    "id": "fire-roasted-tomatoes",
    "name": "Fire-roasted diced tomatoes (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.7,
    "unit": "can",
    "commonPackageSize": "14.5 oz can (~$1.70)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "umami"
    ]
  },
  {
    "id": "tomato-passata",
    "name": "Tomato passata (strained tomatoes)",
    "category": "canned",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "24 oz jar (~$2.85)",
    "shelfLifeDays": 540,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "staple"
    ]
  },
  {
    "id": "tomato-puree",
    "name": "Tomato puree (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.4,
    "unit": "can",
    "commonPackageSize": "28 oz can (~$1.40)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "staple"
    ]
  },
  {
    "id": "stewed-tomatoes",
    "name": "Stewed tomatoes (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.55,
    "unit": "can",
    "commonPackageSize": "14.5 oz can (~$1.55)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ]
  },
  {
    "id": "rotel",
    "name": "Diced tomatoes with green chiles (Rotel)",
    "category": "canned",
    "estimatedUnitCost": 1.6,
    "unit": "can",
    "commonPackageSize": "10 oz can (~$1.60)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "spicy"
    ]
  },
  {
    "id": "canned-corn",
    "name": "Sweet corn (canned)",
    "category": "canned",
    "estimatedUnitCost": 1,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap",
      "staple"
    ]
  },
  {
    "id": "canned-peas",
    "name": "Sweet peas (canned)",
    "category": "canned",
    "estimatedUnitCost": 1,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "canned-green-beans",
    "name": "Green beans (canned)",
    "category": "canned",
    "estimatedUnitCost": 1,
    "unit": "can",
    "commonPackageSize": "14.5 oz can (~$1)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "canned-carrots",
    "name": "Carrots (canned, sliced)",
    "category": "canned",
    "estimatedUnitCost": 1.1,
    "unit": "can",
    "commonPackageSize": "14.5 oz can (~$1.10)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "canned-mushrooms",
    "name": "Mushrooms (canned, sliced)",
    "category": "canned",
    "estimatedUnitCost": 1.4,
    "unit": "can",
    "commonPackageSize": "8 oz can (~$1.40)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "umami"
    ]
  },
  {
    "id": "canned-beets",
    "name": "Beets (canned, sliced)",
    "category": "canned",
    "estimatedUnitCost": 1.5,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.50)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ]
  },
  {
    "id": "canned-peaches",
    "name": "Peach slices (canned in juice)",
    "category": "canned",
    "estimatedUnitCost": 2.2,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$2.20)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "canned-pineapple",
    "name": "Pineapple chunks (canned in juice)",
    "category": "canned",
    "estimatedUnitCost": 1.65,
    "unit": "can",
    "commonPackageSize": "20 oz can (~$1.65)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "mandarin-oranges",
    "name": "Mandarin oranges (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.55,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.55)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "canned-pears",
    "name": "Pear halves (canned in juice)",
    "category": "canned",
    "estimatedUnitCost": 2.1,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$2.10)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ]
  },
  {
    "id": "tart-cherries",
    "name": "Tart cherries (canned in water)",
    "category": "canned",
    "estimatedUnitCost": 3.5,
    "unit": "can",
    "commonPackageSize": "14.5 oz can (~$3.50)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "baking"
    ]
  },
  {
    "id": "fruit-cocktail",
    "name": "Fruit cocktail (canned in juice)",
    "category": "canned",
    "estimatedUnitCost": 1.8,
    "unit": "can",
    "commonPackageSize": "15 oz can (~$1.80)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "cheap"
    ]
  },
  {
    "id": "canned-oysters",
    "name": "Smoked oysters (canned)",
    "category": "canned",
    "estimatedUnitCost": 2.75,
    "unit": "can",
    "commonPackageSize": "3 oz tin (~$2.75)",
    "shelfLifeDays": 1095,
    "tags": [
      "high-protein",
      "gluten-free",
      "dairy-free",
      "umami"
    ]
  },
  {
    "id": "tuna-in-oil",
    "name": "Tuna in olive oil (canned)",
    "category": "canned",
    "estimatedUnitCost": 2.5,
    "unit": "can",
    "commonPackageSize": "5 oz can (~$2.50)",
    "shelfLifeDays": 730,
    "tags": [
      "high-protein",
      "gluten-free",
      "dairy-free",
      "umami"
    ]
  },
  {
    "id": "bone-broth",
    "name": "Bone broth",
    "category": "canned",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "32 oz carton (~$6)",
    "shelfLifeDays": 365,
    "tags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "mushroom-broth",
    "name": "Mushroom broth",
    "category": "canned",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "32 oz carton (~$3.40)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "umami"
    ]
  },
  {
    "id": "cream-of-mushroom",
    "name": "Cream of mushroom soup (condensed)",
    "category": "canned",
    "estimatedUnitCost": 1.6,
    "unit": "can",
    "commonPackageSize": "10.5 oz can (~$1.60)",
    "shelfLifeDays": 730,
    "tags": [
      "vegetarian",
      "umami"
    ]
  },
  {
    "id": "chicken-noodle-soup",
    "name": "Chicken noodle soup (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.5,
    "unit": "can",
    "commonPackageSize": "10.5 oz can (~$1.50)",
    "shelfLifeDays": 730
  },
  {
    "id": "minestrone-soup",
    "name": "Minestrone soup (canned)",
    "category": "canned",
    "estimatedUnitCost": 2.2,
    "unit": "can",
    "commonPackageSize": "19 oz can (~$2.20)",
    "shelfLifeDays": 730,
    "tags": [
      "vegetarian"
    ]
  },
  {
    "id": "clam-chowder",
    "name": "Clam chowder (canned)",
    "category": "canned",
    "estimatedUnitCost": 2.4,
    "unit": "can",
    "commonPackageSize": "18.8 oz can (~$2.40)",
    "shelfLifeDays": 730,
    "tags": [
      "high-protein"
    ]
  },
  {
    "id": "black-olives",
    "name": "Black olives (canned, sliced)",
    "category": "canned",
    "estimatedUnitCost": 1.65,
    "unit": "can",
    "commonPackageSize": "6 oz can (~$1.65)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "umami"
    ]
  },
  {
    "id": "bread-and-butter-pickles",
    "name": "Bread and butter pickles (jarred)",
    "category": "canned",
    "estimatedUnitCost": 3.75,
    "unit": "jar",
    "commonPackageSize": "24 oz jar (~$3.75)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "acidic"
    ]
  },
  {
    "id": "banana-peppers",
    "name": "Banana peppers (jarred, sliced)",
    "category": "canned",
    "estimatedUnitCost": 2.95,
    "unit": "jar",
    "commonPackageSize": "16 oz jar (~$2.95)",
    "shelfLifeDays": 540,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "acidic",
      "cheap"
    ]
  },
  {
    "id": "green-chiles",
    "name": "Diced green chiles (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.1,
    "unit": "can",
    "commonPackageSize": "4 oz can (~$1.10)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "spicy",
      "cheap"
    ]
  },
  {
    "id": "enchilada-sauce",
    "name": "Red enchilada sauce (canned)",
    "category": "canned",
    "estimatedUnitCost": 1.55,
    "unit": "can",
    "commonPackageSize": "10 oz can (~$1.55)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "spicy"
    ]
  },
  {
    "id": "cherry-pie-filling",
    "name": "Cherry pie filling (canned)",
    "category": "canned",
    "estimatedUnitCost": 3.25,
    "unit": "can",
    "commonPackageSize": "21 oz can (~$3.25)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "apple-pie-filling",
    "name": "Apple pie filling (canned)",
    "category": "canned",
    "estimatedUnitCost": 3.25,
    "unit": "can",
    "commonPackageSize": "21 oz can (~$3.25)",
    "shelfLifeDays": 730,
    "tags": [
      "vegan",
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "pumpkin-pie-filling",
    "name": "Pumpkin pie filling (canned, sweetened)",
    "category": "canned",
    "estimatedUnitCost": 2.95,
    "unit": "can",
    "commonPackageSize": "30 oz can (~$2.95)",
    "shelfLifeDays": 730,
    "tags": [
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "frozen-edamame",
    "name": "Frozen Edamame (In Pods)",
    "category": "frozen",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "12 oz bag (~$3.00)",
    "shelfLifeDays": 365,
    "tags": [
      "protein",
      "soy",
      "snack"
    ]
  },
  {
    "id": "frozen-onion-rings",
    "name": "Frozen Onion Rings",
    "category": "frozen",
    "estimatedUnitCost": 0.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$3.50)",
    "shelfLifeDays": 300,
    "tags": [
      "side",
      "fried",
      "convenience"
    ]
  },
  {
    "id": "frozen-hash-brown-patties",
    "name": "Frozen Hash Brown Patties",
    "category": "frozen",
    "estimatedUnitCost": 0.4,
    "unit": "piece",
    "commonPackageSize": "8-patty box (~$3.50)",
    "shelfLifeDays": 300,
    "tags": [
      "breakfast",
      "potato"
    ]
  },
  {
    "id": "frozen-potstickers",
    "name": "Frozen Potstickers",
    "category": "frozen",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "24 oz bag (~$8.00)",
    "shelfLifeDays": 365,
    "tags": [
      "asian",
      "dumpling",
      "convenience"
    ]
  },
  {
    "id": "frozen-egg-rolls",
    "name": "Frozen Egg Rolls",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "piece",
    "commonPackageSize": "6-count box (~$5.00)",
    "shelfLifeDays": 300,
    "tags": [
      "asian",
      "appetizer",
      "fried"
    ]
  },
  {
    "id": "frozen-fish-fillets",
    "name": "Frozen Breaded Fish Fillets",
    "category": "frozen",
    "estimatedUnitCost": 0.95,
    "unit": "piece",
    "commonPackageSize": "10-count box (~$9.50)",
    "shelfLifeDays": 300,
    "tags": [
      "seafood",
      "breaded",
      "convenience"
    ]
  },
  {
    "id": "frozen-cod-fillets",
    "name": "Frozen Cod Fillets",
    "category": "frozen",
    "estimatedUnitCost": 2.5,
    "unit": "serving",
    "commonPackageSize": "1 lb bag, ~4 fillets (~$10.00)",
    "shelfLifeDays": 300,
    "tags": [
      "seafood",
      "lean-protein"
    ]
  },
  {
    "id": "frozen-salmon-fillets",
    "name": "Frozen Salmon Fillets",
    "category": "frozen",
    "estimatedUnitCost": 3.75,
    "unit": "serving",
    "commonPackageSize": "1 lb bag, ~4 fillets (~$15.00)",
    "shelfLifeDays": 300,
    "tags": [
      "seafood",
      "omega-3",
      "protein"
    ]
  },
  {
    "id": "frozen-tilapia",
    "name": "Frozen Tilapia Fillets",
    "category": "frozen",
    "estimatedUnitCost": 1.9,
    "unit": "serving",
    "commonPackageSize": "2 lb bag, ~8 fillets (~$15.00)",
    "shelfLifeDays": 300,
    "tags": [
      "seafood",
      "lean-protein",
      "budget"
    ]
  },
  {
    "id": "frozen-blueberries",
    "name": "Frozen Blueberries",
    "category": "frozen",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "12 oz bag (~$4.00)",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "smoothie",
      "antioxidant"
    ]
  },
  {
    "id": "frozen-strawberries",
    "name": "Frozen Strawberries",
    "category": "frozen",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$3.50)",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "smoothie",
      "dessert"
    ]
  },
  {
    "id": "frozen-raspberries",
    "name": "Frozen Raspberries",
    "category": "frozen",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "12 oz bag (~$5.00)",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "smoothie",
      "antioxidant"
    ]
  },
  {
    "id": "frozen-okra",
    "name": "Frozen Cut Okra",
    "category": "frozen",
    "estimatedUnitCost": 0.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$2.80)",
    "shelfLifeDays": 300,
    "tags": [
      "vegetable",
      "southern",
      "gumbo"
    ]
  },
  {
    "id": "frozen-brussels-sprouts",
    "name": "Frozen Brussels Sprouts",
    "category": "frozen",
    "estimatedUnitCost": 0.75,
    "unit": "cup",
    "commonPackageSize": "12 oz bag (~$3.00)",
    "shelfLifeDays": 300,
    "tags": [
      "vegetable",
      "roast"
    ]
  },
  {
    "id": "frozen-pearl-onions",
    "name": "Frozen Pearl Onions",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "14.4 oz bag (~$3.20)",
    "shelfLifeDays": 300,
    "tags": [
      "vegetable",
      "stew",
      "braise"
    ]
  },
  {
    "id": "vanilla-ice-cream",
    "name": "Vanilla Ice Cream",
    "category": "frozen",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "1.5 qt tub (~$5.50)",
    "shelfLifeDays": 180,
    "tags": [
      "dessert",
      "dairy"
    ]
  },
  {
    "id": "whipped-topping",
    "name": "Frozen Whipped Topping",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "8 oz tub (~$2.80)",
    "shelfLifeDays": 270,
    "tags": [
      "dessert",
      "topping"
    ]
  },
  {
    "id": "frozen-pie-crust",
    "name": "Frozen Pie Crust",
    "category": "frozen",
    "estimatedUnitCost": 1.75,
    "unit": "piece",
    "commonPackageSize": "2-crust pack, 9 in (~$3.50)",
    "shelfLifeDays": 270,
    "tags": [
      "baking",
      "dessert",
      "convenience"
    ]
  },
  {
    "id": "frozen-garlic-bread",
    "name": "Frozen Garlic Bread",
    "category": "frozen",
    "estimatedUnitCost": 0.55,
    "unit": "piece",
    "commonPackageSize": "2-loaf box, ~10 slices (~$4.00)",
    "shelfLifeDays": 270,
    "tags": [
      "side",
      "bread",
      "convenience"
    ]
  },
  {
    "id": "frozen-pancakes",
    "name": "Frozen Pancakes",
    "category": "frozen",
    "estimatedUnitCost": 0.3,
    "unit": "piece",
    "commonPackageSize": "12-count box (~$3.50)",
    "shelfLifeDays": 270,
    "tags": [
      "breakfast",
      "convenience"
    ]
  },
  {
    "id": "roasted-almonds",
    "name": "Roasted Almonds",
    "category": "protein",
    "estimatedUnitCost": 0.6,
    "unit": "oz",
    "commonPackageSize": "16 oz bag (~$9.50)",
    "shelfLifeDays": 365,
    "tags": [
      "nut",
      "snack",
      "protein"
    ]
  },
  {
    "id": "pecan-halves",
    "name": "Pecan Halves",
    "category": "protein",
    "estimatedUnitCost": 0.95,
    "unit": "oz",
    "commonPackageSize": "16 oz bag (~$13.00)",
    "shelfLifeDays": 300,
    "tags": [
      "nut",
      "baking",
      "snack"
    ]
  },
  {
    "id": "macadamia-nuts",
    "name": "Macadamia Nuts",
    "category": "protein",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$12.00)",
    "shelfLifeDays": 300,
    "tags": [
      "nut",
      "snack",
      "premium"
    ]
  },
  {
    "id": "brazil-nuts",
    "name": "Brazil Nuts",
    "category": "protein",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "16 oz bag (~$13.50)",
    "shelfLifeDays": 270,
    "tags": [
      "nut",
      "snack",
      "selenium"
    ]
  },
  {
    "id": "ground-flaxseed",
    "name": "Ground Flaxseed",
    "category": "protein",
    "estimatedUnitCost": 0.12,
    "unit": "tbsp",
    "commonPackageSize": "16 oz bag (~$4.50)",
    "shelfLifeDays": 180,
    "tags": [
      "seed",
      "omega-3",
      "baking",
      "vegan-egg"
    ]
  },
  {
    "id": "hemp-hearts",
    "name": "Hemp Hearts",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "12 oz bag (~$10.00)",
    "shelfLifeDays": 365,
    "tags": [
      "seed",
      "protein",
      "omega-3"
    ]
  },
  {
    "id": "shelled-pumpkin-seeds",
    "name": "Shelled Pumpkin Seeds (Pepitas)",
    "category": "protein",
    "estimatedUnitCost": 0.65,
    "unit": "oz",
    "commonPackageSize": "12 oz bag (~$8.00)",
    "shelfLifeDays": 270,
    "tags": [
      "seed",
      "snack",
      "salad-topping"
    ]
  },
  {
    "id": "roasted-peanuts",
    "name": "Roasted Peanuts",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "16 oz jar (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "nut",
      "snack",
      "budget"
    ]
  },
  {
    "id": "water-crackers",
    "name": "Water Crackers",
    "category": "snack",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "4.4 oz box (~$2.20)",
    "shelfLifeDays": 270,
    "tags": [
      "cracker",
      "cheese-board"
    ]
  },
  {
    "id": "pretzel-sticks",
    "name": "Pretzel Sticks",
    "category": "snack",
    "estimatedUnitCost": 0.22,
    "unit": "oz",
    "commonPackageSize": "16 oz bag (~$3.50)",
    "shelfLifeDays": 270,
    "tags": [
      "pretzel",
      "snack"
    ]
  },
  {
    "id": "popcorn-popped",
    "name": "Popped Popcorn",
    "category": "snack",
    "estimatedUnitCost": 0.2,
    "unit": "cup",
    "commonPackageSize": "7 oz bag (~$3.00)",
    "shelfLifeDays": 120,
    "tags": [
      "popcorn",
      "snack",
      "whole-grain"
    ]
  },
  {
    "id": "muesli",
    "name": "Muesli",
    "category": "snack",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$7.00)",
    "shelfLifeDays": 270,
    "tags": [
      "breakfast",
      "cereal",
      "whole-grain"
    ]
  },
  {
    "id": "herbal-tea",
    "name": "Herbal Tea Bags",
    "category": "condiment",
    "estimatedUnitCost": 0.15,
    "unit": "tea bag",
    "commonPackageSize": "20-count box (~$3.00)",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "caffeine-free",
      "beverage"
    ]
  },
  {
    "id": "oolong-tea",
    "name": "Oolong Tea Bags",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tea bag",
    "commonPackageSize": "20-count box (~$4.00)",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "beverage"
    ]
  },
  {
    "id": "chamomile-tea",
    "name": "Chamomile Tea Bags",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tea bag",
    "commonPackageSize": "20-count box (~$3.60)",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "caffeine-free",
      "beverage"
    ]
  },
  {
    "id": "grape-juice",
    "name": "Grape Juice",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "cup",
    "commonPackageSize": "64 fl oz bottle (~$4.00)",
    "shelfLifeDays": 270,
    "tags": [
      "juice",
      "beverage"
    ]
  },
  {
    "id": "pomegranate-juice",
    "name": "Pomegranate Juice",
    "category": "condiment",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "32 fl oz bottle (~$6.00)",
    "shelfLifeDays": 180,
    "tags": [
      "juice",
      "beverage",
      "antioxidant"
    ]
  },
  {
    "id": "lemonade",
    "name": "Lemonade",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "cup",
    "commonPackageSize": "64 fl oz bottle (~$2.80)",
    "shelfLifeDays": 120,
    "tags": [
      "beverage",
      "drink"
    ]
  },
  {
    "id": "root-beer",
    "name": "Root Beer",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "cup",
    "commonPackageSize": "12-pack 12 oz cans (~$6.50)",
    "shelfLifeDays": 270,
    "tags": [
      "soda",
      "beverage",
      "float"
    ]
  },
  {
    "id": "lemon-lime-soda",
    "name": "Lemon-Lime Soda",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "cup",
    "commonPackageSize": "2 L bottle (~$2.50)",
    "shelfLifeDays": 270,
    "tags": [
      "soda",
      "beverage",
      "mixer"
    ]
  },
  {
    "id": "dry-sherry",
    "name": "Dry Sherry",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "tbsp",
    "commonPackageSize": "750 mL bottle (~$12.00)",
    "shelfLifeDays": 365,
    "tags": [
      "cooking-wine",
      "deglaze",
      "sauce"
    ]
  },
  {
    "id": "port-wine",
    "name": "Port Wine",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "750 mL bottle (~$18.00)",
    "shelfLifeDays": 365,
    "tags": [
      "cooking-wine",
      "sauce",
      "reduction"
    ]
  },
  {
    "id": "dark-rum",
    "name": "Dark Rum",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "750 mL bottle (~$20.00)",
    "shelfLifeDays": 3650,
    "tags": [
      "spirit",
      "cooking",
      "baking",
      "flambe"
    ]
  },
  {
    "id": "cognac",
    "name": "Cognac",
    "category": "condiment",
    "estimatedUnitCost": 0.75,
    "unit": "tbsp",
    "commonPackageSize": "750 mL bottle (~$35.00)",
    "shelfLifeDays": 3650,
    "tags": [
      "spirit",
      "cooking",
      "sauce",
      "flambe"
    ]
  },
  {
    "id": "dry-vermouth",
    "name": "Dry Vermouth",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "750 mL bottle (~$9.00)",
    "shelfLifeDays": 180,
    "tags": [
      "cooking-wine",
      "deglaze",
      "sauce"
    ]
  },
  {
    "id": "hard-cider",
    "name": "Hard Cider",
    "category": "condiment",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "6-pack 12 oz (~$10.00)",
    "shelfLifeDays": 365,
    "tags": [
      "alcohol",
      "braise",
      "cooking"
    ]
  },
  {
    "id": "espresso-powder",
    "name": "Espresso Powder",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar (~$8.00)",
    "shelfLifeDays": 730,
    "tags": [
      "coffee",
      "baking",
      "flavor-enhancer"
    ]
  },
  {
    "id": "sliced-almonds",
    "name": "Sliced Almonds",
    "category": "protein",
    "estimatedUnitCost": 0.7,
    "unit": "oz",
    "commonPackageSize": "8 oz bag (~$5.50)",
    "shelfLifeDays": 270,
    "tags": [
      "nut",
      "baking",
      "garnish"
    ]
  },
  {
    "id": "dry-roasted-peanuts",
    "name": "Dry Roasted Peanuts",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "16 oz jar (~$4.80)",
    "shelfLifeDays": 365,
    "tags": [
      "nut",
      "snack",
      "topping"
    ]
  },
  {
    "id": "chicken-stock",
    "name": "Chicken stock",
    "category": "canned",
    "estimatedUnitCost": 0.5,
    "unit": "cup",
    "commonPackageSize": "32 oz carton (~$2)",
    "shelfLifeDays": 365,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "beef-stock",
    "name": "Beef stock",
    "category": "canned",
    "estimatedUnitCost": 0.52,
    "unit": "cup",
    "commonPackageSize": "32 oz carton (~$2.10)",
    "shelfLifeDays": 365,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "alfredo-sauce",
    "name": "Alfredo sauce (jarred)",
    "category": "condiment",
    "estimatedUnitCost": 1.05,
    "unit": "1/2 cup",
    "commonPackageSize": "15 oz jar (~$3.50)",
    "shelfLifeDays": 365,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "pizza-sauce",
    "name": "Pizza sauce (jarred)",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "1/4 cup",
    "commonPackageSize": "14 oz jar (~$2.25)",
    "shelfLifeDays": 365,
    "tags": [
      "staple",
      "vegan"
    ]
  },
  {
    "id": "green-peas",
    "name": "Green peas (fresh)",
    "category": "vegetable",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "1 lb in pod (~$2.50)",
    "shelfLifeDays": 5
  },
  {
    "id": "corn-on-the-cob",
    "name": "Corn on the cob",
    "category": "vegetable",
    "estimatedUnitCost": 0.6,
    "unit": "ear",
    "commonPackageSize": "4-pack (~$2.40)",
    "shelfLifeDays": 5,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "whole-chicken",
    "name": "Whole chicken",
    "category": "protein",
    "estimatedUnitCost": 1.3,
    "unit": "serving",
    "commonPackageSize": "5 lb bird (~$8.50, ~6 servings)",
    "shelfLifeDays": 3,
    "tags": [
      "high-protein"
    ]
  },
  {
    "id": "beef-short-ribs",
    "name": "Beef short ribs",
    "category": "protein",
    "estimatedUnitCost": 3.75,
    "unit": "serving",
    "commonPackageSize": "2 lb (~$15, ~4 servings)",
    "shelfLifeDays": 3,
    "tags": [
      "high-protein"
    ]
  },
  {
    "id": "margarine",
    "name": "Margarine",
    "category": "dairy",
    "estimatedUnitCost": 0.09,
    "unit": "tbsp",
    "commonPackageSize": "1 lb tub (~$2.80)",
    "shelfLifeDays": 120,
    "tags": [
      "staple",
      "vegan"
    ]
  },
  {
    "id": "whipped-cream",
    "name": "Whipped cream (aerosol)",
    "category": "dairy",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "6.5 oz can (~$3.50)",
    "shelfLifeDays": 60
  },
  {
    "id": "frozen-yogurt",
    "name": "Frozen yogurt",
    "category": "frozen",
    "estimatedUnitCost": 0.75,
    "unit": "1/2 cup",
    "commonPackageSize": "1.5 qt tub (~$4.50)",
    "shelfLifeDays": 365
  },
  {
    "id": "sorbet",
    "name": "Sorbet",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "1/2 cup",
    "commonPackageSize": "1 pint (~$4)",
    "shelfLifeDays": 365,
    "tags": [
      "vegan"
    ]
  },
  {
    "id": "popsicles",
    "name": "Popsicles",
    "category": "frozen",
    "estimatedUnitCost": 0.3,
    "unit": "pop",
    "commonPackageSize": "12-pack (~$3.60)",
    "shelfLifeDays": 365
  },
  {
    "id": "waffle-mix",
    "name": "Waffle mix",
    "category": "grain",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "28 oz box (~$3.50)",
    "shelfLifeDays": 365,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "baking-mix",
    "name": "All-purpose baking mix (Bisquick-style)",
    "category": "grain",
    "estimatedUnitCost": 0.5,
    "unit": "cup",
    "commonPackageSize": "40 oz box (~$4.50)",
    "shelfLifeDays": 365,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "brown-gravy",
    "name": "Brown gravy (jarred)",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "1/4 cup",
    "commonPackageSize": "12 oz jar (~$1.80)",
    "shelfLifeDays": 540
  },
  {
    "id": "beef-bouillon",
    "name": "Beef bouillon cubes",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "cube",
    "commonPackageSize": "25-cube box (~$2)",
    "shelfLifeDays": 730,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "bratwurst",
    "name": "Bratwurst",
    "category": "protein",
    "estimatedUnitCost": 1.3,
    "unit": "link",
    "commonPackageSize": "19 oz, 5-pack (~$6.50)",
    "shelfLifeDays": 7,
    "tags": [
      "high-protein"
    ]
  },
  {
    "id": "andouille-sausage",
    "name": "Andouille sausage",
    "category": "protein",
    "estimatedUnitCost": 1.5,
    "unit": "link",
    "commonPackageSize": "13 oz, 4-pack (~$6)",
    "shelfLifeDays": 14,
    "tags": [
      "high-protein"
    ]
  },
  {
    "id": "cream-of-celery",
    "name": "Cream of celery soup (condensed)",
    "category": "canned",
    "estimatedUnitCost": 1.3,
    "unit": "can",
    "commonPackageSize": "10.5 oz can (~$1.30)",
    "shelfLifeDays": 730,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "processed-cheese-loaf",
    "name": "Processed cheese loaf (Velveeta-style)",
    "category": "dairy",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "32 oz loaf (~$8)",
    "shelfLifeDays": 180,
    "tags": [
      "staple"
    ]
  },
  {
    "id": "sloppy-joe-sauce",
    "name": "Sloppy joe sauce (canned)",
    "category": "condiment",
    "estimatedUnitCost": 1.6,
    "unit": "can",
    "commonPackageSize": "15.5 oz can (~$1.60)",
    "shelfLifeDays": 730
  },
  {
    "id": "vodka-sauce",
    "name": "Vodka sauce (jarred)",
    "category": "condiment",
    "estimatedUnitCost": 1.1,
    "unit": "1/2 cup",
    "commonPackageSize": "24 oz jar (~$5.25)",
    "shelfLifeDays": 540
  },
  {
    "id": "chuck-roast",
    "name": "Beef Chuck Roast",
    "category": "protein",
    "estimatedUnitCost": 0.44,
    "unit": "oz",
    "commonPackageSize": "3 lb roast",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "braising",
      "pot-roast",
      "bone-in-option",
      "sunday-dinner"
    ]
  },
  {
    "id": "hanger-steak",
    "name": "Hanger Steak",
    "category": "protein",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "1 lb steak",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "steak",
      "grilling",
      "butcher-cut"
    ]
  },
  {
    "id": "flat-iron-steak",
    "name": "Flat Iron Steak",
    "category": "protein",
    "estimatedUnitCost": 0.81,
    "unit": "oz",
    "commonPackageSize": "1 lb steak",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "steak",
      "grilling",
      "tender"
    ]
  },
  {
    "id": "tri-tip",
    "name": "Tri-Tip Roast",
    "category": "protein",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "2 lb roast",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "roast",
      "grilling",
      "santa-maria",
      "lean"
    ]
  },
  {
    "id": "top-round",
    "name": "Top Round",
    "category": "protein",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "2 lb roast",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "lean",
      "roast",
      "london-broil",
      "budget"
    ]
  },
  {
    "id": "eye-of-round",
    "name": "Eye of Round Roast",
    "category": "protein",
    "estimatedUnitCost": 0.47,
    "unit": "oz",
    "commonPackageSize": "3 lb roast",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "lean",
      "roast",
      "budget",
      "roast-beef"
    ]
  },
  {
    "id": "corned-beef",
    "name": "Corned Beef Brisket",
    "category": "protein",
    "estimatedUnitCost": 0.56,
    "unit": "oz",
    "commonPackageSize": "3 lb point cut",
    "shelfLifeDays": 21,
    "tags": [
      "beef",
      "cured",
      "brisket",
      "st-patricks",
      "braising"
    ]
  },
  {
    "id": "beef-shank",
    "name": "Beef Shank",
    "category": "protein",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "1.5 lb cross-cut",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "bone-in",
      "braising",
      "osso-buco",
      "stock"
    ]
  },
  {
    "id": "ground-beef-80-20",
    "name": "Ground Beef (80/20)",
    "category": "protein",
    "estimatedUnitCost": 0.39,
    "unit": "oz",
    "commonPackageSize": "1 lb pack",
    "shelfLifeDays": 3,
    "tags": [
      "beef",
      "ground",
      "burgers",
      "fatty",
      "weeknight"
    ]
  },
  {
    "id": "pork-loin-roast",
    "name": "Pork Loin Roast",
    "category": "protein",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "3 lb roast",
    "shelfLifeDays": 4,
    "tags": [
      "pork",
      "roast",
      "lean",
      "sunday-dinner"
    ]
  },
  {
    "id": "baby-back-ribs",
    "name": "Baby Back Ribs",
    "category": "protein",
    "estimatedUnitCost": 0.56,
    "unit": "oz",
    "commonPackageSize": "2.5 lb rack",
    "shelfLifeDays": 4,
    "tags": [
      "pork",
      "ribs",
      "bbq",
      "grilling",
      "bone-in"
    ]
  },
  {
    "id": "spare-ribs",
    "name": "Pork Spare Ribs",
    "category": "protein",
    "estimatedUnitCost": 0.44,
    "unit": "oz",
    "commonPackageSize": "3 lb rack",
    "shelfLifeDays": 4,
    "tags": [
      "pork",
      "ribs",
      "bbq",
      "smoking",
      "bone-in"
    ]
  },
  {
    "id": "country-style-ribs",
    "name": "Country-Style Pork Ribs",
    "category": "protein",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "2 lb pack",
    "shelfLifeDays": 4,
    "tags": [
      "pork",
      "ribs",
      "braising",
      "bbq",
      "meaty"
    ]
  },
  {
    "id": "ham-steak",
    "name": "Ham Steak",
    "category": "protein",
    "estimatedUnitCost": 0.41,
    "unit": "oz",
    "commonPackageSize": "1 lb steak",
    "shelfLifeDays": 7,
    "tags": [
      "pork",
      "cured",
      "ham",
      "breakfast",
      "pan-fry"
    ]
  },
  {
    "id": "gammon",
    "name": "Gammon Joint",
    "category": "protein",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "2.5 lb joint",
    "shelfLifeDays": 7,
    "tags": [
      "pork",
      "cured",
      "ham",
      "british",
      "roast"
    ]
  },
  {
    "id": "pork-cutlet",
    "name": "Pork Cutlet",
    "category": "protein",
    "estimatedUnitCost": 0.36,
    "unit": "oz",
    "commonPackageSize": "1 lb pack",
    "shelfLifeDays": 4,
    "tags": [
      "pork",
      "cutlet",
      "schnitzel",
      "pan-fry",
      "thin"
    ]
  },
  {
    "id": "chicken-leg-quarters",
    "name": "Chicken Leg Quarters",
    "category": "protein",
    "estimatedUnitCost": 0.13,
    "unit": "oz",
    "commonPackageSize": "4 lb pack",
    "shelfLifeDays": 3,
    "tags": [
      "chicken",
      "poultry",
      "bone-in",
      "budget",
      "roasting"
    ]
  },
  {
    "id": "chicken-breast-tenders",
    "name": "Chicken Breast Tenders",
    "category": "protein",
    "estimatedUnitCost": 0.34,
    "unit": "oz",
    "commonPackageSize": "1.5 lb pack",
    "shelfLifeDays": 3,
    "tags": [
      "chicken",
      "poultry",
      "lean",
      "quick",
      "kid-friendly"
    ]
  },
  {
    "id": "chicken-livers",
    "name": "Chicken Livers",
    "category": "protein",
    "estimatedUnitCost": 0.22,
    "unit": "oz",
    "commonPackageSize": "1 lb tub",
    "shelfLifeDays": 2,
    "tags": [
      "chicken",
      "poultry",
      "offal",
      "pate",
      "iron-rich"
    ]
  },
  {
    "id": "turkey-breast-cutlet",
    "name": "Turkey Breast Cutlet",
    "category": "protein",
    "estimatedUnitCost": 0.41,
    "unit": "oz",
    "commonPackageSize": "1 lb pack",
    "shelfLifeDays": 3,
    "tags": [
      "turkey",
      "poultry",
      "lean",
      "cutlet",
      "quick"
    ]
  },
  {
    "id": "whole-turkey",
    "name": "Whole Turkey",
    "category": "protein",
    "estimatedUnitCost": 0.12,
    "unit": "oz",
    "commonPackageSize": "14 lb bird",
    "shelfLifeDays": 2,
    "tags": [
      "turkey",
      "poultry",
      "whole",
      "thanksgiving",
      "roasting"
    ]
  },
  {
    "id": "smoked-turkey-leg",
    "name": "Smoked Turkey Leg",
    "category": "protein",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "1.25 lb leg",
    "shelfLifeDays": 7,
    "tags": [
      "turkey",
      "poultry",
      "smoked",
      "precooked",
      "fair-food"
    ]
  },
  {
    "id": "leg-of-lamb",
    "name": "Leg of Lamb",
    "category": "protein",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "4 lb bone-in",
    "shelfLifeDays": 4,
    "tags": [
      "lamb",
      "roast",
      "bone-in",
      "easter",
      "sunday-dinner"
    ]
  },
  {
    "id": "lamb-shank",
    "name": "Lamb Shank",
    "category": "protein",
    "estimatedUnitCost": 0.69,
    "unit": "oz",
    "commonPackageSize": "1 lb shank",
    "shelfLifeDays": 4,
    "tags": [
      "lamb",
      "braising",
      "bone-in",
      "slow-cook",
      "hearty"
    ]
  },
  {
    "id": "rack-of-lamb",
    "name": "Rack of Lamb",
    "category": "protein",
    "estimatedUnitCost": 1.69,
    "unit": "oz",
    "commonPackageSize": "1.5 lb rack",
    "shelfLifeDays": 4,
    "tags": [
      "lamb",
      "roast",
      "premium",
      "frenched",
      "entertaining"
    ]
  },
  {
    "id": "veal-cutlet",
    "name": "Veal Cutlet",
    "category": "protein",
    "estimatedUnitCost": 1.13,
    "unit": "oz",
    "commonPackageSize": "1 lb pack",
    "shelfLifeDays": 3,
    "tags": [
      "veal",
      "cutlet",
      "schnitzel",
      "scaloppine",
      "pan-fry"
    ]
  },
  {
    "id": "duck-breast",
    "name": "Duck Breast",
    "category": "protein",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "12 oz pack",
    "shelfLifeDays": 4,
    "tags": [
      "duck",
      "poultry",
      "skin-on",
      "seared",
      "premium"
    ]
  },
  {
    "id": "cornish-hen",
    "name": "Cornish Game Hen",
    "category": "protein",
    "estimatedUnitCost": 0.31,
    "unit": "oz",
    "commonPackageSize": "1.5 lb bird",
    "shelfLifeDays": 3,
    "tags": [
      "poultry",
      "whole",
      "roasting",
      "individual",
      "entertaining"
    ]
  },
  {
    "id": "pastrami",
    "name": "Pastrami",
    "category": "protein",
    "estimatedUnitCost": 0.45,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 7,
    "tags": [
      "deli",
      "beef",
      "cured",
      "smoked",
      "sandwich"
    ]
  },
  {
    "id": "deli-corned-beef",
    "name": "Corned Beef (Deli)",
    "category": "protein",
    "estimatedUnitCost": 0.48,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 7,
    "tags": [
      "deli",
      "beef",
      "cured",
      "sandwich",
      "reuben"
    ]
  },
  {
    "id": "deli-roast-beef",
    "name": "Roast Beef (Deli)",
    "category": "protein",
    "estimatedUnitCost": 0.5,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 7,
    "tags": [
      "deli",
      "beef",
      "sandwich",
      "lean",
      "lunch"
    ]
  },
  {
    "id": "bologna",
    "name": "Bologna",
    "category": "protein",
    "estimatedUnitCost": 0.12,
    "unit": "slice",
    "commonPackageSize": "12 oz pack",
    "shelfLifeDays": 14,
    "tags": [
      "deli",
      "pork",
      "beef",
      "processed",
      "sandwich",
      "kid-friendly"
    ]
  },
  {
    "id": "salami",
    "name": "Salami",
    "category": "protein",
    "estimatedUnitCost": 0.22,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 21,
    "tags": [
      "deli",
      "pork",
      "cured",
      "charcuterie",
      "sandwich"
    ]
  },
  {
    "id": "capicola",
    "name": "Capicola",
    "category": "protein",
    "estimatedUnitCost": 0.4,
    "unit": "slice",
    "commonPackageSize": "6 oz pack",
    "shelfLifeDays": 21,
    "tags": [
      "deli",
      "pork",
      "cured",
      "charcuterie",
      "italian"
    ]
  },
  {
    "id": "mortadella",
    "name": "Mortadella",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 14,
    "tags": [
      "deli",
      "pork",
      "cured",
      "italian",
      "charcuterie"
    ]
  },
  {
    "id": "head-cheese",
    "name": "Head Cheese",
    "category": "protein",
    "estimatedUnitCost": 0.28,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 10,
    "tags": [
      "deli",
      "pork",
      "terrine",
      "offal",
      "traditional"
    ]
  },
  {
    "id": "liverwurst",
    "name": "Liverwurst",
    "category": "protein",
    "estimatedUnitCost": 0.2,
    "unit": "slice",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 10,
    "tags": [
      "deli",
      "pork",
      "liver",
      "spreadable",
      "iron-rich"
    ]
  },
  {
    "id": "beef-franks",
    "name": "Beef Franks",
    "category": "protein",
    "estimatedUnitCost": 0.5,
    "unit": "serving",
    "commonPackageSize": "8-count pack",
    "shelfLifeDays": 14,
    "tags": [
      "beef",
      "hot-dog",
      "frank",
      "grilling",
      "kid-friendly"
    ]
  },
  {
    "id": "turkey-franks",
    "name": "Turkey Franks",
    "category": "protein",
    "estimatedUnitCost": 0.28,
    "unit": "serving",
    "commonPackageSize": "8-count pack",
    "shelfLifeDays": 14,
    "tags": [
      "turkey",
      "hot-dog",
      "frank",
      "lean",
      "kid-friendly"
    ]
  },
  {
    "id": "breakfast-links",
    "name": "Breakfast Sausage Links",
    "category": "protein",
    "estimatedUnitCost": 0.33,
    "unit": "serving",
    "commonPackageSize": "12 oz pack",
    "shelfLifeDays": 7,
    "tags": [
      "pork",
      "sausage",
      "breakfast",
      "links",
      "pan-fry"
    ]
  },
  {
    "id": "breakfast-patties",
    "name": "Breakfast Sausage Patties",
    "category": "protein",
    "estimatedUnitCost": 0.38,
    "unit": "serving",
    "commonPackageSize": "12 oz pack",
    "shelfLifeDays": 7,
    "tags": [
      "pork",
      "sausage",
      "breakfast",
      "patties",
      "pan-fry"
    ]
  },
  {
    "id": "two-percent-milk",
    "name": "2% Reduced-Fat Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.28,
    "unit": "cup",
    "commonPackageSize": "1 gal (16 cups)",
    "shelfLifeDays": 14,
    "tags": [
      "milk",
      "reduced-fat",
      "breakfast",
      "refrigerated"
    ]
  },
  {
    "id": "one-percent-milk",
    "name": "1% Low-Fat Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.27,
    "unit": "cup",
    "commonPackageSize": "1 gal (16 cups)",
    "shelfLifeDays": 14,
    "tags": [
      "milk",
      "low-fat",
      "breakfast",
      "refrigerated"
    ]
  },
  {
    "id": "skim-milk",
    "name": "Skim (Nonfat) Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.27,
    "unit": "cup",
    "commonPackageSize": "1 gal (16 cups)",
    "shelfLifeDays": 14,
    "tags": [
      "milk",
      "nonfat",
      "fat-free",
      "refrigerated"
    ]
  },
  {
    "id": "lactose-free-milk",
    "name": "Lactose-Free Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.44,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 21,
    "tags": [
      "milk",
      "lactose-free",
      "whole",
      "refrigerated"
    ]
  },
  {
    "id": "a2-milk",
    "name": "A2 Whole Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.56,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 18,
    "tags": [
      "milk",
      "a2",
      "whole",
      "refrigerated"
    ]
  },
  {
    "id": "chocolate-milk",
    "name": "Chocolate Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.4,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 14,
    "tags": [
      "milk",
      "chocolate",
      "flavored",
      "kids"
    ]
  },
  {
    "id": "light-cream",
    "name": "Light Cream",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "1 pt (2 cups)",
    "shelfLifeDays": 14,
    "tags": [
      "cream",
      "coffee",
      "refrigerated"
    ]
  },
  {
    "id": "clotted-cream",
    "name": "Clotted Cream",
    "category": "dairy",
    "estimatedUnitCost": 4.5,
    "unit": "cup",
    "commonPackageSize": "6 oz jar (~0.75 cup)",
    "shelfLifeDays": 21,
    "tags": [
      "cream",
      "british",
      "high-fat",
      "spread"
    ]
  },
  {
    "id": "creme-fraiche",
    "name": "Crème Fraîche",
    "category": "dairy",
    "estimatedUnitCost": 2.6,
    "unit": "cup",
    "commonPackageSize": "8 oz tub (~1 cup)",
    "shelfLifeDays": 21,
    "tags": [
      "cream",
      "cultured",
      "french",
      "topping"
    ]
  },
  {
    "id": "double-cream",
    "name": "Double Cream",
    "category": "dairy",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "1 pt (2 cups)",
    "shelfLifeDays": 14,
    "tags": [
      "cream",
      "british",
      "high-fat",
      "whipping"
    ]
  },
  {
    "id": "manufacturing-cream",
    "name": "Manufacturing Cream (40% Heavy)",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "1 qt (4 cups)",
    "shelfLifeDays": 21,
    "tags": [
      "cream",
      "high-fat",
      "whipping",
      "pastry"
    ]
  },
  {
    "id": "kefir",
    "name": "Plain Kefir",
    "category": "dairy",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "32 fl oz (4 cups)",
    "shelfLifeDays": 21,
    "tags": [
      "cultured",
      "probiotic",
      "drinkable",
      "refrigerated"
    ]
  },
  {
    "id": "drinkable-yogurt",
    "name": "Drinkable Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "32 fl oz (4 cups)",
    "shelfLifeDays": 21,
    "tags": [
      "yogurt",
      "drinkable",
      "probiotic",
      "breakfast"
    ]
  },
  {
    "id": "fromage-blanc",
    "name": "Fromage Blanc",
    "category": "dairy",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "8 oz tub (~1 cup)",
    "shelfLifeDays": 18,
    "tags": [
      "cultured",
      "fresh",
      "french",
      "spread"
    ]
  },
  {
    "id": "vanilla-yogurt",
    "name": "Vanilla Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "32 oz tub (4 cups)",
    "shelfLifeDays": 21,
    "tags": [
      "yogurt",
      "vanilla",
      "flavored",
      "breakfast"
    ]
  },
  {
    "id": "fruit-yogurt",
    "name": "Fruit-on-the-Bottom Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "6 oz cup (~0.75 cup)",
    "shelfLifeDays": 21,
    "tags": [
      "yogurt",
      "fruit",
      "flavored",
      "snack"
    ]
  },
  {
    "id": "australian-yogurt",
    "name": "Australian-Style Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "32 oz tub (4 cups)",
    "shelfLifeDays": 24,
    "tags": [
      "yogurt",
      "australian",
      "creamy",
      "breakfast"
    ]
  },
  {
    "id": "french-yogurt",
    "name": "French-Style Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "4 oz pot (~0.5 cup)",
    "shelfLifeDays": 24,
    "tags": [
      "yogurt",
      "french",
      "pot-set",
      "dessert"
    ]
  },
  {
    "id": "coconut-yogurt",
    "name": "Coconut Milk Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "24 oz tub (3 cups)",
    "shelfLifeDays": 28,
    "tags": [
      "yogurt",
      "plant-based",
      "coconut",
      "vegan",
      "dairy-free"
    ]
  },
  {
    "id": "soy-yogurt",
    "name": "Soy Yogurt",
    "category": "dairy",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "24 oz tub (3 cups)",
    "shelfLifeDays": 28,
    "tags": [
      "yogurt",
      "plant-based",
      "soy",
      "vegan",
      "dairy-free"
    ]
  },
  {
    "id": "lassi",
    "name": "Mango Lassi (Yogurt Drink)",
    "category": "dairy",
    "estimatedUnitCost": 1.2,
    "unit": "cup",
    "commonPackageSize": "7 fl oz bottle (~0.9 cup)",
    "shelfLifeDays": 21,
    "tags": [
      "yogurt",
      "drink",
      "indian",
      "mango",
      "sweet"
    ]
  },
  {
    "id": "salted-butter",
    "name": "Salted Butter",
    "category": "dairy",
    "estimatedUnitCost": 0.27,
    "unit": "tbsp",
    "commonPackageSize": "1 lb (4 sticks, 32 tbsp)",
    "shelfLifeDays": 120,
    "tags": [
      "butter",
      "salted",
      "baking",
      "spread"
    ]
  },
  {
    "id": "unsalted-butter",
    "name": "Unsalted Butter",
    "category": "dairy",
    "estimatedUnitCost": 0.28,
    "unit": "tbsp",
    "commonPackageSize": "1 lb (4 sticks, 32 tbsp)",
    "shelfLifeDays": 120,
    "tags": [
      "butter",
      "unsalted",
      "baking"
    ]
  },
  {
    "id": "european-butter",
    "name": "European-Style Butter",
    "category": "dairy",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "8 oz (16 tbsp)",
    "shelfLifeDays": 120,
    "tags": [
      "butter",
      "european",
      "high-fat",
      "baking"
    ]
  },
  {
    "id": "cultured-butter",
    "name": "Cultured Butter",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "8 oz (16 tbsp)",
    "shelfLifeDays": 120,
    "tags": [
      "butter",
      "cultured",
      "tangy",
      "baking"
    ]
  },
  {
    "id": "whipped-butter",
    "name": "Whipped Butter",
    "category": "dairy",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "8 oz tub (~24 tbsp)",
    "shelfLifeDays": 90,
    "tags": [
      "butter",
      "whipped",
      "spread",
      "soft"
    ]
  },
  {
    "id": "browned-butter",
    "name": "Browned Butter (Beurre Noisette)",
    "category": "dairy",
    "estimatedUnitCost": 0.32,
    "unit": "tbsp",
    "commonPackageSize": "prepared from 1 stick (8 tbsp)",
    "shelfLifeDays": 30,
    "tags": [
      "butter",
      "browned",
      "nutty",
      "baking",
      "finishing"
    ]
  },
  {
    "id": "cashew-milk",
    "name": "Cashew Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.45,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 10,
    "tags": [
      "plant-milk",
      "cashew",
      "vegan",
      "dairy-free",
      "unsweetened"
    ]
  },
  {
    "id": "hemp-milk",
    "name": "Hemp Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "32 fl oz (4 cups)",
    "shelfLifeDays": 10,
    "tags": [
      "plant-milk",
      "hemp",
      "vegan",
      "dairy-free",
      "omega-3"
    ]
  },
  {
    "id": "rice-milk",
    "name": "Rice Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.4,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 10,
    "tags": [
      "plant-milk",
      "rice",
      "vegan",
      "dairy-free",
      "nut-free"
    ]
  },
  {
    "id": "pea-milk",
    "name": "Pea Protein Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 10,
    "tags": [
      "plant-milk",
      "pea-protein",
      "vegan",
      "dairy-free",
      "high-protein"
    ]
  },
  {
    "id": "macadamia-milk",
    "name": "Macadamia Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.75,
    "unit": "cup",
    "commonPackageSize": "32 fl oz (4 cups)",
    "shelfLifeDays": 10,
    "tags": [
      "plant-milk",
      "macadamia",
      "vegan",
      "dairy-free",
      "unsweetened"
    ]
  },
  {
    "id": "flax-milk",
    "name": "Flax Milk",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "cup",
    "commonPackageSize": "0.5 gal (8 cups)",
    "shelfLifeDays": 10,
    "tags": [
      "plant-milk",
      "flax",
      "vegan",
      "dairy-free",
      "omega-3",
      "nut-free"
    ]
  },
  {
    "id": "eggnog",
    "name": "Eggnog",
    "category": "dairy",
    "estimatedUnitCost": 0.75,
    "unit": "cup",
    "commonPackageSize": "1 qt (4 cups)",
    "shelfLifeDays": 30,
    "tags": [
      "dairy",
      "holiday",
      "seasonal",
      "sweet",
      "drink"
    ]
  },
  {
    "id": "custard-base",
    "name": "Crème Anglaise (Custard Base)",
    "category": "dairy",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "prepared (~2 cups)",
    "shelfLifeDays": 4,
    "tags": [
      "dairy",
      "custard",
      "dessert",
      "sauce"
    ]
  },
  {
    "id": "aerosol-whipped-cream",
    "name": "Aerosol Whipped Cream",
    "category": "dairy",
    "estimatedUnitCost": 0.12,
    "unit": "tbsp",
    "commonPackageSize": "6.5 oz can (~50 tbsp)",
    "shelfLifeDays": 60,
    "tags": [
      "cream",
      "whipped",
      "aerosol",
      "dessert",
      "topping"
    ]
  },
  {
    "id": "flavored-cream-cheese",
    "name": "Strawberry Cream Cheese Spread",
    "category": "dairy",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "8 oz tub (~16 tbsp)",
    "shelfLifeDays": 30,
    "tags": [
      "cream-cheese",
      "spread",
      "flavored",
      "breakfast",
      "bagel"
    ]
  },
  {
    "id": "whipped-cream-cheese",
    "name": "Whipped Cream Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.16,
    "unit": "tbsp",
    "commonPackageSize": "8 oz tub (~20 tbsp)",
    "shelfLifeDays": 30,
    "tags": [
      "cream-cheese",
      "whipped",
      "spread",
      "bagel"
    ]
  },
  {
    "id": "raw-milk",
    "name": "Raw Whole Milk",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "1 qt (4 cups)",
    "shelfLifeDays": 7,
    "tags": [
      "milk",
      "raw",
      "unpasteurized",
      "whole"
    ]
  },
  {
    "id": "dulce-de-leche-spread",
    "name": "Cajeta (Goat Milk Caramel)",
    "category": "dairy",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar (~30 tbsp)",
    "shelfLifeDays": 180,
    "tags": [
      "dairy",
      "caramel",
      "goat-milk",
      "dessert",
      "spread"
    ]
  },
  {
    "id": "clarified-butter",
    "name": "Clarified Butter",
    "category": "dairy",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "9 oz jar (~18 tbsp)",
    "shelfLifeDays": 180,
    "tags": [
      "butter",
      "clarified",
      "high-smoke-point",
      "cooking"
    ]
  },
  {
    "id": "sweet-cream-buttermilk",
    "name": "Cultured Low-Fat Buttermilk",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "cup",
    "commonPackageSize": "1 qt (4 cups)",
    "shelfLifeDays": 18,
    "tags": [
      "cultured",
      "buttermilk",
      "low-fat",
      "baking"
    ]
  }
];

export const EXTRA_INGREDIENT_NUTRITION: Record<string, NutritionPerUnit> = {
  "halibut-fillet": {
    "calories": 110,
    "protein": 22,
    "carbs": 0,
    "fat": 2.3,
    "fiber": 0,
    "confidence": "high"
  },
  "catfish-fillet": {
    "calories": 119,
    "protein": 17,
    "carbs": 0,
    "fat": 5.5,
    "fiber": 0,
    "confidence": "high"
  },
  "mahi-mahi": {
    "calories": 100,
    "protein": 21,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "sea-bass": {
    "calories": 124,
    "protein": 23,
    "carbs": 0,
    "fat": 2.6,
    "fiber": 0,
    "confidence": "high"
  },
  "red-snapper": {
    "calories": 110,
    "protein": 23,
    "carbs": 0,
    "fat": 1.5,
    "fiber": 0,
    "confidence": "high"
  },
  "haddock-fillet": {
    "calories": 90,
    "protein": 20,
    "carbs": 0,
    "fat": 0.6,
    "fiber": 0,
    "confidence": "high"
  },
  "mackerel-fillet": {
    "calories": 205,
    "protein": 19,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "pollock-fillet": {
    "calories": 92,
    "protein": 20,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "swordfish-steak": {
    "calories": 144,
    "protein": 23,
    "carbs": 0,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "flounder-fillet": {
    "calories": 86,
    "protein": 18,
    "carbs": 0,
    "fat": 1.2,
    "fiber": 0,
    "confidence": "high"
  },
  "sole-fillet": {
    "calories": 91,
    "protein": 18,
    "carbs": 0,
    "fat": 1.5,
    "fiber": 0,
    "confidence": "high"
  },
  "branzino": {
    "calories": 97,
    "protein": 18,
    "carbs": 0,
    "fat": 2,
    "fiber": 0,
    "confidence": "medium"
  },
  "grouper-fillet": {
    "calories": 92,
    "protein": 19,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "arctic-char": {
    "calories": 154,
    "protein": 20,
    "carbs": 0,
    "fat": 7.8,
    "fiber": 0,
    "confidence": "medium"
  },
  "tuna-steak": {
    "calories": 109,
    "protein": 24,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "prawns": {
    "calories": 99,
    "protein": 19,
    "carbs": 0.2,
    "fat": 1.7,
    "fiber": 0,
    "confidence": "high"
  },
  "jumbo-shrimp": {
    "calories": 99,
    "protein": 19,
    "carbs": 0.2,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "high"
  },
  "fresh-clams": {
    "calories": 74,
    "protein": 13,
    "carbs": 2.6,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "lobster-tail": {
    "calories": 89,
    "protein": 19,
    "carbs": 0,
    "fat": 0.9,
    "fiber": 0,
    "confidence": "high"
  },
  "whole-lobster": {
    "calories": 89,
    "protein": 19,
    "carbs": 0,
    "fat": 0.9,
    "fiber": 0,
    "confidence": "high"
  },
  "snow-crab-legs": {
    "calories": 90,
    "protein": 18,
    "carbs": 0,
    "fat": 1.2,
    "fiber": 0,
    "confidence": "high"
  },
  "king-crab-legs": {
    "calories": 84,
    "protein": 18,
    "carbs": 0,
    "fat": 0.6,
    "fiber": 0,
    "confidence": "high"
  },
  "dungeness-crab": {
    "calories": 86,
    "protein": 18,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "lump-crab-meat": {
    "calories": 83,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7,
    "fiber": 0,
    "confidence": "high"
  },
  "soft-shell-crab": {
    "calories": 90,
    "protein": 18,
    "carbs": 0,
    "fat": 1.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "crawfish": {
    "calories": 82,
    "protein": 17,
    "carbs": 0,
    "fat": 1.2,
    "fiber": 0,
    "confidence": "high"
  },
  "calamari": {
    "calories": 92,
    "protein": 16,
    "carbs": 3,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "high"
  },
  "fresh-oysters": {
    "calories": 81,
    "protein": 9,
    "carbs": 4.7,
    "fat": 2.3,
    "fiber": 0,
    "confidence": "high"
  },
  "surimi": {
    "calories": 99,
    "protein": 15,
    "carbs": 9,
    "fat": 0.9,
    "fiber": 0,
    "confidence": "medium"
  },
  "eel": {
    "calories": 184,
    "protein": 18,
    "carbs": 0,
    "fat": 12,
    "fiber": 0,
    "confidence": "high"
  },
  "smoked-trout": {
    "calories": 168,
    "protein": 24,
    "carbs": 0,
    "fat": 7.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "smoked-mackerel": {
    "calories": 219,
    "protein": 19,
    "carbs": 0,
    "fat": 16,
    "fiber": 0,
    "confidence": "medium"
  },
  "lox": {
    "calories": 117,
    "protein": 18,
    "carbs": 0,
    "fat": 4.3,
    "fiber": 0,
    "confidence": "high"
  },
  "salmon-roe": {
    "calories": 74,
    "protein": 8,
    "carbs": 1,
    "fat": 4,
    "fiber": 0,
    "confidence": "medium"
  },
  "tobiko": {
    "calories": 40,
    "protein": 6,
    "carbs": 1,
    "fat": 1.5,
    "fiber": 0,
    "confidence": "low"
  },
  "canned-tuna-in-oil": {
    "calories": 158,
    "protein": 26,
    "carbs": 0,
    "fat": 5.4,
    "fiber": 0,
    "confidence": "high"
  },
  "canned-crab": {
    "calories": 112,
    "protein": 23,
    "carbs": 0,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "high"
  },
  "smoked-oysters": {
    "calories": 140,
    "protein": 11,
    "carbs": 6,
    "fat": 8,
    "fiber": 0,
    "confidence": "medium"
  },
  "anchovy-fillets": {
    "calories": 60,
    "protein": 8,
    "carbs": 0,
    "fat": 2.8,
    "fiber": 0,
    "confidence": "high"
  },
  "kippers": {
    "calories": 195,
    "protein": 18,
    "carbs": 0,
    "fat": 13,
    "fiber": 0,
    "confidence": "medium"
  },
  "frozen-shrimp": {
    "calories": 99,
    "protein": 19,
    "carbs": 0.2,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "high"
  },
  "frozen-cod-fillet": {
    "calories": 82,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7,
    "fiber": 0,
    "confidence": "high"
  },
  "frozen-salmon-fillet": {
    "calories": 178,
    "protein": 20,
    "carbs": 0,
    "fat": 11,
    "fiber": 0,
    "confidence": "high"
  },
  "soft-tofu": {
    "calories": 17,
    "protein": 1.9,
    "carbs": 0.4,
    "fat": 1,
    "fiber": 0.1,
    "confidence": "high"
  },
  "smoked-tofu": {
    "calories": 42,
    "protein": 4.8,
    "carbs": 1,
    "fat": 2.4,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "baked-tofu": {
    "calories": 45,
    "protein": 5.2,
    "carbs": 1.2,
    "fat": 2.5,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "tofu-skin": {
    "calories": 133,
    "protein": 13.5,
    "carbs": 3.5,
    "fat": 7.5,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "seitan": {
    "calories": 104,
    "protein": 21,
    "carbs": 4,
    "fat": 0.5,
    "fiber": 0.6,
    "confidence": "high"
  },
  "vital-wheat-gluten": {
    "calories": 104,
    "protein": 23,
    "carbs": 4,
    "fat": 0.5,
    "fiber": 0.2,
    "confidence": "high"
  },
  "tvp": {
    "calories": 93,
    "protein": 14.5,
    "carbs": 9,
    "fat": 0.4,
    "fiber": 5,
    "confidence": "high"
  },
  "soy-curls": {
    "calories": 120,
    "protein": 11,
    "carbs": 9,
    "fat": 4,
    "fiber": 7,
    "confidence": "medium"
  },
  "dried-soybeans": {
    "calories": 119,
    "protein": 10.5,
    "carbs": 8.5,
    "fat": 5.6,
    "fiber": 2.7,
    "confidence": "high"
  },
  "black-soybeans": {
    "calories": 120,
    "protein": 11,
    "carbs": 8,
    "fat": 6,
    "fiber": 7,
    "confidence": "high"
  },
  "natto": {
    "calories": 60,
    "protein": 5.2,
    "carbs": 3.9,
    "fat": 3.1,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "edamame-shelled": {
    "calories": 188,
    "protein": 18.5,
    "carbs": 13.8,
    "fat": 8,
    "fiber": 8,
    "confidence": "high"
  },
  "green-jackfruit": {
    "calories": 75,
    "protein": 1.4,
    "carbs": 18,
    "fat": 0.3,
    "fiber": 3,
    "confidence": "medium"
  },
  "lupini-beans": {
    "calories": 32,
    "protein": 4.3,
    "carbs": 2.6,
    "fat": 0.9,
    "fiber": 1.1,
    "confidence": "medium"
  },
  "plant-based-sausage": {
    "calories": 190,
    "protein": 16,
    "carbs": 5,
    "fat": 12,
    "fiber": 2,
    "confidence": "medium"
  },
  "plant-based-patty": {
    "calories": 230,
    "protein": 20,
    "carbs": 7,
    "fat": 14,
    "fiber": 2,
    "confidence": "medium"
  },
  "plant-based-nuggets": {
    "calories": 190,
    "protein": 11,
    "carbs": 12,
    "fat": 11,
    "fiber": 3,
    "confidence": "medium"
  },
  "plant-based-chicken": {
    "calories": 40,
    "protein": 5,
    "carbs": 1.5,
    "fat": 1.5,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "plant-based-meatballs": {
    "calories": 210,
    "protein": 16,
    "carbs": 8,
    "fat": 13,
    "fiber": 3,
    "confidence": "medium"
  },
  "plant-based-bacon": {
    "calories": 60,
    "protein": 2,
    "carbs": 3,
    "fat": 4.5,
    "fiber": 1,
    "confidence": "low"
  },
  "plant-based-deli-slices": {
    "calories": 40,
    "protein": 5,
    "carbs": 2,
    "fat": 1,
    "fiber": 0.5,
    "confidence": "low"
  },
  "soy-chorizo": {
    "calories": 70,
    "protein": 5,
    "carbs": 3,
    "fat": 4,
    "fiber": 2,
    "confidence": "medium"
  },
  "falafel-mix": {
    "calories": 92,
    "protein": 5,
    "carbs": 15,
    "fat": 1.5,
    "fiber": 4,
    "confidence": "medium"
  },
  "whey-protein-powder": {
    "calories": 120,
    "protein": 24,
    "carbs": 3,
    "fat": 1.5,
    "fiber": 0,
    "confidence": "high"
  },
  "casein-protein-powder": {
    "calories": 120,
    "protein": 24,
    "carbs": 4,
    "fat": 1,
    "fiber": 1,
    "confidence": "high"
  },
  "pea-protein-powder": {
    "calories": 120,
    "protein": 24,
    "carbs": 2,
    "fat": 2,
    "fiber": 1,
    "confidence": "high"
  },
  "soy-protein-powder": {
    "calories": 110,
    "protein": 25,
    "carbs": 1,
    "fat": 0.5,
    "fiber": 0,
    "confidence": "high"
  },
  "collagen-peptides": {
    "calories": 70,
    "protein": 18,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "egg-white-protein-powder": {
    "calories": 110,
    "protein": 25,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "egg-yolks": {
    "calories": 55,
    "protein": 2.7,
    "carbs": 0.6,
    "fat": 4.5,
    "fiber": 0,
    "confidence": "high"
  },
  "duck-eggs": {
    "calories": 130,
    "protein": 9,
    "carbs": 1,
    "fat": 9.6,
    "fiber": 0,
    "confidence": "high"
  },
  "quail-eggs": {
    "calories": 14,
    "protein": 1.2,
    "carbs": 0.04,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "liquid-whole-eggs": {
    "calories": 180,
    "protein": 16,
    "carbs": 2,
    "fat": 12,
    "fiber": 0,
    "confidence": "high"
  },
  "egg-substitute": {
    "calories": 120,
    "protein": 24,
    "carbs": 2,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "vegan-egg-replacer": {
    "calories": 15,
    "protein": 0,
    "carbs": 4,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "hard-boiled-eggs": {
    "calories": 78,
    "protein": 6.3,
    "carbs": 0.6,
    "fat": 5.3,
    "fiber": 0,
    "confidence": "high"
  },
  "salted-duck-eggs": {
    "calories": 130,
    "protein": 9,
    "carbs": 1,
    "fat": 10,
    "fiber": 0,
    "confidence": "medium"
  },
  "century-eggs": {
    "calories": 75,
    "protein": 6,
    "carbs": 1,
    "fat": 5,
    "fiber": 0,
    "confidence": "low"
  },
  "ramps": {
    "calories": 20,
    "protein": 1,
    "carbs": 4,
    "fat": 0.1,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "garlic-scapes": {
    "calories": 30,
    "protein": 1.5,
    "carbs": 7,
    "fat": 0.1,
    "fiber": 1,
    "confidence": "low"
  },
  "swiss-chard": {
    "calories": 7,
    "protein": 0.6,
    "carbs": 1.4,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "high"
  },
  "rainbow-chard": {
    "calories": 7,
    "protein": 0.6,
    "carbs": 1.4,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "high"
  },
  "watercress": {
    "calories": 4,
    "protein": 0.8,
    "carbs": 0.4,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "high"
  },
  "radicchio": {
    "calories": 9,
    "protein": 0.6,
    "carbs": 1.8,
    "fat": 0.1,
    "fiber": 0.4,
    "confidence": "high"
  },
  "frisee": {
    "calories": 8,
    "protein": 0.6,
    "carbs": 1.7,
    "fat": 0.1,
    "fiber": 1.6,
    "confidence": "medium"
  },
  "escarole": {
    "calories": 8,
    "protein": 0.6,
    "carbs": 1.7,
    "fat": 0.1,
    "fiber": 1.6,
    "confidence": "medium"
  },
  "mustard-greens": {
    "calories": 15,
    "protein": 1.6,
    "carbs": 2.7,
    "fat": 0.2,
    "fiber": 1.8,
    "confidence": "high"
  },
  "turnip-greens": {
    "calories": 18,
    "protein": 1,
    "carbs": 3.9,
    "fat": 0.2,
    "fiber": 1.8,
    "confidence": "high"
  },
  "dandelion-greens": {
    "calories": 25,
    "protein": 1.5,
    "carbs": 5.1,
    "fat": 0.4,
    "fiber": 1.9,
    "confidence": "medium"
  },
  "baby-bok-choy": {
    "calories": 13,
    "protein": 1.5,
    "carbs": 2.2,
    "fat": 0.2,
    "fiber": 1,
    "confidence": "high"
  },
  "tatsoi": {
    "calories": 10,
    "protein": 1.2,
    "carbs": 1.6,
    "fat": 0.1,
    "fiber": 0.9,
    "confidence": "low"
  },
  "mizuna": {
    "calories": 8,
    "protein": 1,
    "carbs": 1.3,
    "fat": 0.1,
    "fiber": 0.8,
    "confidence": "low"
  },
  "rutabaga": {
    "calories": 51,
    "protein": 1.7,
    "carbs": 12,
    "fat": 0.2,
    "fiber": 3.2,
    "confidence": "high"
  },
  "jicama": {
    "calories": 49,
    "protein": 0.9,
    "carbs": 11,
    "fat": 0.1,
    "fiber": 6.4,
    "confidence": "high"
  },
  "kohlrabi": {
    "calories": 36,
    "protein": 2.3,
    "carbs": 8.4,
    "fat": 0.1,
    "fiber": 4.9,
    "confidence": "high"
  },
  "sunchoke": {
    "calories": 110,
    "protein": 3,
    "carbs": 26,
    "fat": 0,
    "fiber": 2.4,
    "confidence": "high"
  },
  "yuca": {
    "calories": 165,
    "protein": 1.4,
    "carbs": 39,
    "fat": 0.3,
    "fiber": 1.8,
    "confidence": "high"
  },
  "lotus-root": {
    "calories": 75,
    "protein": 2.5,
    "carbs": 17,
    "fat": 0.1,
    "fiber": 4.9,
    "confidence": "high"
  },
  "heirloom-tomato": {
    "calories": 33,
    "protein": 1.6,
    "carbs": 7,
    "fat": 0.4,
    "fiber": 2.2,
    "confidence": "high"
  },
  "grape-tomatoes": {
    "calories": 27,
    "protein": 1.3,
    "carbs": 5.8,
    "fat": 0.3,
    "fiber": 1.8,
    "confidence": "high"
  },
  "green-tomato": {
    "calories": 33,
    "protein": 1.7,
    "carbs": 7,
    "fat": 0.3,
    "fiber": 1.7,
    "confidence": "medium"
  },
  "italian-eggplant": {
    "calories": 25,
    "protein": 1,
    "carbs": 6,
    "fat": 0.2,
    "fiber": 3,
    "confidence": "high"
  },
  "japanese-eggplant": {
    "calories": 21,
    "protein": 0.8,
    "carbs": 5,
    "fat": 0.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "thai-eggplant": {
    "calories": 27,
    "protein": 1,
    "carbs": 6.4,
    "fat": 0.2,
    "fiber": 3.4,
    "confidence": "low"
  },
  "yellow-bell-pepper": {
    "calories": 50,
    "protein": 1.9,
    "carbs": 12,
    "fat": 0.4,
    "fiber": 1.7,
    "confidence": "high"
  },
  "orange-bell-pepper": {
    "calories": 46,
    "protein": 1.5,
    "carbs": 9,
    "fat": 0.3,
    "fiber": 1.7,
    "confidence": "high"
  },
  "red-bell-pepper": {
    "calories": 51,
    "protein": 1.6,
    "carbs": 9.9,
    "fat": 0.5,
    "fiber": 3.4,
    "confidence": "high"
  },
  "anaheim-pepper": {
    "calories": 12,
    "protein": 0.6,
    "carbs": 2.8,
    "fat": 0.1,
    "fiber": 1,
    "confidence": "medium"
  },
  "banana-pepper": {
    "calories": 12,
    "protein": 0.7,
    "carbs": 2.4,
    "fat": 0.2,
    "fiber": 1.6,
    "confidence": "medium"
  },
  "cubanelle": {
    "calories": 15,
    "protein": 0.7,
    "carbs": 3.5,
    "fat": 0.1,
    "fiber": 1.2,
    "confidence": "low"
  },
  "fresno-chili": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 0.9,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "yellow-squash": {
    "calories": 31,
    "protein": 2.3,
    "carbs": 6.5,
    "fat": 0.4,
    "fiber": 2.2,
    "confidence": "high"
  },
  "pattypan-squash": {
    "calories": 18,
    "protein": 1.2,
    "carbs": 3.8,
    "fat": 0.2,
    "fiber": 1.4,
    "confidence": "medium"
  },
  "acorn-squash": {
    "calories": 56,
    "protein": 1.1,
    "carbs": 15,
    "fat": 0.1,
    "fiber": 2.1,
    "confidence": "high"
  },
  "kabocha-squash": {
    "calories": 40,
    "protein": 1.3,
    "carbs": 10,
    "fat": 0.1,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "delicata-squash": {
    "calories": 40,
    "protein": 1,
    "carbs": 9,
    "fat": 0.1,
    "fiber": 2,
    "confidence": "medium"
  },
  "calabaza": {
    "calories": 30,
    "protein": 1,
    "carbs": 7.5,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "low"
  },
  "broccoli-rabe": {
    "calories": 9,
    "protein": 1.3,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 1.1,
    "confidence": "high"
  },
  "savoy-cabbage": {
    "calories": 19,
    "protein": 1.4,
    "carbs": 4.3,
    "fat": 0.1,
    "fiber": 2.2,
    "confidence": "high"
  },
  "romanesco": {
    "calories": 25,
    "protein": 2,
    "carbs": 5,
    "fat": 0.3,
    "fiber": 2.5,
    "confidence": "medium"
  },
  "lacinato-kale": {
    "calories": 9,
    "protein": 0.9,
    "carbs": 1.4,
    "fat": 0.2,
    "fiber": 0.9,
    "confidence": "high"
  },
  "baby-kale": {
    "calories": 8,
    "protein": 0.7,
    "carbs": 1.4,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "high"
  },
  "button-mushroom": {
    "calories": 15,
    "protein": 2.2,
    "carbs": 2.3,
    "fat": 0.2,
    "fiber": 0.7,
    "confidence": "high"
  },
  "oyster-mushroom": {
    "calories": 28,
    "protein": 2.9,
    "carbs": 5.2,
    "fat": 0.4,
    "fiber": 2,
    "confidence": "high"
  },
  "enoki-mushroom": {
    "calories": 24,
    "protein": 1.7,
    "carbs": 5,
    "fat": 0.2,
    "fiber": 1.9,
    "confidence": "medium"
  },
  "king-oyster-mushroom": {
    "calories": 35,
    "protein": 2.5,
    "carbs": 6,
    "fat": 0.5,
    "fiber": 2.5,
    "confidence": "low"
  },
  "maitake-mushroom": {
    "calories": 22,
    "protein": 1.4,
    "carbs": 4.5,
    "fat": 0.1,
    "fiber": 1.7,
    "confidence": "medium"
  },
  "beech-mushroom": {
    "calories": 25,
    "protein": 2.5,
    "carbs": 4.5,
    "fat": 0.3,
    "fiber": 2,
    "confidence": "low"
  },
  "snow-peas": {
    "calories": 26,
    "protein": 1.8,
    "carbs": 4.8,
    "fat": 0.1,
    "fiber": 1.7,
    "confidence": "high"
  },
  "globe-artichoke": {
    "calories": 60,
    "protein": 4.2,
    "carbs": 13,
    "fat": 0.2,
    "fiber": 6.9,
    "confidence": "high"
  },
  "turmeric-root": {
    "calories": 3,
    "protein": 0.1,
    "carbs": 0.6,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "russet-potato": {
    "calories": 168,
    "protein": 4.5,
    "carbs": 37,
    "fat": 0.2,
    "fiber": 2.7,
    "confidence": "high"
  },
  "yukon-gold-potato": {
    "calories": 110,
    "protein": 2.9,
    "carbs": 26,
    "fat": 0.1,
    "fiber": 2,
    "confidence": "high"
  },
  "fingerling-potato": {
    "calories": 117,
    "protein": 3,
    "carbs": 26,
    "fat": 0.2,
    "fiber": 2.3,
    "confidence": "medium"
  },
  "cranberries": {
    "calories": 46,
    "protein": 0.4,
    "carbs": 12,
    "fat": 0.1,
    "fiber": 4.6,
    "confidence": "high"
  },
  "honeydew": {
    "calories": 61,
    "protein": 0.9,
    "carbs": 15,
    "fat": 0.2,
    "fiber": 1.4,
    "confidence": "high"
  },
  "nectarine": {
    "calories": 63,
    "protein": 1.5,
    "carbs": 15,
    "fat": 0.5,
    "fiber": 2.4,
    "confidence": "high"
  },
  "plum": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 7.5,
    "fat": 0.2,
    "fiber": 0.9,
    "confidence": "high"
  },
  "apricot": {
    "calories": 17,
    "protein": 0.5,
    "carbs": 3.9,
    "fat": 0.1,
    "fiber": 0.7,
    "confidence": "high"
  },
  "clementine": {
    "calories": 35,
    "protein": 0.6,
    "carbs": 9,
    "fat": 0.1,
    "fiber": 1.3,
    "confidence": "high"
  },
  "lychee": {
    "calories": 125,
    "protein": 1.6,
    "carbs": 31,
    "fat": 0.8,
    "fiber": 2.5,
    "confidence": "high"
  },
  "papaya": {
    "calories": 62,
    "protein": 0.7,
    "carbs": 16,
    "fat": 0.4,
    "fiber": 2.5,
    "confidence": "high"
  },
  "passionfruit": {
    "calories": 17,
    "protein": 0.4,
    "carbs": 4.2,
    "fat": 0.1,
    "fiber": 1.9,
    "confidence": "high"
  },
  "dragonfruit": {
    "calories": 102,
    "protein": 2.1,
    "carbs": 22,
    "fat": 0.5,
    "fiber": 4.8,
    "confidence": "medium"
  },
  "guava": {
    "calories": 37,
    "protein": 1.4,
    "carbs": 8,
    "fat": 0.5,
    "fiber": 3,
    "confidence": "high"
  },
  "coconut": {
    "calories": 283,
    "protein": 2.7,
    "carbs": 12,
    "fat": 27,
    "fiber": 7.2,
    "confidence": "high"
  },
  "starfruit": {
    "calories": 28,
    "protein": 1,
    "carbs": 6,
    "fat": 0.3,
    "fiber": 2.5,
    "confidence": "high"
  },
  "persimmon": {
    "calories": 118,
    "protein": 1,
    "carbs": 31,
    "fat": 0.3,
    "fiber": 6,
    "confidence": "high"
  },
  "kumquat": {
    "calories": 71,
    "protein": 1.9,
    "carbs": 16,
    "fat": 0.9,
    "fiber": 6.5,
    "confidence": "high"
  },
  "fresh-fig": {
    "calories": 37,
    "protein": 0.4,
    "carbs": 10,
    "fat": 0.2,
    "fiber": 1.5,
    "confidence": "high"
  },
  "tangerine": {
    "calories": 47,
    "protein": 0.7,
    "carbs": 12,
    "fat": 0.3,
    "fiber": 1.6,
    "confidence": "high"
  },
  "blood-orange": {
    "calories": 70,
    "protein": 1.2,
    "carbs": 16,
    "fat": 0.2,
    "fiber": 3.4,
    "confidence": "high"
  },
  "key-lime": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.7,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "meyer-lemon": {
    "calories": 17,
    "protein": 0.6,
    "carbs": 5.4,
    "fat": 0.2,
    "fiber": 1.6,
    "confidence": "medium"
  },
  "green-apple": {
    "calories": 80,
    "protein": 0.4,
    "carbs": 21,
    "fat": 0.3,
    "fiber": 3.7,
    "confidence": "high"
  },
  "asian-pear": {
    "calories": 116,
    "protein": 1.4,
    "carbs": 29,
    "fat": 0.6,
    "fiber": 9.9,
    "confidence": "high"
  },
  "mangosteen": {
    "calories": 143,
    "protein": 0.8,
    "carbs": 35,
    "fat": 1.1,
    "fiber": 3.5,
    "confidence": "medium"
  },
  "rambutan": {
    "calories": 123,
    "protein": 1.5,
    "carbs": 31,
    "fat": 0.4,
    "fiber": 1.3,
    "confidence": "medium"
  },
  "jackfruit-fresh": {
    "calories": 157,
    "protein": 2.8,
    "carbs": 38,
    "fat": 1.1,
    "fiber": 2.5,
    "confidence": "medium"
  },
  "cherimoya": {
    "calories": 120,
    "protein": 2.5,
    "carbs": 29,
    "fat": 1.1,
    "fiber": 4.8,
    "confidence": "medium"
  },
  "gooseberry": {
    "calories": 66,
    "protein": 1.3,
    "carbs": 15,
    "fat": 0.9,
    "fiber": 6.5,
    "confidence": "high"
  },
  "elderberry": {
    "calories": 106,
    "protein": 1,
    "carbs": 27,
    "fat": 0.7,
    "fiber": 10,
    "confidence": "medium"
  },
  "blackcurrants": {
    "calories": 71,
    "protein": 1.6,
    "carbs": 17,
    "fat": 0.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "boysenberry": {
    "calories": 66,
    "protein": 1.5,
    "carbs": 16,
    "fat": 0.4,
    "fiber": 7,
    "confidence": "medium"
  },
  "golden-raisins": {
    "calories": 130,
    "protein": 1.3,
    "carbs": 34,
    "fat": 0.1,
    "fiber": 1.6,
    "confidence": "high"
  },
  "dried-cherries": {
    "calories": 130,
    "protein": 1,
    "carbs": 31,
    "fat": 0.5,
    "fiber": 2,
    "confidence": "high"
  },
  "dried-figs": {
    "calories": 21,
    "protein": 0.3,
    "carbs": 5.4,
    "fat": 0.1,
    "fiber": 0.8,
    "confidence": "high"
  },
  "goji-berries": {
    "calories": 98,
    "protein": 4,
    "carbs": 21,
    "fat": 0.1,
    "fiber": 3.6,
    "confidence": "medium"
  },
  "dried-blueberries": {
    "calories": 127,
    "protein": 0.9,
    "carbs": 32,
    "fat": 0.5,
    "fiber": 3,
    "confidence": "medium"
  },
  "dried-pineapple": {
    "calories": 120,
    "protein": 0.5,
    "carbs": 31,
    "fat": 0.2,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "banana-chips": {
    "calories": 147,
    "protein": 0.7,
    "carbs": 17,
    "fat": 9.5,
    "fiber": 2.2,
    "confidence": "high"
  },
  "candied-ginger": {
    "calories": 100,
    "protein": 0.1,
    "carbs": 25,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "maraschino-cherries": {
    "calories": 165,
    "protein": 0.2,
    "carbs": 42,
    "fat": 0.2,
    "fiber": 3.2,
    "confidence": "medium"
  },
  "low-moisture-mozzarella": {
    "calories": 85,
    "protein": 6.3,
    "carbs": 0.6,
    "fat": 6.3,
    "fiber": 0,
    "confidence": "high"
  },
  "fresh-mozzarella": {
    "calories": 70,
    "protein": 5,
    "carbs": 0.7,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "burrata": {
    "calories": 80,
    "protein": 4.5,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "medium"
  },
  "pecorino": {
    "calories": 110,
    "protein": 7,
    "carbs": 1,
    "fat": 8.5,
    "fiber": 0,
    "confidence": "high"
  },
  "romano": {
    "calories": 110,
    "protein": 9,
    "carbs": 1,
    "fat": 7.6,
    "fiber": 0,
    "confidence": "high"
  },
  "camembert": {
    "calories": 85,
    "protein": 5.6,
    "carbs": 0.1,
    "fat": 6.9,
    "fiber": 0,
    "confidence": "high"
  },
  "gorgonzola": {
    "calories": 100,
    "protein": 6,
    "carbs": 0.5,
    "fat": 8.5,
    "fiber": 0,
    "confidence": "high"
  },
  "colby": {
    "calories": 110,
    "protein": 6.7,
    "carbs": 0.7,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "colby-jack": {
    "calories": 110,
    "protein": 6.9,
    "carbs": 0.5,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "muenster": {
    "calories": 100,
    "protein": 6.6,
    "carbs": 0.3,
    "fat": 8.1,
    "fiber": 0,
    "confidence": "high"
  },
  "havarti": {
    "calories": 105,
    "protein": 6.1,
    "carbs": 0.3,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "fontina": {
    "calories": 110,
    "protein": 7.3,
    "carbs": 0.4,
    "fat": 8.8,
    "fiber": 0,
    "confidence": "high"
  },
  "asiago": {
    "calories": 110,
    "protein": 7,
    "carbs": 0.9,
    "fat": 8.5,
    "fiber": 0,
    "confidence": "high"
  },
  "oaxaca": {
    "calories": 85,
    "protein": 6.3,
    "carbs": 0.6,
    "fat": 6.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "string-cheese": {
    "calories": 80,
    "protein": 6,
    "carbs": 1,
    "fat": 6,
    "fiber": 0,
    "confidence": "high"
  },
  "boursin": {
    "calories": 120,
    "protein": 2,
    "carbs": 1,
    "fat": 12,
    "fiber": 0,
    "confidence": "medium"
  },
  "neufchatel": {
    "calories": 70,
    "protein": 3,
    "carbs": 1,
    "fat": 6,
    "fiber": 0,
    "confidence": "high"
  },
  "roquefort": {
    "calories": 105,
    "protein": 6,
    "carbs": 0.6,
    "fat": 8.7,
    "fiber": 0,
    "confidence": "high"
  },
  "stilton": {
    "calories": 110,
    "protein": 6,
    "carbs": 0.1,
    "fat": 9.4,
    "fiber": 0,
    "confidence": "high"
  },
  "emmental": {
    "calories": 110,
    "protein": 8,
    "carbs": 0.5,
    "fat": 8,
    "fiber": 0,
    "confidence": "high"
  },
  "jarlsberg": {
    "calories": 100,
    "protein": 7,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "high"
  },
  "edam": {
    "calories": 100,
    "protein": 7,
    "carbs": 0.4,
    "fat": 7.9,
    "fiber": 0,
    "confidence": "high"
  },
  "raclette": {
    "calories": 105,
    "protein": 6.8,
    "carbs": 0.5,
    "fat": 8.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "ricotta-salata": {
    "calories": 90,
    "protein": 7,
    "carbs": 1,
    "fat": 6.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "queso-blanco": {
    "calories": 90,
    "protein": 6,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "medium"
  },
  "queso-panela": {
    "calories": 80,
    "protein": 6,
    "carbs": 1.5,
    "fat": 5.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "shredded-cheddar": {
    "calories": 110,
    "protein": 6.5,
    "carbs": 0.9,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "shredded-mexican-blend": {
    "calories": 110,
    "protein": 6.5,
    "carbs": 1,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "shredded-parmesan": {
    "calories": 110,
    "protein": 10,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "high"
  },
  "grated-parmesan": {
    "calories": 22,
    "protein": 2,
    "carbs": 0.2,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "high"
  },
  "smoked-gouda": {
    "calories": 100,
    "protein": 7,
    "carbs": 0.6,
    "fat": 8,
    "fiber": 0,
    "confidence": "high"
  },
  "sharp-cheddar": {
    "calories": 115,
    "protein": 7,
    "carbs": 0.4,
    "fat": 9.5,
    "fiber": 0,
    "confidence": "high"
  },
  "white-cheddar": {
    "calories": 110,
    "protein": 7,
    "carbs": 0.4,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "queso-oaxaca-shredded": {
    "calories": 90,
    "protein": 6,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "medium"
  },
  "chevre": {
    "calories": 75,
    "protein": 5,
    "carbs": 0.5,
    "fat": 6,
    "fiber": 0,
    "confidence": "high"
  },
  "queso-de-cabra": {
    "calories": 110,
    "protein": 8,
    "carbs": 1,
    "fat": 8,
    "fiber": 0,
    "confidence": "medium"
  },
  "comte": {
    "calories": 110,
    "protein": 8,
    "carbs": 0.3,
    "fat": 9,
    "fiber": 0,
    "confidence": "medium"
  },
  "queso-de-freir": {
    "calories": 90,
    "protein": 6,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "medium"
  },
  "halloumi-light": {
    "calories": 35,
    "protein": 4,
    "carbs": 2,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "pizza-cheese-blend": {
    "calories": 90,
    "protein": 6.5,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "confidence": "high"
  },
  "queso-dip": {
    "calories": 80,
    "protein": 2,
    "carbs": 3,
    "fat": 6,
    "fiber": 0,
    "confidence": "medium"
  },
  "limburger": {
    "calories": 95,
    "protein": 6,
    "carbs": 0.5,
    "fat": 7.7,
    "fiber": 0,
    "confidence": "medium"
  },
  "black-rice": {
    "calories": 640,
    "protein": 18,
    "carbs": 136,
    "fat": 4,
    "fiber": 6,
    "confidence": "high"
  },
  "amaranth": {
    "calories": 716,
    "protein": 26,
    "carbs": 126,
    "fat": 13,
    "fiber": 13,
    "confidence": "high"
  },
  "teff": {
    "calories": 708,
    "protein": 26,
    "carbs": 141,
    "fat": 5,
    "fiber": 15,
    "confidence": "high"
  },
  "steel-cut-oats": {
    "calories": 600,
    "protein": 20,
    "carbs": 108,
    "fat": 10,
    "fiber": 16,
    "confidence": "high"
  },
  "wheat-berries": {
    "calories": 632,
    "protein": 24,
    "carbs": 136,
    "fat": 4,
    "fiber": 24,
    "confidence": "high"
  },
  "spelt": {
    "calories": 588,
    "protein": 25,
    "carbs": 122,
    "fat": 4,
    "fiber": 19,
    "confidence": "high"
  },
  "fusilli": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "rotini": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "ziti": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "pasta-shells": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "cavatappi": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "angel-hair": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "pappardelle": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "tagliatelle": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "orecchiette": {
    "calories": 200,
    "protein": 7.5,
    "carbs": 42,
    "fat": 1.2,
    "fiber": 2.5,
    "confidence": "high"
  },
  "manicotti": {
    "calories": 210,
    "protein": 7.5,
    "carbs": 43,
    "fat": 1.2,
    "fiber": 2,
    "confidence": "high"
  },
  "cannelloni": {
    "calories": 210,
    "protein": 7.5,
    "carbs": 43,
    "fat": 1.2,
    "fiber": 2,
    "confidence": "high"
  },
  "ravioli": {
    "calories": 250,
    "protein": 11,
    "carbs": 38,
    "fat": 6,
    "fiber": 2,
    "confidence": "medium"
  },
  "tortellini": {
    "calories": 250,
    "protein": 11,
    "carbs": 38,
    "fat": 6,
    "fiber": 2,
    "confidence": "medium"
  },
  "lo-mein-noodles": {
    "calories": 210,
    "protein": 7,
    "carbs": 43,
    "fat": 1.5,
    "fiber": 2,
    "confidence": "medium"
  },
  "chow-mein-noodles": {
    "calories": 220,
    "protein": 7,
    "carbs": 42,
    "fat": 3,
    "fiber": 2,
    "confidence": "medium"
  },
  "wide-rice-noodles": {
    "calories": 190,
    "protein": 3,
    "carbs": 44,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "focaccia": {
    "calories": 150,
    "protein": 4,
    "carbs": 24,
    "fat": 4,
    "fiber": 1,
    "confidence": "medium"
  },
  "multigrain-bread": {
    "calories": 90,
    "protein": 4,
    "carbs": 15,
    "fat": 1.5,
    "fiber": 2,
    "confidence": "high"
  },
  "pumpernickel": {
    "calories": 80,
    "protein": 3,
    "carbs": 15,
    "fat": 1,
    "fiber": 2,
    "confidence": "high"
  },
  "challah": {
    "calories": 160,
    "protein": 5,
    "carbs": 27,
    "fat": 3.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "cornbread": {
    "calories": 180,
    "protein": 4,
    "carbs": 29,
    "fat": 6,
    "fiber": 1,
    "confidence": "medium"
  },
  "dinner-rolls": {
    "calories": 110,
    "protein": 3,
    "carbs": 20,
    "fat": 2,
    "fiber": 1,
    "confidence": "high"
  },
  "kaiser-rolls": {
    "calories": 170,
    "protein": 6,
    "carbs": 33,
    "fat": 2.5,
    "fiber": 1,
    "confidence": "high"
  },
  "sub-rolls": {
    "calories": 200,
    "protein": 7,
    "carbs": 38,
    "fat": 2.5,
    "fiber": 2,
    "confidence": "high"
  },
  "croissant": {
    "calories": 270,
    "protein": 5,
    "carbs": 31,
    "fat": 14,
    "fiber": 2,
    "confidence": "high"
  },
  "flatbread": {
    "calories": 140,
    "protein": 5,
    "carbs": 25,
    "fat": 2.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "lavash": {
    "calories": 110,
    "protein": 4,
    "carbs": 21,
    "fat": 1,
    "fiber": 1,
    "confidence": "medium"
  },
  "roti": {
    "calories": 120,
    "protein": 3,
    "carbs": 18,
    "fat": 4,
    "fiber": 2,
    "confidence": "medium"
  },
  "crumpets": {
    "calories": 90,
    "protein": 3,
    "carbs": 19,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "texas-toast": {
    "calories": 120,
    "protein": 4,
    "carbs": 20,
    "fat": 2.5,
    "fiber": 1,
    "confidence": "high"
  },
  "breadsticks": {
    "calories": 40,
    "protein": 1,
    "carbs": 7,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "bread-flour": {
    "calories": 495,
    "protein": 16,
    "carbs": 99,
    "fat": 2,
    "fiber": 3.5,
    "confidence": "high"
  },
  "cake-flour": {
    "calories": 420,
    "protein": 9,
    "carbs": 92,
    "fat": 1,
    "fiber": 2,
    "confidence": "high"
  },
  "self-rising-flour": {
    "calories": 440,
    "protein": 12,
    "carbs": 93,
    "fat": 1,
    "fiber": 3,
    "confidence": "high"
  },
  "semolina-flour": {
    "calories": 601,
    "protein": 21,
    "carbs": 122,
    "fat": 1.8,
    "fiber": 6.5,
    "confidence": "high"
  },
  "oat-bran": {
    "calories": 231,
    "protein": 16,
    "carbs": 62,
    "fat": 7,
    "fiber": 15,
    "confidence": "high"
  },
  "wheat-germ": {
    "calories": 414,
    "protein": 27,
    "carbs": 60,
    "fat": 11,
    "fiber": 15,
    "confidence": "high"
  },
  "cream-of-wheat": {
    "calories": 560,
    "protein": 16,
    "carbs": 120,
    "fat": 2,
    "fiber": 4,
    "confidence": "high"
  },
  "coconut-flour": {
    "calories": 480,
    "protein": 18,
    "carbs": 72,
    "fat": 15,
    "fiber": 42,
    "confidence": "high"
  },
  "chickpea-flour": {
    "calories": 356,
    "protein": 21,
    "carbs": 53,
    "fat": 6,
    "fiber": 10,
    "confidence": "high"
  },
  "cassava-flour": {
    "calories": 460,
    "protein": 4,
    "carbs": 110,
    "fat": 0,
    "fiber": 4,
    "confidence": "medium"
  },
  "tapioca-flour": {
    "calories": 480,
    "protein": 0,
    "carbs": 120,
    "fat": 0,
    "fiber": 1,
    "confidence": "high"
  },
  "pastry-flour": {
    "calories": 440,
    "protein": 11,
    "carbs": 94,
    "fat": 1.5,
    "fiber": 3,
    "confidence": "medium"
  },
  "gluten-free-flour": {
    "calories": 440,
    "protein": 6,
    "carbs": 98,
    "fat": 1.5,
    "fiber": 4,
    "confidence": "medium"
  },
  "buckwheat-flour": {
    "calories": 402,
    "protein": 15,
    "carbs": 85,
    "fat": 3.7,
    "fiber": 12,
    "confidence": "high"
  },
  "spelt-flour": {
    "calories": 440,
    "protein": 15,
    "carbs": 88,
    "fat": 3,
    "fiber": 11,
    "confidence": "medium"
  },
  "caster-sugar": {
    "calories": 770,
    "protein": 0,
    "carbs": 200,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "demerara-sugar": {
    "calories": 770,
    "protein": 0,
    "carbs": 199,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "muscovado-sugar": {
    "calories": 760,
    "protein": 0,
    "carbs": 196,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "sanding-sugar": {
    "calories": 48,
    "protein": 0,
    "carbs": 12.5,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "milk-chocolate-chips": {
    "calories": 150,
    "protein": 2,
    "carbs": 18,
    "fat": 8,
    "fiber": 1,
    "confidence": "high"
  },
  "milk-chocolate": {
    "calories": 150,
    "protein": 2,
    "carbs": 17,
    "fat": 9,
    "fiber": 1,
    "confidence": "high"
  },
  "white-chocolate": {
    "calories": 160,
    "protein": 2,
    "carbs": 17,
    "fat": 9,
    "fiber": 0,
    "confidence": "high"
  },
  "chocolate-chunks": {
    "calories": 140,
    "protein": 1,
    "carbs": 18,
    "fat": 8,
    "fiber": 2,
    "confidence": "high"
  },
  "mini-chocolate-chips": {
    "calories": 140,
    "protein": 1,
    "carbs": 19,
    "fat": 8,
    "fiber": 2,
    "confidence": "high"
  },
  "baking-chocolate": {
    "calories": 150,
    "protein": 2,
    "carbs": 13,
    "fat": 11,
    "fiber": 2,
    "confidence": "high"
  },
  "butterscotch-chips": {
    "calories": 160,
    "protein": 1,
    "carbs": 19,
    "fat": 8,
    "fiber": 0,
    "confidence": "medium"
  },
  "cacao-nibs": {
    "calories": 175,
    "protein": 3,
    "carbs": 10,
    "fat": 13,
    "fiber": 9,
    "confidence": "high"
  },
  "lemon-extract": {
    "calories": 12,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "orange-extract": {
    "calories": 12,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "rum-extract": {
    "calories": 12,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "coconut-extract": {
    "calories": 12,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "maple-extract": {
    "calories": 12,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "vanilla-bean-paste": {
    "calories": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "vanilla-bean": {
    "calories": 12,
    "protein": 0,
    "carbs": 3,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "pectin": {
    "calories": 40,
    "protein": 0,
    "carbs": 10,
    "fat": 0,
    "fiber": 3,
    "confidence": "medium"
  },
  "xanthan-gum": {
    "calories": 7,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "fiber": 2,
    "confidence": "high"
  },
  "meringue-powder": {
    "calories": 30,
    "protein": 2,
    "carbs": 4,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "pie-crust": {
    "calories": 880,
    "protein": 10,
    "carbs": 92,
    "fat": 52,
    "fiber": 3,
    "confidence": "medium"
  },
  "graham-cracker-crust": {
    "calories": 720,
    "protein": 7,
    "carbs": 104,
    "fat": 30,
    "fiber": 2,
    "confidence": "medium"
  },
  "crescent-dough": {
    "calories": 880,
    "protein": 16,
    "carbs": 120,
    "fat": 36,
    "fiber": 4,
    "confidence": "medium"
  },
  "sweetened-shredded-coconut": {
    "calories": 130,
    "protein": 1,
    "carbs": 13,
    "fat": 9,
    "fiber": 3,
    "confidence": "high"
  },
  "sprinkles": {
    "calories": 60,
    "protein": 0,
    "carbs": 12,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "gel-food-coloring": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "liquid-food-coloring": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "frosting": {
    "calories": 140,
    "protein": 0,
    "carbs": 22,
    "fat": 6,
    "fiber": 0,
    "confidence": "high"
  },
  "fondant": {
    "calories": 100,
    "protein": 0,
    "carbs": 25,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "candy-melts": {
    "calories": 150,
    "protein": 1,
    "carbs": 18,
    "fat": 9,
    "fiber": 0,
    "confidence": "low"
  },
  "golden-syrup": {
    "calories": 60,
    "protein": 0,
    "carbs": 16,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "dry-milk-powder": {
    "calories": 27,
    "protein": 2.7,
    "carbs": 4,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "toffee-bits": {
    "calories": 160,
    "protein": 0,
    "carbs": 16,
    "fat": 10,
    "fiber": 0,
    "confidence": "medium"
  },
  "almond-paste": {
    "calories": 130,
    "protein": 3,
    "carbs": 14,
    "fat": 7,
    "fiber": 2,
    "confidence": "medium"
  },
  "graham-cracker-crumbs": {
    "calories": 355,
    "protein": 5,
    "carbs": 65,
    "fat": 9,
    "fiber": 2,
    "confidence": "medium"
  },
  "sunflower-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "corn-oil": {
    "calories": 122,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "safflower-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "walnut-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "flaxseed-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "mustard-oil": {
    "calories": 124,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "rice-bran-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "confidence": "high"
  },
  "lard": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "fiber": 0,
    "confidence": "high"
  },
  "malt-vinegar": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "distilled-white-vinegar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "champagne-vinegar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "tabasco-sauce": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "franks-hot-sauce": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "cholula-hot-sauce": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "tapatio-hot-sauce": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "honey-mustard": {
    "calories": 30,
    "protein": 0,
    "carbs": 4,
    "fat": 1.5,
    "fiber": 0,
    "confidence": "high"
  },
  "whole-grain-mustard": {
    "calories": 10,
    "protein": 1,
    "carbs": 1,
    "fat": 0.5,
    "fiber": 0.5,
    "confidence": "high"
  },
  "spicy-brown-mustard": {
    "calories": 10,
    "protein": 1,
    "carbs": 1,
    "fat": 0.5,
    "fiber": 0.5,
    "confidence": "high"
  },
  "sweet-pickle-relish": {
    "calories": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "dill-relish": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "tartar-sauce": {
    "calories": 70,
    "protein": 0,
    "carbs": 2,
    "fat": 7,
    "fiber": 0,
    "confidence": "high"
  },
  "cocktail-sauce": {
    "calories": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "remoulade": {
    "calories": 80,
    "protein": 0,
    "carbs": 2,
    "fat": 8,
    "fiber": 0,
    "confidence": "medium"
  },
  "aioli": {
    "calories": 90,
    "protein": 0,
    "carbs": 1,
    "fat": 10,
    "fiber": 0,
    "confidence": "medium"
  },
  "horseradish-sauce": {
    "calories": 60,
    "protein": 0,
    "carbs": 2,
    "fat": 6,
    "fiber": 0,
    "confidence": "medium"
  },
  "giardiniera": {
    "calories": 15,
    "protein": 0,
    "carbs": 1,
    "fat": 1,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "duck-sauce": {
    "calories": 40,
    "protein": 0,
    "carbs": 10,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "chili-sauce": {
    "calories": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "french-dressing": {
    "calories": 60,
    "protein": 0,
    "carbs": 5,
    "fat": 4.5,
    "fiber": 0,
    "confidence": "high"
  },
  "honey-mustard-dressing": {
    "calories": 60,
    "protein": 0,
    "carbs": 4,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "greek-dressing": {
    "calories": 80,
    "protein": 0,
    "carbs": 1,
    "fat": 8,
    "fiber": 0,
    "confidence": "high"
  },
  "green-goddess-dressing": {
    "calories": 60,
    "protein": 0,
    "carbs": 1,
    "fat": 6,
    "fiber": 0,
    "confidence": "medium"
  },
  "poppyseed-dressing": {
    "calories": 70,
    "protein": 0,
    "carbs": 5,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "sesame-ginger-dressing": {
    "calories": 50,
    "protein": 0,
    "carbs": 4,
    "fat": 3.5,
    "fiber": 0,
    "confidence": "high"
  },
  "raspberry-vinaigrette": {
    "calories": 40,
    "protein": 0,
    "carbs": 4,
    "fat": 3,
    "fiber": 0,
    "confidence": "high"
  },
  "red-wine-vinaigrette": {
    "calories": 50,
    "protein": 0,
    "carbs": 2,
    "fat": 4.5,
    "fiber": 0,
    "confidence": "high"
  },
  "almond-butter": {
    "calories": 98,
    "protein": 3.4,
    "carbs": 3,
    "fat": 9,
    "fiber": 1.6,
    "confidence": "high"
  },
  "cashew-butter": {
    "calories": 94,
    "protein": 2.8,
    "carbs": 4.4,
    "fat": 7.9,
    "fiber": 0.3,
    "confidence": "high"
  },
  "sunflower-seed-butter": {
    "calories": 99,
    "protein": 2.8,
    "carbs": 4,
    "fat": 8.7,
    "fiber": 1,
    "confidence": "high"
  },
  "grape-jelly": {
    "calories": 50,
    "protein": 0,
    "carbs": 13,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "strawberry-jam": {
    "calories": 50,
    "protein": 0,
    "carbs": 13,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "raspberry-jam": {
    "calories": 50,
    "protein": 0,
    "carbs": 13,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "high"
  },
  "fig-jam": {
    "calories": 50,
    "protein": 0,
    "carbs": 12,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "high"
  },
  "light-soy-sauce": {
    "calories": 10,
    "protein": 1.3,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "shaoxing-wine": {
    "calories": 15,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "chinkiang-vinegar": {
    "calories": 8,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "char-siu-sauce": {
    "calories": 45,
    "protein": 0.5,
    "carbs": 10,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "black-bean-paste": {
    "calories": 40,
    "protein": 1.5,
    "carbs": 6,
    "fat": 1,
    "fiber": 1,
    "confidence": "medium"
  },
  "sweet-bean-sauce": {
    "calories": 40,
    "protein": 1.5,
    "carbs": 7,
    "fat": 0.5,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "vegetarian-oyster-sauce": {
    "calories": 25,
    "protein": 0.5,
    "carbs": 6,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "coconut-aminos": {
    "calories": 15,
    "protein": 0,
    "carbs": 3,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "liquid-aminos": {
    "calories": 10,
    "protein": 1.5,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "katsu-sauce": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 7,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "okonomiyaki-sauce": {
    "calories": 35,
    "protein": 0.5,
    "carbs": 8,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "japanese-curry-roux": {
    "calories": 105,
    "protein": 1.5,
    "carbs": 10,
    "fat": 7,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "mentsuyu": {
    "calories": 15,
    "protein": 1,
    "carbs": 3,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "hondashi": {
    "calories": 8,
    "protein": 1,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "wasabi-paste": {
    "calories": 8,
    "protein": 0,
    "carbs": 1.5,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "pickled-ginger": {
    "calories": 10,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "goma-dressing": {
    "calories": 60,
    "protein": 1,
    "carbs": 3,
    "fat": 5,
    "fiber": 0,
    "confidence": "medium"
  },
  "yuzu-juice": {
    "calories": 6,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "tom-yum-paste": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 4,
    "fat": 1.5,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "nam-prik-pao": {
    "calories": 60,
    "protein": 0.5,
    "carbs": 7,
    "fat": 3.5,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "thai-sweet-soy": {
    "calories": 45,
    "protein": 0.5,
    "carbs": 11,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "golden-mountain-sauce": {
    "calories": 12,
    "protein": 1,
    "carbs": 2,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "rendang-paste": {
    "calories": 45,
    "protein": 0.5,
    "carbs": 4,
    "fat": 3,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "galangal-paste": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "makrut-lime-leaves": {
    "calories": 1,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "tamarind-concentrate": {
    "calories": 35,
    "protein": 0.3,
    "carbs": 9,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "belacan": {
    "calories": 8,
    "protein": 1.5,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "sazon-seasoning": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "recaito": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "achiote-paste": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 5,
    "fat": 1,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "annatto": {
    "calories": 4,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "low"
  },
  "epazote": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "green-seasoning": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "ginger-scallion-sauce": {
    "calories": 60,
    "protein": 0.3,
    "carbs": 1,
    "fat": 6,
    "fiber": 0,
    "confidence": "medium"
  },
  "thai-fish-sauce": {
    "calories": 3,
    "protein": 0.7,
    "carbs": 0.3,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "mole-paste": {
    "calories": 60,
    "protein": 1,
    "carbs": 7,
    "fat": 3,
    "fiber": 1,
    "confidence": "medium"
  },
  "adobo-paste": {
    "calories": 25,
    "protein": 0.5,
    "carbs": 4,
    "fat": 1,
    "fiber": 1,
    "confidence": "medium"
  },
  "banana-leaves": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "low"
  },
  "fine-sea-salt": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "table-salt": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "pink-himalayan-salt": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "smoked-salt": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "pink-peppercorns": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.4,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "green-peppercorns": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.6,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "rainbow-peppercorns": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.7,
    "fat": 0.1,
    "fiber": 0.7,
    "confidence": "high"
  },
  "dried-basil": {
    "calories": 2,
    "protein": 0.2,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "high"
  },
  "dried-cilantro": {
    "calories": 1,
    "protein": 0.1,
    "carbs": 0.3,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "dried-mint": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "high"
  },
  "dried-chives": {
    "calories": 1,
    "protein": 0.1,
    "carbs": 0.1,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "medium"
  },
  "dried-savory": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 1,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "culinary-lavender": {
    "calories": 1,
    "protein": 0,
    "carbs": 0.2,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "low"
  },
  "ground-cardamom": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.4,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "high"
  },
  "ground-mace": {
    "calories": 8,
    "protein": 0.1,
    "carbs": 0.9,
    "fat": 0.6,
    "fiber": 0.4,
    "confidence": "high"
  },
  "asafoetida": {
    "calories": 6,
    "protein": 0.1,
    "carbs": 1.3,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "medium"
  },
  "ajwain": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1,
    "fat": 0.4,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "nigella-seeds": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 0.9,
    "fat": 0.4,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "ground-fennel": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1,
    "fat": 0.3,
    "fiber": 0.8,
    "confidence": "high"
  },
  "anise-seed": {
    "calories": 7,
    "protein": 0.4,
    "carbs": 1.1,
    "fat": 0.3,
    "fiber": 0.3,
    "confidence": "high"
  },
  "aleppo-pepper": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "guajillo-chili-powder": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "chile-de-arbol": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "cinnamon-sticks": {
    "calories": 6,
    "protein": 0.1,
    "carbs": 2,
    "fat": 0,
    "fiber": 1.3,
    "confidence": "high"
  },
  "whole-nutmeg": {
    "calories": 12,
    "protein": 0.1,
    "carbs": 1.1,
    "fat": 0.8,
    "fiber": 0.5,
    "confidence": "high"
  },
  "whole-allspice": {
    "calories": 5,
    "protein": 0.1,
    "carbs": 1.4,
    "fat": 0.2,
    "fiber": 0.4,
    "confidence": "high"
  },
  "fajita-seasoning": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 1,
    "fat": 0.1,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "baharat": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "pumpkin-pie-spice": {
    "calories": 6,
    "protein": 0.1,
    "carbs": 1.4,
    "fat": 0.2,
    "fiber": 0.8,
    "confidence": "high"
  },
  "apple-pie-spice": {
    "calories": 6,
    "protein": 0.1,
    "carbs": 1.5,
    "fat": 0.1,
    "fiber": 0.9,
    "confidence": "high"
  },
  "montreal-steak-seasoning": {
    "calories": 3,
    "protein": 0.2,
    "carbs": 0.7,
    "fat": 0.1,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "greek-seasoning": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 0.8,
    "fat": 0.1,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "chaat-masala": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 1,
    "fat": 0.1,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "tandoori-masala": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "shawarma-seasoning": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "blackening-seasoning": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 0.9,
    "fat": 0.2,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "bbq-rub": {
    "calories": 7,
    "protein": 0.1,
    "carbs": 1.6,
    "fat": 0.1,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "pickling-spice": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.2,
    "fat": 0.2,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "mulling-spices": {
    "calories": 6,
    "protein": 0.1,
    "carbs": 1.4,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "low"
  },
  "gomasio": {
    "calories": 15,
    "protein": 0.5,
    "carbs": 0.6,
    "fat": 1.3,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "vadouvan-curry": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.3,
    "fiber": 0.6,
    "confidence": "low"
  },
  "hot-paprika": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.3,
    "fiber": 0.8,
    "confidence": "high"
  },
  "ground-anise": {
    "calories": 7,
    "protein": 0.4,
    "carbs": 1.1,
    "fat": 0.3,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "adobo-con-pimienta": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "medium"
  },
  "lima-beans": {
    "calories": 300,
    "protein": 18,
    "carbs": 54,
    "fat": 1,
    "fiber": 15,
    "confidence": "high"
  },
  "butter-beans": {
    "calories": 300,
    "protein": 18,
    "carbs": 54,
    "fat": 1,
    "fiber": 15,
    "confidence": "high"
  },
  "great-northern-beans": {
    "calories": 320,
    "protein": 21,
    "carbs": 58,
    "fat": 1,
    "fiber": 21,
    "confidence": "high"
  },
  "whole-peeled-tomatoes": {
    "calories": 140,
    "protein": 7,
    "carbs": 31,
    "fat": 1,
    "fiber": 7,
    "confidence": "high"
  },
  "fire-roasted-tomatoes": {
    "calories": 75,
    "protein": 3,
    "carbs": 16,
    "fat": 0,
    "fiber": 4,
    "confidence": "high"
  },
  "tomato-passata": {
    "calories": 75,
    "protein": 3,
    "carbs": 15,
    "fat": 0,
    "fiber": 3,
    "confidence": "high"
  },
  "tomato-puree": {
    "calories": 270,
    "protein": 12,
    "carbs": 63,
    "fat": 2,
    "fiber": 12,
    "confidence": "high"
  },
  "stewed-tomatoes": {
    "calories": 110,
    "protein": 3,
    "carbs": 26,
    "fat": 0,
    "fiber": 4,
    "confidence": "high"
  },
  "rotel": {
    "calories": 45,
    "protein": 2,
    "carbs": 10,
    "fat": 0,
    "fiber": 2,
    "confidence": "high"
  },
  "canned-corn": {
    "calories": 270,
    "protein": 9,
    "carbs": 60,
    "fat": 3,
    "fiber": 9,
    "confidence": "high"
  },
  "canned-peas": {
    "calories": 210,
    "protein": 13,
    "carbs": 38,
    "fat": 1,
    "fiber": 13,
    "confidence": "high"
  },
  "canned-green-beans": {
    "calories": 60,
    "protein": 3,
    "carbs": 12,
    "fat": 0,
    "fiber": 6,
    "confidence": "high"
  },
  "canned-carrots": {
    "calories": 90,
    "protein": 2,
    "carbs": 21,
    "fat": 0,
    "fiber": 6,
    "confidence": "high"
  },
  "canned-mushrooms": {
    "calories": 40,
    "protein": 4,
    "carbs": 7,
    "fat": 0,
    "fiber": 4,
    "confidence": "high"
  },
  "canned-beets": {
    "calories": 130,
    "protein": 4,
    "carbs": 30,
    "fat": 0,
    "fiber": 6,
    "confidence": "high"
  },
  "canned-peaches": {
    "calories": 190,
    "protein": 2,
    "carbs": 48,
    "fat": 0,
    "fiber": 4,
    "confidence": "high"
  },
  "canned-pineapple": {
    "calories": 280,
    "protein": 2,
    "carbs": 70,
    "fat": 0,
    "fiber": 5,
    "confidence": "high"
  },
  "mandarin-oranges": {
    "calories": 160,
    "protein": 2,
    "carbs": 40,
    "fat": 0,
    "fiber": 3,
    "confidence": "high"
  },
  "canned-pears": {
    "calories": 180,
    "protein": 1,
    "carbs": 47,
    "fat": 0,
    "fiber": 6,
    "confidence": "high"
  },
  "tart-cherries": {
    "calories": 150,
    "protein": 2,
    "carbs": 36,
    "fat": 0,
    "fiber": 4,
    "confidence": "medium"
  },
  "fruit-cocktail": {
    "calories": 180,
    "protein": 1,
    "carbs": 46,
    "fat": 0,
    "fiber": 3,
    "confidence": "high"
  },
  "canned-oysters": {
    "calories": 140,
    "protein": 12,
    "carbs": 6,
    "fat": 8,
    "fiber": 0,
    "confidence": "medium"
  },
  "tuna-in-oil": {
    "calories": 190,
    "protein": 24,
    "carbs": 0,
    "fat": 10,
    "fiber": 0,
    "confidence": "high"
  },
  "bone-broth": {
    "calories": 45,
    "protein": 9,
    "carbs": 1,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "mushroom-broth": {
    "calories": 15,
    "protein": 1,
    "carbs": 3,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "cream-of-mushroom": {
    "calories": 225,
    "protein": 4,
    "carbs": 22,
    "fat": 13,
    "fiber": 2,
    "confidence": "high"
  },
  "chicken-noodle-soup": {
    "calories": 150,
    "protein": 7,
    "carbs": 21,
    "fat": 4,
    "fiber": 2,
    "confidence": "high"
  },
  "minestrone-soup": {
    "calories": 210,
    "protein": 9,
    "carbs": 40,
    "fat": 3,
    "fiber": 9,
    "confidence": "medium"
  },
  "clam-chowder": {
    "calories": 380,
    "protein": 18,
    "carbs": 42,
    "fat": 15,
    "fiber": 2,
    "confidence": "medium"
  },
  "black-olives": {
    "calories": 120,
    "protein": 1,
    "carbs": 7,
    "fat": 11,
    "fiber": 3,
    "confidence": "high"
  },
  "bread-and-butter-pickles": {
    "calories": 160,
    "protein": 0,
    "carbs": 40,
    "fat": 0,
    "fiber": 2,
    "confidence": "medium"
  },
  "banana-peppers": {
    "calories": 40,
    "protein": 2,
    "carbs": 8,
    "fat": 0,
    "fiber": 4,
    "confidence": "medium"
  },
  "green-chiles": {
    "calories": 20,
    "protein": 1,
    "carbs": 4,
    "fat": 0,
    "fiber": 2,
    "confidence": "high"
  },
  "enchilada-sauce": {
    "calories": 90,
    "protein": 2,
    "carbs": 13,
    "fat": 3,
    "fiber": 3,
    "confidence": "medium"
  },
  "cherry-pie-filling": {
    "calories": 560,
    "protein": 2,
    "carbs": 140,
    "fat": 0,
    "fiber": 4,
    "confidence": "medium"
  },
  "apple-pie-filling": {
    "calories": 500,
    "protein": 1,
    "carbs": 126,
    "fat": 0,
    "fiber": 6,
    "confidence": "medium"
  },
  "pumpkin-pie-filling": {
    "calories": 580,
    "protein": 7,
    "carbs": 140,
    "fat": 2,
    "fiber": 18,
    "confidence": "medium"
  },
  "frozen-edamame": {
    "calories": 120,
    "protein": 11,
    "carbs": 10,
    "fat": 5,
    "fiber": 5,
    "confidence": "high"
  },
  "frozen-onion-rings": {
    "calories": 230,
    "protein": 3,
    "carbs": 29,
    "fat": 12,
    "fiber": 2,
    "confidence": "medium"
  },
  "frozen-hash-brown-patties": {
    "calories": 150,
    "protein": 1,
    "carbs": 15,
    "fat": 9,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-potstickers": {
    "calories": 45,
    "protein": 2,
    "carbs": 6,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "frozen-egg-rolls": {
    "calories": 190,
    "protein": 6,
    "carbs": 24,
    "fat": 8,
    "fiber": 2,
    "confidence": "medium"
  },
  "frozen-fish-fillets": {
    "calories": 170,
    "protein": 9,
    "carbs": 13,
    "fat": 9,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-cod-fillets": {
    "calories": 90,
    "protein": 20,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "confidence": "high"
  },
  "frozen-salmon-fillets": {
    "calories": 175,
    "protein": 19,
    "carbs": 0,
    "fat": 11,
    "fiber": 0,
    "confidence": "high"
  },
  "frozen-tilapia": {
    "calories": 110,
    "protein": 23,
    "carbs": 0,
    "fat": 2,
    "fiber": 0,
    "confidence": "high"
  },
  "frozen-blueberries": {
    "calories": 80,
    "protein": 1,
    "carbs": 19,
    "fat": 0,
    "fiber": 4,
    "confidence": "high"
  },
  "frozen-strawberries": {
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0,
    "fiber": 3,
    "confidence": "high"
  },
  "frozen-raspberries": {
    "calories": 65,
    "protein": 2,
    "carbs": 15,
    "fat": 1,
    "fiber": 8,
    "confidence": "high"
  },
  "frozen-okra": {
    "calories": 35,
    "protein": 2,
    "carbs": 7,
    "fat": 0,
    "fiber": 3,
    "confidence": "high"
  },
  "frozen-brussels-sprouts": {
    "calories": 40,
    "protein": 3,
    "carbs": 8,
    "fat": 0,
    "fiber": 3,
    "confidence": "high"
  },
  "frozen-pearl-onions": {
    "calories": 45,
    "protein": 1,
    "carbs": 11,
    "fat": 0,
    "fiber": 2,
    "confidence": "medium"
  },
  "vanilla-ice-cream": {
    "calories": 275,
    "protein": 5,
    "carbs": 31,
    "fat": 15,
    "fiber": 1,
    "confidence": "high"
  },
  "whipped-topping": {
    "calories": 150,
    "protein": 1,
    "carbs": 12,
    "fat": 11,
    "fiber": 0,
    "confidence": "medium"
  },
  "frozen-pie-crust": {
    "calories": 880,
    "protein": 10,
    "carbs": 80,
    "fat": 56,
    "fiber": 2,
    "confidence": "medium"
  },
  "frozen-garlic-bread": {
    "calories": 170,
    "protein": 4,
    "carbs": 20,
    "fat": 8,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-pancakes": {
    "calories": 80,
    "protein": 2,
    "carbs": 15,
    "fat": 1,
    "fiber": 1,
    "confidence": "medium"
  },
  "roasted-almonds": {
    "calories": 170,
    "protein": 6,
    "carbs": 6,
    "fat": 15,
    "fiber": 3,
    "confidence": "high"
  },
  "pecan-halves": {
    "calories": 196,
    "protein": 3,
    "carbs": 4,
    "fat": 20,
    "fiber": 3,
    "confidence": "high"
  },
  "macadamia-nuts": {
    "calories": 204,
    "protein": 2,
    "carbs": 4,
    "fat": 21,
    "fiber": 2,
    "confidence": "high"
  },
  "brazil-nuts": {
    "calories": 187,
    "protein": 4,
    "carbs": 3,
    "fat": 19,
    "fiber": 2,
    "confidence": "high"
  },
  "ground-flaxseed": {
    "calories": 37,
    "protein": 1,
    "carbs": 2,
    "fat": 3,
    "fiber": 2,
    "confidence": "high"
  },
  "hemp-hearts": {
    "calories": 57,
    "protein": 3,
    "carbs": 1,
    "fat": 4,
    "fiber": 1,
    "confidence": "high"
  },
  "shelled-pumpkin-seeds": {
    "calories": 151,
    "protein": 7,
    "carbs": 5,
    "fat": 13,
    "fiber": 2,
    "confidence": "high"
  },
  "roasted-peanuts": {
    "calories": 166,
    "protein": 7,
    "carbs": 6,
    "fat": 14,
    "fiber": 2,
    "confidence": "high"
  },
  "water-crackers": {
    "calories": 110,
    "protein": 3,
    "carbs": 22,
    "fat": 1,
    "fiber": 1,
    "confidence": "medium"
  },
  "pretzel-sticks": {
    "calories": 110,
    "protein": 3,
    "carbs": 23,
    "fat": 1,
    "fiber": 1,
    "confidence": "high"
  },
  "popcorn-popped": {
    "calories": 40,
    "protein": 1,
    "carbs": 5,
    "fat": 2,
    "fiber": 1,
    "confidence": "high"
  },
  "muesli": {
    "calories": 290,
    "protein": 8,
    "carbs": 50,
    "fat": 7,
    "fiber": 6,
    "confidence": "medium"
  },
  "herbal-tea": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "oolong-tea": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "chamomile-tea": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "grape-juice": {
    "calories": 150,
    "protein": 1,
    "carbs": 37,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "pomegranate-juice": {
    "calories": 135,
    "protein": 0,
    "carbs": 33,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "lemonade": {
    "calories": 110,
    "protein": 0,
    "carbs": 28,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "root-beer": {
    "calories": 120,
    "protein": 0,
    "carbs": 32,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "lemon-lime-soda": {
    "calories": 100,
    "protein": 0,
    "carbs": 26,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "dry-sherry": {
    "calories": 15,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "port-wine": {
    "calories": 24,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "dark-rum": {
    "calories": 32,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "cognac": {
    "calories": 33,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "high"
  },
  "dry-vermouth": {
    "calories": 16,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "hard-cider": {
    "calories": 210,
    "protein": 0,
    "carbs": 24,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "espresso-powder": {
    "calories": 2,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "confidence": "medium"
  },
  "sliced-almonds": {
    "calories": 170,
    "protein": 6,
    "carbs": 6,
    "fat": 15,
    "fiber": 3,
    "confidence": "high"
  },
  "dry-roasted-peanuts": {
    "calories": 166,
    "protein": 7,
    "carbs": 6,
    "fat": 14,
    "fiber": 2,
    "confidence": "high"
  },
  "chicken-stock": {
    "calories": 15,
    "protein": 2,
    "carbs": 1,
    "fat": 0.5,
    "confidence": "high"
  },
  "beef-stock": {
    "calories": 20,
    "protein": 3,
    "carbs": 1,
    "fat": 0.5,
    "confidence": "high"
  },
  "alfredo-sauce": {
    "calories": 200,
    "protein": 4,
    "carbs": 6,
    "fat": 18,
    "fiber": 0,
    "confidence": "high"
  },
  "pizza-sauce": {
    "calories": 35,
    "protein": 1,
    "carbs": 6,
    "fat": 1,
    "fiber": 1,
    "confidence": "high"
  },
  "green-peas": {
    "calories": 117,
    "protein": 8,
    "carbs": 21,
    "fat": 0.6,
    "fiber": 7,
    "confidence": "high"
  },
  "corn-on-the-cob": {
    "calories": 90,
    "protein": 3,
    "carbs": 19,
    "fat": 1,
    "fiber": 2,
    "confidence": "high"
  },
  "whole-chicken": {
    "calories": 240,
    "protein": 27,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "beef-short-ribs": {
    "calories": 290,
    "protein": 24,
    "carbs": 0,
    "fat": 21,
    "confidence": "high"
  },
  "margarine": {
    "calories": 100,
    "protein": 0,
    "carbs": 0,
    "fat": 11,
    "confidence": "high"
  },
  "whipped-cream": {
    "calories": 15,
    "protein": 0,
    "carbs": 1,
    "fat": 1,
    "confidence": "high"
  },
  "frozen-yogurt": {
    "calories": 110,
    "protein": 3,
    "carbs": 22,
    "fat": 2,
    "confidence": "high"
  },
  "sorbet": {
    "calories": 120,
    "protein": 0,
    "carbs": 30,
    "fat": 0,
    "confidence": "high"
  },
  "popsicles": {
    "calories": 45,
    "protein": 0,
    "carbs": 11,
    "fat": 0,
    "confidence": "high"
  },
  "waffle-mix": {
    "calories": 400,
    "protein": 9,
    "carbs": 80,
    "fat": 4,
    "fiber": 2,
    "confidence": "high"
  },
  "baking-mix": {
    "calories": 480,
    "protein": 9,
    "carbs": 84,
    "fat": 12,
    "fiber": 3,
    "confidence": "high"
  },
  "brown-gravy": {
    "calories": 25,
    "protein": 1,
    "carbs": 4,
    "fat": 1,
    "confidence": "high"
  },
  "beef-bouillon": {
    "calories": 15,
    "protein": 1,
    "carbs": 1,
    "fat": 0.5,
    "confidence": "high"
  },
  "bratwurst": {
    "calories": 280,
    "protein": 12,
    "carbs": 2,
    "fat": 25,
    "confidence": "high"
  },
  "andouille-sausage": {
    "calories": 200,
    "protein": 13,
    "carbs": 2,
    "fat": 16,
    "confidence": "high"
  },
  "cream-of-celery": {
    "calories": 220,
    "protein": 4,
    "carbs": 22,
    "fat": 13,
    "fiber": 2,
    "confidence": "high"
  },
  "processed-cheese-loaf": {
    "calories": 80,
    "protein": 4,
    "carbs": 3,
    "fat": 6,
    "confidence": "high"
  },
  "sloppy-joe-sauce": {
    "calories": 240,
    "protein": 4,
    "carbs": 52,
    "fat": 1,
    "fiber": 4,
    "confidence": "medium"
  },
  "vodka-sauce": {
    "calories": 120,
    "protein": 2,
    "carbs": 11,
    "fat": 7,
    "fiber": 2,
    "confidence": "high"
  },
  "chuck-roast": {
    "calories": 71,
    "protein": 6.6,
    "carbs": 0,
    "fat": 4.9,
    "fiber": 0,
    "confidence": "high"
  },
  "hanger-steak": {
    "calories": 60,
    "protein": 6.8,
    "carbs": 0,
    "fat": 3.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "flat-iron-steak": {
    "calories": 61,
    "protein": 6.9,
    "carbs": 0,
    "fat": 3.6,
    "fiber": 0,
    "confidence": "medium"
  },
  "tri-tip": {
    "calories": 58,
    "protein": 7.1,
    "carbs": 0,
    "fat": 3.1,
    "fiber": 0,
    "confidence": "medium"
  },
  "top-round": {
    "calories": 50,
    "protein": 7.5,
    "carbs": 0,
    "fat": 2,
    "fiber": 0,
    "confidence": "high"
  },
  "eye-of-round": {
    "calories": 48,
    "protein": 7.6,
    "carbs": 0,
    "fat": 1.8,
    "fiber": 0,
    "confidence": "high"
  },
  "corned-beef": {
    "calories": 71,
    "protein": 5.1,
    "carbs": 0.1,
    "fat": 5.4,
    "fiber": 0,
    "confidence": "high"
  },
  "beef-shank": {
    "calories": 47,
    "protein": 7.7,
    "carbs": 0,
    "fat": 1.6,
    "fiber": 0,
    "confidence": "medium"
  },
  "ground-beef-80-20": {
    "calories": 72,
    "protein": 4.9,
    "carbs": 0,
    "fat": 5.7,
    "fiber": 0,
    "confidence": "high"
  },
  "pork-loin-roast": {
    "calories": 42,
    "protein": 7.5,
    "carbs": 0,
    "fat": 1.2,
    "fiber": 0,
    "confidence": "high"
  },
  "baby-back-ribs": {
    "calories": 80,
    "protein": 5.5,
    "carbs": 0,
    "fat": 6.3,
    "fiber": 0,
    "confidence": "medium"
  },
  "spare-ribs": {
    "calories": 83,
    "protein": 5.3,
    "carbs": 0,
    "fat": 6.7,
    "fiber": 0,
    "confidence": "medium"
  },
  "country-style-ribs": {
    "calories": 61,
    "protein": 6.5,
    "carbs": 0,
    "fat": 3.8,
    "fiber": 0,
    "confidence": "medium"
  },
  "ham-steak": {
    "calories": 36,
    "protein": 5.5,
    "carbs": 0.4,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "high"
  },
  "gammon": {
    "calories": 38,
    "protein": 5.6,
    "carbs": 0,
    "fat": 1.7,
    "fiber": 0,
    "confidence": "medium"
  },
  "pork-cutlet": {
    "calories": 42,
    "protein": 7.4,
    "carbs": 0,
    "fat": 1.3,
    "fiber": 0,
    "confidence": "medium"
  },
  "chicken-leg-quarters": {
    "calories": 61,
    "protein": 5.6,
    "carbs": 0,
    "fat": 4.2,
    "fiber": 0,
    "confidence": "high"
  },
  "chicken-breast-tenders": {
    "calories": 31,
    "protein": 6.6,
    "carbs": 0,
    "fat": 0.4,
    "fiber": 0,
    "confidence": "high"
  },
  "chicken-livers": {
    "calories": 33,
    "protein": 4.8,
    "carbs": 0.2,
    "fat": 1.3,
    "fiber": 0,
    "confidence": "high"
  },
  "turkey-breast-cutlet": {
    "calories": 31,
    "protein": 6.9,
    "carbs": 0,
    "fat": 0.2,
    "fiber": 0,
    "confidence": "high"
  },
  "whole-turkey": {
    "calories": 43,
    "protein": 6,
    "carbs": 0,
    "fat": 2,
    "fiber": 0,
    "confidence": "high"
  },
  "smoked-turkey-leg": {
    "calories": 47,
    "protein": 6.5,
    "carbs": 0,
    "fat": 2.3,
    "fiber": 0,
    "confidence": "medium"
  },
  "leg-of-lamb": {
    "calories": 54,
    "protein": 7.4,
    "carbs": 0,
    "fat": 2.5,
    "fiber": 0,
    "confidence": "high"
  },
  "lamb-shank": {
    "calories": 56,
    "protein": 7.3,
    "carbs": 0,
    "fat": 2.8,
    "fiber": 0,
    "confidence": "medium"
  },
  "rack-of-lamb": {
    "calories": 67,
    "protein": 6.4,
    "carbs": 0,
    "fat": 4.4,
    "fiber": 0,
    "confidence": "medium"
  },
  "veal-cutlet": {
    "calories": 43,
    "protein": 7.3,
    "carbs": 0,
    "fat": 1.4,
    "fiber": 0,
    "confidence": "medium"
  },
  "duck-breast": {
    "calories": 56,
    "protein": 5.3,
    "carbs": 0,
    "fat": 3.8,
    "fiber": 0,
    "confidence": "medium"
  },
  "cornish-hen": {
    "calories": 63,
    "protein": 5.5,
    "carbs": 0,
    "fat": 4.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "pastrami": {
    "calories": 41,
    "protein": 6,
    "carbs": 0.4,
    "fat": 1.6,
    "fiber": 0,
    "confidence": "high"
  },
  "deli-corned-beef": {
    "calories": 43,
    "protein": 4.7,
    "carbs": 0.1,
    "fat": 2.5,
    "fiber": 0,
    "confidence": "high"
  },
  "deli-roast-beef": {
    "calories": 30,
    "protein": 5.5,
    "carbs": 0.3,
    "fat": 0.7,
    "fiber": 0,
    "confidence": "high"
  },
  "bologna": {
    "calories": 87,
    "protein": 3.3,
    "carbs": 0.8,
    "fat": 7.8,
    "fiber": 0,
    "confidence": "high"
  },
  "salami": {
    "calories": 34,
    "protein": 1.9,
    "carbs": 0.2,
    "fat": 2.8,
    "fiber": 0,
    "confidence": "high"
  },
  "capicola": {
    "calories": 18,
    "protein": 2.4,
    "carbs": 0.1,
    "fat": 0.9,
    "fiber": 0,
    "confidence": "medium"
  },
  "mortadella": {
    "calories": 47,
    "protein": 2.5,
    "carbs": 0.4,
    "fat": 3.8,
    "fiber": 0,
    "confidence": "medium"
  },
  "head-cheese": {
    "calories": 43,
    "protein": 3.8,
    "carbs": 0.1,
    "fat": 3,
    "fiber": 0,
    "confidence": "low"
  },
  "liverwurst": {
    "calories": 92,
    "protein": 4,
    "carbs": 0.6,
    "fat": 8.1,
    "fiber": 0,
    "confidence": "medium"
  },
  "beef-franks": {
    "calories": 150,
    "protein": 5.4,
    "carbs": 2,
    "fat": 13,
    "fiber": 0,
    "confidence": "high"
  },
  "turkey-franks": {
    "calories": 100,
    "protein": 6,
    "carbs": 2,
    "fat": 8,
    "fiber": 0,
    "confidence": "high"
  },
  "breakfast-links": {
    "calories": 140,
    "protein": 6,
    "carbs": 1,
    "fat": 12,
    "fiber": 0,
    "confidence": "high"
  },
  "breakfast-patties": {
    "calories": 150,
    "protein": 6,
    "carbs": 1,
    "fat": 13,
    "fiber": 0,
    "confidence": "high"
  },
  "two-percent-milk": {
    "calories": 122,
    "protein": 8,
    "carbs": 12,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "one-percent-milk": {
    "calories": 102,
    "protein": 8,
    "carbs": 12,
    "fat": 2.5,
    "fiber": 0,
    "confidence": "high"
  },
  "skim-milk": {
    "calories": 83,
    "protein": 8,
    "carbs": 12,
    "fat": 0.2,
    "fiber": 0,
    "confidence": "high"
  },
  "lactose-free-milk": {
    "calories": 122,
    "protein": 8,
    "carbs": 12,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "a2-milk": {
    "calories": 122,
    "protein": 8,
    "carbs": 12,
    "fat": 5,
    "fiber": 0,
    "confidence": "high"
  },
  "chocolate-milk": {
    "calories": 190,
    "protein": 8,
    "carbs": 30,
    "fat": 5,
    "fiber": 1,
    "confidence": "high"
  },
  "light-cream": {
    "calories": 468,
    "protein": 6,
    "carbs": 9,
    "fat": 46,
    "fiber": 0,
    "confidence": "high"
  },
  "clotted-cream": {
    "calories": 1056,
    "protein": 4,
    "carbs": 6,
    "fat": 110,
    "fiber": 0,
    "confidence": "medium"
  },
  "creme-fraiche": {
    "calories": 880,
    "protein": 5,
    "carbs": 7,
    "fat": 92,
    "fiber": 0,
    "confidence": "medium"
  },
  "double-cream": {
    "calories": 1078,
    "protein": 4,
    "carbs": 6,
    "fat": 117,
    "fiber": 0,
    "confidence": "medium"
  },
  "manufacturing-cream": {
    "calories": 810,
    "protein": 5,
    "carbs": 7,
    "fat": 86,
    "fiber": 0,
    "confidence": "medium"
  },
  "kefir": {
    "calories": 110,
    "protein": 11,
    "carbs": 12,
    "fat": 2,
    "fiber": 0,
    "confidence": "high"
  },
  "drinkable-yogurt": {
    "calories": 150,
    "protein": 8,
    "carbs": 24,
    "fat": 3,
    "fiber": 0,
    "confidence": "medium"
  },
  "fromage-blanc": {
    "calories": 120,
    "protein": 14,
    "carbs": 6,
    "fat": 4,
    "fiber": 0,
    "confidence": "medium"
  },
  "vanilla-yogurt": {
    "calories": 190,
    "protein": 9,
    "carbs": 31,
    "fat": 3,
    "fiber": 0,
    "confidence": "high"
  },
  "fruit-yogurt": {
    "calories": 170,
    "protein": 7,
    "carbs": 30,
    "fat": 2,
    "fiber": 0,
    "confidence": "medium"
  },
  "australian-yogurt": {
    "calories": 180,
    "protein": 8,
    "carbs": 18,
    "fat": 9,
    "fiber": 0,
    "confidence": "medium"
  },
  "french-yogurt": {
    "calories": 150,
    "protein": 7,
    "carbs": 16,
    "fat": 7,
    "fiber": 0,
    "confidence": "medium"
  },
  "coconut-yogurt": {
    "calories": 180,
    "protein": 1,
    "carbs": 16,
    "fat": 13,
    "fiber": 2,
    "confidence": "medium"
  },
  "soy-yogurt": {
    "calories": 150,
    "protein": 8,
    "carbs": 20,
    "fat": 4,
    "fiber": 1,
    "confidence": "medium"
  },
  "lassi": {
    "calories": 160,
    "protein": 5,
    "carbs": 29,
    "fat": 3,
    "fiber": 0,
    "confidence": "medium"
  },
  "salted-butter": {
    "calories": 102,
    "protein": 0.1,
    "carbs": 0,
    "fat": 11.5,
    "fiber": 0,
    "confidence": "high"
  },
  "unsalted-butter": {
    "calories": 102,
    "protein": 0.1,
    "carbs": 0,
    "fat": 11.5,
    "fiber": 0,
    "confidence": "high"
  },
  "european-butter": {
    "calories": 110,
    "protein": 0.1,
    "carbs": 0,
    "fat": 12,
    "fiber": 0,
    "confidence": "high"
  },
  "cultured-butter": {
    "calories": 108,
    "protein": 0.1,
    "carbs": 0,
    "fat": 12,
    "fiber": 0,
    "confidence": "medium"
  },
  "whipped-butter": {
    "calories": 70,
    "protein": 0.1,
    "carbs": 0,
    "fat": 7,
    "fiber": 0,
    "confidence": "medium"
  },
  "browned-butter": {
    "calories": 110,
    "protein": 0.1,
    "carbs": 0,
    "fat": 12.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "cashew-milk": {
    "calories": 25,
    "protein": 1,
    "carbs": 1,
    "fat": 2,
    "fiber": 0,
    "confidence": "medium"
  },
  "hemp-milk": {
    "calories": 60,
    "protein": 3,
    "carbs": 1,
    "fat": 5,
    "fiber": 0,
    "confidence": "medium"
  },
  "rice-milk": {
    "calories": 113,
    "protein": 0.7,
    "carbs": 22,
    "fat": 2.3,
    "fiber": 0,
    "confidence": "medium"
  },
  "pea-milk": {
    "calories": 70,
    "protein": 8,
    "carbs": 0,
    "fat": 4.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "macadamia-milk": {
    "calories": 50,
    "protein": 1,
    "carbs": 1,
    "fat": 5,
    "fiber": 0,
    "confidence": "medium"
  },
  "flax-milk": {
    "calories": 25,
    "protein": 0,
    "carbs": 1,
    "fat": 2.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "eggnog": {
    "calories": 340,
    "protein": 10,
    "carbs": 34,
    "fat": 19,
    "fiber": 0,
    "confidence": "high"
  },
  "custard-base": {
    "calories": 300,
    "protein": 7,
    "carbs": 28,
    "fat": 18,
    "fiber": 0,
    "confidence": "medium"
  },
  "aerosol-whipped-cream": {
    "calories": 15,
    "protein": 0,
    "carbs": 1,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "flavored-cream-cheese": {
    "calories": 50,
    "protein": 1,
    "carbs": 2,
    "fat": 4.5,
    "fiber": 0,
    "confidence": "medium"
  },
  "whipped-cream-cheese": {
    "calories": 35,
    "protein": 1,
    "carbs": 1,
    "fat": 3.5,
    "fiber": 0,
    "confidence": "high"
  },
  "raw-milk": {
    "calories": 150,
    "protein": 8,
    "carbs": 12,
    "fat": 8,
    "fiber": 0,
    "confidence": "medium"
  },
  "dulce-de-leche-spread": {
    "calories": 60,
    "protein": 1,
    "carbs": 12,
    "fat": 1,
    "fiber": 0,
    "confidence": "medium"
  },
  "clarified-butter": {
    "calories": 112,
    "protein": 0,
    "carbs": 0,
    "fat": 12.7,
    "fiber": 0,
    "confidence": "high"
  },
  "sweet-cream-buttermilk": {
    "calories": 98,
    "protein": 8,
    "carbs": 12,
    "fat": 2,
    "fiber": 0,
    "confidence": "high"
  }
};
