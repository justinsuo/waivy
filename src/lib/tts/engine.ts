"use client";

/**
 * Tiered TTS engine. Public API: speak / stop / pause / resume /
 * getSpeakingState / listVoices / previewVoice / prefetch, plus availability
 * helpers.
 *
 * Tier selection (per utterance):
 *  1. premium (OpenAI via worker) when the worker is configured, premium is
 *     preferred, and a premium voice is selected;
 *  2. otherwise the browser's system voice;
 *  3. if a premium request fails mid-utterance, we fall back to the system
 *     voice for that one utterance — no crash, no double-speak;
 *  4. if neither premium nor speechSynthesis exists, speak() is a silent no-op
 *     and isAvailable() is false (callers hide voice UI).
 *
 * Autoplay policy: callers must invoke speak()/previewVoice() from within a
 * user gesture (a tap). The engine never tries to start audio on its own.
 */

import { isWorkerConfigured, workerUrl } from "@/lib/workerClient";
import { cacheKey, getCachedAudio, putCachedAudio } from "./cache";
import {
  DEFAULT_PREMIUM_VOICE,
  PREMIUM_VOICES,
  isPremiumVoiceId,
  readSystemVoices,
} from "./voices";
import type { SpeakOptions, SpeakingState, VoiceCatalog, VoiceTier } from "./types";

// ── availability ──────────────────────────────────────────────────────────
export function isPremiumAvailable(): boolean {
  return isWorkerConfigured();
}
export function isSystemAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}
/** True when ANY tier can speak. When false, callers hide voice guidance. */
export function isAvailable(): boolean {
  return isPremiumAvailable() || isSystemAvailable();
}

export function listVoices(): VoiceCatalog {
  return { premium: PREMIUM_VOICES, system: readSystemVoices() };
}

// ── internal playback state ────────────────────────────────────────────────
// A monotonically increasing token invalidates older async work the moment a
// new speak()/stop() happens — this is what prevents double-speak and races.
let token = 0;
let currentAudio: HTMLAudioElement | null = null;
let currentObjectUrl: string | null = null;
let activeTier: VoiceTier | null = null;

function clampRate(r: number): number {
  if (!Number.isFinite(r)) return 1;
  return Math.min(2, Math.max(0.5, r));
}

function resolveTier(
  voiceId: string | undefined,
  explicit: VoiceTier | undefined,
  preferPremium: boolean,
): VoiceTier {
  if (explicit) {
    return explicit === "premium" && isPremiumAvailable() ? "premium" : "system";
  }
  if (preferPremium && isPremiumAvailable() && isPremiumVoiceId(voiceId)) {
    return "premium";
  }
  return "system";
}

