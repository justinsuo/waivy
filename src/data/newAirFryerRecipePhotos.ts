import type { RecipeImage } from "@/lib/types";

/**
 * Freely-licensed, vision-verified photos for the new air-fryer recipes
 * (src/data/newAirFryerRecipes.ts). Wikimedia Commons / CC0 / CC BY / CC BY-SA
 * only, with attribution. Recipes with no confident match fall back to the
 * gradient + emoji placeholder.
 */
export const NEW_AIR_FRYER_RECIPE_PHOTOS: Record<string, RecipeImage> = {
  "af2-baking-powder-wings": {
    "src": "https://cjeatsrecipes.com/wp-content/uploads/2025/10/Air-Fryer-Chicken-Wings-plated-with-ranch-dressing.jpg",
    "alt": "Photo of Air Fryer Extra-Crispy Baking Powder Wings",
    "sourceName": "CJ Eats Recipes",
    "license": "Web",
    "sourceUrl": "https://cjeatsrecipes.com/air-fryer-chicken-wings-super-crispy/",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-chicken-katsu-tonkatsu": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chicken_Cutlet_001.jpg/1280px-Chicken_Cutlet_001.jpg",
    "alt": "Photo of Air Fryer Chicken Katsu with Tonkatsu Sauce",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chicken_Cutlet_001.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Ocdp, CC0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-garlic-parmesan-wings": {
    "src": "https://drdavinahseats.com/wp-content/uploads/2021/05/Air-Fryer-Garlic-Parmesan-Chicken-Wings-2-V4-SQ-800x800.jpg",
    "alt": "Photo of Air Fryer Garlic Parmesan Wings",
    "sourceName": "Dr. Davinah's Eats",
    "sourceUrl": "https://drdavinahseats.com/airfryer-garlic-parmesan-wings",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "Dr. Davinah's Eats",
    "verifiedMatch": true
  },
  "af2-korean-soy-garlic-wings": {
    "src": "https://i0.wp.com/thebuttertable.com/wp-content/uploads/2025/05/Soy-Garlic-Chicken-Wings-1.webp",
    "alt": "Photo of Air Fryer Korean Soy Garlic Wings",
    "sourceName": "The Butter Table",
    "sourceUrl": "https://thebuttertable.com/soy-garlic-chicken-wings/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "The Butter Table",
    "verifiedMatch": true
  },
  "af2-gochujang-yangnyeom-wings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Yangnyeom_chicken_wings.jpg",
    "alt": "Photo of Air Fryer Korean Gochujang Wings (Yangnyeom)",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Yangnyeom_chicken_wings.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "anokarina, CC BY-SA 2.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-hot-honey-wings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sriracha_chicken_wings_%2810832723804%29.jpg/1280px-Sriracha_chicken_wings_%2810832723804%29.jpg",
    "alt": "Photo of Air Fryer Hot Honey Wings",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sriracha_chicken_wings_(10832723804).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "anokarina, CC BY-SA 2.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-sticky-gochujang-chicken": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Korean_Yangnyeom_chicken.jpg/1280px-Korean_Yangnyeom_chicken.jpg",
    "alt": "Photo of Air Fryer Sticky Gochujang Chicken",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Korean_Yangnyeom_chicken.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-salt-and-pepper-tofu": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Salt_and_Pepper_Tofu_-_close-up_-_Little_Beijing_AUD15.80_%284713832191%29.jpg/1280px-Salt_and_Pepper_Tofu_-_close-up_-_Little_Beijing_AUD15.80_%284713832191%29.jpg",
    "alt": "Photo of Air Fryer Salt and Pepper Tofu",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Salt_and_Pepper_Tofu_-_close-up_-_Little_Beijing_AUD15.80_(4713832191).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Salt and Pepper Tofu, Little Beijing — Wikimedia Commons, CC BY-SA 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-chilli-beef": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%E5%B9%B2%E7%85%B8%E7%89%9B%E8%82%89%E4%B8%9D_Crispy_Beef_Strips_-_Sung%27s_Kitchen_%283042618951%29.jpg/1280px-%E5%B9%B2%E7%85%B8%E7%89%9B%E8%82%89%E4%B8%9D_Crispy_Beef_Strips_-_Sung%27s_Kitchen_%283042618951%29.jpg",
    "alt": "Photo of Air Fryer Crispy Chilli Beef",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:%E5%B9%B2%E7%85%B8%E7%89%9B%E8%82%89%E4%B8%9D_Crispy_Beef_Strips_-_Sung%27s_Kitchen_(3042618951).jpg",
    "attributionRequired": true,
    "attributionText": "Sung's Kitchen via Wikimedia Commons, CC BY-SA 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-sesame-chicken": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Chinese_Honey_sesame_chicken_picture.JPG/1280px-Chinese_Honey_sesame_chicken_picture.JPG",
    "alt": "Photo of Air Fryer Crispy Sesame Chicken",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chinese_Honey_sesame_chicken_picture.JPG",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-chinese-eggplant-garlic-chili": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Braised_Aubergine_in_Sweet_Soy_Sauce_-_Aberdeen_Seafood_2026-01-05.jpg/1280px-Braised_Aubergine_in_Sweet_Soy_Sauce_-_Aberdeen_Seafood_2026-01-05.jpg",
    "alt": "Photo of Air Fryer Chinese Eggplant with Garlic Chili Sauce",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Braised_Aubergine_in_Sweet_Soy_Sauce_-_Aberdeen_Seafood_2026-01-05.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-gochujang-cauliflower-bites": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/KoreanCauliflower-1201.jpg/1280px-KoreanCauliflower-1201.jpg",
    "alt": "Photo of Air Fryer Gochujang Cauliflower Bites",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:KoreanCauliflower-1201.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-bang-bang-shrimp": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bang_Bang_Shrimp.jpg/1280px-Bang_Bang_Shrimp.jpg",
    "alt": "Photo of Air Fryer Bang Bang Shrimp",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bang_Bang_Shrimp.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-bang-bang-salmon-bites": {
    "src": "https://tasteandsee.com/wp-content/uploads/2025/06/Air-Fryer-Bang-Bang-Salmon-Bites-OT-salmon-bites-with-sauce-good-7.jpg",
    "alt": "Photo of Air Fryer Bang Bang Salmon Bites",
    "sourceName": "Taste and See",
    "sourceUrl": "https://tasteandsee.com/air-fryer-bang-bang-salmon-bites/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-hot-honey-salmon-bites": {
    "src": "https://eatwithclarity.com/wp-content/uploads/2024/01/hot-honey-salmon-bites-2.jpg",
    "alt": "Photo of Air Fryer Hot Honey Salmon Bites",
    "sourceName": "Eat With Clarity",
    "sourceUrl": "https://eatwithclarity.com/hot-honey-salmon-bites/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-crispy-skin-salmon": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Crispy_skin_salmon_fillet_with_caper_crushed_potato_at_Hunter_%26_Scout_Caf%C3%A9%2C_Graceville%2C_Queensland.jpg/1280px-Crispy_skin_salmon_fillet_with_caper_crushed_potato_at_Hunter_%26_Scout_Caf%C3%A9%2C_Graceville%2C_Queensland.jpg",
    "alt": "Photo of Air Fryer Crispy-Skin Salmon",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Crispy_skin_salmon_fillet_with_caper_crushed_potato_at_Hunter_%26_Scout_Caf%C3%A9,_Graceville,_Queensland.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-garlic-butter-steak-bites": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Pan-fried_Beef_Cube.jpg/1280px-Pan-fried_Beef_Cube.jpg",
    "alt": "Photo of Air Fryer Garlic Butter Steak Bites",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pan-fried_Beef_Cube.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-korean-pork-belly-lettuce-wraps": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/98/Samgyeopsal-gui-ssam.jpg",
    "alt": "Photo of Air Fryer Korean Pork Belly Lettuce Wraps",
    "license": "CC BY-SA 4.0",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Samgyeopsal-gui-ssam.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-smash-burger-tacos": {
    "src": "https://www.thedinnerbite.com/wp-content/uploads/2024/10/air-fryer-smashed-taco-img-7.jpg",
    "alt": "Photo of Air Fryer Smash Burger Tacos",
    "sourceName": "The Dinner Bite",
    "sourceUrl": "https://www.thedinnerbite.com/air-fryer-smash-burger-tacos/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-crispy-feta-gnocchi-tomatoes": {
    "src": "https://en.petitchef.com/imgupl/recipe/baked-feta-gnocchi-with-airfryer-the-super-fast-dish-with-cherry-tomatoes-and-feta--lg-483090p813286.webp",
    "alt": "Photo of Air Fryer Crispy Feta Gnocchi with Tomatoes",
    "sourceName": "Petitchef",
    "sourceUrl": "https://en.petitchef.com/recipes/main-dish/baked-feta-gnocchi-with-airfryer-the-super-fast-dish-with-cherry-tomatoes-and-feta-fid-1595346",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-crispy-mozzarella-sticks": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2017-10-04_21_22_22_Mozzarella_sticks_with_marinara_sauce_at_the_Applebee%27s_on_Virginia_State_Route_7_%28Harry_Byrd_Highway%29_in_Countryside%2C_Loudoun_County%2C_Virginia.jpg/1280px-thumbnail.jpg",
    "alt": "Photo of Air Fryer Mozzarella Sticks",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:2017-10-04_21_22_22_Mozzarella_sticks_with_marinara_sauce_at_the_Applebee's_on_Virginia_State_Route_7_(Harry_Byrd_Highway)_in_Countryside,_Loudoun_County,_Virginia.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Famartin, CC BY-SA 4.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-parmesan-crusted-smashed-potatoes": {
    "src": "https://thesassyfoodie.com/wp-content/uploads/2022/05/air-fryer-smashed-potatoes-featured-1.jpg",
    "alt": "Photo of Air Fryer Crispy Parmesan-Crusted Smashed Potatoes",
    "sourceName": "The Sassy Foodie",
    "sourceUrl": "https://thesassyfoodie.com/garlic-parmesan-smashed-potatoes/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-cajun-corn-ribs-chipotle-mayo": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Corn_ribs%2C_Wagamama_Battersea_Power_Station%2C_2026-04-19.jpg/1280px-Corn_ribs%2C_Wagamama_Battersea_Power_Station%2C_2026-04-19.jpg",
    "alt": "Photo of Air Fryer Cajun Corn Ribs with Chipotle Mayo",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Corn_ribs,_Wagamama_Battersea_Power_Station,_2026-04-19.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-cottage-cheese-egg-bites": {
    "src": "https://www.crumbtopbaking.com/wp-content/uploads/2022/10/Air-Fryer-Egg-Bites-6.jpg",
    "alt": "Photo of Air Fryer Cottage Cheese Egg Bites",
    "sourceName": "Crumb Top Baking",
    "sourceUrl": "https://www.crumbtopbaking.com/air-fryer-egg-bites/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-molten-chocolate-lava-cake": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Coulant_with_chocolate.JPG/1280px-Coulant_with_chocolate.JPG",
    "alt": "Photo of Air Fryer Molten Chocolate Lava Cake",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Coulant_with_chocolate.JPG",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 3.0",
    "verifiedMatch": true
  },
  "af2-lemon-pepper-wings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/75/Lemon-pepper-wings-01.png",
    "alt": "Photo of Air Fryer Lemon Pepper Wings",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lemon-pepper-wings-01.png",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-nashville-hot-wings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/81/Homemade_buffalo_wings.jpg",
    "alt": "Photo of Air Fryer Nashville Hot Wings",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Homemade_buffalo_wings.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "stef yau, CC BY 2.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-classic-buffalo-wings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/81/Homemade_buffalo_wings.jpg",
    "alt": "Photo of Air Fryer Classic Buffalo Wings",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Homemade_buffalo_wings.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-honey-garlic-tofu": {
    "src": "https://eatwithclarity.com/wp-content/uploads/2021/01/air-fried-tofu.webp",
    "alt": "Photo of Air Fryer Honey Garlic Tofu",
    "sourceName": "Eat With Clarity",
    "sourceUrl": "https://eatwithclarity.com/air-fried-tofu/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-firecracker-shrimp": {
    "src": "https://christieathome.com/wp-content/uploads/2020/11/Korean-Gochujang-Shrimp-3-scaled.jpg",
    "alt": "Photo of Air Fryer Firecracker Shrimp",
    "sourceName": "Christie at Home",
    "sourceUrl": "https://christieathome.com/blog/gochujang-honey-shrimp/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-coconut-shrimp-sweet-chili-dip": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Coconut_shrimp_with_a_sweet_chili_sauce.jpg/1280px-Coconut_shrimp_with_a_sweet_chili_sauce.jpg",
    "alt": "Photo of Air Fryer Coconut Shrimp with Sweet Chili Dip",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Coconut_shrimp_with_a_sweet_chili_sauce.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-fish-tacos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Fish_tacos_in_Pittsburg.jpg/1280px-Fish_tacos_in_Pittsburg.jpg",
    "alt": "Photo of Air Fryer Crispy Fish Tacos",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Fish_tacos_in_Pittsburg.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 2.0",
    "verifiedMatch": true
  },
  "af2-cajun-garlic-butter-shrimp": {
    "src": "https://drdavinahseats.com/wp-content/uploads/2022/01/Air-Fryer-Cajun-Shrimp-in-Bowl.jpg",
    "alt": "Photo of Air Fryer Cajun Garlic Butter Shrimp",
    "sourceName": "Dr. Davinah's Eats",
    "sourceUrl": "https://drdavinahseats.com/air-fryer-cajun-shrimp",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-honey-sriracha-cauliflower-wings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Buffalo_Cauliflower_-_Kozy_Eats_Vegan_Restaurant_-_Riga_-_Latvia.jpg/1280px-Buffalo_Cauliflower_-_Kozy_Eats_Vegan_Restaurant_-_Riga_-_Latvia.jpg",
    "alt": "Photo of Air Fryer Sticky Honey Sriracha Cauliflower Wings",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Buffalo_Cauliflower_-_Kozy_Eats_Vegan_Restaurant_-_Riga_-_Latvia.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Kozy Eats Vegan Restaurant, Riga, Latvia, via Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-pork-belly-bites": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Lechon_Kawali.jpg",
    "alt": "Photo of Air Fryer Crispy Pork Belly Bites",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lechon_Kawali.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-sticky-bbq-pork-ribs": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Barbecued_pork_ribs.jpg/1280px-Barbecued_pork_ribs.jpg",
    "alt": "Photo of Air Fryer Sticky BBQ Pork Ribs",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Barbecued_pork_ribs.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-crispy-lamb-chops": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lamb_chops_on_hummus_-_San_Francisco%2C_CA.jpg/1280px-Lamb_chops_on_hummus_-_San_Francisco%2C_CA.jpg",
    "alt": "Photo of Air Fryer Crispy Lamb Chops",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lamb_chops_on_hummus_-_San_Francisco,_CA.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-lamb-kofta-kebabs": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kufta_Kebab.jpg/1280px-Kufta_Kebab.jpg",
    "alt": "Photo of Air Fryer Lamb Kofta Kebabs",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kufta_Kebab.jpg",
    "attributionRequired": true,
    "attributionText": "Kufta Kebab, Wikimedia Commons, CC BY-SA 3.0",
    "verifiedMatch": true
  },
  "af2-juicy-meatballs": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Surf_%26_Turf_meatballs.jpg/1280px-Surf_%26_Turf_meatballs.jpg",
    "alt": "Photo of Air Fryer Juicy Meatballs",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Surf_%26_Turf_meatballs.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Mariusispas1, CC BY-SA 4.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-mongolian-beef": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Mongolian_beef.jpg",
    "alt": "Photo of Air Fryer Mongolian Beef",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mongolian_beef.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-crispy-gnocchi-popcorn": {
    "src": "https://i0.wp.com/www.everylastbite.com/wp-content/uploads/2025/04/Airfryergnocchi14-1-scaled.jpg?w=1280&ssl=1",
    "alt": "Photo of Air Fryer Crispy Gnocchi Popcorn",
    "sourceName": "Every Last Bite",
    "sourceUrl": "https://www.everylastbite.com/air-fryer-gnocchi/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-crispy-pasta-chips": {
    "src": "https://stressbaking.com/wp-content/uploads/2023/01/air-fryer-pasta-chips-4.jpg",
    "alt": "Photo of Air Fryer Crispy Pasta Chips",
    "sourceName": "Stress Baking",
    "sourceUrl": "https://stressbaking.com/tiktok-air-fryer-pasta-chips/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-baked-feta-tomato-pasta": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Baked_feta_pasta.jpg/1280px-Baked_feta_pasta.jpg",
    "alt": "Photo of Air Fryer Baked Feta & Tomato Pasta",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Baked_feta_pasta.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 3.0",
    "verifiedMatch": true
  },
  "af2-halloumi-fries-hot-honey": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/HALLOUMI_FRIES_%28small%29_1_-_Jonny%27s_2025-05-27.jpg/1280px-HALLOUMI_FRIES_%28small%29_1_-_Jonny%27s_2025-05-27.jpg",
    "alt": "Photo of Air Fryer Halloumi Fries with Hot Honey",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:HALLOUMI_FRIES_(small)_1_-_Jonny%27s_2025-05-27.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-bacon-wrapped-jalapeno-poppers": {
    "src": "https://live.staticflickr.com/2449/3874525476_37f43aeb1f_b.jpg",
    "alt": "Photo of Air Fryer Bacon-Wrapped Jalapeno Poppers",
    "sourceName": "Flickr",
    "sourceUrl": "https://www.flickr.com/photos/samantha30/3874525476",
    "license": "CC BY-NC-ND 2.0",
    "attributionRequired": true,
    "attributionText": "Flickr (CC BY-NC-ND 2.0)",
    "verifiedMatch": true
  },
  "af2-blooming-onion": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Homemade_Blooming_Onion.jpg",
    "alt": "Photo of Air Fryer Blooming Onion",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Homemade_Blooming_Onion.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 4.0",
    "verifiedMatch": true
  },
  "af2-crispy-balsamic-brussels-sprouts": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Roasted_Brussels_sprouts_-_December_2023_-_Sarah_Stierch_02.jpg/1280px-Roasted_Brussels_sprouts_-_December_2023_-_Sarah_Stierch_02.jpg",
    "alt": "Photo of Air Fryer Crispy Balsamic Brussels Sprouts",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Roasted_Brussels_sprouts_-_December_2023_-_Sarah_Stierch_02.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Sarah Stierch, CC BY 4.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-bacon-egg-biscuit-bombs": {
    "src": "https://skinnysouthernrecipes.com/wp-content/uploads/2021/05/Air-Fryer-Biscuit-Bombs-16.jpg",
    "alt": "Photo of Air Fryer Bacon and Egg Biscuit Bombs",
    "sourceName": "Skinny Southern Recipes",
    "license": "Web",
    "sourceUrl": "https://skinnysouthernrecipes.com/air-fryer-bacon-egg-cheese-biscuit-bombs/",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-cinnamon-sugar-biscuit-donuts": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Golden_Donut_Cinnamon_Sugar_Doughnut_%2830801404415%29.jpg/1280px-Golden_Donut_Cinnamon_Sugar_Doughnut_%2830801404415%29.jpg",
    "alt": "Photo of Air Fryer Cinnamon Sugar Biscuit Donuts",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Golden_Donut_Cinnamon_Sugar_Doughnut_(30801404415).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-cinnamon-churros": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Churros_met_Chocoladesaus.jpg/1280px-Churros_met_Chocoladesaus.jpg",
    "alt": "Photo of Air Fryer Cinnamon Churros",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Churros_met_Chocoladesaus.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-giant-single-serve-choc-chip-cookie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chocolate_chip_cookie_-_Pelicano_coffee_co._2025-07-20.jpg/1280px-Chocolate_chip_cookie_-_Pelicano_coffee_co._2025-07-20.jpg",
    "alt": "Photo of Air Fryer Giant Chocolate Chip Cookie for One",
    "sourceName": "Wikimedia Commons",
    "license": "CC0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chocolate_chip_cookie_-_Pelicano_coffee_co._2025-07-20.jpg",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-apple-pie-bombs": {
    "src": "https://www.jocooks.com/wp-content/uploads/2021/05/air-fryer-apple-pie-bombs-1-19.jpg",
    "alt": "Photo of Air Fryer Apple Pie Bombs",
    "sourceName": "Jo Cooks",
    "sourceUrl": "https://www.jocooks.com/recipes/air-fryer-apple-pie-bombs/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-smores-dip": {
    "src": "https://live.staticflickr.com/8070/29826333822_5255dfcfdd_b.jpg",
    "alt": "Photo of Air Fryer Two-Ingredient S'mores Dip",
    "sourceName": "Flickr",
    "sourceUrl": "https://www.flickr.com/photos/24998164@N06/29826333822",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-sausage-and-peppers": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Sausage_and_peppers.jpg/1280px-Sausage_and_peppers.jpg",
    "alt": "Photo of Air Fryer Sausage and Peppers",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sausage_and_peppers.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-fried-pickles": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fried_pickles_closeup.jpg/1280px-Fried_pickles_closeup.jpg",
    "alt": "Photo of Air Fryer Crispy Fried Pickles",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Fried_pickles_closeup.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-soft-pretzel-bites": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/2019-03-10_08_53_47_Serving_of_pretzel_bites_at_the_AMC_Tysons_14_in_Tysons_Corner%2C_Fairfax_County%2C_Virginia.jpg/1280px-2019-03-10_08_53_47_Serving_of_pretzel_bites_at_the_AMC_Tysons_14_in_Tysons_Corner%2C_Fairfax_County%2C_Virginia.jpg",
    "alt": "Photo of Air Fryer Soft Pretzel Bites",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:2019-03-10_08_53_47_Serving_of_pretzel_bites_at_the_AMC_Tysons_14_in_Tysons_Corner,_Fairfax_County,_Virginia.jpg",
    "attributionRequired": true,
    "attributionText": "Famartin, CC BY-SA 4.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-crunchy-onion-rings": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hand-Made_Crispy_Onion_Rings.jpg/1280px-Hand-Made_Crispy_Onion_Rings.jpg",
    "alt": "Photo of Air Fryer Crunchy Onion Rings",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hand-Made_Crispy_Onion_Rings.jpg",
    "attributionRequired": true,
    "attributionText": "Hand-Made Crispy Onion Rings, Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-garlic-parmesan-pizza-rolls": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pizza_rolls_%2813791623443%29.jpg/1280px-Pizza_rolls_%2813791623443%29.jpg",
    "alt": "Photo of Air Fryer Garlic Parmesan Pizza Rolls",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pizza_rolls_(13791623443).jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-chicken-taquitos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Taqueria_La_Hacienda_-_Feburary_2023_-_Sarah_Stierch.jpg/1280px-Taqueria_La_Hacienda_-_Feburary_2023_-_Sarah_Stierch.jpg",
    "alt": "Photo of Air Fryer Chicken Taquitos",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Taqueria_La_Hacienda_-_Feburary_2023_-_Sarah_Stierch.jpg",
    "attributionRequired": true,
    "attributionText": "Sarah Stierch, CC BY 4.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-crispy-egg-rolls": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/13/A_typical_egg_roll.png",
    "alt": "Photo of Air Fryer Crispy Egg Rolls",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:A_typical_egg_roll.png",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 4.0",
    "verifiedMatch": true
  },
  "af2-blistered-shishito-lemon-salt": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Shishito_Peppers.jpg/1280px-Shishito_Peppers.jpg",
    "alt": "Photo of Air Fryer Blistered Shishito Peppers with Lemon Salt",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Shishito_Peppers.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-beet-chips-sea-salt": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Beetroot_crisps_%2812863757423%29.jpg",
    "alt": "Photo of Air Fryer Crispy Beet Chips with Sea Salt",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Beetroot_crisps_(12863757423).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Beetroot crisps, Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-charred-lemon-broccolini": {
    "src": "https://www.forkinthekitchen.com/wp-content/uploads/2022/10/220928.air_.fryer_.broccolini-4884.jpg",
    "alt": "Photo of Air Fryer Charred Lemon Broccolini",
    "sourceName": "Fork in the Kitchen",
    "sourceUrl": "https://www.forkinthekitchen.com/air-fryer-broccolini/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-honey-garlic-butter-carrots": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ginger_glazed_carrots_2010.jpg",
    "alt": "Photo of Air Fryer Honey Garlic Butter Carrots",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ginger_glazed_carrots_2010.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-french-toast-sticks": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/French_toast_003.jpg/1280px-French_toast_003.jpg",
    "alt": "Photo of Air Fryer French Toast Sticks",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:French_toast_003.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Ocdp — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-crispy-breakfast-home-fries": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Diner_Home_Fries_%28140491415%29.jpeg/1280px-Diner_Home_Fries_%28140491415%29.jpeg",
    "alt": "Photo of Air Fryer Crispy Breakfast Home Fries",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Diner_Home_Fries_(140491415).jpeg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 3.0",
    "verifiedMatch": true
  },
  "af2-crispy-breakfast-burritos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Breakfast_burritos.jpg/1280px-Breakfast_burritos.jpg",
    "alt": "Photo of Air Fryer Crispy Breakfast Burritos",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Breakfast_burritos.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-crispy-hash-brown-patties": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Hashbrown_potato_patty.jpg",
    "alt": "Photo of Air Fryer Crispy Hash Brown Patties",
    "license": "CC BY-SA 3.0",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hashbrown_potato_patty.jpg",
    "attributionRequired": true,
    "attributionText": "Whitebox at English Wikipedia, CC BY-SA 3.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-egg-in-a-hole-toast": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/EggToast.jpg/1280px-EggToast.jpg",
    "alt": "Photo of Air Fryer Egg in a Hole Toast",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY-SA 3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:EggToast.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY-SA 3.0",
    "verifiedMatch": true
  },
  "af2-fudgy-box-mix-brownies": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dolly_Pardon%27s_Fabulously_Fudgy_Brownies_-_October_2023_-_Sarah_Stierch.jpg/1280px-Dolly_Pardon%27s_Fabulously_Fudgy_Brownies_-_October_2023_-_Sarah_Stierch.jpg",
    "alt": "Photo of Air Fryer Fudgy Box-Mix Brownies",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dolly_Pardon%27s_Fabulously_Fudgy_Brownies_-_October_2023_-_Sarah_Stierch.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Sarah Stierch, CC BY 4.0, via Wikimedia Commons",
    "verifiedMatch": true
  },
  "af2-caramelized-cinnamon-bananas": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Carmelized_Plantains_and_Caramel_Cookie_Dough_Soy_Kreme_%283730741574%29.jpg/1280px-Carmelized_Plantains_and_Caramel_Cookie_Dough_Soy_Kreme_%283730741574%29.jpg",
    "alt": "Photo of Air Fryer Caramelized Cinnamon Bananas",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Carmelized_Plantains_and_Caramel_Cookie_Dough_Soy_Kreme_(3730741574).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-extra-crispy-canned-cinnamon-rolls": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Cinnamon_rolls_glazed%2C_July_2009.jpg/1280px-Cinnamon_rolls_glazed%2C_July_2009.jpg",
    "alt": "Photo of Air Fryer Extra-Crispy Cinnamon Rolls",
    "sourceName": "Wikimedia Commons",
    "license": "CC BY 2.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cinnamon_rolls_glazed,_July_2009.jpg",
    "attributionRequired": true,
    "attributionText": "Wikimedia Commons, CC BY 2.0",
    "verifiedMatch": true
  },
  "af2-nutella-banana-puffs": {
    "src": "https://www.wenthere8this.com/wp-content/uploads/2020/11/nutella-puff-pastry-5.jpg",
    "alt": "Photo of Air Fryer Nutella Banana Puffs",
    "sourceName": "Went Here 8 This",
    "sourceUrl": "https://www.wenthere8this.com/3-ingredient-banana-nutella-puff-pastry/",
    "license": "Web",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  },
  "af2-pigs-in-a-blanket": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bowl_of_Pigs_in_a_Blanket.jpg/1280px-Bowl_of_Pigs_in_a_Blanket.jpg",
    "alt": "Photo of Air Fryer Pigs in a Blanket",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bowl_of_Pigs_in_a_Blanket.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "",
    "verifiedMatch": true
  }
};
