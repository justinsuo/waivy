"use client";

import { Check } from "lucide-react";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Size = "sm" | "md";

interface Props {
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  size?: Size;
  icon?: ReactNode;
  /**
   * If true, render a check mark when active. Defaults to true for multi-select
   * pills. Pass false for single-select choices where the check would be
   * redundant (e.g. radio-style groups).
   */
  showCheck?: boolean;
  /**
   * Sets aria-pressed (multi-select toggle) or aria-checked (single-select).
   * Default: "pressed".
   */
  ariaSemantics?: "pressed" | "checked";
}

const SIZES: Record<Size, string> = {
  sm: "h-7 px-2.5 text-xs",
  md: "h-8 px-3 text-xs",
};

export function SelectablePill({
  active,
  onClick,
  disabled,
  children,
  size = "sm",
  icon,
  showCheck = true,
  ariaSemantics = "pressed",
}: Props) {
  const ariaProps =
    ariaSemantics === "pressed"
      ? { "aria-pressed": active }
      : { role: "radio", "aria-checked": active };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...ariaProps}
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
        SIZES[size],
        disabled
          ? "cursor-not-allowed border border-line bg-surface-sunken text-ink-faint"
          : active
            ? "scale-[1.02] border border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-200 hover:bg-emerald-700"
            : "border border-line bg-surface text-ink-muted hover:-translate-y-px hover:border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:bg-emerald-950/40 active:translate-y-0",
      )}
    >
      {showCheck && active && (
        <Check size={11} className="-ml-0.5 motion-safe:animate-[fadeIn_150ms_ease-out]" />
      )}
      {icon}
      {children}
    </button>
  );
}
