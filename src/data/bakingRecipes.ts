import type { Recipe } from "@/lib/types";

/**
 * Baking recipes (oven) — a big quality-gated set of famous + niche bakes: cakes,
 * cookies, bars, breads, pastries, muffins, scones, pies, and international bakes.
 * Each was authored to be authentic, then judged by a strict pastry chef that
 * REJECTS slop (wrong ratios, missing defining ingredients, wrong tools); only
 * score >= 7 keepers made it in. Quantities are normalized to catalog units from
 * the per-ingredient notes. All tagged "baking" + equipment "oven". Photos in
 * bakingRecipePhotos.ts.
 */
export const BAKING_RECIPES: Recipe[] = [
  {
    "id": "bake-carrot-sheet-cake",
    "name": "Carrot Sheet Cake",
    "description": "A moist, spiced oil-based carrot cake baked in one sheet pan and finished with a tangy cream cheese frosting. Loaded with freshly grated carrots, warm cinnamon, and chopped walnuts — easy to slice for a crowd and even better the next day.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1.5 cups granulated sugar"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed light brown sugar"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 16,
        "note": "1 cup neutral oil for a moist crumb"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "carrot",
        "quantity": 6,
        "note": "about 3 cups packed freshly grated carrots"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.4,
        "note": "1 cup chopped, toasted"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.5,
        "note": "1/2 tsp freshly grated nutmeg"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground ginger"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 16,
        "note": "8 oz, softened — for the frosting"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup unsalted, softened — for the frosting"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 48,
        "note": "3 cups, sifted — for the frosting"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.25,
        "optional": true,
        "note": "1/2 cup, soaked in warm water 10 min"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Grease a 9x13-inch sheet/baking pan and line the bottom with parchment. Peel and finely grate the carrots; toast the walnuts in a dry skillet until fragrant, then chop.",
      "In a bowl, whisk together the flour, baking soda, baking powder, salt, cinnamon, nutmeg, and ground ginger.",
      "In a large bowl, whisk the eggs with the granulated sugar and brown sugar until pale and thickened, about 1 minute, then whisk in the oil and vanilla until emulsified and smooth.",
      "Fold the dry ingredients into the wet just until no streaks of flour remain — do not overmix. Fold in the grated carrots, most of the walnuts (reserve some for topping), and the optional drained raisins.",
      "Pour the batter into the prepared pan and spread level. Bake 30-35 minutes, until a toothpick inserted in the center comes out with a few moist crumbs and the top springs back. Cool completely in the pan on a rack.",
      "Make the frosting: beat the softened cream cheese and butter until smooth and fluffy, then beat in the sifted powdered sugar and a pinch of salt until light and spreadable.",
      "Spread the cream cheese frosting evenly over the fully cooled cake, scatter the reserved walnuts on top, slice into 16 squares, and serve."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 35,
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
      "Buy whole carrots and grate them yourself — pre-shredded bagged carrots are dry, pricier per pound, and too thick to bake up tender.",
      "Brick-style cream cheese plus a little softened butter makes a frosting that tastes richer than store-bought tubs for a fraction of the cost.",
      "Toasting the walnuts deepens their flavor so you can use less; raisins are a cheap way to add sweetness and moisture if you skip some sugar."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Equal amount of unsweetened applesauce for up to half the oil",
        "savings": "Cuts fat and stretches a pantry staple"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Chopped pecans or toasted almonds",
        "savings": "Use whichever nut is cheapest in bulk"
      },
      {
        "forIngredientId": "cream-cheese",
        "swap": "Thick Greek yogurt beaten with extra powdered sugar",
        "savings": "Often cheaper and lighter"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 4,
      "carbs": 47,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🥕",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "cake",
      "baking",
      "cream-cheese-frosting",
      "crowd-pleaser",
      "potluck",
      "spiced"
    ]
  },
  {
    "id": "bake-lemon-drizzle-cake",
    "name": "Lemon Drizzle Cake",
    "description": "A classic British loaf cake — a tender, buttery lemon sponge soaked while warm with a crunchy lemon-sugar drizzle that sets into a sharp, sweet crust. Fragrant with fresh zest and genuinely moist.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "225g unsalted, softened (175g for sponge + extra; use ~1 stick worth)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.6,
        "note": "175g caster sugar for the sponge"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, room temperature"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.4,
        "note": "175g self-raising flour (or plain + baking powder)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "lemon",
        "quantity": 3,
        "note": "2 for zest into batter, juice of 1.5 for drizzle"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.13,
        "note": "2 tbsp whole milk to loosen batter"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.4,
        "note": "100g granulated/caster sugar for the drizzle topping",
        "optional": false
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp, optional"
      }
    ],
    "steps": [
      "Heat the oven to 180C/350F (160C fan). Grease a 2lb (900g) loaf tin and line it with baking parchment, leaving an overhang on the long sides.",
      "Cream 175g softened butter with 175g caster sugar using a wooden spoon or electric beaters for 3-4 minutes until pale and fluffy — this builds the cake's lift.",
      "Beat in the 3 eggs one at a time, adding a spoonful of the flour with each to stop the mixture curdling. Mix in the finely grated zest of 2 lemons and the vanilla.",
      "Sift in the remaining self-raising flour, baking powder and a pinch of salt, then fold gently with a spatula until just combined. Loosen with 2 tbsp milk to a soft dropping consistency.",
      "Spoon into the tin, level the top, and bake for 45-50 minutes until golden and a skewer comes out clean. If it browns too fast, tent loosely with foil.",
      "While it bakes, make the drizzle: stir the juice of 1.5 lemons into 100g sugar so it stays grainy (do not dissolve fully — the crunch is the point).",
      "As soon as the cake comes out, leave it in the tin and prick all over with a skewer. Spoon the lemon-sugar drizzle slowly over the hot surface so it soaks in and the sugar crusts on top.",
      "Cool completely in the tin before lifting out by the parchment. Slice into 10 pieces and serve."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 50,
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
      "Buy whole lemons rather than bottled juice — you need the zest for flavour and the fruit is cheaper per cake; pick heavy, thin-skinned ones for the most juice.",
      "Self-raising flour is just plain flour plus 2 tsp baking powder per 150g — make your own from the flour and baking powder you already have.",
      "Soften cold butter fast by cutting it into cubes and leaving it 15 minutes, or grating it — no need to buy pricier pre-softened spread."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Equal weight of margarine or vegetable shortening",
        "savings": "~30% cheaper than dairy butter"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any plant milk or a splash of water with a squeeze of lemon",
        "savings": "Use what's on hand, saves a separate purchase"
      },
      {
        "forIngredientId": "lemon",
        "swap": "Bottled lemon juice for the drizzle (keep fresh zest in the sponge)",
        "savings": "~40% cheaper for the juice portion"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 4,
      "carbs": 44,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "British",
    "tags": [
      "cake",
      "baking",
      "dessert",
      "lemon",
      "loaf",
      "afternoon-tea",
      "vegetarian"
    ]
  },
  {
    "id": "bake-coffee-cake",
    "name": "Cinnamon Crumb Coffee Cake",
    "description": "A tender, buttery sour-cream coffee cake with a ribbon of cinnamon-walnut swirl baked through the middle and a thick, craggy brown-sugar streusel crown. No coffee in the cake itself — it's the classic cake you serve WITH coffee, moist for days and impossible to stop at one slice.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "all-purpose flour, ~2.25 cups total split between batter and streusel"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "granulated, ~1 cup for the batter"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "packed, ~3/4 cup split between swirl and streusel"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "unsalted, ~12 tbsp split between batter and streusel"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 16,
        "note": "full-fat, ~1 cup — keeps the crumb moist and tender"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "vanilla extract, ~2 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "~1.5 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "~1/2 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "~1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 7.5,
        "note": "~2.5 tbsp split between swirl and streusel"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.4,
        "optional": true,
        "note": "chopped, for the swirl and topping"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Butter an 8x8 or 9x9 baking pan and line with a parchment sling. Make the streusel first: rub 6 tbsp melted butter into 3/4 cup flour, 1/2 cup brown sugar, 1.5 tsp cinnamon, and a pinch of salt with your fingers until it forms moist, craggy clumps; stir in half the chopped walnuts and chill while you mix the cake.",
      "Make the cinnamon swirl: stir together 1/4 cup brown sugar, 1 tbsp cinnamon, and the remaining walnuts in a small bowl. Set aside.",
      "Whisk the remaining 1.5 cups flour with the baking powder, baking soda, and salt in a bowl. In a separate large bowl, beat the remaining 6 tbsp softened butter with the granulated sugar until pale and fluffy, 2-3 minutes.",
      "Beat in the eggs one at a time, then the vanilla, scraping the bowl. The mixture should look smooth and light.",
      "Add the flour mixture in three additions alternating with the sour cream, beginning and ending with flour. Mix on low just until no dry streaks remain — overmixing makes the cake tough. The batter will be thick.",
      "Spread half the batter in the pan in an even layer. Scatter all of the cinnamon swirl mixture over it, then dollop and gently spread the remaining batter on top to cover.",
      "Squeeze the chilled streusel into clumps and scatter it thickly and evenly over the surface, pressing lightly so it adheres.",
      "Bake 40-50 minutes, until the top is deep golden and a toothpick inserted into the center comes out with just a few moist crumbs. If the streusel browns too fast, tent loosely with foil.",
      "Cool in the pan at least 30 minutes before lifting out by the sling and slicing into 9 squares — it firms up and slices cleanly as it cools."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 45,
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
      "Sour cream is the secret to the moist crumb, but full-fat plain yogurt works just as well and is often cheaper — they're interchangeable here.",
      "Buy walnuts in bulk and freeze what you don't use; they're the most expensive part and totally optional, so skip them to cut the cost without hurting the cake.",
      "Pantry staples (flour, sugar, butter, eggs) do the heavy lifting here, so this whole cake feeds 9 for less than the price of two coffee-shop slices."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Full-fat plain yogurt, same amount",
        "savings": "Often a bit cheaper and you may already have it"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Pecans, or leave out entirely",
        "savings": "Skipping nuts saves the priciest ingredient"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Half a teaspoon less plus a pinch of cinnamon",
        "savings": "Stretches a costly bottle of extract"
      }
    ],
    "estimatedNutrition": {
      "calories": 395,
      "protein": 6,
      "carbs": 48,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "coffee cake",
      "streusel",
      "cinnamon",
      "baking",
      "brunch",
      "dessert",
      "crumb cake",
      "sour cream"
    ]
  },
  {
    "id": "bake-angel-food-cake",
    "name": "Angel Food Cake",
    "description": "An ethereally light, cloud-soft sponge built entirely on whipped egg whites — no butter, no yolks, no chemical leavening. Cream of tartar stabilizes the meringue, sifted cake flour and powdered sugar keep the crumb tender, and a whisper of vanilla and almond extract make it taste like sweet air. Cooled upside down so it never collapses.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 1.5,
        "note": "about 1.5 cups / 12 large egg whites, at room temperature"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 16,
        "note": "1 cup superfine/caster sugar, divided"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup, sifted with the flour"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup cake flour (sift 3 times)"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp"
      }
    ],
    "steps": [
      "Position a rack in the lower third of the oven and heat to 350F (175C). Have a clean, ungreased 10-inch tube (angel food) pan ready — do NOT grease it; the batter needs to grip the sides to climb.",
      "Sift the cake flour with the powdered sugar and salt together three times into a bowl; this aerates them and guarantees no lumps. Set aside.",
      "In a spotlessly clean, grease-free metal or glass bowl, beat the room-temperature egg whites on medium until foamy, then add the cream of tartar. Increase to medium-high and beat until soft, billowy peaks form.",
      "With the mixer running, rain in the superfine sugar a tablespoon at a time, then beat to firm, glossy peaks that just hold their tip — do not whip to stiff and dry. Beat in the vanilla and almond extract.",
      "Sift the flour mixture over the meringue in four additions, gently folding with a balloon whisk or spatula after each — fold just until no streaks remain, deflating the whites as little as possible.",
      "Scrape the batter into the ungreased tube pan. Run a thin knife or skewer once through the batter in a circle to pop any large air pockets, then smooth the top.",
      "Bake 35-40 minutes, until the top is golden, springs back when lightly pressed, and a skewer comes out clean. The cake should be tall and feel dry on top.",
      "Immediately invert the pan onto its feet (or over the neck of a bottle) and let the cake cool completely upside down, about 1.5 hours — this stretches and sets the delicate crumb so it won't collapse.",
      "Once fully cool, run a thin knife around the outer and inner edges and the bottom, then turn out. Cut with a serrated knife using a gentle sawing motion."
    ],
    "totalTimeMinutes": 130,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a carton of liquid egg whites instead of cracking and wasting a dozen yolks — it's cheaper than whole eggs here and saves the separating hassle.",
      "Make your own superfine sugar by pulsing regular white sugar in a blender for 20-30 seconds; no need to buy caster sugar.",
      "Freeze leftover slices for up to a month — angel food thaws in minutes and is great toasted or topped with macerated berries."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "Use 1.5 tsp lemon juice or white vinegar to stabilize the whites",
        "savings": "Skips a single-use pantry buy, saving ~$3"
      },
      {
        "forIngredientId": "flour",
        "swap": "Make cake flour by replacing 2 tbsp of every cup of all-purpose flour with cornstarch",
        "savings": "Avoids buying specialty cake flour, ~$2 cheaper"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Omit entirely or use a little extra vanilla",
        "savings": "Saves ~$4 on a bottle you'd barely use"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 4,
      "carbs": 37,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍰",
    "accentColor": "bg-pink-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "cake",
      "baking",
      "low-fat",
      "egg-whites",
      "light",
      "sponge-cake"
    ]
  },
  {
    "id": "bake-victoria-sponge-cake",
    "name": "Victoria Sponge Cake",
    "description": "The classic British afternoon-tea cake: two layers of light, buttery vanilla sponge made by the creaming method, sandwiched with a generous layer of raspberry jam and softly whipped cream, finished with a dusting of powdered sugar. Tender, golden, and not too sweet.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "225g unsalted, softened to room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "225g caster/superfine sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "large, room temperature"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.04,
        "note": "225g self-rising flour (or all-purpose + 2 tsp baking powder)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp, if using plain flour"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.13,
        "note": "1-2 tbsp, to loosen batter to dropping consistency"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "pinch"
      },
      {
        "ingredientId": "jam",
        "quantity": 8,
        "note": "about 1/2 cup good raspberry (or strawberry) jam"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.3,
        "note": "about 250ml, whipped"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 1,
        "note": "1 tbsp for dusting, plus a little to sweeten cream"
      }
    ],
    "steps": [
      "Heat the oven to 180C/350F. Grease two 8-inch round cake pans and line the bases with parchment. Make sure butter and eggs are at room temperature.",
      "Cream the softened butter and caster sugar together with an electric mixer for 4-5 minutes until very pale, light, and fluffy. This aeration is what gives the sponge its rise.",
      "Beat in the eggs one at a time, mixing well after each addition. If the batter starts to curdle, add a spoonful of the flour to bring it back together.",
      "Sift the self-rising flour (with baking powder and salt if using plain flour) over the batter and fold it in gently with a spatula until just combined. Fold in the vanilla and enough milk to give a soft dropping consistency.",
      "Divide the batter evenly between the two pans and level the tops. Bake for 22-25 minutes until golden, springy to the touch, and a skewer comes out clean.",
      "Cool in the pans for 5 minutes, then turn out onto a wire rack, peel off the parchment, and cool completely. Never fill a warm sponge or the cream will melt.",
      "Whip the heavy cream with a little powdered sugar to soft peaks. Spread the raspberry jam over the flat side of one sponge, then spread or pipe the whipped cream on top.",
      "Set the second sponge on top, flat side down. Dust the top generously with powdered sugar through a sieve. Serve the same day, ideally with tea."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use plain all-purpose flour with 2 tsp baking powder instead of buying self-rising flour, and stir in a pinch of salt.",
      "An equal-weight ratio of butter, sugar, flour, and eggs (roughly 4 eggs to 225g each) means you can scale without a recipe and waste nothing.",
      "Skip the whipped cream and fill with jam plus a thin layer of buttercream made from the leftover butter and powdered sugar for a longer-keeping, more traditional version."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Fill with vanilla buttercream (butter beaten with powdered sugar) instead of whipped cream",
        "savings": "Keeps longer and avoids buying cream; uses pantry staples"
      },
      {
        "forIngredientId": "jam",
        "swap": "Lemon curd or marmalade",
        "savings": "Use whatever fruit preserve you already have on hand"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Pulse regular granulated sugar in a blender for a few seconds to make caster sugar",
        "savings": "No need to buy specialty caster sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 6,
      "carbs": 52,
      "fat": 27,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-rose-100",
    "cuisine": "British",
    "tags": [
      "cake",
      "baking",
      "dessert",
      "afternoon-tea",
      "vanilla",
      "classic",
      "vegetarian"
    ]
  },
  {
    "id": "bake-german-chocolate-cake",
    "name": "German Chocolate Cake",
    "description": "A tender, mild-chocolate layer cake crowned with the cake's defining coconut-pecan filling — a cooked custard of evaporated milk, egg yolks, brown sugar, butter, toasted pecans, and shredded coconut. Despite the name, it's an American classic born from German's Sweet Chocolate; the buttermilk crumb stays soft and the filling does double duty between layers and on top.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar for the cake batter"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 12,
        "note": "3/4 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1.5,
        "note": "1.5 tsp baking soda"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt, split between batter and filling"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "2 whole for batter, 4 yolks for the coconut-pecan filling"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "1 cup buttermilk"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "1/2 cup neutral oil for a moist crumb"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla, for batter and filling"
      },
      {
        "ingredientId": "coffee",
        "quantity": 1,
        "note": "1 cup hot brewed coffee to bloom the cocoa"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1,
        "note": "12 oz can, for the coconut-pecan filling"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed light brown sugar for the filling"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) butter for filling and pan"
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 24,
        "note": "1.5 cups sweetened shredded coconut"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup chopped pecans, toasted"
      }
    ],
    "steps": [
      "Heat oven to 350F. Butter two 9-inch round pans, line bottoms with parchment, and toast the pecans in the oven for 6-8 minutes until fragrant, then chop and set aside.",
      "Make the cake batter: whisk flour, granulated sugar, cocoa, baking soda, baking powder, and 1/2 tsp salt in a large bowl. In another bowl whisk 2 whole eggs, buttermilk, oil, and 1 tsp vanilla until smooth.",
      "Pour the wet into the dry and whisk just until combined, then stir in the hot coffee — the batter will be thin; that's correct. Divide between the pans and bake 28-32 minutes until a toothpick comes out with a few moist crumbs. Cool 10 minutes, then turn out onto a rack to cool completely.",
      "Make the coconut-pecan filling: in a saucepan whisk the evaporated milk, brown sugar, 4 egg yolks, butter, 1/2 tsp salt, and 1 tsp vanilla. Cook over medium heat, stirring constantly, 10-12 minutes until thickened and golden — it should coat the back of a spoon.",
      "Off the heat, stir in the shredded coconut and toasted pecans. Spread the filling on a plate and cool until thick and spreadable, about 30 minutes.",
      "Level the cooled cakes if domed. Set one layer on a plate and spread with a third of the filling, top with the second layer, and pile the remaining filling on top, spreading to the edges but leaving the sides bare — the traditional look.",
      "Let the cake set at room temperature 20 minutes before slicing so the filling firms up."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
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
      "Bloom inexpensive cocoa powder in hot coffee instead of buying baking chocolate — it deepens the flavor and mimics the original German's Sweet Chocolate for pennies.",
      "No buttermilk? Stir 1 tbsp vinegar or lemon juice into a cup of milk and let it sit 5 minutes.",
      "Toasting the pecans yourself from a bulk bag is far cheaper than pre-toasted nuts and gives a much richer filling."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup milk soured with 1 tbsp vinegar or lemon juice",
        "savings": "Saves ~$2 vs a buttermilk carton you'll mostly waste"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Toasted walnuts",
        "savings": "Often $3-4/lb cheaper than pecans"
      },
      {
        "forIngredientId": "evaporated-milk",
        "swap": "Whole milk simmered down by a third, plus 1 extra tbsp butter",
        "savings": "Uses milk you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 7,
      "carbs": 64,
      "fat": 28,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cake",
      "dessert",
      "chocolate",
      "coconut",
      "pecan",
      "layer-cake",
      "baking",
      "classic"
    ]
  },
  {
    "id": "bake-hummingbird-cake",
    "name": "Hummingbird Cake",
    "description": "A classic Southern layer cake — tender, spiced crumb packed with mashed banana, crushed pineapple, and toasted pecans, all crowned with a tangy cream cheese frosting. No mixer required; everything comes together with a whisk and a bowl.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "all-purpose flour, ~3 cups"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "~2 cups granulated sugar"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 16,
        "note": "~1 cup neutral oil"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1.5 tsp extract"
      },
      {
        "ingredientId": "banana",
        "quantity": 3,
        "note": "very ripe, mashed (~1.75 cups)"
      },
      {
        "ingredientId": "pineapple",
        "quantity": 1,
        "note": "1 can crushed pineapple, undrained (~8 oz)"
      },
      {
        "ingredientId": "pecans",
        "quantity": 12,
        "note": "~1.5 cups chopped, divided for batter and garnish"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 32,
        "note": "16 oz, softened, for frosting"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup softened, for frosting"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 64,
        "note": "~4 cups for frosting"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C). Grease and line two 9-inch round cake pans with parchment. Spread the pecans on a dry sheet and toast 6-8 minutes until fragrant, then cool and reserve about a third for garnish.",
      "In a large bowl, whisk together the flour, granulated sugar, baking soda, cinnamon, and salt until evenly combined.",
      "In a second bowl, whisk the eggs, oil, and vanilla until smooth, then stir in the mashed banana and the undrained crushed pineapple.",
      "Pour the wet mixture into the dry ingredients and fold gently with a spatula just until no dry streaks remain — do not overmix. Fold in the toasted pecans for the batter.",
      "Divide the batter evenly between the two pans and bake 25-30 minutes, until a toothpick in the center comes out clean and the tops spring back. Cool in the pans 10 minutes, then turn out onto a rack to cool completely.",
      "Make the frosting: beat the softened cream cheese and butter until smooth, then add the powdered sugar a little at a time and beat until light and fluffy. Chill 10 minutes if it feels soft.",
      "Level the cooled cakes if domed. Place one layer on a plate, spread with frosting, then top with the second layer and frost the top and sides.",
      "Press the reserved toasted pecans around the top edge, slice, and serve. Store leftovers covered in the fridge."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 30,
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
      "Use overripe, heavily speckled bananas — markdown bananas are often the cheapest in the store and bake up sweetest.",
      "Buy pecans in bulk bins rather than pre-packaged baking bags; you only need a modest amount and bulk is far cheaper per ounce.",
      "Crushed pineapple in juice is inexpensive and you use the whole can (juice included), so there's no waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "pecans",
        "swap": "Use walnuts instead — they toast and chop the same way and are usually cheaper.",
        "savings": "~$2 per cake"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Swap in melted butter or any neutral oil you already have on hand.",
        "savings": "~$1"
      },
      {
        "forIngredientId": "cream-cheese",
        "swap": "Make a simpler powdered-sugar glaze (powdered sugar + milk) to skip the cream cheese.",
        "savings": "~$3"
      }
    ],
    "estimatedNutrition": {
      "calories": 560,
      "protein": 6,
      "carbs": 72,
      "fat": 29,
      "fiber": 2
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Southern American",
    "tags": [
      "cake",
      "dessert",
      "baking",
      "banana",
      "pineapple",
      "pecan",
      "cream-cheese-frosting",
      "Southern",
      "layer-cake",
      "potluck"
    ]
  },
  {
    "id": "bake-funfetti-birthday-cake",
    "name": "Funfetti Birthday Cake",
    "description": "A tender, buttery vanilla layer cake studded with rainbow sprinkles and finished with a fluffy cream cheese-vanilla buttercream. The classic celebration cake — soft crumb, double-vanilla flavor, and a hit of almond extract for that nostalgic \"birthday cake\" taste.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour (cake flour is even better if you have it)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 28,
        "note": "1 3/4 cups granulated sugar for the cake"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) softened unsalted butter for the cake"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "1/4 cup oil keeps the crumb moist alongside the butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "3 whole eggs + 1 extra white, room temperature"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "1 cup whole milk or buttermilk, room temperature"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 3,
        "note": "1 tbsp vanilla extract total across batter and frosting"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "note": "1/4 tsp almond extract for that signature birthday-cake note"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2.5,
        "note": "2 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 0.4,
        "note": "1/2 cup rainbow jimmies/sprinkles for the batter — use real long sprinkles, not nonpareils, so they don't bleed"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 64,
        "note": "4 cups powdered sugar for the buttercream"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 8,
        "note": "4 oz softened cream cheese for tang and structure in the frosting"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C). Grease two 8-inch round pans, line the bottoms with parchment, and grease again. Whisk the flour, baking powder, and salt together and set aside.",
      "Beat the softened butter, oil, and granulated sugar on medium-high for 3-4 minutes until pale and fluffy. Add the eggs and extra white one at a time, then beat in the vanilla and almond extract, scraping the bowl as you go.",
      "With the mixer on low, add the flour mixture in three additions, alternating with the milk and beginning and ending with flour. Mix only until just combined — overmixing makes a tough, gummy cake.",
      "Toss the sprinkles with a teaspoon of the measured flour, then gently fold them in by hand so they stay distinct and don't streak the batter.",
      "Divide the batter evenly between the pans and smooth the tops. Bake 24-28 minutes, until the centers spring back and a toothpick comes out with a few moist crumbs. Cool in the pans 10 minutes, then turn out onto a rack and cool completely.",
      "Make the buttercream: beat the remaining softened butter and the cream cheese until smooth, then add the powdered sugar a cup at a time on low. Beat in the remaining vanilla and a pinch of salt, then whip 2 minutes until light and spreadable.",
      "Level the cooled cakes if domed. Set one layer on a plate, spread with a generous layer of frosting, top with the second layer, and frost the top and sides in a smooth or swirled coat.",
      "Press extra sprinkles around the bottom edge and scatter more over the top. Chill 20 minutes to set the frosting before slicing into 12 wedges."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 28,
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
      "Make your own cake flour: swap 2 tbsp of each cup of all-purpose flour for cornstarch and sift — gives a finer, more tender crumb without buying a special bag.",
      "Buy a tub of long rainbow jimmies once; you only need a few tablespoons per cake and they keep for years, so it's far cheaper than pre-mixed funfetti box mix.",
      "Room-temperature butter, eggs, and milk emulsify far better than cold — set them out 30 minutes ahead so the batter doesn't break and you don't waste ingredients on a dense cake."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-cheese",
        "swap": "Leave it out and use all butter for a classic American vanilla buttercream",
        "savings": "Saves ~$1.00 and one fewer item to buy"
      },
      {
        "forIngredientId": "milk",
        "swap": "Buttermilk or milk soured with 1 tsp vinegar",
        "savings": "Uses what you already have; ~$0.50"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Extra 1/2 tsp vanilla",
        "savings": "Skip a niche bottle, save ~$3.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 5,
      "carbs": 68,
      "fat": 20,
      "fiber": 1
    },
    "emoji": "🎂",
    "accentColor": "bg-pink-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "cake",
      "birthday",
      "baking",
      "funfetti",
      "celebration",
      "sprinkles",
      "vanilla"
    ]
  },
  {
    "id": "bake-devils-food-cake",
    "name": "Devil's Food Cake",
    "description": "A deeply dark, ultra-moist chocolate layer cake with a tender, almost fudgy crumb. The cocoa is bloomed in hot coffee to amplify the chocolate, buttermilk and baking soda give it the classic tang and reddish-mahogany color, and it's finished with a glossy chocolate buttercream.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "all-purpose flour, ~2 cups"
      },
      {
        "ingredientId": "dutch-cocoa",
        "quantity": 12,
        "note": "Dutch-process cocoa, ~3/4 cup, bloomed in hot coffee"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "granulated sugar, ~2 cups"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "light brown sugar, ~1/2 cup, for moisture and depth"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 2,
        "note": "~2 tsp; reacts with cocoa and buttermilk"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "~1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.25,
        "note": "~1.25 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "room temperature"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "~1 cup, room temperature"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "~1/2 cup; keeps the crumb moist"
      },
      {
        "ingredientId": "coffee",
        "quantity": 1,
        "note": "~1 cup hot brewed coffee, poured over cocoa to bloom"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "~2 tsp"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "unsalted, softened, for the buttercream (~1.5 sticks)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 48,
        "note": "~3 cups, for buttercream"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 10.67,
        "note": "~2/3 cup unsweetened cocoa for buttercream"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.25,
        "note": "~1/4 cup, to loosen buttercream"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 0.25,
        "optional": true,
        "note": "melted into buttercream for extra gloss and depth"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C). Grease two 9-inch round cake pans, line the bottoms with parchment, and grease again. In a bowl or large measuring cup, whisk the Dutch cocoa with the hot brewed coffee until smooth, then set aside to cool slightly; this blooms the cocoa for deeper chocolate flavor.",
      "In a large bowl, whisk together the flour, granulated sugar, brown sugar, baking soda, baking powder, and salt, breaking up any brown sugar lumps.",
      "In another bowl, whisk the eggs, buttermilk, oil, and vanilla until smooth, then whisk in the cooled cocoa-coffee mixture.",
      "Pour the wet ingredients into the dry and whisk just until no streaks remain; the batter will be thin and pourable, which is correct. Do not overmix.",
      "Divide the batter evenly between the pans and bake 28-34 minutes, until a toothpick inserted in the center comes out with a few moist crumbs and the tops spring back when lightly pressed.",
      "Cool the cakes in the pans 10 minutes, then turn out onto a rack, peel off the parchment, and cool completely before frosting.",
      "Make the buttercream: beat the softened butter until pale and fluffy, then beat in the sifted powdered sugar and cocoa in batches. Add the optional melted, cooled chocolate chips, then the heavy cream and a pinch of salt, and beat until light and spreadable.",
      "Level the cake tops if domed. Place one layer on a plate, spread with frosting, top with the second layer, then frost the top and sides. Let set 15 minutes before slicing."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 32,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Make your own buttermilk: stir 1 tbsp vinegar or lemon juice into 1 cup of milk and let it sit 5 minutes; it works exactly like store-bought here.",
      "No brewed coffee on hand? Dissolve 1 tsp instant coffee in 1 cup hot water. It won't taste like coffee, it just deepens the chocolate.",
      "Buy cocoa in bulk and skip pricey baking chocolate; the bloomed cocoa is doing most of the heavy lifting in this cake."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup milk plus 1 tbsp vinegar, rested 5 min",
        "savings": "Saves buying a whole carton of buttermilk you won't finish"
      },
      {
        "forIngredientId": "coffee",
        "swap": "Same volume of hot water, or instant coffee in hot water",
        "savings": "Free if you don't keep brewed coffee around"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Whole milk, a splash at a time",
        "savings": "Uses what's already in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 6,
      "carbs": 68,
      "fat": 21,
      "fiber": 4
    },
    "emoji": "🍫",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "cake",
      "chocolate",
      "dessert",
      "baking",
      "layer-cake",
      "from-scratch"
    ]
  },
  {
    "id": "bake-japanese-cotton-cheesecake",
    "name": "Japanese Cotton Cheesecake",
    "description": "The famously light, jiggly Japanese soufflé cheesecake — a cream cheese custard folded into glossy meringue and baked gently in a water bath until it rises tall, then settles into a cloud-soft, melt-in-the-mouth crumb. Less sweet and far lighter than a New York cheesecake.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "cream-cheese",
        "quantity": 1,
        "note": "250g, softened"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.5,
        "note": "60g unsalted"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.4,
        "note": "100ml"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "yolks and whites separated"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.6,
        "note": "100g, for the meringue"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.2,
        "note": "60g cake/all-purpose, sifted"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.15,
        "note": "20g, sifted"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "note": "1/4 tsp, stabilizes meringue"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch"
      }
    ],
    "steps": [
      "Heat oven to 320F (160C). Line the bottom and sides of an 8-inch round pan with parchment, then wrap the outside tightly in foil to keep water out during the bath. Bring a kettle of water to a boil for the bain-marie.",
      "Gently melt the cream cheese, butter, and milk together in a heatproof bowl over a pan of barely simmering water, whisking until completely smooth with no lumps. Remove from heat and let cool until just warm.",
      "Whisk the 6 egg yolks, vanilla, and lemon juice into the warm cheese mixture. Sift in the flour and cornstarch and whisk until silky and fully combined, then set the batter aside.",
      "In a clean, grease-free bowl, beat the 6 egg whites with the cream of tartar and salt until foamy, then add the sugar in three additions, beating to soft, droopy peaks — do not go to stiff peaks or the cake will crack and dry out.",
      "Fold one-third of the meringue into the cheese batter to lighten it, then gently fold in the rest in two batches with a spatula until just uniform, keeping as much air as possible.",
      "Pour into the prepared pan and tap once on the counter to release large bubbles. Set the pan in a larger roasting tray and pour in the boiling water to come about 1 inch up the sides.",
      "Bake 25 minutes at 320F, then lower to 250F (120C) and bake 55-65 minutes more, until risen, golden, and set with only a faint jiggle in the center.",
      "Turn off the oven, crack the door open, and let the cake rest inside 15-20 minutes to prevent sudden collapse, then remove and cool slightly.",
      "Invert onto a plate, peel the parchment, and turn right-side up. Serve warm for maximum jiggle or chill for a denser, sliceable crumb; dust with powdered sugar if desired."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 85,
    "difficulty": "hard",
    "equipment": [
      "oven",
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Whole eggs are the backbone here — buy the large flat of eggs; this cake needs 6 and the price per cake stays tiny.",
      "Skip cake flour: regular all-purpose plus the cornstarch already in the recipe gives the same tender, low-gluten crumb.",
      "One block of cream cheese is all you need — no need for premium mascarpone or imported brands for the texture to work."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "Use a splash of white vinegar — it does the same job of cutting richness and stabilizing the meringue",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "A few extra drops of lemon juice or vinegar will also stabilize the egg whites",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk you have, including 2% or evaporated milk thinned with water",
        "savings": "~$0.25"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 7,
      "carbs": 21,
      "fat": 12,
      "fiber": 0
    },
    "emoji": "🍰",
    "accentColor": "bg-yellow-100",
    "cuisine": "Japanese",
    "tags": [
      "cheesecake",
      "dessert",
      "souffle",
      "baking",
      "light",
      "jiggly",
      "water-bath",
      "vegetarian"
    ]
  },
  {
    "id": "bake-flourless-chocolate-cake",
    "name": "Flourless Chocolate Cake",
    "description": "A dense, fudgy, intensely chocolate cake with a glossy crackled top and a truffle-like center. Made with just melted dark chocolate, butter, eggs, and sugar — no flour at all, so it's naturally gluten-free. A splash of espresso sharpens the chocolate without making it taste like coffee.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "dark-chocolate",
        "quantity": 8,
        "note": "8 oz / 225g good-quality 60-70% bittersweet dark chocolate, chopped"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp / 140g unsalted butter, cut into pieces, plus extra for the pan"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup / 150g granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "5 large eggs, at room temperature"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 5.33,
        "note": "1/3 cup / 30g unsweetened cocoa powder, sifted, plus more for dusting"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp pure vanilla extract"
      },
      {
        "ingredientId": "espresso",
        "quantity": 0.1,
        "optional": true,
        "note": "1 tbsp brewed espresso or 1/2 tsp instant espresso powder, to deepen the chocolate"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      }
    ],
    "steps": [
      "Heat oven to 325F (165C). Butter an 8-inch round springform or cake pan, line the bottom with a parchment round, and butter the parchment. For a cake pan, wrap the outside in foil so you can use a water bath.",
      "Melt the dark chocolate and butter together gently — in a heatproof bowl set over barely simmering water, or in short 20-second bursts in the microwave — stirring until smooth and glossy. Off the heat, stir in the espresso, vanilla, and salt, then let it cool for 5 minutes so it won't cook the eggs.",
      "In a large bowl, whisk the eggs and sugar vigorously for 2-3 minutes until pale, thickened, and slightly foamy — this is what gives the cake its lift and crackly top.",
      "Whisk the warm (not hot) chocolate mixture into the eggs until fully combined, then sift in the cocoa powder and fold gently with a spatula until you have a smooth, uniform batter with no streaks.",
      "Pour the batter into the prepared pan and smooth the top. Set the pan inside a larger roasting pan and pour hot water halfway up the sides — the water bath keeps the texture silky and prevents cracking.",
      "Bake for 35-40 minutes, until the edges are set but the center still has a slight wobble and the top has formed a thin crust; a toothpick should come out with moist crumbs, not wet batter.",
      "Lift the cake out of the water bath and cool completely in the pan on a rack, then chill at least 2 hours (or overnight) so it firms into its signature dense, truffle-like texture.",
      "Run a knife around the edge, release the pan, and invert onto a plate. Dust with cocoa or powdered sugar and serve in thin slices, warming the knife between cuts for clean edges."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a baking bar or chocolate chips instead of fancy bars — as long as it's 60-70% cacao, the cake tastes just as rich for half the price.",
      "Melt the chocolate and butter in the microwave in 20-second bursts to skip the double-boiler and save on cleanup.",
      "This cake is even better the next day, so make it ahead — chilling overnight improves the texture and lets you avoid last-minute stress."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Use semi-sweet or dark chocolate chips and cut the added sugar by 2 tbsp",
        "savings": "Saves about $2 vs. premium bar chocolate"
      },
      {
        "forIngredientId": "espresso",
        "swap": "Skip it, or use 1/2 tsp instant coffee dissolved in 1 tbsp hot water",
        "savings": "Saves the cost of brewing a shot, ~$0.50"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter for a dairy-free version",
        "savings": "Roughly cost-neutral"
      }
    ],
    "estimatedNutrition": {
      "calories": 345,
      "protein": 6,
      "carbs": 28,
      "fat": 25,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "chocolate",
      "gluten-free",
      "flourless",
      "cake",
      "make-ahead",
      "decadent",
      "baking"
    ]
  },
  {
    "id": "bake-zucchini-bread",
    "name": "Zucchini Bread",
    "description": "A moist, tender quick bread laced with grated zucchini, warm cinnamon and nutmeg, and toasted walnuts. The zucchini melts into the crumb, keeping each slice soft for days while adding almost no flavor of its own — just deep, golden, lightly spiced sweetness.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "zucchini",
        "quantity": 2,
        "note": "about 2 medium, grated to ~1.5 packed cups"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "all-purpose, ~1.5 cups"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "~3/4 cup granulated"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "~1/2 cup packed light brown"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "~1/2 cup neutral oil"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.75,
        "note": "3/4 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1.5 tsp ground"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp freshly grated"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.15,
        "optional": true,
        "note": "~1/2 cup chopped, toasted"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Grease a 9x5-inch loaf pan and line the bottom with parchment, leaving an overhang for easy lifting.",
      "Grate the zucchini on the large holes of a box grater (no need to peel). Pile it in a clean kitchen towel and squeeze firmly to remove excess water — discard the liquid. You want about 1.5 packed cups of squeezed zucchini.",
      "In a large bowl, whisk the eggs, granulated sugar, brown sugar, oil, and vanilla until smooth and slightly thickened, about 1 minute. Stir in the grated zucchini.",
      "In a separate bowl, whisk together the flour, baking soda, baking powder, cinnamon, nutmeg, and salt.",
      "Add the dry ingredients to the wet and fold with a spatula just until no dry streaks remain — do not overmix, or the bread will turn dense and tough. Gently fold in the toasted walnuts if using.",
      "Scrape the batter into the prepared pan and smooth the top. Bake for 50 to 60 minutes, until the top is domed and golden and a toothpick inserted in the center comes out with only a few moist crumbs.",
      "Cool in the pan on a rack for 15 minutes, then lift out using the parchment and cool completely on the rack before slicing — this lets the crumb set so it slices cleanly."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 55,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Late-summer zucchini is dirt cheap (or free from a neighbor's garden) — buy or grab extra, grate it, squeeze, and freeze in 1.5-cup portions to bake bread all year.",
      "Skip buying buttermilk or special pans; this is a one-bowl batter that needs only a standard loaf pan and oil you already have.",
      "Leave out the walnuts to cut cost — the bread is excellent plain, and the nuts are the priciest ingredient here."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Melted coconut oil or any neutral oil like canola",
        "savings": "Use whatever oil is already open instead of buying a new bottle"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Chopped pecans, or omit entirely",
        "savings": "Saves about $1.50 per loaf"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Extra granulated sugar plus a splash of molasses, or just all granulated",
        "savings": "Avoids buying a second bag of sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 30,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-emerald-100",
    "cuisine": "American",
    "tags": [
      "quick bread",
      "baking",
      "zucchini",
      "fall",
      "snack",
      "breakfast",
      "dairy-free",
      "vegetarian",
      "one-bowl",
      "make-ahead"
    ]
  },
  {
    "id": "bake-marble-pound-cake",
    "name": "Marble Pound Cake",
    "description": "A tender, buttery loaf where rich vanilla and cocoa batters are swirled into dramatic marbled veins. Built on the classic pound-cake method — creaming softened butter and sugar until pale, then folding in eggs and flour — for a fine, moist crumb with a golden crust. Slices beautifully and keeps for days.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup / 2 sticks unsalted, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "large, room temperature"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk, room temp"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 3,
        "note": "3 tbsp unsweetened cocoa powder, sifted"
      }
    ],
    "steps": [
      "Heat the oven to 325F (165C). Grease a 9x5-inch loaf pan and line with parchment, leaving an overhang on the long sides. Whisk the flour, baking powder, and salt together in a bowl.",
      "In a large bowl, beat the softened butter and sugar with an electric mixer on medium-high for 4-5 minutes until very pale and fluffy. This aerates the batter and is what gives pound cake its lift, so don't rush it.",
      "Add the eggs one at a time, beating well after each and scraping the bowl, then beat in the vanilla. The batter should be smooth and thick.",
      "On low speed, add the flour mixture in three additions, alternating with the milk and beginning and ending with flour. Mix just until each addition disappears — overmixing makes the cake tough.",
      "Scoop about one-third of the batter into a separate bowl and gently fold in the sifted cocoa until evenly colored. Loosen it with 1-2 tsp milk if it stiffens up too much.",
      "Spoon the two batters into the pan in alternating dollops, layering vanilla and chocolate. Drag a butter knife or skewer through in a few figure-eight passes to create the marble — swirl just a few times so the colors stay distinct.",
      "Bake for 60-70 minutes, until the top is domed and golden and a skewer inserted in the center comes out with only a few moist crumbs. Tent loosely with foil after 45 minutes if the top is browning too fast.",
      "Cool in the pan for 15 minutes, then lift out using the parchment and cool completely on a rack before slicing. The crumb sets as it cools, so resist cutting it warm."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 65,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Bring butter, eggs, and milk to room temperature first — cold ingredients won't cream properly and you'll lose the rise without spending a cent more.",
      "No cocoa? Melt a small handful of chocolate chips and fold into the reserved batter instead — same marble effect from pantry scraps.",
      "Wrap leftover slices and freeze; pound cake thaws perfectly and toasts beautifully, so a single loaf stretches across two weeks of snacks."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use buttermilk or thin plain yogurt with a splash of water for an even more tender crumb",
        "savings": "Roughly the same cost; uses up what's already in the fridge"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap half the butter for vegetable oil for a moister, longer-keeping loaf",
        "savings": "Saves about $0.40 per loaf"
      },
      {
        "forIngredientId": "cocoa",
        "swap": "Melted dark chocolate chips folded into the reserved batter",
        "savings": "Cost-neutral; use chips you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 345,
      "protein": 5,
      "carbs": 42,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "marble",
      "loaf",
      "vanilla",
      "chocolate",
      "make-ahead"
    ]
  },
  {
    "id": "bake-olive-oil-cake",
    "name": "Olive Oil Cake",
    "description": "A moist, tender single-layer cake built on fruity extra-virgin olive oil instead of butter, perfumed with lemon and orange zest and a splash of vanilla. The olive oil keeps it soft for days and gives a subtle savory depth, while whipped eggs and sugar lend a light, open crumb. Finished simply with a dusting of powdered sugar — rustic, elegant, and genuinely Italian.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.75,
        "note": "about 1.75 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 20,
        "note": "about 1.25 cups granulated sugar"
      },
      {
        "ingredientId": "evoo",
        "quantity": 16,
        "note": "1 cup good fruity extra-virgin olive oil"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, room temperature"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "3/4 cup whole milk"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of 1 lemon"
      },
      {
        "ingredientId": "lemon-juice",
        "quantity": 1,
        "note": "2 tbsp fresh lemon juice"
      },
      {
        "ingredientId": "orange",
        "quantity": 0.5,
        "note": "zest of 1/2 orange"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1.5 tsp vanilla extract"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1.5 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.08,
        "optional": true,
        "note": "for dusting"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Grease a 9-inch round cake pan with a little olive oil, line the bottom with parchment, and grease again. In a bowl, whisk together the flour, baking powder, baking soda, and salt; set aside.",
      "In a large bowl, beat the eggs and sugar with a whisk or mixer for 3 to 4 minutes until pale, thick, and noticeably increased in volume — this aeration gives the cake its light crumb.",
      "With the mixer running on low (or whisking steadily), pour in the extra-virgin olive oil in a slow, thin stream so it emulsifies smoothly into the eggs. Whisk in the milk, lemon juice, vanilla, and the lemon and orange zest.",
      "Add the dry ingredients in two additions, folding gently with a spatula just until no streaks of flour remain. Do not overmix — a few lumps are fine and overworking makes the cake tough.",
      "Pour the batter into the prepared pan and smooth the top. Tap the pan once on the counter to release large air bubbles.",
      "Bake on the center rack for 40 to 45 minutes, until the top is deep golden, the cake springs back when lightly pressed, and a toothpick inserted in the center comes out clean or with a few moist crumbs.",
      "Cool in the pan on a wire rack for 15 minutes, then run a knife around the edge, invert to release, peel off the parchment, and turn right-side up to cool completely.",
      "Dust generously with powdered sugar just before serving. The cake keeps, well wrapped at room temperature, for up to 3 days and only gets more moist."
    ],
    "totalTimeMinutes": 65,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "You don't need a fancy bottle for the whole cake — use a solid everyday extra-virgin olive oil for baking and save a peppery finishing oil for drizzling on toast.",
      "Zest your citrus first, then juice it, so nothing goes to waste; leftover zested oranges and lemons make a quick glass of water taste like a cafe.",
      "Bake it a day ahead. Olive oil cake actually improves overnight as the crumb settles and the moisture distributes, so it's the perfect make-ahead dessert."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use almond milk or oat milk for a dairy-free crumb",
        "savings": "Roughly the same cost; lets you use what's already open"
      },
      {
        "forIngredientId": "evoo",
        "swap": "A mild light olive oil works if you find extra-virgin too peppery",
        "savings": "Often $2-4 cheaper per bottle"
      },
      {
        "forIngredientId": "orange",
        "swap": "Skip the orange and use the zest of a second lemon instead",
        "savings": "Saves about $0.70 and still tastes bright"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 4,
      "carbs": 38,
      "fat": 20,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "dessert",
      "cake",
      "olive-oil",
      "citrus",
      "baking",
      "vegetarian",
      "make-ahead"
    ]
  },
  {
    "id": "bake-opera-cake",
    "name": "Opera Cake",
    "description": "The classic French opéra: thin sheets of almond joconde sponge soaked in coffee syrup, layered with silky coffee buttercream and dark chocolate ganache, then sealed under a glossy chocolate glaze. Rich, structured, and unmistakably patisserie.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "almond-flour",
        "quantity": 1.4,
        "note": "almond flour (ground almonds) for the joconde sponge"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.5,
        "note": "for joconde batter and buttercream"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "4 whole eggs for the batter plus separated whites for the meringue"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "about 1/3 cup all-purpose flour"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.4,
        "note": "split between meringue, coffee syrup, and the buttercream egg base"
      },
      {
        "ingredientId": "butter",
        "quantity": 1.6,
        "note": "30g melted for the sponge; the rest softened for the coffee buttercream"
      },
      {
        "ingredientId": "instant-coffee",
        "quantity": 0.5,
        "note": "dissolved for the coffee syrup and to flavor the buttercream"
      },
      {
        "ingredientId": "espresso",
        "quantity": 0.2,
        "optional": true,
        "note": "optional shot to deepen the coffee syrup"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.9,
        "note": "70% dark chocolate for the ganache and the glaze"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.5,
        "note": "for the chocolate ganache layer"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 0.05,
        "note": "stirred into the glaze for shine"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.05,
        "optional": true
      }
    ],
    "steps": [
      "Make the joconde sponge: whisk 1 1/3 cups almond flour, 1 cup powdered sugar, and 4 whole eggs on high for 4-5 minutes until pale, thick, and tripled in volume, then fold in 1/3 cup sifted flour and 2 tbsp melted butter.",
      "In a clean bowl, whip the egg whites to soft peaks, rain in 2 tbsp sugar, and beat to glossy stiff peaks; fold this meringue into the almond batter in two additions, keeping it airy.",
      "Spread the batter thinly and evenly across two parchment-lined half sheet pans and bake at 425F for 7-9 minutes until just set and lightly golden; cool, then cut into three equal rectangles.",
      "Make the coffee syrup by dissolving 2 tbsp instant coffee (plus the optional espresso) with 1/4 cup sugar in 1/3 cup hot water; set aside to cool.",
      "Make the coffee buttercream: beat 2 egg yolks with a hot 1/4 cup sugar syrup until thick and cooled, then beat in 1 1/2 cups softened butter a little at a time until fluffy, and flavor with 1 tbsp coffee dissolved in a splash of water.",
      "Make the ganache: pour 1/2 cup hot heavy cream over 5 oz chopped dark chocolate, let sit 1 minute, then stir smooth and cool until spreadable.",
      "Assemble on a board: brush the first sponge layer with coffee syrup, spread half the buttercream, add the second sponge, brush and spread all the ganache, then the third sponge, brush, and top with the remaining buttercream, scraping it flat. Chill 1 hour until firm.",
      "Glaze: melt 3 oz dark chocolate with 1 tbsp oil until glossy, pour over the chilled cake, and spread quickly into a smooth thin layer; chill 20 minutes to set.",
      "Trim the four edges with a hot knife to reveal the clean layers, then slice into neat rectangles, wiping the blade between cuts."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 15,
    "difficulty": "hard",
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
      "Buy a block of dark chocolate and chop it yourself instead of using chips or couverture feves; it melts just as well for ganache and glaze at a fraction of the cost.",
      "Almond flour is the priciest item, so grind your own from whole almonds in a food processor with a little of the powdered sugar to keep it from clumping.",
      "Use strong brewed instant coffee instead of buying espresso for both the syrup and buttercream; the flavor reads the same once it is layered."
    ],
    "substitutions": [
      {
        "forIngredientId": "almond-flour",
        "swap": "Grind blanched whole almonds with the powdered sugar into a fine meal",
        "savings": "~40% vs buying pre-ground almond flour"
      },
      {
        "forIngredientId": "espresso",
        "swap": "Double-strength instant coffee",
        "savings": "Skips buying espresso entirely"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Whole milk plus an extra ounce of chocolate in the ganache",
        "savings": "~30% on the ganache layer"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 7,
      "carbs": 32,
      "fat": 30,
      "fiber": 3
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "patisserie",
      "layer-cake",
      "coffee",
      "chocolate",
      "almond",
      "make-ahead",
      "special-occasion",
      "baking"
    ]
  },
  {
    "id": "bake-chess-pie",
    "name": "Chess Pie",
    "description": "A Southern classic: a buttery, custardy pie with a thin sugary crackle on top. Egg yolks, plenty of sugar, melted butter, and a touch of cornmeal and vinegar set into a silky filling that's sweet but balanced by a little tang. Nothing fancy in the pantry, just the right technique.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 0.5,
        "note": "single 9-inch pie crust, store-bought or homemade pastry shell"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "about 1.5 cups granulated"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick), melted and cooled"
      },
      {
        "ingredientId": "cornmeal",
        "quantity": 0.1,
        "note": "1 tablespoon, the defining chess-pie thickener"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.06,
        "note": "1 tablespoon"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "1 tablespoon white or apple cider vinegar for tang"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 teaspoon vanilla extract"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "1/4 cup whole milk or buttermilk"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 teaspoon"
      },
      {
        "ingredientId": "cornmeal",
        "quantity": 0.02,
        "optional": true,
        "note": "pinch extra to dust crust before filling"
      }
    ],
    "steps": [
      "Preheat the oven to 350°F (175°C). Fit the pie crust into a 9-inch pie pan, crimp the edges, and chill it in the fridge while you make the filling so it holds its shape.",
      "In a large bowl, whisk the sugar, cornmeal, flour, and salt together until evenly combined, breaking up any lumps.",
      "Add the eggs and whisk just until smooth and uniform, then whisk in the cooled melted butter, milk, vinegar, and vanilla. Do not overbeat, you want it combined but not foamy.",
      "Let the filling rest 5 minutes so the cornmeal hydrates, then skim off any surface foam for a cleaner-setting custard.",
      "Pour the filling into the chilled crust. If the crust edges are browning fast, tent them with foil partway through baking.",
      "Bake on the center rack for 45 to 55 minutes, until the edges are set and puffed and the center jiggles only slightly like soft Jell-O. A thin golden crackle should form on top.",
      "Cool the pie completely on a rack, at least 2 to 3 hours, so the custard finishes setting before slicing.",
      "Serve at room temperature or chilled, plain or with a dollop of lightly whipped cream."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 55,
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
      "A pie crust is mostly flour, butter, and water, so making your own from scratch costs pennies compared to refrigerated rolls.",
      "Chess pie was born from cheap pantry staples, eggs, sugar, butter, and cornmeal, so it's already one of the most budget-friendly desserts you can bake.",
      "Buy butter when it goes on sale and freeze it, it keeps for months and you only need one stick here."
    ],
    "substitutions": [
      {
        "forIngredientId": "vinegar",
        "swap": "Use lemon juice for the same tang",
        "savings": "Often already in the fridge, saves buying a bottle"
      },
      {
        "forIngredientId": "milk",
        "swap": "Buttermilk for extra richness and tang",
        "savings": "Or use any milk you have on hand, no extra cost"
      },
      {
        "forIngredientId": "pizza-dough",
        "swap": "Homemade pastry from flour and butter",
        "savings": "Saves about $2-3 vs a refrigerated crust"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 4,
      "carbs": 50,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Southern American",
    "tags": [
      "dessert",
      "pie",
      "southern",
      "custard",
      "baking",
      "potluck",
      "classic"
    ]
  },
  {
    "id": "bake-french-fruit-tart",
    "name": "French Fruit Tart",
    "description": "A classic tarte aux fruits: buttery pâte sucrée shell filled with silky vanilla crème pâtissière, crowned with glossy fresh fruit and a thin apricot glaze. Crisp, creamy, and bright — a patisserie-window showpiece you can make at home.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.35,
        "note": "all-purpose, for the pate sucree shell"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "cold cubed butter for shell + 1 tbsp in pastry cream"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.15,
        "note": "icing sugar for the pate sucree"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "1 whole egg for dough; 3 yolks for pastry cream"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "milk",
        "quantity": 2,
        "note": "whole milk, ~2 cups for creme patissiere"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.1,
        "note": "granulated, for pastry cream"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.1,
        "note": "thickener for creme patissiere"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.2,
        "note": "vanilla extract or 1/2 scraped bean"
      },
      {
        "ingredientId": "strawberries",
        "quantity": 0.7,
        "note": "halved, for topping"
      },
      {
        "ingredientId": "blueberries",
        "quantity": 0.5
      },
      {
        "ingredientId": "kiwi",
        "quantity": 2,
        "note": "sliced into half-moons",
        "optional": true
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 0.25,
        "note": "for the glaze; warmed and strained"
      }
    ],
    "steps": [
      "Make the pate sucree: rub 0.45 stick cold butter into the flour, powdered sugar and a pinch of salt until sandy, then bind with 1 whole egg to a soft dough. Flatten into a disc, wrap, and chill 30 minutes.",
      "Roll the chilled dough to about 3mm and line a 9-inch tart tin, pressing into the fluted edges and trimming the top. Prick the base, then freeze 15 minutes.",
      "Blind-bake at 350F (175C): line the shell with parchment and baking weights for 15 minutes, remove the weights, then bake 8-10 minutes more until the base is dry and golden. Cool completely.",
      "Make the creme patissiere: whisk 3 egg yolks with the granulated sugar and cornstarch. Heat the milk with the vanilla until steaming, then slowly whisk the hot milk into the yolks to temper.",
      "Return the mixture to the pan and cook over medium heat, whisking constantly, until it boils and thickens to a thick pudding (about 1-2 minutes of bubbling). Off the heat, whisk in 1 tbsp butter.",
      "Pass the pastry cream through a sieve into a bowl, press cling film onto the surface, and chill until cold and set, at least 1 hour.",
      "Whisk the cold pastry cream smooth and spread it evenly into the cooled tart shell, leveling the top.",
      "Arrange the strawberries, blueberries and kiwi tightly over the cream in concentric circles or rings of color.",
      "Warm the apricot jam with a splash of water, strain, and brush a thin glaze over the fruit. Chill 30 minutes before serving."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 35,
    "difficulty": "hard",
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
      "Use whatever fruit is in season and on sale — kiwi, mandarin segments, grapes, peaches and raspberries all work; you don't need all three toppings.",
      "No baking weights? Use dried beans or rice on parchment to blind-bake, then save them in a jar to reuse.",
      "Skip store-bought glaze: any leftover jam thinned with water and strained gives the same professional shine."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "Any clear jelly or marmalade thinned with water and strained for the glaze",
        "savings": "Use jam you already have instead of buying glaze"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated white sugar to a powder, or just use white-sugar in the dough",
        "savings": "Avoids buying a separate bag of icing sugar"
      },
      {
        "forIngredientId": "kiwi",
        "swap": "Canned mandarin segments or sliced grapes",
        "savings": "Often cheaper and available year-round"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 6,
      "carbs": 42,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🍓",
    "accentColor": "bg-rose-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "tart",
      "pastry",
      "baking",
      "fruit",
      "patisserie",
      "crowd-pleaser",
      "make-ahead"
    ]
  },
  {
    "id": "bake-portuguese-pasteis-de-nata",
    "name": "Portuguese Pastéis de Nata",
    "description": "Lisbon's iconic custard tarts: shatteringly crisp, laminated pastry shells cradling a silky cinnamon-and-lemon-scented egg custard, baked at furnace heat until the tops blister into caramelized black-amber spots. Best eaten warm with a dusting of cinnamon.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "Use store-bought all-butter puff pastry (1 sheet, ~320g) for the laminated tart shells"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "yolks only — 6 large egg yolks"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "about 3/4 cup (150g) for the sugar syrup"
      },
      {
        "ingredientId": "water",
        "quantity": 0.67,
        "note": "2/3 cup for the sugar syrup"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "1/3 cup (45g) to thicken the custard base"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1.25,
        "note": "1 1/4 cups (300ml), warmed"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 cinnamon stick for the syrup, plus ground for dusting"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "peel of 1 lemon, in wide strips, to infuse the syrup"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla or a split vanilla pod"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1,
        "note": "small pinch"
      }
    ],
    "steps": [
      "Make the syrup: combine sugar, water, the cinnamon stick and the strips of lemon peel in a small pot. Bring to a boil, then simmer 3-4 minutes until it reaches roughly 100-105°C (a loose syrup). Remove from heat and let it infuse — do not stir once boiling.",
      "Make the custard base: whisk the flour with a splash of the cold milk into a smooth paste. Warm the remaining milk, then pour it over the paste while whisking constantly; return to the pan and cook over medium heat, whisking, until thick and bubbling (about 2 minutes). Take off the heat.",
      "Strain the hot syrup (discard cinnamon and lemon peel) and pour it in a thin stream into the milk mixture, whisking the whole time so it stays smooth. Whisk in the vanilla and salt, then let the mixture cool to just warm.",
      "Whisk the egg yolks lightly, then whisk them into the cooled custard. Strain the whole custard through a fine sieve into a jug for a glassy, lump-free filling. It should be pourable, like thin cream.",
      "Shape the shells: roll the puff pastry into a tight log, slice into 12 even pinwheels, and press each cut-side-down into a muffin tin, thumbing the dough up the sides into thin cups. Chill 10 minutes so the layers stay distinct.",
      "Crank the oven as hot as it goes — 270-290°C (525-550°F) — with a rack near the top. A blazing oven is what gives nata their signature blistered, caramelized tops.",
      "Fill each chilled shell about 3/4 full with the warm custard (cold custard makes soggy bases). Bake 8-12 minutes until the pastry is deep golden and the custard tops are scorched with dark caramel blisters.",
      "Cool in the tin a few minutes, then lift out. Dust with ground cinnamon (and powdered sugar if you like) and serve warm — they are at their absolute best within an hour of baking."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 12,
    "difficulty": "hard",
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
      "Save the 6 leftover egg whites for an omelette, meringues, or to add to scrambles — nata only use the yolks, so don't throw them out.",
      "Store-bought all-butter puff pastry costs a fraction of laminating your own and gives nearly identical results — the custard is what makes the tart.",
      "One lemon and one cinnamon stick flavor the whole batch; infuse them in the syrup and reuse the peel strips to scent a pot of tea afterward."
    ],
    "substitutions": [
      {
        "forIngredientId": "pizza-dough",
        "swap": "Homemade quick rough-puff pastry (flour, butter, water) if you can't buy puff pastry",
        "savings": "Saves about $2 per batch vs. premium all-butter puff"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Half whole milk plus a splash of heavy cream for a richer custard",
        "savings": "Whole milk alone keeps it about $1 cheaper than using cream"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "Orange peel or a strip of dried citrus peel",
        "savings": "Use a lemon you already have on hand to save ~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 4,
      "carbs": 24,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Portuguese",
    "tags": [
      "custard tart",
      "portuguese",
      "pastry",
      "dessert",
      "egg yolks",
      "puff pastry",
      "lisbon",
      "baking"
    ]
  },
  {
    "id": "bake-sugar-cookies",
    "name": "Sugar Cookies",
    "description": "Buttery, tender classic cut-out sugar cookies with crisp edges and a soft center. Creamed butter and sugar, real vanilla, and a proper chill give them clean shapes and a melt-in-your-mouth crumb — perfect plain or iced.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks), softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp pure vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp, for classic bakery flavor"
      },
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.2,
        "optional": true,
        "note": "for a simple icing, with a splash of milk"
      }
    ],
    "steps": [
      "In a large bowl, cream the softened butter and granulated sugar together with a mixer on medium-high for 2-3 minutes until pale and fluffy.",
      "Beat in the egg, vanilla, and almond extract (if using) until fully combined, scraping down the bowl.",
      "In a separate bowl, whisk together the flour, baking powder, and salt. Add to the wet ingredients in two additions, mixing on low just until a soft dough forms — do not overmix.",
      "Divide the dough in half, flatten into discs, wrap, and chill at least 1 hour (or up to 2 days) so the butter firms up and shapes hold.",
      "Preheat the oven to 350F (175C) and line baking sheets with parchment. Roll one disc on a lightly floured surface to about 1/4 inch thick and cut out shapes.",
      "Transfer cookies to the sheets, spacing 1 inch apart. Re-chill the cut cookies for 10 minutes if the dough has softened.",
      "Bake 8-10 minutes, until the edges are just barely golden and the centers look set but pale — they firm up as they cool.",
      "Cool on the sheet for 5 minutes, then transfer to a rack to cool completely.",
      "If icing, whisk powdered sugar with a few drops of milk and vanilla to a spreadable glaze, decorate the fully cooled cookies, and let set."
    ],
    "totalTimeMinutes": 100,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 10,
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
      "Buy butter on sale and freeze it — sugar cookies are a great use for stockpiled sticks.",
      "Skip the cookie cutters: roll the dough into a log, chill, and slice into rounds for icebox-style sugar cookies.",
      "A splash of almond extract makes them taste like an expensive bakery for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use plant-butter sticks for a dairy-free version",
        "savings": "About the same, but lets you skip buying both"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Just use extra vanilla or lemon zest",
        "savings": "Saves ~$4 on a bottle you rarely use"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Pulse granulated sugar with a little cornstarch in a blender",
        "savings": "Saves buying a separate bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 2,
      "carbs": 21,
      "fat": 6,
      "fiber": 0
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "baking",
      "cookies",
      "kid-friendly",
      "holiday",
      "make-ahead",
      "vegetarian"
    ]
  },
  {
    "id": "bake-oatmeal-raisin-cookies",
    "name": "Oatmeal Raisin Cookies",
    "description": "Chewy, golden oatmeal raisin cookies with crisp edges and a soft center, made with creamed brown butter-style softened butter, plump raisins, and warm cinnamon. The brown sugar and rolled oats give them that classic chewy texture, while a short rest of the dough deepens the flavor.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks), softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed light brown sugar"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1.5 cups all-purpose flour"
      },
      {
        "ingredientId": "oats",
        "quantity": 3,
        "note": "3 cups old-fashioned rolled oats"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1.5 tsp ground cinnamon"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp freshly grated nutmeg",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.7,
        "note": "1.5 cups raisins"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.3,
        "note": "1 cup chopped walnuts",
        "optional": true
      }
    ],
    "steps": [
      "Soak the raisins in a small bowl of hot water for 10 minutes, then drain well. This plumps them so they stay soft and chewy in the baked cookies.",
      "In a large bowl, cream the softened butter with the brown sugar and granulated sugar using a hand mixer for 2-3 minutes, until light and fluffy. Beat in the eggs one at a time, then the vanilla.",
      "In a separate bowl, whisk together the flour, baking soda, cinnamon, nutmeg, and salt. Add to the wet ingredients and mix on low just until combined, with no dry streaks remaining.",
      "Fold in the rolled oats, drained raisins, and chopped walnuts by hand until evenly distributed. Cover and chill the dough for at least 30 minutes (up to 24 hours) to firm it up and deepen the flavor.",
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment paper.",
      "Scoop the dough into 2-tablespoon mounds, spacing them about 2 inches apart. Slightly flatten the tops since these cookies do not spread much.",
      "Bake one sheet at a time for 11-13 minutes, until the edges are golden but the centers still look slightly underdone.",
      "Let the cookies rest on the hot sheet for 5 minutes to finish setting, then transfer to a wire rack to cool completely."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 13,
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
      "Buy oats and raisins from the bulk bins to slash cost per cookie versus boxed brands.",
      "Soaking the raisins in hot water (or leftover coffee) keeps them plump without buying pricier moist baking raisins.",
      "Make the dough ahead and freeze scooped balls; bake a few at a time so a single batch lasts weeks."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Skip them or use cheaper rolled oats for more texture",
        "savings": "Saves about $2.50 per batch"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Use all brown sugar for an even chewier, more caramel-forward cookie",
        "savings": "Saves a few cents and one pantry item"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "A pinch of extra cinnamon plus a splash of maple syrup",
        "savings": "Saves about $0.40 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 2,
      "carbs": 24,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "dessert",
      "baking",
      "oats",
      "raisins",
      "make-ahead",
      "kid-friendly",
      "classic"
    ]
  },
  {
    "id": "bake-gingerbread-cookies",
    "name": "Gingerbread Cookies",
    "description": "Crisp-edged, chewy-centered cut-out gingerbread spiced with ginger, cinnamon, and cloves and deeply flavored with molasses and brown sugar. The dough is chilled so it rolls cleanly and holds sharp shapes — perfect for decorating.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "about 3 cups all-purpose"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed"
      },
      {
        "ingredientId": "molasses",
        "quantity": 10.67,
        "note": "2/3 cup unsulphured"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 3,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.75,
        "note": "3/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.4,
        "optional": true,
        "note": "for royal icing to decorate"
      }
    ],
    "steps": [
      "In a bowl, whisk together the flour, ground ginger, cinnamon, cloves, nutmeg, baking soda, and salt; set aside.",
      "Beat the softened butter with the brown sugar until light and fluffy, 2-3 minutes, then beat in the molasses and egg until smooth.",
      "Add the dry ingredients in two additions, mixing on low just until a stiff dough forms and no flour streaks remain — do not overwork it.",
      "Divide the dough in half, flatten each into a disk, wrap, and chill at least 2 hours (or overnight) so it firms up and the spices bloom.",
      "Heat the oven to 350F and line baking sheets with parchment. Roll one disk on a lightly floured surface to about 1/4 inch thick, keeping the other chilled.",
      "Cut out shapes, transfer to the sheets leaving 1 inch between cookies, and re-chill the cut cookies 10 minutes so they keep crisp edges.",
      "Bake 8-10 minutes, until the edges are set and the centers look just dry; bake longer for crisp cookies, less for chewy ones.",
      "Cool on the sheet 5 minutes, then transfer to a rack to cool completely before decorating with royal icing made from the powdered sugar."
    ],
    "totalTimeMinutes": 175,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 10,
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
      "Molasses and ground spices keep for months, so the per-cookie cost stays low once you've stocked the pantry once.",
      "Skip cookie cutters — slice the chilled dough into squares or use a glass rim for rounds.",
      "Plain cookies freeze beautifully; bake a double batch and decorate them as you go."
    ],
    "substitutions": [
      {
        "forIngredientId": "molasses",
        "swap": "Dark corn syrup or maple syrup plus an extra pinch of spice",
        "savings": "Use what's on hand instead of buying a jar"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar with a teaspoon of extra molasses stirred in",
        "savings": "Avoids a separate purchase"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter for a dairy-free version",
        "savings": "Comparable cost, pantry-friendly"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 2,
      "carbs": 25,
      "fat": 5,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "baking",
      "holiday",
      "dessert",
      "spiced",
      "cut-out",
      "molasses",
      "make-ahead"
    ]
  },
  {
    "id": "bake-molasses-cookies",
    "name": "Molasses Cookies",
    "description": "Soft, chewy old-fashioned molasses cookies with crackly sugar-crusted tops and a deep warmth from molasses, cinnamon, ginger, and cloves. Crisp at the edges, tender in the middle.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "all-purpose, about 2 1/4 cups"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "1 1/2 sticks, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "packed, about 1 cup"
      },
      {
        "ingredientId": "molasses",
        "quantity": 5.33,
        "note": "unsulphured, about 1/3 cup"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1 1/2 tsp"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "allspice",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 0.2,
        "note": "for rolling; or granulated sugar"
      }
    ],
    "steps": [
      "Whisk together the flour, baking soda, cinnamon, ground ginger, ground cloves, allspice, and salt in a bowl and set aside.",
      "In a large bowl, cream the softened butter with the brown sugar until light and fluffy, about 2-3 minutes.",
      "Beat in the molasses, egg, and vanilla until fully combined and smooth, scraping down the bowl.",
      "Add the dry ingredients and mix just until a soft dough forms with no streaks of flour. Cover and chill at least 1 hour (the dough is soft and chilling prevents over-spreading).",
      "Preheat the oven to 350F and line baking sheets with parchment. Pour the turbinado sugar into a small bowl.",
      "Scoop the dough into rounded tablespoon balls, roll each in the coarse sugar to coat, and space about 2 inches apart on the sheets.",
      "Bake 9-11 minutes, until the tops are puffed and crackled and the edges are just set but the centers still look slightly underdone.",
      "Let cool on the sheet 5 minutes so they finish setting, then transfer to a rack. They firm up chewy as they cool."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
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
      "A single bottle of molasses and a bag of brown sugar make several batches, so the per-cookie cost is tiny.",
      "Skip the turbinado and roll in regular granulated sugar - you still get the crackle for a fraction of the price.",
      "Chill and scoop the dough into balls, then freeze them; bake straight from frozen adding 1-2 minutes."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use shortening for half the butter for taller, softer cookies",
        "savings": "Shortening is cheaper than butter and keeps better"
      },
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Plain white granulated sugar for rolling",
        "savings": "Saves the cost of a specialty coarse sugar"
      },
      {
        "forIngredientId": "allspice",
        "swap": "A pinch of extra cinnamon plus a little nutmeg",
        "savings": "Uses spices you likely already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 1,
      "carbs": 18,
      "fat": 4,
      "fiber": 0
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "dessert",
      "baking",
      "molasses",
      "holiday",
      "spiced",
      "chewy"
    ]
  },
  {
    "id": "bake-shortbread-cookies",
    "name": "Classic Shortbread Cookies",
    "description": "Buttery, crumbly Scottish-style shortbread with just five ingredients. A high ratio of real butter and a touch of vanilla give these a melt-in-your-mouth snap and golden, sandy edges — no leavening, no eggs, just the classic 3:2:1 method done right.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (226g / 2 sticks) unsalted, softened but still cool"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups (240g) all-purpose flour"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup (90g) powdered sugar for a finer, tender crumb"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp pure vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      }
    ],
    "steps": [
      "Cream the softened butter, powdered sugar, vanilla, and salt together with a wooden spoon or mixer for 2-3 minutes until pale, light, and fluffy — this aeration is what gives shortbread its tender texture.",
      "Add the flour all at once and mix on low (or fold by hand) just until the dough comes together into a soft, slightly crumbly mass. Stop the moment no dry flour remains — overmixing develops gluten and makes the cookies tough.",
      "Gather the dough, press it into a disc, wrap, and chill for at least 30 minutes so the butter firms up and the cookies hold their shape.",
      "Preheat the oven to 325F (160C) and line a baking sheet with parchment. A lower temperature keeps the shortbread pale and lets it dry out into that signature sandy crumb.",
      "Roll the chilled dough to about 1/3 inch thick on a lightly floured surface and cut into rounds or fingers. Prick each cookie a few times with a fork for the traditional look and even baking.",
      "Transfer cookies to the lined sheet, spacing them 1 inch apart, and chill on the tray for 10 minutes so they keep crisp edges in the oven.",
      "Bake for 16-20 minutes, until the edges are just barely golden and the tops are set but still pale. Do not let them brown all over.",
      "Let the cookies cool on the tray for 5 minutes to firm up, then transfer to a rack. Optionally dust with a little extra sugar while warm."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
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
      "Store-brand butter and flour work perfectly here — with only five ingredients, technique matters far more than premium brands.",
      "Make a double batch and freeze the raw dough disc; slice-and-bake straight from frozen for fresh cookies anytime.",
      "Use granulated white sugar instead of powdered for a slightly crunchier, more rustic shortbread at lower cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Plain white granulated sugar (use 1/2 cup); gives a crisper, sandier bite",
        "savings": "Saves about $0.40 per batch"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "A bit of lemon zest or almond extract for a different classic flavor",
        "savings": "Saves about $0.30 if you skip it"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 2,
      "carbs": 22,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Scottish",
    "tags": [
      "shortbread",
      "cookies",
      "baking",
      "dessert",
      "buttery",
      "5-ingredient",
      "no-stovetop",
      "vegetarian",
      "holiday"
    ]
  },
  {
    "id": "bake-thumbprint-cookies",
    "name": "Thumbprint Cookies",
    "description": "Buttery shortbread cookies rolled in a light coating, pressed with a thumb to make a well, and filled with a glossy pool of fruit jam. Tender, crumbly, and not too sweet — a classic that bakes up in under half an hour.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1 stick (1/2 cup) unsalted, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "about 1/2 cup white sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, yolk for dough + a little white for coating"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "about 1 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "jam",
        "quantity": 5.33,
        "note": "about 1/3 cup raspberry or strawberry jam for filling"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.25,
        "optional": true,
        "note": "finely chopped, for coating (or use almonds)"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C) and line a baking sheet with parchment. Separate the egg, keeping the yolk for the dough and saving the white in a small bowl.",
      "Beat the softened butter and sugar together until pale and fluffy, 2-3 minutes. Beat in the egg yolk and vanilla until smooth.",
      "Add the flour and salt and mix on low just until a soft, cohesive dough forms — do not overmix. If it feels sticky, chill the dough 15-20 minutes.",
      "Roll the dough into 12 walnut-sized balls (about 1 inch each). For a coated version, roll each ball through the lightly beaten egg white, then in the chopped nuts.",
      "Place the balls 2 inches apart on the sheet. Press a deep well into the center of each with your thumb or the rounded end of a wooden spoon.",
      "Spoon roughly 1/2 teaspoon of jam into each well, filling it just below the rim so it does not overflow while baking.",
      "Bake 12-15 minutes, until the edges are set and just turning golden; the centers should stay pale. If the wells puffed shut, gently re-press them right out of the oven.",
      "Cool on the sheet 5 minutes to firm up, then transfer to a rack to cool completely before serving."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
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
      "A single stick of butter and pantry staples make two dozen if you halve the size — these stretch a long way for the cost.",
      "Use whatever jam is already open in the fridge; the odds and ends of several jars work great and waste nothing.",
      "Skip the nut coating to keep it cheaper and allergy-friendly; the plain shortbread version is just as classic."
    ],
    "substitutions": [
      {
        "forIngredientId": "jam",
        "swap": "Nutella, lemon curd, or a thumb-press of chocolate chips melted after baking",
        "savings": "Use whatever spread you already own instead of buying jam"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "skip entirely or roll in coarse sugar / sprinkles",
        "savings": "Saves the nut cost with no loss to texture"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter for a dairy-free batch",
        "savings": "Often similar price and avoids buying dairy butter"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 2,
      "carbs": 18,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "baking",
      "dessert",
      "shortbread",
      "jam",
      "holiday",
      "kid-friendly"
    ]
  },
  {
    "id": "bake-linzer-cookies",
    "name": "Linzer Cookies",
    "description": "Buttery almond shortbread sandwich cookies scented with cinnamon and lemon zest, filled with raspberry jam and finished with a snowfall of powdered sugar around a peekaboo window. A classic Austrian holiday cookie that tastes like a tiny Linzer torte.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 1,
        "note": "1 cup finely ground almond flour"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of 1 lemon"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "1/2 tsp ground cinnamon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "jam",
        "quantity": 10.67,
        "note": "about 2/3 cup seedless raspberry jam for filling"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.3,
        "note": "for dusting the tops"
      }
    ],
    "steps": [
      "Cream the softened butter and granulated sugar with a mixer on medium until pale and fluffy, 3 to 4 minutes. Beat in the egg, vanilla, and lemon zest until smooth.",
      "Whisk the all-purpose flour, almond flour, cinnamon, and salt together in a bowl, then add to the butter mixture in two additions, mixing on low just until a soft dough comes together. Do not overwork it.",
      "Divide the dough in half, flatten each into a disk, wrap in plastic, and chill at least 1 hour (or up to 2 days) until firm enough to roll.",
      "Roll one disk between two sheets of parchment to about 1/8 inch thick. Cut out rounds with a 2-inch fluted or round cutter; these are the bottoms. Re-roll scraps as needed.",
      "Roll and cut the second disk the same way, then use a small cutter to stamp a window out of the center of each of these tops. Transfer all cookies to parchment-lined sheets and chill 15 minutes so they hold their shape.",
      "Bake at 350F (175C) for 10 to 12 minutes, until the edges are just barely golden. The cut-out tops will bake a minute or two faster, so watch them. Cool completely on the pans.",
      "Dust only the window tops generously with powdered sugar while they sit on a rack (dusting first keeps sugar off the jam).",
      "Spread about 1 teaspoon raspberry jam over each solid bottom cookie, then gently press a sugared top onto each so the jam shows through the window.",
      "Let the assembled cookies set for 30 minutes so the jam firms up; they keep in an airtight tin for up to 5 days and the flavor deepens overnight."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 12,
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
      "Buy whole raw almonds and grind them in a blender with a spoonful of the recipe's flour to make your own almond flour for a fraction of the bagged price.",
      "Make a double batch of dough and freeze the extra disks for up to 3 months; slice-and-bake holiday cookies anytime.",
      "Re-roll every scrap of dough into plain rounds and bake them as cook's-treat shortbread so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "almond-flour",
        "swap": "Grind 1 cup whole almonds (or use walnut/hazelnut flour) to a fine meal",
        "savings": "~$2 vs bagged almond flour"
      },
      {
        "forIngredientId": "jam",
        "swap": "Any seedless preserves you have on hand (apricot or blackcurrant are traditional too)",
        "savings": "~$1 using pantry jam"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "1/4 tsp almond extract for a deeper marzipan note",
        "savings": "skip buying a fresh lemon"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 4,
      "carbs": 34,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-rose-100",
    "cuisine": "Austrian",
    "tags": [
      "cookies",
      "holiday",
      "baking",
      "sandwich-cookie",
      "raspberry",
      "almond",
      "dessert",
      "christmas"
    ]
  },
  {
    "id": "bake-french-madeleines",
    "name": "French Madeleines",
    "description": "Delicate shell-shaped French butter cakes with a golden crisp edge, a tender lemon-scented crumb, and the iconic plump hump that comes from chilling the batter. Made the proper way with beurre noisette (browned butter) for a deep, nutty richness.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "large, at room temperature"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup (125g) all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.75,
        "note": "3/4 tsp"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (113g), browned to beurre noisette"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of 1 lemon"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "1 tbsp, for tender crumb and color",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.05,
        "note": "for dusting",
        "optional": true
      }
    ],
    "steps": [
      "Make the beurre noisette: melt the butter in a light-colored saucepan over medium heat, swirling, until it foams, turns golden, and smells nutty with browned milk solids at the bottom, about 5-6 minutes. Pour into a bowl (scraping the brown bits) and let cool to just warm.",
      "Whisk the flour, baking powder, and salt together in a small bowl and set aside.",
      "In a larger bowl, whisk the eggs and granulated sugar vigorously for 2-3 minutes until pale, thick, and slightly foamy. Whisk in the lemon zest, vanilla, and honey.",
      "Gently fold the dry ingredients into the egg mixture with a spatula just until no streaks remain, then fold in the cooled browned butter in two additions until the batter is smooth and glossy.",
      "Cover the bowl and refrigerate the batter for at least 1 hour (up to overnight) — this cold rest is what creates the signature hump.",
      "Brush a madeleine pan generously with softened butter and dust lightly with flour, tapping out the excess; chill the pan while the oven heats to 410F (210C).",
      "Spoon or pipe about 1 tablespoon of cold batter into the center of each mold (do not spread it — let it spread on its own) and bake for 9-11 minutes, until the edges are golden and the centers have puffed into a domed hump.",
      "Immediately unmold by tapping the pan against the counter, then cool shell-side up on a rack. Dust with powdered sugar and serve the same day, ideally still slightly warm."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A madeleine pan is the only special tool you need and lasts forever — but in a pinch a mini-muffin tin makes great 'madeleine bites,' just bake 1-2 minutes less.",
      "Browning the butter is free and transforms cheap basic ingredients into a bakery-quality flavor, so never skip it.",
      "Use the leftover juiced lemon (after zesting) for tea or dressing so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon-zest",
        "swap": "Use orange zest, or 1/4 tsp almond extract instead of citrus",
        "savings": "Use a zest source you already have on hand"
      },
      {
        "forIngredientId": "honey",
        "swap": "Substitute an equal amount of granulated sugar or skip entirely",
        "savings": "Saves buying honey just for 1 tbsp"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Plain granulated cane sugar works identically",
        "savings": "Use the standard sugar already in your pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 2,
      "carbs": 14,
      "fat": 8,
      "fiber": 0
    },
    "emoji": "🐚",
    "accentColor": "bg-yellow-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "baking",
      "french",
      "pastry",
      "tea-cake",
      "butter-cake",
      "classic"
    ]
  },
  {
    "id": "bake-almond-biscotti",
    "name": "Almond Biscotti",
    "description": "Classic twice-baked Italian almond cookies — crisp, dry, and made for dunking in coffee or vin santo. A simple egg-and-flour dough studded with toasted whole almonds, scented with vanilla and almond extract, then baked as a log and sliced.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "all-purpose flour, ~2 cups"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "~1 cup granulated"
      },
      {
        "ingredientId": "almonds",
        "quantity": 0.5,
        "note": "1 cup whole, toasted"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.75,
        "note": "3/4 tsp — defines the flavor"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 0.25,
        "optional": true,
        "note": "zest of 1 lemon, brightens the dough"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C) and line a baking sheet with parchment. Spread the whole almonds on a separate tray and toast 8-10 minutes until fragrant, then let cool and roughly chop about half, leaving the rest whole.",
      "In a bowl, whisk together flour, sugar, baking powder, and salt. Stir in the toasted almonds so they are evenly distributed.",
      "In a separate bowl, beat the eggs with the vanilla, almond extract, and lemon zest. Reserve about 1 tablespoon of beaten egg for an egg wash.",
      "Pour the egg mixture into the dry ingredients and mix with a spatula, then your hands, until a stiff, slightly sticky dough forms. Do not add extra flour unless it is unworkable.",
      "Turn dough onto the parchment and shape into 2 logs about 3 inches wide and 3/4 inch tall, spaced apart. Brush the tops with the reserved egg wash for shine.",
      "Bake 25-30 minutes until firm, pale gold, and dry on top. Remove and lower the oven to 300F (150C). Let the logs cool 10-15 minutes — slicing hot causes crumbling.",
      "Transfer logs to a cutting board and, using a serrated knife, slice on a slight diagonal into 1/2-inch thick pieces with a firm sawing motion.",
      "Lay the slices cut-side down on the sheet and bake 10 minutes, then flip each one and bake 8-10 more minutes until crisp and dry. Cool completely on a rack — they harden as they cool. Store airtight up to 2 weeks."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 55,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy almonds in bulk and toast them yourself — pre-sliced or pre-toasted nuts cost far more per ounce.",
      "Biscotti keep crisp for 2+ weeks in an airtight tin, so one batch is a long-lasting snack — bake a double batch to halve your effort per cookie.",
      "Skip pricey vin santo; these dunk perfectly in cheap drip coffee or tea."
    ],
    "substitutions": [
      {
        "forIngredientId": "almonds",
        "swap": "Use slivered-almonds or any nut you have on hand (hazelnuts are traditional too)",
        "savings": "~$1.50 if subbing a cheaper bulk nut"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Double the vanilla extract if you don't keep almond extract",
        "savings": "~$0.40 per batch"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "Omit entirely or use orange zest from a fresh orange you already have",
        "savings": "~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 5,
      "carbs": 25,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "biscotti",
      "cookies",
      "twice-baked",
      "coffee",
      "make-ahead",
      "dairy-free",
      "dessert",
      "baking"
    ]
  },
  {
    "id": "bake-french-macarons",
    "name": "French Macarons",
    "description": "Delicate almond meringue shells with smooth feet and a glossy chocolate ganache filling. Made the classic French-meringue way: sifted almond flour and powdered sugar folded into a stiff meringue, piped, rested until skinned over, then baked low and slow for that signature ruffled foot.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "almond-flour",
        "quantity": 1.1,
        "note": "100g finely ground blanched almond flour"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.45,
        "note": "100g powdered sugar for the shells"
      },
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 0.35,
        "note": "75g egg whites (about 2-3 large), aged overnight and at room temperature"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.4,
        "note": "75g granulated sugar for the meringue"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "note": "1/4 tsp to stabilize the meringue"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "tiny pinch"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.7,
        "note": "100g good dark chocolate, finely chopped, for ganache"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.25,
        "note": "80ml heavy cream for ganache"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.1,
        "note": "15g softened butter for a glossy ganache"
      }
    ],
    "steps": [
      "Make the ganache first so it can set: heat the heavy cream until just steaming, pour over the finely chopped dark chocolate, let sit 1 minute, then stir from the center until smooth. Stir in the softened butter, cover, and chill until pipeable (about 1 hour).",
      "Sift the almond flour and powdered sugar together twice into a bowl, discarding any coarse bits. This is essential for smooth shells.",
      "Whip the room-temperature egg whites with the cream of tartar and a pinch of salt on medium until foamy, then add the granulated sugar a spoonful at a time. Increase speed and whip to a stiff, glossy meringue that holds a firm peak; beat in the vanilla.",
      "Add the sifted dry mix to the meringue and fold (macaronage): press the batter against the bowl and fold over, deflating just until it flows like slow lava and a ribbon dropped from the spatula sinks back in about 10-15 seconds. Do not overmix.",
      "Transfer to a piping bag with a round tip and pipe 1.5-inch rounds onto parchment-lined sheets, spacing them apart. Rap each sheet firmly on the counter a few times and pop any air bubbles with a toothpick.",
      "Let the piped shells rest at room temperature 30-60 minutes until a dry skin forms and they no longer feel tacky to a light touch. Meanwhile heat the oven to 300F (150C).",
      "Bake one sheet at a time for 16-18 minutes, until the shells have risen with ruffled feet and lift cleanly off the parchment. Cool completely before peeling them off.",
      "Pipe a dab of set ganache onto half the shells, top with matching shells, and twist gently to sandwich. For best texture, refrigerate in an airtight container 24 hours to mature, then bring to room temperature before serving."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 18,
    "difficulty": "hard",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy almond flour in bulk and store it in the freezer; it is the single biggest cost and stays fresh for months.",
      "Aged egg whites separated the day before and left covered in the fridge give a more stable meringue and fewer cracked shells, saving wasted batches.",
      "Use a reusable silicone mat with a printed template instead of buying special macaron sheets so every shell is the same size."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Fill with a simple buttercream (butter + powdered sugar) or store-bought jam instead of ganache",
        "savings": "Saves about $1.50 per batch versus good dark chocolate"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use coconut cream for the ganache",
        "savings": "Saves roughly $0.40 and works if you avoid dairy"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "A few drops of lemon juice stabilize the meringue just as well",
        "savings": "Saves buying a whole jar you rarely use"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 3,
      "carbs": 19,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍬",
    "accentColor": "bg-pink-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "baking",
      "macarons",
      "patisserie",
      "gluten-free",
      "make-ahead",
      "almond",
      "chocolate-ganache"
    ]
  },
  {
    "id": "bake-florentine-cookies",
    "name": "Florentine Cookies",
    "description": "Crisp, lacy almond cookies set with a buttery caramel of honey, sugar, and cream, then finished with a swipe of dark chocolate. Delicate, golden, and elegant — the classic Italian-French tea cookie.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.6,
        "note": "finely chopped or sliced almonds"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.5
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.3
      },
      {
        "ingredientId": "honey",
        "quantity": 0.15
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.2
      },
      {
        "ingredientId": "flour",
        "quantity": 0.1
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.05,
        "optional": true
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.5,
        "note": "for coating the backs"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment paper or silicone mats. Toss the chopped almonds with the flour and a pinch of salt in a bowl and set aside.",
      "In a small saucepan, combine the butter, sugar, honey, and heavy cream. Bring to a gentle boil over medium heat, stirring, until the mixture reaches 238F (soft-ball stage) or coats the back of a spoon, about 2 to 3 minutes.",
      "Remove from the heat and stir in the vanilla, then fold in the almond-flour mixture until evenly coated. Let the batter rest 2 to 3 minutes to thicken slightly.",
      "Drop level teaspoons of batter onto the lined sheets, spacing them at least 3 inches apart since they spread a lot. Flatten each slightly with the back of a spoon.",
      "Bake one sheet at a time for 8 to 10 minutes, until the cookies are bubbling, lacy, and deep golden-brown at the edges. Watch closely near the end to avoid burning.",
      "Let the cookies cool on the sheet for 5 minutes to firm up, then slide the parchment onto a rack and cool completely before peeling them off.",
      "Melt the dark chocolate gently (microwave in 20-second bursts, stirring). Spread a thin layer on the flat back of each cooled cookie.",
      "Drag a fork through the chocolate to make wavy lines, or sandwich two cookies back-to-back. Set chocolate-side up until firm, about 30 minutes."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy whole almonds and chop them yourself — they're far cheaper than pre-sliced and you control the texture.",
      "Skip the chocolate coating to save money; the lacy cookies are delicious plain with tea or coffee.",
      "Use chocolate chips you already have instead of a bar of dark chocolate for the coating."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use whole milk plus an extra teaspoon of butter",
        "savings": "Saves ~$1.50 if you skip buying a carton of cream"
      },
      {
        "forIngredientId": "honey",
        "swap": "Light corn syrup or maple syrup",
        "savings": "Corn syrup is cheaper per ounce than honey"
      },
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Semi-sweet chocolate chips",
        "savings": "Often $1-2 cheaper than a baking bar"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 2,
      "carbs": 16,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian-French",
    "tags": [
      "cookies",
      "almond",
      "lacy",
      "caramel",
      "chocolate",
      "dessert",
      "tea-time",
      "gluten-free",
      "holiday",
      "baking"
    ]
  },
  {
    "id": "bake-russian-tea-cakes",
    "name": "Russian Tea Cakes",
    "description": "Tender, buttery shortbread-style cookies packed with finely chopped pecans and rolled twice in powdered sugar so they look like little snowballs. They melt in your mouth and come together with five pantry staples.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks), unsalted, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup for dough, plus about 1 cup for rolling/coating"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup, very finely chopped"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C) and line two baking sheets with parchment paper.",
      "In a large bowl, beat the softened butter with 1/2 cup powdered sugar until light, pale, and fluffy, about 2 minutes. Beat in the vanilla.",
      "On low speed, gradually add the flour and salt, mixing just until a soft dough forms, then fold in the finely chopped pecans until evenly distributed.",
      "Scoop the dough into 1-inch balls (about 1 level tablespoon each) and roll between your palms until smooth; space them 1 inch apart on the prepared sheets.",
      "Bake for 12 to 14 minutes, until the bottoms are lightly golden but the tops are still pale. Let the cookies rest on the sheet for 5 minutes so they firm up.",
      "While the cookies are still warm, roll each one in the reserved powdered sugar to coat fully, then transfer to a rack to cool.",
      "Once completely cool, roll the cookies a second time in powdered sugar for the classic snowy, fully-coated finish."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 14,
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
      "Buy pecans or walnuts in bulk and toast a big batch at once; finely chopped nuts go further and taste richer.",
      "Make your own powdered sugar by blitzing granulated sugar with a teaspoon of cornstarch in a blender if you run out.",
      "The dough freezes well rolled into balls; bake straight from frozen, adding 1-2 minutes, so you only dirty one bowl per holiday season."
    ],
    "substitutions": [
      {
        "forIngredientId": "pecans",
        "swap": "Finely chopped walnuts or toasted almonds",
        "savings": "Walnuts often run cheaper than pecans and are just as traditional"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (vegan baking stick)",
        "savings": "Makes the cookies vegan-friendly at a similar price"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "1/2 tsp almond extract",
        "savings": "A little goes a long way, so one bottle lasts for dozens of batches"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 1,
      "carbs": 12,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Eastern European",
    "tags": [
      "cookies",
      "holiday",
      "shortbread",
      "snowball-cookies",
      "pecan",
      "baking",
      "dessert",
      "make-ahead"
    ]
  },
  {
    "id": "bake-blondies",
    "name": "Brown Butter Blondies",
    "description": "Dense, chewy, butterscotch-rich blondies built on browned butter and dark brown sugar, studded with chocolate chips and toasted walnuts. Crackly top, gooey center, and that deep toffee flavor a real blondie is all about — no cocoa, no cake-y crumb.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup / 2 sticks, browned"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 24,
        "note": "1.5 cups packed dark brown sugar"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs plus 1 yolk, room temp"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 16,
        "note": "1 cup"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.4,
        "optional": true,
        "note": "3/4 cup, toasted and chopped"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.05,
        "optional": true,
        "note": "for finishing"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C). Line an 8x8 or 9x9 metal pan with parchment, leaving an overhang on two sides, and lightly grease.",
      "Melt the butter in a light-colored saucepan over medium heat, swirling often. Keep cooking past the foaming stage until it smells nutty and the milk solids turn golden-brown, about 5-7 minutes. Pour into a large bowl (scrape in all the browned bits) and let cool 5-10 minutes until just warm.",
      "Whisk the dark brown sugar and granulated sugar into the warm butter until smooth and glossy. Add the eggs, extra yolk, and vanilla, then whisk vigorously for about 1 minute until the batter lightens slightly and looks emulsified.",
      "In a separate bowl, whisk together the flour, baking powder, and salt. Add to the wet ingredients and fold with a spatula just until no dry streaks remain — do not overmix.",
      "Fold in the chocolate chips and toasted walnuts, reserving a small handful to press on top.",
      "Scrape the thick batter into the pan and smooth into an even layer. Scatter the reserved chips and nuts over the top.",
      "Bake 24-28 minutes, until the top is set and golden with a few cracks and a toothpick in the center comes out with a few moist crumbs (not wet batter). The center should still look slightly underdone — that's the gooey texture.",
      "Sprinkle with flaky salt while warm. Cool completely in the pan, at least 1 hour, then lift out by the parchment and cut into 16 squares with a sharp knife."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 27,
    "difficulty": "medium",
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
      "Browning butter costs nothing and is the single biggest flavor upgrade — never skip it for a deeper toffee taste.",
      "Buy a baking chocolate bar and chop it instead of chips; it's usually cheaper per ounce and melts into better pools.",
      "Skip the extra yolk if you want — use 2 whole eggs. The yolk just adds a touch more chew."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use pecans or just leave nuts out and add more chocolate",
        "savings": "Saves about $1.50 per batch"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "White chocolate chips or chopped dark chocolate bar",
        "savings": "Bar chocolate often runs 20-30% cheaper per ounce"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus 1 tbsp molasses per cup",
        "savings": "Saves making a special trip for brown sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 3,
      "carbs": 31,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "baking",
      "brown butter",
      "chewy",
      "bars",
      "chocolate",
      "make-ahead"
    ]
  },
  {
    "id": "bake-magic-cookie-bars",
    "name": "Magic Cookie Bars",
    "description": "The classic \"seven layer\" bar: a buttery graham cracker crust layered with chocolate chips, shredded coconut, and toasted nuts, all glued together by a generous pour of sweetened condensed milk that bakes into a chewy, gooey caramel. No mixing bowl required - you just build it in the pan.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "graham-crackers",
        "quantity": 0.75,
        "note": "about 1.5 cups crumbs, ~12 full sheets"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick), melted"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "one 14 oz can"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 16,
        "note": "1 cup"
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 21.28,
        "note": "1.33 cups; sweetened flake is traditional if you have it"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "note": "1 cup, roughly chopped"
      },
      {
        "ingredientId": "white-chocolate-chips",
        "quantity": 8,
        "optional": true,
        "note": "1/2 cup for the butterscotch/white layer"
      }
    ],
    "steps": [
      "Heat oven to 350 F (325 F if using a glass pan). Line a 9x13-inch baking pan with foil or parchment, leaving an overhang on two sides so you can lift the bars out later.",
      "Crush the graham crackers into fine crumbs (a zip bag and rolling pin works) and stir together with the melted butter until the mixture looks like wet sand.",
      "Press the crumb mixture firmly and evenly into the bottom of the lined pan to form a compact crust; use the flat bottom of a measuring cup to pack it down.",
      "Scatter the chocolate chips evenly over the crust, followed by the optional white chocolate chips, then the chopped walnuts, and finally an even blanket of shredded coconut.",
      "Slowly and evenly drizzle the entire can of sweetened condensed milk over the top so it seeps into all the layers - do not stir.",
      "Bake for 25 to 30 minutes, until the coconut on top is golden brown and the edges are bubbling.",
      "Cool the pan completely on a rack, then chill at least 1 hour so the condensed milk sets - cutting warm gives a gooey mess.",
      "Lift out using the foil overhang and cut into 16 squares with a sharp knife, wiping the blade between cuts for clean edges."
    ],
    "totalTimeMinutes": 100,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 28,
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
      "Buy graham crackers, chips, and coconut from the bulk or store-brand aisle - name brands cost double for an identical bar.",
      "Toast the walnuts in the oven for 5 minutes while it preheats; it deepens their flavor so you can use less.",
      "One can of sweetened condensed milk makes a whole 9x13 pan of 16 bars, so the cost per square is tiny - great for a crowd."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use pecans (the classic 'Hello Dolly' nut) or cheaper chopped peanuts",
        "savings": "Peanuts cut the nut cost by about half"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "Any chocolate chips or chopped chocolate bar you have on hand",
        "savings": "Store-brand chips save ~$1.50 per bag"
      },
      {
        "forIngredientId": "graham-crackers",
        "swap": "Crushed digestive biscuits, vanilla wafers, or even crushed pretzels for the crust",
        "savings": "Stale leftover cookies cost nothing"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 3,
      "carbs": 28,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "bars",
      "no-mixer",
      "potluck",
      "chocolate",
      "coconut",
      "seven-layer",
      "hello-dolly",
      "make-ahead",
      "baking"
    ]
  },
  {
    "id": "bake-millionaires-shortbread",
    "name": "Millionaire's Shortbread",
    "description": "The classic British tray bake done right: a crisp, buttery shortbread base, a thick layer of proper stovetop caramel made from condensed milk and golden syrup cooked to a deep amber, and a snappy dark chocolate top. Cut into neat squares for the ultimate sweet treat.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "~1.5 cups plain flour for the shortbread base"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "unsalted; ~1/2 cup for base + 1/2 cup for caramel"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "~1/3 cup caster sugar for the shortbread"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "~1/2 cup light brown sugar for the caramel"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "one 14 oz can"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 4,
        "note": "~1/4 cup golden syrup (light corn syrup as substitute)"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 7,
        "note": "~7 oz, 50-60% cacao for the topping"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "pinch in base + caramel"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp, optional in caramel",
        "optional": true
      }
    ],
    "steps": [
      "Heat oven to 350F (175C) and line an 8x8 inch baking tin with parchment, leaving an overhang. For the base, rub or beat together the flour, 1/2 cup softened butter, the caster sugar, and a pinch of salt until it clumps into a soft dough.",
      "Press the dough firmly and evenly into the lined tin. Prick all over with a fork and bake for 20-25 minutes until pale golden. Set aside to cool.",
      "For the caramel, combine the remaining 1/2 cup butter, brown sugar, golden syrup (corn syrup), the full can of condensed milk, and a pinch of salt in a heavy saucepan over medium-low heat.",
      "Stir constantly as it melts, then bring to a gentle simmer. Keep stirring for 8-12 minutes until the mixture thickens and turns a deep golden caramel color (about 225F on a thermometer) and pulls cleanly from the pan base. Stir in the vanilla.",
      "Pour the hot caramel over the cooled shortbread, smooth the top, and chill in the fridge for at least 1 hour until fully set and firm.",
      "Melt the dark chocolate gently (microwave in 20-second bursts, stirring, or over a bain-marie) until smooth. Pour over the set caramel and tilt to cover evenly.",
      "Chill just until the chocolate is matte and almost set, about 15-20 minutes, so it can be cut without cracking. Lift out using the parchment overhang.",
      "Using a sharp knife warmed under hot water and wiped dry, trim the edges and cut into 16 neat squares. Store in an airtight container."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 35,
    "difficulty": "medium",
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
      "Store-brand condensed milk and chocolate are far cheaper than name brands and taste identical once baked.",
      "Light corn syrup stands in perfectly for pricier imported golden syrup in the caramel.",
      "One batch makes 16 squares, so the cost per piece is tiny compared to buying these from a bakery."
    ],
    "substitutions": [
      {
        "forIngredientId": "corn-syrup",
        "swap": "Use maple syrup or honey for the caramel binder",
        "savings": "Use a pantry sweetener you already own instead of buying golden/corn syrup"
      },
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Semi-sweet or milk chocolate chips, melted with a teaspoon of oil",
        "savings": "Saves ~$2 vs a bar of fine dark chocolate"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus a teaspoon of molasses",
        "savings": "Skip buying a separate bag of brown sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 3,
      "carbs": 36,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "dessert",
      "baking",
      "caramel",
      "chocolate",
      "tray bake",
      "shortbread",
      "make-ahead",
      "sweet"
    ]
  },
  {
    "id": "bake-lemon-crinkle-cookies",
    "name": "Lemon Crinkle Cookies",
    "description": "Soft, chewy lemon cookies bright with fresh zest and juice, rolled in granulated then powdered sugar so they crack into snowy crinkles as they bake. Tangy, tender, and barely sweet at the edges.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated, plus extra for rolling"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "lemon",
        "quantity": 2,
        "note": "for ~2 tbsp zest and 2 tbsp juice"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "about 1/2 cup, for rolling and the crinkle coat"
      }
    ],
    "steps": [
      "Zest both lemons until you have about 2 tablespoons, then juice them for 2 tablespoons of juice. In a small bowl, whisk together the flour, baking powder, baking soda, and salt.",
      "In a large bowl, beat the softened butter with the granulated sugar and lemon zest until light and fluffy, 2 to 3 minutes; rubbing the zest into the sugar releases its oils for maximum lemon flavor.",
      "Beat in the egg, lemon juice, and vanilla until smooth. The batter may look slightly curdled from the acid; that is fine.",
      "Add the dry ingredients and mix on low just until no streaks of flour remain. Do not overmix.",
      "Cover and chill the dough for at least 1 hour (up to overnight) so it firms up and the cookies hold their shape.",
      "Preheat the oven to 350F and line two baking sheets with parchment. Put granulated sugar in one shallow bowl and powdered sugar in another.",
      "Scoop tablespoon-sized balls of dough. Roll each first in granulated sugar, then coat generously in powdered sugar. The double coat is what gives sharp crinkles.",
      "Space the balls 2 inches apart and bake 10 to 12 minutes, until the tops are set and crackled but the centers still look soft. Do not let the edges brown.",
      "Cool on the sheet for 5 minutes, then transfer to a rack. They firm up as they cool and stay soft and chewy for days."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 12,
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
      "Fresh lemons do double duty here: zest for flavor and juice for tang, so two lemons replace any need for bottled extract.",
      "Chilling the dough is free and non-negotiable; warm dough spreads flat and loses the crinkle, wasting your ingredients.",
      "Roll in granulated sugar before the powdered sugar; it keeps the powder from dissolving into the dough so the cracks stay bright white."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon",
        "swap": "Use 1 lemon plus 1 tbsp bottled lemon juice if fresh lemons are pricey",
        "savings": "~$0.60"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar with a pinch of cornstarch in a blender to make your own",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "Skip it; the lemon carries the flavor on its own",
        "savings": "~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 95,
      "protein": 1,
      "carbs": 16,
      "fat": 3,
      "fiber": 0
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "lemon",
      "dessert",
      "baking",
      "crinkle",
      "citrus",
      "bake-sale"
    ]
  },
  {
    "id": "bake-chocolate-crinkle-cookies",
    "name": "Chocolate Crinkle Cookies",
    "description": "Fudgy, brownie-like chocolate cookies rolled in powdered sugar that cracks into a snowy crinkle pattern as they bake. The dough is chilled so it bakes up thick and chewy with crisp, sugar-dusted edges.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "cocoa-powder",
        "quantity": 16,
        "note": "1 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "1/2 cup neutral oil"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup confectioners' sugar for rolling"
      }
    ],
    "steps": [
      "In a large bowl, whisk together the cocoa powder, granulated sugar, and oil until it forms a thick, sandy paste.",
      "Beat in the eggs one at a time, then stir in the vanilla, mixing until the batter is smooth and glossy.",
      "In a separate bowl, whisk together the flour, baking powder, and salt, then fold the dry ingredients into the wet until a soft, sticky dough forms.",
      "Cover the dough and chill in the refrigerator for at least 4 hours (or overnight) so it firms up enough to roll and holds its crinkle shape.",
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment paper. Put the powdered sugar in a shallow bowl.",
      "Scoop tablespoon-sized portions of cold dough, roll into balls, then roll each generously in powdered sugar until fully coated with a thick layer.",
      "Place the balls 2 inches apart on the sheets and bake for 10 to 12 minutes, until the tops are cracked and the edges are set but the centers still look slightly soft.",
      "Let the cookies cool on the pan for 5 minutes to finish setting, then transfer to a wire rack to cool completely."
    ],
    "totalTimeMinutes": 285,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 12,
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
      "Buy cocoa powder in bulk - it is far cheaper per ounce than small baking tins and keeps for a year.",
      "Neutral oil keeps these fudgy without the cost of butter, and store-brand oil works perfectly here.",
      "Chilling overnight means you can prep the dough one day and bake fresh the next, splitting the work."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Melted butter for a richer flavor",
        "savings": "Costs slightly more but adds depth"
      },
      {
        "forIngredientId": "cocoa-powder",
        "swap": "Dutch-process cocoa for a darker, smoother color",
        "savings": "Similar price, more dramatic crackle contrast"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Light brown sugar for chewier cookies",
        "savings": "Same cost, adds molasses note"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 2,
      "carbs": 24,
      "fat": 4,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cookies",
      "chocolate",
      "dessert",
      "baking",
      "holiday",
      "kid-friendly",
      "make-ahead"
    ]
  },
  {
    "id": "bake-no-knead-dutch-oven-bread",
    "name": "No-Knead Dutch Oven Bread",
    "description": "A bakery-style artisan loaf with a crackly, blistered crust and an open, chewy crumb — made with just flour, water, yeast, and salt. No kneading, no machine: a slow overnight ferment does the work, and a preheated Dutch oven traps steam for that crust.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.33,
        "note": "430g bread flour (or all-purpose); ~3 1/3 cups"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "345g lukewarm water (~1 1/2 cups), about 70-75% hydration"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 0.5,
        "note": "1/2 tsp instant yeast; uses only a tiny pinch for the long cold ferment"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1 1/2 tsp fine salt (~9g)"
      },
      {
        "ingredientId": "cornmeal",
        "quantity": 0.02,
        "optional": true,
        "note": "for dusting the parchment so the loaf releases cleanly"
      }
    ],
    "steps": [
      "In a large bowl, whisk together the flour, instant yeast, and salt. Add the lukewarm water and stir with a spatula or your hand until no dry flour remains — it will be a shaggy, sticky, wet dough. Do not knead.",
      "Cover the bowl tightly with plastic wrap or a lid and leave at room temperature for 12 to 18 hours, until the surface is bubbly and the dough has roughly doubled and looks loose and webbed. A longer rise builds more flavor.",
      "Generously flour a work surface and scrape the dough out onto it. With floured hands, fold the dough over onto itself 3 or 4 times to shape it into a loose round, then flip it seam-side down and tuck the edges under to build surface tension.",
      "Place the shaped dough seam-side down on a sheet of parchment dusted with cornmeal or flour. Cover loosely with a towel and let rise 1 to 2 hours, until puffy and slowly springing back when poked.",
      "About 30 minutes before baking, set a heavy Dutch oven (with its lid) on the middle rack and preheat the oven to 475F (245C) so the pot gets blazing hot.",
      "Carefully remove the hot Dutch oven. Score the top of the loaf with a sharp blade or knife (one deep slash or a cross), then lift the dough by the parchment and lower it, parchment and all, into the pot.",
      "Cover with the lid and bake 30 minutes. The trapped steam sets a thin, glossy crust and lets the loaf spring up.",
      "Remove the lid and bake another 12 to 18 minutes, until the crust is deep golden brown and the loaf sounds hollow when tapped (internal temp about 205-210F).",
      "Lift the bread out by the parchment and cool on a wire rack for at least 1 hour before slicing — cutting too soon makes the crumb gummy."
    ],
    "totalTimeMinutes": 1005,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Flour, water, yeast, and salt cost pennies per loaf — homemade artisan bread is a fraction of the $5-7 bakery price.",
      "Buy yeast in a jar or a brick instead of single packets; stored in the freezer it lasts a year and costs far less per use.",
      "All-purpose flour works fine if you don't have bread flour — the crumb is slightly less chewy but still excellent."
    ],
    "substitutions": [
      {
        "forIngredientId": "instant-yeast",
        "swap": "active-dry-yeast (use the same amount; the long rise gives it plenty of time to activate)",
        "savings": "Often cheaper and more widely stocked"
      },
      {
        "forIngredientId": "flour",
        "swap": "swap up to 1/3 of the flour for whole-wheat-flour for a heartier, nuttier loaf",
        "savings": "Roughly the same cost, more fiber"
      },
      {
        "forIngredientId": "cornmeal",
        "swap": "extra flour or a sheet of plain parchment",
        "savings": "Skip buying cornmeal entirely"
      }
    ],
    "estimatedNutrition": {
      "calories": 170,
      "protein": 6,
      "carbs": 35,
      "fat": 1,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Artisan / European",
    "tags": [
      "bread",
      "no-knead",
      "artisan",
      "baking",
      "vegan",
      "overnight",
      "dutch-oven",
      "crusty"
    ]
  },
  {
    "id": "bake-french-baguette",
    "name": "French Baguette",
    "description": "A classic lean French baguette with a deeply caramelized, crackly crust and an open, custardy crumb. Just four ingredients — flour, water, yeast, and salt — plus a slow cold fermentation for real bakery flavor.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "bread flour preferred (~500g); all-purpose works"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "~375g lukewarm, for ~75% hydration"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 1,
        "note": "~1 tsp instant/active dry yeast"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "~10g fine sea salt"
      }
    ],
    "steps": [
      "Whisk 500g flour with 1 tsp instant yeast, then add 375g lukewarm water and mix with a spatula until no dry flour remains. Cover and rest 20 minutes (autolyse) so the flour fully hydrates.",
      "Sprinkle 10g salt over the dough and mix it in by squeezing and folding until smooth and tacky. Cover the bowl.",
      "Over the next 1.5 hours, do 3 sets of stretch-and-folds spaced ~30 minutes apart: wet your hand, lift one side of the dough, and fold it over the center, rotating the bowl. The dough should become smooth and elastic.",
      "Cover tightly and refrigerate 12-24 hours. This cold fermentation builds the deep flavor and easier-to-shape dough that define a real baguette.",
      "Turn the dough onto a lightly floured counter and divide into 3 pieces. Gently pre-shape each into a loose log and rest 15 minutes, seam-side down, covered.",
      "Shape each piece into a baguette: flatten gently, fold the top third down and seal, then the bottom up and seal, then roll into a 14-inch rope with tapered ends. Set seam-side down in a floured couche or parchment folds and proof 45-60 minutes until puffy.",
      "An hour before baking, place a baking stone or inverted sheet pan and an empty metal pan on the bottom rack, and preheat the oven to 475F (245C). Transfer the baguettes to parchment and score each 3-4 times with a sharp blade at a shallow 30-degree angle.",
      "Slide the loaves into the oven, pour 1 cup of hot water into the empty pan, and shut the door fast to trap the steam. Bake 20-25 minutes until deep golden brown and hollow-sounding when tapped.",
      "Cool on a rack at least 30 minutes so the crumb sets and the crust crackles before slicing."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 65,
    "cookTimeMinutes": 25,
    "difficulty": "hard",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Baguettes are basically free to make — a 5 lb bag of flour yields a dozen-plus loaves for pennies each versus $3-4 at a bakery.",
      "No couche or baking stone needed: proof in folds of parchment and bake on an inverted, preheated sheet pan for the same crust.",
      "Day-old baguette never goes to waste — revive it with a 5-minute splash-and-bake, or turn it into croutons, breadcrumbs, or French toast."
    ],
    "substitutions": [
      {
        "forIngredientId": "instant-yeast",
        "swap": "Use active dry yeast 1:1, bloomed in the warm water for 5 minutes first",
        "savings": "Often cheaper in bulk jars than single packets"
      },
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour instead of bread flour (crumb is slightly less chewy)",
        "savings": "Saves ~30% vs specialty bread flour"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 8,
      "carbs": 47,
      "fat": 1,
      "fiber": 2
    },
    "emoji": "🥖",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "bread",
      "baking",
      "french",
      "artisan",
      "vegan",
      "4-ingredient",
      "from-scratch"
    ]
  },
  {
    "id": "bake-brioche-loaf",
    "name": "Brioche Loaf",
    "description": "A classic French brioche: a tender, golden, feather-light enriched bread laced with butter and eggs. A long cold proof deepens the flavor and makes the rich dough easy to shape, while a glossy egg wash gives that signature mahogany crust. Pull-apart soft with a delicate, almost cake-like crumb.",
    "mealType": "breakfast",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "bread flour preferred for structure, ~2.5 cups / 350g"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp / 40g"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1.5 tsp fine sea salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "3 for dough + 1 for egg wash, room temperature"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.19,
        "note": "lukewarm, ~3 tbsp / 45ml"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "unsalted, softened but cool, ~10 tbsp / 140g"
      },
      {
        "ingredientId": "honey",
        "quantity": 0.33,
        "optional": true,
        "note": "1 tsp, for the egg wash glaze"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "optional": true,
        "note": "0.5 tsp, optional aromatic"
      }
    ],
    "steps": [
      "In a stand mixer with the dough hook, combine the flour, instant yeast, sugar, and salt. Add 3 eggs, the lukewarm milk, and vanilla if using. Mix on low until a shaggy dough forms, then knead on medium for 8-10 minutes until smooth, elastic, and pulling away from the bowl.",
      "With the mixer on medium-low, add the softened butter one tablespoon at a time, letting each piece fully incorporate before adding the next. The dough will look greasy and loose at first; keep kneading 8-10 more minutes until it is glossy, smooth, and passes the windowpane test (stretches thin without tearing).",
      "Scrape the dough into a buttered bowl, cover, and let rise at room temperature for 1 to 1.5 hours until nearly doubled. Then deflate gently, cover tightly, and refrigerate at least 4 hours or overnight; the cold firms the butter so the rich dough can be shaped.",
      "Turn the cold dough onto a lightly floured surface and divide into 4 equal pieces. Shape each into a tight ball by tucking the edges underneath, then nestle the four balls in a row into a buttered 9x5 inch loaf pan.",
      "Cover loosely and proof at warm room temperature for 1.5 to 2.5 hours, until the dough has risen just above the rim of the pan and feels pillowy. Near the end, heat the oven to 350F (175C).",
      "Whisk the remaining egg with the honey and a splash of water, then gently brush a thin, even coat over the loaf for a deep, glossy crust.",
      "Bake for 30-38 minutes until richly golden brown and the internal temperature reads 190F (88C). Tent loosely with foil if the top darkens too fast.",
      "Let the loaf cool in the pan for 10 minutes, then turn out onto a rack and cool completely before slicing so the tender crumb sets."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 35,
    "difficulty": "hard",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein"
    ],
    "cheapTips": [
      "Brioche is just flour, eggs, and butter elevated by technique, so buy the cheapest store-brand bread flour; the long cold proof does the flavor work for free.",
      "Stale brioche is the best French toast and bread pudding there is, so never toss leftovers; the rich crumb soaks up custard beautifully.",
      "Use the overnight cold proof to split the work across two days, which means no single long session and a more forgiving, better-flavored dough."
    ],
    "substitutions": [
      {
        "forIngredientId": "instant-yeast",
        "swap": "Use active dry yeast at the same amount, but bloom it in the lukewarm milk for 5-10 minutes first.",
        "savings": "About the same"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk you have on hand, or even water, works since it is a small amount.",
        "savings": "Save ~$0.30 using water"
      },
      {
        "forIngredientId": "honey",
        "swap": "Skip the honey and brush with just egg plus a splash of water.",
        "savings": "Save ~$0.20"
      }
    ],
    "estimatedNutrition": {
      "calories": 275,
      "protein": 7,
      "carbs": 30,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "brioche",
      "enriched bread",
      "baking",
      "breakfast",
      "buttery",
      "french",
      "from scratch"
    ]
  },
  {
    "id": "bake-challah-bread",
    "name": "Challah Bread",
    "description": "A classic braided egg bread with a glossy mahogany crust and a soft, faintly sweet, pillowy crumb. Enriched with eggs and oil, it pulls apart in tender strands and is just as good warm with butter as it is sliced for French toast the next day.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "about 4 cups bread or all-purpose flour"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (1 packet)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "3 for dough, 1 reserved for egg wash"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 5.33,
        "note": "about 1/3 cup neutral oil"
      },
      {
        "ingredientId": "honey",
        "quantity": 4,
        "note": "about 1/4 cup; or substitute sugar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp to feed the yeast"
      },
      {
        "ingredientId": "salt",
        "quantity": 2,
        "note": "about 2 tsp"
      },
      {
        "ingredientId": "water",
        "quantity": 0.75,
        "note": "3/4 cup warm water (100-110F)"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 0.1,
        "optional": true,
        "note": "or poppy seeds, for topping"
      }
    ],
    "steps": [
      "In a large bowl, stir the warm water (100-110F) with the sugar and yeast; let sit 5-10 minutes until foamy. If it does not foam, your yeast is dead-start over with fresh yeast.",
      "Whisk in the honey, oil, and 3 of the eggs until smooth. Add the salt, then add the flour about a cup at a time, stirring until a shaggy dough forms.",
      "Knead on a lightly floured surface 8-10 minutes (or 6-7 minutes with a stand mixer dough hook) until the dough is smooth, elastic, and slightly tacky but not sticky. Add flour only a tablespoon at a time if needed.",
      "Place the dough in an oiled bowl, turn to coat, cover, and let rise in a warm spot 1.5 to 2 hours, until doubled in size.",
      "Punch down the dough and divide it into 3 (or 6) equal ropes, rolling each into a strand about 16 inches long, slightly tapered at the ends. Pinch the tops together and braid snugly, then pinch the bottom ends and tuck both ends under.",
      "Transfer the braid to a parchment-lined baking sheet, cover loosely, and let it proof 45-60 minutes until puffy and nearly doubled. Meanwhile, heat the oven to 350F.",
      "Beat the reserved egg with a teaspoon of water and brush the loaf thoroughly, getting into the crevices. Sprinkle with sesame or poppy seeds if using.",
      "Bake 25-32 minutes until deep golden brown and the loaf sounds hollow when tapped (internal temp 190F). Tent with foil if it browns too fast.",
      "Cool on a rack at least 30 minutes before slicing so the crumb sets."
    ],
    "totalTimeMinutes": 220,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 30,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Challah is mostly flour, water, and eggs-the cheapest bread you can bake from scratch, costing a fraction of a bakery loaf.",
      "Use sugar instead of honey to feed the yeast and sweeten the dough if honey is pricey; the result is nearly identical.",
      "Stale challah is the best French toast or bread pudding base, so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "Use an equal amount of plain white sugar or maple syrup",
        "savings": "~$0.40 per loaf"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Any neutral oil like canola or melted butter (note: butter makes it non-dairy-free)",
        "savings": "negligible"
      },
      {
        "forIngredientId": "sesame-seeds",
        "swap": "Poppy seeds or leave the top plain",
        "savings": "~$0.20"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 6,
      "carbs": 38,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Jewish",
    "tags": [
      "bread",
      "baking",
      "braided",
      "egg bread",
      "shabbat",
      "from-scratch",
      "yeast"
    ]
  },
  {
    "id": "bake-japanese-milk-bread-shokupan",
    "name": "Japanese Milk Bread (Shokupan)",
    "description": "Cloud-soft, pillowy Japanese white bread made with a tangzhong (cooked flour-and-milk roux) that locks in moisture for a tender, feathery crumb that stays fresh for days. Lightly sweet, faintly milky, and perfect for toast, sandwiches, or pulling apart warm.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.8,
        "note": "bread flour preferred for chew and rise; ~360g total including the tangzhong portion"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "warm; split between tangzhong and dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "about 7g / 2 tsp"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "about 50g / 1/4 cup"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "about 6g / 1 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 in dough + reserve a little beaten egg for the egg wash"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.2,
        "note": "softened, unsalted; about 40g, added after the dough comes together"
      }
    ],
    "steps": [
      "Make the tangzhong: whisk 20g of the flour with 50g milk and 50g water in a small saucepan over medium heat, stirring constantly until it thickens into a smooth pudding-like paste (about 65 C / 149 F). Scrape into a bowl and cool to room temperature.",
      "In a large bowl or stand-mixer bowl, combine the remaining flour, sugar, instant yeast, and salt. Add the cooled tangzhong, the rest of the warm milk (about 120g), and 1 egg. Mix until a shaggy dough forms.",
      "Knead on medium for 10-12 minutes (or 15-20 by hand) until smooth and elastic, then add the softened butter a little at a time and knead another 8-10 minutes until the dough is glossy and passes the windowpane test (stretches thin without tearing).",
      "Shape into a ball, place in a greased bowl, cover, and let rise in a warm spot for 60-90 minutes until doubled.",
      "Punch down gently, divide into 3 equal pieces, roll each into an oval, fold into thirds, then roll up into a tight cylinder. Place the three rolls seam-side down side by side in a greased loaf or pullman pan.",
      "Cover and proof again for 45-60 minutes until the dough crests just below (open-top) or near the rim of the pan and springs back slowly when poked.",
      "Brush the tops gently with the reserved beaten egg for a glossy crust. Bake in an oven preheated to 180 C / 350 F for 30-35 minutes until deep golden and the loaf sounds hollow when tapped.",
      "Immediately turn the loaf out of the pan onto a rack and cool completely before slicing so the crumb sets and stays fluffy."
    ],
    "totalTimeMinutes": 210,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 35,
    "difficulty": "medium",
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
      "A bag of flour and a little milk make two loaves for the price of one store-bought shokupan, which is often $6-8 a loaf.",
      "Buy instant yeast in a jar or vacuum brick instead of single packets, it's far cheaper per loaf and keeps for months in the freezer.",
      "No pullman pan needed, any standard loaf pan works, just don't overfill it so the dough has room to crown."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use water plus a spoonful of milk powder, or any milk you already have",
        "savings": "Saves buying milk just for one bake"
      },
      {
        "forIngredientId": "butter",
        "swap": "Neutral oil or softened margarine works in a pinch",
        "savings": "Saves ~$1 vs a stick of butter"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Skip the egg and brush the top with a little milk instead",
        "savings": "Saves an egg and still browns nicely"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 5,
      "carbs": 28,
      "fat": 4,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "bread",
      "baking",
      "tangzhong",
      "enriched dough",
      "fluffy",
      "sandwich bread",
      "from scratch"
    ]
  },
  {
    "id": "bake-soft-pretzels",
    "name": "Soft Pretzels",
    "description": "Chewy, golden Bavarian-style soft pretzels with a deeply browned crust and tender interior. A baking-soda bath gives them that signature mahogany color and pretzel-shop flavor, finished with a sheen of egg wash and a shower of coarse salt.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4.5,
        "note": "all-purpose or bread flour (cups)"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "1 packet / 2.25 tsp"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "warm, ~110F (cups for dough)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 1,
        "note": "1 tbsp to feed the yeast"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "4 tbsp melted, in dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 2,
        "note": "2 tsp fine salt in dough"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 32,
        "note": "2/3 cup for the boiling bath"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "beaten with 1 tbsp water for wash"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.2,
        "note": "coarse pretzel salt for topping"
      }
    ],
    "steps": [
      "Stir the warm water, brown sugar, and yeast together and let sit 5 minutes until foamy. Add the melted butter, fine salt, and flour, then mix and knead 8-10 minutes (by hand or stand mixer) until you have a smooth, slightly tacky, elastic dough.",
      "Cover and let rise in a greased bowl 45-60 minutes until doubled. Meanwhile heat the oven to 450F and line two sheet pans with parchment.",
      "Punch down and divide the dough into 8 equal pieces. Roll each into a 22-24 inch rope, thinner at the ends and a bit thicker in the middle.",
      "Shape each rope into a U, cross the ends twice to make a twist, then fold the ends down onto the bottom curve and press to seal into the classic pretzel shape.",
      "Bring 9 cups water to a gentle boil in a wide pot and carefully whisk in the baking soda (it will fizz). Boil each pretzel 30 seconds, lift out with a slotted spoon, and drain.",
      "Set the boiled pretzels back on the parchment, brush all over with the beaten egg wash, and sprinkle generously with coarse salt.",
      "Bake 12-15 minutes until deeply golden brown and glossy, rotating the pans halfway through.",
      "Cool a few minutes on a rack and serve warm, ideally with mustard or cheese sauce."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
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
      "Flour, yeast, and water are pennies per pretzel — this is one of the cheapest from-scratch snacks you can make.",
      "Baking soda from the baking aisle works perfectly for the bath; no need for food-grade lye.",
      "Freeze baked pretzels, then reheat 3-4 minutes at 350F so a big batch lasts all week."
    ],
    "substitutions": [
      {
        "forIngredientId": "instant-yeast",
        "swap": "Active dry yeast, proofed first in the warm water until foamy",
        "savings": "Use whatever yeast you already have; same cost"
      },
      {
        "forIngredientId": "flaky-sea-salt",
        "swap": "Crushed kosher salt or any coarse salt",
        "savings": "Saves buying specialty pretzel salt"
      },
      {
        "forIngredientId": "butter",
        "swap": "Neutral oil or melted plant butter",
        "savings": "Makes them dairy-free at no extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 8,
      "carbs": 53,
      "fat": 4,
      "fiber": 2
    },
    "emoji": "🥨",
    "accentColor": "bg-amber-100",
    "cuisine": "German",
    "tags": [
      "pretzel",
      "baking",
      "snack",
      "bavarian",
      "from-scratch",
      "yeast-dough",
      "vegetarian"
    ]
  },
  {
    "id": "bake-homemade-bagels",
    "name": "Homemade Bagels",
    "description": "Chewy, glossy New York-style bagels made from scratch with a stiff, low-hydration dough. The defining move is a quick boil in baking-soda-and-honey water before baking, which sets the crust and gives that classic dense, chewy bite. Top with everything seasoning or leave them plain.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4.5,
        "note": "high-gluten or bread flour, about 4.5 cups"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant/rapid-rise yeast"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "note": "2 tbsp total: ~1 tbsp in dough (or use barley malt syrup), 1 tbsp in boiling water"
      },
      {
        "ingredientId": "salt",
        "quantity": 2.5,
        "note": "2 1/2 tsp fine salt"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "~1 1/2 cups warm water for the dough"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 6,
        "note": "2 tbsp for the boiling water bath"
      },
      {
        "ingredientId": "everything-bagel",
        "quantity": 0.3,
        "optional": true,
        "note": "everything bagel seasoning for topping"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "optional": true,
        "note": "1 egg beaten for egg wash so toppings stick"
      }
    ],
    "steps": [
      "Make the dough: In a large bowl, stir together the bread flour, instant yeast, and salt. Add 1 tablespoon honey and the warm water, then mix into a shaggy mass. The dough should be quite stiff and dry, not sticky; add water 1 teaspoon at a time only if there's dry flour left.",
      "Knead vigorously on an unfloured counter for 8-10 minutes until smooth and very firm. Stiff bagel dough is hard work; rest it for 2 minutes mid-knead if it fights back. Place in a lightly oiled bowl, cover, and let rise 1 to 1.5 hours until puffy but not doubled.",
      "Divide and shape: Punch down and divide into 8 equal pieces (about 113 g each). Roll each into a tight ball, then poke a thumb through the center and gently stretch the hole to about 1.5 inches wide, since it will shrink as it proofs and bakes.",
      "Proof and chill: Place shaped bagels on a parchment-lined, lightly oiled tray. Cover and rest 20-30 minutes until slightly puffy. For best flavor and crust, refrigerate uncovered 8-24 hours; otherwise proceed once they float (drop one in water to test).",
      "Boil: Bring a wide pot of water to a gentle boil and add 2 tablespoons baking soda plus 1 tablespoon honey. Boil bagels 2-4 at a time, 60 seconds per side for chewy, 30 seconds for softer. Lift out with a slotted spoon and drain briefly.",
      "Top: Transfer boiled bagels to a parchment-lined baking sheet. While still wet (or brushed with beaten egg wash), sprinkle generously with everything bagel seasoning, pressing lightly so it adheres.",
      "Bake at 450F (230C) for 18-22 minutes, rotating the pan halfway, until deep golden brown and the crust sounds hollow when tapped.",
      "Cool on a wire rack at least 20 minutes before slicing; bagels finish setting their crumb as they cool, so cutting too early makes them gummy."
    ],
    "totalTimeMinutes": 160,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 22,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Bagels are basically flour, water, yeast, and salt, so a batch of 8 costs a fraction of buying them at a bakery or cafe.",
      "Skip the egg wash and use the honey-boil water alone; toppings still stick reasonably well and you save an egg.",
      "Freeze cooled bagels in a zip bag; pre-slice them first so you can drop halves straight into the toaster from frozen."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "Barley malt syrup (the traditional bagel sweetener) or plain sugar",
        "savings": "Sugar is cheaper and you likely already have it"
      },
      {
        "forIngredientId": "everything-bagel",
        "swap": "Make your own with sesame seeds, poppy seeds, dried garlic, dried onion, and flaky salt",
        "savings": "Saves buying a pre-mixed seasoning blend"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Active dry yeast, bloomed in the warm water for 5 minutes first",
        "savings": "Use whatever yeast is already in your pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 270,
      "protein": 9,
      "carbs": 54,
      "fat": 1.5,
      "fiber": 2
    },
    "emoji": "🥯",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Jewish-American)",
    "tags": [
      "bagels",
      "bread",
      "baking",
      "breakfast",
      "from-scratch",
      "everything-bagel",
      "boiled-then-baked",
      "yeasted"
    ]
  },
  {
    "id": "bake-dinner-rolls",
    "name": "Soft Pull-Apart Dinner Rolls",
    "description": "Pillowy, buttery, golden-topped dinner rolls baked in a single pan so they pull apart in soft, fluffy clouds. An enriched milk-and-butter dough with a touch of egg gives them a tender crumb and a faint sweetness — the kind you tear into warm at the table.",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "about 3 1/2 cups all-purpose or bread flour"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (1 packet)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup, warmed to ~110F"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp total: 4 in dough, 2 melted for brushing"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large, room temperature"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 3,
        "note": "3 tbsp"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 1.25,
        "note": "1 1/4 tsp"
      },
      {
        "ingredientId": "honey",
        "quantity": 0.33,
        "optional": true,
        "note": "1 tsp brushed on top for shine (optional)"
      }
    ],
    "steps": [
      "Warm the milk to about 110F (lukewarm, not hot). Stir in the sugar and yeast and let it sit 5-10 minutes until foamy. If it does not foam, the yeast is dead or the milk was too hot — start over.",
      "In a large bowl, whisk together the flour and salt. Add the foamy milk mixture, the egg, and 4 tbsp softened butter. Mix until a shaggy dough forms.",
      "Knead 8-10 minutes by hand (or 5-6 minutes in a stand mixer with the dough hook) until the dough is smooth, elastic, and slightly tacky but not sticky. Add flour a tablespoon at a time only if needed.",
      "Place the dough in a lightly oiled bowl, cover, and let rise in a warm spot for 60-90 minutes, until doubled in size.",
      "Punch down the dough and divide into 12 equal pieces (about 65g each). Shape each into a tight ball by cupping and dragging it against the counter to build surface tension, then arrange in a buttered 9x13 inch pan.",
      "Cover loosely and let the rolls proof a second time for 30-45 minutes, until puffy and touching. Meanwhile, heat the oven to 375F.",
      "Bake 18-22 minutes, until the tops are deep golden brown and the internal temperature reaches about 190F. Rotate the pan halfway through for even color.",
      "Brush the warm rolls generously with the remaining 2 tbsp melted butter (and honey, if using) for a glossy, soft top. Cool 5 minutes, then pull apart and serve warm."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 20,
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
      "Flour, yeast, milk and butter are pantry staples — a full pan of 12 rolls costs a fraction of store-bought bakery rolls.",
      "Buy yeast in a jar rather than packets; it is far cheaper per use and keeps for months in the freezer.",
      "Make a double batch and freeze baked rolls — reheat at 300F for 5 minutes and they taste fresh."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "oat-milk or water plus a splash of any milk",
        "savings": "~$0.30/batch and makes them dairy-lighter"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "active-dry-yeast (proof it fully in the warm milk first)",
        "savings": "use whatever you already have, no cost"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "honey or maple syrup (reduce milk slightly)",
        "savings": "pantry swap, no extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 5,
      "carbs": 29,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "bread",
      "baking",
      "side",
      "holiday",
      "yeast",
      "from-scratch",
      "pull-apart",
      "comfort-food"
    ]
  },
  {
    "id": "bake-irish-soda-bread",
    "name": "Irish Soda Bread",
    "description": "A rustic, no-yeast quick bread leavened by buttermilk reacting with baking soda. The crust is crackly and the crumb is tender and slightly tangy, studded with sweet raisins and aromatic caraway. Mix it fast, cut the cross, and bake — it goes from bowl to oven in minutes.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "all-purpose flour, about 4 cups / 500g"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp, optional for a slightly sweeter loaf",
        "optional": true
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "3 tbsp cold, cut into cubes"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1.75,
        "note": "about 1.75 cups / 420ml"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large, lightly beaten"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "note": "about 1 cup"
      },
      {
        "ingredientId": "caraway-seeds",
        "quantity": 3,
        "note": "1 tbsp",
        "optional": true
      }
    ],
    "steps": [
      "Preheat the oven to 425F (220C) and line a baking sheet with parchment, or dust a cast-iron skillet with flour.",
      "In a large bowl, whisk together the flour, baking soda, salt, and sugar so the leavening is evenly distributed.",
      "Add the cold cubed butter and rub it into the flour with your fingertips until the mixture looks like coarse crumbs, then stir in the raisins and caraway seeds.",
      "In a separate bowl, whisk the buttermilk with the egg, then pour into the dry ingredients and stir with a wooden spoon just until a shaggy, sticky dough forms — do not overmix or knead, as that toughens the crumb.",
      "Turn the dough onto a lightly floured surface and gently shape it into a round about 8 inches wide with as few movements as possible; the surface will be rough, which is correct.",
      "Set the round on the baking sheet and, with a sharp knife, cut a deep cross about three-quarters into the top — this lets heat penetrate and helps it bake through.",
      "Bake for 15 minutes at 425F, then lower the heat to 400F (200C) and bake another 25 to 30 minutes, until deep golden and hollow-sounding when tapped on the bottom.",
      "Cool on a wire rack for at least 30 minutes before slicing; soda bread is best eaten the day it is baked, ideally with butter."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 45,
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
      "No buttermilk? Make your own: stir 1 tbsp lemon juice or white vinegar into 1 cup of milk and let it sit 5 minutes until curdled — it activates the baking soda just the same.",
      "Skip the raisins and caraway entirely for a plain everyday soda bread; the four core ingredients (flour, buttermilk, baking soda, salt) are all you truly need.",
      "Bake in a flour-dusted cast-iron skillet or Dutch oven instead of buying a loaf pan — the heavy base gives a beautifully even, crusty bottom."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "Milk soured with 1 tbsp lemon juice or vinegar per cup, rested 5 minutes",
        "savings": "Avoids buying a whole carton of buttermilk you won't finish"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Dried currants or chopped dates",
        "savings": "Use whatever dried fruit is already in the pantry"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter or a neutral oil",
        "savings": "Makes it dairy-free and often cheaper"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 8,
      "carbs": 58,
      "fat": 6,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Irish",
    "tags": [
      "bread",
      "quick-bread",
      "no-yeast",
      "baking",
      "st-patricks-day",
      "vegetarian",
      "buttermilk"
    ]
  },
  {
    "id": "bake-cinnamon-babka",
    "name": "Cinnamon Babka",
    "description": "A tender, enriched yeasted bread twisted around a buttery brown-sugar cinnamon filling, baked into a glossy laminated swirl and finished with a sticky vanilla sugar syrup. Rich, soft, and unmistakably bakery-quality.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.75,
        "note": "bread or all-purpose flour, about 3.75 cups for dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.67,
        "note": "2/3 cup, warm, to bloom yeast and enrich dough"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "1/3 cup granulated for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large, room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 14,
        "note": "about 14 tbsp total: 6 tbsp softened into dough, 8 tbsp for filling"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.25,
        "note": "1 1/4 tsp fine salt in dough"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed, for the cinnamon filling"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 9,
        "note": "3 tbsp ground cinnamon for filling"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp, split between dough and syrup"
      }
    ],
    "steps": [
      "Bloom the yeast: warm the milk to about 110F, stir in 1 tsp of the granulated sugar and the instant yeast, and let sit 5-8 minutes until foamy.",
      "Make the dough: in a stand mixer with the dough hook, combine flour, remaining granulated sugar, and salt. Add the milk mixture, eggs, and 1 tsp vanilla, then mix on low until shaggy. Knead 5 minutes until cohesive.",
      "With the mixer running, add the 6 tbsp softened butter one tablespoon at a time, kneading 8-10 minutes until the dough is smooth, elastic, and pulls cleanly from the bowl. Cover and proof 1.5-2 hours until doubled, then chill at least 1 hour (this makes it rollable).",
      "Make the filling: stir together the brown sugar, cinnamon, and 8 tbsp softened butter into a spreadable paste.",
      "Roll the cold dough on a floured surface into a roughly 12x18 inch rectangle. Spread the cinnamon filling evenly to the edges, then roll up tightly from a long side into a log.",
      "Slice the log in half lengthwise to expose the layers. With cut sides facing up, twist the two halves over each other into a tight two-strand braid, keeping the cut layers showing.",
      "Lay the braid into a parchment-lined 9x5 inch loaf pan, tucking the ends under. Cover and proof 45-60 minutes until puffy and risen near the rim.",
      "Bake at 350F for 40-50 minutes until deep golden and the center reaches 190F; tent with foil if it browns too fast.",
      "Meanwhile simmer 1/3 cup water with the remaining granulated sugar and 1 tsp vanilla into a syrup. Brush it generously over the hot babka and let cool in the pan 20 minutes before lifting out."
    ],
    "totalTimeMinutes": 240,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 50,
    "difficulty": "hard",
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
      "Chill the dough overnight in the fridge instead of rushing it warm — cold dough rolls and twists far cleaner with zero special equipment.",
      "Skip buying bread flour; all-purpose works fine here and the extra knead time builds plenty of structure.",
      "Save and reuse the parchment sling, and brush on the sugar syrup while the loaf is hot so it soaks in instead of pooling."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "oat-milk plus 1 extra tbsp butter",
        "savings": "Use plant milk you already have on hand and skip a single-purpose dairy buy"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "a pinch of extra cinnamon plus the milk's natural sweetness",
        "savings": "Saves the priciest pantry bottle without hurting the loaf"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "granulated sugar with 1 tsp molasses, or just plain granulated",
        "savings": "Avoid a second bag of sugar by darkening white sugar you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 6,
      "carbs": 47,
      "fat": 17,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Jewish / Eastern European",
    "tags": [
      "babka",
      "cinnamon",
      "enriched bread",
      "yeast",
      "braided",
      "baking",
      "dessert",
      "brunch"
    ]
  },
  {
    "id": "bake-chocolate-babka",
    "name": "Chocolate Babka",
    "description": "A buttery enriched yeast dough rolled around a deep, fudgy dark-chocolate-and-cocoa filling, twisted to expose ribbons of chocolate, baked into a glossy loaf, and soaked in vanilla sugar syrup. Tender, rich, and worth every minute of the rise.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "bread or all-purpose flour, about 2.5 cups for the dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp instant yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "split: ~1/4 cup in dough, plus more for filling and syrup"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.33,
        "note": "about 1/3 cup lukewarm whole milk"
      },
      {
        "ingredientId": "butter",
        "quantity": 9,
        "note": "split: ~9 Tbsp in dough, ~6 Tbsp in filling"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt in dough"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 4.5,
        "note": "about 4.5 oz, chopped, for the filling"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 3,
        "note": "3 Tbsp unsweetened cocoa powder for the filling"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp, split between dough and syrup"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.1,
        "note": "optional dusting",
        "optional": true
      }
    ],
    "steps": [
      "Make the dough: in a stand mixer with the dough hook, combine flour, sugar, instant yeast, and salt. Add the eggs and lukewarm milk and mix on low until a shaggy dough forms, then knead 5 minutes until it comes together.",
      "With the mixer running, add the softened dough butter a tablespoon at a time, letting each piece absorb before adding more. Knead 8-10 minutes until the dough is smooth, glossy, and elastic. Cover and refrigerate at least 4 hours or overnight (cold dough is essential for clean rolling).",
      "Make the filling: melt the chocolate and filling butter together until smooth, then whisk in the cocoa and sugar to a thick, spreadable paste. Let it cool until just spreadable but not stiff.",
      "On a floured surface, roll the cold dough into a large rectangle about 10x18 inches and 1/4 inch thick. Spread the chocolate filling evenly to the edges, then roll up tightly from a long side into a snug log.",
      "Chill the log 15-20 minutes to firm up, then trim the ends and slice it lengthwise down the middle to expose the layers. With cut sides facing up, twist the two halves over each other into a tight two-strand braid and tuck it into a parchment-lined loaf pan.",
      "Cover loosely and let rise at room temperature 1 to 1.5 hours, until puffy and nearly filling the pan. Meanwhile heat the oven to 350F (175C).",
      "Bake 30-35 minutes until deep golden and set; tent with foil if it browns too fast. The center should read about 190F.",
      "While it bakes, simmer the syrup sugar with an equal splash of water and the vanilla for 2 minutes. As soon as the babka comes out, brush the hot syrup all over the top so it soaks in.",
      "Cool in the pan 15 minutes, then lift out and cool fully before slicing. Dust with powdered sugar if you like."
    ],
    "totalTimeMinutes": 360,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 35,
    "difficulty": "hard",
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
      "Babka dough loves an overnight cold rise in the fridge, so make it the night before — colder dough is also far easier to roll and twist cleanly.",
      "Chopped dark chocolate bars or chocolate chips both work for the filling; whatever is on sale beats pricey baking bars.",
      "Don't skip the sugar syrup brush — it's cheap, keeps the loaf moist for days, and gives that bakery-style shine."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "semi-sweet chocolate chips",
        "savings": "Chips are usually cheaper per ounce and melt fine for the filling."
      },
      {
        "forIngredientId": "milk",
        "swap": "any plant milk, warmed",
        "savings": "Use whatever milk you already have; the small amount won't change the texture."
      },
      {
        "forIngredientId": "butter",
        "swap": "half butter, half neutral oil in the filling",
        "savings": "Stretches expensive butter while keeping the filling glossy."
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 6,
      "carbs": 42,
      "fat": 20,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "Eastern European Jewish",
    "tags": [
      "babka",
      "chocolate",
      "baking",
      "enriched-dough",
      "dessert",
      "yeasted",
      "brunch",
      "showstopper"
    ]
  },
  {
    "id": "bake-monkey-bread",
    "name": "Monkey Bread",
    "description": "Pull-apart cinnamon-sugar bread made from scratch: pillowy yeasted dough torn into bite-size pieces, rolled in cinnamon sugar, stacked in a bundt pan, and baked under a bubbling brown-butter caramel that soaks into every nook. Sticky, gooey, and meant to be pulled apart with your hands.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "about 3.5 cups all-purpose flour"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup, warmed to about 110F"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2.25 tsp (one packet)"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "1/4 cup for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp softened for dough + 3/4 cup (1.5 sticks) for caramel"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed, for caramel + coating"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 5.33,
        "note": "1/3 cup for the cinnamon-sugar coating"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 6,
        "note": "2 tbsp total, dough coating + caramel"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp in the caramel"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.4,
        "optional": true,
        "note": "1/2 cup chopped, scattered between layers"
      }
    ],
    "steps": [
      "Warm the milk to about 110F (just barely warm to the touch). Stir in the instant yeast and a pinch of the dough sugar, then let sit 5 minutes until foamy. In a large bowl whisk together flour, the 1/4 cup dough sugar, and salt.",
      "Add the yeast-milk, eggs, and 2 tbsp softened butter to the flour. Mix into a shaggy dough, then knead 8-10 minutes by hand (or 6 minutes in a stand mixer) until smooth, elastic, and slightly tacky. Add flour a tablespoon at a time only if it stays sticky.",
      "Shape into a ball, place in a greased bowl, cover, and let rise in a warm spot 1 to 1.5 hours until doubled in size.",
      "Make the cinnamon-sugar coating: combine the 1/3 cup white sugar, 1/4 cup of the brown sugar, and 1.5 tbsp cinnamon in a bowl. Grease a bundt or tube pan well with butter.",
      "Punch down the dough and pinch off pieces about 1 to 1.5 inches across (roughly walnut-sized). Roll each piece in the cinnamon-sugar to coat, then layer loosely in the bundt pan, scattering chopped walnuts between layers if using.",
      "Make the caramel: melt the remaining butter in a saucepan over medium heat, then stir in the remaining brown sugar, remaining cinnamon, and vanilla. Cook 1-2 minutes until smooth and bubbling, then pour evenly over the dough balls in the pan.",
      "Cover loosely and let rise again 30-45 minutes until the dough balls look puffy and have risen near the rim. Meanwhile heat the oven to 350F.",
      "Bake 30-35 minutes until deep golden and the caramel is bubbling vigorously. If the top browns too fast, tent loosely with foil for the last 10 minutes.",
      "Let cool in the pan just 5-10 minutes, then invert onto a plate so the caramel runs down. Serve warm and pull apart by hand."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 35,
    "difficulty": "medium",
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
      "Make the dough from scratch with flour, milk, and yeast instead of buying refrigerated biscuit dough — it's a fraction of the cost and tastes far better.",
      "Skip the walnuts to cut cost without hurting the dish; the cinnamon-sugar caramel is the real star.",
      "Brown sugar can be made on the spot by stirring 1 tbsp molasses into a cup of white sugar if you only have one on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use almond or oat milk warmed the same way",
        "savings": "Often cheaper per cup and works if you keep plant milk on hand"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Swap in pecans or just leave them out",
        "savings": "Omitting nuts saves the most; pecans are similar in price"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus a spoon of molasses or maple syrup",
        "savings": "Avoids buying a separate bag of brown sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 7,
      "carbs": 58,
      "fat": 17,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "pull-apart",
      "cinnamon",
      "baking",
      "sweet",
      "brunch",
      "from-scratch"
    ]
  },
  {
    "id": "bake-pain-au-chocolat",
    "name": "Pain au Chocolat",
    "description": "Classic French laminated viennoiserie: flaky, buttery croissant dough wrapped around two batons of dark chocolate, folded and proofed slowly, then baked until deep golden and shatteringly crisp. A real one-day project, but the payoff is bakery-quality pastries from your own oven.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "bread flour (high-protein) preferred for structure"
      },
      {
        "ingredientId": "butter",
        "quantity": 1.4,
        "note": "European-style 82%+ butterfat; ~140g goes into the butter block for lamination, rest in dough"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.6,
        "note": "lukewarm, ~140ml for the dough"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.15
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 3,
        "note": "about 1 tbsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.1
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.5,
        "note": "cut into 16 batons (~10g each), or use bakery chocolate sticks"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "for egg wash, beaten with a splash of milk"
      }
    ],
    "steps": [
      "Make the detrempe (dough): Mix 250g bread flour, 30g sugar, 1 tbsp instant yeast, 1 tsp salt, 140ml lukewarm milk, and 20g soft butter into a shaggy dough. Knead 5-7 minutes until smooth but not over-developed. Shape into a rectangle, wrap, and chill at least 1 hour (or overnight).",
      "Make the butter block: Pound 140g cold butter between parchment and roll into a 12x16cm rectangle, then chill until firm but pliable.",
      "Encase the butter: Roll the chilled dough into a rectangle twice the size of the butter block. Lay the butter on one half and fold the dough over to seal it completely, pinching the edges.",
      "First fold: Roll the package into a long rectangle and fold in thirds like a letter. Wrap and chill 30-45 minutes to keep the butter cold and the layers distinct.",
      "Second and third folds: Repeat the roll-and-letter-fold twice more, chilling 30-45 minutes between each fold. You now have hundreds of butter layers, the key to a flaky crumb.",
      "Cut and shape: Roll the laminated dough to about 4mm thick and cut into 8 rectangles (~8x14cm). Lay a chocolate baton near one end, roll once, add a second baton, then roll up snugly and place seam-side down.",
      "Proof: Arrange on parchment-lined trays, cover loosely, and proof at warm room temperature (24-26C) for 2-3 hours until jiggly, puffy, and nearly doubled. Do not rush this.",
      "Bake: Brush gently with egg wash. Bake at 200C (400F) for 18-22 minutes until deep golden brown and the layers are crisp. Cool on a rack at least 15 minutes so the chocolate sets and the crumb finishes."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 280,
    "cookTimeMinutes": 20,
    "difficulty": "hard",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy a block of good dark chocolate and cut your own batons instead of paying for pre-made baking sticks - it's a fraction of the price.",
      "Make a full batch and freeze the shaped, un-proofed pastries; proof and bake straight from the freezer for fresh viennoiserie any morning.",
      "Splurge only on the butter - it's the one ingredient you can taste in a pain au chocolat. Store-brand flour and sugar work perfectly."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Use dark-chocolate-chips lined up in a row instead of batons",
        "savings": "~$1.00 per batch"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Lukewarm water with a splash of any milk works in the dough",
        "savings": "~$0.40 per batch"
      },
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour instead of bread flour (slightly less chew, still great)",
        "savings": "~$0.30 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 6,
      "carbs": 32,
      "fat": 21,
      "fiber": 2
    },
    "emoji": "🥐",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "viennoiserie",
      "laminated",
      "pastry",
      "chocolate",
      "breakfast",
      "bakery",
      "make-ahead",
      "weekend-project",
      "baking"
    ]
  },
  {
    "id": "bake-cream-puffs",
    "name": "Cream Puffs",
    "description": "Crisp, hollow pâte à choux shells baked to a deep golden brown, then piped full of silky vanilla pastry cream and dusted with powdered sugar. The trick is cooking the dough on the stove to dry it out, then beating in the eggs one at a time for that signature airy puff.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup for the choux dough"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup in the choux + 1 1/4 cups for the pastry cream"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp choux + 2 tbsp finishing the pastry cream"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup for the choux dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 7,
        "note": "4 whole eggs for the choux, 3 yolks for the pastry cream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.33,
        "note": "1 tsp in choux + 1/3 cup in pastry cream"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch for the dough"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "3 tbsp to thicken the pastry cream"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp for the pastry cream"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.1,
        "optional": true,
        "note": "for dusting the tops"
      }
    ],
    "steps": [
      "Make the pastry cream first so it can chill: whisk 3 egg yolks, the 1/3 cup sugar, and 3 tbsp cornstarch in a bowl until pale. Heat 1 1/4 cups whole milk until steaming, then slowly whisk it into the yolks to temper.",
      "Pour the mixture back into the pot and cook over medium heat, whisking constantly, until it bubbles and thickens to a pudding (about 2 minutes). Off heat, whisk in 2 tbsp butter and the vanilla. Press plastic wrap onto the surface and refrigerate until cold, at least 1 hour.",
      "Preheat oven to 425F (220C) and line two baking sheets with parchment. For the choux, combine 1/2 cup water, 1/2 cup milk, 6 tbsp butter, 1 tsp sugar, and a pinch of salt in a saucepan and bring to a rolling boil.",
      "Dump in all 1 cup flour at once and stir vigorously with a wooden spoon until it forms a smooth ball. Keep cooking and stirring 2 more minutes to dry the dough, until a thin film coats the bottom of the pan.",
      "Transfer the dough to a bowl and let it cool 3-4 minutes. Beat in 4 eggs one at a time, fully incorporating each before adding the next, until the dough is glossy and falls from the spoon in a thick V-shaped ribbon.",
      "Pipe or spoon 12 mounds (about 1 1/2 inches wide) onto the sheets, spacing them apart. Wet a finger and smooth down any peaks so they don't burn.",
      "Bake at 425F for 15 minutes, then WITHOUT opening the door reduce to 375F (190C) and bake 18-22 minutes more, until deeply golden and firm. Underbaking causes collapse.",
      "Turn off the oven, poke a small hole in each puff to release steam, and let them dry in the cooling oven 10 minutes. Cool completely on a rack.",
      "Whisk the chilled pastry cream smooth, transfer to a piping bag, and fill each puff through the hole (or split and pipe). Dust with powdered sugar and serve."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Cream puffs use pantry staples (flour, eggs, milk, butter, sugar) you likely already have, so a full batch of 12 costs almost nothing per puff.",
      "Make the pastry cream a day ahead and bake the shells fresh; unfilled shells freeze well, so a double batch barely costs more.",
      "Skip a piping bag by snipping the corner off a zip-top bag, and split-and-fill the puffs with a spoon to avoid buying special tips."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use half-and-half in the pastry cream for an even richer filling, or 2% milk to lighten it",
        "savings": "About even; 2% milk is slightly cheaper than whole"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Substitute an equal amount of flour to thicken the pastry cream (cook 1 extra minute)",
        "savings": "Saves ~$0.20 if you skip buying cornstarch"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "Scrape in half a vanilla bean or use 1/2 tsp almond extract",
        "savings": "Almond extract goes further, saving ~$0.30 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 7,
      "carbs": 25,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-yellow-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "pastry",
      "pate-a-choux",
      "vanilla",
      "baking",
      "make-ahead",
      "classic"
    ]
  },
  {
    "id": "bake-chocolate-eclairs",
    "name": "Chocolate Eclairs",
    "description": "Crisp, hollow choux pastry shells piped into elegant fingers, filled with silky vanilla crème patissiere and dipped in a glossy dark chocolate glaze. A classic French patisserie that's far more achievable at home than it looks.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "1 cup water for the choux paste"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.6,
        "note": "115g unsalted butter total: ~85g for choux, ~30g for the chocolate glaze"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.4,
        "note": "140g all-purpose flour total (125g choux, ~15g dusting/adjusting)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 8,
        "note": "4 eggs for choux dough, 4 yolks for the pastry cream"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk for the creme patissiere"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.5,
        "note": "about 130g sugar for the pastry cream"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.25,
        "note": "about 40g to thicken the pastry cream"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp vanilla; a split vanilla bean is ideal if you have one"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 1.5,
        "note": "about 150g good 60-70% dark chocolate for the glaze"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.3,
        "note": "about 100ml to make the chocolate glaze pourable and shiny"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "optional": true,
        "note": "small pinch in choux and pastry cream to balance"
      }
    ],
    "steps": [
      "Make the pastry cream first so it can chill: whisk 4 egg yolks with the sugar and cornstarch until pale. Heat the milk just to a simmer, then slowly pour it into the yolks while whisking constantly to temper. Return everything to the pan and cook over medium heat, whisking hard, until it bubbles and thickens to a pudding, about 2 minutes. Off heat, whisk in the vanilla and a pinch of salt, scrape into a bowl, press plastic wrap onto the surface, and chill at least 2 hours.",
      "Make the choux: bring the water, the choux portion of butter, a pinch of salt, and a pinch of sugar to a rolling boil. Dump in the flour all at once and stir vigorously with a wooden spoon until it forms a smooth ball, then keep stirring on the heat for 1-2 minutes to dry the dough (a thin film should coat the pan bottom).",
      "Transfer the hot dough to a bowl and let it cool 5 minutes. Beat in the 4 eggs one at a time, fully incorporating each, until the paste is glossy and falls from the spoon in a thick V ribbon. You may not need every bit of the last egg.",
      "Preheat the oven to 425F (220C). Scrape the choux into a piping bag fitted with a large star or round tip and pipe twelve 5-inch fingers onto parchment-lined trays, spaced apart. Smooth any peaks with a wet finger so they don't scorch.",
      "Bake at 425F for 15 minutes, then WITHOUT opening the door drop the heat to 375F (190C) and bake 18-20 minutes more until deeply golden and rigid. Pierce each end with a knife and return to the turned-off oven 5 minutes to dry the insides, then cool completely on a rack.",
      "Whisk the chilled pastry cream smooth and load it into a piping bag with a small round tip. Poke two holes in the bottom of each shell and pipe in cream until you feel it get heavy and resist.",
      "Make the glaze: heat the cream until steaming, pour over the chopped dark chocolate and remaining butter, let sit 1 minute, then stir until smooth and glossy. Let it cool slightly to a dippable consistency.",
      "Dip the top of each filled eclair into the glaze, let the excess drip off, and set right side up. Let the chocolate set for 15-20 minutes, then serve. Best the day they're made."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 50,
    "cookTimeMinutes": 40,
    "difficulty": "hard",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Eclairs use pantry staples - flour, eggs, milk, butter, sugar - so the only premium cost is good chocolate. Buy a bar on sale rather than expensive couverture pistoles.",
      "No piping bag? Use a sturdy zip-top freezer bag with a corner snipped off, or pipe rounds for cream puffs (profiteroles) instead - same dough, no tip needed.",
      "Make the pastry cream and even pipe-and-freeze the unbaked choux a day ahead; bake straight from frozen, adding a few extra minutes."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "semi-sweet or dark chocolate chips, melted with the cream",
        "savings": "Chips are usually cheaper per gram than a baking bar and melt fine for a glaze"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole milk plus an extra teaspoon of butter for the glaze",
        "savings": "Skips buying a cream carton when you only need a splash"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "imitation vanilla or a scraped vanilla bean if you have one",
        "savings": "Imitation vanilla costs a fraction of pure extract"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 5,
      "carbs": 24,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "pastry",
      "choux",
      "baking",
      "classic",
      "patisserie",
      "chocolate",
      "make-ahead"
    ]
  },
  {
    "id": "bake-cheese-danish",
    "name": "Cheese Danish",
    "description": "Flaky, buttery yeasted pastry with a tangy-sweet vanilla cream cheese center and a glossy egg-wash finish. A bakery-style cheese Danish made from scratch with a quick rough-puff laminated dough.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "all-purpose flour, ~2.25 cups for the dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (1 packet)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.15,
        "note": "split: a little in the dough, the rest in the filling"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup warm whole milk"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1 stick + 2 tbsp cold; most laminated into dough, 1 tbsp melted to brush"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "1 whole in dough, 1 yolk in filling + white reserved for egg wash"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 16,
        "note": "8 oz block, softened"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "zest + a squeeze of juice"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.1,
        "optional": true,
        "note": "for a thin glaze drizzle"
      }
    ],
    "steps": [
      "Bloom the dough: warm the milk to lukewarm, stir in the yeast and 1 tbsp of the sugar, and let it sit 5 minutes until foamy. Whisk in 1 whole egg.",
      "Make the dough: combine flour, 1 tbsp sugar, and salt. Cut in 8 tbsp (1 stick) of cold butter in chunks, leaving visible flakes the size of large peas. Stir in the wet mixture just until a shaggy dough forms. Wrap and chill 30 minutes.",
      "Laminate: on a floured surface roll the dough into a rectangle, fold in thirds like a letter, rotate 90 degrees, and roll out again. Repeat this fold-and-roll twice more (3 folds total) to build flaky layers, chilling 10 minutes if the butter softens. Wrap and refrigerate 1 hour.",
      "Make the filling: beat the softened cream cheese with the remaining sugar (about 1/4 cup) until smooth, then beat in 1 egg yolk, the vanilla, lemon zest, and a small squeeze of lemon juice until silky.",
      "Shape: roll the chilled dough to about 1/4 inch thick and cut into 8 squares. Make a well by pressing the center with your thumb (or fold the corners toward the middle pinwheel-style), then spoon a generous dollop of cream cheese filling into each center.",
      "Proof: arrange on a parchment-lined sheet, cover loosely, and let rise in a warm spot 30 to 45 minutes until puffy. Meanwhile heat the oven to 400F.",
      "Egg wash and bake: brush the exposed pastry edges with the reserved egg white beaten with a splash of water. Bake 18 to 22 minutes until deep golden and the filling is just set.",
      "Finish: cool 10 minutes, then whisk powdered sugar with a few drops of water or lemon juice and drizzle a thin glaze over the warm Danishes."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 22,
    "difficulty": "hard",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Make a full batch and freeze unbaked, shaped Danishes; bake straight from frozen, adding a few extra minutes.",
      "Block cream cheese and a single stick of butter cost far less per pastry than buying any single bakery Danish.",
      "Skip store-bought puff pastry: the quick rough-puff fold method here uses just flour and butter you already have."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-cheese",
        "swap": "Use well-drained ricotta beaten with an extra spoon of sugar for a lighter, slightly grainy filling",
        "savings": "~$1.00 per batch"
      },
      {
        "forIngredientId": "lemon",
        "swap": "A few drops of almond extract or a pinch of orange zest",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any warm plant milk or even water with a pinch more sugar",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 330,
      "protein": 6,
      "carbs": 30,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🧀",
    "accentColor": "bg-amber-100",
    "cuisine": "Danish",
    "tags": [
      "pastry",
      "breakfast",
      "baking",
      "cream cheese",
      "laminated dough",
      "brunch",
      "from scratch"
    ]
  },
  {
    "id": "bake-sticky-buns",
    "name": "Pecan Sticky Buns",
    "description": "Pillowy enriched-dough buns baked upside-down over a bubbling brown-sugar caramel studded with toasted pecans, then flipped so the glaze drips down the sides. A true overnight-friendly bake with a tight cinnamon swirl and a glossy, sticky top.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "all-purpose, ~4 cups for dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (1 packet)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup, warmed to 110F"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup for dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.85,
        "note": "softened for dough + caramel + filling"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp fine salt"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.7,
        "note": "packed, for caramel + cinnamon filling"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 4,
        "note": "1/4 cup light, keeps caramel glossy"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "note": "2 tbsp into the caramel",
        "optional": true
      },
      {
        "ingredientId": "pecans",
        "quantity": 12,
        "note": "1 1/2 cups, toasted and chopped"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 6,
        "note": "2 tbsp ground for the swirl"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp in caramel"
      }
    ],
    "steps": [
      "Warm the milk to about 110F and whisk in the yeast and a pinch of the sugar; let it foam for 5 minutes. In a large bowl combine the flour, remaining dough sugar, and salt, then add the yeast mixture, eggs, and 4 tbsp softened butter. Mix to a shaggy dough.",
      "Knead 8-10 minutes by hand (or 6 minutes in a stand mixer) until smooth, elastic, and tacky but not sticky. Cover and let rise in a warm spot until doubled, about 1 to 1.5 hours.",
      "Make the caramel: melt 8 tbsp butter with most of the brown sugar, the corn syrup, honey, and vanilla until smooth and bubbling, about 2 minutes. Pour into a 9x13 pan and scatter the toasted chopped pecans evenly over the top.",
      "Punch down the dough and roll on a floured surface into a roughly 12x18 inch rectangle. Spread with the remaining 4 tbsp softened butter, then sprinkle evenly with the remaining brown sugar mixed with the cinnamon, leaving a 1 inch border at the far edge.",
      "Starting from a long edge, roll the dough tightly into a log and pinch the seam closed. Using a length of unflavored floss or a sharp serrated knife, cut into 12 even rolls.",
      "Arrange the rolls cut-side up over the caramel in the pan, leaving a little space between them. Cover and let rise until puffy and touching, 45-60 minutes (or refrigerate overnight and let come to room temp before baking).",
      "Bake at 350F for 30-35 minutes until deeply golden and the caramel bubbles up the sides; tent with foil if browning too fast. The center buns should read 190F.",
      "Cool in the pan for just 3-5 minutes, then invert onto a rimmed platter or board so the caramel and pecans drip down over the buns. Scrape any caramel left in the pan back on top.",
      "Let rest 10 minutes so the glaze sets slightly, then pull apart and serve warm."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 35,
    "difficulty": "hard",
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
      "Buy pecan pieces or halves in bulk rather than pre-chopped bags, and toast them yourself for far more flavor at a lower price.",
      "This is an enriched dough that only needs flour, yeast, milk, eggs, butter and sugar - pantry staples - so the real cost is just the pecans.",
      "Make the dough and assemble the night before, refrigerate, and bake fresh in the morning to save active time on the day."
    ],
    "substitutions": [
      {
        "forIngredientId": "corn-syrup",
        "swap": "Use an equal amount of honey or maple syrup for the caramel",
        "savings": "Skips buying a whole bottle of corn syrup"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Swap in walnuts, which behave the same and toast just as well",
        "savings": "Often 30-40% cheaper per pound than pecans"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Warmed oat milk works in the enriched dough",
        "savings": "Use what you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 6,
      "carbs": 56,
      "fat": 21,
      "fiber": 2
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "sticky buns",
      "pecan",
      "breakfast",
      "brunch",
      "baking",
      "yeast dough",
      "caramel",
      "make-ahead"
    ]
  },
  {
    "id": "bake-pop-tarts",
    "name": "Homemade Pop Tarts",
    "description": "Flaky, buttery from-scratch toaster pastries with a jammy fruit filling and a sweet vanilla glaze. Tender layered crust, crimped edges, and a shower of sprinkles — far better than the boxed kind, and you control how much filling and sugar goes in.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "all-purpose flour, about 2 cups"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) cold, cubed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp in the dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 egg for the egg wash"
      },
      {
        "ingredientId": "jam",
        "quantity": 10.67,
        "note": "thick fruit jam such as strawberry or raspberry, about 2/3 cup"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "1 tbsp, whisked into jam so filling sets"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 24,
        "note": "for the glaze, about 1.5 cups"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.19,
        "note": "2-3 tbsp to thin the glaze"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp in the glaze"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 0.1,
        "optional": true,
        "note": "rainbow sprinkles to finish; use whatever decorating sprinkles you have"
      }
    ],
    "steps": [
      "Make the dough: whisk 2 cups flour, 2 tbsp sugar, and 1 tsp salt. Cut in the cold cubed butter with your fingertips or a pastry cutter until you have pea-sized pieces with some flat flakes. Drizzle in 4-6 tbsp ice water a little at a time, tossing, just until the dough holds together when squeezed — do not overwork it.",
      "Divide the dough in half, press each into a rectangle, wrap, and chill at least 30 minutes so the butter firms up and the flour hydrates.",
      "Stir 1 tbsp cornstarch into the jam so the filling won't bubble out, then roll each dough half on a floured surface into a roughly 9x12 inch rectangle. Trim the edges square and cut each sheet into 8 equal rectangles (about 3x4 inches), giving you 16 pieces total.",
      "Beat the egg with a splash of water. Brush egg wash around the border of 8 rectangles, then spoon about 1 tbsp jam into the center of each, leaving a 1/2 inch border. Lay a second rectangle on top, press out air, and seal the edges firmly with the tines of a fork.",
      "Prick the top of each tart a few times with the fork so steam can escape and they bake flat instead of puffing open. Chill the assembled tarts for 20-30 minutes — cold pastry bakes up flakier.",
      "Heat the oven to 375F (190C). Brush the tops with the remaining egg wash and bake on a parchment-lined sheet for 22-28 minutes, until golden brown. Cool completely on a rack before glazing or the glaze will melt.",
      "Whisk the powdered sugar with the vanilla and just enough milk to make a thick but spreadable glaze. Spread it over each cooled tart, leaving a little border, and scatter sprinkles on top before the glaze sets. Let the glaze firm up for a few minutes before serving."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 25,
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
      "A homemade batch costs a fraction of a box of brand-name pastries and makes 8 — wrap extras and freeze them unglazed, then reheat in the toaster or oven.",
      "Use whatever jam is already in your fridge; the cornstarch trick keeps any fruit preserve from leaking out during baking.",
      "Skip store-bought sprinkles and finish with a plain vanilla glaze, or a dusting of cinnamon-sugar, for an even cheaper treat."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use chilled vegetable shortening for part of the butter for an extra-flaky crust",
        "savings": "Shortening is cheaper than butter and keeps just as long"
      },
      {
        "forIngredientId": "jam",
        "swap": "Spread a brown-sugar-cinnamon paste (brown sugar + flour + cinnamon) instead of fruit jam",
        "savings": "Uses cheap pantry staples instead of a jar of preserves"
      },
      {
        "forIngredientId": "milk",
        "swap": "Thin the glaze with water or any plant milk you have on hand",
        "savings": "Costs essentially nothing"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 4,
      "carbs": 50,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🍓",
    "accentColor": "bg-pink-100",
    "cuisine": "American",
    "tags": [
      "toaster pastry",
      "from scratch",
      "kid friendly",
      "breakfast treat",
      "baking",
      "make ahead",
      "freezer friendly"
    ]
  },
  {
    "id": "bake-cherry-turnovers",
    "name": "Cherry Turnovers",
    "description": "Flaky, golden puff pastry triangles bursting with a glossy, jammy cherry filling brightened with lemon and almond, finished with a simple vanilla glaze. Bakery-style hand pies you can make on a weeknight.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "1 sheet thawed all-butter puff pastry (pizza-dough is the closest catalog id; use real puff pastry)"
      },
      {
        "ingredientId": "frozen-cherries",
        "quantity": 2.5,
        "note": "about 2.5 cups pitted dark sweet cherries, halved"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "about 1/3 cup, adjust to cherry sweetness"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "1 tbsp, slurried"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice of half plus 1/2 tsp zest"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp, split between filling and glaze"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 egg for egg wash"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "about 1/2 cup for the glaze"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.04,
        "note": "1-2 tsp to loosen glaze"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.02,
        "optional": true,
        "note": "pinch in the filling"
      }
    ],
    "steps": [
      "In a saucepan, combine the cherries, sugar, lemon juice, lemon zest and a pinch of cinnamon. Cook over medium heat, stirring, until the cherries release their juices and bubble, 5-7 minutes.",
      "Stir the cornstarch into 1 tbsp cold water to make a slurry, then stir it into the simmering cherries. Cook 1-2 minutes until thick and glossy, then off the heat stir in the almond extract and 1/4 tsp vanilla. Spread on a plate and chill until cool and set, about 20 minutes.",
      "Heat the oven to 400F and line a sheet pan with parchment. Roll the thawed puff pastry on a lightly floured surface into a roughly 10-inch square and cut into 4 equal squares.",
      "Beat the egg with a splash of water for the egg wash. Brush the edges of each square, then spoon the cooled cherry filling onto one half of each, leaving a 1/2-inch border. Do not overfill.",
      "Fold each square corner-to-corner into a triangle, press the edges firmly, then crimp tightly with a fork to seal so the filling does not leak.",
      "Brush the tops with egg wash and cut 2-3 small steam vents in each turnover with a sharp knife.",
      "Bake 20-25 minutes until deeply golden and puffed. Let cool on the pan 10 minutes so the filling sets and the bottoms crisp.",
      "Whisk the powdered sugar with the remaining vanilla and just enough milk to make a thick but pourable glaze. Drizzle over the cooled turnovers and let set before serving."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 25,
    "difficulty": "medium",
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
      "Frozen cherries are far cheaper than fresh and are picked ripe, so they make a better filling out of season; no need to thaw first.",
      "A box of store-brand puff pastry yields enough for two batches, so make a double filling and freeze the extra unbaked turnovers to bake later straight from frozen.",
      "Skip almond extract if you do not have it and lean on the lemon and vanilla; the filling still tastes bright."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-cherries",
        "swap": "Fresh pitted cherries in season, or frozen mixed berries",
        "savings": "Use seasonal/on-sale fruit to cut filling cost by ~40%"
      },
      {
        "forIngredientId": "pizza-dough",
        "swap": "Homemade rough puff or stacked phyllo brushed with butter",
        "savings": "Rough puff from flour and butter costs about half of store-bought"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "An extra 1/4 tsp vanilla",
        "savings": "Avoids buying a single-use bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 6,
      "carbs": 58,
      "fat": 17,
      "fiber": 3
    },
    "emoji": "🍒",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "pastry",
      "cherry",
      "puff-pastry",
      "baked",
      "hand-pie",
      "fruit",
      "bakery-style",
      "baking"
    ]
  },
  {
    "id": "bake-blueberry-muffins",
    "name": "Bakery-Style Blueberry Muffins",
    "description": "Tall, golden-domed blueberry muffins with a tender, buttery crumb, bursting with fresh berries and a crackly sugar top. Buttermilk and lemon zest keep them moist and bright, while a hot-then-moderate oven gives that signature bakery dome.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "all-purpose, about 2.5 cups; reserve 1 tbsp to toss with berries"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "about 1 cup, plus 2 tbsp coarse for tops"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "softened, about 1 stick"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "about 1/4 cup, for extra moisture"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "about 1 cup"
      },
      {
        "ingredientId": "blueberries",
        "quantity": 2,
        "note": "about 2 cups fresh; frozen works unthawed"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "about 2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "about 1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "about 3/4 tsp"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "about 2 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "zest of 1 lemon, brightens the berries"
      }
    ],
    "steps": [
      "Heat oven to 425F (220C) and line a 12-cup muffin tin with paper liners or grease well. Toss the blueberries with the reserved 1 tbsp flour and set aside.",
      "Whisk the remaining flour, baking powder, baking soda, and salt in a bowl. In a separate large bowl, cream the softened butter with the sugar and lemon zest until pale and fluffy, 2 to 3 minutes.",
      "Beat in the oil, then the eggs one at a time, and finally the vanilla, scraping the bowl until smooth.",
      "Add the dry ingredients and the buttermilk in three alternating additions, beginning and ending with the dry. Mix only until just combined; a few streaks of flour are fine. Do not overmix or the muffins will be tough.",
      "Gently fold in the floured blueberries with a spatula, distributing them evenly without crushing.",
      "Divide the batter among the cups, mounding it high so they nearly overflow for tall domes. Sprinkle the coarse sugar generously over each top.",
      "Bake at 425F for 5 minutes, then without opening the oven reduce the temperature to 375F (190C) and bake 15 to 18 minutes more, until golden and a toothpick comes out with a few moist crumbs.",
      "Cool in the tin for 5 minutes, then transfer to a rack. Serve slightly warm."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 23,
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
      "Frozen blueberries are cheaper year-round and work great folded in straight from the freezer, no thawing needed.",
      "No buttermilk? Stir 1 tbsp lemon juice or vinegar into 1 cup regular milk and let it sit 5 minutes.",
      "Coarse turbinado sugar gives the best crackly top, but regular sugar sprinkled on works fine in a pinch."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "Regular milk soured with 1 tbsp lemon juice or vinegar",
        "savings": "Skip buying a whole carton, ~$1.50"
      },
      {
        "forIngredientId": "butter",
        "swap": "All vegetable oil (use 1/2 cup total)",
        "savings": "Saves ~$1 and makes them dairy-lighter"
      },
      {
        "forIngredientId": "blueberries",
        "swap": "Frozen berries",
        "savings": "Often half the price off-season, ~$2"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 4,
      "carbs": 35,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🫐",
    "accentColor": "bg-sky-100",
    "cuisine": "American",
    "tags": [
      "muffins",
      "baking",
      "breakfast",
      "blueberry",
      "brunch",
      "make-ahead",
      "kid-friendly"
    ]
  },
  {
    "id": "bake-banana-nut-muffins",
    "name": "Banana Nut Muffins",
    "description": "Tender, bakery-style muffins made with very ripe bananas and toasted walnuts. Brown sugar and a touch of cinnamon give deep caramel flavor, while melted butter and a gentle hand keep the crumb moist and soft with a high, domed top.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 4,
        "note": "very ripe, heavily speckled; about 1.5 cups mashed"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.75,
        "note": "all-purpose, about 1.75 cups"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "packed, about 3/4 cup"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "about 1/4 cup"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "melted, about 1/2 cup (1 stick)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.4,
        "note": "toasted and chopped, about 3/4 cup plus some for topping"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1.5,
        "note": "about 1.5 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "about 1 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "about 1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "about 1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "about 1/2 tsp"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.25,
        "optional": true,
        "note": "about 1/4 cup, for extra moisture and tang"
      }
    ],
    "steps": [
      "Heat oven to 425F (220C) and line a 12-cup muffin tin with paper liners. Spread the walnuts on a small tray and toast for 5-6 minutes until fragrant, then chop; reserve a small handful for topping.",
      "In a bowl, mash the very ripe bananas with a fork until mostly smooth with a few small lumps. Whisk in the melted butter, brown sugar, white sugar, eggs, Greek yogurt if using, and vanilla until well combined.",
      "In a separate bowl, whisk together the flour, baking soda, baking powder, cinnamon, and salt.",
      "Pour the dry ingredients into the wet and fold gently with a spatula just until no dry streaks remain. Do not overmix or the muffins will turn tough; a few lumps are fine. Fold in the chopped toasted walnuts.",
      "Divide the batter evenly among the 12 liners, filling each nearly to the top for tall domes. Scatter the reserved walnuts over the tops.",
      "Bake at 425F for 5 minutes, then, without opening the oven, reduce the temperature to 350F (175C) and bake another 15-18 minutes. The initial blast of heat sets a high domed top.",
      "Muffins are done when the tops spring back and a toothpick inserted in the center comes out with only a few moist crumbs.",
      "Cool in the tin for 5 minutes, then transfer to a rack. Serve warm or fully cooled."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 23,
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
      "Use overripe, blackened bananas that stores discount or that you've frozen and thawed; they are sweeter, cheaper, and mash perfectly.",
      "Buy walnuts in bulk and toast a big batch at once; toasting wakes up flavor so you can use less.",
      "All-purpose flour, baking soda, and brown sugar are pantry staples that cost pennies per muffin compared to a boxed mix."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use pecans for a softer, sweeter nut, or swap in chocolate chips if nut-free",
        "savings": "Pecans cost about the same; chocolate chips can be cheaper in bulk"
      },
      {
        "forIngredientId": "butter",
        "swap": "Use neutral vegetable oil for an even moister crumb",
        "savings": "Saves about $0.40 per batch versus butter"
      },
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Sour cream or buttermilk works the same way",
        "savings": "Skip entirely if you don't have it; costs nothing"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 4,
      "carbs": 33,
      "fat": 11,
      "fiber": 2
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "muffins",
      "banana",
      "walnuts",
      "baking",
      "breakfast",
      "brunch",
      "snack",
      "vegetarian"
    ]
  },
  {
    "id": "bake-bran-muffins",
    "name": "Bran Muffins",
    "description": "Tender, deeply molasses-scented bran muffins with a moist crumb and plump raisins. Soaking the wheat bran in buttermilk before mixing softens it for a bakery-style texture that never tastes dry or sawdusty.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "oats",
        "quantity": 0.5,
        "note": "wheat bran (unprocessed miller's bran) — soaked in buttermilk"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "all-purpose flour, about 1.5 cups"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1.5,
        "note": "1.5 cups; soaks the bran"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "packed light brown sugar, about 3/4 cup"
      },
      {
        "ingredientId": "molasses",
        "quantity": 4,
        "note": "unsulphured (mild) molasses, 1/4 cup"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 5.33,
        "note": "neutral oil, 1/3 cup"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.4,
        "note": "about 1 cup",
        "optional": true
      }
    ],
    "steps": [
      "In a large bowl, stir the wheat bran into the buttermilk and let it soak for 15 minutes so the bran softens and hydrates — this is the key to a moist, tender crumb.",
      "Heat the oven to 400F (205C) and line a 12-cup muffin tin with paper liners or grease it well.",
      "Whisk the brown sugar, molasses, oil, eggs, and vanilla into the soaked bran mixture until smooth and well combined.",
      "In a separate bowl, whisk together the flour, baking soda, baking powder, salt, and cinnamon.",
      "Add the dry ingredients to the wet and fold with a spatula just until no dry streaks remain — do not overmix or the muffins will turn tough and tunneled.",
      "Gently fold in the raisins, then divide the batter evenly among the 12 cups, filling each nearly to the top.",
      "Bake for 18 to 22 minutes, until the tops dome and spring back and a toothpick comes out clean.",
      "Cool in the tin for 5 minutes, then transfer to a rack; serve warm with butter."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 20,
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
      "Buy bran in bulk from the grocery bulk bins — it's pennies per batch compared to boxed bran cereal.",
      "No buttermilk? Stir 1.5 tbsp lemon juice or vinegar into regular milk and let it curdle 10 minutes.",
      "Bake a double batch and freeze the extras — they reheat in 20 seconds and beat any boxed mix on cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "Plain milk soured with 1.5 tbsp lemon juice or vinegar",
        "savings": "~$1.50/batch"
      },
      {
        "forIngredientId": "molasses",
        "swap": "Honey or extra brown sugar (slightly milder flavor)",
        "savings": "~$0.80"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Chopped dates or dried cranberries, or leave out entirely",
        "savings": "~$1.00"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 4,
      "carbs": 33,
      "fat": 6,
      "fiber": 4
    },
    "emoji": "🧁",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "breakfast",
      "baking",
      "high-fiber",
      "muffins",
      "make-ahead",
      "kid-friendly"
    ]
  },
  {
    "id": "bake-cranberry-orange-muffins",
    "name": "Cranberry Orange Muffins",
    "description": "Bakery-style muffins with a tender, buttery crumb, bright orange zest, and pops of tart cranberry — finished with a high-domed crackly top from a hot-oven start. Perfect with coffee.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "all-purpose, about 2.5 cups"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "about 1 cup, plus a little for sprinkling tops"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick), melted and cooled"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.75,
        "note": "3/4 cup"
      },
      {
        "ingredientId": "orange",
        "quantity": 2,
        "note": "zest of both; 1/3 cup juice from them"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "frozen-berries",
        "quantity": 2,
        "note": "fresh or frozen cranberries, 2 cups, halved if large; keep frozen until folding"
      }
    ],
    "steps": [
      "Heat the oven to 425F and line a 12-cup muffin tin with paper liners (or grease well). Starting hot gives the muffins a tall, domed top.",
      "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt. Rub the orange zest into the sugar with your fingertips to release its oils.",
      "In a separate bowl, whisk the eggs, then add the melted-and-cooled butter, buttermilk, 1/3 cup fresh orange juice, and vanilla until smooth.",
      "Pour the wet ingredients into the dry and fold with a spatula just until no dry streaks remain — the batter should be thick and a little lumpy. Do not overmix or the muffins turn tough.",
      "Toss the cranberries with a spoonful of the flour (so they don't sink), then gently fold them in. Keep them whole or roughly halved for bursts of tartness.",
      "Divide the batter evenly among the cups, filling each nearly to the top for big domes. Sprinkle the tops with a little extra sugar for crunch.",
      "Bake at 425F for 5 minutes, then — without opening the door — lower the oven to 375F and bake another 14 to 17 minutes, until golden and a toothpick comes out clean.",
      "Cool in the pan 5 minutes, then transfer to a rack. Serve warm or at room temperature."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 22,
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
      "Buy a bag of cranberries on sale during the holidays and freeze it — they bake straight from frozen and last for months.",
      "No buttermilk? Stir 2 tsp of vinegar or lemon juice into 3/4 cup of milk and let it sit 5 minutes.",
      "Zest your oranges before juicing and freeze leftover zest in a small bag for the next bake."
    ],
    "substitutions": [
      {
        "forIngredientId": "frozen-berries",
        "swap": "Use 1.5 cups dried cranberries (dried-cranberry), plumped 10 min in warm orange juice",
        "savings": "Avoids buying fresh berries out of season"
      },
      {
        "forIngredientId": "buttermilk",
        "swap": "3/4 cup milk soured with 2 tsp vinegar or lemon juice",
        "savings": "~$1.50 vs a carton of buttermilk"
      },
      {
        "forIngredientId": "butter",
        "swap": "1/2 cup neutral oil (vegetable-oil) for an even more tender, longer-keeping crumb",
        "savings": "~$0.50 and stays moist longer"
      }
    ],
    "estimatedNutrition": {
      "calories": 235,
      "protein": 4,
      "carbs": 35,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "muffins",
      "baking",
      "breakfast",
      "cranberry",
      "orange",
      "brunch",
      "fall",
      "holiday"
    ]
  },
  {
    "id": "bake-pumpkin-muffins",
    "name": "Pumpkin Muffins",
    "description": "Tender, deeply spiced bakery-style pumpkin muffins with high domed tops. Real pumpkin puree keeps them moist for days, while a blend of cinnamon, ginger, nutmeg, and cloves gives that classic fall warmth. One bowl, no mixer needed.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.75,
        "note": "all-purpose flour, about 1.75 cups"
      },
      {
        "ingredientId": "pumpkin-puree",
        "quantity": 0.85,
        "note": "pure pumpkin puree, not pie filling (~1.25 cups)"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 12,
        "note": "granulated sugar, about 0.75 cup"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "packed light brown sugar, about 0.5 cup"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "neutral oil, about 0.5 cup"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "0.5 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "0.5 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 0.5,
        "note": "0.5 tsp"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "0.25 tsp, freshly grated if possible"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.25,
        "note": "scant 0.25 tsp",
        "optional": true
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 0.05,
        "note": "for sprinkling tops, optional crunch",
        "optional": true
      }
    ],
    "steps": [
      "Preheat oven to 425F and line a 12-cup muffin tin with paper liners (or grease well). The hot start gives the muffins a fast lift for tall, domed tops.",
      "In a large bowl, whisk together the flour, baking powder, baking soda, salt, cinnamon, ginger, nutmeg, and cloves until evenly blended.",
      "In a separate bowl, whisk the pumpkin puree, white sugar, brown sugar, eggs, oil, and vanilla until smooth and uniform.",
      "Pour the wet mixture into the dry ingredients and fold gently with a spatula just until no dry streaks remain. Do not overmix or the muffins will turn dense and rubbery.",
      "Divide the batter evenly among the 12 cups, filling each nearly to the top. Sprinkle the tops with turbinado sugar for a crackly crust if using.",
      "Bake at 425F for 5 minutes, then without opening the oven reduce the temperature to 350F and bake another 15 to 18 minutes, until a toothpick inserted in the center comes out clean.",
      "Let the muffins cool in the tin for 5 minutes, then transfer to a wire rack to cool completely before serving."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 23,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a large can of pumpkin puree and freeze leftovers in muffin-batch portions, it stores for months.",
      "Make your own pumpkin pie spice from the cinnamon, ginger, nutmeg and cloves you already have instead of buying a separate blend.",
      "Brown sugar plus white sugar keeps these moist, but you can use all white sugar with a tablespoon of molasses if that's what you have."
    ],
    "substitutions": [
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Use melted butter or applesauce for half the oil for a lighter muffin",
        "savings": "Applesauce cuts cost and fat versus oil"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "All white sugar plus 1 tsp molasses",
        "savings": "Skips buying a second bag of sugar"
      },
      {
        "forIngredientId": "cloves-ground",
        "swap": "A pinch of allspice or extra cinnamon",
        "savings": "Avoids a single-use spice purchase"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 32,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🎃",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "muffins",
      "pumpkin",
      "fall",
      "baking",
      "breakfast",
      "snack",
      "make-ahead",
      "dairy-free"
    ]
  },
  {
    "id": "bake-lemon-poppy-seed-muffins",
    "name": "Lemon Poppy Seed Muffins",
    "description": "Tender, bakery-style muffins bursting with bright lemon zest and crunchy poppy seeds, topped with a tangy lemon glaze. Buttermilk keeps the crumb soft and moist while the zest does the real flavor work.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "about 2.5 cups all-purpose flour"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 16,
        "note": "about 1 cup granulated sugar"
      },
      {
        "ingredientId": "poppy-seeds",
        "quantity": 9,
        "note": "3 tablespoons"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 teaspoons"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 teaspoon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 teaspoon"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) melted, slightly cooled"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.75,
        "note": "3/4 cup"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "zest of 3 lemons, rubbed into the sugar"
      },
      {
        "ingredientId": "lemon",
        "quantity": 3,
        "note": "3 lemons, for zest and juice"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 teaspoon"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup, for the glaze"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 3,
        "optional": true,
        "note": "2-3 tablespoons fresh lemon juice for glaze; use the zested lemons"
      }
    ],
    "steps": [
      "Heat oven to 425F (220C) and line a 12-cup muffin tin with paper liners. The high starting heat gives the muffins a tall, domed top.",
      "In a large bowl, rub the lemon zest into the granulated sugar with your fingertips until damp and fragrant. This releases the citrus oils and is the key to deep lemon flavor.",
      "Whisk the flour, poppy seeds, baking powder, baking soda, and salt into the lemon sugar until evenly combined.",
      "In a separate bowl, whisk the eggs, melted butter, buttermilk, vanilla, and 2 tablespoons of juice from the zested lemons until smooth.",
      "Pour the wet ingredients into the dry and fold gently with a spatula just until no dry streaks remain. Do not overmix, a few lumps are fine, or the muffins will turn tough.",
      "Divide the batter among the 12 cups, filling each nearly to the top for bakery-style domes.",
      "Bake at 425F for 5 minutes, then reduce the oven to 350F (175C) without opening the door and bake 13-16 minutes more, until golden and a toothpick comes out clean.",
      "Cool in the pan 5 minutes, then transfer to a rack. Whisk the powdered sugar with enough lemon juice to make a pourable glaze and drizzle over the muffins once they are just warm."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 21,
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
      "Buy whole lemons and use both the zest and juice, it is far cheaper and brighter than bottled juice.",
      "No buttermilk? Stir 1/2 tablespoon lemon juice or vinegar into 3/4 cup regular milk and let it sit 5 minutes.",
      "Poppy seeds go rancid fast, so buy a small amount and store them in the freezer."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "3/4 cup milk soured with 1/2 tbsp lemon juice",
        "savings": "Skip buying a whole carton you won't finish"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "Fresh juice from the lemons you already zested",
        "savings": "Free, and tastes much better"
      },
      {
        "forIngredientId": "butter",
        "swap": "Equal amount neutral vegetable oil",
        "savings": "Cheaper and keeps muffins moist longer"
      }
    ],
    "estimatedNutrition": {
      "calories": 248,
      "protein": 4,
      "carbs": 38,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "muffins",
      "lemon",
      "poppy seed",
      "baking",
      "breakfast",
      "brunch",
      "vegetarian",
      "bakery-style"
    ]
  },
  {
    "id": "bake-double-chocolate-muffins",
    "name": "Double Chocolate Muffins",
    "description": "Tall, bakery-style muffins with a deep, dark crumb from Dutch-process cocoa and pockets of melting chocolate chips. The trick is a quick high-heat blast at the start for a domed top, then a steady finish so they bake through moist and fudgy without drying out.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "all-purpose flour, ~2 cups"
      },
      {
        "ingredientId": "dutch-cocoa",
        "quantity": 12,
        "note": "Dutch-process cocoa, ~3/4 cup"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "granulated sugar, ~1 cup"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "light brown sugar, packed, ~1/2 cup"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "~1 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "~1.5 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "~3/4 tsp"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "~1 cup"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "melted, ~1/2 cup / 1 stick"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "~2 tsp"
      },
      {
        "ingredientId": "instant-coffee",
        "quantity": 1,
        "note": "~1 tsp, dissolved — deepens chocolate flavor"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 24,
        "note": "~1.5 cups, divided"
      }
    ],
    "steps": [
      "Heat the oven to 425F (220C) and line a 12-cup muffin tin with paper liners or grease well. Stir the instant coffee into the buttermilk and set aside so it dissolves.",
      "In a large bowl, whisk together the flour, Dutch-process cocoa, granulated sugar, brown sugar, baking soda, baking powder, and salt, breaking up any cocoa lumps.",
      "In a separate bowl, whisk the eggs, then whisk in the melted (but not hot) butter, the coffee-buttermilk, and the vanilla until smooth.",
      "Pour the wet mixture into the dry and fold with a spatula just until no dry streaks remain — the batter will be thick; do not overmix or the muffins turn tough.",
      "Fold in about 1 cup of the chocolate chips, reserving the rest for topping. Let the batter rest 10 minutes so it thickens and domes better.",
      "Divide the batter among the cups, filling each nearly to the top, and scatter the reserved chocolate chips over the surface.",
      "Bake at 425F for 5 minutes, then — without opening the door — lower the oven to 350F (175C) and bake 14 to 17 minutes more, until the tops spring back and a pick comes out with moist crumbs (not wet batter).",
      "Cool in the tin 5 minutes, then transfer to a rack. Serve slightly warm so the chocolate chips are still gooey."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 22,
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
      "Store-brand cocoa and chocolate chips are a fraction of the price of premium and taste nearly identical baked into muffins.",
      "No buttermilk? Stir 1.5 tsp vinegar or lemon juice into a scant cup of regular milk and let it sit 5 minutes.",
      "The instant coffee is optional but cheap and makes the chocolate taste richer — no coffee flavor comes through."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "Regular milk soured with a splash of vinegar, or plain yogurt thinned with milk",
        "savings": "Saves ~$1 vs buying a carton of buttermilk you won't finish"
      },
      {
        "forIngredientId": "dutch-cocoa",
        "swap": "Regular unsweetened cocoa powder (still great, just slightly less deep in color)",
        "savings": "Saves ~$2 over specialty Dutch-process"
      },
      {
        "forIngredientId": "butter",
        "swap": "Neutral oil like vegetable or canola for an even moister crumb",
        "savings": "Saves ~$0.75 and keeps them moist longer"
      }
    ],
    "estimatedNutrition": {
      "calories": 295,
      "protein": 5,
      "carbs": 42,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🧁",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "chocolate",
      "baking",
      "dessert",
      "muffins",
      "kid-friendly",
      "make-ahead",
      "vegetarian"
    ]
  },
  {
    "id": "bake-english-scones",
    "name": "English Scones",
    "description": "Classic British tea-time scones — tall, fluffy, and lightly sweet with a golden glazed top and a soft, tender crumb that pulls apart in two. Built on cold butter rubbed into flour and just enough milk to bind, they bake in 12 minutes and beg to be split and slathered with jam and clotted cream.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.7,
        "note": "350g plain (all-purpose) flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 4,
        "note": "4 tsp baking powder for a tall rise"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.3,
        "note": "85g cold unsalted butter, cubed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp caster sugar"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.4,
        "note": "175ml whole milk, plus a splash to bring the dough together"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 0.33,
        "optional": true,
        "note": "1 tsp lemon juice to lightly sour the milk and boost lift"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 beaten egg for the glaze"
      }
    ],
    "steps": [
      "Heat the oven to 220C/425F and line a baking sheet with parchment. Stir the lemon juice into the milk and set aside for a few minutes to lightly sour, then warm the milk slightly (a few seconds in the microwave) — barely warm milk gives a better rise.",
      "Tip the flour, baking powder, salt and sugar into a large bowl and whisk to combine. Add the cold cubed butter and rub it into the flour with your fingertips until the mixture looks like fine breadcrumbs, working quickly so the butter stays cold.",
      "Make a well in the centre and pour in most of the milk. Use a cutlery knife to cut and stir the milk through until it forms a soft, slightly shaggy dough, adding the last splash of milk only if it looks dry. Do not overwork it — handle as little as possible.",
      "Tip the dough onto a lightly floured surface and gently fold it over 2 or 3 times just to smooth it, then pat (do not roll hard) to an even 2.5cm / 1-inch thickness. Keeping it thick is what makes scones tall.",
      "Dip a 5cm / 2-inch round cutter in flour and stamp out scones with a clean straight push down — do not twist, or the sides seal and they rise lopsided. Gather and gently re-pat the offcuts to cut the rest; expect 8 scones.",
      "Place the scones close together on the sheet so they support each other as they rise. Brush the tops only with beaten egg, avoiding drips down the sides which would glue them to the tray.",
      "Bake for 11-13 minutes until well risen and deep golden on top. Cool on a wire rack for a few minutes, then split and serve warm with jam and clotted cream (jam first or cream first is a matter of regional pride)."
    ],
    "totalTimeMinutes": 28,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 13,
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
      "Plain flour plus baking powder costs a fraction of self-raising flour and gives you control over the rise — keep a tub of baking powder and you never need to buy specialist flour.",
      "Scones freeze beautifully unbaked: stamp them out, open-freeze on a tray, then bake straight from frozen with a couple of extra minutes — a fresh scone any day with zero waste.",
      "No cutter? Pat the dough into a round and cut into 8 wedges like a cake — same dough, zero special equipment, and no offcuts to re-roll."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use buttermilk (or milk soured with the lemon juice) for an even lighter, fluffier crumb",
        "savings": "Same cost, better lift"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "Skip it entirely — the scones still rise well from the baking powder alone",
        "savings": "Saves a pantry item"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Brush the tops with a little milk instead of egg for the glaze",
        "savings": "Saves ~$0.25 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 5,
      "carbs": 36,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🧈",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "scones",
      "baking",
      "afternoon-tea",
      "british",
      "vegetarian",
      "quick-bake",
      "tea-time"
    ]
  },
  {
    "id": "bake-cream-scones",
    "name": "Cream Scones",
    "description": "Tender, flaky scones made the easy way — no cold butter to cut in. Heavy cream does double duty as the fat and the liquid, giving a rich, downy crumb with a golden, sparkling-sugar top. Best warm with jam and clotted cream.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "all-purpose flour, ~2 cups"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "granulated, ~1/3 cup in the dough"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tablespoon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 teaspoon"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.25,
        "note": "~1 1/4 cups cold, plus a little for brushing"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 teaspoon"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.15,
        "optional": true,
        "note": "use dried currants if you can; ~2/3 cup"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 0.05,
        "optional": true,
        "note": "for sparkling tops"
      }
    ],
    "steps": [
      "Heat the oven to 425F (220C) and line a baking sheet with parchment. Keep the cream in the fridge until the moment you need it — cold cream makes a flakier scone.",
      "In a large bowl, whisk together the flour, granulated sugar, baking powder, and salt until evenly combined. If using currants, toss them in now so they get coated with flour.",
      "Stir the vanilla into the cold heavy cream, then pour it into the dry ingredients. Using a fork or flexible spatula, stir gently just until a shaggy, mostly-cohesive dough forms — a few dry patches are fine. Do not overmix.",
      "Turn the dough and any loose crumbs onto a lightly floured surface. Gently knead 4 or 5 times, pressing stray bits in, just until it holds together. Pat into a round disk about 1 inch thick.",
      "Cut the disk into 8 wedges with a sharp knife or bench scraper, pressing straight down without twisting so the edges stay clean and rise tall.",
      "Arrange the wedges on the baking sheet a couple inches apart. Brush the tops with a little extra cream and sprinkle generously with turbinado sugar.",
      "Bake for 15 to 18 minutes, until the tops are golden and the bottoms are firm and lightly browned. Rotate the pan halfway through for even color.",
      "Cool on the pan for 5 minutes, then serve warm with jam, butter, or clotted cream."
    ],
    "totalTimeMinutes": 33,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 18,
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
      "Buy a pint of heavy cream and a 5 lb bag of flour — this whole batch of 8 scones costs a fraction of a single bakery scone.",
      "No turbinado sugar? A pinch of regular granulated sugar brushed onto cream-dampened tops still gives a nice crackle.",
      "Freeze the cut, unbaked wedges on a tray, then bag them — bake straight from frozen, just adding 3 to 4 minutes."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use cold buttermilk plus 3 tbsp melted butter for a tangier, slightly less rich scone",
        "savings": "~30%"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Swap in dried cranberries or a handful of chocolate chips, or leave plain",
        "savings": "skip to save ~$1"
      },
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Regular granulated sugar for the topping",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 270,
      "protein": 4,
      "carbs": 33,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🧈",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "scones",
      "baking",
      "breakfast",
      "brunch",
      "tea-time",
      "vegetarian",
      "easy",
      "no-stovetop"
    ]
  },
  {
    "id": "bake-buttermilk-biscuits",
    "name": "Buttermilk Biscuits",
    "description": "Tall, flaky Southern-style buttermilk biscuits with crisp golden tops and soft, steamy layers inside. Cold butter and tangy buttermilk plus a gentle hand are the whole secret — split and slather with butter, honey, or jam.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp baking soda"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 1,
        "note": "1 tbsp sugar"
      },
      {
        "ingredientId": "kosher-salt",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp cold unsalted butter, plus 1 tbsp melted for brushing"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "1 cup cold buttermilk, plus a splash if needed"
      },
      {
        "ingredientId": "honey",
        "quantity": 0.15,
        "optional": true,
        "note": "for serving"
      }
    ],
    "steps": [
      "Heat oven to 450F. Whisk flour, baking powder, baking soda, sugar, and salt in a large bowl, then chill the bowl while you cut the butter.",
      "Cube 10 tbsp of cold butter and toss it into the flour. Cut it in with your fingers or a pastry cutter until the largest pieces are the size of peas — visible butter flecks are what make the layers.",
      "Make a well, pour in the cold buttermilk, and stir with a fork just until a shaggy, barely-cohesive dough forms. Add a splash more buttermilk only if there is dry flour left. Do not overmix.",
      "Turn the dough onto a floured surface, pat into a 1-inch-thick rectangle, then fold it in thirds like a letter. Pat out and fold two more times — this builds the flaky layers.",
      "Pat the dough to about 1 inch thick. Cut straight down with a floured 2.5-inch round cutter (do not twist, or the edges seal and won't rise). Press scraps together gently and cut the rest.",
      "Place biscuits on a parchment-lined sheet with sides touching for tall, soft sides. Chill 10 minutes so the butter firms up again.",
      "Brush the tops with melted butter and bake 15-18 minutes until deep golden brown and risen tall.",
      "Cool 5 minutes, then split and serve warm with butter, honey, or jam."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 18,
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
      "No buttermilk? Stir 1 tbsp vinegar or lemon juice into 1 cup of regular milk and let it sit 5 minutes — it works just as well for a fraction of the cost.",
      "Keep everything cold: freeze the cubed butter for 10 minutes and chill the flour. Cold butter steaming in a hot oven is what makes biscuits rise tall instead of spreading flat.",
      "Bake a double batch and freeze the unbaked, cut biscuits on a tray. Bake straight from frozen (add 3-4 minutes) for fresh biscuits any morning."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup milk + 1 tbsp vinegar, rested 5 min",
        "savings": "~$1.50 vs a carton of buttermilk"
      },
      {
        "forIngredientId": "butter",
        "swap": "Shortening for half the butter — even flakier, cheaper",
        "savings": "~$0.80 per batch"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Honey or just omit it",
        "savings": "negligible, uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 5,
      "carbs": 30,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🧈",
    "accentColor": "bg-amber-100",
    "cuisine": "Southern American",
    "tags": [
      "biscuits",
      "baking",
      "breakfast",
      "brunch",
      "comfort-food",
      "vegetarian",
      "from-scratch"
    ]
  },
  {
    "id": "bake-apple-cobbler",
    "name": "Apple Cobbler",
    "description": "Tender cinnamon-spiced apples bubbling under a golden, buttery biscuit topping with crisp sugared edges. A cozy old-fashioned dessert that's far easier than pie and best served warm with a scoop of ice cream.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "apple",
        "quantity": 6,
        "note": "about 6 medium baking apples (Granny Smith + Honeycrisp), peeled and sliced"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 0.4,
        "note": "for the apple filling"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.3,
        "note": "split between filling and topping"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.1,
        "optional": true
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice, to brighten the apples"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 0.2,
        "note": "to thicken the filling"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "for the biscuit topping"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.3,
        "note": "for topping plus sprinkling"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.15
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "butter",
        "quantity": 0.6,
        "note": "cold for topping, plus a little for the filling"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.4,
        "note": "cold, to bring the dough together"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.1,
        "optional": true
      }
    ],
    "steps": [
      "Heat the oven to 375F (190C) and lightly butter a 9x13 baking dish. Peel, core, and slice the apples about 1/4-inch thick.",
      "In a large bowl, toss the apple slices with the brown sugar, lemon juice, cornstarch, half the cinnamon, and the nutmeg until evenly coated, then spread them into the baking dish and dot with a little butter.",
      "Make the topping: whisk the flour, half the sugar, baking powder, salt, and remaining cinnamon in a bowl. Cut in the cold butter with your fingers or a fork until the mixture looks like coarse crumbs.",
      "Stir in the milk and vanilla just until a soft, shaggy dough forms; do not overmix or the topping will turn tough.",
      "Drop spoonfuls of the dough over the apples, leaving gaps so the filling can bubble through, then sprinkle the remaining sugar over the top for a crisp, sparkly crust.",
      "Bake 40 to 45 minutes, until the topping is golden brown and the apple juices bubble thickly around the edges.",
      "Let the cobbler rest at least 15 minutes so the filling sets, then serve warm, ideally with ice cream or a splash of cream."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 45,
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
      "Use whatever apples are cheapest in season; a mix of tart and sweet tastes best, but even bagged seconds work great once spiced and baked.",
      "Skip the cornstarch and use an extra spoon of flour from the topping batch to thicken the filling if you don't keep cornstarch on hand.",
      "Make a double batch of the dry topping mix and freeze it; you only need to cut in butter and add milk next time."
    ],
    "substitutions": [
      {
        "forIngredientId": "brown-sugar",
        "swap": "Use plain white sugar plus a teaspoon of molasses, or just white sugar",
        "savings": "~$0.40"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any milk works, including oat or almond milk for a dairy topping swap",
        "savings": "~$0.20"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Swap in an extra tablespoon of all-purpose flour",
        "savings": "~$0.15"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 3,
      "carbs": 58,
      "fat": 12,
      "fiber": 4
    },
    "emoji": "🍎",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "apple",
      "baked",
      "fall",
      "comfort-food",
      "cobbler",
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "bake-blackberry-crumble",
    "name": "Blackberry Crumble",
    "description": "Juicy blackberries baked under a golden, buttery oat-and-flour crumble. The fruit cooks down into a glossy, jammy filling brightened with lemon, while the topping turns crisp and caramelized — proper British comfort pudding, best with a scoop of ice cream.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "blackberries",
        "quantity": 4,
        "note": "about 6 cups fresh blackberries"
      },
      {
        "ingredientId": "frozen-berries",
        "quantity": 0.5,
        "optional": true,
        "note": "optional: top up with frozen blackberries if short on fresh"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "split: ~1/3 cup for fruit, rest for topping"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2,
        "note": "2 tbsp to thicken the juices"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "juice of half a lemon"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of half a lemon"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "about 1 cup all-purpose flour for topping"
      },
      {
        "ingredientId": "rolled-oats-instant",
        "quantity": 0.3,
        "note": "about 3/4 cup oats for the crumble"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "about 1/2 cup packed light brown sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "8 tbsp / 1 stick cold unsalted butter, cubed"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "pinch for topping and fruit"
      }
    ],
    "steps": [
      "Heat the oven to 375 F (190 C) and lightly butter a 9-inch baking dish. Pull the cubed butter from the fridge so it stays cold until the last moment.",
      "Make the filling: in a bowl, gently toss the blackberries with about 1/3 cup of the white sugar, the cornstarch, lemon juice, and lemon zest until the berries are evenly coated. Tip into the baking dish and spread level.",
      "Make the crumble: in a separate bowl, stir together the flour, oats, brown sugar, remaining white sugar, cinnamon, and a pinch of salt.",
      "Add the cold cubed butter and rub it into the dry mix with your fingertips (or cut with a fork) until it clumps into a coarse, pebbly rubble with pea-sized pieces — do not overwork it into a paste.",
      "Scatter the crumble evenly over the berries in a thick, craggy layer, leaving a few gaps so the fruit can bubble up through the top.",
      "Place the dish on a rimmed baking sheet to catch drips and bake for 40 to 45 minutes, until the topping is deep golden and the blackberry juices are bubbling thickly around the edges.",
      "Let it rest at least 15 to 20 minutes so the filling sets up and thickens before serving — it will be molten straight from the oven.",
      "Serve warm, ideally with vanilla ice cream or cold cream poured over the top."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
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
      "Frozen blackberries work beautifully and cost a fraction of fresh — no need to thaw, just add an extra teaspoon of cornstarch since they release more liquid.",
      "Buy fresh blackberries at the end of summer when they are in peak season and cheapest, then freeze a batch for off-season crumbles.",
      "A stick of butter, flour, oats and sugar make the topping for pennies — stretch one box of berries further by mixing in a chopped apple."
    ],
    "substitutions": [
      {
        "forIngredientId": "rolled-oats-instant",
        "swap": "Use the same amount of extra flour (plus a handful of chopped nuts) for a smoother shortbread-style crumble",
        "savings": "Skips buying oats if you only keep flour on hand"
      },
      {
        "forIngredientId": "blackberries",
        "swap": "Swap in frozen mixed berries or a mix of blackberries and apple",
        "savings": "Frozen berries run about 40% cheaper than fresh"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Use an equal amount of all-purpose flour to thicken the juices",
        "savings": "Uses flour you already have instead of a separate box"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 4,
      "carbs": 54,
      "fat": 13,
      "fiber": 7
    },
    "emoji": "🫐",
    "accentColor": "bg-violet-100",
    "cuisine": "British",
    "tags": [
      "dessert",
      "fruit",
      "baked",
      "comfort-food",
      "vegetarian",
      "summer",
      "crumble",
      "baking"
    ]
  },
  {
    "id": "bake-cherry-clafoutis",
    "name": "Cherry Clafoutis",
    "description": "A rustic French dessert from the Limousin: sweet cherries baked into a tender, flan-like custard batter that puffs in the oven and settles into something between a pancake and a baked custard. Lightly dusted with powdered sugar and best served warm.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "cherry-fresh",
        "quantity": 1,
        "note": "about 1 lb sweet cherries, pitted (or left whole for traditional almond flavor)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1.25,
        "note": "1 1/4 cups whole milk"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "about 1/2 cup granulated sugar, plus extra for the dish"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup all-purpose flour"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "note": "1/4 tsp, echoes the cherry-pit flavor",
        "optional": true
      },
      {
        "ingredientId": "butter",
        "quantity": 0.1,
        "note": "for greasing the baking dish"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "a pinch"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.05,
        "note": "for dusting before serving"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). Generously butter a 9-10 inch ceramic baking dish or pie plate, then coat the inside with a light layer of granulated sugar, tapping out the excess.",
      "Pit the cherries (or leave them whole the traditional way) and scatter them in a single even layer across the bottom of the prepared dish.",
      "In a bowl, whisk the eggs with the sugar and a pinch of salt until pale and smooth, then whisk in the vanilla and almond extract.",
      "Add the flour and whisk just until no lumps remain, then gradually whisk in the milk to make a thin, pourable batter the consistency of cream.",
      "Let the batter rest 10 minutes, then pour it gently and evenly over the cherries so they stay nestled in the bottom of the dish.",
      "Bake for 40-45 minutes, until the clafoutis is puffed and golden, the center is just set with only a slight wobble, and a knife inserted near the edge comes out clean.",
      "Let it cool for at least 15 minutes; it will deflate slightly, which is normal. Dust generously with powdered sugar and serve warm or at room temperature."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 45,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Frozen cherries work beautifully and cost far less out of season — thaw and pat them dry first so the batter doesn't go watery.",
      "The whole batter can be made in a blender in 30 seconds, no need for a stand mixer or special equipment.",
      "No almond extract? A few drops aren't essential — the custard, milk, and cherries carry the dish on their own."
    ],
    "substitutions": [
      {
        "forIngredientId": "cherry-fresh",
        "swap": "Frozen pitted cherries, thawed and drained",
        "savings": "Saves about 40% versus fresh when cherries are out of season"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Half whole milk, half heavy cream for a richer custard",
        "savings": "Roughly the same cost; use what you have on hand"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "An extra 1/2 tsp vanilla extract",
        "savings": "Skips a single-use bottle entirely"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 6,
      "carbs": 30,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🍒",
    "accentColor": "bg-rose-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "french",
      "baked",
      "custard",
      "cherry",
      "summer",
      "vegetarian",
      "limousin",
      "baking"
    ]
  },
  {
    "id": "bake-vanilla-souffle",
    "name": "Vanilla Souffle",
    "description": "A classic French vanilla souffle: a silky vanilla pastry-cream base lightened with billowing whipped egg whites, baked until it crowns proud and golden over the rim. Airy, just-set in the center, and fragrant with real vanilla. Serve the instant it leaves the oven, dusted with powdered sugar.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 0.12,
        "note": "plus extra, softened, for greasing the ramekins"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "granulated; some for coating ramekins, rest split between base and whites"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.19,
        "note": "all-purpose, ~3 tbsp for the thickened base"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "whole milk, ~1 cup, warmed"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "4 yolks + 5 whites (save 1 extra white for volume)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "real vanilla extract, ~2 tsp (or seeds of 1 vanilla bean)"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "note": "1/4 tsp, to stabilize the whipped whites"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch, in the base"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.05,
        "optional": true,
        "note": "for dusting before serving"
      }
    ],
    "steps": [
      "Heat the oven to 400F (200C) with a rack in the lower third. Generously brush four 6-8oz ramekins with softened butter using upward strokes, then coat the insides fully with granulated sugar, tapping out the excess. This grip lets the souffle climb. Chill the ramekins while you work.",
      "Make the base: melt 2 tbsp butter in a saucepan over medium heat, whisk in the flour, and cook 1 minute to a pale roux. Gradually whisk in the warm milk and cook, whisking constantly, until very thick and smooth, 2-3 minutes. Off heat, whisk in a pinch of salt, half the sugar, and the vanilla.",
      "Whisk the 4 egg yolks into the warm base one at a time until glossy and uniform. Scrape into a large bowl and let cool to just warm (it should fall in thick ribbons).",
      "In a spotlessly clean bowl, beat the 5 egg whites with the cream of tartar on medium until foamy, then raise the speed and rain in the remaining sugar. Beat to firm, glossy peaks that hold their shape but still look moist, not dry or clumpy.",
      "Whisk a third of the whites into the yolk base to loosen it. Then gently fold in the rest in two additions with a spatula, cutting down and lifting over, until just combined with no white streaks, keeping as much air as possible.",
      "Divide the batter among the ramekins, filling to the rim. Smooth the tops level with an offset spatula, then run your thumb around the inside edge to wipe a clean moat, which helps an even rise.",
      "Place on a baking sheet and bake 12-16 minutes, until the souffles have risen 1-2 inches above the rim, are golden on top, and just jiggle slightly in the center. Do not open the oven for the first 10 minutes.",
      "Dust immediately with powdered sugar and serve at once, before they deflate."
    ],
    "totalTimeMinutes": 40,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
    "difficulty": "hard",
    "equipment": [
      "stovetop",
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "A whole vanilla bean is pricey; good-quality real vanilla extract gives the same fragrance for a fraction of the cost.",
      "Save the leftover egg yolk and freeze the whites you don't use for tomorrow's scramble or another bake, nothing wasted.",
      "Plain ceramic ramekins are a one-time buy and outperform anything fancy; thrift stores and dollar shops have them cheap."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "Use cornstarch (about half the amount) to thicken the base for a naturally gluten-free souffle",
        "savings": "Roughly the same cost, and lets you skip buying flour if you don't bake often"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Steep a real vanilla bean in the warm milk instead of extract for a bakery-grade aroma",
        "savings": "Costs more, but one bean perfumes the whole dish"
      },
      {
        "forIngredientId": "milk",
        "swap": "Whole milk gives the richest base, but 2% works in a pinch",
        "savings": "Saves a little and uses what's already in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 210,
      "protein": 8,
      "carbs": 26,
      "fat": 8,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-yellow-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "french",
      "classic",
      "baked",
      "vanilla",
      "egg",
      "showstopper",
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "bake-french-meringues",
    "name": "French Meringues",
    "description": "Crisp, airy meringue kisses made the classic French way — egg whites whipped to glossy stiff peaks with caster sugar, then slowly dried in a low oven until they shatter on the outside and stay delicately marshmallowy within. Just four pantry ingredients and a little patience.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "use the whites only (4 large egg whites); save yolks for another use"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 16,
        "note": "about 1 cup caster/superfine sugar; pulse granulated in a blender if needed"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "note": "1/4 tsp, to stabilize the whites"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.01,
        "optional": true,
        "note": "a tiny pinch"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and heat to 200F (95C). Line two baking sheets with parchment paper. Make sure your mixing bowl and whisk are spotlessly clean and grease-free — any fat will stop the whites from whipping.",
      "Separate 4 eggs carefully, letting no yolk slip into the whites. Add the whites to the bowl with the cream of tartar and a tiny pinch of salt. Whisk on medium speed until the whites turn foamy and opaque, about 2 minutes.",
      "Increase the speed to medium-high and whip until soft peaks form. Then begin adding the caster sugar one tablespoon at a time, waiting a few seconds between each addition, so it dissolves into the whites.",
      "Once all the sugar is in, whip on high until the meringue is thick, glossy, and holds firm, stiff peaks — about 5 to 7 minutes. Rub a little between your fingers; it should feel smooth, not gritty. Whisk in the vanilla.",
      "Transfer the meringue to a piping bag fitted with a star or round tip. Pipe 2-inch swirls or kisses onto the parchment, spacing them an inch apart. (Dab a little meringue under each parchment corner to anchor it.)",
      "Bake for 1 hour 15 minutes to 1 hour 30 minutes, until the meringues lift cleanly off the parchment and sound hollow when tapped. They should stay pale white, not browned.",
      "Turn off the oven and leave the meringues inside with the door closed for at least 1 hour (or overnight) to finish drying and crisp up fully.",
      "Store in an airtight container at room temperature for up to 2 weeks. Keep them away from humidity, which makes them go sticky."
    ],
    "totalTimeMinutes": 170,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 90,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Don't toss the yolks — use them for lemon curd, custard, hollandaise, or enriched pasta dough so nothing goes to waste.",
      "No caster sugar? Pulse regular granulated sugar in a blender for 20 seconds to get a finer texture that dissolves faster and cheaper than buying special sugar.",
      "Eggs separate most cleanly when cold, but whites whip to greater volume at room temperature — separate straight from the fridge, then let the whites sit out 20 minutes."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "A few drops of lemon juice or white vinegar per egg white",
        "savings": "Skip buying a whole jar you'll rarely use — about $4"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "1/4 tsp almond extract or the seeds of half a vanilla pod",
        "savings": "Almond extract goes further per drop — saves ~$1 per batch"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Liquid egg whites from a carton (about 1/2 cup)",
        "savings": "No yolk waste and no separating — roughly the same cost, less effort"
      }
    ],
    "estimatedNutrition": {
      "calories": 70,
      "protein": 2,
      "carbs": 16,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍥",
    "accentColor": "bg-rose-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "meringue",
      "egg-whites",
      "gluten-free",
      "make-ahead",
      "low-fat",
      "baking",
      "patisserie"
    ]
  },
  {
    "id": "bake-bread-machine-white-bread",
    "name": "Bread Machine White Bread",
    "description": "A soft, golden 1.5 lb sandwich loaf made start-to-finish in a bread machine. Warm milk and butter give it a tender, fine crumb while a touch of sugar feeds the yeast for a tall, even rise. Just layer the ingredients in the right order, press Basic, and walk away.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "1 cup + 2 tbsp whole milk, warmed to ~110F (lukewarm)"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter, softened and cut into pieces"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp granulated sugar"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1.5 tsp fine salt"
      },
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups bread flour (sub all-purpose in a pinch)"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2.25 tsp (1 packet) instant / bread machine yeast"
      }
    ],
    "steps": [
      "Pour the warm milk (about 110F, just warm to the touch) into the bread machine pan first, then add the softened butter pieces. Starting with the wet ingredients keeps the dough from clumping at the bottom.",
      "Add the sugar and salt to opposite corners of the pan, keeping the salt away from where the yeast will go, since direct contact with salt can kill the yeast.",
      "Spoon the bread flour evenly over the liquid so it covers the entire surface, then gently smooth it into a flat layer that fully blankets the wet ingredients.",
      "Make a small well in the center of the flour with your finger, making sure it does not reach down to the liquid, and pour the instant yeast into the dry well so it stays separated from the liquid until mixing begins.",
      "Lock the pan into the machine and select the Basic / White cycle with a medium crust setting for a 1.5 lb loaf, then press Start.",
      "Check the dough about 5 minutes into the first knead: it should form a smooth, slightly tacky ball that clears the sides of the pan. Add flour 1 tablespoon at a time if too sticky, or warm milk 1 teaspoon at a time if too dry.",
      "Let the full cycle run undisturbed (roughly 3 to 4 hours including rises and bake); avoid opening the lid during rising and baking so the loaf does not deflate.",
      "When the cycle finishes, immediately turn the loaf out onto a wire rack and remove the kneading paddle from the bottom. Let it cool at least 30 minutes before slicing so the crumb sets and does not gum up."
    ],
    "totalTimeMinutes": 215,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 205,
    "difficulty": "easy",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A bag of bread flour and a jar of yeast cost a fraction of store-bought loaves; one homemade loaf runs well under a dollar in ingredients versus several dollars at the bakery.",
      "Buy instant yeast in a vacuum brick or jar instead of single packets and store it in the freezer, where it stays active for over a year, dropping the per-loaf yeast cost to pennies.",
      "No bread machine? The same dough rises in a bowl and bakes in a loaf pan at 375F for about 30 to 35 minutes, so you only need flour, yeast, and a pan."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use warm water plus 2 tbsp powdered milk, or just plain warm water for a slightly chewier, leaner loaf",
        "savings": "Skips dairy and saves about $0.30 per loaf"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap in vegetable oil or melted coconut oil at the same amount",
        "savings": "Saves roughly $0.20 and works with whatever oil is on hand"
      },
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour works; the crumb is a touch less chewy but still excellent",
        "savings": "All-purpose is usually cheaper, saving about $0.15 per loaf"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 5,
      "carbs": 30,
      "fat": 3,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "bread",
      "bread-machine",
      "baking",
      "sandwich-bread",
      "white-bread",
      "homemade",
      "yeast-bread",
      "beginner-friendly"
    ]
  },
  {
    "id": "bake-pizza-dough",
    "name": "Pizza Dough",
    "description": "A classic Neapolitan-style pizza dough made with just flour, water, yeast, and salt. A slow, cold ferment develops deep flavor and an airy, blistered crust with a chewy interior. Makes enough for two 12-inch pizzas.",
    "mealType": "dinner",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "00 or bread flour preferred, ~500g / 3.5 cups"
      },
      {
        "ingredientId": "water",
        "quantity": 1.3,
        "note": "lukewarm, ~325ml (65% hydration)"
      },
      {
        "ingredientId": "active-dry-yeast",
        "quantity": 0.05,
        "note": "about 1/2 tsp for a slow ferment"
      },
      {
        "ingredientId": "salt",
        "quantity": 2,
        "note": "fine sea salt, ~12g / 2 tsp"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 0.04,
        "optional": true,
        "note": "for oiling the bowl"
      },
      {
        "ingredientId": "semolina",
        "quantity": 0.05,
        "optional": true,
        "note": "for dusting the peel so dough slides"
      }
    ],
    "steps": [
      "Dissolve the yeast in the lukewarm water and let it sit 5 minutes until it looks cloudy. In a large bowl, whisk the flour and salt together, then pour in the yeast water.",
      "Mix with a wooden spoon or your hand until no dry flour remains and a shaggy, sticky dough forms. Cover and rest 20 minutes to let the flour fully hydrate (autolyse).",
      "Knead the dough on a lightly floured surface for 8-10 minutes, or stretch-and-fold in the bowl every 5 minutes for 20 minutes, until smooth, elastic, and slightly tacky. It should pass a windowpane test.",
      "Lightly oil a bowl, add the dough, cover tightly, and let rise at room temperature for 1-2 hours until nearly doubled.",
      "Divide into two equal balls, shaping each into a tight round by tucking the edges underneath. Place in oiled containers, cover, and cold-ferment in the fridge 24-72 hours for the best flavor.",
      "Remove the dough 1-2 hours before baking and let it come to room temperature so it stretches easily.",
      "Preheat the oven and a pizza stone or steel to its highest setting (260C/500F or hotter) for at least 45 minutes. Gently stretch each ball into a 12-inch round by hand, leaving a puffy rim and never using a rolling pin.",
      "Dust a peel with semolina, top the pizza, and bake 6-10 minutes until the crust is blistered, golden, and charred in spots."
    ],
    "totalTimeMinutes": 1500,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 10,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "Plain all-purpose or bread flour, water, yeast, and salt are pennies per ball - homemade dough costs a fraction of store-bought balls or a delivery crust.",
      "A long cold ferment lets you use very little yeast; a small bag of yeast makes dozens of pizzas, so it stretches a long way.",
      "Make a double batch and freeze the extra dough balls after shaping - thaw overnight in the fridge for a near-instant pizza night."
    ],
    "substitutions": [
      {
        "forIngredientId": "active-dry-yeast",
        "swap": "Use instant yeast (same amount, skip the proofing step) or a sourdough starter for natural leavening",
        "savings": "negligible cost, instant yeast skips the proofing wait"
      },
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour works fine if you can't find 00 or bread flour",
        "savings": "save ~30% vs specialty 00 flour"
      },
      {
        "forIngredientId": "semolina",
        "swap": "Dust the peel with regular flour or fine cornmeal instead",
        "savings": "use flour you already have, save ~$3"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 11,
      "carbs": 73,
      "fat": 3,
      "fiber": 3
    },
    "emoji": "🍕",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "pizza",
      "dough",
      "baking",
      "fermented",
      "vegan",
      "from-scratch",
      "neapolitan",
      "make-ahead"
    ]
  },
  {
    "id": "bake-garlic-knots",
    "name": "Garlic Knots",
    "description": "Pillowy pizza-dough knots baked until golden, then tossed while hot in a garlicky butter loaded with fresh parsley and parmesan. The classic pizzeria side that disappears off the tray in minutes.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "1 lb ball, store-bought or homemade, at room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 5,
        "note": "about 5 tbsp, melted"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "1 tbsp, for the dough and pan"
      },
      {
        "ingredientId": "garlic",
        "quantity": 0.2,
        "note": "5 cloves, finely minced or grated"
      },
      {
        "ingredientId": "parsley-fresh",
        "quantity": 3,
        "note": "3 tbsp finely chopped"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 5.33,
        "note": "1/3 cup finely grated, plus more to finish"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "for the butter and to flour the surface"
      },
      {
        "ingredientId": "red-pepper-flakes",
        "quantity": 0.1,
        "optional": true,
        "note": "pinch, for heat"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.05,
        "note": "for dusting the work surface"
      }
    ],
    "steps": [
      "Let the pizza dough sit at room temperature for 30-45 minutes so it's relaxed and easy to stretch. Heat the oven to 425F (220C) and line a baking sheet with parchment.",
      "Lightly flour your surface and pat the dough into a rough 8x10-inch rectangle. Cut it into 12 strips about 3/4 inch wide, then roll each strip into a 6-7 inch rope under your palms.",
      "Tie each rope into a simple knot, tucking the ends under so they don't unravel. Arrange the knots on the sheet about an inch apart and brush lightly with olive oil. Let them rest 15 minutes to puff slightly.",
      "Bake for 15-18 minutes, until the knots are golden brown and sound hollow when tapped.",
      "While they bake, gently warm the melted butter with the minced garlic over low heat for 1-2 minutes just until fragrant (do not brown the garlic), then stir in the chopped parsley, salt, and red pepper flakes.",
      "As soon as the knots come out, brush or toss them generously with the garlic-parsley butter so they soak it up while hot.",
      "Shower with the grated parmesan, toss once more, and serve warm with extra parmesan and a side of marinara if you like."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 55,
    "cookTimeMinutes": 18,
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
      "A 1 lb ball of store-bought pizza dough is usually cheaper than a bakery loaf and makes a full dozen knots.",
      "Use the parmesan rinds and stems from your parsley for stock instead of tossing them.",
      "Melt the butter in the still-warm oven or microwave to skip dirtying a pan, then add raw grated garlic off the heat."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use olive oil for a dairy-free, vegan version",
        "savings": "~$0.40 per batch"
      },
      {
        "forIngredientId": "parsley-fresh",
        "swap": "1 tbsp dried parsley",
        "savings": "~$0.80 per batch"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "Pecorino or a sprinkle of garlic powder",
        "savings": "~$0.50 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 8,
      "carbs": 42,
      "fat": 14,
      "fiber": 2
    },
    "emoji": "🧄",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian-American",
    "tags": [
      "garlic knots",
      "pizzeria",
      "bread",
      "side",
      "party",
      "vegetarian",
      "baked",
      "baking"
    ]
  },
  {
    "id": "bake-empanada-dough",
    "name": "Empanada Dough",
    "description": "A tender, flaky homemade masa para empanadas built the traditional way: cold butter cut into flour, bound with an egg and a splash of vinegared ice water. It rolls out smooth, crimps into a clean repulgue, and bakes up golden and sturdy enough to hold any filling without leaking. Makes roughly 12 discs.",
    "mealType": "meal-prep",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "all-purpose flour, about 3 cups / 375g"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "cold unsalted butter, cut into cubes (~6 tbsp); traditional masa uses lard"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "about 1/2 cup ice-cold water, added gradually"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 0.33,
        "optional": true,
        "note": "1 tsp white vinegar for tenderness"
      }
    ],
    "steps": [
      "In a large bowl, whisk together the flour and salt until evenly combined.",
      "Add the cold cubed butter and rub it into the flour with your fingertips (or cut with a pastry blender) until the mixture looks like coarse crumbs with some pea-sized bits remaining.",
      "In a small bowl, beat the egg with the vinegar and about 1/2 cup ice-cold water.",
      "Pour the wet mixture into the flour and stir, then bring it together by hand, adding a splash more cold water only if the dough won't cohere. Do not overwork it.",
      "Turn out onto a clean surface and knead just 5-6 times into a smooth ball; the dough should be soft but not sticky.",
      "Wrap tightly in plastic and rest in the fridge for at least 30 minutes (up to overnight) to relax the gluten and firm the butter.",
      "Roll the chilled dough out on a lightly floured surface to about 2-3mm thick and cut into 5-inch (13cm) rounds using a bowl or cutter; gather and re-roll the scraps once.",
      "Fill, fold, and seal each disc with a fork press or twisted repulgue crimp. Bake filled empanadas at 400F (200C) for 20-25 minutes until deeply golden, brushing with egg wash for shine."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 0,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A bag of flour costs pennies per disc; making your own dough is far cheaper than buying frozen tapas/discos and tastes noticeably better.",
      "Swap the butter for lard or vegetable shortening, the traditional fat, for an even flakier dough at a lower cost.",
      "Make a double batch, cut the discs, and freeze them stacked between parchment squares so you always have empanada dough on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use lard or vegetable shortening instead of butter for a more traditional, flakier masa",
        "savings": "~$0.80 per batch"
      },
      {
        "forIngredientId": "vinegar",
        "swap": "Skip it, or use a squeeze of lemon juice; both just tenderize the gluten",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 4,
      "carbs": 24,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🥟",
    "accentColor": "bg-amber-100",
    "cuisine": "Argentine",
    "tags": [
      "empanada",
      "dough",
      "pastry",
      "from-scratch",
      "baking",
      "latin-american",
      "make-ahead",
      "vegetarian"
    ]
  },
  {
    "id": "bake-cornbread-muffins",
    "name": "Cornbread Muffins",
    "description": "Golden, tender cornbread muffins with crisp tops and a moist, buttery crumb. Real buttermilk and a high ratio of stone-ground cornmeal give them genuine corn flavor and a light, slightly crumbly texture — just barely sweet, the way a great Southern-leaning muffin should be.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "cornmeal",
        "quantity": 1.5,
        "note": "stone-ground yellow cornmeal, ~1.5 cups"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "all-purpose, ~1 cup"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "~3 tbsp; bump to 1/4 cup for sweeter muffins"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp, reacts with buttermilk"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1.25,
        "note": "~1.25 cups"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp melted, plus extra for the tin"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp, for serving"
      }
    ],
    "steps": [
      "Heat the oven to 400F (200C) and grease a 12-cup muffin tin generously with butter, or line with paper liners.",
      "In a large bowl, whisk together the cornmeal, flour, sugar, baking powder, baking soda, and salt until evenly combined.",
      "In a separate bowl, whisk the eggs, then whisk in the buttermilk until smooth. Whisk in the melted (but not hot) butter.",
      "Pour the wet ingredients into the dry and fold gently with a spatula just until no dry streaks remain — the batter should be thick and a little lumpy. Do not overmix, or the muffins turn tough.",
      "Let the batter rest 5 minutes so the cornmeal hydrates and the crumb stays tender.",
      "Divide the batter among the 12 cups, filling each about three-quarters full.",
      "Bake 16 to 19 minutes, until the tops are golden and a toothpick inserted in the center comes out clean.",
      "Cool in the tin 5 minutes, then turn out onto a rack. Serve warm with butter and a drizzle of honey."
    ],
    "totalTimeMinutes": 35,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 18,
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
      "No buttermilk? Stir 1 tbsp vinegar or lemon juice into 1.25 cups regular milk and let it sit 5 minutes — it curdles into a perfect substitute.",
      "Buy cornmeal in the bulk bin; you only use a fraction of a bag per batch and it keeps for months in the freezer.",
      "Bake a double batch and freeze the extras — they reheat in 20 seconds in the microwave and taste fresh."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "Regular milk soured with 1 tbsp vinegar or lemon juice",
        "savings": "~$1.50 a batch vs. buying a whole carton of buttermilk"
      },
      {
        "forIngredientId": "butter",
        "swap": "Vegetable or canola oil (use a little less)",
        "savings": "~$0.40 per batch and keeps muffins extra moist"
      },
      {
        "forIngredientId": "honey",
        "swap": "Maple syrup or just skip it",
        "savings": "~$0.30 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 4,
      "carbs": 27,
      "fat": 8,
      "fiber": 1.5
    },
    "emoji": "🌽",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "cornbread",
      "muffins",
      "baking",
      "southern",
      "side",
      "vegetarian",
      "comfort-food",
      "brunch"
    ]
  },
  {
    "id": "bake-pumpkin-roll",
    "name": "Pumpkin Roll",
    "description": "A classic fall spiral cake: a thin, warmly spiced pumpkin sponge rolled around a tangy cream cheese filling. The trick is rolling the cake while it's still hot so it \"remembers\" the curl and won't crack, then unrolling, filling, and re-rolling once cool. Dusted with powdered sugar and sliced into pretty pinwheels.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "large, room temperature"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 16,
        "note": "1 cup granulated for the sponge"
      },
      {
        "ingredientId": "pumpkin-puree",
        "quantity": 0.7,
        "note": "2/3 cup pure pumpkin (not pie filling)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.75,
        "note": "3/4 cup all-purpose"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp ground"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 16,
        "note": "8 oz block, softened, for the filling"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp unsalted, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup for filling, plus extra for dusting and rolling"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp extract"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.2,
        "note": "1 cup chopped, optional, sprinkled on batter before baking",
        "optional": true
      }
    ],
    "steps": [
      "Preheat oven to 375F. Line a 15x10 jelly-roll pan with parchment, then grease the parchment. Lay out a clean thin kitchen towel and dust it generously with powdered sugar.",
      "Whisk together the flour, baking powder, baking soda, cinnamon, ginger, nutmeg, cloves, and salt in a bowl. Set aside.",
      "In a large bowl, beat the eggs and granulated sugar on high until thick and pale, about 2-3 minutes, then beat in the pumpkin puree. Gently fold in the dry ingredients just until no streaks remain.",
      "Spread the batter evenly into the prepared pan. If using, sprinkle the chopped walnuts over the top. Bake 13-15 minutes, until the cake springs back when lightly touched in the center.",
      "Immediately invert the hot cake onto the powdered-sugar towel and peel off the parchment. Starting from a short end, roll the cake up in the towel while still hot. Cool completely, seam-side down, on a rack (about 1 hour).",
      "Make the filling: beat the cream cheese, softened butter, 1 cup powdered sugar, and vanilla until smooth and fluffy.",
      "Gently unroll the cooled cake just until flat. Spread the filling evenly over the surface, leaving a 1/2-inch border at the far end.",
      "Re-roll the cake snugly (without the towel this time), wrap in plastic, and chill at least 1 hour to firm up.",
      "Dust with powdered sugar, trim the ends, and slice into 1-inch pinwheels to serve."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
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
      "Buy a large can of pumpkin puree and freeze the leftover in a 2/3-cup portion for your next roll or for pancakes.",
      "Skip the walnuts to cut cost; the roll is just as good plain and stays a bit more tender.",
      "Make your own pumpkin spice from cinnamon, ginger, nutmeg, and cloves you already have instead of buying a premixed blend."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use pecans, or leave nuts out entirely",
        "savings": "Omitting saves about $1.50"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Light brown sugar for a deeper caramel note",
        "savings": "Roughly the same cost"
      },
      {
        "forIngredientId": "cloves-ground",
        "swap": "A pinch of allspice or extra cinnamon",
        "savings": "Saves buying a jar you'll rarely finish"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 4,
      "carbs": 42,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🎃",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "fall",
      "thanksgiving",
      "cake",
      "cream-cheese",
      "baked",
      "holiday",
      "baking"
    ]
  },
  {
    "id": "bake-swiss-roll",
    "name": "Swiss Roll",
    "description": "A featherlight whisked sponge baked thin, rolled warm so it keeps its curl, then unrolled, spread with raspberry jam, and re-rolled into a tender spiral dusted with powdered sugar. The classic teatime jam roll done with real genoise technique.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "large, at room temperature"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.45,
        "note": "about 100g for the sponge"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.6,
        "note": "about 90g all-purpose, sifted"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch"
      },
      {
        "ingredientId": "jam",
        "quantity": 10.67,
        "note": "seedless raspberry, about 2/3 cup"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.15,
        "note": "for rolling and dusting"
      }
    ],
    "steps": [
      "Heat the oven to 425F (220C). Line a 10x15-inch rimmed sheet pan with parchment, leaving a slight overhang, and lightly grease it.",
      "In a large bowl set over a pan of simmering water, whisk the eggs and white sugar until just warm to the touch, then take off the heat and beat with a mixer on high for 5-7 minutes until pale, tripled in volume, and thick enough to leave a ribbon trail.",
      "Beat in the vanilla. Sift the flour and salt over the eggs in two additions, folding gently with a spatula each time until just combined so you keep the air in the batter.",
      "Pour into the prepared pan and spread to an even layer, nudging it into the corners. Bake 7-9 minutes, until the sponge is golden and springs back when lightly pressed.",
      "While it bakes, lay a clean kitchen towel flat and dust it generously with powdered sugar. Invert the hot sponge onto the towel, peel off the parchment, and trim any crisp edges.",
      "Starting from a short end, roll the warm sponge up snugly with the towel inside and let it cool completely rolled up, about 30 minutes. This sets the curl so it won't crack.",
      "Gently unroll the cooled sponge, spread the raspberry jam evenly almost to the edges, then re-roll tightly without the towel.",
      "Set the roll seam-side down, dust with more powdered sugar, and slice with a serrated knife to serve."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 9,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Whole eggs and pantry staples are the whole show here, so this is a genuinely cheap bake that looks far fancier than its cost.",
      "No mixer? A balloon whisk and a few minutes of elbow grease over the warm-water bath will get the eggs to ribbon stage.",
      "Use whatever fruit jam you already have on hand; apricot, strawberry, or even lemon curd all work in place of raspberry."
    ],
    "substitutions": [
      {
        "forIngredientId": "jam",
        "swap": "Homemade quick jam by simmering frozen berries with a spoon of sugar until thick",
        "savings": "Saves ~$2 a jar and lets you control sweetness"
      },
      {
        "forIngredientId": "flour",
        "swap": "Swap 2 tbsp of the flour for cocoa to make a chocolate sponge roll",
        "savings": "Costs nothing extra and turns it into a chocolate Swiss roll"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Caster or superfine sugar dissolves faster for an even airier sponge",
        "savings": "About the same price, better volume"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 4,
      "carbs": 31,
      "fat": 3,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-rose-100",
    "cuisine": "Swiss",
    "tags": [
      "dessert",
      "cake",
      "baking",
      "teatime",
      "rolled-cake",
      "sponge",
      "jam"
    ]
  },
  {
    "id": "bake-yule-log",
    "name": "Yule Log (Bûche de Noël)",
    "description": "A classic French Christmas dessert: a feather-light cocoa sponge rolled around lightly sweetened vanilla whipped cream, blanketed in glossy dark chocolate ganache, then forked into bark and dusted with powdered-sugar \"snow.\" Showy but very achievable.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "separated; whole-egg foam method for the cocoa génoise"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 10.67,
        "note": "about 2/3 cup, split between the sponge and the whipped cream"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "about 1/2 cup all-purpose; sift with cocoa"
      },
      {
        "ingredientId": "dutch-cocoa",
        "quantity": 5.33,
        "note": "about 1/3 cup Dutch-process cocoa for the sponge and to dust the towel"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp total, split between sponge and cream"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.5,
        "note": "1 1/2 cups: ~1 cup whipped for filling, 1/2 cup heated for ganache"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.25,
        "note": "for sweetening the whipped cream and dusting as snow"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 8,
        "note": "about 8 oz, finely chopped, for the ganache coating"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 tbsp, stirred into ganache for shine"
      },
      {
        "ingredientId": "instant-coffee",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tsp dissolved into the warm cream to deepen the chocolate"
      }
    ],
    "steps": [
      "Heat oven to 375F (190C). Line a rimmed half-sheet pan with parchment and lightly grease it. Sift together the flour, Dutch cocoa, baking powder, and salt.",
      "Separate the eggs. Whip the whites to soft peaks, then rain in half the white sugar and beat to stiff, glossy peaks. In a second bowl, beat the yolks with the remaining sugar and 1 tsp vanilla until pale, thick, and ribboning, about 3 minutes.",
      "Fold the sifted cocoa-flour into the yolks just until combined, then fold in the whites in three additions, keeping the batter airy. Spread evenly into the pan and bake 10-12 minutes, until the top springs back when pressed.",
      "While it bakes, dust a clean kitchen towel generously with cocoa. Invert the hot cake onto the towel, peel off the parchment, and starting from a short end roll the cake up inside the towel. Let it cool fully rolled so it sets into a curl without cracking.",
      "Whip the cream for the filling with the powdered sugar and remaining vanilla to firm peaks. Gently unroll the cooled cake, spread the whipped cream to the edges, and re-roll snugly (without the towel) into a log.",
      "Make the ganache: heat 1/2 cup heavy cream (with the instant coffee, if using) until steaming, pour over the chopped dark chocolate, let sit 2 minutes, then stir smooth and stir in the butter. Let it thicken to a spreadable consistency.",
      "Trim the ends on a diagonal and set one trimmed piece on the log as a knot/branch. Place the log on a platter and frost completely with ganache, including the stub.",
      "Drag the tines of a fork lengthwise through the ganache to make bark, leaving the cut spiral ends exposed. Chill at least 1 hour to set.",
      "Just before serving, dust with powdered sugar for snow. Slice with a warm knife to reveal the spiral."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 12,
    "difficulty": "hard",
    "equipment": [
      "oven",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Dutch cocoa does the heavy lifting here, so you don't need fancy chocolate; a good supermarket dark bar makes excellent ganache.",
      "Roll the warm cake in a cocoa-dusted towel immediately - this 'pre-training' the curl is what prevents cracks, and costs nothing.",
      "Make it a day ahead; it slices cleaner cold and frees up oven and fridge space for the rest of a holiday spread."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Use semi-sweet chocolate chips melted into the cream",
        "savings": "Often cheaper per ounce than bar chocolate"
      },
      {
        "forIngredientId": "dutch-cocoa",
        "swap": "Natural cocoa powder (add a pinch more baking powder)",
        "savings": "Saves ~$2 vs Dutch-process"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Mascarpone loosened with a splash of milk for the filling",
        "savings": "Uses up an open tub instead of buying cream"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 5,
      "carbs": 30,
      "fat": 21,
      "fiber": 2
    },
    "emoji": "🪵",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "dessert",
      "christmas",
      "holiday",
      "chocolate",
      "cake",
      "rolled-cake",
      "showstopper",
      "make-ahead",
      "baking"
    ]
  },
  {
    "id": "bake-hot-cross-buns",
    "name": "Hot Cross Buns",
    "description": "Hot Cross Buns",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "strong/bread flour, about 4 cups, plus extra for the cross paste"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (one packet)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "about 1 cup, warmed to lukewarm"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "about 6 tbsp, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "about 1/3 cup"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp fine salt"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.5,
        "note": "1/2 tsp freshly grated"
      },
      {
        "ingredientId": "allspice",
        "quantity": 0.25,
        "note": "1/4 tsp ground; mixed spice blend"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.6,
        "note": "about 1 cup; or currants/sultanas"
      },
      {
        "ingredientId": "orange",
        "quantity": 0.5,
        "note": "zest only; stands in for candied mixed peel",
        "optional": true
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 3,
        "note": "about 3 tbsp, for the glaze"
      }
    ],
    "steps": [
      "Warm the milk until just lukewarm (about 100F/38C) and stir in the yeast and a pinch of the sugar; let it sit 5 minutes until foamy. In a large bowl whisk together the flour, remaining sugar, salt, cinnamon, nutmeg, and allspice.",
      "Make a well in the dry mix and add the yeasty milk, the softened butter, the eggs, and the orange zest. Stir to a shaggy dough, then knead on a lightly floured surface (or with a dough hook) for 8-10 minutes until smooth, elastic, and slightly tacky.",
      "Knead in the raisins until evenly distributed. Shape into a ball, place in a greased bowl, cover, and let rise in a warm spot for 1 to 1.5 hours, until doubled in size.",
      "Punch down the dough and divide into 12 equal pieces (about 80g each). Roll each into a tight smooth ball and arrange just touching in a greased 9x13 baking dish so they bake into pull-apart buns.",
      "Cover loosely and let rise again for 45-60 minutes until puffy and the buns are touching. Meanwhile heat the oven to 400F/200C.",
      "Make the cross paste: whisk about 1/2 cup flour with 4-5 tbsp water into a thick pipeable paste. Spoon into a piping bag or zip bag with a corner snipped and pipe a continuous cross over the rows of buns.",
      "Bake for 18-22 minutes, until golden brown and the buns sound hollow when tapped (internal temp ~190F/88C).",
      "While the buns are still hot, warm the apricot jam with a splash of water until loose, push through a sieve if needed, and brush generously over the tops for a glossy finish. Cool slightly and serve warm."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Plain raisins are far cheaper than candied mixed peel and give the same chewy fruit hits; a little orange zest restores the citrus aroma for pennies.",
      "Make the cross with a simple flour-and-water paste instead of buying anything special, and glaze with whatever jam you already have on hand.",
      "Buns freeze beautifully, so a single batch of 12 covers weeks of snacks; reheat a frozen bun for 20 seconds in the microwave to bring back the soft texture."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "Brush with a syrup of sugar dissolved in hot water, or use marmalade or honey",
        "savings": "Avoids buying a dedicated jar; uses pantry sugar"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Dried cranberries, currants, or chopped dried apricots",
        "savings": "Whatever dried fruit is on sale works"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Oat milk or almond milk plus an extra splash of oil",
        "savings": "Cheaper and dairy-free if milk runs out"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 6,
      "carbs": 42,
      "fat": 6,
      "fiber": 2
    },
    "emoji": "🥯",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "easter",
      "baking",
      "yeast bread",
      "spiced",
      "enriched dough",
      "fruit bun",
      "holiday"
    ]
  },
  {
    "id": "bake-bath-buns",
    "name": "Bath Buns",
    "description": "A traditional West Country sweet bun: a rich, brioche-like enriched dough studded with currants and lemon zest, topped with crunchy sugar nibs and finished with a sticky milk-and-sugar glaze. Lightly scented with caraway in the old Bath style.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.9,
        "note": "strong white bread flour, ~450g"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 0.6,
        "note": "7g fast-action dried yeast"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.2,
        "note": "~150ml warm whole milk"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.35,
        "note": "85g softened unsalted butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.18,
        "note": "55g caster sugar in the dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp fine salt"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "note": "100g currants (or substitute mixed candied peel for half)"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of 1 lemon"
      },
      {
        "ingredientId": "caraway-seeds",
        "quantity": 1,
        "note": "1 tsp, traditional Bath scenting (optional)",
        "optional": true
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 0.12,
        "note": "crushed sugar nibs / nib sugar for the top, ~40g"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.06,
        "note": "1 tbsp for the egg wash and glaze"
      }
    ],
    "steps": [
      "Warm the whole milk until just lukewarm, stir in the yeast and a pinch of the caster sugar, and let it sit for 5-10 minutes until frothy. Meanwhile, beat 1 whole egg plus 1 yolk together (reserve the spare white).",
      "In a large bowl, whisk the bread flour, remaining caster sugar, and salt. Make a well, pour in the frothy milk and beaten egg, and bring together into a shaggy dough, then knead 8-10 minutes until smooth and elastic (it will be soft and slightly sticky).",
      "Add the softened butter a little at a time, kneading it fully into the dough between additions until the dough is glossy and supple, about 5 more minutes. Cover and prove in a warm place for 1 to 1.5 hours until doubled.",
      "Knock back the dough and knead in the currants, lemon zest, and caraway seeds until evenly distributed. Divide into 10 equal pieces (about 80g each) and shape each into a tight, rounded bun.",
      "Space the buns well apart on lined baking trays, cover loosely, and prove again for 30-45 minutes until puffy and almost doubled. Heat the oven to 200C / 400F.",
      "Beat the reserved egg white with 1 tbsp milk and brush over the risen buns, then scatter generously with the crushed sugar nibs. Bake for 15-18 minutes until deep golden and hollow-sounding when tapped underneath.",
      "While the buns bake, dissolve 2 tbsp caster sugar in 1 tbsp milk and warm briefly to make a glaze. Brush the hot buns with the sweet glaze as they come out of the oven for the traditional sticky shine, then cool on a wire rack."
    ],
    "totalTimeMinutes": 155,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 18,
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
      "Strong bread flour, yeast, sugar, and dried fruit are pantry staples bought in bulk, so a whole batch of 10 buns costs only a little more than a couple of bakery buns.",
      "Skip pricey mixed candied peel and use plain currants or raisins plus extra lemon zest, which gives almost the same fragrance for a fraction of the cost.",
      "Crush a few cubes of regular sugar in a bag with a rolling pin instead of buying specialty nib sugar for the topping."
    ],
    "substitutions": [
      {
        "forIngredientId": "raisins",
        "swap": "Any dried fruit you have such as sultanas, chopped dates, or dried cranberries",
        "savings": "Use up what's in the cupboard instead of buying currants, saving about $2"
      },
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Crushed regular white sugar cubes or coarse granulated sugar",
        "savings": "Avoids buying specialty nib sugar, saving around $3"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk you have, or water plus an extra tablespoon of butter",
        "savings": "No need to buy whole milk specially, saving about $1"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 6,
      "carbs": 45,
      "fat": 9,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "sweet-bun",
      "enriched-dough",
      "baking",
      "afternoon-tea",
      "yeasted",
      "traditional",
      "west-country"
    ]
  },
  {
    "id": "bake-mexican-conchas",
    "name": "Mexican Conchas",
    "description": "Pillowy-soft Mexican sweet bread (pan dulce) crowned with a crackly cinnamon-vanilla and cocoa sugar paste scored into the signature seashell pattern. A proper enriched dough — milk, butter, eggs, and a slow rise — gives these conchas that tender, fluffy crumb you get from a real panadería. Worth every minute of proofing.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "all-purpose; ~3.5 cups split between dough and topping"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (1 packet)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "3/4 cup, warmed to lukewarm"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "1 1/4 sticks total — softened for dough and topping"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.35,
        "note": "granulated, for dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp, split dough/topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 24,
        "note": "1 1/2 cups, for the shell topping"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 2,
        "note": "2 tbsp, for the chocolate topping half"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "1/2 tsp, for the vanilla topping half"
      }
    ],
    "steps": [
      "Warm the milk to lukewarm (about 110F) and stir in the yeast with a pinch of the sugar; let it sit 5-10 minutes until foamy. In a large bowl, combine 2 3/4 cups flour, the granulated sugar, and salt.",
      "Add the foamy milk, 2 eggs, 6 tbsp softened butter, and 1 tsp vanilla to the dry ingredients. Mix to a shaggy dough, then knead 10-12 minutes by hand (or 8 in a stand mixer) until smooth, elastic, and slightly tacky.",
      "Place the dough in a greased bowl, cover, and let rise in a warm spot 1 to 1.5 hours, until doubled.",
      "Make the topping: cream the remaining 4 tbsp softened butter with the powdered sugar, then work in 3/4 cup flour and 1 tsp vanilla until a soft, pliable paste forms. Divide in half — knead the cocoa into one half and the cinnamon into the other.",
      "Punch down the dough and divide into 8 equal balls. Roll each smooth and arrange on parchment-lined baking sheets, leaving room to spread.",
      "Divide each topping color into 4 portions. Flatten each into a thin disc between plastic wrap and drape one over each dough ball, gently pressing to cover the top.",
      "Use a concha cutter or a paring knife to score the classic seashell or grid pattern into the topping. Cover loosely and proof 45-60 minutes, until puffy.",
      "Bake in a preheated 350F oven for 18-20 minutes, until the bread is set and lightly golden at the edges and the topping is crackled. Cool on a rack at least 15 minutes before eating."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 20,
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
      "Conchas are pure pantry baking — flour, sugar, yeast, eggs, butter, milk. One batch of eight costs a fraction of buying them individually at a panaderia.",
      "Day-old conchas are gold: split, butter, and toast them, or dunk in hot chocolate or cafe con leche the Mexican way.",
      "Make the topping while the dough rises so there's no waiting, and freeze extra baked conchas — they reheat soft in 15 seconds in the microwave."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use any milk you have, or oat milk for a dairy-lighter version",
        "savings": "Skip a special trip; use what's open"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar in a blender until fine for the topping",
        "savings": "Saves buying a separate bag of powdered sugar"
      },
      {
        "forIngredientId": "cocoa",
        "swap": "Skip it and make all conchas vanilla-cinnamon",
        "savings": "One less ingredient, still authentic"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 7,
      "carbs": 52,
      "fat": 12,
      "fiber": 2
    },
    "emoji": "🐚",
    "accentColor": "bg-amber-100",
    "cuisine": "Mexican",
    "tags": [
      "pan dulce",
      "sweet bread",
      "baking",
      "yeasted",
      "breakfast",
      "dessert",
      "Mexican"
    ]
  },
  {
    "id": "bake-mexican-polvorones",
    "name": "Mexican Polvorones (Mexican Wedding Cookies)",
    "description": "Tender, crumbly shortbread cookies loaded with toasted pecans and warm cinnamon, rolled twice in powdered sugar so they melt the second they hit your tongue. A classic Mexican holiday cookie that comes together with pantry staples and no mixer required.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks), softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup in dough + ~1 cup for rolling/coating"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "about 2 1/4 cups all-purpose"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup, toasted and finely chopped/ground"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1.5,
        "note": "1 1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp, plus a pinch for the sugar coating"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      }
    ],
    "steps": [
      "Toast the pecans in a dry skillet over medium heat for 4-5 minutes until fragrant, then cool and finely chop or pulse in a blender to a coarse meal (do not over-process into paste).",
      "In a large bowl, beat the softened butter with 1/2 cup of the powdered sugar until pale and fluffy, then beat in the vanilla.",
      "Whisk the flour, 1 tsp cinnamon, and salt together, then add to the butter along with the ground pecans. Mix just until a soft, slightly crumbly dough forms.",
      "Chill the dough for 20-30 minutes so it holds its shape, then preheat the oven to 350F (175C) and line two baking sheets with parchment.",
      "Roll tablespoon-sized portions into 1-inch balls (or small crescents) and space them 1 inch apart on the sheets.",
      "Bake 13-15 minutes, until the bottoms are lightly golden and the tops are set but still pale; the cookies should not brown on top.",
      "Let the cookies rest on the sheet for 3-4 minutes until firm enough to handle but still warm.",
      "While warm, roll each cookie in the remaining ~1 cup powdered sugar (mix in a pinch of cinnamon) to coat completely.",
      "Cool fully, then roll a second time in powdered sugar for the classic snowy finish."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
    "difficulty": "easy",
    "equipment": [
      "oven",
      "stovetop",
      "blender"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy pecans in bulk or sub the cheaper walnuts; toasting cheap nuts deepens their flavor so you can use less.",
      "Make your own powdered sugar by blending granulated sugar with a pinch of cornstarch on high for 60 seconds.",
      "The dough freezes well as pre-rolled balls, so make a double batch and bake straight from frozen, adding 2-3 minutes."
    ],
    "substitutions": [
      {
        "forIngredientId": "pecans",
        "swap": "Use walnuts or almonds, which are usually cheaper and just as traditional",
        "savings": "~$2 per batch"
      },
      {
        "forIngredientId": "butter",
        "swap": "Use half butter, half lard or shortening for an even more authentic, ultra-crumbly texture",
        "savings": "~$1 per batch"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "A scraped vanilla bean's worth or a splash of Mexican vanilla; or use almond extract (use half the amount)",
        "savings": "pennies"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 1.5,
      "carbs": 13,
      "fat": 10,
      "fiber": 0.7
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Mexican",
    "tags": [
      "cookies",
      "dessert",
      "holiday",
      "shortbread",
      "pecans",
      "no-mixer-needed",
      "make-ahead",
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "bake-filipino-ensaimada",
    "name": "Filipino Ensaimada",
    "description": "The beloved Filipino merienda bread: a soft, buttery, egg-yolk-enriched brioche coiled into a spiral, baked until golden, then crowned with a smear of butter, a snowfall of sugar, and a generous shower of grated cheese. Pillowy-tender with a salty-sweet finish.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.75,
        "note": "about 2.75 cups bread or all-purpose flour"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2.25 tsp (1 packet)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "3/4 cup, warmed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "1/3 cup in dough, plus more for topping"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "use 4 yolks in dough; reserve whites for another use"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup softened in dough + extra melted for brushing"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp"
      },
      {
        "ingredientId": "cheese",
        "quantity": 0.4,
        "note": "grated Edam (queso de bola) or sharp cheddar for topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.08,
        "optional": true,
        "note": "optional fine dusting over the sugar topping"
      }
    ],
    "steps": [
      "Bloom and mix: Whisk the warm milk (about 110F), yeast, and 1 tablespoon of the sugar; let it foam 5-8 minutes. In a large bowl combine the flour, remaining sugar, and salt, then stir in the egg yolks and the foamy milk to form a shaggy, sticky dough.",
      "Knead: Turn out and knead 10-12 minutes (or 8 minutes in a stand mixer with dough hook) until smooth and elastic. Gradually work in the softened butter a tablespoon at a time, kneading until the dough is glossy, supple, and passes the windowpane test.",
      "First rise: Place in a buttered bowl, cover, and let rise in a warm spot 1.5-2 hours until doubled. The high-yolk, high-butter dough is rich, so be patient.",
      "Shape the coils: Punch down and divide into 8 pieces. Roll each into a thin rope or flatten into a long strip, brush generously with melted butter, then roll up and twist into a tight spiral, tucking the end underneath. Place in buttered round molds or on a lined tray.",
      "Second rise: Cover loosely and proof 1 to 1.5 hours until puffy and nearly doubled.",
      "Bake: Bake at 350F for 15-18 minutes until light golden; ensaimada should stay pale and soft, not browned hard. Cool 5 minutes.",
      "Finish: While still warm, brush the tops with melted butter, sprinkle generously with granulated sugar, then blanket with grated Edam or cheddar. Dust with powdered sugar if you like and serve warm."
    ],
    "totalTimeMinutes": 240,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 18,
    "difficulty": "hard",
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
      "Buy a block of Edam or cheddar and grate it yourself instead of paying for pre-shredded cheese; it also melts and clings better.",
      "Don't waste the 4 leftover egg whites: freeze them for meringue or egg-white omelets, or use them in another bake the same day.",
      "Bread flour gives the best chew, but all-purpose works fine and is cheaper if you already have it on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "cheese",
        "swap": "Use sharp cheddar instead of Edam (queso de bola)",
        "savings": "Cheddar is widely cheaper and gives the same salty-sweet hit"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Warm water plus an extra 1/2 tbsp butter",
        "savings": "Skips buying milk if you only need a small amount"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Just use more granulated sugar on top",
        "savings": "Avoids buying powdered sugar for an optional dusting"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 9,
      "carbs": 38,
      "fat": 20,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-yellow-100",
    "cuisine": "Filipino",
    "tags": [
      "filipino",
      "merienda",
      "brioche",
      "sweet-bread",
      "baking",
      "cheese",
      "breakfast-pastry",
      "enriched-dough"
    ]
  },
  {
    "id": "bake-hong-kong-egg-tarts",
    "name": "Hong Kong Egg Tarts",
    "description": "Bakery-style HK dan tat: a tender, buttery shortcrust shell cradling a silky, wobbly egg custard with a glassy golden top. Built on the classic evaporated-milk-and-egg ratio so the custard sets smooth and tender, never rubbery.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.4,
        "note": "all-purpose, ~250g for the tart shells"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.45,
        "note": "softened, ~115g for the pastry"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.2,
        "note": "~55g, for a tender shortcrust"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "1 for the pastry, ~4 for the custard"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 0.55,
        "note": "~180ml, the defining HK custard dairy"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.12,
        "note": "~110g dissolved into hot water for the custard syrup"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.05,
        "optional": true,
        "note": "tiny splash, traditional tarts often skip it"
      }
    ],
    "steps": [
      "Make the pastry: beat softened butter with powdered sugar until pale and creamy, then beat in 1 egg until fully combined. Mix in the flour just until a soft dough forms, then wrap and chill 30 minutes.",
      "Make the custard syrup: dissolve the white sugar in about 180ml just-boiled water, stir until clear, then let it cool to lukewarm so it won't scramble the eggs.",
      "Whisk the remaining 4 eggs lightly with the evaporated milk and vanilla, then pour in the cooled sugar syrup and whisk gently — avoid creating foam. Strain the custard twice through a fine sieve for a glassy finish.",
      "Heat oven to 200C / 400F. Divide the chilled dough into 10 pieces and press each thinly and evenly up the sides of a tart tin or muffin cups, keeping the rim level with the top.",
      "Skim off any surface bubbles, then pour the strained custard into each shell until about 90 percent full.",
      "Bake at 200C / 400F for 10 minutes, then lower to 180C / 350F and bake another 10-15 minutes, until the pastry is golden and the custard is just set with a slight wobble in the center — a toothpick should stand upright.",
      "If the custard puffs and domes, prop the oven door open slightly to release heat; this keeps the surface flat and silky.",
      "Cool in the tins for 5 minutes, then carefully unmold. Serve warm for the classic just-baked dan tat experience."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 25,
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
      "A box of evaporated milk and a bag of flour make 2-3 batches, so the per-tart cost stays tiny compared to a bakery's $1+ each.",
      "Save the strained-out egg foam and bits to scramble for breakfast instead of wasting them.",
      "Use a muffin tin if you don't own fluted tart tins — the custard-to-crust ratio is nearly identical."
    ],
    "substitutions": [
      {
        "forIngredientId": "evaporated-milk",
        "swap": "Equal parts whole milk simmered briefly, or whole milk plus a splash of cream for richness",
        "savings": "Saves buying a specialty can if you already have milk"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Granulated sugar blitzed fine, or just use regular sugar for a slightly crisper crust",
        "savings": "~$1, skips buying powdered sugar"
      },
      {
        "forIngredientId": "butter",
        "swap": "Half butter, half lard or shortening for an even flakier, old-school shell",
        "savings": "Shortening is cheaper per gram than butter"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 5,
      "carbs": 24,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-yellow-100",
    "cuisine": "Hong Kong",
    "tags": [
      "egg tart",
      "dan tat",
      "dim sum",
      "custard",
      "baking",
      "cantonese",
      "dessert",
      "snack"
    ]
  },
  {
    "id": "bake-pineapple-buns",
    "name": "Pineapple Buns (Bo Lo Bao)",
    "description": "The Hong Kong bakery classic — pillowy tangzhong milk bread crowned with a sweet, crackly cookie crust that crazes into a golden pineapple-skin pattern as it bakes. No actual pineapple inside; just buttery, fragrant rolls best eaten warm, optionally split around a cold slab of butter.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.55,
        "note": "bread flour preferred for the dough, plus extra for the cookie topping (~430g total)"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp instant yeast"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.19,
        "note": "warm, for dough + 3 Tbsp reserved for the tangzhong roux"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "1 in dough, 1 split between cookie topping and egg wash"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.18,
        "note": "split: ~50g in dough, ~70g in cookie topping"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "softened; ~40g in dough, ~60g in cookie topping"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp, for the cookie topping"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.13,
        "optional": true,
        "note": "stand-in for milk powder — 2 Tbsp dry milk powder in the topping adds authentic aroma if you have it"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tsp, in the cookie topping"
      }
    ],
    "steps": [
      "Make the tangzhong: whisk 3 Tbsp milk, 3 Tbsp water, and 2 Tbsp flour in a small pan over low heat, stirring constantly until it thickens into a smooth paste (about 65C/lines form on the bottom). Scrape into a bowl and let cool to lukewarm.",
      "Make the dough: combine 2 cups bread flour, the yeast, 1/4 cup sugar, and salt. Add the cooled tangzhong, 1/2 cup warm milk, 1 egg, and mix into a shaggy dough, then knead 8-10 minutes until smooth and elastic. Knead in 3 Tbsp softened butter until fully absorbed and the dough is silky.",
      "Cover and let rise in a warm spot until doubled, about 60-90 minutes.",
      "Meanwhile make the cookie topping: cream 4 Tbsp softened butter with 1/3 cup sugar until light, beat in half a beaten egg, the milk powder (if using) and vanilla, then fold in 3/4 cup flour and the baking powder to form a soft dough. Chill until firm enough to handle.",
      "Punch down the risen dough, divide into 8 pieces, roll each into a tight smooth ball, and space them on a lined baking sheet. Cover and proof 40-45 minutes until puffy.",
      "Divide the cookie topping into 8, flatten each between plastic wrap into a thin disc, and drape one over each proofed bun so it covers the top and upper sides; brush the topping with the remaining beaten egg.",
      "Score a crosshatch into the topping with a knife or bench scraper so it cracks into the signature pineapple pattern as it bakes.",
      "Bake at 375F (190C) for 15-18 minutes until the crust is deep golden and crackled and the buns sound hollow when tapped.",
      "Cool 5-10 minutes; serve warm, and for the classic bo lo yau, split a hot bun and tuck in a cold pat of butter."
    ],
    "totalTimeMinutes": 200,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 18,
    "difficulty": "hard",
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
      "The tangzhong (cooked flour-water roux) costs nothing and keeps these buns soft for days — skip it and they stale by the next morning.",
      "Make a double batch of cookie topping, freeze the discs flat between parchment, and you can pull off fresh pineapple buns from plain dinner rolls anytime.",
      "No milk powder? A splash of regular milk in the topping works; the powder just deepens the bakery aroma, so don't buy a whole tin for one batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use plant-butter in both dough and topping for a dairy-free version",
        "savings": "About the same cost, but avoids a separate dairy buy"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Warm water plus a splash of any milk you have",
        "savings": "Saves ~$0.40 and uses up odds and ends"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Active dry yeast, bloomed in the warm milk for 5 min first",
        "savings": "Cheaper per batch if bought in bulk"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 6,
      "carbs": 42,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍍",
    "accentColor": "bg-yellow-100",
    "cuisine": "Hong Kong",
    "tags": [
      "bakery",
      "enriched-bread",
      "tangzhong",
      "sweet-bun",
      "cantonese",
      "breakfast",
      "dim-sum",
      "baking"
    ]
  },
  {
    "id": "bake-melonpan",
    "name": "Melonpan",
    "description": "Japanese bakery-style melonpan: pillowy, lightly sweet enriched milk-bread buns wrapped in a crisp sugar-cookie crust, scored in the signature crosshatch and sparkled with coarse sugar. Crackly on the outside, soft and fluffy within.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.85,
        "note": "bread flour for dough + all-purpose for cookie crust, ~400g total"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp / ~6g"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.25,
        "note": "warm, ~140ml for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "1 for dough, 1 for cookie crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 0.4,
        "note": "30g softened in dough + 50g softened in crust"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.45,
        "note": "40g in dough + 70g in cookie crust"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "note": "1/2 tsp in cookie crust"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 0.2,
        "optional": true,
        "note": "coarse sugar for sprinkling the crust"
      }
    ],
    "steps": [
      "Make the dough: stir the instant yeast into warm milk and let it sit 5 minutes until foamy, then add 1 beaten egg, 40g sugar, and salt. Mix in roughly 250g bread flour to form a shaggy dough.",
      "Knead the dough 8-10 minutes until smooth and elastic, working in the 30g softened butter halfway through; it should pass a thin windowpane test. Cover and let rise in a warm spot 60-90 minutes until doubled.",
      "Make the cookie crust: cream 50g softened butter with 70g sugar until pale, beat in 1 egg and the vanilla, then fold in about 150g flour to form a soft cookie dough. Chill 20-30 minutes until workable.",
      "Punch down the risen dough and divide into 8 equal pieces; roll each into a tight, smooth ball and rest 10 minutes under a towel.",
      "Divide the chilled cookie dough into 8 pieces, flatten each between plastic wrap into a thin disc, and drape one over each bun, pressing gently so it covers the top two-thirds.",
      "Roll the cookie-topped buns in coarse sugar, then score a crosshatch pattern into the crust with a bench scraper or knife to create the melon-rind look.",
      "Arrange on lined trays with space to expand and proof uncovered 40-50 minutes until puffy (uncovered keeps the crust crackly).",
      "Bake in a preheated 340F (170C) oven for 13-15 minutes until the cookie crust is set and pale golden; avoid over-browning so they stay tender. Cool on a rack at least 15 minutes before eating."
    ],
    "totalTimeMinutes": 210,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 15,
    "difficulty": "hard",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "All-purpose flour works fine for both dough and crust if you don't want to buy bread flour; just knead a couple minutes longer to build gluten.",
      "Skip store-bought coarse sugar and pulse regular granulated sugar a few times, or just use plain granulated for the sprinkle.",
      "Buns freeze beautifully: freeze after cooling, then reheat 5 minutes at 300F to revive the crackly crust instead of buying fresh."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use any milk you have, or water plus an extra teaspoon of butter",
        "savings": "Saves buying milk if your fridge is empty"
      },
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Plain granulated sugar, or skip the sprinkle entirely",
        "savings": "~$3 vs a bag of specialty coarse sugar"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "A pinch of cinnamon or just omit it",
        "savings": "Saves the cost of vanilla extract"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 6,
      "carbs": 47,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍈",
    "accentColor": "bg-emerald-100",
    "cuisine": "Japanese",
    "tags": [
      "melonpan",
      "japanese",
      "bread",
      "sweet",
      "baking",
      "cookie-crust",
      "enriched-dough",
      "bakery"
    ]
  },
  {
    "id": "bake-mooncakes",
    "name": "Mooncakes (Cantonese Red Bean & Salted Egg Yolk)",
    "description": "Classic Cantonese-style baked mooncakes with a tender, glossy golden-syrup skin wrapped around sweet red bean paste and a savory salted egg yolk center. Pressed in a decorative mold and rested for a few days so the skin softens and turns translucent — the way the bakeries do it.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "all-purpose or cake flour, ~200g for the syrup skin"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 0.4,
        "note": "golden/invert syrup, ~140g; the defining mooncake-skin syrup"
      },
      {
        "ingredientId": "peanut-oil",
        "quantity": 0.1,
        "note": "~50g neutral peanut oil for the dough"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "alkaline (lye/kansui) water: tiny pinch dissolved in 1 tsp water — gives color and tender skin"
      },
      {
        "ingredientId": "red-beans",
        "quantity": 1,
        "note": "made into ~600g sweet red bean (or lotus seed) paste; or buy ready-made paste"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 0.3,
        "note": "~120g, for cooking down the bean paste"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "6 salted duck egg yolks split among the cakes; plus 1 egg yolk for the wash"
      }
    ],
    "steps": [
      "Make the paste (or use store-bought): simmer cooked red beans with the sugar and a little peanut oil over low heat, mashing and stirring constantly until thick enough to hold its shape and pull away from the pan; cool completely, then divide into twelve ~50g balls.",
      "Prep the salted egg yolks: rinse, pat dry, and bake or steam the duck yolks until just set; halve each so you get twelve pieces, and press one into the center of each paste ball, re-rolling to seal the yolk inside.",
      "Make the syrup skin: whisk together the golden/invert syrup, peanut oil, and the alkaline water (a pinch of baking soda dissolved in 1 tsp water). Sift in the flour and fold just until a soft, slightly sticky dough forms — do not knead. Rest, covered, 1 hour.",
      "Divide the dough into twelve ~25g pieces. Working one at a time, flatten a piece into a thin round, set a filling ball on top, and gently push the dough up and around the filling until fully enclosed, sealing the seam.",
      "Dust a mooncake mold lightly with flour, set the wrapped ball seam-side up, and press firmly to imprint the design; release onto a parchment-lined tray. Repeat with the rest.",
      "Spritz the tops lightly with water and bake at 375F (190C) for 5-6 minutes to set the pattern. Remove, let cool 10 minutes, then brush a very thin layer of beaten egg yolk only on the raised surfaces.",
      "Return to the oven and bake another 10-12 minutes until golden brown and the sides look set. Cool completely on the tray.",
      "Rest the mooncakes in an airtight container at room temperature for 2-3 days (回油): the skin will absorb oil from the filling, soften, and turn glossy and slightly translucent before serving."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 120,
    "cookTimeMinutes": 30,
    "difficulty": "hard",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "dairy-free"
    ],
    "cheapTips": [
      "Buy ready-made lotus or red bean paste in a can to skip the long simmer — it's cheaper than the time and gas of cooking dried beans down by hand.",
      "Golden syrup keeps for months, so one bottle covers several batches; you only use a little per round of mooncakes.",
      "Salted duck egg yolks are sold in vacuum packs at Asian markets for far less than whole salted eggs — buy just the yolks you need."
    ],
    "substitutions": [
      {
        "forIngredientId": "corn-syrup",
        "swap": "Homemade invert syrup (sugar + water + a squeeze of lemon, simmered) or honey",
        "savings": "Saves ~$3 vs a specialty bottle of golden syrup"
      },
      {
        "forIngredientId": "red-beans",
        "swap": "Sweet white lotus or mung bean paste, or store-bought canned paste",
        "savings": "Canned paste saves the cost of dried beans plus an hour of cooking"
      },
      {
        "forIngredientId": "eggs",
        "swap": "Skip the salted yolk for plain paste mooncakes",
        "savings": "Saves ~$2 on salted duck egg yolks"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 5,
      "carbs": 48,
      "fat": 9,
      "fiber": 3
    },
    "emoji": "🥮",
    "accentColor": "bg-amber-100",
    "cuisine": "Chinese",
    "tags": [
      "mooncake",
      "mid-autumn festival",
      "cantonese",
      "baked",
      "dessert",
      "red bean",
      "salted egg yolk",
      "traditional",
      "baking"
    ]
  },
  {
    "id": "bake-kunafa",
    "name": "Kunafa",
    "description": "The classic Levantine cheese kunafa: a crisp, golden crown of buttery shredded kataifi pastry hiding a layer of molten stretchy cheese, drenched in fragrant lemon-cardamom sugar syrup and showered with crushed pistachios. Best served warm so the cheese pulls.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "phyllo",
        "quantity": 1,
        "note": "1 lb shredded kataifi (knafeh) dough, thawed"
      },
      {
        "ingredientId": "ghee",
        "quantity": 0.75,
        "note": "melted clarified butter/ghee for soaking the pastry"
      },
      {
        "ingredientId": "mozzarella",
        "quantity": 1.5,
        "note": "fresh low-moisture mozzarella standing in for akkawi/nabulsi cheese; soaked to desalt if using akkawi"
      },
      {
        "ingredientId": "ricotta",
        "quantity": 0.5,
        "note": "softens and stretches the cheese layer (akin to sweet ashta)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.5,
        "note": "for the attar syrup plus a little for the cheese"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juice keeps the syrup from crystallizing"
      },
      {
        "ingredientId": "cardamom-green",
        "quantity": 1,
        "note": "lightly crushed pods to perfume the syrup (rosewater/orange-blossom traditional)"
      },
      {
        "ingredientId": "pistachios",
        "quantity": 0.5,
        "note": "raw, finely crushed for garnish"
      }
    ],
    "steps": [
      "Make the syrup (attar) first so it cools: combine sugar with an equal amount of water and the crushed cardamom pods in a small saucepan, bring to a boil, then add a squeeze of lemon juice and simmer 8-10 minutes until lightly syrupy. Remove from heat and let cool completely - cold syrup on hot kunafa is the secret to the crunch.",
      "Preheat the oven to 400F (200C). Pull the kataifi dough apart in a large bowl, fluffing and separating the strands so they soak up butter evenly.",
      "Pour the melted ghee over the kataifi and work it through with your fingers until every strand is glistening; this is what makes it shatteringly crisp and golden.",
      "Tear the mozzarella into small pieces and mix with the ricotta and a spoonful of sugar to make a soft, spreadable cheese layer. If using salty akkawi, soak it in water first and pat dry.",
      "Press just over half the buttered kataifi firmly into the bottom and a little up the sides of a buttered round or cast-iron pan, packing it into an even, compact base.",
      "Spread the cheese mixture over the base in an even layer, leaving a small border, then cover completely with the remaining buttered kataifi and press down firmly so it holds together.",
      "Bake 30-40 minutes until the top is deep golden and the edges pull away from the pan; for the classic crisp bottom, finish the last few minutes on the stovetop or broil briefly, watching closely.",
      "Immediately invert the kunafa onto a serving plate while piping hot, then ladle the cooled syrup evenly over the top so it sizzles and soaks in.",
      "Shower generously with crushed pistachios and serve warm at once, cutting into wedges so the cheese stretches."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
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
      "Kataifi/knafeh dough freezes well - buy a box from a Middle Eastern grocer and freeze the unused half for your next batch instead of paying dessert-shop prices.",
      "Fresh akkawi can be pricey; low-moisture mozzarella mixed with a little ricotta gives the same stretch for far less.",
      "Make the syrup with plain sugar and water and skip bottled rosewater - a couple of cardamom pods and lemon do the aromatic work for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "Melted unsalted butter (clarify by skimming the foam)",
        "savings": "Saves about $3-4 per batch over jarred ghee"
      },
      {
        "forIngredientId": "mozzarella",
        "swap": "Soaked-and-rinsed fresh akkawi or a sweet ricotta/ashta filling",
        "savings": "House-brand mozzarella is roughly half the price of imported akkawi"
      },
      {
        "forIngredientId": "pistachios",
        "swap": "Crushed walnuts or slivered almonds",
        "savings": "Saves around $4-5 versus shelled pistachios"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 11,
      "carbs": 38,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🧀",
    "accentColor": "bg-amber-100",
    "cuisine": "Middle Eastern (Levantine)",
    "tags": [
      "dessert",
      "middle-eastern",
      "cheese",
      "syrup",
      "pistachio",
      "kataifi",
      "sweet",
      "vegetarian",
      "baking"
    ]
  },
  {
    "id": "bake-maamoul",
    "name": "Ma'amoul (Date-Filled Semolina Cookies)",
    "description": "Tender, melt-in-the-mouth Levantine shortbread cookies made from a semolina-and-flour dough rich with ghee and perfumed with orange blossom and cardamom, stuffed with a spiced Medjool date paste. Traditionally pressed in carved wooden molds and baked pale, then dusted with powdered sugar — the iconic sweet of Eid and Easter across Syria, Lebanon, and Palestine.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "semolina",
        "quantity": 0.5,
        "note": "fine semolina (smeed) — the backbone of the dough"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.15,
        "note": "all-purpose flour, for structure"
      },
      {
        "ingredientId": "ghee",
        "quantity": 0.4,
        "note": "or clarified butter (samneh), melted warm"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.05,
        "note": "just a touch in the dough — most sweetness comes from the dates"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 0.3,
        "note": "ground; stands in for mahleb"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 0.06,
        "note": "stands in for orange-blossom water; use 1 tbsp blossom water if you have it"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 0.1,
        "note": "tiny pinch, traditional for a lighter crumb"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.15,
        "note": "warm, to bring the dough together"
      },
      {
        "ingredientId": "medjool-dates",
        "quantity": 1.2,
        "note": "pitted, for the filling paste"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.3,
        "note": "ground, for the date filling"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.15,
        "optional": true,
        "note": "a pinch in the date paste"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 0.15,
        "note": "for dusting the baked cookies"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.2,
        "optional": true,
        "note": "optional — fold chopped walnuts into some for variety"
      }
    ],
    "steps": [
      "Make the dough: in a large bowl combine 1.5 cups fine semolina, 1/2 cup flour, 2 tbsp sugar, the ground cardamom, and a small pinch of instant yeast. Pour over the warm melted ghee and rub it in thoroughly with your fingertips until every grain is coated and the mixture feels like damp sand. Cover and rest at room temperature for at least 4 hours or overnight — this lets the semolina swell and is the secret to a tender cookie.",
      "The next day, sprinkle the orange juice (or orange-blossom water) and just enough warm milk over the rested semolina, gathering gently into a soft, pliable dough. Do NOT knead — work it only until it just holds together, or the cookies will turn tough. Cover and let it relax 15 minutes.",
      "Make the filling: blitz or mash the pitted Medjool dates with the cinnamon and a pinch of nutmeg into a smooth, sticky paste. If stiff, warm it briefly and work in a teaspoon of ghee so it rolls easily. Divide and roll into small marble-sized balls.",
      "Shape: pinch off a walnut-sized piece of dough, flatten it in your palm into a cup, set a date ball in the center, and pull the dough up and over to fully enclose it. Pinch closed and smooth into a ball with no cracks.",
      "Press each ball firmly into a floured ma'amoul mold (or shape by hand into a slightly flattened dome and mark the top with a fork or tweezers). Rap the mold once on the counter to release, and set the patterned cookie on a parchment-lined tray, pattern side up.",
      "Heat the oven to 350F (175C). Bake the cookies on the middle rack for 15-20 minutes, JUST until the bottoms are lightly golden and the tops are still pale — ma'amoul should never brown on top or they go dry. Rotate the tray halfway through.",
      "Let the cookies cool completely on the tray; they are fragile while warm and firm up as they cool. Once fully cool, dust generously with powdered sugar. Store in an airtight tin — they keep beautifully for up to two weeks and the flavor deepens by day two."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 55,
    "cookTimeMinutes": 20,
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
      "Buy semolina in bulk from a Middle Eastern or South Asian grocer — it's a fraction of the supermarket price and is the bulk of this recipe.",
      "No ma'amoul mold? A fork, the tip of a teaspoon, or kitchen tweezers make beautiful traditional patterns by hand for free.",
      "Dates near their sell-by date are often deeply discounted and are actually softer and easier to mash into filling — perfect here."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "Melt regular unsalted butter and skim the foam, or use plant butter for a dairy-free version",
        "savings": "Butter is usually cheaper per ounce than jarred ghee"
      },
      {
        "forIngredientId": "medjool-dates",
        "swap": "Cheaper Deglet Noor dates or a ready-made date paste block",
        "savings": "Saves 40-50% versus premium Medjools"
      },
      {
        "forIngredientId": "orange-juice",
        "swap": "A few drops of vanilla extract plus a little water if you have no blossom water or juice",
        "savings": "Uses pantry staples instead of a special bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 30,
      "fat": 10,
      "fiber": 2
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Levantine (Lebanese/Syrian/Palestinian)",
    "tags": [
      "dessert",
      "cookies",
      "date-filled",
      "eid",
      "easter",
      "middle-eastern",
      "shortbread",
      "make-ahead",
      "vegetarian",
      "holiday",
      "baking"
    ]
  },
  {
    "id": "bake-coconut-macaroons",
    "name": "Coconut Macaroons",
    "description": "Chewy, golden-edged coconut macaroons bound with sweetened condensed milk and lifted with whipped egg whites for a tender crumb. Crisp on the outside, moist and dense inside, with an optional dark-chocolate dip. A classic, foolproof bake that needs no mixer.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 28,
        "note": "about 14 oz / 5 cups shredded coconut"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 0.7,
        "note": "scant 1 can (about 10-11 oz) as the binder"
      },
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 0.25,
        "note": "2 large egg whites, whipped to soft peaks"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1.5 tsp vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp, deepens the flavor"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 10.67,
        "optional": true,
        "note": "about 2/3 cup, melted for dipping"
      }
    ],
    "steps": [
      "Heat the oven to 325F (160C) and line two baking sheets with parchment paper.",
      "In a large bowl, stir together the shredded coconut, sweetened condensed milk, vanilla, almond extract, and salt until every strand of coconut is coated and the mixture is sticky and thick.",
      "In a separate clean, grease-free bowl, whisk the egg whites until they hold soft, glossy peaks. This lightens the dense coconut and gives the macaroons a tender interior.",
      "Gently fold the whipped whites into the coconut mixture in two additions, keeping as much air as possible while still combining evenly.",
      "Using a tablespoon or small cookie scoop, mound packed 1.5-inch portions onto the parchment about 1 inch apart, gently shaping each into a peaked pyramid with damp fingers.",
      "Bake 18-22 minutes, until the peaks and edges are deep golden brown while the centers stay pale; rotate the pans halfway through for even color.",
      "Let the macaroons cool on the sheets for 10 minutes to set, then transfer to a rack to cool completely.",
      "If dipping, melt the chocolate gently, dip the bottom of each cooled macaroon and set on parchment; chill 10 minutes until the chocolate firms."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 22,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy shredded coconut from the bulk bin or a large bag rather than small baking packets to cut the per-batch cost significantly.",
      "Skip the chocolate dip if you want them plain and cheaper; the macaroons are excellent on their own.",
      "Freeze leftover egg yolks in a covered cup with a pinch of sugar to use later for custard or enriched bread instead of wasting them."
    ],
    "substitutions": [
      {
        "forIngredientId": "liquid-egg-whites",
        "swap": "Use the whites from 2 fresh whole eggs and save the yolks for another use",
        "savings": "Often cheaper than buying a carton of liquid whites if you keep eggs on hand"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "Any chopped dark or milk chocolate bar you already have",
        "savings": "Saves buying a dedicated bag of chips"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Just use a little extra vanilla extract",
        "savings": "Avoids buying a single-use bottle of almond extract"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 22,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🥥",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "cookies",
      "coconut",
      "gluten-free",
      "no-mixer",
      "make-ahead",
      "holiday",
      "baking"
    ]
  },
  {
    "id": "bake-snickerdoodle-bread",
    "name": "Snickerdoodle Bread",
    "description": "A tender, buttery quick bread that tastes exactly like a snickerdoodle cookie — soft vanilla crumb laced with a swirled cinnamon-sugar ribbon and finished with a crackly cinnamon-sugar crust on top. No yeast, no mixer required, ready in about an hour.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar, divided"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) softened butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.75,
        "note": "3/4 cup, or sour cream, for moisture"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 9,
        "note": "3 Tbsp total, for the swirl and topping"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp, for true snickerdoodle tang"
      }
    ],
    "steps": [
      "Heat oven to 350F (175C). Grease and line a 9x5-inch loaf pan with parchment, leaving an overhang for easy lifting.",
      "Make the cinnamon-sugar: in a small bowl stir together 1/3 cup of the sugar with 2 Tbsp cinnamon. Set aside — this is used for both the swirl and the topping.",
      "Whisk the flour, baking powder, baking soda, salt, cream of tartar, and remaining 1 Tbsp cinnamon in a bowl.",
      "In a large bowl, beat the softened butter with the remaining sugar until pale and fluffy, about 2 minutes. Beat in the eggs one at a time, then the vanilla, yogurt, and milk until smooth.",
      "Add the dry ingredients to the wet and fold with a spatula just until no streaks of flour remain — do not overmix or the bread turns tough.",
      "Pour half the batter into the pan. Sprinkle with half the cinnamon-sugar, then spread the remaining batter on top. Drag a knife through in an S-motion to create a marbled swirl, then sprinkle the rest of the cinnamon-sugar over the top.",
      "Bake 50-60 minutes, until the top is domed and crackled and a toothpick inserted in the center comes out with only a few moist crumbs. Tent with foil at 40 minutes if it browns too fast.",
      "Cool in the pan 15 minutes, then lift out using the parchment and cool on a rack at least another 20 minutes before slicing so the crumb sets."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 55,
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
      "Cream of tartar gives the signature snickerdoodle tang, but if you skip it, a teaspoon of lemon juice or a little extra yogurt fakes the acidity for free.",
      "Buy cinnamon from the bulk bin or a dollar-store spice rack — you need 3 tablespoons and warehouse-brand cinnamon costs a fraction of the little glass jars.",
      "Slightly past-ripe milk or yogurt is perfect here; the acidity actually improves the crumb, so don't toss it."
    ],
    "substitutions": [
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Sour cream, or buttermilk for a tangier crumb",
        "savings": "Often cheaper per ounce than single-serve Greek yogurt"
      },
      {
        "forIngredientId": "butter",
        "swap": "Equal amount of neutral oil (use 7 Tbsp)",
        "savings": "Saves about $1 vs a stick of butter"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "1 tsp lemon juice or white vinegar",
        "savings": "Avoids buying a whole jar for one teaspoon"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 5,
      "carbs": 45,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "quick-bread",
      "cinnamon",
      "dessert",
      "baking",
      "no-yeast",
      "snickerdoodle",
      "loaf"
    ]
  },
  {
    "id": "bake-banana-cream-pie",
    "name": "Banana Cream Pie",
    "description": "A classic diner-style banana cream pie: a crisp blind-baked crust filled with a silky cooked vanilla pastry cream, layered over ripe banana slices, and crowned with billowy fresh whipped cream. Cold, creamy, and not too sweet.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "graham-crackers",
        "quantity": 1,
        "note": "about 1.5 cups crumbs for the crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp total: 5 melted for crust, plus a knob for the pastry cream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 10.67,
        "note": "about 2/3 cup split between crust and pastry cream"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups for the pastry cream"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "use the yolks only for the custard"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "1/4 cup to set the pastry cream"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "2 tsp, divided between custard and whipped cream"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05,
        "note": "pinch for the custard"
      },
      {
        "ingredientId": "banana",
        "quantity": 3,
        "note": "ripe but firm, sliced"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.5,
        "note": "1.5 cups for the whipped topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "3 tbsp to sweeten the whipped cream"
      }
    ],
    "steps": [
      "Make the crust: crush the graham crackers into fine crumbs, stir with 5 tbsp melted butter and 2 tbsp sugar until it looks like wet sand, then press firmly into a 9-inch pie plate. Bake at 350F for 10 minutes and let cool completely.",
      "Start the pastry cream: in a saucepan whisk together the remaining sugar, cornstarch, and a pinch of salt, then whisk in the cold milk until smooth and lump-free.",
      "Temper the yolks: in a separate bowl whisk the 4 egg yolks. Bring the milk mixture to a gentle simmer over medium heat, whisking, then slowly ladle about half of it into the yolks while whisking, then pour the yolk mixture back into the pan.",
      "Cook the custard: whisk constantly over medium heat until it bubbles and thickens to a pudding consistency, about 1-2 minutes after the first bubble. Off heat, whisk in 1 tbsp butter and 1 tsp vanilla.",
      "Layer: spread a thin film of pastry cream over the cooled crust, arrange the sliced bananas in an even layer, then pour the remaining warm pastry cream over the top and smooth it flat.",
      "Chill: press plastic wrap directly onto the surface of the custard to prevent a skin, and refrigerate at least 4 hours or until fully set.",
      "Whip the topping: just before serving, beat the cold heavy cream with the powdered sugar and remaining 1 tsp vanilla to soft-to-medium peaks.",
      "Finish: spread or pipe the whipped cream over the chilled pie, slice with a warm knife, and serve cold."
    ],
    "totalTimeMinutes": 285,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 15,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Buy bananas that are spotty and on the discount rack: they are cheaper, sweeter, and perfect here.",
      "Save the 4 leftover egg whites in the freezer for omelets or meringues instead of tossing them.",
      "A graham cracker crust is far cheaper than a pastry crust and skips the rolling, chilling, and pie weights."
    ],
    "substitutions": [
      {
        "forIngredientId": "graham-crackers",
        "swap": "Crushed digestive biscuits, vanilla wafers, or even pretzels for a salty crust",
        "savings": "Use whatever cookies are already in the pantry to save a few dollars"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "A tub of frozen whipped topping, thawed",
        "savings": "Saves about $2 and skips the whipping step"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "2% milk plus an extra tablespoon of butter for richness",
        "savings": "Uses milk you likely already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 6,
      "carbs": 38,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "pie",
      "no-bake-filling",
      "make-ahead",
      "custard",
      "banana",
      "classic",
      "baking"
    ]
  },
  {
    "id": "bake-coconut-cream-pie",
    "name": "Coconut Cream Pie",
    "description": "A from-scratch coconut cream pie: a buttery blind-baked crust filled with silky coconut pastry cream cooked from egg yolks, coconut milk, and toasted coconut, crowned with lightly sweetened whipped cream and a shower of toasted coconut flakes.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "all-purpose flour for the crust (about 1.25 cups)"
      },
      {
        "ingredientId": "butter",
        "quantity": 9,
        "note": "cold cubed butter for crust + softened for filling (about 9 tbsp total)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 10.67,
        "note": "granulated sugar for crust + filling (about 2/3 cup)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.02,
        "note": "pinch for crust and filling"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "full-fat canned coconut milk"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1.5,
        "note": "about 1.5 cups"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "yolks only for the pastry cream"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "about 1/4 cup to thicken the custard"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 20,
        "note": "toasted, for filling + garnish (about 1.25 cups)"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.25,
        "note": "for the whipped topping (about 1.25 cups)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "to sweeten the whipped cream (about 3 tbsp)"
      }
    ],
    "steps": [
      "Make the crust: pulse 1.25 cups flour, 1 tsp sugar, and a pinch of salt, then cut in 6 tbsp cold cubed butter until pea-sized. Add 3-4 tbsp ice water and bring together into a disk; chill 30 minutes, then roll out and fit into a 9-inch pie plate, crimping the edge.",
      "Blind-bake the crust: line with parchment and pie weights (or dried beans), bake at 375F (190C) for 18 minutes, remove the weights, then bake 10-12 minutes more until golden. Cool completely.",
      "Toast the coconut: spread the shredded coconut on a dry sheet pan and bake at 325F (160C), stirring every 2-3 minutes, until evenly golden, about 8 minutes. Reserve about 1/3 for garnish.",
      "Heat the dairy: in a saucepan, warm the coconut milk and whole milk with half the remaining sugar until steaming but not boiling.",
      "Make the custard base: whisk the 4 egg yolks with the cornstarch and remaining sugar until smooth, then slowly stream in the hot milk while whisking constantly to temper the eggs.",
      "Cook the pastry cream: pour everything back into the saucepan over medium heat and whisk nonstop until it thickens and bubbles, 2-3 minutes; cook 1 minute more to remove the starchy taste.",
      "Finish the filling: off heat, whisk in 3 tbsp butter, the vanilla, a pinch of salt, and the toasted coconut. Pour into the cooled crust, press plastic wrap onto the surface, and chill at least 4 hours until set.",
      "Whip the cream: beat the cold heavy cream with the powdered sugar to soft-medium peaks. Spread or pipe over the chilled filling and shower with the reserved toasted coconut just before serving."
    ],
    "totalTimeMinutes": 330,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 50,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use dried beans you already have as pie weights instead of buying ceramic ones, then save them in a jar to reuse for every future blind-bake.",
      "Toast a whole bag of shredded coconut at once and keep the extra in an airtight jar; it perks up oatmeal, yogurt, and curries.",
      "Don't toss the 4 leftover egg whites: freeze them in an ice-cube tray for omelets or meringue another day."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use chilled full-fat coconut cream, whipped, for a dairy-free topping that doubles down on coconut flavor",
        "savings": "Roughly the same cost but lets you skip buying a separate cream"
      },
      {
        "forIngredientId": "flour",
        "swap": "Skip the homemade crust and use a store-bought graham cracker or pie crust",
        "savings": "Saves about $1 of butter and 40 minutes, though homemade tastes better"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk you have on hand, including a second can of coconut milk for richer flavor",
        "savings": "Free if it's already in your fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 6,
      "carbs": 34,
      "fat": 30,
      "fiber": 2
    },
    "emoji": "🥥",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "pie",
      "coconut",
      "baking",
      "custard",
      "make-ahead",
      "vegetarian"
    ]
  },
  {
    "id": "bake-chocolate-cream-pie",
    "name": "Chocolate Cream Pie",
    "description": "A diner-classic chocolate cream pie: a buttery graham crust filled with a rich, silky cooked chocolate custard thickened with egg yolks and cornstarch, then crowned with billows of fresh whipped cream and chocolate shavings.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "graham-crackers",
        "quantity": 1.5,
        "note": "about 12 full sheets, crushed for the crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp total: 5 melted for crust, 1 for custard"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "about 3/4 cup for custard plus 2 tbsp for crust"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "about 1/4 cup, the primary thickener"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 5.33,
        "note": "about 1/3 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.05
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 3,
        "note": "3 cups for the custard base"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "yolks only, tempered into the custard"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 8,
        "note": "about 4 oz, melted into the hot custard"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1.5,
        "note": "1.5 tsp total, split between custard and cream"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.5,
        "note": "about 1.5 cups, whipped for the topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "about 3 tbsp to sweeten the whipped cream"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.15,
        "optional": true,
        "note": "shaved over the top to garnish"
      }
    ],
    "steps": [
      "Make the crust: stir crushed graham crackers with 2 tbsp sugar and 5 tbsp melted butter until the texture of wet sand, then press firmly up the sides and across the bottom of a 9-inch pie plate. Bake at 350F for 10 minutes and cool completely (or chill 20 minutes for a no-bake crust).",
      "Whisk the sugar, cornstarch, cocoa powder, and salt together in a saucepan, breaking up any lumps. Slowly whisk in the cold milk until completely smooth so no dry pockets remain.",
      "Whisk the 4 egg yolks in a separate bowl. Set the saucepan over medium heat and cook, whisking constantly, until the mixture just begins to thicken and steam, about 5 to 7 minutes.",
      "Temper the yolks: ladle about 1 cup of the hot cocoa mixture into the yolks while whisking hard, then pour the warmed yolks back into the saucepan. Cook, whisking constantly, until the custard thickly bubbles and coats the back of a spoon, 1 to 2 minutes more.",
      "Off the heat, whisk in the semi-sweet chocolate, 1 tbsp butter, and 1 tsp vanilla until glossy and smooth. Pour into the cooled crust and smooth the top.",
      "Press a piece of plastic wrap directly onto the surface of the filling to prevent a skin, then refrigerate until fully set, at least 4 hours or overnight.",
      "Whip the cold heavy cream with the powdered sugar and remaining 1/2 tsp vanilla to soft-to-medium peaks. Spread or pipe over the chilled pie.",
      "Shave the dark chocolate over the top with a peeler, slice with a hot dry knife, and serve cold."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "stovetop",
      "oven"
    ],
    "primaryCookingMethod": "stovetop",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Use a store-brand cocoa powder and chocolate chips instead of bar chocolate; the cooked custard tastes nearly identical and costs a fraction.",
      "Save the 4 leftover egg whites in the freezer for an omelet or meringue so nothing goes to waste.",
      "A homemade graham crust is far cheaper than a pre-made one and only takes five minutes to press into the pan."
    ],
    "substitutions": [
      {
        "forIngredientId": "graham-crackers",
        "swap": "Crushed digestive biscuits or vanilla wafers",
        "savings": "Use whatever crackers are on sale; saves about $1 over name-brand graham."
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "A tub of frozen whipped topping, thawed",
        "savings": "Saves a few dollars and skips the whipping step."
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "Chopped semi-sweet baking bar",
        "savings": "Buy in bulk during baking-season sales for cheaper per-ounce chocolate."
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 7,
      "carbs": 42,
      "fat": 26,
      "fiber": 3
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "dessert",
      "pie",
      "chocolate",
      "no-bake-filling",
      "make-ahead",
      "custard",
      "baking"
    ]
  },
  {
    "id": "bake-shoofly-pie",
    "name": "Shoofly Pie",
    "description": "A classic Pennsylvania Dutch wet-bottom shoofly pie: a sticky, deeply molasses-y custard bottom under a buttery brown-sugar crumb, all baked in a flaky single crust. Old-fashioned, intensely flavored, and impossibly cozy with a cup of coffee.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "1 unbaked 9-inch single pie crust (refrigerated pie shell)"
      },
      {
        "ingredientId": "molasses",
        "quantity": 12,
        "note": "3/4 cup unsulphured (not blackstrap) molasses"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 20,
        "note": "about 1 1/4 cups packed, split between bottom and crumb"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "about 1 1/2 cups all-purpose for the crumb"
      },
      {
        "ingredientId": "butter",
        "quantity": 5,
        "note": "5 tbsp cold, cut into the crumb"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp, dissolved in the hot water"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "1/2 tsp in the crumb"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.02,
        "note": "pinch, freshly grated",
        "optional": true
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp"
      }
    ],
    "steps": [
      "Heat the oven to 375F and fit the pie crust into a 9-inch pie plate, crimping the edge; chill it in the fridge while you make the fillings.",
      "Make the crumb: in a bowl, rub together the flour, about 3/4 cup of the brown sugar, the cinnamon, nutmeg, and salt with the cold butter using your fingertips until it forms loose, pea-size crumbs. Set aside.",
      "Make the wet bottom: whisk the molasses, the remaining brown sugar, and the egg together in a separate bowl until smooth.",
      "Bring 3/4 cup water to a boil, stir in the baking soda (it will foam), then whisk the hot soda-water into the molasses mixture; it should be thin and lightly frothy.",
      "Pour the molasses liquid into the chilled crust, then gently scatter all of the crumb evenly over the top so it floats and partly sinks, sealing the surface.",
      "Bake at 375F for 15 minutes, then lower to 350F and bake 25-30 minutes more, until the crumb is set and the center jiggles only slightly like a soft custard.",
      "If the crust edge browns too fast, shield it with a ring of foil for the last 15 minutes.",
      "Cool the pie completely on a rack, at least 2 hours, so the gooey bottom sets; serve at room temperature, plain or with coffee."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "A store-bought refrigerated or frozen crust keeps this cheap and easy; the filling is the star anyway.",
      "Molasses, brown sugar, and flour are pantry staples that cost pennies per slice, making this one of the most economical pies you can bake.",
      "Buy a large jar of molasses once; it keeps for ages and one jar makes several pies."
    ],
    "substitutions": [
      {
        "forIngredientId": "pizza-dough",
        "swap": "Make a quick all-butter crust from the flour and butter you already have",
        "savings": "Saves ~$2 vs a pre-made crust"
      },
      {
        "forIngredientId": "molasses",
        "swap": "Dark corn syrup with a spoon of brown sugar (less traditional, milder flavor)",
        "savings": "Roughly the same cost"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter or shortening for the crumb",
        "savings": "Saves ~$0.50 and makes it dairy-free"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 4,
      "carbs": 60,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Pennsylvania Dutch",
    "tags": [
      "pie",
      "dessert",
      "molasses",
      "pennsylvania-dutch",
      "amish",
      "baking",
      "old-fashioned",
      "vegetarian"
    ]
  },
  {
    "id": "bake-buttermilk-biscochitos",
    "name": "Buttermilk Biscochitos",
    "description": "New Mexico's official state cookie — a crisp, buttery anise-and-cinnamon shortbread. Buttermilk and a splash of brandy keep the crumb tender, while the warm anise seed and a cinnamon-sugar coating give these their unmistakable festive flavor.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "about 3 cups all-purpose flour"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup; traditionally lard, butter for richer flavor"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 12,
        "note": "3/4 cup for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.19,
        "note": "3 tbsp"
      },
      {
        "ingredientId": "white-rum",
        "quantity": 1,
        "note": "2 tbsp brandy, traditional"
      },
      {
        "ingredientId": "fennel-seed",
        "quantity": 1.5,
        "note": "1.5 tsp anise seed, lightly crushed"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1.5 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp",
        "optional": true
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "note": "for the cinnamon-sugar coating"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "1/4 cup for the cinnamon-sugar coating"
      }
    ],
    "steps": [
      "In a large bowl, beat the butter (or lard) with the 3/4 cup sugar until very light and fluffy, 3-4 minutes. Crush the anise seed lightly in your fingers and beat it in along with the vanilla.",
      "Beat in the egg until fully combined, then mix in the brandy and buttermilk. The mixture may look slightly broken; that's fine.",
      "Whisk the flour, baking powder, and salt together, then add to the wet mixture in two additions, mixing just until a soft, smooth dough forms. Do not overwork it.",
      "Gather the dough, flatten into a disk, wrap, and chill at least 1 hour (or up to overnight) so it firms up and the anise flavor blooms.",
      "Heat the oven to 350F (175C). Roll the dough out on a lightly floured surface to about 1/4-inch thick and cut into the traditional fleur-de-lis shapes or simple rounds.",
      "Stir together the 1/4 cup sugar and the cinnamon in a shallow dish. Press one side of each cookie gently into the cinnamon-sugar, or coat after baking while still warm.",
      "Arrange cookies on parchment-lined sheets about 1 inch apart. Bake 10-12 minutes, until the bottoms are golden and the edges just barely color.",
      "Cool on the sheet 2 minutes to set, then transfer to a rack. If you didn't coat before baking, dredge the warm cookies in the cinnamon-sugar now."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 12,
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
      "Anise seed is far cheaper bought from the bulk-spice bin than in a branded jar, and a little goes a long way.",
      "Traditional biscochitos use lard, which is cheaper than butter and gives the authentic flaky crumb — render your own or buy a tub.",
      "Skip the brandy and use an extra splash of buttermilk plus a little extra vanilla; the cookies still come out beautifully."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use lard for the traditional, flakier biscochito",
        "savings": "Saves about $1.50 per batch vs butter"
      },
      {
        "forIngredientId": "white-rum",
        "swap": "Extra buttermilk or orange juice",
        "savings": "Saves the cost of liquor entirely"
      },
      {
        "forIngredientId": "buttermilk",
        "swap": "Milk soured with 1/2 tsp vinegar",
        "savings": "Saves ~$1 buying a whole carton"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 2,
      "carbs": 17,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "New Mexican",
    "tags": [
      "cookies",
      "holiday",
      "shortbread",
      "anise",
      "cinnamon",
      "baking",
      "dessert",
      "christmas"
    ]
  }
];
