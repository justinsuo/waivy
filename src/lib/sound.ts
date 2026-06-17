"use client";

/**
 * Tiny WebAudio chime for timer-end feedback. No asset to download. Callers
 * gate this on the user's `feedback.timerSound` setting. Best-effort: if
 * WebAudio is blocked or unavailable it silently no-ops.
 */

let ctx: AudioContext | null = null;

type WebkitWindow = Window & { webkitAudioContext?: typeof AudioContext };

export function playTimerEndSound(): void {
  if (typeof window === "undefined") return;
  try {
    const AC =
      window.AudioContext ?? (window as WebkitWindow).webkitAudioContext;
    if (!AC) return;
    if (!ctx) ctx = new AC();
    const c = ctx;
    if (c.state === "suspended") void c.resume();
    const now = c.currentTime;
    // Two-note rising chime — gentle, not alarming.
    [880, 1320].forEach((freq, i) => {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = now + i * 0.18;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
      osc.connect(gain).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.42);
    });
  } catch {
    /* ignore — audio is a nicety, never a hard dependency */
  }
}
