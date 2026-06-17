"use client";

import { Type, Wind } from "lucide-react";
import { useSettings } from "@/lib/settings/SettingsStore";
import { Toggle } from "@/components/ui/Toggle";
import { SelectablePill } from "@/components/ui/SelectablePill";
import { SettingsSection, SettingRow } from "./parts";
import type { AppearanceSettings } from "@/lib/settings/types";

const SIZES: { id: AppearanceSettings["textSize"]; label: string }[] = [
  { id: "default", label: "Default" },
  { id: "large", label: "Large" },
  { id: "xlarge", label: "Extra large" },
];

export function AppearanceSection() {
  const { settings, setAppearance } = useSettings();
  const ap = settings.appearance;

  return (
    <SettingsSection
      id="appearance"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <Type size={11} /> Appearance & accessibility
        </span>
      }
      title="Make it comfortable to read."
      description="Scale the whole app up, and calm motion if animations bother you."
      tone="indigo"
    >
      <SettingRow
        icon={<Type size={18} />}
        iconClass="bg-indigo-100 text-indigo-700"
        title="Text size"
        description="Scales every screen proportionally. Takes effect immediately."
      >
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Text size">
          {SIZES.map((s) => (
            <SelectablePill
              key={s.id}
              active={ap.textSize === s.id}
              ariaSemantics="checked"
              showCheck={false}
              onClick={() => setAppearance({ textSize: s.id })}
            >
              {s.label}
            </SelectablePill>
          ))}
        </div>
      </SettingRow>

      <SettingRow
        icon={<Wind size={18} />}
        iconClass="bg-sky-100 text-sky-700"
        title="Reduce motion"
        description="Turn off hover lifts, slides, and shimmer. This adds to your system's reduce-motion setting — you don't need both on."
        control={
          <Toggle
            label="Reduce motion"
            checked={ap.reduceMotion}
            onChange={(next) => setAppearance({ reduceMotion: next })}
          />
        }
      />
    </SettingsSection>
  );
}
