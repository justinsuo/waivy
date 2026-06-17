"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Info, ArrowRight, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { isWorkerConfigured, workerUrl } from "@/lib/workerClient";
import { SettingsSection, SettingRow } from "./parts";

const APP_VERSION = "0.1.0";

interface Diagnostics {
  hasApiKey?: boolean;
  models?: Record<string, string>;
  warnings?: string[];
}

type Status = "loading" | "ok" | "error" | "unconfigured";

export function AboutSection() {
  const [diag, setDiag] = useState<Diagnostics | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!isWorkerConfigured()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("unconfigured");
      return;
    }
    const ctrl = new AbortController();
    fetch(`${workerUrl()}/diagnostics`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad status"))))
      .then((d: Diagnostics) => {
        setDiag(d);
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
    return () => ctrl.abort();
  }, []);

  const KEYS_TO_SHOW: { key: string; label: string }[] = [
    { key: "recipe", label: "Recipes" },
    { key: "image", label: "Images" },
    { key: "tts", label: "Voice" },
  ];

  return (
    <SettingsSection
      id="about"
      eyebrow={
        <span className="inline-flex items-center gap-1.5">
          <Info size={11} /> About
        </span>
      }
      title="About Waivy."
      description="Version and the status of the AI service that powers Chef, images, and the premium voice."
      tone="emerald"
    >
      <SettingRow
        title="Version"
        description={`Waivy ${APP_VERSION} · cook smart on a student budget`}
        control={
          <Link
            href="/about"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            About <ArrowRight size={14} />
          </Link>
        }
      />

      <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
        <div className="flex items-center gap-2">
          {status === "loading" && (
            <Loader2 size={16} className="text-stone-400 motion-safe:animate-spin" />
          )}
          {status === "ok" && <CheckCircle2 size={16} className="text-emerald-600" />}
          {(status === "error" || status === "unconfigured") && (
            <XCircle size={16} className="text-stone-400" />
          )}
          <p className="text-sm font-semibold text-stone-900">
            AI service:{" "}
            {status === "loading"
              ? "checking…"
              : status === "ok"
                ? diag?.hasApiKey
                  ? "connected"
                  : "connected (no API key)"
                : status === "unconfigured"
                  ? "not configured"
                  : "unreachable"}
          </p>
        </div>

        {status === "ok" && diag?.models && (
          <div className="mt-3 flex flex-wrap gap-2">
            {KEYS_TO_SHOW.filter((k) => diag.models?.[k.key]).map((k) => (
              <span
                key={k.key}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] text-stone-600 ring-1 ring-stone-200"
              >
                <span className="font-semibold text-stone-800">{k.label}:</span>
                <span className="font-mono">{diag.models![k.key]}</span>
              </span>
            ))}
          </div>
        )}

        {status === "ok" && diag?.warnings && diag.warnings.length > 0 && (
          <ul className="mt-3 space-y-1">
            {diag.warnings.map((w, i) => (
              <li key={i} className="text-xs text-amber-700">
                ⚠ {w}
              </li>
            ))}
          </ul>
        )}

        {status === "unconfigured" && (
          <p className="mt-2 text-xs leading-relaxed text-stone-600">
            The AI service isn&apos;t set up on this build. Recipes, pantry
            matching, pricing, and your browser&apos;s built-in cooking voice
            all still work — AI Chef, image generation, and the premium voice
            need it.
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-xs leading-relaxed text-stone-600">
            Couldn&apos;t reach the AI service right now. Waivy keeps working;
            AI features will retry automatically.
          </p>
        )}
      </div>
    </SettingsSection>
  );
}