/** Split long text into sentence-grouped chunks under the model's char cap. */
function chunkText(text: string, limit = 600): string[] {
  if (text.length <= limit) return [text];
  const sentences = text.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g) ?? [text];
  const chunks: string[] = [];
  let cur = "";
  for (const s of sentences) {
    if ((cur + s).length > limit && cur) {
      chunks.push(cur.trim());
      cur = "";
    }
    cur += s;
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

// ── premium (worker → OpenAI) ──────────────────────────────────────────────
async function fetchChunkBlob(
  chunk: string,
  voice: string,
  rate: number,
  instructions: string | undefined,
  signal: AbortSignal | undefined,
): Promise<Blob> {
  const key = cacheKey(chunk, voice, rate);
  const cached = await getCachedAudio(key);
  if (cached) return cached;

  const res = await fetch(`${workerUrl()}/tts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: chunk,
      voice,
      speed: rate,
      format: "mp3",
      ...(instructions ? { instructions } : {}),
    }),
    signal,
  });
  if (!res.ok) throw new Error(`tts ${res.status}`);
  const blob = await res.blob();
  // Defensive: a JSON error body would have a tiny/zero audio length.
  if (blob.size < 64) throw new Error("tts empty audio");
  void putCachedAudio(key, blob);
  return blob;
}

function playBlob(blob: Blob, myToken: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (myToken !== token) return resolve();
    const url = URL.createObjectURL(blob);
    currentObjectUrl = url;
    const audio = new Audio(url);
    currentAudio = audio;
    const cleanup = () => {
      if (currentObjectUrl === url) {
        URL.revokeObjectURL(url);
        currentObjectUrl = null;
      }
    };
    audio.onended = () => {
      cleanup();
      resolve();
    };
    audio.onerror = () => {
      cleanup();
      reject(new Error("audio playback error"));
    };
    // play() rejects if the browser blocks autoplay (no gesture) — surface it
    // so the caller can fall back to the system voice.
    audio.play().catch((e) => {
      cleanup();
      reject(e instanceof Error ? e : new Error("audio play blocked"));
    });
  });
}

async function speakPremium(
  text: string,
  opts: SpeakOptions,
  rate: number,
  myToken: number,
): Promise<void> {
  const voice = isPremiumVoiceId(opts.voiceId) ? opts.voiceId! : DEFAULT_PREMIUM_VOICE;
  const chunks = chunkText(text);
  let started = false;
  for (const chunk of chunks) {
    if (myToken !== token) return;
    const blob = await fetchChunkBlob(chunk, voice, rate, opts.instructions, opts.signal);
    if (myToken !== token) return;
    if (!started) {
      started = true;
      opts.onStart?.("premium");
    }
    await playBlob(blob, myToken);
  }
}

// ── system (Web Speech) ────────────────────────────────────────────────────
function pickSystemVoice(voiceId: string | undefined): SpeechSynthesisVoice | null {
  if (!isSystemAvailable()) return null;
  const all = window.speechSynthesis.getVoices();
  if (voiceId) {
    const match = all.find((v) => v.voiceURI === voiceId);
    if (match) return match;
  }
  // Best English default.
  return (
    all.find((v) => v.default && v.lang.toLowerCase().startsWith("en")) ??
    all.find((v) => v.lang.toLowerCase().startsWith("en")) ??
    all[0] ??
    null
  );
}

function speakSystem(
  text: string,
  opts: SpeakOptions,
  rate: number,
  myToken: number,
): Promise<void> {
  return new Promise((resolve) => {
    if (!isSystemAvailable() || myToken !== token) return resolve();
    const synth = window.speechSynthesis;
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = rate;
    const voice = pickSystemVoice(opts.voiceId);
    if (voice) {
      utt.voice = voice;
      utt.lang = voice.lang;
    }
    let started = false;
    utt.onstart = () => {
      if (!started) {
        started = true;
        opts.onStart?.("system");
      }
    };
    utt.onend = () => resolve();
    utt.onerror = () => resolve();
    synth.speak(utt);
  });
}

// ── public actions ─────────────────────────────────────────────────────────
/**
 * Speak `text`. Resolves when playback finishes (or is superseded). Stops any
 * current playback first. Call from a user gesture.
 */
export async function speak(text: string, opts: SpeakOptions = {}): Promise<void> {
  stop();
  const clean = text.trim();
  if (!clean || !isAvailable()) return;

  const myToken = ++token;
  const rate = clampRate(opts.rate ?? 1);
  const preferPremium = opts.preferPremium ?? true;
  const tier = resolveTier(opts.voiceId, opts.tier, preferPremium);
  activeTier = tier;

  try {
    if (tier === "premium") {
      try {
        await speakPremium(clean, opts, rate, myToken);
      } catch {
        // Premium failed for THIS utterance — fall back to system voice once,
        // unless a newer speak()/stop() already superseded us.
        if (myToken === token && isSystemAvailable()) {
          await speakSystem(clean, opts, rate, myToken);
        }
      }
    } else {
      await speakSystem(clean, opts, rate, myToken);
    }
  } finally {
    if (myToken === token) {
      activeTier = null;
      currentAudio = null;
    }
  }
}

/** Pre-synthesize + cache premium audio for `text` without playing it. */
export async function prefetch(text: string, opts: SpeakOptions = {}): Promise<void> {
  const clean = text.trim();
  if (!clean) return;
  const preferPremium = opts.preferPremium ?? true;
  // Only worthwhile when a premium voice is actually selected + reachable.
  if (!preferPremium || !isPremiumAvailable() || !isPremiumVoiceId(opts.voiceId)) {
    return;
  }
  const voice = opts.voiceId!;
  const rate = clampRate(opts.rate ?? 1);
  for (const chunk of chunkText(clean)) {
    const key = cacheKey(chunk, voice, rate);
    if (await getCachedAudio(key)) continue;
    try {
      await fetchChunkBlob(chunk, voice, rate, opts.instructions, opts.signal);
    } catch {
      // Prefetch is best-effort; a miss just means the live request pays for it.
    }
  }
}

/** Stop all playback immediately. Safe to call repeatedly. */
export function stop(): void {
  token++; // invalidate any in-flight speak()
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.src = "";
    } catch {
      /* ignore */
    }
    currentAudio = null;
  }
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = null;
  }
  if (isSystemAvailable()) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      /* ignore */
    }
  }
  activeTier = null;
}

export function pause(): void {
  if (activeTier === "premium" && currentAudio) {
    currentAudio.pause();
  } else if (isSystemAvailable()) {
    try {
      window.speechSynthesis.pause();
    } catch {
      /* ignore */
    }
  }
}

export function resume(): void {
  if (activeTier === "premium" && currentAudio) {
    void currentAudio.play().catch(() => {});
  } else if (isSystemAvailable()) {
    try {
      window.speechSynthesis.resume();
    } catch {
      /* ignore */
    }
  }
}

export function getSpeakingState(): SpeakingState {
  if (activeTier === "premium" && currentAudio) {
    return {
      speaking: !currentAudio.paused,
      paused: currentAudio.paused,
      tier: "premium",
    };
  }
  if (isSystemAvailable()) {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      return { speaking: !synth.paused, paused: synth.paused, tier: "system" };
    }
  }
  return { speaking: false, paused: false, tier: activeTier };
}

/** Speak the short sample line in a given voice (premium id or system URI). */
export async function previewVoice(
  voiceId: string,
  opts: { rate?: number; preferPremium?: boolean; instructions?: string } = {},
): Promise<void> {
  const { VOICE_SAMPLE_LINE } = await import("./voices");
  await speak(VOICE_SAMPLE_LINE, {
    voiceId,
    rate: opts.rate,
    preferPremium: opts.preferPremium,
    instructions: opts.instructions,
    // Explicit tier so previewing a system voice never silently upgrades.
    tier: isPremiumVoiceId(voiceId) ? "premium" : "system",
  });
}
