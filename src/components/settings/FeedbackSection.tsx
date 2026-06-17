"use client";

import { useEffect, useState } from "react";
import { BellRing, Vibrate } from "lucide-react";
import { useSettings } from "@/lib/settings/SettingsStore";
import { Toggle } from "@/components/ui/Toggle";
import { SettingsSection, SettingRow } from "./parts";
import {
  isHapticsEnabled,
  setHapticsEnabled,
  hapticSuccess,
} from "@/lib/haptics";

export function FeedbackSection() {
  const { settings, setFeedback } = useSettings();
  const f = settings.feedback;

  const [haptics, setHaptics] = useState<boolean | null>(null);
  const [vibrateSupported, setVibrateSupported] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVibrateSupported(
      typeof navigator !== "undefined" && typeof navigator.vibrate === "function",
    );
    setHaptics(isHapticsEnabled());
  }, []);

  function toggleHaptics(next: boolean) {
    setHapticsEnabled(next);
    setHaptics(next);
    if (next) hapticSuccess();
  }

  return (
    <SettingsSection
      id="feedback"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <BellRing size={11} /> Timers & feedback
        </span>
      }
      title="Nudges while you cook."
      description="Sound and vibration cues. Both are optional and stored on this device."
      tone="amber"
    >
      <SettingRow
        icon={<BellRing size={18} />}
        iconClass="bg-amber-100 text-amber-700"
        title="Timer end sound"
        description="Play a short chime when a cooking timer finishes."
        control={
          <Toggle
            label="Timer end sound"
            checked={f.timerSound}
            onChange={(next) => setFeedback({ timerSound: next })}
          />
        }
      />

      <SettingRow
        icon={<Vibrate size={18} />}
        iconClass="bg-violet-100 text-violet-700"
        title="Haptic feedback"
        description={
          vibrateSupported
            ? "Tiny vibration on button presses. Android Chrome / Firefox only."
            : "Your browser doesn't support vibration (desktop and iOS Safari don't), so this does nothing here."
        }
        control={
          <Toggle
            label="Haptic feedback"
            checked={haptics === true}
            disabled={haptics === null || !vibrateSupported}
            onChange={toggleHaptics}
          />
        }
      />
    </SettingsSection>
  );
}
