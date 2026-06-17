"use client";

import { useEffect, useState } from "react";
import { MapPin, Tag, RotateCcw } from "lucide-react";
import { LocationSetup } from "@/components/pricing/LocationSetup";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { getOverrides, deleteOverride } from "@/lib/pricing/locationStorage";
import { SettingsSection, SettingRow } from "./parts";

export function RegionPricingSection() {
  const toast = useToast();
  const [overrideCount, setOverrideCount] = useState(0);

  function refresh() {
    setOverrideCount(Object.keys(getOverrides()).length);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOverrideCount(Object.keys(getOverrides()).length);
  }, []);

  function resetOverrides() {
    const ids = Object.keys(getOverrides());
    if (ids.length === 0) return;
    if (
      !window.confirm(
        `Reset ${ids.length} custom ingredient price${ids.length === 1 ? "" : "s"} back to the catalog estimate?`,
      )
    ) {
      return;
    }
    ids.forEach((id) => deleteOverride(id));
    refresh();
    toast.success("Custom prices reset to catalog estimates.");
  }

  return (
    <SettingsSection
      id="pricing"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={11} /> Region & pricing
        </span>
      }
      title="Prices for where you actually shop."
      description="Every cost-per-serving is the catalog price scaled to your region. Set your area once; it applies across the whole app."
      tone="sky"
    >
      <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
        <LocationSetup variant="card" />
      </div>

      <SettingRow
        icon={<Tag size={18} />}
        iconClass="bg-sky-100 text-sky-700"
        title="Custom ingredient prices"
        description={
          overrideCount > 0
            ? `You've set ${overrideCount} custom price${overrideCount === 1 ? "" : "s"}. These override the regional estimate for those ingredients.`
            : "You haven't overridden any ingredient prices. Tap a price on any recipe to set your own."
        }
        control={
          <Button
            variant="outline"
            size="sm"
            leftIcon={<RotateCcw size={14} />}
            disabled={overrideCount === 0}
            onClick={resetOverrides}
          >
            Reset
          </Button>
        }
      />

      <p className="px-1 text-[11px] text-stone-500">
        All prices are shown in US dollars (USD). Waivy never fetches live store
        prices — costs come from the ingredient catalog × your regional
        multiplier × any custom prices you set.
      </p>
    </SettingsSection>
  );
}
