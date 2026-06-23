"use client";

import { Download, Trash2, AlertTriangle } from "lucide-react";
import { useAppStore } from "@/lib/AppStore";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { SettingsSection, SettingRow } from "./parts";
import {
  exportAllData,
  downloadJson,
  clearCategory,
  resetEverything,
} from "@/lib/settings/data";

export function DataPrivacySection() {
  const toast = useToast();
  const { clearPantry, clearGrocery, saved, toggleSaved } = useAppStore();

  function doExport() {
    downloadJson("waivy-data.json", exportAllData());
    toast.success("Exported your data as waivy-data.json.");
  }

  function clearPantryData() {
    if (!window.confirm("Clear your pantry? This can't be undone.")) return;
    clearPantry();
    toast.info("Pantry cleared.");
  }
  function clearGroceryData() {
    if (!window.confirm("Clear your grocery list? This can't be undone.")) return;
    clearGrocery();
    toast.info("Grocery list cleared.");
  }
  function clearSavedData() {
    if (saved.length === 0) {
      toast.info("No saved recipes to clear.");
      return;
    }
    if (!window.confirm(`Remove all ${saved.length} saved recipes?`)) return;
    [...saved].forEach((id) => toggleSaved(id));
    toast.info("Saved recipes cleared.");
  }
  function clearCustomData() {
    if (!window.confirm("Delete your custom & AI-created recipes? This can't be undone.")) {
      return;
    }
    clearCategory("custom");
    toast.info("Custom recipes cleared.");
  }
  function clearImageData() {
    clearCategory("images");
    toast.info("AI image cache cleared.");
  }
  function resetAll() {
    if (
      !window.confirm(
        "Reset EVERYTHING? This wipes your pantry, grocery list, saved + custom recipes, settings, and all local data. This can't be undone.",
      )
    ) {
      return;
    }
    resetEverything();
    toast.success("Everything reset. Reloading…");
    setTimeout(() => window.location.reload(), 700);
  }

  const clears: { label: string; onClick: () => void }[] = [
    { label: "Pantry", onClick: clearPantryData },
    { label: "Grocery list", onClick: clearGroceryData },
    { label: "Saved recipes", onClick: clearSavedData },
    { label: "Custom & AI recipes", onClick: clearCustomData },
    { label: "AI image cache", onClick: clearImageData },
  ];

  return (
    <SettingsSection
      id="data"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <Download size={11} /> Data & privacy
        </span>
      }
      title="Your data stays on your device."
      description="Everything lives in this browser's storage. Export a backup, or clear what you don't want."
      tone="rose"
    >
      <SettingRow
        icon={<Download size={18} />}
        iconClass="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
        title="Export all data"
        description="Download a JSON backup of your pantry, recipes, settings, and everything else."
        control={
          <Button variant="outline" size="sm" leftIcon={<Download size={14} />} onClick={doExport}>
            Export
          </Button>
        }
      />

      <div className="rounded-2xl border border-line bg-surface/60 p-4">
        <p className="text-sm font-semibold text-ink">Clear specific data</p>
        <p className="mt-0.5 text-xs text-ink-muted">
          Each one asks for confirmation first.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {clears.map((c) => (
            <Button
              key={c.label}
              variant="outline"
              size="sm"
              leftIcon={<Trash2 size={14} />}
              onClick={c.onClick}
            >
              {c.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 p-4">
        <div className="flex items-start gap-2.5">
          <AlertTriangle size={18} className="mt-0.5 flex-none text-rose-600 dark:text-rose-400" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-rose-900 dark:text-rose-300">Reset everything</p>
            <p className="mt-0.5 text-xs leading-relaxed text-rose-800 dark:text-rose-300">
              Wipes all Waivy data on this device and reloads the app fresh.
            </p>
          </div>
          <Button variant="danger" size="sm" leftIcon={<Trash2 size={14} />} onClick={resetAll}>
            Reset
          </Button>
        </div>
      </div>
    </SettingsSection>
  );
}
