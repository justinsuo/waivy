/**
 * Grocery — recipe-centric meal planner + shopping list.
 *
 *   Recipes to cook  →  Ingredients needed (deduped, pantry-aware)  →  Shopping list
 *
 * Recipes are first-class objects (Recipe Cart). Their ingredients aggregate +
 * merge across recipes, hide what you already own, and you promote what you need
 * onto the actual shopping list.
 */
import { useMemo, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Screen } from "~/components/Screen";
import { Sheet } from "~/components/Sheet";
import { Txt, Row, Card, Button, Field, Press, Badge, IconButton, EmptyState } from "~/components/ui";
import { toast } from "~/components/Toast";
import { celebrate } from "~/components/Celebration";
import { colors, space, radius, accent } from "~/theme";
import { useGrocery, usePantry, groceryItemName } from "~/lib/stores/app";
import { useRecipeCart, type CartRecipe, type CartIngredient } from "~/lib/grocery/recipeCartStore";
import { mergeIngredientsAcrossRecipes, summarizeCart } from "~/lib/grocery/recipeIngredientAggregator";
import { RecipeShoppingBlock } from "~/components/grocery/RecipeShoppingBlock";
import { GrocerySummaryBar } from "~/components/grocery/GrocerySummaryBar";
import { categoryLabel } from "~/lib/recipes";
import { tap, medium as hapticMedium } from "~/lib/haptics";
import { INGREDIENTS, INGREDIENT_MAP } from "@/data/ingredients";
import { quoteIngredient } from "@/lib/pricing/pricingEngine";

const CATEGORY_ORDER = ["protein", "vegetable", "fruit", "dairy", "grain", "canned", "frozen", "condiment", "spice", "snack", "other"];

function itemCost(id: string, qty: number): number {
  return quoteIngredient(id, qty || 1)?.totalCost ?? 0;
}

