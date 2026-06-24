import type { Recipe } from "@/lib/types";

/**
 * NEW rice-cooker recipes (batch 2) — viral / social-media-sourced dishes that
 * genuinely cook in a standard home rice cooker with no stovetop. Each was
 * web-researched, authored against Waivy's catalog (real ingredient IDs,
 * quantities in catalog units), strictly judged for authenticity + quality, and
 * given creator credit in its description. Photos live in
 * newRiceCookerRecipePhotos.ts (freely licensed, vision-verified, attributed).
 */
export const NEW_RICE_COOKER_RECIPES: Recipe[] = [
  {
    "id": "rice-cooker-beef-pepper-lunch",
    "name": "Rice Cooker Beef Pepper Lunch Rice",
    "description": "All the sizzle of a Pepper Lunch hotplate — buttery short-grain rice piled with sweet-peppery beef, juicy corn, and scallions — minus the $14 mall price tag. The thin beef steams to silky tenderness right on top of the rice while it cooks, then everything gets folded together with a glossy soy-mirin-pepper sauce for that addictive sweet-savory finish. Inspired by @cookwithdana on TikTok (https://www.tiktok.com/@cookwithdana/video/7224556539837795626).",
    "mealType": "dinner",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 2,
        "note": "short-grain; rinse until water runs clear"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "1:1 with rinsed rice"
      },
      {
        "ingredientId": "sirloin-steak",
        "quantity": 12,
        "note": "sliced paper-thin against the grain; freeze 20 min first for easy slicing"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "half-moon slices"
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 1
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "grated or minced"
      },
      {
        "ingredientId": "pepper",
        "quantity": 1,
        "note": "lots of coarse black pepper — that's the 'pepper' in Pepper Lunch"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to toss the beef"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced, for finishing",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true
      }
    ],
    "steps": [
      "Rinse 2 cups short-grain rice in the inner pot until the water runs mostly clear, drain, then add 2 cups fresh water (a 1:1 ratio) and level the rice flat.",
      "In a bowl, toss the paper-thin beef slices with 1 tbsp vegetable oil, the grated garlic, 1 tbsp of the soy sauce, and a heavy pinch of black pepper, and let it marinate while you prep the rest.",
      "Scatter the sliced onion and frozen corn evenly over the rice, then lay the marinated beef in a single loose layer on top — spread the pieces out and don't pile them, so the steam cooks every slice through.",
      "Close the lid and run a normal White Rice cycle. The rice steams from below while the thin beef cooks through and stays tender on top — do not open the lid or stir during the cycle.",
      "While it cooks, stir together the sauce in the marinade bowl: the remaining 2 tbsp soy sauce, the mirin, oyster sauce, and sugar, until the sugar dissolves.",
      "When the cycle finishes, switch to Keep Warm, drop in the 2 tbsp butter and pour the sauce over everything, then fold gently for about a minute until the butter melts and glosses the rice, beef, corn, and onion. Make sure no beef slices are still pink or stuck together.",
      "Close the lid and let it sit on Keep Warm for 3-4 minutes to soak in, then taste and crank in more black pepper to your liking.",
      "Scoop into bowls and finish with the sliced scallions and a sprinkle of sesame seeds."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Buy one sirloin steak and freeze it for 20 minutes — half-frozen meat slices paper-thin with a regular knife, so you stretch a small piece across 3 servings just like the restaurant.",
      "Frozen corn is a fraction of the cost of fresh ears and goes straight in from the bag — no shucking, no waste.",
      "No mirin? A pinch of extra sugar plus a splash of rice vinegar (or even water) fakes the sweet tang for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "sirloin-steak",
        "swap": "Use beef-stew-meat sliced thin and small — cheaper per ounce and still juicy in the steam.",
        "savings": "~$0.30/oz"
      },
      {
        "forIngredientId": "sushi-rice",
        "swap": "Any short- or medium-grain white rice works; plain 'rice' is the budget pick.",
        "savings": "~$0.10/cup"
      },
      {
        "forIngredientId": "oyster-sauce",
        "swap": "Skip it and add an extra splash of soy sauce plus a pinch of sugar for the same savory-sweet depth.",
        "savings": "~$0.13"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 30,
      "carbs": 72,
      "fat": 15,
      "fiber": 3
    },
    "emoji": "🥩",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "beef",
      "pepper-lunch",
      "copycat"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-lazy-salmon-rice-bowl",
    "name": "Rice Cooker Lazy Salmon Rice Bowl",
    "description": "The internet's favorite cozy salmon bowl, made even lazier: one fillet steams right on top of the rice while you do nothing. Flake it into fluffy rice with furikake, a sriracha-Kewpie swirl, and green onion for a creamy, savory, slightly spicy bowl that tastes like way more effort than it took. Inspired by @mamalindacooks on TikTok (https://www.tiktok.com/@mamalindacooks/video/7500008025764138283).",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 1.25
      },
      {
        "ingredientId": "salmon",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "kewpie-mayo",
        "quantity": 2
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2
      },
      {
        "ingredientId": "furikake",
        "quantity": 2
      },
      {
        "ingredientId": "scallion",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "avocado",
        "quantity": 0.5,
        "optional": true,
        "note": "sliced, for topping"
      },
      {
        "ingredientId": "nori",
        "quantity": 1,
        "optional": true,
        "note": "cut into strips for scooping"
      },
      {
        "ingredientId": "kimchi",
        "quantity": 1,
        "optional": true,
        "note": "on the side"
      }
    ],
    "steps": [
      "Rinse 1 cup sushi rice in the inner pot, swirling and draining 2-3 times until the water runs mostly clear. Drain well, then add 1 1/4 cups fresh water and level the rice into an even layer.",
      "Pat the salmon fillet dry with a paper towel and sprinkle both sides with the salt. Lay it skin-side down right on top of the rice and water so it steams while the rice cooks.",
      "Close the lid and run a normal White Rice cycle. Don't lift the lid mid-cycle; let the rice cooker do all the work while you go study.",
      "When the cycle ends, leave the lid closed on Keep Warm for 5-10 minutes. This finishes cooking the salmon through (it should flake easily and look opaque all the way to the center) and steams the rice fluffy.",
      "Lift the salmon onto a plate, peel off and discard the skin, then flake the fillet into big chunks with a fork, checking that the center is fully opaque. Fold the salmon back into the rice along with the soy sauce and sesame oil.",
      "In a small cup, stir the Kewpie mayo and sriracha into a quick spicy mayo, then drizzle it over the bowl.",
      "Scatter on the furikake and sliced green onion. Add avocado and nori strips, serve kimchi on the side if you've got it, and scoop everything up while it's warm."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 37,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "A single salmon fillet stretches across two bowls once you flake it into the rice - you're eating restaurant-style for the price of one piece of fish.",
      "Frozen salmon works great and is usually half the price of fresh; just thaw it under cold running water for about 15 minutes first so it cooks evenly on top of the rice.",
      "No Kewpie? Regular mayonnaise plus a tiny pinch of sugar gets you 90% of the way there, and a little sriracha goes a long way for that spicy-mayo hit."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Use a can of canned-salmon or a can of tuna - stir it in after the rice cooks, no steaming needed.",
        "savings": "Saves ~$0.50 and skips thawing"
      },
      {
        "forIngredientId": "sushi-rice",
        "swap": "Any short or medium jasmine-rice or plain rice works; keep the same 1:1.25 rice-to-water ratio.",
        "savings": "Saves ~$0.10 per batch"
      },
      {
        "forIngredientId": "kewpie-mayo",
        "swap": "Regular mayonnaise with a pinch of sugar mimics Kewpie's richer, sweeter flavor.",
        "savings": "Saves ~$0.09 per tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 28,
      "carbs": 52,
      "fat": 17,
      "fiber": 3
    },
    "emoji": "🍣",
    "accentColor": "bg-orange-100",
    "cuisine": "Japanese/Korean fusion",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "korean",
      "salmon",
      "high-protein",
      "lunch"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-yakult-kakuni-pork-belly",
    "name": "Rice Cooker Yakult Braised Pork Belly (Kakuni)",
    "description": "Glossy, fall-apart Japanese-style kakuni where chilled probiotic Yakult does double duty: it lends a clean sweet-tangy note in place of sugar while the pork belly braises into melt-in-your-mouth cubes, all from one rice cooker pot. The braising liquid reduces into a sweet-savory glaze you'll want to spoon over rice. Inspired by a viral rice-cooker Yakult kakuni trend on Reels.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pork-belly",
        "quantity": 4,
        "note": "cut into 1.5-inch cubes"
      },
      {
        "ingredientId": "yakult",
        "quantity": 4,
        "note": "the secret sweet-tangy braising liquid"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 6
      },
      {
        "ingredientId": "sake",
        "quantity": 3,
        "note": "or rice-wine"
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "ginger",
        "quantity": 2,
        "note": "ground ginger; or use a few fresh slices if you have them"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "smashed"
      },
      {
        "ingredientId": "scallion",
        "quantity": 3,
        "note": "whites in the braise, greens for garnish"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "optional": true,
        "note": "cooked in the pot, then soaked in the glaze"
      },
      {
        "ingredientId": "rice",
        "quantity": 2,
        "optional": true,
        "note": "steamed, to serve underneath"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "to finish"
      }
    ],
    "steps": [
      "Cut the pork belly into roughly 1.5-inch cubes. If your rice cooker has a Saute or Cook setting, brown the cubes 5-6 minutes, turning so the fat renders and the edges color. If it only has a single Cook button with no browning step, skip this and just add everything together in the next step.",
      "Add the smashed garlic, scallion whites, and ground ginger to the pot. Pour in all 4 bottles of Yakult, the soy sauce, sake, and mirin. The liquid should come most of the way up the pork; top with a splash of water if needed so the cubes are nearly submerged.",
      "Close the lid and run a full White Rice cycle. The pork simmers in the sweet-tangy liquid as it heats, starting to render its fat and soften.",
      "When the cycle ends, stir, then run a SECOND White Rice cycle. This keeps the pork at a steady simmer until it is fork-tender and fully cooked through, while the liquid reduces into a glossy, syrupy glaze.",
      "Optional jammy eggs: at the start of the second cycle, nestle the raw eggs in their shells into the simmering braise and let them cook the full cycle. Lift them out, cool under cold tap water, peel, then return the peeled eggs to the warm glaze to soak and color.",
      "Check the pork: it should pull apart easily with a fork and show no pink. If it is still firm, run a short extra Cook cycle or hold on Keep Warm for 15 more minutes. Then switch to Keep Warm and rest 10 minutes so the glaze thickens and the flavors settle.",
      "Spoon the kakuni and glaze over steamed rice, halve the eggs on top, and finish with the sliced scallion greens and a sprinkle of sesame seeds."
    ],
    "totalTimeMinutes": 80,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 70,
    "difficulty": "easy",
    "dietTags": [],
    "cheapTips": [
      "Yakult is the cheap MVP here: at about $0.55 a bottle it adds the sweetness and tang of a marinade in one, so you can skip buying mirin or sake separately if money's tight and lean on Yakult plus soy sauce.",
      "Buy pork belly as a whole slab when it's on sale and freeze it in portioned cubes; it's far cheaper per serving than pre-sliced packs at the meat counter.",
      "Don't toss the leftover glaze. Spoon it over rice, eggs, or instant ramen the next day for a basically free flavor bomb of a second meal."
    ],
    "substitutions": [
      {
        "forIngredientId": "pork-belly",
        "swap": "Use pork-shoulder cut into cubes for a leaner, much cheaper braise (give it the full two cycles to tenderize)",
        "savings": "~$1.75 per serving"
      },
      {
        "forIngredientId": "sake",
        "swap": "Swap in rice-wine, or use extra water with a splash of vinegar",
        "savings": "~$0.70 total"
      },
      {
        "forIngredientId": "mirin",
        "swap": "Use an extra bottle of Yakult, or 1 tbsp honey, for the sweetness",
        "savings": "~$0.50 total"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 24,
      "carbs": 18,
      "fat": 40,
      "fiber": 1
    },
    "emoji": "🥢",
    "accentColor": "bg-red-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "pork",
      "braised",
      "kakuni"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-spicy-rabokki",
    "name": "Rice Cooker Spicy Rabokki (Tteokbokki + Ramen)",
    "description": "Chewy Korean rice cakes and bouncy instant ramen swim in a glossy gochujang sauce that thickens itself as the rice-cake starch melts in — sweet, spicy, and impossibly cozy. A melty cheese blanket on top makes it the ultimate dump-and-go comfort bowl for a cold dorm night. Inspired by @nomadetteats on their blog (https://nomadette.com/rice-cooker-tteokbokki/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "tteok",
        "quantity": 2,
        "note": "Korean rice cakes; soak in warm water 10 min if hard or frozen"
      },
      {
        "ingredientId": "ramen",
        "quantity": 1,
        "note": "use the noodles; save or use half the seasoning packet"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 2
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 1,
        "note": "add more for extra heat"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "water",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "sliced thin"
      },
      {
        "ingredientId": "fish-cake",
        "quantity": 2,
        "note": "sliced into strips",
        "optional": true
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "optional": true
      },
      {
        "ingredientId": "american-singles",
        "quantity": 1,
        "note": "or a handful of mozzarella for the cheese pull",
        "optional": true
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
        "note": "to finish",
        "optional": true
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "drizzle at the end",
        "optional": true
      }
    ],
    "steps": [
      "(Optional eggs) Put the eggs in the rice cooker pot, cover with water, close the lid, and run the Cook / White Rice cycle. Once the water comes to a boil, time 9 minutes for jammy yolks or 12 minutes for fully set, then cancel the cycle. Scoop the eggs out, cool them under cold running water, peel, and set aside.",
      "Drain the pot and wipe it dry. Add the 2 cups of water and whisk in the gochujang, gochugaru, soy sauce, sugar, and minced garlic until the sauce is smooth with no lumps.",
      "Add the soaked tteok, sliced onion, and fish cake strips. Stir so every rice cake is coated, then close the lid and run the Cook / White Rice cycle for 20 to 25 minutes, opening to stir once or twice so nothing sticks. The sauce will bubble and thicken on its own as starch leaches from the rice cakes.",
      "Open the lid and check the sauce: it should coat the back of a spoon. If it is still thin, leave the lid open and let it keep bubbling on the cycle for 3 to 5 more minutes; if it is too thick, stir in a splash of water.",
      "Nestle the ramen noodles into the hot sauce, pushing them under to submerge. Close the lid and cook 4 to 5 minutes, gently separating the noodles with chopsticks halfway, until they are bouncy and loosened.",
      "Lay the cheese slice over the top, halve the peeled eggs and tuck them in, then close the lid and let the Keep Warm setting melt the cheese for 1 to 2 minutes.",
      "Drizzle with sesame oil, scatter scallions and sesame seeds over the top, and serve straight from the pot while it is molten and bubbly."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "dietTags": [],
    "cheapTips": [
      "A bag of tteok and a pack of instant ramen are the two cheap workhorses here — buy the rice cakes frozen or refrigerated from any Asian grocery and they keep for weeks, so this bowl costs just a couple dollars a serving.",
      "Skip the fish cake and use the ramen's own seasoning packet plus an extra splash of soy to build flavor for free.",
      "One slice of American cheese melts just as stretchy as fancy mozzarella for a fraction of the price — and a single soft-boiled egg stretches the whole bowl into a full meal."
    ],
    "substitutions": [
      {
        "forIngredientId": "fish-cake",
        "swap": "Swap in sliced hot dog or spam for the same chewy, savory bite",
        "savings": "often cheaper per serving than fish cake"
      },
      {
        "forIngredientId": "american-singles",
        "swap": "Use a handful of shredded mozzarella for a bigger cheese pull",
        "savings": "skip it to save about $0.25"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Use honey or corn syrup for a glossier, slightly stickier sauce",
        "savings": "pennies either way"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 18,
      "carbs": 92,
      "fat": 12,
      "fiber": 4
    },
    "emoji": "🌶️",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "korean",
      "spicy",
      "tteokbokki",
      "ramen",
      "comfort-food"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-oyakodon",
    "name": "Rice Cooker Oyakodon (Chicken & Egg Bowl)",
    "description": "Silky soy-simmered chicken and sweet onion blanket fluffy rice, then beaten egg poured over the top sets into a glossy, just-set finish straight from your rice cooker. It tastes like a cozy Tokyo diner donburi but it's genuinely dump-and-steam, no stovetop required. Inspired by @nomadetteats on TikTok (https://www.tiktok.com/@nomadetteats/video/7358422488570760466).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs mostly clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "cut into small bite-size pieces so they cook through"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "beaten just until streaky, not fully blended"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "sake",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "dashi",
        "quantity": 0.5,
        "note": "or water plus a pinch of dashi powder"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "optional": true,
        "note": "sprinkled on top"
      },
      {
        "ingredientId": "nori",
        "quantity": 1,
        "optional": true,
        "note": "snipped into thin strips"
      }
    ],
    "steps": [
      "Rinse the jasmine rice in the rice cooker bowl until the water runs mostly clear, drain well, then add the 1.5 cups of fresh water and level the rice into an even flat layer.",
      "In a mug or small bowl, stir together the soy sauce, mirin, sake, dashi, and sugar until the sugar dissolves to make your donburi sauce. Toss the bite-size chicken thigh pieces and sliced onion in about half of this sauce.",
      "Lay the sauced chicken and onion in a single even layer right on top of the rice, then drizzle the rest of the sauce over everything so it flavors the rice as it steams.",
      "Close the lid and run a full normal White Rice cycle. The rice cooks underneath while the chicken poaches through and the onion turns sweet and soft on top.",
      "When the cycle finishes, open the lid and check that the chicken is fully cooked through with no pink in the center; if any pieces look underdone, close the lid and run Cook for a few more minutes. Then gently stir the chicken and onion so the saucy rice underneath gets coated, and spread everything back into an even layer.",
      "Pour the beaten eggs evenly over the hot chicken and rice, close the lid, and press Cook again. Let it run for about 2 minutes, then switch to Keep Warm.",
      "Keep the lid closed and let it rest 3 to 5 minutes so the egg sets into a soft, glossy curd over the still-hot bowl; if you prefer it firmer, run Cook for one more minute. The egg should be set, not runny.",
      "Scoop into bowls and finish with scallions, furikake, and nori strips. Eat right away while the egg is silky."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Mirin and sake are the priciest splashes here, but a single bottle of each lasts for dozens of bowls, so the per-serving cost stays tiny once you stock them.",
      "No dashi on hand? Use plain water with a pinch of dashi powder, or a little chicken bouillon plus a teaspoon of sugar to fake that savory-sweet broth for pennies.",
      "Buy a value pack of chicken thighs and portion it into freezer bags; thighs are cheaper than breast and stay juicy through the whole rice cycle."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Swap in chicken-breast for a leaner bowl; just cut it extra small so it cooks fully in the rice cycle.",
        "savings": "similar cost, leaner"
      },
      {
        "forIngredientId": "mirin",
        "swap": "No mirin? Use 1 tbsp rice vinegar plus an extra teaspoon of sugar for the same sweet-tangy glaze.",
        "savings": "uses pantry staples"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Any short or medium-grain white rice works; sushi-rice gives an even stickier, more authentic donburi base.",
        "savings": "use what you have"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 38,
      "carbs": 72,
      "fat": 18,
      "fiber": 3
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "donburi",
      "high-protein",
      "dinner"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-lap-cheong-sausage-rice",
    "name": "Rice Cooker Lap Cheong Sausage Rice",
    "description": "One cheap link of sweet-savory Chinese sausage steams right on top of the rice, melting its glossy fat down into every grain for that cozy clay-pot flavor without any pot-watching. A soy-sesame drizzle and a scatter of scallions at the end make it taste like way more effort than it was. Inspired by @thewoksoflife on their blog (https://thewoksoflife.com/chinese-sausage-rice-cooker-lap-cheong/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5
      },
      {
        "ingredientId": "chinese-sausage",
        "quantity": 2,
        "note": "lap cheong links, left whole"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "or fill to the line marked on your rice cooker bowl for your cup count"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 0.5,
        "note": "for color and a deeper savory note",
        "optional": true
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5,
        "note": "grated or finely minced",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced, for finishing",
        "optional": true
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced, optional aromatic",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the jasmine rice right in the rice cooker bowl: add water, swirl with your hand, and pour off the cloudy water. Repeat 2-3 times until the water runs nearly clear, then drain well.",
      "Add the 2 cups water (or fill to the marked line for your cup count). Stir in the grated ginger and minced garlic if using, then smooth the rice into an even layer.",
      "Lay the whole lap cheong links right on top of the rice. Don't slice them and don't stir, so the fat renders straight down into the grains as everything steams.",
      "Close the lid and run a normal White Rice cycle. As it cooks, the sausage softens and drips its sweet-savory fat into the rice below.",
      "While it cooks, stir together the soy-sauce, dark-soy, sesame-oil, and sugar in a small cup until the sugar dissolves; this is your finishing drizzle.",
      "When the cycle finishes, leave the lid closed and let it rest on Keep Warm for 5 minutes. Then lift out the sausages, slice them on a diagonal into thin coins, and return them to the pot.",
      "Pour the soy-sesame drizzle over everything and fold gently with a spatula or paddle so every grain gets glossy and seasoned. Top with the sliced scallions and serve hot."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 32,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "One $1 link of lap cheong flavors a whole pot, so a single pack from the Asian market stretches across several dinners.",
      "Buy jasmine rice in a big bag instead of small boxes; the per-cup cost drops to pennies and it keeps for ages in a sealed container.",
      "Skip take-out clay-pot rice; this hits the same sweet-savory note for a fraction of the price using just pantry soy and sesame oil."
    ],
    "substitutions": [
      {
        "forIngredientId": "chinese-sausage",
        "swap": "Use a few ounces of spam, sliced and laid on top, for a saltier budget version",
        "savings": "~$0.40 per link"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain white rice works fine; keep the same water level",
        "savings": "about the same"
      },
      {
        "forIngredientId": "dark-soy",
        "swap": "Just use a little more regular soy-sauce plus a pinch of sugar",
        "savings": "skip a specialty bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 15,
      "carbs": 78,
      "fat": 19,
      "fiber": 2
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese (Cantonese)",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "cantonese",
      "lap-cheong",
      "dinner"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-lazy-hot-pot",
    "name": "Rice Cooker Lazy Hot Pot",
    "description": "All the cozy, simmering comfort of hot pot with zero burner setup: bouillon cubes melt into the water and perfume the whole pot while fish cakes, shrimp, crab stick, tofu, and greens steam through to tender. Scoop it straight from the pot into a bowl, spoon over chili crisp, and slurp. Inspired by a viral rice-cooker hot pot trend on TikTok.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "bouillon-cube",
        "quantity": 2,
        "note": "your instant hot pot soup base — drop straight in, no need to dissolve first"
      },
      {
        "ingredientId": "water",
        "quantity": 4,
        "note": "enough to nearly cover everything"
      },
      {
        "ingredientId": "fish-cake",
        "quantity": 3,
        "note": "frozen fish balls or sliced fish cake, no thawing needed"
      },
      {
        "ingredientId": "frozen-meatballs",
        "quantity": 4,
        "note": "assorted frozen hot pot balls/meatballs"
      },
      {
        "ingredientId": "shrimp",
        "quantity": 1
      },
      {
        "ingredientId": "imitation-crab",
        "quantity": 3,
        "note": "crab sticks, halved"
      },
      {
        "ingredientId": "tofu",
        "quantity": 1,
        "note": "firm tofu cut into cubes"
      },
      {
        "ingredientId": "napa-cabbage",
        "quantity": 0.25,
        "note": "a few leaves, roughly torn"
      },
      {
        "ingredientId": "bok-choy",
        "quantity": 1,
        "note": "halved lengthwise"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1,
        "note": "sliced; enoki or button both work"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "smashed"
      },
      {
        "ingredientId": "ginger",
        "quantity": 1,
        "note": "about 1 tsp grated, or a couple of thin slices"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "cut into 2-inch lengths, white and green parts separated"
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
        "ingredientId": "chili-crisp",
        "quantity": 2,
        "optional": true,
        "note": "spoon over at the end for heat and crunch"
      },
      {
        "ingredientId": "frozen-dumplings",
        "quantity": 4,
        "optional": true,
        "note": "toss in for a heartier bowl"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "torn over the top"
      }
    ],
    "steps": [
      "Fill the rice cooker pot with the 4 cups of water and drop in the 2 bouillon cubes, smashed garlic, ginger, and the white parts of the scallion. This is your instant hot pot broth — no stirring needed, the cubes melt as the water heats.",
      "Add the frozen fish cakes and meatballs straight from the freezer (no thawing). Set the cooker to the White Rice / Cook cycle and let it run about 10 minutes to bring the broth up to a bubble and start heating the balls through.",
      "Carefully open the lid and nestle in the tofu cubes, mushrooms, and the firmer napa cabbage stems, pressing them down so they sit in the broth. Close and let the cycle keep running another 8-10 minutes.",
      "Open the lid again and add the shrimp, imitation crab, bok choy, napa leaves, and (if using) the frozen dumplings around the pot. Close the lid and let the cycle continue — the simmer and steam cook the shrimp and dumplings through and wilt the greens, usually 6-8 more minutes.",
      "If your cooker clicks to Keep Warm before the shrimp turns fully opaque and the greens are tender, just press Cook again, or leave it on Keep Warm with the lid closed for about 5 minutes to coast to done. The shrimp should be pink and opaque all the way through before you eat.",
      "Stir in the soy sauce and sesame oil, then taste the broth and add a splash more soy if it needs it. Scatter the scallion greens over the top.",
      "Ladle the broth, balls, tofu, shrimp, and greens into bowls. Spoon over chili crisp and torn cilantro to finish, and serve hot straight from the pot."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Hit the freezer aisle of any Asian market: a single bag of mixed hot pot balls (fish, shrimp, crab) is cheaper than buying each separately and keeps for months, so you can make this on repeat.",
      "Bouillon cubes are the budget hero here — way cheaper than bottled hot pot base and they melt into the same savory broth. Stock a box and you've got instant soup any night.",
      "Use whatever greens are on sale: a handful of regular cabbage, spinach, or frozen veg works just as well as napa and bok choy, so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "bouillon-cube",
        "swap": "1 tbsp miso or a packet of instant ramen seasoning whisked into the water",
        "savings": "Uses a pantry packet you may already have"
      },
      {
        "forIngredientId": "shrimp",
        "swap": "a few extra fish cakes or frozen dumplings",
        "savings": "Saves about $2 per pot"
      },
      {
        "forIngredientId": "napa-cabbage",
        "swap": "a couple cups of regular green cabbage or frozen veg",
        "savings": "Saves around $2-3 versus a whole napa head"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 34,
      "carbs": 22,
      "fat": 20,
      "fiber": 4
    },
    "emoji": "🍲",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "hot-pot",
      "no-stovetop",
      "high-protein"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-gyudon",
    "name": "Rice Cooker Gyudon (Sweet-Soy Beef & Onion Bowl)",
    "description": "This is the Yoshinoya beef bowl turned into a literal one-button meal: thin beef and sweet onions steam right into the rice in a glossy dashi-soy-mirin sauce, so every grain soaks up that savory-sweet flavor. It's warm, filling, and genuinely cheap student protein for a weeknight in the dorm. Inspired by @cookwithdana on TikTok (https://cookwithdana.com/one-pot-gyudon-made-in-rice-cooker/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 1.5,
        "note": "rinse until water runs clear, then soak 15 min"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "beef-sirloin",
        "quantity": 2,
        "note": "sliced as thin as you can, or use pre-shaved hot-pot beef"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "halved and sliced into thin half-moons"
      },
      {
        "ingredientId": "dashi-packet",
        "quantity": 1,
        "note": "or 1 tsp dashi powder"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 1.5
      },
      {
        "ingredientId": "sake",
        "quantity": 1,
        "optional": true,
        "note": "adds depth; skip if you don't have it"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "optional": true,
        "note": "beaten and folded in to set into silky ribbons, or cooked onsen-style (see step)"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
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
      "Rinse 1.5 cups sushi rice in the rice cooker pot until the water runs mostly clear, drain well, then add 1.5 cups fresh water and let it soak 15 minutes while you prep everything else.",
      "In a mug or small bowl, steep the dashi packet in about 1/4 cup hot tap water for a couple of minutes (or just stir dashi powder into the water), then stir in the soy sauce, mirin, sugar, sake if using, and ginger to make your gyudon sauce.",
      "Pour the sauce evenly over the soaked rice and water and stir gently just once to combine; don't over-stir or the rice turns gummy.",
      "Spread the sliced onion over the top, then lay the thin beef in a loose single layer over the onions so it steams apart instead of clumping into a block.",
      "Close the lid and run a normal White Rice cycle; the beef and onions cook down into the rice as the sauce reduces around them.",
      "When the cycle ends, leave the lid closed on Keep Warm for 10 minutes so the rice finishes steaming, then open and gently fold the beef, onions, and sauce through the rice until every grain is coated and the beef is cooked through (no pink).",
      "Optional silky egg: beat the eggs, drizzle them over the very hot rice right after folding, close the lid, and let them sit on Keep Warm 10 minutes; they'll set into soft custardy ribbons. For onsen-style whole eggs, instead crack each egg into a small heatproof cup, nestle the cups into the hot rice, close the lid and run a fresh 12-15 minute cook/steam cycle until the whites are just set.",
      "Scoop into bowls, top with the egg, and finish with sliced scallion and a pinch of sesame seeds."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Thin-shaved beef is pricey at the butcher — buy a small sirloin or chuck steak, freeze it 30-45 minutes until firm, and slice it paper-thin yourself for a fraction of the cost.",
      "No dashi packet? A crumbled bouillon cube or a little extra soy plus a pinch of MSG gives you that savory backbone for pennies.",
      "Stretch one batch into two meals by adding an extra half-cup of rice and a second onion — onions are cheap and bulk the bowl out without much added cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "beef-sirloin",
        "swap": "Use ground-beef instead and crumble it over the rice — cheaper and still rich and beefy.",
        "savings": "~$1.10 per serving"
      },
      {
        "forIngredientId": "mirin",
        "swap": "Swap mirin for an extra teaspoon of sugar dissolved in a splash of rice vinegar or water.",
        "savings": "~$0.40 per batch"
      },
      {
        "forIngredientId": "sake",
        "swap": "Leave the sake out entirely or use a splash of water — the dish still tastes great.",
        "savings": "~$0.24 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 32,
      "carbs": 78,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "beef",
      "dinner",
      "high-protein"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-korean-mandu-rice",
    "name": "Rice Cooker Korean Mandu Rice",
    "description": "Garlicky soy-and-sesame rice with juicy bulgogi dumplings steamed right on top, all from one button press. The dumplings cook through as the rice does, soaking up all that savory flavor for a cozy dorm dinner that tastes like way more effort than it is. Inspired by @easypeasyjordan on Instagram (https://www.instagram.com/easypeasyjordan/reel/C2gbBxXrY1w/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5
      },
      {
        "ingredientId": "water",
        "quantity": 2.25
      },
      {
        "ingredientId": "frozen-dumplings",
        "quantity": 10,
        "note": "frozen bulgogi/beef mandu, no need to thaw"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced or grated"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced; whites go in the rice, greens reserved for garnish"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "optional": true,
        "note": "crack on top during the last 8-10 min of the active cook cycle so the live steam sets them"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 1,
        "optional": true,
        "note": "for a quick drizzle sauce"
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1,
        "optional": true,
        "note": "thins the gochujang sauce"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "balances the sauce"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 2,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Rinse the jasmine rice right in the rice cooker pot: cover with cool water, swirl with your hand, and pour off the cloudy water 2-3 times until it runs mostly clear, then drain. This keeps the rice from turning gummy.",
      "Add the 2.25 cups water, soy sauce, sesame oil, minced garlic, and the white parts of the scallions to the pot. Stir briefly so the seasoning spreads evenly, then level the rice so it sits flat under the liquid.",
      "Lay the 10 frozen dumplings in a single layer right on top of the rice and liquid. Don't stir them in — letting them sit on the surface lets them steam instead of boiling apart.",
      "Close the lid and run the normal White Rice cycle. The rice absorbs the seasoned water below while the dumplings steam through from the rising heat above. No stirring, no peeking.",
      "Optional eggs: when about 8-10 minutes of cook time remain (most cookers are still actively steaming, not yet on Keep Warm), quickly open the lid, crack the eggs into any open gaps between dumplings, and close it again right away so the live steam sets the whites. By the end of the cycle the whites should be fully opaque and set; if any white is still runny, close the lid and give it 3-4 more minutes on Keep Warm.",
      "While it cooks, stir together the gochujang, rice vinegar, and honey in a small cup for a quick drizzle sauce if you want some heat.",
      "When the cycle ends, let everything rest on Keep Warm for 5 minutes, then open the lid and gently fluff the rice around the dumplings with a fork or rice paddle.",
      "Scoop into bowls, drizzle with the gochujang sauce, and top with the reserved scallion greens and a sprinkle of sesame seeds. Eat hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 37,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a big bag of frozen mandu from an Asian grocery or Costco — the per-dumpling price drops way below the corner-store packs, and they keep for months in the freezer.",
      "Jasmine rice is one of the cheapest grains per serving; a 5 lb bag costs a few dollars and stretches across dozens of meals like this one.",
      "Skip bottled minced garlic and use fresh cloves — they're pennies each and taste far better steamed into the rice."
    ],
    "substitutions": [
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain white rice works fine and is a little cheaper — use the same cup-for-cup amount.",
        "savings": "~$0.05/recipe"
      },
      {
        "forIngredientId": "frozen-dumplings",
        "swap": "Any frozen dumpling works — pork, kimchi, or veggie mandu all steam the same way on top of the rice.",
        "savings": "varies by filling"
      },
      {
        "forIngredientId": "gochujang",
        "swap": "Sriracha or a splash of extra soy sauce makes an easy drizzle if you don't have gochujang.",
        "savings": "~$0.20/recipe"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 18,
      "carbs": 92,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🥟",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "korean",
      "dinner",
      "dumplings",
      "no-stovetop"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-spam-musubi-bowl",
    "name": "Rice Cooker Spam Musubi Bowl",
    "description": "Everything you love about a Spam musubi, deconstructed into a glossy no-roll rice bowl: golden Spam in a sticky soy-sugar glaze, fluffy soy-scented rice, soft tomato and scallions, all crowned with a jammy egg, furikake, torn seaweed and a drizzle of chili oil. It's a one-pot comfort meal that costs less than a campus combo. Inspired by @jaida.ow on TikTok (https://www.tiktok.com/@jaida.ow/video/7357264800184814864).",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs mostly clear"
      },
      {
        "ingredientId": "spam",
        "quantity": 6,
        "note": "about half a 12 oz can, cut into small cubes"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to start the Spam"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 1.5,
        "note": "for the sticky musubi-style glaze"
      },
      {
        "ingredientId": "mirin",
        "quantity": 1,
        "optional": true,
        "note": "adds the classic glossy sweetness"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "note": "halved and quartered"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, whites and greens separated"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "one per bowl"
      },
      {
        "ingredientId": "furikake",
        "quantity": 2,
        "optional": true
      },
      {
        "ingredientId": "nori",
        "quantity": 1,
        "optional": true,
        "note": "torn or snipped into strips"
      },
      {
        "ingredientId": "chili-oil",
        "quantity": 2,
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true
      }
    ],
    "steps": [
      "Set your rice cooker to its normal Cook/White Rice cycle and add the vegetable oil with the lid OPEN. Once it warms, add the cubed Spam in a single layer and let it sit, stirring every couple of minutes, until the edges turn golden, about 8-10 minutes. (A basic cooker browns gently rather than deep-frying, so don't worry if it isn't crispy-crunchy — it'll still taste like musubi.)",
      "Stir in the minced garlic and scallion whites for about 30 seconds, then pour in the soy sauce, sugar, and mirin. Stir until it bubbles into a sticky, shiny glaze that coats the Spam, then scoop about half the Spam onto a plate to save as a topping.",
      "Add the rinsed jasmine rice and the water right on top of the remaining glazed Spam and stir once so the seasoning spreads through. Scatter the tomato pieces over the top.",
      "Close the lid and run a full normal White Rice cycle. The rice steams up soy-and-Spam flavored while the tomato softens into the grains.",
      "When the cycle ends, fluff the rice gently. Make two small wells, crack an egg into each, close the lid, and leave on Keep Warm until the whites are fully set and the yolk is jammy, 12-15 minutes. If your cooker runs cool and the whites still look raw, run a few minutes of the Cook cycle until they set.",
      "Divide the rice and eggs between two bowls and top with the reserved Spam.",
      "Finish each bowl with furikake, torn nori, scallion greens, a drizzle of chili oil, and a sprinkle of sesame seeds. Eat while hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "One 12 oz can of Spam makes this bowl twice over — use half here and turn the rest into fried rice or a breakfast scramble.",
      "Furikake, nori, and chili oil are the splurge, but they last for dozens of meals, so the per-bowl cost is just pennies once you own them.",
      "No mirin? Skip it and add an extra pinch of sugar plus a splash of water — the soy-sugar glaze still tastes like classic musubi."
    ],
    "substitutions": [
      {
        "forIngredientId": "spam",
        "swap": "Swap in cubed ham or sliced hot dog for the same salty-savory bite, or pan-crisp tofu for a veggie version.",
        "savings": "Hot dogs often run cheaper per oz than Spam."
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Use plain white rice or sushi rice; sushi rice gives an even more musubi-like stickiness.",
        "savings": "Plain white rice is the cheapest grain in the pantry."
      },
      {
        "forIngredientId": "mirin",
        "swap": "Replace with a splash of rice vinegar plus a pinch of sugar, or just extra soy and sugar.",
        "savings": "Avoids buying a specialty bottle you may rarely use."
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 22,
      "carbs": 78,
      "fat": 24,
      "fiber": 3
    },
    "emoji": "🍙",
    "accentColor": "bg-red-100",
    "cuisine": "Hawaiian/Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "hawaiian",
      "japanese",
      "spam",
      "musubi",
      "budget"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-cantonese-pork-patty-egg-claypot",
    "name": "Rice Cooker Cantonese Pork Patty & Egg Claypot-Style Rice",
    "description": "This is the diner classic that makes you feel like a chef for under five bucks: a juicy ginger-soy pork patty steams right on top of fluffy jasmine rice, an egg finishes jammy and glossy, and everything gets drizzled with sweet claypot-style soy. No clay pot, no stove, no oven needed; your rice cooker does every bit of the work. Inspired by @eatingwithkirby on TikTok (https://www.tiktok.com/@thefeedfeed/video/7388262283039771935).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs mostly clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "ground-pork",
        "quantity": 8,
        "note": "the patty base (about half a pound)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "cracked on top near the end"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1,
        "note": "mixed into the pork"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced into the pork"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "seasons the pork"
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1,
        "note": "umami for the pork"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.5,
        "note": "keeps the patty tender and juicy"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "in the pork mix"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "balances the pork seasoning"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25,
        "note": "classic Cantonese pepperiness"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.5,
        "optional": true,
        "note": "finely diced into the patty for extra savoriness"
      },
      {
        "ingredientId": "chinese-sausage",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced and laid on the rice to steam"
      },
      {
        "ingredientId": "sweet-soy-sauce",
        "quantity": 2,
        "note": "the finishing drizzle"
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 0.5,
        "optional": true,
        "note": "stirred into the sweet soy for color"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for garnish"
      }
    ],
    "steps": [
      "Rinse the jasmine rice until the water runs mostly clear, add it to the rice cooker pot with the water, and start the normal White Rice cycle. Make the patty while it heats up.",
      "In a bowl, combine the ground pork with the ginger paste, minced garlic, soy sauce, oyster sauce, cornstarch, sesame oil, sugar, white pepper, and the finely diced shiitake if using. Stir vigorously in one direction for about a minute until the mixture turns sticky and tacky.",
      "On a small plate, press the pork into one thin, even patty no more than about a third of an inch thick. A thin patty is important so the rice-cooker steam can cook it all the way through.",
      "When the rice has roughly 20 minutes left (the surface looks mostly absorbed with little steam holes), open the lid, slide the raw patty flat onto the rice, and scatter the Chinese sausage slices around it if using. Close the lid right away so the trapped steam cooks the patty through.",
      "Let the cycle continue undisturbed so the steam fully cooks the pork, about 18 to 20 minutes. With about 3 minutes left, open the lid and crack the eggs directly onto the rice beside the patty, then close the lid so the steam sets the whites while the yolks stay jammy.",
      "When the cycle ends, flip to Keep Warm and leave the lid down for 4 to 5 more minutes. Then check the pork: cut into the center and confirm it is no longer pink and the juices run clear (160F / fully cooked). If it still looks pink, close the lid and give it another 5 minutes on Keep Warm before serving.",
      "Stir the sweet soy sauce with the dark soy if using, then drizzle it generously over the patty, eggs, and rice. Top with sliced scallions, scoop from the bottom so each bowl gets some toasty rice and saucy pork, and serve hot."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Ground pork is one of the cheapest proteins by the ounce, so half a pound easily feeds two with rice. Buy the bigger pack, portion it, and freeze the rest for next week.",
      "Skip the Chinese sausage and shiitake if money is tight; the patty plus a jammy egg over sweet soy is already restaurant-good on its own.",
      "No sweet soy sauce on hand? Stir a pinch of sugar into regular soy sauce, it costs pennies and mimics that glossy claypot drizzle."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-pork",
        "swap": "Use ground chicken or ground turkey for a leaner, often cheaper patty (cook it fully, no pink).",
        "savings": "save ~$0.10 per serving"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Any plain white rice works, just match the water to your cooker's usual ratio.",
        "savings": "save a few cents per cup"
      },
      {
        "forIngredientId": "sweet-soy-sauce",
        "swap": "Mix regular soy sauce with a little sugar or honey for the same sweet, glossy finish.",
        "savings": "save ~$0.15"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 31,
      "carbs": 68,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese (Cantonese)",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "cantonese",
      "claypot",
      "high-protein",
      "runny-egg",
      "dinner"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-tower-of-doom",
    "name": "Rice Cooker Tower of Doom (Stacked One-Pot Meal)",
    "description": "The legendary broke-intern flex: jasmine rice steams on the bottom while soy-garlic-gochujang chicken, crispy-edged spam, and a heap of veg cook in a basket above, all from a single button press. You get four meal-prep boxes of savory, saucy, protein-packed goodness with exactly one pot to wash. Inspired by a viral rice-cooker stacking trend on Reddit.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "rinsed; the bottom layer"
      },
      {
        "ingredientId": "water",
        "quantity": 2.5,
        "note": "for the rice bowl"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 3,
        "note": "cut into bite-size chunks"
      },
      {
        "ingredientId": "spam",
        "quantity": 6,
        "note": "sliced into thin slabs"
      },
      {
        "ingredientId": "frozen-broccoli",
        "quantity": 2,
        "note": "straight from frozen, goes in the basket"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "thinly sliced so it steams through"
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 1
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "steamed firm during a cook cycle for safety"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "gochujang",
        "quantity": 2,
        "note": "the sauce backbone"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1
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
        "optional": true
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2,
        "optional": true,
        "note": "drizzle to taste"
      }
    ],
    "steps": [
      "Rinse 2 cups jasmine rice until the water runs mostly clear, then add it to the rice cooker bowl with 2.5 cups water and a pinch of the salt. This bottom layer steams everything stacked above it.",
      "In a bowl, toss the bite-size chicken thigh chunks with the soy sauce, gochujang, minced garlic, ginger paste, sesame oil, honey, and remaining salt until evenly coated. Let it marinate while you prep the rest, at least 5 minutes.",
      "Set the steamer basket (or a foil-lined heatproof plate that fits over the bowl) above the rice. Spread the sauced chicken in a single layer on one side, the spam slabs in the middle, and the frozen broccoli, sliced carrot, and frozen corn around the edges. Keep the chicken pieces spread out, not piled, so steam can reach every chunk.",
      "Close the lid and start the normal White Rice cycle. One full cycle steams the rice tender while cooking the chicken, spam, and veg together, no stovetop and no second pot.",
      "When the cycle ends, lift the basket and cut into the thickest chicken chunk: it must be opaque all the way through with clear juices (165°F / 74°C). If any piece is still pink, return the basket, add a splash of water to the rice if it looks dry, and run a second Cook cycle for 8-10 minutes, then recheck. Do not skip this check, the chicken starts raw.",
      "Crack the eggs into a small greased ramekin or heatproof cup, set it in the basket beside the food, close the lid, and run one more short Cook cycle (about 10-12 minutes) until the whites are fully set and the yolks are cooked to your liking. Using an active cook cycle (not just Keep Warm) ensures the eggs reach a safe temperature.",
      "Fluff the rice, then build your bowls: rice on the bottom, then chicken, spam, veg, and an egg towered on top. Spoon any saucy rice-cooker juices over everything.",
      "Garnish with sliced scallion, sesame seeds, and a drizzle of sriracha if using. Divide into 4 meal-prep containers; keeps in the fridge 3-4 days and reheats in the microwave."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Spam and chicken thighs are two of the cheapest proteins per gram, stacking both stretches the meal without blowing the budget.",
      "Frozen broccoli and corn cost a fraction of fresh and go straight into the basket frozen, no prep or waste.",
      "Make all 4 servings at once and box them up, batch meal-prep means one round of dishes and four days of lunches sorted."
    ],
    "substitutions": [
      {
        "forIngredientId": "spam",
        "swap": "Use sliced sausage or a few frozen meatballs instead, anything that steams happily in the basket.",
        "savings": "Sausage runs similar; frozen meatballs at ~$0.35 each can be cheaper per serving."
      },
      {
        "forIngredientId": "gochujang",
        "swap": "No gochujang? Mix sriracha with a little extra honey and soy for a sweet-spicy glaze.",
        "savings": "Saves ~$0.40 if you already have sriracha on hand."
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain white rice works identically as the steaming base.",
        "savings": "Plain rice is a few cents per cup cheaper."
      }
    ],
    "estimatedNutrition": {
      "calories": 590,
      "protein": 34,
      "carbs": 68,
      "fat": 21,
      "fiber": 5
    },
    "emoji": "🗼",
    "accentColor": "bg-red-100",
    "cuisine": "Pan-Asian / American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "meal-prep",
      "high-protein",
      "pan-asian"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-chicken-ginger-congee",
    "name": "Rice Cooker Chicken Ginger Congee",
    "description": "Silky, soul-warming Chinese rice porridge that simmers down into a thick, spoon-coating bowl with barely any effort — the ultimate sick-day, hungover, or \"I have one pot and zero energy\" meal. Tender shreds of ginger chicken, a swirl of sesame oil, and a shower of scallions make every spoonful feel like a hug. Inspired by @jonkung on TikTok (https://www.tiktok.com/@jonkung/video/6922193035283434757).",
    "mealType": "breakfast",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "rinsed once or twice until the water runs less cloudy"
      },
      {
        "ingredientId": "water",
        "quantity": 7,
        "note": "roughly a 1:9 rice-to-liquid ratio for thick congee"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2,
        "note": "replaces some of the water for deeper flavor"
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "poaches right in the porridge, then gets shredded"
      },
      {
        "ingredientId": "ginger",
        "quantity": 2,
        "note": "ground, or use a thumb of fresh ginger sliced into coins"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 2,
        "optional": true,
        "note": "extra punch if you don't have fresh"
      },
      {
        "ingredientId": "chicken-bouillon",
        "quantity": 2,
        "note": "stock powder is the secret to that takeout depth"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.5,
        "note": "key warming spice for congee"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for topping"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2,
        "optional": true,
        "note": "drizzle at the end, do not cook it in"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "optional": true,
        "note": "a few drops per bowl to season at the table"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "optional": true,
        "note": "stirred into the hot congee until cooked, for extra richness"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "for topping"
      }
    ],
    "steps": [
      "Rinse 1 cup jasmine rice once or twice in the rice cooker pot, then drain. Add the 7 cups water, 2 cups chicken broth, ginger (and ginger paste if using), chicken bouillon, salt, and white pepper. Stir to combine.",
      "Nestle the 2 raw chicken thighs into the liquid so they are submerged — they will poach gently and flavor the whole pot as the congee cooks.",
      "Close the lid and run the Porridge or Congee setting if your cooker has one. No porridge button? Run the regular White Rice cycle, or use a Cook/Saute mode and let it bubble. Cook about 30 minutes, until the rice has broken down into a creamy porridge.",
      "Lift the chicken thighs onto a plate. Check they are fully cooked — no pink in the center and the meat shreds easily; if still pink, return to the pot for another 5-10 minutes. Shred with two forks and discard any bones. Fish out and discard the big ginger coins if you used fresh and want a smoother bowl.",
      "Stir the shredded chicken back in. The congee should be thick and silky — if it's too loose, leave the lid cracked on Keep Warm for 10-15 minutes to tighten; if too thick, stir in a splash of hot water.",
      "Optional egg: with the congee piping hot, drizzle in a beaten egg while stirring so it cooks into silky ribbons, then let it sit on Keep Warm for 2-3 minutes to set fully.",
      "Taste and adjust with a pinch more salt or bouillon. Ladle into bowls and top with scallions, a drizzle of sesame oil, a few drops of soy sauce, and cilantro. Eat it steaming hot."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "One cup of rice and a couple of thighs stretches into three filling bowls — congee is one of the cheapest hot meals you can make, often under a dollar a serving.",
      "No fresh ginger? Ground ginger or a squeeze of ginger paste does the job and lasts forever in your cabinet.",
      "Save chicken bones and leftover scraps — add them for the cook, then pull them out, for free extra flavor without buying broth."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use rotisserie-chicken or canned-chicken stirred in at the end — even cheaper and zero raw-meat handling.",
        "savings": "~$1.20/serving"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Skip it, use all water, and add an extra teaspoon of chicken bouillon.",
        "savings": "~$1.50 per pot"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain white rice works just as well and is the cheapest grain on the shelf.",
        "savings": "a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 310,
      "protein": 24,
      "carbs": 42,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "congee",
      "comfort-food",
      "sick-day",
      "high-protein",
      "breakfast"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-basque-burnt-cheesecake",
    "name": "Rice Cooker Basque Burnt Cheesecake",
    "description": "A jiggly, custardy Spanish-style cheesecake with a soft golden edge and a pudding-soft center — all from one buttered pot, no oven required. Just blend, pour, and let the Cake cycle do the work while you study, then chill it into luscious dense custard. Inspired by @nomadetteats (https://nomadette.com/rice-cooker-cheesecake/).",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "cream-cheese",
        "quantity": 32,
        "note": "two 8-oz blocks, fully softened to room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 14,
        "note": "about 3/4 cup plus a bit"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "room temperature"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "room temperature"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "a scant 1/3 cup; sift to keep it lump-free"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "zest most of it, then add a squeeze of juice"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "for greasing the pot and parchment"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "optional": true
      }
    ],
    "steps": [
      "Rub the inside of the rice cooker pot generously with the softened butter, then press a square of parchment in so it climbs up the sides (the wrinkles are traditional Basque charm). Butter the parchment too.",
      "In a big bowl, beat the softened cream cheese with the sugar and salt until completely smooth and glossy with no lumps. A whisk is fastest, but a fork and elbow grease work.",
      "Whisk in the eggs one at a time until fully blended, then stir in the heavy cream, lemon zest, a squeeze of lemon juice, and the vanilla if using.",
      "Sift the scant 1/3 cup flour over the batter and whisk just until silky and lump-free — don't overmix.",
      "Pour the batter into the lined pot and tap the pot firmly on the counter a few times to pop air bubbles so the top sets evenly.",
      "Close the lid and run the Cake cycle (about 50 minutes). No Cake setting? Run a full White Rice cycle; if the center is still very loose at the end, run a second short cycle or hold on Keep Warm until only the middle jiggles slightly — the eggs must be set, not raw.",
      "Leave the lid closed and rest on Keep Warm for 10 minutes, then switch the cooker off and let the cake cool in the pot for 30 minutes. It will sink and firm up — that's exactly right.",
      "Lift the cake out by the parchment and chill in the fridge at least 3 hours (overnight is best) so the center turns to dense custard. Slice with a hot, wiped knife and serve cool."
    ],
    "totalTimeMinutes": 255,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 50,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy store-brand cream cheese in blocks, not whipped tubs — it's the bulk of the cost and the generic stuff bakes identically.",
      "Bring the cream cheese, eggs, and cream to room temp first (sit out 30 min); cold ingredients clump and you'll waste batter fighting lumps.",
      "One cake makes 8 rich slices — chill the leftovers and you've got a week of dessert for the price of a single cafe slice."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "Swap the flour for 2 tbsp cornstarch for an even softer, more pudding-like center",
        "savings": "about the same"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use whole milk or half-and-half if you don't have cream — slightly less rich but still creamy",
        "savings": "saves ~$0.30"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Use brown sugar for a deeper, almost caramel flavor",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 6,
      "carbs": 22,
      "fat": 24,
      "fiber": 0
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish / Basque",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "dessert",
      "spanish",
      "basque",
      "no-oven",
      "cheesecake"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-giant-souffle-pancake",
    "name": "Rice Cooker Giant Fluffy Soufflé Pancake",
    "description": "One pour, zero flipping, and out comes a towering golden pancake the size of your whole pot — fluffy and cloud-soft inside with a gently browned bottom you slice into wedges like a cake. It's the lazy-genius breakfast that looks like you tried way harder than you did. Inspired by kirbiecravings.com (https://kirbiecravings.com/rice-cooker-pancake/).",
    "mealType": "breakfast",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.75
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "milk",
        "quantity": 0.75
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "melted for the batter, plus a little extra to grease the pot if not using spray"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "optional": true,
        "note": "helps the whipped whites hold for extra lift"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "or use the extra butter to grease the pot"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 1,
        "optional": true,
        "note": "dusted on top to serve"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 4,
        "optional": true,
        "note": "for drizzling"
      },
      {
        "ingredientId": "strawberries",
        "quantity": 1,
        "optional": true,
        "note": "sliced, to pile on top"
      }
    ],
    "steps": [
      "Separate the eggs: yolks into a large bowl, whites into a clean, completely dry bowl (any grease or yolk keeps the whites from fluffing). In the large bowl, whisk the yolks with the milk, melted butter, vanilla, and white sugar until smooth. Add the flour, baking powder, and salt and stir just until you have a thick, lump-free batter — don't overmix.",
      "Whip the egg whites (add the cream of tartar now if using) until foamy and they hold soft peaks that flop over gently at the tip. A balloon whisk and a strong arm work, or a hand mixer if you have one. These airy whites are what make the pancake tall, so keep going until they're billowy, not watery.",
      "Add about a third of the whites to the batter and stir to loosen it. Tip in the rest and gently fold — scooping up and over, turning the bowl as you go — until just combined with only a few faint streaks left. Stirring hard here knocks out the air, so fold lightly.",
      "Grease the rice cooker's inner pot well, all the way up the sides, with cooking spray or a thin coat of butter so the pancake releases cleanly. Pour in the batter and tap the pot a couple of times on the counter to level it and pop any big bubbles.",
      "Set the cooker to its normal White Rice / Cook cycle, close the lid, and let it run undisturbed. Don't lift the lid early — the trapped steam is what cooks the top.",
      "Most cookers will click to Keep Warm before the thick batter is fully set. When it does, simply press Cook again to start another cycle; repeat once more if needed. Total cooking is usually about 40 to 45 minutes. The pancake is done when the top springs back to a light touch and a knife poked into the center comes out clean (no wet batter).",
      "Leave it on Keep Warm for 5 minutes, then run a spatula or butter knife around the edge to loosen it. Set a plate over the pot and flip, or lift the inner pot out and tip the pancake onto a plate, browned side up.",
      "Dust with powdered sugar, drizzle with maple syrup, and pile on sliced strawberries. Cut into wedges like a cake and serve warm."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Whip the egg whites by hand with a regular whisk instead of buying a mixer — just keep the bowl clean and dry so they fluff up.",
      "Skip the toppings and eat it with whatever jam, peanut butter, or banana you already have in the dorm. The pancake itself costs only pennies per slice.",
      "Plain white sugar in the batter does the sweetening job, so save the maple syrup and fresh berries for special mornings and keep the everyday cost tiny."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use any milk you have — almond-milk, oat-milk, or soy-milk all work for a dairy-free batter.",
        "savings": "use what's already open instead of buying more"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Swap in honey or maple-syrup (cut the milk by a splash since they add liquid) for a richer flavor.",
        "savings": "skip if you're out — the pancake is still good lightly sweet"
      },
      {
        "forIngredientId": "strawberries",
        "swap": "Top with sliced banana, thawed frozen-berries, or a spoonful of jam instead.",
        "savings": "banana is about $0.30 vs $1.50 for fresh berries"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 7,
      "carbs": 31,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🥞",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "breakfast",
      "no-flip",
      "pancake",
      "souffle"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-hawaiian-butter-mochi",
    "name": "Rice Cooker Hawaiian Butter Mochi",
    "description": "Chewy, bouncy, and coconut-rich, this golden butter mochi is the gluten-free dorm dessert you didn't know your rice cooker could make. You literally cannot overmix it, so just whisk, pour, and let the cooker do all the work while you study. Inspired by a viral rice-cooker butter mochi trend on TikTok.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "glutinous-rice-flour",
        "quantity": 3,
        "note": "mochiko / sweet rice flour — the whole point of the chew"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup; sweet but classic"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "full-fat, shaken well"
      },
      {
        "ingredientId": "milk",
        "quantity": 1
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "melted, plus a little extra for greasing"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "for greasing the pot"
      },
      {
        "ingredientId": "coconut-flakes",
        "quantity": 1,
        "optional": true,
        "note": "toasted, sprinkled on top for crunch"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "black or white, sprinkled on top"
      }
    ],
    "steps": [
      "Grease the rice cooker pot generously: spray it well with cooking spray, then rub a little melted butter up the sides so the mochi releases cleanly.",
      "In a big bowl, whisk together the glutinous rice flour, sugar, baking powder, and salt until evenly combined with no lumps.",
      "Make a well in the dry mix, then add the eggs, coconut milk, milk, melted butter, and vanilla. Whisk hard until you have a smooth, pourable batter — don't worry, mochi is impossible to overmix.",
      "Pour the batter into the greased pot and tap it gently on the counter a few times to pop any big air bubbles.",
      "Close the lid and run the Cake setting. No Cake setting? Run a normal White Rice cycle; when it clicks to Keep Warm, leave the lid closed and let it sit 15 minutes, then run a second White Rice cycle to set the center.",
      "Check doneness: the top should look set and feel springy, and a toothpick poked into the middle should come out clean with no wet batter. If it's still gooey, run one more short cycle and re-check before eating.",
      "Turn the cooker off and let the mochi rest with the lid off for 15-20 minutes — it firms up and gets bouncier as it cools, so resist cutting it hot.",
      "Run a butter knife around the edge, flip the mochi onto a plate, sprinkle with toasted coconut flakes and sesame seeds if using, and cut into chewy squares."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 75,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Glutinous rice flour (mochiko) is cheap at any Asian grocery and one bag makes several batches — buy it there, not at a pricey health-food store.",
      "No coconut milk on hand? A can of evaporated milk or just extra regular milk still gives you a chewy mochi for less.",
      "Skip the toppings entirely — plain butter mochi is the classic Hawaiian bake-sale version and saves you the cost of coconut flakes and sesame seeds."
    ],
    "substitutions": [
      {
        "forIngredientId": "coconut-milk",
        "swap": "Use a can of evaporated milk, or an extra cup of regular milk plus a tablespoon of melted butter.",
        "savings": "~$1.50"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap in melted coconut oil for a dairy-light, extra-coconutty mochi.",
        "savings": "about even"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "A spoonful of ube-halaya turns it purple and adds flavor if you're feeling fancy.",
        "savings": "costs a bit more"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 5,
      "carbs": 46,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Hawaiian / Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "gluten-free",
      "dessert",
      "hawaiian",
      "japanese",
      "mochi",
      "no-oven"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-matcha-mochi-cake",
    "name": "Rice Cooker Matcha Mochi Cake",
    "description": "Earthy matcha meets the signature chewy-stretchy mochi crumb in a striking green, naturally gluten-free cake that looks bakery-fancy but is honestly just dump, stir, and press the button. The repeated cook/warm cycles do all the work while you study, and the edges turn lightly golden and pleasantly toothsome. Inspired by a viral rice-cooker mochi cake trend on YouTube.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "glutinous-rice-flour",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 10
      },
      {
        "ingredientId": "matcha",
        "quantity": 4
      },
      {
        "ingredientId": "milk",
        "quantity": 1.5
      },
      {
        "ingredientId": "butter",
        "quantity": 4
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "note": "to grease the rice cooker pot"
      },
      {
        "ingredientId": "black-sesame",
        "quantity": 1,
        "optional": true,
        "note": "sprinkle on top before the final cook cycle"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 1,
        "optional": true,
        "note": "dust over the cooled cake"
      }
    ],
    "steps": [
      "Melt the butter: drop it into the cold, dry rice cooker pot, press Cook (or Saute), and watch closely for about 1 minute until just melted. Press Cancel/Keep Warm and let it cool 2-3 minutes so it won't scramble the eggs.",
      "Scrape the melted butter into a mixing bowl. Whisk in the milk, eggs, and vanilla extract until smooth. Add the glutinous rice flour, sugar, matcha, baking powder, and salt, then stir hard until you have a thin, lump-free, vivid-green batter (break up any matcha clumps against the side of the bowl).",
      "Wipe the pot dry, coat the bottom and sides generously with cooking spray, and pour the batter back in. If using, sprinkle the black sesame evenly over the top.",
      "Press Cook (standard White Rice cycle). When it clicks over to Keep Warm, leave the lid closed and rest the cake on Warm for 10 minutes so the center keeps setting from residual heat.",
      "Press Cook again, and repeat this cook-then-rest-on-Warm pattern, resting 8-10 minutes on Warm between presses. Most cookers need roughly 6-8 presses total; smaller or higher-wattage cookers finish faster, so judge by doneness, not the count.",
      "The cake is done when the top springs back when gently pressed and a toothpick inserted in the center comes out clean (a chewy mochi cake looks slightly tacky but should never be wet or jiggly). If it's still wet, run another cook/rest cycle.",
      "Press Cancel and let the cake cool in the pot with the lid open for at least 30 minutes — it firms up and gains its stretchy chew as it cools, so don't rush this step.",
      "Run a silicone spatula around the edge, invert the pot onto a plate, and tap to release the cake. Dust with powdered sugar if you like, then slice into wedges and serve."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 100,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "A small tin of culinary-grade matcha costs more upfront but lasts for a dozen cakes — split the bag with a roommate to make this snack pennies per slice.",
      "No baking powder? Skip it; the cake will be denser and even chewier (more traditional mochi texture) and still works fine.",
      "Use whatever milk you already have in the mini-fridge — even water with an extra spoon of butter works in a pinch, no special grocery trip needed."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use almond-milk or oat-milk for a fully dairy-free cake (pair with plant butter).",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap in coconut-oil or vegetable-oil for a dairy-free, vegan-friendly crumb.",
        "savings": "saves ~$0.40"
      },
      {
        "forIngredientId": "matcha",
        "swap": "Use cocoa powder instead for a chocolate mochi cake if you don't have matcha.",
        "savings": "saves ~$1.10"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 4,
      "carbs": 42,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🍵",
    "accentColor": "bg-green-100",
    "cuisine": "Japanese fusion",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "dessert",
      "gluten-free",
      "mochi",
      "matcha"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-mango-sticky-rice",
    "name": "Rice Cooker Mango Sticky Rice",
    "description": "Pillowy glutinous rice soaked in warm, salty-sweet coconut cream and piled next to juicy fresh mango — the most famous Thai street dessert, and shockingly easy when the rice cooker does all the steaming for you. Sweet, creamy, a little salty, and totally addictive. Inspired by a viral rice-cooker trend on TikTok.",
    "mealType": "snack",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "sweet-rice",
        "quantity": 1,
        "note": "glutinous/sticky rice (1 cup dry), rinsed until the water runs clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "1 cup, for cooking the rice"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "1 full-fat can; most goes into the sauce, reserve a few spoonfuls for drizzling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp, stirred into the coconut milk until dissolved"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp — balances the sweetness, don't skip"
      },
      {
        "ingredientId": "mango",
        "quantity": 1,
        "note": "1 ripe mango, peeled and sliced"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tbsp, optional, to thicken the drizzle"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 2,
        "optional": true,
        "note": "2 tsp toasted, for garnish"
      },
      {
        "ingredientId": "mint-fresh",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp leaves, for garnish"
      }
    ],
    "steps": [
      "Put 1 cup sweet (glutinous) rice in the rice cooker pot and rinse it 2-3 times, swishing and pouring off the cloudy water until it runs almost clear — this keeps the grains from turning gummy.",
      "Add 1 cup water to the drained rice, level it out, and run a full White Rice cycle. When it finishes, leave the lid CLOSED.",
      "While the rice cooks, make the no-cook sauce: in a mug or bowl, stir about three-quarters of the can of coconut milk with the 3 tbsp sugar and 1/2 tsp salt until the sugar fully dissolves. Reserve the remaining coconut milk for drizzling.",
      "As soon as the cycle ends, pour the sweetened coconut mixture over the hot rice and gently fold it through. Close the lid and let it rest on Keep Warm for 25-30 minutes so the rice drinks up the coconut and turns glossy and tender.",
      "Make the drizzle: if using the optional cornstarch, whisk it smooth into the reserved coconut milk, then stir a spoonful of the hot rice's pot liquid into it — or set the cup against the warm inner pot — so it warms gently before serving. Skip the cornstarch and it's still a lovely thinner drizzle.",
      "Peel and slice 1 ripe mango into thin planks or cubes.",
      "Scoop the warm sticky rice into bowls, lay the mango alongside, and spoon the warm coconut drizzle over the top.",
      "Finish with a sprinkle of toasted sesame seeds and a few mint leaves if you have them, and serve while everything is still warm."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Sweet rice and a can of coconut milk are the only real costs here — buy the rice in a big bag from an Asian grocery and your cost per batch drops to pennies.",
      "Wait for mangoes to go on sale (cheapest and sweetest in spring/summer) or grab one slightly overripe mango from the discount bin — softer fruit is actually better here.",
      "No fresh mango? A handful of thawed frozen mango works fine and is usually cheaper year-round — just pat it dry before plating."
    ],
    "substitutions": [
      {
        "forIngredientId": "mango",
        "swap": "Use thawed frozen mango, or sliced ripe banana or peach, when fresh mango is pricey.",
        "savings": "~$0.65"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Swap in palm sugar or brown sugar for a deeper, more traditional caramel note.",
        "savings": "about the same"
      },
      {
        "forIngredientId": "sweet-rice",
        "swap": "In a pinch, sushi-rice gets you a stickier pudding-like texture — not truly authentic, but it works.",
        "savings": "minimal"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 6,
      "carbs": 78,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🥭",
    "accentColor": "bg-yellow-100",
    "cuisine": "Thai",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "thai",
      "dessert",
      "vegan",
      "no-stove"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-miso-mushroom-kale-oatmeal-congee",
    "name": "Rice Cooker Miso Mushroom & Kale Savory Oatmeal Congee",
    "description": "Creamy, slow-simmered oats reimagined as a silky congee, loaded with umami miso, earthy mushrooms, and a fiery spoonful of chili crisp. It is the cozy, savory breakfast that proves oatmeal does not have to be sweet, and your rice cooker does every bit of the stirring for you. Inspired by @mariongrasby on YouTube (https://www.marionskitchen.com/rice-cooker-miso-mushroom-and-kale-oatmeal-congee/).",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "oats",
        "quantity": 1
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 4
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1.5
      },
      {
        "ingredientId": "kale",
        "quantity": 1.5
      },
      {
        "ingredientId": "miso",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
      },
      {
        "ingredientId": "ginger",
        "quantity": 1
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for topping"
      },
      {
        "ingredientId": "chili-crisp",
        "quantity": 3,
        "optional": true,
        "note": "spoon over to finish"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "optional": true,
        "note": "crack in to soft-set on Keep Warm"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25,
        "optional": true
      }
    ],
    "steps": [
      "Add the rolled oats and veggie broth straight into the rice cooker pot. Stir in 1 tsp grated ginger, 2 minced garlic cloves, the soy sauce, and a pinch of white pepper, then give everything one good stir so the oats settle evenly.",
      "Slice the mushrooms and pile them on top, close the lid, and run the Congee or Soup setting (or a full White Rice cycle if your cooker has no porridge mode), about 1 hour, until the oats break down into a loose, creamy porridge. Open the lid and stir once or twice partway through to keep it silky and stop it from sticking.",
      "When the cycle ends, stir well: the congee should be thick, glossy, and pourable. If it is too tight, splash in a little more broth or water and stir; if it is loose, leave the lid off on Keep Warm for a few minutes to thicken.",
      "In a small bowl, loosen the miso paste with a couple spoonfuls of the hot congee until smooth (this prevents clumps), then stir it back into the pot. Adding miso off the boil keeps it gentle and aromatic rather than bitter.",
      "Stir in the chopped kale and drizzle over the sesame oil. Close the lid and hold on Keep Warm for 5 minutes so the residual heat wilts the kale into the porridge while keeping it green.",
      "Optional soft eggs: make two small wells in the surface, crack an egg into each, close the lid, and leave on Keep Warm 10 to 14 minutes until the whites are fully set (no clear, runny white left) and the yolks are jammy. If any white is still translucent, close the lid and give it another few minutes before serving.",
      "Ladle into bowls and top with sliced scallions, a generous spoon of chili crisp, and a sprinkle of sesame seeds. Stir the chili crisp through and eat hot."
    ],
    "totalTimeMinutes": 80,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 70,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Plain rolled oats cost a fraction of fancy congee rice and break down into the same creamy texture, so buy the big canister and you have breakfasts for weeks.",
      "A little miso goes a long way: one tub lasts months in the fridge and seasons soups, dressings, and marinades, making it cheap per use even if it feels pricey up front.",
      "Swap the veggie broth for water plus a crumbled bouillon cube or an extra spoon of the miso to save money without losing the savory backbone."
    ],
    "substitutions": [
      {
        "forIngredientId": "veggie-broth",
        "swap": "Water with a bouillon cube or a teaspoon of extra miso dissolved in",
        "savings": "~$2.50 per batch"
      },
      {
        "forIngredientId": "mushroom",
        "swap": "Frozen sliced mushrooms or rehydrated dried shiitake, which store longer",
        "savings": "~$0.60"
      },
      {
        "forIngredientId": "kale",
        "swap": "Frozen spinach or any leftover hardy greens stirred in at the end",
        "savings": "~$0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 13,
      "carbs": 42,
      "fat": 12,
      "fiber": 7
    },
    "emoji": "🍲",
    "accentColor": "bg-amber-100",
    "cuisine": "Asian fusion",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "savory-oatmeal",
      "congee",
      "vegetarian",
      "breakfast"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-creamy-gochujang-pasta",
    "name": "Rice Cooker Creamy Gochujang Pasta",
    "description": "The viral sweet-spicy-cheesy gochujang pasta, reborn entirely in your rice cooker — a glossy, fiery-creamy sauce clinging to every noodle, no stove and no babysitting required. It's the dorm-friendly staple that tastes like a $20 restaurant bowl for pocket change. Inspired by @withngocthao on TikTok (https://www.tiktok.com/@withngocthao/video/7523660200755203384).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "penne",
        "quantity": 2,
        "note": "or any short pasta you've got"
      },
      {
        "ingredientId": "water",
        "quantity": 5,
        "note": "for boiling the pasta in the bowl"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "for the pasta water"
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "gochujang",
        "quantity": 3,
        "note": "the star — adjust to your spice tolerance"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 1,
        "note": "deepens the sauce color and umami"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "balances the heat"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.75
      },
      {
        "ingredientId": "parmesan",
        "quantity": 4
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 1,
        "optional": true,
        "note": "extra smoky heat"
      },
      {
        "ingredientId": "bacon",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for a savory crunch"
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
        "note": "to finish"
      }
    ],
    "steps": [
      "Add the water and a big pinch of the salt to the rice cooker bowl, drop in the penne, and run a full Cook cycle (or White Rice cycle) until the pasta is just tender, about 10-12 minutes. Stir once or twice so nothing sticks. Before draining, scoop out and reserve about half a cup of the starchy cooking water, then drain the pasta into a colander and set both aside.",
      "Wipe the bowl dry, return it to the cooker, and start a fresh Cook cycle so it heats back up. Add the butter and let it melt, then add the minced garlic (and chopped bacon, if using) and stir for 1-2 minutes until fragrant and sizzling — keep stirring so the garlic softens but does not brown.",
      "Stir in the gochujang, tomato paste, soy sauce, honey, and gochugaru if using. Cook this paste for about 2 minutes, stirring constantly, until it darkens slightly and smells deep and toasty.",
      "Pour in the heavy cream and stir until the sauce turns a smooth, glossy orange-red. Let it bubble gently on the Cook cycle for 3-4 minutes, stirring often, to reduce and thicken a little.",
      "Sprinkle in the parmesan and stir until fully melted into the sauce. If it looks too thick, splash in a little of the reserved pasta water until it's silky.",
      "Add the drained pasta back to the bowl and fold everything together for 2-3 minutes until each piece is coated and the sauce clings. Loosen with more pasta water a splash at a time as needed.",
      "Switch to Keep Warm, taste, and adjust with a pinch more salt or a drizzle of honey. Let it rest 2 minutes to set up, then top with sliced scallions and sesame seeds and serve straight from the bowl."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 22,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Gochujang is your secret weapon — one tub costs a few dollars and lasts months, turning cheap pantry staples into restaurant-level sauces all semester.",
      "Swap the heavy cream for whole milk plus an extra spoon of butter; you lose almost nothing and save real money per bowl.",
      "Buy store-brand short pasta in bulk and skip the bacon — the sauce carries the whole dish on its own for well under $2 a serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use whole milk with an extra tablespoon of butter for a lighter, cheaper sauce",
        "savings": "~$0.30 per batch"
      },
      {
        "forIngredientId": "penne",
        "swap": "Any short pasta, or ramen noodles with the seasoning packet skipped, works great",
        "savings": "~$0.15 per serving"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Shredded mozzarella for an extra cheesy, stretchy pull",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 16,
      "carbs": 62,
      "fat": 26,
      "fiber": 4
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "Korean fusion",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "korean",
      "pasta",
      "vegetarian",
      "spicy"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-nigerian-jollof-rice",
    "name": "Rice Cooker Nigerian Jollof Rice",
    "description": "Smoky, deep-red party rice where every long grain drinks up a blended tomato-pepper-onion base spiked with fiery Scotch bonnet — the dish that fuels West Africa's friendliest food fight. Your rice cooker does all the simmering, so you get that legendary jollof flavor with zero stovetop stress. Inspired by a viral rice-cooker jollof trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "long-grain; rinse well until the water runs clear"
      },
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "the base of the red sauce"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 3,
        "note": "for deep color and richness"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "red is traditional; blend it into the sauce"
      },
      {
        "ingredientId": "onion",
        "quantity": 1
      },
      {
        "ingredientId": "habanero",
        "quantity": 1,
        "note": "Scotch bonnet stand-in; seed it or use half for milder heat"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3
      },
      {
        "ingredientId": "ginger",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2,
        "note": "swap in veggie-broth to keep it meat-free"
      },
      {
        "ingredientId": "bouillon-cube",
        "quantity": 1
      },
      {
        "ingredientId": "curry-powder",
        "quantity": 1
      },
      {
        "ingredientId": "thyme",
        "quantity": 1
      },
      {
        "ingredientId": "bay-leaves",
        "quantity": 2
      },
      {
        "ingredientId": "smoked-paprika",
        "quantity": 1,
        "note": "fakes that signature smoky 'party jollof' edge"
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
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Rinse the 2 cups jasmine rice in cold water 2-3 times until the water runs mostly clear, then drain well and set aside — this keeps the jollof fluffy instead of mushy.",
      "Make the base: peel and roughly chop the onion (reserve half for the sauté), bell-pepper, garlic, and habanero (handle the habanero carefully; seed it for less heat). If you have a blender, blitz the crushed-tomato, bell-pepper, half the onion, garlic, ginger, and habanero into a smooth red purée. No blender? Finely chop everything and stir the crushed-tomato through it — it still works.",
      "Set the cooker to Saute/Cook (or start a normal cooking cycle with the lid open). Add the vegetable-oil and the reserved diced onion and cook 3-4 minutes, stirring, until soft and fragrant.",
      "Stir in the tomato-paste and let it fry for about 2 minutes to lose its raw, tinny taste, then pour in the blended tomato-pepper base. Add the curry-powder, thyme, smoked-paprika, crumbled bouillon-cube, salt, and pepper. Let the sauce bubble with the lid open for about 5 minutes, stirring now and then, until it darkens and thickens slightly.",
      "Add the drained rice and stir until every grain is coated red. Pour in the chicken-broth (or veggie-broth) and tuck in the bay-leaves. Level the rice — the liquid should just reach the top of the grains; add a splash of water if it doesn't quite cover.",
      "Close the lid and run the standard White Rice / long-grain cycle. Do NOT open or stir while it cooks — let the cooker steam the sauce into the grains.",
      "When the cycle finishes, leave it on Keep Warm for 10 minutes, then fluff gently with a fork or paddle and discard the bay-leaves. The lightly toasted layer at the bottom is the prized smoky 'bottom pot' — scrape it in.",
      "Taste and adjust salt, top with sliced scallion, and serve hot. It's great with fried plantain or a fried egg on the side."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "dietTags": [
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a bag of long-grain or jasmine rice instead of single-serve cups — it's the cheapest part of this dish and lasts weeks of meals.",
      "Tomato-paste is about 10 cents a tablespoon and does the heavy lifting on color and depth, so lean on it instead of pricier jarred sauces.",
      "One habanero seasons the whole pot, so split the rest of the pepper with a roommate or freeze it — a single chili goes a long way."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-broth",
        "swap": "Use veggie-broth (same price) to make it fully meat-free, or water plus an extra bouillon-cube.",
        "savings": "about even"
      },
      {
        "forIngredientId": "habanero",
        "swap": "No Scotch bonnet? Use a jalapeno or a pinch of red-pepper-flakes for gentler heat.",
        "savings": "saves ~$0.10"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain rice works great and is even cheaper.",
        "savings": "saves ~$0.03/cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 9,
      "carbs": 78,
      "fat": 9,
      "fiber": 4
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "West African (Nigerian)",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "nigerian",
      "west-african",
      "jollof",
      "spicy",
      "budget"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-persian-tahdig",
    "name": "Rice Cooker Persian Tahdig (Crispy-Bottom Rice)",
    "description": "Fluffy saffron-kissed basmati hiding a shatteringly crisp golden crust at the bottom — the legendary tahdig that Persian families genuinely fight over at the table. Your rice cooker does the hard part, slow-toasting the bottom into a deep-golden crackle while the top steams light and separate. Inspired by a viral rice-cooker tahdig trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "basmati-rice",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 3
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.25,
        "optional": true,
        "note": "spread on the bottom for a richer, crispier yogurt-tahdig crust"
      },
      {
        "ingredientId": "saffron",
        "quantity": 0.25,
        "note": "bloomed in 2 tbsp warm water for color and aroma"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5
      },
      {
        "ingredientId": "water",
        "quantity": 2.5
      },
      {
        "ingredientId": "barberries",
        "quantity": 2,
        "optional": true,
        "note": "tart jewel-red garnish"
      },
      {
        "ingredientId": "pistachios",
        "quantity": 1,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Rinse the 2 cups basmati under cold water until the water runs clear, then soak it in lightly salted cool water for 20-30 minutes while you prep. Soaking is the secret to long, separate grains and a sturdy crust.",
      "Pinch the saffron into 2 tbsp warm water and let it bloom into a deep orange-gold while the rice soaks. Drain the rice well in a sieve.",
      "Set the rice cooker to its Cook or Saute mode (or start a White Rice cycle on the empty inner pot for 1-2 minutes to heat it). Add the butter and vegetable oil to the bottom and let the fat get hot and shimmering — this layer becomes your crispy crust.",
      "If using the yogurt option, stir the Greek yogurt with half the bloomed saffron water and spread it in an even layer over the hot fat for a classic crispy yogurt-tahdig base. Gently mound the drained rice on top, packing it loosely so steam can rise through it.",
      "Pour the 2.5 cups water plus the salt evenly around the edges, then drizzle the rest of the saffron water over the top. Close the lid and run the normal White Rice cycle. Do not stir once it is cooking.",
      "When the cycle ends, do NOT open the lid — let it sit on Keep Warm for 25-30 minutes so the bottom keeps toasting into a deep-golden crust. For extra crunch, run one more Cook cycle for 8-10 minutes, then switch back to Keep Warm.",
      "Run a thin spatula or butter knife around the edge to loosen the crust. Lay a plate over the pot and flip it upside-down so the golden tahdig crowns the top — or scoop out the fluffy rice and pry the crispy disc up in shards.",
      "Garnish with barberries and chopped pistachios if using, and serve hot so the crust stays shattering-crisp."
    ],
    "totalTimeMinutes": 85,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 50,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Saffron is the splurge — a tiny 1/4 tsp pinch does the whole pot and a single jar lasts dozens of meals, so the per-serving cost is pennies.",
      "No saffron on hand? About 1/2 tsp of turmeric gives the same golden color for a fraction of the price, and nobody will know at the table.",
      "The yogurt-bottom version uses cheap pantry Greek yogurt to guarantee a thick, crispy crust — skip pricier specialty add-ins like lavash and let the appliance do the work.",
      "Save and reuse the soaking-rinse routine: well-rinsed cheap basmati crisps just as well as premium aged rice, so buy the budget bag."
    ],
    "substitutions": [
      {
        "forIngredientId": "saffron",
        "swap": "1/2 tsp turmeric for the golden color",
        "savings": "saves ~$0.30 per batch"
      },
      {
        "forIngredientId": "greek-yogurt",
        "swap": "a thin layer of plain yogurt, or skip for a plain butter-tahdig crust",
        "savings": "saves ~$0.35 per batch"
      },
      {
        "forIngredientId": "butter",
        "swap": "ghee or extra vegetable oil for a dairy-free crust",
        "savings": "oil saves a few cents; ghee is richer"
      }
    ],
    "estimatedNutrition": {
      "calories": 380,
      "protein": 7,
      "carbs": 60,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Persian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "persian",
      "vegetarian",
      "crispy-rice"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-zereshk-polo",
    "name": "Rice Cooker Zereshk Polo (Barberry Saffron Rice)",
    "description": "Fluffy saffron-perfumed basmati crowned with jewel-like ruby barberries that pop tart-sweet against the golden grains — a Persian feast centerpiece that looks like it took hours but quietly cooks itself in your rice cooker. It's stunning enough for a dinner party and easy enough for a Tuesday in the dorm. Inspired by a viral rice-cooker trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "basmati-rice",
        "quantity": 2
      },
      {
        "ingredientId": "water",
        "quantity": 2.5
      },
      {
        "ingredientId": "saffron",
        "quantity": 0.5
      },
      {
        "ingredientId": "ghee",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5
      },
      {
        "ingredientId": "barberries",
        "quantity": 6
      },
      {
        "ingredientId": "sugar",
        "quantity": 1.5
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "to gently warm the barberries on Keep Warm"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.5,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "pistachios",
        "quantity": 1,
        "optional": true,
        "note": "slivered, for garnish"
      }
    ],
    "steps": [
      "Add 2 cups basmati rice to the cooker pot and rinse under cool water, swirling and pouring off the cloudy water 3-4 times until it runs nearly clear, then drain well. If you have time, cover with fresh water and soak 20-30 min, then drain again — it gives longer, fluffier grains.",
      "Bloom the saffron: crush the 1/2 tsp saffron threads between your fingers into a mug or small bowl, add 3 tablespoons of hot tap water, and let it steep 10 min until you have a deep amber liquid.",
      "To the drained rice in the pot, add 2.5 cups water, the ghee, salt, and HALF of the saffron bloom. Stir once so the saffron streaks through, close the lid, and run the normal White Rice cycle (about 50 min).",
      "While it cooks, rinse the barberries well in a fine strainer (they are sandy) and pat dry. In a small bowl, toss them with the sugar and the remaining saffron bloom until glossy and ruby-red.",
      "When the cycle ends and switches to Keep Warm, scatter the butter and the sugared barberries in an even layer over the top of the rice. Close the lid and let them warm on Keep Warm for 8-10 min — just until plump and barely softened (do not overcook or they turn bitter).",
      "Open the lid and gently fold the saffron rice from the bottom up with a rice paddle to fluff it, keeping a generous scatter of barberries on top for that jewel-box look.",
      "Spoon onto plates, shower with slivered almonds and slivered pistachios if using, and serve hot. Leftovers reheat well with a splash of water on the cooker's reheat or steam setting."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 60,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Saffron is the splurge — a tiny pinch goes a long way, so buy the smallest jar, store it in the dark, and 1/2 tsp colors and flavors the whole pot.",
      "Barberries (zereshk) are cheapest at a Persian or Middle Eastern grocery, where a bag costs a fraction of the spice-aisle price and lasts many batches — keep them in the freezer.",
      "No saffron? A pinch of turmeric gives you the same golden color for pennies; you lose the floral aroma but nobody at the table will complain."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "Plain butter or olive oil — any fat carries the saffron and keeps the grains separate.",
        "savings": "~$0.15"
      },
      {
        "forIngredientId": "barberries",
        "swap": "Dried cranberries, roughly chopped and rinsed (skip the sugar, they are already sweet) for the same tart-sweet ruby pop.",
        "savings": "~$2.50 for the batch"
      },
      {
        "forIngredientId": "saffron",
        "swap": "1/2 tsp turmeric for the golden color at a tiny fraction of the cost.",
        "savings": "~$1.05"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 7,
      "carbs": 64,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🍚",
    "accentColor": "bg-red-100",
    "cuisine": "Persian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "persian",
      "saffron",
      "vegetarian",
      "dinner",
      "festive"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-vietnamese-lemongrass-salmon-rice",
    "name": "Rice Cooker Vietnamese Lemongrass Salmon Rice",
    "description": "Bruised lemongrass perfumes the whole pot while salmon steams to silky, flaky perfection right on top of fragrant jasmine rice, all finished with a bright, punchy nuoc cham you stir together in a bowl. It's restaurant-level fragrant and seriously high-protein for almost zero effort and zero stove. Inspired by @nomadetteats on their blog (https://nomadette.com/vietnamese-rice-cooker-salmon-rice/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs mostly clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "lemongrass",
        "quantity": 2,
        "note": "trimmed and bruised with the side of a knife"
      },
      {
        "ingredientId": "salmon",
        "quantity": 2,
        "note": "skin-on or skinless fillets"
      },
      {
        "ingredientId": "broccoli",
        "quantity": 1.5,
        "note": "cut into bite-size florets"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "to season the salmon (use tamari to keep it gluten-free)"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5,
        "note": "grated, rubbed onto the salmon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "fish-sauce",
        "quantity": 3,
        "note": "base of the nuoc cham"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "juiced, for the nuoc cham"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1.5,
        "note": "dissolved into the nuoc cham"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "finely minced for the nuoc cham"
      },
      {
        "ingredientId": "thai-chili",
        "quantity": 1,
        "note": "thinly sliced, for the nuoc cham",
        "optional": true
      },
      {
        "ingredientId": "carrot",
        "quantity": 0.5,
        "note": "finely shredded into the nuoc cham",
        "optional": true
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "note": "chopped, to garnish",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "thinly sliced, to garnish",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the jasmine rice in the rice cooker pot a couple of times until the water runs mostly clear, drain, then add 1.75 cups of fresh water and level the rice into an even layer.",
      "Bruise the lemongrass stalks by whacking them with the side of a knife or the back of a spoon, then bend or knot each one and tuck it down into the rice and water so it perfumes the pot as it cooks.",
      "Pat the salmon dry, then rub each fillet all over with the grated ginger, soy sauce, and salt, and lay the fillets gently on top of the rice (skin-side up if skin-on) so they steam above the water line.",
      "Scatter the broccoli florets over and around the salmon, close the lid, and start a normal White Rice cycle so the rice cooks while the salmon and broccoli steam above it.",
      "While it cooks, make the nuoc cham in a small bowl: stir the fish sauce, lime juice, sugar, and 3 tablespoons of warm water until the sugar fully dissolves, then stir in the minced garlic, sliced thai chili, and shredded carrot.",
      "When the cycle finishes, leave it on Keep Warm for 5 to 10 minutes so the salmon firms up and the steam settles, then open the lid, check the salmon is opaque and flakes easily, and fish out and discard the spent lemongrass.",
      "Flake the salmon into big pieces, fluff the rice with a fork, and divide the rice, salmon, and broccoli between two bowls.",
      "Garnish with the chopped cilantro and sliced scallion, then spoon the nuoc cham over everything (or serve it on the side for dipping)."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 28,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen salmon is usually a third of the price of fresh and works perfectly here, just thaw it in cold water for about 15 minutes before rubbing on the seasoning.",
      "One stalk of lemongrass goes a long way, so freeze leftover stalks whole in a zip bag to have them ready for the next fragrant rice pot.",
      "Nuoc cham keeps for over a week in a jar in the fridge, so make a double batch now and pour it over everything from rice bowls to fried eggs all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Two servings of frozen shrimp or a couple of tilapia fillets steam just as nicely on top of the rice",
        "savings": "saves about $2.50 per serving"
      },
      {
        "forIngredientId": "broccoli",
        "swap": "Frozen broccoli or any frozen stir-fry veg added straight from the freezer",
        "savings": "saves a little and skips the chopping"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain white rice if that's what's in the cupboard",
        "savings": "no real cost change, just a touch less aromatic"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 41,
      "carbs": 68,
      "fat": 19,
      "fiber": 4
    },
    "emoji": "🐟",
    "accentColor": "bg-emerald-100",
    "cuisine": "Vietnamese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "vietnamese",
      "high-protein",
      "salmon",
      "no-stove"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-hawker-chicken-rice-60g",
    "name": "Rice Cooker Hawker-Style Chicken Rice (60g Protein)",
    "description": "A single-serving nod to the Singapore hawker classic: silky steamed chicken over fragrant ginger-garlic rice with a punchy chilli-soy drizzle, all from one pot. It quietly packs around 60g of protein, so it doubles as a serious post-gym meal-prep dish. Inspired by foongfamilyflat.com (https://foongfamilyflat.com/recipes/rice-cooker-chicken-rice-with-homemade-chilli-recipe).",
    "mealType": "meal-prep",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 2,
        "note": "the protein backbone (~60g protein total); butterfly or halve thick pieces so they cook through"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "rinsed until the water runs clear"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 1,
        "note": "the cooking liquid for flavor"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 2,
        "note": "or an equal amount of grated fresh ginger"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "chicken-bouillon",
        "quantity": 1
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "whites for the rice, greens for garnish"
      },
      {
        "ingredientId": "bok-choy",
        "quantity": 1,
        "note": "halved, steamed in near the end"
      },
      {
        "ingredientId": "chili-garlic-sauce",
        "quantity": 2,
        "optional": true,
        "note": "stand-in for hawker chilli; loosen with a splash of lime if you have it"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 0.5,
        "optional": true,
        "note": "sliced, served on the side"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Butterfly or halve the chicken breasts so no piece is thicker than about an inch (this is what guarantees they cook through in the rice cooker). Rub them all over with the soy sauce and oyster sauce and set aside.",
      "If your cooker has a Cook/Saute setting, turn it on and add the vegetable oil and sesame oil. Once warm, saute the minced garlic, ginger paste, and scallion whites for 2-3 minutes until fragrant but not browned. (No saute setting? Just add these straight to the pot in the next step.)",
      "Add the rinsed jasmine rice, chicken broth, chicken bouillon, salt, and white pepper. Stir once to combine and spread the rice into an even layer.",
      "Lay the seasoned chicken flat on top of the rice in a single layer, then close the lid and run the normal White Rice cycle so the chicken steams while the rice cooks.",
      "When about 8-10 minutes of cook time remain and the rice still looks slightly wet, open the lid, tuck the halved bok-choy around the chicken, and close it to finish on the same cycle.",
      "When the cycle ends, leave the lid shut and rest everything on Keep Warm for 10 minutes. Then check the chicken: it must be opaque all the way through with no pink, reaching 165F / 74C. If any piece is still pink, re-run the cook cycle for a few minutes.",
      "Lift out the chicken and slice it thick, then fluff the rice with a fork or paddle. Plate the rice, fan the chicken on top, and add the bok-choy.",
      "Drizzle with the chili-garlic sauce, scatter scallion greens and cilantro, and serve cucumber slices on the side. Eat now, or cool fully and pack into a meal-prep container for the fridge."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Swap the two chicken breasts for chicken thighs to hit the protein target at a lower price, with juicier, more forgiving meat.",
      "Use the chicken bouillon dissolved in a cup of water in place of boxed broth to save money without losing flavor.",
      "Buy fresh ginger and a whole head of garlic in bulk; they cost pennies per meal and keep for weeks in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-breast",
        "swap": "Use chicken-thighs (2 servings) for richer, more forgiving meat",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain rice works fine if jasmine isn't around",
        "savings": "~$0.03"
      },
      {
        "forIngredientId": "chili-garlic-sauce",
        "swap": "A spoon of sriracha mixed with minced garlic mimics hawker chilli",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 720,
      "protein": 60,
      "carbs": 112,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Singaporean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "high-protein",
      "meal-prep",
      "singaporean",
      "chicken-rice"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-garlic-shrimp-egg-fried-rice",
    "name": "Rice Cooker Garlic Shrimp Egg Fried Rice",
    "description": "All the garlicky, soy-and-sesame magic of takeout fried rice with juicy shrimp and a silky egg folded through — and not a wok in sight. The shrimp and egg steam right on top of the rice while it cooks, so dinner basically makes itself. Inspired by @nomadetteats on TikTok (https://www.tiktok.com/@nomadetteats/video/7320235696508210440).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5
      },
      {
        "ingredientId": "water",
        "quantity": 2.25
      },
      {
        "ingredientId": "shrimp",
        "quantity": 1
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 4
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5
      },
      {
        "ingredientId": "carrot",
        "quantity": 1
      },
      {
        "ingredientId": "frozen-peas",
        "quantity": 0.5
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "chicken-bouillon",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "chili-oil",
        "quantity": 1,
        "optional": true,
        "note": "drizzle to taste"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "sprinkle on top"
      }
    ],
    "steps": [
      "Rinse the jasmine rice in the cooker pot under cold water, swirling until the water runs mostly clear, then drain well. Add 2.25 cups water — slightly less than normal so the grains stay firm and fried-rice-style once the soy sauce goes in.",
      "Stir in the soy sauce, 1 tsp of the sesame oil, the chicken bouillon, sugar and white pepper, then add the minced garlic, diced onion and grated carrot. Mix until the seasoning is dissolved and the veg is spread evenly through the rice.",
      "Scatter the frozen peas over the surface, then lay the shrimp on top in a single layer so they steam evenly while the rice cooks.",
      "Crack the 2 eggs onto the rice, nestling them in the gaps between the shrimp. Close the lid and run a normal White Rice cycle.",
      "When the cycle finishes, keep the lid closed and let it sit on Keep Warm for 10 minutes. This sets the egg whites and steams the shrimp through — they should be fully pink and opaque, with no grey or translucent spots.",
      "Open the lid and break the eggs apart with a spatula, then fold everything together firmly so the egg and shrimp distribute and the rice fluffs up.",
      "Drizzle in the remaining 1 tsp sesame oil and fold once more. Top with sliced scallions, a drizzle of chili oil and a sprinkle of sesame seeds, and serve hot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen shrimp is your friend — buy a bag and use just one serving at a time, thawing it under cold water in about 5 minutes. It's far cheaper than fresh and perfect for steaming on rice.",
      "No separate peas and carrots? A bag of frozen mixed veg is cheaper per cup, and you only thaw what you need so nothing goes soft in the fridge.",
      "A spoon of chicken bouillon plus a pinch of sugar mimics that umami takeout flavor for pennies — no need to buy fancy stock or sauces."
    ],
    "substitutions": [
      {
        "forIngredientId": "shrimp",
        "swap": "Use 1 serving of cubed tofu, laid on top to steam the same way, for a cheaper protein.",
        "savings": "~$1.80 saved"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Any plain long-grain white rice works — use 1.5 cups with the same water.",
        "savings": "saves a few cents"
      },
      {
        "forIngredientId": "chicken-bouillon",
        "swap": "Swap for a pinch of MSG or an extra splash of soy sauce for the savory hit.",
        "savings": "uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 27,
      "carbs": 78,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "🍤",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese-inspired",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "fried-rice",
      "shrimp",
      "high-protein",
      "no-stove"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-miso-salmon-rice",
    "name": "Rice Cooker Miso Salmon Rice",
    "description": "A glossy salmon fillet steam-poaches right on top of miso-seasoned rice, so every grain drinks up the savory-sweet glaze as it cooks — a clean protein-and-carb dinner from one button, no stovetop required. It feels fancy but is honestly almost impossible to mess up. Inspired by @easypeasyjordan on Instagram (https://www.instagram.com/easypeasyjordan/reel/C3B3KuFrlpP/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75,
        "note": "scant — the miso and mirin add liquid too"
      },
      {
        "ingredientId": "salmon",
        "quantity": 2,
        "note": "skin-on fillets, patted very dry"
      },
      {
        "ingredientId": "miso",
        "quantity": 2,
        "note": "white or yellow miso"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "for the glaze"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "grated or finely minced"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced, for garnish",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "toasted, for garnish",
        "optional": true
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "note": "sprinkled on top",
        "optional": true
      },
      {
        "ingredientId": "edamame",
        "quantity": 0.5,
        "note": "shelled, steams alongside",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the jasmine rice right in the cooker pot: cover with water, swirl, and drain 2-3 times until the water runs mostly clear, then drain off all the rinse water.",
      "Add the 1.75 cups fresh water to the drained rice. Stir in the miso, soy sauce, mirin, sesame oil, ginger paste, and grated garlic until the miso fully dissolves and the liquid looks evenly cloudy with no lumps. Smooth the rice into a flat, even layer.",
      "Pat the salmon fillets very dry and lay them skin-side down directly on top of the rice. In a small cup, stir the honey with a splash of the seasoned liquid from the pot, then brush or spoon it evenly over the tops of the fillets. If using edamame, scatter it around the salmon.",
      "Close the lid and run the standard White Rice cycle. The trapped steam poaches the salmon through while the rice cooks underneath and soaks up the glaze that drips down.",
      "When the cycle ends, leave the lid closed and let everything rest on Keep Warm for 10 minutes — the rice finishes steaming and the salmon firms up.",
      "Open the lid and check the salmon: it should flake easily with a fork and be opaque all the way through. If the center still looks translucent, close the lid and give it another 5 minutes on Keep Warm.",
      "Lift the salmon aside, fluff the rice with a paddle or fork, and fold the glaze evenly through every grain. Break the salmon into big chunks back over the rice, scatter with sliced scallion, sesame seeds, and furikake, and serve straight from the pot."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Frozen salmon fillets are usually half the price of fresh and work perfectly here — just thaw fully and pat dry before they go on the rice.",
      "One tub of white miso keeps for months in the fridge and seasons dozens of meals, so that single jar spreads its cost way out over time.",
      "Skip pricey furikake and make your own topping from toasted sesame seeds plus a torn-up sheet of nori you already have."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Use tilapia or cod fillets — they steam-poach the same way for a fraction of the cost",
        "savings": "~$2.50 per serving"
      },
      {
        "forIngredientId": "mirin",
        "swap": "No mirin? Use 1 tbsp rice vinegar plus a pinch of sugar per tablespoon called for",
        "savings": "pennies, and saves a whole bottle purchase"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Any plain white rice works — sushi rice gives an even stickier, restaurant-style bowl",
        "savings": "use what's already in your pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 38,
      "carbs": 72,
      "fat": 18,
      "fiber": 3
    },
    "emoji": "🍣",
    "accentColor": "bg-orange-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "salmon",
      "high-protein",
      "dinner"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-cantonese-sticky-rice",
    "name": "Rice Cooker Cantonese Sticky Rice",
    "description": "Chewy, savory glutinous rice steamed with soy, sesame, and earthy shiitake until every grain is glossy and seasoned — the kind of comfort food that tastes like someone's mom made it just for you. Sweet bites of Chinese sausage and a hit of dried shrimp make it feel special, but it's secretly a dump-and-cook one-pot lo mai fan. Inspired by @easypeasyjordan on Instagram (https://www.instagram.com/easypeasyjordan/reel/C70SrqIp85y/).",
    "mealType": "dinner",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "sweet-rice",
        "quantity": 2,
        "note": "glutinous/sticky rice, rinsed and soaked"
      },
      {
        "ingredientId": "dashi",
        "quantity": 1.5,
        "note": "or water; the cooking liquid (soaked sticky rice needs less)"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "chinese-sausage",
        "quantity": 1,
        "note": "diced; lap cheong (cured, pre-cooked)"
      },
      {
        "ingredientId": "shiitake",
        "quantity": 0.75,
        "note": "diced"
      },
      {
        "ingredientId": "dried-shrimp",
        "quantity": 0.5,
        "note": "rinsed, roughly chopped",
        "optional": true
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
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "whites in the rice, greens for garnish"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "note": "to finish",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "to finish",
        "optional": true
      }
    ],
    "steps": [
      "Rinse 2 cups of sweet (glutinous) rice in the rice cooker's inner pot until the water runs mostly clear, then cover with cool water and soak for at least 30 minutes while you prep — soaking is the secret to even, chewy grains. Drain very well.",
      "While the rice soaks, dice the Chinese sausage, shiitake, and scallion whites; mince the garlic; and rinse and chop the dried shrimp if using.",
      "Optional flavor boost: if your cooker has a Saute or Cook function, set it and add the sesame oil, sausage, shiitake, dried shrimp, garlic, and ginger. Stir 3-4 minutes until fragrant and the sausage releases its fat. No Saute mode? Skip it and add these raw in the next step — everything still cooks through.",
      "Add the drained rice, dashi (or water), soy sauce, oyster sauce, sugar, white pepper, and scallion whites to the pot (plus the raw sesame oil and aromatics if you skipped the saute). Stir so the rice is evenly coated and the liquid sits just level with the rice — soaked glutinous rice needs less liquid than regular rice, so don't add extra.",
      "Close the lid and run the standard White Rice cycle. The cooker steams the glutinous rice into glossy, seasoned, sticky chewiness, fully hands-off.",
      "When the cycle ends, leave the lid closed and let it rest on Keep Warm for 10 minutes so the grains firm up and finish absorbing every drop.",
      "Fluff gently with a wet rice paddle, folding the savory bits up from the bottom. Top with scallion greens, furikake, and sesame seeds, and serve warm."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "One link of Chinese sausage goes a long way — dice it small so every bite gets a little sweet-savory richness without buying a whole pack of meat.",
      "Swap the dashi for plain water plus an extra splash of soy sauce; you'll save money and barely notice the difference once the sausage and mushrooms do their thing.",
      "Dried shrimp and shiitake are pantry MVPs — a tiny amount adds huge umami, and they keep for months, so the cost spreads across many meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "chinese-sausage",
        "swap": "Use 1 oz of diced spam or a chopped hot dog for the same sweet-salty bites.",
        "savings": "~$0.70"
      },
      {
        "forIngredientId": "shiitake",
        "swap": "Any cup of regular diced mushrooms works for that earthy backbone.",
        "savings": "~$3.80"
      },
      {
        "forIngredientId": "dashi",
        "swap": "Plain water plus a chicken bouillon cube keeps it savory for pennies.",
        "savings": "~$1.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 12,
      "carbs": 78,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "sticky-rice",
      "lo-mai-fan",
      "comfort-food",
      "savory"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-chinese-soy-sauce-chicken-veg-pot",
    "name": "Rice Cooker Chinese Soy Sauce Chicken & Vegetable Pot",
    "description": "This is the cozy \"no-water\" magic trick of Chinese home cooking: chicken thighs braise in a glossy soy-ginger sauce while chunks of pumpkin, potato, and carrot melt down and release their own sweet juices. Zero added liquid, zero stovetop, and you end up with tender chicken in a rich natural gravy that begs to be spooned over rice. Inspired by @cookingbomb on Instagram (https://cookingbomb.com/blogs/recipes/5-one-pot-ricer-cooker-meals-even-a-cake).",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "quantity": 4,
        "note": "cut into big bite-size chunks; boneless or bone-in both work"
      },
      {
        "ingredientId": "pumpkin",
        "quantity": 2,
        "note": "peeled and cubed; this is the key juice-maker"
      },
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "peeled, cut into chunks"
      },
      {
        "ingredientId": "carrot",
        "quantity": 2,
        "note": "cut into thick diagonal chunks"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3,
        "note": "savory base"
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 1,
        "note": "for glossy mahogany color"
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 2,
        "note": "deep umami"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "smashed and roughly chopped"
      },
      {
        "ingredientId": "ginger",
        "quantity": 2,
        "note": "ground (or a thumb of fresh, finely sliced)"
      },
      {
        "ingredientId": "rice-wine",
        "quantity": 2,
        "note": "Shaoxing wine for aroma"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "balances the soy"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1,
        "note": "drizzle to finish"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, for garnish",
        "optional": true
      },
      {
        "ingredientId": "rice",
        "quantity": 1.5,
        "note": "cook separately, to serve underneath",
        "optional": true
      }
    ],
    "steps": [
      "In a bowl, toss the chicken chunks with the soy-sauce, dark-soy, oyster-sauce, rice-wine, sugar, ground ginger, white pepper, and chopped garlic until evenly coated. Let it sit 10 minutes while you peel and chop the vegetables (no need to refrigerate).",
      "Scrape the chicken plus all of the marinade into the rice cooker pot and spread it into an even layer. Do NOT add water or broth — the vegetables will release all the liquid you need.",
      "Pile the pumpkin, potato, and carrot on top of the chicken, packing them in snugly. Keep some pumpkin touching the sauce at the bottom so it starts steaming and breaking down first.",
      "Close the lid and run a full White Rice / Cook cycle. As the pot heats, the pumpkin and carrot weep their juices down into the soy mixture and braise the chicken from below.",
      "When the cycle ends, open carefully (watch for steam) and gently stir everything to coat in the glossy sauce. Check doneness: the potato should be fork-soft and the chicken cooked through with no pink and clear juices (165°F / 74°C at the thickest piece).",
      "If the chicken isn't fully cooked or the potato is still firm, close the lid and run a second Cook cycle (or hold on Keep Warm with the lid down for 15 minutes), then check again before serving.",
      "Once everything is tender and the chicken is safely cooked through, stir in the sesame oil. The pumpkin will have half-dissolved into a naturally thick, sweet-savory gravy.",
      "Let it rest on Keep Warm for 5 minutes to settle, then scatter sliced scallions on top and spoon the chicken, veg, and sauce over hot rice."
    ],
    "totalTimeMinutes": 65,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 50,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Chicken thighs are one of the cheapest proteins in the store and stay juicy in the rice cooker — skip breast here, which dries out and costs more.",
      "Buy a whole small kabocha or pie pumpkin and use the rest for soup or to roast later; it's far cheaper per cup than pre-cut squash and it's the secret to the no-water sauce.",
      "Dark soy is mostly for that restaurant-glossy color — one bottle lasts months, so it's basically free per serving once you own it."
    ],
    "substitutions": [
      {
        "forIngredientId": "pumpkin",
        "swap": "Swap pumpkin for butternut squash or sweet potato — any starchy squash weeps its juices and thickens the sauce the same way.",
        "savings": "Use up squash you already have instead of buying special"
      },
      {
        "forIngredientId": "rice-wine",
        "swap": "No Shaoxing wine? Use dry sherry, or skip it and add a small splash of water with a pinch more sugar.",
        "savings": "Saves ~$0.15 and a trip to the store"
      },
      {
        "forIngredientId": "oyster-sauce",
        "swap": "Vegetarian? Use hoisin or a mushroom-based stir-fry sauce for the same sweet-savory depth.",
        "savings": "Often already in the pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 31,
      "carbs": 38,
      "fat": 16,
      "fiber": 5
    },
    "emoji": "🍗",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "no-water",
      "chicken",
      "high-protein"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-sticky-soy-chicken-wings-potatoes-peppers",
    "name": "Rice Cooker Sticky Soy Chicken Wings with Potatoes & Peppers",
    "description": "Saucy sweet-savory wings braise over tender potatoes and sweet peppers, all glossed in a soy-oyster-chili sauce that reduces into a sticky glaze right in the pot. It's the ultimate \"I don't want to turn on the stove\" dinner with just one pot to wash. Inspired by @cookingbomb on Instagram.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-wings",
        "quantity": 12,
        "note": "patted dry"
      },
      {
        "ingredientId": "potato",
        "quantity": 2,
        "note": "cut into 1-inch chunks"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "cut into big squares"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "cut into thick wedges"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "smashed"
      },
      {
        "ingredientId": "hoisin",
        "quantity": 2,
        "note": "stands in for sweet bean paste"
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "dark-soy",
        "quantity": 1,
        "note": "for color"
      },
      {
        "ingredientId": "chili-garlic-sauce",
        "quantity": 2,
        "note": "more or less to taste"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1
      },
      {
        "ingredientId": "ginger",
        "quantity": 1
      },
      {
        "ingredientId": "chinese-5-spice",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 0.5
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
      "In the rice cooker pot (cooker still off), whisk together the hoisin, oyster sauce, soy sauce, dark soy, chili-garlic sauce, brown sugar, ginger, Chinese 5-spice, vegetable oil and water into a glossy sauce, then spread it across the bottom.",
      "Add the potato chunks and smashed garlic and toss to coat. Spread them in a single layer so they sit in the liquid and cook through evenly.",
      "Pile the chicken wings on top of the potatoes and spoon a little sauce over them. The wings will steam-braise while their fat renders down into the sauce below.",
      "Close the lid and run a full White Rice cycle (or use the Cook/Saute button if you have one). Let it run undisturbed.",
      "When the cycle ends, open the lid and gently stir, scooping sauce from the bottom over the wings. Add the onion wedges and bell pepper squares on top, close the lid, and run a second White Rice cycle (or 12-15 minutes on Cook) so the peppers soften but stay slightly crisp.",
      "Open and check the wings: they should be fully cooked with no pink at the bone and the juices running clear (165F / 74C). If any are still pink, run a few extra minutes on Cook before serving.",
      "Toss everything together. The sauce should be thick and sticky and clinging to the wings; if it's still thin, leave the lid open on Keep Warm for 5-10 minutes to reduce, stirring once or twice.",
      "Garnish with sliced scallion and sesame seeds and serve hot straight from the pot, over rice or on its own."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 55,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Wings are one of the cheapest cuts in the meat case — grab a family pack and freeze half for next week's batch.",
      "Potatoes and onion bulk this out for pennies, so a little chicken feeds the whole room. Skip the bell pepper and use a cheaper carrot or extra potato if money's tight.",
      "The sauce is just pantry bottles you buy once and use for months — soy, oyster, hoisin and chili-garlic stretch across dozens of meals."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-wings",
        "swap": "Use chicken-drumsticks for meatier, even cheaper-per-bite pieces — just add a few minutes to the first cycle.",
        "savings": "similar cost, more meat"
      },
      {
        "forIngredientId": "hoisin",
        "swap": "No hoisin? Sub in extra oyster-sauce plus a little extra brown-sugar for that sweet-savory depth.",
        "savings": "~$0.20"
      },
      {
        "forIngredientId": "chili-garlic-sauce",
        "swap": "Swap for sriracha or a spoonful of laoganma chili crisp for heat.",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 28,
      "carbs": 30,
      "fat": 22,
      "fiber": 3
    },
    "emoji": "🍗",
    "accentColor": "bg-red-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "chicken",
      "no-stove"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-beef-zucchini-smothered-rice",
    "name": "Rice Cooker Beef & Zucchini Smothered Rice",
    "description": "Silky cornstarch-velveted beef and sweet zucchini steam right into fluffy jasmine rice for a tender, savory one-bowl dinner that tastes like takeout. Everything cooks in a single cycle, so there's nothing to babysit and almost nothing to wash. Inspired by @cookingbomb on Instagram (https://cookingbomb.com/blogs/recipes/5-one-pot-ricer-cooker-meals-even-a-cake).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs mostly clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "flank-steak",
        "quantity": 8,
        "note": "sliced thin against the grain"
      },
      {
        "ingredientId": "zucchini",
        "quantity": 1,
        "note": "cut into 1/4-inch half-moons"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "cut into thin coins"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "to velvet the beef"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "sliced, for garnish",
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "note": "toasted, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Rinse the jasmine rice in the rice cooker pot until the water runs mostly clear, drain well, then add the fresh water and shake the pot so the rice settles into a flat, even layer.",
      "In a bowl, toss the thin-sliced flank steak with the cornstarch, soy sauce, oyster sauce, sesame oil, minced garlic, ginger paste, sugar, and white pepper until every piece is evenly coated and a little glossy.",
      "Scatter the carrot coins over the rice first (they take the longest to soften), then layer the zucchini half-moons on top so they rest just above the water line.",
      "Spread the marinated beef in a single even layer over the vegetables and pour any leftover marinade from the bowl over the top.",
      "Close the lid and run the normal White Rice cycle. The rice cooks underneath while the steam velvets the beef and steams the carrot and zucchini tender.",
      "When the cycle ends, keep the lid closed and let it sit on Keep Warm for 8 to 10 minutes so the beef finishes cooking through (no longer pink) and the flavors settle into the rice.",
      "Open the lid and gently fold everything together from the bottom up, working the saucy beef and vegetables through the rice.",
      "Spoon into bowls and finish with sliced scallion and a pinch of toasted sesame seeds."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a small piece of flank or sirloin and slice it thin yourself, or grab pre-sliced 'hot pot' beef from an Asian market — it's already paper-thin and often cheaper per pound.",
      "Freeze the beef for 20 minutes before slicing; firmer meat cuts into much thinner, more even strips that velvet beautifully.",
      "Zucchini and carrots are some of the cheapest veg around — swap in whatever is on sale or wilting in your crisper drawer to stretch the meal even further."
    ],
    "substitutions": [
      {
        "forIngredientId": "flank-steak",
        "swap": "Use sirloin-steak or thin-sliced chicken-thighs; both velvet well in the rice cooker (cook chicken fully until no longer pink)",
        "savings": "sirloin saves about $0.15/oz"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain white rice works fine and is the cheapest grain in the catalog",
        "savings": "saves about $0.03 per cup"
      },
      {
        "forIngredientId": "oyster-sauce",
        "swap": "Hoisin, or extra soy sauce plus a pinch of sugar, gives a similar savory-sweet glaze",
        "savings": "use what's already in your fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 34,
      "carbs": 62,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🥩",
    "accentColor": "bg-green-100",
    "cuisine": "Chinese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "chinese",
      "beef",
      "high-protein"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-takikomi-gohan",
    "name": "Rice Cooker Takikomi Gohan",
    "description": "The OG dump-it-all dinner: short-grain rice slow-drinks dashi, soy, sake and mirin while chicken, carrot and mushrooms cook right on top, so every fluffy grain tastes like a restaurant pilaf with zero technique. One pot, one button, and dinner basically makes itself. Inspired by @justonecookbook on their blog (https://www.justonecookbook.com/takikomi-gohan/).",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 2,
        "note": "short-grain; rinse until the water runs mostly clear"
      },
      {
        "ingredientId": "dashi",
        "quantity": 2,
        "note": "use as your cooking liquid in place of plain water"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sake",
        "quantity": 2
      },
      {
        "ingredientId": "mirin",
        "quantity": 1.5
      },
      {
        "ingredientId": "chicken-thighs",
        "quantity": 2,
        "note": "cut into small 1/2-inch bite-size pieces so they cook through"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "peeled and cut into thin matchsticks"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "shiitake",
        "quantity": 1,
        "optional": true,
        "note": "swap for some of the mushrooms for deeper umami"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "to sprinkle on top"
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "optional": true,
        "note": "finishing sprinkle"
      }
    ],
    "steps": [
      "Rinse the sushi rice in the inner pot under cold water, swirling and draining 2-3 times until the water runs mostly clear, then drain well. This keeps the finished rice fluffy instead of gummy.",
      "Add the dashi, soy sauce, sake, mirin and salt straight into the pot with the drained rice. Stir gently just to combine, then spread the rice into a flat, even layer.",
      "Scatter the carrot matchsticks and sliced mushrooms (and shiitake, if using) evenly over the rice. Do NOT stir them in — keeping them layered on top lets the rice cook evenly underneath.",
      "Lay the bite-size chicken pieces on top of the vegetables in a single, even, loose layer (not piled) so they steam through and release flavor down into the rice.",
      "Close the lid and run the normal White Rice cycle. The cooker brings the seasoned dashi to a boil, simmers the rice, and steams the chicken and veg all in one shot — no stirring, no peeking.",
      "When the cycle finishes, leave the lid closed and let it rest on Keep Warm for 10 minutes so the moisture redistributes and the chicken finishes cooking through.",
      "Open the lid and check a thick piece of chicken — it should be opaque all the way through with no pink. If any pieces look underdone, close the lid and rest on Keep Warm 5 more minutes.",
      "Fold everything together gently with a rice paddle or fork, lifting from the bottom so the chicken and veg mix evenly through the rice. Scoop into bowls and finish with sliced scallion, sesame seeds and furikake if you have them. Serve hot."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "No dashi on hand? A cheap dashi packet steeped in 2 cups hot water (or a teaspoon of dashi powder) does the same job for pennies and stores forever.",
      "Chicken thighs are the budget MVP here — cheaper than breast, way more forgiving, and they stay juicy through a full rice cycle.",
      "Use whatever firm veg is dying in your fridge: leftover carrot, half an onion, a few mushrooms. Takikomi gohan is designed to clean out the crisper drawer."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-thighs",
        "swap": "Use tofu (pressed and cubed) for a vegetarian version — it soaks up the dashi beautifully",
        "savings": "saves about $0.30/serving"
      },
      {
        "forIngredientId": "sake",
        "swap": "No sake? Use an extra tablespoon of mirin plus a splash of water, or a splash of rice vinegar in a pinch",
        "savings": "skip a liquor-store run"
      },
      {
        "forIngredientId": "sushi-rice",
        "swap": "Any short- or medium-grain white rice works; plain 'rice' is the cheapest swap",
        "savings": "saves about $0.10/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 19,
      "carbs": 56,
      "fat": 6,
      "fiber": 2
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "dinner",
      "dump-and-go",
      "umami",
      "meal-prep"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-butter-shoyu-corn-rice",
    "name": "Rice Cooker Butter Shoyu Corn Rice (Tomorokoshi Gohan)",
    "description": "Sweet summer corn steamed right into fluffy Japanese rice, then finished with a knob of melting butter and a splash of soy sauce for that addictive salty-sweet umami hit. Tossing the bare cobs on top is the secret — they leak corny sweetness into every grain as the rice cooks. Inspired by @justonecookbook (https://www.justonecookbook.com/japanese-corn-rice/).",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 2
      },
      {
        "ingredientId": "water",
        "quantity": 2
      },
      {
        "ingredientId": "sake",
        "quantity": 2
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "mirin",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "corn",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "furikake",
        "quantity": 1,
        "optional": true,
        "note": "sprinkle on top to serve"
      }
    ],
    "steps": [
      "Put 2 cups sushi rice in the cooker bowl and rinse: swirl with cool water, pour it off, and repeat 2-3 times until the water runs mostly clear. Drain well.",
      "Stand each ear of corn upright in the bowl (or on a cutting board) and slice the kernels off with a knife. Keep the bare, stripped cobs — they're the flavor trick.",
      "Add 2 cups water, 2 tbsp sake, 2 tbsp soy sauce, 1 tbsp mirin, and 1/2 tsp salt to the drained rice. Stir gently just once to dissolve the seasonings and level the rice, then stop — over-stirring makes it gummy.",
      "Scatter the corn kernels evenly over the top and lay the bare cobs on top of everything. Do NOT stir again — keeping the corn on top lets the rice steam properly underneath.",
      "Close the lid and run the normal White Rice cycle. Let it finish all the way through without peeking.",
      "When it's done, lift out and discard the cobs. Drop in 2 tbsp butter and 1/4 tsp pepper, then fluff and fold with a rice paddle so the butter melts through and coats every grain.",
      "Close the lid and let it rest on Keep Warm for 5 minutes to settle and steam.",
      "Scoop into bowls and finish with sliced scallions and a shake of furikake if you've got them."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Fresh corn is cheapest and sweetest in summer — buy a few ears on sale and freeze stripped kernels for off-season batches.",
      "No sake or mirin? A pinch of sugar plus a splash more water does the salty-sweet job for pennies.",
      "Save the scraped cobs in the freezer; they make a free, naturally sweet broth base for your next soup or pot of rice."
    ],
    "substitutions": [
      {
        "forIngredientId": "corn",
        "swap": "Use about 1.5 cups frozen-corn straight from the bag — no thawing needed, just scatter it on top.",
        "savings": "Often cheaper per kernel and available year-round"
      },
      {
        "forIngredientId": "sushi-rice",
        "swap": "Any short- or medium-grain white rice (or jasmine-rice in a pinch) works fine.",
        "savings": "Saves about $0.10 per cup"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "Swap in tamari plus gluten-free sake/mirin to make the whole dish gluten-free.",
        "savings": "Same price, opens it up to GF diners"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 6,
      "carbs": 60,
      "fat": 7,
      "fiber": 3
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "vegetarian",
      "comfort-food",
      "summer"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-satsumaimo-gohan",
    "name": "Rice Cooker Satsumaimo Gohan (Sweet Potato Rice)",
    "description": "Cozy fall comfort in a single pot: buttery-soft sweet potato chunks steam right into lightly salted, sake-kissed Japanese short-grain rice, then get finished with toasted black sesame and scallion. It is naturally sweet, totally vegan, and tastes like far more effort than it takes. Inspired by @okonomikitchen on their blog (https://www.okonomikitchen.com/japanese-sweet-potato-rice/).",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sushi-rice",
        "quantity": 2,
        "note": "Japanese short-grain rice; rinse until the water runs almost clear"
      },
      {
        "ingredientId": "sweet-potato",
        "quantity": 1,
        "note": "1 medium-large (~12 oz), skin-on or peeled, cut into 3/4-inch cubes"
      },
      {
        "ingredientId": "sake",
        "quantity": 2,
        "note": "adds gentle depth; the alcohol cooks off during the cycle"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "fine sea salt or kosher salt"
      },
      {
        "ingredientId": "maple-syrup",
        "quantity": 1,
        "note": "rounds out the sweetness; optional",
        "optional": true
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "or fill to the 2-cup white-rice line on your inner pot"
      },
      {
        "ingredientId": "black-sesame",
        "quantity": 1,
        "note": "toasted, for garnish",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "thinly sliced, for garnish",
        "optional": true
      },
      {
        "ingredientId": "furikake",
        "quantity": 2,
        "note": "optional finishing sprinkle",
        "optional": true
      }
    ],
    "steps": [
      "Add the 2 cups of sushi rice to the rice-cooker bowl. Rinse by covering with cold water, swirling, and draining 2 to 3 times until the water runs almost clear, then drain well so your water measurement stays accurate.",
      "Add 2 cups of water (or fill to the 2-cup white-rice line on your inner pot). Stir in the salt, sake, and maple syrup until dissolved, then let the rice soak undisturbed for 20 to 30 minutes for fluffy, even grains.",
      "While the rice soaks, scrub (or peel) the sweet potato and cut it into 3/4-inch cubes. Soak the cubes in cold water for 5 minutes, then drain to keep them from browning and to rinse off excess starch.",
      "Scatter the drained sweet potato cubes evenly over the top of the rice. Do NOT stir them in: they should rest on top so they steam evenly instead of scorching on the bottom.",
      "Close the lid and run the normal White Rice cycle. Let the cooker do all the work; do not lift the lid or stir while it cooks.",
      "When the cycle ends, keep the lid closed and let it sit on Keep Warm for 10 minutes so the residual steam finishes the potatoes and the rice firms up.",
      "Open the lid and gently fold from the bottom up with a rice paddle, breaking up some of the sweet potato so it melts into the rice while leaving some cubes whole. Be gentle so the grains stay fluffy.",
      "Scoop into bowls and finish with toasted black sesame, sliced scallion, and a little furikake if you have it. Serve warm."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Sweet potatoes are cheapest in fall and keep for weeks in a cool, dark cupboard, so buy a few and make this on repeat.",
      "Leave the skin on the sweet potato; it is free fiber and saves you peeling time and waste.",
      "No sake? Skip it entirely or use a splash of water with a pinch of sugar. The rice is delicious plain-salted too."
    ],
    "substitutions": [
      {
        "forIngredientId": "sushi-rice",
        "swap": "Use plain short-grain rice or even jasmine rice; the texture is slightly different but still great.",
        "savings": "~$0.10/cup cheaper with regular rice"
      },
      {
        "forIngredientId": "sake",
        "swap": "Swap in mirin or rice wine, or just leave it out and add an extra pinch of salt.",
        "savings": "saves ~$0.48 if omitted"
      },
      {
        "forIngredientId": "maple-syrup",
        "swap": "Use a teaspoon of sugar or honey, or skip it since the sweet potato is already sweet.",
        "savings": "saves ~$0.38 if omitted"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 5,
      "carbs": 64,
      "fat": 1,
      "fiber": 4
    },
    "emoji": "🍠",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "vegan",
      "japanese",
      "fall",
      "takikomi",
      "viral"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-banana-chocolate-cake",
    "name": "Rice Cooker Banana Chocolate Cake",
    "description": "A fudgy, fork-tender chocolate cake born from mashed ripe bananas and cocoa batter, steam-baked into a soft, moist crumb using nothing but your rice cooker's cook button. It's the no-oven dessert that proves your dorm setup can absolutely bake. Inspired by a viral rice-cooker baking trend on Reddit.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 3,
        "note": "very ripe and spotty, mashed"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "all-purpose"
      },
      {
        "ingredientId": "cocoa-powder",
        "quantity": 4,
        "note": "unsweetened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "granulated"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "or melted butter"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 3,
        "note": "to grease the bowl"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 4,
        "note": "fold in and sprinkle on top",
        "optional": true
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "note": "chopped, for crunch",
        "optional": true
      }
    ],
    "steps": [
      "Peel the bananas into a large bowl and mash them with a fork until mostly smooth (a few small lumps are fine). Whisk in the eggs, oil, milk, sugar, and vanilla until the batter looks glossy.",
      "In a second bowl, stir together the flour, cocoa powder, baking powder, baking soda, and salt until the cocoa is evenly blended and lump-free.",
      "Pour the dry mix into the wet banana mix and stir just until no dry flour streaks remain (a few lumps are okay; don't overmix or the cake turns dense). Fold in the chocolate chips and walnuts now if using.",
      "Make sure the rice cooker bowl is completely dry, then coat the bottom and sides well with cooking spray so the cake releases cleanly. Pour in the batter and tap the bowl on the counter a few times to level it and pop large air bubbles.",
      "Set the bowl in the cooker, close the lid, and press the regular Cook / White Rice cycle. Let it run fully without lifting the lid — the trapped steam is what bakes the cake.",
      "When the cooker clicks over to Keep Warm, poke the center with a toothpick. If it comes out with wet batter, press Cook again and run another cycle (most cookers need about 1.5 to 2 cycles total) until the toothpick comes out with just a few moist crumbs.",
      "Leave the cake on Keep Warm for 10 minutes to finish setting, then unplug and let it rest 5 more minutes. Run a thin spatula around the edge, place a plate over the bowl, and invert so the cake drops out.",
      "Sprinkle a few extra chocolate chips over the warm top so they melt slightly, slice into 6 wedges, and serve."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 60,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Grab the brown, spotty bananas off the discount rack — they're cheaper, sweeter, and mash into the best cake.",
      "Skip the chocolate chips and walnuts if money's tight; the cocoa-banana base is already plenty rich on its own.",
      "One batch makes six servings, so split it with roommates or wrap wedges in foil for a cheap snack all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use any almond, oat, or soy milk you already have in the fridge",
        "savings": "no extra trip to the store"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Swap in melted butter for a richer, more buttery crumb",
        "savings": "uses pantry butter you likely have"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "Chop up a chocolate bar or swirl in chocolate syrup instead",
        "savings": "about $0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 6,
      "carbs": 48,
      "fat": 13,
      "fiber": 4
    },
    "emoji": "🍌",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "dessert",
      "no-oven",
      "chocolate",
      "banana"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-one-bowl-banana-bread",
    "name": "Rice Cooker One-Bowl Banana Bread",
    "description": "Tender, melt-in-your-mouth banana bread with zero dry edges, made entirely in your rice cooker's steamy pot so it stays gloriously moist for days. One bowl, one cycle, soft warm-spiced crumb without ever touching an oven. Inspired by @andy_cooks on TikTok (https://www.andy-cooks.com/blogs/recipes/rice-cooker-banana-bread).",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 3,
        "note": "very ripe and spotty"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "or melted butter"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 6
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5
      },
      {
        "ingredientId": "oats",
        "quantity": 0.5,
        "note": "rolled oats, for body"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 4,
        "note": "to grease the pot"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "optional": true,
        "note": "chopped, for crunch"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 0.5,
        "optional": true,
        "note": "fold in for a banana-choc loaf"
      }
    ],
    "steps": [
      "Lift out the rice cooker's inner pot and coat the bottom and sides well with cooking spray so the loaf releases cleanly later. Set the greased pot aside.",
      "Peel the bananas into a mixing bowl and mash with a fork until mostly smooth; a few small lumps are fine and keep the crumb moist.",
      "Add the eggs, milk, oil, brown sugar and vanilla to the bananas and whisk until glossy and combined.",
      "Add the flour, oats, cinnamon, baking powder, baking soda and salt. Stir gently just until no dry flour remains, then fold in the optional walnuts or chocolate chips. Do not overmix or the loaf turns dense.",
      "Scrape the batter into the greased pot and spread it level. Wipe any batter off the rim so it doesn't scorch.",
      "Lock the pot back in, close the lid, and run one standard White Rice cycle. The trapped steam and bottom heat cook the loaf from the edges in.",
      "When it switches to Keep Warm, leave the lid closed and rest 10 minutes so the center finishes in the residual heat, then test the middle with a toothpick — it should come out with just a few moist crumbs. If it's still wet batter, run a second short cycle (or 10 more minutes on Keep Warm, lid down) and re-check.",
      "Run a spatula around the edge, invert the pot onto a plate so the loaf slides out, cool 5 minutes, then slice into 6 wedges and enjoy warm."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 65,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Grab the brown, speckled 'too ripe' bananas from the discount produce bin — they're often half price and are exactly what you want for sweet, moist banana bread.",
      "Skip buying a loaf pan; the rice cooker pot is your baking vessel, so this costs nothing in extra equipment.",
      "No oat flour or fancy add-ins needed — plain rolled oats and all-purpose flour do all the work for pennies a slice."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Use 4 tbsp melted butter for a richer, bakery-style flavor.",
        "savings": "Costs a bit more but adds depth"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Swap in white sugar 1:1 if that's all you have, plus an extra pinch of cinnamon for warmth.",
        "savings": "White sugar is usually cheaper"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any milk works — oat or almond milk keeps it dairy-light.",
        "savings": "Use whatever's already open in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 6,
      "carbs": 45,
      "fat": 10,
      "fiber": 3
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "american",
      "snack",
      "baking",
      "banana"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-fudgy-brownies",
    "name": "Rice Cooker Fudgy Brownies",
    "description": "Dense, gooey, chocolate-packed brownies with a glossy crackly top and an almost truffle-soft center, made entirely in a rice cooker with no oven in sight. The trapped steam inside the pot keeps the crumb extra fudgy in a way a dry oven struggles to match, so every square stays rich and moist. Inspired by a viral rice-cooker baking trend on TikTok.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "melted, plus a little extra for greasing"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "white granulated (about 3/4 cup)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "note": "packed, for deeper fudgier flavor (about 1/4 cup)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "flour",
        "quantity": 0.75,
        "note": "all-purpose"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 6,
        "note": "unsweetened cocoa powder"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "to grease the pot"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 0.5,
        "note": "folded in for melty pockets",
        "optional": true
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "note": "chopped, for crunch",
        "optional": true
      }
    ],
    "steps": [
      "Grease the rice cooker pot well with cooking spray (or a smear of butter) across the bottom and about an inch up the sides so the brownies lift out clean. Set the 8 tbsp butter in the warm pot for a minute or two on Keep Warm to melt it, then pour the melted butter into a mixing bowl.",
      "Whisk the melted butter with the white sugar and brown sugar until glossy, then beat in the eggs and vanilla hard for a full minute. This vigorous whisking is what gives you the shiny, crackly brownie top.",
      "Add the flour, cocoa, baking powder, and salt and fold just until no dry streaks remain. Don't overmix; a thick, glossy batter means fudgy squares. Fold in the chocolate chips and walnuts now if using.",
      "Scrape the batter into the greased pot and smooth the top flat. Tap the pot gently on the counter a couple of times to knock out big air bubbles.",
      "Close the lid and run a normal Cook / White Rice cycle. When it clicks to Keep Warm, leave the lid shut for 10 minutes, then start a second Cook cycle (roughly 40 minutes of cooking total).",
      "Check doneness with a toothpick in the center: you want moist crumbs clinging to it, not raw wet batter and not totally clean. If it's still gooey-wet, run one more Cook cycle and check again every 8-10 minutes until set.",
      "Once set, unplug and let the pot sit covered for 15 minutes so the brownies finish firming up; they're delicate while hot. Run a spatula around the edge, invert onto a plate, peel the pot away, then flip back over and cut into 6 squares."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Cocoa powder is the cheapest path to deep chocolate flavor, so lean on it and skip the chocolate chips if money is tight.",
      "Buy butter in a full box and keep the sticks in the freezer; portioning a few tablespoons at a time costs a fraction of single-serve baking blocks.",
      "Skip the optional walnuts and chocolate chips and the whole pan still comes in around two dollars, which is pennies per gooey square split six ways."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use vegetable-oil 1:1 by volume for an even fudgier, dairy-free crumb",
        "savings": "Saves about $1.10 per batch"
      },
      {
        "forIngredientId": "chocolate-chips",
        "swap": "Chop a chocolate bar or fold in a spoonful of nutella for the same melty pockets",
        "savings": "Skip entirely to save about $0.25"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Swap in cheaper peanuts, or leave them out altogether",
        "savings": "Saves about $0.40"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 4,
      "carbs": 38,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "american",
      "dessert",
      "no-oven",
      "chocolate",
      "snack"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-japanese-milk-bread",
    "name": "Rice Cooker Japanese Milk Bread Loaf",
    "description": "Pillowy, faintly sweet Japanese milk bread that pulls apart in soft, cloud-like tufts, with a tender golden crust and zero oven required. Your rice cooker does the proofing and the baking, so it's a genuine dorm-room miracle. Inspired by @okonomikitchen (https://www.okonomikitchen.com/rice-cooker-bread/).",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "all-purpose; bread flour gives a chewier crumb if you have it"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "warm, not hot, so it wakes the yeast without killing it"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 3
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "softened, worked in at the end"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "crack and beat first; reserve about a teaspoon for the egg wash, the rest goes in the dough"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "optional, for a touch more sweetness"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 2,
        "note": "to grease the inner pot"
      }
    ],
    "steps": [
      "Beat the egg in a small cup and set aside about 1 teaspoon for the wash later. Warm the milk until just pleasantly warm to the touch (never hot). In the rice cooker pot, stir together the warm milk, sugar, and yeast and let sit 5 minutes until foamy, then whisk in the larger portion of beaten egg and the honey if using.",
      "Add the flour and salt. Mix, then knead right in the pot for 8 to 10 minutes until you have a smooth, slightly tacky dough. Work the softened butter in a little at a time until fully absorbed and the dough feels springy and elastic.",
      "Lightly spray the inner pot, shape the dough into a ball inside, and cover with the lid. Press Keep Warm for just 1 to 2 minutes, then turn the cooker OFF: the gentle residual heat is the proofing box. Let rise 45 to 60 minutes until doubled in size.",
      "Punch the dough down to release the air, divide into 3 or 4 even balls, and nestle them side by side in the greased pot so they bake together into a pull-apart loaf. Cover and proof again on the warm-but-off cooker for 25 to 30 minutes until visibly puffy.",
      "Brush the tops with the reserved beaten egg for color. Run a standard White Rice / Cook cycle; when it clicks to Keep Warm, let it rest 10 minutes, then run a second Cook cycle (about 30 minutes of cooking in total).",
      "Using a spatula, carefully flip the loaf over in the pot so the pale top now faces the heat, and run one more Cook cycle (or about 10 to 12 minutes) until both sides are golden and the bread sounds hollow when tapped on the bottom.",
      "Tip the loaf onto a plate and cool 10 to 15 minutes (it firms up and gets fluffier as it cools), then tear, share, and enjoy warm."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 55,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Flour, milk, sugar, yeast, and a pat of butter cost just a couple dollars for a whole loaf, far cheaper than $5+ shokupan at an Asian bakery.",
      "No thermometer needed: warm the milk to just barely above body temp (pleasantly warm, never hot) so you don't kill the yeast and waste a packet.",
      "One egg does double duty: most goes in the dough and you save a teaspoon for the wash, so nothing is thrown away."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use regular milk, or water plus an extra teaspoon of sugar; the crumb is slightly less rich but still soft.",
        "savings": "~$0.25"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap in vegetable oil or plant butter for the same tender result.",
        "savings": "a few cents"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Active dry yeast works too, just bloom it in the warm milk for 10 minutes first.",
        "savings": "about even"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 7,
      "carbs": 42,
      "fat": 5,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "bread",
      "baking",
      "snack",
      "vegetarian",
      "no-oven"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-upside-down-caramel-apple-cake",
    "name": "Rice Cooker Upside-Down Caramel Apple Cake",
    "description": "A tender vanilla-cinnamon cake hides a secret: a glossy crown of honey-butter apple slices that caramelize in the bottom of the pot and flip out looking like it came from a fancy bakery. It's warm, gooey, and shockingly easy for a dorm with nothing but a rice cooker. Inspired by a viral rice-cooker baking trend on TikTok.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "apple",
        "quantity": 2,
        "note": "peeled and thinly sliced for the top layer"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "1 tbsp to grease the pot, 2 tbsp for the caramel layer"
      },
      {
        "ingredientId": "honey",
        "quantity": 3,
        "note": "melted into the caramel glaze"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2,
        "note": "stirred into the caramel layer"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5
      },
      {
        "ingredientId": "sugar",
        "quantity": 8
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 3
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "optional": true,
        "note": "extra insurance so the cake releases cleanly"
      },
      {
        "ingredientId": "caramel-sauce",
        "quantity": 3,
        "optional": true,
        "note": "drizzle over the flipped cake to serve"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "optional": true,
        "note": "scatter over the apples for crunch"
      }
    ],
    "steps": [
      "Rub 1 tbsp soft butter all over the bottom and lower sides of the rice cooker pot, then add a spritz of cooking spray if you have it. This greasing is what lets the cake flip out cleanly later.",
      "Set the cooker to Cook (or Saute) and melt the remaining 2 tbsp butter, about 1 minute. Stir in the honey and brown sugar until it looks like loose, glossy caramel, then switch the cooker off and let the caramel settle and coat the bottom.",
      "Lay the thin apple slices in a neat overlapping circle directly on the caramel, then scatter the optional walnuts between them. This layer becomes the top of your finished cake, so take a few seconds to make it look pretty.",
      "In a bowl, whisk the eggs, sugar, oil, milk and vanilla until smooth. Add the flour, baking powder, cinnamon and salt and stir just until no dry streaks remain. Stop as soon as it comes together so the cake stays tender.",
      "Gently pour the batter over the apples and smooth the top so it covers them evenly. Close the lid and run the Cake setting. If your cooker only has White Rice, run a full cycle, then press Cook again to start a second cycle, for roughly 40-45 minutes of total baking.",
      "When the cycle ends, keep the lid closed on Keep Warm for 10 minutes, then poke the center with a toothpick. If it comes out with wet batter, run one more short Cook cycle and re-test until the toothpick is clean or has just a few moist crumbs.",
      "Let the cake rest 5 minutes, run a butter knife around the edge, set a plate over the pot, and flip it upside down so the glossy apple top lands face-up. Lift off the pot, drizzle with the optional caramel sauce, and serve warm."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 50,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Grab the bruised, on-sale apples from the discount bin — they cook down soft and sweet, so cosmetic dents disappear once they're glazed.",
      "Skip the bottled caramel sauce; the honey, butter and brown sugar layer makes its own glaze, so treat the bottled stuff as a totally optional splurge.",
      "Buy one big bag each of all-purpose flour and sugar — at pennies per cup they're the cheapest part of this dessert and cover dozens of future bakes."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "Use maple syrup, or extra brown sugar loosened with a splash of water, for the glaze.",
        "savings": "Saves about $0.30 if you already have syrup or sugar on hand"
      },
      {
        "forIngredientId": "apple",
        "swap": "Swap in thin pear slices for an equally pretty, slightly floral upside-down top.",
        "savings": "Roughly the same cost, and uses up fruit you already have"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any milk works — oat, almond or soy keep it dairy-light.",
        "savings": "Use whatever's already in your mini-fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 4,
      "carbs": 46,
      "fat": 11,
      "fiber": 2
    },
    "emoji": "🍎",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "dessert",
      "no-oven",
      "vegetarian"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-tres-leches-cake",
    "name": "Rice Cooker Tres Leches Cake",
    "description": "A pillowy rice-cooker sponge that drinks up a bath of three milks until every bite is soft, cool, and just-sweet-enough — the kind of dessert that makes a dorm kitchen feel fancy. No oven, no stovetop, just a little patience while it soaks and chills. Inspired by a viral rice-cooker baking trend on TikTok.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 12
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.33
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.5
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "optional": true,
        "note": "for sweetening the whipped cream topping"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "optional": true,
        "note": "dusted over the top before serving"
      },
      {
        "ingredientId": "strawberries",
        "quantity": 1,
        "optional": true,
        "note": "sliced, to garnish each piece"
      }
    ],
    "steps": [
      "Crack the 4 eggs into a large bowl and beat hard with a fork or whisk for 2-3 minutes until pale, frothy, and almost doubled in volume — this is your only lift, so don't rush it. Whisk in the white sugar and the vanilla until smooth.",
      "Drop the butter into the rice cooker pot and melt it on the Cook/Saute setting (about 1 minute), then pour the melted butter into the egg mixture and whisk it in. Wipe the pot clean and dry, then mist it well with cooking spray, including up the sides, so the cake releases cleanly.",
      "In a separate bowl, stir together the flour, baking powder, and salt. Gently fold this into the egg mixture along with the whole milk, folding just until you have a smooth, lump-free batter — stop as soon as it comes together so it stays airy.",
      "Pour the batter into the greased pot and close the lid. Run the Cake setting if your cooker has one, or a normal White Rice cycle. When it clicks to Keep Warm, leave the lid shut for 10 more minutes, then open and test the center with a toothpick. If it comes out wet, run a second cycle and test again until the toothpick comes out clean.",
      "Loosen the edges with a silicone spatula, flip the pot onto a plate to release the sponge, and let it cool 15-20 minutes. Poke holes all over the top about every half inch with a fork or skewer so the milk has somewhere to soak in.",
      "In a bowl, whisk together the whole can of evaporated milk, the whole can of sweetened condensed milk, and 1/2 cup of the heavy cream. Slowly spoon this three-milk mixture over the cooled cake, pausing between pours to let each one soak in — it will look like far too much liquid, but the sponge drinks it up.",
      "Cover the cake and chill in the fridge for at least 3 hours (overnight is best) so the milks fully soak through and the cake turns cold and custardy.",
      "Just before serving, whip the remaining 1 cup of heavy cream (with the powdered sugar, if using) by hand or with a frother until soft peaks form. Spread it over the top, dust with the cinnamon, and finish each slice with sliced strawberries."
    ],
    "totalTimeMinutes": 230,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Evaporated and sweetened condensed milk are the splurge here, but a can of each stretches across all 8 servings — split a multipack with a roommate and the per-slice cost drops fast.",
      "No mixer needed: a fork and 3 minutes of arm work whips the eggs enough. Skip the electric whisk and just go hard by hand.",
      "Don't buy a tub of whipped topping. One cup of heavy cream beaten by hand makes plenty of topping for half the price, and it tastes far better."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Chill a can of coconut-cream overnight and scoop the firm top to whip — makes the topping dairy-free.",
        "savings": "about $0.30 per batch"
      },
      {
        "forIngredientId": "strawberries",
        "swap": "Top with frozen-berries thawed and drained, or any fruit on sale — blueberries and peaches both work beautifully.",
        "savings": "up to $0.50"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk works in the batter — almond-milk or oat-milk fold in just as well.",
        "savings": "a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 8,
      "carbs": 42,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Latin American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "dessert",
      "no-oven",
      "latin-american",
      "make-ahead"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-veggie-cheese-frittata",
    "name": "Rice Cooker Dump-and-Go Veggie Cheese Frittata",
    "description": "Whisk, dump, and press cook your way to a fluffy, custardy, protein-packed frittata loaded with peppers, spinach, and gooey melted cheese, with zero pans to scrub and not a minute spent at the stove. It steam-bakes tender in the rice cooker while you get ready for class and reheats beautifully all week. Inspired by Southern Home Express (https://southernhomeexpress.com/rice-cooker-frittata/).",
    "mealType": "breakfast",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 8
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "for a creamier, fluffier set"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "diced small; any color"
      },
      {
        "ingredientId": "frozen-spinach",
        "quantity": 0.5,
        "note": "no need to thaw, just break it up"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced"
      },
      {
        "ingredientId": "cheese",
        "quantity": 0.5,
        "note": "shredded cheddar; half folded in, half on top"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 0.25,
        "note": "for a stretchy melt on top"
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
        "ingredientId": "italian-seasoning",
        "quantity": 0.5
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "to grease the pot"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 0.5,
        "optional": true,
        "note": "sliced, for extra veggies"
      },
      {
        "ingredientId": "tomato",
        "quantity": 1,
        "optional": true,
        "note": "diced, stirred in or on top"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 1,
        "optional": true,
        "note": "grated over the top to finish"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 2,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Rub the butter all over the bottom and partway up the sides of the rice cooker pot so the frittata won't stick. This is your only greasing step, no stovetop needed.",
      "Crack the eggs into a bowl, add the milk, salt, pepper, garlic-powder, and italian-seasoning, and whisk hard for about 30 seconds until smooth and slightly frothy.",
      "Stir the diced bell-pepper, frozen spinach (broken into clumps, no thawing), sliced scallion, the mushroom and tomato if using, and half of the shredded cheddar into the egg mixture until evenly distributed.",
      "Pour the mixture into the greased pot and scatter the remaining cheddar and all the mozzarella across the top.",
      "Close the lid and press the normal White Rice / Cook cycle. Let it run undisturbed for about 15 minutes; the cooker gently steam-bakes the eggs from the bottom up.",
      "At 15 minutes, lift the lid and check the center: if it still looks wet or jiggles like liquid, run a second Cook cycle or hold on Keep Warm with the lid closed for 5 to 10 more minutes, until the top is set and springs back when lightly touched.",
      "Switch to Keep Warm and rest 5 minutes so the frittata firms up and pulls from the sides. Run a silicone spatula around the edge, then slide or invert it onto a plate. Finish with grated parmesan and a few dashes of hot sauce, slice into wedges, and serve."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 22,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Eggs are the cheapest high-protein staple in the store, and a frittata stretches a half-dozen into a few filling meals, so buy the big carton when it's on sale.",
      "Use whatever wilting veggies are in your fridge or a handful of frozen mixed veg instead of buying fresh; the rice cooker doesn't care, and it cuts waste to zero.",
      "Make the full batch and refrigerate the wedges; a 60-second microwave the next morning beats paying $5 for a campus breakfast sandwich."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use heavy-cream for an even richer, custardier frittata, or skip the dairy entirely; the eggs still set fine.",
        "savings": "Skipping the dairy saves about $0.07 a batch"
      },
      {
        "forIngredientId": "frozen-spinach",
        "swap": "Swap in frozen-veg, frozen-broccoli, or fresh chopped kale you need to use up.",
        "savings": "frozen-veg runs about $0.62/cup vs pricier fresh greens"
      },
      {
        "forIngredientId": "cheese",
        "swap": "Any melty cheese works: try mozzarella, pepper-jack, or a couple of american-singles torn up.",
        "savings": "american-singles can run cheaper per slice than block cheddar"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 22,
      "carbs": 7,
      "fat": 20,
      "fiber": 2
    },
    "emoji": "🍳",
    "accentColor": "bg-yellow-100",
    "cuisine": "Italian-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "high-protein",
      "vegetarian",
      "breakfast",
      "meal-prep",
      "italian-american",
      "no-stovetop"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-brown-sugar-banana-bread-cake",
    "name": "Rice Cooker Brown Sugar Banana Bread Cake",
    "description": "Meltingly moist banana bread with a fluffy sponge-cake crumb and deep brown-sugar caramel flavor, steam-baked start to finish in your rice cooker with zero oven required. Repeated cook cycles turn the batter into a tall, tender cake that tastes like it came from a bakery. Inspired by a viral rice-cooker baking trend on TikTok.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 3,
        "note": "very ripe, brown-spotted; mashed"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "about 1/4 cup"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "packed, about 1/2 cup"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 2
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "softened, for greasing the pot"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "optional": true,
        "note": "chopped; fold into batter or sprinkle on top"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 1,
        "optional": true,
        "note": "fold into the batter for a banana-chocolate version"
      }
    ],
    "steps": [
      "Rub the softened butter all over the inside of the rice cooker pot, across the bottom and up the sides, so the finished cake releases cleanly. In a large bowl, mash the 3 ripe bananas with a fork until mostly smooth (a few small lumps are fine and add texture).",
      "Add the eggs, vegetable oil, brown sugar, white sugar, milk, and vanilla to the mashed banana and whisk until the sugar dissolves and the batter looks glossy.",
      "Add the flour, baking soda, baking powder, cinnamon, and salt. Gently stir just until no dry streaks remain — do not overmix, or the cake turns dense. Fold in the optional walnuts or chocolate chips now if using.",
      "Pour the batter into the greased pot and tap the pot on the counter a few times to pop large air bubbles and level the top.",
      "Close the lid and run the standard White Rice / Cook cycle. When it clicks over to Keep Warm, leave the lid shut for 10 minutes, then press Cook again to start a second cycle.",
      "Repeat the cook-and-rest cycles (usually 3 to 4 total, about 40 to 55 minutes) until a toothpick poked into the center comes out clean with no wet batter and the top looks set and springs back when lightly pressed. Always test the center before stopping — this is what guarantees it is fully baked.",
      "Switch to Keep Warm and let the cake rest 10 minutes to firm up, then run a thin spatula around the edge to loosen it. Set a plate over the pot and flip to release the cake. Cool slightly, slice into wedges, and serve warm."
    ],
    "totalTimeMinutes": 65,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 50,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use bananas that have gone black and mushy on the counter — they are the sweetest, are often marked down to pennies, and are exactly what this cake wants.",
      "Skip the optional walnuts and chocolate chips to keep this well under a dollar a serving; the brown sugar and banana carry plenty of flavor on their own.",
      "No measuring cups? One regular banana is about 1/2 cup mashed, and a heaped soup spoon is roughly a tablespoon — close enough for a forgiving cake like this."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Melted butter or any neutral oil works one-for-one; butter adds a richer, more bakery-like flavor.",
        "savings": "Often already on hand"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Use white sugar plus a splash of molasses, or just all white sugar — you lose a little caramel depth but it still bakes up great.",
        "savings": "Saves ~$0.15"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any milk works — almond, oat, or soy milk are perfect dairy-free swaps.",
        "savings": "Use whatever is in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 295,
      "protein": 5,
      "carbs": 48,
      "fat": 10,
      "fiber": 2
    },
    "emoji": "🍌",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "no-oven",
      "banana",
      "dessert",
      "snack",
      "baking"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-savory-soy-furikake-oatmeal-bowl",
    "name": "Rice Cooker Savory Soy & Furikake Oatmeal Bowl",
    "description": "Forget sweet — this is oatmeal that eats like a cozy savory rice bowl, with umami soy, nutty sesame oil, crunchy furikake, fresh scallions and a tangy hit of kimchi. A steamed rice-cooker egg on top makes it a full breakfast that converts even oatmeal skeptics. Inspired by a viral rice-cooker oatmeal trend on TikTok.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "oats",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 2
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 1,
        "note": "for savory depth; use chicken-broth if you don't need it vegetarian"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "steamed in-shell on top of the porridge"
      },
      {
        "ingredientId": "furikake",
        "quantity": 4,
        "optional": true,
        "note": "the crunchy umami topping"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "kimchi",
        "quantity": 1,
        "optional": true,
        "note": "for tang and crunch"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 2,
        "optional": true
      }
    ],
    "steps": [
      "Add the oats, water, veggie broth and salt to the rice cooker pot and stir so the oats sit in an even layer.",
      "Wipe any water off 2 whole eggs (still in their shells) and rest them right on top of the oat mixture so they steam as the porridge cooks.",
      "Set the cooker to the Porridge/Oatmeal setting (or run a standard White Rice cycle) and cook 15-20 minutes. Open once at the halfway point to stir the oats so they don't stick, then settle the eggs back on top and close the lid.",
      "After about 12-13 minutes of cooking, lift out the eggs with a spoon and cool them under cold running water for 30 seconds; peel and halve. For a fully set yolk leave them in 2-3 minutes longer before pulling.",
      "When the oats are thick and creamy, stir the soy sauce and sesame oil straight into the pot until glossy and savory, then taste and add a splash more soy if you like it saltier.",
      "Spoon the oatmeal into two bowls and top each with a halved egg, then shower with furikake and sliced scallions.",
      "Add a tangy pile of kimchi on the side and finish with a sprinkle of sesame seeds. Eat hot, right out of the bowl."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Furikake is the one splurge here, but a single shaker lasts for dozens of bowls — a little goes a long way, so don't dump it on.",
      "No broth on hand? Use all water plus a pinch of extra salt, or crumble in a cheap bouillon cube for the same savory depth.",
      "Buy a big canister of plain rolled oats instead of single-serve packets — it's a fraction of the price per bowl and works exactly the same in the cooker."
    ],
    "substitutions": [
      {
        "forIngredientId": "veggie-broth",
        "swap": "Use chicken-broth, or plain water with a crumbled bouillon cube, for the same savory depth",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "kimchi",
        "swap": "Use a spoonful of sriracha or chili crisp for the same tangy-spicy kick",
        "savings": "saves around $0.70 per bowl"
      },
      {
        "forIngredientId": "furikake",
        "swap": "Crumble a sheet of nori and add a pinch of sesame seeds and salt",
        "savings": "saves a few cents and uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 13,
      "carbs": 32,
      "fat": 13,
      "fiber": 5
    },
    "emoji": "🍚",
    "accentColor": "bg-emerald-100",
    "cuisine": "Japanese-inspired",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "savory-oats",
      "breakfast"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-creamy-spinach-parmesan-penne",
    "name": "Rice Cooker Creamy Spinach Parmesan Penne",
    "description": "Restaurant-style creamy penne tossed in a silky parmesan-cream sauce and folded with wilted spinach — and you never touch a stove or drain a thing. It's the lazy one-pot upgrade that lets your rice cooker do all the simmering, stirring, and saucing while you sit back. Inspired by apeachyplate.com (https://apeachyplate.com/rice-cooker-pasta/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "penne",
        "quantity": 2
      },
      {
        "ingredientId": "water",
        "quantity": 3.5
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "shallot",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.75
      },
      {
        "ingredientId": "parmesan",
        "quantity": 8,
        "note": "freshly grated, plus more to finish"
      },
      {
        "ingredientId": "spinach",
        "quantity": 3,
        "note": "fresh, packed"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.5
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.25,
        "optional": true,
        "note": "a squeeze to brighten at the end"
      }
    ],
    "steps": [
      "Add the penne, water, butter, diced shallot, minced garlic, and salt straight into the rice cooker pot. Stir once so all the pasta is submerged in the water.",
      "Close the lid and press Cook (or run a normal White Rice cycle). Let it go for about 12-15 minutes — the pasta absorbs most of the water on its own, so no stirring is needed.",
      "At around the 10-minute mark, lift the lid and bite a piece: it should be just shy of al dente with only a little liquid left. If it's still firm or the pot looks dry, splash in 2-3 tablespoons of water and keep cooking, checking every couple of minutes until tender.",
      "Once the penne is tender and most of the water is gone, switch to Keep Warm. Pour in the heavy cream and stir, then add the parmesan a little at a time, stirring after each handful until it melts into a glossy sauce that coats every noodle.",
      "Pile the fresh spinach on top, close the lid, and let the residual heat wilt it for 2-3 minutes. Stir it through — it shrinks into bright green ribbons in the sauce.",
      "Taste and adjust with the black pepper, a pinch more salt, and red pepper flakes if you want a little heat. The sauce thickens as it sits on Keep Warm, so loosen it with a splash of water if it gets too tight.",
      "Finish with a squeeze of lemon and an extra shower of parmesan, then scoop straight from the pot into your bowls."
    ],
    "totalTimeMinutes": 25,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a wedge of parmesan and grate it yourself — it melts smoother, tastes sharper, and costs way less per serving than the pre-shredded tubs.",
      "Frozen spinach works great and is cheaper than fresh: use about 1 cup, stir it in at the cream stage, and let the heat thaw and wilt it.",
      "No heavy cream? A splash of whole milk loosened with an extra tablespoon of butter gives you a lighter but still creamy sauce for less."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Swap in half-and-half or whole milk with an extra pat of butter for a lighter, cheaper sauce.",
        "savings": "~$0.25/serving"
      },
      {
        "forIngredientId": "spinach",
        "swap": "Use frozen spinach (about 1 cup) — cheaper and wilts right into the sauce.",
        "savings": "~$0.30/serving"
      },
      {
        "forIngredientId": "shallot",
        "swap": "A few tablespoons of diced regular onion stand in fine and cost less.",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 660,
      "protein": 22,
      "carbs": 62,
      "fat": 38,
      "fiber": 4
    },
    "emoji": "🍝",
    "accentColor": "bg-green-100",
    "cuisine": "Italian-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "italian-american",
      "vegetarian",
      "pasta",
      "creamy",
      "no-drain",
      "weeknight"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-lazy-japchae",
    "name": "Rice Cooker Lazy One-Pot Japchae",
    "description": "Chewy sweet-potato glass noodles tangled up with sweet peppers, carrots, and mushrooms in a glossy soy-sesame sauce — the cozy Korean party dish made for one tired student and one little pot. No pre-soaking, no wok, no stove, and the rice cooker does every bit of the work. Inspired by a viral rice-cooker noodle trend on TikTok.",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "glass-noodles",
        "quantity": 2
      },
      {
        "ingredientId": "water",
        "quantity": 3,
        "note": "about 700ml of boiling-hot water to cook the noodles"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "oyster-sauce",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 1.5
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "minced"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "cut into thin matchsticks"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "any color, thinly sliced"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "mushroom",
        "quantity": 1,
        "note": "sliced; shiitake is traditional but button mushrooms work"
      },
      {
        "ingredientId": "spinach",
        "quantity": 2
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "optional": true,
        "note": "optional; scrambled into the veg for extra protein"
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
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 0.5,
        "optional": true,
        "note": "optional kick of Korean chili flakes"
      }
    ],
    "steps": [
      "Make the sauce: in a mug, stir together the soy sauce, oyster sauce, sugar, sesame oil, and minced garlic until the sugar mostly dissolves. Set aside — this is the flavor base.",
      "Boil about 700ml of water (kettle or microwave). Pour it into the rice cooker pot, add the dry glass noodles, close the lid, and run a normal Cook / White Rice cycle for about 8-9 minutes until the noodles are clear, slippery, and chewy — no pre-soaking needed.",
      "Carefully drain the noodles into a colander (the pot insert is hot, use a towel) and give them a quick cold rinse so they don't clump. Snip them a few times with scissors so they're easier to eat, then set aside.",
      "Wipe the pot dry, return it to the cooker, add the vegetable oil, and start a fresh Cook cycle with the LID OPEN so it stays in heating mode. Add the onion, carrot, bell pepper, and mushroom and stir often for 6-8 minutes until softened (the cooker keeps the pot hot enough to cook them through). Stir in the spinach until it wilts.",
      "If using the egg, push the veg to one side, pour in the beaten egg, let it set for about a minute, then scramble it and fold it through the vegetables until fully cooked (no runny egg).",
      "Add the drained noodles back into the hot pot along with all of the sauce. Toss and stir for 2-3 minutes, lid open on Cook, so the noodles soak up the sauce and turn glossy and golden. If the cooker clicks off, just restart the Cook cycle.",
      "Taste and adjust — a splash more soy for salt or a pinch of sugar for sweetness. Top with scallion, sesame seeds, and gochugaru if you like heat, then serve warm straight from the pot."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 18,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Glass noodles are cheap and keep forever in your dorm — buy a big bag and you've got the base for endless quick dinners.",
      "Use whatever single veg you already have instead of buying all four; even just carrot and onion makes a solid japchae.",
      "Skip pricier shiitake and grab regular button mushrooms (or leave them out entirely) — the sauce carries the whole dish anyway."
    ],
    "substitutions": [
      {
        "forIngredientId": "oyster-sauce",
        "swap": "Use an extra tbsp of soy sauce plus a pinch more sugar for a vegan-friendly version",
        "savings": "saves ~$0.13 and makes it fully plant-based"
      },
      {
        "forIngredientId": "mushroom",
        "swap": "Swap in a cup of frozen-stir-fry-mix or any frozen veg you have",
        "savings": "saves ~$0.60 vs fresh mushrooms"
      },
      {
        "forIngredientId": "bell-pepper",
        "swap": "Use a cup of shredded cabbage instead — a fraction of the price with the same crunch",
        "savings": "saves ~$0.90"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 8,
      "carbs": 62,
      "fat": 10,
      "fiber": 4
    },
    "emoji": "🍜",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "korean",
      "noodles",
      "vegetarian",
      "dinner"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-cheesy-mince-spaghetti-bolognese",
    "name": "Rice Cooker Cheesy Mince Spaghetti Bolognese",
    "description": "A full meaty bolognese where the spaghetti cooks right in the sauce until it drinks up every bit of tomatoey flavor, then gets blanketed in melty mozzarella and parmesan. No pre-boiling, no stove, no draining pasta water down the sink — just one pot and a hungry dorm. Inspired by klfoodie.com (https://klfoodie.com/spaghetti-bolognese-recipe-using-rice-cooker/).",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 4,
        "note": "minced"
      },
      {
        "ingredientId": "carrot",
        "quantity": 1,
        "note": "finely diced, for sweetness and bulk",
        "optional": true
      },
      {
        "ingredientId": "ground-beef",
        "quantity": 4
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 2
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "beef-broth",
        "quantity": 2
      },
      {
        "ingredientId": "italian-seasoning",
        "quantity": 2
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
        "ingredientId": "pepper",
        "quantity": 1
      },
      {
        "ingredientId": "spaghetti",
        "quantity": 4,
        "note": "snapped in half to fit the pot"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 2
      },
      {
        "ingredientId": "parmesan",
        "quantity": 3
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "optional": true,
        "note": "torn, for garnish"
      }
    ],
    "steps": [
      "Set the rice cooker to Cook (or Sauté if your model has it) and add the olive oil. Let it warm for a minute, then stir in the diced onion, garlic, and carrot. Cook with the lid open, stirring now and then, for 4-5 minutes until softened and fragrant.",
      "Add the ground beef and break it up with a spatula. Keep stirring on the Cook cycle for 6-8 minutes until the meat is fully browned with no pink left. If there's a big puddle of grease, spoon most of it out.",
      "Stir in the tomato paste and cook it into the meat for about 1 minute, then add the tomato sauce, beef broth, italian seasoning, sugar, salt, and pepper. Stir into a loose, saucy bolognese.",
      "Snap the spaghetti in half and nestle it into the sauce, pressing the strands under the liquid so they're mostly submerged. A few poking up is fine — they'll soften as you stir later.",
      "Close the lid and run the Cook / White Rice cycle. After about 5 minutes, open and stir well to separate the noodles and coat them in sauce, then close and cook 7-10 minutes more until the pasta is tender and has soaked up most of the liquid (about 12-15 minutes of cooking total).",
      "If the cooker flips to Keep Warm before the pasta is soft, press Cook again. Add a splash of broth or water if it looks dry, stir, cover, and give it a few more minutes until tender.",
      "Scatter the mozzarella and parmesan over the top, close the lid, and let the residual heat melt the cheese for 3-4 minutes on Keep Warm.",
      "Stir gently to fold the cheese through, or leave it as a melty top layer. Finish with red pepper flakes and torn fresh basil, and serve straight from the pot."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "dietTags": [
      "high-protein"
    ],
    "cheapTips": [
      "Ground beef is the big-ticket item — swap in ground turkey or stretch the meat with extra diced carrot and a can of lentils to feed more for less.",
      "Buy a box of plain spaghetti and a tub of italian seasoning once; both last for many meals and bring the per-serving cost way down.",
      "Skip the fresh basil garnish if money's tight — a pinch of the italian seasoning you already have does the job for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "ground-beef",
        "swap": "ground turkey or plant-based ground for a lighter, cheaper pot",
        "savings": "~$1/serving with turkey"
      },
      {
        "forIngredientId": "beef-broth",
        "swap": "1 bouillon cube dissolved in 2 cups water",
        "savings": "saves ~$1.45"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "shredded cheddar or any melty cheese you have on hand",
        "savings": "use what's in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 32,
      "carbs": 58,
      "fat": 20,
      "fiber": 5
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "italian-american",
      "pasta",
      "dinner",
      "high-protein",
      "cheesy"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-tomato-cream-penne",
    "name": "Rice Cooker Tomato-Cream Penne",
    "description": "A rosy, silky tomato-cream pasta that's pure dump-and-press comfort food — tender penne in a blushing sauce that tastes like you fussed, but you really just pressed Cook. It's the ultimate no-drain, no-stovetop dinner for a tiny dorm kitchen. Inspired by @nomadetteats on their blog (https://nomadette.com/rice-cooker-pasta/).",
    "mealType": "dinner",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "penne",
        "quantity": 2
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "milk",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 3
      },
      {
        "ingredientId": "butter",
        "quantity": 1
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
        "ingredientId": "italian-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "parmesan",
        "quantity": 4
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.25,
        "optional": true,
        "note": "for a little heat"
      }
    ],
    "steps": [
      "Add the penne to the rice cooker pot, then pour in the tomato-sauce, milk, and water. Add the minced garlic, butter, salt, pepper, and italian-seasoning. Stir well so every noodle is submerged in the liquid — nothing should be poking out dry — and scrape the bottom so no milk settles and scorches.",
      "Close the lid and run the standard Cook / White Rice cycle. After about 8 minutes, open and stir thoroughly, reaching the bottom of the pot to keep the penne from sticking or the sauce from catching.",
      "Close again and keep cooking, stirring once more around the 16-minute mark. Total cook time is roughly 20-25 minutes — the pasta is done when it's tender all the way through and the sauce has thickened and turned creamy.",
      "If the noodles still have a firm bite but the liquid is gone, splash in 2-3 tablespoons of milk or water, stir, and run the cycle a few more minutes until tender.",
      "Once the penne is soft, switch to Keep Warm and stir in the parmesan a little at a time so it melts smoothly into a glossy, blush-pink cream sauce.",
      "Taste and adjust with a pinch more salt or pepper. Let it sit on Keep Warm for 2-3 minutes to set up and thicken slightly, stirring once.",
      "Scoop into bowls and finish with chopped fresh parsley and a pinch of red pepper flakes if you want a kick. Eat warm, straight from the pot."
    ],
    "totalTimeMinutes": 30,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 25,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A box of penne and a can or jar of tomato sauce make several batches — buy the store brand and this dinner lands around a dollar a serving.",
      "No fresh parmesan? The shelf-stable green-can kind melts in just fine and keeps for months in your dorm cabinet.",
      "Stretch it into lunch tomorrow: stir in a handful of frozen peas or frozen spinach during the last cook cycle for extra veg and bulk at pennies per serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use heavy cream or half-and-half for an extra-rich, restaurant-style sauce.",
        "savings": "Milk is the cheapest option here; cream costs a bit more but tastes luxe."
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Swap in a couple of tablespoons of cream cheese for an even silkier, tangier sauce.",
        "savings": "Roughly the same cost; great if you already have cream cheese open."
      },
      {
        "forIngredientId": "penne",
        "swap": "Any short pasta works — macaroni or elbow pasta cook the same way.",
        "savings": "Macaroni is often a few cents cheaper per serving."
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 16,
      "carbs": 62,
      "fat": 12,
      "fiber": 4
    },
    "emoji": "🍝",
    "accentColor": "bg-red-100",
    "cuisine": "Italian-American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "italian-american",
      "pasta",
      "vegetarian",
      "comfort-food",
      "quick",
      "budget"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-yaksik-sweet-rice",
    "name": "Rice Cooker Yaksik (Korean Sweet Rice with Dates & Nuts)",
    "description": "Glossy, chewy-sweet glutinous rice studded with soft dates, plump raisins and toasty walnuts, glazed in a soy, brown-sugar, honey and sesame sauce that tastes like a Korean holiday in a bowl. It feels fancy, but it's really just sticky rice plus pantry sweeteners — no stovetop, no oven, just your rice cooker doing the work. Inspired by Kimchimari (https://kimchimari.com/yaksik-korean-sweet-rice-dessert/).",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "sweet-rice",
        "quantity": 1.5,
        "note": "glutinous/sticky rice; soak first"
      },
      {
        "ingredientId": "water",
        "quantity": 1.25,
        "note": "for cooking the drained, soaked rice"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 2,
        "note": "for color and savory depth"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 3
      },
      {
        "ingredientId": "honey",
        "quantity": 1.5
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25
      },
      {
        "ingredientId": "medjool-dates",
        "quantity": 4,
        "note": "pitted and quartered; jujube stand-in"
      },
      {
        "ingredientId": "raisins",
        "quantity": 1
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "note": "roughly chopped; chestnut stand-in"
      },
      {
        "ingredientId": "pine-nuts",
        "quantity": 0.5,
        "optional": true,
        "note": "garnish on top"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      }
    ],
    "steps": [
      "Rinse the sweet rice in the rice cooker pot, swirling and pouring off the water 3-4 times until it runs almost clear. Cover with cool water and let it soak right in the pot for at least 2 hours (or up to overnight) — this soak is what makes the grains plump and chewy.",
      "Drain the rice well in a strainer, then set it aside while you make the sauce.",
      "In a mug or small bowl, stir together the soy sauce, brown sugar, honey, sesame oil, cinnamon and salt until the sugar dissolves into a glossy dark sauce.",
      "Return the drained rice to the cooker pot, pour in 1.25 cups fresh water and the whole sauce, then stir so every grain is coated and evenly tinted brown.",
      "Scatter the quartered dates, raisins and chopped walnuts over the top and gently fold them in so they're spread throughout.",
      "Close the lid and run a normal White Rice cycle. The cooker steams everything into a sticky, glistening sweet rice while you do nothing.",
      "When the cycle ends, leave the lid closed on Keep Warm for 15-20 minutes so the centers finish softening and the flavors meld, then fold the yaksik together with a wet rice paddle or spoon to redistribute the sauce and fruit — it should look dark, shiny and glossy.",
      "Spoon into bowls or press into a small wet container to set, then top with pine nuts and a sprinkle of sesame seeds. Serve warm or chilled."
    ],
    "totalTimeMinutes": 170,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Skip the pine nuts (the priciest item) and lean on walnuts or whatever nuts you already have — the dish is just as glossy and chewy without them.",
      "Soaking is free flavor: a long overnight soak means the cheap sweet rice cooks up plumper and stickier, so you get a more 'special' dessert for the same pennies.",
      "Buy sweet rice, raisins and brown sugar from the bulk bins and scoop only what the recipe needs instead of paying for full bags you won't finish in the dorm."
    ],
    "substitutions": [
      {
        "forIngredientId": "medjool-dates",
        "swap": "Use extra raisins or dried cranberries if dates are pricey or you don't have them",
        "savings": "saves ~$2 per batch"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Swap in chopped almonds, pecans or even peanuts — any nut adds the same toasty crunch",
        "savings": "use what's in the cupboard, ~$0.50"
      },
      {
        "forIngredientId": "honey",
        "swap": "Use maple syrup or a little extra brown sugar for a fully vegan, cheaper sweetener",
        "savings": "saves ~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 330,
      "protein": 6,
      "carbs": 62,
      "fat": 8,
      "fiber": 3
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "korean",
      "dessert",
      "sweet",
      "vegan",
      "festive",
      "no-stovetop"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-nasi-uduk",
    "name": "Rice Cooker Nasi Uduk (Jakarta Coconut-Spice Rice)",
    "description": "Jakarta's beloved coconut rice, made start-to-finish in your dorm rice cooker: jasmine rice steamed in coconut milk with lemongrass, galangal, and bay until every grain is fragrant, fluffy, and faintly sweet. Pile it with crispy fried shallots, cool cucumber, and a jammy egg, add sambal on the side, and you have a full meal that smells like a Jakarta street cart. Inspired by a viral rice-cooker trend on TikTok.",
    "mealType": "dinner",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 0.75,
        "note": "about 3/4 of a 13.5 oz can; freeze the rest"
      },
      {
        "ingredientId": "water",
        "quantity": 1.25
      },
      {
        "ingredientId": "lemongrass",
        "quantity": 1,
        "note": "bruise the lower stalk and tie it in a knot"
      },
      {
        "ingredientId": "galangal",
        "quantity": 1,
        "note": "1 tsp; or a thin slice of fresh galangal"
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 1.25
      },
      {
        "ingredientId": "kaffir-lime-leaves",
        "quantity": 2,
        "optional": true,
        "note": "stands in for pandan; deeply aromatic"
      },
      {
        "ingredientId": "shallot",
        "quantity": 2,
        "note": "thinly sliced, for the fried-shallot topping"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 1,
        "note": "to crisp the shallots in the cooker"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "optional": true,
        "note": "one jammy egg per bowl"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 0.5,
        "optional": true,
        "note": "sliced, for serving"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "optional": true,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "sambal",
        "quantity": 2,
        "optional": true,
        "note": "for heat, served on the side"
      }
    ],
    "steps": [
      "Rinse the jasmine rice right in the inner pot under cold water, swirling and draining 2-3 times until the water runs nearly clear, then drain well. Rinsing washes off surface starch so the rice steams up fluffy instead of gummy.",
      "Optional fried shallots (only if your cooker has a Saute or Cook setting): with the rice set aside, add the vegetable oil and sliced shallots to the empty pot and let them sizzle 6-8 minutes, stirring often, until evenly golden. Scoop them onto a paper towel to drain; they crisp as they cool. Skip this step entirely if you only have a basic White Rice button.",
      "Return the drained rice to the pot and add the coconut milk, water, salt, knotted lemongrass, galangal, bay leaves, and kaffir lime leaves if using. Stir once gently so the salt and coconut milk distribute evenly.",
      "Close the lid and run the normal White Rice cycle. Don't lift the lid mid-cycle; the trapped steam is what cooks the rice.",
      "When the cycle ends, leave the lid shut and let the rice rest on Keep Warm for 10 minutes so the grains finish steaming and firm up.",
      "Meanwhile, cook the eggs separately for safety: lower whole eggs into a small pot of boiling water on a stovetop or kettle-boiled water in a heatproof bowl and cook 7 minutes for jammy yolks (or 9-10 for fully set), then cool under cold water and peel. If you have no second heat source, hard-cook them earlier in the rice cooker with a cup of water on the Cook/Steam setting until the whites and yolks are fully set.",
      "Lift out and discard the lemongrass, galangal, bay leaves, and lime leaves, then fluff the rice with a fork or rice paddle to release steam and separate the grains.",
      "Spoon the rice into bowls and top with the crispy fried shallots, cucumber slices, and scallion. Halve an egg over each bowl and serve with sambal on the side for anyone who wants heat."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Use only 3/4 of the coconut milk can here and freeze the rest in an ice cube tray; those cubes are perfect for a future curry or a pot of oatmeal.",
      "Crispy fried shallots keep for weeks in a sealed jar, so fry a big batch at once and sprinkle them on everything.",
      "Galangal, lemongrass, and kaffir lime leaves all freeze beautifully whole, so buy them once and stash them in the freezer for months of fragrant rice."
    ],
    "substitutions": [
      {
        "forIngredientId": "galangal",
        "swap": "Use 1 tsp fresh or ground ginger instead; it's milder and more piney but still bright and warming.",
        "savings": "Saves a specialty-aisle trip"
      },
      {
        "forIngredientId": "kaffir-lime-leaves",
        "swap": "Drop in a strip of lime zest, or just skip them; the lemongrass and bay still carry plenty of aroma.",
        "savings": "Saves ~$0.60"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain long-grain rice works fine; add a small splash more water and you'll still get fragrant coconut rice.",
        "savings": "Saves a few cents"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 11,
      "carbs": 62,
      "fat": 15,
      "fiber": 3
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Indonesian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "indonesian",
      "coconut-rice",
      "dinner"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-mujadara",
    "name": "Rice Cooker Mujadara with Jammy Onions",
    "description": "Earthy brown lentils and fluffy rice cook down together with warm cumin until both are meltingly tender, then get crowned with a heap of sweet, deeply golden onions cooked low and slow right in the pot. It's ancient comfort food that's cheap, filling, and 100% plant-based (the optional yogurt aside) — the kind of dinner that tastes like way more effort than it took. Inspired by a viral rice-cooker mujadara trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "brown-lentils",
        "quantity": 1
      },
      {
        "ingredientId": "rice",
        "quantity": 1
      },
      {
        "ingredientId": "water",
        "quantity": 4
      },
      {
        "ingredientId": "onion",
        "quantity": 2
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 4
      },
      {
        "ingredientId": "cumin",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "optional": true,
        "note": "grated or minced"
      },
      {
        "ingredientId": "coriander",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 1,
        "optional": true,
        "note": "for serving on the side; omit to keep it vegan"
      }
    ],
    "steps": [
      "Rinse 1 cup brown lentils under cold water and pick out any small stones. Add them straight to the rice cooker pot with 4 cups water, 1 tsp cumin, and 1 tsp salt; stir.",
      "Close the lid and run a full Cook / White Rice cycle. When it clicks to Keep Warm (about 20-25 minutes), the lentils should be just barely tender with most of the water absorbed — this head start matters because lentils take longer than rice. If lots of water remains, run the cycle again briefly.",
      "Rinse 1 cup rice until the water runs mostly clear, then stir it into the hot lentils along with the remaining 1 tsp cumin, 1 tsp salt, and the optional grated garlic, coriander, and black pepper. If the pot looks dry, add 1/4 cup water. Close the lid and run another full Cook / White Rice cycle until it clicks to Keep Warm.",
      "While the rice cooks, thinly slice 2 onions. When the cycle finishes, fluff the rice and lentils with a fork, then scoop them into a serving bowl and cover to keep warm.",
      "Wipe the empty pot, add 4 tbsp olive oil and the sliced onions, and run the Cook / Saute setting. Stir every few minutes for 25-30 minutes, toggling back to Keep Warm whenever they brown too fast, until the onions collapse into a soft, sweet, deep-golden jammy pile. (A home cooker won't crisp-fry them like a stovetop — patient low-and-slow is the goal.)",
      "Fold about half the onions through the rice and lentils so every bite is seasoned, then pile the rest on top.",
      "Scatter with chopped parsley and serve warm, with a cool dollop of Greek yogurt on the side if you like."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 65,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free",
      "high-protein"
    ],
    "cheapTips": [
      "Brown lentils and plain rice are some of the cheapest, most filling staples in the store — a bag of each costs a few dollars and makes mujadara again and again.",
      "The topping is just onions and oil cooked low and slow, so skip pricey pre-fried onions; your two-onion jammy pile is better and basically free.",
      "Cook a double batch and stash it in the fridge — mujadara reheats beautifully with a splash of water and makes an unbeatable cheap lunch all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "rice",
        "swap": "Use basmati-rice for a more fragrant, restaurant-style mujadara",
        "savings": "Costs a little more but stretches just as far"
      },
      {
        "forIngredientId": "brown-lentils",
        "swap": "Swap in green-lentils — they hold their shape and cost less per cup",
        "savings": "Saves about $0.45 per cup"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Vegetable-oil works fine for cooking the onions",
        "savings": "Saves about $0.22 per tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 14,
      "carbs": 68,
      "fat": 12,
      "fiber": 11
    },
    "emoji": "🧅",
    "accentColor": "bg-amber-100",
    "cuisine": "Levantine",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "vegan",
      "budget",
      "levantine",
      "lentils",
      "comfort-food"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-arroz-con-gandules",
    "name": "Rice Cooker Arroz con Gandules",
    "description": "Puerto Rico's beloved national dish, made impossibly easy: sofrito-stained, olive-flecked rice studded with nutty pigeon peas, cooked into one smoky, savory pot. Every fluffy grain soaks up that island holiday flavor while your rice cooker does the work, building a prized golden bottom layer (pegao). Inspired by a viral rice-cooker trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 2
      },
      {
        "ingredientId": "pigeon-peas",
        "quantity": 1,
        "note": "drained and rinsed; the star of the dish"
      },
      {
        "ingredientId": "sofrito",
        "quantity": 4,
        "note": "the flavor base — store-bought or homemade"
      },
      {
        "ingredientId": "tomato-sauce",
        "quantity": 0.5
      },
      {
        "ingredientId": "olives",
        "quantity": 0.5,
        "note": "manzanilla / Spanish green olives, pimento-stuffed; roughly chopped"
      },
      {
        "ingredientId": "sazon",
        "quantity": 2,
        "note": "con culantro y achiote, for the signature color"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2.5
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "finely diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 0.5,
        "note": "diced; green cubanelle-style if you have it"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 1
      },
      {
        "ingredientId": "adobo-seasoning",
        "quantity": 1
      },
      {
        "ingredientId": "bay-leaf",
        "quantity": 1
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 2,
        "optional": true,
        "note": "to finish"
      }
    ],
    "steps": [
      "Set your rice cooker to Saute or Cook with the lid OPEN. (On a basic single-switch cooker with no saute mode, just press Cook and leave the lid up — the heating plate will run.) Add the olive oil, onion, bell pepper, and garlic and let them sizzle 3-4 minutes, stirring, until soft and fragrant.",
      "Stir in the sofrito, tomato paste, and tomato sauce. Cook 2-3 minutes more, stirring, until the sofrito loses its raw smell and the pot turns a deep rusty red.",
      "Rinse the rice until the water runs mostly clear, drain well, then add it straight to the pot. Stir for about 1 minute to coat every grain in the flavored oil.",
      "Add the drained pigeon peas, olives, sazon, adobo, bay leaf, and chicken broth. Stir once to even everything out. The liquid should taste a touch salty, since the rice will absorb it as it cooks.",
      "Close the lid and run a normal White Rice cook cycle. Do NOT stir while it cooks — leaving it undisturbed lets the rice cooker build that prized golden bottom layer (pegao).",
      "When the cycle finishes, let it rest on Keep Warm for 10 minutes with the lid closed to finish steaming.",
      "Open the lid, discard the bay leaf, and fluff gently with a fork or spatula from the bottom up, folding the peas through. Top with fresh cilantro and serve hot."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 38,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "A jar of store-bought sofrito stretches across many meals — freeze it in an ice cube tray and pop out a cube whenever you cook rice, beans, or soup.",
      "Swap chicken broth for water plus a crushed bouillon cube or a teaspoon of chicken bouillon to cut cost without losing savory depth.",
      "Canned pigeon peas are cheap year-round and keep for ages — buy a couple extra cans when they go on sale."
    ],
    "substitutions": [
      {
        "forIngredientId": "pigeon-peas",
        "swap": "Use a can of red beans or kidney beans — not traditional, but still hearty and tasty.",
        "savings": "Often cheaper and easier to find"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Use water with a bouillon cube or a teaspoon of chicken bouillon stirred in.",
        "savings": "Saves about $1.50 per pot"
      },
      {
        "forIngredientId": "sofrito",
        "swap": "Blend onion, garlic, bell pepper, and cilantro into a paste yourself.",
        "savings": "Uses pantry staples instead of a jar"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 11,
      "carbs": 68,
      "fat": 11,
      "fiber": 7
    },
    "emoji": "🍚",
    "accentColor": "bg-orange-100",
    "cuisine": "Puerto Rican",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "puerto-rican",
      "rice",
      "dinner",
      "beans"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-poached-salmon-rice-bowl",
    "name": "Rice Cooker One-Pot Poached Salmon Rice Bowl",
    "description": "Raw salmon steams gently right on top of seasoned soy-sesame rice, turning silky and flaky while the rice soaks up all that savory flavor underneath. Stir it together and you get a glossy, restaurant-style salmon-rice bowl with zero pans to scrub. Inspired by Oh Snap! Let's Eat! (https://ohsnapletseat.com/2025/08/27/one-pot-salmon-rice-bowl-rice-cooker/).",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "rinsed until water runs mostly clear"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "swap part for dashi if you have it"
      },
      {
        "ingredientId": "salmon",
        "quantity": 4,
        "note": "skin-on or skinless fillets, patted dry"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 3
      },
      {
        "ingredientId": "mirin",
        "quantity": 2
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "rice-vinegar",
        "quantity": 1
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "grated or minced"
      },
      {
        "ingredientId": "ginger-paste",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "thinly sliced, for garnish"
      },
      {
        "ingredientId": "furikake",
        "quantity": 4,
        "optional": true,
        "note": "sprinkled over each bowl"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 2,
        "optional": true
      },
      {
        "ingredientId": "avocado",
        "quantity": 1,
        "optional": true,
        "note": "sliced, optional creamy topper"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 4,
        "optional": true,
        "note": "or kewpie mayo drizzle to taste"
      }
    ],
    "steps": [
      "Rinse the jasmine rice right in the rice cooker bowl: add water, swish, and drain 2 to 3 times until it runs mostly clear, then drain well so your liquid measurement stays accurate.",
      "Add the 2 cups water, then stir in the soy sauce, mirin, sesame oil, rice vinegar, grated garlic, ginger paste, and salt. Give it one gentle stir so the seasoning is even, then smooth the rice into a flat, level layer.",
      "Pat the salmon fillets dry and lay them in a single layer on top of the rice, skin-side down. Don't stir them in. Keep them flat and not overlapping so steam reaches every piece.",
      "Close the lid and run the normal White Rice cycle. The rising steam poaches the salmon while the rice cooks underneath, so the fish stays moist and the grains drink up the soy-sesame seasoning.",
      "When the cycle finishes, keep the lid closed and let it rest on Keep Warm for 8 to 10 minutes so the salmon finishes through and the rice steam-sets without going gummy.",
      "Check the salmon: it should be opaque all the way through and flake easily with a fork (145F / 63C at the thickest part). If a thick fillet still looks translucent in the center, close the lid and give it another 3 to 5 minutes on Keep Warm before serving.",
      "Flake the salmon into big pieces with a fork or rice paddle, discarding the skin if you used skin-on, then fold the salmon and rice together until every grain is glossy and seasoned.",
      "Spoon into bowls and top with scallions, furikake, sesame seeds, avocado, and a drizzle of sriracha or kewpie mayo. For meal prep, divide into containers and refrigerate up to 4 days; reheat with a splash of water to bring the rice back to life."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Salmon is the splurge here, so buy a frozen fillet pack and thaw only what you need. Frozen runs cheaper per pound than fresh and poaches just as well straight from the rice cooker.",
      "Swap up to half the water for dashi made from a cheap dashi packet to get deep umami without buying fancy broth. A little soy and mirin already do most of the flavor work.",
      "Skip pricey garnishes and make your own furikake topper from sesame seeds, crumbled nori, and a pinch of salt and sugar. It costs pennies and lasts weeks in a jar."
    ],
    "substitutions": [
      {
        "forIngredientId": "salmon",
        "swap": "Use canned-salmon and fold it in at the end instead of poaching, or lay frozen shrimp on top the same way.",
        "savings": "Saves ~$2 per serving vs fresh fillets"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain white rice or sushi-rice both work; just match the cup-for-cup water on your cooker's lines.",
        "savings": "Plain rice is a few cents cheaper per cup"
      },
      {
        "forIngredientId": "mirin",
        "swap": "No mirin? Use 1 tbsp rice vinegar plus a pinch of sugar, or a splash of honey thinned with water.",
        "savings": "Skips a specialty bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 30,
      "carbs": 52,
      "fat": 14,
      "fiber": 2
    },
    "emoji": "🍣",
    "accentColor": "bg-orange-100",
    "cuisine": "Japanese-inspired",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "japanese",
      "meal-prep",
      "high-protein",
      "seafood"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-gyeran-bap-korean-butter-egg-rice",
    "name": "Rice Cooker Gyeran Bap (Korean Butter Egg Rice)",
    "description": "Steaming jasmine rice gets tossed with silky eggs, savory soy, nutty sesame oil, and a melting pat of butter for the coziest dorm bowl around. It's salty, glossy, and nearly impossible to mess up, with eggs that set gently right on the hot rice. Inspired by a viral rice-cooker trend on Instagram Reels.",
    "mealType": "breakfast",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1,
        "note": "rinsed (1 cup-dry)"
      },
      {
        "ingredientId": "water",
        "quantity": 1.25,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "about one pat per bowl"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1.5
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "to balance the soy"
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
        "note": "toasted, for garnish"
      },
      {
        "ingredientId": "gochugaru",
        "quantity": 0.5,
        "optional": true,
        "note": "for a little heat"
      },
      {
        "ingredientId": "nori-sheets",
        "quantity": 1,
        "optional": true,
        "note": "crumbled or cut into thin strips"
      }
    ],
    "steps": [
      "Rinse 1 cup-dry jasmine rice until the water runs mostly clear, drain, then add it to the rice cooker pot with 1.25 cups water. Close the lid and run the normal White Rice cycle.",
      "When the cycle finishes, leave the lid closed on Keep Warm for 5 minutes so the rice finishes steaming, then fluff it with a rice paddle or fork.",
      "Working while the rice is piping hot, crack the eggs directly onto the rice and stir hard for 20-30 seconds so the residual heat starts cooking them into ribbons.",
      "Close the lid and hold on Keep Warm for 2-3 minutes, then stir again. The eggs should be fully set with no glossy raw patches; if any liquid egg remains, cover and wait another 1-2 minutes (the rice must be steaming-hot for this to cook them safely).",
      "Add the butter, soy sauce, sesame oil, and sugar. Stir until the butter fully melts and coats every grain in a glossy, savory sauce. Taste and add a splash more soy if you want it saltier.",
      "Scoop into bowls and top with sliced scallion, toasted sesame seeds, a sprinkle of gochugaru, and crumbled nori if using. Eat right away while hot."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Plain rice and eggs are two of the cheapest dorm staples, so this bowl lands well under a dollar a serving even before toppings.",
      "Skip the garnishes if money's tight, the butter-soy-sesame trio is the real flavor and works on its own.",
      "Buy a big bag of jasmine rice and a dozen eggs at once and you can make this same bowl a dozen mornings in a row for almost nothing."
    ],
    "substitutions": [
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Any leftover cooked white rice, reheated in the cooker on Keep Warm until steaming hot before adding the eggs",
        "savings": "Uses up leftovers for free"
      },
      {
        "forIngredientId": "soy-sauce",
        "swap": "Equal amount of tamari for a gluten-free, slightly richer salt hit",
        "savings": "About the same cost"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter for a dairy-free bowl with the same melty richness",
        "savings": "Saves a few cents per tbsp"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 13,
      "carbs": 56,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🍚",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "korean",
      "breakfast",
      "vegetarian",
      "comfort-food"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-pumpkin-coconut-sweet-rice",
    "name": "Rice Cooker Pumpkin Coconut Sweet Rice",
    "description": "Cubes of pumpkin steam right on top of sticky sweet rice until they collapse and melt into the grains, turning everything gold, creamy, and naturally sweet with rich coconut milk. It's a cozy one-pot snack that tastes way fancier than its tiny price tag, and your whole room will smell incredible. Inspired by a viral rice-cooker trend on Reddit.",
    "mealType": "snack",
    "servings": 3,
    "ingredients": [
      {
        "ingredientId": "sweet-rice",
        "quantity": 1.5,
        "note": "glutinous/sticky rice; rinse until water runs mostly clear"
      },
      {
        "ingredientId": "pumpkin",
        "quantity": 2,
        "note": "peeled and cut into 1-inch cubes"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "full-fat; shake the can first"
      },
      {
        "ingredientId": "water",
        "quantity": 0.75
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "optional": true,
        "note": "warm note, optional"
      },
      {
        "ingredientId": "coconut-flakes",
        "quantity": 1,
        "optional": true,
        "note": "toasty garnish"
      },
      {
        "ingredientId": "pepitas",
        "quantity": 1,
        "optional": true,
        "note": "for crunch on top"
      }
    ],
    "steps": [
      "Rinse 1.5 cups sweet rice in the rice cooker pot 2-3 times, swirling with your hand and pouring off the cloudy water until it runs mostly clear, then drain well. If you have 20 extra minutes, cover the rinsed rice with water, soak, and drain again for an even softer, stickier result.",
      "Add the whole can of coconut milk, the water, brown sugar, sugar, salt, and cinnamon (if using). Stir until the sugar dissolves, then spread the rice into an even layer under the liquid.",
      "Scatter the cubed pumpkin evenly over the top of the rice. Don't stir it in: let the pieces rest on the surface so they steam while the rice cooks underneath.",
      "Close the lid and run the normal White Rice cycle. The cooker simmers the rice and gently steams the pumpkin until it is fork-tender, about 30-40 minutes.",
      "When the cycle ends, keep the lid closed and let it sit on Keep Warm for 10 minutes so the rice finishes plumping and the pumpkin softens fully.",
      "Open the lid and gently fold everything together: the soft pumpkin will break down and melt into the rice, turning it gold and creamy. Stir in a splash more coconut milk or water if you want it looser.",
      "Taste. If it's a touch thin or undercooked, close the lid and run Keep Warm for another 5-10 minutes; if it's too sweet, stir in a small pinch of salt to balance.",
      "Spoon into bowls and top with toasted coconut flakes and pepitas if you have them. Serve warm."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a wedge of pumpkin or kabocha by weight instead of a whole one. You only need about 2 cups cubed, and it's cheaper than canned puree.",
      "Sweet rice (glutinous rice) is one of the cheapest grains per bag at any Asian market and keeps for months in your dorm, so a single bag makes this snack many times over.",
      "Save the rest of the coconut milk can in the fridge for up to 4 days and use it in oatmeal, curry, or a second batch so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "pumpkin",
        "swap": "Use sweet-potato cubes or butternut squash; both steam down sweet and gold the same way.",
        "savings": "Sweet potato can be cheaper per pound when pumpkin is out of season"
      },
      {
        "forIngredientId": "coconut-milk",
        "swap": "Swap in coconut-cream for a richer pudding-like result, or whole-milk for a lighter, non-coconut version.",
        "savings": "Whole milk is much cheaper than a can of coconut milk"
      },
      {
        "forIngredientId": "sweet-rice",
        "swap": "Regular jasmine-rice works in a pinch; it'll be a little less sticky but still creamy.",
        "savings": "Use whatever rice is already in your cabinet"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 6,
      "carbs": 78,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "🎃",
    "accentColor": "bg-orange-100",
    "cuisine": "Southeast Asian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "southeast-asian",
      "vegan",
      "gluten-free",
      "sweet",
      "pumpkin",
      "coconut",
      "snack"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-loaded-egg-veggie-ramen",
    "name": "Rice Cooker Loaded Egg and Veggie Ramen",
    "description": "The quintessential dorm glow-up: a packet of instant ramen simmered with real vegetables until the broth goes rich and savory, then a cracked-in egg poaches right in the bubbling pot. Cheap, fast, deeply comforting, and entirely no-stove. Inspired by a viral rice-cooker ramen trend on TikTok.",
    "mealType": "lunch",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "ramen",
        "quantity": 1,
        "note": "discard the seasoning packet or use half for less sodium"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "enough to cover the noodles"
      },
      {
        "ingredientId": "frozen-veg",
        "quantity": 1,
        "note": "carrots, peas, corn mix — no chopping or thawing needed"
      },
      {
        "ingredientId": "scallion",
        "quantity": 1,
        "note": "thinly sliced, white and green parts kept separate"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "minced or smashed"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "cracked in whole to poach"
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
        "ingredientId": "sriracha",
        "quantity": 1,
        "optional": true
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "garnish"
      },
      {
        "ingredientId": "spinach",
        "quantity": 1,
        "optional": true,
        "note": "stir in at the end to wilt"
      }
    ],
    "steps": [
      "Add the water, minced garlic, and frozen veg to the rice cooker bowl. Close the lid and start the Cook / White Rice cycle to bring the broth to a simmer (no need to thaw the veg first).",
      "Once the water is steaming and bubbling, about 4-5 minutes, drop in the ramen brick and the white parts of the sliced scallion. Press the noodles down with a fork or chopsticks so they stay submerged.",
      "Let it simmer on the cycle for about 3 minutes, gently loosening the noodles as they soften.",
      "Stir in the soy sauce and sesame oil. If using, add the spinach now so it wilts into the hot broth.",
      "Make a small well in the center of the noodles and crack the egg directly into the bubbling broth. Close the lid and let it poach undisturbed for 3-4 minutes — keep it on Cook for a firmer white, or switch to Keep Warm for a softer, jammier yolk.",
      "Open the lid and check the egg: the white should be fully set and opaque, the yolk still runny. Give it another 1-2 minutes on Cook if you like the yolk firmer.",
      "Pour everything into a bowl. Top with the green scallion slices, a squeeze of sriracha, and a sprinkle of sesame seeds. Slurp immediately."
    ],
    "totalTimeMinutes": 15,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Skip the dusty ramen seasoning packet and build flavor with soy sauce, garlic, and sesame oil instead — cheaper per bowl and way less sodium.",
      "A bag of frozen mixed veg is the dorm MVP: pennies per cup, never goes bad, and zero chopping or washing.",
      "Buy ramen by the multipack and eggs by the dozen — this whole bowl lands well under a dollar when you stock up."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-veg",
        "swap": "Use frozen-broccoli or frozen-corn if that's what's in your freezer",
        "savings": "about the same cost, uses what you have"
      },
      {
        "forIngredientId": "ramen",
        "swap": "Swap in rice-noodles or udon for a slurpier bowl",
        "savings": "ramen is cheapest, but udon feels like takeout"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Cube in tofu instead of poaching an egg for a vegan bowl",
        "savings": "tofu costs a bit more but adds more protein"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 16,
      "carbs": 52,
      "fat": 17,
      "fiber": 5
    },
    "emoji": "🍜",
    "accentColor": "bg-orange-100",
    "cuisine": "Asian fusion",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "asian",
      "noodles",
      "vegetarian",
      "quick",
      "budget",
      "no-stove"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-creamy-parmesan-polenta",
    "name": "Rice Cooker Creamy Parmesan Polenta",
    "description": "Luxuriously creamy, cheesy polenta with a silky parmesan finish — pure Italian comfort in a bowl, with no constant stovetop stirring required. The rice cooker does the work while you study, then you fold in cheese and butter for that glossy, restaurant-worthy texture. Inspired by a viral rice-cooker polenta trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "cornmeal",
        "quantity": 1
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 3
      },
      {
        "ingredientId": "water",
        "quantity": 1
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1
      },
      {
        "ingredientId": "parmesan",
        "quantity": 8
      },
      {
        "ingredientId": "butter",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 2
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
        "quantity": 1,
        "optional": true,
        "note": "drizzle on top to serve"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "Lightly grease the inner pot of the rice cooker with a thin smear of butter or a wipe of oil so the cornmeal doesn't stick. Add the cornmeal, chicken broth, water, and 2 smashed garlic cloves, then whisk until there are no dry lumps.",
      "Whisk in the salt and pepper, close the lid, and run the normal White Rice cycle. After about 8 to 10 minutes, open the lid and whisk hard for 15 seconds to keep the polenta smooth and lift any grain settling on the bottom.",
      "Whisk again about 10 minutes later. The mixture should look thick, glossy, and creamy with no raw, gritty bite. If it still tastes grainy, add a splash of the milk and let the cycle keep running until tender.",
      "When the cycle finishes or clicks to Keep Warm, pour in the whole milk and whisk until the polenta loosens into a smooth, pourable cream. Fish out the smashed garlic cloves.",
      "On Keep Warm, fold in the parmesan and butter, stirring until both fully melt and the polenta turns silky and rich. Taste and add more salt or pepper as needed.",
      "If it stiffens while sitting, whisk in a little hot water or milk, a splash at a time, to bring back the loose, creamy texture. Spoon into bowls.",
      "Finish each bowl with a drizzle of olive oil, a little extra parmesan, and a sprinkle of fresh parsley if you have it. Serve right away while hot and creamy."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 30,
    "difficulty": "easy",
    "dietTags": [
      "gluten-free"
    ],
    "cheapTips": [
      "Cornmeal is one of the cheapest grains in the store — a single bag makes many batches, so this dish costs pennies per serving even loaded with cheese.",
      "Swap the chicken broth for water plus a crumbled bouillon cube or a spoon of chicken bouillon to get the same savory depth for a fraction of the price.",
      "Buy a wedge of parmesan and grate it yourself instead of the pre-shredded tubs — it's cheaper per ounce, melts creamier, and keeps for weeks in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-broth",
        "swap": "Use water plus a bouillon-cube, or veggie-broth, to make it fully vegetarian",
        "savings": "saves about $2 per batch"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Pecorino-romano or a sharp cheddar block melts in just as creamy",
        "savings": "often cheaper per serving"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Heavy cream for extra richness, or oat-milk to keep it dairy-light",
        "savings": "use whatever's already in your fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 11,
      "carbs": 32,
      "fat": 14,
      "fiber": 2
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "Italian",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "italian",
      "comfort-food",
      "cheesy"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-cheesy-jalapeno-cornbread",
    "name": "Rice Cooker Cheesy Jalapeno Cornbread",
    "description": "Golden, moist cornbread loaded with melty cheddar and a real kick of fresh jalapeno, baked right in your rice cooker so it comes out tender and pull-apart soft. Perfect torn into a bowl of chili or grabbed warm straight from the pot for a dorm crowd. Inspired by a viral rice-cooker cornbread trend on Instagram Reels.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "cornmeal",
        "quantity": 1
      },
      {
        "ingredientId": "flour",
        "quantity": 1
      },
      {
        "ingredientId": "sugar",
        "quantity": 2
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "milk",
        "quantity": 1
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 4
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 4
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 2
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1
      },
      {
        "ingredientId": "frozen-corn",
        "quantity": 0.5,
        "optional": true,
        "note": "thawed; folds in for sweet pops of corn"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "drizzle on top once it's done"
      }
    ],
    "steps": [
      "Spray the rice cooker bowl well with cooking spray, bottom and a couple inches up the sides, so the cornbread releases cleanly. Drop the butter into the bowl and set the cooker to Keep Warm for 3-4 minutes to melt it, then pour the melted butter into a large mixing bowl and quickly wipe the cooker bowl with a paper towel.",
      "In a separate bowl, stir together the cornmeal, flour, sugar, baking powder, and salt until evenly combined with no dry clumps.",
      "Whisk the milk and eggs into the melted butter, then pour this wet mix into the dry ingredients. Stir just until you have a thick, lumpy batter; don't overmix or the cornbread turns tough.",
      "Finely chop the jalapenos (scrape out the seeds for less heat, or leave them in for a real kick) and shred or finely cube the cheddar. Fold the jalapenos, most of the cheese, and the thawed corn (if using) into the batter, saving a small handful of cheese for the top.",
      "Scrape the batter into the greased cooker bowl, smooth the top, and scatter the reserved cheese over it. Close the lid and run the standard White Rice / Cook cycle.",
      "When the cycle clicks over to Keep Warm, leave the lid closed for 10 minutes, then poke the center with a chopstick. If it comes out with wet batter, run a second Cook cycle and check again. It's done when the center springs back and a tester comes out clean.",
      "Set the cooker to Keep Warm for 5 minutes to firm the edges, then run a butter knife around the rim and invert the bowl onto a plate (or lift the cornbread out by the edges). Drizzle with honey if you like, slice into wedges, and serve warm."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a block of cheddar instead of pre-shredded bags; it's cheaper per ounce, melts better, and you control how much goes in.",
      "Cornmeal and flour are pantry staples that cost pennies per batch, so this whole pan of cornbread feeds six for well under two dollars.",
      "One fresh jalapeno goes a long way; buy a couple and freeze the extras, since they chop straight from frozen for the next batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "jalapeno",
        "swap": "Use pickled-jalapenos from a jar (drained and chopped) for a tangier, milder kick and zero chopping fuss.",
        "savings": "Roughly the same cost, and the jar keeps for months so nothing goes to waste."
      },
      {
        "forIngredientId": "milk",
        "swap": "Swap in almond-milk or oat-milk to make it dairy-light; the batter behaves the same.",
        "savings": "About the same price; handy if you keep plant milk on hand instead of dairy."
      },
      {
        "forIngredientId": "cheddar-block",
        "swap": "Use shredded mozzarella for an even gooier, milder cheese pull.",
        "savings": "Saves around $0.15 per ounce versus block cheddar."
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 9,
      "carbs": 33,
      "fat": 13,
      "fiber": 2
    },
    "emoji": "🌶️",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "american",
      "cheesy",
      "spicy",
      "vegetarian",
      "snack",
      "baking"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-honey-poached-spiced-pears",
    "name": "Rice Cooker Honey-Poached Spiced Pears",
    "description": "Tender pears bathed in a glossy honey-and-spice syrup, gently poached until they glisten like something off a fancy restaurant dessert cart. It smells like cinnamon and warm orange and is secretly a hands-off rice-cooker job you can pull off in a dorm with no stovetop. Inspired by a viral rice-cooker dessert trend on Instagram Reels.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pear",
        "quantity": 4,
        "note": "firm but ripe; halved and cored"
      },
      {
        "ingredientId": "honey",
        "quantity": 5
      },
      {
        "ingredientId": "apple-juice",
        "quantity": 1.5
      },
      {
        "ingredientId": "water",
        "quantity": 1
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1
      },
      {
        "ingredientId": "star-anise",
        "quantity": 2,
        "optional": true
      },
      {
        "ingredientId": "cloves",
        "quantity": 0.25,
        "note": "about 3 whole cloves' worth of ground; fish them out if using whole"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juiced into the liquid"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.25,
        "optional": true,
        "note": "chopped, for crunch on top"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5,
        "optional": true,
        "note": "a cool dollop on the side"
      }
    ],
    "steps": [
      "Peel the pears if you like (the skin is fine to leave on). Slice each in half lengthwise and scoop out the core and seeds with a spoon. Lay the halves cut-side down in the rice cooker bowl so they sit snugly in a single layer.",
      "Pour the apple juice and water over the pears, then drizzle the honey across the top. Squeeze in the juice from the lemon half — this keeps the pears from browning and balances the sweetness.",
      "Add the cinnamon, ground ginger, cloves, vanilla, and the star anise if using. Gently stir the liquid around the pears so the spices spread out; the pears should sit about halfway submerged in the spiced honey bath.",
      "Close the lid and run the normal White Rice cycle. As it heats, the cooker brings the liquid to a low simmer and poaches the pears — no stovetop needed. If your cooker has a Porridge or Slow Cook setting, that works even better.",
      "About 15 minutes in, carefully open the lid and either spoon syrup over the tops of the pears or flip them so both sides take on color and flavor. Close and let the cycle continue.",
      "When the cycle ends and switches to Keep Warm, leave the pears in for another 15-20 minutes. The gentle heat finishes softening them until a fork slides in easily and the edges look glossy and slightly translucent.",
      "Lift the pears into bowls. For a thicker syrup, leave the remaining liquid on Keep Warm with the lid open for another 10-15 minutes to reduce, then spoon it over the pears. Remove any whole star anise and cloves first.",
      "Top with chopped walnuts and a dollop of Greek yogurt if using, and serve warm."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy firmer, slightly underripe pears — they're often cheaper, hold their shape better when poached, and won't turn to mush.",
      "Apple juice makes the poaching liquid taste 'fancy,' but plain water plus an extra tablespoon of honey works just as well if that's all you have.",
      "Skip the fresh garnishes and lean on pantry spices — a 30-cent hit of cinnamon does more for this dessert than $4 of toppings."
    ],
    "substitutions": [
      {
        "forIngredientId": "apple-juice",
        "swap": "Use orange juice, or plain water with an extra drizzle of honey",
        "savings": "Water is free if you're broke"
      },
      {
        "forIngredientId": "honey",
        "swap": "Maple syrup or brown sugar both poach beautifully and taste just as cozy",
        "savings": "Brown sugar is much cheaper per serving"
      },
      {
        "forIngredientId": "pear",
        "swap": "Firm apples work just as well and poach in about the same time",
        "savings": "Apples are often on sale by the bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 2,
      "carbs": 50,
      "fat": 2,
      "fiber": 5
    },
    "emoji": "🍐",
    "accentColor": "bg-amber-100",
    "cuisine": "Dessert",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "dessert",
      "fruit",
      "vegetarian",
      "no-stovetop"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-cajun-red-beans-and-rice",
    "name": "Rice Cooker Cajun Red Beans & Rice",
    "description": "Smoky, creamy, and deeply savory, this one-pot Cajun classic turns a few cheap pantry cans into a soul-warming dinner that feeds the whole apartment. The rice cooker melds smoked sausage, red beans, and the Cajun \"holy trinity\" of onion, celery, and bell pepper into pure comfort with zero stovetop fuss. Inspired by a viral rice-cooker trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 2
      },
      {
        "ingredientId": "red-beans",
        "quantity": 2
      },
      {
        "ingredientId": "smoked-sausage",
        "quantity": 2,
        "note": "andouille if you can find it; sliced into coins"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 2.5
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "diced"
      },
      {
        "ingredientId": "celery",
        "quantity": 2,
        "note": "diced"
      },
      {
        "ingredientId": "bell-pepper",
        "quantity": 1,
        "note": "green, diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
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
        "ingredientId": "bay-leaf",
        "quantity": 1
      },
      {
        "ingredientId": "vegetable-oil",
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
        "quantity": 2,
        "optional": true,
        "note": "to taste at the table"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, for garnish"
      }
    ],
    "steps": [
      "If your cooker has a Saute or Cook setting, switch it on, add the vegetable oil, and brown the sliced smoked sausage for 4-5 minutes until the edges crisp. No saute mode? Skip the browning — the sausage is already fully cooked, so just add it raw with everything else in step 4.",
      "If you browned the sausage, add the diced onion, celery, bell pepper, and garlic and saute 4-5 minutes until softened, scraping up any browned bits. Otherwise just have the diced vegetables ready to add in the next step.",
      "Rinse the 2 cups of rice in a strainer until the water runs clear and drain well, then add it to the cooker pot.",
      "Drain and rinse both cans of red beans and add them. Add the diced onion, celery, bell pepper, and garlic (if not already in), the chicken broth, Cajun seasoning, smoked paprika, and the bay leaf. Stir so the rice is evenly submerged and level, with the liquid sitting just above the rice.",
      "Close the lid and run the normal White Rice cycle. Let it cook fully undisturbed so the rice steams while the broth turns creamy and smoky.",
      "When the cycle ends, leave the lid closed and let it rest on Keep Warm for 10 minutes so the flavors set and any extra liquid absorbs.",
      "Open the lid and check the rice is tender all the way through (no chalky center); if it still has a bite, add a splash of broth or water, stir, and run another 5-10 minutes on Keep Warm. Fish out the bay leaf, then fluff and stir, mashing a few beans against the side for extra creaminess.",
      "Taste and add more Cajun seasoning or a pinch of salt if needed. Scoop into bowls and top with sliced scallions, fresh parsley, and a few dashes of hot sauce."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "Red beans are one of the cheapest cans on the shelf — buy a few when they're on sale and this becomes a sub-$1.50-per-bowl dinner.",
      "No Cajun seasoning? Mix your own from pantry staples: smoked paprika, garlic powder, onion powder, cayenne, oregano, and salt. Cheaper and you control the heat.",
      "Stretch it further by leaning on the beans instead of more sausage — beans are the cheapest protein here and the leftovers taste even better the next day."
    ],
    "substitutions": [
      {
        "forIngredientId": "smoked-sausage",
        "swap": "Use sliced kielbasa, spam, or even bacon for the same smoky punch",
        "savings": "Spam runs cheaper per serving and keeps forever in the cupboard"
      },
      {
        "forIngredientId": "red-beans",
        "swap": "Kidney beans or pinto beans work just as well",
        "savings": "Both are the same ~$1.10/can and often more available"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "Dissolve a bouillon cube in 2.5 cups water instead",
        "savings": "A box of bouillon cubes costs pennies per cup vs. canned broth"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 21,
      "carbs": 72,
      "fat": 16,
      "fiber": 11
    },
    "emoji": "🍲",
    "accentColor": "bg-red-100",
    "cuisine": "Cajun/Southern",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "cajun",
      "southern",
      "beans",
      "comfort-food",
      "budget"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-spanakorizo-greek-spinach-rice",
    "name": "Rice Cooker Spanakorizo (Greek Spinach Rice)",
    "description": "Silky, lemon-bright spinach rice that melts a whole bag of greens into creamy, risotto-soft grains — vegetarian comfort food with fresh dill, good olive oil, and a salty crumble of feta on top. It tastes like something your Greek grandma simmered for an hour, but the rice cooker does all the work in one pot. Inspired by a viral rice-cooker spanakorizo trend on TikTok.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "rice",
        "quantity": 2,
        "note": "medium- or long-grain white rice, rinsed"
      },
      {
        "ingredientId": "spinach",
        "quantity": 8,
        "note": "fresh, roughly chopped (about a standard bag); it cooks way down"
      },
      {
        "ingredientId": "onion",
        "quantity": 1,
        "note": "finely diced"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 3,
        "note": "extra-virgin if you have it"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 3,
        "note": "or water plus a bouillon cube; the spinach also releases water as it wilts"
      },
      {
        "ingredientId": "dill-fresh",
        "quantity": 4,
        "note": "chopped; the signature Greek flavor"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced at the end, plus wedges to serve"
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
        "ingredientId": "feta",
        "quantity": 1,
        "note": "crumbled over the top",
        "optional": true
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "for extra brightness",
        "optional": true
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "sliced, for garnish",
        "optional": true
      }
    ],
    "steps": [
      "Optional but worth it: set the rice cooker to Cook or Saute, add the olive oil, diced onion, and garlic, and stir occasionally for 4-5 minutes until softened and fragrant. No Saute setting? Skip this and just stir the raw onion, garlic, and oil straight into the pot in the next steps — it still works.",
      "Rinse the rice under cold water until it runs mostly clear, then add it to the pot.",
      "Pile in the chopped spinach — it will look like far too much, but it wilts down to almost nothing. Add the dill, salt, and pepper (and the raw onion, garlic, and oil now if you skipped the saute step).",
      "Pour in the veggie broth and stir so the rice is evenly spread under the liquid and greens. If your cooker tends to run wet, hold back about 1/4 cup of the broth — the spinach adds moisture as it cooks.",
      "Close the lid and run the normal White Rice cycle. Let it go without lifting the lid so the spinach steams down into the grains.",
      "When the cycle ends, leave the lid on and let it sit on Keep Warm for 8-10 minutes to finish absorbing and turn creamy.",
      "Fluff gently with a fork, then squeeze in the fresh lemon juice and stir. Taste and adjust with more salt or lemon as needed.",
      "Spoon into bowls, crumble feta over the top, and finish with lemon zest, sliced scallion, and a lemon wedge on the side."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 35,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Frozen spinach is cheaper than fresh and works great here — swap in about 2 cups frozen (thawed and squeezed dry) and you'll barely notice the difference.",
      "Skip the bottled broth: dissolve a bouillon cube in 3 cups of water instead. It's a fraction of the cost and the dill and lemon carry the flavor.",
      "Feta is the splurge, so treat it as a finishing touch, not a filler — a little crumbled on top goes further than stirring a whole block through."
    ],
    "substitutions": [
      {
        "forIngredientId": "spinach",
        "swap": "Use about 2 cups frozen spinach (thawed and well drained) for a lower-price, zero-prep option",
        "savings": "saves about $4 vs a fresh bag"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "Use water plus a crumbled bouillon cube",
        "savings": "saves about $2"
      },
      {
        "forIngredientId": "dill-fresh",
        "swap": "Use 1.5 tsp dried dill stirred in before cooking",
        "savings": "cheaper and keeps in the cupboard"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 9,
      "carbs": 52,
      "fat": 9,
      "fiber": 4
    },
    "emoji": "🥬",
    "accentColor": "bg-green-100",
    "cuisine": "Greek",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "greek",
      "mediterranean",
      "vegetarian",
      "spinach",
      "lemon"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-mediterranean-farro-pilaf",
    "name": "Rice Cooker Mediterranean Farro Pilaf",
    "description": "Chewy, nutty farro simmers right in your rice cooker, then gets folded with bright lemon, fresh herbs, chickpeas, and sweet-tart dried fruit for a hearty grain bowl that eats like a meal-prep dream. It's higher in fiber and way more satisfying than plain rice, and it keeps beautifully all week. Inspired by a viral rice-cooker trend on TikTok.",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "farro",
        "quantity": 1.5
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 3
      },
      {
        "ingredientId": "water",
        "quantity": 0.75
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "garlic",
        "quantity": 3
      },
      {
        "ingredientId": "red-onion",
        "quantity": 0.5
      },
      {
        "ingredientId": "chickpeas",
        "quantity": 1
      },
      {
        "ingredientId": "lemon",
        "quantity": 1
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1
      },
      {
        "ingredientId": "dried-apricots",
        "quantity": 0.5
      },
      {
        "ingredientId": "dried-cranberries",
        "quantity": 0.25
      },
      {
        "ingredientId": "oregano",
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
        "quantity": 3,
        "optional": true,
        "note": "chopped, folded in at the end"
      },
      {
        "ingredientId": "mint-fresh",
        "quantity": 2,
        "optional": true,
        "note": "chopped, brightens the whole bowl"
      },
      {
        "ingredientId": "feta",
        "quantity": 0.5,
        "optional": true,
        "note": "crumbled over the top"
      },
      {
        "ingredientId": "almonds",
        "quantity": 0.25,
        "optional": true,
        "note": "slivered or chopped, for crunch"
      }
    ],
    "steps": [
      "Rinse the 1.5 cups farro in a strainer under cold water for about 30 seconds, then tip it into the rice cooker pot. Rinsing washes off dusty surface starch so the grains stay separate and chewy instead of gummy.",
      "Add the 2 tbsp olive oil, 3 minced garlic cloves, and the finely diced half red onion on top of the farro. If your cooker has a Cook or Saute setting, run it 2-3 minutes and stir to soften the aromatics; if it doesn't, just skip ahead — the dish still works.",
      "Pour in the 3 cups veggie broth plus 3/4 cup water (roughly the 2.5-to-1 liquid ratio farro needs), then stir in the 1 tsp oregano, 1 tsp salt, and 1/2 tsp pepper. Close the lid.",
      "Set the cooker to the Brown Rice or Whole Grain cycle and let it run — no stovetop, no oven, the cooker does all the work. This takes about 45-50 minutes, until the farro is tender with a little bite.",
      "When the cycle ends, leave the lid closed and let it rest on Keep Warm for 10 minutes so the last of the liquid absorbs and the grains finish steaming.",
      "Fluff the farro with a fork, then fold in the drained chickpeas, chopped dried apricots, and dried cranberries. Close the lid for 5 more minutes on Keep Warm to gently warm the chickpeas and plump the fruit.",
      "Fold in the lemon zest and a big squeeze of fresh lemon juice, then taste and adjust salt. Top each portion with chopped parsley and mint, crumbled feta, and slivered almonds if using.",
      "Let it cool, then divide into 4 containers. It keeps in the fridge up to 5 days and tastes great cold or gently rewarmed — an ideal grab-and-go meal-prep bowl."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 58,
    "difficulty": "easy",
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy farro from the bulk bin and scoop just what you need — it's a fraction of the price of boxed grains and stores for months in a jar.",
      "Swap the veggie broth for water plus a bouillon cube or a teaspoon of chicken bouillon; you get the same savory depth for pennies.",
      "If you're broke, skip the fresh herbs — an extra pinch of dried oregano plus more lemon does most of the heavy lifting for brightness."
    ],
    "substitutions": [
      {
        "forIngredientId": "farro",
        "swap": "Use barley or bulgur instead — both cook chewy in the rice cooker and cost even less per cup.",
        "savings": "~$0.25 per batch"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "Use plain water with a bouillon cube dissolved in it.",
        "savings": "~$1.50 per batch"
      },
      {
        "forIngredientId": "dried-apricots",
        "swap": "Use raisins, which are cheaper and add the same sweet-tart pop.",
        "savings": "~$0.45 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 14,
      "carbs": 68,
      "fat": 10,
      "fiber": 11
    },
    "emoji": "🌿",
    "accentColor": "bg-emerald-100",
    "cuisine": "Mediterranean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "mediterranean",
      "meal-prep",
      "vegetarian",
      "whole-grain",
      "high-fiber"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-bulking-chicken-and-rice-meal-prep",
    "name": "Rice Cooker Bulking Chicken & Rice Meal Prep",
    "description": "The bodybuilder cheat code: cubed chicken, fluffy rice, and veg all cook together in one rice cooker cycle, giving you four high-protein, macro-friendly meal-prep boxes for the week with mostly hands-off time. Set it, forget it, portion it, gain. Inspired by Animal Pak's easy rice cooker chicken and rice (https://www.animalpak.com/blogs/fitness-bodybuilding/bulk-gains-in-a-bowl-evan-s-easy-rice-cooker-chicken-rice).",
    "mealType": "meal-prep",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "quantity": 4,
        "note": "cut into even 3/4-inch cubes so they cook through"
      },
      {
        "ingredientId": "jasmine-rice",
        "quantity": 2,
        "note": "rinsed until the water runs mostly clear"
      },
      {
        "ingredientId": "chicken-broth",
        "quantity": 3,
        "note": "or 3 cups water plus a bouillon cube"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "frozen-veg",
        "quantity": 2,
        "note": "mixed peas, carrots, corn, green beans; no need to thaw"
      },
      {
        "ingredientId": "garlic",
        "quantity": 3,
        "note": "minced"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5
      },
      {
        "ingredientId": "pepper",
        "quantity": 1
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
        "ingredientId": "paprika",
        "quantity": 1
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "optional": true,
        "note": "drizzle over portions for flavor; contains gluten, so skip it (or use tamari) to keep boxes gluten-free"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "optional": true,
        "note": "sliced, for garnish"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 2,
        "optional": true,
        "note": "to taste on each box"
      }
    ],
    "steps": [
      "Add 2 cups jasmine rice to the rice cooker pot and rinse under cold water, swirling and draining, until the water runs mostly clear. Drain well. This keeps the meal-prep rice fluffy instead of gummy.",
      "In a bowl, toss the 3/4-inch chicken cubes with the salt, pepper, garlic-powder, onion-powder, paprika, and minced garlic until every piece is evenly coated.",
      "Spread the drained rice in an even layer in the pot, pour in the 3 cups chicken broth, and drizzle the 2 tbsp olive oil over the top. Stir once so the rice is level and submerged.",
      "Scatter the seasoned chicken cubes evenly over the rice, then tip the frozen veg straight from the bag on top. Do not stir after this, so the rice cooks evenly underneath while the chicken and veg steam above.",
      "Close the lid and run a full White Rice cycle. The cooker steams the chicken and veg while the rice absorbs the seasoned broth, all in one shot.",
      "When the cycle ends, leave the lid closed on Keep Warm for 10 minutes to finish cooking the chicken through and let the rice set.",
      "Open and check the chicken: cut into a couple of the largest cubes to confirm they are opaque all the way through with no pink (165F). If any pieces are still pink or rice at the bottom looks wet, close the lid and run a short second cycle or 10 more minutes on Keep Warm, then check again.",
      "Stir everything together so the seasoning and chicken juices fold through the rice. Divide into 4 meal-prep containers, top with optional scallion, soy sauce, and sriracha, then cool and refrigerate up to 4 days."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy chicken breast in a family-size pack and freeze it in portions; the per-meal cost drops hard when you split a bulk pack across several preps.",
      "Swap the chicken broth for water plus a 25-cent bouillon cube and you still get the savory backbone for a fraction of the price.",
      "Frozen mixed veg is cheaper than fresh, never wilts in your dorm fridge, and goes straight in with zero chopping or waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "chicken-breast",
        "swap": "chicken-thighs for juicier meat that is harder to dry out on reheat",
        "savings": "about $0.20 cheaper per serving and stays tender"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "plain long-grain rice or brown rice for more fiber (add a splash more broth for brown rice)",
        "savings": "plain rice is the cheapest grain in the catalog"
      },
      {
        "forIngredientId": "chicken-broth",
        "swap": "water plus a bouillon cube",
        "savings": "cuts the liquid cost to roughly a quarter"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 48,
      "carbs": 62,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "💪",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "high-protein",
      "meal-prep",
      "bulking",
      "viral",
      "american"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  },
  {
    "id": "rice-cooker-chamchi-deopbap",
    "name": "Rice Cooker Korean Tuna Mayo Rice Bowl (Chamchi Deopbap)",
    "description": "Fluffy hot rice straight from the cooker, piled with creamy canned tuna whipped into tangy Kewpie mayo, finished with a drizzle of nutty sesame oil and crispy crumbled gim for around 30g of protein in minutes. It's the ultimate no-stovetop dorm dinner: the rice cooker does all the work while the topping comes together in a single bowl. Inspired by a viral rice-cooker tuna-mayo trend on TikTok.",
    "mealType": "lunch",
    "servings": 2,
    "ingredients": [
      {
        "ingredientId": "jasmine-rice",
        "quantity": 1.5,
        "note": "rinsed until the water runs clear"
      },
      {
        "ingredientId": "water",
        "quantity": 1.75,
        "note": "for cooking the rice"
      },
      {
        "ingredientId": "tuna",
        "quantity": 2,
        "note": "drained well and pressed dry"
      },
      {
        "ingredientId": "kewpie-mayo",
        "quantity": 3,
        "note": "Japanese-style mayo; richer and tangier than regular"
      },
      {
        "ingredientId": "soy-sauce",
        "quantity": 1,
        "note": "for the tuna mix"
      },
      {
        "ingredientId": "sesame-oil",
        "quantity": 2,
        "note": "split: 1 tsp in the tuna, 1 tsp over the rice"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "balances the soy sauce"
      },
      {
        "ingredientId": "sriracha",
        "quantity": 1,
        "optional": true,
        "note": "or stir in gochujang, for heat"
      },
      {
        "ingredientId": "scallion",
        "quantity": 2,
        "note": "thinly sliced"
      },
      {
        "ingredientId": "nori",
        "quantity": 2,
        "note": "gim/seaweed, crumbled or cut into thin strips"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "toasted, for garnish"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "optional": true,
        "note": "for a fully-set steamed-egg topper"
      }
    ],
    "steps": [
      "Add the rinsed jasmine rice and water to the rice cooker pot. If you want the optional egg topper, crack the eggs into a small heatproof cup or foil cup and nestle it on top of the rice now so it steams as the rice cooks. Close the lid and run a normal White Rice cycle until it switches to Keep Warm (about 25-30 minutes).",
      "While the rice cooks, make the topping: in a bowl, flake the well-drained tuna with a fork, then stir in the Kewpie mayo, soy sauce, 1 tsp of the sesame oil, the sugar, and the sriracha if using. Mix until creamy, then taste and adjust. Set aside.",
      "When the cycle finishes, lift out the egg cup; the whites and yolk should be fully set and cooked through (if they look at all runny, close the lid and steam a few minutes more on the cook setting). Then fluff the rice with the paddle.",
      "Spoon the hot rice into two bowls and drizzle the remaining 1 tsp sesame oil over the top.",
      "Spoon the creamy tuna mayo generously over each bowl of rice.",
      "Scatter the sliced scallions, crumbled gim (nori), and toasted sesame seeds over the top, and add the steamed egg if you made one.",
      "Mix everything together right before eating so the warm rice loosens the mayo into a silky sauce, and dig in while it's hot."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 27,
    "difficulty": "easy",
    "dietTags": [
      "high-protein",
      "dairy-free"
    ],
    "cheapTips": [
      "Canned tuna and jasmine rice are pantry staples that cost pennies per serving, so buy the tuna in multipacks when it's on sale and stock up.",
      "No Kewpie mayo? Regular mayonnaise plus a tiny splash of rice vinegar and a pinch of sugar mimics that tangy-sweet flavor for a fraction of the price.",
      "Skip the egg and fancy garnishes when money's tight, the tuna-mayo-on-rice base alone is a filling, satisfying meal."
    ],
    "substitutions": [
      {
        "forIngredientId": "kewpie-mayo",
        "swap": "Regular mayonnaise with a few drops of rice vinegar and a pinch of sugar",
        "savings": "~$0.05 per bowl"
      },
      {
        "forIngredientId": "tuna",
        "swap": "Canned salmon or canned chicken for a different protein",
        "savings": "spend a bit more for variety"
      },
      {
        "forIngredientId": "jasmine-rice",
        "swap": "Plain white rice or sushi rice, cooked the same way",
        "savings": "~$0.03 per cup"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 31,
      "carbs": 62,
      "fat": 20,
      "fiber": 2
    },
    "emoji": "🍙",
    "accentColor": "bg-red-100",
    "cuisine": "Korean",
    "tags": [
      "rice-cooker",
      "one-pot",
      "dorm-friendly",
      "viral",
      "korean",
      "high-protein",
      "no-cook-topping",
      "pantry-meal",
      "quick"
    ],
    "equipment": [
      "rice-cooker"
    ],
    "primaryCookingMethod": "rice-cooker",
    "noStovetopRequired": true
  }
];
