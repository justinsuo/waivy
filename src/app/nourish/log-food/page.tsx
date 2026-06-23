"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Zap,
  Mic,
  Camera,
  Receipt,
  Soup,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import { clsx } from "clsx";
import { NourishShell } from "@/components/nourish/NourishShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AddFoodModal } from "@/components/nourish/AddFoodModal";
import { QuickAddMacrosModal } from "@/components/nourish/QuickAddMacrosModal";
import { Button } from "@/components/ui/Button";
import type { MealSlot } from "@/lib/nourish/types";

type Tab = "search" | "quick" | "voice" | "scan" | "receipt" | "recipe";

const TABS: { id: Tab; label: string; icon: typeof Search; tone: string }[] = [
  { id: "search", label: "Search", icon: Search, tone: "emerald" },
  { id: "quick", label: "Quick add", icon: Zap, tone: "sky" },
  { id: "voice", label: "Voice", icon: Mic, tone: "violet" },
  { id: "scan", label: "Scan meal", icon: Camera, tone: "amber" },
  { id: "receipt", label: "Receipt", icon: Receipt, tone: "rose" },
  { id: "recipe", label: "From recipe", icon: Soup, tone: "indigo" },
];

const TONE_TINT: Record<string, string> = {
  emerald: "border-emerald-600 bg-emerald-600 shadow-emerald-200",
  sky: "border-sky-600 bg-sky-600 shadow-sky-200",
  violet: "border-violet-600 bg-violet-600 shadow-violet-200",
  amber: "border-amber-600 bg-amber-600 shadow-amber-200",
  rose: "border-rose-600 bg-rose-600 shadow-rose-200",
  indigo: "border-indigo-600 bg-indigo-600 shadow-indigo-200",
};

/**
 * Unified food-logging hub. Hosts six approaches as tabs so each
 * QuickLogActions deep-link has a real home instead of jumping out to
 * /pantry. Each tab is either a routed modal (Search / Quick add) or a
 * panel that surfaces the existing tool with one-line explanation +
 * direct CTA. Honest about which paths require AI configuration.
 */
export default function LogFoodPage() {
  return (
    <Suspense fallback={null}>
      <LogFoodBody />
    </Suspense>
  );
}

