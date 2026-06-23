import { writeFileSync } from "fs";
import { ALL_RECIPES } from "../src/data/recipes";
import { INGREDIENTS } from "../src/data/ingredients";

const CANDIDATES = [
  // Cakes & tortes
  "Red Velvet Cake","German Chocolate Cake","Black Forest Cake","Boston Cream Pie","Pineapple Upside-Down Cake",
  "Lemon Bundt Cake","Cinnamon Streusel Coffee Cake","Hummingbird Cake","Victoria Sponge Cake","Genoise Sponge Cake",
  "Orange Chiffon Cake","Devil's Food Cake","Gingerbread Cake","Marble Cake","Basque Burnt Cheesecake",
  "New York Cheesecake","Texas Sheet Cake","Wacky Depression Cake","Tarta de Santiago","Sachertorte",
  "Dobos Torte","Lamington","Battenberg Cake","Castella Cake","Russian Honey Cake",
  "Financiers","Canelés","Kouign-Amann","Madeira Cake","Eccles Cake",
  "Bee Sting Cake","Streuselkuchen","Plum Torte","Funfetti Cake","Cassata Siciliana",
  // Cookies
  "Oatmeal Raisin Cookies","Cut-Out Sugar Cookies","Gingerbread Cookies","Molasses Spice Cookies","White Chocolate Macadamia Cookies",
  "Double Chocolate Cookies","Spritz Cookies","Pizzelle","Anzac Biscuits","Speculaas",
  "Stroopwafels","Alfajores","Rugelach","Hamantaschen","Black and White Cookies",
  "Amaretti","Ladyfingers","Lebkuchen","Pfeffernüsse","Vanillekipferl",
  "Empire Biscuits","Digestive Biscuits","Tuiles","Nankhatai","Kolaczki",
  "Cowboy Cookies","Cranberry Orange Cookies","Chocolate Crinkle Cookies","Coconut Macaroons","Peanut Butter Blossoms",
  // Bars & brownies
  "Blondies","Seven Layer Magic Bars","Date Squares","Butter Tarts","Raspberry Crumble Bars",
  "Pecan Pie Bars","Key Lime Bars","S'mores Bars","Congo Bars","Oatmeal Fudge Bars",
  // Pies & tarts
  "Pumpkin Pie","Sweet Potato Pie","Cherry Pie","Blueberry Pie","Strawberry Rhubarb Pie",
  "Banoffee Pie","Lemon Meringue Pie","Shoofly Pie","Buttermilk Pie","Coconut Cream Pie",
  "Banana Cream Pie","French Silk Pie","Tarte Tatin","Bakewell Tart","Treacle Tart",
  "Apple Galette","Hong Kong Egg Tart","Mince Pies","Pecan Tassies","Custard Tart",
  // Breads & yeasted
  "Brioche","Challah","Cinnamon Rolls","Sticky Buns","Chocolate Babka",
  "Focaccia","Ciabatta","Soft Pretzels","Bagels","Hot Cross Buns",
  "Pão de Queijo","Conchas","Pandesal","Dinner Rolls","Parker House Rolls",
  "Garlic Knots","Irish Soda Bread","Monkey Bread","Stollen","Panettone",
  "Kugelhopf","Tsoureki","Zucchini Bread","Pumpkin Bread","Beer Bread",
  // Pastries & viennoiserie
  "Croissants","Pain au Chocolat","Danish Pastry","Palmiers","Cream Puffs",
  "Éclairs","Paris-Brest","Mille-Feuille","Apple Strudel","Apple Turnovers",
  "Sausage Rolls","Gougères","Cheese Straws","Sfogliatella","Ma'amoul",
  "Basbousa","Knafeh",
  // Muffins, quick breads, scones, meringue
  "Blueberry Muffins","Bran Muffins","Corn Muffins","Morning Glory Muffins","English Scones",
  "Cheese Scones","Popovers","Yorkshire Pudding","Welsh Cakes","Pavlova",
  "Butter Mochi","Melonpan","Pineapple Tarts","Malva Pudding","Coffee Cake Crumb Bars",
  // Wave 2 — American regional
  "Gooey Butter Cake","Kentucky Butter Cake","Caramel Cake","Coca-Cola Cake","Mississippi Mud Pie",
  "Derby Pie","Grasshopper Pie","Hoosier Sugar Cream Pie","Atlantic Beach Pie","Sour Cream Coffee Cake",
  "New York Crumb Cake","Lane Cake","Smith Island Cake","Whoopie Pies","Snickerdoodle Bars",
  // Wave 2 — French
  "Clafoutis","Galette des Rois","Saint-Honoré Cake","Religieuse","Tarte au Citron",
  "Flan Pâtissier","Gâteau Basque","Far Breton","Bûche de Noël","Tarte aux Pommes",
  "Quatre-Quarts","Chouquettes","Tarte Bourdaloue",
  // Wave 2 — Italian
  "Crostata","Torta della Nonna","Torta Caprese","Pastiera Napoletana","Panforte",
  "Ricciarelli","Pignoli Cookies","Maritozzi","Sbrisolona","Castagnaccio",
  // Wave 2 — Spanish / Portuguese
  "Ensaïmada","Magdalenas","Roscón de Reyes","Quesada Pasiega","Pão de Ló",
  "Bolo Rei","Queijadas","Bolo de Arroz",
  // Wave 2 — Eastern Europe
  "Sernik","Szarlotka","Makowiec","Mazurek","Kremówka",
  "Medovník","Vánočka","Kürtőskalács","Beigli","Krémes","Paska Bread",
  // Wave 2 — Greek / Turkish / Middle East
  "Galaktoboureko","Bougatsa","Melomakarona","Koulourakia","Portokalopita",
  "Karidopita","Revani","Şekerpare","Kahk","Sheermal",
  // Wave 2 — Indian / SE Asia / East Asia
  "Mawa Cake","Karachi Biscuits","Kerala Plum Cake","Bebinca","Bibingka",
  "Sans Rival","Ube Cake","Brazo de Mercedes","Yema Cake","Kek Lapis Sarawak",
  "Taiwanese Pineapple Cake","Wife Cake","Pineapple Bun","Mooncake","Baumkuchen",
  "Swiss Roll","Japanese Strawberry Shortcake","Matcha Roll Cake","Anpan","Cream Pan",
];

