"use client";

import { useEffect, useState } from "react";
import { Sparkles, Zap, ImageIcon, MessageCircle, Info } from "lucide-react";
import { useSettings } from "@/lib/settings/SettingsStore";
import { Toggle } from "@/components/ui/Toggle";
import { SelectablePill } from "@/components/ui/SelectablePill";
import { isAiEnabled } from "@/lib/anthropic";
import { SettingsSection, SettingRow } from "./parts";

export function AiSection() {
  const { settings, setAi } = useSettings();
  const a = settings.ai;
  const [keyConfigured, setKeyConfigured] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setKeyConfigured(isAiEnabled());
  }, []);

  const aiOff = !keyConfigured;

  return (
    <SettingsSection
      id="ai"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <Sparkles size={11} /> AI features
        </span>
      }
      title="How much AI you want."
      description="AI Chef, Pesto chat, and image generation all run on AI. Turn the whole thing off, or tune each piece."
      tone="violet"
    >
      {aiOff && (
        <div className="flex items-start gap-2.5 rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 px-4 py-3">
          <Info size={16} className="mt-0.5 flex-none text-amber-600 dark:text-amber-400" />
          <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-300">
            No AI key is configured on this build, so AI features are offline
            regardless of these switches. The rest of Waivy — recipes, pantry
            matching, pricing, grocery — works fully.
          </p>
        </div>
      )}

      <SettingRow
        icon={<Sparkles size={18} />}
        iconClass="bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
        title="AI features"
        description="Master switch for AI Chef, Pesto, and image generation."
        control={
          <Toggle
            label="AI features master switch"
            checked={a.enabled}
            disabled={aiOff}
            onChange={(next) => setAi({ enabled: next })}
          />
        }
      />

      <SettingRow
        icon={<Zap size={18} />}
        iconClass="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300"
        title="AI Chef default mode"
        description="Quick gives four fast options to pick from. Full does one detailed recipe with a longer write-up."
      >
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="AI Chef default mode">
          {(["quick", "full"] as const).map((mode) => (
            <SelectablePill
              key={mode}
              active={a.chefMode === mode}
              ariaSemantics="checked"
              showCheck={false}
              disabled={aiOff || !a.enabled}
              onClick={() => setAi({ chefMode: mode })}
            >
              {mode === "quick" ? "Quick — 4 options" : "Full — 1 detailed"}
            </SelectablePill>
          ))}
        </div>
      </SettingRow>

      <SettingRow
        icon={<ImageIcon size={18} />}
        iconClass="bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300"
        title="Generate recipe images"
        description="Create an AI photo for recipes that don't have one. Costs a little per image and stored images count toward the ~6 MB on-device image cap."
        control={
          <Toggle
            label="Generate recipe images"
            checked={a.recipeImages}
            disabled={aiOff || !a.enabled}
            onChange={(next) => setAi({ recipeImages: next })}
          />
        }
      />

      <SettingRow
        icon={<MessageCircle size={18} />}
        iconClass="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
        title="Pesto chat assistant"
        description="The floating chat button that answers cooking questions. Hide it if you'd rather not have it on screen."
        control={
          <Toggle
            label="Pesto chat assistant"
            checked={a.pestoChat}
            disabled={aiOff || !a.enabled}
            onChange={(next) => setAi({ pestoChat: next })}
          />
        }
      />
    </SettingsSection>
  );
}
