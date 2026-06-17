"use client";

import { clsx } from "clsx";

/**
 * A11y switch toggle. `role="switch"` + `aria-checked`, visible focus ring,
 * emerald-on / stone-off, knob slides under motion-safe. Matches the
 * hand-rolled toggle used on the Nourish settings page — promoted here so
 * every settings row uses the same control.
 */
export function Toggle({
  checked,
  onChange,
  label,
  disabled,
  id,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  /** Accessible name — always required since the control is icon-only. */
  label: string;
  disabled?: boolean;
  id?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={clsx(
        "relative grid h-7 w-12 shrink-0 grid-cols-2 items-center rounded-full shadow-inner transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-gradient-to-br from-emerald-500 to-emerald-700" : "bg-stone-300",
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "h-5 w-5 rounded-full bg-white shadow motion-safe:transition-transform",
          checked ? "col-start-2 justify-self-end" : "col-start-1 justify-self-start",
        )}
        style={{ marginInline: "2px" }}
      />
    </button>
  );
}
