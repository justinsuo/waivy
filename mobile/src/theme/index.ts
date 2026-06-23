/**
 * Waivy mobile theme — the "Pantry Pop" design system, native edition.
 *
 * Mirrors the web app's palette (src/lib/design/tokens.ts) so the two products
 * feel like one brand, but expressed as React Native style primitives (raw hex,
 * numeric spacing/radius, shadow objects) instead of Tailwind classes.
 */

export const colorsLight = {
  // Surfaces
  bg: "#FFF8ED", // warm cream — app background
  surface: "#FFFFFF",
  surfaceSoft: "#FFF1D9",
  oat: "#F6E7CF",
  borderSoft: "#E8D8C4",
  border: "#EADBC7",

  // Text
  text: "#241A12", // espresso
  textMuted: "#6B5A4A", // warm gray
  textFaint: "#A3937F",
  inverse: "#FFFFFF",

  // Primary — basil green with a deeper 3D shadow
  basil: "#2FBF71",
  basilShadow: "#16834A",
  basilSoft: "#E8FAF0",

  // Food accents
  carrot: "#FF8A3D",
  carrotShadow: "#C75F18",
  butter: "#FFD166",
  butterShadow: "#C99A23",
  tomato: "#EF4444",
  tomatoShadow: "#B91C1C",
  grape: "#7C5CFF",
  grapeShadow: "#4F38C7",
  teal: "#20C7A5",
  tealShadow: "#0E8E76",
  sky: "#3BA7FF",
  skyShadow: "#1E72C2",
  pink: "#FF6B9E",
  pinkShadow: "#C73E70",

  // Soft tints (12% backgrounds for chips / pills)
  basilTint: "#E3F7EC",
  carrotTint: "#FFEAD9",
  butterTint: "#FFF3D2",
  grapeTint: "#ECE6FF",
  tealTint: "#D8F6EF",
  skyTint: "#DCEEFF",
  pinkTint: "#FFE2EC",
  tomatoTint: "#FCE3E3",

  scrim: "rgba(36,26,18,0.45)",
} as const;

export type Palette = { -readonly [K in keyof typeof colorsLight]: string };

/**
 * Warm-charcoal dark palette — brown-tinted (not cool gray) to keep the
 * food-app warmth. Accent main hues stay vivid; their soft tints darken and
 * text/surfaces invert. `inverse` stays white (text on colored fills).
 */
export const colorsDark: Palette = {
  bg: "#120E0B",
  surface: "#1C1714",
  surfaceSoft: "#262019",
  oat: "#262019",
  borderSoft: "#3A312A",
  border: "#3A312A",

  text: "#F3ECE2",
  textMuted: "#B6A896",
  textFaint: "#8A7C6C",
  inverse: "#FFFFFF",

  basil: "#34CF7C",
  basilShadow: "#16834A",
  basilSoft: "#10301F",

  carrot: "#FF8A3D",
  carrotShadow: "#C75F18",
  butter: "#FFD166",
  butterShadow: "#C99A23",
  tomato: "#F2554E",
  tomatoShadow: "#B91C1C",
  grape: "#9B82FF",
  grapeShadow: "#4F38C7",
  teal: "#20C7A5",
  tealShadow: "#0E8E76",
  sky: "#5AB6FF",
  skyShadow: "#1E72C2",
  pink: "#FF6B9E",
  pinkShadow: "#C73E70",

  basilTint: "#122E20",
  carrotTint: "#33210F",
  butterTint: "#2E2710",
  grapeTint: "#221A3D",
  tealTint: "#0F2E28",
  skyTint: "#102532",
  pinkTint: "#3A1722",
  tomatoTint: "#3A1717",

  scrim: "rgba(0,0,0,0.55)",
};

/** Back-compat default export (light). Converted screens use useTheme(). */
export const colors = colorsLight;

/** Maps a product/category to its accent + soft tint + shadow + on-color. */
export function makeAccent(c: Palette) {
  return {
    "ai-chef": { main: c.grape, tint: c.grapeTint, shadow: c.grapeShadow, on: "#FFFFFF" },
    pantry: { main: c.basil, tint: c.basilTint, shadow: c.basilShadow, on: "#FFFFFF" },
    nourish: { main: c.carrot, tint: c.carrotTint, shadow: c.carrotShadow, on: "#FFFFFF" },
    grocery: { main: c.teal, tint: c.tealTint, shadow: c.tealShadow, on: "#FFFFFF" },
    cheap: { main: c.butter, tint: c.butterTint, shadow: c.butterShadow, on: "#241A12" },
    saved: { main: c.pink, tint: c.pinkTint, shadow: c.pinkShadow, on: "#FFFFFF" },
    explore: { main: c.sky, tint: c.skyTint, shadow: c.skyShadow, on: "#FFFFFF" },
    protein: { main: c.grape, tint: c.grapeTint, shadow: c.grapeShadow, on: "#FFFFFF" },
    carbs: { main: c.sky, tint: c.skyTint, shadow: c.skyShadow, on: "#FFFFFF" },
    fat: { main: c.butter, tint: c.butterTint, shadow: c.butterShadow, on: "#241A12" },
    fiber: { main: c.basil, tint: c.basilTint, shadow: c.basilShadow, on: "#FFFFFF" },
    water: { main: c.sky, tint: c.skyTint, shadow: c.skyShadow, on: "#FFFFFF" },
  } as const;
}

export const accent = makeAccent(colorsLight);

export type AccentKey = keyof ReturnType<typeof makeAccent>;

export const radius = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
  xxl: 32,
  pill: 999,
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 40,
} as const;

export const font = {
  // System rounded gives an SF-Rounded look on iOS — friendly + food-app warm.
  // Falls back to system on Android.
  display: "System",
  body: "System",
  sizes: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    xxl: 30,
    xxxl: 38,
  },
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    heavy: "800",
  },
} as const;

/** iOS-style soft shadow tiers. */
export const shadow = {
  sm: {
    shadowColor: "#241A12",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  md: {
    shadowColor: "#241A12",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 4,
  },
  lg: {
    shadowColor: "#241A12",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.14,
    shadowRadius: 24,
    elevation: 8,
  },
} as const;

/** How far a 3D button face presses down. */
export const BUTTON_DEPTH = 4;

export const theme = { colors, accent, radius, space, font, shadow, BUTTON_DEPTH };
export default theme;
