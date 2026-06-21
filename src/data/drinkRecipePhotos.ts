import type { RecipeImage } from "@/lib/types";

/**
 * Freely-licensed, hand-verified photos for the drink + blender recipes
 * (src/data/drinkRecipes.ts). Searched on Wikimedia Commons and visually
 * confirmed to depict the drink/dish; CC0 / CC BY / CC BY-SA only, attributed.
 */
export const DRINK_RECIPE_PHOTOS: Record<string, RecipeImage> = {
  "drink-margarita": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/1280px-MargaritaReal.jpg",
    "alt": "Photo of Classic Margarita",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:MargaritaReal.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Akke Monasso — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-mojito": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mojito%2C_Mazatl%C3%A1n%2C_30_de_noviembre_de_2022.jpg/1280px-Mojito%2C_Mazatl%C3%A1n%2C_30_de_noviembre_de_2022.jpg",
    "alt": "Photo of Mojito",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mojito,_Mazatl%C3%A1n,_30_de_noviembre_de_2022.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: El Nuevo Doge — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-old-fashioned": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Whiskey_Old_Fashioned1.jpg/1280px-Whiskey_Old_Fashioned1.jpg",
    "alt": "Photo of Old Fashioned",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Whiskey_Old_Fashioned1.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Erich Wagner (www.eventografie.de) — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-negroni": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Negroni_served_in_Vancouver_BC.jpg/1280px-Negroni_served_in_Vancouver_BC.jpg",
    "alt": "Photo of Negroni",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Negroni_served_in_Vancouver_BC.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Geoff Peters from Vancouver, BC, Canada — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-aperol-spritz": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Aperol_Spritz_-_Santa_Ynez_Kitchen_-_Sarah_Stierch.jpg/1280px-Aperol_Spritz_-_Santa_Ynez_Kitchen_-_Sarah_Stierch.jpg",
    "alt": "Photo of Aperol Spritz",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Aperol_Spritz_-_Santa_Ynez_Kitchen_-_Sarah_Stierch.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain (Sarah Stierch) — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-cosmopolitan": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cosmopolitan_-_CrystalMixer.jpg/1280px-Cosmopolitan_-_CrystalMixer.jpg",
    "alt": "Photo of Cosmopolitan",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cosmopolitan_-_CrystalMixer.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: CrystalMixer - CrystalMixer.com — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-whiskey-sour": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Whiskey_Sour_Served_Up.jpg/1280px-Whiskey_Sour_Served_Up.jpg",
    "alt": "Photo of Whiskey Sour",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Whiskey_Sour_Served_Up.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Will Shenton — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-daiquiri": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg/1280px-Classic_Daiquiri_in_Cocktail_Glass.jpg",
    "alt": "Photo of Daiquiri",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Will Shenton — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-moscow-mule": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Moscow_Mule.jpg/1280px-Moscow_Mule.jpg",
    "alt": "Photo of Moscow Mule",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Moscow_Mule.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: edseloh — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-gin-tonic": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Gin_and_tonic_cocktail_with_wedge_of_lime.jpg/1280px-Gin_and_tonic_cocktail_with_wedge_of_lime.jpg",
    "alt": "Photo of Gin & Tonic",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Gin_and_tonic_cocktail_with_wedge_of_lime.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Davidnuescheler — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-espresso-martini": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Espresso_martini_-_November_2024_-_Sarah_Stierch.jpg/1280px-Espresso_martini_-_November_2024_-_Sarah_Stierch.jpg",
    "alt": "Photo of Espresso Martini",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Espresso_martini_-_November_2024_-_Sarah_Stierch.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Missvain — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-pina-colada": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PINA_COLADA_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg/1280px-PINA_COLADA_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg",
    "alt": "Photo of Piña Colada",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:PINA_COLADA_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-bloody-mary": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Bloody_Mary_Coctail_with_celery_stalk_-_Evan_Swigart.jpg",
    "alt": "Photo of Bloody Mary",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bloody_Mary_Coctail_with_celery_stalk_-_Evan_Swigart.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Evan Swigart from Chicago, USA — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-mai-tai": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mai_Tai_%2816304400706%29.jpg/1280px-Mai_Tai_%2816304400706%29.jpg",
    "alt": "Photo of Mai Tai",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mai_Tai_(16304400706).jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Johnny Silvercloud — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-dark-stormy": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dark_%27N%27_Stormy.jpg/1280px-Dark_%27N%27_Stormy.jpg",
    "alt": "Photo of Dark & Stormy",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dark_%27N%27_Stormy.jpg",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Will Shenton — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-virgin-mojito": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Drinks_-_Virgin_Mojito%2C_Orange_Juice.jpg/1280px-Drinks_-_Virgin_Mojito%2C_Orange_Juice.jpg",
    "alt": "Photo of Virgin Mojito",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Drinks_-_Virgin_Mojito,_Orange_Juice.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Aditijuneja2023 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-shirley-temple": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Shirley_Temple_%26_Cosmopolitan_cocktails.jpg",
    "alt": "Photo of Shirley Temple",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Shirley_Temple_%26_Cosmopolitan_cocktails.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: cbgrfx123 — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-cranberry-spritzer": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lady_in_Pink_-_Fiola_-_Stierch_2018_01.jpg/1280px-Lady_in_Pink_-_Fiola_-_Stierch_2018_01.jpg",
    "alt": "Photo of Cranberry Lime Spritzer",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lady_in_Pink_-_Fiola_-_Stierch_2018_01.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-virgin-pina-colada": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PINA_COLADA_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg/1280px-PINA_COLADA_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg",
    "alt": "Photo of Virgin Piña Colada",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:PINA_COLADA_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-strawberry-banana-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Strawberry_and_banana_smoothie_1_%2814084474069%29.jpg/1280px-Strawberry_and_banana_smoothie_1_%2814084474069%29.jpg",
    "alt": "Photo of Classic Strawberry Banana Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Strawberry_and_banana_smoothie_1_(14084474069).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Katie from UNITED STATES — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-green-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/3/35/Gr%C3%BCnes_Smoothie.jpg",
    "alt": "Photo of Green Detox Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Gr%C3%BCnes_Smoothie.jpg",
    "license": "CC BY 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ralf Kabelitz — CC BY 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-mango-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/Fresh-mango-smoothie_01.jpg",
    "alt": "Photo of Mango Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Fresh-mango-smoothie_01.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Vivekpat30 — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-berry-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/3/33/Berry_smoothie_on_a_planterbox.jpg",
    "alt": "Photo of Mixed Berry Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Berry_smoothie_on_a_planterbox.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Miscellaneous contributor — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-pb-banana-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/92/Banana-smoothie.jpg",
    "alt": "Photo of Peanut Butter Banana Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Banana-smoothie.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: S.C.J.Perera — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-tropical-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mango_Pineapple_Smoothie_Bowl.jpg/1280px-Mango_Pineapple_Smoothie_Bowl.jpg",
    "alt": "Photo of Tropical Sunrise Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mango_Pineapple_Smoothie_Bowl.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Eloquent Insan — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-protein-smoothie": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Banana_Smoothie.jpg",
    "alt": "Photo of Banana Protein Smoothie",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Banana_Smoothie.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Ourlibrary — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-iced-latte": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Iced_latte_-_BROR_2025-04-26.jpg/1280px-Iced_latte_-_BROR_2025-04-26.jpg",
    "alt": "Photo of Iced Latte",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Iced_latte_-_BROR_2025-04-26.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-dalgona-coffee": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Dalgona_coffee.jpg/1280px-Dalgona_coffee.jpg",
    "alt": "Photo of Dalgona Whipped Coffee",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dalgona_coffee.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Kguirnela — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-iced-mocha": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Iced_mocha_-_Cafe_Rust_2025-03-31.jpg/1280px-Iced_mocha_-_Cafe_Rust_2025-03-31.jpg",
    "alt": "Photo of Iced Mocha",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Iced_mocha_-_Cafe_Rust_2025-03-31.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-cold-brew": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg/1280px-Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg",
    "alt": "Photo of Vanilla Cold Brew",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Missvain — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-iced-matcha-latte": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Matcha_latte_in_tall_glass.jpg/1280px-Matcha_latte_in_tall_glass.jpg",
    "alt": "Photo of Iced Matcha Latte",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Matcha_latte_in_tall_glass.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Derjochenmeyer — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-chai-latte": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chai_Latte_-_T_%40_The_Dials_2024-02-26.jpg/1280px-Chai_Latte_-_T_%40_The_Dials_2024-02-26.jpg",
    "alt": "Photo of Chai Latte",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chai_Latte_-_T_@_The_Dials_2024-02-26.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-arnold-palmer": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Arnold_Palmer_%28923219061%29.jpg/1280px-Arnold_Palmer_%28923219061%29.jpg",
    "alt": "Photo of Arnold Palmer",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Arnold_Palmer_(923219061).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: rick from San Francisco, USA — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-london-fog": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/London_fog_latte_-_Jolliffes_Coffee_Shop_2024-01-07.jpg/1280px-London_fog_latte_-_Jolliffes_Coffee_Shop_2024-01-07.jpg",
    "alt": "Photo of London Fog",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:London_fog_latte_-_Jolliffes_Coffee_Shop_2024-01-07.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Andy Li — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-lemonade": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lemonade_-_27682817724.jpg/1280px-Lemonade_-_27682817724.jpg",
    "alt": "Photo of Fresh Lemonade",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lemonade_-_27682817724.jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: HarshLight — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-watermelon-cooler": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Watermelon_Juice_1.jpg/1280px-Watermelon_Juice_1.jpg",
    "alt": "Photo of Watermelon Cooler",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Watermelon_Juice_1.jpg",
    "license": "CC BY-SA 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Gaurav Dhwaj Khadka — CC BY-SA 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "drink-orange-ginger-juice": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Drink-breakfast-orange-juice_%2823958994069%29.jpg/1280px-Drink-breakfast-orange-juice_%2823958994069%29.jpg",
    "alt": "Photo of Orange Ginger Refresher",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Drink-breakfast-orange-juice_(23958994069).jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: www.Pixel.la Free Stock Photos — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "blender-hummus": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Houmous.jpg/1280px-Houmous.jpg",
    "alt": "Photo of Blender Hummus",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Houmous.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Popo le Chien — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "blender-salsa": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Red_salsa_in_a_small_dish.jpg/1280px-Red_salsa_in_a_small_dish.jpg",
    "alt": "Photo of Blender Salsa",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Red_salsa_in_a_small_dish.jpg",
    "license": "CC0",
    "attributionRequired": false,
    "attributionText": "Photo: Ser Amantio di Nicolao — CC0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "blender-pesto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/BasilPesto.JPG/1280px-BasilPesto.JPG",
    "alt": "Photo of Blender Basil Pesto",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:BasilPesto.JPG",
    "license": "CC BY-SA 3.0",
    "attributionRequired": true,
    "attributionText": "Photo: Ɱ — CC BY-SA 3.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "blender-tomato-soup": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vegan_Creamy_Tomato_Soup_at_J._Selby%27s_Restaurant%2C_St._Paul_%2846484947895%29.jpg/1280px-Vegan_Creamy_Tomato_Soup_at_J._Selby%27s_Restaurant%2C_St._Paul_%2846484947895%29.jpg",
    "alt": "Photo of Blender Tomato Soup",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Vegan_Creamy_Tomato_Soup_at_J._Selby%27s_Restaurant,_St._Paul_(46484947895).jpg",
    "license": "CC BY 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: Tony Webster from Minneapolis, Minnesota, United States — CC BY 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "blender-banana-nice-cream": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bananas_Foster_Ice_Cream_at_Little_Giant_Ice_Cream.jpg/1280px-Bananas_Foster_Ice_Cream_at_Little_Giant_Ice_Cream.jpg",
    "alt": "Photo of Banana Nice Cream",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bananas_Foster_Ice_Cream_at_Little_Giant_Ice_Cream.jpg",
    "license": "CC BY-SA 2.0",
    "attributionRequired": true,
    "attributionText": "Photo: uıɐɾ ʞ ʇɐɯɐs — CC BY-SA 2.0 via Wikimedia Commons",
    "verifiedMatch": true
  },
  "blender-pancake-batter": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Pancake_stack_with_honey.jpg/1280px-Pancake_stack_with_honey.jpg",
    "alt": "Photo of Blender Pancake Batter",
    "sourceName": "Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pancake_stack_with_honey.jpg",
    "license": "CC BY 4.0",
    "attributionRequired": true,
    "attributionText": "Photo: Shisma — CC BY 4.0 via Wikimedia Commons",
    "verifiedMatch": true
  }
};
