import type { Recipe } from "@/lib/types";

/**
 * Viral / social-media recipes (the dishes people actually search after seeing
 * them on TikTok & Instagram), structured into Waivy's catalog so pricing,
 * macros, and pantry matching all work. Ingredient IDs are real catalog IDs and
 * quantities are in each ingredient's catalog unit; per-serving macros are
 * realistic estimates. Photos live in socialRecipePhotos.ts (licensed, attributed).
 */
export const SOCIAL_RECIPES: Recipe[] = [
  {
    "id": "baked-feta-pasta",
    "name": "Baked Feta Pasta",
    "description": "The TikTok-famous block of feta roasted with burst cherry tomatoes, then smashed into a creamy, garlicky sauce that coats every noodle.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "feta",
        "quantity": 8,
        "note": "1 block (about 8 oz)"
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "cherry or grape tomatoes (about 2 pints)"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 4,
        "note": "divided"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, smashed"
      },
      {
        "ingredientId": "pasta",
        "quantity": 4,
        "note": "penne or rigatoni"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 0.25,
        "note": "torn, to finish"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      }
    ],
    "steps": [
      "Heat oven to 400°F (200°C). In a baking dish, toss the cherry tomatoes with 3 tbsp olive oil, the smashed garlic, salt, and pepper.",
      "Nestle the block of feta into the center, drizzle it with the remaining 1 tbsp olive oil, and sprinkle red pepper flakes over the top.",
      "Bake 30-35 minutes, until the tomatoes burst and blister and the feta is soft and golden at the edges.",
      "Meanwhile, boil the pasta in well-salted water until just al dente. Reserve about 1 cup of pasta water, then drain.",
      "Smash the roasted feta into the tomatoes with a fork and stir into a creamy sauce, loosening with splashes of pasta water until silky.",
      "Add the drained pasta and toss until every piece is coated, adding more pasta water as needed. Finish with torn fresh basil and serve hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a whole block of feta in brine instead of pre-crumbled — it is cheaper per ounce and melts into a creamier sauce.",
      "Use whatever tomatoes are on sale; Roma or vine tomatoes cut into chunks roast down just as well as cherry tomatoes.",
      "Dried basil or a spoon of pesto stirred in at the end stands in for fresh basil at a fraction of the cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "a block of goat cheese or even cream cheese for a milder, creamier sauce",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "basil-fresh",
        "swap": "1 tsp dried basil or a spoonful of pesto",
        "savings": "~$2.00"
      },
      {
        "forIngredientId": "pasta",
        "swap": "any short pasta on sale (rotini, shells, macaroni)",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 17,
      "carbs": 68,
      "fat": 21,
      "fiber": 4
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Mediterranean",
    "tags": [
      "viral",
      "tiktok",
      "vegetarian",
      "baked",
      "one-pan-sauce",
      "weeknight"
    ]
  },
  {
    "id": "marry-me-chicken",
    "name": "Marry Me Chicken",
    "description": "Golden pan-seared chicken simmered in a creamy sun-dried tomato parmesan sauce so good it might just earn a proposal.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 2,
        "note": "large, sliced in half lengthwise into 4 cutlets"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "tablespoons, for searing"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "cup"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "cup"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.5,
        "note": "cup, freshly grated"
      },
      {
        "ingredientId": "sun-dried-tomatoes",
        "quantity": 0.3,
        "note": "cup, oil-packed, drained and chopped"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1,
        "note": "teaspoon"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "note": "teaspoon",
        "optional": true
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "tablespoons, for dredging"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 1,
        "note": "to taste"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "note": "tablespoons, chopped, to garnish",
        "optional": true
      }
    ],
    "steps": [
      "Slice each chicken breast in half lengthwise to make 4 thin cutlets. Pat dry, season both sides with salt and pepper, then lightly dredge in flour.",
      "Heat olive oil in a large skillet over medium-high. Sear the chicken 4-5 minutes per side until deeply golden and just cooked through, then transfer to a plate.",
      "Lower heat to medium and add the butter. Stir in the minced garlic and chopped sun-dried tomatoes and cook 1 minute until fragrant.",
      "Pour in the chicken broth, scraping up the browned bits, then stir in the heavy cream, italian seasoning, and red pepper flakes. Simmer 2-3 minutes.",
      "Whisk in the parmesan until the sauce is smooth and slightly thickened. Taste and adjust salt and pepper.",
      "Nestle the chicken back into the sauce, spoon it over the top, and simmer 3-4 minutes until heated through and the sauce coats the back of a spoon.",
      "Garnish with fresh basil and serve over pasta, rice, or with crusty bread to mop up the sauce."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole chicken breast value pack and slice your own cutlets instead of paying extra for pre-thin-cut.",
      "Half-and-half or whole milk thickened with a teaspoon of flour stands in for heavy cream and costs less.",
      "A small jar of sun-dried tomatoes goes a long way; freeze leftover ones in the oil for the next batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "half-and-half or whole milk + 1 tsp flour",
        "savings": "~$1.20"
      },
      {
        "forIngredientId": "chicken-breast",
        "swap": "boneless chicken thighs",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "pecorino or grated cheddar",
        "savings": "~$0.80"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 38,
      "carbs": 9,
      "fat": 33,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "viral",
      "tiktok",
      "one-pan",
      "high-protein",
      "date-night",
      "creamy"
    ]
  },
  {
    "id": "spicy-vodka-pasta",
    "name": "Spicy Vodka Pasta (Gigi Hadid)",
    "description": "Gigi Hadid's famous creamy, spicy tomato vodka penne that's silky, cozy, and ready in under half an hour.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "penne",
        "quantity": 4,
        "note": "penne or rigatoni, in ounces"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "shallot",
        "quantity": 1,
        "note": "or 1/4 onion, finely minced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.25,
        "note": "about a quarter of a 6 oz can"
      },
      {
        "ingredientId": "vodka",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.5,
        "note": "cup"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "note": "teaspoon, adjust to taste"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.5,
        "note": "cup, grated"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 4,
        "note": "leaves, torn, for garnish",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste"
      }
    ],
    "steps": [
      "Bring a large pot of salted water to a boil and cook the penne until just shy of al dente. Reserve about 1 cup of the starchy pasta water before draining.",
      "While the pasta cooks, heat the olive oil in a deep skillet over medium heat. Add the minced shallot and garlic and saute 2-3 minutes until soft and fragrant but not browned.",
      "Stir in the tomato paste and red pepper flakes. Cook, stirring constantly, for 4-5 minutes until the paste deepens to a brick-red color and smells sweet.",
      "Pour in the vodka and let it sizzle for about 1 minute to cook off the raw alcohol, then stir in the heavy cream until the sauce turns a smooth pinkish-orange.",
      "Add the drained pasta along with a splash of reserved pasta water, the butter, and the parmesan. Toss vigorously over low heat until the sauce clings and turns glossy, adding more pasta water as needed.",
      "Season with salt to taste, plate, and finish with extra parmesan and torn fresh basil."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 17,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a single shallot or use a wedge of regular onion instead of a whole bunch to cut cost.",
      "A small bottle of vodka lasts for dozens of batches, so the per-serving cost is just pennies.",
      "Use a wedge of real parmesan and grate it yourself, or swap in the cheaper green-can parmesan to save more."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Whole milk thickened with a teaspoon of butter, or evaporated milk",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "vodka",
        "swap": "Skip it and add a splash of water plus a squeeze of lemon",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "shallot",
        "swap": "A quarter of a regular yellow onion",
        "savings": "~$0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 16,
      "carbs": 72,
      "fat": 23,
      "fiber": 4
    },
    "emoji": "🍝",
    "accentColor": "bg-rose-100",
    "cuisine": "Italian",
    "tags": [
      "viral",
      "tiktok",
      "gigi-hadid",
      "creamy",
      "spicy",
      "one-pan",
      "comfort-food"
    ]
  },
  {
    "id": "smashed-cucumber-salad",
    "name": "Viral Smashed Cucumber Salad",
    "description": "Cool, crunchy cucumbers smashed and tossed in a punchy garlic, soy, and chili-oil dressing that soaks into every craggy edge.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "cucumber",
        "quantity": 2,
        "note": "English or Persian cucumbers"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp, for drawing out water"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, finely minced"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "chili-oil",
        "quantity": 1,
        "note": "tablespoon, with crispy bits"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "teaspoon, toasted"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "teaspoon"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "teaspoon, toasted",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "thinly sliced",
        "optional": true
      }
    ],
    "steps": [
      "Trim the ends off the cucumbers. Lay each on a cutting board and lightly smash with the flat side of a knife or a rolling pin until they crack and split open.",
      "Tear or cut the smashed cucumbers into rough bite-size chunks and put them in a colander or bowl.",
      "Toss the chunks with the salt and let them sit for 10-15 minutes, then drain off the released water and pat dry. This keeps the salad crisp, not watery.",
      "Whisk together the minced garlic, soy sauce, rice vinegar, chili oil, sesame oil, and sugar in a small bowl.",
      "Pour the dressing over the drained cucumbers and toss well so every craggy edge gets coated.",
      "Chill for at least 10 minutes for best flavor, then top with toasted sesame seeds and scallion before serving."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "dietTags": [
      "vegan",
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy regular slicing cucumbers in season instead of pricey Persian ones; just scrape out the wateriest seeds.",
      "Make your own chili oil by heating vegetable oil and pouring it over red pepper flakes and garlic.",
      "Salt-and-drain step lets you stretch one batch over two days without it going soggy."
    ],
    "substitutions": [
      {
        "forIngredientId": "rice-vinegar",
        "swap": "plain white or apple cider vinegar with a pinch more sugar",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "chili-oil",
        "swap": "sriracha or red pepper flakes bloomed in hot oil",
        "savings": "~$2.00"
      },
      {
        "forIngredientId": "cucumber",
        "swap": "smashed zucchini, salted a bit longer",
        "savings": "~$0.75"
      }
    ],
    "estimatedNutrition": {
      "calories": 120,
      "protein": 3,
      "carbs": 11,
      "fat": 8,
      "fiber": 2
    },
    "emoji": "🥒",
    "accentColor": "bg-green-100",
    "cuisine": "Chinese",
    "tags": [
      "viral",
      "tiktok",
      "no-cook",
      "vegan",
      "spicy",
      "side-dish"
    ]
  },
  {
    "id": "green-goddess-salad",
    "name": "Green Goddess Salad",
    "description": "A finely chopped cabbage and cucumber salad drenched in a bright, herby green dressing you'll want to eat by the spoonful.",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "cabbage",
        "quantity": 0.5,
        "note": "green cabbage, finely chopped"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "chives or green onions, divided"
      },
      {
        "ingredientId": "spinach",
        "quantity": 1,
        "note": "packed cup, for the dressing"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 0.5,
        "note": "packed cup, for the dressing"
      },
      {
        "ingredientId": "chives",
        "quantity": 0.25,
        "note": "cup, for the dressing"
      },
      {
        "ingredientId": "cashews",
        "quantity": 0.33,
        "note": "cup, raw, blended into dressing"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "small clove"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 3,
        "note": "tablespoons"
      },
      {
        "ingredientId": "nutritional-yeast",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon, to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "teaspoon"
      }
    ],
    "steps": [
      "Finely chop the cabbage and cucumber into small, even pieces and toss them together in a large bowl. The smaller the chop, the more authentic and scoopable the salad.",
      "Thinly slice the scallions or chives and add about two-thirds to the bowl, saving the rest for the dressing.",
      "Make the dressing: add the spinach, basil, chives, the reserved scallion, cashews, garlic, lemon juice, rice vinegar, olive oil, nutritional yeast, salt, and pepper to a blender.",
      "Blend on high until smooth and bright green, scraping down the sides as needed. Add a splash of water to loosen if it's too thick.",
      "Taste the dressing and adjust with more salt, lemon, or pepper until it's punchy and herby.",
      "Pour the dressing over the chopped vegetables and toss until everything is fully coated.",
      "Serve immediately on its own, scooped with tortilla chips, or piled into a wrap or pita."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Use a whole head of cabbage instead of pre-shredded bags; it's a fraction of the price and lasts for weeks in the fridge.",
      "Buy one bunch of basil and a small bag of cashews to cover several batches of dressing all week.",
      "No blender? Finely mince the herbs and whisk with the liquids and a little extra olive oil for a chunkier rustic version."
    ],
    "substitutions": [
      {
        "forIngredientId": "cashews",
        "swap": "raw sunflower seeds or 2 tbsp tahini",
        "savings": "~$0.80"
      },
      {
        "forIngredientId": "basil-fresh",
        "swap": "fresh parsley or cilantro",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "nutritional-yeast",
        "swap": "2 tbsp grated parmesan (not vegan)",
        "savings": "~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 190,
      "protein": 5,
      "carbs": 12,
      "fat": 15,
      "fiber": 4
    },
    "emoji": "🥗",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "viral",
      "tiktok",
      "no-cook",
      "vegan",
      "chopped-salad",
      "meal-prep"
    ]
  },
  {
    "id": "quesabirria-tacos",
    "name": "Quesabirria Tacos",
    "description": "Crispy cheese-fried tacos stuffed with chili-braised beef, served with a rich consommé for dunking.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "beef-chuck",
        "quantity": 2,
        "note": "beef chuck roast, cut into large chunks"
      },
      {
        "ingredientId": "dried-chili",
        "quantity": 5,
        "note": "guajillo chilies, stemmed and seeded"
      },
      {
        "ingredientId": "dried-chili",
        "quantity": 2,
        "optional": true,
        "note": "ancho or chiles de arbol for extra heat"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "white onion, halved"
      },
      {
        "ingredientId": "garlic",
        "quantity": 5,
        "note": "cloves"
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "roma tomatoes"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 4,
        "note": "cups"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "tsp Mexican oregano"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "note": "tsp, or 1 small stick"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.25,
        "note": "tsp"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 2
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "tbsp apple cider vinegar"
      },
      {
        "ingredientId": "salt",
        "quantity": 2,
        "note": "tsp, to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 12,
        "note": "corn tortillas"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 2,
        "note": "cups shredded, low-moisture (sub for Oaxaca)"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "cup, chopped, for serving"
      },
      {
        "ingredientId": "lime",
        "quantity": 2,
        "note": "cut into wedges"
      }
    ],
    "steps": [
      "Toast the dried guajillo chilies in a dry pot for 30 seconds per side, then cover with hot water and soak 10 minutes until soft. Sear the beef chuck chunks with salt and pepper in the pot until browned, then set aside.",
      "Blend the soaked chilies with the tomatoes, half the onion, garlic, cumin, oregano, cinnamon, ground cloves, vinegar, and a splash of broth until smooth. Strain the sauce back over the beef.",
      "Add the beef broth, bay leaves, remaining onion, and salt. Cover and braise on low for 2.5 to 3 hours (or pressure cook 45 minutes) until the beef shreds easily.",
      "Remove the beef, shred it with two forks, and toss with a few ladles of the braising liquid. Skim the orange-red fat off the top of the pot and reserve it for dipping the tortillas. Keep the rest as consommé.",
      "Dip each tortilla in the reserved fat, lay it on a hot griddle, and sprinkle with mozzarella. When the cheese melts, add shredded beef to one half and fold the tortilla over.",
      "Fry the folded tacos until crispy and golden on both sides, pressing gently. Garnish with chopped cilantro and diced onion.",
      "Pour the warm consommé into small bowls with cilantro and a squeeze of lime. Serve tacos hot for dunking."
    ],
    "totalTimeMinutes": 195,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 170,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Beef chuck is one of the cheapest braising cuts and gets meltingly tender after a long simmer, so don't pay extra for premium beef.",
      "Make a double batch of the braised beef and consommé and freeze half; it reheats perfectly for quesabirria, ramen, or burritos all week.",
      "Buy whole dried guajillo chilies from the Latin aisle or a Mexican market instead of pre-made paste; a small bag costs a couple dollars and makes several batches."
    ],
    "substitutions": [
      {
        "forIngredientId": "beef-chuck",
        "swap": "Use beef stew meat or boneless short rib trimmings",
        "savings": "~$2.00"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "Any low-moisture melting cheese like Monterey Jack or a cheese blend",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "dried-chili",
        "swap": "2 tbsp chili powder plus 1 tsp smoked paprika if you can't find whole dried chilies",
        "savings": "~$1.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 42,
      "carbs": 34,
      "fat": 29,
      "fiber": 5
    },
    "emoji": "🌮",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "viral",
      "tiktok",
      "birria",
      "cheesy",
      "high-protein",
      "meal-prep"
    ]
  },
  {
    "id": "crispy-smashed-potatoes",
    "name": "Crispy Smashed Potatoes",
    "description": "Boiled-until-tender baby potatoes smashed flat and roasted into golden, crackly little crisps with fluffy centers.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "baby/small potatoes, ~1.5 lb"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 4,
        "note": "divided, for boiling water and roasting"
      },
      {
        "ingredientId": "salt",
        "quantity": 2,
        "note": "divided, generous for the boil"
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
        "ingredientId": "parmesan",
        "quantity": 0.25,
        "optional": true,
        "note": "grated, for finishing"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "Add the potatoes to a large pot, cover with cold water, and add 1 tbsp salt. Bring to a boil and cook 15-20 minutes until a fork slides in easily.",
      "Drain well and let the potatoes steam-dry for a few minutes so the surface gets dry (this is key for crispiness). Meanwhile, preheat the oven to 450F (230C).",
      "Drizzle 1 tbsp olive oil over a baking sheet. Space the potatoes out and use the bottom of a glass or a fork to smash each one flat, about 1/2 inch thick.",
      "Brush or drizzle the remaining olive oil generously over the tops. Season all over with the remaining salt, pepper, and garlic powder.",
      "Roast 25-30 minutes, flipping once halfway, until deeply golden and crispy at the edges.",
      "If using, scatter the grated parmesan over the potatoes for the last 3-4 minutes so it melts and crisps.",
      "Finish with fresh parsley and serve hot with your favorite dip."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 50,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole bag of regular potatoes and cut them into golf-ball-sized chunks instead of pricier baby potatoes.",
      "Skip the parmesan and lean on garlic powder and salt; the crispy texture carries the flavor on its own.",
      "Roast a double batch on one sheet pan so you only heat the oven once."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable or canola oil",
        "savings": "~$0.40/batch"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "a sprinkle of nutritional yeast or skip entirely",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "a pinch of dried parsley or chives",
        "savings": "~$0.80"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 4,
      "carbs": 30,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "🥔",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "viral",
      "tiktok",
      "side-dish",
      "crispy",
      "vegetarian",
      "budget"
    ]
  },
  {
    "id": "pesto-eggs-toast",
    "name": "Pesto Eggs on Toast",
    "description": "The viral TikTok trick where eggs fry right in a sizzling pool of pesto, piled onto crispy toast for a 10-minute flavor bomb.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "pesto",
        "quantity": 2,
        "note": "2 heaping tbsp, basil pesto"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "bread",
        "quantity": 2,
        "note": "thick slices, sourdough is best"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "optional": true,
        "note": "smashed, for topping"
      },
      {
        "ingredientId": "feta",
        "quantity": 0.25,
        "optional": true,
        "note": "crumbled on top"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "pinch, to taste"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "to taste"
      }
    ],
    "steps": [
      "Toast the bread slices until golden and crisp; set aside on plates.",
      "Spoon the pesto into a cold nonstick skillet and spread it into a thin layer. Set heat to medium and let the pesto warm and start to sizzle, about 1 minute.",
      "Crack the eggs directly into the sizzling pesto, spacing them apart. Season with a little salt and pepper.",
      "Cover the pan and cook 2-3 minutes for runny yolks and crisp, golden pesto-fried edges, or longer if you prefer firm yolks.",
      "If using, smash the avocado over the toast and crumble the feta.",
      "Slide the pesto eggs onto the toast, scraping up all the crispy pesto bits from the pan. Top with a pinch of red pepper flakes and serve immediately."
    ],
    "totalTimeMinutes": 10,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "A jar of pesto stretches across many breakfasts, just 2 tbsp per serving here.",
      "Skip the avocado and feta to keep it under a dollar a plate, the pesto eggs shine on their own.",
      "Use up the heel ends of a bread loaf for toast instead of tossing them."
    ],
    "substitutions": [
      {
        "forIngredientId": "pesto",
        "swap": "Blend a handful of basil or spinach with garlic, olive oil, and parmesan for homemade pesto",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "feta",
        "swap": "Grate a little parmesan or any hard cheese you have",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "bread",
        "swap": "Use an English muffin or bagel instead",
        "savings": "~$0.15"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 21,
      "carbs": 24,
      "fat": 26,
      "fiber": 4
    },
    "emoji": "🍳",
    "accentColor": "bg-green-100",
    "cuisine": "Italian-inspired",
    "tags": [
      "viral",
      "tiktok",
      "high-protein",
      "quick",
      "brunch",
      "vegetarian"
    ]
  },
  {
    "id": "bang-bang-chicken",
    "name": "Bang Bang Chicken",
    "description": "Crispy golden chicken bites tossed in a creamy sweet-chili mayo that's sweet, tangy, and just spicy enough to keep you coming back.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 1.5,
        "note": "cut into bite-size pieces"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.5,
        "note": "cup, for dredging"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "beaten"
      },
      {
        "ingredientId": "panko",
        "quantity": 1.5,
        "note": "cups"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "tsp"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "cup, for frying"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 0.5,
        "note": "cup, for the bang bang sauce"
      },
      {
        "ingredientId": "sweet-chili-sauce",
        "quantity": 0.33,
        "note": "cup"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1.5,
        "note": "tbsp, adjust to taste"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "tbsp"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, to garnish",
        "optional": true
      }
    ],
    "steps": [
      "Whisk the mayonnaise, sweet chili sauce, sriracha, and honey in a bowl to make the bang bang sauce; set aside.",
      "Pat the chicken pieces dry and season with the salt, pepper, and garlic powder.",
      "Set up a breading station: cornstarch in one bowl, beaten eggs in a second, panko in a third. Coat each piece in cornstarch, then egg, then press into the panko.",
      "Heat about 1/2 inch of oil in a skillet over medium-high until shimmering (around 350F). Fry the chicken in batches for 3-4 minutes per side until golden and cooked through (165F inside).",
      "Drain the chicken on a paper-towel-lined plate for a minute so it stays crispy.",
      "Toss the warm chicken in half the bang bang sauce, or drizzle it over the top so the coating stays crunchy.",
      "Garnish with sliced scallions and serve over rice with the extra sauce on the side."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy chicken breast in a family pack and freeze portions; it's far cheaper per pound than small trays.",
      "Make your own sweet chili sauce with sriracha, sugar, vinegar, and a little water if you don't want to buy a bottle.",
      "Air-fry the breaded pieces at 400F for 12 minutes instead of pan-frying to save on oil."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-breast",
        "swap": "chicken thighs for juicier, cheaper meat",
        "savings": "~$1.50/lb"
      },
      {
        "forIngredientId": "panko",
        "swap": "crushed cornflakes or regular breadcrumbs",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "sweet-chili-sauce",
        "swap": "honey plus a splash of rice vinegar and extra sriracha",
        "savings": "~$2.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 38,
      "carbs": 34,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-rose-100",
    "cuisine": "Asian-American",
    "tags": [
      "viral",
      "tiktok",
      "high-protein",
      "crispy",
      "spicy",
      "weeknight"
    ]
  },
  {
    "id": "garlic-parmesan-chicken",
    "name": "Garlic Parmesan Chicken",
    "description": "Juicy pan-seared chicken smothered in a buttery garlic-parmesan cream sauce that tastes like a restaurant splurge for pennies.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 2,
        "note": "large, sliced in half lengthwise into 4 cutlets"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "tablespoons"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "garlic",
        "quantity": 6,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.5,
        "note": "cup, low-sodium"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.75,
        "note": "cup"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.75,
        "note": "cup, freshly grated"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 1,
        "note": "teaspoon"
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1,
        "note": "teaspoon, for dredging"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "cup, for dredging"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "to taste"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "tablespoons, chopped, to garnish"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "teaspoon, for heat"
      }
    ],
    "steps": [
      "Slice each chicken breast in half horizontally to make 4 thin cutlets. Pat dry, then season both sides with salt and pepper.",
      "On a plate, stir together the flour and garlic powder. Dredge each cutlet in the mixture, shaking off the excess.",
      "Heat the olive oil and 1 tablespoon of the butter in a large skillet over medium-high. Sear the chicken 4-5 minutes per side until golden and cooked through (165F inside), then transfer to a plate.",
      "Lower the heat to medium and melt the remaining 2 tablespoons butter. Add the minced garlic and cook 30-60 seconds until fragrant but not browned.",
      "Pour in the chicken broth and scrape up the browned bits, then stir in the heavy cream and Italian seasoning. Simmer 2-3 minutes to thicken slightly.",
      "Off the heat, whisk in the grated parmesan until the sauce is smooth and glossy. Taste and adjust salt, pepper, and red pepper flakes.",
      "Return the chicken and any juices to the pan, spoon the sauce over the top, and simmer 1-2 minutes. Garnish with fresh parsley and serve."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole bag of chicken breasts on sale and freeze in pairs - cutlets stretch 2 breasts to feed 4.",
      "Grate parmesan from a block instead of buying pre-shredded; it melts smoother and costs less per ounce.",
      "Half-and-half or whole milk loosened with a teaspoon of flour works in place of heavy cream to save a couple dollars."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole milk thickened with 1 tsp flour, or evaporated milk",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "chicken-breast",
        "swap": "boneless chicken thighs, which are cheaper and stay juicier",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "any hard grating cheese or pecorino you already have",
        "savings": "~$0.75"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 42,
      "carbs": 9,
      "fat": 31,
      "fiber": 1
    },
    "emoji": "🧄",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "viral",
      "tiktok",
      "one-pan",
      "high-protein",
      "date-night",
      "30-minute"
    ]
  },
  {
    "id": "smash-burger-tacos",
    "name": "Smash Burger Tacos",
    "description": "Juicy seasoned beef smashed right onto crispy tortillas and loaded with cheese, special sauce, and pickles like a burger gone taco.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 1,
        "note": "80/20 for the crispy smashed crust"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 8,
        "note": "small flour street-taco size"
      },
      {
        "ingredientId": "american-singles",
        "quantity": 8,
        "note": "one slice per taco"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely diced, smashed into the beef"
      },
      {
        "ingredientId": "dill-pickles",
        "quantity": 0.25,
        "note": "thinly sliced for topping"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "note": "shredded iceberg"
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
        "ingredientId": "onion-powder",
        "quantity": 1
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 0.33,
        "note": "base of the special sauce"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2,
        "note": "for special sauce"
      },
      {
        "ingredientId": "mustard",
        "quantity": 1,
        "note": "yellow, for special sauce"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "optional": true,
        "note": "to grease the pan"
      }
    ],
    "steps": [
      "Make the special sauce: stir together the mayonnaise, ketchup, mustard, and a tablespoon of finely chopped pickles. Set aside in the fridge.",
      "Mix the ground beef with the diced onion, salt, pepper, garlic powder, and onion powder, then divide into 8 loose balls (about 2 oz each).",
      "Lightly oil a large skillet or griddle over medium-high heat. Place a beef ball on a tortilla and smash it down hard with a spatula so the meat spreads to the edges and bonds to the tortilla.",
      "Cook beef-side-down 2-3 minutes until a deep brown crust forms, then carefully flip so the tortilla side crisps for about 1 minute.",
      "Lay a slice of American cheese on the beef and let it melt for 30 seconds, then transfer to a plate.",
      "Top each taco with shredded lettuce, pickle slices, and a drizzle of special sauce, then fold and serve hot."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a single chub of 80/20 ground beef and divide it yourself instead of pre-formed patties to save per pound.",
      "Skip name-brand American cheese for store-brand singles; they melt identically over the hot beef.",
      "Make the special sauce from pantry mayo, ketchup, and mustard instead of buying bottled burger sauce."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "ground-turkey",
        "savings": "~$1.50/lb"
      },
      {
        "forIngredientId": "american-singles",
        "swap": "a few shreds of any cheddar block you already have",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "tortilla",
        "swap": "corn tortillas if cheaper at your store",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 28,
      "carbs": 34,
      "fat": 29,
      "fiber": 2
    },
    "emoji": "🌮",
    "accentColor": "bg-red-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "viral",
      "tiktok",
      "smash-burger",
      "high-protein",
      "weeknight"
    ]
  },
  {
    "id": "korean-corn-cheese",
    "name": "Korean Corn Cheese",
    "description": "Sweet skillet corn bound in creamy mayo and blanketed with bubbling, golden mozzarella for the coziest Korean side dish.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "frozen-corn",
        "quantity": 3,
        "note": "thawed sweet corn (canned works too)"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 1.5,
        "note": "low-moisture, shredded"
      },
      {
        "ingredientId": "kewpie-mayo",
        "quantity": 0.25,
        "note": "Korean mayo"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "divided"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 0.5,
        "optional": true,
        "note": "finely diced, for heat"
      }
    ],
    "steps": [
      "If using frozen corn, thaw and pat very dry with paper towels so it browns instead of steaming. Drain canned corn well.",
      "Melt 1 tablespoon butter in an oven-safe skillet over medium-high heat. Add the corn and cook 4-5 minutes, stirring occasionally, until lightly charred in spots.",
      "Lower heat to medium. Stir in the remaining butter, mayo, sugar, salt, pepper, and optional jalapeno until the corn is glossy and coated.",
      "Smooth the corn into an even layer and scatter the shredded mozzarella over the top.",
      "Cover the skillet and cook 3-4 minutes until the cheese melts, or slide under a hot broiler for 2-3 minutes until bubbly and golden.",
      "Scatter sliced scallions over the top and serve hot, straight from the skillet, with bread or rice to scoop."
    ],
    "totalTimeMinutes": 18,
    "prepTimeMinutes": 6,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Canned or frozen corn is a fraction of the price of fresh and works perfectly here.",
      "Shred a block of mozzarella yourself instead of buying pre-shredded to save money and get a meltier finish.",
      "Skip the broiler and just cover the pan to melt the cheese, saving energy and time."
    ],
    "substitutions": [
      {
        "forIngredientId": "kewpie-mayo",
        "swap": "Regular mayonnaise with a pinch of sugar",
        "savings": "~$2.00"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "Cheddar or any meltable cheese block",
        "savings": "~$0.80"
      },
      {
        "forIngredientId": "frozen-corn",
        "swap": "Canned sweet corn, drained",
        "savings": "~$0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 11,
      "carbs": 22,
      "fat": 18,
      "fiber": 3
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "Korean",
    "tags": [
      "viral",
      "korean",
      "cheesy",
      "side-dish",
      "one-pan",
      "vegetarian"
    ]
  },
  {
    "id": "mango-sticky-rice",
    "name": "Mango Sticky Rice",
    "description": "Warm coconut-soaked sticky rice crowned with ripe golden mango and a salty-sweet coconut drizzle.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 1.5,
        "note": "Thai glutinous (sticky) rice if you can find it"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "full-fat, 13.5 oz can"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "white or palm sugar"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon, divided"
      },
      {
        "ingredientId": "mango-fresh",
        "quantity": 2,
        "note": "ripe, peeled and sliced"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "teaspoon, for the topping sauce"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "toasted, for garnish"
      }
    ],
    "steps": [
      "Rinse the glutinous rice in cold water 2-3 times until the water runs mostly clear, then soak it in fresh water for at least 30 minutes (or overnight) and drain.",
      "Line a steamer basket with a thin cloth or parchment, spread the drained rice in an even layer, and steam over simmering water for 20-25 minutes until tender and glossy. (No steamer? Cook in a rice cooker with a 1:1 rice-to-water ratio.)",
      "While the rice steams, warm about three-quarters of the coconut milk in a saucepan with the sugar and 1/4 teaspoon salt over low heat, stirring just until dissolved. Do not boil.",
      "Tip the hot cooked rice into a bowl, pour over the sweetened coconut milk, gently fold to combine, then cover and let it rest 15-20 minutes so the rice drinks up the coconut.",
      "Make the topping: heat the reserved coconut milk with the remaining 1/4 teaspoon salt and the cornstarch slurried in a splash of water, stirring until lightly thickened, then remove from heat.",
      "Mound the coconut rice onto plates, fan the sliced mango alongside, spoon the salty coconut sauce over the top, and finish with toasted sesame seeds."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "rice-cooker"
    ],
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy mangoes when they are in season and a little soft to the touch — they are sweeter and far cheaper than out-of-season ones.",
      "A can of coconut milk does both the rice and the sauce, so nothing goes to waste.",
      "Frozen mango chunks work in a pinch and cost a fraction of fresh — just thaw and pat dry."
    ],
    "substitutions": [
      {
        "forIngredientId": "mango-fresh",
        "swap": "frozen-mango, thawed and patted dry",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "sushi-rice",
        "swap": "short-grain rice cooked slightly sticky",
        "savings": "~$0.80"
      },
      {
        "forIngredientId": "sugar",
        "swap": "palm sugar for a deeper, more authentic flavor",
        "savings": "$0.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 390,
      "protein": 5,
      "carbs": 68,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🥭",
    "accentColor": "bg-yellow-100",
    "cuisine": "Thai",
    "tags": [
      "viral",
      "tiktok",
      "dessert",
      "vegan",
      "gluten-free",
      "summer"
    ]
  },
  {
    "id": "spicy-tiktok-ramen",
    "name": "Spicy TikTok Ramen",
    "description": "The viral instant-ramen glow-up: garlicky, buttery, chili-spiked broth with a jammy soft egg on top.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "ramen",
        "quantity": 2,
        "note": "instant ramen packs, save one seasoning packet"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "chili-oil",
        "quantity": 2,
        "note": "tablespoons, plus extra to finish"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1,
        "note": "teaspoon"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1,
        "note": "tablespoon, to taste",
        "optional": true
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "teaspoon",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "stalks, thinly sliced"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "teaspoon, to garnish",
        "optional": true
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "note": "teaspoon, optional for extra heat",
        "optional": true
      }
    ],
    "steps": [
      "Boil the ramen noodles in 4 cups of water for about 3 minutes until just tender, then drain, reserving roughly 1 cup of the starchy cooking water.",
      "Melt the butter in the pot over medium heat, add the minced garlic, and cook 1-2 minutes until fragrant and golden but not browned.",
      "Stir in the chili oil, soy sauce, brown sugar, sriracha, and one packet of the ramen seasoning, then pour in the reserved cooking water and simmer 1 minute to make a glossy sauce.",
      "Return the drained noodles to the pot, toss to coat in the spicy sauce, and finish with the sesame oil.",
      "Meanwhile, soft-boil the eggs by lowering them into simmering water for 7 minutes, then transfer to cold water, peel, and halve.",
      "Divide the noodles between two bowls, top each with an egg half, and shower with sliced scallions, sesame seeds, red pepper flakes, and an extra drizzle of chili oil."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a multipack of instant ramen and a jar of chili oil once - they turn into dozens of upgraded bowls for pennies each.",
      "Skip store-bought soft-boiled eggs; a 7-minute egg from a carton costs about a quarter and adds protein.",
      "Use only one seasoning packet for two packs of noodles to cut sodium and stretch the flavor further."
    ],
    "substitutions": [
      {
        "forIngredientId": "chili-oil",
        "swap": "chili-garlic-sauce or a spoon of sriracha mixed with oil",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "butter",
        "swap": "any neutral oil you already have",
        "savings": "~$0.15"
      },
      {
        "forIngredientId": "sesame-seeds",
        "swap": "a pinch of crushed peanuts or just skip it",
        "savings": "~$0.10"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 15,
      "carbs": 58,
      "fat": 21,
      "fiber": 3
    },
    "emoji": "🍜",
    "accentColor": "bg-red-100",
    "cuisine": "Asian-inspired",
    "tags": [
      "viral",
      "tiktok",
      "spicy",
      "one-pot",
      "dorm-friendly",
      "under-15-min"
    ]
  },
  {
    "id": "italian-grinder-sandwich",
    "name": "Chopped Italian Grinder Sandwich",
    "description": "The viral deli sub piled high with a tangy, crunchy chopped grinder salad that soaks into every bite.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "hoagie-rolls",
        "quantity": 2
      },
      {
        "ingredientId": "ham",
        "quantity": 0.25,
        "note": "sliced deli ham (lb)"
      },
      {
        "ingredientId": "deli-turkey",
        "quantity": 0.25,
        "note": "sliced (lb), or capicola"
      },
      {
        "ingredientId": "pepperoni",
        "quantity": 2,
        "note": "slices, stands in for Genoa salami"
      },
      {
        "ingredientId": "provolone",
        "quantity": 4,
        "note": "slices"
      },
      {
        "ingredientId": "romaine",
        "quantity": 0.3,
        "note": "cups, shredded (iceberg works too)"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.25,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "pepperoncini",
        "quantity": 0.15,
        "note": "sliced, plus a splash of brine"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3,
        "note": "tbsp"
      },
      {
        "ingredientId": "red-wine-vinegar",
        "quantity": 2,
        "note": "tbsp"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tbsp"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "tsp, dried"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "tsp"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "tsp"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "note": "tbsp grated, optional",
        "optional": true
      }
    ],
    "steps": [
      "In a large bowl, whisk the mayonnaise, red wine vinegar, olive oil, a splash of pepperoncini brine, oregano, salt, and pepper into a creamy grinder dressing.",
      "Stack the ham, turkey, and pepperoni, then roll them up and chop into ribbons. Add to the bowl along with the shredded romaine, red onion, tomato, and sliced pepperoncini.",
      "Toss everything until the salad is evenly coated and glossy; fold in the parmesan if using.",
      "Split the hoagie rolls lengthwise without cutting all the way through, and lay 2 slices of provolone inside each roll.",
      "Pile the chopped grinder salad generously into each roll, pressing it down so it holds together.",
      "Slice each sandwich in half on a diagonal and serve right away while the bread is still crisp."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "dietTags": [],
    "cheapTips": [
      "Buy deli meats from the end-cut or clearance bin and ask for a half-pound mixed; it is cheaper than pre-packaged slices.",
      "Skip the deli rolls and use a discounted French loaf or hot dog buns split open to hold the salad.",
      "A jar of pepperoncini lasts for many sandwiches and the brine doubles as free dressing acid."
    ],
    "substitutions": [
      {
        "forIngredientId": "provolone",
        "swap": "mozzarella or any white deli cheese",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "pepperoni",
        "swap": "thin-sliced deli salami or extra ham",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "hoagie-rolls",
        "swap": "split hot dog buns or a cheap baguette",
        "savings": "~$1.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 31,
      "carbs": 48,
      "fat": 34,
      "fiber": 4
    },
    "emoji": "🥪",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "viral",
      "tiktok",
      "no-cook",
      "grinder",
      "deli",
      "sandwich"
    ]
  },
  {
    "id": "honey-garlic-salmon",
    "name": "Honey Garlic Salmon",
    "description": "Pan-seared salmon bathed in a sticky honey-garlic-soy glaze that caramelizes in minutes for a restaurant dinner on a budget.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "salmon",
        "quantity": 2,
        "note": "6 oz skin-on fillets"
      },
      {
        "ingredientId": "honey",
        "quantity": 3,
        "note": "tablespoons"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "tablespoons, low-sodium if possible"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tablespoon, for searing"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice of half"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "note": "teaspoon, optional",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "sliced, to garnish",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "teaspoon, to garnish",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "teaspoon"
      }
    ],
    "steps": [
      "Pat the salmon fillets dry and season both sides with salt and pepper. In a small bowl, whisk together the honey, soy sauce, lemon juice, and red pepper flakes.",
      "Heat the olive oil in a skillet over medium-high heat. Add the salmon flesh-side down and sear undisturbed for 3-4 minutes until golden, then flip and cook another 2-3 minutes.",
      "Push the salmon to one side, lower the heat to medium, add the butter and minced garlic, and stir for 30 seconds until fragrant.",
      "Pour in the honey-soy mixture and let it bubble for 1-2 minutes, spooning the glaze over the salmon as it thickens to a sticky coat.",
      "Once the sauce is glossy and clings to the fish, remove from heat. Garnish with sliced scallion and sesame seeds and serve over rice."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy frozen salmon fillets and thaw overnight — they are often half the price of fresh and just as good for glazing.",
      "Skip pricey bottled teriyaki; a honey-soy-garlic glaze costs pennies and tastes fresher.",
      "Stretch the meal by serving over rice or with a side of frozen veggies so two fillets feed two comfortably."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "brown sugar or maple syrup",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "salmon",
        "swap": "cod or tilapia fillets",
        "savings": "~$3.00"
      },
      {
        "forIngredientId": "lemon",
        "swap": "a splash of rice vinegar",
        "savings": "~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 35,
      "carbs": 28,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🐟",
    "accentColor": "bg-amber-100",
    "cuisine": "Asian-inspired",
    "tags": [
      "viral",
      "tiktok",
      "high-protein",
      "quick",
      "date-night",
      "one-pan"
    ]
  },
  {
    "id": "whipped-cottage-cheese-toast",
    "name": "High-Protein Cottage Cheese Toast",
    "description": "Creamy whipped cottage cheese piled onto crunchy toast for a protein-packed bite you can swing savory or sweet in minutes.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "bread",
        "quantity": 2,
        "note": "thick slices, sourdough or whole-grain"
      },
      {
        "ingredientId": "cottage-cheese",
        "quantity": 1,
        "note": "1 cup, full-fat or 4% for creamiest whip"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "for drizzling"
      },
      {
        "ingredientId": "everything-bagel",
        "quantity": 1,
        "note": "everything bagel seasoning, to taste"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "for the sweet version"
      },
      {
        "ingredientId": "strawberries",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for sweet version"
      },
      {
        "ingredientId": "avocado",
        "quantity": 0.5,
        "optional": true,
        "note": "sliced, for savory version"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "optional": true,
        "note": "pinch, savory version"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "pinch, brightens either version"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 1
      }
    ],
    "steps": [
      "Toast the bread until deeply golden and crisp so it holds up under the topping.",
      "Add the cottage cheese to a blender, small food processor, or a tall cup for an immersion blender. Blend 30-60 seconds until completely smooth and whipped, like a thick ricotta. Stir in a pinch of salt.",
      "Spread the whipped cottage cheese generously over each slice of warm toast.",
      "For the savory version: drizzle with olive oil, fan over the avocado, then shower with everything bagel seasoning, cracked pepper, and a pinch of red pepper flakes.",
      "For the sweet version: drizzle with honey, top with sliced strawberries, and finish with a little lemon zest.",
      "Eat immediately while the toast is still crunchy."
    ],
    "totalTimeMinutes": 8,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "no-kitchen"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "A tub of cottage cheese costs a fraction of fancy spreads and stretches across many breakfasts.",
      "No blender? Just mash the cottage cheese hard with a fork for 30 seconds; it won't be silky but it still tastes great.",
      "Buy whatever bread is on the day-old rack and freeze it; toasting brings stale bread right back to life."
    ],
    "substitutions": [
      {
        "forIngredientId": "cottage-cheese",
        "swap": "Greek yogurt whipped the same way",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "bread",
        "swap": "a toasted English muffin or bagel half",
        "savings": "~$0.15"
      },
      {
        "forIngredientId": "everything-bagel",
        "swap": "a sprinkle of sesame seeds plus salt and garlic powder",
        "savings": "~$0.10"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 21,
      "carbs": 28,
      "fat": 11,
      "fiber": 3
    },
    "emoji": "🧀",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "viral",
      "tiktok",
      "high-protein",
      "5-minute",
      "dorm-friendly",
      "no-cook"
    ]
  },
  {
    "id": "elote-pasta-salad",
    "name": "Street Corn (Elote) Pasta Salad",
    "description": "All the creamy, charred, tangy magic of Mexican street corn tossed with pasta into one crowd-pleasing salad.",
    "mealType": "lunch",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pasta",
        "quantity": 4,
        "note": "elbow macaroni or rotini, oz dry"
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 4,
        "note": "corn kernels, charred (or fresh off 4 ears)"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 0.5,
        "note": "cup"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 0.5,
        "note": "cup, stands in for Mexican crema"
      },
      {
        "ingredientId": "cotija",
        "quantity": 1,
        "note": "cup crumbled, plus more to top"
      },
      {
        "ingredientId": "lime",
        "quantity": 2,
        "note": "juiced"
      },
      {
        "ingredientId": "tajin",
        "quantity": 2,
        "note": "tsp chili-lime seasoning"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "cup chopped"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "finely diced",
        "optional": true
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, grated"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "tsp, to taste"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "tbsp, for charring corn"
      }
    ],
    "steps": [
      "Boil the pasta in well-salted water until just past al dente, then drain and rinse under cold water to stop the cooking and cool it down.",
      "Melt the butter in a large skillet over high heat and add the corn in a single layer. Let it sit undisturbed for a few minutes so it chars, stirring occasionally, until blackened in spots. Set aside to cool slightly.",
      "In a big bowl, whisk together the mayonnaise, sour cream, lime juice, grated garlic, chili powder, 1 tsp of the Tajin, and the salt until smooth.",
      "Add the cooled pasta, charred corn, crumbled cotija, diced jalapeno, and most of the cilantro to the bowl. Fold everything together until well coated.",
      "Taste and adjust with more lime juice or salt. Chill for at least 30 minutes so the flavors meld.",
      "Just before serving, top with the remaining cotija, cilantro, and a dusting of the last teaspoon of Tajin."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 13,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Frozen corn is far cheaper than fresh ears and chars just as well straight from the bag — no need to thaw.",
      "Skip pricey cotija and crumble in feta instead; it brings the same salty tang for less.",
      "Make it a day ahead — it tastes even better chilled and stretches across lunches all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "cotija",
        "swap": "crumbled feta",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "sour-cream",
        "swap": "plain Greek yogurt",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "tajin",
        "swap": "chili powder + a pinch of salt and lime zest",
        "savings": "~$0.60"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 12,
      "carbs": 48,
      "fat": 19,
      "fiber": 4
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mexican",
    "tags": [
      "viral",
      "tiktok",
      "potluck",
      "summer",
      "vegetarian",
      "crowd-pleaser"
    ]
  },
  {
    "id": "crispy-rice-salmon-bowl",
    "name": "Crispy Rice Salmon Bowl",
    "description": "Spicy mayo salmon piled over golden pan-crisped sushi rice for that viral crunch-meets-creamy bite at home.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 1,
        "note": "dry, cooked then cooled"
      },
      {
        "ingredientId": "salmon",
        "quantity": 0.5,
        "note": "skinless fillet, ~8 oz"
      },
      {
        "ingredientId": "kewpie-mayo",
        "quantity": 3,
        "note": "tablespoons"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1.5,
        "note": "tablespoons, to taste"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "tablespoon, low-sodium ok"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1.5,
        "note": "tablespoons, for seasoning rice"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "teaspoon, for rice seasoning"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "teaspoon"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "tablespoons, for frying rice"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "sliced"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced"
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "note": "tablespoon, for garnish",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "teaspoon, toasted",
        "optional": true
      },
      {
        "ingredientId": "nori-sheets",
        "quantity": 1,
        "note": "cut into strips",
        "optional": true
      }
    ],
    "steps": [
      "Cook the sushi rice and stir in the rice vinegar, sugar, and salt while warm. Press it firmly into a parchment-lined dish about 3/4-inch thick, then chill 20-30 minutes until firm (cold rice crisps best).",
      "Cut the firmed rice into squares or rectangles. Heat the vegetable oil in a nonstick or cast-iron pan over medium-high until shimmering.",
      "Fry the rice cakes 3-4 minutes per side without moving them, until deeply golden and crispy. Drain on paper towels.",
      "Finely dice the salmon and toss with the kewpie mayo, sriracha, soy sauce, and sesame oil until evenly coated and creamy.",
      "For a torched style, briefly broil or sear the spicy salmon 1-2 minutes; for tartare style, leave it raw using sushi-grade fish.",
      "Top each crispy rice cake with avocado and cucumber, then spoon over the spicy salmon.",
      "Garnish with scallions, furikake, sesame seeds, and nori strips, and serve immediately while the rice is hot and crunchy."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a frozen salmon fillet and thaw it overnight — it costs far less than fresh and works perfectly diced.",
      "Skip sushi-grade and lightly sear the spicy salmon instead; you get the viral look for half the price.",
      "Cook the rice a day ahead — leftover fridge-cold rice crisps better and means zero waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "sushi-rice",
        "swap": "regular short-grain or even day-old jasmine rice pressed firm",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "kewpie-mayo",
        "swap": "regular mayo with a pinch of sugar and a splash of rice vinegar",
        "savings": "~$0.80"
      },
      {
        "forIngredientId": "salmon",
        "swap": "a drained can of salmon or imitation crab, mixed with the spicy mayo",
        "savings": "~$4.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 26,
      "carbs": 52,
      "fat": 26,
      "fiber": 5
    },
    "emoji": "🍣",
    "accentColor": "bg-rose-100",
    "cuisine": "Japanese-Fusion",
    "tags": [
      "viral",
      "tiktok",
      "spicy-salmon",
      "crispy-rice",
      "high-protein",
      "sushi-bowl"
    ]
  },
  {
    "id": "viral-baked-oats",
    "name": "Viral Baked Oats",
    "description": "Blended oats that bake up like a warm single-serve breakfast cake, with a molten chocolate chip middle.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "oats",
        "quantity": 0.5,
        "note": "rolled oats, blended into flour"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "very ripe, for natural sweetness"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "oat-milk",
        "quantity": 0.25,
        "note": "or any milk"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 1,
        "note": "tablespoon, adjust to taste"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "note": "teaspoon",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "pinch"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 1,
        "note": "tablespoon, pushed into the middle"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (180C) and lightly grease a small oven-safe ramekin or mug.",
      "Add the oats, ripe banana, egg, oat milk, maple syrup, baking powder, vanilla, cinnamon, and a pinch of salt to a blender.",
      "Blend for 30-60 seconds until completely smooth and pourable, scraping down the sides if needed.",
      "Pour the batter into the greased ramekin, then sprinkle most of the chocolate chips on top and gently push a few into the center.",
      "Bake for 20-25 minutes, until the top is set, springy, and a toothpick comes out mostly clean.",
      "Let it cool for 2-3 minutes so the middle stays molten, then eat straight from the ramekin."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Use a spotty, over-ripe banana you'd otherwise toss - it's sweeter and means less maple syrup.",
      "Blend your own oats into flour instead of buying oat flour; rolled oats are far cheaper per serving.",
      "No blender? Mash the banana well and whisk in quick oats for a rustic but still delicious version."
    ],
    "substitutions": [
      {
        "forIngredientId": "maple-syrup",
        "swap": "honey or an extra mashed banana",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "chocolate-chips",
        "swap": "a spoonful of peanut butter swirled in",
        "savings": "~$0.25"
      },
      {
        "forIngredientId": "oat-milk",
        "swap": "regular milk or water",
        "savings": "~$0.15"
      }
    ],
    "estimatedNutrition": {
      "calories": 390,
      "protein": 13,
      "carbs": 62,
      "fat": 11,
      "fiber": 7
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "viral",
      "tiktok",
      "single-serve",
      "breakfast",
      "high-protein",
      "meal-prep-friendly"
    ]
  }
];
