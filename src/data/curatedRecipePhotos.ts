import type { RecipeImage } from "@/lib/types";

/**
 * Freely-licensed, hand-verified photos for the curated recipes
 * (src/data/curatedRecipes.ts). Searched on Wikimedia Commons and visually
 * confirmed to depict the dish; CC0 / CC BY / CC BY-SA only, attributed.
 */
export const CURATED_RECIPE_PHOTOS: Record<string, RecipeImage> = {
  "cur-classic-beef-chili": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chili_with_fried_ground_beef_and_roasted_cherry_tomatoes_-_Massachusetts.jpg/1280px-Chili_with_fried_ground_beef_and_roasted_cherry_tomatoes_-_Massachusetts.jpg",
    "alt": "Photo of Classic Beef Chili",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chili_with_fried_ground_beef_and_roasted_cherry_tomatoes_-_Massachusetts.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Daderot — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-hearty-beef-stew": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Beef_stew_2.jpg/1280px-Beef_stew_2.jpg",
    "alt": "Photo of Hearty Beef Stew",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Beef_stew_2.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: 3steph14 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-classic-meatloaf": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Classic_Meatloaf_recipe.JPG/1280px-Classic_Meatloaf_recipe.JPG",
    "alt": "Photo of Classic Meatloaf",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Classic_Meatloaf_recipe.JPG",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Robert Loescher — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-skillet-cornbread": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Cornbread_in_Skillet.jpg/1280px-Cornbread_in_Skillet.jpg",
    "alt": "Photo of Skillet Cornbread",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cornbread_in_Skillet.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Alabama Extension — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-buttermilk-biscuits-and-gravy": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Biscuits_and_sausage_gravy_%288006401964%29.jpg/1280px-Biscuits_and_sausage_gravy_%288006401964%29.jpg",
    "alt": "Photo of Buttermilk Biscuits and Gravy",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Biscuits_and_sausage_gravy_(8006401964).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: jeffreyw — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-crispy-hash-browns": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Breakfast_foods.jpg/1280px-Breakfast_foods.jpg",
    "alt": "Photo of Crispy Hash Browns",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Breakfast_foods.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Larry & Teddy Page from Cedar, Michigan, USA — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-tomato-bruschetta": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_typical_Maltese_bruschetta_with_fresh_Mediterranean_ingredients.jpg/1280px-A_typical_Maltese_bruschetta_with_fresh_Mediterranean_ingredients.jpg",
    "alt": "Photo of Tomato Bruschetta",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:A_typical_Maltese_bruschetta_with_fresh_Mediterranean_ingredients.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Patrickfarrugia — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-stuffed-shells": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Stuffed_shells_002.jpg/1280px-Stuffed_shells_002.jpg",
    "alt": "Photo of Spinach & Ricotta Stuffed Shells",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Stuffed_shells_002.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Adam S. Keck — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-pork-carnitas-tacos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Salud_Carnitas_tacos.jpg/1280px-Salud_Carnitas_tacos.jpg",
    "alt": "Photo of Pork Carnitas Tacos",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Salud_Carnitas_tacos.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: RightCowLeftCoast — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chilaquiles-verdes": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/01_Chilaquiles_verdes_con_frijoles_chinos.jpg/1280px-01_Chilaquiles_verdes_con_frijoles_chinos.jpg",
    "alt": "Photo of Chilaquiles Verdes",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:01_Chilaquiles_verdes_con_frijoles_chinos.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: ismael villafranco — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-pork-pozole-rojo": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Pozole_rojo_con_carne_de_cerdo.jpg",
    "alt": "Photo of Pork Pozole Rojo",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pozole_rojo_con_carne_de_cerdo.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Nancy.smz — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-fresh-guacamole": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guacamole_IMGP1256.jpg/1280px-Guacamole_IMGP1256.jpg",
    "alt": "Photo of Fresh Guacamole",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Guacamole_IMGP1256.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Nikodem Nijaki — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-pad-thai": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Chicken_Pad_Thai_dish_served_at_Indooroopilly_Shopping_Centre%2C_Brisbane.jpg/1280px-Chicken_Pad_Thai_dish_served_at_Indooroopilly_Shopping_Centre%2C_Brisbane.jpg",
    "alt": "Photo of Chicken Pad Thai",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chicken_Pad_Thai_dish_served_at_Indooroopilly_Shopping_Centre,_Brisbane.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Chris Olszewski — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-lo-mein": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Chicken_lo_mein_%2810715374483%29.jpg/1280px-Chicken_lo_mein_%2810715374483%29.jpg",
    "alt": "Photo of Chicken Lo Mein",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chicken_lo_mein_(10715374483).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: jeffreyw — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-pork-pot-stickers": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ginger_Pork_Pot_Stickers.jpg/1280px-Ginger_Pork_Pot_Stickers.jpg",
    "alt": "Photo of Pork Pot Stickers",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ginger_Pork_Pot_Stickers.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: HarshLight — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-beef-bulgogi": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bulgogi_%28Marinated_beef._Served_with_rice%29_-_Kogi_2023-09-11.jpg/1280px-Bulgogi_%28Marinated_beef._Served_with_rice%29_-_Kogi_2023-09-11.jpg",
    "alt": "Photo of Beef Bulgogi",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bulgogi_(Marinated_beef._Served_with_rice)_-_Kogi_2023-09-11.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-general-tsos-chicken": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flickr_preppybyday_4665999863--General_Tso%27s_Chicken.jpg/1280px-Flickr_preppybyday_4665999863--General_Tso%27s_Chicken.jpg",
    "alt": "Photo of General Tso's Chicken",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Flickr_preppybyday_4665999863--General_Tso%27s_Chicken.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Evan Joshua Swigart (TheCulinaryGeek) — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-crispy-falafel": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falafel_1.JPG/1280px-Falafel_1.JPG",
    "alt": "Photo of Crispy Falafel",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Falafel_1.JPG",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Miansari66 — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-gyros": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Main_box_%28chicken_gyros%2C_pancetta%2C_kaserokroketes%2C_halloumi%29_-_Archipelagos_Gyros_2024-07-22.jpg/1280px-Main_box_%28chicken_gyros%2C_pancetta%2C_kaserokroketes%2C_halloumi%29_-_Archipelagos_Gyros_2024-07-22.jpg",
    "alt": "Photo of Chicken Gyros",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Main_box_(chicken_gyros,_pancetta,_kaserokroketes,_halloumi)_-_Archipelagos_Gyros_2024-07-22.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-beef-kofta": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beef_kofta_kebab_at_the_Folklife_Festival.jpg/1280px-Beef_kofta_kebab_at_the_Folklife_Festival.jpg",
    "alt": "Photo of Beef Kofta",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Beef_kofta_kebab_at_the_Folklife_Festival.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ser Amantio di Nicolao — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-beef-moussaka": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Siam_Niramit_Bangkok_buffet_beef_moussaka_%282014%29.jpg/1280px-Siam_Niramit_Bangkok_buffet_beef_moussaka_%282014%29.jpg",
    "alt": "Photo of Beef Moussaka",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Siam_Niramit_Bangkok_buffet_beef_moussaka_(2014).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Kathy — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-cinnamon-french-toast": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FrenchToast.JPG/1280px-FrenchToast.JPG",
    "alt": "Photo of Cinnamon French Toast",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:FrenchToast.JPG",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Jonathunder — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-veggie-frittata": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Frittata_-_Bam%27s_Kitchen_2024-04-02.jpg/1280px-Frittata_-_Bam%27s_Kitchen_2024-04-02.jpg",
    "alt": "Photo of Veggie Frittata",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Frittata_-_Bam%27s_Kitchen_2024-04-02.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-breakfast-hash": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Breakfast_hash_at_Legends_Bistro_%2821838853126%29.jpg/1280px-Breakfast_hash_at_Legends_Bistro_%2821838853126%29.jpg",
    "alt": "Photo of Crispy Breakfast Hash",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Breakfast_hash_at_Legends_Bistro_(21838853126).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ruth Hartnup from Vancouver, Canada — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-belgian-waffles": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg/1280px-Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg",
    "alt": "Photo of Belgian Waffles",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-breakfast-sandwich": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Breakfast_sandwich.jpg/1280px-Breakfast_sandwich.jpg",
    "alt": "Photo of Bacon, Egg & Cheese Breakfast Sandwich",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Breakfast_sandwich.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: jeffreyw — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-and-sausage-gumbo": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chicken_and_Sausage_Gumbo.jpg/1280px-Chicken_and_Sausage_Gumbo.jpg",
    "alt": "Photo of Chicken and Sausage Gumbo",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chicken_and_Sausage_Gumbo.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Jens Ohlig — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-broccoli-cheddar-soup": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Broccoli_and_cheddar_soup_-_Pausa_Cafe%2C_Dunelm_Shoreham_2026-01-13.jpg/1280px-Broccoli_and_cheddar_soup_-_Pausa_Cafe%2C_Dunelm_Shoreham_2026-01-13.jpg",
    "alt": "Photo of Broccoli Cheddar Soup",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Broccoli_and_cheddar_soup_-_Pausa_Cafe,_Dunelm_Shoreham_2026-01-13.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-vegetable-stir-fry": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Stir_fried_mixed_vegetables.jpg/1280px-Stir_fried_mixed_vegetables.jpg",
    "alt": "Photo of Vegetable Stir Fry",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Stir_fried_mixed_vegetables.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: CNEcija12345 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-black-bean-burgers": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bunless_Black_Bean_Burger_%2845653618851%29.jpg/1280px-Bunless_Black_Bean_Burger_%2845653618851%29.jpg",
    "alt": "Photo of Black Bean Burgers",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bunless_Black_Bean_Burger_(45653618851).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ella Olsson — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-veggie-buddha-bowl": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Healthy_Vegan_Buddha_Bowl_-_49859044753.jpg/1280px-Healthy_Vegan_Buddha_Bowl_-_49859044753.jpg",
    "alt": "Photo of Veggie Buddha Bowl",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Healthy_Vegan_Buddha_Bowl_-_49859044753.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: FitTasteTic — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-fudgy-brownies": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dolly_Pardon%27s_Fabulously_Fudgy_Brownies_-_October_2023_-_Sarah_Stierch.jpg/1280px-Dolly_Pardon%27s_Fabulously_Fudgy_Brownies_-_October_2023_-_Sarah_Stierch.jpg",
    "alt": "Photo of Fudgy Brownies",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dolly_Pardon%27s_Fabulously_Fudgy_Brownies_-_October_2023_-_Sarah_Stierch.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain (Sarah Stierch) — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-classic-banana-bread": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Banana_bread_2.jpg/1280px-Banana_bread_2.jpg",
    "alt": "Photo of Classic Banana Bread",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Banana_bread_2.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Shisma — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-snickerdoodles": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Snickerdoodles.jpg/1280px-Snickerdoodles.jpg",
    "alt": "Photo of Snickerdoodles",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Snickerdoodles.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: EvanProdromou — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-lemon-bars": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lemon_Bar.jpg/1280px-Lemon_Bar.jpg",
    "alt": "Photo of Lemon Bars",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lemon_Bar.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Kjp001 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-maryland-crab-cakes": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Garnished_crabcake.jpg/1280px-Garnished_crabcake.jpg",
    "alt": "Photo of Maryland Crab Cakes",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Garnished_crabcake.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Stu Spivack — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-garlic-butter-shrimp": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Butter_Garlic_Shrimp_%28with_rice%29%2C_Haleiwa%2C_Hawaii.jpg/1280px-Butter_Garlic_Shrimp_%28with_rice%29%2C_Haleiwa%2C_Hawaii.jpg",
    "alt": "Photo of Garlic Butter Shrimp",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Butter_Garlic_Shrimp_(with_rice),_Haleiwa,_Hawaii.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Zheng Zhou — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-lemon-herb-salmon": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/5/56/Herb_baked_salmon.jpg",
    "alt": "Photo of Lemon Herb Salmon",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Herb_baked_salmon.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Shark2025 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-etouffee": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/World_Famous_Hotboys_-_February_2025_-_Sarah_Stierch_11.jpg/1280px-World_Famous_Hotboys_-_February_2025_-_Sarah_Stierch_11.jpg",
    "alt": "Photo of Chicken Etouffee",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:World_Famous_Hotboys_-_February_2025_-_Sarah_Stierch_11.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Missvain (Sarah Stierch) — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-tinga-tacos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/El_Pavo_Real_Lunch_Chicken_Tinga_Tacos.jpg/1280px-El_Pavo_Real_Lunch_Chicken_Tinga_Tacos.jpg",
    "alt": "Photo of Chicken Tinga Tacos",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:El_Pavo_Real_Lunch_Chicken_Tinga_Tacos.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Infrogmation of New Orleans — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-pork-tamales": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pork_tamale_-_May_2024_-_Sarah_Stierch_01.jpg/1280px-Pork_tamale_-_May_2024_-_Sarah_Stierch_01.jpg",
    "alt": "Photo of Pork Tamales",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pork_tamale_-_May_2024_-_Sarah_Stierch_01.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain (Sarah Stierch) — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-peruvian-lomo-saltado": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg",
    "alt": "Photo of Peruvian Lomo Saltado",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lomo-saltado-perudelights.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: WikiHes — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-korean-japchae": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Homemade_Japchae%2C_Dhaka_02.jpg/1280px-Homemade_Japchae%2C_Dhaka_02.jpg",
    "alt": "Photo of Korean Japchae",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Homemade_Japchae,_Dhaka_02.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ibrahim Husain Meraj — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-pork-gyoza": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pork_gyoza_-_Massachusetts.jpg/1280px-Pork_gyoza_-_Massachusetts.jpg",
    "alt": "Photo of Pork Gyoza",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pork_gyoza_-_Massachusetts.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Daderot — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-laksa": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Chicken_Curry_Laksa_-_Gold_Star_Noodle_AUD8_%282741533134%29.jpg/1280px-Chicken_Curry_Laksa_-_Gold_Star_Noodle_AUD8_%282741533134%29.jpg",
    "alt": "Photo of Chicken Laksa",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chicken_Curry_Laksa_-_Gold_Star_Noodle_AUD8_(2741533134).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Alpha from Melbourne, Australia — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-singapore-noodles": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Singapore_Fried_Noodles_-_Unithai_2025-05-07.jpg/1280px-Singapore_Fried_Noodles_-_Unithai_2025-05-07.jpg",
    "alt": "Photo of Singapore Noodles",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Singapore_Fried_Noodles_-_Unithai_2025-05-07.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-vegetable-samosas": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Vegetable_Samosas_%28filled_with_spiced_potato_and_peas%29_%28717781926%29.jpg/1280px-Vegetable_Samosas_%28filled_with_spiced_potato_and_peas%29_%28717781926%29.jpg",
    "alt": "Photo of Vegetable Samosas",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Vegetable_Samosas_(filled_with_spiced_potato_and_peas)_(717781926).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Xin Mei from Chicago, USA — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chana-chole": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chole_Masala_India.jpg/1280px-Chole_Masala_India.jpg",
    "alt": "Photo of Chana Chole",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chole_Masala_India.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Divya Kudua — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-rajma-masala": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Rajma_Masala_%2832081557778%29.jpg/1280px-Rajma_Masala_%2832081557778%29.jpg",
    "alt": "Photo of Rajma Masala",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rajma_Masala_(32081557778).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Gaurav Nemade — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-chicken-tagine": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Moroccan_food-Chicken_tagine_with_preserved_lemons_and_olives-02.jpg/1280px-Moroccan_food-Chicken_tagine_with_preserved_lemons_and_olives-02.jpg",
    "alt": "Photo of Chicken Tagine with Preserved Lemon & Olives",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Moroccan_food-Chicken_tagine_with_preserved_lemons_and_olives-02.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Foodista — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-polish-pierogi": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Polish_pierogi_in_a_dish.jpg",
    "alt": "Photo of Polish Pierogi (Pierogi Ruskie)",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Polish_pierogi_in_a_dish.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Piotrus — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-pork-schnitzel": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pork_Schnitzel_With_Chips_%26_Gravy_%40_Cafe_De_Vili%27s_Elizabeth_-_RV90.jpg/1280px-Pork_Schnitzel_With_Chips_%26_Gravy_%40_Cafe_De_Vili%27s_Elizabeth_-_RV90.jpg",
    "alt": "Photo of Pork Schnitzel",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pork_Schnitzel_With_Chips_%26_Gravy_@_Cafe_De_Vili%27s_Elizabeth_-_RV90.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: RegionVisitor90 — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-swedish-meatballs": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Swedish_meatballs_with_egg_noodles.jpg/1280px-Swedish_meatballs_with_egg_noodles.jpg",
    "alt": "Photo of Swedish Meatballs (Köttbullar)",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Swedish_meatballs_with_egg_noodles.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: RandomKatze — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-southern-collard-greens": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Soul_Food_Dinner.jpg/1280px-Soul_Food_Dinner.jpg",
    "alt": "Photo of Southern Collard Greens",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Soul_Food_Dinner.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Clancy Ratliff from St. Paul, MN, U.S. — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-classic-apple-pie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Apple_pie_24.jpg/1280px-Apple_pie_24.jpg",
    "alt": "Photo of Classic Apple Pie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Apple_pie_24.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Shisma — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-sunday-pot-roast": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/American_pot_roast%2C_plated_up.jpg/1280px-American_pot_roast%2C_plated_up.jpg",
    "alt": "Photo of Sunday Pot Roast",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:American_pot_roast,_plated_up.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Mark Miller — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-breakfast-tacos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Breakfast_taco_at_C_Casa_-_2021-09-24_-_Sarah_Stierch_01.jpg/1280px-Breakfast_taco_at_C_Casa_-_2021-09-24_-_Sarah_Stierch_01.jpg",
    "alt": "Photo of Breakfast Tacos",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Breakfast_taco_at_C_Casa_-_2021-09-24_-_Sarah_Stierch_01.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain (Sarah Stierch) — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-bread-pudding": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BPL_Bread_Pudding.jpg/1280px-BPL_Bread_Pudding.jpg",
    "alt": "Photo of Bread Pudding",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:BPL_Bread_Pudding.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Pacamah — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-cinnamon-churros": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Churros_con_chocolate_Mexico_%2832539051653%29.jpg/1280px-Churros_con_chocolate_Mexico_%2832539051653%29.jpg",
    "alt": "Photo of Cinnamon Churros",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Churros_con_chocolate_Mexico_(32539051653).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: mike from New York, NY, US — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-sicilian-cannoli": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cannoli_siciliani.jpg/1280px-Cannoli_siciliani.jpg",
    "alt": "Photo of Sicilian Cannoli",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cannoli_siciliani.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Stefano Mortellaro from Catania, Italy — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "cur-beef-bibimbap": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Beef_Bibimbap_-_SAERO_2025-11-06.jpg/1280px-Beef_Bibimbap_-_SAERO_2025-11-06.jpg",
    "alt": "Photo of Beef Bibimbap",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Beef_Bibimbap_-_SAERO_2025-11-06.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  }
};
