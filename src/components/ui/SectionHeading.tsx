import type { ReactNode } from "react";
import { clsx } from "clsx";

/**
 * Shared section header used across the app so every page has the same
 * eyebrow → title → subtitle rhythm. The accent bar under the eyebrow is
 * subtle so the eye still locks onto the title. Trailing slot is for an
 * inline action ("Browse all →") at the end of the row on desktop.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  trailing,
  align = "left",
  tone = "emerald",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  trailing?: ReactNode;
  align?: "left" | "center";
  tone?: "emerald" | "amber" | "violet" | "sky" | "rose" | "indigo";
  className?: string;
}) {
  const TONES: Record<string, string> = {
    emerald: "text-emerald-700 dark:text-emerald-300 bg-emerald-500",
    amber: "text-amber-700 dark:text-amber-300 bg-amber-500",
    violet: "text-violet-700 dark:text-violet-300 bg-violet-500",
    sky: "text-sky-700 dark:text-sky-300 bg-sky-500",
    rose: "text-rose-700 dark:text-rose-300 bg-rose-500",
    indigo: "text-indigo-700 dark:text-indigo-300 bg-indigo-500",
  };
  const [textTone, barTone] = TONES[tone].split(" ");
  return (
    <div
      className={clsx(
        "flex flex-col gap-1.5",
        align === "center" && "items-center text-center",
        trailing && "sm:flex-row sm:items-end sm:justify-between sm:gap-6",
        className,
      )}
    >
      <div className={clsx("flex-1", align === "center" && "max-w-xl")}>
        {eyebrow && (
          <p
            className={clsx(
              "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]",
              textTone,
            )}
          >
            <span
              aria-hidden
              className={clsx("h-[2px] w-6 rounded-full", barTone)}
            />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1.5 text-2xl font-semibold leading-tight text-ink sm:text-[28px]">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
      </div>
      {trailing && (
        <div className="hidden shrink-0 sm:block">{trailing}</div>
      )}
    </div>
  );
}
