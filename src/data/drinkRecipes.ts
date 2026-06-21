import type { Recipe } from "@/lib/types";

/**
 * Drinks (cocktails, mocktails, smoothies, coffee, tea, juices) and blender
 * recipes. mealType "drink" powers the Drinks category; equipment "blender"
 * powers the Blender category. Ingredient ids are real catalog ids (spirits,
 * mixers, juices, etc. live in ingredients.ts); quantities are in catalog units
 * (spirits/mixers per oz). Photos are in drinkRecipePhotos.ts (licensed, attributed).
 */
export const DRINK_RECIPES: Recipe[] = [
  {
    "id": "drink-margarita",
    "name": "Classic Margarita",
    "description": "The definitive tequila cocktail: 100% agave tequila, fresh lime juice, and orange liqueur shaken cold and served over ice in a salt-rimmed glass. Bright, tart, and perfectly balanced.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "tequila",
        "quantity": 2,
        "note": "blanco/silver, 100% agave"
      },
      {
        "ingredientId": "triple-sec",
        "quantity": 1,
        "note": "or Cointreau"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "juiced, about 1 oz fresh lime juice"
      },
      {
        "ingredientId": "agave-syrup",
        "quantity": 0.5,
        "optional": true,
        "note": "to taste, for a touch of sweetness"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "for shaking and serving"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "optional": true,
        "note": "for the rim"
      }
    ],
    "steps": [
      "Run a lime wedge around the outer rim of a rocks glass, then dip the rim in salt spread on a small plate. Fill the glass with fresh ice.",
      "Add the tequila, triple sec, fresh lime juice, and agave syrup to a cocktail shaker.",
      "Fill the shaker with ice and shake hard for 15-20 seconds until well chilled and frothy.",
      "Strain into the prepared salt-rimmed glass over fresh ice.",
      "Garnish with a lime wheel and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a mid-shelf 100% agave blanco tertuila instead of premium aged bottles - shaking with lime makes the difference negligible in a margarita.",
      "Fresh limes are far cheaper per ounce than pre-bottled lime juice and taste dramatically better.",
      "A standard triple sec works just as well as pricier Cointreau once shaken with citrus."
    ],
    "substitutions": [
      {
        "forIngredientId": "triple-sec",
        "swap": "Use agave syrup plus an extra splash of lime for a Tommy's-style margarita",
        "savings": "Skips buying a bottle of liqueur"
      },
      {
        "forIngredientId": "agave-syrup",
        "swap": "Use simple syrup instead",
        "savings": "Cheaper and likely already on hand"
      },
      {
        "forIngredientId": "lime",
        "swap": "Bottled lime juice in a pinch",
        "savings": "Lasts longer, less waste"
      }
    ],
    "estimatedNutrition": {
      "calories": 210,
      "protein": 0,
      "carbs": 16,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍹",
    "accentColor": "bg-yellow-100",
    "cuisine": "Mexican",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "tequila",
      "margarita",
      "citrus",
      "classic"
    ]
  },
  {
    "id": "drink-mojito",
    "name": "Mojito",
    "description": "The classic Cuban highball — fresh mint and lime muddled with sugar, lengthened with white rum and topped with club soda over crushed ice. Bright, herbaceous, and endlessly refreshing.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "mint",
        "quantity": 1,
        "note": "fresh leaves, plus a sprig to garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.75,
        "note": "half juiced (~0.75 oz), rest cut into wedges"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "teaspoons; or use simple syrup"
      },
      {
        "ingredientId": "white-rum",
        "quantity": 2,
        "note": "ounces"
      },
      {
        "ingredientId": "club-soda",
        "quantity": 3,
        "note": "ounces, to top"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "cup crushed ice"
      }
    ],
    "steps": [
      "In a sturdy highball glass, add the mint leaves, 2 tsp sugar, and the fresh lime juice (about 0.75 oz). Gently muddle 4-5 times just to release the mint oils and dissolve the sugar — don't shred the leaves.",
      "Add the white rum and fill the glass about three-quarters with crushed ice.",
      "Top with club soda and stir briefly with a bar spoon to lift the mint and combine.",
      "Add more crushed ice to fill, garnish with a mint sprig and a lime wedge, and serve with a straw."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a single bunch of mint and freeze extra leaves in an ice cube tray with water so they never go to waste.",
      "Make a batch of simple syrup (equal sugar and water) instead of fine sugar — it dissolves instantly and stretches further.",
      "A mid-shelf white rum works perfectly here; the lime and mint do the heavy lifting, so don't overspend."
    ],
    "substitutions": [
      {
        "forIngredientId": "sugar",
        "swap": "Use simple-syrup or agave-syrup (about 0.75 oz) for instant dissolving",
        "savings": "Negligible cost, but no graininess"
      },
      {
        "forIngredientId": "white-rum",
        "swap": "Swap in regular rum if that's what you have on hand",
        "savings": "Use what's in the cabinet, save a bottle purchase"
      },
      {
        "forIngredientId": "club-soda",
        "swap": "Top with plain sparkling water or seltzer",
        "savings": "Often cheaper per ounce than branded club soda"
      }
    ],
    "estimatedNutrition": {
      "calories": 168,
      "protein": 0,
      "carbs": 13,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍹",
    "accentColor": "bg-green-100",
    "cuisine": "Cuban",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "rum",
      "mint",
      "lime",
      "highball",
      "summer",
      "refreshing"
    ]
  },
  {
    "id": "drink-old-fashioned",
    "name": "Old Fashioned",
    "description": "The original whiskey cocktail: bourbon gently stirred with sugar and aromatic bitters over a big rock of ice, finished with an expressed orange peel. Spirit-forward, smooth, and timeless.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "bourbon",
        "quantity": 2,
        "note": "2 oz, the backbone of the drink"
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "1 sugar cube, or 1/2 tsp"
      },
      {
        "ingredientId": "bitters",
        "quantity": 3,
        "note": "2-3 dashes Angostura aromatic bitters"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 large cube preferred"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "note": "1 wide peel, for expressing and garnish"
      },
      {
        "ingredientId": "cherry-fresh",
        "quantity": 1,
        "optional": true,
        "note": "or a brandied/Luxardo cherry, for garnish"
      }
    ],
    "steps": [
      "Add the sugar cube to a rocks glass and saturate it with 2-3 dashes of bitters plus a small splash of water. Muddle until the sugar mostly dissolves into a paste.",
      "Pour in the bourbon and add one large ice cube. Stir gently for 20-30 seconds to chill and dilute.",
      "Express the orange peel over the glass by pinching it skin-side down to release the oils, then rub it around the rim and drop it in.",
      "Garnish with a cherry if using, and serve immediately."
    ],
    "totalTimeMinutes": 4,
    "prepTimeMinutes": 4,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A mid-shelf bourbon works beautifully here; aromatics and dilution matter more than an expensive bottle.",
      "Skip pricey Luxardo cherries and use a fresh cherry or a splash of the syrup from a jar of maraschinos.",
      "One large ice cube melts slower than crushed ice, so you waste less bourbon to over-dilution."
    ],
    "substitutions": [
      {
        "forIngredientId": "sugar",
        "swap": "Use 1/4 oz simple syrup instead of a sugar cube for instant, lump-free mixing",
        "savings": "Roughly the same cost; saves muddling time"
      },
      {
        "forIngredientId": "bourbon",
        "swap": "Swap in rye whiskey for a spicier, drier Old Fashioned",
        "savings": "Comparable price, classic variation"
      },
      {
        "forIngredientId": "cherry-fresh",
        "swap": "Drop the cherry entirely and just use the orange peel",
        "savings": "Saves the cost of the garnish"
      }
    ],
    "estimatedNutrition": {
      "calories": 155,
      "protein": 0,
      "carbs": 5,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🥃",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "whiskey",
      "bourbon",
      "classic",
      "spirit-forward"
    ]
  },
  {
    "id": "drink-negroni",
    "name": "Negroni",
    "description": "The classic Italian aperitivo: equal parts gin, Campari, and sweet vermouth stirred over ice and served on the rocks with an orange twist. Bitter, herbal, and beautifully balanced.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "gin",
        "quantity": 1,
        "note": "1 oz, a London dry works best"
      },
      {
        "ingredientId": "campari",
        "quantity": 1,
        "note": "1 oz"
      },
      {
        "ingredientId": "sweet-vermouth",
        "quantity": 1,
        "note": "1 oz, an Italian rosso"
      },
      {
        "ingredientId": "orange",
        "quantity": 0.25,
        "note": "for the peel garnish"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, plus a large cube for the glass",
        "optional": false
      },
      {
        "ingredientId": "bitters",
        "quantity": 1,
        "optional": true,
        "note": "optional dash of orange bitters"
      }
    ],
    "steps": [
      "Fill a mixing glass about two-thirds with ice.",
      "Add 1 oz gin, 1 oz Campari, and 1 oz sweet vermouth (plus an optional dash of bitters).",
      "Stir gently for 20-30 seconds until well chilled and slightly diluted.",
      "Strain into a rocks glass over a large ice cube.",
      "Express an orange peel over the surface, rub it around the rim, then drop it in to garnish."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a mid-shelf gin and Campari — in a stirred, bitter drink the subtle premium notes get lost anyway.",
      "Use one large ice cube to slow dilution so the drink stays balanced longer.",
      "A single orange yields enough peels for several rounds, so make a batch when entertaining."
    ],
    "substitutions": [
      {
        "forIngredientId": "gin",
        "swap": "Use vodka for a softer, less juniper-forward 'Negroni Sbagliato'-style sip",
        "savings": "Often cheaper than a quality dry gin"
      },
      {
        "forIngredientId": "campari",
        "swap": "Aperol for a lighter, sweeter, lower-proof bitter",
        "savings": "Similar price, milder flavor"
      },
      {
        "forIngredientId": "orange",
        "swap": "Lemon peel if no orange is on hand",
        "savings": "Usually cheaper per fruit"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 0,
      "carbs": 14,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍸",
    "accentColor": "bg-red-100",
    "cuisine": "Italian",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "aperitivo",
      "stirred",
      "bitter",
      "classic"
    ]
  },
  {
    "id": "drink-aperol-spritz",
    "name": "Aperol Spritz",
    "description": "The iconic Venetian aperitivo: bittersweet Aperol topped with chilled prosecco and a splash of soda, served over plenty of ice with an orange slice. Bright, fizzy, and refreshingly low in alcohol.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "aperol",
        "quantity": 2,
        "note": "2 oz (the bitter orange aperitif)"
      },
      {
        "ingredientId": "prosecco",
        "quantity": 3,
        "note": "3 oz, well chilled"
      },
      {
        "ingredientId": "club-soda",
        "quantity": 1,
        "note": "1 oz splash"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fill the glass with large cubes"
      },
      {
        "ingredientId": "orange",
        "quantity": 1,
        "optional": true,
        "note": "1 slice for garnish"
      }
    ],
    "steps": [
      "Fill a large wine glass to the top with ice cubes.",
      "Pour in 3 oz prosecco, then 2 oz Aperol over the ice (the classic 3-2-1 ratio).",
      "Top with 1 oz club soda and stir gently once to combine.",
      "Garnish with an orange slice and serve immediately while ice-cold and fizzy."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A budget Italian prosecco or cava works perfectly here; you don't need vintage bubbly for a spritz.",
      "Buy one large bottle of prosecco and a bag of oranges to make a whole pitcher's worth of spritzes for less per glass.",
      "Use club soda from a fresh-opened bottle for maximum fizz instead of letting it go flat."
    ],
    "substitutions": [
      {
        "forIngredientId": "club-soda",
        "swap": "sparkling-water",
        "savings": "Use plain sparkling water you already have on hand instead of buying club soda"
      },
      {
        "forIngredientId": "prosecco",
        "swap": "any dry sparkling wine like cava or a domestic brut",
        "savings": "Save a few dollars per bottle versus name-brand prosecco"
      },
      {
        "forIngredientId": "aperol",
        "swap": "any bittersweet orange aperitivo (e.g. a store-brand spritz bitter)",
        "savings": "Generic aperitivo bitters run cheaper than the branded bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 145,
      "protein": 0,
      "carbs": 14,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍊",
    "accentColor": "bg-orange-100",
    "cuisine": "Italian",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "aperitivo",
      "spritz",
      "sparkling",
      "summer"
    ]
  },
  {
    "id": "drink-cosmopolitan",
    "name": "Cosmopolitan",
    "description": "The iconic pink cocktail: citrus vodka, triple sec, tart cranberry, and fresh lime shaken ice-cold and served up. Crisp, dry, and elegant with a flamed orange or lime twist.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "vodka",
        "quantity": 1.5,
        "note": "citrus vodka if you have it"
      },
      {
        "ingredientId": "triple-sec",
        "quantity": 0.75,
        "note": "Cointreau is ideal"
      },
      {
        "ingredientId": "cranberry-juice",
        "quantity": 1,
        "note": "use real cranberry, not cocktail blend"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "freshly squeezed, about 0.5 oz juice"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.25,
        "optional": true,
        "note": "only if you like it less tart"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "for shaking"
      }
    ],
    "steps": [
      "Chill a coupe or martini glass by filling it with ice and water while you build the drink.",
      "Add the vodka, triple sec, cranberry juice, fresh lime juice, and optional simple syrup to a cocktail shaker.",
      "Fill the shaker with ice and shake hard for 12-15 seconds until the outside is frosted.",
      "Empty the chilled glass and double-strain the cocktail into it to keep it crystal clear.",
      "Garnish with a lime wheel or a flamed orange twist and serve immediately."
    ],
    "totalTimeMinutes": 4,
    "prepTimeMinutes": 4,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A bottle of plain vodka plus a squeeze of extra lime mimics pricey citrus vodka for a fraction of the cost.",
      "Buy 100% cranberry juice and dilute with a splash of water and syrup instead of pre-sweetened cranberry cocktail.",
      "Skip name-brand orange liqueur; any decent triple sec delivers the same bright orange note in a balanced shake."
    ],
    "substitutions": [
      {
        "forIngredientId": "triple-sec",
        "swap": "Equal parts orange juice with a teaspoon of sugar",
        "savings": "~$0.40/drink"
      },
      {
        "forIngredientId": "simple-syrup",
        "swap": "Agave syrup or honey, thinned with a little warm water",
        "savings": "~$0.10/drink"
      },
      {
        "forIngredientId": "cranberry-juice",
        "swap": "Pomegranate or cranberry-raspberry juice",
        "savings": "about the same"
      }
    ],
    "estimatedNutrition": {
      "calories": 168,
      "protein": 0,
      "carbs": 13,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍸",
    "accentColor": "bg-pink-100",
    "cuisine": "American",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "vodka",
      "classic",
      "citrus"
    ]
  },
  {
    "id": "drink-whiskey-sour",
    "name": "Whiskey Sour",
    "description": "The classic sour: bourbon balanced by fresh lemon and a touch of simple syrup, shaken cold and served over ice. Bright, tart, and smooth with a finish of aromatic bitters.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "whiskey",
        "quantity": 2,
        "note": "bourbon preferred, 2 oz"
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.75,
        "note": "fresh lemon juice, 0.75 oz (about half a lemon)"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.75,
        "note": "0.75 oz"
      },
      {
        "ingredientId": "bitters",
        "quantity": 2,
        "optional": true,
        "note": "2 dashes Angostura on top"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup for shaking and serving"
      },
      {
        "ingredientId": "orange",
        "quantity": 0.1,
        "optional": true,
        "note": "orange slice to garnish"
      }
    ],
    "steps": [
      "Fill a shaker with ice, then add 2 oz bourbon, 0.75 oz fresh lemon juice, and 0.75 oz simple syrup.",
      "Seal and shake hard for 12-15 seconds until the shaker frosts over and the drink is well chilled.",
      "Strain into a rocks glass over a single large ice cube (or fresh ice).",
      "Top with 2 dashes of Angostura bitters and garnish with an orange slice."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Make your own simple syrup with equal parts sugar and hot water - far cheaper than buying it bottled.",
      "Use fresh lemons rather than bottled juice; one lemon yields enough for two drinks and tastes brighter.",
      "A mid-shelf bourbon works perfectly here - the lemon and syrup smooth out any rough edges, so save the premium bottle."
    ],
    "substitutions": [
      {
        "forIngredientId": "whiskey",
        "swap": "Use bourbon or rye - rye gives a spicier, drier sour",
        "savings": "Mid-shelf bottle works great, ~$0.50/oz cheaper than premium"
      },
      {
        "forIngredientId": "simple-syrup",
        "swap": "Swap in honey syrup (honey thinned with warm water) for a Gold Rush variation",
        "savings": "Roughly even on cost, adds richer flavor"
      },
      {
        "forIngredientId": "bitters",
        "swap": "Skip the bitters entirely - the drink is still balanced without them",
        "savings": "Saves the cost of a bitters bottle"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 0,
      "carbs": 16,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🥃",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "whiskey",
      "bourbon",
      "sour",
      "classic"
    ]
  },
  {
    "id": "drink-daiquiri",
    "name": "Daiquiri",
    "description": "The classic Cuban three-ingredient cocktail: white rum, fresh lime juice, and a touch of simple syrup, shaken hard over ice and strained ice-cold into a chilled coupe. Bright, tart, and clean — a perfect balance of sweet and sour that lets good rum shine.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "white-rum",
        "quantity": 2,
        "note": "2 oz light/white rum"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "0.75 oz fresh-squeezed lime juice (about 1 lime)"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.75,
        "note": "0.75 oz simple syrup, adjust to taste"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup cubed ice for shaking"
      }
    ],
    "steps": [
      "Chill a coupe or martini glass in the freezer while you build the drink.",
      "Add the white rum, fresh lime juice, and simple syrup to a cocktail shaker.",
      "Fill the shaker with ice and seal it.",
      "Shake hard for 12-15 seconds, until the shaker is frosted and very cold.",
      "Double-strain into the chilled coupe, leaving the ice behind.",
      "Serve straight up; garnish with a lime wheel or twist if you like."
    ],
    "totalTimeMinutes": 4,
    "prepTimeMinutes": 4,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A 750ml bottle of white rum makes ~12 daiquiris, far cheaper than buying them at a bar.",
      "Make your own simple syrup with equal parts sugar and hot water instead of buying bottled.",
      "Buy limes by the bag when in season and juice them all at once; the juice keeps a couple days."
    ],
    "substitutions": [
      {
        "forIngredientId": "simple-syrup",
        "swap": "Stir 1.5 tsp sugar directly into the lime juice until dissolved",
        "savings": "Skip buying syrup entirely; pennies per drink"
      },
      {
        "forIngredientId": "lime",
        "swap": "Bottled lime juice (lime-juice-bottled) in a pinch",
        "savings": "About 30% cheaper per oz and keeps longer"
      },
      {
        "forIngredientId": "white-rum",
        "swap": "Any light rum or even a clean blanco tequila for a daiquiri-margarita hybrid",
        "savings": "Use whatever clear spirit you already own"
      }
    ],
    "estimatedNutrition": {
      "calories": 200,
      "protein": 0,
      "carbs": 18,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍸",
    "accentColor": "bg-green-100",
    "cuisine": "Cuban",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "rum",
      "shaken",
      "classic",
      "citrus",
      "happy-hour"
    ]
  },
  {
    "id": "drink-moscow-mule",
    "name": "Moscow Mule",
    "description": "The classic copper-mug cocktail: bright, spicy, and refreshing. Vodka meets fiery ginger beer and a generous squeeze of fresh lime over plenty of ice.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "vodka",
        "quantity": 2,
        "note": "2 oz"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "half a lime, juiced (about 0.5 oz)"
      },
      {
        "ingredientId": "ginger-beer",
        "quantity": 4,
        "note": "4 oz, to top"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, to fill the mug"
      },
      {
        "ingredientId": "mint",
        "optional": true,
        "quantity": 1,
        "note": "sprig, for garnish"
      }
    ],
    "steps": [
      "Fill a copper mug (or a highball glass) to the top with ice.",
      "Pour in 2 oz vodka and the juice of half a lime (about 0.5 oz).",
      "Top with 4 oz cold ginger beer and stir gently once to combine.",
      "Garnish with a lime wheel and a sprig of fresh mint, and serve immediately with a straw."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a single large bottle of ginger beer instead of a multipack of cans — it works out far cheaper per drink.",
      "Fresh limes are cheaper by the bag; one lime stretches to two mules.",
      "No copper mug needed — any glass works and won't change the taste."
    ],
    "substitutions": [
      {
        "forIngredientId": "ginger-beer",
        "swap": "ginger-ale plus a dash of fresh lime",
        "savings": "Ginger ale is usually cheaper and easier to find, saving ~30%"
      },
      {
        "forIngredientId": "lime",
        "swap": "bottled lime juice (lime-juice-bottled)",
        "savings": "About $0.30 less per drink and zero waste"
      },
      {
        "forIngredientId": "vodka",
        "swap": "any well vodka",
        "savings": "House-brand vodka cuts the spirit cost by roughly half"
      }
    ],
    "estimatedNutrition": {
      "calories": 175,
      "protein": 0,
      "carbs": 16,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🥃",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "vodka",
      "ginger-beer",
      "classic",
      "refreshing"
    ]
  },
  {
    "id": "drink-gin-tonic",
    "name": "Gin & Tonic",
    "description": "The crisp, effervescent classic: cold gin over plenty of ice, topped with tonic water and a fresh squeeze of lime. Bright, botanical, and endlessly refreshing — ready in under two minutes with no kitchen required.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "gin",
        "quantity": 2,
        "note": "London dry, well chilled"
      },
      {
        "ingredientId": "tonic-water",
        "quantity": 4,
        "note": "cold, freshly opened for max fizz"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "1 wedge to squeeze, plus a wheel to garnish"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fill the glass; large cubes melt slower"
      },
      {
        "ingredientId": "cucumber",
        "quantity": 1,
        "optional": true,
        "note": "a ribbon or 2-3 slices, optional garnish"
      }
    ],
    "steps": [
      "Fill a highball or large wine glass to the top with ice — the more ice, the colder and less diluted the drink stays.",
      "Pour 2 oz gin over the ice.",
      "Top slowly with 4 oz cold tonic water, pouring down the side of the glass to keep the carbonation lively.",
      "Squeeze a fresh lime wedge over the top and drop it in; give one gentle stir to combine.",
      "Garnish with a lime wheel (and a ribbon of cucumber if using) and serve immediately while bubbly."
    ],
    "totalTimeMinutes": 2,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a mid-shelf London dry gin — in a G&T the tonic and lime carry the flavor, so premium bottles are wasted here.",
      "Skip single-serve bottles; a 1L tonic bottle is far cheaper per pour. Reseal tightly and use within a few days for fizz.",
      "One lime garnishes several drinks — cut wedges and wheels from the same fruit instead of buying extra citrus."
    ],
    "substitutions": [
      {
        "forIngredientId": "tonic-water",
        "swap": "Club soda plus a small splash of simple syrup for a lighter, less sweet, lower-calorie pour",
        "savings": "Saves about $0.40 per drink and cuts sugar"
      },
      {
        "forIngredientId": "gin",
        "swap": "Vodka for a softer, more neutral cooler (technically a vodka tonic)",
        "savings": "Often $3-6 cheaper per bottle"
      },
      {
        "forIngredientId": "lime",
        "swap": "Lemon wedge or a splash of bottled lime juice",
        "savings": "Saves about $0.30 if you already have lemons on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 175,
      "protein": 0,
      "carbs": 14,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍸",
    "accentColor": "bg-sky-100",
    "cuisine": "British",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "gin",
      "highball",
      "classic",
      "refreshing"
    ]
  },
  {
    "id": "drink-espresso-martini",
    "name": "Espresso Martini",
    "description": "A sleek, wide-awake-then-asleep classic: vodka, coffee liqueur and a fresh shot of espresso shaken hard over ice until ice-cold and crowned with a signature foamy crema. Bittersweet, boozy and silky.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "vodka",
        "quantity": 2
      },
      {
        "ingredientId": "coffee-liqueur",
        "quantity": 0.75
      },
      {
        "ingredientId": "espresso",
        "quantity": 1,
        "note": "1 fresh hot shot, about 1 oz"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.25,
        "optional": true,
        "note": "adjust to taste; skip if your espresso/liqueur is sweet enough"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fill shaker"
      }
    ],
    "steps": [
      "Pull a fresh shot of espresso and let it cool for a minute so it doesn't melt all the ice.",
      "Add the vodka, coffee liqueur, espresso and simple syrup to a cocktail shaker, then fill with ice.",
      "Seal and shake hard for 15-20 seconds — really go for it, as the vigorous shake is what builds the signature frothy crema.",
      "Double-strain into a chilled coupe or martini glass, leaving the ice behind.",
      "Garnish with 3 coffee beans on the foam and serve immediately while the crema is fresh."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Make a big batch of simple syrup (equal parts sugar and water, microwaved 30s and stirred) instead of buying it — pennies per drink.",
      "Use strong brewed coffee or cold brew if you don't have an espresso machine; it's far cheaper and still delicious.",
      "Buy a mid-shelf vodka — once it's shaken with coffee liqueur and espresso, no one can tell it from the premium bottle."
    ],
    "substitutions": [
      {
        "forIngredientId": "espresso",
        "swap": "1 oz strong cold brew or double-strength instant coffee",
        "savings": "Saves ~$0.50/drink vs. a cafe shot and needs no machine"
      },
      {
        "forIngredientId": "simple-syrup",
        "swap": "a small drizzle of agave-syrup or a pinch of sugar dissolved in the warm espresso",
        "savings": "Uses pantry staples; saves buying a bottle"
      },
      {
        "forIngredientId": "coffee-liqueur",
        "swap": "homemade coffee syrup with a splash more vodka",
        "savings": "Saves ~$1.50/drink over store-bought Kahlua"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 0,
      "carbs": 18,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍸",
    "accentColor": "bg-amber-100",
    "cuisine": "Cocktail",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "coffee",
      "vodka",
      "after-dinner",
      "classic"
    ]
  },
  {
    "id": "drink-pina-colada",
    "name": "Piña Colada",
    "description": "The classic Puerto Rican blended cocktail: white rum, sweet pineapple, and creamy coconut whipped with ice into a frosty, tropical slushie. Smooth, fruity, and dangerously easy to drink.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "white-rum",
        "quantity": 2,
        "note": "2 oz, white/light rum"
      },
      {
        "ingredientId": "coconut-cream",
        "quantity": 0.4,
        "note": "2 oz cream of coconot, well-shaken"
      },
      {
        "ingredientId": "pineapple-juice",
        "quantity": 3,
        "note": "3 oz, chilled"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, for blending"
      },
      {
        "ingredientId": "pineapple",
        "quantity": 1,
        "optional": true,
        "note": "1 wedge, for garnish"
      }
    ],
    "steps": [
      "Add the white rum, coconut cream, and pineapple juice to a blender.",
      "Add 1 cup of ice on top.",
      "Blend on high for 20-30 seconds until completely smooth and slushy, with no ice chunks remaining.",
      "Pour into a chilled hurricane or tall glass.",
      "Garnish with a pineapple wedge (and a cherry if you have one) and serve with a straw."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a can of cream of coconut (like Coco Lopez) once — it makes 4-6 drinks for the price of one bar cocktail.",
      "Freeze fresh pineapple chunks and blend them in instead of ice for a more intense flavor and less dilution.",
      "Skip pricey premixes; pineapple juice plus coconut cream is all the 'mix' you need."
    ],
    "substitutions": [
      {
        "forIngredientId": "white-rum",
        "swap": "Use spiced rum or gold rum for a deeper, warmer flavor",
        "savings": "Use what's on your shelf instead of buying a dedicated bottle"
      },
      {
        "forIngredientId": "pineapple-juice",
        "swap": "Blend in frozen pineapple chunks plus a splash of water",
        "savings": "Cheaper per drink and no leftover juice to waste"
      },
      {
        "forIngredientId": "coconut-cream",
        "swap": "Coconut milk plus 1 tsp sugar or simple syrup",
        "savings": "Coconut milk is often half the price of cream of coconut"
      }
    ],
    "estimatedNutrition": {
      "calories": 365,
      "protein": 1,
      "carbs": 38,
      "fat": 11,
      "fiber": 1
    },
    "emoji": "🍍",
    "accentColor": "bg-yellow-100",
    "cuisine": "Caribbean",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "blender",
      "rum",
      "tropical",
      "tiki",
      "frozen"
    ]
  },
  {
    "id": "drink-bloody-mary",
    "name": "Bloody Mary",
    "description": "The definitive brunch cocktail: chilled vodka and tomato juice built tall over ice with a savory, spicy backbone of Worcestershire, hot sauce, lemon, and celery salt. Stirred (never shaken hard) to keep it silky, then garnished with a crisp celery stalk and a lime wedge.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "vodka",
        "quantity": 2
      },
      {
        "ingredientId": "tomato-juice",
        "quantity": 4
      },
      {
        "ingredientId": "lemon",
        "quantity": 0.25,
        "note": "freshly squeezed, about 0.5 oz juice"
      },
      {
        "ingredientId": "worcestershire",
        "quantity": 0.25,
        "note": "2 dashes"
      },
      {
        "ingredientId": "hot-sauce",
        "quantity": 0.25,
        "note": "3-4 dashes, to taste"
      },
      {
        "ingredientId": "celery-salt",
        "quantity": 0.25,
        "note": "plus extra for rimming the glass"
      },
      {
        "ingredientId": "black-pepper",
        "quantity": 0.1,
        "note": "a few cracks"
      },
      {
        "ingredientId": "ice",
        "quantity": 1
      },
      {
        "ingredientId": "celery",
        "quantity": 1,
        "note": "1 inner stalk with leaves, for garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.25,
        "optional": true,
        "note": "wedge for garnish and rim"
      },
      {
        "ingredientId": "horseradish",
        "quantity": 0.25,
        "optional": true,
        "note": "prepared, for extra bite"
      }
    ],
    "steps": [
      "Rub a lime wedge around the rim of a tall glass, then dip the rim in celery salt to coat. Fill the glass with ice.",
      "In a mixing glass or shaker, combine the vodka, tomato juice, fresh lemon juice, Worcestershire, hot sauce, celery salt, black pepper, and horseradish if using.",
      "Add a scoop of ice and roll the drink: gently pour it back and forth between the shaker and mixing glass 3-4 times to mix and chill without over-diluting.",
      "Strain into the prepared ice-filled glass.",
      "Garnish with the celery stalk and a lime wedge. Add an extra crack of black pepper on top and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "A 46 oz can of tomato juice makes 10+ drinks, so it's the cheapest mixer per serving — buy the big can rather than single bottles.",
      "Mid-shelf vodka is ideal here; the spices and tomato juice mask any harshness, so don't waste money on a premium bottle.",
      "Make a big batch of the spice mix (Worcestershire, hot sauce, celery salt, pepper, lemon, horseradish) in the tomato juice ahead of time and just add vodka per glass."
    ],
    "substitutions": [
      {
        "forIngredientId": "vodka",
        "swap": "Swap in tequila for a Bloody Maria, or leave it out entirely for a Virgin Mary mocktail",
        "savings": "Going alcohol-free saves ~$1.50 per drink"
      },
      {
        "forIngredientId": "hot-sauce",
        "swap": "Use a pinch of cayenne or a spoon of salsa you already have",
        "savings": "Avoids buying a dedicated bottle, ~$0.40/serving"
      },
      {
        "forIngredientId": "celery",
        "swap": "Garnish with a pickle spear, scallion, or pickled-jalapeno instead",
        "savings": "Uses pantry staples, ~$0.30/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 165,
      "protein": 2,
      "carbs": 11,
      "fat": 0,
      "fiber": 1
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "brunch",
      "savory",
      "vodka",
      "spicy",
      "classic"
    ]
  },
  {
    "id": "drink-mai-tai",
    "name": "Mai Tai",
    "description": "The classic tiki cocktail: aged white rum shaken with fresh lime, orange triple sec and a touch of almond-sweetened syrup, served over crushed ice with a dark rum float and a mint sprig.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "white-rum",
        "quantity": 2,
        "note": "aged white or gold rum, the base"
      },
      {
        "ingredientId": "rum",
        "quantity": 0.5,
        "note": "dark rum for the float on top"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "freshly squeezed, about 0.75 oz"
      },
      {
        "ingredientId": "triple-sec",
        "quantity": 0.5,
        "note": "orange curaçao"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.5,
        "note": "stands in for orgeat"
      },
      {
        "ingredientId": "almond-extract",
        "quantity": 0.125,
        "optional": true,
        "note": "a tiny drop to mimic orgeat's almond note"
      },
      {
        "ingredientId": "ice",
        "quantity": 1.5,
        "note": "crushed or cubed"
      },
      {
        "ingredientId": "mint-fresh",
        "quantity": 1,
        "optional": true,
        "note": "sprig, to garnish"
      }
    ],
    "steps": [
      "Squeeze half a lime to get about 0.75 oz of fresh juice; reserve the spent shell.",
      "Add the white rum, lime juice, triple sec, simple syrup and almond extract to a shaker with a scoop of ice.",
      "Shake hard for 10-12 seconds until well-chilled and frothy.",
      "Fill a rocks or tiki glass with crushed ice and strain the cocktail over the top.",
      "Gently float the dark rum over the back of a bar spoon so it pools on the surface.",
      "Garnish with the spent lime shell and a slapped sprit of mint, then serve with a straw."
    ],
    "totalTimeMinutes": 4,
    "prepTimeMinutes": 4,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Skip bottled orgeat: a drop of almond extract plus simple syrup gives the same nutty sweetness for pennies.",
      "One lime yields enough juice for two Mai Tais — batch them for a round.",
      "House white rum works fine here; save the aged bottle for sipping."
    ],
    "substitutions": [
      {
        "forIngredientId": "triple-sec",
        "swap": "Any orange liqueur or a splash of orange juice with a pinch of sugar",
        "savings": "~$0.40/drink"
      },
      {
        "forIngredientId": "rum",
        "swap": "Skip the dark float and add a dash of grenadine for color",
        "savings": "~$0.50/drink"
      },
      {
        "forIngredientId": "simple-syrup",
        "swap": "Equal parts sugar dissolved in hot water",
        "savings": "~$0.25/drink"
      }
    ],
    "estimatedNutrition": {
      "calories": 245,
      "protein": 0,
      "carbs": 18,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍹",
    "accentColor": "bg-orange-100",
    "cuisine": "Tiki",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "rum",
      "tiki",
      "tropical"
    ]
  },
  {
    "id": "drink-dark-stormy",
    "name": "Dark & Stormy",
    "description": "The bracing Bermuda classic: a tall glass of spicy ginger beer poured over ice, then crowned with a dark, floating layer of rum and a squeeze of fresh lime. Built in seconds, refreshing as a sea breeze.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "rum",
        "quantity": 2,
        "note": "dark rum, ideally Goslings Black Seal"
      },
      {
        "ingredientId": "ginger-beer",
        "quantity": 5,
        "note": "spicy, chilled"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "freshly squeezed, plus a wedge for garnish"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fill the glass"
      }
    ],
    "steps": [
      "Fill a tall highball glass to the top with ice.",
      "Pour the chilled ginger beer over the ice, then squeeze in the juice of half a lime.",
      "Slowly float the dark rum over the back of a bar spoon so it pools in a dark layer on top.",
      "Garnish with a lime wedge and serve unstirred so the rum cascades through as you drink."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a large bottle of ginger beer instead of single cans — the per-drink cost drops by more than half.",
      "One lime garnishes and juices several drinks, so make a round for friends from one purchase.",
      "House-brand dark rum works fine here since the ginger beer carries the flavor."
    ],
    "substitutions": [
      {
        "forIngredientId": "ginger-beer",
        "swap": "Use ginger-ale plus a few dashes of bitters for a milder, cheaper fizz",
        "savings": "~30% per drink"
      },
      {
        "forIngredientId": "lime",
        "swap": "Bottled lime-juice-bottled (about 1 tbsp)",
        "savings": "~$0.40 per drink"
      },
      {
        "forIngredientId": "rum",
        "swap": "Any well-priced dark or spiced rum",
        "savings": "Up to 40% vs. premium bottles"
      }
    ],
    "estimatedNutrition": {
      "calories": 215,
      "protein": 0,
      "carbs": 24,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🥃",
    "accentColor": "bg-amber-100",
    "cuisine": "Bermudian",
    "tags": [
      "cocktail",
      "drink",
      "no-cook",
      "rum",
      "highball",
      "ginger-beer",
      "classic"
    ]
  },
  {
    "id": "drink-virgin-mojito",
    "name": "Virgin Mojito",
    "description": "A bright, refreshing Cuban-style mocktail of muddled fresh mint and lime, lightly sweetened and topped with fizzy club soda. All the cooling zing of a classic mojito with zero alcohol.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "mint",
        "quantity": 1,
        "note": "fresh leaves, plus a sprig to garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "cut into wedges"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "teaspoons, or use simple syrup instead"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.5,
        "optional": true,
        "note": "0.5 oz, in place of sugar for easier mixing"
      },
      {
        "ingredientId": "club-soda",
        "quantity": 5,
        "note": "5 oz, chilled, to top"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, cubed or crushed"
      }
    ],
    "steps": [
      "Add about 8 mint leaves, 3 lime wedges and the sugar (or simple syrup) to a sturdy highball glass.",
      "Gently muddle 4-5 times to release the mint oils and lime juice without shredding the leaves.",
      "Fill the glass with ice, then top with chilled club soda and stir to combine.",
      "Garnish with a fresh mint sprig and a lime wedge, add a straw, and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegan",
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a single bunch of mint and freeze extra leaves so none goes to waste.",
      "A big bottle of club soda is far cheaper per drink than single cans.",
      "Skip bottled juice and use a real lime; one lime is plenty for one glass."
    ],
    "substitutions": [
      {
        "forIngredientId": "club-soda",
        "swap": "Plain sparkling water or a splash of lemon-lime soda",
        "savings": "Use what's already in the fridge; soda adn sweetness in one"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Honey or agave syrup stirred in until dissolved",
        "savings": "Pantry staples you likely already own"
      },
      {
        "forIngredientId": "simple-syrup",
        "swap": "Dissolve plain sugar in a splash of warm water",
        "savings": "Avoids buying bottled syrup"
      }
    ],
    "estimatedNutrition": {
      "calories": 70,
      "protein": 0,
      "carbs": 18,
      "fat": 0,
      "fiber": 1
    },
    "emoji": "🌿",
    "accentColor": "bg-green-100",
    "cuisine": "Cuban",
    "tags": [
      "mocktail",
      "drink",
      "no-cook",
      "non-alcoholic",
      "refreshing",
      "mint",
      "lime",
      "summer"
    ]
  },
  {
    "id": "drink-shirley-temple",
    "name": "Shirley Temple",
    "description": "The classic kid-at-the-bar mocktail: crisp, fizzy ginger ale stained ruby-red with a splash of grenadine and topped with a sweet cherry. Sweet, bubbly, and ready in under two minutes with zero cooking.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "ginger-ale",
        "quantity": 6,
        "note": "chilled, about 3/4 cup"
      },
      {
        "ingredientId": "grenadine",
        "quantity": 0.5,
        "note": "for color and sweetness"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fill the glass"
      },
      {
        "ingredientId": "cherry-fresh",
        "quantity": 1,
        "optional": true,
        "note": "maraschino cherry to garnish"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.25,
        "optional": true,
        "note": "a thin wheel to garnish"
      }
    ],
    "steps": [
      "Fill a tall highball or Collins glass with ice.",
      "Pour the grenadine over the ice so it settles toward the bottom.",
      "Top with the chilled ginger ale, pouring gently to keep the fizz.",
      "Give it one slow stir to streak the ruby grenadine up through the soda.",
      "Garnish with a cherry (and a lime wheel if you like) and serve with a straw."
    ],
    "totalTimeMinutes": 2,
    "prepTimeMinutes": 2,
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
      "A store-brand ginger ale tastes identical here and costs a fraction of name brands.",
      "Skip the bottled cherry and use a fresh cherry or a lime wheel you already have.",
      "Buy grenadine once; you only use a splash per drink, so one bottle makes dozens."
    ],
    "substitutions": [
      {
        "forIngredientId": "ginger-ale",
        "swap": "Use lemon-lime club soda for a less sweet, drier version",
        "savings": "~$0.40/drink"
      },
      {
        "forIngredientId": "grenadine",
        "swap": "A splash of cherry or cranberry juice plus a pinch of sugar",
        "savings": "~$0.25/drink"
      },
      {
        "forIngredientId": "cherry-fresh",
        "swap": "A lime wheel or orange slice",
        "savings": "~$0.30/drink"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 0,
      "carbs": 28,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍒",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "mocktail",
      "drink",
      "no-cook",
      "non-alcoholic",
      "kid-friendly",
      "fizzy",
      "party"
    ]
  },
  {
    "id": "drink-cranberry-spritzer",
    "name": "Cranberry Lime Spritzer",
    "description": "A crisp, refreshing alcohol-free spritzer of tart cranberry juice, fresh lime, and bubbly club soda over ice. Bright, lightly sweet, and endlessly sippable.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fill the glass"
      },
      {
        "ingredientId": "cranberry-juice",
        "quantity": 3,
        "note": "100% juice or cranberry cocktail"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "juiced, about 0.5 oz; reserve a wheel"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.5,
        "optional": true,
        "note": "adjust to taste"
      },
      {
        "ingredientId": "club-soda",
        "quantity": 4,
        "note": "to top"
      },
      {
        "ingredientId": "mint",
        "quantity": 1,
        "optional": true,
        "note": "sprig, to garnish"
      }
    ],
    "steps": [
      "Fill a tall glass to the top with ice.",
      "Pour in the cranberry juice, fresh lime juice, and simple syrup.",
      "Top with chilled club soda and stir gently once or twice to combine.",
      "Garnish with a lime wheel and a mint sprig, then serve immediately."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
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
      "Buy cranberry juice as a concentrate or large bottle and dilute, far cheaper per glass than single-serve.",
      "Use bulk club soda or a SodaStream instead of small cans to cut cost dramatically.",
      "Squeeze fresh limes only when on sale; bottled lime juice works in a pinch for less."
    ],
    "substitutions": [
      {
        "forIngredientId": "simple-syrup",
        "swap": "agave-syrup or a small spoon of sugar stirred in",
        "savings": "Use pantry sugar to skip buying syrup, ~$0.40 saved"
      },
      {
        "forIngredientId": "club-soda",
        "swap": "any plain sparkling or seltzer water",
        "savings": "Generic seltzer runs ~$0.30 less per glass"
      },
      {
        "forIngredientId": "lime",
        "swap": "bottled lime juice (about 0.5 oz)",
        "savings": "Saves ~$0.25 vs a fresh lime"
      }
    ],
    "estimatedNutrition": {
      "calories": 75,
      "protein": 0,
      "carbs": 19,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍹",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "mocktail",
      "drink",
      "no-cook",
      "non-alcoholic",
      "spritzer",
      "refreshing",
      "summer"
    ]
  },
  {
    "id": "drink-virgin-pina-colada",
    "name": "Virgin Piña Colada",
    "description": "A creamy, tropical blend of pineapple and coconut whirled with ice into a frosty, alcohol-free version of the island classic. Sweet, tangy, and ridiculously refreshing.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "pineapple-juice",
        "quantity": 4,
        "note": "4 oz, chilled"
      },
      {
        "ingredientId": "coconut-cream",
        "quantity": 0.4,
        "note": "2 oz cream of coconut"
      },
      {
        "ingredientId": "frozen-pineapple",
        "quantity": 1,
        "note": "1 cup frozen chunks for body and chill"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.25,
        "optional": true,
        "note": "small squeeze to brighten"
      },
      {
        "ingredientId": "pineapple",
        "quantity": 1,
        "optional": true,
        "note": "1 wedge for garnish"
      }
    ],
    "steps": [
      "Add the pineapple juice and cream of coconut to a blender, then pour in a squeeze of lime if using.",
      "Drop in the frozen pineapple chunks and ice.",
      "Blend on high for 30-45 seconds until completely smooth and slushy, with no ice shards remaining.",
      "Pour into a chilled hurricane or tall glass and garnish with a pineapple wedge. Serve immediately with a straw."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole pineapple when on sale, cube it, and freeze your own chunks instead of paying for bagged frozen fruit.",
      "Cream of coconut goes a long way - one can makes several drinks, so it's cheaper per serving than it looks.",
      "Skip bottled juice and blend extra fresh pineapple with a splash of water for the juice instead."
    ],
    "substitutions": [
      {
        "forIngredientId": "coconut-cream",
        "swap": "coconut-milk reduced with a little sugar",
        "savings": "~$0.40/drink"
      },
      {
        "forIngredientId": "pineapple-juice",
        "swap": "blended fresh pineapple thinned with water",
        "savings": "~$0.30/drink"
      },
      {
        "forIngredientId": "frozen-pineapple",
        "swap": "fresh pineapple plus extra ice",
        "savings": "~$0.25/drink"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 2,
      "carbs": 52,
      "fat": 9,
      "fiber": 3
    },
    "emoji": "🍍",
    "accentColor": "bg-yellow-100",
    "cuisine": "Caribbean",
    "tags": [
      "mocktail",
      "drink",
      "no-cook",
      "blender",
      "tropical",
      "non-alcoholic",
      "pineapple",
      "coconut"
    ]
  },
  {
    "id": "drink-strawberry-banana-smoothie",
    "name": "Classic Strawberry Banana Smoothie",
    "description": "A thick, creamy blend of ripe strawberries and banana with Greek yogurt and a splash of milk. Naturally sweet, packed with protein, and ready in under five minutes.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "strawberries",
        "quantity": 1,
        "note": "about 1 cup, fresh or frozen"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "ripe; freeze for a thicker blend"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5,
        "note": "1/2 cup plain or vanilla"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.5,
        "note": "1/2 cup; add more to thin"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp, to taste"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 cup if using fresh fruit"
      }
    ],
    "steps": [
      "Add the milk to the blender first, then the Greek yogurt, banana, and strawberries so the blade catches the liquid.",
      "Drizzle in the honey and add ice if you are using fresh (not frozen) fruit.",
      "Blend on high for 45-60 seconds until completely smooth and creamy, stopping to scrape down the sides if needed.",
      "Check the consistency: add a splash more milk to thin it out or a few more frozen berries to thicken.",
      "Pour into a tall glass and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Use frozen strawberries and skip the ice; frozen fruit is cheaper, lasts longer, and makes the smoothie thicker.",
      "Buy bananas when they're spotty and on markdown, then peel and freeze them for smoothies.",
      "A big tub of plain Greek yogurt costs far less per serving than single-serve cups."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use oat-milk or almond-milk for a dairy-free version",
        "savings": "Roughly the same cost; oat-milk lasts longer unopened"
      },
      {
        "forIngredientId": "honey",
        "swap": "Use agave-syrup or just rely on a ripe banana for sweetness",
        "savings": "Skipping sweetener entirely saves ~$0.10 per smoothie"
      },
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Swap in plain-yogurt for a thinner, lighter blend",
        "savings": "Regular yogurt is usually ~30% cheaper than Greek"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 16,
      "carbs": 52,
      "fat": 4,
      "fiber": 6
    },
    "emoji": "🍓",
    "accentColor": "bg-rose-100",
    "cuisine": "American",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "breakfast",
      "high-protein",
      "fruit"
    ]
  },
  {
    "id": "drink-green-smoothie",
    "name": "Green Detox Smoothie",
    "description": "A bright, naturally sweet blend of fresh spinach, ripe banana, and frozen mango with creamy oat milk. The fruit completely tames the greens, so it tastes like a tropical fruit smoothie while sneaking in a full serving of leafy vegetables.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "spinach",
        "quantity": 1,
        "note": "about 2 packed cups fresh"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "ripe, ideally frozen in chunks"
      },
      {
        "ingredientId": "frozen-mango",
        "quantity": 0.75,
        "note": "about 3/4 cup chunks"
      },
      {
        "ingredientId": "oat-milk",
        "quantity": 1,
        "note": "1 cup, plus more to thin"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp, only if fruit isn't sweet enough"
      },
      {
        "ingredientId": "chia-seeds",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp for fiber and body"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 cup if using fresh (not frozen) fruit"
      }
    ],
    "steps": [
      "Add the oat milk to the blender first, then load in the spinach, banana, and frozen mango.",
      "Add the optional honey, chia seeds, and ice if your fruit isn't frozen.",
      "Blend on high for 45-60 seconds, until completely smooth with no flecks of spinach remaining.",
      "Check consistency and splash in a little more oat milk to thin if needed, then pulse once.",
      "Pour into a tall glass and serve immediately while cold and frothy."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 2,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy bananas when they're spotty and on markdown, then peel and freeze them — frozen banana also makes the smoothie thick and creamy without ice.",
      "Frozen mango is cheaper and more consistent than fresh, and it keeps for months so nothing goes to waste.",
      "Use a big handful of fresh spinach near the end of its life; the fruit hides any wilt and you avoid throwing it out."
    ],
    "substitutions": [
      {
        "forIngredientId": "oat-milk",
        "swap": "Use almond milk or plain water plus a splash of orange juice",
        "savings": "Water is basically free and cuts ~$0.40 per drink"
      },
      {
        "forIngredientId": "frozen-mango",
        "swap": "Swap in frozen pineapple or frozen mixed berries",
        "savings": "Often $1+ cheaper per bag on sale"
      },
      {
        "forIngredientId": "honey",
        "swap": "Use a pitted Medjool date or a splash of maple syrup",
        "savings": "Skip it entirely with ripe fruit and save the cost"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 5,
      "carbs": 62,
      "fat": 4,
      "fiber": 8
    },
    "emoji": "🥬",
    "accentColor": "bg-green-100",
    "cuisine": "American",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "vegan",
      "breakfast",
      "healthy",
      "green"
    ]
  },
  {
    "id": "drink-mango-smoothie",
    "name": "Mango Smoothie",
    "description": "A thick, creamy mango smoothie blended with Greek yogurt and milk — naturally sweet, tropical, and ready in under five minutes. No stovetop, no fuss, just frozen mango whirled into a frosty, protein-packed glass.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "frozen-mango",
        "quantity": 1.5,
        "note": "cups, frozen for a thick frosty texture"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5,
        "note": "cup plain, for creaminess and protein"
      },
      {
        "ingredientId": "milk",
        "quantity": 0.75,
        "note": "cup, to blend (use more to thin)"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "tbsp, to taste depending on mango sweetness"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "optional": true,
        "note": "cup, only if mango is not frozen"
      }
    ],
    "steps": [
      "Add the frozen mango, Greek yogurt, and milk to the blender, layering the liquid in first so the blades catch.",
      "Drizzle in the honey if using, and toss in the ice only if your mango isn't already frozen.",
      "Blend on high for 45-60 seconds, stopping to scrape down the sides, until completely smooth and creamy.",
      "Check the texture: add a splash more milk to loosen, or a few more frozen mango chunks to thicken.",
      "Pour into a tall glass and serve immediately while frosty."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy frozen mango in a big bag — it's cheaper than fresh, never goes bad, and gives the smoothie its thick frosty body for free.",
      "Skip the honey if your mango is ripe and sweet; you usually won't need it.",
      "Use whatever plain yogurt is on sale — a regular yogurt works fine, just blend a touch less milk."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use almond-milk or oat-milk for a dairy-free version",
        "savings": "About the same price; oat-milk often runs cheaper per glass"
      },
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Swap in half a frozen banana for creaminess",
        "savings": "Saves ~$0.60 per serving"
      },
      {
        "forIngredientId": "honey",
        "swap": "Use sugar or agave-syrup",
        "savings": "Saves ~$0.20 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 16,
      "carbs": 52,
      "fat": 4,
      "fiber": 4
    },
    "emoji": "🥭",
    "accentColor": "bg-amber-100",
    "cuisine": "Tropical",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "mango",
      "high-protein",
      "breakfast",
      "tropical"
    ]
  },
  {
    "id": "drink-berry-smoothie",
    "name": "Mixed Berry Smoothie",
    "description": "A thick, creamy smoothie blending frozen mixed berries with banana and Greek yogurt for a naturally sweet, protein-packed sip. Refreshing, antioxidant-rich, and ready in under five minutes with nothing but a blender.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "frozen-berries",
        "quantity": 1,
        "note": "about 1 cup mixed berries, frozen"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "ripe; freeze for an extra-thick texture"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.5,
        "note": "1/2 cup plain or vanilla"
      },
      {
        "ingredientId": "almond-milk",
        "quantity": 0.75,
        "note": "3/4 cup; add more to thin"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp, to taste"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "optional": true,
        "note": "1/2 cup if using fresh fruit"
      }
    ],
    "steps": [
      "Add the almond milk and Greek yogurt to the blender first so the blades catch the liquid easily.",
      "Add the banana and frozen mixed berries on top, then the honey if using.",
      "Blend on high for 45-60 seconds until completely smooth, stopping to scrape down the sides if needed.",
      "Check the texture: add a splash more almond milk to thin, or a handful of ice to thicken, and pulse to combine.",
      "Pour into a tall glass and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "high-protein"
    ],
    "cheapTips": [
      "Buy bagged frozen mixed berries instead of fresh; they're cheaper, last for months, and make the smoothie thick without ice.",
      "Freeze ripe bananas that are about to turn before they spoil; they add creaminess and natural sweetness for free.",
      "Skip the honey if your yogurt or berries are already sweet enough to save sugar and money."
    ],
    "substitutions": [
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Use plain whole milk or a frozen banana for creaminess",
        "savings": "~$0.50/serving"
      },
      {
        "forIngredientId": "almond-milk",
        "swap": "Regular milk, oat milk, or even water",
        "savings": "~$0.30/serving"
      },
      {
        "forIngredientId": "honey",
        "swap": "Maple syrup, agave, or a pitted date",
        "savings": "pennies"
      }
    ],
    "estimatedNutrition": {
      "calories": 280,
      "protein": 14,
      "carbs": 52,
      "fat": 4,
      "fiber": 8
    },
    "emoji": "🫐",
    "accentColor": "bg-violet-100",
    "cuisine": "American",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "berry",
      "high-protein",
      "breakfast",
      "healthy"
    ]
  },
  {
    "id": "drink-pb-banana-smoothie",
    "name": "Peanut Butter Banana Smoothie",
    "description": "A thick, creamy smoothie that tastes like a peanut butter banana sandwich in a glass. Ripe banana and real peanut butter blend with cold milk for a naturally sweet, protein-packed sip that works as breakfast or a post-workout treat.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "ripe, peeled; freeze ahead for a thicker, frostier blend"
      },
      {
        "ingredientId": "peanut-butter",
        "quantity": 2,
        "note": "tablespoons, creamy natural"
      },
      {
        "ingredientId": "milk",
        "quantity": 8,
        "note": "ounces, cold (about 1 cup)"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "teaspoon, only if banana isn't very ripe"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "note": "cup, skip if using a frozen banana"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "pinch, for warmth"
      }
    ],
    "steps": [
      "Add the milk to the blender first, then drop in the banana, peanut butter, optional honey, and a pinch of cinnamon.",
      "Top with the ice (or skip it if your banana is frozen) so the blades can catch everything.",
      "Blend on high for 30 to 45 seconds until completely smooth and creamy, with no banana chunks left.",
      "Check the consistency: splash in a little more milk to thin it, or add a few more ice cubes and blend again to thicken.",
      "Pour into a tall glass and drink right away while it's cold and frosty."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy spotty, overripe bananas from the discount produce rack and freeze them peeled in a bag, they're cheaper and make the smoothie naturally sweeter and thicker.",
      "Skip the honey entirely when your banana is fully ripe, it adds zero cost and zero need.",
      "Store-brand creamy peanut butter blends just as smoothly as name brands for a fraction of the price."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "almond-milk or oat-milk",
        "savings": "Use a plant milk to make it dairy-free; oat milk keeps it creamy for about the same price."
      },
      {
        "forIngredientId": "honey",
        "swap": "a couple of pitted medjool-dates blended in",
        "savings": "Dates add fiber and natural sweetness; or just omit and save the cost entirely."
      },
      {
        "forIngredientId": "peanut-butter",
        "swap": "tahini or sunflower-seed butter",
        "savings": "Makes it peanut-free; tahini is often cheaper by volume at ethnic grocers."
      }
    ],
    "estimatedNutrition": {
      "calories": 415,
      "protein": 18,
      "carbs": 48,
      "fat": 19,
      "fiber": 5
    },
    "emoji": "🥜",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "high-protein",
      "breakfast",
      "post-workout",
      "kid-friendly"
    ]
  },
  {
    "id": "drink-tropical-smoothie",
    "name": "Tropical Sunrise Smoothie",
    "description": "A bright, creamy blend of mango, pineapple, and banana with a splash of orange juice and Greek yogurt for body. Tastes like a beach vacation in a glass — naturally sweet, no added sugar needed.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "mango",
        "quantity": 0.75,
        "note": "fresh or frozen chunks, about 3/4 cup"
      },
      {
        "ingredientId": "pineapple",
        "quantity": 0.5,
        "note": "fresh or frozen chunks, about 1/2 cup"
      },
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "ripe, peeled; freeze ahead for a thicker smoothie"
      },
      {
        "ingredientId": "orange-juice",
        "quantity": 4,
        "note": "about 1/2 cup as the liquid base"
      },
      {
        "ingredientId": "greek-yogurt",
        "quantity": 0.33,
        "note": "about 1/3 cup plain, for creaminess and protein"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "optional": true,
        "note": "skip if using frozen fruit"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "only if your fruit isn't very ripe"
      }
    ],
    "steps": [
      "Add the orange juice and Greek yogurt to the blender first so the blades catch them easily.",
      "Add the mango, pineapple, banana, and ice (skip the ice if your fruit is frozen).",
      "Blend on high for 45-60 seconds until completely smooth, stopping to scrape down the sides if needed.",
      "Taste and blend in the honey only if it needs more sweetness; add a splash more orange juice to thin it out.",
      "Pour into a tall glass and serve immediately while cold and frothy."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Use frozen mango and pineapple — they're cheaper than fresh, last for weeks, and chill the smoothie without watering it down.",
      "Buy bananas when they're spotty and on sale, then peel and freeze them for smoothies anytime.",
      "A splash of water or oat milk stretches the recipe if you're short on orange juice."
    ],
    "substitutions": [
      {
        "forIngredientId": "greek-yogurt",
        "swap": "Use almond milk or oat milk for a dairy-free, vegan version",
        "savings": "Saves about $0.40 per serving"
      },
      {
        "forIngredientId": "orange-juice",
        "swap": "Swap in coconut water or plain water for a lighter, lower-sugar base",
        "savings": "Saves about $0.30 per serving"
      },
      {
        "forIngredientId": "mango",
        "swap": "Use frozen-mango instead of fresh for the same flavor at lower cost",
        "savings": "Saves about $0.50 per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 285,
      "protein": 8,
      "carbs": 62,
      "fat": 2,
      "fiber": 6
    },
    "emoji": "🥭",
    "accentColor": "bg-orange-100",
    "cuisine": "Tropical",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "tropical",
      "fruit",
      "breakfast",
      "vegetarian"
    ]
  },
  {
    "id": "drink-protein-smoothie",
    "name": "Banana Protein Smoothie",
    "description": "A thick, creamy banana smoothie blended with vanilla protein powder and milk. Naturally sweet, packed with protein, and ready in about three minutes — the classic post-workout or grab-and-go breakfast drink.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 1,
        "note": "ripe; freeze ahead for a thicker, frostier blend"
      },
      {
        "ingredientId": "protein-powder",
        "quantity": 1,
        "note": "1 scoop, vanilla or unflavored"
      },
      {
        "ingredientId": "milk",
        "quantity": 1,
        "note": "about 1 cup"
      },
      {
        "ingredientId": "peanut-butter",
        "quantity": 1,
        "optional": true,
        "note": "1 tbsp for richness and extra protein"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp, only if you want it sweeter"
      },
      {
        "ingredientId": "ice",
        "quantity": 0.5,
        "note": "1/2 cup, for a colder, thicker texture"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "optional": true,
        "note": "a pinch, for warmth"
      }
    ],
    "steps": [
      "Peel the banana and break it into a few chunks, then add it to the blender.",
      "Add the protein powder, milk, peanut butter and honey (if using), and the ice.",
      "Blend on high for 30-45 seconds, until completely smooth and frothy with no banana lumps.",
      "Check the consistency: add a splash more milk to thin it out, or a few more ice cubes to thicken.",
      "Pour into a tall glass, dust with a pinch of cinnamon, and drink right away."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "high-protein",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy bananas when they are spotty and on clearance, then peel and freeze them — frozen banana means you can skip the ice and get a thicker smoothie.",
      "A tub of protein powder costs far less per serving than bottled protein shakes; one scoop here does the job.",
      "Skip the honey entirely — a fully ripe banana is sweet enough on its own."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "almond-milk or oat-milk",
        "savings": "Use a plant milk to make it dairy-free; store-brand cartons are often cheaper than dairy."
      },
      {
        "forIngredientId": "protein-powder",
        "swap": "greek-yogurt",
        "savings": "Half a cup of Greek yogurt adds protein and creaminess for less than premium protein powder."
      },
      {
        "forIngredientId": "peanut-butter",
        "swap": "frozen-berries",
        "savings": "Swap in a handful of frozen berries for a fruitier, lower-cost blend."
      }
    ],
    "estimatedNutrition": {
      "calories": 410,
      "protein": 34,
      "carbs": 48,
      "fat": 11,
      "fiber": 5
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "smoothie",
      "drink",
      "no-cook",
      "blender",
      "high-protein",
      "breakfast",
      "post-workout",
      "banana"
    ]
  },
  {
    "id": "drink-iced-latte",
    "name": "Iced Latte",
    "description": "A cafe classic: two shots of bold espresso poured over cold milk and ice. Smooth, creamy, and ready in under three minutes with zero cooking.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "espresso",
        "quantity": 2,
        "note": "2 shots, freshly pulled and cooled slightly"
      },
      {
        "ingredientId": "milk",
        "quantity": 6,
        "note": "about 3/4 cup cold whole milk"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup cubed ice"
      },
      {
        "ingredientId": "simple-syrup",
        "quantity": 0.5,
        "optional": true,
        "note": "to taste, for a sweeter latte"
      }
    ],
    "steps": [
      "Pull 2 shots of espresso (about 2 oz) and let cool for a minute so it doesn't melt the ice instantly.",
      "Fill a tall 12-16 oz glass with 1 cup of ice.",
      "Pour 6 oz of cold milk over the ice, then add the optional simple syrup if you like it sweet.",
      "Slowly pour the espresso over the back of a spoon so it layers over the milk.",
      "Stir gently to combine and serve immediately with a straw."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Brew strong coffee or use instant espresso powder instead of an espresso machine to cut cost dramatically.",
      "Buy milk by the gallon and freeze coffee into ice cubes so your latte never gets watered down.",
      "Make your own simple syrup at home by dissolving equal parts sugar and hot water."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use oat-milk or almond-milk for a dairy-free, plant-based latte",
        "savings": "Comparable cost, makes it vegan"
      },
      {
        "forIngredientId": "espresso",
        "swap": "Use cold-brew or strong drip coffee if you don't have an espresso machine",
        "savings": "Saves on espresso equipment"
      },
      {
        "forIngredientId": "simple-syrup",
        "swap": "Sweeten with sugar, honey, or agave-syrup instead",
        "savings": "Uses what you already have on hand"
      }
    ],
    "estimatedNutrition": {
      "calories": 130,
      "protein": 7,
      "carbs": 14,
      "fat": 6,
      "fiber": 0
    },
    "emoji": "🧋",
    "accentColor": "bg-amber-100",
    "cuisine": "Italian",
    "tags": [
      "coffee",
      "drink",
      "no-cook",
      "iced",
      "espresso",
      "cafe"
    ]
  },
  {
    "id": "drink-dalgona-coffee",
    "name": "Dalgona Whipped Coffee",
    "description": "The viral Korean whipped coffee: equal parts instant coffee, sugar, and hot water whisked into a thick, glossy caramel-colored foam, then spooned over a tall glass of iced milk. Stir before sipping for a creamy, bittersweet pick-me-up.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "instant-coffee",
        "quantity": 2,
        "note": "2 tbsp; must be instant for the whip to work"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp granulated"
      },
      {
        "ingredientId": "water",
        "quantity": 2,
        "note": "2 tbsp hot, near-boiling"
      },
      {
        "ingredientId": "milk",
        "quantity": 8,
        "note": "8 oz, cold"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, to fill the glass"
      }
    ],
    "steps": [
      "In a bowl, combine 2 tbsp instant coffee, 2 tbsp sugar, and 2 tbsp hot water.",
      "Whisk vigorously (or use a hand mixer) for 2-4 minutes until the mixture turns pale, thick, and holds glossy peaks.",
      "Fill a tall glass with 1 cup ice and pour in 8 oz cold milk.",
      "Spoon the whipped coffee on top of the milk in a fluffy mound.",
      "Serve immediately and stir together before drinking."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "A jar of store-brand instant coffee makes dozens of servings for the price of one cafe latte.",
      "Whisk by hand with a regular fork or balloon whisk if you don't own a mixer, it just takes a few extra minutes.",
      "Use any milk you already have, the foam sits on top regardless of dairy or non-dairy."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use oat milk or almond milk for a dairy-free version",
        "savings": "Comparable price; uses what's on hand"
      },
      {
        "forIngredientId": "sugar",
        "swap": "Swap in brown sugar for a deeper caramel note",
        "savings": "Same cost, pantry staple"
      },
      {
        "forIngredientId": "instant-coffee",
        "swap": "Instant espresso powder for a stronger, bolder whip",
        "savings": "Slightly pricier but more intense per spoon"
      }
    ],
    "estimatedNutrition": {
      "calories": 230,
      "protein": 8,
      "carbs": 38,
      "fat": 5,
      "fiber": 0
    },
    "emoji": "☕",
    "accentColor": "bg-amber-100",
    "cuisine": "Korean",
    "tags": [
      "coffee",
      "drink",
      "no-cook",
      "iced",
      "whipped-coffee",
      "viral"
    ]
  },
  {
    "id": "drink-iced-mocha",
    "name": "Iced Mocha",
    "description": "A cafe-style iced mocha: rich espresso and cocoa stirred into a quick chocolate syrup, then poured over ice with cold milk for a creamy, lightly sweet pick-me-up.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "espresso",
        "quantity": 2,
        "note": "2 shots, freshly pulled and hot"
      },
      {
        "ingredientId": "cocoa-powder",
        "quantity": 2,
        "note": "unsweetened, 2 tsp"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tsp, to taste"
      },
      {
        "ingredientId": "milk",
        "quantity": 6,
        "note": "cold, 6 oz"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.25,
        "optional": true,
        "note": "1/4 tsp"
      }
    ],
    "steps": [
      "In a small cup, stir the hot espresso with the cocoa powder and sugar until it forms a smooth, lump-free chocolate syrup.",
      "Add the vanilla extract if using and stir to combine.",
      "Fill a tall glass with the ice.",
      "Pour the chocolate-espresso mixture over the ice, then top with the cold milk.",
      "Stir well and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Use instant espresso powder dissolved in a splash of hot water instead of pulled shots to save on cafe runs.",
      "Unsweetened cocoa powder is far cheaper per drink than bottled chocolate syrup and lasts for dozens of mochas.",
      "Make a big batch of the cocoa-sugar syrup ahead and keep it in the fridge for grab-and-go mochas."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "oat-milk or almond-milk for a dairy-free version",
        "savings": "Comparable cost; oat milk adds natural creaminess"
      },
      {
        "forIngredientId": "sugar",
        "swap": "agave-syrup or honey",
        "savings": "Slightly pricier but dissolves instantly in cold drinks"
      },
      {
        "forIngredientId": "espresso",
        "swap": "1 cup strong cold-brew or coffee",
        "savings": "No espresso machine needed; cheaper per serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 160,
      "protein": 7,
      "carbs": 24,
      "fat": 5,
      "fiber": 2
    },
    "emoji": "🧋",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "coffee",
      "drink",
      "no-cook",
      "iced",
      "chocolate",
      "cafe"
    ]
  },
  {
    "id": "drink-cold-brew",
    "name": "Vanilla Cold Brew",
    "description": "Smooth, low-acid cold brew coffee sweetened with vanilla and softened with a splash of milk. Poured over ice for a refreshing, café-style pick-me-up you can build in under two minutes.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "cold-brew",
        "quantity": 1,
        "note": "chilled, undiluted cold brew concentrate or ready-to-drink"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "cubes, fills the glass"
      },
      {
        "ingredientId": "milk",
        "quantity": 2,
        "note": "splash; whole or 2% for creaminess"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5,
        "note": "pure vanilla"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "optional": true,
        "note": "or simple syrup; dissolves better than granulated"
      }
    ],
    "steps": [
      "Fill a tall glass to the top with ice.",
      "Stir the vanilla extract and sugar into the cold brew until the sugar fully dissolves (warm the coffee slightly or use simple syrup if it resists).",
      "Pour the sweetened vanilla cold brew over the ice.",
      "Top with a splash of milk and give it a gentle stir to swirl the colors together before drinking."
    ],
    "totalTimeMinutes": 3,
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Make a big batch of cold brew at home by steeping coarse ground coffee in cold water overnight, then strain — it's a fraction of café prices.",
      "Skip bottled vanilla syrup; a few drops of vanilla extract plus a little sugar does the same job for pennies.",
      "Buy milk in larger sizes and use just a splash per drink to stretch it across many servings."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "oat milk or almond milk for a dairy-free, café-style finish",
        "savings": "Comparable cost; lets you skip buying dairy if you don't keep it"
      },
      {
        "forIngredientId": "sugar",
        "swap": "simple syrup or a drizzle of honey/maple syrup",
        "savings": "Uses pantry staples you likely already have, no extra spend"
      },
      {
        "forIngredientId": "cold-brew",
        "swap": "strong chilled brewed coffee or instant coffee mixed with cold water",
        "savings": "Saves buying ready-to-drink cold brew, often half the price"
      }
    ],
    "estimatedNutrition": {
      "calories": 60,
      "protein": 2,
      "carbs": 12,
      "fat": 1,
      "fiber": 0
    },
    "emoji": "🧊",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "coffee",
      "drink",
      "no-cook",
      "cold-brew",
      "iced",
      "vanilla",
      "caffeine"
    ]
  },
  {
    "id": "drink-iced-matcha-latte",
    "name": "Iced Matcha Latte",
    "description": "A café-style iced matcha latte: ceremonial-grade green tea whisked smooth and poured over ice-cold milk for a creamy, earthy, lightly sweet pick-me-up. No espresso machine or stovetop needed.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "matcha",
        "quantity": 2,
        "note": "ceremonial or culinary grade, sifted to remove clumps"
      },
      {
        "ingredientId": "milk",
        "quantity": 8,
        "note": "cold; whole or 2% for creamiest result"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "or to taste; whisk into the matcha while warm-ish"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "fills the glass"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.25,
        "optional": true,
        "note": "optional flavor lift"
      }
    ],
    "steps": [
      "Sift 2 tsp matcha into a small bowl or measuring cup to break up clumps. Add about 2 oz hot (not boiling, ~175F) or room-temp water along with the honey.",
      "Whisk vigorously in a zig-zag W motion with a bamboo whisk or small electric frother for 20-30 seconds until smooth and frothy with no lumps.",
      "Fill a tall glass with ice and pour in 8 oz cold milk. Add the vanilla extract if using.",
      "Slowly pour the whisked matcha over the milk so it layers into the glass.",
      "Stir well before drinking to combine, and enjoy cold."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Buy a tin of culinary-grade matcha instead of single-serve sachets - it costs a fraction per drink and lasts for dozens of lattes.",
      "A cheap handheld milk frother whisks matcha just as smooth as a bamboo chasen for a few dollars.",
      "Sweeten with plain sugar or simple syrup instead of honey to shave a little off each cup."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use oat milk or almond milk for a dairy-free, vegan version",
        "savings": "About the same cost; oat milk froths well"
      },
      {
        "forIngredientId": "honey",
        "swap": "Swap in simple syrup or agave syrup",
        "savings": "Cheaper per drink and dissolves instantly cold"
      },
      {
        "forIngredientId": "vanilla-extract",
        "swap": "Leave it out entirely",
        "savings": "Saves a little; the matcha shines on its own"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 8,
      "carbs": 22,
      "fat": 8,
      "fiber": 1
    },
    "emoji": "🍵",
    "accentColor": "bg-green-100",
    "cuisine": "Japanese",
    "tags": [
      "tea",
      "matcha",
      "drink",
      "no-cook",
      "iced",
      "latte",
      "green-tea",
      "caffeine"
    ]
  },
  {
    "id": "drink-chai-latte",
    "name": "Chai Latte",
    "description": "A cozy, aromatic tea latte: spiced black chai steeped strong, then poured into hot frothed milk and sweetened with honey. Warm cinnamon and a whisper of vanilla make it taste just like the cafe version.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "chai-tea",
        "quantity": 2,
        "note": "spiced black chai tea bags for a strong, concentrated steep"
      },
      {
        "ingredientId": "milk",
        "quantity": 6,
        "note": "in oz; whole milk froths and tastes best"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "to taste, about 2 tsp"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 1,
        "note": "a pinch, plus more to dust on top"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "optional": true,
        "note": "a few drops for warmth"
      }
    ],
    "steps": [
      "Bring about 4 oz of water to a boil and steep the 2 chai tea bags for 4-5 minutes to make a strong, concentrated tea, then remove the bags and stir in the honey, cinnamon, and vanilla.",
      "Heat the milk in a heatproof mug in the microwave for about 60-90 seconds until steaming but not boiling.",
      "Froth the hot milk: whisk vigorously by hand, use a milk frother, or seal it in a jar and shake until foamy and doubled.",
      "Pour the spiced chai concentrate into a serving mug, then top with the frothed milk, holding back the foam with a spoon and spooning it on last.",
      "Dust the foam with a little extra cinnamon and serve hot."
    ],
    "totalTimeMinutes": 8,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Use loose chai or plain black tea bags with a pinch of your own cinnamon, ginger, and cardamom instead of pricier specialty chai.",
      "Shake hot milk in a sealed jar to froth it for free instead of buying a frother.",
      "Steep two bags in less water to make a strong concentrate so one box of tea stretches further."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "oat-milk or almond-milk for a dairy-free, naturally sweet latte",
        "savings": "Plant milks froth well and a carton lasts weeks; skip the dairy run"
      },
      {
        "forIngredientId": "honey",
        "swap": "sugar or maple syrup, about 2 tsp",
        "savings": "Plain sugar is the cheapest sweetener per cup"
      },
      {
        "forIngredientId": "chai-tea",
        "swap": "black-tea bags plus a pinch of cinnamon, ginger, and cardamom",
        "savings": "Plain black tea is far cheaper than boxed chai blends"
      }
    ],
    "estimatedNutrition": {
      "calories": 150,
      "protein": 6,
      "carbs": 22,
      "fat": 5,
      "fiber": 0
    },
    "emoji": "🍵",
    "accentColor": "bg-amber-100",
    "cuisine": "Indian",
    "tags": [
      "tea",
      "drink",
      "no-cook",
      "chai",
      "latte",
      "hot",
      "spiced",
      "vegetarian"
    ]
  },
  {
    "id": "drink-arnold-palmer",
    "name": "Arnold Palmer",
    "description": "The classic golf-clubhouse refresher: equal parts cold black iced tea and fresh lemonade over ice. Bright, lightly sweet, and endlessly chuggable on a hot afternoon.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "black-tea",
        "quantity": 1,
        "note": "1 bag steeped strong and chilled (about 6 oz brewed)"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced, about 1 oz fresh juice"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "tsp, to taste; dissolve into the lemonade"
      },
      {
        "ingredientId": "water",
        "quantity": 5,
        "note": "oz cold water to make the lemonade"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "cup, to fill the glass"
      }
    ],
    "steps": [
      "Steep the black tea bag in 6 oz of hot water for 4-5 minutes, then remove the bag and chill the tea completely (or use pre-made unsweetened iced tea).",
      "Make the lemonade: stir the fresh lemon juice and sugar into 5 oz cold water until the sugar fully dissolves.",
      "Fill a tall glass to the top with ice.",
      "Pour in the chilled tea and the lemonade in equal measure (about half and half), then stir gently to combine.",
      "Taste and adjust with a touch more sugar or lemon if desired, and garnish with a lemon wheel."
    ],
    "totalTimeMinutes": 10,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 5,
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
      "Brew a big pitcher of tea from a few cheap bags and squeeze a bag of lemons at once for a whole batch.",
      "Skip bottled lemonade and bottled iced tea, you make both for pennies with a tea bag, a lemon, and sugar.",
      "Steep the tea on the counter in the sun ('sun tea') to save energy and avoid boiling water."
    ],
    "substitutions": [
      {
        "forIngredientId": "sugar",
        "swap": "honey or agave-syrup",
        "savings": "Use what you already have; a drizzle of honey dissolves nicely in the lemonade"
      },
      {
        "forIngredientId": "black-tea",
        "swap": "green-tea or chai-tea",
        "savings": "Any tea bag in the pantry works and costs the same"
      },
      {
        "forIngredientId": "lemon",
        "swap": "bottled lemon-juice-bottled",
        "savings": "Cheaper per serving than fresh and lasts for many drinks"
      }
    ],
    "estimatedNutrition": {
      "calories": 70,
      "protein": 0,
      "carbs": 18,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "tea",
      "drink",
      "no-cook",
      "iced-tea",
      "lemonade",
      "non-alcoholic",
      "refreshing",
      "summer"
    ]
  },
  {
    "id": "drink-london-fog",
    "name": "London Fog",
    "description": "A cozy Earl Grey tea latte: strong black tea steeped with vanilla, then topped with frothy steamed milk and a touch of honey. Warm, fragrant, and comforting.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "black-tea",
        "quantity": 2,
        "note": "Earl Grey if you have it, for the bergamot aroma"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 0.5
      },
      {
        "ingredientId": "milk",
        "quantity": 6,
        "note": "steamed or warmed and frothed"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "or sub vanilla syrup"
      }
    ],
    "steps": [
      "Boil about 4 oz water and steep the black tea bags for 4-5 minutes to get a strong, concentrated brew.",
      "Stir the honey and vanilla extract into the hot tea until fully dissolved, then remove the tea bags.",
      "Warm the milk until steaming, then froth it (whisk, frother, or shake hot in a sealed jar) until foamy.",
      "Pour the frothy milk over the sweetened tea and spoon the foam on top. Serve hot."
    ],
    "totalTimeMinutes": 8,
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 6,
    "difficulty": "easy",
    "equipment": [
      "no-kitchen"
    ],
    "primaryCookingMethod": "no-cook",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Use store-brand black tea bags and a drop of vanilla extract instead of pricey vanilla syrup.",
      "Froth milk by shaking it hot in a sealed jar, no espresso machine or frother needed.",
      "Buy tea in bulk boxes; the per-cup cost drops dramatically versus single sachets."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "oat-milk for a creamy dairy-free version that froths well",
        "savings": "comparable cost, makes it vegan"
      },
      {
        "forIngredientId": "honey",
        "swap": "agave-syrup or simple sugar",
        "savings": "saves ~$0.20 and keeps it vegan"
      },
      {
        "forIngredientId": "black-tea",
        "swap": "plain black tea plus a pinch of dried orange zest mimics Earl Grey",
        "savings": "uses pantry staples, ~$0.30 cheaper than Earl Grey sachets"
      }
    ],
    "estimatedNutrition": {
      "calories": 150,
      "protein": 6,
      "carbs": 20,
      "fat": 6,
      "fiber": 0
    },
    "emoji": "☕",
    "accentColor": "bg-violet-100",
    "cuisine": "British",
    "tags": [
      "tea",
      "drink",
      "no-cook",
      "latte",
      "hot-drink",
      "vanilla",
      "earl-grey"
    ]
  },
  {
    "id": "drink-lemonade",
    "name": "Fresh Lemonade",
    "description": "Classic fresh-squeezed lemonade — bright, tart, and just sweet enough. Real lemon juice, a quick sugar dissolve, and cold water over ice. The only summer drink that actually tastes like summer.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "lemon",
        "quantity": 2,
        "note": "for about 3 oz fresh juice"
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp, adjust to taste"
      },
      {
        "ingredientId": "water",
        "quantity": 8,
        "note": "cold, still or sparkling"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, to fill the glass"
      },
      {
        "ingredientId": "mint",
        "quantity": 1,
        "optional": true,
        "note": "sprig, for garnish"
      }
    ],
    "steps": [
      "Roll the lemons firmly on the counter, then halve and squeeze to get about 3 oz (1/3 cup) fresh juice. Strain out the seeds.",
      "In your serving glass, stir the sugar into the lemon juice until fully dissolved — this makes an instant syrup with no cooking needed.",
      "Pour in the cold water and stir well to combine. Taste and add a splash more sugar or water to balance tart and sweet.",
      "Fill the glass with ice, give it one last stir, and garnish with a mint sprig or a thin lemon wheel."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
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
      "Buy a bag of lemons instead of singles — they keep for weeks in the fridge and the per-lemon cost drops sharply.",
      "Roll lemons hard before juicing (or microwave 10 seconds) to get 30-50% more juice from each one.",
      "Make a big batch of sugar-lemon base and store it in the fridge; just add cold water per glass to save time and money."
    ],
    "substitutions": [
      {
        "forIngredientId": "sugar",
        "swap": "Use agave-syrup or honey for a smoother, more natural sweetness (about 1 tbsp).",
        "savings": "Roughly the same cost, no real savings — choose for flavor"
      },
      {
        "forIngredientId": "lemon",
        "swap": "Use bottled lemon juice (3 oz) when fresh lemons are pricey or out of season.",
        "savings": "Saves about $0.50-1.00 per glass"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 0,
      "carbs": 29,
      "fat": 0,
      "fiber": 0
    },
    "emoji": "🍋",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "juice",
      "drink",
      "no-cook",
      "lemonade",
      "refreshing",
      "summer",
      "kid-friendly",
      "vegan"
    ]
  },
  {
    "id": "drink-watermelon-cooler",
    "name": "Watermelon Cooler",
    "description": "Fresh watermelon blended smooth with a squeeze of lime and a hint of honey, then poured over ice for a bright, ultra-refreshing summer juice. Naturally sweet, hydrating, and ready in under five minutes.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "watermelon",
        "quantity": 2,
        "note": "about 2 cups seedless cubes, chilled"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.5,
        "note": "freshly squeezed, about 0.5 oz juice"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "optional": true,
        "note": "1 tsp, only if the melon isn't very sweet"
      },
      {
        "ingredientId": "mint",
        "quantity": 2,
        "optional": true,
        "note": "a few leaves for garnish"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "1 cup, for serving"
      }
    ],
    "steps": [
      "Add the cubed watermelon, lime juice, and honey (if using) to a blender.",
      "Blend on high for 20-30 seconds until completely smooth and frothy.",
      "For a silky cooler, strain through a fine-mesh sieve to remove pulp; skip for a thicker juice.",
      "Fill a tall glass with ice and pour the watermelon juice over the top.",
      "Garnish with fresh mint and a lime wheel, then serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Buy a whole watermelon in season and cube it yourself; it's far cheaper per cup than pre-cut containers.",
      "Freeze leftover watermelon cubes and blend them in place of ice for a slushier cooler with zero waste.",
      "Skip the honey entirely when the melon is ripe and sweet to save a step and a cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "agave-syrup or a pinch of sugar",
        "savings": "Agave is vegan and often cheaper per use than raw honey"
      },
      {
        "forIngredientId": "lime",
        "swap": "bottled lime juice (lime-juice-bottled)",
        "savings": "Saves about $0.30 vs a fresh lime and keeps longer"
      },
      {
        "forIngredientId": "watermelon",
        "swap": "frozen-berries blended with a splash of water",
        "savings": "Frozen fruit is cheaper off-season and won't spoil"
      }
    ],
    "estimatedNutrition": {
      "calories": 110,
      "protein": 2,
      "carbs": 28,
      "fat": 0,
      "fiber": 1
    },
    "emoji": "🍉",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "juice",
      "drink",
      "no-cook",
      "blender",
      "refreshing",
      "summer",
      "hydrating"
    ]
  },
  {
    "id": "drink-orange-ginger-juice",
    "name": "Orange Ginger Refresher",
    "description": "A bright, fizzy non-alcoholic cooler: fresh orange juice muddled with grated ginger, sweetened lightly with honey, and topped with cold club soda over ice. Zingy, citrusy, and refreshing.",
    "mealType": "drink",
    "servings": 1,
    "ingredients": [
      {
        "ingredientId": "orange-juice",
        "quantity": 5,
        "note": "fresh-squeezed, chilled (oz)"
      },
      {
        "ingredientId": "ginger",
        "quantity": 0.5,
        "note": "freshly grated, about a 1-inch knob"
      },
      {
        "ingredientId": "honey",
        "quantity": 1,
        "note": "or to taste (tsp)"
      },
      {
        "ingredientId": "club-soda",
        "quantity": 3,
        "note": "cold, to top (oz)"
      },
      {
        "ingredientId": "lime",
        "quantity": 0.25,
        "optional": true,
        "note": "squeeze of juice plus a wedge to garnish"
      },
      {
        "ingredientId": "ice",
        "quantity": 1,
        "note": "to fill the glass (cup)"
      },
      {
        "ingredientId": "mint",
        "quantity": 1,
        "optional": true,
        "note": "sprig, to garnish"
      }
    ],
    "steps": [
      "In a glass or shaker, stir the grated ginger and honey into the fresh orange juice until the honey fully dissolves.",
      "Add a squeeze of lime juice and stir again; let it sit 1 minute so the ginger infuses.",
      "Fill a tall glass with ice and strain the orange-ginger mixture over it to catch the ginger pulp.",
      "Top with cold club soda and stir gently once to combine without losing the fizz.",
      "Garnish with a mint sprig and a lime wedge, and serve immediately."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
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
      "Use a fresh orange you already have instead of bottled juice — one large orange yields about this much.",
      "Buy a knob of ginger once, grate what you need, and freeze the rest; it grates easily straight from frozen.",
      "Plain club soda is far cheaper than buying a flavored sparkling drink and keeps the sugar low."
    ],
    "substitutions": [
      {
        "forIngredientId": "honey",
        "swap": "agave-syrup or simple-syrup (keeps it fully vegan)",
        "savings": "Negligible cost, and agave/simple syrup is often cheaper per serving than honey"
      },
      {
        "forIngredientId": "club-soda",
        "swap": "ginger-ale for an extra-gingery, sweeter sparkle (reduce or skip the honey)",
        "savings": "About the same; lets you skip buying a separate sweetener"
      },
      {
        "forIngredientId": "ginger",
        "swap": "1/4 tsp ginger-powder if you don't have fresh",
        "savings": "Cheaper per serving since dried ginger lasts months in the pantry"
      }
    ],
    "estimatedNutrition": {
      "calories": 95,
      "protein": 1,
      "carbs": 24,
      "fat": 0,
      "fiber": 1
    },
    "emoji": "🍊",
    "accentColor": "bg-orange-100",
    "cuisine": "American",
    "tags": [
      "juice",
      "mocktail",
      "drink",
      "no-cook",
      "refreshing",
      "citrus",
      "ginger",
      "non-alcoholic"
    ]
  },
  {
    "id": "blender-hummus",
    "name": "Blender Hummus",
    "description": "Ultra-smooth, lemony chickpea hummus that comes together in the blender in under five minutes. Tahini, garlic, and a splash of cold water whip it into a creamy dip for pita, veggies, or sandwiches.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "chickpeas",
        "quantity": 1,
        "note": "one 15 oz can, drained and rinsed (reserve a little liquid)"
      },
      {
        "ingredientId": "tahini",
        "quantity": 0.25,
        "note": "1/4 cup, well stirred"
      },
      {
        "ingredientId": "lemon",
        "quantity": 1,
        "note": "juiced, about 3 tbsp"
      },
      {
        "ingredientId": "garlic",
        "quantity": 1,
        "note": "1 small clove"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2,
        "note": "tbsp, plus more to drizzle"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5,
        "note": "1/2 tsp ground"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "1/2 tsp, to taste"
      },
      {
        "ingredientId": "water",
        "quantity": 3,
        "note": "tbsp ice water, added gradually"
      },
      {
        "ingredientId": "paprika",
        "quantity": 1,
        "optional": true,
        "note": "pinch, for garnish"
      }
    ],
    "steps": [
      "Drain and rinse the chickpeas. For the smoothest texture, pinch off and discard any loose skins (optional but worth it).",
      "Add tahini, lemon juice, garlic, cumin, and salt to the blender. Blend 20-30 seconds until pasty and lightened.",
      "Add the chickpeas and olive oil. Blend, scraping down the sides as needed, until thick and grainy.",
      "With the blender running, stream in ice water 1 tablespoon at a time until silky and smooth, about 1-2 minutes total. Taste and adjust salt and lemon.",
      "Scrape into a bowl, swirl with a spoon, drizzle with olive oil, and dust with paprika before serving."
    ],
    "totalTimeMinutes": 5,
    "prepTimeMinutes": 5,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Dried chickpeas cooked from scratch cost a fraction of canned and make even creamier hummus.",
      "Buy tahini in a large jar - it lasts months and the per-batch cost drops sharply.",
      "Save the chickpea liquid (aquafaba) instead of water for an extra-fluffy, richer texture at no cost."
    ],
    "substitutions": [
      {
        "forIngredientId": "tahini",
        "swap": "Use peanut butter or sunflower seed butter for a nuttier, cheaper spin",
        "savings": "Saves about $0.40 per batch"
      },
      {
        "forIngredientId": "lemon",
        "swap": "Bottled lemon juice (2-3 tbsp) works in a pinch",
        "savings": "Saves about $0.30 per batch"
      },
      {
        "forIngredientId": "olive-oil",
        "swap": "Any neutral vegetable oil blends in just as smoothly",
        "savings": "Saves about $0.20 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 190,
      "protein": 6,
      "carbs": 16,
      "fat": 12,
      "fiber": 5
    },
    "emoji": "🧆",
    "accentColor": "bg-amber-100",
    "cuisine": "Middle Eastern",
    "tags": [
      "blender",
      "no-cook",
      "dip",
      "snack",
      "vegan",
      "gluten-free",
      "chickpea",
      "mediterranean"
    ]
  },
  {
    "id": "blender-salsa",
    "name": "Blender Salsa",
    "description": "Restaurant-style blended tomato salsa that comes together in two minutes — bright, garlicky, and just spicy enough. Tastes like the bottomless bowl at your favorite taqueria, but fresher and way cheaper.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "tomato",
        "quantity": 4,
        "note": "ripe Roma or vine tomatoes, quartered"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.5,
        "note": "white or yellow, roughly chopped"
      },
      {
        "ingredientId": "jalapeno",
        "quantity": 1,
        "note": "seeded for mild, keep seeds for hot"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves"
      },
      {
        "ingredientId": "cilantro-fresh",
        "quantity": 0.5,
        "note": "loosely packed cup, stems okay"
      },
      {
        "ingredientId": "lime",
        "quantity": 1,
        "note": "juiced"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "tsp, to taste"
      },
      {
        "ingredientId": "cumin",
        "quantity": 0.5,
        "optional": true,
        "note": "tsp, for warmth"
      }
    ],
    "steps": [
      "Add the chopped onion, jalapeno, garlic, cilantro, lime juice, salt, and cumin to the blender first, then pile the quartered tomatoes on top.",
      "Pulse 4-5 times to break everything down, scraping the sides as needed, until you reach a chunky restaurant-style texture (or blend longer for smooth).",
      "Taste and adjust: add more salt, a squeeze more lime for brightness, or extra jalapeno for heat.",
      "Pour into a bowl and chill at least 15 minutes so the flavors meld, then serve with chips."
    ],
    "totalTimeMinutes": 7,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Use a can of crushed or whole tomatoes when fresh ones are pricey or out of season — it blends smoother and tastes great year-round.",
      "Buy a whole bunch of cilantro and freeze the leftover stems; they blend in with no waste.",
      "Make a double batch — it keeps 5 days in the fridge and the flavor only gets better."
    ],
    "substitutions": [
      {
        "forIngredientId": "tomato",
        "swap": "1 can (14 oz) crushed tomatoes or fire-roasted tomatoes",
        "savings": "Saves about $1.50 off-season and adds a roasted depth"
      },
      {
        "forIngredientId": "jalapeno",
        "swap": "a few dashes of hot sauce or a pinch of chili powder",
        "savings": "Uses pantry staples you already have"
      },
      {
        "forIngredientId": "lime",
        "swap": "1 tbsp bottled lime juice or a splash of vinegar",
        "savings": "Saves about $0.40 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 35,
      "protein": 1,
      "carbs": 8,
      "fat": 0,
      "fiber": 2
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "Mexican",
    "tags": [
      "blender",
      "salsa",
      "no-cook",
      "snack",
      "dip",
      "vegan",
      "gluten-free",
      "appetizer",
      "5-ingredient"
    ]
  },
  {
    "id": "blender-pesto",
    "name": "Blender Basil Pesto",
    "description": "Bright, garlicky fresh basil pesto blended silky-smooth in minutes — no stove, no mortar and pestle. Toss it with pasta, swirl into soup, spread on toast, or dollop over eggs.",
    "mealType": "snack",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "basil-fresh",
        "quantity": 2,
        "note": "packed cups, leaves only"
      },
      {
        "ingredientId": "pine-nuts",
        "quantity": 0.33,
        "note": "cup, raw or lightly toasted"
      },
      {
        "ingredientId": "parmesan",
        "quantity": 0.5,
        "note": "cup, finely grated"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves, peeled"
      },
      {
        "ingredientId": "evoo",
        "quantity": 0.5,
        "note": "cup, plus more to loosen"
      },
      {
        "ingredientId": "lemon-juice-bottled",
        "quantity": 1,
        "note": "tablespoon, brightens and keeps the green color"
      },
      {
        "ingredientId": "salt",
        "quantity": 0.5,
        "note": "teaspoon, to taste"
      },
      {
        "ingredientId": "pepper",
        "quantity": 0.25,
        "optional": true,
        "note": "teaspoon, freshly ground"
      }
    ],
    "steps": [
      "Add the basil leaves, pine nuts, garlic, lemon juice, and salt to the blender. Pour in about half the olive oil to help everything catch the blades.",
      "Blend in short pulses, stopping to scrape down the sides, until the mixture is coarsely chopped.",
      "With the blender running on low, stream in the remaining olive oil until the pesto is smooth and emulsified, about 30-45 seconds. Add 1-2 tablespoons more oil if it's too thick.",
      "Add the grated parmesan and pulse just a few times to combine — don't over-blend or the cheese can turn pasty.",
      "Taste and adjust with more salt, pepper, or lemon. Use immediately, or store with a thin layer of oil on top."
    ],
    "totalTimeMinutes": 10,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "Pine nuts are the priciest part — swap in walnuts or almonds for a fraction of the cost with almost no flavor change.",
      "Buy basil by the bunch at a market rather than the tiny clamshell at the grocery store; it's often half the price.",
      "Freeze leftover pesto in an ice cube tray, then pop the cubes into a bag for single-serving portions that last months."
    ],
    "substitutions": [
      {
        "forIngredientId": "pine-nuts",
        "swap": "walnuts or raw almonds",
        "savings": "Saves around $4-6 per batch versus pine nuts"
      },
      {
        "forIngredientId": "parmesan",
        "swap": "nutritional-yeast for a vegan, dairy-free version",
        "savings": "Saves about $1-2 and makes it dairy-free"
      },
      {
        "forIngredientId": "evoo",
        "swap": "regular olive oil or half oil / half water for a lighter pesto",
        "savings": "Saves roughly $1 per batch"
      }
    ],
    "estimatedNutrition": {
      "calories": 290,
      "protein": 5,
      "carbs": 3,
      "fat": 30,
      "fiber": 1
    },
    "emoji": "🌿",
    "accentColor": "bg-green-100",
    "cuisine": "Italian",
    "tags": [
      "blender",
      "no-cook",
      "sauce",
      "pesto",
      "basil",
      "vegetarian",
      "italian",
      "snack",
      "5-ingredient"
    ]
  },
  {
    "id": "blender-tomato-soup",
    "name": "Blender Tomato Soup",
    "description": "Velvety, restaurant-style creamy tomato soup made entirely in the blender. Hot broth plus a few minutes of high-speed blending heats and emulsifies canned tomatoes, garlic, and cream into a silky bowl with zero stovetop. Ready in minutes and perfect with grilled cheese.",
    "mealType": "lunch",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "crushed-tomato",
        "quantity": 1,
        "note": "one 28 oz can, fire-roasted if available"
      },
      {
        "ingredientId": "veggie-broth",
        "quantity": 2,
        "note": "heated until steaming/boiling"
      },
      {
        "ingredientId": "heavy-cream",
        "quantity": 0.5,
        "note": "or half-and-half for a lighter soup"
      },
      {
        "ingredientId": "tomato-paste",
        "quantity": 2,
        "note": "deepens the tomato flavor"
      },
      {
        "ingredientId": "garlic",
        "quantity": 2,
        "note": "cloves"
      },
      {
        "ingredientId": "onion",
        "quantity": 0.25,
        "note": "small, raw; blends smooth"
      },
      {
        "ingredientId": "olive-oil",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 1,
        "note": "balances acidity"
      },
      {
        "ingredientId": "salt",
        "quantity": 1
      },
      {
        "ingredientId": "basil-fresh",
        "quantity": 0.25,
        "optional": true,
        "note": "plus extra for garnish"
      }
    ],
    "steps": [
      "Heat the vegetable broth until steaming hot (microwave 3-4 minutes or use boiling water with a bouillon). Hot broth is what warms the finished soup, so don't skip this.",
      "Add the crushed tomatoes, hot broth, tomato paste, garlic, raw onion, olive oil, sugar, and salt to the blender. Add the fresh basil if using.",
      "Secure the lid (vent the cap and cover with a towel for hot liquid) and blend on low, then ramp to high for 3-4 minutes until completely smooth and steaming.",
      "With the blender running on low, pour in the heavy cream and blend 15-20 seconds just to combine.",
      "Taste and adjust salt or sugar. Pour into bowls and garnish with torn basil and a drizzle of olive oil."
    ],
    "totalTimeMinutes": 12,
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 7,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "gluten-free"
    ],
    "cheapTips": [
      "A single 28 oz can of crushed tomatoes carries the whole pot, making this one of the cheapest lunches per serving.",
      "Skip fresh basil and use a pinch of dried Italian seasoning blended in to save money without losing flavor.",
      "Use a bouillon cube dissolved in hot water instead of boxed broth to cut cost further."
    ],
    "substitutions": [
      {
        "forIngredientId": "heavy-cream",
        "swap": "Use whole milk or a splash of coconut milk for a lighter, dairy-free-friendly soup",
        "savings": "~$0.60/serving"
      },
      {
        "forIngredientId": "veggie-broth",
        "swap": "Hot water plus a bouillon cube",
        "savings": "~$0.40/serving"
      },
      {
        "forIngredientId": "crushed-tomato",
        "swap": "Two cans of whole peeled tomatoes, blended longer",
        "savings": "~$0.30/serving"
      }
    ],
    "estimatedNutrition": {
      "calories": 180,
      "protein": 4,
      "carbs": 16,
      "fat": 12,
      "fiber": 3
    },
    "emoji": "🍅",
    "accentColor": "bg-red-100",
    "cuisine": "American",
    "tags": [
      "blender",
      "soup",
      "no-cook",
      "vegetarian",
      "lunch",
      "comfort-food",
      "tomato"
    ]
  },
  {
    "id": "blender-banana-nice-cream",
    "name": "Banana Nice Cream",
    "description": "Two-ingredient frozen banana soft-serve, blended until thick and creamy with a splash of milk and vanilla. Tastes like banana ice cream with zero added sugar — just freeze, blend, and scoop.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "banana",
        "quantity": 4,
        "note": "very ripe, peeled, sliced into coins, frozen at least 2 hours"
      },
      {
        "ingredientId": "almond-milk",
        "quantity": 0.25,
        "note": "splash to help it blend; add more only if needed"
      },
      {
        "ingredientId": "vanilla-extract",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "peanut-butter",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp, stir in or swirl for extra richness"
      },
      {
        "ingredientId": "cinnamon",
        "quantity": 0.25,
        "optional": true,
        "note": "pinch"
      },
      {
        "ingredientId": "dark-chocolate-chips",
        "quantity": 2,
        "optional": true,
        "note": "2 tbsp, fold in after blending"
      }
    ],
    "steps": [
      "Peel 4 very ripe bananas, slice into coins, and freeze on a tray for at least 2 hours (or up to overnight) until solid.",
      "Add the frozen banana coins, vanilla, and just a splash of almond milk to a blender or food processor.",
      "Blend on high, stopping to scrape down the sides every 20-30 seconds. It will look crumbly at first, then suddenly turn smooth and creamy like soft-serve. Add a little more milk only if it won't come together.",
      "Blend in the peanut butter and cinnamon if using, then pulse in the chocolate chips so they stay whole.",
      "Serve immediately for soft-serve texture, or freeze 1-2 hours for scoopable ice cream."
    ],
    "totalTimeMinutes": 130,
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "cheapTips": [
      "Freeze overripe, spotty bananas you'd otherwise toss — they're sweetest and often marked down cheap at the store.",
      "Skip the chocolate chips and peanut butter for a near-free dessert; the bananas do all the work.",
      "Buy a big bunch of bananas, slice and freeze in a bag so you always have nice cream on hand."
    ],
    "substitutions": [
      {
        "forIngredientId": "almond-milk",
        "swap": "Use any milk you have, or a splash of water",
        "savings": "Saves ~$0.50 if you skip buying a carton"
      },
      {
        "forIngredientId": "peanut-butter",
        "swap": "Swap for any nut butter or a spoon of cocoa powder",
        "savings": "Cocoa is cheaper per serving than nut butter"
      },
      {
        "forIngredientId": "dark-chocolate-chips",
        "swap": "Chop a square of any chocolate bar instead",
        "savings": "Uses up scraps instead of a new bag (~$2)"
      }
    ],
    "estimatedNutrition": {
      "calories": 135,
      "protein": 2,
      "carbs": 30,
      "fat": 1,
      "fiber": 4
    },
    "emoji": "🍌",
    "accentColor": "bg-yellow-100",
    "cuisine": "American",
    "tags": [
      "blender",
      "no-cook",
      "dessert",
      "vegan",
      "healthy",
      "frozen",
      "two-ingredient",
      "ice-cream"
    ]
  },
  {
    "id": "blender-pancake-batter",
    "name": "Blender Pancake Batter",
    "description": "Lump-free, fluffy pancake batter blended in one jar. Toss flour, milk, eggs, and a touch of sugar in a blender, pulse for 20 seconds, and pour straight onto a hot griddle for diner-perfect pancakes every time.",
    "mealType": "breakfast",
    "servings": 4,
    "ingredients": [
      {
        "ingredientId": "flour",
        "quantity": 1.5,
        "note": "all-purpose, scooped and leveled (about 1.5 cups)"
      },
      {
        "ingredientId": "milk",
        "quantity": 1.25,
        "note": "about 1.25 cups; thin with a splash more if needed"
      },
      {
        "ingredientId": "eggs",
        "quantity": 2
      },
      {
        "ingredientId": "sugar",
        "quantity": 2,
        "note": "2 tbsp"
      },
      {
        "ingredientId": "baking-powder",
        "quantity": 1,
        "note": "1 tbsp for lift"
      },
      {
        "ingredientId": "butter",
        "quantity": 3,
        "note": "3 tbsp, melted; plus more for the pan"
      },
      {
        "ingredientId": "vanilla",
        "quantity": 1,
        "note": "1 tsp"
      },
      {
        "ingredientId": "salt",
        "quantity": 1,
        "note": "1/2 tsp",
        "optional": true
      }
    ],
    "steps": [
      "Add the milk, eggs, melted butter, vanilla, sugar, and salt to the blender jar first so the wet ingredients sit at the bottom near the blades.",
      "Add the flour and baking powder on top, then secure the lid and blend on low for about 15-20 seconds, just until smooth with no dry streaks. Do not over-blend or the pancakes turn tough.",
      "Let the batter rest in the jar for 5 minutes so the flour hydrates and the bubbles relax; it should pour like thick cream (loosen with a splash of milk if too thick).",
      "Heat a nonstick skillet or griddle over medium and lightly butter it. Pour about 1/4 cup batter per pancake straight from the blender jar.",
      "Cook 2-3 minutes until bubbles form across the surface and the edges look set, then flip and cook 1-2 minutes more until golden. Serve warm."
    ],
    "totalTimeMinutes": 20,
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 12,
    "difficulty": "easy",
    "equipment": [
      "blender"
    ],
    "primaryCookingMethod": "blender",
    "noStovetopRequired": true,
    "dietTags": [
      "vegetarian"
    ],
    "cheapTips": [
      "Make your own buttermilk-style batter by stirring 1 tbsp vinegar or lemon juice into the milk before blending for extra fluff at no added cost.",
      "Double the recipe and freeze cooked pancakes flat in a bag; reheat in the toaster for a fraction of the price of frozen waffles.",
      "Skip bottled pancake mix entirely. Flour, baking powder, sugar, and an egg cost a fraction per serving."
    ],
    "substitutions": [
      {
        "forIngredientId": "milk",
        "swap": "Use oat-milk or almond-milk 1:1 to make it dairy-free.",
        "savings": "Comparable cost; cheaper if buying shelf-stable cartons in bulk."
      },
      {
        "forIngredientId": "butter",
        "swap": "Swap in vegetable-oil or melted coconut-oil at the same amount.",
        "savings": "Saves about 30% versus butter."
      },
      {
        "forIngredientId": "sugar",
        "swap": "Use honey or maple-syrup (reduce milk slightly to compensate).",
        "savings": "Roughly even, but uses a pantry staple you likely already have."
      }
    ],
    "estimatedNutrition": {
      "calories": 320,
      "protein": 9,
      "carbs": 42,
      "fat": 13,
      "fiber": 1
    },
    "emoji": "🥞",
    "accentColor": "bg-amber-100",
    "cuisine": "American",
    "tags": [
      "blender",
      "breakfast",
      "pancakes",
      "no-cook-batter",
      "kid-friendly",
      "vegetarian",
      "quick"
    ]
  }
];
