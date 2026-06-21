import type { Recipe } from "@/lib/types";

/**
 * Curated, quality-gated recipes — faithful versions of well-known dishes across
 * cuisines (comfort food, Italian, Mexican, Asian, Mediterranean, breakfast,
 * soups, vegetarian, desserts, seafood). Each was authored to be authentic, then
 * adversarially judged by a strict chef (kept only score >= 7 / avg 8.6) to reject
 * AI slop. Real catalog ingredient ids, quantities in catalog units. Photos are in
 * curatedRecipePhotos.ts (freely licensed, hand-verified to match the dish).
 */
export const CURATED_RECIPES: Recipe[] = [
  {
    "id": "cur-classic-beef-chili",
    "name": "Classic Beef Chili",
    "description": "A deeply savory, chile-forward beef chili built the right way: beef browned hard for fond, aromatics softened in the drippings, tomato paste and dried chiles bloomed in the fat, then a low-and-slow simmer with two kinds of beans until it's thick enough to stand a spoon in. Smoky, a little spicy, and even better the next day.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 6,
        "note": "80/20 ground chuck for flavor"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "large yellow onion, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded and minced"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.5,
        "note": "about 3 tbsp"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "28 oz can"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 1.5,
        "note": "about 1.5 cups"
      },
      {
        "ingredientId": "kidney-beans",
        "quantity": 1,
        "note": "drained and rinsed"
      },
      {
        "ingredientId": "pinto-beans",
        "quantity": 1,
        "note": "drained and rinsed"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 3,
        "note": "tbsp; the backbone"
      },
      {
        "ingredientId": "ancho-chili-powder",
        "quantity": 1,
        "note": "tbsp for fruity depth"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "tbsp, ground"
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "tsp dried, Mexican if you have it"
      },
      {
        "ingredientId": "chipotle-in-adobo",
        "quantity": 0.25,
        "note": "1 chile minced + 1 tsp sauce, optional",
        "optional": true
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "tbsp"
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
        "ingredientId": "cheese",
        "quantity": 0.15,
        "note": "shredded cheddar, to serve",
        "optional": true
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 0.2,
        "note": "to serve",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.3,
        "note": "sliced, to garnish",
        "optional": true
      }
    ],
    "steps": [
      "Heat the olive oil in a heavy Dutch oven or wide pot over medium-high. Add the ground beef in a single layer and let it sit undisturbed for 3-4 minutes to build a brown crust, then break it up and finish browning. Season with salt and pepper. Spoon off all but about a tablespoon of fat.",
      "Lower the heat to medium and add the onion and jalapeño to the beef. Cook for 5-6 minutes until softened, then stir in the garlic and cook 1 minute more until fragrant.",
      "Push the meat aside and add the tomato paste, chili powder, ancho chili powder, cumin, smoked paprika, and oregano directly into the hot fat. Toast, stirring constantly, for 60-90 seconds until the spices darken and smell nutty — this blooming step is what separates real chili from a bland one.",
      "Stir in the crushed tomatoes and beef broth, scraping up every browned bit stuck to the bottom of the pot. Add the chipotle in adobo if using.",
      "Bring to a gentle bubble, then reduce to low. Partially cover and simmer for 45 minutes, stirring occasionally, letting the flavors meld and the liquid reduce.",
      "Stir in the drained kidney beans and pinto beans. Continue simmering uncovered for another 20-30 minutes, until the chili is thick enough to mound on a spoon.",
      "Taste and adjust: more salt for roundness, a pinch more chili powder for heat, or a splash of broth if it's too tight. Let it rest off the heat for 10 minutes before serving.",
      "Ladle into bowls and top with shredded cheddar, a dollop of sour cream, and sliced scallions."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 80,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Chili is the ultimate make-ahead meal — flavor deepens overnight, so cook a double batch and freeze half in portions.",
      "Stretch the beef by swapping in an extra can of beans for one of the meat servings; nobody will miss it and it cuts the cost noticeably.",
      "Buy whole dried spices in bulk bins rather than little jars — chili powder and cumin go fast in this recipe and bulk is a fraction of the price."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground turkey or plant-based ground for a leaner, cheaper pot",
        "savings": "Saves about $1.50 per serving"
      },
      {
        "forIngredientId": "ancho-chili-powder",
        "swap": "Just use extra regular chili powder plus a pinch of cocoa for depth",
        "savings": "Saves ~$0.40 per serving"
      },
      {
        "forIngredientId": "beef-broth",
        "swap": "Water with a crumbled bouillon cube works fine",
        "savings": "Saves ~$0.30 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 31,
      "carbs": 28,
      "fat": 22,
      "fiber": 8
    },
    "emoji": "🌶️",
    "accentColor": "bg-red-100",
    "cuisine": "American (Tex-Mex)",
    "tags": [
      "chili",
      "beef",
      "comfort-food",
      "one-pot",
      "make-ahead",
      "freezer-friendly",
      "high-protein",
      "game-day",
      "gluten-free"
    ]
  },
  {
    "id": "cur-hearty-beef-stew",
    "name": "Hearty Beef Stew",
    "description": "A deeply savory, slow-braised beef stew with tender chunks of chuck, sweet carrots, and creamy potatoes in a rich red-wine and tomato gravy. Browning the meat hard and reducing the wine are the two moves that turn this from soup into something worth a cold evening.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "beef-stew-meat",
        "quantity": 6,
        "note": "chuck, cut into 1.5-inch cubes"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.1,
        "note": "about 1/3 cup, for dredging"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.1,
        "note": "about 3 tbsp, for searing"
      },
      {
        "ingredientId": "onion",
        "quantity": 2
      },
      {
        "ingredientId": "carrot",
        "quantity": 4
      },
      {
        "ingredientId": "celery",
        "quantity": 0.4,
        "note": "about 3 stalks"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "about 4 cloves, minced"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.4,
        "note": "about 2 tbsp"
      },
      {
        "ingredientId": "red-wine",
        "quantity": 0.3,
        "note": "about 1.5 cups dry red"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 1,
        "note": "about 4 cups"
      },
      {
        "ingredientId": "potato",
        "quantity": 4,
        "note": "Yukon gold, cut into chunks"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.1,
        "note": "about 1 tbsp"
      },
      {
        "ingredientId": "thyme",
        "quantity": 0.15,
        "note": "about 1 tsp dried"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.1,
        "note": "2 leaves"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.3,
        "note": "about 1 cup, stirred in at the end"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.03
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.2,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "Pat the beef cubes very dry and season generously with salt and pepper. Toss them in the flour to coat, shaking off the excess.",
      "Heat the olive oil in a heavy Dutch oven over medium-high. Sear the beef in batches without crowding, 3-4 minutes per side, until each piece has a deep brown crust. Transfer to a plate.",
      "Lower the heat to medium and add the onion, carrot, and celery. Cook 6-8 minutes until softened and lightly caramelized, scraping up the browned bits. Stir in the garlic and tomato paste and cook 1-2 minutes until the paste darkens.",
      "Pour in the red wine and simmer hard for 3-4 minutes, scraping the bottom, until reduced by half.",
      "Return the beef and its juices to the pot. Add the beef broth, Worcestershire, thyme, and bay leaves. Bring to a gentle simmer, then cover and cook low for 1.5 hours, stirring occasionally.",
      "Add the potatoes, partially cover, and simmer another 35-45 minutes until the beef is fork-tender and the potatoes are cooked through.",
      "If you want a thicker gravy, uncover and simmer 10 more minutes to reduce, or mash a few potato chunks against the side of the pot.",
      "Stir in the frozen peas and cook 3-4 minutes until heated through. Discard the bay leaves, taste, and adjust salt and pepper.",
      "Rest 5 minutes off the heat, then ladle into bowls and finish with chopped fresh parsley."
    ],
    "totalTimeMinutes": 175,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 150,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole chuck roast and cube it yourself — it is usually cheaper per pound than pre-cut stew meat and the marbling is better.",
      "Skip a fancy bottle for the wine; any dry red you would actually sip works, and the alcohol cooks off entirely.",
      "This stew tastes even better the next day, so make a double batch and freeze half in portions."
    ],
    "substitutions": [
      {
        "forIngredientId": "red-wine",
        "swap": "Use extra beef broth plus a splash of balsamic vinegar",
        "savings": "Saves about $4 by skipping the bottle"
      },
      {
        "forIngredientId": "beef-stew-meat",
        "swap": "Beef chuck roast cubed at home",
        "savings": "Saves roughly $2/lb over pre-cut stew meat"
      },
      {
        "forIngredientId": "beef-broth",
        "swap": "Bouillon cube dissolved in water",
        "savings": "Saves about $2 vs boxed broth"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 34,
      "carbs": 32,
      "fat": 16,
      "fiber": 5
    },
    "emoji": "🍲",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "one-pot",
      "braised",
      "winter",
      "meal-prep",
      "freezer-friendly",
      "hearty"
    ]
  },
  {
    "id": "cur-classic-meatloaf",
    "name": "Classic Meatloaf",
    "description": "A tender, savory all-American meatloaf built on a milk-soaked bread panade so it never dries out, seasoned with sauteed onion and garlic, and finished with a sweet-tangy ketchup-brown sugar glaze that caramelizes in the oven. Comfort food done right.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 6,
        "note": "80/20 ground beef, ~2 lb total"
      },
      {
        "ingredientId": "bread",
        "quantity": 0.15,
        "note": "2 slices white bread, torn, for the panade"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/3 cup to soak the bread"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "binder"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced and sauteed"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.1,
        "note": "2 tbsp, for savory depth"
      },
      {
        "ingredientId": "ketchup",
        "quantity": 0.5,
        "note": "2 tbsp in the mix + the rest for the glaze"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.25,
        "note": "2 tbsp chopped"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.05,
        "note": "to saute the onion"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.03
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.08,
        "note": "2 tbsp for the glaze"
      },
      {
        "ingredientId": "dijon",
        "quantity": 0.05,
        "note": "1 tsp in the glaze for tang",
        "optional": true
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C) and line a rimmed baking sheet with foil or lightly oil a loaf pan. Tear the bread into small pieces, place in a large bowl, pour the milk over it, and let it soak for 5 minutes until soft.",
      "Heat the olive oil in a skillet over medium heat and saute the diced onion for 6-8 minutes until soft and golden. Add the minced garlic and cook 1 minute more, then let it cool slightly so it doesn't cook the eggs.",
      "Mash the soaked bread into a paste, then add the eggs, Worcestershire, 2 tbsp ketchup, chopped parsley, salt, pepper, and the cooled onion mixture. Whisk together until evenly combined.",
      "Add the ground beef and mix gently with your hands just until combined. Do not overwork it or the loaf will turn dense and rubbery.",
      "Transfer the mixture to the baking sheet and shape it into a free-form loaf about 9 by 5 inches (or press into the loaf pan). A free-form loaf gives more caramelized surface.",
      "Stir together the remaining ketchup, brown sugar, and Dijon to make the glaze. Spread half of it over the top of the loaf.",
      "Bake for 40 minutes, then brush on the remaining glaze and bake 15-25 minutes more, until the internal temperature reaches 160F (71C) on a thermometer.",
      "Rest the meatloaf for 10 minutes before slicing so the juices redistribute, then cut into thick slices and serve."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 70,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy 80/20 ground beef on sale and freeze it; the higher fat keeps a budget meatloaf juicy.",
      "Stretch the meat further by mixing in an extra slice of bread or some quick-cooked oats without anyone noticing.",
      "Leftover slices make excellent meatloaf sandwiches the next day, turning one dinner into two meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use half ground beef and half ground pork or ground turkey for a classic meatloaf blend",
        "savings": "Ground turkey can cut the cost by 20-30%"
      },
      {
        "forIngredientId": "bread",
        "swap": "Swap the bread panade for 1/2 cup plain breadcrumbs or quick oats",
        "savings": "Uses pantry staples you already have, near zero added cost"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "Use 2 tsp dried parsley instead of fresh",
        "savings": "Saves about $1 vs buying a fresh bunch"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 31,
      "carbs": 14,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🍖",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "dinner",
      "classic",
      "family-friendly",
      "high-protein",
      "ground-beef",
      "make-ahead"
    ]
  },
  {
    "id": "cur-skillet-cornbread",
    "name": "Skillet Cornbread",
    "description": "Southern-style cast-iron cornbread with a crackly, butter-fried crust and a tender, golden crumb. Cornmeal-forward and barely sweet, baked in a screaming-hot skillet so the edges crisp up while the center stays moist. Best torn warm and slathered with butter.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "cornmeal",
        "quantity": 0.5,
        "note": "1 1/2 cups stone-ground yellow cornmeal, medium grind"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "1/2 cup all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.2,
        "note": "1 tablespoon"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.1,
        "note": "1/2 teaspoon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1,
        "note": "1 teaspoon kosher salt"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.6,
        "note": "1 1/2 cups, full-fat"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "5 tablespoons; 1 tbsp melts in the hot skillet, 4 in the batter"
      },
      {
        "ingredientId": "honey",
        "quantity": 0.1,
        "optional": true,
        "note": "2 tablespoons; omit for a fully savory Southern loaf"
      }
    ],
    "steps": [
      "Place a 10-inch cast-iron skillet on the middle rack and preheat the oven to 425F (220C) with the skillet inside for at least 15 minutes so it gets ripping hot.",
      "In a large bowl, whisk together the cornmeal, flour, baking powder, baking soda, and salt until evenly combined.",
      "In a second bowl, whisk the eggs, buttermilk, honey (if using), and 4 tablespoons melted butter until smooth.",
      "Pour the wet ingredients into the dry and stir with a spatula just until no dry streaks remain; the batter should be thick but pourable. Do not overmix, or the crumb turns tough.",
      "Pull the hot skillet out, add the remaining 1 tablespoon butter, and swirl so it foams and coats the bottom and sides; it should sizzle on contact.",
      "Immediately pour the batter into the skillet, listening for that sizzle that sets the crust, and smooth the top.",
      "Bake for 20 to 25 minutes, until the top is deep golden and a toothpick inserted in the center comes out clean.",
      "Let rest in the skillet for 5 minutes, then run a knife around the edge, invert onto a board or cut into wedges, and serve warm with butter."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Stone-ground cornmeal in bulk costs a fraction of boxed cornbread mix and makes a far better crumb.",
      "No buttermilk? Stir 1 tablespoon vinegar or lemon juice into 1 1/2 cups regular milk and let it sit 5 minutes.",
      "A well-seasoned cast-iron skillet means you barely need extra fat and cleanup is just a wipe-down."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "Regular milk soured with 1 tbsp vinegar (let sit 5 min)",
        "savings": "Skips buying a whole carton of buttermilk you won't finish"
      },
      {
        "forIngredientId": "honey",
        "swap": "Sugar or maple syrup, or leave it out entirely",
        "savings": "A few cents, and going savory is more traditional"
      },
      {
        "forIngredientId": "butter",
        "swap": "Bacon grease or vegetable oil for the skillet",
        "savings": "Uses fat you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 5,
      "carbs": 28,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "Southern American",
    "tags": [
      "cornbread",
      "cast-iron",
      "southern",
      "side",
      "baking",
      "comfort-food",
      "vegetarian"
    ]
  },
  {
    "id": "cur-buttermilk-biscuits-and-gravy",
    "name": "Buttermilk Biscuits and Gravy",
    "description": "Tall, flaky buttermilk biscuits split open under a thick, peppery breakfast-sausage cream gravy.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.45,
        "note": "all-purpose, about 2.5 cups: 2 cups for biscuits + 3 tbsp for the gravy roux"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.12,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.04,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "for biscuit dough plus seasoning the gravy"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "1 stick (8 tbsp), very cold and cubed"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.4,
        "note": "about 1 cup, cold"
      },
      {
        "ingredientId": "sausage",
        "quantity": 1,
        "note": "1/2 lb bulk breakfast pork sausage"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "about 2 cups, warmed"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.06,
        "note": "lots, plus extra to finish"
      },
      {
        "ingredientId": "sage-dried",
        "quantity": 0.03,
        "note": "1/2 tsp, classic with breakfast sausage",
        "optional": true
      }
    ],
    "steps": [
      "Heat oven to 450F. In a bowl, whisk 2 cups flour, baking powder, baking soda, and 1 tsp salt. Cut in the cold cubed butter with your fingers or a pastry cutter until it looks like coarse crumbs with some pea-size bits remaining.",
      "Pour in the cold buttermilk and stir just until a shaggy dough forms; do not overmix. Turn onto a floured surface, pat into a rectangle, fold it over onto itself 3 times (this builds flaky layers), then pat to 3/4-inch thick.",
      "Cut straight down with a floured cutter or knife (don't twist) into 8 biscuits. Place them touching on a parchment-lined sheet, brush tops with a little buttermilk, and bake 14-16 minutes until tall and golden.",
      "Meanwhile, brown the bulk sausage in a cold skillet over medium heat, breaking it into crumbles, until no longer pink and some fat has rendered, 6-8 minutes. Leave the fat in the pan.",
      "Sprinkle 3 tbsp flour over the sausage and stir constantly for 1-2 minutes to cook out the raw flour taste and form a roux coating the meat.",
      "Slowly pour in the warm milk while whisking to keep it smooth. Bring to a gentle simmer, stirring, until the gravy thickens enough to coat the back of a spoon, 4-6 minutes.",
      "Season generously with black pepper, the sage, and salt to taste. If it gets too thick, loosen with a splash more milk.",
      "Split the warm biscuits open, set them cut-side up on plates, and ladle the hot sausage gravy over the top. Finish with a final crack of black pepper and serve immediately."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [],
    "cheapTips": [
      "No buttermilk? Stir 1 tbsp vinegar or lemon juice into 1 cup milk and let it sit 5 minutes — works for both the biscuits and a tangier gravy.",
      "Buy bulk sausage instead of links; it's cheaper per pound and saves you removing casings.",
      "Freeze the cubed butter for 10 minutes before cutting it in — colder butter means flakier biscuits with no fancy equipment."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup whole milk + 1 tbsp vinegar, rested 5 min",
        "savings": "~$1.50 vs a carton you'll only half-use"
      },
      {
        "forIngredientId": "sausage",
        "swap": "ground pork or turkey seasoned with sage, salt, pepper and a pinch of red pepper flakes",
        "savings": "~$1.00 per batch"
      },
      {
        "forIngredientId": "butter",
        "swap": "half butter, half shortening for taller, more tender biscuits",
        "savings": "~$0.75"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 18,
      "carbs": 52,
      "fat": 38,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Southern)",
    "tags": [
      "southern",
      "breakfast",
      "comfort-food",
      "biscuits",
      "sausage-gravy",
      "brunch",
      "from-scratch"
    ]
  },
  {
    "id": "cur-crispy-hash-browns",
    "name": "Crispy Hash Browns",
    "description": "Golden, shatteringly crisp hash browns made from freshly grated russet potatoes wrung bone-dry, then pan-fried in butter and oil until deeply browned with a fluffy interior. The trick is removing every drop of moisture and not touching the potatoes until a crust forms.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 4,
        "note": "russet potatoes, peeled and grated"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.15,
        "note": "2 tbsp, for browning and flavor"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.08,
        "note": "2 tbsp, high smoke point for the crust"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.04
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      },
      {
        "ingredientId": "onion-powder",
        "quantity": 0.03,
        "optional": true
      },
      {
        "ingredientId": "garlic-powder",
        "quantity": 0.03,
        "optional": true
      }
    ],
    "steps": [
      "Peel the russet potatoes and grate them on the large holes of a box grater into a bowl of cold water; swish to release starch.",
      "Drain, then transfer the grated potato to a clean kitchen towel. Wring hard over the sink until the potatoes are as dry as possible, removing every drop of water, then fluff them loose.",
      "Toss the squeezed potatoes with salt, pepper, and the optional onion and garlic powder so they season evenly.",
      "Heat a heavy nonstick or cast-iron skillet over medium-high heat. Add the vegetable oil and half the butter and let it foam.",
      "Add the potatoes and press into an even 1/2-inch layer with a spatula, leaving small gaps so steam escapes. Do not stir.",
      "Cook undisturbed 5-7 minutes until the underside is deep golden brown and crisp; resist the urge to flip early.",
      "Add the remaining butter around the edges, then flip in sections (or as one cake) and cook another 4-6 minutes until the second side is browned and the center is tender.",
      "Drain on a paper towel briefly, season with a final pinch of salt, and serve immediately while crisp."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Russet potatoes are one of the cheapest staples by the bag; buy a 5 lb bag and use the rest for mash or fries.",
      "Save the wrung-out starchy potato water, let the starch settle, and use the pure potato starch to thicken gravies for free.",
      "Skip the powders and grate in a little fresh onion if you have it on hand for the same flavor at no extra cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "potato",
        "swap": "Frozen shredded hash-browns, thawed and squeezed dry",
        "savings": "Saves prep time and avoids waste; usually within a few cents per serving"
      },
      {
        "forIngredientId": "butter",
        "swap": "All vegetable oil (use 3 tbsp total)",
        "savings": "Saves ~$0.20/serving and makes it dairy-free"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Bacon fat or any neutral oil you have",
        "savings": "Free if reusing rendered bacon fat, and adds savory flavor"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 4,
      "carbs": 30,
      "fat": 9,
      "fiber": 3
    },
    "emoji": "🥔",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "breakfast",
      "crispy",
      "potato",
      "vegetarian",
      "diner-style",
      "brunch",
      "budget"
    ]
  },
  {
    "id": "cur-tomato-bruschetta",
    "name": "Tomato Bruschetta",
    "description": "The real Roman antipasto: a juicy marinade of ripe tomatoes, torn basil, and garlic spooned over thick slices of rustic bread that have been grilled crisp and rubbed with a raw garlic clove, finished with grassy extra-virgin olive oil. Bright, fresh, and built on good ingredients rather than fuss.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "tomato",
        "quantity": 4,
        "note": "ripe Roma or vine tomatoes, cored and finely diced"
      },
      {
        "ingredientId": "bread",
        "quantity": 0.5,
        "note": "rustic sourdough or baguette, cut into 8 thick slices"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 0.5,
        "note": "leaves torn or chiffonade, about 10-12 leaves"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "1 minced for the tomatoes, 2 whole for rubbing the toast"
      },
      {
        "ingredientId": "evoo",
        "quantity": 3,
        "note": "tablespoons; a fruity extra-virgin"
      },
      {
        "ingredientId": "balsamic",
        "quantity": 1,
        "note": "teaspoon, optional drizzle to finish",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon, plus a pinch on the tomatoes"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "note": "teaspoon, freshly ground"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.1,
        "note": "optional shavings to finish",
        "optional": true
      }
    ],
    "steps": [
      "Core the tomatoes and cut them into small 1/4-inch dice. Place in a bowl, sprinkle with a pinch of salt, and let sit 10-15 minutes so excess juice draws out; tip off the watery liquid that pools so the topping stays on the bread instead of soaking it.",
      "Mince 1 garlic clove and add it to the drained tomatoes along with the torn basil, 2 tablespoons extra-virgin olive oil, the salt, and the black pepper. Toss gently and let marinate at room temperature while you toast the bread.",
      "Heat a grill pan or broiler. Brush both sides of the bread slices lightly with the remaining 1 tablespoon olive oil.",
      "Grill or broil the bread until deeply golden and crisp on both sides, 1-2 minutes per side, so the surface chars slightly but the center stays a touch chewy.",
      "While the toast is still hot, rub one side of each slice with a halved raw garlic clove; the rough toasted crust grates the garlic into the bread for a gentle bite.",
      "Spoon the marinated tomatoes generously over the garlic-rubbed side, including a little of their olive-oil juices.",
      "Finish with an optional drizzle of balsamic, a final thread of olive oil, and a few shavings of Parmesan if using. Serve immediately while the bread is crisp."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Use the ripest in-season tomatoes you can find; mealy off-season tomatoes are the one thing that ruins bruschetta, so buy on sale at peak summer or swap to vine-ripened.",
      "Day-old or slightly stale rustic bread is ideal and often discounted; it toasts crisper than fresh and is exactly what this dish wants.",
      "A modest bottle of decent extra-virgin olive oil goes a long way here since the dish is mostly tomato and bread; you don't need the priciest bottle, just one that tastes fresh and grassy."
    ],
    "substitutions": [
      {
        "forIngredientId": "basil-fresh",
        "swap": "Fresh oregano or flat-leaf parsley if basil is out of season",
        "savings": "Often cheaper or already on hand"
      },
      {
        "forIngredientId": "balsamic",
        "swap": "A squeeze of red-wine vinegar or lemon for the same bright acidity",
        "savings": "Pennies versus aged balsamic"
      },
      {
        "forIngredientId": "bread",
        "swap": "Any crusty loaf, ciabatta, or even a baguette end",
        "savings": "Use up bread you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 185,
      "protein": 5,
      "carbs": 26,
      "fat": 7,
      "fiber": 3
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Italian",
    "tags": [
      "appetizer",
      "antipasto",
      "vegetarian",
      "vegan",
      "summer",
      "no-cook-topping",
      "quick",
      "fresh",
      "tomato",
      "italian"
    ]
  },
  {
    "id": "cur-stuffed-shells",
    "name": "Spinach & Ricotta Stuffed Shells",
    "description": "Jumbo pasta shells filled with a creamy three-cheese ricotta filling laced with spinach and herbs, nestled in marinara and baked under bubbling mozzarella until golden. Classic Italian-American comfort food that feeds a crowd and reheats beautifully.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pasta",
        "quantity": 1,
        "note": "jumbo pasta shells (conchiglioni), ~30 shells / 12 oz box"
      },
      {
        "ingredientId": "ricotta",
        "quantity": 1,
        "note": "whole-milk ricotta, ~15 oz tub"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 1.5,
        "note": "shredded low-moisture mozzarella, divided"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.5,
        "note": "grated Parmigiano-Reggiano"
      },
      {
        "ingredientId": "frozen-spinach",
        "quantity": 1,
        "note": "thawed and squeezed very dry"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "binds the filling"
      },
      {
        "ingredientId": "marinara",
        "quantity": 1,
        "note": "~24 oz jar"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 0.3,
        "note": "chopped, plus more to garnish"
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 0.05,
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.01,
        "optional": true
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.01,
        "optional": true,
        "note": "tiny pinch, classic with ricotta + spinach"
      }
    ],
    "steps": [
      "Bring a large pot of well-salted water to a boil. Cook the jumbo shells 2 minutes less than the package directs so they stay firm enough to stuff (about 9 minutes). Drain, toss with a little oil, and lay them out in a single layer to cool.",
      "Heat the oven to 375°F (190°C). Thaw the spinach and squeeze it hard in a clean towel to remove as much water as possible, then chop it.",
      "Make the filling: in a bowl combine the ricotta, the egg, the Parmesan, about half the mozzarella, the squeezed spinach, minced garlic, chopped basil, Italian seasoning, a tiny pinch of nutmeg, and salt and pepper. Mix until smooth and well seasoned — taste it.",
      "Spread about two-thirds of the marinara across the bottom of a 9x13 baking dish so the shells won't stick.",
      "Using a spoon or piping bag, fill each shell generously with the ricotta mixture and nestle them open-side up in the sauce, packed snugly together.",
      "Spoon the remaining marinara over and between the shells, then scatter the rest of the mozzarella on top along with a pinch of red pepper flakes.",
      "Cover tightly with foil (tent it so it doesn't touch the cheese) and bake 25 minutes.",
      "Remove the foil and bake another 12–15 minutes until the cheese is melted, bubbling, and lightly golden at the edges.",
      "Let rest 5–10 minutes so the filling sets, then finish with fresh basil and serve."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "A 15 oz tub of ricotta does all the heavy lifting here — it's far cheaper per serving than meat and makes the dish feel rich.",
      "Frozen spinach is a fraction of the price of fresh and works better in the filling because you squeeze the water out anyway.",
      "Buy a block of mozzarella and shred it yourself — it's cheaper than pre-shredded and melts smoother without anti-caking starch."
    ],
    "substitutions": [
      {
        "forIngredientId": "ricotta",
        "swap": "Blended cottage cheese (drained, pulsed smooth)",
        "savings": "~30% cheaper and adds protein"
      },
      {
        "forIngredientId": "marinara",
        "swap": "Crushed tomatoes simmered with garlic, olive oil, and basil",
        "savings": "~40% cheaper than jarred sauce"
      },
      {
        "forIngredientId": "frozen-spinach",
        "swap": "Fresh spinach wilted in a pan and squeezed dry",
        "savings": "Use what's on hand; similar cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 24,
      "carbs": 42,
      "fat": 19,
      "fiber": 4
    },
    "emoji": "🐚",
    "accentColor": "bg-rose-100",
    "cuisine": "Italian-American",
    "tags": [
      "pasta",
      "baked",
      "vegetarian",
      "comfort-food",
      "cheesy",
      "make-ahead",
      "crowd-pleaser",
      "casserole"
    ]
  },
  {
    "id": "cur-pork-carnitas-tacos",
    "name": "Pork Carnitas Tacos",
    "description": "Michoacán-style carnitas: pork shoulder simmered low and slow in its own fat with orange, bay, and oregano until fork-tender, then cranked up to crisp the edges into golden, crackly bits. Piled onto warm corn tortillas with raw white onion, cilantro, and a squeeze of lime.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pork-shoulder",
        "quantity": 4,
        "note": "bone-in or boneless pork shoulder (butt), cut into 2-inch chunks"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "juiced; spent halves added to the pot"
      },
      {
        "ingredientId": "lime",
        "quantity": 2,
        "note": "1 juiced into braise, 1 cut in wedges for serving"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 1,
        "note": "half quartered for braising, half finely diced raw for topping"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves, smashed"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 2
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "1 tsp, ground"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "1 tsp, Mexican oregano if available"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.15,
        "note": "lard preferred; pork renders its own fat as it cooks"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "about 2 tsp, to taste"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 0.5,
        "note": "12 small corn tortillas (street-taco size)"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "leaves, chopped, for topping"
      }
    ],
    "steps": [
      "Pat the pork shoulder chunks dry and season all over with the salt, ground cumin, and oregano. Place them in a single layer in a heavy Dutch oven or wide pot.",
      "Add the smashed garlic, the quartered onion half, bay leaves, and the oil (or lard). Juice the orange and 1 lime over the pork, then tuck the spent orange halves into the pot. Add just enough water to come about halfway up the meat.",
      "Bring to a boil over high heat, then reduce to a bare simmer, cover partially, and cook for about 1.5 to 2 hours, stirring occasionally, until the pork is fork-tender and the water has cooked off, leaving the meat sitting in rendered fat.",
      "Discard the bay leaves, spent orange, and braised onion. Raise the heat to medium-high and let the pork fry in its own fat, undisturbed for a few minutes at a time, turning occasionally, until the edges are deeply browned and crisp (10 to 15 minutes).",
      "Using two forks, coarsely shred the pork right in the pot, tossing the shreds through the crispy bits and fat. Taste and adjust salt.",
      "Warm the corn tortillas directly over a flame or in a dry skillet until pliable and lightly charred, then stack and wrap in a towel to keep soft.",
      "Fill each tortilla with carnitas and top with finely diced raw white onion and chopped cilantro. Serve with lime wedges to squeeze over."
    ],
    "totalTimeMinutes": 135,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 120,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Pork shoulder is one of the cheapest cuts at the butcher and gets better the longer it cooks low and slow, so buy a big bone-in piece and freeze leftovers.",
      "Corn tortillas cost a fraction of flour ones and are more authentic here; a stack lasts weeks in the fridge.",
      "The rendered pork fat left in the pot is liquid gold; save it to fry eggs or potatoes instead of buying oil."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-shoulder",
        "swap": "Use boneless chicken thighs for faster, leaner carnitas-style tacos",
        "savings": "Cuts cook time roughly in half and often costs a bit less per pound"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Use a heaped spoon of lard for the most authentic flavor",
        "savings": "About the same cost; a tub of lard is cheap and lasts a long time"
      },
      {
        "forIngredientId": "orange",
        "swap": "A splash of bottled orange juice plus extra lime",
        "savings": "Saves about $0.50 versus a fresh orange"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 42,
      "carbs": 30,
      "fat": 30,
      "fiber": 5
    },
    "emoji": "🌮",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican",
    "tags": [
      "tacos",
      "pork",
      "carnitas",
      "slow-cooked",
      "street-food",
      "gluten-free",
      "dairy-free",
      "high-protein",
      "weekend"
    ]
  },
  {
    "id": "cur-chilaquiles-verdes",
    "name": "Chilaquiles Verdes",
    "description": "Crisp corn tortilla chips simmered in a bright, tangy salsa verde of charred tomatillos, serrano, onion, garlic, and cilantro, then crowned with crema, crumbled queso fresco, raw onion, and a runny fried egg. A classic Mexican brunch that turns yesterday's tortillas into something craveable.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "tortilla-chips",
        "quantity": 1,
        "note": "thick restaurant-style corn totopos, or fry your own corn tortillas"
      },
      {
        "ingredientId": "tomatillos",
        "quantity": 0.75,
        "note": "about 8-10, husked and rinsed"
      },
      {
        "ingredientId": "serrano",
        "quantity": 1,
        "note": "1-2 to taste; swap jalapeno for milder heat"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 0.5,
        "note": "half for the salsa, plus thin raw rings to garnish"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "stems blended in, leaves to garnish"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "for searing the salsa base"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 0.25,
        "note": "or chicken broth to loosen the salsa"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one per serving, fried"
      },
      {
        "ingredientId": "queso-fresco",
        "quantity": 0.25,
        "note": "crumbled"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 0.15,
        "note": "thinned to drizzle, as a stand-in for Mexican crema"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "avocado",
        "quantity": 0.5,
        "optional": true,
        "note": "sliced, to serve"
      }
    ],
    "steps": [
      "Husk and rinse the tomatillos, then add them whole to a pot with the serrano, half the onion (in a chunk), and garlic. Cover with water and simmer 8-10 minutes until the tomatillos turn olive-drab and soft but not bursting.",
      "Transfer the tomatillos, chile, onion, and garlic to a blender with the cilantro stems and a splash of the cooking water. Blend to a slightly chunky salsa and season with salt.",
      "Heat the oil in a wide skillet over medium-high until shimmering. Pour in the blended salsa (stand back, it spatters) and fry, stirring, for 4-5 minutes until it deepens in color and thickens. Loosen with the broth to a pourable, saucy consistency and taste for salt.",
      "Fry the eggs in a separate pan to your liking, keeping the yolks runny.",
      "When ready to serve, add the tortilla chips to the simmering salsa and gently fold for 30-60 seconds so they soak up sauce but stay slightly crisp at the edges. Do not let them sit, or they turn to mush.",
      "Divide the chilaquiles between two plates. Drizzle with thinned sour cream, scatter crumbled queso fresco, raw onion rings, and cilantro leaves.",
      "Top each plate with a fried egg, add avocado slices if using, and serve immediately while the chips still have bite."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Make your own totopos: cut stale corn tortillas into wedges and fry or bake until crisp. It is far cheaper than bagged chips and gives a sturdier base.",
      "Tomatillos are cheapest in season and freeze well after simmering, so blend a big batch of salsa verde and stash extra for next time.",
      "Skip the egg and double the queso fresco to keep it meatless and budget-friendly while still high in protein."
    ],
    "substitutions": [
      {
        "forIngredientId": "serrano",
        "swap": "Use a jalapeno for milder, easier-to-find heat",
        "savings": "About the same price, but more commonly stocked"
      },
      {
        "forIngredientId": "queso-fresco",
        "swap": "Crumbled feta gives a similar salty tang",
        "savings": "Often cheaper and sold everywhere"
      },
      {
        "forIngredientId": "sour-cream",
        "swap": "Thin plain Greek yogurt with a little water and salt",
        "savings": "Saves about $1 and adds protein"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 17,
      "carbs": 42,
      "fat": 28,
      "fiber": 7
    },
    "emoji": "🍳",
    "accentColor": "bg-green-100",
    "cuisine": "Mexican",
    "tags": [
      "mexican",
      "brunch",
      "salsa-verde",
      "tomatillo",
      "vegetarian",
      "comfort-food",
      "spicy"
    ]
  },
  {
    "id": "cur-pork-pozole-rojo",
    "name": "Pork Pozole Rojo",
    "description": "A soul-warming Mexican stew of tender pork shoulder and chewy hominy in a deep red broth built from rehydrated dried chiles, finished at the table with crisp cabbage, radish, oregano, and lime. The kind of pozole that anchors a Sunday or a fiesta.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pork-shoulder",
        "quantity": 6,
        "note": "bone-in if possible, cut into 2-inch chunks"
      },
      {
        "ingredientId": "hominy-canned",
        "quantity": 2,
        "note": "white hominy, drained and rinsed (about two 25 oz cans)"
      },
      {
        "ingredientId": "dried-chili",
        "quantity": 0.5,
        "note": "6 guajillo chiles, stemmed and seeded"
      },
      {
        "ingredientId": "ancho-chili-powder",
        "quantity": 0.4,
        "note": "stand-in for 3 whole ancho chiles, stemmed and seeded"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 1.5,
        "note": "half for the broth, the rest diced for garnish"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "about 6 cloves"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "Mexican oregano if you can find it"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1,
        "note": "2 leaves"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "cabbage",
        "quantity": 0.5,
        "note": "thinly shredded, for garnish"
      },
      {
        "ingredientId": "radish",
        "quantity": 0.5,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 3,
        "note": "cut into wedges, for garnish"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "optional": true,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "tortilla-chips",
        "quantity": 0.5,
        "optional": true,
        "note": "or warm corn tostadas on the side"
      }
    ],
    "steps": [
      "Put the pork shoulder, half a white onion (left in one chunk), the garlic cloves, bay leaves, and a big pinch of salt in a large pot. Cover with about 10 cups of cold water and bring to a boil, skimming off any gray foam that rises. Lower to a gentle simmer, cover partially, and cook 1.5 to 2 hours until the pork is fork-tender.",
      "While the pork simmers, make the chile sauce. Wipe the guajillo chiles, tear them open, and remove stems and seeds. Toast them in a dry skillet over medium heat for 20 to 30 seconds per side until fragrant and pliable, being careful not to scorch them (burnt chiles turn bitter).",
      "Cover the toasted guajillos with hot water and soak 15 to 20 minutes until soft and leathery. Reserve a cup of the soaking liquid.",
      "Drain the chiles and blend them with the ancho chili powder, cumin, a clove of garlic, half a teaspoon of salt, and enough soaking liquid to make a smooth, pourable sauce. Push the sauce through a fine sieve to catch any tough skins, leaving a silky red puree.",
      "When the pork is tender, lift it out, discard the onion and bay leaves, and pull or chop the meat into bite-size pieces, discarding bones. Skim excess fat from the broth and keep the broth in the pot.",
      "Pour the strained chile sauce into the broth through the sieve and stir. Add the shredded pork and the drained hominy. Crumble in the Mexican oregano, rubbing it between your palms to release its oils.",
      "Simmer everything uncovered for 25 to 30 minutes so the flavors marry and the broth turns a deep brick red. Taste and adjust salt; the broth should be rich and a touch spicy.",
      "Set out bowls of shredded cabbage, sliced radish, diced onion, chopped cilantro, and lime wedges. Ladle the hot pozole into bowls and let everyone garnish their own, finishing with a generous squeeze of lime. Serve with tortilla chips or tostadas on the side."
    ],
    "totalTimeMinutes": 165,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 135,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in pork shoulder is one of the cheapest cuts at the butcher and the bones add body to the broth for free; buy a whole roast and cube it yourself instead of pre-cut stew meat.",
      "Canned hominy keeps this affordable and weeknight-friendly, but a bag of dried whole hominy (nixtamal) costs even less per serving if you simmer it ahead.",
      "Pozole reheats beautifully and tastes even better the next day, so make the full batch and stretch it across several meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-shoulder",
        "swap": "Bone-in chicken thighs and drumsticks for a quicker pozole rojo de pollo",
        "savings": "Saves about $4 on the batch and cuts simmer time roughly in half"
      },
      {
        "forIngredientId": "dried-chili",
        "swap": "A few tablespoons of pure ancho or guajillo chili powder bloomed in a little broth",
        "savings": "Saves around $2 and skips the toast-and-soak step"
      },
      {
        "forIngredientId": "hominy-canned",
        "swap": "Dried hominy soaked and simmered until tender, or pinto beans in a pinch",
        "savings": "Saves about $1.50 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 34,
      "carbs": 28,
      "fat": 20,
      "fiber": 6
    },
    "emoji": "🍲",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "pozole",
      "mexican",
      "pork",
      "stew",
      "hominy",
      "soup",
      "gluten-free",
      "comfort-food",
      "party"
    ]
  },
  {
    "id": "cur-fresh-guacamole",
    "name": "Fresh Guacamole",
    "description": "Chunky, bright Mexican-style guacamole built the traditional way: ripe Hass avocados mashed coarsely and balanced with lime, raw onion, serrano heat, cilantro, and tomato. No mayo, no cumin overload, no muddy purée. It comes together in ten minutes and tastes like it was made tableside.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "avocado",
        "quantity": 3,
        "note": "ripe Hass avocados, halved and pitted"
      },
      {
        "ingredientId": "lime",
        "quantity": 1.5,
        "note": "juiced, about 2 tbsp"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.25,
        "note": "finely diced, about 1/4 cup"
      },
      {
        "ingredientId": "serrano",
        "quantity": 1,
        "note": "seeded and minced; use 2 for more heat"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.25,
        "note": "leaves and tender stems, chopped, about 1/4 cup"
      },
      {
        "ingredientId": "tomato",
        "quantity": 0.5,
        "note": "Roma, seeded and diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "1 clove, grated to a paste",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "kosher salt, to taste"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.1,
        "optional": true,
        "note": "tiny pinch, optional"
      }
    ],
    "steps": [
      "Finely dice the red onion, mince the seeded serrano, and chop the cilantro. Seed and dice the Roma tomato and set it aside separately.",
      "Optionally, put the onion, serrano, a pinch of salt, and the grated garlic in the bottom of a molcajete or bowl and grind/mash briefly into a rough paste to mellow the raw onion bite.",
      "Halve and pit the avocados, scoop the flesh into the bowl, and add the lime juice and salt right away so the avocado doesn't brown.",
      "Mash with a fork or pestle to a chunky texture; leave plenty of avocado pieces intact rather than making a smooth purée.",
      "Fold in the cilantro and the optional tiny pinch of cumin, then gently stir in the diced tomato last so it stays intact.",
      "Taste and adjust: add more lime for brightness, more salt for depth, or more serrano for heat. Serve immediately with tortilla chips, pressing plastic wrap directly onto the surface if holding."
    ],
    "totalTimeMinutes": 10,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy avocados firm a few days ahead and ripen on the counter; they're far cheaper than pre-ripened ones and you control the timing.",
      "Press the avocado pit back into leftovers and cover with plastic wrap touching the surface to slow browning, or float a thin layer of lime juice on top.",
      "A whole lime juiced fresh costs pennies and beats bottled juice on flavor; one large lime usually covers the whole batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "serrano",
        "swap": "jalapeno (milder, more common)",
        "savings": "Often cheaper and easier to find; use 1 whole seeded jalapeño"
      },
      {
        "forIngredientId": "lime",
        "swap": "bottled lime juice",
        "savings": "Saves ~$0.30 and lasts in the fridge for weeks"
      },
      {
        "forIngredientId": "red-onion",
        "swap": "white onion",
        "savings": "Slightly cheaper and more traditional in Mexican guacamole"
      }
    ],
    "estimatedNutrition": {
      "calories": 170,
      "protein": 2,
      "carbs": 10,
      "fat": 15,
      "fiber": 7
    },
    "emoji": "🥑",
    "accentColor": "bg-green-100",
    "cuisine": "Mexican",
    "tags": [
      "dip",
      "no-cook",
      "party",
      "5-ingredient",
      "fresh",
      "avocado",
      "vegan",
      "gluten-free",
      "snack"
    ]
  },
  {
    "id": "cur-chicken-pad-thai",
    "name": "Chicken Pad Thai",
    "description": "The real-deal Bangkok street-cart noodle stir-fry: chewy rice noodles tossed in a sweet-sour-savory tamarind sauce with chicken, scrambled egg, crisp bean sprouts, and a finish of crushed peanuts and lime. The secret is a screaming-hot wok, a proper tamarind-fish sauce-palm sugar balance, and tossing fast so the noodles never turn to mush.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "rice-noodles",
        "quantity": 2,
        "note": "flat 5mm pad thai noodles, soaked in warm water until pliable"
      },
      {
        "ingredientId": "chicken-breast",
        "quantity": 2,
        "note": "sliced thin against the grain"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "tamarind",
        "quantity": 0.25,
        "note": "tamarind concentrate/paste, about 2 tbsp"
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 0.15,
        "note": "about 2.5 tbsp"
      },
      {
        "ingredientId": "palm-sugar",
        "quantity": 0.2,
        "note": "about 2 tbsp, brown sugar works too"
      },
      {
        "ingredientId": "bean-sprouts",
        "quantity": 0.4,
        "note": "half raw, half tossed at the end"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5,
        "note": "cut into 2-inch batons"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.1,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "shallot",
        "quantity": 1,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "peanuts",
        "quantity": 0.15,
        "note": "roasted, coarsely crushed"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "cut into wedges for serving"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.05,
        "note": "for the wok"
      },
      {
        "ingredientId": "dried-shrimp",
        "quantity": 0.05,
        "optional": true,
        "note": "chopped, for traditional umami"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.02,
        "optional": true,
        "note": "Thai chili flakes for serving"
      }
    ],
    "steps": [
      "Soak the rice noodles in warm (not boiling) water for 20-30 minutes until pliable but still firm with a slight bite, then drain well. They will finish cooking in the wok, so do not let them go fully soft.",
      "Make the sauce: whisk the tamarind paste, fish sauce, and palm sugar together until the sugar dissolves. Taste and adjust until it is balanced sweet, sour, and salty all at once.",
      "Heat a wok or large skillet over the highest heat until smoking, add the oil, then sear the sliced chicken until just cooked through and lightly browned. Push it to one side.",
      "Add the garlic, shallot, and dried shrimp (if using) to the empty side and stir-fry 20-30 seconds until fragrant.",
      "Add the drained noodles and pour in the sauce. Toss constantly so the noodles absorb the sauce and soften, adding a splash of water if they look dry, until they are tender and chewy.",
      "Push everything aside, crack in the eggs, scramble them lightly until just set, then fold them through the noodles.",
      "Turn off the heat and toss in half the bean sprouts, the scallion batons, and half the crushed peanuts so the sprouts stay crisp.",
      "Plate immediately and top with the remaining raw bean sprouts, crushed peanuts, Thai chili flakes, and a lime wedge to squeeze over at the table."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 12,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Tamarind paste keeps for months in the fridge and a single jar makes many batches, so the per-serving cost is tiny.",
      "Use chicken thighs instead of breast for cheaper, juicier meat that stays tender at high wok heat.",
      "Buy bean sprouts the day you cook and skip the dried shrimp if you want to save money without losing much flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "tamarind",
        "swap": "Equal parts lime juice and brown sugar (or a splash of rice vinegar)",
        "savings": "Avoids buying a specialty jar, ~$3 saved"
      },
      {
        "forIngredientId": "palm-sugar",
        "swap": "Brown sugar, measure for measure",
        "savings": "~$2 cheaper and likely already in the pantry"
      },
      {
        "forIngredientId": "chicken-breast",
        "swap": "Firm tofu or shrimp",
        "savings": "Tofu is ~$1.50 cheaper per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 590,
      "protein": 38,
      "carbs": 72,
      "fat": 17,
      "fiber": 4
    },
    "emoji": "🍜",
    "accentColor": "bg-orange-100",
    "cuisine": "Thai",
    "tags": [
      "thai",
      "noodles",
      "stir-fry",
      "street-food",
      "high-protein",
      "dairy-free",
      "wok",
      "chicken"
    ]
  },
  {
    "id": "cur-chicken-lo-mein",
    "name": "Chicken Lo Mein",
    "description": "Springy egg noodles tossed in a glossy soy-and-oyster-sauce glaze with velveted chicken, crisp-tender cabbage, carrot, and mushroom. Real lo mein is all about the toss over high heat so every strand stays slick and savory.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "egg-noodles",
        "quantity": 4,
        "note": "fresh or dried lo mein / Hong Kong egg noodles, ~12 oz total"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 3,
        "note": "boneless skinless, sliced thin against the grain"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "2 tsp to velvet the chicken plus 1 tsp to thicken the sauce"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "3 tbsp total, split between marinade and sauce"
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 1,
        "note": "1 tbsp, for color and depth"
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 1,
        "note": "2 tsp, added off heat"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 tsp to balance"
      },
      {
        "ingredientId": "rice-wine",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp Shaoxing wine for the marinade"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.3,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.15,
        "note": "1 tbsp, minced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5,
        "note": "4 scallions, whites and greens separated"
      },
      {
        "ingredientId": "cabbage",
        "quantity": 0.25,
        "note": "about 2 cups thinly sliced; napa or green"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "1 large, julienned"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.5,
        "note": "about 1 cup sliced; or cremini"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "2 tbsp for stir-frying"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 1,
        "note": "pinch"
      }
    ],
    "steps": [
      "Slice the chicken thighs thin against the grain. Toss with 1 tbsp soy sauce, 1 tsp cornstarch, the optional Shaoxing wine, and a pinch of white pepper. Let marinate 15 minutes while you prep everything else.",
      "Mix the sauce in a small bowl: remaining 2 tbsp soy sauce, dark soy, oyster sauce, sugar, remaining 1 tsp cornstarch, and 3 tbsp water. Stir until smooth and set aside.",
      "Bring a large pot of water to a boil and cook the egg noodles until just shy of tender (about 1 minute less than the package says). Drain, rinse briefly under cold water to stop cooking, and toss with a few drops of sesame oil so they don't clump.",
      "Heat 1 tbsp vegetable oil in a wok or large skillet over high heat until shimmering. Add the chicken in a single layer, sear undisturbed 1 minute, then stir-fry until just cooked through, 2 to 3 minutes. Remove to a plate.",
      "Add the remaining 1 tbsp oil. Stir-fry the garlic, ginger, and scallion whites for 20 seconds until fragrant, then add carrots and shiitake and cook 1 minute. Add the cabbage and stir-fry until crisp-tender, about 2 minutes.",
      "Return the chicken to the wok, add the noodles, and pour the sauce over the top. Toss continuously with tongs over high heat until the sauce thickens and coats every strand, about 1 to 2 minutes.",
      "Turn off the heat. Drizzle in the toasted sesame oil and toss in the scallion greens. Taste, adjust with a splash of soy if needed, and serve immediately."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Boneless thighs cost less than breast and stay juicy under high-heat stir-frying.",
      "Use whatever crunchy veg you have on hand: cabbage, carrot, celery, and onion all work and stretch the dish cheaply.",
      "A 12 oz pack of dried egg noodles feeds four for the price of one takeout box and keeps in the pantry for months."
    ],
    "substitutions": [
      {
        "forIngredientId": "egg-noodles",
        "swap": "Spaghetti boiled with a pinch of baking soda in the water (mimics the alkaline bounce of lo mein noodles)",
        "savings": "Saves ~$1.50 if you keep spaghetti as a pantry staple"
      },
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Firm tofu, pressed and cubed, for a vegetarian version",
        "savings": "Saves ~$2.00 per batch"
      },
      {
        "forIngredientId": "oyster-sauce",
        "swap": "Hoisin plus an extra splash of soy sauce",
        "savings": "Saves ~$0.50 and works if you already stock hoisin"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 31,
      "carbs": 58,
      "fat": 13,
      "fiber": 4
    },
    "emoji": "🍜",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese American",
    "tags": [
      "noodles",
      "stir-fry",
      "chicken",
      "takeout-at-home",
      "weeknight",
      "wok"
    ]
  },
  {
    "id": "cur-pork-pot-stickers",
    "name": "Pork Pot Stickers",
    "description": "Pan-fried pork and napa cabbage dumplings (guo tie) with a juicy ginger-scallion filling, crackly golden bottoms, and a steamed pleated top. Served with a black vinegar and soy dipping sauce.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "dumpling-wrappers",
        "quantity": 1.2,
        "note": "round dumpling/gyoza wrappers, about 40 wrappers"
      },
      {
        "ingredientId": "ground-pork",
        "quantity": 1,
        "note": "about 1 lb, ideally ~20% fat for juicy filling"
      },
      {
        "ingredientId": "napa-cabbage",
        "quantity": 0.3,
        "note": "about 3 cups finely chopped, salted and squeezed dry"
      },
      {
        "ingredientId": "scallion",
        "quantity": 4,
        "note": "finely minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "1 tbsp finely grated"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "2 cloves, grated"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "1 tbsp in filling, 1 tbsp in dipping sauce"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "toasted, for the filling"
      },
      {
        "ingredientId": "rice-wine",
        "quantity": 1,
        "note": "1 tbsp Shaoxing wine if available"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "1 tsp in filling to bind juices; plus a slurry for the lacy crust"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 1,
        "note": "pinch, for the filling",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "for salting cabbage and seasoning filling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1/2 tsp filling, 1/2 tsp dipping sauce",
        "optional": true
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "for pan-frying"
      },
      {
        "ingredientId": "black-vinegar",
        "quantity": 1,
        "note": "Chinkiang black vinegar for the dipping sauce"
      },
      {
        "ingredientId": "chili-crisp",
        "quantity": 1,
        "note": "for the dipping sauce",
        "optional": true
      }
    ],
    "steps": [
      "Finely chop the napa cabbage, toss with 1 tsp salt, and let sit 15 minutes. Wrap in a clean towel and squeeze out as much liquid as possible — this is the key to a non-soggy filling.",
      "In a bowl, combine ground pork, grated ginger, garlic, minced scallion, 1 tbsp soy sauce, sesame oil, rice wine, 1 tsp cornstarch, white pepper, 1/2 tsp sugar, and 1/2 tsp salt. Stir vigorously in one direction for 2-3 minutes until the filling turns sticky and pasty, then fold in the squeezed cabbage.",
      "Place a heaping teaspoon of filling in the center of a wrapper. Wet the edge with water, fold in half, and pleat one side toward the center, pressing firmly to seal into a crescent that sits flat. Repeat with remaining wrappers, keeping them under a damp towel.",
      "Heat 1 tbsp vegetable oil in a nonstick or cast-iron skillet over medium-high. Arrange the pot stickers flat-side down in a tight pinwheel and fry undisturbed 2-3 minutes until the bottoms are deep golden brown.",
      "Stir 1 tsp cornstarch into 1/2 cup water and pour into the hot pan, then immediately cover. Steam over medium heat 6-7 minutes until the water is nearly gone and the wrappers are translucent and cooked through.",
      "Uncover, add a small drizzle of oil, and let the remaining slurry crisp into a lacy golden crust, about 1-2 minutes, until the bottoms release cleanly.",
      "Invert onto a plate crust-side up. Whisk together 1 tbsp soy sauce, black vinegar, 1/2 tsp sugar, and chili crisp to taste for the dipping sauce.",
      "Serve hot with the dipping sauce alongside."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Ground pork shoulder is one of the cheapest proteins and its fat keeps the filling juicy — don't buy lean.",
      "Make a double batch and freeze the extras raw on a tray, then bag them; cook straight from frozen with a couple extra minutes of steaming.",
      "Napa cabbage is sold cheap by the head; use the rest in a quick stir-fry or soup so nothing is wasted."
    ],
    "substitutions": [
      {
        "forIngredientId": "dumpling-wrappers",
        "swap": "Make your own from flour and hot water, or use wonton-wrappers trimmed to rounds",
        "savings": "Saves about $2 per batch over store-bought rounds"
      },
      {
        "forIngredientId": "ground-pork",
        "swap": "Ground chicken or ground turkey with an extra teaspoon of sesame oil for moisture",
        "savings": "Saves around $1.50/lb when pork is pricey"
      },
      {
        "forIngredientId": "black-vinegar",
        "swap": "Rice vinegar with a tiny pinch of brown sugar",
        "savings": "Uses a pantry staple instead of a specialty bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 22,
      "carbs": 44,
      "fat": 17,
      "fiber": 3
    },
    "emoji": "🥟",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "dumplings",
      "pan-fried",
      "pork",
      "guo tie",
      "potstickers",
      "dinner",
      "freezer-friendly"
    ]
  },
  {
    "id": "cur-beef-bulgogi",
    "name": "Beef Bulgogi",
    "description": "Korea's beloved marinated grilled beef — thin slices of sirloin steeped in a sweet-savory soy, garlic, ginger, and grated-pear marinade, then seared hard and fast until the edges caramelize. Smoky, glossy, and built for piling over rice with a sprinkle of sesame.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "beef-sirloin",
        "quantity": 4,
        "note": "ribeye or sirloin, freezer-firmed and sliced paper-thin against the grain"
      },
      {
        "ingredientId": "pear",
        "quantity": 0.5,
        "note": "Korean or Asian pear, peeled and grated (natural tenderizer)"
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 5,
        "note": "tablespoons soy sauce"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2,
        "note": "tablespoons (or palm sugar)"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "tablespoon, for gloss and balance"
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 1,
        "note": "tablespoon"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.25,
        "note": "5 cloves, grated or minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "1-inch knob, grated"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5,
        "note": "3-4 stalks, cut into 2-inch lengths"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.5,
        "note": "freshly ground"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "for high-heat searing"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "toasted, to garnish"
      },
      {
        "ingredientId": "rice-wine",
        "quantity": 1,
        "optional": true,
        "note": "mirin or rice wine, optional for extra depth"
      }
    ],
    "steps": [
      "Firm the sirloin in the freezer for 30-45 minutes, then slice it against the grain as thinly as you possibly can — paper-thin slices are what make bulgogi tender and quick-cooking.",
      "Make the marinade: in a bowl whisk together the grated pear, soy sauce, brown sugar, honey, sesame oil, grated garlic, grated ginger, black pepper, and the optional rice wine until the sugar dissolves.",
      "Add the sliced beef, sliced onion, and scallions to the marinade and toss with your hands so every piece is coated. Cover and marinate at least 30 minutes, ideally 2-4 hours in the fridge.",
      "Heat a large cast-iron skillet or wide pan over high heat until it just starts to smoke, then add the vegetable oil.",
      "Working in batches so the pan stays screaming hot, add the beef in a single layer — do not crowd it, or it will steam instead of sear.",
      "Let each batch sear undisturbed for about 60-90 seconds to caramelize, then toss and cook another minute until the edges are browned and the marinade glazes the meat.",
      "Transfer each finished batch to a plate and repeat with the rest, scraping up any caramelized bits between rounds.",
      "Pile the bulgogi over hot rice, scatter with toasted sesame seeds and extra scallion, and serve immediately with kimchi and lettuce leaves for wrapping."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 10,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole sirloin or chuck steak and slice it yourself — pre-sliced 'bulgogi meat' costs a premium for the same cut.",
      "Freeze the beef for 30-45 minutes before slicing; semi-frozen meat is far easier to cut paper-thin and you waste nothing.",
      "No Asian pear? A grated ripe Bosc pear or even a few tablespoons of grated apple tenderizes just as well for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "beef-sirloin",
        "swap": "Thinly sliced beef chuck or skirt steak",
        "savings": "~$3-4/lb cheaper while staying tender if sliced thin against the grain"
      },
      {
        "forIngredientId": "pear",
        "swap": "Grated apple or 1 tbsp kiwi puree",
        "savings": "Saves the cost of a specialty Asian pear"
      },
      {
        "forIngredientId": "toasted-sesame-oil",
        "swap": "Regular sesame oil with a pinch extra at the end",
        "savings": "A few cents per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 30,
      "carbs": 14,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🥩",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "korean",
      "beef",
      "grilled",
      "marinated",
      "high-protein",
      "weeknight",
      "dairy-free",
      "rice-bowl",
      "bbq"
    ]
  },
  {
    "id": "cur-general-tsos-chicken",
    "name": "General Tso's Chicken",
    "description": "Crispy cornstarch-coated dark-meat chicken tossed in a glossy sweet-savory-spicy sauce with toasted dried chiles, garlic, and ginger. The Chinese-American takeout classic done right at home, with shatter-crisp chicken that holds up against the sticky sauce.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless, cut into 1-inch chunks"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.6,
        "note": "for coating and slurry; ~3/4 cup total"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "for the coating batter"
      },
      {
        "ingredientId": "low-sodium-soy",
        "quantity": 0.25,
        "note": "3 tbsp split between marinade and sauce"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 0.15,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.2,
        "note": "3 tbsp"
      },
      {
        "ingredientId": "hoisin",
        "quantity": 0.12,
        "note": "1.5 tbsp"
      },
      {
        "ingredientId": "sake",
        "quantity": 0.1,
        "optional": true,
        "note": "1 tbsp Shaoxing wine if available; sake is the closest catalog match"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.3,
        "note": "1/2 cup for the sauce"
      },
      {
        "ingredientId": "dried-chili",
        "quantity": 0.5,
        "note": "6-8 whole dried red chiles, stems trimmed"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.12,
        "note": "4 cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.12,
        "note": "1 tbsp fresh, minced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.4,
        "note": "3 stalks, white and green parts separated"
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 0.05,
        "note": "1 tsp to finish"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.5,
        "note": "for frying"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.05,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Cut the chicken thighs into 1-inch chunks. Toss with 1 tbsp soy sauce and 1 tbsp Shaoxing wine (or sake) and let marinate 15 minutes while you prep everything else.",
      "Whisk together the sauce: in a small bowl combine remaining 2 tbsp soy sauce, rice vinegar, sugar, hoisin, chicken broth, and 1 tbsp cornstarch. Stir until the cornstarch fully dissolves and set aside.",
      "Add the beaten egg to the marinated chicken, then add about 1/2 cup cornstarch a little at a time, tossing until each piece is coated in a thick, dry-ish paste that clings.",
      "Heat 1 inch of vegetable oil in a wok or deep skillet to 350F. Fry the chicken in 2-3 batches, 4-5 minutes per batch, until golden and crisp; drain on a rack. Optionally raise heat to 375F and flash-fry everything 60 seconds more for extra crunch.",
      "Pour off all but 1 tbsp oil. Over medium heat, add the dried chiles and toast 20-30 seconds until fragrant and a shade darker (don't let them burn black).",
      "Add the minced garlic, ginger, and scallion whites; stir-fry 30 seconds until aromatic.",
      "Give the sauce a quick re-stir and pour it in. Bring to a simmer and cook 1-2 minutes until it turns glossy and thick enough to coat a spoon.",
      "Add the fried chicken and toss quickly to coat every piece, about 30 seconds, just until the sauce clings and the chicken is heated through.",
      "Kill the heat, drizzle with toasted sesame oil, and toss with the scallion greens. Garnish with sesame seeds and serve immediately over steamed rice."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Boneless thighs are cheaper than breast, stay juicier under high-heat frying, and are the traditional cut for this dish.",
      "Strain and save the frying oil in a jar; once cooled it's reusable for the next 2-3 stir-fries or fry sessions.",
      "Skip whole dried chiles and use 1/2 tsp red pepper flakes you likely already have — same heat for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Boneless skinless chicken breast, cut into chunks (fry 1 minute less so it stays tender)",
        "savings": "Roughly the same cost; use what's on sale"
      },
      {
        "forIngredientId": "rice-vinegar",
        "swap": "Apple cider vinegar or plain white vinegar cut with a pinch of sugar",
        "savings": "Saves ~$2 vs buying specialty rice vinegar"
      },
      {
        "forIngredientId": "hoisin",
        "swap": "1 tbsp ketchup + splash of soy sauce for body and sweetness",
        "savings": "Saves ~$3 if you don't keep hoisin on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 34,
      "carbs": 38,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese-American",
    "tags": [
      "takeout-classic",
      "fried",
      "sweet-and-spicy",
      "stir-fry",
      "dinner",
      "crowd-pleaser"
    ]
  },
  {
    "id": "cur-crispy-falafel",
    "name": "Crispy Falafel",
    "description": "Shatteringly crisp, herb-flecked falafel made the real way — from soaked dried chickpeas (never canned) blitzed with parsley, cilantro, onion, garlic and warm spices, then fried until deep golden and fluffy inside. Pile into pita with tahini sauce or eat them straight.",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chickpeas",
        "quantity": 2,
        "note": "DRIED chickpeas, soaked 18-24h — NOT canned/cooked (canned falafel falls apart)"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "small, roughly chopped"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "cloves"
      },
      {
        "ingredientId": "parsley",
        "quantity": 0.5,
        "note": "large bunch flat-leaf, leaves + tender stems"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 0.4,
        "note": "bunch, leaves + tender stems"
      },
      {
        "ingredientId": "cumin",
        "quantity": 2,
        "note": "tsp, ideally ground from toasted seeds"
      },
      {
        "ingredientId": "coriander",
        "quantity": 1.5,
        "note": "tsp ground"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.25,
        "note": "tsp, optional heat"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 0.25,
        "note": "tsp ground, optional warm note"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "tsp"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.5,
        "note": "tsp"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "tbsp chickpea or AP flour, only if mix is loose"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "tsp, stir in just before frying for fluffiness"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "tbsp, pressed onto patties for extra crunch"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.4,
        "note": "for deep frying, ~3-4 cups; reusable"
      },
      {
        "ingredientId": "tahini",
        "quantity": 0.4,
        "note": "for sauce"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced, for tahini sauce"
      }
    ],
    "steps": [
      "The day before: cover the dried chickpeas with plenty of cold water and soak 18-24 hours until fully doubled and split-tender when pressed. Do NOT use canned or cooked chickpeas — they hold too much water and the falafel will disintegrate. Drain very well and pat dry.",
      "In a food processor, pulse the onion, garlic, parsley, and cilantro until finely minced but not pureed, scraping down the sides. Add the drained raw chickpeas, cumin, coriander, cayenne, cardamom, salt, and black pepper.",
      "Pulse in short bursts until the mixture looks like coarse, damp sand that clumps when squeezed — fine enough to hold together but still slightly textured. Don't over-process into a paste. If it feels wet, pulse in the flour.",
      "Transfer to a bowl, cover, and chill at least 1 hour (up to overnight) so it firms up and the flavors bloom.",
      "Just before frying, sprinkle the baking soda over the mix and fold it in — this gives a light, fluffy interior. Scoop and press into 1.5-inch balls or slightly flattened patties; if the seams crack, squeeze a bit tighter. Optionally press sesame seeds onto the tops.",
      "Heat 1.5 inches of oil in a deep pot to 350F (175C). Whisk the tahini with lemon juice, a pinch of salt, and cold water a tablespoon at a time until it loosens into a pourable, creamy sauce.",
      "Fry the falafel in batches, without crowding, for 3-4 minutes, turning once, until deep mahogany-brown and crisp all over. Test one first — if it breaks apart, work in a little more flour; if dense, add a touch more baking soda.",
      "Drain on a wire rack or paper towels and season with a pinch of salt while hot. Serve immediately with the lemon-tahini sauce — they're best within minutes of frying."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Dried chickpeas are a fraction of the price of canned and are the only correct choice here — a single bag yields several batches.",
      "Strain and reuse the frying oil two or three times; let it cool, pour through a coffee filter, and store in a jar.",
      "Buy parsley and cilantro as whole bunches rather than packaged herbs, and freeze any leftover falafel mix raw for a future batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "cilantro",
        "swap": "Use all parsley if you dislike cilantro, or add a handful of fresh dill",
        "savings": "Skips one herb bunch, ~$1"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Bake or air-fry at 375F brushed with oil for a lighter version",
        "savings": "Uses a few tablespoons instead of a quart, ~$2"
      },
      {
        "forIngredientId": "cardamom",
        "swap": "Omit, or use a pinch of cinnamon for warmth",
        "savings": "Negligible, ~$0"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 16,
      "carbs": 42,
      "fat": 21,
      "fiber": 11
    },
    "emoji": "🧆",
    "accentColor": "bg-emerald-100",
    "cuisine": "Middle Eastern",
    "tags": [
      "falafel",
      "vegan",
      "vegetarian",
      "middle-eastern",
      "street-food",
      "chickpea",
      "fried",
      "high-protein",
      "herby"
    ]
  },
  {
    "id": "cur-chicken-gyros",
    "name": "Chicken Gyros",
    "description": "Greek-style chicken gyros: thighs marinated in yogurt, lemon, garlic and oregano, seared until charred and juicy, then piled into warm pita with cool tzatziki, tomato, red onion and a few fries. Big, garlicky, bright Mediterranean flavor from a humble weeknight setup.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless thighs"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.6,
        "note": "split: most for marinade, rest for tzatziki"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 5,
        "note": "cloves, divided between marinade and tzatziki"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.18,
        "note": "for marinade and pan"
      },
      {
        "ingredientId": "oregano",
        "quantity": 0.5,
        "note": "dried Greek oregano"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.25
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.2
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.1
      },
      {
        "ingredientId": "pita",
        "quantity": 4,
        "note": "thick Greek-style pita"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 0.5,
        "note": "for tzatziki"
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 0.25,
        "note": "or mint, for tzatziki"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "sliced, to fill"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.4,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "frozen-fries",
        "quantity": 0.3,
        "optional": true,
        "note": "traditional gyro filling"
      }
    ],
    "steps": [
      "Make the marinade: in a bowl whisk about two-thirds of the Greek yogurt with olive oil, the juice of half the lemon, 3 grated garlic cloves, the oregano, paprika, cumin, salt and pepper. Add the chicken thighs and turn to coat, then marinate at least 30 minutes (overnight is better).",
      "Make the tzatziki: grate the cucumber, squeeze out as much water as you can, then stir it into the remaining yogurt with 2 grated garlic cloves, chopped dill, a splash of olive oil, the juice of the other lemon half, and a pinch of salt. Chill until needed.",
      "If using fries, bake or air-fry them per package directions so they are ready when the chicken is done.",
      "Heat a heavy skillet or grill pan over medium-high with a thin film of oil. Scrape excess marinade off the thighs and lay them in the hot pan in a single layer.",
      "Sear undisturbed 5 to 6 minutes until deeply browned and charred at the edges, then flip and cook another 4 to 5 minutes until the chicken reaches 165F and is cooked through.",
      "Rest the chicken a few minutes, then slice into thin strips on a diagonal to mimic shaved gyro meat.",
      "Warm the pitas: brush lightly with oil and toast 30 to 60 seconds per side in the hot pan until soft and puffed.",
      "Build each gyro: smear tzatziki down the center of a warm pita, add sliced chicken, tomato, red onion and a few fries, top with more tzatziki, then fold and serve."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Boneless thighs are cheaper than breast and stay juicy under high-heat searing, perfect for gyro-style char.",
      "Make the tzatziki and marinade from one tub of Greek yogurt to avoid buying two dairy items.",
      "Skip the optional fries and stretch the meal with extra pita, onion and tomato to cut cost per serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use boneless chicken breast, pounded thin, if that's what you have",
        "savings": "about the same"
      },
      {
        "forIngredientId": "pita",
        "swap": "Wrap in flour tortillas or naan instead",
        "savings": "save ~$1"
      },
      {
        "forIngredientId": "dill-fresh",
        "swap": "Use dried dill or fresh mint from the marinade herbs",
        "savings": "save ~$1.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 42,
      "carbs": 45,
      "fat": 22,
      "fiber": 4
    },
    "emoji": "🥙",
    "accentColor": "bg-sky-100",
    "cuisine": "Greek",
    "tags": [
      "greek",
      "mediterranean",
      "chicken",
      "wrap",
      "tzatziki",
      "high-protein",
      "dinner"
    ]
  },
  {
    "id": "cur-beef-kofta",
    "name": "Beef Kofta",
    "description": "Juicy Middle Eastern spiced ground beef kofta — grated onion, fresh parsley, garlic, and a warm cumin-coriander-cinnamon-allspice blend kneaded into the meat, shaped onto skewers and broiled until charred at the edges. Serve with pita, tzatziki, and a squeeze of lemon.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 4,
        "note": "80/20 ground beef; ground lamb or a 50/50 beef-lamb mix is even more traditional"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.75,
        "note": "finely grated, then squeezed of excess liquid"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "3 cloves, finely minced or grated"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.5,
        "note": "about 1/2 cup finely chopped flat-leaf parsley"
      },
      {
        "ingredientId": "cumin",
        "quantity": 2,
        "note": "2 tsp ground cumin"
      },
      {
        "ingredientId": "coriander",
        "quantity": 1.5,
        "note": "1.5 tsp ground coriander"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1.5,
        "note": "1.5 tsp; sweet or smoked"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "1/2 tsp ground cinnamon"
      },
      {
        "ingredientId": "allspice",
        "quantity": 0.5,
        "note": "1/2 tsp ground allspice"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.25,
        "optional": true,
        "note": "pinch, for heat"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1.5 tsp kosher salt"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.5,
        "note": "1/2 tsp black pepper"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "1 tbsp, plus more for brushing"
      },
      {
        "ingredientId": "pita",
        "quantity": 0.5,
        "note": "warmed, for serving"
      },
      {
        "ingredientId": "tzatziki",
        "quantity": 0.25,
        "optional": true,
        "note": "for serving"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "cut into wedges, for serving"
      }
    ],
    "steps": [
      "Grate the onion on the large holes of a box grater, then squeeze it hard in your hands or a clean towel to remove the excess liquid — wet onion makes the kofta steam apart instead of binding.",
      "In a large bowl, combine the ground beef, squeezed grated onion, minced garlic, chopped parsley, cumin, coriander, paprika, cinnamon, allspice, optional cayenne, salt, and black pepper.",
      "Knead the mixture firmly with your hands for 3 to 5 minutes until it turns slightly sticky and tacky — this develops the protein bind so the kofta holds its shape. Cover and chill at least 30 minutes (this also makes shaping easier).",
      "Divide into 8 portions. With damp hands, mold each around a flat metal skewer into a 5-inch log, or shape into oval patties if cooking without skewers. Brush lightly with olive oil.",
      "Set an oven rack about 6 inches below the broiler and preheat the broiler to high. Line a sheet pan with foil and set a wire rack on top.",
      "Broil the kofta for 5 to 6 minutes, then flip and broil another 4 to 6 minutes, until well browned and charred at the edges and cooked through (160F internal).",
      "Let rest 3 to 4 minutes, then serve hot with warm pita, tzatziki, and lemon wedges to squeeze over the top."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 12,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Grating and squeezing the onion stretches the meat and keeps the kofta moist, so a single pound of beef comfortably feeds four.",
      "Buy whole spices or larger spice jars and mix your own kofta blend — far cheaper per serving than pre-made kebab seasoning.",
      "No skewers needed: shape into oval patties and broil straight on a rack, or pan-sear them on the stovetop."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground lamb, ground turkey, or a beef-lamb blend",
        "savings": "Ground turkey runs cheaper and lighter; a beef-lamb mix is more authentic"
      },
      {
        "forIngredientId": "tzatziki",
        "swap": "Stir grated cucumber and garlic into plain Greek yogurt",
        "savings": "Saves ~$3 vs buying a tub of tzatziki"
      },
      {
        "forIngredientId": "pita",
        "swap": "Serve over rice or with any flatbread/naan",
        "savings": "Uses pantry rice instead of buying fresh pita"
      }
    ],
    "estimatedNutrition": {
      "calories": 380,
      "protein": 27,
      "carbs": 16,
      "fat": 23,
      "fiber": 2
    },
    "emoji": "🍢",
    "accentColor": "bg-orange-100",
    "cuisine": "Middle Eastern",
    "tags": [
      "kofta",
      "kebab",
      "ground beef",
      "grilling",
      "broiler",
      "middle-eastern",
      "high-protein",
      "dinner",
      "skewers"
    ]
  },
  {
    "id": "cur-beef-moussaka",
    "name": "Beef Moussaka",
    "description": "The classic Greek baked casserole: layers of roasted eggplant and potato over a cinnamon-and-allspice-scented beef tomato sauce, crowned with a thick, creamy béchamel that bakes into a golden, custardy top. Rich and deeply comforting, it's even better the next day.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "eggplant",
        "quantity": 2,
        "note": "large globe eggplants, sliced into 1/2-inch rounds"
      },
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "starchy potatoes, peeled and sliced into 1/4-inch rounds"
      },
      {
        "ingredientId": "ground-beef",
        "quantity": 6,
        "note": "80/20 ground beef for the meat sauce"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.5,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "one 14 oz can"
      },
      {
        "ingredientId": "red-wine",
        "quantity": 0.4,
        "note": "about 1/2 cup dry red wine"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground, plus a stick if available"
      },
      {
        "ingredientId": "allspice",
        "quantity": 1,
        "note": "1/2 tsp ground"
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "1 tsp dried"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1,
        "note": "1 leaf"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.5,
        "note": "for brushing eggplant and the sofrito"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "for the béchamel, about 5 tbsp"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.3,
        "note": "about 1/2 cup for the béchamel roux"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "about 3 cups whole milk, warmed"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "yolks (or whole eggs), tempered into the béchamel"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 1,
        "note": "pinch, freshly grated, for the béchamel"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.5,
        "note": "grated; use kefalotyri or pecorino if you have it"
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
      "Salt the eggplant: lay the 1/2-inch rounds on a rack or towel, sprinkle generously with salt, and rest 30 minutes to draw out bitterness and moisture. Pat very dry.",
      "Roast the vegetables: brush eggplant and potato slices with olive oil, season, and roast at 425F (220C) on sheet pans until softened and lightly browned, about 20-25 minutes, flipping once. Set aside and lower oven to 350F (175C).",
      "Build the meat sauce: in a wide pan, soften the diced onion in olive oil, then add minced garlic. Push aside and brown the ground beef, breaking it up until well caramelized and any liquid has cooked off.",
      "Stir in the tomato paste and toast 1 minute, then deglaze with the red wine and reduce by half. Add crushed tomatoes, cinnamon, allspice, oregano, bay leaf, salt and pepper. Simmer uncovered 20-25 minutes until thick and nearly dry; discard the bay leaf.",
      "Make the béchamel: melt the butter, whisk in the flour and cook the roux 2 minutes without browning. Gradually whisk in the warm milk and cook, stirring, until thick enough to coat a spoon. Off heat, season with salt and a pinch of nutmeg, whisk in most of the cheese, then temper in the egg yolks so they thicken without scrambling.",
      "Layer the casserole: in an oiled baking dish, lay the potato slices, then the eggplant, then spread the meat sauce evenly. Top with a second layer of eggplant if you have it, then pour the béchamel over and smooth it out. Dust with the remaining cheese.",
      "Bake at 350F (175C) for 45-50 minutes until the top is set and deeply golden. If it needs color, broil for the final 2-3 minutes.",
      "Rest at least 30 minutes before cutting so the layers firm up into clean squares; it slices best when warm rather than piping hot."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 105,
    "difficulty": "hard",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Salt and roast the eggplant instead of frying it in oil — you use a fraction of the fat and it browns just as well on a sheet pan.",
      "Skip pricey kefalotyri; a hard cheese like parmesan or pecorino in the béchamel gives the same savory crust for less.",
      "Moussaka tastes even better reheated, so make the full pan and stretch it across several lunches — the layers set up firmer overnight."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "Use ground lamb (the most traditional choice) or a 50/50 beef-lamb blend for deeper flavor",
        "savings": "Roughly cost-neutral; lamb is pricier but more authentic"
      },
      {
        "forIngredientId": "red-wine",
        "swap": "Replace with beef broth plus a splash of red wine vinegar",
        "savings": "Saves about $3-5 by skipping the bottle"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Use any hard grating cheese or even a sharp cheddar in the béchamel",
        "savings": "Saves around $2 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 30,
      "carbs": 32,
      "fat": 34,
      "fiber": 6
    },
    "emoji": "🍆",
    "accentColor": "bg-violet-100",
    "cuisine": "Greek",
    "tags": [
      "greek",
      "casserole",
      "comfort-food",
      "baked",
      "eggplant",
      "béchamel",
      "make-ahead",
      "mediterranean"
    ]
  },
  {
    "id": "cur-cinnamon-french-toast",
    "name": "Cinnamon French Toast",
    "description": "Thick slices of brioche soaked in a vanilla-cinnamon custard and griddled in butter until golden and crisp outside, soft and creamy inside. Dusted with cinnamon sugar and finished with real maple syrup.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "brioche-buns",
        "quantity": 0.6,
        "note": "8 thick slices of a brioche or challah loaf"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "about 1 cup whole milk"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.15,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.2,
        "note": "1.5 tsp for custard plus extra for cinnamon sugar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.1,
        "note": "2 tbsp in custard plus more for dusting"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.25,
        "note": "for the griddle, ~3 tbsp"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 0.3,
        "note": "for serving"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.02,
        "optional": true,
        "note": "tiny grating, optional"
      }
    ],
    "steps": [
      "Slice the brioche or challah into eight thick (about 3/4-inch) slices. If the bread is fresh, leave the slices out for 10-15 minutes so they dry slightly and soak up custard without falling apart.",
      "In a wide shallow bowl, whisk the eggs, milk, vanilla, 1.5 tsp cinnamon, 2 tbsp sugar, the pinch of salt, and the optional nutmeg until fully smooth with no streaks of egg white.",
      "In a small dish, stir together 2 tbsp sugar with 1/2 tsp cinnamon to make cinnamon sugar for finishing.",
      "Heat a large skillet or griddle over medium heat and melt about 1 tbsp butter until foaming but not browned.",
      "Dip each slice into the custard for 15-20 seconds per side, letting it soak through but not turn soggy, then let excess drip off.",
      "Griddle the slices 2-3 minutes per side until deep golden brown and set in the center, adding fresh butter between batches and lowering the heat if they brown too fast.",
      "Transfer to a plate, dust both sides with the cinnamon sugar while still hot, and serve immediately with warm maple syrup."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use day-old or slightly stale bread - it soaks up custard better and costs less than fresh, so this is a perfect use for the end of a loaf.",
      "Whole milk gives the richest custard, but any milk works; a splash of cream makes it more decadent if you have it.",
      "Keep cooked slices warm in a 200F oven on a rack while you finish the batch so everyone eats hot together."
    ],
    "substitutions": [
      {
        "forIngredientId": "brioche-buns",
        "swap": "Regular sandwich bread or Texas toast",
        "savings": "Saves about $2 over a brioche loaf"
      },
      {
        "forIngredientId": "maple-syrup",
        "swap": "Honey or a quick fruit compote from frozen berries",
        "savings": "Saves $3-4 vs real maple syrup"
      },
      {
        "forIngredientId": "milk",
        "swap": "Almond or oat milk for a dairy-lighter custard",
        "savings": "Roughly the same cost, uses what you have"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 14,
      "carbs": 52,
      "fat": 17,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "breakfast",
      "brunch",
      "sweet",
      "kid-friendly",
      "classic",
      "vegetarian",
      "quick"
    ]
  },
  {
    "id": "cur-veggie-frittata",
    "name": "Veggie Frittata",
    "description": "A tender, golden baked egg frittata loaded with sautéed onion, bell pepper, mushrooms, and spinach, finished with feta and fresh herbs. Started on the stovetop and set under the oven for that classic puffed top — great hot or at room temperature.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "milk",
        "quantity": 0.05,
        "note": "1/4 cup whole milk or half-and-half"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1
      },
      {
        "ingredientId": "mushroom",
        "quantity": 0.4,
        "note": "about 1.5 cups sliced cremini"
      },
      {
        "ingredientId": "spinach",
        "quantity": 0.4,
        "note": "about 2 large handfuls fresh"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.1,
        "note": "2 cloves, minced"
      },
      {
        "ingredientId": "feta",
        "quantity": 0.2,
        "note": "about 1/2 cup crumbled"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.04,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.15,
        "optional": true,
        "note": "2 tbsp chopped, to finish"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      }
    ],
    "steps": [
      "Position an oven rack in the upper-middle slot and preheat the oven to 375F (190C). Whisk the eggs in a bowl with the milk, a generous pinch of salt, and several grinds of pepper until fully blended and slightly frothy, then set aside.",
      "Heat the olive oil in a 10-inch oven-safe (cast-iron or nonstick) skillet over medium heat. Add the diced onion and sliced bell pepper and cook, stirring, for 5 to 6 minutes until softened and lightly golden.",
      "Add the sliced mushrooms and cook another 4 to 5 minutes, until they release their liquid and it cooks off. Stir in the minced garlic and cook 30 seconds until fragrant.",
      "Add the spinach by the handful and toss just until wilted, about 1 minute. Spread the vegetables into an even layer and adjust the heat to medium-low.",
      "Pour the egg mixture evenly over the vegetables. Scatter the crumbled feta on top. Let it cook undisturbed for 2 to 3 minutes, until the edges begin to set but the center is still loose.",
      "Transfer the skillet to the oven and bake for 10 to 14 minutes, until the frittata is puffed, set in the center, and just beginning to color on top. The center should no longer jiggle when nudged.",
      "Let it rest in the pan for 5 minutes (it will finish setting and deflate slightly). Run a spatula around the edge, slide onto a board or serve from the pan, top with chopped parsley, and cut into wedges."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Use whatever vegetables are wilting in your fridge — frittatas are the perfect way to clean out the crisper drawer with zero waste.",
      "A frittata is fantastic at room temperature, so make it ahead and slice into wedges for grab-and-go breakfasts all week.",
      "Skip the feta and use up the ends of any cheese you have on hand; even a small handful of grated cheddar or parmesan works beautifully."
    ],
    "substitutions": [
      {
        "forIngredientId": "feta",
        "swap": "Crumbled goat cheese or grated sharp cheddar",
        "savings": "Use cheese you already have instead of buying a specialty block"
      },
      {
        "forIngredientId": "spinach",
        "swap": "Frozen spinach, thawed and squeezed very dry",
        "savings": "Frozen runs about half the price of fresh and keeps for months"
      },
      {
        "forIngredientId": "milk",
        "swap": "An extra splash of water or any milk you have",
        "savings": "Skip buying dairy just for two tablespoons"
      }
    ],
    "estimatedNutrition": {
      "calories": 240,
      "protein": 16,
      "carbs": 7,
      "fat": 17,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Italian",
    "tags": [
      "vegetarian",
      "high-protein",
      "eggs",
      "brunch",
      "meal-prep",
      "gluten-free",
      "one-pan",
      "veggie-packed"
    ]
  },
  {
    "id": "cur-breakfast-hash",
    "name": "Crispy Breakfast Hash",
    "description": "Golden, crusty diced potatoes pan-fried with sweet onion, bell pepper, and browned breakfast sausage, then crowned with runny fried eggs and a hit of hot sauce. The secret is patience: spread the potatoes in a single layer and let them sit so they build a real crust before you stir.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "potato",
        "quantity": 4,
        "note": "about 1.5 lb russet or Yukon Gold, diced into 1/2-inch cubes"
      },
      {
        "ingredientId": "sausage",
        "quantity": 4,
        "note": "breakfast sausage, casings removed if links"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "2 cloves, minced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "tablespoons, plus a little more if needed"
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1,
        "note": "teaspoon"
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
        "ingredientId": "scallion",
        "quantity": 0.5,
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
      "Dice the potatoes into even 1/2-inch cubes. Cover with cold water in a pot, add a big pinch of salt, bring to a boil, and parboil for 5 minutes until just barely tender. Drain well and let steam-dry for a couple minutes so the surfaces are dry.",
      "Heat the olive oil in a large cast-iron or heavy nonstick skillet over medium-high. Add the sausage, breaking it into bite-size crumbles, and cook 4 to 5 minutes until browned. Scoop it out with a slotted spoon, leaving the rendered fat in the pan.",
      "Add the parboiled potatoes to the hot fat and spread them into a single layer. Let them cook undisturbed for 4 to 5 minutes so a golden crust forms, then flip and repeat, seasoning with the smoked paprika, salt, and pepper. Total 12 to 15 minutes until deeply crispy.",
      "Push the potatoes to one side and add the diced onion and bell pepper to the open space. Cook 4 to 5 minutes until softened and lightly charred, then stir the minced garlic through for 30 seconds until fragrant.",
      "Return the browned sausage to the pan and fold everything together. Taste and adjust salt and pepper, then press the hash into an even layer and let it sit one more minute to re-crisp the bottom.",
      "Crack the eggs into a separate oiled skillet (or clear spots in the hash) and fry over medium heat until the whites are set but the yolks are still runny, about 3 minutes.",
      "Divide the hash among plates, top each with a fried egg, and finish with sliced scallions and a few dashes of hot sauce. Serve immediately while the egg is hot and the potatoes are crisp."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Parboiling the potatoes first means they crisp up fast and you don't waste oil or time fighting raw, gummy centers.",
      "Cook the potatoes in the rendered sausage fat instead of adding extra oil. It seasons them for free and tastes far better.",
      "Use whatever firm vegetables are wilting in your fridge. Hash is a clean-out-the-crisper dish, so leftover peppers, zucchini, or greens all work."
    ],
    "substitutions": [
      {
        "forIngredientId": "sausage",
        "swap": "Use bacon cut into lardons, or browned ground turkey with extra paprika",
        "savings": "Bacon often goes on sale; ground turkey runs cheaper per serving than links"
      },
      {
        "forIngredientId": "potato",
        "swap": "Swap in sweet potato or frozen hash browns",
        "savings": "Frozen hash browns skip the dicing and parboiling and cost about the same"
      },
      {
        "forIngredientId": "smoked-paprika",
        "swap": "Regular paprika plus a tiny pinch of cumin",
        "savings": "Saves buying a second spice if you already have plain paprika"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 18,
      "carbs": 34,
      "fat": 24,
      "fiber": 4
    },
    "emoji": "🍳",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "breakfast",
      "brunch",
      "potatoes",
      "one-pan",
      "hearty",
      "comfort-food",
      "gluten-free"
    ]
  },
  {
    "id": "cur-belgian-waffles",
    "name": "Belgian Waffles",
    "description": "Light, crisp-edged Brussels-style Belgian waffles with deep pockets and an airy, custardy interior. The batter is leavened with yeast and lifted with whipped egg whites for that signature lacy crunch, then finished with vanilla. Serve hot under powdered sugar, fresh berries, and maple syrup.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.35,
        "note": "about 2 cups all-purpose flour"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 1,
        "note": "2 tsp instant/active dry yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.1,
        "note": "2 tbsp granulated sugar"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.45,
        "note": "1 3/4 cups warm milk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "yolks in batter, whites whipped separately"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "6 tbsp melted butter"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.15,
        "note": "1 1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.1,
        "optional": true,
        "note": "for dusting"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 0.25,
        "optional": true,
        "note": "to serve"
      },
      {
        "ingredientId": "strawberries",
        "quantity": 0.4,
        "optional": true,
        "note": "fresh berries to serve"
      }
    ],
    "steps": [
      "Warm the milk to lukewarm (about 110F / 43C). Whisk in the yeast and sugar and let it sit 5-10 minutes until foamy.",
      "In a large bowl, whisk together the flour and salt. Separate the eggs: yolks into a small bowl, whites into a clean grease-free bowl.",
      "Whisk the egg yolks, melted butter, and vanilla into the foamy milk mixture, then pour over the flour and whisk just until smooth. Cover and let the batter rest and rise at room temperature for 45-60 minutes until bubbly and risen.",
      "Just before cooking, whip the egg whites to stiff, glossy peaks. Gently fold them into the risen batter in two additions, keeping as much air as possible.",
      "Heat a Belgian waffle iron and brush lightly with melted butter or oil. Preheat fully so the first waffle crisps properly.",
      "Ladle batter into the iron, filling about three-quarters full so it can spread without overflowing. Close and cook 4-5 minutes until deep golden and crisp.",
      "Transfer waffles to a wire rack (not a plate, so steam escapes and they stay crisp) while you cook the rest.",
      "Dust with powdered sugar and serve hot with fresh berries and maple syrup."
    ],
    "totalTimeMinutes": 85,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy flour, sugar, and yeast in bulk — a full batch of waffles costs a fraction of cafe prices and the dry goods last for many more batches.",
      "Cook the whole batch and freeze extras flat; reheat straight from frozen in a toaster for crisp waffles any morning.",
      "Skip name-brand syrup and berries when they're pricey — a dusting of sugar and a squeeze of lemon, or sliced banana, is nearly free."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use oat-milk or almond-milk plus a splash of vinegar for a dairy-free, buttermilk-like tang",
        "savings": "Saves ~$0.50/batch if you already stock plant milk"
      },
      {
        "forIngredientId": "butter",
        "swap": "Melted vegetable-oil or coconut-oil works in a pinch",
        "savings": "Saves ~$0.40/batch"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Skip yeast and use 2 tsp baking-powder for a quick (less airy) version",
        "savings": "Saves the rise time and a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 12,
      "carbs": 52,
      "fat": 19,
      "fiber": 2
    },
    "emoji": "🧇",
    "accentColor": "bg-amber-100",
    "cuisine": "Belgian",
    "tags": [
      "breakfast",
      "brunch",
      "waffles",
      "yeast-raised",
      "weekend",
      "kid-friendly",
      "vegetarian"
    ]
  },
  {
    "id": "cur-breakfast-sandwich",
    "name": "Bacon, Egg & Cheese Breakfast Sandwich",
    "description": "The deli-counter classic done right: a folded, custardy fried egg layered with crisp bacon and melty American cheese on a buttered, griddle-toasted English muffin. Salty, rich, and ready in about ten minutes.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "english-muffin",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "bacon",
        "quantity": 2,
        "note": "4 strips total, 2 per sandwich"
      },
      {
        "ingredientId": "american-singles",
        "quantity": 2,
        "note": "1 slice per sandwich"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.05,
        "note": "for toasting the muffins"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.01
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.01
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.02,
        "optional": true,
        "note": "a few dashes, to taste"
      }
    ],
    "steps": [
      "Split the English muffins and toast them, cut-side down, in a dry or lightly buttered skillet over medium heat until golden; set aside.",
      "In the same skillet over medium heat, lay the bacon strips and cook, turning once, until crisp, about 6 minutes. Transfer to a paper towel and pour off all but a thin film of fat.",
      "Crack the eggs into the pan, season with salt and pepper, and break the yolks. Cook until the whites set on the bottom, about 1 minute.",
      "Fold each egg over on itself into a muffin-sized square, then flip and cook 30 seconds more so the yolk stays just set and custardy.",
      "Lay a slice of American cheese over the hot eggs and let it melt for 20 seconds; off the heat, the residual warmth finishes the melt.",
      "Build each sandwich: bottom muffin, the cheese-topped egg, two strips of bacon snapped to fit, a few dashes of hot sauce if using, then the top muffin.",
      "Press gently, wrap in foil or parchment for a minute to let everything meld, then serve warm."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy a value pack of bacon and freeze it flat in pairs of strips so you can pull off exactly what you need each morning.",
      "Eggs and English muffins are the cheapest part of this build; skip the bacon for an egg-and-cheese and it costs almost nothing.",
      "Cook all four eggs and all the bacon at once, then assemble two sandwiches to bank one for tomorrow."
    ],
    "substitutions": [
      {
        "forIngredientId": "english-muffin",
        "swap": "Toasted bagel or two slices of bread",
        "savings": "Bread is often cheaper per serving and you likely already have it"
      },
      {
        "forIngredientId": "bacon",
        "swap": "A browned sausage patty or sliced ham",
        "savings": "Sausage and deli ham usually run cheaper per serving than bacon"
      },
      {
        "forIngredientId": "american-singles",
        "swap": "A slice of cheddar or whatever block cheese you have",
        "savings": "Grating from a block beats per-slice cheese on cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 26,
      "carbs": 28,
      "fat": 27,
      "fiber": 2
    },
    "emoji": "🥪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "breakfast",
      "high-protein",
      "quick",
      "handheld",
      "diner-classic",
      "bacon-egg-cheese"
    ]
  },
  {
    "id": "cur-chicken-and-sausage-gumbo",
    "name": "Chicken and Sausage Gumbo",
    "description": "A deeply flavored Louisiana classic built on a patient, chocolate-brown roux, the holy trinity of onion, celery, and bell pepper, smoky andouille-style sausage, and tender chicken thighs simmered with okra. Served over rice, it's rich, soulful, and worth every minute at the stove.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 6,
        "note": "bone-in or boneless, skin removed"
      },
      {
        "ingredientId": "smoked-sausage",
        "quantity": 1,
        "note": "andouille, sliced into coins"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.4,
        "note": "all-purpose, for the roux"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.5,
        "note": "for the roux"
      },
      {
        "ingredientId": "onion",
        "quantity": 1.5
      },
      {
        "ingredientId": "celery",
        "quantity": 0.5,
        "note": "about 3 stalks"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "green"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.25,
        "note": "about 4 cloves, minced"
      },
      {
        "ingredientId": "okra",
        "quantity": 0.5,
        "note": "fresh or frozen, sliced",
        "optional": true
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1.5
      },
      {
        "ingredientId": "cajun-seasoning",
        "quantity": 0.15
      },
      {
        "ingredientId": "thyme",
        "quantity": 0.05,
        "note": "dried"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.05,
        "note": "2 leaves"
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 0.05
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.03,
        "note": "to taste"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5,
        "note": "for garnish"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.3,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.1,
        "note": "to serve",
        "optional": true
      },
      {
        "ingredientId": "rice",
        "quantity": 6,
        "note": "long-grain white, steamed, for serving"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.03
      }
    ],
    "steps": [
      "Season the chicken thighs with salt, pepper, and half the Cajun seasoning. In a heavy pot or Dutch oven, brown the sausage coins over medium-high until the edges caramelize, then remove. Brown the chicken in the rendered fat, then set aside.",
      "Make the roux: add the oil to the pot and whisk in the flour. Cook over medium-low heat, stirring constantly, for 25-40 minutes until it turns the color of milk chocolate. Do not let it burn or scorch any black flecks; lower the heat if it smokes.",
      "Add the onion, celery, and bell pepper (the holy trinity) directly into the hot roux. Cook 6-8 minutes until softened, stirring, then stir in the garlic for 1 minute until fragrant.",
      "Slowly whisk in the chicken broth a ladle at a time so the roux dissolves smoothly with no lumps. Add the bay leaves, thyme, smoked paprika, cayenne, and remaining Cajun seasoning.",
      "Return the chicken and sausage to the pot, add the okra, and bring to a gentle simmer. Cook uncovered, stirring occasionally, for 45-60 minutes until the gumbo thickens and the flavors meld.",
      "Pull the chicken out, shred or chop it off the bone, and return the meat to the pot. Discard the bay leaves. Taste and adjust with salt, pepper, and hot sauce.",
      "Skim any excess fat from the surface. Ladle the gumbo over bowls of steamed long-grain rice and top with sliced scallions and chopped parsley."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 90,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in chicken thighs are cheaper than breasts and the bones add real body to the gumbo while it simmers.",
      "A dark roux is just flour and oil, so it costs almost nothing to deepen the flavor; patience replaces pricey ingredients here.",
      "Use frozen okra instead of fresh to cut cost and prep time without losing the thickening it brings."
    ],
    "substitutions": [
      {
        "forIngredientId": "smoked-sausage",
        "swap": "kielbasa or any smoked sausage",
        "savings": "Saves ~30% vs. true andouille while keeping the smoky backbone."
      },
      {
        "forIngredientId": "chicken-thighs",
        "swap": "chicken drumsticks",
        "savings": "Drumsticks are often the cheapest cut and add the same rich, bone-in flavor."
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water plus a bouillon cube",
        "savings": "Cuts broth cost by more than half for a similar savory base."
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 34,
      "carbs": 48,
      "fat": 22,
      "fiber": 3
    },
    "emoji": "🍲",
    "accentColor": "bg-red-100",
    "cuisine": "Cajun/Creole",
    "tags": [
      "gumbo",
      "louisiana",
      "cajun",
      "creole",
      "comfort-food",
      "one-pot",
      "southern",
      "stew"
    ]
  },
  {
    "id": "cur-broccoli-cheddar-soup",
    "name": "Broccoli Cheddar Soup",
    "description": "A velvety, deeply cheesy bowl built on a proper butter-and-flour roux, simmered with tender broccoli and shredded carrot, then finished off the heat with sharp cheddar so it melts silky instead of grainy. Better than the bread-bowl version you're thinking of.",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 0.25,
        "note": "4 tbsp"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "1 medium, finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.1,
        "note": "2 cloves, minced"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "about 1/4 cup, for the roux"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "about 2 cups; use veggie-broth for vegetarian"
      },
      {
        "ingredientId": "half-and-half",
        "quantity": 0.5,
        "note": "about 2 cups; or whole milk for lighter"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 1,
        "note": "2 heads / ~4 cups small florets, stems chopped"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1.5,
        "note": "1.5 carrots, grated or julienned"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 0.6,
        "note": "about 8 oz sharp cheddar, freshly shredded"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.02,
        "note": "tiny pinch, freshly grated"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      },
      {
        "ingredientId": "dijon",
        "quantity": 0.05,
        "optional": true,
        "note": "1 tsp, brightens the cheese"
      }
    ],
    "steps": [
      "Melt the butter in a heavy pot over medium heat. Add the diced onion with a pinch of salt and cook 4-5 minutes until soft and translucent, then add the garlic and cook 30 seconds until fragrant.",
      "Sprinkle in the flour and stir constantly for 2-3 minutes to cook out the raw taste, forming a blond roux that coats the onions.",
      "Slowly whisk in the broth a splash at a time so no lumps form, then whisk in the half-and-half. Bring to a gentle simmer, whisking, until slightly thickened.",
      "Add the broccoli florets and chopped stems plus the grated carrot. Simmer uncovered 15-20 minutes, stirring occasionally, until the broccoli is very tender.",
      "For a smoother soup, blend about a third with an immersion blender (or mash some florets against the pot); leave the rest chunky for texture.",
      "Reduce the heat to low. Grate in the nutmeg and stir in the optional Dijon. Add the shredded cheddar a large handful at a time, stirring until each addition melts before adding more.",
      "Once all the cheese is in and the soup is glossy, taste and season with salt and plenty of black pepper. Do not let it boil after the cheese goes in or it will turn grainy.",
      "Ladle into bowls and serve hot, topped with extra cheddar and cracked pepper."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 28,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a block of cheddar and shred it yourself - pre-shredded is pricier and has anti-caking starch that makes the soup grainy.",
      "Don't toss the broccoli stems: peel and dice them: they're free flavor and blend in invisibly.",
      "Whole milk plus an extra tablespoon of butter stands in beautifully for half-and-half and costs less."
    ],
    "substitutions": [
      {
        "forIngredientId": "half-and-half",
        "swap": "whole milk with an extra tbsp butter",
        "savings": "~$1.00/batch"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "a bouillon cube dissolved in water",
        "savings": "~$1.50/batch"
      },
      {
        "forIngredientId": "cheddar-block",
        "swap": "store-brand sharp cheddar instead of name-brand",
        "savings": "~$2.00/batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 17,
      "carbs": 22,
      "fat": 29,
      "fiber": 4
    },
    "emoji": "🥦",
    "accentColor": "bg-emerald-100",
    "cuisine": "American",
    "tags": [
      "soup",
      "cheesy",
      "comfort-food",
      "vegetarian",
      "one-pot",
      "creamy"
    ]
  },
  {
    "id": "cur-vegetable-stir-fry",
    "name": "Vegetable Stir Fry",
    "description": "A bright, glossy Cantonese-style vegetable stir fry done the right way: vegetables seared hard and fast over high heat so they stay crisp-tender, then tossed with garlic, ginger, and scallion in a savory soy-oyster sauce thickened to a clinging glaze. Served over steamed rice for a quick, restaurant-quality dinner.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "broccoli",
        "quantity": 0.5,
        "note": "cut into small florets"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "thinly sliced on a bias"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "sliced into strips"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 0.5,
        "note": "about 4 oz, sliced"
      },
      {
        "ingredientId": "snap-peas",
        "quantity": 0.3,
        "note": "about 1 cup, trimmed"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "1 tbsp, minced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "cut into 1-inch pieces, whites and greens separated"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3,
        "note": "tbsp"
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 2,
        "note": "tbsp"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1,
        "note": "tsp"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "tsp, toasted, added off heat"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "tsp, for the slurry"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "tbsp, high smoke point for the wok"
      },
      {
        "ingredientId": "rice",
        "quantity": 4,
        "note": "steamed, for serving"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.5,
        "optional": true,
        "note": "tsp, for heat"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "tsp, toasted, to garnish"
      }
    ],
    "steps": [
      "Prep everything before you turn on the heat: cut all vegetables, mince the garlic and ginger, and separate the scallion whites from the greens. Stir fry moves fast, so nothing should be done at the stove.",
      "Make the sauce: in a small bowl whisk together the soy sauce, oyster sauce, rice vinegar, and 3 tablespoons water. In a separate cup, stir the cornstarch into 1 tablespoon cold water to make a smooth slurry.",
      "Heat a wok or large skillet over the highest heat until it just begins to smoke, then add the vegetable oil and swirl to coat. Add the broccoli and carrots first and stir-fry 2 minutes, since they take longest to cook.",
      "Add the bell pepper and mushrooms and stir-fry another 2 minutes, tossing constantly so the vegetables sear rather than steam and stay crisp-tender.",
      "Push the vegetables to the sides, add the garlic, ginger, scallion whites (and red pepper flakes if using) to the center, and stir-fry about 30 seconds until fragrant but not browned.",
      "Add the snap peas, pour in the sauce, and toss everything together for about 1 minute until the vegetables are coated and glossy.",
      "Stir the cornstarch slurry again and drizzle it in, tossing constantly; the sauce will thicken and cling to the vegetables within 30 seconds.",
      "Turn off the heat, add the scallion greens and toasted sesame oil, and toss once more. Serve immediately over steamed rice, garnished with sesame seeds."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "rice-cooker"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Use whatever vegetables are cheapest or about to wilt in your fridge; stir fry is the perfect catch-all to rescue produce before it goes bad.",
      "A bag of frozen stir-fry mix can stand in for fresh vegetables for a fraction of the price; just pat it dry and cook over high heat so it sears instead of steams.",
      "Buy a knob of fresh ginger, slice it, and freeze it; it grates easily straight from frozen and keeps for months so you never waste a whole root."
    ],
    "substitutions": [
      {
        "forIngredientId": "oyster-sauce",
        "swap": "Use hoisin or extra soy sauce plus a pinch of sugar to keep it fully vegetarian and slightly cheaper",
        "savings": "~$0.40/serving"
      },
      {
        "forIngredientId": "snap-peas",
        "swap": "Swap in frozen peas or sliced green beans, often half the price of fresh snap peas",
        "savings": "~$0.50/serving"
      },
      {
        "forIngredientId": "rice",
        "swap": "Serve over instant ramen noodles (drained) or day-old rice you already have",
        "savings": "~$0.30/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 8,
      "carbs": 58,
      "fat": 7,
      "fiber": 5
    },
    "emoji": "🥦",
    "accentColor": "bg-emerald-100",
    "cuisine": "Chinese",
    "tags": [
      "stir-fry",
      "vegetarian",
      "quick",
      "weeknight",
      "wok",
      "veggie-packed",
      "rice-bowl"
    ]
  },
  {
    "id": "cur-black-bean-burgers",
    "name": "Black Bean Burgers",
    "description": "Hearty, smoky black bean burgers with a real seared crust and a tender, savory interior that actually holds together. The beans are dried out in the oven first so the patties firm up, then bound with egg, breadcrumbs, and sauteed aromatics. Pile onto a toasted bun with your favorite fixings.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "black-beans",
        "quantity": 2,
        "note": "two 15 oz cans, drained and rinsed"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "binder"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.3,
        "note": "about 3/4 cup; use panko for more texture"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "finely diced, adds moisture and sweetness"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "ground, about 1.5 tsp"
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1,
        "note": "about 1 tsp, key smoky note"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 1,
        "note": "about 1 tsp"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.25,
        "note": "small handful, chopped"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.15,
        "note": "for sauteing and searing"
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
        "ingredientId": "hamburger-buns",
        "quantity": 1,
        "note": "4 buns, toasted"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for topping"
      },
      {
        "ingredientId": "lettuce",
        "quantity": 0.25,
        "optional": true,
        "note": "for topping"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "sliced, for topping"
      },
      {
        "ingredientId": "chipotle-in-adobo",
        "quantity": 0.1,
        "optional": true,
        "note": "mash 1 tsp into mayo for a smoky spread"
      }
    ],
    "steps": [
      "Preheat the oven to 325F. Drain and rinse the black beans, then spread them on a parchment-lined baking sheet and bake 12-15 minutes until they look dry and the skins start to split. This is the key to burgers that hold together. Set aside to cool slightly.",
      "Meanwhile, heat 1 tablespoon olive oil in a skillet over medium. Saute the diced onion and bell pepper with a pinch of salt for 5-6 minutes until soft, add the garlic and cook 1 minute more, then scrape into a large bowl and let cool.",
      "Add the dried beans to the bowl. Mash about two-thirds of them with a fork or potato masher into a thick paste, leaving the remaining third mostly whole for texture.",
      "Stir in the beaten egg, breadcrumbs, cumin, smoked paprika, chili powder, chopped cilantro, 1 teaspoon salt, and several grinds of pepper. Mix until it holds together when pressed; if it feels wet, add a little more breadcrumbs.",
      "Divide into 4 portions and form firm patties about 3/4 inch thick. Refrigerate at least 20 minutes (or up to a day) so they set and sear cleanly.",
      "Heat the remaining olive oil in the skillet over medium heat. Cook the patties 4-5 minutes per side, flipping only once, until deeply browned and crisp with a heated-through center.",
      "Toast the buns. Spread with chipotle mayo if using, then build with the patty, avocado, lettuce, and tomato. Serve right away while the crust is crisp."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Dried beans you cook yourself cost a fraction of canned: simmer 1 cup dried black beans, drained weight ends up close to two cans.",
      "Make a double batch and freeze the raw patties between parchment squares; they cook straight from frozen, just add a couple minutes per side.",
      "Stale bread blitzed in a blender makes free breadcrumbs and works better than store-bought here."
    ],
    "substitutions": [
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Crushed tortilla chips or rolled oats blitzed fine",
        "savings": "Uses pantry staples instead of buying breadcrumbs, saves ~$1"
      },
      {
        "forIngredientId": "eggs",
        "swap": "1 flax egg (1 tbsp ground flax + 3 tbsp water) to make it vegan",
        "savings": "Pennies per burger and makes it fully plant-based"
      },
      {
        "forIngredientId": "smoked-paprika",
        "swap": "Regular paprika plus a dash of chipotle powder",
        "savings": "Uses spices you likely already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 16,
      "carbs": 54,
      "fat": 9,
      "fiber": 12
    },
    "emoji": "🍔",
    "accentColor": "bg-orange-100",
    "cuisine": "American (Tex-Mex)",
    "tags": [
      "vegetarian",
      "burger",
      "black beans",
      "meatless",
      "high-fiber",
      "freezer-friendly",
      "budget"
    ]
  },
  {
    "id": "cur-veggie-buddha-bowl",
    "name": "Veggie Buddha Bowl",
    "description": "A vibrant, balanced grain bowl built on fluffy quinoa with roasted sweet potato and chickpeas, crisp-tender broccoli, fresh kale, creamy avocado, and a bright lemon-tahini dressing. Every bite layers texture and a different flavor — exactly what a great Buddha bowl should be.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "quinoa",
        "quantity": 2,
        "note": "uncooked, ~1/2 cup dry per serving"
      },
      {
        "ingredientId": "chickpeas",
        "quantity": 1,
        "note": "1 can, drained and rinsed"
      },
      {
        "ingredientId": "sweet-potato",
        "quantity": 1,
        "note": "1 medium, peeled and cubed"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 0.5,
        "note": "half a head, cut into florets"
      },
      {
        "ingredientId": "kale",
        "quantity": 0.5,
        "note": "a few large leaves, stemmed and torn"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "1 ripe, sliced"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.25,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "tahini",
        "quantity": 0.2,
        "note": "about 3 tbsp for the dressing"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced, ~2 tbsp"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.1,
        "note": "1 small clove, grated into dressing"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.1,
        "note": "for roasting"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.05,
        "note": "to season chickpeas"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.05,
        "note": "smoked or sweet, for chickpeas"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 0.02,
        "note": "1 tsp to balance the dressing",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.05,
        "note": "to garnish",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      }
    ],
    "steps": [
      "Heat oven to 425F (220C). Spread the cubed sweet potato and drained chickpeas on a parchment-lined sheet pan. Toss with olive oil, cumin, paprika, salt, and pepper, keeping them in roughly separate areas of the pan.",
      "Roast for 25-30 minutes, tossing once halfway, until the sweet potato is tender and caramelized at the edges and the chickpeas are golden and slightly crisp.",
      "Meanwhile, rinse the quinoa well, then simmer it in 2 cups water with a pinch of salt for about 15 minutes until the water is absorbed and the grains uncoil. Cover off-heat for 5 minutes, then fluff with a fork.",
      "In the last 12-15 minutes of roasting, toss the broccoli florets with a little oil and salt and add them to the sheet pan (or a second one) so they roast crisp-tender.",
      "Make the dressing: whisk tahini, lemon juice, grated garlic, maple syrup, and a pinch of salt with 2-3 tablespoons warm water, adding water a little at a time until it's pourable and creamy.",
      "Massage the torn kale with a few drops of olive oil and a pinch of salt for about a minute until it softens and turns deep green.",
      "Build each bowl: a base of quinoa, then sections of roasted sweet potato, crispy chickpeas, broccoli, and massaged kale arranged around the rim.",
      "Top with sliced avocado and thin red onion, drizzle generously with the lemon-tahini dressing, and finish with sesame seeds and a crack of black pepper."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Buy chickpeas dried and cook a big batch — they're a fraction of the canned price and you can freeze portions.",
      "Use whatever sturdy veg is cheapest that week: cauliflower, carrots, or zucchini all roast beautifully in place of broccoli.",
      "Make extra quinoa, roasted veg, and dressing for easy grain bowls all week — everything keeps 4 days in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "quinoa",
        "swap": "Brown rice or farro",
        "savings": "Saves about 50% per serving vs quinoa"
      },
      {
        "forIngredientId": "tahini",
        "swap": "Peanut butter thinned with extra lemon and water",
        "savings": "Saves ~$1 if you already stock peanut butter"
      },
      {
        "forIngredientId": "broccoli",
        "swap": "Frozen broccoli or any frozen veg mix",
        "savings": "Saves about 30% and no prep waste"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 18,
      "carbs": 72,
      "fat": 24,
      "fiber": 16
    },
    "emoji": "🥗",
    "accentColor": "bg-emerald-100",
    "cuisine": "Modern / Plant-Based",
    "tags": [
      "vegan",
      "grain-bowl",
      "meal-prep",
      "high-fiber",
      "roasted-veg",
      "tahini",
      "healthy",
      "gluten-free"
    ]
  },
  {
    "id": "cur-fudgy-brownies",
    "name": "Fudgy Brownies",
    "description": "Dense, deeply chocolatey brownies with a glossy crackly top and a moist, almost-underbaked center. A high butter-and-chocolate ratio plus minimal flour gives them that signature fudgy chew — no cakey crumb in sight.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "1/2 cup (1 stick), melted"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.5,
        "note": "4 oz semi-sweet/dark chocolate, chopped"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.3,
        "note": "1 1/4 cups granulated sugar"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.15,
        "note": "1/4 cup packed, for extra chew"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "large, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.1,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 0.25,
        "note": "1/2 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "2/3 cup all-purpose flour"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 0.25,
        "optional": true,
        "note": "1/2 cup, folded in"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C). Line an 8x8-inch metal pan with parchment, leaving overhang, and lightly grease.",
      "In a heatproof bowl, combine the melted butter and chopped dark chocolate. Microwave in 20-second bursts, stirring between each, until smooth and fully melted, then let cool slightly.",
      "Whisk both sugars into the warm chocolate mixture. Add the eggs and vanilla and whisk vigorously for a full minute until the batter is glossy and slightly thickened — this beating is what creates the shiny crackly top.",
      "Sift the cocoa powder, flour, and salt over the wet mixture. Fold gently with a spatula just until no dry streaks remain; do not overmix or the brownies turn cakey.",
      "Fold in the chocolate chips if using. Scrape the thick batter into the prepared pan and smooth the top.",
      "Bake 25 to 30 minutes, until the top is set and crackly but a toothpick inserted in the center comes out with moist crumbs (not wet batter). Err on the side of underbaking for maximum fudginess.",
      "Cool completely in the pan on a rack, at least 1 hour — ideally 2. Lift out by the parchment and cut into 12 squares with a clean, warm knife."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 28,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "microwave"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use a metal pan over glass — it conducts heat evenly for crisp edges and a fudgy middle, and you likely already own one.",
      "Cocoa powder does most of the chocolate flavor heavy-lifting, so cheap baking cocoa works fine; save the good chocolate for the chips.",
      "Brown butter the stick first (2-3 min on the stove) for a nutty, more expensive-tasting brownie at zero extra cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Use extra 1/4 cup cocoa powder + 2 tbsp oil instead of bar chocolate",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "chocolate-chips",
        "swap": "Chop up any leftover chocolate bar or skip entirely",
        "savings": "~$0.80"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "All granulated sugar (still fudgy, slightly less chewy)",
        "savings": "~$0.20"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 3,
      "carbs": 32,
      "fat": 13,
      "fiber": 2
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "chocolate",
      "baking",
      "fudgy",
      "crowd-pleaser",
      "make-ahead"
    ]
  },
  {
    "id": "cur-classic-banana-bread",
    "name": "Classic Banana Bread",
    "description": "A moist, tender loaf built on very ripe, spotty bananas, brown sugar, and melted butter for deep caramel flavor. Mixed by hand in one bowl, it bakes up with a crackly top and a soft, fragrant crumb.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 4,
        "note": "very ripe, heavily spotted, mashed (about 1.5 cups)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.4,
        "note": "all-purpose, ~2 cups (250g)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.4,
        "note": "packed light brown, ~3/4 cup"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.15,
        "note": "~1/4 cup, for a crackly top"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "unsalted, melted and cooled, ~1/2 cup (113g)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "large, room temperature"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.1,
        "note": "2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.15,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.1,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 0.15,
        "note": "1/4 cup, for extra moisture",
        "optional": true
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.4,
        "note": "3/4 cup, toasted and chopped",
        "optional": true
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Grease a 9x5-inch loaf pan and line it with a parchment sling so the loaf lifts out cleanly.",
      "In a large bowl, mash the very ripe bananas with a fork until mostly smooth with a few small lumps. The riper and spottier the bananas, the sweeter and more flavorful the bread.",
      "Whisk the melted butter, brown sugar, and white sugar into the mashed bananas, then beat in the eggs, vanilla, and sour cream until the mixture is smooth and glossy.",
      "Sprinkle the baking soda, salt, and cinnamon over the wet mixture and stir to distribute evenly before adding the flour.",
      "Add the flour and fold gently with a spatula just until no dry streaks remain; stop mixing the moment it comes together to keep the crumb tender. Fold in the toasted walnuts if using.",
      "Scrape the batter into the prepared pan, smooth the top, and tap the pan once on the counter to release large air pockets.",
      "Bake 55 to 65 minutes, until the top is deep golden, cracked down the center, and a toothpick inserted in the middle comes out with only a few moist crumbs. Tent loosely with foil if it browns too fast.",
      "Cool in the pan for 15 minutes, then lift out using the parchment and cool on a rack at least 30 minutes before slicing so the crumb sets."
    ],
    "totalTimeMinutes": 80,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 60,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy the bruised, marked-down bananas on the discount rack — overripe is exactly what you want and they cost a fraction of fresh ones.",
      "Stash spotty bananas in the freezer (peel first); thaw and drain before mashing so you always have banana bread bananas on hand.",
      "Skip the walnuts to cut cost, or use whatever nuts or chocolate chips you already have in the pantry."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Plain or Greek yogurt in equal amount",
        "savings": "Use what's already in the fridge instead of buying a tub"
      },
      {
        "forIngredientId": "butter",
        "swap": "Neutral vegetable oil, same amount",
        "savings": "Roughly 30% cheaper and keeps the loaf extra moist"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus 1 tsp molasses",
        "savings": "Avoids buying a second bag of sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 4,
      "carbs": 40,
      "fat": 12,
      "fiber": 2
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "banana bread",
      "baking",
      "quick bread",
      "snack",
      "breakfast",
      "dessert",
      "one-bowl",
      "use-ripe-bananas"
    ]
  },
  {
    "id": "cur-snickerdoodles",
    "name": "Snickerdoodles",
    "description": "Soft, chewy cinnamon-sugar cookies with crackly tops and a gentle tang from cream of tartar. The dough is rolled in cinnamon sugar before baking, giving each cookie its signature sweet-spiced crust and slightly chewy center.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.6,
        "note": "2 2/3 cups all-purpose flour"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.5,
        "note": "2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.2,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 cup (2 sticks) softened unsalted butter"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.45,
        "note": "1 1/2 cups for dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.1,
        "note": "3 tbsp for cinnamon-sugar coating"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.2,
        "note": "1 tbsp for coating"
      }
    ],
    "steps": [
      "Whisk together the flour, cream of tartar, baking soda, and salt in a bowl and set aside.",
      "In a large bowl, beat the softened butter with the 1 1/2 cups sugar until pale and fluffy, about 2-3 minutes. Beat in the eggs one at a time, then the vanilla, scraping the bowl as needed.",
      "Add the dry ingredients to the butter mixture and mix on low just until a soft dough forms with no streaks of flour. Cover and chill 30 minutes so the dough firms up and the flavor develops.",
      "Heat the oven to 375F and line two baking sheets with parchment. In a small bowl, stir together the 3 tbsp sugar and the cinnamon for the coating.",
      "Scoop rounded tablespoons of dough, roll into balls, then roll each generously in the cinnamon sugar to coat. Space them about 2 inches apart on the sheets.",
      "Bake one sheet at a time for 9-11 minutes, until the tops are crackled and the edges are just set but the centers still look slightly underdone and soft.",
      "Let the cookies rest on the sheet for 5 minutes to finish setting, then transfer to a rack. They will stay soft and chewy as they cool."
    ],
    "totalTimeMinutes": 65,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 11,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Cream of tartar is the one non-negotiable for true snickerdoodle tang and chew, but a small jar lasts dozens of batches, so the per-cookie cost is tiny.",
      "Use room-temperature butter and eggs so the dough creams properly without overmixing, which keeps the cookies tender.",
      "Underbake slightly and let them set on the hot pan; pulling them when the centers still look soft is what gives that bakery chewiness."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Half butter, half shortening for taller, even chewier cookies that spread less",
        "savings": "Shortening is cheaper than butter and gives a longer shelf life"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Replace 1/4 cup of the dough sugar with brown sugar for a deeper, caramel note",
        "savings": "Negligible cost change, uses a pantry staple you likely have"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "2 tsp baking powder in place of the cream of tartar plus baking soda (less tangy)",
        "savings": "Skips buying a single-purpose jar"
      }
    ],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 2,
      "carbs": 19,
      "fat": 6,
      "fiber": 0
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "dessert",
      "baking",
      "cinnamon",
      "classic",
      "kid-friendly",
      "make-ahead"
    ]
  },
  {
    "id": "cur-lemon-bars",
    "name": "Lemon Bars",
    "description": "Buttery shortbread crust under a tangy, bright lemon custard, baked until just set and dusted with powdered sugar. The classic balance of sweet and sour, with real lemon juice and zest doing all the work.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "1 stick (1/2 cup), softened, for shortbread crust"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "1 cup for crust + 3 tbsp for the lemon filling"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.2,
        "note": "1/4 cup for crust, plus extra for dusting"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "1/4 tsp, divided between crust and filling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.6,
        "note": "1 1/3 cups granulated for the lemon filling"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "large, room temperature"
      },
      {
        "ingredientId": "lemon",
        "quantity": 4,
        "note": "for 2/3 cup fresh juice plus zest"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp, if not zesting whole lemons"
      }
    ],
    "steps": [
      "Heat oven to 350F. Line an 8x8 inch pan with parchment, leaving an overhang on two sides, and lightly butter it.",
      "Make the crust: beat the softened butter with 1/4 cup powdered sugar until creamy, then mix in 1 cup flour and a pinch of salt until a crumbly dough forms. Press it firmly and evenly into the bottom of the pan.",
      "Bake the crust for 18 to 20 minutes, until the edges are lightly golden. Keep the oven on.",
      "While it bakes, zest the lemons (about 1 tbsp) and juice them to get 2/3 cup juice.",
      "Whisk the granulated sugar with 3 tbsp flour and 1/4 tsp salt, then whisk in the eggs until smooth. Whisk in the lemon juice and zest.",
      "Pour the filling over the hot crust (this helps it start setting). Bake 20 to 24 minutes, until the center is just set and no longer jiggles when nudged.",
      "Cool completely in the pan, then chill at least 2 hours so the custard firms up for clean slices.",
      "Lift out using the parchment, dust generously with powdered sugar, and cut into 9 squares with a knife wiped clean between cuts."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 44,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy lemons in a bag rather than singly, and zest them before juicing so you waste nothing.",
      "Bottled lemon juice works in a pinch and is far cheaper, but you lose the fresh zest aroma that defines a good lemon bar.",
      "Save egg whites for another use isn't needed here, this recipe uses whole eggs so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon",
        "swap": "Use 2/3 cup bottled lemon juice plus 1 tbsp jarred zest",
        "savings": "Saves about $1.50 vs fresh lemons"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar with a pinch of cornstarch in a blender",
        "savings": "Avoids buying a separate bag, saves ~$2"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter for a dairy-free crust",
        "savings": "Comparable cost, makes it dairy-free"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 4,
      "carbs": 42,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "baked",
      "citrus",
      "shortbread",
      "make-ahead",
      "potluck"
    ]
  },
  {
    "id": "cur-maryland-crab-cakes",
    "name": "Maryland Crab Cakes",
    "description": "Classic Chesapeake-style crab cakes: sweet lump crabmeat barely held together with a light egg-and-mayo binder, seasoned generously with Old Bay, a touch of Dijon and Worcestershire, fresh parsley, and lemon. Almost all crab, very little filler, broiled until golden with crisp edges and a tender, juicy center.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "crab-canned",
        "quantity": 2,
        "note": "1 lb fresh lump/jumbo lump crabmeat, picked over for shells"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "mayonnaise",
        "quantity": 0.2,
        "note": "about 1/4 cup"
      },
      {
        "ingredientId": "dijon",
        "quantity": 0.1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.05,
        "note": "1 tsp"
      },
      {
        "ingredientId": "old-bay",
        "quantity": 0.15,
        "note": "1 to 1.5 tbsp"
      },
      {
        "ingredientId": "mustard-powder",
        "quantity": 0.03,
        "note": "1/2 tsp dry mustard"
      },
      {
        "ingredientId": "panko",
        "quantity": 0.2,
        "note": "about 1/2 cup, or crushed saltines"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.25,
        "note": "2 tbsp chopped"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1
      },
      {
        "ingredientId": "butter",
        "quantity": 0.15,
        "note": "2 tbsp, melted for brushing/broiling"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.02,
        "optional": true,
        "note": "few dashes, optional"
      }
    ],
    "steps": [
      "Gently pick through the lump crabmeat with your fingers and discard any bits of shell or cartilage, keeping the lumps as intact as possible. Pat dry and chill while you make the binder.",
      "In a separate bowl, whisk together the egg, mayonnaise, Dijon, Worcestershire, Old Bay, dry mustard, chopped parsley, the juice of half the lemon, and a few dashes of hot sauce if using. This wet binder coats the crab without overpowering it.",
      "Pour the binder over the crab, sprinkle the panko on top, and fold everything together with a rubber spatula using just a few gentle strokes — you want to keep big lumps of crab and avoid mashing it into paste.",
      "Divide into 4 mounded cakes (about 3 inches wide) and place on a parchment-lined tray. Refrigerate at least 30 minutes so they firm up and hold their shape.",
      "Set an oven rack about 6 inches below the broiler and preheat the broiler to high. Brush the tops of the cakes generously with melted butter.",
      "Broil for 6 to 8 minutes, until the tops are deeply golden brown and the centers are hot and just set — no need to flip. Watch closely the last minute so they brown but don't burn.",
      "Let the crab cakes rest 2 minutes, then serve hot with the remaining lemon cut into wedges. Great with tartar sauce or a squeeze of lemon and an extra dusting of Old Bay."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 8,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Fresh lump crab is pricey — pasteurized refrigerated 'special' or claw crabmeat costs much less and still tastes great once seasoned with Old Bay.",
      "Buy a single canister of Old Bay and you'll use it for months on shrimp, fries, corn, and eggs — it's the whole point of the dish.",
      "Crushed saltines work just as well as panko as the binder and are usually cheaper if you already have a sleeve in the pantry."
    ],
    "substitutions": [
      {
        "forIngredientId": "crab-canned",
        "swap": "imitation crab (surimi), finely chopped",
        "savings": "Cuts the protein cost by 60-70% — not authentic, but workable on a tight budget"
      },
      {
        "forIngredientId": "panko",
        "swap": "crushed saltine crackers or breadcrumbs",
        "savings": "Pennies per cake using what's already in the pantry"
      },
      {
        "forIngredientId": "dijon",
        "swap": "yellow mustard plus a pinch of extra dry mustard",
        "savings": "Saves ~$3 vs buying a jar of Dijon"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 24,
      "carbs": 8,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🦀",
    "accentColor": "bg-red-100",
    "cuisine": "American (Chesapeake / Mid-Atlantic)",
    "tags": [
      "crab",
      "seafood",
      "old-bay",
      "maryland",
      "broiled",
      "high-protein",
      "shellfish",
      "classic"
    ]
  },
  {
    "id": "cur-garlic-butter-shrimp",
    "name": "Garlic Butter Shrimp",
    "description": "Plump shrimp seared fast and bathed in a glossy garlic-butter pan sauce brightened with white wine, lemon, and fresh parsley. Ready in 15 minutes and made to be mopped up with crusty bread.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "shrimp",
        "quantity": 4,
        "note": "large (16-20 count), peeled and deveined, tails on"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "5 tablespoons unsalted, divided"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.06,
        "note": "1 tablespoon"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "6 cloves, minced"
      },
      {
        "ingredientId": "white-wine",
        "quantity": 0.15,
        "note": "1/3 cup dry, such as Pinot Grigio"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juice of one plus wedges to serve"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.04,
        "note": "1/2 teaspoon, to taste",
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.4,
        "note": "3 tablespoons chopped"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 0.03,
        "note": "to season"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.02,
        "note": "freshly ground, to taste"
      },
      {
        "ingredientId": "bread",
        "quantity": 0.5,
        "note": "crusty baguette, for serving",
        "optional": true
      }
    ],
    "steps": [
      "Pat the shrimp very dry with paper towels, then season all over with kosher salt and black pepper. Drying them is what gives you a real sear instead of steaming.",
      "Heat the olive oil with 1 tablespoon of the butter in a large skillet over medium-high until the butter foams and just starts to subside.",
      "Add the shrimp in a single layer and sear undisturbed for about 1 minute per side, until pink and lightly golden but not fully cooked through. Transfer to a plate.",
      "Lower the heat to medium and add 2 more tablespoons butter. Add the minced garlic and red pepper flakes and cook, stirring constantly, for 30-45 seconds until fragrant but not browned.",
      "Pour in the white wine and scrape up any browned bits from the pan. Simmer 1-2 minutes to cook off the raw alcohol and reduce slightly.",
      "Stir in the lemon juice and the remaining 2 tablespoons butter, swirling the pan off the heat so the butter emulsifies into a glossy sauce.",
      "Return the shrimp and any resting juices to the pan and toss for about 1 minute, just until cooked through and coated in sauce.",
      "Off the heat, stir in the fresh parsley and taste for salt. Serve immediately with lemon wedges and crusty bread to soak up the sauce."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 7,
    "cookTimeMinutes": 8,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy frozen shrimp and thaw them yourself under cold water - it is far cheaper than the thawed seafood-counter price and just as good.",
      "Save the shells in the freezer and simmer them later for a quick seafood stock.",
      "Skip the wine and use an extra splash of lemon juice with a little water or chicken broth - the sauce still comes together beautifully."
    ],
    "substitutions": [
      {
        "forIngredientId": "white-wine",
        "swap": "Chicken broth with an extra squeeze of lemon",
        "savings": "Avoids buying a whole bottle of wine"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "1 tablespoon dried parsley, stirred in earlier",
        "savings": "About $1.50 vs a fresh bunch"
      },
      {
        "forIngredientId": "shrimp",
        "swap": "Frozen shrimp thawed at home",
        "savings": "30-40% cheaper than fresh-counter shrimp"
      }
    ],
    "estimatedNutrition": {
      "calories": 280,
      "protein": 24,
      "carbs": 3,
      "fat": 18,
      "fiber": 0
    },
    "emoji": "🦐",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "seafood",
      "quick",
      "weeknight",
      "15-minute",
      "garlic",
      "pan-sauce",
      "low-carb",
      "date-night"
    ]
  },
  {
    "id": "cur-lemon-herb-salmon",
    "name": "Lemon Herb Salmon",
    "description": "Crispy-skinned salmon fillets pan-seared and basted in a bright lemon-garlic butter, finished with fresh dill and parsley. A fast, restaurant-quality dinner with flaky, moist fish and a glossy pan sauce that comes together in one skillet.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "salmon",
        "quantity": 2,
        "note": "two 6 oz skin-on fillets"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.04,
        "note": "1 tbsp for searing"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.06,
        "note": "2 tbsp for basting"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.08,
        "note": "2 cloves, smashed"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "half juiced, half sliced for the pan"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of the lemon"
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 0.25,
        "note": "2 tbsp chopped"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.2,
        "note": "2 tbsp chopped"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      }
    ],
    "steps": [
      "Pat the salmon fillets very dry with paper towels, then season both sides generously with salt and pepper. Letting them sit dry for 10 minutes helps the skin crisp.",
      "Heat the olive oil in a stainless or cast-iron skillet over medium-high until it shimmers. Lay the fillets in skin-side down, pressing each gently with a spatula for 20 seconds so the skin makes full contact and stays flat.",
      "Sear undisturbed for 4 to 5 minutes until the skin is deep golden and crisp and the flesh has turned opaque about two-thirds up the side.",
      "Flip the fillets and cook the flesh side for 1 to 2 minutes, until the salmon reaches 125 to 130F at the thickest part for a moist, just-cooked center.",
      "Reduce heat to medium and add the butter, smashed garlic, and lemon slices to the pan. Once the butter foams, tilt the skillet and spoon the lemon-garlic butter over the fillets continuously for 1 minute to baste.",
      "Squeeze in the juice from the remaining lemon half and stir to make a glossy pan sauce, scraping up any browned bits.",
      "Remove from heat and shower with the lemon zest, fresh dill, and parsley. Spoon the pan sauce over the top and serve immediately."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a whole side of salmon and portion it yourself, or use frozen fillets thawed overnight in the fridge, both run cheaper per pound than the fresh counter.",
      "Dried dill (1 tsp) can stand in for fresh and is far cheaper if you don't already have a bunch on hand.",
      "Save the seared skin scraps and bake them crisp for a snack so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Use trout or cod fillets, cooking cod a little longer since it's leaner",
        "savings": "Saves about $3-4 per serving"
      },
      {
        "forIngredientId": "dill-fresh",
        "swap": "Dried dill or fresh thyme",
        "savings": "Saves about $2 vs a fresh bunch"
      },
      {
        "forIngredientId": "butter",
        "swap": "Extra olive oil for basting",
        "savings": "Saves a few cents and makes it dairy-free"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 34,
      "carbs": 4,
      "fat": 30,
      "fiber": 1
    },
    "emoji": "🐟",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "salmon",
      "seafood",
      "pan-seared",
      "lemon",
      "herbs",
      "quick",
      "one-pan",
      "high-protein",
      "gluten-free",
      "weeknight"
    ]
  },
  {
    "id": "cur-chicken-etouffee",
    "name": "Chicken Etouffee",
    "description": "A soul-warming Louisiana classic: tender chicken smothered in a deeply savory, roux-thickened gravy built on the Cajun holy trinity of onion, celery, and bell pepper. Slow-simmered with Creole seasoning and finished with fresh parsley and scallion, then ladled over fluffy white rice.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless, cut into bite-size pieces"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.4,
        "note": "for the roux"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.3,
        "note": "all-purpose, for the roux"
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "celery",
        "quantity": 0.4,
        "note": "about 2 stalks, diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "green, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "4 cloves, minced"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "about 2.5 cups"
      },
      {
        "ingredientId": "creole-seasoning",
        "quantity": 0.5
      },
      {
        "ingredientId": "cajun-seasoning",
        "quantity": 0.25,
        "optional": true
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.1,
        "note": "2 leaves"
      },
      {
        "ingredientId": "thyme",
        "quantity": 0.05,
        "note": "dried"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.05,
        "optional": true,
        "note": "to taste"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.05
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.05,
        "optional": true
      },
      {
        "ingredientId": "butter",
        "quantity": 0.15,
        "note": "to finish"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.3,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.25,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "rice",
        "quantity": 4,
        "note": "cooked white rice for serving"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.05
      }
    ],
    "steps": [
      "Season the chicken pieces with salt, pepper, and half the Creole seasoning; set aside. Start your rice cooking so it's ready when the etouffee is done.",
      "Make the roux: in a heavy pot or Dutch oven, heat the vegetable oil over medium, then whisk in the flour. Cook, stirring constantly, for 8-12 minutes until it turns the color of peanut butter. Don't rush it or let it burn — this is the backbone of the dish.",
      "Add the onion, celery, and bell pepper (the holy trinity) directly to the roux. Stir and cook 5-6 minutes until softened, then add the garlic and cook 1 minute more.",
      "Slowly pour in the chicken broth while whisking to prevent lumps. Add the bay leaves, thyme, remaining Creole seasoning, Cajun seasoning, cayenne, and Worcestershire. Stir until the gravy is smooth.",
      "Bring to a gentle simmer, then add the chicken. Cover partially and simmer 25-30 minutes, stirring occasionally, until the chicken is tender and the sauce has thickened to a rich, gravy-like consistency.",
      "Discard the bay leaves. Stir in the butter and a splash of hot sauce; taste and adjust salt, pepper, and heat. The sauce should coat the back of a spoon.",
      "Stir in most of the scallions and parsley, reserving some for garnish. Ladle the etouffee over bowls of hot white rice, top with the reserved scallion and parsley, and serve."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Boneless chicken thighs are cheaper than breast, stay juicier through the long simmer, and give the gravy more flavor.",
      "Make your own roux from flour and oil instead of buying thickeners — it costs pennies and is the authentic way.",
      "Buy a whole bunch of celery and a single bell pepper; you only need a couple stalks and one pepper, so save the rest for next week's cooking."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use bone-in thighs or drumsticks and pull the meat off after simmering",
        "savings": "Bone-in cuts are usually cheaper per pound and add more flavor to the gravy"
      },
      {
        "forIngredientId": "creole-seasoning",
        "swap": "Mix your own from paprika, garlic powder, onion powder, cayenne, oregano, and thyme",
        "savings": "Saves buying a dedicated blend if you already stock basic spices"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Butter makes a richer roux",
        "savings": "Use whatever fat you already have on hand to avoid an extra purchase"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 34,
      "carbs": 52,
      "fat": 19,
      "fiber": 3
    },
    "emoji": "🍲",
    "accentColor": "bg-orange-100",
    "cuisine": "Cajun",
    "tags": [
      "cajun",
      "creole",
      "louisiana",
      "comfort-food",
      "one-pot",
      "smothered",
      "southern",
      "rice-bowl"
    ]
  },
  {
    "id": "cur-chicken-tinga-tacos",
    "name": "Chicken Tinga Tacos",
    "description": "Tender shredded chicken simmered in a smoky chipotle-tomato sauce, piled into warm corn tortillas and finished with queso fresco, avocado, and a squeeze of lime. Tinga poblana is a Puebla classic where the deep smoke of chipotles in adobo does all the heavy lifting — easy weeknight cooking, taqueria-level flavor.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless, for poaching and shredding"
      },
      {
        "ingredientId": "tomato",
        "quantity": 4,
        "note": "ripe roma; or sub 1 can crushed tomatoes"
      },
      {
        "ingredientId": "chipotle-in-adobo",
        "quantity": 0.5,
        "note": "2-3 chiles plus 1 tbsp adobo sauce, to taste"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 1,
        "note": "half sliced for the sauce, half raw for garnish"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.3,
        "note": "reserve from poaching the chicken"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1
      },
      {
        "ingredientId": "oregano",
        "quantity": 1,
        "note": "Mexican oregano preferred, dried"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "tbsp, for frying the sauce"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 12,
        "note": "corn tortillas, 3 per person"
      },
      {
        "ingredientId": "queso-fresco",
        "quantity": 0.5,
        "note": "crumbled, for topping"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "sliced, for topping"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.4,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 2,
        "note": "cut into wedges"
      }
    ],
    "steps": [
      "Put the chicken thighs in a saucepan with half the onion (kept in a chunk), 1 garlic clove, the bay leaf, and a big pinch of salt. Cover with water, bring to a gentle simmer, and poach 18-20 minutes until cooked through. Lift out the chicken and reserve about 1/3 cup of the poaching broth.",
      "While the chicken cooks, char the tomatoes in a dry skillet (or under the broiler) until blistered and soft, about 6-8 minutes, turning occasionally. This deepens the sauce.",
      "Blend the charred tomatoes with the chipotles, their adobo sauce, the remaining 2 garlic cloves, the reserved broth, and the oregano until smooth.",
      "When the chicken is cool enough to handle, shred it into bite-size strands with two forks.",
      "Heat the oil in a skillet over medium-high. Add the remaining sliced onion and cook until softened and lightly golden, 4-5 minutes.",
      "Pour in the blended chipotle-tomato sauce (stand back, it will splatter) and fry it, stirring, for 5 minutes until it darkens and thickens slightly.",
      "Add the shredded chicken, toss to coat, and simmer 5-8 minutes until the chicken has soaked up the sauce and it clings without being soupy. Season with salt and add a splash of broth if it tightens too much.",
      "Warm the corn tortillas on a dry skillet until pliable and lightly toasted, stacking them under a towel to keep them soft.",
      "Build the tacos: a heap of tinga per tortilla, topped with raw onion, crumbled queso fresco, avocado, cilantro, and a squeeze of lime."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Poach a whole bone-in chicken or use leftover rotisserie chicken instead of thighs — both stretch further and the carcass makes a richer broth for the sauce.",
      "One small can of chipotles in adobo lasts several batches; freeze the leftovers in a small bag and snap off a chile when you need one.",
      "Char the tomatoes and onion together on the same dry skillet to skip extra oil and get smoky flavor for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Shredded rotisserie chicken or leftover poached chicken breast",
        "savings": "Uses up leftovers, saves ~$3 and 20 min"
      },
      {
        "forIngredientId": "tomato",
        "swap": "1 can crushed tomatoes, no charring needed",
        "savings": "About $1 cheaper off-season and faster"
      },
      {
        "forIngredientId": "queso-fresco",
        "swap": "Crumbled feta or cotija",
        "savings": "Often already in the fridge; similar salty crumble"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 34,
      "carbs": 38,
      "fat": 17,
      "fiber": 7
    },
    "emoji": "🌮",
    "accentColor": "bg-orange-100",
    "cuisine": "Mexican",
    "tags": [
      "tacos",
      "chicken",
      "chipotle",
      "smoky",
      "weeknight",
      "mexican",
      "shredded-chicken",
      "gluten-free"
    ]
  },
  {
    "id": "cur-pork-tamales",
    "name": "Pork Tamales",
    "description": "Tender chile-braised pork shoulder wrapped in soft, fluffy masa and steamed in corn husks. A labor-of-love Mexican classic worth the effort — make a big batch and freeze.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "pork-shoulder",
        "quantity": 6,
        "note": "cut into 2-inch chunks for braising"
      },
      {
        "ingredientId": "masa-harina",
        "quantity": 0.6,
        "note": "masa harina para tamales (corn flour treated with lime)"
      },
      {
        "ingredientId": "coconut-oil",
        "quantity": 0.5,
        "note": "stand-in for lard/manteca — use lard if you have it for the most authentic flavor and texture"
      },
      {
        "ingredientId": "ancho-chili-powder",
        "quantity": 0.4,
        "note": "from dried ancho/guajillo chiles — the backbone of the red chile sauce"
      },
      {
        "ingredientId": "chipotle-in-adobo",
        "quantity": 0.3,
        "note": "adds smoke and a little heat to the chile sauce"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "warm — for both the masa and the chile sauce; reserve pork braising liquid too"
      },
      {
        "ingredientId": "white-onion",
        "quantity": 0.75
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "about 5-6 cloves"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.15
      },
      {
        "ingredientId": "oregano",
        "quantity": 0.1,
        "note": "Mexican oregano if available"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.05,
        "note": "2 leaves for the braise"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.1,
        "note": "lightens the masa so it steams up fluffy"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "or 1 small can — adds body to the red sauce"
      }
    ],
    "steps": [
      "Place the pork shoulder chunks in a pot with half the white onion, the garlic, bay leaves, 1 tsp salt, and water to cover. Bring to a boil, then simmer covered for about 1.5 hours until fork-tender. Reserve the braising broth; shred the pork.",
      "Make the chile sauce: toast the ancho chili powder briefly, then blend it with the chipotle in adobo, the remaining onion, the tomato, cumin, oregano, and 1 cup of the warm reserved broth until smooth. Simmer this sauce 10 minutes until thickened, then fold in the shredded pork and season with salt.",
      "Soak about 30 dried corn husks (not in catalog — buy a bag) in hot water for 30 minutes until pliable, then drain and pat dry.",
      "Make the masa: beat the coconut oil (or lard) until fluffy, then mix in the masa harina, baking powder, and 1 tsp salt. Gradually add warm chicken broth and reserved pork broth until you have a spreadable, peanut-butter-like dough — a small ball should float in water when ready.",
      "Spread a thin 1/4-inch layer of masa over the smooth side of each husk, leaving a border, then spoon a line of the chile pork down the center.",
      "Fold the husk sides in over the filling so the masa encloses it, then fold the empty bottom flap up. Stand the tamales upright, folded-end down, packed snugly in a steamer basket.",
      "Steam over simmering water, covered, for 60-75 minutes. Keep the water topped up so it never boils dry — the masa should pull cleanly away from the husk when done.",
      "Let the tamales rest 10 minutes off the heat so the masa firms up, then serve hot with extra chile sauce, salsa, or crema."
    ],
    "totalTimeMinutes": 210,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 150,
    "difficulty": "hard",
    "equipment": [
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Pork shoulder is one of the cheapest cuts and the braise stretches it across dozens of tamales — perfect for feeding a crowd cheaply.",
      "Tamales freeze beautifully: make a double batch, freeze cooked tamales, and re-steam or microwave for fast meals later.",
      "Save the pork braising broth to loosen the masa instead of buying extra — it adds free flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-shoulder",
        "swap": "Bone-in chicken thighs, braised and shredded the same way",
        "savings": "Often cheaper per pound and cooks faster"
      },
      {
        "forIngredientId": "coconut-oil",
        "swap": "Real lard (manteca) for the most authentic, tender masa",
        "savings": "Lard is usually cheaper than coconut oil and traditional"
      },
      {
        "forIngredientId": "ancho-chili-powder",
        "swap": "Whole dried guajillo + ancho chiles, soaked and blended",
        "savings": "Buying whole dried chiles in bulk is cheaper than ground"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 30,
      "carbs": 38,
      "fat": 27,
      "fiber": 5
    },
    "emoji": "🫔",
    "accentColor": "bg-amber-100",
    "cuisine": "Mexican",
    "tags": [
      "tamales",
      "pork",
      "masa",
      "steamed",
      "make-ahead",
      "freezer-friendly",
      "party",
      "gluten-free"
    ]
  },
  {
    "id": "cur-peruvian-lomo-saltado",
    "name": "Peruvian Lomo Saltado",
    "description": "Peru's iconic stir-fry: strips of seared sirloin tossed with red onion, tomato, and aji amarillo, deglazed with soy sauce and red wine vinegar, then folded together with crispy french fries and served over white rice. A delicious clash of Andean and Chinese-Peruvian (chifa) cooking.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sirloin-steak",
        "quantity": 4,
        "note": "beef sirloin or tenderloin, cut into 1/2-inch strips"
      },
      {
        "ingredientId": "red-onion",
        "quantity": 1,
        "note": "large, cut into thick wedges/petals"
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "firm Roma, seeded and cut into wedges"
      },
      {
        "ingredientId": "aji-amarillo-paste",
        "quantity": 0.25,
        "note": "Peruvian yellow chili paste"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3,
        "note": "tablespoons"
      },
      {
        "ingredientId": "red-wine-vinegar",
        "quantity": 2,
        "note": "tablespoons"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "roughly chopped, to finish"
      },
      {
        "ingredientId": "frozen-fries",
        "quantity": 0.5,
        "note": "or hand-cut potatoes deep-fried"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 4,
        "note": "white rice, steamed, to serve"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3,
        "note": "tablespoons, for high-heat searing"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 1,
        "note": "freshly ground, to taste"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5,
        "note": "teaspoon"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "optional": true,
        "note": "aji amarillo strips if you can find them, else a thin chili for heat"
      }
    ],
    "steps": [
      "Cook the fries first so they're hot and crisp at the end: bake or air-fry the frozen fries (or deep-fry hand-cut potatoes) until golden; hold warm. Steam the jasmine rice separately.",
      "Pat the sirloin strips very dry and season with salt, pepper, and the cumin. Drying is key so the beef sears instead of steaming.",
      "Get a large skillet or wok screaming hot with 1 tablespoon oil. Working in 2 batches so you never crowd the pan, sear the beef hard for about 1 minute per side until browned but still pink inside; remove to a plate. Add a little oil between batches.",
      "In the same hot pan add another tablespoon of oil, then the red onion wedges. Stir-fry 1 to 2 minutes so they char at the edges but stay crisp-tender, not soft.",
      "Add the garlic and aji amarillo paste and toss for 30 seconds until fragrant, then add the tomato wedges and stir-fry just 1 minute so they soften but hold their shape.",
      "Return the beef and its juices to the pan, then deglaze by pouring the soy sauce and red wine vinegar down the hot sides of the pan; toss hard for 30 to 60 seconds, scraping up the browned bits into a glossy pan sauce. Taste and adjust salt and pepper.",
      "Kill the heat and gently fold the hot fries through the saltado so they soak up the sauce but stay crisp; add the optional chili strips here.",
      "Scatter the chopped cilantro over the top and serve immediately, with the steamed white rice on the side."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Sirloin or flank gives the same result as pricey tenderloin if you slice it thin against the grain and sear it fast and hot.",
      "Frozen fries baked or air-fried are cheaper and far less messy than deep-frying, and they still soak up the sauce.",
      "No aji amarillo paste? A spoonful of any yellow/orange chili paste plus a pinch of turmeric for color gets you most of the way for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "sirloin-steak",
        "swap": "flank-steak or skirt-steak sliced thin against the grain",
        "savings": "Saves ~30% vs tenderloin while staying tender if sliced thin"
      },
      {
        "forIngredientId": "aji-amarillo-paste",
        "swap": "1 tbsp yellow chili/curry paste + pinch turmeric",
        "savings": "Avoids a specialty jar, ~$4 saved"
      },
      {
        "forIngredientId": "frozen-fries",
        "swap": "2 fresh potatoes cut into batons and oven-roasted",
        "savings": "Saves ~$1 and uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 38,
      "carbs": 58,
      "fat": 18,
      "fiber": 4
    },
    "emoji": "🥩",
    "accentColor": "bg-amber-100",
    "cuisine": "Peruvian",
    "tags": [
      "peruvian",
      "stir-fry",
      "beef",
      "comfort-food",
      "chifa",
      "weeknight",
      "high-protein"
    ]
  },
  {
    "id": "cur-korean-japchae",
    "name": "Korean Japchae",
    "description": "Korea's beloved stir-fried glass noodle dish: chewy sweet potato noodles tossed with marinated beef, shiitake, spinach, carrot, and onion in a glossy sesame-soy sauce. Each component is cooked separately, then everything is married together for a perfectly balanced sweet-savory bite.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "glass-noodles",
        "quantity": 4,
        "note": "dangmyeon (sweet potato starch noodles), ~200g dry"
      },
      {
        "ingredientId": "beef-sirloin",
        "quantity": 2,
        "note": "cut into thin strips"
      },
      {
        "ingredientId": "spinach",
        "quantity": 0.5,
        "note": "half a bunch, blanched"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "julienned"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.4,
        "note": "stems removed, thinly sliced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "cut into 2-inch lengths"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "optional": true,
        "note": "for thin egg garnish (jidan)"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 5,
        "note": "tablespoons total, split for sauce + beef marinade"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "tablespoons total, split"
      },
      {
        "ingredientId": "toasted-sesame-oil",
        "quantity": 3,
        "note": "tablespoons total, split"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "tablespoon, toasted, for garnish"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "for stir-frying"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25,
        "note": "pinch for beef"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "to season vegetables"
      }
    ],
    "steps": [
      "Marinate the beef: toss sirloin strips with 1 tbsp soy sauce, 1 tsp sugar, 1 tsp sesame oil, a third of the minced garlic, and a pinch of black pepper. Set aside 15 minutes. Slice shiitake and toss with a splash of soy sauce and sesame oil.",
      "Mix the master sauce: combine 4 tbsp soy sauce, 2.5 tbsp sugar, and 2 tbsp sesame oil with the remaining garlic in a bowl; stir until sugar dissolves. Set aside.",
      "Bring a large pot of water to a boil. Blanch the spinach for 30 seconds, then plunge into cold water, squeeze dry, and toss with a pinch of salt and a few drops of sesame oil. Cook the glass noodles in the same boiling water for 6-7 minutes until clear and chewy, then drain and rinse briefly; cut a few times with scissors so they're not too long.",
      "Heat a lightly oiled pan over medium-high. Stir-fry each vegetable separately so each keeps its color and texture: onion with a pinch of salt until soft, then carrot until just tender, then shiitake until glossy, then scallion briefly. Remove each to the big mixing bowl as it finishes.",
      "In the same hot pan, stir-fry the marinated beef until just cooked through and no longer pink, 2-3 minutes; add it to the bowl.",
      "Add the drained noodles and the master sauce to the pan over medium heat. Toss for 1-2 minutes so the noodles absorb the sauce and turn glossy and slightly darkened.",
      "Return all the cooked vegetables, beef, and spinach to the pan (or combine everything in the large bowl). Toss thoroughly with hands or tongs so every strand is evenly coated and seasoned; taste and adjust with a little more soy or sugar.",
      "Finish with toasted sesame seeds and a final drizzle of sesame oil. Top with thin egg ribbons if using, and serve warm or at room temperature."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "Glass noodles are the heart of the dish and cost little, so you can make a generous batch and stretch the more expensive beef thinly across all four servings.",
      "Skip the beef entirely for a fully vegetarian/vegan version that's just as authentic; add extra shiitake and a handful of bean sprouts to keep it hearty.",
      "Buy a whole bunch of spinach and a bag of carrots and use the rest for other meals during the week instead of pricey pre-cut produce."
    ],
    "substitutions": [
      {
        "forIngredientId": "beef-sirloin",
        "swap": "Use shiitake plus extra onion and carrot for a vegan japchae",
        "savings": "Saves about $2-3 per serving by dropping the beef"
      },
      {
        "forIngredientId": "shiitake",
        "swap": "Any fresh mushroom such as cremini or button",
        "savings": "Saves roughly $1 vs specialty shiitake"
      },
      {
        "forIngredientId": "toasted-sesame-oil",
        "swap": "Regular sesame oil with a pinch of toasted sesame seeds",
        "savings": "Saves about $0.50 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 19,
      "carbs": 58,
      "fat": 14,
      "fiber": 4
    },
    "emoji": "🍜",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "korean",
      "noodles",
      "glass-noodles",
      "stir-fry",
      "dairy-free",
      "savory-sweet",
      "dangmyeon",
      "weeknight"
    ]
  },
  {
    "id": "cur-pork-gyoza",
    "name": "Pork Gyoza",
    "description": "Juicy Japanese pan-fried pork dumplings with a crackling-crisp bottom and tender steamed top, packed with napa cabbage, ginger, and garlic. The classic yaki-gyoza method gives you that signature golden crust and soft chewy wrapper. Served with a punchy soy-vinegar-chili dipping sauce.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-pork",
        "quantity": 4,
        "note": "fattier pork (about 20% fat) stays juicy"
      },
      {
        "ingredientId": "napa-cabbage",
        "quantity": 0.4
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.5
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.15,
        "note": "about 3 cloves, finely grated"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.2,
        "note": "about 1 tbsp finely grated"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.06
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 0.04
      },
      {
        "ingredientId": "sake",
        "quantity": 0.03,
        "note": "or dry sherry; helps tenderize"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.01
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.01
      },
      {
        "ingredientId": "dumpling-wrappers",
        "quantity": 1.2,
        "note": "round gyoza skins, about 32-36 wrappers"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.03,
        "note": "for pan-frying"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.02,
        "note": "1 tsp dissolved in water makes the lacy crispy 'wing'",
        "optional": true
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 0.05,
        "note": "for dipping sauce"
      },
      {
        "ingredientId": "chili-oil",
        "quantity": 0.04,
        "note": "rayu, for dipping sauce",
        "optional": true
      }
    ],
    "steps": [
      "Finely chop the napa cabbage, toss with 1 tsp salt, and let it sit 10 minutes. Squeeze out as much liquid as possible with your hands or a clean towel — this is the key to a filling that isn't watery.",
      "In a bowl, combine the ground pork, squeezed cabbage, thinly sliced scallion, grated garlic and ginger, soy sauce, sesame oil, sake, sugar, the remaining salt, and white pepper. Mix vigorously in one direction for about 2 minutes until the filling turns sticky and slightly pasty.",
      "Place a wrapper in your palm and add a rounded teaspoon of filling to the center. Wet the edge with a fingertip of water, fold into a half-moon, and pleat one side toward the center (5-6 pleats), pressing to seal. Stand each gyoza upright with a flat bottom. Repeat.",
      "Heat 1 tbsp vegetable oil in a nonstick or cast-iron skillet over medium-high. Arrange the gyoza flat-side down in a tight circle or rows and fry undisturbed for 2-3 minutes until the bottoms are deep golden brown.",
      "Pour in about 1/3 cup water (mix in the optional cornstarch first for a crispy lace skirt), cover immediately, and steam for 5-6 minutes until the water evaporates and the wrappers turn translucent.",
      "Uncover, drizzle a little more oil around the edges, and let the bottoms re-crisp for 1-2 minutes until shatteringly crisp.",
      "Invert onto a plate so the golden bottoms face up. Whisk together rice vinegar, a splash of soy sauce, and chili oil for dipping. Serve hot."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a pack of round dumpling wrappers from any Asian grocery — they're cheap and save hours versus making dough from scratch.",
      "Napa cabbage is one of the cheapest vegetables by weight; one head makes several batches, and the filling freezes well.",
      "Freeze uncooked gyoza on a tray, then bag them — cook straight from frozen with an extra 2 minutes of steaming for instant future meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-pork",
        "swap": "Use ground chicken or ground turkey with an extra drizzle of sesame oil for moisture",
        "savings": "About the same or slightly cheaper"
      },
      {
        "forIngredientId": "napa-cabbage",
        "swap": "Regular green cabbage, finely chopped and salted the same way",
        "savings": "Saves ~30%"
      },
      {
        "forIngredientId": "sake",
        "swap": "Dry sherry, Shaoxing wine, or just omit",
        "savings": "Saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 24,
      "carbs": 34,
      "fat": 21,
      "fiber": 2
    },
    "emoji": "🥟",
    "accentColor": "bg-rose-100",
    "cuisine": "Japanese",
    "tags": [
      "dumplings",
      "pan-fried",
      "pork",
      "japanese",
      "potstickers",
      "yaki-gyoza",
      "freezer-friendly",
      "high-protein"
    ]
  },
  {
    "id": "cur-chicken-laksa",
    "name": "Chicken Laksa",
    "description": "A rich, fragrant Malaysian-Singaporean curry laksa: laksa spice paste bloomed in oil until the chili oil splits, then simmered with coconut milk and chicken stock into a deep, lightly sweet, savory broth. Ladled over springy rice vermicelli with poached chicken thigh, spongy tofu puffs that soak up the gravy, crunchy bean sprouts, a halved soft-boiled egg, and bright herbs, lime, and sambal on top.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "laksa-paste",
        "quantity": 0.75,
        "note": "store-bought laksa paste (about 6 tbsp)"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1.5,
        "note": "full-fat, ~1.5 cans"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "about 4 cups / 1 L"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "boneless skinless, 1 per serving"
      },
      {
        "ingredientId": "rice-vermicelli",
        "quantity": 4,
        "note": "dried, soaked/cooked; ~1 portion per serving"
      },
      {
        "ingredientId": "tofu-puffs",
        "quantity": 0.5,
        "note": "fried tofu puffs, halved"
      },
      {
        "ingredientId": "bean-sprouts",
        "quantity": 0.5,
        "note": "blanched, for topping"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "soft-boiled, halved, 1/2 per serving"
      },
      {
        "ingredientId": "shrimp-paste",
        "quantity": 0.1,
        "optional": true,
        "note": "belacan, ~1 tsp to deepen the broth"
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 0.05,
        "note": "to season, ~1 tbsp"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.03,
        "note": "palm or white sugar, ~2 tsp"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.1,
        "note": "for frying the paste, ~2 tbsp"
      },
      {
        "ingredientId": "lime",
        "quantity": 2,
        "note": "cut into wedges for serving"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 0.3,
        "note": "or laksa leaf, for garnish"
      },
      {
        "ingredientId": "sambal",
        "quantity": 0.2,
        "optional": true,
        "note": "sambal oelek, served on the side"
      }
    ],
    "steps": [
      "Bring a small pot of water to a boil and gently lower in the eggs; simmer 6.5 minutes for a jammy yolk, then transfer to ice water, peel, and halve. Set aside.",
      "Poach the chicken thighs in the chicken broth over a gentle simmer for 12-14 minutes until just cooked through. Lift out, let rest, then slice or shred; reserve all the broth.",
      "Heat the oil in a heavy pot over medium heat and fry the laksa paste (and shrimp paste, if using) for 4-5 minutes, stirring constantly, until it darkens and the fragrant chili oil separates out around the edges.",
      "Pour in the reserved poaching broth and bring to a simmer, scraping up the paste, then stir in the coconut milk. Simmer gently 10 minutes (do not hard-boil, or the coconut milk can split).",
      "Season the broth with fish sauce and sugar, then taste and adjust until it's savory, lightly sweet, and rounded. Add the tofu puffs and simmer 3-4 minutes so they soak up the gravy.",
      "Meanwhile, soak the rice vermicelli in just-boiled water until pliable (3-4 minutes), then drain; blanch the bean sprouts for 20 seconds and drain.",
      "Divide the vermicelli among 4 bowls and top with sliced chicken, tofu puffs, and bean sprouts. Ladle the hot laksa broth over everything.",
      "Finish each bowl with a soft-boiled egg half, a handful of cilantro or laksa leaf, a lime wedge, and a spoonful of sambal on the side."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a good jarred laksa paste once and it does the heavy lifting for several batches — far cheaper and faster than buying 12 individual spices.",
      "Chicken thighs are cheaper than breast and stay juicy in the broth; poaching them in the stock builds extra flavor for free.",
      "Stretch the broth with a little extra stock or water and add more tofu puffs and bean sprouts instead of more meat to feed more people cheaply."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use chicken breast or even canned chicken if that's what's on hand",
        "savings": "$1-2 per batch"
      },
      {
        "forIngredientId": "rice-vermicelli",
        "swap": "Swap in plain rice noodles or even ramen/egg noodles",
        "savings": "~$1"
      },
      {
        "forIngredientId": "tofu-puffs",
        "swap": "Use cubes of firm tofu or fish cake slices",
        "savings": "about the same, but easier to find"
      }
    ],
    "estimatedNutrition": {
      "calories": 580,
      "protein": 34,
      "carbs": 45,
      "fat": 30,
      "fiber": 4
    },
    "emoji": "🍜",
    "accentColor": "bg-orange-100",
    "cuisine": "Malaysian",
    "tags": [
      "laksa",
      "noodle soup",
      "curry",
      "coconut",
      "spicy",
      "southeast asian",
      "chicken",
      "comfort food"
    ]
  },
  {
    "id": "cur-singapore-noodles",
    "name": "Singapore Noodles",
    "description": "Springy thin rice vermicelli tossed in a fragrant golden curry powder, studded with char siu, shrimp, ribbons of egg, and crisp peppers and bean sprouts. A Cantonese stir-fry classic — dry, smoky, and never soggy.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "vermicelli-rice-noodles",
        "quantity": 4,
        "note": "thin dried rice vermicelli (mai fun)"
      },
      {
        "ingredientId": "curry-powder",
        "quantity": 2.5,
        "note": "Madras-style; the defining flavor"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.5,
        "note": "boosts the golden color"
      },
      {
        "ingredientId": "shrimp",
        "quantity": 2,
        "note": "small, peeled and deveined"
      },
      {
        "ingredientId": "char-siu",
        "quantity": 2,
        "note": "Chinese BBQ pork, sliced thin"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "lightly beaten"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "half red, half green, julienned"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "bean-sprouts",
        "quantity": 0.5,
        "note": "added at the end for crunch"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "cut into 2-inch batons"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "thumb, minced"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3,
        "note": "tablespoons"
      },
      {
        "ingredientId": "rice-wine",
        "quantity": 1,
        "note": "Shaoxing wine, tablespoon"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "teaspoon, balances the curry"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "teaspoon, finishing"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3,
        "note": "tablespoons, for high-heat stir-frying"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25,
        "note": "teaspoon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon, to taste"
      }
    ],
    "steps": [
      "Soak the rice vermicelli in hot (not boiling) water for 6-8 minutes until just pliable but still firm, then drain well and snip into shorter lengths with scissors. Spread out so the strands don't clump.",
      "In a small bowl, stir the curry powder and turmeric into the soy sauce, Shaoxing wine, sugar, and white pepper to make a slurry — pre-mixing keeps the curry from scorching in the wok.",
      "Heat a wok or wide skillet over high heat until smoking. Add 1 tablespoon oil, pour in the beaten eggs, scramble into soft curds, and remove. Sear the shrimp 60-90 seconds until just pink and set aside with the egg.",
      "Add the remaining 2 tablespoons oil. Stir-fry the garlic and ginger for 15 seconds until fragrant, then add the onion and bell peppers and toss hard for 1-2 minutes so they stay crisp-tender.",
      "Add the sliced char siu and toss for 30 seconds to warm through and pick up wok heat.",
      "Lower heat slightly, add the drained noodles, then pour the curry slurry evenly over the top. Toss continuously with tongs or two spatulas for 2-3 minutes until every strand is coated golden and the noodles are dry and springy — keep them moving so the curry toasts but doesn't burn.",
      "Return the egg and shrimp to the wok, add the bean sprouts and scallions, and toss just 30-45 seconds so the sprouts stay crunchy.",
      "Kill the heat, drizzle with sesame oil, and adjust with salt or a pinch more curry powder. Serve immediately while hot and fragrant."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Char siu is the priciest item — swap in leftover roast pork, ham, or even sliced chicken thigh and nobody will complain.",
      "Buy a big bag of dried rice vermicelli; it's cheap, stores forever, and one bag makes several meals.",
      "Skip pre-mixed 'Singapore noodle sauce' jars — a good curry powder plus soy and a pinch of sugar does the job for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "char-siu",
        "swap": "Leftover ham, roast pork, or sliced chicken thigh",
        "savings": "~$2.50/recipe"
      },
      {
        "forIngredientId": "shrimp",
        "swap": "Extra egg or pan-fried tofu for a budget protein",
        "savings": "~$3/recipe"
      },
      {
        "forIngredientId": "rice-wine",
        "swap": "Dry sherry or a splash of rice vinegar plus water",
        "savings": "~$0.50/recipe"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 27,
      "carbs": 56,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🍜",
    "accentColor": "bg-yellow-100",
    "cuisine": "Cantonese (Hong Kong-style)",
    "tags": [
      "stir-fry",
      "rice noodles",
      "curry",
      "wok",
      "char siu",
      "shrimp",
      "spicy",
      "takeout-style"
    ]
  },
  {
    "id": "cur-vegetable-samosas",
    "name": "Vegetable Samosas",
    "description": "Crisp, flaky North Indian samosas with a flaky maida pastry shell wrapped around a spiced potato-and-pea filling. The dough is made stiff with a generous rub of oil (moyan) so it fries up bubbly and shatteringly crisp, while the filling is seasoned with toasted cumin, coriander, garam masala, and tangy amchur for that authentic chaat-shop flavor.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.3,
        "note": "maida / all-purpose flour for the pastry shell"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.25,
        "note": "split: ~3 tbsp rubbed into dough as moyan, rest for deep-frying"
      },
      {
        "ingredientId": "potato",
        "quantity": 3,
        "note": "boiled, peeled and roughly mashed"
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.4
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "optional": true,
        "note": "finely chopped"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "1 tbsp grated fresh ginger"
      },
      {
        "ingredientId": "thai-chili",
        "quantity": 2,
        "note": "green chilies, finely chopped"
      },
      {
        "ingredientId": "cumin-seeds",
        "quantity": 1,
        "note": "1 tsp whole"
      },
      {
        "ingredientId": "coriander",
        "quantity": 1,
        "note": "1.5 tsp ground coriander"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "amchur-powder",
        "quantity": 1,
        "note": "1 tsp dried mango powder for tang"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.3,
        "note": "chopped, stirred into filling"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "to taste, for dough and filling"
      }
    ],
    "steps": [
      "Make the dough: mix the flour with 1/2 tsp salt and about 3 tbsp of the oil (the moyan), rubbing it in until the mixture holds together when pressed into a fist. Add cold water a little at a time and knead into a stiff, smooth dough. Cover and rest 30 minutes.",
      "Make the filling: heat 1 tbsp oil in a pan, crackle the cumin seeds, then add ginger, green chilies, and the optional onion and saute 1-2 minutes. Stir in coriander, turmeric, garam masala, and the peas; cook 2 minutes.",
      "Add the boiled, mashed potatoes, amchur, and salt. Mash and fry together 3-4 minutes until well combined and dry, then fold in the chopped cilantro and let cool completely.",
      "Divide the rested dough into 4 balls. Roll each into a thin oval about 6 inches long, then cut in half to make two semicircles.",
      "Form cones: brush the straight edge with a little water, fold into a cone and press the seam firmly to seal. Fill with about 2 tbsp of potato mixture, then pinch the top opening shut, pleating slightly so it stands upright. Repeat for all 8 samosas.",
      "Heat the remaining oil to a moderate 325-330F (165C) -- not screaming hot. Gently slide in the samosas in batches and fry low and slow for 10-12 minutes, turning, until pale golden and blistered with crisp bubbles.",
      "Increase heat slightly toward the end to deepen the color to golden brown, then drain on a rack or paper towels.",
      "Serve hot with mint-cilantro chutney and tamarind chutney."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Samosas freeze beautifully -- shape a big batch, freeze raw on a tray, then fry straight from frozen so a few cheap potatoes feed a crowd.",
      "Skip store-bought pastry; a flaky shell from flour, oil, and water costs pennies and is far better than wrappers.",
      "Use frozen peas and pantry spices you already have -- the potato filling is one of the cheapest snacks per serving you can make."
    ],
    "substitutions": [
      {
        "forIngredientId": "amchur-powder",
        "swap": "A squeeze of fresh lemon juice or 1/2 tsp lemon zest for the same tang",
        "savings": "Skips buying a specialty spice; uses a lemon you likely already have"
      },
      {
        "forIngredientId": "thai-chili",
        "swap": "1/2 tsp chili powder or a pinch of chili flakes",
        "savings": "Uses pantry spice instead of fresh chilies"
      },
      {
        "forIngredientId": "flour",
        "swap": "Store-bought spring roll or samosa wrappers, folded into triangles",
        "savings": "Trades a little cost for big time savings on dough-making"
      }
    ],
    "estimatedNutrition": {
      "calories": 330,
      "protein": 6,
      "carbs": 42,
      "fat": 15,
      "fiber": 5
    },
    "emoji": "🥟",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "samosa",
      "indian",
      "street-food",
      "fried",
      "vegetarian",
      "vegan",
      "snack",
      "potato",
      "appetizer"
    ]
  },
  {
    "id": "cur-chana-chole",
    "name": "Chana Chole",
    "description": "Punjabi-style chole: tender chickpeas simmered in a deeply spiced onion-tomato-ginger-garlic masala, darkened the traditional way with a black tea bag and finished with garam masala and tangy amchur. Hearty, warming, and entirely plant-based.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chickpeas",
        "quantity": 2,
        "note": "2 cans, drained (or ~1.5 cups dried, soaked overnight)"
      },
      {
        "ingredientId": "onion",
        "quantity": 2,
        "note": "finely chopped"
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "pureed"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5,
        "note": "1 tbsp grated"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.3,
        "note": "5-6 cloves, minced"
      },
      {
        "ingredientId": "thai-chili",
        "quantity": 2,
        "note": "green chilies, slit; sub serrano"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.15,
        "note": "3 tbsp"
      },
      {
        "ingredientId": "cumin-seeds",
        "quantity": 0.1,
        "note": "1 tsp, for tempering"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.05,
        "note": "1 leaf"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.04,
        "note": "1 small stick"
      },
      {
        "ingredientId": "cloves",
        "quantity": 0.03,
        "note": "3-4 whole"
      },
      {
        "ingredientId": "cardamom-green",
        "quantity": 0.04,
        "note": "2 pods"
      },
      {
        "ingredientId": "coriander",
        "quantity": 0.12,
        "note": "1.5 tbsp ground"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.06,
        "note": "2 tsp ground"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.03,
        "note": "0.5 tsp"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 0.06,
        "note": "1.5 tsp Kashmiri-style red chili powder"
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 0.08,
        "note": "1 tsp + a finishing pinch"
      },
      {
        "ingredientId": "amchur-powder",
        "quantity": 0.06,
        "note": "1 tsp dried mango powder for tang"
      },
      {
        "ingredientId": "black-tea",
        "quantity": 0.1,
        "note": "1 tea bag, for traditional dark color",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "to taste"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 0.25,
        "note": "chopped, to garnish"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "wedges to serve"
      }
    ],
    "steps": [
      "If using dried chickpeas, soak overnight, then pressure-cook with a little salt and the optional black tea bag (tied in muslin) until very tender; reserve the cooking liquid. For canned, simmer the drained chickpeas in fresh water with the tea bag for 10 minutes to deepen their color, then remove the tea bag.",
      "Heat the oil in a heavy pot over medium heat. Add the cumin seeds, bay leaf, cinnamon, cloves, and cardamom and let them sizzle for about 30 seconds until fragrant.",
      "Add the chopped onions and cook, stirring often, for 8-10 minutes until deeply golden brown - this browning is the backbone of the dish.",
      "Stir in the ginger, garlic, and slit green chilies and cook for 1-2 minutes until raw smell disappears.",
      "Add the ground coriander, cumin, turmeric, and chili powder; stir for 30 seconds, then pour in the pureed tomatoes. Cook this masala down for 8-10 minutes, until the oil separates and the paste turns thick and glossy.",
      "Add the chickpeas and salt, then pour in enough chickpea cooking liquid or water to reach a thick gravy. Lightly mash a spoonful of chickpeas against the side to thicken the sauce.",
      "Cover and simmer gently for 20-25 minutes, stirring occasionally, so the chickpeas absorb the masala. Add water if it tightens too much.",
      "Stir in the garam masala and amchur powder, simmer 2 more minutes, then taste and adjust salt and tang.",
      "Finish with a pinch of garam masala and chopped cilantro. Serve hot with lemon wedges, alongside bhature, rice, or roti."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 55,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Use dried chickpeas instead of canned - they cost a fraction per serving and give a creamier texture; soak overnight and pressure-cook.",
      "A spent black tea bag (or a piece of dried amla) gives the signature dark color for free, no special ingredient needed.",
      "Buy whole and ground spices from a South Asian grocery in bulk - they're often a third of the supermarket price and far fresher."
    ],
    "substitutions": [
      {
        "forIngredientId": "amchur-powder",
        "swap": "A good squeeze of fresh lemon juice at the end",
        "savings": "Skips a single-use specialty spice you may not own"
      },
      {
        "forIngredientId": "thai-chili",
        "swap": "1/2 tsp extra red chili powder or a chopped jalapeno",
        "savings": "Use whatever fresh chili is cheapest locally"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Ghee (if not keeping it vegan)",
        "savings": "Adds richness; use what's already in the pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 310,
      "protein": 14,
      "carbs": 45,
      "fat": 9,
      "fiber": 12
    },
    "emoji": "🫛",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "punjabi",
      "chickpea",
      "curry",
      "vegan",
      "vegetarian",
      "high-fiber",
      "gluten-free",
      "north-indian",
      "comfort-food"
    ]
  },
  {
    "id": "cur-rajma-masala",
    "name": "Rajma Masala",
    "description": "North Indian comfort food at its finest: red kidney beans simmered until creamy in a slow-cooked onion-tomato masala perfumed with ginger, garlic, and warm whole spices. Finished with garam masala and fresh cilantro, it is rich, soupy, and made to be spooned over fluffy basmati rice (rajma-chawal).",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "kidney-beans",
        "quantity": 2,
        "note": "red kidney beans (rajma); 2 cans drained, or 1.5 cups dried soaked overnight"
      },
      {
        "ingredientId": "onion",
        "quantity": 2,
        "note": "finely chopped"
      },
      {
        "ingredientId": "tomato",
        "quantity": 3,
        "note": "pureed, or 1 can crushed tomatoes"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5,
        "note": "1 tbsp grated"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.3,
        "note": "5-6 cloves, minced"
      },
      {
        "ingredientId": "ghee",
        "quantity": 0.15,
        "note": "3 tbsp; or vegetable oil for vegan"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.05,
        "note": "1 tsp whole cumin seeds for tempering"
      },
      {
        "ingredientId": "bay-leaves",
        "quantity": 0.1,
        "note": "1 leaf"
      },
      {
        "ingredientId": "cardamom-green",
        "quantity": 0.05,
        "note": "2 pods"
      },
      {
        "ingredientId": "cloves",
        "quantity": 0.03,
        "note": "2-3 whole"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.05,
        "note": "1 small stick"
      },
      {
        "ingredientId": "coriander",
        "quantity": 0.1,
        "note": "2 tsp ground coriander"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.05,
        "note": "0.5 tsp"
      },
      {
        "ingredientId": "chili-powder",
        "quantity": 0.08,
        "note": "1.5 tsp Kashmiri chili powder for color"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.02,
        "note": "0.25 tsp, optional for heat",
        "optional": true
      },
      {
        "ingredientId": "garam-masala",
        "quantity": 0.06,
        "note": "1 tsp, added at the end"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1,
        "note": "to taste"
      },
      {
        "ingredientId": "cilantro",
        "quantity": 0.25,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "basmati-rice",
        "quantity": 4,
        "note": "steamed, for serving"
      }
    ],
    "steps": [
      "Drain and rinse the kidney beans (if using dried, soak overnight then pressure-cook with a little salt until fully soft and mashable). Set aside; reserve some bean liquid or water.",
      "Heat the ghee in a heavy pot over medium heat. Add cumin seeds, bay leaf, cardamom, cloves, and cinnamon and let them sizzle for 30 seconds until fragrant.",
      "Add the chopped onion and cook, stirring often, for 8-10 minutes until deep golden brown - this color is the backbone of the dish.",
      "Stir in the ginger and garlic and cook 1 minute, then add the ground coriander, turmeric, and chili powder and stir for 20 seconds to bloom the spices.",
      "Pour in the tomato puree, add salt, and cook this masala down for 8-10 minutes, stirring, until the oil separates and the mixture is thick and jammy (bhuna).",
      "Add the kidney beans along with about 2 cups of water (or reserved bean liquid). Lightly mash a spoonful of beans against the side to thicken the gravy.",
      "Bring to a boil, then simmer uncovered for 20-25 minutes until the beans are creamy and the gravy coats a spoon. Add the cayenne now if using.",
      "Stir in the garam masala, taste and adjust salt, and simmer 2 more minutes. Garnish with fresh cilantro and serve hot over steamed basmati rice."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ],
    "cheapTips": [
      "Dried rajma soaked overnight costs a fraction of canned and tastes better - cook a big batch and freeze portions.",
      "Brown the onions low and slow; this free step builds more flavor than any extra spice can.",
      "Mash a spoonful of beans into the gravy instead of adding cream - it thickens richly for nothing."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "Use vegetable oil to make it fully vegan",
        "savings": "Saves on ghee, which costs more than basic oil"
      },
      {
        "forIngredientId": "tomato",
        "swap": "Use half a can of crushed tomatoes or tomato paste thinned with water",
        "savings": "Cheaper and more consistent than fresh out of season"
      },
      {
        "forIngredientId": "kidney-beans",
        "swap": "Dried kidney beans soaked overnight instead of canned",
        "savings": "Roughly 60% cheaper per serving than canned"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 15,
      "carbs": 68,
      "fat": 9,
      "fiber": 12
    },
    "emoji": "🫘",
    "accentColor": "bg-red-100",
    "cuisine": "North Indian",
    "tags": [
      "rajma",
      "kidney beans",
      "curry",
      "vegetarian",
      "comfort food",
      "punjabi",
      "rajma chawal",
      "gluten-free"
    ]
  },
  {
    "id": "cur-chicken-tagine",
    "name": "Chicken Tagine with Preserved Lemon & Olives",
    "description": "A classic Moroccan braise of bone-in chicken thighs simmered low and slow in a saffron-and-ginger broth, brightened with salty preserved lemon and green olives. Warm with cumin, cinnamon, and turmeric, finished with fresh cilantro. Deeply savory, lemony, and tender enough to fall off the bone.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "bone-in, skin-on thighs (about 1 per serving)"
      },
      {
        "ingredientId": "onion",
        "quantity": 1.5,
        "note": "grated or finely sliced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "4 cloves, minced"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "1 tbsp fresh grated"
      },
      {
        "ingredientId": "saffron",
        "quantity": 0.15,
        "note": "a generous pinch, bloomed in warm water"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 1,
        "note": "1 tsp ground"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 1,
        "note": "1 tsp ground ginger"
      },
      {
        "ingredientId": "cumin",
        "quantity": 1,
        "note": "1.5 tsp ground"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "1 cinnamon stick or 1/2 tsp ground"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "note": "1 tsp sweet"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.2,
        "note": "3 tbsp"
      },
      {
        "ingredientId": "preserved-lemon",
        "quantity": 1,
        "note": "rind only, rinsed and sliced"
      },
      {
        "ingredientId": "green-olives",
        "quantity": 0.5,
        "note": "about 2/3 cup, cracked green olives"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "half a bunch, plus parsley if you have it"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 0.5,
        "note": "about 1.5 cups water or broth"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice of half, to finish"
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
      }
    ],
    "steps": [
      "Bloom the saffron: crush the threads and steep in 3 tablespoons of warm water while you prep. Pat the chicken thighs dry and season all over with salt and pepper.",
      "In a wide heavy pot or tagine, heat the olive oil over medium-high. Brown the chicken skin-side down until deeply golden, about 5 minutes, then turn and brown the other side. Remove and set aside.",
      "Lower the heat to medium. Add the grated onion and cook until soft and translucent, 5-6 minutes, scraping up the browned bits. Stir in the garlic and fresh ginger and cook 1 minute until fragrant.",
      "Add the turmeric, ground ginger, cumin, paprika, and cinnamon. Toast the spices in the oil for 30-45 seconds, stirring constantly, until aromatic.",
      "Return the chicken to the pot skin-side up, nestling it into the onions. Pour in the bloomed saffron with its water plus the broth so the liquid comes about halfway up the chicken. Bring to a gentle simmer.",
      "Cover and braise on low for 35-40 minutes, basting the chicken with the sauce once or twice, until the meat is very tender and nearly falling off the bone.",
      "Add the preserved lemon rind and green olives, scattering them around the chicken. Simmer uncovered 10-12 minutes more to meld the flavors and reduce the sauce to a silky consistency.",
      "Stir in the lemon juice and most of the chopped cilantro. Taste and adjust salt (go easy, the olives and lemon are salty). Garnish with remaining cilantro and serve hot over couscous or with bread to soak up the sauce."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 60,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Bone-in, skin-on thighs are cheaper than breasts, stay juicier in a braise, and the bones enrich the sauce for free.",
      "Saffron is pricey but a tiny pinch goes a long way; one small vial lasts many tagines. If you must skip it, a little extra turmeric keeps the golden color.",
      "Make your own preserved lemons: pack quartered lemons with salt in a jar and forget them for 3-4 weeks. Pennies versus the store jar."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use bone-in chicken drumsticks, which braise just as tenderly and often cost even less per pound.",
        "savings": "~25%"
      },
      {
        "forIngredientId": "saffron",
        "swap": "Skip the saffron and use an extra 1/2 tsp turmeric plus a pinch of paprika for color and warmth.",
        "savings": "~$3 per batch"
      },
      {
        "forIngredientId": "preserved-lemon",
        "swap": "No preserved lemon? Use the zest and juice of a fresh lemon plus a pinch of extra salt for a similar bright, salty lift.",
        "savings": "~$2"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 34,
      "carbs": 9,
      "fat": 27,
      "fiber": 2
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Moroccan",
    "tags": [
      "moroccan",
      "braise",
      "one-pot",
      "chicken",
      "preserved-lemon",
      "olives",
      "gluten-free",
      "dairy-free",
      "comfort-food",
      "weeknight-special"
    ]
  },
  {
    "id": "cur-polish-pierogi",
    "name": "Polish Pierogi (Pierogi Ruskie)",
    "description": "Tender hand-pinched dumplings stuffed with creamy potato and farmer's cheese, boiled then pan-fried in butter with golden onions. The classic Polish pierogi ruskie — comfort food worth the folding.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.55,
        "note": "all-purpose, about 2.5 cups for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "binds the dough"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 0.4,
        "note": "2 tbsp in dough, rest to serve"
      },
      {
        "ingredientId": "potato",
        "quantity": 3,
        "note": "starchy, for the filling"
      },
      {
        "ingredientId": "cottage-cheese",
        "quantity": 0.6,
        "note": "stand-in for Polish twaróg/farmer's cheese; drain well"
      },
      {
        "ingredientId": "onion",
        "quantity": 2,
        "note": "one for filling, one for frying"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "for sauteing onions and finishing"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.03
      }
    ],
    "steps": [
      "Make the dough: mound the flour, make a well, and add the egg, 2 tbsp sour cream, a big pinch of salt, and about 3/4 cup warm water. Mix, then knead 8-10 minutes until smooth and elastic. Cover and rest 30 minutes while you make the filling.",
      "Boil the peeled, chunked potatoes in salted water until fork-tender, about 15 minutes; drain well and mash until smooth with no lumps.",
      "Finely dice one onion and saute in 1 tbsp butter until soft and golden; stir into the warm mashed potato along with the drained cottage cheese, then season generously with salt and pepper. Let the filling cool.",
      "Roll the rested dough thin (about 2mm) on a floured surface and cut out 3-inch rounds with a glass or cutter, re-rolling scraps.",
      "Place a teaspoon of filling on each round, fold into a half-moon, and pinch the edges firmly to seal — make sure no filling reaches the seam or they'll burst.",
      "Bring a wide pot of salted water to a gentle boil and cook the pierogi in batches; they're done about 2-3 minutes after they float to the surface. Lift out with a slotted spoon.",
      "Meanwhile, slice the second onion and fry slowly in the remaining butter until deeply golden and sweet.",
      "Add the drained boiled pierogi to the buttery onion pan and fry 1-2 minutes per side until lightly crisp and golden.",
      "Serve hot, topped with the fried onions and butter and a dollop of sour cream."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 55,
    "cookTimeMinutes": 35,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Pierogi freeze beautifully — make a double batch, freeze them raw on a tray, then boil straight from frozen another night so the effort pays off twice.",
      "Cottage cheese stands in well for pricey farmer's cheese; press it in a sieve or cheesecloth to drain the excess liquid first.",
      "Save the starchy potato water and use a splash of it to loosen the filling instead of buying extra dairy."
    ],
    "substitutions": [
      {
        "forIngredientId": "cottage-cheese",
        "swap": "Mash in extra potato plus a little farmer's cheese or ricotta",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "sour-cream",
        "swap": "Plain Greek yogurt, both in the dough and to serve",
        "savings": "~$0.60"
      },
      {
        "forIngredientId": "butter",
        "swap": "Vegetable oil for frying the onions",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 16,
      "carbs": 72,
      "fat": 13,
      "fiber": 5
    },
    "emoji": "🥟",
    "accentColor": "bg-amber-100",
    "cuisine": "Polish",
    "tags": [
      "polish",
      "dumplings",
      "comfort-food",
      "vegetarian",
      "pierogi-ruskie",
      "potato",
      "make-ahead"
    ]
  },
  {
    "id": "cur-pork-schnitzel",
    "name": "Pork Schnitzel",
    "description": "Classic German Schnitzel Wiener Art: pork chops pounded paper-thin, breaded in flour, egg, and breadcrumbs, then shallow-fried in plenty of fat so the coating puffs and turns golden and crisp. The signature is the loose, wavy crust that separates slightly from the meat, served with a squeeze of fresh lemon.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pork-chop",
        "quantity": 4,
        "note": "boneless pork loin chops, pounded to ~1/4 inch"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "about 3/4 cup for dredging"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.5,
        "note": "about 1.5 cups fine breadcrumbs or semmelbrösel"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.4,
        "note": "neutral oil for shallow-frying, ~1/2 inch deep"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "cut into wedges for serving"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.03
      },
      {
        "ingredientId": "butter",
        "quantity": 0.1,
        "optional": true,
        "note": "a knob added to the frying oil at the end for flavor"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.1,
        "optional": true,
        "note": "chopped, to garnish"
      }
    ],
    "steps": [
      "Place each pork chop between two sheets of plastic wrap and pound with a meat mallet or heavy pan until an even 1/4 inch thick. Pat completely dry and season both sides with salt and pepper.",
      "Set up three shallow dishes: one with flour, one with the eggs beaten until smooth, and one with the breadcrumbs.",
      "Dredge each cutlet in flour and shake off the excess, then dip in egg to coat fully, then press lightly into the breadcrumbs. Do not pack the crumbs hard — a loose coating lets the crust puff.",
      "Heat about 1/2 inch of oil in a wide skillet to 330-340F (170C); the oil should shimmer and a crumb should sizzle immediately. Add the optional knob of butter for color and flavor.",
      "Lay one or two schnitzel into the oil without crowding. Fry 2-3 minutes until deep golden, spooning hot oil over the top so the breading lifts and forms its characteristic waves.",
      "Flip and fry the second side 1-2 minutes more until golden and the pork is just cooked through.",
      "Lift onto a paper-towel-lined rack and let drain; keep warm while you fry the rest, topping up oil and keeping the temperature steady.",
      "Garnish with chopped parsley and serve immediately with lemon wedges to squeeze over the top."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole pork loin and slice your own cutlets — far cheaper per pound than pre-cut chops, and you control the thickness.",
      "Make your own breadcrumbs by blitzing stale bread; it costs almost nothing and crisps up better than store-bought.",
      "Reuse the strained frying oil two or three more times for other fried dishes instead of discarding it."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-chop",
        "swap": "Use thin-pounded chicken-breast for Schnitzel Wiener Art / chicken schnitzel",
        "savings": "Chicken breast usually runs cheaper per pound than pork loin chops"
      },
      {
        "forIngredientId": "breadcrumbs",
        "swap": "Crush saltines or stale bread in a bag for the crumb coating",
        "savings": "Saves the cost of a bag of breadcrumbs, roughly $2-3"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Any neutral oil like canola works for frying",
        "savings": "Buy the store-brand jug; about 30% cheaper per ounce"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 38,
      "carbs": 24,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🍖",
    "accentColor": "bg-amber-100",
    "cuisine": "German",
    "tags": [
      "german",
      "pork",
      "fried",
      "breaded",
      "crispy",
      "comfort-food",
      "dinner",
      "schnitzel"
    ]
  },
  {
    "id": "cur-swedish-meatballs",
    "name": "Swedish Meatballs (Köttbullar)",
    "description": "Tender beef-and-pork meatballs bound with a milk-soaked breadcrumb panade and warmed with allspice and nutmeg, pan-fried and simmered in a silky cream gravy. Served the classic way with a spoonful of lingonberry jam.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "quantity": 2,
        "note": "half of the meat mix"
      },
      {
        "ingredientId": "ground-pork",
        "quantity": 2,
        "note": "other half of the meat mix"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.4,
        "note": "for the milk panade"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.3,
        "note": "to soak the breadcrumbs"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.75,
        "note": "finely grated or minced, sweated in butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "allspice",
        "quantity": 0.5,
        "note": "ground; the defining warm spice"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25
      },
      {
        "ingredientId": "salt",
        "quantity": 0.2
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.15
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "for frying meatballs and the gravy roux"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "for the gravy roux"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 0.5,
        "note": "about 2 cups"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.3,
        "note": "for the cream gravy"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.1,
        "note": "small splash for color and savory depth"
      },
      {
        "ingredientId": "dijon",
        "quantity": 0.1,
        "optional": true,
        "note": "stirred into the gravy"
      },
      {
        "ingredientId": "jam",
        "quantity": 0.25,
        "note": "lingonberry jam, to serve on the side"
      },
      {
        "ingredientId": "potato",
        "quantity": 4,
        "optional": true,
        "note": "boiled or mashed, to serve"
      }
    ],
    "steps": [
      "Tear or measure the breadcrumbs into a bowl, pour over the milk, and let soak for 5-10 minutes until the mixture is soft and pasty.",
      "Melt a small knob of the butter in a skillet over medium heat and gently sweat the finely grated onion for 3-4 minutes until soft and translucent but not browned; let it cool slightly.",
      "In a large bowl combine the ground beef, ground pork, soaked breadcrumb panade, cooked onion, egg, allspice, nutmeg, salt, and pepper. Mix with your hands just until uniform, then roll into small balls about 1 inch across (wet hands help).",
      "Melt the remaining butter in the skillet over medium heat and fry the meatballs in batches, rolling them around so they brown on all sides and are nearly cooked through, about 6-8 minutes per batch. Transfer to a plate.",
      "In the same pan with all the browned bits, sprinkle in the flour and whisk into the butter and fat to form a roux; cook 1 minute until lightly golden.",
      "Gradually whisk in the beef broth, then the cream, scraping up the fond. Add the soy sauce and Dijon and simmer, whisking, until the gravy thickens enough to coat a spoon, 3-5 minutes.",
      "Return the meatballs and any juices to the pan, lower the heat, and simmer gently for 5-8 minutes until they are cooked through and coated in the silky gravy. Taste and adjust salt and pepper.",
      "Serve hot over boiled or mashed potatoes with a spoonful of lingonberry jam on the side."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Use all ground beef or a beef/turkey mix if pork is pricey — the panade keeps them tender either way.",
      "Skip jarred lingonberry jam and stir a little sugar into thawed frozen cranberries or red currant jam for the same sweet-tart hit.",
      "Make a double batch and freeze the cooked meatballs; the gravy comes together in minutes on a busy night."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-pork",
        "swap": "use all ground beef or swap in ground turkey",
        "savings": "saves ~$2 and simplifies the shop"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole milk loosened with an extra teaspoon of flour",
        "savings": "saves ~$1.50"
      },
      {
        "forIngredientId": "jam",
        "swap": "cranberry sauce or red currant jelly",
        "savings": "saves ~$3 vs. specialty lingonberry"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 34,
      "carbs": 18,
      "fat": 37,
      "fiber": 1
    },
    "emoji": "🍝",
    "accentColor": "bg-amber-100",
    "cuisine": "Swedish",
    "tags": [
      "swedish",
      "comfort-food",
      "meatballs",
      "köttbullar",
      "cream-gravy",
      "dinner"
    ]
  },
  {
    "id": "cur-southern-collard-greens",
    "name": "Southern Collard Greens",
    "description": "Slow-simmered collard greens braised low and slow with a smoky ham hock, sweet onion, and garlic until silky and tender. Finished with a splash of apple cider vinegar and a hit of hot sauce, with that prized savory broth — the \"pot likker\" — soaking up every bit of flavor. Pure Southern soul food comfort.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "collard-greens",
        "quantity": 2,
        "note": "2 large bunches, stems removed, leaves chopped"
      },
      {
        "ingredientId": "ham",
        "quantity": 1,
        "note": "1 meaty smoked ham hock (or 1 smoked turkey leg)"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "1 large yellow onion, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "4 cloves, minced"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "about 4 cups low-sodium"
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 0.15,
        "note": "about 2 tbsp, plus more to taste"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.05,
        "note": "1 tsp, balances bitterness"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.1,
        "note": "1/2 tsp, plus more to taste"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.1,
        "note": "to taste at the table",
        "optional": true
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.1,
        "note": "1 tbsp for sweating the onion"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.05
      }
    ],
    "steps": [
      "Strip the collard leaves from their tough center stems, then stack, roll, and slice into wide ribbons. Wash thoroughly in cold water two or three times to remove all grit, and drain.",
      "In a large heavy pot or Dutch oven, heat the olive oil over medium heat. Add the diced onion and cook until soft and translucent, about 5 minutes, then stir in the garlic and red pepper flakes and cook 1 minute more until fragrant.",
      "Nestle the smoked ham hock into the pot and pour in the chicken broth plus enough water to nearly cover the hock. Bring to a boil, then reduce to a low simmer, cover, and cook 45 minutes to draw out the smoky flavor and start tenderizing the meat.",
      "Add the chopped collards to the pot in batches, stirring and letting each addition wilt down before adding the next until all the greens fit and are submerged in the simmering pot likker.",
      "Stir in the sugar, then cover and simmer gently over low heat for 1 to 1.5 hours, stirring occasionally, until the greens are meltingly tender and dark.",
      "Remove the ham hock, pull the meat from the bone, shred it, and stir it back into the greens; discard the bone, skin, and fat.",
      "Stir in the apple cider vinegar, then taste and season with salt and pepper, adding more vinegar or red pepper flakes to balance.",
      "Serve hot with plenty of the pot likker spooned over, passing hot sauce at the table."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 130,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Don't toss the stems or the pot likker — the smoky broth is the best part for sopping up with cornbread.",
      "A smoked turkey leg or wing works just as well as a ham hock and is often cheaper per pound.",
      "Buy collards by the bunch and wash them yourself instead of pre-bagged; the per-serving cost drops a lot."
    ],
    "substitutions": [
      {
        "forIngredientId": "ham",
        "swap": "Use a smoked turkey leg or a few slices of bacon",
        "savings": "Smoked turkey can be ~30% cheaper per pound and adds the same smoke"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Use water plus a bouillon cube",
        "savings": "Saves about $1.50 vs boxed broth"
      },
      {
        "forIngredientId": "collard-greens",
        "swap": "Substitute mustard greens or kale",
        "savings": "Often a bit cheaper in season and cooks faster"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 12,
      "carbs": 9,
      "fat": 9,
      "fiber": 4
    },
    "emoji": "🥬",
    "accentColor": "bg-emerald-100",
    "cuisine": "Southern American",
    "tags": [
      "soul-food",
      "southern",
      "braised",
      "comfort-food",
      "side-dish",
      "smoky",
      "one-pot"
    ]
  },
  {
    "id": "cur-classic-apple-pie",
    "name": "Classic Apple Pie",
    "description": "A proper double-crust apple pie: flaky all-butter pastry around a mound of tart-sweet apples spiced with cinnamon and nutmeg, thickened just enough so it slices clean. Egg-washed and sprinkled with coarse sugar for a crackly, golden top.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "about 2.5 cups for the double crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 cup (2 sticks) cold, cubed, for the crust"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp in crust, plus a pinch in filling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.3,
        "note": "1 Tbsp in crust + 1/2 cup in filling"
      },
      {
        "ingredientId": "apple",
        "quantity": 8,
        "note": "about 3 lb / 8 apples, mix of Granny Smith and Honeycrisp"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.25,
        "note": "1/4 cup packed light brown sugar"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.15,
        "note": "3 Tbsp to thicken the juices"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.2,
        "note": "1.5 tsp ground"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.1,
        "note": "1/4 tsp freshly grated"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "1 Tbsp juice to brighten and keep apples from browning"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 egg beaten with a splash of water for the wash"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 0.1,
        "note": "1 Tbsp coarse sugar for the top",
        "optional": true
      }
    ],
    "steps": [
      "Make the crust: whisk flour, 1 tsp salt, and 1 Tbsp sugar, then cut in the cold cubed butter with your fingers or a pastry cutter until pea-sized pieces remain. Drizzle in ice water a tablespoon at a time, tossing just until the dough holds when pressed. Divide in two, flatten into disks, wrap, and chill at least 1 hour.",
      "Make the filling: peel, core, and slice the apples 1/4-inch thick. Toss with the 1/2 cup sugar, brown sugar, cornstarch, cinnamon, nutmeg, a pinch of salt, lemon juice, and vanilla. Let sit 15-20 minutes so the apples release some juice.",
      "Roll the first disk on a floured surface into a 12-inch round and fit it into a 9-inch pie plate, letting the edges overhang. Roll the second disk into another 12-inch round for the top.",
      "Pile the apples into the shell, mounding slightly in the center, and pour over the juices that collected in the bowl. Dot the top with a few small pieces of butter if any remain.",
      "Lay the top crust over the apples (or weave a lattice). Trim to a 1-inch overhang, fold the edges under, and crimp to seal. Cut a few steam vents in a solid top crust.",
      "Brush the crust with egg wash and sprinkle with turbinado sugar. Chill the assembled pie 20 minutes while the oven heats to 425F (220C).",
      "Bake at 425F for 20 minutes, then lower to 375F (190C) and bake 40-50 minutes more, until the crust is deep golden and you see thick juices bubbling at the vents. Tent the edges with foil if they brown too fast.",
      "Cool the pie on a rack at least 3-4 hours before slicing so the filling sets; cutting too early gives you a runny pie."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 70,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Apples are cheapest in fall and a mix of whatever firm, tart varieties are on sale works great; you don't need fancy named apples.",
      "Make a double batch of crust and freeze one disk wrapped tight - it keeps for months and saves you a whole step next time.",
      "Skip store-bought crust: flour, butter, and salt cost a fraction of a refrigerated pie shell and taste far better."
    ],
    "substitutions": [
      {
        "forIngredientId": "cornstarch",
        "swap": "Use 4 Tbsp flour instead, though the filling will be a touch cloudier",
        "savings": "~$0.10"
      },
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Plain white sugar for the topping (slightly less crunch)",
        "savings": "~$0.15"
      },
      {
        "forIngredientId": "lemon",
        "swap": "1 Tbsp bottled lemon juice or apple cider vinegar",
        "savings": "~$0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 4,
      "carbs": 58,
      "fat": 19,
      "fiber": 4
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "baking",
      "fall",
      "comfort-food",
      "double-crust",
      "pie",
      "classic"
    ]
  },
  {
    "id": "cur-sunday-pot-roast",
    "name": "Sunday Pot Roast",
    "description": "A classic Sunday supper: a well-marbled chuck roast seared hard, then braised low and slow with red wine, beef broth, and aromatics until it pulls apart with a fork. Carrots and potatoes cook right in the pot and soak up all the flavor, and the rich braising liquid becomes a silky gravy. Comfort food that mostly cooks itself.",
    "mealType": "dinner",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "beef-chuck",
        "quantity": 6,
        "note": "3-3.5 lb boneless chuck roast"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 0.2
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.1
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.05
      },
      {
        "ingredientId": "onion",
        "quantity": 2
      },
      {
        "ingredientId": "carrot",
        "quantity": 6,
        "note": "cut into 2-inch chunks"
      },
      {
        "ingredientId": "potato",
        "quantity": 6,
        "note": "Yukon Gold, halved"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.3,
        "note": "6 cloves"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 0.4
      },
      {
        "ingredientId": "red-wine",
        "quantity": 0.3,
        "note": "1 cup dry red"
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 0.7,
        "note": "about 3 cups"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.1
      },
      {
        "ingredientId": "thyme-fresh",
        "quantity": 0.3,
        "note": "a few sprigs"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 0.1,
        "note": "2 leaves"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.05,
        "note": "for thickening the gravy"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 0.2,
        "optional": true,
        "note": "chopped, to finish"
      }
    ],
    "steps": [
      "Pat the chuck roast very dry and season generously all over with kosher salt and pepper. Let it sit at room temperature for 20-30 minutes while the oven heats to 325F (165C).",
      "Heat olive oil in a large Dutch oven over medium-high until shimmering. Sear the roast undisturbed for 4-5 minutes per side until deeply browned on all surfaces, then transfer to a plate.",
      "Lower heat to medium. Add the quartered onions and cook 4-5 minutes until softened and browned at the edges. Stir in the garlic and tomato paste and cook 1-2 minutes until the paste darkens slightly.",
      "Pour in the red wine and scrape up all the browned bits from the bottom. Simmer 2-3 minutes to cook off the raw alcohol, then stir in the beef broth, Worcestershire, thyme sprigs, and bay leaves.",
      "Nestle the roast back in along with any juices. The liquid should come about halfway up the meat. Bring to a gentle simmer, cover, and transfer to the oven. Braise for 2 hours.",
      "Add the carrots and potatoes around the roast, cover, and return to the oven for another 1 to 1.5 hours, until the meat is fork-tender and the vegetables are cooked through.",
      "Transfer the roast and vegetables to a platter and tent with foil. Discard the thyme stems and bay leaves. Skim excess fat from the surface of the braising liquid.",
      "Whisk the flour with a few tablespoons of cold water into a smooth slurry. Bring the liquid to a simmer on the stovetop, whisk in the slurry, and cook 3-5 minutes until the gravy thickens. Taste and adjust salt.",
      "Pull or slice the roast against the grain, plate with the vegetables, spoon gravy over the top, and scatter with fresh parsley."
    ],
    "totalTimeMinutes": 230,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 205,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Chuck roast is one of the cheapest cuts and the only right one for pot roast - its fat and connective tissue melt into the gravy during the long braise, so don't pay extra for a leaner cut.",
      "Skip the wine and use an extra cup of broth plus a splash of vinegar or Worcestershire; the dish is still excellent and you save a few dollars.",
      "Make it a day ahead - pot roast tastes even better reheated, and chilling overnight lets you lift the solidified fat right off the top."
    ],
    "substitutions": [
      {
        "forIngredientId": "red-wine",
        "swap": "Extra beef broth plus a splash of balsamic or red wine vinegar",
        "savings": "Saves ~$3-5 and avoids buying a whole bottle"
      },
      {
        "forIngredientId": "beef-chuck",
        "swap": "Beef stew meat or a bottom round roast",
        "savings": "Stew meat is often cheaper per pound and braises just as tender"
      },
      {
        "forIngredientId": "thyme-fresh",
        "swap": "1 tsp dried thyme",
        "savings": "Pantry staple, no fresh-herb cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 42,
      "carbs": 30,
      "fat": 24,
      "fiber": 5
    },
    "emoji": "🍖",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "comfort-food",
      "braised",
      "one-pot",
      "sunday-dinner",
      "beef",
      "make-ahead",
      "fall",
      "winter"
    ]
  },
  {
    "id": "cur-breakfast-tacos",
    "name": "Breakfast Tacos",
    "description": "Authentic Tex-Mex breakfast tacos: soft, slow-scrambled eggs folded with crispy bacon and melty cheddar, tucked into warm corn tortillas and finished with bright pico de gallo, avocado, and a squeeze of lime. The kind they sell out of by 9am in Austin.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs"
      },
      {
        "ingredientId": "tortilla",
        "quantity": 6,
        "note": "6 small corn tortillas (or flour)"
      },
      {
        "ingredientId": "bacon",
        "quantity": 2,
        "note": "4 strips, about 2 servings"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 0.15,
        "note": "about 2/3 cup shredded sharp cheddar"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.05,
        "note": "1 tbsp for the eggs"
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "note": "1 ripe avocado, sliced"
      },
      {
        "ingredientId": "pico",
        "quantity": 0.4,
        "note": "about 1/2 cup fresh pico de gallo"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.15,
        "note": "small handful, chopped"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "wedges for serving"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.05,
        "optional": true,
        "note": "a few dashes to taste"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.02
      }
    ],
    "steps": [
      "Lay the bacon in a cold skillet, set over medium heat, and cook 6-8 minutes, flipping once, until crisp. Transfer to a paper towel and pour off all but a thin film of fat (save the rendered fat).",
      "Crack the eggs into a bowl with a pinch of salt and pepper and whisk well until uniform and slightly frothy. Roughly chop the cooked bacon.",
      "Warm the tortillas: set a dry skillet or comal over medium-high and toast each tortilla 20-30 seconds per side until soft and lightly charred in spots. Stack and wrap in a clean towel to keep warm and pliable.",
      "Wipe the skillet, lower the heat to medium-low, and melt the butter. Pour in the eggs and let them sit 10 seconds, then push gently with a spatula, folding from the edges to the center to form large soft curds.",
      "When the eggs are still glossy and a touch underdone, stir in the chopped bacon and the shredded cheddar so it melts into the curds. Pull off the heat immediately while soft.",
      "Build each taco: spread a few curds of the bacon-and-cheese egg down the center of a warm tortilla, top with sliced avocado, a spoon of pico de gallo, and a scatter of cilantro.",
      "Finish with a squeeze of lime and a dash of hot sauce, and serve right away while the tortillas are warm."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a block of cheddar and shred it yourself - it is far cheaper per ounce than pre-shredded and melts better into the eggs.",
      "Skip store-bought pico and dice your own from one tomato, a little onion, jalapeno, and cilantro for pennies.",
      "Corn tortillas are cheaper than flour and naturally gluten-free; a pack lasts for several batches."
    ],
    "substitutions": [
      {
        "forIngredientId": "bacon",
        "swap": "Swap in fresh or soy chorizo, or browned breakfast sausage, for a more traditional Tex-Mex filling",
        "savings": "About the same; chorizo often costs a bit less per serving"
      },
      {
        "forIngredientId": "cheddar-block",
        "swap": "Use Monterey Jack, pepper jack, or queso fresco",
        "savings": "Roughly equal"
      },
      {
        "forIngredientId": "pico",
        "swap": "Use jarred salsa or salsa verde",
        "savings": "Saves about $1 vs fresh"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 27,
      "carbs": 34,
      "fat": 33,
      "fiber": 8
    },
    "emoji": "🌮",
    "accentColor": "bg-orange-100",
    "cuisine": "Tex-Mex",
    "tags": [
      "breakfast",
      "tacos",
      "eggs",
      "bacon",
      "tex-mex",
      "high-protein",
      "quick",
      "gluten-free"
    ]
  },
  {
    "id": "cur-bread-pudding",
    "name": "Bread Pudding",
    "description": "Old-fashioned baked bread pudding: cubes of day-old bread soaked in a rich vanilla custard spiced with cinnamon and nutmeg, studded with raisins, and baked until the top is golden and crisp while the inside stays soft and creamy. Finished with a warm bourbon-butter sauce.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "bread",
        "quantity": 0.8,
        "note": "about 10 cups day-old bread cubes; brioche or challah is ideal"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "2 cups"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.25,
        "note": "1 cup, for custard plus sauce"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "3/4 cup granulated"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.25,
        "note": "1/2 cup, packed, for sauce"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "6 tbsp total: 2 for dish, 4 for sauce"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.3,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.15,
        "note": "1/4 tsp, freshly grated"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.3,
        "note": "3/4 cup",
        "optional": true
      },
      {
        "ingredientId": "bourbon",
        "quantity": 0.08,
        "note": "2 tbsp for the sauce",
        "optional": true
      }
    ],
    "steps": [
      "Cut the bread into 1-inch cubes and spread on a sheet pan. If the bread is fresh, dry it in a 300F oven for 10-15 minutes until lightly toasted but not browned; day-old bread can be used as is. Butter a 9x13 baking dish with about 2 tbsp of the butter.",
      "Soak the raisins in a splash of warm water (or a little of the bourbon) for 10 minutes to plump, then drain. Pile the bread cubes into the buttered dish and scatter the raisins throughout.",
      "In a large bowl, whisk the eggs with the granulated sugar until smooth. Whisk in the whole milk, about 3/4 cup of the heavy cream, vanilla, cinnamon, nutmeg, and salt until fully combined.",
      "Pour the custard evenly over the bread. Press the bread down with your hands or a spatula so every cube is submerged, then let it soak at least 20-30 minutes (or cover and refrigerate up to overnight), pressing once or twice so the bread fully absorbs the custard.",
      "Heat the oven to 350F. Bake the pudding uncovered for 45-55 minutes, until the top is golden and puffed and the center is set with just a slight jiggle; a knife inserted off-center should come out clean.",
      "While it bakes, make the sauce: melt the remaining 4 tbsp butter in a small saucepan, stir in the brown sugar and remaining heavy cream, and simmer 2-3 minutes until smooth and slightly thickened. Off the heat, stir in the bourbon.",
      "Let the bread pudding rest 10-15 minutes so it sets up. Spoon the warm bourbon-butter sauce over individual servings and serve warm."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 55,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use up stale or heel ends of bread you'd otherwise toss; bread pudding was invented to rescue old bread, so brioche, challah, French bread, or even leftover dinner rolls all work.",
      "Skip the bourbon sauce and just dust with powdered sugar or drizzle maple syrup to keep it cheap and kid-friendly.",
      "Whole milk plus a little cream gives a rich custard for far less than all heavy cream; for an even cheaper version, use all milk plus an extra egg yolk for body."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use evaporated milk or half-and-half for a lighter, cheaper custard",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Swap in dried cranberries, chocolate chips, or diced apple",
        "savings": "$0"
      },
      {
        "forIngredientId": "bourbon",
        "swap": "Leave it out and add an extra splash of vanilla, or use rum",
        "savings": "~$0.40 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 9,
      "carbs": 52,
      "fat": 20,
      "fiber": 2
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "baked",
      "custard",
      "comfort-food",
      "make-ahead",
      "uses-stale-bread"
    ]
  },
  {
    "id": "cur-cinnamon-churros",
    "name": "Cinnamon Churros",
    "description": "Golden, ridged churros with a shatteringly crisp shell and tender, custardy center, fried fresh and rolled in warm cinnamon sugar. The classic Spanish-Mexican fairground treat, easy to nail at home with a piped choux dough and a hot pot of oil.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "all-purpose, about 1 cup"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "1 cup, for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.15,
        "note": "3 tbsp, cut into pieces"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.4,
        "note": "1 tbsp in dough + ~1/2 cup for coating"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "lightly beaten, for a richer choux dough"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.05,
        "note": "1 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "note": "1 to 1.5 tbsp for the coating"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.4,
        "note": "for deep frying, about 4 cups"
      },
      {
        "ingredientId": "dulce-de-leche",
        "quantity": 0.5,
        "optional": true,
        "note": "or chocolate sauce, for dipping"
      }
    ],
    "steps": [
      "Make the cinnamon sugar: stir together about 1/2 cup sugar with the cinnamon in a wide shallow dish and set aside. Fit a piping bag with a large closed-star tip.",
      "In a saucepan, combine the water, butter, the 1 tbsp sugar, and salt. Bring to a rolling boil over medium-high heat so the butter fully melts.",
      "Reduce heat to medium, dump in all the flour at once, and stir vigorously with a wooden spoon until it forms a smooth ball that pulls away from the pan, about 1 minute. Remove from heat and let cool 5 minutes.",
      "Beat in the vanilla, then add the eggs a little at a time, stirring hard after each addition until the dough is glossy, thick, and smooth. Transfer to the piping bag.",
      "Heat 2 to 3 inches of oil in a deep pot to 350-360F (175C). Pipe 5 to 6 inch lengths of dough directly into the oil, snipping the end with scissors, and fry 3 to 4 at a time so the oil stays hot.",
      "Fry, turning occasionally, until deep golden brown and crisp all over, about 2 to 3 minutes per batch. Don't crowd the pot or they turn greasy.",
      "Lift out with tongs or a spider and drain on a paper-towel-lined rack for 30 seconds.",
      "While still hot, roll each churro in the cinnamon sugar to coat. Serve immediately with dulce de leche or warm chocolate for dipping."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Churro dough is mostly flour and water, so a whole batch costs pennies; the only real expense is the frying oil, which you can strain and reuse 2-3 times.",
      "No closed-star piping tip? Use a zip-top bag with a star tip pushed into a snipped corner, or pipe through a cookie press.",
      "Skip store-bought dulce de leche and simmer an unopened can of sweetened condensed milk in water for 2-3 hours for a cheaper dip."
    ],
    "substitutions": [
      {
        "forIngredientId": "dulce-de-leche",
        "swap": "Melt chocolate chips with a splash of milk for a chocolate dipping sauce",
        "savings": "Uses pantry staples instead of a specialty jar"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Canola or any neutral high-smoke-point oil",
        "savings": "Whatever neutral oil is cheapest in bulk"
      },
      {
        "forIngredientId": "butter",
        "swap": "Margarine or neutral oil in the dough",
        "savings": "A few cents per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 6,
      "carbs": 42,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🥨",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish",
    "tags": [
      "churros",
      "fried",
      "dessert",
      "cinnamon",
      "street-food",
      "vegetarian",
      "sweet"
    ]
  },
  {
    "id": "cur-sicilian-cannoli",
    "name": "Sicilian Cannoli",
    "description": "The real deal: crisp, blistered fried shells wrapped around a velvety sweetened ricotta cream studded with dark chocolate, ends dipped in chopped pistachios. The dough is enriched with Marsala for that classic Sicilian snap, and the ricotta is drained hard so the filling stays thick — never runny.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.3,
        "note": "00 or all-purpose flour for the shells"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.05,
        "note": "1 tbsp for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.15,
        "note": "2 tbsp cold, cut in (traditionally lard)"
      },
      {
        "ingredientId": "marsala-wine",
        "quantity": 0.25,
        "note": "~1/3 cup dry Marsala to bind the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 yolk in dough + white to seal shells"
      },
      {
        "ingredientId": "white-wine-vinegar",
        "quantity": 0.1,
        "note": "1 tsp, tenderizes for blistered bubbles"
      },
      {
        "ingredientId": "cocoa-powder",
        "quantity": 0.05,
        "note": "1 tsp unsweetened, for traditional dark shell tint"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.6,
        "note": "for deep frying, mostly reusable"
      },
      {
        "ingredientId": "ricotta",
        "quantity": 1.5,
        "note": "whole-milk, drained overnight; sheep's milk if available"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.4,
        "note": "~1 cup, plus extra for dusting"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.1
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.02,
        "optional": true
      },
      {
        "ingredientId": "dark-chocolate-chips",
        "quantity": 0.4,
        "note": "mini chips, half folded in, half for ends"
      },
      {
        "ingredientId": "pistachios",
        "quantity": 0.3,
        "note": "chopped, for dipping the ends"
      },
      {
        "ingredientId": "orange",
        "quantity": 0.25,
        "note": "zest for the filling (or candied orange peel)",
        "optional": true
      }
    ],
    "steps": [
      "Drain the ricotta: line a sieve with cheesecloth or paper towels, add the ricotta, and refrigerate at least 4 hours (ideally overnight), pressing occasionally to squeeze out moisture — this is the single most important step for a thick filling.",
      "Make the dough: whisk flour, sugar, and cocoa, then cut in the cold butter until sandy. Add the egg yolk, vinegar, and enough Marsala to form a stiff dough. Knead 5 minutes until smooth and elastic, wrap, and rest 1 hour at room temperature.",
      "Roll the dough paper-thin (about 1/16 inch) with a pasta roller or pin. Cut into 4-inch circles, then stretch each slightly into an oval. Wrap around metal cannoli tubes, brushing the overlap with egg white and pressing firmly to seal.",
      "Heat the oil to 360-370F (185C) in a deep pot. Fry the shells, 2-3 at a time, until deep golden and blistered with bubbles, about 1-2 minutes, turning once. Drain on a rack and let cool before sliding off the tubes.",
      "Make the filling: beat the drained ricotta smooth with the powdered sugar, vanilla, cinnamon, and orange zest until creamy. Fold in half of the chocolate chips. Chill while the shells cool — the filling should be thick enough to hold a peak.",
      "Spoon the filling into a piping bag and fill each shell from both ends just before serving, so the shells stay crisp and never go soggy.",
      "Press the remaining chocolate chips into one exposed end of each cannolo and the chopped pistachios into the other. Dust with powdered sugar and serve immediately."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 75,
    "cookTimeMinutes": 15,
    "difficulty": "hard",
    "equipment": [
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Cannoli tubes are cheap and reusable forever — but in a pinch, wrap the dough around foil-covered wooden dowels or even clean metal pastry rings.",
      "Drain the ricotta yourself instead of buying expensive 'pastry' ricotta — overnight in a sieve gets you the same thick result for half the price.",
      "The frying oil can be strained and reused several times, so the real per-shell fat cost is tiny."
    ],
    "substitutions": [
      {
        "forIngredientId": "marsala-wine",
        "swap": "Dry white wine plus a splash of vanilla, or white grape juice for alcohol-free",
        "savings": "Skips buying a whole bottle of Marsala"
      },
      {
        "forIngredientId": "pistachios",
        "swap": "Chopped toasted almonds or mini chocolate chips on both ends",
        "savings": "Almonds run about half the price of pistachios"
      },
      {
        "forIngredientId": "ricotta",
        "swap": "Drained whole-milk cottage cheese blended smooth",
        "savings": "Often cheaper per cup and just as creamy once blended"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 9,
      "carbs": 34,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🌯",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "sicilian",
      "dessert",
      "fried",
      "ricotta",
      "pastry",
      "traditional",
      "chocolate"
    ]
  },
  {
    "id": "cur-beef-bibimbap",
    "name": "Beef Bibimbap",
    "description": "The iconic Korean rice bowl: warm short-grain rice crowned with soy-sesame marinated beef, individually seasoned namul vegetables, a runny fried egg, and a swirl of gochujang sauce. Each component is cooked and seasoned on its own, then everything gets mixed together at the table for a savory, nutty, spicy bite.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 2,
        "note": "short-grain white rice"
      },
      {
        "ingredientId": "sirloin-steak",
        "quantity": 2,
        "note": "thinly sliced against the grain for bulgogi"
      },
      {
        "ingredientId": "spinach",
        "quantity": 0.4,
        "note": "blanched for sigeumchi-namul"
      },
      {
        "ingredientId": "bean-sprouts",
        "quantity": 0.4,
        "note": "blanched soybean/mung sprouts (kongnamul)"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "julienned"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.3,
        "note": "fresh shiitake, sliced"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one fried egg per bowl, sunny-side up"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 0.15,
        "note": "Korean chili paste for the sauce"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 0.06,
        "note": "for beef marinade"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 0.08,
        "note": "toasted, split between beef, namul, and sauce"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.5,
        "note": "3 cloves, minced"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.05,
        "note": "for beef marinade and sauce"
      },
      {
        "ingredientId": "scallion",
        "quantity": 0.3,
        "note": "for marinade and garnish"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.04,
        "note": "for sauteing veg, beef, and frying eggs"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.05,
        "note": "toasted, for garnish and namul"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "to season namul and rice"
      }
    ],
    "steps": [
      "Rinse the short-grain rice until the water runs nearly clear, then cook in a rice cooker or covered pot. While it cooks, slice the sirloin paper-thin against the grain and marinate it with the soy sauce, half the minced garlic, 1 tsp sugar, the white parts of the scallion, and 1 tsp sesame oil; set aside for 15 minutes.",
      "Blanch the spinach in boiling salted water for 30 seconds, shock in cold water, squeeze dry, and toss with a pinch of salt, a little minced garlic, 1 tsp sesame oil, and a sprinkle of sesame seeds (sigeumchi-namul). Blanch the bean sprouts for 2-3 minutes, drain, and season the same way (kongnamul).",
      "Heat a little vegetable oil in a pan and saute the julienned carrot with a pinch of salt for 1-2 minutes until just tender-crisp; remove. In the same pan saute the sliced shiitake with a pinch of salt until softened and lightly browned; remove.",
      "Make the bibimbap sauce: stir together the gochujang, remaining sugar, 1 tsp sesame oil, a splash of water, and the remaining garlic until smooth and pourable.",
      "Raise the heat to high, add a touch of oil, and sear the marinated beef in a single layer for 2-3 minutes, stirring, until caramelized and just cooked through.",
      "Fry the eggs in a little oil over medium heat, keeping the yolks runny and the whites set with crisp edges.",
      "Divide the warm rice between two bowls. Arrange the beef and each seasoned vegetable in separate mounds around the edge, keeping colors distinct.",
      "Top each bowl with a fried egg, add a spoonful of gochujang sauce in the center, and garnish with sliced scallion greens and toasted sesame seeds.",
      "Serve immediately and mix everything together thoroughly with a spoon just before eating, so the yolk and sauce coat every grain of rice."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "rice-cooker"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Swap the sirloin for thinly sliced or ground beef chuck and marinate it the same way — it crisps up beautifully and costs a fraction of steak.",
      "Bibimbap is the ultimate use-it-up bowl: any leftover or wilting vegetables (zucchini, cucumber, kale) can be blanched or sauteed and seasoned as namul.",
      "Buy a tub of gochujang once — it lasts months in the fridge and a little goes a long way across many Korean dishes."
    ],
    "substitutions": [
      {
        "forIngredientId": "sirloin-steak",
        "swap": "Use ground beef or thin-sliced beef chuck, marinated identically",
        "savings": "Saves about $4-5 per serving"
      },
      {
        "forIngredientId": "shiitake",
        "swap": "Regular cremini or white mushrooms",
        "savings": "Saves around $1 per serving"
      },
      {
        "forIngredientId": "sushi-rice",
        "swap": "Any short- or medium-grain white rice",
        "savings": "Saves a bit and works just as well"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 38,
      "carbs": 68,
      "fat": 22,
      "fiber": 6
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "korean",
      "rice-bowl",
      "beef",
      "gochujang",
      "high-protein",
      "comfort-food",
      "meal-prep-friendly"
    ]
  }
];
