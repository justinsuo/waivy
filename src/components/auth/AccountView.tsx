"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, LogOut, Settings, Check, X, Pencil, BadgeCheck, ShieldOff } from "lucide-react";
import { useAuth } from "@/lib/firebase/AuthProvider";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

function providerLabel(id?: string): string {
  switch (id) {
    case "google.com": return "Google";
    case "password": return "Email & password";
    default: return id || "Unknown";
  }
}

function initials(name?: string | null, email?: string | null): string {
  const src = (name || email || "?").trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

export function AccountView() {
  const { user, loading, enabled, signOutUser, updateDisplayName } = useAuth();
  const router = useRouter();
  const toast = useToast();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  // Not signed in (and auth is on) → send to login, returning here after.
  useEffect(() => {
    if (enabled && !loading && !user) {
      router.replace("/login?next=/account");
    }
  }, [enabled, loading, user, router]);

  if (!enabled) {
    return (
      <Centered>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-stone-100 text-stone-500">
          <ShieldOff size={22} />
        </span>
        <h1 className="mt-4 text-xl font-bold text-stone-900">Accounts aren&apos;t set up</h1>
        <p className="mt-2 text-sm text-stone-600">
          Sign-in isn&apos;t configured on this build. Your data is saved locally on
          this device and works without an account.
        </p>
        <Button className="mt-5" onClick={() => router.push("/")}>Back to Waivy</Button>
      </Centered>
    );
  }

  if (loading || !user) {
    return (
      <Centered>
        <Loader2 size={24} className="mx-auto text-stone-400 motion-safe:animate-spin" />
        <p className="mt-3 text-sm text-stone-500">Loading your account…</p>
      </Centered>
    );
  }

  const provider = providerLabel(user.providerData[0]?.providerId);

  async function onSaveName() {
    const trimmed = name.trim();
    if (!trimmed) return setEditing(false);
    setSaving(true);
    try {
      await updateDisplayName(trimmed);
      toast.success("Name updated.");
      setEditing(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Couldn't update your name.");
    } finally {
      setSaving(false);
    }
  }

  async function onSignOut() {
    setSigningOut(true);
    try {
      await signOutUser();
      toast.info("Signed out. Your saved recipes and pantry stay on this device.");
      router.push("/");
    } catch {
      setSigningOut(false);
      toast.error("Couldn't sign out — try again.");
    }
  }

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-5 text-2xl font-bold tracking-tight text-stone-900">Your account</h1>

      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt=""
              referrerPolicy="no-referrer"
              className="h-16 w-16 flex-none rounded-full object-cover ring-1 ring-stone-200"
            />
          ) : (
            <span className="grid h-16 w-16 flex-none place-items-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
              {initials(user.displayName, user.email)}
            </span>
          )}
          <div className="min-w-0 flex-1">
            {editing ? (
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={saving}
                  aria-label="Display name"
                  className="min-w-0 flex-1 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                />
                <button onClick={onSaveName} disabled={saving} aria-label="Save name"
                  className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50">
                  {saving ? <Loader2 size={15} className="motion-safe:animate-spin" /> : <Check size={15} />}
                </button>
                <button onClick={() => setEditing(false)} disabled={saving} aria-label="Cancel"
                  className="grid h-8 w-8 place-items-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200">
                  <X size={15} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="truncate text-lg font-semibold text-stone-900">
                  {user.displayName || "No name set"}
                </p>
                <button
                  onClick={() => { setName(user.displayName || ""); setEditing(true); }}
                  aria-label="Edit display name"
                  className="flex-none rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Pencil size={15} />
                </button>
              </div>
            )}
            <p className="truncate text-sm text-stone-500">{user.email}</p>
          </div>
        </div>

        <dl className="mt-6 space-y-3 border-t border-stone-100 pt-5 text-sm">
          <Row label="Sign-in method" value={provider} />
          <Row
            label="Email verified"
            value={
              user.emailVerified ? (
                <span className="inline-flex items-center gap-1 text-emerald-700">
                  <BadgeCheck size={15} /> Verified
                </span>
              ) : (
                <span className="text-amber-700">Not verified</span>
              )
            }
          />
        </dl>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Link
          href="/settings"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <Settings size={16} /> Settings
        </Link>
        <Button variant="danger" onClick={onSignOut} disabled={signingOut}
          leftIcon={signingOut ? <Loader2 size={16} className="motion-safe:animate-spin" /> : <LogOut size={16} />}>
          {signingOut ? "Signing out…" : "Sign out"}
        </Button>
      </div>

      <p className="mt-4 text-center text-xs text-stone-400">
        Signing out keeps your pantry, recipes, and lists on this device.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-stone-500">{label}</dt>
      <dd className="font-medium text-stone-800">{value}</dd>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-md py-6">
      <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        {children}
      </div>
    </div>
  );
}
