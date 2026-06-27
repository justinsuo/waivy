import type { Ingredient } from "@/lib/types";
import type { NutritionPerUnit } from "@/data/ingredientNutrition";

/** Catalog expansion 2 — specialty / international / long-tail kitchen ingredients. */
export const EXTRA_INGREDIENTS_2: Ingredient[] = [
  {
    "id": "venison",
    "name": "Venison",
    "category": "protein",
    "estimatedUnitCost": 1.25,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 4,
    "tags": [
      "game",
      "red-meat",
      "lean",
      "wild"
    ]
  },
  {
    "id": "ground-venison",
    "name": "Ground Venison",
    "category": "protein",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 3,
    "tags": [
      "game",
      "ground",
      "lean",
      "red-meat"
    ]
  },
  {
    "id": "bison",
    "name": "Bison",
    "category": "protein",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "16 oz steak",
    "shelfLifeDays": 4,
    "tags": [
      "game",
      "red-meat",
      "lean"
    ]
  },
  {
    "id": "ground-bison",
    "name": "Ground Bison",
    "category": "protein",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 3,
    "tags": [
      "game",
      "ground",
      "lean",
      "red-meat"
    ]
  },
  {
    "id": "elk",
    "name": "Elk",
    "category": "protein",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 4,
    "tags": [
      "game",
      "red-meat",
      "lean",
      "wild"
    ]
  },
  {
    "id": "rabbit",
    "name": "Rabbit",
    "category": "protein",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "2.5 lb whole rabbit",
    "shelfLifeDays": 3,
    "tags": [
      "game",
      "lean",
      "white-meat"
    ]
  },
  {
    "id": "quail",
    "name": "Quail",
    "category": "protein",
    "estimatedUnitCost": 3.75,
    "unit": "piece",
    "commonPackageSize": "4 oz semi-boneless bird",
    "shelfLifeDays": 3,
    "tags": [
      "game",
      "poultry",
      "small-bird"
    ]
  },
  {
    "id": "goose",
    "name": "Goose",
    "category": "protein",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "10 lb whole goose",
    "shelfLifeDays": 3,
    "tags": [
      "game",
      "poultry",
      "dark-meat"
    ]
  },
  {
    "id": "goat-meat",
    "name": "Goat Meat",
    "category": "protein",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "16 oz bone-in pieces",
    "shelfLifeDays": 3,
    "tags": [
      "world",
      "lean",
      "red-meat",
      "halal"
    ]
  },
  {
    "id": "beef-liver",
    "name": "Beef Liver",
    "category": "protein",
    "estimatedUnitCost": 0.35,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "organ",
      "offal",
      "nutrient-dense"
    ]
  },
  {
    "id": "chicken-gizzards",
    "name": "Chicken Gizzards",
    "category": "protein",
    "estimatedUnitCost": 0.2,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "organ",
      "offal",
      "poultry"
    ]
  },
  {
    "id": "beef-tongue",
    "name": "Beef Tongue",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "2 lb whole tongue",
    "shelfLifeDays": 3,
    "tags": [
      "organ",
      "offal",
      "red-meat"
    ]
  },
  {
    "id": "beef-tripe",
    "name": "Beef Tripe",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "organ",
      "offal",
      "menudo"
    ]
  },
  {
    "id": "beef-heart",
    "name": "Beef Heart",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "organ",
      "offal",
      "lean"
    ]
  },
  {
    "id": "beef-kidney",
    "name": "Beef Kidney",
    "category": "protein",
    "estimatedUnitCost": 0.3,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "organ",
      "offal"
    ]
  },
  {
    "id": "sweetbreads",
    "name": "Sweetbreads",
    "category": "protein",
    "estimatedUnitCost": 1.4,
    "unit": "oz",
    "commonPackageSize": "12 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "organ",
      "offal",
      "delicacy"
    ]
  },
  {
    "id": "marrow-bones",
    "name": "Marrow Bones",
    "category": "protein",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "2 lb cross-cut bones",
    "shelfLifeDays": 4,
    "tags": [
      "bones",
      "broth",
      "roasted",
      "collagen"
    ]
  },
  {
    "id": "picanha",
    "name": "Picanha",
    "category": "protein",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "2.5 lb top sirloin cap",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "specialty-cut",
      "brazilian",
      "churrasco"
    ]
  },
  {
    "id": "denver-steak",
    "name": "Denver Steak",
    "category": "protein",
    "estimatedUnitCost": 0.78,
    "unit": "oz",
    "commonPackageSize": "12 oz steak",
    "shelfLifeDays": 4,
    "tags": [
      "beef",
      "specialty-cut",
      "chuck"
    ]
  },
  {
    "id": "beef-cheek",
    "name": "Beef Cheek",
    "category": "protein",
    "estimatedUnitCost": 0.6,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 3,
    "tags": [
      "beef",
      "braising",
      "specialty-cut",
      "barbacoa"
    ]
  },
  {
    "id": "pork-jowl",
    "name": "Pork Jowl",
    "category": "protein",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 4,
    "tags": [
      "pork",
      "specialty-cut",
      "fatty"
    ]
  },
  {
    "id": "lamb-neck",
    "name": "Lamb Neck",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "16 oz pieces",
    "shelfLifeDays": 3,
    "tags": [
      "lamb",
      "braising",
      "specialty-cut",
      "bone-in"
    ]
  },
  {
    "id": "guanciale",
    "name": "Guanciale",
    "category": "protein",
    "estimatedUnitCost": 1.6,
    "unit": "oz",
    "commonPackageSize": "8 oz piece",
    "shelfLifeDays": 60,
    "tags": [
      "charcuterie",
      "cured",
      "pork",
      "italian"
    ]
  },
  {
    "id": "nduja",
    "name": "Nduja",
    "category": "protein",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 45,
    "tags": [
      "charcuterie",
      "cured",
      "spreadable",
      "spicy",
      "calabrian"
    ]
  },
  {
    "id": "bresaola",
    "name": "Bresaola",
    "category": "protein",
    "estimatedUnitCost": 3.2,
    "unit": "oz",
    "commonPackageSize": "3 oz sliced package",
    "shelfLifeDays": 21,
    "tags": [
      "charcuterie",
      "cured",
      "beef",
      "lean",
      "italian"
    ]
  },
  {
    "id": "soppressata",
    "name": "Soppressata",
    "category": "protein",
    "estimatedUnitCost": 1.9,
    "unit": "oz",
    "commonPackageSize": "6 oz sliced package",
    "shelfLifeDays": 30,
    "tags": [
      "charcuterie",
      "cured",
      "salami",
      "italian"
    ]
  },
  {
    "id": "speck",
    "name": "Speck",
    "category": "protein",
    "estimatedUnitCost": 2.6,
    "unit": "oz",
    "commonPackageSize": "4 oz sliced package",
    "shelfLifeDays": 30,
    "tags": [
      "charcuterie",
      "cured",
      "smoked",
      "pork",
      "italian"
    ]
  },
  {
    "id": "jamon-iberico",
    "name": "Jamon Iberico",
    "category": "protein",
    "estimatedUnitCost": 8.5,
    "unit": "oz",
    "commonPackageSize": "2 oz sliced package",
    "shelfLifeDays": 30,
    "tags": [
      "charcuterie",
      "cured",
      "ham",
      "spanish",
      "delicacy"
    ]
  },
  {
    "id": "lap-yuk",
    "name": "Lap Yuk",
    "category": "protein",
    "estimatedUnitCost": 1.3,
    "unit": "oz",
    "commonPackageSize": "12 oz package",
    "shelfLifeDays": 60,
    "tags": [
      "charcuterie",
      "cured",
      "chinese",
      "pork-belly",
      "dried"
    ]
  },
  {
    "id": "lomo",
    "name": "Lomo",
    "category": "protein",
    "estimatedUnitCost": 3,
    "unit": "oz",
    "commonPackageSize": "3 oz sliced package",
    "shelfLifeDays": 30,
    "tags": [
      "charcuterie",
      "cured",
      "pork-loin",
      "spanish",
      "lean"
    ]
  },
  {
    "id": "turbot",
    "name": "Turbot",
    "category": "protein",
    "estimatedUnitCost": 2.5,
    "unit": "oz",
    "commonPackageSize": "8 oz fillet",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "white-fish",
      "flatfish",
      "delicacy"
    ]
  },
  {
    "id": "skate-wing",
    "name": "Skate Wing",
    "category": "protein",
    "estimatedUnitCost": 1.2,
    "unit": "oz",
    "commonPackageSize": "12 oz wing",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "white-fish",
      "specialty"
    ]
  },
  {
    "id": "unagi",
    "name": "Unagi",
    "category": "protein",
    "estimatedUnitCost": 2.2,
    "unit": "oz",
    "commonPackageSize": "7 oz glazed fillet",
    "shelfLifeDays": 5,
    "tags": [
      "seafood",
      "japanese",
      "grilled",
      "prepared"
    ]
  },
  {
    "id": "uni",
    "name": "Uni",
    "category": "protein",
    "estimatedUnitCost": 7,
    "unit": "oz",
    "commonPackageSize": "3.5 oz tray",
    "shelfLifeDays": 3,
    "tags": [
      "seafood",
      "japanese",
      "delicacy",
      "roe",
      "sea-urchin"
    ]
  },
  {
    "id": "conch",
    "name": "Conch",
    "category": "protein",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 3,
    "tags": [
      "seafood",
      "shellfish",
      "caribbean"
    ]
  },
  {
    "id": "abalone",
    "name": "Abalone",
    "category": "protein",
    "estimatedUnitCost": 6,
    "unit": "oz",
    "commonPackageSize": "8 oz package",
    "shelfLifeDays": 3,
    "tags": [
      "seafood",
      "shellfish",
      "delicacy"
    ]
  },
  {
    "id": "geoduck",
    "name": "Geoduck",
    "category": "protein",
    "estimatedUnitCost": 2.5,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "clam",
      "delicacy"
    ]
  },
  {
    "id": "razor-clams",
    "name": "Razor Clams",
    "category": "protein",
    "estimatedUnitCost": 1.3,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "clam"
    ]
  },
  {
    "id": "cockles",
    "name": "Cockles",
    "category": "protein",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "small"
    ]
  },
  {
    "id": "whelk",
    "name": "Whelk",
    "category": "protein",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "sea-snail"
    ]
  },
  {
    "id": "langoustine",
    "name": "Langoustine",
    "category": "protein",
    "estimatedUnitCost": 2.8,
    "unit": "oz",
    "commonPackageSize": "12 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "crustacean",
      "delicacy"
    ]
  },
  {
    "id": "frog-legs",
    "name": "Frog Legs",
    "category": "protein",
    "estimatedUnitCost": 1.4,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "specialty",
      "lean"
    ]
  },
  {
    "id": "sea-scallops",
    "name": "Sea Scallops",
    "category": "protein",
    "estimatedUnitCost": 1.6,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 2,
    "tags": [
      "seafood",
      "shellfish",
      "mollusk"
    ]
  },
  {
    "id": "escargot",
    "name": "Escargot",
    "category": "protein",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "7 oz can",
    "shelfLifeDays": 730,
    "tags": [
      "seafood",
      "french",
      "canned",
      "delicacy",
      "snails"
    ]
  },
  {
    "id": "duck-fat",
    "name": "Duck Fat",
    "category": "protein",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "7 oz jar",
    "shelfLifeDays": 180,
    "tags": [
      "fat",
      "rendered",
      "poultry",
      "cooking"
    ]
  },
  {
    "id": "foie-gras",
    "name": "Foie Gras",
    "category": "protein",
    "estimatedUnitCost": 6.5,
    "unit": "oz",
    "commonPackageSize": "8 oz lobe",
    "shelfLifeDays": 5,
    "tags": [
      "organ",
      "delicacy",
      "french",
      "fatty"
    ]
  },
  {
    "id": "wild-boar",
    "name": "Wild Boar",
    "category": "protein",
    "estimatedUnitCost": 1.3,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 4,
    "tags": [
      "game",
      "red-meat",
      "wild"
    ]
  },
  {
    "id": "ostrich",
    "name": "Ostrich",
    "category": "protein",
    "estimatedUnitCost": 1.6,
    "unit": "oz",
    "commonPackageSize": "16 oz package",
    "shelfLifeDays": 4,
    "tags": [
      "game",
      "lean",
      "red-meat",
      "exotic"
    ]
  },
  {
    "id": "gai-lan",
    "name": "Gai Lan",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "cup chopped",
    "commonPackageSize": "1 lb bunch",
    "shelfLifeDays": 5,
    "tags": [
      "asian-greens",
      "chinese-broccoli",
      "leafy"
    ]
  },
  {
    "id": "choy-sum",
    "name": "Choy Sum",
    "category": "vegetable",
    "estimatedUnitCost": 0.5,
    "unit": "cup chopped",
    "commonPackageSize": "1 lb bunch",
    "shelfLifeDays": 5,
    "tags": [
      "asian-greens",
      "leafy"
    ]
  },
  {
    "id": "yu-choi",
    "name": "Yu Choi",
    "category": "vegetable",
    "estimatedUnitCost": 0.5,
    "unit": "cup chopped",
    "commonPackageSize": "1 lb bunch",
    "shelfLifeDays": 5,
    "tags": [
      "asian-greens",
      "leafy"
    ]
  },
  {
    "id": "amaranth-greens",
    "name": "Amaranth Greens",
    "category": "vegetable",
    "estimatedUnitCost": 0.6,
    "unit": "cup chopped",
    "commonPackageSize": "1 lb bunch",
    "shelfLifeDays": 4,
    "tags": [
      "leafy",
      "callaloo",
      "world"
    ]
  },
  {
    "id": "chrysanthemum-greens",
    "name": "Chrysanthemum Greens",
    "category": "vegetable",
    "estimatedUnitCost": 0.7,
    "unit": "cup chopped",
    "commonPackageSize": "8 oz bunch",
    "shelfLifeDays": 4,
    "tags": [
      "asian-greens",
      "tong-ho",
      "leafy"
    ]
  },
  {
    "id": "pea-shoots",
    "name": "Pea Shoots",
    "category": "vegetable",
    "estimatedUnitCost": 0.65,
    "unit": "cup",
    "commonPackageSize": "4 oz container",
    "shelfLifeDays": 4,
    "tags": [
      "asian-greens",
      "tendrils",
      "delicate"
    ]
  },
  {
    "id": "lions-mane-mushroom",
    "name": "Lion's Mane Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 0.94,
    "unit": "oz",
    "commonPackageSize": "4 oz package",
    "shelfLifeDays": 7,
    "tags": [
      "specialty-mushroom",
      "gourmet",
      "umami"
    ]
  },
  {
    "id": "chanterelle-mushroom",
    "name": "Chanterelle Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "4 oz package",
    "shelfLifeDays": 7,
    "tags": [
      "specialty-mushroom",
      "wild",
      "gourmet"
    ]
  },
  {
    "id": "morel-mushroom",
    "name": "Morel Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 3.75,
    "unit": "oz",
    "commonPackageSize": "2 oz package",
    "shelfLifeDays": 5,
    "tags": [
      "specialty-mushroom",
      "wild",
      "gourmet",
      "seasonal"
    ]
  },
  {
    "id": "black-trumpet-mushroom",
    "name": "Black Trumpet Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 2.25,
    "unit": "oz",
    "commonPackageSize": "2 oz package",
    "shelfLifeDays": 6,
    "tags": [
      "specialty-mushroom",
      "wild",
      "gourmet"
    ]
  },
  {
    "id": "shimeji-mushroom",
    "name": "Shimeji Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 0.62,
    "unit": "oz",
    "commonPackageSize": "3.5 oz package",
    "shelfLifeDays": 9,
    "tags": [
      "specialty-mushroom",
      "beech",
      "asian"
    ]
  },
  {
    "id": "wood-ear-mushroom",
    "name": "Wood Ear Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "cup",
    "commonPackageSize": "3 oz dried bag",
    "shelfLifeDays": 540,
    "tags": [
      "specialty-mushroom",
      "dried",
      "asian",
      "fungus"
    ]
  },
  {
    "id": "straw-mushroom",
    "name": "Straw Mushroom",
    "category": "canned",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "15 oz can",
    "shelfLifeDays": 730,
    "tags": [
      "specialty-mushroom",
      "asian",
      "canned"
    ]
  },
  {
    "id": "nameko-mushroom",
    "name": "Nameko Mushroom",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "3.5 oz package",
    "shelfLifeDays": 7,
    "tags": [
      "specialty-mushroom",
      "japanese",
      "gelatinous"
    ]
  },
  {
    "id": "salsify",
    "name": "Salsify",
    "category": "vegetable",
    "estimatedUnitCost": 0.95,
    "unit": "cup sliced",
    "commonPackageSize": "1 lb bunch",
    "shelfLifeDays": 21,
    "tags": [
      "root",
      "oyster-plant",
      "uncommon"
    ]
  },
  {
    "id": "cardoon",
    "name": "Cardoon",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "cup chopped",
    "commonPackageSize": "1 lb bunch",
    "shelfLifeDays": 7,
    "tags": [
      "stalk",
      "thistle",
      "uncommon"
    ]
  },
  {
    "id": "samphire",
    "name": "Samphire",
    "category": "vegetable",
    "estimatedUnitCost": 1.25,
    "unit": "cup",
    "commonPackageSize": "4 oz package",
    "shelfLifeDays": 5,
    "tags": [
      "sea-vegetable",
      "saline",
      "coastal"
    ]
  },
  {
    "id": "sea-beans",
    "name": "Sea Beans",
    "category": "vegetable",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "4 oz package",
    "shelfLifeDays": 5,
    "tags": [
      "sea-vegetable",
      "glasswort",
      "saline",
      "coastal"
    ]
  },
  {
    "id": "nopales",
    "name": "Nopales",
    "category": "vegetable",
    "estimatedUnitCost": 0.4,
    "unit": "cup diced",
    "commonPackageSize": "1 lb fresh pads",
    "shelfLifeDays": 10,
    "tags": [
      "cactus",
      "mexican",
      "prickly-pear"
    ]
  },
  {
    "id": "bitter-melon",
    "name": "Bitter Melon",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "cup sliced",
    "commonPackageSize": "1 lb fresh",
    "shelfLifeDays": 7,
    "tags": [
      "asian",
      "gourd",
      "bitter"
    ]
  },
  {
    "id": "fuzzy-melon",
    "name": "Fuzzy Melon",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "cup cubed",
    "commonPackageSize": "1.5 lb fresh",
    "shelfLifeDays": 10,
    "tags": [
      "asian",
      "gourd",
      "mao-gua"
    ]
  },
  {
    "id": "winter-melon",
    "name": "Winter Melon",
    "category": "vegetable",
    "estimatedUnitCost": 0.4,
    "unit": "cup cubed",
    "commonPackageSize": "2 lb wedge",
    "shelfLifeDays": 21,
    "tags": [
      "asian",
      "gourd",
      "ash-gourd"
    ]
  },
  {
    "id": "yardlong-beans",
    "name": "Yardlong Beans",
    "category": "vegetable",
    "estimatedUnitCost": 0.6,
    "unit": "cup chopped",
    "commonPackageSize": "12 oz bunch",
    "shelfLifeDays": 6,
    "tags": [
      "asian",
      "long-beans",
      "legume"
    ]
  },
  {
    "id": "taro-leaf",
    "name": "Taro Leaf",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "cup chopped",
    "commonPackageSize": "8 oz bunch",
    "shelfLifeDays": 4,
    "tags": [
      "leafy",
      "luau",
      "tropical",
      "cook-thoroughly"
    ]
  },
  {
    "id": "fiddleheads",
    "name": "Fiddleheads",
    "category": "vegetable",
    "estimatedUnitCost": 2,
    "unit": "cup",
    "commonPackageSize": "8 oz package",
    "shelfLifeDays": 5,
    "tags": [
      "wild",
      "seasonal",
      "fern",
      "forage"
    ]
  },
  {
    "id": "green-garlic",
    "name": "Green Garlic",
    "category": "vegetable",
    "estimatedUnitCost": 0.5,
    "unit": "stalk",
    "commonPackageSize": "1 bunch (6 stalks)",
    "shelfLifeDays": 7,
    "tags": [
      "aromatic",
      "allium",
      "spring",
      "mild"
    ]
  },
  {
    "id": "kohlrabi-greens",
    "name": "Kohlrabi Greens",
    "category": "vegetable",
    "estimatedUnitCost": 0.35,
    "unit": "cup chopped",
    "commonPackageSize": "8 oz bunch",
    "shelfLifeDays": 4,
    "tags": [
      "leafy",
      "brassica"
    ]
  },
  {
    "id": "malanga",
    "name": "Malanga",
    "category": "vegetable",
    "estimatedUnitCost": 0.75,
    "unit": "cup cubed",
    "commonPackageSize": "1 lb root",
    "shelfLifeDays": 21,
    "tags": [
      "tuber",
      "caribbean",
      "starchy",
      "yautia"
    ]
  },
  {
    "id": "boniato",
    "name": "Boniato",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "cup cubed",
    "commonPackageSize": "1.5 lb fresh",
    "shelfLifeDays": 21,
    "tags": [
      "tuber",
      "cuban-sweet-potato",
      "starchy"
    ]
  },
  {
    "id": "purple-sweet-potato",
    "name": "Purple Sweet Potato",
    "category": "vegetable",
    "estimatedUnitCost": 0.6,
    "unit": "cup cubed",
    "commonPackageSize": "1.5 lb fresh",
    "shelfLifeDays": 28,
    "tags": [
      "tuber",
      "okinawan",
      "starchy",
      "antioxidant"
    ]
  },
  {
    "id": "hatch-chili",
    "name": "Hatch Chili",
    "category": "vegetable",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "1 lb fresh (8-9 chilies)",
    "shelfLifeDays": 12,
    "tags": [
      "chili",
      "new-mexico",
      "seasonal",
      "mild-medium"
    ]
  },
  {
    "id": "calabrian-chili",
    "name": "Calabrian Chili",
    "category": "vegetable",
    "estimatedUnitCost": 0.55,
    "unit": "piece",
    "commonPackageSize": "6 oz fresh",
    "shelfLifeDays": 12,
    "tags": [
      "chili",
      "italian",
      "spicy",
      "fruity"
    ]
  },
  {
    "id": "padron-pepper",
    "name": "Padron Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 0.3,
    "unit": "piece",
    "commonPackageSize": "6 oz package",
    "shelfLifeDays": 10,
    "tags": [
      "chili",
      "spanish",
      "tapas",
      "mild"
    ]
  },
  {
    "id": "rocoto-pepper",
    "name": "Rocoto Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 1.1,
    "unit": "piece",
    "commonPackageSize": "8 oz fresh",
    "shelfLifeDays": 10,
    "tags": [
      "chili",
      "peruvian",
      "spicy",
      "manzano"
    ]
  },
  {
    "id": "ghost-pepper",
    "name": "Ghost Pepper",
    "category": "vegetable",
    "estimatedUnitCost": 0.75,
    "unit": "piece",
    "commonPackageSize": "4 oz fresh",
    "shelfLifeDays": 10,
    "tags": [
      "chili",
      "bhut-jolokia",
      "extreme-heat"
    ]
  },
  {
    "id": "broccoli-sprouts",
    "name": "Broccoli Sprouts",
    "category": "vegetable",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "4 oz container",
    "shelfLifeDays": 6,
    "tags": [
      "sprouts",
      "raw",
      "sulforaphane"
    ]
  },
  {
    "id": "soursop",
    "name": "Soursop",
    "category": "fruit",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "1 fruit (~2 lb)",
    "shelfLifeDays": 4,
    "tags": [
      "tropical",
      "exotic",
      "guanabana"
    ]
  },
  {
    "id": "sapodilla",
    "name": "Sapodilla",
    "category": "fruit",
    "estimatedUnitCost": 1.75,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~170 g)",
    "shelfLifeDays": 5,
    "tags": [
      "tropical",
      "exotic",
      "chikoo"
    ]
  },
  {
    "id": "durian",
    "name": "Durian",
    "category": "fruit",
    "estimatedUnitCost": 6,
    "unit": "cup",
    "commonPackageSize": "1 lb shelled flesh",
    "shelfLifeDays": 3,
    "tags": [
      "tropical",
      "exotic",
      "pungent"
    ]
  },
  {
    "id": "breadfruit",
    "name": "Breadfruit",
    "category": "fruit",
    "estimatedUnitCost": 2.25,
    "unit": "cup",
    "commonPackageSize": "1 fruit (~1.5 lb)",
    "shelfLifeDays": 4,
    "tags": [
      "tropical",
      "starchy",
      "exotic"
    ]
  },
  {
    "id": "sugar-apple",
    "name": "Sugar Apple",
    "category": "fruit",
    "estimatedUnitCost": 2.75,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~150 g)",
    "shelfLifeDays": 4,
    "tags": [
      "tropical",
      "custard-apple",
      "sweetsop"
    ]
  },
  {
    "id": "tamarillo",
    "name": "Tamarillo",
    "category": "fruit",
    "estimatedUnitCost": 1.5,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~90 g)",
    "shelfLifeDays": 10,
    "tags": [
      "tropical",
      "tree-tomato",
      "tart"
    ]
  },
  {
    "id": "feijoa",
    "name": "Feijoa",
    "category": "fruit",
    "estimatedUnitCost": 1.25,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~50 g)",
    "shelfLifeDays": 7,
    "tags": [
      "pineapple-guava",
      "aromatic",
      "tart"
    ]
  },
  {
    "id": "loquat",
    "name": "Loquat",
    "category": "fruit",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~16 g)",
    "shelfLifeDays": 5,
    "tags": [
      "stone-fruit",
      "tropical",
      "japanese-plum"
    ]
  },
  {
    "id": "jujube",
    "name": "Jujube",
    "category": "fruit",
    "estimatedUnitCost": 4,
    "unit": "cup",
    "commonPackageSize": "1 lb fresh",
    "shelfLifeDays": 14,
    "tags": [
      "chinese-date",
      "crisp",
      "tropical"
    ]
  },
  {
    "id": "calamansi",
    "name": "Calamansi",
    "category": "fruit",
    "estimatedUnitCost": 0.4,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~20 g)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "filipino-lime",
      "tart"
    ]
  },
  {
    "id": "finger-lime",
    "name": "Finger Lime",
    "category": "fruit",
    "estimatedUnitCost": 2.5,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~20 g)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "caviar-lime",
      "gourmet"
    ]
  },
  {
    "id": "buddhas-hand",
    "name": "Buddha's Hand",
    "category": "fruit",
    "estimatedUnitCost": 8,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~400 g)",
    "shelfLifeDays": 14,
    "tags": [
      "citron",
      "aromatic",
      "zest-only"
    ]
  },
  {
    "id": "ugli-fruit",
    "name": "Ugli Fruit",
    "category": "fruit",
    "estimatedUnitCost": 2,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~400 g)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "tangelo",
      "jamaican"
    ]
  },
  {
    "id": "pomelo",
    "name": "Pomelo",
    "category": "fruit",
    "estimatedUnitCost": 2,
    "unit": "cup",
    "commonPackageSize": "1 fruit (~1 kg)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "large",
      "mild"
    ]
  },
  {
    "id": "salak",
    "name": "Salak",
    "category": "fruit",
    "estimatedUnitCost": 1,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~50 g)",
    "shelfLifeDays": 7,
    "tags": [
      "snake-fruit",
      "tropical",
      "exotic"
    ]
  },
  {
    "id": "langsat",
    "name": "Langsat",
    "category": "fruit",
    "estimatedUnitCost": 5,
    "unit": "cup",
    "commonPackageSize": "1 lb",
    "shelfLifeDays": 5,
    "tags": [
      "tropical",
      "longkong",
      "exotic"
    ]
  },
  {
    "id": "mulberry",
    "name": "Mulberry",
    "category": "fruit",
    "estimatedUnitCost": 4.5,
    "unit": "cup",
    "commonPackageSize": "1 cup (140 g)",
    "shelfLifeDays": 3,
    "tags": [
      "berry",
      "delicate",
      "antioxidant"
    ]
  },
  {
    "id": "marionberry",
    "name": "Marionberry",
    "category": "fruit",
    "estimatedUnitCost": 4,
    "unit": "cup",
    "commonPackageSize": "1 cup (140 g)",
    "shelfLifeDays": 3,
    "tags": [
      "berry",
      "blackberry-hybrid",
      "pacific-northwest"
    ]
  },
  {
    "id": "lingonberry",
    "name": "Lingonberry",
    "category": "fruit",
    "estimatedUnitCost": 6,
    "unit": "cup",
    "commonPackageSize": "1 cup (110 g)",
    "shelfLifeDays": 7,
    "tags": [
      "berry",
      "tart",
      "nordic"
    ]
  },
  {
    "id": "cloudberry",
    "name": "Cloudberry",
    "category": "fruit",
    "estimatedUnitCost": 9,
    "unit": "cup",
    "commonPackageSize": "1 cup (130 g)",
    "shelfLifeDays": 4,
    "tags": [
      "berry",
      "nordic",
      "rare"
    ]
  },
  {
    "id": "sea-buckthorn",
    "name": "Sea Buckthorn",
    "category": "fruit",
    "estimatedUnitCost": 7,
    "unit": "cup",
    "commonPackageSize": "1 cup (110 g)",
    "shelfLifeDays": 5,
    "tags": [
      "berry",
      "tart",
      "superfruit"
    ]
  },
  {
    "id": "aronia-berry",
    "name": "Aronia Berry",
    "category": "fruit",
    "estimatedUnitCost": 5.5,
    "unit": "cup",
    "commonPackageSize": "1 cup (140 g)",
    "shelfLifeDays": 7,
    "tags": [
      "berry",
      "chokeberry",
      "antioxidant"
    ]
  },
  {
    "id": "white-currant",
    "name": "White Currant",
    "category": "fruit",
    "estimatedUnitCost": 5,
    "unit": "cup",
    "commonPackageSize": "1 cup (110 g)",
    "shelfLifeDays": 5,
    "tags": [
      "berry",
      "mild",
      "ribes"
    ]
  },
  {
    "id": "quince",
    "name": "Quince",
    "category": "fruit",
    "estimatedUnitCost": 2,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~200 g)",
    "shelfLifeDays": 21,
    "tags": [
      "pome",
      "cooking-fruit",
      "astringent"
    ]
  },
  {
    "id": "medlar",
    "name": "Medlar",
    "category": "fruit",
    "estimatedUnitCost": 1.5,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~40 g)",
    "shelfLifeDays": 14,
    "tags": [
      "pome",
      "bletted",
      "heirloom"
    ]
  },
  {
    "id": "damson-plum",
    "name": "Damson Plum",
    "category": "fruit",
    "estimatedUnitCost": 0.5,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~30 g)",
    "shelfLifeDays": 7,
    "tags": [
      "stone-fruit",
      "tart",
      "preserving"
    ]
  },
  {
    "id": "greengage",
    "name": "Greengage",
    "category": "fruit",
    "estimatedUnitCost": 0.65,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~35 g)",
    "shelfLifeDays": 7,
    "tags": [
      "stone-fruit",
      "plum",
      "sweet"
    ]
  },
  {
    "id": "mirabelle-plum",
    "name": "Mirabelle Plum",
    "category": "fruit",
    "estimatedUnitCost": 0.6,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~25 g)",
    "shelfLifeDays": 7,
    "tags": [
      "stone-fruit",
      "plum",
      "french"
    ]
  },
  {
    "id": "yuzu",
    "name": "Yuzu",
    "category": "fruit",
    "estimatedUnitCost": 4.5,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~60 g)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "japanese",
      "aromatic"
    ]
  },
  {
    "id": "sudachi",
    "name": "Sudachi",
    "category": "fruit",
    "estimatedUnitCost": 2,
    "unit": "piece",
    "commonPackageSize": "1 fruit (~30 g)",
    "shelfLifeDays": 14,
    "tags": [
      "citrus",
      "japanese",
      "tart"
    ]
  },
  {
    "id": "kalamansi-juice",
    "name": "Calamansi Juice",
    "category": "fruit",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "16 oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "citrus",
      "juice",
      "filipino"
    ]
  },
  {
    "id": "ripe-plantain",
    "name": "Ripe Plantain",
    "category": "fruit",
    "estimatedUnitCost": 0.6,
    "unit": "piece",
    "commonPackageSize": "1 plantain (~180 g)",
    "shelfLifeDays": 5,
    "tags": [
      "tropical",
      "starchy",
      "sweet"
    ]
  },
  {
    "id": "dried-persimmon",
    "name": "Dried Persimmon",
    "category": "fruit",
    "estimatedUnitCost": 1.75,
    "unit": "piece",
    "commonPackageSize": "8 oz pack",
    "shelfLifeDays": 180,
    "tags": [
      "dried",
      "hoshigaki",
      "sweet"
    ]
  },
  {
    "id": "dried-jujube",
    "name": "Dried Jujube",
    "category": "fruit",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "1 lb bag",
    "shelfLifeDays": 365,
    "tags": [
      "dried",
      "red-date",
      "chinese"
    ]
  },
  {
    "id": "dried-mulberry",
    "name": "Dried Mulberry",
    "category": "fruit",
    "estimatedUnitCost": 4,
    "unit": "cup",
    "commonPackageSize": "8 oz bag",
    "shelfLifeDays": 300,
    "tags": [
      "dried",
      "berry",
      "snack"
    ]
  },
  {
    "id": "freeze-dried-strawberry",
    "name": "Freeze-Dried Strawberry",
    "category": "fruit",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "1.2 oz bag",
    "shelfLifeDays": 730,
    "tags": [
      "freeze-dried",
      "berry",
      "snack"
    ]
  },
  {
    "id": "freeze-dried-raspberry",
    "name": "Freeze-Dried Raspberry",
    "category": "fruit",
    "estimatedUnitCost": 3.25,
    "unit": "cup",
    "commonPackageSize": "1.3 oz bag",
    "shelfLifeDays": 730,
    "tags": [
      "freeze-dried",
      "berry",
      "snack"
    ]
  },
  {
    "id": "candied-citron",
    "name": "Candied Citron",
    "category": "fruit",
    "estimatedUnitCost": 6,
    "unit": "cup",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 365,
    "tags": [
      "candied",
      "citrus",
      "baking"
    ]
  },
  {
    "id": "candied-orange-peel",
    "name": "Candied Orange Peel",
    "category": "fruit",
    "estimatedUnitCost": 5.5,
    "unit": "cup",
    "commonPackageSize": "7 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "candied",
      "citrus",
      "baking"
    ]
  },
  {
    "id": "taleggio",
    "name": "Taleggio",
    "category": "dairy",
    "estimatedUnitCost": 1.25,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "italian",
      "washed-rind",
      "soft"
    ]
  },
  {
    "id": "robiola",
    "name": "Robiola",
    "category": "dairy",
    "estimatedUnitCost": 1.6,
    "unit": "oz",
    "commonPackageSize": "7 oz round",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "italian",
      "soft-ripened"
    ]
  },
  {
    "id": "stracchino",
    "name": "Stracchino",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 14,
    "tags": [
      "cheese",
      "italian",
      "soft",
      "spreadable"
    ]
  },
  {
    "id": "stracciatella",
    "name": "Stracciatella",
    "category": "dairy",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 7,
    "tags": [
      "cheese",
      "italian",
      "fresh",
      "creamy"
    ]
  },
  {
    "id": "scamorza",
    "name": "Scamorza",
    "category": "dairy",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "8 oz ball",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "italian",
      "smoked",
      "pasta-filata"
    ]
  },
  {
    "id": "caciocavallo",
    "name": "Caciocavallo",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "8 oz piece",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "italian",
      "aged",
      "pasta-filata"
    ]
  },
  {
    "id": "provolone-piccante",
    "name": "Provolone Piccante",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "italian",
      "aged",
      "sharp"
    ]
  },
  {
    "id": "grana-padano",
    "name": "Grana Padano",
    "category": "dairy",
    "estimatedUnitCost": 1.3,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "italian",
      "hard",
      "aged",
      "grating"
    ]
  },
  {
    "id": "idiazabal",
    "name": "Idiazabal",
    "category": "dairy",
    "estimatedUnitCost": 1.8,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "spanish",
      "sheep",
      "smoked",
      "aged"
    ]
  },
  {
    "id": "roncal",
    "name": "Roncal",
    "category": "dairy",
    "estimatedUnitCost": 1.9,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "spanish",
      "sheep",
      "aged"
    ]
  },
  {
    "id": "cabrales",
    "name": "Cabrales",
    "category": "dairy",
    "estimatedUnitCost": 2.2,
    "unit": "oz",
    "commonPackageSize": "6 oz wedge",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "spanish",
      "blue",
      "aged"
    ]
  },
  {
    "id": "valdeon",
    "name": "Valdeon",
    "category": "dairy",
    "estimatedUnitCost": 2.1,
    "unit": "oz",
    "commonPackageSize": "6 oz wedge",
    "shelfLifeDays": 60,
    "tags": [
      "cheese",
      "spanish",
      "blue",
      "wrapped"
    ]
  },
  {
    "id": "epoisses",
    "name": "Epoisses",
    "category": "dairy",
    "estimatedUnitCost": 2.5,
    "unit": "oz",
    "commonPackageSize": "8.8 oz round",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "french",
      "washed-rind",
      "soft",
      "pungent"
    ]
  },
  {
    "id": "reblochon",
    "name": "Reblochon",
    "category": "dairy",
    "estimatedUnitCost": 2,
    "unit": "oz",
    "commonPackageSize": "8 oz round",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "french",
      "washed-rind",
      "soft"
    ]
  },
  {
    "id": "morbier",
    "name": "Morbier",
    "category": "dairy",
    "estimatedUnitCost": 1.6,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "french",
      "semi-soft",
      "ash-line"
    ]
  },
  {
    "id": "cantal",
    "name": "Cantal",
    "category": "dairy",
    "estimatedUnitCost": 1.5,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "french",
      "semi-hard",
      "aged"
    ]
  },
  {
    "id": "tomme-de-savoie",
    "name": "Tomme De Savoie",
    "category": "dairy",
    "estimatedUnitCost": 1.7,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "french",
      "semi-firm",
      "natural-rind"
    ]
  },
  {
    "id": "beaufort",
    "name": "Beaufort",
    "category": "dairy",
    "estimatedUnitCost": 2.6,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "french",
      "alpine",
      "hard",
      "aged"
    ]
  },
  {
    "id": "appenzeller",
    "name": "Appenzeller",
    "category": "dairy",
    "estimatedUnitCost": 1.9,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "swiss",
      "alpine",
      "aged",
      "washed-rind"
    ]
  },
  {
    "id": "sbrinz",
    "name": "Sbrinz",
    "category": "dairy",
    "estimatedUnitCost": 2.2,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 180,
    "tags": [
      "cheese",
      "swiss",
      "extra-hard",
      "grating",
      "aged"
    ]
  },
  {
    "id": "tete-de-moine",
    "name": "Tete De Moine",
    "category": "dairy",
    "estimatedUnitCost": 2.4,
    "unit": "oz",
    "commonPackageSize": "8 oz cylinder",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "swiss",
      "semi-hard",
      "aged"
    ]
  },
  {
    "id": "mimolette",
    "name": "Mimolette",
    "category": "dairy",
    "estimatedUnitCost": 1.8,
    "unit": "oz",
    "commonPackageSize": "7 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "french",
      "hard",
      "aged",
      "orange"
    ]
  },
  {
    "id": "kasseri",
    "name": "Kasseri",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "8 oz piece",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "greek",
      "sheep",
      "pasta-filata",
      "grilling"
    ]
  },
  {
    "id": "kefalotyri",
    "name": "Kefalotyri",
    "category": "dairy",
    "estimatedUnitCost": 1.2,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "greek",
      "hard",
      "sheep",
      "grating"
    ]
  },
  {
    "id": "graviera",
    "name": "Graviera",
    "category": "dairy",
    "estimatedUnitCost": 1.3,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "greek",
      "hard",
      "aged"
    ]
  },
  {
    "id": "kefalograviera",
    "name": "Kefalograviera",
    "category": "dairy",
    "estimatedUnitCost": 1.4,
    "unit": "oz",
    "commonPackageSize": "8 oz wedge",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "greek",
      "hard",
      "grilling",
      "saganaki"
    ]
  },
  {
    "id": "mizithra",
    "name": "Mizithra",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "8 oz piece",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "greek",
      "whey",
      "grating"
    ]
  },
  {
    "id": "halloumi-grilling",
    "name": "Grilling Halloumi",
    "category": "dairy",
    "estimatedUnitCost": 1.4,
    "unit": "oz",
    "commonPackageSize": "8.8 oz block",
    "shelfLifeDays": 120,
    "tags": [
      "cheese",
      "cypriot",
      "grilling",
      "brined",
      "high-melt"
    ]
  },
  {
    "id": "anari",
    "name": "Anari",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 14,
    "tags": [
      "cheese",
      "cypriot",
      "whey",
      "fresh",
      "ricotta-like"
    ]
  },
  {
    "id": "bryndza",
    "name": "Bryndza",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "slovak",
      "sheep",
      "brined",
      "crumbly"
    ]
  },
  {
    "id": "kashkaval",
    "name": "Kashkaval",
    "category": "dairy",
    "estimatedUnitCost": 0.95,
    "unit": "oz",
    "commonPackageSize": "8 oz block",
    "shelfLifeDays": 90,
    "tags": [
      "cheese",
      "balkan",
      "semi-hard",
      "yellow"
    ]
  },
  {
    "id": "sulguni",
    "name": "Sulguni",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "8 oz round",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "georgian",
      "brined",
      "pasta-filata"
    ]
  },
  {
    "id": "akkawi",
    "name": "Akkawi",
    "category": "dairy",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "16 oz block",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "levantine",
      "brined",
      "white"
    ]
  },
  {
    "id": "nabulsi",
    "name": "Nabulsi",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "16 oz block",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "palestinian",
      "brined",
      "grilling"
    ]
  },
  {
    "id": "labneh-cheese",
    "name": "Labneh Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.65,
    "unit": "oz",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 21,
    "tags": [
      "cheese",
      "levantine",
      "cultured",
      "strained",
      "spreadable"
    ]
  },
  {
    "id": "farmer-cheese",
    "name": "Farmer Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "16 oz block",
    "shelfLifeDays": 14,
    "tags": [
      "cheese",
      "fresh",
      "cultured",
      "dry-curd"
    ]
  },
  {
    "id": "pot-cheese",
    "name": "Pot Cheese",
    "category": "dairy",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 10,
    "tags": [
      "cheese",
      "fresh",
      "curd",
      "low-fat"
    ]
  },
  {
    "id": "tvorog",
    "name": "Tvorog",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 14,
    "tags": [
      "cheese",
      "eastern-european",
      "fresh",
      "cultured",
      "quark-like"
    ]
  },
  {
    "id": "requeson",
    "name": "Requeson",
    "category": "dairy",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "15 oz tub",
    "shelfLifeDays": 10,
    "tags": [
      "cheese",
      "mexican",
      "fresh",
      "whey",
      "ricotta-like"
    ]
  },
  {
    "id": "asadero",
    "name": "Asadero",
    "category": "dairy",
    "estimatedUnitCost": 0.6,
    "unit": "oz",
    "commonPackageSize": "12 oz block",
    "shelfLifeDays": 30,
    "tags": [
      "cheese",
      "mexican",
      "melting",
      "pasta-filata"
    ]
  },
  {
    "id": "queso-chihuahua",
    "name": "Queso Chihuahua",
    "category": "dairy",
    "estimatedUnitCost": 0.65,
    "unit": "oz",
    "commonPackageSize": "12 oz block",
    "shelfLifeDays": 45,
    "tags": [
      "cheese",
      "mexican",
      "melting",
      "semi-soft"
    ]
  },
  {
    "id": "chhena",
    "name": "Chhena",
    "category": "dairy",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "12 oz tub",
    "shelfLifeDays": 7,
    "tags": [
      "cheese",
      "indian",
      "fresh",
      "unaged",
      "acid-set"
    ]
  },
  {
    "id": "filmjolk",
    "name": "Filmjolk",
    "category": "dairy",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "32 fl oz carton",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "swedish",
      "fermented",
      "drinkable"
    ]
  },
  {
    "id": "viili",
    "name": "Viili",
    "category": "dairy",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "24 fl oz tub",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "finnish",
      "fermented",
      "mesophilic"
    ]
  },
  {
    "id": "piima",
    "name": "Piima",
    "category": "dairy",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "32 fl oz carton",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "scandinavian",
      "fermented",
      "drinkable"
    ]
  },
  {
    "id": "amasi",
    "name": "Amasi",
    "category": "dairy",
    "estimatedUnitCost": 1.2,
    "unit": "cup",
    "commonPackageSize": "32 fl oz carton",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "south-african",
      "fermented",
      "sour"
    ]
  },
  {
    "id": "smetana",
    "name": "Smetana",
    "category": "dairy",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "eastern-european",
      "sour-cream",
      "rich"
    ]
  },
  {
    "id": "creme-epaisse",
    "name": "Creme Epaisse",
    "category": "dairy",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "french",
      "thick-cream",
      "rich"
    ]
  },
  {
    "id": "ayran",
    "name": "Ayran",
    "category": "dairy",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "33.8 fl oz bottle",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "turkish",
      "yogurt-drink",
      "savory",
      "salted"
    ]
  },
  {
    "id": "doogh",
    "name": "Doogh",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "32 fl oz bottle",
    "shelfLifeDays": 21,
    "tags": [
      "cultured-dairy",
      "persian",
      "yogurt-drink",
      "savory",
      "carbonated"
    ]
  },
  {
    "id": "lassi-sweet",
    "name": "Sweet Lassi",
    "category": "dairy",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "32 fl oz bottle",
    "shelfLifeDays": 14,
    "tags": [
      "cultured-dairy",
      "indian",
      "yogurt-drink",
      "sweet"
    ]
  },
  {
    "id": "lassi-salted",
    "name": "Salted Lassi",
    "category": "dairy",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "32 fl oz bottle",
    "shelfLifeDays": 14,
    "tags": [
      "cultured-dairy",
      "indian",
      "yogurt-drink",
      "savory",
      "salted"
    ]
  },
  {
    "id": "chaas",
    "name": "Chaas",
    "category": "dairy",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "32 fl oz bottle",
    "shelfLifeDays": 14,
    "tags": [
      "cultured-dairy",
      "indian",
      "buttermilk",
      "spiced",
      "savory"
    ]
  },
  {
    "id": "fonio",
    "name": "Fonio",
    "category": "grain",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$8.50, ~5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "ancient-grain",
      "west-african",
      "gluten-free",
      "whole-grain"
    ]
  },
  {
    "id": "sorghum",
    "name": "Sorghum",
    "category": "grain",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$4.50, ~5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "ancient-grain",
      "gluten-free",
      "whole-grain",
      "high-fiber"
    ]
  },
  {
    "id": "einkorn",
    "name": "Einkorn Berries",
    "category": "grain",
    "estimatedUnitCost": 2.4,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$13.00, ~5.5 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "ancient-grain",
      "heirloom-wheat",
      "whole-grain"
    ]
  },
  {
    "id": "emmer",
    "name": "Emmer (Farro)",
    "category": "grain",
    "estimatedUnitCost": 1.9,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$10.00, ~5 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "ancient-grain",
      "heirloom-wheat",
      "whole-grain"
    ]
  },
  {
    "id": "khorasan",
    "name": "Khorasan Wheat",
    "category": "grain",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "26 oz bag (~$8.00, ~5 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "ancient-grain",
      "kamut",
      "heirloom-wheat",
      "whole-grain"
    ]
  },
  {
    "id": "triticale",
    "name": "Triticale Berries",
    "category": "grain",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$5.50, ~5 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "hybrid-grain",
      "high-fiber"
    ]
  },
  {
    "id": "jobs-tears",
    "name": "Job's Tears",
    "category": "grain",
    "estimatedUnitCost": 1.7,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$5.50, ~3 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "ancient-grain",
      "coix",
      "asian",
      "chewy"
    ]
  },
  {
    "id": "black-barley",
    "name": "Black Barley",
    "category": "grain",
    "estimatedUnitCost": 1.8,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$6.00, ~3.3 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "heirloom",
      "high-fiber",
      "chewy"
    ]
  },
  {
    "id": "purple-barley",
    "name": "Purple Barley",
    "category": "grain",
    "estimatedUnitCost": 1.9,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$6.50, ~3.3 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "heirloom",
      "antioxidant",
      "high-fiber"
    ]
  },
  {
    "id": "red-rice",
    "name": "Red Rice",
    "category": "grain",
    "estimatedUnitCost": 1.2,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$7.50, ~6 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "heirloom-rice",
      "gluten-free",
      "antioxidant"
    ]
  },
  {
    "id": "forbidden-rice",
    "name": "Forbidden Black Rice",
    "category": "grain",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "15 oz bag (~$6.00, ~4 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "whole-grain",
      "heirloom-rice",
      "gluten-free",
      "antioxidant",
      "nutty"
    ]
  },
  {
    "id": "glutinous-black-rice",
    "name": "Glutinous Black Rice",
    "category": "grain",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$5.50, ~4 cups dry)",
    "shelfLifeDays": 540,
    "tags": [
      "sticky-rice",
      "asian",
      "dessert-rice",
      "gluten-free"
    ]
  },
  {
    "id": "bomba-rice",
    "name": "Bomba Rice",
    "category": "grain",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "17.6 oz bag (~$11.00, ~3 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "spanish",
      "paella",
      "short-grain",
      "gluten-free"
    ]
  },
  {
    "id": "calasparra-rice",
    "name": "Calasparra Rice",
    "category": "grain",
    "estimatedUnitCost": 3.2,
    "unit": "cup",
    "commonPackageSize": "18 oz bag (~$10.50, ~3 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "spanish",
      "paella",
      "short-grain",
      "gluten-free"
    ]
  },
  {
    "id": "carnaroli-rice",
    "name": "Carnaroli Rice",
    "category": "grain",
    "estimatedUnitCost": 2.4,
    "unit": "cup",
    "commonPackageSize": "35 oz bag (~$14.00, ~6 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "italian",
      "risotto",
      "short-grain",
      "gluten-free"
    ]
  },
  {
    "id": "vialone-nano-rice",
    "name": "Vialone Nano Rice",
    "category": "grain",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "17.6 oz bag (~$10.00, ~3 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "italian",
      "risotto",
      "short-grain",
      "gluten-free"
    ]
  },
  {
    "id": "parboiled-rice",
    "name": "Parboiled Rice",
    "category": "grain",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$3.50, ~6 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "converted-rice",
      "gluten-free",
      "long-grain",
      "budget"
    ]
  },
  {
    "id": "broken-rice",
    "name": "Broken Rice",
    "category": "grain",
    "estimatedUnitCost": 0.7,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$4.50, ~6 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "vietnamese",
      "com-tam",
      "gluten-free",
      "budget"
    ]
  },
  {
    "id": "kalijira-rice",
    "name": "Kalijira Rice",
    "category": "grain",
    "estimatedUnitCost": 2.1,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$12.00, ~6 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "bangladeshi",
      "baby-basmati",
      "aromatic",
      "gluten-free"
    ]
  },
  {
    "id": "adzuki-beans",
    "name": "Adzuki Beans",
    "category": "grain",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$3.50, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "dried-beans",
      "asian",
      "red-bean",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "split-mung-dal",
    "name": "Split Mung Dal",
    "category": "grain",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$5.50, ~4.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "indian",
      "skinned",
      "yellow-dal",
      "high-protein",
      "quick-cooking"
    ]
  },
  {
    "id": "urad-whole",
    "name": "Whole Urad (Black Gram)",
    "category": "grain",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$6.00, ~4.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "indian",
      "black-gram",
      "dal-makhani",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "moth-beans",
    "name": "Moth Beans",
    "category": "grain",
    "estimatedUnitCost": 1.8,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$4.50, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "indian",
      "matki",
      "high-protein",
      "high-fiber",
      "sprouting"
    ]
  },
  {
    "id": "horse-gram",
    "name": "Horse Gram",
    "category": "grain",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$5.50, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "indian",
      "kulthi",
      "high-protein",
      "high-fiber",
      "heirloom"
    ]
  },
  {
    "id": "cowpeas",
    "name": "Cowpeas",
    "category": "grain",
    "estimatedUnitCost": 1,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$2.50, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "dried-beans",
      "field-peas",
      "southern",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "flageolet-beans",
    "name": "Flageolet Beans",
    "category": "grain",
    "estimatedUnitCost": 3.2,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$8.00, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "french",
      "heirloom",
      "dried-beans",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "borlotti-beans",
    "name": "Borlotti Beans",
    "category": "grain",
    "estimatedUnitCost": 2.4,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$6.00, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "italian",
      "cranberry-bean",
      "heirloom",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "gigante-beans",
    "name": "Gigante Beans",
    "category": "grain",
    "estimatedUnitCost": 3.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$9.00, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "greek",
      "heirloom",
      "large-bean",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "scarlet-runner-beans",
    "name": "Scarlet Runner Beans",
    "category": "grain",
    "estimatedUnitCost": 3.8,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$9.50, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "heirloom",
      "large-bean",
      "rancho-gordo",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "tepary-beans",
    "name": "Tepary Beans",
    "category": "grain",
    "estimatedUnitCost": 4,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$10.00, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "heirloom",
      "southwest",
      "drought-native",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "christmas-lima-beans",
    "name": "Christmas Lima Beans",
    "category": "grain",
    "estimatedUnitCost": 3.4,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$8.50, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "heirloom",
      "rancho-gordo",
      "chestnut-flavor",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "appaloosa-beans",
    "name": "Appaloosa Beans",
    "category": "grain",
    "estimatedUnitCost": 3.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$9.00, ~2.5 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "heirloom",
      "rancho-gordo",
      "southwest",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "lentils-du-puy",
    "name": "Lentils du Puy",
    "category": "grain",
    "estimatedUnitCost": 2.8,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$7.00, ~2.3 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "french",
      "green-lentil",
      "holds-shape",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "beluga-lentils",
    "name": "Beluga Black Lentils",
    "category": "grain",
    "estimatedUnitCost": 2.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$6.50, ~2.3 cups dry)",
    "shelfLifeDays": 730,
    "tags": [
      "legume",
      "black-lentil",
      "holds-shape",
      "high-protein",
      "high-fiber"
    ]
  },
  {
    "id": "teff-flour",
    "name": "Teff Flour",
    "category": "grain",
    "estimatedUnitCost": 2.9,
    "unit": "cup",
    "commonPackageSize": "20 oz bag (~$8.50, ~3 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "gluten-free",
      "ethiopian",
      "injera",
      "whole-grain"
    ]
  },
  {
    "id": "sorghum-flour",
    "name": "Sorghum Flour",
    "category": "grain",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$5.50, ~4 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "gluten-free",
      "whole-grain",
      "baking"
    ]
  },
  {
    "id": "chestnut-flour",
    "name": "Chestnut Flour",
    "category": "grain",
    "estimatedUnitCost": 4.5,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$14.00, ~3.5 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "gluten-free",
      "italian",
      "sweet",
      "baking"
    ]
  },
  {
    "id": "lupin-flour",
    "name": "Lupin Flour",
    "category": "grain",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$7.00, ~4 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "gluten-free",
      "high-protein",
      "low-carb",
      "keto"
    ]
  },
  {
    "id": "fava-flour",
    "name": "Fava Bean Flour",
    "category": "grain",
    "estimatedUnitCost": 2,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$6.50, ~3.5 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "gluten-free",
      "high-protein",
      "legume-flour"
    ]
  },
  {
    "id": "green-banana-flour",
    "name": "Green Banana Flour",
    "category": "grain",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$9.50, ~3.5 cups)",
    "shelfLifeDays": 540,
    "tags": [
      "flour",
      "gluten-free",
      "resistant-starch",
      "paleo"
    ]
  },
  {
    "id": "plantain-flour",
    "name": "Plantain Flour",
    "category": "grain",
    "estimatedUnitCost": 2.8,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$8.50, ~3.5 cups)",
    "shelfLifeDays": 540,
    "tags": [
      "flour",
      "gluten-free",
      "west-african",
      "paleo",
      "resistant-starch"
    ]
  },
  {
    "id": "water-chestnut-flour",
    "name": "Water Chestnut Flour",
    "category": "grain",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "8 oz bag (~$5.50, ~1.6 cups)",
    "shelfLifeDays": 540,
    "tags": [
      "starch",
      "gluten-free",
      "asian",
      "thickener",
      "crispy-coating"
    ]
  },
  {
    "id": "arrowroot-starch",
    "name": "Arrowroot Starch",
    "category": "grain",
    "estimatedUnitCost": 3,
    "unit": "cup",
    "commonPackageSize": "16 oz bag (~$8.50, ~3.6 cups)",
    "shelfLifeDays": 730,
    "tags": [
      "starch",
      "gluten-free",
      "thickener",
      "paleo",
      "grain-free"
    ]
  },
  {
    "id": "kuzu",
    "name": "Kuzu Starch",
    "category": "grain",
    "estimatedUnitCost": 0.6,
    "unit": "tbsp",
    "commonPackageSize": "3.5 oz box (~$9.00, ~15 tbsp)",
    "shelfLifeDays": 1095,
    "tags": [
      "starch",
      "gluten-free",
      "japanese",
      "thickener",
      "macrobiotic"
    ]
  },
  {
    "id": "semolina-fine",
    "name": "Fine Semolina",
    "category": "grain",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$4.50, ~4.5 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "durum",
      "pasta",
      "baking"
    ]
  },
  {
    "id": "coarse-semolina",
    "name": "Coarse Semolina",
    "category": "grain",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "24 oz bag (~$4.50, ~4.5 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "durum",
      "semolina",
      "upma",
      "baking"
    ]
  },
  {
    "id": "durum-flour",
    "name": "Durum Flour",
    "category": "grain",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$6.00, ~7 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "durum",
      "pasta",
      "high-protein",
      "baking"
    ]
  },
  {
    "id": "tipo-00-flour",
    "name": "Tipo 00 Flour",
    "category": "grain",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "35 oz bag (~$8.00, ~8 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "italian",
      "pizza",
      "pasta",
      "fine-milled"
    ]
  },
  {
    "id": "einkorn-flour",
    "name": "Einkorn Flour",
    "category": "grain",
    "estimatedUnitCost": 2.6,
    "unit": "cup",
    "commonPackageSize": "32 oz bag (~$15.00, ~6 cups)",
    "shelfLifeDays": 365,
    "tags": [
      "flour",
      "ancient-grain",
      "heirloom-wheat",
      "baking"
    ]
  },
  {
    "id": "sweet-potato-noodles",
    "name": "Sweet Potato Glass Noodles",
    "category": "grain",
    "estimatedUnitCost": 1.1,
    "unit": "serving",
    "commonPackageSize": "12 oz bag (~$5.50, ~5 servings)",
    "shelfLifeDays": 730,
    "tags": [
      "noodles",
      "korean",
      "dangmyeon",
      "japchae",
      "gluten-free",
      "chewy"
    ]
  },
  {
    "id": "somen",
    "name": "Somen Noodles",
    "category": "grain",
    "estimatedUnitCost": 1,
    "unit": "serving",
    "commonPackageSize": "12.7 oz pack (~$4.50, ~4 servings)",
    "shelfLifeDays": 730,
    "tags": [
      "noodles",
      "japanese",
      "thin-wheat",
      "cold-noodle"
    ]
  },
  {
    "id": "misua",
    "name": "Misua Noodles",
    "category": "grain",
    "estimatedUnitCost": 0.9,
    "unit": "serving",
    "commonPackageSize": "8.8 oz pack (~$3.50, ~4 servings)",
    "shelfLifeDays": 540,
    "tags": [
      "noodles",
      "filipino",
      "chinese",
      "thin-wheat",
      "quick-cooking"
    ]
  },
  {
    "id": "bihon",
    "name": "Bihon Rice Noodles",
    "category": "grain",
    "estimatedUnitCost": 1,
    "unit": "serving",
    "commonPackageSize": "8 oz pack (~$3.50, ~4 servings)",
    "shelfLifeDays": 730,
    "tags": [
      "noodles",
      "filipino",
      "rice-vermicelli",
      "gluten-free",
      "stir-fry"
    ]
  },
  {
    "id": "kway-teow",
    "name": "Kway Teow Noodles",
    "category": "grain",
    "estimatedUnitCost": 1.1,
    "unit": "serving",
    "commonPackageSize": "14 oz pack (~$4.50, ~4 servings)",
    "shelfLifeDays": 365,
    "tags": [
      "noodles",
      "wide-rice-noodle",
      "southeast-asian",
      "gluten-free",
      "stir-fry"
    ]
  },
  {
    "id": "orange-blossom-water",
    "name": "Orange Blossom Water",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tsp",
    "commonPackageSize": "10 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "flavoring",
      "middle-eastern",
      "floral",
      "aromatic"
    ]
  },
  {
    "id": "rose-water",
    "name": "Rose Water",
    "category": "condiment",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "10 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "flavoring",
      "floral",
      "middle-eastern",
      "aromatic"
    ]
  },
  {
    "id": "pandan-extract",
    "name": "Pandan Extract",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "2 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "flavoring",
      "southeast-asian",
      "extract"
    ]
  },
  {
    "id": "pandan-paste",
    "name": "Pandan Paste",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "flavoring",
      "southeast-asian",
      "paste"
    ]
  },
  {
    "id": "ube-extract",
    "name": "Ube Extract",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "2 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "flavoring",
      "filipino",
      "extract",
      "purple-yam"
    ]
  },
  {
    "id": "coffee-extract",
    "name": "Coffee Extract",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "tsp",
    "commonPackageSize": "4 fl oz bottle",
    "shelfLifeDays": 1460,
    "tags": [
      "flavoring",
      "extract"
    ]
  },
  {
    "id": "anise-extract",
    "name": "Anise Extract",
    "category": "condiment",
    "estimatedUnitCost": 0.16,
    "unit": "tsp",
    "commonPackageSize": "4 fl oz bottle",
    "shelfLifeDays": 1460,
    "tags": [
      "flavoring",
      "extract",
      "licorice"
    ]
  },
  {
    "id": "banana-extract",
    "name": "Banana Extract",
    "category": "condiment",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "4 fl oz bottle",
    "shelfLifeDays": 1460,
    "tags": [
      "flavoring",
      "extract"
    ]
  },
  {
    "id": "butter-extract",
    "name": "Butter Extract",
    "category": "condiment",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "4 fl oz bottle",
    "shelfLifeDays": 1460,
    "tags": [
      "flavoring",
      "extract"
    ]
  },
  {
    "id": "fiori-di-sicilia",
    "name": "Fiori Di Sicilia",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tsp",
    "commonPackageSize": "1 fl oz bottle",
    "shelfLifeDays": 1460,
    "tags": [
      "flavoring",
      "extract",
      "italian",
      "citrus-vanilla"
    ]
  },
  {
    "id": "vanilla-powder",
    "name": "Vanilla Powder",
    "category": "spice",
    "estimatedUnitCost": 0.55,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "flavoring",
      "baking",
      "ground-vanilla-bean"
    ]
  },
  {
    "id": "jaggery",
    "name": "Jaggery",
    "category": "spice",
    "estimatedUnitCost": 0.16,
    "unit": "tbsp",
    "commonPackageSize": "2 lb block",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "unrefined-sugar",
      "indian"
    ]
  },
  {
    "id": "piloncillo",
    "name": "Piloncillo",
    "category": "spice",
    "estimatedUnitCost": 0.14,
    "unit": "tbsp",
    "commonPackageSize": "8 oz cones (2-pack)",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "unrefined-sugar",
      "mexican",
      "cane"
    ]
  },
  {
    "id": "treacle",
    "name": "Black Treacle",
    "category": "condiment",
    "estimatedUnitCost": 0.28,
    "unit": "tbsp",
    "commonPackageSize": "16 oz tin",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "british"
    ]
  },
  {
    "id": "glucose-syrup",
    "name": "Glucose Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "confectionery",
      "baking-aid"
    ]
  },
  {
    "id": "invert-sugar",
    "name": "Invert Sugar Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.26,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "baking-aid"
    ]
  },
  {
    "id": "barley-malt-syrup",
    "name": "Barley Malt Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "malt",
      "baking-aid"
    ]
  },
  {
    "id": "brown-rice-syrup",
    "name": "Brown Rice Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.32,
    "unit": "tbsp",
    "commonPackageSize": "21 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "vegan"
    ]
  },
  {
    "id": "sorghum-syrup",
    "name": "Sorghum Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "southern"
    ]
  },
  {
    "id": "cane-syrup",
    "name": "Cane Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.34,
    "unit": "tbsp",
    "commonPackageSize": "11.5 oz can",
    "shelfLifeDays": 730,
    "tags": [
      "sweetener",
      "syrup",
      "southern"
    ]
  },
  {
    "id": "rock-sugar",
    "name": "Rock Sugar",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "tbsp",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 1825,
    "tags": [
      "sweetener",
      "crystallized-sugar",
      "asian"
    ]
  },
  {
    "id": "pearl-sugar",
    "name": "Pearl Sugar",
    "category": "spice",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "8 oz bag",
    "shelfLifeDays": 1825,
    "tags": [
      "decoration",
      "baking",
      "nordic",
      "belgian-waffle"
    ]
  },
  {
    "id": "couverture-dark-chocolate",
    "name": "Dark Chocolate Couverture",
    "category": "snack",
    "estimatedUnitCost": 0.95,
    "unit": "oz",
    "commonPackageSize": "2.2 lb bag",
    "shelfLifeDays": 540,
    "tags": [
      "chocolate",
      "tempering",
      "high-cocoa-butter",
      "baking"
    ]
  },
  {
    "id": "couverture-milk-chocolate",
    "name": "Milk Chocolate Couverture",
    "category": "snack",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "2.2 lb bag",
    "shelfLifeDays": 540,
    "tags": [
      "chocolate",
      "tempering",
      "high-cocoa-butter",
      "baking"
    ]
  },
  {
    "id": "couverture-white-chocolate",
    "name": "White Chocolate Couverture",
    "category": "snack",
    "estimatedUnitCost": 0.92,
    "unit": "oz",
    "commonPackageSize": "2.2 lb bag",
    "shelfLifeDays": 540,
    "tags": [
      "chocolate",
      "tempering",
      "high-cocoa-butter",
      "baking"
    ]
  },
  {
    "id": "ruby-chocolate",
    "name": "Ruby Chocolate",
    "category": "snack",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "1.5 lb bag",
    "shelfLifeDays": 540,
    "tags": [
      "chocolate",
      "specialty",
      "pink",
      "baking"
    ]
  },
  {
    "id": "cacao-paste",
    "name": "Cacao Paste",
    "category": "snack",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "1 lb block",
    "shelfLifeDays": 730,
    "tags": [
      "chocolate",
      "unsweetened",
      "cacao-mass",
      "baking"
    ]
  },
  {
    "id": "cocoa-butter",
    "name": "Cocoa Butter",
    "category": "condiment",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "1 lb block",
    "shelfLifeDays": 730,
    "tags": [
      "fat",
      "chocolate-making",
      "tempering",
      "baking"
    ]
  },
  {
    "id": "carob-powder",
    "name": "Carob Powder",
    "category": "spice",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 730,
    "tags": [
      "cocoa-alternative",
      "caffeine-free",
      "baking"
    ]
  },
  {
    "id": "chocolate-feves",
    "name": "Chocolate Feves",
    "category": "snack",
    "estimatedUnitCost": 0.88,
    "unit": "oz",
    "commonPackageSize": "2.2 lb bag",
    "shelfLifeDays": 540,
    "tags": [
      "chocolate",
      "melting",
      "baking",
      "disc"
    ]
  },
  {
    "id": "gianduja",
    "name": "Gianduja",
    "category": "snack",
    "estimatedUnitCost": 1.05,
    "unit": "oz",
    "commonPackageSize": "1 lb bar",
    "shelfLifeDays": 365,
    "tags": [
      "chocolate",
      "hazelnut",
      "italian",
      "baking"
    ]
  },
  {
    "id": "nonpareils",
    "name": "Nonpareils",
    "category": "snack",
    "estimatedUnitCost": 0.12,
    "unit": "tbsp",
    "commonPackageSize": "3.8 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "decoration",
      "sprinkles",
      "baking"
    ]
  },
  {
    "id": "edible-glitter",
    "name": "Edible Glitter",
    "category": "snack",
    "estimatedUnitCost": 0.4,
    "unit": "tsp",
    "commonPackageSize": "0.15 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "decoration",
      "baking",
      "luster"
    ]
  },
  {
    "id": "royal-icing-mix",
    "name": "Royal Icing Mix",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "oz",
    "commonPackageSize": "14 oz box",
    "shelfLifeDays": 540,
    "tags": [
      "baking-aid",
      "decorating",
      "icing"
    ]
  },
  {
    "id": "malt-powder",
    "name": "Diastatic Malt Powder",
    "category": "spice",
    "estimatedUnitCost": 0.08,
    "unit": "tsp",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 540,
    "tags": [
      "baking-aid",
      "bread",
      "enzyme"
    ]
  },
  {
    "id": "soy-lecithin",
    "name": "Soy Lecithin",
    "category": "condiment",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 730,
    "tags": [
      "emulsifier",
      "baking-aid"
    ]
  },
  {
    "id": "guar-gum",
    "name": "Guar Gum",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "8 oz bag",
    "shelfLifeDays": 1095,
    "tags": [
      "thickener",
      "gluten-free",
      "baking-aid",
      "stabilizer"
    ]
  },
  {
    "id": "agar-agar",
    "name": "Agar Agar Powder",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "gelling-agent",
      "vegan",
      "setting",
      "baking-aid"
    ]
  },
  {
    "id": "gelatin-sheets",
    "name": "Gelatin Sheets",
    "category": "condiment",
    "estimatedUnitCost": 0.16,
    "unit": "sheet",
    "commonPackageSize": "30 sheets box",
    "shelfLifeDays": 1460,
    "tags": [
      "gelling-agent",
      "setting",
      "baking-aid"
    ]
  },
  {
    "id": "citric-acid",
    "name": "Citric Acid",
    "category": "spice",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "10 oz bag",
    "shelfLifeDays": 1825,
    "tags": [
      "acidulant",
      "baking-aid",
      "sour",
      "preservative"
    ]
  },
  {
    "id": "bakers-ammonia",
    "name": "Baker's Ammonia",
    "category": "spice",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "leavening",
      "baking-aid",
      "ammonium-carbonate"
    ]
  },
  {
    "id": "frangipane",
    "name": "Frangipane",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "10 oz tub",
    "shelfLifeDays": 60,
    "tags": [
      "filling",
      "almond",
      "baking",
      "pastry"
    ]
  },
  {
    "id": "poppy-seed-filling",
    "name": "Poppy Seed Filling",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "12 oz can",
    "shelfLifeDays": 540,
    "tags": [
      "filling",
      "pastry",
      "baking",
      "eastern-european"
    ]
  },
  {
    "id": "lotus-paste",
    "name": "Lotus Seed Paste",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "17.6 oz can",
    "shelfLifeDays": 540,
    "tags": [
      "filling",
      "chinese",
      "mooncake",
      "baking"
    ]
  },
  {
    "id": "red-bean-paste",
    "name": "Red Bean Paste",
    "category": "condiment",
    "estimatedUnitCost": 0.38,
    "unit": "oz",
    "commonPackageSize": "18 oz can",
    "shelfLifeDays": 540,
    "tags": [
      "filling",
      "asian",
      "sweet",
      "baking"
    ]
  },
  {
    "id": "blueberry-pie-filling",
    "name": "Blueberry Pie Filling",
    "category": "canned",
    "estimatedUnitCost": 4.2,
    "unit": "can",
    "commonPackageSize": "21 oz can",
    "shelfLifeDays": 730,
    "tags": [
      "filling",
      "pie",
      "fruit",
      "baking"
    ]
  },
  {
    "id": "lime-curd",
    "name": "Lime Curd",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "10 oz jar",
    "shelfLifeDays": 120,
    "tags": [
      "filling",
      "citrus",
      "spread",
      "baking"
    ]
  },
  {
    "id": "passionfruit-curd",
    "name": "Passionfruit Curd",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "10 oz jar",
    "shelfLifeDays": 120,
    "tags": [
      "filling",
      "tropical",
      "spread",
      "baking"
    ]
  },
  {
    "id": "tianmianjiang",
    "name": "Tianmianjiang",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "10.6 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "chinese",
      "fermented",
      "sweet-wheat-paste",
      "umami"
    ]
  },
  {
    "id": "douchi",
    "name": "Fermented Black Beans",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "tbsp",
    "commonPackageSize": "8 oz bag",
    "shelfLifeDays": 730,
    "tags": [
      "chinese",
      "fermented",
      "douchi",
      "salty",
      "umami"
    ]
  },
  {
    "id": "furu",
    "name": "Fermented Tofu",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "8.8 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "chinese",
      "fermented",
      "tofu",
      "umami",
      "salty"
    ]
  },
  {
    "id": "bagoong",
    "name": "Bagoong Shrimp Paste",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "17.6 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "filipino",
      "fermented",
      "shrimp",
      "umami",
      "salty"
    ]
  },
  {
    "id": "yuzu-ponzu",
    "name": "Yuzu Ponzu",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "12 oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "citrus",
      "yuzu",
      "tangy",
      "low-cal"
    ]
  },
  {
    "id": "takoyaki-sauce",
    "name": "Takoyaki Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "sweet",
      "savory",
      "octopus-ball-sauce"
    ]
  },
  {
    "id": "yakisoba-sauce",
    "name": "Yakisoba Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.32,
    "unit": "tbsp",
    "commonPackageSize": "12 oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "savory",
      "sweet",
      "noodle-sauce"
    ]
  },
  {
    "id": "kecap-asin",
    "name": "Kecap Asin",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "21 oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "indonesian",
      "salty",
      "soy",
      "umami"
    ]
  },
  {
    "id": "sambal-terasi",
    "name": "Sambal Terasi",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "9.17 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "indonesian",
      "spicy",
      "shrimp-paste",
      "chili"
    ]
  },
  {
    "id": "nuoc-cham",
    "name": "Nuoc Cham",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "12 oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "vietnamese",
      "dipping-sauce",
      "tangy",
      "fish-sauce",
      "sweet"
    ]
  },
  {
    "id": "nam-prik-pao-exclude",
    "name": "Nam Phrik Num",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "thai",
      "roasted-chili",
      "spicy",
      "northern-thai"
    ]
  },
  {
    "id": "white-miso",
    "name": "White Miso",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz tub",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "fermented",
      "shiro-miso",
      "mild",
      "umami"
    ]
  },
  {
    "id": "red-miso",
    "name": "Red Miso",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz tub",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "fermented",
      "aka-miso",
      "robust",
      "umami"
    ]
  },
  {
    "id": "awase-miso",
    "name": "Awase Miso",
    "category": "condiment",
    "estimatedUnitCost": 0.33,
    "unit": "tbsp",
    "commonPackageSize": "17.6 oz tub",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "fermented",
      "blended-miso",
      "umami"
    ]
  },
  {
    "id": "barley-miso",
    "name": "Barley Miso",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "fermented",
      "mugi-miso",
      "earthy",
      "umami"
    ]
  },
  {
    "id": "rose-harissa",
    "name": "Rose Harissa",
    "category": "condiment",
    "estimatedUnitCost": 0.65,
    "unit": "tbsp",
    "commonPackageSize": "6.5 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "north-african",
      "spicy",
      "chili",
      "rose",
      "floral"
    ]
  },
  {
    "id": "shatta",
    "name": "Shatta",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "middle-eastern",
      "palestinian",
      "chili",
      "spicy",
      "fermented"
    ]
  },
  {
    "id": "toum",
    "name": "Toum",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 120,
    "tags": [
      "lebanese",
      "garlic",
      "emulsion",
      "creamy",
      "vegan"
    ]
  },
  {
    "id": "muhammara",
    "name": "Muhammara",
    "category": "condiment",
    "estimatedUnitCost": 0.6,
    "unit": "tbsp",
    "commonPackageSize": "10 oz tub",
    "shelfLifeDays": 90,
    "tags": [
      "syrian",
      "walnut",
      "red-pepper",
      "spread",
      "tangy"
    ]
  },
  {
    "id": "ajvar",
    "name": "Ajvar",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "19 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "balkan",
      "roasted-red-pepper",
      "spread",
      "vegan"
    ]
  },
  {
    "id": "lutenitsa",
    "name": "Lutenitsa",
    "category": "condiment",
    "estimatedUnitCost": 0.38,
    "unit": "tbsp",
    "commonPackageSize": "19.4 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "bulgarian",
      "roasted-pepper",
      "tomato",
      "spread",
      "vegan"
    ]
  },
  {
    "id": "mojo-verde",
    "name": "Mojo Verde",
    "category": "condiment",
    "estimatedUnitCost": 0.42,
    "unit": "tbsp",
    "commonPackageSize": "8.5 oz jar",
    "shelfLifeDays": 180,
    "tags": [
      "canarian",
      "cilantro",
      "garlic",
      "green-sauce",
      "vegan"
    ]
  },
  {
    "id": "chermoula",
    "name": "Chermoula",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "7 oz jar",
    "shelfLifeDays": 180,
    "tags": [
      "moroccan",
      "herb",
      "marinade",
      "cilantro",
      "spicy"
    ]
  },
  {
    "id": "zhug",
    "name": "Zhug",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "7 oz jar",
    "shelfLifeDays": 150,
    "tags": [
      "yemeni",
      "green-chili",
      "herb",
      "spicy",
      "vegan"
    ]
  },
  {
    "id": "recado-rojo",
    "name": "Recado Rojo",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "3.5 oz block",
    "shelfLifeDays": 365,
    "tags": [
      "mexican",
      "yucatan",
      "achiote",
      "spice-paste",
      "annatto"
    ]
  },
  {
    "id": "aji-verde",
    "name": "Aji Verde",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "10 oz bottle",
    "shelfLifeDays": 60,
    "tags": [
      "peruvian",
      "green-sauce",
      "spicy",
      "creamy",
      "cilantro"
    ]
  },
  {
    "id": "pique",
    "name": "Pique Criollo",
    "category": "condiment",
    "estimatedUnitCost": 0.15,
    "unit": "tsp",
    "commonPackageSize": "12 oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "puerto-rican",
      "hot-sauce",
      "vinegar",
      "spicy"
    ]
  },
  {
    "id": "sofregit",
    "name": "Sofregit",
    "category": "condiment",
    "estimatedUnitCost": 0.38,
    "unit": "tbsp",
    "commonPackageSize": "12 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "catalan",
      "tomato",
      "onion",
      "base-sauce",
      "vegan"
    ]
  },
  {
    "id": "mostarda",
    "name": "Mostarda",
    "category": "condiment",
    "estimatedUnitCost": 0.7,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "italian",
      "fruit",
      "mustard",
      "sweet-spicy",
      "condiment"
    ]
  },
  {
    "id": "piccalilli",
    "name": "Piccalilli",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "12.3 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "british",
      "pickle",
      "mustard",
      "tangy",
      "relish"
    ]
  },
  {
    "id": "brown-sauce",
    "name": "Brown Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "9.1 oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "british",
      "tangy",
      "savory",
      "hp-style"
    ]
  },
  {
    "id": "branston-pickle",
    "name": "Branston Pickle",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "10.6 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "british",
      "sweet-pickle",
      "chutney",
      "tangy"
    ]
  },
  {
    "id": "chow-chow",
    "name": "Chow Chow Relish",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "southern",
      "relish",
      "pickled",
      "tangy"
    ]
  },
  {
    "id": "comeback-sauce",
    "name": "Comeback Sauce",
    "category": "condiment",
    "estimatedUnitCost": 0.28,
    "unit": "tbsp",
    "commonPackageSize": "12 oz bottle",
    "shelfLifeDays": 180,
    "tags": [
      "southern",
      "mississippi",
      "creamy",
      "spicy",
      "dipping"
    ]
  },
  {
    "id": "gribiche",
    "name": "Sauce Gribiche",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "8 oz tub",
    "shelfLifeDays": 14,
    "tags": [
      "french",
      "egg",
      "caper",
      "creamy",
      "cold-sauce"
    ]
  },
  {
    "id": "dukkah-oil",
    "name": "Dukkah Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "8 oz bottle",
    "shelfLifeDays": 270,
    "tags": [
      "egyptian",
      "nut",
      "seed",
      "spiced-oil",
      "dipping"
    ]
  },
  {
    "id": "mojo-rojo",
    "name": "Mojo Rojo",
    "category": "condiment",
    "estimatedUnitCost": 0.42,
    "unit": "tbsp",
    "commonPackageSize": "8.5 oz jar",
    "shelfLifeDays": 180,
    "tags": [
      "canarian",
      "red-pepper",
      "garlic",
      "spicy",
      "vegan"
    ]
  },
  {
    "id": "banh-mi-pate",
    "name": "Liver Pate Spread",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "4 oz can",
    "shelfLifeDays": 365,
    "tags": [
      "vietnamese",
      "liver",
      "spread",
      "savory"
    ]
  },
  {
    "id": "perilla-oil",
    "name": "Perilla Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.62,
    "unit": "tbsp",
    "commonPackageSize": "6.7 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "korean",
      "finishing",
      "nutty"
    ]
  },
  {
    "id": "egoma-oil",
    "name": "Egoma Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.78,
    "unit": "tbsp",
    "commonPackageSize": "6.7 fl oz bottle",
    "shelfLifeDays": 300,
    "tags": [
      "oil",
      "japanese",
      "omega-3",
      "finishing"
    ]
  },
  {
    "id": "argan-oil",
    "name": "Argan Oil",
    "category": "condiment",
    "estimatedUnitCost": 1.35,
    "unit": "tbsp",
    "commonPackageSize": "8.5 fl oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "moroccan",
      "finishing",
      "nutty",
      "specialty"
    ]
  },
  {
    "id": "hemp-oil",
    "name": "Hemp Seed Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "8 fl oz bottle",
    "shelfLifeDays": 300,
    "tags": [
      "oil",
      "omega-3",
      "finishing",
      "cold-pressed"
    ]
  },
  {
    "id": "hazelnut-oil",
    "name": "Hazelnut Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.95,
    "unit": "tbsp",
    "commonPackageSize": "8.4 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "nutty",
      "finishing",
      "french",
      "specialty"
    ]
  },
  {
    "id": "pistachio-oil",
    "name": "Pistachio Oil",
    "category": "condiment",
    "estimatedUnitCost": 1.45,
    "unit": "tbsp",
    "commonPackageSize": "8.4 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "nutty",
      "finishing",
      "specialty"
    ]
  },
  {
    "id": "macadamia-oil",
    "name": "Macadamia Nut Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.72,
    "unit": "tbsp",
    "commonPackageSize": "8.5 fl oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "nutty",
      "high-heat",
      "monounsaturated"
    ]
  },
  {
    "id": "almond-oil",
    "name": "Almond Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.68,
    "unit": "tbsp",
    "commonPackageSize": "8 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "nutty",
      "finishing"
    ]
  },
  {
    "id": "pumpkin-seed-oil",
    "name": "Pumpkin Seed Oil",
    "category": "condiment",
    "estimatedUnitCost": 1.05,
    "unit": "tbsp",
    "commonPackageSize": "8.5 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "austrian",
      "finishing",
      "nutty",
      "specialty"
    ]
  },
  {
    "id": "tea-seed-oil",
    "name": "Tea Seed Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.6,
    "unit": "tbsp",
    "commonPackageSize": "16.9 fl oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "camellia",
      "high-heat",
      "chinese",
      "monounsaturated"
    ]
  },
  {
    "id": "red-palm-oil",
    "name": "Red Palm Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "16 fl oz jar",
    "shelfLifeDays": 720,
    "tags": [
      "oil",
      "west-african",
      "unrefined",
      "high-heat"
    ]
  },
  {
    "id": "toasted-pumpkin-seed-oil",
    "name": "Toasted Pumpkin Seed Oil",
    "category": "condiment",
    "estimatedUnitCost": 1.15,
    "unit": "tbsp",
    "commonPackageSize": "8.4 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "styrian",
      "roasted",
      "finishing",
      "specialty"
    ]
  },
  {
    "id": "toasted-walnut-oil",
    "name": "Toasted Walnut Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.88,
    "unit": "tbsp",
    "commonPackageSize": "8.4 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "oil",
      "roasted",
      "nutty",
      "finishing",
      "french"
    ]
  },
  {
    "id": "black-sesame-oil",
    "name": "Black Sesame Oil",
    "category": "condiment",
    "estimatedUnitCost": 0.58,
    "unit": "tbsp",
    "commonPackageSize": "6.2 fl oz bottle",
    "shelfLifeDays": 540,
    "tags": [
      "oil",
      "toasted",
      "finishing",
      "asian"
    ]
  },
  {
    "id": "cultured-ghee",
    "name": "Cultured Ghee",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "13 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "fat",
      "clarified-butter",
      "indian",
      "high-heat"
    ]
  },
  {
    "id": "grass-fed-ghee",
    "name": "Grass-Fed Ghee",
    "category": "condiment",
    "estimatedUnitCost": 0.58,
    "unit": "tbsp",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "fat",
      "clarified-butter",
      "high-heat"
    ]
  },
  {
    "id": "schmaltz",
    "name": "Schmaltz",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "12 oz jar",
    "shelfLifeDays": 180,
    "tags": [
      "fat",
      "rendered",
      "chicken",
      "jewish"
    ]
  },
  {
    "id": "leaf-lard",
    "name": "Leaf Lard",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "14 oz tub",
    "shelfLifeDays": 270,
    "tags": [
      "fat",
      "rendered",
      "pork",
      "baking",
      "pastry"
    ]
  },
  {
    "id": "beef-tallow",
    "name": "Beef Tallow",
    "category": "condiment",
    "estimatedUnitCost": 0.22,
    "unit": "tbsp",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 365,
    "tags": [
      "fat",
      "rendered",
      "high-heat",
      "frying"
    ]
  },
  {
    "id": "beef-dripping",
    "name": "Beef Dripping",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "8.8 oz tub",
    "shelfLifeDays": 270,
    "tags": [
      "fat",
      "rendered",
      "roasting",
      "british"
    ]
  },
  {
    "id": "bacon-fat",
    "name": "Bacon Fat",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tbsp",
    "commonPackageSize": "14 oz jar",
    "shelfLifeDays": 180,
    "tags": [
      "fat",
      "rendered",
      "pork",
      "smoky"
    ]
  },
  {
    "id": "banyuls-vinegar",
    "name": "Banyuls Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "16.9 fl oz bottle",
    "shelfLifeDays": 1825,
    "tags": [
      "vinegar",
      "french",
      "aged",
      "wine"
    ]
  },
  {
    "id": "jerez-vinegar",
    "name": "Jerez Sherry Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.48,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz bottle",
    "shelfLifeDays": 1825,
    "tags": [
      "vinegar",
      "spanish",
      "aged",
      "sherry"
    ]
  },
  {
    "id": "moscatel-vinegar",
    "name": "Moscatel Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.42,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz bottle",
    "shelfLifeDays": 1825,
    "tags": [
      "vinegar",
      "spanish",
      "sweet",
      "wine"
    ]
  },
  {
    "id": "ume-plum-vinegar",
    "name": "Ume Plum Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.38,
    "unit": "tbsp",
    "commonPackageSize": "10 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "japanese",
      "umeboshi",
      "salty",
      "tangy"
    ]
  },
  {
    "id": "kurozu-vinegar",
    "name": "Kurozu Black Rice Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.52,
    "unit": "tbsp",
    "commonPackageSize": "16.9 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "vinegar",
      "japanese",
      "aged",
      "brown-rice"
    ]
  },
  {
    "id": "persimmon-vinegar",
    "name": "Persimmon Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "16.9 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "korean",
      "fruit",
      "gamsikcho"
    ]
  },
  {
    "id": "coconut-vinegar",
    "name": "Coconut Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.28,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "filipino",
      "tropical",
      "fermented"
    ]
  },
  {
    "id": "cane-vinegar",
    "name": "Cane Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "filipino",
      "sugarcane",
      "sukang-iloco"
    ]
  },
  {
    "id": "date-vinegar",
    "name": "Date Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tbsp",
    "commonPackageSize": "16.9 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "middle-eastern",
      "fruit",
      "sweet"
    ]
  },
  {
    "id": "fig-vinegar",
    "name": "Fig Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.5,
    "unit": "tbsp",
    "commonPackageSize": "8.5 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "fruit",
      "sweet",
      "finishing"
    ]
  },
  {
    "id": "raspberry-vinegar",
    "name": "Raspberry Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.35,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "vinegar",
      "fruit",
      "sweet",
      "dressing"
    ]
  },
  {
    "id": "chardonnay-vinegar",
    "name": "Chardonnay Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.4,
    "unit": "tbsp",
    "commonPackageSize": "12.7 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "vinegar",
      "white-wine",
      "bright",
      "dressing"
    ]
  },
  {
    "id": "aged-balsamic-vinegar",
    "name": "Aged Balsamic Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.95,
    "unit": "tbsp",
    "commonPackageSize": "8.5 fl oz bottle",
    "shelfLifeDays": 2555,
    "tags": [
      "vinegar",
      "italian",
      "aged",
      "finishing",
      "syrupy"
    ]
  },
  {
    "id": "traditional-balsamic-vinegar",
    "name": "Traditional Balsamic Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 3.8,
    "unit": "tbsp",
    "commonPackageSize": "3.4 fl oz bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "vinegar",
      "italian",
      "dop",
      "aged",
      "finishing",
      "specialty"
    ]
  },
  {
    "id": "white-balsamic-vinegar",
    "name": "White Balsamic Vinegar",
    "category": "condiment",
    "estimatedUnitCost": 0.38,
    "unit": "tbsp",
    "commonPackageSize": "16.9 fl oz bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "vinegar",
      "italian",
      "light",
      "dressing"
    ]
  },
  {
    "id": "saba",
    "name": "Saba Grape Must Syrup",
    "category": "condiment",
    "estimatedUnitCost": 0.85,
    "unit": "tbsp",
    "commonPackageSize": "8.5 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "italian",
      "grape-must",
      "sweet",
      "finishing"
    ]
  },
  {
    "id": "vincotto",
    "name": "Vincotto",
    "category": "condiment",
    "estimatedUnitCost": 0.72,
    "unit": "tbsp",
    "commonPackageSize": "8.8 fl oz bottle",
    "shelfLifeDays": 730,
    "tags": [
      "italian",
      "grape-must",
      "sweet",
      "finishing"
    ]
  },
  {
    "id": "verjus",
    "name": "Verjus",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "25.4 fl oz bottle",
    "shelfLifeDays": 365,
    "tags": [
      "unripe-grape",
      "acidic",
      "wine-friendly",
      "french"
    ]
  },
  {
    "id": "grains-of-paradise",
    "name": "Grains Of Paradise",
    "category": "spice",
    "estimatedUnitCost": 0.28,
    "unit": "tsp",
    "commonPackageSize": "1.5 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "west-african",
      "peppery",
      "whole-spice"
    ]
  },
  {
    "id": "long-pepper",
    "name": "Long Pepper",
    "category": "spice",
    "estimatedUnitCost": 0.22,
    "unit": "tsp",
    "commonPackageSize": "1.6 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "pippali",
      "whole-spice",
      "ayurvedic"
    ]
  },
  {
    "id": "cubeb",
    "name": "Cubeb Pepper",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "1.5 oz jar",
    "shelfLifeDays": 1095,
    "tags": [
      "tailed-pepper",
      "whole-spice",
      "indonesian"
    ]
  },
  {
    "id": "mahleb",
    "name": "Mahleb",
    "category": "spice",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "2 oz pack",
    "shelfLifeDays": 730,
    "tags": [
      "cherry-pit",
      "middle-eastern",
      "baking"
    ]
  },
  {
    "id": "mastic",
    "name": "Mastic Gum",
    "category": "spice",
    "estimatedUnitCost": 0.85,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz pack",
    "shelfLifeDays": 1460,
    "tags": [
      "resin",
      "greek",
      "aromatic"
    ]
  },
  {
    "id": "anardana",
    "name": "Anardana",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz pack",
    "shelfLifeDays": 540,
    "tags": [
      "dried-pomegranate",
      "tangy",
      "indian"
    ]
  },
  {
    "id": "kokum",
    "name": "Kokum",
    "category": "spice",
    "estimatedUnitCost": 0.09,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz pack",
    "shelfLifeDays": 540,
    "tags": [
      "souring-agent",
      "konkani",
      "dried-fruit"
    ]
  },
  {
    "id": "black-lime",
    "name": "Black Lime",
    "category": "spice",
    "estimatedUnitCost": 0.35,
    "unit": "piece",
    "commonPackageSize": "6 limes pack",
    "shelfLifeDays": 730,
    "tags": [
      "loomi",
      "persian",
      "souring-agent"
    ]
  },
  {
    "id": "urfa-biber",
    "name": "Urfa Biber",
    "category": "spice",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "turkish",
      "smoky-chili",
      "mild"
    ]
  },
  {
    "id": "maras-pepper",
    "name": "Maras Pepper",
    "category": "spice",
    "estimatedUnitCost": 0.16,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "turkish",
      "chili-flakes",
      "mild"
    ]
  },
  {
    "id": "sansho",
    "name": "Sansho Pepper",
    "category": "spice",
    "estimatedUnitCost": 0.4,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "japanese",
      "citrusy",
      "ground"
    ]
  },
  {
    "id": "dried-galangal",
    "name": "Dried Galangal",
    "category": "spice",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "2 oz pack",
    "shelfLifeDays": 730,
    "tags": [
      "thai",
      "aromatic",
      "root"
    ]
  },
  {
    "id": "kaffir-lime-powder",
    "name": "Kaffir Lime Powder",
    "category": "spice",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "1 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "thai",
      "citrus",
      "aromatic"
    ]
  },
  {
    "id": "achiote-powder",
    "name": "Achiote Powder",
    "category": "spice",
    "estimatedUnitCost": 0.08,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "annatto",
      "latin",
      "coloring"
    ]
  },
  {
    "id": "hoja-santa",
    "name": "Hoja Santa",
    "category": "spice",
    "estimatedUnitCost": 0.15,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "mexican",
      "dried-herb",
      "anise"
    ]
  },
  {
    "id": "avocado-leaf",
    "name": "Avocado Leaf",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "mexican",
      "dried-herb",
      "anise"
    ]
  },
  {
    "id": "dried-pasilla",
    "name": "Dried Pasilla Chili",
    "category": "spice",
    "estimatedUnitCost": 0.3,
    "unit": "piece",
    "commonPackageSize": "3 oz bag",
    "shelfLifeDays": 540,
    "tags": [
      "mexican",
      "mild-heat",
      "whole-chili"
    ]
  },
  {
    "id": "morita-chili",
    "name": "Morita Chili",
    "category": "spice",
    "estimatedUnitCost": 0.18,
    "unit": "piece",
    "commonPackageSize": "3 oz bag",
    "shelfLifeDays": 540,
    "tags": [
      "mexican",
      "smoked",
      "whole-chili"
    ]
  },
  {
    "id": "cascabel-chili",
    "name": "Cascabel Chili",
    "category": "spice",
    "estimatedUnitCost": 0.2,
    "unit": "piece",
    "commonPackageSize": "3 oz bag",
    "shelfLifeDays": 540,
    "tags": [
      "mexican",
      "nutty",
      "whole-chili"
    ]
  },
  {
    "id": "dried-arbol",
    "name": "Dried Arbol Chili",
    "category": "spice",
    "estimatedUnitCost": 0.04,
    "unit": "piece",
    "commonPackageSize": "4 oz bag",
    "shelfLifeDays": 540,
    "tags": [
      "mexican",
      "hot",
      "whole-chili"
    ]
  },
  {
    "id": "dried-rose-petals",
    "name": "Dried Rose Petals",
    "category": "spice",
    "estimatedUnitCost": 0.14,
    "unit": "tsp",
    "commonPackageSize": "1 oz pack",
    "shelfLifeDays": 730,
    "tags": [
      "persian",
      "floral",
      "aromatic"
    ]
  },
  {
    "id": "advieh",
    "name": "Advieh",
    "category": "spice",
    "estimatedUnitCost": 0.16,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "persian",
      "blend",
      "aromatic"
    ]
  },
  {
    "id": "hawaij",
    "name": "Hawaij",
    "category": "spice",
    "estimatedUnitCost": 0.14,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "yemeni",
      "blend",
      "savory"
    ]
  },
  {
    "id": "tabil",
    "name": "Tabil",
    "category": "spice",
    "estimatedUnitCost": 0.13,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "tunisian",
      "blend",
      "coriander"
    ]
  },
  {
    "id": "dry-chermoula",
    "name": "Dry Chermoula",
    "category": "spice",
    "estimatedUnitCost": 0.15,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "moroccan",
      "blend",
      "herby"
    ]
  },
  {
    "id": "suya-spice",
    "name": "Suya Spice",
    "category": "spice",
    "estimatedUnitCost": 0.13,
    "unit": "tsp",
    "commonPackageSize": "3 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "nigerian",
      "yaji",
      "peanut-blend"
    ]
  },
  {
    "id": "jollof-spice",
    "name": "Jollof Spice",
    "category": "spice",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "west-african",
      "blend",
      "savory"
    ]
  },
  {
    "id": "madras-curry-powder",
    "name": "Madras Curry Powder",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "indian",
      "hot-curry",
      "blend"
    ]
  },
  {
    "id": "vindaloo-masala",
    "name": "Vindaloo Masala",
    "category": "spice",
    "estimatedUnitCost": 0.08,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "goan",
      "hot",
      "blend"
    ]
  },
  {
    "id": "jamaican-curry-powder",
    "name": "Jamaican Curry Powder",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "caribbean",
      "turmeric",
      "blend"
    ]
  },
  {
    "id": "sambar-powder",
    "name": "Sambar Powder",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "7 oz pack",
    "shelfLifeDays": 540,
    "tags": [
      "south-indian",
      "blend",
      "lentil-spice"
    ]
  },
  {
    "id": "rasam-powder",
    "name": "Rasam Powder",
    "category": "spice",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "7 oz pack",
    "shelfLifeDays": 540,
    "tags": [
      "south-indian",
      "blend",
      "tangy"
    ]
  },
  {
    "id": "panch-phoron",
    "name": "Panch Phoron",
    "category": "spice",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz pack",
    "shelfLifeDays": 730,
    "tags": [
      "bengali",
      "whole-seed",
      "blend"
    ]
  },
  {
    "id": "bumbu-base",
    "name": "Bumbu Spice Base",
    "category": "spice",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "3 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "indonesian",
      "blend",
      "aromatic"
    ]
  },
  {
    "id": "quatre-epices",
    "name": "Quatre Epices",
    "category": "spice",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "french",
      "blend",
      "warm-spice"
    ]
  },
  {
    "id": "jerk-dry-rub",
    "name": "Jerk Dry Rub",
    "category": "spice",
    "estimatedUnitCost": 0.07,
    "unit": "tsp",
    "commonPackageSize": "5 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "jamaican",
      "blend",
      "allspice"
    ]
  },
  {
    "id": "dry-zhug",
    "name": "Dry Zhug",
    "category": "spice",
    "estimatedUnitCost": 0.13,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "yemeni",
      "blend",
      "spicy"
    ]
  },
  {
    "id": "khmeli-suneli",
    "name": "Khmeli Suneli",
    "category": "spice",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "2 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "georgian",
      "blend",
      "herby"
    ]
  },
  {
    "id": "ichimi-togarashi",
    "name": "Ichimi Togarashi",
    "category": "spice",
    "estimatedUnitCost": 0.22,
    "unit": "tsp",
    "commonPackageSize": "0.5 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "japanese",
      "chili",
      "ground"
    ]
  },
  {
    "id": "mitmita",
    "name": "Mitmita",
    "category": "spice",
    "estimatedUnitCost": 0.13,
    "unit": "tsp",
    "commonPackageSize": "3 oz pack",
    "shelfLifeDays": 540,
    "tags": [
      "ethiopian",
      "hot",
      "blend"
    ]
  },
  {
    "id": "curtido",
    "name": "Curtido",
    "category": "canned",
    "estimatedUnitCost": 1.35,
    "unit": "cup",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "fermented",
      "pickled",
      "salvadoran",
      "cabbage",
      "vegan"
    ]
  },
  {
    "id": "kosher-dill-pickles",
    "name": "Kosher Dill Pickles",
    "category": "canned",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "24 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "cucumber",
      "vegan",
      "low-calorie"
    ]
  },
  {
    "id": "cornichons",
    "name": "Cornichons",
    "category": "canned",
    "estimatedUnitCost": 0.18,
    "unit": "piece",
    "commonPackageSize": "12 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "french",
      "gherkin",
      "vegan"
    ]
  },
  {
    "id": "pickled-okra",
    "name": "Pickled Okra",
    "category": "canned",
    "estimatedUnitCost": 0.22,
    "unit": "piece",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "southern",
      "vegan"
    ]
  },
  {
    "id": "pickled-beets",
    "name": "Pickled Beets",
    "category": "canned",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "vegan",
      "sweet-sour"
    ]
  },
  {
    "id": "pickled-red-onions",
    "name": "Pickled Red Onions",
    "category": "canned",
    "estimatedUnitCost": 1.5,
    "unit": "cup",
    "commonPackageSize": "12 oz jar",
    "shelfLifeDays": 120,
    "tags": [
      "pickled",
      "vegan",
      "garnish"
    ]
  },
  {
    "id": "pickled-garlic",
    "name": "Pickled Garlic",
    "category": "canned",
    "estimatedUnitCost": 0.12,
    "unit": "piece",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "vegan",
      "aromatic"
    ]
  },
  {
    "id": "takuan",
    "name": "Takuan Pickled Daikon",
    "category": "canned",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "12 oz pack",
    "shelfLifeDays": 180,
    "tags": [
      "pickled",
      "japanese",
      "tsukemono",
      "vegan"
    ]
  },
  {
    "id": "fukujinzuke",
    "name": "Fukujinzuke",
    "category": "canned",
    "estimatedUnitCost": 0.7,
    "unit": "oz",
    "commonPackageSize": "7 oz pack",
    "shelfLifeDays": 180,
    "tags": [
      "pickled",
      "japanese",
      "curry-condiment",
      "vegan"
    ]
  },
  {
    "id": "atchara",
    "name": "Atchara",
    "category": "canned",
    "estimatedUnitCost": 1.4,
    "unit": "cup",
    "commonPackageSize": "12 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "pickled",
      "filipino",
      "papaya",
      "vegan",
      "sweet-sour"
    ]
  },
  {
    "id": "torshi",
    "name": "Torshi Mixed Pickles",
    "category": "canned",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "middle-eastern",
      "persian",
      "vegan"
    ]
  },
  {
    "id": "lime-pickle",
    "name": "Lime Pickle",
    "category": "canned",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "10 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "indian",
      "achar",
      "spicy",
      "vegan"
    ]
  },
  {
    "id": "kimchi-radish",
    "name": "Kkakdugi Radish Kimchi",
    "category": "canned",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 120,
    "tags": [
      "fermented",
      "korean",
      "kimchi",
      "vegan",
      "spicy"
    ]
  },
  {
    "id": "sardines-in-tomato-sauce",
    "name": "Sardines In Tomato Sauce",
    "category": "canned",
    "estimatedUnitCost": 1.4,
    "unit": "can",
    "commonPackageSize": "4.4 oz can",
    "shelfLifeDays": 1095,
    "tags": [
      "preserved-fish",
      "omega-3",
      "high-protein",
      "pantry"
    ]
  },
  {
    "id": "sardines-in-olive-oil",
    "name": "Sardines In Olive Oil",
    "category": "canned",
    "estimatedUnitCost": 2.8,
    "unit": "can",
    "commonPackageSize": "4.4 oz can",
    "shelfLifeDays": 1460,
    "tags": [
      "preserved-fish",
      "omega-3",
      "high-protein",
      "pantry"
    ]
  },
  {
    "id": "tinned-mussels",
    "name": "Tinned Mussels In Escabeche",
    "category": "canned",
    "estimatedUnitCost": 3.5,
    "unit": "can",
    "commonPackageSize": "4 oz can",
    "shelfLifeDays": 1460,
    "tags": [
      "preserved-fish",
      "shellfish",
      "spanish",
      "conserva",
      "high-protein"
    ]
  },
  {
    "id": "smoked-trout-tinned",
    "name": "Smoked Trout Tinned",
    "category": "canned",
    "estimatedUnitCost": 4.5,
    "unit": "can",
    "commonPackageSize": "3.5 oz can",
    "shelfLifeDays": 1095,
    "tags": [
      "preserved-fish",
      "smoked",
      "omega-3",
      "high-protein",
      "conserva"
    ]
  },
  {
    "id": "tuna-ventresca",
    "name": "Tuna Ventresca In Olive Oil",
    "category": "canned",
    "estimatedUnitCost": 8.5,
    "unit": "can",
    "commonPackageSize": "4 oz jar",
    "shelfLifeDays": 1460,
    "tags": [
      "preserved-fish",
      "premium",
      "spanish",
      "conserva",
      "high-protein"
    ]
  },
  {
    "id": "bottarga",
    "name": "Bottarga",
    "category": "canned",
    "estimatedUnitCost": 9,
    "unit": "oz",
    "commonPackageSize": "3 oz piece",
    "shelfLifeDays": 365,
    "tags": [
      "preserved-fish",
      "cured-roe",
      "italian",
      "umami",
      "premium"
    ]
  },
  {
    "id": "salted-anchovies",
    "name": "Salt-Packed Anchovies",
    "category": "canned",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "8 oz tin",
    "shelfLifeDays": 730,
    "tags": [
      "preserved-fish",
      "salt-cured",
      "umami",
      "italian"
    ]
  },
  {
    "id": "gigantes-beans",
    "name": "Gigantes Beans In Tomato Sauce",
    "category": "canned",
    "estimatedUnitCost": 2.3,
    "unit": "cup",
    "commonPackageSize": "19 oz can",
    "shelfLifeDays": 1095,
    "tags": [
      "beans",
      "greek",
      "vegan",
      "high-fiber",
      "plaki"
    ]
  },
  {
    "id": "stuffed-grape-leaves",
    "name": "Stuffed Grape Leaves",
    "category": "canned",
    "estimatedUnitCost": 0.4,
    "unit": "piece",
    "commonPackageSize": "14 oz can",
    "shelfLifeDays": 1095,
    "tags": [
      "dolma",
      "mediterranean",
      "vegan",
      "rice-stuffed"
    ]
  },
  {
    "id": "piquillo-peppers",
    "name": "Piquillo Peppers",
    "category": "canned",
    "estimatedUnitCost": 0.65,
    "unit": "piece",
    "commonPackageSize": "12 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "roasted",
      "spanish",
      "vegan",
      "sweet"
    ]
  },
  {
    "id": "peppadew-peppers",
    "name": "Peppadew Peppers",
    "category": "canned",
    "estimatedUnitCost": 0.35,
    "unit": "piece",
    "commonPackageSize": "14 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "sweet-spicy",
      "south-african",
      "vegan"
    ]
  },
  {
    "id": "calabrian-chili-paste",
    "name": "Calabrian Chili Paste",
    "category": "canned",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "7 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "jarred",
      "italian",
      "spicy",
      "condiment",
      "vegan"
    ]
  },
  {
    "id": "caperberries",
    "name": "Caperberries",
    "category": "canned",
    "estimatedUnitCost": 0.2,
    "unit": "piece",
    "commonPackageSize": "9 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "pickled",
      "mediterranean",
      "briny",
      "vegan"
    ]
  },
  {
    "id": "castelvetrano-olives",
    "name": "Castelvetrano Olives",
    "category": "canned",
    "estimatedUnitCost": 0.85,
    "unit": "oz",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "olives",
      "italian",
      "buttery",
      "vegan"
    ]
  },
  {
    "id": "nicoise-olives",
    "name": "Nicoise Olives",
    "category": "canned",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "7 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "olives",
      "french",
      "provencal",
      "vegan"
    ]
  },
  {
    "id": "cerignola-olives",
    "name": "Cerignola Olives",
    "category": "canned",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "olives",
      "italian",
      "large",
      "vegan"
    ]
  },
  {
    "id": "manzanilla-olives",
    "name": "Manzanilla Olives",
    "category": "canned",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "10 oz jar",
    "shelfLifeDays": 730,
    "tags": [
      "olives",
      "spanish",
      "green",
      "vegan"
    ]
  },
  {
    "id": "tapenade",
    "name": "Olive Tapenade",
    "category": "canned",
    "estimatedUnitCost": 0.55,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "spread",
      "french",
      "olive",
      "vegan",
      "umami"
    ]
  },
  {
    "id": "mango-chutney",
    "name": "Mango Chutney",
    "category": "canned",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "9 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "chutney",
      "indian",
      "sweet",
      "condiment",
      "vegan"
    ]
  },
  {
    "id": "tamarind-chutney",
    "name": "Tamarind Chutney",
    "category": "canned",
    "estimatedUnitCost": 0.3,
    "unit": "tbsp",
    "commonPackageSize": "8 oz jar",
    "shelfLifeDays": 365,
    "tags": [
      "chutney",
      "indian",
      "sweet-sour",
      "condiment",
      "vegan"
    ]
  },
  {
    "id": "sweet-red-bean-paste",
    "name": "Sweet Red Bean Paste",
    "category": "canned",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "18 oz can",
    "shelfLifeDays": 540,
    "tags": [
      "paste",
      "asian",
      "anko",
      "sweet",
      "baking",
      "vegan"
    ]
  },
  {
    "id": "halva",
    "name": "Tahini Halva",
    "category": "canned",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "16 oz tub",
    "shelfLifeDays": 365,
    "tags": [
      "confection",
      "middle-eastern",
      "sesame",
      "sweet",
      "vegan"
    ]
  },
  {
    "id": "sun-dried-tomatoes-in-oil",
    "name": "Sun-Dried Tomatoes In Oil",
    "category": "canned",
    "estimatedUnitCost": 1.2,
    "unit": "oz",
    "commonPackageSize": "8.5 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "jarred",
      "italian",
      "umami",
      "vegan"
    ]
  },
  {
    "id": "dilly-beans",
    "name": "Pickled Dilly Beans",
    "category": "canned",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "green-bean",
      "vegan",
      "dill"
    ]
  },
  {
    "id": "pickled-cherry-peppers",
    "name": "Pickled Cherry Peppers",
    "category": "canned",
    "estimatedUnitCost": 0.3,
    "unit": "piece",
    "commonPackageSize": "16 oz jar",
    "shelfLifeDays": 540,
    "tags": [
      "pickled",
      "spicy",
      "vegan",
      "sweet-hot"
    ]
  },
  {
    "id": "frozen-fava-beans",
    "name": "Frozen Fava Beans",
    "category": "frozen",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "legume",
      "vegan",
      "mediterranean"
    ]
  },
  {
    "id": "frozen-lima-beans",
    "name": "Frozen Lima Beans",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "legume",
      "vegan"
    ]
  },
  {
    "id": "frozen-artichoke-hearts",
    "name": "Frozen Artichoke Hearts",
    "category": "frozen",
    "estimatedUnitCost": 1.6,
    "unit": "cup",
    "commonPackageSize": "12 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "vegan",
      "mediterranean"
    ]
  },
  {
    "id": "frozen-collard-greens",
    "name": "Frozen Collard Greens",
    "category": "frozen",
    "estimatedUnitCost": 0.6,
    "unit": "cup",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "leafy-green",
      "vegan",
      "southern"
    ]
  },
  {
    "id": "frozen-butternut-squash",
    "name": "Frozen Butternut Squash",
    "category": "frozen",
    "estimatedUnitCost": 0.95,
    "unit": "cup",
    "commonPackageSize": "12 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "vegan",
      "diced"
    ]
  },
  {
    "id": "frozen-riced-broccoli",
    "name": "Frozen Riced Broccoli",
    "category": "frozen",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "12 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "vegan",
      "low-carb",
      "keto"
    ]
  },
  {
    "id": "frozen-plantain",
    "name": "Frozen Plantain",
    "category": "frozen",
    "estimatedUnitCost": 1.1,
    "unit": "cup",
    "commonPackageSize": "14 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "vegan",
      "caribbean",
      "latin"
    ]
  },
  {
    "id": "frozen-yuca",
    "name": "Frozen Yuca",
    "category": "frozen",
    "estimatedUnitCost": 0.9,
    "unit": "cup",
    "commonPackageSize": "20 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "vegan",
      "latin",
      "cassava"
    ]
  },
  {
    "id": "frozen-durian",
    "name": "Frozen Durian",
    "category": "frozen",
    "estimatedUnitCost": 4.5,
    "unit": "cup",
    "commonPackageSize": "14 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "vegan",
      "southeast-asian",
      "tropical"
    ]
  },
  {
    "id": "frozen-dragonfruit",
    "name": "Frozen Dragonfruit",
    "category": "frozen",
    "estimatedUnitCost": 2.2,
    "unit": "cup",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "vegan",
      "tropical",
      "smoothie"
    ]
  },
  {
    "id": "frozen-passionfruit-pulp",
    "name": "Frozen Passionfruit Pulp",
    "category": "frozen",
    "estimatedUnitCost": 3.2,
    "unit": "cup",
    "commonPackageSize": "14 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "vegan",
      "tropical",
      "latin",
      "smoothie"
    ]
  },
  {
    "id": "frozen-guava-pulp",
    "name": "Frozen Guava Pulp",
    "category": "frozen",
    "estimatedUnitCost": 2.6,
    "unit": "cup",
    "commonPackageSize": "14 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "vegan",
      "tropical",
      "latin",
      "smoothie"
    ]
  },
  {
    "id": "frozen-soursop-pulp",
    "name": "Frozen Soursop Pulp",
    "category": "frozen",
    "estimatedUnitCost": 3.5,
    "unit": "cup",
    "commonPackageSize": "14 oz pack",
    "shelfLifeDays": 365,
    "tags": [
      "fruit",
      "vegan",
      "tropical",
      "latin",
      "smoothie"
    ]
  },
  {
    "id": "frozen-wontons",
    "name": "Frozen Wontons",
    "category": "frozen",
    "estimatedUnitCost": 0.35,
    "unit": "piece",
    "commonPackageSize": "18 oz bag (about 24 ct)",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "asian",
      "dumpling"
    ]
  },
  {
    "id": "frozen-samosas",
    "name": "Frozen Samosas",
    "category": "frozen",
    "estimatedUnitCost": 0.75,
    "unit": "piece",
    "commonPackageSize": "12 ct box",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "indian",
      "vegetarian",
      "snack"
    ]
  },
  {
    "id": "frozen-paratha",
    "name": "Frozen Paratha",
    "category": "frozen",
    "estimatedUnitCost": 0.55,
    "unit": "piece",
    "commonPackageSize": "5 ct pack",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "indian",
      "flatbread",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-naan",
    "name": "Frozen Naan",
    "category": "frozen",
    "estimatedUnitCost": 1.1,
    "unit": "piece",
    "commonPackageSize": "4 ct pack",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "indian",
      "flatbread",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-pierogi",
    "name": "Frozen Pierogi",
    "category": "frozen",
    "estimatedUnitCost": 0.4,
    "unit": "piece",
    "commonPackageSize": "16 oz box (about 12 ct)",
    "shelfLifeDays": 365,
    "tags": [
      "prepared",
      "polish",
      "dumpling",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-arancini",
    "name": "Frozen Arancini",
    "category": "frozen",
    "estimatedUnitCost": 1,
    "unit": "piece",
    "commonPackageSize": "10 oz box (about 8 ct)",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "italian",
      "vegetarian",
      "appetizer"
    ]
  },
  {
    "id": "frozen-empanadas",
    "name": "Frozen Empanadas",
    "category": "frozen",
    "estimatedUnitCost": 1.2,
    "unit": "piece",
    "commonPackageSize": "10 ct box",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "latin",
      "appetizer"
    ]
  },
  {
    "id": "frozen-tamales",
    "name": "Frozen Tamales",
    "category": "frozen",
    "estimatedUnitCost": 1.5,
    "unit": "piece",
    "commonPackageSize": "6 ct pack",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "latin",
      "mexican"
    ]
  },
  {
    "id": "frozen-bao-buns",
    "name": "Frozen Bao Buns",
    "category": "frozen",
    "estimatedUnitCost": 0.9,
    "unit": "piece",
    "commonPackageSize": "6 ct pack",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "asian",
      "chinese",
      "steamed"
    ]
  },
  {
    "id": "frozen-mochi-ice-cream",
    "name": "Frozen Mochi Ice Cream",
    "category": "frozen",
    "estimatedUnitCost": 1,
    "unit": "piece",
    "commonPackageSize": "6 ct box",
    "shelfLifeDays": 365,
    "tags": [
      "prepared",
      "dessert",
      "japanese",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-taiyaki",
    "name": "Frozen Taiyaki",
    "category": "frozen",
    "estimatedUnitCost": 1.3,
    "unit": "piece",
    "commonPackageSize": "4 ct pack",
    "shelfLifeDays": 365,
    "tags": [
      "prepared",
      "dessert",
      "japanese",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-calamari-rings",
    "name": "Frozen Calamari Rings",
    "category": "frozen",
    "estimatedUnitCost": 0.7,
    "unit": "oz",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 270,
    "tags": [
      "protein",
      "seafood",
      "breaded"
    ]
  },
  {
    "id": "frozen-scallops",
    "name": "Frozen Scallops",
    "category": "frozen",
    "estimatedUnitCost": 1.4,
    "unit": "oz",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "protein",
      "seafood",
      "shellfish"
    ]
  },
  {
    "id": "frozen-crab-cakes",
    "name": "Frozen Crab Cakes",
    "category": "frozen",
    "estimatedUnitCost": 2.5,
    "unit": "piece",
    "commonPackageSize": "6 ct box",
    "shelfLifeDays": 270,
    "tags": [
      "protein",
      "seafood",
      "prepared"
    ]
  },
  {
    "id": "frozen-fish-balls",
    "name": "Frozen Fish Balls",
    "category": "frozen",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "17.6 oz bag",
    "shelfLifeDays": 270,
    "tags": [
      "protein",
      "seafood",
      "asian",
      "hot-pot"
    ]
  },
  {
    "id": "frozen-beef-meatballs",
    "name": "Frozen Beef Meatballs",
    "category": "frozen",
    "estimatedUnitCost": 0.4,
    "unit": "oz",
    "commonPackageSize": "32 oz bag",
    "shelfLifeDays": 270,
    "tags": [
      "protein",
      "beef",
      "prepared"
    ]
  },
  {
    "id": "frozen-chicken-meatballs",
    "name": "Frozen Chicken Meatballs",
    "category": "frozen",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "20 oz bag",
    "shelfLifeDays": 270,
    "tags": [
      "protein",
      "chicken",
      "prepared",
      "lean"
    ]
  },
  {
    "id": "frozen-bread-dough",
    "name": "Frozen Bread Dough",
    "category": "frozen",
    "estimatedUnitCost": 1.1,
    "unit": "piece",
    "commonPackageSize": "3 loaf pack",
    "shelfLifeDays": 365,
    "tags": [
      "dough",
      "bakery",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-croissant-dough",
    "name": "Frozen Croissant Dough",
    "category": "frozen",
    "estimatedUnitCost": 1,
    "unit": "piece",
    "commonPackageSize": "12 ct pack",
    "shelfLifeDays": 270,
    "tags": [
      "dough",
      "bakery",
      "vegetarian",
      "laminated"
    ]
  },
  {
    "id": "frozen-cookie-dough",
    "name": "Frozen Cookie Dough",
    "category": "frozen",
    "estimatedUnitCost": 0.5,
    "unit": "piece",
    "commonPackageSize": "24 ct tray",
    "shelfLifeDays": 365,
    "tags": [
      "dough",
      "bakery",
      "dessert",
      "vegetarian"
    ]
  },
  {
    "id": "frozen-biscuit-dough",
    "name": "Frozen Biscuit Dough",
    "category": "frozen",
    "estimatedUnitCost": 0.4,
    "unit": "piece",
    "commonPackageSize": "20 ct bag",
    "shelfLifeDays": 365,
    "tags": [
      "dough",
      "bakery",
      "vegetarian",
      "southern"
    ]
  },
  {
    "id": "frozen-kibbeh",
    "name": "Frozen Kibbeh",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "piece",
    "commonPackageSize": "12 ct box",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "middle-eastern",
      "appetizer"
    ]
  },
  {
    "id": "frozen-croquettes",
    "name": "Frozen Croquettes",
    "category": "frozen",
    "estimatedUnitCost": 0.7,
    "unit": "piece",
    "commonPackageSize": "10 ct box",
    "shelfLifeDays": 270,
    "tags": [
      "prepared",
      "appetizer",
      "breaded"
    ]
  },
  {
    "id": "frozen-gnocchi",
    "name": "Frozen Gnocchi",
    "category": "frozen",
    "estimatedUnitCost": 1.3,
    "unit": "cup",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "prepared",
      "italian",
      "vegetarian",
      "pasta"
    ]
  },
  {
    "id": "frozen-falafel",
    "name": "Frozen Falafel",
    "category": "frozen",
    "estimatedUnitCost": 0.35,
    "unit": "piece",
    "commonPackageSize": "16 oz bag (about 18 ct)",
    "shelfLifeDays": 365,
    "tags": [
      "prepared",
      "middle-eastern",
      "vegan",
      "appetizer"
    ]
  },
  {
    "id": "frozen-plant-based-patty",
    "name": "Frozen Plant-Based Patty",
    "category": "frozen",
    "estimatedUnitCost": 1.6,
    "unit": "piece",
    "commonPackageSize": "4 ct box",
    "shelfLifeDays": 365,
    "tags": [
      "protein",
      "vegan",
      "plant-based",
      "prepared"
    ]
  },
  {
    "id": "frozen-riced-cauliflower",
    "name": "Frozen Riced Cauliflower",
    "category": "frozen",
    "estimatedUnitCost": 0.85,
    "unit": "cup",
    "commonPackageSize": "12 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "vegan",
      "low-carb",
      "keto"
    ]
  },
  {
    "id": "frozen-chopped-spinach",
    "name": "Frozen Chopped Spinach",
    "category": "frozen",
    "estimatedUnitCost": 0.55,
    "unit": "cup",
    "commonPackageSize": "16 oz bag",
    "shelfLifeDays": 365,
    "tags": [
      "vegetable",
      "leafy-green",
      "vegan"
    ]
  },
  {
    "id": "frozen-shrimp-jumbo",
    "name": "Frozen Jumbo Shrimp",
    "category": "frozen",
    "estimatedUnitCost": 1.1,
    "unit": "oz",
    "commonPackageSize": "16 oz bag (16/20 ct)",
    "shelfLifeDays": 365,
    "tags": [
      "protein",
      "seafood",
      "shellfish"
    ]
  },
  {
    "id": "frozen-pork-meatballs",
    "name": "Frozen Pork Meatballs",
    "category": "frozen",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "24 oz bag",
    "shelfLifeDays": 270,
    "tags": [
      "protein",
      "pork",
      "prepared"
    ]
  },
  {
    "id": "hojicha-powder",
    "name": "Hojicha Powder",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (100 g) tin",
    "shelfLifeDays": 365,
    "tags": [
      "tea",
      "japanese",
      "roasted",
      "caffeine"
    ]
  },
  {
    "id": "genmaicha",
    "name": "Genmaicha",
    "category": "condiment",
    "estimatedUnitCost": 0.12,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (100 g) bag",
    "shelfLifeDays": 540,
    "tags": [
      "tea",
      "japanese",
      "green-tea",
      "toasted-rice"
    ]
  },
  {
    "id": "sencha",
    "name": "Sencha",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (100 g) bag",
    "shelfLifeDays": 365,
    "tags": [
      "tea",
      "japanese",
      "green-tea",
      "loose-leaf",
      "caffeine"
    ]
  },
  {
    "id": "pu-erh-tea",
    "name": "Pu-Erh Tea",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "tsp",
    "commonPackageSize": "3.5 oz (100 g) cake",
    "shelfLifeDays": 3650,
    "tags": [
      "tea",
      "chinese",
      "fermented",
      "dark-tea",
      "caffeine"
    ]
  },
  {
    "id": "rooibos-tea",
    "name": "Rooibos Tea",
    "category": "condiment",
    "estimatedUnitCost": 0.08,
    "unit": "tsp",
    "commonPackageSize": "4 oz (113 g) bag",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "herbal",
      "caffeine-free",
      "south-african"
    ]
  },
  {
    "id": "hibiscus-tea",
    "name": "Hibiscus Tea",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "4 oz (113 g) dried flowers",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "herbal",
      "caffeine-free",
      "tart"
    ]
  },
  {
    "id": "butterfly-pea-flower",
    "name": "Butterfly Pea Flower",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "tsp",
    "commonPackageSize": "1.7 oz (50 g) dried flowers",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "herbal",
      "caffeine-free",
      "blue",
      "natural-dye"
    ]
  },
  {
    "id": "yerba-mate",
    "name": "Yerba Mate",
    "category": "condiment",
    "estimatedUnitCost": 0.06,
    "unit": "tsp",
    "commonPackageSize": "1 lb (454 g) loose",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "south-american",
      "caffeine",
      "herbal"
    ]
  },
  {
    "id": "mugicha",
    "name": "Mugicha",
    "category": "condiment",
    "estimatedUnitCost": 0.05,
    "unit": "tsp",
    "commonPackageSize": "8 oz (227 g) roasted barley",
    "shelfLifeDays": 540,
    "tags": [
      "tea",
      "japanese",
      "roasted-barley",
      "caffeine-free"
    ]
  },
  {
    "id": "chai-masala-blend",
    "name": "Chai Masala Blend",
    "category": "spice",
    "estimatedUnitCost": 0.15,
    "unit": "tsp",
    "commonPackageSize": "3 oz (85 g) jar",
    "shelfLifeDays": 730,
    "tags": [
      "tea",
      "indian",
      "spice-blend",
      "masala"
    ]
  },
  {
    "id": "instant-espresso-beans",
    "name": "Espresso Roast Beans",
    "category": "condiment",
    "estimatedUnitCost": 0.75,
    "unit": "oz",
    "commonPackageSize": "12 oz (340 g) bag",
    "shelfLifeDays": 270,
    "tags": [
      "coffee",
      "whole-bean",
      "caffeine",
      "dark-roast"
    ]
  },
  {
    "id": "chicory-root-coffee",
    "name": "Chicory Root Coffee",
    "category": "condiment",
    "estimatedUnitCost": 0.1,
    "unit": "tsp",
    "commonPackageSize": "7 oz (198 g) ground",
    "shelfLifeDays": 365,
    "tags": [
      "coffee-substitute",
      "caffeine-free",
      "roasted-root"
    ]
  },
  {
    "id": "turkish-coffee-grind",
    "name": "Turkish Coffee Grind",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "tsp",
    "commonPackageSize": "8 oz (227 g) fine grind",
    "shelfLifeDays": 270,
    "tags": [
      "coffee",
      "fine-grind",
      "caffeine"
    ]
  },
  {
    "id": "aloe-vera-juice",
    "name": "Aloe Vera Juice",
    "category": "condiment",
    "estimatedUnitCost": 0.18,
    "unit": "fl oz",
    "commonPackageSize": "32 fl oz (946 mL) bottle",
    "shelfLifeDays": 30,
    "tags": [
      "juice",
      "beverage",
      "mixer"
    ]
  },
  {
    "id": "ginger-juice",
    "name": "Ginger Juice",
    "category": "condiment",
    "estimatedUnitCost": 0.6,
    "unit": "fl oz",
    "commonPackageSize": "12 fl oz (355 mL) bottle",
    "shelfLifeDays": 60,
    "tags": [
      "juice",
      "aromatic",
      "mixer",
      "spicy"
    ]
  },
  {
    "id": "sugarcane-juice",
    "name": "Sugarcane Juice",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "fl oz",
    "commonPackageSize": "33.8 fl oz (1 L) bottle",
    "shelfLifeDays": 14,
    "tags": [
      "juice",
      "sweet",
      "beverage"
    ]
  },
  {
    "id": "michiu-rice-wine",
    "name": "Michiu Rice Wine",
    "category": "condiment",
    "estimatedUnitCost": 0.2,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "cooking-alcohol",
      "taiwanese",
      "rice-wine"
    ]
  },
  {
    "id": "soju-cooking",
    "name": "Soju",
    "category": "condiment",
    "estimatedUnitCost": 0.3,
    "unit": "fl oz",
    "commonPackageSize": "12.7 fl oz (375 mL) bottle",
    "shelfLifeDays": 1825,
    "tags": [
      "cooking-alcohol",
      "korean",
      "distilled"
    ]
  },
  {
    "id": "madeira-wine",
    "name": "Madeira Wine",
    "category": "condiment",
    "estimatedUnitCost": 0.7,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 730,
    "tags": [
      "cooking-alcohol",
      "fortified-wine"
    ]
  },
  {
    "id": "fino-sherry",
    "name": "Fino Sherry",
    "category": "condiment",
    "estimatedUnitCost": 0.6,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 365,
    "tags": [
      "cooking-alcohol",
      "fortified-wine",
      "dry"
    ]
  },
  {
    "id": "oloroso-sherry",
    "name": "Oloroso Sherry",
    "category": "condiment",
    "estimatedUnitCost": 0.75,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 730,
    "tags": [
      "cooking-alcohol",
      "fortified-wine",
      "nutty"
    ]
  },
  {
    "id": "pedro-ximenez-sherry",
    "name": "Pedro Ximenez Sherry",
    "category": "condiment",
    "estimatedUnitCost": 1.1,
    "unit": "fl oz",
    "commonPackageSize": "12.7 fl oz (375 mL) bottle",
    "shelfLifeDays": 730,
    "tags": [
      "cooking-alcohol",
      "fortified-wine",
      "sweet",
      "dessert"
    ]
  },
  {
    "id": "light-rum",
    "name": "Light Rum",
    "category": "condiment",
    "estimatedUnitCost": 0.45,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "cooking-alcohol",
      "spirit"
    ]
  },
  {
    "id": "spiced-rum",
    "name": "Spiced Rum",
    "category": "condiment",
    "estimatedUnitCost": 0.48,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "cooking-alcohol",
      "spirit",
      "spiced"
    ]
  },
  {
    "id": "kirsch",
    "name": "Kirsch",
    "category": "condiment",
    "estimatedUnitCost": 1.2,
    "unit": "fl oz",
    "commonPackageSize": "12.7 fl oz (375 mL) bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "cooking-alcohol",
      "cherry-brandy",
      "spirit"
    ]
  },
  {
    "id": "calvados",
    "name": "Calvados",
    "category": "condiment",
    "estimatedUnitCost": 1.3,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "cooking-alcohol",
      "apple-brandy",
      "spirit"
    ]
  },
  {
    "id": "grappa",
    "name": "Grappa",
    "category": "condiment",
    "estimatedUnitCost": 1,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "cooking-alcohol",
      "italian",
      "grape-spirit"
    ]
  },
  {
    "id": "pastis",
    "name": "Pastis",
    "category": "condiment",
    "estimatedUnitCost": 0.8,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 3650,
    "tags": [
      "cooking-alcohol",
      "anise",
      "french",
      "spirit"
    ]
  },
  {
    "id": "amaretto",
    "name": "Amaretto",
    "category": "condiment",
    "estimatedUnitCost": 0.7,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 1825,
    "tags": [
      "cooking-alcohol",
      "liqueur",
      "almond",
      "sweet"
    ]
  },
  {
    "id": "creme-de-cassis",
    "name": "Creme de Cassis",
    "category": "condiment",
    "estimatedUnitCost": 0.95,
    "unit": "fl oz",
    "commonPackageSize": "12.7 fl oz (375 mL) bottle",
    "shelfLifeDays": 1095,
    "tags": [
      "cooking-alcohol",
      "liqueur",
      "blackcurrant",
      "sweet"
    ]
  },
  {
    "id": "cooking-red-wine",
    "name": "Cooking Red Wine",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 365,
    "tags": [
      "cooking-alcohol",
      "wine",
      "braising"
    ]
  },
  {
    "id": "cooking-white-wine",
    "name": "Cooking White Wine",
    "category": "condiment",
    "estimatedUnitCost": 0.25,
    "unit": "fl oz",
    "commonPackageSize": "25.4 fl oz (750 mL) bottle",
    "shelfLifeDays": 365,
    "tags": [
      "cooking-alcohol",
      "wine",
      "deglazing"
    ]
  },
  {
    "id": "pili-nuts",
    "name": "Pili Nuts",
    "category": "protein",
    "estimatedUnitCost": 1.4,
    "unit": "oz",
    "commonPackageSize": "5 oz (142 g) bag",
    "shelfLifeDays": 180,
    "tags": [
      "nuts",
      "filipino",
      "buttery"
    ]
  },
  {
    "id": "tiger-nuts",
    "name": "Tiger Nuts",
    "category": "protein",
    "estimatedUnitCost": 0.65,
    "unit": "oz",
    "commonPackageSize": "5 oz (142 g) bag",
    "shelfLifeDays": 365,
    "tags": [
      "seeds",
      "tuber",
      "prebiotic",
      "gluten-free"
    ]
  },
  {
    "id": "candlenut",
    "name": "Candlenut",
    "category": "protein",
    "estimatedUnitCost": 0.9,
    "unit": "oz",
    "commonPackageSize": "7 oz (200 g) bag",
    "shelfLifeDays": 120,
    "tags": [
      "nuts",
      "southeast-asian",
      "thickener"
    ]
  },
  {
    "id": "marcona-almonds",
    "name": "Marcona Almonds",
    "category": "protein",
    "estimatedUnitCost": 1,
    "unit": "oz",
    "commonPackageSize": "8 oz (227 g) bag",
    "shelfLifeDays": 270,
    "tags": [
      "nuts",
      "spanish",
      "roasted"
    ]
  },
  {
    "id": "sacha-inchi-seeds",
    "name": "Sacha Inchi Seeds",
    "category": "protein",
    "estimatedUnitCost": 0.95,
    "unit": "oz",
    "commonPackageSize": "6 oz (170 g) bag",
    "shelfLifeDays": 180,
    "tags": [
      "seeds",
      "peruvian",
      "omega-3",
      "plant-protein"
    ]
  },
  {
    "id": "watermelon-seeds",
    "name": "Watermelon Seeds",
    "category": "protein",
    "estimatedUnitCost": 0.55,
    "unit": "oz",
    "commonPackageSize": "8 oz (227 g) bag",
    "shelfLifeDays": 270,
    "tags": [
      "seeds",
      "roasted",
      "snack",
      "plant-protein"
    ]
  },
  {
    "id": "basil-seeds",
    "name": "Basil Seeds",
    "category": "protein",
    "estimatedUnitCost": 0.2,
    "unit": "tbsp",
    "commonPackageSize": "8 oz (227 g) bag",
    "shelfLifeDays": 730,
    "tags": [
      "seeds",
      "sabja",
      "fiber",
      "gelling"
    ]
  },
  {
    "id": "perilla-seeds",
    "name": "Perilla Seeds",
    "category": "protein",
    "estimatedUnitCost": 0.25,
    "unit": "tbsp",
    "commonPackageSize": "7 oz (200 g) bag",
    "shelfLifeDays": 365,
    "tags": [
      "seeds",
      "korean",
      "omega-3",
      "toasted"
    ]
  },
  {
    "id": "seaweed-snacks",
    "name": "Roasted Seaweed Snacks",
    "category": "snack",
    "estimatedUnitCost": 0.6,
    "unit": "pack",
    "commonPackageSize": "0.17 oz (5 g) single-serve pack",
    "shelfLifeDays": 365,
    "tags": [
      "snack",
      "korean",
      "low-calorie",
      "savory"
    ]
  },
  {
    "id": "plantain-chips",
    "name": "Plantain Chips",
    "category": "snack",
    "estimatedUnitCost": 0.45,
    "unit": "oz",
    "commonPackageSize": "4.5 oz (128 g) bag",
    "shelfLifeDays": 180,
    "tags": [
      "snack",
      "fried",
      "latin",
      "crunchy"
    ]
  },
  {
    "id": "lotus-root-chips",
    "name": "Lotus Root Chips",
    "category": "snack",
    "estimatedUnitCost": 0.8,
    "unit": "oz",
    "commonPackageSize": "3 oz (85 g) bag",
    "shelfLifeDays": 180,
    "tags": [
      "snack",
      "asian",
      "vegetable-chip",
      "crunchy"
    ]
  },
  {
    "id": "papadum",
    "name": "Papadum",
    "category": "snack",
    "estimatedUnitCost": 0.3,
    "unit": "piece",
    "commonPackageSize": "7 oz (200 g) pack (~14 wafers)",
    "shelfLifeDays": 365,
    "tags": [
      "snack",
      "indian",
      "lentil-cracker",
      "crispy"
    ]
  },
  {
    "id": "prawn-crackers",
    "name": "Prawn Crackers",
    "category": "snack",
    "estimatedUnitCost": 0.5,
    "unit": "oz",
    "commonPackageSize": "3.5 oz (100 g) bag",
    "shelfLifeDays": 270,
    "tags": [
      "snack",
      "southeast-asian",
      "fried",
      "crispy"
    ]
  },
  {
    "id": "mochi-snacks",
    "name": "Mochi Snacks",
    "category": "snack",
    "estimatedUnitCost": 0.45,
    "unit": "piece",
    "commonPackageSize": "7 oz (210 g) box (~9 pieces)",
    "shelfLifeDays": 120,
    "tags": [
      "snack",
      "japanese",
      "rice",
      "chewy",
      "sweet"
    ]
  },
  {
    "id": "stuffed-dates",
    "name": "Stuffed Dates",
    "category": "snack",
    "estimatedUnitCost": 0.55,
    "unit": "piece",
    "commonPackageSize": "8 oz (227 g) box (~12 pieces)",
    "shelfLifeDays": 180,
    "tags": [
      "snack",
      "middle-eastern",
      "sweet",
      "nut-filled"
    ]
  },
  {
    "id": "chorizo-fresh",
    "name": "Fresh Mexican Chorizo",
    "category": "protein",
    "estimatedUnitCost": 5.49,
    "unit": "lb",
    "commonPackageSize": "1 lb",
    "shelfLifeDays": 7,
    "tags": [
      "mexican",
      "sausage",
      "pork",
      "spicy",
      "raw"
    ]
  },
  {
    "id": "dover-sole",
    "name": "Dover Sole",
    "category": "protein",
    "estimatedUnitCost": 18.99,
    "unit": "lb",
    "commonPackageSize": "1 lb",
    "shelfLifeDays": 3,
    "tags": [
      "fish",
      "flatfish",
      "delicate",
      "white-fish"
    ]
  },
  {
    "id": "amchur",
    "name": "Amchur (Dried Mango Powder)",
    "category": "spice",
    "estimatedUnitCost": 2.29,
    "unit": "oz",
    "commonPackageSize": "3 oz",
    "shelfLifeDays": 730,
    "tags": [
      "indian",
      "souring-agent",
      "tangy",
      "powder"
    ]
  },
  {
    "id": "fennel-pollen",
    "name": "Fennel Pollen",
    "category": "spice",
    "estimatedUnitCost": 9.99,
    "unit": "oz",
    "commonPackageSize": "0.5 oz",
    "shelfLifeDays": 540,
    "tags": [
      "italian",
      "aromatic",
      "finishing",
      "floral"
    ]
  },
  {
    "id": "black-bean-garlic-sauce",
    "name": "Black Bean Garlic Sauce",
    "category": "condiment",
    "estimatedUnitCost": 3.99,
    "unit": "jar",
    "commonPackageSize": "7 oz",
    "shelfLifeDays": 365,
    "tags": [
      "chinese",
      "fermented",
      "savory",
      "stir-fry"
    ]
  },
  {
    "id": "speculoos-spread",
    "name": "Cookie Butter (Speculoos)",
    "category": "condiment",
    "estimatedUnitCost": 4.99,
    "unit": "jar",
    "commonPackageSize": "14 oz",
    "shelfLifeDays": 365,
    "tags": [
      "belgian",
      "sweet",
      "spread",
      "dessert"
    ]
  }
];

