/**
 * RecipeShoppingBlock — a recipe as a first-class object in Grocery.
 *
 * Collapsed (default): image + name + summary + "N missing ingredients".
 * Expanded: pantry-aware ingredient list split into NEED TO BUY (selectable) and
 * ALREADY HAVE, plus quick actions (Add to list, Cook later, Flatten, Remove).
 */
import React, { useState } from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Txt, Row, Card, Press, Button, Divider } from "~/components/ui";
import { colors, space, radius, accent } from "~/theme";
import { calculateRecipeMissingItems } from "~/lib/grocery/recipeIngredientAggregator";
import type { CartRecipe, CartIngredient } from "~/lib/grocery/recipeCartStore";

function qtyLabel(i: CartIngredient): string {
  if (!i.quantity || i.quantity <= 1) return i.name;
  const q = Math.round(i.quantity * 10) / 10;
  return `${i.name} · ${q}${i.unit ? " " + i.unit : ""}`;
}

export function RecipeShoppingBlock({
  recipe,
  pantry,
  onList,
  expanded,
  onToggleExpand,
  onRemove,
  onCookLater,
  onAddToList,
  onFlatten,
}: {
  recipe: CartRecipe;
  pantry: Set<string>;
  onList: Set<string>; // ingredientIds already on the shopping list
  expanded: boolean;
  onToggleExpand: () => void;
  onRemove: () => void;
  onCookLater: () => void;
  onAddToList: (ings: CartIngredient[]) => void;
  onFlatten: () => void;
}) {
  const { have, need } = calculateRecipeMissingItems(recipe, pantry);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const n = new Set(selected);
    n.has(id) ? n.delete(id) : n.add(id);
    setSelected(n);
  };
  const selectable = need.filter((i) => !onList.has(i.ingredientId));
  const addSelected = () => {
    const ings = selectable.filter((i) => selected.has(i.ingredientId));
    if (ings.length) onAddToList(ings);
    setSelected(new Set());
  };

  return (
    <Card padded={false} style={{ marginBottom: space.md, overflow: "hidden" }}>
      <Press onPress={onToggleExpand} scaleTo={0.99} style={{ flexDirection: "row", gap: 12, padding: 12, alignItems: "center" }}>
        {recipe.image ? (
          <Image source={{ uri: recipe.image }} style={{ width: 60, height: 60, borderRadius: radius.md, backgroundColor: colors.oat }} contentFit="cover" transition={150} />
        ) : (
          <LinearGradient colors={[accent.grocery.tint, accent.grocery.main]} style={{ width: 60, height: 60, borderRadius: radius.md, alignItems: "center", justifyContent: "center" }}>
            <Feather name="book-open" size={22} color="#fff" />
          </LinearGradient>
        )}
        <View style={{ flex: 1, gap: 2 }}>
          <Txt variant="subheading" numberOfLines={1}>{recipe.name}</Txt>
          <Txt variant="caption" muted numberOfLines={1}>
            {recipe.servings} serv · ${recipe.costPerServing.toFixed(2)}/serv{recipe.calories ? ` · ${Math.round(recipe.calories)} cal` : ""}
          </Txt>
          {need.length ? (
            <Txt variant="caption" weight="700" color={colors.tomato}>{need.length} missing ingredient{need.length === 1 ? "" : "s"}</Txt>
          ) : (
            <Txt variant="caption" weight="700" color={colors.basilShadow}>You have everything ✓</Txt>
          )}
        </View>
        <Feather name={expanded ? "chevron-up" : "chevron-down"} size={20} color={colors.textFaint} />
      </Press>

      {expanded ? (
        <View style={{ paddingHorizontal: 12, paddingBottom: 12, gap: space.md }}>
          <Divider />

          {need.length ? (
            <View style={{ gap: 8 }}>
              <Row justify="space-between" align="center">
                <Txt variant="label" color={colors.tomato}>NEED TO BUY ({need.length})</Txt>
                {selectable.length ? (
                  <Press haptic="selection" onPress={() => setSelected(selected.size >= selectable.length ? new Set() : new Set(selectable.map((i) => i.ingredientId)))}>
                    <Txt variant="label" weight="700" color={colors.basilShadow}>{selected.size >= selectable.length ? "Select none" : "Select all"}</Txt>
                  </Press>
                ) : null}
              </Row>
              {need.map((i) => {
                const already = onList.has(i.ingredientId);
                const on = selected.has(i.ingredientId);
                return (
                  <Press key={i.ingredientId} haptic="selection" disabled={already} onPress={() => toggle(i.ingredientId)}
                    style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 6, opacity: already ? 0.55 : 1 }}>
                    <View style={{ width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: already || on ? colors.basil : colors.borderSoft, backgroundColor: already || on ? colors.basil : "transparent", alignItems: "center", justifyContent: "center" }}>
                      {already || on ? <Feather name="check" size={13} color="#fff" /> : null}
                    </View>
                    <Txt variant="body" style={{ flex: 1 }}>{qtyLabel(i)}</Txt>
                    {already ? <Txt variant="caption" color={colors.basilShadow} weight="700">on list</Txt> : null}
                  </Press>
                );
              })}
            </View>
          ) : null}

          {have.length ? (
            <View style={{ gap: 6 }}>
              <Txt variant="label" color={colors.basilShadow}>ALREADY HAVE ({have.length})</Txt>
              <Row gap={6} wrap>
                {have.map((i) => (
                  <View key={i.ingredientId} style={{ flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: colors.basilSoft, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Feather name="check" size={11} color={colors.basilShadow} />
                    <Txt variant="caption" weight="600" color={colors.basilShadow}>{i.name}</Txt>
                  </View>
                ))}
              </Row>
            </View>
          ) : null}

          {selectable.length ? (
            <Button title={selected.size ? `Add ${selected.size} to shopping list` : "Add all to shopping list"} icon="shopping-cart"
              accentKey="grocery" variant="accent" full
              onPress={() => { if (selected.size) addSelected(); else onAddToList(selectable); }} />
          ) : need.length ? (
            <Txt variant="caption" muted center>All needed items are on your shopping list ✓</Txt>
          ) : null}

          <Row gap={8}>
            <Button title="Cook later" icon="play" variant="secondary" size="sm" style={{ flex: 1 }} onPress={onCookLater} />
            <Button title="Flatten" icon="layers" variant="secondary" size="sm" style={{ flex: 1 }} onPress={onFlatten} />
            <Button title="Remove" icon="trash-2" variant="danger" size="sm" style={{ flex: 1 }} onPress={onRemove} />
          </Row>
        </View>
      ) : null}
    </Card>
  );
}
