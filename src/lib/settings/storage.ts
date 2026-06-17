"use client";

/**
 * Load/save for `srf:settings`. SSR-safe (returns defaults when window is
 * undefined), try/catch wrapped, and merge-forward so a settings blob saved by
 * an older build never breaks — any field the old blob is missing falls back
 * to the current default.
 */

import { kv } from "@shared/platform/kv";
import { DEFAULT_SETTINGS, SETTINGS_VERSION, type Settings } from "./types";

const KEY = "srf:settings";

/** Deep-ish merge: per-section spread over defaults so missing keys fill in. */
function mergeForward(parsed: unknown): Settings {
  if (!parsed || typeof parsed !== "object") return DEFAULT_SETTINGS;
  const p = parsed as Partial<Settings>;
  return {
    version: SETTINGS_VERSION,
    voice: { ...DEFAULT_SETTINGS.voice, ...(p.voice ?? {}) },
    cooking: { ...DEFAULT_SETTINGS.cooking, ...(p.cooking ?? {}) },
    ai: { ...DEFAULT_SETTINGS.ai, ...(p.ai ?? {}) },
    appearance: { ...DEFAULT_SETTINGS.appearance, ...(p.appearance ?? {}) },
    feedback: { ...DEFAULT_SETTINGS.feedback, ...(p.feedback ?? {}) },
  };
}

export function loadSettings(): Settings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = kv().getItem(KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return mergeForward(JSON.parse(raw));
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: Settings): void {
  if (typeof window === "undefined") return;
  try {
    kv().setItem(KEY, JSON.stringify(settings));
  } catch {
    // ignore quota errors — settings are tiny, but never throw on persist
  }
}

export const SETTINGS_KEY = KEY;
