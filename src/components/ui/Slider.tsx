"use client";

import { clsx } from "clsx";

/**
 * Styled native range input. Native `<input type=range>` keeps full keyboard
 * support (arrow keys, role="slider") for free; we only restyle the track via
 * `accent-emerald-600`. An accessible name is required.
 */
export function Slider({
  value,
  min,
  max,
  step = 1,
  onChange,
  label,
  id,
  disabled,
  className,
}: {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
  label: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <input
      type="range"
      id={id}
      aria-label={label}
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className={clsx(
        "h-2 w-full cursor-pointer appearance-none rounded-full bg-stone-200 accent-emerald-600",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    />
  );
}
