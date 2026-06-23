import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * Tone keys.
 *
 * Existing tailwind-named tones are kept for backwards compatibility with
 * dozens of consumer sites (BadgeRow, recipe cards, etc.). The Pantry Pop
 * additions are semantic names that map to the warm-app palette and are
 * preferred for new code:
 *
 *   basil   → primary action / pantry surface
 *   carrot  → Nourish + warmth
 *   butter  → Cheap / budget
 *   tomato  → spicy / destructive
 *   grape   → AI Chef / protein
 *   teal    → Grocery / meal prep
 *   pink    → Saved
 */
type Tone =
  | "default"
  | "amber"
  | "green"
  | "emerald"
  | "rose"
  | "orange"
  | "violet"
  | "sky"
  | "yellow"
  | "stone"
  | "red"
  // Pantry Pop semantic tones
  | "basil"
  | "carrot"
  | "butter"
  | "tomato"
  | "grape"
  | "teal"
  | "pink";

const TONES: Record<Tone, string> = {
  default: "bg-[#FFF1D9] dark:bg-[#262019] text-[#3A2A12] dark:text-[#E8D8C4] ring-1 ring-inset ring-[#E8D8C4] dark:ring-white/10",
  amber: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300",
  green: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
  emerald: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300",
  rose: "bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300",
  orange: "bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300",
  violet: "bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-300",
  sky: "bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300",
  yellow: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
  stone: "bg-stone-200 text-ink",
  red: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",

  // Pantry Pop semantic tones — explicit hex so they read consistently
  // across light/dark cream surfaces and aren't accidentally restyled
  // by upstream Tailwind class merges.
  basil:  "bg-[#E8FAF0] dark:bg-[#122E20] text-[#16834A] dark:text-[#6FE0A5] ring-1 ring-inset ring-[#B6E8CD] dark:ring-white/10",
  carrot: "bg-[#FFE8D6] dark:bg-[#33210F] text-[#9B3F0A] dark:text-[#F2B07A] ring-1 ring-inset ring-[#FFC79A] dark:ring-white/10",
  butter: "bg-[#FFF3CC] dark:bg-[#2E2710] text-[#7A4A00] dark:text-[#F2C97A] ring-1 ring-inset ring-[#FFE08A] dark:ring-white/10",
  tomato: "bg-[#FDE4E4] dark:bg-[#3A1717] text-[#9B1C1C] dark:text-[#F5A3A3] ring-1 ring-inset ring-[#F8B4B4] dark:ring-white/10",
  grape:  "bg-[#EFE8FF] dark:bg-[#221A3D] text-[#3F2BB8] dark:text-[#C3B5FF] ring-1 ring-inset ring-[#CDBEFF] dark:ring-white/10",
  teal:   "bg-[#DCFAF1] dark:bg-[#0F2E28] text-[#0B6E55] dark:text-[#6FE0C8] ring-1 ring-inset ring-[#A4ECD8] dark:ring-white/10",
  pink:   "bg-[#FFE3EC] dark:bg-[#3A1722] text-[#A23163] dark:text-[#F5A8C6] ring-1 ring-inset ring-[#F9B6CD] dark:ring-white/10",
};

export function Badge({
  children,
  tone = "default",
  icon,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        TONES[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
