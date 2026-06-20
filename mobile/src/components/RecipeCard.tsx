/** Recipe cards — full (vertical) and compact (horizontal carousel). */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, radius, space, shadow, accent, font } from "~/theme";
import { Txt, Row, Press, Badge } from "./ui";
import { toast } from "./Toast";
import type { RecipeView } from "~/lib/recipes";
import { useSaved } from "~/lib/stores/app";
import { useRecipeCart } from "~/lib/grocery/recipeCartStore";

function money(n: number) {
  return `$${(n || 0).toFixed(2)}`;
}

function ImageOrGradient({ view, height }: { view: RecipeView; height: number }) {
  const a = accent[view.accent];
  const [failed, setFailed] = useState(false);
  if (view.imageUri && !failed) {
    return (
      <Image
        source={{ uri: view.imageUri }}
        style={{ width: "100%", height, backgroundColor: a.tint }}
        contentFit="cover"
        transition={200}
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <LinearGradient
      colors={[a.tint, a.main]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ width: "100%", height, alignItems: "center", justifyContent: "center" }}
    >
      <Txt style={{ fontSize: height * 0.42 }}>{view.emoji}</Txt>
    </LinearGradient>
  );
}

export function RecipeCard({ view, width }: { view: RecipeView; width?: number }) {
  const { isSaved, toggleSaved } = useSaved();
  const { has: inCart, addById } = useRecipeCart();
  const saved = isSaved(view.id);
  const planned = inCart(view.id);
  return (
    <Press
      onPress={() => router.push(`/recipe/${encodeURIComponent(view.id)}`)}
      scaleTo={0.98}
      style={[styles.card, width ? { width } : { alignSelf: "stretch" }]}
    >
      <View style={styles.imageWrap}>
        <ImageOrGradient view={view} height={140} />
        <Press
          haptic="selection"
          onPress={() => toggleSaved(view.id)}
          containerStyle={styles.saveBtnPos}
          style={styles.saveBtn}
        >
          <Feather name="bookmark" size={16} color={saved ? colors.pink : colors.textMuted} />
        </Press>
        <Press
          haptic="selection"
          onPress={() => { if (!planned && addById(view.id)) toast(`Added ${view.name} to grocery plan 🛒`, "reward"); }}
          containerStyle={styles.cartBtnPos}
          style={styles.saveBtn}
        >
          <Feather name={planned ? "check" : "shopping-cart"} size={15} color={planned ? accent.grocery.shadow : colors.textMuted} />
        </Press>
        <View style={styles.costBadge}>
          <Txt variant="caption" color="#fff" weight="700" numberOfLines={1} adjustsFontSizeToFit>{money(view.costPerServing)}/serving</Txt>
        </View>
      </View>
      <View style={{ padding: space.md, gap: 8 }}>
        <Txt variant="subheading" numberOfLines={1}>{view.name}</Txt>
        <Txt variant="caption" muted numberOfLines={2} style={{ minHeight: 30 }}>
          {view.description}
        </Txt>
        <Row gap={6} wrap>
          <Badge label={`${view.totalTimeMinutes}m`} tone="nourish" icon="clock" />
          <Badge label={`${Math.round(view.nutrition.calories)} cal`} tone="cheap" icon="zap" />
          <Badge label={`${Math.round(view.nutrition.protein)}g protein`} tone="ai-chef" />
        </Row>
      </View>
    </Press>
  );
}

export function RecipeRow({ view }: { view: RecipeView }) {
  return (
    <Press
      onPress={() => router.push(`/recipe/${encodeURIComponent(view.id)}`)}
      scaleTo={0.98}
      style={styles.row}
    >
      <View style={{ width: 84, height: 84, borderRadius: radius.md, overflow: "hidden" }}>
        <ImageOrGradient view={view} height={84} />
      </View>
      <View style={{ flex: 1, gap: 4 }}>
        <Txt variant="subheading" numberOfLines={1}>{view.name}</Txt>
        <Txt variant="caption" muted numberOfLines={2}>{view.description}</Txt>
        <Row gap={6}>
          <Txt variant="caption" color={colors.basilShadow} weight="700">{money(view.costPerServing)}</Txt>
          <Txt variant="caption" muted>· {view.totalTimeMinutes}m</Txt>
          <Txt variant="caption" muted>· {Math.round(view.nutrition.calories)} cal</Txt>
        </Row>
      </View>
      <Feather name="chevron-right" size={20} color={colors.textFaint} />
    </Press>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    ...shadow.sm,
  },
  imageWrap: { position: "relative" },
  // Positioning lives on the Press *wrapper* (containerStyle); the visual pill is
  // the Pressable itself. (Putting position:absolute on the inner Pressable left
  // the normal-flow wrapper below the image, dropping the button onto the title.)
  saveBtnPos: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  cartBtnPos: {
    position: "absolute",
    top: 10,
    right: 52,
  },
  saveBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.92)",
    alignItems: "center",
    justifyContent: "center",
  },
  costBadge: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(36,26,18,0.78)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.pill,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: space.sm,
    ...shadow.sm,
  },
});
