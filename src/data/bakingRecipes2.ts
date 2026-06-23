import type { Recipe } from "@/lib/types";

/**
 * Baking recipes — batch 2 (oven). A large quality-gated set of niche + regional
 * bakes: French, Italian, Spanish/Portuguese, Eastern-European, Greek/Turkish/ME,
 * Indian/SE-Asian/East-Asian classics plus American regional pies & cakes. Each was
 * authored with valid catalog ingredient ids in catalog units, then judged by a
 * strict pastry chef that REJECTS slop; only authentic, score >= 7 keepers made it
 * in. All tagged "baking" + equipment "oven". Photos in bakingRecipePhotos2.ts.
 */
export const BAKING_RECIPES_2: Recipe[] = [
  {
    "id": "bake2-lemon-bundt-cake",
    "name": "Classic Lemon Bundt Cake",
    "description": "A tender, buttery sour-cream Bundt cake perfumed with fresh lemon zest and juice, soaked while warm with a tart lemon syrup and finished with a sharp lemon glaze. Dense-but-moist crumb, bright and not too sweet — the kind of cake that gets better on day two.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 40,
        "note": "2 1/2 cups granulated sugar (2 cups for batter, 1/2 cup for syrup)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 9,
        "note": "zest of 3 lemons (about 3 tbsp)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 16,
        "note": "1 cup full-fat sour cream"
      },
      {
        "ingredientId": "lemon",
        "quantity": 4,
        "note": "4 lemons (for ~1/2 cup juice across batter, syrup, and glaze)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 24,
        "note": "1 1/2 cups powdered sugar (for the glaze)"
      }
    ],
    "steps": [
      "Set a rack in the lower-middle of the oven and preheat to 350F (175C). Generously brush a 10- to 12-cup Bundt pan with softened butter, getting into every crevice, then dust with flour and tap out the excess. A well-greased pan is the difference between a clean release and a disaster.",
      "Whisk together the flour, baking powder, baking soda, and salt in a medium bowl. In a separate small bowl, rub the lemon zest into 2 cups of the sugar with your fingertips until fragrant and damp — this releases the citrus oils and is what makes the cake taste deeply of lemon.",
      "In a large bowl, beat the softened butter with the lemon sugar on medium-high for 3 to 4 minutes until pale and fluffy. Add the eggs one at a time, beating well after each, then beat in the vanilla and 2 tablespoons of fresh lemon juice. The mixture may look slightly curdled — that's fine.",
      "On low speed, add the dry ingredients in three additions alternating with the sour cream (begin and end with flour), mixing just until each addition disappears. Do not overmix once the flour goes in, or the crumb will turn tough. Scrape the bowl as needed.",
      "Spoon the thick batter into the prepared pan and smooth the top, pressing it slightly higher around the center tube to encourage an even rise. Rap the pan firmly on the counter twice to release air pockets.",
      "Bake for 50 to 60 minutes, until the top is golden, springs back when pressed, and a skewer inserted deep into the cake comes out clean. Tent loosely with foil after 40 minutes if it's browning too fast.",
      "While the cake bakes, make the soak: gently warm 1/4 cup lemon juice with the remaining 1/2 cup granulated sugar until the sugar dissolves. When the cake comes out, let it cool in the pan 10 minutes, then poke the top all over with a skewer and brush on the warm syrup. Let it sit 10 more minutes, then invert onto a rack to cool completely.",
      "Make the glaze: whisk the powdered sugar with 3 to 4 tablespoons fresh lemon juice until smooth and pourable but still thick enough to coat. Spoon it over the fully cooled cake, letting it run down the ridges. Let the glaze set 15 minutes before slicing."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 55,
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
      "Lemons are cheapest bought loose by the bag — you need about 4, and rolling them firmly on the counter before juicing gets noticeably more juice out of each one.",
      "No microplane? Use the smallest holes of a box grater for the zest and take only the yellow, never the bitter white pith underneath.",
      "Full-fat sour cream gives the best moist crumb, but plain whole-milk Greek yogurt is a cheaper one-to-one swap that works nearly as well."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Equal amount of plain full-fat Greek yogurt",
        "savings": "Often cheaper and a fridge staple"
      },
      {
        "forIngredientId": "butter",
        "swap": "Half butter, half neutral vegetable oil for an even moister, longer-keeping crumb",
        "savings": "Oil is cheaper per tablespoon than butter"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1/2 tsp almond extract in place of half the vanilla for a bakery-style note",
        "savings": "Stretches a pricey bottle of vanilla"
      }
    ],
    "estimatedNutrition": {
      "calories": 425,
      "protein": 5,
      "carbs": 64,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "lemon",
      "citrus",
      "bundt",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-cinnamon-streusel-coffee-cake",
    "name": "Cinnamon Streusel Coffee Cake",
    "description": "A tender, buttery sour cream coffee cake with a thick cinnamon-brown sugar streusel both layered through the middle and crowning the top. This is the real bakery-style version: moist crumb from sour cream, a generous ribbon of cinnamon streusel, and a crackly streusel lid. Best served slightly warm with coffee.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour (2 cups for cake, 1/2 cup for streusel)"
      },
      {
        "ingredientId": "butter",
        "quantity": 20,
        "note": "1 1/4 cups unsalted butter, softened (1/2 cup for cake, 3/4 cup cold cubed for streusel)"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (for the cake batter)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed light brown sugar (for the streusel)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 16,
        "note": "1 cup full-fat sour cream"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 4,
        "note": "4 tsp ground cinnamon (for the streusel)"
      },
      {
        "ingredientId": "pecans",
        "quantity": 3,
        "optional": true,
        "note": "3 oz chopped pecans, about 3/4 cup (optional, for the streusel)"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). Grease a 9x13-inch baking pan and line the bottom with parchment, or generously butter a tube/bundt pan. Set out the eggs and sour cream to take the chill off.",
      "Make the streusel first: in a bowl, whisk together 1/2 cup flour, the brown sugar, cinnamon, and a pinch of salt. Add 3/4 cup cold cubed butter and rub it in with your fingertips (or cut with a fork) until you have moist, clumpy crumbs ranging from pea-size to small gravel. Stir in the chopped pecans if using. Refrigerate while you make the batter so the clumps hold.",
      "Whisk the remaining 2 cups flour with the baking powder, baking soda, and 1/2 tsp salt in a medium bowl.",
      "In a large bowl, beat the 1/2 cup softened butter with the granulated sugar on medium-high until pale and fluffy, about 3 minutes. Beat in the eggs one at a time, then the vanilla, scraping the bowl as needed.",
      "On low speed, add the flour mixture in three additions alternating with the sour cream, beginning and ending with flour. Mix just until no dry streaks remain; the batter will be thick. Do not overmix.",
      "Spread half the batter evenly in the pan. Scatter a little over half the streusel across the surface to form the middle ribbon. Dollop and gently spread the remaining batter on top, then cover completely with the rest of the streusel, pressing it lightly so it adheres.",
      "Bake 38 to 45 minutes (a 9x13) or 50 to 60 minutes (a tube pan), until the top is deep golden, the streusel is set, and a toothpick inserted into the center comes out clean or with a few moist crumbs.",
      "Cool in the pan on a rack at least 20 minutes before cutting. Serve warm or at room temperature. Store covered at room temperature up to 3 days."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 42,
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
      "Skip the pecans or swap in chopped walnuts, which are usually cheaper by weight, and the cake is excellent without any nuts at all.",
      "Sour cream is the splurge here, but a 16 oz tub costs little and the leftover keeps for weeks; full-fat plain yogurt is a fine cheaper stand-in.",
      "Buy butter in bulk when it goes on sale and freeze it. One batch uses just over a cup, so a 1 lb box (4 sticks) leaves you enough to start a second cake."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Equal amount of full-fat plain Greek yogurt for the same tang and moisture",
        "savings": "Often a few cents cheaper per cup and you may already have it"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Chopped walnuts, or omit entirely for a nut-free cake",
        "savings": "Walnuts run cheaper than pecans; omitting saves the whole nut cost"
      },
      {
        "forIngredientId": "white-sugar",
        "swap": "Use brown sugar in the batter too for a deeper, more caramel-like flavor",
        "savings": "Lets you buy a single bag of sugar instead of two"
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 5,
      "carbs": 49,
      "fat": 23,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "coffee-cake",
      "cinnamon",
      "streusel",
      "dessert",
      "brunch",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-genoise-sponge-cake",
    "name": "Classic French Genoise Sponge Cake",
    "description": "The authentic French whole-egg foam sponge — no baking powder, no separated whites. Whole eggs and sugar are warmed over a bain-marie and whisked to a thick, pale ribbon, then sifted flour and melted butter are folded in by hand. The result is a light, fine-crumbed, faintly springy cake that's the backbone of layer cakes and Swiss rolls: brush it with syrup and fill with cream or jam.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, at room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour, sifted (cake flour ideal)"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "3 tbsp unsalted butter, melted and cooled"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Butter an 8-inch round cake pan, line the bottom with a parchment circle, and lightly dust the sides with flour, tapping out the excess. Melt the butter and set it aside to cool to barely warm; stir the vanilla into it.",
      "Bring a saucepan with an inch of water to a bare simmer. In a large heatproof bowl, whisk together the whole eggs, sugar, and salt. Set the bowl over (not touching) the simmering water and whisk constantly until the mixture is warm to the touch and the sugar has fully dissolved, about 2-3 minutes (roughly 110F / 43C). This warmth is what lets the eggs whip to maximum volume.",
      "Remove the bowl from the heat. Using a stand or hand mixer on high speed, beat the eggs for 5-8 minutes until tripled in volume, very pale, and thick enough to fall in a slowly dissolving ribbon from the beater. The batter should hold a trail on the surface for a few seconds — this is the ribbon stage and the only leavening the cake gets.",
      "Sift the flour over the egg foam in three additions. Fold each addition in gently with a large rubber spatula, cutting down through the center and lifting up and over, rotating the bowl as you go. Stop the moment no dry streaks remain — overmixing deflates the foam.",
      "Temper the butter: scoop about a cup of the batter into the bowl of cooled melted butter and vanilla, and stir to combine. Pour this lightened mixture back into the main batter and fold it in just until incorporated, working quickly so the foam stays airy.",
      "Pour the batter into the prepared pan and gently smooth the top. Tap the pan once on the counter to release any large air pockets. Bake for 25-30 minutes, until the top is golden, springs back when lightly pressed, and a skewer inserted in the center comes out clean.",
      "Let the cake cool in the pan for 10 minutes, then run a thin knife around the edge, invert onto a wire rack, peel off the parchment, and turn right-side up to cool completely. Genoise is intentionally lean and a touch dry — brush the layers with a simple syrup before filling with whipped cream, pastry cream, or jam."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 28,
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
      "All-purpose flour works fine here — no need to buy cake flour. For a finer crumb, scoop out 2 tablespoons per cup and replace with cornstarch to mimic it cheaply.",
      "A hand mixer and a metal bowl set over any pot of simmering water replace a fancy stand mixer and double boiler — just whisk patiently to the ribbon stage.",
      "Skip a store-bought syrup: simmer equal parts sugar and water for 2 minutes to make brushing syrup for pennies, and stretch one plain genoise into a filled layer cake."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use 3 tbsp neutral vegetable oil instead of melted butter for an even more tender, longer-keeping crumb (a common genoise variation).",
        "savings": "saves a few cents vs. butter"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Replace vanilla with 1 tsp lemon zest for a classic citrus genoise.",
        "savings": "uses a lemon you likely have"
      },
      {
        "forIngredientId": "flour",
        "swap": "Substitute up to 3 tbsp of the flour with cocoa powder for a chocolate genoise.",
        "savings": "no extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 160,
      "protein": 4,
      "carbs": 22,
      "fat": 6,
      "fiber": 0.4
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "cake",
      "sponge",
      "french",
      "from-scratch",
      "dessert",
      "no-leavening",
      "layer-cake"
    ]
  },
  {
    "id": "bake2-orange-chiffon-cake",
    "name": "Orange Chiffon Cake",
    "description": "A tall, cloud-light orange chiffon cake — the classic American oil-and-egg-white sponge brightened with fresh orange juice and zest. Tender, springy, and moist with a delicate citrus perfume, it bakes in an ungreased tube pan and cools upside down to keep its lofty height. Plain or with a simple orange glaze, it's the cake a confident home baker is proud to set out.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups cake flour (sifted; or all-purpose minus 2 tbsp per cup)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar, divided (1 cup for the batter, 1/2 cup for the whites)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "1/2 cup neutral vegetable oil"
      },
      {
        "ingredientId": "eggs",
        "quantity": 7,
        "note": "7 large eggs, separated (yolks for batter, whites whipped to meringue)"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 0.75,
        "note": "3/4 cup fresh orange juice (from about 3 oranges)"
      },
      {
        "ingredientId": "orange",
        "quantity": 3,
        "note": "3 oranges — zest all 3 (about 2 tbsp packed zest), juice for the 3/4 cup above"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.5,
        "note": "1/2 tsp cream of tartar (stabilizes the egg whites)"
      }
    ],
    "steps": [
      "Position a rack in the lower third of the oven and preheat to 325°F (165°C). Have a clean, dry 10-inch (16-cup) angel food / tube pan ready — do NOT grease it; the batter needs to grip the sides to climb.",
      "Zest the oranges, then juice them to get 3/4 cup juice. In a large bowl, sift together the cake flour, 1 cup of the sugar, baking powder, and salt.",
      "Make a well in the dry ingredients and add, in order: the oil, egg yolks, orange juice, vanilla, and orange zest. Whisk until completely smooth and satiny, about 1 minute. Set aside.",
      "In a spotlessly clean bowl, beat the egg whites with the cream of tartar on medium until foamy. Gradually rain in the remaining 1/2 cup sugar and increase to high; beat to stiff but not dry peaks — the meringue should hold a firm tip that curls just slightly.",
      "Scoop about a third of the meringue into the yolk batter and whisk it in to lighten. Add the remaining meringue and fold gently with a spatula, turning the bowl, until just combined with no white streaks. Do not deflate it.",
      "Pour the batter into the ungreased tube pan. Run a knife or thin spatula through the batter in a circle to pop large air pockets, then smooth the top.",
      "Bake at 325°F for 55 to 65 minutes, until the top is golden, springs back when lightly pressed, and a skewer comes out clean. The cake should be domed and pulling slightly from the center tube.",
      "Immediately invert the pan onto its feet (or hang the center tube over a bottle neck) and cool completely upside down, about 1.5 to 2 hours. This stretches and sets the crumb so it stays tall.",
      "Once fully cool, run a thin knife around the outer edge and center tube, lift out the cake, and release the bottom. Serve plain, dusted with powdered sugar, or with a quick orange glaze."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 60,
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
      "Buy a 3 lb bag of oranges instead of singles — it's cheaper per pound and you'll use the zest and juice for the whole cake.",
      "No cake flour? Make your own: measure all-purpose flour, remove 2 tbsp per cup, and replace it with 2 tbsp cornstarch, then sift well.",
      "Skip the glaze and just dust with powdered sugar — the cake is plenty flavorful on its own and you save on extra ingredients."
    ],
    "substitutions": [
      {
        "forIngredientId": "orange-juice",
        "swap": "Bottled 100% orange juice plus extra fresh zest for aroma",
        "savings": "Cheaper and available year-round; zest carries most of the flavor anyway"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "1 tsp lemon juice or white vinegar (1/2 tsp acid per the recipe) to stabilize the whites",
        "savings": "Uses a pantry staple instead of buying a single-use spice"
      },
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour with 2 tbsp cornstarch swapped in per cup",
        "savings": "Avoids buying specialty cake flour"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 5,
      "carbs": 41,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍊",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cake",
      "chiffon",
      "citrus",
      "dessert",
      "egg-white",
      "light",
      "classic",
      "tube-pan"
    ]
  },
  {
    "id": "bake2-gingerbread-cake",
    "name": "Classic Old-Fashioned Gingerbread Cake",
    "description": "A deeply spiced, molasses-rich gingerbread cake with a tender, moist crumb and a dark, glossy top. Boiling water bloomed into the batter gives it that signature soft, almost pudding-like interior, while a generous hit of ground ginger, cinnamon, and cloves makes every bite warm and aromatic. This is the real, single-layer snacking cake your grandmother made — humble, honest, and irresistible with a dusting of powdered sugar or a spoonful of softly whipped cream.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "molasses",
        "quantity": 16,
        "note": "1 cup unsulphured (dark) molasses"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed dark brown sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, melted"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "1 cup boiling water"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking soda"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.75,
        "note": "3/4 tsp baking powder"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 2,
        "note": "2 tsp ground ginger"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1 1/2 tsp ground cinnamon"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground cloves"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp ground nutmeg"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Butter an 8x8-inch (or 9x9-inch) square baking pan and line it with parchment, leaving an overhang on two sides for easy lift-out.",
      "In a medium bowl, whisk together the flour, baking soda, baking powder, ground ginger, cinnamon, cloves, nutmeg, and salt until evenly combined. Set aside.",
      "In a large bowl, whisk the melted butter and dark brown sugar until smooth, then whisk in the molasses and vanilla. Add the eggs one at a time, whisking well after each so the batter is glossy and emulsified.",
      "Add the dry ingredients to the wet and whisk just until no dry streaks remain — do not overmix. The batter will be thick.",
      "Carefully pour in the 1 cup boiling water and whisk until the batter is smooth and pourable. It will look thin; that is correct and is what gives the cake its moist, tender crumb.",
      "Pour the batter into the prepared pan and smooth the top. Bake for 40 to 45 minutes, until the top springs back when lightly pressed and a toothpick inserted in the center comes out with a few moist crumbs (no wet batter).",
      "Set the pan on a wire rack and cool for at least 20 minutes. Run a knife around the edges, then lift the cake out using the parchment overhang.",
      "Serve warm or at room temperature, dusted generously with powdered sugar or topped with a dollop of lightly sweetened whipped cream. The flavor deepens overnight, so it is even better the next day."
    ],
    "totalTimeMinutes": 70,
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
      "Molasses is the soul of this cake and one bottle lasts many bakes — buy the store brand, it performs identically to name brands at half the price.",
      "No buttermilk or fancy add-ins needed; this recipe is built from cheap pantry staples (flour, sugar, butter, eggs, spices), making it one of the most budget-friendly cakes you can bake.",
      "Skip the whipped cream topping and just dust with powdered sugar to save money — the cake is rich and moist enough to stand on its own."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Use 3/4 cup vegetable oil instead of melted butter for an even moister crumb and a dairy-free option.",
        "savings": "Oil is cheaper than butter and needs no melting"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Substitute regular white granulated sugar 1:1 if you have no brown sugar; the cake will be slightly less caramelly but still excellent.",
        "savings": "Use what is already in your pantry"
      },
      {
        "forIngredientId": "water",
        "swap": "Swap the boiling water for hot brewed coffee to deepen the molasses flavor and add a subtle bittersweet edge.",
        "savings": "Use leftover morning coffee"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 4,
      "carbs": 58,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "holiday",
      "spiced",
      "molasses",
      "snacking-cake",
      "winter",
      "old-fashioned"
    ]
  },
  {
    "id": "bake2-marble-cake",
    "name": "Classic Marble Cake (Marmorkuchen)",
    "description": "A tender, buttery vanilla pound-style cake swirled with rich cocoa batter for the signature marbled effect. This is the real German-style Marmorkuchen: one batter, split and tinted with cocoa, then layered and dragged with a knife so every slice shows ribbons of light and dark. Moist, fine-crumbed, and not too sweet, it keeps beautifully for days and needs no frosting.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp (3 tsp) baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "1 cup whole milk, room temperature"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 3,
        "note": "3 tbsp unsweetened cocoa powder"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.1875,
        "note": "3 tbsp whole milk (extra, to loosen the cocoa batter)"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). Generously butter and flour a 10- to 12-cup Bundt pan (or a large tube pan), tapping out the excess so the marbled cake releases cleanly.",
      "Whisk together the 3 cups flour, baking powder, and salt in a bowl and set aside. In a separate large bowl, beat the softened butter and sugar with an electric mixer on medium-high for 4 to 5 minutes until pale, light, and fluffy.",
      "Beat in the eggs one at a time, scraping the bowl between additions, then beat in the vanilla. The batter should look smooth and creamy.",
      "With the mixer on low, add the flour mixture in three additions alternating with the 1 cup milk in two additions, beginning and ending with flour. Mix just until no dry streaks remain; do not overbeat.",
      "Scoop out about one-third of the batter (roughly 2 heaping cups) into a separate bowl. Sift the 3 tbsp cocoa over it and add the extra 3 tbsp milk, then fold until the cocoa batter is evenly dark and smooth.",
      "Spoon half the plain vanilla batter into the prepared pan. Dollop the cocoa batter over it, then top with the remaining vanilla batter, spreading gently to roughly even.",
      "Drag a butter knife or thin skewer through the batter in a slow figure-eight or zigzag, going twice around the pan, to swirl the two batters into a marble pattern. Don't overmix or you'll lose the contrast.",
      "Bake 50 to 60 minutes, until the cake is golden, springs back when pressed, and a skewer inserted into the center comes out clean. Cool in the pan 15 minutes, then turn out onto a rack to cool completely before slicing. Dust with powdered sugar if you like."
    ],
    "totalTimeMinutes": 85,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 55,
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
      "Buy butter on sale and freeze it; this cake uses two full sticks, so stocking up when it's cheap saves real money over time.",
      "Skip a fancy Bundt pan: a well-greased loaf pan or two works fine, just add 5 to 10 minutes to the bake time and check with a skewer.",
      "Plain unsweetened cocoa powder is far cheaper per use than melting chocolate and gives the same dark marble swirl."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use buttermilk or plain yogurt thinned with a splash of water for an extra-tender, slightly tangy crumb",
        "savings": "Often cheaper if you already have yogurt on hand"
      },
      {
        "forIngredientId": "butter",
        "swap": "Replace up to half the butter with vegetable oil for a moister cake that stays soft longer",
        "savings": "Oil is usually cheaper than butter"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Add 1/2 tsp almond extract in place of some vanilla for a classic bakery-style aroma",
        "savings": "A little goes a long way, so one bottle lasts many cakes"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 5,
      "carbs": 47,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "German",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "marble-cake",
      "marmorkuchen",
      "german",
      "from-scratch"
    ]
  },
  {
    "id": "bake2-texas-sheet-cake",
    "name": "Classic Texas Sheet Cake",
    "description": "The real deal: a thin, fudgy chocolate buttermilk sheet cake topped with a warm pecan cocoa icing that's poured over the cake while both are still hot, so it sets into a glossy, almost-fudge shell. A potluck legend from the Texas Hill Country — one big pan that feeds a crowd.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter — for the cake batter"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "1 cup water"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 4,
        "note": "1/4 cup unsweetened cocoa powder — for the cake batter"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.5,
        "note": "1/2 cup buttermilk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, lightly beaten"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract — for the cake batter"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter — for the icing"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 4,
        "note": "1/4 cup unsweetened cocoa powder — for the icing"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.375,
        "note": "6 tbsp whole milk"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 64,
        "note": "4 cups powdered sugar (one 1-lb box)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract — for the icing"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup chopped pecans, toasted"
      }
    ],
    "steps": [
      "Preheat the oven to 350°F. Grease an 18x13-inch rimmed sheet pan (half-sheet / jelly-roll pan) and set aside. In a large bowl, whisk together the flour, granulated sugar, salt, and baking soda.",
      "Make the cooked chocolate base: in a saucepan, combine 1 cup butter, 1 cup water, and 1/4 cup cocoa. Bring to a rolling boil over medium heat, stirring, then immediately remove from the heat.",
      "Pour the hot cocoa-butter mixture over the dry ingredients and stir until just combined and smooth — it will be a thin, glossy batter.",
      "Whisk in the buttermilk, beaten eggs, and 1 tsp vanilla until fully incorporated. Do not overmix; stop as soon as the batter is uniform.",
      "Pour the batter into the prepared sheet pan and spread evenly into the corners. Bake for 18 to 22 minutes, until the top springs back and a toothpick inserted in the center comes out clean. Start the icing during the last 5 minutes of baking.",
      "Make the icing: in a saucepan, melt 1/2 cup butter with 1/4 cup cocoa and the 6 tbsp milk, stirring until smooth and just bubbling at the edges. Remove from the heat. Whisk in the powdered sugar one cup at a time until smooth, then stir in 1 tsp vanilla and the toasted pecans.",
      "As soon as the cake comes out of the oven, pour the warm icing over the hot cake and gently spread to the edges with an offset spatula. Pouring while both are hot lets the icing soak into the surface and set with a fudgy sheen.",
      "Let the cake cool completely, at least 1 hour, so the icing sets before cutting into 24 squares."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
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
      "Pecans are the priciest item — buy them in bulk or sub walnuts, and toast them yourself in a dry skillet for big flavor at no extra cost.",
      "No buttermilk? Stir 1/2 tbsp lemon juice or vinegar into 1/2 cup milk and let it sit 5 minutes — works identically and saves a special trip.",
      "One pan feeds 24, so the per-serving cost is tiny. Make it for a party or portion and freeze squares for weeks of cheap dessert."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1/2 cup milk + 1/2 tbsp lemon juice or vinegar, rested 5 minutes",
        "savings": "Avoids buying a whole carton of buttermilk"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Chopped walnuts, or omit nuts entirely for a smooth icing",
        "savings": "Walnuts are usually cheaper; omitting saves the most"
      },
      {
        "forIngredientId": "butter",
        "swap": "Equal amount of vegetable oil in the cake batter (keep butter for the icing)",
        "savings": "Oil is cheaper than butter and keeps the crumb moist"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 2.5,
      "carbs": 39,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Texan)",
    "tags": [
      "baking",
      "dessert",
      "chocolate",
      "cake",
      "potluck",
      "southern"
    ]
  },
  {
    "id": "bake2-wacky-depression-cake",
    "name": "Wacky Depression Cake",
    "description": "The classic 1930s-40s eggless, milkless, butterless chocolate cake — mixed right in the pan with no bowl. Its tender, springy crumb comes from the reaction of vinegar and baking soda, and it bakes up moist and deeply chocolatey despite using only pantry staples. A genuine piece of American baking history that tastes far better than its humble ingredient list suggests.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 4,
        "note": "1/4 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 5.33,
        "note": "1/3 cup vegetable oil"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 1,
        "note": "1 tbsp white vinegar"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "water",
        "quantity": 1,
        "note": "1 cup cold water"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). You do not need to grease an ungreased 8x8-inch metal or glass baking pan — the cake is mixed directly in it.",
      "Add the flour, sugar, cocoa powder, baking soda, and salt directly into the ungreased pan. Whisk or stir with a fork until evenly combined and no streaks of cocoa remain, then smooth the dry mixture flat and level.",
      "Using the back of a spoon, make three wells in the dry mixture: one large and two small. Pour the vegetable oil into the large well, the vinegar into one small well, and the vanilla into the other small well. (Keeping the vinegar separate until the very end protects the leavening reaction.)",
      "Pour the cold water evenly over everything. Stir with a fork, working from the center outward, until the batter is smooth and uniform with no dry pockets in the corners — about 1 minute. Do not overmix; a few tiny lumps are fine. The batter will be thin and bubble slightly as the vinegar hits the baking soda.",
      "Quickly scrape down the sides and level the batter. Place the pan in the oven immediately so the leavening is still active.",
      "Bake for 30 to 35 minutes, until the top springs back when lightly pressed and a toothpick inserted in the center comes out clean or with a few moist crumbs.",
      "Cool the cake in the pan on a wire rack for at least 20 minutes before cutting. Serve straight from the pan dusted with powdered sugar, or frost once fully cooled."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 33,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "dairy-free"
    ],
    "cheapTips": [
      "This whole cake uses only flour, sugar, cocoa, oil, and water — no eggs, butter, or milk — so it's one of the cheapest from-scratch desserts you can bake, often under a dollar a pan.",
      "No vinegar? Any acid works — a tablespoon of bottled lemon juice does the same job of activating the baking soda.",
      "Skip frosting and just dust the cooled cake with a little powdered sugar through a sieve; it looks bakery-nice for zero added cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "vinegar",
        "swap": "1 tbsp bottled lemon juice (lemon-juice-bottled)",
        "savings": "uses an acid you likely already have"
      },
      {
        "forIngredientId": "sugar",
        "swap": "1 cup brown sugar for a deeper, molasses-rich flavor",
        "savings": "no real change in cost"
      },
      {
        "forIngredientId": "water",
        "swap": "1 cup brewed coffee to intensify the chocolate flavor",
        "savings": "use leftover morning coffee for free"
      }
    ],
    "estimatedNutrition": {
      "calories": 210,
      "protein": 2,
      "carbs": 35,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "eggless",
      "dairy-free",
      "vegan",
      "chocolate",
      "cake",
      "budget",
      "one-pan",
      "historical"
    ]
  },
  {
    "id": "bake2-sachertorte",
    "name": "Classic Viennese Sachertorte",
    "description": "The genuine Viennese chocolate cake: a dense yet tender butter-and-chocolate sponge leavened only by whipped egg whites, split and brushed with warmed apricot jam, then enrobed in a glossy chocolate glaze. Traditionally served with a cloud of unsweetened whipped cream. This is the real thing — no baking powder shortcuts, no buttercream.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "dark-chocolate",
        "quantity": 5.3,
        "note": "5.3 oz (150 g) good-quality dark couverture chocolate, ~55% cacao, finely chopped — for the batter"
      },
      {
        "ingredientId": "butter",
        "quantity": 11,
        "note": "11 tbsp (150 g) unsalted butter, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "scant 3/4 cup (110 g) powdered sugar, sifted — creamed with the butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, separated, at room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract (or seeds of 1/2 vanilla pod)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 10.67,
        "note": "scant 2/3 cup (120 g) granulated sugar — for whipping the egg whites"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup (130 g) all-purpose flour, sifted"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 12,
        "note": "about 3/4 cup + 1 tbsp (250 g) apricot jam, for the filling and glaze layer"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 7,
        "note": "7 oz (200 g) dark chocolate, chopped — for the chocolate glaze"
      },
      {
        "ingredientId": "sugar",
        "quantity": 11,
        "note": "2/3 cup (135 g) granulated sugar — for the glaze sugar syrup"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup (125 ml) water — for the glaze sugar syrup"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "optional": true,
        "note": "1 cup (240 ml) cold heavy cream, lightly whipped unsweetened, to serve"
      }
    ],
    "steps": [
      "Heat the oven to 340F (170C). Butter a 9-inch (23 cm) springform pan, line the base with parchment, and lightly flour the sides. Melt the 150 g batter chocolate gently over a bain-marie or in short microwave bursts, then set aside to cool until just barely warm.",
      "Cream the softened butter with the sifted powdered sugar until pale and fluffy, 3-4 minutes. Beat in the egg yolks one at a time, then the vanilla. Stir in the cooled melted chocolate until smooth and uniform.",
      "In a clean, grease-free bowl, whip the egg whites with a pinch of salt to soft peaks, then rain in the 120 g granulated sugar a spoonful at a time, whipping to a glossy, firm-but-not-dry meringue. This meringue is the only leavening, so do not deflate it.",
      "Fold about a third of the meringue into the chocolate base to lighten it. Sift the flour over the mixture and fold in alternately with the remaining meringue, working gently with a spatula just until no streaks remain.",
      "Scrape the batter into the pan, level the top, and bake 50-60 minutes until a skewer comes out with a few moist crumbs and the center springs back lightly. The top will dome and may crack — that is correct. Cool 10 minutes, then unmould and cool completely on a rack, top-side down so it flattens.",
      "Slice the cooled cake horizontally into two even layers. Warm the apricot jam with a splash of water until fluid, then push it through a sieve. Brush the cut layer generously, sandwich the cake back together, then brush the entire top and sides with a thin, even coat of the warm jam. Let it set 15-20 minutes so the glaze has a smooth base to grip.",
      "Make the glaze: bring the 135 g sugar and water to a boil and simmer 5 minutes to a light syrup (about 220F/104C). Off the heat, stir in the 200 g chopped chocolate until completely melted and glossy, then let it cool, stirring, until it thickly coats the back of a spoon but still flows.",
      "Set the cake on a rack over a tray and pour the glaze over the center in one motion, using a few decisive passes of an offset spatula to sheet it over the top and down the sides. Do not over-spread — the fewer strokes, the glassier the finish. Leave to set at room temperature (do not refrigerate, or the glaze will dull).",
      "Let the glaze firm up for at least a few hours. Serve in slices at room temperature with a quenelle of softly whipped, unsweetened cream alongside."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 60,
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
      "Use a solid supermarket 50-55% dark baking chocolate instead of pricey couverture — the glaze sets fine and the flavor still reads as a proper Sachertorte.",
      "Buy whole eggs and separate them yourself rather than buying separate whites; you need both yolks and whites here, so nothing is wasted.",
      "Skip a bain-marie setup and melt chocolate in 20-second microwave bursts in a regular bowl, stirring between each — no extra equipment to buy or wash."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "Smooth, sieved peach or marmalade — apricot is traditional, but any tart, not-too-sweet jam bridges the cake and glaze.",
        "savings": "Use a jar already in the pantry instead of buying apricot specifically"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Granulated sugar blitzed 30 seconds in a blender or food processor makes instant powdered sugar.",
        "savings": "Avoids a second sugar purchase"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Serve plain, or with a small scoop of vanilla ice cream — the cake stands on its own without whipped cream.",
        "savings": "Skip the cream entirely"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 6,
      "carbs": 48,
      "fat": 25,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "Austrian",
    "tags": [
      "baking",
      "dessert",
      "chocolate",
      "austrian",
      "classic",
      "cake",
      "celebration"
    ]
  },
  {
    "id": "bake2-castella-cake",
    "name": "Classic Nagasaki Castella (Japanese Honey Sponge Cake)",
    "description": "An authentic Nagasaki-style kasutera: a tall, tight-crumbed honey sponge built entirely on whipped whole eggs, sugar, bread flour, and honey — no butter, no oil, no baking powder. The whole-egg foam method and a warm honey-milk syrup give it its signature moist, fine texture and deep golden-brown top. Baked low and slow in a deep paper-lined frame, then wrapped and rested overnight so the crumb settles into its dense, springy perfection.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, at room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup (200g) granulated sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups (150g) bread flour, sifted twice"
      },
      {
        "ingredientId": "honey",
        "quantity": 3,
        "note": "3 tbsp honey"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.125,
        "note": "2 tbsp whole milk"
      },
      {
        "ingredientId": "mirin",
        "quantity": 1,
        "note": "1 tbsp mirin (or substitute warm water)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      }
    ],
    "steps": [
      "Line a deep 8x8-inch (or equivalent loaf-style) frame with two layers of parchment, building the walls a good inch above the rim so the cake can climb. Preheat the oven to 320F (160C). In a small bowl, gently warm the honey, milk, and mirin together (microwave 15 seconds or set over warm water) until fluid and combined; keep it warm but not hot.",
      "Set a large heatproof bowl over a pot of barely simmering water. Crack in all 6 eggs, add the sugar and salt, and whisk constantly until the mixture reaches about 100F (38C) and the sugar has fully dissolved — it should feel just warm to a clean fingertip, with no grit. This warming step is essential for a stable, voluminous whole-egg foam.",
      "Move the bowl to a stand mixer (or use a hand mixer) and whip on high for 6 to 8 minutes until the foam is very pale, tripled in volume, and thick enough to hold a ribbon that sits on the surface for several seconds before sinking. Reduce to low speed and whip 2 more minutes to break down large bubbles and tighten the foam — this gives castella its fine, even crumb.",
      "Pour the warm honey mixture down the side of the bowl and fold it in gently with a spatula, just until streak-free. Sift the bread flour over the foam in three additions, folding from the bottom up after each — slow, deliberate strokes. Stop the moment no dry flour remains; overworking deflates the batter and toughens the crumb.",
      "Pour the batter into the lined frame from about 8 inches up to help pop surface bubbles. Tap the frame firmly on the counter several times, then drag a chopstick or skewer back and forth through the batter in a zigzag to release trapped air. Smooth the top.",
      "Bake at 320F (160C) for 12 minutes, then lower the oven to 300F (150C) and bake another 40 to 45 minutes, until the top is deep mahogany-brown and a skewer comes out clean. If the top colors too fast in the first 15 minutes, loosely tent with foil.",
      "Immediately on removing it, drop the frame onto the counter once from a few inches up — this 'shock' keeps the cake from shrinking and wrinkling as it cools. Invert the hot cake onto a sheet of plastic wrap, peel off the parchment, and wrap the cake tightly while still warm to trap moisture.",
      "Rest the wrapped cake at room temperature for at least 8 hours, ideally overnight — this is non-negotiable. The crumb settles, the moisture redistributes, and the flavor deepens. Trim the four edges flat, then slice into thick 1-inch bars with a clean, warm knife."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 55,
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
      "Bread flour gives the authentic chew, but if you only have all-purpose flour it works fine — castella is forgiving on flour type as long as you sift it twice.",
      "No baking frame? A standard 8x8 metal pan or a loaf pan lined with tall parchment walls works perfectly and costs nothing extra.",
      "Skip the mirin if you don't keep it around — a tablespoon of warm water does the job, and the honey carries the flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "mirin",
        "swap": "1 tbsp warm water with a pinch of extra sugar",
        "savings": "avoids buying a bottle of mirin"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "any milk you have, or warm water",
        "savings": "use what's in the fridge"
      },
      {
        "forIngredientId": "honey",
        "swap": "maple syrup (changes flavor slightly but keeps the moist crumb)",
        "savings": "use a cheaper sweetener you already own"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 5,
      "carbs": 38,
      "fat": 4,
      "fiber": 0
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "baking",
      "japanese",
      "dessert",
      "sponge-cake",
      "honey",
      "no-butter",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-russian-honey-cake",
    "name": "Medovik (Russian Honey Cake)",
    "description": "The real-deal Medovik: paper-thin honey sponge layers cooked over a double boiler with caramelized honey, baked individually until amber, then stacked with a tangy sour-cream-and-whipped-cream frosting. Rested overnight, the crumb drinks in the cream and turns into something between a cake and a dream. Crowned with crushed scraps for that signature soft, suede-like finish.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "honey",
        "quantity": 5.33,
        "note": "1/3 cup honey, for the dough"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, lightly beaten"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 2,
        "note": "2 tsp baking soda"
      },
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "3 1/2 cups all-purpose flour, plus more for rolling"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 48,
        "note": "3 cups (24 oz) full-fat sour cream, cold, for the frosting"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.5,
        "note": "1 1/2 cups cold heavy whipping cream"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "about 1 cup plus 2 tbsp powdered sugar, for the frosting"
      }
    ],
    "steps": [
      "Make the honey dough over a double boiler: Set a heatproof bowl over a saucepan of barely simmering water (bowl not touching the water). Add the honey, granulated sugar, and butter; stir until melted and smooth. Cook, stirring, until the mixture deepens to a warm amber-caramel color and smells nutty, about 5-8 minutes. Stir in the baking soda off the heat; the mixture will foam up dramatically and lighten in color and volume. Return to the heat and stir 2 more minutes until the foam settles slightly.",
      "Temper and finish the dough: Remove the bowl from the heat. Whisking constantly so the eggs don't scramble, pour in the beaten eggs in a slow stream, then whisk in the vanilla and salt. Add the flour about 1 cup at a time, switching to a spatula, mixing until you have a soft, slightly sticky, pliable dough. Turn out onto a floured surface, knead briefly into a smooth log, then divide into 8 equal pieces. Wrap and let rest 20-30 minutes (dough is easier to roll once cooled).",
      "Roll and bake the layers: Preheat the oven to 350F (175C). Working one piece at a time, roll each on a sheet of floured parchment into a very thin round about 9 inches across. Trace and trim around an 8-inch plate or cake pan, saving the scraps. Prick all over with a fork. Slide the parchment onto a baking sheet and bake until golden amber, 4-6 minutes each. Bake the scraps too. Re-trim each hot layer to a clean 8-inch circle while still warm, then cool flat. You should have 8 crisp layers; they soften as they sit.",
      "Make the crumb topping: Once cooled, blitz or crush all the trimmings and scraps into fine crumbs. Set aside for finishing the cake.",
      "Make the frosting: In a large cold bowl, whip the heavy cream with half the powdered sugar to stiff peaks. In a separate bowl, whisk the cold sour cream with the remaining powdered sugar until smooth. Gently fold the whipped cream into the sour cream until just combined into a billowy, spreadable frosting. Keep cold.",
      "Assemble: Place one layer on a serving plate, anchoring it with a dab of frosting. Spread a generous, even layer of frosting (about 1/2 cup) to the edges, then top with the next cake layer. Repeat, pressing gently, until all 8 layers are stacked. Frost the top and sides completely with the remaining cream.",
      "Coat and chill: Press the reserved crumbs all over the top and sides so the whole cake is suede-soft and golden. Cover loosely and refrigerate at least 8 hours, ideally overnight, so the layers absorb the cream and turn tender.",
      "Serve: Slice with a sharp knife wiped clean between cuts. The cake keeps, refrigerated, for up to 4 days and is arguably even better on day two."
    ],
    "totalTimeMinutes": 600,
    "prepTimeMinutes": 75,
    "cookTimeMinutes": 45,
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
      "Buy store-brand honey and sour cream in the largest tubs; you need a lot and premium brands won't change the result once it's caramelized and frosted.",
      "No double boiler needed: set any metal or glass bowl over a pot of simmering water. A single saucepan on the lowest heat works too if you stir constantly so the honey doesn't scorch.",
      "Bake two thin layers at once on separate sheets to cut oven time, and reuse one piece of parchment for several rounds."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Swap up to half the sour cream for full-fat Greek yogurt for a slightly firmer, equally tangy frosting.",
        "savings": "Greek yogurt tubs are often cheaper per ounce than name-brand sour cream"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Skip the whipped cream and use all sour cream beaten with the powdered sugar for the traditional ultra-tangy frosting.",
        "savings": "Saves the cost of a carton of heavy cream entirely"
      },
      {
        "forIngredientId": "honey",
        "swap": "Replace honey with the same amount of maple syrup or golden corn syrup; it caramelizes similarly, though the honey flavor is what defines Medovik.",
        "savings": "Corn syrup is cheaper than good honey"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 6,
      "carbs": 58,
      "fat": 25,
      "fiber": 1
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "Russian",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "make-ahead",
      "honey",
      "layered"
    ]
  },
  {
    "id": "bake2-financiers",
    "name": "Classic French Financiers",
    "description": "Tender little almond tea cakes with a crisp, golden edge and a moist, melting crumb, built on beurre noisette (brown butter), almond flour, and egg whites. The browned butter and toasted-almond aroma are the whole point — a true French pâtisserie classic, traditionally baked in small rectangular molds that recall gold ingots.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp (140g) unsalted butter, for beurre noisette"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 1,
        "note": "1 cup (100g) almond flour (finely ground blanched almonds)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup + 2 tbsp (130g) powdered sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup (60g) all-purpose flour"
      },
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 2,
        "note": "1/2 cup (about 4 large egg whites, ~120g), at room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp honey, for extra moisture and color"
      }
    ],
    "steps": [
      "Make the beurre noisette: melt the butter in a light-colored saucepan over medium heat. Keep cooking, swirling often, as it foams; after a few minutes the milk solids turn golden-brown and it smells of toasted hazelnut. Immediately pour it (browned bits and all) into a bowl to stop the cooking, and let it cool until just warm.",
      "In a separate bowl, whisk together the almond flour, powdered sugar, all-purpose flour, and salt until evenly combined and lump-free.",
      "Add the egg whites and vanilla to the dry mix. Whisk just until you have a smooth, thick batter — do not whip air into it; you want it homogeneous, not foamy.",
      "Whisk in the honey if using, then stream in the warm brown butter while whisking, until the batter is glossy and emulsified. Press a piece of plastic wrap onto the surface and rest the batter in the fridge for at least 1 hour (or up to 2 days) — resting is key to the dense, melting crumb.",
      "Position a rack in the upper third of the oven and preheat to 400F (200C). Generously butter a financier mold or mini-muffin tin and dust lightly with flour, tapping out the excess.",
      "Spoon or pipe the chilled batter into the molds, filling each about three-quarters full. Leave a little room — they rise and dome slightly.",
      "Bake for 13 to 16 minutes, until the edges are deep golden and the centers are set but still springy. The tops should be lightly browned with a crackly edge.",
      "Cool in the molds for 5 minutes, then turn out onto a rack. Serve slightly warm or at room temperature the same day, when the contrast of crisp edge and moist center is at its best."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 20,
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
      "Buy whole blanched almonds in bulk and grind them fine in a coffee/spice grinder with a spoonful of the powdered sugar — much cheaper than packaged almond flour.",
      "Save the yolks from separating the eggs to make custard, lemon curd, or enrich scrambled eggs so nothing goes to waste.",
      "No financier molds? A standard mini-muffin tin works perfectly and is something most kitchens already have."
    ],
    "substitutions": [
      {
        "forIngredientId": "liquid-egg-whites",
        "swap": "Whites separated from 4 fresh large eggs",
        "savings": "Cheaper if you already buy whole eggs and use the yolks elsewhere"
      },
      {
        "forIngredientId": "honey",
        "swap": "1 tbsp maple syrup, or omit",
        "savings": "Minor savings; cakes are great without it"
      },
      {
        "forIngredientId": "almond-flour",
        "swap": "Hazelnut flour for a noisette version, or finely ground oats in a pinch",
        "savings": "Ground oats are far cheaper, though crumb and flavor change"
      }
    ],
    "estimatedNutrition": {
      "calories": 175,
      "protein": 3,
      "carbs": 15,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "tea-cake",
      "almond",
      "brown-butter",
      "dessert",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-canel-s",
    "name": "Classic Bordeaux Canelés",
    "description": "The real deal from Bordeaux: small fluted pastries with a dark, almost-burnt caramelized crust giving way to a tender, custardy, rum-and-vanilla-scented center. The batter is mixed like a thin crepe batter, rested at least 24 hours, then baked hot to set that signature lacquered shell. Patience and a screaming-hot oven do the work.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups (500 ml) whole milk"
      },
      {
        "ingredientId": "butter",
        "quantity": 3.5,
        "note": "3.5 tbsp (50 g) unsalted butter"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup (200 g) granulated sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup (100 g) all-purpose flour"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large egg yolks plus 1 whole egg"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (or 1 split vanilla bean)"
      },
      {
        "ingredientId": "rum",
        "quantity": 1.5,
        "note": "1.5 oz (3 tbsp) dark rum"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      }
    ],
    "steps": [
      "Heat the milk with the butter and vanilla in a saucepan over medium until the butter melts and the milk is steaming but not boiling (about 180F). Remove from heat and let cool to warm, around 5 minutes.",
      "In a bowl, whisk together the flour, sugar, and salt. In a separate bowl, lightly beat the 2 egg yolks and 1 whole egg.",
      "Pour the beaten eggs into the dry mixture and whisk just to combine into a thick paste. Gradually whisk in the warm milk in a slow stream, mixing gently until you have a smooth, thin batter the consistency of crepe batter. Do not overwhisk or whip in air. Stir in the rum.",
      "Strain the batter through a fine sieve into a container, cover, and refrigerate at least 24 hours and up to 48. This rest is essential for the texture and crust, so do not skip it.",
      "When ready to bake, generously grease a 12-cavity canelé mold (traditional copper, brushed with beeswax-butter, or nonstick/silicone) and chill the molds. Preheat the oven to 450F (230C) with a rack in the lower third. Gently stir the rested batter to recombine without aerating it.",
      "Fill each mold to about 3/4 full, leaving room for rise, and set the molds on a baking sheet. Bake at 450F for 15 minutes to set and darken the crust.",
      "Reduce the oven to 375F (190C) and continue baking 50 to 60 minutes, until the canelés are deeply mahogany-brown, almost dark, on the outside. They should look much darker than seems normal; that is the caramelized crust.",
      "Unmold immediately by inverting onto a rack. If a canelé slips back or looks pale, return it to a hot mold for a few more minutes. Cool at least 1 hour before eating; the inside continues to set. Eat the same day for the best crust-to-custard contrast."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 75,
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
      "Skip pricey copper molds: a nonstick or silicone canelé/muffin pan works well for home bakers and costs a fraction. Grease it heavily and chill before filling.",
      "Use a whole egg plus the yolks from eggs you'll use elsewhere instead of buying extra; canelés are a great way to use up leftover yolks from another recipe.",
      "Imitation vanilla or a small piece of a used vanilla pod (rinsed and dried from a previous batch) saves money versus a fresh bean, and the rum carries plenty of aroma."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "Equal amount of bourbon or Cognac, or omit and add 1 extra tsp vanilla for an alcohol-free version",
        "savings": "Using an existing bottle avoids buying rum"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1 split vanilla bean steeped in the warm milk for the most authentic flavor",
        "savings": "Skip if using extract you already have"
      },
      {
        "forIngredientId": "butter",
        "swap": "Same amount of a neutral plant butter to grease and enrich, for a dairy-light version",
        "savings": "Use what's already in the fridge"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 3,
      "carbs": 24,
      "fat": 5,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "dessert",
      "pastry",
      "make-ahead",
      "custard"
    ]
  },
  {
    "id": "bake2-bee-sting-cake",
    "name": "Bienenstich (German Bee Sting Cake)",
    "description": "The authentic German Bee Sting Cake: a tender enriched yeast dough baked under a crackly honey-almond caramel, split and filled with a vanilla pastry cream lightened with whipped cream. The crunchy caramelized almond top against the silky custard is what earns it the name.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour, for the yeast dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant yeast (1 standard packet)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk, lukewarm"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp unsalted butter, softened (for the dough)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs (1 for the dough, 1 yolk for the pastry cream)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2.5,
        "note": "2 1/2 tsp vanilla (1/2 tsp dough, 2 tsp pastry cream)"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp unsalted butter, for the honey-almond topping"
      },
      {
        "ingredientId": "honey",
        "quantity": 3,
        "note": "3 tbsp honey, for the topping"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar, for the topping caramel"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.25,
        "note": "1 1/4 cups heavy cream (2 tbsp in topping, rest whipped into filling)"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 1,
        "note": "1 cup sliced/slivered almonds, for the topping"
      },
      {
        "ingredientId": "milk",
        "quantity": 1.5,
        "note": "1 1/2 cups whole milk, for the pastry cream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "1/3 cup granulated sugar, for the pastry cream"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "3 tbsp cornstarch, for the pastry cream"
      }
    ],
    "steps": [
      "Make the dough: In a bowl whisk 2 1/2 cups flour, the yeast, 1/4 cup sugar, and salt. Add the lukewarm milk, 1 whole egg, 1/2 tsp vanilla, and 6 tbsp softened butter. Mix, then knead 8-10 minutes until smooth and elastic (it will be soft and slightly sticky). Cover and let rise in a warm spot 60-90 minutes until doubled.",
      "Press the dough into a parchment-lined and buttered 9-inch springform or square pan, pushing it evenly to the edges. Cover loosely and let it rise again while you make the topping, about 20-30 minutes.",
      "Make the honey-almond topping: In a saucepan melt 6 tbsp butter with the honey and 1/4 cup sugar. Bring to a simmer and cook 2-3 minutes until bubbling and pale gold, then stir in 2 tbsp of the heavy cream and the sliced almonds. Let cool 5 minutes so it thickens slightly. Preheat the oven to 350F (175C).",
      "Gently spoon the warm almond mixture over the risen dough and spread to the edges. Bake 25-30 minutes until the top is deep golden and caramelized and the dough is cooked through. Cool completely in the pan, then release.",
      "Make the pastry cream: Heat 1 1/2 cups milk until steaming. In a bowl whisk 1 egg yolk, 1/3 cup sugar, and the cornstarch until smooth. Slowly whisk in the hot milk, return everything to the pan, and cook over medium heat, whisking constantly, until thick and bubbling, 2-3 minutes. Off heat whisk in 2 tsp vanilla. Press plastic wrap onto the surface and chill until cold, at least 2 hours.",
      "Whip the remaining cream (about 1 cup) to stiff peaks. Whisk the cold pastry cream smooth, then fold in the whipped cream in two additions to keep it light. This is the diplomat-style filling.",
      "Assemble: With a serrated knife, slice the cooled cake horizontally into two layers. To make slicing easy, pre-cut the caramelized top layer into 12 wedges or squares before placing it back on (the caramel shatters if cut later).",
      "Spread all the filling over the bottom layer in a thick, even cushion. Set the pre-cut almond top gently over the cream. Chill at least 1 hour to set, then serve cold."
    ],
    "totalTimeMinutes": 240,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 30,
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
      "Sliced almonds are cheapest in the baking aisle bulk bin or a store brand bag rather than small branded packets buy once and they keep for months in the freezer.",
      "Skip a stand mixer this enriched dough kneads fine by hand in 10 minutes, and you save on equipment you might not own.",
      "Make the pastry cream with one egg yolk and cornstarch instead of a custard of many yolks it sets just as firmly for a fraction of the egg cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "slivered-almonds",
        "swap": "Use sunflower seeds or chopped peanuts for the caramel crunch",
        "savings": "About half the price of almonds"
      },
      {
        "forIngredientId": "honey",
        "swap": "Replace with maple syrup or agave in the topping",
        "savings": "Often cheaper than raw honey"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use all pastry cream and skip the whipped cream fold for a more traditional firm custard filling",
        "savings": "Saves the cost of a carton of cream"
      }
    ],
    "estimatedNutrition": {
      "calories": 395,
      "protein": 7,
      "carbs": 38,
      "fat": 24,
      "fiber": 2
    },
    "emoji": "🐝",
    "accentColor": "bg-amber-100",
    "cuisine": "German",
    "tags": [
      "baking",
      "dessert",
      "german",
      "yeast-cake",
      "pastry-cream",
      "caramel",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-streuselkuchen",
    "name": "Classic German Streuselkuchen",
    "description": "An authentic German crumb cake: a soft, lightly sweet yeast dough baked under a thick blanket of buttery cinnamon streusel that bakes up into golden, craggy crumbs. This is the real Blechkuchen (sheet cake) version sold in every German bakery — humble, comforting, and best with afternoon coffee. The trick is keeping the streusel butter cold so the crumbs stay clumpy rather than melting flat.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour, for the yeast dough"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk, lukewarm (about 100F)"
      },
      {
        "ingredientId": "active-dry-yeast",
        "quantity": 1,
        "note": "1 packet (2 1/4 tsp) active dry yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 5,
        "note": "5 tbsp unsalted butter, melted and cooled, for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temperature"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp finely grated lemon zest (optional, classic touch)"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, for the streusel topping"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, for the streusel"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) cold unsalted butter, cubed, for the streusel"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1 1/2 tsp ground cinnamon, for the streusel"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp powdered sugar, for dusting (optional)"
      }
    ],
    "steps": [
      "Make the dough: Stir the yeast and a pinch of the dough sugar into the lukewarm milk and let it sit 5-10 minutes until foamy. In a large bowl, combine the 2 1/2 cups flour, remaining dough sugar, and salt. Add the foamy milk, melted-and-cooled butter, egg, vanilla, and lemon zest, then mix and knead 8-10 minutes by hand (or 5 minutes with a dough hook) until you have a smooth, soft, slightly tacky dough.",
      "Cover the bowl with a damp towel and let the dough rise in a warm spot for about 1 to 1 1/2 hours, until doubled in size.",
      "Make the streusel while the dough rises: In a separate bowl, combine the 2 cups flour, 3/4 cup sugar, and cinnamon. Add the cold cubed butter and rub it in with your fingertips until you have a mix of pea-sized to hazelnut-sized clumps. Do not overwork it into a paste — you want distinct crumbs. Chill the streusel in the fridge until needed.",
      "Punch down the risen dough and press it evenly into a greased 9x13-inch baking pan (or a quarter sheet pan), pushing it into the corners. Cover and let it rest 15-20 minutes while the oven heats.",
      "Preheat the oven to 350F (180C). Scatter the chilled streusel evenly over the entire surface of the dough in a thick, generous layer — the topping should be as deep as the cake itself.",
      "Bake on the center rack for 30-35 minutes, until the streusel is golden and a skewer inserted into the dough comes out clean. The edges should be lightly browned and the crumbs set but not hard.",
      "Let the cake cool in the pan for at least 20 minutes. Dust with powdered sugar if using, then cut into 12 squares and serve warm or at room temperature."
    ],
    "totalTimeMinutes": 130,
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
      "Active dry yeast is far cheaper bought in a jar than in single packets — one jar makes a dozen-plus cakes and keeps for months in the fridge.",
      "Skip the lemon zest and vanilla if money is tight; the cinnamon streusel and yeast dough carry the flavor on their own.",
      "No stand mixer needed — kneading by hand for 10 minutes costs nothing and is the traditional method anyway."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use water plus 1 tbsp extra melted butter for a slightly less rich but perfectly good dough",
        "savings": "~$0.30"
      },
      {
        "forIngredientId": "active-dry-yeast",
        "swap": "Instant yeast works 1:1 and can be mixed straight into the flour without proofing",
        "savings": "$0.00"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "A pinch of nutmeg or extra cinnamon for a warmer, spicier crumb",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 345,
      "protein": 5,
      "carbs": 48,
      "fat": 15,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "German",
    "tags": [
      "baking",
      "german",
      "cake",
      "yeast-dough",
      "coffee-cake",
      "streusel",
      "dessert"
    ]
  },
  {
    "id": "bake2-plum-torte",
    "name": "Marian Burros's Original Plum Torte",
    "description": "The legendary New York Times plum torte — a tender, buttery one-bowl cake studded with halved Italian prune plums that sink and caramelize into the batter as it bakes. A crackly cinnamon-sugar lid forms on top, the fruit turns jammy and tart, and the whole thing comes together in about ten minutes of actual work. Originally published by Marian Burros, it ran in the Times every fall for years by popular demand. It is genuinely one of the best things you can do with a bowl of plums.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, plus 1-2 tbsp for the topping"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour, sifted"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125,
        "note": "pinch of salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "plum-sauce",
        "quantity": 0,
        "note": "12 small Italian prune plums, halved and pitted (this is fresh fruit — measured as 24 halves; not a pantry sauce)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon, for the topping"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp fresh lemon juice, for the topping"
      }
    ],
    "steps": [
      "Heat the oven to 350°F (175°C). Lightly butter a 9- or 10-inch springform pan. If you only have a regular round cake pan, line the bottom with a parchment circle so the torte releases cleanly.",
      "Cream the softened butter and 3/4 cup sugar together in a large bowl until pale and fluffy, about 2-3 minutes with a hand mixer. This is the only step that needs real attention — well-creamed butter is what gives the torte its tender crumb.",
      "Add the flour, baking powder, salt, and both eggs all at once. Beat just until the batter is smooth and uniform — it will be thick. Do not overmix once the flour is in.",
      "Scrape the batter into the prepared springform pan and smooth the top. It is a thin layer; that is correct.",
      "Halve and pit the prune plums. Arrange them skin-side up, cut-side down, over the batter, packing them in fairly tightly — they shrink as they bake. Press them lightly into the batter.",
      "Sprinkle the top evenly with the lemon juice, then the cinnamon, then 1-2 tbsp sugar (more if your plums are very tart). The sugar and cinnamon form the signature crackly top.",
      "Bake for 45 to 55 minutes, until the cake is golden, the center is set, and a toothpick inserted into the cake (not a plum) comes out clean. The fruit will be bubbling and jammy.",
      "Cool on a rack at least 15-20 minutes before releasing the springform. Serve warm or at room temperature, plain or with a spoon of lightly whipped cream. It is even better the next day — wrap and keep at room temperature, or freeze well-wrapped for up to 3 months."
    ],
    "totalTimeMinutes": 65,
    "prepTimeMinutes": 15,
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
      "Italian prune plums are cheapest and best in late summer/early fall — buy a flat when they're in season and freeze halved, pitted plums in a bag to bake this all winter.",
      "No springform? Any 9-inch round or 8-inch square pan works; just line the bottom with parchment and lift it out after cooling.",
      "Salted butter is fine if it's all you have — just skip the added pinch of salt and you've saved a separate purchase."
    ],
    "substitutions": [
      {
        "forIngredientId": "plum-sauce",
        "swap": "Italian prune plums are traditional, but any small ripe plums, halved apricots, or pitted cherries work beautifully — adjust topping sugar up for tarter fruit",
        "savings": "use whatever stone fruit is on sale or overripe"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "a fresh squeeze of lemon, or skip it entirely — it only brightens the fruit",
        "savings": "skip if you don't have a lemon"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter (a 1:1 baking stick) makes a solid dairy-free version",
        "savings": "no real savings, but handy if you keep vegan butter around"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 3,
      "carbs": 33,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🫐",
    "accentColor": "bg-purple-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "fall",
      "fruit",
      "one-bowl",
      "classic",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-funfetti-cake",
    "name": "Classic Funfetti Layer Cake",
    "description": "A tender, fluffy white birthday cake studded with rainbow sprinkles and finished with a silky vanilla buttercream. Made the proper way — with the creaming method, egg whites only for a snowy crumb, and just enough almond extract to give it that nostalgic boxed-mix flavor, only better. The hallmark is using jimmies (the long rod sprinkles), which hold their color and don't bleed into the batter.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups cake flour (or all-purpose; see substitutions)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2.5,
        "note": "2 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 28,
        "note": "1 3/4 cups granulated sugar"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 4,
        "note": "1/4 cup vegetable oil"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg whites, room temperature"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 3,
        "note": "1 tbsp pure vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "1 cup buttermilk, room temperature"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 3,
        "note": "3/4 cup rainbow sprinkles (jimmies), plus more for topping — use the catalog 'chocolate-chips' id as the closest small-bake-add-in"
      },
      {
        "ingredientId": "butter",
        "quantity": 24,
        "note": "FROSTING: 1 1/2 cups (3 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 80,
        "note": "FROSTING: 5 cups powdered sugar"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.25,
        "note": "FROSTING: 1/4 cup heavy cream"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 2,
        "note": "FROSTING: 2 tsp pure vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "FROSTING: 1/4 tsp salt"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (177C). Grease two 9-inch round cake pans, line the bottoms with parchment rounds, then grease and flour the pans. Whisk the cake flour, baking powder, and salt together in a bowl and set aside.",
      "In a large bowl with a hand or stand mixer, beat the softened butter, sugar, and oil on high until light, pale, and fluffy, about 3 minutes. Scrape down the bowl.",
      "Add the egg whites one at a time, beating well after each, then beat in the vanilla and almond extract until smooth and creamy. The mixture should be airy — this is what gives the cake its lift.",
      "With the mixer on low, add the dry ingredients in three additions alternating with the buttermilk in two additions, beginning and ending with the dry. Mix just until combined and no flour streaks remain — do not overmix, or the cake will turn tough.",
      "Gently fold in the rainbow sprinkles by hand with a spatula, working quickly so the colors don't bleed into the batter. Divide the batter evenly between the two prepared pans and smooth the tops.",
      "Bake for 23 to 26 minutes, until a toothpick inserted in the center comes out clean and the tops spring back when lightly pressed. Cool in the pans for 10 minutes, then turn out onto a wire rack and cool completely before frosting.",
      "Make the buttercream: beat the softened butter on medium-high for 2 minutes until creamy. Add the powdered sugar 1 cup at a time on low, then add the heavy cream, vanilla, and salt. Beat on high for 3 minutes until light and spreadable; add a splash more cream if too thick.",
      "Assemble: level the cake tops if domed. Set one layer on a plate, spread with about 1 cup of frosting, top with the second layer, then frost the top and sides. Press extra sprinkles around the bottom edge and over the top, then chill 20 minutes to set before slicing."
    ],
    "totalTimeMinutes": 120,
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
      "All-purpose flour works fine instead of cake flour — remove 2 tbsp per cup and replace with cornstarch for the same tender crumb at a fraction of the cost.",
      "Buy sprinkles in bulk from the baking aisle rather than tiny decorating jars; the big tubs cost less per ounce and last across many bakes.",
      "Save the 4 leftover egg yolks in the fridge for up to 3 days and use them for scrambled eggs, custard, or pasta carbonara so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup whole milk + 1 tbsp lemon juice or vinegar, rested 5 minutes",
        "savings": "skip buying a whole carton of buttermilk"
      },
      {
        "forIngredientId": "flour",
        "swap": "all-purpose flour, with 2 tbsp per cup swapped for cornstarch to mimic cake flour",
        "savings": "uses pantry staples you already have"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole milk in the frosting (add a little less for the right thickness)",
        "savings": "no need for a separate cream purchase"
      }
    ],
    "estimatedNutrition": {
      "calories": 620,
      "protein": 5,
      "carbs": 88,
      "fat": 28,
      "fiber": 1
    },
    "emoji": "🎂",
    "accentColor": "bg-pink-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "birthday",
      "vanilla",
      "sprinkles",
      "layer-cake",
      "celebration"
    ]
  },
  {
    "id": "bake2-cassata-siciliana",
    "name": "Cassata Siciliana",
    "description": "The crown jewel of Sicilian dolci: a moist pan di Spagna sponge baked from scratch, soaked in Marsala, layered around a sweet ricotta-and-dark-chocolate filling, wrapped in a band of almond marzipan, glazed with a thin lemon icing, and crowned with candied fruit and pistachios. Rich, festive, and unmistakably Sicilian.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, separated (for the pan di Spagna sponge)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar (for the sponge)"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour, sifted"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp grated lemon zest"
      },
      {
        "ingredientId": "ricotta",
        "quantity": 4,
        "note": "2 cups (about 1 lb) whole-milk ricotta, well drained overnight"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered sugar (for the ricotta filling)"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 3,
        "note": "3 oz dark chocolate, finely chopped into small chips"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "note": "1/4 tsp ground cinnamon (for the ricotta)"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 1.5,
        "note": "1 1/2 cups almond flour (for the marzipan band)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup powdered sugar (for the marzipan)"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract (for the marzipan)"
      },
      {
        "ingredientId": "marsala-wine",
        "quantity": 6,
        "note": "6 tbsp sweet Marsala wine (for soaking the sponge), plus a splash for the marzipan"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup powdered sugar (for the lemon glacé icing)"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 2,
        "note": "about 2 tbsp lemon juice (to thin the icing)"
      },
      {
        "ingredientId": "dried-apricots",
        "quantity": 0.5,
        "note": "1/2 cup mixed candied/dried fruit (dried apricots, plus citrus peel if available), for decorating"
      },
      {
        "ingredientId": "pistachios",
        "quantity": 1,
        "note": "1 oz shelled pistachios, for garnish"
      },
      {
        "ingredientId": "marmalade",
        "quantity": 2,
        "note": "2 tbsp orange marmalade, warmed, for glazing the candied fruit"
      }
    ],
    "steps": [
      "Bake the pan di Spagna: Preheat the oven to 350F (175C) and butter and line a 9-inch round cake pan. Beat the 6 egg yolks with half the granulated sugar (about 6 tbsp) until pale and tripled in volume, then beat in the vanilla and lemon zest. In a clean bowl, whip the egg whites to soft peaks, gradually add the remaining sugar, and whip to firm, glossy peaks. Fold a third of the whites into the yolks to loosen, then gently fold in the rest alternately with the sifted flour, working quickly to keep the air. Pour into the pan and bake 28-32 minutes until golden and springy. Cool completely, then turn out.",
      "Make the ricotta filling: Press the drained ricotta through a fine sieve into a bowl until completely smooth and creamy. Beat in the 3/4 cup powdered sugar and the cinnamon, then fold in the finely chopped dark chocolate. Cover and chill while you assemble everything else; it should be thick and spreadable.",
      "Make the marzipan: Pulse or knead together the almond flour, 1 cup powdered sugar, almond extract, and a teaspoon or two of Marsala until it forms a smooth, pliable paste. (Tradition tints it pale green; leave it natural if you have no coloring.) Roll between two sheets of parchment into a long strip the height of your cake and long enough to line the inside of the pan.",
      "Line the mold: Lightly oil the cleaned 9-inch pan and line it with plastic wrap. Slice the cooled sponge horizontally into 1/2-inch layers. Press the marzipan strip around the inside wall of the pan to form a collar, then trim sponge pieces to tile the bottom snugly. Brush the bottom sponge generously with Marsala.",
      "Fill and top: Spread all of the ricotta filling over the bottom sponge layer inside the marzipan collar, leveling the top. Cover with a final layer of sponge cut to fit, brush that sponge with the remaining Marsala, and press gently so everything is compact. Cover and refrigerate at least 4 hours, ideally overnight, so the cake sets firm enough to unmold cleanly.",
      "Unmold and glaze: Invert the chilled cassata onto a serving plate and peel away the plastic wrap; the marzipan band is now on the outside. Whisk the 1 cup powdered sugar with just enough lemon juice to make a thick but pourable glacé icing. Pour it over the top and let it flow to the marzipan edge, smoothing with an offset spatula so the icing coats the top in a clean white sheet.",
      "Decorate: Once the icing has begun to set, arrange the candied/dried fruit in the traditional radial pattern over the top, scatter the pistachios, and brush the fruit with warmed marmalade for a glossy finish. Chill 30 minutes to set the decoration, then slice with a hot, dry knife and serve cold."
    ],
    "totalTimeMinutes": 360,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 30,
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
      "Skip pricey jarred candied fruit (frutta candita) and use dried apricots plus a little orange marmalade for the same jewel-toned, citrusy top at a fraction of the cost.",
      "Make your own marzipan from almond flour and powdered sugar instead of buying almond paste; it is far cheaper and tastes fresher.",
      "Buy a tub of plain whole-milk ricotta and drain it yourself overnight in a sieve rather than paying for pre-strained 'cake' ricotta."
    ],
    "substitutions": [
      {
        "forIngredientId": "marsala-wine",
        "swap": "Equal parts orange juice with a few drops of almond extract for an alcohol-free soak",
        "savings": "Avoids buying a whole bottle of Marsala"
      },
      {
        "forIngredientId": "dark-chocolate",
        "swap": "Semi-sweet chocolate chips, roughly chopped",
        "savings": "Often cheaper and already on hand"
      },
      {
        "forIngredientId": "dried-apricots",
        "swap": "Any candied citrus peel or glacé cherries you already have",
        "savings": "Use up pantry odds and ends"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 9,
      "carbs": 47,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🍰",
    "accentColor": "bg-emerald-100",
    "cuisine": "Sicilian",
    "tags": [
      "baking",
      "dessert",
      "sicilian",
      "italian",
      "ricotta",
      "celebration",
      "marzipan",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-cut-out-sugar-cookies",
    "name": "Classic Cut-Out Sugar Cookies",
    "description": "Crisp-edged, tender-centered roll-and-cut sugar cookies that hold their shape with sharp, defined edges — no spreading, no puffing. The dough is sturdy enough to roll and cut yet rich with butter and vanilla, the kind you decorate with royal icing for the holidays. The secret is plenty of butter, a touch of almond extract, and chilling so the shapes stay crisp.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour, plus more for rolling"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.75,
        "note": "3/4 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1 1/2 tsp pure vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract"
      }
    ],
    "steps": [
      "In a medium bowl, whisk together the flour, baking powder, and salt. Set aside.",
      "In a large bowl with a hand mixer (or a stand mixer fitted with the paddle), beat the softened butter and sugar on medium-high for 2 to 3 minutes until pale and fluffy. Beat in the egg, then the vanilla and almond extract, scraping down the bowl as needed.",
      "Add the flour mixture in two additions, mixing on low just until a soft dough comes together and no dry streaks remain. Do not overmix.",
      "Divide the dough in half and shape each piece into a flat disk. Roll each disk to about 1/4 inch thick between two sheets of parchment (this avoids adding extra flour). Slide the rolled slabs onto a baking sheet and chill in the refrigerator for at least 1 hour, until firm.",
      "Position racks in the upper and lower thirds of the oven and preheat to 350F (175C). Line two baking sheets with parchment.",
      "Working with one chilled slab at a time, peel off the parchment and cut out shapes with cookie cutters. Transfer to the lined sheets, spacing about 1 inch apart. Re-roll and chill scraps as needed. For the sharpest edges, chill the cut shapes on the sheet for 10 minutes before baking.",
      "Bake 9 to 11 minutes, rotating the sheets halfway through, until the cookies are set and the edges are just barely golden (pull them before they brown for soft cookies, a touch longer for crisp).",
      "Let the cookies cool on the sheet for 5 minutes, then transfer to a wire rack to cool completely before decorating with royal icing or glaze."
    ],
    "totalTimeMinutes": 105,
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
      "Store-brand all-purpose flour, sugar, and butter perform identically here — no need for premium brands when the cookie is mostly these three pantry staples.",
      "Almond extract is optional. If you don't want to buy a bottle, just use a full 2 tsp of vanilla; the cookies are still excellent.",
      "No cookie cutters? Cut squares or diamonds with a knife and a ruler, or trace shapes around a clean glass rim — zero special equipment needed."
    ],
    "substitutions": [
      {
        "forIngredientId": "almond-extract",
        "swap": "Replace with an extra 1/2 tsp vanilla, or a little lemon zest for a citrusy version",
        "savings": "Skips buying a single-use bottle"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (stick form, not tub) works for a dairy-free version; chill the dough a bit longer as it softens faster",
        "savings": "Comparable cost"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Powdered sugar (1 1/4 cups) makes an even more tender, melt-in-the-mouth cookie with a smoother surface for icing",
        "savings": "Roughly equal"
      }
    ],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 1.6,
      "carbs": 18,
      "fat": 6.5,
      "fiber": 0.4
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cookies",
      "dessert",
      "holiday",
      "make-ahead",
      "decorating",
      "kid-friendly"
    ]
  },
  {
    "id": "bake2-molasses-spice-cookies",
    "name": "Classic Molasses Spice Cookies",
    "description": "Soft, chewy old-fashioned molasses spice cookies with crackly sugar-rolled tops. Deep molasses flavor balanced by cinnamon, ginger, and cloves, with a tender center and slightly crisp edge. The hallmark is the granulated-sugar coating that crackles as the cookies spread and set.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 2,
        "note": "2 tsp baking soda"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1 1/2 tsp ground cinnamon"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 1.5,
        "note": "1 1/2 tsp ground ginger"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.75,
        "note": "3/4 tsp ground cloves"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed dark brown sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "molasses",
        "quantity": 4,
        "note": "1/4 cup unsulphured (dark) molasses"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar, for rolling"
      }
    ],
    "steps": [
      "Whisk together the flour, baking soda, cinnamon, ginger, cloves, and salt in a medium bowl; set aside.",
      "In a large bowl, beat the softened butter and brown sugar with an electric mixer on medium-high until light and fluffy, about 2 to 3 minutes. Add the egg, molasses, and vanilla and beat until fully combined, scraping down the bowl once.",
      "Add the dry ingredients to the wet and mix on low just until no dry streaks remain. The dough will be soft and sticky. Cover and chill in the refrigerator for at least 1 hour (or up to 2 days) so it firms up and the flavors deepen.",
      "Position racks in the upper and lower thirds of the oven and preheat to 350°F (175°C). Line two baking sheets with parchment paper. Put the granulated sugar for rolling in a small bowl.",
      "Scoop the chilled dough into 1 1/2-tablespoon balls and roll each between your palms, then roll generously in the granulated sugar to coat. Place on the prepared sheets about 2 1/2 inches apart, 12 per sheet, to allow for spreading.",
      "Bake for 10 to 12 minutes, rotating the sheets top-to-bottom and front-to-back halfway through, until the cookies have puffed, spread, and the tops are crackled but the centers still look slightly soft and underbaked.",
      "Let the cookies cool on the baking sheet for 5 minutes to finish setting, then transfer to a wire rack. They firm up as they cool while staying chewy in the center.",
      "Store in an airtight container at room temperature with a slice of bread to keep them soft; they keep well for up to 5 days."
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
      "Buy a single jar of unsulphured molasses and store it in the pantry — it lasts for months and a quarter cup goes a long way, so the per-batch cost is tiny.",
      "Skip the cookie scoop and use two regular spoons plus your hands to portion the dough; rolling in sugar hides any unevenness.",
      "Dark brown sugar gives the best flavor, but if you only have light brown sugar, add an extra teaspoon of molasses to the dough to deepen it."
    ],
    "substitutions": [
      {
        "forIngredientId": "cloves-ground",
        "swap": "Use 3/4 tsp allspice or ground nutmeg if you don't have cloves",
        "savings": "Avoids buying a whole jar of cloves for one recipe"
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap in 3/4 cup plant butter for a dairy-free version with nearly identical chew",
        "savings": "Comparable cost; useful if avoiding dairy"
      },
      {
        "forIngredientId": "molasses",
        "swap": "Dark corn syrup plus an extra 1/2 tsp cinnamon and ginger approximates the body if molasses is unavailable",
        "savings": "Uses a more common pantry staple"
      }
    ],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 1.5,
      "carbs": 22,
      "fat": 5,
      "fiber": 0.5
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cookies",
      "molasses",
      "spice",
      "holiday",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-white-chocolate-macadamia-cookies",
    "name": "White Chocolate Macadamia Cookies",
    "description": "The classic bakery-style cookie: golden, chewy in the center with crisp edges, studded with sweet white chocolate and buttery macadamia nuts. A proper creaming method and an overnight chill give these their signature depth and structure.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed light brown sugar"
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
        "ingredientId": "white-chocolate-chips",
        "quantity": 16,
        "note": "1 cup white chocolate chips (or chopped white chocolate)"
      },
      {
        "ingredientId": "cashews",
        "quantity": 4,
        "note": "1 cup roasted macadamia nuts, roughly chopped (cashews as closest catalog match)"
      }
    ],
    "steps": [
      "Whisk the flour, baking soda, and salt together in a medium bowl and set aside.",
      "In a large bowl, beat the softened butter with the brown sugar and granulated sugar on medium-high speed for 2 to 3 minutes, until pale, light, and fluffy. This aeration is what gives the cookies their tender lift.",
      "Beat in the eggs one at a time, then the vanilla, scraping down the bowl until the batter is smooth and emulsified.",
      "Add the dry ingredients and mix on low just until no dry streaks remain. Do not overmix. Fold in the white chocolate chips and chopped macadamia nuts by hand.",
      "Cover and chill the dough for at least 1 hour, ideally overnight. Chilling firms the butter so the cookies spread less and deepens the flavor. When ready to bake, preheat the oven to 350F (175C) and line two baking sheets with parchment.",
      "Scoop the dough into 2-tablespoon mounds (about 1.5 oz each), spacing them 2 inches apart on the prepared sheets. Press a few extra nuts and chips on top of each for a bakery look.",
      "Bake one sheet at a time for 11 to 13 minutes, until the edges are set and lightly golden but the centers still look slightly underdone and soft. They will finish setting as they cool.",
      "Let the cookies rest on the hot sheet for 5 minutes, then transfer to a wire rack to cool completely. Store in an airtight container for up to 4 days."
    ],
    "totalTimeMinutes": 95,
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
      "Buy nuts and white chocolate from the bulk bin instead of pre-bagged baking aisle packs. You only need 1 cup of each and bulk pricing is far cheaper per ounce.",
      "Macadamias are pricey. Stretch the budget by using half macadamias and half cashews. The flavor stays buttery and the cost drops a lot.",
      "If you only have white sugar, mix 1 tbsp molasses into each cup of white sugar to make brown sugar and skip buying a second bag."
    ],
    "substitutions": [
      {
        "forIngredientId": "cashews",
        "swap": "Use pecans or pine nuts for a similar buttery richness if macadamias are unavailable.",
        "savings": "Pecans run roughly half the price of macadamia nuts."
      },
      {
        "forIngredientId": "white-chocolate-chips",
        "swap": "Chop a white chocolate bar instead of chips for bigger melty pools and better flavor.",
        "savings": "Store-brand bars are often cheaper per ounce than name-brand chips."
      },
      {
        "forIngredientId": "butter",
        "swap": "Brown the butter first (melt and cook until nutty and amber, then cool until solid) for a deeper, toffee-like flavor.",
        "savings": "No cost change, just better cookies."
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 2.5,
      "carbs": 25,
      "fat": 12,
      "fiber": 0.6
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cookies",
      "dessert",
      "classic",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-double-chocolate-cookies",
    "name": "Double Chocolate Cookies",
    "description": "Rich, fudgy double chocolate cookies built on melted dark chocolate and Dutch-process cocoa, then loaded with pools of semi-sweet chips. Crackly tops, soft brownie-like centers, and deep chocolate flavor in every bite.",
    "mealType": "snack",
    "servings": 18,
    "ingredients": [
      {
        "ingredientId": "dark-chocolate",
        "quantity": 6,
        "note": "6 oz dark chocolate (60-70%), chopped"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "dutch-cocoa",
        "quantity": 6,
        "note": "6 tbsp Dutch-process cocoa powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed light brown sugar"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 12,
        "note": "3/4 cup (about 4.5 oz) semi-sweet chocolate chips"
      }
    ],
    "steps": [
      "Set up a double boiler: combine the chopped dark chocolate and butter in a heatproof bowl set over a pan of barely simmering water. Stir until fully melted and glossy, then remove from heat and let cool for 10 minutes until just warm to the touch.",
      "In a separate bowl, whisk together the flour, Dutch-process cocoa, baking soda, and salt. Set aside.",
      "In a large bowl, beat the eggs, granulated sugar, and brown sugar with a hand or stand mixer on high for 3 to 4 minutes, until the mixture is pale, thick, and ribbons off the whisk. This step builds the signature crackly top.",
      "Reduce speed to low and blend in the cooled melted chocolate mixture and the vanilla until smooth and uniform.",
      "Add the dry ingredients and fold by hand with a spatula just until no flour streaks remain. Fold in the semi-sweet chocolate chips. The batter will be thick and fudgy; chill it for 20 to 30 minutes so it firms up enough to scoop.",
      "Meanwhile, preheat the oven to 350F (175C) and line two baking sheets with parchment paper.",
      "Scoop heaping tablespoons of dough (about 1.5 tbsp each), spacing them 2 inches apart, 9 per sheet. Bake one sheet at a time for 10 to 12 minutes, until the tops are crackled and the edges are set but the centers still look slightly soft.",
      "Cool on the baking sheet for 5 minutes to finish setting, then transfer to a wire rack. For extra-glossy tops, press a few reserved chips onto each cookie right after baking."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 12,
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
      "Buy a baking bar of dark chocolate and chop it yourself instead of pricier 'baking chocolate' pucks — it melts identically for a fraction of the cost.",
      "Store-brand Dutch-process cocoa and chocolate chips perform just as well here; the melted dark chocolate carries the flavor, so save your money on the add-ins.",
      "Skip parchment and grease the sheet lightly with butter you already have; just let the cookies cool an extra minute so they release cleanly."
    ],
    "substitutions": [
      {
        "forIngredientId": "dutch-cocoa",
        "swap": "Regular unsweetened cocoa powder (cocoa) works; the cookies will be slightly less dark and a touch more acidic but still excellent.",
        "savings": "Saves about $2 vs. specialty Dutch-process"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "Chopped dark or white chocolate chips, or a mix, for varied pools of melted chocolate.",
        "savings": "Use whatever bar is on sale"
      },
      {
        "forIngredientId": "butter",
        "swap": "Coconut oil, melted with the chocolate, for a dairy-light version with a subtle richness.",
        "savings": "Often cheaper per batch than butter"
      }
    ],
    "estimatedNutrition": {
      "calories": 185,
      "protein": 3,
      "carbs": 24,
      "fat": 10,
      "fiber": 2
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "chocolate",
      "cookies",
      "fudgy"
    ]
  },
  {
    "id": "bake2-spritz-cookies",
    "name": "Classic Spritz Cookies",
    "description": "Tender, buttery Scandinavian press cookies with crisp edges and a melt-in-your-mouth crumb. A high proportion of real butter, a touch of egg, and almond plus vanilla give these their classic flavor. The dough is soft enough to push cleanly through a cookie press into wreaths, stars, and rosettes — no leavening, so they hold their shape and bake up pale gold.",
    "mealType": "snack",
    "servings": 48,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened to cool room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp pure vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 375 F (190 C). Have ungreased, ungreased-and-cool baking sheets ready — the dough must grip a room-temperature, ungreased pan to release from the press, so do not line with parchment and do not grease.",
      "In a large bowl, beat the softened butter and sugar with a mixer on medium-high until pale, light, and fluffy, about 3 to 4 minutes. Scrape the bowl. Beat in the egg, vanilla, and almond extract until fully smooth and combined.",
      "Whisk the flour and salt together, then add to the butter mixture in two additions, mixing on low just until a soft, smooth dough comes together. Do not overmix and do not chill — the dough must stay soft and pliable to extrude cleanly.",
      "Pack the dough into a cookie press fitted with your chosen decorative disk, pressing out any air pockets. Hold the press flat against the cool ungreased baking sheet, pump once to release a cookie, then lift straight up. Space cookies about 1 inch apart.",
      "If a cookie does not stick to the sheet, your dough or pan may be too warm or greased — scrape it back in, wipe the sheet, and try again. Re-press any misshapen cookies; the dough is forgiving.",
      "Bake one sheet at a time for 8 to 10 minutes, until the cookies are set and just barely golden at the edges but still pale on top. Avoid browning, which dries them out.",
      "Let the cookies firm up on the sheet for 2 to 3 minutes, then transfer to a wire rack to cool completely. Cool the baking sheet fully between batches so the next round of dough adheres properly.",
      "Store cooled cookies in an airtight container at room temperature for up to 2 weeks. They also freeze beautifully for up to 2 months."
    ],
    "totalTimeMinutes": 45,
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
      "Buy butter on sale around the holidays and freeze it — this recipe is mostly butter, so the cheaper your butter, the cheaper your cookies.",
      "Skip a dedicated cookie press if you don't have one: pipe the dough through a sturdy star tip in a zip-top bag with a corner cut off for star and rosette shapes.",
      "Almond extract is pricey but you use only drops; one small bottle lasts years, so it's cheaper per batch than it looks. Vanilla alone works in a pinch."
    ],
    "substitutions": [
      {
        "forIngredientId": "almond-extract",
        "swap": "Extra 1/2 tsp vanilla, or 1/2 tsp lemon zest for a citrus version",
        "savings": "saves buying a separate bottle"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Powdered sugar (same 3/4 cup) for an even finer, more tender crumb",
        "savings": "no real cost change"
      },
      {
        "forIngredientId": "butter",
        "swap": "Firm stick-style plant butter for a dairy-free version",
        "savings": "comparable cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 68,
      "protein": 1,
      "carbs": 7,
      "fat": 4,
      "fiber": 0
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Scandinavian",
    "tags": [
      "baking",
      "cookies",
      "holiday",
      "christmas",
      "butter-cookies",
      "cookie-press",
      "scandinavian",
      "make-ahead",
      "dessert"
    ]
  },
  {
    "id": "bake2-speculaas",
    "name": "Classic Dutch Speculaas",
    "description": "Authentic Sinterklaas spiced biscuits with a deep caramel snap, built on a generous speculaaskruiden blend of cinnamon, clove, nutmeg, ginger, cardamom, and white pepper. Brown sugar and a short rest give them their signature crisp bite and warm, fragrant character.",
    "mealType": "snack",
    "servings": 30,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed dark brown sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) cold unsalted butter, cubed"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 4,
        "note": "4 tsp ground cinnamon"
      },
      {
        "ingredientId": "cloves",
        "quantity": 1,
        "note": "1 tsp ground cloves"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.75,
        "note": "3/4 tsp ground nutmeg"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 0.75,
        "note": "3/4 tsp ground ginger"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 0.5,
        "note": "1/2 tsp ground cardamom"
      },
      {
        "ingredientId": "white-pepper",
        "quantity": 0.25,
        "note": "1/4 tsp ground white pepper"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.1875,
        "note": "3 tbsp whole milk, plus more as needed"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 cup slivered almonds, for pressing on top"
      }
    ],
    "steps": [
      "In a large bowl, whisk together the flour, dark brown sugar, cinnamon, cloves, nutmeg, ginger, cardamom, white pepper, baking powder, and salt, breaking up any lumps of brown sugar with your fingers so the spices distribute evenly.",
      "Add the cold cubed butter and rub it into the dry mix with your fingertips (or pulse in a food processor) until the mixture looks like coarse, sandy crumbs with no butter pieces larger than a pea.",
      "Drizzle in the milk a tablespoon at a time, mixing just until the dough comes together into a firm, slightly stiff mass; add an extra teaspoon of milk only if it stays crumbly. Do not overwork it.",
      "Press the dough into a flat disc, wrap tightly, and chill in the refrigerator for at least 1 hour (or overnight) so the spices bloom and the dough firms up for clean cuts.",
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment. Roll the dough on a lightly floured surface to a scant 1/4 inch thick and stamp out shapes (windmills, speculaas molds, or simple rectangles), re-rolling scraps.",
      "Arrange the cookies about 1 inch apart on the sheets and, if using, gently press a few slivered almonds onto the tops of each one.",
      "Bake for 12 to 15 minutes, until the edges are set and the cookies are deeply golden and fragrant; they will still feel slightly soft in the center but will crisp as they cool.",
      "Let them rest on the sheet for 5 minutes, then transfer to a rack to cool completely until snappy. Store airtight for at least a day before serving for the best flavor and crunch."
    ],
    "totalTimeMinutes": 100,
    "prepTimeMinutes": 25,
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
      "Buy whole spices in bulk bins and grind only what you need; pre-mixing your own speculaaskruiden costs a fraction of a jarred blend and lasts months.",
      "Skip the slivered almonds (they are traditional but optional) to cut cost, or use chopped peanuts you already have for the topping.",
      "One batch makes about 30 cookies that keep crisp for two weeks in a tin, so it is a cheap make-ahead snack or gift that stretches far."
    ],
    "substitutions": [
      {
        "forIngredientId": "cardamom",
        "swap": "An extra 1/4 tsp cinnamon plus a pinch of allspice if you have no cardamom",
        "savings": "Avoids buying a pricey single-use spice"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (cold) for a dairy-free, vegan version; also swap the milk for soy or oat milk",
        "savings": "Comparable cost, makes it vegan"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus 1 tbsp molasses to mimic the caramel depth of dark brown sugar",
        "savings": "Use what is already in the pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 92,
      "protein": 1,
      "carbs": 13,
      "fat": 4,
      "fiber": 0.5
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Dutch",
    "tags": [
      "baking",
      "cookies",
      "holiday",
      "spiced",
      "dutch"
    ]
  },
  {
    "id": "bake2-rugelach",
    "name": "Classic Cream Cheese Rugelach",
    "description": "Tender, flaky little crescent cookies built on the classic Ashkenazi-Jewish cream cheese dough, rolled around a buttery cinnamon-sugar, walnut, and raisin filling with a smear of apricot jam. The cream cheese makes the dough rich and shatteringly short, while a slow overnight chill keeps the rolls crisp and the filling from leaking. Brushed with egg and dusted with cinnamon sugar, they bake to a deep golden brown.",
    "mealType": "snack",
    "servings": 32,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, cold and cubed"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 16,
        "note": "8 oz cream cheese, cold and cubed"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 8,
        "note": "1/2 cup apricot jam, for spreading"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed light brown sugar, for filling"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon, for filling"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "note": "1 cup walnuts, finely chopped"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.75,
        "note": "3/4 cup raisins, chopped"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, beaten, for egg wash"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 2,
        "note": "2 tbsp granulated sugar, for topping"
      }
    ],
    "steps": [
      "Make the dough: In a food processor, pulse the flour and salt to combine. Add the cold cubed butter and cream cheese and pulse in short bursts just until the dough comes together in moist clumps, about 15-20 pulses. Do not overwork it; you want visible flecks of butter. Turn out, divide into 4 equal pieces, flatten each into a disk, wrap in plastic, and refrigerate at least 2 hours or overnight.",
      "Make the filling: Stir together the brown sugar and cinnamon. In a separate bowl, combine the finely chopped walnuts and chopped raisins. Have the apricot jam ready, stirred smooth.",
      "Roll out: Working with one disk at a time (keep the rest chilled), roll on a lightly floured surface into a 9-inch circle about 1/8 inch thick. Spread a thin layer of apricot jam over the entire circle, sprinkle evenly with a quarter of the cinnamon-brown-sugar, then a quarter of the walnut-raisin mixture. Press the filling gently with your hand so it adheres.",
      "Shape: Using a pizza wheel or sharp knife, cut the circle into 8 equal wedges, like a pizza. Starting at the wide outer edge, roll each wedge up tightly toward the point to form a small crescent. Place point-side down on a parchment-lined baking sheet, curving the ends slightly inward.",
      "Chill again: Repeat with the remaining 3 disks. Refrigerate the shaped rugelach on their sheets for at least 30 minutes (or freeze 15) so they hold their shape and stay flaky in the oven. Meanwhile, position a rack in the center and preheat the oven to 350F.",
      "Top: Brush each chilled cookie with beaten egg. Stir together the 2 tbsp granulated sugar with a pinch of the leftover cinnamon sugar and sprinkle over the tops.",
      "Bake: Bake at 350F for 22-26 minutes, rotating the sheet halfway, until the rugelach are deep golden brown and any leaked filling has caramelized. Some leakage is normal.",
      "Cool: Let cool on the sheet for 5 minutes, then transfer to a wire rack (lift them off any hardened caramel while still warm so they don't stick). Cool completely before storing in an airtight container."
    ],
    "totalTimeMinutes": 200,
    "prepTimeMinutes": 40,
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
      "Buy walnuts and raisins from the bulk bin and only weigh out what you need instead of paying for full bags.",
      "Store-brand cream cheese and apricot jam work just as well as name brands here and cost noticeably less.",
      "The unbaked shaped crescents freeze beautifully for up to 2 months. Make a full batch, bake half, and freeze the rest so one round of shaping covers two occasions."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "Use any smooth jam you have, like raspberry or marmalade, or skip the jam and spread a thin layer of Nutella for a chocolate version.",
        "savings": "Use up an open jar instead of buying new"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Pecans work just as well and are interchangeable cup-for-cup; toast them first for deeper flavor.",
        "savings": "Often cheaper in bulk than walnuts"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Dried cranberries give a tart contrast, or omit and double the nuts if you prefer a non-fruit filling.",
        "savings": "Skip if you already have dried fruit on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 2,
      "carbs": 13,
      "fat": 9,
      "fiber": 0.6
    },
    "emoji": "🥐",
    "accentColor": "bg-amber-100",
    "cuisine": "Jewish",
    "tags": [
      "baking",
      "cookies",
      "jewish",
      "holiday",
      "dessert",
      "make-ahead",
      "hanukkah"
    ]
  },
  {
    "id": "bake2-hamantaschen",
    "name": "Classic Hamantaschen",
    "description": "Tender, lightly sweet triangular Purim cookies with a buttery citrus-scented dough folded around fruit jam and poppy-style filling. The dough is rolled thin, cut into rounds, dabbed with filling, and pinched into the signature three-cornered shape before baking until just golden at the edges.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour, plus more for rolling"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs (plus 1 more for egg wash)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "zest of 1 lemon (about 2 tsp)"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 0.125,
        "note": "2 tbsp fresh orange juice"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 8,
        "note": "1/2 cup apricot jam, for filling"
      },
      {
        "ingredientId": "poppy-seeds",
        "quantity": 6,
        "optional": true,
        "note": "2 tbsp poppy seeds, simmered with a little honey, for mohn-style filling"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp honey, to sweeten the poppy seed filling"
      }
    ],
    "steps": [
      "Make the dough: In a bowl, whisk together the flour, baking powder, and salt. In a separate large bowl, cream the softened butter and sugar with a hand mixer until pale and fluffy, about 2 to 3 minutes. Beat in the 2 eggs one at a time, then the vanilla, lemon zest, and orange juice until smooth.",
      "Add the dry ingredients to the wet in two additions, mixing just until a soft dough forms and pulls together. Do not overwork it. Divide the dough in half, flatten each piece into a disk, wrap, and refrigerate at least 1 hour (or overnight) until firm. Chilled dough is essential for clean shaping.",
      "Make the optional poppy filling: simmer the poppy seeds with the honey and a splash of water over low heat for 5 minutes until thickened to a spreadable paste, then cool. Keep the apricot jam ready as the second filling. Both should be thick, not runny, so they hold in the oven.",
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment. On a lightly floured surface, roll one disk of dough to about 1/8 inch thick. Using a 3-inch round cutter or glass, cut out circles, rerolling scraps once.",
      "Place a scant teaspoon of filling in the center of each round. Do not overfill, or the cookies will burst open while baking.",
      "Shape the triangles: lift three sides of the circle up and over the filling to form a triangle, pinching the three corners firmly to seal while leaving a small window of filling visible in the center. Pinch hard so the seams hold during baking.",
      "Arrange the cookies about 1 inch apart on the prepared sheets. Beat the remaining egg and lightly brush the exposed dough for a glossy, golden finish.",
      "Bake for 14 to 18 minutes, until the cookies are set and just golden at the edges and bottoms. Rotate the pans halfway through for even color.",
      "Let the hamantaschen cool on the sheet for 5 minutes to firm up, then transfer to a rack to cool completely. Store in an airtight container for up to 5 days."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 16,
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
      "Skip the special poppy filling and just use whatever jam you already have in the fridge - apricot, raspberry, or even a thick fruit preserve all work and cost nothing extra.",
      "No round cutter needed: the rim of a drinking glass dipped in flour cuts perfect 3-inch circles.",
      "Buy butter when it goes on sale and freeze it; one 3/4 cup batch stretches to two dozen cookies, making these very cheap per piece."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "Any thick fruit jam or preserve (raspberry, strawberry, plum) or even Nutella for a chocolate version",
        "savings": "Use what you already own to save buying a dedicated jar"
      },
      {
        "forIngredientId": "butter",
        "swap": "Equal amount of vegetable oil or plant butter for a pareve (non-dairy) dough served with meat meals",
        "savings": "Oil is often cheaper than butter"
      },
      {
        "forIngredientId": "orange-juice",
        "swap": "2 tbsp milk or water plus a little extra lemon zest",
        "savings": "Avoids buying oranges if you only need the juice"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 2,
      "carbs": 22,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🔺",
    "accentColor": "bg-amber-100",
    "cuisine": "Jewish",
    "tags": [
      "baking",
      "cookies",
      "purim",
      "jewish",
      "dessert",
      "holiday",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-black-and-white-cookies",
    "name": "Classic New York Black and White Cookies",
    "description": "The real deal: big, soft, cake-like vanilla cookies brightened with a whisper of lemon, each one iced half in glossy vanilla fondant and half in rich chocolate. Tender like a little cake, not crisp — exactly the way the corner bakery and deli counters in New York have made them for generations.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.5,
        "note": "1/2 cup buttermilk"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 48,
        "note": "3 cups powdered sugar (for both icings)"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 2,
        "note": "2 tbsp light corn syrup (for glossy fondant icing)"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 3,
        "note": "3 tbsp unsweetened cocoa powder (for the chocolate half)"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 3,
        "note": "3 tbsp semi-sweet chocolate chips, melted, for depth in the chocolate icing"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment paper. In a bowl, whisk together the flour, baking powder, and salt; set aside.",
      "In a large bowl, beat the softened butter and granulated sugar with a mixer until pale and fluffy, about 2-3 minutes. Beat in the eggs one at a time, then the vanilla and lemon zest, scraping the bowl as needed.",
      "Add the flour mixture in three additions, alternating with the buttermilk, beginning and ending with flour. Mix just until a soft, thick batter forms — do not overmix. The batter should be scoopable, not pourable.",
      "Scoop 1/4-cup mounds onto the sheets, spacing them at least 3 inches apart (they spread). Smooth the tops slightly with the back of a spoon. Bake 14-17 minutes, until the tops spring back and the bottom edges are just barely golden — they should stay pale on top. Cool completely on a rack. Ice them flat-side up; the flat bottom is the surface you decorate.",
      "Make the vanilla icing: whisk 1 1/2 cups powdered sugar with 1 tbsp corn syrup, 1/4 tsp of the vanilla (taken from your bottle), and 2-3 tsp hot water until thick but spreadable and glossy. It should fall in a slow ribbon. Add water a few drops at a time if too stiff.",
      "Working one cookie at a time, spread the vanilla icing over exactly half of each cookie's flat side, using a small offset spatula and keeping a clean straight line down the center. Let set while you make the chocolate side.",
      "Make the chocolate icing: into the remaining 1 1/2 cups powdered sugar, whisk the cocoa powder, the remaining 1 tbsp corn syrup, the melted chocolate chips, and 3-4 tsp hot water until smooth and glossy. Spread over the bare half of each cookie, meeting the vanilla line cleanly.",
      "Let the cookies sit at room temperature until the icing sets firm to the touch, about 1 hour. Store in a single layer; they're best the day they're made but keep, covered, for up to 2 days."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 16,
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
      "No buttermilk? Stir 1/2 tbsp lemon juice or white vinegar into 1/2 cup regular milk and let it sit 5 minutes — it curdles into a perfect substitute for pennies.",
      "Skip the corn syrup if you don't have it; the icing just won't be quite as shiny. A pinch more powdered sugar and water still tastes the same.",
      "Buy cocoa powder in bulk bins or a store-brand can — you only need 3 tbsp here, and it stays good for months for hot chocolate and brownies too."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1/2 cup milk + 1/2 tbsp lemon juice, soured 5 minutes",
        "savings": "Avoids buying a whole carton of buttermilk"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "An extra 1 tbsp cocoa powder plus a touch more water in the chocolate icing",
        "savings": "Saves buying chocolate if you only have cocoa"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "1/4 tsp extra vanilla extract",
        "savings": "Skip buying a fresh lemon"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 4,
      "carbs": 64,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "cookies",
      "new-york",
      "classic",
      "iced",
      "vanilla",
      "chocolate"
    ]
  },
  {
    "id": "bake2-amaretti",
    "name": "Classic Italian Amaretti",
    "description": "Traditional Italian almond cookies — chewy and tender inside with a crackly, powdered-sugar-dusted crust. Made the authentic way with just almond flour, sugar, egg whites, and almond extract, these naturally gluten-free morsels deliver intense marzipan-like flavor. They keep beautifully and are wonderful alongside espresso or a glass of Vin Santo.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "almond-flour",
        "quantity": 2,
        "note": "2 cups (200g) blanched almond flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup (200g) granulated sugar"
      },
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 0.5,
        "note": "2 large egg whites (about 1/2 cup), room temperature"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 1,
        "note": "1 tsp almond extract"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 0.5,
        "optional": true,
        "note": "zest of 1/2 lemon (about 1/2 tsp), optional"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup (60g) powdered sugar, for rolling"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 325°F (160°C). Line two baking sheets with parchment paper.",
      "In a medium bowl, whisk together the almond flour, granulated sugar, and salt, breaking up any lumps so the mixture is even.",
      "In a separate clean bowl, whisk the egg whites by hand just until frothy and loose — you want them aerated but NOT whipped to peaks. Whisk in the almond extract, vanilla, and lemon zest if using.",
      "Pour the egg white mixture into the dry ingredients and stir with a spatula until a stiff, sticky, marzipan-like dough comes together. If it feels too dry to hold together, add a teaspoon of egg white at a time; if too wet to roll, rest it 10 minutes to let the almond flour absorb moisture.",
      "Place the powdered sugar in a shallow bowl. Scoop level tablespoons of dough and roll each into a smooth 1-inch ball with your palms, then roll generously in powdered sugar to coat completely. The thick sugar coating is what creates the signature crackled top.",
      "Arrange the coated balls about 1.5 inches apart on the prepared sheets. For the classic cracked look, pinch each ball gently at the top or leave round — do not flatten. Let them sit uncovered at room temperature for 15 to 20 minutes so a light skin forms.",
      "Bake one sheet at a time for 18 to 22 minutes, until the tops are crackled and pale golden but the centers are still soft — they firm up as they cool. Avoid over-baking or they lose their chewy interior.",
      "Cool on the baking sheet for 5 minutes, then transfer to a rack to cool completely. Store airtight at room temperature for up to 1 week; the texture actually improves after a day."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "gluten-free",
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy almond flour in bulk from the bulk bins or a warehouse store — it's the priciest ingredient and costs a fraction of the small bagged version.",
      "Save the egg yolks from this recipe for carbonara, custard, or scrambled eggs so nothing goes to waste.",
      "Skip the lemon zest if you don't have a fresh lemon — the cookies are completely authentic with just almond extract."
    ],
    "substitutions": [
      {
        "forIngredientId": "almond-extract",
        "swap": "Increase to 1.5 tsp and add a few drops of vanilla if you want a milder, less bitter-almond flavor",
        "savings": "no cost change"
      },
      {
        "forIngredientId": "liquid-egg-whites",
        "swap": "Use 2 fresh egg whites whisked from whole eggs",
        "savings": "saves ~$1 vs cartoned whites"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "Orange zest, or omit entirely",
        "savings": "saves ~$0.30"
      }
    ],
    "estimatedNutrition": {
      "calories": 82,
      "protein": 2,
      "carbs": 11,
      "fat": 4,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "italian",
      "gluten-free",
      "cookies",
      "almond",
      "dessert",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-ladyfingers",
    "name": "Classic Italian Ladyfingers (Savoiardi)",
    "description": "Light, crisp-edged, tender-centered sponge biscuits piped into elegant fingers and dusted with sugar for a delicate crackle. Made the authentic way: yolks and whites whipped separately, then folded with twice-sifted flour for maximum lift and the classic pale-gold, slightly domed look. Perfect on their own with coffee or as the backbone of tiramisu and charlottes.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, separated, at room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup (100g) granulated sugar, divided"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup (130g) all-purpose flour, sifted twice"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "note": "1/4 tsp cream of tartar (helps stabilize the whites)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar, for dusting before baking"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Line two baking sheets with parchment. If you want uniform fingers, draw 3.5-inch (9 cm) guide lines spaced an inch apart on the underside of the parchment, then flip it ink-side down.",
      "Separate the eggs while cold, then let them come to room temperature. In a clean, grease-free bowl, beat the egg whites with the cream of tartar and salt on medium speed until foamy. Increase to medium-high and gradually rain in half the granulated sugar (4 tbsp). Whip to firm, glossy peaks that hold their shape but are not dry or clumpy.",
      "In a separate bowl, beat the egg yolks with the remaining granulated sugar (4 tbsp) and the vanilla on high speed for 3 to 4 minutes, until the mixture is pale, thick, and falls in a slowly dissolving ribbon when you lift the beaters.",
      "Scoop about a third of the whipped whites into the yolks and stir to lighten. Then gently fold in the remaining whites in two additions with a large spatula, cutting down through the center and sweeping up the sides, until just combined and still airy.",
      "Sift the twice-sifted flour over the batter in two or three additions, folding delicately each time. Stop folding the moment no dry streaks remain. The batter should be thick enough to pipe and hold a soft ribbon. Do not overmix or it will deflate and bake flat.",
      "Transfer the batter to a piping bag fitted with a 1/2-inch (12 mm) plain round tip. Pipe 3.5-inch fingers onto the parchment, spacing them an inch apart. Sift a generous, even layer of powdered sugar over the tops, wait 2 minutes, then sift a second light layer, this double dusting creates the signature pearled, crackly crust.",
      "Bake one sheet at a time for 12 to 15 minutes, rotating halfway, until the fingers are pale golden, set, and spring back lightly when touched. The bottoms should be firm and lightly colored.",
      "Slide the parchment onto a wire rack and let the ladyfingers cool completely before peeling them off. They firm up as they cool. Store airtight at room temperature for up to a week, or use immediately in tiramisu."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 30,
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
      "No piping bag? Snip a 1/2-inch corner off a sturdy zip-top freezer bag, it pipes fingers just as well for free.",
      "Cream of tartar is optional, a tiny splash of lemon juice (about 1/4 tsp) stabilizes the whites just as effectively and you may already have a lemon.",
      "Eggs are the whole show here, so buy the cheapest large eggs you can find, fancy ones make no difference once whipped."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "1/4 tsp lemon juice or white vinegar to stabilize the egg whites",
        "savings": "Skip buying a single-use jar of cream of tartar"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1/4 tsp lemon zest for a brighter, traditional Savoiardi aroma",
        "savings": "Uses part of a lemon you may already have instead of pricey extract"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "granulated sugar pulsed fine in a blender, or just dust with extra granulated sugar",
        "savings": "Avoids buying powdered sugar if you only have granulated"
      }
    ],
    "estimatedNutrition": {
      "calories": 48,
      "protein": 1.4,
      "carbs": 8.5,
      "fat": 1,
      "fiber": 0.1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "dessert",
      "italian",
      "classic",
      "sponge",
      "tiramisu",
      "biscuits",
      "egg-based",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-pfeffern-sse",
    "name": "Pfeffernüsse (German Spice Cookies)",
    "description": "Classic German Christmas cookies — small, domed, and chewy-firm, built on a honey-and-molasses dough warmed with cinnamon, cloves, cardamom, nutmeg, and the signature pinch of black pepper that gives them their name (\"pepper nuts\"). The dough rests overnight so the spices bloom, then each cookie is dipped in a thin powdered-sugar glaze that dries to a crackly white shell. Faithful to the traditional Lebkuchen-family recipe a German baker would make for the holidays.",
    "mealType": "snack",
    "servings": 36,
    "ingredients": [
      {
        "ingredientId": "honey",
        "quantity": 8,
        "note": "1/2 cup honey"
      },
      {
        "ingredientId": "molasses",
        "quantity": 4,
        "note": "1/4 cup molasses"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed dark brown sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup (4 tbsp) unsalted butter"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.75,
        "note": "2 3/4 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.75,
        "note": "3/4 tsp ground cloves"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 0.5,
        "note": "1/2 tsp ground cardamom"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.5,
        "note": "1/2 tsp ground nutmeg"
      },
      {
        "ingredientId": "allspice",
        "quantity": 0.5,
        "note": "1/2 tsp ground allspice"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground ginger"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.5,
        "note": "1/2 tsp freshly ground black pepper"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 24,
        "note": "1 1/2 cups powdered sugar (for the glaze)"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.125,
        "note": "2 tbsp milk (for the glaze)"
      }
    ],
    "steps": [
      "Make the syrup base: In a small saucepan over medium-low heat, combine the honey, molasses, brown sugar, and butter. Stir until the butter melts and the sugar dissolves into a smooth syrup, about 3-4 minutes. Do not boil. Remove from heat and let cool until just warm to the touch, about 10 minutes.",
      "Whisk the dry ingredients: In a large bowl, whisk together the flour, baking soda, cinnamon, cloves, cardamom, nutmeg, allspice, ginger, black pepper, and salt until evenly combined.",
      "Combine: Whisk the egg into the cooled (not hot) syrup so it doesn't scramble. Pour the wet mixture into the dry ingredients and stir, then knead briefly by hand, until a stiff, slightly sticky dough forms. It will feel firm like a gingerbread dough.",
      "Rest the dough: Wrap the dough tightly in plastic and refrigerate at least 4 hours, ideally overnight. This rest lets the spices bloom and firms the dough for rolling — it is traditional and worth it.",
      "Shape: Preheat the oven to 350F (175C) and line baking sheets with parchment. Pinch off pieces and roll into smooth balls about 1 inch (the size of a large marble). Space them about 1.5 inches apart — they spread little and dome as they bake.",
      "Bake: Bake one sheet at a time for 12-14 minutes, until the cookies are puffed, set, and lightly cracked on top. They should still feel slightly soft; they firm up as they cool. Let them cool on the sheet for 5 minutes, then transfer to a rack to cool completely.",
      "Make the glaze: Whisk the powdered sugar with the milk until smooth and pourable — it should coat the back of a spoon and slowly drip off. Add milk a few drops at a time if too thick.",
      "Glaze and dry: Dip the top of each fully cooled cookie into the glaze (or dunk whole and lift out with a fork), letting the excess drip off. Set on a rack over parchment and let the glaze dry to a firm, opaque white shell, about 1 hour. Store in an airtight tin — they improve after a day or two as they soften and the flavors meld."
    ],
    "totalTimeMinutes": 320,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 14,
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
      "Buy whole spices in bulk-bin scoops or at a dollar/ethnic grocery — cardamom and cloves cost a fraction of supermarket jars and you only need a little.",
      "Molasses and honey are cheaper by the large jug and last forever; one batch barely dents them, so the per-cookie cost is tiny.",
      "Skip buying buttermilk or fancy extracts — this recipe needs none. Plain milk for the glaze is all the dairy required beyond the butter."
    ],
    "substitutions": [
      {
        "forIngredientId": "molasses",
        "swap": "Use date-syrup or extra honey if you have no molasses — slightly milder color and flavor, but still works.",
        "savings": "Avoids buying a whole jar of molasses for 1/4 cup."
      },
      {
        "forIngredientId": "cardamom",
        "swap": "Replace cardamom and allspice with an equal total amount of pumpkin-pie or gingerbread spice blend.",
        "savings": "One blend jar covers several spices at once."
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Skip the glaze and roll the warm cookies in granulated sugar instead, or dust with powdered sugar.",
        "savings": "Uses less sugar and no extra mixing."
      }
    ],
    "estimatedNutrition": {
      "calories": 92,
      "protein": 1,
      "carbs": 19,
      "fat": 1.5,
      "fiber": 0.4
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "German",
    "tags": [
      "baking",
      "christmas",
      "german",
      "spice-cookies",
      "holiday",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-empire-biscuits",
    "name": "Empire Biscuits",
    "description": "The classic Scottish teatime treat: two rounds of crisp, buttery shortbread-style biscuit sandwiched with raspberry jam, blanketed in smooth white water icing, and crowned with a single glacé cherry. Tender, sweet, and nostalgic — the kind that vanishes off the plate at any church hall or gran's kitchen table.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, plus extra for dusting"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks / 225g) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup caster (superfine) sugar"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "jam",
        "quantity": 6,
        "note": "about 6 tbsp seedless raspberry jam, for sandwiching"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 24,
        "note": "1 1/2 cups (about 175g) powdered/icing sugar, for the water icing"
      },
      {
        "ingredientId": "water",
        "quantity": 0.1875,
        "note": "about 3 tbsp water, added a little at a time to the icing"
      },
      {
        "ingredientId": "cherry-fresh",
        "quantity": 0.5,
        "optional": true,
        "note": "10 glacé cherries, halved (one half per biscuit) — or use jelly tots"
      }
    ],
    "steps": [
      "Beat the softened butter and caster sugar together until pale, light, and fluffy, 3-4 minutes. Beat in the vanilla. Add the flour and salt and mix on low just until the dough comes together into a soft, smooth ball — do not overwork it. Flatten into a disc, wrap, and chill for 30 minutes to firm up.",
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment. On a lightly floured surface, roll the chilled dough to a scant 1/4 inch (4-5mm) thick.",
      "Using a 2.5 inch (6cm) round cutter, stamp out rounds and place them on the lined sheets. Re-roll the scraps once and cut more — you want an even number of rounds (about 20) so every biscuit gets a top and bottom.",
      "Bake for 12-14 minutes, until the biscuits are set and just barely golden at the edges (they should stay pale, not browned). Let them firm up on the tray for 5 minutes, then transfer to a wire rack to cool completely — they will crisp as they cool.",
      "Once fully cool, turn half the biscuits flat-side up and spread each with a generous teaspoon of raspberry jam, leaving a small clear border. Top each with a second biscuit, flat-side down, and press gently to sandwich. Keep the smoothest biscuits for the tops.",
      "Make the water icing: sift the icing sugar into a bowl and stir in the water a teaspoon at a time until you have a thick but spreadable, glossy icing that slowly drips off the spoon. It should coat the back of a spoon without running off too fast.",
      "Spoon icing onto the top of each sandwiched biscuit and spread it almost to the edge with the back of the spoon, letting it settle into a smooth surface. Work in small batches so the icing doesn't set before you decorate.",
      "While the icing is still wet, press a glacé cherry half (or a jelly tot) into the center of each. Leave the biscuits undisturbed for at least 1 hour until the icing sets firm to the touch before serving or stacking."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 14,
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
      "Glacé cherries are pricey for one little garnish — a single bag of jelly tots or even a dot of leftover jam in the center does the same job for pennies.",
      "Skip a special cutter: the rim of a sturdy drinking glass, floured first, stamps out perfect 2.5-inch rounds.",
      "Make a double batch and freeze the un-iced baked biscuits — they keep for weeks, so you only pay for jam and icing sugar when you actually want to finish a few."
    ],
    "substitutions": [
      {
        "forIngredientId": "jam",
        "swap": "Use apricot jam or marmalade instead of raspberry for a more traditional 'lemon' or apricot Empire biscuit variant.",
        "savings": "Whatever jar you already have open — no extra spend"
      },
      {
        "forIngredientId": "cherry-fresh",
        "swap": "Top with a jelly tot, a small piece of Turkish delight, or just a dot of jam instead of a glacé cherry.",
        "savings": "About $2-3 vs a tub of glacé cherries"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Swap vanilla for 1/2 tsp almond extract for a classic shortbread-meets-bakewell flavor.",
        "savings": "Negligible — a pantry swap"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 3,
      "carbs": 52,
      "fat": 16,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-rose-100",
    "cuisine": "Scottish",
    "tags": [
      "baking",
      "scottish",
      "cookies",
      "teatime",
      "shortbread",
      "iced",
      "dessert",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-digestive-biscuits",
    "name": "Classic British Digestive Biscuits",
    "description": "The genuine McVitie's-style digestive: a sturdy, lightly sweet semi-wholemeal biscuit with a nutty, malty crumb and a clean snap. Coarse wholemeal flour and fine oatmeal give it that signature sandy texture, while a little brown sugar and just enough butter keep it tender but firm enough to dunk in tea without collapsing. Pricked, baked until deep gold, and crisp all the way through.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups wholemeal (whole-wheat) flour — for an authentic semi-wholemeal biscuit; sub half with white flour for a lighter crumb"
      },
      {
        "ingredientId": "oats",
        "quantity": 0.75,
        "note": "3/4 cup rolled oats, ground fine in a blender to a coarse oatmeal (medium oatmeal is traditional)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "note": "1/4 cup packed light brown sugar"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cut into cubes"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.1875,
        "note": "3 tablespoons whole milk (about 3/16 cup), plus a little more if needed"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C) and line two baking sheets with parchment. Blitz the rolled oats in a blender or food processor until they reach a coarse, sandy oatmeal — a few small flecks left is exactly right, not a fine powder.",
      "In a large bowl whisk together the wholemeal flour, ground oats, brown sugar, baking powder, baking soda, and salt, breaking up any lumps of sugar with your fingers.",
      "Add the cold cubed butter and rub it into the dry mix with your fingertips (or pulse in the processor) until the mixture looks like damp, coarse breadcrumbs with no butter pieces larger than a pea.",
      "Drizzle in the milk a tablespoon at a time, stirring, then bring the dough together with your hands. It should just clump into a firm, slightly stiff dough — add a teaspoon more milk only if it won't hold. Do not overwork it. Press into a disc, wrap, and chill 20 minutes.",
      "Roll the dough out on a lightly floured surface to a scant 1/4 inch (5-6 mm) thick. Cut rounds with a 2.5-inch (6-7 cm) cutter, re-rolling scraps once. Place on the trays and prick each biscuit several times all over with a fork — this stops them doming and gives the classic look.",
      "Bake for 15-18 minutes, rotating the trays halfway, until the biscuits are an even deep golden brown at the edges and firm in the center. They will still feel slightly soft when hot but crisp as they cool.",
      "Cool on the tray for 5 minutes to set, then transfer to a wire rack to cool completely — they reach their final hard, snappy texture only once fully cold. Store in an airtight tin for up to 2 weeks."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 17,
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
      "Buy wholemeal flour and rolled oats from the bulk bin — you only need small amounts and they cost a fraction of boxed brands.",
      "No round cutter? Use the rim of a sturdy glass dipped in flour; a clean tin can also work.",
      "These keep for two weeks in a tin, so make a full batch — the cost per biscuit drops well below any store-bought packet."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "Use half white flour and half wholemeal for a lighter, paler biscuit closer to the modern supermarket version",
        "savings": "white flour is cheaper than wholemeal"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any plant milk (oat or soy) works fine in the same amount to bind the dough",
        "savings": "use whatever milk you already have"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Plain white sugar works, though you lose a little of the malty caramel note",
        "savings": "white sugar is usually the cheapest sweetener on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 85,
      "protein": 1.5,
      "carbs": 11,
      "fat": 4,
      "fiber": 1.2
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "baking",
      "british",
      "biscuit",
      "tea-time",
      "wholemeal",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-tuiles",
    "name": "Classic French Tuiles aux Amandes (Almond Tuiles)",
    "description": "Wafer-thin, lacy almond cookies that curve like roof tiles (\"tuiles\") as they cool over a rolling pin. Built on the classic French method — egg whites, sugar, a little flour, melted butter, and sliced almonds — they bake to a fragile, golden, caramelized crisp. The signature shape comes from draping the still-hot cookies over a curved surface the second they leave the oven.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 0.5,
        "note": "2 large egg whites (about 1/2 cup), at room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.33,
        "note": "1/3 cup all-purpose flour"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup (4 tbsp) unsalted butter, melted and slightly cooled"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.06,
        "note": "1 pinch fine salt"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 1,
        "note": "1 cup sliced (or slivered) almonds"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350°F (175°C). Line two baking sheets with parchment paper or silicone mats. Have a rolling pin, wine bottle, or narrow glass ready nearby — you will drape the hot cookies over it the moment they come out.",
      "In a medium bowl, whisk the room-temperature egg whites with the sugar and a pinch of salt just until loose, frothy, and combined — do NOT whip to a foam or meringue. You want the whites broken up and slightly bubbly, not stiff.",
      "Sift the flour over the whites and whisk gently until smooth with no lumps. Whisk in the vanilla, then drizzle in the melted, slightly cooled butter and stir until you have a thin, glossy batter. Fold in the sliced almonds with a spatula until evenly coated.",
      "Rest the batter at room temperature for 30 minutes. This hydrates the flour and lets the almonds absorb some liquid, which keeps the tuiles from spreading into ragged lace.",
      "Drop scant teaspoons of batter onto the lined sheets, spacing them about 3 inches apart (only 5-6 per sheet — they spread). Using the back of a fork dipped in cold water, gently spread each mound into a very thin 2.5-inch round, nudging the almonds into a single even layer. Thin is essential: any thick spots stay chewy instead of crisp.",
      "Bake one sheet at a time for 8-11 minutes, until the edges are deeply golden brown and the centers are pale gold. Even baking and color are what make them snap; underbaked tuiles will be soft.",
      "Working fast, lift each hot tuile with a thin offset spatula and immediately drape it over the rolling pin or bottle so it curves as it sets — about 30-60 seconds each. If they firm up on the sheet before you get to them, return the sheet to the oven for 30 seconds to soften, then try again.",
      "Cool the shaped tuiles completely on a rack; they crisp as they cool. Store airtight at room temperature with a layer of parchment between them. They are best the day they are made and turn soft in humidity, so re-crisp in a 300°F oven for 2-3 minutes if needed."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
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
      "Buy almonds whole and slice them thin yourself with a sharp knife — far cheaper per ounce than pre-sliced, and works just as well.",
      "No silicone mat needed: parchment paper works perfectly and is a fraction of the price. Reuse each sheet across both batches.",
      "Use a clean glass bottle or even a sturdy can instead of a special tuile mold to get the curved shape for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "slivered-almonds",
        "swap": "Sliced almonds, or finely chopped pecans/walnuts for a different nut tuile",
        "savings": "Pecans or walnuts are often on sale and give the same lacy crunch"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1/4 tsp almond extract for a more intense, traditional almond flavor",
        "savings": "A tiny bottle lasts dozens of batches"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter, melted, for a dairy-free version",
        "savings": "Store-brand plant butter is cheaper than name-brand"
      }
    ],
    "estimatedNutrition": {
      "calories": 52,
      "protein": 1,
      "carbs": 5,
      "fat": 3,
      "fiber": 0.5
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "cookies",
      "dessert",
      "almond",
      "thin-and-crisp",
      "classic",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-nankhatai",
    "name": "Classic Nankhatai (Indian Cardamom Shortbread Cookies)",
    "description": "Melt-in-your-mouth eggless Indian shortbread cookies made with ghee, all-purpose flour and a little semolina for the signature grainy-crumbly bite. Perfumed with green cardamom and nutmeg, crowned with pistachios, and baked until pale gold with the classic cracked tops. The real Diwali-tin tea-time treat.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour (maida)"
      },
      {
        "ingredientId": "semolina",
        "quantity": 0.25,
        "note": "1/4 cup fine semolina (sooji), for the signature grainy crumb"
      },
      {
        "ingredientId": "ghee",
        "quantity": 12,
        "note": "3/4 cup ghee, soft and at room temperature (not melted)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered sugar"
      },
      {
        "ingredientId": "cardamom-green",
        "quantity": 1,
        "note": "1 tsp freshly ground green cardamom"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp freshly grated nutmeg"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp baking soda"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.25,
        "note": "1/4 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125,
        "note": "pinch of salt (about 1/8 tsp)"
      },
      {
        "ingredientId": "pistachios",
        "quantity": 1,
        "note": "1 oz pistachios, slivered, for topping"
      }
    ],
    "steps": [
      "Whisk together the all-purpose flour, semolina, baking soda, baking powder and salt in a bowl, then set aside for 15-20 minutes so the semolina can begin to soften slightly. In a separate large bowl, sift the powdered sugar over the soft (not melted) ghee.",
      "Beat the ghee and powdered sugar together with a spoon or hand mixer for 4-5 minutes until pale, light and creamy. This aeration is what gives Nankhatai its tender, melt-in-the-mouth texture, so don't rush it. Beat in the ground cardamom and grated nutmeg.",
      "Add the dry ingredients to the creamed ghee in two additions, mixing gently with your hand until a soft, smooth, pliable dough forms. Do not knead or overwork it; stop as soon as it comes together. If it feels too crumbly to shape, work in 1-2 teaspoons more soft ghee.",
      "Cover the dough and rest it 15 minutes at room temperature. Meanwhile, position a rack in the center of the oven and preheat to 325F (165C). Line two baking sheets with parchment.",
      "Divide the dough into 16 equal pieces (about 1 to 1 1/4 inches each). Roll each into a smooth ball between your palms, then place on the trays spaced 2 inches apart and flatten very gently into thick discs. Press a few slivered pistachios into the top of each, then press a light cross or single line into the surface with a knife to encourage the classic cracked top.",
      "Bake for 16-20 minutes, until the cookies are set, the bottoms are lightly golden, and the tops have cracked but are still very pale on top. Nankhatai should stay pale, not browned, so pull them the moment the bases color.",
      "Let the cookies rest on the hot tray for 10 minutes; they will be extremely fragile while warm and firm up as they cool. Transfer carefully to a rack to cool completely. Store airtight at room temperature for up to 2 weeks."
    ],
    "totalTimeMinutes": 75,
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
      "Skip the pistachios or use a few chopped peanuts or almonds you already have on hand; the cardamom-ghee base is the real star and the topping is optional.",
      "Make your own powdered sugar by blitzing regular granulated sugar in a clean spice or coffee grinder until fine and fluffy, instead of buying a separate bag.",
      "Grind whole green cardamom pods in a mortar or grinder rather than buying pre-ground; it is cheaper, far more aromatic, and a small amount goes a long way."
    ],
    "substitutions": [
      {
        "forIngredientId": "ghee",
        "swap": "Softened unsalted butter works in a pinch, though you lose some of the nutty ghee aroma that defines Nankhatai",
        "savings": "Butter is usually cheaper than store-bought ghee"
      },
      {
        "forIngredientId": "semolina",
        "swap": "Replace the semolina with an equal amount of extra all-purpose flour for a smoother, less grainy cookie",
        "savings": "Avoids buying a separate bag of semolina"
      },
      {
        "forIngredientId": "pistachios",
        "swap": "Slivered almonds or a pinch of poppy seeds make a traditional, lower-cost topping",
        "savings": "Almonds typically cost less than pistachios per ounce"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 2,
      "carbs": 16,
      "fat": 11,
      "fiber": 0.5
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "baking",
      "eggless",
      "vegetarian",
      "cookies",
      "diwali",
      "tea-time"
    ]
  },
  {
    "id": "bake2-kolaczki",
    "name": "Kolaczki (Polish Cream Cheese Cookies)",
    "description": "Tender, flaky Polish Christmas cookies made from a rich cream cheese and butter dough, cut into squares, filled with a spoonful of thick fruit jam, folded over the corners, and baked until pale gold. Finished with a snowfall of powdered sugar. The dough has no sugar in it at all — the contrast between the slightly tangy, melt-in-your-mouth pastry and the sweet jam is what makes them authentic.",
    "mealType": "snack",
    "servings": 30,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 16,
        "note": "8 oz cream cheese, softened"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 10.67,
        "note": "about 2/3 cup thick apricot jam (or lekvar / prune butter / raspberry), for filling"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar, for dusting"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "optional": true,
        "note": "1 egg, beaten, for egg wash (optional, helps corners seal and brown)"
      }
    ],
    "steps": [
      "Beat the softened butter and cream cheese together with a hand mixer until completely smooth and fluffy, 2-3 minutes. Beat in the vanilla and salt. Add the flour about half a cup at a time on low speed, mixing just until a soft, slightly sticky dough comes together — do not overwork it.",
      "Divide the dough in half, pat each piece into a flat disk, wrap in plastic, and chill at least 1 hour (or overnight). The dough is too soft to roll until it is properly cold.",
      "When ready to bake, preheat the oven to 375F and line two baking sheets with parchment. Working with one disk at a time and keeping the other chilled, roll the dough on a well-floured surface to about 1/8 inch thick.",
      "Cut the dough into 2 to 2.5 inch squares with a knife or pizza cutter. Place a scant 1/2 teaspoon of thick jam in the center of each square — do not overfill or the cookies will leak.",
      "Fold two opposite corners of each square up over the filling so they overlap slightly in the center, and press firmly to seal. For extra hold, dab the corners with a little beaten egg or water before pressing. Brush the tops lightly with egg wash if using.",
      "Transfer the filled cookies to the lined sheets, spacing them about 1 inch apart. Chill the trays for 10 minutes if the dough has softened — cold dough keeps the corners from popping open.",
      "Bake one sheet at a time for 12-15 minutes, until the cookies are set and just barely golden at the edges and bottom; they should stay pale on top. Watch closely after 12 minutes.",
      "Cool on the pan for 5 minutes, then transfer to a rack to cool completely. Once fully cool, dust generously with powdered sugar through a fine sieve. Store airtight; dust again with fresh powdered sugar before serving."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 30,
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
      "Store-brand cream cheese and butter work perfectly here — nobody can tell the difference once the cookies are dusted in powdered sugar, and you save a few dollars per batch.",
      "Buy one jar of thick jam on sale and use it for the whole batch; apricot, raspberry, and prune are all traditional, so grab whichever is cheapest.",
      "Make your own powdered sugar by blitzing 1/4 cup regular sugar with a pinch of cornstarch in a clean coffee/spice grinder if you don't want to buy a bag."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "raspberry jam, lingonberry jam, or thick prune/poppyseed filling — all classic kolaczki fillings",
        "savings": "use whatever jam you already own to save buying a new jar"
      },
      {
        "forIngredientId": "cream-cheese",
        "swap": "an equal weight of sour cream-style farmer's cheese or full-fat ricotta pressed dry, for a more old-country tang",
        "savings": "neutral"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter (firm stick type) for a dairy-light dough",
        "savings": "neutral"
      }
    ],
    "estimatedNutrition": {
      "calories": 92,
      "protein": 1.4,
      "carbs": 10,
      "fat": 5.3,
      "fiber": 0.3
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Polish",
    "tags": [
      "baking",
      "cookies",
      "polish",
      "christmas",
      "holiday",
      "dessert",
      "cream-cheese",
      "jam-filled",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-cowboy-cookies",
    "name": "Classic Cowboy Cookies",
    "description": "The real-deal Texas-style cowboy cookie: a big, chewy, hearty oatmeal cookie loaded with semisweet chocolate chips, toasted pecans, and shredded coconut. Crisp at the edges, soft in the middle, with deep brown-sugar-and-cinnamon flavor. This is the bake-sale-winning, lunchbox-stuffing version a confident home baker makes from memory.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed light brown sugar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "oats",
        "quantity": 2,
        "note": "2 cups old-fashioned rolled oats"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 32,
        "note": "2 cups (12 oz) semisweet chocolate chips"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup chopped pecans, toasted (about 4 oz)"
      },
      {
        "ingredientId": "coconut-flakes",
        "quantity": 1,
        "note": "1 cup sweetened shredded coconut"
      }
    ],
    "steps": [
      "Position racks in the upper and lower thirds of the oven and preheat to 350F (175C). Line two baking sheets with parchment paper. If your pecans aren't already toasted, spread them on a dry sheet and toast for 6-8 minutes until fragrant, then cool and roughly chop.",
      "In a medium bowl, whisk together the flour, baking soda, baking powder, cinnamon, and salt. Set aside.",
      "In a large bowl, beat the softened butter with both sugars on medium speed for 3-4 minutes until light and fluffy. This aeration is what gives the cookies their lift, so don't rush it.",
      "Beat in the eggs one at a time, then the vanilla, scraping down the bowl after each addition until fully combined.",
      "Add the dry ingredients and mix on low just until no streaks of flour remain. Do not overmix. By hand, fold in the oats, chocolate chips, toasted pecans, and coconut until evenly distributed; the dough will be thick and chunky.",
      "Scoop generous 2-tablespoon mounds (about 2 oz each) and space them 2 inches apart on the prepared sheets. For tidier cookies, roll into balls; for craggy bakery-style edges, leave them rough.",
      "Bake 12-14 minutes, rotating the sheets top-to-bottom and front-to-back halfway through, until the edges are set and golden but the centers still look slightly underdone.",
      "Let the cookies rest on the hot sheet for 5 minutes to finish setting, then transfer to a wire rack to cool completely. They keep in an airtight container for up to 5 days."
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
      "Buy oats, chocolate chips, and shredded coconut from the bulk bins so you only pay for what the recipe needs instead of full bags.",
      "Walnuts are usually cheaper than pecans and toast up just as well, a one-for-one swap that drops the cost noticeably.",
      "This dough freezes beautifully: scoop into balls, freeze on a tray, then bake straight from frozen (add 1-2 minutes) so you only make as many as you need."
    ],
    "substitutions": [
      {
        "forIngredientId": "pecans",
        "swap": "walnuts (toasted, chopped)",
        "savings": "Saves about $2-3 per batch"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "dark-chocolate-chips for a less sweet, deeper cookie",
        "savings": "Comparable price"
      },
      {
        "forIngredientId": "coconut-flakes",
        "swap": "unsweetened-shredded-coconut plus 1 extra tbsp brown sugar",
        "savings": "Comparable price"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 3,
      "carbs": 31,
      "fat": 13,
      "fiber": 2
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cookies",
      "dessert",
      "oatmeal",
      "chocolate",
      "make-ahead",
      "kid-friendly"
    ]
  },
  {
    "id": "bake2-cranberry-orange-cookies",
    "name": "Cranberry Orange Cookies",
    "description": "Soft, cakey drop cookies studded with tart dried cranberries and brightened with fresh orange zest, finished with a thin orange glaze. The classic holiday-table version a confident home baker makes from scratch — tender crumb, real citrus aroma, and a tangy-sweet drizzle.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "note": "1/4 cup packed light brown sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "1 orange — zest in the dough, 2-3 tbsp juice for the glaze"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 0.1875,
        "note": "3 tbsp fresh orange juice (for dough)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp orange zest (use lemon-zest id), plus more for glaze"
      },
      {
        "ingredientId": "dried-cranberries",
        "quantity": 1.25,
        "note": "1 1/4 cups dried cranberries, roughly chopped"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup powdered sugar (for glaze)"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 375°F (190°C). Line two baking sheets with parchment paper. Roughly chop the dried cranberries so they distribute evenly, and zest the orange before juicing it.",
      "In a medium bowl, whisk together the flour, baking powder, baking soda, and salt. Set aside.",
      "In a large bowl, cream the softened butter, granulated sugar, and brown sugar with a mixer on medium-high until pale and fluffy, about 3 minutes. Beat in the egg, then the vanilla, orange zest, and 3 tablespoons fresh orange juice until smooth — the mixture may look slightly curdled, which is fine.",
      "Add the dry ingredients in two additions, mixing on low just until no dry streaks remain. Fold in the chopped cranberries by hand. Do not overmix — the dough should be soft and thick.",
      "Scoop rounded tablespoons of dough (about 1.5 tablespoons each) and space them 2 inches apart on the prepared sheets. Gently round the tops with damp fingers.",
      "Bake one sheet at a time for 11 to 13 minutes, until the edges are set and just barely golden but the centers still look soft. Let the cookies rest on the sheet for 5 minutes, then transfer to a wire rack to cool completely.",
      "Make the glaze: whisk the powdered sugar with 2 to 3 tablespoons of the reserved fresh orange juice (and a pinch of zest) until smooth and pourable but not runny. Add juice a few drops at a time to reach a thick ribbon consistency.",
      "Once the cookies are fully cool, drizzle the glaze over the tops with a spoon or pipe it in thin lines. Let the glaze set for about 20 minutes before stacking or storing in an airtight container."
    ],
    "totalTimeMinutes": 55,
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
      "Buy a single navel orange and use the whole thing — zest into the dough, juice into the dough and glaze. No need for bottled juice or expensive orange extract.",
      "Store-brand dried cranberries (Craisins-style) are usually a third of the price of name-brand and work identically once chopped.",
      "Skip a stand mixer — softened butter and a sturdy fork or hand whisk cream just fine for a single batch. Just make sure the butter is truly room temperature."
    ],
    "substitutions": [
      {
        "forIngredientId": "dried-cranberries",
        "swap": "Dried cherries or chopped dried apricots for a similar tart-sweet chew",
        "savings": "Often on sale cheaper in bulk bins"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blend granulated sugar in a clean coffee/spice grinder until powdery to make your own glaze sugar",
        "savings": "Avoids buying a separate bag of powdered sugar"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (stick form, not tub) for a dairy-free version with the same creaming behavior",
        "savings": "Comparable; use what you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 138,
      "protein": 1.5,
      "carbs": 23,
      "fat": 4.5,
      "fiber": 0.6
    },
    "emoji": "🍪",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cookies",
      "holiday",
      "citrus",
      "dessert",
      "drop-cookies",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-peanut-butter-blossoms",
    "name": "Peanut Butter Blossoms",
    "description": "The classic American holiday cookie: a soft, chewy peanut butter cookie rolled in sugar and crowned with a chocolate kiss pressed in straight from the oven so it goes molten then sets up into a glossy dome. Faithful to the original Hershey's bake-off recipe, with a proper creamed butter-and-peanut-butter base and a sugar-rolled crust for crackle.",
    "mealType": "snack",
    "servings": 36,
    "ingredients": [
      {
        "ingredientId": "peanut-butter",
        "quantity": 12,
        "note": "3/4 cup creamy peanut butter"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar, plus extra for rolling"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed light brown sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.125,
        "note": "2 tbsp whole milk"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.75,
        "note": "1 3/4 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "chocolate",
        "quantity": 8,
        "note": "about 36 milk chocolate kisses (8 oz), unwrapped"
      }
    ],
    "steps": [
      "Heat the oven to 375°F (190°C). Line two baking sheets with parchment. Unwrap all the chocolate kisses and keep them nearby — you want to be fast once the cookies come out.",
      "In a large bowl, beat the softened butter and peanut butter together until smooth, about 1 minute. Add the granulated sugar and brown sugar and cream until light and fluffy, 2 to 3 minutes, scraping down the bowl once.",
      "Beat in the egg, milk, and vanilla until fully combined and smooth.",
      "In a separate bowl, whisk together the flour, baking soda, baking powder, and salt. Add to the wet ingredients and mix on low just until a soft, slightly sticky dough forms — do not overmix.",
      "Pour a few tablespoons of granulated sugar into a small bowl. Roll the dough into 1-inch balls (about 1 tablespoon each), then roll each ball in the sugar to coat. Space them about 2 inches apart on the prepared sheets.",
      "Bake one sheet at a time for 8 to 10 minutes, until the cookies are set at the edges and lightly golden but still soft in the center. Do not overbake — they firm up as they cool.",
      "Immediately remove from the oven and press one chocolate kiss firmly into the center of each cookie so it sinks in and the edges crack slightly. The kiss will look melty — that's correct.",
      "Let the cookies rest on the sheet for 3 to 4 minutes, then transfer to a wire rack. Cool completely (and ideally let the kisses fully re-set, about 1 hour) before stacking or storing, or the chocolate will smear."
    ],
    "totalTimeMinutes": 40,
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
      "Buy chocolate kisses in a bulk bag rather than a seasonal box — the per-cookie cost drops a lot, and any milk chocolate works.",
      "Store-brand creamy peanut butter and store-brand flour perform identically here; no need for name brands in a cookie this sweet.",
      "No mixer? Make sure the butter is genuinely soft (room temp 1 hour) and cream by hand with a sturdy spoon — peanut butter doughs come together easily."
    ],
    "substitutions": [
      {
        "forIngredientId": "chocolate",
        "swap": "Use semi-sweet or dark chocolate chunks/chips pressed in instead of kisses for a less-sweet, more grown-up cookie.",
        "savings": "Saves about $1-2 vs. a box of branded kisses"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any milk works — whole, 2%, or even a splash of water if you're out; it just loosens the dough slightly.",
        "savings": "Use what's already in the fridge, no extra spend"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (a firm stick type) subs 1:1 for a dairy-light version; texture stays nearly identical.",
        "savings": "Comparable cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 115,
      "protein": 2,
      "carbs": 14,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cookies",
      "dessert",
      "holiday",
      "peanut-butter",
      "chocolate",
      "classic",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-seven-layer-magic-bars",
    "name": "Seven Layer Magic Bars",
    "description": "The classic Eagle Brand \"Magic Cookie Bar\" — also known as Hello Dolly or Seven Layer Bars. A buttery graham cracker crust is layered with sweetened shredded coconut, chocolate and butterscotch-style chips, and chopped pecans, all bound by a poured-over blanket of sweetened condensed milk that bakes into chewy, caramelized, sliceable bars. No bowl, no creaming — you build it right in the pan, layer by layer.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, melted"
      },
      {
        "ingredientId": "graham-crackers",
        "quantity": 1.5,
        "note": "1 1/2 cups graham cracker crumbs (about 12 full sheets, finely crushed)"
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 21,
        "note": "1 1/3 cups sweetened shredded coconut"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 16,
        "note": "1 cup semi-sweet chocolate chips"
      },
      {
        "ingredientId": "white-chocolate-chips",
        "quantity": 16,
        "note": "1 cup butterscotch chips (sub white-chocolate chips)"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup pecans, coarsely chopped (about 4 oz)"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1 (14 oz) can sweetened condensed milk"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350°F (175°C). Line a 9x13-inch baking pan with foil or parchment, leaving an overhang on two sides for easy lifting later.",
      "Pour the melted butter evenly over the bottom of the pan. Scatter the graham cracker crumbs over the butter and press into an even, compact layer with the back of a measuring cup or your fingers. This is the crust — don't pre-bake it.",
      "Sprinkle the shredded coconut evenly over the crust in a single even layer.",
      "Scatter the chocolate chips and butterscotch (white) chips evenly over the coconut, then top with the chopped pecans, distributing everything edge to edge.",
      "Slowly and evenly drizzle the entire can of sweetened condensed milk over the top, covering as much surface as possible. Do NOT stir — the milk soaks down through the layers as it bakes. Gently press the surface so the loose toppings adhere.",
      "Bake 25 to 30 minutes, until the top is lightly golden and the edges are bubbling and just browned. The center will still look slightly soft — that's correct; it sets as it cools.",
      "Cool completely in the pan on a wire rack at least 2 hours (or refrigerate 1 hour) so the condensed milk firms up and the bars slice cleanly.",
      "Using the overhang, lift the slab out and cut into 24 bars with a sharp knife, wiping the blade between cuts for clean edges."
    ],
    "totalTimeMinutes": 170,
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
      "Buy graham crackers and crush them yourself in a zip bag with a rolling pin instead of paying extra for pre-made crumbs.",
      "Store-brand chocolate chips and condensed milk perform identically here — no need for name brands when they're baked into a bar.",
      "Pecans are the priciest layer; walnuts cost less and are just as classic, or skip nuts entirely and add an extra 1/2 cup chips."
    ],
    "substitutions": [
      {
        "forIngredientId": "white-chocolate-chips",
        "swap": "Use real butterscotch chips for the most traditional flavor, or dark chocolate chips for a richer bar",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Swap in chopped walnuts",
        "savings": "saves roughly $2 per batch"
      },
      {
        "forIngredientId": "graham-crackers",
        "swap": "Use crushed digestive biscuits or vanilla wafer crumbs for the crust",
        "savings": "neutral"
      }
    ],
    "estimatedNutrition": {
      "calories": 228,
      "protein": 2.5,
      "carbs": 26,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "no-mixer",
      "potluck",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-butter-tarts",
    "name": "Classic Canadian Butter Tarts",
    "description": "The real deal: a flaky, all-butter pastry shell cradling a gooey brown-sugar-and-corn-syrup filling that's set at the edges and just-runny in the center. Faithful to the Ontario classic, with raisins for the traditionalists and the choice to leave them out. The defining trick is a low-and-slow bake so the filling stays soft, never candy-hard.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour (for the pastry)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp (1 1/4 sticks) cold unsalted butter, cubed — for the pastry"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "about 1/4 cup ice water, added gradually"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed light brown sugar (filling)"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 8,
        "note": "1/2 cup light corn syrup (filling)"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup unsalted butter, melted — for the filling"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, lightly beaten"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "vinegar",
        "quantity": 0.33,
        "note": "1 tsp white vinegar (balances the sweetness, keeps filling tender)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt (filling)"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 cup raisins (optional, but traditional)"
      }
    ],
    "steps": [
      "Make the pastry: Whisk the 1 1/2 cups flour and 1/2 tsp salt together. Cut in the cold cubed butter with your fingertips or a pastry cutter until the mixture looks like coarse crumbs with some pea-sized pieces of butter still visible. Drizzle in ice water a tablespoon at a time, tossing with a fork, until the dough just holds together when squeezed. Shape into a disk, wrap, and chill at least 30 minutes.",
      "Roll the chilled dough on a lightly floured surface to about 1/8 inch thick. Cut twelve 4-inch rounds (re-roll scraps once). Press each round into the cups of a standard 12-cup muffin tin, easing the pastry up the sides so the top edge sits just below the rim. Chill the lined tin in the fridge while you make the filling.",
      "Position a rack in the lower third of the oven and preheat to 375 F (190 C). If using raisins, divide them among the chilled shells (about 2 tsp per tart).",
      "Make the filling: Whisk together the 3/4 cup brown sugar, 1/2 cup corn syrup, 1/4 cup melted butter, beaten egg, 1 tsp vanilla, 1 tsp vinegar, and 1/4 tsp salt until smooth. Do not overbeat — you don't want a frothy filling, or it will puff and crack.",
      "Spoon or pour the filling into the shells, filling each only about two-thirds full. The filling will bubble up and rise as it bakes, so leaving headroom prevents overflow that glues the tarts to the pan.",
      "Bake on the lower rack for 18 to 22 minutes, until the pastry is golden and the filling is puffed and bubbling at the edges but still wobbles in the center. Pull them while the centers look slightly underdone — they finish setting as they cool, and this is the secret to a runny middle instead of a hard one.",
      "Cool the tarts in the pan on a wire rack for 10 minutes, then run a thin knife or small offset spatula around each one to release it. Carefully lift the tarts out and finish cooling on the rack. Serve warm or at room temperature; the filling thickens to a glossy, gooey caramel as it cools."
    ],
    "totalTimeMinutes": 85,
    "prepTimeMinutes": 25,
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
      "Skip cutting fancy rounds — use store-brand refrigerated pie crust or even thawed puff pastry pressed into the muffin tin to save time and money while you practice the filling.",
      "Corn syrup is the budget-friendly classic, but if you only have a little, stretch it by replacing up to half with extra brown sugar dissolved in a teaspoon of water.",
      "Buy raisins in bulk and store them airtight; a 1/2 cup costs pennies and they keep for months for oatmeal, granola, and these tarts."
    ],
    "substitutions": [
      {
        "forIngredientId": "corn-syrup",
        "swap": "Replace the 1/2 cup corn syrup with maple syrup for a darker, more caramel-forward tart (very traditional in maple country); the filling will be a touch runnier.",
        "savings": "roughly the same cost"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Swap raisins for an equal amount of chopped pecans or walnuts for a nutty, less-sweet version — both are classic regional variations.",
        "savings": "pecans cost a bit more; walnuts are usually cheaper"
      },
      {
        "forIngredientId": "vinegar",
        "swap": "Use lemon juice in place of the white vinegar; it plays the same role of cutting the sweetness and tenderizing the filling.",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 2,
      "carbs": 33,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🧈",
    "accentColor": "bg-amber-100",
    "cuisine": "Canadian",
    "tags": [
      "baking",
      "dessert",
      "canadian",
      "pastry",
      "tart",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-raspberry-crumble-bars",
    "name": "Raspberry Crumble Bars",
    "description": "Buttery shortbread that pulls double duty as both the pressed base and the craggy crumble top, sandwiching a layer of bright raspberry jam. One bowl, one dough, no mixer required — the kind of bake-sale bar that disappears before it fully cools. A whisper of almond and lemon zest sharpens the raspberry so it tastes like fruit rather than just sweet.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) cold unsalted butter, cut into cubes"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "note": "1/4 tsp almond extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest (about 1/2 lemon)"
      },
      {
        "ingredientId": "jam",
        "quantity": 16,
        "note": "1 cup good raspberry jam or preserves"
      },
      {
        "ingredientId": "raspberries",
        "quantity": 1,
        "optional": true,
        "note": "1 cup fresh raspberries (one 6 oz container), optional"
      }
    ],
    "steps": [
      "Heat the oven to 375 F (190 C). Line an 8x8 or 9x9-inch baking pan with parchment, leaving an overhang on two sides so you can lift the bars out later. Lightly butter the parchment.",
      "In a large bowl, whisk together the flour, sugar, salt, baking powder, and lemon zest. Add the cold cubed butter and cut it in with a pastry cutter or your fingertips until the mixture looks like coarse, sandy crumbs with some pea-size bits of butter remaining.",
      "Whisk the egg with the vanilla and almond extract, then drizzle it over the flour mixture. Toss and rub with your hands until the dough just comes together into clumps — it should hold when pressed but still be crumbly, not a smooth ball.",
      "Press a little under two-thirds of the dough firmly and evenly into the bottom of the prepared pan to form the base. Pack it tight with the flat bottom of a measuring cup so the layer is compact.",
      "Stir the jam to loosen it, then spread it over the base in an even layer, stopping about 1/4 inch from the edges. Scatter the fresh raspberries over the jam if using, pressing them in lightly.",
      "Squeeze the remaining dough into clumps and crumble it over the top, leaving gaps so the jam peeks through. Don't cover it completely — the open patches are what give these bars their look.",
      "Bake for 35 to 40 minutes, until the crumble top is golden and the jam is bubbling at the edges. If the top browns too fast, tent loosely with foil for the last 10 minutes.",
      "Cool completely in the pan on a rack — at least 2 hours — so the jam sets. Lift out using the parchment, then cut into 16 squares with a sharp knife, wiping the blade between cuts."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
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
      "Skip the fresh raspberries entirely — a full cup of jam alone makes excellent bars, and jam is far cheaper than out-of-season berries.",
      "Store-brand raspberry jam works perfectly here; you're baking it, so save the artisan jar for toast.",
      "Salted butter is fine if it's what you have — just drop the added salt to a pinch."
    ],
    "substitutions": [
      {
        "forIngredientId": "jam",
        "swap": "Any seedless berry preserve — strawberry, blackberry, or mixed-berry — works one-for-one.",
        "savings": "Use whatever jar is cheapest or already open"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Omit it, or use an extra 1/4 tsp vanilla; the bars are still excellent without it.",
        "savings": "Skip buying a bottle you'll rarely use"
      },
      {
        "forIngredientId": "raspberries",
        "swap": "Frozen raspberries (no need to thaw) scattered over the jam.",
        "savings": "Frozen berries cost a fraction of fresh"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 2.5,
      "carbs": 30,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍓",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "raspberry",
      "shortbread",
      "fruit",
      "make-ahead",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-pecan-pie-bars",
    "name": "Classic Pecan Pie Bars",
    "description": "All the deep, buttery, caramel-and-toasted-pecan soul of a Thanksgiving pecan pie, baked as portable bars. A crisp shortbread crust holds a gooey corn-syrup-and-brown-sugar custard packed with pecans. Far easier than rolling pie dough, and they slice into clean squares that travel beautifully.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour (for the shortbread crust)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "note": "1/4 cup packed light brown sugar (for the crust)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt (for the crust)"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) cold unsalted butter, cubed (for the crust)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs (for the filling)"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 16,
        "note": "1 cup light corn syrup (for the filling)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed light brown sugar (for the filling)"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup unsalted butter, melted (for the filling)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp pure vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt (for the filling)"
      },
      {
        "ingredientId": "pecans",
        "quantity": 20,
        "note": "2.5 cups (about 12 oz) pecan halves, roughly chopped"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Line a 9x13-inch baking pan with parchment, leaving an overhang on the long sides so you can lift the bars out later. Lightly butter the parchment.",
      "Make the crust: In a bowl, whisk together the 2 cups flour, 1/4 cup brown sugar, and 1/2 tsp salt. Cut in the cold cubed butter with a pastry cutter or your fingertips until the mixture looks like coarse, sandy crumbs that just hold together when pressed.",
      "Tip the crumbs into the lined pan and press firmly into an even layer across the bottom, packing it tight (a flat-bottomed measuring cup helps). Bake for 18 to 20 minutes, until the edges are pale golden and the surface is set. Leave the oven on.",
      "While the crust bakes, make the filling: In a large bowl whisk the eggs until smooth, then whisk in the corn syrup, 3/4 cup brown sugar, melted butter, vanilla, and 1/2 tsp salt until fully combined and no lumps of sugar remain. Stir in the chopped pecans.",
      "Pour the pecan filling evenly over the hot, par-baked crust, spreading the nuts so they're distributed corner to corner.",
      "Return to the oven and bake 25 to 30 minutes, until the filling is set around the edges and the center jiggles only slightly when you nudge the pan. Don't overbake or the filling turns hard rather than chewy.",
      "Cool the pan completely on a wire rack, at least 2 hours, until fully set. For the cleanest slices, chill in the fridge for an hour before cutting.",
      "Lift the slab out using the parchment overhang, transfer to a cutting board, and cut into 24 bars with a sharp knife, wiping the blade between cuts. Store airtight at room temperature up to 4 days."
    ],
    "totalTimeMinutes": 180,
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
      "Pecans are the priciest part. Buy them in bulk bags or from a warehouse store, and stretch them by using half pecans, half toasted walnuts. The flavor stays in the same wheelhouse.",
      "Skip the corn syrup brand markup. Generic light corn syrup performs identically here. Or sub an equal amount of honey or maple syrup if you already have it.",
      "This recipe scales: one batch makes 24 bars, so it's a cheap way to feed a crowd or a dorm floor compared with buying individual desserts."
    ],
    "substitutions": [
      {
        "forIngredientId": "corn-syrup",
        "swap": "Equal amount (1 cup) maple syrup or honey for a less neutral, more caramel-forward filling",
        "savings": "Often cheaper if already in your pantry"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Walnuts, or a 50/50 mix of pecans and walnuts",
        "savings": "Walnuts typically cost less per ounce"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus 1 tsp molasses per 1/4 cup to mimic brown sugar's depth",
        "savings": "Uses a single sugar you likely already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 2,
      "carbs": 24,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "pecan",
      "holiday",
      "make-ahead",
      "potluck"
    ]
  },
  {
    "id": "bake2-key-lime-bars",
    "name": "Classic Key Lime Bars",
    "description": "Buttery graham-cracker shortbread crust under a tangy, creamy key lime custard set with sweetened condensed milk and egg yolks. Bright, smooth, and just sweet enough — the bake-shop classic done right, finished with a dusting of powdered sugar.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "graham-crackers",
        "quantity": 9,
        "note": "9 full graham cracker sheets, crushed to ~1 1/2 cups crumbs"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp granulated sugar (for the crust)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, melted"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1 can (14 oz) sweetened condensed milk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg yolks"
      },
      {
        "ingredientId": "lime-juice-bottled",
        "quantity": 12,
        "note": "3/4 cup key lime juice (12 tbsp)"
      },
      {
        "ingredientId": "lime-zest",
        "quantity": 3,
        "note": "1 tbsp lime zest (3 tsp)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 1,
        "note": "1 tbsp powdered sugar, for dusting"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Line an 8x8-inch baking pan with parchment, leaving an overhang on two sides for easy lifting.",
      "Make the crust: combine the graham cracker crumbs, granulated sugar, and salt in a bowl. Pour in the melted butter and stir until the crumbs are evenly moistened and resemble wet sand. Press firmly and evenly into the bottom of the pan, using the flat base of a measuring cup to compact it.",
      "Bake the crust for 10 minutes, until set and lightly golden. Remove and set aside. Keep the oven at 350F.",
      "Make the filling: in a bowl, whisk the egg yolks with the lime zest for about 1 minute until slightly lightened. Whisk in the sweetened condensed milk until smooth, then whisk in the key lime juice. The mixture will thicken slightly as the acid reacts with the milk.",
      "Pour the filling over the warm crust and gently smooth the top. Bake for 15 to 17 minutes, until the filling is set around the edges but still has a slight jiggle in the very center (it should not brown).",
      "Cool the bars in the pan on a wire rack to room temperature, about 1 hour, then refrigerate at least 3 hours (or overnight) until fully chilled and firm.",
      "Using the parchment overhang, lift the slab onto a cutting board. Wipe the knife between cuts and slice into 16 squares.",
      "Just before serving, dust the tops with powdered sugar. Keep refrigerated."
    ],
    "totalTimeMinutes": 255,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 27,
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
      "Buy a bottle of key lime juice instead of juicing dozens of tiny key limes — it is far cheaper and the bars taste just as bright.",
      "Save the 4 leftover egg whites in the freezer for an omelet or meringue so nothing goes to waste.",
      "Use store-brand graham crackers and condensed milk; in a baked, zesty custard you will not taste the difference."
    ],
    "substitutions": [
      {
        "forIngredientId": "lime-juice-bottled",
        "swap": "Regular fresh lime juice plus a splash of lemon juice for a slightly less floral but still bright filling",
        "savings": "Saves a few dollars if you already have limes on hand"
      },
      {
        "forIngredientId": "graham-crackers",
        "swap": "Crushed digestive biscuits or vanilla wafer cookies for the crust",
        "savings": "Often cheaper per ounce and works identically"
      },
      {
        "forIngredientId": "butter",
        "swap": "Coconut oil, melted, for a dairy-free crust",
        "savings": "Comparable cost; adds a subtle tropical note"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 3,
      "carbs": 22,
      "fat": 8,
      "fiber": 0.3
    },
    "emoji": "🍋",
    "accentColor": "bg-lime-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "citrus",
      "no-mixer",
      "make-ahead",
      "summer"
    ]
  },
  {
    "id": "bake2-smores-bars",
    "name": "Classic S'mores Bars",
    "description": "Everything you love about a campfire s'more in bar form: a buttery graham cracker cookie base, a thick layer of milk chocolate, and gooey toasted marshmallow on top — all baked in one pan, no fire required. The dough has real graham crumbs folded right in, so every bite tastes like the genuine thing.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed light brown sugar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour"
      },
      {
        "ingredientId": "graham-crackers",
        "quantity": 1,
        "note": "1 1/4 cups graham cracker crumbs (about 9 full sheets, finely crushed)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "chocolate",
        "quantity": 7,
        "note": "7 oz milk chocolate (about two standard bars), broken into pieces"
      },
      {
        "ingredientId": "marshmallows",
        "quantity": 1.5,
        "note": "1 1/2 cups marshmallow fluff or mini marshmallows"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). Line an 8x8-inch baking pan with parchment paper, leaving an overhang on two sides so you can lift the bars out later. Lightly grease the parchment.",
      "Make the graham dough: In a large bowl, cream the softened butter, brown sugar, and granulated sugar together until light and fluffy, about 2 minutes. Beat in the egg and vanilla until smooth.",
      "In a separate bowl, whisk together the flour, graham cracker crumbs, baking powder, and salt. Add the dry ingredients to the wet and mix just until a soft, slightly sticky dough forms — do not overmix.",
      "Divide the dough in half. Press one half evenly into the bottom of the prepared pan with lightly floured fingers, building a flat, compact base.",
      "Lay the milk chocolate pieces in a single even layer over the dough base, covering it edge to edge so you get melty chocolate in every bite. Spread or dollop the marshmallow fluff over the chocolate (or scatter the mini marshmallows evenly).",
      "Flatten the remaining dough into rough patches between your palms and lay them over the marshmallow layer, pressing gently to connect them into a mostly-covering top crust. It's fine if a little marshmallow peeks through.",
      "Bake for 30 to 35 minutes, until the top is golden brown and set. If you want a deeper toasted-marshmallow look on any exposed bits, switch to the broiler for the final 1 to 2 minutes and watch closely so it doesn't burn.",
      "Cool completely in the pan on a rack, at least 1 hour, so the chocolate and marshmallow firm up. Lift out using the parchment overhang and cut into 16 squares with a sharp knife wiped clean between cuts."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 35,
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
      "Buy a value brick of marshmallows and store-brand graham crackers instead of name-brand fluff — the bars taste identical and you'll cut the cost almost in half.",
      "Crush your own graham crumbs in a zip bag with a rolling pin instead of buying pre-made crumbs; it's cheaper and you control the texture.",
      "Watch for milk chocolate bars on post-holiday clearance and stash them in the pantry — they keep for months and are perfect for baking."
    ],
    "substitutions": [
      {
        "forIngredientId": "chocolate",
        "swap": "Use semi-sweet chocolate chips for a less-sweet, more grown-up bar",
        "savings": "Often cheaper per ounce than bar chocolate"
      },
      {
        "forIngredientId": "marshmallows",
        "swap": "Swap marshmallow fluff for an equal volume of mini marshmallows",
        "savings": "A bag of minis usually costs less than a jar of fluff"
      },
      {
        "forIngredientId": "butter",
        "swap": "Use the same amount of softened margarine or plant butter",
        "savings": "Store-brand margarine is a budget swap"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 30,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "chocolate",
      "marshmallow",
      "graham",
      "campfire",
      "kid-friendly"
    ]
  },
  {
    "id": "bake2-congo-bars",
    "name": "Classic Congo Bars",
    "description": "Buttery brown-sugar blondie bars loaded with chocolate chips and toasted walnuts — the New England church-cookbook classic. A chewy, caramel-edged cousin of the chocolate chip cookie, baked in a single pan and cut into squares. No mixer required.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.75,
        "note": "2 3/4 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2.5,
        "note": "2 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, melted"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 36,
        "note": "2 1/4 cups packed light brown sugar (about 33 tbsp)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 16,
        "note": "1 cup (about 16 tbsp) semi-sweet chocolate chips"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "optional": true,
        "note": "1/4 cup chopped walnuts, toasted"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Line a 9x13-inch baking pan with parchment, leaving an overhang on two sides, and lightly butter the parchment. If using walnuts, toast them in the dry oven for 6-8 minutes until fragrant, then chop.",
      "Whisk together the flour, baking powder, and salt in a medium bowl and set aside.",
      "In a large bowl, whisk the melted butter and brown sugar together until smooth and glossy, about 1 minute. The mixture should look like wet sand with no dry lumps.",
      "Whisk in the eggs one at a time, then the vanilla, beating well after each addition until the batter is thick, shiny, and ribbon-like.",
      "Switch to a sturdy spatula and fold in the flour mixture just until no dry streaks remain — do not overmix or the bars turn tough. Fold in the chocolate chips and toasted walnuts.",
      "Scrape the thick batter into the prepared pan and spread it into an even layer, pushing into the corners. Scatter a few extra chocolate chips on top if you like.",
      "Bake for 28-32 minutes, until the top is golden and set with a few cracks at the edges and a toothpick inserted in the center comes out with a few moist crumbs (not wet batter). The center should still look slightly soft — it firms as it cools.",
      "Cool completely in the pan on a wire rack, at least 1 hour, before lifting out by the parchment and cutting into 16 squares. For ultra-clean edges, chill 20 minutes before slicing."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
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
      "Store-brand chocolate chips and AP flour are a fraction of the name-brand price and bake up identically here — nobody can tell in a bar cookie.",
      "Skip the walnuts if money's tight; the bars are completely traditional and delicious without them, and you save the priciest ingredient.",
      "Buy brown sugar in a bulk bag rather than the small box — these bars use a lot of it, and it keeps for months in an airtight container with a slice of bread to stay soft."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "chopped pecans or omit entirely",
        "savings": "omitting saves ~$1.50"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "dark or white chocolate chips, or a 50/50 mix",
        "savings": "store-brand saves ~$1"
      },
      {
        "forIngredientId": "butter",
        "swap": "equal amount of neutral vegetable oil (slightly less rich but works)",
        "savings": "saves ~$1"
      }
    ],
    "estimatedNutrition": {
      "calories": 295,
      "protein": 4,
      "carbs": 44,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "blondie",
      "chocolate",
      "potluck",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-oatmeal-fudge-bars",
    "name": "Oatmeal Fudge Bars (Chocolate Revel Bars)",
    "description": "The classic Midwestern revel bar: a buttery brown-sugar oatmeal cookie dough pressed into the pan, blanketed with a silky sweetened-condensed-milk fudge filling, then topped with crumbled dough so it bakes up like a thick oatmeal cookie sandwiching a fudge center. Chewy edges, gooey middle, deeply chocolatey.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup unsalted butter, softened (for the oat dough)"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 32,
        "note": "2 cups packed light brown sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2.5,
        "note": "2 1/2 tsp vanilla extract (2 tsp in dough, 1/2 tsp in fudge)"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt (plus a pinch in the fudge)"
      },
      {
        "ingredientId": "oats",
        "quantity": 3,
        "note": "3 cups old-fashioned rolled oats"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 24,
        "note": "12 oz semi-sweet chocolate chips (about 2 cups)"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1 can (14 oz) sweetened condensed milk"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "optional": true,
        "note": "1/2 cup chopped walnuts, optional"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Line a 9x13-inch baking pan with parchment, leaving an overhang on two sides, and lightly grease.",
      "Make the fudge filling first so it can cool slightly: in a heavy saucepan over low heat, melt the chocolate chips with the sweetened condensed milk, stirring constantly until smooth, about 4-5 minutes. Off the heat, stir in 1/2 tsp vanilla, a pinch of salt, and the walnuts if using. Set aside.",
      "Make the oat dough: in a large bowl, beat the softened butter and brown sugar until light and fluffy, 2-3 minutes. Beat in the eggs one at a time, then 2 tsp vanilla.",
      "Whisk the flour, baking soda, and 1 tsp salt together, then mix into the butter mixture on low until just combined. Stir in the rolled oats; the dough will be thick and slightly crumbly.",
      "Press about two-thirds of the oat dough firmly and evenly into the bottom of the prepared pan to form the base.",
      "Pour the warm fudge filling over the base and spread it gently to the edges with an offset spatula.",
      "Crumble the remaining one-third of the oat dough into small clumps and scatter it evenly over the fudge, leaving some fudge peeking through.",
      "Bake for 25-30 minutes, until the top is golden and set and the fudge bubbles slightly at the edges; do not overbake or the fudge center will firm up too much.",
      "Cool completely in the pan on a rack (at least 2 hours, or chill 30 minutes for cleaner cuts), then lift out by the parchment and cut into 24 bars."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 28,
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
      "Buy a store-brand bag of chocolate chips and a generic can of sweetened condensed milk; they melt into an identical fudge for half the cost of name brands.",
      "Old-fashioned oats bought from the bulk bin are far cheaper per pound than boxed and are exactly what this recipe wants.",
      "Skip the walnuts to save a few dollars; the bars are rich and complete without them."
    ],
    "substitutions": [
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "dark-chocolate-chips for a less-sweet, more intense fudge",
        "savings": "comparable cost"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "pecans, or omit entirely",
        "savings": "saves about $2"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "white sugar plus 1 tbsp molasses per cup",
        "savings": "uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 4,
      "carbs": 38,
      "fat": 11,
      "fiber": 1.5
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "chocolate",
      "oatmeal",
      "potluck",
      "make-ahead",
      "kid-friendly"
    ]
  },
  {
    "id": "bake2-french-silk-pie",
    "name": "French Silk Pie",
    "description": "The classic American chocolate silk pie: a flaky blind-baked all-butter crust filled with an impossibly smooth, airy dark-chocolate mousse, then crowned with billows of lightly sweetened whipped cream and chocolate shavings. The silk comes from creaming butter with sugar, then whipping in cooled melted chocolate and eggs that are gently cooked over a water bath until thick — no raw eggs, no gelatin, no shortcuts.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour, for the crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cubed, for the crust"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.33,
        "note": "1 tsp granulated sugar, for the crust"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt, for the crust"
      },
      {
        "ingredientId": "water",
        "quantity": 0.1875,
        "note": "3 tbsp ice water, for the crust"
      },
      {
        "ingredientId": "chocolate",
        "quantity": 4,
        "note": "4 oz bittersweet chocolate (60-70%), chopped, for the filling"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened, for the filling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar, for the filling"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp pure vanilla extract"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "1 cup cold heavy cream, for the topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "2 tbsp powdered sugar, for the whipped cream"
      }
    ],
    "steps": [
      "Make the crust: Whisk the flour, 1 tsp sugar, and salt. Cut in the cold cubed butter with your fingers or a pastry cutter until the mixture looks like coarse crumbs with some pea-sized bits. Drizzle in the ice water a tablespoon at a time, tossing, until the dough just holds together when squeezed. Flatten into a disk, wrap, and chill at least 1 hour.",
      "Roll and blind-bake: Heat the oven to 375F (190C). Roll the dough on a floured surface to a 12-inch round and fit it into a 9-inch pie plate, crimping the edge. Prick the base all over with a fork, line with parchment, and fill with pie weights or dried beans. Bake 18 minutes, remove the weights and parchment, then bake 10-12 minutes more until the crust is golden and fully dry. Cool completely.",
      "Melt the chocolate: Set the chopped chocolate in a heatproof bowl over barely simmering water (or microwave in short bursts), stirring until smooth. Set aside to cool to just warm — it must not be hot when it meets the eggs or it will scramble them.",
      "Cream the base: In a large bowl, beat the softened 1 cup butter with the 1 cup granulated sugar on high until very pale and fluffy, 3-4 minutes. Beat in the cooled melted chocolate and the vanilla until uniform.",
      "Cook the eggs gently (this is the silk): Add the eggs one at a time, but rather than leaving them raw, transfer the mixture to a bowl over the simmering water and whisk constantly, scraping the sides, until it thickens slightly and reaches 160F (71C), about 4-5 minutes. This cooks the eggs safely while keeping the texture silky. Remove from heat.",
      "Whip to silk: Return the warm mixture to the mixer (or use a hand mixer) and beat on medium-high for a full 5 minutes, until the filling is thick, glossy, lightened in color, and holds soft ribbons. Don't rush this — the long whip is what makes it airy.",
      "Fill and chill: Scrape the filling into the cooled crust and smooth the top. Refrigerate until completely set, at least 4 hours or overnight.",
      "Top and serve: Whip the cold heavy cream with the powdered sugar to soft-to-medium peaks. Pile or pipe it over the chilled pie, finish with chocolate shavings if you like, and serve cold."
    ],
    "totalTimeMinutes": 360,
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
      "Skip pie weights and use dried beans you already have — spread them on the parchment to blind-bake, then save and reuse them for baking only.",
      "A store-brand bittersweet chocolate bar performs just as well as premium couverture once it is whipped into the filling, for a fraction of the price.",
      "Make the chocolate curls for the top by dragging a vegetable peeler down the edge of the same chocolate bar instead of buying separate garnish."
    ],
    "substitutions": [
      {
        "forIngredientId": "chocolate",
        "swap": "semi-sweet-chocolate-chips (use a scant 3/4 cup) for a slightly sweeter, softer filling",
        "savings": "Chips are usually cheaper per ounce than bar chocolate"
      },
      {
        "forIngredientId": "flour",
        "swap": "A store-bought refrigerated pie crust, blind-baked per its package, to skip making dough",
        "savings": "Saves time but usually costs a bit more than scratch dough"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Cold evaporated milk whipped with a little powdered sugar, or a tub of thawed whipped topping",
        "savings": "Both are cheaper than a carton of heavy cream"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 5,
      "carbs": 38,
      "fat": 34,
      "fiber": 2
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "pie",
      "chocolate",
      "no-bake-filling",
      "make-ahead",
      "classic",
      "american"
    ]
  },
  {
    "id": "bake2-apple-galette",
    "name": "Classic French Apple Galette",
    "description": "A rustic, free-form French apple tart: a single round of all-butter flaky pastry folded over thin, fanned slices of apple, brushed with butter, dusted with sugar, and baked until the crust is deeply golden and the apples are caramelized at the edges. Finished with a warm apricot glaze for that bakery shine. No tart pan required — the irregular pleated border is the whole point.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cut into 1/2-inch cubes"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 tbsp granulated sugar (for the dough)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "About 1/4 cup ice water, added gradually"
      },
      {
        "ingredientId": "apple",
        "quantity": 3,
        "note": "3 firm-tart apples (Granny Smith or Honeycrisp), peeled, cored, thinly sliced"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.5,
        "note": "Juice of 1/2 lemon, tossed with the apples"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 3,
        "note": "3 tbsp light brown sugar, for the filling"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter, melted, for brushing the apples"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 egg, beaten, for the crust egg wash"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 1,
        "note": "1 tbsp turbinado (raw) sugar, for sprinkling the crust"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 2,
        "note": "2 tbsp apricot jam, warmed, for the finishing glaze"
      }
    ],
    "steps": [
      "Make the dough: Whisk the flour, 1 tbsp granulated sugar, and salt in a bowl. Add the cold cubed butter and rub it in with your fingertips (or pulse in a food processor) until you have a coarse meal with some pea-sized butter flakes still visible — those flakes are what make the crust shatter-flaky. Drizzle in the ice water a tablespoon at a time, tossing, until the dough just holds together when squeezed; do not overwork it. Pat into a disk, wrap, and chill at least 1 hour.",
      "Prep the apples: Peel, core, and slice the apples about 1/8-inch thick. Toss them in a bowl with the lemon juice, brown sugar, and cinnamon. Let sit 10 minutes so they soften slightly and release a little juice while the oven heats.",
      "Preheat the oven to 400F (200C) and line a baking sheet with parchment. On a lightly floured surface, roll the chilled dough into a rough 12-inch round, about 1/8-inch thick. Transfer it to the parchment-lined sheet.",
      "Arrange the apples: Leaving a 2-inch border bare, fan the apple slices in slightly overlapping concentric circles over the center of the dough, mounding them gently. Drain off any excess pooled liquid so the crust stays crisp.",
      "Fold and finish: Fold the bare 2-inch border up and over the outer edge of the apples, pleating it every few inches into rustic folds. Brush the folded crust with the beaten egg, then sprinkle the crust with turbinado sugar. Brush the exposed apples with the 2 tbsp melted butter.",
      "Bake for 40 to 50 minutes, until the crust is deeply golden brown and the apple edges are caramelized. If the crust browns too fast, tent the edges loosely with foil. Bake on the lower-middle rack so the bottom crust sets and cooks through.",
      "Glaze: While the galette is still warm, brush the warmed apricot jam over the apples for a glossy bakery finish. Let cool on the sheet at least 15 minutes so the juices set before slicing.",
      "Slide the galette onto a board, cut into 8 wedges, and serve warm or at room temperature — excellent on its own or with a scoop of vanilla ice cream or a spoon of creme fraiche."
    ],
    "totalTimeMinutes": 130,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 50,
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
      "Granny Smith apples are usually the cheapest baking apple and hold their shape best — buy a 3-lb bag and use the rest for snacking.",
      "Skip the apricot jam glaze if you don't have it; the egg wash and turbinado sugar already give the crust plenty of shine and crunch.",
      "Make the dough by hand in one bowl — no food processor needed — and use the parchment as your rolling surface to save on flour and cleanup."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "Use marmalade or any clear jam thinned with a little water, or just skip it",
        "savings": "Avoids buying a jar you'll only use 2 tbsp of"
      },
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Regular granulated sugar works for sprinkling the crust",
        "savings": "Use what's already in the pantry"
      },
      {
        "forIngredientId": "apple",
        "swap": "Firm pears (Bosc) make an equally classic galette — slice and bake the same way",
        "savings": "Swap to whichever is on sale"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 3,
      "carbs": 34,
      "fat": 14,
      "fiber": 2
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "french",
      "apple",
      "pastry",
      "rustic",
      "fall"
    ]
  },
  {
    "id": "bake2-hong-kong-egg-tart",
    "name": "Hong Kong Egg Tarts (港式蛋撻)",
    "description": "Classic cha chaan teng egg tarts: a tender, slightly sweet shortcrust shell holding a silky, just-set egg custard with a glossy, wobble-when-warm center. The custard is built from whole eggs and a touch of evaporated milk, baked low enough to stay smooth and free of bubbles. Faithful to the Hong Kong style — flaky-pastry versions exist, but the cookie-crust custard tart is the one most home bakers master and serve with pride.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.75,
        "note": "1 3/4 cups all-purpose flour, for the pastry shell"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar, for the pastry"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "5 large eggs total — 1 for the pastry dough, 4 for the custard"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt, for the pastry"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract, for the pastry"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar, for the custard syrup"
      },
      {
        "ingredientId": "water",
        "quantity": 0.75,
        "note": "3/4 cup hot water, to dissolve the custard sugar"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1,
        "note": "1/3 cup evaporated milk (about 3 tbsp from a 12 oz can)"
      }
    ],
    "steps": [
      "Make the pastry: Beat the softened butter with the powdered sugar and salt until smooth and pale, about 1 minute. Beat in 1 egg and the vanilla until fully combined. Add the flour and mix just until a soft dough comes together — do not overwork it or the shells will turn tough. Wrap and chill for 30 minutes.",
      "Shape the shells: Divide the dough into 12 equal pieces (about 30 g each). Press each piece evenly into the bottom and up the sides of a 12-cup standard muffin tin or fluted tart molds, keeping the walls thin and even with a clean rim. Chill the lined tin while you make the custard.",
      "Make the sugar syrup: Dissolve the granulated sugar in the 3/4 cup hot water, stirring until completely clear. Let it cool to lukewarm — adding hot syrup to the eggs would scramble them.",
      "Mix the custard: In a separate bowl, gently whisk the 4 remaining eggs with the evaporated milk — whisk just to combine, avoiding excess foam. Pour in the cooled sugar syrup and stir gently.",
      "Strain twice: Pass the custard through a fine-mesh sieve at least twice into a measuring jug. This removes chalazae and air bubbles and is the single most important step for the signature glass-smooth top. Skim off any surface foam.",
      "Fill and bake: Preheat the oven to 400 F (200 C). Carefully pour the strained custard into the chilled shells, filling them to just below the rim (about 90%). Bake on a lower rack for 10 minutes, then reduce the heat to 325 F (165 C) and bake another 10–15 minutes.",
      "Judge doneness: The tarts are done when the custard is just set with a slight wobble in the center and a toothpick inserted at an angle stands upright on its own. Do not let the custard puff or dome — that means it is overbaking. If the tops brown too fast, crack the oven door for the last few minutes.",
      "Cool and serve: Let the tarts rest in the tin for 5 minutes, then gently lift them out. Serve warm, when the custard is at its silkiest and the shell is at its most tender."
    ],
    "totalTimeMinutes": 85,
    "prepTimeMinutes": 30,
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
      "Evaporated milk keeps for ages and a 12 oz can costs little — you only need 3 tbsp here, so save the rest for HK milk tea or another batch.",
      "No tart molds needed: a standard 12-cup muffin tin presses out perfect shells for free. Lightly grease the cups so they release clean.",
      "Buy eggs and butter on sale and make a double batch of dough — it freezes well, so you can bake fresh tarts later without re-shopping."
    ],
    "substitutions": [
      {
        "forIngredientId": "evaporated-milk",
        "swap": "Equal amount of whole milk for a lighter, less caramelized custard (slightly less rich but still smooth)",
        "savings": "Use milk you already have instead of opening a can"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Granulated sugar blitzed fine, or just 3 tbsp granulated sugar in the dough",
        "savings": "Skip buying a separate bag of powdered sugar"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Omit, or use a drop of almond extract for a traditional Cantonese bakery note",
        "savings": "One less ingredient to buy"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 4,
      "carbs": 22,
      "fat": 7,
      "fiber": 0
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Hong Kong / Cantonese",
    "tags": [
      "baking",
      "dessert",
      "custard",
      "hong-kong",
      "cha-chaan-teng",
      "egg-tart",
      "shortcrust"
    ]
  },
  {
    "id": "bake2-conchas",
    "name": "Conchas (Mexican Pan Dulce)",
    "description": "Classic Mexican sweet rolls: a soft, buttery, enriched yeast bread crowned with a crackly sugar-cookie paste scored in the iconic seashell pattern. Tender and lightly sweet with a sandy, snappy shell — half vanilla, half cinnamon-cocoa, just like the panadería.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "4 cups all-purpose flour, for the dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp (1 packet) instant yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "3/4 cup whole milk, warmed to 110F"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened, for the dough"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract, for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "TOPPING: 1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "TOPPING: 1 cup powdered sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "TOPPING: 1 cup all-purpose flour"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "TOPPING: 1 tsp vanilla extract"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 2,
        "note": "TOPPING: 2 tbsp cocoa powder, for the chocolate half"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "TOPPING: 1 tsp ground cinnamon, for the cinnamon half"
      }
    ],
    "steps": [
      "Make the dough: In a large bowl whisk together the 4 cups flour, instant yeast, 1/2 cup granulated sugar, and salt. In a separate bowl whisk the warm milk (110F), eggs, and 2 tsp vanilla. Pour the wet into the dry and stir until a shaggy dough forms.",
      "Knead in the softened 1/2 cup butter a tablespoon at a time, then knead on a lightly floured surface (or with a stand mixer dough hook) for 8-10 minutes until smooth, elastic, and slightly tacky. Shape into a ball, place in a greased bowl, cover, and let rise in a warm spot for 1 to 1 1/2 hours, until doubled.",
      "Make the topping paste while the dough rises: cream the 1/2 cup softened butter with the powdered sugar until fluffy, then mix in the 1 cup flour and 1 tsp vanilla until it forms a smooth, play-dough-like paste. Divide in half: leave one half plain (vanilla), and knead the cocoa (plus cinnamon, if using) into the other half until evenly colored.",
      "Divide each topping color into 6 equal balls (12 total). Flatten each between two squares of plastic wrap into a 3 1/2-inch disc, about 1/8 inch thick. Keep covered so they don't dry out.",
      "Punch down the risen dough and divide into 12 equal pieces (about 3 oz each). Roll each into a tight, smooth ball and arrange on two parchment-lined baking sheets, spacing them about 3 inches apart.",
      "Lay a topping disc over each dough ball, gently pressing it to cover the dome. Using a paring knife or a concha cutter, score the classic seashell or grid pattern into the topping, cutting through the paste but not into the dough.",
      "Cover loosely and let proof 45-60 minutes, until puffy and nearly doubled; the topping will crack along the score lines. Meanwhile, preheat the oven to 350F (175C).",
      "Bake one sheet at a time for 18-22 minutes, until the bread is cooked through and the bottoms are golden (the topping stays pale; don't wait for it to brown). Cool on a rack at least 15 minutes before eating — they are best the day they're baked."
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
      "Buy yeast in a jar instead of single packets — it's a fraction of the per-batch cost and keeps for months in the fridge.",
      "No concha cutter needed: a paring knife scores a perfect grid or shell, and a clean butter knife works in a pinch.",
      "These freeze beautifully — bake the full dozen, cool completely, and freeze in a bag; a few seconds in the microwave brings them back."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk including evaporated milk diluted 1:1 with water; whole milk gives the richest, softest crumb",
        "savings": "Use what's on hand to avoid buying a carton"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar in a blender until fine, or use granulated for a slightly grittier but authentic shell",
        "savings": "Skip buying a separate bag of powdered sugar"
      },
      {
        "forIngredientId": "cocoa",
        "swap": "Omit for an all-vanilla batch, or use a strawberry or matcha tint for the classic panadería color trio",
        "savings": "Free if you skip it"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 6,
      "carbs": 48,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🐚",
    "accentColor": "bg-amber-100",
    "cuisine": "Mexican",
    "tags": [
      "baking",
      "mexican",
      "pan-dulce",
      "sweet-bread",
      "yeast-bread",
      "enriched-dough",
      "dessert",
      "snack"
    ]
  },
  {
    "id": "bake2-pandesal",
    "name": "Classic Filipino Pandesal",
    "description": "The beloved Filipino breakfast roll — soft, slightly sweet, and pillowy with a tender crumb and a signature coating of breadcrumbs. An enriched yeast dough that bakes up golden and is best torn open warm, often dunked in coffee or hot chocolate. This is the real deal: no shortcuts, just a properly proofed milk-and-egg dough.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "4 cups all-purpose (or bread) flour, divided"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "1 cup whole milk, warmed to about 110°F"
      },
      {
        "ingredientId": "sugar",
        "quantity": 6,
        "note": "6 tbsp white sugar (a generous 1/3 cup)"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup unsalted butter, melted"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temperature"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant yeast (1 standard packet)"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1 1/2 tsp salt"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 0.5,
        "note": "1/2 cup fine plain breadcrumbs, for coating"
      }
    ],
    "steps": [
      "Bloom the yeast: In the bowl of a stand mixer, combine the warm milk (about 110°F), 1 tablespoon of the sugar, and the instant yeast. Stir and let sit 5–10 minutes until foamy. If it doesn't foam, your yeast is dead — start over with fresh yeast.",
      "Build the dough: Add the remaining sugar, melted butter, egg, salt, and 3 cups of the flour. Mix with the dough hook on low until a shaggy dough forms, then add the last cup of flour a few tablespoons at a time until the dough pulls away from the sides but is still slightly tacky.",
      "Knead: Knead with the dough hook on medium for 8–10 minutes (or by hand 12–15 minutes) until the dough is smooth, elastic, and passes the windowpane test — a small piece stretches thin without tearing.",
      "First rise: Shape into a ball, place in a lightly oiled bowl, cover, and let rise in a warm spot for 1 to 1.5 hours, until doubled in size.",
      "Shape: Punch down the dough and turn it out onto a lightly floured surface. Roll into a log and divide into 12 equal pieces. Roll each into a tight ball, then roll each ball in the breadcrumbs to coat all over.",
      "Second rise: Arrange the coated balls cut-side up (or seam-down, spaced apart) on a parchment-lined baking sheet. Cover loosely and let rise 45–60 minutes until puffy and nearly doubled. Meanwhile, preheat the oven to 350°F (175°C).",
      "Bake: Bake on the middle rack for 18–22 minutes, until the tops are light golden and the rolls sound hollow when tapped. Rotate the pan halfway through for even color — pandesal should stay pale-gold, not deeply browned.",
      "Cool and serve: Let cool on the pan for 5 minutes, then transfer to a rack. Serve warm, torn open and slathered with butter, or dunked in coffee or hot chocolate."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 35,
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
      "Use water instead of whole milk plus a splash of extra melted butter — many traditional Filipino bakeries make a water-based dough that's just as soft and cheaper.",
      "Make your own breadcrumbs by toasting and blitzing the heels and stale ends of bread you'd otherwise toss — no need to buy a container.",
      "Buy yeast in a jar rather than single packets; it's far cheaper per loaf and keeps for months in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Substitute 1 cup water (or evaporated milk diluted 1:1) for the whole milk",
        "savings": "Saves about $0.30 per batch"
      },
      {
        "forIngredientId": "butter",
        "swap": "Use vegetable oil or canola oil in place of melted butter",
        "savings": "Saves about $0.40 per batch"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Use active dry yeast — same amount, but proof it fully in the warm milk first",
        "savings": "Roughly cost-neutral"
      }
    ],
    "estimatedNutrition": {
      "calories": 220,
      "protein": 6,
      "carbs": 38,
      "fat": 5,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Filipino",
    "tags": [
      "baking",
      "bread",
      "filipino",
      "breakfast",
      "yeast-bread"
    ]
  },
  {
    "id": "bake2-parker-house-rolls",
    "name": "Parker House Rolls",
    "description": "The classic American dinner roll born at Boston's Parker House hotel in the 1870s — soft, buttery, faintly sweet, enriched with milk and egg, then folded into their signature half-moon shape and brushed with melted butter inside and out. Pull-apart tender with a glossy golden top and a fold that hides a layer of butter.",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "4 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup whole milk, warmed to about 110F"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup unsalted butter total: 4 tbsp melted into the dough, 8 tbsp melted for folding and brushing"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temperature"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant yeast (one 1/4 oz packet)"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1 1/2 tsp fine salt"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tsp flaky sea salt for the tops (optional)"
      }
    ],
    "steps": [
      "Warm the milk to about 110F (just hotter than body temperature, not steaming) and stir in the sugar. In a large bowl or stand mixer, whisk together the flour, instant yeast, and fine salt. Add the warm milk, the egg, and 4 tbsp of the melted-and-slightly-cooled butter.",
      "Mix to a shaggy dough, then knead 8-10 minutes by hand (or 6-7 minutes on medium-low with a dough hook) until smooth, elastic, and slightly tacky but not sticky. The dough should pass the windowpane test: a small piece stretches thin without tearing. Add flour a tablespoon at a time only if it stays wet.",
      "Shape into a ball, place in a lightly buttered bowl, cover, and let rise in a warm spot until doubled, about 1 to 1 1/2 hours.",
      "Gently deflate the dough and turn it onto a lightly floured surface. Divide into 12 equal pieces (about 70g each for evenness). Roll each into a tight ball, then flatten and roll into an oval roughly 4 inches long and 3 inches wide.",
      "Brush each oval with melted butter from the remaining 8 tbsp. Use the back of a knife or a chopstick to press a crease just off-center, then fold the larger flap over the smaller so the edges almost meet, forming the signature half-moon. Press the fold lightly to seal.",
      "Arrange the folded rolls fold-side-down and barely touching in a buttered 9x13-inch pan (or two 9-inch round pans). Cover loosely and let rise until puffy and the rolls are kissing, 35-45 minutes. Near the end, heat the oven to 375F.",
      "Brush the tops generously with melted butter and sprinkle with flaky sea salt if using. Bake 18-22 minutes, until deep golden brown and an internal temperature of about 195F.",
      "Brush the hot rolls with the last of the melted butter for shine and flavor. Cool in the pan 5 minutes, then serve warm — they pull apart at the fold."
    ],
    "totalTimeMinutes": 165,
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
      "A single 1/4 oz packet of yeast is exactly 2 1/4 tsp, so buy strips of packets instead of pricier jars if you only bake occasionally.",
      "No stand mixer needed — hand-kneading 8-10 minutes does the same job and costs nothing but a little arm work.",
      "Stretch the butter budget: use 4 tbsp in the dough and reserve melted butter only for folding and the final brush, where the flavor shows most."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use 1 cup 2% or whole-fat plant milk warmed to 110F; the rolls stay tender, just slightly less rich.",
        "savings": "Use what's already in the fridge"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Active dry yeast works 1:1 — bloom it in the warm milk-sugar mixture for 5 minutes until foamy before adding to the flour.",
        "savings": "Often cheaper per packet"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (the stick kind, not spread) substitutes 1:1 for melting and brushing if you need it dairy-free.",
        "savings": "Comparable cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 5,
      "carbs": 33,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🥐",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "bread",
      "dinner-rolls",
      "yeast",
      "classic-american",
      "holiday"
    ]
  },
  {
    "id": "bake2-beer-bread",
    "name": "Classic Beer Bread",
    "description": "A rustic, no-knead American quick bread with a crackly buttered crust and a tender, faintly malty crumb. Beer does double duty here — its carbonation and yeast give lift and flavor while baking powder guarantees a reliable rise, so there's no proofing and no kneading. Mix, pour, butter the top, and bake. It comes out somewhere between a soft sandwich loaf and a savory biscuit, perfect warm with soup or chili.",
    "mealType": "dinner",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 4,
        "note": "4 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 1.5,
        "note": "1 1/2 tsp salt"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp granulated sugar"
      },
      {
        "ingredientId": "beer",
        "quantity": 12,
        "note": "12 oz (1 bottle) beer, room temperature — a lager or amber ale"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup (4 tbsp) unsalted butter, melted, for the top"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 375 F (190 C). Grease a 9x5-inch loaf pan thoroughly with butter or line it with parchment, leaving an overhang on the long sides for easy lifting.",
      "In a large bowl, whisk together the flour, baking powder, salt, and sugar until evenly combined. Whisking the dry ingredients well is what gives you an even rise, since there's no kneading to distribute the leavening.",
      "Pour in the room-temperature beer all at once. Stir with a sturdy spoon or spatula just until no dry streaks of flour remain — the batter will be thick, sticky, and shaggy. Do not overmix; a few lumps are exactly right and keep the crumb tender.",
      "Scrape the batter into the prepared loaf pan and smooth the top roughly with the back of the spoon. Pour about half of the melted butter evenly over the surface — it will pool and sink into the cracks as the bread bakes, creating the signature crisp, golden crust.",
      "Bake for 30 minutes, then pull the loaf out and drizzle the remaining melted butter over the top. Return to the oven and bake another 15 to 25 minutes, until the top is deep golden brown and a skewer inserted in the center comes out clean. Total bake time is 45 to 55 minutes.",
      "An instant-read thermometer should register about 200 to 205 F (93 to 96 C) in the center when it's fully baked. If the top browns too fast before the inside is done, tent loosely with foil.",
      "Let the loaf cool in the pan for 10 minutes, then lift it out using the parchment overhang (or run a knife around the edge) and transfer to a wire rack. Cool at least 15 more minutes before slicing — cutting too early makes the crumb gummy.",
      "Slice thick and serve warm. It's best the day it's baked, ideal alongside soup, chili, or stew, or simply with more butter."
    ],
    "totalTimeMinutes": 65,
    "prepTimeMinutes": 10,
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
      "Any cheap beer works — a basic lager or even the last flat bottle from the back of the fridge gives the same lift and a slightly mellower flavor, so don't waste good craft beer here.",
      "Skip the parchment and just grease the pan well with the butter wrapper end — it's free and the loaf releases fine after the 10-minute rest.",
      "Buy all-purpose flour in the largest store-brand bag you can; at roughly 3 cups per loaf this recipe is one of the cheapest fresh breads you can make."
    ],
    "substitutions": [
      {
        "forIngredientId": "beer",
        "swap": "Equal amount of club soda or sparkling water plus 1 tbsp extra sugar, for a non-alcoholic loaf with the same carbonated lift",
        "savings": "Cheaper than beer and pantry-friendly"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Honey or maple syrup (same 3 tbsp) for a slightly richer, more caramelized crust",
        "savings": "Use what's already open"
      },
      {
        "forIngredientId": "butter",
        "swap": "Melted vegetable oil for the top to make the loaf dairy-free; you lose a little flavor but keep the crisp crust",
        "savings": "Oil is cheaper than butter"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 3.5,
      "carbs": 27,
      "fat": 4,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "quick-bread",
      "no-knead",
      "bread",
      "savory",
      "beer",
      "easy",
      "comfort-food",
      "side"
    ]
  },
  {
    "id": "bake2-palmiers",
    "name": "Classic French Palmiers",
    "description": "Crisp, caramelized \"elephant ear\" cookies made the real way: a quick rough-puff pastry rolled in granulated sugar, folded into the signature palm-leaf coil, and baked until the sugar melts into a deep amber shell. Shatteringly crisp at the edges, tender in the spiral, with nothing but butter, flour, and sugar doing the work.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, plus more for rolling"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) cold unsalted butter, cut into 1/2-inch cubes"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup ice-cold water"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, for rolling and coating (use more as needed)"
      }
    ],
    "steps": [
      "Make the rough-puff dough: Whisk the flour and salt in a large bowl. Add the cold cubed butter and toss to coat, then flatten each cube between your fingers into rough flakes — you want visible streaks and pieces of butter, not a fine crumb. Drizzle in the ice water and stir with a fork just until a shaggy, barely-together dough forms. Press it into a rough rectangle, wrap, and chill 30 minutes.",
      "On a lightly floured surface, roll the dough into a 10x16-inch rectangle. Fold it in thirds like a letter, give it a quarter turn, and roll out again. Repeat this fold-and-roll two more times (4 folds total), chilling 15-20 minutes whenever the dough softens. After the final fold, wrap and chill at least 1 hour. This builds the flaky layers that make palmiers crisp.",
      "Shape with sugar instead of flour: Sprinkle your work surface generously with granulated sugar. Set the dough on the sugar and sprinkle more on top. Roll into a 10x18-inch rectangle, pressing sugar into both sides as you go — the sugar replaces flour entirely here and is what caramelizes in the oven.",
      "Form the palm-leaf shape: Mark the center of the long side. Fold each long edge inward to meet just short of the center line, then fold each side inward again toward the center. Finally fold the two halves together like closing a book, making a tight six-layered log. Press gently to seal and sprinkle the outside with more sugar.",
      "Wrap the log and freeze for 20-30 minutes until firm — this is essential for clean slices that hold their shape.",
      "Preheat the oven to 400 F (205 C) and line two baking sheets with parchment. Slice the chilled log into 1/2-inch-thick pieces and lay them cut-side up, spacing at least 2 inches apart since they spread and unfurl as they bake.",
      "Bake 10-12 minutes, until the bottoms are deeply golden and the sugar is caramelizing. Pull the trays out, carefully flip each palmier with a thin spatula, and return to the oven for 5-8 minutes more until both sides are glossy amber and crisp. Watch closely at the end — sugar goes from caramel to burnt fast.",
      "Transfer immediately to a wire rack (they harden as they cool; leaving them on the hot pan can scorch the sugar). Cool completely before serving — they should be crackly-crisp all the way through."
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
      "Skip the from-scratch dough and use one sheet of store-bought frozen puff pastry — it's the classic shortcut and most bakeries do it. Just thaw, roll in sugar, fold, slice, and bake.",
      "Buy butter when it goes on sale and freeze it; this recipe rewards cold butter, and frozen blocks grate or cube beautifully straight from the freezer.",
      "Plain granulated white sugar is all you need — no need for fancy turbinado or vanilla sugar. A pinch of cinnamon mixed into the rolling sugar is a free upgrade if you have it."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "1 sheet thawed store-bought puff pastry (skip making the dough entirely)",
        "savings": "Saves ~2 hours of folding and chilling"
      },
      {
        "forIngredientId": "butter",
        "swap": "Cold plant-based butter sticks for a dairy-free version",
        "savings": "Comparable cost"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Turbinado sugar for extra crunch and a toffee-like caramel flavor",
        "savings": "Slightly pricier but a nice finish"
      }
    ],
    "estimatedNutrition": {
      "calories": 115,
      "protein": 1,
      "carbs": 13,
      "fat": 7,
      "fiber": 0
    },
    "emoji": "🥐",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "pastry",
      "cookies",
      "dessert",
      "vegetarian",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-clairs",
    "name": "Classic French Éclairs",
    "description": "Crisp, golden choux pastry shells piped into long fingers, baked until hollow and dry, then filled with silky vanilla pastry cream and glazed with glossy chocolate. The real Parisian patisserie classic — no shortcuts, just proper technique.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup water (for the choux)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk (for the choux)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, cubed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.33,
        "note": "1 tsp granulated sugar (for the choux)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour, sifted"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, plus 1 extra if needed for consistency"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk (for the pastry cream)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "scant 1/2 cup + 1 tbsp granulated sugar (about 9 tbsp, for the pastry cream)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg yolks (use whites elsewhere)"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 5.33,
        "note": "1/3 cup cornstarch (about 5 tbsp)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (or 1 split vanilla bean)"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter (to finish the pastry cream)"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 4,
        "note": "4 oz dark chocolate, chopped (for the glaze)"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.5,
        "note": "1/2 cup heavy cream (for the chocolate glaze)"
      }
    ],
    "steps": [
      "Make the pastry cream first so it can chill. Whisk the egg yolks, 9 tbsp sugar, and cornstarch in a bowl until pale and smooth. Heat the 2 cups milk in a saucepan until steaming, then slowly pour about half into the yolk mixture while whisking constantly to temper. Return everything to the pan and cook over medium heat, whisking nonstop, until it thickens and bubbles gently for a full 1-2 minutes. Off heat, whisk in the vanilla and 2 tbsp butter. Strain into a bowl, press plastic wrap directly onto the surface, and refrigerate at least 2 hours until cold.",
      "Make the choux: combine the 1/2 cup water, 1/2 cup milk, cubed butter, 1 tsp sugar, and salt in a saucepan. Bring to a full rolling boil so the butter is fully melted. Dump in all the sifted flour at once and stir vigorously with a wooden spoon until it forms a smooth ball.",
      "Keep stirring and cook the dough over medium heat for 2-3 minutes to dry it out, until a thin film coats the bottom of the pan and the dough pulls cleanly from the sides. Transfer to a bowl and let cool 5 minutes so it won't scramble the eggs.",
      "Beat in the eggs one at a time, fully incorporating each before adding the next (a stand mixer or hand mixer helps). The dough should be glossy and fall from the spoon in a slow V-shaped ribbon. If it's still stiff, beat in the extra egg a little at a time until it reaches that consistency.",
      "Preheat the oven to 425 F (220 C). Line two baking sheets with parchment. Transfer the dough to a piping bag fitted with a large round or French star tip and pipe 5-inch logs, spaced 2 inches apart, holding the bag at 45 degrees. Smooth any peaks with a wet finger so they don't burn.",
      "Bake at 425 F for 15 minutes, then WITHOUT opening the door reduce heat to 375 F (190 C) and bake another 20-25 minutes until deeply golden and rigid. Do not open the oven early or they will collapse. Turn off the oven, crack the door, and let them dry 10 minutes, then cool completely on a rack.",
      "Whisk the chilled pastry cream smooth. Poke three small holes in the bottom of each shell with a skewer, then pipe in the cream through a small round tip until the shell feels heavy and full.",
      "Make the glaze: heat the 1/2 cup heavy cream until steaming, pour over the chopped chocolate, let sit 1 minute, then stir to a glossy ganache. Dip the top of each filled eclair into the glaze, letting excess drip off, and set right-side up. Chill 15 minutes to set the glaze before serving."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 50,
    "cookTimeMinutes": 40,
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
      "Skip a vanilla bean and use good vanilla extract — at over $10 a pod, extract gives you nearly the same flavor in pastry cream for pennies.",
      "Use a sturdy zip-top bag with a corner snipped off instead of buying a piping bag and tip; pipe a thicker log to mimic a French star tip.",
      "Make the pastry cream a day ahead — it keeps perfectly covered in the fridge and spreads your effort out so the eclairs come together fast."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "semi-sweet-chocolate-chips melted with the cream for an easier, slightly sweeter glaze",
        "savings": "Chips are usually cheaper per ounce than bar chocolate"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "whole milk plus a pat of butter for the ganache (slightly less glossy but works)",
        "savings": "Avoids buying a whole carton of cream"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "2% milk in the pastry cream — still sets up fine thanks to the cornstarch and yolks",
        "savings": "Use whatever milk you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 6,
      "carbs": 28,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "french",
      "choux",
      "pastry",
      "vanilla",
      "chocolate",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-paris-brest",
    "name": "Paris-Brest",
    "description": "The classic French pâtisserie created for the 1910 Paris-Brest-Paris bicycle race: a ring of pâte à choux, baked until deeply golden and crisp, split and piped full of silky praline mousseline cream — a buttercream-lightened pastry cream flavored with hazelnut-almond praline. Crowned with sliced almonds and a snow of powdered sugar. Nutty, airy, and unmistakably Parisian.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup water (for the choux)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk (for the choux)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, cubed — for the choux"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.33,
        "note": "1 tsp sugar (for the choux)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour, sifted"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, plus 1 more beaten for egg wash"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.5,
        "note": "1/2 cup sliced/slivered almonds, for topping"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk (for the pastry cream base of the mousseline)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup sugar (for the pastry cream)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg yolks (for the pastry cream)"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "1/4 cup cornstarch (for the pastry cream)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened — for the mousseline"
      },
      {
        "ingredientId": "almonds",
        "quantity": 1,
        "note": "1 cup hazelnuts (or almonds) toasted, for homemade praline paste"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup sugar, for the praline caramel"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "2 tbsp powdered sugar, for dusting"
      }
    ],
    "steps": [
      "Make the praline paste: Heat 1/2 cup sugar in a dry pan over medium until it melts into an amber caramel (no stirring; swirl gently). Stir in the toasted hazelnuts to coat, pour onto a parchment-lined tray, and cool until hard. Break up and blitz in a food processor for several minutes, scraping down, until it becomes a smooth, oily paste. Set aside.",
      "Make the pastry cream: Warm 2 cups whole milk in a saucepan. In a bowl, whisk 4 egg yolks with 1/2 cup sugar and 1/4 cup cornstarch until pale. Temper by whisking in the hot milk, return to the pan, and cook over medium heat, whisking constantly, until it boils and thickens (about 2 minutes). Off heat, whisk in vanilla and the praline paste. Press plastic wrap onto the surface and chill cold, at least 2 hours.",
      "Make the choux: Preheat oven to 400F (200C). Bring 1/2 cup water, 1/2 cup milk, the cubed butter, 1 tsp sugar, and 1/2 tsp salt to a rolling boil. Dump in the sifted flour all at once and stir vigorously with a wooden spoon until a smooth ball forms, then keep cooking and stirring 2 minutes to dry the paste so it films the pan bottom.",
      "Transfer the paste to a bowl and beat 1 minute to cool slightly. Beat in 4 eggs one at a time, fully incorporating each, until the dough is glossy and falls from the spoon in a thick ribbon (a 'V' shape). Spoon into a piping bag fitted with a large star tip.",
      "Trace an 8-inch circle on parchment as a guide (pencil-side down). Pipe a ring of choux along the circle, then a second ring just outside it, and a third ring on top straddling the seam — three connected rings forming one thick wheel. Brush with beaten egg and scatter sliced almonds over the top.",
      "Bake at 400F for 15 minutes, then lower to 350F (175C) and bake 25-30 minutes more until deeply golden and firm — do not open the oven early or the ring will collapse. Turn off the oven, crack the door, and let it dry 10 minutes. Cool completely on a rack.",
      "Finish the mousseline: Beat the softened 1 cup butter until light and fluffy. With the mixer running, add the cold praline pastry cream a spoonful at a time until smooth, thick, and pipeable. (If it looks split, keep beating — it comes together.) Load into a piping bag with a star tip.",
      "Assemble: Slice the cooled ring in half horizontally with a serrated knife. Pipe generous rosettes of praline mousseline over the bottom ring, set the top back on, and dust heavily with powdered sugar. Chill 30 minutes before slicing into wedges to serve."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 45,
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
      "Make your own praline paste from whole hazelnuts and sugar (in the recipe) instead of buying a jar — it costs a fraction and tastes fresher.",
      "Swap hazelnuts for almonds, which are usually cheaper and still give an authentic, nutty praline.",
      "Buy butter and eggs in bulk; this recipe uses a lot of both, and the per-batch cost drops sharply when you stock up on sale."
    ],
    "substitutions": [
      {
        "forIngredientId": "almonds",
        "swap": "Use slivered almonds for the praline paste instead of whole hazelnuts",
        "savings": "Almonds are typically cheaper than hazelnuts"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Use 2% or part half-and-half for an even richer pastry cream",
        "savings": "Whatever milk you already have on hand — no extra purchase"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Equal weight of all-purpose flour to thicken the pastry cream (cook 1 extra minute)",
        "savings": "Use flour you already have instead of buying cornstarch"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 9,
      "carbs": 42,
      "fat": 38,
      "fiber": 2
    },
    "emoji": "🥮",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "pastry",
      "dessert",
      "choux",
      "praline",
      "classic",
      "showstopper"
    ]
  },
  {
    "id": "bake2-apple-turnovers",
    "name": "Classic Apple Turnovers",
    "description": "Flaky, golden puff pastry pockets filled with cinnamon-spiced apples cooked down with brown sugar and a touch of lemon. Egg-washed, sugar-dusted, and baked until shatteringly crisp — the real bakery-style turnover a skilled home baker makes from scratch-rolled pastry and ripe apples.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) cold unsalted butter, cubed"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup ice water"
      },
      {
        "ingredientId": "apple",
        "quantity": 3,
        "note": "3 firm-tart apples (Granny Smith), peeled and diced"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 5.33,
        "note": "1/3 cup packed brown sugar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp granulated sugar, plus extra for dusting"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp ground nutmeg"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp lemon juice"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "1 tbsp cornstarch"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 tbsp butter (for cooking the apples)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 egg, beaten with 1 tsp water (egg wash)"
      }
    ],
    "steps": [
      "Make the rough puff pastry: In a bowl, whisk together the 2 cups flour and 1/2 tsp salt. Add the cubed cold butter and toss to coat, then press each cube flat with your fingers, leaving large flakes of butter visible (do not fully rub in). Drizzle in the ice water and gently bring together into a shaggy dough — it should look streaky with butter, not smooth.",
      "Turn the dough onto a floured surface and pat into a rectangle. Roll it out to about 1/2 inch thick, then fold in thirds like a letter. Rotate 90 degrees and repeat the roll-and-fold two more times. Wrap and chill at least 1 hour (this builds the flaky layers).",
      "Make the filling: Melt 1 tbsp butter in a skillet over medium heat. Add the diced apples, brown sugar, 2 tbsp granulated sugar, cinnamon, nutmeg, and lemon juice. Cook 6 to 8 minutes until the apples soften and release their juices. Stir the cornstarch into 1 tbsp water, add to the pan, and cook 1 minute until thickened and glossy. Spread on a plate and cool completely.",
      "Preheat the oven to 400 F (200 C) and line a baking sheet with parchment. On a floured surface, roll the chilled dough into a 14-inch square and cut into eight 4 to 5 inch squares.",
      "Place a heaping spoonful of cooled filling on the center of each square, leaving a clean border. Brush two edges of each square with egg wash, then fold over into a triangle. Press the edges firmly and crimp with a fork to seal tightly.",
      "Transfer turnovers to the baking sheet, spacing them apart. Brush the tops with egg wash, cut 2 or 3 small steam vents in each, and sprinkle generously with granulated sugar.",
      "Bake 22 to 25 minutes, until deeply golden brown and puffed. If any filling leaks, that's normal — it caramelizes.",
      "Cool on the sheet 5 minutes, then transfer to a rack. Let cool at least 15 minutes before eating so the filling sets and you don't burn your mouth."
    ],
    "totalTimeMinutes": 120,
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
      "Skip the from-scratch rough puff and use store-bought frozen puff pastry — it's cheaper than 2 sticks of butter and saves an hour.",
      "Use whatever apples are on sale; even soft ones like Gala work if you cut the cooking time and add an extra squeeze of lemon for tartness.",
      "Buy butter on sale and freeze it — cold, cheap butter is the only secret to flaky pastry."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "1 tbsp apple cider vinegar for the same bright acidity",
        "savings": "pennies if you already have vinegar"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "granulated sugar plus a 1/2 tsp molasses, or just more white sugar",
        "savings": "use what's in the pantry"
      },
      {
        "forIngredientId": "apple",
        "swap": "firm pears, peeled and diced — cook 2 minutes less",
        "savings": "swap to whichever fruit is cheaper that week"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 4,
      "carbs": 38,
      "fat": 22,
      "fiber": 2
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "French-American",
    "tags": [
      "baking",
      "dessert",
      "pastry",
      "apple",
      "fall"
    ]
  },
  {
    "id": "bake2-cheese-straws",
    "name": "Classic Southern Cheese Straws",
    "description": "Crisp, sharp, buttery cheese straws — the real Southern cocktail-party staple. Aged sharp cheddar is creamed with butter, then worked into a short flour dough seasoned with cayenne, pressed through a star tip (or rolled and cut), and baked until snappy. All the snap and tang of a good cheese cracker, with a clean cheddar finish and a slow build of heat.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "cheddar-block",
        "quantity": 8,
        "note": "8 oz extra-sharp cheddar (aged orange cheddar), finely grated, at room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.5,
        "note": "1/2 tsp cayenne pepper (scant 1/4 tsp for mild, up to 3/4 tsp for spicy)"
      },
      {
        "ingredientId": "paprika",
        "quantity": 0.25,
        "note": "1/4 tsp paprika, for color"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.25,
        "note": "1/4 tsp freshly ground black pepper"
      }
    ],
    "steps": [
      "Let the butter and finely grated cheddar come fully to room temperature, about 30 minutes — cold cheese will not cream smoothly and the dough will crack. Use a block of extra-sharp cheddar grated on the small holes of a box grater; pre-shredded bagged cheese has anti-caking starch that makes the straws dry and crumbly.",
      "In a stand mixer with the paddle (or a hand mixer), beat the softened butter and grated cheddar on medium speed for 2 to 3 minutes until the mixture is fluffy, evenly combined, and slightly lightened in color.",
      "Whisk together the flour, salt, cayenne, paprika, and black pepper in a separate bowl. Add to the cheese mixture and beat on low just until a cohesive dough forms and pulls away from the sides — stop the moment it comes together. If it looks dry and sandy, beat 30 seconds more; the warmth of mixing brings it together. Do not add water.",
      "Press the dough into a disk, wrap, and chill 20 to 30 minutes so it firms up enough to pipe or roll cleanly. Meanwhile, heat the oven to 350F (175C) and line two baking sheets with parchment.",
      "To pipe: load the dough into a cookie press or a piping bag fitted with a large open-star tip and press out ribbons across the sheet, then cut into roughly 3-inch lengths. To roll and cut: roll the dough 1/8 inch thick on a lightly floured surface and cut into 3-inch by 1/2-inch strips, or run through a hand-crank press. Space the straws about 1/2 inch apart.",
      "Bake 13 to 16 minutes, rotating the pans halfway, until the straws are firm, set, and just barely golden at the edges. They should not brown much — pull them while still pale or they turn bitter. The centers crisp fully as they cool.",
      "Cool on the pans for 5 minutes, then transfer to a rack to cool completely; warm straws are fragile and soft, and only reach full snap once cold. Store airtight at room temperature up to 1 week, or freeze the raw piped dough and bake straight from frozen, adding a minute or two."
    ],
    "totalTimeMinutes": 65,
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
      "Buy a block of store-brand extra-sharp cheddar and grate it yourself — it's cheaper than name-brand pre-shredded, melts and creams better, and skips the starchy coating that ruins the texture.",
      "No cookie press or star tip? Just roll the dough 1/8 inch thick and cut strips with a knife or pizza cutter — the straws taste identical, they're only slightly less fancy.",
      "Make a double batch and freeze the raw piped straws on a sheet, then bag them; bake from frozen whenever you need a fast snack, so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "cheddar-block",
        "swap": "Sharp gouda or aged Gruyere grated from a block — slightly nuttier but the same short, crisp result",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "cayenne",
        "swap": "1/2 tsp red pepper flakes (crushed fine) or a few dashes of hot sauce worked into the butter",
        "savings": "uses what's in the pantry"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (firm stick type) for a dairy-light version — keep it cold-ish so the dough stays short",
        "savings": "comparable"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 6,
      "carbs": 12,
      "fat": 14,
      "fiber": 0.5
    },
    "emoji": "🧀",
    "accentColor": "bg-amber-100",
    "cuisine": "Southern American",
    "tags": [
      "baking",
      "southern",
      "cheese",
      "appetizer",
      "make-ahead",
      "vegetarian",
      "finger-food"
    ]
  },
  {
    "id": "bake2-corn-muffins",
    "name": "Classic Corn Muffins",
    "description": "Tender, golden corn muffins with a real cornbread crumb — sweet but not cakey, with crisp tops and a moist, buttery interior. This is the diner-style classic: a true 1:1 cornmeal-to-flour ratio, buttermilk for tang and lift, and melted butter for richness. Mixed by hand and baked hot so they dome.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "cornmeal",
        "quantity": 1.5,
        "note": "1 1/2 cups yellow cornmeal, medium grind"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 4,
        "note": "4 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1.25,
        "note": "1 1/4 cups buttermilk"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, melted and slightly cooled"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp honey"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 400 F. Line a 12-cup standard muffin tin with paper liners or grease the wells well with butter or cooking spray.",
      "In a large bowl, whisk together the cornmeal, flour, sugar, baking powder, baking soda, and salt until evenly combined and no lumps remain.",
      "In a separate medium bowl, whisk the eggs until well beaten, then whisk in the buttermilk and honey. Whisk in the melted butter last, pouring it in a slow stream while whisking so it emulsifies rather than seizing into clumps.",
      "Pour the wet ingredients into the dry. Using a rubber spatula, fold just until no dry streaks remain — the batter should look thick and slightly lumpy. Do not overmix or the muffins will turn tough and tunnel.",
      "Let the batter rest 5 minutes; this hydrates the cornmeal and gives a more tender crumb. Meanwhile the oven finishes heating.",
      "Divide the batter evenly among the 12 wells, filling each about three-quarters full. For tall, domed tops, mound the batter slightly in the center.",
      "Bake at 400 F for 16 to 20 minutes, until the tops are golden and a toothpick inserted in the center comes out clean. The edges should pull slightly from the pan.",
      "Let the muffins cool in the tin for 5 minutes, then transfer to a wire rack. Serve warm with butter and honey; they are best the day they are baked."
    ],
    "totalTimeMinutes": 35,
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
      "No buttermilk? Stir 1 tablespoon of lemon juice or vinegar into 1 1/4 cups regular milk and let it sit 5 minutes — it curdles into a perfect substitute for pennies.",
      "Skip paper liners and just grease the tin with butter; the muffins release fine and you save money on liners.",
      "Buy cornmeal from the bulk bin rather than a branded box — it is the same product at a fraction of the price."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 1/4 cups milk soured with 1 tbsp lemon juice or vinegar",
        "savings": "Avoids buying a whole carton of buttermilk"
      },
      {
        "forIngredientId": "butter",
        "swap": "1/2 cup vegetable oil",
        "savings": "Cheaper and keeps muffins moist longer"
      },
      {
        "forIngredientId": "honey",
        "swap": "2 tbsp maple syrup or simply omit",
        "savings": "Use pantry sweeteners you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 4,
      "carbs": 31,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🌽",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "cornbread",
      "muffins",
      "breakfast",
      "classic",
      "american",
      "quick-bread"
    ]
  },
  {
    "id": "bake2-morning-glory-muffins",
    "name": "Classic Morning Glory Muffins",
    "description": "The faithful Nantucket original from 1978: a moist, oil-based muffin packed with shredded carrot, grated apple, raisins, coconut, and walnuts, spiced with cinnamon. Hearty but tender, with a craggy domed top. The kind of bakery-case muffin that actually earns its name as a good-morning treat.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 2,
        "note": "2 tsp baking soda"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "carrot",
        "quantity": 4,
        "note": "2 cups peeled, finely grated carrot (about 4 medium carrots)"
      },
      {
        "ingredientId": "apple",
        "quantity": 1,
        "note": "1 large apple, peeled and grated (about 3/4 cup)"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "note": "1/2 cup raisins"
      },
      {
        "ingredientId": "unsweetened-shredded-coconut",
        "quantity": 8,
        "note": "1/2 cup unsweetened shredded coconut"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "note": "1/2 cup chopped walnuts"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 12,
        "note": "3/4 cup vegetable oil"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      }
    ],
    "steps": [
      "Preheat the oven to 350°F (175°C). Line a 12-cup muffin tin with paper liners or grease it well. Soak the raisins in hot water for 10 minutes while you prep, then drain — this keeps them plump instead of leathery.",
      "In a large bowl, whisk together the flour, sugar, baking soda, cinnamon, and salt until evenly combined and no lumps of soda remain.",
      "Add the grated carrot, grated apple, drained raisins, shredded coconut, and chopped walnuts to the dry mixture. Toss with your fingers or a fork until every piece is lightly coated in flour — this suspends them so they don't sink.",
      "In a separate bowl, whisk the eggs, vegetable oil, and vanilla until smooth and slightly thickened.",
      "Pour the wet ingredients into the dry mixture. Fold gently with a spatula just until no dry streaks remain — the batter will be thick and chunky. Do not overmix, or the muffins will turn tough.",
      "Divide the batter evenly among the 12 cups, mounding it high and full to the rim for tall, domed tops.",
      "Bake on the center rack for 22 to 28 minutes, until the tops spring back when pressed and a toothpick inserted in the center comes out clean.",
      "Cool in the pan for 5 minutes, then transfer to a wire rack. They taste even better the next day once the flavors meld — store airtight at room temperature for up to 3 days."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 25,
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
      "Buy whole carrots and a bag of raisins instead of pre-shredded carrots or trail mix — they're a fraction of the price and the carrots grate in two minutes.",
      "Walnuts are the priciest item; skip them or swap in cheaper sunflower seeds, and the muffins are still great.",
      "Use whatever apple is cheapest or already softening in your fruit bowl — it gets grated and disappears into the batter, so cosmetic bruises don't matter."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "chopped pecans or sunflower seeds",
        "savings": "Pecans are a 1:1 swap; sunflower seeds cut nut cost by about half."
      },
      {
        "forIngredientId": "raisins",
        "swap": "dried cranberries",
        "savings": "Roughly the same price and adds a tart pop."
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "melted coconut oil or unsweetened applesauce (for half the oil)",
        "savings": "Applesauce trims fat and calories while keeping them moist."
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 4,
      "carbs": 35,
      "fat": 16,
      "fiber": 2
    },
    "emoji": "🧁",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "breakfast",
      "muffins",
      "carrot",
      "make-ahead",
      "classic"
    ]
  },
  {
    "id": "bake2-cheese-scones",
    "name": "Classic British Cheese Scones",
    "description": "Tall, golden, properly cheesy scones with a sharp cheddar crust and a soft, fluffy crumb. The classic British teatime bake — rubbed-in cold butter, a generous hand with mature cheddar, and a hot oven for maximum rise. Split, butter while warm, and eat the same day.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups (about 280g) all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp baking powder (use if your flour is plain/all-purpose, not self-raising)"
      },
      {
        "ingredientId": "mustard-powder",
        "quantity": 0.5,
        "note": "1/2 tsp English mustard powder, for savory depth"
      },
      {
        "ingredientId": "cayenne",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp cayenne pepper"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "4 tbsp (1/4 cup / 55g) cold unsalted butter, cubed"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 5,
        "note": "5 oz (about 140g) mature/sharp cheddar, grated — keep a small handful back for the tops"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "about 1/2 cup whole milk, plus a little extra for glazing"
      }
    ],
    "steps": [
      "Heat the oven to 425F (220C) and line a baking sheet with parchment. A hot oven is essential for a good rise.",
      "In a large bowl, whisk together the flour, baking powder, mustard powder, cayenne, and salt. Add the cold cubed butter and rub it into the flour with your fingertips until the mixture looks like coarse breadcrumbs — work quickly so the butter stays cold.",
      "Stir in most of the grated cheddar (reserve a small handful for the tops), keeping the cheese coated in flour so it distributes evenly.",
      "Crack the egg into a measuring jug and beat lightly, then add enough milk to reach about 3/4 cup total liquid. Reserve a tablespoon of this for glazing. Pour the rest into the flour and bring it together with a knife, then your hands, into a soft, slightly shaggy dough — do not overwork it.",
      "Tip onto a lightly floured surface and gently pat (don't roll hard) to about 1 inch / 2.5 cm thick. Cut out rounds with a 2.5-inch cutter pressed straight down without twisting, so the scones rise level. Gather scraps, pat out again, and cut until you have 8.",
      "Place the scones close together on the sheet (touching helps them rise tall). Brush the tops with the reserved egg-milk glaze and scatter over the reserved cheddar.",
      "Bake for 12 to 15 minutes, until well risen and deep golden with crisp cheesy edges. They should sound hollow when tapped underneath.",
      "Cool on a wire rack for a few minutes. Serve warm, split and spread with butter. Best eaten the day they're made."
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
      "Buy a block of cheddar and grate it yourself — it's cheaper than pre-shredded and melts better because it has no anti-caking starch.",
      "No round cutter? Cut the patted-out dough into 8 wedges with a knife instead. Same scone, zero special equipment.",
      "Day-old scones revive beautifully: split, toast cut-side down in a dry pan, and butter — better than buying fresh."
    ],
    "substitutions": [
      {
        "forIngredientId": "cheddar-block",
        "swap": "Use grated gruyere or a sharp gouda for a nuttier, slightly more grown-up scone.",
        "savings": "Roughly the same cost; gouda is often a bit cheaper than aged cheddar."
      },
      {
        "forIngredientId": "milk",
        "swap": "Buttermilk gives an even softer, tangier crumb — swap 1:1 and reduce baking powder slightly.",
        "savings": "Comparable price; one small carton covers several batches."
      },
      {
        "forIngredientId": "mustard-powder",
        "swap": "A teaspoon of prepared dijon stirred into the wet mix works if you don't have the dry powder.",
        "savings": "No extra cost if dijon is already in your fridge."
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 8,
      "carbs": 28,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🧀",
    "accentColor": "bg-amber-100",
    "cuisine": "British",
    "tags": [
      "baking",
      "british",
      "savory",
      "teatime",
      "snack"
    ]
  },
  {
    "id": "bake2-popovers",
    "name": "Classic Popovers",
    "description": "Tall, dramatically puffed popovers with crisp, deeply browned shells and a custardy, hollow interior. A simple batter of flour, milk, eggs, and salt transforms in a hot oven through steam alone — no leavening, no fuss. Serve them straight from the pan with butter and jam, or alongside a roast.",
    "mealType": "breakfast",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "1 cup whole milk, lukewarm"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter, melted (plus extra for greasing)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      }
    ],
    "steps": [
      "Bring everything to room temperature first. Cold milk and eggs are the number one cause of squat popovers — let the milk sit out 30 minutes, or warm it gently until just lukewarm to the touch.",
      "Place a 6-cup popover pan (or a deep muffin tin) on the middle rack and preheat the oven to 450 degrees F. Heating the pan empty is essential for the dramatic rise.",
      "In a bowl, whisk the eggs until frothy, then whisk in the lukewarm milk and melted butter. Add the flour and salt and whisk just until smooth — a few small lumps are fine. Do not overbeat; you want the batter thin, like heavy cream. For best lift, let it rest 15 to 30 minutes.",
      "Carefully pull out the hot pan and quickly brush each cup generously with melted butter, coating the bottom and all the way up the sides.",
      "Fill each cup about two-thirds full with batter (roughly 1/3 cup each). Work fast so the pan stays hot, then return it to the oven immediately.",
      "Bake at 450 degrees F for 20 minutes without opening the door — this sets the initial explosive rise.",
      "Reduce the heat to 350 degrees F and bake 15 to 18 minutes more, until the popovers are tall, deep golden brown, and rigid to the touch. Underbaking leaves them soft and they will collapse.",
      "Remove from the oven and, if you like them extra crisp, pierce the side of each with a paring knife to let steam escape. Turn out of the pan and serve immediately, while puffed and hot, with butter and jam."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 38,
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
      "No popover pan? A standard deep muffin tin works — just fill every other cup so the popovers have room to climb without crowding.",
      "Skip room-temp guesswork: microwave the milk in 10-second bursts until barely warm, and set the eggs in a bowl of warm water for 5 minutes.",
      "All-purpose flour and whole milk are all you need — there is no leavening to buy, so this is one of the cheapest impressive bakes you can make."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "2% milk works, but whole milk gives the richest, most custardy interior",
        "savings": "Use what's already in the fridge"
      },
      {
        "forIngredientId": "butter",
        "swap": "Melted vegetable oil for greasing the cups and in the batter",
        "savings": "Cheaper than butter and equally crisp"
      },
      {
        "forIngredientId": "flour",
        "swap": "Bread flour for an even taller, chewier rise thanks to extra gluten",
        "savings": "Optional upgrade"
      }
    ],
    "estimatedNutrition": {
      "calories": 150,
      "protein": 6,
      "carbs": 18,
      "fat": 6,
      "fiber": 1
    },
    "emoji": "🥯",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "breakfast",
      "bread",
      "vegetarian",
      "classic",
      "brunch"
    ]
  },
  {
    "id": "bake2-butter-mochi",
    "name": "Hawaiian Butter Mochi",
    "description": "The real deal: a dense, chewy, golden-edged Hawaiian potluck classic made by whisking glutinous (mochiko) rice flour with coconut milk, evaporated milk, eggs, melted butter, and sugar, then baking it low and slow until it sets into squares that are crisp at the edges and gloriously chewy in the middle. No yeast, no kneading, no fancy equipment — just one bowl, a whisk, and a 9x13 pan.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "glutinous-rice-flour",
        "quantity": 3,
        "note": "3 cups mochiko (glutinous/sweet rice flour) — about one 16 oz box"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp baking powder"
      },
      {
        "ingredientId": "coconut-milk",
        "quantity": 1,
        "note": "1 can (13.5 oz) full-fat coconut milk"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1,
        "note": "1 can (12 oz) evaporated milk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, melted and cooled slightly"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). Grease a 9x13-inch metal baking pan generously with butter or cooking spray, making sure to coat the corners well so the chewy edges release cleanly.",
      "In a large bowl, whisk together the dry ingredients: mochiko (glutinous rice flour), sugar, baking powder, and salt. Break up any lumps so the batter stays smooth.",
      "In a separate bowl, whisk the eggs until uniform, then whisk in the coconut milk, evaporated milk, vanilla, and the melted (slightly cooled) butter. If the butter is too hot it can scramble the eggs, so let it sit a minute first.",
      "Pour the wet mixture into the dry ingredients and whisk until completely smooth with no dry pockets. The batter will be thin and pourable like a pancake batter — that is correct.",
      "Pour the batter into the prepared pan. Tap the pan gently on the counter a few times to release large air bubbles and even out the surface.",
      "Bake on the center rack for 60 to 70 minutes, until the top is golden brown, the edges have pulled slightly from the sides, and the center is set (a knife inserted in the middle comes out clean, not wet).",
      "Let the butter mochi cool completely in the pan on a rack, at least 1 to 2 hours. This is essential — cutting it warm gives gummy, ragged squares, while fully cooled mochi slices into clean, chewy pieces.",
      "Run a buttered knife or plastic knife around the edges, then cut into 24 squares. Wipe the blade between cuts for clean edges. Store covered at room temperature."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 65,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "gluten-free",
      "vegetarian"
    ],
    "cheapTips": [
      "Mochiko (Blue Star or Koda Farms) is cheapest at Asian grocery stores — often under $2 a box versus triple that in mainstream supermarket baking aisles.",
      "No evaporated milk on hand? A second can of coconut milk works and makes it dairy-light and extra coconutty, for roughly the same cost.",
      "Buy store-brand full-fat coconut milk and eggs — this recipe is forgiving and you will not taste a difference, so skip the premium brands."
    ],
    "substitutions": [
      {
        "forIngredientId": "evaporated-milk",
        "swap": "a second can of coconut milk (for a fully dairy-light, more coconut-forward mochi)",
        "savings": "~$0.50"
      },
      {
        "forIngredientId": "butter",
        "swap": "equal amount of coconut oil for a dairy-free version",
        "savings": "about the same"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1/2 tsp almond extract for a nuttier, bakery-style aroma (use less — it is potent)",
        "savings": "~$0.10"
      }
    ],
    "estimatedNutrition": {
      "calories": 205,
      "protein": 3,
      "carbs": 31,
      "fat": 8,
      "fiber": 0.5
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Hawaiian",
    "tags": [
      "baking",
      "hawaiian",
      "dessert",
      "gluten-free",
      "chewy",
      "potluck",
      "one-bowl"
    ]
  },
  {
    "id": "bake2-pineapple-tarts",
    "name": "Nyonya Pineapple Tarts (Open-Faced)",
    "description": "The classic Southeast Asian Lunar New Year cookie: a melt-in-your-mouth, buttery shortcrust crowned with a glossy mound of thick, slow-cooked spiced pineapple jam. The pastry is enriched with egg yolks and a touch of cornstarch so it shatters tenderly, while the jam is cooked down low and slow until jammy, sticky, and deeply caramelized. Worth every minute of stirring.",
    "mealType": "snack",
    "servings": 30,
    "ingredients": [
      {
        "ingredientId": "pineapple",
        "quantity": 4,
        "note": "4 cups fresh pineapple, finely grated or pulsed (about 1 large pineapple), for the jam"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup sugar, for the jam"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon (or 1 small stick), for the jam"
      },
      {
        "ingredientId": "cloves",
        "quantity": 0.25,
        "note": "1/4 tsp ground cloves (or 2 whole cloves), for the jam"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp lemon juice, for the jam"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, for the pastry"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2,
        "note": "2 tbsp cornstarch, for a tender crumb"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar, for the pastry"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large egg yolks (reserve 1 white for egg wash); 2 eggs total used"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      }
    ],
    "steps": [
      "Make the jam first (it can be made a day ahead). Finely grate the pineapple or pulse it in a food processor to a coarse pulp, keeping all the juice. Tip everything into a wide, heavy nonstick pan with the sugar, cinnamon, cloves, and lemon juice.",
      "Cook over medium heat, stirring often, for 45 to 70 minutes. As the liquid evaporates the pulp will turn from pale yellow to a deep golden-amber and become thick, sticky, and glossy. It is ready when you can drag a spoon across the pan and the jam holds a clear trail without weeping liquid. Spread it on a plate to cool completely, then roll into roughly 30 small balls (about 1 tsp each).",
      "Make the pastry. Whisk together the flour, cornstarch, powdered sugar, and salt. In a separate bowl, beat the softened butter until creamy, then beat in the 2 egg yolks and vanilla until smooth and pale.",
      "Add the dry ingredients to the butter mixture and mix just until a soft, slightly greasy dough comes together; do not overwork. Pat into a disc, wrap, and chill for 20 to 30 minutes so it firms up enough to shape. Meanwhile, heat the oven to 350F (175C) and line two baking sheets with parchment.",
      "Roll the dough about 1/4 inch (6mm) thick on a lightly floured surface and cut out 1.5-inch rounds (or roll dough into balls and flatten). Place on the lined sheets, leaving a little space between each. Press a shallow dimple in the center of each round with your thumb or the back of a spoon.",
      "Set a ball of cooled pineapple jam into each dimple, pressing gently so it adheres. Beat the reserved egg white with a teaspoon of water and lightly brush the exposed pastry (not the jam) for a golden sheen.",
      "Bake for 18 to 22 minutes, rotating the sheets halfway, until the pastry edges are set and very lightly golden. They should stay pale; do not let them brown deeply or the buttery crumb turns dry.",
      "Let the tarts cool on the sheet for 5 minutes, then transfer to a rack to cool completely; they firm up and become more tender as they cool. Store airtight at room temperature for up to 2 weeks."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 90,
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
      "Use a whole fresh pineapple when they're in season and cheap rather than canned; you get more jam and far better flavor for the money. A slightly overripe one is perfect and often discounted.",
      "No food processor? Grate the pineapple on a box grater straight into the pan, juice and all. It's the cheapest tool you already own.",
      "Buy butter on sale and freeze it; this recipe leans on a full cup, so stocking up when it's marked down makes a real difference per batch."
    ],
    "substitutions": [
      {
        "forIngredientId": "pineapple",
        "swap": "2 cans (20 oz) crushed pineapple, very well drained",
        "savings": "Often cheaper off-season and saves prep time, though flavor is milder"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Equal amount of regular sugar blitzed fine, or plain sugar (texture is slightly less delicate)",
        "savings": "Use sugar you already have instead of buying a separate bag"
      },
      {
        "forIngredientId": "cloves",
        "swap": "A pinch of star anise or extra cinnamon",
        "savings": "Whatever warm spice is already in your cabinet works"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 1,
      "carbs": 13,
      "fat": 6,
      "fiber": 0.5
    },
    "emoji": "🍍",
    "accentColor": "bg-amber-100",
    "cuisine": "Nyonya (Peranakan)",
    "tags": [
      "baking",
      "cookies",
      "lunar-new-year",
      "dessert",
      "make-ahead",
      "pineapple",
      "shortcrust"
    ]
  },
  {
    "id": "bake2-malva-pudding",
    "name": "Malva Pudding",
    "description": "The classic South African baked sponge pudding: a soft, spongy caramel-toned cake spiked with apricot jam and a touch of vinegar, then drenched while warm in a hot butter-cream-sugar sauce that soaks right in. Sticky, tender and deeply comforting, traditionally served with custard or vanilla ice cream.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup white sugar (for the batter)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 2,
        "note": "2 tbsp apricot jam"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 tbsp butter, melted (for the batter)"
      },
      {
        "ingredientId": "apple-cider-vinegar",
        "quantity": 0.33,
        "note": "1 tsp vinegar (cider or white)"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.5,
        "note": "1/2 cup heavy cream (for the sauce)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup butter (for the sauce)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup sugar (for the sauce)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1/4 cup hot water (for the sauce)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract (for the sauce)"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (180C) and butter a roughly 8-inch / 2-quart baking dish. Bring all batter ingredients to room temperature.",
      "Make the batter base: beat the 3/4 cup sugar with the 2 eggs and 2 tbsp apricot jam on medium-high for about 3 minutes, until pale, thick and fluffy. This aeration is what gives malva its tender crumb.",
      "In a small bowl, whisk together the flour, baking soda and salt. In a separate cup, stir the 1 tbsp melted butter and 1 tsp vinegar into the 1/2 cup milk.",
      "Add the dry ingredients and the milk mixture to the egg mixture in alternating batches, mixing on low just until smooth. Do not overmix. The batter will be loose and pourable.",
      "Pour the batter into the prepared dish and bake for 30-35 minutes, until risen, deep golden brown, and a skewer inserted in the center comes out clean. It should spring back when lightly pressed.",
      "While the pudding bakes, make the sauce: combine the cream, 1/2 cup butter, 1/2 cup sugar and hot water in a saucepan. Heat gently, stirring, until the butter melts and the sugar dissolves, then bring to a simmer for 1 minute. Off the heat, stir in the vanilla.",
      "As soon as the pudding comes out of the oven, pierce it all over with a skewer and slowly pour the hot sauce evenly over the hot pudding. It will look like too much liquid, but the sponge drinks it all up.",
      "Let it stand 10-15 minutes so the sauce fully soaks in. Serve warm, scooped into bowls, with custard or vanilla ice cream."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 35,
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
      "Apricot jam is the soul of the dish, but any cheap supermarket apricot or even marmalade works fine in a pinch - it is there for flavor and tenderizing, not chunks.",
      "No heavy cream? Use whole milk or evaporated milk for the sauce. It will be slightly less rich but still soaks in beautifully and costs less.",
      "Bake it in a single dish rather than ramekins to save on butter for greasing and to use the most affordable bakeware you already own."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "marmalade or apple butter",
        "savings": "Use whatever jar you already have open"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "evaporated milk or whole milk",
        "savings": "Saves roughly $1-2 per batch"
      },
      {
        "forIngredientId": "apple-cider-vinegar",
        "swap": "plain white vinegar or lemon juice",
        "savings": "Pennies; most pantries already have one"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 4,
      "carbs": 52,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "South African",
    "tags": [
      "baking",
      "dessert",
      "south-african",
      "sponge-pudding",
      "comfort-food",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-coffee-cake-crumb-bars",
    "name": "Coffee Cake Crumb Bars",
    "description": "Classic New York-style crumb cake in shareable bar form: a tender vanilla butter-cake base under a thick, craggy cinnamon brown-sugar crumb topping, dusted with powdered sugar. The crumb is the star — made the real way, by stirring dry ingredients into melted butter so it clumps into big, snackable boulders.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour (for the cake base)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar (for the cake base)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.25,
        "note": "1/4 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened, for the base"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 8,
        "note": "1/2 cup sour cream"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1 1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, melted, for the crumb topping"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed light brown sugar (for the crumb)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar (for the crumb)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2.5,
        "note": "2 1/2 tsp ground cinnamon (for the crumb)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt (for the crumb)"
      },
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour (for the crumb topping)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "2 tbsp powdered sugar, for dusting"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Line an 8x8-inch baking pan with parchment, leaving an overhang on two sides, and lightly butter the parchment. Make the crumb topping first so it can firm up while you mix the base: in a medium bowl, whisk together the melted butter, brown sugar, 1/4 cup granulated sugar, cinnamon, and 1/4 tsp salt until smooth. Stir in the 2 cups of flour with a fork or spatula until a thick, uniform dough forms. Set aside at room temperature.",
      "For the cake base, whisk together the 1 1/4 cups flour, baking powder, baking soda, and 1/2 tsp salt in a small bowl. In a larger bowl, beat the softened butter with the 3/4 cup granulated sugar until pale and fluffy, about 2-3 minutes. Beat in the egg until fully combined, then mix in the sour cream and vanilla. The batter may look slightly curdled — that's fine.",
      "Add the dry ingredients to the wet and fold just until no streaks of flour remain; do not overmix. The base batter will be thick, almost like a soft cookie dough. Scrape it into the prepared pan and smooth into an even layer with an offset spatula or the back of a spoon.",
      "Take the crumb dough and pinch off pieces, squeezing them in your hand and then breaking them apart over the batter to create crumbs of varying sizes — from pea-sized to large 1-inch boulders. Cover the entire surface; pile it on generously and don't press it down. The thick crumb layer is what makes these coffee cake bars.",
      "Bake on the center rack for 38-45 minutes, until the crumb is set and lightly golden and a toothpick inserted into the cake layer (angle it past the crumb) comes out clean or with a few moist crumbs. If the top is browning too fast past 30 minutes, tent loosely with foil.",
      "Let the bars cool completely in the pan on a wire rack, at least 1 hour. The base needs to fully set before cutting or the bars will be gummy. For the cleanest crumb topping, don't rush this.",
      "Using the parchment overhang, lift the slab out of the pan onto a cutting board. Dust generously with the powdered sugar through a fine sieve, then cut into 16 squares with a sharp knife, wiping the blade between cuts. Store in an airtight container at room temperature for up to 4 days."
    ],
    "totalTimeMinutes": 115,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 42,
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
      "Sour cream gives the most tender, classic crumb-cake base, but a 1/2 cup of plain whole-milk yogurt works just as well and is often cheaper — use it 1:1.",
      "Buy butter in 1-lb blocks rather than pre-cut sticks; this recipe uses 2 1/2 sticks total, so a single block covers it with butter to spare and costs less per ounce.",
      "Skip the powdered-sugar dusting if you don't have any — the bars are plenty sweet from the crumb, and you can crush a spoonful of granulated sugar finer in a bag if you really want the look."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Equal amount of plain whole-milk Greek yogurt or buttermilk",
        "savings": "Often cheaper and a common fridge staple"
      },
      {
        "forIngredientId": "cinnamon",
        "swap": "Same amount of pumpkin pie spice or a cinnamon-nutmeg-clove blend for a spiced coffee cake",
        "savings": "Uses spices you likely already own"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Granulated sugar plus 1 tbsp molasses, or just granulated sugar in a pinch",
        "savings": "No need to buy a separate bag of brown sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 268,
      "protein": 3,
      "carbs": 35,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "crumb-cake",
      "coffee-cake",
      "bars",
      "make-ahead",
      "brunch"
    ]
  },
  {
    "id": "bake2-kentucky-butter-cake",
    "name": "Kentucky Butter Cake",
    "description": "The real-deal Kentucky butter cake: a tender, dense, buttermilk pound-style Bundt cake that's poked all over while still warm and drenched in a warm vanilla butter syrup. The syrup soaks in and crystallizes into a delicate sugary crust on the outside while keeping the inside almost custardy-moist. Pure, simple, butter-forward — no frosting needed.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar (for the cake)"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "1 cup buttermilk, room temperature"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened — for the cake"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (for the cake)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter — for the butter syrup"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (for the butter syrup)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.1875,
        "note": "3 tbsp water (for the butter syrup)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (for the butter syrup)"
      }
    ],
    "steps": [
      "Heat the oven to 325F (165C). Generously grease and flour a 10- to 12-cup Bundt or tube pan, getting into every crevice — this cake is dense and clings, so thorough greasing is essential for a clean release.",
      "Whisk together the flour, 2 cups sugar, salt, baking powder, and baking soda in a large bowl. Add the softened butter (1 cup), buttermilk, eggs, and 2 tsp vanilla.",
      "Beat with an electric mixer on low until the dry ingredients are moistened, then increase to medium and beat for 3 full minutes, scraping the bowl once or twice. The batter will be thick and creamy.",
      "Scrape the batter into the prepared pan and smooth the top. Bake for 55 to 65 minutes, until a toothpick inserted into the center comes out clean and the top springs back when pressed.",
      "Near the end of baking, make the butter syrup: combine the 1/2 cup butter, 1 cup sugar, and water in a small saucepan over medium-low heat. Stir until the butter melts and the sugar dissolves and the mixture is steaming — do NOT let it boil, or the syrup will turn grainy. Remove from heat and stir in 2 tsp vanilla.",
      "Leave the baked cake in its pan. Use a long skewer or thin knife to poke deep holes all over the cake, right down to the bottom of the pan.",
      "Slowly pour the warm butter syrup over the warm cake, letting it soak into the holes a little at a time so it fully absorbs. Reserve a few tablespoons if you like a glazed top.",
      "Let the cake cool completely in the pan, at least 1 hour — this lets the syrup set into a sugary crust and firms the crumb. Run a thin knife around the edges and center tube, then invert onto a serving plate. Dust with powdered sugar if desired and serve."
    ],
    "totalTimeMinutes": 135,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 60,
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
      "No buttermilk? Stir 1 tablespoon of lemon juice or plain vinegar into 1 cup of regular milk and let it sit 5 minutes — it curdles into a perfect buttermilk substitute for a fraction of the cost.",
      "Buy butter on sale and freeze it; this recipe uses 1 1/2 sticks total, so stocking up when it's cheap pays off for repeat bakes.",
      "Generic store-brand flour, sugar, and eggs work identically here — the butter syrup is what makes this cake special, so save your money for good vanilla."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup milk + 1 tbsp lemon juice or vinegar, rested 5 minutes",
        "savings": "Skips buying a whole carton of buttermilk you won't finish"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1 tsp almond extract in the syrup for a bakery-style flavor (use half the amount — it's strong)",
        "savings": "A little almond extract goes a long way and lasts for dozens of bakes"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter (the stick kind, not spread) for a dairy-free cake",
        "savings": "Often comparable in price and lets the whole table enjoy it"
      }
    ],
    "estimatedNutrition": {
      "calories": 465,
      "protein": 5,
      "carbs": 64,
      "fat": 21,
      "fiber": 1
    },
    "emoji": "🧈",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Southern)",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "bundt",
      "southern",
      "buttermilk",
      "make-ahead",
      "potluck"
    ]
  },
  {
    "id": "bake2-caramel-cake",
    "name": "Southern Caramel Cake",
    "description": "A tender, fine-crumbed Southern butter layer cake blanketed in the real thing: a cooked-on-the-stove caramel icing made by caramelizing brown sugar with butter and milk, then beating it to a glossy fudge-like frosting. This is the heirloom cake you'd find on a glass cake stand at a church supper — buttery, sweet, and unmistakably caramel, with that signature slightly grainy, set icing that crackles a little under the fork.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups cake flour (or all-purpose), sifted"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2.5,
        "note": "2 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened — for the cake"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup whole milk, room temperature"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 32,
        "note": "2 cups packed light brown sugar — for the caramel icing"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter — for the icing"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk (or evaporated milk) — for the icing"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract — for the icing"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt — for the icing"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 32,
        "note": "2 cups powdered sugar, sifted — to finish the icing"
      }
    ],
    "steps": [
      "Heat the oven to 350°F (175°C). Grease two 9-inch round cake pans, line the bottoms with parchment, and grease again. Whisk together the 3 cups flour, baking powder, and 1/2 tsp salt in a bowl and set aside.",
      "Make the batter: Beat the 1 cup softened butter and 2 cups granulated sugar on medium-high for 4-5 minutes until pale and fluffy. Add the eggs one at a time, beating well after each, then beat in the 2 tsp vanilla. Scrape the bowl down.",
      "On low speed, add the flour mixture in three additions alternating with the 1 cup milk (begin and end with flour), mixing just until each addition disappears. Do not overmix. Divide evenly between the two pans and smooth the tops.",
      "Bake 26-32 minutes, until the tops spring back and a toothpick comes out clean. Cool in the pans 10 minutes, then turn out onto a rack, peel off the parchment, and cool completely before icing.",
      "Make the caramel icing: In a heavy 3-quart saucepan, combine the 2 cups brown sugar, 1/2 cup butter, 1/2 cup milk, and 1/4 tsp salt. Cook over medium heat, stirring, until the butter melts and the sugar dissolves, then bring to a rolling boil.",
      "Clip on a candy thermometer and boil, stirring occasionally, until it reaches the soft-ball stage, 235-238°F, about 5-7 minutes. Remove from the heat and stir in the 1 tsp vanilla.",
      "Let the caramel cool to about 200°F, then add the 2 cups sifted powdered sugar and beat vigorously with a wooden spoon (or hand mixer) for 2-4 minutes until smooth, glossy, and just thick enough to spread — it will keep firming up, so work promptly.",
      "Assemble quickly: place one layer on a plate, spread a generous layer of warm icing on top, set the second layer over it, and pour/spread the rest over the top and down the sides, working fast before it sets. Let the cake stand at least 30 minutes so the icing firms into its signature fudgy finish before slicing."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 30,
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
      "All-purpose flour works fine in place of cake flour — just remove 2 tablespoons per cup and sift twice for a finer crumb, saving you a specialty-flour purchase.",
      "No candy thermometer? Drop a little hot caramel into a glass of cold water; soft-ball stage is when it forms a soft, pliable ball you can pinch. Costs nothing and works.",
      "Bake it as a single 9x13 sheet cake instead of two rounds — one pan, no stacking, and you pour the icing straight over the top."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Evaporated milk in the icing for a richer, more old-fashioned caramel",
        "savings": "About the same cost; one small can covers the icing"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Skip the powdered sugar and instead beat the cooked caramel alone until it thickens (a true boiled icing)",
        "savings": "Saves buying powdered sugar entirely"
      },
      {
        "forIngredientId": "flour",
        "swap": "Buttermilk-style: replace the milk with 1 cup buttermilk plus 1/4 tsp baking soda for an extra-tender crumb",
        "savings": "Buttermilk is cheap and adds tang"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 5,
      "carbs": 88,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Southern American",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "southern",
      "caramel",
      "layer-cake",
      "from-scratch"
    ]
  },
  {
    "id": "bake2-coca-cola-cake",
    "name": "Classic Southern Coca-Cola Cake",
    "description": "The real-deal Southern sheet cake: a moist, fudgy buttermilk-cocoa cake where butter, cocoa, and a full cup of Coca-Cola are heated together and poured straight into the dry ingredients. Mini marshmallows melt into the batter as it bakes, and a warm cola-cocoa-pecan frosting is poured over while the cake is still hot so it soaks in. Tender, glossy, and old-fashioned.",
    "mealType": "snack",
    "servings": 15,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, for the cake"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 3,
        "note": "3 tbsp unsweetened cocoa powder, for the cake (plus 3 tbsp for frosting; total 6 tbsp)"
      },
      {
        "ingredientId": "cola",
        "quantity": 8,
        "note": "1 cup (8 oz) Coca-Cola, for the cake"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 0.5,
        "note": "1/2 cup buttermilk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, lightly beaten"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (1 tsp cake, 1 tsp frosting)"
      },
      {
        "ingredientId": "chocolate-chips",
        "quantity": 1.5,
        "note": "1.5 cups mini marshmallows (use mini-marshmallow stand-in; folds into batter)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 64,
        "note": "4 cups (1 lb) powdered sugar, for the frosting"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "optional": true,
        "note": "1 cup chopped pecans, toasted, for the frosting"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (175C). Grease a 9x13-inch baking pan and set aside. In a large bowl, whisk together the flour, granulated sugar, baking soda, and salt until evenly combined.",
      "Make the hot cocoa-cola mixture: in a saucepan over medium heat, combine 1 cup (2 sticks) butter, 3 tbsp cocoa, and 1 cup Coca-Cola. Heat, stirring, just until the butter melts and the mixture comes to a gentle boil. Remove from the heat.",
      "Pour the hot cola mixture over the flour mixture and whisk until smooth. The batter will be thin and glossy.",
      "Whisk in the buttermilk, beaten eggs, and 1 tsp vanilla until the batter is uniform. Fold in the mini marshmallows; they will float to the top now and melt as the cake bakes, settling into the crumb.",
      "Pour the batter into the prepared pan and bake for 30 to 35 minutes, until the top springs back and a toothpick inserted in the center comes out with a few moist crumbs. Do not overbake; this cake should stay fudgy.",
      "About 5 minutes before the cake is done, make the frosting: in a clean saucepan, combine 1 cup (2 sticks) butter, 3 tbsp cocoa, and 6 tbsp Coca-Cola. Heat, stirring, until the butter melts and it just begins to boil, then remove from the heat.",
      "Whisk the powdered sugar into the hot cola mixture a cup at a time until smooth, then stir in 1 tsp vanilla and the toasted chopped pecans.",
      "Pour the warm frosting evenly over the hot cake as soon as it comes out of the oven, spreading gently to the edges. The frosting will soak into the top and set to a glossy fudge layer as it cools.",
      "Cool at least 30 minutes before cutting into squares. The cake is even better after a few hours, once the frosting has fully set."
    ],
    "totalTimeMinutes": 60,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 35,
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
      "Store-brand cola works exactly the same as name-brand Coca-Cola here; a single 12-oz can covers both the cake and the frosting with a little left over.",
      "Skip the pecans or use whatever cheaper nut you have on hand (or leave them out entirely) -- the frosting is still glossy and fudgy without them.",
      "Buy a small carton of buttermilk only if you'll use it; otherwise make your own by stirring 1/2 tsp lemon juice or vinegar into 1/2 cup milk and letting it sit 5 minutes."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1/2 cup milk plus 1/2 tbsp lemon juice or vinegar, rested 5 minutes",
        "savings": "Avoids buying a whole carton of buttermilk"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Toasted walnuts or omit entirely",
        "savings": "Walnuts are usually cheaper than pecans; omitting saves the most"
      },
      {
        "forIngredientId": "chocolate-chips",
        "swap": "Leave out the marshmallows for a denser, more traditional sheet-cake crumb",
        "savings": "One less item to buy"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 4,
      "carbs": 72,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Southern)",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "chocolate",
      "southern",
      "sheet-cake",
      "potluck"
    ]
  },
  {
    "id": "bake2-mississippi-mud-pie",
    "name": "Mississippi Mud Pie",
    "description": "The real-deal Southern classic: a crunchy Oreo crumb crust holding a dense, fudgy baked chocolate filling — gooey and almost-brownie in the center, with crackly edges — finished with billows of lightly sweetened whipped cream and a shower of chocolate shavings. Rich, deeply chocolatey, and worth every fork.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "oreos",
        "quantity": 1,
        "note": "24 Oreo cookies (about 1 standard sleeve), filling and all, for the crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup + 2 tbsp unsalted butter (5 tbsp melted for the crust, 13 tbsp for the filling)"
      },
      {
        "ingredientId": "chocolate",
        "quantity": 6,
        "note": "6 oz semisweet or bittersweet chocolate, chopped, for the filling"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 4,
        "note": "1/4 cup semi-sweet chocolate chips, folded into the filling for pockets of melt"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 4,
        "note": "1/4 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup all-purpose flour"
      },
      {
        "ingredientId": "instant-coffee",
        "quantity": 1,
        "note": "1 tsp instant coffee or espresso powder, to deepen the chocolate"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.25,
        "note": "1 1/4 cups cold heavy cream, for the whipped topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "3 tbsp powdered sugar, for the whipped cream"
      },
      {
        "ingredientId": "pecans",
        "quantity": 2,
        "optional": true,
        "note": "2 oz pecans, toasted and chopped, for garnish (optional)"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Pulse the Oreos (cream filling included) in a food processor to fine crumbs, or crush them in a zip bag with a rolling pin. Stir in 5 tbsp of the melted butter until the crumbs look like wet sand. Press firmly and evenly up the sides and across the bottom of a 9-inch pie dish or springform pan. Bake 10 minutes, then set aside to cool while you make the filling.",
      "Make the fudge base: combine the chopped 6 oz chocolate and the remaining 13 tbsp butter in a heatproof bowl set over a saucepan of barely simmering water (or microwave in 30-second bursts). Stir until fully melted and glossy, then remove from the heat and stir in the instant coffee and salt. Let it cool for about 5 minutes so it won't cook the eggs.",
      "In a separate large bowl, whisk the granulated sugar and eggs together vigorously for a full minute, until pale, thick, and slightly foamy. This is what gives the pie its signature crackly top.",
      "Pour the warm (not hot) melted chocolate mixture into the egg mixture and whisk until smooth. Whisk in the vanilla.",
      "Sift the cocoa powder and flour over the batter and fold in gently with a spatula just until no dry streaks remain — don't overmix. Fold in the 1/4 cup chocolate chips.",
      "Pour the filling into the cooled crust and smooth the top. Bake at 350F for 38 to 45 minutes, until the edges are set and puffed but the center still has a slight jiggle and a toothpick comes out with moist, fudgy crumbs (not wet batter). The center will firm up as it cools.",
      "Cool the pie completely at room temperature, about 1 hour, then chill in the refrigerator for at least 3 hours (or overnight) so the filling sets to a dense, sliceable fudge.",
      "Just before serving, whip the cold heavy cream with the powdered sugar to soft-to-medium peaks. Spread or pipe it over the chilled pie, then shower with shaved chocolate and the toasted pecans if using. Slice with a hot, clean knife for tidy wedges."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 50,
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
      "Skip name-brand Oreos — store-brand chocolate sandwich cookies cost half as much and crush into an identical crust.",
      "Use a plain chocolate bar from the baking aisle instead of pricey couverture; a 4 oz bar plus the chocolate chips you already have hits the 6 oz mark.",
      "Heavy cream too expensive? A tub of thawed whipped topping covers the pie for a couple dollars and needs zero whisking."
    ],
    "substitutions": [
      {
        "forIngredientId": "chocolate",
        "swap": "Use 1 cup semi-sweet chocolate chips total in place of the chopped bar (they melt the same in the fudge base)",
        "savings": "Avoids buying a separate baking bar"
      },
      {
        "forIngredientId": "instant-coffee",
        "swap": "Leave it out, or use 1/2 tsp more vanilla — the coffee only deepens flavor and isn't tasted as coffee",
        "savings": "~$4 if you don't keep instant coffee on hand"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Use walnuts, or skip the nuts entirely and just shave extra chocolate on top",
        "savings": "~$3 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 498,
      "protein": 6,
      "carbs": 48,
      "fat": 33,
      "fiber": 3
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Southern)",
    "tags": [
      "baking",
      "dessert",
      "chocolate",
      "pie",
      "southern",
      "make-ahead",
      "crowd-pleaser",
      "no-mixer-crust"
    ]
  },
  {
    "id": "bake2-derby-pie",
    "name": "Classic Kentucky Derby Pie",
    "description": "The real deal: a flaky single-crust pie filled with a gooey, chess-pie-style custard of eggs, brown sugar, melted butter and a whisper of flour, spiked with bourbon and vanilla, then packed with toasted English walnuts and semi-sweet chocolate chips. Baked until the top crackles and the center is just set with a soft, fudgy middle. Serve barely warm with unsweetened whipped cream.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour (for the crust)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cubed (for the crust)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt (for the crust)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 tbsp granulated sugar (for the crust)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.1875,
        "note": "3 tbsp ice water (for the crust)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed light brown sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, melted and slightly cooled (for the filling)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "1/4 cup all-purpose flour (for the filling)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp pure vanilla extract"
      },
      {
        "ingredientId": "bourbon",
        "quantity": 1,
        "note": "2 tbsp (1 oz) bourbon"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt (for the filling)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 4,
        "note": "1 cup English walnuts, toasted and roughly chopped"
      },
      {
        "ingredientId": "semi-sweet-chocolate-chips",
        "quantity": 16,
        "note": "1 cup semi-sweet chocolate chips"
      }
    ],
    "steps": [
      "Make the crust: Whisk the 1 1/4 cups flour, 1/2 tsp salt and 1 tbsp sugar. Cut in the cold cubed butter with your fingers or a pastry blender until the mixture looks like coarse crumbs with some pea-sized bits. Drizzle in the ice water a tablespoon at a time, tossing, until the dough just holds together when squeezed. Pat into a disk, wrap, and chill at least 30 minutes.",
      "Roll the chilled dough on a floured surface into a 12-inch round. Fit it into a 9-inch pie plate, trim the overhang to about 1 inch, tuck it under, and crimp the edge. Chill the shell in the freezer for 15 minutes while you make the filling, and set a rack in the lower third of the oven. Preheat to 350F (175C).",
      "Toast the walnuts on a dry baking sheet for 6 to 8 minutes until fragrant, then chop roughly. Leave the oven on at 350F.",
      "Make the filling: In a bowl, whisk the 2 eggs until light. Whisk in the granulated sugar, brown sugar, 1/4 cup flour and 1/4 tsp salt until smooth. Whisk in the melted butter, vanilla and bourbon until glossy and fully combined.",
      "Scatter the toasted walnuts and chocolate chips evenly over the bottom of the chilled crust. Pour the filling over the top; it will settle around the nuts and chips and float some to the surface.",
      "Bake at 350F for 45 to 55 minutes, until the top is golden and crackly and the center is set with just a slight jiggle. If the crust edge browns too fast, shield it with foil after 30 minutes.",
      "Cool the pie on a rack for at least 1 hour so the gooey center firms up; it slices best barely warm or at room temperature.",
      "Serve in wedges with a dollop of lightly sweetened or unsweetened whipped cream. Store leftovers loosely covered at room temperature for up to 2 days."
    ],
    "totalTimeMinutes": 135,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 55,
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
      "Skip the homemade crust and use a refrigerated or frozen store-bought pie shell — the gooey filling is the star and it shaves both money and 40 minutes off your time.",
      "Buy walnut and chocolate-chip baking pieces from the bulk bin and only weigh out the cup you need instead of buying full bags.",
      "No bourbon on a student budget? Leave it out and bump the vanilla to 1 1/2 tsp — the pie is still authentic and delicious."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use pecans for a richer, more buttery Southern-style nut",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "bourbon",
        "swap": "Swap in 1 tsp extra vanilla extract for an alcohol-free pie",
        "savings": "saves on buying liquor"
      },
      {
        "forIngredientId": "semi-sweet-chocolate-chips",
        "swap": "Use dark-chocolate-chips for a deeper, less sweet chocolate hit",
        "savings": "similar cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 7,
      "carbs": 56,
      "fat": 33,
      "fiber": 2
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Southern)",
    "tags": [
      "baking",
      "dessert",
      "pie",
      "southern",
      "chocolate",
      "walnut",
      "bourbon",
      "holiday"
    ]
  },
  {
    "id": "bake2-grasshopper-pie",
    "name": "Classic Grasshopper Pie",
    "description": "The retro icebox classic done right: a crisp baked chocolate-cookie crust filled with an airy, pale-mint marshmallow-and-cream filling spiked with creme de menthe and white creme de cacao. The crust is baked to set it and deepen its flavor, then the no-cook filling is folded together and chilled until sliceable. Cool, minty, and just boozy enough.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "oreos",
        "quantity": 1,
        "note": "24 chocolate sandwich cookies (Oreos), for the crust"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp unsalted butter, melted"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "gelatin",
        "quantity": 1,
        "note": "1 packet (2 1/4 tsp) unflavored gelatin"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1/4 cup cold water, to bloom the gelatin"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large egg yolks"
      },
      {
        "ingredientId": "creme-de-menthe",
        "quantity": 3,
        "note": "3 tbsp green creme de menthe"
      },
      {
        "ingredientId": "rum",
        "quantity": 0.75,
        "note": "1 1/2 tbsp white creme de cacao (or substitute light rum)"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.25,
        "note": "1 1/4 cups cold heavy cream, whipped"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 oz dark chocolate, for shaved garnish"
      }
    ],
    "steps": [
      "Make the crust: Heat the oven to 350F (175C). Pulse the chocolate sandwich cookies (cream filling and all) into fine crumbs in a food processor, or crush them in a zip-top bag with a rolling pin. You should have about 2 cups of crumbs. Stir in the salt, then drizzle in the melted butter and mix until the crumbs look like wet sand.",
      "Press the crumbs firmly and evenly up the sides and across the bottom of a 9-inch pie plate, using the flat bottom of a measuring cup to compact them. Bake for 10 minutes to set the crust, then cool completely on a rack while you make the filling. The crust must be cold before filling goes in.",
      "Bloom the gelatin: Sprinkle the gelatin over the 1/4 cup cold water in a small bowl and let it sit 5 minutes until it looks wrinkled and absorbs the water.",
      "Make the custard base: In a saucepan, whisk the milk, sugar, and egg yolks together. Cook over medium-low heat, stirring constantly with a spatula, until it thickens slightly and coats the back of the spoon (about 170F), 4 to 6 minutes. Do not let it boil or the yolks will scramble. Off the heat, stir in the bloomed gelatin until fully dissolved.",
      "Strain the custard through a fine-mesh sieve into a large bowl. Stir in the creme de menthe, creme de cacao, and vanilla. The mixture will be pale green. Chill in the refrigerator, stirring every 10 minutes, until cool and thickened to the texture of raw egg whites but not set, 25 to 40 minutes. If it sets too far, warm the bowl briefly and whisk smooth.",
      "Whip the cream: In a chilled bowl, whip the cold heavy cream to soft-to-medium peaks. Fold about a third of the whipped cream into the cooled mint base to lighten it, then gently fold in the rest in two additions until no streaks remain, keeping the mixture airy.",
      "Pour the filling into the cooled crust and smooth the top into a gentle dome. Cover loosely and refrigerate at least 4 hours, preferably overnight, until fully set and sliceable.",
      "To serve, shave dark chocolate over the top with a vegetable peeler. Slice with a knife dipped in hot water and wiped between cuts for clean wedges."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 35,
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
      "Generic chocolate sandwich cookies cost a fraction of name-brand Oreos and crush into an identical crust, no one will know.",
      "Skip buying both liqueurs: a small bottle of green creme de menthe plus 1/2 tsp peppermint extract and a splash of vanilla gets you 90% of the way for half the cost.",
      "Buy heavy cream on the day it is marked down near its sell-by date, it whips perfectly and is often half price."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "Use white creme de cacao for the authentic version, or light rum, or 1/2 tsp vanilla plus 1 tbsp milk for alcohol-free",
        "savings": "Avoids buying a second liqueur bottle"
      },
      {
        "forIngredientId": "creme-de-menthe",
        "swap": "1/2 tsp peppermint extract plus 1 tbsp milk and 1-2 drops green food coloring",
        "savings": "Saves the cost of a liqueur bottle"
      },
      {
        "forIngredientId": "oreos",
        "swap": "Store-brand chocolate sandwich cookies or chocolate graham crackers",
        "savings": "Cheaper crust"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 5,
      "carbs": 36,
      "fat": 27,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-emerald-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "pie",
      "mint",
      "chocolate",
      "icebox",
      "make-ahead",
      "retro"
    ]
  },
  {
    "id": "bake2-hoosier-sugar-cream-pie",
    "name": "Hoosier Sugar Cream Pie",
    "description": "Indiana's official state pie — a silky, custard-like \"desperation pie\" with no eggs. A cream and sugar filling is thickened with flour, poured into a flaky single crust, dusted with cinnamon and dotted with butter, then baked until the top blisters golden and the center sets to a barely-jiggling, caramel-sweet cream. Old-fashioned, frugal, and genuinely one of the great American pies.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour, divided (1 1/4 cups for crust, ~4 tbsp for filling)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (8 tbsp) cold unsalted butter for the crust + ~5 tbsp for the filling and topping"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt, divided between crust and filling"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "3-4 tbsp ice water for the crust"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 2,
        "note": "2 cups heavy cream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 4,
        "optional": true,
        "note": "1/4 cup packed light brown sugar (for deeper caramel notes)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon, for dusting the top"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp freshly grated nutmeg, for dusting"
      }
    ],
    "steps": [
      "Make the crust: Whisk 1 1/4 cups flour with 1/2 tsp salt. Cut in 1/2 cup (8 tbsp) cold cubed butter with your fingers or a pastry cutter until the mixture looks like coarse crumbs with some pea-sized bits. Drizzle in 3-4 tbsp ice water, tossing just until the dough holds together when squeezed. Pat into a disk, wrap, and chill 30 minutes.",
      "Roll the chilled dough on a floured surface into a 12-inch round. Drape into a 9-inch pie plate, trim to a 1-inch overhang, tuck under, and crimp the edge. Freeze the shell for 15 minutes. Meanwhile, set a rack in the lower-middle of the oven and heat to 375F (190C).",
      "Blind-bake: Line the shell with parchment and fill with pie weights or dried beans. Bake 15 minutes, remove the parchment and weights, and bake 5-7 minutes more until the bottom looks dry and pale-gold. Set aside. Keep the oven at 375F.",
      "Make the filling: In a heavy saucepan off the heat, whisk together 1 cup sugar, the optional 1/4 cup brown sugar, ~4 tbsp flour, and 1/4 tsp salt until no lumps remain. Slowly whisk in the 2 cups heavy cream until smooth.",
      "Cook the cream: Set the pan over medium heat and cook, whisking constantly and scraping the corners, until it thickens to a loose pudding that coats the back of a spoon, about 8-12 minutes. Do not let it boil hard or it will break — keep it at a bare simmer. Off the heat, whisk in 2 tbsp butter and the 2 tsp vanilla until glossy.",
      "Pour the warm filling into the par-baked shell. Dot the surface with the remaining 3 tbsp butter cut into small bits, then dust evenly with 1 tsp cinnamon and the optional nutmeg.",
      "Bake at 375F for 25-30 minutes, until the top is browned and bubbling in spots and the center jiggles only slightly when nudged — it will look loose but sets as it cools. If the crust edge browns too fast, shield it with foil.",
      "Cool completely on a rack, at least 2-3 hours, so the filling fully sets to a sliceable cream. Serve at room temperature or lightly chilled."
    ],
    "totalTimeMinutes": 200,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 55,
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
      "A store-bought refrigerated pie crust saves money and time versus buying butter and flour just for the shell — the filling is the star here anyway.",
      "Replace up to half the heavy cream with whole milk; the pie stays creamy and frugal, exactly how Indiana farm cooks stretched it when cream was scarce.",
      "Skip the pie weights — line the shell with foil and fill with dried beans, rice, or sugar you already own, then save them in a jar to reuse for the next blind bake."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "Use cornstarch in the filling (about half the amount, ~2 tbsp) for an even silkier, more translucent set",
        "savings": "negligible"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Half heavy cream, half whole milk for a lighter, more traditional 'desperation pie' filling",
        "savings": "~$2 per pie"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "All granulated sugar (1 cup total) for the classic pale, pure-cream version with no caramel undertone",
        "savings": "negligible"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 3,
      "carbs": 41,
      "fat": 29,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "American (Midwestern)",
    "tags": [
      "baking",
      "pie",
      "dessert",
      "no-eggs",
      "custard",
      "midwestern",
      "old-fashioned",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-atlantic-beach-pie",
    "name": "Atlantic Beach Pie",
    "description": "The cult-favorite North Carolina coastal pie from Bill Smith of Crook's Corner: a buttery, salty saltine-cracker crust filled with a tart lemon-lime sweetened-condensed-milk custard set in the oven, then chilled and topped with lightly sweetened whipped cream and a shower of flaky sea salt. It tastes like key lime pie's sharper, saltier cousin — the salty-sweet contrast is the whole point.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "saltines",
        "quantity": 1.5,
        "note": "about 6 oz / 1.5 sleeves saltine crackers (roughly 60 crackers)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp granulated sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "one 14 oz can sweetened condensed milk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg yolks (save the whites for another use)"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 4,
        "note": "1/4 cup fresh lemon juice (about 2 lemons)"
      },
      {
        "ingredientId": "lime-juice-bottled",
        "quantity": 4,
        "note": "1/4 cup fresh lime juice (about 3-4 limes), for the classic lemon-lime blend"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "1 cup cold heavy whipping cream, for the topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "2 tbsp powdered sugar, for the whipped cream"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract, for the whipped cream"
      },
      {
        "ingredientId": "flaky-sea-salt",
        "quantity": 0.5,
        "note": "1/2 tsp flaky sea salt, for finishing"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Crush the saltines into coarse crumbs with some pea-sized pieces remaining — pulse in a food processor or smash in a zip-top bag. You want texture, not a fine powder.",
      "Stir the sugar into the cracker crumbs, then add the softened butter. Knead and mash everything together with your hands until the mixture holds together when squeezed, like wet sand. Press it firmly and evenly up the sides and across the bottom of a 9-inch pie plate. Chill the crust in the fridge for 15 minutes to firm up.",
      "Bake the crust for 18 minutes, until it is fragrant and lightly golden. Set it aside to cool slightly while you make the filling. Leave the oven on.",
      "Make the custard: whisk the egg yolks until smooth, then whisk in the sweetened condensed milk until fully blended. Whisk in the lemon juice and lime juice. The acid will instantly thicken the mixture to a pourable custard — this is the chemistry that sets the pie.",
      "Pour the filling into the warm crust and smooth the top. Bake for 16 minutes, until the custard is set around the edges but still has a slight jiggle in the center. Do not let it brown or crack.",
      "Cool the pie to room temperature, then refrigerate until thoroughly cold and set, at least 4 hours or overnight. A fully chilled pie slices cleanly.",
      "Just before serving, whip the cold heavy cream with the powdered sugar and vanilla to soft, billowy peaks. Spread or pipe it over the chilled pie.",
      "Finish with a generous sprinkle of flaky sea salt over the cream. Slice with a warm, dry knife and serve cold."
    ],
    "totalTimeMinutes": 320,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 34,
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
      "Saltines, butter, and a can of condensed milk are pantry-cheap — this is one of the most budget-friendly real pies you can make. Generic store-brand crackers work perfectly.",
      "Buy a small bag of lemons and limes when they go on sale; bottled juice is a fine stand-in here and keeps the cost down without hurting the bright flavor.",
      "Save the 4 leftover egg whites in the freezer for a future omelet or meringue so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "saltines",
        "swap": "Crush graham crackers instead for a sweeter, less salty crust (more like a classic key lime crust) — but you lose the signature salty bite.",
        "savings": "about the same"
      },
      {
        "forIngredientId": "lime-juice-bottled",
        "swap": "Use all lemon juice (1/2 cup total) if you don't have limes — Bill Smith's original is lemon-forward and this stays authentic.",
        "savings": "saves buying limes"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Top with a thawed tub of whipped topping instead of fresh whipped cream to save a step and a few dollars.",
        "savings": "a couple dollars"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 7,
      "carbs": 42,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-yellow-100",
    "cuisine": "American (Southern / North Carolina coastal)",
    "tags": [
      "baking",
      "pie",
      "dessert",
      "southern",
      "no-frills",
      "make-ahead",
      "citrus",
      "salty-sweet",
      "summer"
    ]
  },
  {
    "id": "bake2-sour-cream-coffee-cake",
    "name": "Classic Sour Cream Coffee Cake",
    "description": "A tender, buttery bundt-style coffee cake built on a generous amount of full-fat sour cream, which keeps the crumb impossibly moist and gives it a faint tang. A cinnamon-brown-sugar-walnut streusel is layered through the middle and over the top. This is the real deal — the kind of cake that gets better on day two and was made to be served with a pot of coffee, not in it.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour (for the cake batter)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar (for the batter)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 24,
        "note": "1 1/2 cups full-fat sour cream, room temperature"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed light brown sugar (for the streusel)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 4,
        "note": "4 tsp ground cinnamon (for the streusel)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "note": "1 cup walnuts, finely chopped (for the streusel)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "optional": true,
        "note": "1 cup powdered sugar (for the optional glaze)"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.125,
        "optional": true,
        "note": "about 2 tbsp milk, to thin the glaze"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Generously butter and flour a 10-cup (10-inch) bundt or tube pan, getting into every crevice so the cake releases cleanly.",
      "Make the streusel: in a small bowl, stir together the brown sugar, cinnamon, and finely chopped walnuts until evenly combined. Set aside.",
      "Whisk together the flour, baking powder, baking soda, and salt in a medium bowl. In a separate large bowl, beat the softened butter with the granulated sugar on medium-high speed for 3-4 minutes until pale and fluffy.",
      "Add the eggs one at a time, beating well after each, then beat in the vanilla. Scrape down the bowl. The mixture should look light and creamy.",
      "With the mixer on low, add the flour mixture in three additions, alternating with the sour cream in two additions, beginning and ending with the flour. Mix just until no streaks of flour remain — do not overmix, or the cake will turn tough.",
      "Spoon about half the batter into the prepared pan and smooth it level. Sprinkle two-thirds of the streusel evenly over the batter. Top with the remaining batter, spread gently to cover, then scatter the last of the streusel over the top.",
      "Bake for 50-60 minutes, until the cake is golden, springs back when lightly pressed, and a skewer inserted into the center comes out clean (a few moist crumbs are fine). If the top browns too fast, tent loosely with foil for the last 15 minutes.",
      "Cool in the pan on a wire rack for 20 minutes, then invert onto the rack to finish cooling. If glazing, whisk the powdered sugar with just enough milk to make a pourable glaze and drizzle over the warm cake. Serve slightly warm or at room temperature."
    ],
    "totalTimeMinutes": 85,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 55,
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
      "Skip the glaze entirely — the streusel top is plenty sweet, and that's one less ingredient. The cake stands on its own.",
      "Pecans or even no nuts at all work fine if walnuts are pricey; a streusel of just brown sugar and cinnamon is the budget-classic version.",
      "Buy butter and sour cream on sale and freeze the butter — this recipe uses a full cup, so stocking up when it's cheap pays off."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Full-fat plain Greek yogurt, cup for cup",
        "savings": "Often cheaper per ounce and may already be in your fridge"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Chopped pecans, or omit the nuts for a smooth cinnamon swirl",
        "savings": "Omitting nuts saves the most; pecans are a like-for-like swap"
      },
      {
        "forIngredientId": "butter",
        "swap": "Half butter, half neutral oil for an even moister, longer-keeping crumb",
        "savings": "Oil is cheaper than butter and extends shelf life"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 6,
      "carbs": 52,
      "fat": 22,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "coffee-cake",
      "dessert",
      "brunch",
      "make-ahead",
      "streusel",
      "classic"
    ]
  },
  {
    "id": "bake2-lane-cake",
    "name": "Classic Southern Lane Cake",
    "description": "The real-deal Lane Cake from 1898 Alabama: four tender layers of white butter cake lightened with stiff-beaten egg whites, sandwiched with a rich bourbon-laced egg-yolk custard packed with raisins, toasted pecans, and coconut, then cloaked in fluffy seven-minute boiled white frosting. A celebration cake worth the effort.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.25,
        "note": "3 1/4 cups all-purpose flour (sifted), for the cake layers"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3.5,
        "note": "3 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened, for the cake"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar, for the cake"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup whole milk, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract, for the cake"
      },
      {
        "ingredientId": "eggs",
        "quantity": 8,
        "note": "8 large egg whites for the cake (reserve the 8 yolks for the filling)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar, for the bourbon custard filling"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, for the filling"
      },
      {
        "ingredientId": "bourbon",
        "quantity": 2,
        "note": "1/4 cup (2 oz) bourbon whiskey, for the filling"
      },
      {
        "ingredientId": "raisins",
        "quantity": 1,
        "note": "1 cup raisins, finely chopped"
      },
      {
        "ingredientId": "pecans",
        "quantity": 8,
        "note": "1 cup (about 4 oz) pecans, toasted and chopped"
      },
      {
        "ingredientId": "coconut-flakes",
        "quantity": 1,
        "note": "1 cup sweetened shredded/flaked coconut"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract, for the filling"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large egg whites for the seven-minute frosting"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar, for the frosting"
      },
      {
        "ingredientId": "water",
        "quantity": 0.33,
        "note": "1/3 cup cold water, for the frosting"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 1,
        "note": "1 tbsp light corn syrup, for the frosting"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.25,
        "note": "1/4 tsp cream of tartar, for the frosting"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract, for the frosting"
      }
    ],
    "steps": [
      "Preheat oven to 350F. Butter four 9-inch round cake pans and line the bottoms with parchment (or bake in two batches with two pans). Sift together the 3 1/4 cups flour, baking powder, and salt; set aside. Separate 8 eggs, reserving the yolks in a bowl for the filling.",
      "Make the cake batter: Cream the 1 cup softened butter with 2 cups sugar until very pale and fluffy, 4-5 minutes. Add the milk and flour mixture alternately in three additions, beginning and ending with flour and mixing just until smooth; beat in 1 tsp vanilla. In a separate clean bowl, whip the 8 egg whites to stiff peaks, then gently fold them into the batter in three additions to keep it airy.",
      "Divide the batter evenly among the prepared pans and smooth the tops. Bake 18-22 minutes, until the layers spring back and a pick comes out clean. Cool in the pans 10 minutes, then turn out onto racks, peel off the parchment, and cool completely.",
      "Make the bourbon custard filling: In a heavy saucepan off the heat, whisk the 8 reserved egg yolks with 1 cup sugar until smooth, then add the 1/2 cup butter and 1/4 cup bourbon. Cook over medium-low heat, stirring constantly, until the mixture thickens enough to coat the back of a spoon and reads about 170F, 8-12 minutes; do not let it boil or the yolks will scramble.",
      "Off the heat, stir the chopped raisins, toasted pecans, coconut, and 1 tsp vanilla into the hot custard. Let it cool to room temperature, where it will thicken into a spreadable, jammy filling.",
      "Stack the cake: Place the first layer on a plate or stand and spread a third of the filling to the edges; repeat with the second and third layers. Top with the fourth layer. Leave the top and sides bare for now so they're ready for frosting.",
      "Make the seven-minute frosting: In a heatproof bowl set over (not touching) simmering water, combine the 2 egg whites, 1 1/2 cups sugar, 1/3 cup water, 1 tbsp corn syrup, and 1/4 tsp cream of tartar. Beat constantly with a hand mixer on high until the frosting holds stiff, glossy peaks, about 7 minutes. Remove from the heat and beat in 1 tsp vanilla.",
      "Working quickly while the frosting is fluffy, swirl it generously over the top and sides of the cake, pulling up decorative peaks. Let the cake stand at least a few hours (ideally overnight, loosely covered) so the boozy filling mellows and the layers soften before slicing."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 50,
    "cookTimeMinutes": 25,
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
      "Buy whole pecans in bulk or on sale and toast/chop them yourself instead of pricey pre-chopped bags.",
      "No bourbon on hand? A mini airplane bottle (1.7 oz) is cheap and almost exactly the 1/4 cup the filling needs.",
      "Bake in two pans in two batches instead of buying four cake pans, splitting each baked layer is unnecessary since the batter is divided four ways."
    ],
    "substitutions": [
      {
        "forIngredientId": "bourbon",
        "swap": "Equal amount of orange juice plus 1 tsp vanilla for a kid-friendly, alcohol-free filling",
        "savings": "Skips buying liquor"
      },
      {
        "forIngredientId": "pecans",
        "swap": "Toasted walnuts, measured the same way",
        "savings": "Walnuts often run cheaper per pound than pecans"
      },
      {
        "forIngredientId": "corn-syrup",
        "swap": "An equal amount of honey or simply a pinch more cream of tartar to stabilize the frosting",
        "savings": "Uses a pantry staple instead of a single-use bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 545,
      "protein": 7,
      "carbs": 68,
      "fat": 28,
      "fiber": 2
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Southern American",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "southern",
      "layer-cake",
      "holiday",
      "celebration"
    ]
  },
  {
    "id": "bake2-smith-island-cake",
    "name": "Smith Island Cake",
    "description": "Maryland's official state dessert: a towering cake of 8 to 10 paper-thin tender yellow layers stacked with a glossy cooked chocolate fudge frosting that firms up between every layer. Born on Smith Island in the Chesapeake Bay, the thin layers were said to survive the boat trip out to the watermen better than a tall fluffy cake. It is humble in ingredients but genuinely impressive on the plate, and the cooked fudge icing (not buttercream) is what makes it the real thing.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
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
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "5 large eggs, room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "1 cup whole milk, room temperature"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1,
        "note": "1 can (12 oz) evaporated milk, for the fudge frosting"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar, for the fudge frosting"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, for the fudge frosting"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 12,
        "note": "3/4 cup unsweetened cocoa powder, for the fudge frosting"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract, for the fudge frosting"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "pinch of salt, for the fudge frosting"
      }
    ],
    "steps": [
      "Make the batter: Heat the oven to 350F. Grease three 9-inch round cake pans (you will reuse them in batches). Whisk together the 2 1/2 cups flour, baking powder, and 1/2 tsp salt. In a large bowl, beat the 1 cup softened butter with the 2 cups sugar until pale and fluffy, 3 to 4 minutes. Beat in the eggs one at a time, then the 2 tsp vanilla. Add the flour mixture in three additions alternating with the 1 cup milk, beginning and ending with flour, mixing just until smooth.",
      "Bake the thin layers: For each layer, spread a scant 3/4 cup of batter very thinly and evenly to the edges of a greased pan (an offset spatula helps). Bake 8 to 10 minutes, just until the layer is set and barely golden; do not let it brown or dry out. The goal is 8 to 10 ultra-thin layers, so work in batches, cooling and re-greasing pans between rounds.",
      "Cool the layers: Run a knife around each layer, turn out onto a rack, and cool completely. Stack the cooled layers with parchment or wax paper between them so they do not stick while you finish the rest.",
      "Make the cooked fudge frosting: In a heavy saucepan, combine the evaporated milk, 1 1/2 cups sugar, 1/2 cup butter, 3/4 cup cocoa, and a pinch of salt. Cook over medium heat, stirring constantly, until the butter melts and the mixture comes to a gentle boil.",
      "Cook to a spreadable fudge: Let it boil gently, stirring often, for about 5 to 7 minutes until slightly thickened and glossy. Remove from heat and stir in the 2 tsp vanilla. Let the frosting cool and thicken, stirring now and then, until it is the consistency of thick fudge sauce that coats a spoon but is still spreadable; if it stiffens too much, rewarm gently.",
      "Stack the cake: Place one layer on a cake plate and spread a thin, even layer of warm fudge frosting (about 3 tablespoons) to the edges. Repeat, stacking all the layers and frosting each one, keeping the stack straight as it grows tall.",
      "Frost the outside: Pour and spread the remaining fudge frosting over the top and down the sides, smoothing it so it drips slightly and seals the whole cake. The frosting will set up firm and shiny as it cools.",
      "Set and serve: Let the cake stand at room temperature (or chill briefly) until the frosting firms between the layers, at least 1 hour. Slice into thin wedges with a sharp knife to show off all the layers."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 75,
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
      "Buy store-brand flour, sugar, and cocoa in bulk; this cake uses pantry staples, so the cocoa and a few eggs are really the only spend.",
      "No need for three matching pans: bake the thin layers one at a time in a single pan in batches, just re-grease and cool it between layers.",
      "Evaporated milk is cheap and shelf-stable; one can makes the whole cooked fudge frosting, no expensive chocolate bars or cream required."
    ],
    "substitutions": [
      {
        "forIngredientId": "evaporated-milk",
        "swap": "3/4 cup whole milk simmered down, or heavy cream",
        "savings": "use milk you already have instead of buying a can"
      },
      {
        "forIngredientId": "cocoa",
        "swap": "equal weight melted semi-sweet chocolate chips (reduce frosting sugar slightly)",
        "savings": "use chips on hand if you have no cocoa powder"
      },
      {
        "forIngredientId": "milk",
        "swap": "buttermilk for a slightly tangier, more tender crumb",
        "savings": "a splash of vinegar in milk makes a free buttermilk substitute"
      }
    ],
    "estimatedNutrition": {
      "calories": 540,
      "protein": 7,
      "carbs": 74,
      "fat": 26,
      "fiber": 2
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "chocolate",
      "layer-cake",
      "maryland",
      "chesapeake",
      "american",
      "classic",
      "crowd-pleaser"
    ]
  },
  {
    "id": "bake2-whoopie-pies",
    "name": "Classic Whoopie Pies",
    "description": "Two tender, cake-like chocolate cookies sandwiching a fluffy vanilla buttercream-marshmallow filling. This is the genuine New England / Pennsylvania Dutch classic: buttermilk and cocoa give the cakes their soft crumb and deep color, while the filling stays light thanks to whipped butter and a touch of marshmallow-style fluff built from powdered sugar.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 8,
        "note": "1/2 cup unsweetened cocoa powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1.25,
        "note": "1 1/4 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 16,
        "note": "1 cup packed light brown sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "buttermilk",
        "quantity": 1,
        "note": "1 cup buttermilk"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened (for filling)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 32,
        "note": "2 cups powdered sugar"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (for filling)"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.125,
        "note": "2 tbsp heavy cream"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.125,
        "note": "pinch of salt (for filling)"
      }
    ],
    "steps": [
      "Preheat the oven to 375 degrees F and line two baking sheets with parchment paper. In a medium bowl, whisk together the flour, cocoa powder, baking soda, and salt until evenly combined and no streaks of cocoa remain.",
      "In a large bowl, beat the softened butter and brown sugar with an electric mixer on medium-high until light and fluffy, about 3 minutes. Beat in the egg and 1 tsp vanilla until smooth, scraping down the bowl.",
      "On low speed, add the flour mixture in three additions alternating with the buttermilk, beginning and ending with the flour. Mix just until the batter is smooth and thick; do not overmix.",
      "Drop rounded tablespoons of batter onto the prepared sheets, spacing them about 2 inches apart to allow for spreading. Aim for even, mounded portions so the halves match up later.",
      "Bake for 10 to 12 minutes, until the tops spring back when lightly pressed and a toothpick comes out clean. Let the cakes cool on the sheet for 5 minutes, then transfer to a rack to cool completely before filling.",
      "Make the filling: beat the softened butter until creamy, then add the powdered sugar in batches with the 2 tsp vanilla, heavy cream, and pinch of salt. Whip on high for 2 to 3 minutes until light, fluffy, and spreadable.",
      "Pair up the cooled cakes by size. Spread or pipe a generous mound of filling onto the flat side of one cake, then gently press a second cake on top so the filling reaches the edges.",
      "Serve right away, or chill 20 minutes to set the filling. Store in an airtight container, separated by parchment, for up to 3 days."
    ],
    "totalTimeMinutes": 45,
    "prepTimeMinutes": 25,
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
      "No buttermilk? Stir 1 tbsp lemon juice or vinegar into 1 cup milk and let it sit 5 minutes - it curdles into a perfect substitute for pennies.",
      "Use a cookie scoop or just two spoons instead of buying a pastry bag; pressing the filling to the edges with the second cake works just as well.",
      "Buy cocoa powder in bulk rather than small tins - it is far cheaper per ounce and keeps for months in a sealed jar."
    ],
    "substitutions": [
      {
        "forIngredientId": "buttermilk",
        "swap": "1 cup milk soured with 1 tbsp lemon juice or vinegar",
        "savings": "Skips buying a full carton of buttermilk"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Whole milk or buttermilk in the filling",
        "savings": "Uses what you already have on hand"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "White sugar plus 1 tbsp molasses",
        "savings": "Avoids buying a separate bag of brown sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 3,
      "carbs": 52,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "chocolate",
      "classic",
      "new-england",
      "sandwich-cookie",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-snickerdoodle-bars",
    "name": "Snickerdoodle Bars",
    "description": "All the cozy charm of a snickerdoodle cookie in easy bar form: a soft, chewy brown-sugar-and-butter base scented with vanilla, leavened with cream of tartar and baking soda for that signature tang, and crowned with a generous cinnamon-sugar crust that crackles when you bite in. One bowl, one pan, no chilling or scooping.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour, spooned and leveled"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 2,
        "note": "2 tsp cream of tartar (gives the signature snickerdoodle tang)"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 1,
        "note": "1 tsp baking soda"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) unsalted butter, melted and slightly cooled"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 12,
        "note": "3/4 cup packed light brown sugar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar (for the dough)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, at room temperature"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp pure vanilla extract"
      },
      {
        "ingredientId": "sugar",
        "quantity": 3,
        "note": "3 tbsp granulated sugar (for the cinnamon-sugar topping)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon (for the topping)"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Line a 9x9-inch (or 8x8-inch for thicker bars) baking pan with parchment, leaving an overhang on two sides, and lightly butter the exposed edges.",
      "In a medium bowl, whisk together the flour, cream of tartar, baking soda, and salt. The cream of tartar and baking soda are what make these taste like snickerdoodles instead of plain blondies, so don't skip them.",
      "In a large bowl, whisk the melted butter with the brown sugar and 1/2 cup granulated sugar until smooth and glossy, about 1 minute. Whisk in the eggs one at a time, then the vanilla, beating until the batter looks thick and ribbony.",
      "Add the dry ingredients to the wet and fold with a spatula just until no dry streaks remain. The dough will be thick and a little sticky; do not overmix or the bars turn tough.",
      "Scrape the dough into the prepared pan and press it into an even layer with a lightly greased spatula or your fingertips, pushing it fully into the corners.",
      "Stir together the 3 tbsp granulated sugar and 2 tsp cinnamon, then sprinkle it evenly over the entire surface of the dough so the top is well coated.",
      "Bake for 24 to 28 minutes, until the edges are set and lightly golden and the center is puffed but still looks slightly soft; a toothpick inserted in the center should come out with a few moist crumbs, not wet batter. Avoid overbaking, which is the difference between chewy and dry.",
      "Cool the bars completely in the pan on a wire rack, at least 1 hour, so they finish setting. Lift out using the parchment overhang and cut into 16 squares with a sharp knife."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 26,
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
      "Salted butter works fine if that's what you have; just drop the added 1/2 tsp salt to about 1/4 tsp so the bars aren't too salty.",
      "No cream of tartar on hand? You can find it cheap in the spice aisle, but in a pinch swap the cream of tartar plus baking soda for 1.5 tsp baking powder. You lose a little tang but the bars still rise and bake up tender.",
      "Melt the butter right in your mixing bowl in the microwave to skip a dirty pot, and use the parchment sling so there's no pan to scrub."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Equal amount of melted coconut oil for a dairy-free version (texture stays chewy, flavor shifts slightly)",
        "savings": "Often cheaper per batch than butter"
      },
      {
        "forIngredientId": "brown-sugar",
        "swap": "Same amount of granulated sugar plus 1 tbsp molasses, or just all granulated sugar in a pinch",
        "savings": "Skip buying a second bag of sugar"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "1 tsp almond extract in place of 2 tsp vanilla for a bakery-style aroma",
        "savings": "A little almond extract goes a long way"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 2.5,
      "carbs": 29,
      "fat": 8,
      "fiber": 0.6
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "baking",
      "dessert",
      "bars",
      "cinnamon",
      "snickerdoodle",
      "one-bowl",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-galette-des-rois",
    "name": "Galette des Rois (Frangipane Almond Pithivier)",
    "description": "The classic French Twelfth Night cake: two discs of all-butter puff pastry sealed around a rum-scented almond frangipane, scored in the traditional sunburst pattern and baked to a deep lacquered shine. A dried bean (la fève) is hidden inside — whoever finds it is crowned king for the day. Frangipane here is the authentic blend of crème d'amande (almond cream) lightened with a little pastry-cream-style richness, kept to the proper near-equal ratio of butter, sugar, almond, and egg.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 2,
        "note": "2 sheets all-butter puff pastry, about 230 g each (use store-bought all-butter pâte feuilletée; closest catalog id for ready-rolled pastry)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (115 g) unsalted butter, very soft"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "a scant 1/2 cup plus 1 tbsp (115 g) granulated sugar"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 1,
        "note": "1 cup (115 g) almond flour / finely ground blanched almonds"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "2 whole eggs for the frangipane plus 1 egg for the glaze"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "1 tbsp cornstarch (stands in for the small spoon of flour that keeps frangipane from weeping)"
      },
      {
        "ingredientId": "rum",
        "quantity": 0.5,
        "optional": true,
        "note": "1 tbsp (15 ml) dark rum, traditional flavoring"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp almond extract, for a fuller almond aroma"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp powdered sugar, for the final shine glaze (dissolved in a splash of water)"
      }
    ],
    "steps": [
      "Make the frangipane: In a bowl, beat the soft butter with the granulated sugar and salt until creamy and pale. Beat in the almond flour and cornstarch until smooth, then beat in 2 whole eggs one at a time, followed by the vanilla, almond extract, and rum. Do not over-whip — you want it smooth and dense, not airy, or it will puff and crack. Scrape into a piping bag (or a zip bag with a corner snipped) and chill at least 1 hour, or overnight.",
      "Cut and chill the pastry: On a lightly floured surface, cut each puff pastry sheet into an even disc — use a plate or bowl as a guide, about 9 inches (23 cm) across. Slide both discs onto a parchment-lined tray and refrigerate 20-30 minutes. Cold pastry is essential for clean rise and crisp layers.",
      "Fill the galette: Place one disc on a fresh sheet of parchment. Brush a 1-inch (2.5 cm) bare border around the edge with water (not egg — egg here glues the layers shut and stops them rising). Pipe the chilled frangipane in a tight spiral over the center, staying inside the border, and smooth the top. Press the dried bean (la fève) in near the outer edge, where it is less likely to be cut.",
      "Seal: Lay the second disc over the top, aligning the edges. Press the bare border firmly with your fingertips, then seal decisively by pressing the back of a knife or your finger to flute/crimp all the way around. A tight seal keeps the frangipane from leaking and bursting.",
      "Chill, then trim and glaze: Refrigerate the assembled galette 30 minutes. Flip it over (the smoother underside becomes the top), and if you like, trim the edge to a clean scalloped circle. Brush the whole top with beaten egg, being careful not to drip down the cut sides (drips fuse the layers and block the rise). Chill 15 minutes, then brush a second thin coat of egg.",
      "Score and vent: With the tip of a sharp paring knife, score the classic curved sunburst (rosace) pattern from the center outward, cutting only shallowly into the top layer — never through to the filling. Poke 4-5 small steam vents through the top, including one in the center, so steam escapes instead of bursting the seams.",
      "Bake: Bake in an oven preheated to 400°F (200°C) for 30-40 minutes, until deeply golden and well puffed. If it is browning too fast before it has risen, drop to 375°F (190°C) for the final 10 minutes. The galette should feel light and sound hollow; an underbaked one will be soggy in the middle.",
      "Glaze and cool: In the last 2 minutes of baking — or straight after pulling it out — brush the hot top with a thin syrup of powdered sugar stirred into a splash of water, then return to the oven for 1-2 minutes (or use residual heat) to set it to a glossy lacquer. Cool on a rack at least 20 minutes. Serve warm or at room temperature, crown included. Reheat 5 minutes at 325°F to re-crisp."
    ],
    "totalTimeMinutes": 130,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 38,
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
      "Skip a fancy fève — a single dried bean, a whole almond, or a foil-wrapped coin works exactly as tradition intended and costs nothing.",
      "Almond flour is the priciest part: buy raw almonds in bulk and grind them with a tablespoon of the recipe's sugar in a food processor (the sugar stops them turning to butter).",
      "Make the frangipane and cut the pastry discs the night before; assembling and baking a chilled, ready galette the next day spreads out the work and gives a crisper bake."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "1 tbsp orange juice or a few drops more almond extract",
        "savings": "Uses what's on hand; keeps it alcohol-free and kid-friendly"
      },
      {
        "forIngredientId": "almond-flour",
        "swap": "Grind 1 cup whole raw almonds with a spoonful of the sugar",
        "savings": "Roughly half the cost of pre-ground almond flour"
      },
      {
        "forIngredientId": "pizza-dough",
        "swap": "A single sheet of puff pastry rolled thin and cut into two discs",
        "savings": "Stretches one package into the whole galette"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 7,
      "carbs": 34,
      "fat": 29,
      "fiber": 2
    },
    "emoji": "👑",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "dessert",
      "puff-pastry",
      "frangipane",
      "almond",
      "epiphany",
      "make-ahead",
      "holiday",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-saint-honor-cake",
    "name": "Classic Saint-Honoré Cake (Gâteau Saint-Honoré)",
    "description": "The crown jewel of French pâtisserie, named for the patron saint of bakers. A disc of puff pastry is piped with a ring of choux, baked, then crowned with caramel-dipped cream puffs filled with vanilla pastry cream. The whole thing is glued together with amber caramel and finished with billowing crème Chantilly piped in the traditional Saint-Honoré fan. It looks intimidating but every component is a fundamental technique worth learning.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "pizza-dough",
        "quantity": 1,
        "note": "1 sheet all-butter puff pastry (store-bought, thawed) for the base — or use a 10-oz block of pizza/pastry dough rolled thin"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup water (for the choux paste)"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) unsalted butter total — 4 tbsp for choux, 8 tbsp reserved; see steps"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1.5 cups all-purpose flour total — 1/2 cup for choux paste, 1/4 cup for pastry cream, remainder for dusting"
      },
      {
        "ingredientId": "eggs",
        "quantity": 7,
        "note": "7 large eggs — 3 whole for choux, 4 yolks for pastry cream"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt, divided between choux and pastry cream"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk for the pastry cream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar total — 1/2 cup for pastry cream, 1.5 cups for the caramel"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 4,
        "note": "4 tsp vanilla extract (or seeds of 2 vanilla pods), split between pastry cream and Chantilly"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "3 tbsp cornstarch to thicken the pastry cream"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "1 cup cold heavy cream for the crème Chantilly"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "3 tbsp powdered sugar for the Chantilly"
      }
    ],
    "steps": [
      "Make the puff base: Preheat the oven to 400 F (200 C). On a lightly floured surface, roll the puff pastry to about 1/8 inch thick and cut a 9-inch disc (use a plate as a guide). Transfer to a parchment-lined sheet, dock it all over with a fork, and chill while you make the choux.",
      "Make the choux paste: In a saucepan combine 1/2 cup water, 4 tbsp butter, and a pinch of salt; bring to a boil. Off heat, dump in 1/2 cup flour all at once and stir vigorously into a paste. Return to medium heat and stir 2-3 minutes until it forms a smooth ball and films the pan bottom. Cool 5 minutes, then beat in 3 eggs one at a time until the paste is glossy and falls in a thick ribbon.",
      "Pipe and bake: Scrape the choux into a piping bag with a 1/2-inch round tip. Pipe one ring of choux around the edge of the chilled puff disc, then pipe 16-18 small walnut-sized puffs onto a separate parchment-lined sheet. Brush everything lightly with a beaten egg, smoothing any peaks. Bake the base 25-30 minutes and the small puffs 20-25 minutes, until deep golden and hollow-sounding. Do not open the oven early or they will deflate. Cool completely, then poke a small hole in the bottom of each puff.",
      "Make the pastry cream (crème pâtissière): Heat 2 cups milk with half the sugar until steaming. Whisk 4 egg yolks with the remaining sugar, 3 tbsp cornstarch, 1/4 cup flour, and a pinch of salt until pale. Temper by whisking in the hot milk slowly, return to the pan, and cook over medium heat whisking constantly until thick and bubbling, about 2 minutes. Off heat whisk in 4 tbsp butter and 2 tsp vanilla. Strain, press plastic wrap to the surface, and chill until cold.",
      "Fill the puffs: Whisk the cold pastry cream smooth and load it into a piping bag with a small tip. Pipe pastry cream into each choux puff through the hole in its base until heavy and full. Set aside.",
      "Make the caramel: In a clean dry saucepan, cook 1.5 cups sugar with 4 tbsp water over medium-high heat without stirring, swirling occasionally, until it turns a deep amber. Immediately remove from heat. Working carefully (the caramel is extremely hot), dip the top of each filled puff into the caramel and set caramel-side-up to harden, giving each a glassy crown.",
      "Assemble: Dip the bottom of each caramel-topped puff into the caramel and glue them in a tight ring on top of the baked choux ring, all the way around the base. Drizzle any remaining caramel decoratively. Let everything set.",
      "Finish with Chantilly: Whip 1 cup cold heavy cream with 3 tbsp powdered sugar and 2 tsp vanilla to firm peaks. Fit a Saint-Honoré tip (or a large star tip) and pipe overlapping fan-shaped waves of cream to fill the center of the cake. Serve within a few hours — the caramel softens over time, so this cake is best the day it is made."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 120,
    "cookTimeMinutes": 60,
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
      "Store-bought all-butter puff pastry is far cheaper than making your own and gives nearly identical results — just look for 'all butter' on the label so the base doesn't taste waxy.",
      "Caramel is just sugar and water, so it costs pennies; make a little extra rather than risk running short mid-assembly, since reheating a second batch is a hassle.",
      "Skip a Saint-Honoré tip if you don't own one — a basic large star tip or even a zip-top bag with a corner cut piles the Chantilly on beautifully for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use the traditional crème chiboust (pastry cream lightened with Italian meringue) instead of Chantilly for a more old-school Saint-Honoré",
        "savings": "about the same cost"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Scrape in real vanilla bean seeds for visible specks and deeper flavor",
        "savings": "costs more, worth it for a showpiece"
      },
      {
        "forIngredientId": "pizza-dough",
        "swap": "Pipe a flat spiral disc of choux paste for the base instead of puff pastry, for an all-choux version",
        "savings": "saves the cost of pastry"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 8,
      "carbs": 58,
      "fat": 29,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "dessert",
      "pastry",
      "choux",
      "caramel",
      "showstopper",
      "classic"
    ]
  },
  {
    "id": "bake2-religieuse",
    "name": "Religieuse au Chocolat",
    "description": "The classic Parisian \"little nun\" — two stacked choux puffs, the large body and small head, each filled with chocolate crème pâtissière, glazed in glossy chocolate fondant, and joined by a piped buttercream collar. This is the real pâtisserie version: a proper pâte à choux baked until hollow and crisp, a from-scratch pastry cream thickened with egg yolks and cornstarch, and a fondant-style glaze. It takes patience but every component is achievable in a home kitchen, and the result looks and tastes like it came from a Left Bank patisserie.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup water (for the choux)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk (for the choux)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, cubed, for the choux"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 tbsp sugar (for the choux)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt (for the choux)"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour (for the choux)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, plus 1 more if needed, for the choux"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk (for the chocolate crème pâtissière)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg yolks (for the crème pâtissière)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup sugar (for the crème pâtissière)"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "1/4 cup cornstarch (for the crème pâtissière)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (for the crème pâtissière)"
      },
      {
        "ingredientId": "dark-chocolate",
        "quantity": 5,
        "note": "5 oz dark chocolate (about 70%), chopped, for the crème pâtissière"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter (for the crème pâtissière)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 16,
        "note": "1 cup powdered sugar (for the chocolate fondant glaze)"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 2,
        "note": "2 tbsp cocoa powder (for the chocolate fondant glaze)"
      },
      {
        "ingredientId": "corn-syrup",
        "quantity": 1,
        "note": "1 tbsp corn syrup, for glossy fondant glaze"
      },
      {
        "ingredientId": "water",
        "quantity": 0.125,
        "note": "about 2 tbsp hot water, to loosen the glaze"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp unsalted butter, softened, for the buttercream collar"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered sugar (for the buttercream collar)"
      },
      {
        "ingredientId": "cocoa",
        "quantity": 1,
        "note": "1 tbsp cocoa powder (for the buttercream collar)"
      }
    ],
    "steps": [
      "Make the crème pâtissière first so it can chill. Warm 2 cups whole milk in a saucepan until steaming. In a bowl, whisk 4 egg yolks, 1/2 cup sugar, and 1/4 cup cornstarch to a smooth paste. Slowly pour the hot milk into the yolks while whisking, then return everything to the pan. Cook over medium heat, whisking constantly, until it boils and thickens to a pudding (about 1-2 minutes of bubbling). Off the heat, whisk in the 5 oz chopped dark chocolate, 2 tbsp butter, and 2 tsp vanilla until smooth. Press plastic wrap directly onto the surface and refrigerate at least 2 hours.",
      "Make the choux. Preheat the oven to 425F and line two baking sheets with parchment. In a saucepan, bring 1/2 cup water, 1/2 cup milk, 1 stick cubed butter, 1 tbsp sugar, and 1/2 tsp salt to a full boil. Dump in 1 cup flour all at once and stir hard with a wooden spoon until it forms a smooth ball that pulls from the sides, then keep stirring 2 more minutes to dry the dough out (a thin film should form on the pan bottom).",
      "Transfer the dough to a bowl and let it cool 5 minutes. Beat in the eggs one at a time, fully incorporating each before adding the next. Stop when the dough is glossy and falls from the spoon in a slow V-shaped ribbon — you may not need the 5th egg. Spoon into a piping bag fitted with a plain round tip.",
      "Pipe 8 large mounds about 2 inches wide for the bodies, and 8 small mounds about 1 inch wide for the heads, spacing them apart. Wet a fingertip and gently pat down any peaks so they bake evenly. Bake at 425F for 10 minutes, then drop the oven to 375F and bake 15-20 more minutes until deeply golden and firm — do not open the door early or they will collapse. The small heads bake faster, so pull them when set.",
      "Cool the puffs completely, then pierce a small hole in the base of each with the piping tip. Whisk the chilled chocolate crème pâtissière smooth and transfer to a piping bag. Fill each body and each head from the bottom until heavy, then set aside.",
      "Make the fondant glaze. Sift 1 cup powdered sugar with 2 tbsp cocoa into a bowl. Stir in 1 tbsp corn syrup and just enough hot water (start with 1 tbsp, add by the teaspoon) to make a thick but pourable, shiny glaze that coats a spoon. Dip the top of each puff into the glaze, letting excess drip off, and set right-side up.",
      "Make the buttercream collar. Beat 6 tbsp softened butter with 1/2 cup powdered sugar and 1 tbsp cocoa until light and fluffy. Spoon into a piping bag fitted with a small star tip.",
      "Assemble each religieuse: set a small glazed head on top of a large glazed body, then pipe a ring of little buttercream rosettes around the seam where they meet to form the nun's collar. Chill 20 minutes to set before serving the same day."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 30,
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
      "Skip the corn syrup in the glaze and just use powdered sugar, cocoa, and water — the shine is slightly less but the flavor is identical and it costs nothing extra.",
      "Use regular semi-sweet chocolate chips instead of bar dark chocolate for the pastry cream; they melt fine and are usually cheaper per ounce.",
      "Make the choux and pastry cream a day ahead — the puffs keep in an airtight tin and the cream in the fridge, so you only assemble and glaze on serving day with no wasted ingredients."
    ],
    "substitutions": [
      {
        "forIngredientId": "dark-chocolate",
        "swap": "semi-sweet chocolate chips",
        "savings": "Often $1-2 cheaper per batch than a baking bar"
      },
      {
        "forIngredientId": "corn-syrup",
        "swap": "honey or just extra water",
        "savings": "Use a pantry staple instead of buying a bottle"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "2% milk",
        "savings": "Use what's already in the fridge; the cream still sets fine"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 9,
      "carbs": 52,
      "fat": 26,
      "fiber": 3
    },
    "emoji": "🍫",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "french",
      "pastry",
      "choux",
      "chocolate",
      "patisserie",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-tarte-au-citron",
    "name": "Tarte au Citron",
    "description": "The classic French lemon tart: a crisp, buttery pâte sucrée shell filled with a silky, intensely tangy lemon cream baked just until set. No meringue, no fillers — just real lemon, eggs, butter, sugar and cream, the way a Parisian pâtissier would make it. Bright, smooth, and elegant.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour (for the pâte sucrée shell)"
      },
      {
        "ingredientId": "butter",
        "quantity": 18,
        "note": "1 1/8 cups (2 1/4 sticks) unsalted butter total — 7 tbsp cold and cubed for the crust, 11 tbsp softened for the lemon cream"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered sugar (for the crust)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar (for the lemon cream)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs — 1 for the crust, 3 whole eggs plus context below for the filling"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt, split between crust and filling"
      },
      {
        "ingredientId": "lemon",
        "quantity": 4,
        "note": "4 lemons — for about 2/3 cup fresh juice and the zest of 3"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "2 tsp finely grated lemon zest (use the zest from your fresh lemons; bottled zest only if needed)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract (for the crust)"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0,
        "optional": true,
        "note": "optional: a splash of heavy cream to loosen the finished lemon cream if very thick"
      }
    ],
    "steps": [
      "Make the pâte sucrée: In a bowl, rub 7 tbsp cold cubed butter into the flour, powdered sugar, and 1/4 tsp salt until sandy. Mix in 1 egg and 1/2 tsp vanilla just until a dough forms. Flatten into a disc, wrap, and chill at least 1 hour.",
      "Roll the chilled dough on a floured surface to about 1/8 inch thick and line a 9-inch tart pan, pressing into the corners and trimming the edges. Prick the base all over with a fork and freeze 20 minutes. Preheat the oven to 350°F (175°C).",
      "Blind bake: Line the shell with parchment and fill with dried beans or pie weights. Bake 18 minutes, then remove the weights and parchment and bake 8–10 minutes more until the base is dry and pale gold. Set aside; lower the oven to 300°F (150°C).",
      "Make the lemon cream: Zest 3 lemons and juice all 4 to get about 2/3 cup juice. In a heatproof bowl, whisk together 3 whole eggs, 3/4 cup granulated sugar, the lemon zest, the lemon juice, and a pinch of salt.",
      "Set the bowl over a pan of barely simmering water and whisk constantly until the mixture thickens to a custard that coats the back of a spoon, about 8–10 minutes (170°F / 77°C). Do not let it boil.",
      "Off the heat, cool the curd to about 140°F (60°C), then blend in 11 tbsp softened butter a little at a time — using an immersion blender if you have one — until completely smooth and glossy. Loosen with a splash of cream only if it seems too stiff.",
      "Pour the warm lemon cream into the baked tart shell and smooth the top. Bake at 300°F (150°C) for 8–10 minutes, just until the filling is set at the edges with a faint wobble in the center.",
      "Cool the tart completely at room temperature, then refrigerate at least 3 hours until fully set. Serve chilled or barely cool, optionally dusted with a little powdered sugar at the very last moment."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 40,
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
      "Buy whole lemons loose rather than pre-juiced — fresh juice and zest are non-negotiable for real tarte au citron, and 4 lemons cost less than a bottle of curd.",
      "No pie weights? Use a fistful of dried beans or rice on parchment; save and reuse them for blind baking again and again.",
      "Make it a day ahead — the tart actually sets better overnight in the fridge, so it's a perfect low-cost dessert to prep before a dinner."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon",
        "swap": "Use 3 lemons plus 1 lime for a slightly more aromatic, floral citrus edge",
        "savings": "about the same"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar in a blender until fine, or just use granulated for a slightly more rustic crust",
        "savings": "saves buying a separate bag"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Swap for an extra 1/2 tsp lemon zest in the crust for a more citrus-forward shell",
        "savings": "uses what you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 5,
      "carbs": 34,
      "fat": 30,
      "fiber": 1
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "french",
      "tart",
      "lemon",
      "classic",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-flan-p-tissier",
    "name": "Flan Pâtissier (Classic French Custard Tart)",
    "description": "The real Parisian pastry-shop flan: a crisp all-butter shortcrust shell cradling a deep, trembling vanilla custard thickened with egg and cornstarch and baked until the top is burnished and just-set. No gelatin, no shortcuts — just milk, cream, eggs, sugar, and real vanilla, the way a French boulangerie makes it. It slices clean, holds a tall wobble, and is even better the next day straight from the fridge.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.75,
        "note": "1 3/4 cups all-purpose flour, for the shortcrust shell"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cubed, for the shell"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp granulated sugar, for the shell"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt, for the shell"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs total — 1 for the shell, 3 whole eggs for the custard"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 3.25,
        "note": "3 1/4 cups (about 800 ml) whole milk, for the custard"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.75,
        "note": "3/4 cup (about 180 ml) heavy cream, for the custard"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, for the custard"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 8,
        "note": "1/2 cup (about 70 g) cornstarch, to set the custard"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 3,
        "note": "1 tbsp pure vanilla extract (or seeds of 1 vanilla bean)"
      }
    ],
    "steps": [
      "Make the shell: Rub or pulse the flour, salt, and 2 tbsp sugar with the cold cubed butter until sandy. Add 1 egg and mix just until a dough forms — add 1 tbsp cold water only if needed. Flatten into a disc, wrap, and chill at least 30 minutes (this prevents shrinkage).",
      "Roll the chilled dough into a circle about 3 inches wider than a 9-inch springform or deep tart pan. Press it into the buttered pan, easing it up the sides to a full 1 1/2 inches tall — a flan needs deep walls to hold the custard. Trim the edges, prick the base, and chill the lined pan in the freezer for 20 minutes while you make the custard.",
      "Make the custard base: In a bowl whisk together the 3 whole eggs, 3/4 cup sugar, and the cornstarch until smooth and pale, with no dry lumps. Whisk in the heavy cream to loosen it.",
      "In a saucepan, bring the whole milk and vanilla just to a simmer (small bubbles at the edge). Pour about a third of the hot milk into the egg mixture in a thin stream while whisking hard to temper, then pour everything back into the saucepan.",
      "Cook the custard over medium heat, whisking constantly and reaching into the corners, until it thickens dramatically and the first big bubbles plop on the surface — about 2 to 4 minutes. Keep whisking 30 seconds more so the cornstarch fully cooks and loses its raw taste; it should be thick like pudding.",
      "Pour the hot custard into the chilled raw shell and smooth the top with a spatula. Pouring it hot helps the surface caramelize in the oven and keeps the base from going soggy.",
      "Bake in an oven preheated to 350°F (180°C) for 40 to 50 minutes, until the top is deeply golden-brown with darker patches and the center has only a faint wobble. Don't underbake — the color is the flavor.",
      "Cool completely at room temperature, then refrigerate at least 4 hours (ideally overnight) so the custard sets firm and slices cleanly. Serve cold, cut into thick wedges."
    ],
    "totalTimeMinutes": 350,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 50,
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
      "Skip the cream entirely and use a full 4 cups of whole milk — traditional bakery flan is often all-milk, and it still sets perfectly thanks to the cornstarch and eggs.",
      "Make the shortcrust from scratch as written instead of buying a tart shell; flour, butter, and one egg cost a fraction of a pre-made crust.",
      "A splash of cheap vanilla extract goes a long way here — you don't need an expensive vanilla bean to get a great-tasting flan."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Replace with an equal amount of whole milk for a lighter, traditional all-milk flan",
        "savings": "Saves the cost of a carton of cream"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Use the scraped seeds of 1 vanilla bean for a more aromatic, fleck-speckled custard",
        "savings": "Costs more, but no extract needed"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Use an equal volume of custard powder or substitute with 6 tbsp flour for the thickener",
        "savings": "Pantry-friendly, no extra purchase"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 8,
      "carbs": 45,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "custard",
      "french",
      "make-ahead",
      "vanilla",
      "tart"
    ]
  },
  {
    "id": "bake2-g-teau-basque",
    "name": "Gâteau Basque",
    "description": "The classic cake of the French Basque country: two layers of rich, almost cookie-like buttery short pastry enclosing a thick vanilla-and-rum pastry cream, baked until deeply golden and traditionally scored with a crosshatch or Basque cross on top. Crisp at the edges, tender within, and not too sweet — the version a Basque grandmother would actually make.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour (for the pastry)"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened, for the pastry"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar for the pastry"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 whole eggs for the pastry, plus 1 yolk reserved separately for the egg wash"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 0.25,
        "note": "1/4 cup almond flour (traditional in many Basque versions)"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract (split between pastry and cream)"
      },
      {
        "ingredientId": "rum",
        "quantity": 1,
        "note": "1 oz (2 tbsp) dark rum for the pastry cream"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk for the pastry cream"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "4 tbsp cornstarch to set the pastry cream"
      }
    ],
    "steps": [
      "Make the pastry cream first so it can chill: in a saucepan, warm the whole milk with 1/2 cup of the sugar (8 tbsp from the total) until steaming but not boiling. In a bowl, whisk the 2 whole eggs' worth of yolks-and-a-little-effort — here whisk 1 reserved yolk plus 1 whole egg with the cornstarch and a pinch of the sugar until pale. Temper by whisking in the hot milk a little at a time, then return everything to the pan.",
      "Cook the cream over medium heat, whisking constantly, until it thickens and boils for a full 60 seconds (this cooks out the cornstarch). Off heat, whisk in 1 tsp vanilla and the dark rum. Scrape into a bowl, press plastic wrap directly onto the surface, and refrigerate until cold and set, at least 2 hours.",
      "Make the pastry: cream the softened butter with the remaining sugar until light, 3-4 minutes. Beat in 1 whole egg, the lemon zest, and 1 tsp vanilla. In a separate bowl whisk together the flour, almond flour, baking powder, and salt, then add to the butter mixture and mix just until a soft, sticky dough forms. Divide into two discs (one slightly larger), wrap, and chill at least 1 hour.",
      "Heat the oven to 350°F (175°C). Butter a 9-inch springform or cake pan. Roll the larger dough disc between sheets of parchment into a circle that lines the bottom and comes about 1 inch up the sides; press it into the pan, patching as needed — this dough is forgiving.",
      "Whisk the chilled pastry cream smooth, then spread it evenly over the base, leaving a 1/2-inch border of bare pastry around the edge so the two layers can seal.",
      "Roll the second disc into a 9-inch circle for the lid. Lay it over the cream, then pinch the top and bottom edges of pastry together to seal. Brush the top with the reserved egg yolk beaten with a teaspoon of water.",
      "Score the traditional pattern: drag a fork in a crosshatch across the top, or trace a Basque cross (lauburu). Prick a few small steam vents through the lid with a skewer.",
      "Bake 40-50 minutes, until deeply golden brown all over (a pale gâteau basque is underbaked). If the top colors too fast, tent loosely with foil for the last 10 minutes.",
      "Cool completely in the pan, then at least 4 hours or overnight before slicing — the cake firms up and the flavors meld. Serve at room temperature, dusted with nothing or just a whisper of powdered sugar."
    ],
    "totalTimeMinutes": 200,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 50,
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
      "Skip the rum and use an extra 1/2 tsp vanilla — the cream still tastes classic for a fraction of the cost.",
      "Almond flour is the priciest item; you can leave it out and use 1/4 cup more all-purpose flour. The pastry will be a touch less tender but still authentic.",
      "Buy whole milk and eggs as singles from the bulk/dairy aisle; this recipe uses pantry staples otherwise, so the per-serving cost stays very low for 10 slices."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "1 tsp extra vanilla extract plus a splash of orange juice",
        "savings": "skips buying a bottle of rum"
      },
      {
        "forIngredientId": "almond-flour",
        "swap": "an equal amount of all-purpose flour",
        "savings": "almond flour costs 3-4x as much as regular flour"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "2% milk plus 1 extra tbsp butter melted into it",
        "savings": "use the milk you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 420,
      "protein": 7,
      "carbs": 48,
      "fat": 22,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Basque (French)",
    "tags": [
      "baking",
      "dessert",
      "french",
      "basque",
      "pastry",
      "make-ahead",
      "pastry-cream"
    ]
  },
  {
    "id": "bake2-tarte-aux-pommes",
    "name": "Tarte aux Pommes (Classic French Apple Tart)",
    "description": "The real French apple tart: a crisp, buttery pâte brisée shell spread with a thin layer of homemade apple compote, topped with paper-thin apple slices fanned into rosettes, baked until the edges caramelize, then finished with a glossy apricot glaze. Rustic precision, no shortcuts.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour, for the pâte brisée"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cubed, for the crust"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 tbsp sugar for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg yolk (reserve white) to bind the dough"
      },
      {
        "ingredientId": "water",
        "quantity": 0.1875,
        "note": "3 tbsp ice water, added gradually"
      },
      {
        "ingredientId": "apple",
        "quantity": 5,
        "note": "5 firm-tart apples total (e.g. Granny Smith / Honeycrisp): 2 for the compote, 3 for the topping"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 5.33,
        "note": "1/3 cup sugar, split between the compote and sprinkling on top"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter: 1 tbsp for the compote, 1 tbsp dotted over the topping"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "1 lemon, juiced, to keep apples from browning and brighten the compote"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract for the compote"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tsp cinnamon (optional, lightly used in the compote)"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 3,
        "note": "3 tbsp apricot jam, warmed and strained, for the glaze"
      }
    ],
    "steps": [
      "Make the pâte brisée: In a bowl, whisk the flour, salt, and 1 tbsp sugar. Cut in the cold cubed butter with your fingertips or a pastry cutter until the mixture looks like coarse crumbs with some pea-sized bits remaining. Whisk the egg yolk into the ice water, then drizzle it in, tossing with a fork, until the dough just holds together when squeezed. Do not overwork. Pat into a disk, wrap, and chill at least 30 minutes.",
      "Make the apple compote: Peel, core, and dice 2 apples. Cook in a saucepan with 1 tbsp butter, about 2 tbsp of the sugar, half the lemon juice, the vanilla, and optional cinnamon over medium heat, stirring, for 10-12 minutes until soft. Mash to a chunky purée and let cool. It should be thick, not watery.",
      "Roll and blind-prep the crust: On a floured surface, roll the chilled dough into a 12-inch round about 1/8 inch thick. Drape into a 9-inch tart pan, press into the edges, and trim. Prick the base all over with a fork and chill 15 minutes while the oven heats to 375°F (190°C).",
      "Slice the topping apples: Peel, halve, and core the remaining 3 apples. Slice into very thin half-moons (about 1/8 inch). Toss with the remaining lemon juice to prevent browning.",
      "Assemble: Spread the cooled compote in an even layer over the chilled crust. Arrange the apple slices in tight, overlapping concentric circles, fanning them like rose petals from the outer edge inward. Pack them snugly, as they shrink while baking.",
      "Finish the top: Sprinkle the remaining sugar evenly over the apples and dot with the remaining 1 tbsp butter, broken into small pieces, so the slices caramelize and the tips brown.",
      "Bake at 375°F (190°C) for 45-55 minutes, until the crust is deep golden, the apple edges are tinged brown, and the slices are tender. If the rim browns too fast, shield it loosely with foil.",
      "Glaze and serve: Warm the apricot jam with a splash of water until fluid, strain out any chunks, and brush a thin, even coat over the warm apples for a bakery shine. Cool to just warm or room temperature before slicing. Serve plain or with crème fraîche."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 55,
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
      "Granny Smith apples are usually the cheapest baking apple and hold their shape best — buy a 3 lb bag and use the bruised ones for the compote.",
      "Skip a fancy tart pan: a pie plate works fine, and you can press the dough in by hand instead of rolling to save flour and cleanup.",
      "No apricot jam? Any clear-ish jam or even a sugar-water syrup brushed on gives a similar shine for pennies."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "marmalade or jam thinned with a little water",
        "savings": "use what's already in the fridge"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant-butter for a dairy-free crust",
        "savings": "comparable cost, vegan-friendly"
      },
      {
        "forIngredientId": "apple",
        "swap": "pear for a softer, floral tarte aux poires",
        "savings": "use whatever stone/pome fruit is on sale"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 3,
      "carbs": 41,
      "fat": 13,
      "fiber": 3
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "french",
      "apple",
      "tart",
      "pastry",
      "fruit",
      "classic"
    ]
  },
  {
    "id": "bake2-chouquettes",
    "name": "Chouquettes (French Pearl Sugar Puffs)",
    "description": "Light, hollow choux pastry puffs studded with crunchy pearl sugar — the quintessential French boulangerie snack. Eggy, crisp on the outside, airy within, and sold by the bagful in every patisserie. No filling, no fuss: just well-made pâte à choux, an egg wash, and a generous shower of sugar before baking.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup water"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.25,
        "note": "1/4 cup whole milk"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, cubed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 0.33,
        "note": "1 tsp sugar (for the dough)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.75,
        "note": "3/4 cup plus 2 tbsp all-purpose flour"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs (3 for dough, 1 for egg wash)"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 5.33,
        "note": "1/3 cup pearl sugar (or turbinado as the closest catalog match), for topping"
      }
    ],
    "steps": [
      "Preheat the oven to 425F (220C) and line two baking sheets with parchment. In a medium saucepan, combine the water, milk, cubed butter, the 1 tsp sugar, and salt. Heat over medium until the butter is fully melted and the mixture reaches a rolling boil — don't let it boil long enough to evaporate liquid before the butter melts.",
      "Take the pan off the heat and dump in all the flour at once. Stir vigorously with a wooden spoon until a smooth dough forms with no dry streaks. Return to medium heat and cook, stirring and pressing the dough constantly, for 2 to 3 minutes to dry it out — it should pull away from the sides and a thin film will coat the bottom of the pan.",
      "Transfer the dough to a bowl (or stand mixer with paddle) and let it cool for 3 to 4 minutes, stirring to release steam, until just warm to the touch. If you add eggs to dough that is too hot, they will scramble.",
      "Beat in 3 of the eggs one at a time, fully incorporating each before adding the next. The dough will look broken at first, then come back together. The finished paste should be glossy and form a slow-falling V or ribbon when you lift the spoon — if it is still stiff, beat in a teaspoon or two of the remaining beaten egg.",
      "Fit a piping bag with a large round tip (about 1/2 inch) and pipe 1.25-inch mounds, spaced 2 inches apart. With a wet fingertip, gently press down any peaks so they don't scorch. Beat the remaining egg and lightly brush the top of each mound, then shower generously with pearl sugar and tip off any excess.",
      "Bake at 425F for 10 minutes, then — without opening the door — lower the heat to 375F (190C) and bake 15 to 20 minutes more, until deeply golden, dry, and firm. They must be well-colored or they will collapse.",
      "Turn off the oven, crack the door open with a wooden spoon, and let the chouquettes sit inside for 5 minutes to dry out and set their structure.",
      "Cool on a rack and eat the same day — chouquettes are at their best within a few hours of baking, while the shells are still crisp."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 30,
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
      "Pearl sugar is pricey and hard to find — crushed sugar cubes or turbinado/raw sugar give the same crunch for a fraction of the cost.",
      "No piping bag? Use a zip-top freezer bag with a corner snipped off, or just spoon small mounds with two teaspoons.",
      "Eggs, flour, butter, and sugar are the whole list — this is one of the cheapest patisserie treats you can make, with no special filling or chocolate needed."
    ],
    "substitutions": [
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Crushed sugar cubes or coarse raw sugar for the traditional crackly topping",
        "savings": "Avoids buying specialty Belgian pearl sugar; saves a few dollars"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "All water (1/2 cup + 1/4 cup) for a slightly crisper, more rustic shell",
        "savings": "Uses one less ingredient"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter for a dairy-light version (use all-water for the liquid too)",
        "savings": "Comparable cost; handy if avoiding dairy"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 5,
      "carbs": 20,
      "fat": 13,
      "fiber": 0.5
    },
    "emoji": "🥮",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "french",
      "choux-pastry",
      "snack",
      "dessert",
      "pate-a-choux"
    ]
  },
  {
    "id": "bake2-tarte-bourdaloue",
    "name": "Tarte Bourdaloue (Almond Pear Tart)",
    "description": "The classic Parisian almond-pear tart, named for the rue Bourdaloue where it was created in the 1850s. A crisp pâte sucrée shell is filled with rich almond frangipane, crowned with fanned poached pear halves, then baked until the cream sets golden and souffléd around the fruit. Finished with a glossy apricot glaze and toasted sliced almonds. Faithful to the original: real almond flour in the frangipane, a touch of rum and almond extract, and pears that sink slightly into the cream as it bakes.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.25,
        "note": "1 1/4 cups all-purpose flour (for the pâte sucrée)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) cold unsalted butter, cubed, for the crust"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered sugar (for the crust)"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 0.25,
        "note": "1/4 cup almond flour (adds tenderness to the crust)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs total: 1 for the crust, 2 for the frangipane"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) softened unsalted butter, for the frangipane"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar (for the frangipane)"
      },
      {
        "ingredientId": "almond-flour",
        "quantity": 1,
        "note": "1 cup almond flour (the heart of the frangipane)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.125,
        "note": "2 tbsp all-purpose flour (to stabilize the frangipane)"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "rum",
        "quantity": 1,
        "note": "1 oz (2 tbsp) dark rum, traditional in frangipane"
      },
      {
        "ingredientId": "pear",
        "quantity": 3,
        "note": "3 ripe but firm pears (Bartlett or Bosc), peeled, halved, cored"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "1 lemon, juiced, to keep the pears from browning"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 3,
        "note": "3 tbsp apricot jam, warmed, for the finishing glaze"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.25,
        "note": "1/4 cup slivered or sliced almonds, for the top"
      }
    ],
    "steps": [
      "Make the pâte sucrée: Pulse 1 1/4 cups flour, the powdered sugar, 1/4 cup almond flour, and salt in a food processor. Add the cold cubed butter and pulse to coarse crumbs. Add 1 egg and pulse just until the dough clumps. Turn out, press into a disk, wrap, and chill at least 1 hour.",
      "Roll the chilled dough on a floured surface to about 1/8 inch and line a 9-inch tart pan, pressing into the corners and trimming the edges. Prick the base with a fork and freeze 15 minutes. Meanwhile, preheat the oven to 350°F (175°C).",
      "Blind-bake the shell: line with parchment and pie weights (or dried beans), bake 15 minutes, remove the weights and parchment, and bake 5 minutes more until the base is pale and dry. Set aside to cool slightly. Leave the oven at 350°F.",
      "Make the frangipane: cream the softened butter and granulated sugar until light, 2-3 minutes. Beat in the 2 remaining eggs one at a time, then mix in 1 cup almond flour, 2 tbsp flour, the almond extract, vanilla, and rum until smooth and fluffy.",
      "Toss the pear halves with the lemon juice. Spread the frangipane evenly into the cooled shell. Slice each pear half crosswise into thin segments, keeping the shape, then gently fan and press them cut-side down into the cream, stems pointing toward the center, arranged like spokes.",
      "Scatter the slivered almonds over the exposed frangipane between the pears. Bake at 350°F for 45-55 minutes, until the frangipane is puffed, deep golden, and set in the center (a knife inserted in the cream comes out clean). Tent with foil if the almonds brown too fast.",
      "Cool the tart 20 minutes, then warm the apricot jam with a splash of water until fluid and brush it over the pears and frangipane for a glossy finish. Cool completely before unmolding so the frangipane fully sets. Serve at room temperature, plain or with crème fraîche."
    ],
    "totalTimeMinutes": 180,
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
      "Canned pear halves in juice are completely traditional here and cost a fraction of fresh poached pears — just drain and pat them very dry before fanning them on.",
      "Make your own almond flour by grinding whole almonds (often cheaper by weight) in a food processor with a spoonful of the recipe's sugar to keep it from turning to paste.",
      "Skip the rum if you don't want to buy a bottle — a splash of the lemon juice plus extra vanilla keeps the frangipane bright without it."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "1 tsp extra vanilla extract plus a pinch more almond extract",
        "savings": "skip buying a bottle of rum"
      },
      {
        "forIngredientId": "almond-flour",
        "swap": "whole almonds ground fine in a food processor with a little of the sugar",
        "savings": "about 30% cheaper than pre-ground almond flour"
      },
      {
        "forIngredientId": "apricot-jam",
        "swap": "warmed honey or any light-colored jam thinned with water",
        "savings": "use what's already in your pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 8,
      "carbs": 38,
      "fat": 28,
      "fiber": 4
    },
    "emoji": "🍐",
    "accentColor": "bg-amber-100",
    "cuisine": "French",
    "tags": [
      "baking",
      "dessert",
      "french",
      "tart",
      "pear",
      "almond",
      "frangipane",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-crostata",
    "name": "Crostata di Marmellata (Italian Jam Tart)",
    "description": "The classic Italian jam tart every nonna knows by heart: a buttery, lightly sweet pasta frolla shortcrust filled with thick apricot jam and finished with a hand-laid lattice top. Tender and crumbly rather than flaky, it keeps for days and is just as good with morning coffee as it is after dinner.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour (about 250g 00 or AP flour)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar (100g)"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp cold unsalted butter, cubed (about 140g)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 whole egg, plus 1 yolk for the dough"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 16,
        "note": "1 cup good apricot jam (about 320g)"
      }
    ],
    "steps": [
      "Make the pasta frolla: In a bowl, whisk together the flour, sugar, salt, and baking powder. Add the cold cubed butter and rub it into the flour with your fingertips (or pulse in a food processor) until the mixture looks like coarse damp sand with no butter pieces larger than a pea.",
      "Add the whole egg, the extra yolk, lemon zest, and vanilla. Mix just until the dough comes together into a ball — work it as little as possible to keep it tender. Flatten into a disc, wrap, and chill at least 30 minutes (up to overnight).",
      "Heat the oven to 350F (180C). Cut off about one-third of the dough and keep it cold for the lattice. On a lightly floured surface, roll the larger piece into a circle about 1/8 inch thick and line a 9-inch tart pan, pressing it into the corners and trimming the overhang flush with the rim.",
      "Spread the apricot jam evenly over the base, leaving a thin border at the edge. If the jam is very stiff, stir it loose first; if very runny, simmer it 2-3 minutes to thicken so it doesn't boil over.",
      "Roll the reserved dough and cut it into strips about 3/4 inch wide. Lay them across the tart in a lattice, pressing the ends onto the rim to seal. Re-roll any scraps if needed.",
      "Bake on the middle rack for 30-35 minutes, until the pastry is firm and golden and the jam is bubbling gently. If the lattice browns too fast, tent loosely with foil for the last few minutes.",
      "Cool the crostata completely in the pan on a rack — the jam is molten and the pastry is fragile while hot, and it sets as it cools. Slice into wedges and serve at room temperature."
    ],
    "totalTimeMinutes": 95,
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
      "Apricot is traditional, but any single jar of jam you already have (strawberry, plum, fig) makes a perfect crostata — buy whatever is on sale.",
      "Skip the tart pan: press the dough into a regular pie plate or even a parchment-lined cake pan; the rustic look is authentic.",
      "Re-roll every dough scrap for the lattice so nothing goes to waste — pasta frolla handles re-rolling well as long as it stays cold."
    ],
    "substitutions": [
      {
        "forIngredientId": "apricot-jam",
        "swap": "any thick jam or marmalade you have on hand",
        "savings": "Use up an open jar instead of buying a special one"
      },
      {
        "forIngredientId": "butter",
        "swap": "plant butter (cold) for a dairy-free frolla",
        "savings": "About the same cost, makes it vegan-friendly with a flax egg"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "1/2 tsp vanilla extra or a pinch of cinnamon",
        "savings": "Saves buying a fresh lemon just for zest"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 5,
      "carbs": 55,
      "fat": 14,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "dessert",
      "italian",
      "tart",
      "make-ahead",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-torta-della-nonna",
    "name": "Torta della Nonna",
    "description": "The real Tuscan \"grandmother's cake\": a tender pasta frolla shortcrust shell filled with a thick lemon-and-vanilla pastry cream (crema pasticcera), blanketed with pine nuts, and dusted with powdered sugar. Crisp at the edges, creamy in the center, fragrant with lemon zest. This is the faithful nonna version, no shortcuts.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups all-purpose flour (for the pasta frolla)"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp (1 1/4 sticks) cold unsalted butter, cubed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 9,
        "note": "scant 9 tbsp granulated sugar for the dough (about 1/2 cup + 1 tbsp)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs total: 1 whole egg + 1 yolk for the dough, 3 yolks for the cream"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 3,
        "note": "zest of 1 1/2 lemons, split between dough and cream (about 3 tsp)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 2,
        "note": "2 cups whole milk (for the pastry cream)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 7,
        "note": "scant 7 tbsp granulated sugar for the cream (about 1/3 cup + 2 tbsp)"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "4 tbsp cornstarch (to thicken the cream)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1 1/2 tsp vanilla extract (or 1 vanilla bean, seeds scraped)"
      },
      {
        "ingredientId": "pine-nuts",
        "quantity": 2,
        "note": "2 oz (about 1/3 cup) pine nuts for the top"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "2 tbsp powdered sugar, for dusting"
      }
    ],
    "steps": [
      "Make the pasta frolla: In a bowl, whisk together the flour, sugar, baking powder, salt, and the zest of half a lemon. Add the cold cubed butter and rub it into the flour with your fingertips until the mixture looks like coarse crumbs. Make a well, add 1 whole egg plus 1 yolk, and bring the dough together quickly with your hands - do not knead. Flatten into a disk, wrap, and chill at least 1 hour (it can rest overnight).",
      "Make the crema pasticcera: Warm the milk with the zest of 1 lemon in a saucepan until it just steams; do not boil. Meanwhile whisk the 3 egg yolks with the cream's sugar until pale, then whisk in the cornstarch until smooth. Pour the hot milk over the yolks in a slow stream, whisking constantly, then return everything to the pan.",
      "Cook the cream over medium heat, whisking without stopping, until it thickens to a glossy, spoon-coating pudding and a few slow bubbles break the surface, about 3-4 minutes. Off the heat, stir in the vanilla. Scrape into a bowl, press plastic wrap directly onto the surface, and chill until cold and set, about 1 hour.",
      "Heat the oven to 350F (180C). Butter and lightly flour a 9-inch tart pan or springform. Divide the chilled dough into two pieces, roughly two-thirds and one-third. On a floured surface, roll the larger piece into a circle and line the pan, pressing it up the sides to form a shell. Roll the smaller piece into a circle for the lid.",
      "Fill and seal: Spread the cold pastry cream evenly into the shell. Lay the dough lid over the top, press the edges of the lid and shell together to seal, and trim any overhang. Tuck and crimp the rim so the cream is fully enclosed.",
      "Top with pine nuts: Scatter the pine nuts generously over the lid and press them lightly so they adhere. For an even bake, prick the lid once or twice with a fork.",
      "Bake on the middle rack for 35-45 minutes, until the crust is deep golden and the pine nuts are toasted. If the nuts brown too fast, tent loosely with foil for the last 10 minutes.",
      "Cool the torta completely in the pan (the cream needs to set), then unmold. Just before serving, dust the top generously with powdered sugar. Serve at room temperature or lightly chilled."
    ],
    "totalTimeMinutes": 160,
    "prepTimeMinutes": 40,
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
      "Pine nuts are the priciest item - buy them from the bulk bin and weigh out just 2 oz, or stretch them by mixing in a handful of slivered almonds.",
      "One disk of dough chills overnight perfectly, so make it the night before and split the work across two days - no special equipment beyond a saucepan and a tart pan.",
      "Use a regular springform if you don't own a tart pan; line the base with a parchment round so the cooled torta lifts out cleanly."
    ],
    "substitutions": [
      {
        "forIngredientId": "pine-nuts",
        "swap": "slivered almonds or chopped blanched almonds",
        "savings": "Pine nuts are expensive; almonds give the same toasty crunch for a fraction of the cost."
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "equal amount of flour (cook the cream 1-2 minutes longer)",
        "savings": "Uses a pantry staple you already have instead of buying cornstarch."
      },
      {
        "forIngredientId": "vanilla",
        "swap": "seeds of 1 vanilla bean",
        "savings": "A scraped vanilla bean is the traditional flavoring and gives visible flecks, though extract is the budget pick."
      }
    ],
    "estimatedNutrition": {
      "calories": 430,
      "protein": 8,
      "carbs": 48,
      "fat": 23,
      "fiber": 1
    },
    "emoji": "🥧",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "dessert",
      "italian",
      "tart",
      "custard",
      "tuscan",
      "from-scratch"
    ]
  },
  {
    "id": "bake2-ricciarelli",
    "name": "Ricciarelli (Sienese Almond Cookies)",
    "description": "Soft, chewy diamond-shaped almond cookies from Siena, with a crackled powdered-sugar crust and a tender, marzipan-like interior. Built on almond flour, sugar, and whipped egg whites, scented with almond extract and citrus zest — no butter, no flour, naturally gluten-free.",
    "mealType": "snack",
    "servings": 20,
    "ingredients": [
      {
        "ingredientId": "almond-flour",
        "quantity": 2.5,
        "note": "2 1/2 cups (250g) finely ground almond flour"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup (200g) granulated sugar"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered sugar, divided (some for the dough, some for coating)"
      },
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 0.5,
        "note": "2 large egg whites (about 1/2 cup), at room temperature"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 1,
        "note": "1 tsp almond extract"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "zest of 1 orange"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 0.5,
        "note": "1/2 tsp finely grated lemon zest"
      }
    ],
    "steps": [
      "In a large bowl, whisk together the almond flour, granulated sugar, 1/4 cup of the powdered sugar, baking powder, and salt until evenly combined and no lumps remain. Stir in the orange and lemon zest.",
      "In a separate clean, grease-free bowl, beat the room-temperature egg whites with a pinch of the salt until they hold soft, billowy peaks — stop short of stiff and dry. Beat in the almond extract and vanilla.",
      "Fold the whipped egg whites into the almond-sugar mixture a third at a time, working gently until a thick, sticky, cohesive dough forms. It should be moldable, not runny; if it feels too wet, work in a spoonful more almond flour.",
      "Cover the dough and chill in the refrigerator for at least 1 hour (or up to overnight). This firms the dough so it can be shaped and helps the signature cracks form during baking.",
      "Dust a work surface generously with the remaining powdered sugar. Roll the dough into a log about 1 inch thick, then cut on the diagonal into roughly 20 pieces. Shape each into the classic flattened diamond/lozenge with slightly tapered ends, about 1/2 inch thick.",
      "Roll each cookie thoroughly in powdered sugar until heavily coated, then place on parchment-lined baking sheets, spacing them 1 1/2 inches apart. For the most authentic crackle, let the shaped, sugared cookies rest uncovered at room temperature for 1 to 2 hours (or overnight) so a skin forms on the surface.",
      "Preheat the oven to 300F (150C). Bake one sheet at a time for 14 to 18 minutes, until the cookies have spread slightly, cracked across the powdered-sugar crust, and are barely set — they should stay pale, with no real browning, and feel soft in the center.",
      "Let the ricciarelli cool completely on the sheet; they firm up as they cool but stay chewy inside. Dust with a little extra powdered sugar before serving. Store airtight for up to a week."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 16,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "gluten-free",
      "dairy-free",
      "vegetarian"
    ],
    "cheapTips": [
      "Buy whole raw almonds in bulk and grind them yourself in a food processor with a spoonful of the sugar (to prevent clumping) — far cheaper than packaged almond flour.",
      "Skip bottled zest and use the orange and lemon you already have; one piece of citrus does the job and the leftover fruit is your snack.",
      "No stand mixer needed — a balloon whisk and a few minutes of arm work gets egg whites to soft peaks just fine for this recipe."
    ],
    "substitutions": [
      {
        "forIngredientId": "orange",
        "swap": "extra lemon zest, or a few drops of orange-blossom water for a more traditional Sienese aroma",
        "savings": "uses citrus you already have"
      },
      {
        "forIngredientId": "liquid-egg-whites",
        "swap": "2 fresh egg whites separated from whole eggs (save the yolks for custard or pasta)",
        "savings": "cheaper than buying cartoned whites"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "increase vanilla and add a pinch more zest if you dislike strong almond flavor",
        "savings": "skip a single-use bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 3,
      "carbs": 15,
      "fat": 5,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "gluten-free",
      "italian",
      "almond",
      "christmas",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-pignoli-cookies",
    "name": "Pignoli Cookies (Italian Pine Nut Cookies)",
    "description": "Chewy, marzipan-rich Italian cookies built on a base of pure almond paste, crusted all over with toasted pine nuts. Crackly on the outside, soft and almond-dense within, with no flour and no butter — just almond, sugar, and egg white. A staple of Sicilian-American bakeries, especially around the holidays.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "almond-flour",
        "quantity": 1.5,
        "note": "1 1/2 cups almond flour (to build a homemade almond paste base)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup plus 2 tbsp granulated sugar (1 cup for the paste, 2 tbsp reserved)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered sugar"
      },
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 0.75,
        "note": "3 large egg whites (about 3/4 cup), divided"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 1,
        "note": "1 tsp almond extract"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "pine-nuts",
        "quantity": 8,
        "note": "8 oz (about 1 1/2 cups) pine nuts, for coating"
      }
    ],
    "steps": [
      "Preheat the oven to 325 F and line two baking sheets with parchment paper. In a food processor, combine the almond flour, 1 cup of the granulated sugar, and the powdered sugar. Pulse until very finely ground and uniform, about 30 seconds.",
      "Add 2 of the egg whites, the almond extract, vanilla, and salt to the processor. Run continuously until the mixture comes together into a thick, sticky, smooth almond paste dough that pulls away from the sides, 1 to 2 minutes. It should be tacky but hold its shape when pinched.",
      "Pour the pine nuts into a wide shallow bowl. In a separate small bowl, lightly whisk the remaining egg white with the reserved 2 tbsp sugar to make a loose glaze — this helps the pine nuts adhere.",
      "Scoop level tablespoons of dough and roll each into a smooth ball with lightly dampened hands. Working one at a time, dip each ball into the egg white glaze, then roll and press firmly into the pine nuts so the nuts coat the entire surface.",
      "Place the coated balls about 2 inches apart on the prepared sheets, gently flattening each into a thick disk. Press any stray pine nuts back into the surface so none are loose.",
      "Optional but traditional: let the shaped cookies rest uncovered for 15 minutes so the tops set slightly, which encourages the classic crackled finish.",
      "Bake one sheet at a time on the center rack for 16 to 20 minutes, until the pine nuts are golden and the edges are lightly browned but the centers are still soft. Do not overbake — they firm up as they cool.",
      "Let the cookies cool completely on the sheet for 10 minutes before transferring to a rack. They will be delicate while warm and set into a chewy texture once cool. Store airtight at room temperature for up to a week."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 20,
    "difficulty": "medium",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "gluten-free",
      "vegetarian",
      "dairy-free"
    ],
    "cheapTips": [
      "Pine nuts are the priciest part — buy them from a bulk bin or a Middle Eastern/Asian grocery, where they cost a fraction of the small supermarket jars.",
      "Build your own almond paste from almond flour and sugar (as written here) instead of buying canned almond paste, which is far more expensive per cookie.",
      "Stretch the pine nuts by mixing in some sliced almonds for the coating; you still get crunch and almond flavor at lower cost."
    ],
    "substitutions": [],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 3,
      "carbs": 14,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "italian",
      "gluten-free",
      "cookies",
      "dessert",
      "holiday",
      "almond",
      "flourless"
    ]
  },
  {
    "id": "bake2-maritozzi",
    "name": "Maritozzi (Roman Sweet Cream Buns)",
    "description": "The classic Roman breakfast pastry: soft, lightly sweet enriched buns scented with orange zest and a touch of honey, baked golden, then split and overstuffed with cold, barely-sweetened whipped cream. A faithful, traditional version with a proper overnight-friendly enriched dough and a glossy honey-water glaze.",
    "mealType": "breakfast",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups bread flour (or all-purpose), about 400g"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk, warmed to lukewarm"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant yeast (one packet)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5,
        "note": "5 tbsp granulated sugar (about 1/3 cup), for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, plus 1 yolk reserved for egg wash"
      },
      {
        "ingredientId": "butter",
        "quantity": 5,
        "note": "5 tbsp unsalted butter, softened (about 70g)"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "1 tbsp honey, for the dough"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 1,
        "note": "1 tbsp mild olive oil (traditional Roman touch)"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "zest of 1 orange (plus 1 tbsp juice)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp fine salt"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1.5,
        "note": "1 1/2 cups cold heavy whipping cream, for the filling"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar (about 4 tbsp), divided for cream and dusting"
      }
    ],
    "steps": [
      "Warm the milk to lukewarm (about 100F/38C) and stir in the yeast and 1 tsp of the sugar. Let sit 5-10 minutes until foamy. In a large bowl or stand mixer, combine the flour, remaining sugar, salt, and orange zest.",
      "Add the foamy milk, 2 whole eggs, honey, olive oil, vanilla, and 1 tbsp orange juice. Mix until a shaggy dough forms, then knead 8-10 minutes (or 6-8 in a stand mixer with the dough hook) until smooth and elastic. With the mixer running, add the softened butter a little at a time and knead another 5-8 minutes until the dough is glossy, soft, and pulls cleanly from the bowl.",
      "Shape into a ball, place in a lightly oiled bowl, cover, and let rise in a warm spot 1.5-2 hours until doubled. For best flavor, refrigerate the dough overnight after the first rise and continue the next day.",
      "Punch down gently and divide into 8 equal pieces (about 100g each). Shape each into a tight ball, then roll into a smooth oval/log about 4 inches long. Place seam-side down on a parchment-lined baking sheet, spacing them well apart. Cover loosely and proof 1 to 1.5 hours until puffy and nearly doubled.",
      "Preheat the oven to 375F (190C). Beat the reserved egg yolk with 1 tsp water and brush the buns gently. Bake 16-20 minutes until deep golden and an internal temp of about 190F (88C). Meanwhile, simmer 1 tbsp honey with 1 tbsp water for 30 seconds to make a glaze.",
      "Brush the hot buns with the honey glaze for shine, then cool completely on a rack. The buns must be fully cold before filling or the cream will melt.",
      "Whip the cold heavy cream with 3 tbsp of the powdered sugar (and a few drops of vanilla if you like) to firm peaks. Keep it cold and do not overwhip.",
      "Slice each cooled bun lengthwise at a slight angle, cutting most of the way through but leaving a hinge. Pipe or spoon in a generous mound of whipped cream, then drag a flat spatula or offset knife across the open face to scrape the cream flush and smooth. Dust with the remaining powdered sugar and serve cold."
    ],
    "totalTimeMinutes": 300,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 18,
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
      "Skip a piping bag: snip the corner off a sturdy zip-top bag to fill the buns just as neatly.",
      "One orange does double duty here, giving both the zest for the dough and a splash of juice, so you don't need any specialty extracts or flavorings.",
      "Make the dough through the first rise the night before and refrigerate it; cold dough is easier to shape and the overnight rest deepens the flavor for free."
    ],
    "substitutions": [
      {
        "forIngredientId": "instant-yeast",
        "swap": "Use 2 1/4 tsp active dry yeast; bloom it fully in the warm milk for 10 minutes first.",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "honey",
        "swap": "Use an equal amount of granulated sugar in the dough and a simple sugar-water glaze on top.",
        "savings": "saves about $0.30"
      },
      {
        "forIngredientId": "orange",
        "swap": "Use 1 tsp vanilla plus a pinch of lemon zest if you have a lemon on hand instead.",
        "savings": "saves about $0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 395,
      "protein": 8,
      "carbs": 45,
      "fat": 20,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "italian",
      "breakfast",
      "enriched-dough",
      "yeasted",
      "whipped-cream",
      "roman"
    ]
  },
  {
    "id": "bake2-sbrisolona",
    "name": "Sbrisolona (Classic Mantovan Almond Crumble Cake)",
    "description": "The authentic crumbly almond cake from Mantua, Lombardy. Equal parts all-purpose flour, cornmeal, and ground almonds bound with just enough butter, sugar, and egg yolk to form a dry, sandy dough that bakes into a thin, brittle slab. You never slice it — you smash it into irregular shards and eat it with coffee or a glass of sweet wine. The name comes from the dialect word for \"crumb.\"",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour (140g)"
      },
      {
        "ingredientId": "cornmeal",
        "quantity": 1,
        "note": "1 cup fine/medium cornmeal (about 140g) — the signature crunch"
      },
      {
        "ingredientId": "almonds",
        "quantity": 4,
        "note": "1 cup whole almonds, ground coarse (about 130g); leave a handful chopped for texture"
      },
      {
        "ingredientId": "sugar",
        "quantity": 10.67,
        "note": "about 2/3 cup granulated sugar (130g)"
      },
      {
        "ingredientId": "butter",
        "quantity": 11,
        "note": "about 2/3 cup cold unsalted butter, cubed (150g)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg yolk (white reserved or discarded)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest (zest of about half a lemon)"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract (stands in for traditional bitter almonds)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      }
    ],
    "steps": [
      "Heat the oven to 350F (175C). Line the bottom of a 9-inch round tart or springform pan with parchment and lightly butter the sides. Pulse the almonds in a food processor (or chop by hand) until mostly coarse meal with a few bigger bits remaining — texture is the whole point, so do not grind to a smooth flour.",
      "In a large bowl whisk together the flour, cornmeal, ground almonds, sugar, and salt until evenly combined.",
      "Scatter the cold cubed butter over the dry mix. Rub it in with your fingertips, working quickly, until the mixture looks like damp sand with pea-sized clumps — no smooth dough should form.",
      "Drizzle in the egg yolk, vanilla, almond extract, and lemon zest. Toss and rake with your fingers (do not knead) just until the crumbs clump when squeezed but still fall apart loosely. If it feels too dry to clump at all, add a teaspoon of cold water; you want rubble, not a ball.",
      "Tip the loose crumbs into the pan and spread them in an even layer roughly 1/2 to 3/4 inch thick. Do NOT press or pack it down — leave the surface craggy and uneven. The gaps and lumps are what give Sbrisolona its shattery character.",
      "Bake for 35 to 45 minutes, until the top is golden-brown and the edges are deeply golden and firm. It should smell toasty and nutty; the cornmeal and almonds darken noticeably when done.",
      "Cool in the pan on a rack for at least 30 minutes — it firms up and crisps as it cools, so resist cutting it warm. It will be fragile.",
      "Once fully cool, turn it out and break it into rough irregular shards with your hands (traditionally smacked in the center with a fist). Dust lightly with powdered sugar if you like, and serve with espresso, grappa, or a sweet wine like Moscato. Store airtight up to a week; it stays crisp."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 40,
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
      "Skip pre-ground almond flour — buying whole almonds and pulsing them yourself is cheaper and gives the authentic coarse texture anyway.",
      "No food processor? Put almonds in a zip bag and crush with a rolling pin or the bottom of a heavy pan. Rustic is correct here.",
      "One egg from a budget dozen covers this. Freeze the leftover white in an ice-cube tray for future omelets or meringue."
    ],
    "substitutions": [
      {
        "forIngredientId": "almonds",
        "swap": "Use walnuts or hazelnuts for part of the nuts",
        "savings": "Often cheaper per bag than almonds"
      },
      {
        "forIngredientId": "almond-extract",
        "swap": "Skip it and double the lemon zest",
        "savings": "Saves buying a single-use bottle"
      },
      {
        "forIngredientId": "cornmeal",
        "swap": "Fine polenta or semolina",
        "savings": "Use whatever coarse grain you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 265,
      "protein": 4,
      "carbs": 28,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "baking",
      "italian",
      "dessert",
      "shortbread",
      "almond",
      "make-ahead",
      "vegetarian",
      "no-mixer"
    ]
  },
  {
    "id": "bake2-castagnaccio",
    "name": "Castagnaccio (Tuscan Chestnut Flour Cake)",
    "description": "The real Tuscan autumn classic: a thin, rustic unleavened cake made almost entirely from sweet chestnut flour, water, and good olive oil. No added sugar — the natural sweetness comes from the chestnut flour and plump raisins — finished with pine nuts, rosemary, and a cracked, crackly top. Dense, moist, faintly bitter-sweet, and unmistakably Tuscan.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups chestnut flour (farina di castagne) — the defining ingredient; catalog has no chestnut flour so logged under flour"
      },
      {
        "ingredientId": "water",
        "quantity": 2.25,
        "note": "about 2 1/4 cups lukewarm water, added gradually to make a smooth pourable batter"
      },
      {
        "ingredientId": "evoo",
        "quantity": 5,
        "note": "5 tbsp extra-virgin olive oil (about 1/3 cup) — 3 tbsp in the batter, 2 tbsp to oil the pan and drizzle"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "note": "1/2 cup raisins, soaked 15 min in warm water then drained"
      },
      {
        "ingredientId": "pine-nuts",
        "quantity": 2,
        "note": "2 oz pine nuts (about 1/3 cup)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 cup walnuts, roughly chopped (optional, traditional in some versions)"
      },
      {
        "ingredientId": "rosemary-fresh",
        "quantity": 1,
        "note": "1 sprig fresh rosemary, leaves picked"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "optional": true,
        "note": "zest of 1 orange (optional, common in Florentine versions)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp fine salt"
      }
    ],
    "steps": [
      "Preheat the oven to 375F (190C). Soak the raisins in a small bowl of warm water for 15 minutes, then drain and pat dry. Brush a roughly 10-inch round or rectangular baking pan generously with about 1 tbsp of the olive oil.",
      "Sift the chestnut flour into a large bowl with the salt to break up its natural lumps — chestnut flour clumps easily and sifting is essential for a smooth batter.",
      "Gradually whisk in the lukewarm water a little at a time, working out every lump, until you have a smooth, lump-free batter with the consistency of thin pancake batter or heavy cream. It should pour easily and ribbon off the whisk.",
      "Whisk in 3 tbsp of the olive oil and the optional orange zest. Stir in about two-thirds of the soaked raisins and half the pine nuts, reserving the rest for the top.",
      "Pour the batter into the oiled pan — it should sit only about 1/2 to 3/4 inch deep; castagnaccio is meant to be thin. Scatter the reserved raisins, the remaining pine nuts, the chopped walnuts, and the rosemary leaves evenly over the surface, then drizzle the last 1 tbsp olive oil over the top.",
      "Bake for 30 to 40 minutes, until the surface is dry, deeply cracked all over like dried earth, and the edges pull slightly from the pan. The top should be set and the characteristic crazed crust formed; the inside stays moist and dense.",
      "Let cool in the pan for at least 15 minutes — it firms up as it cools and is traditionally served at room temperature, cut into squares or wedges. It keeps well, covered, for 2 to 3 days."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 40,
    "difficulty": "easy",
    "equipment": [
      "oven"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free",
      "vegetarian"
    ],
    "cheapTips": [
      "Chestnut flour is the splurge; buy it once in bulk online or from an Italian grocer — it freezes for months, so one bag makes several cakes through the fall.",
      "Pine nuts are pricey: stretch them with cheaper chopped walnuts (already in the recipe) and use just a token scatter of pine nuts on top for looks.",
      "Skip the fresh orange zest if you don't have it — a pinch of dried rosemary and the raisins carry the flavor fine, and you avoid buying produce you won't finish."
    ],
    "substitutions": [
      {
        "forIngredientId": "pine-nuts",
        "swap": "walnuts or slivered almonds",
        "savings": "saves ~$4 vs pine nuts"
      },
      {
        "forIngredientId": "raisins",
        "swap": "dried cranberries or chopped dried figs",
        "savings": "no extra cost, uses pantry staples"
      },
      {
        "forIngredientId": "evoo",
        "swap": "any olive oil or mild vegetable oil",
        "savings": "saves ~$2 over premium EVOO"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 4,
      "carbs": 35,
      "fat": 11,
      "fiber": 4
    },
    "emoji": "🌰",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian (Tuscan)",
    "tags": [
      "baking",
      "italian",
      "tuscan",
      "vegan",
      "gluten-free",
      "no-added-sugar",
      "autumn",
      "traditional",
      "dairy-free"
    ]
  },
  {
    "id": "bake2-ensa-mada",
    "name": "Ensaïmada de Mallorca",
    "description": "The classic Mallorcan breakfast pastry: a slow-proofed enriched dough stretched paper-thin, smeared with pork lard, rolled into a rope, coiled into its iconic spiral, proofed overnight, baked until golden, and snowed with powdered sugar. Airy, faintly chewy, and shatteringly delicate — exactly the version you'd find in a Palma bakery.",
    "mealType": "breakfast",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "3 1/2 cups bread flour (strong flour), plus extra for dusting"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "about 1/3 cup plus 2 tbsp granulated sugar (7 tbsp)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs, room temperature"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup lukewarm water"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp instant yeast"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "2 tbsp mild olive oil (helps the dough relax for stretching)"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp fine salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 10.67,
        "note": "about 2/3 cup softened pork lard for spreading — substitute softened butter (10 tbsp) if lard is unavailable"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar, for dusting (4 tbsp)"
      }
    ],
    "steps": [
      "Make the dough: In a large bowl, whisk together the flour, granulated sugar, yeast, and salt. Make a well and add the eggs, lukewarm water, and olive oil. Mix to a shaggy mass, then knead on a clean surface for 12-15 minutes until very smooth, elastic, and glossy. This is a stiff-ish enriched dough; resist adding extra flour. Form into a ball.",
      "First rest: Lightly oil the dough, cover, and let it rest at warm room temperature for about 1 hour, until relaxed and slightly puffed. It will not double yet — this rest is mainly to make the dough extensible for stretching.",
      "Divide and pre-shape: Punch down gently and divide into 4 equal pieces (for 4 small ensaïmadas) or keep whole for one large one. Roll each piece into a tight ball, cover, and rest 15 minutes so the gluten relaxes.",
      "Stretch and grease: On a generously oiled work surface, press and stretch one ball with oiled hands into a thin rectangle, then keep stretching gently from underneath until almost translucent — large and paper-thin, like strudel dough. Smear the entire surface evenly with softened lard (or butter), right to the edges.",
      "Roll and coil: Starting from a long edge, roll the dough up into a long thin rope, sealing as you go. Gently stretch the rope longer, then wind it into a loose flat spiral on a parchment-lined tray, leaving small gaps so it has room to expand. Tuck the end underneath.",
      "Overnight proof: Cover loosely and proof in a warm spot for 6-12 hours (overnight is traditional), until visibly puffy, airy, and nearly doubled. A long slow proof is what gives the ensaïmada its characteristic light, layered crumb.",
      "Bake: Heat the oven to 350F (175C). Lightly mist or brush the coils with water. Bake 18-22 minutes for small ones (25-30 for one large), until deep golden and the spirals are set. If browning too fast, tent with foil.",
      "Finish: Cool on a rack for at least 15 minutes, then dust thickly and evenly with powdered sugar through a fine sieve just before serving. Best eaten the same day, ideally still slightly warm, with coffee."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 45,
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
      "Lard is far cheaper than butter and is the authentic fat — buy a tub from the meat counter and you'll have plenty left over for future batches.",
      "Bread flour costs little more than all-purpose but gives the stretch you need; skip pricey '00' flour, it isn't traditional here.",
      "One large ensaïmada uses the same dough as four small ones and is easier for a beginner to coil — less surface area to tear."
    ],
    "substitutions": [
      {
        "forIngredientId": "butter",
        "swap": "Traditional pork lard (saïm) — the namesake fat and the authentic choice",
        "savings": "about $1.50 per batch vs butter"
      },
      {
        "forIngredientId": "instant-yeast",
        "swap": "Active dry yeast — proof it first in the lukewarm water with a pinch of sugar",
        "savings": "roughly the same cost"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Any neutral oil for stretching and greasing the surface",
        "savings": "about $0.30 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 480,
      "protein": 10,
      "carbs": 62,
      "fat": 21,
      "fiber": 2
    },
    "emoji": "🌀",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish (Mallorcan)",
    "tags": [
      "baking",
      "spanish",
      "mallorcan",
      "breakfast pastry",
      "enriched dough",
      "laminated",
      "overnight",
      "yeast"
    ]
  },
  {
    "id": "bake2-magdalenas",
    "name": "Magdalenas (Classic Spanish Lemon Madeleines)",
    "description": "Traditional Spanish magdalenas — tall, domed little cakes with the signature cracked peak, a crisp sugary top, and a tender lemon-and-olive-oil crumb. The batter is whipped until pale and thick, rested cold so it rises into a proud belly, and baked hot so the tops split. Nothing like a French madeleine: these are fluffy, fragrant, and made for dunking in coffee or hot chocolate.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, at room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, plus extra for sprinkling tops"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 8,
        "note": "1/2 cup mild extra-virgin olive oil (or light olive oil)"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "1/4 cup whole milk, room temperature"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp baking powder"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "finely grated zest of 1 lemon (about 2 tsp)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp ground cinnamon (optional, traditional)"
      }
    ],
    "steps": [
      "In a large bowl, beat the eggs and 3/4 cup sugar with electric beaters on high for 5-8 minutes, until very pale, thick, and tripled in volume. This long whip is what gives magdalenas their height — don't rush it. The mixture should fall in a ribbon that holds on the surface for a few seconds.",
      "With the beaters on low, drizzle in the olive oil in a slow steady stream, then the milk, vanilla, and lemon zest, mixing just until combined. Keep the mixing gentle from here on so you don't deflate the eggs.",
      "Sift together the flour, baking powder, salt, and optional cinnamon. Add to the bowl in two additions, folding with a spatula until just incorporated and no dry streaks remain. The batter will be thick and airy.",
      "Cover the bowl and refrigerate for at least 1 hour (up to overnight). Chilling firms the batter and is the secret to a tall, cracked dome — skipping it gives flat magdalenas.",
      "Place paper magdalena liners (or muffin liners) into a 12-cup muffin tin; the rigid tin helps them rise up rather than out. Preheat the oven to 425F (220C) with a rack in the center.",
      "Fill each liner about three-quarters full with the cold batter. Sprinkle a generous pinch of granulated sugar over each top — this creates the classic crackly, sugary crust.",
      "Bake at 425F for 5 minutes, then without opening the oven reduce to 375F (190C) and bake another 10-13 minutes, until deeply golden, domed, and split on top. A toothpick should come out clean.",
      "Cool in the tin for 5 minutes, then transfer to a rack. Serve slightly warm or at room temperature — perfect dunked in coffee, milk, or hot chocolate. Store airtight up to 4 days."
    ],
    "totalTimeMinutes": 95,
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
      "Olive oil is the authentic and economical fat here — no butter needed, and a basic supermarket bottle works fine for the mild flavor.",
      "One lemon zests and stretches a long way; zest before juicing and freeze leftover zest for the next batch.",
      "Use standard muffin liners if you can't find tall magdalena cups — fill them a bit less and they'll still dome nicely."
    ],
    "substitutions": [
      {
        "forIngredientId": "olive-oil",
        "swap": "Mild vegetable or sunflower oil for a more neutral flavor",
        "savings": "Often cheaper than extra-virgin olive oil"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "Orange zest for a sweeter, rounder citrus note",
        "savings": "Use a juicing orange you already have"
      },
      {
        "forIngredientId": "milk",
        "swap": "Any plant milk such as oat or soy milk",
        "savings": "No need to buy dairy if you keep plant milk on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 205,
      "protein": 3,
      "carbs": 26,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish",
    "tags": [
      "baking",
      "spanish",
      "breakfast-treat",
      "lemon",
      "olive-oil",
      "dunking",
      "make-ahead",
      "kid-friendly"
    ]
  },
  {
    "id": "bake2-quesada-pasiega",
    "name": "Quesada Pasiega (Cantabrian Baked Curd Cake)",
    "description": "The real, classic dessert from the Pas Valley in Cantabria, northern Spain — a dense, golden baked curd cake somewhere between a custard and a cheesecake. Fresh curd cheese is enriched with browned butter, eggs, sugar, a little flour, milk, lemon zest and cinnamon, then baked hot until the top cracks and caramelizes. Tender and faintly tangy inside, with a deep toasted-butter aroma. Best made a day ahead and served at room temperature in thin squares.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "ricotta",
        "quantity": 2,
        "note": "1 cup (about 250 g) fresh ricotta, the closest stand-in for traditional Pasiega curd cheese (cuajada/requesón) — drain if very wet"
      },
      {
        "ingredientId": "cottage-cheese",
        "quantity": 1,
        "note": "1/2 cup (about 125 g) full-fat cottage cheese, blended smooth, to mimic the loose fresh-curd texture"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup (150 g) granulated sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp (85 g) unsalted butter, browned and cooled slightly"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup (65 g) all-purpose flour"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup (120 ml) whole milk"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "Finely grated zest of 1 lemon (about 2 tsp)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon, plus a little extra for dusting"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tsp vanilla extract (optional, rounds out the flavor)"
      }
    ],
    "steps": [
      "Heat the oven to 220C / 425F. Generously butter an 8-inch (20 cm) square baking dish or a similar ceramic dish and lightly dust with flour, tapping out the excess. The high starting heat is what gives a real quesada its cracked, burnished top.",
      "Brown the butter: melt the 6 tbsp butter in a small pan over medium heat, swirling, until it foams, the milk solids turn golden-brown, and it smells nutty (3-4 minutes). Pour into a bowl and let cool for 5 minutes — this toasted-butter note is signature to the dish.",
      "In a large bowl, blend the ricotta and cottage cheese until as smooth as possible (use a blender, food processor, or push through a sieve). Traditional cuajada is loose and slightly grainy, but a smoother base bakes more evenly.",
      "Whisk in the eggs one at a time, then the sugar, salt, lemon zest, cinnamon and vanilla until fully combined and the sugar starts to dissolve.",
      "Whisk in the milk, then the cooled browned butter. Sift in the flour and whisk just until you have a smooth, pourable batter with no lumps — do not overbeat. The batter should be thin, like a loose pancake batter.",
      "Pour into the prepared dish (the batter should sit about 3 cm / just over an inch deep). Dust the surface lightly with extra cinnamon. Bake at 220C / 425F for 10 minutes to set and color the top.",
      "Lower the oven to 180C / 350F and bake another 30-35 minutes, until the top is deep golden-brown and cracked, the edges are set, and the center has only a slight wobble. A skewer inserted in the middle should come out with a few moist crumbs, not wet batter.",
      "Turn off the oven, crack the door, and let the quesada cool inside for 15 minutes to keep it from sinking, then cool completely on a rack. Refrigerate several hours (ideally overnight) — it firms up and the flavor deepens. Serve at room temperature, cut into squares."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 45,
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
      "Skip pricey fresh curd cheese — a blend of supermarket ricotta and full-fat cottage cheese blended smooth nails the loose Pasiega curd texture for a fraction of the cost.",
      "Browning the butter takes 4 minutes and free upgrades the whole cake — don't skip it to save effort; it replaces any need for expensive flavorings.",
      "One lemon does double duty: zest goes in the batter, and you can save the juice for another recipe so nothing is wasted."
    ],
    "substitutions": [
      {
        "forIngredientId": "ricotta",
        "swap": "Use all cottage cheese (1.5 cups) blended very smooth, or full-fat Greek yogurt strained for an hour",
        "savings": "Cottage cheese is usually cheaper per ounce than ricotta"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Evaporated milk thinned with a splash of water, or half-and-half for an even richer custard",
        "savings": "Use whatever milk you already have on hand"
      },
      {
        "forIngredientId": "butter",
        "swap": "Regular melted (un-browned) butter works in a pinch, or a neutral oil — you lose the nutty depth but the texture holds",
        "savings": "Oil is cheaper and skips the browning step"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 7,
      "carbs": 27,
      "fat": 12,
      "fiber": 1
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Spanish",
    "tags": [
      "baking",
      "dessert",
      "spanish",
      "cheesecake",
      "custard",
      "make-ahead",
      "vegetarian",
      "cantabrian"
    ]
  },
  {
    "id": "bake2-p-o-de-l",
    "name": "Pão de Ló (Portuguese Sponge Cake)",
    "description": "The classic Portuguese sponge cake — an intensely eggy, golden cake leavened only by whole eggs and extra yolks beaten to a thick ribbon. Lined with parchment and baked hot, it stays gloriously moist and slightly creamy at the heart, exactly like the celebrated Pão de Ló de Ovar. Just four ingredients, no butter, no leavening, no fuss.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, room temperature"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large egg yolks (whites reserved for another use)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup all-purpose flour, sifted"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp fine salt"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp finely grated lemon zest (optional, traditional)"
      }
    ],
    "steps": [
      "Preheat the oven to 350F (180C). Line a deep 8-inch round cake pan (or a similar tube/clay mold) with parchment paper, letting it rise a couple of inches above the rim — the batter is loose and the high collar is part of the traditional look.",
      "Crack the 6 whole eggs and add the 4 extra yolks into a large bowl. Add the sugar and salt. Beat with an electric mixer on high speed for a full 10 to 12 minutes, until the mixture is very pale, tripled in volume, and falls from the beaters in a thick, slowly-dissolving ribbon. This long whip is the only leavening, so do not rush it.",
      "Beat in the lemon zest, if using, for the final 30 seconds.",
      "Sift the flour over the egg foam in three additions. Fold it in gently with a large spatula, cutting down through the center and lifting up around the sides, until just combined and no dry streaks remain. Stop the moment it is smooth — overfolding deflates the air.",
      "Pour the batter into the lined pan. Do not tap or bang it; you want to keep the air intact.",
      "Bake on the middle rack for 28 to 35 minutes. For the traditional moist Ovar style, pull it at 28 to 30 minutes while the center still wobbles slightly and a skewer in the center comes out a touch moist. For a fully set, springy sponge, bake closer to 35 minutes until a skewer comes out clean and the top is deep golden.",
      "Let the cake cool in the pan for 15 minutes, then lift it out by the parchment onto a rack. Serve at room temperature, leaving the parchment collar on for a rustic presentation. It keeps, well wrapped, for 3 days."
    ],
    "totalTimeMinutes": 55,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 32,
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
      "Eggs are the whole show here, so buy the standard large eggs — no need for pricey specialty ones. Freeze the 4 leftover egg whites in an ice cube tray for future omelets or meringues so nothing goes to waste.",
      "Skip the lemon and use whatever citrus zest you already have on hand, or leave it out entirely — the cake is traditional and delicious plain.",
      "No stand mixer? A cheap hand mixer works fine; just give it the full 10-plus minutes. A roll of parchment costs little and replaces any fancy nonstick mold."
    ],
    "substitutions": [
      {
        "forIngredientId": "lemon-zest",
        "swap": "1 tsp lime or orange zest, or omit",
        "savings": "use citrus you already have"
      },
      {
        "forIngredientId": "sugar",
        "swap": "equal weight superfine/caster sugar for an even silkier crumb",
        "savings": "blitz regular sugar in a blender instead of buying caster"
      },
      {
        "forIngredientId": "flour",
        "swap": "swap 2 tbsp of the flour for cornstarch for a more tender, melt-in-mouth sponge",
        "savings": "pantry staple, no extra cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 185,
      "protein": 5,
      "carbs": 30,
      "fat": 5,
      "fiber": 0
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Portuguese",
    "tags": [
      "baking",
      "portuguese",
      "dessert",
      "sponge-cake",
      "egg",
      "traditional"
    ]
  },
  {
    "id": "bake2-bolo-de-arroz",
    "name": "Bolo de Arroz (Portuguese Rice Flour Muffins)",
    "description": "Classic Portuguese pastelaria muffin-cakes built on a base of fine rice flour and wheat flour, perfumed with lemon zest and a whisper of vanilla. The crumb is dense yet tender — somewhere between a pound cake and a muffin — with a domed top finished in coarse sugar that bakes into a delicate crackle. They're traditionally baked in a tall paper collar so they rise straight up. Best the day they're made, with coffee.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "rice-flour",
        "quantity": 1.5,
        "note": "1 1/2 cups fine white rice flour"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 4,
        "note": "4 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp (1 1/4 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, room temperature"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 2,
        "note": "2 tsp finely grated lemon zest (from about 1 lemon)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.75,
        "note": "3/4 cup whole milk, room temperature"
      },
      {
        "ingredientId": "turbinado-sugar",
        "quantity": 3,
        "note": "3 tbsp coarse/turbinado sugar, for sprinkling the tops"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Line a 12-cup muffin tin with paper liners. For the authentic tall shape, use cases that stand above the rim of the tin so the batter can climb and dome.",
      "Whisk together the rice flour, all-purpose flour, baking powder, and salt in a bowl until evenly combined. Setting aside the rice flour separately and combining the two flours fully here is what gives bolo de arroz its characteristic slightly sandy, tender crumb.",
      "In a large bowl, beat the softened butter with the granulated sugar on medium-high speed for 3 to 4 minutes, until pale and fluffy. Don't rush this — the air beaten in now is most of your lift alongside the baking powder.",
      "Add the eggs one at a time, beating well after each addition and scraping the bowl, then beat in the lemon zest and vanilla. The batter should look smooth and slightly glossy.",
      "On low speed, add the flour mixture in three additions, alternating with the milk in two additions, beginning and ending with the flour. Mix only until each addition just disappears — overmixing toughens the crumb. The finished batter will be thick and scoopable, not pourable.",
      "Divide the batter evenly among the 12 cases, filling each about three-quarters full (a heaping ice-cream scoop each). Sprinkle the tops generously with the coarse turbinado sugar — this is the classic crackly crown.",
      "Bake for 22 to 26 minutes, until the tops are domed, golden, and a toothpick inserted in the center comes out clean. The sugar on top should look set and lightly crisp.",
      "Let the muffins cool in the tin for 5 minutes, then transfer to a rack. Serve slightly warm or at room temperature the same day, ideally with a strong coffee."
    ],
    "totalTimeMinutes": 50,
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 25,
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
      "Rice flour from the baking aisle is pricey — check the Asian-grocery section or an international market where the same fine white rice flour often costs a third as much.",
      "One lemon gives you all the zest you need; juice the bare lemon into a glass of water or save it for another recipe so nothing's wasted.",
      "Skip fancy paper cases — fold rectangles of parchment into tall cylinders inside the muffin cups for the authentic high collar at no extra cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "turbinado-sugar",
        "swap": "Regular granulated sugar (white-sugar) sprinkled on top — it won't crackle quite as much but still gives a sweet crust.",
        "savings": "Saves buying a separate bag of coarse sugar"
      },
      {
        "forIngredientId": "butter",
        "swap": "Vegetable oil (use about 9 tbsp) for a lighter, longer-keeping crumb — common in many home versions; beat it with the sugar and eggs instead of creaming.",
        "savings": "Oil is cheaper than butter per batch"
      },
      {
        "forIngredientId": "milk",
        "swap": "Whole milk thinned from any milk you have, or plain yogurt loosened with a splash of water for a slightly tangier, moister cake.",
        "savings": "Uses milk you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 248,
      "protein": 4,
      "carbs": 37,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🧁",
    "accentColor": "bg-amber-100",
    "cuisine": "Portuguese",
    "tags": [
      "baking"
    ]
  },
  {
    "id": "bake2-szarlotka",
    "name": "Szarlotka (Polish Apple Cake)",
    "description": "The genuine Polish szarlotka: a buttery, tender shortcrust pressed top and bottom around a thick, fragrant layer of cinnamon-spiced apples cooked down so they hold their shape without going to mush. Half the dough is grated frozen over the filling for the signature rustic top, baked until pale gold and finished with a snowfall of powdered sugar. Cozy, not too sweet, and best the next day.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) cold unsalted butter, cubed"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered sugar, plus more for dusting"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs (1 whole egg + 1 yolk in dough; reserve 1 white)"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 2,
        "note": "2 tbsp sour cream"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "apple",
        "quantity": 8,
        "note": "8 large tart apples (about 3 1/2 lb), peeled and coarsely grated or thinly sliced"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar (for the apples)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp lemon juice"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2,
        "note": "2 tbsp cornstarch (to set the apple juices)"
      },
      {
        "ingredientId": "cloves",
        "quantity": 0.25,
        "note": "1/4 tsp ground cloves (optional, traditional touch)"
      }
    ],
    "steps": [
      "Make the dough: In a large bowl, whisk together flour, powdered sugar, baking powder, and salt. Add the cold cubed butter and rub it in with your fingertips (or pulse in a food processor) until the mixture looks like coarse sand. Add 1 whole egg, 1 yolk (reserve the white), sour cream, and vanilla, then work just until a dough comes together. Divide into two pieces, one slightly larger. Flatten into disks, wrap, and chill the larger piece in the fridge and the smaller piece in the freezer for at least 30 minutes.",
      "Make the apple filling: Peel and coarsely grate or thinly slice the apples. Toss with lemon juice, then cook in a wide pot or skillet over medium-high heat with the granulated sugar for 10-15 minutes, stirring often, until the apples soften and most of the liquid evaporates. Stir in the cinnamon and cloves. Sprinkle the cornstarch over the apples and stir for 1 minute until the juices thicken and coat the fruit. Spread out on a plate and let cool completely - it should be thick, not watery.",
      "Heat the oven to 350F (175C). Line a 9x13-inch baking pan with parchment, leaving an overhang on two sides for easy lifting.",
      "Press the bottom crust: On a floured surface, roll the chilled larger dough disk to fit the pan, or simply press it evenly into the bottom and about 1/2 inch up the sides with your fingers. Prick all over with a fork. Bake the base alone for 12-15 minutes until just set and barely colored, then remove and let cool slightly.",
      "Spread the cooled apple filling evenly over the par-baked base, right to the edges, in a thick even layer.",
      "Top the cake: Take the frozen smaller dough disk and coarsely grate it directly over the apples, covering the surface in loose rustic curls (leave a few gaps so steam escapes). Lightly brush the grated top with the reserved egg white for shine.",
      "Bake for 40-50 minutes, until the top crust is set and a light golden color. If it browns too fast, tent loosely with foil.",
      "Cool completely in the pan - this is essential so the filling sets and the cake slices cleanly. Lift out using the parchment, dust generously with powdered sugar, and cut into 12 squares. Even better the next day."
    ],
    "totalTimeMinutes": 150,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 65,
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
      "Buy whatever apples are cheapest and firm - a bag of generic baking apples works perfectly since they get cooked down and spiced anyway.",
      "Skip a stand mixer: cold butter rubbed in by hand or with two forks gives the same tender shortcrust for free.",
      "Make it a day ahead. Szarlotka keeps for 3-4 days and actually tastes better as it rests, so one bake covers a week of snacks."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Plain Greek yogurt works one-for-one in the dough",
        "savings": "Use what you already have instead of buying a tub"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Potato starch (very traditional in Poland) or an extra few minutes of cooking to reduce the juices",
        "savings": "Free if you cook the apples down longer"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar in a blender, or just use granulated in the dough",
        "savings": "Avoids buying a separate bag of powdered sugar"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 4,
      "carbs": 45,
      "fat": 14,
      "fiber": 3
    },
    "emoji": "🍎",
    "accentColor": "bg-amber-100",
    "cuisine": "Polish",
    "tags": [
      "baking",
      "dessert",
      "polish",
      "apple",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-makowiec",
    "name": "Makowiec (Polish Poppy Seed Roll)",
    "description": "The real-deal Polish Christmas and Easter poppy seed roll: a tender, buttery yeasted dough wound tight around a dense, fragrant poppy seed filling enriched with honey, butter, walnuts, raisins, and orange zest. The spiral cross-section is the whole point, so roll firmly. Finished with a simple powdered-sugar icing.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3,
        "note": "3 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk, warmed to lukewarm"
      },
      {
        "ingredientId": "active-dry-yeast",
        "quantity": 1,
        "note": "1 packet (2 1/4 tsp) active dry yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 6,
        "note": "6 tbsp granulated sugar (for the dough)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened, for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs (2 whole for dough, 1 separated: white for filling, yolk for egg wash)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "poppy-seeds",
        "quantity": 96,
        "note": "2 cups (about 16 tsp by catalog count) poppy seeds — the heart of the filling"
      },
      {
        "ingredientId": "honey",
        "quantity": 4,
        "note": "1/4 cup honey"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup unsalted butter, for the filling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 6,
        "note": "6 tbsp granulated sugar (for the filling)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.75,
        "note": "3/4 cup walnuts, finely chopped"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "note": "1/2 cup raisins"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "zest of 1 orange"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.5,
        "note": "1/2 tsp almond extract"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered sugar, for the icing"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 2,
        "note": "2 tbsp lemon juice, for the icing"
      }
    ],
    "steps": [
      "Make the dough: Warm the milk to lukewarm (about 110F), stir in the yeast and 1 tsp of the dough sugar, and let it foam for 10 minutes. In a large bowl, combine the flour, remaining dough sugar, and salt. Add the yeast mixture, 2 whole eggs, softened butter, and vanilla. Knead 8-10 minutes until smooth, soft, and elastic. Cover and let rise in a warm spot until doubled, about 1 to 1.5 hours.",
      "Make the poppy seed filling: Put the poppy seeds in a saucepan, cover with water, bring to a boil, then simmer 5 minutes. Drain very well, then grind the seeds twice through a meat grinder, in a spice grinder, or with a hand blender until they release their oils and form a thick gray paste. Grinding is essential — whole seeds taste flat.",
      "Cook the filling: In the same saucepan, melt 1/4 cup butter with the honey and filling sugar. Stir in the ground poppy seeds and cook over low heat, stirring, for 5-8 minutes until thick and glossy. Remove from heat and mix in the chopped walnuts, raisins, orange zest, and almond extract. Let cool to lukewarm. Whip the reserved egg white to soft peaks and fold it in to lighten the filling.",
      "Roll out the dough: Punch down the risen dough and roll it on a floured surface into a rectangle about 12 by 16 inches and 1/4 inch thick. Spread the cooled poppy seed filling evenly over the dough, leaving a 1-inch border on all sides.",
      "Form the roll: Starting from a long edge, roll the dough up tightly into a firm log, pinching the seam and tucking the ends underneath so the filling stays sealed. Place seam-side down on a parchment-lined baking sheet. Cover loosely and let rise 30-40 minutes until puffy.",
      "Bake: Preheat the oven to 350F (175C). Beat the reserved egg yolk with a splash of water and brush it over the roll. Bake 40-45 minutes until deep golden brown and the loaf sounds hollow when tapped. If it browns too fast, tent loosely with foil.",
      "Cool and ice: Let the makowiec cool completely on a rack — slicing warm tears the spiral. Whisk the powdered sugar with the lemon juice into a thick but pourable icing and drizzle it over the top.",
      "Slice and serve: Cut into 3/4-inch slices with a serrated knife to show off the poppy seed spiral. Keeps well wrapped at room temperature for 3-4 days; the flavor deepens on day two."
    ],
    "totalTimeMinutes": 210,
    "prepTimeMinutes": 60,
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
      "Buy poppy seeds in bulk from a spice or ethnic grocery rather than tiny supermarket jars — they are dramatically cheaper by weight and you need a full two cups.",
      "No meat grinder? A clean coffee/spice grinder or even an immersion blender works fine for grinding the scalded seeds — just work in small batches.",
      "Skip the walnuts and add an extra 1/4 cup raisins if nuts are over budget; the roll is still authentic and the filling stays rich from the honey and butter."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use almonds or pecans, finely chopped, in the same amount",
        "savings": "Roughly the same; whatever nut is cheapest works"
      },
      {
        "forIngredientId": "honey",
        "swap": "Substitute an equal amount of maple syrup or a thick sugar syrup",
        "savings": "Saves a few dollars if honey is pricey"
      },
      {
        "forIngredientId": "orange",
        "swap": "Use lemon zest, or 1/2 tsp orange or lemon extract",
        "savings": "Use a citrus you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 7,
      "carbs": 45,
      "fat": 16,
      "fiber": 3
    },
    "emoji": "🍥",
    "accentColor": "bg-slate-100",
    "cuisine": "Polish",
    "tags": [
      "baking",
      "polish",
      "christmas",
      "easter",
      "yeasted",
      "dessert",
      "poppy-seed",
      "holiday",
      "rolled-cake"
    ]
  },
  {
    "id": "bake2-mazurek",
    "name": "Mazurek (Polish Easter Shortcrust Tart)",
    "description": "A classic Polish Easter tart: a rich, buttery shortcrust (kruche ciasto) base baked golden, spread with tangy apricot jam, blanketed in silky dulce de leche (kajmak), and decorated with toasted almonds, dried apricots, and dried cranberries. Thin, sweet, and festive — the kind of mazurek a Polish grandmother bakes every Wielkanoc.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour (plus a little for rolling)"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) cold unsalted butter, diced"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large egg yolks (whites reserved or saved for another use)"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 2,
        "note": "2 tbsp sour cream (binds the dough)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "apricot-jam",
        "quantity": 6,
        "note": "6 tbsp apricot jam, for the base layer"
      },
      {
        "ingredientId": "dulce-de-leche",
        "quantity": 12,
        "note": "3/4 cup dulce de leche (kajmak)"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.5,
        "note": "1/2 cup slivered almonds, lightly toasted"
      },
      {
        "ingredientId": "dried-apricots",
        "quantity": 0.25,
        "note": "1/4 cup dried apricots, sliced"
      },
      {
        "ingredientId": "dried-cranberries",
        "quantity": 0.25,
        "note": "1/4 cup dried cranberries"
      }
    ],
    "steps": [
      "Make the shortcrust: In a bowl, whisk together the flour, powdered sugar, salt, and baking powder. Add the cold diced butter and rub it in with your fingertips (or pulse in a food processor) until the mixture looks like coarse crumbs. Add the egg yolks, sour cream, vanilla, and lemon zest, then quickly bring it together into a smooth dough without overworking it. Flatten into a disc, wrap, and chill for at least 30 minutes.",
      "Preheat the oven to 350F (175C). Line a baking sheet or a rectangular tart pan (about 9x13 inch) with parchment paper. Roll the chilled dough out on a floured surface to an even 1/4-inch thickness, then transfer it to the pan, pressing it into a neat rectangle and building up a small 1/2-inch raised rim around the edge to hold the filling.",
      "Prick the base all over with a fork to stop it puffing, then bake for 18-22 minutes until the shortcrust is set and pale golden, with slightly deeper edges. Let it cool completely in the pan — it firms up as it cools.",
      "Warm the apricot jam slightly so it spreads easily, then spread it in a thin, even layer over the cooled crust, keeping inside the raised rim. This tangy layer is what keeps the mazurek from being cloyingly sweet.",
      "Spread the dulce de leche (kajmak) evenly over the jam in a smooth blanket using an offset spatula. If it is very stiff, soften it for 10-15 seconds in the microwave or stir over a warm water bath so it spreads without tearing the jam underneath.",
      "Decorate while the topping is still tacky: scatter and arrange the toasted slivered almonds, sliced dried apricots, and dried cranberries over the surface — traditional mazurki are decorated generously, often in stripes or a lattice pattern, or with an Easter greeting.",
      "Let the tart set at room temperature for about 30 minutes (or briefly in the fridge) so the topping firms. Lift it out using the parchment, trim the edges if you like a clean look, and cut into small squares or rectangles.",
      "Serve at room temperature with coffee or tea. Store covered at cool room temperature for up to 4 days; the shortcrust stays tender and the flavors deepen overnight."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 22,
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
      "Make your own kajmak by simmering an unopened can of sweetened condensed milk, fully submerged, in water for about 2.5-3 hours — far cheaper than buying dulce de leche.",
      "Buy a single bag of mixed dried fruit and slivered almonds instead of separate packets; you only need a small handful of each for decoration.",
      "Use whatever jam is on sale (plum, cherry, and orange marmalade are all traditional mazurek bases) instead of buying apricot specifically."
    ],
    "substitutions": [
      {
        "forIngredientId": "dulce-de-leche",
        "swap": "Thick caramel sauce or homemade condensed-milk kajmak",
        "savings": "Pantry caramel is often cheaper than a jar of dulce de leche"
      },
      {
        "forIngredientId": "apricot-jam",
        "swap": "Plum jam (powidla) or orange marmalade — both deeply traditional for mazurek",
        "savings": "Use whatever fruit preserve is already in your fridge"
      },
      {
        "forIngredientId": "slivered-almonds",
        "swap": "Chopped walnuts or pecans",
        "savings": "Walnuts are usually the cheaper baking nut"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 28,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Polish",
    "tags": [
      "baking",
      "polish",
      "easter",
      "dessert",
      "shortcrust",
      "holiday",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-krem-wka",
    "name": "Kremówka (Polish Vanilla Cream Slice)",
    "description": "The beloved Polish cream cake — two sheets of crisp, golden, oven-baked puff pastry sandwiching a thick, glossy vanilla custard cream, finished with a snowfall of powdered sugar. Famous as \"kremówka papieska\" after John Paul II's fondness for it in Wadowice, it's the dessert every Polish home baker is quietly proud of.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour (2 cups for the rough-puff pastry, 1/2 cup for the custard)"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup cold unsalted butter (12 tbsp for the pastry, kept very cold; 4 tbsp softened, whisked into the custard)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "about 1/2 cup ice-cold water for bringing the pastry dough together"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt (3/4 tsp in pastry, 1/4 tsp in custard)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 3,
        "note": "3 cups whole milk for the custard"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "5 large eggs (yolks only for the custard; save whites for another use)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar for the custard"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "1/4 cup cornstarch to set the custard"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla (a real bean or good extract — vanilla is the soul of kremówka)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "note": "2 tbsp powdered sugar for dusting the top"
      }
    ],
    "steps": [
      "Make a quick rough-puff pastry: whisk 2 cups flour with 3/4 tsp salt. Cut 12 tbsp of the cold butter into small cubes and toss into the flour, flattening each cube with your fingers so you have ragged, flake-sized pieces. Drizzle in the ice water a little at a time, tossing until a shaggy dough just holds together — do not knead. Pat into a rectangle, wrap, and chill 30 minutes.",
      "On a floured surface, roll the dough into a long rectangle, fold it in thirds like a letter, give it a quarter turn, and roll out again. Repeat this fold-and-roll three more times (four folds total), chilling 15 minutes if the butter softens. This builds the layers that puff in the oven. Wrap and chill 30 minutes more.",
      "Heat the oven to 400°F (200°C). Cut the dough in half and roll each piece into a roughly 9x9 inch square, about 1/8 inch thick. Transfer each to a parchment-lined sheet, prick all over with a fork (docking keeps them from doming), and bake one at a time 18-22 minutes until deep golden and crisp. Cool completely on a rack.",
      "Make the custard: in a saucepan, warm the milk with the seeds from the vanilla bean (or hold extract for later) until steaming, not boiling. Meanwhile whisk the 5 egg yolks with the 1 cup sugar until pale, then whisk in 1/2 cup flour, the cornstarch, and 1/4 tsp salt to a smooth paste.",
      "Temper the yolks: slowly pour about a third of the hot milk into the yolk mixture while whisking constantly, then pour it all back into the saucepan. Cook over medium heat, whisking hard and without stopping, until it thickens to a stiff pudding and bubbles plop on the surface — about 3-5 minutes. Keep whisking 1 more minute to cook out the starch.",
      "Off the heat, whisk in the 4 tbsp softened butter and the vanilla extract until glossy. Press plastic wrap directly onto the surface and let it cool to just warm — it should be thick enough to hold a spoon upright.",
      "Sit one pastry sheet in a parchment-lined 8x8 or 9x9 inch pan or frame. Spread all the custard evenly over it (it should be a generous 1 to 1.5 inches thick — that height is the whole point). Gently set the second pastry sheet on top, flat side up, and press very lightly.",
      "Chill the assembled kremówka at least 4 hours, ideally overnight, so the cream sets firm. Just before serving, dust the top thickly with the powdered sugar. Cut into 9 squares with a sharp serrated knife, wiping it between cuts."
    ],
    "totalTimeMinutes": 330,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 45,
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
      "Buy a 1 lb box of store-brand frozen puff pastry instead of making rough-puff from scratch — it's cheaper than a stick of good butter and bakes up just as tall for this cake.",
      "Use only the yolks here and freeze the 5 whites in an ice-cube tray; thawed, they make a free batch of meringues or an egg-white omelet later.",
      "Whole milk gives the richest custard, but if you only have regular milk on hand, whisk an extra tablespoon of butter into the finished cream to make up the richness — no need to buy cream."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "Use thawed store-bought puff pastry for the two sheets instead of the rough-puff flour-and-butter dough",
        "savings": "Saves about $1.50 and 90 minutes of rolling and chilling"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "An equal amount of extra flour (use 3/4 cup flour total in the custard) sets the cream just as firmly",
        "savings": "Saves buying cornstarch, about $0.40"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Scrape in half a real vanilla bean, or use 2 tsp of the seeds-and-extract you have — even a strip of lemon zest steeped in the milk is traditional in some regions",
        "savings": "Roughly neutral; lemon zest is essentially free"
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 7,
      "carbs": 42,
      "fat": 24,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Polish",
    "tags": [
      "baking",
      "polish",
      "dessert",
      "custard",
      "puff-pastry",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-medovn-k",
    "name": "Medovník (Czech Honey Layer Cake)",
    "description": "The authentic Central European honey cake: thin, caramel-warm honey sponge layers cooked over a double boiler, baked in minutes, then sandwiched with a tangy sour-cream-and-butter cream. After a day's rest the layers drink in the filling and turn meltingly soft. A genuine showpiece with a deep honey flavor and gentle caramel notes.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "honey",
        "quantity": 5.33,
        "note": "1/3 cup honey, for the dough"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, for the dough"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 2,
        "note": "2 tsp baking soda"
      },
      {
        "ingredientId": "flour",
        "quantity": 3.25,
        "note": "about 3 1/4 cups all-purpose flour (added gradually until a soft dough forms)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp ground cinnamon (optional, traditional in many regions)"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened, for the cream"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 16,
        "note": "1 cup full-fat sour cream, for the cream"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1 can (14 oz) sweetened condensed milk, for the cream"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "note": "1 cup walnuts, finely chopped, for filling and topping"
      }
    ],
    "steps": [
      "Make the honey dough over a double boiler: in a heatproof bowl set over simmering water, combine the honey, sugar, and 1/2 cup (1 stick) butter. Stir until melted and smooth, then keep over the heat for 2-3 minutes until the mixture is glossy and just beginning to take on a light caramel color.",
      "Take the bowl off the heat for a moment, whisk the baking soda into the warm honey mixture, and watch it foam up and pale. Return to low heat for 30 seconds, stirring, until the foam settles slightly. Off the heat, whisk in the beaten eggs quickly so they don't scramble, plus the cinnamon if using.",
      "Add the flour about 1/2 cup at a time, stirring, until you have a soft, slightly sticky dough that pulls together (you may not need all the flour). Turn it out onto a floured surface, knead briefly into a smooth ball, then divide into 6 equal pieces. Chill 30 minutes for easier rolling.",
      "Preheat the oven to 350F. Roll each piece on a sheet of parchment into a thin round about 9 inches across. Trim to a neat 8-inch circle using a plate as a guide, saving the scraps. Bake each layer on its parchment for 5-7 minutes, until golden and dry; they firm up as they cool. Bake the scraps too, then crush them into crumbs for decoration.",
      "Make the cream: beat the softened 1 cup butter until pale and fluffy, 3-4 minutes. Beat in the sweetened condensed milk a little at a time, then the sour cream and vanilla, until silky and spreadable. Chill 15 minutes if it feels loose.",
      "Assemble: place one cooled layer on a serving plate, spread with a generous layer of cream, and scatter a little chopped walnuts. Repeat with all layers, ending with cream on top. Use the remaining cream to coat the sides.",
      "Press the reserved crumbs and remaining chopped walnuts over the top and sides to fully cover the cake.",
      "Refrigerate at least 12 hours, ideally 24, before slicing. This rest is essential: the dry layers absorb the cream and become tender and soft. Serve cold, in thin slices."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 50,
    "cookTimeMinutes": 40,
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
      "Buy walnuts in bulk bags rather than small baking pouches, and toast them yourself for deeper flavor at a fraction of the cost.",
      "Store-brand sweetened condensed milk and sour cream are identical in this cream filling, so skip the name brands.",
      "Bake the layers and make the cream a day ahead; the cake needs an overnight rest anyway, so it fits perfectly around a tight student schedule."
    ],
    "substitutions": [
      {
        "forIngredientId": "sour-cream",
        "swap": "Full-fat Greek yogurt, strained, gives a similar tang and body in the cream",
        "savings": "Often cheaper per ounce and likely already in your fridge"
      },
      {
        "forIngredientId": "walnuts",
        "swap": "Chopped pecans or even crushed leftover cake-scrap crumbs alone for the coating",
        "savings": "Pecans or crumbs-only can cut a few dollars off nut costs"
      },
      {
        "forIngredientId": "sweetened-condensed-milk",
        "swap": "Dulce de leche for a deeper caramel cream (use slightly less added sugar elsewhere)",
        "savings": "Comparable cost but adds a richer flavor for free"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 7,
      "carbs": 55,
      "fat": 26,
      "fiber": 1
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "Czech",
    "tags": [
      "baking",
      "dessert",
      "layer-cake",
      "honey",
      "make-ahead",
      "czech",
      "slovak",
      "holiday"
    ]
  },
  {
    "id": "bake2-v-no-ka",
    "name": "Vánočka (Czech Christmas Braided Bread)",
    "description": "The classic Czech Christmas bread: a richly enriched, lightly sweet yeasted dough braided into a tall three-tier loaf, studded with rum-soaked raisins and slivered almonds, scented with lemon zest, and glazed gold with egg wash before baking. Soft, buttery, and tender like a Central European challah-meets-brioche, traditionally served Christmas morning with butter.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "4 cups all-purpose flour (plus a little for dusting)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "3/4 cup whole milk, warmed to lukewarm"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant yeast (one 7g packet)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 6,
        "note": "6 tbsp granulated sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 10,
        "note": "10 tbsp unsalted butter, softened"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 whole eggs plus 2 egg yolks (reserve whites/1 yolk for wash)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1.5,
        "note": "zest of 1 lemon (about 1 1/2 tsp)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.75,
        "note": "3/4 cup raisins"
      },
      {
        "ingredientId": "rum",
        "quantity": 2,
        "optional": true,
        "note": "2 oz dark rum, for soaking raisins (optional)"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.5,
        "note": "1/2 cup slivered almonds, for inside and topping"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp powdered sugar, for dusting (optional)"
      }
    ],
    "steps": [
      "Soak the raisins: warm the rum (or 2 tbsp water) and pour over the raisins; let them plump while you make the dough. Warm the milk to lukewarm (about 100F/38C) and stir in the yeast and a pinch of the sugar; let it sit 5-10 minutes until foamy.",
      "Make the dough: in a large bowl combine the flour, remaining sugar, salt, and lemon zest. Add the yeasted milk, the 2 whole eggs and 2 yolks, the vanilla, and the softened butter. Mix to a shaggy dough, then knead 10-12 minutes by hand (or 8 with a stand mixer) until smooth, elastic, and only slightly tacky. The dough should be soft and supple, not dry.",
      "First rise: drain the raisins well and knead them in along with half the slivered almonds. Shape into a ball, cover, and let rise in a warm spot 1 to 1.5 hours until doubled.",
      "Divide for braiding: gently deflate and divide the dough into 6 portions: 3 large, 2 medium, 1 small. Roll each into a smooth rope, the large ones about 14 inches long. Keep the ropes covered as you work so they don't dry out.",
      "Braid the tiers: braid the 3 large ropes into a flat plait on a parchment-lined baking sheet, tucking the ends under. Braid the 2 medium ropes (or twist them) and lay this braid centered on top. Press a chopstick handle down the length to seat it. Twist the small rope and lay it down the center top. Optionally secure the tiers with a couple of toothpicks (remember to remove after baking).",
      "Second rise: loosely cover the braided loaf and let it proof 45-60 minutes until puffy and nearly doubled. Meanwhile heat the oven to 350F (175C).",
      "Glaze and top: beat the reserved egg yolk with a splash of milk and brush the loaf thoroughly, getting into the crevices. Scatter the remaining slivered almonds over the top.",
      "Bake: bake 35-45 minutes until deep golden and the internal temperature reaches about 190F (88C). If the top browns too fast, tent loosely with foil after 20 minutes. Cool completely on a rack before slicing; dust with powdered sugar if desired."
    ],
    "totalTimeMinutes": 210,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 40,
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
      "Skip the rum and plump the raisins in hot water or leftover tea or apple juice instead. It costs nothing and still gives soft, juicy raisins.",
      "Slivered almonds are pricey. Buy a small bag and use it for the topping only, where it shows. The raisins do the heavy lifting on flavor.",
      "A clean 3-strand braid is far easier and forgiving than the full 3-tier version. It bakes the same and still looks festive if a fancy braid feels intimidating."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "Hot water, strong black tea, or apple juice to plump the raisins",
        "savings": "Saves the cost of a bottle of rum"
      },
      {
        "forIngredientId": "slivered-almonds",
        "swap": "Sliced almonds or coarsely chopped whole almonds",
        "savings": "Often cheaper per ounce in the baking aisle"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Dried cranberries or chopped dried apricots for a tarter loaf",
        "savings": "Use whatever dried fruit you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 330,
      "protein": 7,
      "carbs": 48,
      "fat": 12,
      "fiber": 2
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Czech",
    "tags": [
      "baking",
      "christmas",
      "czech",
      "sweet-bread",
      "braided",
      "yeast-bread",
      "holiday",
      "enriched-dough"
    ]
  },
  {
    "id": "bake2-k-rt-skal-cs",
    "name": "Kürtőskalács (Hungarian Chimney Cake)",
    "description": "The classic Transylvanian-Hungarian \"chimney cake\": an enriched, lightly sweet yeast dough wound in a spiral, rolled in granulated sugar, and baked until the sugar caramelizes into a glassy, crackly amber shell over a soft, pull-apart crumb. Finished warm with a roll in cinnamon sugar and toasted walnuts the moment it comes out of the oven. Authentically baked on a wooden or foil-wrapped roller — here adapted faithfully for a standard home oven.",
    "mealType": "snack",
    "servings": 6,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 3.5,
        "note": "3 1/2 cups all-purpose flour (plus a little for dusting)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup whole milk, warmed to about 110F"
      },
      {
        "ingredientId": "active-dry-yeast",
        "quantity": 1,
        "note": "1 packet (2 1/4 tsp) active dry yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar (for the dough)"
      },
      {
        "ingredientId": "butter",
        "quantity": 6,
        "note": "6 tbsp unsalted butter, melted (plus extra melted butter for brushing the rolls)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs (1 whole egg + 1 yolk in the dough; reserve the spare white only if you like)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar for rolling/coating the dough (this caramelizes into the shell)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 2,
        "note": "2 tsp ground cinnamon (for the finishing cinnamon sugar)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 cup walnuts, finely chopped and lightly toasted (classic topping)"
      }
    ],
    "steps": [
      "Bloom the yeast: stir the active dry yeast and a pinch of the dough sugar into the warm milk (about 110F) and let stand 8-10 minutes until foamy. If it doesn't foam, the milk was too hot or the yeast is dead - start over.",
      "Make the dough: in a large bowl combine the flour, remaining 1/4 cup sugar, and salt. Add the foamy milk, the whole egg plus the extra yolk, 6 tbsp melted butter, vanilla, and lemon zest. Mix to a shaggy dough, then knead 8-10 minutes (by hand or stand mixer with the hook) until smooth, supple, and elastic - it should pull away from the bowl but stay soft. Cover and let rise in a warm spot 1 to 1.5 hours, until doubled.",
      "Build the rollers: traditional kürtőskalács bakes on wooden cylinders. To mimic this in a home oven, tightly wrap 6 cans (or cardboard tubes) in two layers of heavy foil to make smooth cylinders about 2-2.5 inches across, brush them well with melted butter, and set them on a foil-lined sheet. Preheat the oven to 375F.",
      "Shape: punch down the dough and divide into 6 pieces. On a lightly floured surface roll each piece into a long rope about 1/2 inch thick and 30-35 inches long. Wind each rope in a spiral around a buttered cylinder, overlapping each turn slightly so the coils just touch. Press the ends gently to seal so they don't unravel.",
      "Coat: brush each wound roll all over with melted butter, then roll it firmly in the 3/4 cup granulated sugar, pressing so a generous, even layer of sugar sticks to every surface - this sugar is what melts and caramelizes into the signature crackly shell.",
      "Bake: stand or lay the sugared rolls on the sheet (rotate them halfway if lying down) and bake at 375F for 20-25 minutes, until deep golden brown and the sugar has melted into a glossy caramel crust. Rotate the pan once for even color; the cakes should sound hollow and the caramel should look glassy, not pale.",
      "Finish: while baking, mix the cinnamon with about 1/4 cup of any leftover/extra granulated sugar and the toasted chopped walnuts. The instant the cakes come out, brush lightly with melted butter and roll them in the cinnamon-sugar-walnut mix so it sticks to the hot caramel.",
      "Unmold and serve: let cool just 3-5 minutes, then carefully twist and slide each spiral off its cylinder (the caramel shell releases as it sets). Serve warm and fresh - kürtőskalács is at its best within an hour or two, pulled apart in soft, sweet, caramelized coils."
    ],
    "totalTimeMinutes": 135,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 25,
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
      "Foil-wrapped soup or bean cans make perfect free 'rollers' - no special wooden kürtős spit needed. Just butter the foil well so the cakes slide off.",
      "Skip the walnuts if you're watching pennies: plain cinnamon sugar is a fully traditional finish and just as good warm.",
      "Buy yeast from the bulk bin or a jar instead of individual packets - it's a fraction of the cost and one jar lasts months in the fridge."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "toasted ground almonds or chopped pecans, or skip for plain cinnamon sugar",
        "savings": "~$2 saved if omitted"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "any milk you have, including 2% or oat milk warmed to 110F",
        "savings": "use what's open, ~$1"
      },
      {
        "forIngredientId": "active-dry-yeast",
        "swap": "instant yeast (same amount, mix straight into the flour, no blooming step needed)",
        "savings": "$0 - convenience swap"
      }
    ],
    "estimatedNutrition": {
      "calories": 520,
      "protein": 11,
      "carbs": 86,
      "fat": 15,
      "fiber": 2
    },
    "emoji": "🥐",
    "accentColor": "bg-amber-100",
    "cuisine": "Hungarian",
    "tags": [
      "baking",
      "dessert",
      "yeast-dough",
      "hungarian",
      "transylvanian",
      "caramelized",
      "chimney-cake"
    ]
  },
  {
    "id": "bake2-beigli",
    "name": "Hungarian Walnut Beigli (Diós Bejgli)",
    "description": "The classic Hungarian Christmas roll: a tender, lightly sweetened yeast dough wrapped snugly around a dense, fragrant ground-walnut filling, baked into a marbled, crackle-topped log. Brushing the rolls first with egg yolk and then, once dried, with egg white is the traditional trick that gives beigli its signature glossy, marbled crust. Sliced thin, it shows off a tight spiral of dark walnut against pale dough.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4,
        "note": "4 cups all-purpose flour, for the dough"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) cold unsalted butter, cubed"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "active-dry-yeast",
        "quantity": 1,
        "note": "1 packet (2 1/4 tsp) active dry yeast"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup lukewarm whole milk, to bloom the yeast"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs — 2 yolks for the dough, plus 1 whole egg separated for the glaze"
      },
      {
        "ingredientId": "sour-cream",
        "quantity": 2,
        "note": "2 tbsp sour cream, for the dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp grated lemon zest, for the dough"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 14,
        "note": "3 1/2 cups (about 14 oz) walnuts, finely ground, for the filling"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered sugar, for the filling"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "note": "2 tbsp honey, for the filling"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.5,
        "note": "1/2 cup golden raisins, for the filling"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk, to scald and moisten the filling"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 tsp ground cinnamon, for the filling"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract, for the filling"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp grated lemon zest, for the filling"
      }
    ],
    "steps": [
      "Make the dough: Stir the yeast into the 1/2 cup lukewarm milk with a pinch of the sugar and let it foam for 8-10 minutes. Meanwhile, rub the cold cubed butter into the flour, remaining sugar, and salt with your fingertips until it looks like coarse crumbs. Add the bloomed yeast, 2 egg yolks, the sour cream, and lemon zest, then bring together into a smooth dough — knead just 2-3 minutes until it comes together (this is a short, rich dough, not a bread dough; do not over-knead). Divide into 2 pieces, wrap, and chill 1 hour (or overnight).",
      "Make the walnut filling: Scald the 1/2 cup milk and pour it over the ground walnuts, powdered sugar, honey, raisins, vanilla, cinnamon, and lemon zest. Stir into a thick, spreadable paste and let cool completely. It should be moist but hold its shape — if it's stiff, add a splash more warm milk; if loose, a spoonful more ground walnuts.",
      "Roll out: On a lightly floured surface, roll each dough half into a rectangle roughly 10 by 14 inches and about 1/8 inch thick. Keep the dough cool and the thickness even — thin dough is what gives beigli its high filling-to-dough ratio.",
      "Fill and roll: Spread half the walnut filling over each rectangle, leaving a 1/2-inch border. Roll up snugly from the long side into a tight log, pinching the seam and tucking the ends. Place seam-side down on a parchment-lined baking sheet, leaving space between the two logs.",
      "First glaze and rest: Lightly beat the reserved egg yolk and brush it all over both logs. Let them sit uncovered at cool room temperature for 30-40 minutes until the yolk glaze dries to a tacky film — this drying step is the key to the marbled, cracked top.",
      "Second glaze and prick: Lightly beat the reserved egg white and brush it over the dried yolk layer. Let dry another 10 minutes, then prick each log every inch or so with a toothpick or skewer, going down to the filling. This vents steam so the rolls don't burst at the seam.",
      "Bake: Bake in a preheated 350°F (180°C) oven for 30-35 minutes, until deep golden and the surface has developed its characteristic marbled cracks. If the tops brown too fast, tent loosely with foil for the last 10 minutes.",
      "Cool and slice: Let the logs cool completely on a rack before slicing — beigli is always cut cold, in thin 1/2-inch slices, to show the tight walnut spiral. It keeps, wrapped, for over a week and the flavor deepens by day two."
    ],
    "totalTimeMinutes": 170,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 35,
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
      "Walnuts are the priciest part — buy them in bulk bags rather than small baking pouches, and grind them yourself in a food processor instead of paying for pre-ground.",
      "Make both logs at once and freeze one unbaked after the second glaze; you get two bakes from one session and barely more cost.",
      "Skip the golden raisins and use regular dark raisins or chopped dried apricots you already have — the filling doesn't care."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Swap the walnut filling for the other classic Hungarian version: ground poppy seeds (mákos bejgli) in the same quantity, sweetened the same way.",
        "savings": "Poppy seeds run similar in price, but it's the second traditional flavor and worth alternating."
      },
      {
        "forIngredientId": "sour-cream",
        "swap": "Use plain Greek yogurt one-for-one in the dough.",
        "savings": "Use up yogurt you already have instead of buying a tub of sour cream."
      },
      {
        "forIngredientId": "honey",
        "swap": "Apricot jam works in the filling for a fruitier note and helps it bind.",
        "savings": "Often cheaper per tablespoon than good honey and adds moisture."
      }
    ],
    "estimatedNutrition": {
      "calories": 295,
      "protein": 6,
      "carbs": 28,
      "fat": 19,
      "fiber": 2
    },
    "emoji": "🥖",
    "accentColor": "bg-amber-100",
    "cuisine": "Hungarian",
    "tags": [
      "baking",
      "christmas",
      "holiday",
      "yeast-dough",
      "walnut",
      "rolled-pastry",
      "traditional",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-kr-mes",
    "name": "Krémes (Hungarian Vanilla Cream Slice)",
    "description": "The classic Hungarian café pastry: two sheets of crisp, golden baked puff pastry sandwiching a tall, trembling layer of vanilla custard cream. The custard is a proper crème pâtissière, cooked thick on the stove then folded with whipped cream and set with a little gelatin so it stands tall yet quivers when you cut it. Finished simply with a snowfall of powdered sugar — no frills, just butter, vanilla, eggs, and milk done right.",
    "mealType": "snack",
    "servings": 9,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour (for the rough-puff pastry)"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup + 2 tbsp cold unsalted butter (16 tbsp for laminating, 2 tbsp for the custard)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt (for the pastry dough)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.5,
        "note": "1/2 cup ice-cold water (to bring the dough together)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 3,
        "note": "3 cups whole milk (for the custard)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, separated (yolks for custard, whites whipped in)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (for the custard)"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 6,
        "note": "6 tbsp cornstarch (to thicken the pastry cream)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.25,
        "note": "1/4 cup all-purpose flour (with the cornstarch, for a sturdy custard)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp pure vanilla extract (or seeds of 1 vanilla bean)"
      },
      {
        "ingredientId": "gelatin",
        "quantity": 1,
        "note": "1 packet (about 2 1/2 tsp) unflavored gelatin, bloomed"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "1 cup cold heavy cream, whipped (folded into the custard)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar, for dusting the top"
      }
    ],
    "steps": [
      "Make the rough-puff pastry: Whisk the flour and salt. Cut 16 tbsp cold butter into the flour, leaving some pieces walnut-sized, then add the ice water and bring it together into a shaggy dough. Pat into a rectangle, then roll out, fold in thirds (like a letter), and rotate 90 degrees. Repeat this roll-and-fold 4 to 5 times, chilling 20 minutes whenever the butter softens. Wrap and rest in the fridge at least 1 hour.",
      "Bake the two pastry sheets: Preheat the oven to 400 F (200 C). Divide the dough in half and roll each into a 9x9-inch square, about 1/8 inch thick. Transfer each to a parchment-lined sheet, prick all over with a fork, and lay a second sheet of parchment plus a light second tray on top to keep one sheet flatter for the base. Bake 20 to 25 minutes until deep golden and crisp. Cool completely. Trim both to match a 8x8 or 9x9 pan; reserve the prettier sheet for the top.",
      "Start the custard: Bloom the gelatin in 3 tbsp cold water and set aside. Warm the milk with the vanilla in a saucepan until steaming. In a bowl, whisk the 6 egg yolks with the granulated sugar, cornstarch, and 1/4 cup flour until smooth and pale.",
      "Temper and cook: Slowly pour about a third of the hot milk into the yolk mixture while whisking, then return everything to the saucepan. Cook over medium heat, whisking constantly, until it thickens to a stiff pudding and bubbles slowly, 3 to 5 minutes. Off heat, whisk in the bloomed gelatin and the remaining 2 tbsp butter until glossy. Press plastic wrap onto the surface and cool to just-warm.",
      "Whip and fold: Beat the 6 egg whites to stiff, glossy peaks. Separately whip the cold heavy cream to soft peaks. Gently fold the whipped cream into the warm custard, then fold in the egg whites in two additions, keeping it airy — this is what gives Krémes its tall, trembling body.",
      "Assemble: Set the base pastry sheet in a lined square pan. Pour the custard over it and spread level — it should be a thick, generous layer at least 1 1/2 inches tall. Set the reserved top sheet gently on the custard, pressing very lightly so it adheres without crushing the cream.",
      "Chill and finish: Refrigerate at least 4 hours, ideally overnight, until the custard is fully set and sliceable. Dust the top sheet generously with powdered sugar. Using a serrated knife dipped in hot water and wiped between cuts, slice into 9 squares and serve cold."
    ],
    "totalTimeMinutes": 360,
    "prepTimeMinutes": 60,
    "cookTimeMinutes": 25,
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
      "Store brand butter is fine here — the lamination does the work, not the label. Just keep it cold.",
      "Skip a pricey vanilla bean and use good extract; stir it into the hot milk so the flavor blooms.",
      "Bake the pastry sheets a day ahead and store airtight; spreading the work over two days also saves on oven energy."
    ],
    "substitutions": [
      {
        "forIngredientId": "gelatin",
        "swap": "Increase cornstarch by 2 tbsp and chill overnight for a firmer set (vegetarian-friendly, no gelatin)",
        "savings": "Saves buying a gelatin packet"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use the same amount of well-chilled whole milk whipped with the extra egg whites — lighter but still classic",
        "savings": "Cheaper than a carton of heavy cream"
      },
      {
        "forIngredientId": "vanilla",
        "swap": "Vanilla bean paste or the scraped seeds of one pod for a more fragrant, speckled custard",
        "savings": "n/a (a flavor upgrade, not a saving)"
      }
    ],
    "estimatedNutrition": {
      "calories": 470,
      "protein": 9,
      "carbs": 45,
      "fat": 29,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Hungarian",
    "tags": [
      "baking",
      "dessert",
      "custard",
      "pastry",
      "hungarian",
      "vanilla",
      "make-ahead",
      "classic"
    ]
  },
  {
    "id": "bake2-paska-bread",
    "name": "Paska (Ukrainian Easter Bread)",
    "description": "A tall, golden, lightly sweet enriched yeast bread from Ukraine, traditionally baked for Easter. The crumb is soft, buttery, and tender from a rich dough of eggs, milk, butter, and sugar, perfumed with vanilla and orange zest. A glossy egg wash gives the classic burnished top. Best baked in a tall round tin (a clean coffee can or panettone mold works) and served in thick slices, plain or with butter.",
    "mealType": "breakfast",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4.5,
        "note": "4 1/2 cups all-purpose flour (plus a little for kneading)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1,
        "note": "1 cup whole milk, warmed to about 110F"
      },
      {
        "ingredientId": "active-dry-yeast",
        "quantity": 1,
        "note": "1 packet (2 1/4 tsp) active dry yeast"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup unsalted butter, melted and slightly cooled"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs (3 for the dough, 1 reserved for the egg wash)"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp orange zest (use a lemon's worth from one orange)"
      },
      {
        "ingredientId": "raisins",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 cup golden raisins, soaked and drained"
      }
    ],
    "steps": [
      "Proof the yeast: in a small bowl combine the warm whole milk (about 110F), 1 tablespoon of the sugar, and the packet of active dry yeast. Stir once and let stand 8-10 minutes until foamy. If it does not foam, your milk was too hot or the yeast is dead start over.",
      "Build the wet base: in a large bowl whisk 3 of the eggs with the remaining sugar, the salt, vanilla, and orange zest until pale. Whisk in the melted (cooled) butter, then the foamy yeast-milk mixture.",
      "Make the dough: add the flour about one cup at a time, stirring with a wooden spoon until a shaggy, sticky dough forms. Turn out onto a floured surface and knead 8-10 minutes (or 6-7 minutes in a stand mixer with the dough hook) until smooth, elastic, and only slightly tacky add flour sparingly so the bread stays tender. If using raisins, knead them in at the end.",
      "First rise: place the dough in a greased bowl, cover, and let rise in a warm spot 1 1/2 to 2 hours until doubled. This rich dough rises slowly be patient.",
      "Shape: grease a tall round tin (a clean large coffee can, panettone mold, or 8-inch round cake pan with a parchment collar). Punch down the dough, reserve a small fist-sized piece if you want to make a traditional braided cross, and shape the rest into a smooth ball. Set it in the tin it should fill it no more than halfway.",
      "Second rise: cover loosely and let rise again 45-60 minutes until the dough crowns just above the rim. Meanwhile, arrange any reserved dough into a braid or cross on top, and heat the oven to 350F (175C).",
      "Egg wash and bake: beat the reserved egg with a teaspoon of water and gently brush the entire top. Bake at 350F for 40-50 minutes until deep golden and the internal temperature reads about 190F. If the top browns too fast, tent loosely with foil after 25 minutes.",
      "Cool and serve: let cool in the tin 10 minutes, then turn out onto a rack and cool fully before slicing this lets the tender crumb set. Slice into thick rounds; lovely plain, with butter, or lightly toasted."
    ],
    "totalTimeMinutes": 230,
    "prepTimeMinutes": 40,
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
      "Active dry yeast is far cheaper bought as a 3-pack of packets or a small jar than as single sachets one jar lasts many bakes if kept in the fridge.",
      "No panettone mold needed: a well-washed tall coffee can or any deep ovenproof tin lined with parchment gives the classic tall shape for free.",
      "Buy whole milk and one orange you only need 1 cup of milk and a little zest, and the rest of both keep for breakfast, so nothing is wasted."
    ],
    "substitutions": [
      {
        "forIngredientId": "active-dry-yeast",
        "swap": "Use 2 tsp instant yeast mixed straight into the flour, skipping the proofing step",
        "savings": "about the same cost, saves 10 minutes"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Warm water or any milk you have on hand whole milk just gives the richest crumb",
        "savings": "saves ~$0.30 if using water"
      },
      {
        "forIngredientId": "raisins",
        "swap": "Golden raisins, dried cranberries, or leave them out entirely for a plain classic loaf",
        "savings": "saves ~$0.50 if omitted"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 7,
      "carbs": 46,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Ukrainian",
    "tags": [
      "baking",
      "easter",
      "bread",
      "enriched-dough",
      "ukrainian",
      "holiday",
      "yeast"
    ]
  },
  {
    "id": "bake2-bougatsa",
    "name": "Bougatsa (Greek Semolina Custard Phyllo Pie)",
    "description": "The classic Thessaloniki-style bougatsa: a creamy semolina custard scented with vanilla and lemon zest, wrapped in butter-brushed phyllo and baked until shatteringly golden, then dusted with powdered sugar and cinnamon. Cut into squares and serve warm for breakfast or as a sweet snack.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "phyllo",
        "quantity": 10,
        "note": "10 sheets phyllo pastry, thawed (about 2/3 of a 1 lb box)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 4,
        "note": "4 cups whole milk"
      },
      {
        "ingredientId": "semolina",
        "quantity": 0.67,
        "note": "2/3 cup fine semolina"
      },
      {
        "ingredientId": "sugar",
        "quantity": 10,
        "note": "10 tbsp granulated sugar (about 2/3 cup)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, melted, for brushing and the custard"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "3 tbsp powdered sugar, for dusting"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon, for dusting"
      }
    ],
    "steps": [
      "Make the custard base: In a heavy saucepan, warm the milk with the sugar and salt over medium heat until steaming but not boiling. While whisking constantly, rain in the semolina in a thin stream to avoid lumps, then cook, stirring continuously, for 5-7 minutes until the mixture thickens to a loose pudding that coats the spoon.",
      "Off the heat, whisk in 2 tbsp of the melted butter, the vanilla, and the lemon zest. Let cool for about 5 minutes so it won't scramble the eggs. In a bowl, beat the eggs, then temper them by whisking in a ladleful of the warm semolina, then whisk the egg mixture back into the saucepan. The custard should be thick and glossy. Press plastic wrap directly onto the surface and let it cool to just warm.",
      "Heat the oven to 350F (180C). Brush a roughly 9x13-inch baking dish with melted butter. Keep the phyllo covered with a damp towel while you work so it doesn't dry out.",
      "Lay 6 sheets of phyllo into the dish one at a time, brushing each lightly with melted butter and letting the excess drape over the edges. Let the overhang hang outside the dish for now.",
      "Spread the cooled semolina custard evenly over the phyllo base. Fold the draped overhang back over the filling to partially enclose it.",
      "Top with the remaining 4 phyllo sheets, brushing each with melted butter, and tuck the edges down into the sides of the dish to seal in the custard. Brush the top generously with the last of the butter.",
      "With a sharp knife, score the top phyllo layers into 8 squares (cutting only through the top, not into the custard) to make serving easier and to let steam escape. Bake on the middle rack for 40-45 minutes, until the top is deeply golden and crisp.",
      "Let the bougatsa rest 15 minutes so the custard sets. Dust the whole top heavily with powdered sugar and a sifting of cinnamon, cut along the scored lines, and serve warm."
    ],
    "totalTimeMinutes": 90,
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
      "Buy a 1 lb box of phyllo and freeze the unused half for the next bake; it keeps for months wrapped tightly.",
      "Whole milk and semolina are the cheap backbone here. Skip pricey vanilla beans and use plain vanilla extract; the lemon zest does the aromatic heavy lifting.",
      "Don't toss the phyllo scraps. Layer torn bits between the main sheets so nothing goes to waste."
    ],
    "substitutions": [
      {
        "forIngredientId": "semolina",
        "swap": "Fine cornmeal or Cream of Wheat in a pinch",
        "savings": "Often already in the pantry, saves a special trip"
      },
      {
        "forIngredientId": "butter",
        "swap": "Melted ghee for a more traditional, nuttier flavor",
        "savings": "About the same cost but more authentic to many Greek kitchens"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "2% milk plus 2 tbsp extra butter in the custard",
        "savings": "Use up milk you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 8,
      "carbs": 38,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🥮",
    "accentColor": "bg-amber-100",
    "cuisine": "Greek",
    "tags": [
      "baking",
      "greek",
      "dessert",
      "custard",
      "phyllo",
      "breakfast",
      "vegetarian"
    ]
  },
  {
    "id": "bake2-melomakarona",
    "name": "Melomakarona (Greek Honey Cookies)",
    "description": "Classic Greek Christmas honey cookies: tender, lightly spiced olive-oil and orange dough baked deep gold, then soaked in warm honey-cinnamon syrup and topped with crushed walnuts.",
    "mealType": "snack",
    "servings": 30,
    "ingredients": [
      {
        "ingredientId": "olive-oil",
        "quantity": 16,
        "note": "1 cup Greek extra-virgin olive oil (dough)"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "1/2 cup neutral vegetable oil (dough)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar (dough)"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 0.75,
        "note": "3/4 cup fresh orange juice"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "zest of 1 orange (about 1 tsp packed)"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp lemon juice"
      },
      {
        "ingredientId": "flour",
        "quantity": 4.5,
        "note": "4 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "semolina",
        "quantity": 0.5,
        "note": "1/2 cup fine semolina"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 2,
        "note": "2 tsp baking powder"
      },
      {
        "ingredientId": "baking-soda",
        "quantity": 0.5,
        "note": "1/2 tsp baking soda"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1.5,
        "note": "1 1/2 tsp ground cinnamon (dough)"
      },
      {
        "ingredientId": "cloves",
        "quantity": 0.5,
        "note": "1/2 tsp ground cloves (dough)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "honey",
        "quantity": 16,
        "note": "1 cup Greek honey (syrup)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (syrup)"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "1 1/2 cups water (syrup)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon or 1 stick (syrup)"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "1 lemon, peel and a squeeze of juice (syrup)"
      },
      {
        "ingredientId": "walnuts",
        "quantity": 1,
        "note": "1 cup walnuts, finely chopped (topping)"
      }
    ],
    "steps": [
      "Make the syrup first so it has time to cool. In a saucepan combine 1 cup honey, 1 cup sugar, 1 1/2 cups water, the cinnamon, a few strips of lemon peel, and a squeeze of lemon juice. Bring to a boil, then simmer gently for 5 minutes, skimming any foam. Remove from heat and cool completely. Hot cookies go into cool syrup (or cool cookies into warm syrup) — never hot into hot, or they fall apart.",
      "Make the dough: in a large bowl whisk the olive oil, vegetable oil, and 1/2 cup sugar until blended. Whisk in the orange juice, orange zest, lemon juice, and brandy if using.",
      "In a separate bowl whisk the flour, semolina, baking powder, baking soda, 1 1/2 tsp cinnamon, ground cloves, and salt. Add the dry to the wet and fold gently just until a soft, slightly oily dough forms. Do NOT knead — overworking makes them tough. Rest 10 minutes.",
      "Preheat oven to 350°F (180°C) and line two sheets with parchment. Pinch off walnut-sized pieces (about 1 1/2 tbsp), shape into smooth ovals, place 1 inch apart, and flatten the tops slightly. Press a fork or fine grater over each for the traditional texture.",
      "Bake 22-28 minutes until deeply golden and firm — they should sound hollow when tapped. Underbaked cookies turn gummy in syrup, so let them get real color.",
      "While still warm, drop the cookies a few at a time into the fully cooled syrup. Soak 10-15 seconds per side, spooning syrup over them, then lift out with a slotted spoon onto a rack or platter.",
      "Immediately sprinkle each soaked cookie with finely chopped walnuts (a pinch of cinnamon mixed in is traditional) so they stick to the wet surface.",
      "Rest at least a few hours, ideally overnight, so the syrup distributes and the centers turn soft. Store loosely covered at room temperature; they keep up to 2 weeks and improve with time."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 28,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "dairy-free",
      "vegetarian"
    ],
    "cheapTips": [
      "Honey is the priciest part — use half honey and half extra sugar in the syrup and no one will complain; the orange and cinnamon carry the flavor.",
      "Buy walnuts in bulk and chop them yourself instead of buying pre-chopped; you only need a cup and the rest freezes well.",
      "One batch makes about 30 cookies that keep two weeks, so it's a cheap-per-piece treat — make the full batch rather than halving it."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "pecans or almonds, finely chopped",
        "savings": "use whatever nut is cheapest in bulk"
      },
      {
        "forIngredientId": "semolina",
        "swap": "fine cornmeal or extra all-purpose flour",
        "savings": "skip a specialty purchase"
      },
      {
        "forIngredientId": "brandy",
        "swap": "extra orange juice",
        "savings": "avoid buying liquor"
      }
    ],
    "estimatedNutrition": {
      "calories": 195,
      "protein": 2,
      "carbs": 27,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍯",
    "accentColor": "bg-amber-100",
    "cuisine": "Greek",
    "tags": [
      "baking",
      "greek",
      "christmas",
      "dessert",
      "honey",
      "cookies",
      "holiday",
      "make-ahead",
      "dairy-free"
    ]
  },
  {
    "id": "bake2-koulourakia",
    "name": "Koulourakia (Greek Easter Butter Cookies)",
    "description": "Classic Greek braided butter cookies — tender, lightly sweet, and scented with vanilla and orange, finished with a glossy egg wash and a sprinkle of sesame. Twisted into the traditional coils and ropes, they bake up golden with a delicate crisp edge and a soft crumb that's made for dunking in coffee or tea.",
    "mealType": "snack",
    "servings": 36,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 4.5,
        "note": "4 1/2 cups all-purpose flour, plus more for dusting"
      },
      {
        "ingredientId": "butter",
        "quantity": 16,
        "note": "1 cup (2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs (2 for the dough, 1 for the egg wash)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp baking powder"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "zest of 1 orange, plus 3 tbsp fresh orange juice"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.1875,
        "note": "3 tbsp whole milk, for the dough and to loosen the egg wash"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 2,
        "optional": true,
        "note": "2 tsp sesame seeds, for sprinkling"
      }
    ],
    "steps": [
      "Bring the butter and eggs to room temperature before starting — this is essential for a dough that creams properly and doesn't crack. Whisk together the flour, baking powder, and salt in a bowl and set aside.",
      "In a large bowl, beat the softened butter and sugar with a mixer on medium-high until pale, light, and fluffy, about 4 to 5 minutes. Don't rush this; the air you beat in gives the cookies their tender, slightly crumbly texture.",
      "Beat in 2 of the eggs one at a time, fully incorporating each before adding the next. Mix in the vanilla, orange zest, and orange juice. The batter may look slightly curdled from the juice — that's fine, it comes together with the flour.",
      "Add the flour mixture in two or three additions on low speed, alternating with the 2 tbsp milk, mixing just until a soft, smooth dough forms. Stop as soon as no dry streaks remain; overmixing makes tough cookies. The dough should be soft but not sticky — knead in a little extra flour by hand only if it clings to your fingers.",
      "Cover the dough and let it rest at room temperature for 20 to 30 minutes. Meanwhile, position racks in the upper and lower thirds of the oven and preheat to 350F (175C). Line two baking sheets with parchment.",
      "Pinch off about 1 1/2 tablespoons of dough and roll it on a clean surface into a rope about 8 inches long and pencil-thick. Fold the rope in half and twist the two halves around each other into a braid, or coil it into a spiral. Place shaped cookies about 1 inch apart on the lined sheets.",
      "Beat the remaining egg with the remaining 1 tbsp milk and brush each cookie generously with the wash for a deep golden shine. Sprinkle with sesame seeds if using.",
      "Bake for 18 to 22 minutes, rotating the sheets top-to-bottom halfway through, until the cookies are golden brown and firm. Let them cool on the sheet for 5 minutes, then transfer to a rack. They keep in an airtight tin for up to 2 weeks and only get better with a dunk in coffee."
    ],
    "totalTimeMinutes": 75,
    "prepTimeMinutes": 35,
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
      "Skip buying fresh oranges if money's tight — 1 tsp orange extract or a splash of bottled juice gives the same citrus lift for pennies.",
      "Make a double batch and freeze the unbaked shaped cookies on a tray, then bag them; bake straight from frozen, adding 2 to 3 minutes. Cheaper per cookie and always fresh.",
      "Sesame seeds are optional and add cost — the cookies are completely traditional brushed plain with just the glossy egg wash."
    ],
    "substitutions": [
      {
        "forIngredientId": "orange",
        "swap": "1 tsp lemon zest plus 2 tsp vanilla, or 1 tsp ground mahlepi if you can find it",
        "savings": "~$1.00"
      },
      {
        "forIngredientId": "butter",
        "swap": "equal amount of a good plant butter for a dairy-free version (texture stays close)",
        "savings": "$0"
      },
      {
        "forIngredientId": "sesame-seeds",
        "swap": "leave them off entirely, or use poppy seeds",
        "savings": "~$0.50"
      }
    ],
    "estimatedNutrition": {
      "calories": 118,
      "protein": 2,
      "carbs": 16,
      "fat": 5,
      "fiber": 0.5
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Greek",
    "tags": [
      "baking",
      "greek",
      "cookies",
      "dessert",
      "easter",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-portokalopita",
    "name": "Portokalopita (Greek Orange Phyllo Cake)",
    "description": "The real Greek portokalopita: scrunched, dried phyllo torn into a custardy orange-yogurt batter, baked until golden, then drenched while hot in an orange-cinnamon syrup. The phyllo soaks up the syrup and turns into a moist, sponge-like cake with a faint chew — fragrant with fresh orange zest and juice. A beloved Greek café classic, best the day after.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "phyllo",
        "quantity": 1,
        "note": "1 lb (450 g) phyllo pastry, ~16-18 sheets, thawed"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 1,
        "note": "1 cup full-fat Greek yogurt"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 12,
        "note": "3/4 cup neutral oil (sunflower or vegetable)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (for the batter)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs"
      },
      {
        "ingredientId": "orange",
        "quantity": 3,
        "note": "3 oranges — zest of all 3 plus 1/2 cup fresh juice"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "1 tbsp baking powder"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar (for the syrup)"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "2 cups water (for the syrup)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "1 cinnamon stick (or 1 tsp ground cinnamon), for the syrup"
      }
    ],
    "steps": [
      "Open and unfold the phyllo, separate the sheets, and lay them out loosely (draped over chair backs or spread on the counter) for 2-3 hours until dry and brittle. This is the defining step — dry phyllo crumbles into the batter and gives portokalopita its sponge-like crumb instead of a gummy paste. (Short on time: tear it up and bake the pieces at 300F/150C for 8-10 minutes until dry.)",
      "Make the syrup first so it can cool completely. Combine the 2 cups sugar, 2 cups water, the cinnamon stick, and a few strips of orange peel in a saucepan. Bring to a boil, then simmer 8-10 minutes until lightly syrupy. Turn off the heat, stir in a splash of the orange juice, and leave to cool fully — a hot cake must always meet cold syrup, never the reverse.",
      "Preheat the oven to 350F (175C) and grease a 9x13 inch baking pan. Zest all 3 oranges and squeeze 1/2 cup juice; set aside.",
      "Whisk the batter: beat the 4 eggs with 1 cup sugar until pale and frothy, about 2-3 minutes. Whisk in the oil in a steady stream, then the Greek yogurt, orange zest, orange juice, and vanilla until smooth. Sprinkle the baking powder over the top and whisk it in.",
      "Tear the dried phyllo into small shreds (roughly 1-2 inch pieces) directly into the batter, fluffing and separating as you go so no clumps stay dry. Fold gently with your hands until every shred is coated and the mixture looks like a loose, ragged custard.",
      "Tip the mixture into the prepared pan and spread level. Bake on the middle rack for 40-45 minutes, until deep golden brown on top and set in the center (a skewer should come out with no wet batter).",
      "As soon as the cake comes out of the oven, ladle the cold syrup evenly over the hot surface, going slowly and letting each addition soak in before adding more. Use all of it — it will look like too much, but the phyllo drinks it up.",
      "Let the portokalopita rest at least 2-3 hours (ideally overnight) so the syrup distributes and the cake firms into clean, moist squares. Cut into 12 pieces and serve at room temperature, optionally with a dusting of cinnamon or a spoon of yogurt."
    ],
    "totalTimeMinutes": 240,
    "prepTimeMinutes": 180,
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
      "Phyllo is cheapest in the freezer aisle and one box is all you need — let leftover sheets dry out and freeze them for the next batch.",
      "Don't buy bottled orange juice or zest; 3 whole oranges give you both the juice and the fragrant zest that carry the whole cake.",
      "A plain cinnamon stick (or just ground cinnamon) in the syrup adds bakery-level aroma for pennies versus fancy flavorings."
    ],
    "substitutions": [
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Plain full-fat yogurt or skyr, strained slightly if runny",
        "savings": "Often cheaper per cup than Greek-style"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Light olive oil for a more traditional Greek flavor",
        "savings": "Use what you already have on hand"
      },
      {
        "forIngredientId": "orange",
        "swap": "2 oranges plus 1 lemon for a brighter, more citrus-forward syrup",
        "savings": "Swap in a lemon you already have"
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 6,
      "carbs": 62,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🍊",
    "accentColor": "bg-orange-100",
    "cuisine": "Greek",
    "tags": [
      "baking",
      "greek",
      "dessert",
      "phyllo",
      "orange",
      "syrup-soaked",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-karidopita",
    "name": "Karidopita (Greek Walnut Syrup Cake)",
    "description": "A classic Greek walnut cake — a moist, lightly spiced crumb dense with toasted walnuts, breadcrumbs and warm cinnamon and clove, baked in a pan and drenched while warm in a lemon-and-cinnamon syrup. The syrup soaks into every bite, leaving the cake tender, glistening and deeply nutty. A staple of village kitchens and name-day tables across Greece.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "walnuts",
        "quantity": 12,
        "note": "3 cups walnuts, coarsely chopped (toasted)"
      },
      {
        "ingredientId": "breadcrumbs",
        "quantity": 1.5,
        "note": "1 1/2 cups fine dry breadcrumbs"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup all-purpose flour"
      },
      {
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, separated"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (for the batter)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup unsalted butter, melted"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 4,
        "note": "4 tsp ground cinnamon (1 1/3 tbsp)"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground cloves"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 3,
        "note": "3 tsp baking powder (1 tbsp)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "1 orange, zested (zest only, for the batter)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar (for the syrup)"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "2 cups water (for the syrup)"
      },
      {
        "ingredientId": "honey",
        "quantity": 2,
        "note": "2 tbsp honey (for the syrup)"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "1 lemon — 1 strip of peel plus 1 tbsp juice (for the syrup)"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 cinnamon stick or 1 tsp ground cinnamon (for the syrup)"
      }
    ],
    "steps": [
      "Make the syrup first so it cools completely (it must be cold when it hits the warm cake). Combine the 2 cups sugar, 2 cups water, honey, the strip of lemon peel and the cinnamon stick in a saucepan. Bring to a boil, then simmer 8-10 minutes until very slightly syrupy. Stir in the lemon juice, take off the heat, and let it cool fully — chill it if you have time.",
      "Preheat the oven to 350F (175C) and butter a 9x13-inch baking pan. Spread the chopped walnuts on a tray and toast 7-8 minutes until fragrant, then cool. Reserve a small handful for garnish and combine the rest with the breadcrumbs, flour, baking powder, cinnamon, cloves and salt in a bowl.",
      "Beat the egg yolks with the 1 cup sugar until pale and thick, 3-4 minutes. Beat in the melted butter, vanilla and orange zest until smooth and emulsified.",
      "Fold the dry walnut mixture into the yolk mixture. It will be very stiff and sandy — that's correct; it loosens once the whites go in.",
      "In a clean bowl, whip the egg whites to stiff, glossy peaks. Stir a third of the whites into the heavy batter to slacken it, then gently fold in the rest in two additions, keeping as much air as possible.",
      "Scrape into the prepared pan and level the top. Bake 35-40 minutes, until deep golden and a skewer comes out clean. The cake should spring back lightly when pressed.",
      "As soon as the cake comes out of the oven, score it into 16 squares or diamonds with a sharp knife. Slowly ladle all of the cold syrup evenly over the hot cake — it will sizzle and absorb. Let it sit at least 3-4 hours (ideally overnight) so the syrup soaks all the way through.",
      "Scatter the reserved walnuts over the top, cut along the scored lines, and serve at room temperature. It keeps, covered, for up to 5 days and only gets better."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 40,
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
      "Buy walnuts in bulk or as halves/pieces rather than pre-chopped — they're far cheaper by weight and you're chopping them anyway.",
      "Make your own breadcrumbs from stale bread blitzed in a blender or grated; it's free and authentic to how this cake started as a way to use up dry bread.",
      "The orange zest and a cinnamon stick are nice but optional — ground cinnamon and a splash of lemon juice carry the syrup just fine on a tight budget."
    ],
    "substitutions": [
      {
        "forIngredientId": "walnuts",
        "swap": "Use pecans for part of the walnuts — close in fat and texture, still authentic-tasting.",
        "savings": "Often similar or cheaper on sale"
      },
      {
        "forIngredientId": "honey",
        "swap": "Skip the honey and use an extra tablespoon of sugar in the syrup; honey mainly adds floral depth.",
        "savings": "Saves on a pricey jar"
      },
      {
        "forIngredientId": "butter",
        "swap": "Vegetable oil works in place of melted butter and keeps the crumb even moister.",
        "savings": "Cheaper than butter"
      }
    ],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 6,
      "carbs": 42,
      "fat": 18,
      "fiber": 2
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Greek",
    "tags": [
      "baking",
      "greek",
      "dessert",
      "cake",
      "syrup-soaked",
      "walnut",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-ekerpare",
    "name": "Şekerpare (Turkish Semolina Cookies in Lemon Syrup)",
    "description": "Şekerpare are soft, melt-in-the-mouth Turkish semolina-and-flour cookies, each crowned with a blanched almond, baked until golden and then drowned in a cool lemon-scented sugar syrup. The contrast of the warm, just-baked cookie soaking up cold syrup is what makes them irresistible — they turn dense, moist, and almost custardy inside while staying lightly crisp on top. A teahouse classic served all over Turkey.",
    "mealType": "snack",
    "servings": 18,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (170g) unsalted butter, melted and cooled"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered (icing) sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, plus 1 yolk (reserve white for brushing if desired)"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 2,
        "note": "2 tbsp neutral vegetable oil"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "semolina",
        "quantity": 0.5,
        "note": "1/2 cup fine semolina"
      },
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups all-purpose flour (add gradually until a soft, non-sticky dough forms)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest"
      },
      {
        "ingredientId": "almonds",
        "quantity": 0.25,
        "note": "about 18 blanched almonds (1/4 cup), one per cookie"
      },
      {
        "ingredientId": "sugar",
        "quantity": 32,
        "note": "2 cups granulated sugar (for the syrup)"
      },
      {
        "ingredientId": "water",
        "quantity": 1.5,
        "note": "1 1/2 cups water (for the syrup)"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "1 tbsp lemon juice (or juice of half a fresh lemon)"
      }
    ],
    "steps": [
      "Make the syrup first so it has time to cool completely: combine the granulated sugar and water in a saucepan, bring to a boil, then lower the heat and simmer gently for 12-15 minutes until slightly thickened. Stir in the lemon juice and simmer 1 minute more. Remove from heat and let cool fully to room temperature — cold syrup over warm cookies is the secret to the right texture.",
      "Preheat the oven to 350°F (175°C) and line a baking tray with parchment. In a large bowl, whisk the melted butter, oil, and powdered sugar until smooth, then beat in the whole egg, the extra yolk, vanilla, and lemon zest.",
      "Whisk together the semolina, baking powder, and most of the flour, then add to the wet mixture. Knead gently, adding the remaining flour a little at a time, until you get a soft dough that just stops sticking to your hands — do not overwork it or the cookies turn hard.",
      "Pinch off walnut-sized pieces (about 1 1/2 tbsp each) and roll into smooth balls. Place on the tray about 1 1/2 inches apart, flatten the tops very slightly, and press one blanched almond firmly into the center of each. For extra shine, brush the tops with a little reserved egg white.",
      "Bake for 20-25 minutes, until the tops are pale golden and the bottoms are lightly browned. They should be set but not dark — they continue to firm up as they soak.",
      "As soon as the cookies come out of the oven, ladle the cooled syrup evenly over the hot cookies right on the tray (or transfer to a shallow dish first). You will hear them sizzle. Use all the syrup.",
      "Let the cookies sit and absorb the syrup for at least 1 hour, spooning any pooled syrup back over them once or twice, until the syrup is fully soaked in and the cookies are plump and glossy.",
      "Serve at room temperature with Turkish tea. They keep covered at room temperature for 3-4 days and only get better as they rest."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 25,
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
      "Skip the blanched almonds and use any plain almonds you have — blanch them yourself by soaking in just-boiled water for 1 minute and slipping off the skins.",
      "Bottled lemon juice and a pinch of extra zest do the job of fresh lemon in the syrup for a fraction of the cost.",
      "Make a full batch — they cost pennies per cookie and keep for days, so one bake covers a whole week of tea-time snacks."
    ],
    "substitutions": [
      {
        "forIngredientId": "semolina",
        "swap": "Equal amount of fine cornmeal or extra flour; semolina gives the classic slightly sandy bite but the cookies still work without it.",
        "savings": "Use what's in the pantry, no extra spend"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "1 tbsp lemon juice from a fresh lemon, or a few drops of vinegar to keep the syrup from crystallizing.",
        "savings": "Pennies if you already have a lemon"
      },
      {
        "forIngredientId": "almonds",
        "swap": "Half a walnut, a pistachio, or even a clove pressed into each cookie if you have no almonds.",
        "savings": "Use existing nuts instead of buying blanched almonds"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 3,
      "carbs": 35,
      "fat": 7,
      "fiber": 1
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Turkish",
    "tags": [
      "baking",
      "dessert",
      "turkish",
      "syrup-soaked",
      "cookies",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-mawa-cake",
    "name": "Parsi Mawa Cake",
    "description": "A classic Parsi tea-time cake built around mawa (reduced milk solids), recreated here with rich ricotta, evaporated and condensed milk for that signature dense, milky, melt-in-the-mouth crumb. Perfumed with green cardamom and a whisper of nutmeg, scattered with almonds, and baked low and slow until deep gold. This is the Irani-bakery cake Mumbai runs on — sturdy, fragrant, and not too sweet.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "semolina",
        "quantity": 0.25,
        "note": "1/4 cup fine semolina (sooji), for a tender-dense crumb"
      },
      {
        "ingredientId": "ricotta",
        "quantity": 1,
        "note": "1/2 cup whole-milk ricotta, standing in for grainy mawa/khoya (this is two 1/2-cup units)"
      },
      {
        "ingredientId": "evaporated-milk",
        "quantity": 1,
        "note": "1/2 cup evaporated milk, for the reduced-milk richness of mawa"
      },
      {
        "ingredientId": "condensed-milk",
        "quantity": 1,
        "note": "1/4 cup sweetened condensed milk, deepens the mawa flavor"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, at room temperature"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 1.5,
        "note": "1 1/2 tsp freshly ground green cardamom (the signature flavor)"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp freshly grated nutmeg"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "slivered-almonds",
        "quantity": 0.25,
        "note": "1/4 cup slivered almonds, for scattering on top"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "1/4 cup whole milk, to loosen the batter as needed"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 325F (165C). Grease an 8-inch round or 8.5x4.5-inch loaf pan, line the bottom with parchment, and grease again. The low temperature is essential — mawa cake is baked slow so the milk solids set into a moist, even crumb without doming or cracking.",
      "Whisk together the flour, semolina, baking powder, ground cardamom, nutmeg, and salt in a bowl. Let the semolina sit in this mix while you build the batter; it begins to hydrate and gives the cake its characteristic close, slightly grainy texture.",
      "In a large bowl, beat the softened butter with the sugar until pale and fluffy, 4 to 5 minutes. This long creaming builds the structure that carries the heavy milk solids. Add the eggs one at a time, beating well after each so the batter stays emulsified and smooth.",
      "Beat in the ricotta, evaporated milk, condensed milk, and vanilla. The batter may look slightly broken — that is fine; it comes together once the flour goes in. This trio of dairy is the stand-in for traditional mawa and gives the cake its deep, milky flavor.",
      "Add the dry ingredients in two additions, folding gently with a spatula just until no streaks remain. Do not overmix. If the batter is stiffer than a thick ribbon, fold in the milk a tablespoon at a time until it slowly drops off the spatula.",
      "Scrape the batter into the prepared pan and smooth the top. Scatter the slivered almonds evenly over the surface. Tap the pan once on the counter to release large air pockets.",
      "Bake at 325F for 55 to 70 minutes (loaf pans run longer than rounds), until deep golden, the top springs back, and a skewer inserted in the center comes out with just a few moist crumbs. If the top browns too fast past the 40-minute mark, tent loosely with foil.",
      "Cool in the pan on a rack for 15 minutes, then turn out, peel off the parchment, and cool completely right-side up. Mawa cake firms and deepens in flavor as it sits — it is best after a few hours and even better the next day, sliced thick alongside hot chai."
    ],
    "totalTimeMinutes": 90,
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 65,
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
      "Buy whole green cardamom pods and grind them yourself — far cheaper per gram than pre-ground, and the aroma is incomparably better. Pre-ground cardamom loses its punch fast.",
      "Ricotta plus evaporated and condensed milk is a budget-friendly way to fake mawa, which is hard to find and pricey. Together they nail the dense, milky character without a specialty trip.",
      "Skip a stand mixer — a hand whisk and 5 minutes of elbow grease creams the butter and sugar just fine for this dense cake."
    ],
    "substitutions": [],
    "estimatedNutrition": {
      "calories": 340,
      "protein": 7,
      "carbs": 38,
      "fat": 18,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian (Parsi)",
    "tags": [
      "baking",
      "indian",
      "parsi",
      "tea-cake",
      "cardamom",
      "dessert",
      "vegetarian",
      "mawa",
      "irani-bakery"
    ]
  },
  {
    "id": "bake2-karachi-biscuits",
    "name": "Karachi Biscuits (Hyderabadi Tutti-Frutti Cookies)",
    "description": "The iconic eggless cookies from Hyderabad's Karachi Bakery — a buttery, almost melt-in-the-mouth shortbread perfumed with cardamom, faintly tinted gold with custard powder, and freckled with chewy tutti-frutti. Crisp at the edge, sandy and tender at the heart, with that unmistakable bakery-counter aroma. Naturally eggless, the way the originals are made.",
    "mealType": "snack",
    "servings": 24,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2,
        "note": "2 cups all-purpose flour (maida)"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 4,
        "note": "1/4 cup custard powder (use cornstarch + a few drops vanilla and a pinch of turmeric as the closest stand-in)"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1.5 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered (icing) sugar"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.1875,
        "note": "3 tbsp whole milk, to bind"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 0.75,
        "note": "3/4 tsp green cardamom powder (seeds of about 6-7 pods, ground)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.5,
        "note": "1/2 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "turmeric",
        "quantity": 0.125,
        "optional": true,
        "note": "1/8 tsp turmeric, for the classic pale-gold tint (or a drop of yellow food color)"
      },
      {
        "ingredientId": "dried-cranberries",
        "quantity": 0.5,
        "note": "1/2 cup tutti-frutti (candied papaya); dried cranberries are the closest catalog swap"
      },
      {
        "ingredientId": "cashews",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 cup cashews, chopped"
      }
    ],
    "steps": [
      "In a bowl, whisk together the flour, custard powder (cornstarch stand-in), baking powder, salt, cardamom powder, and turmeric. Set this dry mix aside.",
      "In a separate large bowl, beat the softened butter and powdered sugar together until pale, light, and fluffy — about 3-4 minutes by hand or 2 minutes with a mixer. This aeration is what gives the biscuits their tender melt.",
      "Beat in the vanilla. Add the dry mix in two batches, folding gently. Add the milk a little at a time and bring everything together into a soft, non-sticky dough — do not overwork it or the biscuits turn hard.",
      "Fold in the tutti-frutti (or dried cranberries) and chopped cashews, distributing them evenly through the dough.",
      "Shape the dough into a log about 2 inches thick (or press into a small parchment-lined loaf tin and chill), wrap in parchment, and refrigerate for at least 30 minutes until firm. Chilling is essential for clean slices and prevents spreading.",
      "Preheat the oven to 340°F (170°C) and line two baking sheets with parchment. Slice the chilled log into rounds about 1/3 inch (8 mm) thick and arrange them an inch apart on the trays.",
      "Bake for 15-18 minutes, until the bottoms are set and the edges are just barely golden — the tops should stay pale, not browned. They will feel soft when hot.",
      "Let the biscuits rest on the tray for 5 minutes (they are fragile while warm), then transfer to a rack to cool completely. They crisp up and develop their signature sandy crumb as they cool."
    ],
    "totalTimeMinutes": 70,
    "prepTimeMinutes": 20,
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
      "Custard powder is the soul of these biscuits but pricey for one bake — a box of cornstarch with a drop of vanilla and a pinch of turmeric mimics both the color and crumb for a fraction of the cost.",
      "Buy tutti-frutti or dried cranberries from the bulk bin and only weigh out the half cup you need instead of a whole bag.",
      "Soften cold butter fast by cubing it and leaving it out 20 minutes — no need to buy fancy 'baking butter'; regular stick butter works perfectly."
    ],
    "substitutions": [
      {
        "forIngredientId": "cornstarch",
        "swap": "Real custard powder (1/4 cup) if you have it — it is the traditional ingredient and gives the most authentic flavor and color",
        "savings": "costs a bit more but most authentic"
      },
      {
        "forIngredientId": "dried-cranberries",
        "swap": "Classic tutti-frutti (candied papaya) is the authentic choice; chopped candied citrus peel also works",
        "savings": "similar cost"
      },
      {
        "forIngredientId": "butter",
        "swap": "Ghee (3/4 cup) for an even richer, more traditional Indian-bakery aroma",
        "savings": "comparable"
      }
    ],
    "estimatedNutrition": {
      "calories": 115,
      "protein": 1.4,
      "carbs": 14,
      "fat": 6,
      "fiber": 0.4
    },
    "emoji": "🍪",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian (Hyderabadi)",
    "tags": [
      "baking",
      "eggless",
      "cookies",
      "indian-sweets",
      "cardamom",
      "tutti-frutti",
      "snack",
      "tea-time",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-kerala-plum-cake",
    "name": "Kerala Plum Cake (Christmas Fruit Cake)",
    "description": "The classic Syrian-Christian Christmas cake from Kerala, built on rum-soaked dried fruits and a deep burnt-sugar caramel that gives the crumb its signature dark color and bittersweet edge. Loaded with cashews and warm spices, it's dense, moist, and boozy in the best way. Soak the fruit ahead for the most authentic flavor.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "raisins",
        "quantity": 1,
        "note": "1/4 cup raisins (for soaking)"
      },
      {
        "ingredientId": "dried-cranberries",
        "quantity": 1,
        "note": "1/4 cup dried cranberries (stands in for tutti-frutti/candied peel)"
      },
      {
        "ingredientId": "dried-apricots",
        "quantity": 1,
        "note": "1/4 cup dried apricots, finely chopped"
      },
      {
        "ingredientId": "rum",
        "quantity": 4,
        "note": "1/2 cup dark rum, for soaking the fruit"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup white sugar, for the burnt-sugar caramel"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1/4 cup hot water, to deglaze the caramel"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour"
      },
      {
        "ingredientId": "butter",
        "quantity": 12,
        "note": "3/4 cup (1 1/2 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "brown-sugar",
        "quantity": 8,
        "note": "1/2 cup packed brown sugar"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs, at room temperature"
      },
      {
        "ingredientId": "cashews",
        "quantity": 1,
        "note": "1/4 cup cashews, roughly chopped"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1.5,
        "note": "1 1/2 tsp baking powder"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground cloves"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.5,
        "note": "1/2 tsp ground nutmeg"
      },
      {
        "ingredientId": "ginger-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground ginger"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 0.5,
        "note": "1/2 tsp ground cardamom"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "zest of 1 orange"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "zest of 1 lemon (plus 1 tbsp juice)"
      }
    ],
    "steps": [
      "Soak the fruit: Combine the raisins, dried cranberries, and chopped dried apricots in a jar with the dark rum. Seal and let sit at least overnight (ideally 2-3 days, or up to weeks) at room temperature, shaking occasionally. The plumper and boozier, the better.",
      "Make the burnt-sugar caramel: Add the white sugar to a small heavy saucepan over medium heat. Let it melt and cook, swirling (do not stir), until it turns a deep mahogany brown and just starts to smoke — this bitterness is the soul of the cake. Off the heat, carefully pour in the hot water (it will sputter violently), swirl to dissolve into a smooth dark syrup, and set aside to cool completely.",
      "Prep: Preheat the oven to 325F (160C). Grease and line an 8-inch round or 9x5 loaf pan with parchment. Drain the soaked fruit, reserving any excess rum. Toss the fruit and chopped cashews with 1 tablespoon of the flour to keep them from sinking.",
      "Whisk the remaining flour with the baking powder, cinnamon, cloves, nutmeg, ginger, cardamom, and salt in a bowl. Set aside.",
      "Cream the softened butter and brown sugar with an electric mixer until pale and fluffy, 3-4 minutes. Beat in the eggs one at a time, then mix in the vanilla, orange zest, lemon zest and juice, and all of the cooled burnt-sugar caramel. The batter will be a rich brown.",
      "Fold the dry ingredients into the wet just until combined — do not overmix. Gently fold in the floured fruit and cashews along with any reserved rum (1-2 tablespoons) for extra moisture and aroma.",
      "Scrape the batter into the prepared pan and level the top. Bake for 55-70 minutes, until the cake is deeply set and a skewer inserted in the center comes out clean (a few moist crumbs are fine). Tent loosely with foil if the top darkens too fast.",
      "Cool in the pan for 15 minutes, then turn out onto a rack. For the most authentic flavor, brush the warm cake with a little extra rum, wrap tightly, and let it mature at least a day before slicing. It keeps well for weeks."
    ],
    "totalTimeMinutes": 95,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 65,
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
      "Buy mixed dried fruit in bulk bins instead of pre-packaged bags — you only need a handful of each and bulk is far cheaper per ounce.",
      "No dark rum? A small airplane bottle (50ml) is plenty for soaking and brushing, and costs a fraction of a full bottle.",
      "Whole nutmeg and a cheap grater go a long way; one nut lasts years and tastes far better than the pre-ground jars."
    ],
    "substitutions": [
      {
        "forIngredientId": "rum",
        "swap": "Orange juice or apple juice for an alcohol-free soak (soak the fruit warm for an hour to plump)",
        "savings": "Saves ~$8-12 vs a bottle of rum"
      },
      {
        "forIngredientId": "cashews",
        "swap": "Walnuts or slivered almonds work just as well in the crumb",
        "savings": "Walnuts are often cheaper per ounce than cashews"
      },
      {
        "forIngredientId": "dried-apricots",
        "swap": "Any dried fruit you have — dates, figs, or extra raisins all fit the spirit of the cake",
        "savings": "Use up pantry odds and ends instead of buying new"
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 4,
      "carbs": 42,
      "fat": 14,
      "fiber": 1.5
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian (Kerala)",
    "tags": [
      "baking",
      "christmas",
      "fruit-cake",
      "kerala",
      "dessert",
      "boozy",
      "make-ahead",
      "spiced"
    ]
  },
  {
    "id": "bake2-sans-rival",
    "name": "Sans Rival",
    "description": "The classic Filipino dacquoise — four layers of crisp, chewy cashew-meringue (dacquoise) stacked with a rich, silky French buttercream and blanketed in toasted chopped cashews. Named \"without rival\" for good reason: it's the celebration cake of the Philippines, all crunch, butter, and toasted-nut perfume.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "liquid-egg-whites",
        "quantity": 2.5,
        "note": "10 egg whites, room temperature (about 2.5 cups / use fresh-separated whites)"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.5,
        "note": "1/2 tsp cream of tartar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 16,
        "note": "1 cup granulated sugar (for the meringue)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract (for the meringue)"
      },
      {
        "ingredientId": "cashews",
        "quantity": 2,
        "note": "2 cups toasted cashews, finely chopped, for folding into the meringue"
      },
      {
        "ingredientId": "butter",
        "quantity": 24,
        "note": "1 1/2 cups (3 sticks) unsalted butter, softened, for the French buttercream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar (for the buttercream syrup)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1/4 cup water (to cook the sugar syrup)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 5,
        "note": "5 egg yolks (left over from the whites), for the buttercream"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract (for the buttercream)"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "cashews",
        "quantity": 1,
        "note": "1 cup toasted cashews, chopped, for coating the assembled cake"
      }
    ],
    "steps": [
      "Prep and toast: Heat oven to 325F (165C). Spread all 3 cups of cashews on a baking sheet and toast 8-10 minutes until fragrant and lightly golden, then cool completely. Finely chop 2 cups for the meringue and reserve 1 cup chopped for coating. Line the backs of two baking sheets with parchment and draw two 8-inch squares (or circles) on each — four total, two per sheet.",
      "Make the dacquoise: Beat the egg whites with cream of tartar on medium until foamy, then add the 1 cup sugar a tablespoon at a time, raising speed to high, until you have a stiff, glossy meringue. Beat in 1 tsp vanilla. Using a spatula, gently fold in the 2 cups finely chopped toasted cashews in three additions, keeping as much volume as possible.",
      "Bake the layers: Divide the meringue evenly among the four drawn squares and spread to about 1/4 inch thick, filling each outline. Bake at 325F for 25-30 minutes, rotating the pans halfway, until the meringues are pale golden, dry, and crisp on top. Cool completely on the pans — they crisp further as they cool. Peel from the parchment only once fully cooled.",
      "Start the French buttercream: Bring the butter to a soft, room-temperature state. In a small saucepan combine the 3/4 cup sugar and 1/4 cup water and cook over medium heat without stirring to the soft-ball stage, 238-240F on a thermometer (the syrup turns thick and slow-bubbling).",
      "Cook the yolks: While the syrup heats, beat the 5 egg yolks in a stand mixer until pale and thick. With the mixer running, pour the hot syrup down the side of the bowl in a thin steady stream (avoid the whisk). Whip on high until the mixture is fluffy and cooled to room temperature to the touch, about 5-7 minutes — this cooks and stabilizes the yolks.",
      "Finish the buttercream: With the mixer on medium, add the softened butter a couple of tablespoons at a time, beating until each is absorbed. It may look loose or curdled mid-way — keep beating and it will come together into a smooth, glossy buttercream. Beat in 1 tsp vanilla and 1/4 tsp salt.",
      "Assemble: Place one dacquoise layer on a serving board and spread with a generous layer of buttercream. Repeat with the remaining layers, finishing with buttercream on top. Spread a thin coat of buttercream around the sides as well.",
      "Coat and chill: Press the reserved 1 cup chopped toasted cashews over the top and sides. Chill at least 2-3 hours (ideally overnight) to firm up. For the cleanest slices and classic crunch-to-cream contrast, let it sit 10 minutes at room temperature, then cut with a hot, dry knife."
    ],
    "totalTimeMinutes": 240,
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
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Cashews are the splurge here — buy raw cashew pieces (not whole halves) from the bulk bin and toast them yourself; pieces are far cheaper and you're chopping them anyway.",
      "Don't waste the yolks: the 10 whites go in the meringue and 5 of the yolks go straight into the buttercream, so one carton of eggs does double duty with almost zero waste.",
      "No candy thermometer? Use the cold-water test — drop a little syrup into ice water and it should form a soft, pliable ball (soft-ball stage) before you pour it into the yolks."
    ],
    "substitutions": [
      {
        "forIngredientId": "cashews",
        "swap": "Toasted almonds or pecans — cashews are traditional but a toasted nut of choice still gives the signature crunch",
        "savings": "Almonds or pecans are often cheaper per pound than cashews"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "A few drops of lemon juice or white vinegar to stabilize the egg whites",
        "savings": "Skip buying a jar you'll rarely finish"
      },
      {
        "forIngredientId": "butter",
        "swap": "All unsalted butter is classic, but you can use half salted butter and omit the added salt",
        "savings": "Use whatever butter is on sale"
      }
    ],
    "estimatedNutrition": {
      "calories": 485,
      "protein": 7,
      "carbs": 31,
      "fat": 38,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Filipino",
    "tags": [
      "baking",
      "filipino",
      "dessert",
      "meringue",
      "dacquoise",
      "celebration",
      "nut-cake",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-ube-cake",
    "name": "Filipino Ube Cake (Purple Yam Chiffon)",
    "description": "A genuinely classic Filipino ube cake: a cloud-light chiffon sponge built on the meringue method, deeply flavored with ube halaya and ube extract for that signature violet color and nutty-vanilla yam flavor, layered with a tangy ube cream cheese frosting. Soft, moist, and just sweet enough — the version you'd proudly bring to a fiesta.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups cake flour (sub all-purpose, see substitutions)"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 4,
        "note": "4 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "sugar",
        "quantity": 24,
        "note": "1 1/2 cups granulated sugar, divided"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "1/2 cup vegetable oil"
      },
      {
        "ingredientId": "eggs",
        "quantity": 7,
        "note": "7 large eggs, separated (yolks + whites)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk"
      },
      {
        "ingredientId": "ube-halaya",
        "quantity": 0.5,
        "note": "1/2 cup ube halaya (purple yam jam); if unavailable use mashed taro or extra extract"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp ube extract (or 1.5 tsp ube + 0.5 tsp vanilla)"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.5,
        "note": "1/2 tsp cream of tartar"
      },
      {
        "ingredientId": "cream-cheese",
        "quantity": 16,
        "note": "8 oz cream cheese, softened (for frosting)"
      },
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup unsalted butter, softened (for frosting)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 32,
        "note": "2 cups powdered sugar (for frosting)"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 325F (165C). Line the bottoms of two 8-inch round cake pans with parchment; leave the sides UNGREASED so the chiffon batter can climb. In a bowl, whisk together 2 1/4 cups cake flour, 4 tsp baking powder, and 3/4 tsp salt; set aside.",
      "Make the yolk batter: In a large bowl whisk the 7 egg yolks with 3/4 cup of the sugar (12 tbsp) until pale and thick, about 1 minute. Whisk in 1/2 cup oil, 1/2 cup whole milk, 1/2 cup ube halaya, and 2 tsp ube extract until smooth and an even deep purple. Sift the flour mixture over the top and whisk just until no dry streaks remain — do not overmix.",
      "Make the meringue: In a clean, grease-free bowl beat the 7 egg whites with 1/2 tsp cream of tartar until foamy. With the mixer running, gradually stream in the remaining 3/4 cup sugar (12 tbsp) and beat to firm, glossy peaks that hold their shape but aren't dry.",
      "Fold: Stir about one-third of the meringue into the yolk batter to lighten it. Then gently fold in the rest in two additions with a spatula, cutting down through the center and lifting up around the sides, until just combined and no white streaks remain. Keep the batter airy.",
      "Divide the batter evenly between the two prepared pans and smooth the tops. Rap each pan once firmly on the counter to release any large bubbles.",
      "Bake at 325F for 32 to 38 minutes, until the tops spring back when lightly pressed and a toothpick inserted in the center comes out clean. Immediately invert the pans onto a wire rack (rest the rims on cans if needed) and cool completely upside down — this keeps the delicate chiffon from collapsing.",
      "While the cakes cool, make the frosting: Beat the softened cream cheese and softened butter together until smooth and fluffy, 2 to 3 minutes. Add 2 cups powdered sugar gradually and beat until light. For an ube-purple frosting, beat in 1/2 tsp ube extract or a spoonful of ube halaya; refrigerate 15 minutes if too soft to spread.",
      "Run a thin knife around the pan sides to release the cooled cakes and turn them out. Place one layer on a plate, spread with a generous layer of frosting, top with the second layer, then frost the top and sides. Chill 20 minutes to set before slicing."
    ],
    "totalTimeMinutes": 110,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 38,
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
      "Ube extract and ube halaya from a Filipino grocery or Asian market are far cheaper than fancy online tubs and last for many cakes — one small bottle of extract makes 4+ cakes.",
      "No cake flour? Make your own: per cup of all-purpose flour, remove 2 tbsp and replace with 2 tbsp cornstarch, then sift twice. Costs nothing extra.",
      "Buy eggs by the dozen and use the carton's worth — separate them cold (easier), then let the whites come to room temperature for the biggest meringue volume."
    ],
    "substitutions": [
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour cut with cornstarch (remove 2 tbsp AP per cup, add 2 tbsp cornstarch) to mimic cake flour",
        "savings": "Avoids buying a separate bag of cake flour"
      },
      {
        "forIngredientId": "ube-halaya",
        "swap": "Mashed cooked taro or extra ube extract plus 2 tbsp condensed milk if you can't find halaya",
        "savings": "Skips the specialty jam"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Evaporated milk thinned with a splash of water, or any milk you have on hand",
        "savings": "Uses pantry staples"
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 6,
      "carbs": 56,
      "fat": 19,
      "fiber": 1
    },
    "emoji": "🍠",
    "accentColor": "bg-purple-100",
    "cuisine": "Filipino",
    "tags": [
      "baking",
      "dessert",
      "filipino",
      "cake",
      "ube",
      "chiffon",
      "purple-yam"
    ]
  },
  {
    "id": "bake2-brazo-de-mercedes",
    "name": "Brazo de Mercedes",
    "description": "A beloved Filipino rolled meringue cake. A cloud-soft sheet of baked meringue is dusted with powdered sugar, then rolled around a luscious custard filling of egg yolks and sweetened condensed milk. It uses no flour at all, so the whole thing is tender, sweet, and melts on the tongue. The name means \"Mercedes' arm\" for its rolled, arm-like shape.",
    "mealType": "snack",
    "servings": 10,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 10,
        "note": "10 large eggs, separated (whites for meringue, yolks for filling)"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 1,
        "note": "1 tsp cream of tartar"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup white sugar (for the meringue)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1 1/2 tsp vanilla extract (1 tsp for meringue, 1/2 tsp for filling)"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1 can (14 oz) sweetened condensed milk (for the custard filling)"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 tbsp unsalted butter, for the custard filling"
      },
      {
        "ingredientId": "lemon-zest",
        "quantity": 1,
        "note": "1 tsp finely grated lemon zest (brightens the custard)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "about 3 tbsp powdered sugar, for dusting"
      },
      {
        "ingredientId": "cooking-spray",
        "quantity": 1,
        "optional": true,
        "note": "cooking spray, to grease the pan and parchment"
      }
    ],
    "steps": [
      "Position a rack in the center of the oven and preheat to 350F (175C). Line a 13x18-inch rimmed sheet pan with parchment paper, then lightly grease the parchment with cooking spray so the baked meringue releases cleanly.",
      "Separate the 10 eggs carefully, putting whites in a large spotlessly clean, grease-free bowl and yolks in a heatproof bowl or saucepan. Even a trace of yolk or fat will keep the whites from whipping, so separate one egg at a time into a cup first.",
      "Make the meringue: beat the egg whites with the cream of tartar on medium speed until foamy, then increase to high and gradually add the 3/4 cup white sugar a spoonful at a time. Add 1 tsp vanilla and continue beating until the meringue holds stiff, glossy peaks and the sugar is fully dissolved (rub a little between your fingers; it should feel smooth, not gritty).",
      "Spread the meringue evenly into the prepared pan with an offset spatula, smoothing the top. Run the spatula in gentle diagonal lines or shallow waves across the surface for the traditional ridged look. Bake for 18 to 22 minutes, until the top is lightly golden and springs back when touched. Do not overbake or it will crack when rolled.",
      "While the meringue bakes, make the custard: whisk the 10 egg yolks with the sweetened condensed milk, 1 tbsp butter, lemon zest, and 1/2 tsp vanilla in the heatproof bowl. Cook over a double boiler (or very low direct heat), stirring constantly, for 10 to 15 minutes until thick enough to coat the back of a spoon and leave a trail. Remove from heat and let cool slightly; it will firm up as it cools.",
      "When the meringue is done, immediately dust the top generously with powdered sugar. Lay a sheet of parchment over it, then carefully invert the whole thing onto a clean work surface and gently peel away the baking parchment from what is now the top.",
      "Dust the exposed surface with more powdered sugar. Spread the warm custard filling evenly over the meringue, leaving a 1-inch border along one long edge so the filling does not squeeze out when rolling.",
      "Using the bottom parchment to lift and guide, roll the meringue snugly from one long side into a tight log, seam-side down. Roll firmly but gently to avoid cracks. Wrap in the parchment and chill at least 1 hour to set.",
      "Unwrap, dust with a final layer of powdered sugar, and trim the ends for a clean look. Slice with a serrated knife into thick rounds and serve chilled."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 22,
    "difficulty": "medium",
    "equipment": [
      "oven",
      "stovetop"
    ],
    "primaryCookingMethod": "oven",
    "noStovetopRequired": false,
    "dietTags": [
      "gluten-free",
      "vegetarian"
    ],
    "cheapTips": [
      "Eggs are the whole recipe here, so buy the largest carton your store sells by the dozen instead of small packs; the per-egg price drops a lot.",
      "Don't toss the leftover parchment or scrape bowls clean of meringue and custard; press scraps into a ramekin and bake a mini version for yourself.",
      "Skip store-bought powdered sugar by blitzing 3 tbsp white sugar with a pinch of cornstarch in a clean spice grinder until powdery."
    ],
    "substitutions": [
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "1 tsp lemon juice or white vinegar to stabilize the whites",
        "savings": "uses a pantry staple instead of buying a single-use jar"
      },
      {
        "forIngredientId": "lemon-zest",
        "swap": "1/2 tsp extra vanilla, or orange zest if you have it",
        "savings": "skips buying a whole lemon for just the zest"
      },
      {
        "forIngredientId": "butter",
        "swap": "1 tbsp neutral vegetable oil in the custard",
        "savings": "no need to buy butter if you only have oil"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 8,
      "carbs": 33,
      "fat": 9,
      "fiber": 0
    },
    "emoji": "🍮",
    "accentColor": "bg-amber-100",
    "cuisine": "Filipino",
    "tags": [
      "baking",
      "filipino",
      "dessert",
      "meringue",
      "flourless",
      "custard",
      "rolled-cake",
      "no-flour",
      "make-ahead"
    ]
  },
  {
    "id": "bake2-yema-cake",
    "name": "Yema Cake (Filipino Custard Cake)",
    "description": "A pillowy Filipino chiffon sponge wrapped in luscious yema custard — egg yolks and sweetened condensed milk slow-cooked with butter into a thick, golden caramel-like frosting, finished with grated cheese. Tender, eggy, and milky-sweet, this is the bakery-counter classic that disappears fast at any handaan.",
    "mealType": "snack",
    "servings": 12,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups cake flour (sifted)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup white sugar, divided (1/2 cup for yolks, 1/4 cup for whites)"
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
        "ingredientId": "eggs",
        "quantity": 6,
        "note": "6 large eggs, separated"
      },
      {
        "ingredientId": "vegetable-oil",
        "quantity": 8,
        "note": "1/2 cup vegetable oil"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.5,
        "note": "1/2 cup whole milk"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "cream-of-tartar",
        "quantity": 0.5,
        "note": "1/2 tsp cream of tartar"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1 can (14 oz) sweetened condensed milk, for the yema custard"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter, for the yema"
      },
      {
        "ingredientId": "cheddar-block",
        "quantity": 2,
        "note": "2 oz cheddar cheese, finely grated, for topping"
      }
    ],
    "steps": [
      "Make the chiffon batter: Preheat the oven to 325F (165C). Line the bottom of two 8-inch round pans (or one 9x13 pan) with parchment — do NOT grease the sides, so the chiffon can climb. Sift together the cake flour, baking powder, salt, and 1/2 cup of the sugar into a large bowl.",
      "In a separate bowl, whisk the 6 egg yolks with the vegetable oil, whole milk, and vanilla until smooth. Pour into the dry ingredients and whisk just until you have a lump-free, satiny batter.",
      "Whip the meringue: In a clean, grease-free bowl, beat the 6 egg whites with the cream of tartar until foamy, then gradually add the remaining 1/4 cup sugar. Beat to stiff, glossy peaks that hold their shape.",
      "Fold in thirds: Add a third of the meringue to the yolk batter and stir to lighten it, then gently fold in the rest in two additions with a spatula until no white streaks remain — keep it airy, do not deflate.",
      "Bake: Divide the batter between the pans and run a skewer through to pop large bubbles. Bake 30–35 minutes (40–45 for a 9x13), until the top springs back and a toothpick comes out clean. Invert the pans onto a rack and cool completely before unmolding — this keeps the chiffon tall.",
      "Cook the yema: While the cake cools, pour the sweetened condensed milk into a nonstick saucepan over low-medium heat. Add the butter and 2 of the leftover egg yolks (lightly beaten and tempered with a spoonful of the warm milk first). Stir constantly with a wooden spoon for 10–15 minutes until thick enough to leave a clean trail across the pan. Take it off the heat just before it would turn grainy and let it cool to a spreadable consistency.",
      "Assemble: If using two rounds, spread a layer of yema between them, then coat the top and sides. For a 9x13, simply blanket the whole top with the warm-but-spreadable yema in a thick, even layer.",
      "Finish: While the yema is still slightly tacky, shower the top generously with the finely grated cheddar. Chill at least 30 minutes to set the custard, then slice and serve."
    ],
    "totalTimeMinutes": 90,
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
      "Buy whole eggs by the dozen — this recipe uses 6 whites plus 8 yolks total, so a single carton covers the whole bake with yolks to spare for the yema.",
      "Skip cake flour: make your own by removing 2 tbsp from each cup of all-purpose flour and replacing it with 2 tbsp cornstarch, then sifting well.",
      "A store-brand block of cheddar grated fresh costs a fraction of pre-shredded and melts into the yema far better."
    ],
    "substitutions": [
      {
        "forIngredientId": "cheddar-block",
        "swap": "Use grated queso de bola (Edam) for the traditional Filipino flavor, or any mild yellow cheese",
        "savings": "about the same"
      },
      {
        "forIngredientId": "cream-of-tartar",
        "swap": "Substitute 1 tsp lemon juice or white vinegar to stabilize the egg whites",
        "savings": "saves ~$3 vs buying cream of tartar"
      },
      {
        "forIngredientId": "vegetable-oil",
        "swap": "Any neutral oil works — canola or melted (cooled) butter both keep the chiffon tender",
        "savings": "use what's on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 345,
      "protein": 8,
      "carbs": 42,
      "fat": 17,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Filipino",
    "tags": [
      "baking",
      "filipino",
      "dessert",
      "custard",
      "chiffon-cake",
      "yema",
      "egg-yolk",
      "party"
    ]
  },
  {
    "id": "bake2-kek-lapis-sarawak",
    "name": "Kek Lapis Sarawak (Sarawak Layer Cake)",
    "description": "The classic spiced Sarawak layer cake from Malaysian Borneo: rich, buttery batter built one wafer-thin layer at a time, each grilled until golden before the next is poured on. The result is a tight stack of fragrant, custardy layers held together by their own caramelized tops, perfumed with cardamom, cinnamon and clove. This is the plain \"lapis biasa\" base layered into the signature horizontal stripes, finished with a slick of condensed-milk batter. Dense, tender and unmistakably festive.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 24,
        "note": "1 1/2 cups (3 sticks) unsalted butter, softened"
      },
      {
        "ingredientId": "sweetened-condensed-milk",
        "quantity": 1,
        "note": "1/2 cup (about half a 14 oz can) sweetened condensed milk"
      },
      {
        "ingredientId": "eggs",
        "quantity": 10,
        "note": "10 large eggs, separated"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 12,
        "note": "3/4 cup powdered (icing) sugar, for whipping the whites"
      },
      {
        "ingredientId": "sugar",
        "quantity": 12,
        "note": "3/4 cup granulated sugar, creamed with the butter"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose (plain) flour, sifted"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 2,
        "note": "2 tsp vanilla extract"
      },
      {
        "ingredientId": "cardamom",
        "quantity": 1,
        "note": "1 tsp ground green cardamom"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "1 tsp ground cinnamon"
      },
      {
        "ingredientId": "cloves-ground",
        "quantity": 0.5,
        "note": "1/2 tsp ground cloves"
      },
      {
        "ingredientId": "nutmeg",
        "quantity": 0.25,
        "note": "1/4 tsp ground nutmeg"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tsp baking powder"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp salt"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.125,
        "optional": true,
        "note": "2 tbsp whole milk, to loosen the batter if needed"
      }
    ],
    "steps": [
      "Line the base and sides of an 8-inch square pan with parchment, leaving a slight overhang. Position an oven rack in the upper third and set the oven to its top/grill (broiler) element. Have a flat-bottomed glass and a small offset spatula or back of a spoon ready for pressing each layer flat. Sift together the flour, cardamom, cinnamon, cloves, nutmeg, baking powder and salt; set aside.",
      "Beat the softened butter with the granulated sugar until very pale and fluffy, 5 to 6 minutes. Add the egg yolks two at a time, beating well after each, then beat in the sweetened condensed milk and vanilla until the mixture is smooth, thick and glossy.",
      "In a clean bowl, whip the egg whites until foamy, then add the powdered sugar in three additions, whipping to stiff, glossy peaks. The icing sugar gives the layers their fine, tight crumb.",
      "Fold the sifted dry ingredients into the yolk-butter mixture in two additions just until combined. Then fold in the whipped whites in three additions, working gently to keep the volume. If the batter is stiffer than a thick ribbon, fold in the 2 tbsp milk. Aim for a batter that drops thickly from the spatula.",
      "Spoon roughly 4 to 5 tablespoons of batter into the pan and spread it into a thin, even layer right to the corners, tapping the pan to level it. Grill (broil) on the upper rack until the top is evenly deep golden, about 4 to 6 minutes, rotating the pan once for even color. Watch constantly, as the thin layer can scorch fast.",
      "Remove the pan, gently press the baked layer flat with the flat-bottomed glass to flatten any domes and pop large bubbles, and brush away nothing, this caramelized surface is the glue between layers. Spoon and spread the next 4 to 5 tablespoons of batter directly on top, then grill again until golden. Repeat, pressing flat between every layer, until all the batter is used, about 10 to 13 layers.",
      "For the final layer, switch the oven to a standard bake at 325F (160C) and bake 8 to 10 minutes so the top sets through without over-darkening, then cool the cake in the pan for 15 minutes.",
      "Lift the cake out by the parchment and cool completely on a rack. Wrap and rest at least a few hours, ideally overnight, so the layers settle and the spice deepens. Trim the four edges with a sharp knife to expose the stripes, then slice into neat fingers or squares to show off the layers."
    ],
    "totalTimeMinutes": 130,
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 90,
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
      "Skip pricey ground cardamom pods and use a warm pre-mixed spice blend you already have; the cake leans on cinnamon and clove just as hard.",
      "One full can of sweetened condensed milk covers two cakes, so make a double batch of batter and bake a second cake for gifting while the grill is already hot.",
      "No icing sugar? Blitz granulated sugar in a clean blender for 30 seconds to make your own fine sugar for the whites."
    ],
    "substitutions": [
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Use the same volume of granulated sugar whipped a little longer into the whites",
        "savings": "Saves buying a separate bag of icing sugar"
      },
      {
        "forIngredientId": "cardamom",
        "swap": "Replace the cardamom, clove and nutmeg with 2 1/2 tsp store mixed-spice or speculaas blend",
        "savings": "One jar instead of three single spices"
      },
      {
        "forIngredientId": "sweetened-condensed-milk",
        "swap": "2 tbsp honey plus 2 tbsp whole milk for a lighter, less candy-sweet crumb",
        "savings": "Uses pantry staples instead of a can"
      }
    ],
    "estimatedNutrition": {
      "calories": 295,
      "protein": 5,
      "carbs": 25,
      "fat": 20,
      "fiber": 1
    },
    "emoji": "🍰",
    "accentColor": "bg-amber-100",
    "cuisine": "Malaysian",
    "tags": [
      "baking",
      "malaysian",
      "layer-cake",
      "spiced",
      "festive",
      "dessert",
      "borneo",
      "celebration"
    ]
  },
  {
    "id": "bake2-taiwanese-pineapple-cake",
    "name": "Taiwanese Pineapple Cake (鳳梨酥)",
    "description": "Authentic Taiwanese pineapple shortcakes: buttery, crumbly milk-powder-rich pastry pressed around a sticky, slow-cooked pineapple jam filling and baked in little square molds. The classic gift-box treat, made the way a careful home baker would — real cooked-down pineapple, a tender melt-in-the-mouth crust, and just enough salt to balance the sweetness.",
    "mealType": "snack",
    "servings": 16,
    "ingredients": [
      {
        "ingredientId": "butter",
        "quantity": 8,
        "note": "1/2 cup (1 stick) unsalted butter, softened — for the pastry"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup powdered sugar — for the pastry"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 1,
        "note": "1 large egg, room temperature"
      },
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "1 1/2 cups all-purpose flour (sift before measuring for a finer crumb)"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.25,
        "note": "about 1/4 cup whole milk powder — closest catalog match for the classic milk-powder flavor in the crust"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 2,
        "note": "2 tbsp cornstarch (for a more tender, sandy texture)"
      },
      {
        "ingredientId": "pineapple",
        "quantity": 4,
        "note": "4 cups crushed fresh or canned pineapple, well-drained (about two 20-oz cans), for the jam filling"
      },
      {
        "ingredientId": "sugar",
        "quantity": 5.33,
        "note": "about 1/3 cup (5 tbsp) granulated sugar for the jam — adjust to the tartness of your pineapple"
      },
      {
        "ingredientId": "butter",
        "quantity": 1,
        "note": "1 tbsp butter, to finish and gloss the cooked jam"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp lemon juice, to brighten the filling"
      }
    ],
    "steps": [
      "Make the jam first (it needs to cool): squeeze the drained crushed pineapple firmly to remove as much juice as possible, then add the pulp to a wide nonstick or heavy skillet. Reserve the juice. Cook over medium heat, stirring often, until most of the moisture evaporates, about 15-20 minutes.",
      "Stir the sugar (and lemon juice, if using) into the pineapple. Lower the heat to medium-low and keep cooking, stirring constantly as it thickens, 15-25 minutes more, until the jam is deep golden, glossy, and holds its shape when you drag a spatula across the pan. Stir in 1 tbsp butter at the end, then spread on a plate to cool completely. You should have a stiff, sticky paste — it firms up further as it cools.",
      "Make the dough: beat the softened butter, powdered sugar, and salt with a wooden spoon or mixer until smooth and pale, 2-3 minutes. Beat in the egg until fully combined and creamy.",
      "Sift together the flour, milk powder, and cornstarch, then fold into the butter mixture in two additions just until a soft dough forms. Do not overwork it. Press into a disc, wrap, and chill 30 minutes while the oven heats.",
      "Heat the oven to 340 F (170 C). Divide the cooled jam into 16 equal pieces (about 15 g each) and roll each into a ball. Divide the dough into 16 pieces (about 20 g each).",
      "Flatten a piece of dough in your palm, set a ball of jam in the center, and gently wrap the dough up and around the filling, pinching to fully seal so no jam shows. Roll into a smooth ball.",
      "Set each ball into a square pineapple-cake mold (or a greased mini square/muffin tin) on a parchment-lined sheet, pressing gently to fill the corners and flatten the top. If using rings, leave them on for baking to keep the crisp square edge.",
      "Bake 12 minutes, then carefully flip each cake (in its mold) and bake 10-13 minutes more, until the edges and bottoms are pale golden — they should not brown deeply. The pastry stays light in color.",
      "Let the cakes cool in the molds 10 minutes, then unmold and cool completely on a rack. They firm up and the flavor deepens as they rest; store airtight for up to a week."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 75,
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
      "Canned crushed pineapple in juice is far cheaper than fresh and works beautifully once cooked down — drain it hard and save the juice for a drink.",
      "No square molds? A greased mini-muffin tin or even a brownie pan scored into squares after baking gives you the right shape for nearly free.",
      "Skip pricey milk powder by replacing it with an equal amount of extra flour plus a splash less liquid — slightly less rich, but still tender and totally worth it on a budget."
    ],
    "substitutions": [
      {
        "forIngredientId": "pineapple",
        "swap": "Frozen pineapple, thawed and squeezed dry",
        "savings": "Cheaper than fresh out of season"
      },
      {
        "forIngredientId": "butter",
        "swap": "Stick-style plant butter for a dairy-free crust",
        "savings": "Comparable cost, dairy-free"
      },
      {
        "forIngredientId": "lemon-juice-bottled",
        "swap": "A splash of apple cider vinegar for the same acidity",
        "savings": "Pennies per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 175,
      "protein": 2,
      "carbs": 24,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍍",
    "accentColor": "bg-amber-100",
    "cuisine": "Taiwanese",
    "tags": [
      "baking",
      "taiwanese",
      "dessert",
      "pineapple",
      "pastry",
      "tea-time",
      "shortcrust"
    ]
  },
  {
    "id": "bake2-pineapple-bun",
    "name": "Hong Kong Pineapple Buns (Bo Lo Bao)",
    "description": "The bakery classic from Hong Kong cha chaan tengs: a pillowy, lightly sweet milk-bread bun crowned with a crackly, golden cookie-paste topping that splits into the signature pineapple-rind pattern as it bakes. There's no pineapple inside — the name is all about that crunchy-sweet crust over a soft, fluffy interior. A tangzhong (cooked flour-milk paste) keeps the crumb tender for days.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2.5 cups bread flour, for the bun dough (plus tangzhong)"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.75,
        "note": "3/4 cup whole milk, warm — split between tangzhong and dough"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2.25,
        "note": "2 1/4 tsp instant yeast (one packet)"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar, for the dough"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 eggs — 1 in the dough, 1 beaten for the egg wash"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "3 tbsp unsalted butter, softened, for the dough"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 8,
        "note": "1/2 cup powdered sugar, for the topping"
      },
      {
        "ingredientId": "butter",
        "quantity": 4,
        "note": "1/4 cup unsalted butter, softened, for the topping"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup all-purpose flour, for the topping"
      },
      {
        "ingredientId": "custard-powder",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp custard powder for color and flavor — substitute is fine"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 0.5,
        "note": "1/2 tsp vanilla extract, for the topping"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 0.25,
        "note": "1/4 tsp baking powder, for the topping crackle"
      }
    ],
    "steps": [
      "Make the tangzhong: In a small saucepan, whisk 2 tbsp of the bread flour with 1/4 cup of the milk until smooth. Cook over medium-low heat, stirring constantly, until it thickens into a soft paste that leaves lines when you drag the whisk (about 65C / 1-2 minutes). Scrape into a bowl and let it cool to lukewarm.",
      "Make the dough: In a large bowl, combine the remaining bread flour, the sugar, salt, and instant yeast. Add 1 egg, the remaining 1/2 cup warm milk, and the cooled tangzhong. Mix to a shaggy dough, then knead 10-12 minutes by hand (or 8 minutes in a stand mixer) until smooth. Work in the 3 tbsp softened butter a little at a time, then keep kneading until the dough is glossy and passes the windowpane test — it should stretch thin without tearing.",
      "First rise: Shape into a ball, place in a lightly oiled bowl, cover, and let rise in a warm spot until doubled, about 1 to 1.5 hours.",
      "Make the pineapple topping while the dough rises: Cream the softened 1/4 cup butter with the powdered sugar until pale. Beat in 1 tbsp of the beaten egg (reserve the rest for wash), the vanilla, and custard powder if using. Stir in the 1/2 cup all-purpose flour and 1/4 tsp baking powder to form a soft, slightly sticky cookie dough. Wrap and chill until firm enough to handle, about 20 minutes.",
      "Shape the buns: Punch down the dough and divide into 8 equal pieces. Roll each into a tight, smooth ball and place on a parchment-lined baking sheet, spaced apart. Cover and let proof 40-45 minutes until puffy.",
      "Apply the topping: Divide the chilled topping into 8 pieces. Roll each between parchment (or press by hand) into a thin round and drape over a proofed bun, covering the top and upper sides. Brush the topping lightly with the reserved beaten egg, then score a shallow crosshatch with a knife to encourage the classic pineapple crackle.",
      "Bake: Bake in a preheated oven at 350F (175C) for 15-18 minutes, until the topping is golden and cracked and the buns sound hollow when tapped. Rotate the pan halfway through for even color.",
      "Cool and serve: Let cool on a rack at least 10 minutes. Serve warm — and for the true cha chaan teng experience (bo lo yau), split a warm bun and tuck in a thick cold slab of butter."
    ],
    "totalTimeMinutes": 180,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 18,
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
      "Skip the custard powder — a pinch of turmeric (literally a knife-tip) plus the vanilla gives the topping the same golden color and bakery aroma for pennies.",
      "Use all-purpose flour for the whole recipe if you don't want to buy bread flour; the tangzhong does most of the softening work, so the buns still come out fluffy.",
      "Make a double batch and freeze the baked buns — reheat in a 300F oven for 5 minutes and the crust crisps right back up, cheaper per bun than the bakery."
    ],
    "substitutions": [
      {
        "forIngredientId": "custard-powder",
        "swap": "1 tbsp cornstarch + a tiny pinch of turmeric for color",
        "savings": "Saves buying a specialty tin; uses pantry staples"
      },
      {
        "forIngredientId": "whole-milk",
        "swap": "Any milk, or water plus 1 tbsp extra butter for richness",
        "savings": "Use what's in the fridge"
      },
      {
        "forIngredientId": "flour",
        "swap": "All-purpose flour in place of bread flour throughout",
        "savings": "No need to buy a second flour"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 7,
      "carbs": 44,
      "fat": 10,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Hong Kong",
    "tags": [
      "baking",
      "bread",
      "hong-kong",
      "milk-bread",
      "tangzhong",
      "sweet-bun",
      "cha-chaan-teng",
      "yeast"
    ]
  },
  {
    "id": "bake2-japanese-strawberry-shortcake",
    "name": "Japanese Strawberry Shortcake",
    "description": "The classic Japanese ichigo shortcake: a featherlight genoise sponge soaked in vanilla syrup, layered and masked with lightly sweetened whipped cream, and piled with fresh strawberries. Restrained sweetness, cloud-soft crumb, and a clean finish — exactly the cake you see in every Japanese bakery and on Christmas Eve tables across Japan.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup (100g) granulated sugar, for the sponge"
      },
      {
        "ingredientId": "flour",
        "quantity": 1,
        "note": "1 cup (120g) cake or all-purpose flour, sifted"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp (30g) unsalted butter, melted"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 0.125,
        "note": "2 tbsp whole milk, warm"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 2,
        "note": "2 cups (480ml) cold heavy whipping cream"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 4,
        "note": "1/4 cup (30g) powdered sugar, for the whipped cream"
      },
      {
        "ingredientId": "strawberries",
        "quantity": 4,
        "note": "4 cups fresh strawberries (about 1.5 lb), hulled"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1/4 cup water, for the soaking syrup"
      },
      {
        "ingredientId": "white-sugar",
        "quantity": 2,
        "note": "2 tbsp sugar, for the soaking syrup"
      }
    ],
    "steps": [
      "Make the syrup first so it cools: combine 1/4 cup water and 2 tbsp sugar in a small pan, bring to a simmer until dissolved, remove from heat and stir in a few drops of the vanilla. Set aside. Preheat the oven to 340F (170C) and line the bottom of an 8-inch round cake pan with parchment; do not grease the sides so the sponge can climb.",
      "Build the genoise: set a heatproof bowl over a pan of barely simmering water and whisk the 4 eggs with 1/2 cup granulated sugar until just warm to the touch (about 100F) and the sugar dissolves. Off the heat, beat with a hand or stand mixer on high for 6-8 minutes until pale, tripled in volume, and thick enough to leave a ribbon that holds for 3-4 seconds.",
      "Warm the 2 tbsp butter with 2 tbsp milk and 1 tsp vanilla until the butter melts; keep it warm. Sift the cup of flour over the egg foam in three additions, folding gently with a spatula each time — cut down through the center and lift, rotating the bowl, just until no streaks remain. Stop the moment it is combined to keep the air in.",
      "Temper the butter mixture: scoop a large spoonful of batter into the warm butter-milk, stir to lighten, then fold that back into the main batter quickly and thoroughly. Pour into the pan, tap once firmly on the counter to pop large bubbles, and bake 28-32 minutes until golden and springy and a skewer comes out clean.",
      "Drop the pan from a few inches onto the counter to prevent shrinking, then invert onto a rack, peel the parchment, and cool completely. Meanwhile slice most of the strawberries about 1/4-inch thick for the filling, reserving the prettiest whole berries for the top. Chill the bowl and beaters for the cream.",
      "Whip the cold heavy cream with the powdered sugar and remaining vanilla to soft-medium peaks — stop while it still looks glossy and pipeable; overwhipping turns it grainy. Level the domed top off the cooled sponge with a serrated knife and slice the cake horizontally into two even layers.",
      "Assemble: place the bottom layer cut-side up on a plate and brush generously with the cooled syrup. Spread a layer of cream, cover with sliced strawberries in a single tight layer, then a thin layer of cream over the berries. Set the second layer on top, brush with syrup, and press gently to settle.",
      "Mask the whole cake with a smooth coat of the remaining whipped cream, saving a little to pipe rosettes around the top edge. Crown with the reserved whole strawberries. Chill at least 1 hour before slicing with a hot, wiped knife so the layers stay clean. Best eaten the same day."
    ],
    "totalTimeMinutes": 120,
    "prepTimeMinutes": 50,
    "cookTimeMinutes": 30,
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
      "Buy strawberries in peak season (late spring) when they are cheapest and sweetest, or use slightly soft sale berries for the interior layer and save firm ones for the top.",
      "Skip cake flour: whisk 2 tbsp cornstarch into your cup of all-purpose flour, remove 2 tbsp of the mix, and you get a soft, tender crumb for free.",
      "A clean coffee can or the egg-warming bowl over a pot doubles as the water bath and mixing bowl, so you do not need any special equipment."
    ],
    "substitutions": [
      {
        "forIngredientId": "strawberries",
        "swap": "Use frozen strawberries, thawed and patted very dry, for the filling layer (keep fresh ones only for the top)",
        "savings": "Saves about $2-3 off-season"
      },
      {
        "forIngredientId": "heavy-cream",
        "swap": "Stabilize lighter cream by whipping in 1 tsp gelatin bloomed in water, or use a 1:1 mix with mascarpone for a sturdier frosting",
        "savings": "Mascarpone blend holds longer in a warm kitchen"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz regular granulated sugar in a clean spice grinder until powdery, or just use 2 tbsp granulated sugar dissolved into the cream",
        "savings": "Avoids buying a separate bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 360,
      "protein": 6,
      "carbs": 34,
      "fat": 23,
      "fiber": 2
    },
    "emoji": "🍰",
    "accentColor": "bg-rose-100",
    "cuisine": "Japanese",
    "tags": [
      "baking",
      "dessert",
      "cake",
      "japanese",
      "strawberry",
      "genoise"
    ]
  },
  {
    "id": "bake2-matcha-roll-cake",
    "name": "Matcha Roll Cake (抹茶ロールケーキ)",
    "description": "A tender Japanese matcha sponge roll: a light genoise-style biscuit sponge with stone-ground matcha folded into the flour, baked fast and hot, rolled while warm to set the curl, then unrolled and filled with softly whipped matcha cream. Earthy, barely sweet, and cloud-soft — the real teahouse version a careful home baker can absolutely nail.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "eggs",
        "quantity": 4,
        "note": "4 large eggs, at room temperature"
      },
      {
        "ingredientId": "sugar",
        "quantity": 8,
        "note": "1/2 cup granulated sugar (for the sponge)"
      },
      {
        "ingredientId": "flour",
        "quantity": 0.5,
        "note": "1/2 cup cake or all-purpose flour, sifted"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 1,
        "note": "1 tbsp cornstarch, sifted with the flour for a tender crumb"
      },
      {
        "ingredientId": "matcha",
        "quantity": 4.5,
        "note": "about 1 1/2 tbsp culinary matcha for the sponge plus a little extra for dusting"
      },
      {
        "ingredientId": "butter",
        "quantity": 2,
        "note": "2 tbsp unsalted butter, melted and kept warm"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp vanilla extract"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.25,
        "note": "1/4 tsp salt"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 1,
        "note": "1 cup cold heavy whipping cream (for the filling)"
      },
      {
        "ingredientId": "powdered-sugar",
        "quantity": 3,
        "note": "3 tbsp powdered sugar (for the whipped cream)"
      },
      {
        "ingredientId": "matcha",
        "quantity": 2,
        "note": "2 tsp matcha whisked into the cream"
      }
    ],
    "steps": [
      "Heat the oven to 400°F (200°C). Line a 10x15-inch (quarter sheet) jelly-roll pan with parchment, leaving a small overhang on the long sides. Sift the flour, cornstarch, and 1 1/2 tbsp matcha together twice so the matcha is lump-free and evenly dispersed; set aside.",
      "Make a hot-whip sponge base: combine the whole eggs and granulated sugar in a heatproof bowl and set it over a pan of barely simmering water. Whisk constantly until the mixture is just warm to the touch (about 100°F) and the sugar has dissolved, 1-2 minutes. This warmth lets the eggs whip to maximum volume.",
      "Take the bowl off the heat and beat with a hand or stand mixer on high until the batter is pale, thick, and triples in volume — about 5-7 minutes. It should fall in a slowly dissolving ribbon when you lift the beaters. Beat in the vanilla and salt.",
      "Sift the matcha-flour mixture over the eggs in two additions, folding with a spatula gently but thoroughly each time — cut down through the center, sweep around, and turn the bowl. Stop the moment no dry streaks remain. Stir a big spoonful of batter into the warm melted butter to loosen it, then fold that back in. Do not deflate the foam.",
      "Pour into the prepared pan and spread level with an offset spatula, pushing batter fully into the corners. Tap the pan once on the counter to pop large bubbles. Bake 10-12 minutes, until the top springs back when lightly pressed and the edges just begin to pull away. Do not overbake or the sponge will crack when rolled.",
      "Roll it warm to train the curl: lay a clean kitchen towel on the counter and dust it with a little sifted matcha (or powdered sugar). Invert the hot cake onto the towel, peel off the parchment, and starting from a short end, roll the cake up snugly inside the towel. Let it cool completely rolled, seam-side down, 30-45 minutes.",
      "Whip the filling: with cold beaters and bowl, whip the heavy cream with the powdered sugar and 2 tsp sifted matcha until it holds firm, spreadable peaks — stop before it turns grainy. Keep cold.",
      "Gently unroll the cooled cake (it will keep a gentle curve). Spread the matcha cream evenly over the surface, leaving a 1/2-inch border at the far end so it doesn't squeeze out. Re-roll snugly without the towel, finishing seam-side down. Wrap in plastic and chill at least 1 hour to set. Trim the ends, dust with matcha, and slice with a clean warm knife."
    ],
    "totalTimeMinutes": 130,
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 11,
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
      "Culinary-grade matcha (not ceremonial) is plenty for baking and a fraction of the price — the heat and cream mute subtle flavor differences anyway.",
      "No quarter sheet pan? Any rimmed baking sheet around 10x15 inches works; just keep the batter layer about 1/4-inch thick so it bakes evenly and stays rollable.",
      "Whip the cream by hand with a balloon whisk if you don't own a mixer — it only takes a few minutes for 1 cup and saves buying equipment."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Chill a can of full-fat coconut cream overnight and whip the solid part with the matcha and sugar for a dairy-free filling",
        "savings": "Comparable cost, makes it dairy-free"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Use an equal amount of potato starch, or just add 1 extra tbsp of flour",
        "savings": "Uses what's already in the pantry"
      },
      {
        "forIngredientId": "powdered-sugar",
        "swap": "Blitz granulated sugar with a pinch of cornstarch in a blender until powdery",
        "savings": "Avoids buying a separate bag"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 4,
      "carbs": 21,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🍵",
    "accentColor": "bg-green-100",
    "cuisine": "Japanese",
    "tags": [
      "baking",
      "dessert",
      "japanese",
      "matcha",
      "sponge-cake",
      "roll-cake",
      "green-tea",
      "teatime"
    ]
  },
  {
    "id": "bake2-anpan",
    "name": "Anpan (Japanese Sweet Red Bean Buns)",
    "description": "Pillowy-soft, milk-enriched Japanese sweet rolls filled with smooth sweet red bean paste (koshian). A tangzhong water-roux keeps the crumb cloud-like and fresh for days, while a glossy egg wash and a pinch of sesame on top give anpan their iconic bakery look. This is the classic version sold in Japanese bakeries since the 1870s — gently sweet dough, generous bean filling, no shortcuts.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.25,
        "note": "2 1/4 cups bread flour (about 280g), plus 3 tbsp held back for the tangzhong"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.66,
        "note": "2/3 cup whole milk, lukewarm (plus 1/4 cup water cooked into the tangzhong)"
      },
      {
        "ingredientId": "water",
        "quantity": 0.25,
        "note": "1/4 cup water, for the tangzhong roux"
      },
      {
        "ingredientId": "sugar",
        "quantity": 4,
        "note": "1/4 cup granulated sugar"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp instant yeast"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2,
        "note": "2 large eggs — 1 in the dough, 1 beaten for the egg wash"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "3 tbsp unsalted butter, softened"
      },
      {
        "ingredientId": "red-beans",
        "quantity": 1.5,
        "note": "about 1 1/2 cups (480g) smooth sweet red bean paste / koshian, divided into 8 balls — or cook the canned red beans down with sugar to make your own"
      },
      {
        "ingredientId": "sesame-seeds",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp black or white sesame seeds, for topping"
      }
    ],
    "steps": [
      "Make the tangzhong: In a small saucepan whisk the 3 tbsp reserved flour with the 1/4 cup water and 2 tbsp of the milk until smooth. Cook over medium-low, stirring constantly, until it thickens into a soft pudding-like paste that holds a line when you drag the whisk, about 2-3 minutes. Scrape into a bowl and let it cool to lukewarm.",
      "Make the dough: In a large bowl combine the remaining bread flour, sugar, instant yeast, and salt. Add the cooled tangzhong, the remaining lukewarm milk, and 1 egg. Mix to a shaggy dough, then knead 8-10 minutes by hand (or 6-7 minutes in a stand mixer) until smooth. Add the softened butter a little at a time and keep kneading until the dough is glossy, elastic, and passes a thin windowpane, 6-8 more minutes.",
      "First rise: Shape into a ball, place in a lightly oiled bowl, cover, and let rise in a warm spot until doubled, about 60-90 minutes.",
      "Divide and fill: Punch down and divide into 8 equal pieces (about 70g each); roll each into a ball, cover, and rest 10 minutes. Flatten each ball into a 4-inch disk, thinner at the edges. Place a ball of red bean paste in the center, then pull the dough up and around the filling, pinching the seam firmly shut. Roll seam-side down to seal.",
      "Shape and proof: Arrange the buns seam-side down on a parchment-lined baking sheet, spaced apart. Gently flatten each to the classic squat anpan dome. Cover loosely and proof until puffy and nearly doubled, 40-50 minutes. They should spring back slowly when poked.",
      "Finish the tops: Heat the oven to 350F (175C). Beat the second egg with a splash of water and brush a thin, even coat over each bun. For the traditional look, press a shallow well into the center with a damp finger or the back of a chopstick and sprinkle sesame seeds into it.",
      "Bake: Bake on the center rack for 14-17 minutes, until deeply golden and shiny and the buns sound hollow when tapped. If they color too fast, tent loosely with foil for the last few minutes.",
      "Cool: Transfer to a rack and cool at least 20 minutes — the filling is molten hot straight from the oven. Eat the same day for peak softness; the tangzhong keeps them tender for 2-3 days stored airtight."
    ],
    "totalTimeMinutes": 200,
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 16,
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
      "Make your own koshian: simmer a can of red beans with an equal weight of sugar and a pinch of salt, mashing until thick and glossy — far cheaper than buying ready paste.",
      "Whole milk and bread flour matter most; skip pricey 'milk bread flour' blends — plain bread flour plus the tangzhong does the same job.",
      "One egg stretches across both dough and wash. Use the leftover wash to brush tomorrow's toast instead of wasting it."
    ],
    "substitutions": [
      {
        "forIngredientId": "red-beans",
        "swap": "Smooth store-bought koshian or chunky tsubuan straight from the can — no cooking down needed.",
        "savings": "Saves time, similar cost"
      },
      {
        "forIngredientId": "butter",
        "swap": "Equal amount of neutral vegetable oil kneaded in at the end for a slightly lighter, dairy-leaner crumb.",
        "savings": "~$0.30 per batch"
      },
      {
        "forIngredientId": "milk",
        "swap": "Soy milk or oat milk plus the tangzhong gives nearly the same soft crumb for a dairy-free dough.",
        "savings": "Comparable"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 8,
      "carbs": 52,
      "fat": 6,
      "fiber": 4
    },
    "emoji": "🍞",
    "accentColor": "bg-rose-100",
    "cuisine": "Japanese",
    "tags": [
      "baking",
      "japanese",
      "bread",
      "sweet",
      "red-bean",
      "tangzhong",
      "bakery"
    ]
  },
  {
    "id": "bake2-cream-pan",
    "name": "Cream Pan (Japanese Custard Cream Bread)",
    "description": "Classic Japanese bakery cream pan: pillowy-soft, milky tangzhong-style enriched bread wrapped around a silky homemade vanilla pastry cream, folded into the traditional glove shape and baked to a glossy golden brown. Soft enough to tear by hand, with a custard center that's rich but not cloying.",
    "mealType": "snack",
    "servings": 8,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 2.5,
        "note": "2 1/2 cups bread flour (for the dough), plus a little extra for dusting"
      },
      {
        "ingredientId": "whole-milk",
        "quantity": 1.5,
        "note": "1 1/2 cups whole milk total: ~2/3 cup warm for the dough, ~1 cup for the pastry cream"
      },
      {
        "ingredientId": "sugar",
        "quantity": 11,
        "note": "about 11 tbsp sugar total: 3 tbsp in the dough, 8 tbsp (1/2 cup) in the pastry cream"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "3 tbsp unsalted butter, softened (worked into the dough)"
      },
      {
        "ingredientId": "eggs",
        "quantity": 3,
        "note": "3 large eggs: 1 whole in the dough, 2 yolks for the pastry cream, plus reserve a little white/whole egg for the egg wash"
      },
      {
        "ingredientId": "instant-yeast",
        "quantity": 2,
        "note": "2 tsp instant yeast"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.75,
        "note": "3/4 tsp salt"
      },
      {
        "ingredientId": "cornstarch",
        "quantity": 3,
        "note": "3 tbsp cornstarch (thickens the pastry cream)"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1.5,
        "note": "1 1/2 tsp vanilla extract for the pastry cream"
      }
    ],
    "steps": [
      "Make the pastry cream first so it can chill. In a saucepan, warm 1 cup whole milk until steaming. In a bowl, whisk 2 egg yolks with 8 tbsp (1/2 cup) of the sugar and the 3 tbsp cornstarch until pale and smooth. Slowly pour in about half the hot milk while whisking constantly to temper, then return everything to the saucepan.",
      "Cook the custard over medium heat, whisking nonstop, until it thickens to a pudding and large bubbles burst on the surface, about 2-4 minutes. Remove from heat, whisk in the 1 1/2 tsp vanilla, then scrape into a shallow dish. Press plastic wrap directly onto the surface and refrigerate until cold and firm, at least 1 hour.",
      "Make the dough. In a large bowl, combine 2 1/2 cups bread flour, 2 tsp instant yeast, 3 tbsp sugar, and 3/4 tsp salt. Add 1 whole egg and about 2/3 cup warm milk (around 100F). Mix to a shaggy dough, then knead 8-10 minutes until smooth and elastic.",
      "Add the 3 tbsp softened butter a little at a time, kneading until fully absorbed and the dough is smooth, supple, and slightly tacky (it should pass a thin windowpane test). Shape into a ball, place in a greased bowl, cover, and let rise in a warm spot until doubled, about 1 to 1 1/2 hours.",
      "Punch down the dough and divide into 8 equal pieces. Roll each into a ball, cover, and rest 10 minutes. Flatten each ball into a 4-5 inch oval. Spoon a heaping tablespoon of cold pastry cream onto one half, leaving a clean border.",
      "Fold the dough over the filling into a half-moon and press the edges firmly to seal completely (a leaky seal lets cream burst out). For the traditional glove shape, cut 3-4 short slits into the rounded edge. Place on a parchment-lined tray, cover loosely, and proof until puffy, 40-50 minutes.",
      "Heat the oven to 350F (175C). Beat the reserved egg with a splash of milk and brush the buns lightly for a glossy finish, avoiding the cut slits.",
      "Bake 13-16 minutes until deep golden brown and the buns sound hollow when tapped. Cool on a rack at least 20 minutes so the custard sets before eating; they keep best in an airtight container and are wonderful slightly warmed."
    ],
    "totalTimeMinutes": 200,
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 18,
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
      "All-purpose flour works if you don't want to buy bread flour; just knead an extra minute or two to develop the gluten and the crumb will still be soft.",
      "Make the pastry cream a day ahead; it costs nothing extra and splits the work so the bake-day feels quick and stress-free.",
      "Skip the egg wash if you're low on eggs, brush with a little milk instead, for a softer matte finish that still browns nicely."
    ],
    "substitutions": [
      {
        "forIngredientId": "whole-milk",
        "swap": "Use 2% or even oat milk; whole milk gives the richest custard but any milk sets fine with the cornstarch.",
        "savings": "Use what's already in the fridge instead of buying whole milk"
      },
      {
        "forIngredientId": "cornstarch",
        "swap": "Swap in an equal amount of regular flour for the pastry cream; cook it 1-2 minutes longer to lose the raw-flour taste.",
        "savings": "Flour is usually cheaper and already on hand"
      },
      {
        "forIngredientId": "butter",
        "swap": "Plant butter or a neutral oil (use about 2 1/2 tbsp oil) keeps the dough soft if you're out of butter.",
        "savings": "Skip a dedicated butter purchase"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 8,
      "carbs": 45,
      "fat": 9,
      "fiber": 1
    },
    "emoji": "🍞",
    "accentColor": "bg-amber-100",
    "cuisine": "Japanese",
    "tags": [
      "baking",
      "japanese",
      "bread",
      "custard",
      "enriched-dough",
      "dessert",
      "bakery-style"
    ]
  }
];
