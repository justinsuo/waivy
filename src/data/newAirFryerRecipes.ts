import type { Recipe } from "@/lib/types";

/**
 * NEW air-fryer recipes (batch 2) — viral / social-media-sourced dishes that
 * genuinely crisp up in a standard home air fryer. Each was web-researched,
 * authored against Waivy's catalog (real ingredient IDs, catalog units), strictly
 * judged for authenticity + quality, and given creator credit in its description.
 * Photos live in newAirFryerRecipePhotos.ts (freely licensed, vision-verified).
 */
export const NEW_AIR_FRYER_RECIPES: Recipe[] = [
  {
    "id": "af2-baking-powder-wings",
    "name": "Air Fryer Extra-Crispy Baking Powder Wings",
    "description": "Shatteringly crisp wings with zero flour, zero batter, and zero deep fryer — just a light dusting of baking powder that blisters the skin like fried chicken. A cheap bag of wings plus your air fryer delivers crunch that genuinely rivals takeout. Inspired by Chris Joe (@cj.eats_) on TikTok (https://cjeatsrecipes.com/air-fryer-chicken-wings-super-crispy/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 12,
        "note": "patted bone-dry with paper towels"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 4,
        "note": "aluminum-free; this is the secret to the crunch"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 1.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "buffalo-sauce",
        "quantity": 3,
        "optional": true,
        "note": "optional toss after frying"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "ranch",
        "quantity": 2,
        "optional": true,
        "note": "for dipping"
      }
    ],
    "steps": [
      "Pat the wings as dry as you possibly can with paper towels — bone-dry skin is the whole game here, so take your time.",
      "In a bowl, toss the wings with the baking powder, kosher salt, garlic powder, and pepper until every piece is evenly and lightly coated and looks a little chalky.",
      "Arrange the wings skin-side up in a single layer in the air fryer basket with space between them so air can circulate; work in two batches if your basket is small.",
      "Air fry at 400F for 12 minutes, then flip each wing and air fry 8 more minutes (about 20 minutes total) until deep golden and crackly.",
      "Check the thickest wing with an instant-read thermometer — it must reach at least 165F internal. If any are under, give them 2-3 more minutes at 400F and re-check before eating.",
      "Optional: in a clean bowl, toss the hot wings with the buffalo sauce for saucy wings, or leave them dry and crispy.",
      "Pile onto a plate, scatter with sliced scallion, and serve with ranch for dipping. Eat them hot while the skin is at peak crunch."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a big bag of whole wings and break them into drums and flats yourself — pre-cut party wings cost more per pound.",
      "One can of aluminum-free baking powder is the same cheap can you'd use for pancakes, and a little goes a long way, so it lasts dozens of batches.",
      "Skip bottled buffalo sauce and stretch a cheap hot sauce by stirring in a little melted butter for the same tangy kick for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "buffalo-sauce",
        "swap": "Toss in bbq-sauce or a honey-garlic mix for a sweeter wing",
        "savings": "Use what's already in the door — saves ~$0.45"
      },
      {
        "forIngredientId": "kosher-salt",
        "swap": "Regular table salt works — use a slightly smaller pinch since it's finer",
        "savings": "Pantry staple, no extra cost"
      },
      {
        "forIngredientId": "ranch",
        "swap": "Blue-cheese-dressing for a classic wing-bar dip",
        "savings": "Optional — skip the dip entirely to save"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 34,
      "carbs": 3,
      "fat": 30,
      "fiber": 0
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "wings",
      "high-protein",
      "gluten-free",
      "snack",
      "game-day",
      "viral"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-chicken-katsu-tonkatsu",
    "name": "Air Fryer Chicken Katsu with Tonkatsu Sauce",
    "description": "Shatteringly crispy panko-crusted chicken cutlet sliced over fluffy rice, finished with sweet-tangy tonkatsu sauce — all the crunch of the Japanese classic with zero pot of frying oil to deal with. It comes together for just a few dollars a serving and tastes like a restaurant katsu plate. Inspired by Chris Joe (@cj.eats_) on Instagram (https://cjeatsrecipes.com/air-fryer-chicken-katsu/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 2,
        "note": "pounded to an even ~1/2-inch thickness"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "for dredging"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten"
      },
      {
        "ingredientId": "panko",
        "quantity": 1,
        "note": "press on firmly for max crunch"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "spritz both sides so the panko toasts golden, not powdery"
      },
      {
        "ingredientId": "tonkatsu-sauce",
        "quantity": 4,
        "note": "for drizzling and dipping"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "cooked in the microwave"
      },
      {
        "ingredientId": "cabbage",
        "quantity": 1,
        "optional": true,
        "note": "finely shredded, the classic katsu side"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Start the rice so it's ready: add 1 cup rinsed jasmine rice and ~1.5 cups water to a deep microwave-safe bowl, cover loosely, and microwave on high until the water is absorbed and the rice is tender, about 10-15 minutes (timing varies by microwave). Let it sit covered while you make the katsu.",
      "Pound the chicken breasts between two sheets of parchment or in a zip bag to an even 1/2-inch thickness, then season both sides with the salt, pepper, and garlic powder.",
      "Set up three shallow bowls: flour in one, beaten egg in the next, panko in the last. Dredge each cutlet in flour (shake off the excess), dip fully in egg, then press firmly into the panko so it's packed on both sides.",
      "Spritz the air fryer basket with cooking spray, lay the cutlets in a single layer without overlapping, and spray the tops generously so the panko crisps instead of staying powdery.",
      "Air fry at 350F for 10 minutes. Flip the cutlets, spray the second side, and cook another 4-6 minutes until deep golden and crunchy.",
      "Check doneness: the thickest part should read 165F on an instant-read thermometer. If it's not there yet, give it 2 more minutes and check again.",
      "Rest 2 minutes, then slice each cutlet crosswise into strips. Serve over the rice with shredded cabbage alongside, drizzle with tonkatsu sauce, and finish with a sprinkle of sesame seeds."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 16,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a big bag of chicken breast and pound your own cutlets — it's way cheaper per serving than pre-cut tenders, and pounding thin makes them cook faster and more evenly.",
      "A bag of panko goes a long way and lives in the pantry forever, so this 'fancy' crunch costs pennies per plate. Shredded cabbage is one of the cheapest veggies in the store and stretches the meal.",
      "No tonkatsu sauce? Mix ketchup + a splash of soy sauce + a little Worcestershire and sugar — you'll basically recreate it from stuff you already have."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-breast",
        "swap": "boneless chicken thighs — juicier and usually cheaper",
        "savings": "~$0.20/serving"
      },
      {
        "forIngredientId": "panko",
        "swap": "regular breadcrumbs — less shattery but still crispy",
        "savings": "~$0.05/cup"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "any white rice or leftover rice you already have",
        "savings": "~$0.15/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 42,
      "carbs": 62,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🍱",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "crispy",
      "japanese",
      "dinner",
      "panko",
      "rice-bowl"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 16,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-garlic-parmesan-wings",
    "name": "Air Fryer Garlic Parmesan Wings",
    "description": "Shatter-crisp wings tossed in a buttery garlic-parmesan sauce that tastes exactly like a Wingstop order for a fraction of the price. The air fryer crisps the skin hard enough to hold all that cheesy, garlicky butter without a drop of frying oil. Inspired by Davinah Cenou Montezuma (Dr. Davinah's Eats) (https://drdavinahseats.com/airfryer-garlic-parmesan-wings).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 12
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "aluminum-free; key to crispy skin"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1.5,
        "note": "in the dry rub"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "melted, for the sauce"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "finely minced"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 5,
        "note": "finely grated"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "note": "chopped, to finish",
        "optional": true
      }
    ],
    "steps": [
      "Pat the wings very dry with paper towels (dry skin equals crispy skin). In a bowl, toss them with the baking powder, garlic powder, paprika, salt, and pepper until evenly coated.",
      "Arrange the wings in a single layer in the air fryer basket, leaving space between each piece so air can circulate. Work in two batches if your basket is small.",
      "Air fry at 400F for 24 minutes total, flipping the wings halfway at the 12-minute mark, until deeply golden and shatter-crisp. They should reach an internal temperature of at least 165F at the thickest part (away from the bone).",
      "While the wings finish, melt the butter in a microwave-safe bowl (about 30 seconds), then stir in the minced fresh garlic and let it sit in the hot butter for 1-2 minutes to mellow.",
      "Tip the hot wings into a large bowl, pour over the garlic butter, add the grated parmesan, and toss hard until every wing is glossy and coated.",
      "If the parmesan hasn't fully melted into the butter, microwave the bowl for 15-20 seconds, then toss once more.",
      "Scatter with chopped parsley and an extra pinch of parmesan, and serve hot while the skin is still crisp."
    ],
    "totalTimeMinutes": 34,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 24,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy whole chicken wings and split them into flats and drumettes yourself, or grab a value pack of party wings, way cheaper per piece than pre-sauced wings.",
      "A wedge of real parmesan grated fresh goes further and melts smoother than the pre-shredded bag, and it keeps for weeks in the fridge.",
      "No baking powder? Just skip it, bone-dry skin plus the full 24 minutes at 400F still gets you crispy wings for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use olive oil instead for a dairy-light, lower-cost garlic sauce",
        "savings": "~$0.30 per batch"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Swap in pecorino-romano for a sharper, saltier hit",
        "savings": "about the same"
      },
      {
        "forIngredientId": "garlic",
        "swap": "Use 1 extra tsp garlic-powder if you have no fresh garlic",
        "savings": "~$0.10 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 38,
      "carbs": 3,
      "fat": 42,
      "fiber": 0
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "wings",
      "high-protein",
      "snack",
      "game-day",
      "garlic-parmesan",
      "tiktok"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 24,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-korean-soy-garlic-wings",
    "name": "Air Fryer Korean Soy Garlic Wings",
    "description": "Glossy, sticky Korean-style wings with a thin crackly shell and a savory-sweet soy-garlic-honey lacquer that looks unreal on camera. No double-fry and no stove — just a cornstarch toss, the air fryer, and a quick microwave-reduced glaze brushed on at the end so they stay shatteringly crisp. Inspired by Sue at My Korean Kitchen (https://mykoreankitchen.com/air-fryer-chicken-wings/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 10,
        "note": "patted very dry"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2,
        "note": "for the crackly shell"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to lightly coat before air frying"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "glaze base"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "note": "for gloss and stickiness"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced or grated"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1,
        "note": "cuts the sweetness"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "ginger",
        "quantity": 1
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 1,
        "optional": true,
        "note": "for gentle heat"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, garnish"
      }
    ],
    "steps": [
      "Pat the wings very dry with paper towels — dry skin is the key to crispy skin. In a bowl, toss them with the cornstarch, vegetable oil, and salt until every wing is lightly and evenly coated, with no dry pockets of cornstarch.",
      "Arrange the wings in a single layer in the air fryer basket, not touching (work in two batches if needed). Air fry at 400F for 20 minutes, flipping once at the 10-minute mark so both sides crisp evenly.",
      "Check doneness: the wings should be golden with a thin crackly shell and read 165F on an instant-read thermometer at the thickest part, not touching bone. Air fry 2-4 minutes more if they are not there yet.",
      "While the wings cook, make the glaze: in a microwave-safe bowl stir together the soy sauce, honey, brown sugar, minced garlic, rice vinegar, sesame oil, ginger, and gochugaru (if using).",
      "Microwave the glaze in 30-second bursts, stirring between each, for about 1.5-2 minutes total, until it bubbles and thickens into a glossy syrup that coats the back of a spoon. Use a roomy bowl and watch it so it does not boil over.",
      "Tip the hot, crispy wings into a clean bowl, pour over the warm glaze, and toss until each wing is lacquered and shiny.",
      "Pile onto a plate, scatter with sesame seeds and sliced scallion, and eat right away while the shell is still crackly."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 24,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Split a value pack of whole wings and freeze half — buying whole and not pre-cut is the cheapest way to get a wing fix in a dorm.",
      "No fresh garlic or ginger? Pantry garlic powder and ground ginger work fine in the glaze and last forever.",
      "The cornstarch, oil, soy, and honey base is dirt cheap and pantry-stable, so the only real cost is the wings — buy them on sale and this snack is a fraction of takeout."
    ],
    "substitutions": [
      {
        "forIngredientId": "cornstarch",
        "swap": "potato-starch for an even crispier shell",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "honey",
        "swap": "maple-syrup, or extra brown sugar dissolved in a splash of water",
        "savings": "saves ~$0.10 per batch"
      },
      {
        "forIngredientId": "chicken-wings",
        "swap": "frozen-wings (thaw and pat very dry first) when fresh wings aren't on sale",
        "savings": "often ~$0.30 cheaper per wing"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 32,
      "carbs": 24,
      "fat": 23,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "air-fryer",
      "no-stove",
      "korean",
      "kfc",
      "wings",
      "soy-garlic",
      "snack",
      "high-protein",
      "game-day",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-gochujang-yangnyeom-wings",
    "name": "Air Fryer Korean Gochujang Wings (Yangnyeom)",
    "description": "These are the fire-red yangnyeom wings all over your feed: shatteringly crisp on the outside, then tossed in a glossy gochujang-honey sauce that's sweet, garlicky, and just spicy enough. A shower of sesame seeds and scallion makes them dangerously snackable and ridiculously photogenic. Inspired by Sue of My Korean Kitchen (https://mykoreankitchen.com/air-fryer-chicken-wings/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 10
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "for dusting; potato starch works too"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1
      },
      {
        "ingredientId": "gochujang",
        "quantity": 2,
        "note": "the heart of the sauce"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "grated or finely minced"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced garnish"
      }
    ],
    "steps": [
      "Pat the wings very dry with paper towels (dry skin = crispy wings), then toss them in a bowl with the cornstarch, salt, and pepper until evenly dusted with no white clumps.",
      "Lightly spray the air fryer basket with cooking spray, lay the wings in a single layer (work in batches so they don't touch), and air fry at 400F for 20 minutes total, flipping at the 12-minute mark so both sides crisp up.",
      "While they cook, stir together the gochujang, ketchup, honey, soy sauce, sesame oil, rice vinegar, grated garlic, and brown sugar in a large bowl until smooth. No cooking needed.",
      "Check the wings: they should be deep golden and crisp, and an instant-read thermometer in the thickest part (not touching bone) should read at least 165F. If they're not there yet, add 2-3 more minutes at 400F and check again.",
      "Tip the hot wings straight into the bowl of sauce and toss until every wing is glossy and fully coated; the residual heat sets the sticky glaze.",
      "Pile onto a plate and finish with sesame seeds and sliced scallion. For a fuller plate, microwave a quick bowl of rice (1 cup rice + 1.5 cups water, covered, about 12-15 min) to serve alongside. Eat immediately while crisp."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole bag of party wings and freeze in snack-size portions — per-piece they're way cheaper than pre-sauced wings at the store.",
      "Gochujang comes in a tub that lasts for months in the fridge, so one $3-4 tub stretches across dozens of batches — it's the cheapest way to make food taste restaurant-level.",
      "No rice vinegar? A splash of any vinegar you already own works fine, so don't buy a new bottle just for this."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-wings",
        "swap": "Use frozen-wings straight from the bag — air fry an extra 4-5 min and pat dry after thawing",
        "savings": "saves ~$1 per batch"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Swap in potato-starch for an even crunchier shell (classic Korean move)",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "honey",
        "swap": "Use brown-sugar or corn syrup dissolved into the sauce for that sticky gloss",
        "savings": "saves ~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 32,
      "carbs": 34,
      "fat": 22,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "air-fryer",
      "no-stove",
      "korean",
      "wings",
      "gochujang",
      "spicy",
      "snack",
      "high-protein",
      "tiktok"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-hot-honey-wings",
    "name": "Air Fryer Hot Honey Wings",
    "description": "Shatteringly crisp air-fried wings tossed in a glossy sweet-heat glaze of honey, hot sauce, melted butter, and cayenne for that addictive sticky-spicy-sweet hit in about 25 minutes. A baking-powder trick gives you crunchy skin with no deep-frying and no stovetop. Inspired by the viral hot-honey wings trend on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 10
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "use baking POWDER, not soda — this is the crispy-skin secret"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "honey",
        "quantity": 3
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 4,
        "note": "Frank's or any cayenne-style hot sauce"
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.5,
        "note": "dial up or down for heat"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish"
      }
    ],
    "steps": [
      "Pat the wings completely dry with paper towels — dry skin is what crisps up. In a bowl, toss them with the baking powder, salt, pepper, and garlic powder until evenly coated.",
      "Arrange the wings in a single layer in the air fryer basket, not touching (work in 2 batches if your basket is small). Air fry at 400°F for 20 minutes, flipping at the 10-minute mark, until deep golden and crisp.",
      "Check that the thickest wing reads at least 165°F internal on a meat thermometer; if not, give them another 2-3 minutes at 400°F.",
      "While the wings cook, microwave the butter in a small bowl for about 20 seconds until just melted. Stir in the honey, hot sauce, and cayenne until smooth and glossy — that's your hot honey, no stove needed.",
      "Tip the hot wings into a large bowl, pour over the hot honey, and toss until every wing is sticky and fully coated.",
      "Pile onto a plate, scatter with sliced scallion if using, and eat immediately while the skin is crisp and the glaze is shiny. Have napkins ready."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy whole wings and split them into drumettes and flats yourself, or grab a bag of frozen party wings — both are cheaper per pound than pre-cut fresh wings.",
      "Make your own hot honey by stirring any honey with whatever hot sauce is already in the fridge — no need to buy a $9 jar of pre-made hot honey.",
      "Cook a double batch while the air fryer is already hot; leftovers re-crisp in 4 minutes at 380°F for a cheap next-day lunch."
    ],
    "substitutions": [
      {
        "forIngredientId": "hot-sauce",
        "swap": "buffalo-sauce or sriracha for a different heat profile",
        "savings": "use what's already in your pantry, $0 extra"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant-butter or olive-oil to keep it dairy-free",
        "savings": "saves a trip if you're out of butter"
      },
      {
        "forIngredientId": "honey",
        "swap": "maple-syrup or brown sugar stirred with a splash of water",
        "savings": "maple or sugar is often cheaper than honey"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 32,
      "carbs": 28,
      "fat": 22,
      "fiber": 0
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "wings",
      "spicy",
      "hot-honey",
      "high-protein",
      "snack",
      "game-day",
      "tiktok",
      "20-minute"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-sticky-gochujang-chicken",
    "name": "Air Fryer Sticky Gochujang Chicken",
    "description": "Crispy-skinned chicken thighs tossed in a glossy, sweet-and-spicy gochujang glaze that nails that sticky Korean-fried-chicken craving without a drop of frying oil. The air fryer renders the skin shatteringly crisp, and the honey-soy-gochujang sauce goes on after so it stays glaze-y instead of scorched. Inspired by Megan (@takestwoeggs) on TikTok (https://takestwoeggs.com/air-fryer-gochujang-chicken/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "bone-in, skin-on for best crisp"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "grated or minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 1,
        "note": "for extra heat",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to season skin"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "microwave/kettle side"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "garnish",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "sliced, garnish",
        "optional": true
      }
    ],
    "steps": [
      "Pat the chicken thighs bone-dry with paper towels (dry skin = crispy skin) and season all over with the salt. Let them sit while you prep the glaze.",
      "Make the glaze: in a small bowl whisk together the gochujang, honey, soy sauce, rice vinegar, sesame oil, grated garlic, ginger paste, and gochugaru if using. Set aside.",
      "Place the thighs skin-side DOWN in the air fryer basket in a single layer (not touching) and cook at 380F for 10 minutes to render the fat.",
      "Flip the thighs skin-side up and cook another 12-14 minutes at 380F, until the skin is deep golden and crisp. Check doneness with an instant-read thermometer in the thickest part next to the bone: it MUST read at least 165F. If it's not there yet, give it another 2-3 minutes and check again.",
      "Meanwhile, cook the rice: rinse the jasmine rice, add 1.5 cups water, cover, and microwave on high ~10 minutes, then let stand covered 5 minutes and fluff. (Kettle method: pour boiling water over rice in a covered bowl and let sit until tender.)",
      "Brush or toss the hot crispy chicken in the gochujang glaze until fully coated and glossy. For a stickier finish, return to the air fryer skin-side up for 2 minutes at 380F to set the glaze (watch closely so the sugars don't burn).",
      "Serve over the rice, spoon any extra glaze on top, and scatter with sesame seeds and sliced scallion."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 26,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in, skin-on chicken thighs are one of the cheapest cuts per gram of protein and the skin is exactly what crisps up like fried chicken in the air fryer.",
      "A single tub of gochujang lasts months and powers tons of meals, so the per-serving sauce cost here is just pennies.",
      "Skip takeout Korean fried chicken (often $15+) and make this for a fraction of the price with pantry condiments you'll reuse."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "chicken-wings (use ~6 pieces; cook the same way for party-style sticky wings)",
        "savings": "wings often run cheaper per piece on sale"
      },
      {
        "forIngredientId": "honey",
        "swap": "brown-sugar or maple-syrup for the same sweet, glaze-thickening effect",
        "savings": "brown sugar is cheaper by volume"
      },
      {
        "forIngredientId": "gochugaru",
        "swap": "red-pepper-flakes or a squeeze of sriracha for the heat",
        "savings": "uses a spice you likely already own"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 34,
      "carbs": 52,
      "fat": 22,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "air-fryer",
      "no-stove",
      "korean",
      "high-protein",
      "sticky",
      "gochujang",
      "dinner",
      "dorm-friendly",
      "spicy"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 24,
    "airFryerTemperatureF": 380,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-salt-and-pepper-tofu",
    "name": "Air Fryer Salt and Pepper Tofu",
    "description": "This is the takeout classic you've been craving, made cheaper and meat-free: cornstarch-coated tofu goes shatter-crisp on the outside and stays custardy inside, then gets tossed with white pepper, five-spice, garlic, and chilies. The air fryer crisps that dry cornstarch shell hard with barely a spray of oil, so it tastes deep-fried without the mess. Inspired by Chris Joe (@cj.eats_) on Instagram (https://cjeatsrecipes.com/salt-and-pepper-tofu/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "tofu",
        "quantity": 2,
        "note": "firm or extra-firm, pressed and cubed"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "for the crispy coating"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 1,
        "note": "the signature flavor, don't skip"
      },
      {
        "ingredientId": "chinese-5-spice",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "finely minced"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4
      },
      {
        "ingredientId": "thai-chili",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for heat"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "side, cooked in microwave or kettle"
      }
    ],
    "steps": [
      "Drain and press the tofu: wrap it in paper towels or a clean dish towel, set a heavy plate or book on top, and leave 15 minutes to squeeze out water. Pat dry and cut into 1-inch cubes.",
      "Start the rice: rinse the jasmine rice, add to a microwave-safe bowl with 1.5 cups water, and microwave on high about 10 minutes until tender. Cover and set aside (pouring boiling kettle water over the rice in an insulated bowl also works).",
      "In a bowl, toss the tofu cubes with the cornstarch, salt, white pepper, and Chinese five-spice until every piece wears a dry, even, powdery shell.",
      "Arrange the tofu in a single layer in the air fryer basket, spacing the cubes apart, and spritz all over with cooking spray. Air fry at 375F for 11 minutes.",
      "Slide out the basket, flip each cube, give another light spray, and air fry at 375F for 5 more minutes until deep golden and crunchy. Tofu is plant-based, so there's no internal temp to hit — judge it by a deep-golden color and a hard, crisp shell.",
      "In the last 2 minutes, scatter the minced garlic and sliced thai chili over the tofu and return it to the basket so they sizzle and toast (watch closely so the garlic doesn't burn).",
      "Tip the hot tofu into a bowl, toss to coat with the toasted garlic and chili, then taste and add an extra pinch of salt and white pepper if you like. Top with sliced scallions and serve over the warm jasmine rice."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 16,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "A single block of tofu is one of the cheapest proteins in the store, so this whole dinner lands around two dollars a serving, rice included.",
      "Cornstarch is the only coating you need for that shatter-crisp shell, so skip pricier rice flour or panko unless you already have them.",
      "White pepper and five-spice are the flavors that make this taste like takeout, and a single jar of each lasts for dozens of meals, so they pay off fast."
    ],
    "substitutions": [
      {
        "forIngredientId": "thai-chili",
        "swap": "a pinch of red-pepper-flakes or a few slices of jalapeno",
        "savings": "Use what's already in your pantry instead of buying fresh chilies"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "potato-starch or tapioca-starch for an even crispier shell",
        "savings": "Any starch you already have works, no extra trip"
      },
      {
        "forIngredientId": "white-pepper",
        "swap": "regular black pepper if that's all you've got",
        "savings": "Saves buying a second pepper jar"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 20,
      "carbs": 48,
      "fat": 9,
      "fiber": 3
    },
    "emoji": "🧊",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "vegan",
      "tofu",
      "takeout-at-home",
      "budget",
      "high-protein",
      "dinner",
      "dorm-friendly"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 16,
    "airFryerTemperatureF": 375,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-chilli-beef",
    "name": "Air Fryer Crispy Chilli Beef",
    "description": "Thin steak strips go shatteringly crisp in the air fryer, then get tossed in a glossy sweet-tangy-spicy sauce that tastes just like your favorite Friday takeaway — for a fraction of the price and zero deep-frying. Pile it over fluffy microwave rice for a dorm dinner that beats delivery. Inspired by Nicky Corbishley of Kitchen Sanctuary (https://www.kitchensanctuary.com/air-fryer-crispy-chilli-beef/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "flank-steak",
        "quantity": 10,
        "note": "sliced into thin strips against the grain"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "for the crispy coating"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, to bind the coating"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to spray or toss the beef"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1.5
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2
      },
      {
        "ingredientId": "sweet-chili-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1,
        "note": "more or less to taste"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5
      },
      {
        "ingredientId": "rice",
        "quantity": 1,
        "note": "to serve"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, to garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "to garnish"
      }
    ],
    "steps": [
      "Microwave the rice: combine 1 cup rice with 1.5 cups water in a microwave-safe bowl, cover loosely, and cook on high about 10 minutes until tender. Let it sit covered while you make the beef.",
      "Slice the flank steak into thin strips against the grain (freezing it 20 minutes first makes this easy). In a bowl, toss the strips with the beaten egg, then add the cornstarch, salt, and pepper and toss until every piece is coated in a dry, claggy layer.",
      "Spread the coated beef in a single layer in the air fryer basket (don't crowd it) and spray or drizzle with the vegetable oil. Air fry at 400F for 9-11 minutes, shaking the basket halfway, until the strips are deep golden and crisp and reach at least 145F internal.",
      "Add the sliced onion to the basket, toss with the beef, and air fry at 400F for 4-5 more minutes until the onion softens and the beef is extra crunchy.",
      "While it cooks, stir together the sauce: soy sauce, rice vinegar, ketchup, sweet chilli sauce, sugar, sriracha, red pepper flakes, minced garlic, and ginger in a small bowl.",
      "Tip the hot crispy beef and onion into a large bowl, pour over the sauce, and toss quickly so everything turns glossy and coated — the residual heat thickens the sauce onto the beef.",
      "Spoon over the warm rice and finish with sliced scallion and sesame seeds. Serve right away while it's still crunchy."
    ],
    "totalTimeMinutes": 32,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Flank or skirt steak is the classic cut, but any thin-sliced cheap beef works — pop the steak in the freezer for 20 minutes first to slice it paper-thin without a fancy knife.",
      "The sauce is just pantry condiments: soy, vinegar, ketchup, sugar, and a squirt of sriracha. Skip the bottled 'crispy chilli beef sauce' and save a few dollars.",
      "Double the beef while the air fryer's hot and stash half in the fridge — re-crisp it 3 minutes at 400F the next day for a near-instant second dinner."
    ],
    "substitutions": [
      {
        "forIngredientId": "flank-steak",
        "swap": "skirt steak or any thin-sliced cheap steak",
        "savings": "use whatever's on sale"
      },
      {
        "forIngredientId": "sweet-chili-sauce",
        "swap": "1 tbsp honey plus extra sriracha",
        "savings": "~$0.10"
      },
      {
        "forIngredientId": "rice-vinegar",
        "swap": "apple cider vinegar or white vinegar",
        "savings": "~$0.05"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 38,
      "carbs": 62,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🌶️",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese",
    "tags": [
      "air-fryer",
      "no-stove",
      "takeaway",
      "beef",
      "spicy",
      "dinner",
      "high-protein",
      "dorm-friendly"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 15,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-sesame-chicken",
    "name": "Air Fryer Crispy Sesame Chicken",
    "description": "Bite-size chicken thigh chunks get tossed in cornstarch and air-fried until shatteringly crisp, then coated in a glossy sweet-savory sesame-soy sauce that tastes straight out of the takeout box. It is cheaper and faster than delivery, and the air fryer keeps every piece crunchy under that sticky glaze. Inspired by Nicky Corbishley (Kitchen Sanctuary) on YouTube (https://www.kitchensanctuary.com/air-fryer-sesame-chicken/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "boneless, skinless, cut into bite-size chunks"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "for tossing the chicken"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to lightly coat before air frying"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 1.5
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "toasted, for the sauce"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "microwave or kettle-cooked side"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, garnish"
      }
    ],
    "steps": [
      "Cut 2 servings of boneless chicken thigh into bite-size chunks, pat them very dry with paper towel, and season with the salt and pepper. Dry chicken crisps far better.",
      "In a bowl, toss the chunks with the cornstarch until every piece wears a thin dry coating, then drizzle on the vegetable oil and toss again so they are lightly slicked, which helps them brown.",
      "Air fry at 400F for 10-12 minutes, shaking the basket and flipping the pieces about halfway through, until deeply golden and crisp and the thickest piece reads 165F on an instant-read thermometer.",
      "While the chicken cooks, stir together the soy sauce, honey, brown sugar, rice vinegar, toasted sesame oil, ginger paste, and minced garlic in a small microwave-safe bowl until smooth.",
      "Cook the jasmine rice as a side: rinse 1 cup dry, add 1.5 cups water to a microwave-safe bowl, cover loosely, and microwave 8-10 minutes until tender, then fluff and let it sit covered (or pour boiling kettle water over rinsed rice and steam covered).",
      "Microwave the sauce 45-60 seconds until it bubbles and thickens slightly into a glossy glaze, stirring once halfway through.",
      "Tip the hot crispy chicken into the warm sauce and toss quickly to coat, then serve right away over the rice so it stays crunchy.",
      "Finish with a sprinkle of sesame seeds and sliced scallion if you have them, and dig in."
    ],
    "totalTimeMinutes": 28,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Chicken thighs are usually the cheapest cut per pound and stay juicy even if slightly overcooked, so buy a big pack and freeze portions for future air-fryer nights.",
      "Cornstarch is pennies per tablespoon and does all the crisping work here, so you skip pricey batter mixes and a pot of frying oil entirely.",
      "Build the sauce from soy sauce, honey, and brown sugar you likely already have instead of a bottled sesame sauce, and double the batch to keep in the fridge for next time."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use chicken-breast cut into chunks for a leaner version; cut the air fry to 9-10 min so it does not dry out (still to 165F)",
        "savings": "similar cost, lower fat"
      },
      {
        "forIngredientId": "honey",
        "swap": "Swap in maple-syrup, or extra brown-sugar dissolved in a splash of water, for the same glossy sweetness",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "rice-vinegar",
        "swap": "Plain vinegar or apple-cider-vinegar works fine for the tangy balance",
        "savings": "~$0.05"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 38,
      "carbs": 62,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "takeout-at-home",
      "high-protein",
      "dinner",
      "chicken",
      "sesame",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-chinese-eggplant-garlic-chili",
    "name": "Air Fryer Chinese Eggplant with Garlic Chili Sauce",
    "description": "Silky, custardy eggplant with crisp caramelized edges, drenched in a glossy garlic-chili-soy-oyster sauce that begs to be spooned over rice. It tastes like takeout but costs pocket change and dirties almost nothing. Inspired by Tiffy (@tiffy.cooks) and her air fryer Chinese eggplant recipe at https://tiffycooks.com.",
    "mealType": "dinner",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "eggplant",
        "quantity": 3,
        "note": "Chinese eggplant if you can find it; halved lengthwise"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2.5,
        "note": "for brushing and the garlic oil"
      },
      {
        "ingredientId": "garlic",
        "quantity": 6,
        "note": "finely minced"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "chili-garlic-sauce",
        "quantity": 2,
        "note": "more or less to taste"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "microwave side"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Start the rice in the microwave: combine the jasmine rice with 2.25 cups water in a deep microwave-safe bowl, cover loosely, and microwave 12-15 min until the water is absorbed and the rice is tender. Leave it covered to steam while the eggplant cooks.",
      "Halve each eggplant lengthwise (or cut into long wedges). Brush the cut sides all over with about 1 tbsp of the vegetable oil and sprinkle with a pinch of salt.",
      "Air fry the eggplant cut-side up at 380F for 12 minutes, until the flesh is soft, glossy, and collapsing. It's ready when a fork slides through with no resistance; give it 2-3 more minutes if it still feels firm.",
      "While it cooks, stir together the sauce: minced garlic, soy sauce, oyster sauce, chili-garlic sauce, sesame oil, rice vinegar, sugar, and the remaining 1.5 tbsp vegetable oil (this is your garlic oil).",
      "Open the air fryer and gently smash or score the soft flesh with a fork so it opens into ridges, then spoon the garlic-chili sauce generously over each piece, working it into the cuts.",
      "Turn the air fryer up to 400F and cook 7 more minutes, until the edges crisp and caramelize and the garlic smells toasty and golden (watch the last minute so the garlic doesn't scorch).",
      "Spoon the eggplant and all the saucy juices over the warm rice. Scatter with sliced scallion and sesame seeds and eat while it's hot."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 6,
    "cookTimeMinutes": 19,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "Eggplant is one of the cheapest vegetables that eats like a main — three of them feeds three people for a couple bucks. Buy long Chinese eggplant when it's on sale; it's less seedy and cooks faster.",
      "Don't skimp on fresh garlic — a whole head costs about the same as a single clove's worth of the jarred stuff and tastes far better.",
      "Stretch leftovers: chop cold eggplant into tomorrow's instant ramen, or fold it into a rice bowl with a fried egg for a second nearly-free meal."
    ],
    "substitutions": [
      {
        "forIngredientId": "oyster-sauce",
        "swap": "hoisin, or extra soy sauce plus a pinch of sugar to make it fully vegetarian/vegan",
        "savings": "use what you have on hand"
      },
      {
        "forIngredientId": "chili-garlic-sauce",
        "swap": "sriracha or chili oil for similar heat",
        "savings": "saves a trip to the store"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "any plain rice, a microwave rice pouch, or leftover takeout rice",
        "savings": "use leftovers for ~free"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 7,
      "carbs": 58,
      "fat": 8,
      "fiber": 8
    },
    "emoji": "🍆",
    "accentColor": "bg-orange-100",
    "cuisine": "Chinese",
    "tags": [
      "air-fryer",
      "no-stove",
      "cheap",
      "20-minute",
      "rice-bowl",
      "garlicky",
      "spicy",
      "dorm-friendly"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 19,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-gochujang-cauliflower-bites",
    "name": "Air Fryer Gochujang Cauliflower Bites",
    "description": "Golden, crispy cauliflower florets tossed in a sticky sweet-spicy gochujang glaze — these vegan Korean-style 'wings' are addictive, cheap, and ready before your show even loads. A light spray of oil gets the edges crackly and charred in the air fryer, with no deep-frying or stove required. Inspired by Anh (@veggieanh) on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "cauliflower",
        "quantity": 0.5,
        "note": "cut into bite-size florets"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to lightly coat the florets"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2,
        "note": "for a crisp coating"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "gochujang",
        "quantity": 2,
        "note": "the star of the glaze"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 1.5,
        "note": "keeps it vegan and sticky-sweet"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "grated or minced"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, garnish"
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 0.5,
        "optional": true,
        "note": "extra heat"
      }
    ],
    "steps": [
      "Cut half a head of cauliflower into bite-size florets. In a bowl, toss them with 1 tbsp vegetable oil, 2 tbsp cornstarch, 1/2 tsp salt, and 1/2 tsp garlic powder until every floret is evenly, lightly coated.",
      "Preheat the air fryer to 350F. Add the florets in a single layer with a little space between them (work in batches if your basket is small, so they crisp instead of steam).",
      "Air fry at 350F for 12-14 minutes, shaking the basket halfway through, until the florets are fork-tender inside and golden and charred at the edges.",
      "While they cook, stir together the glaze: 2 tbsp gochujang, 1 tbsp soy sauce, 1.5 tbsp maple syrup, 1 tbsp rice vinegar, 1 grated garlic clove, and 1 tsp sesame oil. Add 1/2 tsp gochugaru if you want extra heat.",
      "Tip the hot, crispy cauliflower into the bowl with the glaze and toss gently until every piece is coated and glossy.",
      "For an extra-sticky finish, return the glazed florets to the air fryer at 350F for 2-3 more minutes so the glaze caramelizes onto the edges (watch closely, as the sugars can scorch).",
      "Pile onto a plate and sprinkle with sesame seeds and sliced scallion. Eat right away while crisp."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole head of cauliflower instead of pre-cut florets — it's usually about half the price, and you only need half here, so save the rest for stir-fry or roasting.",
      "Cornstarch is the cheapest crisping trick in the kitchen; a little goes a long way and beats buying pricey batter mixes.",
      "A single tub of gochujang is a few dollars and lasts for dozens of batches, so the cost per snack drops fast the more Korean dishes you make."
    ],
    "substitutions": [
      {
        "forIngredientId": "maple-syrup",
        "swap": "Use honey or brown sugar instead (note: honey is not vegan).",
        "savings": "Brown sugar is cheaper if you already have it"
      },
      {
        "forIngredientId": "gochujang",
        "swap": "Mix sriracha with a little extra sugar for a similar sweet-heat if you don't have gochujang.",
        "savings": "Saves a trip if sriracha is already in your fridge"
      },
      {
        "forIngredientId": "rice-vinegar",
        "swap": "Plain white or apple cider vinegar works in a pinch.",
        "savings": "~$0.05 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 6,
      "carbs": 34,
      "fat": 8,
      "fiber": 5
    },
    "emoji": "🌶️",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegan",
      "korean",
      "snack",
      "spicy",
      "cauliflower",
      "veggie",
      "budget"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 14,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-bang-bang-shrimp",
    "name": "Air Fryer Bang Bang Shrimp",
    "description": "Crispy panko-crusted shrimp tossed in a creamy sweet-chili-sriracha sauce that's sweet, tangy, and just spicy enough to keep you reaching for more. It tastes like the Bonefish Grill original but costs a fraction and skips the deep fryer entirely. Inspired by Genevieve LaMonaca (@chefgenevieve) on Instagram (https://www.instagram.com/chefgenevieve/reel/DGodUlayfF_/?hl=en).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "shrimp",
        "quantity": 2,
        "note": "thawed, peeled, patted very dry"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.75
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "helps the coating stick and crisp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, for dredging"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3,
        "note": "bang bang sauce base"
      },
      {
        "ingredientId": "sweet-chili-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 0.5,
        "optional": true,
        "note": "for extra sweetness if you like it milder"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, to garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "to garnish"
      }
    ],
    "steps": [
      "Make the bang bang sauce first so it's ready: in a small bowl stir together the mayonnaise, sweet chili sauce, sriracha, and optional honey until smooth. Taste and add more sriracha for heat, then set aside.",
      "Set up a 3-bowl breading line: bowl 1 = flour + cornstarch + garlic powder + salt + pepper; bowl 2 = beaten egg; bowl 3 = panko. Pat the thawed shrimp completely dry with paper towels so the coating sticks.",
      "Bread each shrimp: dredge in the flour mix, dip in egg, then press into the panko until fully coated. Lay them in a single layer in the air fryer basket, not touching, and mist the tops generously with cooking spray.",
      "Air fry at 375F for 5 minutes. Open the basket, flip each shrimp, mist again with cooking spray, and air fry 4-5 minutes more, until the panko is golden and crunchy and the shrimp are opaque (internal temp 145F).",
      "Tip the hot shrimp into a bowl and drizzle with about half the bang bang sauce, tossing gently so the crust stays crisp. Reserve the rest for dipping.",
      "Garnish with sliced scallion and a sprinkle of sesame seeds and serve right away, while extra crispy, with the reserved sauce on the side."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a bag of frozen raw shrimp and thaw only what you need under cold water in about 10 minutes — it's far cheaper per serving than the seafood counter and the bag keeps for weeks.",
      "Mayo + sweet chili + sriracha is the whole sauce — skip bottled 'bang bang' dressings that cost triple for the same three pantry items.",
      "Stretch it into a meal: serve over a 5-minute microwave cup of rice or pile into a tortilla with shredded cabbage so two servings of shrimp feed more people."
    ],
    "substitutions": [
      {
        "forIngredientId": "shrimp",
        "swap": "Use frozen popcorn shrimp or even tofu cubes — same panko coat, same sauce",
        "savings": "Tofu cuts the protein cost by roughly half"
      },
      {
        "forIngredientId": "panko",
        "swap": "Regular breadcrumbs or crushed cornflakes work if you don't have panko",
        "savings": "Saves a special trip; breadcrumbs are often already in the pantry"
      },
      {
        "forIngredientId": "sweet-chili-sauce",
        "swap": "Mix honey + a splash of rice vinegar + extra sriracha for a DIY sweet-chili",
        "savings": "Avoids buying a whole bottle for 2 tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 26,
      "carbs": 32,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🍤",
    "accentColor": "bg-red-100",
    "cuisine": "Asian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "shrimp",
      "spicy",
      "shareable",
      "copycat",
      "snack",
      "high-protein",
      "dairy-free",
      "crispy"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 10,
    "airFryerTemperatureF": 375,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-bang-bang-salmon-bites",
    "name": "Air Fryer Bang Bang Salmon Bites",
    "description": "Tender cubes of salmon air-fried until the edges caramelize, then tossed in a glossy sweet-and-spicy bang bang sauce that tastes like takeout but is secretly packed with protein. Ready in about 15 minutes with zero stove, it's the viral dinner that actually loves you back. Inspired by Joanna Cismaru (Jo Cooks) (https://www.jocooks.com/recipes/bang-bang-salmon/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "salmon",
        "quantity": 2,
        "note": "skinless, cut into 1-inch cubes"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "light coating for crisp edges"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3,
        "note": "base of the bang bang sauce"
      },
      {
        "ingredientId": "sweet-chili-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2,
        "note": "adjust to taste"
      },
      {
        "ingredientId": "honey",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Pat the salmon cubes very dry with paper towels, then toss in a bowl with the cornstarch, garlic powder, salt, and pepper until lightly and evenly coated.",
      "Preheat the air fryer to 400F for 2-3 minutes. Mist the basket with cooking spray so the bites don't stick.",
      "Arrange the salmon in a single layer with space between each cube (work in two batches if your basket is small), then lightly mist the tops with cooking spray.",
      "Air fry at 400F for 8-10 minutes, gently shaking the basket at the 5-minute mark, until the edges caramelize and the salmon flakes easily and reaches an internal temperature of 145F.",
      "While it cooks, stir the mayonnaise, sweet chili sauce, sriracha, and honey together in a bowl until smooth and glossy.",
      "Tip the hot salmon into the sauce and toss gently to coat every cube, or drizzle the sauce on top if you want to keep the edges crisp.",
      "Garnish with sliced scallion and sesame seeds and serve right away. For a quick side, microwave a mug of jasmine rice per package directions while the salmon cooks."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a larger frozen salmon fillet and cube it yourself — it's far cheaper per serving than pre-cut 'salmon bites' and thaws fast under cold water.",
      "Skip bottled bang bang sauce: mayo + sweet chili + sriracha + a touch of honey makes the exact same thing for pennies and keeps in the fridge a week.",
      "Stretch dinner by serving the bites over microwaved jasmine rice and a handful of frozen veg — the same protein feeds two people instead of one."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Use cod or tilapia cubes (or even canned salmon patted into chunks) for a cheaper white-fish version",
        "savings": "Saves ~$1.50-2 per serving"
      },
      {
        "forIngredientId": "sweet-chili-sauce",
        "swap": "Mix honey with a splash of rice vinegar and red pepper flakes",
        "savings": "Uses pantry staples, ~$0.15 cheaper"
      },
      {
        "forIngredientId": "sriracha",
        "swap": "Any hot sauce or chili-garlic sauce works",
        "savings": "No extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 34,
      "carbs": 16,
      "fat": 24,
      "fiber": 0
    },
    "emoji": "🐟",
    "accentColor": "bg-orange-100",
    "cuisine": "Asian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "salmon",
      "seafood",
      "spicy",
      "viral",
      "takeout-style",
      "quick",
      "15-minute"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-hot-honey-salmon-bites",
    "name": "Air Fryer Hot Honey Salmon Bites",
    "description": "Tender salmon cubes with lightly crisp edges, tossed in a sticky sweet-heat hot honey glaze that hits every craving at once. It comes together in about 15 minutes for a cheap, protein-packed dinner that tastes way fancier than it is. Inspired by Molly Thompson (What Molly Made) (https://whatmollymade.com/air-fryer-salmon-bites/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "salmon",
        "quantity": 2,
        "note": "cut into 1-inch cubes"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "to coat the cubes"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "note": "base of the hot honey glaze"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 2,
        "note": "adjust for spice level"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 0.5,
        "note": "a splash to balance the sweetness"
      },
      {
        "ingredientId": "rice",
        "quantity": 1,
        "note": "microwave or instant, as a side"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Pat the salmon very dry and cut into 1-inch cubes. Toss in a bowl with the olive oil, garlic powder, paprika, salt, and pepper until evenly coated.",
      "Preheat the air fryer to 400F for 2-3 minutes. Lightly grease the basket so the bites don't stick.",
      "Arrange the salmon cubes in a single layer with space between them. Air fry at 400F for 6-8 minutes, shaking the basket halfway, until the edges are lightly crisp and the thickest cube reaches an internal temperature of 145F.",
      "While the salmon cooks, make the side: microwave a cup of instant or pre-cooked rice with a splash of water per package directions until hot and fluffy.",
      "Stir together the honey, hot sauce, red pepper flakes, and apple cider vinegar in a large bowl to make the hot honey glaze.",
      "Tip the hot salmon bites straight into the bowl and gently toss until every cube is glossy and coated.",
      "Spoon the salmon over the rice, drizzle on any extra glaze, and finish with sliced scallion and sesame seeds. Serve right away while sticky and warm."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a frozen salmon fillet and thaw it overnight in the fridge — it's usually cheaper than fresh and works perfectly for bites.",
      "Make your own hot honey by stirring any hot sauce or chili flakes into plain honey instead of buying a pricey specialty bottle.",
      "Cook a bigger batch of rice at once and stash portions in the fridge — reheated rice makes this a 10-minute weeknight dinner."
    ],
    "substitutions": [
      {
        "forIngredientId": "hot-sauce",
        "swap": "sriracha or a spoonful of chili-garlic sauce for the heat",
        "savings": "Often already in your fridge — no extra buy"
      },
      {
        "forIngredientId": "salmon",
        "swap": "cubed chicken breast (air fry to 165F internal)",
        "savings": "Saves about $2.60/serving"
      },
      {
        "forIngredientId": "honey",
        "swap": "maple syrup for the sweet base",
        "savings": "Roughly the same cost, and keeps it vegan-friendly"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 34,
      "carbs": 48,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍯",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "salmon",
      "hot-honey",
      "sweet-and-spicy",
      "quick",
      "dinner",
      "dorm-friendly"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-skin-salmon",
    "name": "Air Fryer Crispy-Skin Salmon",
    "description": "A single salmon fillet with shatteringly crispy skin and a silky, just-cooked center — the restaurant move you can pull off in a dorm with one piece of fish and almost zero cleanup. Dry heat crackles the skin while the inside stays buttery, and a squeeze of lemon at the end keeps it bright. Inspired by the popular crispy-skin air-fryer salmon trend.",
    "mealType": "dinner",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "salmon",
        "quantity": 1,
        "note": "skin-on fillet, patted very dry"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "rubbed over skin and flesh"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 1,
        "note": "season generously, especially the skin"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "cut into wedges to squeeze at the end"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "optional": true,
        "note": "optional microwave side"
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Pat the salmon completely dry with a paper towel — dry skin is the whole secret to crispiness. Rub the olive oil all over, then season both sides with the kosher salt, pepper, and garlic powder, pressing extra salt firmly into the skin.",
      "Preheat your air fryer to 400F for 3 minutes so the basket is hot when the fish goes in — this jump-starts the crisp.",
      "Place the salmon SKIN-SIDE DOWN in the basket (skin against the hottest airflow is what crisps it) and air fry at 400F for 7 minutes.",
      "Without flipping, check the skin: it should be crackly and release easily. If it needs more crunch, give it 1-3 extra minutes skin-side down, watching closely.",
      "Check doneness at the thickest part — pull it at an internal temp of 125-130F for silky medium, or 145F if you like it fully cooked. The flesh should flake easily and look opaque.",
      "Let it rest 2 minutes, squeeze a lemon wedge over the top, and scatter the fresh dill if using.",
      "For a side, microwave 1 cup cooked jasmine rice (or cook per package in a microwave-safe bowl with water) and serve the salmon right on top."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy salmon frozen in a bag — it's far cheaper than the fresh counter and thaws overnight in the fridge or in 15 min under cold water.",
      "Watch for 'manager's special' markdowns on fresh fish near closing time and freeze it the same day.",
      "Skip the fresh dill and use a pinch of dried dill or just lemon — the crispy skin is doing the heavy lifting flavor-wise."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Use tilapia or cod fillet for a cheaper white fish (skin won't crisp the same, but it still air fries beautifully)",
        "savings": "~$1.50-2.00 per serving"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Avocado oil or a spritz of cooking spray",
        "savings": "a few cents"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Any plain rice, couscous, or a microwaved sweet potato",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 34,
      "carbs": 0,
      "fat": 24,
      "fiber": 0
    },
    "emoji": "🐟",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "seafood",
      "quick",
      "gluten-free",
      "dairy-free",
      "one-piece",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 10,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-garlic-butter-steak-bites",
    "name": "Air Fryer Garlic Butter Steak Bites",
    "description": "Bite-sized ribeye cubes air-fried to a juicy medium-rare, then tossed in melty garlic-rosemary butter that pools at the bottom of the bowl. It tastes like a $30 steakhouse plate but costs a fraction and comes together faster than delivery. Inspired by Kita Roberts (Girl Carnivore) (https://girlcarnivore.com/air-fryer-garlic-butter-steak-bites/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "ribeye",
        "quantity": 2
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "butter",
        "quantity": 3
      },
      {
        "ingredientId": "garlic",
        "quantity": 4
      },
      {
        "ingredientId": "rosemary-fresh",
        "quantity": 1
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true
      }
    ],
    "steps": [
      "Pat the ribeye very dry with paper towels, then cut into 1-inch cubes. Drying is the secret: wet steak steams instead of browning. Toss the cubes with the olive oil, salt, pepper, and garlic powder in a bowl.",
      "Preheat the air fryer to 400F for 2-3 minutes. While it heats, mince the garlic and finely chop the rosemary so your butter is ready to go.",
      "Add the steak cubes to the basket in a single layer with space between them (work in two batches if your basket is small). Crowding traps steam and you lose the crust.",
      "Air fry at 400F for 5-7 minutes, shaking the basket once at the halfway mark. Pull at 5 minutes for medium-rare (internal temp 130F), or 7 minutes for medium (140F); use an instant-read thermometer for accuracy and let beef reach at least 130F.",
      "While the steak cooks, microwave the butter with the minced garlic and rosemary in a microwave-safe bowl in 20-second bursts (about 40-60 seconds total) until melted and fragrant. Watch closely so it does not bubble over.",
      "Tip the hot steak bites straight into the garlic butter and toss until every cube is glossy and coated. The residual heat blooms the garlic.",
      "Rest 2 minutes so the juices settle, then shower with chopped fresh parsley and a pinch of flaky salt. Serve with toothpicks, over rice, or alongside fries."
    ],
    "totalTimeMinutes": 17,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Ribeye is the splurge here; watch for 'manager's special' markdowns on meat near closing time, or split a larger steak with a roommate and freeze half.",
      "Sirloin or flank steak works just as well for the bites and costs a fraction of ribeye; the garlic butter does the heavy lifting on flavor either way.",
      "Stretch it into a full meal by serving over a cup of microwaved rice (about $0.15); the buttery juices soak in and turn into the best part of the plate."
    ],
    "substitutions": [
      {
        "forIngredientId": "ribeye",
        "swap": "Use sirloin-steak or flank-steak; still tender as bites and a big price cut",
        "savings": "Saves about $2-3 per serving"
      },
      {
        "forIngredientId": "rosemary-fresh",
        "swap": "Use 1/2 tsp dried-rosemary or dried-thyme stirred into the butter",
        "savings": "Saves ~$0.20 and lasts months in the pantry"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant-butter or olive-oil makes it dairy-free",
        "savings": "About the same cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 38,
      "carbs": 2,
      "fat": 36,
      "fiber": 0
    },
    "emoji": "🥩",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "steak",
      "high-protein",
      "date-night",
      "gluten-free",
      "low-carb"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-korean-pork-belly-lettuce-wraps",
    "name": "Air Fryer Korean Pork Belly Lettuce Wraps",
    "description": "Crispy-edged pork belly tossed in just a few pantry seasonings, then piled into cool lettuce cups with warm rice, kimchi, and a swipe of gochujang. The cheap cut renders hands-off in the air fryer, and the leftovers reinvent into banh mi or sliders. Inspired by Lis Lam of The Subversive Table (https://thesubversivetable.com/easy-air-fryer-pork-belly/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "pork-belly",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "rice",
        "quantity": 1
      },
      {
        "ingredientId": "lettuce",
        "quantity": 1
      },
      {
        "ingredientId": "gochujang",
        "quantity": 1
      },
      {
        "ingredientId": "kimchi",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Microwave the rice: combine 1 cup rice with 2 cups water in a microwave-safe bowl, cover loosely, and cook on high ~12-15 min until tender. Let it sit covered while the pork cooks.",
      "Slice the pork belly into 1/4-inch strips. In a bowl, toss the strips with the soy sauce, gochugaru, sesame oil, minced garlic, and brown sugar until evenly coated.",
      "Lay the pork strips in a single layer in the air fryer basket (work in batches if crowded so the fat can crisp). Air fry at 400F for about 15-18 minutes total.",
      "Shake or flip the strips every 5-6 minutes so the fat renders and the edges caramelize evenly. The pork must reach at least 145F internally for safety; for proper crisp pork belly keep going until the fat is rendered and the edges are deeply browned, about 15-18 minutes total. If they still look pale or chewy, give them another 3-5 minutes.",
      "While the pork rests 2-3 minutes, rinse and separate the lettuce leaves into cups and fluff the rice.",
      "Build each wrap: a spoonful of rice in a lettuce cup, a few crispy pork strips, a dab of gochujang, and a little kimchi.",
      "Top with sliced scallion and a sprinkle of sesame seeds, then fold and eat. Save any extra pork for banh mi or sliders the next day."
    ],
    "totalTimeMinutes": 33,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 18,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Pork belly is one of the cheapest cuts at the meat counter or Asian grocery -- buy a slab and slice it yourself instead of paying extra for pre-sliced.",
      "Make a double batch while the air fryer is hot; the leftovers turn into banh mi, sliders, or fried rice for almost no extra effort.",
      "Skip store-bought lettuce cups -- a single head of green leaf or romaine gives you way more wraps per dollar."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-belly",
        "swap": "Use pork shoulder or thick-cut bacon for a leaner, even cheaper strip.",
        "savings": "~$1.50/serving"
      },
      {
        "forIngredientId": "gochugaru",
        "swap": "Swap in red-pepper-flakes plus a pinch of smoked paprika if you don't have Korean chili flakes.",
        "savings": "~$0.15"
      },
      {
        "forIngredientId": "lettuce",
        "swap": "Use romaine hearts or even cabbage leaves as the wrap.",
        "savings": "~$1.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 28,
      "carbs": 42,
      "fat": 38,
      "fiber": 3
    },
    "emoji": "🥬",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "air-fryer",
      "no-stove",
      "korean",
      "pork",
      "lettuce-wraps",
      "high-protein",
      "dorm-friendly",
      "meal-prep"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 17,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-smash-burger-tacos",
    "name": "Air Fryer Smash Burger Tacos",
    "description": "Seasoned beef smashed straight onto a tortilla so it fuses into a crispy, lacy crust, then folded over melty American cheese with a tangy Big-Mac-style sauce, pickles, and onion. Messy, cheap, and unbelievably crave-able straight from the basket. Inspired by the viral air-fryer smash-burger-taco trend.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 2
      },
      {
        "ingredientId": "tortilla",
        "quantity": 4
      },
      {
        "ingredientId": "american-singles",
        "quantity": 4
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 2
      },
      {
        "ingredientId": "ketchup",
        "quantity": 1
      },
      {
        "ingredientId": "mustard",
        "quantity": 1
      },
      {
        "ingredientId": "pickles",
        "quantity": 0.25,
        "note": "diced; half stirred into the sauce, half for topping"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.25,
        "note": "finely diced"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "optional": true,
        "note": "shredded, for topping"
      }
    ],
    "steps": [
      "Make the sauce: stir the mayonnaise, ketchup, mustard, and about half the diced pickles together in a small bowl. Chill in the fridge so it stays cold and tangy.",
      "Mix the ground beef with the salt, pepper, garlic powder, and onion powder. Divide into 4 loose balls, one per tortilla.",
      "Lay a tortilla flat and press a beef ball onto it, smashing it out to the very edges in a thin, even layer so the meat grips the whole surface. Repeat for all 4. Air fry in batches that fit your basket in a single layer.",
      "Air fry beef-side up at 400F for 8 minutes, until the patty is deeply browned and the tortilla edges are crisp. No flip needed; rotate the tortillas halfway if your air fryer browns unevenly. Beef should reach an internal temperature of 160F (use a thermometer to confirm).",
      "Lay an American cheese slice on each hot patty and air fry 1 more minute at 400F, just until melted.",
      "Pull them out and immediately fold each tortilla in half over the cheese while still pliable, pressing gently so it holds the taco shape.",
      "Open each taco, spread on the cold special sauce, then load with the diced onion, remaining pickles, and shredded lettuce. Serve right away while the crust is shattering-crisp."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy ground beef in a family pack and freeze it in 1-serving portions; the per-taco cost drops a lot versus small trays.",
      "American singles are the cheapest melt out there and give you that classic diner cheese pull, no fancy cheese needed.",
      "The special sauce is just mayo, ketchup, mustard, and pickles, so skip buying bottled burger sauce."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey for a leaner patty (cook to 165F internal).",
        "savings": "~$0.25/serving"
      },
      {
        "forIngredientId": "american-singles",
        "swap": "Use shredded cheese or a sliced cheddar block if that's what's in the fridge.",
        "savings": "about the same"
      },
      {
        "forIngredientId": "pickles",
        "swap": "No pickles? A splash of pickle juice or extra diced onion in the sauce still gives the tang.",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 30,
      "carbs": 34,
      "fat": 31,
      "fiber": 3
    },
    "emoji": "🌮",
    "accentColor": "bg-red-100",
    "cuisine": "American-Mexican",
    "tags": [
      "air-fryer",
      "no-stove",
      "beef",
      "tacos",
      "smash-burger",
      "viral",
      "dinner",
      "high-protein",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-feta-gnocchi-tomatoes",
    "name": "Air Fryer Crispy Feta Gnocchi with Tomatoes",
    "description": "Shelf-stable gnocchi roasts up crispy-outside and pillowy-inside while a block of feta turns melty and cherry tomatoes burst into a jammy, creamy sauce — all in one basket, no boiling pot required. Toss it together at the end and you've got a cozy, near-zero-effort dinner that tastes far fancier than it was. Inspired by the viral baked-feta air-fryer gnocchi trend that took off across home-cook communities.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "gnocchi",
        "quantity": 2,
        "note": "straight from the package, do not boil"
      },
      {
        "ingredientId": "feta",
        "quantity": 4,
        "note": "a 4 oz block is ideal; cubes also work"
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "halved (or sub a cup of whole cherry tomatoes)"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced or thinly sliced"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "optional": true,
        "note": "torn, for garnish"
      }
    ],
    "steps": [
      "In a bowl, toss the gnocchi with 1 tbsp olive oil, the garlic, italian seasoning, salt, pepper, and red pepper flakes until every piece is lightly coated.",
      "Line the air fryer basket with a small piece of foil or set a ramekin in the center (so the soft feta won't ooze through the holes). Spread the gnocchi in a single layer, then nestle the halved tomatoes cut-side up and the feta block onto the foil/ramekin. Drizzle the feta and tomatoes with the remaining 1 tbsp olive oil.",
      "Air fry at 375F for 8 minutes.",
      "Shake or stir the gnocchi (leave the feta in place) and air fry at 375F for another 7-10 minutes, until the gnocchi are golden and crisp, the tomatoes have collapsed, and the feta is soft, glossy, and lightly browned on top (15-18 minutes total; the feta should be hot all the way through, roughly 145F+).",
      "Scoop everything into a bowl and stir hard for about 30 seconds — the melty feta and burst tomatoes will smash into a creamy sauce that coats the gnocchi.",
      "Taste, add a pinch more salt if needed, top with torn fresh basil, and serve hot."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 18,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a whole block of feta and shelf-stable vacuum-packed gnocchi — both keep for ages in the pantry/fridge, so stock up when they're on sale.",
      "No fresh tomatoes? A handful of grape or cherry tomatoes (or canned cherry tomatoes, drained) bursts into sauce just as well.",
      "Stretch it to feed more by stirring in a handful of microwaved frozen spinach or a drained can of chickpeas for extra bulk and protein."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "mozzarella for a milder, meltier sauce",
        "savings": "Mozzarella runs about half the cost per serving"
      },
      {
        "forIngredientId": "tomato",
        "swap": "drained canned crushed or cherry tomatoes when fresh are pricey",
        "savings": "Often cheaper with zero waste"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable oil",
        "savings": "Saves about $0.20 per tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 14,
      "carbs": 58,
      "fat": 17,
      "fiber": 4
    },
    "emoji": "🧀",
    "accentColor": "bg-red-100",
    "cuisine": "Italian",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "one-basket",
      "no-boil",
      "feta",
      "gnocchi",
      "viral",
      "dorm-friendly",
      "easy"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 18,
    "airFryerTemperatureF": 375,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-mozzarella-sticks",
    "name": "Air Fryer Mozzarella Sticks",
    "description": "Golden, panko-crusted mozzarella sticks with a glorious cheese pull and a side of warm marinara — all the fried-snack joy with none of the deep fryer or the guilt. A cheap pack of string cheese turns into a high-protein dorm snack that crisps up in minutes. Inspired by Michael Kory (@michaelkory) on TikTok (https://www.tiktok.com/@michaelkory/video/7171860320460279082).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "mozzarella",
        "quantity": 6,
        "note": "use 6 low-moisture string cheese sticks (~6 oz), each cut in half into 12 logs"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "for the first dredge"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, for the egg wash"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.75,
        "note": "double-coat for max crunch"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "note": "mixed into the panko"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "to coat before air frying"
      },
      {
        "ingredientId": "marinara",
        "quantity": 0.5,
        "note": "warm, for dipping"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Cut 6 string cheese sticks in half so you have 12 short logs. Set up three bowls: flour in the first, the beaten egg in the second, and panko mixed with parmesan, italian seasoning, garlic powder, and salt in the third.",
      "Roll each cheese log in flour, then egg, then the panko mix. For an extra-crispy double coat, dip back into the egg and panko a second time, pressing the crumbs on firmly so the cheese is fully sealed with no gaps.",
      "Lay the breaded logs on a plate and FREEZE for at least 30-60 minutes (or until solid). This is the key step — frozen cheese holds its shape while the panko crisps, so it won't leak in the air fryer.",
      "Lightly spritz the air fryer basket, arrange the frozen sticks in a single layer with space between each, and spray the tops with cooking spray until the crumbs look evenly damp (this is what browns them).",
      "Air fry at 390F for 6-7 minutes, gently flipping halfway, until the coating is deep golden and crisp and the cheese is melted and gooey inside. Watch the last 1-2 minutes and pull them the moment any cheese starts to peek out so they don't burst.",
      "Let them rest 1-2 minutes (the cheese is molten hot), then sprinkle with chopped parsley and serve with warm marinara for dipping and that perfect cheese pull."
    ],
    "totalTimeMinutes": 52,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "A cheap pack of low-moisture string cheese is the whole secret — it's cheaper per gram of protein than most snack bars and already portioned for you.",
      "Don't skip the freeze: 30-60 minutes in the freezer means zero cheese blowouts, so you waste nothing. Bread a double batch and keep extras frozen for instant snacks straight from the freezer.",
      "Make panko stretch by blitzing a couple of stale bread slices or crushing leftover crackers to bulk up the crumb coating for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "panko",
        "swap": "Use plain breadcrumbs or crushed cornflakes — still crispy and usually already in the pantry.",
        "savings": "saves ~$0.05/serving"
      },
      {
        "forIngredientId": "marinara",
        "swap": "Dip in jarred pizza sauce or a quick mix of ketchup, garlic powder, and italian seasoning.",
        "savings": "saves ~$0.40/serving"
      },
      {
        "forIngredientId": "cooking-spray",
        "swap": "Brush or mist lightly with olive oil instead.",
        "savings": "about even, but oil adds richer flavor"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 24,
      "carbs": 28,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🧀",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "cheese-pull",
      "snack",
      "game-day",
      "vegetarian",
      "budget",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 390,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-parmesan-crusted-smashed-potatoes",
    "name": "Air Fryer Crispy Parmesan-Crusted Smashed Potatoes",
    "description": "Tender baby potatoes smashed flat and pressed cut-side down into grated parmesan so the cheese fries into a shattering golden frico crust, with fluffy middles and crackly edges. It tastes like the best part of a Sunday roast for pennies and makes the whole dorm smell incredible. Inspired by Nathan Anthony (@boredoflunch) on TikTok (https://www.tiktok.com/@boredoflunch/video/7303105177672863009).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 6,
        "note": "small/baby potatoes, halved"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "melted; or use olive oil"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 8,
        "note": "finely grated; ~4 tbsp pressed under the potatoes, ~4 tbsp on top"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "Microwave the halved potatoes in a bowl with a splash of water, covered, for 5-6 minutes until a fork slides in easily and they read about 205F inside. Drain and let them steam-dry for 1-2 minutes so the surface is dry (this is key for crisping).",
      "Gently press each potato half with the bottom of a cup or a fork to smash it to about 1/2 inch thick, keeping each one in one piece. Lightly score the cut side so the cheese grabs on.",
      "In a small bowl, stir the melted butter with the paprika, garlic powder, and salt. Brush this all over the smashed potatoes, especially the cut sides.",
      "Scatter about 4 tbsp of the parmesan into an even layer on the bottom of the air fryer basket (use a small piece of parchment with holes poked through, or a perforated air fryer liner, so loose cheese and butter don't drip onto the element). Press each potato cut-side DOWN firmly into the cheese.",
      "Air fry at 400F for 14 minutes without flipping, so the parmesan fuses into a crust on the bottom of each potato.",
      "Carefully flip each potato so the crispy parmesan crust faces up. Sprinkle the remaining ~4 tbsp parmesan and a crack of pepper over the tops, then air fry at 400F for 8-10 more minutes until the tops are deep golden and the edges are crackly-crisp.",
      "Let them rest 2 minutes so the crust sets, then lift out with a thin spatula. Shower with chopped parsley and serve hot."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 24,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a small bag of baby or new potatoes when they're on sale; they're often cheaper per pound than big russets and need zero peeling.",
      "A wedge of real parmesan you grate yourself crisps far better than pre-shredded and goes a long way, but the cheapest green-can grated parm still fries into a great crust.",
      "Use a perforated air fryer liner or poke holes in a square of parchment so the loose cheese crisps without dripping through and burning on the element."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "olive oil or cooking spray",
        "savings": "saves a few cents and goes dairy-free if paired with a vegan parm"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "pecorino-romano for a sharper crust, or shredded mozzarella for a stretchier one",
        "savings": "pecorino is similar cost; mozzarella is cheaper per crust"
      },
      {
        "forIngredientId": "paprika",
        "swap": "smoked paprika or italian seasoning",
        "savings": "no extra cost, just uses what's in your cabinet"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 13,
      "carbs": 38,
      "fat": 17,
      "fiber": 4
    },
    "emoji": "🥔",
    "accentColor": "bg-amber-100",
    "cuisine": "British / American",
    "tags": [
      "air-fryer",
      "no-stove",
      "potatoes",
      "parmesan",
      "snack",
      "vegetarian",
      "dorm-friendly",
      "viral",
      "side-dish",
      "crispy"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 24,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-cajun-corn-ribs-chipotle-mayo",
    "name": "Air Fryer Cajun Corn Ribs with Chipotle Mayo",
    "description": "Quartered corn cobs that dramatically curl up like little ribs in the air fryer, charred and blistered, then loaded with creamy chipotle mayo, salty cotija and fresh cilantro. It's a viral finger food that's pure fun to eat and impossibly cheap to make. Inspired by Farrah J (@spicednice) on TikTok (https://www.cleaneatingkitchen.com/air-fryer-corn-ribs/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "corn",
        "quantity": 2,
        "note": "whole ears, husked"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "for tossing the ribs"
      },
      {
        "ingredientId": "cajun-seasoning",
        "quantity": 2,
        "note": "the star seasoning"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3,
        "note": "base for the chipotle mayo"
      },
      {
        "ingredientId": "chipotle-in-adobo",
        "quantity": 0.2,
        "note": "about 1 tsp finely chopped chile plus a little adobo sauce from the can"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "half for the mayo, half to squeeze over"
      },
      {
        "ingredientId": "cotija",
        "quantity": 1,
        "note": "crumbled on top",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "chopped, to garnish",
        "optional": true
      }
    ],
    "steps": [
      "Husk 2 ears of corn and microwave them on a plate for 2-3 minutes to soften the cores (this makes them far safer and easier to cut). Let cool 1 minute.",
      "Stand each softened ear upright and carefully slice it in half lengthwise, then halve each piece again to make 4 long 'ribs' per ear — 8 ribs total.",
      "In a bowl, toss the corn ribs with 1 tbsp vegetable oil, 2 tsp Cajun seasoning, 1/2 tsp garlic powder, 1/2 tsp paprika and 1/2 tsp salt until evenly coated.",
      "Arrange the ribs cut-side up in a single layer in the air fryer basket (work in batches if needed so they aren't crowded). Air fry at 400F for 10-14 minutes, flipping at the halfway mark, until they char, blister and visibly curl up like ribs.",
      "While they cook, stir together 3 tbsp mayonnaise, about 1 tsp finely chopped chipotle in adobo (plus a little sauce from the can) and a squeeze of lime juice to make the chipotle mayo.",
      "Pile the curled corn ribs on a plate, drizzle generously with the chipotle mayo, then crumble cotija over the top.",
      "Finish with chopped cilantro and an extra squeeze of lime. Serve hot — these are best eaten with your hands right away."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 14,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Corn is one of the cheapest snacks going — at around $0.70 an ear, two ears feed two people for pocket change. Buy it on sale in summer and it's even cheaper.",
      "Skip the cotija and use any crumbly cheese you already have, or a little grated parmesan, to save without losing the salty hit.",
      "One small can of chipotle in adobo makes mayo for many batches — freeze the leftover chiles in a small bag or ice cube tray so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "cajun-seasoning",
        "swap": "creole seasoning, or a mix of paprika + cayenne + garlic powder + oregano you already own",
        "savings": "use what's in the cabinet, $0"
      },
      {
        "forIngredientId": "cotija",
        "swap": "crumbled feta or grated parmesan",
        "savings": "saves about $0.30"
      },
      {
        "forIngredientId": "chipotle-in-adobo",
        "swap": "stir 1/2 tsp smoked paprika + a few drops of hot sauce into the mayo",
        "savings": "saves about $0.50 if you skip buying the can"
      }
    ],
    "estimatedNutrition": {
      "calories": 280,
      "protein": 6,
      "carbs": 28,
      "fat": 18,
      "fiber": 4
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mexican-inspired",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "viral",
      "finger-food",
      "vegetarian",
      "gluten-free",
      "corn",
      "spicy",
      "party"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-cottage-cheese-egg-bites",
    "name": "Air Fryer Cottage Cheese Egg Bites",
    "description": "Fluffy, custardy egg bites blended with sneaky-creamy cottage cheese for a protein punch that keeps you full all morning. Blend, pour into silicone molds, and air fry low and slow so they stay soft instead of rubbery — a whole week of breakfasts for way less than the $5 cafe version. Inspired by a viral high-protein Starbucks-copycat trend on TikTok.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "cottage-cheese",
        "quantity": 2,
        "note": "about 1 cup total"
      },
      {
        "ingredientId": "cheese",
        "quantity": 1,
        "note": "shredded, for melty bites"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "to grease the molds"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "chopped, stirred in or sprinkled on top"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Crack the 8 eggs into a blender (or a tall cup for an immersion blender), then add 1 cup cottage cheese, 1/2 tsp salt, 1/4 tsp pepper, and 1/2 tsp garlic powder. Blend 20-30 seconds until completely smooth and frothy — this is what makes the bites custardy instead of eggy.",
      "Lightly mist a silicone muffin mold with cooking spray so the bites pop right out. Stir the shredded cheese and chopped scallion into the batter, or drop a pinch of each into every cup.",
      "Pour the batter into the molds, filling each cup about 3/4 full to leave room to puff. Set the filled mold into the air fryer basket.",
      "Air fry at 300F for 12-15 minutes. The low heat is the secret — it keeps the eggs soft and prevents that rubbery diner texture.",
      "Around the 8-minute mark, peek and rotate the mold if your air fryer cooks unevenly. No flipping needed since they're in cups.",
      "They're done when the bites are puffed and set in the center with no liquid jiggle and an instant-read thermometer reads 160F in the middle. If they need more time, add 2-3 minutes and recheck.",
      "Let them cool 3-4 minutes (they'll deflate slightly, which is normal), then twist the silicone to release. Garnish with chopped chives and enjoy warm.",
      "To meal-prep: cool fully, store in the fridge up to 4 days, and reheat in the air fryer at 300F for 2-3 minutes (or microwave 30-40 seconds) until hot, 160F internal."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Cottage cheese is one of the cheapest protein-per-dollar dairies in the store — one tub blends into a whole batch and disappears flavor-wise, so even cottage-cheese skeptics won't notice.",
      "Make a double batch in two molds and freeze half. Reheating a frozen bite costs pennies and beats a $5 cafe run every single morning.",
      "Use whatever cheese ends or veggies you already have — leftover bell pepper, spinach, or a sprinkle of shredded cheese all work, so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "cottage-cheese",
        "swap": "Swap in plain Greek yogurt for the same creamy, high-protein texture",
        "savings": "Saves about $0.30 if you already have yogurt on hand"
      },
      {
        "forIngredientId": "cheese",
        "swap": "Use shredded mozzarella or crumbled feta for a different melty vibe",
        "savings": "Mozzarella runs a few cents cheaper per batch"
      },
      {
        "forIngredientId": "scallion",
        "swap": "Stir in a handful of frozen spinach (thawed and squeezed dry) instead",
        "savings": "About the same cost but adds bulk and iron"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 20,
      "carbs": 3,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🥚",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "meal-prep",
      "breakfast",
      "vegetarian",
      "gluten-free",
      "starbucks-copycat",
      "dorm-friendly"
    ],
    "crispinessLevel": "soft",
    "airFryerTimeMinutes": 15,
    "airFryerTemperatureF": 300,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-molten-chocolate-lava-cake",
    "name": "Air Fryer Molten Chocolate Lava Cake",
    "description": "A restaurant-level chocolate cake with edges that set into a tender crust while the center stays warm and gooey, ready in under 15 minutes from one bowl. Cut it open and the molten chocolate oozes out, pure dessert magic without ever turning on an oven. Inspired by a popular air-fryer lava-cake trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "dark-chocolate-chips",
        "quantity": 5,
        "note": "melted into the batter for the molten core"
      },
      {
        "ingredientId": "butter",
        "quantity": 3
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 3
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25
      },
      {
        "ingredientId": "cocoa-powder",
        "quantity": 1
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "to grease the ramekins so the cakes release"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 1,
        "optional": true,
        "note": "dusted on top to finish"
      },
      {
        "ingredientId": "frozen-berries",
        "quantity": 0.25,
        "optional": true,
        "note": "thawed, for serving"
      }
    ],
    "steps": [
      "Add the butter and dark-chocolate chips to a microwave-safe bowl. Microwave in 20-second bursts, stirring between each, until smooth and glossy (about 60 seconds total).",
      "Whisk the egg, sugar, and vanilla into the warm (not hot) chocolate until shiny. Sprinkle in the flour, cocoa powder, and salt and stir just until no dry streaks remain; do not overmix.",
      "Grease two small ramekins well with cooking spray, coating the bottom and all the way up the sides. Divide the batter evenly between them, filling each about three-quarters full.",
      "Preheat the air fryer to 370F for 2 minutes, then set the ramekins in the basket with a little space between them for airflow.",
      "Air fry at 370F for 8 to 10 minutes. The tops should look set and matte with a slight dome while the center stays soft and jiggles slightly when nudged; start checking at 8 minutes, since runnier centers need less time.",
      "Carefully lift the ramekins out (they are hot, use a towel or tongs) and let them rest 1 to 2 minutes so the edges firm up enough to unmold.",
      "Run a knife around each edge, place a plate on top, and flip to release the cake. Dust with powdered sugar and add thawed berries if you like, then cut in to let the lava flow."
    ],
    "totalTimeMinutes": 18,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "No ramekins? Use two clean oven-safe coffee mugs or a couple of small glass jars; just grease them well so the cake slides out.",
      "A handful of chocolate chips beats a whole chocolate bar for cost and melts faster; buy them by the bag and you will have plenty left for snacking.",
      "Skip the berries and powdered sugar to keep it under a dollar a serving; the molten center is the star and needs no garnish."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate-chips",
        "swap": "semi-sweet-chocolate-chips for a sweeter, classic vibe",
        "savings": "saves about $0.06/tbsp"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant-butter to make it dairy-free",
        "savings": "saves about $0.03/tbsp"
      },
      {
        "forIngredientId": "flour",
        "swap": "almond-flour for a gluten-free version (texture stays fudgy)",
        "savings": "costs a bit more but works"
      }
    ],
    "estimatedNutrition": {
      "calories": 380,
      "protein": 6,
      "carbs": 38,
      "fat": 24,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "chocolate",
      "dorm-friendly",
      "under-15-minutes",
      "single-bowl"
    ],
    "crispinessLevel": "soft",
    "airFryerTimeMinutes": 10,
    "airFryerTemperatureF": 370,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-lemon-pepper-wings",
    "name": "Air Fryer Lemon Pepper Wings",
    "description": "Crispy, juicy wings tossed in melted butter and bright, zesty lemon pepper seasoning — that buttery 'wet' Atlanta-style classic, made in your air fryer with no deep-frying and no mess. A squeeze of fresh lemon at the end makes them pop. Inspired by the viral 'lemon pepper wet' wing trend on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 12
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "lemon-pepper",
        "quantity": 4
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "lemon",
        "quantity": 1
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true
      }
    ],
    "steps": [
      "Pat the chicken wings very dry with paper towels — dry skin is the secret to crispy air fryer wings. In a bowl, toss them with the olive oil, garlic powder, salt, pepper, and 2 tsp of the lemon pepper seasoning until evenly coated.",
      "Arrange the wings skin-side up in a single layer in the air fryer basket, leaving a little space between each so air can circulate. Work in two batches if your basket is small.",
      "Air fry at 390°F for 18-20 minutes, flipping the wings halfway through, until the skin is golden and crispy and the thickest wing reads at least 165°F internal on an instant-read thermometer.",
      "While the wings finish, melt the butter in a mug in the microwave (about 25-30 seconds). Stir the remaining 2 tsp lemon pepper seasoning into the melted butter to make the buttery 'wet' sauce.",
      "Tip the hot wings into a clean bowl, pour over the lemon pepper butter, and toss until every wing is glossy and coated — doing this off the heat keeps the seasoning from scorching.",
      "Squeeze fresh lemon juice over the top, garnish with chopped parsley if you like, and serve right away while crispy and hot."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole bag of party wings and freeze in portions — per-wing they're far cheaper than pre-sauced wings, and a single jar of lemon pepper seasoning lasts for many batches.",
      "No fresh lemon? A splash of bottled lemon juice still brightens the butter sauce for pennies.",
      "Stretch the meal by air frying a handful of frozen fries in the same basket after the wings — the residual heat gets them crispy fast."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use plant butter or a drizzle of olive oil to keep it dairy-free",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "chicken-wings",
        "swap": "Swap in chicken drumsticks for a meatier, slightly cheaper-per-bite option (add ~5 min cook time)",
        "savings": "saves ~$0.50 per serving"
      },
      {
        "forIngredientId": "lemon-pepper",
        "swap": "Mix garlic powder + black pepper + a little lemon zest if you don't have the jar",
        "savings": "uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 32,
      "carbs": 3,
      "fat": 33,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-yellow-100",
    "cuisine": "American (Atlanta)",
    "tags": [
      "air-fryer",
      "no-stove",
      "wings",
      "lemon-pepper",
      "high-protein",
      "game-day",
      "atlanta",
      "viral",
      "snack"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 390,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-nashville-hot-wings",
    "name": "Air Fryer Nashville Hot Wings",
    "description": "Shatteringly crisp wings dunked in a fiery cayenne-and-brown-sugar \"hot oil\" paste that paints them that famous angry red — sweet, smoky, and seriously spicy, served on white bread with pickles to catch every drip. No deep fryer, no mess, just a whisked paste and the crunch your air fryer was born to make. Inspired by a viral Nashville-hot wings trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 12
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "cayenne",
        "quantity": 2
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1.5
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1
      },
      {
        "ingredientId": "bread",
        "quantity": 2
      },
      {
        "ingredientId": "dill-pickles",
        "quantity": 0.1,
        "optional": true,
        "note": "a few slices for serving"
      }
    ],
    "steps": [
      "Pat the 12 wings very dry with paper towels — dry skin is the whole secret to crunch. Toss in a bowl with the vegetable oil, garlic powder, salt, and pepper until evenly coated.",
      "Arrange the wings in a single layer in the air fryer basket, not touching (work in two batches if needed). Air fry at 400F for 25 minutes total, flipping at the halfway mark (about 12 minutes), until deeply golden and crisp.",
      "Check doneness: the thickest wing should read 165F on an instant-read thermometer. If they need more crunch, give them another 2-3 minutes at 400F.",
      "While the wings cook, melt the butter in a microwave-safe bowl (15-20 seconds). Whisk in the cayenne, brown sugar, and smoked paprika until you have a smooth, glossy red paste — careful, the steam is spicy.",
      "Tip the hot wings straight into the bowl of paste (or brush it on) and toss until every wing is coated in that angry-red glaze.",
      "Lay the white bread slices on plates, pile the wings on top so the bread soaks up the drippings, and tuck a few dill pickle slices alongside. Eat immediately while crisp."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a family pack of whole wings and break them into flats and drums yourself — it is far cheaper per piece than pre-cut party wings.",
      "The hot paste is just pantry spices and butter, so you can scale the heat up or down for free instead of buying bottled Nashville sauce.",
      "Stale or end-of-loaf white bread is perfect here since it just catches drippings — no need to use fresh slices."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Swap the butter for vegetable-oil to make the paste dairy-free (classic Nashville hot oil is often lard- or oil-based anyway).",
        "savings": "Saves about $0.30"
      },
      {
        "forIngredientId": "chicken-wings",
        "swap": "Use frozen-wings and add 3-4 minutes of air-fry time straight from frozen.",
        "savings": "Often cheaper per piece"
      },
      {
        "forIngredientId": "smoked-paprika",
        "swap": "Regular paprika works fine — you lose a little smokiness but keep the color.",
        "savings": "Saves about $0.08"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 34,
      "carbs": 22,
      "fat": 28,
      "fiber": 2
    },
    "emoji": "🔥",
    "accentColor": "bg-red-100",
    "cuisine": "American (Southern)",
    "tags": [
      "air-fryer",
      "no-stove",
      "wings",
      "spicy",
      "nashville-hot",
      "southern",
      "game-day",
      "high-protein"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 25,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-classic-buffalo-wings",
    "name": "Air Fryer Classic Buffalo Wings",
    "description": "The OG game-day wing, finally bar-crispy in your dorm with zero oil splatter. Shatter-crisp skin gets tossed in a two-ingredient melted-butter-and-Frank's sauce so every bite snaps and drips. Inspired by the classic air-fryer Buffalo wing trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 12
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "aluminum-free; the secret to extra-crispy skin"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "buffalo-sauce",
        "quantity": 4,
        "note": "Frank's RedHot style"
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "celery",
        "quantity": 2,
        "optional": true,
        "note": "for serving"
      },
      {
        "ingredientId": "blue-cheese-dressing",
        "quantity": 2,
        "optional": true,
        "note": "for dipping"
      }
    ],
    "steps": [
      "Pat the wings completely dry with paper towels — dry skin is the difference between crispy and soggy. In a bowl, toss them with the baking powder, salt, garlic powder, and pepper until evenly coated.",
      "Arrange the wings in a single layer in the air fryer basket, not touching. Air fry at 400F for 12 minutes.",
      "Flip the wings and air fry another 12 to 16 minutes at 400F, shaking every 5 minutes, until the skin is crackly-crisp and deep golden and the thickest wing reads 165F on an instant-read thermometer.",
      "While they finish, microwave the butter in a large bowl for about 30 seconds until melted, then stir in the buffalo sauce to make the classic two-ingredient sauce.",
      "Tip the hot wings straight into the bowl and toss until every wing is glossy and coated — saucing after cooking keeps the skin crisp.",
      "Serve right away with celery sticks and blue cheese dressing for dipping. Crisp an extra 2 to 3 minutes at 400F if you like them drier."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 28,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole bag of party wings, or split whole wings yourself into drums and flats — way cheaper per piece than pre-cut.",
      "Skip bottled buffalo sauce and DIY it: melted butter plus any hot sauce you already have nails the same tangy kick for pennies.",
      "Make a double batch while the air fryer is hot — wings reheat to crispy in 4 to 5 minutes at 400F, so cook once and snack twice."
    ],
    "substitutions": [
      {
        "forIngredientId": "buffalo-sauce",
        "swap": "Stir 1 tsp hot-sauce (like Frank's) per tbsp into the melted butter for homemade buffalo sauce",
        "savings": "~$0.10 per batch"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant-butter for a dairy-free toss",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "blue-cheese-dressing",
        "swap": "Ranch, or plain Greek yogurt with a little garlic powder",
        "savings": "~$0.30 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 33,
      "carbs": 3,
      "fat": 31,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "game-day",
      "wings",
      "buffalo",
      "high-protein",
      "gluten-free",
      "two-ingredient-sauce",
      "snack",
      "party"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 28,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-honey-garlic-tofu",
    "name": "Air Fryer Honey Garlic Tofu",
    "description": "Ultra-crispy tofu cubes with a deep-fried-style crust, tossed in a sticky honey-garlic-ginger glaze that clings to every edge. Cheap, vegan-flexible, high-protein, and spoonable over any grain you've got in the dorm. Inspired by a viral crispy-tofu air-fryer trend on Reddit.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "tofu",
        "quantity": 2,
        "note": "extra-firm, pressed and cut into 1-inch cubes"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "tossed with tofu for the crispy crust"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "to season the cornstarch dusting"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to lightly coat tofu before air frying"
      },
      {
        "ingredientId": "honey",
        "quantity": 3,
        "note": "swap maple syrup or agave to keep it fully vegan"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced or grated"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1,
        "note": "adjust to taste for heat"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "stirred into the glaze for aroma"
      },
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "cooked, to serve"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, for garnish",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Press the tofu: wrap the block in a clean towel or paper towels, set something heavy on top, and let it drain 10-15 minutes. Cut into 1-inch cubes.",
      "In a bowl, toss the tofu cubes with the cornstarch and salt until every face is evenly dusted, then drizzle with the vegetable oil and gently toss again so they're lightly coated.",
      "Arrange the cubes in a single layer in the air fryer basket (don't crowd) and air fry at 400F for 15 minutes, shaking the basket once halfway, until deeply golden and crisp on all sides and piping hot through the center. Meanwhile, microwave the rice with water (about 1.5 cups water per cup of rice) or use a kettle and a covered bowl until tender and fluffy.",
      "While the tofu cooks, whisk together the honey, soy sauce, garlic, ginger paste, rice vinegar, sriracha, and sesame oil in a small microwave-safe bowl.",
      "Microwave the glaze in 20-second bursts (1-2 minutes total), stirring between each, until it bubbles and thickens slightly into a sticky sauce that coats the back of a spoon. The brief boil cooks off the raw garlic bite.",
      "Transfer the hot, crispy tofu to a bowl, pour over the warm glaze, and toss quickly so every cube gets sticky and shiny.",
      "Serve over the rice and finish with sliced scallion and a sprinkle of sesame seeds. Eat right away while the crust is at its crispiest."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a multi-pack of extra-firm tofu when it's on sale and freeze blocks; freezing then thawing gives an even chewier, crispier texture once air-fried.",
      "Cornstarch is the secret crunch and costs pennies per batch, so don't skip it; it does the work a deep fryer would for a fraction of the cost.",
      "Stretch one batch over two meals by making extra rice and saving half the tofu and glaze separately, then re-crisp the tofu in the air fryer for 3-4 minutes before serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "Maple syrup or agave for a fully vegan glaze",
        "savings": "Roughly the same cost, keeps it vegan"
      },
      {
        "forIngredientId": "ginger-paste",
        "swap": "1 tsp ground ginger or a pinch of fresh grated ginger",
        "savings": "Saves a few cents if you already have the spice"
      },
      {
        "forIngredientId": "sriracha",
        "swap": "A pinch of red pepper flakes or any hot sauce you have",
        "savings": "Use what's in the pantry, no extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 22,
      "carbs": 62,
      "fat": 11,
      "fiber": 3
    },
    "emoji": "🍱",
    "accentColor": "bg-amber-100",
    "cuisine": "Asian",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegan",
      "high-protein",
      "budget",
      "dinner",
      "tofu",
      "meal-prep-friendly"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 15,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-firecracker-shrimp",
    "name": "Air Fryer Firecracker Shrimp",
    "description": "Crunchy sesame-panko shrimp tossed in a sticky gochujang-honey glaze that's sweet, garlicky, and addictively spicy — a modern Korean-American twist on sweet-chili shrimp. They crisp up golden in the air fryer with just a spritz of oil, no deep-frying or stove required. Inspired by Lee Funke of Fit Foodie Finds (https://fitfoodiefinds.com/firecracker-shrimp/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "shrimp",
        "quantity": 2
      },
      {
        "ingredientId": "panko",
        "quantity": 0.75
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 2
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4
      },
      {
        "ingredientId": "gochujang",
        "quantity": 1.5,
        "note": "the heart of the firecracker glaze"
      },
      {
        "ingredientId": "honey",
        "quantity": 2
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "black-sesame",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Pat the thawed shrimp very dry with paper towels — dry shrimp is the secret to a crust that actually crunches. Toss them in a bowl with the cornstarch and salt until lightly and evenly coated.",
      "Set up a quick breading station: beat the egg in one bowl, and mix the panko with the sesame seeds in another. Dip each shrimp in egg, letting excess drip off, then press firmly into the panko so it coats all over.",
      "Lightly spray the air fryer basket, then arrange the shrimp in a single layer without crowding (work in two batches if needed). Spritz the tops generously with cooking spray so the crumbs brown instead of staying chalky.",
      "Air fry at 400°F for 4 minutes, flip each shrimp, spritz again, and air fry 3-4 more minutes until the coating is golden and crisp and the shrimp are opaque, firm, and curled into a C (internal temp 145°F). Avoid a tight O shape, which means overcooked.",
      "While they cook, make the glaze: in a microwave-safe bowl stir together the gochujang, honey, rice vinegar, toasted sesame oil, soy sauce, and grated garlic. Microwave 20-30 seconds, then stir until smooth and glossy.",
      "Add the hot, crispy shrimp to the bowl of glaze and toss gently to coat — do this right before eating so they stay crunchy.",
      "Pile onto a plate and finish with sliced scallion and a pinch of black sesame. For a side, microwave a cup of rice per the package while the shrimp air fry."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen shrimp is way cheaper than fresh and works perfectly — just thaw under cold water for 10 minutes and pat bone-dry.",
      "Make your own gochujang glaze instead of buying bottled firecracker sauce; a single tub of gochujang lasts for months of stir-fries and bowls.",
      "Stale bread blitzed in a blender makes free panko-style crumbs if you're out — even crushed plain crackers will do in a pinch."
    ],
    "substitutions": [
      {
        "forIngredientId": "gochujang",
        "swap": "sriracha plus a pinch of brown sugar for a similar sweet-heat",
        "savings": "saves ~$0.15 if you already have sriracha"
      },
      {
        "forIngredientId": "panko",
        "swap": "regular breadcrumbs or crushed cornflakes",
        "savings": "saves ~$0.05/serving"
      },
      {
        "forIngredientId": "honey",
        "swap": "maple syrup or brown sugar dissolved in a splash of water",
        "savings": "about the same cost, just uses what you have"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 28,
      "carbs": 34,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🍤",
    "accentColor": "bg-red-100",
    "cuisine": "Korean-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "spicy",
      "shrimp",
      "korean",
      "gochujang",
      "snack",
      "high-protein",
      "crunchy",
      "dorm-friendly"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-coconut-shrimp-sweet-chili-dip",
    "name": "Air Fryer Coconut Shrimp with Sweet Chili Dip",
    "description": "Crispy golden coconut-crusted shrimp with a toasty tropical crunch, served with a sweet Thai chili dip for the perfect sweet-and-spicy bite. It tastes like that steakhouse appetizer, but way cheaper and far less greasy than the deep-fried version. Inspired by Yumna Jawad (Feel Good Foodie) (https://feelgoodfoodie.net/recipe/air-fryer-shrimp/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "shrimp",
        "quantity": 2,
        "note": "thawed, peeled, deveined, tails on, patted very dry"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "for dredging"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, for egg wash"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.5
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 6
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2
      },
      {
        "ingredientId": "sweet-chili-sauce",
        "quantity": 4,
        "note": "for dipping"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "cut into wedges for squeezing",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "note": "chopped, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Pat the thawed shrimp very dry with paper towels (dry shrimp means a crispier coating). Set up three shallow bowls: one with the flour stirred together with garlic powder, salt, and pepper; one with the beaten egg; and one with the panko and shredded coconut mixed together.",
      "Working one at a time, dredge each shrimp in the seasoned flour, dip in the egg wash and let the excess drip off, then press firmly into the panko-coconut mix so it coats all over. Set the coated shrimp on a plate.",
      "Spray the air fryer basket with cooking spray and arrange the shrimp in a single layer without touching (work in two batches if needed). Mist the tops lightly with cooking spray so the coconut toasts golden instead of staying pale.",
      "Air fry at 360F for 6 minutes. Flip each shrimp, mist again with cooking spray, and air fry another 5 to 7 minutes until the coating is deep golden brown and crunchy and the shrimp are opaque and curled. They are done at an internal temperature of 145F.",
      "While the shrimp cook, pour the sweet chili sauce into a small dipping bowl.",
      "Plate the shrimp, squeeze fresh lime over the top, scatter the chopped cilantro, and serve hot with the sweet chili dip while they are at peak crunch."
    ],
    "totalTimeMinutes": 27,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen shrimp is your friend: buy a bag and thaw only what you need under cold running water in about 5 minutes. It is far cheaper than the fresh seafood counter.",
      "No shredded coconut on hand? Crush a handful of plain coconut flakes from the snack aisle, or stretch what you have by mixing it 50/50 with extra panko.",
      "One egg coats the whole batch. Let the excess drip off before the panko step so none of it goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "shrimp",
        "swap": "Frozen popcorn shrimp or even frozen fish sticks for a coconut-crusted twist",
        "savings": "~$1.50/serving"
      },
      {
        "forIngredientId": "panko",
        "swap": "Regular breadcrumbs or crushed cornflakes",
        "savings": "~$0.05/serving"
      },
      {
        "forIngredientId": "sweet-chili-sauce",
        "swap": "Stir apricot jam with a splash of sriracha and rice vinegar for a homemade dip",
        "savings": "~$0.15/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 24,
      "carbs": 30,
      "fat": 11,
      "fiber": 3
    },
    "emoji": "🥤",
    "accentColor": "bg-amber-100",
    "cuisine": "Tropical / American",
    "tags": [
      "air-fryer",
      "no-stove",
      "shrimp",
      "coconut",
      "snack",
      "appetizer",
      "crispy",
      "tropical",
      "high-protein",
      "party"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 360,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-fish-tacos",
    "name": "Air Fryer Crispy Fish Tacos",
    "description": "Flaky white cod in a golden panko crust, tucked into warm tortillas with a zippy cilantro-lime slaw — that taqueria battered-fish crunch with zero deep-frying. Fresh, summery, and ready in about 15 minutes flat. Inspired by a viral Baja air-fryer fish-taco trend.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "cod",
        "quantity": 8,
        "note": "patted dry, cut into 1-inch strips"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.5
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, for dredging"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1
      },
      {
        "ingredientId": "tortilla",
        "quantity": 4
      },
      {
        "ingredientId": "cabbage",
        "quantity": 1.5,
        "note": "shredded"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 2
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "half juiced into slaw, half cut into wedges"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for slaw and garnish"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 1,
        "optional": true,
        "note": "to drizzle"
      }
    ],
    "steps": [
      "Pat the cod strips very dry. Set up three bowls: mix the flour with paprika, garlic powder, cumin, salt, and pepper in the first; the beaten egg in the second; the panko in the third.",
      "Coat each cod strip in the seasoned flour, dip in egg, then press firmly into the panko so it sticks all over. Mist both sides with cooking spray — this is the trick for a fried-look golden crust without oil.",
      "Air fry at 400F for 10-12 minutes, flipping the strips halfway through, until the crust is deep golden and the fish is opaque and flakes easily — it should reach an internal temperature of 145F.",
      "While the fish cooks, make the slaw: toss the shredded cabbage with the mayonnaise, the juice of half the lime, and the chopped cilantro (if using). Season with a pinch of salt.",
      "Warm the tortillas in the microwave for 20-30 seconds wrapped in a damp paper towel so they stay soft and foldable.",
      "Build each taco with a spoonful of slaw and a couple of crispy cod strips. Finish with a squeeze of the remaining lime, plus extra cilantro and a drizzle of hot sauce if you like."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen white fish like cod or rockfish is often half the price of fresh — thaw it overnight in the fridge and pat it really dry before breading.",
      "No panko? Pulse stale bread or plain tortilla chips into crumbs for the same crunch at near-zero cost.",
      "Buy a small head of green cabbage instead of bagged slaw mix — one head makes slaw for a week of tacos for under a dollar."
    ],
    "substitutions": [
      {
        "forIngredientId": "cod",
        "swap": "Tilapia or any frozen white fish — cheaper and just as flaky",
        "savings": "~$3.20 for the batch"
      },
      {
        "forIngredientId": "panko",
        "swap": "Crushed plain breadcrumbs or cornflakes",
        "savings": "~$0.05"
      },
      {
        "forIngredientId": "mayonnaise",
        "swap": "Plain Greek yogurt for a tangier, lighter slaw",
        "savings": "about the same, adds protein"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 32,
      "carbs": 42,
      "fat": 14,
      "fiber": 5
    },
    "emoji": "🌮",
    "accentColor": "bg-sky-100",
    "cuisine": "Mexican / Baja",
    "tags": [
      "air-fryer",
      "no-stove",
      "fish",
      "tacos",
      "baja",
      "15-minute",
      "high-protein",
      "dinner",
      "dairy-free"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-cajun-garlic-butter-shrimp",
    "name": "Air Fryer Cajun Garlic Butter Shrimp",
    "description": "Smoky-spicy Cajun shrimp that air fry up plump and lightly charred in minutes, then get tossed in a glossy garlic-herb butter that soaks into every bite. Big bold flavor, almost zero cleanup, and a dinner that tastes like way more effort than it took. Inspired by a viral air-fryer Cajun shrimp trend on TikTok.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "shrimp",
        "quantity": 2,
        "note": "large raw shrimp, thawed and patted dry"
      },
      {
        "ingredientId": "cajun-seasoning",
        "quantity": 3
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "to lightly coat shrimp before air frying"
      },
      {
        "ingredientId": "butter",
        "quantity": 3
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "half juiced into the butter, half cut into wedges"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "optional": true,
        "note": "optional microwave side"
      }
    ],
    "steps": [
      "Pat the thawed shrimp very dry with a paper towel (dry shrimp char instead of steaming). Toss in a bowl with the olive oil, Cajun seasoning, smoked paprika, and a pinch of salt until every piece is evenly coated.",
      "Preheat the air fryer to 400F for 2-3 minutes. Lay the shrimp in a single layer in the basket so they aren't overlapping (work in two batches if your basket is small).",
      "Air fry at 400F for about 7 minutes total, shaking the basket halfway. Shrimp are done when they curl into a loose C-shape, turn fully opaque, and reach 145F internal on an instant-read thermometer, with lightly charred edges. Pull them as soon as they hit 145F so they stay tender, not rubbery.",
      "While the shrimp cook, make the butter bath: microwave the butter with the minced garlic in a heatproof bowl in 20-second bursts (about 40-50 seconds total) until melted and fragrant, stirring once between bursts so the garlic doesn't scorch.",
      "Squeeze the juice from half the lemon into the melted butter and stir to combine.",
      "Tip the hot shrimp straight into the garlic-Cajun butter and toss until glossy and coated. For a fuller meal, microwave the jasmine rice per package and spoon the buttery shrimp on top.",
      "Finish with chopped parsley and serve with the remaining lemon cut into wedges for squeezing over the top."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a bag of frozen raw shrimp and thaw only what you need under cold running water for about 5 minutes - cheaper per serving than fresh and it keeps for weeks in the freezer.",
      "No Cajun seasoning? Mix paprika, garlic powder, onion powder, cayenne, and a little dried oregano from what you already have.",
      "Skip the rice and serve over toast or with the extra garlic butter for dipping to stretch it into a bigger meal for less."
    ],
    "substitutions": [
      {
        "forIngredientId": "cajun-seasoning",
        "swap": "Creole seasoning, or a DIY blend of paprika + garlic powder + cayenne",
        "savings": "Use what's in the cabinet, save ~$0.40"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter for a dairy-free garlic bath",
        "savings": "About the same cost, makes it dairy-free"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Avocado oil or a few sprays of cooking spray",
        "savings": "Cooking spray saves ~$0.25"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 27,
      "carbs": 4,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🦐",
    "accentColor": "bg-red-100",
    "cuisine": "Cajun / Southern",
    "tags": [
      "air-fryer",
      "no-stove",
      "shrimp",
      "cajun",
      "garlic-butter",
      "high-protein",
      "quick",
      "dinner",
      "gluten-free",
      "dorm-friendly"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-honey-sriracha-cauliflower-wings",
    "name": "Air Fryer Sticky Honey Sriracha Cauliflower Wings",
    "description": "Crispy cauliflower florets get a light panko coat, crackle up in the air fryer, then take a swim in a glossy sweet-spicy honey-sriracha glaze that clings to every bite. They taste like a takeout splurge but cost a few bucks and skip the deep fryer entirely. Inspired by Gina Homolka (Skinnytaste) (https://www.skinnytaste.com/air-fryer-cauliflower-wings-with-honey-sriracha/).",
    "mealType": "snack",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "cauliflower",
        "quantity": 1,
        "note": "cut into bite-size florets"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5
      },
      {
        "ingredientId": "water",
        "quantity": 0.5
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "panko",
        "quantity": 1
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 3
      },
      {
        "ingredientId": "sriracha",
        "quantity": 4
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "grated, for the glaze"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Cut the cauliflower into bite-size florets. In a bowl, whisk the flour, water, cornstarch, garlic powder, and salt into a smooth, pourable batter about the thickness of pancake batter.",
      "Put the panko in a second bowl. Dip each floret in the batter, let the excess drip off, then roll in panko to coat fully. Set on a plate.",
      "Lightly mist the air fryer basket with cooking spray. Add the florets in a single layer (work in 2 batches so they aren't crowded — crowding steams instead of crisps) and mist the tops.",
      "Air fry at 380F for 13-14 minutes, shaking the basket and flipping the florets halfway, until deep golden and crisp on the edges and a floret is fork-tender inside. Repeat with the second batch.",
      "While they cook, stir together the honey, sriracha, soy sauce, rice vinegar, grated garlic, and sesame oil in a large bowl to make the glaze (no cooking needed).",
      "Tip the hot, crispy cauliflower straight into the glaze bowl and toss gently until every floret is shiny and coated.",
      "Pile onto a plate and finish with sliced scallion and sesame seeds. Eat right away while sticky and crisp."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "One head of cauliflower is the whole show here — buy it on sale or grab a pre-cut floret bag if your store marks it down, and you've got a snack for 3 for a couple bucks.",
      "Sriracha and honey are pantry MVPs: a single squeeze-bottle of each lasts for dozens of batches, so the per-serving glaze cost is pennies.",
      "Skip the panko if you're broke — a plain cornstarch-flour batter still crisps up great in the air fryer and saves you a whole ingredient."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "maple-syrup or brown sugar dissolved in a splash of water for a vegan glaze",
        "savings": "roughly the same, and maple makes it fully plant-based"
      },
      {
        "forIngredientId": "sriracha",
        "swap": "buffalo-sauce or any hot-sauce you already own",
        "savings": "use what's in the door of your fridge for $0 extra"
      },
      {
        "forIngredientId": "panko",
        "swap": "crushed cornflakes, regular breadcrumbs, or skip it entirely",
        "savings": "saves about $0.30 and uses up cereal you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 6,
      "carbs": 42,
      "fat": 3,
      "fiber": 4
    },
    "emoji": "🌶️",
    "accentColor": "bg-orange-100",
    "cuisine": "Asian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "snack",
      "spicy",
      "sticky",
      "crowd-pleaser",
      "budget",
      "meatless",
      "game-day"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 14,
    "airFryerTemperatureF": 380,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-pork-belly-bites",
    "name": "Air Fryer Crispy Pork Belly Bites",
    "description": "Little cubes of pork \"candy\" that turn crackly-crisp on the outside and stay meltingly tender inside, wildly addictive straight from the basket or piled onto rice. The pork belly is fatty enough to crisp itself, so you don't need a drop of oil. Inspired by a viral air-fryer pork-belly trend on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "pork-belly",
        "quantity": 2,
        "note": "cut into 1-inch cubes"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "kosher or table salt"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1,
        "note": "helps the surface caramelize"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "light dusting for extra crackle"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, to garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "to garnish"
      }
    ],
    "steps": [
      "Pat the pork belly cubes very dry with a paper towel; dry surfaces are what crackle. In a bowl, toss them with the salt, pepper, garlic powder, smoked paprika, and brown sugar until every cube is evenly coated.",
      "Sprinkle the cornstarch over the cubes and toss again so they are lightly dusted. This is the secret to an extra-crispy shell.",
      "Arrange the cubes fat-side down in a single layer in the air fryer basket, leaving space between them so the hot air can render the fat. Don't crowd them or they will steam instead of crisp.",
      "Air fry at 400F for 18-20 minutes total, shaking the basket every 5-6 minutes so they brown evenly and the rendered fat drains off.",
      "Check doneness in the last few minutes: the outsides should be deep golden and crackly. Pork is fully cooked at an internal temperature of 145F, so check the largest cube with an instant-read thermometer and let the bites rest 3 minutes (go to 160F if you prefer them firmer).",
      "Tip the bites onto a plate lined with paper towel and blot for 1 minute to soak up excess fat, then scatter sliced scallion and sesame seeds over the top. Pile onto a bowl of microwaved rice if you want to turn them into a meal."
    ],
    "totalTimeMinutes": 28,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a slab of pork belly and cube it yourself; it's usually cheaper per pound than pre-cut, and you can freeze half for next time.",
      "No cornstarch? A dusting of any starch, or even a small sprinkle of baking powder, helps the surface crisp up just as well.",
      "Save the rendered fat that collects in the basket; strain it into a jar and use it to fry eggs or roast potatoes for free flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-belly",
        "swap": "Thick-cut bacon sliced into chunks, for a quicker, cheaper bite",
        "savings": "~$1.50/serving"
      },
      {
        "forIngredientId": "smoked-paprika",
        "swap": "Regular paprika plus a pinch of garlic salt",
        "savings": "pennies"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Honey or maple syrup tossed on after cooking",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 18,
      "carbs": 9,
      "fat": 47,
      "fiber": 1
    },
    "emoji": "🥓",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "pork",
      "crispy",
      "high-protein",
      "rice-bowl",
      "tiktok",
      "gluten-free",
      "dorm-friendly"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-sticky-bbq-pork-ribs",
    "name": "Air Fryer Sticky BBQ Pork Ribs",
    "description": "Tender pork ribs lacquered in a sticky, caramelized BBQ glaze — done in about 55 minutes with no smoker and no all-afternoon oven. That glossy, finger-licking finish is the whole reason to make these. Inspired by the popular no-smoker air-fryer ribs trend.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "pork-ribs",
        "quantity": 2
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 6
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1.5
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "honey",
        "quantity": 1
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Pat the ribs dry and peel off the thin shiny membrane from the back: slide a butter knife under it, grab with a paper towel, and pull. This is what lets them turn out tender.",
      "In a small bowl, mix the brown sugar, smoked paprika, garlic powder, onion powder, salt, and pepper. Rub it all over both sides of the ribs.",
      "Place the ribs in the air fryer basket (cut the rack in half to fit if needed) and cook at 325F for 40 minutes, flipping halfway at the 20-minute mark, until the meat is tender and pulls back from the bones (internal temp 190-200F for that fall-apart texture; well above the 145F pork-safe minimum).",
      "While they cook, stir together the bbq-sauce, honey, and apple cider vinegar in a bowl to make the sticky glaze.",
      "Brush the ribs generously with glaze on both sides, then bump the air fryer to 350F and cook 5 more minutes to caramelize the sauce into a sticky lacquer. Watch the last minute so the sugar doesn't burn.",
      "Rest the ribs 5 minutes, then brush with any leftover glaze, slice between the bones, and scatter with scallion and sesame seeds if using. Serve hot."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a full rack of pork ribs and portion it — usually cheaper per serving than pre-cut, and leftovers reheat great in the air fryer at 350F for 4 minutes.",
      "Skip store-bought rub: brown sugar plus the spices you already have makes a better, cheaper dry rub than any bottled blend.",
      "Stretch one batch into two meals by serving with a cheap side of microwave rice (1 cup, ~15 cents) to soak up the extra glaze."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "Use maple-syrup or an extra tbsp of brown sugar for the same sticky sweetness.",
        "savings": "Brown sugar is cheaper and you likely already have it."
      },
      {
        "forIngredientId": "apple-cider-vinegar",
        "swap": "Any vinegar works — plain white vinegar or a splash of lemon juice adds the same tangy lift.",
        "savings": "Saves buying a specialty vinegar."
      },
      {
        "forIngredientId": "pork-ribs",
        "swap": "Swap in chicken-drumsticks for a cheaper protein — cook at 375F for 22-25 min to 165F internal, then glaze the same way.",
        "savings": "Drumsticks cost a fraction of ribs per serving."
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 34,
      "carbs": 28,
      "fat": 34,
      "fiber": 1
    },
    "emoji": "🍖",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dinner",
      "bbq",
      "pork",
      "high-protein",
      "comfort-food",
      "no-smoker"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 45,
    "airFryerTemperatureF": 325,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-lamb-chops",
    "name": "Air Fryer Crispy Lamb Chops",
    "description": "Date-night rib chops with a crackly golden fat cap and a juicy medium-rare center, done in under 10 minutes with zero stovetop drama. A quick garlic-lemon-herb rub does all the work while the air fryer crisps the edges like a proper sear. Inspired by the popular air-fryer lamb-chops trend.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "lamb-chops",
        "quantity": 6
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 3
      },
      {
        "ingredientId": "lemon",
        "quantity": 1
      },
      {
        "ingredientId": "rosemary-fresh",
        "quantity": 2
      },
      {
        "ingredientId": "oregano",
        "quantity": 1
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "tzatziki",
        "quantity": 3,
        "optional": true,
        "note": "for dipping"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "In a bowl, mix the olive oil, grated garlic, zest and juice of half the lemon, chopped rosemary, oregano, cumin, paprika, salt, and pepper into a loose paste. Reserve the other lemon half for serving.",
      "Pat the lamb chops very dry with paper towel, then rub the paste all over each chop. Let them sit 5 minutes (or up to overnight in the fridge) to absorb the flavor. Lightly mist the air fryer basket so nothing sticks.",
      "Preheat the air fryer to 400F for 2-3 minutes. Arrange the chops flat in a single layer, not touching, so the hot air circulates around each one.",
      "Air fry at 400F for 4 minutes, then flip each chop and cook another 3-4 minutes for medium-rare.",
      "Stand the chops on their fatty edge (fat-cap up, leaning them against each other or the basket wall) and air fry 1-2 minutes more to render and crisp the fat cap until golden and crackly.",
      "Check the thickest part with a thermometer: pull at 145F for medium-rare or 160F for medium, then rest 3-5 minutes on a plate so the juices redistribute (carryover heat will add a few degrees). USDA-safe for whole lamb chops is 145F plus a 3-minute rest.",
      "Squeeze over the reserved lemon and scatter with parsley.",
      "Serve with a spoonful of tzatziki for dipping. Great alongside microwave rice or warm pita."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Lamb rib chops go on sale around holidays — buy a whole rack, cut it into chops yourself, and freeze in pairs for cheap date nights.",
      "Loin chops are usually a few dollars cheaper per pound than frenched rib chops and air fry exactly the same way.",
      "Skip store-bought tzatziki and make a 30-second dip from plain yogurt, a little grated garlic, lemon, and salt — same vibe for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "lamb-chops",
        "swap": "pork-chop — air fry at 400F to 145F internal; milder and noticeably cheaper",
        "savings": "~$0.75/chop"
      },
      {
        "forIngredientId": "rosemary-fresh",
        "swap": "1 tsp dried rosemary or italian-seasoning straight from the spice rack",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "tzatziki",
        "swap": "plain greek-yogurt mixed with garlic and lemon",
        "savings": "~$0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 32,
      "carbs": 4,
      "fat": 30,
      "fiber": 1
    },
    "emoji": "🍖",
    "accentColor": "bg-red-100",
    "cuisine": "Mediterranean",
    "tags": [
      "air-fryer",
      "no-stove",
      "lamb",
      "date-night",
      "high-protein",
      "mediterranean",
      "gluten-free",
      "quick",
      "low-carb"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 10,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-lamb-kofta-kebabs",
    "name": "Air Fryer Lamb Kofta Kebabs",
    "description": "Spiced ground lamb mixed with cumin, allspice, fresh parsley and mint, hand-shaped into juicy kebabs that the air fryer browns like a grill. Serve with a quick lemony tahini drizzle and warm pita for a dinner that tastes like a trip abroad on a dorm budget. Inspired by a popular air-fryer lamb-kofta trend.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-lamb",
        "quantity": 4
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "grated and squeezed dry"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced, for the kofta"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 3,
        "note": "finely chopped"
      },
      {
        "ingredientId": "mint-fresh",
        "quantity": 2,
        "note": "finely chopped"
      },
      {
        "ingredientId": "cumin",
        "quantity": 2
      },
      {
        "ingredientId": "allspice",
        "quantity": 1
      },
      {
        "ingredientId": "coriander",
        "quantity": 1
      },
      {
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "to brush the kofta"
      },
      {
        "ingredientId": "tahini",
        "quantity": 3,
        "note": "for the sauce"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced, for the sauce"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced, for the tahini sauce"
      },
      {
        "ingredientId": "pita",
        "quantity": 4,
        "note": "to serve"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "In a bowl, combine the ground lamb, grated onion (squeeze out the liquid first so the kofta hold together), minced garlic, chopped parsley and mint, cumin, allspice, coriander, paprika, cinnamon, salt and pepper. Mix with your hands just until blended, don't overwork it or the kebabs turn dense.",
      "Divide into 8 portions and shape each into a fat sausage about 4 inches long. Press firmly so they hold together, then chill 10 minutes if you have time (firmer kofta brown better). Lightly brush all over with the olive oil.",
      "Preheat the air fryer to 400F for 3 minutes. Arrange the kofta in a single layer with space between them, working in 2 batches if needed so they brown instead of steam.",
      "Air fry at 400F for 8 minutes, then flip each kofta with tongs and cook 4 to 6 minutes more until deeply browned and cooked through. Check the thickest one with a thermometer: ground lamb is safe at an internal temperature of 160F.",
      "While they cook, make the sauce: stir the tahini with the juice of the lemon, the extra minced garlic clove, a pinch of salt, and 2 to 3 tablespoons of water until smooth and pourable. Add a splash more water if it's too thick.",
      "Warm the pita in the air fryer for about 1 minute at 350F while the kofta rest for a few minutes.",
      "Pile the kofta onto the warm pita, drizzle with the lemon-tahini sauce, scatter the optional parsley on top, and serve."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Ground lamb is the splurge here, stretch it by mixing in half a can of mashed chickpeas or a few tablespoons of breadcrumbs; you'll get 10 kofta instead of 8 for the same money.",
      "Skip fresh herbs you don't have: 1 tsp each of dried parsley and mint (or a spoon of za'atar) covers the flavor for pennies.",
      "Buy a whole lemon instead of bottled juice: you get juice for the sauce plus zest to brighten the meat, and it's cheaper per use."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-lamb",
        "swap": "Use ground beef or ground turkey, same spices, milder flavor, cooks the same way (cook ground beef/turkey to 165F).",
        "savings": "Saves about $0.60 to $0.85 per serving"
      },
      {
        "forIngredientId": "tahini",
        "swap": "Use plain greek yogurt thinned with lemon for a tzatziki-style drizzle.",
        "savings": "Roughly the same cost, creamier result"
      },
      {
        "forIngredientId": "pita",
        "swap": "Serve over rice or in a regular tortilla instead.",
        "savings": "Saves about $0.25 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 24,
      "carbs": 30,
      "fat": 23,
      "fiber": 3
    },
    "emoji": "🍢",
    "accentColor": "bg-red-100",
    "cuisine": "Middle Eastern",
    "tags": [
      "air-fryer",
      "no-stove",
      "high-protein",
      "middle-eastern",
      "lamb",
      "dinner",
      "kebabs",
      "tahini",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 14,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-juicy-meatballs",
    "name": "Air Fryer Juicy Meatballs",
    "description": "A beef-and-pork blend that turns out crisp and browned outside, tender and juicy inside thanks to a milk-soaked breadcrumb panade. Roll a big batch on Sunday and stash them for pasta, subs, and rice bowls all week. Inspired by Holly Nilsson (Spend With Pennies) (https://www.spendwithpennies.com/juicy-air-fryer-meatballs/).",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 3
      },
      {
        "ingredientId": "ground-pork",
        "quantity": 8
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.5
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "parmesan",
        "quantity": 3
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1.5
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "marinara",
        "quantity": 1,
        "optional": true,
        "note": "for serving / tossing"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "In a large bowl, soak the breadcrumbs in the milk for 2-3 minutes until mushy. This panade is the secret to juicy, never-dry meatballs.",
      "Add the ground beef, ground pork, egg, parmesan, minced garlic, italian seasoning, onion powder, garlic powder, salt, and pepper. Mix gently with your hands just until combined; overmixing makes them tough, so stop as soon as it holds together.",
      "Roll into about 16 golf-ball-sized meatballs (roughly 1.5 inches). Lightly brush or spray them with the olive oil so they brown instead of drying out.",
      "Preheat the air fryer to 380F for 2-3 minutes. Arrange the meatballs in a single layer with space between them so the convection air browns rather than steams them; work in 2 batches if your basket is small.",
      "Air fry at 380F for 12-14 minutes, gently shaking or rolling the basket halfway through so they brown on all sides.",
      "Check the centers with a meat thermometer: the beef-pork blend is safe at an internal temp of 160F. Add 1-2 more minutes if any are still pink inside.",
      "Toss with warm marinara and top with chopped parsley to serve now, or cool completely and freeze in a bag for fast meal-prep all week."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 14,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy ground beef and ground pork on the family-size tray and freeze what you don't roll today. Per-pound it's far cheaper than the small packs.",
      "Skip fresh herbs in the mix. Dried italian seasoning costs pennies and does the same flavor job. Fresh parsley is only a garnish.",
      "Make a double batch and freeze half raw or cooked. Cooked meatballs reheat in the air fryer at 350F for 4-5 minutes, so a week of dinners is basically free labor now."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-pork",
        "swap": "Skip the pork and use 4 servings of ground beef total, or swap in ground turkey for a leaner, cheaper batch.",
        "savings": "~$1.20"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Crush up a slice of sandwich bread or use panko you already have.",
        "savings": "~$0.20"
      },
      {
        "forIngredientId": "marinara",
        "swap": "Use plain tomato sauce with a pinch of italian seasoning, or skip it for rice bowls.",
        "savings": "~$0.57"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 28,
      "carbs": 9,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "meal-prep",
      "high-protein",
      "freezer-friendly",
      "beef",
      "pork",
      "italian-american",
      "batch-cook"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 13,
    "airFryerTemperatureF": 380,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-mongolian-beef",
    "name": "Air Fryer Mongolian Beef",
    "description": "Crispy-edged flank steak strips tossed in a glossy, sweet-savory soy and brown sugar glaze that tastes just like the P.F. Chang's classic for a fraction of the price. A cornstarch coat plus air fryer convection delivers deep-fried crunch with only a light oil mist, and the glaze comes together entirely in the microwave, so dinner is ready in about 20 minutes with no stovetop. Inspired by a popular P.F. Chang's copycat air-fryer trend.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "flank-steak",
        "quantity": 12,
        "note": "sliced thin against the grain into 2-inch strips"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "3 tbsp to coat the beef, 1 tbsp for the sauce slurry"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "light mist for crisp edges"
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 3
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 1,
        "note": "for color and depth"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "to thin the glaze"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "cut into 1-inch pieces"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "cooked as a microwave side"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Slice the flank steak thin against the grain into 2-inch strips, then toss in a bowl with 3 tbsp cornstarch until every piece is lightly and evenly coated with no dry powder left. Let it sit 5 minutes so the coating sets.",
      "Start the rice on the side: combine 1 cup dry jasmine rice with 1.5 cups water in a microwave-safe bowl, cover, and microwave about 12-15 minutes until the water is absorbed and the rice is fluffy. Leave covered to steam while the beef cooks.",
      "Mist the air fryer basket with cooking spray, lay the beef strips in a single layer (work in 2 batches so they crisp instead of steam), and lightly spray the tops. Air fry at 400F for 12 minutes, shaking the basket at the 6-minute mark, until the edges are deeply crisp. The beef should reach at least 145F internal (medium); check the thickest strip with an instant-read thermometer.",
      "While the beef cooks, make the glaze: stir together the low-sodium soy, dark soy, brown sugar, minced garlic, ginger, rice vinegar, sesame oil, and the 1/4 cup water in a microwave-safe bowl. In a small cup, mix the remaining 1 tbsp cornstarch with a splash of cold water to make a smooth slurry.",
      "Microwave the sauce 60-90 seconds until bubbling, whisk in the cornstarch slurry, then microwave another 30-45 seconds until it thickens into a glossy glaze that coats the back of a spoon.",
      "Add the crispy beef and scallion pieces to the warm glaze and toss until every strip is shiny and coated; the residual heat will wilt the scallions just enough.",
      "Serve over the jasmine rice, spoon over any extra glaze, and finish with a sprinkle of sesame seeds if using. Eat right away while the edges are still crisp."
    ],
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Flank steak is the priciest part, so watch for it on sale and slice it thin against the grain to stretch a smaller piece across two filling servings.",
      "Skip pricey takeout sauce packets: pantry soy, brown sugar, and garlic make a glaze that costs pennies and tastes just like the restaurant version.",
      "Cook your rice in the microwave while the beef air fries so you only run one appliance and dinner is done in one 20-minute window."
    ],
    "substitutions": [
      {
        "forIngredientId": "flank-steak",
        "swap": "sirloin-steak, sliced thin (or chicken-thighs for an even cheaper twist)",
        "savings": "saves about $0.15/oz vs flank"
      },
      {
        "forIngredientId": "low-sodium-soy",
        "swap": "regular soy-sauce",
        "savings": "saves about $0.02/tbsp"
      },
      {
        "forIngredientId": "dark-soy",
        "swap": "an extra tbsp of regular soy-sauce plus a pinch more brown sugar for color",
        "savings": "uses what you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 42,
      "carbs": 52,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🥩",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "cheaper-than-takeout",
      "high-protein",
      "copycat",
      "beef",
      "20-minute",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-gnocchi-popcorn",
    "name": "Air Fryer Crispy Gnocchi Popcorn",
    "description": "Shelf-stable gnocchi tossed straight from the pack with oil and seasoning, then air fried into golden little nuggets that crunch like chips outside and stay pillowy inside. No boiling, almost zero cleanup, and dangerously snackable on their own or scattered over a salad like fancy croutons. Inspired by Balle Hurns (@ballehurns) on TikTok (https://www.tiktok.com/@ballehurns/video/7424591190768635182).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "gnocchi",
        "quantity": 2
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "note": "toss on right out of the fryer so it melts and clings"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "for a little heat"
      }
    ],
    "steps": [
      "Tip the dry shelf-stable gnocchi straight from the pack into a bowl — no boiling needed — and break apart any pieces stuck together.",
      "Add the olive oil, garlic powder, italian seasoning, salt, and pepper. Toss with your hands until every piece is glossy and evenly coated.",
      "Preheat the air fryer to 350F for 2-3 minutes, then spread the gnocchi in a single flat layer in the basket so they crisp instead of steam (work in two batches if your basket is small).",
      "Air fry at 350F for 16-20 minutes total, pausing every 5-6 minutes to shake the basket so they brown on all sides.",
      "They're done when deep golden and crunchy outside but still soft inside — taste one; for chip-crisp all the way through, add 2-3 more minutes.",
      "Tip the hot gnocchi into a bowl and immediately toss with the parmesan so it melts onto the surface and clings.",
      "Sprinkle with fresh parsley and red pepper flakes if using, and eat warm — straight up, dunked in marinara, or scattered over a salad as crunchy croutons."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A pack of shelf-stable gnocchi is one of the cheapest crunchy snacks you can make — far less per serving than a bag of chips, and it doubles as a salad topper.",
      "Skip pricey blends: plain garlic powder, salt, and pepper from your shelf already nail the flavor, so you only buy what you don't have.",
      "Make a double batch and store cooled leftovers airtight — re-crisp 2-3 minutes at 350F in the air fryer instead of buying snacks."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable-oil",
        "savings": "saves about $0.22 per batch"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "nutritional-yeast for a dairy-free, vegan cheesy hit",
        "savings": "roughly the same cost, makes it vegan"
      },
      {
        "forIngredientId": "italian-seasoning",
        "swap": "a mix of garlic-powder and dried oregano you already have",
        "savings": "saves about $0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 9,
      "carbs": 52,
      "fat": 11,
      "fiber": 3
    },
    "emoji": "🍿",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian-inspired",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "no-boil",
      "vegetarian",
      "dorm-friendly",
      "crispy",
      "crouton"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-pasta-chips",
    "name": "Air Fryer Crispy Pasta Chips",
    "description": "Bowtie pasta tossed in olive oil, parmesan and Italian seasoning, then air fried until the ridges turn into golden, dippable chip crunch — all from one cheap pantry box. Serve hot with warm marinara for the viral snack that feels way fancier than it costs. Inspired by Yumna Jawad (Feel Good Foodie) on TikTok (https://feelgoodfoodie.net/recipe/pasta-chips/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "pasta",
        "quantity": 2,
        "note": "bowtie (farfalle) holds the seasoning and crisps with the most ridges"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "parmesan",
        "quantity": 4
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 2
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "marinara",
        "quantity": 0.5,
        "note": "warm dipping sauce"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "garnish for a little heat"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Boil the bowtie pasta in well-salted water to just al dente (about 1 minute shy of the box time), then drain thoroughly — shake off every drop, because wet pasta steams instead of crisping.",
      "While still warm, toss the drained pasta in a bowl with the olive oil, parmesan, Italian seasoning, garlic powder, salt and pepper until every piece is evenly coated.",
      "Preheat the air fryer to 400F. Add the pasta in a single, non-overlapping layer (work in 2 batches if your basket is small) so the hot air reaches every chip.",
      "Air fry at 400F for 12-15 minutes, shaking the basket every 4-5 minutes so they color evenly and don't stick together.",
      "They're done when deeply golden and crunchy — taste one once cooled a few seconds: it should snap, not bend. If still chewy, give it 2-3 more minutes.",
      "Tip the chips into a bowl and dust with a little extra parmesan; scatter red pepper flakes and fresh parsley if using.",
      "Warm the marinara in the microwave for 30-45 seconds (no stove needed) and serve alongside for dipping. Best eaten fresh while crunchy."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 22,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One box of dry pasta is usually under $1.50 and makes several batches — one of the cheapest crunchy snacks you can make.",
      "Skip pricey shaker tubs and use the cheaper grated parmesan bag; a little goes a long way coating the chips.",
      "Make a double batch and store cooled chips in an airtight container 2-3 days — re-crisp 2 minutes at 350F before serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable-oil",
        "savings": "Saves about $0.20 per batch and crisps just as well"
      },
      {
        "forIngredientId": "italian-seasoning",
        "swap": "a mix of oregano + garlic-powder you already have",
        "savings": "Skips buying a blend you may not use elsewhere"
      },
      {
        "forIngredientId": "marinara",
        "swap": "tomato-sauce with a pinch of italian-seasoning",
        "savings": "Cuts the dip cost by roughly half"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 12,
      "carbs": 45,
      "fat": 11,
      "fiber": 3
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "viral",
      "pantry",
      "vegetarian",
      "cheap",
      "dippable",
      "crunchy"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 14,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-baked-feta-tomato-pasta",
    "name": "Air Fryer Baked Feta & Tomato Pasta",
    "description": "A whole block of feta roasts with juicy tomatoes, garlic, and olive oil until the tomatoes burst and the cheese turns into a creamy, jammy sauce you smash and toss with hot pasta — one vessel, almost zero skill, big payoff. It's the cozy, crowd-pleasing dinner that famously sold out feta across the internet. Inspired by Nathan Anthony (Bored of Lunch); original feta pasta by Jenni Häyrinen (https://boredoflunch.com/recipes/air-fryer-sundried-tomato-feta-pasta/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "feta",
        "quantity": 6,
        "note": "one ~6-7 oz block; sit it whole in the center (this is ~1.5 cups crumbled)"
      },
      {
        "ingredientId": "tomato",
        "quantity": 4,
        "note": "cherry or grape tomatoes are ideal — use ~1 pint; halve any large ones so they burst"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "drizzle generously over the feta and tomatoes"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "smashed or thinly sliced"
      },
      {
        "ingredientId": "pasta",
        "quantity": 2,
        "note": "penne or fusilli; cooked while the feta roasts"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "optional": true,
        "note": "torn over the top to finish"
      }
    ],
    "steps": [
      "In a silicone liner or small oven-safe dish that fits your air fryer basket, pile the tomatoes and smashed garlic around the edges and set the whole block of feta in the center. Drizzle everything with the olive oil, then sprinkle on the oregano, red pepper flakes, salt, and pepper.",
      "Air fry at 350°F for 18-20 minutes, until the tomatoes have blistered and burst and the feta is soft, glossy, and lightly golden at the edges. No flipping needed, but gently shake the dish once around the 12-minute mark to roll the tomatoes.",
      "While the feta roasts, cook the pasta: add it to a microwave-safe bowl, cover with water by about an inch, add a pinch of salt, and microwave 8-12 minutes until tender, stirring halfway. Reserve about 1/4 cup of the starchy pasta water, then drain.",
      "Carefully pull the hot dish from the air fryer — it'll be bubbly. Use a fork to smash the softened feta into the burst tomatoes and garlic, swirling it all into a creamy, jammy sauce.",
      "Add the drained pasta straight into the dish and toss to coat, splashing in a little reserved pasta water until the sauce loosens and clings silkily to every piece.",
      "Taste and adjust salt and pepper, then divide between two bowls and finish with torn fresh basil. Serve warm."
    ],
    "totalTimeMinutes": 28,
    "prepTimeMinutes": 6,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a block of feta packed in brine instead of pre-crumbled — it's cheaper per ounce, melts into a far creamier sauce, and the leftover brine keeps any unused feta fresh for weeks.",
      "Cherry tomatoes are sweetest and cheapest in summer; off-season, swap in a few quartered regular tomatoes or a handful from a can of crushed tomatoes you already have.",
      "Cook the pasta in the microwave in the same bowl you'll eat from to skip a pot — less cleanup and no stove needed, perfect for a dorm."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "a 4 oz log of goat cheese for an even creamier, tangier sauce",
        "savings": "similar cost, more luxe texture"
      },
      {
        "forIngredientId": "tomato",
        "swap": "a few spoonfuls of jarred sun-dried tomatoes for a richer, more intense flavor",
        "savings": "uses a pantry jar instead of fresh produce"
      },
      {
        "forIngredientId": "pasta",
        "swap": "gnocchi or any short pasta shape you have on hand",
        "savings": "use whatever's cheapest in your cupboard"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 22,
      "carbs": 58,
      "fat": 28,
      "fiber": 4
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Mediterranean",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "one-vessel",
      "viral",
      "pasta",
      "dinner",
      "5-ingredient",
      "dorm-friendly",
      "mediterranean"
    ],
    "crispinessLevel": "soft",
    "airFryerTimeMinutes": 20,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-halloumi-fries-hot-honey",
    "name": "Air Fryer Halloumi Fries with Hot Honey",
    "description": "Squeaky, salty halloumi cut into chunky sticks, crusted in golden panko and drizzled with sweet-and-spicy hot honey — a craveable meat-free snack for a fraction of the pub price. The cheese turns gloriously melty inside while the crumb crisps in the dry heat, no deep-frying required. Inspired by Ayeh Manfre (@cookingwithayeh) on Instagram (https://cookingwithayeh.com/halloumi-fries/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "halloumi",
        "quantity": 1,
        "note": "8 oz block, patted very dry and cut into thick fry-sized sticks (about a dozen)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "for the first dredge"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, for the egg wash"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.75,
        "note": "for the crispy coating"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "note": "mixed into the flour"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1,
        "note": "mixed into the flour"
      },
      {
        "ingredientId": "oregano",
        "quantity": 0.5,
        "note": "dried, mixed into the flour"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "in the flour; go easy since halloumi is already salty"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "to coat the breaded sticks and the basket"
      },
      {
        "ingredientId": "honey",
        "quantity": 3,
        "note": "base of the hot honey"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 2,
        "note": "stir into warm honey to taste"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "note": "for extra heat in the hot honey",
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "note": "chopped, to garnish",
        "optional": true
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.25,
        "note": "cut into wedges for squeezing",
        "optional": true
      }
    ],
    "steps": [
      "Pat the halloumi block completely dry with paper towels, then slice into thick, sturdy fry-shaped sticks about half an inch wide (roughly a dozen). Keep them chunky — sticks cut too thin can leak and lose their shape. Dry cheese equals a crispier crust.",
      "Set up three shallow bowls: flour stirred with the paprika, garlic powder, oregano, and pepper; the beaten egg; and the panko. Roll each stick in seasoned flour, dip in egg, then press firmly into the panko to coat all sides.",
      "Lightly spritz the air fryer basket with cooking spray. Lay the breaded sticks in a single layer without touching, then spray the tops generously so they brown evenly.",
      "Air fry at 400F for 6 minutes. Flip each stick, spray again, and air fry 2 to 3 minutes more until the crust is deep golden and crisp and the cheese is hot and just softened inside (about 130 to 140F at the center). Don't overcook — halloumi can melt out and flatten if left too long.",
      "While they cook, make the hot honey: microwave the honey 15 to 20 seconds until runny, then stir in the hot sauce and red pepper flakes.",
      "Pile the halloumi fries on a plate, drizzle generously with the warm hot honey, and scatter chopped parsley over the top.",
      "Serve right away with lemon wedges to squeeze over — they're best hot and squeaky straight from the basket, since halloumi turns rubbery as it cools."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 13,
    "cookTimeMinutes": 9,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Halloumi is the splurge here — split the block and the recipe with a roommate so the snack costs about the price of a coffee each.",
      "No bottled hot honey needed: regular honey plus a few drops of hot sauce makes the exact same drizzle for pennies.",
      "Save leftover panko and seasoned flour in a sealed bag — they'll coat your next round of veggie fries or nuggets."
    ],
    "substitutions": [
      {
        "forIngredientId": "panko",
        "swap": "regular breadcrumbs",
        "savings": "Saves about $0.05 and you likely already have them"
      },
      {
        "forIngredientId": "hot-sauce",
        "swap": "a pinch of cayenne or chili powder stirred into the honey",
        "savings": "Uses pantry spice instead of buying hot sauce"
      },
      {
        "forIngredientId": "halloumi",
        "swap": "firm paneer cut into sticks (won't be as squeaky but crisps the same)",
        "savings": "Saves about $1 per block"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 24,
      "carbs": 34,
      "fat": 22,
      "fiber": 1
    },
    "emoji": "🧀",
    "accentColor": "bg-amber-100",
    "cuisine": "Cypriot / Mediterranean",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "snack",
      "halloumi",
      "hot-honey",
      "mediterranean",
      "shareable",
      "high-protein"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-bacon-wrapped-jalapeno-poppers",
    "name": "Air Fryer Bacon-Wrapped Jalapeno Poppers",
    "description": "Halved jalapenos loaded with molten cheddar cream cheese and hugged in shatteringly crisp bacon — spicy, smoky, and impossibly satisfying for a snack that looks way fancier than it is. A moderate air fryer temp renders the bacon crisp while the peppers go tender and the filling turns gooey. Adapted from the classic bacon-wrapped jalapeno popper, reimagined for the air fryer by the Waivy Kitchen.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jalapeno",
        "quantity": 4,
        "note": "halved lengthwise, seeds and ribs scraped out"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 6,
        "note": "softened"
      },
      {
        "ingredientId": "cheese",
        "quantity": 0.5,
        "note": "shredded cheddar, stirred into the filling"
      },
      {
        "ingredientId": "bacon",
        "quantity": 4,
        "note": "each slice cut in half to make 8 strips"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 0.5,
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "thinly sliced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Slice 4 jalapenos in half lengthwise and scrape out the seeds and white ribs with a spoon (leave a few ribs if you like extra heat). Wear gloves or wash your hands well afterward.",
      "In a small bowl, stir together the softened cream cheese, shredded cheddar, garlic powder, and smoked paprika until smooth and combined.",
      "Spoon the cheese mixture into each jalapeno half, filling generously but not overflowing. Cut each bacon slice in half and wrap one half-strip snugly around each filled pepper, tucking the seam underneath.",
      "Preheat the air fryer to 350F. Arrange the poppers cheese-side up in a single layer with space between them so the bacon crisps evenly (work in batches if needed).",
      "Air fry at 350F for 12-14 minutes, until the bacon is deeply browned, crisp, and fully rendered and the filling is bubbling. No flip needed.",
      "If the bacon needs more crunch, add 1-2 minutes, watching closely so the filling doesn't blow out. Let the poppers rest 3-4 minutes — the filling is molten and burns.",
      "Sprinkle with sliced scallion and serve warm with ranch or salsa for dipping."
    ],
    "totalTimeMinutes": 27,
    "prepTimeMinutes": 13,
    "cookTimeMinutes": 14,
    "difficulty": "easy",
    "dietTags": [
      "gluten-free",
      "high-protein"
    ],
    "cheapTips": [
      "Buy jalapenos loose by the piece instead of pre-bagged — they're often just pennies each and you only need a few.",
      "A block of cream cheese is far cheaper per ounce than tubs or spreads, and it pipes into the peppers more neatly.",
      "Cut each bacon slice in half so one package wraps twice as many poppers — half a strip is all you need for full coverage."
    ],
    "substitutions": [
      {
        "forIngredientId": "cheese",
        "swap": "Use shredded mozzarella or pepper-jack for an extra-melty, spicier pull.",
        "savings": "About the same cost"
      },
      {
        "forIngredientId": "bacon",
        "swap": "Use turkey bacon for a leaner, cheaper wrap (it crisps a touch faster, so check at 10 min).",
        "savings": "Saves ~$0.13 per slice"
      },
      {
        "forIngredientId": "cream-cheese",
        "swap": "Swap in plain Greek yogurt mixed with extra cheddar for a higher-protein, tangier filling.",
        "savings": "Comparable cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 280,
      "protein": 11,
      "carbs": 5,
      "fat": 24,
      "fiber": 1
    },
    "emoji": "🌶️",
    "accentColor": "bg-red-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "tex-mex",
      "spicy",
      "party",
      "bacon",
      "cheesy",
      "gluten-free",
      "low-carb",
      "6-ingredient"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 13,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-blooming-onion",
    "name": "Air Fryer Blooming Onion",
    "description": "A steakhouse showstopper for a few bucks: one big onion cut into petals, dredged in seasoned flour, and air fried until every crispy petal peels apart over a tangy horseradish dipping sauce. No deep fryer and no oil-splatter mess, just dramatic, crunchy, shareable wow. Inspired by a popular air-fryer blooming-onion trend.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "the largest sweet or yellow onion you can find"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "for the seasoned dredge"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "beaten with the milk for the wash"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 1.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 1
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 6,
        "note": "spritz the petals so they brown evenly"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 4,
        "note": "base of the dipping sauce"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2
      },
      {
        "ingredientId": "horseradish",
        "quantity": 1
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Peel the onion and slice off about 1/2 inch from the top, leaving the root end intact so it holds together. Sit it cut-side down and make 12 to 16 vertical cuts from about 1/2 inch above the root straight down, like wedges. Flip it over and gently spread the petals apart with your fingers; soaking it in cold water for 5 minutes helps it bloom.",
      "In one bowl, whisk the flour with the paprika, garlic powder, onion powder, cayenne, salt, and pepper. In a second bowl, beat the eggs with the milk.",
      "Set the onion cut-side up. Spoon the egg-milk wash over and into the petals, then sprinkle the seasoned flour all over, working it down between every petal. Repeat the egg-then-flour coating once more for a thick, crunchy crust.",
      "Mist the whole onion generously with cooking spray, getting into the gaps so no dry flour pockets remain.",
      "Place the onion cut-side up in the air fryer basket. Air fry at 350F for 22 to 25 minutes, spritzing with more cooking spray and rotating the basket once around the 12-minute mark, until the petals are deep golden and crisp and the onion is tender at the center when pierced.",
      "While it cooks, stir together the mayonnaise, ketchup, horseradish, and a pinch each of paprika and cayenne for a tangy dipping sauce.",
      "Let the onion rest 2 minutes so the crust crisps as it cools, garnish with chopped parsley if using, and serve hot with the sauce in the center to peel and dip."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One onion under a dollar feeds the whole table, far cheaper than the $10 steakhouse version, and you already own most of the spices.",
      "No horseradish? A teaspoon of mustard or a few drops of hot sauce in the mayo-ketchup mix gives the same tangy kick for nearly free.",
      "Don't toss the scraps: the little inner onion bits you trim out can go into tomorrow's eggs, fried rice, or pasta sauce."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use water or any plant milk for the egg wash; it works the same and saves a trip to the store.",
        "savings": "~$0.14"
      },
      {
        "forIngredientId": "horseradish",
        "swap": "Swap in 1 tsp mustard or a squeeze of hot sauce for the dipping sauce tang.",
        "savings": "~$0.20"
      },
      {
        "forIngredientId": "cooking-spray",
        "swap": "Brush on 1 tbsp vegetable oil instead of misting if you don't have spray.",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 250,
      "protein": 7,
      "carbs": 34,
      "fat": 10,
      "fiber": 3
    },
    "emoji": "🧅",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "shareable",
      "steakhouse",
      "vegetarian",
      "party",
      "crispy",
      "budget"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 24,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-balsamic-brussels-sprouts",
    "name": "Air Fryer Crispy Balsamic Brussels Sprouts",
    "description": "The side that converts Brussels sprouts haters: shaggy outer leaves go chip-crisp and caramelized in the air fryer, then everything gets tossed in a sweet-tangy balsamic-honey glaze that hits like a restaurant appetizer. Two cups of sprouts plus pantry staples make a snack you'll fight your roommates over. Inspired by a popular air-fryer Brussels-sprouts trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "brussels-sprouts",
        "quantity": 3
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1.5
      },
      {
        "ingredientId": "balsamic",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "for a little heat"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "optional": true,
        "note": "shower on top to serve"
      }
    ],
    "steps": [
      "Trim the dry stem ends off the Brussels sprouts and halve each one through the root so they hold together. Keep the loose leaves that fall off, they crisp up into the best chips. Pat everything really dry with a towel, because dry sprouts crisp and wet ones steam.",
      "In a bowl, toss the sprouts and any loose leaves with the olive oil, garlic powder, salt, and pepper until every piece is lightly coated.",
      "Preheat the air fryer to 380F for 2-3 minutes. Add the sprouts cut-side down in as even a layer as you can, working in batches if your basket is small (crowding makes them soggy).",
      "Air fry at 380F for 15-18 minutes, shaking the basket once at the halfway mark. They're done when the cut sides are deeply golden-brown and the loose leaves look like crispy chips.",
      "While they cook, stir the balsamic and honey together in a big bowl. If you want heat, add the red pepper flakes now.",
      "Tip the hot sprouts straight into the balsamic-honey bowl and toss fast, the residual heat thickens the glaze into a sticky coat in about 30 seconds.",
      "Pile into bowls, shower with the optional parmesan, and eat right away while they're at peak crisp. Taste and add a pinch more salt if needed."
    ],
    "totalTimeMinutes": 28,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 18,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy whole Brussels sprouts and halve them yourself instead of a pricier microwave-steam pack, it only takes about 5 minutes and stretches further.",
      "Skip the parmesan and this is fully vegan, the balsamic-honey glaze carries all the flavor on its own.",
      "One small bottle of balsamic lasts for months and you only need a couple tablespoons per batch, so the cost per serving stays tiny."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "maple-syrup or brown sugar for a vegan glaze",
        "savings": "uses pantry staples you likely already have"
      },
      {
        "forIngredientId": "balsamic",
        "swap": "apple-cider-vinegar plus a pinch of extra sugar",
        "savings": "saves if you don't own balsamic"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable-oil or cooking spray",
        "savings": "vegetable oil is about 5x cheaper per tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 6,
      "carbs": 24,
      "fat": 8,
      "fiber": 6
    },
    "emoji": "🥬",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "side",
      "snack",
      "5-ingredient",
      "budget",
      "caramelized",
      "balsamic"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 17,
    "airFryerTemperatureF": 380,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-bacon-egg-biscuit-bombs",
    "name": "Air Fryer Bacon and Egg Biscuit Bombs",
    "description": "Pillowy canned biscuit dough wrapped around fluffy scrambled egg, crispy bacon, and a melty cube of cheddar, then air fried into golden handheld breakfast balls with a molten cheesy center. Every diner-breakfast flavor in one fork-free package. Inspired by the popular air-fryer breakfast biscuit-bomb trend.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "canned-biscuits",
        "quantity": 4,
        "note": "4 large biscuits, one per bomb"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "2 for the scramble filling, 1 beaten for the egg wash"
      },
      {
        "ingredientId": "bacon",
        "quantity": 4
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 2,
        "note": "cut into 4 small cubes, one per bomb"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "for the microwave scramble"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "a splash to keep the eggs soft"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped over the top to serve"
      }
    ],
    "steps": [
      "Air fry the bacon first: lay the 4 slices in the basket and cook at 375F for 7-9 minutes until crisp, flipping once halfway. Drain on a paper towel, then chop into bits.",
      "Make a quick scramble in a microwave-safe mug: whisk 2 eggs with the milk, the butter, the salt, and the pepper. Microwave in 30-second bursts (about 60-90 seconds total), stirring between each, until just set and soft (eggs reach 160F). Fold in the bacon bits and let cool a few minutes so the filling is warm, not hot.",
      "Flatten each biscuit into a 4-inch disc with your fingers. Spoon a heaping tablespoon of the egg-bacon scramble into the center and press a cheddar cube on top.",
      "Pull the dough edges up and over the filling, pinch firmly to seal into a smooth ball, and set seam-side down. Beat the remaining egg and brush each bomb all over with the egg wash so it browns evenly.",
      "Lightly grease the basket and arrange the bombs seam-side down with space between them. Air fry at 325F for 8 minutes, then gently flip and cook 4-6 minutes more until deep golden brown and the dough is fully cooked through; an instant-read thermometer should read at least 165F in the center.",
      "Let rest 2-3 minutes so the molten cheese sets slightly. Sprinkle with chives if using and serve warm."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 18,
    "difficulty": "medium",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "One tube of canned biscuits is usually under $2 and yields 8 biscuits — double the filling to make 8 bombs and feed four for cheap.",
      "Buy a block of cheddar instead of pre-shredded: it's cheaper per ounce, melts better, and cubes tuck inside easily.",
      "No bacon? Crumble in a leftover cooked sausage patty or a slice of chopped ham — any cooked diner-style protein works."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey-bacon or chopped ham",
        "savings": "Turkey bacon runs about $0.45/slice vs $0.58 and is leaner"
      },
      {
        "forIngredientId": "cheddar-block",
        "swap": "pepper-jack or American singles cut into cubes",
        "savings": "American singles are ~$0.25/slice and melt extra gooey"
      },
      {
        "forIngredientId": "canned-biscuits",
        "swap": "crescent-rolls pinched into balls",
        "savings": "Same price (~$0.31/piece) and an even flakier shell"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 21,
      "carbs": 32,
      "fat": 25,
      "fiber": 1
    },
    "emoji": "🧈",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "handheld",
      "high-protein",
      "meal-prep",
      "dorm-friendly",
      "cheesy"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 14,
    "airFryerTemperatureF": 325,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-cinnamon-sugar-biscuit-donuts",
    "name": "Air Fryer Cinnamon Sugar Biscuit Donuts",
    "description": "Warm, flaky bakery-style donuts made from a can of biscuits, punched out and air-fried golden in minutes, then tumbled in melted butter and cinnamon sugar. You get fluffy donuts AND poppable donut holes for pennies each, the ultimate cheap dorm flex. Inspired by a viral canned-biscuit air-fryer donut trend.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "canned-biscuits",
        "quantity": 8,
        "note": "1 can of large flaky biscuits"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "to keep dough from sticking"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "melted, for tossing"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "for the cinnamon sugar coating"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "stirred into the sugar"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "optional": true,
        "note": "optional dusting instead of cinnamon sugar"
      }
    ],
    "steps": [
      "Pop open the can and separate the 8 biscuits onto a plate. Use a clean bottle cap or small cup to punch a hole out of the center of each biscuit, and save the little rounds, those are your donut holes.",
      "Lightly spritz both sides of each donut and hole with cooking spray, and spritz the air fryer basket too so nothing sticks. Arrange the donuts in a single layer with space between them; cook in batches if needed and don't crowd them.",
      "Air fry the donuts at 350F for 5-6 minutes, flipping once halfway through, until puffed, golden brown, and cooked through with no raw, doughy center (split one open to check). Air fry the donut holes about 3-4 minutes at 350F, shaking the basket once, until golden and cooked through.",
      "While they cook, melt the butter in a bowl (microwave 20-30 seconds). In a second bowl, stir the white sugar and cinnamon together until evenly combined.",
      "Brush or dip each warm donut and hole in the melted butter so it's lightly coated all over.",
      "Roll the buttered donuts and holes in the cinnamon sugar until fully covered, then serve immediately while warm and flaky. For a snowy finish, dust with the optional powdered sugar instead."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One can of biscuits is usually under $3 and makes 8 donuts plus 8 donut holes, that's pennies per donut and way cheaper than a bakery.",
      "Skip the donut cutter: a clean bottle cap, shot glass, or water-bottle cap punches perfect center holes for free.",
      "No cinnamon? Plain sugar, a powdered-sugar dusting, or a smear of jam or Nutella all work, use whatever's already in your dorm stash."
    ],
    "substitutions": [
      {
        "forIngredientId": "canned-biscuits",
        "swap": "Use canned cinnamon rolls and skip the cinnamon sugar, the icing is built in",
        "savings": "About the same price, fewer steps"
      },
      {
        "forIngredientId": "butter",
        "swap": "Brush with a thin spritz of cooking spray or a little vegetable oil so the sugar sticks",
        "savings": "Saves ~$0.50 and a few calories"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Brown sugar gives a deeper, caramel-y coating",
        "savings": "Roughly the same cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 4,
      "carbs": 42,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🍩",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "dessert",
      "dorm-friendly",
      "cheap",
      "5-ingredient",
      "sweet",
      "quick",
      "kid-friendly"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 6,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-cinnamon-churros",
    "name": "Air Fryer Cinnamon Churros",
    "description": "Crackly, ridged churros rolled in cinnamon sugar with a warm chocolate dip - golden and crunchy on the outside, soft inside, and not a vat of frying oil in sight. They look bakery-fancy but come together with pantry basics in one tiny kitchen. Inspired by a viral air-fryer churro trend on TikTok.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "for the choux dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "cut into pieces so it melts fast"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "all-purpose"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "beaten, added a little at a time"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "for the cinnamon-sugar coating"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "for the coating"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "optional": true,
        "note": "in the dough for flavor"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "to coat the piped logs so they crisp"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for the dipping sauce"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.25,
        "optional": true,
        "note": "warmed for the chocolate dip"
      }
    ],
    "steps": [
      "Make the dough in the microwave: combine 1 cup water, 4 tbsp butter, and the 1/4 tsp salt in a microwave-safe bowl and microwave in 30-second bursts until the butter is melted and the mixture is steaming hot, about 1.5-2 minutes total.",
      "Dump in 1 cup flour all at once and stir hard with a spoon until it forms a smooth, thick ball that pulls away from the bowl. Let it cool 5 minutes (so it won't scramble the eggs), then beat in the 2 eggs a little at a time, plus the vanilla, until you have a glossy, pipeable paste.",
      "Spoon the dough into a piping bag or zip-top bag fitted with a star tip. Snip the corner and pipe 4-5 inch ridged logs onto parchment, cutting the ends with scissors. Mist all over generously with cooking spray - the oil is what crisps the ridges.",
      "Air fry at 350F for 10 minutes, then gently flip and air fry another 2-4 minutes until deep golden and firm with crisp, crackly ridges (work in batches so they aren't crowded). They should sound hollow when tapped and feel set, not doughy - total about 12-14 minutes per batch.",
      "While they cook, stir 4 tbsp sugar with 2 tsp cinnamon on a plate. Roll the hot churros straight from the basket in the cinnamon sugar so it sticks.",
      "For the dip, combine the chopped dark chocolate and 1/4 cup heavy cream in a mug and microwave 20-30 seconds, then stir smooth. Serve the warm churros alongside for dunking."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 14,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "No piping bag? Use a zip-top sandwich bag with the corner snipped - for ridges, wedge a star-shaped decorating tip in the hole, or just pipe plain logs (still delicious).",
      "Skip the chocolate dip to save money - cinnamon-sugar churros are a complete snack on their own and the coating costs only pennies.",
      "Buy store-brand flour and butter; this whole batch runs under $5 total and makes a big pile, way cheaper than a churro stand."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "vegetable-oil (use 3 tbsp) for a dairy-free dough",
        "savings": "saves about $0.60"
      },
      {
        "forIngredientId": "dark-chocolate",
        "swap": "chocolate-syrup or nutella warmed in the microwave for an easier dip",
        "savings": "saves about $1.50"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole-milk for a thinner, lighter chocolate dip",
        "savings": "saves about $0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 5,
      "carbs": 34,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🥨",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish / Mexican",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "snack",
      "cinnamon",
      "churros",
      "tiktok",
      "dorm-friendly",
      "vegetarian"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-giant-single-serve-choc-chip-cookie",
    "name": "Air Fryer Giant Chocolate Chip Cookie for One",
    "description": "One bowl, no mixer, no chilling — just a warm, golden personal cookie with crisp edges and a gooey molten middle, ready before your tea even cools. It's the ultimate late-night dorm craving fix, and you get the whole thing to yourself. Inspired by a viral 'cookie for one' air-fryer trend on TikTok.",
    "mealType": "snack",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "softened, or melted and slightly cooled"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2,
        "note": "packed, for chewy edges"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5
      },
      {
        "ingredientId": "milk",
        "quantity": 0.0625,
        "note": "1 tbsp, to bind the dough in place of an egg"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 3
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.25,
        "optional": true,
        "note": "pinch on top to finish"
      }
    ],
    "steps": [
      "In a small bowl, mash the softened butter with the brown sugar and white sugar using a fork until creamy and well blended, about 30 seconds.",
      "Stir in the vanilla and milk, then add the flour, baking soda, and salt. Mix just until no dry streaks remain — don't overmix or the cookie turns cakey.",
      "Fold in the chocolate chips, reserving a few to press on top so they show after baking.",
      "Tear a square of parchment to fit your air fryer basket, set the dough on it, and press into a thick round disc about 4 inches wide, keeping the edges slightly higher than the center so the middle stays gooey.",
      "Air fry at 350F for 5 minutes. Check: the edges should be set and golden while the center still looks soft. For a firmer cookie, add 1-2 minutes (7 minutes total) — no flip needed, as the basket heats evenly.",
      "Let it rest in the basket for 3-4 minutes; it firms up as it cools while the center stays molten. Finish with a pinch of flaky sea salt and eat warm, ideally with a spoon."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "No parchment? Lightly grease a small oven-safe ramekin or the foil tray from a frozen meal and press the dough in there — just don't put bare dough straight on a hot basket.",
      "Brown sugar gives the chewiest texture, but if you only have white sugar use all white and add an extra splash of milk for moisture.",
      "Buy chocolate chips in a big bag and portion them out — a single 3-tbsp cookie costs pennies compared to a bakery cookie or delivery."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "coconut-oil or plant-butter for a dairy-free cookie",
        "savings": "use what you already have, no extra trip"
      },
      {
        "forIngredientId": "milk",
        "swap": "any milk alternative like oat-milk or almond-milk, or even water in a pinch",
        "savings": "skip buying dairy"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "a chopped chocolate bar or candy",
        "savings": "use leftover candy instead of a new bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 6,
      "carbs": 78,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "single-serve",
      "late-night",
      "no-mixer",
      "5-minute",
      "tiktok",
      "cookie",
      "dorm-friendly"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-apple-pie-bombs",
    "name": "Air Fryer Apple Pie Bombs",
    "description": "Flaky canned biscuits hug a warm, cinnamon-spiced apple filling, get air-fried until deep golden, then take a roll in melted butter and cinnamon-sugar — it's a portable hot apple pie you eat with your hands. A few pantry staples, zero frying oil, and the whole thing comes together in one dorm-friendly batch. Inspired by Amanda Rettke (i am baker) (https://iambaker.net/apple-pie-bombs/).",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "canned-biscuits",
        "quantity": 8,
        "note": "one tube; flatten each into a 3-inch round"
      },
      {
        "ingredientId": "apple",
        "quantity": 1,
        "note": "peeled and finely diced; about 1 cup"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2,
        "note": "for the filling"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "1 tsp in the filling, 1 tsp in the coating"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "thickens the apple filling so it doesn't leak"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "melted, for rolling the baked bombs"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "for the cinnamon-sugar coating"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 1,
        "optional": true,
        "note": "use just a small pinch in the filling for extra warmth"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "optional": true,
        "note": "a splash in the filling"
      }
    ],
    "steps": [
      "In a bowl, toss the diced apple with the brown sugar, 1 tsp cinnamon, the cornstarch, and (if using) a pinch of nutmeg and the vanilla until the apple is coated and glossy.",
      "Pop open the biscuit tube and flatten each biscuit with your fingers into a roughly 3-inch round. Spoon about 1 tablespoon of apple filling into the center of each.",
      "Pull the dough up and over the filling, pinch the seam firmly to seal into a ball, and set seam-side down. Lightly mist the air fryer basket with cooking spray.",
      "Arrange the bombs seam-side down in a single layer with space between them (work in 2 batches if your basket is small) and air-fry at 350F for 8 to 9 minutes, until deep golden and the dough is fully cooked through — it should read about 190F inside and have no doughy, raw center.",
      "While they cook, melt the butter in a mug in the microwave (about 30 seconds) and stir the sugar with the remaining 1 tsp cinnamon together in a small bowl.",
      "Let the bombs cool 2 minutes so the filling isn't lava-hot, then roll each one in the melted butter and toss in the cinnamon-sugar until fully coated.",
      "Serve warm. They're best the day they're made — great solo or dunked in a little vanilla yogurt or caramel."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 9,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One tube of canned biscuits makes all 8 bombs for a couple of dollars — far cheaper than store-bought hand pies and no dough-making required.",
      "Skip the fresh apple and use 1/2 cup applesauce or 2 tbsp apple butter as the filling — even cheaper and no chopping required.",
      "Brown sugar, cinnamon, sugar, and butter are pantry staples, so once you have the biscuits the per-batch cost is tiny."
    ],
    "substitutions": [
      {
        "forIngredientId": "apple",
        "swap": "1/2 cup applesauce or 2 tbsp apple butter — no peeling or dicing",
        "savings": "Saves ~$0.35 and a few minutes of prep"
      },
      {
        "forIngredientId": "canned-biscuits",
        "swap": "crescent rolls or canned cinnamon rolls (pinch the perforations shut)",
        "savings": "Similar price; cinnamon rolls add built-in icing"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "white sugar plus a tiny splash of maple syrup",
        "savings": "Uses what you already have, near $0 extra"
      }
    ],
    "estimatedNutrition": {
      "calories": 240,
      "protein": 3,
      "carbs": 38,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍎",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "snack",
      "semi-homemade",
      "handheld",
      "fall",
      "dorm-friendly"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-smores-dip",
    "name": "Air Fryer Two-Ingredient S'mores Dip",
    "description": "Melty chocolate under a blanket of marshmallows, blasted in the air fryer until the tops go torched-golden and campfire-toasty, then scooped up with graham crackers like a no-fire s'more. It's genuinely just two ingredients and under ten minutes, so it's the easiest dorm dessert you'll ever make. Inspired by Allyson (Domestic Superhero) (https://domesticsuperhero.com/air-fryer-smores-dip/).",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chocolate",
        "quantity": 3,
        "note": "broken into chunks, spread across the bottom of a small oven-safe ramekin or foil pan that fits your basket"
      },
      {
        "ingredientId": "marshmallows",
        "quantity": 1,
        "note": "mini marshmallows, or halved regular ones, packed in a single layer over the chocolate"
      },
      {
        "ingredientId": "graham-crackers",
        "quantity": 1,
        "optional": true,
        "note": "for dunking"
      }
    ],
    "steps": [
      "Lightly grease a small oven-safe ramekin or foil pan that fits inside your air fryer basket (the dip needs a vessel — do not put it straight on the basket).",
      "Break the chocolate into chunks and spread it in an even layer across the bottom of the dish.",
      "Pack the marshmallows in a tight single layer over the chocolate so the whole surface is covered.",
      "Air fry at 350F for 4 to 5 minutes, until the marshmallow tops turn golden brown and toasty. Watch the last minute closely, since they brown fast and can scorch.",
      "For a deeper campfire char, give it another 30 to 60 seconds at 350F, checking every 15 to 20 seconds so the tops don't burn.",
      "Carefully remove the dish with tongs or a mitt (it's hot) and let it rest 1 to 2 minutes so the chocolate finishes melting underneath and the dip sets enough to scoop.",
      "Serve warm with graham crackers for dunking, and eat it fast before the marshmallow firms back up."
    ],
    "totalTimeMinutes": 9,
    "prepTimeMinutes": 4,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A single chocolate bar and a bag of marshmallows make several batches, so this is one of the lowest cost-per-serving desserts you can pull off in a dorm.",
      "Use a small ramekin or a reusable foil pan instead of single-use molds — wipe it clean and reuse it for the next round.",
      "Stale or leftover marshmallows from an open bag work perfectly here since the heat re-softens them, so don't toss the bag that's been sitting around."
    ],
    "substitutions": [
      {
        "forIngredientId": "chocolate",
        "swap": "semi-sweet-chocolate-chips or dark-chocolate-chips poured straight from the bag",
        "savings": "Chips melt evenly and you use exactly what you need with no chopping."
      },
      {
        "forIngredientId": "marshmallows",
        "swap": "marshmallow fluff spread over the chocolate",
        "savings": "Skips buying a whole bag if you have fluff, though it browns even faster so watch it closely."
      },
      {
        "forIngredientId": "graham-crackers",
        "swap": "pretzels, banana slices, or strawberries for dunking",
        "savings": "Pretzels add a salty crunch and are often cheaper per serving than grahams."
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 3,
      "carbs": 48,
      "fat": 11,
      "fiber": 2
    },
    "emoji": "🔥",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "2-ingredient",
      "5-minute",
      "shareable",
      "campfire",
      "kid-friendly"
    ],
    "crispinessLevel": "soft",
    "airFryerTimeMinutes": 5,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-sausage-and-peppers",
    "name": "Air Fryer Sausage and Peppers",
    "description": "Juicy Italian sausage with sweet, blistered peppers and onions, all browned in one basket and ready in under 30 minutes. Pile it into a toasty hoagie roll or spoon it over rice for a street-fair classic that costs almost nothing. Inspired by a popular one-basket air-fryer sausage-and-peppers trend.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "italian-sausage",
        "quantity": 2
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 1
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "hoagie-rolls",
        "quantity": 2,
        "note": "or serve over rice"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Slice the bell peppers and onion into thick strips and mince the garlic. Toss them in a bowl with the olive oil, italian seasoning, salt, pepper, and red pepper flakes until evenly coated.",
      "Cut each sausage link into 1-inch chunks, add to the bowl, and toss again so everything is glistening.",
      "Preheat the air fryer to 400F for 2-3 minutes, then tip the sausage, peppers, and onions into the basket in as even a layer as you can.",
      "Air fry at 400F for 8 minutes, then pull the basket and shake or toss everything well so the peppers blister evenly and the sausage browns on all sides.",
      "Cook another 4-6 minutes at 400F until the casings are deeply browned and the peppers are soft with charred edges. Check that the sausage reaches an internal temperature of 160F at the thickest chunk before serving.",
      "For toasty rolls, pop the split hoagie rolls into the basket for the last 1-2 minutes. For a rice side, microwave 1 cup rice with 2 cups water in a covered bowl for about 10 minutes, or pour boiling water from a kettle over instant rice and cover.",
      "Pile the sausage and peppers into the rolls or over rice, finish with a shower of parmesan and fresh parsley, and serve hot."
    ],
    "totalTimeMinutes": 27,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 14,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy sausage in a larger pack and freeze links individually in a zip bag, then thaw only what you need so nothing goes to waste.",
      "Mixed-color bell peppers are pretty, but a bag of whatever is on sale (often green) works exactly the same and costs less.",
      "Skip the hoagie rolls and serve over rice or any bread you already have to shave the cost per serving way down."
    ],
    "substitutions": [
      {
        "forIngredientId": "italian-sausage",
        "swap": "kielbasa or smoked-sausage, sliced into coins",
        "savings": "saves about $0.15 per serving"
      },
      {
        "forIngredientId": "hoagie-rolls",
        "swap": "a cup of plain rice per person",
        "savings": "saves about $0.60 per serving"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable-oil or a few seconds of cooking spray",
        "savings": "saves about $0.22 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 24,
      "carbs": 48,
      "fat": 28,
      "fiber": 5
    },
    "emoji": "🌭",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dinner",
      "italian-american",
      "one-basket",
      "budget",
      "high-protein",
      "under-30",
      "street-food"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 14,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-fried-pickles",
    "name": "Air Fryer Crispy Fried Pickles",
    "description": "Tangy dill pickle chips wrapped in crunchy seasoned panko and air fried until golden and shatteringly crisp — the hot, salty crunch against the cool tang is dangerously snackable, especially dunked in ranch. Made from a jar of pickles you probably already have, so it costs next to nothing. Inspired by the classic air-fryer fried-pickle trend popularized across home-cook recipe blogs.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "dill-pickles",
        "quantity": 0.5,
        "note": "drained pickle chips, patted very dry"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "for the first dredge"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.75
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2
      },
      {
        "ingredientId": "ranch",
        "quantity": 3,
        "note": "for dipping"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Drain the pickle chips and lay them on a clean towel or paper towels. Pat them very dry on both sides and let them sit 5 minutes — this is the key step so the breading crisps instead of steaming.",
      "Set up three shallow bowls: flour in the first; the egg beaten in the second; and the panko mixed with the garlic powder, paprika, and salt in the third.",
      "Dip each pickle chip in the flour (shake off the excess), then the egg, then press firmly into the seasoned panko so it coats all over.",
      "Mist the air fryer basket with cooking spray, then arrange the breaded pickles in a single layer without overlapping (work in batches if needed). Mist the tops with cooking spray so they brown evenly.",
      "Air fry at 400°F for 8 minutes, flipping the pickles and shaking the basket at the 4-minute mark, until the coating is deep golden and crisp.",
      "Let them cool 1–2 minutes (they firm up and crisp as they sit), then sprinkle with chopped parsley if using and serve hot with ranch for dipping."
    ],
    "totalTimeMinutes": 23,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One jar of pickles makes several batches — you've basically already paid for this snack, so the only real cost is a little panko and an egg.",
      "No panko? Crush up plain crackers or saltines you already have in the cabinet for a similar crunch.",
      "Skip the bottled ranch and stir a spoon of mayo with a pinch of garlic powder, dried dill, and a splash of milk for a near-free dip."
    ],
    "substitutions": [
      {
        "forIngredientId": "panko",
        "swap": "regular breadcrumbs or crushed crackers",
        "savings": "Use what's in your pantry instead of buying panko"
      },
      {
        "forIngredientId": "ranch",
        "swap": "DIY mayo + dried dill + garlic powder dip",
        "savings": "Saves buying a bottle of ranch"
      },
      {
        "forIngredientId": "flour",
        "swap": "cornstarch",
        "savings": "Either works as the first dredge to help the egg grip"
      }
    ],
    "estimatedNutrition": {
      "calories": 190,
      "protein": 7,
      "carbs": 28,
      "fat": 6,
      "fiber": 2
    },
    "emoji": "🥒",
    "accentColor": "bg-green-100",
    "cuisine": "American (Southern)",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "vegetarian",
      "southern",
      "crispy",
      "dorm-friendly",
      "budget"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-soft-pretzel-bites",
    "name": "Air Fryer Soft Pretzel Bites",
    "description": "Warm, chewy, golden-brown pretzel bites with that unmistakable mall-pretzel pull, made from a tube of pizza dough for pennies. A quick baking-soda dunk gives them a deep-brown crust, and they're unreal dipped in cheese sauce or rolled in cinnamon sugar. Inspired by the popular air-fryer soft-pretzel trend.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 3,
        "note": "for the baking-soda bath that browns the crust"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "warm, for the soda bath"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "melted, brushed on after air frying"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "for dusting the surface while rolling ropes"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 2,
        "note": "for sprinkling on top"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 1,
        "optional": true,
        "note": "finishing salt for that classic pretzel look"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "optional": true,
        "note": "mix with cinnamon for a sweet version"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "for the cinnamon-sugar coating"
      },
      {
        "ingredientId": "cheese",
        "quantity": 1,
        "optional": true,
        "note": "melt with a splash of milk in the microwave for a quick cheese dip"
      }
    ],
    "steps": [
      "Dust a clean surface with a little flour, then divide the pizza dough into 4 pieces. Roll each into a rope about as thick as your finger and cut into 1-inch bites; you should get a big handful.",
      "Make the soda bath: stir the baking soda into 2 cups of warm water in a bowl until mostly dissolved. Drop the dough bites in and let them soak for 30 seconds; this is the trick for that deep-brown pretzel crust.",
      "Lift the bites out with a slotted spoon or fork, shake off the excess water, and arrange them in a single layer in the air fryer basket on a perforated liner or a lightly sprayed basket. Don't crowd them; work in 2 batches if needed.",
      "Sprinkle with kosher salt and air fry at 375F for 7 minutes, shaking the basket at the 4-minute mark so they brown evenly on all sides.",
      "They're done when deeply golden-brown and puffed; the inside should read about 190-200F on a thermometer, meaning the dough is fully baked through. Add 1-2 more minutes if any look pale or doughy.",
      "Brush the hot bites with melted butter right out of the basket. For savory, hit them with flaky sea salt; for sweet, toss the buttered bites in the cinnamon-sugar mix until coated.",
      "For a quick cheese dip, microwave the shredded cheese with a small splash of milk in 20-second bursts, stirring between each, until smooth. Serve the bites warm with cheese sauce or cinnamon sugar."
    ],
    "totalTimeMinutes": 24,
    "prepTimeMinutes": 14,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One bag of pizza dough makes a huge bowl of pretzel bites, snack-night for the whole hall at under a dollar a head.",
      "Baking soda is the cheapest pantry hero here: that quick dunk is what turns plain dough into real-tasting pretzels, no special ingredients needed.",
      "Skip buying pretzel salt; coarse kosher salt or any flaky salt you already have does the exact same job on top."
    ],
    "substitutions": [
      {
        "forIngredientId": "pizza-dough",
        "swap": "Pop a tube of refrigerated biscuits or crescent rolls and pinch into bites; even faster, still chewy.",
        "savings": "Often on sale cheaper than fresh dough"
      },
      {
        "forIngredientId": "butter",
        "swap": "Brush with a little olive oil or melted plant butter to keep it dairy-free.",
        "savings": "Use what's already in the dorm fridge"
      },
      {
        "forIngredientId": "cheese",
        "swap": "Mustard or a leftover queso/nacho cheese cup makes a zero-effort dip.",
        "savings": "No extra shopping"
      }
    ],
    "estimatedNutrition": {
      "calories": 280,
      "protein": 8,
      "carbs": 48,
      "fat": 6,
      "fiber": 2
    },
    "emoji": "🥨",
    "accentColor": "bg-amber-100",
    "cuisine": "German-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "pretzel",
      "dorm-friendly",
      "vegetarian",
      "budget",
      "shareable",
      "cheese-dip",
      "cinnamon-sugar"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 375,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crunchy-onion-rings",
    "name": "Air Fryer Crunchy Onion Rings",
    "description": "Diner-style onion rings with a double panko shell that shatters into golden crunch, while the onion inside goes soft and sweet — all from one cheap onion and no greasy vat of oil. They taste like a real treat for almost no money. Inspired by the classic air-fryer onion-ring trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "large, sliced into 1/2-inch rings"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "for the first dredge"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "beaten"
      },
      {
        "ingredientId": "panko",
        "quantity": 1.5,
        "note": "for the double coat"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 6,
        "note": "to spritz both sides"
      },
      {
        "ingredientId": "ranch",
        "quantity": 2,
        "optional": true,
        "note": "for dipping"
      }
    ],
    "steps": [
      "Peel the onion and slice into 1/2-inch rounds, then gently pop them apart into individual rings. Save the small centers for another use, or coat and fry them too.",
      "Set up three bowls: flour in the first; beaten eggs in the second; panko mixed with paprika, garlic-powder, salt, and pepper in the third.",
      "Dredge each ring in flour (shake off excess), then egg, then panko. For an extra-shattering crust, dip it back into the egg and panko a second time so every ring is fully double-coated.",
      "Arrange the rings in a single layer in the air fryer basket — work in batches so they never overlap — and spritz both sides well with cooking spray so the crumbs crisp instead of staying powdery.",
      "Air fry at 380F for 10 minutes, flipping the rings at the 5-minute mark and giving them another light spritz of oil.",
      "They're done when the panko is deep golden-brown and crunchy all over and the onion is fork-tender inside; add 1-2 minutes for a darker, crispier shell.",
      "Let them cool for a minute so the crust sets, then serve hot with ranch for dipping."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One onion makes a whole basket — slice it thick so you get big, sturdy rings that grip the crust.",
      "Pinch panko: regular breadcrumbs work too and are often cheaper, just spritz a little extra oil for crunch.",
      "Skip store-bought dip and stir a spoonful of mayo with a pinch of garlic-powder and pepper for a near-free dipping sauce."
    ],
    "substitutions": [
      {
        "forIngredientId": "panko",
        "swap": "Use regular breadcrumbs for a finer but still-crispy shell",
        "savings": "Save about $0.08 per recipe"
      },
      {
        "forIngredientId": "ranch",
        "swap": "Dip in ketchup or bbq-sauce instead",
        "savings": "Save about $0.10"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Whisk 1/4 cup milk with a spoonful of flour as the wet layer",
        "savings": "Save about $0.65"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 10,
      "carbs": 48,
      "fat": 7,
      "fiber": 3
    },
    "emoji": "🧅",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "vegetarian",
      "crispy",
      "dorm-friendly",
      "budget",
      "party"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 10,
    "airFryerTemperatureF": 380,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-garlic-parmesan-pizza-rolls",
    "name": "Air Fryer Garlic Parmesan Pizza Rolls",
    "description": "Frozen pizza rolls blasted in the air fryer until shatteringly crisp, then tossed in melted garlic butter, Italian seasoning, and a snowfall of grated parmesan — the glow-up your microwave snacks always deserved. Ready in under 10 minutes with basically zero prep, it's the perfect 2am dorm fuel that tastes like you actually tried. Inspired by a viral garlic-parm pizza-roll hack making the rounds on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "frozen-spring-rolls",
        "quantity": 12,
        "note": "use frozen pizza rolls (priced here as the closest catalog match) — air fry straight from frozen, no thawing"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "melted, for the garlic-butter toss"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "finely grated or minced"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 3,
        "note": "freshly grated, for tossing and finishing"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5,
        "note": "boosts the garlic flavor in the butter"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "for a little heat"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, to garnish"
      },
      {
        "ingredientId": "marinara",
        "quantity": 0.5,
        "optional": true,
        "note": "warmed in the microwave for dipping"
      }
    ],
    "steps": [
      "Arrange 12 frozen pizza rolls in the air fryer basket in a single layer with a little space between them so they crisp evenly. Do not thaw — cook straight from frozen.",
      "Air fry at 380F for 7-9 minutes, shaking the basket at the 4-minute mark so all sides brown. They're done when the shells are golden and crisp and the filling is steaming hot throughout (165F+ at the center). Let them rest 1-2 minutes before tossing — the filling is lava-hot and will burn your mouth if you bite in too soon.",
      "While they cook, melt 2 tbsp butter in a mug in the microwave (about 30 seconds), then stir in 2 grated garlic cloves, 1/2 tsp garlic powder, and 1 tsp Italian seasoning.",
      "Tip the hot pizza rolls into a bowl, pour over the garlic butter, and add 2 tbsp of the parmesan. Toss gently to coat every roll without smashing them.",
      "Sprinkle the remaining 1 tbsp parmesan and the optional red pepper flakes over the top, then scatter with chopped fresh parsley.",
      "Microwave 1/2 cup marinara for about 30 seconds for dipping, and eat immediately while crisp outside and gooey inside."
    ],
    "totalTimeMinutes": 11,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 9,
    "difficulty": "easy",
    "dietTags": [],
    "cheapTips": [
      "Store-brand frozen pizza rolls cost a fraction of the name brand and crisp up identically in the air fryer — nobody can tell once they're tossed in garlic parm.",
      "A wedge of real parmesan grated yourself goes further and tastes sharper than the pre-shredded tub; save the rind to flavor soups later.",
      "No fresh garlic? An extra 1/2 tsp garlic powder in the melted butter does the job for pennies and won't spoil in your mini-fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "olive oil or plant butter for a dairy-free toss",
        "savings": "olive oil is cheaper per serving and lasts longer in a dorm"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "pecorino-romano or nutritional yeast for a vegan finish",
        "savings": "nutritional yeast is shelf-stable and cheaper over many uses"
      },
      {
        "forIngredientId": "marinara",
        "swap": "ranch or any pizza/tomato sauce you already have",
        "savings": "skip buying a jar and use packets or leftover sauce for free"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 12,
      "carbs": 38,
      "fat": 23,
      "fiber": 2
    },
    "emoji": "🍕",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "dorm-friendly",
      "under-10-minutes",
      "frozen",
      "viral",
      "cheesy",
      "garlic",
      "no-prep"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 380,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-chicken-taquitos",
    "name": "Air Fryer Chicken Taquitos",
    "description": "Crispy rolled tortillas packed with creamy chicken, melty cheese, and a little salsa kick — a crunchy, filling snack that's basically a fridge-cleanout in disguise. Rotisserie or leftover chicken makes them cheap and almost effortless. Inspired by the popular air-fryer taquito trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 2,
        "note": "shredded; leftover or rotisserie chicken both work"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 6,
        "note": "small flour or corn tortillas"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 4,
        "note": "softened so it mixes easily"
      },
      {
        "ingredientId": "cheese",
        "quantity": 1,
        "note": "shredded cheddar or a Mexican blend"
      },
      {
        "ingredientId": "salsa",
        "quantity": 1
      },
      {
        "ingredientId": "taco-seasoning-2",
        "quantity": 2
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "to crisp the rolled tortillas"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 3,
        "optional": true,
        "note": "for dipping"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, to garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "optional": true,
        "note": "wedges to squeeze over"
      }
    ],
    "steps": [
      "In a bowl, mix the shredded rotisserie chicken, softened cream cheese, shredded cheese, salsa, and taco seasoning until creamy and evenly combined.",
      "Warm the tortillas 15-20 seconds in the microwave so they roll without cracking, then lay them out flat.",
      "Spoon a line of filling across the lower third of each tortilla and roll up tightly, finishing seam-side down so they stay closed.",
      "Lightly spray the rolled taquitos all over with cooking spray and arrange them seam-side down in the air fryer basket in a single layer, not touching.",
      "Air fry at 400F for 7-8 minutes, flipping halfway, until the shells are golden and crunchy. The chicken is already cooked, but the filling should be piping hot — at least 165F in the center.",
      "Let them rest 2 minutes so the filling sets and the shells crisp up, then plate.",
      "Garnish with chopped cilantro and serve with sour cream and lime wedges for dipping."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "A store rotisserie chicken stretches across taquitos, tacos, and soup all week — buy one and freeze what you don't use.",
      "Corn tortillas are usually the cheapest per pack and turn extra crispy in the air fryer.",
      "Skip the dips you don't have — a little extra salsa stirred into the filling keeps these flavorful for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "canned chicken, drained and shredded",
        "savings": "uses pantry stock you already own"
      },
      {
        "forIngredientId": "cream-cheese",
        "swap": "sour cream or refried beans for a similar creamy bind",
        "savings": "saves if you already have them"
      },
      {
        "forIngredientId": "cheese",
        "swap": "shredded mozzarella for an extra-melty pull",
        "savings": "often cheaper per bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 31,
      "carbs": 38,
      "fat": 18,
      "fiber": 3
    },
    "emoji": "🌮",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "chicken",
      "high-protein",
      "fridge-cleanout",
      "crispy",
      "dorm-friendly",
      "mexican"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-egg-rolls",
    "name": "Air Fryer Crispy Egg Rolls",
    "description": "Takeout-style egg rolls that shatter when you bite in — crisp, golden wrappers around a savory pork-and-cabbage slaw, with none of the deep-fryer oil mess. Roll a big batch, freeze the extras, and reheat straight from frozen for instant dorm snacks. Inspired by a popular air-fryer egg-roll trend.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "wonton-wrappers",
        "quantity": 12,
        "note": "egg roll or large wonton wrappers; one per roll"
      },
      {
        "ingredientId": "cabbage",
        "quantity": 3,
        "note": "shredded thin for the slaw"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "grated"
      },
      {
        "ingredientId": "ground-pork",
        "quantity": 6,
        "note": "cooked in the air fryer first, then crumbled into the filling"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "grated or ground"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "for brushing the wrappers"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "mixed with a little water to seal the edges"
      },
      {
        "ingredientId": "sweet-chili-sauce",
        "quantity": 2,
        "optional": true,
        "note": "for dipping"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Cook the pork first: crumble the ground pork into a foil-lined air fryer basket or small foil pan and air fry at 380F for 7-9 minutes, stirring once, until no pink remains and it reaches 160F. Drain off any fat and let it cool slightly.",
      "Wilt the slaw: in a microwave-safe bowl, toss the shredded cabbage and grated carrot with a pinch of salt and microwave 2-3 minutes until just softened. Let cool, then squeeze out the excess water in a clean towel so the filling stays crisp, not soggy.",
      "Make the filling: stir the cooked pork into the squeezed slaw along with the sliced scallion, minced garlic, grated ginger, soy sauce, and sesame oil until evenly combined.",
      "Roll: lay a wrapper in a diamond, add about 2 tablespoons of filling near the bottom corner, fold the bottom up over the filling, fold in the two sides, then roll tightly. Brush the top corner with the cornstarch-water slurry and press to seal. Repeat for all 12.",
      "Brush each roll all over with vegetable oil and arrange seam-side down in the air fryer basket in a single layer, leaving space between them (work in batches if needed).",
      "Air fry at 400F for 6 minutes, then flip each roll and air fry another 5-6 minutes until deep golden and shatteringly crisp; the filling is already cooked, so you're just crisping the wrapper and heating it through (aim for 165F at the center).",
      "Let cool 2 minutes (the filling is molten hot), sprinkle with sesame seeds, and serve with sweet chili sauce for dipping."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 22,
    "cookTimeMinutes": 18,
    "difficulty": "medium",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole green cabbage instead of a slaw kit — one head shreds into enough filling for several batches and costs a fraction per cup.",
      "Swap ground pork for whatever protein is cheapest that week; ground chicken or even crumbled tofu works just as well in the slaw.",
      "Roll a double batch and freeze the extras raw on a tray, then air fry straight from frozen (add 3-4 minutes) — way cheaper than store-bought frozen rolls."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-pork",
        "swap": "ground chicken or crumbled tofu for a leaner, often cheaper filling",
        "savings": "~$1 per batch"
      },
      {
        "forIngredientId": "wonton-wrappers",
        "swap": "rice paper for a gluten-free, lighter wrap (mist instead of brushing)",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "sweet-chili-sauce",
        "swap": "soy sauce mixed with a little sriracha you already have",
        "savings": "~$0.30 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 14,
      "carbs": 30,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🥟",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese-American",
    "tags": [
      "air-fryer",
      "no-stove",
      "takeout-style",
      "batch-cook",
      "freezer-friendly",
      "snack",
      "high-protein"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 12,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-blistered-shishito-lemon-salt",
    "name": "Air Fryer Blistered Shishito Peppers with Lemon Salt",
    "description": "Whole shishito peppers blister and char in minutes until smoky, a little sweet, and irresistibly snackable — with the occasional spicy one for some pepper-roulette fun. A shower of flaky salt and a big squeeze of lemon make them taste straight out of an izakaya. This easy 3-ingredient snack was inspired by the popular air-fryer shishito trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "shishito-peppers",
        "quantity": 2
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 1
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "zest the lemon before juicing for extra brightness"
      }
    ],
    "steps": [
      "Pat the shishito peppers very dry with a paper towel — dry skins blister far better than damp ones. Leave them whole; there's no need to trim or seed them.",
      "Add the peppers to a bowl, drizzle on the olive oil, and toss with your hands until each one has a thin, glossy coat. Go light: too much oil makes them steam instead of char.",
      "Arrange the peppers in a single, uncrowded layer in the air fryer basket. If your basket is small, cook in two batches so they blister rather than stew.",
      "Air fry at 400F for 8 minutes, shaking the basket once halfway through to expose all sides.",
      "Check at the 6-8 minute mark: you want blackened blistered spots and slightly collapsed, wrinkled skins. Add 1-2 minutes if any peppers still look smooth and tight. (No internal-temp needed — these are a vegetable; cook to your preferred char.)",
      "Tip the hot peppers onto a plate and immediately sprinkle with the flaky sea salt so it sticks to the warm, oily skins.",
      "Squeeze the lemon half over the top and, if using, scatter on the lemon zest. Eat with your fingers, holding the stem — and watch out for the rare fiery one!"
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 4,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Shishitos are usually cheapest at Asian grocers or Trader Joe's — grab a bag when you spot them, since one bag covers several snack rounds.",
      "Use a real lemon half instead of bottled juice, and zest it first; the zest is free flavor you'd otherwise toss.",
      "Swap the olive oil for plain vegetable oil from your pantry — it blisters just as well for a fraction of the cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable-oil, or a quick spritz of cooking spray",
        "savings": "~$0.20 per batch"
      },
      {
        "forIngredientId": "flaky-sea-salt",
        "swap": "kosher salt (crush it a bit so it clings to the skins)",
        "savings": "~$0.10"
      },
      {
        "forIngredientId": "shishito-peppers",
        "swap": "padron peppers, or quartered mini sweet peppers when shishitos aren't available",
        "savings": "varies"
      }
    ],
    "estimatedNutrition": {
      "calories": 90,
      "protein": 2,
      "carbs": 8,
      "fat": 7,
      "fiber": 3
    },
    "emoji": "🌶️",
    "accentColor": "bg-green-100",
    "cuisine": "Japanese-inspired",
    "tags": [
      "air-fryer",
      "no-stove",
      "izakaya",
      "3-ingredient",
      "10-minute",
      "snack",
      "vegan",
      "gluten-free",
      "pepper-roulette"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-beet-chips-sea-salt",
    "name": "Air Fryer Crispy Beet Chips with Sea Salt",
    "description": "Jewel-red, shatteringly crisp beet chips with a whisper of olive oil and flaky sea salt — naturally sweet, ridiculously pretty, and a fraction of the price of a store-bought bag. Snack on them straight from the basket or scatter over a salad for instant crunch. Inspired by the popular air-fryer beet-chip trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "beet",
        "quantity": 2,
        "note": "scrubbed, sliced paper-thin on a mandoline (or by hand)"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "just enough to lightly coat the slices"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "toss before air frying"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.5,
        "optional": true,
        "note": "finishing salt, sprinkled while warm"
      }
    ],
    "steps": [
      "Scrub the beets well (no need to peel) and slice them as thin as possible — a mandoline on the thinnest setting is ideal so the chips crisp evenly. Aim for translucent, near see-through slices about 1/16 inch thick.",
      "Pat the slices very dry with a paper towel, then toss in a bowl with the 1 tbsp olive oil and 1/2 tsp salt until every slice glistens. Drying first is the secret to crispness.",
      "Lay the slices in a single layer in the air fryer basket — work in 2-3 batches so they never overlap. Crowding traps steam and leaves them chewy.",
      "Air fry at 330F for 8 minutes, then open and shake or flip the chips so they cook evenly.",
      "Continue air frying at 330F for another 4-10 minutes, checking every 2-3 minutes, until the edges curl and the slices look dry and matte with no wet spots. Pull any that brown early — thin slices finish faster, and beets go from crisp to scorched quickly.",
      "Tip the chips onto a plate in a single layer (don't stack) and let them cool 3-5 minutes — they firm up and turn crunchier as they cool. If any are still bendy once cool, return them for 1-2 minutes.",
      "Sprinkle with flaky sea salt while still warm and serve. Eat the same day for best crunch; for a salad topper, crumble over greens just before serving."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 18,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "One beet makes a surprising pile of chips, so two cheap beets feed a whole study session — way less than a $4 bag.",
      "Slice thin and even: uneven thickness is the #1 reason chips go from crispy to chewy. Borrow a roommate's mandoline if you don't have one.",
      "Save the beet greens — saute or toss them raw into a salad so nothing from your beet goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "beet",
        "swap": "Use sweet potato or carrots sliced just as thin for a different colorful chip",
        "savings": "Sweet potato runs about the same; carrots are cheaper per chip"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "A few seconds of cooking spray coats the slices with even less oil",
        "savings": "Saves a few cents and cuts calories"
      },
      {
        "forIngredientId": "flaky-sea-salt",
        "swap": "Regular table salt or seasoned salt works fine for finishing",
        "savings": "Pennies cheaper"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 2,
      "carbs": 14,
      "fat": 6,
      "fiber": 4
    },
    "emoji": "🥬",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "vegan",
      "gluten-free",
      "healthy",
      "budget",
      "vegetable",
      "dorm-friendly",
      "salad-topper"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 16,
    "airFryerTemperatureF": 330,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-charred-lemon-broccolini",
    "name": "Air Fryer Charred Lemon Broccolini",
    "description": "Long, frilly broccolini stalks crisp into smoky, grill-tasting edges in under 10 minutes with nothing but oil, garlic, and a big squeeze of lemon. It's the elegant, less-played-out cousin of plain broccoli florets — bright, charred, and snackable straight off the basket. Adapted from a popular air-fryer broccolini trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "broccolini",
        "quantity": 4,
        "note": "about 2 bunches, ends trimmed"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "optional": true,
        "note": "garnish — grate over while hot"
      }
    ],
    "steps": [
      "Trim about 1 inch off the tough ends of the broccolini and pat the stalks fully dry — dry stalks char instead of steam.",
      "In a bowl, toss the broccolini with the olive oil, minced garlic, salt, pepper, and red pepper flakes until every stalk is lightly coated.",
      "Halve the lemon, squeeze the juice of one half over the broccolini, and toss again; save the other half for serving.",
      "Arrange the broccolini in a single layer in the basket with the frilly tops facing up — don't crowd it, working in two batches if needed so the pieces char rather than steam.",
      "Air fry at 400F for 7 minutes, shaking the basket once at the 4-minute mark, until the stems are crisp-tender and the tips are charred and crisp.",
      "Tip onto a plate, squeeze the remaining lemon half over the top, and grate the parmesan over while everything is still hot. Eat right away for the crispiest tips."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Broccolini ends are the only part you trim — toss the trimmings into a freezer bag with other veggie scraps for a future broth so nothing goes to waste.",
      "Bottled lemon juice works in the toss if you don't want to buy a whole lemon, but a fresh wedge over the top at the end is worth it for the bright finish.",
      "Skip the parmesan to keep it vegan and even cheaper — a pinch of garlic powder and extra salt still gives you that savory hit."
    ],
    "substitutions": [
      {
        "forIngredientId": "broccolini",
        "swap": "Regular broccoli cut into long spears, or asparagus — both char well at the same temp",
        "savings": "broccoli runs about half the price per cup"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Avocado oil or any neutral cooking oil",
        "savings": "vegetable oil is a few cents cheaper per tbsp"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Nutritional yeast for a dairy-free, vegan savory finish",
        "savings": "comparable cost, pantry-friendly"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 6,
      "carbs": 11,
      "fat": 12,
      "fiber": 4
    },
    "emoji": "🥦",
    "accentColor": "bg-green-100",
    "cuisine": "Italian-inspired",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "gluten-free",
      "quick",
      "veggie-side",
      "snack",
      "low-carb",
      "dorm-friendly"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-honey-garlic-butter-carrots",
    "name": "Air Fryer Honey Garlic Butter Carrots",
    "description": "Plain carrots turn into candy-edged, fork-tender batons glossed in a sticky honey garlic butter that makes the cheapest veggie in the fridge taste like a treat. The air fryer caramelizes their natural sugar while the warm glaze sets into a glossy coat. Inspired by the popular air-fryer honey-garlic carrot trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "carrot",
        "quantity": 5,
        "note": "peeled and cut into 2-3 inch batons"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "to coat before air frying"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "melted for the glaze"
      },
      {
        "ingredientId": "honey",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "finely minced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Peel the carrots and cut into 2-3 inch batons, slicing any fat ones lengthwise so the pieces are roughly even and cook at the same rate. Pat dry, then toss in a bowl with the olive oil, salt, and pepper until lightly coated.",
      "Spread the carrots in a single layer in the air fryer basket. Air fry at 370F for 12 minutes, shaking the basket once at the 6-minute mark so they brown evenly.",
      "While the carrots cook, melt the butter in a microwave-safe bowl (about 25-30 seconds), then stir in the honey and minced garlic until you have a smooth, glossy glaze.",
      "After 12 minutes the carrots should be fork-tender with caramelized, browned edges. Tip them into the bowl of honey garlic butter and toss until every piece is coated.",
      "Return the glazed carrots to the basket and air fry at 370F for 2-3 more minutes to set the glaze and deepen the caramel edges. Watch closely so the honey does not scorch.",
      "Tip into a bowl, scrape any glaze left in the basket over the top, and shower with chopped parsley if using. Serve warm."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Carrots are one of the cheapest veggies in the store — grab a whole bag and this side costs pennies per serving.",
      "Use the limp, bendy carrots hiding in your crisper drawer; the air fryer's dry heat firms them right back up and caramelizes the edges.",
      "No fresh garlic? A 1/4 tsp of garlic powder stirred into the butter glaze does the job for less hassle."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "maple syrup or brown sugar for the same sticky-sweet glaze",
        "savings": "Brown sugar is cheaper per spoonful if you already have it"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter or olive oil for a dairy-free, vegan glaze",
        "savings": "Roughly the same cost"
      },
      {
        "forIngredientId": "carrot",
        "swap": "parsnips or sweet potato batons cut to the same size",
        "savings": "Parsnips bring a similar sweet caramelization"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 2,
      "carbs": 28,
      "fat": 9,
      "fiber": 5
    },
    "emoji": "🥕",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "vegetarian",
      "side-dish",
      "snack",
      "gluten-free",
      "budget",
      "caramelized"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 15,
    "airFryerTemperatureF": 370,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-french-toast-sticks",
    "name": "Air Fryer French Toast Sticks",
    "description": "Diner-style dippable French toast with crispy golden edges and a custardy middle — eaten by hand, dunked straight into syrup. It turns stale bread and pantry eggs into a warm, almost-free breakfast with zero stovetop babysitting. Inspired by a popular air-fryer French-toast-stick trend.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "bread",
        "quantity": 6,
        "note": "heartier/stale bread holds up best; cut each slice into 3 sticks"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "about 1/4 cup"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "to keep sticks from sticking"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 2,
        "note": "for dunking"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "optional": true,
        "note": "melted, brushed on for extra-golden edges"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 1,
        "optional": true,
        "note": "dusted on top to serve"
      }
    ],
    "steps": [
      "Cut each slice of bread into 3 even sticks (18 sticks total). If your bread is fresh, leave the sticks out for 10 minutes so they dry slightly and soak up batter without going soggy.",
      "In a shallow bowl, whisk the eggs, milk, cinnamon, vanilla, and sugar until fully combined with no streaks of egg remaining.",
      "Lightly mist the air fryer basket with cooking spray. Dip each bread stick in the batter, turning to coat all sides, then let the excess drip off so the sticks aren't dripping wet.",
      "Arrange the sticks in a single layer with space between them (work in 2 batches if needed — crowding makes them steam instead of crisp). Mist the tops with a little more cooking spray, or brush with the optional melted butter.",
      "Air fry at 375F for 4 minutes, then flip each stick with tongs and air fry 3-4 more minutes, until the outsides are golden and crisp and the egg custard is fully set with no wet batter in the center (an instant-read thermometer in a thick stick should read 160F).",
      "Let them rest 1 minute to firm up, then dust with the optional powdered sugar and serve with maple syrup for dunking."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use up bread that's going stale — drier bread actually soaks the custard better and crisps up best, so the heel and forgotten slices are perfect here.",
      "Skip name-brand syrup; a generic maple-flavored syrup or even a quick mix of sugar and a splash of water is plenty for dunking.",
      "Stretch one batter further by adding an extra splash of milk and a few more bread sticks — eggs and bread are some of the cheapest things in the dorm pantry."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "almond-milk or oat-milk works 1:1 for a dairy-free batter",
        "savings": "use whatever carton you already have open"
      },
      {
        "forIngredientId": "maple-syrup",
        "swap": "honey or a spoon of jam thinned with warm water",
        "savings": "saves ~$0.30 if you skip syrup entirely"
      },
      {
        "forIngredientId": "bread",
        "swap": "brioche-buns or sourdough for a richer, sturdier stick",
        "savings": "great way to use leftover buns"
      }
    ],
    "estimatedNutrition": {
      "calories": 310,
      "protein": 13,
      "carbs": 48,
      "fat": 7,
      "fiber": 3
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "dorm-friendly",
      "kid-friendly",
      "budget",
      "uses-up-stale-bread",
      "handheld",
      "5-ingredient"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 375,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-breakfast-home-fries",
    "name": "Air Fryer Crispy Breakfast Home Fries",
    "description": "Crackly-edged diner home fries tumbled with sweet peppers and onions and crisped golden in the air fryer with barely any oil. They taste deep-fried but cost pennies and skip the stovetop babysitting entirely. Inspired by a popular air-fryer breakfast-potatoes trend.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 3,
        "note": "scrubbed and cut into 1/2-inch cubes"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "diced"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "diced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1.5,
        "note": "or any neutral oil"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "note": "chopped, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Scrub the potatoes (no need to peel) and cut into even 1/2-inch cubes. Pat them very dry with a towel; dry potatoes are the secret to crispy edges.",
      "In a bowl, toss the cubes with 1 tbsp of the oil, the garlic powder, smoked paprika, salt, and pepper until every piece is evenly coated.",
      "Spread the potatoes in a single layer in the air fryer basket (work in two batches if crowded, since overlap means steam instead of crunch) and air fry at 400F for 10 minutes, shaking the basket once halfway.",
      "Meanwhile, toss the diced bell pepper and onion with the remaining 1/2 tbsp oil and a pinch of salt.",
      "Add the peppers and onions to the basket, shake to mix, and air fry at 400F for 5 more minutes until the potatoes are deeply golden and crackly and the onions are soft with charred edges.",
      "If any pieces still look pale, shake and give them 1 to 2 extra minutes. Total air fry time is about 15 to 17 minutes.",
      "Tip onto plates, taste and add more salt if needed, and scatter with fresh parsley. Serve hot, great alongside eggs or with a few dashes of hot sauce."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Potatoes are one of the cheapest staples in the store; buy a bag in bulk and these home fries stay budget-friendly all week.",
      "Skip peeling: the skin crisps up beautifully and saves you both time and the wasted starchy edges.",
      "Use the leftover half pepper and half onion in tomorrow's eggs or a wrap so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "potato",
        "swap": "Use a sweet potato cut the same size for a sweeter, vitamin-A-packed version",
        "savings": "Roughly the same cost; adds variety"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Vegetable oil works just as well and is cheaper",
        "savings": "Saves about $0.22 per batch"
      },
      {
        "forIngredientId": "smoked-paprika",
        "swap": "Regular paprika or a pinch of chili powder",
        "savings": "Saves about $0.08"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 5,
      "carbs": 42,
      "fat": 6,
      "fiber": 5
    },
    "emoji": "🥔",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "budget",
      "vegan",
      "gluten-free",
      "potatoes",
      "meal-prep"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 15,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-breakfast-burritos",
    "name": "Air Fryer Crispy Breakfast Burritos",
    "description": "Fluffy scrambled eggs, melty cheese, and savory sausage rolled in a tortilla and air-crisped until the whole shell is golden and shatteringly crunchy. Batch them, freeze them, and crisp one straight from frozen on a rushed morning. Inspired by a popular air-fryer breakfast-burrito trend.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "tortilla",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "sausage",
        "quantity": 1
      },
      {
        "ingredientId": "cheese",
        "quantity": 1,
        "note": "shredded, split between both burritos"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "mist the rolled burritos so they crisp"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 1
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1,
        "note": "whisked into the eggs"
      },
      {
        "ingredientId": "salsa",
        "quantity": 1,
        "optional": true,
        "note": "for dipping"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Crack the eggs into a microwave-safe mug or bowl and whisk with the salt, pepper, and garlic powder. Microwave 60-90 seconds, stirring halfway, until just set and fluffy. Pull them while slightly soft since they will finish cooking inside the burrito.",
      "Crumble the sausage into the air fryer basket (or onto a piece of foil) and air fry at 375F for 5-6 minutes, shaking once, until browned and cooked to an internal temperature of 160F. Drain off any grease.",
      "Lay each tortilla flat and divide the scrambled eggs, cooked sausage, and shredded cheese down the center. Fold in the sides, then roll up tight into a burrito.",
      "Place both burritos seam-side down in the air fryer basket so they hold their shape, then mist the tops lightly all over with cooking spray for an even golden crunch.",
      "Air fry at 360F for 6-8 minutes, flipping halfway, until the shells are deep golden and crunchy and the cheese is melted and the filling is steaming hot (165F).",
      "Rest 1-2 minutes, then slice in half. Serve with salsa for dipping and a sprinkle of fresh cilantro.",
      "To meal-prep: roll the burritos, wrap each in foil, and freeze. To reheat from frozen, unwrap and air fry at 350F for 9-11 minutes, flipping once, until crispy and heated through to 165F."
    ],
    "totalTimeMinutes": 22,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 14,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a big roll of sausage and eggs by the dozen, then batch-make 6-8 burritos at once and freeze them. Each frozen burrito costs less than a dollar versus $3+ for a fast-food one.",
      "Skip pre-shredded 'breakfast burrito' cheese blends and shred a block yourself; it melts better and costs less per ounce.",
      "Stretch the filling with cheap add-ins from the back of the fridge like frozen veggies, leftover rice, or a spoon of beans so two eggs feed more mouths."
    ],
    "substitutions": [
      {
        "forIngredientId": "sausage",
        "swap": "2 slices bacon, air-fried crisp then crumbled, or a chopped frozen sausage patty",
        "savings": "Bacon or frozen patties can be cheaper per burrito and store longer."
      },
      {
        "forIngredientId": "cheese",
        "swap": "mozzarella or any melty cheese you already have",
        "savings": "Use whatever is open in the fridge instead of buying a new bag."
      },
      {
        "forIngredientId": "tortilla",
        "swap": "any large flour tortilla or wrap on hand",
        "savings": "Store-brand tortillas are often half the price of name brands."
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 26,
      "carbs": 28,
      "fat": 27,
      "fiber": 2
    },
    "emoji": "🌯",
    "accentColor": "bg-amber-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "high-protein",
      "meal-prep",
      "freezer-friendly",
      "handheld",
      "tex-mex"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 7,
    "airFryerTemperatureF": 360,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-crispy-hash-brown-patties",
    "name": "Air Fryer Crispy Hash Brown Patties",
    "description": "Golden, fast-food-style hash brown patties with a shatteringly crisp lacy crust and a fluffy potato center, made from one shredded potato and barely any oil. The soak-and-squeeze trick pulls out the surface starch so the air fryer can crisp instead of steam, beating the freezer-bag version for literal cents. Inspired by the from-scratch air-fryer hash-brown trend that swept home-cook social feeds.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "russet works best; peel optional"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "binds the shreds and boosts crisp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "mist both sides before air frying"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.25,
        "optional": true,
        "note": "for color and a little warmth"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, sprinkled on top to serve"
      }
    ],
    "steps": [
      "Peel (optional) and coarsely grate the potatoes into a bowl. Cover with cold water and soak 5-10 minutes to rinse out the surface starch so they crisp instead of going gummy.",
      "Drain, then squeeze the shreds bone-dry: pile them in a clean dish towel or a fistful of paper towels and wring hard over the sink. The drier they are, the crispier they get, so squeeze in batches.",
      "Toss the dry shreds with the cornstarch, salt, pepper, garlic powder, onion powder, and optional paprika until evenly coated.",
      "Press the mixture firmly into 4 compact patties about 1/2-inch thick, packing them tight so they hold together. Mist both sides well with cooking spray.",
      "Place the patties in a single layer in the air fryer basket, not touching, and air fry at 360F for 8 minutes.",
      "Carefully flip each patty, mist the tops again, and air fry at 360F for another 6-10 minutes until deep golden, crisp, and a paring knife slides easily through the center (14-18 minutes total). Add a couple minutes for extra crunch.",
      "Let rest 1-2 minutes so the crust sets, then top with sliced scallion if using and serve hot with ketchup or hot sauce."
    ],
    "totalTimeMinutes": 28,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 16,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "One russet potato makes about two patties for pennies, way cheaper than a freezer bag of pre-made hash browns.",
      "Squeezing the shreds truly dry is free and is the single biggest crisp upgrade, so don't skip the wring step.",
      "No cooking spray? Rub on a few drops of any neutral oil with your fingers; you need only the lightest film."
    ],
    "substitutions": [
      {
        "forIngredientId": "potato",
        "swap": "Use 1 serving of frozen hash-browns (thawed and squeezed dry) per patty when you're short on time",
        "savings": "Skips peeling and grating"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Swap in 1 tbsp potato starch (still gluten-free) or 1 tbsp flour (no longer gluten-free) as the binder",
        "savings": "Uses what's already in the pantry"
      },
      {
        "forIngredientId": "cooking-spray",
        "swap": "Brush with 1 tbsp vegetable oil instead",
        "savings": "About the same cost, no spray can needed"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 4,
      "carbs": 37,
      "fat": 2,
      "fiber": 3
    },
    "emoji": "🥔",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "potato",
      "vegan",
      "gluten-free",
      "budget",
      "crispy",
      "dorm-friendly",
      "meal-prep"
    ],
    "crispinessLevel": "extra crispy",
    "airFryerTimeMinutes": 16,
    "airFryerTemperatureF": 360,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-egg-in-a-hole-toast",
    "name": "Air Fryer Egg in a Hole Toast",
    "description": "A cozy hands-off breakfast where the toast crisps up golden while an egg sets right in the middle, all dusted with crunchy everything-bagel seasoning and finished with salty bacon. It looks like a brunch-cafe flex but takes basically zero skill and zero cleanup. Inspired by a viral one-step air-fryer breakfast trend on TikTok.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "bread",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "bacon",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "everything-bagel",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      }
    ],
    "steps": [
      "Lightly butter both slices of bread on one side. Using the rim of a cup or a spoon, press and tear a roughly 2-inch well into the center of each slice, leaving the bottom intact so it can cradle the egg (don't punch all the way through).",
      "Lay the bacon slices flat in the air fryer basket and cook at 360F for 4 minutes to render some fat and get them started, then transfer to a plate.",
      "Place the bread buttered-side up in the basket. Crack one egg into each bread well, then sprinkle each with a pinch of salt, pepper, and about 1/2 tsp everything-bagel seasoning.",
      "Tuck a slice of the par-cooked bacon on top of or alongside each toast so it finishes crisping with the egg.",
      "Air fry at 360F for 6 to 9 minutes. For a fully cooked, food-safe egg, go 8 to 9 minutes until the white is opaque and set and the yolk reaches 160F; pull at 6 minutes only if you want a runny yolk and are comfortable with that personal choice (not recommended for anyone pregnant, very young, elderly, or immunocompromised).",
      "Confirm the bacon is crisp and cooked through, then carefully lift each toast out with a spatula, top with sliced scallion if using, and eat right away while hot."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a loaf of sandwich bread and a carton of eggs and this whole breakfast lands around $1 per serving, way cheaper than any campus cafe.",
      "Skip the bacon and use whatever you already have in the fridge (a slice of deli turkey or a sprinkle of cheese) to keep it under a dollar.",
      "Save the bread centers you tore out and air fry them alongside as free croutons for tomorrow's salad or soup."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey bacon or a slice of deli turkey",
        "savings": "Saves about $0.15 per serving and cooks in the same time."
      },
      {
        "forIngredientId": "everything-bagel",
        "swap": "a pinch of salt, garlic powder, and sesame seeds",
        "savings": "Uses pantry spices you likely already have, near zero extra cost."
      },
      {
        "forIngredientId": "bread",
        "swap": "sourdough or a sliced bagel half",
        "savings": "Sourdough crisps even better, and a day-old slice you would otherwise toss costs nothing."
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 14,
      "carbs": 17,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "high-protein",
      "one-step",
      "tiktok",
      "quick",
      "dorm-friendly",
      "no-flip"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 360,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-fudgy-box-mix-brownies",
    "name": "Air Fryer Fudgy Box-Mix Brownies",
    "description": "A cheap box of brownie mix in a little 6-inch pan turns into crackly-edged, fudgy-centered squares with that dreamy crispy-edge-to-gooey-middle ratio — pure dorm magic. Your air fryer bakes the whole tray in 15 minutes without turning a tiny apartment into a sauna. Inspired by the viral box-mix air-fryer brownie trick making the rounds on TikTok.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "brownie-mix",
        "quantity": 4,
        "note": "about half a standard box; enough batter for a 6-inch pan"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3,
        "note": "or whatever oil the box calls for"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "a splash to loosen the batter"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "to grease the pan"
      },
      {
        "ingredientId": "dark-chocolate-chips",
        "quantity": 2,
        "optional": true,
        "note": "press on top for extra fudgy pools"
      },
      {
        "ingredientId": "ice-cream",
        "quantity": 2,
        "optional": true,
        "note": "scoop on warm for a la mode"
      }
    ],
    "steps": [
      "In a bowl, stir the brownie mix with the egg, oil, and a splash of water until just combined — a few lumps are fine; don't overmix or you'll lose the fudge.",
      "Grease a 6-inch cake pan (or any oven-safe dish that fits your basket) with cooking spray, scrape in the batter, and smooth the top. Scatter the chocolate chips over if using.",
      "Set the air fryer to 330F and bake for 15 minutes. Around the 8-minute mark, peek and rotate the pan 180 degrees for even edges (no flipping — it's batter).",
      "At 15 minutes the edges should be set and crackly while the center still looks slightly soft. A toothpick near the center should come out with moist, baked crumbs clinging to it — not wet, raw batter. If it's still liquid, give it 2-3 more minutes; the egg must be fully cooked.",
      "Turn the air fryer OFF and let the pan rest inside for 10 minutes; the residual heat finishes the center gently without drying it out.",
      "Lift the pan out and cool 5 more minutes so it firms up enough to slice, then cut into 4 squares.",
      "Serve warm, optionally with a scoop of ice cream melting over the top."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One box of brownie mix makes two of these small batches — split it and you've got dessert twice for pennies.",
      "No 6-inch cake pan? Use a foil loaf pan from the dollar store, or double-line the basket with foil to shape a tray that fits.",
      "Out of eggs? Boxed mixes are forgiving — swap in 1/4 cup applesauce and a little extra oil and they still bake up fudgy."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Melted butter for a richer, more bakery-style crumb",
        "savings": "Pennies more, big flavor upgrade"
      },
      {
        "forIngredientId": "eggs",
        "swap": "1/4 cup applesauce for an eggless, slightly cakier brownie",
        "savings": "Saves about $0.40 and uses a pantry cup"
      },
      {
        "forIngredientId": "dark-chocolate-chips",
        "swap": "Chopped chocolate bar or any chips you have",
        "savings": "Use leftovers instead of buying a new bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 3,
      "carbs": 42,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "chocolate",
      "box-mix",
      "5-ingredient",
      "dorm-friendly",
      "viral"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 15,
    "airFryerTemperatureF": 330,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-caramelized-cinnamon-bananas",
    "name": "Air Fryer Caramelized Cinnamon Bananas",
    "description": "Banana halves dusted in brown sugar and cinnamon turn jammy and caramelized, with a crackly brulee-style crust the dry air-fryer heat builds without a torch. Spoon them over yogurt, oatmeal, or ice cream for a 4-ingredient dessert that costs pennies and tastes like a treat. Inspired by the viral 4-ingredient air-fryer banana trend on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 2,
        "note": "ripe but firm, halved lengthwise"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2,
        "note": "packed, for the caramel crust"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "melted, brushed on the cut side",
        "optional": true
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5,
        "note": "for serving",
        "optional": true
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.25,
        "note": "chopped, for crunch",
        "optional": true
      }
    ],
    "steps": [
      "Peel the bananas and slice each one in half lengthwise so you have 4 long, flat halves. Choose bananas that are ripe and spotty but still firm so they hold their shape.",
      "Line the air-fryer basket with a small piece of parchment or give it a light spritz of cooking spray, then lay the banana halves cut-side up in a single layer without crowding.",
      "If using butter, brush the cut sides, then sprinkle the brown sugar and cinnamon evenly over the tops so every half gets a full sugary coat.",
      "Air fry at 400F for 6 minutes. The sugar should melt, bubble, and set into a glossy caramel crust on top; no flip is needed since the heat works from above.",
      "Check at the 5-minute mark and add 1-2 extra minutes only if the tops aren't fully caramelized; sugar scorches fast, so watch the final minute closely.",
      "Let the bananas rest in the basket for 2-3 minutes off the heat. The caramel is molten right away and firms into that crackly brulee shell as it cools.",
      "Serve warm over Greek yogurt, oatmeal, or ice cream and scatter chopped walnuts on top for crunch."
    ],
    "totalTimeMinutes": 14,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Use overripe bananas from the discount produce bin, or your own spotty ones at home. They are the cheapest, sweetest, and caramelize best.",
      "Skip the butter and just spritz with cooking spray for an even lower-cost, dairy-free treat. The sugar still caramelizes fine.",
      "Buy bananas loose by the single rather than in a bunch so you only pay for the two you need and nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "brown-sugar",
        "swap": "white sugar or coconut sugar",
        "savings": "White sugar is often already in your pantry and costs less than brown."
      },
      {
        "forIngredientId": "butter",
        "swap": "coconut oil or a spritz of cooking spray",
        "savings": "Cooking spray costs about 2 cents and makes it dairy-free."
      },
      {
        "forIngredientId": "walnuts",
        "swap": "peanuts or a sprinkle of granola",
        "savings": "Peanuts are roughly a third the price of walnuts per ounce."
      }
    ],
    "estimatedNutrition": {
      "calories": 160,
      "protein": 1,
      "carbs": 35,
      "fat": 3,
      "fiber": 3
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "4-ingredient",
      "no-bake",
      "snack",
      "vegetarian",
      "gluten-free",
      "tiktok",
      "quick"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 6,
    "airFryerTemperatureF": 400,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-extra-crispy-canned-cinnamon-rolls",
    "name": "Air Fryer Extra-Crispy Cinnamon Rolls",
    "description": "A can of cinnamon rolls turns into crisp-edged, golden swirls that stay fluffy and gooey in the middle, all in about 9 minutes with no oven required. Hot circulating air browns the spirals crispier than baking can, then you ice them while they are warm and melty. Inspired by the viral air-fryer canned cinnamon-roll trend.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "canned-cinnamon-rolls",
        "quantity": 5,
        "note": "one standard can usually has 5 rolls plus an icing packet"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "to lightly coat the basket and prevent sticking"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "optional": true,
        "note": "melted, brushed on after cooking for extra-crisp golden edges"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "optional": true,
        "note": "stir into the icing for a bakery vibe"
      },
      {
        "ingredientId": "pecans",
        "quantity": 1,
        "optional": true,
        "note": "chopped, sprinkled on top"
      }
    ],
    "steps": [
      "Pop the can, separate the 5 rolls, and set the icing packet aside somewhere warm so it stays pourable. Lightly mist your air fryer basket with cooking spray.",
      "Arrange the rolls flat-side down in a single layer with about an inch between them so the hot air can crisp every edge. Do not preheat.",
      "Air fry at 340F for 8-9 minutes. At the 5-minute mark, peek and rotate the basket or swap roll positions so they brown evenly.",
      "Check doneness: the spiral edges should be deep golden and crisp, the centers set, and the tops should spring back lightly and look dry, not doughy. If a roll still seems wet in the middle, give it 1-2 more minutes at 340F.",
      "For shatteringly crisp edges, brush the warm tops with the melted butter straight out of the basket so they set up as they cool slightly.",
      "Let the rolls rest 2 minutes (they are lava-hot inside), then stir the optional cinnamon into the icing and drizzle it generously over the warm rolls.",
      "Scatter the chopped pecans on top if using, and dig in while the centers are still gooey."
    ],
    "totalTimeMinutes": 14,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 9,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A whole can of store-brand cinnamon rolls runs under $2 and feeds two, cheaper and faster than any cafe pastry.",
      "Skip the optional add-ons entirely; the can comes with its own icing, so the rolls alone are a complete treat.",
      "No pecans? Crush a couple of graham crackers or leftover cereal for a free crunchy topping you already have in the dorm."
    ],
    "substitutions": [
      {
        "forIngredientId": "canned-cinnamon-rolls",
        "swap": "Canned biscuits or crescent rolls dusted with cinnamon-sugar and rolled up, a bit more DIY but works in a pinch",
        "savings": "about the same price, uses what you have"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Chopped walnuts or a sprinkle of granola",
        "savings": "saves ~$0.50 if you already have granola"
      },
      {
        "forIngredientId": "butter",
        "swap": "A quick mist of cooking spray on the warm tops",
        "savings": "saves ~$0.17"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 4,
      "carbs": 54,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🥐",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "breakfast",
      "dessert",
      "quick",
      "lazy-weekend",
      "no-oven",
      "dorm-friendly",
      "sweet"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 340,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-nutella-banana-puffs",
    "name": "Air Fryer Nutella Banana Puffs",
    "description": "Flaky golden pastry pockets stuffed with melty Nutella and sweet banana slices, sealed with a fork and dusted in icing sugar. They puff up like a bakery treat but come together with a handful of pantry staples and 8 minutes in the air fryer. Inspired by a popular air-fryer puff-pastry dessert trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "crescent-rolls",
        "quantity": 4,
        "note": "or canned biscuits; press 2 triangles together (or unroll the sheet) into 4 pockets"
      },
      {
        "ingredientId": "nutella",
        "quantity": 4,
        "note": "about 1 tbsp per pocket"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten, for egg wash"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "for dusting",
        "optional": true
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "pinch on top",
        "optional": true
      }
    ],
    "steps": [
      "Unroll the crescent dough and form 4 pockets: press pairs of triangles together (or cut the sheet into 4 rectangles), pinching all perforations closed so each base is solid and seamless. Lay them on a plate.",
      "Spoon about 1 tbsp Nutella onto one half of each piece, then fan 3-4 thin banana slices over the Nutella, leaving a clean half-inch border around the edges so they can seal.",
      "Fold the dough over the filling and press the edges firmly all the way around with a fork; a tight seal keeps the molten Nutella from leaking out during cooking.",
      "Brush the tops with beaten egg for a deep golden bakery shine, then cut a small vent slit in each so steam can escape and the centers cook through.",
      "Lightly grease or line the air fryer basket and arrange the puffs in a single layer, not touching. Air fry at 350F for 8 minutes, gently flipping at the 4-minute mark, until deep golden brown and the dough is fully cooked (no doughy/raw seam when you peek at one).",
      "Let them rest 3-4 minutes (the Nutella is molten straight out of the basket), then dust with powdered sugar and a pinch of cinnamon and serve warm."
    ],
    "totalTimeMinutes": 18,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One can of crescent rolls makes about 4 puffs for around a dollar; split a can across two snack sessions and keep the rest sealed in the fridge.",
      "A spotty, overripe banana is perfect here and usually the cheapest in the bunch; its extra sweetness means you can skip the powdered sugar entirely.",
      "Skip the egg wash and brush on a little milk or a thin smear of butter instead; they still brown up golden and you save the whole egg."
    ],
    "substitutions": [
      {
        "forIngredientId": "crescent-rolls",
        "swap": "canned biscuits, flattened and folded",
        "savings": "biscuits run about the same per piece and seal just as well"
      },
      {
        "forIngredientId": "nutella",
        "swap": "peanut butter or cookie butter for the filling",
        "savings": "peanut butter is roughly half the cost per tbsp"
      },
      {
        "forIngredientId": "banana",
        "swap": "thin apple slices or a spoon of jam",
        "savings": "jam is shelf-stable and cuts the per-serving fruit cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 6,
      "carbs": 38,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian-inspired",
    "tags": [
      "air-fryer",
      "no-stove",
      "dessert",
      "snack",
      "nutella",
      "puff-pastry",
      "banana",
      "vegetarian",
      "dorm-friendly",
      "quick"
    ],
    "crispinessLevel": "crispy",
    "airFryerTimeMinutes": 8,
    "airFryerTemperatureF": 350,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  },
  {
    "id": "af2-pigs-in-a-blanket",
    "name": "Air Fryer Pigs in a Blanket",
    "description": "The two-ingredient party classic gets a glow-up: mini sausages tucked into golden, buttery crescent dough that puffs up light and flaky in the air fryer. Ready in about 12 minutes with zero preheating, they're perfect for game day, a late-night study break, or splitting with roommates. Inspired by a popular air-fryer pigs-in-a-blanket trend.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "crescent-rolls",
        "quantity": 8,
        "note": "one tube; each triangle wraps a sausage piece"
      },
      {
        "ingredientId": "hot-dog",
        "quantity": 3,
        "note": "you need 8 mini pieces; 3 dogs cut into thirds gives 9, so snack on the spare"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "melted, to brush tops",
        "optional": true
      },
      {
        "ingredientId": "everything-bagel",
        "quantity": 1,
        "note": "sprinkle on top",
        "optional": true
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2,
        "note": "for dipping",
        "optional": true
      },
      {
        "ingredientId": "mustard",
        "quantity": 2,
        "note": "for dipping",
        "optional": true
      }
    ],
    "steps": [
      "Pop the crescent-roll tube, unroll it, and separate it into 8 triangles. Cut each hot dog into 3 even pieces so you have 9 mini sausages (you'll wrap 8 and can snack on the extra).",
      "Place one sausage piece on the wide end of each triangle and roll it up toward the point. Don't wrap too tightly so the dough has room to puff.",
      "Lightly mist the air fryer basket with cooking spray and arrange the wraps seam-side down, spaced apart so they don't fuse. Work in batches if your basket is small.",
      "Optional: brush the tops with melted butter and sprinkle on everything-bagel seasoning for extra crunch and flavor.",
      "Air fry at 330F for 9 minutes, no flipping, until the dough is puffed, deep golden, and fully set on the bottom (not doughy). The sausages are pre-cooked, so you're really just baking the dough and heating them through to steaming hot, about 165F inside.",
      "If the dough still looks pale or the centers feel soft, add 1-2 minutes at 330F, checking often so the tops don't over-brown.",
      "Let them rest 2 minutes (they're lava-hot inside), then serve warm with ketchup and mustard for dipping."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 9,
    "difficulty": "easy",
    "dietTags": [],
    "cheapTips": [
      "Crescent rolls and hot dogs are some of the cheapest snack staples at the store - one tube plus a few dogs feeds a whole study group for a couple bucks.",
      "Skip pricey lil' smokies and just cut regular hot dogs into thirds; you get the same bite-size shape for a fraction of the cost.",
      "No preheating needed, which saves a few minutes and a little energy versus firing up the oven for a small batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "hot-dog",
        "swap": "smoked-sausage cut into bite-size coins",
        "savings": "More flavor; costs a bit more per piece but very party-worthy"
      },
      {
        "forIngredientId": "hot-dog",
        "swap": "frozen-meatballs (fully thawed) for a meatball twist",
        "savings": "Similar cost, fun variation"
      },
      {
        "forIngredientId": "crescent-rolls",
        "swap": "canned-biscuits flattened and cut into strips",
        "savings": "About the same price, slightly fluffier dough"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 9,
      "carbs": 26,
      "fat": 20,
      "fiber": 1
    },
    "emoji": "🌭",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "air-fryer",
      "no-stove",
      "snack",
      "party",
      "game-day",
      "two-ingredient",
      "kid-friendly",
      "quick"
    ],
    "crispinessLevel": "lightly crispy",
    "airFryerTimeMinutes": 9,
    "airFryerTemperatureF": 330,
    "equipment": [
      "air-fryer"
    ],
    "primaryCookingMethod": "air-fryer",
    "noStovetopRequired": true
  }
];