export const EXTRA_INGREDIENT_NUTRITION_2: Record<string, NutritionPerUnit> = {
  "venison": {
    "calories": 45,
    "protein": 8.5,
    "carbs": 0,
    "fat": 0.9,
    "confidence": "high"
  },
  "ground-venison": {
    "calories": 45,
    "protein": 8.4,
    "carbs": 0,
    "fat": 1,
    "confidence": "high"
  },
  "bison": {
    "calories": 40,
    "protein": 8,
    "carbs": 0,
    "fat": 0.7,
    "confidence": "high"
  },
  "ground-bison": {
    "calories": 41,
    "protein": 7.8,
    "carbs": 0,
    "fat": 1,
    "confidence": "high"
  },
  "elk": {
    "calories": 40,
    "protein": 8.2,
    "carbs": 0,
    "fat": 0.5,
    "confidence": "high"
  },
  "rabbit": {
    "calories": 49,
    "protein": 9.2,
    "carbs": 0,
    "fat": 1.1,
    "confidence": "high"
  },
  "quail": {
    "calories": 227,
    "protein": 23.5,
    "carbs": 0,
    "fat": 14,
    "confidence": "medium"
  },
  "goose": {
    "calories": 75,
    "protein": 6.4,
    "carbs": 0,
    "fat": 5.4,
    "confidence": "medium"
  },
  "goat-meat": {
    "calories": 31,
    "protein": 6.1,
    "carbs": 0,
    "fat": 0.6,
    "confidence": "high"
  },
  "beef-liver": {
    "calories": 39,
    "protein": 5.8,
    "carbs": 1.1,
    "fat": 1,
    "confidence": "high"
  },
  "chicken-gizzards": {
    "calories": 44,
    "protein": 8.4,
    "carbs": 0,
    "fat": 1,
    "confidence": "high"
  },
  "beef-tongue": {
    "calories": 63,
    "protein": 4.5,
    "carbs": 1.1,
    "fat": 4.6,
    "confidence": "medium"
  },
  "beef-tripe": {
    "calories": 24,
    "protein": 3.4,
    "carbs": 0,
    "fat": 1.1,
    "confidence": "medium"
  },
  "beef-heart": {
    "calories": 31,
    "protein": 5,
    "carbs": 0.3,
    "fat": 1.1,
    "confidence": "medium"
  },
  "beef-kidney": {
    "calories": 28,
    "protein": 4.9,
    "carbs": 0.1,
    "fat": 0.8,
    "confidence": "medium"
  },
  "sweetbreads": {
    "calories": 92,
    "protein": 6.5,
    "carbs": 0,
    "fat": 7.1,
    "confidence": "low"
  },
  "marrow-bones": {
    "calories": 110,
    "protein": 1,
    "carbs": 0,
    "fat": 12,
    "confidence": "low"
  },
  "picanha": {
    "calories": 68,
    "protein": 6.8,
    "carbs": 0,
    "fat": 4.5,
    "confidence": "medium"
  },
  "denver-steak": {
    "calories": 66,
    "protein": 6.5,
    "carbs": 0,
    "fat": 4.3,
    "confidence": "medium"
  },
  "beef-cheek": {
    "calories": 55,
    "protein": 5.6,
    "carbs": 0,
    "fat": 3.5,
    "confidence": "medium"
  },
  "pork-jowl": {
    "calories": 190,
    "protein": 3,
    "carbs": 0,
    "fat": 20,
    "confidence": "low"
  },
  "lamb-neck": {
    "calories": 68,
    "protein": 4.8,
    "carbs": 0,
    "fat": 5.4,
    "confidence": "low"
  },
  "guanciale": {
    "calories": 185,
    "protein": 4,
    "carbs": 0,
    "fat": 19,
    "confidence": "low"
  },
  "nduja": {
    "calories": 150,
    "protein": 5,
    "carbs": 0,
    "fat": 14,
    "confidence": "low"
  },
  "bresaola": {
    "calories": 50,
    "protein": 9,
    "carbs": 0.5,
    "fat": 1.3,
    "confidence": "medium"
  },
  "soppressata": {
    "calories": 120,
    "protein": 7,
    "carbs": 0.5,
    "fat": 10,
    "confidence": "medium"
  },
  "speck": {
    "calories": 95,
    "protein": 8,
    "carbs": 0,
    "fat": 7,
    "confidence": "medium"
  },
  "jamon-iberico": {
    "calories": 105,
    "protein": 7.5,
    "carbs": 0,
    "fat": 8.5,
    "confidence": "medium"
  },
  "lap-yuk": {
    "calories": 175,
    "protein": 6,
    "carbs": 2,
    "fat": 16,
    "confidence": "low"
  },
  "lomo": {
    "calories": 75,
    "protein": 9,
    "carbs": 0,
    "fat": 4,
    "confidence": "medium"
  },
  "turbot": {
    "calories": 27,
    "protein": 4.6,
    "carbs": 0,
    "fat": 0.9,
    "confidence": "medium"
  },
  "skate-wing": {
    "calories": 26,
    "protein": 5.7,
    "carbs": 0,
    "fat": 0.4,
    "confidence": "medium"
  },
  "unagi": {
    "calories": 65,
    "protein": 5.5,
    "carbs": 3.5,
    "fat": 3.4,
    "confidence": "medium"
  },
  "uni": {
    "calories": 34,
    "protein": 3.5,
    "carbs": 2.5,
    "fat": 1.3,
    "confidence": "low"
  },
  "conch": {
    "calories": 37,
    "protein": 7.4,
    "carbs": 0.4,
    "fat": 0.4,
    "confidence": "medium"
  },
  "abalone": {
    "calories": 30,
    "protein": 4.9,
    "carbs": 1.7,
    "fat": 0.2,
    "confidence": "low"
  },
  "geoduck": {
    "calories": 22,
    "protein": 4.5,
    "carbs": 0.7,
    "fat": 0.2,
    "confidence": "low"
  },
  "razor-clams": {
    "calories": 21,
    "protein": 3.6,
    "carbs": 0.7,
    "fat": 0.3,
    "confidence": "low"
  },
  "cockles": {
    "calories": 22,
    "protein": 4.2,
    "carbs": 0.8,
    "fat": 0.2,
    "confidence": "low"
  },
  "whelk": {
    "calories": 38,
    "protein": 6.6,
    "carbs": 2.2,
    "fat": 0.1,
    "confidence": "low"
  },
  "langoustine": {
    "calories": 26,
    "protein": 5.5,
    "carbs": 0,
    "fat": 0.3,
    "confidence": "medium"
  },
  "frog-legs": {
    "calories": 21,
    "protein": 4.6,
    "carbs": 0,
    "fat": 0.1,
    "confidence": "medium"
  },
  "sea-scallops": {
    "calories": 20,
    "protein": 3.8,
    "carbs": 0.9,
    "fat": 0.2,
    "confidence": "high"
  },
  "escargot": {
    "calories": 25,
    "protein": 4.5,
    "carbs": 0.6,
    "fat": 0.4,
    "confidence": "low"
  },
  "duck-fat": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "foie-gras": {
    "calories": 130,
    "protein": 3.3,
    "carbs": 1.3,
    "fat": 12.5,
    "confidence": "low"
  },
  "wild-boar": {
    "calories": 40,
    "protein": 8,
    "carbs": 0,
    "fat": 0.9,
    "confidence": "medium"
  },
  "ostrich": {
    "calories": 33,
    "protein": 6.5,
    "carbs": 0,
    "fat": 0.6,
    "confidence": "medium"
  },
  "gai-lan": {
    "calories": 20,
    "protein": 1.4,
    "carbs": 3.2,
    "fat": 0.3,
    "fiber": 1.6,
    "confidence": "medium"
  },
  "choy-sum": {
    "calories": 14,
    "protein": 1.5,
    "carbs": 2.2,
    "fat": 0.2,
    "fiber": 1,
    "confidence": "low"
  },
  "yu-choi": {
    "calories": 15,
    "protein": 1.5,
    "carbs": 2.4,
    "fat": 0.2,
    "fiber": 1.1,
    "confidence": "low"
  },
  "amaranth-greens": {
    "calories": 6,
    "protein": 0.6,
    "carbs": 1.1,
    "fat": 0.1,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "chrysanthemum-greens": {
    "calories": 12,
    "protein": 1.2,
    "carbs": 2.2,
    "fat": 0.1,
    "fiber": 1.4,
    "confidence": "low"
  },
  "pea-shoots": {
    "calories": 12,
    "protein": 1.6,
    "carbs": 1.8,
    "fat": 0.1,
    "fiber": 0.9,
    "confidence": "low"
  },
  "lions-mane-mushroom": {
    "calories": 12,
    "protein": 0.7,
    "carbs": 2,
    "fat": 0.1,
    "fiber": 0.8,
    "confidence": "low"
  },
  "chanterelle-mushroom": {
    "calories": 9,
    "protein": 0.5,
    "carbs": 1.9,
    "fat": 0.1,
    "fiber": 1,
    "confidence": "medium"
  },
  "morel-mushroom": {
    "calories": 9,
    "protein": 0.9,
    "carbs": 1.4,
    "fat": 0.2,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "black-trumpet-mushroom": {
    "calories": 8,
    "protein": 0.6,
    "carbs": 1.5,
    "fat": 0.1,
    "fiber": 0.7,
    "confidence": "low"
  },
  "shimeji-mushroom": {
    "calories": 11,
    "protein": 0.8,
    "carbs": 2.3,
    "fat": 0.1,
    "fiber": 0.9,
    "confidence": "low"
  },
  "wood-ear-mushroom": {
    "calories": 25,
    "protein": 0.5,
    "carbs": 6.8,
    "fat": 0,
    "fiber": 5.7,
    "confidence": "medium"
  },
  "straw-mushroom": {
    "calories": 58,
    "protein": 7,
    "carbs": 8.4,
    "fat": 0.7,
    "fiber": 2.5,
    "confidence": "low"
  },
  "nameko-mushroom": {
    "calories": 8,
    "protein": 0.5,
    "carbs": 1.7,
    "fat": 0.1,
    "fiber": 0.7,
    "confidence": "low"
  },
  "salsify": {
    "calories": 109,
    "protein": 4.4,
    "carbs": 24.7,
    "fat": 0.3,
    "fiber": 4.4,
    "confidence": "medium"
  },
  "cardoon": {
    "calories": 36,
    "protein": 1.2,
    "carbs": 8.6,
    "fat": 0.2,
    "fiber": 3.3,
    "confidence": "low"
  },
  "samphire": {
    "calories": 12,
    "protein": 1,
    "carbs": 2,
    "fat": 0.1,
    "fiber": 1.3,
    "confidence": "low"
  },
  "sea-beans": {
    "calories": 13,
    "protein": 1,
    "carbs": 2.1,
    "fat": 0.1,
    "fiber": 1.3,
    "confidence": "low"
  },
  "nopales": {
    "calories": 14,
    "protein": 1.1,
    "carbs": 2.9,
    "fat": 0.1,
    "fiber": 1.9,
    "confidence": "medium"
  },
  "bitter-melon": {
    "calories": 16,
    "protein": 0.9,
    "carbs": 3.4,
    "fat": 0.2,
    "fiber": 2.6,
    "confidence": "medium"
  },
  "fuzzy-melon": {
    "calories": 17,
    "protein": 0.6,
    "carbs": 4,
    "fat": 0,
    "fiber": 2.9,
    "confidence": "low"
  },
  "winter-melon": {
    "calories": 17,
    "protein": 0.5,
    "carbs": 4,
    "fat": 0.2,
    "fiber": 3.9,
    "confidence": "medium"
  },
  "yardlong-beans": {
    "calories": 47,
    "protein": 2.6,
    "carbs": 8.4,
    "fat": 0.4,
    "fiber": 2.5,
    "confidence": "medium"
  },
  "taro-leaf": {
    "calories": 14,
    "protein": 1.4,
    "carbs": 2.5,
    "fat": 0.3,
    "fiber": 1.5,
    "confidence": "low"
  },
  "fiddleheads": {
    "calories": 34,
    "protein": 4.6,
    "carbs": 5.4,
    "fat": 0.4,
    "confidence": "low"
  },
  "green-garlic": {
    "calories": 9,
    "protein": 0.4,
    "carbs": 2,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "low"
  },
  "kohlrabi-greens": {
    "calories": 13,
    "protein": 1.2,
    "carbs": 2.3,
    "fat": 0.2,
    "fiber": 1.4,
    "confidence": "low"
  },
  "malanga": {
    "calories": 132,
    "protein": 2,
    "carbs": 32,
    "fat": 0.3,
    "fiber": 2.1,
    "confidence": "medium"
  },
  "boniato": {
    "calories": 115,
    "protein": 2,
    "carbs": 27,
    "fat": 0.1,
    "fiber": 3.8,
    "confidence": "low"
  },
  "purple-sweet-potato": {
    "calories": 140,
    "protein": 2.6,
    "carbs": 32.5,
    "fat": 0.1,
    "fiber": 4.6,
    "confidence": "medium"
  },
  "hatch-chili": {
    "calories": 18,
    "protein": 0.8,
    "carbs": 4,
    "fat": 0.2,
    "fiber": 0.7,
    "confidence": "low"
  },
  "calabrian-chili": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 0.9,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "low"
  },
  "padron-pepper": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "low"
  },
  "rocoto-pepper": {
    "calories": 22,
    "protein": 1,
    "carbs": 4.6,
    "fat": 0.3,
    "fiber": 1.5,
    "confidence": "low"
  },
  "ghost-pepper": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "low"
  },
  "broccoli-sprouts": {
    "calories": 12,
    "protein": 1.3,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.8,
    "confidence": "low"
  },
  "soursop": {
    "calories": 148,
    "protein": 2.2,
    "carbs": 37.8,
    "fat": 0.7,
    "fiber": 7.4,
    "confidence": "high"
  },
  "sapodilla": {
    "calories": 141,
    "protein": 0.75,
    "carbs": 33.9,
    "fat": 1.9,
    "fiber": 9,
    "confidence": "medium"
  },
  "durian": {
    "calories": 357,
    "protein": 3.6,
    "carbs": 65.8,
    "fat": 13,
    "fiber": 9.2,
    "confidence": "high"
  },
  "breadfruit": {
    "calories": 227,
    "protein": 2.4,
    "carbs": 59.7,
    "fat": 0.5,
    "fiber": 10.8,
    "confidence": "high"
  },
  "sugar-apple": {
    "calories": 141,
    "protein": 3.1,
    "carbs": 35.4,
    "fat": 0.5,
    "fiber": 6.6,
    "confidence": "medium"
  },
  "tamarillo": {
    "calories": 28,
    "protein": 1.3,
    "carbs": 5.6,
    "fat": 0.3,
    "fiber": 2.9,
    "confidence": "medium"
  },
  "feijoa": {
    "calories": 27,
    "protein": 0.6,
    "carbs": 6.4,
    "fat": 0.4,
    "fiber": 3.3,
    "confidence": "medium"
  },
  "loquat": {
    "calories": 7,
    "protein": 0.07,
    "carbs": 1.9,
    "fat": 0.03,
    "fiber": 0.3,
    "confidence": "high"
  },
  "jujube": {
    "calories": 79,
    "protein": 1.3,
    "carbs": 20.5,
    "fat": 0.2,
    "confidence": "medium"
  },
  "calamansi": {
    "calories": 4,
    "protein": 0.1,
    "carbs": 1.2,
    "fat": 0.05,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "finger-lime": {
    "calories": 6,
    "protein": 0.1,
    "carbs": 2,
    "fat": 0.05,
    "fiber": 0.6,
    "confidence": "low"
  },
  "buddhas-hand": {
    "calories": 56,
    "protein": 1.1,
    "carbs": 14.6,
    "fat": 0.2,
    "fiber": 5.5,
    "confidence": "low"
  },
  "ugli-fruit": {
    "calories": 90,
    "protein": 1.8,
    "carbs": 22.5,
    "fat": 0.3,
    "fiber": 4,
    "confidence": "low"
  },
  "pomelo": {
    "calories": 72,
    "protein": 1.4,
    "carbs": 18.3,
    "fat": 0.1,
    "fiber": 2,
    "confidence": "high"
  },
  "salak": {
    "calories": 41,
    "protein": 0.4,
    "carbs": 11,
    "fat": 0.2,
    "fiber": 1.5,
    "confidence": "low"
  },
  "langsat": {
    "calories": 86,
    "protein": 1.7,
    "carbs": 21.8,
    "fat": 0.3,
    "fiber": 1.5,
    "confidence": "low"
  },
  "mulberry": {
    "calories": 60,
    "protein": 2,
    "carbs": 13.7,
    "fat": 0.5,
    "fiber": 2.4,
    "confidence": "high"
  },
  "marionberry": {
    "calories": 62,
    "protein": 2,
    "carbs": 14,
    "fat": 0.7,
    "fiber": 7.6,
    "confidence": "medium"
  },
  "lingonberry": {
    "calories": 59,
    "protein": 0.8,
    "carbs": 13.2,
    "fat": 0.6,
    "fiber": 3,
    "confidence": "medium"
  },
  "cloudberry": {
    "calories": 68,
    "protein": 3.1,
    "carbs": 11.6,
    "fat": 1,
    "fiber": 8,
    "confidence": "low"
  },
  "sea-buckthorn": {
    "calories": 89,
    "protein": 1.4,
    "carbs": 11,
    "fat": 3.8,
    "fiber": 4.7,
    "confidence": "low"
  },
  "aronia-berry": {
    "calories": 66,
    "protein": 1.4,
    "carbs": 15.7,
    "fat": 0.7,
    "fiber": 7.6,
    "confidence": "low"
  },
  "white-currant": {
    "calories": 61,
    "protein": 1.5,
    "carbs": 15.4,
    "fat": 0.2,
    "fiber": 4.8,
    "confidence": "medium"
  },
  "quince": {
    "calories": 104,
    "protein": 0.7,
    "carbs": 27.9,
    "fat": 0.2,
    "fiber": 3.5,
    "confidence": "high"
  },
  "medlar": {
    "calories": 35,
    "protein": 0.2,
    "carbs": 8.6,
    "fat": 0.1,
    "fiber": 4,
    "confidence": "low"
  },
  "damson-plum": {
    "calories": 14,
    "protein": 0.2,
    "carbs": 3.4,
    "fat": 0.1,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "greengage": {
    "calories": 16,
    "protein": 0.2,
    "carbs": 4,
    "fat": 0.1,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "mirabelle-plum": {
    "calories": 12,
    "protein": 0.2,
    "carbs": 2.9,
    "fat": 0.07,
    "fiber": 0.4,
    "confidence": "low"
  },
  "yuzu": {
    "calories": 32,
    "protein": 0.7,
    "carbs": 8,
    "fat": 0.2,
    "fiber": 1.8,
    "confidence": "medium"
  },
  "sudachi": {
    "calories": 9,
    "protein": 0.2,
    "carbs": 2.6,
    "fat": 0.05,
    "fiber": 0.5,
    "confidence": "low"
  },
  "kalamansi-juice": {
    "calories": 3,
    "protein": 0.05,
    "carbs": 0.9,
    "fat": 0,
    "confidence": "low"
  },
  "ripe-plantain": {
    "calories": 218,
    "protein": 2.3,
    "carbs": 57,
    "fat": 0.7,
    "fiber": 4.1,
    "confidence": "high"
  },
  "dried-persimmon": {
    "calories": 93,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.2,
    "fiber": 5,
    "confidence": "medium"
  },
  "dried-jujube": {
    "calories": 287,
    "protein": 3.7,
    "carbs": 73.6,
    "fat": 0.5,
    "confidence": "medium"
  },
  "dried-mulberry": {
    "calories": 363,
    "protein": 11.7,
    "carbs": 78,
    "fat": 3.4,
    "fiber": 14,
    "confidence": "medium"
  },
  "freeze-dried-strawberry": {
    "calories": 48,
    "protein": 1,
    "carbs": 12,
    "fat": 0.4,
    "fiber": 4,
    "confidence": "medium"
  },
  "freeze-dried-raspberry": {
    "calories": 52,
    "protein": 1.2,
    "carbs": 12,
    "fat": 0.6,
    "fiber": 6,
    "confidence": "medium"
  },
  "candied-citron": {
    "calories": 314,
    "protein": 0.2,
    "carbs": 80,
    "fat": 0.1,
    "fiber": 2,
    "confidence": "medium"
  },
  "candied-orange-peel": {
    "calories": 310,
    "protein": 0.4,
    "carbs": 78,
    "fat": 0.2,
    "fiber": 4,
    "confidence": "medium"
  },
  "taleggio": {
    "calories": 94,
    "protein": 6,
    "carbs": 0.5,
    "fat": 7.5,
    "confidence": "medium"
  },
  "robiola": {
    "calories": 90,
    "protein": 5,
    "carbs": 1,
    "fat": 7.5,
    "confidence": "low"
  },
  "stracchino": {
    "calories": 85,
    "protein": 5,
    "carbs": 1,
    "fat": 7,
    "confidence": "low"
  },
  "stracciatella": {
    "calories": 85,
    "protein": 5,
    "carbs": 1.5,
    "fat": 6.5,
    "confidence": "low"
  },
  "scamorza": {
    "calories": 90,
    "protein": 7,
    "carbs": 1,
    "fat": 6.5,
    "confidence": "medium"
  },
  "caciocavallo": {
    "calories": 100,
    "protein": 7,
    "carbs": 1,
    "fat": 7.5,
    "confidence": "medium"
  },
  "provolone-piccante": {
    "calories": 100,
    "protein": 7,
    "carbs": 0.5,
    "fat": 7.5,
    "confidence": "medium"
  },
  "grana-padano": {
    "calories": 110,
    "protein": 9,
    "carbs": 0,
    "fat": 8,
    "confidence": "high"
  },
  "idiazabal": {
    "calories": 110,
    "protein": 7,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "medium"
  },
  "roncal": {
    "calories": 110,
    "protein": 7,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "low"
  },
  "cabrales": {
    "calories": 100,
    "protein": 6,
    "carbs": 0.5,
    "fat": 8.5,
    "confidence": "low"
  },
  "valdeon": {
    "calories": 100,
    "protein": 6,
    "carbs": 0.5,
    "fat": 8.5,
    "confidence": "low"
  },
  "epoisses": {
    "calories": 95,
    "protein": 5,
    "carbs": 1,
    "fat": 8,
    "confidence": "low"
  },
  "reblochon": {
    "calories": 95,
    "protein": 6,
    "carbs": 0.5,
    "fat": 8,
    "confidence": "low"
  },
  "morbier": {
    "calories": 100,
    "protein": 6,
    "carbs": 0.5,
    "fat": 8,
    "confidence": "medium"
  },
  "cantal": {
    "calories": 110,
    "protein": 7,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "medium"
  },
  "tomme-de-savoie": {
    "calories": 95,
    "protein": 7,
    "carbs": 0.5,
    "fat": 7,
    "confidence": "low"
  },
  "beaufort": {
    "calories": 115,
    "protein": 8,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "medium"
  },
  "appenzeller": {
    "calories": 115,
    "protein": 8,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "medium"
  },
  "sbrinz": {
    "calories": 120,
    "protein": 9,
    "carbs": 0,
    "fat": 9,
    "confidence": "low"
  },
  "tete-de-moine": {
    "calories": 115,
    "protein": 8,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "low"
  },
  "mimolette": {
    "calories": 110,
    "protein": 7,
    "carbs": 1,
    "fat": 9,
    "confidence": "low"
  },
  "kasseri": {
    "calories": 105,
    "protein": 7,
    "carbs": 1,
    "fat": 8,
    "confidence": "medium"
  },
  "kefalotyri": {
    "calories": 115,
    "protein": 8,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "medium"
  },
  "graviera": {
    "calories": 110,
    "protein": 8,
    "carbs": 0.5,
    "fat": 8.5,
    "confidence": "low"
  },
  "kefalograviera": {
    "calories": 115,
    "protein": 8,
    "carbs": 0.5,
    "fat": 9,
    "confidence": "low"
  },
  "mizithra": {
    "calories": 95,
    "protein": 7,
    "carbs": 2,
    "fat": 6.5,
    "confidence": "low"
  },
  "halloumi-grilling": {
    "calories": 90,
    "protein": 6,
    "carbs": 1,
    "fat": 7,
    "confidence": "high"
  },
  "anari": {
    "calories": 50,
    "protein": 5,
    "carbs": 2,
    "fat": 2.5,
    "confidence": "low"
  },
  "bryndza": {
    "calories": 80,
    "protein": 5,
    "carbs": 1,
    "fat": 6.5,
    "confidence": "low"
  },
  "kashkaval": {
    "calories": 105,
    "protein": 7,
    "carbs": 1,
    "fat": 8,
    "confidence": "medium"
  },
  "sulguni": {
    "calories": 85,
    "protein": 7,
    "carbs": 1,
    "fat": 6,
    "confidence": "low"
  },
  "akkawi": {
    "calories": 80,
    "protein": 6,
    "carbs": 1,
    "fat": 6,
    "confidence": "low"
  },
  "nabulsi": {
    "calories": 80,
    "protein": 6,
    "carbs": 1,
    "fat": 6,
    "confidence": "low"
  },
  "labneh-cheese": {
    "calories": 60,
    "protein": 4,
    "carbs": 2,
    "fat": 4,
    "confidence": "medium"
  },
  "farmer-cheese": {
    "calories": 40,
    "protein": 7,
    "carbs": 1,
    "fat": 1,
    "confidence": "medium"
  },
  "pot-cheese": {
    "calories": 30,
    "protein": 5,
    "carbs": 1.5,
    "fat": 0.5,
    "confidence": "low"
  },
  "tvorog": {
    "calories": 45,
    "protein": 5,
    "carbs": 1.5,
    "fat": 2,
    "confidence": "low"
  },
  "requeson": {
    "calories": 45,
    "protein": 4,
    "carbs": 1.5,
    "fat": 3,
    "confidence": "low"
  },
  "asadero": {
    "calories": 95,
    "protein": 6,
    "carbs": 1,
    "fat": 7.5,
    "confidence": "medium"
  },
  "queso-chihuahua": {
    "calories": 100,
    "protein": 6,
    "carbs": 1,
    "fat": 8,
    "confidence": "medium"
  },
  "chhena": {
    "calories": 75,
    "protein": 5,
    "carbs": 2,
    "fat": 5,
    "confidence": "low"
  },
  "filmjolk": {
    "calories": 120,
    "protein": 8,
    "carbs": 12,
    "fat": 4.5,
    "confidence": "low"
  },
  "viili": {
    "calories": 120,
    "protein": 8,
    "carbs": 12,
    "fat": 4.5,
    "confidence": "low"
  },
  "piima": {
    "calories": 110,
    "protein": 8,
    "carbs": 12,
    "fat": 2.5,
    "confidence": "low"
  },
  "amasi": {
    "calories": 100,
    "protein": 7,
    "carbs": 11,
    "fat": 3,
    "confidence": "low"
  },
  "smetana": {
    "calories": 55,
    "protein": 1,
    "carbs": 1.5,
    "fat": 5,
    "confidence": "medium"
  },
  "creme-epaisse": {
    "calories": 100,
    "protein": 1,
    "carbs": 1,
    "fat": 10.5,
    "confidence": "low"
  },
  "ayran": {
    "calories": 60,
    "protein": 4,
    "carbs": 5,
    "fat": 3,
    "confidence": "medium"
  },
  "doogh": {
    "calories": 60,
    "protein": 4,
    "carbs": 5,
    "fat": 2.5,
    "confidence": "low"
  },
  "lassi-sweet": {
    "calories": 150,
    "protein": 5,
    "carbs": 24,
    "fat": 4,
    "confidence": "medium"
  },
  "lassi-salted": {
    "calories": 80,
    "protein": 5,
    "carbs": 7,
    "fat": 4,
    "confidence": "medium"
  },
  "chaas": {
    "calories": 40,
    "protein": 3,
    "carbs": 4,
    "fat": 1.5,
    "confidence": "low"
  },
  "fonio": {
    "calories": 170,
    "protein": 3,
    "carbs": 39,
    "fat": 0.5,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "sorghum": {
    "calories": 163,
    "protein": 5,
    "carbs": 36,
    "fat": 1.6,
    "fiber": 3,
    "confidence": "high"
  },
  "einkorn": {
    "calories": 160,
    "protein": 7,
    "carbs": 34,
    "fat": 1.5,
    "fiber": 4,
    "confidence": "medium"
  },
  "emmer": {
    "calories": 170,
    "protein": 7,
    "carbs": 34,
    "fat": 1.5,
    "fiber": 5,
    "confidence": "medium"
  },
  "khorasan": {
    "calories": 150,
    "protein": 7,
    "carbs": 31,
    "fat": 1,
    "fiber": 4,
    "confidence": "medium"
  },
  "triticale": {
    "calories": 160,
    "protein": 6,
    "carbs": 35,
    "fat": 1,
    "fiber": 7,
    "confidence": "medium"
  },
  "jobs-tears": {
    "calories": 180,
    "protein": 4,
    "carbs": 40,
    "fat": 1,
    "fiber": 1,
    "confidence": "low"
  },
  "black-barley": {
    "calories": 160,
    "protein": 5,
    "carbs": 34,
    "fat": 1,
    "fiber": 8,
    "confidence": "medium"
  },
  "purple-barley": {
    "calories": 160,
    "protein": 5,
    "carbs": 34,
    "fat": 1,
    "fiber": 8,
    "confidence": "medium"
  },
  "red-rice": {
    "calories": 160,
    "protein": 4,
    "carbs": 34,
    "fat": 1.5,
    "fiber": 2,
    "confidence": "medium"
  },
  "forbidden-rice": {
    "calories": 160,
    "protein": 5,
    "carbs": 34,
    "fat": 1.5,
    "fiber": 2,
    "confidence": "medium"
  },
  "glutinous-black-rice": {
    "calories": 170,
    "protein": 4,
    "carbs": 37,
    "fat": 1,
    "fiber": 2,
    "confidence": "low"
  },
  "bomba-rice": {
    "calories": 160,
    "protein": 3,
    "carbs": 36,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "calasparra-rice": {
    "calories": 160,
    "protein": 3,
    "carbs": 36,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "carnaroli-rice": {
    "calories": 170,
    "protein": 3,
    "carbs": 37,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "high"
  },
  "vialone-nano-rice": {
    "calories": 170,
    "protein": 3,
    "carbs": 37,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "parboiled-rice": {
    "calories": 170,
    "protein": 4,
    "carbs": 38,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "high"
  },
  "broken-rice": {
    "calories": 170,
    "protein": 3,
    "carbs": 38,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "kalijira-rice": {
    "calories": 160,
    "protein": 4,
    "carbs": 36,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "low"
  },
  "adzuki-beans": {
    "calories": 147,
    "protein": 9,
    "carbs": 28,
    "fat": 0.2,
    "fiber": 8,
    "confidence": "high"
  },
  "split-mung-dal": {
    "calories": 150,
    "protein": 11,
    "carbs": 25,
    "fat": 0.5,
    "fiber": 7,
    "confidence": "high"
  },
  "urad-whole": {
    "calories": 160,
    "protein": 12,
    "carbs": 27,
    "fat": 0.6,
    "fiber": 9,
    "confidence": "medium"
  },
  "moth-beans": {
    "calories": 170,
    "protein": 11,
    "carbs": 30,
    "fat": 0.6,
    "fiber": 10,
    "confidence": "low"
  },
  "horse-gram": {
    "calories": 160,
    "protein": 13,
    "carbs": 26,
    "fat": 0.4,
    "fiber": 5,
    "confidence": "low"
  },
  "cowpeas": {
    "calories": 160,
    "protein": 11,
    "carbs": 28,
    "fat": 0.6,
    "fiber": 8,
    "confidence": "high"
  },
  "flageolet-beans": {
    "calories": 140,
    "protein": 9,
    "carbs": 25,
    "fat": 0.5,
    "fiber": 7,
    "confidence": "medium"
  },
  "borlotti-beans": {
    "calories": 150,
    "protein": 9,
    "carbs": 27,
    "fat": 0.5,
    "fiber": 9,
    "confidence": "high"
  },
  "gigante-beans": {
    "calories": 140,
    "protein": 9,
    "carbs": 25,
    "fat": 0.5,
    "fiber": 8,
    "confidence": "medium"
  },
  "scarlet-runner-beans": {
    "calories": 140,
    "protein": 9,
    "carbs": 25,
    "fat": 0.5,
    "fiber": 8,
    "confidence": "low"
  },
  "tepary-beans": {
    "calories": 150,
    "protein": 11,
    "carbs": 26,
    "fat": 0.5,
    "fiber": 9,
    "confidence": "low"
  },
  "christmas-lima-beans": {
    "calories": 140,
    "protein": 8,
    "carbs": 25,
    "fat": 0.5,
    "fiber": 8,
    "confidence": "medium"
  },
  "appaloosa-beans": {
    "calories": 145,
    "protein": 9,
    "carbs": 26,
    "fat": 0.5,
    "fiber": 8,
    "confidence": "low"
  },
  "lentils-du-puy": {
    "calories": 160,
    "protein": 12,
    "carbs": 27,
    "fat": 0.5,
    "fiber": 11,
    "confidence": "high"
  },
  "beluga-lentils": {
    "calories": 160,
    "protein": 12,
    "carbs": 27,
    "fat": 0.5,
    "fiber": 11,
    "confidence": "high"
  },
  "teff-flour": {
    "calories": 180,
    "protein": 6,
    "carbs": 36,
    "fat": 1.5,
    "fiber": 6,
    "confidence": "high"
  },
  "sorghum-flour": {
    "calories": 160,
    "protein": 5,
    "carbs": 34,
    "fat": 1.5,
    "fiber": 3,
    "confidence": "high"
  },
  "chestnut-flour": {
    "calories": 140,
    "protein": 3,
    "carbs": 31,
    "fat": 1.5,
    "fiber": 5,
    "confidence": "medium"
  },
  "lupin-flour": {
    "calories": 110,
    "protein": 12,
    "carbs": 11,
    "fat": 2.5,
    "fiber": 9,
    "confidence": "medium"
  },
  "fava-flour": {
    "calories": 110,
    "protein": 8,
    "carbs": 18,
    "fat": 0.5,
    "fiber": 5,
    "confidence": "medium"
  },
  "green-banana-flour": {
    "calories": 130,
    "protein": 1.5,
    "carbs": 31,
    "fat": 0.3,
    "fiber": 4,
    "confidence": "medium"
  },
  "plantain-flour": {
    "calories": 140,
    "protein": 1.5,
    "carbs": 33,
    "fat": 0.4,
    "fiber": 4,
    "confidence": "low"
  },
  "water-chestnut-flour": {
    "calories": 130,
    "protein": 0,
    "carbs": 32,
    "fat": 0,
    "fiber": 1,
    "confidence": "low"
  },
  "arrowroot-starch": {
    "calories": 110,
    "protein": 0,
    "carbs": 28,
    "fat": 0,
    "fiber": 1,
    "confidence": "high"
  },
  "kuzu": {
    "calories": 35,
    "protein": 0,
    "carbs": 8,
    "fat": 0,
    "confidence": "low"
  },
  "semolina-fine": {
    "calories": 150,
    "protein": 5,
    "carbs": 31,
    "fat": 0.5,
    "fiber": 2,
    "confidence": "high"
  },
  "coarse-semolina": {
    "calories": 150,
    "protein": 5,
    "carbs": 31,
    "fat": 0.5,
    "fiber": 2,
    "confidence": "high"
  },
  "durum-flour": {
    "calories": 140,
    "protein": 5,
    "carbs": 29,
    "fat": 0.5,
    "fiber": 2,
    "confidence": "high"
  },
  "tipo-00-flour": {
    "calories": 130,
    "protein": 4,
    "carbs": 27,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "high"
  },
  "einkorn-flour": {
    "calories": 140,
    "protein": 5,
    "carbs": 29,
    "fat": 1,
    "fiber": 3,
    "confidence": "medium"
  },
  "sweet-potato-noodles": {
    "calories": 210,
    "protein": 0,
    "carbs": 52,
    "fat": 0,
    "fiber": 1,
    "confidence": "medium"
  },
  "somen": {
    "calories": 200,
    "protein": 7,
    "carbs": 42,
    "fat": 0.5,
    "fiber": 2,
    "confidence": "medium"
  },
  "misua": {
    "calories": 190,
    "protein": 6,
    "carbs": 40,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "low"
  },
  "bihon": {
    "calories": 190,
    "protein": 1,
    "carbs": 44,
    "fat": 0,
    "fiber": 1,
    "confidence": "medium"
  },
  "kway-teow": {
    "calories": 190,
    "protein": 2,
    "carbs": 43,
    "fat": 0.3,
    "fiber": 1,
    "confidence": "medium"
  },
  "orange-blossom-water": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "rose-water": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "pandan-extract": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.4,
    "fat": 0,
    "confidence": "medium"
  },
  "pandan-paste": {
    "calories": 8,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "confidence": "medium"
  },
  "ube-extract": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.4,
    "fat": 0,
    "confidence": "medium"
  },
  "coffee-extract": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.2,
    "fat": 0,
    "confidence": "medium"
  },
  "anise-extract": {
    "calories": 11,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "medium"
  },
  "banana-extract": {
    "calories": 4,
    "protein": 0,
    "carbs": 0.2,
    "fat": 0,
    "confidence": "medium"
  },
  "butter-extract": {
    "calories": 4,
    "protein": 0,
    "carbs": 0.2,
    "fat": 0,
    "confidence": "medium"
  },
  "fiori-di-sicilia": {
    "calories": 5,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "low"
  },
  "vanilla-powder": {
    "calories": 12,
    "protein": 0.1,
    "carbs": 2.6,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "jaggery": {
    "calories": 45,
    "protein": 0.1,
    "carbs": 12,
    "fat": 0,
    "confidence": "high"
  },
  "piloncillo": {
    "calories": 48,
    "protein": 0,
    "carbs": 12.4,
    "fat": 0,
    "confidence": "high"
  },
  "treacle": {
    "calories": 58,
    "protein": 0,
    "carbs": 15,
    "fat": 0,
    "confidence": "high"
  },
  "glucose-syrup": {
    "calories": 62,
    "protein": 0,
    "carbs": 17,
    "fat": 0,
    "confidence": "high"
  },
  "invert-sugar": {
    "calories": 56,
    "protein": 0,
    "carbs": 15,
    "fat": 0,
    "confidence": "medium"
  },
  "barley-malt-syrup": {
    "calories": 60,
    "protein": 0.6,
    "carbs": 14,
    "fat": 0,
    "confidence": "medium"
  },
  "brown-rice-syrup": {
    "calories": 55,
    "protein": 0.1,
    "carbs": 14,
    "fat": 0,
    "confidence": "medium"
  },
  "sorghum-syrup": {
    "calories": 61,
    "protein": 0,
    "carbs": 15.7,
    "fat": 0,
    "confidence": "medium"
  },
  "cane-syrup": {
    "calories": 60,
    "protein": 0,
    "carbs": 15,
    "fat": 0,
    "confidence": "medium"
  },
  "rock-sugar": {
    "calories": 50,
    "protein": 0,
    "carbs": 13,
    "fat": 0,
    "confidence": "high"
  },
  "pearl-sugar": {
    "calories": 49,
    "protein": 0,
    "carbs": 12.6,
    "fat": 0,
    "confidence": "high"
  },
  "couverture-dark-chocolate": {
    "calories": 160,
    "protein": 1.8,
    "carbs": 12,
    "fat": 12,
    "fiber": 3,
    "confidence": "high"
  },
  "couverture-milk-chocolate": {
    "calories": 155,
    "protein": 2.2,
    "carbs": 17,
    "fat": 9,
    "fiber": 1,
    "confidence": "high"
  },
  "couverture-white-chocolate": {
    "calories": 165,
    "protein": 1.8,
    "carbs": 18,
    "fat": 10,
    "confidence": "high"
  },
  "ruby-chocolate": {
    "calories": 160,
    "protein": 2,
    "carbs": 17,
    "fat": 10,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "cacao-paste": {
    "calories": 170,
    "protein": 4,
    "carbs": 9,
    "fat": 14,
    "fiber": 5,
    "confidence": "medium"
  },
  "cocoa-butter": {
    "calories": 250,
    "protein": 0,
    "carbs": 0,
    "fat": 28,
    "confidence": "high"
  },
  "carob-powder": {
    "calories": 25,
    "protein": 0.3,
    "carbs": 11,
    "fat": 0.1,
    "fiber": 5,
    "confidence": "high"
  },
  "chocolate-feves": {
    "calories": 160,
    "protein": 1.8,
    "carbs": 13,
    "fat": 11,
    "fiber": 3,
    "confidence": "high"
  },
  "gianduja": {
    "calories": 175,
    "protein": 2.5,
    "carbs": 15,
    "fat": 12,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "nonpareils": {
    "calories": 60,
    "protein": 0,
    "carbs": 15,
    "fat": 0,
    "confidence": "medium"
  },
  "edible-glitter": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "confidence": "low"
  },
  "royal-icing-mix": {
    "calories": 105,
    "protein": 0.4,
    "carbs": 26,
    "fat": 0,
    "confidence": "medium"
  },
  "malt-powder": {
    "calories": 13,
    "protein": 0.4,
    "carbs": 2.8,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "medium"
  },
  "soy-lecithin": {
    "calories": 34,
    "protein": 0,
    "carbs": 0,
    "fat": 4,
    "confidence": "medium"
  },
  "guar-gum": {
    "calories": 10,
    "protein": 0,
    "carbs": 3,
    "fat": 0,
    "fiber": 2.7,
    "confidence": "high"
  },
  "agar-agar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0.8,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "gelatin-sheets": {
    "calories": 7,
    "protein": 1.7,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "citric-acid": {
    "calories": 5,
    "protein": 0,
    "carbs": 1.3,
    "fat": 0,
    "confidence": "medium"
  },
  "bakers-ammonia": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "frangipane": {
    "calories": 120,
    "protein": 2.5,
    "carbs": 11,
    "fat": 8,
    "fiber": 1,
    "confidence": "medium"
  },
  "poppy-seed-filling": {
    "calories": 95,
    "protein": 1.5,
    "carbs": 15,
    "fat": 3.5,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "lotus-paste": {
    "calories": 105,
    "protein": 1,
    "carbs": 20,
    "fat": 2.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "red-bean-paste": {
    "calories": 90,
    "protein": 1.8,
    "carbs": 20,
    "fat": 0.3,
    "fiber": 2,
    "confidence": "medium"
  },
  "blueberry-pie-filling": {
    "calories": 90,
    "protein": 0,
    "carbs": 22,
    "fat": 0,
    "fiber": 1,
    "confidence": "medium"
  },
  "lime-curd": {
    "calories": 55,
    "protein": 0.3,
    "carbs": 9,
    "fat": 2,
    "confidence": "medium"
  },
  "passionfruit-curd": {
    "calories": 58,
    "protein": 0.4,
    "carbs": 9,
    "fat": 2.2,
    "confidence": "medium"
  },
  "tianmianjiang": {
    "calories": 30,
    "protein": 1,
    "carbs": 5,
    "fat": 0.5,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "douchi": {
    "calories": 25,
    "protein": 2,
    "carbs": 3,
    "fat": 0.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "furu": {
    "calories": 20,
    "protein": 2,
    "carbs": 1,
    "fat": 1,
    "confidence": "medium"
  },
  "bagoong": {
    "calories": 10,
    "protein": 1,
    "carbs": 0.5,
    "fat": 0.3,
    "confidence": "low"
  },
  "yuzu-ponzu": {
    "calories": 8,
    "protein": 0.5,
    "carbs": 1.5,
    "fat": 0,
    "confidence": "medium"
  },
  "takoyaki-sauce": {
    "calories": 35,
    "protein": 0.3,
    "carbs": 8,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "yakisoba-sauce": {
    "calories": 30,
    "protein": 0.4,
    "carbs": 7,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "kecap-asin": {
    "calories": 12,
    "protein": 1.5,
    "carbs": 1,
    "fat": 0,
    "confidence": "medium"
  },
  "sambal-terasi": {
    "calories": 20,
    "protein": 0.6,
    "carbs": 3,
    "fat": 0.7,
    "fiber": 0.5,
    "confidence": "low"
  },
  "nuoc-cham": {
    "calories": 18,
    "protein": 0.5,
    "carbs": 4,
    "fat": 0,
    "confidence": "medium"
  },
  "nam-prik-pao-exclude": {
    "calories": 25,
    "protein": 0.8,
    "carbs": 3,
    "fat": 1,
    "fiber": 0.8,
    "confidence": "low"
  },
  "white-miso": {
    "calories": 35,
    "protein": 2,
    "carbs": 5,
    "fat": 1,
    "fiber": 0.8,
    "confidence": "high"
  },
  "red-miso": {
    "calories": 34,
    "protein": 2.5,
    "carbs": 4,
    "fat": 1,
    "fiber": 1,
    "confidence": "high"
  },
  "awase-miso": {
    "calories": 34,
    "protein": 2.2,
    "carbs": 4.5,
    "fat": 1,
    "fiber": 0.9,
    "confidence": "high"
  },
  "barley-miso": {
    "calories": 33,
    "protein": 2,
    "carbs": 5,
    "fat": 1,
    "fiber": 1.2,
    "confidence": "medium"
  },
  "rose-harissa": {
    "calories": 35,
    "protein": 0.6,
    "carbs": 3,
    "fat": 2.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "shatta": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 2,
    "fat": 2.5,
    "fiber": 0.8,
    "confidence": "low"
  },
  "toum": {
    "calories": 90,
    "protein": 0.3,
    "carbs": 1,
    "fat": 10,
    "fiber": 0.1,
    "confidence": "medium"
  },
  "muhammara": {
    "calories": 55,
    "protein": 1,
    "carbs": 4,
    "fat": 4,
    "fiber": 1,
    "confidence": "medium"
  },
  "ajvar": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 3,
    "fat": 2,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "lutenitsa": {
    "calories": 28,
    "protein": 0.5,
    "carbs": 4,
    "fat": 1.5,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "mojo-verde": {
    "calories": 45,
    "protein": 0.3,
    "carbs": 1,
    "fat": 4.5,
    "fiber": 0.3,
    "confidence": "low"
  },
  "chermoula": {
    "calories": 50,
    "protein": 0.5,
    "carbs": 1.5,
    "fat": 5,
    "fiber": 0.5,
    "confidence": "low"
  },
  "zhug": {
    "calories": 40,
    "protein": 0.6,
    "carbs": 1.5,
    "fat": 4,
    "fiber": 0.6,
    "confidence": "low"
  },
  "recado-rojo": {
    "calories": 30,
    "protein": 0.5,
    "carbs": 5,
    "fat": 1,
    "fiber": 1,
    "confidence": "low"
  },
  "aji-verde": {
    "calories": 45,
    "protein": 0.5,
    "carbs": 1.5,
    "fat": 4.5,
    "fiber": 0.3,
    "confidence": "low"
  },
  "pique": {
    "calories": 2,
    "protein": 0,
    "carbs": 0.4,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "low"
  },
  "sofregit": {
    "calories": 35,
    "protein": 0.5,
    "carbs": 3,
    "fat": 2.5,
    "fiber": 0.7,
    "confidence": "low"
  },
  "mostarda": {
    "calories": 50,
    "protein": 0.2,
    "carbs": 12,
    "fat": 0.1,
    "fiber": 0.5,
    "confidence": "low"
  },
  "piccalilli": {
    "calories": 18,
    "protein": 0.3,
    "carbs": 4,
    "fat": 0.1,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "brown-sauce": {
    "calories": 25,
    "protein": 0.3,
    "carbs": 6,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "branston-pickle": {
    "calories": 25,
    "protein": 0.3,
    "carbs": 6,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "chow-chow": {
    "calories": 15,
    "protein": 0.3,
    "carbs": 3.5,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "comeback-sauce": {
    "calories": 80,
    "protein": 0.2,
    "carbs": 2,
    "fat": 8,
    "fiber": 0.1,
    "confidence": "low"
  },
  "gribiche": {
    "calories": 75,
    "protein": 1,
    "carbs": 1,
    "fat": 7.5,
    "fiber": 0.1,
    "confidence": "low"
  },
  "dukkah-oil": {
    "calories": 110,
    "protein": 1,
    "carbs": 2,
    "fat": 11,
    "fiber": 0.8,
    "confidence": "low"
  },
  "mojo-rojo": {
    "calories": 50,
    "protein": 0.3,
    "carbs": 1.5,
    "fat": 5,
    "fiber": 0.4,
    "confidence": "low"
  },
  "banh-mi-pate": {
    "calories": 60,
    "protein": 2.5,
    "carbs": 0.5,
    "fat": 5.5,
    "confidence": "low"
  },
  "perilla-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "egoma-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "argan-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "hemp-oil": {
    "calories": 125,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "hazelnut-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "pistachio-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "macadamia-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "almond-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "pumpkin-seed-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "tea-seed-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "red-palm-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "toasted-pumpkin-seed-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "toasted-walnut-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "black-sesame-oil": {
    "calories": 120,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "cultured-ghee": {
    "calories": 123,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "grass-fed-ghee": {
    "calories": 123,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "confidence": "high"
  },
  "schmaltz": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "leaf-lard": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "beef-tallow": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "beef-dripping": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "bacon-fat": {
    "calories": 115,
    "protein": 0,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "banyuls-vinegar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "jerez-vinegar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "moscatel-vinegar": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "confidence": "high"
  },
  "ume-plum-vinegar": {
    "calories": 2,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "kurozu-vinegar": {
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "confidence": "high"
  },
  "persimmon-vinegar": {
    "calories": 6,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "confidence": "high"
  },
  "coconut-vinegar": {
    "calories": 2,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "cane-vinegar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "date-vinegar": {
    "calories": 7,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "confidence": "high"
  },
  "fig-vinegar": {
    "calories": 7,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "confidence": "high"
  },
  "raspberry-vinegar": {
    "calories": 6,
    "protein": 0,
    "carbs": 1,
    "fat": 0,
    "confidence": "high"
  },
  "chardonnay-vinegar": {
    "calories": 3,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "aged-balsamic-vinegar": {
    "calories": 20,
    "protein": 0,
    "carbs": 5,
    "fat": 0,
    "confidence": "high"
  },
  "traditional-balsamic-vinegar": {
    "calories": 24,
    "protein": 0,
    "carbs": 6,
    "fat": 0,
    "confidence": "high"
  },
  "white-balsamic-vinegar": {
    "calories": 14,
    "protein": 0,
    "carbs": 3,
    "fat": 0,
    "confidence": "high"
  },
  "saba": {
    "calories": 42,
    "protein": 0,
    "carbs": 10,
    "fat": 0,
    "confidence": "high"
  },
  "vincotto": {
    "calories": 40,
    "protein": 0,
    "carbs": 10,
    "fat": 0,
    "confidence": "high"
  },
  "verjus": {
    "calories": 8,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "confidence": "high"
  },
  "grains-of-paradise": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.5,
    "confidence": "low"
  },
  "long-pepper": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.4,
    "fat": 0.1,
    "fiber": 0.6,
    "confidence": "low"
  },
  "cubeb": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.2,
    "fat": 0.2,
    "fiber": 0.5,
    "confidence": "low"
  },
  "mahleb": {
    "calories": 7,
    "protein": 0.2,
    "carbs": 0.8,
    "fat": 0.4,
    "fiber": 0.3,
    "confidence": "low"
  },
  "mastic": {
    "calories": 8,
    "protein": 0,
    "carbs": 2,
    "fat": 0.1,
    "confidence": "low"
  },
  "anardana": {
    "calories": 9,
    "protein": 0.2,
    "carbs": 2.2,
    "fat": 0.1,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "kokum": {
    "calories": 7,
    "protein": 0.1,
    "carbs": 1.8,
    "fat": 0.1,
    "fiber": 0.4,
    "confidence": "low"
  },
  "black-lime": {
    "calories": 10,
    "protein": 0.3,
    "carbs": 2.8,
    "fat": 0.1,
    "fiber": 1,
    "confidence": "low"
  },
  "urfa-biber": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.3,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "maras-pepper": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.3,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "sansho": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.2,
    "fiber": 0.7,
    "confidence": "low"
  },
  "dried-galangal": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 1.1,
    "fat": 0.1,
    "fiber": 0.3,
    "confidence": "low"
  },
  "kaffir-lime-powder": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 0.9,
    "fat": 0.1,
    "fiber": 0.4,
    "confidence": "low"
  },
  "achiote-powder": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.2,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "hoja-santa": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0.05,
    "fiber": 0.3,
    "confidence": "low"
  },
  "avocado-leaf": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0.05,
    "fiber": 0.3,
    "confidence": "low"
  },
  "dried-pasilla": {
    "calories": 12,
    "protein": 0.5,
    "carbs": 2.3,
    "fat": 0.4,
    "fiber": 1,
    "confidence": "medium"
  },
  "morita-chili": {
    "calories": 8,
    "protein": 0.3,
    "carbs": 1.6,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "cascabel-chili": {
    "calories": 9,
    "protein": 0.4,
    "carbs": 1.8,
    "fat": 0.3,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "dried-arbol": {
    "calories": 3,
    "protein": 0.1,
    "carbs": 0.6,
    "fat": 0.1,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "dried-rose-petals": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.5,
    "fat": 0.02,
    "fiber": 0.2,
    "confidence": "low"
  },
  "advieh": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.3,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "hawaij": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "low"
  },
  "tabil": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "low"
  },
  "dry-chermoula": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "suya-spice": {
    "calories": 12,
    "protein": 0.5,
    "carbs": 1.1,
    "fat": 0.7,
    "fiber": 0.4,
    "confidence": "low"
  },
  "jollof-spice": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.4,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "madras-curry-powder": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "vindaloo-masala": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "jamaican-curry-powder": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "sambar-powder": {
    "calories": 8,
    "protein": 0.4,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "rasam-powder": {
    "calories": 8,
    "protein": 0.4,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "panch-phoron": {
    "calories": 9,
    "protein": 0.4,
    "carbs": 1,
    "fat": 0.5,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "bumbu-base": {
    "calories": 8,
    "protein": 0.3,
    "carbs": 1.4,
    "fat": 0.3,
    "fiber": 0.5,
    "confidence": "low"
  },
  "quatre-epices": {
    "calories": 7,
    "protein": 0.2,
    "carbs": 1.3,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "jerk-dry-rub": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.3,
    "fat": 0.2,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "dry-zhug": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "khmeli-suneli": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1.1,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "ichimi-togarashi": {
    "calories": 6,
    "protein": 0.3,
    "carbs": 1,
    "fat": 0.3,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "mitmita": {
    "calories": 7,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 0.3,
    "fiber": 0.7,
    "confidence": "low"
  },
  "curtido": {
    "calories": 22,
    "protein": 1,
    "carbs": 5,
    "fat": 0.1,
    "fiber": 2,
    "confidence": "medium"
  },
  "kosher-dill-pickles": {
    "calories": 5,
    "protein": 0.3,
    "carbs": 1,
    "fat": 0.1,
    "fiber": 0.5,
    "confidence": "high"
  },
  "cornichons": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "pickled-okra": {
    "calories": 4,
    "protein": 0.3,
    "carbs": 1,
    "fat": 0,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "pickled-beets": {
    "calories": 74,
    "protein": 1.5,
    "carbs": 18,
    "fat": 0.1,
    "fiber": 3,
    "confidence": "high"
  },
  "pickled-red-onions": {
    "calories": 40,
    "protein": 1,
    "carbs": 9,
    "fat": 0.1,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "pickled-garlic": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 1,
    "fat": 0,
    "fiber": 0.1,
    "confidence": "medium"
  },
  "takuan": {
    "calories": 5,
    "protein": 0.2,
    "carbs": 1.2,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "fukujinzuke": {
    "calories": 18,
    "protein": 0.5,
    "carbs": 4,
    "fat": 0,
    "fiber": 0.8,
    "confidence": "low"
  },
  "atchara": {
    "calories": 60,
    "protein": 0.6,
    "carbs": 15,
    "fat": 0.1,
    "fiber": 1.5,
    "confidence": "low"
  },
  "torshi": {
    "calories": 25,
    "protein": 1,
    "carbs": 5,
    "fat": 0.2,
    "fiber": 1.5,
    "confidence": "low"
  },
  "lime-pickle": {
    "calories": 15,
    "protein": 0.2,
    "carbs": 2,
    "fat": 0.8,
    "fiber": 0.5,
    "confidence": "low"
  },
  "kimchi-radish": {
    "calories": 30,
    "protein": 1.5,
    "carbs": 6,
    "fat": 0.2,
    "fiber": 2,
    "confidence": "medium"
  },
  "sardines-in-tomato-sauce": {
    "calories": 180,
    "protein": 18,
    "carbs": 1,
    "fat": 11,
    "confidence": "high"
  },
  "sardines-in-olive-oil": {
    "calories": 210,
    "protein": 22,
    "carbs": 0,
    "fat": 13,
    "confidence": "high"
  },
  "tinned-mussels": {
    "calories": 140,
    "protein": 13,
    "carbs": 4,
    "fat": 8,
    "confidence": "medium"
  },
  "smoked-trout-tinned": {
    "calories": 160,
    "protein": 18,
    "carbs": 0,
    "fat": 10,
    "confidence": "medium"
  },
  "tuna-ventresca": {
    "calories": 190,
    "protein": 21,
    "carbs": 0,
    "fat": 12,
    "confidence": "medium"
  },
  "bottarga": {
    "calories": 110,
    "protein": 13,
    "carbs": 1,
    "fat": 6,
    "confidence": "low"
  },
  "salted-anchovies": {
    "calories": 58,
    "protein": 8,
    "carbs": 0,
    "fat": 2.7,
    "confidence": "medium"
  },
  "gigantes-beans": {
    "calories": 170,
    "protein": 9,
    "carbs": 28,
    "fat": 3,
    "fiber": 8,
    "confidence": "medium"
  },
  "stuffed-grape-leaves": {
    "calories": 35,
    "protein": 0.6,
    "carbs": 5,
    "fat": 1.5,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "piquillo-peppers": {
    "calories": 15,
    "protein": 0.6,
    "carbs": 3,
    "fat": 0.2,
    "fiber": 1,
    "confidence": "medium"
  },
  "peppadew-peppers": {
    "calories": 10,
    "protein": 0.2,
    "carbs": 2.5,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "calabrian-chili-paste": {
    "calories": 35,
    "protein": 0.4,
    "carbs": 2,
    "fat": 3,
    "fiber": 0.5,
    "confidence": "low"
  },
  "caperberries": {
    "calories": 3,
    "protein": 0.2,
    "carbs": 0.5,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "low"
  },
  "castelvetrano-olives": {
    "calories": 40,
    "protein": 0.3,
    "carbs": 1,
    "fat": 4,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "nicoise-olives": {
    "calories": 45,
    "protein": 0.3,
    "carbs": 1.2,
    "fat": 4.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "cerignola-olives": {
    "calories": 35,
    "protein": 0.3,
    "carbs": 1,
    "fat": 3.5,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "manzanilla-olives": {
    "calories": 40,
    "protein": 0.3,
    "carbs": 1,
    "fat": 4,
    "fiber": 1,
    "confidence": "medium"
  },
  "tapenade": {
    "calories": 45,
    "protein": 0.4,
    "carbs": 1,
    "fat": 4.5,
    "fiber": 0.6,
    "confidence": "medium"
  },
  "mango-chutney": {
    "calories": 35,
    "protein": 0.1,
    "carbs": 9,
    "fat": 0,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "tamarind-chutney": {
    "calories": 40,
    "protein": 0.2,
    "carbs": 10,
    "fat": 0,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "sweet-red-bean-paste": {
    "calories": 95,
    "protein": 2,
    "carbs": 21,
    "fat": 0.3,
    "fiber": 2,
    "confidence": "medium"
  },
  "halva": {
    "calories": 135,
    "protein": 3,
    "carbs": 15,
    "fat": 8,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "sun-dried-tomatoes-in-oil": {
    "calories": 60,
    "protein": 1,
    "carbs": 6,
    "fat": 4,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "dilly-beans": {
    "calories": 8,
    "protein": 0.5,
    "carbs": 1.5,
    "fat": 0,
    "fiber": 0.7,
    "confidence": "medium"
  },
  "pickled-cherry-peppers": {
    "calories": 8,
    "protein": 0.3,
    "carbs": 1.5,
    "fat": 0.1,
    "fiber": 0.5,
    "confidence": "low"
  },
  "frozen-fava-beans": {
    "calories": 110,
    "protein": 8,
    "carbs": 20,
    "fat": 0.5,
    "fiber": 7,
    "confidence": "high"
  },
  "frozen-lima-beans": {
    "calories": 130,
    "protein": 7,
    "carbs": 24,
    "fat": 0.4,
    "fiber": 6,
    "confidence": "high"
  },
  "frozen-artichoke-hearts": {
    "calories": 60,
    "protein": 4,
    "carbs": 13,
    "fat": 0.2,
    "fiber": 7,
    "confidence": "high"
  },
  "frozen-collard-greens": {
    "calories": 30,
    "protein": 2.5,
    "carbs": 5,
    "fat": 0.3,
    "fiber": 3,
    "confidence": "high"
  },
  "frozen-butternut-squash": {
    "calories": 60,
    "protein": 1.5,
    "carbs": 16,
    "fat": 0.1,
    "fiber": 3,
    "confidence": "high"
  },
  "frozen-riced-broccoli": {
    "calories": 30,
    "protein": 2.5,
    "carbs": 6,
    "fat": 0.3,
    "fiber": 2.5,
    "confidence": "high"
  },
  "frozen-plantain": {
    "calories": 180,
    "protein": 1.5,
    "carbs": 47,
    "fat": 0.4,
    "fiber": 3,
    "confidence": "medium"
  },
  "frozen-yuca": {
    "calories": 165,
    "protein": 1.4,
    "carbs": 39,
    "fat": 0.3,
    "fiber": 2,
    "confidence": "medium"
  },
  "frozen-durian": {
    "calories": 180,
    "protein": 2,
    "carbs": 33,
    "fat": 5,
    "fiber": 4,
    "confidence": "medium"
  },
  "frozen-dragonfruit": {
    "calories": 60,
    "protein": 1.2,
    "carbs": 13,
    "fat": 0,
    "fiber": 3,
    "confidence": "medium"
  },
  "frozen-passionfruit-pulp": {
    "calories": 100,
    "protein": 2,
    "carbs": 24,
    "fat": 0.5,
    "fiber": 10,
    "confidence": "medium"
  },
  "frozen-guava-pulp": {
    "calories": 110,
    "protein": 1.5,
    "carbs": 27,
    "fat": 0.5,
    "fiber": 5,
    "confidence": "medium"
  },
  "frozen-soursop-pulp": {
    "calories": 90,
    "protein": 1.5,
    "carbs": 23,
    "fat": 0.3,
    "fiber": 4.5,
    "confidence": "medium"
  },
  "frozen-wontons": {
    "calories": 50,
    "protein": 2.5,
    "carbs": 6,
    "fat": 1.8,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "frozen-samosas": {
    "calories": 150,
    "protein": 3,
    "carbs": 19,
    "fat": 7,
    "fiber": 2,
    "confidence": "medium"
  },
  "frozen-paratha": {
    "calories": 200,
    "protein": 4,
    "carbs": 27,
    "fat": 8,
    "fiber": 1.5,
    "confidence": "medium"
  },
  "frozen-naan": {
    "calories": 260,
    "protein": 8,
    "carbs": 48,
    "fat": 4,
    "fiber": 2,
    "confidence": "high"
  },
  "frozen-pierogi": {
    "calories": 60,
    "protein": 2,
    "carbs": 11,
    "fat": 1,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "frozen-arancini": {
    "calories": 80,
    "protein": 2.5,
    "carbs": 11,
    "fat": 3,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "frozen-empanadas": {
    "calories": 190,
    "protein": 6,
    "carbs": 22,
    "fat": 9,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-tamales": {
    "calories": 200,
    "protein": 6,
    "carbs": 24,
    "fat": 9,
    "fiber": 3,
    "confidence": "medium"
  },
  "frozen-bao-buns": {
    "calories": 170,
    "protein": 5,
    "carbs": 28,
    "fat": 4,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-mochi-ice-cream": {
    "calories": 110,
    "protein": 1.5,
    "carbs": 20,
    "fat": 3,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "frozen-taiyaki": {
    "calories": 180,
    "protein": 3,
    "carbs": 34,
    "fat": 4,
    "fiber": 1,
    "confidence": "low"
  },
  "frozen-calamari-rings": {
    "calories": 50,
    "protein": 3,
    "carbs": 5,
    "fat": 2,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "frozen-scallops": {
    "calories": 30,
    "protein": 6,
    "carbs": 1,
    "fat": 0.2,
    "confidence": "high"
  },
  "frozen-crab-cakes": {
    "calories": 130,
    "protein": 9,
    "carbs": 9,
    "fat": 6,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "frozen-fish-balls": {
    "calories": 40,
    "protein": 4,
    "carbs": 4,
    "fat": 0.8,
    "confidence": "medium"
  },
  "frozen-beef-meatballs": {
    "calories": 80,
    "protein": 4,
    "carbs": 2,
    "fat": 6,
    "fiber": 0.2,
    "confidence": "high"
  },
  "frozen-chicken-meatballs": {
    "calories": 50,
    "protein": 6,
    "carbs": 1,
    "fat": 2.5,
    "confidence": "high"
  },
  "frozen-bread-dough": {
    "calories": 110,
    "protein": 4,
    "carbs": 21,
    "fat": 1.5,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-croissant-dough": {
    "calories": 230,
    "protein": 4,
    "carbs": 23,
    "fat": 13,
    "fiber": 1,
    "confidence": "medium"
  },
  "frozen-cookie-dough": {
    "calories": 120,
    "protein": 1,
    "carbs": 17,
    "fat": 6,
    "fiber": 0.5,
    "confidence": "high"
  },
  "frozen-biscuit-dough": {
    "calories": 170,
    "protein": 3,
    "carbs": 22,
    "fat": 8,
    "fiber": 0.5,
    "confidence": "high"
  },
  "frozen-kibbeh": {
    "calories": 120,
    "protein": 5,
    "carbs": 11,
    "fat": 6,
    "fiber": 1,
    "confidence": "low"
  },
  "frozen-croquettes": {
    "calories": 90,
    "protein": 3,
    "carbs": 10,
    "fat": 4,
    "fiber": 0.5,
    "confidence": "low"
  },
  "frozen-gnocchi": {
    "calories": 250,
    "protein": 5,
    "carbs": 53,
    "fat": 1.5,
    "fiber": 2,
    "confidence": "medium"
  },
  "frozen-falafel": {
    "calories": 60,
    "protein": 2.5,
    "carbs": 6,
    "fat": 3,
    "fiber": 1.5,
    "confidence": "high"
  },
  "frozen-plant-based-patty": {
    "calories": 240,
    "protein": 19,
    "carbs": 9,
    "fat": 14,
    "fiber": 2,
    "confidence": "high"
  },
  "frozen-riced-cauliflower": {
    "calories": 25,
    "protein": 2,
    "carbs": 5,
    "fat": 0.3,
    "fiber": 2,
    "confidence": "high"
  },
  "frozen-chopped-spinach": {
    "calories": 40,
    "protein": 5,
    "carbs": 6,
    "fat": 0.5,
    "fiber": 4,
    "confidence": "high"
  },
  "frozen-shrimp-jumbo": {
    "calories": 28,
    "protein": 6,
    "carbs": 0.2,
    "fat": 0.3,
    "confidence": "high"
  },
  "frozen-pork-meatballs": {
    "calories": 85,
    "protein": 4,
    "carbs": 2,
    "fat": 7,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "hojicha-powder": {
    "calories": 4,
    "protein": 0.3,
    "carbs": 0.7,
    "fat": 0.05,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "genmaicha": {
    "calories": 3,
    "protein": 0.2,
    "carbs": 0.6,
    "fat": 0.02,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "sencha": {
    "calories": 3,
    "protein": 0.4,
    "carbs": 0.5,
    "fat": 0.05,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "pu-erh-tea": {
    "calories": 3,
    "protein": 0.3,
    "carbs": 0.6,
    "fat": 0.03,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "rooibos-tea": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0.01,
    "fiber": 0.2,
    "confidence": "medium"
  },
  "hibiscus-tea": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.5,
    "fat": 0.01,
    "fiber": 0.3,
    "confidence": "medium"
  },
  "butterfly-pea-flower": {
    "calories": 2,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0.01,
    "fiber": 0.2,
    "confidence": "low"
  },
  "yerba-mate": {
    "calories": 3,
    "protein": 0.3,
    "carbs": 0.6,
    "fat": 0.05,
    "fiber": 0.4,
    "confidence": "medium"
  },
  "mugicha": {
    "calories": 4,
    "protein": 0.2,
    "carbs": 0.9,
    "fat": 0.02,
    "fiber": 0.2,
    "confidence": "low"
  },
  "chai-masala-blend": {
    "calories": 6,
    "protein": 0.2,
    "carbs": 1.2,
    "fat": 0.2,
    "fiber": 0.6,
    "confidence": "low"
  },
  "instant-espresso-beans": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "chicory-root-coffee": {
    "calories": 5,
    "protein": 0.1,
    "carbs": 1,
    "fat": 0.02,
    "fiber": 0.6,
    "confidence": "low"
  },
  "turkish-coffee-grind": {
    "calories": 1,
    "protein": 0.1,
    "carbs": 0,
    "fat": 0,
    "confidence": "medium"
  },
  "aloe-vera-juice": {
    "calories": 5,
    "protein": 0,
    "carbs": 1.3,
    "fat": 0,
    "confidence": "medium"
  },
  "ginger-juice": {
    "calories": 10,
    "protein": 0.2,
    "carbs": 2.2,
    "fat": 0.05,
    "fiber": 0.1,
    "confidence": "low"
  },
  "sugarcane-juice": {
    "calories": 24,
    "protein": 0.05,
    "carbs": 6,
    "fat": 0.02,
    "confidence": "low"
  },
  "michiu-rice-wine": {
    "calories": 35,
    "protein": 0.1,
    "carbs": 1.5,
    "fat": 0,
    "confidence": "low"
  },
  "soju-cooking": {
    "calories": 40,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "medium"
  },
  "madeira-wine": {
    "calories": 40,
    "protein": 0.1,
    "carbs": 3,
    "fat": 0,
    "confidence": "medium"
  },
  "fino-sherry": {
    "calories": 33,
    "protein": 0.1,
    "carbs": 0.4,
    "fat": 0,
    "confidence": "medium"
  },
  "oloroso-sherry": {
    "calories": 38,
    "protein": 0.1,
    "carbs": 1.8,
    "fat": 0,
    "confidence": "medium"
  },
  "pedro-ximenez-sherry": {
    "calories": 75,
    "protein": 0.1,
    "carbs": 14,
    "fat": 0,
    "confidence": "low"
  },
  "light-rum": {
    "calories": 64,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "high"
  },
  "spiced-rum": {
    "calories": 65,
    "protein": 0,
    "carbs": 1.5,
    "fat": 0,
    "confidence": "medium"
  },
  "kirsch": {
    "calories": 68,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "medium"
  },
  "calvados": {
    "calories": 70,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "confidence": "medium"
  },
  "grappa": {
    "calories": 74,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "confidence": "medium"
  },
  "pastis": {
    "calories": 70,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "confidence": "low"
  },
  "amaretto": {
    "calories": 110,
    "protein": 0,
    "carbs": 17,
    "fat": 0,
    "confidence": "low"
  },
  "creme-de-cassis": {
    "calories": 95,
    "protein": 0,
    "carbs": 15,
    "fat": 0,
    "confidence": "low"
  },
  "cooking-red-wine": {
    "calories": 25,
    "protein": 0.1,
    "carbs": 1.2,
    "fat": 0,
    "confidence": "high"
  },
  "cooking-white-wine": {
    "calories": 24,
    "protein": 0.1,
    "carbs": 0.8,
    "fat": 0,
    "confidence": "high"
  },
  "pili-nuts": {
    "calories": 204,
    "protein": 3.1,
    "carbs": 4,
    "fat": 22.6,
    "fiber": 2,
    "confidence": "medium"
  },
  "tiger-nuts": {
    "calories": 120,
    "protein": 1.7,
    "carbs": 19,
    "fat": 7,
    "fiber": 10,
    "confidence": "medium"
  },
  "candlenut": {
    "calories": 176,
    "protein": 3.5,
    "carbs": 4.5,
    "fat": 17,
    "fiber": 1.5,
    "confidence": "low"
  },
  "marcona-almonds": {
    "calories": 170,
    "protein": 5.5,
    "carbs": 5,
    "fat": 15,
    "fiber": 3,
    "confidence": "medium"
  },
  "sacha-inchi-seeds": {
    "calories": 170,
    "protein": 8,
    "carbs": 7,
    "fat": 12,
    "fiber": 5,
    "confidence": "low"
  },
  "watermelon-seeds": {
    "calories": 158,
    "protein": 8,
    "carbs": 4.3,
    "fat": 13.5,
    "fiber": 0.8,
    "confidence": "medium"
  },
  "basil-seeds": {
    "calories": 60,
    "protein": 2,
    "carbs": 7,
    "fat": 2.5,
    "fiber": 7,
    "confidence": "low"
  },
  "perilla-seeds": {
    "calories": 50,
    "protein": 1.5,
    "carbs": 2.5,
    "fat": 4,
    "fiber": 1,
    "confidence": "low"
  },
  "seaweed-snacks": {
    "calories": 13,
    "protein": 1,
    "carbs": 1,
    "fat": 0.8,
    "fiber": 0.5,
    "confidence": "medium"
  },
  "plantain-chips": {
    "calories": 150,
    "protein": 1,
    "carbs": 18,
    "fat": 9,
    "fiber": 2,
    "confidence": "medium"
  },
  "lotus-root-chips": {
    "calories": 140,
    "protein": 1.5,
    "carbs": 19,
    "fat": 7,
    "fiber": 2.5,
    "confidence": "low"
  },
  "papadum": {
    "calories": 40,
    "protein": 2,
    "carbs": 6,
    "fat": 0.6,
    "fiber": 1.5,
    "confidence": "low"
  },
  "prawn-crackers": {
    "calories": 150,
    "protein": 1.5,
    "carbs": 17,
    "fat": 8.5,
    "fiber": 0.3,
    "confidence": "low"
  },
  "mochi-snacks": {
    "calories": 70,
    "protein": 0.8,
    "carbs": 15,
    "fat": 1,
    "fiber": 0.3,
    "confidence": "low"
  },
  "stuffed-dates": {
    "calories": 90,
    "protein": 1.5,
    "carbs": 15,
    "fat": 3,
    "fiber": 1.8,
    "confidence": "low"
  },
  "chorizo-fresh": {
    "calories": 455,
    "protein": 24,
    "carbs": 2,
    "fat": 39,
    "confidence": "high"
  },
  "dover-sole": {
    "calories": 91,
    "protein": 19,
    "carbs": 0,
    "fat": 1,
    "confidence": "high"
  },
  "amchur": {
    "calories": 325,
    "protein": 2,
    "carbs": 80,
    "fat": 1,
    "fiber": 2,
    "confidence": "medium"
  },
  "fennel-pollen": {
    "calories": 345,
    "protein": 16,
    "carbs": 52,
    "fat": 15,
    "fiber": 40,
    "confidence": "low"
  },
  "black-bean-garlic-sauce": {
    "calories": 70,
    "protein": 3,
    "carbs": 12,
    "fat": 1,
    "fiber": 2,
    "confidence": "medium"
  },
  "speculoos-spread": {
    "calories": 525,
    "protein": 3,
    "carbs": 58,
    "fat": 31,
    "fiber": 1,
    "confidence": "medium"
  }
};
