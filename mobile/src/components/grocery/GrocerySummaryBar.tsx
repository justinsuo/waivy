/** Compact stats for the Recipe Cart: recipes, ingredients to buy, est. cost, protein. */
import React from "react";
import { View } from "react-native";
import { Card, Row, Txt } from "~/components/ui";
import { space } from "~/theme";
import { useTheme } from "~/theme/ThemeProvider";
import type { CartSummary } from "~/lib/grocery/recipeIngredientAggregator";

function Stat({ value, label, tone }: { value: string | number; label: string; tone?: string }) {
  return (
    <View style={{ alignItems: "center", flex: 1, paddingHorizontal: 2 }}>
      <Txt
        variant="subheading"
        weight="800"
        color={tone}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.5}
        style={{ alignSelf: "stretch", textAlign: "center", fontSize: 19 }}
      >
        {value}
      </Txt>
      <Txt variant="caption" muted numberOfLines={1}>{label}</Txt>
    </View>
  );
}

export function GrocerySummaryBar({ summary }: { summary: CartSummary }) {
  const { colors } = useTheme();
  return (
    <Card style={{ marginBottom: space.lg }}>
      <Row justify="space-between" align="center">
        <Stat value={summary.recipes} label="recipes" />
        <Stat value={summary.ingredientsNeeded} label="to buy" tone={summary.ingredientsNeeded ? colors.tomato : colors.basilShadow} />
        <Stat value={`$${summary.totalCost.toFixed(2)}`} label="est. cost" tone={colors.basilShadow} />
        {summary.protein ? <Stat value={`${summary.protein}g`} label="protein" /> : null}
      </Row>
    </Card>
  );
}
