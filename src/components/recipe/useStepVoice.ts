"use client";

/**
 * Voice guidance for guided cooking. Auto-reads the current step (plus its
 * beginner cues) on advance, prefetches the next step's premium audio, and
 * exposes replay / pause / stop. All gated on the user's voice settings.
 *
 * Autoplay: the auto-read effect fires when `step` changes — which always
 * happens as a result of a user tap (Start cooking → mount; Next/Previous →
 * re-run) — so playback always begins inside a user gesture's activation
 * window, satisfying the browser autoplay policy.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { useSettings } from "@/lib/settings/SettingsStore";
import { tts } from "@/lib/tts";
import { composeStepSpeech, COOKING_VOICE_INSTRUCTIONS } from "@/lib/tts/cooking";
import type { Recipe } from "@/lib/types";

export interface StepVoice {
  available: boolean;
  enabled: boolean;
  usingPremium: boolean;
  speaking: boolean;
  paused: boolean;
  replay: () => void;
  togglePause: () => void;
  stop: () => void;
  setEnabled: (next: boolean) => void;
}

export function useStepVoice(recipe: Recipe, step: number, total: number): StepVoice {
  const { settings, setVoice } = useSettings();
  const v = settings.voice;

  const [available, setAvailable] = useState(false);
  const [premiumAvailable, setPremiumAvailable] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const seqRef = useRef(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAvailable(tts.isAvailable());
    setPremiumAvailable(tts.isPremiumAvailable());
  }, []);

  const usingPremium = v.preferPremium && premiumAvailable;
  const voiceId = usingPremium ? v.premiumVoiceId : v.systemVoiceURI ?? undefined;
  const instructions = usingPremium ? COOKING_VOICE_INSTRUCTIONS : undefined;

  const speakStep = useCallback(
    (index: number) => {
      if (!v.enabled || !tts.isAvailable()) return;
      const text = composeStepSpeech(recipe, index);
      if (!text) return;
      const mySeq = ++seqRef.current;
      setSpeaking(true);
      setPaused(false);
      void tts
        .speak(text, {
          voiceId,
          rate: v.rate,
          preferPremium: v.preferPremium,
          instructions,
          onStart: () => {
            if (seqRef.current === mySeq) {
              setSpeaking(true);
              setPaused(false);
            }
          },
        })
        .finally(() => {
          if (seqRef.current === mySeq) {
            setSpeaking(false);
            setPaused(false);
          }
        });
    },
    [recipe, voiceId, v.enabled, v.rate, v.preferPremium, instructions],
  );

  // Auto-read the current step on advance, and warm the next step's audio.
  useEffect(() => {
    if (!v.enabled) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    speakStep(step);
    if (step + 1 < total) {
      const nextText = composeStepSpeech(recipe, step + 1);
      if (nextText) {
        void tts.prefetch(nextText, {
          voiceId,
          rate: v.rate,
          preferPremium: v.preferPremium,
          instructions,
        });
      }
    }
    // Re-run only when the step or the master toggle changes — not when rate/
    // voice change mid-step (those apply to the next step).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, v.enabled]);

  // Stop audio when the cooking screen unmounts.
  useEffect(() => () => tts.stop(), []);

  const replay = useCallback(() => speakStep(step), [speakStep, step]);

  const togglePause = useCallback(() => {
    const st = tts.getSpeakingState();
    if (st.paused) {
      tts.resume();
      setSpeaking(true);
      setPaused(false);
    } else {
      tts.pause();
      setSpeaking(false);
      setPaused(true);
    }
  }, []);

  const stop = useCallback(() => {
    tts.stop();
    setSpeaking(false);
    setPaused(false);
  }, []);

  const setEnabled = useCallback(
    (next: boolean) => {
      if (!next) tts.stop();
      setVoice({ enabled: next });
    },
    [setVoice],
  );

  return {
    available,
    enabled: v.enabled,
    usingPremium,
    speaking,
    paused,
    replay,
    togglePause,
    stop,
    setEnabled,
  };
}
