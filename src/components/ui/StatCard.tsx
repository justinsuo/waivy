"use client";

import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * Compact dashboard stat. Replaces prose number callouts ("we have
 * 235 recipes…") with a 3-line tile: icon, value, label. Pair with
 * `BentoGrid` for the catalog grid.
 */

type Tone = "basil" | "carrot" | "butter" | "grape" | "teal" | "sky" | "pink";

const TONE: Record<Tone, { surface: string; chip: string; value: string; label: string }> = {
  basil:  { surface: "border-[#B6E8CD] bg-[#F4FCF8] dark:bg-[#12251C]", chip: "bg-[#2FBF71] text-white", value: "text-[#0F5E33] dark:text-[#6FE0A5]", label: "text-[#16834A] dark:text-[#6FE0A5]" },
  carrot: { surface: "border-[#FFC79A] bg-[#FFF6EC] dark:bg-[#2A1E12]", chip: "bg-[#FF8A3D] text-white", value: "text-[#7C3309] dark:text-[#F2B07A]", label: "text-[#9B3F0A] dark:text-[#F2B07A]" },
  butter: { surface: "border-[#FFE08A] bg-[#FFFBEC] dark:bg-[#2A2510]", chip: "bg-[#FFC93D] dark:bg-[#33280C] text-[#3A2A0F] dark:text-[#F2C97A]", value: "text-[#5C3700] dark:text-[#F2C97A]", label: "text-[#7A4A00] dark:text-[#F2C97A]" },
  grape:  { surface: "border-[#CDBEFF] bg-[#F6F3FF] dark:bg-[#1E1733]", chip: "bg-[#7C5CFF] text-white", value: "text-[#2A1B8A] dark:text-[#C3B5FF]", label: "text-[#3F2BB8] dark:text-[#C3B5FF]" },
  teal:   { surface: "border-[#A4ECD8] bg-[#EFFBF7] dark:bg-[#12251C]", chip: "bg-[#20C7A5] text-white", value: "text-[#08503D] dark:text-[#6FE0A5]", label: "text-[#0B6E55] dark:text-[#6FE0C8]" },
  sky:    { surface: "border-[#BAE6FD] bg-[#F0F8FF] dark:bg-[#0F2330]", chip: "bg-[#3BA7FF] text-white", value: "text-[#0B4F7B] dark:text-[#8FD0F5]", label: "text-[#1F6FA8] dark:text-[#8FD0F5]" },
  pink:   { surface: "border-[#F9B6CD] bg-[#FFF1F5] dark:bg-[#331720]", chip: "bg-[#FF6B9E] text-white", value: "text-[#73214A] dark:text-[#F5A8C6]", label: "text-[#A23163] dark:text-[#F5A8C6]" },
};

export function StatCard({
  icon,
  value,
  label,
  tone = "basil",
  className,
}: {
  /** Rendered icon (e.g. `<ChefHat size={16} />`). */
  icon: ReactNode;
  value: ReactNode;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const t = TONE[tone];
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 rounded-2xl border p-4 shadow-sm",
        t.surface,
        className,
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "grid h-9 w-9 place-items-center rounded-xl",
          t.chip,
        )}
      >
        {icon}
      </span>
      <div className={clsx("text-2xl font-extrabold leading-none tracking-tight", t.value)}>
        {value}
      </div>
      <div className={clsx("text-[11px] font-semibold uppercase tracking-wide", t.label)}>
        {label}
      </div>
    </div>
  );
}
