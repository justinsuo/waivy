"use client";

import { Wind, Microwave, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Recipe } from "@/lib/types";
import {
  isAirFryerRecipe,
  isMicrowaveRecipe,
} from "@/lib/equipmentFilters";

/**
 * Equipment-specific instruction card shown on the recipe detail page.
 * Renders the right tips for air fryer / microwave / combo recipes.
 */
export function CookingMethodCard({ recipe }: { recipe: Recipe }) {
  const af = isAirFryerRecipe(recipe);
  const mw = isMicrowaveRecipe(recipe);
  if (!af && !mw) return null;

  return (
    <Card className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
        Cooking notes
      </h2>

      {af && (
        <Section
          icon={<Wind size={16} />}
          tone="violet"
          title="Air fryer"
          rows={[
            recipe.airFryerTemperatureF
              ? `Temperature: ${recipe.airFryerTemperatureF}°F`
              : null,
            recipe.airFryerTimeMinutes
              ? `Time: ${recipe.airFryerTimeMinutes} min`
              : null,
            recipe.crispinessLevel
              ? `Target texture: ${recipe.crispinessLevel}`
              : null,
            "Shake the basket or flip halfway through for even crisping.",
            "Don't overcrowd — leave space between pieces so air circulates.",
            "Air fryer times vary by model. Check 2 minutes before the listed time.",
          ]}
        />
      )}

      {mw && (
        <Section
          icon={<Microwave size={16} />}
          tone="sky"
          title="Microwave"
          rows={[
            recipe.microwaveTimeMinutes
              ? `Total microwave time: ~${recipe.microwaveTimeMinutes} min`
              : null,
            "Use a microwave-safe bowl. No metal.",
            "Stir or check halfway to avoid hot spots.",
            "Let it rest 30 seconds after cooking — steam keeps cooking the food.",
            "Microwave times vary by wattage. 800W will need ~25% longer than 1000W.",
          ]}
        />
      )}

      <div className="flex items-start gap-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 px-3 py-2 text-xs text-amber-900 dark:text-amber-300">
        <AlertCircle size={14} className="mt-0.5 flex-none" />
        Be careful when removing covers — steam burns fast. Let bowls cool a
        moment before eating.
      </div>
    </Card>
  );
}

function Section({
  icon,
  title,
  tone,
  rows,
}: {
  icon: React.ReactNode;
  title: string;
  tone: "violet" | "sky";
  rows: (string | null)[];
}) {
  const colors: Record<string, string> = {
    violet: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
    sky: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",
  };
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`grid h-7 w-7 place-items-center rounded-lg ${colors[tone]}`}
        >
          {icon}
        </span>
        <p className="text-sm font-semibold text-ink">{title}</p>
      </div>
      <ul className="space-y-1 text-sm text-ink-muted">
        {rows.filter(Boolean).map((r, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-ink-faint">•</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
