import { Coins, Clock, Flame, Beef, Users, Wheat } from "lucide-react";
import type { ReactNode } from "react";

interface Stat {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  tone: "emerald" | "amber" | "rose" | "violet" | "sky" | "stone";
}

const TONE_BG: Record<Stat["tone"], string> = {
  emerald: "from-emerald-50 to-surface text-emerald-900 dark:text-emerald-300 ring-emerald-200/70",
  amber: "from-amber-50 to-surface text-amber-900 dark:text-amber-300 ring-amber-200/70",
  rose: "from-rose-50 to-surface text-rose-900 dark:text-rose-300 ring-rose-200/70",
  violet: "from-violet-50 to-surface text-violet-900 dark:text-violet-300 ring-violet-200/70",
  sky: "from-sky-50 to-surface text-sky-900 dark:text-sky-300 ring-sky-200/70",
  stone: "from-stone-50 to-surface text-ink ring-stone-200",
};

const TONE_ICON: Record<Stat["tone"], string> = {
  emerald: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  amber: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
  rose: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
  violet: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
  sky: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",
  stone: "bg-surface-sunken text-ink-muted",
};

/**
 * Color-coded stat strip for a recipe (cost / time / calories / protein /
 * servings). Used on the AI Chef results panel above the ingredients/steps
 * grid. Each pill is a gradient card with an icon badge.
 */
export function RecipeStatsRow({
  costPerServing,
  totalTimeMinutes,
  calories,
  protein,
  carbs,
  servings,
}: {
  costPerServing?: number | null;
  totalTimeMinutes?: number | null;
  calories?: number | null;
  protein?: number | null;
  carbs?: number | null;
  servings?: number | null;
}) {
  const stats: Stat[] = [];

  if (typeof costPerServing === "number" && Number.isFinite(costPerServing)) {
    stats.push({
      icon: <Coins size={14} />,
      label: "per serving",
      value: `$${costPerServing.toFixed(2)}`,
      tone: "emerald",
    });
  }
  if (typeof totalTimeMinutes === "number" && totalTimeMinutes > 0) {
    stats.push({
      icon: <Clock size={14} />,
      label: "minutes",
      value: `${totalTimeMinutes}`,
      tone: "amber",
    });
  }
  if (typeof calories === "number" && Number.isFinite(calories)) {
    stats.push({
      icon: <Flame size={14} />,
      label: "calories",
      value: Math.round(calories),
      tone: "rose",
    });
  }
  if (typeof protein === "number" && Number.isFinite(protein)) {
    stats.push({
      icon: <Beef size={14} />,
      label: "g protein",
      value: Math.round(protein),
      tone: "violet",
    });
  }
  if (typeof carbs === "number" && Number.isFinite(carbs)) {
    stats.push({
      icon: <Wheat size={14} />,
      label: "g carbs",
      value: Math.round(carbs),
      tone: "sky",
    });
  }
  if (typeof servings === "number" && servings > 0) {
    stats.push({
      icon: <Users size={14} />,
      label: "servings",
      value: `${servings}`,
      tone: "stone",
    });
  }

  if (stats.length === 0) return null;

  return (
    <div
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
      role="list"
    >
      {stats.map((s, i) => (
        <div
          key={`${s.label}-${i}`}
          role="listitem"
          className={`flex items-center gap-2.5 rounded-2xl bg-gradient-to-br p-3 shadow-sm ring-1 ring-inset ${TONE_BG[s.tone]} motion-safe:animate-[fadeUp_500ms_ease-out_both]`}
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <span
            className={`grid h-9 w-9 flex-none place-items-center rounded-xl ${TONE_ICON[s.tone]}`}
            aria-hidden
          >
            {s.icon}
          </span>
          <div className="min-w-0">
            <p className="text-base font-bold leading-tight">{s.value}</p>
            <p className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
              {s.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
