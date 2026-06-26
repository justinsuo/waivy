/**
 * Course classification + generation directives.
 *
 * A "course" is the coarse kind of thing a recipe is: a real MEAL (savory food
 * with carbs/protein you'd eat for breakfast/lunch/dinner), a DESSERT (sweet
 * treat/bake), a DRINK, or a (savory) SNACK. Used by:
 *  - AI Chef generation: the user picks what to make so it stops defaulting to
 *    desserts (courseDirective is injected into the prompt).
 *  - The matching algorithm: classify catalog recipes so a "Meals" filter can
 *    hide desserts/drinks (and vice-versa).
 */

export type GenCourse = "meal" | "dessert" | "drink";
export type Course = GenCourse | "snack";
export type CourseFilter = "all" | GenCourse;

type RecipeLike = { mealType?: string; tags?: string[]; cuisine?: string; name?: string };

const SWEET_TAGS = new Set(["dessert", "desserts", "sweet", "sweets", "baking", "treats", "candy", "pudding"]);

// Dessert-ish dish words. Word-boundary matched against the recipe name.
const DESSERT_NAME =
  /\b(cookie|snickerdoodle|brownie|blondie|cake|cupcake|cheesecake|pie|tart|galette|donut|doughnut|churro|pudding|custard|flan|mousse|ice ?cream|sorbet|gelato|fudge|truffle|macaron|macaroon|madeleine|scone|muffin|cobbler|crumble|crisp|cinnamon roll|sticky bun|s'?mores?|candy|caramel|toffee|praline|meringue|parfait|tiramisu|cr[eè]me br[uû]l[eé]e|panna cotta|baklava|mochi|halwa|halva|ladoo|laddu|jalebi|gulab|tres leches|banana bread|shortcake|shortbread|trifle|sundae|popsicle|fro-?yo|frozen yogurt|tart|pavlova|eclair|profiterole|cannoli|baked oats?|nice ?cream|energy bites?|dessert)\b/i;

// Savory bakes that contain a "baking" tag or dessert-ish word but are NOT
// desserts — keep them classified as meals/snacks.
const SAVORY_BAKE =
  /\b(focaccia|sourdough|baguette|ciabatta|naan|pita|flatbread|breadstick|pretzel|cornbread|biscuits?|garlic bread|pizza|calzone|bagel|english muffin|dinner roll|bread roll|savou?ry|quiche|frittata|strata|pot ?pie|empanada|sausage roll|cheese straw)\b/i;

/** Sweet treat / dessert? */
export function isDessertRecipe(r: RecipeLike): boolean {
  if (r.mealType === "drink") return false;
  const name = r.name || "";
  if (SAVORY_BAKE.test(name)) return false;
  if (r.cuisine && /dessert/i.test(r.cuisine)) return true;
  if (DESSERT_NAME.test(name)) return true;
  const tags = (r.tags || []).map((t) => t.toLowerCase());
  if (tags.some((t) => SWEET_TAGS.has(t))) return true;
  return false;
}

/** Coarse course of a recipe. */
export function courseOf(r: RecipeLike): Course {
  if (r.mealType === "drink") return "drink";
  if (isDessertRecipe(r)) return "dessert";
  if (r.mealType === "snack") return "snack";
  return "meal";
}

/**
 * Does a recipe match a course FILTER? "meal" here means "real food you'd eat
 * as a meal" — savory meals AND savory snacks — but never a dessert or drink.
 */
export function matchesCourse(r: RecipeLike, filter: CourseFilter): boolean {
  if (filter === "all") return true;
  const c = courseOf(r);
  if (filter === "meal") return c === "meal" || c === "snack";
  return c === filter; // "dessert" | "drink"
}

export const COURSE_FILTER_LABELS: Record<CourseFilter, string> = {
  all: "All",
  meal: "Meals",
  dessert: "Desserts",
  drink: "Drinks",
};

/**
 * Directive injected into the AI generation prompt so the model makes the kind
 * of thing the user asked for. Defaults to a real meal — the whole point is to
 * stop it from defaulting to a snickerdoodle when the user wants dinner.
 */
export function courseDirective(course: GenCourse | undefined): string {
  if (course === "dessert") {
    return `[COURSE: DESSERT] Make a SWEET dessert or treat (cookie, cake, brownie, pudding, fruit dessert, sweet snack, etc.). Set mealType to "snack" and include "dessert" in tags. Lean into the sweetness.`;
  }
  if (course === "drink") {
    return `[COURSE: DRINK] Make a DRINK (smoothie, iced coffee, latte, mocktail, hot chocolate, tea, juice, shake, etc.). Set mealType to "drink".`;
  }
  // "meal" (default)
  return `[COURSE: REAL MEAL] Make a real, SAVORY meal — actual food with carbs and/or protein that someone would eat as a breakfast, lunch, or dinner. A humble "struggle meal" is totally fine, but it must be a real meal, NOT a dessert, sweet bake, candy, sugary snack, or drink. Do NOT return cookies, cakes, brownies, snickerdoodles, sweet treats, or anything dessert-like. Set mealType to one of "breakfast", "lunch", "dinner", or "meal-prep".`;
}
