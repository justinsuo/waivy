import type { Recipe } from "@/lib/types";

export const NEW_EGG_RECIPES: Recipe[] = [
  {
    "id": "egg-classic-shakshuka",
    "name": "Classic Shakshuka",
    "description": "Jammy, runny-yolked eggs poached right in a smoky, garlicky tomato-and-pepper sauce, finished with crumbled feta and fresh cilantro. One skillet, cheap pantry staples, and a pile of bread for mopping — breakfast, lunch, or dinner sorted.",
    "mealType": "breakfast",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "for sauteing"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "red, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 1.5,
        "note": "sweet or smoked"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.25,
        "note": "more for extra heat"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 1
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "balances tomato acidity"
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
        "ingredientId": "eggs",
        "quantity": 5
      },
      {
        "ingredientId": "feta",
        "quantity": 1,
        "note": "crumbled on top",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "chopped, to garnish",
        "optional": true
      },
      {
        "ingredientId": "bread",
        "quantity": 3,
        "note": "crusty, for dipping",
        "optional": true
      }
    ],
    "steps": [
      "Warm the olive oil in a 10-12 inch skillet over medium heat. Add the diced onion and bell pepper with a pinch of the salt and saute 7-9 minutes, stirring now and then, until soft and translucent (no browning needed).",
      "Add the minced garlic, cumin, paprika, and cayenne. Stir constantly for about 60 seconds to bloom the spices in the oil — they should smell toasty, not scorched. Stir in the tomato paste and cook another minute, until it darkens slightly.",
      "Pour in the crushed tomatoes and add the sugar, remaining salt, and black pepper. Stir to combine and bring to a gentle bubble.",
      "Reduce to medium-low and simmer the sauce uncovered for 10-12 minutes, stirring occasionally, until it thickens enough that a spoon dragged across the pan briefly leaves a trail. Taste and adjust salt or cayenne.",
      "Use the back of a spoon to make 5 shallow, well-spaced wells in the sauce. Crack each egg into a small cup first, then slip it into a well so the yolk stays intact.",
      "Season the egg tops with a little salt and pepper. Cover the skillet and cook over medium-low for 5-8 minutes, until the whites are fully set and opaque but the yolks are still soft and runny. For firmer yolks, cover and cook a couple of minutes longer.",
      "Kill the heat. Scatter the crumbled feta and chopped cilantro over the top and serve straight from the pan with crusty bread for mopping up the sauce. The whites must be fully set; the runny yolk is intentional, so use fresh, properly refrigerated eggs."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
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
      "No fresh bell pepper? A jar of roasted red peppers or a handful of frozen pepper strips works and is often cheaper — just chop and add with the onion.",
      "Skip the feta and fresh cilantro if money's tight; the sauce and eggs are the real meal. A pinch of dried herbs costs pennies and still finishes it nicely.",
      "A can of crushed tomatoes is the cheapest base here. Stretch it further by simmering with an extra splash of water — it feeds an extra mouth without extra cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "crushed-tomato",
        "swap": "Use 1 can of whole-peeled-tomatoes and crush them by hand or with a spoon as they simmer.",
        "savings": "About the same price, and often what you already have in the pantry"
      },
      {
        "forIngredientId": "feta",
        "swap": "Crumble in goat cheese or a spoonful of cottage cheese for the same creamy, tangy hit.",
        "savings": "Cottage cheese can save ~$0.30 vs feta"
      },
      {
        "forIngredientId": "cayenne",
        "swap": "A few dashes of hot sauce or a pinch of red-pepper-flakes stirred into the sauce.",
        "savings": "Pennies if you already have hot sauce on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 16,
      "carbs": 18,
      "fat": 18,
      "fiber": 4
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "North African / Middle Eastern",
    "tags": [
      "egg",
      "north-african",
      "middle-eastern",
      "one-pan",
      "vegetarian",
      "breakfast",
      "skillet",
      "tomato",
      "dorm-friendly",
      "budget"
    ]
  },
  {
    "id": "egg-chinese-tomato-egg-stir-fry",
    "name": "Chinese Tomato & Egg Stir-Fry (Fanqie Chao Dan)",
    "description": "Silky soft-scrambled eggs folded into a glossy sweet-savory tomato sauce and spooned over hot rice. Often called China's unofficial national dish, it turns two cheap pantry staples into the ultimate 10-minute comfort meal.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "ripe, cut into wedges"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "white and green parts separated"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "balances the tomato acidity"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25,
        "optional": true
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 0.5,
        "optional": true,
        "note": "drizzle to finish"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "splash to build the sauce"
      },
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "cooked, for serving"
      }
    ],
    "steps": [
      "Start the rice first so it's ready when the stir-fry is: cook 1.5 cups in a rice cooker or pot per package directions, then keep warm.",
      "Crack the 4 eggs into a bowl. Add a pinch of the salt and the 1/4 tsp white pepper and beat well until fully blended and slightly frothy.",
      "Cut the 3 tomatoes into 6-8 wedges each. Thinly slice the 2 scallions, keeping the white parts and green tops in separate piles.",
      "Heat 2 tbsp vegetable oil in a wok or nonstick skillet over medium-high until shimmering. Pour in the beaten eggs, let them puff for 5-10 seconds, then gently push and fold until just set, soft, and glossy, about 60-90 seconds. They should be fully cooked with no runny liquid egg, but not browned. Scoop the eggs onto a plate.",
      "Add the remaining 1 tbsp oil to the same pan over medium-high. Add the scallion whites and stir 15 seconds until fragrant.",
      "Add the tomato wedges and stir-fry 2-3 minutes, pressing gently, until they soften and start releasing their juice.",
      "Sprinkle in the 1 tbsp sugar and the rest of the salt, add the splash of water (about 1/4 cup), and simmer 2-3 minutes until the tomatoes break down into a loose, glossy sauce.",
      "Return the eggs to the pan and fold gently for about 30 seconds, just to warm through and coat them in sauce without breaking them up too much.",
      "Kill the heat, drizzle with the sesame oil, and scatter the scallion greens on top. Spoon over the warm rice and serve right away."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 13,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "rice-cooker"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Tomatoes that are a little too soft or overripe are perfect here and often on markdown - they break down into a richer sauce.",
      "A teaspoon of ketchup stirred into the sauce deepens the color and umami if your tomatoes are pale or out of season.",
      "Serve over plain rice to make it a full meal for almost nothing; one extra egg stretches it to feed three."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Any neutral oil like canola or sunflower oil works the same",
        "savings": "Use whatever you already have on hand"
      },
      {
        "forIngredientId": "sugar",
        "swap": "A drizzle of ketchup adds sweetness plus extra tomato flavor",
        "savings": "Skips buying anything new"
      },
      {
        "forIngredientId": "scallion",
        "swap": "A little thinly sliced onion or chives for the aromatic base",
        "savings": "Cheaper than a fresh scallion bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 16,
      "carbs": 48,
      "fat": 20,
      "fiber": 3
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese",
    "tags": [
      "egg",
      "chinese",
      "stir-fry",
      "tomato",
      "rice",
      "vegetarian",
      "quick",
      "dorm-friendly",
      "comfort-food",
      "budget"
    ]
  },
  {
    "id": "egg-soft-french-scrambled-eggs",
    "name": "Soft French Scrambled Eggs",
    "description": "The gold standard of scrambled eggs: silky, custard-soft curds that taste downright luxurious from nothing but eggs, butter, and a splash of cream. Cheap, fast, and a genuine skill upgrade from the rubbery eggs of dorm legend.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "butter",
        "quantity": 1.5
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.06,
        "note": "a splash (about 1 tbsp), stirred in off the heat to stop the cooking"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "salt at the end so the curds stay tender"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped, for garnish"
      }
    ],
    "steps": [
      "Crack 4 eggs into a bowl and whisk hard for 20-30 seconds until completely uniform and slightly frothy, with no streaks of white left. This even mix is what gives you tender curds.",
      "Set a nonstick pan over LOW heat and add the butter. Let it melt gently and foam without browning, swirling to coat the pan.",
      "Pour in the eggs and immediately start stirring constantly with a rubber spatula in slow figure-eights, scraping the bottom and sides so no part sets faster than the rest.",
      "Keep the heat low and keep stirring. Over 4-6 minutes the eggs will slowly thicken into small, soft, glossy curds. If they ever firm up or cook too fast, lift the pan off the burner for a few seconds, keep stirring, then return it.",
      "Pull the pan off the heat while the eggs still look slightly wet and glossy but no longer runny or liquid. They keep cooking from residual heat, so this is the right moment for soft, fully set, custardy eggs.",
      "Stir in the splash of heavy cream off the heat. This cools the eggs instantly, stops the cooking, and makes them extra silky.",
      "Season with salt and pepper, give one final gentle stir, and serve right away on warm plates or toast. Top with snipped chives if using."
    ],
    "totalTimeMinutes": 8,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Eggs and butter are the whole show here, so you don't need anything fancy. Store-brand large eggs work perfectly.",
      "No heavy cream on hand? A splash of whole milk or even a small extra knob of butter off the heat gives nearly the same silkiness for less.",
      "Skip the fresh chives unless you already have them; a pinch of pepper or whatever herb is in your fridge finishes the plate just as well for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole milk or a small extra pat of butter stirred in off the heat",
        "savings": "Skips a pricier dairy item you may not buy otherwise"
      },
      {
        "forIngredientId": "butter",
        "swap": "olive oil or plant butter for a dairy-light version",
        "savings": "Uses oil you likely already have"
      },
      {
        "forIngredientId": "chives",
        "swap": "thinly sliced scallion greens",
        "savings": "Scallions cost a fraction of fresh chives"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 14,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "French",
    "tags": [
      "egg",
      "french",
      "breakfast",
      "quick",
      "vegetarian",
      "budget",
      "5-ingredient"
    ]
  },
  {
    "id": "egg-perfect-fried-eggs-sunny-over-easy",
    "name": "Perfect Crispy-Edge Fried Eggs (Sunny-Side-Up & Over-Easy)",
    "description": "Lacy, golden crispy edges hugging a glossy, runny yolk - the cheapest, fastest way to make an egg look and taste restaurant-pro. Master one heat-control trick and you'll never make a sad, pale egg again.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1
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
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped, for garnish"
      },
      {
        "ingredientId": "bread",
        "quantity": 1,
        "optional": true,
        "note": "toasted, for serving"
      }
    ],
    "steps": [
      "Crack each egg into a small bowl or cup first. This catches any shell and lets you slide the eggs in cleanly without breaking the yolks.",
      "Set a nonstick pan over medium-high heat and add the butter plus the vegetable oil. The oil raises the smoke point so the butter browns without burning. Heat until the butter is foaming, about 30-45 seconds.",
      "Slide the eggs in from the bowl. Let them sizzle hard on medium-high for the first 30 seconds to set and crisp the edges into a lacy golden frill.",
      "Lower the heat to medium-low and season the whites with the salt and pepper. Cook gently until the whites are fully set and opaque with no clear jiggle, about 1-2 more minutes.",
      "FOR SUNNY-SIDE-UP: leave the eggs un-flipped. For a set top, add 1 teaspoon of water to the pan and cover with a lid for 30-45 seconds to steam the surface. A runny yolk is safe with fresh, properly refrigerated eggs; if you prefer fully set yolks, cook 1-2 minutes longer until the yolk firms.",
      "FOR OVER-EASY: once the whites are set, slide a thin spatula fully under each egg and flip in one confident motion. Cook just 20-30 seconds on the second side to keep the yolk runny, then flip back yolk-up to serve.",
      "Slide onto a plate (over toast, if using), scatter with snipped chives, and add a final crack of pepper. Eat right away while the edges are still crisp."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Eggs are one of the cheapest proteins per gram - buy the big tray and this whole plate runs well under a dollar.",
      "Skip the chives and serve over a slice of bread you already have; the crispy egg is the star.",
      "No nonstick pan? A well-oiled regular pan works - use a touch more oil and don't move the eggs until the edges set and release on their own."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use all vegetable-oil (1 tbsp total) for a dairy-free, even cheaper fry",
        "savings": "~$0.19/serving and makes it vegan-friendly"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Olive oil or a quick spritz of cooking spray",
        "savings": "negligible, use whatever you already have"
      },
      {
        "forIngredientId": "bread",
        "swap": "Serve over leftover rice or a tortilla instead",
        "savings": "uses pantry staples you likely already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 13,
      "carbs": 1,
      "fat": 19,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "breakfast",
      "quick",
      "budget",
      "high-protein",
      "vegetarian",
      "dorm-friendly",
      "5-minutes"
    ]
  },
  {
    "id": "egg-cilbir-turkish-garlic-yogurt-eggs",
    "name": "Cilbir (Turkish Eggs over Garlic Yogurt with Chili Butter)",
    "description": "Soft poached eggs with runny golden yolks nestled in a cool, tangy garlic-lemon yogurt, all crowned with a sizzling drizzle of paprika-chili butter. The hot-and-cold, creamy-and-spicy contrast tastes like a brunch-cafe splurge for a few dollars made at home.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "greek-yogurt",
        "quantity": 1,
        "note": "full-fat, room temperature so it isn't ice-cold"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "grated or finely minced into the yogurt"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.25,
        "note": "a squeeze of juice for tang"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "freshest you have; 2 per serving"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "for the poaching water"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "for the chili butter"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "note": "Aleppo pepper if you have it"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "bread",
        "quantity": 4,
        "note": "toasted, for dipping"
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Set the yogurt out while you prep so it loses its chill. In a small bowl, stir the Greek yogurt with the grated garlic, a squeeze of lemon juice, and a pinch of the salt. Divide between two shallow bowls and spread into a pool.",
      "Fill a wide saucepan with about 3 inches of water, add the vinegar and a pinch of salt, and bring to a bare simmer over medium heat (small bubbles rising, not a rolling boil).",
      "Crack each egg into its own small cup. Stir the simmering water to make a gentle whirlpool, then slip the eggs in one at a time. Poach 3 to 4 minutes for fully set whites and intentionally runny yolks; the white should be opaque and hold together. Lift out with a slotted spoon and rest on a paper towel.",
      "While the eggs poach, melt the butter in a small skillet over medium-low heat. Once foaming, stir in the paprika and red pepper flakes and swirl 30 to 60 seconds until the butter turns deep red and smells toasty. Pull it off the heat before the spices scorch.",
      "Toast the bread until golden and crisp.",
      "Nestle two poached eggs onto each bowl of garlic yogurt. Spoon the warm chili butter generously over the eggs and yogurt so it streaks the surface.",
      "Finish with a little flaky salt and the fresh dill if using. Serve right away with the toast for scooping, and break the yolks at the table so they run into the yogurt."
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
      "high-protein"
    ],
    "cheapTips": [
      "Yogurt and eggs carry the whole dish, so buy the big tub of plain Greek yogurt and a dozen eggs and you can make this all week for just a few dollars a bowl.",
      "No need for fancy Aleppo pepper: regular paprika plus a pinch of red pepper flakes in butter gives you the same red, sizzling drizzle.",
      "Skip vinegar if you don't have it. The freshest eggs hold together best in the water, so use your newest carton for poaching."
    ],
    "substitutions": [
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Plain regular yogurt strained in a coffee filter for 15 minutes, or sour cream loosened with a splash of milk",
        "savings": "Plain yogurt runs about half the price of Greek"
      },
      {
        "forIngredientId": "red-pepper-flakes",
        "swap": "A pinch of cayenne or a dash of hot sauce stirred into the butter",
        "savings": "Use what's already in your spice drawer"
      },
      {
        "forIngredientId": "bread",
        "swap": "Toasted pita, naan, or any sandwich bread you have on hand",
        "savings": "Use day-old bread you already own"
      }
    ],
    "estimatedNutrition": {
      "calories": 380,
      "protein": 22,
      "carbs": 24,
      "fat": 22,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Turkish",
    "tags": [
      "egg",
      "turkish",
      "breakfast",
      "poached-eggs",
      "yogurt",
      "vegetarian",
      "quick",
      "high-protein",
      "brunch"
    ]
  },
  {
    "id": "egg-skillet-huevos-rancheros",
    "name": "Skillet Huevos Rancheros",
    "description": "Runny-yolk eggs nestled into a saucy skillet of cumin-spiked black beans and salsa, piled on crisp corn tortillas and finished with cool avocado, fresh cilantro, and a squeeze of lime. The classic rancher's breakfast: filling, high-protein, and built almost entirely from cheap pantry staples.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "black-beans",
        "quantity": 1
      },
      {
        "ingredientId": "salsa",
        "quantity": 3,
        "note": "about 3/4 cup jarred salsa"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 4,
        "note": "corn tortillas"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1
      },
      {
        "ingredientId": "cumin",
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
        "ingredientId": "cotija",
        "quantity": 2,
        "note": "crumbled, or sub queso fresco",
        "optional": true
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "sliced or diced, for topping",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "chopped, for garnish",
        "optional": true
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "cut into wedges, for serving",
        "optional": true
      }
    ],
    "steps": [
      "If you plan to finish the eggs in the oven, set a rack in the middle and preheat to 400F now; for the stovetop method you can skip this. Drain and rinse the can of black beans and have everything within reach, because the eggs cook fast once they go in.",
      "Heat the vegetable oil in an oven-safe skillet (cast iron is ideal) over medium-high. Add the corn tortillas one or two at a time and crisp 30-45 seconds per side until toasty and the edges firm up, then tear or stack them across the bottom of the skillet to form a base.",
      "Lower the heat to medium and add the drained black beans, salsa, cumin, garlic powder, and salt right on top of the tortillas. Stir gently and simmer 4-5 minutes until the mixture is saucy and bubbling and the tortillas soften into the sauce.",
      "Using the back of a spoon, press 4 shallow wells into the beans, spacing them out. Crack one egg into each well, keeping the yolks intact.",
      "Cook the eggs one of two ways: cover the skillet and cook on the stovetop over medium-low for 6-9 minutes, OR transfer the uncovered skillet to the 400F oven for 10-14 minutes. Either way, cook until the whites are fully set and opaque with no clear, jiggly spots.",
      "For classic runny yolks, pull the skillet the moment the whites are fully set (the yolks will still jiggle) — the eggs are safe once the whites are firm. If you prefer set yolks, or are serving anyone who should avoid runny eggs, cook 2-3 minutes longer until the yolks firm up.",
      "Off the heat, scatter the crumbled cotija over the top while everything is hot so it softens slightly.",
      "Top with sliced avocado and chopped cilantro, and serve straight from the skillet with lime wedges to squeeze over each portion."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 17,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Jarred salsa does the heavy lifting — it's cheaper than buying separate tomatoes, onion, and chilis, and a single jar stretches across several batches.",
      "Buy a bag of corn tortillas and a can of black beans on sale; the core beans-salsa-eggs skillet runs around $3 a serving, and far less if eggs are cheap where you are.",
      "Skip the cotija, avocado, and lime when money's tight — the beans, salsa, and eggs alone make a complete, satisfying plate. Add the toppings whenever you can."
    ],
    "substitutions": [
      {
        "forIngredientId": "black-beans",
        "swap": "Use a can of pinto beans or refried beans instead — refried makes it extra creamy and saucy.",
        "savings": "Same price or cheaper with pinto beans"
      },
      {
        "forIngredientId": "cotija",
        "swap": "Crumbled feta or any shredded cheese you have on hand works for the salty finish.",
        "savings": "Use whatever cheese is already in your fridge"
      },
      {
        "forIngredientId": "salsa",
        "swap": "Swap in salsa verde for a tangier, greener version, or use a can of diced tomatoes with a pinch of chili powder.",
        "savings": "Canned tomatoes can be cheaper than jarred salsa"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 27,
      "carbs": 45,
      "fat": 22,
      "fiber": 14
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "egg",
      "mexican",
      "breakfast",
      "high-protein",
      "vegetarian",
      "budget",
      "skillet",
      "beans",
      "one-pan"
    ]
  },
  {
    "id": "egg-tamago-sando",
    "name": "Tamago Sando (Japanese Konbini Egg Salad Sandwich)",
    "description": "The cult Japanese convenience-store sandwich: thick, creamy Kewpie-mayo egg salad piled between soft crustless milk bread for that photogenic cross-section. Cheap, no-cook beyond boiling eggs, and dangerously crave-able as a grab-and-go lunch.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "kewpie-mayo",
        "quantity": 3
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "bread",
        "quantity": 4
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "dijon",
        "quantity": 0.5,
        "optional": true,
        "note": "stir in for a subtle tang"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "garnish, finely sliced"
      }
    ],
    "steps": [
      "Place the 4 eggs in a small pot and cover with cold water by about an inch. Bring to a rolling boil over high heat, then lower to a gentle simmer and cook 12 minutes for fully set yolks (food-safe for a room-temperature lunch).",
      "While the eggs cook, fill a bowl with cold water and ice. The moment the 12 minutes are up, transfer the eggs straight into the ice bath and chill at least 5 minutes to stop the cooking and loosen the shells for easy peeling.",
      "Peel the cooled eggs under a trickle of running water. Separate 2 of the yolks into a bowl and mash them smooth with 2 tablespoons of the Kewpie mayo, the sugar, salt, and white pepper to make a creamy base.",
      "Roughly chop the remaining 2 whole eggs and the 2 leftover whites into small pieces, then fold them into the yolk base with the last tablespoon of Kewpie mayo (and the dijon, if using). Aim for a thick, scoopable salad, not a soupy one.",
      "Lay out the 4 slices of bread and spread softened butter all the way to the edges of each slice. The butter seals the crumb so the bread won't go soggy.",
      "Mound the egg salad generously onto 2 of the slices, piling it higher in the center so the cross-section looks full and rounded. Top with the remaining slices and press down gently to set.",
      "With a sharp serrated knife, trim off all four crusts for the classic konbini look, then cut each sandwich in half on the diagonal, wiping the blade between cuts for clean faces.",
      "Garnish the cut edges with sliced chives if you like, and serve right away — or wrap tightly and chill up to a day for a grab-and-go lunch."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Eggs and bread are the whole show here, so buy store-brand large eggs and a soft sandwich loaf — one loaf and a dozen eggs makes this lunch many times over.",
      "No Kewpie? Stir a tiny splash of rice vinegar and a pinch of sugar into regular mayo to mimic that tangy-sweet Japanese flavor for pennies.",
      "Save the trimmed crusts: toast them with a little butter and cinnamon-sugar, or blitz them into breadcrumbs for another recipe instead of tossing them."
    ],
    "substitutions": [
      {
        "forIngredientId": "kewpie-mayo",
        "swap": "regular mayonnaise with a pinch of sugar and a few drops of rice vinegar",
        "savings": "Saves about $0.10 if you already have plain mayo"
      },
      {
        "forIngredientId": "bread",
        "swap": "brioche buns or any soft white sandwich bread for the milk-bread effect",
        "savings": "Plain sandwich bread is the cheapest option at roughly $0.18 a slice"
      },
      {
        "forIngredientId": "white-pepper",
        "swap": "regular black pepper",
        "savings": "Black pepper costs about half as much per teaspoon"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 19,
      "carbs": 28,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🥪",
    "accentColor": "bg-yellow-100",
    "cuisine": "Japanese",
    "tags": [
      "egg",
      "japanese",
      "sandwich",
      "no-cook",
      "lunch",
      "grab-and-go",
      "vegetarian",
      "konbini"
    ]
  },
  {
    "id": "egg-mayak-gyeran",
    "name": "Mayak Gyeran (Korean Marinated Soy Eggs)",
    "description": "Jammy soft-boiled eggs soaking in a sweet-savory soy broth loaded with garlic, scallion, gochugaru and sesame. Spoon the eggs and broth over hot rice for a dangerously crave-able meal-prep bowl that costs almost nothing.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 12
      },
      {
        "ingredientId": "water",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 4
      },
      {
        "ingredientId": "garlic",
        "quantity": 6
      },
      {
        "ingredientId": "scallion",
        "quantity": 3
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
        "ingredientId": "sesame-seeds",
        "quantity": 2
      },
      {
        "ingredientId": "rice",
        "quantity": 4
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "extra, sliced thin for garnish"
      }
    ],
    "steps": [
      "Bring a pot of water to a rolling boil. Gently lower in 8 eggs straight from the fridge with a spoon, then immediately bring the water back to a gentle simmer (small steady bubbles, not a violent boil) and cook for exactly 6.5 to 7 minutes for jammy, custardy yolks. These stay intentionally soft in the center, which is safe when you use fresh, refrigerated eggs and keep them cold afterward.",
      "While the eggs cook, fill a bowl with cold water and ice. The instant the timer goes off, transfer the eggs to the ice bath and chill at least 5 minutes; this stops the cooking and makes peeling much easier.",
      "Make the marinade: in a container, stir together 12 tbsp soy sauce, 1 cup water, and 4 tbsp sugar until the sugar fully dissolves.",
      "Mince 6 cloves garlic and thinly slice 3 scallions. Stir the garlic, scallions, 2 tsp gochugaru, 2 tsp sesame oil, and 2 tsp sesame seeds into the marinade.",
      "Peel the cooled eggs under a thin stream of cold water, starting at the wide (air-pocket) end. Work gently so the soft whites stay intact.",
      "Submerge the peeled eggs in the marinade. Lay a paper towel directly on the surface to keep the exposed tops in the soy, or turn the eggs every few hours.",
      "Cover and refrigerate at least 6 hours, ideally overnight, until the eggs turn deeply savory and the whites take on a glassy amber color. Keep refrigerated the whole time and eat within 3 to 4 days.",
      "To serve, scoop 1 cup hot cooked rice into a bowl, top with 2 eggs (halve them to show the jammy yolk), and spoon plenty of the garlicky soy broth over the top. Garnish with the extra sliced scallion if you like."
    ],
    "totalTimeMinutes": 385,
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
      "Eggs and rice are two of the cheapest foods in any dorm pantry, so a batch of 4 bowls lands at roughly a dollar or so per serving.",
      "Buy a big head of garlic and one bottle of soy sauce; they last for weeks of marinated-egg batches and barely move the needle on cost.",
      "No gochugaru? A pinch of red pepper flakes or a squirt of any chili sauce you already own gives the same kick for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "gochugaru",
        "swap": "red pepper flakes or a fresh sliced chili",
        "savings": "Uses what you already have instead of a Korean-specific spice"
      },
      {
        "forIngredientId": "sesame-oil",
        "swap": "any neutral oil plus a few extra sesame seeds",
        "savings": "Skips a specialty oil if your pantry is bare"
      },
      {
        "forIngredientId": "rice",
        "swap": "instant rice, leftover takeout rice, or even toast",
        "savings": "Stretches the broth over whatever cheap starch you have"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 16,
      "carbs": 42,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "egg",
      "korean",
      "meal-prep",
      "soy",
      "marinated-eggs",
      "rice-bowl",
      "budget",
      "make-ahead"
    ]
  },
  {
    "id": "egg-dhaba-anda-curry",
    "name": "Dhaba-Style Egg Curry (Anda Curry)",
    "description": "Hard-boiled eggs fried until golden, then simmered in a deep, spicy onion-tomato masala that tastes straight off a Punjabi roadside dhaba. No cream, no special gear, just pantry spices and a pan, ready to spoon over rice or scoop up with bread.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "hard-boiled and peeled"
      },
      {
        "ingredientId": "ghee",
        "quantity": 2,
        "note": "split, for frying the eggs and the masala base"
      },
      {
        "ingredientId": "cumin-seeds",
        "quantity": 1,
        "note": "to bloom in the hot fat"
      },
      {
        "ingredientId": "onion",
        "quantity": 2,
        "note": "finely chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 2
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "finely chopped or pureed"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1
      },
      {
        "ingredientId": "coriander",
        "quantity": 2,
        "note": "ground"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 1,
        "note": "use less if heat-shy"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 2
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "to loosen the masala into gravy"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "chopped, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Hard-boil the eggs: place them in a saucepan, cover with cold water, bring to a boil, then cook 9-10 minutes for fully set yolks (safest here since they get simmered). Cool under cold running water, peel, then prick or lightly score each egg a few times so the masala soaks in.",
      "Heat 1 tbsp ghee in a wide pan over medium heat. Add the peeled eggs with a pinch of turmeric and salt and fry 3-4 minutes, rolling them, until the whites blister and turn golden. Remove and set aside.",
      "Add the remaining 1 tbsp ghee to the same pan with the cumin seeds and let them sizzle until fragrant, about 30 seconds. Add the onions and cook over medium heat 8-10 minutes, stirring, until deeply golden brown (this color is the flavor, so don't rush it).",
      "Stir in the garlic and ginger paste and cook 1 minute, until the raw smell fades. Add the tomatoes and salt, cover, and cook 6-8 minutes until the tomatoes collapse into a soft pulp and the ghee begins to separate at the edges.",
      "Lower the heat and add the turmeric, ground coriander, and chili powder. Fry the spices into the masala 1-2 minutes, splashing in a tablespoon of water if it sticks, until you have a thick, glossy paste.",
      "Pour in the 2 cups water, stir, and bring to a gentle simmer. Let the gravy bubble 5 minutes to thicken slightly and round out, tasting and adjusting salt.",
      "Slip the fried eggs into the gravy and simmer gently 5-6 minutes, spooning sauce over them so they soak up the flavor. Stir in the garam masala in the last minute.",
      "Turn off the heat, garnish with chopped cilantro, and serve hot over steamed rice or with naan or roti. The eggs should be fully set throughout, never runny."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
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
      "Eggs are one of the cheapest proteins in the store, and this whole pan of restaurant-tasting curry runs well around $2.40 a serving. Buy a dozen and you've got two dinners.",
      "Slow-browning the onions is free flavor, so there's no need for cream or cashews like fancier curries. Patience replaces the expensive ingredients here.",
      "Stretch it further by adding a cubed boiled potato or a handful of frozen peas to the gravy, turning 4 servings into 5-6 for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "vegetable oil or any neutral oil for frying and the base",
        "savings": "Saves about $0.60 across the dish"
      },
      {
        "forIngredientId": "ginger-paste",
        "swap": "1 tsp ground ginger, or a thumb of grated fresh ginger",
        "savings": "Pennies, and uses what you have"
      },
      {
        "forIngredientId": "tomato",
        "swap": "1 cup canned crushed tomato or tomato sauce when fresh tomatoes are pricey or out of season"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 11,
      "carbs": 12,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🍛",
    "accentColor": "bg-orange-100",
    "cuisine": "Indian",
    "tags": [
      "egg",
      "indian",
      "curry",
      "dinner",
      "vegetarian",
      "budget",
      "dhaba",
      "punjabi",
      "spicy",
      "gluten-free"
    ]
  },
  {
    "id": "egg-tortilla-espanola",
    "name": "Tortilla Espanola (Spanish Potato Omelette)",
    "description": "Spain's beloved national dish: a thick, custardy cake of eggs and olive-oil-poached potatoes and onion, cooked low and slow then flipped golden. Wildly cheap, deeply satisfying, and just as good cold from the fridge as it is hot from the pan.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 3,
        "note": "peeled and sliced thin"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "halved and thinly sliced"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 8,
        "note": "for poaching the potatoes; most is drained and reusable"
      },
      {
        "ingredientId": "salt",
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
      "Peel the potatoes and slice them into thin coins, about 1/8 inch. Halve and thinly slice the onion. Pat the potatoes dry so they don't spit in the oil.",
      "Heat the olive oil in a nonstick skillet over medium-low. Add the potatoes and onion with half the salt. Keep them gently bubbling, not browning, so they poach and turn silky rather than fry crisp.",
      "Cook low and slow for 18 to 22 minutes, turning gently every few minutes, until a potato slice crushes easily with a fork. Do not let them brown. Drain in a colander set over a bowl, saving the flavorful oil.",
      "Crack the eggs into a large bowl, add the remaining salt, and beat well. Fold in the warm drained potatoes and onion and let sit 5 to 10 minutes so the potatoes soak up the egg.",
      "Wipe the skillet and return it to medium-low with 1 tablespoon of the reserved oil. Pour in the egg-and-potato mixture, spread it level, and cook undisturbed 5 to 7 minutes until the edges set and the bottom is golden while the top is still loose.",
      "Flip it: lay a flat plate over the skillet, hold it tight, and invert so the tortilla drops onto the plate. Slide it back into the pan cooked-side up.",
      "Cook the second side 4 to 6 minutes, tucking the edges in with a spatula to round it, until the center is set and an instant-read thermometer in the middle reads 160F with no raw egg pooling. For a classic just-set interior pull it right at temperature; cook a minute or two longer if you prefer it fully firm.",
      "Slide onto a plate and rest 5 minutes. Garnish with chopped parsley if using, then cut into wedges. Serve hot, room-temp, or chilled; it keeps refrigerated 3 to 4 days for lunches and tapas."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 33,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "The poaching oil is reusable: strain the drained olive oil into a jar and use it for the next batch of potatoes, sauteing, or salad dressing so almost nothing is wasted.",
      "Potatoes, eggs, and onion are some of the cheapest staples in the store, so a whole tortilla costs only a few dollars and feeds you for days.",
      "One tortilla is four to six servings. Slice it cold straight from the fridge into wedges for grab-and-go lunches instead of buying campus food."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "vegetable-oil",
        "savings": "Swap olive oil for vegetable oil to cut the oil cost by about 80 percent; it loses a little flavor but poaches the potatoes the same way."
      },
      {
        "forIngredientId": "potato",
        "swap": "yukon-gold-potato",
        "savings": "Yukon gold potatoes give a creamier, buttery interior for a similar price per spud."
      },
      {
        "forIngredientId": "onion",
        "swap": "scallion",
        "savings": "No onion? Stir a few sliced scallions into the eggs for a milder, fresher bite."
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 11,
      "carbs": 24,
      "fat": 21,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish",
    "tags": [
      "egg",
      "spanish",
      "meal-prep",
      "vegetarian",
      "budget",
      "potato",
      "tapas",
      "gluten-free"
    ]
  },
  {
    "id": "egg-wok-hei-fried-rice",
    "name": "Wok-Hei Egg Fried Rice",
    "description": "Glossy, smoky egg fried rice where every grain is coated in egg and kissed by high-heat \"wok hei\" — five pantry staples, ten minutes, and it genuinely beats takeout. Inspired by @madewithlau (madewithlau.com).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "cooked the day before and chilled; cold, dry grains are key"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "beaten with a pinch of salt"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "or any neutral high-smoke-point oil"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.06,
        "note": "a small pinch (about 1/2 tsp) to round out the flavor"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "light-soy-sauce",
        "quantity": 1,
        "note": "drizzle down the side of the hot wok"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      }
    ],
    "steps": [
      "Ahead of time (ideally the day before): cook 1 cup dry jasmine rice, spread it on a plate, and chill uncovered in the fridge so the grains dry out and firm up. Cold day-old rice is the single biggest factor in good fried rice.",
      "Beat the 3 eggs with a small pinch of salt. Break up any clumps in the cold rice with your fingers so it's loose and grain-by-grain. Have the soy sauce, salt, sugar, and white pepper within arm's reach — this cooks fast.",
      "Set a wok or large skillet over high heat until it just starts to smoke. Add the 2 tbsp oil and swirl to coat. Pour in the beaten eggs, let them puff for a few seconds, then scramble quickly until just set but still glossy (about 20–30 seconds) — cook the egg fully through; do not leave it runny.",
      "Push the egg to one side (or scoop it out briefly) and add the cold rice to the hot oil. Press and toss to break up clumps and coat every grain, spreading it out so it sears against the pan rather than steaming.",
      "Toss and fold continuously for 2–3 minutes over high heat, letting the rice sit for a few seconds between tosses so it picks up that toasty 'wok hei' — you'll hear it sizzle and smell it turn nutty.",
      "Fold the egg back in and break it into small bits through the rice. Season with the 1/2 tsp salt, a pinch of sugar, and 1/4 tsp white pepper, tossing to distribute evenly.",
      "Drizzle the 1 tbsp light soy sauce down the hot side of the wok (not directly onto the rice) so it sizzles and caramelizes for a second before you toss it through. Taste and adjust salt.",
      "Kill the heat, toss in the optional sliced scallion, and serve immediately while hot and steamy."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 4,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Make rice in a big batch and stash leftovers in the fridge — day-old rice is both cheaper per serving and better for frying than fresh.",
      "Jasmine rice is one of the cheapest items in the store (pennies per serving). Buy the big bag and this dish stays well under a dollar a plate.",
      "No fresh scallion? Skip it or use a pinch of any dried green you have. The egg, rice, and soy do the heavy lifting."
    ],
    "substitutions": [
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Day-old basmati or plain white rice works just as well — any cold, dry leftover rice.",
        "savings": "Use whatever rice you already have to spend $0 extra."
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Canola, peanut, or any neutral high-heat oil; save toasted sesame oil for a finishing drizzle (it burns on high heat).",
        "savings": "Cheapest neutral oil keeps cost negligible."
      },
      {
        "forIngredientId": "light-soy-sauce",
        "swap": "Regular soy sauce, or tamari for gluten-free; start with a little and taste, since saltiness varies.",
        "savings": "Use the soy sauce already in your cupboard."
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 14,
      "carbs": 52,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Cantonese / Chinese",
    "tags": [
      "egg",
      "cantonese",
      "fried-rice",
      "wok",
      "10-minute",
      "pantry",
      "dinner",
      "budget",
      "vegetarian"
    ]
  },
  {
    "id": "egg-kimchi-fried-rice-sunny-egg",
    "name": "Kimchi Fried Rice with a Runny Sunny-Side Egg",
    "description": "Korea's ultimate fridge-clean-out comfort food: tangy, spicy kimchi sizzled with gochujang and butter, folded into day-old rice and pressed until the bottom turns crispy, then crowned with a glossy sunny-side egg whose runny yolk you break right over the top. Cheap, fast, and endlessly forgiving.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "kimchi",
        "quantity": 3,
        "note": "well-fermented sour kimchi, roughly chopped; reserve a splash of juice"
      },
      {
        "ingredientId": "rice",
        "quantity": 3,
        "note": "cold day-old cooked rice, clumps broken up"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one per serving, fried sunny-side up"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 1
      },
      {
        "ingredientId": "butter",
        "quantity": 1.5
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "for frying the eggs"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "added off heat to finish"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "whites and greens separated"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 0.5,
        "optional": true,
        "note": "extra heat, garnish"
      },
      {
        "ingredientId": "nori-sheets",
        "quantity": 1,
        "optional": true,
        "note": "snipped into thin strips, garnish"
      }
    ],
    "steps": [
      "Chop about 3/4 cup kimchi into bite-size pieces and reserve a tablespoon of its juice. If your rice is fresh and sticky, spread it on a plate and chill 10-15 minutes so it dries out and fries instead of steams.",
      "Melt the butter in a large nonstick or cast-iron skillet over medium heat. Add the kimchi and scallion whites and saute 3-4 minutes, until the kimchi softens, darkens, and smells toasty.",
      "Stir in the minced garlic, gochujang, sugar, and reserved kimchi juice. Cook 1 minute, stirring constantly, until the paste turns glossy and a shade darker; don't let the garlic scorch.",
      "Add the cold rice and soy sauce. Toss to coat, then press the rice into an even layer and let it sit undisturbed 2-3 minutes to crisp on the bottom. Stir and repeat once more until you hear it sizzle and see golden crusty bits. Off the heat, drizzle in the sesame oil, fold through, and cover to keep warm.",
      "Wipe out a separate small nonstick pan, add the vegetable oil, and heat over medium until shimmering. Crack in the eggs and fry 2-3 minutes, spooning a little hot oil over the whites, until the whites are fully set and opaque and the edges are lacy and crisp.",
      "The runny yolk here is intentional. If you'd rather have it fully cooked, keep frying 1-2 minutes more (or flip the egg) until the yolk is firm before serving.",
      "Divide the fried rice between two bowls and slide one sunny-side egg onto each.",
      "Scatter scallion greens, sesame seeds, gochugaru, and nori strips over the top. Serve immediately and break the yolk so it runs into the rice before eating."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "This dish exists to use up aging, sour kimchi - the older and funkier, the better the flavor, so don't toss that half-forgotten jar.",
      "Day-old leftover rice is free real estate: cook a big batch earlier in the week (or save cold rice from takeout) so frying night is basically free.",
      "Skip the optional nori and sesame seeds if you don't have them - a single fried egg and a splash of soy sauce already make this a full meal for under a dollar a bowl."
    ],
    "substitutions": [
      {
        "forIngredientId": "gochujang",
        "swap": "1 tsp sriracha or hot sauce plus a pinch of sugar",
        "savings": "uses a bottle you likely already have instead of buying a tub of gochujang"
      },
      {
        "forIngredientId": "butter",
        "swap": "an equal amount of vegetable oil",
        "savings": "cheaper and makes the dish dairy-free"
      },
      {
        "forIngredientId": "kimchi",
        "swap": "drained sauerkraut with an extra 1/2 tsp gochugaru for color and heat",
        "savings": "a jar of sauerkraut is often cheaper and lasts longer in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 460,
      "protein": 13,
      "carbs": 62,
      "fat": 18,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "egg",
      "korean",
      "kimchi",
      "fried-rice",
      "spicy",
      "vegetarian",
      "budget",
      "leftovers",
      "quick",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-french-rolled-omelette-roulee",
    "name": "Classic French Rolled Omelette (Omelette Roulée)",
    "description": "A pale-yellow rolled omelette in the Julia Child tradition: silky and tender outside with a soft, just-set center, done in under a minute. A bucket-list technique that turns three eggs and a pat of butter into something genuinely restaurant-worthy.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "finely snipped, for garnish"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "finely chopped, for garnish"
      }
    ],
    "steps": [
      "Crack 3 eggs into a bowl, add the salt and pepper, and beat with a fork just until the yolks and whites are uniformly blended and slightly frothy, about 20 to 30 strokes. Don't overbeat: you want a single color, not a foam.",
      "Set an 8-inch nonstick skillet over medium-high heat. Add 1 tbsp butter and swirl it as it melts. When the foam rises and just begins to subside (the butter smells nutty but has not browned), the pan is ready; pour in all the eggs at once.",
      "Let the eggs sit undisturbed for 2 to 3 seconds, then immediately shake the pan back and forth over the heat while stirring quickly in small circles with the flat of the fork. This builds tiny, soft curds and keeps the eggs from coloring.",
      "After about 20 to 30 seconds the curds will be set but the surface still glossy and creamy (this soft, just-set center is intentional, not raw or runny). Stop stirring and let the bottom set for 3 to 4 more seconds so the omelette can hold together.",
      "Tilt the pan away from you to about 45 degrees. With the fork or a spatula, fold the top third of the omelette down over the middle, then nudge the whole thing toward the far lip of the pan so it rolls onto itself into a fat cigar shape.",
      "Hold a warm plate in your free hand and invert the pan over it so the omelette rolls out seam-side down into a smooth oval. If needed, tuck the edges with the back of a fork to neaten the shape.",
      "Rub the top with any butter left in the pan for shine, scatter the optional chives and parsley over the top, and serve immediately while the center is still warm."
    ],
    "totalTimeMinutes": 7,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 2,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Eggs and butter are the whole recipe, so this is one of the cheapest restaurant-quality dishes you can make. Buy the largest carton of eggs your fridge fits to drop the per-egg cost.",
      "No fresh chives or parsley? Skip them entirely or use a pinch of dried herbs you already have. The omelette stands on its own without garnish.",
      "A cheap 8-inch nonstick pan is all you need: no carbon-steel required, and a good nonstick surface actually makes the roll easier for beginners."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "1 tbsp olive oil or plant butter for a dairy-free version",
        "savings": "olive oil runs a few cents more; plant butter is roughly the same"
      },
      {
        "forIngredientId": "chives",
        "swap": "1 tbsp chopped scallion greens",
        "savings": "saves about $2.30 vs a bunch of fresh chives"
      },
      {
        "forIngredientId": "eggs",
        "swap": "3/4 cup liquid whole eggs",
        "savings": "costs a bit more but skips cracking and reduces waste"
      }
    ],
    "estimatedNutrition": {
      "calories": 330,
      "protein": 19,
      "carbs": 2,
      "fat": 27,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "French",
    "tags": [
      "egg",
      "french",
      "breakfast",
      "quick",
      "5-ingredient",
      "technique",
      "vegetarian",
      "high-protein"
    ]
  },
  {
    "id": "egg-foolproof-poached-eggs-whirlpool",
    "name": "Foolproof Poached Eggs (Whirlpool Method)",
    "description": "Neat, tight poached eggs with a flooding-gold runny yolk that make any toast or grain bowl feel like a chef move. The whirlpool-plus-vinegar trick wraps the white around the yolk instead of leaving a wispy mess, so it actually works every time.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "use the freshest eggs you have; older whites spread"
      },
      {
        "ingredientId": "water",
        "quantity": 4,
        "note": "enough to fill a small pot about 3 inches deep"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "plain white or distilled; helps the white set fast"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "optional": true,
        "note": "a small pinch in the water"
      },
      {
        "ingredientId": "bread",
        "quantity": 2,
        "optional": true,
        "note": "toasted, for serving"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped, to garnish"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.25,
        "optional": true,
        "note": "to finish"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "optional": true,
        "note": "freshly ground, to finish"
      }
    ],
    "steps": [
      "Crack each egg into its own small cup or ramekin first. This lets you slide it in cleanly and catch any blood spots or shell before they hit the water.",
      "Fill a small saucepan with about 3 inches of water and bring it to a bare simmer over medium heat: you want lazy wisps and tiny bubbles on the bottom, not a rolling boil, which would shred the whites. If it starts to boil, lower the heat until the surface goes still.",
      "Stir in the vinegar and a pinch of salt; the vinegar helps the white firm up fast so it hugs the yolk.",
      "With a spoon, stir the water in one direction to create a gentle whirlpool, or vortex, in the center of the pot.",
      "Hold a cup right at the water's surface and slide one egg into the middle of the vortex. The spinning water wraps the white into a neat teardrop. Poach one egg at a time for the best shape.",
      "Cook 3 to 4 minutes at that bare simmer for a fully set white and a runny yolk. Lift the egg with a slotted spoon and gently press the white; it should feel set and jiggle-free, not slippery.",
      "Rest the spoon on a folded paper towel for a few seconds to drain off the poaching water so your toast doesn't get soggy, then repeat the whirlpool and slide for the second egg.",
      "Serve right away over toasted bread or a grain bowl. Finish with flaky salt, freshly ground pepper, and a scatter of snipped chives.",
      "Food-safety note: runny poached yolks are not fully cooked and are best for healthy adults. If you're pregnant, very young, older, or immune-compromised, cook an extra 1 to 2 minutes until the yolk is set through."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 9,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Eggs are one of the cheapest proteins in the store: two poached eggs run well under a dollar and turn plain toast or leftover rice into a real meal.",
      "Plain distilled white vinegar is pennies a tablespoon and lasts forever, so don't buy a fancy bottle just for poaching.",
      "Buy the freshest eggs you can: fresher whites hold together tightly, which means fewer wispy strands and no wasted eggs."
    ],
    "substitutions": [
      {
        "forIngredientId": "vinegar",
        "swap": "Use apple cider vinegar or lemon juice; any mild acid helps the white set",
        "savings": "Roughly the same cost; use what's already in the pantry"
      },
      {
        "forIngredientId": "bread",
        "swap": "Serve over rice, an English muffin, or a grain bowl instead of toast",
        "savings": "Rice is about a dime a cup, cheaper than bread"
      },
      {
        "forIngredientId": "chives",
        "swap": "Snipped scallion greens or fresh parsley for the same fresh-herb pop",
        "savings": "A single scallion stalk is about 20 cents vs. a chive bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 160,
      "protein": 13,
      "carbs": 1,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🥚",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "breakfast",
      "poached-egg",
      "high-protein",
      "vegetarian",
      "quick",
      "budget",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-classic-eggs-benedict-blender-hollandaise",
    "name": "Classic Eggs Benedict with Blender Hollandaise",
    "description": "The ultimate brunch showstopper: a toasted English muffin layered with warm Canadian bacon, a silky poached egg, and a blanket of rich, lemony hollandaise. The blender-hollandaise shortcut makes this fancy classic totally doable in a dorm kitchen in under 30 minutes.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "english-muffin",
        "quantity": 2,
        "note": "split into halves"
      },
      {
        "ingredientId": "canadian-bacon",
        "quantity": 4,
        "note": "2 slices per serving"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "for poaching (2 per serving)"
      },
      {
        "ingredientId": "egg-yolks",
        "quantity": 3,
        "note": "for the hollandaise"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "melted very hot for the hollandaise"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "about 1 tbsp juice for the sauce"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.125,
        "note": "a pinch for the hollandaise"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "white vinegar for the poaching water"
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
        "ingredientId": "paprika",
        "quantity": 0.25,
        "note": "for dusting on top",
        "optional": true
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "note": "snipped, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Melt the 6 tbsp butter in the microwave or a small pot until fully liquid and very hot, just bubbling (about 45-60 sec in the microwave); it must stay hot, because that heat is what gently cooks the yolks and lets the sauce emulsify. Use pasteurized eggs if you can, since the yolks are only lightly cooked.",
      "Fill a wide pot or deep skillet with about 3 inches of water, add the 1 tbsp vinegar, and bring to a bare simmer over medium heat (small bubbles, never a rolling boil, so the eggs stay tender).",
      "Make the hollandaise: add the 3 egg yolks, about 1 tbsp lemon juice, the pinch of cayenne, and a pinch of salt to a blender. Blend 10 seconds, then with the motor running stream in the hot butter slowly and steadily until the sauce is thick, pale, and pourable. Keep it covered in the warm blender and serve within 30 minutes; do not let it sit at room temperature longer.",
      "Warm the Canadian bacon: heat a dry skillet over medium and cook the 4 slices about 1-2 min per side until lightly browned and hot through. Toast the English muffin halves until golden (toaster or under the broiler).",
      "Poach the eggs: crack each egg into a small cup, swirl the simmering water, and gently slide the eggs in one at a time. Poach 3-4 minutes for set whites with runny yolks (go to 4 min if you prefer firmer yolks). Lift out with a slotted spoon and rest on a paper towel to drain.",
      "Assemble: place 2 toasted muffin halves on each plate, top each with a slice of warm Canadian bacon, then a drained poached egg.",
      "Spoon the warm hollandaise generously over each egg, then season with a little salt and pepper.",
      "Dust with paprika and scatter snipped chives over the top, and serve immediately while everything is hot."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "blender",
      "microwave"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Save the 3 leftover egg whites from the hollandaise in a covered container in the fridge for a next-day omelette or scramble so nothing goes to waste.",
      "Skip the pricey chives jar and snip a scallion green on top for color instead, or just lean on the paprika dusting.",
      "Swap Canadian bacon for regular sliced ham or crisped regular bacon, whichever is cheaper at your store, since this dish is forgiving about the meat layer."
    ],
    "substitutions": [
      {
        "forIngredientId": "canadian-bacon",
        "swap": "Use 2 slices of deli ham or 2 strips of crisped regular bacon per serving",
        "savings": "saves about $0.30 per serving"
      },
      {
        "forIngredientId": "lemon",
        "swap": "Use 1 tbsp bottled lemon juice instead of a fresh lemon",
        "savings": "saves about $0.55"
      },
      {
        "forIngredientId": "english-muffin",
        "swap": "Toast a split bagel or two slices of sturdy bread as the base",
        "savings": "saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 26,
      "carbs": 28,
      "fat": 34,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "breakfast",
      "brunch",
      "poached-egg",
      "hollandaise",
      "classic"
    ]
  },
  {
    "id": "egg-jammy-soft-boiled-6-minute",
    "name": "Jammy Soft-Boiled Eggs (6-Minute)",
    "description": "Glossy set whites wrapped around a gorgeously gooey, jam-like yolk - the trendy egg that crowns every ramen or grain bowl. Foolproof once you nail the timing, and they keep beautifully for meal prep.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "water",
        "quantity": 6,
        "note": "enough to cover the eggs by about an inch"
      },
      {
        "ingredientId": "ice",
        "quantity": 2,
        "note": "for the ice bath"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.5,
        "note": "to finish"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "freshly cracked, to finish"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "chili-crisp",
        "quantity": 1,
        "optional": true,
        "note": "for drizzling"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "optional": true,
        "note": "for dipping or drizzling (omit to keep gluten-free)"
      }
    ],
    "steps": [
      "Bring about 6 cups of water to a rolling boil in a small saucepan over high heat - enough to fully submerge the eggs by an inch. A steady, active boil is key for consistent timing.",
      "While the water heats, fill a bowl with the ice and cold water to make an ice bath and set it next to the stove. This halts the cooking instantly and makes peeling far easier.",
      "Take the eggs straight from the fridge. Using a slotted spoon, gently lower each cold egg into the boiling water one at a time so they don't crack, then start your timer the moment the last egg is in.",
      "Cook for exactly 6 minutes for a loose, jammy yolk or 7 minutes for a firmer, jam-set yolk, keeping the water at a steady gentle boil and lowering the heat if it threatens to boil over. For fully set, food-safe-throughout yolks, cook 10-12 minutes instead.",
      "Immediately transfer the eggs to the ice bath with the slotted spoon and chill for at least 2 minutes. Cooling fully shrinks the egg from the shell and stops carryover cooking so the yolk stays jammy.",
      "Peel under a thin stream of cool running water: tap each egg all over to crackle the shell, then peel from the wider bottom end where the air pocket sits, going slowly to keep the delicate whites intact.",
      "Pat dry and halve each egg lengthwise with a sharp knife, wiping the blade clean between cuts; arrange cut-side up so the molten yolk shows.",
      "Finish with flaky sea salt and freshly cracked pepper. If using, scatter sliced scallion and drizzle with chili crisp or a little soy sauce. Eat right away while warm and runny, or refrigerate peeled eggs in a covered container for up to 3 days and serve cold or gently rewarmed."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Eggs are one of the cheapest proteins in the store - buy the largest carton your fridge can hold and batch-boil a week's worth at once.",
      "Skip the optional garnishes entirely; a pinch of salt and pepper you already own turns these into a complete snack for pennies.",
      "Reuse the same pot of boiling water for back-to-back batches instead of heating fresh water each time to save energy."
    ],
    "substitutions": [
      {
        "forIngredientId": "eggs",
        "swap": "Use duck eggs for a richer, larger yolk - add about 1 minute to the timing.",
        "savings": "costs more"
      },
      {
        "forIngredientId": "chili-crisp",
        "swap": "Drizzle with sriracha or hot sauce for the same spicy kick.",
        "savings": "about the same"
      },
      {
        "forIngredientId": "flaky-sea-salt",
        "swap": "Any regular table salt or kosher salt works just as well for seasoning.",
        "savings": "saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 156,
      "protein": 13,
      "carbs": 1,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "high-protein",
      "meal-prep",
      "snack",
      "soft-boiled",
      "quick",
      "vegetarian",
      "gluten-free"
    ]
  },
  {
    "id": "egg-ny-deli-bacon-egg-cheese-roll",
    "name": "New York Deli Bacon, Egg & Cheese on a Roll",
    "description": "The legendary bodega BEC: crispy bacon, soft folded eggs, and gooey American cheese stacked on a buttery griddled kaiser roll. Cheap, handheld, and deeply crave-able, it's the grab-and-go breakfast that tastes like New York.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "kaiser-rolls",
        "quantity": 1,
        "note": "split in half; a hard roll also works"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "bacon",
        "quantity": 3,
        "note": "cooked crisp"
      },
      {
        "ingredientId": "american-singles",
        "quantity": 2,
        "note": "the classic gooey melt"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "split between griddling the roll and cooking the eggs"
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
        "ingredientId": "ketchup",
        "quantity": 1,
        "optional": true,
        "note": "classic bodega add-on"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.5,
        "optional": true,
        "note": "salt, pepper, ketchup, with hot sauce if you like"
      }
    ],
    "steps": [
      "Lay the 3 bacon slices in a cold nonstick or cast-iron skillet, set over medium heat, and cook 6-8 minutes, flipping once, until deeply crisp with no pink remaining. Move to a paper towel and pour off all but a thin film of fat.",
      "Split the kaiser roll. Melt about 1/2 tbsp of the butter in the pan, set both cut sides down, and griddle 1-2 minutes until golden and toasty. Set the roll aside open-faced.",
      "Crack the 2 eggs into a bowl with the salt and pepper and beat well until fully blended and uniform in color.",
      "Wipe the pan, lower the heat to medium-low, and melt the remaining 1/2 tbsp butter. Pour in the eggs, let them set for about 20 seconds, then gently push them around with a spatula to form soft folds.",
      "When the eggs are mostly set but still glossy on top, lay the 2 American cheese slices over them and fold the egg sheet over the cheese. Cook 30-60 seconds more until the cheese is fully melted and the eggs are set through with no runny liquid (reach 160F for full safety).",
      "Pile the bacon onto the bottom of the toasted roll, then top with the cheesy folded egg.",
      "Add ketchup and a few dashes of hot sauce if using, then close with the top of the roll.",
      "Wrap the sandwich tightly in deli paper, foil, or parchment and let it rest 3-5 minutes. This steams the roll and melts everything together, the secret to a true bodega BEC. Unwrap and eat warm."
    ],
    "totalTimeMinutes": 18,
    "prepTimeMinutes": 4,
    "cookTimeMinutes": 14,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy bacon and American singles in bulk packs and freeze portions. Per sandwich the meat and cheese cost just over two dollars, so a homemade BEC beats any deli price.",
      "No kaiser roll? Any hard roll, hamburger bun, or even two slices of toast work and are often cheaper. The buttery griddle is what matters most.",
      "Save the rendered bacon fat in a jar and cook the eggs in it instead of butter for free extra flavor and zero added cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "american-singles",
        "swap": "cheddar-block or swiss-cheese slices",
        "savings": "Use whatever block cheese you already have; melts nearly as well."
      },
      {
        "forIngredientId": "bacon",
        "swap": "turkey-bacon or sausage",
        "savings": "Turkey bacon is leaner and a bit cheaper per slice."
      },
      {
        "forIngredientId": "kaiser-rolls",
        "swap": "bagel or english-muffin",
        "savings": "A bagel makes it a classic NYC bagel BEC; an english muffin is the budget pick."
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 33,
      "carbs": 36,
      "fat": 38,
      "fiber": 2
    },
    "emoji": "🥪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "breakfast",
      "sandwich",
      "bacon",
      "cheese",
      "handheld",
      "grab-and-go",
      "bodega"
    ]
  },
  {
    "id": "egg-loaded-breakfast-burrito-potato-bacon-cheese",
    "name": "Loaded Breakfast Burrito (Egg, Potato, Bacon & Cheese)",
    "description": "A whole breakfast wrapped in one warm flour tortilla: fluffy scrambled eggs, crispy golden potatoes, crackly bacon, and melty cheddar with a hit of hot sauce. Batch-roll a stack on Sunday, freeze, and microwave a hot handheld breakfast on your way out the door.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "tortilla",
        "quantity": 4,
        "note": "large flour tortillas, burrito size"
      },
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "russet-potato",
        "quantity": 2,
        "note": "scrubbed and diced small for fast, even crisping"
      },
      {
        "ingredientId": "bacon",
        "quantity": 6
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 4,
        "note": "about 1 cup shredded"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "for frying the potatoes"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "for soft-scrambling the eggs"
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
        "quantity": 0.5,
        "note": "seasons the potatoes",
        "optional": true
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 4,
        "note": "drizzle inside each burrito",
        "optional": true
      },
      {
        "ingredientId": "salsa",
        "quantity": 1,
        "note": "swap in for hot sauce, or serve on the side",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, scattered in for freshness",
        "optional": true
      }
    ],
    "steps": [
      "Dice 2 russet potatoes into small 1/4-inch cubes (smaller cubes crisp faster). Heat 2 tbsp vegetable oil in a large nonstick skillet over medium-high. Add the potatoes in a single layer and season with 1/2 tsp salt, 1/2 tsp pepper, and 1/2 tsp garlic powder if using.",
      "Fry the potatoes 10-14 minutes, stirring every few minutes, until deep golden and fork-tender all the way through. Scrape onto a plate and set aside.",
      "Wipe the skillet, lay in 6 slices of bacon, and cook over medium 6-8 minutes, flipping once, until fully crisp with no pink remaining. Drain on paper towel, then chop into bits.",
      "Pour off the bacon fat, lower heat to medium-low, and melt 1 tbsp butter. Whisk 8 eggs with the remaining 1/2 tsp salt and pour in. Stir gently and constantly, pulling the curds across the pan, and take them off the heat while still soft and just set (no runny liquid, but not dried out); they finish from residual heat.",
      "Off the heat, fold the bacon, potatoes, and 4 oz (about 1 cup) shredded cheddar into the warm eggs so the cheese melts through the filling. Stir in sliced scallions if using.",
      "Warm each tortilla 10-15 seconds in the microwave or a dry skillet so it folds without cracking. Spoon a quarter of the filling in a line just below the center, leaving room on the sides; drizzle with hot sauce or salsa if using.",
      "Fold the bottom edge up over the filling, fold in both sides, then roll away from you into a tight cylinder, keeping the sides tucked. Repeat for all four.",
      "To serve now: griddle each burrito seam-side down in a dry skillet over medium 1-2 minutes per side to seal and toast. To meal-prep: cool completely, wrap each tightly in foil or parchment, and freeze up to 1 month. Reheat from frozen in the microwave 2-3 minutes (unwrap foil first), flipping halfway, until steaming hot throughout."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "microwave"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Russet potatoes are one of the cheapest fillers in the store, so they bulk out the burritos and stretch pricier eggs and bacon across more servings.",
      "Buy a block of cheddar and shred it yourself; it melts better and costs noticeably less per ounce than pre-shredded bags.",
      "Make a double batch and freeze: reheating a homemade burrito beats a store-bought frozen breakfast sandwich and costs a fraction per serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey-bacon or crumbled breakfast sausage",
        "savings": "Turkey bacon runs cheaper per slice and still crisps up"
      },
      {
        "forIngredientId": "russet-potato",
        "swap": "frozen hash browns or tater tots",
        "savings": "Skip the dicing and frying; frozen hash browns crisp fast and cost about the same"
      },
      {
        "forIngredientId": "shredded-cheddar",
        "swap": "any melting cheese like a shredded Mexican blend or American singles",
        "savings": "Use whatever block or slices you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 22,
      "carbs": 38,
      "fat": 26,
      "fiber": 3
    },
    "emoji": "🌯",
    "accentColor": "bg-amber-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "egg",
      "tex-mex",
      "breakfast",
      "meal-prep",
      "freezer-friendly",
      "high-protein",
      "handheld",
      "bacon",
      "potato"
    ]
  },
  {
    "id": "egg-uova-in-purgatorio",
    "name": "Eggs in Purgatory (Uova in Purgatorio)",
    "description": "Italy's cozy answer to shakshuka: eggs gently poached in a fiery garlic-and-chili tomato sauce, the soft 'souls' floating in the red. A 25-minute one-pan dinner built from a can of tomatoes and a few eggs, finished with crusty toast for scooping.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "thinly sliced or minced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely chopped"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "note": "more or less to taste"
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
        "ingredientId": "bread",
        "quantity": 4,
        "note": "crusty, for toasting and scooping"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 2,
        "optional": true,
        "note": "grated, for finishing"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "optional": true,
        "note": "torn, for garnish"
      }
    ],
    "steps": [
      "Warm 2 tbsp olive oil in a medium skillet over medium heat. Add the finely chopped half onion and cook 3-4 minutes, stirring, until soft and translucent but not browned.",
      "Add the sliced garlic and red pepper flakes and cook 30-60 seconds, just until fragrant. Don't let the garlic brown or it turns bitter.",
      "Pour in the whole can of crushed tomatoes. Season with the salt and pepper, stir, and bring to a gentle simmer. Cook 8-10 minutes, stirring occasionally, until the sauce thickens slightly and tastes rich rather than raw.",
      "Use the back of a spoon to make 4 small wells in the sauce, spacing them out. Crack one egg into each well so they poach separately.",
      "Reduce the heat to low, cover the pan, and poach 5-7 minutes until the whites are fully set and opaque with the yolks still soft and runny. If you prefer firm, food-safe yolks (best for anyone avoiding runny eggs), keep covered another 3-4 minutes until the yolks are set.",
      "While the eggs poach, toast the bread until golden and crisp, either in a dry pan on the stovetop or in a toaster.",
      "Off the heat, finish with grated parmesan and torn fresh basil if using. Serve straight from the pan with the toast for scooping up the sauce and yolks."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "A single can of crushed tomatoes is the backbone of the dish and costs about $2 — buy the cheapest store brand; the chili and garlic do the heavy lifting on flavor.",
      "Skip the fresh basil and parmesan if money is tight; a pinch of dried oregano or a little extra red pepper still makes it sing.",
      "Use the heels and slightly stale ends of a loaf for the toast — they crisp up beautifully and nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "crushed-tomato",
        "swap": "A can of whole peeled tomatoes crushed by hand, or 2 cups of marinara if that's what you have",
        "savings": "Whole peeled tomatoes are often the same price; using leftover jarred sauce saves a separate purchase"
      },
      {
        "forIngredientId": "red-pepper-flakes",
        "swap": "A teaspoon of hot sauce or a pinch of cayenne stirred into the sauce",
        "savings": "Use a hot sauce you already own instead of buying a spice jar"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Any grated hard cheese, or skip it entirely",
        "savings": "Optional garnish — leaving it off costs nothing"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 21,
      "carbs": 42,
      "fat": 20,
      "fiber": 6
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Italian",
    "tags": [
      "egg",
      "italian",
      "neapolitan",
      "one-pan",
      "spicy",
      "tomato",
      "vegetarian",
      "budget",
      "dinner",
      "20-minute"
    ]
  },
  {
    "id": "egg-viral-baked-feta-eggs",
    "name": "Viral Baked Feta Eggs",
    "description": "A block of feta nestled in cracked eggs, baked until the cheese goes melty and the whites just set, then forked together into a creamy, salty scramble. Four core ingredients, almost zero hands-on time, and a big hit of protein to scoop into warm pita or pile onto toast.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "feta",
        "quantity": 2,
        "note": "a small block, not pre-crumbled, so it softens creamy; about half a cup once it breaks down"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "drizzle over the feta and eggs"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "note": "optional, for a little heat"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "feta is salty, so go light"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "pita",
        "quantity": 2,
        "note": "for scooping; or swap toast"
      },
      {
        "ingredientId": "pesto",
        "quantity": 1,
        "note": "optional swirl on top",
        "optional": true
      },
      {
        "ingredientId": "chili-crisp",
        "quantity": 1,
        "note": "optional swirl on top",
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "note": "optional garnish",
        "optional": true
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 400F. Lightly grease a small baking dish (about 6 to 8 inches) with a little of the olive oil.",
      "Place the block of feta in the middle of the dish. Drizzle the remaining olive oil over the feta, then crack the 4 eggs into the dish around it, spacing them so the whites have room to spread.",
      "Season the eggs and feta with the salt, pepper, and red pepper flakes. Go light on the salt since the feta is already salty.",
      "Bake for 18 to 22 minutes, until the egg whites are fully set and no longer translucent and the feta has softened and turned golden at the edges. For a shared dish, bake closer to 22 minutes so the yolks set fully; pull at 18 minutes if you want the yolks a little runnier.",
      "Let the dish rest for 1 minute, then use a fork to mash the softened feta into the eggs, swirling everything into a creamy, marbled scramble.",
      "Warm the pita while the eggs bake: pop it into the oven for the last 2 minutes, toast it in a dry pan over medium heat, or microwave it for 15 to 20 seconds.",
      "Swirl on the pesto or chili crisp if using, scatter chopped parsley over the top, and scoop it all up with the warm pita. Serve right away while hot."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 22,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Buy a block of feta instead of pre-crumbled. It is usually cheaper per ounce, softens way creamier, and the brine keeps leftovers fresh for weeks.",
      "Eggs are your protein workhorse here. A dozen stretches across several breakfasts, so buy the bigger carton and this dish costs pennies per serving.",
      "Skip the optional pesto and chili crisp if you are on a tight budget. The feta and red pepper flakes already carry plenty of flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "goat cheese or queso fresco for a similar tangy, salty melt",
        "savings": "queso fresco runs a bit cheaper per ounce than block feta"
      },
      {
        "forIngredientId": "pita",
        "swap": "any toast, a bagel, or a tortilla for scooping",
        "savings": "sandwich bread is much cheaper per serving than pita"
      },
      {
        "forIngredientId": "red-pepper-flakes",
        "swap": "a pinch of paprika or a few dashes of hot sauce",
        "savings": "use whatever spice you already own to avoid buying a new jar"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 21,
      "carbs": 24,
      "fat": 28,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-sky-100",
    "cuisine": "Mediterranean",
    "tags": [
      "egg",
      "mediterranean",
      "high-protein",
      "vegetarian",
      "viral",
      "baked",
      "feta",
      "quick",
      "dorm-friendly",
      "breakfast"
    ]
  },
  {
    "id": "egg-turkish-menemen",
    "name": "Turkish Menemen (Soft Scrambled Eggs with Tomato & Pepper)",
    "description": "Pillowy soft-scrambled eggs folded through sweet sauteed onion, mild green pepper and juicy tomato, finished with smoky Aleppo pepper and served family-style straight from the skillet with bread for scooping. Juicy, savory, and on the table in under 15 minutes from a handful of cheap produce.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "ripe, cored and cut into small cubes"
      },
      {
        "ingredientId": "cubanelle",
        "quantity": 1,
        "note": "mild green pepper, finely chopped"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "small, finely chopped"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "aleppo-pepper",
        "quantity": 1,
        "note": "pul biber; the signature flavor"
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
        "ingredientId": "bread",
        "quantity": 2,
        "note": "crusty bread for serving"
      },
      {
        "ingredientId": "feta",
        "quantity": 1,
        "optional": true,
        "note": "crumbled on top, optional"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, to finish"
      }
    ],
    "steps": [
      "Crack the 4 eggs into a bowl, add a pinch of the salt, and beat lightly with a fork just until the yolks and whites are combined. Set aside while you build the base.",
      "Heat the olive oil in a skillet over medium heat. Add the chopped onion and green pepper with a pinch of salt and cook, stirring, for 4-5 minutes until softened and translucent but not browned.",
      "Stir in the Aleppo pepper and let it bloom in the oil for about 20 seconds until fragrant and the oil turns reddish.",
      "Add the cubed tomatoes plus the remaining salt and the black pepper. Cook over medium heat for 5-6 minutes, stirring occasionally, until the tomatoes break down into a thick, saucy mixture and most of the watery liquid has cooked off.",
      "Turn the heat down to medium-low. Pour the beaten eggs evenly over the tomato mixture and let them sit undisturbed for about 20 seconds.",
      "Using a spatula, gently fold and push the eggs through the sauce in slow sweeps for 2-3 minutes. Stop while the eggs are still soft, glossy and slightly underdone so they stay creamy, not dry. The eggs are safe once no runny liquid egg remains; for menemen aim for just-set custardy curds rather than a firm scramble.",
      "Pull the skillet off the heat immediately; residual heat will finish the eggs in about 30 seconds. Crumble feta over the top and scatter chopped parsley if using.",
      "Serve hot straight from the pan with crusty bread for scooping. Eat right away while soft and creamy."
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
      "Use the softest, ripest (or even slightly bruised) tomatoes you can find — they're often marked down and break into sauce faster than firm ones.",
      "No fresh green pepper? Any leftover bell pepper or even a chopped jalapeno works; the dish is forgiving and just wants something green and mild-to-warm.",
      "Buy eggs by the dozen and split a carton with a roommate — at this price 4 eggs feeds two people a full breakfast for under a dollar in eggs."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "Swap in butter for a richer, classic Turkish version",
        "savings": "About the same cost"
      },
      {
        "forIngredientId": "cubanelle",
        "swap": "Use half a regular green bell pepper, finely chopped",
        "savings": "Often cheaper if you already have bell pepper on hand"
      },
      {
        "forIngredientId": "aleppo-pepper",
        "swap": "Use a pinch of paprika plus red-pepper-flakes for the same warm, smoky-spicy note",
        "savings": "Uses pantry staples you likely already own"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 15,
      "carbs": 20,
      "fat": 18,
      "fiber": 4
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Turkish",
    "tags": [
      "egg",
      "turkish",
      "breakfast",
      "vegetarian",
      "one-pan",
      "quick",
      "budget",
      "scrambled-eggs"
    ]
  },
  {
    "id": "egg-make-ahead-muffin-cups",
    "name": "Make-Ahead Egg Muffin Cups (Mini Frittatas)",
    "description": "Fluffy little baked frittatas loaded with cheese, bacon, and veggies that you can grab straight from the fridge or freezer. Whisk, pour, bake once, and you've got a whole week of hot, high-protein breakfasts in about a minute flat.",
    "mealType": "meal-prep",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "milk",
        "quantity": 0.33,
        "note": "about 1/3 cup, keeps them tender"
      },
      {
        "ingredientId": "cheese",
        "quantity": 3,
        "note": "shredded cheddar, ~3/4 cup total, divided between filling and tops"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "spinach",
        "quantity": 1,
        "note": "chopped, fresh or thawed"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely diced"
      },
      {
        "ingredientId": "bacon",
        "quantity": 3,
        "note": "cooked crisp and crumbled"
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
        "quantity": 2,
        "note": "to grease the tin"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "garnish, sliced"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 1,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Heat the oven to 350F with a rack in the center. Generously grease a 12-cup muffin tin with cooking spray (or use silicone or parchment liners) so the eggs release cleanly.",
      "Cook the bacon first: lay the slices in a cold nonstick skillet over medium heat and fry 6-8 minutes, turning once, until fully crisp with no pink. Drain on a paper towel, then crumble. The pork must be cooked all the way through.",
      "In the bacon fat (or 1 tsp oil), saute the diced onion and bell pepper over medium heat for 3-4 minutes until softened, then add the chopped spinach and cook 1 minute just until wilted. Let cool slightly.",
      "In a large bowl, whisk the eggs, milk, salt, pepper, and garlic powder vigorously for about 30 seconds until completely uniform and a little frothy.",
      "Divide the cooled veggies, crumbled bacon, and about two-thirds of the cheese evenly among the 12 cups (each about half full). Pour the egg mixture over the top, filling each cup to about 3/4, then sprinkle the remaining cheese over the tops.",
      "Bake 20-25 minutes until the centers are fully set and no longer jiggly or wet and the tops are lightly golden. The eggs should be cooked all the way through (no runny egg) for safe make-ahead storage.",
      "Cool in the tin 5 minutes, then run a knife around each cup and lift out onto a rack. Top with sliced scallions and hot sauce if serving right away.",
      "To store: cool completely, then refrigerate in an airtight container up to 4 days, or freeze up to 3 months. Reheat refrigerated cups in the microwave 30-45 seconds, or 60-90 seconds from frozen, until steaming hot throughout."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop",
      "microwave"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Use up whatever's wilting in your fridge instead of buying fresh veg for this: half an onion, the last of a pepper, and a handful of spinach all disappear into the egg.",
      "Skip pre-shredded cheese and grate a block yourself, or use the cheese end you'd otherwise toss; even a tablespoon per cup is plenty of flavor.",
      "Make a double batch and freeze it. Buying a dozen eggs once is far cheaper per breakfast than grabbing a sandwich on the way to class."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "diced ham, cooked sausage, or skip the meat and add more veggies",
        "savings": "Ham or skipping the meat shaves cost vs bacon"
      },
      {
        "forIngredientId": "milk",
        "swap": "any milk you have, or even a splash of water in a pinch",
        "savings": "Use what's open; water is free"
      },
      {
        "forIngredientId": "spinach",
        "swap": "frozen spinach (thawed and squeezed dry) or any chopped veg like broccoli or mushrooms",
        "savings": "Frozen runs cheaper and lasts longer"
      }
    ],
    "estimatedNutrition": {
      "calories": 200,
      "protein": 15,
      "carbs": 4,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "meal-prep",
      "breakfast",
      "high-protein",
      "make-ahead",
      "freezer-friendly",
      "dorm-friendly",
      "gluten-free"
    ]
  },
  {
    "id": "egg-loaded-vegetable-cheese-frittata",
    "name": "Loaded Vegetable & Cheese Frittata",
    "description": "A golden, sliceable egg cake packed with sauteed peppers, zucchini, spinach and melty cheese, baked in one skillet until just set. It's the ultimate fridge-clean-out dish: serves a crowd, holds five days in the fridge, and tastes great hot or cold for breakfast, lunch, or dinner.",
    "mealType": "lunch",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 10
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1
      },
      {
        "ingredientId": "zucchini",
        "quantity": 1
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1
      },
      {
        "ingredientId": "spinach",
        "quantity": 2
      },
      {
        "ingredientId": "cheese",
        "quantity": 3,
        "note": "shredded, divided between the egg mix and the top"
      },
      {
        "ingredientId": "parmesan",
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
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Position an oven rack in the center and preheat to 400F. Crack the 10 eggs into a large bowl, add the milk, italian seasoning, salt, and pepper, and whisk until fully blended and slightly frothy. Whisk in about half of the shredded cheese and all of the parmesan, then set aside.",
      "Heat the olive oil in a 10-12 inch oven-safe (cast iron) skillet over medium heat. Add the diced onion and cook 3-4 minutes until softened, then add the minced garlic and cook 30 seconds until fragrant.",
      "Add the diced bell pepper, zucchini, and sliced mushrooms. Saute 6-8 minutes, stirring occasionally, until the vegetables are tender and any released liquid has cooked off, so the frittata won't turn watery.",
      "Add the spinach by the handful and stir just until wilted, about 1-2 minutes. Spread the vegetables into an even layer and reduce the heat to medium-low.",
      "Pour the egg mixture evenly over the vegetables. Let it cook undisturbed for 2-3 minutes, gently lifting the edges with a spatula so uncooked egg runs underneath, until the bottom and sides start to set but the center is still loose.",
      "Scatter the remaining shredded cheese over the top, then carefully transfer the skillet to the oven. Bake 15-20 minutes until the frittata is puffed, golden, and fully set — the center should no longer jiggle and a knife inserted in the middle comes out clean (eggs cooked through, not runny).",
      "Remove from the oven (the handle will be very hot, use a mitt) and let rest 5 minutes so it finishes setting and firms up for clean slices. Run a spatula around the edge, slice into 6 wedges, garnish with chopped parsley if using, and serve hot or chilled."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "This is a fridge-clean-out dish on purpose, swap in any wilting veg you already have (half an onion, a handful of frozen spinach, the last of a bell pepper) instead of buying the exact list.",
      "Frozen vegetables are cheaper than fresh and work great here, just thaw and pat them dry first so the frittata stays firm, not soggy.",
      "One frittata makes 6 portions and keeps 5 days refrigerated, slice it and grab a wedge for cheap grab-and-go breakfasts and lunches all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use any milk you have (whole, oat, or almond) or even a splash of water, the dairy just adds tenderness.",
        "savings": "Use water for free"
      },
      {
        "forIngredientId": "cheese",
        "swap": "Any melting cheese works, swap in shredded mozzarella, crumbled feta, or the odd ends of cheese in your drawer.",
        "savings": "Use up leftover cheese instead of buying more"
      },
      {
        "forIngredientId": "zucchini",
        "swap": "Trade for whatever vegetable is cheapest or already wilting, broccoli, mushrooms, or frozen mixed veg all work.",
        "savings": "Frozen veg runs about half the price of fresh zucchini"
      }
    ],
    "estimatedNutrition": {
      "calories": 250,
      "protein": 18,
      "carbs": 7,
      "fat": 18,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Italian-American",
    "tags": [
      "egg",
      "italian-american",
      "frittata",
      "vegetarian",
      "meal-prep",
      "one-pan",
      "fridge-clean-out",
      "gluten-free",
      "high-protein"
    ]
  },
  {
    "id": "egg-omurice-ketchup-fried-rice",
    "name": "Omurice (Ketchup Chicken Fried Rice in a Soft Omelette)",
    "description": "Savory ketchup-seasoned chicken fried rice tucked under a soft, glossy omelette and crowned with a ketchup zigzag. This nostalgic Japanese yoshoku classic turns leftover rice into pure comfort food in under 30 minutes.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 3,
        "note": "cold, day-old cooked rice works best"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "2 per omelette"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 1,
        "note": "diced small; thigh stays juicy"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 5,
        "note": "3 tbsp for the rice, plus extra to drizzle"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "1 tbsp per omelette"
      },
      {
        "ingredientId": "vegetable-oil",
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
        "ingredientId": "frozen-peas",
        "quantity": 0.5,
        "optional": true,
        "note": "or mixed frozen veg"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, to garnish"
      }
    ],
    "steps": [
      "Pat the diced chicken thigh dry and season lightly with a pinch of the salt and pepper. Finely dice the onion and, if using, measure out the frozen peas.",
      "Heat the vegetable oil in a large nonstick skillet over medium-high. Add the chicken and cook 4-5 minutes, stirring, until golden and cooked through with no pink in the center (165F / fully opaque). Add the onion (and peas) and cook 2-3 minutes until the onion softens.",
      "Push everything to one side, squeeze in 3 tbsp of the ketchup, and let it sizzle and darken about 30 seconds to cook off the raw tang, then stir to coat the chicken and onion.",
      "Add the cold rice, breaking up any clumps. Stir-fry 2-3 minutes over medium-high until every grain is glossy and coated, seasoning with the remaining salt and pepper. Divide into two mounds, shape each into an oval on a plate, and keep warm.",
      "Wipe the skillet and set it over medium-low. Beat 2 eggs with a tiny pinch of salt until fully blended. Melt 1 tbsp butter, swirl to coat, then pour in the eggs.",
      "Stir the eggs gently with chopsticks or a spatula for the first few seconds to form small soft curds, then stop and let the bottom set while the surface stays glossy and just barely moist, about 1 minute. The omelette finishes cooking from residual heat once draped, setting to a safe soft-but-not-wet texture.",
      "Slide the omelette over one rice mound, tucking the edges underneath to wrap it. Repeat steps 5-6 with the remaining 2 eggs and 1 tbsp butter for the second serving.",
      "Finish each with a generous ketchup zigzag and a scatter of sliced scallion if using. Serve immediately while the omelette is hot and glossy."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use leftover takeout or day-old rice you already have on hand — cold rice fries up better and costs nothing extra.",
      "Swap the chicken for a couple of extra eggs, a handful of frozen veg, or chopped spam-style scraps to make it even cheaper while keeping it filling.",
      "Buy a big bottle of ketchup — it's the flavor backbone here and costs pennies per serving compared to bottled fried-rice sauces."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "leftover rotisserie chicken or diced ham",
        "savings": "Uses up scraps you already paid for"
      },
      {
        "forIngredientId": "butter",
        "swap": "vegetable-oil for cooking the omelette",
        "savings": "Saves about $0.15/serving and is dairy-free"
      },
      {
        "forIngredientId": "frozen-peas",
        "swap": "any frozen mixed veg or diced carrot",
        "savings": "Use whatever is in the freezer"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 27,
      "carbs": 62,
      "fat": 22,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Japanese",
    "tags": [
      "egg",
      "japanese",
      "yoshoku",
      "omelette",
      "fried-rice",
      "comfort-food",
      "leftover-rice",
      "dinner",
      "under-30-min"
    ]
  },
  {
    "id": "egg-ajitsuke-tamago-ramen-eggs",
    "name": "Ajitsuke Tamago (Soy-Marinated Ramen Eggs)",
    "description": "Jammy, soy-glazed soft-boiled eggs with molten orange centers, marinated in a sweet-savory soy-mirin bath. Make a batch on Sunday and you've got ramen-shop-level eggs to drop on instant noodles, rice bowls, or toast all week.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 4
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "sake",
        "quantity": 2
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for serving"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Bring a small pot of water to a gentle rolling boil over high heat, using enough to fully cover the eggs. While it heats, fill a bowl with ice and cold water for an ice bath. Keep the eggs cold until you're ready.",
      "Lower the cold eggs into the boiling water one at a time on a spoon and set a timer for exactly 7 minutes. Hold a steady gentle boil; stir gently for the first minute to center the yolks.",
      "At 7 minutes the eggs are soft-boiled (jammy): whites fully set and safe to eat, yolks still molten. Immediately move them to the ice bath and chill at least 5 minutes to stop the cooking.",
      "Peel the chilled eggs under a thin stream of cold running water, starting at the wide (air-pocket) end. Be gentle — soft-boiled whites tear easily. Set the peeled eggs aside.",
      "Make the marinade: in a small saucepan combine the soy sauce, mirin, sake, sugar, and water. Bring to a simmer over medium heat and cook 1 minute to cook off the alcohol and dissolve the sugar, then remove from heat and cool completely to room temperature (the marinade MUST be cool so the eggs don't overcook or sit warm).",
      "Pour the cooled marinade into a small container or zip bag and add the peeled eggs. They should be mostly submerged; lay a folded paper towel on top so the exposed parts stay coated, or turn the eggs once or twice as they soak.",
      "Seal and refrigerate 12 to 24 hours. Longer means deeper color and saltier flavor — don't go past 2 days or the whites turn rubbery and over-salted.",
      "To serve, lift an egg out and halve it with a clean, slightly wet knife to reveal the jammy center. Top with sliced scallion and sesame seeds. Keep leftover eggs in the marinade in the fridge and eat within 4 days."
    ],
    "totalTimeMinutes": 735,
    "prepTimeMinutes": 10,
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
      "This is one of the cheapest upgrades in cooking — under 30 cents an egg turns a 55-cent ramen pack into something that tastes like a $14 bowl.",
      "Don't toss the marinade after the eggs are gone — reuse it for another round of eggs, or splash it over rice, noodles, or steamed veggies as an instant sauce.",
      "No mirin or sake? Skip them and use a pinch more sugar plus a splash of water — soy sauce, sugar, and water alone still make a great marinade for cents."
    ],
    "substitutions": [
      {
        "forIngredientId": "mirin",
        "swap": "1 tbsp honey or sugar dissolved in a splash of water",
        "savings": "saves buying a specialty bottle"
      },
      {
        "forIngredientId": "sake",
        "swap": "rice vinegar, or just water with a pinch of sugar",
        "savings": "skips the liquor-store run"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "tamari for gluten-free, or low-sodium soy to dial back the salt",
        "savings": "use what's in the cupboard"
      }
    ],
    "estimatedNutrition": {
      "calories": 105,
      "protein": 7,
      "carbs": 4,
      "fat": 5,
      "fiber": 0
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "egg",
      "japanese",
      "ramen",
      "meal-prep",
      "make-ahead",
      "soft-boiled",
      "high-protein",
      "budget",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-masala-omelette-desi",
    "name": "Masala Omelette (Desi Omelette)",
    "description": "The 10-minute breakfast that runs circles around a plain omelette: eggs whisked with onion, tomato, green chili, and cilantro, brightened with turmeric and chili powder, then fried until set with lacy, crisp edges. Cheap, fast, and endlessly customizable.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "onion",
        "quantity": 0.25,
        "note": "finely chopped"
      },
      {
        "ingredientId": "tomato",
        "quantity": 0.5,
        "note": "seeded and finely chopped"
      },
      {
        "ingredientId": "serrano",
        "quantity": 1,
        "note": "green chili, finely minced; deseed for less heat"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 3,
        "note": "chopped, plus extra to garnish"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.25
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.25,
        "note": "optional, for warmth",
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
        "ingredientId": "vegetable-oil",
        "quantity": 1
      }
    ],
    "steps": [
      "Finely chop 1/4 onion, 1/2 a seeded tomato, and 1 green chili (deseed it if you want milder heat), and roughly chop the cilantro. Keeping the veg small helps the omelette cook evenly and fold cleanly.",
      "Crack 3 eggs into a bowl and whisk well for about 30 seconds, until the yolks and whites are fully blended and slightly frothy.",
      "Add the chopped onion, tomato, chili, and most of the cilantro to the eggs, then season with the salt, turmeric, chili powder, optional cumin, and pepper. Whisk again to distribute everything evenly.",
      "Heat the vegetable oil in a nonstick skillet over medium heat until it shimmers, about 1 minute. A drop of egg should sizzle gently on contact.",
      "Pour in the egg mixture and tilt the pan so it spreads into an even round. Let it cook undisturbed for 2 to 3 minutes, until the bottom is set and golden and the edges look lacy and slightly crisp.",
      "Slide a spatula under the omelette and flip it (or fold it in half), then cook the second side for 1 to 2 minutes, until no liquid egg remains and the center is fully set — eggs should be cooked through, not runny.",
      "Slide onto a plate, scatter with the reserved cilantro, and serve hot on its own or alongside buttered toast or a warm roti."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 6,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A single onion and one tomato will flavor four or five omelettes — chop them all at once and keep the extra in the fridge so each breakfast costs little more than the eggs.",
      "No fresh green chili? A pinch of red chili powder or a few red pepper flakes brings the heat for a fraction of the cost.",
      "Buy eggs by the dozen or 18-pack rather than singles — the per-egg price drops sharply and they keep for weeks."
    ],
    "substitutions": [
      {
        "forIngredientId": "serrano",
        "swap": "1 jalapeno, or a pinch of red pepper flakes",
        "savings": "jalapeno runs a few cents and is milder and easier to find"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "1 tbsp butter or ghee for a richer finish",
        "savings": "use whatever fat you already have on hand"
      },
      {
        "forIngredientId": "cilantro-fresh",
        "swap": "chopped scallion or a pinch of dried cilantro",
        "savings": "scallions are cheap and last longer in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 20,
      "carbs": 7,
      "fat": 21,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "egg",
      "indian",
      "breakfast",
      "vegetarian",
      "quick",
      "spicy",
      "dorm-friendly",
      "high-protein",
      "gluten-free"
    ]
  },
  {
    "id": "egg-thai-son-in-law-eggs",
    "name": "Thai Son-in-Law Eggs (Khai Luk Koei)",
    "description": "Hard-boiled eggs fried until their whites blister into a chewy golden shell, then drowned in a glossy sweet-sour-savory tamarind sauce and showered with crispy shallots. Sweet, sour, salty and crunchy all at once over jasmine rice.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 6,
        "note": "for shallow-frying the eggs and shallots"
      },
      {
        "ingredientId": "tamarind-paste",
        "quantity": 3,
        "note": "the sour backbone of the sauce"
      },
      {
        "ingredientId": "palm-sugar",
        "quantity": 3,
        "note": "balances the tamarind"
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 3,
        "note": "about 1 tbsp; salty, savory depth"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "to loosen the sauce"
      },
      {
        "ingredientId": "shallot",
        "quantity": 2,
        "note": "thinly sliced; fried crisp"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "steamed, to serve"
      },
      {
        "ingredientId": "thai-chili",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for garnish and heat"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Steam the jasmine rice first so it's ready: rinse 1 cup, add water per your cooker or pot, and cook until fluffy. Keep warm while you make the eggs.",
      "Place the 4 eggs in a small pot, cover with cold water, bring to a boil, then simmer 9-10 minutes for fully set yolks. Drain, cool under cold running water, peel, then pat completely dry - any water will spatter violently in hot oil.",
      "Heat the vegetable oil in a small nonstick or carbon-steel skillet over medium-high until it shimmers (about 350F). Fry the sliced shallots, stirring, until golden and crisp, 2-3 minutes. Lift them onto a paper towel with a slotted spoon; they crisp further as they cool. Reserve the oil.",
      "Gently lower the dry boiled eggs into the same hot oil, standing back as they may pop. Fry, rolling them around, until the whites blister and turn deep golden-brown all over, 3-5 minutes. Remove to paper towels.",
      "Pour off all but about 1 tablespoon of oil. Add the tamarind paste, palm sugar, fish sauce and water to the pan over medium heat.",
      "Simmer, stirring, until the palm sugar dissolves and the sauce thickens to a glossy, pourable syrup that coats the back of a spoon, 2-3 minutes. Taste: it should hit sour, sweet and salty at once - loosen with a splash more water if too thick.",
      "Halve the fried eggs lengthwise and arrange cut-side up on a plate over or beside the jasmine rice.",
      "Spoon the warm tamarind sauce generously over the eggs, then shower with the crispy shallots. Scatter sliced Thai chilies and cilantro on top and serve immediately while the shallots are crunchy."
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
      "dairy-free",
      "gluten-free"
    ],
    "cheapTips": [
      "Boil and peel the eggs a day ahead (older eggs even peel easier) so dinner comes together in 15 minutes.",
      "Skip store-bought fried shallots and make your own from one cheap shallot in the same pan - same crunch, a fraction of the price.",
      "Reuse the strained frying oil for your next stir-fry instead of tossing it; a little goes a long way."
    ],
    "substitutions": [
      {
        "forIngredientId": "palm-sugar",
        "swap": "brown-sugar (use about 3 tbsp; nearly identical caramel sweetness)",
        "savings": "saves ~$1.00"
      },
      {
        "forIngredientId": "tamarind-paste",
        "swap": "tamarind-concentrate (use ~2 tbsp, it's stronger) or a mix of lime-juice-bottled and brown-sugar in a pinch",
        "savings": "comparable cost"
      },
      {
        "forIngredientId": "shallot",
        "swap": "red-onion, thinly sliced and fried crisp the same way",
        "savings": "saves ~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 16,
      "carbs": 52,
      "fat": 22,
      "fiber": 2
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "Thai",
    "tags": [
      "egg",
      "thai",
      "dinner",
      "tamarind",
      "rice",
      "sweet-sour",
      "crispy",
      "high-protein"
    ]
  },
  {
    "id": "egg-thai-crispy-omelette-khai-jiao",
    "name": "Thai Crispy Omelette (Khai Jiao)",
    "description": "A Thai street-food legend: two eggs whipped with fish sauce hit ripping-hot oil and explode into a golden, lacy, crispy-edged cloud that's fluffy inside. Piled over hot jasmine rice with a squirt of Sriracha, it tastes like far more effort than the five minutes it takes.",
    "mealType": "lunch",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "water",
        "quantity": 0.125,
        "note": "a splash to make it puffier"
      },
      {
        "ingredientId": "rice-flour",
        "quantity": 0.02,
        "optional": true,
        "note": "about 1 tsp, optional - boosts crispness"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "enough to shallow-fry; ripping hot"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 0.5,
        "note": "cooked separately to serve under"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2,
        "optional": true,
        "note": "for serving"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced garnish"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.25,
        "optional": true,
        "note": "wedge to squeeze over"
      }
    ],
    "steps": [
      "Cook the jasmine rice first so it's hot and ready: rinse 1/2 cup dry jasmine rice, add about 3/4 cup water, bring to a boil, then cover and simmer on low 12-15 minutes until fluffy. Keep it warm and covered.",
      "Crack 2 eggs into a bowl. Add the fish sauce, a small splash of water, and the rice flour if using. Whisk hard for 20-30 seconds until very frothy and pale - the more air you beat in, the puffier it gets.",
      "Pour the vegetable oil into a small nonstick pan or wok over medium-high heat. Heat until it shimmers and is just starting to smoke, about 2-3 minutes - the oil must be genuinely hot or the omelette won't puff or crisp.",
      "Hold the bowl about 8-10 inches above the pan and pour the egg in one steady stream from height - it should bubble up violently and balloon into a lacy, crispy-edged dome the instant it hits the oil. Stand back from any splatter.",
      "Let it fry undisturbed 60-90 seconds until the underside is deep golden brown and the edges are crisp and frilly. Don't poke or stir it.",
      "Flip with a spatula and cook the second side 30-45 seconds, just until the eggs are fully set with no runny center - cook the eggs through (about 160F) for food safety. Lift onto a paper towel to drain excess oil.",
      "Spoon the hot jasmine rice onto a plate and lay the crispy omelette on top. Squirt over the Sriracha, scatter sliced scallion and cilantro, and finish with a squeeze of lime. Eat immediately while the edges are still shatteringly crisp."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 5,
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
      "Fish sauce is the only real seasoning here, so one bottle lasts months and the per-serving cost stays tiny - skip fancy add-ons.",
      "Reuse the frying oil: let it cool, strain it, and keep it in a jar for the next omelette or a stir-fry.",
      "Cook a big batch of jasmine rice once and refrigerate portions - day-old rice under the omelette costs pennies and reheats in seconds."
    ],
    "substitutions": [
      {
        "forIngredientId": "fish-sauce",
        "swap": "soy-sauce or a pinch of salt for a vegan-friendly version",
        "savings": "uses pantry staples you likely already have"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "any neutral high-heat oil like canola or peanut oil",
        "savings": "whatever frying oil is cheapest in your cupboard"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "any plain white rice or even toast",
        "savings": "use whatever rice you have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 18,
      "carbs": 42,
      "fat": 31,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Thai",
    "tags": [
      "egg",
      "thai",
      "street-food",
      "rice-bowl",
      "quick",
      "dorm-friendly",
      "lunch",
      "crispy"
    ]
  },
  {
    "id": "egg-tex-mex-migas",
    "name": "Tex-Mex Migas",
    "description": "Soft-scrambled eggs loaded with crispy tortilla-chip shards, sauteed onion, jalapeno, and tomato, all melted together with cheese and a hit of salsa. The salty-crunchy-creamy combo is the genius way to use up that bag of chip crumbs, and it folds straight into a breakfast taco.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "tortilla-chips",
        "quantity": 1,
        "note": "a handful, broken into shards - bottom-of-the-bag crumbs are perfect"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "diced small"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and minced; leave seeds in for more heat"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "diced, or use a handful of salsa instead"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "cheese",
        "quantity": 1,
        "note": "shredded; Mexican blend or cheddar"
      },
      {
        "ingredientId": "salsa",
        "quantity": 0.25,
        "note": "plus extra for serving"
      },
      {
        "ingredientId": "vegetable-oil",
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
        "ingredientId": "cumin",
        "quantity": 0.25,
        "optional": true,
        "note": "for a warm Tex-Mex backbone"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Crack the eggs into a bowl, add a pinch of the salt and the pepper, and beat well with a fork until fully blended and slightly frothy. Set aside.",
      "Heat the vegetable oil in a nonstick skillet over medium heat. Add the diced onion and minced jalapeno and saute 3-4 minutes, stirring, until the onion is soft and translucent.",
      "Add the minced garlic and the optional cumin and cook 30-60 seconds until fragrant, then stir in the diced tomato and cook 1-2 minutes until it softens and releases some juice.",
      "Turn the heat to medium-low and pour in the beaten eggs. Let them sit 15-20 seconds, then push them gently across the pan with a spatula, folding in slow curds so they stay soft and creamy.",
      "When the eggs are about 70% set and still glossy (not yet dry), scatter in the broken tortilla chips and toss so they pick up the egg but keep some crunch.",
      "Sprinkle the shredded cheese and spoon in the salsa, folding gently for 1-2 minutes until the cheese melts and the eggs are fully set with no runny liquid remaining - cook the eggs through for food safety.",
      "Taste and add the remaining salt if needed. Plate immediately, top with extra salsa and the optional cilantro, and serve hot. To make it a taco, pile into warm tortillas."
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
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "This dish was born to use up the crushed chips at the bottom of the bag - save them in a jar instead of tossing them.",
      "Skip the fresh tomato and just use a little extra salsa; it adds the same tang for less money and zero chopping.",
      "Buy whole eggs by the dozen and a block of cheese you shred yourself - both are far cheaper per serving than pre-shredded or specialty options."
    ],
    "substitutions": [
      {
        "forIngredientId": "jalapeno",
        "swap": "a few slices of pickled jalapenos from a jar, or a pinch of red pepper flakes",
        "savings": "Pantry pickled jalapenos last for months, so you waste nothing"
      },
      {
        "forIngredientId": "cheese",
        "swap": "any melty cheese you have - cheddar, Monterey jack, or even a slice of American",
        "savings": "Use whatever is already in your fridge instead of buying a new bag"
      },
      {
        "forIngredientId": "tomato",
        "swap": "an extra spoonful of salsa or some canned diced tomatoes",
        "savings": "Skips a fresh produce buy you might not finish"
      }
    ],
    "estimatedNutrition": {
      "calories": 345,
      "protein": 21,
      "carbs": 16,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mexican (Tex-Mex)",
    "tags": [
      "egg",
      "tex-mex",
      "mexican",
      "breakfast",
      "scramble",
      "vegetarian",
      "one-pan",
      "15-minute",
      "budget",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-chilaquiles-rojos-con-huevos",
    "name": "Chilaquiles Rojos con Huevos",
    "description": "Crispy tortilla chips simmered in a smoky red chile-tomato salsa just until they soften at the edges but keep their bite, crowned with a runny-yolk fried egg, cool crema, crumbled queso fresco, and raw onion. The ultimate fast, comforting leftover-rescue breakfast.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "tortilla-chips",
        "quantity": 4,
        "note": "about 4 big handfuls; stale tortilla chips are perfect"
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "ripe; cored"
      },
      {
        "ingredientId": "guajillo-chili-powder",
        "quantity": 2,
        "note": "or use 2 dried guajillos rehydrated and blended"
      },
      {
        "ingredientId": "chile-de-arbol",
        "quantity": 1,
        "note": "for heat; adjust to taste"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "half blended into salsa, half thin-sliced raw for topping"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "or veggie broth/water to keep it vegetarian"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5
      },
      {
        "ingredientId": "oregano",
        "quantity": 0.5,
        "note": "Mexican oregano if you have it"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one per serving"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 4,
        "note": "thinned with a splash of water to mimic Mexican crema",
        "optional": true
      },
      {
        "ingredientId": "queso-fresco",
        "quantity": 2,
        "note": "crumbled",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "roughly chopped",
        "optional": true
      }
    ],
    "steps": [
      "Roughly chop the 3 tomatoes, half the onion, and 2 garlic cloves. Add them to a blender with the guajillo chili powder, chile de arbol, cumin, oregano, salt, and 1/2 cup of the broth. Blend until smooth. Thinly slice the remaining onion half and set aside for topping.",
      "Heat 1 tbsp vegetable oil in a wide skillet over medium-high until it shimmers. Stand back and carefully pour in the blended salsa (it will splatter), then fry 3-4 minutes, stirring, until it darkens slightly and smells toasty.",
      "Stir in the remaining 1/2 cup broth and simmer 4-5 minutes until the salsa thickens to a coat-the-spoon consistency. Taste and adjust salt.",
      "Add the tortilla chips and gently fold so every chip gets coated. Cook just 1-2 minutes until the chips soften at the edges but still have some bite, then kill the heat so they don't turn to mush. Divide immediately between two plates.",
      "Wipe the skillet, add the remaining 1 tbsp oil over medium heat, and crack in the 2 eggs. Fry 2-3 minutes for runny yolks, or longer if you prefer set yolks; either way the whites should be fully opaque and firm, not translucent, before serving.",
      "Slide one fried egg onto each plate of chilaquiles. Drizzle with the thinned sour cream, then scatter the crumbled queso fresco, reserved raw onion, and chopped cilantro over the top.",
      "Eat right away while the chips still have texture; break the runny yolk into the salsa as you go."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "dietTags": [
      "gluten-free"
    ],
    "cheapTips": [
      "Use stale tortillas or the crumbly bottom-of-the-bag chips - chilaquiles were invented to rescue them, and slightly old chips actually hold up better in the salsa.",
      "Swap broth for water plus a pinch of extra salt and a bouillon cube if you have one; the dried chiles and tomatoes carry most of the flavor anyway.",
      "Skip store-bought crema and just thin a spoonful of sour cream (or plain yogurt) with a little water - same cool tang for a fraction of the price."
    ],
    "substitutions": [
      {
        "forIngredientId": "guajillo-chili-powder",
        "swap": "regular chili powder or 1 tbsp jarred salsa blended into the tomatoes",
        "savings": "Uses a pantry staple you likely already own"
      },
      {
        "forIngredientId": "queso-fresco",
        "swap": "crumbled feta or grated cotija",
        "savings": "Feta is often cheaper and keeps longer in a dorm fridge"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water with a bouillon cube",
        "savings": "Cuts about $0.50 versus boxed broth"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 15,
      "carbs": 42,
      "fat": 23,
      "fiber": 6
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "egg",
      "mexican",
      "breakfast",
      "spicy",
      "leftover-rescue",
      "hangover-food",
      "budget"
    ]
  },
  {
    "id": "egg-arroz-con-huevo-frito",
    "name": "Arroz con Huevo Frito (Cuban Rice with Fried Egg)",
    "description": "The legendary broke-but-happy dinner of Cuba and much of Latin America: a crispy-edged fried egg with a molten runny yolk slid over a steaming bowl of fluffy white rice, with garlicky frying oil spooned on top so the yolk melts into a golden sauce. Two real ingredients, pennies a serving, pure comfort in minutes.",
    "mealType": "dinner",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 0.5,
        "note": "uncooked; or use ~1 cup leftover cooked rice and skip step 1"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "to cook the rice"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "enough to pool in the pan for crispy edges"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "smashed, fried in the oil for flavor"
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
        "ingredientId": "hot-sauce",
        "quantity": 1,
        "optional": true,
        "note": "to taste at the table"
      }
    ],
    "steps": [
      "Make the rice (skip if using leftovers): rinse 1/2 cup rice, combine with 1 cup water and a pinch of salt in a small pot, bring to a boil, then cover and cook on low for about 15 minutes until the water is absorbed and the rice is tender. Fluff with a fork and pile into a bowl.",
      "Smash 1 garlic clove with the flat of a knife so it stays in one piece but releases its flavor. Heat 2 tbsp vegetable oil in a small nonstick or cast-iron skillet over medium-high until it shimmers (a drop of water should sizzle on contact).",
      "Add the smashed garlic and sizzle 30-45 seconds until fragrant and lightly golden, then push it to the side or remove it so it does not burn and turn bitter.",
      "Crack 2 eggs into the hot oil; they should bubble and crackle immediately, giving the signature crispy, lacy edges. Sprinkle with the salt.",
      "Tilt the pan and spoon the hot garlicky oil over the whites and edges for 1-2 minutes to set and crisp the whites from the top while keeping the yolks soft.",
      "Cook 2-3 minutes total until the whites are fully set and opaque. A runny yolk is traditional here; for a fully cooked yolk (recommended if you are pregnant, very young, elderly, or immunocompromised), flip and cook 1-2 minutes more until firm.",
      "Slide the eggs onto the rice and spoon any remaining garlicky oil from the pan over everything so it soaks in.",
      "Garnish with sliced scallion if using, add a few dashes of hot sauce, break the yolk so it runs into the rice, and eat immediately while the edges are still crisp."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 17,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Day-old rice is ideal here - it fries up even better and skips the cooking step, making this nearly free.",
      "Buy eggs and rice in the largest size you can store; a big bag of rice and a dozen eggs makes this dinner cost pennies per serving for weeks.",
      "Save and reuse the strained garlicky frying oil in a small jar - it adds free flavor to your next batch of eggs, veggies, or rice."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Olive oil or butter for richer flavor, or any neutral oil you already have",
        "savings": "Vegetable oil is the cheapest at about $0.05/tbsp"
      },
      {
        "forIngredientId": "rice",
        "swap": "Any cooked grain - leftover brown rice, white rice, or even a tortilla underneath",
        "savings": "Plain white rice is the cheapest base at about $0.15/cup"
      },
      {
        "forIngredientId": "hot-sauce",
        "swap": "A pinch of red pepper flakes or a spoon of salsa for heat",
        "savings": "Skip entirely - it is optional and the dish shines without it"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 18,
      "carbs": 58,
      "fat": 27,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Cuban",
    "tags": [
      "egg",
      "cuban",
      "rice",
      "budget",
      "quick",
      "comfort-food",
      "vegetarian",
      "dorm-friendly",
      "leftover-rice"
    ]
  },
  {
    "id": "egg-cottage-cheese-egg-bites",
    "name": "Cottage Cheese Egg Bites (5 Flavors)",
    "description": "Custardy, protein-packed egg bites that taste like the Starbucks ones for a fraction of the price — blended cottage cheese makes them silky and pushes each serving to ~20g protein. One base batter, five mix-in flavors (spinach-feta, bacon-cheddar, and more) so a week of grab-and-go snacks never gets boring. Inspired by @ambitiouskitchen on Instagram (https://www.ambitiouskitchen.com/cottage-cheese-egg-bites/).",
    "mealType": "meal-prep",
    "servings": 5,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "cottage-cheese",
        "quantity": 2,
        "note": "blended smooth (about 1 cup); the secret to custardy bites"
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
        "note": "grease the muffin tin well, or use silicone"
      },
      {
        "ingredientId": "frozen-spinach",
        "quantity": 0.5,
        "note": "thawed and squeezed dry — spinach-feta flavor"
      },
      {
        "ingredientId": "feta",
        "quantity": 0.5,
        "note": "spinach-feta flavor"
      },
      {
        "ingredientId": "bacon",
        "quantity": 3,
        "note": "cooked crisp and crumbled — bacon-cheddar flavor"
      },
      {
        "ingredientId": "shredded-cheddar",
        "quantity": 2,
        "note": "bacon-cheddar flavor"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced — for the loaded / herb bites"
      },
      {
        "ingredientId": "grape-tomatoes",
        "quantity": 0.25,
        "note": "halved — caprese-style bites"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "garnish on top after baking"
      }
    ],
    "steps": [
      "Heat the oven to 350F. Generously coat a 12-cup muffin tin with cooking spray (get into every cup) or set up a silicone muffin tray, which releases the easiest.",
      "Make the base batter: in a blender, combine the eggs, cottage cheese, salt, pepper, and garlic powder. Blend 30-45 seconds until completely smooth and slightly frothy — no curds left. This is what makes the bites custardy instead of rubbery.",
      "Prep the mix-ins so they're ready to drop in: thaw and firmly squeeze the frozen spinach dry; cook the bacon in a skillet over medium until fully crisp with no pink (about 6-8 minutes), drain on paper towel and crumble; slice the scallions; halve the grape tomatoes.",
      "Divide mix-ins among the cups for 5 flavors: spinach + feta in a few, crumbled bacon + cheddar in a few, scallion + a little cheddar for 'loaded,' grape tomatoes + a pinch of feta for caprese, and leave a couple plain. Aim for about 1 to 1.5 tablespoons of fillings per cup.",
      "Pour the blended batter over the mix-ins, filling each cup about three-quarters full (it puffs as it bakes). Gently stir each cup with a fork so the add-ins are suspended, not all sitting on the bottom.",
      "Bake at 350F for 18-22 minutes, until the centers are just set — puffed and no longer jiggly or wet in the middle. For food safety the eggs must be fully cooked with no runny center; a knife inserted off-center should come out clean.",
      "Let them rest in the tin 5 minutes (they deflate a little — that's normal), then run a thin knife or small spatula around each and lift out. Sprinkle with fresh parsley if using.",
      "Cool completely, then store in an airtight container in the fridge up to 4 days. Reheat in the microwave 25-35 seconds, or eat cold straight from the fridge."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 13,
    "cookTimeMinutes": 22,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "blender",
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a large tub of cottage cheese and a dozen eggs — that single combo carries the whole batch, and the per-bite cost lands well under a dollar versus $1+ each at the coffee shop.",
      "Mix-ins are a great way to use up odds and ends: the last handful of spinach, a couple bacon slices from the back of the fridge, a wilting scallion. Almost any leftover veg or cheese works.",
      "A $5 silicone muffin tray pays for itself fast — no greasing, no stuck bites, and no torn egg bites means nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "Use shredded cheddar or grated parmesan you already have — any melty or crumbly cheese works in the spinach bites.",
        "savings": "Skips buying a separate feta tub"
      },
      {
        "forIngredientId": "bacon",
        "swap": "Swap in turkey bacon or chopped ham for a leaner, cheaper bite — both still cook through and crumble well.",
        "savings": "~$0.10-0.15 per bite"
      },
      {
        "forIngredientId": "cottage-cheese",
        "swap": "Plain Greek yogurt blends in just as smooth and keeps the protein high if you don't have cottage cheese.",
        "savings": "About the same; uses what's on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 240,
      "protein": 20,
      "carbs": 2,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🥚",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "meal-prep",
      "high-protein",
      "breakfast",
      "vegetarian",
      "gluten-free",
      "make-ahead",
      "dorm-friendly",
      "grab-and-go"
    ]
  },
  {
    "id": "egg-korean-folded-gimbap-tortilla",
    "name": "Korean Folded Egg Gimbap (4-Fold Tortilla Hack)",
    "description": "The viral 4-quadrant fold turns one tortilla into a portable, sushi-meets-sandwich gimbap with a fluffy egg layer, warm sesame rice, melty cheese, and crunchy kimchi. No rolling mat, no slicing, no mess - just fold, toast, and pack it in your bag.",
    "mealType": "lunch",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "tortilla",
        "quantity": 1,
        "note": "large flour tortilla"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "rice",
        "quantity": 0.5,
        "note": "cooked, warm"
      },
      {
        "ingredientId": "kimchi",
        "quantity": 1,
        "note": "drained and roughly chopped"
      },
      {
        "ingredientId": "cheese",
        "quantity": 0.25,
        "note": "shredded; American or cheddar melts best"
      },
      {
        "ingredientId": "spinach",
        "quantity": 1,
        "note": "fresh baby spinach or shredded lettuce"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "split: half for the egg, half for toasting"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "stirred into the warm rice"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.5,
        "note": "beaten into the eggs"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "gochujang",
        "quantity": 0.5,
        "optional": true,
        "note": "smear in the rice quadrant for heat"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.5,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Stir the sesame oil and a pinch of the salt into your warm cooked rice so it stays fluffy and seasoned; set aside. If using gochujang, have it ready.",
      "Beat the 2 eggs with the soy sauce and a pinch of pepper. Melt about half the butter in a nonstick skillet over medium-low heat, pour in the eggs, and let them set into a thin omelette, 1-2 minutes, gently pushing the edges. Fold into a small flat rectangle and cook 30 more seconds until fully set with no runny egg, then slide it out. Cook the eggs all the way through here for food safety.",
      "Lay the tortilla flat and cut one straight slit from the center to the bottom edge (a radius cut) so it can fold in quadrants.",
      "Picture the tortilla as four quadrants. Pile the seasoned rice (and a smear of gochujang) in the bottom-left, the folded egg in the top-left, the shredded cheese in the top-right, and the spinach plus chopped kimchi in the bottom-right.",
      "Starting at the slit, fold the bottom-left rice quadrant up onto the egg, then fold that pair over onto the cheese, then fold down over the spinach-kimchi quadrant. You'll end with a stuffed triangle pocket.",
      "Wipe the skillet, melt the rest of the butter over medium heat, and toast the folded triangle 2-3 minutes per side, pressing lightly with a spatula, until both sides are golden and the cheese is fully melted.",
      "Slide onto a plate, rest 1 minute so the filling sets, then slice in half. Garnish with scallion and sesame seeds if you like, and eat warm or wrap in foil for later."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use leftover rice from last night's takeout or a cheap rice-cooker batch - cold day-old rice folds in cleaner than fresh.",
      "American singles or cheap shredded cheese melt just as well as fancy cheese for a fraction of the price.",
      "Kimchi is your flavor MVP - one jar lasts weeks and costs only a few cents per fold, so let it carry the dish instead of buying extra sauces."
    ],
    "substitutions": [
      {
        "forIngredientId": "kimchi",
        "swap": "sauteed cabbage with a splash of soy sauce",
        "savings": "skips the jar if you don't keep kimchi"
      },
      {
        "forIngredientId": "spinach",
        "swap": "shredded lettuce or leftover salad greens",
        "savings": "use whatever leafy greens you already have"
      },
      {
        "forIngredientId": "cheese",
        "swap": "an American cheese single",
        "savings": "about half the cost per fold"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 23,
      "carbs": 52,
      "fat": 27,
      "fiber": 4
    },
    "emoji": "🌯",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "egg",
      "korean",
      "gimbap",
      "tortilla-hack",
      "dorm-friendly",
      "lunch",
      "vegetarian",
      "portable",
      "viral"
    ]
  },
  {
    "id": "egg-korean-egg-drop-sandwich",
    "name": "Korean Egg Drop Sandwich",
    "description": "Seoul's viral street-food sandwich: pillowy soft-scrambled eggs and melty cheddar tucked into butter-griddled brioche, then drizzled with a sweet-creamy egg-drop sauce. Golden, gooey, and absurdly craveable for just a few bucks.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "milk",
        "quantity": 0.13,
        "note": "a splash, for a soft, custardy scramble"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "1 tbsp for the eggs, 1 tbsp for griddling the brioche"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.25,
        "note": "a pinch in the egg mixture"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "brioche-buns",
        "quantity": 1,
        "note": "split into two thick slices"
      },
      {
        "ingredientId": "sharp-cheddar",
        "quantity": 1.5,
        "note": "thinly sliced so it melts"
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 2,
        "note": "base of the egg-drop sauce"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 0.036,
        "note": "about 1 tbsp; roughly a 2:1 mayo-to-condensed-milk sauce"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      }
    ],
    "steps": [
      "In a bowl, whisk the eggs with the splash of milk, the pinch of sugar, and the salt until fully blended and slightly frothy.",
      "Make the egg-drop sauce: stir the mayonnaise and sweetened condensed milk together until smooth and pourable, then set aside. Taste and add a touch more condensed milk if you want it sweeter.",
      "Set a nonstick skillet over LOW heat and melt 1 tbsp butter. Pour in the eggs and cook low and slow, stirring constantly and pushing the curds gently with a spatula, about 2-3 minutes.",
      "Pull the eggs off the heat while they still look slightly wet and glossy (soft-set, not runny) - they finish cooking from residual heat. Fold into a loose pile and keep warm. For fully set eggs, cook another 30-60 seconds until no liquid remains.",
      "Wipe the skillet, add the remaining 1 tbsp butter over medium heat, and griddle both brioche cut sides down until deep golden and crisp, about 1-2 minutes.",
      "Lay the sliced cheddar over one hot brioche slice so it begins to melt, then mound the soft-scrambled eggs on top.",
      "Drizzle generously with the egg-drop sauce, scatter on the sliced scallion if using, and close with the second brioche slice. Press gently, slice in half, and serve right away while warm and gooey."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 4,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "No brioche bun? Two slices of regular sandwich bread or challah griddled in butter get you 90% of the way there for less.",
      "One can of sweetened condensed milk makes this sauce dozens of times over - keep it sealed in the fridge and you've basically got sauce for weeks of sandwiches.",
      "Buy a block of cheddar and slice it yourself; it's noticeably cheaper per ounce than pre-sliced and melts just as well."
    ],
    "substitutions": [
      {
        "forIngredientId": "brioche-buns",
        "swap": "Two thick slices of challah or plain white sandwich bread, buttered and griddled.",
        "savings": "Saves about $0.45"
      },
      {
        "forIngredientId": "mayonnaise",
        "swap": "Kewpie mayo for a richer, more authentic egg-drop flavor.",
        "savings": "Costs a few cents more"
      },
      {
        "forIngredientId": "sharp-cheddar",
        "swap": "American singles or mozzarella for an extra-melty, milder pull.",
        "savings": "Saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 690,
      "protein": 28,
      "carbs": 42,
      "fat": 45,
      "fiber": 1
    },
    "emoji": "🥪",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "egg",
      "korean",
      "breakfast",
      "sandwich",
      "egg-drop",
      "brioche",
      "cheesy",
      "dorm-friendly",
      "viral"
    ]
  },
  {
    "id": "egg-crispy-feta-fried-eggs",
    "name": "Crispy Feta Fried Eggs",
    "description": "A viral two-ingredient miracle: crumbled feta fries into a lacy, golden, deeply salty crust that hugs a runny-yolk egg, ready in under 5 minutes with zero skill. Pile it on toast, tuck it in a tortilla, or drop it over a rice bowl. Inspired by @graceelkus on TikTok (https://www.tiktok.com/@graceelkus/video/7258062083999173934).",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "feta",
        "quantity": 1,
        "note": "crumbled, the crispy-edge star"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.5,
        "note": "just a thin film for the pan",
        "optional": true
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "chili-flakes",
        "quantity": 0.25,
        "optional": true
      },
      {
        "ingredientId": "bread",
        "quantity": 2,
        "note": "toasted, for serving",
        "optional": true
      }
    ],
    "steps": [
      "Set a small nonstick skillet over medium heat for about 1 minute. If your feta is on the drier side, add the thin film of olive oil; a wetter, creamier feta needs none.",
      "Crumble the feta into a ring around the perimeter of the pan, leaving an open circle in the center about the size of two egg yolks. Let it sit undisturbed for 1 to 2 minutes until it melts, spreads slightly, and starts to bubble and turn lacy and golden at the edges.",
      "Crack both eggs into the center of the feta ring, keeping them low and gentle so the yolks stay intact.",
      "Season the whites and feta with the black pepper and chili flakes. Do not add salt; the feta is plenty salty on its own.",
      "Cover the skillet with a lid (or a plate) and cook for 2 to 3 minutes. The cover steams the tops so the whites set fully while the yolks stay runny.",
      "Peek at around 2 minutes: the whites should be opaque and fully set with no clear, jiggly spots, and the feta edge should be deeply browned and crisp. For firmer yolks, cover and cook 1 to 2 minutes longer.",
      "Slide a thin spatula all the way under the crispy cheese crust to release it in one piece, then lift the whole feta-and-egg raft onto your toast, tortilla, or rice bowl. Crack a little more pepper on top and eat right away while the crust is shattery."
    ],
    "totalTimeMinutes": 7,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "A block of feta crumbles further and crisps better than pre-crumbled, and usually costs less per ounce; break off just what you need and save the rest in its brine.",
      "Skip the oil entirely if your feta is creamy and your pan is truly nonstick. The cheese renders enough fat to fry itself, saving you a drizzle every time.",
      "No lid? Any plate or a sheet of foil traps the steam just as well, so you do not need to buy anything to set the tops perfectly."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "Halloumi, finely grated into a ring, crisps into a similar salty lace.",
        "savings": "Costs a bit more, but a block goes a long way across many breakfasts."
      },
      {
        "forIngredientId": "feta",
        "swap": "Grated parmesan makes a crackly frico crust if you are out of feta.",
        "savings": "Often already in the fridge, so zero extra spend."
      },
      {
        "forIngredientId": "bread",
        "swap": "Serve over rice or in a warm tortilla instead of toast.",
        "savings": "A tortilla runs about a third the cost of two bread slices."
      }
    ],
    "estimatedNutrition": {
      "calories": 400,
      "protein": 24,
      "carbs": 4,
      "fat": 32,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Mediterranean",
    "tags": [
      "egg",
      "mediterranean",
      "feta",
      "fried-egg",
      "viral",
      "tiktok",
      "quick",
      "high-protein",
      "vegetarian",
      "dorm-friendly",
      "5-minute",
      "runny-yolk"
    ]
  },
  {
    "id": "egg-pesto-fried-eggs",
    "name": "Pesto Fried Eggs on Toast",
    "description": "Crispy-edged eggs fried right in a pool of garlicky basil pesto, piled onto buttery toast for a 5-minute breakfast that tastes far fancier than the effort. The viral move that proved you should fry your eggs in sauce, not oil. Inspired by @amywilichowski on TikTok (https://www.tiktok.com/@amywilichowski/video/6955536851595758853).",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "pesto",
        "quantity": 2,
        "note": "spread to cover the pan surface"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "bread",
        "quantity": 2,
        "note": "for toast"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 1,
        "note": "grated over the top"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "just a pinch"
      },
      {
        "ingredientId": "pepper",
        "quantity": 1
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "optional": true,
        "note": "for a little heat"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 1,
        "optional": true,
        "note": "torn, for garnish"
      }
    ],
    "steps": [
      "Spread the pesto across the bottom of a COLD nonstick skillet in an even layer that covers the cooking surface. Starting cold lets the oil in the pesto heat up alongside the eggs instead of scorching.",
      "Set the pan over medium heat. Once the pesto gently sizzles and smells fragrant (about 1-2 minutes), crack the eggs directly into it, spacing them apart.",
      "Season the eggs with a small pinch of salt and a few grinds of pepper. Cook undisturbed for 2-3 minutes, until the whites are fully set and opaque and the pesto crisps into lacy, golden-green frills around the edges.",
      "For sunny-side up, leave the yolks runny but cook until the whites are firm with no clear, jiggly spots. For over easy, gently flip and cook 30-45 seconds more. Either way, the whites must be fully set and no longer translucent before serving.",
      "While the eggs cook, toast the bread until golden and crisp in a toaster or under the broiler.",
      "Slide the pesto-crisped eggs onto the toast, scraping any crispy pesto bits from the pan on top. Grate the parmesan over everything while it is hot.",
      "Finish with optional red pepper flakes and torn fresh basil, then eat right away while the edges are still crisp."
    ],
    "totalTimeMinutes": 7,
    "prepTimeMinutes": 1,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "A jar of pesto goes a long way here since you only need 2 tablespoons per serving, so each plate costs just pennies more than plain fried eggs.",
      "Use the cheapest sandwich bread you have; day-old bread actually toasts crispier and soaks up the pesto-y yolk beautifully.",
      "Skip the fresh basil garnish to save money, the pesto already carries all the basil flavor you need."
    ],
    "substitutions": [
      {
        "forIngredientId": "pesto",
        "swap": "Stir 1 tbsp olive oil into a spoonful of any leftover green sauce, or softened butter with garlic powder and dried basil",
        "savings": "Uses pantry staples instead of a pesto jar"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Any hard grating cheese like pecorino, or skip it entirely",
        "savings": "Saves about $0.30 per serving"
      },
      {
        "forIngredientId": "bread",
        "swap": "A toasted bagel, English muffin, or pita",
        "savings": "Use whatever bread you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 22,
      "carbs": 28,
      "fat": 25,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-green-100",
    "cuisine": "Italian-inspired",
    "tags": [
      "egg",
      "italian",
      "breakfast",
      "quick",
      "5-minute",
      "vegetarian",
      "toast",
      "viral",
      "dorm-friendly",
      "high-protein"
    ]
  },
  {
    "id": "egg-chili-oil-crispy-fried",
    "name": "Chili Oil Crispy Fried Eggs",
    "description": "Eggs fried straight in a spoonful of chili crisp until the edges blister into shattering lacy frills, with the yolk left gloriously runny and slicked in spicy, numbing oil. The laziest possible flavor upgrade, spooned hot over a bowl of rice.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "chili-crisp",
        "quantity": 3,
        "note": "use the oil plus some of the crunchy bits from the jar; Lao Gan Ma style"
      },
      {
        "ingredientId": "rice",
        "quantity": 1,
        "note": "cooked, for serving"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "drizzled over the rice"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.5,
        "optional": true,
        "note": "for garnish"
      }
    ],
    "steps": [
      "Have a bowl of hot cooked rice ready, since these eggs cook fast and are best eaten the second they leave the pan.",
      "Spoon about 3 teaspoons of chili crisp (oil plus a little of the crunchy bits) into a cold nonstick or cast-iron skillet, then set it over medium-high heat. Let the oil get genuinely hot and shimmering, about 1 to 2 minutes.",
      "Crack the 2 eggs directly into the hot oil, keeping them slightly apart. They should sizzle aggressively on contact; that loud crackle is what builds the lacy crispy edges.",
      "Season the whites with a small pinch of salt. As the edges bubble, brown, and turn frilly, tilt the pan and spoon the hot oil up over the whites to set the tops without flipping.",
      "Cook 2 to 3 minutes total, until the whites are fully set and opaque with crisp browned lace edges but the yolks are still soft and runny. The runny yolk is intentional, so use fresh, properly refrigerated eggs; for firmer yolks, cover the pan for an extra 30 to 60 seconds.",
      "Drizzle the rice with about 1 tablespoon soy sauce. Slide the crispy eggs out on top, then scrape any extra chili oil and crunchy bits from the pan over everything.",
      "Garnish with sliced scallion and a pinch of sesame seeds if using, break the yolks so they run into the rice, and eat immediately while the edges are still crackly."
    ],
    "totalTimeMinutes": 8,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "A single jar of chili crisp lasts for dozens of breakfasts, so the per-serving cost is just pennies of oil on top of two eggs and a scoop of rice.",
      "Cook a big batch of rice once and keep it in the fridge; day-old rice reheats fine and turns this into a 5-minute meal.",
      "No chili crisp yet? Bloom 1/4 tsp red pepper flakes plus a pinch of garlic powder in a tablespoon of any neutral oil for a cheap DIY version."
    ],
    "substitutions": [
      {
        "forIngredientId": "chili-crisp",
        "swap": "Swap in laoganma (the same spicy crunchy chili-in-oil) or plain chili oil for a milder, less crunchy version.",
        "savings": "About the same cost; plain chili oil is slightly cheaper per teaspoon"
      },
      {
        "forIngredientId": "rice",
        "swap": "Serve the eggs over toast, ramen, or instant noodles instead of rice.",
        "savings": "A slice of bread runs about the same, just a few cents"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "Use tamari for gluten-free, or a few drops of fish sauce for extra savory depth.",
        "savings": "Comparable per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 15,
      "carbs": 48,
      "fat": 24,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese-inspired",
    "tags": [
      "egg",
      "chinese",
      "spicy",
      "chili-crisp",
      "breakfast",
      "quick",
      "dorm-friendly",
      "rice-bowl",
      "runny-yolk"
    ]
  },
  {
    "id": "egg-cottage-cheese-soft-scramble",
    "name": "Cottage Cheese Soft-Scrambled Eggs",
    "description": "The viral protein-packed scramble: whisk cottage cheese into the eggs and cook them low and slow for restaurant-style, custardy soft curds with about 29g of protein from two cheap staples. Glossy and pillowy, finished with flaky salt and cracked pepper.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "cottage-cheese",
        "quantity": 0.5,
        "note": "1/4 cup, whisked in until fairly smooth"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "or sub ghee for a nuttier finish"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.25,
        "note": "to finish"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.125,
        "note": "freshly cracked, to finish"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "garnish, snipped"
      }
    ],
    "steps": [
      "Crack 3 eggs into a bowl and add 1/4 cup cottage cheese. Whisk hard for 20-30 seconds until fairly smooth and slightly frothy; a few small lumps of cheese are fine.",
      "Set a nonstick skillet over low heat (this dish lives and dies on low heat) and add 1 tbsp butter. Let it melt and gently foam without browning.",
      "Pour in the egg mixture. Let it sit undisturbed for about 20 seconds, then begin gently pushing the eggs from the edges toward the center with a rubber spatula.",
      "Keep folding slowly, pausing between strokes, so large soft curds form. Don't stir fast — you want pillowy, custardy folds, not dry bits.",
      "Cook until the eggs are set into soft curds with no runny or liquid egg remaining (about 3-4 minutes total) but still glossy and moist. For food safety the egg must be fully set; pull the pan just as the last wet sheen disappears so residual heat finishes them without drying them out.",
      "Slide onto a plate and immediately finish with a pinch of flaky sea salt and freshly cracked black pepper.",
      "Top with snipped chives if using, and eat right away while creamy and warm."
    ],
    "totalTimeMinutes": 8,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a large tub of cottage cheese instead of single-serve cups — the per-serving cost drops to pennies and it doubles as a snack or toast topper all week.",
      "Eggs and cottage cheese are two of the cheapest protein sources in the store; the core plate lands around $2 and beats a $4 protein bar on cost per gram.",
      "Skip the fresh chives (a small tub is the priciest thing here) — a pinch of garlic powder or a few sliced scallion tops adds the same savory lift for almost nothing."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use ghee for a nuttier, browned flavor and a higher smoke point",
        "savings": "About the same cost"
      },
      {
        "forIngredientId": "cottage-cheese",
        "swap": "Whisk in ricotta or a couple tablespoons of cream cheese for the same creamy curd",
        "savings": "Roughly even"
      },
      {
        "forIngredientId": "flaky-sea-salt",
        "swap": "Regular table or kosher salt works fine to finish",
        "savings": "Saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 29,
      "carbs": 4,
      "fat": 26,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "high-protein",
      "breakfast",
      "soft-scramble",
      "cottage-cheese",
      "viral",
      "gym-friendly",
      "quick",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-drop-soup-silky-ribbons",
    "name": "Silky Egg Drop Soup (Restaurant-Style Ribbons)",
    "description": "A 10-minute takeout favorite made better at home: a clear, gingery broth threaded with feather-light egg ribbons. The cornstarch-in-the-egg velveting trick gives that exact restaurant silkiness, and it costs just pennies a bowl.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "chicken-broth",
        "quantity": 4,
        "note": "the soup base; low-sodium if you have it"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "beaten with a splash of cornstarch for silky ribbons"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1.5,
        "note": "1 tbsp for the broth slurry, 1/2 tbsp whisked into the eggs"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "grated; fresh is great if you have it"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25,
        "note": "key for that takeout flavor; black pepper works in a pinch"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "stir in off the heat so it stays fragrant"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "to taste, depending on your broth"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.25,
        "optional": true,
        "note": "tiny pinch for that golden restaurant color"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      }
    ],
    "steps": [
      "In a small bowl, beat the eggs with 1/2 tbsp of the cornstarch until completely smooth and pale; the cornstarch is the velveting trick that keeps the ribbons silky instead of rubbery. Set aside.",
      "In a separate cup, stir the remaining 1 tbsp cornstarch into 2 tbsp cold water to make a slurry. Set aside.",
      "Pour the chicken broth into a medium pot and bring to a gentle simmer over medium heat. Stir in the ginger, soy sauce, white pepper, salt, and the optional pinch of turmeric. Simmer 2-3 minutes so the flavors open up.",
      "Re-stir the cornstarch slurry, then drizzle it into the simmering broth while stirring. Let it bubble gently for about 1 minute until the broth turns slightly glossy and lightly thickened.",
      "Lower the heat so the broth is just barely moving, not boiling; a hard boil shreds the eggs into clumps. Stir the broth in one direction to create a slow swirl.",
      "Slowly drizzle the cornstarch-spiked beaten egg into the moving broth through the tines of a fork, in a thin steady stream. Do not stir for a few seconds, then gently nudge once so the egg sets into delicate feathery ribbons.",
      "Let the soup return to a brief simmer for 30-60 seconds so the egg is fully cooked and set through with no raw liquid egg remaining, then turn off the heat.",
      "Stir in the sesame oil off the heat. Taste and adjust salt or white pepper, ladle into bowls, and top with sliced scallions. Serve hot."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 4,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "A bouillon cube or a teaspoon of chicken bouillon dissolved in water makes a great broth base for a fraction of the cost of cartoned broth.",
      "No fresh ginger? Ground ginger or a squeeze of ginger paste works perfectly and won't go to waste in the back of your fridge.",
      "Stretch one batch into a bigger meal by adding a handful of frozen corn, peas, or torn spinach to the broth before you add the egg."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-broth",
        "swap": "Veggie broth or water plus a bouillon cube",
        "savings": "Cuts the broth cost by roughly half"
      },
      {
        "forIngredientId": "white-pepper",
        "swap": "Regular black pepper",
        "savings": "Uses a spice you already own, no extra jar"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "A teaspoon of fish sauce or a pinch more salt",
        "savings": "Skip buying a bottle if you don't have one"
      }
    ],
    "estimatedNutrition": {
      "calories": 150,
      "protein": 11,
      "carbs": 9,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍲",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "egg",
      "chinese",
      "soup",
      "takeout-style",
      "quick",
      "dorm-friendly",
      "budget",
      "10-minute"
    ]
  },
  {
    "id": "egg-classic-caramel-flan",
    "name": "Classic Caramel Flan (Flan de Leche)",
    "description": "A silky, wobbly vanilla custard that unmolds under a glossy amber caramel, made entirely from cheap pantry staples. This is the gateway custard dessert: no special gear, an unforgettable jiggle, and a finish that always impresses.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "sugar",
        "quantity": 10,
        "note": "for the caramel"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "whole eggs, room temperature"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "warmed"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "balances the sweetness"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "optional": true,
        "note": "zest a little over the top to garnish"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and heat to 325F (165C). Boil a kettle of water for the bain-marie, and set out a deep baking pan plus six 6-oz ramekins (or one 8-inch round cake pan).",
      "Make the caramel: add the sugar to a dry, light-colored saucepan over medium heat. Let it melt without stirring, swirling the pan occasionally, until it turns a deep amber, about 5 to 8 minutes. Watch closely at the end so it does not burn, then immediately and carefully pour it into the ramekins, swirling to coat the bottoms. It hardens fast, so work quickly.",
      "Make the custard: in a large bowl, gently whisk the eggs just until blended, avoiding excess foam. Whisk in the sweetened condensed milk, evaporated milk, warmed whole milk, vanilla, and salt until smooth and uniform.",
      "Strain the custard through a fine-mesh sieve into a measuring cup or pitcher to remove any stray egg bits and bubbles for a glassy texture. Pour it gently over the set caramel in each ramekin.",
      "Set the filled ramekins in the deep baking pan and slide it onto the oven rack. Carefully pour the hot water into the pan until it reaches halfway up the sides of the ramekins; this bain-marie keeps the custard from curdling.",
      "Bake 40 to 50 minutes, until the custards are just set with a slight wobble in the center when nudged. A knife inserted near the edge should come out clean, and the middle should jiggle like firm jello rather than slosh like liquid. The egg custard is fully cooked at this point, with no runny yolk.",
      "Lift the ramekins out of the water bath and cool to room temperature, then cover and chill in the fridge at least 4 hours, ideally overnight, so the flan firms up and the caramel turns saucy.",
      "To unmold, run a thin knife around the edge of each ramekin, set an inverted plate on top, and flip. Lift the ramekin off and let the amber caramel pool over the custard. Zest a little orange on top if using, and serve cold."
    ],
    "totalTimeMinutes": 320,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 50,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "One can each of sweetened condensed and evaporated milk plus a few eggs feeds six for around a dollar a serving, far cheaper than any cafe dessert.",
      "No ramekins? Bake the whole batch in one metal cake pan or several clean glass jars set in the water bath, then scoop instead of unmolding.",
      "Caramel is just plain sugar and heat, so skip buying caramel sauce. Pour any leftover hot caramel onto parchment for a free snack brittle."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use evaporated milk thinned with a splash of water, or any milk you have on hand",
        "savings": "Use what's already in the fridge"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "A scraped vanilla bean, or 1 tsp of almond extract for a different note",
        "savings": "Skip the pricier vanilla bean and use plain extract"
      },
      {
        "forIngredientId": "evaporated-milk",
        "swap": "Swap in an extra cup of whole milk simmered to reduce slightly, plus a tablespoon of milk powder for body",
        "savings": "Saves about $2 by skipping the can"
      }
    ],
    "estimatedNutrition": {
      "calories": 400,
      "protein": 11,
      "carbs": 58,
      "fat": 12,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Latin American",
    "tags": [
      "egg",
      "latin-american",
      "dessert",
      "custard",
      "make-ahead",
      "gluten-free",
      "vegetarian",
      "no-special-gear"
    ]
  },
  {
    "id": "egg-pastel-de-nata",
    "name": "Pastel de Nata (Portuguese Custard Tarts)",
    "description": "Shatteringly crisp pastry shells cradling a silky cinnamon-and-lemon egg-yolk custard, baked screaming hot so the tops blister into iconic dark caramel freckles. A Lisbon cafe classic that tastes gourmet but leans on store-bought crust to stay totally dorm-doable.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "frozen-pie-crust",
        "quantity": 1,
        "note": "thawed; or use puff pastry — rolled and coiled to mimic the spiral shell"
      },
      {
        "ingredientId": "egg-yolks",
        "quantity": 6,
        "note": "yolks only; reserve whites for another use"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "12 tbsp = about 3/4 cup, for the syrup"
      },
      {
        "ingredientId": "water",
        "quantity": 0.67,
        "note": "about 2/3 cup, for the sugar syrup"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "1/8 cup = 2 tbsp, helps body the custard"
      },
      {
        "ingredientId": "cinnamon-sticks",
        "quantity": 1,
        "note": "or use the ground cinnamon below in the syrup"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest from half a lemon, no white pith"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "for dusting before serving (or 1/2 tsp in the syrup if no cinnamon stick)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "optional": true,
        "note": "for dusting before serving"
      }
    ],
    "steps": [
      "Heat the oven as hot as it goes, ideally 500-525F (260-275C), with a rack in the upper third. A blistering oven is what gives nata their signature charred tops, so let it fully preheat for at least 20 minutes.",
      "Make the syrup: in a small saucepan combine the sugar, water, cinnamon stick, and lemon zest. Bring to a simmer over medium heat and cook without stirring until slightly syrupy and about 220F (105C), 3-4 minutes. Pull off the heat and fish out the cinnamon stick and lemon peel.",
      "Make the milk base: in a separate saucepan whisk the cornstarch and flour into the cold milk until lump-free, then cook over medium heat, whisking constantly, until it thickens into a smooth pudding-like paste, 2-3 minutes. Remove from heat.",
      "Slowly pour the hot syrup into the thickened milk in a thin stream while whisking hard, then whisk in the vanilla and salt. Let it cool for 5 minutes so it won't scramble the yolks.",
      "Whisk the egg yolks in a bowl, then temper: ladle in a little of the warm milk mixture while whisking, then whisk the yolks back into the pan. Strain the custard through a sieve for a glassy texture; it should be thin and pourable. It finishes cooking in the oven, so it must bake until set, never runny.",
      "Shape the shells: unroll the pie crust (or puff pastry), roll it into a tight log, slice into 6 pinwheels, and press each into a greased muffin tin, pushing the dough up the sides into a thin cup.",
      "Fill each shell about three-quarters full with custard, leaving room to bubble. Bake at 500F+ for 12-16 minutes until the pastry is deep golden and crisp and the custard tops are puffed with dark caramelized blisters. If your oven runs cooler, finish under the broiler for 1-2 minutes, watching closely.",
      "Cool in the tin 5 minutes, then lift out. The custard should be set with a slight jiggle and the tops well-charred, never liquid in the center. Dust with cinnamon and powdered sugar and eat warm."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 16,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Save the 6 leftover egg whites for an omelet or meringue — nothing goes to waste.",
      "A cinnamon stick and a strip of lemon peel cost pennies and do all the flavor work; skip pricey vanilla beans and use plain vanilla extract.",
      "No fancy puff pastry needed — a single store-bought pie crust coiled into a muffin tin gives you flaky shells for a fraction of the cafe price."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-pie-crust",
        "swap": "Use crescent-dough or phyllo brushed with butter and stacked if that's what's in the freezer aisle.",
        "savings": "About the same; whatever's on sale wins"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "2% or oat milk works; the custard sets a touch softer but still delicious.",
        "savings": "Saves a few cents with 2%"
      },
      {
        "forIngredientId": "cinnamon-sticks",
        "swap": "Use 1/2 tsp ground cinnamon stirred into the syrup if you don't have whole sticks.",
        "savings": "Pantry staple, no extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 5,
      "carbs": 33,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Portuguese",
    "tags": [
      "egg",
      "portuguese",
      "custard",
      "dessert",
      "pastry",
      "cafe-treat",
      "snack"
    ]
  },
  {
    "id": "egg-dutch-baby-puffed-oven-pancake",
    "name": "Dutch Baby (Puffed Oven Pancake)",
    "description": "A dramatic eggy custard-crepe hybrid that puffs into a giant golden pillow in a screaming-hot skillet, then collapses into tender, buttery ridges the moment it leaves the oven. One blender batter, one pan, zero flipping, dusted with powdered sugar and a squeeze of lemon.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5
      },
      {
        "ingredientId": "butter",
        "quantity": 3
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "optional": true,
        "note": "for dusting"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "optional": true,
        "note": "cut into wedges for squeezing"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 2,
        "optional": true,
        "note": "for drizzling at the table"
      }
    ],
    "steps": [
      "Set a 10-inch cast-iron or oven-safe skillet on the middle rack and preheat the oven to 425F. Let the empty pan heat at least 10 minutes so it is screaming hot when the batter hits it.",
      "Crack the 3 eggs into a blender and let them sit a few minutes to take the chill off; room-temperature eggs and milk give the tallest puff.",
      "Add the 1/2 cup flour, 1/2 cup whole milk, 1 tsp vanilla, 1 tbsp sugar, and 1/4 tsp salt. Blend 30-45 seconds until completely smooth and a little frothy, scraping down once. Let the batter rest while the pan finishes heating.",
      "Using thick mitts (the handle is dangerously hot), pull the pan out and drop in the 3 tbsp butter. Swirl until it melts and foams, coating the bottom and sides; it should sizzle on contact.",
      "Immediately pour the batter into the center of the sizzling pan in one steady stream. Do not stir. Slide it straight back into the oven.",
      "Bake undisturbed 20-25 minutes until the Dutch baby has climbed dramatically up the sides and is deep golden brown with crisp edges. Do not open the oven early or it will deflate; it is fully cooked and food-safe when the center is set and no longer wet or jiggly.",
      "Pull it out. It will sink into tender ridges within a minute, which is exactly right. Dust generously with powdered sugar.",
      "Squeeze the lemon wedges over the top and drizzle with maple syrup. Slice into wedges and serve immediately while it is hot."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "blender",
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "No blender? Whisk the batter hard by hand in a bowl for 2 minutes until smooth and frothy, then rest it 10 minutes before pouring.",
      "No cast iron? Any oven-safe metal pan or a glass pie dish works. Just preheat it empty so the butter sizzles when the batter goes in.",
      "Skip bottled garnishes and finish with plain white sugar plus a squeeze of fresh lemon. It tastes just as good for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk you have, including 2% or almond milk",
        "savings": "Use what's already in the fridge"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "1/4 tsp cinnamon for a warm-spice version",
        "savings": "Pennies and pantry-friendly"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "A thin drizzle of maple syrup or honey",
        "savings": "No need to buy powdered sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 13,
      "carbs": 34,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🥞",
    "accentColor": "bg-amber-100",
    "cuisine": "German-American",
    "tags": [
      "egg",
      "german-american",
      "breakfast",
      "oven",
      "puffed-pancake",
      "blender",
      "weekend",
      "vegetarian"
    ]
  },
  {
    "id": "egg-classic-creme-brulee",
    "name": "Classic Creme Brulee",
    "description": "A cold, silky vanilla custard hiding under a thin, glassy shatter of torched caramelized sugar. Just a handful of ingredients, and that first crack of the crust is the whole reason you make it.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "heavy-cream",
        "quantity": 2
      },
      {
        "ingredientId": "egg-yolks",
        "quantity": 5
      },
      {
        "ingredientId": "sugar",
        "quantity": 6,
        "note": "for the custard"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "for the torched topping (about 1 tbsp per ramekin)"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "just a small pinch"
      },
      {
        "ingredientId": "vanilla-bean",
        "quantity": 1,
        "optional": true,
        "note": "split and scrape for real bean flecks instead of (or alongside) the extract"
      }
    ],
    "steps": [
      "Heat the oven to 325F. Set four 6-oz ramekins in a deep baking dish and bring a kettle of water to a boil for the water bath.",
      "In a small saucepan over medium-low heat, warm the heavy cream with the vanilla extract (and scraped vanilla bean, if using) until it steams and tiny bubbles form at the edges, about 5 minutes. Do not let it boil.",
      "In a bowl, whisk the 5 egg yolks with 6 tbsp sugar and the pinch of salt until pale and smooth, about 1 minute. The yolks are gently cooked in the oven, never served raw, so use fresh, clean eggs.",
      "Temper the eggs: whisking constantly, pour the hot cream into the yolks in a slow, thin stream so they warm without scrambling. Whisk until fully combined.",
      "Strain the custard through a fine-mesh sieve into a measuring cup to catch any cooked bits, then divide evenly among the ramekins.",
      "Pour the boiling water into the baking dish until it reaches halfway up the sides of the ramekins. Bake 35-45 minutes, until the edges are set but the centers still jiggle like loose Jell-O when nudged (about 170-175F at the center if you have a thermometer).",
      "Lift the ramekins out of the water bath, cool to room temperature, then chill uncovered in the fridge at least 3 hours (or overnight) until cold and fully set.",
      "Just before serving, blot any condensation from the tops, sprinkle about 1 tbsp sugar evenly over each custard, and torch in slow circles until amber and bubbling. No torch? Broil on the top rack 1-3 minutes, watching constantly so the sugar does not burn.",
      "Let the caramel harden for 1 minute, then crack through the crust and serve cold."
    ],
    "totalTimeMinutes": 240,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Save the 5 leftover egg whites in the freezer for omelets, meringues, or protein scrambles so nothing goes to waste.",
      "Vanilla extract delivers nearly all the flavor for pennies; skip the pricey vanilla bean unless you want the pretty flecks for a date night.",
      "No kitchen torch? The broiler caramelizes the sugar top for free. Just keep the oven door cracked and never walk away."
    ],
    "substitutions": [
      {
        "forIngredientId": "vanilla-extract",
        "swap": "1 split vanilla bean for deeper flavor and real flecks",
        "savings": "Costs more, but skip if you only have extract"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Half-and-half for a lighter, less rich custard",
        "savings": "Saves a bit and lowers the fat"
      },
      {
        "forIngredientId": "egg-yolks",
        "swap": "Separate whole eggs yourself and use the yolks",
        "savings": "Often cheaper per yolk and you keep the whites"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 6,
      "carbs": 28,
      "fat": 33,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "egg",
      "french",
      "dessert",
      "custard",
      "date-night",
      "make-ahead",
      "gluten-free"
    ]
  },
  {
    "id": "egg-denver-western-omelette",
    "name": "Denver (Western) Omelette",
    "description": "The ultimate hearty diner omelette: savory ham, sweet bell pepper, and onion sauteed in butter, then folded into fluffy eggs under a blanket of melty cheddar. A complete, protein-packed meal that comes together in one pan and happily uses up your fridge odds and ends.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "ham",
        "quantity": 2,
        "note": "diced into small cubes"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "any color, finely diced"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.25,
        "note": "finely diced"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 1.5,
        "note": "shredded"
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.125,
        "note": "a splash, about 2 tbsp"
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
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "sliced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Crack the eggs into a bowl, add the splash of heavy cream, salt, and pepper, then beat with a fork until fully blended and slightly frothy. Set aside.",
      "Melt the butter in an 8-10 inch nonstick skillet over medium heat until it foams. Add the diced ham, onion, and bell pepper.",
      "Saute for 4-6 minutes, stirring often, until the onion is soft and translucent, the pepper has lost its raw crunch, and the ham is heated through and lightly browned at the edges.",
      "Lower the heat to medium-low and pour in the beaten eggs, tilting the pan so they spread evenly over the filling. Let them sit undisturbed for about 30 seconds until the edges begin to set.",
      "With a spatula, gently push the set edges toward the center and tilt the pan so the raw egg flows underneath. Repeat until the eggs are mostly set but the top is still slightly wet, about 2-3 minutes total.",
      "Scatter the shredded cheddar over one half of the omelette and cook 30-60 seconds more, until the cheese starts to melt and the eggs are just set with no runny liquid remaining.",
      "Fold the bare half over the cheesy half, press gently, and slide the omelette onto a plate. The eggs should be fully cooked through (no wet egg) for food-safe doneness.",
      "Top with sliced scallion if using and serve hot."
    ],
    "totalTimeMinutes": 18,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 11,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Build it from scraps: the heel of a leftover deli ham, a half bell pepper, and the back half of an onion you already have. Almost nothing goes to waste.",
      "Buy a block of cheddar and shred it yourself. It is noticeably cheaper per ounce than pre-shredded bags and melts better with no anti-caking starch.",
      "No heavy cream? A splash of regular milk or even a teaspoon of water works fine for fluffy eggs, so skip a special trip to the store."
    ],
    "substitutions": [
      {
        "forIngredientId": "ham",
        "swap": "Diced cooked bacon, breakfast sausage, or leftover rotisserie chicken; for a veggie version, use sauteed mushrooms.",
        "savings": "Bacon ends or leftover meat can be cheaper than deli ham"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "A splash of whole milk or a teaspoon of water",
        "savings": "Saves buying cream you may not use"
      },
      {
        "forIngredientId": "cheddar-block",
        "swap": "Any melting cheese you have: shredded mozzarella, Swiss, pepper jack, or American singles",
        "savings": "Use whatever is already open in your fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 635,
      "protein": 38,
      "carbs": 9,
      "fat": 50,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "omelette",
      "breakfast",
      "high-protein",
      "one-pan",
      "diner",
      "gluten-free"
    ]
  },
  {
    "id": "egg-cloud-eggs-baked-nests",
    "name": "Cloud Eggs (Baked Egg-White Nests with Runny Yolks)",
    "description": "Whipped egg whites baked into pillowy golden clouds with a sun-bright runny yolk tucked in the center. It looks like brunch-cafe fare, but it's just eggs, a whisk, and a sheet pan, the ultimate way to wow your flatmates before 9am.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "parmesan",
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
        "ingredientId": "butter",
        "quantity": 1,
        "optional": true,
        "note": "to grease the pan instead of cooking spray"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "garnish, snipped over the top"
      }
    ],
    "steps": [
      "Position a rack in the upper third of the oven and preheat to 450F. Line a sheet pan with parchment, or lightly grease it with butter so the clouds release cleanly.",
      "Separate the eggs carefully: whites into a large, clean, grease-free bowl, each yolk into its own small cup so none break. Even a speck of yolk in the whites will keep them from whipping, so take your time.",
      "Add the salt to the whites and whisk hard (or use a hand mixer) for 2-3 minutes until they hold stiff, glossy peaks; the foam should stand straight up when you lift the whisk and not slide in the bowl.",
      "Gently fold in the parmesan with a spatula, turning the bowl as you go, just until combined. Don't overmix or you'll deflate the clouds.",
      "Spoon the whites into 4 fluffy mounds on the sheet pan, spacing them well apart. Use the back of the spoon to press a deep well into the center of each, like a little nest, to cradle the yolk.",
      "Bake for 3 minutes, until the clouds are set on the surface and just starting to turn golden at the peaks.",
      "Slide the pan out, carefully drop one yolk into each well, and season with the pepper. Return to the oven for 3-4 minutes more.",
      "Pull them when the whites are fully cooked and golden and the yolks are warmed through but still glossy and jiggly, that's the intentional runny center. If you prefer set yolks, bake 2-3 minutes longer. Snip chives over the top and eat immediately while warm."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ],
    "cheapTips": [
      "The whole dish is just 4 eggs plus a sprinkle of cheese, well under a dollar a serving; nothing fancy required.",
      "No hand mixer? A regular whisk and 3 minutes of arm work gets you to stiff peaks for free, just make sure the bowl is bone-dry and grease-free.",
      "Skip the optional parmesan and chives entirely and it still works, plain whipped whites with a runny yolk is the original budget version."
    ],
    "substitutions": [
      {
        "forIngredientId": "parmesan",
        "swap": "Any hard cheese you have, grated pecorino or cheddar, or a sprinkle of nutritional yeast for a dairy-free finish.",
        "savings": "Use whatever's already in the fridge instead of buying parmesan"
      },
      {
        "forIngredientId": "butter",
        "swap": "A quick spritz of cooking spray, or just good parchment paper, keeps the clouds from sticking with no fat needed.",
        "savings": "Saves a few cents per serving"
      },
      {
        "forIngredientId": "chives",
        "swap": "Snipped scallion greens or a pinch of dried parsley for the same fresh, green finish.",
        "savings": "Scallions are far cheaper than a fresh chive bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 14,
      "carbs": 1,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "☁️",
    "accentColor": "bg-sky-100",
    "cuisine": "French-inspired",
    "tags": [
      "egg",
      "french",
      "breakfast",
      "high-protein",
      "vegetarian",
      "impressive",
      "gluten-free",
      "low-carb"
    ]
  },
  {
    "id": "egg-overnight-breakfast-strata",
    "name": "Overnight Breakfast Strata",
    "description": "A make-ahead savory bread pudding where cubed bread soaks up a cheesy egg-and-milk custard overnight, then bakes into a puffy, golden casserole studded with sausage, peppers and melty cheddar. It's the perfect tastes-like-brunch dish to assemble after class and bake in the morning to feed your whole hall.",
    "mealType": "meal-prep",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "bread",
        "quantity": 8,
        "note": "slightly stale is ideal; cut into 1-inch cubes"
      },
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2.5,
        "note": "for the custard"
      },
      {
        "ingredientId": "sharp-cheddar",
        "quantity": 6,
        "note": "shredded; about 1.5 cups"
      },
      {
        "ingredientId": "breakfast-links",
        "quantity": 2,
        "note": "casing removed and crumbled, or use any breakfast sausage"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "diced small"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "spinach",
        "quantity": 2,
        "note": "fresh; wilts down a lot"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "for greasing the dish"
      },
      {
        "ingredientId": "dijon",
        "quantity": 1,
        "note": "whisked into the custard for depth"
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
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Grease a 9x13-inch baking dish with the butter. Cut the bread into roughly 1-inch cubes (stale bread soaks up custard best) and spread them in the dish.",
      "Set a skillet over medium heat and cook the crumbled sausage 5-6 minutes until no pink remains and it's lightly browned, breaking it up as it goes. Scoop it over the bread, leaving the rendered fat in the pan.",
      "In the same skillet over medium heat, saute the diced onion and bell pepper 4-5 minutes until softened, then add the spinach and toss just until wilted, about 1 minute. Scatter the veg over the bread along with about two-thirds of the shredded cheddar.",
      "In a bowl, whisk the eggs, whole milk, dijon, salt, pepper and garlic powder until fully combined and no streaks of yolk remain. Pour evenly over the bread so every cube gets soaked, then press the bread down gently with a spatula.",
      "Top with the remaining cheddar, cover tightly with foil or plastic wrap, and refrigerate at least 1 hour and up to overnight so the bread fully absorbs the custard.",
      "When ready to bake, heat the oven to 350F and let the dish sit on the counter while it preheats. Remove the cover and bake 55-70 minutes until the top is puffed and golden and the center is fully set.",
      "Check doneness by inserting a knife into the center: it should come out clean with no liquid egg (the custard must be fully cooked through, not runny, for food safety). If the top browns too fast, tent loosely with foil.",
      "Let the strata rest 10 minutes so it firms up and slices cleanly, then top with sliced scallion and cut into 6 portions. Refrigerate leftovers and reheat slices in the microwave for 60-90 seconds."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 65,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop",
      "microwave"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "This dish is built to rescue stale bread, the heels of a loaf, or that forgotten half-bag of buns, so use up what's already going hard instead of buying fresh.",
      "Skip the sausage to make it vegetarian and even cheaper, or stretch one link further by leaning on the cheese and veg for flavor.",
      "Use whatever vegetables are wilting in your fridge: mushrooms, tomato, leftover roasted veg or frozen spinach all work, so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use regular milk, 2% milk, or even half-and-half for a richer custard",
        "savings": "milk is a few cents cheaper than whole-milk per cup"
      },
      {
        "forIngredientId": "breakfast-links",
        "swap": "Swap in chopped ham, crumbled bacon, or leave the meat out entirely for a vegetarian strata",
        "savings": "going meatless saves the full sausage cost"
      },
      {
        "forIngredientId": "sharp-cheddar",
        "swap": "Any melting cheese works, like mozzarella, the generic shredded cheese, or Swiss",
        "savings": "shredded mozzarella or the 1/4-cup cheese can run cheaper per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 21,
      "carbs": 24,
      "fat": 18,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "meal-prep",
      "breakfast",
      "casserole",
      "make-ahead",
      "budget",
      "vegetarian-option",
      "uses-stale-bread"
    ]
  },
  {
    "id": "egg-chinese-marbled-tea-eggs",
    "name": "Chinese Marbled Tea Eggs (Cha Ye Dan)",
    "description": "Hard-boiled eggs with cracked shells steeped in a fragrant brew of black tea, soy and warm spices until they turn into gorgeous marble-veined, savory snacks. Protein-packed, dirt-cheap, and they only get better as they soak overnight in the dorm fridge.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "black-tea",
        "quantity": 3,
        "note": "black tea bags, or 1 tbsp loose black tea leaves"
      },
      {
        "ingredientId": "light-soy-sauce",
        "quantity": 3,
        "note": "for savory base color and salt"
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 1,
        "note": "for deep mahogany marbling"
      },
      {
        "ingredientId": "star-anise",
        "quantity": 2
      },
      {
        "ingredientId": "cinnamon-sticks",
        "quantity": 1
      },
      {
        "ingredientId": "sichuan-peppercorn",
        "quantity": 1,
        "note": "for a gentle citrusy, numbing aroma"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "rounds out the soy"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish when serving"
      }
    ],
    "steps": [
      "Place the eggs in a single layer in a small saucepan and cover with cold water by about 1 inch. Bring to a boil over high heat, then lower to a gentle simmer and cook 8 minutes for fully set, hard-cooked yolks (tea eggs should always be hard-boiled, never runny, since they steep for hours).",
      "Drain the eggs and transfer to a bowl of cold water for 2 minutes until cool enough to handle. This stops the cooking and makes the shells easier to crack.",
      "Gently tap each egg all over with the back of a spoon to craze the shell into a fine network of cracks, but leave the shell on. The more cracks, the more dramatic the marbling, just don't peel them.",
      "In the same saucepan, combine 3 cups fresh water with the black tea, light soy sauce, dark soy, star anise, cinnamon stick, Sichuan peppercorns, salt and sugar. Bring to a boil over high heat, then reduce to low and simmer 5 minutes to build the brew.",
      "Lower the cracked eggs back into the simmering brew so they are mostly submerged. Keep on the lowest simmer, partially covered, for 30 minutes so the color and spice seep into the cracks.",
      "Turn off the heat and let the eggs cool in the brew. For the best marble and flavor, transfer the eggs and liquid to a container and steep in the fridge at least 4 hours, ideally overnight.",
      "To serve, peel an egg to reveal the marble pattern, halve it, and shower with sliced scallion if using. Keep leftover eggs submerged in the brew in the fridge and eat within 4 days."
    ],
    "totalTimeMinutes": 285,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Steep a whole carton of eggs in one batch of brew. The spices cost pennies and one brew easily flavors a dozen eggs for grab-and-go protein all week.",
      "Skip loose-leaf tea and just use plain black tea bags. They're under a dime each and give the same deep color and tannin.",
      "Reuse the brew. After your first batch, top it off with a splash of water and soy and steep a second round of eggs for almost no extra cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-soy",
        "swap": "Use an extra tablespoon of light soy sauce plus a pinch of sugar; color is a touch lighter but flavor stays on point.",
        "savings": "skip a specialty bottle"
      },
      {
        "forIngredientId": "sichuan-peppercorn",
        "swap": "Swap in 1/2 tsp chinese-5-spice for a similar warm, anise-forward aroma.",
        "savings": "uses a spice you may already have"
      },
      {
        "forIngredientId": "black-tea",
        "swap": "Any caffeinated black tea bag works, or use 3 green-tea bags for a milder, grassier steep.",
        "savings": "use whatever tea is in the cupboard"
      }
    ],
    "estimatedNutrition": {
      "calories": 80,
      "protein": 7,
      "carbs": 1,
      "fat": 5,
      "fiber": 0
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "egg",
      "chinese",
      "snack",
      "high-protein",
      "meal-prep",
      "street-food",
      "make-ahead",
      "budget"
    ]
  },
  {
    "id": "egg-gyeran-mari-seaweed",
    "name": "Gyeran-Mari (Korean Rolled Omelette with Seaweed)",
    "description": "A fluffy, layered Korean rolled omelette flecked with sweet carrot and scallion, hiding a striking spiral of toasted seaweed in every slice. A classic banchan and lunchbox hero that's just as good packed cold as it is hot off the pan.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "carrot",
        "quantity": 0.5,
        "note": "finely diced or grated"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "for the pan, applied in thin coats"
      },
      {
        "ingredientId": "nori-sheets",
        "quantity": 2,
        "note": "toasted gim, for the inner spiral",
        "optional": true
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "brushed on at the end",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "garnish",
        "optional": true
      }
    ],
    "steps": [
      "Crack the eggs into a bowl, add 1/2 tsp salt, and beat thoroughly with a fork or whisk until fully uniform and slightly frothy. Stir in the finely diced carrot and sliced scallion. For an extra-smooth texture, pour the mixture through a fine sieve.",
      "Heat a non-stick (ideally rectangular) pan over low to medium-low heat. Wipe a thin film of vegetable oil across the surface with a paper towel; keep the heat gentle and even so the egg sets without browning.",
      "Pour in a thin layer of egg, just enough to coat the pan. Tilt to spread evenly and cook until the surface is mostly set but still slightly wet on top, about 1 to 2 minutes.",
      "While the top is still tacky, lay a sheet of toasted nori over the egg (trim to fit). Starting from one side, gently roll the egg into a tight log, using a spatula to keep it snug.",
      "Push the roll to the far end of the pan, lightly re-oil the empty space, and pour in another thin layer of egg, lifting the existing roll so the new egg flows underneath and bonds to it. Let it set until tacky, then roll again to add a layer. Repeat until all the egg is used, keeping the heat low so each layer stays tender.",
      "Once the final layer is rolled, press the log gently with the spatula and cook another 30 to 60 seconds, turning to lightly set all sides. The omelette should be fully cooked through with no runny egg, just moist and tender inside.",
      "Transfer the roll to a cutting board and rest 2 to 3 minutes to firm up. For a tidier shape, wrap it snugly in parchment or foil while it cools.",
      "Brush with a little sesame oil, slice crosswise into 3/4-inch pieces to reveal the seaweed spiral, and sprinkle with sesame seeds. Serve warm, or chill and pack cold for meal-prep; refrigerate up to 3 days."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Eggs are one of the cheapest proteins around, and a single 6-egg roll stretches to feed four as a side dish. Buy the big carton.",
      "Use up odds and ends: a half carrot, the last two scallions, or a handful of leftover veggies all disappear into the layers. No waste.",
      "Skip the nori if you don't have it — the omelette is delicious plain, and one folded sheet goes a long way, so a small pack lasts many batches."
    ],
    "substitutions": [
      {
        "forIngredientId": "scallion",
        "swap": "Use chopped chives or a little finely diced onion for the same fresh allium bite.",
        "savings": "Onion is often cheaper and keeps longer"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Cooking spray or any neutral oil works — you only need a thin film.",
        "savings": "A few cents per batch"
      },
      {
        "forIngredientId": "nori-sheets",
        "swap": "Swap in a thin layer of chopped spinach or grated cheese for the inner stripe, or leave it out entirely.",
        "savings": "Skipping it saves about a quarter"
      }
    ],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 10,
      "carbs": 2,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "egg",
      "korean",
      "banchan",
      "meal-prep",
      "lunchbox",
      "rolled-omelette",
      "gyeran-mari",
      "high-protein",
      "vegetarian",
      "budget"
    ]
  },
  {
    "id": "egg-tamagoyaki-sweet-rolled-omelette",
    "name": "Tamagoyaki (Japanese Sweet Rolled Omelette)",
    "description": "Pillowy layers of lightly sweet, soy-seasoned egg rolled into a tender golden log - the Japanese breakfast and bento classic. Master the roll once and you'll make it forever.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "for that classic gentle sweetness"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "mirin",
        "quantity": 1,
        "note": "adds gloss and depth; optional",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "dashi",
        "quantity": 0.25,
        "note": "makes it a savory dashimaki tamago; optional",
        "optional": true
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "for greasing the pan between layers"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "thinly sliced, as garnish",
        "optional": true
      }
    ],
    "steps": [
      "Crack the 4 eggs into a bowl. Add the sugar, soy sauce, and salt, plus the mirin and dashi if using. Beat thoroughly with chopsticks or a fork until yolks and whites are fully blended and the sugar dissolves, trying not to whip in too much air. For an extra-smooth texture, strain the mixture through a sieve.",
      "Heat a non-stick pan over medium-low heat (a rectangular tamagoyaki pan is ideal, but a small round 8-inch pan works fine). Fold a paper towel, dip it in the vegetable oil, and wipe a thin film across the whole pan. Keep the oiled towel nearby to re-grease between layers.",
      "Test the heat: a drop of egg should sizzle gently and set within a few seconds without browning. Pour in a thin layer of egg, just enough to coat the pan, and tilt to spread. Pop any large bubbles with your chopsticks as it sets.",
      "When the layer is mostly set but still slightly wet and glossy on top, roll it from the far side toward you into a tight log (in a round pan, roll toward one edge). The wet surface glues the next layer on, so don't let it fully dry out.",
      "Slide the roll back to the far side of the pan. Re-grease the empty surface with the oiled towel, pour in another thin layer, and lift the existing roll so the new egg flows underneath it. Let it set until just barely wet, then roll back over the new layer.",
      "Repeat the grease-pour-lift-roll process for 3 to 4 more layers until all the egg is used, keeping the heat at medium-low so the outside stays pale golden and never browns. The finished log should be fully set with no raw runny egg inside; eggs are safe when cooked through to 160 degrees F.",
      "Turn the roll out onto a sheet of foil or a bamboo mat and, while still hot, press and shape it into a neat rectangular log. Let it rest 1 to 2 minutes to firm up.",
      "Slice crosswise into thick 1-inch pieces to reveal the spiral layers. Garnish with sliced scallion if you like, and serve warm or pack into a bento."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Eggs, sugar, soy sauce and a pinch of salt are all you truly need; skip the mirin and dashi and it's still delicious for under a dollar a serving.",
      "No tamagoyaki pan? Any small non-stick round pan works. Just roll toward one side and shape the log in foil afterward.",
      "One batch stretches across two bento boxes or breakfasts, and the slices keep well chilled for a day."
    ],
    "substitutions": [
      {
        "forIngredientId": "mirin",
        "swap": "1 tsp sugar dissolved in a splash of water (or rice vinegar) mimics mirin's sweetness",
        "savings": "Skips a specialty bottle you may not own"
      },
      {
        "forIngredientId": "dashi",
        "swap": "1/4 tsp dashi powder in water, or just plain water - the egg is great either way",
        "savings": "Avoids buying a whole dashi pack"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "tamari or coconut aminos for a gluten-free version",
        "savings": "Use what's in the cupboard"
      }
    ],
    "estimatedNutrition": {
      "calories": 175,
      "protein": 13,
      "carbs": 4,
      "fat": 11,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Japanese",
    "tags": [
      "egg",
      "japanese",
      "breakfast",
      "bento",
      "rolled-omelette",
      "tamagoyaki",
      "high-protein",
      "low-cost"
    ]
  },
  {
    "id": "egg-chawanmushi-steamed-custard",
    "name": "Chawanmushi (Silky Steamed Egg Custard)",
    "description": "An elegant Japanese savory custard, glass-smooth and barely set, where eggs and dashi melt together over hidden bites of chicken, shrimp, and mushroom. It feels like restaurant food but is mostly hands-off, soothing, and hard to mess up.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "dashi",
        "quantity": 1.25
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "light/usukuchi if you have it, for color"
      },
      {
        "ingredientId": "mirin",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 0.5,
        "note": "cut into small bite-size pieces"
      },
      {
        "ingredientId": "shrimp",
        "quantity": 0.5,
        "note": "peeled, deveined; halved if large"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thin-sliced greens for garnish"
      }
    ],
    "steps": [
      "Bring a pot or wide skillet with about an inch of water to a gentle simmer over medium heat (you want steam, not a hard boil that rattles the cups). Set out two small heatproof cups, mugs, or ramekins.",
      "Pat the chicken dry and divide it with the shrimp and sliced shiitake between the two cups. The raw chicken and shrimp go in now; they cook fully inside the custard as it steams.",
      "In a bowl, gently whisk the 2 eggs until just broken up, trying not to create foam (foam leaves bubbles in the finished custard). Whisk in the dashi, soy sauce, mirin, and salt until smooth.",
      "Pour the egg mixture through a fine strainer directly into the cups over the fillings; straining is the secret to a glass-smooth custard. Skim off any surface bubbles with a spoon.",
      "Cover each cup loosely with foil so condensation doesn't drip in. Lower the cups into the simmering water (it should reach about halfway up the cups), then cover the pot with the lid set slightly ajar to keep the heat low and even.",
      "Steam over low heat for 15 to 20 minutes. Keep it gentle: too much heat makes the custard bubbly and tough instead of silky. It's done when the surface is just set, jiggles like soft tofu, and a toothpick poked in releases clear (not cloudy) liquid.",
      "Confirm the chicken and shrimp are fully cooked before serving: chicken opaque all the way through, shrimp pink and firm. If the center is still very loose, steam another 3 to 5 minutes and re-check.",
      "Carefully lift out the hot cups, top with sliced scallion greens, and serve warm with a small spoon, scooping down to the treasures at the bottom."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free",
      "gluten-free"
    ],
    "cheapTips": [
      "No dashi on hand? A dashi packet or a little dashi powder in hot water costs pennies and lasts for many batches.",
      "Use whatever single protein you have, just chicken or just shrimp, instead of buying both. The custard is the star.",
      "Any small heatproof mug or ramekin works as the cup, so there's no special equipment to buy."
    ],
    "substitutions": [
      {
        "forIngredientId": "dashi",
        "swap": "1.25 cups water mixed with dashi-powder, or chicken-broth in a pinch",
        "savings": "Dashi powder is far cheaper per cup than liquid dashi"
      },
      {
        "forIngredientId": "shrimp",
        "swap": "extra chicken-breast, or more mushroom for a vegetarian version",
        "savings": "Skipping shrimp saves about $1.40 per batch"
      },
      {
        "forIngredientId": "shiitake",
        "swap": "any mushroom you have",
        "savings": "Button mushrooms cost a fraction of shiitake"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 16,
      "carbs": 4,
      "fat": 5,
      "fiber": 1
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "egg",
      "japanese",
      "steamed",
      "custard",
      "high-protein",
      "gluten-free",
      "dinner",
      "comfort-food"
    ]
  },
  {
    "id": "egg-kerala-egg-roast-nadan-mutta",
    "name": "Kerala Egg Roast (Nadan Mutta Roast)",
    "description": "Boiled eggs tossed in a glossy, deeply caramelized onion masala loaded with black pepper, ginger-garlic and curry leaves - semi-dry, bold and a little fiery, clinging to every egg. No coconut, no cream, just big flavor from cheap ingredients that hugs chapati or plain rice perfectly.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "hard-boiled-eggs",
        "quantity": 4,
        "note": "peeled and scored"
      },
      {
        "ingredientId": "coconut-oil",
        "quantity": 2,
        "note": "traditional Kerala flavor"
      },
      {
        "ingredientId": "onion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "or about 1 tsp fresh grated"
      },
      {
        "ingredientId": "curry-leaves",
        "quantity": 1,
        "note": "fresh if you can get them"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 1,
        "note": "Kashmiri for color, less heat"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 1,
        "note": "the star - freshly cracked"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "note": "chopped, to finish",
        "optional": true
      }
    ],
    "steps": [
      "Hard-boil the eggs if not already done: cover eggs with water, bring to a boil, then simmer 9-10 minutes for fully set yolks. Cool under cold running water, peel, and make 3-4 shallow knife scores across each egg so the masala can grip - set aside.",
      "Heat the coconut oil in a wide skillet over medium heat. Add the sliced onions with a pinch of the salt and cook slowly, stirring often, for 12-15 minutes until soft, collapsed and deeply golden-brown. Don't rush this - the browned onions are the whole dish.",
      "Stir in the minced garlic, ginger and curry leaves and cook 1-2 minutes until fragrant and the raw garlic smell is gone.",
      "Add the chopped tomato and cook 4-5 minutes, mashing it down, until it breaks fully into the onions and the mixture looks like a thick, jammy masala with oil starting to separate at the edges.",
      "Lower the heat, add the turmeric, chili powder, black pepper and garam masala plus the remaining salt. Fry the spices into the masala for about 1 minute, splashing in a tablespoon of water if it sticks, until glossy and aromatic.",
      "Add the scored eggs and gently turn them in the masala for 3-4 minutes, spooning the onion mixture over and around so each egg gets fully coated and 'roasted'. The eggs are already cooked through - you're just glazing and warming them.",
      "Taste and adjust salt and black pepper - it should taste peppery and bold. Turn off the heat, scatter over the chopped cilantro, and serve hot with chapati, naan or plain rice."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Onions are the cheapest hero here - buy a bag and slice extra; the more you brown them down, the bigger the flavor with zero added cost.",
      "Boil your own eggs instead of buying pre-boiled to save money - a dozen raw eggs costs far less per egg.",
      "No fresh curry leaves? A small bag of dried ones from the international aisle lasts months and works fine stirred in early."
    ],
    "substitutions": [
      {
        "forIngredientId": "coconut-oil",
        "swap": "vegetable oil or ghee",
        "savings": "saves about $0.15 if you already have neutral oil"
      },
      {
        "forIngredientId": "hard-boiled-eggs",
        "swap": "4 raw eggs boiled at home",
        "savings": "saves roughly $1.10 vs pre-boiled"
      },
      {
        "forIngredientId": "tomato",
        "swap": "1 tbsp tomato paste loosened with water",
        "savings": "saves about $0.65"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 15,
      "carbs": 16,
      "fat": 23,
      "fiber": 3
    },
    "emoji": "🥚",
    "accentColor": "bg-orange-100",
    "cuisine": "Indian (South / Kerala)",
    "tags": [
      "egg",
      "kerala",
      "south-indian",
      "indian",
      "spicy",
      "dinner",
      "dorm-friendly",
      "vegetarian",
      "gluten-free",
      "one-pan"
    ]
  },
  {
    "id": "egg-cha-trung-hap-vietnamese-steamed-egg-meatloaf",
    "name": "Cha Trung Hap (Vietnamese Steamed Egg & Pork Meatloaf)",
    "description": "Silky steamed pork-and-egg custard shot through with glass noodles, earthy mushrooms and green onion, finished with a glossy brushed-yolk top. It's the savory, comforting layer that makes com tam (broken rice) plates so crave-worthy, and one dish feeds you for days.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-pork",
        "quantity": 8,
        "note": "about half a pound"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "3 go into the mix; reserve 1 yolk for the glossy top"
      },
      {
        "ingredientId": "glass-noodles",
        "quantity": 1,
        "note": "bean-thread / cellophane noodles, soaked and snipped short"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.5,
        "note": "stand-in for wood-ear; finely chopped for chew"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "white and green parts, thinly sliced"
      },
      {
        "ingredientId": "shallot",
        "quantity": 1,
        "note": "finely minced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 4
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to lightly grease the dish"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "broken or jasmine rice, to serve",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "garnish",
        "optional": true
      }
    ],
    "steps": [
      "Soak the glass noodles in warm water for 8-10 minutes until floppy and translucent, then drain well and snip into roughly 1-inch pieces with scissors. Finely chop the soaked mushroom (squeeze dry first if using dried).",
      "Crack all 4 eggs into a bowl, lift out one yolk and set it aside in a small cup for the top. Beat the remaining 3 eggs plus whites together until smooth and uniform.",
      "Add the ground pork, snipped noodles, chopped mushroom, sliced scallion, minced shallot and garlic, fish sauce, sugar, pepper and salt to the eggs. Mix with your hand or a fork until fully combined and slightly sticky, about 1 minute.",
      "Lightly oil a shallow heatproof dish or bowl, scrape the mixture in, and smooth the top flat so it steams evenly.",
      "Set up a steamer: put a rack in a wide pot, add an inch of water, and bring to a gentle simmer. Set the dish on the rack, cover, and steam over medium heat for 22-25 minutes, until the custard is set and a knife inserted in the center comes out clean with no pink pork.",
      "In the last few minutes, lightly beat the reserved yolk and brush a thin even layer over the top, then re-cover and steam 2-3 minutes more until the yolk sets to a glossy golden sheen.",
      "Lift out the dish carefully (it's hot and the lid may have water on it, so tilt the lid away from you). Pour off any pooled liquid and rest 5 minutes, then garnish with cilantro.",
      "Slice into wedges or squares and serve hot over rice with a little extra fish sauce on the side. Refrigerate leftovers within 2 hours and eat within 3 days; reheat until steaming hot throughout."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free",
      "gluten-free"
    ],
    "cheapTips": [
      "No steamer? Set a heatproof bowl on an upside-down ramekin or a balled-up ring of foil inside any lidded pot with an inch of simmering water.",
      "Buy a bag of glass noodles and dried mushrooms once and they keep for months in the pantry, so the per-meal cost drops every time you make this.",
      "Stretch it further by mixing in an extra beaten egg and a handful more noodles, turning half a pound of pork into four full dinners over rice."
    ],
    "substitutions": [
      {
        "forIngredientId": "shiitake",
        "swap": "Generic button or cremini mushroom, finely chopped",
        "savings": "Saves about $4 vs shiitake while keeping the earthy chew"
      },
      {
        "forIngredientId": "ground-pork",
        "swap": "Ground chicken or ground turkey",
        "savings": "Often a bit cheaper and just as silky"
      },
      {
        "forIngredientId": "fish-sauce",
        "swap": "Soy sauce plus a pinch of salt",
        "savings": "Uses a pantry staple if you don't keep fish sauce"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 22,
      "carbs": 18,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Vietnamese",
    "tags": [
      "egg",
      "vietnamese",
      "steamed",
      "pork",
      "high-protein",
      "meal-prep",
      "dinner",
      "one-dish",
      "com-tam"
    ]
  },
  {
    "id": "egg-tortang-talong",
    "name": "Tortang Talong (Filipino Eggplant Omelette)",
    "description": "Smoky charred eggplant fanned out, dipped in seasoned beaten egg, and pan-fried into a tender, lacy omelette. One eggplant and a couple of eggs become a whole comforting Filipino breakfast with rice and a swipe of sweet banana ketchup.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggplant",
        "quantity": 1
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2
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
        "ingredientId": "garlic",
        "quantity": 1,
        "optional": true,
        "note": "minced into the egg for extra savor"
      },
      {
        "ingredientId": "rice",
        "quantity": 1,
        "note": "steamed, for serving"
      },
      {
        "ingredientId": "banana-ketchup",
        "quantity": 1,
        "optional": true,
        "note": "for dipping"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for garnish"
      }
    ],
    "steps": [
      "Char the eggplant: set it directly over a medium-high gas flame, or under a high broiler 4 inches from the element, turning with tongs every 2-3 minutes until the skin is fully blackened and blistered and the flesh is completely soft and collapsed, about 10-15 minutes. Don't leave bald spots; the char is the smoke.",
      "Let the eggplant cool until safe to handle, then peel away all the charred skin, leaving the stem on as a handle. Lay the peeled eggplant on a plate.",
      "Using a fork, gently press and fan the flesh outward from the stem into a flat, even oval so it soaks up egg and cooks through quickly.",
      "Beat the eggs in a wide shallow bowl with the salt, pepper, and optional minced garlic until fully uniform with no streaks.",
      "Heat the vegetable oil in a nonstick skillet over medium heat until it shimmers. Holding the stem, dip the fanned eggplant into the egg to coat both sides, lay it flat in the pan, and pour any remaining egg over the top.",
      "Fry undisturbed 2-3 minutes until the underside is set and golden, then flip carefully with a wide spatula and cook another 2-3 minutes until the second side is browned and the egg is fully set with no runny liquid (cook eggs through, to 160F, for breakfast safety).",
      "Slide onto a plate, garnish with sliced scallion, and serve hot with steamed rice and a side of banana ketchup for dipping."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Eggplants go on deep markdown when they get soft or wrinkled, and those overripe ones char and collapse perfectly for this dish, so grab the discount bin.",
      "No gas burner? The broiler does the same job for free; just keep the rack high and watch it so the skin blackens without drying out the flesh.",
      "Make it a fuller meal for pennies by frying day-old rice in the leftover egg-oil in the pan instead of buying anything extra."
    ],
    "substitutions": [
      {
        "forIngredientId": "eggplant",
        "swap": "Use 2 japanese-eggplant; they're slimmer, char faster, and fan out beautifully",
        "savings": "Often cheaper per piece and cook in half the time"
      },
      {
        "forIngredientId": "banana-ketchup",
        "swap": "Regular ketchup with a tiny pinch of sugar mimics the sweet-tangy dip",
        "savings": "Saves a specialty-aisle trip"
      },
      {
        "forIngredientId": "eggs",
        "swap": "1/2 cup liquid-whole-eggs whisked the same way",
        "savings": "Handy if you keep a carton for protein"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 16,
      "carbs": 52,
      "fat": 17,
      "fiber": 8
    },
    "emoji": "🍆",
    "accentColor": "bg-emerald-100",
    "cuisine": "Filipino",
    "tags": [
      "egg",
      "filipino",
      "breakfast",
      "vegetarian",
      "eggplant",
      "budget",
      "gluten-free"
    ]
  },
  {
    "id": "egg-telur-balado-sambal",
    "name": "Telur Balado (Indonesian Eggs in Chili Sambal)",
    "description": "Fried hard-boiled eggs with blistered, golden skin tossed in a vivid red sweet-spicy chili-tomato sambal scented with lemongrass and kaffir lime. A Minangkabau nasi padang staple that turns plain rice into a feast for pocket change.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "dried-chili",
        "quantity": 6,
        "note": "soaked in hot water 10 min to soften; deseed for less heat"
      },
      {
        "ingredientId": "shallot",
        "quantity": 5
      },
      {
        "ingredientId": "garlic",
        "quantity": 4
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "ripe, roughly chopped"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 6,
        "note": "4 tbsp to fry the eggs, 2 tbsp for the sambal"
      },
      {
        "ingredientId": "lemongrass",
        "quantity": 1,
        "note": "bruised, pale lower stalk only"
      },
      {
        "ingredientId": "kaffir-lime-leaves",
        "quantity": 3
      },
      {
        "ingredientId": "palm-sugar",
        "quantity": 1,
        "note": "or brown sugar"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "half juiced into the sambal, half for serving"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Place the 6 eggs in a pot, cover with cold water by an inch, bring to a boil, then simmer 9-10 minutes for fully set yolks (eggs for balado should be cooked through, not runny). Drain, shock under cold water, and peel.",
      "While the eggs cook, soak the 6 dried chilies in hot water for 10 minutes until pliable, then drain. Blend the soaked chilies, shallots, garlic, and chopped tomato into a coarse-smooth red paste, adding a splash of water if needed to keep the blender moving.",
      "Pat the peeled eggs completely dry. Heat 4 tbsp of the vegetable oil in a nonstick or well-seasoned pan over medium-high until shimmering. Fry the eggs, turning, for 3-4 minutes until the skins blister and turn golden-brown and lightly crackle. Remove and set aside.",
      "Lower the heat to medium and add the remaining 2 tbsp oil. Add the bruised lemongrass and kaffir lime leaves and fry 30 seconds until fragrant.",
      "Pour in the blended chili paste. Fry, stirring often, for 8-12 minutes until the paste darkens to a deep brick red, the raw garlic smell is gone, and oil starts to separate at the edges - this 'matang' (fully cooked) stage is what makes balado taste right.",
      "Season with the palm sugar and salt, then squeeze in the juice from half the lime. Stir and taste: it should be balanced sweet-spicy-tangy with savory depth. Adjust salt or sugar as needed.",
      "Return the fried eggs to the pan and gently toss to coat every egg in the glossy sambal, 1-2 minutes. Halve or leave them whole as you like.",
      "Discard the lemongrass and lime leaves. Serve hot over plain steamed rice, topped with cilantro, with the remaining lime wedges on the side."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Dried chilies are the soul of balado and cost pennies - buy a bag once and it lasts months of cooking.",
      "No blender? Finely mince the shallots, garlic, and rehydrated chilies and mash with the back of a spoon - it just takes a few extra minutes.",
      "Skip fresh kaffir lime leaves if your store doesn't carry them; a strip of regular lime zest gives a similar citrus lift from the lime you already bought."
    ],
    "substitutions": [
      {
        "forIngredientId": "dried-chili",
        "swap": "1 tbsp sambal-oelek or 2 fresh red jalapenos blended in for the heat and color",
        "savings": "uses a pantry jar you may already have"
      },
      {
        "forIngredientId": "palm-sugar",
        "swap": "1 tbsp brown sugar - nearly identical caramel sweetness",
        "savings": "saves ~$0.36 and it's already in most kitchens"
      },
      {
        "forIngredientId": "shallot",
        "swap": "1 small red onion, the everyday Indonesian stand-in for shallots",
        "savings": "saves about $3 over 5 shallots"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 10,
      "carbs": 11,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🥚",
    "accentColor": "bg-red-100",
    "cuisine": "Indonesian",
    "tags": [
      "egg",
      "indonesian",
      "spicy",
      "sambal",
      "dinner",
      "rice-bowl",
      "vegetarian",
      "minangkabau",
      "nasi-padang"
    ]
  },
  {
    "id": "egg-burmese-golden-egg-curry",
    "name": "Burmese Golden Egg Curry",
    "description": "Hard-boiled eggs tossed in turmeric and fried until their skins turn golden and dimpled, then simmered in a glossy onion-tomato-turmeric gravy that's deeply savory and aromatic. Humble pantry ingredients, big comforting payoff over a bowl of rice.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "hard-boiled-eggs",
        "quantity": 4,
        "note": "peeled"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3,
        "note": "for frying the eggs and the gravy base"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1.5,
        "note": "half for coating eggs, half for the gravy"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "chopped"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 1
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "note": "for color and mild warmth"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.25,
        "note": "optional heat",
        "optional": true
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 1,
        "note": "for savory depth"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "water",
        "quantity": 0.75,
        "note": "to form the gravy"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "note": "chopped, to garnish",
        "optional": true
      },
      {
        "ingredientId": "rice",
        "quantity": 1,
        "note": "steamed, for serving",
        "optional": true
      }
    ],
    "steps": [
      "Peel the 4 hard-boiled eggs and pat them completely dry. In a small bowl, gently toss the whole eggs with 0.75 tsp of the turmeric and a pinch of the salt until evenly coated.",
      "Heat 2 tbsp vegetable oil in a nonstick or heavy skillet over medium heat until shimmering. Add the eggs and fry, rolling them every 30 seconds, for 3-5 minutes until the skins turn golden and slightly blistered and dimpled. Lift the eggs out and set aside; they are already fully cooked, so you are only coloring the surface.",
      "Add the remaining 1 tbsp oil to the same pan. Add the chopped onion with a pinch of salt and cook over medium heat for 6-8 minutes, stirring often, until soft and golden at the edges.",
      "Stir in the minced garlic, ginger paste, the remaining 0.75 tsp turmeric, the paprika, and the cayenne if using. Cook for about 1 minute until fragrant, stirring constantly so the spices do not scorch.",
      "Add the chopped tomato and tomato paste. Cook for 4-5 minutes, mashing the tomato down, until it breaks into a thick, jammy, oil-glossy base.",
      "Pour in the water and fish sauce, then add the remaining salt and the pepper. Bring to a gentle simmer and let it cook 3-4 minutes to come together into a loose gravy.",
      "Nestle the fried eggs into the gravy, spooning sauce over them. Simmer gently for 5-7 minutes, turning the eggs once, until the gravy is rich, glossy, and lightly thickened and the eggs are warmed through.",
      "Taste and adjust salt or fish sauce. Garnish with chopped cilantro if you like and serve hot over steamed rice."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Boil your own eggs instead of buying pre-cooked ones to cut the cost almost in half, then peel and dry them well before the turmeric toss.",
      "Fry the eggs in the same pan you build the gravy in. The turmeric-stained oil left behind seasons the onions for free.",
      "A spoon of tomato paste plus one fresh tomato gives the same deep, glossy gravy as a whole can of tomatoes for a fraction of the price."
    ],
    "substitutions": [
      {
        "forIngredientId": "hard-boiled-eggs",
        "swap": "Boil 4 fresh eggs for 10 minutes, then cool, peel, and use them the same way",
        "savings": "Saves about $1.10 over pre-cooked hard-boiled eggs"
      },
      {
        "forIngredientId": "ginger-paste",
        "swap": "Use 1 tsp fresh grated ginger, or a pinch of ground ginger",
        "savings": "Pennies cheaper if you already keep fresh ginger"
      },
      {
        "forIngredientId": "fish-sauce",
        "swap": "Use 1 tsp soy sauce to make it vegetarian-friendly while still adding salty depth",
        "savings": "About the same cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 15,
      "carbs": 14,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Burmese",
    "tags": [
      "egg",
      "burmese",
      "curry",
      "dinner",
      "stovetop",
      "dorm-friendly",
      "gluten-free",
      "turmeric"
    ]
  },
  {
    "id": "egg-huevos-divorciados",
    "name": "Huevos Divorciados (Divorced Eggs)",
    "description": "Two fried eggs perched on lightly crisped corn tortillas and \"divorced\" by a line of warm refried beans: one flooded with bright salsa roja, the other with tangy salsa verde. A beloved Mexican cantina breakfast that teaches you both foundational salsas in one striking, photo-ready plate.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "tortilla",
        "quantity": 4,
        "note": "corn tortillas (keeps it gluten-free)"
      },
      {
        "ingredientId": "refried-beans",
        "quantity": 0.5,
        "note": "warmed; piped in a line down the center"
      },
      {
        "ingredientId": "tomato",
        "quantity": 2,
        "note": "for the salsa roja"
      },
      {
        "ingredientId": "tomatillos",
        "quantity": 4,
        "note": "husked and rinsed, for the salsa verde"
      },
      {
        "ingredientId": "serrano",
        "quantity": 1,
        "note": "for the salsa roja; seed for less heat"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "for the salsa verde; seed for less heat"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "split between the two salsas"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 3,
        "note": "most goes in the salsa verde, save a little to garnish"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3,
        "note": "for lightly frying the tortillas and eggs"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "cotija",
        "quantity": 1,
        "note": "crumbled garnish",
        "optional": true
      }
    ],
    "steps": [
      "Make the salsa roja: in a dry skillet over medium-high heat, char the 2 tomatoes, the serrano, half of the onion, and 1 garlic clove, turning until blistered all over, about 6-8 minutes. Blend until mostly smooth with a pinch of salt and a splash of water; set aside.",
      "Make the salsa verde: add the husked tomatillos, jalapeno, the other half of the onion, and 1 garlic clove to the same skillet and char until the tomatillos soften and slump, about 6-8 minutes. Blend with about 2 tbsp cilantro and a pinch of salt until smooth; keep the two salsas in separate bowls so they stay distinct.",
      "Pour each salsa into a small pot (rinse the skillet between if you reuse it) and simmer over medium heat for 3-4 minutes until slightly thickened and no longer raw-tasting; season with salt to taste. Warm the refried beans in a small pot or microwave until loose and spreadable.",
      "Heat about 1 tbsp vegetable oil in a skillet over medium heat and lightly fry each corn tortilla for 20-30 seconds per side until softened and just crisping at the edges but still foldable. Stack two tortillas on each plate and keep warm.",
      "Wipe the skillet, add the remaining oil over medium heat, and crack in the eggs. Fry sunny-side up, spooning a little hot oil over the whites, for 3-4 minutes until the whites are fully set and opaque. Use fresh, properly refrigerated eggs; the yolks are traditionally left runny, but cook them until firm if serving anyone pregnant, very young, elderly, or immunocompromised.",
      "Place one fried egg on each plate's tortillas. Pipe or spoon a neat line of warm refried beans down the center between the two eggs to keep the salsas from mixing.",
      "Flood one egg generously with the salsa roja and the other with the salsa verde, keeping the bean line as the divider for that signature two-tone look.",
      "Garnish with crumbled cotija and the reserved chopped cilantro. Serve immediately while the eggs are hot."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Charring the tomatoes, tomatillos, and chiles in one dry skillet means zero special equipment and deep flavor from cheap produce.",
      "A can of refried beans does double duty: it's the iconic divider AND a filling protein that stretches the plate for pennies.",
      "Cotija is optional - a sprinkle of any crumbly salty cheese, or even a little salt and lime, keeps costs down without losing the vibe."
    ],
    "substitutions": [
      {
        "forIngredientId": "tomatillos",
        "swap": "Use jarred salsa-verde from the catalog and skip blending the green salsa",
        "savings": "Saves prep time and avoids buying fresh tomatillos"
      },
      {
        "forIngredientId": "cotija",
        "swap": "Crumble feta or queso-fresco instead",
        "savings": "Often already in the fridge"
      },
      {
        "forIngredientId": "serrano",
        "swap": "Use a second jalapeno or a pinch of red-pepper-flakes for the red salsa",
        "savings": "One chili type covers both salsas"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 21,
      "carbs": 38,
      "fat": 21,
      "fiber": 8
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "egg",
      "mexican",
      "breakfast",
      "vegetarian",
      "salsa",
      "spicy",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-huevos-pericos",
    "name": "Huevos Pericos (Colombian Scrambled Eggs)",
    "description": "Soft, pillowy scrambled eggs cooked with sweet scallions and ripe tomato until creamy and bright as a parakeet. This is the gold-standard Colombian breakfast: a handful of ingredients, ready in under 20 minutes, and made to be scooped up with a warm arepa and a mug of hot chocolate.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "white and green parts, finely chopped"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "ripe, seeded and finely diced"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "or substitute butter for a richer flavor"
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
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Crack the 4 eggs into a bowl, add a pinch of the salt and the pepper, and beat with a fork until the yolks and whites are fully blended and slightly frothy. Set aside.",
      "Finely chop the scallions (both white and green parts) and finely dice the tomato, discarding the watery seeds so the eggs don't turn soupy.",
      "Heat the vegetable oil in a nonstick skillet over medium heat until it shimmers. Add the scallions and cook 1-2 minutes, stirring, until softened and fragrant but not browned.",
      "Add the diced tomato and the remaining salt. Cook 3-4 minutes, stirring often, until the tomato breaks down into a soft, jammy mixture and most of the liquid has cooked off.",
      "Lower the heat to medium-low and pour in the beaten eggs. Let them sit undisturbed for about 10 seconds, then gently fold and push the curds with a spatula.",
      "Keep folding slowly, pulling the eggs from the edges to the center so they form soft, large curds. Do not stir constantly or rush the heat.",
      "Cook just until the eggs are fully set but still glossy and moist, about 2-3 minutes total, with no runny or liquid egg remaining for food safety. Pull them off the heat the moment they are set, since they finish cooking from residual heat.",
      "Slide onto plates immediately, top with optional fresh cilantro, and serve hot with an arepa and hot chocolate."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Scallions are one of the cheapest aromatics in the store, and you only need 3 stalks. Save the root ends in a glass of water on your windowsill and they'll regrow for your next batch.",
      "Use whatever tomato is on sale or even a slightly overripe one. Softer tomatoes break down faster and taste sweeter in the pan.",
      "Cook on medium-low and pull the eggs early. Low and slow keeps them creamy, so you don't need to add any butter or milk to make them rich."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "1 tbsp butter for a richer, more traditional flavor",
        "savings": "costs a few cents more but adds creaminess (note: no longer dairy-free)"
      },
      {
        "forIngredientId": "scallion",
        "swap": "half a small white onion, finely chopped",
        "savings": "swap if you have onion on hand and no scallions"
      },
      {
        "forIngredientId": "tomato",
        "swap": "2-3 tbsp canned diced or crushed tomatoes, drained well",
        "savings": "uses up a pantry can and works year-round"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 14,
      "carbs": 6,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Colombian",
    "tags": [
      "egg",
      "colombian",
      "breakfast",
      "scrambled-eggs",
      "quick",
      "budget",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "egg-kuku-sabzi-persian-herb-frittata",
    "name": "Kuku Sabzi (Persian Herb Frittata with Walnuts & Barberries)",
    "description": "A Nowruz classic that's basically a frittata gone green-on-green: way more fresh herbs than egg, set into emerald wedges and jeweled with tart barberries and crunchy walnuts. Vibrant, packable, and just as good cold the next day tucked into warm flatbread.",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 12
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 12
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 6
      },
      {
        "ingredientId": "spinach",
        "quantity": 2
      },
      {
        "ingredientId": "scallion",
        "quantity": 4
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5
      },
      {
        "ingredientId": "barberries",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "turmeric",
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
        "ingredientId": "olive-oil",
        "quantity": 3
      },
      {
        "ingredientId": "flatbread",
        "quantity": 2,
        "optional": true,
        "note": "for serving as a sandwich"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5,
        "optional": true,
        "note": "dollop on the side"
      }
    ],
    "steps": [
      "Finely chop the parsley, cilantro, dill, and scallions, and roughly chop the spinach. Mince the garlic. The pile of greens should look almost too big; that's correct for kuku sabzi. Pat everything dry so the eggs set properly.",
      "If using barberries, rinse them in a small bowl of water to remove grit, then drain well; soak in fresh water 5 minutes if very dry, and pat dry. Roughly chop the walnuts.",
      "In a large bowl, whisk the eggs with the baking powder, turmeric, salt, and pepper until uniform and slightly frothy, about 30 seconds. The baking powder keeps the kuku light.",
      "Fold the chopped herbs, spinach, scallions, garlic, walnuts, and most of the barberries into the eggs until everything is evenly coated. The mixture will be very thick and green.",
      "Heat 2 tbsp olive oil in a 9-10 inch nonstick skillet over medium-low heat. Add the herb-egg mixture and spread it flat with a spatula. Cover and cook undisturbed 12-15 minutes, until the bottom is deep golden and the top is mostly set but still slightly soft in the center.",
      "To flip: slide the kuku onto a plate, drizzle the remaining 1 tbsp oil into the pan, then invert the pan over the plate and flip the kuku back in. Cook uncovered 5-7 more minutes, until fully set with no runny egg in the center (a knife inserted in the middle should come out clean and the center reads 160F / 71C). For an easier finish, instead transfer an oven-safe skillet to a 375F oven for 10-12 minutes until set.",
      "Slide onto a board and rest 5 minutes, then cut into 4 wedges. Scatter the reserved barberries on top.",
      "Serve warm or at room temperature, with warm flatbread and a dollop of Greek yogurt. Leftovers keep 3 days refrigerated and make a great cold sandwich."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ],
    "cheapTips": [
      "Buy one big bunch each of parsley, cilantro, and dill instead of clamshell herbs - you'll use the whole bunch here and it's a fraction of the cost.",
      "Frozen spinach (thawed and squeezed very dry) works perfectly in place of fresh and is cheaper; just reduce any added moisture.",
      "Barberries are a small splurge but one bag lasts months - skip them or swap in dried cranberries chopped small with a squeeze of lemon for the same tart pop."
    ],
    "substitutions": [
      {
        "forIngredientId": "barberries",
        "swap": "Chopped dried cranberries plus a squeeze of lemon for tartness",
        "savings": "Saves about $0.50 and uses a pantry staple"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Chopped almonds or pumpkin seeds",
        "savings": "Pumpkin seeds run a bit cheaper per serving"
      },
      {
        "forIngredientId": "spinach",
        "swap": "Thawed, squeezed frozen spinach",
        "savings": "Saves roughly $0.55 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 235,
      "protein": 13,
      "carbs": 8,
      "fat": 17,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-green-100",
    "cuisine": "Persian",
    "tags": [
      "egg",
      "persian",
      "frittata",
      "herbs",
      "nowruz",
      "vegetarian",
      "meal-prep",
      "packable",
      "gluten-free"
    ]
  },
  {
    "id": "egg-green-shakshuka",
    "name": "Green Shakshuka (Eggs Poached in Greens & Herbs)",
    "description": "A bright, herby twist on shakshuka where eggs poach in a tangle of garlicky sauteed spinach, chard and zucchini instead of tomato. Crumbled feta, a cool swoop of yogurt and a crunchy dukkah finish turn a pile of wilting fridge greens into a real dinner.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 3
      },
      {
        "ingredientId": "zucchini",
        "quantity": 1
      },
      {
        "ingredientId": "spinach",
        "quantity": 3
      },
      {
        "ingredientId": "swiss-chard",
        "quantity": 2
      },
      {
        "ingredientId": "kale",
        "quantity": 1
      },
      {
        "ingredientId": "cumin",
        "quantity": 1
      },
      {
        "ingredientId": "coriander",
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
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "feta",
        "quantity": 1
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 2
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true
      },
      {
        "ingredientId": "sumac",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "dukkah",
        "quantity": 2,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "bread",
        "quantity": 4,
        "optional": true,
        "note": "for serving; omit or use GF bread to keep it gluten-free"
      }
    ],
    "steps": [
      "Warm the olive oil in a wide skillet over medium heat. Add the diced onion and a pinch of salt; cook 5-6 minutes, stirring, until soft and translucent.",
      "Add the minced garlic and the diced zucchini. Cook 3-4 minutes, until the garlic smells sweet and the zucchini is just starting to soften.",
      "Stir in the cumin and coriander and toast 30 seconds until fragrant. Add the chopped spinach, chard and kale in handfuls, stirring after each, until everything wilts into a soft green base, about 4-5 minutes. Season with the remaining salt and the pepper.",
      "Stir in half the dill (and cilantro, if using). Spread the greens into an even layer, then use a spoon to make 4 shallow wells, pushing the greens aside down to the pan so the eggs sit against the hot surface.",
      "Crack one egg into each well and season each with a small pinch of salt.",
      "Cover the pan and reduce the heat to medium-low. Cook 6-9 minutes, until the whites are fully set and opaque with runny yolks. For fully set yolks (food-safe for anyone avoiding runny eggs - pregnant people, young children, or anyone immunocompromised), cook 2-3 minutes longer until the yolks firm up.",
      "Take the pan off the heat. Crumble the feta over the top and scatter on the rest of the dill and cilantro.",
      "Dollop the Greek yogurt around the eggs, then finish with a sprinkle of sumac and a generous shower of dukkah. Serve straight from the pan with warm or toasted bread for scooping."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 18,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Use whatever leafy greens are wilting in your fridge - spinach, chard, kale, even leafy carrot or radish tops all work. The base is forgiving, so swap freely with what you have.",
      "Frozen spinach (thawed and squeezed dry) is cheaper than fresh and melts right into the base - sub it in for some of the fresh greens to cut cost.",
      "No dukkah? Toast a spoonful of sesame seeds or chopped nuts with a pinch of cumin instead - same crunchy, nutty finish for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "swiss-chard",
        "swap": "More spinach or kale, or thawed frozen spinach",
        "savings": "Frozen spinach is about half the price of fresh chard"
      },
      {
        "forIngredientId": "feta",
        "swap": "Crumbled goat cheese or a handful of grated parmesan",
        "savings": "Use whatever cheese you already have to avoid a special trip"
      },
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Plain yogurt or sour cream",
        "savings": "Plain yogurt costs less than half of Greek per cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 24,
      "carbs": 30,
      "fat": 23,
      "fiber": 7
    },
    "emoji": "🍳",
    "accentColor": "bg-green-100",
    "cuisine": "Middle Eastern",
    "tags": [
      "egg",
      "middle-eastern",
      "shakshuka",
      "vegetarian",
      "greens",
      "one-pan",
      "dinner",
      "high-protein"
    ]
  },
  {
    "id": "egg-sucuklu-yumurta",
    "name": "Sucuklu Yumurta (Turkish Sucuk & Eggs)",
    "description": "Spicy, garlicky Turkish sucuk sausage crisps in its own paprika-stained fat, then eggs fry right in that sizzling butter for a deeply savory 10-minute breakfast. Serve with crusty bread, tomatoes, and olives — the kind of dish that converts people the first bite.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "chorizo",
        "quantity": 1,
        "note": "stand-in for Turkish sucuk; slice into 1/4-inch coins"
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.5,
        "note": "boosts the classic red sucuk color and warmth"
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
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "for extra heat"
      },
      {
        "ingredientId": "bread",
        "quantity": 2,
        "note": "crusty bread or simit, for serving"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "sliced, on the side"
      },
      {
        "ingredientId": "green-olives",
        "quantity": 0.1,
        "optional": true,
        "note": "a small handful, on the side"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "Slice the sucuk (or chorizo) into 1/4-inch coins. Melt the butter in a skillet over medium heat until it foams and smells nutty.",
      "Lay the sucuk coins in a single layer and cook 1-2 minutes per side, until the edges curl and crisp and the fat renders into the butter, turning it a deep paprika-red. Cook the sausage fully through to no pink in the center.",
      "Stir the paprika (and red pepper flakes if using) into the rendered fat for about 15 seconds to bloom the spice — don't let it scorch or it turns bitter.",
      "Nudge the sucuk to the edges of the pan. Crack the eggs directly into the spiced fat, keeping the yolks intact. Season the whites lightly with salt and pepper.",
      "Cover the pan and cook over medium-low for 5-7 minutes: pull at 5 for jammy yolks, or go to 7 for fully set yolks. Either way the whites must be fully opaque and firm with no clear, jiggly spots.",
      "Meanwhile, toast or warm the bread. Slide the eggs and sucuk onto plates and scatter with chopped parsley.",
      "Serve hot, straight from the skillet if you like, with sliced tomato and olives on the side. Scoop up the spiced butter and yolk with the bread. Best eaten immediately."
    ],
    "totalTimeMinutes": 10,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a whole sucuk or chorizo and freeze it; slice off just what you need for one breakfast at a time.",
      "Skip the garnishes — the dish is complete with just eggs, sausage, and bread, so add tomato and olives only if you already have them.",
      "Use the rendered spiced fat instead of extra oil; it does double duty as the cooking fat and the sauce, so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "chorizo",
        "swap": "Spanish chorizo, kielbasa, smoked sausage, or even pepperoni — any firm cured sausage that crisps and renders fat",
        "savings": "pepperoni runs a bit cheaper per serving"
      },
      {
        "forIngredientId": "butter",
        "swap": "olive oil or ghee if you're out of butter — the sausage renders most of the fat anyway",
        "savings": "vegetable oil is the cheapest option"
      },
      {
        "forIngredientId": "bread",
        "swap": "pita, simit, or any leftover bread you have for scooping",
        "savings": "use up bread you already own instead of buying simit"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 27,
      "carbs": 16,
      "fat": 28,
      "fiber": 1
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Turkish",
    "tags": [
      "egg",
      "turkish",
      "breakfast",
      "high-protein",
      "sausage",
      "quick",
      "skillet",
      "breakfast-for-dinner"
    ]
  },
  {
    "id": "egg-ful-medames-soft-egg-cumin",
    "name": "Ful Medames with Soft Egg & Cumin",
    "description": "Egypt's national breakfast: creamy fava beans smashed warm with cumin, garlic, lemon and a generous pour of olive oil, crowned with a jammy egg and scooped up with warm pita. It's ultra-cheap, packed with protein and fiber, and genuinely keeps you full all morning.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "fava-beans",
        "quantity": 1,
        "note": "1 can, drained; reserve a splash of liquid"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one per serving"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "finely minced"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1.5
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "plus extra to drizzle"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juiced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "chopped, for topping",
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "note": "chopped, for garnish",
        "optional": true
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "thinly sliced, for heat",
        "optional": true
      },
      {
        "ingredientId": "pita",
        "quantity": 2,
        "note": "for scooping",
        "optional": true
      }
    ],
    "steps": [
      "Drain the can of fava beans, reserving a few tablespoons of the liquid. Tip the beans into a small pot with about 1/4 cup water (or the reserved liquid) and set over medium heat. Warm 5-6 minutes until steaming and heated through, stirring occasionally.",
      "Lower the heat and mash about half the beans against the side of the pot with a fork, leaving the rest whole for texture. Stir in the minced garlic, cumin and salt and cook 1-2 minutes more until fragrant, loosening with a splash more water if it looks dry.",
      "Take the pot off the heat and stir in the lemon juice and 1 tbsp of the olive oil. Taste and adjust salt and lemon. Divide the warm beans between two shallow bowls.",
      "For jammy soft-boiled eggs: bring a small pot of water to a gentle boil, lower the eggs in with a spoon and cook 6.5-7 minutes for set whites and a runny-to-jammy yolk. Transfer to cold water for 1 minute, then peel and halve.",
      "To fry the eggs instead: heat the remaining 1 tbsp olive oil in a nonstick pan over medium, crack in the eggs and cook 2-3 minutes until the whites are fully set and opaque, leaving the yolks soft. For firm yolks, cover the pan and cook 1-2 minutes more.",
      "Top each bowl of beans with an egg. Scatter over the chopped tomato, parsley and sliced jalapeno if using.",
      "Finish with a generous drizzle of olive oil and an extra pinch of cumin. Serve hot with warm pita torn for scooping, and eat right away while the egg is warm."
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
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Canned fava beans are the cheapest fast track here - one can feeds two people for breakfast, so buy a couple when they're on sale and keep them in the cupboard.",
      "Skip the fresh lemon and use a tablespoon of bottled lemon juice instead; it keeps for ages and you won't waste half a lemon.",
      "The tomato, parsley and jalapeno are all optional garnishes - the dish is fully satisfying with just beans, cumin, garlic and a soft egg if you're stretching your budget."
    ],
    "substitutions": [
      {
        "forIngredientId": "fava-beans",
        "swap": "A can of chickpeas mashed the same way - not traditional, but cheaper and just as filling.",
        "savings": "~$0.90/can"
      },
      {
        "forIngredientId": "lemon",
        "swap": "1 tbsp bottled lemon juice or a splash of vinegar for the same bright acidity.",
        "savings": "~$0.55"
      },
      {
        "forIngredientId": "pita",
        "swap": "Toasted bread slices or a tortilla to scoop with instead of pita.",
        "savings": "~$0.30 each"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 19,
      "carbs": 38,
      "fat": 16,
      "fiber": 11
    },
    "emoji": "🫘",
    "accentColor": "bg-amber-100",
    "cuisine": "Egyptian",
    "tags": [
      "egg",
      "egyptian",
      "breakfast",
      "vegetarian",
      "high-protein",
      "budget",
      "fava-beans",
      "15-minute"
    ]
  },
  {
    "id": "egg-ojja-merguez",
    "name": "Ojja Merguez (Tunisian Eggs Poached in Spicy Tomato & Merguez)",
    "description": "Tunisia's fiery cousin to shakshuka: a smoky harissa-and-caraway tomato sauce loaded with spicy merguez sausage, with eggs poached right into the simmer. Bold, saucy, and built for sharing straight from the pan with crusty bread.",
    "mealType": "dinner",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 4
      },
      {
        "ingredientId": "red-bell-pepper",
        "quantity": 1
      },
      {
        "ingredientId": "merguez",
        "quantity": 2
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 2
      },
      {
        "ingredientId": "harissa",
        "quantity": 1,
        "note": "use 2 tbsp if you like it really fiery"
      },
      {
        "ingredientId": "caraway-seeds",
        "quantity": 1,
        "note": "crush them so they release that signature Tunisian aroma"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1
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
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "garnish; parsley works too"
      },
      {
        "ingredientId": "bread",
        "quantity": 6,
        "note": "for mopping the sauce"
      }
    ],
    "steps": [
      "Warm the olive oil in a large skillet over medium heat. Add the diced onion with a pinch of salt and cook 5-6 minutes, stirring often, until soft and translucent but not browned.",
      "Stir in the minced garlic, diced red bell pepper, crushed caraway seeds, cumin and paprika. Cook 2-3 minutes until fragrant and the pepper starts to soften.",
      "Squeeze the merguez out of its casings (or slice into coins) and add to the pan. Cook 5-6 minutes, breaking it up, until browned and fully cooked through with no pink remaining.",
      "Stir in the tomato paste and harissa and cook 1 minute to deepen, then pour in the crushed tomatoes plus a splash of water (about 1/3 cup). Season with the salt and pepper.",
      "Lower to a gentle simmer and cook uncovered 12-15 minutes, stirring occasionally, until the sauce thickens, darkens, and oil begins to surface. Taste and adjust salt and harissa.",
      "Use a spoon to make 6 shallow wells in the sauce. Crack one egg into each well and season the eggs with a little salt and pepper.",
      "Cover the pan and cook over low-medium heat 6-9 minutes, until the whites are fully set and opaque. For runny yolks pull it at the lower end; for fully set yolks cook a few minutes longer.",
      "Kill the heat, scatter the chopped cilantro over the top, and bring the skillet to the table. Serve hot with crusty bread to scoop up the eggs and sauce."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "One can of crushed tomatoes is the cheap backbone here - it stretches two servings of merguez into a full pan that feeds three with bread.",
      "Skip fresh herbs if money's tight; a teaspoon of dried oregano or parsley stirred in at the end still adds a green lift for pennies.",
      "Buy day-old bread from the discount rack - it's actually better for mopping sauce, and you can toast it back to life in the same warm pan."
    ],
    "substitutions": [
      {
        "forIngredientId": "merguez",
        "swap": "Use chorizo or hot Italian sausage - you lose the lamb flavor but keep the spice and fat",
        "savings": "Chorizo runs cheaper per serving and is easier to find"
      },
      {
        "forIngredientId": "harissa",
        "swap": "Mix 1 tbsp tomato paste with 1/2 tsp cayenne and a pinch of cumin for a quick stand-in",
        "savings": "Saves buying a specialty jar"
      },
      {
        "forIngredientId": "red-bell-pepper",
        "swap": "Any color bell pepper, or a jarred roasted red pepper, chopped",
        "savings": "Green bell peppers are usually the cheapest"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 24,
      "carbs": 32,
      "fat": 28,
      "fiber": 6
    },
    "emoji": "🍳",
    "accentColor": "bg-red-100",
    "cuisine": "Tunisian",
    "tags": [
      "egg",
      "tunisian",
      "north-african",
      "spicy",
      "one-skillet",
      "dinner",
      "shakshuka-style",
      "merguez",
      "high-protein"
    ]
  },
  {
    "id": "egg-bacon-sriracha-deviled-eggs",
    "name": "Bacon-Sriracha Deviled Eggs",
    "description": "Creamy mustard-mayo yolk filling spiked with sriracha and piled high with crispy bacon and fresh chives. The ultimate make-ahead party snack: cheap, addictive, and gone in minutes, with a splash of pickle relish in the filling for tang.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3
      },
      {
        "ingredientId": "dijon",
        "quantity": 2
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2
      },
      {
        "ingredientId": "dill-relish",
        "quantity": 1,
        "note": "or a splash of pickle juice from the jar"
      },
      {
        "ingredientId": "bacon",
        "quantity": 3
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste, plus a pinch for the boiling water"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "finely chopped, for garnish"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "optional": true,
        "note": "light dusting on top, for color"
      }
    ],
    "steps": [
      "Place the 6 eggs in a single layer in a saucepan and cover with cold water by about an inch. Bring to a rolling boil over high heat, then cover, remove from the heat, and let sit 12 minutes for fully set yolks (deviled eggs should be cooked through, never runny).",
      "While the eggs cook, lay the 3 bacon slices in a cold skillet and cook over medium heat, flipping occasionally, 7-9 minutes until deeply crisp with no pink remaining. Drain on a paper towel, then chop finely once cool.",
      "Transfer the eggs to a bowl of ice water and chill at least 5 minutes; the cold shock stops the cooking and makes peeling easy. Peel under a thin stream of cool running water.",
      "Slice each egg in half lengthwise. Pop the yolks into a bowl and arrange the empty whites cut-side up on a plate.",
      "Mash the yolks with a fork until crumbly, then stir in the mayonnaise, Dijon, sriracha, dill relish, and a pinch of salt until completely smooth and creamy. Taste and adjust sriracha or salt.",
      "Spoon the filling back into the whites, or snip the corner off a sandwich bag and pipe it in, mounding it slightly above the rim.",
      "Top each egg with a generous pinch of the crispy bacon, a sprinkle of chopped chives, and a light dusting of paprika.",
      "Serve right away, or cover and chill up to 24 hours; keep refrigerated until serving since cooked eggs and mayo spoil quickly at room temperature."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Boil all 12 eggs from the carton at once, double the filling, and bring two batches for nearly the same effort.",
      "Bacon is the priciest topping. Save the rendered fat to cook eggs later in the week, or stretch one extra slice across two batches.",
      "Skip the fresh chives if pinching pennies; a pinch of scallion greens (under 20 cents a stalk) gives the same fresh oniony bite for far less."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "turkey bacon, crisped the same way",
        "savings": "Saves about $0.40 and cuts the fat"
      },
      {
        "forIngredientId": "dijon",
        "swap": "yellow mustard",
        "savings": "Saves a few cents and is likely already in your fridge"
      },
      {
        "forIngredientId": "chives",
        "swap": "thinly sliced scallion greens",
        "savings": "Saves over $2 versus a fresh chive bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 175,
      "protein": 11,
      "carbs": 1,
      "fat": 14,
      "fiber": 0
    },
    "emoji": "🥚",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "deviled-eggs",
      "appetizer",
      "snack",
      "party",
      "bacon",
      "spicy",
      "make-ahead",
      "high-protein",
      "gluten-free",
      "no-oven"
    ]
  },
  {
    "id": "egg-creamy-egg-salad",
    "name": "Creamy Egg Salad",
    "description": "Velvety, deli-style egg salad where the yolks are mashed smooth with mayo and Dijon before the chopped whites fold in, so every bite is ultra-creamy with little tender pockets. Pile it on toast, scoop it into lettuce cups, or scrape it onto crackers. It keeps for days, quietly becoming lunch, snack, and appetizer all week.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 3
      },
      {
        "ingredientId": "dijon",
        "quantity": 1
      },
      {
        "ingredientId": "celery",
        "quantity": 1
      },
      {
        "ingredientId": "sweet-pickle-relish",
        "quantity": 1
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1
      },
      {
        "ingredientId": "worcestershire",
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
        "ingredientId": "bread",
        "quantity": 4
      },
      {
        "ingredientId": "lettuce",
        "quantity": 1,
        "optional": true,
        "note": "just a couple leaves for the sandwich or for lettuce scoops"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "optional": true,
        "note": "dusted on top to serve"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped, for garnish"
      }
    ],
    "steps": [
      "Place the 4 eggs in a small pot and cover with cold water by about an inch. Bring to a rolling boil over high heat, then immediately cover, turn off the heat, and let stand 11-12 minutes for fully set yolks (egg salad needs the yolks cooked through, not runny).",
      "While the eggs cook, fill a bowl with cold water and ice. Transfer the eggs straight into the ice bath and let them cool for at least 5 minutes; this stops the cooking and makes peeling far easier.",
      "Tap each egg all over, peel under a thin stream of running water, and pat dry. Halve them and pop the yolks into a medium bowl, setting the whites aside on the cutting board.",
      "Mash the yolks with the mayonnaise, Dijon, lemon juice, and Worcestershire until completely smooth and creamy with no lumps; this paste is the secret to the silky texture.",
      "Finely chop the egg whites and the celery stalk. Fold them into the yolk mixture along with the sweet pickle relish, stirring gently so you keep some texture and don't turn it to mush.",
      "Season with the salt and pepper, then taste and adjust; stir in a little more mayo if you want it looser. For best flavor, chill 20-30 minutes, though it's ready to eat now.",
      "Serve right away: scoop onto toasted bread with lettuce for a sandwich, into lettuce leaves for low-carb scoops, or alongside crackers. Dust with paprika and snipped chives if using.",
      "Store leftovers in an airtight container in the fridge for up to 5 days; give it a quick stir before each serving."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Buy eggs by the dozen and boil a big batch at once; peeled hard-boiled eggs keep about a week and make this even faster next time.",
      "Skip bottled lemon and squeeze half a fresh lemon if you have one, or use a splash of any vinegar from your shelf.",
      "Celery and relish are optional flavor boosters; if your cart is bare, plain yolks-mayo-mustard-salt-pepper still makes a great sandwich for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "mayonnaise",
        "swap": "Swap in plain Greek yogurt for a tangier, higher-protein, lighter version (use about the same amount).",
        "savings": "Lighter and adds protein; similar cost"
      },
      {
        "forIngredientId": "sweet-pickle-relish",
        "swap": "Use dill-relish for a more savory, less sweet salad, or finely chop a pickle you already have.",
        "savings": "Same price, uses what you have"
      },
      {
        "forIngredientId": "dijon",
        "swap": "Yellow mustard works fine and is cheaper if that's what's in the dorm fridge.",
        "savings": "Cheaper per tsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 19,
      "carbs": 30,
      "fat": 25,
      "fiber": 3
    },
    "emoji": "🥚",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "sandwich",
      "lunch",
      "meal-prep",
      "no-cook-assembly",
      "high-protein",
      "vegetarian",
      "dorm-friendly",
      "make-ahead"
    ]
  },
  {
    "id": "egg-air-fryer-scotch-eggs",
    "name": "Air Fryer Scotch Eggs",
    "description": "Jammy boiled eggs hugged in seasoned sausage and shatteringly crisp panko, air-fried instead of deep-fried so they turn golden all over with none of the greasy mess. The ultimate British pub snack, easy enough for a dorm and impressive enough to share.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "4 to boil and wrap, 2 beaten for the egg wash"
      },
      {
        "ingredientId": "sausage",
        "quantity": 2,
        "note": "casings removed, divided into 4 portions"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "for dredging"
      },
      {
        "ingredientId": "panko",
        "quantity": 1,
        "note": "for the crunchy coating"
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
        "ingredientId": "garlic-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.5
      },
      {
        "ingredientId": "thyme",
        "quantity": 0.5,
        "note": "mixed into the sausage"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "to crisp the coating"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "mustard",
        "quantity": 4,
        "optional": true,
        "note": "for dipping"
      }
    ],
    "steps": [
      "Bring a small pot of water to a gentle boil. Lower in 4 eggs and cook 6.5 minutes for a jammy yolk or 9-10 minutes for fully set. Immediately transfer to a bowl of ice water for 5 minutes, then peel carefully and pat completely dry.",
      "In a bowl, mix the sausage with the salt, pepper, garlic-powder, paprika, and thyme until just combined, then divide into 4 equal portions.",
      "Flatten one portion into a thin disc on a square of plastic wrap or a damp palm. Set a peeled egg in the center and wrap the sausage fully around it, pinching all seams closed so no egg shows. Repeat for all 4.",
      "Set up three shallow bowls: flour in the first, the 2 remaining eggs beaten in the second, panko in the third. Roll each wrapped egg in flour, then egg wash, then press firmly into panko to coat all over.",
      "Mist the air fryer basket with cooking spray. Arrange the eggs so they don't touch, then spray the tops generously so the panko crisps and browns evenly.",
      "Air-fry at 390F for 14-18 minutes, flipping gently halfway and re-spraying any pale spots, until the coating is deep golden and the sausage reaches 165F internal with no pink.",
      "Rest 3-5 minutes so the juices settle, then halve to reveal the center. Garnish with chopped parsley and serve warm with mustard for dipping."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "air-fryer",
      "stovetop"
    ],
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a roll of bulk breakfast sausage instead of links: it's cheaper per ounce and has no casings to strip.",
      "Make your own panko by toasting and crushing a couple of stale bread slices in the oven or air fryer.",
      "Boil and wrap a big batch on the weekend, store them coated but uncooked in the fridge, and air-fry fresh when you want a hot snack."
    ],
    "substitutions": [
      {
        "forIngredientId": "sausage",
        "swap": "Ground pork or ground turkey mixed with extra paprika, salt, and pepper to mimic seasoned sausage",
        "savings": "Often cheaper per serving than pre-seasoned sausage"
      },
      {
        "forIngredientId": "panko",
        "swap": "Regular breadcrumbs or crushed crackers",
        "savings": "Saves about $0.05 per cup"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Quail eggs for bite-sized cocktail-style Scotch eggs",
        "savings": "Fun party version, no real savings"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 19,
      "carbs": 14,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "egg",
      "british",
      "snack",
      "air-fryer",
      "high-protein",
      "pub-food",
      "meal-prep"
    ]
  },
  {
    "id": "egg-grated-egg-avocado-toast",
    "name": "Viral Grated-Egg Avocado Toast",
    "description": "The TikTok trick that finally fixed avocado toast: a cold hard-boiled egg grated into fluffy, pillowy clouds that melt into the smashed avocado instead of sliding off. Crunchy sourdough, everything seasoning, a squeeze of lemon, and a hit of hot sauce make it five-minute, dorm-friendly perfection.",
    "mealType": "snack",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "hard-boiled-eggs",
        "quantity": 1,
        "note": "cold from the fridge so it grates into fluffy strands"
      },
      {
        "ingredientId": "sourdough",
        "quantity": 1,
        "note": "thick slice"
      },
      {
        "ingredientId": "avocado",
        "quantity": 0.5,
        "note": "ripe, gives easily to a gentle squeeze"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.25,
        "note": "for a squeeze of juice"
      },
      {
        "ingredientId": "everything-bagel",
        "quantity": 1
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.5,
        "note": "drizzle to finish",
        "optional": true
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "note": "for extra heat",
        "optional": true
      }
    ],
    "steps": [
      "Hard-boil ahead if needed: place 1 egg in a small pot, cover with cold water by an inch, and bring to a rolling boil over high heat. Cover, cut the heat, and let sit 11-12 minutes for a fully set, food-safe yolk. Drain, plunge into ice water for a minute, then peel and chill in the fridge until cold.",
      "Toast 1 thick slice of sourdough in a toaster or under a broiler until deeply golden and crisp at the edges, 2-3 minutes. A sturdy, crunchy base keeps the toppings from going soggy.",
      "Halve the avocado, scoop half onto the warm toast, and smash it on with a fork, spreading it edge to edge so every bite is covered.",
      "Squeeze about a quarter lemon over the avocado and season with a pinch of salt and pepper; the acid keeps it bright green and seasons the base.",
      "Hold the cold hard-boiled egg over the toast and grate it on the large holes of a box grater, letting the fluffy strands fall in an even, pillowy layer across the whole surface.",
      "Shower with everything bagel seasoning and a few dashes of hot sauce. If you want extra heat and richness, add red pepper flakes and a thin drizzle of olive oil.",
      "Eat right away while the toast is still crisp and the cold, pillowy egg contrasts the warm avocado."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 2,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Boil a whole carton of eggs at once and keep them peeled in the fridge so this snack comes together in two minutes flat all week.",
      "Buy avocados firm and let them ripen on the counter, then refrigerate once soft to stop them browning and stretch them for days.",
      "Skip a store-bought everything blend and shake your own from sesame seeds, poppy seeds, dried garlic, dried onion, and flaky salt you already have."
    ],
    "substitutions": [
      {
        "forIngredientId": "hard-boiled-eggs",
        "swap": "Boil a regular egg yourself (egg, ~12 min) and chill it before grating",
        "savings": "Saves about $0.28 per egg vs pre-boiled"
      },
      {
        "forIngredientId": "sourdough",
        "swap": "Any sturdy sandwich bread, toasted extra-crisp",
        "savings": "Saves about $0.22 per slice"
      },
      {
        "forIngredientId": "everything-bagel",
        "swap": "A pinch of sesame seeds plus salt and garlic powder",
        "savings": "Pennies cheaper from pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 350,
      "protein": 12,
      "carbs": 27,
      "fat": 22,
      "fiber": 8
    },
    "emoji": "🥑",
    "accentColor": "bg-green-100",
    "cuisine": "American / fusion",
    "tags": [
      "egg",
      "american",
      "avocado-toast",
      "tiktok-viral",
      "no-cook-friendly",
      "5-minute",
      "vegetarian",
      "snack"
    ]
  },
  {
    "id": "egg-fluffy-souffle-omelette",
    "name": "Fluffy Souffle Omelette (Cloud Omelette)",
    "description": "A jiggly, melt-in-your-mouth omelette that rises into a golden cloud thanks to whipped egg whites, all from a few eggs and a nonstick pan. It looks like a restaurant flex but is dorm-easy and costs pennies.",
    "mealType": "breakfast",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "for greasing the pan"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.125,
        "note": "season the yolks"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.125,
        "optional": true,
        "note": "helps the whites whip to stiff, stable peaks"
      },
      {
        "ingredientId": "cheese",
        "quantity": 1,
        "optional": true,
        "note": "melt inside before folding"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped, to garnish"
      }
    ],
    "steps": [
      "Crack 3 eggs and carefully separate the yolks from the whites into two clean, dry bowls. Even a speck of yolk in the whites will keep them from whipping, so take your time.",
      "Season the yolks with the salt and pepper and whisk until smooth and slightly pale; set aside.",
      "Add the optional cream of tartar to the whites, then whip with a hand mixer or balloon whisk for 2-3 minutes until stiff, glossy peaks form and the foam holds its shape when you lift the beater.",
      "Add the yolks to the whites and fold gently with a spatula, scooping from the bottom up, until just combined. Stop while a few streaks remain so you keep the air; do not stir.",
      "Melt the butter in a nonstick pan over low heat and swirl to coat. Low heat is key, it should not sizzle hard. Pour in the airy batter and gently smooth the top into a mound.",
      "Cover with a lid and cook undisturbed 7-9 minutes. The omelette will puff and the bottom will turn golden; the top is done when it looks just barely set and no longer wet or glossy. If using cheese, sprinkle it over one half during the last 2 minutes to melt.",
      "Slide a spatula under one side, fold the omelette in half over itself, then slide it onto a plate. Garnish with snipped chives and eat right away while it is hot and jiggly; the eggs should be fully set and not runny."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 6,
    "cookTimeMinutes": 9,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "You only need eggs, butter and salt for the full effect, skip every optional add-in and this is one of the cheapest hot breakfasts you can make.",
      "No hand mixer? A regular whisk and 3-4 minutes of arm work gets the whites to stiff peaks for free.",
      "Save the leftover butter wrapper to grease the pan instead of using a fresh tablespoon, the thin film is all a nonstick pan needs."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "A quick spritz of cooking spray or a teaspoon of any neutral oil greases the nonstick pan just as well.",
        "savings": "Saves about $0.15 per omelette"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "A few drops of lemon juice or white vinegar stabilize the whites the same way.",
        "savings": "Skip buying a jar you may not use"
      },
      {
        "forIngredientId": "chives",
        "swap": "Snipped scallion greens or a pinch of dried herbs add color and bite for less.",
        "savings": "Saves about $2 versus a fresh chive bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 20,
      "carbs": 1,
      "fat": 26,
      "fiber": 0
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "French-Japanese",
    "tags": [
      "egg",
      "french-japanese",
      "breakfast",
      "souffle",
      "omelette",
      "fluffy",
      "high-protein",
      "vegetarian",
      "quick",
      "budget",
      "dorm-friendly"
    ]
  },
  {
    "id": "egg-tornado-omurice",
    "name": "Tornado Omurice (Swirled Egg over Ketchup Fried Rice)",
    "description": "A glossy, chopstick-swirled egg tornado draped over savory-sweet ketchup fried rice. It's the viral egg trick that turns a humble bowl of pantry rice into pure dinner theater, and nailing the swirl feels like unlocking a brand-new kitchen skill.",
    "mealType": "dinner",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "cooked and cooled; day-old rice works best"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "fresh or pasteurized, for the tornado swirl"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 2,
        "note": "in the fried rice"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1.5,
        "note": "split between rice and egg pan"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "for richer fried rice"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.25,
        "note": "finely diced"
      },
      {
        "ingredientId": "carrot",
        "quantity": 0.5,
        "note": "finely diced"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.25
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
        "quantity": 0.5,
        "note": "seasons the rice",
        "optional": true
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1,
        "note": "mixed with ketchup for the drizzle",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "sliced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Finely dice 1/4 onion and 1/2 carrot. Heat 1 tbsp vegetable oil and 1 tbsp butter in a nonstick pan over medium-high heat, then saute the onion and carrot for 2-3 minutes until softened and the onion is translucent.",
      "Add 1.5 cups cooled cooked rice and 1/4 cup frozen peas. Break up any clumps and stir-fry for 2-3 minutes until the rice is heated through and steaming.",
      "Push the rice to one side, add 2 tbsp ketchup (and 1/2 tbsp soy sauce, if using) to the bare pan and let it sizzle for 20-30 seconds to deepen the flavor, then toss to coat every grain. Season with 1/2 tsp salt and 1/4 tsp pepper, mound onto a plate and shape into a neat oval. Wipe the pan clean.",
      "Crack 3 eggs into a bowl, add a pinch of salt, and beat thoroughly until completely uniform with no streaks of white — a smooth swirl needs fully blended eggs. Use fresh or pasteurized eggs, since the center is served soft.",
      "Set the clean nonstick pan over medium heat and add the remaining 1/2 tbsp vegetable oil, swirling to coat. When the oil shimmers, pour in all the beaten egg at once.",
      "As the edges begin to set but the center is still glossy and liquid (about 90% cooked, roughly 30-45 seconds), lower the heat. Plant two chopsticks straight down into the center and twirl steadily in one direction, gathering the loose egg into a spiraling tornado.",
      "Once the swirl holds its shape and the egg is set on the outside but still soft in the very center, slide it off the pan onto the rice mound. For a fully set egg with no soft center, keep twirling over low heat an extra 20-30 seconds until no liquid egg remains before plating.",
      "Stir 1 tsp sriracha into a little extra ketchup and drizzle over the tornado in a zigzag. Scatter sliced scallion on top and serve immediately while hot."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 12,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Use day-old leftover rice from a previous dinner. It's cheaper than cooking fresh, and the drier grains fry up far better without turning mushy.",
      "Frozen peas and carrots from a single bag of mixed veg cost pennies per serving and keep for months. Skip buying fresh just for this dish.",
      "Plain ketchup and a couple of eggs do almost all the flavor work here, so no specialty Asian sauces are required."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-peas",
        "swap": "Any frozen mixed veg, frozen corn, or leftover cooked vegetables",
        "savings": "Use whatever is already in your freezer instead of a dedicated bag"
      },
      {
        "forIngredientId": "butter",
        "swap": "An extra 1/2 tbsp vegetable oil (keeps the dish dairy-free)",
        "savings": "Saves a few cents and makes it fully dairy-free"
      },
      {
        "forIngredientId": "sriracha",
        "swap": "Any hot sauce you already own, or just more ketchup",
        "savings": "No need to buy sriracha for one drizzle"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 24,
      "carbs": 72,
      "fat": 27,
      "fiber": 4
    },
    "emoji": "🌪️",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean-Japanese",
    "tags": [
      "egg",
      "korean-japanese",
      "omurice",
      "fried-rice",
      "dinner",
      "vegetarian",
      "viral",
      "comfort-food",
      "pantry"
    ]
  },
  {
    "id": "egg-croque-madame",
    "name": "Croque Madame (Ham, Gruyere and Bechamel Toast with a Fried Egg)",
    "description": "A French bistro icon: crisp toasted bread layered with ham and nutty Gruyere, blanketed in a glossy bechamel, broiled until golden and bubbling, then crowned with a runny fried egg. It is basically a grilled cheese that went to Paris.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "bread",
        "quantity": 4,
        "note": "sturdy white or sourdough, sliced thick"
      },
      {
        "ingredientId": "ham",
        "quantity": 4,
        "note": "good deli ham, fully cooked"
      },
      {
        "ingredientId": "gruyere",
        "quantity": 3,
        "note": "shredded; split between the filling and the top"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "1 tbsp for the roux, 1 tbsp for frying the eggs"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.0625,
        "note": "1 tbsp for the roux"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.75,
        "note": "warm, whisked in for the bechamel"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one per sandwich"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.13,
        "note": "a pinch, classic in bechamel"
      },
      {
        "ingredientId": "dijon",
        "quantity": 1,
        "optional": true,
        "note": "thin smear on the bread"
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
        "quantity": 1,
        "optional": true,
        "note": "grated, extra on top to help it brown"
      },
      {
        "ingredientId": "chives",
        "quantity": 1,
        "optional": true,
        "note": "snipped, to garnish"
      }
    ],
    "steps": [
      "Set an oven rack about 6 inches below the broiler and turn the broiler to high. Lightly toast the 4 bread slices (toaster or oven) so they stay crisp under the sauce, then set them on a foil-lined baking sheet.",
      "Make the bechamel: melt 1 tbsp butter in a small saucepan over medium heat, whisk in the flour, and cook 1 minute until it smells nutty but stays pale. Slowly whisk in the warm milk and keep whisking 2 to 3 minutes until it thickens to a pourable, spoon-coating sauce. Stir in the pinch of nutmeg, the salt, and pepper, then take it off the heat.",
      "Build the sandwiches: smear the optional Dijon on 2 of the toasts, lay 2 slices of ham on each, and top with about half the Gruyere. Close each with a second toast.",
      "Spoon a generous layer of bechamel over the top of each closed sandwich, letting it run down the sides, then scatter the remaining Gruyere (and optional Parmesan) on top.",
      "Broil 3 to 5 minutes, watching closely, until the cheese and bechamel are bubbling and spotted deep golden brown. Move them to plates.",
      "Fry the eggs: melt the remaining 1 tbsp butter in a nonstick skillet over medium heat. Crack in the eggs and cook 2 to 3 minutes until the whites are fully set and opaque but the yolks are still runny (cook an extra minute or two if you prefer firm yolks). Season lightly with salt and pepper.",
      "Slide one fried egg onto each broiled sandwich, garnish with chives if using, and serve immediately while the cheese is molten and the yolk is glossy."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 13,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Gruyere is the splurge here — buy a small wedge or sub in cheaper Swiss/Emmental and you will not lose much of the nutty flavor.",
      "Use whatever sturdy bread you already have; day-old sourdough or plain white sandwich bread both toast up perfectly and save you a special trip.",
      "Make a double batch of bechamel and refrigerate half — it reheats with a splash of milk and turns next-day toast or pasta into something fancy for almost nothing."
    ],
    "substitutions": [
      {
        "forIngredientId": "gruyere",
        "swap": "swiss-cheese or emmental — melts the same nutty way",
        "savings": "saves roughly $0.50 per serving"
      },
      {
        "forIngredientId": "ham",
        "swap": "deli-turkey or canadian-bacon for a leaner crown",
        "savings": "roughly the same cost, leaner"
      },
      {
        "forIngredientId": "bread",
        "swap": "sourdough or brioche-buns for a richer base",
        "savings": "pennies more for a bistro upgrade"
      }
    ],
    "estimatedNutrition": {
      "calories": 600,
      "protein": 33,
      "carbs": 38,
      "fat": 35,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "egg",
      "french",
      "bistro",
      "sandwich",
      "lunch",
      "comfort-food",
      "ham-and-cheese",
      "broiled"
    ]
  },
  {
    "id": "egg-loco-moco",
    "name": "Hawaiian Loco Moco",
    "description": "Hawaii's ultimate diner comfort plate: a juicy seared beef patty over a mound of hot white rice, smothered in savory brown mushroom gravy and crowned with a sunny-side-up egg whose runny yolk melts into every bite. Hearty, cheap, and deeply satisfying.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 1
      },
      {
        "ingredientId": "ground-beef",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 1.5
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1.5
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 1
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
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
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced, for garnish"
      }
    ],
    "steps": [
      "Cook the rice: rinse 1 cup white rice, combine with about 1.5 cups water in a pot, bring to a boil, then cover and simmer on low 15-18 minutes until tender. Keep covered and warm while you build the rest.",
      "Mix the ground beef with a big pinch of salt and pepper and about 1 tsp of the worcestershire, then form 2 firm patties slightly wider than your serving size since they shrink as they cook.",
      "Heat 1 tbsp vegetable oil in a skillet over medium-high. Sear the patties 3-4 minutes per side until well browned and cooked through to an internal temperature of 160F (no pink in the center) for food safety. Transfer to a plate.",
      "In the same pan (keep the browned drippings), add the diced half onion and sliced mushrooms with the butter. Cook over medium 4-5 minutes until softened and golden, then stir in the minced garlic for 30 seconds.",
      "Pour in 1.5 cups beef broth, the soy sauce, and remaining worcestershire; scrape up the browned bits and bring to a simmer. Whisk the cornstarch with 2 tbsp cold water, stir it in, and simmer 2-3 minutes until the gravy thickens enough to coat a spoon. Taste and adjust salt and pepper.",
      "Nestle the patties back into the gravy and spoon it over them; keep warm on low heat while you fry the eggs.",
      "In a separate nonstick pan over medium-low, fry the eggs sunny-side-up 2-3 minutes until the whites are fully set but the yolks are still runny, for that classic melt-into-the-gravy moment. A runny yolk is traditional here; if you are serving young children, anyone pregnant, or anyone with a weakened immune system, use pasteurized eggs or cook until the yolk is firm.",
      "Plate it up: a mound of hot rice, a gravy-smothered patty on top, extra gravy ladled over, and a fried egg crowning each plate. Garnish with sliced scallions and serve immediately."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Plain white rice is one of the cheapest ways to bulk up any meal, so make a little extra and you've got tomorrow's lunch base ready to go.",
      "Skip the mushrooms entirely if money's tight; an onion-only brown gravy is still classic and delicious, and saves you over a dollar.",
      "Buy ground beef in the largest pack you can afford and freeze it in patty-sized portions; per-pound it's far cheaper than small trays."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey for a leaner, cheaper patty (cook fully to 165F)",
        "savings": "~$0.25/serving"
      },
      {
        "forIngredientId": "beef-broth",
        "swap": "Dissolve a beef bouillon cube in 1.5 cups hot water",
        "savings": "~$0.70 total"
      },
      {
        "forIngredientId": "mushroom",
        "swap": "Canned mushrooms, drained, or just leave them out",
        "savings": "~$1.00 total"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap butter for a splash of vegetable oil to make the dish fully dairy-free",
        "savings": "~$0.15 total"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 38,
      "carbs": 52,
      "fat": 28,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Hawaiian",
    "tags": [
      "egg",
      "hawaiian",
      "comfort-food",
      "rice-bowl",
      "beef",
      "dinner",
      "gravy",
      "diner-classic"
    ]
  },
  {
    "id": "egg-classic-quiche-lorraine",
    "name": "Classic Quiche Lorraine",
    "description": "A silky baked egg custard loaded with crisp smoky bacon and nutty Gruyere in a flaky crust. Make it on Sunday and you've got dinner-party-worthy slices for lunches all week, delicious hot or cold straight from the fridge.",
    "mealType": "meal-prep",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pie-crust",
        "quantity": 1,
        "note": "store-bought 9-inch, thawed if frozen"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "large"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "or half-and-half for a lighter custard"
      },
      {
        "ingredientId": "bacon",
        "quantity": 5,
        "note": "cooked crisp and crumbled"
      },
      {
        "ingredientId": "gruyere",
        "quantity": 5,
        "note": "about 1.25 cups shredded"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced"
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
        "ingredientId": "cayenne",
        "quantity": 0.125,
        "note": "just a pinch"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.125,
        "optional": true,
        "note": "a tiny grating, classic touch"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Heat the oven to 325F and set the pie crust on a rimmed baking sheet (it catches drips). If the crust is a flimsy foil pan, leave it there; if it's a dough round, press it into a 9-inch pie dish.",
      "Cook the bacon: lay the slices in a cold skillet over medium heat and fry 6-8 minutes, flipping, until deeply browned and crisp with no raw pink. Move to a paper towel, then crumble. Pour off all but a thin film of fat.",
      "Whisk the custard: in a bowl, beat the 4 eggs with the heavy cream, salt, pepper, cayenne, and a tiny grating of nutmeg until fully smooth and uniform, with no streaks of white.",
      "Scatter the crumbled bacon, shredded Gruyere, and sliced scallions evenly across the bottom of the crust.",
      "Slowly pour the egg custard over the filling until it nearly reaches the rim, stopping just below the edge so it won't overflow as it puffs.",
      "Bake at 325F for 45-50 minutes. It's done when the edges are set and puffed but the center still has a slight jiggle, like soft jello; a knife inserted 1 inch from center should come out mostly clean. The custard must be fully set, not liquid (eggs cooked to 160F for safety).",
      "If the crust edges brown too fast, tent them with foil for the last 15 minutes.",
      "Let the quiche rest 15-20 minutes before slicing; it firms up as it cools. Garnish with chopped parsley and cut into 6 wedges.",
      "To meal-prep: cool fully, wrap, and refrigerate up to 4 days. Eat cold, or reheat a slice in the microwave for 45-60 seconds or in a 325F oven for 10 minutes."
    ],
    "totalTimeMinutes": 80,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 50,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a block of Gruyere on sale and shred it yourself instead of buying pre-shredded, or swap in a milder Swiss-style melting cheese for the same nutty pull at a lower price.",
      "Bacon ends and pieces (or turkey bacon) cost less than premium strips and disappear into the custard anyway.",
      "A store-bought crust is cheaper than buying butter and flour for one pie, and a single quiche stretches into 6 lunches, so your cost per meal drops fast."
    ],
    "substitutions": [
      {
        "forIngredientId": "gruyere",
        "swap": "a milder Swiss-style melting cheese",
        "savings": "often cheaper per ounce with a similar nutty melt"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "half-and-half, or whole milk plus a pat of butter",
        "savings": "a few cents per quiche and a lighter custard"
      },
      {
        "forIngredientId": "bacon",
        "swap": "diced ham or turkey bacon",
        "savings": "saves around $0.50-1.00 and runs leaner"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 18,
      "carbs": 17,
      "fat": 31,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "egg",
      "french",
      "bacon",
      "gruyere",
      "quiche",
      "meal-prep",
      "make-ahead",
      "high-protein",
      "brunch"
    ]
  },
  {
    "id": "egg-hong-kong-egg-tarts-dan-tat",
    "name": "Hong Kong Egg Tarts (Dan Tat)",
    "description": "Tender, buttery shortcrust shells cradling a glassy-smooth, lightly sweet egg custard, just like the dim-sum cart classic. Silkier and milder than its Portuguese cousin, and totally doable in a dorm with a single rolled pie crust and a muffin tin.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pie-crust",
        "quantity": 1,
        "note": "one rolled refrigerated pie crust, cut into rounds and pressed into a muffin tin to make about 8 shells"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "whole eggs, room temperature"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 0.5,
        "note": "about 2/3 cup; refrigerate the rest"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "dissolved into the hot water to make a smooth syrup"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "hot, to dissolve the sugar"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.25,
        "optional": true,
        "note": "optional; a tiny splash rounds out the custard"
      }
    ],
    "steps": [
      "Heat the oven to 400F (200C) with a rack in the lower third. Cut the pie crust into rounds, press them into the cups of a muffin tin to form 8 small shells, and chill while the oven heats.",
      "Make a sugar syrup: stir the sugar into the 1/2 cup of hot water until fully dissolved and clear, then let it cool to lukewarm (if it is still hot it will scramble the eggs).",
      "In a bowl, gently whisk the 3 whole eggs with the evaporated milk and optional vanilla until just combined. Whisk slowly to avoid beating in air bubbles, which cause a bumpy surface.",
      "Pour the cooled sugar syrup into the egg mixture and stir gently until you have a smooth, pale custard.",
      "Strain the custard through a fine-mesh sieve into a measuring cup, then skim off any foam. This is what gives the tarts their signature glassy top, so do not skip it.",
      "Pour the custard into each chilled shell, filling to about 80 percent so it does not overflow as it sets.",
      "Bake at 400F for 10 minutes, then lower the oven to 350F (175C) and bake 10 to 15 minutes more, until the custard is just set with only a faint jiggle in the center and a toothpick inserted near the edge can stand upright on its own. Do not overbake, or the custard puffs and cracks.",
      "Cool 5 to 10 minutes so the custard firms up and is fully set throughout (a clean, non-runny baked custard). Serve warm; they are best the day they are made."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "One rolled pie crust pressed into a muffin tin yields about 8 tart shells, far cheaper than buying pre-formed tart shells.",
      "Use the leftover half can of evaporated milk in coffee, oatmeal, or a second batch within a few days so nothing goes to waste.",
      "Whole eggs plus a splash of evaporated milk cost pennies per tart compared to a bakery dan tat."
    ],
    "substitutions": [
      {
        "forIngredientId": "evaporated-milk",
        "swap": "Use 2/3 cup whole milk warmed slightly; the custard is a touch less rich but still silky.",
        "savings": "Saves about $1 if you already have milk on hand"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Honey works too; just dissolve it fully into the warm water first."
      },
      {
        "forIngredientId": "vanilla",
        "swap": "A few drops of almond extract for a more floral, bakery-style aroma."
      }
    ],
    "estimatedNutrition": {
      "calories": 210,
      "protein": 6,
      "carbs": 24,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🥚",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese / Cantonese",
    "tags": [
      "egg",
      "chinese",
      "cantonese",
      "dim-sum",
      "dessert",
      "snack",
      "custard",
      "baked",
      "vegetarian"
    ]
  },
  {
    "id": "egg-japanese-purin",
    "name": "Japanese Purin (Caramel Custard Pudding)",
    "description": "A wobbly, tender egg custard nestled in a pool of bittersweet caramel, firmer and more spoonable than flan. Just a handful of humble ingredients turn into Japan's most nostalgic afternoon treat, single-serve and impossibly cute.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1.25
      },
      {
        "ingredientId": "sugar",
        "quantity": 7,
        "note": "3 tbsp for the custard, 4 tbsp for the caramel"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1 tbsp to start the caramel, 3 tbsp hot to thin it"
      },
      {
        "ingredientId": "whipped-cream",
        "quantity": 2,
        "optional": true,
        "note": "for garnish after unmolding"
      }
    ],
    "steps": [
      "Make the caramel: in a small saucepan over medium heat, combine 4 tbsp sugar and 1 tbsp water. Let it melt undisturbed, swirling the pan occasionally (do not stir), until it turns a deep amber, about 5-7 minutes. Watch closely at the end, as it goes from amber to burnt fast.",
      "Off the heat, carefully add 3 tbsp hot water at arm's length (it will sputter and steam violently). Swirl to combine, then immediately divide the hot caramel between 2 ramekins, tilting to coat the bottoms. Set aside to harden.",
      "Make the custard base: warm the whole milk with 3 tbsp sugar in a small saucepan over low heat, stirring just until the sugar dissolves and the milk is steaming but not boiling, about 3 minutes. Remove from heat.",
      "In a bowl, gently whisk the 3 eggs with the vanilla extract until just combined, avoiding too many bubbles. Pour the warm milk into the eggs in a thin, steady stream while whisking, so the eggs temper rather than scramble.",
      "Strain the custard through a fine-mesh sieve into a measuring cup, then divide it evenly over the hardened caramel in the ramekins. Skim off any surface foam for a smooth top.",
      "Set the ramekins in a baking dish and pour hot water into the dish until it reaches halfway up their sides. Bake at 320F (160C) for 35-40 minutes, until the custard is fully set with only a slight jiggle in the very center; the eggs should be cooked through, never runny.",
      "Lift the ramekins from the water bath and cool to room temperature, then chill in the fridge at least 3 hours or overnight, until cold and firm.",
      "To serve, run a thin knife around the edge of each purin, set a small plate on top, and invert so the caramel pools over the custard. Finish with a dollop of whipped cream if desired."
    ],
    "totalTimeMinutes": 230,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Whole milk gives the richest custard, but any milk already in your fridge works and shaves a few cents off.",
      "No ramekins? Use small oven-safe mugs, glass jars, or one larger dish (just bake a little longer until set).",
      "Caramel is only sugar and water, the cheapest part of the dish, so don't be afraid to practice it a couple of times until you nail the amber color."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use evaporated milk or half-and-half for an extra-rich, denser purin",
        "savings": "costs a bit more but tastes more luxurious"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "Swap in a scraped vanilla bean or a splash of rum for deeper flavor",
        "savings": "vanilla bean costs more; rum is roughly even"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Use brown sugar in the caramel for a deeper, almost toffee note",
        "savings": "about the same cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 235,
      "protein": 9,
      "carbs": 33,
      "fat": 8,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "egg",
      "japanese",
      "dessert",
      "custard",
      "caramel",
      "snack",
      "make-ahead"
    ]
  },
  {
    "id": "egg-homemade-lemon-curd",
    "name": "Homemade Lemon Curd",
    "description": "A bright, glossy, intensely tangy-sweet egg-yolk custard that comes together on the stovetop in about 10 minutes from five ingredients. Spread it on toast, swirl it into yogurt, or fill a tart - it's the perfect way to use up extra yolks.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "egg-yolks",
        "quantity": 4,
        "note": "save the whites for another use"
      },
      {
        "ingredientId": "sugar",
        "quantity": 9,
        "note": "about 1/2 cup plus a little"
      },
      {
        "ingredientId": "lemon",
        "quantity": 3,
        "note": "for ~1/2 cup juice plus zest"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "zest the lemons before juicing"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "cold, cut into pieces"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "just a pinch"
      }
    ],
    "steps": [
      "Zest the lemons first, then juice them; you want about 1/2 cup of juice. Rub the zest into the sugar with your fingertips in a small bowl until the sugar smells lemony and looks slightly damp.",
      "In a non-reactive (stainless or glass) saucepan off the heat, whisk the egg yolks with the lemon sugar until pale and smooth, then whisk in the lemon juice and a pinch of salt.",
      "Add the cold butter pieces and set the pan over medium-low heat. Stir constantly with a whisk or silicone spatula, scraping the corners so the yolks never scramble.",
      "Cook gently for about 8 to 10 minutes, until the curd goes from foamy and thin to smooth and glossy. It is done when it thickly coats the back of a spoon and a finger swiped through leaves a clean line (about 170°F). Do not let it boil - cooking the yolks to 170°F sets the curd fully and makes it food-safe, not runny.",
      "Immediately pour the curd through a fine-mesh strainer into a clean jar or bowl to catch the zest and any cooked egg bits, leaving you with a silky spread.",
      "Press a piece of plastic wrap directly onto the surface of the curd so a skin cannot form.",
      "Cool to room temperature, then refrigerate at least 2 hours until cold and thick.",
      "Keep refrigerated and use within 1 to 2 weeks. Spread on toast or scones, swirl into yogurt, or use as a tart filling."
    ],
    "totalTimeMinutes": 135,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "This is the ideal home for leftover egg yolks from any recipe that used only whites (meringue, macarons, egg-white omelets), so nothing goes to waste.",
      "Bottled lemon juice works fine for the juice and is cheaper than fresh; just buy one fresh lemon for the zest, which carries most of the aroma.",
      "No fine strainer? Skip it and just whisk hard at the end; a few specks of zest only add flavor and texture."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon",
        "swap": "Use bottled lemon juice plus one fresh lemon for zest",
        "savings": "About $1 cheaper than buying three fresh lemons"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter or margarine for a dairy-free curd",
        "savings": "Saves a few cents and makes it dairy-free"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Honey or maple syrup, reduce juice slightly to keep it thick",
        "savings": "Use what's already in the pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 125,
      "protein": 1,
      "carbs": 14,
      "fat": 7,
      "fiber": 0
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "British",
    "tags": [
      "egg",
      "british",
      "lemon",
      "spread",
      "dessert",
      "make-ahead",
      "5-ingredient",
      "stovetop"
    ]
  },
  {
    "id": "egg-sri-lankan-egg-hopper-bittara-appa",
    "name": "Sri Lankan Egg Hopper (Bittara Appa)",
    "description": "A bowl-shaped coconut-rice crepe with crispy lacy edges and a soft, spongy center, with an egg cracked right into the middle so the yolk stays gloriously runny. Served with a fiery, zesty pol sambol, it's a genuine showstopper breakfast and a fun weekend project.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "rice-flour",
        "quantity": 1,
        "note": "the batter base"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 0.75,
        "note": "about 3/4 of a 13.5 oz can"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 0.5
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "feeds the yeast"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "batter, eggs, and sambol"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one cracked into the center of each hopper"
      },
      {
        "ingredientId": "coconut-oil",
        "quantity": 1,
        "note": "for greasing the pan between hoppers"
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 4,
        "note": "pol sambol",
        "optional": true
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.25,
        "note": "finely chopped, for pol sambol",
        "optional": true
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "note": "or Kashmiri chili, for pol sambol",
        "optional": true
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "juice, for pol sambol",
        "optional": true
      },
      {
        "ingredientId": "curry-leaves",
        "quantity": 1,
        "note": "garnish",
        "optional": true
      }
    ],
    "steps": [
      "Make the batter: whisk 1 cup rice flour with about 3/4 can coconut milk, 1 tbsp sugar, 1/2 tsp instant yeast, and 1/2 tsp salt until smooth and pourable, like thin pancake batter. Add a splash of warm water if it's too thick.",
      "Cover the bowl and ferment somewhere warm for 4-6 hours (or overnight in the fridge, then bring to room temp). It's ready when it looks bubbly, smells slightly tangy, and has grown a little.",
      "Make the optional pol sambol while you wait: combine the shredded coconut, finely chopped red onion, red pepper flakes, lime juice, and a pinch of salt. Squeeze it together with your fingers until it turns blush-pink and fragrant, then set aside.",
      "Stir the batter gently. Heat a small rounded hopper pan (or a small nonstick bowl-shaped pan) over medium heat and grease lightly with coconut oil using a folded paper towel.",
      "Pour in a small ladle of batter (about 1/3 cup), then immediately lift the pan and swirl so the batter coats up the sides, forming a thin bowl with a slightly thicker pool at the bottom.",
      "Crack one egg into the center, season with a pinch of salt, cover with a lid, and cook 2-3 minutes over medium heat: the lacy edges should turn deep golden and crisp and the white should set fully while the yolk stays soft and runny.",
      "Slide a thin spatula around the crisp edge to release the hopper and lift it out whole onto a plate. Re-grease the pan and repeat with the remaining batter and second egg.",
      "Serve right away while the edges are crisp and the yolk is warm. Scatter curry leaves over the top and spoon the pol sambol alongside. The yolk is intentionally soft-set, so use fresh, properly refrigerated eggs."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A bag of rice flour and one can of coconut milk make many hoppers, so the per-hopper cost is tiny once you've stocked up; batch the batter and feed a few friends.",
      "No hopper pan? A small nonstick saucepan or even a deep ladle-shaped wok works, just swirl the batter up the sides the same way.",
      "Skip the pol sambol if money's tight and just hit the runny yolk with salt, pepper, and a squeeze of lime; it's still delicious."
    ],
    "substitutions": [
      {
        "forIngredientId": "instant-yeast",
        "swap": "Use 1/4 tsp baking soda plus a splash of club soda for a quicker, no-wait batter (less tangy, but no overnight ferment needed).",
        "savings": "skips the wait"
      },
      {
        "forIngredientId": "coconut-milk",
        "swap": "Light coconut milk, or coconut milk thinned with water; you mainly need the coconut flavor and a pourable consistency.",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "red-pepper-flakes",
        "swap": "Any chili powder, cayenne, or a chopped fresh chili for the pol sambol.",
        "savings": "uses what you have"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 9,
      "carbs": 48,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "Sri Lankan",
    "tags": [
      "egg",
      "sri-lankan",
      "breakfast",
      "coconut",
      "fermented",
      "project-bake",
      "gluten-free",
      "dairy-free",
      "vegetarian"
    ]
  },
  {
    "id": "egg-beet-pickled-eggs",
    "name": "Beet Pickled Eggs",
    "description": "Jewel-magenta pickled eggs with a tangy-sweet bite and a stunning ombre ring under the shell, perfect sliced onto a snack board. Just hard-boil, drop into a beet-and-vinegar brine, and let the fridge do all the work for a week.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6
      },
      {
        "ingredientId": "canned-beets",
        "quantity": 1,
        "note": "sliced, plus all the juice from the can"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "smashed"
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 8,
        "note": "8 tbsp = 1/2 cup"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 1,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Place the 6 eggs in a small pot and cover with cold water by about an inch. Bring to a rolling boil over high heat, then turn off the heat, cover, and let sit 11-12 minutes for fully set yolks. The eggs must be hard-boiled (firm yolk, no runniness) so they cure safely in the brine.",
      "While the eggs cook, fill a bowl with cold water and ice. Drain the hot eggs and dunk them into the ice bath for at least 5 minutes; the shock makes them far easier to peel. Peel under a trickle of running water and set the smooth eggs aside.",
      "Open the can of beets and pour the juice into a clean pint jar or other lidded container. Add the sliced beets, thinly sliced red onion, smashed garlic, and the bay leaf if using.",
      "Add the apple cider vinegar (1/2 cup), sugar, and salt to the jar. Stir or seal and shake until the sugar and salt fully dissolve into the brine.",
      "Lower the peeled eggs into the jar so they are fully submerged in the magenta brine. If the liquid doesn't quite cover them, top up with a splash of water, then seal the lid.",
      "Refrigerate at least 2-3 days before eating so the eggs absorb color and flavor. For a deep ruby ring all the way through, give them a full week, turning the jar now and then. Keep them refrigerated the entire time, never at room temperature.",
      "To serve, lift an egg out, slice in half or into rounds, and arrange on a board. Scatter with fresh parsley if you like. Eat within 2 weeks, keep the jar cold, and make sure any remaining eggs stay submerged in the brine."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy eggs by the dozen and pickle the whole carton; the same brine works for 12 eggs as for 6, so double the batch at no extra effort.",
      "Reuse the brine: after the eggs are gone, drop in a fresh batch of peeled hard-boiled eggs (keep refrigerated) for a second round of nearly-free snacks.",
      "Canned beets with their juice are the cheapest path here; no need to roast fresh beets, and the can liquid is your ready-made dye."
    ],
    "substitutions": [
      {
        "forIngredientId": "canned-beets",
        "swap": "Use 1 fresh beet, peeled, sliced, and simmered in 1 cup water until tender, then use that pink cooking water as the brine base.",
        "savings": "Saves about $0.25 if beets are cheaper loose"
      },
      {
        "forIngredientId": "apple-cider-vinegar",
        "swap": "Plain white or distilled vinegar works fine and is usually cheaper.",
        "savings": "Saves a few cents per batch"
      },
      {
        "forIngredientId": "red-onion",
        "swap": "Any yellow or white onion adds the same sweet-savory note to the brine.",
        "savings": "Saves about $0.10"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 11,
      "carbs": 8,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🥚",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "egg",
      "american",
      "pickled",
      "snack",
      "make-ahead",
      "high-protein",
      "no-cook-brine",
      "meal-prep",
      "vegetarian"
    ]
  },
  {
    "id": "egg-pidan-doufu-century-egg-silken-tofu",
    "name": "Pidan Doufu (Century Egg with Cold Silken Tofu)",
    "description": "A silky, no-cook Chinese appetizer: chilled silken tofu draped with creamy, jammy century egg and a punchy soy-sesame-scallion sauce. Cooling, savory, and deeply umami, it's a beloved classic that costs almost nothing to throw together.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "silken-tofu",
        "quantity": 1,
        "note": "1 block, chilled cold"
      },
      {
        "ingredientId": "century-eggs",
        "quantity": 2,
        "note": "peeled and quartered or chopped"
      },
      {
        "ingredientId": "light-soy-sauce",
        "quantity": 2,
        "note": "for the sauce"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "toasted, for aroma"
      },
      {
        "ingredientId": "chinkiang-vinegar",
        "quantity": 1,
        "note": "Chinese black vinegar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "to balance the sauce"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "finely minced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "chili-oil",
        "quantity": 1,
        "optional": true,
        "note": "for heat, drizzle on top"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Chill the unopened block of silken tofu in the fridge for at least 30 minutes so it is cold and firm enough to hold its shape. This dish is served cold, so do not skip the chilling.",
      "Make the sauce: in a small bowl stir together 2 tbsp light soy sauce, 1 tbsp Chinkiang black vinegar, 1 tsp toasted sesame oil, and 1/2 tbsp sugar until the sugar fully dissolves, then stir in 1 finely minced garlic clove.",
      "Peel the century eggs: gently crack and remove the shell. The white will be a translucent amber jelly and the yolk a soft, dark, creamy center, which is normal and fully cured (no cooking needed). Rinse and pat dry.",
      "Cut each century egg into quarters or rough chop. A thin knife rinsed in warm water slices the soft yolk cleanly without smearing.",
      "Carefully turn the cold silken tofu out of its pack onto a shallow serving plate, draining off any liquid. Keep the block whole, or slice it into thick slabs for easier scooping.",
      "Arrange the century egg pieces over and around the tofu so every bite gets some egg.",
      "Spoon the soy-sesame sauce evenly over the top, letting it pool around the base of the tofu.",
      "Scatter the sliced scallions over everything, then drizzle with chili oil and top with cilantro if using. Serve immediately while cold, scooping tofu, egg, and sauce together in each spoonful."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Century eggs are cheapest at Asian grocery stores, often sold 6 to a pack for a couple dollars, far less than buying singles. Buy a pack and they keep for weeks in the pantry.",
      "One block of silken tofu easily stretches to feed 2-3 people as a snack, so this whole plate lands at well under a dollar per serving.",
      "Skip bottled chili oil and make the cheap classic version: just soy, black vinegar, sesame oil, and scallions still tastes authentic and restaurant-good."
    ],
    "substitutions": [
      {
        "forIngredientId": "chinkiang-vinegar",
        "swap": "rice vinegar or a splash of regular black or balsamic vinegar",
        "savings": "Use what you have; rice vinegar is milder but works fine"
      },
      {
        "forIngredientId": "light-soy-sauce",
        "swap": "regular soy sauce, or tamari for a gluten-free version",
        "savings": "No extra cost, likely already in your pantry"
      },
      {
        "forIngredientId": "chili-oil",
        "swap": "a pinch of red pepper flakes or a few drops of sriracha",
        "savings": "Cheaper and probably already on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 13,
      "carbs": 6,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🥚",
    "accentColor": "bg-emerald-100",
    "cuisine": "Chinese",
    "tags": [
      "egg",
      "chinese",
      "no-cook",
      "appetizer",
      "cold-dish",
      "tofu",
      "5-minute",
      "dorm-friendly",
      "vegetarian"
    ]
  }
];
