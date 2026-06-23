"use client";

import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * Pantry Pop CategoryChip — a strong-color tag pill that maps recipe
 * tag strings (or arbitrary keys) to a consistent color. Used on
 * recipe cards, filter rows, and feature surfaces so the same category
 * reads the same way everywhere.
 *
 * Falls back to a soft Pantry-Pop biscuit tone if the key isn't in
 * the map.
 */
const MAP: Record<string, string> = {
  // Product surfaces
  "ai-chef":         "bg-[#EFE8FF] dark:bg-[#221A3D] text-[#3F2BB8] dark:text-[#C3B5FF] ring-[#CDBEFF] dark:ring-white/10",
  "pantry":          "bg-[#E8FAF0] dark:bg-[#122E20] text-[#16834A] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "cheap":           "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",
  "nourish":         "bg-[#FFE8D6] dark:bg-[#33210F] text-[#9B3F0A] dark:text-[#F2B07A] ring-[#FFC79A] dark:ring-white/10",
  "grocery":         "bg-[#DCFAF1] dark:bg-[#0F2E28] text-[#0B6E55] dark:text-[#6FE0C8] ring-[#A4ECD8] dark:ring-white/10",
  "saved":           "bg-[#FFE3EC] dark:bg-[#3A1722] text-[#A23163] dark:text-[#F5A8C6] ring-[#F9B6CD] dark:ring-white/10",

  // Ingredient categories (matches IngredientCategory union in lib/types).
  // Darker text on basil tones (#0F5E33 instead of #16834A) so 11-12px
  // chip text clears WCAG AA 4.5:1 against the soft basil surface.
  "grain":           "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",
  "protein":         "bg-[#EFE8FF] dark:bg-[#221A3D] text-[#3F2BB8] dark:text-[#C3B5FF] ring-[#CDBEFF] dark:ring-white/10",
  "vegetable":       "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "fruit":           "bg-[#FFE3EC] dark:bg-[#3A1722] text-[#A23163] dark:text-[#F5A8C6] ring-[#F9B6CD] dark:ring-white/10",
  "dairy":           "bg-[#E0F2FE] dark:bg-[#102532] text-[#1F6FA8] dark:text-[#8FD0F5] ring-[#BAE6FD] dark:ring-white/10",
  "canned":          "bg-[#FFE8D6] dark:bg-[#33210F] text-[#9B3F0A] dark:text-[#F2B07A] ring-[#FFC79A] dark:ring-white/10",
  "condiment":       "bg-[#DCFAF1] dark:bg-[#0F2E28] text-[#0B6E55] dark:text-[#6FE0C8] ring-[#A4ECD8] dark:ring-white/10",
  "spice":           "bg-[#FDE4E4] dark:bg-[#3A1717] text-[#9B1C1C] dark:text-[#F5A3A3] ring-[#F8B4B4] dark:ring-white/10",
  "frozen":          "bg-[#E0F7FE] dark:bg-[#102A32] text-[#055160] dark:text-[#7FD8E8] ring-[#A8E0F0] dark:ring-white/10",

  // Equipment — given a distinct sub-palette so an Equipment chip never
  // visually collides with an IngredientCategory chip on the same row.
  // Sky stays unique to microwave; oven moves to a deep rust;
  // rice-cooker takes a mint that doesn't share with condiment teal.
  "microwave":       "bg-[#E0F2FE] dark:bg-[#102532] text-[#1F6FA8] dark:text-[#8FD0F5] ring-[#BAE6FD] dark:ring-white/10",
  "air-fryer":       "bg-[#FFEFD6] dark:bg-[#33260F] text-[#7C3309] dark:text-[#F2B07A] ring-[#FFCC99] dark:ring-white/10",
  "stovetop":        "bg-[#FFE08A] dark:bg-[#332910] text-[#5C3700] dark:text-[#F2C97A] ring-[#FFC93D] dark:ring-white/10",
  "oven":            "bg-[#FFD9B3] dark:bg-[#3A2410] text-[#6E2E08] dark:text-[#F2B07A] ring-[#FFB070] dark:ring-white/10",
  "rice-cooker":     "bg-[#E5FBE9] dark:bg-[#122E18] text-[#1A6A2E] dark:text-[#86E0A0] ring-[#B4ECC4] dark:ring-white/10",
  "no-kitchen":      "bg-[#FFF1D9] dark:bg-[#262019] text-[#3A2A12] dark:text-[#E8D8C4] ring-[#E8D8C4] dark:ring-white/10",
  "no-stove":        "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "one-pot":         "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",

  // Diet — same basil-text deepening as above.
  "high-protein":    "bg-[#EFE8FF] dark:bg-[#221A3D] text-[#3F2BB8] dark:text-[#C3B5FF] ring-[#CDBEFF] dark:ring-white/10",
  "vegetarian":      "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "vegan":           "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "gluten-free":     "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",
  "dairy-free":      "bg-[#E0F2FE] dark:bg-[#102532] text-[#1F6FA8] dark:text-[#8FD0F5] ring-[#BAE6FD] dark:ring-white/10",

  // Inventory / heat
  "use-soon":        "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#5C3700] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",
  "spicy":           "bg-[#FDE4E4] dark:bg-[#3A1717] text-[#9B1C1C] dark:text-[#F5A3A3] ring-[#F8B4B4] dark:ring-white/10",
  "staple":          "bg-[#FFF1D9] dark:bg-[#262019] text-[#3A2A12] dark:text-[#E8D8C4] ring-[#E8D8C4] dark:ring-white/10",
  "cheap-tag":       "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",

  // Meal context
  "meal-prep":       "bg-[#DCFAF1] dark:bg-[#0F2E28] text-[#0B6E55] dark:text-[#6FE0C8] ring-[#A4ECD8] dark:ring-white/10",
  "dorm-friendly":   "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "breakfast":       "bg-[#FFE08A] dark:bg-[#332910] text-[#5C3700] dark:text-[#F2C97A] ring-[#FFC93D] dark:ring-white/10",
  "lunch":           "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "dinner":          "bg-[#E0F2FE] dark:bg-[#102532] text-[#1F6FA8] dark:text-[#8FD0F5] ring-[#BAE6FD] dark:ring-white/10",
  // Note: "snack" doubles as IngredientCategory + meal context — same
  // tone is intentional (it's the same product surface).
  "snack":           "bg-[#FFE3EC] dark:bg-[#3A1722] text-[#A23163] dark:text-[#F5A8C6] ring-[#F9B6CD] dark:ring-white/10",

  // Difficulty
  "easy":            "bg-[#E8FAF0] dark:bg-[#122E20] text-[#0F5E33] dark:text-[#6FE0A5] ring-[#B6E8CD] dark:ring-white/10",
  "medium":          "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-[#FFE08A] dark:ring-white/10",
  "hard":            "bg-[#FDE4E4] dark:bg-[#3A1717] text-[#9B1C1C] dark:text-[#F5A3A3] ring-[#F8B4B4] dark:ring-white/10",
};

const FALLBACK = "bg-[#FFF1D9] dark:bg-[#262019] text-[#3A2A12] dark:text-[#E8D8C4] ring-[#E8D8C4] dark:ring-white/10";

function normalizeKey(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-");
}

function humanLabel(raw: string): string {
  return raw
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function CategoryChip({
  children,
  category,
  size = "sm",
  className,
}: {
  /** Display label; if omitted, derived from `category`. */
  children?: ReactNode;
  /** Key used to choose the color (also the source for the auto label). */
  category: string;
  size?: "xs" | "sm";
  className?: string;
}) {
  const key = normalizeKey(category);
  const palette = MAP[key] ?? FALLBACK;
  const label = children ?? humanLabel(category);
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-semibold ring-1 ring-inset",
        size === "xs"
          ? "px-2 py-0.5 text-[10px]"
          : "px-2.5 py-0.5 text-[11px]",
        palette,
        className,
      )}
    >
      {label}
    </span>
  );
}