function LogFoodBody() {
  const params = useSearchParams();
  const initialTab = ((): Tab => {
    const t = params.get("tab");
    const valid: Tab[] = ["search", "quick", "voice", "scan", "receipt", "recipe"];
    return (valid as string[]).includes(t ?? "") ? (t as Tab) : "search";
  })();
  const [tab, setTab] = useState<Tab>(initialTab);
  const [openSearch, setOpenSearch] = useState(false);
  const [openQuick, setOpenQuick] = useState(false);
  const [slot] = useState<MealSlot>("snack");

  // Auto-open the right modal when query says quick or search.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (initialTab === "quick") setOpenQuick(true);
    if (initialTab === "search") setOpenSearch(false); // keep panel; user clicks
  }, [initialTab]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <NourishShell
      title="Log food."
      description="Six ways in. Pick the fastest for the moment — search for typed items, quick-add from a label, voice, photo, receipt, or pull from a recipe."
    >
      <section className="rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6">
        <SectionHeading
          eyebrow="Logging method"
          title="How do you want to log it?"
          tone="emerald"
        />
        <div className="mt-5 flex flex-wrap gap-2">
          {TABS.map(({ id, label, icon: Icon, tone }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                aria-pressed={active}
                className={clsx(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                  active
                    ? `${TONE_TINT[tone]} text-white shadow-sm motion-safe:scale-[1.02]`
                    : "border-line bg-surface text-ink-muted hover:-translate-y-px hover:border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:bg-emerald-950/40",
                )}
              >
                <Icon size={12} />
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          {tab === "search" && (
            <Panel
              icon={<Search size={18} />}
              eyebrow="Search"
              tone="emerald"
              title="Search the catalog, your custom foods, and saved recipes."
              body="Live filtering across the ingredient nutrition database, recipe catalog, custom foods, and saved meals. Edit servings before logging."
              cta={
                <Button onClick={() => setOpenSearch(true)}>
                  Open search
                </Button>
              }
            />
          )}
          {tab === "quick" && (
            <Panel
              icon={<Zap size={18} />}
              eyebrow="Quick add"
              tone="sky"
              title="Type macros from a nutrition label."
              body="Fastest path when you already know the numbers. Logs as a one-off — won't be saved as a reusable food. Use Custom foods for items you eat often."
              cta={
                <Button onClick={() => setOpenQuick(true)}>
                  Quick-add macros
                </Button>
              }
            />
          )}
          {tab === "voice" && (
            <Panel
              icon={<Mic size={18} />}
              eyebrow="Voice"
              tone="violet"
              title="Say what you ate."
              body={
                <>
                  Capture a whole phrase like &ldquo;two eggs, a cup of rice,
                  and a banana for lunch&rdquo;. The pantry voice tool covers
                  the parse + nutrition match. Voice runs through the same AI
                  vision/speech helper used for pantry input.
                </>
              }
              cta={
                <Link
                  href="/pantry"
                  className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-violet-200 hover:bg-violet-700"
                >
                  Open voice input
                  <ArrowRight size={14} />
                </Link>
              }
            />
          )}
          {tab === "scan" && (
            <Panel
              icon={<Camera size={18} />}
              eyebrow="Scan meal"
              tone="amber"
              title="Upload or capture a meal photo."
              body="The vision pass estimates what's on the plate. Showed on the dashboard via PhotoMealLogger. If your environment can't take photos, you'll see an honest fallback there."
              cta={
                <Link
                  href="/nourish"
                  className="inline-flex items-center gap-1.5 rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-200 hover:bg-amber-700"
                >
                  Go to dashboard
                  <ArrowRight size={14} />
                </Link>
              }
            />
          )}
          {tab === "receipt" && (
            <Panel
              icon={<Receipt size={18} />}
              eyebrow="Receipt"
              tone="rose"
              title="Snap a grocery receipt."
              body="Vision parses the food line items, filters out totals + tax + bag fees + store info, and maps each line to a catalog ingredient. Goes to your pantry, not the diary."
              cta={
                <Link
                  href="/pantry"
                  className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-rose-200 hover:bg-rose-700"
                >
                  Scan receipt
                  <ArrowRight size={14} />
                </Link>
              }
            />
          )}
          {tab === "recipe" && (
            <Panel
              icon={<Soup size={18} />}
              eyebrow="From recipe"
              tone="indigo"
              title="Log nutrition from a recipe in one tap."
              body={
                <>
                  Every catalog recipe has{" "}
                  <span className="font-semibold">Log to Nourish</span> built
                  in. Pick servings + slot, and the calculated macros land in
                  today&apos;s diary. Same for AI Chef recipes once saved.
                </>
              }
              cta={
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/nourish/recipes"
                    className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700"
                  >
                    Browse Nourish recipes
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/ai-chef"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-semibold text-ink hover:bg-surface"
                  >
                    <ChefHat size={14} />
                    AI Chef
                  </Link>
                </div>
              }
            />
          )}
        </div>
      </section>

      {openSearch && (
        <AddFoodModal
          defaultMeal={slot}
          onClose={() => setOpenSearch(false)}
          onLogged={() => setOpenSearch(false)}
        />
      )}
      {openQuick && (
        <QuickAddMacrosModal
          defaultSlot={slot}
          onClose={() => setOpenQuick(false)}
          onLogged={() => setOpenQuick(false)}
        />
      )}

      <p className="text-[11px] text-ink-muted">
        Nutrition estimates are for general tracking only and may vary by
        brand, portion, and preparation. Not medical advice.
      </p>
    </NourishShell>
  );
}

function Panel({
  icon,
  eyebrow,
  title,
  body,
  cta,
  tone,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  cta: React.ReactNode;
  tone: "emerald" | "sky" | "violet" | "amber" | "rose" | "indigo";
}) {
  const TONE_BG: Record<string, string> = {
    emerald: "from-emerald-50 to-surface border-emerald-200 dark:border-emerald-900/70",
    sky: "from-sky-50 to-surface border-sky-200 dark:border-sky-900/70",
    violet: "from-violet-50 to-surface border-violet-200 dark:border-violet-900/70",
    amber: "from-amber-50 to-surface border-amber-200 dark:border-amber-900/70",
    rose: "from-rose-50 to-surface border-rose-200 dark:border-rose-900/70",
    indigo: "from-indigo-50 to-surface border-indigo-200 dark:border-indigo-900/70",
  };
  const TONE_ICON: Record<string, string> = {
    emerald: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    sky: "bg-gradient-to-br from-sky-500 to-sky-700",
    violet: "bg-gradient-to-br from-violet-500 to-violet-700",
    amber: "bg-gradient-to-br from-amber-400 to-amber-600",
    rose: "bg-gradient-to-br from-rose-500 to-rose-700",
    indigo: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  };
  const TONE_EYEBROW: Record<string, string> = {
    emerald: "text-emerald-700 dark:text-emerald-300",
    sky: "text-sky-700 dark:text-sky-300",
    violet: "text-violet-700 dark:text-violet-300",
    amber: "text-amber-700 dark:text-amber-300",
    rose: "text-rose-700 dark:text-rose-300",
    indigo: "text-indigo-700 dark:text-indigo-300",
  };
  return (
    <div
      className={clsx(
        "rounded-2xl border bg-gradient-to-br p-5",
        TONE_BG[tone],
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={clsx(
            "grid h-10 w-10 flex-none place-items-center rounded-xl text-white shadow-sm",
            TONE_ICON[tone],
          )}
        >
          {icon}
        </div>
        <div className="flex-1">
          <p
            className={clsx(
              "text-[10px] font-semibold uppercase tracking-[0.14em]",
              TONE_EYEBROW[tone],
            )}
          >
            {eyebrow}
          </p>
          <p className="mt-1 text-base font-semibold text-ink">
            {title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
          <div className="mt-4">{cta}</div>
        </div>
      </div>
    </div>
  );
}
