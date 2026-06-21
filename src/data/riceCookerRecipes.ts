import type { Recipe } from "@/lib/types";

/**
 * Rice-cooker recipes — easy, creative, mostly dump-and-go dishes that cook in a
 * rice cooker with no stovetop. Structured into Waivy's catalog (real ingredient
 * IDs, quantities in catalog units) so pricing, macros, and pantry matching work.
 * Each is tagged primaryCookingMethod "rice-cooker" + noStovetopRequired. Photos
 * are in riceCookerRecipePhotos.ts (freely licensed, attributed).
 */
export const RICE_COOKER_RECIPES: Recipe[] = [
  {
    "id": "rice-cooker-hainanese-chicken-rice",
    "name": "Rice Cooker Hainanese Chicken Rice",
    "description": "Silky poached chicken and fragrant ginger-garlic rice cook together in one pot for a comforting takeout-style dinner on a budget.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 1.5,
        "note": "bone-in or boneless skin-on thighs, poached on top of the rice"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "rinsed until water runs clear"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2.25,
        "note": "for cooking the rice; low-sodium preferred"
      },
      {
        "ingredientId": "ginger",
        "quantity": 2,
        "note": "1 inch grated into rice, plus a few slices on the chicken"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced; half for rice, half for the dipping sauce"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "whites in the pot, greens sliced for garnish"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "tablespoon; drizzled over chicken and into the sauce"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "tablespoons; for the dipping sauce"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "teaspoon, divided between rice and chicken"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 1,
        "note": "sliced, to serve on the side"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1,
        "optional": true,
        "note": "chili dipping sauce, to taste"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "optional": true,
        "note": "wedge to squeeze over, brightens the dish"
      }
    ],
    "steps": [
      "Rinse the jasmine rice in the rice cooker pot 2-3 times until the water runs mostly clear, then drain well. Add the chicken broth, grated ginger, half the minced garlic, the scallion whites, 1/2 tsp salt, and a few drops of sesame oil; stir to combine.",
      "Pat the chicken thighs dry and rub them with the remaining 1/2 tsp salt and a little sesame oil. Lay them skin-side up directly on top of the rice with a couple of ginger slices tucked underneath.",
      "Close the lid and run a full cook cycle (white rice / regular setting). The rice steams while the chicken gently poaches above it.",
      "When the cycle ends, check the thickest part of the chicken is cooked through (no pink, juices run clear). If it needs more time, run a second short cook cycle for 8-10 minutes, then let everything rest on Keep Warm for 10 minutes so the rice finishes and the chicken stays juicy.",
      "While it rests, make the dipping sauce: stir together the soy sauce, remaining minced garlic, and the rest of the sesame oil; add sriracha if you like heat.",
      "Lift out the chicken, slice it, and fluff the ginger-garlic rice with a fork. Plate the rice, top with sliced chicken, and garnish with scallion greens.",
      "Serve with cucumber slices, the dipping sauce, and a squeeze of lime."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in chicken thighs are cheaper than breast and stay far juicier when poached on top of the rice.",
      "Swap broth for water plus a crushed bouillon cube to cut cost without losing the savory flavor.",
      "Stretch leftovers into a second meal: chop the chicken into the rice and fry it the next day."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use bone-in chicken drumsticks",
        "savings": "Often cheaper per pound and just as forgiving when poached"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Use plain long-grain white rice",
        "savings": "Saves ~30% versus aromatic jasmine rice"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water plus a bouillon cube",
        "savings": "Cuts the broth cost to pennies per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 30,
      "carbs": 52,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Hainanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein"
    ]
  },
  {
    "id": "rice-cooker-jambalaya",
    "name": "Rice Cooker Jambalaya",
    "description": "A smoky, one-pot Cajun rice loaded with sausage, shrimp, and sweet peppers that practically cooks itself.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "long-grain white rice, rinsed"
      },
      {
        "ingredientId": "sausage",
        "quantity": 2.5,
        "note": "andouille or smoked sausage, sliced into coins (oz)"
      },
      {
        "ingredientId": "shrimp",
        "quantity": 2,
        "note": "peeled and deveined, thawed if frozen (oz)"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "diced (green is traditional)"
      },
      {
        "ingredientId": "celery",
        "quantity": 2,
        "note": "stalks, diced — part of the Cajun trinity"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 0.5,
        "note": "cup, from a can"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2,
        "note": "cups"
      },
      {
        "ingredientId": "cajun-seasoning",
        "quantity": 1.5,
        "note": "tbsp"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "note": "tsp, smoked if you have it"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tbsp"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 1,
        "optional": true,
        "note": "to taste at the table"
      }
    ],
    "steps": [
      "Set the rice cooker to its Cook/Saute setting (or just start a cook cycle with the lid open). Add the olive oil, sausage coins, onion, bell pepper, celery, and garlic. Stir for 5-6 minutes until the sausage browns and the vegetables soften.",
      "Add the rinsed rice and stir for 1 minute so the grains toast slightly and soak up the flavor.",
      "Pour in the chicken broth and crushed tomato, then stir in the Cajun seasoning, paprika, and bay leaf. Scrape the bottom to lift any browned bits.",
      "Close the lid and run a full Cook/White Rice cycle (about 25-30 minutes). Do not lift the lid while it cooks.",
      "When the cycle ends, open the lid and stir in the raw shrimp. Close the lid and run a second short cook cycle (or use Keep Warm for 10-12 minutes) until the shrimp turn pink and opaque.",
      "Remove the bay leaf, fluff everything together, and let it rest 5 minutes. Top with scallions and serve with hot sauce on the side."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Smoked sausage is cheaper than andouille and brings the same smoky punch — use whatever's on sale.",
      "Frozen shrimp costs far less than fresh; just thaw under cold water for 5 minutes before adding.",
      "No Cajun seasoning? Mix paprika, garlic powder, onion powder, cayenne, and a pinch of dried thyme from your pantry."
    ],
    "substitutions": [
      {
        "forIngredientId": "shrimp",
        "swap": "Diced chicken thighs (add them with the sausage in step 1 so they fully cook)",
        "savings": "Saves about $3 per batch versus shrimp"
      },
      {
        "forIngredientId": "sausage",
        "swap": "Sliced hot dogs or kielbasa",
        "savings": "Cuts roughly $2 off the cost"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water plus a bouillon cube",
        "savings": "Saves around $1.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 27,
      "carbs": 58,
      "fat": 15,
      "fiber": 4
    },
    "emoji": "🍤",
    "accentColor": "bg-red-100",
    "cuisine": "Cajun",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "cajun"
    ]
  },
  {
    "id": "rice-cooker-chicken-biryani",
    "name": "Rice Cooker Chicken Biryani",
    "description": "Fragrant garam-masala basmati layered over tender spiced chicken, all from one cozy rice cooker pot.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "basmati-rice",
        "quantity": 2,
        "note": "rinsed until water runs clear"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 1,
        "note": "1 lb, boneless, cut into bite-size chunks"
      },
      {
        "ingredientId": "plain-yogurt",
        "quantity": 0.5,
        "note": "for marinating the chicken"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 2,
        "note": "tsp"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.5,
        "note": "tsp"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 0.5,
        "note": "tsp, adjust to taste"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "tbsp"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 3,
        "note": "cups, for cooking the rice"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "tsp, divided"
      },
      {
        "ingredientId": "saffron",
        "quantity": 1,
        "optional": true,
        "note": "pinch, soaked in 2 tbsp warm milk"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.25,
        "optional": true,
        "note": "cup, chopped, for garnish"
      }
    ],
    "steps": [
      "In a bowl, stir the chicken chunks together with the yogurt, garlic, ginger paste, garam masala, turmeric, cumin, chili powder, and 1 tsp salt. Let marinate while you prep everything else (10+ minutes is great).",
      "Turn the rice cooker to its Cook cycle, add the oil, and let it heat for a minute. Add the sliced onion and cook with the lid open, stirring now and then, until softened and lightly golden, about 6-8 minutes.",
      "Add the marinated chicken with all its marinade. Close the lid and run a full Cook cycle, stirring once halfway, until the chicken is cooked through and saucy, about 12-15 minutes. If your cooker clicks to Warm early, just press Cook again to finish the protein.",
      "Spread the chicken into an even layer. Rinse the basmati until the water runs clear, then layer it gently on top of the chicken. Pour the chicken broth and remaining 0.5 tsp salt over the rice without stirring, so the layers stay distinct.",
      "If using saffron, drizzle the soaked saffron milk over the top. Close the lid and run the Cook cycle until it switches to Warm and the rice is fluffy, about 15-20 minutes.",
      "Let it rest on Warm for 5-10 minutes, then fluff gently with a fork, folding the chicken up through the rice. Garnish with fresh cilantro and serve."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Chicken thighs are cheaper than breast and stay juicier through two cook cycles.",
      "Skip the saffron and lean on turmeric for color and garam masala for aroma — you'll save a few dollars with almost no flavor loss.",
      "Buy whole spices in the bulk bin or a single garam masala blend instead of separate jars to cut cost per serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "chickpeas (drained) for a vegetarian biryani",
        "savings": "~$2 per batch"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water plus a bouillon cube",
        "savings": "~$1 per batch"
      },
      {
        "forIngredientId": "saffron",
        "swap": "an extra pinch of turmeric for color",
        "savings": "~$3 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 30,
      "carbs": 62,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🍛",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "indian"
    ]
  },
  {
    "id": "rice-cooker-mexican-rice",
    "name": "Rice Cooker Mexican Rice",
    "description": "Fluffy, tomatoey, garlicky red rice that practically cooks itself in one dump-and-go batch.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "long-grain white rice, rinsed (2 cups dry)"
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 1,
        "note": "1 cup (8 oz) plain tomato sauce"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2.5,
        "note": "2.5 cups; use veggie-broth to keep it vegan"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 1,
        "note": "1 tbsp for deeper red color and flavor"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "half a small onion, finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "1 tsp ground cumin"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5,
        "note": "0.5 tsp, optional flavor boost",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp, adjust to taste"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.5,
        "note": "0.5 cup peas and/or diced carrot, optional",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "2 tbsp chopped, to finish",
        "optional": true
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "1 lime, cut into wedges to serve",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the rice under cold water until it runs mostly clear, then drain well and add it to the rice cooker pot.",
      "Add the tomato sauce, tomato paste, broth, oil, diced onion, minced garlic, cumin, chili powder, garlic powder, and salt directly into the pot. Stir so the rice is fully coated and the liquid looks evenly red.",
      "If using frozen peas or carrots, scatter them on top now (no need to thaw). Close the lid and run a standard White Rice / Cook cycle.",
      "When the cycle finishes, let the rice rest with the lid closed on Keep Warm for 10 minutes so it steams and firms up.",
      "Fluff thoroughly with a fork or rice paddle, lifting from the bottom to mix in the deeper-colored rice. If any spots feel underdone, stir, add a splash of broth, and run a short second Cook cycle.",
      "Stir in chopped cilantro and serve with lime wedges to squeeze over the top."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A can of tomato sauce plus a spoon of tomato paste costs less than a jar of salsa and gives a brighter, fresher red.",
      "Make a double batch and freeze half in portioned containers; it reheats perfectly in the microwave for fast weeknight burrito bowls.",
      "Skip store-bought broth and use a bouillon cube dissolved in water to cut the cost in half."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water plus a crumbled bouillon cube",
        "savings": "~$1.50 per batch vs. boxed broth"
      },
      {
        "forIngredientId": "tomato-sauce",
        "swap": "Salsa, blended smooth",
        "savings": "Uses up an open jar instead of buying a can"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain white rice",
        "savings": "~$0.80 vs. jasmine, same fluffy result"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 7,
      "carbs": 60,
      "fat": 6,
      "fiber": 3
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "budget",
      "side-dish",
      "vegetarian"
    ]
  },
  {
    "id": "rice-cooker-coconut-rice",
    "name": "Rice Cooker Coconut Rice",
    "description": "Creamy, fragrant coconut jasmine rice from just two pantry staples and one cook cycle.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "dry jasmine rice, rinsed"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "one 13.5 oz can full-fat coconut milk"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "use the empty coconut milk can to measure"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "optional": true,
        "note": "tsp, brings out the coconut"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "optional": true,
        "note": "tsp, for a subtle sweet coconut-rice flavor"
      }
    ],
    "steps": [
      "Rinse the jasmine rice in the rice cooker pot under cold water until the water runs mostly clear, then drain well. This keeps the finished rice fluffy instead of gluey.",
      "Add the full can of coconut milk to the pot, then refill the empty can about three-quarters full with water and pour that in too. Stir in the salt and sugar if using.",
      "Stir once to combine and smooth the rice into an even layer. The total liquid should sit at or just below your cooker's '2 cups rice' water line.",
      "Close the lid and run a normal White Rice / Cook cycle. Do not lift the lid while it runs.",
      "When the cooker switches to Warm, let it rest with the lid closed for 10 minutes so the coconut finishes absorbing.",
      "Open the lid and fluff gently with a fork or rice paddle, lifting from the bottom where the richest coconut settles. Serve warm."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A single can of coconut milk transforms a whole bag of plain rice, so this costs pennies more than steaming rice on its own.",
      "Use the empty coconut milk can as your water measure, no measuring cup or extra dishes needed.",
      "Buy jasmine rice in the largest bag you can store, the per-serving cost drops sharply at the 5 lb size."
    ],
    "substitutions": [
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain white rice",
        "savings": "Saves about $0.40 per pound versus jasmine"
      },
      {
        "forIngredientId": "coconut-milk",
        "swap": "Lite coconut milk plus a splash extra water",
        "savings": "Lite cans run about 25% cheaper and cut the fat"
      },
      {
        "forIngredientId": "sugar",
        "swap": "A drizzle of honey stirred in after cooking",
        "savings": "Use what you already have, no cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 5,
      "carbs": 48,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🥥",
    "accentColor": "bg-amber-100",
    "cuisine": "Southeast Asian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "2-ingredient",
      "vegan",
      "side-dish"
    ]
  },
  {
    "id": "rice-cooker-mushroom-risotto",
    "name": "Rice Cooker Mushroom Risotto",
    "description": "Creamy, no-stir parmesan-mushroom risotto that the rice cooker babysits for you while you do literally anything else.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "arborio-rice",
        "quantity": 1.5,
        "note": "arborio (short-grain) rice — gives the creamy texture"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 4,
        "note": "cremini or button mushrooms, sliced"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small yellow onion, finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "tablespoons, divided"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 4,
        "note": "cups, warm"
      },
      {
        "ingredientId": "white-wine",
        "quantity": 0.25,
        "note": "cup dry white wine (optional but classic)",
        "optional": true
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.5,
        "note": "cup finely grated, plus more to finish"
      },
      {
        "ingredientId": "thyme-fresh",
        "quantity": 1,
        "note": "teaspoon leaves, or 0.5 tsp dried"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "note": "tablespoons chopped, to finish",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon, to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "teaspoon black pepper"
      }
    ],
    "steps": [
      "Turn the rice cooker to the Cook/White Rice setting (lid open) and melt 1 tbsp butter in the bowl. Add the diced onion and sliced mushrooms and let them soften and release their liquid, stirring once or twice, about 5-6 minutes.",
      "Stir in the minced garlic and thyme for 30 seconds, then add the dry arborio rice and stir to coat it in the butter for about a minute so the grains turn slightly translucent at the edges.",
      "Pour in the white wine (if using) and let it bubble off for a minute, then add the warm veggie broth and the salt. Stir once to settle everything evenly.",
      "Close the lid and run a full Cook cycle. Most rice cookers will click to Warm before the risotto is done — when it does, give it a good stir, run a SECOND short Cook cycle, and check that the rice is creamy and just tender with a little bite (add a splash more broth or hot water if it looks dry).",
      "Switch to Warm, stir in the grated parmesan and the remaining 1 tbsp butter until glossy and creamy. Season with black pepper and more salt to taste.",
      "Let it rest with the lid closed for 3-4 minutes to thicken, then stir, top with extra parmesan and chopped parsley, and serve right away."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Skip the wine and use an extra splash of broth plus a teaspoon of vinegar or lemon juice for the same bright tang at no extra cost.",
      "Buy whole mushrooms and slice them yourself — pre-sliced packs cost nearly double for the same weight.",
      "A bouillon cube dissolved in hot water is far cheaper than boxed broth and tastes just as rich in risotto."
    ],
    "substitutions": [
      {
        "forIngredientId": "arborio-rice",
        "swap": "short-grain sushi rice or regular white rice",
        "savings": "~$2 vs specialty arborio; still gets creamy with the extra stirring step"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "1 bouillon cube dissolved in 4 cups hot water",
        "savings": "~$2 per batch vs boxed broth"
      },
      {
        "forIngredientId": "white-wine",
        "swap": "extra broth + 1 tsp lemon juice",
        "savings": "skips a whole bottle, ~$8"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 11,
      "carbs": 58,
      "fat": 9,
      "fiber": 3
    },
    "emoji": "🍄",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "comfort-food",
      "no-stir"
    ]
  },
  {
    "id": "rice-cooker-mac-and-cheese",
    "name": "Rice Cooker Mac and Cheese",
    "description": "Impossibly creamy, stovetop-free mac and cheese that cooks the pasta and the sauce in one pot right in your rice cooker.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "macaroni",
        "quantity": 2,
        "note": "elbow macaroni, dry (about 8 oz)"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "start with 2 cups; add a splash more if it looks dry"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "whole milk for the creamiest result"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 0.5,
        "note": "the secret to a silky, no-grit sauce"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 2,
        "note": "freshly shredded sharp cheddar (about 8 oz); melts better than pre-shredded"
      },
      {
        "ingredientId": "american-singles",
        "quantity": 2,
        "optional": true,
        "note": "2 slices for extra-smooth melt"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "teaspoon, tossed with the cheese to prevent clumping"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "teaspoon, plus more to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "mustard-powder",
        "quantity": 0.25,
        "optional": true,
        "note": "teaspoon; sharpens the cheese flavor"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.25,
        "optional": true,
        "note": "teaspoon, for color and warmth"
      }
    ],
    "steps": [
      "Add the dry macaroni, water, butter, salt, and pepper to the rice cooker pot and stir once so the pasta is submerged.",
      "Close the lid and run a normal cook cycle. After about 8 minutes, open and stir to keep the pasta from sticking; let the cycle continue until most of the water is absorbed and the pasta is just tender, roughly 12-15 minutes total.",
      "Toss the shredded cheddar with the cornstarch (and mustard powder, if using) in a bowl so every piece is lightly coated.",
      "Pour in the milk and evaporated milk, then add the cheese a handful at a time, stirring after each addition until melted and glossy. Drop in the American singles now if using.",
      "If the cooker has switched to Keep Warm, run a short second cook cycle (or hold on Warm with the lid open) and stir constantly for 2-3 minutes until the sauce is thick and creamy.",
      "Taste, adjust salt, dust with paprika, and serve immediately while hot and stretchy."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Buy a block of cheddar and shred it yourself — it is cheaper per ounce than pre-shredded and melts far smoother.",
      "Evaporated milk is shelf-stable and cheap; one can keeps your sauce creamy without buying cream.",
      "No evaporated milk? A teaspoon of cornstarch tossed with the cheese keeps a sauce made from regular milk from breaking."
    ],
    "substitutions": [
      {
        "forIngredientId": "cheddar-block",
        "swap": "Any meltable block cheese like Colby or a cheddar-jack blend works just as well",
        "savings": "Store-brand block cheese saves about $1.50 vs. name-brand shreds"
      },
      {
        "forIngredientId": "evaporated-milk",
        "swap": "Use an extra 1/2 cup whole milk plus an extra teaspoon of cornstarch",
        "savings": "Skips a $1 can if you already have milk on hand"
      },
      {
        "forIngredientId": "american-singles",
        "swap": "A spoonful of cream cheese for the same smooth, creamy melt",
        "savings": "Use what you have — no need to buy singles, ~$2 saved"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 22,
      "carbs": 48,
      "fat": 27,
      "fiber": 2
    },
    "emoji": "🧀",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "comfort-food",
      "vegetarian"
    ]
  },
  {
    "id": "rice-cooker-steamed-egg",
    "name": "Rice Cooker Savory Steamed Egg",
    "description": "A silky, custard-soft steamed egg cup that comes together with one cheap carton of eggs and a flick of the cook switch.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "room temperature whisks smoother"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.25,
        "note": "1.25 cups warm broth (or water) - the 1.5:1 liquid-to-egg ratio is what makes it silky"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "1 tsp, plus a drizzle to finish"
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 0.5,
        "note": "1/2 tsp, drizzled at the end"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 1,
        "note": "1 pinch"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "1 stalk, thinly sliced for garnish"
      },
      {
        "ingredientId": "shrimp",
        "quantity": 1,
        "optional": true,
        "note": "4 small shrimp, halved, nestled in before steaming"
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "optional": true,
        "note": "1 pinch on top to finish"
      }
    ],
    "steps": [
      "Crack the eggs into a heatproof bowl that fits inside your rice cooker pot, add the salt, soy sauce, and white pepper, and whisk gently until just combined - avoid making foam.",
      "Pour in the warm chicken broth (or water) in a slow stream while whisking, then skim off any bubbles with a spoon so the surface is glassy; this is the secret to a smooth, non-pocky custard.",
      "If using shrimp, drop the halved pieces into the egg mixture now. Cover the bowl tightly with foil to keep condensation drips off the surface.",
      "Pour about 2 cups of water into the rice cooker pot, set a small heatproof rack or upside-down ramekin inside, and place the covered egg bowl on top so it steams rather than boils.",
      "Close the lid and press the Cook cycle. After it clicks to Warm (about 12-15 minutes), check that the center is just set with a slight jiggle; if still runny, run a second Cook cycle for 5 more minutes.",
      "Uncover, drizzle with the sesame oil and a little extra soy sauce, then scatter the sliced scallion (and furikake if using) over the top and serve warm, scooped straight from the bowl."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 17,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Eggs are one of the cheapest proteins per gram - one carton stretches across many of these for pennies a serving.",
      "Swap the chicken broth for plain water plus a pinch of extra salt and you lose almost nothing in flavor while spending nothing.",
      "Use the leftover egg shells' carton eggs for breakfast too - buy the largest carton your store sells for the best per-egg price."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-broth",
        "swap": "Plain water with an extra pinch of salt",
        "savings": "~$0.40 per batch"
      },
      {
        "forIngredientId": "shrimp",
        "swap": "A spoonful of frozen peas or corn",
        "savings": "~$1.50 per batch"
      },
      {
        "forIngredientId": "toasted-sesame-oil",
        "swap": "Any neutral oil with a dash of soy",
        "savings": "~$0.15 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 11,
      "carbs": 2,
      "fat": 8,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-yellow-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "steamed",
      "comfort-food"
    ]
  },
  {
    "id": "rice-cooker-banana-oatmeal",
    "name": "Rice Cooker Banana Oatmeal",
    "description": "Wake up to creamy banana-cinnamon oatmeal that practically cooks itself in your rice cooker.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "oats",
        "quantity": 1,
        "note": "old-fashioned rolled oats (1 cup)"
      },
      {
        "ingredientId": "milk",
        "quantity": 1.5,
        "note": "milk or water, or a mix (1.5 cups)"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "1 ripe banana, mashed; reserve a few slices for topping"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "ground cinnamon (1/2 tsp)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125,
        "note": "pinch of salt to brighten the flavor"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "optional": true,
        "note": "vanilla extract (1/2 tsp)"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 1,
        "optional": true,
        "note": "maple syrup or honey to taste (1 tbsp)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 2,
        "optional": true,
        "note": "chopped walnuts for topping (2 tbsp)"
      }
    ],
    "steps": [
      "Add the oats, milk (or water), a pinch of salt, and the cinnamon directly into the rice cooker pot and give it a quick stir.",
      "Mash the ripe banana well and stir it into the pot until mostly smooth, saving a few banana slices for topping later.",
      "Close the lid and run a normal Cook cycle. Once it clicks to Warm, give it a stir; if the oats are still soupy, run a second short cook cycle (most cookers reach the right thickness after one cycle plus 5 minutes on Warm).",
      "Stir in the vanilla and let the oatmeal sit on Warm for 5 minutes with the lid closed so it thickens to a creamy porridge.",
      "Spoon into bowls, drizzle with maple syrup or honey, and finish with the reserved banana slices and chopped walnuts."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use overripe, spotty bananas you can grab on markdown - they are sweeter and mash easier, so you need less added syrup.",
      "Swap half or all of the milk for water to cut cost; the mashed banana keeps it creamy.",
      "Buy oats in the big bulk bag rather than single-serve packets - it is a fraction of the price per bowl."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use water or oat-milk instead of dairy milk",
        "savings": "Saves about $0.30 a bowl and makes it dairy-free"
      },
      {
        "forIngredientId": "maple-syrup",
        "swap": "Use brown sugar or honey",
        "savings": "Saves around $0.20 per serving"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Top with raisins or a spoon of peanut-butter",
        "savings": "Saves about $0.40 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 9,
      "carbs": 50,
      "fat": 7,
      "fiber": 6
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "breakfast",
      "meal-prep"
    ]
  },
  {
    "id": "rice-cooker-teriyaki-chicken",
    "name": "Rice Cooker Teriyaki Chicken & Rice",
    "description": "Sweet-savory teriyaki chicken steams right on top of fluffy rice for a glossy, one-pot dinner with almost zero cleanup.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "dry jasmine rice (or any long-grain white rice)"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 1.25,
        "note": "boneless skinless thighs, cut into 1-inch pieces"
      },
      {
        "ingredientId": "teriyaki-sauce",
        "quantity": 0.5,
        "note": "bottled teriyaki sauce, divided"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "tablespoons low-sodium if available"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "tablespoon, for extra glaze"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1,
        "note": "teaspoon"
      },
      {
        "ingredientId": "frozen-stir-fry-mix",
        "quantity": 2,
        "note": "cups frozen broccoli/carrot/pepper blend"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "tablespoon, to thicken the glaze at the end"
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
        "note": "teaspoon, toasted, for garnish"
      },
      {
        "ingredientId": "water",
        "quantity": 2.25,
        "note": "cups, for cooking the rice"
      }
    ],
    "steps": [
      "In a bowl, toss the chicken pieces with 1/4 cup teriyaki sauce, the soy sauce, honey, minced garlic, and ginger paste. Let it sit while you set up the rice.",
      "Rinse the jasmine rice until the water runs mostly clear, then add it to the rice cooker pot with 2 1/4 cups water and a pinch of salt. Spread into an even layer.",
      "Lay the marinated chicken pieces in a single layer right on top of the rice, then close the lid and run a full cook cycle (white rice setting).",
      "When the cycle ends, open the lid and check the chicken is cooked through (no pink, juices run clear). If your cooker is small or the chicken is still underdone, stir gently and run a second short cook cycle for 8-10 minutes.",
      "Scatter the frozen stir-fry veg over the top, close the lid, and let it steam on the keep-warm setting for 8-10 minutes until the veggies are hot and tender.",
      "Stir the cornstarch into the remaining 1/4 cup teriyaki sauce plus 2 tablespoons water, pour it over everything, and run keep-warm 3-5 more minutes so the glaze thickens and coats the chicken.",
      "Fluff together, then top with sliced scallions and sesame seeds before serving."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Chicken thighs are cheaper and stay juicier than breasts in a rice cooker — buy a family pack and freeze portions.",
      "A bag of frozen stir-fry mix is cheaper than fresh and means zero chopping or waste.",
      "Make your own teriyaki from pantry soy sauce, honey, garlic, and ginger to skip the bottled sauce entirely."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "boneless chicken breast or extra-firm tofu cubes",
        "savings": "Tofu drops the per-serving cost by about 40%"
      },
      {
        "forIngredientId": "teriyaki-sauce",
        "swap": "extra soy sauce + honey + a splash of rice vinegar",
        "savings": "Saves ~$3 vs a bottle of teriyaki"
      },
      {
        "forIngredientId": "frozen-stir-fry-mix",
        "swap": "frozen broccoli or any frozen veg you already have",
        "savings": "Use what's in the freezer for $0 extra"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 34,
      "carbs": 68,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese-inspired",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "meal-prep"
    ]
  },
  {
    "id": "rice-cooker-shrimp-paella",
    "name": "Rice Cooker Shrimp Paella",
    "description": "Smoky paprika rice studded with sweet shrimp, peas, and peppers — a one-pot Spanish classic made effortless in your rice cooker.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "long-grain or paella-style rice; rinsed"
      },
      {
        "ingredientId": "shrimp",
        "quantity": 0.75,
        "note": "peeled, deveined; thawed if frozen (pounds)"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2.5,
        "note": "warm; cups"
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1.5,
        "note": "tablespoons; the smoky backbone"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "red, diced"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.75,
        "note": "cups"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small, finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "saffron",
        "quantity": 1,
        "optional": true,
        "note": "a pinch, steeped in the broth (optional but classic)"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "cut into wedges, for serving"
      },
      {
        "ingredientId": "parsley",
        "quantity": 2,
        "note": "fresh, chopped, for garnish (tablespoons)"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "teaspoon, to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "teaspoon"
      }
    ],
    "steps": [
      "Rinse the rice under cold water until it runs clear, then add it to the rice cooker pot. If using saffron, crumble the pinch into the warm chicken broth and let it steep for a few minutes to release its color and aroma.",
      "Add the olive oil, diced onion, minced garlic, diced bell pepper, smoked paprika, tomato paste, salt, and pepper directly to the pot. Pour in the saffron broth and stir everything together so the paprika and tomato paste dissolve evenly and tint the rice red-orange.",
      "Close the lid and run a full standard cook cycle. Do not lift the lid while it cooks — let the rice absorb the broth and build that smoky flavor.",
      "When the cycle ends, stir in the shrimp and frozen peas, nestling the shrimp into the hot rice. Close the lid and run a second cook cycle (or use the Keep Warm setting for 10-12 minutes) until the shrimp turn pink and opaque all the way through.",
      "Let the paella rest covered for 5 minutes — this firms up the grains and lets any liquid finish absorbing. For the prized crispy socarrat bottom, leave it on Keep Warm an extra 5 minutes without stirring.",
      "Fluff gently, taste and adjust salt, then garnish with chopped parsley and serve with lemon wedges to squeeze over the top."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen shrimp is far cheaper than fresh and works perfectly here — just thaw under cold water for a few minutes before adding.",
      "Skip the saffron and lean on smoked paprika for that deep paella color and flavor at a fraction of the cost.",
      "Use water plus a bouillon cube instead of boxed chicken broth to save a dollar or two without losing flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "shrimp",
        "swap": "diced chicken thighs (run a longer second cycle until cooked through)",
        "savings": "Saves about $3-4 per batch"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "plain long-grain white rice",
        "savings": "Saves around $1 per box"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water plus a bouillon cube",
        "savings": "Saves about $1.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 26,
      "carbs": 60,
      "fat": 8,
      "fiber": 4
    },
    "emoji": "🦐",
    "accentColor": "bg-orange-100",
    "cuisine": "Spanish",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "seafood",
      "high-protein",
      "gluten-free"
    ]
  },
  {
    "id": "rice-cooker-lentil-dal",
    "name": "Rice Cooker Lentil Dal",
    "description": "A cozy, golden red-lentil dal that simmers itself silky and creamy while you do absolutely nothing.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "red-lentils",
        "quantity": 1.5,
        "note": "dry red lentils (masoor dal), rinsed"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1,
        "note": "1 tbsp, or fresh grated ginger"
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "diced, or 1 cup canned crushed tomato"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "1 tsp ground"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 0.5,
        "note": "1/2 tsp, adjust to taste"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.25,
        "note": "1 1/4 tsp, to taste"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 3.5,
        "note": "cups, or water"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 0.5,
        "note": "cup full-fat, stirred in at the end"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 tbsp, or coconut oil for vegan",
        "optional": true
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice of half, to finish"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 2,
        "note": "tbsp chopped, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the red lentils in a strainer until the water runs clear, then add them straight to the rice cooker pot.",
      "Add the chopped onion, garlic, ginger paste, diced tomato, turmeric, cumin, garam masala, chili powder, salt, butter, and the broth or water. Give it a good stir to combine.",
      "Close the lid and run a full cook cycle (use the 'Cook'/'White Rice' setting). If your cooker clicks to 'Keep Warm' before the lentils are soft and broken down, simply run a second cook cycle.",
      "Open the lid and stir well. The lentils should be soft and falling apart; if it still looks soupy, leave the lid open on 'Keep Warm' for 5-10 minutes to thicken, or splash in a little hot water if it's too thick.",
      "Stir in the coconut milk and let it warm through on 'Keep Warm' for about 3 minutes so it stays creamy and bright.",
      "Finish with a squeeze of lemon juice, taste and adjust salt, then top with chopped cilantro. Serve over rice or with naan."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Red lentils are one of the cheapest proteins per gram — a single bag makes this pot several times over.",
      "Skip fresh tomatoes and use a half can of crushed tomato; it's cheaper, lasts longer, and gives a richer body.",
      "Water plus a bouillon cube works just as well as boxed broth for a fraction of the cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "coconut-milk",
        "swap": "A splash of milk or heavy cream",
        "savings": "Use what's in the fridge instead of buying a can"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "Water plus a bouillon cube",
        "savings": "Saves about $2 per pot"
      },
      {
        "forIngredientId": "ginger-paste",
        "swap": "1/4 tsp ginger powder",
        "savings": "Avoids buying fresh ginger you won't finish"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 18,
      "carbs": 45,
      "fat": 8,
      "fiber": 11
    },
    "emoji": "🍲",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegan",
      "high-protein",
      "budget"
    ]
  },
  {
    "id": "rice-cooker-bibimbap-bowl",
    "name": "Rice Cooker Bibimbap Bowl",
    "description": "A cozy Korean rice bowl where the rice crisps golden at the bottom while quick-cooked veg, a jammy egg, and a swirl of gochujang pile on top.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 1,
        "note": "short-grain or any sticky white rice; crisps best at the bottom"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "cut into thin matchsticks"
      },
      {
        "ingredientId": "spinach",
        "quantity": 2,
        "note": "2 big handfuls"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 2,
        "note": "thinly sliced; shiitake if you have it"
      },
      {
        "ingredientId": "zucchini",
        "quantity": 0.5,
        "note": "half a zucchini, thin half-moons",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, for topping"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 2,
        "note": "Korean chili paste; the heart of the bowl"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 tsp, to balance the gochujang"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "to garnish",
        "optional": true
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to oil the cooker pot for crisping"
      }
    ],
    "steps": [
      "Rinse 1 cup rice until the water runs mostly clear, then add it to the rice cooker with 1 cup water and a light brush of vegetable oil around the bottom and sides of the pot (this is what crisps the rice). Start a normal cook cycle.",
      "While the rice cooks, mix the sauce in a small bowl: gochujang, soy sauce, toasted sesame oil, minced garlic, and the sugar. Stir in a splash of water until it's a spoonable glaze.",
      "When the cycle finishes, fluff the rice, then lay the carrot, mushroom, zucchini, and spinach on top in separate piles. Crack the eggs right onto the rice, close the lid, and run a SECOND cook cycle so the veg steams and the eggs set (about 12-15 minutes).",
      "Let it sit on 'keep warm' for 8-10 extra minutes without opening the lid: this toasts the rice against the hot pot into a crispy golden crust (the prized nurungji).",
      "Open the lid, drizzle the gochujang sauce over everything, and scatter sliced scallion and sesame seeds on top.",
      "Scoop into bowls, making sure to scrape up some of the crispy bottom rice, and stir it all together just before eating."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen mixed veg works just as well as fresh: dump it straight on the rice for the second cycle, no chopping.",
      "A tub of gochujang costs a few dollars and lasts months, so the per-bowl spice cost is pennies.",
      "Skip pricey shiitake and use whatever button or cremini mushrooms are on sale; any mushroom melts into the bowl."
    ],
    "substitutions": [
      {
        "forIngredientId": "sushi-rice",
        "swap": "Any short-grain white rice, or even regular long-grain rice",
        "savings": "Plain white rice is cheaper per pound and still crisps up at the bottom"
      },
      {
        "forIngredientId": "gochujang",
        "swap": "Sriracha mixed with a little extra soy sauce and sugar",
        "savings": "Uses a bottle you likely already own instead of buying a new paste"
      },
      {
        "forIngredientId": "mushroom",
        "swap": "Frozen stir-fry vegetable mix",
        "savings": "Costs less and avoids waste from buying fresh veg you won't finish"
      }
    ],
    "estimatedNutrition": {
      "calories": 460,
      "protein": 14,
      "carbs": 72,
      "fat": 12,
      "fiber": 5
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "korean"
    ]
  },
  {
    "id": "rice-cooker-quinoa-pilaf",
    "name": "Rice Cooker Quinoa Pilaf",
    "description": "Fluffy herbed quinoa studded with sweet veg and toasted almonds — a set-and-forget side that eats like a meal.",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "quinoa",
        "quantity": 1.5,
        "note": "dry, rinsed well to remove bitterness"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 2.5,
        "note": "or water + 1 bouillon cube"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "small dice"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.75,
        "note": "no need to thaw"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.25,
        "note": "teaspoon, for golden color",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "teaspoon, adjust to broth saltiness"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "teaspoon"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juiced, stirred in at the end"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.25,
        "note": "cup chopped, or substitute cilantro"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.25,
        "note": "cup, for crunch",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the quinoa under cold water in a fine strainer for 30 seconds — this is the one step you can't skip, or the pilaf tastes soapy. Drain well.",
      "Add the olive oil, diced onion, garlic, and carrot to the rice cooker pot. Stir, close the lid, and run a short cook cycle for about 5 minutes to soften the aromatics (if your cooker has no manual cook button, just add them raw — they'll still soften).",
      "Add the rinsed quinoa, veggie broth, turmeric, salt, and pepper to the pot. Stir once to combine and level the quinoa under the liquid.",
      "Close the lid and run a full cook cycle. When it switches to 'Keep Warm,' scatter the frozen peas over the top, close the lid again, and let them steam in the residual heat for 8 to 10 minutes.",
      "Fluff the quinoa gently with a fork — you'll see the little white spirals pop, which means it's done. If it's still wet, run a second short cycle for 5 minutes.",
      "Stir in the lemon juice and chopped parsley, then top with slivered almonds. Taste and add a pinch more salt if needed before serving."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy quinoa from the bulk bin — it's often half the price of boxed and you only take what you need.",
      "Swap the veggie broth for water plus a bouillon cube to save money without losing flavor.",
      "Use whatever frozen veg you already have instead of peas and carrots — a frozen mixed-veg bag works perfectly."
    ],
    "substitutions": [
      {
        "forIngredientId": "veggie-broth",
        "swap": "Water plus a bouillon cube or a pinch of extra salt",
        "savings": "~$0.40 per batch"
      },
      {
        "forIngredientId": "slivered-almonds",
        "swap": "Sunflower seeds or just skip the nuts",
        "savings": "~$0.75 per batch"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "Fresh cilantro or 1 tsp dried parsley",
        "savings": "~$0.30 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 10,
      "carbs": 44,
      "fat": 8,
      "fiber": 6
    },
    "emoji": "🌾",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mediterranean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "meal-prep",
      "vegan",
      "gluten-free"
    ]
  },
  {
    "id": "rice-cooker-chocolate-cake",
    "name": "Rice Cooker Chocolate Cake",
    "description": "A wildly fudgy one-bowl chocolate cake that bakes itself right in your rice cooker, no oven required.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.75,
        "note": "granulated white sugar"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 0.5,
        "note": "unsweetened cocoa powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temp"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.75,
        "note": "whole or any milk"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.33,
        "note": "neutral oil, keeps it moist"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 0.5,
        "optional": true,
        "note": "fold in for fudgy pockets"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "to grease the bowl"
      }
    ],
    "steps": [
      "Generously grease the inside of the rice cooker bowl with cooking spray (bottom and sides) so the cake releases cleanly.",
      "In a single mixing bowl, whisk together the flour, sugar, cocoa powder, baking soda, and salt until no lumps remain.",
      "Add the egg, milk, oil, and vanilla. Stir just until you have a smooth, pourable batter, then fold in the chocolate chips if using.",
      "Pour the batter into the greased rice cooker bowl, smooth the top, and seat the bowl. Close the lid and press the standard Cook (white rice) cycle.",
      "When the cycle clicks to Warm, the top will still look slightly soft. Let it rest 5 minutes, then press Cook a second time (most machines need a second cycle for the center to set).",
      "Insert a toothpick into the center; if it comes out with only moist crumbs, it's done. If wet, run a short third cycle, checking every 5 minutes.",
      "Switch off the cooker and let the cake cool 10 minutes, then flip the bowl onto a plate. Slice into 6 wedges and serve warm."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Cocoa powder and flour cost pennies per cake, far cheaper than a boxed mix and you control the sweetness.",
      "Skip the chocolate chips to save money; the cocoa alone makes it plenty chocolatey.",
      "Use water plus a spoon of oil if you're out of milk, the cake stays moist either way."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "almond or oat milk",
        "savings": "use what you have, no extra carton needed"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "melted butter",
        "savings": "swap for richer flavor with pantry staples"
      },
      {
        "forIngredientId": "chocolate-chips",
        "swap": "chopped chocolate bar",
        "savings": "use leftover candy instead of buying chips"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 5,
      "carbs": 48,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "Dessert",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "dessert",
      "no-oven"
    ]
  },
  {
    "id": "rice-cooker-garlic-mushroom-rice",
    "name": "Rice Cooker Garlic Mushroom Rice",
    "description": "Buttery garlic-soy mushroom rice that comes out savory and fluffy from one cook cycle, no babysitting required.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "jasmine or any long-grain white rice, rinsed (cups dry)"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 3,
        "note": "cremini or white button mushrooms, sliced (oz)"
      },
      {
        "ingredientId": "garlic",
        "quantity": 5,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "tablespoons, divided"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2.25,
        "note": "low-sodium; sub veggie broth or water (cups, as cooking liquid)"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "thyme-fresh",
        "quantity": 1,
        "optional": true,
        "note": "teaspoon leaves, or a pinch dried"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "teaspoon, freshly ground"
      }
    ],
    "steps": [
      "Rinse the rice under cold water until it runs mostly clear, then drain well and add it to the rice cooker pot.",
      "Add the sliced mushrooms, minced garlic, soy sauce, olive oil, pepper, and 1 tablespoon of the butter directly on top of the rice, then pour in the chicken broth and give it one gentle stir to level everything out.",
      "Close the lid and run a full cook cycle on the normal/white rice setting; the mushrooms will steam down and release their savory juices into the rice.",
      "When the cycle finishes, let it sit on Keep Warm for 10 minutes without opening the lid so the rice finishes steaming and the grains firm up.",
      "Open the lid, drop in the remaining 1 tablespoon butter and the fresh thyme, and fluff everything together with a fork or rice paddle until the butter melts through.",
      "Taste and add a splash more soy sauce if needed, top with sliced scallions, and serve hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Whole white button mushrooms are usually cheaper than pre-sliced or cremini and taste the same here.",
      "Swap chicken broth for water plus half a bouillon cube to save money without losing the savory depth.",
      "Buy garlic by the loose bulb instead of pre-minced jars; it is far cheaper per clove and tastes better."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water with a crushed bouillon cube or a spoon of miso",
        "savings": "~$0.40/serving vs boxed broth"
      },
      {
        "forIngredientId": "mushroom",
        "swap": "Rehydrated dried shiitake (cheaper per serving and very savory)",
        "savings": "~$0.30/serving"
      },
      {
        "forIngredientId": "butter",
        "swap": "Sesame oil or extra olive oil for a fully vegan version",
        "savings": "~$0.15/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 310,
      "protein": 7,
      "carbs": 56,
      "fat": 7,
      "fiber": 2
    },
    "emoji": "🍄",
    "accentColor": "bg-amber-100",
    "cuisine": "Asian-inspired",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "budget"
    ]
  },
  {
    "id": "rice-cooker-black-beans-rice",
    "name": "Rice Cooker Black Beans & Rice",
    "description": "A cozy Cuban-style one-pot of garlicky black beans and fluffy rice that practically cooks itself.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "long-grain white rice, dry"
      },
      {
        "ingredientId": "black-beans",
        "quantity": 2,
        "note": "two 15 oz cans, drained and rinsed"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 2.25,
        "note": "cups; sub water + a bouillon cube"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small, finely diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "green, diced (the Cuban sofrito base)"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "teaspoon, ground"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "teaspoon, dried"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1,
        "note": "whole leaf"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "tablespoon; a splash brightens the beans"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "teaspoon, or to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 0.25,
        "note": "cup chopped, to finish",
        "optional": true
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "cut into wedges for serving",
        "optional": true
      }
    ],
    "steps": [
      "Add the olive oil, diced onion, green bell pepper, and garlic to the rice cooker pot. Run the standard cook cycle for about 5 minutes with the lid open, stirring once or twice, until the vegetables soften into a quick sofrito.",
      "Rinse the dry rice until the water runs mostly clear, then add it to the pot along with the drained black beans, vegetable broth, cumin, oregano, bay leaf, vinegar, salt, and pepper. Stir to combine evenly.",
      "Close the lid and run a full cook cycle (use the White Rice setting if your machine has one). Do not lift the lid while it cooks.",
      "When the cycle ends, let it sit on Keep Warm for 10 minutes so the rice steams and the beans finish absorbing the broth. If the rice still tastes firm, add a splash of broth or water and run a second short cook cycle.",
      "Open the lid, remove the bay leaf, and fluff everything together gently with a fork or paddle.",
      "Finish with chopped cilantro and a squeeze of lime, and serve warm."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Dried black beans cooked in bulk cost a fraction of canned — make a big batch and freeze in 1.5-cup portions to drop straight into this recipe.",
      "Swap vegetable broth for water plus a bouillon cube to save money without losing flavor.",
      "A green bell pepper is the cheapest pepper at most stores and is exactly what Cuban sofrito calls for."
    ],
    "substitutions": [
      {
        "forIngredientId": "veggie-broth",
        "swap": "water + 1 bouillon cube",
        "savings": "~$0.60 per batch"
      },
      {
        "forIngredientId": "black-beans",
        "swap": "dried black beans soaked and pre-cooked",
        "savings": "~$1.20 per batch"
      },
      {
        "forIngredientId": "cilantro",
        "swap": "chopped fresh parsley or skip entirely",
        "savings": "~$1.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 14,
      "carbs": 78,
      "fat": 8,
      "fiber": 11
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Cuban",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "budget",
      "vegan",
      "meal-prep"
    ]
  },
  {
    "id": "rice-cooker-japanese-tomato-rice",
    "name": "Rice Cooker Japanese Tomato Rice",
    "description": "A whole ripe tomato steams right into buttery soy rice, then melts into a glossy, savory-sweet one-pot dinner you just fluff and eat.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "1 cup dry jasmine or short-grain rice, rinsed"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "1 whole ripe tomato, cored"
      },
      {
        "ingredientId": "butter",
        "quantity": 1.5,
        "note": "1.5 tbsp, sits on top of the tomato"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1.5,
        "note": "1.5 tbsp"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "optional": true,
        "note": "1 clove, grated (optional)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125,
        "note": "pinch, to taste"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "1 stalk, sliced, for garnish"
      }
    ],
    "steps": [
      "Rinse 1 cup of rice until the water runs mostly clear, then add it to the rice cooker pot. Add water to the cooker's '1 cup' line, then pull out about 1 tablespoon of water to leave room for the tomato's juices.",
      "Stir the soy sauce, salt, pepper, and grated garlic (if using) into the water until evenly mixed.",
      "Core the whole tomato and nestle it cored-side up into the center of the rice. Set the butter on top of the tomato so it melts down into the grains.",
      "Close the lid and run a normal White Rice / Cook cycle. Do not open it during cooking, the steam is what cooks the tomato through.",
      "When the cycle ends, let it sit on Keep Warm for 10 minutes, then open the lid and break the soft tomato apart with a spoon or rice paddle.",
      "Fold the tomato, melted butter, and soy through the rice until every grain is glossy and pale red. Taste, add a splash more soy if needed, top with scallion, and serve."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One slightly overripe, soft tomato from the discount bin works best here, it breaks down even sweeter.",
      "Buy rice in a big bag, this whole dinner costs well under a dollar per serving.",
      "Skip the optional garnishes if your pantry is bare, the butter-soy-tomato trio carries the dish on its own."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use olive oil or any neutral oil instead of butter to make it dairy-free and vegan",
        "savings": "Saves about $0.20 per serving and uses oil you likely already have"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Swap in plain long-grain white rice",
        "savings": "Saves around $0.15 per serving versus specialty rice"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "Use tamari for a gluten-free version",
        "savings": "Roughly cost-neutral and keeps the same savory depth"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 8,
      "carbs": 76,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "budget"
    ]
  },
  {
    "id": "rice-cooker-chicken-adobo",
    "name": "Rice Cooker Chicken Adobo",
    "description": "Sticky, garlicky Filipino soy-vinegar chicken that braises itself right over a bed of fluffy rice in your rice cooker.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 1.5,
        "note": "bone-in or boneless, cut into large chunks"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.33,
        "note": "low-sodium works great"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 0.25,
        "note": "white or cane vinegar, classic for adobo"
      },
      {
        "ingredientId": "garlic",
        "quantity": 8,
        "note": "cloves, smashed"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 3,
        "note": "dried bay leaves"
      },
      {
        "ingredientId": "pepper",
        "quantity": 1,
        "note": "whole or coarse black peppercorns"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1,
        "note": "tablespoon, balances the tang"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "sliced",
        "optional": true
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "to keep the braise from drying out"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "dry, cooked separately for serving"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Add the chicken thighs, soy sauce, vinegar, smashed garlic, bay leaves, peppercorns, brown sugar, onion, and water straight into the rice cooker pot. Do NOT stir the vinegar in yet — let it sit so the raw acidity cooks off (this keeps the sauce mellow, not sharp).",
      "Close the lid and run a full cook cycle. When it clicks to 'keep warm,' the chicken will be partly braised but not tender yet — give everything a good stir to mix the sauce.",
      "Run a SECOND cook cycle. Most rice cookers stop early on liquids, so this second cycle is what actually makes the chicken fork-tender and reduces the sauce. If your cooker has a 'slow cook' or 'soup' setting, use that instead.",
      "Once the chicken is tender and the sauce has thickened and gone glossy, switch to 'keep warm' and let it rest 5-10 minutes so the adobo flavor sinks in.",
      "Cook the jasmine rice separately (rinse, add a 1:1.25 rice-to-water ratio, run one cycle) — or make it first and keep it warm while the adobo runs.",
      "Spoon the chicken and plenty of sauce over the rice, fish out the bay leaves, and top with sliced scallions. Serve hot."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 65,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in chicken thighs are one of the cheapest cuts and stay juicy through two cook cycles — buy a family pack and freeze half.",
      "Adobo is forgiving: a splash of any vinegar you already own (white, cane, or apple cider) works, so no need to buy something special.",
      "Make a double batch — adobo actually tastes better the next day and reheats perfectly for cheap lunches all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use bone-in chicken drumsticks",
        "savings": "Drumsticks are often even cheaper per pound and just as tender"
      },
      {
        "forIngredientId": "vinegar",
        "swap": "Apple cider vinegar from the pantry",
        "savings": "Skips buying cane vinegar; uses what you already have"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain white rice",
        "savings": "Saves about $1-2 per bag versus specialty jasmine"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 34,
      "carbs": 42,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Filipino",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "filipino",
      "meal-prep"
    ]
  },
  {
    "id": "rice-cooker-arroz-con-pollo",
    "name": "Rice Cooker Arroz con Pollo",
    "description": "A cozy one-pot Spanish chicken and golden yellow rice studded with sweet peppers and peas, all made in your rice cooker.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless chicken thighs, cut into chunks"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "long-grain rice, rinsed (about 2 cups dry)"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.75,
        "note": "about 3 cups to cook the rice"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "red or green, diced"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.2,
        "note": "about 2 tbsp"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.3,
        "note": "about 1 cup, stirred in at the end"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.1,
        "note": "1 tsp, for the classic yellow color"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.05,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.1,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "saffron",
        "quantity": 0.05,
        "optional": true,
        "note": "a pinch, for authentic flavor and color"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      }
    ],
    "steps": [
      "Season the chicken thigh chunks with salt, pepper, paprika, cumin, and turmeric. Turn the rice cooker on (Cook setting), add the olive oil, and let it heat for a minute.",
      "Add the chopped onion, garlic, and bell pepper. Stir for 3-4 minutes with the lid open until softened, then stir in the tomato paste and the seasoned chicken.",
      "Close the lid and run one full Cook cycle to brown the chicken and aromatics. Open and give it a stir so nothing sticks.",
      "Add the rinsed jasmine rice, chicken broth, and the optional saffron pinch. Stir to combine and make sure the rice is submerged in the liquid.",
      "Close the lid and run a second full Cook cycle until the liquid is absorbed and the rice is tender (the cooker will switch to Warm). Check that the chicken is cooked through to 165F; run a short extra cycle if needed.",
      "Scatter the frozen peas over the top, close the lid, and let the residual heat steam them for 5 minutes on Warm. Fluff everything together and serve hot."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Skip the saffron and lean on turmeric plus paprika for the same golden color at a fraction of the cost.",
      "Bone-in chicken thighs are cheaper per pound than boneless; just pull the meat off before the final fluff.",
      "Use water plus a bouillon cube instead of boxed broth to cut the cost in half."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "chicken-breast cut into chunks",
        "savings": "Often on sale cheaper per lb; just don't overcook so it stays juicy"
      },
      {
        "forIngredientId": "saffron",
        "swap": "an extra 1/2 tsp turmeric",
        "savings": "Saves the most expensive ingredient entirely for near-identical color"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water + 1 bouillon cube",
        "savings": "Cuts the liquid cost by about half"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 32,
      "carbs": 58,
      "fat": 12,
      "fiber": 4
    },
    "emoji": "🍗",
    "accentColor": "bg-yellow-100",
    "cuisine": "Spanish",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "gluten-free"
    ]
  },
  {
    "id": "rice-cooker-japanese-curry",
    "name": "Rice Cooker Japanese Curry Rice",
    "description": "Thick, cozy, savory-sweet Japanese curry with tender potato and carrot, all built in one rice cooker over the rice itself.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "2 cups dry, rinsed — for the rice base"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless, cut into bite-size chunks (1 serving per person)"
      },
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "peeled, 1-inch cubes"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "peeled, half-moons"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "curry-powder",
        "quantity": 2,
        "note": "2 tbsp — the main flavor"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp for deeper aroma"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.2,
        "note": "2 tbsp, whisked with broth to thicken into roux-style sauce"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.5,
        "note": "about 2 cups"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.15,
        "note": "1 tbsp for umami"
      },
      {
        "ingredientId": "honey",
        "quantity": 0.1,
        "note": "1 tbsp for the signature sweetness"
      }
    ],
    "steps": [
      "Rinse 2 cups jasmine rice until the water runs clear, add it to the rice cooker pot with water to the cooker's '2 cup' line, and start a normal cook cycle. When it finishes, fluff and scoop the rice into bowls and set aside (wipe the pot dry).",
      "Add the vegetable oil to the empty pot and run a cook cycle (or 'saute' if your cooker has it); add the onion and garlic and stir for 3-4 minutes until softened and fragrant.",
      "Add the chicken thigh chunks, curry powder, and garam masala, and stir 2 minutes to coat. In a cup, whisk the flour into the chicken broth until smooth, then pour it in along with the soy sauce and honey.",
      "Stir in the potato and carrot, close the lid, and run a full cook cycle so the raw chicken and vegetables cook through in the simmering sauce.",
      "When the cycle ends, open and check that the chicken is no longer pink and the potatoes are fork-tender; if not, run a second cook cycle until everything is fully cooked.",
      "Stir well so the sauce thickens to a glossy, gravy-like curry, season with a pinch of salt to taste, and spoon generously over the reserved rice."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy bone-in chicken thighs and debone them yourself — they're cheaper per pound and the bones can flavor a future broth.",
      "Curry powder plus a touch of honey and soy sauce mimics pricey store-bought curry roux blocks for a fraction of the cost.",
      "Potatoes and carrots are some of the cheapest filling vegetables — bulk up the pot to stretch the protein across more servings."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "chicken-breast or tofu cubes",
        "savings": "Tofu drops cost ~40% and makes it vegetarian"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water plus a bouillon-cube",
        "savings": "Saves ~$1 versus boxed broth"
      },
      {
        "forIngredientId": "garam-masala",
        "swap": "just extra curry-powder",
        "savings": "Skip a separate spice purchase"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 30,
      "carbs": 68,
      "fat": 14,
      "fiber": 5
    },
    "emoji": "🍛",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "comfort-food",
      "japanese-curry"
    ]
  },
  {
    "id": "rice-cooker-kimchi-fried-rice",
    "name": "Rice Cooker Kimchi Fried Rice",
    "description": "Tangy, savory kimchi rice cooked entirely in your rice cooker, finished with a runny egg and fresh scallion for a cozy one-pot meal.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "1 cup dry, rinsed"
      },
      {
        "ingredientId": "kimchi",
        "quantity": 0.4,
        "note": "about 1 cup, roughly chopped, with a splash of its brine"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "1 per serving"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, whites and greens separated"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 0.15,
        "note": "1 heaping tbsp Korean chili paste"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 0.1,
        "note": "1 tbsp toasted"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "2 cloves, minced"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.1,
        "note": "1 tbsp, for richness"
      },
      {
        "ingredientId": "bacon",
        "quantity": 1,
        "optional": true,
        "note": "2 strips chopped; or use Spam/none for vegetarian"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.05,
        "optional": true,
        "note": "toasted, to garnish"
      },
      {
        "ingredientId": "nori",
        "quantity": 0.1,
        "optional": true,
        "note": "1 sheet, snipped into strips"
      }
    ],
    "steps": [
      "Rinse 1 cup jasmine rice until the water runs mostly clear, then add it to the rice cooker pot with 1 cup water (slightly less than usual, since the kimchi adds moisture). Run a full cook cycle.",
      "If using bacon, add the chopped pieces to the rice cooker first with a splash of water, run one cook cycle until rendered, then proceed to add the rice and water on top and run the rice cycle as above.",
      "When the rice is done, open the lid and stir in the chopped kimchi with a splash of its brine, gochujang, soy sauce, sesame oil, minced garlic, butter, and the scallion whites. Mix well so everything coats the hot rice.",
      "Close the lid and run a second short cook cycle (or use Keep Warm for 10 minutes) to heat the kimchi through and let the flavors meld; stir once halfway.",
      "Crack the eggs directly onto the rice, close the lid, and run the cycle a few more minutes until the whites set but the yolks stay soft, about 5-8 minutes on cook or Keep Warm.",
      "Scoop into bowls, breaking the egg over the rice. Top with scallion greens, toasted sesame seeds, and nori strips, then serve hot."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Kimchi that's gone extra sour is actually best here and often discounted - the tang mellows as it cooks.",
      "Day-old rice works great; skip cooking fresh rice and just dump leftover rice in with the kimchi for the second cycle.",
      "Skip the bacon and lean on gochujang plus a little extra butter for a rich, fully vegetarian bowl for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "jasmine-rice",
        "swap": "any leftover white or brown rice you already have",
        "savings": "Saves ~$0.30/serving and uses up fridge rice"
      },
      {
        "forIngredientId": "bacon",
        "swap": "a diced hot dog or canned Spam",
        "savings": "Saves ~$0.50/serving for the protein"
      },
      {
        "forIngredientId": "gochujang",
        "swap": "sriracha plus a pinch of sugar",
        "savings": "Saves buying a specialty jar if you only cook this occasionally"
      }
    ],
    "estimatedNutrition": {
      "calories": 485,
      "protein": 15,
      "carbs": 62,
      "fat": 19,
      "fiber": 3
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "korean",
      "spicy"
    ]
  },
  {
    "id": "rice-cooker-vegetable-pulao",
    "name": "Rice Cooker Vegetable Pulao",
    "description": "Fragrant whole-spice basmati simmered with sweet peas and carrots for a cozy, one-pot dinner that fills the kitchen with warmth.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "basmati-rice",
        "quantity": 2,
        "note": "2 cups dry, rinsed until water runs clear"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "diced small"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 1,
        "note": "about 1 cup, no need to thaw"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.25,
        "note": "1 tbsp grated"
      },
      {
        "ingredientId": "ghee",
        "quantity": 0.15,
        "note": "2 tbsp, or substitute oil"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 0.25,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.15,
        "note": "1 tsp whole or ground cumin"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.1,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.05,
        "note": "1 leaf"
      },
      {
        "ingredientId": "cardamom-green",
        "quantity": 0.05,
        "note": "3 pods, lightly cracked",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1,
        "note": "1 tsp, to taste"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.25,
        "note": "small handful, chopped for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Rinse 2 cups basmati rice in a few changes of cold water until it runs mostly clear, then set aside to drain.",
      "Set the rice cooker to its Cook or Saute cycle (or just start a normal Cook cycle with the lid open). Add the ghee, sliced onion, garlic, ginger, cumin, bay leaf, and cracked cardamom pods. Stir for 4-5 minutes until the onion softens and the spices smell fragrant.",
      "Stir in the diced carrot, turmeric, and garam masala and let everything toast for 1 minute so the spices coat the vegetables.",
      "Add the drained rice, frozen peas, salt, and 2.5 cups (about 600 ml) water. Stir once to level the rice, scraping any spices off the bottom.",
      "Close the lid and run a full Cook / White Rice cycle. When it switches to Warm, do not open it yet.",
      "Let the pulao rest on Warm for 10 minutes, then fluff gently with a fork, discard the bay leaf, and fold in chopped cilantro before serving."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy whole spices in bulk bags from an Indian grocery for a fraction of the supermarket jar price.",
      "Use whatever vegetables are on sale or wilting in the fridge - potato, green beans, or corn all work great here.",
      "Frozen peas are cheaper than fresh and keep for months, so stock up when they go on sale."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "vegetable oil or any neutral oil",
        "savings": "Saves about $0.40 per batch and makes it fully vegan"
      },
      {
        "forIngredientId": "frozen-peas",
        "swap": "frozen mixed vegetables",
        "savings": "One bag covers peas and carrots, saving ~$1 versus buying separately"
      },
      {
        "forIngredientId": "garam-masala",
        "swap": "1 tsp curry powder plus a pinch of cinnamon",
        "savings": "Uses a pantry staple you likely already have, saving a $5 jar"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 7,
      "carbs": 58,
      "fat": 7,
      "fiber": 4
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "meatless"
    ]
  },
  {
    "id": "rice-cooker-chana-masala",
    "name": "Rice Cooker Chana Masala",
    "description": "A hearty, deeply spiced chickpea and tomato curry that simmers itself while you do absolutely nothing.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chickpeas",
        "quantity": 2,
        "note": "two 15 oz cans, drained and rinsed"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "one 28 oz can"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "4 cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "1 tbsp grated fresh ginger"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "1 tsp ground cumin"
      },
      {
        "ingredientId": "coriander",
        "quantity": 1,
        "note": "1 tsp ground coriander"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 1,
        "note": "1/2 tsp, or to taste"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp, to taste"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice of half a lemon, stirred in at the end"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.25,
        "optional": true,
        "note": "small handful, chopped, for garnish"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "optional": true,
        "note": "1 small, minced, for heat"
      }
    ],
    "steps": [
      "Set the rice cooker to its cook/saute setting. Add the vegetable oil, diced onion, garlic, ginger, and jalapeno if using. Let them soften and turn golden, stirring once or twice, about 8 minutes (if your cooker only has a Cook button, just close the lid and let it run).",
      "Stir in the garam masala, cumin, coriander, turmeric, chili powder, and salt. Let the spices bloom in the oil for 1 minute until fragrant.",
      "Add the crushed tomatoes and drained chickpeas. Stir everything together so the chickpeas are coated, then close the lid.",
      "Run a full cook cycle. When it clicks off, stir, then run a second cook cycle to let the curry thicken and the flavors deepen, roughly 20 to 25 minutes total of simmering.",
      "If it looks too thick, stir in a splash of water; if too thin, run a few more minutes with the lid cracked. Mash a few chickpeas against the side to thicken the sauce naturally.",
      "Switch to Keep Warm, stir in the lemon juice, and taste for salt. Top with fresh cilantro and serve over rice."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Dried chickpeas cost a fraction of canned. Soak overnight, then cook a batch in the rice cooker with water and freeze portions.",
      "Buy whole spices in bulk-bin quantities and grind as needed. They are cheaper and last far longer than pre-ground jars.",
      "This curry tastes even better the next day, so double the batch for nearly free meal-prep lunches."
    ],
    "substitutions": [
      {
        "forIngredientId": "crushed-tomato",
        "swap": "Use a can of tomato sauce plus a spoon of tomato paste",
        "savings": "Saves about $0.40 per batch"
      },
      {
        "forIngredientId": "garam-masala",
        "swap": "Use curry powder if you don't have garam masala",
        "savings": "Saves a separate spice purchase"
      },
      {
        "forIngredientId": "ginger",
        "swap": "Swap fresh ginger for 1/2 tsp ground ginger or ginger paste",
        "savings": "Saves about $0.30 and keeps longer"
      }
    ],
    "estimatedNutrition": {
      "calories": 310,
      "protein": 14,
      "carbs": 48,
      "fat": 8,
      "fiber": 13
    },
    "emoji": "🍛",
    "accentColor": "bg-orange-100",
    "cuisine": "Indian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegan",
      "meal-prep",
      "budget"
    ]
  },
  {
    "id": "rice-cooker-steamed-fish",
    "name": "Rice Cooker Ginger-Soy Steamed Fish",
    "description": "Silky fish steamed right over fluffy rice with fresh ginger, scallion, and a warm soy-sesame drizzle for a one-pot dinner that tastes like takeout.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "1 cup dry jasmine rice"
      },
      {
        "ingredientId": "cod",
        "quantity": 12,
        "note": "2 fillets (~6 oz each)"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.3,
        "note": "thumb of fresh ginger, peeled and julienned"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5,
        "note": "3-4 scallions, whites smashed and greens sliced"
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 0.2,
        "note": "about 3 tbsp low-sodium soy sauce"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 0.1,
        "note": "about 1 tbsp toasted sesame oil"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.1,
        "note": "about 1 tbsp, heated for the sizzle finish"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.05,
        "note": "1 tsp sugar to balance the soy",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.25,
        "note": "small handful, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Rinse 1 cup jasmine rice until the water runs mostly clear, add it to the rice cooker pot with 1.25 cups water, and start a normal cook cycle.",
      "While the rice cooks, pat the fish dry and scatter half the julienned ginger and the smashed scallion whites over a small heatproof plate that fits inside your rice cooker; lay the fish on top and tuck the rest of the ginger over it.",
      "When the rice cycle finishes and clicks to warm, fluff the rice, set the heatproof plate of fish directly on top of the hot rice (or on the steam tray if you have one), close the lid, and run a SECOND cook cycle for 12-15 minutes until the fish is opaque and flakes easily.",
      "Carefully lift out the fish plate, pour off any watery liquid, and drizzle the soy sauce, sugar, and a splash of the fish steaming liquid over the fillets; scatter the sliced scallion greens on top.",
      "Heat the vegetable oil and sesame oil together for 30-40 seconds in the microwave (or briefly in the rice cooker pot) until very hot, then pour it sizzling over the scallions and ginger to bloom their aroma.",
      "Top with fresh cilantro and serve the fish over the steamed rice, spooning the pan sauce across both."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker",
      "microwave"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen white fish fillets are far cheaper than fresh and steam just as tender straight from thawed.",
      "Use the whole scallion: smash the white parts under the fish for flavor and save the green tops for the sizzle garnish.",
      "A knob of ginger keeps for weeks in the freezer and grates easily while frozen, so buy one piece and reuse it across meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "cod",
        "swap": "Use tilapia or any frozen white fish fillet",
        "savings": "Saves about $2 per serving versus fresh cod"
      },
      {
        "forIngredientId": "low-sodium-soy",
        "swap": "Regular soy sauce thinned with a splash of water",
        "savings": "Use the bottle you already have, no extra cost"
      },
      {
        "forIngredientId": "sesame-oil",
        "swap": "A few drops of vegetable oil plus toasted sesame seeds",
        "savings": "Skips buying a specialty oil, ~$4 saved"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 34,
      "carbs": 56,
      "fat": 8,
      "fiber": 2
    },
    "emoji": "🐟",
    "accentColor": "bg-sky-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "steamed",
      "high-protein",
      "takeout-style"
    ]
  },
  {
    "id": "rice-cooker-beef-broccoli",
    "name": "Rice Cooker Beef &amp; Broccoli Rice Bowl",
    "description": "Tender soy-garlic beef and crisp-tender broccoli simmered in a glossy sauce right over fluffy rice — takeout comfort from one pot.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 1,
        "note": "1 cup dry white rice"
      },
      {
        "ingredientId": "flank-steak",
        "quantity": 2,
        "note": "thinly sliced against the grain, ~1 serving per person"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 0.5,
        "note": "about 2 cups florets"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.25,
        "note": "3 tbsp for the sauce"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.1,
        "note": "1 tbsp grated"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.15,
        "note": "1.5 tbsp"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 0.1,
        "note": "1 tsp, stirred in at the end"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.15,
        "note": "1 tbsp, to thicken the sauce"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.25,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.05,
        "optional": true,
        "note": "to finish"
      }
    ],
    "steps": [
      "Rinse 1 cup rice until the water runs clear, add it to the rice cooker with 1.25 cups water, and start a normal cook cycle.",
      "While the rice cooks, whisk the soy sauce, minced garlic, grated ginger, brown sugar, and cornstarch with 1/4 cup water in a bowl to make the sauce; thinly slice the flank steak against the grain.",
      "When the rice finishes, fluff it and scoop it into bowls, then wipe the inner pot dry and return it to the cooker.",
      "Add the sliced beef and the sauce to the pot and start a second cook cycle, stirring after 4-5 minutes so the beef cooks evenly and the sauce starts to thicken.",
      "Stir in the broccoli florets, close the lid, and let the same cycle continue 6-8 minutes until the beef is cooked through and the broccoli is crisp-tender (run a brief third cycle if your pot switches to warm early).",
      "Stir in the sesame oil, spoon the saucy beef and broccoli over the rice, and finish with scallions and sesame seeds."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Flank steak slices thinner and stretches further if you freeze it for 20 minutes first — cheaper cuts like beef-chuck work too.",
      "Frozen broccoli is usually cheaper than fresh and goes straight in, no chopping.",
      "Skip the sesame seeds and scallion garnish; the sauce carries the dish on its own."
    ],
    "substitutions": [
      {
        "forIngredientId": "flank-steak",
        "swap": "Ground beef or thin-sliced beef chuck",
        "savings": "Saves about $2-3 per serving over flank steak"
      },
      {
        "forIngredientId": "broccoli",
        "swap": "Frozen broccoli or frozen stir-fry mix",
        "savings": "Saves ~$1 and never goes to waste"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Honey or regular white sugar",
        "savings": "Uses a pantry staple you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 34,
      "carbs": 62,
      "fat": 14,
      "fiber": 4
    },
    "emoji": "🥦",
    "accentColor": "bg-emerald-100",
    "cuisine": "Chinese-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "takeout-at-home"
    ]
  },
  {
    "id": "rice-cooker-cheesy-broccoli-rice",
    "name": "Rice Cooker Cheesy Broccoli Rice",
    "description": "Creamy cheddar-coated rice loaded with tender broccoli, all made in one pot with zero stirring at the stove.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "long-grain white rice, dry (cups)"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "about 3 cups; sub veggie-broth to keep it vegetarian"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 1,
        "note": "about 2 cups florets, fresh or frozen"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 0.5,
        "note": "shredded sharp cheddar, about 1.5 cups"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.15,
        "note": "about 2 tbsp"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "about half a cup, stirred in at the end"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 0.25,
        "optional": true,
        "note": "about 2 tbsp for extra creaminess"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.05,
        "note": "about 1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02,
        "note": "to taste"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.1,
        "optional": true,
        "note": "grated, for sprinkling on top"
      }
    ],
    "steps": [
      "Rinse 2 cups of rice until the water runs mostly clear, then add it to the rice cooker pot with the broth, diced onion, minced garlic, butter, garlic powder, salt, and pepper. Stir once to combine.",
      "Close the lid and run a full cook cycle. If your cooker has a White Rice setting, use it; otherwise just press Cook and let it run until it switches to Warm.",
      "When the cycle finishes, open the lid and quickly stir in the broccoli florets, pressing them down into the hot rice. Close the lid and run a second short cook cycle (or leave on Warm 12-15 minutes) so the broccoli steams tender.",
      "Open the lid and pour in the milk and cream cheese, then fold in the shredded cheddar a handful at a time, stirring until the cheese melts into a creamy sauce that coats every grain.",
      "Taste and adjust salt and pepper. If it looks dry, splash in a little more milk; if loose, leave the lid off on Warm for a few minutes.",
      "Scoop into bowls, sprinkle with grated parmesan, and serve hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Frozen broccoli is usually cheaper than fresh and works perfectly here, no need to thaw first.",
      "Buy a block of cheddar and shred it yourself, it costs less per ounce than pre-shredded bags and melts smoother.",
      "Swap chicken broth for water plus a bouillon cube to shave off a little more cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "broccoli",
        "swap": "frozen-broccoli",
        "savings": "Frozen florets run about half the price of fresh and last for months."
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water plus a bouillon cube",
        "savings": "Saves roughly $1 per pot versus boxed broth."
      },
      {
        "forIngredientId": "cream-cheese",
        "swap": "an extra splash of milk",
        "savings": "Skip it entirely to cut a dollar; the cheddar still makes it creamy."
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 16,
      "carbs": 58,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🥦",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "comfort-food"
    ]
  },
  {
    "id": "rice-cooker-cuban-picadillo",
    "name": "Rice Cooker Cuban Picadillo",
    "description": "Savory-sweet Cuban ground beef simmered with briny olives, sweet raisins, and tomato, served over fluffy rice all from one pot.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 4,
        "note": "1 lb lean ground beef"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "long-grain white rice, ~1 cup dry, cooked separately or as a base"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "green, diced (sofrito base)"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.3,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 0.8,
        "note": "about 1 cup / most of a small can"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.2,
        "note": "1 tbsp for depth"
      },
      {
        "ingredientId": "green-olives",
        "quantity": 0.4,
        "note": "1/3 cup sliced, plus a splash of brine"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.25,
        "note": "1/4 cup for the signature sweet note"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.15,
        "note": "1 tsp ground"
      },
      {
        "ingredientId": "oregano",
        "quantity": 0.1,
        "note": "1 tsp dried"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.1,
        "note": "1 leaf"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "optional": true
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.05,
        "optional": true
      }
    ],
    "steps": [
      "Cook the rice: add 1 cup rinsed rice and 1.5 cups water to the rice cooker, run a full cook cycle, then scoop the rice out and set aside (or cook it in a second cooker / earlier batch so the pot is free for the picadillo).",
      "Set the empty pot back in, add the olive oil, onion, green bell pepper, and garlic, and run a cook cycle for 8-10 minutes with the lid open, stirring once or twice, until the sofrito softens and smells sweet.",
      "Add the ground beef, break it up with a spatula, close the lid, and run a fresh cook cycle until the beef is no longer pink, stirring halfway through to crumble it; drain excess fat if needed.",
      "Stir in the tomato sauce, tomato paste, cumin, oregano, bay leaf, and a splash of olive brine, then run a second cook cycle so the raw beef finishes and the sauce comes up to a simmer.",
      "Add the sliced green olives and raisins, stir well, close the lid, and let it sit on the keep-warm setting for 10 minutes so the flavors meld and the raisins plump.",
      "Discard the bay leaf, taste and adjust with salt and pepper, and spoon the picadillo over the reserved rice."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy the largest pack of ground beef and freeze in 1 lb portions; picadillo is the perfect way to stretch budget beef with cheap pantry tomato sauce.",
      "Raisins are far cheaper by the bag than the small box and add the authentic sweet note that makes this dish special.",
      "A green bell pepper plus onion and garlic (sofrito) is the cheapest flavor base in Cuban cooking; skip pricier herbs and lean on cumin and oregano."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey for a leaner, cheaper option",
        "savings": "~$1.50 per pound"
      },
      {
        "forIngredientId": "green-olives",
        "swap": "Use capers or chopped dill pickles for the briny pop",
        "savings": "~$0.75 per batch"
      },
      {
        "forIngredientId": "rice",
        "swap": "Serve over any rice you have, or pile onto tortillas",
        "savings": "~$0.50 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 27,
      "carbs": 42,
      "fat": 17,
      "fiber": 3
    },
    "emoji": "🫒",
    "accentColor": "bg-red-100",
    "cuisine": "Cuban",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "budget",
      "latin"
    ]
  },
  {
    "id": "rice-cooker-hoppin-john",
    "name": "Rice Cooker Hoppin' John",
    "description": "A cozy one-pot Southern classic where smoky sausage, creamy black-eyed peas, and fluffy rice cook together for good-luck comfort in every bite.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "smoked-sausage",
        "quantity": 4,
        "note": "andouille or kielbasa, sliced into coins"
      },
      {
        "ingredientId": "black-eyed-peas",
        "quantity": 1.5,
        "note": "canned, drained and rinsed"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "long-grain white rice, dry"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "or water with a bouillon cube"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "diced"
      },
      {
        "ingredientId": "celery",
        "quantity": 1,
        "note": "stalk, diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "green, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "cajun-seasoning",
        "quantity": 1,
        "note": "or Creole seasoning, to taste"
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 0.5
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.1,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Add the sliced smoked sausage to the rice cooker pot along with the diced onion, celery, bell pepper, and garlic. Run one full cook cycle (about 8-10 minutes), stirring once, to render the sausage and soften the vegetables.",
      "Rinse the dry rice until the water runs clear, then add it to the pot with the drained black-eyed peas, chicken broth, cajun seasoning, smoked paprika, and the bay leaf. Stir everything together so the rice sits in an even layer under the liquid.",
      "Close the lid and run a full cook/white-rice cycle. The cooker will switch to warm when the liquid is absorbed.",
      "Let it rest, still covered, on the keep-warm setting for 10 minutes so the rice steams and firms up. Do not lift the lid early.",
      "Remove the bay leaf, then fluff with a fork, folding the sausage and peas up from the bottom. Taste and add salt or more cajun seasoning as needed.",
      "Spoon into bowls, top with sliced scallions, and pass hot sauce at the table."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Dried black-eyed peas cost a fraction of canned, soak overnight and add an extra cup of broth and a second cook cycle.",
      "Use water plus a bouillon cube instead of boxed broth to save money without losing the savory depth.",
      "Stretch the dish further by adding a diced potato or extra rice, peas and rice are the cheapest part of the pot."
    ],
    "substitutions": [
      {
        "forIngredientId": "smoked-sausage",
        "swap": "Diced bacon or leftover ham",
        "savings": "Often cheaper and adds the same smoky flavor"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water plus a bouillon cube",
        "savings": "Saves about $1 per pot"
      },
      {
        "forIngredientId": "black-eyed-peas",
        "swap": "Dried black-eyed peas (soaked)",
        "savings": "Up to 60% cheaper per serving than canned"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 22,
      "carbs": 58,
      "fat": 18,
      "fiber": 7
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "Southern American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "soul-food",
      "high-protein"
    ]
  },
  {
    "id": "rice-cooker-cilantro-lime-rice",
    "name": "Rice Cooker Cilantro Lime Rice",
    "description": "Fluffy Chipotle-style cilantro-lime rice that tastes like a burrito bowl base, made hands-free in your rice cooker.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "long-grain white rice, Chipotle-style"
      },
      {
        "ingredientId": "lime",
        "quantity": 2,
        "note": "1 for cooking, 1 for finishing"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "about 1/2 bunch, finely chopped"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "1 tbsp, stirred in for fluff"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "about 1 tsp, to taste"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1,
        "optional": true,
        "note": "1 leaf for subtle aroma, Chipotle-style"
      }
    ],
    "steps": [
      "Rinse 1 cup (dry) jasmine rice per 2 servings under cold water until the water runs mostly clear, then drain and add to the rice cooker pot with 2 cups of water.",
      "Stir in 1 tablespoon vegetable oil, 1 teaspoon salt, the juice of 1 lime, and the optional bay leaf so the rice cooks seasoned all the way through.",
      "Close the lid and run a normal White Rice / Cook cycle until it clicks to Warm, then let it rest on Warm for 10 minutes without opening so the steam finishes the grains.",
      "Remove and discard the bay leaf, then fluff the rice gently with a fork or rice paddle to separate the grains.",
      "Fold in the chopped cilantro and the juice of the second lime while the rice is still warm so the flavor soaks in.",
      "Taste and add a pinch more salt or a squeeze of lime if needed, then serve as a base for burrito bowls, tacos, or grilled proteins."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy rice in a big bag, not single-serve cups, to drop the per-serving cost to pennies.",
      "Use the cheaper bottled lime juice in place of fresh limes when they are pricey out of season.",
      "Save cilantro stems and freeze any leftover bunch flat in a bag so it does not go slimy in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "lime",
        "swap": "Bottled lime juice (about 1 tbsp per lime)",
        "savings": "Cuts citrus cost roughly in half and lasts for months"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain white rice",
        "savings": "Bulk white rice is often cheaper per serving"
      },
      {
        "forIngredientId": "cilantro-fresh",
        "swap": "Fresh parsley plus an extra squeeze of lime",
        "savings": "Use up parsley you already have instead of buying cilantro"
      }
    ],
    "estimatedNutrition": {
      "calories": 205,
      "protein": 4,
      "carbs": 41,
      "fat": 4,
      "fiber": 1
    },
    "emoji": "🍚",
    "accentColor": "bg-green-100",
    "cuisine": "Mexican-inspired",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "side-dish",
      "meal-prep",
      "vegan"
    ]
  },
  {
    "id": "rice-cooker-buffalo-chicken-rice",
    "name": "Rice Cooker Buffalo Chicken Rice",
    "description": "Spicy buffalo chicken simmered right into cheesy, tangy rice for the ultimate cozy one-pot comfort bowl.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 4,
        "note": "boneless skinless, cut into 1-inch cubes"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "long-grain white rice, dry (about 0.5 cup per serving)"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.5,
        "note": "use as the cooking liquid for the rice"
      },
      {
        "ingredientId": "buffalo-sauce",
        "quantity": 0.5,
        "note": "Frank's-style buffalo wing sauce"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 0.5,
        "note": "shredded sharp cheddar"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.2,
        "note": "for richness"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.1
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 0.1
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5,
        "note": "sliced, for topping",
        "optional": true
      },
      {
        "ingredientId": "ranch",
        "quantity": 0.2,
        "note": "drizzle on top to serve",
        "optional": true
      },
      {
        "ingredientId": "celery",
        "quantity": 0.25,
        "note": "diced, optional crunch",
        "optional": true
      }
    ],
    "steps": [
      "Add the dry rice to the rice cooker pot, then pour in the chicken broth plus enough water to reach your cooker's 2-cup rice line (roughly 2 cups liquid total). Stir in the garlic powder, onion powder, and butter.",
      "Nestle the cubed raw chicken on top of the rice and drizzle about half of the buffalo sauce over the chicken. Close the lid and run a full cook cycle.",
      "When the cycle ends, open the lid and check that the chicken is cooked through and no longer pink. If the rice is still firm or the chicken needs more time, add a splash of water, close, and run a second short cook cycle.",
      "Switch to Keep Warm. Stir the chicken into the rice, breaking it up slightly, then mix in the remaining buffalo sauce and the shredded cheddar until melted and creamy.",
      "Fold in the diced celery if using, then let it sit covered on Keep Warm for 5 minutes to set up.",
      "Scoop into bowls and finish with sliced scallions and a drizzle of ranch. Serve hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy chicken breast in a large family pack and freeze in portions — it's far cheaper per pound than small trays.",
      "A block of cheddar you shred yourself costs less than pre-shredded bags and melts more smoothly.",
      "Skip the ranch and blue cheese garnishes if you're stretching a budget — the cheesy buffalo rice stands on its own."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-breast",
        "swap": "Use chicken thighs — juicier and usually a bit cheaper per pound",
        "savings": "~20% on protein"
      },
      {
        "forIngredientId": "buffalo-sauce",
        "swap": "Mix hot sauce with a spoon of melted butter for a DIY buffalo sauce",
        "savings": "~$2 vs a bottle"
      },
      {
        "forIngredientId": "ranch",
        "swap": "Top with crumbled blue cheese or just skip it",
        "savings": "~$1 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 38,
      "carbs": 42,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🌶️",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "spicy",
      "high-protein",
      "comfort-food"
    ]
  },
  {
    "id": "rice-cooker-lemon-herb-chicken",
    "name": "Rice Cooker Lemon Herb Chicken & Potatoes",
    "description": "Juicy lemon-and-herb chicken thighs steamed right alongside tender baby potatoes for a cozy one-pot dinner that practically cooks itself.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "boneless skinless chicken thighs, ~1 per serving"
      },
      {
        "ingredientId": "potato",
        "quantity": 3,
        "note": "baby/small potatoes, halved"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "half juiced, half sliced for steaming"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "about 1 tbsp to coat"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.25,
        "note": "splash to create steam"
      },
      {
        "ingredientId": "thyme-fresh",
        "quantity": 0.25,
        "optional": true,
        "note": "few sprigs, or 1/2 tsp dried"
      },
      {
        "ingredientId": "rosemary-fresh",
        "quantity": 0.25,
        "optional": true,
        "note": "1 sprig, or 1/2 tsp dried"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.1,
        "note": "1/2 tsp for color"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.05
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.15,
        "optional": true,
        "note": "chopped, to finish"
      }
    ],
    "steps": [
      "In a bowl, toss the chicken thighs and halved potatoes with olive oil, minced garlic, the juice of half the lemon, paprika, salt, pepper, and the herbs until everything is well coated.",
      "Pour the chicken broth into the rice cooker pot, then layer in the potatoes on the bottom (they take longest) and nestle the chicken thighs on top. Tuck the lemon slices around the chicken.",
      "Close the lid and run a full Cook cycle. When it clicks to Warm, leave the lid shut for 5 minutes to let the steam keep working.",
      "Run a SECOND Cook cycle to make sure the raw chicken is fully done. Check that the potatoes are fork-tender and the chicken reaches 165F / 74C at the thickest part; run a short third cycle if either needs more time.",
      "Open the lid, gently spoon the lemony pan juices over the chicken and potatoes, and scatter the chopped fresh parsley on top before serving."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy bone-in thighs and pull the meat off after cooking, or grab a value pack and freeze the rest for next week.",
      "Regular potatoes cut into 1-inch chunks work just as well as baby potatoes and cost a fraction of the price.",
      "A splash of water with a bouillon cube can stand in for chicken broth if you don't keep cartons around."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Bone-in chicken drumsticks",
        "savings": "Often $1-2/lb cheaper than boneless thighs"
      },
      {
        "forIngredientId": "thyme-fresh",
        "swap": "1/2 tsp dried thyme or Italian seasoning",
        "savings": "Dried herbs cost pennies per use vs. fresh bunches"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water + 1/2 bouillon cube",
        "savings": "Saves buying a whole carton of broth"
      }
    ],
    "estimatedNutrition": {
      "calories": 390,
      "protein": 32,
      "carbs": 30,
      "fat": 16,
      "fiber": 4
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mediterranean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "gluten-free"
    ]
  },
  {
    "id": "rice-cooker-thai-green-curry",
    "name": "Rice Cooker Thai Green Curry Chicken",
    "description": "Creamy, fragrant coconut green curry with tender chicken and crisp veg, all simmered in one pot while the rice cooker does the work.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless, cut into bite-size pieces"
      },
      {
        "ingredientId": "green-curry-paste",
        "quantity": 0.3,
        "note": "about 3 tbsp Thai green curry paste"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "one 13.5 oz can, full-fat"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "dry, to serve alongside"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "sliced into strips"
      },
      {
        "ingredientId": "zucchini",
        "quantity": 1,
        "note": "half-mooned"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 0.1,
        "note": "about 1 tbsp; swap soy sauce to keep it vegetarian-leaning"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.05,
        "note": "1 tsp, balances the curry"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "juiced, added at the end"
      },
      {
        "ingredientId": "thai-basil",
        "quantity": 0.15,
        "optional": true,
        "note": "handful, torn, for garnish"
      }
    ],
    "steps": [
      "Cook the rice: add the jasmine rice and water to your rice cooker (follow your cup line) and run a full cook cycle. Scoop into bowls and set aside, then give the pot a quick rinse.",
      "Set the rinsed pot back in and add a splash of the coconut milk with the green curry paste, garlic, and onion. Run a cook cycle and stir for 2-3 minutes until the paste is fragrant and sizzling.",
      "Add the raw chicken thigh pieces and stir to coat. Pour in the rest of the coconut milk, the fish sauce, and brown sugar. Close the lid and run a full cook cycle.",
      "When the cycle ends, stir well and run a SECOND cook cycle to make sure the chicken is fully cooked through (no pink, juices run clear) and the sauce is gently bubbling.",
      "Stir in the bell pepper and zucchini, close the lid, and let the residual heat soften them for 8-10 minutes (or run a short cycle if your cooker cools fast). The veg should stay slightly crisp.",
      "Switch off, squeeze in the lime juice, and stir. Taste and add a little more fish sauce or sugar to balance. Spoon the curry over the rice and top with torn Thai basil."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Chicken thighs are cheaper than breasts and stay juicier through two cook cycles.",
      "A small can of full-fat coconut milk stretches across 4 servings, so buy the store brand.",
      "Use whatever veg is on sale or frozen stir-fry mix instead of fresh pepper and zucchini."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Firm tofu or chickpeas for a vegetarian version",
        "savings": "Saves about $2.00 per batch"
      },
      {
        "forIngredientId": "fish-sauce",
        "swap": "Soy sauce or tamari (1:1)",
        "savings": "Uses a pantry staple, ~$0.50 cheaper"
      },
      {
        "forIngredientId": "zucchini",
        "swap": "Frozen stir-fry vegetable mix",
        "savings": "Saves about $1.00 and zero prep"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 30,
      "carbs": 52,
      "fat": 21,
      "fiber": 4
    },
    "emoji": "🍛",
    "accentColor": "bg-green-100",
    "cuisine": "Thai",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "thai",
      "curry",
      "high-protein"
    ]
  },
  {
    "id": "rice-cooker-sausage-peppers-rice",
    "name": "Rice Cooker Sausage & Peppers Rice",
    "description": "Juicy Italian sausage, sweet peppers, and onions simmered right into saucy tomato rice for a cozy one-pot dinner.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "italian-sausage",
        "quantity": 4,
        "note": "Italian sausage links, sliced into coins"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 2,
        "note": "1 red + 1 green, sliced"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "halved and sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "2 cups dry long-grain white rice"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "one 14-15 oz can"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.2,
        "note": "about 2 tbsp"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.5,
        "note": "cups, to cook the rice"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 0.1,
        "note": "about 2 tsp"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.05,
        "optional": true,
        "note": "a pinch for heat"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.15,
        "optional": true,
        "note": "grated, to finish"
      }
    ],
    "steps": [
      "Slice the sausage into coins and the peppers and onion into strips. Add the olive oil, sausage, onion, and garlic to the rice cooker pot and run a full Cook cycle, stirring once or twice, until the sausage is browned (about 10-12 minutes).",
      "Add the sliced bell peppers and stir, letting the residual heat soften them for a minute.",
      "Rinse the rice, then add it to the pot along with the crushed tomato, tomato paste, chicken broth, italian seasoning, and red pepper flakes. Stir everything together so the rice sits in the liquid.",
      "Close the lid and run a full Cook (or White Rice) cycle.",
      "When the cycle ends, cut into a sausage coin to confirm it is cooked through with no pink. If needed, run a second short Cook cycle until the sausage is done and the rice is tender.",
      "Let it rest on Keep Warm for 5 minutes, then fluff, taste for salt, and stir gently.",
      "Spoon into bowls and finish with grated parmesan."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a value pack of sausage and freeze what you don't use; thaw a couple links per batch.",
      "Use whatever peppers are cheapest that week — green bell peppers are usually the budget pick.",
      "Swap chicken broth for water plus a bouillon cube to shave a little off the cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "italian-sausage",
        "swap": "Smoked sausage or kielbasa coins",
        "savings": "Often $1-2 cheaper per pound and no browning guesswork"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Water plus a bouillon cube",
        "savings": "Saves about $0.50 per batch"
      },
      {
        "forIngredientId": "crushed-tomato",
        "swap": "Tomato sauce or diced tomatoes",
        "savings": "Use whatever can is cheapest on the shelf"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 22,
      "carbs": 62,
      "fat": 22,
      "fiber": 4
    },
    "emoji": "🌶️",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "high-protein",
      "comfort-food"
    ]
  },
  {
    "id": "rice-cooker-apple-cinnamon-oats",
    "name": "Rice Cooker Apple Cinnamon Steel-Cut Oats",
    "description": "Wake up to a warm pot of creamy cinnamon oats studded with sweet, tender apple — and you barely lifted a finger.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "oats",
        "quantity": 1,
        "note": "steel-cut oats, 1 cup dry"
      },
      {
        "ingredientId": "apple",
        "quantity": 2,
        "note": "peeled and diced"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "ground, about 1.5 tsp"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "stirred in at the end for creaminess"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 0.15,
        "note": "about 3 tbsp, to taste"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "a pinch"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.1,
        "note": "1 tbsp, to grease pot and add richness"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.05,
        "optional": true,
        "note": "1 tsp"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.25,
        "optional": true,
        "note": "small handful"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.2,
        "optional": true,
        "note": "chopped, for topping"
      }
    ],
    "steps": [
      "Lightly grease the rice cooker bowl with the butter to keep the oats from sticking. Add 1 cup steel-cut oats, the diced apple, cinnamon, a pinch of salt, and 3 cups of water (do NOT add the milk yet — it can scorch).",
      "Stir once, close the lid, and run a full cook cycle. If your cooker has a 'porridge' or 'congee' setting, use that; otherwise use the standard White Rice cycle.",
      "When the cycle ends, lift the lid and stir well, scraping the bottom. The oats should be mostly tender — if there's still a bite or extra water, close the lid and run a second cook cycle, checking after 10 minutes.",
      "Once creamy, stir in the milk, maple syrup, and vanilla. Let it sit on Keep Warm for 5 minutes to thicken and absorb.",
      "Stir again, spoon into bowls, and top with raisins and chopped walnuts. Add an extra splash of milk if you like it looser."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One cup of dry steel-cut oats feeds four — it's one of the cheapest breakfasts per serving you can make.",
      "Use a slightly bruised or soft apple; it cooks down sweet and you'd never know.",
      "Make the full batch and refrigerate portions — reheat with a splash of water or milk all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "maple-syrup",
        "swap": "honey or brown sugar",
        "savings": "Saves about $0.30 per batch vs real maple syrup"
      },
      {
        "forIngredientId": "milk",
        "swap": "almond milk or oat milk",
        "savings": "Roughly cost-neutral and keeps it dairy-free"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "skip them or use raisins only",
        "savings": "Saves about $0.40 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 250,
      "protein": 6,
      "carbs": 45,
      "fat": 6,
      "fiber": 6
    },
    "emoji": "🍎",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "breakfast",
      "meal-prep",
      "vegetarian"
    ]
  },
  {
    "id": "rice-cooker-castella-cake",
    "name": "Rice Cooker Castella Sponge Cake",
    "description": "A cloud-soft, honey-kissed Japanese sponge cake that bakes up jiggly and golden in your rice cooker with zero oven needed.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "separate yolks and whites for max fluff"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.4,
        "note": "about 1/3 cup, split between yolks and whites"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "about 3/4 cup cake-soft all-purpose, sifted"
      },
      {
        "ingredientId": "honey",
        "quantity": 0.15,
        "note": "2 tbsp, the signature castella sweetness"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.1,
        "note": "2 tbsp, warmed slightly"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.1,
        "note": "2 tbsp, keeps the crumb moist"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.05,
        "optional": true,
        "note": "1/2 tsp for aroma"
      }
    ],
    "steps": [
      "Lightly grease the rice cooker inner pot with a little oil and wipe off the excess so the cake releases cleanly. Separate the 4 eggs, putting whites in a large clean bowl and yolks in another.",
      "Whisk the yolks with half the sugar, the honey, warm milk, oil, and vanilla until smooth, then sift in the flour and fold just until no dry streaks remain.",
      "Beat the egg whites, adding the rest of the sugar a little at a time, until you get glossy stiff peaks. Gently fold the whites into the yolk batter in three additions so it stays airy.",
      "Pour the batter into the greased pot from a height of about a foot to pop big bubbles, then tap the pot on the counter a few times. Wipe any drips off the rim.",
      "Run a full Cook cycle. When it clicks to Warm, keep the lid closed and let it rest 10 minutes, then run a second Cook cycle to finish the center. The cake is done when a toothpick comes out clean.",
      "Carefully invert the pot onto a plate to release the warm, jiggly castella. Cool a few minutes, slice into squares, and dust with extra sugar if you like."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 35,
    "difficulty": "medium",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Eggs, flour, and sugar are pantry cheap, so this whole cake costs less than one slice at a bakery.",
      "No mixer needed; a whisk and a strong arm beat the whites to stiff peaks just fine.",
      "If your cooker clicks to Warm too fast, just keep re-pressing Cook every 10 minutes until set instead of buying any new gear."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "Use sugar or maple syrup instead",
        "savings": "Skips buying honey and saves about $0.40"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Melted butter for a richer flavor",
        "savings": "Use what is already in your fridge, $0 extra"
      },
      {
        "forIngredientId": "milk",
        "swap": "Water or any plant milk",
        "savings": "Saves about $0.10 if you skip dairy"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 8,
      "carbs": 32,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-yellow-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "dessert",
      "baking",
      "no-oven"
    ]
  },
  {
    "id": "rice-cooker-french-onion-rice",
    "name": "Rice Cooker French Onion Rice",
    "description": "Deeply caramelized onions, savory broth, and melty cheese turn plain rice into a cozy French-onion-soup-inspired bowl, all from one pot.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "long-grain white rice, dry cups"
      },
      {
        "ingredientId": "onion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.25,
        "note": "about 3 tbsp"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 1,
        "note": "used as the cooking liquid in place of water"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.1,
        "note": "2 cloves, minced"
      },
      {
        "ingredientId": "thyme",
        "quantity": 0.05,
        "note": "1 tsp dried"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.1,
        "note": "1 tbsp for savory depth"
      },
      {
        "ingredientId": "gruyere",
        "quantity": 0.5,
        "note": "shredded; classic French onion melt"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.15,
        "note": "grated, stirred in for richness",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.05
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.25,
        "note": "sliced, to garnish",
        "optional": true
      }
    ],
    "steps": [
      "Set the rice cooker to its Cook/Sauté setting (or just let an empty pot preheat for 5 minutes). Add the butter and sliced onions, close the lid, and let them sweat for about 10 minutes, stirring once or twice, until soft and golden.",
      "Stir in the minced garlic, dried thyme, and Worcestershire and cook 1 minute more so the onions go deeply caramelized and fragrant.",
      "Rinse the rice until the water runs clear, then add it to the pot with the onions. Pour in the beef broth plus enough water to reach the 2-cup rice line (about 2.5 cups liquid total), and season with salt and pepper. Stir to combine.",
      "Close the lid and run a full White Rice cook cycle. Do not open it early.",
      "When the cycle finishes, let it rest on Keep Warm for 10 minutes, then fluff with a fork.",
      "Sprinkle the shredded gruyere (and parmesan, if using) over the hot rice, close the lid, and let the residual heat melt the cheese for 3-4 minutes.",
      "Stir the melted cheese through, top with sliced scallions, and serve hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "A single yellow onion costs pennies and is the star here, so go heavy on the caramelizing and skip pricier add-ins.",
      "Use a bouillon cube dissolved in water instead of boxed beef broth to cut cost without losing the savory backbone.",
      "Buy a block of cheese and shred it yourself; pre-shredded bags cost more per ounce and melt less smoothly."
    ],
    "substitutions": [
      {
        "forIngredientId": "gruyere",
        "swap": "Use Swiss or provolone, which melt just as well for a fraction of the price",
        "savings": "~$2.50 per batch"
      },
      {
        "forIngredientId": "beef-broth",
        "swap": "A beef or chicken bouillon cube in water",
        "savings": "~$1.00 per batch"
      },
      {
        "forIngredientId": "rice",
        "swap": "Whatever long-grain or jasmine rice is cheapest in bulk",
        "savings": "~$0.50 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 13,
      "carbs": 62,
      "fat": 13,
      "fiber": 2
    },
    "emoji": "🧅",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegetarian",
      "comfort-food",
      "cheesy"
    ]
  },
  {
    "id": "rice-cooker-tuscan-bean-soup",
    "name": "Rice Cooker Tuscan White Bean & Kale Soup",
    "description": "A cozy, brothy bowl of creamy white beans, tender kale, and sweet tomato that simmers itself in the rice cooker while you do nothing.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "cannellini-beans",
        "quantity": 2,
        "note": "white beans, drained and rinsed"
      },
      {
        "ingredientId": "kale",
        "quantity": 0.5,
        "note": "stems removed, leaves torn"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "one 14 oz can"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "celery",
        "quantity": 1,
        "note": "2 stalks, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 1,
        "note": "about 4 cups"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.2,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 0.3,
        "note": "1 tsp"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.25,
        "optional": true,
        "note": "grated, to finish"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.1
      }
    ],
    "steps": [
      "Add the olive oil, diced onion, carrot, celery, and garlic to the rice cooker pot. Stir, close the lid, and run one cook cycle (about 10 minutes), stirring once, to soften the vegetables.",
      "Add the crushed tomatoes, drained white beans, italian seasoning, salt, and pepper. Pour in the veggie broth and stir well.",
      "Close the lid and run a second full cook cycle so the soup comes up to a steady simmer, about 25-30 minutes. If your cooker clicks off early, just press cook again to keep it bubbling.",
      "Open the lid, stir in the torn kale, and let it wilt in the hot soup for 5 minutes (close the lid and run cook again briefly if it needs more heat).",
      "Taste and adjust salt and pepper. For a creamier body, mash a few beans against the side of the pot with a spoon.",
      "Ladle into bowls and finish with grated parmesan."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Dried white beans cooked in a separate rice cooker cycle cost a fraction of canned. Soak overnight, then cook with broth until tender before starting the soup.",
      "Don't toss the kale stems. Dice them small and add them with the carrots and celery so nothing goes to waste.",
      "Swap veggie broth for a bouillon cube dissolved in 4 cups of water to cut cost without losing flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "cannellini-beans",
        "swap": "Any white bean like navy or great northern, or even chickpeas",
        "savings": "Use dried beans instead of canned to save about 50%"
      },
      {
        "forIngredientId": "kale",
        "swap": "Spinach, chard, or chopped cabbage",
        "savings": "Frozen spinach is often cheaper and keeps longer"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "A bouillon cube in 4 cups water",
        "savings": "Saves around $2 per pot"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 12,
      "carbs": 38,
      "fat": 4,
      "fiber": 11
    },
    "emoji": "🥣",
    "accentColor": "bg-emerald-100",
    "cuisine": "Italian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "soup",
      "budget",
      "vegetarian",
      "cozy"
    ]
  },
  {
    "id": "rice-cooker-south-indian-lemon-rice",
    "name": "Rice Cooker South Indian Lemon Rice",
    "description": "Bright, sunny turmeric-lemon rice popping with crunchy peanuts and mustard seeds, all from one pot.",
    "mealType": "lunch",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "1.5 cups dry, sona masoori or any long-grain"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1.5,
        "note": "juice of about 1.5 lemons, ~3 tbsp"
      },
      {
        "ingredientId": "peanuts",
        "quantity": 0.4,
        "note": "about 1/3 cup raw or roasted"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.15,
        "note": "about 3/4 tsp"
      },
      {
        "ingredientId": "mustard-seed",
        "quantity": 0.1,
        "note": "about 1 tsp black mustard seeds"
      },
      {
        "ingredientId": "chana-dal",
        "quantity": 0.1,
        "note": "about 1 tbsp, for nutty crunch"
      },
      {
        "ingredientId": "urad-dal",
        "quantity": 0.08,
        "optional": true,
        "note": "about 1 tsp, optional for extra crunch"
      },
      {
        "ingredientId": "curry-leaves",
        "quantity": 0.2,
        "optional": true,
        "note": "about 10 fresh leaves if available"
      },
      {
        "ingredientId": "serrano",
        "quantity": 1,
        "note": "1 green chili, slit (stands in for Indian green chili)"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.1,
        "note": "about 1 tsp grated"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.15,
        "note": "about 2 tbsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1,
        "note": "to taste, about 3/4 tsp"
      }
    ],
    "steps": [
      "Rinse 1.5 cups rice until water runs clear, add to the rice cooker with 2.25 cups water and a pinch of salt, and run a full cook cycle. When done, fluff and spread the rice out in the pot (or a wide bowl) so it cools and dries slightly while you make the tempering.",
      "Wipe the pot if needed, set the cooker to its cook/saute setting, and add the vegetable oil. Once warm, add the peanuts and chana-dal (and urad-dal if using) and let them toast in the heating oil for 3-4 minutes, stirring, until the peanuts are golden and the dal turns light brown.",
      "Add the mustard seeds and let them crackle for about 30 seconds, then stir in the curry leaves, slit serrano chili, and grated ginger. Cook 1 minute until fragrant.",
      "Sprinkle in the turmeric and the remaining salt, stir for 10 seconds so it doesn't burn, then turn the cooker off (or back to keep-warm).",
      "Add the fluffed rice back in and gently fold everything together until the rice is evenly yellow and the peanuts are distributed. Use a light hand so the grains stay separate.",
      "Pour the lemon juice over the rice and fold once more. Taste and add more salt or lemon as you like, then close the lid for 5 minutes on keep-warm to let the flavors set before serving warm or at room temperature."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Lemon rice is the classic way to revive leftover or day-old rice, so cook a big batch earlier and turn the extras into this for nearly free.",
      "Buy whole peanuts and a small bag of mustard seeds once; they cost pennies per serving and last for months.",
      "Skip the chana-dal and urad-dal if you don't have them and just lean on extra peanuts for crunch."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon",
        "swap": "Use bottled lemon-juice-bottled, about 3 tbsp",
        "savings": "Cheaper per serving and keeps for months with no waste"
      },
      {
        "forIngredientId": "serrano",
        "swap": "A pinch of red-pepper-flakes or any green chili you have",
        "savings": "Uses pantry spice instead of buying fresh chilies"
      },
      {
        "forIngredientId": "peanuts",
        "swap": "Cashews or even sunflower-seeds for the crunch",
        "savings": "Use whatever nut is cheapest in your pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 8,
      "carbs": 58,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "South Indian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "vegan",
      "leftover-rice"
    ]
  },
  {
    "id": "rice-cooker-deep-dish-pizza",
    "name": "Rice Cooker Deep-Dish Pizza",
    "description": "The viral one-pot pan pizza that bakes up with a gooey cheesy top and a shatteringly crisp golden crust, no oven required.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 0.5,
        "note": "store-bought ball, about half a 1 lb package"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "1 tbsp to grease the pot, plus a drizzle for the crust"
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 0.4,
        "note": "about 3/4 cup pizza/marinara sauce"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 1,
        "note": "about 1.5 cups shredded"
      },
      {
        "ingredientId": "pepperoni",
        "quantity": 0.5,
        "note": "roughly 20 slices"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.2,
        "note": "2 tbsp grated, for the crust and top"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 0.1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "1 clove, minced into the sauce"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "optional": true,
        "note": "thinly sliced topping"
      }
    ],
    "steps": [
      "Rub the inside of the rice cooker pot generously with 1 tbsp olive oil, then sprinkle the grated parmesan around the bottom and up the sides — this is what builds the crispy golden crust.",
      "Stretch the pizza dough into a round and press it into the bottom of the pot, pushing it about 1 inch up the sides to form a deep-dish wall. Poke the base a few times with a fork.",
      "Stir the minced garlic and italian seasoning into the tomato sauce, then spread it over the dough. Layer on the mozzarella, pepperoni, and optional bell pepper.",
      "Close the lid and run a full Cook cycle. When it clicks to Warm, do NOT open it — let it rest 5 minutes, then run a SECOND Cook cycle so the raw dough fully sets and the bottom crisps.",
      "Once the second cycle finishes, let it sit on Warm for 5 more minutes. The cheese should be fully melted and the edges pulling away from the pot.",
      "Run a butter knife around the edge, then carefully invert the pot onto a plate (or lift with a spatula) to reveal the crisp crust. Drizzle with the remaining olive oil, slice, and serve hot."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use half a store-bought dough ball and freeze the rest for next week's pizza night.",
      "Skip the pepperoni and load up on cheap veggies like bell pepper and onion to cut the cost per serving in half.",
      "Buy a block of mozzarella and shred it yourself — it melts better and costs less than pre-shredded bags."
    ],
    "substitutions": [
      {
        "forIngredientId": "pizza-dough",
        "swap": "Mix 1 cup flour with a little water, oil, baking powder and salt for a quick no-yeast dough",
        "savings": "saves about $2 per pizza"
      },
      {
        "forIngredientId": "pepperoni",
        "swap": "Use diced sausage or just extra veggies",
        "savings": "saves around $1.50 per serving"
      },
      {
        "forIngredientId": "tomato-sauce",
        "swap": "Thin out tomato paste with water and a pinch of sugar",
        "savings": "saves about $1 per jar"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 21,
      "carbs": 41,
      "fat": 19,
      "fiber": 3
    },
    "emoji": "🍕",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dump-and-go",
      "dorm-friendly",
      "comfort-food",
      "viral"
    ]
  },
  {
    "id": "rice-cooker-japanese-cheesecake",
    "name": "Rice Cooker Japanese Cheesecake",
    "description": "A featherlight, jiggly cotton cheesecake that steam-bakes to cloud-soft perfection right in your rice cooker pot.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "cream-cheese",
        "quantity": 0.75,
        "note": "about 6 oz, softened"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "yolks and whites separated"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.4,
        "note": "about 1/2 cup, for meringue and batter"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.25,
        "note": "about 3 tbsp, melted"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "about 1/4 cup, warmed"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "about 1/3 cup cake-soft flour"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.1,
        "note": "about 2 tbsp, for extra lift"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice only, brightens the batter"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.1,
        "note": "1 tsp, optional",
        "optional": true
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.05,
        "note": "1/4 tsp, stabilizes meringue",
        "optional": true
      }
    ],
    "steps": [
      "Lightly grease the rice cooker pot with butter and line the bottom with a circle of parchment. Set a small bowl of cream cheese, the melted butter, and the warm milk together and whisk smooth, then beat in the 4 egg yolks, lemon juice, and vanilla until silky. Sift in the flour and cornstarch and stir just until no lumps remain.",
      "In a clean, dry bowl beat the 4 egg whites with the cream of tartar until foamy, then add the sugar a spoonful at a time, beating until you reach soft, glossy peaks that gently flop over.",
      "Fold one third of the meringue into the cheese batter to loosen it, then gently fold in the rest in two additions, keeping as much air as possible. Pour the batter into the prepared pot and tap it lightly on the counter to pop big bubbles.",
      "Close the lid and run a full Cook cycle. When it clicks to Warm, leave the lid closed and let it rest 15 minutes, then run a second Cook cycle to fully set the center (a toothpick should come out clean and the top should spring back).",
      "Switch to Warm and let the cake sit 10 minutes with the lid closed so it settles without collapsing. Carefully invert onto a plate, peel off the parchment, and flip back over.",
      "Cool fully, then chill at least 2 hours for the classic cold, jiggly texture. Dust with a little sugar and slice into 6 wedges."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 65,
    "difficulty": "medium",
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Store-brand cream cheese works exactly the same here, and you only need part of a block, so save the rest for bagels.",
      "No mixer? A whisk and some elbow grease will get egg whites to soft peaks in a few minutes; a pinch of cream of tartar or a few drops of lemon juice helps them hold.",
      "Save the leftover lemon half and zest before juicing it for tea or another bake instead of tossing it."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "A few drops of lemon juice or white vinegar to stabilize the meringue",
        "savings": "Skip buying a whole jar you'll rarely use"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Use a little extra flour instead",
        "savings": "One less pantry item to buy"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any plain milk you have, including oat or almond milk",
        "savings": "Use what's already in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 210,
      "protein": 6,
      "carbs": 20,
      "fat": 12,
      "fiber": 0
    },
    "emoji": "🧀",
    "accentColor": "bg-yellow-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "dessert",
      "one-pot",
      "dorm-friendly",
      "vegetarian",
      "baking"
    ]
  }
];
