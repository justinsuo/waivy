import type { RecipeImage } from "@/lib/types";

/**
 * Freely-licensed, hand-verified photos for the viral social-media recipes
 * (src/data/socialRecipes.ts). Each was searched on Wikimedia Commons and
 * visually confirmed to depict the dish; only CC0 / CC BY / CC BY-SA images are
 * used and attribution is rendered on the recipe page. Recipes without a
 * confident match fall back to the app's emoji tile.
 */
export const SOCIAL_RECIPE_PHOTOS: Record<string, RecipeImage> = {
  "baked-feta-pasta": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Baked_feta_pasta.jpg/1280px-Baked_feta_pasta.jpg",
    "alt": "Photo of Baked Feta Pasta",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Baked_feta_pasta.jpg",
    "license": "CC BY 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Delicious Adventures — CC BY 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "spicy-vodka-pasta": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/PenneAllaVodka.jpg/1280px-PenneAllaVodka.jpg",
    "alt": "Photo of Spicy Vodka Pasta (Gigi Hadid)",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:PenneAllaVodka.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Joseph O'Connell — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "smashed-cucumber-salad": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pine_and_Crane_DTLA_-_smashed_cucumber_salad.jpg/1280px-Pine_and_Crane_DTLA_-_smashed_cucumber_salad.jpg",
    "alt": "Photo of Viral Smashed Cucumber Salad",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pine_and_Crane_DTLA_-_smashed_cucumber_salad.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Benoît Prieur — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "green-goddess-salad": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CabbageSalad.jpg/1280px-CabbageSalad.jpg",
    "alt": "Photo of Green Goddess Salad",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:CabbageSalad.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Off-shell — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "quesabirria-tacos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Quesabirria_at_Taqueria_La_Hacienda%2C_Sonoma%2C_California_-_Sarah_Stierch.jpg/1280px-Quesabirria_at_Taqueria_La_Hacienda%2C_Sonoma%2C_California_-_Sarah_Stierch.jpg",
    "alt": "Photo of Quesabirria Tacos",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Quesabirria_at_Taqueria_La_Hacienda,_Sonoma,_California_-_Sarah_Stierch.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "crispy-smashed-potatoes": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baked_Smashed_Potatoes.JPG/1280px-Baked_Smashed_Potatoes.JPG",
    "alt": "Photo of Crispy Smashed Potatoes",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Baked_Smashed_Potatoes.JPG",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: ParentingPatch — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "garlic-parmesan-chicken": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Garlic_Parmesan_Fried_Chicken_Meal.jpg/1280px-Garlic_Parmesan_Fried_Chicken_Meal.jpg",
    "alt": "Photo of Garlic Parmesan Chicken",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Garlic_Parmesan_Fried_Chicken_Meal.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ralff Nestor Nacor — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "smash-burger-tacos": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cheeseburger_Tacos_at_Fred%27s_Mexican_%2829370906431%29.jpg/1280px-Cheeseburger_Tacos_at_Fred%27s_Mexican_%2829370906431%29.jpg",
    "alt": "Photo of Smash Burger Tacos",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cheeseburger_Tacos_at_Fred%27s_Mexican_(29370906431).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: vagueonthehow from Tadcaster, York, England — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "korean-corn-cheese": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Corn_cheese.jpg/1280px-Corn_cheese.jpg",
    "alt": "Photo of Korean Corn Cheese",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Corn_cheese.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: anokarina — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "mango-sticky-rice": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mango_sticky_rice.jpg/1280px-Mango_sticky_rice.jpg",
    "alt": "Photo of Mango Sticky Rice",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mango_sticky_rice.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Muzirian — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "spicy-tiktok-ramen": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Buldak_Ramen_20210114_004.jpg/1280px-Buldak_Ramen_20210114_004.jpg",
    "alt": "Photo of Spicy TikTok Ramen",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Buldak_Ramen_20210114_004.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Mobius6 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "italian-grinder-sandwich": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Hoagie_Hero_Sub_Sandwich.jpg",
    "alt": "Photo of Chopped Italian Grinder Sandwich",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hoagie_Hero_Sub_Sandwich.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: BillyTFried at English Wikipedia — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "honey-garlic-salmon": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Salmon%2C_pan-seared_and_glazed%2C_with_Brussels_sprouts_and_root_vegetables_-_Massachusetts.jpg/1280px-Salmon%2C_pan-seared_and_glazed%2C_with_Brussels_sprouts_and_root_vegetables_-_Massachusetts.jpg",
    "alt": "Photo of Honey Garlic Salmon",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Salmon,_pan-seared_and_glazed,_with_Brussels_sprouts_and_root_vegetables_-_Massachusetts.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Daderot — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "whipped-cottage-cheese-toast": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wholegrain_toast_with_cottage_cheese_and_avocado.jpeg/1280px-Wholegrain_toast_with_cottage_cheese_and_avocado.jpeg",
    "alt": "Photo of High-Protein Cottage Cheese Toast",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Wholegrain_toast_with_cottage_cheese_and_avocado.jpeg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Maryjeanne.li — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "crispy-rice-salmon-bowl": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Salmon_Poke_Bowl_%28S%29_with_Spicy_mayo_sauce_-_Kitokito.jpg/1280px-Salmon_Poke_Bowl_%28S%29_with_Spicy_mayo_sauce_-_Kitokito.jpg",
    "alt": "Photo of Crispy Rice Salmon Bowl",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Salmon_Poke_Bowl_(S)_with_Spicy_mayo_sauce_-_Kitokito.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  }
};