export default function GroceryScreen() {
  const { grocery, addStaple, addPlanned, toggleChecked, remove, clearChecked, clear } = useGrocery();
  const { cart, remove: removeRecipe, clear: clearCart } = useRecipeCart();
  const { pantry } = usePantry();
  const pantrySet = useMemo(() => new Set(pantry.map((p) => p.ingredientId)), [pantry]);
  const onList = useMemo(() => new Set(grocery.map((g) => g.ingredientId)), [grocery]);
  const [addOpen, setAddOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const aggregated = useMemo(() => mergeIngredientsAcrossRecipes(cart, pantrySet), [cart, pantrySet]);
  const needed = useMemo(() => aggregated.filter((a) => !a.inPantry), [aggregated]);
  const summary = useMemo(() => summarizeCart(cart, aggregated), [cart, aggregated]);

  const grouped = useMemo(() => {
    const g: Record<string, typeof grocery> = {};
    for (const item of grocery) {
      const cat = INGREDIENT_MAP.get(item.ingredientId)?.category ?? "other";
      (g[cat] ||= []).push(item);
    }
    return g;
  }, [grocery]);
  const total = useMemo(() => grocery.filter((g) => !g.checked).reduce((s, g) => s + itemCost(g.ingredientId, g.quantity), 0), [grocery]);
  const checkedCount = grocery.filter((g) => g.checked).length;

  const searchMatches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const have = new Set(grocery.map((g) => g.ingredientId));
    return INGREDIENTS.filter((i) => i.name.toLowerCase().includes(q) && !have.has(i.id)).slice(0, 8);
  }, [query, grocery]);

  const promoteFromRecipe = (recipe: CartRecipe, ings: CartIngredient[]) => {
    addPlanned(ings.map((i) => ({ ingredientId: i.ingredientId, quantity: i.quantity, recipes: [recipe.name] })));
    hapticMedium();
    toast(`Added ${ings.length} item${ings.length === 1 ? "" : "s"} to your list`, "success");
  };
  const flatten = (recipe: CartRecipe) => {
    addPlanned(recipe.ingredients.filter((i) => !i.optional).map((i) => ({ ingredientId: i.ingredientId, quantity: i.quantity, recipes: [recipe.name] })));
    removeRecipe(recipe.key);
    hapticMedium();
    toast(`Flattened ${recipe.name} into your list`, "reward");
  };
  const addAllNeeded = () => {
    // Skip items already on the list (their per-item rows are likewise disabled)
    // so the pre-aggregated quantities here don't stack on top of what's there.
    const fresh = needed.filter((a) => !onList.has(a.ingredientId));
    if (!fresh.length) { toast("Everything needed is already on your list", "info"); return; }
    addPlanned(fresh.map((a) => ({ ingredientId: a.ingredientId, quantity: a.quantity, recipes: a.recipes })));
    hapticMedium();
    toast(`Added ${fresh.length} ingredient${fresh.length === 1 ? "" : "s"} to your list`, "reward");
  };

  const isEmpty = cart.length === 0 && grocery.length === 0;

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Screen contentStyle={{ paddingBottom: grocery.length ? 150 : 40 }}>
        <Row justify="space-between" style={{ marginBottom: space.lg }}>
          <View><Txt variant="label">GROCERY</Txt><Txt variant="title">Meals &amp; list</Txt></View>
          {cart.length || grocery.length ? <IconButton icon="trash-2" onPress={() => { clearCart(); clear(); tap(); toast("Cleared everything", "info"); }} bg={colors.tomatoTint} color={colors.tomato} /> : null}
        </Row>

        {isEmpty ? (
          <EmptyState emoji="🛒" title="Plan meals, then shop"
            subtitle="Add recipes you want to cook — Waivy builds the shopping list for you, leaving out what's already in your pantry."
            action={<Button title="Browse recipes" icon="book-open" accentKey="grocery" variant="accent" onPress={() => router.push("/recipes")} />} />
        ) : (
          <>
            {cart.length ? <GrocerySummaryBar summary={summary} /> : null}

            {/* ── Section 1: Recipes to cook ───────────────────────────────── */}
            <Row justify="space-between" align="center" style={{ marginBottom: space.md }}>
              <Txt variant="heading">Recipes to cook</Txt>
              <Button title="Add" icon="plus" accentKey="grocery" variant="accent" size="sm" onPress={() => router.push("/recipes")} />
            </Row>
            {cart.length ? (
              cart.map((r) => (
                <RecipeShoppingBlock key={r.key} recipe={r} pantry={pantrySet} onList={onList}
                  expanded={expanded.has(r.key)}
                  onToggleExpand={() => { const n = new Set(expanded); n.has(r.key) ? n.delete(r.key) : n.add(r.key); setExpanded(n); tap(); }}
                  onRemove={() => { removeRecipe(r.key); tap(); toast(`Removed ${r.name}`, "info"); }}
                  onCookLater={() => (r.recipeId ? router.push(`/cook/${encodeURIComponent(r.recipeId)}` as any) : toast("Add this recipe's ingredients to cook it", "info"))}
                  onAddToList={(ings) => promoteFromRecipe(r, ings)}
                  onFlatten={() => flatten(r)}
                />
              ))
            ) : (
              <Card soft style={{ marginBottom: space.lg }}>
                <Txt variant="body" muted center>No recipes yet. Tap “Add to grocery plan” on any recipe — from Recipes, AI Chef, Saved or Explore.</Txt>
              </Card>
            )}

            {/* ── Section 2: Ingredients needed ────────────────────────────── */}
            {needed.length ? (
              <View style={{ marginTop: space.md }}>
                <Row justify="space-between" align="flex-start" style={{ marginBottom: space.md }}>
                  <View style={{ flex: 1 }}>
                    <Txt variant="heading">Ingredients needed</Txt>
                    <Txt variant="caption" muted>Merged across {cart.length} recipe{cart.length === 1 ? "" : "s"}, minus your pantry</Txt>
                  </View>
                  <Button title="Add all" icon="shopping-cart" accentKey="grocery" variant="accent" size="sm" onPress={addAllNeeded} />
                </Row>
                <Card padded={false} style={{ overflow: "hidden", marginBottom: space.lg }}>
                  {needed.map((a, idx) => {
                    const already = onList.has(a.ingredientId);
                    return (
                      <Press key={a.ingredientId} haptic="none" disabled={already}
                        onPress={() => { addPlanned([{ ingredientId: a.ingredientId, quantity: a.quantity, recipes: a.recipes }]); hapticMedium(); }}
                        style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderTopWidth: idx === 0 ? 0 : 1, borderTopColor: colors.border, opacity: already ? 0.5 : 1 }}>
                        <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: already ? colors.basil : accent.grocery.tint, alignItems: "center", justifyContent: "center" }}>
                          <Feather name={already ? "check" : "plus"} size={15} color={already ? "#fff" : accent.grocery.shadow} />
                        </View>
                        <View style={{ flex: 1 }}>
                          <Txt variant="body">{a.quantity > 1 ? `${Math.round(a.quantity * 10) / 10}${a.unit ? " " + a.unit : ""} ` : ""}{a.name}</Txt>
                          <Txt variant="caption" muted numberOfLines={1}>for {a.recipes.join(", ")}</Txt>
                        </View>
                        {a.cost > 0 ? <Txt variant="caption" weight="700" color={colors.basilShadow}>${a.cost.toFixed(2)}</Txt> : null}
                      </Press>
                    );
                  })}
                </Card>
              </View>
            ) : cart.length ? (
              <Card soft style={{ marginBottom: space.lg }}>
                <Row gap={10}><Feather name="check-circle" size={20} color={colors.basilShadow} /><Txt variant="body">You already have everything for these recipes 🎉</Txt></Row>
              </Card>
            ) : null}

            {/* ── Section 3: Shopping list ─────────────────────────────────── */}
            <Txt variant="heading" style={{ marginBottom: space.md }}>Shopping list{grocery.length ? ` · ${grocery.length - checkedCount} to buy` : ""}</Txt>
            {grocery.length === 0 ? (
              <Card soft style={{ marginBottom: space.lg }}>
                <Txt variant="body" muted center>Empty — promote ingredients from above, or add a manual item with the + button.</Txt>
              </Card>
            ) : (
              CATEGORY_ORDER.filter((c) => grouped[c]?.length).map((cat) => (
                <View key={cat} style={{ marginBottom: space.lg }}>
                  <Txt variant="label" style={{ marginBottom: 8 }}>{categoryLabel(cat).toUpperCase()}</Txt>
                  <Card padded={false} style={{ overflow: "hidden" }}>
                    {grouped[cat].map((item, idx) => {
                      const cost = itemCost(item.ingredientId, item.quantity);
                      const inPantry = pantrySet.has(item.ingredientId);
                      return (
                        <Press key={item.ingredientId} haptic="none" onPress={() => {
                            const nowChecked = !item.checked;
                            toggleChecked(item.ingredientId);
                            if (nowChecked) {
                              hapticMedium();
                              const othersUnchecked = grocery.filter((g) => !g.checked && g.ingredientId !== item.ingredientId).length;
                              if (othersUnchecked === 0) celebrate("Grocery list done! 🛒");
                            } else { tap(); }
                          }}
                          style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderTopWidth: idx === 0 ? 0 : 1, borderTopColor: colors.border }}>
                          <View style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: item.checked ? colors.basil : colors.borderSoft, backgroundColor: item.checked ? colors.basil : "transparent", alignItems: "center", justifyContent: "center" }}>
                            {item.checked ? <Feather name="check" size={15} color="#fff" /> : null}
                          </View>
                          <View style={{ flex: 1 }}>
                            <Txt variant="body" style={item.checked ? { textDecorationLine: "line-through", color: colors.textFaint } : undefined}>{groceryItemName(item.ingredientId)}</Txt>
                            <Row gap={6}>
                              {item.recipeIds.length ? <Txt variant="caption" muted>for {item.recipeIds.length} recipe{item.recipeIds.length === 1 ? "" : "s"}</Txt> : null}
                              {inPantry ? <Badge label="in pantry" tone="pantry" /> : null}
                            </Row>
                          </View>
                          {cost > 0 ? <Txt variant="caption" weight="700" color={colors.basilShadow}>${cost.toFixed(2)}</Txt> : null}
                          <Press onPress={() => { remove(item.ingredientId); tap(); }} hitSlop={10} style={{ width: 32, height: 32, alignItems: "center", justifyContent: "center" }}><Feather name="x" size={17} color={colors.textFaint} /></Press>
                        </Press>
                      );
                    })}
                  </Card>
                </View>
              ))
            )}
            {checkedCount > 0 ? (
              <Button title={`Clear ${checkedCount} completed`} icon="check-circle" variant="secondary" full onPress={() => { clearChecked(); toast("Cleared completed"); }} />
            ) : null}
          </>
        )}
      </Screen>

      {/* Sticky total + add item (shopping list) */}
      {grocery.length > 0 ? (
        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: space.lg, paddingBottom: space.xl, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border }}>
          <Row justify="space-between">
            <View><Txt variant="caption" muted>Estimated total</Txt><Txt variant="title">${total.toFixed(2)}</Txt></View>
            <Button title="Add item" icon="plus" accentKey="grocery" variant="accent" onPress={() => setAddOpen(true)} />
          </Row>
        </View>
      ) : null}

      <Sheet visible={addOpen} onClose={() => { setAddOpen(false); setQuery(""); }} title="Add to grocery">
        <Field placeholder="Search ingredients…" value={query} onChangeText={setQuery} autoFocus />
        {searchMatches.map((i) => (
          <Press key={i.id} onPress={() => { addStaple(i.id); tap(); toast(`Added ${i.name}`); setQuery(""); }}
            style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border }}>
            <Txt variant="body">{i.name}</Txt>
            <Feather name="plus-circle" size={20} color={accent.grocery.main} />
          </Press>
        ))}
      </Sheet>
    </View>
  );
}
