import type { Metadata } from "next";
import { Settings as SettingsIcon } from "lucide-react";
import { VoiceSettingsSection } from "@/components/settings/VoiceSettingsSection";
import { CookingDefaultsSection } from "@/components/settings/CookingDefaultsSection";
import { RegionPricingSection } from "@/components/settings/RegionPricingSection";
import { AiSection } from "@/components/settings/AiSection";
import { AppearanceSection } from "@/components/settings/AppearanceSection";
import { FeedbackSection } from "@/components/settings/FeedbackSection";
import { DataPrivacySection } from "@/components/settings/DataPrivacySection";
import { AboutSection } from "@/components/settings/AboutSection";

export const metadata: Metadata = {
  title: "Settings — Waivy",
  description:
    "Voice & guided cooking, cooking defaults, region & pricing, AI features, appearance, timers, and your data.",
};

const JUMP_LINKS = [
  { href: "#voice", label: "Voice" },
  { href: "#cooking", label: "Cooking" },
  { href: "#pricing", label: "Region" },
  { href: "#ai", label: "AI" },
  { href: "#appearance", label: "Appearance" },
  { href: "#feedback", label: "Timers" },
  { href: "#data", label: "Data" },
  { href: "#about", label: "About" },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-6">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
          <span aria-hidden className="h-[2px] w-6 rounded-full bg-emerald-500" />
          <SettingsIcon size={12} /> Settings
        </p>
        <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Make Waivy yours.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Set a natural cooking voice, your default diet and kitchen, your
          region for pricing, and how much AI you want. Everything is stored on
          this device.
        </p>

        {/* Quick-jump nav */}
        <nav aria-label="Settings sections" className="mt-4 flex flex-wrap gap-2">
          {JUMP_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:bg-emerald-950/40 hover:text-emerald-800 dark:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="space-y-6">
        <VoiceSettingsSection />
        <CookingDefaultsSection />
        <RegionPricingSection />
        <AiSection />
        <AppearanceSection />
        <FeedbackSection />
        <DataPrivacySection />
        <AboutSection />
      </div>
    </div>
  );
}
