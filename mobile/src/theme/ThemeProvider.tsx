/**
 * Theme context for the mobile app. Reads the persisted `srf:settings-theme`
 * preference (system | light | dark) via the reactive KV store and resolves it
 * against the OS color scheme. Exposes the active palette + accent map through
 * useTheme(), and a useThemedStyles() helper so screens can build StyleSheets
 * that re-derive when the theme flips.
 */

import React, { createContext, useContext, useMemo, type ReactNode } from "react";
import { useColorScheme } from "react-native";
import { useKVRaw } from "~/lib/store";
import { colorsLight, colorsDark, makeAccent, type Palette } from "./index";

export const THEME_KEY = "srf:settings-theme";
export type ThemePref = "system" | "light" | "dark";
export type ThemeMode = "light" | "dark";

type Accent = ReturnType<typeof makeAccent>;
interface ThemeValue {
  mode: ThemeMode;
  pref: ThemePref;
  colors: Palette;
  accent: Accent;
}

function resolve(pref: ThemePref, system: ThemeMode): ThemeValue {
  const mode: ThemeMode = pref === "system" ? system : pref;
  const colors = mode === "dark" ? colorsDark : colorsLight;
  return { mode, pref, colors, accent: makeAccent(colors) };
}

const ThemeContext = createContext<ThemeValue>(resolve("light", "light"));

export function ThemeProvider({ children }: { children: ReactNode }) {
  const raw = useKVRaw(THEME_KEY);
  const pref: ThemePref =
    raw === "dark" || raw === "light" || raw === "system" ? raw : "light";
  const system = useColorScheme() === "dark" ? "dark" : "light";
  const value = useMemo(() => resolve(pref, system), [pref, system]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeValue {
  return useContext(ThemeContext);
}

/** Build a memoized StyleSheet/object from the active palette + accent map. */
export function useThemedStyles<T>(factory: (c: Palette, accent: Accent) => T): T {
  const { colors, accent } = useTheme();
  return useMemo(() => factory(colors, accent), [colors, accent]);
}
