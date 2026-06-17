/**
 * Voice catalogs + gender helpers.
 *
 * PREMIUM voices are OpenAI's speech voices. OpenAI does NOT publish a gender
 * for them, so the `gender` field here is an APPROXIMATE, developer-tunable
 * grouping purely to organize the picker — users confirm by ear via Preview.
 * Tweak freely if a voice sounds different to you.
 */

import type { PremiumVoice, SystemVoice, VoiceGender } from "./types";

/** Default premium voice — warm, clear, friendly. Mirrors the worker default. */
export const DEFAULT_PREMIUM_VOICE = "nova";

/** Short, friendly line spoken by the per-voice Preview button. */
export const VOICE_SAMPLE_LINE =
  "Hi! I'm your Waivy cooking guide. Let's make something delicious together.";

/** User-facing disclosure shown wherever the premium voice is active. */
export const AI_VOICE_DISCLOSURE = "Voice is AI-generated";

/**
 * All 13 OpenAI speech voices grouped by approximate gender. gpt-4o-mini-tts
 * supports the full set; tts-1/tts-1-hd support the subset without
 * verse/marin/cedar (handled server-side, which falls back to the default).
 */
export const PREMIUM_VOICES: PremiumVoice[] = [
  // ── Female-leaning ──
  { id: "nova", label: "Nova", gender: "female", description: "Warm, friendly — the default." },
  { id: "shimmer", label: "Shimmer", gender: "female", description: "Soft and gentle." },
  { id: "coral", label: "Coral", gender: "female", description: "Bright and upbeat." },
  { id: "sage", label: "Sage", gender: "female", description: "Calm and measured." },
  { id: "marin", label: "Marin", gender: "female", description: "Natural, high-fidelity." },
  // ── Male-leaning ──
  { id: "onyx", label: "Onyx", gender: "male", description: "Deep and warm." },
  { id: "echo", label: "Echo", gender: "male", description: "Smooth and even." },
  { id: "ash", label: "Ash", gender: "male", description: "Clear and confident." },
  { id: "ballad", label: "Ballad", gender: "male", description: "Gentle, expressive." },
  { id: "cedar", label: "Cedar", gender: "male", description: "Natural, high-fidelity." },
  // ── Neutral ──
  { id: "alloy", label: "Alloy", gender: "neutral", description: "Balanced and even." },
  { id: "fable", label: "Fable", gender: "neutral", description: "Expressive, storytelling." },
  { id: "verse", label: "Verse", gender: "neutral", description: "Versatile and lively." },
];

const PREMIUM_BY_ID = new Map(PREMIUM_VOICES.map((v) => [v.id, v]));

export function isPremiumVoiceId(id: string | null | undefined): boolean {
  return !!id && PREMIUM_BY_ID.has(id);
}

export function getPremiumVoice(id: string): PremiumVoice | undefined {
  return PREMIUM_BY_ID.get(id);
}

/** First premium voice in a gender group (used when switching gender). */
export function firstPremiumOfGender(gender: VoiceGender): PremiumVoice {
  return PREMIUM_VOICES.find((v) => v.gender === gender) ?? PREMIUM_VOICES[0];
}

// ── System (browser) voice gender inference ───────────────────────────────
// The Web Speech API exposes no gender field, so we infer from explicit name
// markers first, then a small curated list of well-known voice names. When we
// can't tell, we return "unknown" and the picker shows the raw voice instead
// of hiding it.

const FEMALE_NAMES = new Set([
  "samantha", "victoria", "karen", "moira", "tessa", "fiona", "veena",
  "kate", "serena", "allison", "ava", "susan", "zoe", "joana", "google uk english female",
  "google us english", "zira", "hazel", "catherine", "linda", "heather",
]);
const MALE_NAMES = new Set([
  "daniel", "alex", "fred", "tom", "aaron", "arthur", "oliver", "rishi",
  "google uk english male", "david", "mark", "george", "james", "ryan",
]);

export function inferGender(name: string): VoiceGender | "unknown" {
  const n = name.toLowerCase();
  if (/\bfemale\b|\bwoman\b/.test(n)) return "female";
  if (/\bmale\b|\bman\b/.test(n)) return "male";
  for (const f of FEMALE_NAMES) if (n.includes(f)) return "female";
  for (const m of MALE_NAMES) if (n.includes(m)) return "male";
  return "unknown";
}

/**
 * Read + normalize the browser's voices. Prefers English voices, sorts the
 * default first. Returns [] on SSR or when speechSynthesis is unavailable.
 */
export function readSystemVoices(): SystemVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  let raw: SpeechSynthesisVoice[] = [];
  try {
    raw = window.speechSynthesis.getVoices();
  } catch {
    return [];
  }
  const mapped: SystemVoice[] = raw.map((v) => ({
    voiceURI: v.voiceURI,
    name: v.name,
    lang: v.lang,
    gender: inferGender(v.name),
    isDefault: v.default,
  }));
  // English voices first, then default first within that, then alphabetical.
  return mapped.sort((a, b) => {
    const aEn = a.lang.toLowerCase().startsWith("en") ? 0 : 1;
    const bEn = b.lang.toLowerCase().startsWith("en") ? 0 : 1;
    if (aEn !== bEn) return aEn - bEn;
    if (a.isDefault !== b.isDefault) return a.isDefault ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}
