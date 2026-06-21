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
  }
];
