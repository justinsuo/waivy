"use client";

import { UtensilsCrossed } from "lucide-react";
import { useSettings } from "@/lib/settings/SettingsStore";
import { SelectablePill } from "@/components/ui/SelectablePill";
import { Slider } from "@/components/ui/Slider";
import { SettingsSection, SettingRow } from "./parts";
import type { DietTag } from "@/lib/types";
import type { EquipmentProfile } from "@/lib/equipmentFilters";

const DIETS: { id: DietTag; label: string }[] = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "high-protein", label: "High protein" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "dairy-free", label: "Dairy-free" },
];

const EQUIPMENT: { id: EquipmentProfile; label: string }[] = [
  { id: "any", label: "Any equipment" },
  { id: "microwave-only", label: "Microwave only" },
  { id: "air-fryer-only", label: "Air fryer only" },
  { id: "microwave-and-air-fryer", label: "Microwave + air fryer" },
  { id: "no-stovetop", label: "No stovetop" },
];

export function CookingDefaultsSection() {
  const { settings, setCooking } = useSettings();
  const c = settings.cooking;

  function toggleDiet(tag: DietTag) {
    const has = c.diet.includes(tag);
    setCooking({ diet: has ? c.diet.filter((d) => d !== tag) : [...c.diet, tag] });
  }

  return (
    <SettingsSection
      id="cooking"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <UtensilsCrossed size={11} /> Cooking defaults
        </span>
      }
      title="Set it once, skip the filters."
      description="These prefill the AI Chef and Cheap Recipes filters every time, so you don't re-pick your diet and kitchen on every visit."
      tone="amber"
    >
      <SettingRow
        title="Default diet"
        description="Applied as the starting diet filter. Leave empty for no restriction."
      >
        <div className="flex flex-wrap gap-2" role="group" aria-label="Default diet tags">
          {DIETS.map((d) => (
            <SelectablePill
              key={d.id}
              active={c.diet.includes(d.id)}
              onClick={() => toggleDiet(d.id)}
            >
              {d.label}
            </SelectablePill>
          ))}
        </div>
      </SettingRow>

      <SettingRow
        title="Kitchen / equipment"
        description="What you can cook with. Recipes that need more get filtered out."
      >
        <div
          className="flex flex-wrap gap-2"
          role="radiogroup"
          aria-label="Default equipment profile"
        >
          {EQUIPMENT.map((e) => (
            <SelectablePill
              key={e.id}
              active={c.equipmentProfile === e.id}
              ariaSemantics="checked"
              showCheck={false}
              onClick={() => setCooking({ equipmentProfile: e.id })}
            >
              {e.label}
            </SelectablePill>
          ))}
        </div>
      </SettingRow>

      <SettingRow
        title="Default servings"
        description={`Recipes scale to ${c.servings} serving${c.servings === 1 ? "" : "s"} by default.`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-stone-500">1</span>
          <Slider
            label="Default servings"
            min={1}
            max={8}
            step={1}
            value={c.servings}
            onChange={(n) => setCooking({ servings: n })}
          />
          <span className="w-8 text-right text-sm font-semibold text-stone-900">
            {c.servings}
          </span>
        </div>
      </SettingRow>

      <SettingRow
        title="Budget per serving"
        description={`Target cost ceiling: $${c.budgetPerServing.toFixed(2)} per serving.`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-stone-500">$1</span>
          <Slider
            label="Budget per serving"
            min={1}
            max={15}
            step={0.5}
            value={c.budgetPerServing}
            onChange={(n) => setCooking({ budgetPerServing: n })}
          />
          <span className="w-12 text-right text-sm font-semibold text-stone-900">
            ${c.budgetPerServing.toFixed(2)}
          </span>
        </div>
      </SettingRow>
    </SettingsSection>
  );
}
