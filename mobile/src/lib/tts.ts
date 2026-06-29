/**
 * Text-to-speech for the guided cooking tutorial.
 *
 * Uses ElevenLabs (real, human neural voice) when an API key is configured;
 * falls back to the OS voice (expo-speech) otherwise or on any error/offline.
 * Generated audio is cached per (voice, text) in the cache dir, so re-reading a
 * step — or stepping back to one — is instant and free.
 *
 * Key: EXPO_PUBLIC_ELEVENLABS_API_KEY (build-time) or a runtime override stored
 * under "srf:elevenlabs-key". Voice: "srf:tts-voice" (defaults to a warm,
 * clear instructional voice).
 */
import type { AudioPlayer } from "expo-audio";
import * as FileSystem from "expo-file-system/legacy";
import * as Speech from "expo-speech";
import { kv } from "@shared/platform/kv";

// Resolve the native audio module lazily + defensively: a build that lacks
// ExpoAudio (or a link failure) must degrade to the OS voice, never crash the
// whole app on import. Cached after the first attempt.
let _audioMod: typeof import("expo-audio") | null = null;
let _audioTried = false;
function audioMod(): typeof import("expo-audio") | null {
  if (_audioTried) return _audioMod;
  _audioTried = true;
  try {
    _audioMod = require("expo-audio");
  } catch {
    _audioMod = null;
  }
  return _audioMod;
}

const EL_BASE = "https://api.elevenlabs.io/v1/text-to-speech";
// flash v2.5 = lowest latency + natural — ideal for step-by-step narration.
const EL_MODEL = "eleven_flash_v2_5";
// Default voice "Rachel" — warm, clear, friendly for cooking instructions.
const DEFAULT_VOICE = "21m00Tcm4TlvDq8ikWAM";
const KEY_PREF = "srf:elevenlabs-key";
const VOICE_PREF = "srf:tts-voice";

function getKey(): string {
  try {
    const fromSettings = kv().getItem(KEY_PREF);
    if (fromSettings) return fromSettings;
  } catch {}
  return process.env.EXPO_PUBLIC_ELEVENLABS_API_KEY ?? "";
}
function getVoice(): string {
  try {
    return kv().getItem(VOICE_PREF) || DEFAULT_VOICE;
  } catch {
    return DEFAULT_VOICE;
  }
}
/** True when a premium (ElevenLabs) voice is available; else we use the OS voice. */
export function premiumVoiceAvailable(): boolean {
  return getKey().length > 0 && audioMod() != null;
}

let player: AudioPlayer | null = null;
let token = 0; // bumped on every speak()/stop() so stale async work is dropped
let audioModeReady = false;

async function ensureAudioMode(): Promise<void> {
  if (audioModeReady) return;
  const A = audioMod();
  if (!A) return;
  try {
    // Play through the speaker even when the ringer switch is silent — a cook
    // following along shouldn't have to fiddle with the mute switch.
    await A.setAudioModeAsync({ playsInSilentMode: true });
    audioModeReady = true;
  } catch {}
}

function cacheFile(voice: string, text: string): string {
  let h = 0;
  const s = voice + "|" + text;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) | 0;
  return `${FileSystem.cacheDirectory}tts_${voice}_${(h >>> 0).toString(36)}.mp3`;
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const r = String(reader.result || "");
      resolve(r.includes(",") ? r.split(",")[1] : r);
    };
    reader.readAsDataURL(blob);
  });
}

/** Returns a local file:// path to the mp3, fetching+caching it if needed; null on failure. */
async function elevenLabsAudio(text: string, voice: string, key: string): Promise<string | null> {
  const file = cacheFile(voice, text);
  try {
    const info = await FileSystem.getInfoAsync(file);
    if (info.exists && (info as { size?: number }).size) return file;
  } catch {}
  const res = await fetch(`${EL_BASE}/${voice}?output_format=mp3_44100_128`, {
    method: "POST",
    headers: { "xi-api-key": key, "Content-Type": "application/json", Accept: "audio/mpeg" },
    body: JSON.stringify({
      text,
      model_id: EL_MODEL,
      voice_settings: { stability: 0.45, similarity_boost: 0.8, style: 0.0, use_speaker_boost: true },
    }),
  });
  if (!res.ok) return null;
  const blob = await res.blob();
  const b64 = await blobToBase64(blob);
  if (!b64) return null;
  await FileSystem.writeAsStringAsync(file, b64, { encoding: FileSystem.EncodingType.Base64 });
  return file;
}

function speakOS(text: string): void {
  try {
    Speech.stop();
  } catch {}
  // Slightly slower than default reads more naturally for instructions.
  Speech.speak(text, { rate: 0.46, pitch: 1.0 });
}

/** Speak a line — premium ElevenLabs voice if configured, else the OS voice. */
export async function speak(text: string): Promise<void> {
  const clean = (text || "").trim();
  if (!clean) return;
  const t = ++token;
  const key = getKey();
  const A = audioMod();
  if (!key || !A) {
    speakOS(clean);
    return;
  }
  try {
    Speech.stop();
  } catch {}
  // Stop any current premium playback before starting the next line.
  try {
    if (player) {
      player.remove();
      player = null;
    }
  } catch {}
  try {
    const file = await elevenLabsAudio(clean.slice(0, 900), getVoice(), key);
    if (t !== token) return; // a newer speak()/stop() superseded us
    if (!file) {
      speakOS(clean);
      return;
    }
    await ensureAudioMode();
    if (t !== token) return;
    player = A.createAudioPlayer({ uri: file });
    player.play();
  } catch {
    if (t === token) speakOS(clean);
  }
}

/** Stop any in-progress speech (premium or OS). */
export function stop(): void {
  token++;
  try {
    Speech.stop();
  } catch {}
  try {
    if (player) {
      player.pause();
      player.remove();
      player = null;
    }
  } catch {}
}
