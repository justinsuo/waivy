/**
 * App-wide user settings persisted to `srf:settings`.
 *
 * NOTE: region + per-ingredient price overrides are deliberately NOT stored
 * here — they live in `srf:location` / `srf:price-overrides` via
 * `lib/pricing/locationStorage`, and haptics lives in `srf:haptics-enabled`
 * via `lib/haptics`. The settings page reads/writes those through their
 * existing modules so there's a single source of truth.
 */

import type { DietTag } from "@/lib/types";
import type { EquipmentProfile } from "@/lib/equipmentFilters";
import type { VoiceGender } from "@/lib/tts";

export interface VoiceSettings {
  /** Master "Voice guidance" toggle. */
  enabled: boolean;
  /** Use the premium (AI, worker) voice when available. */
  preferPremium: boolean;
  /** Gender group for the premium voice picker (approximate). */
  gender: VoiceGender;
  /** Selected premium voice id (e.g. "nova"). */
  premiumVoiceId: string;
  /** Selected system voice URI, or null for the browser default. */
  systemVoiceURI: string | null;
  /** Speech rate 0.5–2.0. */
  rate: number;
}

export interface CookingSettings {
  diet: DietTag[];
  equipmentProfile: EquipmentProfile;
  servings: number;
  budgetPerServing: number;
}

export interface AiSettings {
  /** User master switch for AI. Effective AI = this && a key is configured. */
  enabled: boolean;
  /** AI Chef default landing mode. */
  chefMode: "quick" | "full";
  /** Allow recipe image generation (costs + uses the localStorage image cap). */
  recipeImages: boolean;
  /** Show the floating Pesto chat assistant. */
  pestoChat: boolean;
}

export interface AppearanceSettings {
  textSize: "default" | "large" | "xlarge";
  /** Color theme. "system" follows the OS prefers-color-scheme. */
  theme: "system" | "light" | "dark";
  /** Manual reduce-motion, complements the prefers-reduced-motion media query. */
  reduceMotion: boolean;
}

export interface FeedbackSettings {
  /** Play a short sound when a cooking timer ends. */
  timerSound: boolean;
}

export interface Settings {
  version: number;
  voice: VoiceSettings;
  cooking: CookingSettings;
  ai: AiSettings;
  appearance: AppearanceSettings;
  feedback: FeedbackSettings;
}

export const SETTINGS_VERSION = 1;

export const DEFAULT_SETTINGS: Settings = {
  version: SETTINGS_VERSION,
  voice: {
    enabled: true,
    preferPremium: true,
    gender: "female",
    premiumVoiceId: "nova",
    systemVoiceURI: null,
    rate: 1,
  },
  cooking: {
    diet: [],
    equipmentProfile: "any",
    servings: 2,
    budgetPerServing: 3,
  },
  ai: {
    enabled: true,
    chefMode: "quick",
    recipeImages: true,
    pestoChat: true,
  },
  appearance: {
    textSize: "default",
    theme: "light",
    reduceMotion: false,
  },
  feedback: {
    timerSound: true,
  },
};
