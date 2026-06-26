import type { Recipe } from "@/lib/types";

export const TASTE_OF_HOME_RECIPES: Recipe[] = [
  {
    "id": "toh-applesauce-glazed-pork-chops",
    "name": "Applesauce-Glazed Pork Chops",
    "description": "Tender bone-in pork chops baked under a sweet-and-savory applesauce glaze laced with brown sugar, barbecue, Worcestershire, and garlic. It is a cozy, hands-off dinner that turns pantry staples into a comforting weeknight plate. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/applesauce-glazed-pork-chops/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pork-chop",
        "quantity": 4,
        "note": "bone-in, about 1/2 inch thick"
      },
      {
        "ingredientId": "applesauce",
        "quantity": 2,
        "note": "unsweetened (1 cup)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "note": "packed (1/4 cup)"
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 3,
        "note": "1 tablespoon"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      }
    ],
    "steps": [
      "Heat the oven to 350F and let the chops rest at room temperature for 10 to 15 minutes so they relax and soak up more glaze.",
      "In a bowl, stir together the applesauce, brown sugar, barbecue sauce, Worcestershire, minced garlic, salt, and pepper until smooth.",
      "Arrange the pork chops in a single layer in a cast-iron or other ovenproof skillet.",
      "Spoon the glaze generously over the chops, coating them well.",
      "Bake uncovered for 20 to 25 minutes, until a thermometer in the thickest part reads 145F.",
      "Let the chops rest for 5 minutes before serving, then spoon any pan glaze over the top."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a family pack of bone-in pork chops and freeze extras; they are far cheaper per pound than single-packaged cuts.",
      "Make your own applesauce from sale-bin apples to cut cost and control sweetness.",
      "Skip the barbecue sauce and add an extra pinch of brown sugar plus a dash of vinegar if you are out."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-chop",
        "swap": "boneless pork loin chops or pork cutlets",
        "savings": "Boneless cuts cook a few minutes faster"
      },
      {
        "forIngredientId": "bbq-sauce",
        "swap": "ketchup with a splash of smoked paprika",
        "savings": "Uses a pantry staple instead of buying a bottle"
      },
      {
        "forIngredientId": "applesauce",
        "swap": "apple butter or pureed canned pears",
        "savings": "Repurposes leftovers you may already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 34,
      "carbs": 22,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍖",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "comfort-food",
      "weeknight",
      "oven-baked",
      "sweet-and-savory",
      "30-minute"
    ]
  },
  {
    "id": "toh-asian-lettuce-wraps",
    "name": "Asian Lettuce Wraps",
    "description": "Savory chili-garlic ground turkey spooned into crisp lettuce cups and piled high with cool cucumber, carrot, and crunchy bean sprouts for a fast, fresh, hands-on dinner. Bright lime and basil keep every bite light. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/asian-lettuce-wraps/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "canola-oil",
        "quantity": 1
      },
      {
        "ingredientId": "ground-turkey",
        "quantity": 4,
        "note": "lean, 1 lb total"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and minced"
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
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "lime-juice-bottled",
        "quantity": 2
      },
      {
        "ingredientId": "light-soy-sauce",
        "quantity": 2,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "chili-garlic-sauce",
        "quantity": 4.5,
        "note": "1 to 2 tbsp to taste"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "lettuce",
        "quantity": 1,
        "note": "12 Bibb or Boston leaves"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 1,
        "note": "julienned"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "julienned"
      },
      {
        "ingredientId": "bean-sprouts",
        "quantity": 2
      }
    ],
    "steps": [
      "Warm the canola oil in a large skillet over medium heat.",
      "Add the ground turkey and cook for 6 to 8 minutes, breaking it into crumbles, until no longer pink.",
      "Stir in the jalapeno, green onions, and garlic and cook about 2 more minutes until fragrant.",
      "Add the basil, lime juice, soy sauce, chili garlic sauce, and sugar, then stir until everything is heated through.",
      "Spoon the warm turkey filling into each lettuce leaf.",
      "Top with julienned cucumber, carrot, and bean sprouts, then fold the lettuce around the filling and serve."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Swap ground turkey for ground chicken or plant-based crumbles when they're cheaper that week.",
      "Buy a whole head of lettuce instead of pre-cut wraps and peel the leaves yourself.",
      "Skip bottled lime juice and squeeze a couple of fresh limes if you already have them on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-turkey",
        "swap": "ground chicken or plant-based ground",
        "savings": "Plant-based or chicken can run cheaper per serving and keeps it lean"
      },
      {
        "forIngredientId": "light-soy-sauce",
        "swap": "regular or sweet soy sauce",
        "savings": "Use whatever soy sauce is already in your pantry"
      },
      {
        "forIngredientId": "lime-juice-bottled",
        "swap": "fresh lime",
        "savings": "One fresh lime replaces the bottled juice"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 28,
      "carbs": 14,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🥬",
    "accentColor": "bg-green-100",
    "cuisine": "Asian",
    "tags": [
      "lettuce wraps",
      "ground turkey",
      "low-carb",
      "quick",
      "weeknight",
      "high-protein",
      "gluten-free-option"
    ]
  },
  {
    "id": "toh-bacon-cheeseburger-tater-tot-bake",
    "name": "Bacon Cheeseburger Tater Tot Bake",
    "description": "All your favorite bacon cheeseburger flavors baked into one bubbling, crispy-topped casserole: saucy seasoned beef and gooey melted cheese crowned with golden tater tots, then finished with fresh tomatoes and tangy pickles. A crowd-pleasing comfort dish that feeds a hungry table. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/bacon-cheeseburger-tater-tot-bake/",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 8
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped and divided"
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "mustard-powder",
        "quantity": 3
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 3
      },
      {
        "ingredientId": "processed-cheese-loaf",
        "quantity": 8,
        "note": "Velveeta, cubed"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 8
      },
      {
        "ingredientId": "bacon",
        "quantity": 12,
        "note": "cooked and crumbled"
      },
      {
        "ingredientId": "frozen-tater-tots",
        "quantity": 10
      },
      {
        "ingredientId": "grape-tomatoes",
        "quantity": 1,
        "note": "chopped",
        "optional": true
      },
      {
        "ingredientId": "dill-pickles",
        "quantity": 0.2,
        "note": "sliced, for topping",
        "optional": true
      }
    ],
    "steps": [
      "Heat the oven to 400F. In a large skillet over medium, brown the ground beef with one cup of the chopped onion, breaking the meat apart as it cooks, until no pink remains and the onion softens, about 6 to 8 minutes.",
      "Drain off the fat, then stir in the tomato sauce, cubed Velveeta, mustard powder, and Worcestershire sauce. Keep stirring until the cheese melts smoothly, roughly 4 to 6 minutes.",
      "Spread the cheesy beef mixture into a greased 13x9-inch baking dish.",
      "Scatter the shredded cheddar and crumbled bacon evenly over the top, then cover the surface with a single layer of tater tots.",
      "Bake uncovered for 35 to 40 minutes, until hot and bubbling and the tots are golden.",
      "Finish with the chopped grape tomatoes, sliced dill pickles, and the reserved raw onion. Serve warm."
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 35,
    "totalTimeMinutes": 60,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy ground beef in bulk family packs and freeze portions to drop the per-serving cost.",
      "Swap name-brand Velveeta for store-brand processed cheese loaf and skip the pre-shredded cheddar by shredding a block yourself.",
      "Use turkey bacon or bacon ends instead of full strips to trim cost without losing the smoky flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey for a leaner, cheaper option",
        "savings": "~$0.40/serving"
      },
      {
        "forIngredientId": "processed-cheese-loaf",
        "swap": "Make a quick cheese sauce from shredded cheddar plus a splash of milk",
        "savings": "~$0.10/serving"
      },
      {
        "forIngredientId": "bacon",
        "swap": "Turkey bacon",
        "savings": "~$0.13/slice"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 30,
      "carbs": 30,
      "fat": 33,
      "fiber": 3
    },
    "emoji": "🍔",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "casserole",
      "comfort-food",
      "bacon",
      "cheeseburger",
      "tater-tots",
      "family-dinner",
      "potluck",
      "ground-beef"
    ]
  },
  {
    "id": "toh-bacon-swiss-chicken-sandwiches",
    "name": "Chicken Bacon Swiss Sandwich",
    "description": "Juicy grilled chicken breasts get crowned with melty Swiss and crispy bacon, then piled onto toasted whole wheat buns with a sweet-tangy honey Dijon mayo. It is a hearty, deli-style sandwich that comes together in under half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/bacon-swiss-chicken-sandwiches/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "mayonnaise",
        "quantity": 4,
        "note": "reduced-fat"
      },
      {
        "ingredientId": "dijon",
        "quantity": 3
      },
      {
        "ingredientId": "honey",
        "quantity": 1
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 4,
        "note": "boneless skinless, 4 oz each"
      },
      {
        "ingredientId": "montreal-steak-seasoning",
        "quantity": 0.5
      },
      {
        "ingredientId": "swiss-cheese",
        "quantity": 4
      },
      {
        "ingredientId": "whole-wheat-buns",
        "quantity": 4,
        "note": "split"
      },
      {
        "ingredientId": "bacon",
        "quantity": 2,
        "note": "cooked and crumbled"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "optional": true,
        "note": "leaves, for serving"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for serving"
      }
    ],
    "steps": [
      "Stir the mayonnaise, Dijon, and honey together in a small bowl to make the spread; set aside.",
      "Pound each chicken breast to an even 1/2-inch thickness and season both sides with the Montreal steak seasoning.",
      "Grill the chicken covered over medium heat (or broil 4 inches from the heat) about 4 to 6 minutes per side, until the internal temperature hits 165 degrees F.",
      "Lay a slice of Swiss on each breast during the final minute so it melts.",
      "Toast the split buns cut side down over medium heat for 30 to 60 seconds until golden.",
      "Spread the honey-Dijon mayo on the buns, add a chicken breast, top with crumbled bacon, and finish with lettuce and tomato if using."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a larger pack of chicken breasts and freeze what you don't use; per-pound cost drops sharply versus buying four small portions.",
      "Cook a full pack of bacon at once and freeze the extra crumbles so you're not opening a new pack for just two strips.",
      "Make your own honey-Dijon spread instead of buying bottled honey mustard; you likely already have the three pantry items."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey-bacon",
        "savings": "About $0.13 per slice cheaper and lower in fat."
      },
      {
        "forIngredientId": "whole-wheat-buns",
        "swap": "hamburger-buns",
        "savings": "Saves about $0.20 per bun."
      },
      {
        "forIngredientId": "dijon",
        "swap": "honey-mustard combines the mustard and honey in one squeeze",
        "savings": "Replaces two ingredients with one bottle."
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 38,
      "carbs": 30,
      "fat": 16,
      "fiber": 4
    },
    "emoji": "🥪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "sandwich",
      "chicken",
      "bacon",
      "high-protein",
      "grilled",
      "lunch",
      "quick",
      "weeknight"
    ]
  },
  {
    "id": "toh-baked-tilapia",
    "name": "Baked Tilapia",
    "description": "Flaky tilapia fillets bathed in a bright lemon-garlic butter and finished with briny capers, oregano, and a dusting of paprika — a weeknight dinner that's on the table in 20 minutes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/baked-tilapia/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "tilapia",
        "quantity": 24,
        "note": "4 fillets, about 6 oz each"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "melted"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 3
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 1.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125
      },
      {
        "ingredientId": "capers",
        "quantity": 0.28,
        "note": "drained, about 2 tbsp",
        "optional": true
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 0.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.125
      }
    ],
    "steps": [
      "Heat the oven to 425F and lay the tilapia fillets flat in a single layer in an ungreased 13x9-inch baking dish.",
      "Whisk the melted butter, lemon juice, garlic powder, and salt together in a small bowl.",
      "Spoon the lemon-butter sauce evenly over the fillets so they're well coated.",
      "Scatter the drained capers, dried oregano, and paprika across the top.",
      "Bake uncovered for 10 to 15 minutes, until the fish flakes easily with a fork.",
      "Lift the fillets out with a slotted spatula, spoon over any pan sauce, and serve with lemon wedges if you like."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy frozen tilapia fillets in a bulk bag — they're far cheaper than fresh and thaw quickly under cold water.",
      "Bottled lemon juice and garlic powder cost a fraction of fresh and keep for months in the pantry.",
      "Capers are optional — a splash of pickle brine or chopped olives adds the same briny punch for less."
    ],
    "substitutions": [
      {
        "forIngredientId": "tilapia",
        "swap": "Any mild white fish like cod, basa, or catfish works the same way.",
        "savings": "Basa is often cheaper than tilapia"
      },
      {
        "forIngredientId": "butter",
        "swap": "Olive oil or plant butter for a dairy-free version.",
        "savings": "About the same cost"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "Fresh lemon juice from one lemon."
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 34,
      "carbs": 1,
      "fat": 10,
      "fiber": 0
    },
    "emoji": "🐟",
    "accentColor": "bg-sky-100",
    "cuisine": "American",
    "tags": [
      "fish",
      "baked",
      "quick",
      "weeknight",
      "low-carb",
      "high-protein",
      "lemon",
      "seafood"
    ]
  },
  {
    "id": "toh-barbecue-chicken-quesadillas",
    "name": "Barbecue Chicken Quesadilla",
    "description": "Tender shredded chicken gets tossed with smoky barbecue sauce, salsa, and green chiles, then tucked between flour tortillas with sharp cheddar and baked until golden and melty. A fast, crowd-pleasing handheld dinner with just the right amount of tangy heat. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/barbecue-chicken-quesadillas/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 4,
        "note": "shredded cooked chicken, about 3 cups"
      },
      {
        "ingredientId": "green-chiles",
        "quantity": 1,
        "note": "chopped, drained"
      },
      {
        "ingredientId": "salsa",
        "quantity": 2,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 5,
        "note": "about 1/3 cup"
      },
      {
        "ingredientId": "salsa",
        "quantity": 1,
        "note": "stands in for 1/4 cup taco sauce"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 8,
        "note": "8-inch flour tortillas"
      },
      {
        "ingredientId": "sharp-cheddar",
        "quantity": 3,
        "note": "shredded, about 3/4 cup"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 6,
        "optional": true,
        "note": "for serving"
      },
      {
        "ingredientId": "salsa",
        "quantity": 2,
        "optional": true,
        "note": "additional, for serving"
      }
    ],
    "steps": [
      "Heat the oven to 450 F. In a big bowl, stir the shredded chicken together with the green chiles, salsa, barbecue sauce, and taco sauce until everything is coated.",
      "Lay four tortillas out across two baking sheets. Spoon the chicken mixture evenly onto each one and spread it to the edges.",
      "Scatter the shredded cheddar over the filling, then cap each one with a second tortilla and press down lightly.",
      "Bake 6 to 8 minutes, until the tops turn golden and the cheese has melted through.",
      "Slice each quesadilla into six wedges and serve hot, with sour cream and extra salsa alongside if you like."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use a store rotisserie chicken or pre-cooked frozen chicken to skip cooking and slash prep time and cost.",
      "Buy a block of cheddar and shred it yourself it's cheaper per ounce than pre-shredded and melts better.",
      "Stretch the filling with a can of drained black beans or corn to feed more people for just pennies more."
    ],
    "substitutions": [
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "shredded canned chicken or leftover cooked turkey",
        "savings": "Canned chicken keeps in the pantry and costs less per serving"
      },
      {
        "forIngredientId": "sharp-cheddar",
        "swap": "any shredded cheddar or a pizza cheese blend",
        "savings": "Pre-shredded value packs run cheaper per ounce"
      },
      {
        "forIngredientId": "bbq-sauce",
        "swap": "ketchup mixed with a little brown sugar and smoked paprika",
        "savings": "Uses pantry staples instead of a dedicated bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 32,
      "carbs": 38,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🫓",
    "accentColor": "bg-orange-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "quesadilla",
      "chicken",
      "barbecue",
      "tex-mex",
      "weeknight",
      "baked",
      "handheld",
      "kid-friendly"
    ]
  },
  {
    "id": "toh-barbecue-pork-and-penne-skillet",
    "name": "Pulled Pork Pasta",
    "description": "Tender penne tossed with smoky barbecued pulled pork, sweet sauteed peppers, zesty chile-spiked tomatoes, and melty cheddar for a hearty one-skillet dinner that comes together in under 30 minutes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/barbecue-pork-and-penne-skillet/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "penne",
        "quantity": 8
      },
      {
        "ingredientId": "red-bell-pepper",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.75,
        "note": "chopped, about 3/4 cup"
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "pork-shoulder",
        "quantity": 16,
        "note": "fully cooked barbecued shredded pork"
      },
      {
        "ingredientId": "fire-roasted-tomatoes",
        "quantity": 1,
        "note": "diced tomatoes with mild green chiles, undrained"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 0.5
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "ground"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 5,
        "note": "about 1-1/4 cups"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "chopped, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Boil the penne in salted water until al dente, following the package timing, then drain and set aside.",
      "While the pasta cooks, warm the butter and olive oil in a large skillet over medium heat and saute the chopped red pepper and onion until softened.",
      "Add the minced garlic and cook about a minute more, until fragrant.",
      "Stir in the shredded barbecued pork, undrained diced tomatoes with green chiles, beef broth, cumin, pepper, and salt; heat everything through.",
      "Fold the drained pasta and shredded cheddar into the pork mixture and stir until the cheese melts and coats everything evenly.",
      "Scatter chopped green onions over the top and serve hot."
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
      "Buy a plain pork shoulder and slow-cook it with your own BBQ sauce instead of pricier pre-made shredded pork.",
      "Shred a block of cheddar yourself rather than buying pre-shredded bags to cut cost.",
      "Swap the beef broth for water plus a bouillon cube if you don't want to open a whole carton."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-shoulder",
        "swap": "Use leftover rotisserie chicken or canned chicken tossed with BBQ sauce",
        "savings": "About $1-2 per batch"
      },
      {
        "forIngredientId": "fire-roasted-tomatoes",
        "swap": "Plain crushed tomatoes plus a can of green chiles",
        "savings": "A few cents"
      },
      {
        "forIngredientId": "penne",
        "swap": "Any short pasta like macaroni or elbows",
        "savings": "Up to $0.10 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 27,
      "carbs": 48,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "pulled-pork",
      "bbq",
      "pasta",
      "skillet",
      "one-pan",
      "weeknight",
      "comfort-food",
      "high-protein"
    ]
  },
  {
    "id": "toh-bbq-meat-loaf-minis",
    "name": "Mini Barbecue Meat Loaves",
    "description": "Smoky, cheesy individual meatloaves baked right in a muffin tin, where stuffing mix does double duty as both binder and built-in seasoning for tender, BBQ-kissed bites topped with melty cheddar. A weeknight winner that's done in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/bbq-meat-loaf-minis/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "breadcrumbs",
        "quantity": 3,
        "note": "stand-in for a 6 oz package of stuffing mix"
      },
      {
        "ingredientId": "water",
        "quantity": 1
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 2,
        "note": "hickory smoke-flavored, mixed into the meat"
      },
      {
        "ingredientId": "ground-beef-80-20",
        "quantity": 16
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 4,
        "note": "about 1 cup shredded"
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 2,
        "optional": true,
        "note": "extra for serving"
      }
    ],
    "steps": [
      "Heat the oven to 375 F. In a large bowl, stir together the stuffing mix (or seasoned breadcrumbs), water and barbecue sauce until the crumbs absorb the liquid.",
      "Add the ground beef and fold it in with a light hand just until everything is combined. Stop as soon as it comes together, since overworking the meat makes the loaves tough.",
      "Scoop about 1/3 cup of the mixture into each of 12 ungreased muffin cups, pressing it gently to fill each one.",
      "Bake uncovered for 18 to 22 minutes, until a thermometer in the center of a loaf reads 160 F.",
      "Scatter the cheddar over the tops and return to the oven for 2 to 4 minutes, just until the cheese melts.",
      "Serve warm with extra barbecue sauce on the side if you like."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a block of cheddar and shred it yourself; it's cheaper per ounce than pre-shredded and melts better.",
      "Plain seasoned breadcrumbs are a budget swap for boxed stuffing mix; add a pinch of dried herbs to mimic the flavor.",
      "These freeze well, so make a double batch and stash extras for grab-and-go lunches."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef-80-20",
        "swap": "ground turkey or chicken for a leaner, often cheaper loaf",
        "savings": "~$0.10/oz"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "crushed crackers or torn day-old bread you already have",
        "savings": "use up pantry staples"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "any melting cheese on hand, like Monterey Jack or a cheddar blend"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 24,
      "carbs": 18,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🍖",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "bbq",
      "meatloaf",
      "muffin-tin",
      "weeknight",
      "kid-friendly",
      "high-protein",
      "comfort-food"
    ]
  },
  {
    "id": "toh-bean-bacon-griddle-burritos",
    "name": "Bean & Bacon Griddle Burritos",
    "description": "Warm flour tortillas crisped on a griddle and loaded with creamy salsa-spiked refried beans, salty cotija, and crunchy bacon, then finished with cool shredded lettuce and a spoonful of salsa. A fast, budget-friendly handheld dinner that comes together in 20 minutes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/bean-bacon-griddle-burritos/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "refried-beans",
        "quantity": 1
      },
      {
        "ingredientId": "salsa",
        "quantity": 2,
        "note": "divided - half mixed into beans, half on top"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 4,
        "note": "8-inch flour tortillas"
      },
      {
        "ingredientId": "cotija",
        "quantity": 2,
        "note": "crumbled; or shredded Monterey Jack"
      },
      {
        "ingredientId": "bacon",
        "quantity": 3,
        "note": "cooked and coarsely chopped"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "note": "shredded, about 2 cups"
      }
    ],
    "steps": [
      "Stir the refried beans together with half of the salsa until smooth and evenly combined.",
      "Lay the tortillas on a griddle or large skillet over medium heat and warm for about 1 minute, then flip them over.",
      "Spoon the bean mixture into the center of each tortilla and top with crumbled cotija and chopped bacon.",
      "Continue cooking 1 to 2 minutes, until the tortillas start to turn golden and crisp and the filling is warmed through.",
      "Pull the burritos off the heat and immediately scatter shredded lettuce and the remaining salsa over the filling.",
      "Fold up the bottom and both sides of each tortilla over the filling and serve right away."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [],
    "cheapTips": [
      "Buy a can of plain refried beans and stretch them with extra salsa to cut cost per burrito.",
      "Cook a few extra bacon strips at once and freeze them so future batches come together even faster.",
      "Swap cotija for whatever shredded cheese is cheapest on sale - Monterey Jack or a Mexican blend both work."
    ],
    "substitutions": [
      {
        "forIngredientId": "cotija",
        "swap": "Shredded Monterey Jack or a Mexican cheese blend",
        "savings": "Often cheaper per ounce than cotija"
      },
      {
        "forIngredientId": "bacon",
        "swap": "Turkey bacon or crumbled cooked sausage",
        "savings": "Turkey bacon runs a bit cheaper and lighter"
      },
      {
        "forIngredientId": "refried-beans",
        "swap": "Mashed canned pinto or black beans seasoned with cumin",
        "savings": "Whole canned beans are cheaper than refried"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 14,
      "carbs": 38,
      "fat": 15,
      "fiber": 6
    },
    "emoji": "🌯",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican-American",
    "tags": [
      "burrito",
      "beans",
      "bacon",
      "quick",
      "weeknight",
      "handheld",
      "budget",
      "griddle",
      "tex-mex"
    ]
  },
  {
    "id": "toh-best-salisbury-steak",
    "name": "Best Salisbury Steak",
    "description": "Tender beef patties seasoned with sage and onion, seared until browned and simmered low in a silky mushroom gravy, then spooned over hot mashed potatoes for the ultimate cozy weeknight comfort plate. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/best-salisbury-steak/",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "crackers",
        "quantity": 0.4,
        "note": "butter-flavored, crushed to crumbs"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.1,
        "note": "finely chopped"
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
        "ingredientId": "sage-dried",
        "quantity": 0.25,
        "note": "rubbed sage"
      },
      {
        "ingredientId": "ground-beef-80-20",
        "quantity": 12
      },
      {
        "ingredientId": "canned-mushrooms",
        "quantity": 1,
        "note": "stems and pieces, drained"
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "flour",
        "quantity": 0.19,
        "note": "about 3 tablespoons"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75
      },
      {
        "ingredientId": "beef-bouillon",
        "quantity": 2
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.25,
        "optional": true,
        "note": "stands in for browning sauce; for color"
      },
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "cooked and mashed for serving"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "minced, for garnish"
      }
    ],
    "steps": [
      "In a bowl, stir together the egg, cracker crumbs, chopped onion, salt, pepper and sage until evenly combined.",
      "Work in the ground beef just until mixed, then divide and shape into two oval patties.",
      "Heat a skillet over medium and sear the patties about 4 to 5 minutes per side until well browned, then pour off the rendered fat and move them to a plate to keep warm.",
      "In the same pan, melt the butter and saute the drained mushrooms for a couple of minutes, then sprinkle in the flour and stir to coat.",
      "Pour in the water and crumble in the bouillon cubes, whisking constantly until the gravy turns smooth and thickens; stir in the browning sauce if using for a richer color.",
      "Nestle the patties back into the gravy and simmer uncovered over low heat about 10 minutes, turning now and then, until heated through.",
      "Plate the steaks over hot mashed potatoes, blanket with the mushroom gravy, and scatter with parsley if desired."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Standard 80/20 ground beef is the budget pick here and its extra fat actually makes juicier patties.",
      "Beef bouillon cubes deliver deep gravy flavor for pennies versus buying boxed broth.",
      "Stretch crushed saltines or any plain crackers you already have instead of buying a special butter-flavored box."
    ],
    "substitutions": [
      {
        "forIngredientId": "crackers",
        "swap": "panko or plain breadcrumbs",
        "savings": "Often cheaper per serving and likely already in the pantry"
      },
      {
        "forIngredientId": "canned-mushrooms",
        "swap": "1 cup fresh sliced button mushrooms",
        "savings": "Better texture; similar cost when fresh are on sale"
      },
      {
        "forIngredientId": "worcestershire",
        "swap": "a splash of soy sauce",
        "savings": "Adds the same dark color and savory depth for less"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 42,
      "carbs": 38,
      "fat": 33,
      "fiber": 4
    },
    "emoji": "🍴",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "beef",
      "gravy",
      "weeknight",
      "mushroom",
      "classic",
      "skillet"
    ]
  },
  {
    "id": "toh-blackened-catfish-with-mango-avocado-salsa",
    "name": "Blackened Catfish with Mango Avocado Salsa",
    "description": "Catfish fillets get a bold Cajun-style spice crust seared in a hot skillet, then crowned with a bright, cooling salsa of ripe mango, creamy avocado, red onion and lime. It's a fast, fresh dinner with serious flavor contrast. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/blackened-catfish-with-mango-avocado-salsa/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "dried-oregano",
        "quantity": 2
      },
      {
        "ingredientId": "cumin",
        "quantity": 2
      },
      {
        "ingredientId": "paprika",
        "quantity": 2
      },
      {
        "ingredientId": "pepper",
        "quantity": 2.25,
        "note": "divided between rub and salsa"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "divided between rub and salsa"
      },
      {
        "ingredientId": "catfish-fillet",
        "quantity": 4,
        "note": "about 6 oz each"
      },
      {
        "ingredientId": "mango",
        "quantity": 1,
        "note": "peeled and cubed"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "ripe, peeled and cubed"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.5,
        "note": "finely chopped, about 1/3 cup"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 2,
        "note": "fresh, minced"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "juiced, about 2 tbsp"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.67,
        "note": "for searing"
      }
    ],
    "steps": [
      "Mix the oregano, cumin, paprika, 2 teaspoons of the pepper, and 1/2 teaspoon of the salt into a spice blend.",
      "Coat the catfish fillets all over with the spice mixture, then refrigerate for at least 30 minutes to let the seasoning set.",
      "While the fish chills, toss the cubed mango and avocado with the red onion, cilantro, lime juice, and the remaining salt and pepper.",
      "Cover the salsa and keep it cold until you're ready to plate.",
      "Heat the oil in a large cast-iron skillet over medium heat.",
      "Sear the fillets for 5 to 7 minutes per side, until the fish is opaque and flakes easily with a fork.",
      "Plate the blackened catfish and spoon the mango-avocado salsa over the top."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen mango works great in the salsa and costs less than fresh year-round, just thaw and drain.",
      "Bottled lime juice can stand in for the fresh lime to trim the cost without losing the bright acidity.",
      "Buy catfish fillets frozen in a family pack and thaw only what you need to lower the per-serving price."
    ],
    "substitutions": [
      {
        "forIngredientId": "catfish-fillet",
        "swap": "Tilapia or another firm white fish fillet",
        "savings": "Often cheaper and easier to find"
      },
      {
        "forIngredientId": "mango",
        "swap": "Frozen mango, thawed",
        "savings": "About $0.65 cheaper and available all year"
      },
      {
        "forIngredientId": "lime",
        "swap": "Bottled lime juice",
        "savings": "Around $0.30 cheaper per recipe"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 28,
      "carbs": 14,
      "fat": 20,
      "fiber": 4
    },
    "emoji": "🐟",
    "accentColor": "bg-orange-100",
    "cuisine": "Cajun",
    "tags": [
      "fish",
      "catfish",
      "blackened",
      "salsa",
      "mango",
      "avocado",
      "quick",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "cast-iron",
      "spicy"
    ]
  },
  {
    "id": "toh-blt-pizza",
    "name": "BLT Pizza",
    "description": "All the savory, tangy comfort of a classic BLT sandwich reimagined on a crisp pizza crust, with a creamy herbed sauce, melty cheese, crispy bacon, and a fresh pile of lettuce and tomato on top. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/blt-pizza/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "prebaked 12-inch crust"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 8,
        "note": "stand-in for Miracle Whip; 1/2 cup"
      },
      {
        "ingredientId": "dried-basil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 0.125
      },
      {
        "ingredientId": "bacon",
        "quantity": 12,
        "note": "cooked and crumbled"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 3,
        "note": "3/4 cup shredded"
      },
      {
        "ingredientId": "low-moisture-mozzarella",
        "quantity": 3,
        "note": "part-skim, 3/4 cup shredded"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "note": "shredded, about 1-1/2 cups",
        "optional": true
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "thinly sliced"
      }
    ],
    "steps": [
      "Heat the oven to 425°F and set a prebaked 12-inch crust in an ungreased pizza pan.",
      "Whisk the mayonnaise with the dried basil, garlic powder, and onion powder, then spread this herbed sauce evenly over the crust.",
      "Reserve about 1/4 cup of the crumbled bacon for finishing.",
      "Scatter the cheddar, mozzarella, and remaining bacon over the sauce.",
      "Bake 8 to 12 minutes, until the cheese is melted and bubbling.",
      "Top the hot pizza with shredded lettuce, sliced tomatoes, and the reserved bacon.",
      "Slice into wedges and serve right away."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy bacon ends or a thick-cut pack and crumble it yourself to save over pre-cooked crumbles.",
      "Shred a block of cheese at home instead of buying pre-shredded bags for a lower per-ounce cost.",
      "Use a store-brand prebaked crust or stretch a value pizza dough to keep this budget-friendly."
    ],
    "substitutions": [
      {
        "forIngredientId": "mayonnaise",
        "swap": "Plain Greek yogurt or light mayo for a lighter, tangier sauce",
        "savings": "About the same cost, fewer calories"
      },
      {
        "forIngredientId": "bacon",
        "swap": "Turkey bacon for a leaner topping",
        "savings": "Saves about $0.13 per slice"
      },
      {
        "forIngredientId": "lettuce",
        "swap": "Romaine or baby arugula for the fresh topping",
        "savings": "Comparable cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 18,
      "carbs": 28,
      "fat": 20,
      "fiber": 2
    },
    "emoji": "🍕",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "pizza",
      "bacon",
      "blt",
      "quick",
      "weeknight",
      "kid-friendly"
    ]
  },
  {
    "id": "toh-bow-ties-with-gorgonzola-sauce",
    "name": "Bow Ties with Gorgonzola Sauce",
    "description": "Tender farfalle gets tossed with savory crumbled pork sausage, fresh spinach, and a luscious Gorgonzola cream sauce for a fast, restaurant-worthy weeknight dinner. A shower of fresh basil ties it all together. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/bow-ties-with-gorgonzola-sauce/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "pasta",
        "quantity": 8,
        "note": "bow tie pasta (16 oz)"
      },
      {
        "ingredientId": "sausage",
        "quantity": 8,
        "note": "bulk pork sausage (16 oz)"
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "2 tablespoons all-purpose flour"
      },
      {
        "ingredientId": "half-and-half",
        "quantity": 6,
        "note": "1-1/2 cups half-and-half cream"
      },
      {
        "ingredientId": "gorgonzola",
        "quantity": 3,
        "note": "3/4 cup crumbled"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75
      },
      {
        "ingredientId": "lemon-pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "spinach",
        "quantity": 4,
        "note": "fresh, lightly packed"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 3,
        "note": "minced fresh, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Boil the bow tie pasta until al dente per the package timing, then drain and return it to the warm pot.",
      "While the pasta cooks, brown the bulk pork sausage in a large skillet over medium heat, breaking it into crumbles, until cooked through (4-6 minutes); drain off the fat.",
      "In a small saucepan, melt the butter over medium heat, then whisk in the flour to form a smooth paste.",
      "Slowly whisk in the half-and-half and bring to a boil, stirring constantly, until the sauce thickens (1-2 minutes); pull off the heat.",
      "Stir the crumbled Gorgonzola, salt, and lemon-pepper into the hot sauce until the cheese melts.",
      "Pour the cheese sauce over the drained pasta, add the cooked sausage and fresh spinach, and toss until the spinach wilts and everything is coated.",
      "Finish with a sprinkle of minced fresh basil and serve right away."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Swap the Gorgonzola for a more affordable blue cheese or even a sharp white cheddar — you still get a rich, tangy sauce for less.",
      "Buy a block of pasta on sale and stash extra in the pantry; bow ties keep for a year and cost a fraction of fresh pasta.",
      "Use frozen chopped spinach instead of fresh — it is cheaper, keeps longer, and just needs thawing and squeezing dry before tossing in."
    ],
    "substitutions": [
      {
        "forIngredientId": "gorgonzola",
        "swap": "any crumbled blue cheese or feta",
        "savings": "~$0.30/oz"
      },
      {
        "forIngredientId": "half-and-half",
        "swap": "whole milk plus a splash of melted butter, or evaporated milk",
        "savings": "~$0.10 per 1/4 cup"
      },
      {
        "forIngredientId": "sausage",
        "swap": "plant-based sausage or ground pork seasoned with fennel and sage",
        "savings": "varies"
      }
    ],
    "estimatedNutrition": {
      "calories": 490,
      "protein": 21,
      "carbs": 47,
      "fat": 24,
      "fiber": 3
    },
    "emoji": "🧀",
    "accentColor": "bg-emerald-100",
    "cuisine": "Italian-American",
    "tags": [
      "pasta",
      "creamy",
      "gorgonzola",
      "sausage",
      "spinach",
      "weeknight",
      "30-minute",
      "comfort-food"
    ]
  },
  {
    "id": "toh-brown-sugar-glazed-salmon",
    "name": "Brown Sugar-Glazed Salmon",
    "description": "Tender oven-roasted salmon finished under the broiler with a sweet-savory glaze of brown sugar, Dijon, and soy sauce that caramelizes into a glossy, flavor-packed crust. A quick weeknight dinner that tastes restaurant-worthy. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/brown-sugar-glazed-salmon/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "salmon",
        "quantity": 4,
        "note": "one 1 lb fillet, cut into 4 portions"
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
        "ingredientId": "brown-sugar",
        "quantity": 3
      },
      {
        "ingredientId": "dijon",
        "quantity": 4
      },
      {
        "ingredientId": "light-soy-sauce",
        "quantity": 1,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 0.33
      }
    ],
    "steps": [
      "Heat the oven to 425F and line a rimmed baking sheet with foil.",
      "Cut the salmon into 4 equal portions, arrange them on the pan, and season all over with the salt and pepper.",
      "Roast the salmon for about 10 minutes, then take it out and switch the oven to broil.",
      "While the fish roasts, whisk the brown sugar, Dijon, soy sauce, and rice vinegar in a small saucepan and bring just to a boil.",
      "Brush the warm glaze generously over each salmon portion.",
      "Broil about 6 inches from the heat for 1 to 2 minutes, until the glaze bubbles and the fish flakes easily with a fork."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole side of salmon and portion it yourself, or use frozen fillets, to cut the per-serving cost.",
      "The glaze uses pantry staples you likely already own, so the only real splurge is the fish.",
      "Watch sales and freeze salmon when it's marked down; thaw overnight in the fridge before cooking."
    ],
    "substitutions": [
      {
        "forIngredientId": "dijon",
        "swap": "whole-grain or honey mustard for a similar tang",
        "savings": "Use what you have on hand instead of buying Dijon"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "honey or maple syrup for the glaze",
        "savings": "Skip a separate purchase if you keep liquid sweeteners"
      },
      {
        "forIngredientId": "rice-vinegar",
        "swap": "apple cider vinegar or white wine vinegar",
        "savings": "Use a vinegar already in your pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 250,
      "protein": 24,
      "carbs": 11,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🐟",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "salmon",
      "seafood",
      "glazed",
      "quick",
      "weeknight",
      "high-protein",
      "oven",
      "broiler"
    ]
  },
  {
    "id": "toh-burgers-with-spicy-dill-salsa",
    "name": "Burgers with Spicy Dill Salsa",
    "description": "Juicy grilled beef burgers get a bright, briny kick from a fresh salsa of dill pickle relish, plum tomatoes, two onions, cilantro, and fiery serrano. It is a crowd-pleasing cookout twist that tastes like a deli pickle bar piled onto a burger. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/burgers-with-spicy-dill-salsa/",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "dill-relish",
        "quantity": 20
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "plum tomatoes, seeded and finely chopped"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 1,
        "note": "small, finely chopped"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.5,
        "note": "finely chopped, about 1/2 cup"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 8,
        "note": "fresh, minced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "serrano",
        "quantity": 2,
        "note": "seeded and chopped, 1 to 2 to taste"
      },
      {
        "ingredientId": "ground-beef",
        "quantity": 10,
        "note": "about 3 pounds total"
      },
      {
        "ingredientId": "salt",
        "quantity": 2
      },
      {
        "ingredientId": "pepper",
        "quantity": 1
      },
      {
        "ingredientId": "hamburger-buns",
        "quantity": 12,
        "note": "split"
      }
    ],
    "steps": [
      "Stir together the dill relish, chopped plum tomatoes, white onion, red onion, cilantro, olive oil, and serrano in a bowl to make the salsa; set aside.",
      "Combine the ground beef with salt and pepper, mixing gently just until blended so the meat stays tender.",
      "Divide and shape the mixture into twelve patties, each about half an inch thick.",
      "Working in two batches, grill the burgers covered over medium heat, or broil them about 4 inches from the heat.",
      "Cook 4 to 5 minutes per side, until an instant-read thermometer registers 160 degrees in the center.",
      "Toast the buns if you like, then top each burger with a generous spoonful of the spicy dill salsa and serve."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy ground beef in a larger family pack and freeze extra patties to cut the per-burger cost.",
      "Make the salsa with whatever onions and tomatoes are on sale; a regular yellow onion works fine in place of white.",
      "A jar of dill relish stretches a long way, so save the leftovers for tartar sauce or potato salad."
    ],
    "substitutions": [
      {
        "forIngredientId": "serrano",
        "swap": "Use a jalapeno for a milder, easier-to-find pepper.",
        "savings": "About $0.05 per pepper"
      },
      {
        "forIngredientId": "ground-beef",
        "swap": "Swap in 80/20 ground beef or ground turkey to lower the price.",
        "savings": "Roughly $1 per pound"
      },
      {
        "forIngredientId": "cilantro",
        "swap": "Use fresh parsley or dried cilantro if you dislike cilantro.",
        "savings": "A few cents per burger"
      }
    ],
    "estimatedNutrition": {
      "calories": 380,
      "protein": 27,
      "carbs": 24,
      "fat": 19,
      "fiber": 2
    },
    "emoji": "🍔",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "burgers",
      "grilling",
      "beef",
      "cookout",
      "salsa",
      "spicy",
      "summer",
      "crowd-pleaser"
    ]
  },
  {
    "id": "toh-busy-day-pork-chops",
    "name": "Busy-Day Pork Chops",
    "description": "Tender boneless pork chops get a crisp, savory crust from a Parmesan-breadcrumb coating, then bake hands-off until juicy. A quick weeknight dinner that tastes like you fussed. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/busy-day-pork-chops/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "skim-milk",
        "quantity": 0.25,
        "note": "fat-free milk, for dipping"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.25,
        "note": "seasoned"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 4,
        "note": "1/4 cup"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 4,
        "note": "boneless loin, ~4 oz each"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2
      }
    ],
    "steps": [
      "Heat the oven to 375 F. Pour the milk into one shallow bowl. In a second shallow bowl, stir together the breadcrumbs, Parmesan, salt, garlic powder, and pepper.",
      "Dip each pork chop in the milk to moisten, then press into the crumb mixture to coat both sides evenly.",
      "Arrange the coated chops on a baking sheet misted with cooking spray, then give the tops a light spritz of spray to help them brown.",
      "Bake about 8 to 10 minutes per side, flipping once, until a thermometer in the center reads 145 F.",
      "Let the chops rest 5 minutes before serving so the juices settle."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a whole boneless pork loin and slice your own chops; it's far cheaper per pound than pre-cut.",
      "Make seasoned breadcrumbs from stale bread plus a pinch of dried herbs instead of buying a box.",
      "Grate a block of Parmesan yourself rather than buying the pre-grated tub for a lower cost per ounce."
    ],
    "substitutions": [
      {
        "forIngredientId": "skim-milk",
        "swap": "Any milk you have, or a beaten egg for a thicker coating",
        "savings": "Use what's on hand"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Crushed saltines or panko",
        "savings": "Repurpose pantry crackers"
      },
      {
        "forIngredientId": "grated-parmesan",
        "swap": "Shredded parmesan or pecorino",
        "savings": "Use the block you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 28,
      "carbs": 6,
      "fat": 8,
      "fiber": 0
    },
    "emoji": "🐖",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "weeknight",
      "baked",
      "high-protein",
      "quick",
      "kid-friendly",
      "breaded"
    ]
  },
  {
    "id": "toh-caramelized-pork-tenderloin",
    "name": "Caramelized Pork Tenderloin",
    "description": "Quick pan-seared pork medallions crusted in a sweet-and-savory brown sugar, garlic, and steak seasoning coating that caramelizes into a glossy, golden crust. Weeknight-fast and deeply satisfying. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/caramelized-pork-tenderloin/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pork-tenderloin",
        "quantity": 16
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "montreal-steak-seasoning",
        "quantity": 3
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      }
    ],
    "steps": [
      "Slice the pork tenderloin into 4 equal portions.",
      "Place each piece between plastic wrap or in a bag and pound with a meat mallet until about 1/4 inch thick.",
      "In a shallow bowl, stir together the brown sugar, minced garlic, and Montreal steak seasoning.",
      "Press each piece of pork firmly into the brown sugar mixture, coating both sides so it sticks.",
      "Melt the butter in a large skillet over medium-high heat.",
      "Add the coated pork and sear for 2 to 3 minutes per side, until the crust caramelizes and the pork is cooked through and tender.",
      "Serve hot, spooning any pan juices over the top."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole pork tenderloin when it's on sale and freeze portions; it's cheaper per ounce than chops.",
      "Skip the pre-made steak seasoning and make your own from pantry pepper, garlic powder, salt, and paprika.",
      "Brown sugar and butter are pantry staples, so this dish leans on one affordable protein for almost the whole cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use plant-butter or a splash of neutral oil for searing",
        "savings": "saves about $0.06"
      },
      {
        "forIngredientId": "montreal-steak-seasoning",
        "swap": "Mix garlic powder, black pepper, and a pinch of salt and paprika",
        "savings": "uses pantry spices instead of a blend"
      },
      {
        "forIngredientId": "pork-tenderloin",
        "swap": "Pork cutlets or thin-pounded pork chops work just as well",
        "savings": "saves about $0.19 per oz"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 26,
      "carbs": 14,
      "fat": 9,
      "fiber": 0
    },
    "emoji": "🐖",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "quick",
      "weeknight",
      "caramelized",
      "high-protein",
      "skillet",
      "30-minute",
      "gluten-free"
    ]
  },
  {
    "id": "toh-chicken-cheese-tortilla-pie",
    "name": "Chicken & Cheese Tortilla Pie",
    "description": "A cozy, layered Tex-Mex bake of sauce-dipped corn tortillas stacked with tender rotisserie chicken, gooey cheddar, and briny olives, then baked until bubbly and melty. It comes together in 25 minutes for an easy weeknight dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/chicken-cheese-tortilla-pie/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "enchilada-sauce",
        "quantity": 1,
        "note": "green enchilada sauce, warmed"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 8,
        "note": "6-inch corn tortillas"
      },
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 2,
        "note": "coarsely shredded, about 2 cups"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 8,
        "note": "about 2 cups shredded"
      },
      {
        "ingredientId": "olives",
        "quantity": 1,
        "note": "sliced ripe olives, 1/4 cup"
      },
      {
        "ingredientId": "salsa",
        "quantity": 1,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Heat the oven to 375 F and lightly grease a 9-inch pie plate.",
      "Warm the green enchilada sauce in a small skillet over medium heat.",
      "Dip 4 tortillas one at a time into the sauce to coat both sides, then layer them across the bottom of the pie plate, overlapping to cover it.",
      "Spread on 1 cup chicken, 1 cup cheddar, and 2 tablespoons sliced olives.",
      "Add a second layer of sauce-dipped tortillas, then the remaining chicken.",
      "Pour any leftover enchilada sauce over the top and finish with the remaining cheddar and olives.",
      "Bake 10 to 15 minutes, until heated through and the cheese is fully melted.",
      "Slice into wedges and serve, topped with salsa if you like."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole rotisserie chicken and shred it yourself — it's cheaper per cup than pre-pulled meat and you can use the rest for another meal.",
      "Shred cheese from a block instead of buying pre-shredded; it melts better and costs less per ounce.",
      "Skip the canned olives or use just half a can — they're optional flavor, not structural."
    ],
    "substitutions": [
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "canned-chicken, drained and flaked",
        "savings": "Roughly the same protein for less prep and often a lower price"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "pizza-cheese-blend or sharp-cheddar",
        "savings": "A blend is usually a bit cheaper per ounce and still melts well"
      },
      {
        "forIngredientId": "enchilada-sauce",
        "swap": "salsa-verde thinned slightly",
        "savings": "Use a jar you already have to avoid buying a separate can"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 38,
      "carbs": 28,
      "fat": 23,
      "fiber": 4
    },
    "emoji": "🥧",
    "accentColor": "bg-orange-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "mexican",
      "chicken",
      "cheesy",
      "easy",
      "weeknight",
      "casserole",
      "gluten-free",
      "comfort-food",
      "rotisserie-chicken"
    ]
  },
  {
    "id": "toh-chicken-cordon-bleu-pizza",
    "name": "Chicken Cordon Bleu Pizza",
    "description": "All the comfort of chicken cordon bleu reimagined as a crispy pizza: a golden crust layered with creamy Alfredo, nutty Swiss, savory ham, and breaded chicken, finished with a blanket of melty mozzarella. A fun, family-friendly weeknight dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/chicken-cordon-bleu-pizza/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "refrigerated pizza crust"
      },
      {
        "ingredientId": "alfredo-sauce",
        "quantity": 1,
        "note": "about 1/2 cup"
      },
      {
        "ingredientId": "garlic-salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "swiss-cheese",
        "quantity": 4,
        "note": "shredded; ~1 cup"
      },
      {
        "ingredientId": "ham",
        "quantity": 8,
        "note": "cubed fully cooked ham; ~1.5 cups"
      },
      {
        "ingredientId": "frozen-chicken-nuggets",
        "quantity": 10,
        "note": "thawed, cut into 1/2-inch pieces"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 4,
        "note": "shredded part-skim; ~1 cup"
      }
    ],
    "steps": [
      "Heat the oven to 425F and lightly grease a 15x10-inch sheet pan.",
      "Unroll the pizza dough and press it across the bottom of the pan, pinching up the edges to form a rim.",
      "Pre-bake the crust until the edges turn light brown, about 8 to 10 minutes.",
      "Spread the Alfredo sauce evenly over the par-baked crust and dust with garlic salt.",
      "Scatter on the Swiss cheese, then the cubed ham and chopped chicken nuggets, and finish with the mozzarella.",
      "Return to the oven and bake until the crust is golden and the cheese is fully melted and bubbling, 8 to 10 minutes.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use leftover diced ham or deli ham ends instead of buying a fresh package.",
      "Swap store-bought Alfredo for a quick homemade version with butter, cream, and Parmesan to cut cost.",
      "Shred a block of Swiss yourself rather than buying pre-shredded; it is cheaper and melts better."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-chicken-nuggets",
        "swap": "chopped rotisserie chicken or cooked chicken breast for a less processed protein",
        "savings": "Often cheaper per serving if using leftovers"
      },
      {
        "forIngredientId": "alfredo-sauce",
        "swap": "white pizza base of cream cheese thinned with milk, or a light bechamel",
        "savings": "~$0.50 per pizza"
      },
      {
        "forIngredientId": "swiss-cheese",
        "swap": "provolone or Gruyere for a similar nutty melt",
        "savings": "Provolone is usually cheaper than Swiss"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 27,
      "carbs": 36,
      "fat": 20,
      "fiber": 2
    },
    "emoji": "🍕",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pizza",
      "chicken",
      "ham",
      "cheesy",
      "weeknight",
      "kid-friendly",
      "comfort-food"
    ]
  },
  {
    "id": "toh-chili-beef-noodle-skillet",
    "name": "Chili Beef Noodle Skillet",
    "description": "A hearty one-skillet weeknight dinner where seasoned ground beef simmers with tomatoes and chili powder, then gets tossed with tender egg noodles and blanketed in melty cheddar. Cozy, filling, and on the table in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/chili-beef-noodle-skillet/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "egg-noodles",
        "quantity": 4,
        "note": "8 oz package, about 4 servings dry"
      },
      {
        "ingredientId": "ground-beef",
        "quantity": 8,
        "note": "2 pounds"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "celery",
        "quantity": 1,
        "note": "1/4 cup chopped, about 1 stalk"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "stewed-tomatoes",
        "quantity": 2,
        "note": "one 28 oz can diced tomatoes, undrained"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 3,
        "note": "1 tablespoon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 3,
        "note": "about 3/4 cup shredded"
      }
    ],
    "steps": [
      "Boil the egg noodles until just tender, following the package timing, then drain and set aside.",
      "While the noodles cook, brown the ground beef in a large skillet over medium heat along with the chopped onion, celery, and garlic, breaking up the meat until it's no longer pink and the vegetables soften.",
      "Drain off any excess fat from the skillet.",
      "Stir in the undrained tomatoes, chili powder, salt, and pepper, and cook for about 2 minutes until everything is hot and well combined.",
      "Fold the drained noodles into the beef mixture and heat through.",
      "Pull the skillet off the heat, scatter the shredded cheddar over the top, cover, and let it sit about 5 minutes until the cheese melts. Serve warm."
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy ground beef in a family pack and freeze in 1-pound portions to lock in a lower per-pound price.",
      "Grab a block of cheddar and shred it yourself; it's cheaper than pre-shredded and melts better.",
      "Stretch the dish further (and trim cost) by using 1.5 lb beef plus a can of drained beans."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Ground turkey or chicken for a leaner, cheaper option",
        "savings": "~$3 per batch"
      },
      {
        "forIngredientId": "egg-noodles",
        "swap": "Any short pasta like elbows or rotini",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "Shred your own from a cheddar block",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 30,
      "carbs": 26,
      "fat": 22,
      "fiber": 3
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "one-pan",
      "beef",
      "noodles",
      "weeknight",
      "comfort-food",
      "family-friendly",
      "30-minute"
    ]
  },
  {
    "id": "toh-chipotle-chili-sloppy-joes",
    "name": "Chipotle Chili Sloppy Joes",
    "description": "Smoky, saucy ground beef sloppy joes get a serious flavor upgrade from chili sauce and a hit of chipotle in adobo, all piled onto buttery toasted kaiser rolls. A weeknight-easy skillet dinner with just the right amount of heat. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/chipotle-chili-sloppy-joes/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef-80-20",
        "quantity": 16,
        "note": "lean ground beef, 90% lean"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "sweet onion, finely chopped (about 1 cup)"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "green, finely chopped (1/2 cup)"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and finely chopped",
        "optional": true
      },
      {
        "ingredientId": "chili-sauce",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5
      },
      {
        "ingredientId": "chipotle-in-adobo",
        "quantity": 0.25,
        "note": "1-2 peppers, finely chopped"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1,
        "note": "packed"
      },
      {
        "ingredientId": "yellow-mustard",
        "quantity": 1
      },
      {
        "ingredientId": "kaiser-rolls",
        "quantity": 6,
        "note": "split; or hamburger buns"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "softened"
      },
      {
        "ingredientId": "pickles",
        "quantity": 0.5,
        "note": "sliced, for serving",
        "optional": true
      }
    ],
    "steps": [
      "Heat the broiler. In a large skillet over medium, brown the ground beef with the onion, green pepper, and jalapeno (if using), crumbling the meat as it cooks, until no longer pink, about 5-7 minutes. Drain off the fat.",
      "Stir in the chili sauce, water, chopped chipotle peppers, brown sugar, and mustard. Bring to a boil.",
      "Lower to a simmer and cook uncovered, stirring now and then, until the mixture thickens slightly, 8-10 minutes.",
      "Meanwhile, butter the cut sides of the rolls and set them buttered-side up on a baking sheet. Broil 3-4 inches from the heat just until lightly toasted, about 30 seconds.",
      "Spoon the beef mixture onto the toasted rolls and top with pickle slices if desired. Serve hot."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy ground beef in a family-size pack and freeze in 1-lb portions to lock in a lower per-pound price.",
      "Skip the chipotle-in-adobo can if you only need a little; a pinch of chipotle powder plus a dab of tomato paste mimics the smoky heat for less.",
      "Plain hamburger buns are cheaper than kaiser rolls and work just as well here."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef-80-20",
        "swap": "ground turkey for a leaner, lower-cost option",
        "savings": "~$1/lb"
      },
      {
        "forIngredientId": "kaiser-rolls",
        "swap": "hamburger buns",
        "savings": "~$0.10 per roll"
      },
      {
        "forIngredientId": "chili-sauce",
        "swap": "ketchup with a splash of hot sauce and a pinch of brown sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 22,
      "carbs": 33,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🍔",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "sloppy joes",
      "ground beef",
      "chipotle",
      "spicy",
      "weeknight",
      "sandwich",
      "comfort-food",
      "kid-friendly"
    ]
  },
  {
    "id": "toh-cilantro-beef-tacos",
    "name": "Cilantro Beef Tacos",
    "description": "Juicy seared flank steak sliced thin and folded into warm tortillas with a bright, garlicky onion-salsa relish kicked up with fresh cilantro and lime. A fast weeknight taco night that tastes like a treat. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/cilantro-beef-tacos/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flank-steak",
        "quantity": 16
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
        "ingredientId": "olive-oil",
        "quantity": 1.33
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and finely chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "salsa",
        "quantity": 2
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 4,
        "note": "minced fresh"
      },
      {
        "ingredientId": "lime-juice-bottled",
        "quantity": 0.67
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.25,
        "note": "a dash"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 8,
        "note": "6-inch flour, warmed"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "optional": true,
        "note": "shredded, for topping"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 4,
        "optional": true,
        "note": "for topping"
      }
    ],
    "steps": [
      "Season both sides of the flank steak with salt and pepper.",
      "Heat about 2 teaspoons of the oil in a large skillet over medium-high. Sear the steak 5-7 minutes per side until it hits your preferred doneness (135F medium-rare, 140F medium, 145F medium-well), then transfer to a plate to rest.",
      "Lower the heat to medium and add the remaining oil. Cook the sliced onion 4-5 minutes until softened.",
      "Stir in the jalapeno and garlic and cook 2 minutes more until fragrant.",
      "Add the salsa, cilantro, lime juice, and hot sauce; stir and warm through.",
      "Slice the rested steak thinly against the grain, then fold it into the onion-salsa mixture.",
      "Spoon into warm tortillas and finish with any optional toppings you like."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Flank steak is pricey - swap in skirt steak or even thin-sliced beef chuck and slice it just as thin against the grain to keep it tender.",
      "Skip jarred salsa and blend a quick one from canned tomatoes, onion, and a chile - it costs a fraction of the bottle.",
      "Buy a fresh cilantro bunch instead of pre-minced; one bunch covers both the relish and the garnish for under a dollar."
    ],
    "substitutions": [
      {
        "forIngredientId": "flank-steak",
        "swap": "skirt-steak or sirloin-steak, sliced thin against the grain",
        "savings": "Skirt and sirloin often run cheaper per pound and stay tender"
      },
      {
        "forIngredientId": "tortilla",
        "swap": "corn tortillas for a gluten-free, lower-cost option",
        "savings": "Corn tortillas are typically cheaper and naturally GF"
      },
      {
        "forIngredientId": "lime-juice-bottled",
        "swap": "juice from a fresh lime",
        "savings": "One fresh lime is cheap and brighter-tasting"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 30,
      "carbs": 34,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🌮",
    "accentColor": "bg-green-100",
    "cuisine": "Mexican",
    "tags": [
      "tacos",
      "beef",
      "steak",
      "weeknight",
      "cilantro",
      "30-minute",
      "stovetop"
    ]
  },
  {
    "id": "toh-cinnamon-apple-pork-chops",
    "name": "Pork Chops with Apples",
    "description": "Juicy pan-seared pork chops crowned with tender cinnamon-spiced apples and toasted pecans in a quick brown-sugar syrup. It's cozy, sweet-savory comfort food that comes together in one skillet in under half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/cinnamon-apple-pork-chops/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "divided"
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 4,
        "note": "boneless, about 4 oz each"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 3
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "green-apple",
        "quantity": 4,
        "note": "tart apples, thinly sliced"
      },
      {
        "ingredientId": "pecans",
        "quantity": 0.5,
        "note": "chopped"
      }
    ],
    "steps": [
      "Melt half the butter in a large skillet over medium heat, then lay in the pork chops without crowding the pan.",
      "Sear the chops about 4-5 minutes per side, until an instant-read thermometer hits 145F.",
      "While they cook, stir together the brown sugar, cinnamon, nutmeg, and salt in a small bowl.",
      "Move the chops to a plate and keep them warm.",
      "Add the apple slices, pecans, spiced sugar mix, and remaining butter to the same skillet, scraping up the browned bits.",
      "Cook, stirring, until the apples soften and the sugar melts into a glossy syrup.",
      "Spoon the apples and syrup over the chops and serve."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole pork loin and cut your own chops, it costs far less per pound than pre-cut boneless chops.",
      "Any firm tart apple works, grab whatever's on sale or use slightly soft apples you need to use up.",
      "Swap pecans for cheaper walnuts or skip the nuts entirely, the dish still shines."
    ],
    "substitutions": [
      {
        "forIngredientId": "green-apple",
        "swap": "apple (any firm variety)",
        "savings": "save ~$0.05 per apple"
      },
      {
        "forIngredientId": "pecans",
        "swap": "chopped walnuts or omit",
        "savings": "save ~$0.40"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant-butter for dairy-free",
        "savings": "save ~$0.03/tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 26,
      "carbs": 28,
      "fat": 13,
      "fiber": 4
    },
    "emoji": "🍎",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "apples",
      "skillet",
      "one-pan",
      "fall",
      "sweet-savory",
      "weeknight",
      "30-minute"
    ]
  },
  {
    "id": "toh-contest-winning-broccoli-chicken-casserole",
    "name": "Chicken Broccoli Casserole",
    "description": "A cozy, crowd-pleasing bake where tender chicken and bright broccoli florets are bound in a creamy cheese sauce, crowned with savory seasoned stuffing and a blanket of melty cheddar. It's comfort food that comes together fast and disappears even faster. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/contest-winning-broccoli-chicken-casserole/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "breadcrumbs",
        "quantity": 1.5,
        "note": "stands in for 6 oz seasoned chicken stuffing mix; toast or season for topping"
      },
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 2,
        "note": "about 2 cups cubed cooked chicken"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 2,
        "note": "fresh florets, cut bite-size"
      },
      {
        "ingredientId": "cream-of-mushroom",
        "quantity": 1,
        "note": "stands in for one 10-3/4 oz can condensed broccoli cheese soup, undiluted"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 4,
        "note": "about 1 cup shredded"
      }
    ],
    "steps": [
      "Heat the oven to 350F and lightly grease an 11x7-inch baking dish.",
      "Make the stuffing per its package, but use only 1-1/2 cups water so it stays on the firmer side; set aside.",
      "In a large bowl, stir together the cubed chicken, broccoli florets, and the undiluted condensed broccoli cheese soup until evenly coated.",
      "Spread the chicken mixture into the prepared dish in an even layer.",
      "Scatter the prepared stuffing over the top, then sprinkle the shredded cheddar across the surface.",
      "Cover and bake for 20 minutes, then uncover and bake another 10 to 15 minutes until hot and bubbling throughout.",
      "Let the casserole rest about 10 minutes so it sets before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use leftover or rotisserie chicken instead of buying and cooking fresh breasts to cut both cost and time.",
      "Swap fresh broccoli for frozen florets, which are cheaper year-round and just need a quick thaw.",
      "Buy a block of cheddar and shred it yourself; it costs less per ounce than pre-shredded bags."
    ],
    "substitutions": [
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "Use canned chicken or leftover turkey",
        "savings": "~$0.50/serving with canned"
      },
      {
        "forIngredientId": "broccoli",
        "swap": "Frozen broccoli florets, thawed and drained",
        "savings": "~$0.05/cup"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Crushed crackers or panko tossed with melted butter and herbs",
        "savings": "similar cost, uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 26,
      "carbs": 20,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "casserole",
      "comfort-food",
      "chicken",
      "broccoli",
      "cheesy",
      "weeknight",
      "baked",
      "family-friendly"
    ]
  },
  {
    "id": "toh-crescent-turkey-casserole",
    "name": "Crescent Turkey Casserole",
    "description": "A cozy weeknight bake where tender turkey and sweet vegetables simmer in a creamy, savory sauce, then get crowned with flaky golden crescent rolls. It is comfort food that comes together in half an hour and turns leftover turkey into something special. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/crescent-turkey-casserole/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "mayonnaise",
        "quantity": 8
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125
      },
      {
        "ingredientId": "chicken-bouillon",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "two-percent-milk",
        "quantity": 0.75
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.75
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 0.75,
        "note": "part of the frozen mixed vegetables"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "diced, standing in for the carrot portion of frozen mixed vegetables"
      },
      {
        "ingredientId": "turkey-breast",
        "quantity": 1.5,
        "note": "cooked and cubed"
      },
      {
        "ingredientId": "crescent-rolls",
        "quantity": 8
      }
    ],
    "steps": [
      "Heat the oven to 375 F and lightly grease an 8-inch square baking dish.",
      "In a saucepan off the heat, whisk together the mayonnaise, flour, chicken bouillon, and pepper until smooth, then slowly whisk in the milk.",
      "Set the pan over medium heat and cook, stirring, until the sauce comes to a boil and thickens, about 2 minutes.",
      "Stir in the peas, corn, diced carrot, and cubed turkey, and keep cooking just until everything is heated through.",
      "Pour the turkey mixture into the prepared baking dish and spread it level.",
      "Unroll the crescent dough, separate it into 8 triangles, and lay them over the top to cover the filling.",
      "Bake for 15 to 20 minutes, until the filling is bubbling and the crescent topping is puffed and golden brown."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use leftover roast turkey or chicken instead of buying fresh breast to cut the cost to near zero.",
      "A bag of plain frozen mixed vegetables is cheaper than buying peas, corn, and carrots separately.",
      "Store-brand crescent rolls and mayonnaise work just as well as name brands here."
    ],
    "substitutions": [
      {
        "forIngredientId": "turkey-breast",
        "swap": "Cooked rotisserie chicken, shredded or cubed",
        "savings": "Often cheaper per pound and no cooking needed"
      },
      {
        "forIngredientId": "mayonnaise",
        "swap": "A can of condensed cream of chicken soup thinned with a splash of milk",
        "savings": "Skips the flour and bouillon steps"
      },
      {
        "forIngredientId": "two-percent-milk",
        "swap": "Whole milk or unsweetened plant milk",
        "savings": "Use whatever is already in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 26,
      "carbs": 28,
      "fat": 24,
      "fiber": 4
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "casserole",
      "comfort-food",
      "leftover-turkey",
      "weeknight",
      "30-minute",
      "crescent-rolls"
    ]
  },
  {
    "id": "toh-crispy-bbq-chip-tenders",
    "name": "Crispy BBQ Chip Tenders",
    "description": "Juicy chicken tenders get an irresistible crunch from a crushed barbecue potato chip crust, baked golden and served with a cool, tangy sour cream and chive dip. A fun, kid-friendly twist on classic tenders with smoky-sweet flavor in every bite. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/crispy-bbq-chip-tenders/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "sour-cream",
        "quantity": 16,
        "note": "for the dipping sauce"
      },
      {
        "ingredientId": "chives",
        "quantity": 4,
        "note": "minced fresh"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "for the sauce"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "all-purpose, for dredging"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2,
        "note": "light brown"
      },
      {
        "ingredientId": "mustard-powder",
        "quantity": 1,
        "note": "ground mustard"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.75
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "for the coating"
      },
      {
        "ingredientId": "cayenne-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "lightly beaten"
      },
      {
        "ingredientId": "chips",
        "quantity": 2.5,
        "note": "barbecue potato chips, coarsely crushed"
      },
      {
        "ingredientId": "chicken-breast-tenders",
        "quantity": 24,
        "note": "chicken tenderloins, 1.5 lb"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 3,
        "optional": true
      }
    ],
    "steps": [
      "Heat the oven to 400 degrees F.",
      "Stir together the sour cream, minced chives, garlic, and 1/2 tsp salt for the dip; cover and chill until serving.",
      "In a shallow bowl, whisk the flour with the brown sugar, ground mustard, pepper, 1/2 tsp salt, and cayenne. Put the beaten eggs in a second shallow bowl and the crushed barbecue chips in a third.",
      "Dredge each chicken tender in the seasoned flour and shake off the excess, then dip in egg, then press into the crushed chips so the crust sticks.",
      "Arrange the coated tenders on a rack set in a rimmed baking sheet and mist with cooking spray.",
      "Bake 12 to 15 minutes, until the coating is golden and crisp and the chicken is cooked through.",
      "Serve hot with the chilled sour cream and chive dip."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a slightly damaged or store-brand bag of barbecue chips for the crust and crush them yourself in a zip bag instead of pricier specialty crumbs.",
      "Use whole chicken breasts sliced into strips instead of pre-cut tenderloins to save a couple dollars per pound.",
      "Skip the fresh chives and use a few teaspoons of dried chives or sliced green onion for the dip at a fraction of the cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "chips",
        "swap": "Any crushed kettle chip or even crushed cornflakes or panko mixed with bbq-rub for the same crunch",
        "savings": "Use up the broken chips at the bottom of an open bag for free"
      },
      {
        "forIngredientId": "sour-cream",
        "swap": "Plain Greek yogurt for a lighter, tangier dip",
        "savings": "Often cheaper per serving and adds protein"
      },
      {
        "forIngredientId": "chicken-breast-tenders",
        "swap": "Chicken thighs cut into strips for juicier, budget-friendly meat",
        "savings": "Thighs typically run cheaper per pound than tenderloins"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 32,
      "carbs": 22,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "chicken",
      "tenders",
      "bbq",
      "baked",
      "crispy",
      "kid-friendly",
      "dinner",
      "weeknight"
    ]
  },
  {
    "id": "toh-crispy-orange-chicken",
    "name": "Easy Orange Chicken",
    "description": "Crispy oven-baked chicken bites tossed in a glossy, sweet-savory orange-hoisin sauce with tender carrots, spooned over fluffy rice for a fast takeout-style dinner at home. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/crispy-orange-chicken/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "frozen-chicken-nuggets",
        "quantity": 32,
        "note": "stands in for 16 oz frozen popcorn chicken, ~32 pieces"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "for grated zest, about 1-1/2 tsp"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 1
      },
      {
        "ingredientId": "hoisin",
        "quantity": 5,
        "note": "1/3 cup"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3
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
        "ingredientId": "cayenne",
        "quantity": 0.125,
        "optional": true,
        "note": "just a dash"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "cooked, for serving"
      }
    ],
    "steps": [
      "Bake the frozen breaded chicken on a sheet pan per its package directions until hot and crisp.",
      "While it bakes, heat the canola oil in a large skillet over medium-high and saute the sliced carrots until just tender, about 3 to 5 minutes.",
      "Add the minced garlic and cook for one more minute until fragrant.",
      "Stir in the orange zest, orange juice, hoisin, sugar, salt, pepper, and a dash of cayenne.",
      "Bring the sauce to a boil, then lower the heat and simmer uncovered, stirring constantly, until it thickens into a glaze, about 4 to 6 minutes.",
      "Add the baked chicken to the skillet and toss to coat every piece in the sauce.",
      "Serve hot over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen breaded chicken nuggets or popcorn chicken are usually cheapest in the big club-store bag - portion out what you need and freeze the rest.",
      "Bottled orange juice works just as well as fresh here and costs a fraction of buying juicing oranges.",
      "Stretch it further by bulking up the carrots or adding frozen mixed veggies, since the sauce easily coats more."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-chicken-nuggets",
        "swap": "frozen-chicken-tenders, chopped into bite-size pieces",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "hoisin",
        "swap": "soy sauce mixed with a little extra sugar and a dab of ketchup",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "rice",
        "swap": "brown-rice for more fiber",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 22,
      "carbs": 68,
      "fat": 18,
      "fiber": 3
    },
    "emoji": "🍊",
    "accentColor": "bg-orange-100",
    "cuisine": "Chinese-American",
    "tags": [
      "orange chicken",
      "weeknight",
      "takeout-style",
      "quick",
      "kid-friendly",
      "stir-fry sauce"
    ]
  },
  {
    "id": "toh-easy-beef-taco-skillet",
    "name": "Taco Skillet",
    "description": "A one-pan weeknight fiesta: seasoned ground beef simmered with sweet corn, tender tortilla pieces, zesty sauce, and melty cheddar, then loaded with all your favorite taco toppings. Comfort food that comes together in 20 minutes flat. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/easy-beef-taco-skillet/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 4
      },
      {
        "ingredientId": "red-onion",
        "quantity": 1,
        "note": "small, chopped"
      },
      {
        "ingredientId": "canned-corn",
        "quantity": 1,
        "note": "drained"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 10,
        "note": "corn tortillas, cut into 1-inch pieces"
      },
      {
        "ingredientId": "salsa",
        "quantity": 4,
        "note": "stands in for taco sauce; ~8 oz"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 5,
        "note": "divided"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 3,
        "optional": true,
        "note": "for topping"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "chopped green onion, for topping"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for topping"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 2,
        "optional": true,
        "note": "for topping"
      }
    ],
    "steps": [
      "Brown the ground beef with the chopped red onion in a large skillet over medium heat, breaking it up as it cooks until no pink remains.",
      "Tip out any excess grease and liquid from the pan.",
      "Stir in the drained corn, tortilla pieces, salsa (or taco sauce), and about 1 cup of the cheddar.",
      "Keep cooking, stirring occasionally, until everything is bubbly and heated through and the tortillas soften.",
      "Scatter the remaining cheddar over the top and let it melt.",
      "Finish with a splash of hot sauce if you like, then serve loaded with sour cream, green onion, tomato, cilantro, and extra salsa."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Swap ground beef for the cheaper 80/20 blend or ground turkey to trim the cost per pound.",
      "Buy a block of cheddar and shred it yourself; it's cheaper than pre-shredded and melts better.",
      "Skip the optional toppings or use just one to keep the grocery bill down without losing the taco vibe."
    ],
    "substitutions": [
      {
        "forIngredientId": "salsa",
        "swap": "Use enchilada sauce or thinned tomato sauce with taco seasoning",
        "savings": "Pantry staples cost less than a bottle of taco sauce"
      },
      {
        "forIngredientId": "ground-beef",
        "swap": "Ground turkey or ground chicken",
        "savings": "Often $1-2 cheaper per pound and leaner"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "Any melting cheese like Monterey Jack or a pizza blend",
        "savings": "Use whatever cheese is on sale"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 26,
      "carbs": 32,
      "fat": 22,
      "fiber": 4
    },
    "emoji": "🌮",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican-American",
    "tags": [
      "taco",
      "skillet",
      "one-pan",
      "ground-beef",
      "weeknight",
      "tex-mex",
      "30-minute"
    ]
  },
  {
    "id": "toh-easy-chana-masala",
    "name": "Easy Chana Masala",
    "description": "Tender chickpeas simmered in a spiced tomato sauce with onion, ginger, and garlic, then spooned over warm brown rice and finished with cool yogurt and fresh cilantro. A cozy, weeknight-friendly vegetarian curry that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/easy-chana-masala/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "canola-oil",
        "quantity": 1
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely chopped (about 1/2 cup)"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "ground stand-in for 1 tbsp minced fresh gingerroot"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and finely chopped",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 1
      },
      {
        "ingredientId": "coriander",
        "quantity": 0.5,
        "note": "ground"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5,
        "note": "ground"
      },
      {
        "ingredientId": "whole-peeled-tomatoes",
        "quantity": 1,
        "note": "15 oz can diced tomatoes, undrained"
      },
      {
        "ingredientId": "chickpeas",
        "quantity": 1,
        "note": "15 oz can, rinsed and drained"
      },
      {
        "ingredientId": "brown-rice",
        "quantity": 3,
        "note": "hot cooked"
      },
      {
        "ingredientId": "plain-yogurt",
        "quantity": 0.25
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "note": "minced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Warm the canola oil in a large skillet over medium heat.",
      "Add the chopped onion, ginger, garlic, and jalapeno (if using); cook, stirring, until the onion softens and takes on a little color, about 4-5 minutes.",
      "Stir in the salt, garam masala, coriander, and cumin and toast for 1 minute to bloom the spices.",
      "Pour in the undrained tomatoes and the drained chickpeas, then bring everything up to a boil.",
      "Lower the heat, cover, and let it simmer for 12-15 minutes so the flavors meld, stirring now and then.",
      "Spoon over hot brown rice and finish each bowl with a dollop of plain yogurt and a sprinkle of fresh cilantro."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Canned chickpeas are budget gold, but dried chickpeas cooked from scratch cost a fraction and freeze well in batches.",
      "Buy whole spices like cumin and coriander in bulk and grind as needed; they are far cheaper per serving than small jars.",
      "Make a double batch and freeze portions; chana masala reheats beautifully and stretches your grocery dollar across several meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "plain-yogurt",
        "swap": "coconut yogurt to make it dairy-free",
        "savings": "comparable"
      },
      {
        "forIngredientId": "brown-rice",
        "swap": "plain white rice",
        "savings": "saves about $0.12 per cup"
      },
      {
        "forIngredientId": "whole-peeled-tomatoes",
        "swap": "crushed or fire-roasted tomatoes for deeper flavor",
        "savings": "similar cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 11,
      "carbs": 58,
      "fat": 7,
      "fiber": 9
    },
    "emoji": "🍛",
    "accentColor": "bg-orange-100",
    "cuisine": "Indian",
    "tags": [
      "chickpeas",
      "curry",
      "vegetarian",
      "weeknight",
      "one-pan",
      "indian",
      "gluten-free"
    ]
  },
  {
    "id": "toh-easy-stuffed-shells",
    "name": "Easy Stuffed Shells",
    "description": "Tender jumbo pasta shells each cradle a juicy Italian meatball, all blanketed in marinara and gooey melted mozzarella for a weeknight twist on a classic baked pasta. A cozy, crowd-pleasing dinner with almost no fuss. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/easy-stuffed-shells/",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "pasta-shells",
        "quantity": 12,
        "note": "jumbo shells, about 36"
      },
      {
        "ingredientId": "marinara",
        "quantity": 3,
        "note": "about one 24 oz jar"
      },
      {
        "ingredientId": "frozen-meatballs",
        "quantity": 36,
        "note": "fully cooked Italian meatballs, thawed"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 8,
        "note": "shredded part-skim, about 2 cups"
      }
    ],
    "steps": [
      "Heat the oven to 350 F (175 C).",
      "Boil the jumbo shells until just tender per the package, then drain and rinse under cold water so they stop cooking and are easy to handle.",
      "Lightly grease a 13x9-inch baking dish and spread about 1/2 cup of marinara across the bottom.",
      "Tuck one meatball into each shell and arrange them in the dish over the sauce.",
      "Pour the remaining marinara over the stuffed shells and scatter the mozzarella on top.",
      "Cover and bake for 35 minutes.",
      "Uncover and bake another 3 to 5 minutes, until the sauce bubbles and the cheese is fully melted."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a store-brand jarred marinara and a bag of frozen meatballs in bulk to keep the per-serving cost low.",
      "Cook a full box of shells and freeze the extras; broken ones can be tossed into a quick pasta bake later.",
      "Shred mozzarella from a block yourself instead of buying pre-shredded to save a bit and get better melt."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-meatballs",
        "swap": "plant-based-meatballs for a vegetarian version",
        "savings": "comparable cost, fully meatless"
      },
      {
        "forIngredientId": "marinara",
        "swap": "any jarred pasta or spaghetti sauce",
        "savings": "use whatever is on sale"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "low-moisture-mozzarella for an even meltier, browned top",
        "savings": "slightly cheaper per ounce"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 18,
      "carbs": 30,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "pasta",
      "baked",
      "comfort-food",
      "weeknight",
      "family-friendly",
      "casserole",
      "meatballs"
    ]
  },
  {
    "id": "toh-frittata-florentine",
    "name": "Frittata Florentine",
    "description": "A light, protein-packed Italian frittata loaded with sauteed onion, sweet red pepper, turkey bacon, and tender baby spinach, finished with fresh basil and melty mozzarella under the broiler. Quick enough for a weeknight yet impressive enough for brunch. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/frittata-florentine/",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 3,
        "note": "from 6 large egg whites"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.25
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
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small, finely chopped"
      },
      {
        "ingredientId": "red-bell-pepper",
        "quantity": 0.25,
        "note": "1/4 cup finely chopped sweet red pepper"
      },
      {
        "ingredientId": "turkey-bacon",
        "quantity": 2,
        "note": "chopped"
      },
      {
        "ingredientId": "spinach",
        "quantity": 1,
        "note": "fresh baby spinach"
      },
      {
        "ingredientId": "basil",
        "quantity": 3,
        "optional": true,
        "note": "thinly sliced fresh basil"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 2,
        "note": "1/2 cup shredded part-skim"
      }
    ],
    "steps": [
      "Position an oven rack 3-4 inches below the broiler and turn the broiler on. In a bowl, whisk together the egg whites, whole eggs, oregano, garlic powder, salt, and pepper.",
      "Heat the olive oil in an 8-inch ovenproof skillet over medium-high. Add the onion, red pepper, and chopped turkey bacon; cook, stirring, for 4-5 minutes until the onion softens and the bacon is done.",
      "Lower the heat to medium-low and scatter the spinach over the vegetables. Pour in the egg mixture.",
      "As the eggs begin to set, gently push the cooked edges toward the center so the runny egg flows to the pan. Continue until the eggs are almost set.",
      "Off the heat, sprinkle the top with the basil and then the mozzarella.",
      "Broil for 2-3 minutes until the eggs are fully set and the cheese melts. Let rest 5 minutes, then slice into wedges and serve."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a carton of liquid egg whites and use whole eggs sparingly to cut cost while keeping the protein high.",
      "Swap the sweet red pepper for whatever bell pepper is on sale, or use frozen chopped peppers.",
      "Use a block of part-skim mozzarella and shred it yourself instead of buying pre-shredded bags."
    ],
    "substitutions": [
      {
        "forIngredientId": "turkey-bacon",
        "swap": "regular bacon or diced ham",
        "savings": "Often cheaper per slice and adds more flavor."
      },
      {
        "forIngredientId": "liquid-egg-whites",
        "swap": "3 additional whole eggs",
        "savings": "Cheaper than buying a separate egg-white carton."
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "shredded cheddar or a cheese blend",
        "savings": "Use whatever cheese you already have on hand."
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 18,
      "carbs": 5,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-green-100",
    "cuisine": "Italian",
    "tags": [
      "frittata",
      "eggs",
      "spinach",
      "brunch",
      "high-protein",
      "low-carb",
      "vegetarian-adaptable",
      "broiler"
    ]
  },
  {
    "id": "toh-gnocchi-with-white-beans",
    "name": "Gnocchi with White Beans",
    "description": "Pillowy potato gnocchi gets pan-seared until golden, then simmered with creamy cannellini beans, herby tomatoes, and wilted spinach before being blanketed in melty mozzarella and Parmesan. A cozy one-skillet supper that's on the table in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/gnocchi-with-white-beans/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "gnocchi",
        "quantity": 6,
        "note": "potato gnocchi (16 oz package)"
      },
      {
        "ingredientId": "cannellini-beans",
        "quantity": 1,
        "note": "rinsed and drained"
      },
      {
        "ingredientId": "stewed-tomatoes",
        "quantity": 1,
        "note": "Italian-style diced tomatoes, undrained"
      },
      {
        "ingredientId": "spinach",
        "quantity": 6,
        "note": "fresh baby spinach (6 oz)"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 2,
        "note": "shredded part-skim"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 3
      }
    ],
    "steps": [
      "Warm the olive oil in a large skillet over medium-high heat, then add the chopped onion and saute until softened.",
      "Stir in the minced garlic and cook for about a minute until fragrant.",
      "Add the gnocchi and cook, stirring, for 5 to 6 minutes until they turn golden brown.",
      "Mix in the cannellini beans, undrained tomatoes, spinach, and pepper, stirring until the spinach wilts and everything is heated through.",
      "Scatter the mozzarella and Parmesan over the top, cover the skillet, and pull it off the heat.",
      "Let it rest for 3 to 4 minutes so the cheese melts, then serve."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Dried cannellini beans cooked from scratch cost a fraction of canned and freeze well for future batches.",
      "Buy a block of mozzarella and shred it yourself to save money over pre-shredded bags.",
      "Frozen spinach is cheaper than fresh baby spinach; thaw, squeeze dry, and stir in a cup or two."
    ],
    "substitutions": [
      {
        "forIngredientId": "cannellini-beans",
        "swap": "Great Northern or navy beans work just as well",
        "savings": "Use whatever white bean is on sale"
      },
      {
        "forIngredientId": "stewed-tomatoes",
        "swap": "Plain diced tomatoes plus a pinch of Italian herbs",
        "savings": "Often cheaper than seasoned cans"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "Provolone or a mild cheddar blend",
        "savings": "Use up cheese you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 14,
      "carbs": 50,
      "fat": 8,
      "fiber": 6
    },
    "emoji": "🥘",
    "accentColor": "bg-green-100",
    "cuisine": "Italian",
    "tags": [
      "vegetarian",
      "one-pan",
      "gnocchi",
      "white-beans",
      "weeknight",
      "comfort-food",
      "30-minute"
    ]
  },
  {
    "id": "toh-greek-chicken-pasta",
    "name": "Greek Chicken Pasta",
    "description": "Tender penne and shredded rotisserie chicken bathed in a silky onion-butter sauce, then loaded with feta, marinated artichokes, sun-dried tomatoes, and briny Greek olives and broiled until bubbly and golden. A fast, cozy Mediterranean skillet dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/greek-chicken-pasta/",
    "mealType": "dinner",
    "servings": 5,
    "ingredients": [
      {
        "ingredientId": "penne",
        "quantity": 5,
        "note": "2 cups uncooked"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "cubed (1/4 cup)"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "large, chopped"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "all-purpose"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.8,
        "note": "reduced-sodium (14.5 oz can)"
      },
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 3,
        "note": "shredded (3 cups)"
      },
      {
        "ingredientId": "artichoke-hearts",
        "quantity": 1,
        "note": "marinated, quartered, drained (7.5 oz jar)"
      },
      {
        "ingredientId": "feta",
        "quantity": 4,
        "note": "crumbled (1 cup)"
      },
      {
        "ingredientId": "sun-dried-tomatoes",
        "quantity": 0.5,
        "note": "oil-packed, chopped (1/2 cup)"
      },
      {
        "ingredientId": "kalamata-olives",
        "quantity": 0.3,
        "note": "sliced pitted Greek olives (1/3 cup)"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "note": "minced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Boil the penne in salted water until al dente, then drain and set aside.",
      "While the pasta cooks, melt the butter in a large ovenproof skillet over medium-high heat and saute the chopped onion until soft.",
      "Sprinkle in the flour and stir to coat, then slowly pour in the chicken broth, whisking smooth.",
      "Bring to a boil and cook about 2 minutes, stirring, until the sauce thickens.",
      "Stir in the shredded chicken, drained artichoke hearts, feta, sun-dried tomatoes, and olives until combined.",
      "Fold the drained pasta into the skillet and toss to coat everything in the sauce.",
      "Slide the skillet under the broiler, 3-4 inches from the heat, for 5-7 minutes until bubbly and golden on top.",
      "Scatter minced fresh parsley over the top and serve."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a whole rotisserie chicken and shred it yourself - it is cheaper per ounce than pre-shredded and gives you extra meat for other meals.",
      "Swap the kalamata olives for cheaper canned black olives to cut cost without losing the briny pop.",
      "Use store-brand penne and feta; they perform identically here and shave a dollar or two off the total."
    ],
    "substitutions": [
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "Cooked, shredded chicken breast",
        "savings": "Use leftovers to save buying a whole bird"
      },
      {
        "forIngredientId": "kalamata-olives",
        "swap": "Canned black olives",
        "savings": "About $3 cheaper per jar"
      },
      {
        "forIngredientId": "penne",
        "swap": "Elbow pasta or pasta shells",
        "savings": "Whatever short pasta is on sale"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 38,
      "carbs": 42,
      "fat": 24,
      "fiber": 4
    },
    "emoji": "🍝",
    "accentColor": "bg-sky-100",
    "cuisine": "Greek",
    "tags": [
      "pasta",
      "chicken",
      "mediterranean",
      "feta",
      "skillet",
      "broiled",
      "weeknight",
      "high-protein"
    ]
  },
  {
    "id": "toh-grilled-basil-chicken-and-tomatoes",
    "name": "Grilled Basil Chicken and Tomatoes",
    "description": "Juicy grilled chicken breasts soak up a bright, tangy balsamic-basil marinade, then share the grill with charred plum tomatoes for a light, summery dinner that comes together fast. The reserved marinade doubles as a fresh, herby sauce drizzled over the top. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/grilled-basil-chicken-and-tomatoes/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "balsamic",
        "quantity": 12,
        "note": "3/4 cup balsamic vinegar"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 4,
        "note": "tightly packed fresh basil leaves"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "tomato",
        "quantity": 8,
        "note": "plum tomatoes; 4 for marinade, 4 halved for grilling"
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 4,
        "note": "boneless skinless breast halves, about 4 oz each"
      }
    ],
    "steps": [
      "Make the marinade: add the balsamic vinegar, basil, olive oil, minced garlic, and salt to a blender.",
      "Quarter 4 of the tomatoes, add them to the blender, and blend until smooth. Halve the remaining 4 tomatoes and set aside for grilling.",
      "Put the chicken in a bowl with about two-thirds cup of the marinade, cover, and chill in the fridge for 1 hour, turning now and then. Set the rest of the marinade aside for serving.",
      "Drain the chicken and toss out the used marinade. Heat a grill to medium and lightly oil the rack.",
      "Grill the chicken covered, 4-6 minutes per side, until it reaches 165F internally.",
      "Grill the halved tomatoes covered, 2-4 minutes per side, just until lightly charred.",
      "Serve the chicken and tomatoes drizzled with the reserved fresh marinade."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a larger pack of chicken breasts and freeze what you don't use; per-pound cost drops sharply over single portions.",
      "Use plain balsamic vinegar instead of pricey aged bottles here since it gets blended with herbs and tomatoes anyway.",
      "Swap fresh basil for 1 teaspoon dried basil to save money when fresh herbs are out of season."
    ],
    "substitutions": [
      {
        "forIngredientId": "basil-fresh",
        "swap": "1 tsp dried basil",
        "savings": "~$2 vs a fresh herb bunch"
      },
      {
        "forIngredientId": "chicken-breast",
        "swap": "boneless skinless chicken thighs",
        "savings": "about $0.20 per serving"
      },
      {
        "forIngredientId": "tomato",
        "swap": "grape or cherry tomatoes (grill on skewers)",
        "savings": "use up cheaper seasonal tomatoes"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 28,
      "carbs": 12,
      "fat": 8,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "grilled",
      "chicken",
      "summer",
      "low-carb",
      "high-protein",
      "gluten-free",
      "dairy-free",
      "balsamic",
      "basil",
      "tomatoes",
      "quick"
    ]
  },
  {
    "id": "toh-grilled-beef-blue-cheese-sandwiches",
    "name": "Grilled Beef & Blue Cheese Sandwiches",
    "description": "Crisp, golden sourdough hugs a tangy cream-and-blue-cheese spread, piled high with savory deli roast beef and sharp red onion, then griddled until melty. It's a steakhouse-worthy melt you can pull together in minutes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/grilled-beef-blue-cheese-sandwiches/",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "cream-cheese",
        "quantity": 4,
        "note": "softened, ~2 oz"
      },
      {
        "ingredientId": "blue-cheese",
        "quantity": 2,
        "note": "crumbled, ~2 oz"
      },
      {
        "ingredientId": "sourdough",
        "quantity": 8
      },
      {
        "ingredientId": "deli-roast-beef",
        "quantity": 12,
        "note": "thinly sliced, ~3/4 lb"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 4,
        "note": "for brushing the outsides"
      }
    ],
    "steps": [
      "Stir the softened cream cheese and crumbled blue cheese together in a small bowl until smooth and well combined.",
      "Spread the cheese mixture evenly across all 8 slices of sourdough.",
      "Pile roast beef and thin red onion slices onto 4 of the slices, then cap each with a remaining bread slice, cheese-side down.",
      "Lightly brush the outer faces of each sandwich with olive oil.",
      "Set a large skillet over medium heat and griddle the sandwiches until deeply golden, about 4 to 5 minutes per side.",
      "Flip carefully, finish the second side, then slice and serve warm."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a small wedge of blue cheese and crumble it yourself instead of pre-crumbled tubs to cut cost.",
      "Roast beef from the deli counter is often cheaper per ounce than pre-packaged slices, and you can ask for it sliced thin.",
      "Use butter or any neutral oil you already have on hand in place of olive oil for griddling."
    ],
    "substitutions": [
      {
        "forIngredientId": "blue-cheese",
        "swap": "blue-cheese-dressing spread thin, or extra cream cheese with a pinch of salt for a milder melt",
        "savings": "~$1 per batch"
      },
      {
        "forIngredientId": "deli-roast-beef",
        "swap": "deli corned beef or thinly sliced leftover steak",
        "savings": "varies"
      },
      {
        "forIngredientId": "sourdough",
        "swap": "any sturdy sandwich bread or rye",
        "savings": "~$1 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 30,
      "carbs": 38,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🥪",
    "accentColor": "bg-sky-100",
    "cuisine": "American",
    "tags": [
      "sandwich",
      "grilled",
      "beef",
      "blue-cheese",
      "quick",
      "lunch",
      "comfort-food"
    ]
  },
  {
    "id": "toh-grilled-cheese-and-mushroom-sandwich",
    "name": "Mushroom Grilled Cheese",
    "description": "A loaded, melty grilled cheese where crisped golden portobellos meet a four-cheese blend of brie, sharp cheddar, jack, and nutty gruyere, all tucked between buttery toasted sourdough with a hit of fresh thyme. The outside gets a Parmesan-mayo schmear so it fries up extra crunchy and savory. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/grilled-cheese-and-mushroom-sandwich/",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "softened, divided"
      },
      {
        "ingredientId": "portobello",
        "quantity": 4,
        "note": "gills removed and sliced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3
      },
      {
        "ingredientId": "parmesan",
        "quantity": 3,
        "note": "finely shredded (Manchego or Parmesan)"
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 0.125
      },
      {
        "ingredientId": "sourdough",
        "quantity": 8
      },
      {
        "ingredientId": "brie",
        "quantity": 0.5,
        "note": "rind removed and sliced"
      },
      {
        "ingredientId": "sharp-cheddar",
        "quantity": 2,
        "note": "shredded white cheddar, ~1/2 cup"
      },
      {
        "ingredientId": "colby-jack",
        "quantity": 2,
        "note": "stand-in for Monterey Jack, ~1/2 cup shredded"
      },
      {
        "ingredientId": "gruyere",
        "quantity": 2,
        "note": "shredded, ~1/2 cup"
      },
      {
        "ingredientId": "thyme-fresh",
        "quantity": 5,
        "note": "minced, ~2 tsp",
        "optional": true
      }
    ],
    "steps": [
      "Heat the olive oil with 2 tablespoons of the butter in a large cast-iron or heavy skillet over medium-high. Lay the sliced portobellos in a single layer and cook 10 to 12 minutes, flipping once, until deeply golden and crisping at the edges. Season with the salt and pepper, then transfer out and wipe the pan clean.",
      "Spread 3 tablespoons of softened butter over one side of each sourdough slice. Working in batches, toast the slices buttered-side down in the same pan over medium-low for 2 to 3 minutes, until golden, then set aside.",
      "Toss the shredded cheddar, jack, and gruyere together in a bowl. In a second bowl, stir together the remaining 3 tablespoons softened butter, the mayonnaise, the Parmesan, and the onion powder to make the outer spread.",
      "Pile the mushrooms onto the toasted side of four bread slices. Scatter the thyme over them and lay the sliced brie on top, then blanket evenly with the shredded cheese blend.",
      "Cap each with a remaining bread slice, toasted side facing in. Spread the Parmesan-mayo mixture over both outer faces of every sandwich.",
      "Return the sandwiches to the skillet over medium-low and cook about 5 to 6 minutes per side, until the bread is crisp and golden and the cheese is fully melted. Serve hot."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Skip the four-cheese spread and use whatever block cheese you have on hand-a good melting cheddar alone still makes a great sandwich for a fraction of the cost.",
      "Swap the portobellos for cheaper cremini or button mushrooms; they shrink down and crisp up just as nicely.",
      "Use regular sandwich bread instead of sourdough and brush with plain butter to cut the per-serving cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "brie",
        "swap": "camembert or extra shredded cheddar",
        "savings": "save on a whole brie wheel"
      },
      {
        "forIngredientId": "gruyere",
        "swap": "swiss or emmental cheese",
        "savings": "about half the price of gruyere"
      },
      {
        "forIngredientId": "portobello",
        "swap": "cremini or button mushrooms",
        "savings": "roughly 60% cheaper per cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 720,
      "protein": 24,
      "carbs": 42,
      "fat": 52,
      "fiber": 3
    },
    "emoji": "🧀",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "grilled cheese",
      "sandwich",
      "mushroom",
      "vegetarian",
      "comfort food",
      "cheesy",
      "lunch"
    ]
  },
  {
    "id": "toh-grilled-huli-huli-chicken",
    "name": "Grilled Huli Huli Chicken",
    "description": "Juicy grilled chicken thighs soaked in a sweet-and-savory Hawaiian-style glaze of brown sugar, soy, ketchup, ginger and garlic, then charred over the grill and brushed with reserved marinade for a sticky, caramelized finish. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/grilled-huli-huli-chicken/",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "packed"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 12
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 12
      },
      {
        "ingredientId": "dry-sherry",
        "quantity": 5,
        "note": "or substitute chicken broth"
      },
      {
        "ingredientId": "ginger",
        "quantity": 2.5,
        "note": "fresh, minced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1.5,
        "note": "minced"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 24,
        "note": "boneless skinless, about 6 lbs"
      }
    ],
    "steps": [
      "Whisk the brown sugar, ketchup, soy sauce, sherry, ginger and garlic together in a bowl until smooth.",
      "Set aside about 1 1/3 cups of the mixture for basting, then cover and chill it separately.",
      "Split the rest of the marinade between two shallow dishes and add 12 chicken thighs to each, turning to coat fully.",
      "Cover and refrigerate the chicken to marinate, ideally overnight but no longer; even a short soak while the grill heats adds flavor.",
      "Lift the chicken from the marinade and discard the used marinade.",
      "Grill covered over medium heat on an oiled grate, 6 to 8 minutes per side, until the internal temperature hits 170 degrees F.",
      "Brush with the reserved marinade during the final 5 minutes for a glossy, caramelized coating, then serve."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy bone-in thighs and debone them yourself, or use chicken leg quarters, to cut the meat cost significantly.",
      "Swap the sherry for chicken broth, which the recipe already allows and costs far less.",
      "Make a double batch of the glaze and freeze half so your next cookout is even cheaper."
    ],
    "substitutions": [
      {
        "forIngredientId": "dry-sherry",
        "swap": "chicken broth",
        "savings": "Pantry staple, no special bottle needed"
      },
      {
        "forIngredientId": "low-sodium-soy",
        "swap": "regular soy sauce (use a touch less)",
        "savings": "$0.04/tbsp cheaper"
      },
      {
        "forIngredientId": "ginger",
        "swap": "ground ginger (use about 1/3 the amount)",
        "savings": "Avoids buying fresh root"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 38,
      "carbs": 22,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🍗",
    "accentColor": "bg-orange-100",
    "cuisine": "Hawaiian",
    "tags": [
      "grilled",
      "chicken",
      "hawaiian",
      "bbq",
      "marinade",
      "high-protein",
      "dairy-free",
      "crowd-pleaser",
      "summer"
    ]
  },
  {
    "id": "toh-grilled-ribeye-with-garlic-blue-cheese-mustard-sauce",
    "name": "Grilled Ribeye with Garlic Blue Cheese Mustard Sauce",
    "description": "Juicy grilled ribeye steaks crowned with a velvety, tangy blue cheese and Dijon cream sauce kissed with garlic. A steakhouse-worthy dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/grilled-ribeye-with-garlic-blue-cheese-mustard-sauce/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "half-and-half",
        "quantity": 4
      },
      {
        "ingredientId": "dijon",
        "quantity": 24
      },
      {
        "ingredientId": "blue-cheese",
        "quantity": 1.17
      },
      {
        "ingredientId": "garlic",
        "quantity": 1
      },
      {
        "ingredientId": "ribeye",
        "quantity": 4
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      }
    ],
    "steps": [
      "In a small saucepan over medium heat, whisk together the half-and-half, Dijon, 1/4 cup of the blue cheese, and minced garlic.",
      "Bring the sauce to a gentle simmer, then drop the heat to low and let it reduce, whisking now and then, until it thickens to about half its volume.",
      "While the sauce cooks, coat both ribeyes with olive oil and season all over with salt and pepper.",
      "Grill the steaks covered over high direct heat on a greased rack, 4 to 6 minutes per side, until they hit your preferred doneness (135 degrees for medium-rare, 140 for medium, 145 for medium-well).",
      "Pull the steaks off the grill and rest them for 10 minutes while the sauce finishes reducing.",
      "Spoon the reduced sauce over the steaks and finish with the remaining 2 teaspoons of crumbled blue cheese."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Swap ribeye for a thriftier cut like sirloin or flat-iron steak; the rich sauce makes any cut taste premium.",
      "Blue cheese is the priciest sauce component, so buy a small wedge and crumble only what you need rather than a pre-crumbled tub.",
      "No grill? A cast-iron skillet over high heat gives a great sear and saves on charcoal or gas."
    ],
    "substitutions": [
      {
        "forIngredientId": "ribeye",
        "swap": "Use sirloin or flat-iron steak instead of ribeye",
        "savings": "~$3-4 per serving"
      },
      {
        "forIngredientId": "blue-cheese",
        "swap": "Substitute gorgonzola for a similar tangy blue flavor",
        "savings": "minimal"
      },
      {
        "forIngredientId": "half-and-half",
        "swap": "Use heavy cream thinned with a splash of milk",
        "savings": "minimal"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 42,
      "carbs": 6,
      "fat": 47,
      "fiber": 0
    },
    "emoji": "🥩",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "steak",
      "grilled",
      "blue-cheese",
      "high-protein",
      "date-night",
      "gluten-free",
      "low-carb"
    ]
  },
  {
    "id": "toh-haddock-with-lime-cilantro-butter",
    "name": "Haddock with Lime-Cilantro Butter",
    "description": "Flaky broiled haddock fillets crowned with a bright, herby butter spiked with fresh lime and cilantro — a fast, restaurant-worthy dinner that comes together in 15 minutes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/haddock-with-lime-cilantro-butter/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "haddock-fillet",
        "quantity": 4,
        "note": "about 6 oz each"
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
        "ingredientId": "butter",
        "quantity": 3,
        "note": "melted"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "lime-juice-bottled",
        "quantity": 1
      },
      {
        "ingredientId": "lime-zest",
        "quantity": 1,
        "note": "grated"
      }
    ],
    "steps": [
      "Position an oven rack 4-5 inches below the broiler and turn the broiler on to preheat.",
      "Pat the haddock fillets dry and season both sides with the salt and pepper.",
      "Lay the fillets on a greased broiler pan or foil-lined sheet.",
      "Broil until the fish turns opaque and flakes easily with a fork, about 5-6 minutes.",
      "While the fish cooks, stir together the melted butter, minced cilantro, lime juice, and lime zest in a small bowl.",
      "Spoon the lime-cilantro butter over the hot fillets and serve right away."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Swap haddock for frozen cod or tilapia fillets to cut the cost per serving by more than half.",
      "Use a fresh lime for both the juice and zest instead of bottled juice — one lime covers this recipe and adds brighter flavor.",
      "Buy fish on sale and freeze it; broiling works fine on fillets thawed straight from the freezer."
    ],
    "substitutions": [
      {
        "forIngredientId": "haddock-fillet",
        "swap": "frozen cod or tilapia fillets",
        "savings": "~$3 per serving"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter for a dairy-free version",
        "savings": "about the same"
      },
      {
        "forIngredientId": "lime-juice-bottled",
        "swap": "juice from one fresh lime (also gives you the zest)",
        "savings": "saves a pantry buy"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 32,
      "carbs": 1,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🐟",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "seafood",
      "fish",
      "broiled",
      "quick",
      "low-carb",
      "keto-friendly",
      "weeknight",
      "lime",
      "cilantro"
    ]
  },
  {
    "id": "toh-ham-egg-wraps",
    "name": "Ham & Egg Wraps",
    "description": "Fluffy Dijon-spiked scrambled eggs studded with savory ham and fresh green onion, all bundled into warm flour tortillas for a fast, protein-packed handheld meal. Ready in 20 minutes, it's the kind of breakfast that works just as well for a grab-and-go lunch. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/ham-egg-wraps/",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "scallion",
        "quantity": 2
      },
      {
        "ingredientId": "dijon",
        "quantity": 3
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
        "ingredientId": "butter",
        "quantity": 0.67
      },
      {
        "ingredientId": "ham",
        "quantity": 4,
        "note": "deli ham, cut into strips"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 4,
        "note": "8-inch flour, warmed"
      }
    ],
    "steps": [
      "Whisk the eggs together with the sliced green onion, Dijon, salt, and pepper until well blended.",
      "Melt the butter in a large skillet over medium heat, then add the ham strips and stir for 1-2 minutes until lightly browned.",
      "Pour the egg mixture into the skillet and cook, stirring, until the eggs are set and no runny liquid remains.",
      "Pull the pan off the heat and divide the scramble into four equal portions.",
      "Spoon one portion down the center of each warm tortilla.",
      "Fold the bottom edge up over the filling, then fold in both sides to close into a wrap and serve."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a ham steak and cube it yourself instead of pre-sliced deli ham to cut the per-ounce cost.",
      "Eggs are the cheapest protein here, so stretch the filling with an extra egg or two if feeding more.",
      "Skip the Dijon and use plain yellow mustard, which costs a fraction as much per teaspoon."
    ],
    "substitutions": [
      {
        "forIngredientId": "ham",
        "swap": "Diced ham steak or leftover cooked bacon",
        "savings": "~$0.15 per serving with a ham steak"
      },
      {
        "forIngredientId": "dijon",
        "swap": "Yellow mustard",
        "savings": "~$0.06 per tsp"
      },
      {
        "forIngredientId": "butter",
        "swap": "Neutral cooking oil or non-stick spray",
        "savings": "a few cents per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 310,
      "protein": 19,
      "carbs": 22,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🌯",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "breakfast",
      "high-protein",
      "quick",
      "eggs",
      "wrap",
      "ham",
      "handheld",
      "under-30-minutes"
    ]
  },
  {
    "id": "toh-ham-veggie-casserole",
    "name": "Ham & Veggie Casserole",
    "description": "Tender broccoli and cauliflower get folded into a velvety sharp cheddar-Parmesan sauce with chunks of savory ham, then crowned with buttery toasted crumbs for crunch. It's a cozy, protein-packed one-dish dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/ham-veggie-casserole/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "frozen-broccoli",
        "quantity": 5,
        "note": "16 oz frozen florets, cooked and drained"
      },
      {
        "ingredientId": "cauliflower",
        "quantity": 1,
        "note": "stand-in for 16 oz frozen florets, cooked and drained"
      },
      {
        "ingredientId": "butter",
        "quantity": 2.67,
        "note": "divided: 2 tsp for crumbs, 2 tbsp for sauce"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.25,
        "note": "seasoned"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "all-purpose, 2 tbsp"
      },
      {
        "ingredientId": "two-percent-milk",
        "quantity": 1.5
      },
      {
        "ingredientId": "sharp-cheddar",
        "quantity": 3,
        "note": "shredded, about 3/4 cup"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "ham-steak",
        "quantity": 8,
        "note": "fully cooked, cubed"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      }
    ],
    "steps": [
      "Heat the oven to 425F. Cook the frozen broccoli and cauliflower per their package directions, then drain well.",
      "Melt 2 teaspoons of the butter in a small skillet over medium heat. Stir in the bread crumbs and toast, stirring, until golden, about 2-3 minutes. Set aside off the heat.",
      "In a large saucepan, melt the remaining butter over medium heat. Whisk in the flour until smooth, then slowly pour in the milk while whisking.",
      "Bring the sauce to a boil, stirring constantly, and cook 1-2 minutes until thickened.",
      "Off the heat, stir in the cheddar and Parmesan until melted and smooth. Fold in the ham, pepper, and drained vegetables.",
      "Spoon everything into a greased 8-inch square baking dish and scatter the toasted crumbs over the top.",
      "Bake uncovered for 10-15 minutes, until hot and bubbly. Serve warm."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a ham steak or use leftover holiday ham instead of deli cubes to cut the cost per ounce.",
      "Grab whichever frozen vegetable is on sale; a single bag of mixed broccoli-cauliflower works just as well.",
      "Shred a block of cheddar yourself instead of buying pre-shredded; it melts smoother and costs less per ounce."
    ],
    "substitutions": [
      {
        "forIngredientId": "ham-steak",
        "swap": "Use cooked rotisserie chicken or cubed turkey",
        "savings": "Often cheaper if using leftovers"
      },
      {
        "forIngredientId": "sharp-cheddar",
        "swap": "Any melting cheese like Colby, Monterey Jack, or Gruyere",
        "savings": "Use whatever block is on sale"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Crushed crackers or panko tossed with a pinch of seasoning"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 26,
      "carbs": 22,
      "fat": 19,
      "fiber": 5
    },
    "emoji": "🥦",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "casserole",
      "comfort-food",
      "ham",
      "cheesy",
      "vegetable",
      "one-dish",
      "weeknight",
      "baked"
    ]
  },
  {
    "id": "toh-hearty-pork-chops",
    "name": "Hearty Pork Chops",
    "description": "Juicy bone-in pork chops soaked in a sweet-and-savory marinade of lemon-lime soda, soy sauce, and honey, then grilled until caramelized and tender. A weeknight-easy main with a punch of herby flavor. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/hearty-pork-chops/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "lemon-lime-soda",
        "quantity": 0.67,
        "note": "diet"
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 8
      },
      {
        "ingredientId": "honey",
        "quantity": 4
      },
      {
        "ingredientId": "dried-thyme",
        "quantity": 1
      },
      {
        "ingredientId": "dried-rosemary",
        "quantity": 0.75,
        "note": "crushed"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 6,
        "note": "bone-in loin, 3/4 inch thick"
      }
    ],
    "steps": [
      "In a large resealable bag or bowl, stir together the lemon-lime soda, soy sauce, honey, thyme, rosemary, and pepper.",
      "Add the pork chops, seal, and turn to coat them evenly in the marinade.",
      "Refrigerate at least 4 hours, ideally overnight, to let the flavors penetrate.",
      "Remove the chops and discard the used marinade. Lightly oil your grill grate or broiler rack.",
      "Grill covered over medium heat (or broil about 4 inches from the heat) for 4-5 minutes per side, until the internal temperature reaches 145 degrees F.",
      "Rest the chops for 5 minutes before serving so the juices redistribute."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole bone-in pork loin and cut your own chops to save over pre-cut ones.",
      "Regular soy sauce works fine in place of reduced-sodium; just skip any added salt.",
      "Marinate in a bowl with a plate on top instead of buying resealable bags."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon-lime-soda",
        "swap": "club soda with a squeeze of lime",
        "savings": "~$0.20"
      },
      {
        "forIngredientId": "honey",
        "swap": "brown sugar or maple syrup",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "pork-chop",
        "swap": "pork tenderloin, sliced into medallions",
        "savings": "~$1.00 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 38,
      "carbs": 14,
      "fat": 12,
      "fiber": 0
    },
    "emoji": "🐖",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "grilled",
      "marinade",
      "high-protein",
      "weeknight",
      "dairy-free"
    ]
  },
  {
    "id": "toh-homemade-chicken-potpie",
    "name": "Homemade Chicken Potpie",
    "description": "A cozy, weeknight-fast chicken potpie with tender chicken and vegetables suspended in a creamy poultry-seasoned gravy, all tucked under a single flaky golden crust. Comfort food that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/homemade-chicken-potpie/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "canola-oil",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "all-purpose"
      },
      {
        "ingredientId": "poultry-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.8,
        "note": "one 14.5-oz can"
      },
      {
        "ingredientId": "two-percent-milk",
        "quantity": 0.75
      },
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 3,
        "note": "about 3 cups cubed cooked chicken"
      },
      {
        "ingredientId": "frozen-veg",
        "quantity": 2,
        "note": "thawed mixed vegetables"
      },
      {
        "ingredientId": "pie-crust",
        "quantity": 1,
        "note": "refrigerated sheet"
      }
    ],
    "steps": [
      "Heat the oven to 450F and set a 9-inch deep-dish pie plate aside, lightly greased.",
      "Warm the canola oil in a large saucepan over medium-high heat, then add the chopped onion and cook, stirring, until softened.",
      "Sprinkle in the flour and poultry seasoning and stir until the onions are coated and no dry flour remains.",
      "Slowly whisk in the chicken broth and milk, then bring to a boil while stirring constantly; keep cooking 2 to 3 minutes until the sauce thickens.",
      "Fold in the cubed cooked chicken and thawed mixed vegetables until everything is evenly coated.",
      "Pour the filling into the prepared pie plate and lay the pie crust over the top.",
      "Trim and crimp the edges to seal, then cut a few slits in the crust to vent steam.",
      "Bake 15 to 20 minutes until the crust is golden and the filling bubbles, then let rest a few minutes before serving."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use leftover or rotisserie chicken instead of cooking it fresh to save money and time.",
      "Buy a bag of frozen mixed vegetables rather than fresh produce; it is cheaper and there is no prep or waste.",
      "A store-brand refrigerated pie crust keeps cost down, or make your own from flour you already have on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "two-percent-milk",
        "swap": "Whole milk or even half-and-half for a richer gravy",
        "savings": "Comparable cost; whole milk is often cheaper"
      },
      {
        "forIngredientId": "pie-crust",
        "swap": "Frozen pie crust or store puff pastry over the filling",
        "savings": "Frozen crust runs about $0.50 less"
      },
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "Cubed cooked chicken breast or canned chicken, drained",
        "savings": "Rotisserie is usually the cheapest cooked option"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 28,
      "carbs": 32,
      "fat": 21,
      "fiber": 3
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "chicken",
      "potpie",
      "weeknight",
      "one-dish",
      "baked",
      "30-minute"
    ]
  },
  {
    "id": "toh-hot-dog-pie",
    "name": "Hot Dog Pie",
    "description": "A cozy, kid-pleasing skillet-to-oven casserole where saucy baked beans, browned beef, and sliced hot dogs meet melty cheese inside a flaky pie crust, all crowned with a golden American-cheese lattice. Comfort food that tastes like a backyard cookout baked into one pan. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/hot-dog-pie/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 2,
        "note": "1/2 lb, browned and drained"
      },
      {
        "ingredientId": "hot-dog",
        "quantity": 4,
        "note": "halved lengthwise and sliced"
      },
      {
        "ingredientId": "baked-beans",
        "quantity": 1,
        "note": "16 oz can"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 8,
        "note": "about 1/2 cup"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2
      },
      {
        "ingredientId": "mustard",
        "quantity": 6,
        "note": "2 tbsp prepared mustard"
      },
      {
        "ingredientId": "processed-cheese-loaf",
        "quantity": 2,
        "note": "Velveeta, cubed"
      },
      {
        "ingredientId": "frozen-pie-crust",
        "quantity": 1,
        "note": "9-inch deep-dish"
      },
      {
        "ingredientId": "american-singles",
        "quantity": 4,
        "note": "cut into strips for lattice"
      }
    ],
    "steps": [
      "Heat the oven to 400 degrees F.",
      "In a large saucepan over medium heat, cook the ground beef until it loses its pink color, then drain off the fat.",
      "Stir in the sliced hot dogs, baked beans, ketchup, brown sugar, mustard, and cubed processed cheese. Keep stirring until the cheese melts into a smooth, saucy filling.",
      "While the filling cooks, prick the bottom of the frozen pie crust all over with a fork and pre-bake it for about 10 minutes.",
      "Spoon the hot beef-and-bean mixture into the par-baked crust.",
      "Slice each American cheese single into four strips and arrange them across the top in a woven lattice pattern.",
      "Return the pie to the oven and bake 5 to 10 minutes more, until the cheese lattice is fully melted. Let rest a few minutes before slicing."
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [],
    "cheapTips": [
      "Hot dogs and baked beans are budget staples, so this whole pie feeds six for just a few dollars.",
      "Swap in store-brand processed cheese and American singles; they melt identically to name brands for less.",
      "Stretch it further by adding an extra can of beans and serving over rice or in buns instead of crust."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey or plant-based crumbles for a lighter or meatless version.",
        "savings": "Turkey often runs cheaper per pound on sale"
      },
      {
        "forIngredientId": "frozen-pie-crust",
        "swap": "Press refrigerated crescent dough or biscuit dough into the pan as the base.",
        "savings": "Crescent dough can be cheaper and is more versatile"
      },
      {
        "forIngredientId": "processed-cheese-loaf",
        "swap": "Melt in shredded cheddar instead of Velveeta for sharper flavor.",
        "savings": "A block of cheddar is cheaper per ounce than Velveeta"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 19,
      "carbs": 38,
      "fat": 27,
      "fiber": 5
    },
    "emoji": "🌭",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "kid-friendly",
      "budget",
      "casserole",
      "hot-dogs",
      "baked-beans",
      "weeknight",
      "family-dinner"
    ]
  },
  {
    "id": "toh-italian-sausage-bean-soup",
    "name": "White Bean and Sausage Soup",
    "description": "A hearty, rib-sticking Italian soup that simmers savory sausage with creamy white beans, chewy pearl barley, and tender kale in a tomato-flecked broth. It's the kind of one-pot meal that fills the house with sage and rosemary while it cooks low and slow. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/italian-sausage-bean-soup/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "italian-sausage",
        "quantity": 3.5,
        "note": "bulk, casings removed; 1 lb total"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "sliced"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 7,
        "note": "reduced-sodium; ~58 oz"
      },
      {
        "ingredientId": "cannellini-beans",
        "quantity": 2,
        "note": "rinsed and drained; pinto also works"
      },
      {
        "ingredientId": "stewed-tomatoes",
        "quantity": 1,
        "note": "diced tomatoes, undrained"
      },
      {
        "ingredientId": "pearl-barley",
        "quantity": 1,
        "note": "medium pearl barley"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "1 large, sliced"
      },
      {
        "ingredientId": "celery",
        "quantity": 1,
        "note": "1 rib, sliced"
      },
      {
        "ingredientId": "sage-dried",
        "quantity": 0.5,
        "note": "stands in for 1 tsp fresh sage"
      },
      {
        "ingredientId": "rosemary-fresh",
        "quantity": 1,
        "note": "minced; ~1 sprig yields about 1/2 tsp"
      },
      {
        "ingredientId": "kale",
        "quantity": 6,
        "note": "chopped fresh"
      }
    ],
    "steps": [
      "Set a large pot or Dutch oven over medium heat and break up the Italian sausage with the chopped onion, stirring until the meat loses its pink color, about 6 to 7 minutes.",
      "Add the sliced garlic and cook just until fragrant, roughly one minute, then drain off any excess fat.",
      "Pour in the chicken broth, beans, undrained tomatoes, barley, carrot, celery, sage, and rosemary, and bring everything up to a boil.",
      "Lower the heat, cover, and let the soup simmer gently for 45 minutes so the barley softens and the flavors meld.",
      "Stir in the chopped kale and bring the pot back to a boil.",
      "Reduce the heat again, cover, and simmer 25 to 30 minutes more until the vegetables are tender, then serve hot.",
      "Tip: barley keeps soaking up broth as the soup sits, so cook it separately and add it per bowl if you want leftovers to stay brothy."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 90,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy dried cannellini or navy beans and cook a big batch instead of canned to cut the per-bowl cost roughly in half.",
      "Pearl barley is one of the cheapest filling grains around, so lean on it to stretch the pricier sausage further.",
      "Swap in any in-season hardy green like collards or chard for the kale when it's cheaper at your store."
    ],
    "substitutions": [
      {
        "forIngredientId": "italian-sausage",
        "swap": "plant-based-sausage or smoked-sausage",
        "savings": "Plant-based keeps it meat-free; smoked sausage is often cheaper per serving"
      },
      {
        "forIngredientId": "cannellini-beans",
        "swap": "pinto-beans or white-beans",
        "savings": "Pinto and generic white beans run cheaper than cannellini"
      },
      {
        "forIngredientId": "kale",
        "swap": "lacinato-kale or baby-kale",
        "savings": "Lacinato kale is usually about half the price per cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 18,
      "carbs": 34,
      "fat": 12,
      "fiber": 8
    },
    "emoji": "🥣",
    "accentColor": "bg-green-100",
    "cuisine": "Italian",
    "tags": [
      "soup",
      "italian",
      "sausage",
      "white-beans",
      "kale",
      "barley",
      "one-pot",
      "hearty",
      "dinner",
      "high-protein",
      "stovetop"
    ]
  },
  {
    "id": "toh-lemony-chickpeas",
    "name": "Lemony Chickpeas",
    "description": "Tender chickpeas simmered with onion, tomatoes, and broth, then brightened with a hit of fresh lemon zest and juice over fluffy brown rice. A fast, cozy, and budget-friendly vegan dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/lemony-chickpeas/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "brown-rice",
        "quantity": 2,
        "note": "instant; cook per package"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "chickpeas",
        "quantity": 2,
        "note": "rinsed and drained"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "diced tomatoes, undrained"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 1
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 0.5
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 3
      }
    ],
    "steps": [
      "Cook the brown rice according to the package directions and set aside.",
      "While the rice cooks, warm the olive oil in a large skillet over medium heat and saute the chopped onion for 3 to 4 minutes until softened.",
      "Add the chickpeas, tomatoes with their liquid, broth, red pepper flakes, and black pepper. Bring up to a boil.",
      "Lower the heat, cover, and simmer for 10 minutes to let the flavors meld.",
      "Uncover and simmer another 4 to 5 minutes, stirring now and then, until the liquid reduces slightly.",
      "Stir in the lemon zest and lemon juice, then spoon over the cooked rice and serve."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Dried chickpeas cooked from scratch cost a fraction of canned ones if you soak a batch ahead.",
      "Bottled lemon juice is far cheaper than fresh lemons and works perfectly here, with a little zest for aroma.",
      "Buy onions and rice in bulk; they keep for weeks and anchor cheap weeknight dinners."
    ],
    "substitutions": [
      {
        "forIngredientId": "brown-rice",
        "swap": "Plain white rice or couscous",
        "savings": "white rice is cheaper per cup"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "Water with a pinch of salt and a bouillon cube",
        "savings": "saves about $0.50"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "A splash of white vinegar plus extra zest",
        "savings": "vinegar is cheaper and shelf-stable"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 14,
      "carbs": 78,
      "fat": 7,
      "fiber": 11
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mediterranean",
    "tags": [
      "vegan",
      "vegetarian",
      "budget",
      "one-pan",
      "high-fiber",
      "weeknight",
      "plant-based",
      "30-minute"
    ]
  },
  {
    "id": "toh-lemony-tortellini-bacon-salad",
    "name": "Lemony Tortellini Bacon Salad",
    "description": "Tender cheese tortellini and crisp-tender broccoli get tossed in a bright lemon-balsamic mayo dressing, then piled over fresh spring greens and showered with smoky crumbled bacon for a fast, satisfying main-dish salad. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/lemony-tortellini-bacon-salad/",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "tortellini",
        "quantity": 2,
        "note": "frozen cheese tortellini, about 8 oz"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 4,
        "note": "fresh florets"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 12,
        "note": "3/4 cup"
      },
      {
        "ingredientId": "balsamic",
        "quantity": 1
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 0.67,
        "note": "2 tsp"
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 0.75
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "spring-mix",
        "quantity": 1,
        "note": "5 oz package"
      },
      {
        "ingredientId": "bacon",
        "quantity": 4,
        "note": "cooked and crumbled"
      }
    ],
    "steps": [
      "Bring a large saucepan of water to a boil and cook the tortellini per its package timing, dropping the broccoli florets in for the final 5 minutes so they turn crisp-tender.",
      "While the pasta cooks, whisk the mayonnaise, balsamic vinegar, lemon juice, dried oregano, and salt together in a small bowl to make the dressing.",
      "Drain the tortellini and broccoli, then rinse gently under cold water to cool and stop the cooking.",
      "Tip the drained tortellini and broccoli into a large bowl, pour over the dressing, and toss until everything is evenly coated.",
      "Spread the spring mix on plates or a platter, spoon the dressed tortellini and broccoli on top, and finish with the crumbled bacon."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a block of cheese tortellini in bulk and freeze portions; it's cheaper per serving than small fresh packs.",
      "Cook the bacon yourself from a value pack instead of buying pre-cooked bits to cut cost and add more crunch.",
      "Swap the 5 oz spring mix bag for whatever leafy greens are on sale, or use chopped romaine for a budget-friendly base."
    ],
    "substitutions": [
      {
        "forIngredientId": "mayonnaise",
        "swap": "plain Greek yogurt or a yogurt-mayo blend for a lighter, tangier dressing",
        "savings": "Cuts fat and often costs less per serving"
      },
      {
        "forIngredientId": "bacon",
        "swap": "turkey bacon",
        "savings": "About $0.13 less per slice"
      },
      {
        "forIngredientId": "balsamic",
        "swap": "red wine vinegar with a pinch of sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 14,
      "carbs": 26,
      "fat": 31,
      "fiber": 4
    },
    "emoji": "🥗",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "pasta salad",
      "tortellini",
      "bacon",
      "broccoli",
      "lemon",
      "main-dish salad",
      "quick",
      "20-minute"
    ]
  },
  {
    "id": "toh-mahi-mahi-veggie-skillet",
    "name": "Mahi Mahi & Veggie Skillet",
    "description": "Tender, flaky mahi mahi fillets seared until golden, then nestled over a bright tangle of sweet peppers, mushrooms, and onions simmered in lemon juice. Finished with fresh chives and a scatter of pine nuts, it's a fast, vibrant one-pan dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/mahi-mahi-veggie-skillet/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 3,
        "note": "divided"
      },
      {
        "ingredientId": "mahi-mahi",
        "quantity": 4,
        "note": "6 oz fillets each"
      },
      {
        "ingredientId": "red-bell-pepper",
        "quantity": 3,
        "note": "cut into thick strips"
      },
      {
        "ingredientId": "cremini",
        "quantity": 3,
        "note": "sliced baby portobello, about 1/2 lb"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "large sweet onion, cut into rings"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 5,
        "note": "about 1/3 cup"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "divided"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "chives",
        "quantity": 4,
        "note": "minced fresh, 1/4 cup"
      },
      {
        "ingredientId": "pine-nuts",
        "quantity": 1.5,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Heat 2 tablespoons of the olive oil in a large skillet over medium-high heat.",
      "Add the fish fillets and cook until they flake easily, about 4 to 5 minutes per side, then transfer to a plate.",
      "Pour the remaining oil into the pan and add the peppers, mushrooms, onion, lemon juice, and a quarter teaspoon of the salt.",
      "Cover and cook over medium heat, stirring now and then, until the vegetables soften, 6 to 8 minutes.",
      "Lay the fish back on top of the vegetables and season with the pepper and remaining salt.",
      "Cover and cook about 2 more minutes until everything is heated through.",
      "Scatter chives over the top, add pine nuts if using, and serve."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Swap mahi mahi for frozen salmon fillets, which are usually far cheaper and just as good in this skillet.",
      "Buy whole peppers and onions and slice them yourself instead of pre-cut to cut the cost in half.",
      "Skip the pricey pine nuts or use toasted sunflower seeds for a similar crunch at a fraction of the price."
    ],
    "substitutions": [
      {
        "forIngredientId": "mahi-mahi",
        "swap": "frozen salmon or tilapia fillets",
        "savings": "Save $2-3 per fillet"
      },
      {
        "forIngredientId": "cremini",
        "swap": "white button mushrooms",
        "savings": "Save about $2.50 per pound"
      },
      {
        "forIngredientId": "pine-nuts",
        "swap": "toasted slivered almonds or sunflower seeds",
        "savings": "Save $2+ per portion"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 35,
      "carbs": 12,
      "fat": 19,
      "fiber": 3
    },
    "emoji": "🐟",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "seafood",
      "one-pan",
      "skillet",
      "quick",
      "healthy",
      "weeknight",
      "low-carb",
      "fish"
    ]
  },
  {
    "id": "toh-meatball-submarine-casserole",
    "name": "Meatball Submarine Casserole",
    "description": "All the comfort of a saucy meatball sub baked into a bubbly, cheesy casserole. Toasted garlic-rubbed sourdough soaks up mushroom-studded marinara under a blanket of melty mozzarella and Parmesan. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/meatball-submarine-casserole/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "frozen-meatballs",
        "quantity": 18,
        "note": "fully cooked Italian, 12 oz package"
      },
      {
        "ingredientId": "sourdough",
        "quantity": 4,
        "note": "torn into bite-sized pieces"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.5,
        "note": "for brushing bread"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "clove halved, rubbed on toast then discarded"
      },
      {
        "ingredientId": "marinara",
        "quantity": 1.5,
        "note": "pasta sauce with mushrooms"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 2,
        "note": "part-skim, shredded, divided"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 8,
        "note": "divided"
      }
    ],
    "steps": [
      "Heat the broiler. Cover the meatballs and microwave on high until hot through, about 4 to 6 minutes.",
      "While they heat, lay the sourdough on a baking sheet and brush one side of each slice with olive oil. Broil a few inches from the heat until golden, 1 to 2 minutes.",
      "Rub the toasted bread with the cut side of the garlic, then discard the garlic. Tear the slices into bite-sized chunks and scatter them in a greased 11x7-inch baking dish.",
      "Drop the oven temperature to 350F.",
      "Toss the hot meatballs with the marinara, half the mozzarella, and half the Parmesan until coated.",
      "Spoon the meatball mixture over the bread, then top with the remaining mozzarella and Parmesan.",
      "Bake uncovered until the cheese is melted and bubbly, 15 to 18 minutes. Serve warm."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "microwave"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a bulk bag of frozen meatballs and portion out what you need; the per-piece price drops well below buying fresh.",
      "Use day-old sourdough or any stale bread you have on hand instead of fresh slices to cut waste and cost.",
      "A plain marinara plus a can of cheap mushrooms is far cheaper than a specialty mushroom pasta sauce."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-meatballs",
        "swap": "plant-based-meatballs for a vegetarian version",
        "savings": "none, but makes it meat-free"
      },
      {
        "forIngredientId": "sourdough",
        "swap": "any crusty bread or a torn hoagie roll",
        "savings": "use up bread you already have"
      },
      {
        "forIngredientId": "marinara",
        "swap": "plain tomato-sauce simmered with sauteed mushrooms",
        "savings": "about $0.50 per cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 27,
      "carbs": 34,
      "fat": 26,
      "fiber": 3
    },
    "emoji": "🧆",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "casserole",
      "comfort-food",
      "meatballs",
      "cheesy",
      "weeknight",
      "baked"
    ]
  },
  {
    "id": "toh-mediterranean-omelet",
    "name": "Mediterranean Omelet",
    "description": "A fluffy two-egg omelet folded around tangy feta, juicy tomato, and fresh green onion for a bright, sun-soaked breakfast that comes together in ten minutes flat. Light, savory, and effortlessly elegant. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/mediterranean-omelet/",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "water",
        "quantity": 0.25
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.0625
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "feta",
        "quantity": 1,
        "note": "crumbled; goat cheese also works"
      },
      {
        "ingredientId": "tomato",
        "quantity": 0.3,
        "note": "chopped, about 1/4 cup"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "chopped"
      }
    ],
    "steps": [
      "Whisk the eggs with the water, salt, and pepper until evenly blended.",
      "Melt the butter in a large nonstick skillet over medium-high heat until it coats the pan.",
      "Pour in the egg mixture; the edges should set on contact.",
      "As the eggs cook, gently push the set portions toward the center and tilt the pan so the runny egg flows to the edges.",
      "Keep going until the omelet is thickened and no wet egg remains on top.",
      "Scatter the feta, tomato, and green onion over one half of the omelet.",
      "Fold the empty half over the filling and slide it onto a plate.",
      "Cut in half to serve two."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ],
    "cheapTips": [
      "Buy a block of feta and crumble it yourself; it costs less than pre-crumbled tubs and lasts longer.",
      "Use the white and green parts of the scallion so nothing goes to waste.",
      "Eggs and a pat of butter make this one of the cheapest hot breakfasts you can plate."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "goat cheese (called for in the original) or shredded cheese",
        "savings": "Plain shredded cheese can run cheaper per serving than feta"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter or a splash of olive oil",
        "savings": "Plant butter is a few cents cheaper per tablespoon"
      },
      {
        "forIngredientId": "tomato",
        "swap": "grape tomatoes or sun-dried tomatoes, chopped"
      }
    ],
    "estimatedNutrition": {
      "calories": 250,
      "protein": 16,
      "carbs": 3,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mediterranean",
    "tags": [
      "omelet",
      "eggs",
      "breakfast",
      "vegetarian",
      "quick",
      "feta",
      "low-carb",
      "high-protein"
    ]
  },
  {
    "id": "toh-mediterranean-pork-and-orzo",
    "name": "Mediterranean Pork and Orzo",
    "description": "Tender peppered pork tenderloin tossed with orzo, wilted baby spinach, juicy grape tomatoes, and salty feta for a bright, fast Mediterranean dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/mediterranean-pork-and-orzo/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pork-tenderloin",
        "quantity": 24
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 1,
        "note": "coarsely ground"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "water",
        "quantity": 12
      },
      {
        "ingredientId": "orzo",
        "quantity": 6
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "spinach",
        "quantity": 5,
        "note": "fresh baby spinach"
      },
      {
        "ingredientId": "grape-tomatoes",
        "quantity": 1,
        "note": "halved"
      },
      {
        "ingredientId": "feta",
        "quantity": 3,
        "note": "crumbled"
      }
    ],
    "steps": [
      "Coat the pork tenderloin all over with the coarse black pepper, then cut it into 1-inch cubes.",
      "Warm the olive oil in a large nonstick skillet over medium heat. Add the pork and cook, stirring, until no longer pink, about 8 to 10 minutes.",
      "Meanwhile, bring the water to a boil in a large pot. Add the orzo and salt and cook uncovered for 8 minutes.",
      "Stir the spinach into the orzo and cook just until the pasta is tender and the greens wilt, roughly 1 minute more, then drain well.",
      "Add the halved grape tomatoes to the skillet with the pork and toss until warmed through.",
      "Fold in the drained orzo and spinach along with the crumbled feta, then serve right away."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a whole pork tenderloin and trim it yourself instead of pre-cut cubes to save a few dollars per pound.",
      "Swap feta for the store-brand block and crumble it yourself; it costs less than pre-crumbled tubs.",
      "Use frozen spinach when fresh is pricey or out of season, stirring it in until just heated through."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-tenderloin",
        "swap": "Boneless pork loin or chicken breast, cubed",
        "savings": "Pork loin runs cheaper per pound than tenderloin"
      },
      {
        "forIngredientId": "grape-tomatoes",
        "swap": "Chopped plum or Roma tomatoes cut to grape-tomato size",
        "savings": "Roma tomatoes are usually cheaper by weight"
      },
      {
        "forIngredientId": "feta",
        "swap": "Crumbled goat cheese or shredded Parmesan"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 34,
      "carbs": 36,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🐖",
    "accentColor": "bg-green-100",
    "cuisine": "Mediterranean",
    "tags": [
      "pork",
      "orzo",
      "pasta",
      "mediterranean",
      "quick",
      "weeknight",
      "high-protein",
      "spinach",
      "feta"
    ]
  },
  {
    "id": "toh-mediterranean-turkey-skillet",
    "name": "Mediterranean Turkey Skillet",
    "description": "A bright, one-pan weeknight dinner where lean ground turkey simmers with tender zucchini, sweet banana peppers, black beans, and tomatoes, all finished with a splash of balsamic for tangy depth. Hearty, protein-packed, and on the table in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/mediterranean-turkey-skillet/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "ground-turkey",
        "quantity": 4,
        "note": "lean ground turkey, ~20 oz total"
      },
      {
        "ingredientId": "zucchini",
        "quantity": 2,
        "note": "quartered lengthwise and sliced into half-inch pieces"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "banana-pepper",
        "quantity": 2,
        "note": "seeded and chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 0.5
      },
      {
        "ingredientId": "black-beans",
        "quantity": 1,
        "note": "rinsed and drained"
      },
      {
        "ingredientId": "whole-peeled-tomatoes",
        "quantity": 1,
        "note": "diced tomatoes, undrained; chop if whole"
      },
      {
        "ingredientId": "balsamic",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      }
    ],
    "steps": [
      "Heat the olive oil in a large skillet over medium-high heat.",
      "Add the ground turkey, zucchini, onion, banana peppers, garlic, and oregano. Cook for 10 to 12 minutes, breaking the turkey into crumbles as it browns, until the meat is cooked through and the vegetables soften.",
      "Pour off any excess fat from the pan.",
      "Stir in the black beans, undrained tomatoes, balsamic vinegar, and salt.",
      "Continue cooking, stirring now and then, just until everything is heated through, then serve."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy ground turkey in bulk and freeze portions; it's usually cheaper per pound than the pre-packaged trays.",
      "Swap fresh banana peppers for a few spoonfuls of jarred ones to save money and skip the seeding.",
      "Use dried beans cooked from scratch instead of canned for a fraction of the cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-turkey",
        "swap": "lean ground chicken or 93% lean ground beef",
        "savings": "comparable or cheaper depending on sales"
      },
      {
        "forIngredientId": "banana-pepper",
        "swap": "jarred pepperoncini or a chopped bell pepper",
        "savings": "saves on fresh specialty peppers"
      },
      {
        "forIngredientId": "whole-peeled-tomatoes",
        "swap": "fire-roasted or stewed canned tomatoes",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 250,
      "protein": 25,
      "carbs": 18,
      "fat": 9,
      "fiber": 6
    },
    "emoji": "🦃",
    "accentColor": "bg-red-100",
    "cuisine": "Mediterranean",
    "tags": [
      "one-pan",
      "skillet",
      "high-protein",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "ground-turkey",
      "healthy",
      "30-minute"
    ]
  },
  {
    "id": "toh-moo-shu-mushroom-wraps",
    "name": "Moo Shu Mushroom Wraps",
    "description": "A speedy vegetarian take on moo shu: silky scrambled eggs and tender mushrooms tossed with crisp broccoli slaw in a tangy garlic-ginger-soy sauce, then rolled up in hoisin-smeared tortillas. Fresh, savory, and on the table in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/moo-shu-mushroom-wraps/",
    "mealType": "dinner",
    "servings": 5,
    "ingredients": [
      {
        "ingredientId": "sesame-oil",
        "quantity": 4,
        "note": "divided"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "lightly beaten"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 3,
        "note": "sliced fresh, about 1/2 lb"
      },
      {
        "ingredientId": "coleslaw-mix",
        "quantity": 5,
        "note": "broccoli coleslaw mix, 12 oz"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 2,
        "note": "minced fresh"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2
      },
      {
        "ingredientId": "bean-sprouts",
        "quantity": 1
      },
      {
        "ingredientId": "hoisin",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 10,
        "note": "6-inch flour, warmed"
      },
      {
        "ingredientId": "scallion",
        "quantity": 6,
        "note": "sliced, for serving"
      }
    ],
    "steps": [
      "Heat 1 teaspoon of the sesame oil in a large nonstick skillet over medium heat. Pour in the beaten eggs and scramble until set with no runny liquid left, then scrape them out onto a plate.",
      "Add the remaining oil to the same skillet and raise the heat to medium-high. Cook the sliced mushrooms, stirring, until softened.",
      "Stir in the broccoli slaw, garlic, and ginger; cook just 1 to 2 minutes until the slaw is crisp-tender.",
      "Whisk the rice vinegar, soy sauce, and sriracha together in a small bowl, then pour it into the skillet. Fold in the bean sprouts and reserved eggs and toss until heated through.",
      "Smear about 2 teaspoons of hoisin over each warmed tortilla, leaving a small border at the edge.",
      "Spoon roughly 1/2 cup of the filling onto each tortilla, scatter with sliced green onion, and roll up tightly to serve."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Swap the broccoli coleslaw mix for plain shredded cabbage and a handful of grated carrot to cut the cost without losing crunch.",
      "Buy whole mushrooms and slice them yourself; pre-sliced mushrooms usually carry a markup.",
      "Eggs and cabbage do the heavy lifting here, so this is an inexpensive way to stretch a few tortillas into a full dinner."
    ],
    "substitutions": [
      {
        "forIngredientId": "sesame-oil",
        "swap": "canola or any neutral oil (add a few drops of sesame at the end for aroma)",
        "savings": "~$0.10 per recipe"
      },
      {
        "forIngredientId": "hoisin",
        "swap": "sweet soy sauce or a mix of soy sauce and a little brown sugar",
        "savings": "~$1.00 if you skip buying a hoisin jar"
      },
      {
        "forIngredientId": "coleslaw-mix",
        "swap": "plain shredded cabbage plus shredded carrot",
        "savings": "~$0.50 per recipe"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 12,
      "carbs": 45,
      "fat": 10,
      "fiber": 5
    },
    "emoji": "🌯",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese-American",
    "tags": [
      "vegetarian",
      "wraps",
      "moo-shu",
      "mushroom",
      "quick",
      "weeknight",
      "stir-fry",
      "asian"
    ]
  },
  {
    "name": "Lasagna Cups",
    "id": "toh-muffin-tin-lasagnas",
    "description": "These adorable individual lasagnas use crisp wonton wrappers in place of noodles, layered with creamy ricotta, melty Italian cheese, and zesty marinara for a fun, hand-held twist on the classic. They bake up golden in a muffin tin and make a crowd-pleasing dinner or party snack. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/muffin-tin-lasagnas/",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "lightly beaten"
      },
      {
        "ingredientId": "ricotta",
        "quantity": 3.5,
        "note": "part-skim"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 8,
        "note": "shredded Italian cheese blend, divided"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "for greasing the muffin cups"
      },
      {
        "ingredientId": "wonton-wrappers",
        "quantity": 24
      },
      {
        "ingredientId": "marinara",
        "quantity": 3,
        "note": "garden-style pasta sauce"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "note": "minced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Heat the oven to 375 F. In a mixing bowl, stir together the beaten egg, ricotta, and about 1-1/4 cups of the Italian cheese blend until combined.",
      "Brush 12 muffin cups generously with olive oil, then press a wonton wrapper into each one.",
      "Spoon roughly 1 tablespoon of the ricotta mixture and 1-1/2 tablespoons of marinara into each wrapper.",
      "Set a second wonton wrapper on top of each, turning it 90 degrees from the first and pressing the center down to form a sturdy cup.",
      "Add another layer of ricotta and marinara to each cup, then scatter the remaining cheese blend over the tops.",
      "Bake for 20 to 25 minutes, until the cheese is bubbling and melted.",
      "Let cool a couple of minutes, then garnish with fresh parsley if you like and lift the cups out of the tin."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Wonton wrappers are far cheaper than lasagna noodles and come in big packs, so a single batch costs very little per cup.",
      "Buy a block of mozzarella and shred it yourself instead of pre-shredded blends to cut cost and avoid anti-caking additives.",
      "Use any jarred marinara on sale; a 24 oz jar stretches across all 12 cups with sauce to spare."
    ],
    "substitutions": [
      {
        "forIngredientId": "ricotta",
        "swap": "Blend cottage cheese until smooth for a higher-protein, lower-cost filling",
        "savings": "~$1 per batch"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "Use a single bag of low-moisture mozzarella instead of an Italian blend",
        "savings": "~$0.50 per batch"
      },
      {
        "forIngredientId": "marinara",
        "swap": "Crushed canned tomatoes simmered with garlic and dried herbs",
        "savings": "~$1 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 185,
      "protein": 10,
      "carbs": 16,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "lasagna",
      "muffin-tin",
      "wonton",
      "vegetarian",
      "party-food",
      "appetizer",
      "cheesy",
      "kid-friendly"
    ]
  },
  {
    "id": "toh-one-pot-spinach-beef-soup",
    "name": "Spinach Beef Soup",
    "description": "A hearty one-pot soup where savory browned beef and garlic simmer in a rich tomato-flecked broth, finished with tender bow tie pasta and a flurry of fresh spinach. Cozy, filling, and on the table in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/one-pot-spinach-beef-soup/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 4
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 8,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "stewed-tomatoes",
        "quantity": 2,
        "note": "diced tomatoes with green pepper, celery and onion, undrained"
      },
      {
        "ingredientId": "dried-basil",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pasta",
        "quantity": 4,
        "note": "bow tie / farfalle, uncooked"
      },
      {
        "ingredientId": "spinach",
        "quantity": 4,
        "note": "fresh, coarsely chopped"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 4,
        "note": "for serving",
        "optional": true
      }
    ],
    "steps": [
      "Brown the ground beef with the minced garlic in a large stockpot over medium heat, crumbling the meat as it cooks until no pink remains, about 6 to 8 minutes; drain off the fat.",
      "Pour in the beef broth and undrained tomatoes, then season with basil, oregano, salt and pepper. Bring everything up to a boil.",
      "Add the dry bow tie pasta, return to a boil, and cook uncovered until the pasta is tender, roughly 7 to 9 minutes.",
      "Stir in the chopped spinach and let it wilt into the soup. Ladle into bowls and top with grated Parmesan."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use 80/20 ground beef and drain it well, or stretch the meat with half a can of beans to cut cost per bowl.",
      "Swap the fresh spinach for frozen spinach, which is far cheaper and keeps in the freezer until you need it.",
      "Plain canned diced tomatoes plus a chopped bell pepper and onion stand in for the pricier seasoned variety."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "ground turkey or plant-based ground",
        "savings": "Ground turkey trims a bit of cost and fat; plant-based ground makes it vegetarian"
      },
      {
        "forIngredientId": "pasta",
        "swap": "penne, macaroni, or any small pasta",
        "savings": "Penne runs cheaper per serving than specialty bow ties"
      },
      {
        "forIngredientId": "spinach",
        "swap": "frozen spinach or chopped kale",
        "savings": "Frozen greens cost less and won't wilt in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 22,
      "carbs": 24,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🍲",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "soup",
      "one-pot",
      "beef",
      "pasta",
      "spinach",
      "weeknight",
      "comfort-food",
      "30-minute"
    ]
  },
  {
    "id": "toh-parmesan-chicken-sandwiches",
    "name": "Chicken Parm Sandwich",
    "description": "Crispy Parmesan-breaded chicken cutlets tucked into toasted rolls with melty provolone and warm marinara, this is comfort-food Italian-American in handheld form. Ready in under half an hour and built for a satisfying lunch or easy weeknight dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/parmesan-chicken-sandwiches/",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.5
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "lightly beaten"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.75,
        "note": "seasoned"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 3
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 2,
        "note": "boneless skinless, ~5 oz each, pounded to 1/2-inch"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "sub-rolls",
        "quantity": 2,
        "note": "split, Italian-style"
      },
      {
        "ingredientId": "provolone",
        "quantity": 2
      },
      {
        "ingredientId": "marinara",
        "quantity": 0.333,
        "note": "warmed"
      }
    ],
    "steps": [
      "Set up a breading station: put the flour in one shallow bowl, the beaten egg in another, and stir the breadcrumbs together with the grated Parmesan in a third.",
      "Pound each chicken breast to an even 1/2-inch thickness, then season both sides with the salt and pepper.",
      "Dredge each cutlet in flour and shake off the excess, dip it through the egg, then press it into the Parmesan-breadcrumb mixture to coat fully.",
      "Heat the olive oil in a large skillet over medium heat.",
      "Cook the chicken about 4 to 5 minutes per side, until the crust is golden brown and the chicken is cooked through with no pink inside.",
      "Optionally toast the split rolls for extra crunch and flavor.",
      "Lay a cutlet in each roll, top with a slice of provolone, and spoon the warm marinara over the top before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy chicken breasts in a family pack and freeze in pairs; pounding thin stretches each piece further.",
      "Make your own seasoned breadcrumbs from stale bread plus dried Italian herbs instead of buying a box.",
      "A jar of marinara is cheaper per serving than fresh sauce and keeps for weeks once opened in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "provolone",
        "swap": "mozzarella or any melting cheese you have on hand",
        "savings": "~$0.20/sandwich"
      },
      {
        "forIngredientId": "sub-rolls",
        "swap": "hoagie rolls or hamburger buns",
        "savings": "use what's on sale"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "crushed panko tossed with Italian seasoning",
        "savings": "comparable, crispier crust"
      }
    ],
    "estimatedNutrition": {
      "calories": 640,
      "protein": 48,
      "carbs": 58,
      "fat": 24,
      "fiber": 4
    },
    "emoji": "🥪",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "chicken",
      "sandwich",
      "parmesan",
      "breaded",
      "comfort-food",
      "quick",
      "lunch",
      "dinner"
    ]
  },
  {
    "id": "toh-pork-chops-with-honey-garlic-sauce",
    "name": "Honey-Garlic Pork Chops",
    "description": "Juicy seared bone-in pork chops blanketed in a glossy, tangy-sweet honey-garlic pan sauce that comes together in one skillet. Bright lemon and savory soy balance the honey for a fast weeknight dinner that tastes like more effort than it takes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/pork-chops-with-honey-garlic-sauce/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pork-chop",
        "quantity": 4,
        "note": "bone-in loin, about 6 oz each"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 4
      },
      {
        "ingredientId": "honey",
        "quantity": 4
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      }
    ],
    "steps": [
      "Coat a large skillet with cooking spray and heat over medium.",
      "Sear the pork chops until an instant-read thermometer hits 145F, about 5 to 6 minutes per side.",
      "Transfer the chops to a plate and let them rest 5 minutes so the juices redistribute.",
      "Stir together the lemon juice, honey, soy sauce, and minced garlic, then pour into the same hot pan.",
      "Scrape up the browned bits and simmer over medium heat for 3 to 4 minutes, stirring now and then until the sauce thickens into a glaze.",
      "Loosen with a splash of water if needed, then spoon the sauce over the rested chops (or return them to the pan briefly to coat)."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a value pack of bone-in chops and freeze what you don't use; bone-in cuts are usually cheaper than boneless and stay juicier.",
      "Swap bottled lemon juice for a fresh lemon if you have one on hand for the same bright flavor.",
      "Stretch the meal by serving over rice or with steamed veggies to soak up the extra glaze."
    ],
    "substitutions": [
      {
        "forIngredientId": "low-sodium-soy",
        "swap": "Regular soy sauce or tamari (use a touch less, it is saltier)",
        "savings": "Use what you already have instead of buying low-sodium"
      },
      {
        "forIngredientId": "honey",
        "swap": "Maple syrup or brown sugar dissolved in a splash of water",
        "savings": "Often cheaper per tablespoon than honey"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "Apple cider vinegar or rice vinegar for the acidity",
        "savings": "Pantry staple, no citrus needed"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 30,
      "carbs": 19,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "honey-garlic",
      "one-pan",
      "quick",
      "weeknight",
      "glazed",
      "skillet"
    ]
  },
  {
    "id": "toh-pork-medallions-in-mustard-sauce",
    "name": "Pork Medallions in Mustard Sauce",
    "description": "Tender pork tenderloin medallions are seared until golden, then simmered in a glossy pan sauce of chicken broth, sweet apple juice, and tangy stone-ground mustard. It is a fast, elegant skillet dinner that tastes far fancier than its 30-minute timeline. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/pork-medallions-in-mustard-sauce/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.5,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "apple-juice",
        "quantity": 0.125,
        "note": "concentrate, thawed"
      },
      {
        "ingredientId": "whole-grain-mustard",
        "quantity": 1.5,
        "note": "stone-ground"
      },
      {
        "ingredientId": "pork-tenderloin",
        "quantity": 16,
        "note": "cut into 1/2-inch medallions"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.33
      },
      {
        "ingredientId": "water",
        "quantity": 0.125,
        "note": "cold"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "note": "minced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Whisk together the chicken broth, apple juice concentrate, and mustard in a small bowl and set aside.",
      "Season the pork medallions on both sides with salt and pepper.",
      "Heat the olive oil in a large nonstick skillet over medium-high heat, then sear the pork until browned on both sides and transfer it to a plate.",
      "Add the garlic to the same pan and cook for about a minute, then pour in the broth mixture and scrape up the browned bits from the bottom.",
      "Bring to a boil, then lower the heat and simmer uncovered for 6 to 8 minutes until the liquid reduces to roughly 1/3 cup.",
      "Return the pork to the pan, cover, and cook over low heat for 3 to 4 minutes until it reaches 145 degrees F.",
      "Stir the cornstarch and cold water into a smooth slurry, then mix it into the sauce and boil for 2 minutes until thickened.",
      "Scatter the fresh parsley over the top and serve."
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
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole pork tenderloin when it's on sale and slice it yourself instead of paying for pre-cut medallions.",
      "Regular apple juice works fine in place of pricier concentrate; just simmer the sauce a little longer to concentrate the flavor.",
      "Swap whole-grain mustard for plain yellow mustard to shave the cost without losing much tang."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-tenderloin",
        "swap": "Boneless chicken breast pounded thin",
        "savings": "Often cheaper per pound and just as lean"
      },
      {
        "forIngredientId": "whole-grain-mustard",
        "swap": "Dijon or yellow mustard",
        "savings": "Saves about $0.10 per serving"
      },
      {
        "forIngredientId": "apple-juice",
        "swap": "A splash of apple cider vinegar plus a pinch of sugar",
        "savings": "Uses pantry staples you likely already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 27,
      "carbs": 5,
      "fat": 10,
      "fiber": 0
    },
    "emoji": "🐖",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "skillet",
      "mustard-sauce",
      "quick-dinner",
      "weeknight",
      "high-protein",
      "gluten-free"
    ]
  },
  {
    "id": "toh-pork-potato-supper",
    "name": "Pork and Potatoes",
    "description": "A cozy one-skillet supper where tender slices of pork tenderloin meet earthy mushrooms, garlic, and quartered red potatoes in a savory Worcestershire-spiked broth that thickens into a silky pan gravy, finished with fresh green onions. Comfort food that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/pork-potato-supper/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "divided"
      },
      {
        "ingredientId": "pork-tenderloin",
        "quantity": 16,
        "note": "cut into 1/4-inch slices"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1,
        "note": "sliced fresh"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "potato",
        "quantity": 8,
        "note": "small red potatoes, quartered"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.8,
        "note": "reduced-sodium, divided"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 2
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
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "all-purpose, for thickening"
      },
      {
        "ingredientId": "scallion",
        "quantity": 4,
        "note": "sliced",
        "optional": true
      }
    ],
    "steps": [
      "Melt 1 tablespoon of the butter in a large 12-inch skillet over medium heat. Sear the pork slices about 2 to 4 minutes per side until just cooked through, then transfer them to a plate.",
      "Add the remaining tablespoon of butter to the same skillet over medium-high heat. Saute the mushrooms until nearly tender, then stir in the garlic and cook one more minute.",
      "Add the quartered potatoes, about 1 1/2 cups of the broth, the Worcestershire sauce, salt, and pepper. Bring to a boil, then cover, lower the heat, and simmer 10 to 15 minutes until the potatoes are fork-tender.",
      "Whisk the flour into the remaining broth until smooth, then stir it into the skillet. Bring back to a boil and cook, stirring, until the sauce thickens.",
      "Stir in the sliced green onions, return the pork and any juices to the pan, and warm everything through before serving."
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
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole pork tenderloin and slice it yourself instead of pre-cut cutlets to cut the per-pound cost.",
      "Swap fresh mushrooms for a can of mushrooms or skip them entirely; the dish still works great.",
      "Regular russet or yukon gold potatoes are cheaper than small red potatoes and taste nearly identical here."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-tenderloin",
        "swap": "Use boneless pork chops or pork loin, sliced thin",
        "savings": "~$0.20/oz cheaper with pork loin"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Use veggie broth or water with a bouillon cube",
        "savings": "pennies vs canned broth"
      },
      {
        "forIngredientId": "potato",
        "swap": "Use yukon-gold-potato or russet-potato, quartered",
        "savings": "~$0.05 per potato"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 32,
      "carbs": 34,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "🍖",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "potatoes",
      "one-pan",
      "skillet",
      "comfort-food",
      "weeknight",
      "30-minute"
    ]
  },
  {
    "id": "toh-pork-ramen-stir-fry",
    "name": "Pork Ramen Noodles",
    "description": "Tender strips of pork loin and crisp-tender veggies get tossed with chewy ramen in a savory-sweet soy glaze for a fast weeknight stir-fry that beats takeout. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/pork-ramen-stir-fry/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 4
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 6
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.67
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 1
      },
      {
        "ingredientId": "pork-loin-roast",
        "quantity": 16,
        "note": "boneless loin chops, cut into 1/2-inch strips"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 1,
        "note": "fresh florets"
      },
      {
        "ingredientId": "coleslaw-mix",
        "quantity": 4
      },
      {
        "ingredientId": "bamboo-shoots",
        "quantity": 1,
        "note": "drained"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "ramen",
        "quantity": 2,
        "note": "discard seasoning packets"
      }
    ],
    "steps": [
      "In a small bowl, whisk the soy sauce, ketchup, Worcestershire, sugar, and red pepper flakes into a sauce and set aside.",
      "Heat about 2 teaspoons of the oil in a large skillet over medium-high. Stir-fry the pork strips for 2-3 minutes until no longer pink, then transfer to a plate.",
      "Add the remaining oil and stir-fry the broccoli for about 3 minutes. Toss in the coleslaw mix, bamboo shoots, and garlic and cook 3-4 minutes more until the broccoli is crisp-tender.",
      "Return the pork to the skillet, pour in the sauce, and stir until everything is heated through.",
      "Cook the ramen per package directions without the seasoning packets, then drain.",
      "Add the drained noodles to the skillet and toss to coat everything in the sauce. Serve hot."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Coleslaw mix is a budget shortcut, but shredding your own cabbage and carrots saves even more.",
      "Pork loin roast bought whole and sliced at home is cheaper per ounce than pre-cut chops.",
      "Skip the pricey fresh broccoli and use frozen florets straight from the bag to cut cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-loin-roast",
        "swap": "Boneless chicken breast or thigh strips",
        "savings": "Often on sale cheaper than pork loin"
      },
      {
        "forIngredientId": "bamboo-shoots",
        "swap": "Water chestnuts or extra coleslaw mix",
        "savings": "Saves about $2 a can"
      },
      {
        "forIngredientId": "broccoli",
        "swap": "Frozen broccoli florets",
        "savings": "Cheaper and no waste"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 33,
      "carbs": 45,
      "fat": 17,
      "fiber": 4
    },
    "emoji": "🍜",
    "accentColor": "bg-orange-100",
    "cuisine": "Asian-American",
    "tags": [
      "stir-fry",
      "pork",
      "ramen",
      "noodles",
      "weeknight",
      "quick",
      "skillet"
    ]
  },
  {
    "id": "toh-potato-kielbasa-skillet",
    "name": "Potato Kielbasa Skillet",
    "description": "A hearty one-pan dinner of tender red potatoes and smoky kielbasa tossed in a tangy-sweet mustard glaze, finished with wilted spinach and crispy bacon. Comfort food that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/potato-kielbasa-skillet/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 3,
        "note": "red potatoes, cut into 1-inch pieces"
      },
      {
        "ingredientId": "water",
        "quantity": 0.19,
        "note": "for microwaving potatoes"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 2
      },
      {
        "ingredientId": "dijon",
        "quantity": 3
      },
      {
        "ingredientId": "thyme-fresh",
        "quantity": 2,
        "note": "minced, or substitute dried thyme"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped, about 1/2 cup"
      },
      {
        "ingredientId": "kielbasa",
        "quantity": 3,
        "note": "smoked, cut into 1/4-inch slices"
      },
      {
        "ingredientId": "spinach",
        "quantity": 4,
        "note": "fresh baby spinach"
      },
      {
        "ingredientId": "bacon",
        "quantity": 5,
        "note": "cooked and crumbled"
      }
    ],
    "steps": [
      "Place the cubed red potatoes in a microwave-safe dish with the water, cover, and microwave on high until fork-tender, about 3 to 4 minutes; drain and set aside.",
      "Whisk together the brown sugar, cider vinegar, Dijon mustard, thyme, and pepper in a small bowl to make the glaze.",
      "Heat the olive oil in a large skillet over medium-high heat, then add the chopped onion and sliced kielbasa and saute until the onion softens and turns translucent, 5 to 7 minutes.",
      "Add the drained potatoes and cook, stirring, until they pick up a little color, 3 to 5 minutes.",
      "Pour in the glaze and bring to a boil, then lower the heat and simmer uncovered for 2 minutes, stirring now and then.",
      "Fold in the spinach and stir just until wilted, then mix in the crumbled bacon and serve right away."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "microwave",
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Cook the bacon ahead in big batches and freeze crumbles so you always have a smoky topping on hand.",
      "Skip the bacon entirely and lean on the kielbasa for smoky flavor to trim the cost.",
      "Buy a whole onion instead of pre-chopped and use the rest in other meals this week."
    ],
    "substitutions": [
      {
        "forIngredientId": "kielbasa",
        "swap": "smoked-sausage or andouille-sausage",
        "savings": "roughly the same cost, swaps in what you have"
      },
      {
        "forIngredientId": "thyme-fresh",
        "swap": "1/2 tsp dried thyme",
        "savings": "cheaper and keeps in the pantry"
      },
      {
        "forIngredientId": "apple-cider-vinegar",
        "swap": "white-wine-vinegar or distilled-white-vinegar",
        "savings": "saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 18,
      "carbs": 30,
      "fat": 26,
      "fiber": 4
    },
    "emoji": "🥔",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "one-pan",
      "skillet",
      "kielbasa",
      "potatoes",
      "quick-dinner",
      "comfort-food",
      "30-minute"
    ]
  },
  {
    "id": "toh-quick-nicoise-salad",
    "name": "Tuna Nicoise Salad",
    "description": "A bright, composed French-style salad piling tender potatoes, crisp-cooked green beans, sliced hard-boiled eggs, flaky tuna, and juicy tomatoes over a bed of romaine, all finished with a zesty lemon-spiked oil-and-vinegar dressing. It comes together fast and eats like a full, satisfying meal. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/quick-nicoise-salad/",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "red potatoes, cubed"
      },
      {
        "ingredientId": "green-beans",
        "quantity": 1,
        "note": "trimmed"
      },
      {
        "ingredientId": "italian-dressing",
        "quantity": 8,
        "note": "oil and vinegar style"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "freshly ground"
      },
      {
        "ingredientId": "romaine",
        "quantity": 1,
        "note": "torn, about 6 cups"
      },
      {
        "ingredientId": "hard-boiled-eggs",
        "quantity": 4,
        "note": "sliced"
      },
      {
        "ingredientId": "tuna",
        "quantity": 1.5,
        "note": "light tuna in water, drained"
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "chopped"
      }
    ],
    "steps": [
      "Cube the potatoes, add them to a large saucepan, and cover with water. Bring to a boil, then lower the heat and simmer uncovered until just tender, 8 to 10 minutes.",
      "Drop the trimmed green beans in for the final 3 minutes so they cook through but stay crisp.",
      "Drain everything and plunge the potatoes and beans into ice water to stop the cooking; drain again and pat dry.",
      "Stir together the oil-and-vinegar dressing, lemon zest, and pepper in a small bowl.",
      "Lay a bed of torn romaine across four plates.",
      "Arrange the potatoes, green beans, sliced eggs, tuna, and chopped tomatoes over the greens, keeping the components in separate sections rather than tossing.",
      "Serve the lemon dressing alongside, or drizzle it over the top just before eating."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy canned tuna in water in bulk instead of single-serve pouches; it's the same fish at a fraction of the cost per ounce.",
      "Swap red potatoes for whatever potato is on sale; russets or Yukon golds work just as well once cubed.",
      "Skip bottled dressing and shake together 6 tbsp oil, 2 tbsp vinegar, the lemon zest, and pepper to save money."
    ],
    "substitutions": [
      {
        "forIngredientId": "tuna",
        "swap": "canned salmon or sardines for the same protein punch",
        "savings": "comparable price, more omega-3s"
      },
      {
        "forIngredientId": "italian-dressing",
        "swap": "homemade olive oil + red wine vinegar whisked with the lemon zest",
        "savings": "about $0.50 per batch"
      },
      {
        "forIngredientId": "romaine",
        "swap": "any sturdy lettuce or mixed greens you have on hand",
        "savings": "use up what's in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 22,
      "carbs": 26,
      "fat": 17,
      "fiber": 5
    },
    "emoji": "🥗",
    "accentColor": "bg-green-100",
    "cuisine": "French",
    "tags": [
      "salad",
      "tuna",
      "high-protein",
      "composed-salad",
      "no-oven",
      "light",
      "quick",
      "nicoise"
    ]
  },
  {
    "id": "toh-salmon-veggie-packets",
    "name": "Salmon Veggie Packets",
    "description": "Tender salmon fillets steam alongside crisp yellow peppers and sugar snap peas in their own parchment pouches, finished with a bright squeeze of lemon for a fresh, fuss-free dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/salmon-veggie-packets/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "white-wine",
        "quantity": 4
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "yellow-bell-pepper",
        "quantity": 2,
        "note": "julienned"
      },
      {
        "ingredientId": "snap-peas",
        "quantity": 2,
        "note": "trimmed"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 3,
        "note": "freshly grated"
      },
      {
        "ingredientId": "salmon",
        "quantity": 4,
        "note": "6 oz fillets"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "halved, for serving",
        "optional": true
      }
    ],
    "steps": [
      "Heat the oven to 400 degrees F. Tear four large sheets of parchment or heavy foil (about 18x15 in.) and fold each in half to crease, then unfold.",
      "Whisk 2 tbsp wine, 1 tbsp oil, and a little salt and pepper in a large bowl. Add the julienned peppers and snap peas and toss until coated.",
      "In a small bowl, stir together the remaining wine, oil, the lemon zest, and the rest of the salt and pepper for the salmon.",
      "Open a parchment sheet, set a salmon fillet on one half, drizzle with about 2 tsp of the salmon wine mixture, and pile on a quarter of the vegetables.",
      "Fold the parchment over the fish, then crimp and fold the open edges twice to seal tightly. Repeat to build all four packets and set them on baking sheets.",
      "Bake 12 to 16 minutes, until the salmon flakes easily. Open each packet carefully, letting the steam vent away from you.",
      "Squeeze fresh lemon over the vegetables and serve in the packets."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen salmon fillets are usually cheaper than fresh and work perfectly here once thawed and patted dry.",
      "Skip the white wine and use a splash of broth plus a little white wine vinegar; the dish still steams up bright and flavorful.",
      "Swap the snap peas for whatever crisp vegetable is on sale, like green beans or asparagus, cut to a similar size."
    ],
    "substitutions": [
      {
        "forIngredientId": "white-wine",
        "swap": "Use chicken or vegetable broth with a squeeze of lemon",
        "savings": "~$0.30/recipe"
      },
      {
        "forIngredientId": "yellow-bell-pepper",
        "swap": "Red or orange bell peppers",
        "savings": "same"
      },
      {
        "forIngredientId": "snap-peas",
        "swap": "Trimmed green beans or asparagus",
        "savings": "~$2/recipe"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 34,
      "carbs": 11,
      "fat": 17,
      "fiber": 3
    },
    "emoji": "🐟",
    "accentColor": "bg-sky-100",
    "cuisine": "American",
    "tags": [
      "salmon",
      "seafood",
      "parchment-packet",
      "sheet-pan",
      "low-carb",
      "weeknight",
      "healthy"
    ]
  },
  {
    "id": "toh-saucy-pork-chop-skillet",
    "name": "Saucy Pork Chop Skillet",
    "description": "Tender pan-seared pork loin chops simmered in a savory tomato-beef broth sauce with sweet onion and herbs, then finished with a glossy pan gravy and spooned over fluffy brown rice. A cozy, one-skillet weeknight dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/saucy-pork-chop-skillet/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "brown-rice",
        "quantity": 3,
        "note": "instant brown rice"
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 0.67
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 6,
        "note": "boneless pork loin chops, 6 oz each"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small, sliced"
      },
      {
        "ingredientId": "stewed-tomatoes",
        "quantity": 0.57,
        "note": "about 1 cup canned diced tomatoes"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 1,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "parsley-dried",
        "quantity": 3
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
        "ingredientId": "dried-basil",
        "quantity": 0.125
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 0.125
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "for thickening the sauce"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "to make a flour slurry"
      }
    ],
    "steps": [
      "Cook the brown rice according to its package directions and set aside.",
      "Heat the canola oil in a large nonstick skillet over medium-high heat, then sear the pork chops until browned on both sides and transfer them to a plate.",
      "Add the sliced onion to the drippings and cook, stirring, until softened.",
      "Stir in the tomatoes, beef broth, parsley, salt, pepper, basil, and oregano, then bring to a boil.",
      "Return the chops to the skillet, lower the heat, cover, and simmer until the pork reaches 145F, about 6 to 8 minutes.",
      "Move the pork to a serving plate and keep it warm.",
      "Whisk the flour and water into a smooth slurry, stir it into the sauce, and boil while stirring constantly until thickened, about 2 minutes.",
      "Spoon the sauce over the pork and serve with the brown rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole pork loin and cut your own chops, it's far cheaper per pound than pre-cut boneless chops.",
      "Swap the beef broth for water plus a bouillon cube to trim cost without losing the savory base.",
      "Use regular brown rice instead of instant and cook a big batch ahead, it's cheaper and freezes well."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-chop",
        "swap": "Boneless chicken thighs or breasts",
        "savings": "Often cheaper per pound and just as quick to sear"
      },
      {
        "forIngredientId": "beef-broth",
        "swap": "Chicken broth or bouillon dissolved in water",
        "savings": "Cuts broth cost roughly in half"
      },
      {
        "forIngredientId": "brown-rice",
        "swap": "White rice or egg noodles",
        "savings": "White rice is typically cheaper and cooks faster"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 39,
      "carbs": 33,
      "fat": 13,
      "fiber": 2
    },
    "emoji": "🥩",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "skillet",
      "one-pan",
      "weeknight",
      "comfort-food",
      "rice",
      "30-minute"
    ]
  },
  {
    "id": "toh-skillet-mac-cheese",
    "name": "Skillet Mac and Cheese",
    "description": "A creamy, ultra-melty stovetop mac and cheese made in one skillet with a silky half-and-half roux and gooey processed cheese. Ready in about 25 minutes and endlessly customizable with fresh, peppery toppings. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/skillet-mac-cheese/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "elbow-pasta",
        "quantity": 4,
        "note": "uncooked, about 8 oz / 2 cups; cavatappi or shells also work"
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "all-purpose, about 2 tbsp"
      },
      {
        "ingredientId": "half-and-half",
        "quantity": 6,
        "note": "1.5 cups total"
      },
      {
        "ingredientId": "processed-cheese-loaf",
        "quantity": 12,
        "note": "Velveeta-style, cubed"
      },
      {
        "ingredientId": "arugula",
        "quantity": 0.25,
        "optional": true,
        "note": "fresh, for topping"
      },
      {
        "ingredientId": "grape-tomatoes",
        "quantity": 0.5,
        "optional": true,
        "note": "halved, for topping (cherry tomatoes)"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25,
        "optional": true,
        "note": "coarsely ground, for topping"
      }
    ],
    "steps": [
      "Boil the pasta in well-salted water until just tender, then drain thoroughly and set aside.",
      "In a large heavy or cast-iron skillet, melt the butter over medium heat. Whisk in the flour and cook briefly until smooth with no lumps.",
      "Gradually pour in the half-and-half, whisking constantly until the mixture is smooth.",
      "Bring the sauce to a boil and cook for about 2 minutes, stirring nonstop, until thickened and glossy.",
      "Lower the heat and stir in the cubed cheese until fully melted into a smooth sauce.",
      "Fold in the drained pasta and stir until everything is evenly coated and heated through.",
      "Serve right away, finishing with arugula, halved tomatoes, and cracked black pepper if desired."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Swap the half-and-half for a mix of milk and a splash of cream, or just whole milk, to cut cost without losing creaminess.",
      "Use any short pasta you already have on hand instead of buying a specific shape.",
      "Skip the fresh toppings entirely; the dish is satisfying on its own and the garnishes are purely optional."
    ],
    "substitutions": [
      {
        "forIngredientId": "processed-cheese-loaf",
        "swap": "Use shredded sharp cheddar plus a spoonful of cream cheese for a from-scratch melty sauce",
        "savings": "Often cheaper per ounce and avoids buying a whole cheese loaf"
      },
      {
        "forIngredientId": "half-and-half",
        "swap": "Whole milk with a pat of extra butter",
        "savings": "About half the cost of half-and-half"
      },
      {
        "forIngredientId": "elbow-pasta",
        "swap": "Cavatappi or pasta shells",
        "savings": "Use whatever short pasta is on sale"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 22,
      "carbs": 52,
      "fat": 27,
      "fiber": 2
    },
    "emoji": "🧀",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "mac and cheese",
      "comfort food",
      "one-skillet",
      "vegetarian",
      "quick",
      "pasta",
      "cheesy",
      "weeknight"
    ]
  },
  {
    "id": "toh-skillet-sea-scallops",
    "name": "Seared Scallops",
    "description": "Tender, golden-crusted sea scallops are kissed in a foaming butter-and-oil skillet, then finished with a bright lemon, white wine, and garlic pan sauce. Quick enough for a weeknight yet elegant enough for company. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/skillet-sea-scallops/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallops",
        "quantity": 4
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "white-wine",
        "quantity": 4,
        "note": "or chicken broth"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.33,
        "note": "minced",
        "optional": true
      }
    ],
    "steps": [
      "In a shallow dish, stir the salt into the bread crumbs. Press the scallops into the mixture so both flat sides pick up a light coating, patting gently so it sticks.",
      "Heat the butter and olive oil together in a large skillet over medium-high heat. Swirl the pan as the butter foams to cook off its water and keep the fat from spattering.",
      "Once the fat shimmers, lay the scallops in with space between each one. Sear 90 seconds to 2 minutes per side, until just opaque and barely firm; aim slightly under rather than over.",
      "Transfer the scallops to a plate and keep them warm.",
      "Pour the white wine (or broth), lemon juice, and minced garlic into the same hot pan and bring to a boil, scraping up any browned bits.",
      "Stir in the parsley, spoon the sauce over the scallops, and serve right away."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 5,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy frozen sea scallops and thaw them in the fridge overnight; they often cost far less than fresh and sear just as well once patted dry.",
      "Swap the white wine for chicken broth, which you likely already have on hand, to skip buying a bottle just for a quarter cup.",
      "Use bottled lemon juice and dried parsley if fresh herbs aren't in the budget; the pan sauce still tastes bright."
    ],
    "substitutions": [
      {
        "forIngredientId": "white-wine",
        "swap": "chicken broth for an alcohol-free, lower-cost pan sauce",
        "savings": "skip buying a bottle of wine"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant-butter for a dairy-free sear",
        "savings": "$0.03/tbsp"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "dried parsley (use about 1/3 the amount)",
        "savings": "avoids a fresh-herb bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 21,
      "carbs": 9,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🦪",
    "accentColor": "bg-sky-100",
    "cuisine": "American",
    "tags": [
      "seafood",
      "scallops",
      "seared",
      "pan-sauce",
      "quick",
      "weeknight",
      "high-protein",
      "skillet"
    ]
  },
  {
    "id": "toh-skillet-shepherd-s-pie",
    "name": "The Best Shepherd's Pie",
    "description": "A cozy one-skillet take on shepherd's pie: savory ground beef simmered with sweet corn and peas in a glossy, tangy gravy, then crowned with fluffy mashed potatoes and a blanket of melty cheddar. Comfort food that comes together fast in a single pan. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/skillet-shepherd-s-pie/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef-80-20",
        "quantity": 16,
        "note": "1 lb ground beef"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "chopped, about 1 cup"
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 2,
        "note": "thawed"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 2,
        "note": "thawed"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 3,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced, about 2 tsp"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1
      },
      {
        "ingredientId": "beef-bouillon",
        "quantity": 1,
        "note": "1 tsp granules"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "cold"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "potato",
        "quantity": 4,
        "note": "for 3-1/2 cups mashed, prepared with milk and butter"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 3,
        "note": "3/4 cup shredded"
      }
    ],
    "steps": [
      "Brown the ground beef with the chopped onion in a large skillet over medium heat, breaking the meat into crumbles until no pink remains. Drain off the fat and liquid.",
      "Stir in the corn, peas, ketchup, Worcestershire and garlic. Lower the heat, cover, and let it cook for about 5 minutes.",
      "Whisk the cornstarch, beef bouillon and cold water together in a small cup until smooth, then stir it into the beef. Raise the heat to medium and bring to a boil, stirring until thickened, about 2 minutes.",
      "Stir in the sour cream just until warmed through, keeping the heat gentle so the dairy doesn't boil or curdle.",
      "Spread the mashed potatoes evenly over the filling and scatter the shredded cheddar on top.",
      "Cover and cook until the potatoes are hot and the cheese has melted."
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use store-brand 80/20 ground beef and leftover or instant mashed potatoes to keep the cost down.",
      "Frozen corn and peas are far cheaper than fresh and work perfectly here; buy the big bags and portion out what you need.",
      "A simple bouillon-and-cornstarch slurry stands in for canned gravy, saving money while building rich flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef-80-20",
        "swap": "Swap in ground turkey or lentils",
        "savings": "Ground turkey or a can of lentils trims cost and fat"
      },
      {
        "forIngredientId": "sour-cream",
        "swap": "Use plain Greek yogurt",
        "savings": "Cheaper per ounce and adds protein"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "Buy a block of cheddar and shred it yourself",
        "savings": "Block cheese is cheaper per ounce than pre-shredded"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 27,
      "carbs": 38,
      "fat": 25,
      "fiber": 5
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "comfort-food",
      "one-pan",
      "skillet",
      "ground-beef",
      "weeknight",
      "family-friendly",
      "mashed-potatoes"
    ]
  },
  {
    "id": "toh-skinny-cobb-salad",
    "name": "Skinny Cobb Salad",
    "description": "A lightened-up take on the classic Cobb, this crisp salad layers crunchy slaw and lettuce with cubed chicken, creamy avocado, tangy feta, and smoky turkey bacon, all finished with a cool Greek-yogurt ranch drizzle. It's protein-packed and fresh without feeling heavy. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/skinny-cobb-salad/",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.25,
        "note": "fat-free plain, for dressing"
      },
      {
        "ingredientId": "ranch",
        "quantity": 2,
        "note": "reduced-fat, for dressing"
      },
      {
        "ingredientId": "water",
        "quantity": 0.03,
        "note": "to thin dressing"
      },
      {
        "ingredientId": "coleslaw-mix",
        "quantity": 3
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.4,
        "note": "chopped, about 3 cups"
      },
      {
        "ingredientId": "apple",
        "quantity": 1,
        "note": "large, chopped"
      },
      {
        "ingredientId": "feta",
        "quantity": 2,
        "note": "reduced-fat, crumbled (or blue cheese)"
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 1,
        "note": "cooked and cubed, about 1 cup"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "chopped"
      },
      {
        "ingredientId": "turkey-bacon",
        "quantity": 4,
        "note": "cooked and chopped"
      },
      {
        "ingredientId": "chickpeas",
        "quantity": 1,
        "note": "rinsed and drained"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "small, peeled and cubed"
      }
    ],
    "steps": [
      "In a small bowl, whisk the Greek yogurt and ranch dressing together until smooth, then add cold water a little at a time until it reaches a drizzleable consistency.",
      "Cook the turkey bacon until crisp, then chop it into bite-size pieces and set aside.",
      "Toss the coleslaw mix with the chopped lettuce and spread the greens across four plates.",
      "Lay the cubed chicken, crumbled feta, chopped apple, chickpeas, avocado, turkey bacon, and green onions in tidy rows over the greens.",
      "Drizzle each salad with the yogurt-ranch dressing and serve right away."
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Use shredded rotisserie chicken or leftover cooked chicken instead of cooking a breast from scratch to save money and time.",
      "Buy a whole head of lettuce and shred your own slaw from cabbage and carrots rather than pre-bagged mixes.",
      "Canned chickpeas are one of the cheapest protein boosters here, so don't skip them, they stretch the salad cheaply."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "blue cheese for a sharper, more traditional Cobb flavor",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "chicken-breast",
        "swap": "rotisserie chicken",
        "savings": "about $0.80 per serving"
      },
      {
        "forIngredientId": "turkey-bacon",
        "swap": "regular bacon if you're not watching fat",
        "savings": "comparable"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 24,
      "carbs": 26,
      "fat": 14,
      "fiber": 8
    },
    "emoji": "🥗",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "salad",
      "high-protein",
      "healthy",
      "lunch",
      "cobb",
      "low-carb",
      "quick"
    ]
  },
  {
    "id": "toh-sloppy-joe-biscuit-cups",
    "name": "Sloppy Joe Biscuit Cups",
    "description": "Saucy barbecue beef tucked into golden, flaky biscuit cups and crowned with melty cheddar — these handheld bites turn classic sloppy joes into a fun, mess-free dinner the whole table will grab for. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/sloppy-joe-biscuit-cups/",
    "mealType": "dinner",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 3,
        "note": "lean, 90%"
      },
      {
        "ingredientId": "celery",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely chopped"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "green, finely chopped"
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 8
      },
      {
        "ingredientId": "canned-biscuits",
        "quantity": 10,
        "note": "refrigerated flaky biscuits"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 2
      }
    ],
    "steps": [
      "Heat the oven to 400 F and grease 10 muffin cups.",
      "Brown the ground beef with the chopped celery, onion, and green pepper in a large skillet over medium heat, crumbling the meat as it cooks until no longer pink, about 5-7 minutes; drain off the fat.",
      "Stir in the barbecue sauce, bring to a boil, then lower the heat and let it simmer uncovered for 2 minutes.",
      "Separate the biscuit dough into 10 pieces and flatten each into about a 5-inch round.",
      "Press a round into the bottom and up the sides of each greased muffin cup, then spoon in the beef filling.",
      "Bake until the biscuits turn golden, 9-11 minutes.",
      "Scatter the shredded cheddar over the tops and return to the oven for 1-2 minutes, just until the cheese melts. Serve warm."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a larger value pack of ground beef and freeze portions you don't use for the next batch.",
      "Store-brand refrigerated biscuits and shredded cheese cost noticeably less than name brands with no difference here.",
      "Stretch the filling and trim cost by swapping half the beef for plant-based ground or extra chopped veggies."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey for a leaner, cheaper option",
        "savings": "~$0.25/serving"
      },
      {
        "forIngredientId": "bbq-sauce",
        "swap": "Stir together ketchup with a splash of vinegar, brown sugar, and Worcestershire",
        "savings": "skip buying a bottle"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "Use a block of cheddar and shred it yourself",
        "savings": "~$0.10/oz"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 14,
      "carbs": 18,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "sloppy joe",
      "biscuit cups",
      "ground beef",
      "kid-friendly",
      "weeknight dinner",
      "handheld",
      "comfort food"
    ]
  },
  {
    "id": "toh-smothered-chicken-breasts",
    "name": "Smothered Chicken Breasts",
    "description": "Juicy pan-seared chicken breasts piled high with crispy bacon, sweet caramelized onions, and a melty blanket of Colby-Jack. It's a fast, crowd-pleasing skillet dinner that tastes far more indulgent than its short ingredient list. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/smothered-chicken-breasts/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 4
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "lemon-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 1
      },
      {
        "ingredientId": "bacon",
        "quantity": 8
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "sliced"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "note": "packed"
      },
      {
        "ingredientId": "colby-jack",
        "quantity": 2,
        "note": "shredded"
      }
    ],
    "steps": [
      "Season both sides of the chicken breasts with the salt and lemon-pepper.",
      "Warm the canola oil in a large skillet over medium heat and cook the chicken until cooked through (165F internal), about 6-8 minutes per side. Move it to a plate and keep it warm.",
      "In the same skillet, fry the bacon over medium heat until crisp, then transfer to paper towels. Drain off the fat, leaving about 2 tablespoons in the pan.",
      "Add the sliced onion and brown sugar to the reserved drippings and saute over medium heat until the onions are soft and golden.",
      "Crumble or layer the bacon over each chicken breast, spoon on the caramelized onions, and finish with the shredded Colby-Jack so it melts from the residual heat. Serve right away."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy chicken breasts in a family pack and freeze in pairs - the per-serving cost drops sharply versus single trays.",
      "Bacon ends and pieces cost less than full strips and work perfectly here since you crumble them anyway.",
      "A block of cheese you shred yourself is cheaper per ounce than pre-shredded bags and melts better."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey-bacon",
        "savings": "~$0.13 per slice"
      },
      {
        "forIngredientId": "colby-jack",
        "swap": "colby",
        "savings": "same price, often on sale"
      },
      {
        "forIngredientId": "lemon-pepper",
        "swap": "seasoned-salt",
        "savings": "~$0.21 per tsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 45,
      "carbs": 16,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "chicken",
      "bacon",
      "skillet",
      "comfort-food",
      "quick-dinner",
      "high-protein",
      "weeknight"
    ]
  },
  {
    "id": "toh-southwest-chicken-barley-chowder",
    "name": "Southwest Chicken Barley Chowder",
    "description": "A hearty, creamy one-pot chowder loaded with tender chicken, chewy barley, black beans, and sweet corn, all warmed with taco spices and finished with a swirl of half-and-half. Cozy comfort food with a Southwest kick that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/southwest-chicken-barley-chowder/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 3,
        "note": "cut into 3/4-inch pieces"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "kabocha-squash",
        "quantity": 1.5,
        "note": "stands in for frozen mashed winter squash, thawed"
      },
      {
        "ingredientId": "barley",
        "quantity": 0.75,
        "note": "quick-cooking"
      },
      {
        "ingredientId": "taco-seasoning-2",
        "quantity": 2,
        "note": "reduced-sodium"
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
        "ingredientId": "chicken-broth",
        "quantity": 4,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "black-beans",
        "quantity": 1,
        "note": "rinsed and drained"
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 2
      },
      {
        "ingredientId": "half-and-half",
        "quantity": 4
      },
      {
        "ingredientId": "salsa",
        "quantity": 2
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 8,
        "note": "chopped"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "optional": true,
        "note": "diced, for serving"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for serving"
      }
    ],
    "steps": [
      "Heat the olive oil in a large pot over medium-high. Add the diced chicken and chopped onion, stirring for a couple of minutes until the onion softens.",
      "Stir in the squash, barley, taco seasoning, salt, pepper, and chicken broth. Bring to a boil.",
      "Lower the heat, cover, and simmer for 10 to 12 minutes until the barley is tender.",
      "Stir in the black beans, corn, half-and-half, salsa, and cilantro. Warm through, stirring now and then.",
      "Ladle into bowls and top with diced avocado and chopped tomatoes if you like."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Swap fresh chicken breast for thighs or use rotisserie chicken to save money and add flavor.",
      "Skip the half-and-half and stir in a spoon of sour cream or a splash of milk for a lighter, cheaper finish.",
      "Frozen corn and canned beans are budget pantry staples; buy them in bulk to cut the per-serving cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "kabocha-squash",
        "swap": "Canned pumpkin puree or any mashed winter squash",
        "savings": "Often cheaper and easier to find than fresh squash"
      },
      {
        "forIngredientId": "half-and-half",
        "swap": "Whole milk or a splash of heavy cream thinned with water",
        "savings": "Uses what you already have on hand"
      },
      {
        "forIngredientId": "chicken-breast",
        "swap": "Boneless skinless chicken thighs or leftover rotisserie chicken",
        "savings": "Thighs run cheaper per pound"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 26,
      "carbs": 32,
      "fat": 10,
      "fiber": 7
    },
    "emoji": "🥣",
    "accentColor": "bg-orange-100",
    "cuisine": "Southwestern",
    "tags": [
      "chowder",
      "soup",
      "chicken",
      "barley",
      "one-pot",
      "southwest",
      "black-beans",
      "weeknight",
      "high-protein"
    ]
  },
  {
    "id": "toh-spicy-beef-pepper-stir-fry",
    "name": "Spicy Beef Stir Fry",
    "description": "Tender sirloin strips marinated in ginger and garlic get a quick sear, then meet crisp peppers and onion in a creamy, tangy coconut-lime sauce with a Sriracha kick. Wilted spinach, scallions, and cilantro round out a fast, fiery weeknight skillet. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/spicy-beef-pepper-stir-fry/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sirloin-steak",
        "quantity": 16,
        "note": "cut into thin strips"
      },
      {
        "ingredientId": "ginger",
        "quantity": 3,
        "note": "fresh, minced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced, divided"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "divided"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 0.6,
        "note": "light; about 1 cup"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2
      },
      {
        "ingredientId": "sriracha",
        "quantity": 3,
        "note": "about 1 tbsp"
      },
      {
        "ingredientId": "lime-zest",
        "quantity": 0.5
      },
      {
        "ingredientId": "lime-juice-bottled",
        "quantity": 2
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 2,
        "note": "divided"
      },
      {
        "ingredientId": "red-bell-pepper",
        "quantity": 1,
        "note": "cut into thin strips"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and thinly sliced"
      },
      {
        "ingredientId": "spinach",
        "quantity": 4,
        "note": "fresh baby spinach"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "chopped",
        "optional": true
      }
    ],
    "steps": [
      "Toss the sliced sirloin with the minced ginger, two of the garlic cloves, the pepper, and half the salt. Let it marinate for about 15 minutes.",
      "While the beef rests, whisk together the coconut milk, sugar, Sriracha, lime zest, lime juice, and the remaining salt to make the sauce.",
      "Heat 1 tablespoon of the oil in a large skillet over medium-high. Stir-fry the beef until just cooked through, 2 to 3 minutes, then transfer it to a plate.",
      "Add the remaining oil to the pan and stir-fry the red pepper, red onion, jalapeno, and last garlic clove until crisp-tender, 2 to 3 minutes.",
      "Pour in the coconut sauce and bring it to a simmer.",
      "Return the beef to the pan and add the spinach. Cook, stirring now and then, until the spinach wilts and everything is hot.",
      "Finish with a scatter of scallions and cilantro, then serve."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Swap sirloin for a cheaper cut like flank or skirt steak, or even thin-sliced beef chuck, and slice it thin against the grain to keep it tender.",
      "Bottled lime juice and frozen spinach (thawed and squeezed dry) cut cost without hurting the dish.",
      "Use a regular red bell pepper instead of a 'sweet' one and add a pinch of sugar to the sauce; they're nearly identical for far less money."
    ],
    "substitutions": [
      {
        "forIngredientId": "sirloin-steak",
        "swap": "flank-steak or beef-stew-meat, sliced thin",
        "savings": "Use a cheaper cut to save roughly $2-4 on the dish"
      },
      {
        "forIngredientId": "lime-juice-bottled",
        "swap": "fresh lime (juice and zest from one lime)",
        "savings": "One fresh lime covers both juice and zest"
      },
      {
        "forIngredientId": "sriracha",
        "swap": "chili-garlic-sauce or sweet-chili-sauce for similar heat"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 28,
      "carbs": 16,
      "fat": 19,
      "fiber": 3
    },
    "emoji": "🥩",
    "accentColor": "bg-red-100",
    "cuisine": "Thai-inspired",
    "tags": [
      "stir-fry",
      "spicy",
      "beef",
      "coconut",
      "weeknight",
      "quick",
      "high-protein",
      "dairy-free",
      "gluten-free"
    ]
  },
  {
    "id": "toh-spicy-tomato-pork-chops",
    "name": "Spicy Tomato Pork Chops",
    "description": "Tender boneless pork chops simmered in a smoky, spicy tomato sauce with sweet onion, chili powder, and a kick of red pepper flakes. A fast one-skillet dinner that delivers big flavor with pantry staples. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/spicy-tomato-pork-chops/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 4
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "large, chopped"
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 0.25
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 2
      },
      {
        "ingredientId": "dried-oregano",
        "quantity": 1
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.17
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "note": "crushed"
      }
    ],
    "steps": [
      "Warm the olive oil in a large skillet over medium heat.",
      "Sear the pork chops until browned on each side, then transfer to a plate and keep them warm.",
      "Add the chopped onion to the same skillet and cook, stirring, until softened.",
      "Stir in the tomato sauce, water, chili powder, oregano, Worcestershire, sugar, and red pepper flakes.",
      "Return the pork chops to the skillet and bring the sauce up to a boil.",
      "Lower the heat, cover, and simmer for 15 to 20 minutes until the pork is tender.",
      "Rest off the heat for 5 minutes, then serve the chops spooned with sauce."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole pork loin and slice your own chops to save versus pre-cut boneless chops.",
      "A plain can of tomato sauce plus pantry spices costs a fraction of a jarred simmer sauce.",
      "Onions keep for weeks in a cool, dark spot, so stock up when they're on sale."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-chop",
        "swap": "Boneless chicken thighs or breasts work in the same skillet method.",
        "savings": "Chicken thighs often run cheaper per pound than loin chops."
      },
      {
        "forIngredientId": "red-pepper-flakes",
        "swap": "A dash of hot sauce or cayenne for the same heat.",
        "savings": "Use what's already in your spice rack instead of buying flakes."
      },
      {
        "forIngredientId": "worcestershire",
        "swap": "Soy sauce with a tiny splash of vinegar mimics the savory tang."
      }
    ],
    "estimatedNutrition": {
      "calories": 280,
      "protein": 31,
      "carbs": 8,
      "fat": 13,
      "fiber": 2
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "skillet",
      "spicy",
      "tomato",
      "weeknight",
      "one-pan",
      "gluten-free",
      "high-protein"
    ]
  },
  {
    "id": "toh-spinach-and-feta-stuffed-chicken",
    "name": "Spinach and Feta Stuffed Chicken",
    "description": "Tender chicken thighs rolled around tangy wilted spinach and salty feta, seared golden and finished with a quick pan sauce. It's an easy, restaurant-worthy dinner that comes together in half an hour. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/spinach-and-feta-stuffed-chicken/",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "spinach",
        "quantity": 10,
        "note": "fresh, wilted down"
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 0.5
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.17
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "boneless skinless, pounded thin"
      },
      {
        "ingredientId": "poultry-seasoning",
        "quantity": 0.5
      },
      {
        "ingredientId": "feta",
        "quantity": 0.75,
        "note": "crumbled"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.33
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.75,
        "note": "reduced-sodium"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.33
      }
    ],
    "steps": [
      "Heat the oven to 375F. In a large skillet over medium-high, cook the spinach, stirring, until it wilts down. Mix in the cider vinegar, sugar, and pepper, then set aside to cool slightly.",
      "Pound the chicken thighs thin with a meat mallet and season both sides with poultry seasoning. Spread the spinach mixture and crumbled feta over each thigh.",
      "Roll each thigh up tightly from a long edge and secure with kitchen string.",
      "In an ovenproof skillet, heat the olive oil over medium-high. Sear the rolled chicken on all sides until browned.",
      "Move the skillet to the oven and roast 13 to 15 minutes, until the chicken reaches 170F internally.",
      "Transfer the chicken to a plate and keep warm. Set the skillet back on the stove, add the broth and butter, and bring to a boil while scraping up the browned bits.",
      "Simmer 3 to 5 minutes until the sauce thickens slightly, then spoon over the chicken to serve."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Swap fresh spinach for frozen chopped spinach, thawed and squeezed dry, to cut cost and skip the wilting step.",
      "Buy a larger pack of chicken thighs and freeze the rest; per-pound thighs are one of the cheapest proteins.",
      "Toothpicks work just as well as kitchen string to hold the rolls together."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "Crumbled goat cheese or shredded mozzarella",
        "savings": "Use what you have on hand"
      },
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Pounded boneless chicken breasts",
        "savings": "Often on sale; leaner option"
      },
      {
        "forIngredientId": "apple-cider-vinegar",
        "swap": "White wine vinegar or lemon juice"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 34,
      "carbs": 6,
      "fat": 18,
      "fiber": 2
    },
    "emoji": "🐔",
    "accentColor": "bg-green-100",
    "cuisine": "Mediterranean",
    "tags": [
      "stuffed-chicken",
      "spinach",
      "feta",
      "high-protein",
      "weeknight",
      "low-carb",
      "gluten-free",
      "pan-sauce"
    ]
  },
  {
    "name": "Chicken with Spinach and Mushrooms",
    "id": "toh-spinach-and-mushroom-smothered-chicken",
    "description": "Juicy grilled chicken breasts crowned with melty provolone and a savory tangle of sauteed mushrooms, wilted spinach, and toasty pecans. A fast, lean weeknight dinner that tastes far fancier than its 30-minute prep. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/spinach-and-mushroom-smothered-chicken/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 0.5
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1.75
      },
      {
        "ingredientId": "scallion",
        "quantity": 3
      },
      {
        "ingredientId": "spinach",
        "quantity": 3
      },
      {
        "ingredientId": "pecans",
        "quantity": 0.5
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 4
      },
      {
        "ingredientId": "poultry-seasoning",
        "quantity": 0.5
      },
      {
        "ingredientId": "provolone",
        "quantity": 2
      }
    ],
    "steps": [
      "Heat the olive oil in a large skillet over medium-high. Add the sliced mushrooms and green onions and cook until softened.",
      "Stir in the spinach and chopped pecans, tossing just until the spinach wilts. Pull the pan off the heat and keep the mixture warm.",
      "Season the chicken breasts on both sides with the poultry seasoning.",
      "Grill the chicken, covered, over medium-high heat on an oiled rack until cooked through (165F internal), about 4 to 5 minutes per side. No grill? Broil 4 inches from the heat on a greased pan instead.",
      "Lay the halved provolone slices over the chicken and grill briefly until the cheese melts.",
      "Spoon the warm mushroom-spinach mixture over each piece and serve."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy whole chicken breasts and slice them yourself instead of pre-cut cutlets to save money.",
      "Swap fresh spinach for frozen (thawed and squeezed dry) to cut cost and waste.",
      "Walnuts are usually cheaper than pecans and toast up just as nicely here."
    ],
    "substitutions": [
      {
        "forIngredientId": "provolone",
        "swap": "mozzarella or Swiss slices",
        "savings": "~$0.10/serving"
      },
      {
        "forIngredientId": "pecans",
        "swap": "chopped walnuts or sliced almonds",
        "savings": "~$0.20"
      },
      {
        "forIngredientId": "mushroom",
        "swap": "button-mushroom",
        "savings": "~$0.25/cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 240,
      "protein": 30,
      "carbs": 5,
      "fat": 11,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "chicken",
      "low-carb",
      "high-protein",
      "grilled",
      "quick",
      "weeknight",
      "gluten-free",
      "keto-friendly"
    ]
  },
  {
    "id": "toh-super-quick-chicken-fried-rice",
    "name": "Easy Chicken Fried Rice",
    "description": "A weeknight-friendly skillet fried rice that turns rotisserie chicken, ready rice, and mixed veggies into a savory, sesame-scented dinner in half an hour. Fluffy scrambled eggs and a finishing drizzle of sesame oil make it taste like takeout without the wait. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/super-quick-chicken-fried-rice/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "frozen-veg",
        "quantity": 2.5
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 12
      },
      {
        "ingredientId": "rice",
        "quantity": 6,
        "note": "ready-to-serve garden vegetable rice"
      },
      {
        "ingredientId": "rotisserie-chicken",
        "quantity": 6,
        "note": "skin removed, shredded"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      }
    ],
    "steps": [
      "Cook the frozen mixed vegetables following the package directions, then set aside.",
      "Heat 1 tablespoon of the olive oil in a large skillet over medium-high. Pour in the beaten eggs and stir until just set with no runny egg left, then transfer them out of the pan.",
      "In the same skillet, warm 2 tablespoons of the sesame oil with the remaining tablespoon of olive oil over medium-high heat.",
      "Add the rice and stir-fry for 10 to 12 minutes, until it starts to turn golden and toasty.",
      "Mix in the shredded chicken, salt, and pepper.",
      "Fold in the cooked vegetables and scrambled eggs, breaking the eggs into smaller bits as you stir, and heat everything through.",
      "Finish with a drizzle of the remaining 2 tablespoons of sesame oil and serve hot."
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
      "dairy-free"
    ],
    "cheapTips": [
      "Swap the rotisserie chicken for a batch of leftover cooked chicken breast or thighs to cut cost.",
      "Use plain day-old rice instead of pricey ready-to-serve pouches and add your own diced veg.",
      "Buy a large bag of frozen mixed vegetables instead of single packages for a lower per-cup price."
    ],
    "substitutions": [
      {
        "forIngredientId": "rotisserie-chicken",
        "swap": "Cooked, shredded chicken breast or thighs",
        "savings": "Roughly the same or less if you cook a bulk pack yourself"
      },
      {
        "forIngredientId": "rice",
        "swap": "Day-old cooked jasmine or white rice",
        "savings": "About $1 per serving vs ready-to-serve pouches"
      },
      {
        "forIngredientId": "frozen-veg",
        "swap": "Fresh diced carrots, peas, and corn",
        "savings": "Comparable; uses up fridge odds and ends"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 28,
      "carbs": 38,
      "fat": 18,
      "fiber": 4
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Asian-American",
    "tags": [
      "fried-rice",
      "chicken",
      "quick",
      "weeknight",
      "30-minute",
      "leftover-friendly",
      "one-pan",
      "stir-fry"
    ]
  },
  {
    "id": "toh-sweet-barbecued-pork-chops",
    "name": "Sweet Barbecue Pork Chops",
    "description": "Thick, juicy pork loin chops seared until golden, then simmered in a glossy sweet-and-tangy sauce built from ketchup, barbecue sauce, French dressing and honey. It's a one-skillet weeknight winner that tastes like it took all afternoon. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/sweet-barbecued-pork-chops/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "canola-oil",
        "quantity": 2
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 8,
        "note": "boneless loin chops, about 3/4 inch thick"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "packed, 1/2 cup"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "sweet onion, chopped (about 1/2 cup)"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "bbq-sauce",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "french-dressing",
        "quantity": 8,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "honey",
        "quantity": 8,
        "note": "1/2 cup"
      }
    ],
    "steps": [
      "Heat the canola oil in a large skillet over medium heat.",
      "Working in batches so the pan isn't crowded, sear the pork chops 2-3 minutes per side until nicely browned, then return all of them to the skillet.",
      "Stir together the brown sugar, chopped onion, ketchup, barbecue sauce, French dressing and honey in a small bowl.",
      "Pour the sauce over the chops and bring it up to a boil.",
      "Lower the heat, cover, and simmer 4-5 minutes until the pork reaches 145F on a thermometer.",
      "Let the chops rest 5 minutes off the heat so the juices settle, then serve with the pan sauce spooned over top."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in pork chops are usually cheaper than boneless and stay extra juicy when simmered in sauce.",
      "Skip the bottled French dressing and whisk your own from ketchup, oil, vinegar and a pinch of sugar to save a few dollars.",
      "Buy a whole pork loin and cut your own chops; it costs far less per pound than pre-cut boneless chops."
    ],
    "substitutions": [
      {
        "forIngredientId": "french-dressing",
        "swap": "Use Italian or honey-mustard dressing for a similar tangy-sweet glaze",
        "savings": "Use what's already in the fridge"
      },
      {
        "forIngredientId": "honey",
        "swap": "Swap in extra brown sugar or maple syrup",
        "savings": "Brown sugar runs about a tenth the cost of honey"
      },
      {
        "forIngredientId": "pork-chop",
        "swap": "Boneless chicken thighs or pork cutlets work with the same sauce",
        "savings": "Thighs are often cheaper per pound"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 42,
      "carbs": 38,
      "fat": 16,
      "fiber": 0
    },
    "emoji": "🥩",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "barbecue",
      "skillet",
      "weeknight",
      "sweet-and-savory",
      "one-pan",
      "30-minute"
    ]
  },
  {
    "id": "toh-sweet-n-spicy-chicken",
    "name": "Sweet 'n' Spicy Chicken",
    "description": "Tender cubes of taco-spiced chicken get a glossy, sweet-heat glaze from chunky salsa simmered with fruit preserves, then spooned over fluffy rice for a fast 20-minute weeknight dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/sweet-n-spicy-chicken/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "taco-seasoning-2",
        "quantity": 9,
        "note": "3 tbsp, to coat the chicken"
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 4,
        "note": "1 lb, cut into 1/2-inch cubes"
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 2,
        "note": "for browning"
      },
      {
        "ingredientId": "salsa",
        "quantity": 6.67,
        "note": "1-2/3 cups chunky salsa"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 8,
        "note": "stand-in for 1/2 cup peach preserves"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "hot cooked, for serving"
      }
    ],
    "steps": [
      "Cut the chicken breasts into 1/2-inch cubes and toss them in a wide dish with the taco seasoning until every piece is coated.",
      "Heat the canola oil in a large skillet over medium-high and brown the chicken, stirring, until it is cooked through and no longer pink in the center.",
      "Stir the salsa and apricot (peach) preserves together, then pour the mixture into the skillet with the chicken.",
      "Bring everything to a boil, then lower the heat, cover, and simmer for 2 to 3 minutes until hot and glossy.",
      "Spoon the sweet-and-spicy chicken over hot cooked rice and serve."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Swap in chicken thighs, which are cheaper per pound and stay juicier when seared.",
      "Use any fruit jam you already have on hand instead of buying peach preserves just for this dish.",
      "Cook a big batch of plain rice and freeze portions to skip takeout on busy nights."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-breast",
        "swap": "chicken thighs for a juicier, cheaper cut",
        "savings": "~$0.20/serving"
      },
      {
        "forIngredientId": "apricot-jam",
        "swap": "any peach, apricot, or even orange marmalade",
        "savings": "use what you have"
      },
      {
        "forIngredientId": "canola-oil",
        "swap": "any neutral oil like vegetable or rice bran oil",
        "savings": "pantry staple"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 32,
      "carbs": 52,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-orange-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "chicken",
      "weeknight",
      "quick",
      "sweet-and-spicy",
      "30-minute",
      "one-pan",
      "salsa",
      "rice-bowl"
    ]
  },
  {
    "id": "toh-tasty-burritos",
    "name": "Tasty Burritos",
    "description": "Hearty beef-and-bean burritos with a crisp pan-seared shell and a molten layer of Colby-Jack inside. Quick enough for a weeknight and easy to wrap, they're great with a dollop of sour cream and a spoonful of salsa. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/tasty-burritos/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 3,
        "note": "1 lb, browned and drained"
      },
      {
        "ingredientId": "taco-seasoning",
        "quantity": 1,
        "note": "1 envelope"
      },
      {
        "ingredientId": "refried-beans",
        "quantity": 1,
        "note": "16 oz can"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 6,
        "note": "12-inch flour tortillas, warmed"
      },
      {
        "ingredientId": "colby-jack",
        "quantity": 4,
        "note": "1 cup shredded"
      },
      {
        "ingredientId": "canola-oil",
        "quantity": 1.33,
        "note": "for browning the burritos"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 6,
        "optional": true,
        "note": "for serving"
      },
      {
        "ingredientId": "salsa",
        "quantity": 6,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Brown the ground beef in a large heavy or cast-iron skillet over medium heat until cooked through, then drain off the fat.",
      "Stir the taco seasoning into the beef, then scoop the mixture out, set it aside, and wipe the skillet clean.",
      "In a small saucepan, warm the refried beans over medium-low heat for 2 to 3 minutes until heated through.",
      "Spread about 1/3 cup beans slightly off-center on each warm tortilla, top with about 1/4 cup seasoned beef, and sprinkle with shredded Colby-Jack.",
      "Fold in the sides and ends of each tortilla, then roll up tightly to seal the filling inside.",
      "Heat the canola oil in the same skillet over medium-high and brown the burritos on all sides until golden and crisp.",
      "Serve warm with sour cream and salsa, or your favorite toppings."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Make your own taco seasoning from pantry chili powder, cumin, garlic powder and paprika to skip the packet.",
      "Buy ground beef in a larger family pack and freeze in 1-pound portions to lower the per-meal cost.",
      "Swap half the beef for an extra can of beans to stretch the filling and trim the price even further."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Ground turkey or seasoned black beans",
        "savings": "Turkey is leaner; beans cut cost by ~$1/serving"
      },
      {
        "forIngredientId": "colby-jack",
        "swap": "Shredded cheddar",
        "savings": "Similar price, often a few cents cheaper"
      },
      {
        "forIngredientId": "canola-oil",
        "swap": "Vegetable or avocado oil",
        "savings": "Use whatever neutral oil you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 27,
      "carbs": 40,
      "fat": 24,
      "fiber": 6
    },
    "emoji": "🌯",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican-American",
    "tags": [
      "burritos",
      "beef",
      "beans",
      "tex-mex",
      "weeknight",
      "handheld",
      "30-minute"
    ]
  },
  {
    "id": "toh-tomato-garlic-butter-bean-dinner",
    "name": "Tomato & Garlic Butter Bean Dinner",
    "description": "A cozy 15-minute skillet where creamy butter beans and sweet diced tomatoes simmer with garlic and Italian herbs, then wilt down a heap of fresh spinach for a hearty, protein-packed vegetarian dinner. Spoon it over pasta or eat it as is. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/tomato-garlic-butter-bean-dinner/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "whole-peeled-tomatoes",
        "quantity": 2,
        "note": "diced, undrained"
      },
      {
        "ingredientId": "butter-beans",
        "quantity": 1,
        "note": "rinsed and drained"
      },
      {
        "ingredientId": "spinach",
        "quantity": 6,
        "note": "fresh baby spinach"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "pasta",
        "quantity": 4,
        "optional": true,
        "note": "hot cooked, for serving"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 4,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Warm the olive oil in a large skillet over medium-high heat.",
      "Add the minced garlic and stir for about 30 to 45 seconds, just until fragrant and softened.",
      "Tip in the diced tomatoes with their juices, the drained butter beans, the spinach, Italian seasoning, and pepper.",
      "Cook, stirring now and then, until the spinach collapses and wilts into the sauce and everything is heated through.",
      "Serve as is, or spoon over hot cooked pasta and finish with a shower of grated Parmesan."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy canned tomatoes and beans by the case when on sale — they keep for ages and this dish lives on them.",
      "Frozen spinach (a cup or two, thawed and squeezed) stands in for fresh and is usually cheaper per serving.",
      "Skip the Parmesan to keep it vegan and budget-friendly, or use a small sprinkle of nutritional yeast instead."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter-beans",
        "swap": "cannellini-beans or great-northern beans",
        "savings": "Often a few cents cheaper per can"
      },
      {
        "forIngredientId": "spinach",
        "swap": "frozen-spinach (about 2 cups, thawed)",
        "savings": "Roughly half the cost of fresh"
      },
      {
        "forIngredientId": "italian-seasoning",
        "swap": "a mix of dried oregano and basil"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 9,
      "carbs": 30,
      "fat": 6,
      "fiber": 8
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Italian",
    "tags": [
      "vegetarian",
      "vegan",
      "beans",
      "skillet",
      "one-pan",
      "quick",
      "weeknight",
      "high-fiber",
      "tomato",
      "spinach"
    ]
  },
  {
    "id": "toh-tomato-poached-halibut",
    "name": "Tomato-Poached Halibut",
    "description": "Tender halibut fillets gently poached in a smoky, garlicky tomato broth studded with green olives and mild chiles, finished with bright cilantro and a squeeze of lemon. A light, one-pan dinner that tastes far richer than the 30 minutes it takes. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/tomato-poached-halibut/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 1
      },
      {
        "ingredientId": "anaheim-pepper",
        "quantity": 2,
        "note": "stand-in for poblano; finely chopped"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small, finely chopped"
      },
      {
        "ingredientId": "fire-roasted-tomatoes",
        "quantity": 1,
        "note": "undrained"
      },
      {
        "ingredientId": "whole-peeled-tomatoes",
        "quantity": 1,
        "note": "no-salt-added diced, undrained"
      },
      {
        "ingredientId": "olives",
        "quantity": 1,
        "note": "pitted green olives, chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125
      },
      {
        "ingredientId": "halibut-fillet",
        "quantity": 4,
        "note": "about 4 oz each"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 5,
        "note": "chopped, about 1/3 cup"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "cut into wedges for serving",
        "optional": true
      },
      {
        "ingredientId": "multigrain-bread",
        "quantity": 4,
        "note": "crusty whole grain, for serving",
        "optional": true
      }
    ],
    "steps": [
      "Warm the olive oil in a large nonstick skillet over medium-high heat.",
      "Add the chopped chiles and onion and cook, stirring, for 4 to 6 minutes until softened.",
      "Stir in both cans of tomatoes with their juices, the green olives, garlic, pepper and salt, then bring up to a boil.",
      "Lower the heat to a gentle simmer and nestle the halibut fillets into the sauce.",
      "Cover and poach for 8 to 10 minutes, until the fish flakes easily with a fork.",
      "Scatter the fresh cilantro over the top and serve with lemon wedges and crusty bread if you like."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Halibut is pricey; swap in cod or tilapia to cut the cost by more than half without losing the dish.",
      "Use two cans of plain diced tomatoes and add a pinch of smoked paprika instead of buying fire-roasted.",
      "Skip the green olives or use whatever brined olive you already have on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "halibut-fillet",
        "swap": "frozen cod or tilapia fillets",
        "savings": "Saves around $6-7 per serving"
      },
      {
        "forIngredientId": "anaheim-pepper",
        "swap": "1 chopped bell pepper plus a pinch of chili flakes",
        "savings": "About the same price, easier to find"
      },
      {
        "forIngredientId": "fire-roasted-tomatoes",
        "swap": "plain diced tomatoes with a dash of smoked paprika",
        "savings": "Saves a few cents per can"
      }
    ],
    "estimatedNutrition": {
      "calories": 260,
      "protein": 27,
      "carbs": 14,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "🐟",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican-inspired",
    "tags": [
      "halibut",
      "fish",
      "poached",
      "tomato",
      "one-pan",
      "healthy",
      "gluten-free",
      "dairy-free",
      "weeknight",
      "30-minute"
    ]
  },
  {
    "id": "toh-tortellini-carbonara",
    "name": "Tortellini Carbonara",
    "description": "Cheese tortellini gets tossed in a silky cream sauce loaded with crispy bacon, sharp Parmesan, and fresh parsley for a fast, comforting weeknight dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/tortellini-carbonara/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "tortellini",
        "quantity": 4,
        "note": "refrigerated cheese tortellini, 9 oz package"
      },
      {
        "ingredientId": "bacon",
        "quantity": 8,
        "note": "chopped"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 8,
        "note": "1/2 cup grated"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 8,
        "note": "1/2 cup chopped fresh"
      }
    ],
    "steps": [
      "Boil the cheese tortellini following the package timing, then drain and set aside.",
      "In a large skillet over medium heat, cook the chopped bacon until crisp, stirring now and then.",
      "Lift the bacon out with a slotted spoon onto paper towels to drain, then discard the grease from the pan.",
      "Return the pan to medium heat and stir together the heavy cream, Parmesan, parsley, and cooked bacon until warmed through.",
      "Fold in the drained tortellini, toss to coat in the sauce, and serve right away."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [],
    "cheapTips": [
      "Swap fresh refrigerated tortellini for the dried shelf-stable kind to cut the cost almost in half.",
      "Use a block of Parmesan and grate it yourself instead of buying pre-grated for better flavor and savings.",
      "Stretch the sauce with a splash of the starchy pasta water so you need less heavy cream."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey bacon for a leaner, lower-cost option",
        "savings": "~$0.13/slice"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "light cream or half-and-half for fewer calories",
        "savings": "comparable"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "1 tsp dried parsley if you don't have fresh",
        "savings": "minimal"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 22,
      "carbs": 38,
      "fat": 42,
      "fiber": 2
    },
    "emoji": "🍝",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian-American",
    "tags": [
      "pasta",
      "carbonara",
      "bacon",
      "quick",
      "weeknight",
      "comfort-food",
      "creamy"
    ]
  },
  {
    "id": "toh-turkey-biscuit-stew",
    "name": "Turkey Biscuit Stew",
    "description": "A cozy one-skillet comfort dish where tender turkey, sweet peas and carrots simmer in a creamy broth, all crowned with golden, flaky buttermilk biscuits baked right on top. It is the easy, hearty way to turn leftover turkey into a whole new dinner. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/turkey-biscuit-stew/",
    "mealType": "dinner",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "onion",
        "quantity": 0.33,
        "note": "chopped"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "cubed"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "all-purpose"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.3,
        "note": "condensed, undiluted"
      },
      {
        "ingredientId": "two-percent-milk",
        "quantity": 0.75
      },
      {
        "ingredientId": "turkey-breast",
        "quantity": 2,
        "note": "cubed, cooked"
      },
      {
        "ingredientId": "peas",
        "quantity": 1,
        "note": "cooked"
      },
      {
        "ingredientId": "canned-carrots",
        "quantity": 1,
        "note": "cooked whole baby carrots"
      },
      {
        "ingredientId": "canned-biscuits",
        "quantity": 8,
        "note": "large refrigerated buttermilk biscuits"
      }
    ],
    "steps": [
      "Heat the oven to 375 degrees F. In a 10-inch ovenproof or cast-iron skillet, melt the butter and cook the chopped onion until softened.",
      "Sprinkle in the flour, salt, and pepper, stirring until smooth and blended into a paste.",
      "Slowly pour in the chicken broth and milk while stirring, then bring to a boil and cook for about 2 minutes until thickened and bubbly.",
      "Fold in the cooked turkey, peas, and carrots and stir until everything is heated through.",
      "Pull the biscuits apart and lay them across the top of the stew.",
      "Bake for 20 to 25 minutes, until the biscuits are puffed and golden brown. Serve hot."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use leftover roast turkey or rotisserie chicken instead of buying fresh meat to slash the cost.",
      "Swap the canned baby carrots and biscuit tube for whole carrots and a quick homemade drop-biscuit dough to save even more.",
      "Frozen peas are cheaper than fresh or canned and taste just as good once simmered in."
    ],
    "substitutions": [
      {
        "forIngredientId": "turkey-breast",
        "swap": "Shredded rotisserie or leftover chicken",
        "savings": "Often cheaper per pound and zero prep"
      },
      {
        "forIngredientId": "two-percent-milk",
        "swap": "Whole milk or a splash of cream thinned with water",
        "savings": "Use whatever is already in the fridge"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Bouillon cube dissolved in water",
        "savings": "Pennies per cup vs canned condensed broth"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 18,
      "carbs": 27,
      "fat": 12,
      "fiber": 2
    },
    "emoji": "🍲",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "leftover-turkey",
      "one-skillet",
      "casserole",
      "weeknight",
      "biscuits",
      "fall",
      "winter"
    ]
  },
  {
    "id": "toh-turkey-gyros",
    "name": "Turkey Gyros",
    "description": "Lean turkey strips get a quick sizzle with Greek seasoning, then pile into warm pita with crisp lettuce, juicy tomato, and a cool, creamy cucumber-dill sauce. A fast, fresh weeknight take on a Mediterranean classic. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/turkey-gyros/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "cucumber",
        "quantity": 1,
        "note": "peeled; third finely chopped for sauce, rest thinly sliced"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 11,
        "note": "reduced-fat, about 2/3 cup"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely chopped, about 1/4 cup"
      },
      {
        "ingredientId": "dill-dried",
        "quantity": 2,
        "note": "dill weed"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 0.7,
        "note": "about 2 tsp"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.3,
        "note": "about 1 tsp, for sauteing"
      },
      {
        "ingredientId": "turkey-breast",
        "quantity": 2,
        "note": "tenderloin cut into 1/4-inch strips"
      },
      {
        "ingredientId": "greek-seasoning",
        "quantity": 1.5,
        "note": "salt-free"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "note": "shredded, about 1 1/2 cups"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "thinly sliced, about 8 slices"
      },
      {
        "ingredientId": "pita",
        "quantity": 4,
        "note": "warmed"
      },
      {
        "ingredientId": "feta",
        "quantity": 0.5,
        "note": "crumbled, about 2 tbsp",
        "optional": true
      }
    ],
    "steps": [
      "Peel the cucumber. Finely chop about a third of it and thinly slice the rest; set the slices aside for serving.",
      "Make the sauce: stir together the sour cream, chopped onion, dill, lemon juice, and the finely chopped cucumber. Chill until needed.",
      "Heat the olive oil in a nonstick skillet over medium-high heat.",
      "Add the turkey strips and saute until cooked through and no longer pink, 4 to 6 minutes.",
      "Sprinkle in the Greek seasoning and toss to coat the turkey evenly.",
      "Warm the pitas, then layer each with turkey, shredded lettuce, tomato slices, and the reserved cucumber slices.",
      "Spoon the cucumber-dill sauce over the top and finish with crumbled feta."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a whole turkey breast and slice your own tenderloin strips, then freeze portions for future meals to cut cost per serving.",
      "Swap fresh dill for the cheaper dried dill weed you already have on the shelf, or use Greek yogurt in place of sour cream for a budget-friendly, higher-protein sauce.",
      "Stretch one cucumber across both the sauce and the topping so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Plain Greek yogurt, tbsp for tbsp, for a tangier, higher-protein tzatziki",
        "savings": "roughly the same cost, more protein"
      },
      {
        "forIngredientId": "turkey-breast",
        "swap": "Boneless skinless chicken breast strips",
        "savings": "often cheaper per pound"
      },
      {
        "forIngredientId": "pita",
        "swap": "Flour tortillas or naan as a wrap",
        "savings": "use what's on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 28,
      "carbs": 36,
      "fat": 7,
      "fiber": 3
    },
    "emoji": "🥙",
    "accentColor": "bg-emerald-100",
    "cuisine": "Greek",
    "tags": [
      "gyros",
      "turkey",
      "mediterranean",
      "high-protein",
      "quick",
      "weeknight",
      "pita",
      "tzatziki"
    ]
  },
  {
    "id": "toh-turkey-taco-salad",
    "name": "Turkey Taco Salad",
    "description": "A lighter take on taco night: lean ground turkey simmered with peppers, onion, garlic, salsa and kidney beans, then piled over crisp romaine and finished with fresh cilantro. Fast, high-protein, and easy to customize with your favorite toppings. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/turkey-taco-salad/",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-turkey",
        "quantity": 2.5
      },
      {
        "ingredientId": "red-bell-pepper",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "yellow-bell-pepper",
        "quantity": 1,
        "note": "small, chopped"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "chopped, about 1/3 cup"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "salsa",
        "quantity": 6
      },
      {
        "ingredientId": "kidney-beans",
        "quantity": 0.33,
        "note": "rinsed and drained, about 1/2 cup"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 2
      },
      {
        "ingredientId": "cumin",
        "quantity": 1
      },
      {
        "ingredientId": "romaine",
        "quantity": 1,
        "note": "torn, about 8 cups"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "fresh leaves, for garnish"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "chopped, optional topping"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 2,
        "optional": true,
        "note": "optional topping"
      },
      {
        "ingredientId": "tortilla-chips",
        "quantity": 1,
        "optional": true,
        "note": "crushed, optional topping"
      }
    ],
    "steps": [
      "Heat a large skillet over medium. Add the ground turkey along with the red and yellow peppers, onion, and garlic.",
      "Cook for 6-8 minutes, breaking the turkey into crumbles, until it's no longer pink and the vegetables have softened. Drain off any excess liquid.",
      "Stir in the salsa, kidney beans, chili powder, and cumin. Cook just until everything is warmed through.",
      "Spread the torn romaine across four plates and spoon the warm turkey mixture over the top.",
      "Scatter with fresh cilantro and add any optional toppings like chopped tomato, shredded cheddar, or crushed tortilla chips. Serve right away while warm."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a larger pack of ground turkey and freeze half — the per-serving cost drops a lot versus small trays.",
      "Use whatever bell peppers are cheapest or on sale; color doesn't change the flavor much here.",
      "Skip the pricier optional toppings and lean on the salsa and beans, which already carry the dish."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-turkey",
        "swap": "Lean ground beef or ground chicken",
        "savings": "Ground chicken is often cheaper than turkey"
      },
      {
        "forIngredientId": "kidney-beans",
        "swap": "Black beans or pinto beans",
        "savings": "Roughly the same price; use whatever is in the pantry"
      },
      {
        "forIngredientId": "romaine",
        "swap": "A head of green leaf or iceberg lettuce",
        "savings": "A whole head can run $1-2 cheaper than bagged"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 27,
      "carbs": 18,
      "fat": 13,
      "fiber": 6
    },
    "emoji": "🥗",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican-American",
    "tags": [
      "taco salad",
      "ground turkey",
      "high-protein",
      "weeknight",
      "gluten-free",
      "tex-mex",
      "30-minute"
    ]
  },
  {
    "id": "toh-zippy-breaded-pork-chops",
    "name": "Zippy Breaded Pork Chops",
    "description": "Juicy bone-in pork chops get a tangy ranch dunk and a crisp, cheesy crumb crust, then bake hands-off until golden and tender. A weeknight dinner with serious crunch and almost no cleanup. Recipe from Taste of Home: https://www.tasteofhome.com/recipes/zippy-breaded-pork-chops/",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ranch",
        "quantity": 5.3,
        "note": "1/3 cup, for dipping"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 1,
        "note": "seasoned"
      },
      {
        "ingredientId": "grated-parmesan",
        "quantity": 2
      },
      {
        "ingredientId": "pork-chop",
        "quantity": 6,
        "note": "bone-in, about 8 oz each"
      }
    ],
    "steps": [
      "Heat the oven to 425 F and set a wire rack inside an ungreased rimmed baking pan.",
      "Pour the ranch dressing into one shallow bowl. In a second shallow bowl, stir together the seasoned bread crumbs and grated Parmesan.",
      "Dip each pork chop in the ranch to coat, then press both sides firmly into the crumb mixture so the coating sticks.",
      "Arrange the coated chops on the rack in a single layer.",
      "Bake 15 to 20 minutes, until the crust is golden and the internal temperature reaches 145 F.",
      "Let the chops rest 5 minutes before serving so the juices settle."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a bulk family pack of bone-in pork chops and freeze in pairs to cut the per-chop cost.",
      "Make your own seasoned crumbs from stale bread plus dried herbs instead of buying a box.",
      "Stretch the ranch by thinning it with a splash of milk so a little coats all six chops."
    ],
    "substitutions": [
      {
        "forIngredientId": "ranch",
        "swap": "Use beaten egg with a teaspoon of ranch seasoning for the same tang at lower cost",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Swap in panko for an even crispier crust",
        "savings": "about the same"
      },
      {
        "forIngredientId": "pork-chop",
        "swap": "Use boneless pork cutlets and trim baking time by a few minutes",
        "savings": "~$0.50/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 38,
      "carbs": 11,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🐷",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "pork",
      "breaded",
      "baked",
      "weeknight",
      "high-protein",
      "kid-friendly"
    ]
  }
];