const kebab = (s: string) =>
  s.toLowerCase().replace(/['’.]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const existingNames = new Set(ALL_RECIPES.map((r) => r.name.toLowerCase().trim()));
const existingIds = new Set(ALL_RECIPES.map((r) => r.id));

const isNew: { slug: string; name: string }[] = [];
const taken: string[] = [];
for (const name of CANDIDATES) {
  const slug = "bake2-" + kebab(name);
  const nameTaken = existingNames.has(name.toLowerCase().trim());
  const idTaken = existingIds.has(slug) || existingIds.has("bake-" + kebab(name));
  if (nameTaken || idTaken) taken.push(name);
  else isNew.push({ slug, name });
}

// Catalog reference grouped by unit (so authors use correct units → correct pricing)
const byUnit: Record<string, string[]> = {};
for (const ing of INGREDIENTS) {
  (byUnit[ing.unit] ??= []).push(ing.id);
}
const unitRef = Object.entries(byUnit)
  .sort((a, b) => b[1].length - a[1].length)
  .map(([u, ids]) => `[unit "${u}"]: ${ids.sort().join(", ")}`)
  .join("\n");

console.log(`CANDIDATES: ${CANDIDATES.length} | NEW: ${isNew.length} | collisions dropped: ${taken.length}`);
console.log("dropped:", taken.join(", ") || "(none)");
writeFileSync("/tmp/new-baking-2.json", JSON.stringify(isNew, null, 2));
writeFileSync("/tmp/catalog-unit-ref.txt", unitRef);
console.log("catalog ingredients:", INGREDIENTS.length, "| units:", Object.keys(byUnit).length);
