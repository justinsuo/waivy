import type { ReactNode } from "react";
import { clsx } from "clsx";

type Tone = "default" | "emerald" | "amber" | "violet" | "sky" | "rose";

const TONES: Record<Tone, string> = {
  default: "border-line bg-surface",
  emerald: "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40/60",
  amber: "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40/60",
  violet: "border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-950/40/60",
  sky: "border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/40/60",
  rose: "border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40/60",
};

interface Props {
  emoji: string;
  title: string;
  description: string;
  /** Primary action — usually a <Button> or <Link>. */
  action?: ReactNode;
  /** Optional secondary action (text link, "skip", etc.). */
  secondaryAction?: ReactNode;
  /** Background/border tone. Default keeps the page-neutral look. */
  tone?: Tone;
  className?: string;
}

export function EmptyState({
  emoji,
  title,
  description,
  action,
  secondaryAction,
  tone = "default",
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-16 text-center",
        TONES[tone],
        className,
      )}
    >
      <div
        className="mb-3 text-5xl motion-safe:animate-[emojiFloat_3.2s_ease-in-out_infinite]"
        aria-hidden
      >
        {emoji}
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-ink-muted">{description}</p>
      {(action || secondaryAction) && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}
