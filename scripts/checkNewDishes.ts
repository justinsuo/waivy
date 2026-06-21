import { writeFileSync } from "fs";
import { ALL_RECIPES } from "../src/data/recipes";

// Curated list of genuinely good, well-known dishes across categories.
const CANDIDATES = [
  // Comfort / American
  "Classic Beef Chili", "Chicken Pot Pie", "Hearty Beef Stew", "Chicken Parmesan", "Pulled Pork Sandwich",
  "Shepherd's Pie", "Sloppy Joes", "Baked Ziti", "Chicken and Dumplings", "Classic Meatloaf",
  "Buffalo Wings", "Skillet Cornbread", "Tuna Melt", "Philly Cheesesteak", "Loaded Baked Potato",
  "Buttermilk Biscuits and Gravy", "Classic Cobb Salad", "Macaroni Salad", "Crispy Hash Browns",
  // Italian
  "Spaghetti Bolognese", "Chicken Marsala", "Eggplant Parmesan", "Minestrone Soup", "Cacio e Pepe",
  "Caprese Salad", "Tomato Bruschetta", "Chicken Piccata", "Fettuccine Alfredo", "Shrimp Scampi",
  "Margherita Pizza", "Tiramisu", "Stuffed Shells",
  // Mexican / Latin American
  "Chicken Enchiladas", "Pork Carnitas Tacos", "Chilaquiles Verdes", "Pork Pozole Rojo", "Beef Empanadas",
  "Huevos Rancheros", "Carne Asada", "Tacos al Pastor", "Fresh Guacamole", "Pico de Gallo", "Tres Leches Cake",
  // Asian
  "Chicken Pad Thai", "Beef Pho", "Kung Pao Chicken", "Mapo Tofu", "Chicken Lo Mein",
  "Pork Pot Stickers", "Butter Chicken", "Chicken Tikka Masala", "Palak Paneer", "Beef Bulgogi",
  "Korean Fried Chicken", "Banh Mi", "Chicken Katsu", "Egg Drop Soup", "Mongolian Beef",
  "General Tso's Chicken", "Tom Kha Gai", "Chicken Yakisoba", "Char Siu Pork", "Vegetable Spring Rolls",
  // Mediterranean / Middle Eastern
  "Shakshuka", "Crispy Falafel", "Chicken Shawarma", "Tabbouleh", "Greek Salad",
  "Chicken Gyros", "Spanakopita", "Beef Kofta", "Baba Ganoush", "Beef Moussaka", "Tzatziki",
  // Breakfast
  "Cinnamon French Toast", "Breakfast Burrito", "Veggie Frittata", "Eggs Benedict", "Breakfast Hash",
  "Belgian Waffles", "Breakfast Sandwich",
  // Soups / stews
  "Chicken and Sausage Gumbo", "New England Clam Chowder", "Chicken Tortilla Soup", "Butternut Squash Soup",
  "Split Pea Soup", "Broccoli Cheddar Soup", "Lentil Soup",
  // Vegetarian
  "Stuffed Bell Peppers", "Vegetable Stir Fry", "Ratatouille", "Black Bean Burgers", "Veggie Buddha Bowl",
  // Desserts
  "Fudgy Brownies", "Chocolate Chip Cookies", "Apple Crumble", "Classic Banana Bread", "Snickerdoodles",
  "Lemon Bars", "Carrot Cake", "Peanut Butter Cookies",
  // Seafood
  "Fish Tacos", "Maryland Crab Cakes", "Garlic Butter Shrimp", "Lemon Herb Salmon", "Shrimp Fried Rice",
  // Specific / regional — likely new
  "Nashville Hot Chicken", "Cuban Sandwich", "Lobster Roll", "Shrimp Po Boy", "Chicken Etouffee",
  "Chicken Tinga Tacos", "Pork Tamales", "Ropa Vieja", "Peruvian Lomo Saltado", "Brazilian Feijoada",
  "Korean Japchae", "Tteokbokki", "Pork Gyoza", "Okonomiyaki", "Chicken Karaage",
  "Oyakodon", "Katsudon", "Nasi Goreng", "Chicken Laksa", "Beef Rendang",
  "Chicken Satay", "Kimchi Jjigae", "Sundubu Jjigae", "Dan Dan Noodles", "Hot and Sour Soup",
  "Wonton Soup", "Sweet and Sour Pork", "Singapore Noodles", "Aloo Gobi", "Lamb Rogan Josh",
  "Chicken Korma", "Vegetable Samosas", "Masala Dosa", "Chana Chole", "Rajma Masala",
  "Dal Makhani", "Tandoori Chicken", "Pav Bhaji", "Egyptian Koshari", "Chicken Tagine",
  "Coq au Vin", "Beef Bourguignon", "Croque Monsieur", "Quiche Lorraine", "Hungarian Goulash",
  "Polish Pierogi", "Pork Schnitzel", "Beef Stroganoff", "Spanish Tortilla", "Gazpacho",
  "Patatas Bravas", "Fish and Chips", "Bangers and Mash", "Swedish Meatballs", "Chicken Fried Steak",
  "Shrimp and Grits", "Southern Collard Greens", "Peach Cobbler", "Pecan Pie", "Key Lime Pie",
  "Classic Apple Pie", "Sunday Pot Roast", "Dutch Baby Pancake", "Breakfast Tacos", "Creme Brulee",
  "Bread Pudding", "Cinnamon Churros", "Baklava", "Sicilian Cannoli", "Beef Bibimbap",
];

const kebab = (s: string) =>
  s.toLowerCase().replace(/['’.]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const existingNames = new Set(ALL_RECIPES.map((r) => r.name.toLowerCase().trim()));
const existingIds = new Set(ALL_RECIPES.map((r) => r.id));

const isNew: { slug: string; name: string }[] = [];
const taken: string[] = [];
for (const name of CANDIDATES) {
  const slug = "cur-" + kebab(name);
  const nameTaken = existingNames.has(name.toLowerCase().trim());
  const idTaken = existingIds.has(slug);
  if (nameTaken || idTaken) taken.push(name + (nameTaken ? " (name)" : " (id)"));
  else isNew.push({ slug, name });
}

console.log(`CANDIDATES: ${CANDIDATES.length} | NEW: ${isNew.length} | already covered: ${taken.length}`);
console.log("\n=== ALREADY COVERED (skip) ===");
console.log(taken.join(", ") || "(none)");
console.log("\n=== NEW (will author) ===");
for (const d of isNew) console.log(`  ${d.slug}  —  ${d.name}`);
writeFileSync("/tmp/new-dishes.json", JSON.stringify(isNew, null, 2));
