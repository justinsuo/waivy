"use client";

import { useEffect, useState } from "react";
import { Volume2, Play, Sparkles, Cpu, Info, Loader2 } from "lucide-react";
import { useSettings } from "@/lib/settings/SettingsStore";
import { Toggle } from "@/components/ui/Toggle";
import { Slider } from "@/components/ui/Slider";
import { SelectablePill } from "@/components/ui/SelectablePill";
import { SettingsSection, SettingRow, FieldLabel } from "./parts";
import {
  tts,
  PREMIUM_VOICES,
  AI_VOICE_DISCLOSURE,
  firstPremiumOfGender,
  getPremiumVoice,
  readSystemVoices,
  type VoiceGender,
  type SystemVoice,
} from "@/lib/tts";

const GENDERS: { id: VoiceGender; label: string }[] = [
  { id: "female", label: "Female" },
  { id: "male", label: "Male" },
  { id: "neutral", label: "Neutral" },
];

function rateLabel(rate: number): string {
  if (rate <= 0.75) return "Slower";
  if (rate >= 1.35) return "Faster";
  if (rate >= 1.1) return "Brisk";
  return "Natural";
}

export function VoiceSettingsSection() {
  const { settings, setVoice } = useSettings();
  const v = settings.voice;

  const [premiumAvailable, setPremiumAvailable] = useState(false);
  const [systemAvailable, setSystemAvailable] = useState(false);
  const [systemVoices, setSystemVoices] = useState<SystemVoice[]>([]);
  const [previewing, setPreviewing] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPremiumAvailable(tts.isPremiumAvailable());
    setSystemAvailable(tts.isSystemAvailable());
    const load = () => setSystemVoices(readSystemVoices());
    load();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.addEventListener("voiceschanged", load);
      return () =>
        window.speechSynthesis.removeEventListener("voiceschanged", load);
    }
  }, []);

  const anyVoice = premiumAvailable || systemAvailable;
  // The tier that guided cooking will actually use.
  const usingPremium = v.preferPremium && premiumAvailable;
  const voicesForGender = PREMIUM_VOICES.filter((pv) => pv.gender === v.gender);

  async function preview(id: string) {
    if (previewing) return;
    setPreviewing(id);
    try {
      await tts.previewVoice(id, { rate: v.rate });
    } finally {
      setPreviewing(null);
    }
  }

  function changeGender(g: VoiceGender) {
    const current = getPremiumVoice(v.premiumVoiceId);
    const patch: { gender: VoiceGender; premiumVoiceId?: string } = { gender: g };
    if (!current || current.gender !== g) {
      patch.premiumVoiceId = firstPremiumOfGender(g).id;
    }
    setVoice(patch);
  }

  return (
    <SettingsSection
      id="voice"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <Volume2 size={11} /> Voice & guided cooking
        </span>
      }
      title="Read my recipes out loud."
      description="A natural voice reads each step while you cook, so you can keep your hands on the pan. Premium uses a high-quality AI voice; your browser's built-in voice is the free fallback."
      tone="emerald"
    >
      {!anyVoice ? (
        <SettingRow
          icon={<Info size={18} />}
          iconClass="bg-amber-100 text-amber-700"
          title="Voice guidance isn't available on this browser"
          description="This browser has no speech support and the premium voice service isn't configured, so spoken guidance is turned off. Everything else works normally."
        />
      ) : (
        <>
          {/* Master toggle */}
          <SettingRow
            icon={<Volume2 size={18} />}
            iconClass="bg-emerald-100 text-emerald-700"
            title="Voice guidance"
            description="Read each step aloud automatically while cooking. You can always replay or pause from the cooking screen."
            control={
              <Toggle
                label="Voice guidance"
                checked={v.enabled}
                onChange={(next) => setVoice({ enabled: next })}
              />
            }
          />

          {/* Premium preference */}
          <SettingRow
            icon={<Sparkles size={18} />}
            iconClass="bg-violet-100 text-violet-700"
            title="Use premium voice when available"
            description={
              premiumAvailable
                ? "Premium voices are AI-generated and sound the most natural. They stream from Waivy's voice service and are cached after the first play."
                : "The premium voice service isn't configured on this build, so Waivy uses your device's built-in voice. Everything still works."
            }
            control={
              <Toggle
                label="Use premium voice when available"
                checked={v.preferPremium}
                disabled={!premiumAvailable}
                onChange={(next) => setVoice({ preferPremium: next })}
              />
            }
          />

          {/* AI-voice disclosure — persistent whenever premium is active */}
          {usingPremium && (
            <div className="flex items-start gap-2.5 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3">
              <Sparkles size={16} className="mt-0.5 flex-none text-violet-600" />
              <p className="text-xs leading-relaxed text-violet-900">
                <span className="font-semibold">{AI_VOICE_DISCLOSURE}.</span>{" "}
                The premium voice is synthesized by AI — it is not a recording of
                a real person.
              </p>
            </div>
          )}

          {/* Voice picker — premium (gender → voice) or system fallback */}
          {usingPremium ? (
            <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
              <FieldLabel>Voice type</FieldLabel>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Voice gender">
                {GENDERS.map((g) => (
                  <SelectablePill
                    key={g.id}
                    active={v.gender === g.id}
                    ariaSemantics="checked"
                    showCheck={false}
                    onClick={() => changeGender(g.id)}
                  >
                    {g.label}
                  </SelectablePill>
                ))}
              </div>

              <FieldLabel>
                <span className="mt-4 inline-block">
                  Premium voice{" "}
                  <span className="ml-1 rounded-full bg-violet-100 px-1.5 py-0.5 text-[9px] font-bold text-violet-700">
                    AI
                  </span>
                </span>
              </FieldLabel>
              <ul className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label="Premium voice">
                {voicesForGender.map((pv) => {
                  const selected = v.premiumVoiceId === pv.id;
                  return (
                    <li key={pv.id}>
                      <div
                        className={
                          selected
                            ? "flex items-center gap-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 p-2.5"
                            : "flex items-center gap-2 rounded-xl border border-stone-200 bg-white p-2.5"
                        }
                      >
                        <button
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setVoice({ premiumVoiceId: pv.id })}
                          className="min-w-0 flex-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
                        >
                          <p className="text-sm font-semibold text-stone-900">
                            {pv.label}
                          </p>
                          <p className="truncate text-xs text-stone-500">
                            {pv.description}
                          </p>
                        </button>
                        <button
                          type="button"
                          aria-label={`Preview ${pv.label} voice`}
                          onClick={() => preview(pv.id)}
                          disabled={previewing !== null}
                          className="grid h-9 w-9 flex-none place-items-center rounded-full bg-emerald-600 text-white transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50"
                        >
                          {previewing === pv.id ? (
                            <Loader2 size={15} className="motion-safe:animate-spin" />
                          ) : (
                            <Play size={15} />
                          )}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
              <FieldLabel>
                <span className="inline-flex items-center gap-1.5">
                  <Cpu size={11} /> System voice (your browser)
                </span>
              </FieldLabel>
              {systemVoices.length === 0 ? (
                <p className="text-xs text-stone-500">
                  Your browser hasn&apos;t reported any voices yet. Try reopening
                  this page, or pick a voice once they load.
                </p>
              ) : (
                <div className="flex items-center gap-2">
                  <select
                    aria-label="System voice"
                    value={v.systemVoiceURI ?? ""}
                    onChange={(e) =>
                      setVoice({ systemVoiceURI: e.target.value || null })
                    }
                    className="min-w-0 flex-1 rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <option value="">Browser default</option>
                    {systemVoices.map((sv) => (
                      <option key={sv.voiceURI} value={sv.voiceURI}>
                        {sv.name}
                        {sv.gender !== "unknown" ? ` · ${sv.gender}` : ""} · {sv.lang}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    aria-label="Preview system voice"
                    onClick={() => preview(v.systemVoiceURI ?? "")}
                    disabled={previewing !== null}
                    className="grid h-10 w-10 flex-none place-items-center rounded-full bg-stone-800 text-white transition-colors hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50"
                  >
                    {previewing !== null ? (
                      <Loader2 size={16} className="motion-safe:animate-spin" />
                    ) : (
                      <Play size={16} />
                    )}
                  </button>
                </div>
              )}
              <p className="mt-2 text-[11px] text-stone-500">
                System voices are provided free by your browser/OS. Quality
                varies by device. The Web Speech API doesn&apos;t expose a
                voice&apos;s gender, so any labels above are best-effort guesses
                — confirm by ear with Preview.
              </p>
            </div>
          )}

          {/* Speech rate */}
          <SettingRow
            title="Speech rate"
            description={`How fast the voice reads. Currently: ${rateLabel(v.rate)} (${v.rate.toFixed(2)}×).`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-stone-500">0.5×</span>
              <Slider
                label="Speech rate"
                min={0.5}
                max={2}
                step={0.05}
                value={v.rate}
                onChange={(n) => setVoice({ rate: Math.round(n * 100) / 100 })}
              />
              <span className="text-xs font-medium text-stone-500">2×</span>
            </div>
          </SettingRow>
        </>
      )}
    </SettingsSection>
  );
}
