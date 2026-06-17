/**
 * Tiered text-to-speech for Waivy's guided cooking.
 *
 *   import { tts } from "@/lib/tts";
 *   tts.speak("Heat the pan over medium.", { voiceId: "nova", rate: 1 });
 *
 * See engine.ts for tier-selection + fallback behavior, voices.ts for the
 * voice catalog + the AI-voice disclosure string.
 */
export * as tts from "./engine";
export {
  PREMIUM_VOICES,
  DEFAULT_PREMIUM_VOICE,
  VOICE_SAMPLE_LINE,
  AI_VOICE_DISCLOSURE,
  isPremiumVoiceId,
  getPremiumVoice,
  firstPremiumOfGender,
  inferGender,
  readSystemVoices,
} from "./voices";
export type {
  VoiceTier,
  VoiceGender,
  PremiumVoice,
  SystemVoice,
  VoiceCatalog,
  SpeakOptions,
  SpeakingState,
} from "./types";
