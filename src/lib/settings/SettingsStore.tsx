"use client";

/**
 * Settings context. Parallels AppStore: hydrates from `srf:settings` on mount,
 * persists on every change, and applies the appearance settings (text size +
 * manual reduce-motion) to <html> so they take effect app-wide.
 *
 * Mounted near the root in layout.tsx. SSR renders with DEFAULT_SETTINGS, then
 * the client effect swaps in the saved blob (and flips `ready`).
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { loadSettings, saveSettings } from "./storage";
import {
  DEFAULT_SETTINGS,
  type AiSettings,
  type AppearanceSettings,
  type CookingSettings,
  type FeedbackSettings,
  type Settings,
  type VoiceSettings,
} from "./types";

interface SettingsContextValue {
  settings: Settings;
  /** False until the saved blob has hydrated from localStorage. */
  ready: boolean;
  setVoice: (patch: Partial<VoiceSettings>) => void;
  setCooking: (patch: Partial<CookingSettings>) => void;
  setAi: (patch: Partial<AiSettings>) => void;
  setAppearance: (patch: Partial<AppearanceSettings>) => void;
  setFeedback: (patch: Partial<FeedbackSettings>) => void;
  reset: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSettings(loadSettings());
    setReady(true);
  }, []);

  // Apply appearance settings to the document root so they affect everything.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    el.dataset.textSize = settings.appearance.textSize;
    el.dataset.reduceMotion = settings.appearance.reduceMotion ? "true" : "false";
  }, [settings.appearance.textSize, settings.appearance.reduceMotion]);

  const update = useCallback((mut: (s: Settings) => Settings) => {
    setSettings((prev) => {
      const next = mut(prev);
      saveSettings(next);
      return next;
    });
  }, []);

  const setVoice = useCallback(
    (patch: Partial<VoiceSettings>) =>
      update((s) => ({ ...s, voice: { ...s.voice, ...patch } })),
    [update],
  );
  const setCooking = useCallback(
    (patch: Partial<CookingSettings>) =>
      update((s) => ({ ...s, cooking: { ...s.cooking, ...patch } })),
    [update],
  );
  const setAi = useCallback(
    (patch: Partial<AiSettings>) =>
      update((s) => ({ ...s, ai: { ...s.ai, ...patch } })),
    [update],
  );
  const setAppearance = useCallback(
    (patch: Partial<AppearanceSettings>) =>
      update((s) => ({ ...s, appearance: { ...s.appearance, ...patch } })),
    [update],
  );
  const setFeedback = useCallback(
    (patch: Partial<FeedbackSettings>) =>
      update((s) => ({ ...s, feedback: { ...s.feedback, ...patch } })),
    [update],
  );
  const reset = useCallback(
    () => update(() => ({ ...DEFAULT_SETTINGS })),
    [update],
  );

  return (
    <SettingsContext.Provider
      value={{ settings, ready, setVoice, setCooking, setAi, setAppearance, setFeedback, reset }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used inside <SettingsProvider>");
  }
  return ctx;
}
