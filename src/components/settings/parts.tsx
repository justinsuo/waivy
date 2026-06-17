"use client";

import type { ReactNode } from "react";
import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Tone = "emerald" | "amber" | "violet" | "sky" | "rose" | "indigo";

/** A settings section card: rounded panel + SectionHeading + stacked rows. */
export function SettingsSection({
  id,
  eyebrow,
  title,
  description,
  tone = "emerald",
  children,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <SectionHeading eyebrow={eyebrow} title={title} description={description} tone={tone} />
      <div className="mt-5 space-y-3">{children}</div>
    </section>
  );
}

/**
 * A single settings row: optional icon tile, title + description, an optional
 * trailing control (toggle/button), and optional full-width content below
 * (slider, pill group, dropdown).
 */
export function SettingRow({
  icon,
  iconClass = "bg-stone-100 text-stone-700",
  title,
  description,
  control,
  children,
}: {
  icon?: ReactNode;
  iconClass?: string;
  title: ReactNode;
  description?: ReactNode;
  control?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
      <div className="flex items-center gap-3">
        {icon && (
          <span
            aria-hidden
            className={clsx(
              "grid h-10 w-10 flex-none place-items-center rounded-xl",
              iconClass,
            )}
          >
            {icon}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-stone-900">{title}</p>
          {description && (
            <p className="mt-0.5 text-xs leading-relaxed text-stone-600">
              {description}
            </p>
          )}
        </div>
        {control && <div className="flex-none">{control}</div>}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}

/** Small label above a control group. */
export function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
      {children}
    </p>
  );
}
