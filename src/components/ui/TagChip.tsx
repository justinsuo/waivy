import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * Passive (not clickable) tag chip. Used to label recipe attributes like
 * "Dorm-friendly", "One pot", "High protein". Title-cased.
 */
export function TagChip({
  children,
  tone = "stone",
  size = "sm",
}: {
  children: ReactNode;
  tone?: "stone" | "emerald" | "amber" | "violet" | "sky";
  size?: "xs" | "sm";
}) {
  const tones = {
    stone: "bg-surface-sunken text-ink-muted",
    emerald: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300",
    amber: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300",
    violet: "bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-300",
    sky: "bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300",
  };
  const sizes = {
    xs: "text-[10px] px-1.5 py-0.5",
    sm: "text-[11px] px-2 py-0.5",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-medium",
        tones[tone],
        sizes[size],
      )}
    >
      {formatTagLabel(children)}
    </span>
  );
}

function formatTagLabel(c: ReactNode): ReactNode {
  if (typeof c !== "string") return c;
  // Replace dashes/underscores with spaces and title-case
  const parts = c.replace(/[-_]+/g, " ").split(" ");
  return parts
    .map((p) =>
      p.length === 0 ? p : p[0].toUpperCase() + p.slice(1).toLowerCase(),
    )
    .join(" ");
}
