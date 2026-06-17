/**
 * Shared types for the tiered text-to-speech engine.
 *
 * Two tiers:
 *  - "premium": OpenAI speech via the Cloudflare Worker `/tts` endpoint. The
 *    really-good, natural voice. Requires NEXT_PUBLIC_WORKER_URL to be set.
 *  - "system": the browser's built-in Web Speech API (`speechSynthesis`).
 *    Always free, works offline, lower fidelity. The graceful fallback.
 *
 * If neither is available the engine reports `isAvailable() === false` and the
 * UI hides voice guidance entirely.
 */

export type VoiceTier = "premium" | "system";

/**
 * Approximate gender grouping. OpenAI does not officially assign a gender to
 * its voices, so this is a developer-tunable mapping used only to organize the
 * picker — users confirm by ear via the Preview button. Treat as a hint.
 */
export type VoiceGender = "female" | "male" | "neutral";

/** A premium (OpenAI) voice option. */
export interface PremiumVoice {
  /** OpenAI voice id, e.g. "nova". */
  id: string;
  label: string;
  gender: VoiceGender;
  description: string;
}

/** A system (browser `speechSynthesis`) voice, normalized for the picker. */
export interface SystemVoice {
  /** `SpeechSynthesisVoice.voiceURI` — stable per-browser id. */
  voiceURI: string;
  name: string;
  lang: string;
  /** Best-effort inference; "unknown" when no marker is found. */
  gender: VoiceGender | "unknown";
  isDefault: boolean;
}

export interface VoiceCatalog {
  premium: PremiumVoice[];
  system: SystemVoice[];
}

export interface SpeakOptions {
  /** Premium voice id (e.g. "nova") OR a system `voiceURI`. */
  voiceId?: string;
  /** Force a tier; otherwise inferred from voiceId + availability. */
  tier?: VoiceTier;
  /** 0.5–2.0. Maps to OpenAI `speed` and `speechSynthesis` `rate`. */
  rate?: number;
  /** Prefer premium when available. Default true. */
  preferPremium?: boolean;
  /** Premium-only tone steering (gpt-4o-mini-tts `instructions`). */
  instructions?: string;
  /** Abort an in-flight synthesis/playback. */
  signal?: AbortSignal;
  /** Fires once audio actually starts, with the tier that won. */
  onStart?: (tier: VoiceTier) => void;
}

export interface SpeakingState {
  speaking: boolean;
  paused: boolean;
  tier: VoiceTier | null;
}
