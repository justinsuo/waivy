"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Lock, User as UserIcon, Loader2, ShieldOff } from "lucide-react";
import { useAuth } from "@/lib/firebase/AuthProvider";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { GoogleIcon } from "./GoogleIcon";

type Mode = "signin" | "signup";

const inputCls =
  "w-full rounded-xl border border-line bg-surface pl-10 pr-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
}

export function LoginForm() {
  const { user, loading, enabled, signInWithGoogle, signInWithEmail, signUpWithEmail, sendPasswordReset } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState<"google" | "email" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();

  // Already signed in (or just succeeded) → leave the login page.
  useEffect(() => {
    if (!loading && user) router.replace(next);
  }, [user, loading, next, router]);

  if (!enabled) {
    return (
      <div className="mx-auto max-w-md py-6">
        <div className="rounded-3xl border border-line bg-surface p-8 text-center shadow-sm">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-surface-sunken text-ink-muted">
            <ShieldOff size={22} />
          </span>
          <h1 className="mt-4 text-xl font-bold text-ink">Sign-in isn&apos;t set up yet</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Accounts aren&apos;t configured on this build. Everything in Waivy still
            works — your pantry, recipes, and lists are saved on this device.
          </p>
          <Button className="mt-5" onClick={() => router.push("/")}>Back to Waivy</Button>
        </div>
      </div>
    );
  }

  async function onGoogle() {
    setError(null);
    setBusy("google");
    try {
      await signInWithGoogle();
      // redirect handled by the effect when `user` updates
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sign-in failed.");
      setBusy(null);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) return setError("Enter a valid email address.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (mode === "signup" && password !== confirm) return setError("Passwords don't match.");

    setBusy("email");
    try {
      if (mode === "signin") {
        await signInWithEmail(email.trim(), password);
      } else {
        await signUpWithEmail(email.trim(), password, name.trim() || undefined);
      }
      // redirect handled by the effect
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setBusy(null);
    }
  }

  async function onForgot() {
    setError(null);
    if (!isValidEmail(email)) {
      setError("Enter your email above first, then tap Forgot password.");
      return;
    }
    try {
      await sendPasswordReset(email.trim());
      toast.success("Password reset email sent — check your inbox.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send the reset email.");
    }
  }

  const disabled = busy !== null;

  return (
    <div className="mx-auto max-w-md py-2">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          {mode === "signin" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          {mode === "signin"
            ? "Sign in to sync your account across devices."
            : "Save your account so it travels with you."}
        </p>
      </header>

      <div className="rounded-3xl border border-line bg-surface p-6 shadow-sm">
        {/* Google */}
        <Button
          variant="outline"
          className="w-full"
          onClick={onGoogle}
          disabled={disabled}
          leftIcon={busy === "google" ? <Loader2 size={18} className="motion-safe:animate-spin" /> : <GoogleIcon />}
        >
          {busy === "google" ? "Opening Google…" : "Continue with Google"}
        </Button>

        <div className="my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-stone-200" />
          <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">or</span>
          <span className="h-px flex-1 bg-stone-200" />
        </div>

        {/* Email / password */}
        <form onSubmit={onSubmit} className="space-y-3" noValidate>
          {mode === "signup" && (
            <Field icon={<UserIcon size={16} />}>
              <input
                type="text"
                className={inputCls}
                placeholder="Name (optional)"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={disabled}
                aria-label="Display name"
              />
            </Field>
          )}
          <Field icon={<Mail size={16} />}>
            <input
              type="email"
              className={inputCls}
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
              required
              aria-label="Email"
            />
          </Field>
          <Field icon={<Lock size={16} />}>
            <input
              type="password"
              className={inputCls}
              placeholder={mode === "signup" ? "Create a password (8+ characters)" : "Password"}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disabled}
              required
              aria-label="Password"
            />
          </Field>
          {mode === "signup" && (
            <Field icon={<Lock size={16} />}>
              <input
                type="password"
                className={inputCls}
                placeholder="Confirm password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                disabled={disabled}
                required
                aria-label="Confirm password"
              />
            </Field>
          )}

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 dark:bg-red-950/40 px-3 py-2 text-sm text-red-700 dark:text-red-300">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={disabled}
            leftIcon={busy === "email" ? <Loader2 size={18} className="motion-safe:animate-spin" /> : undefined}>
            {busy === "email"
              ? mode === "signin" ? "Signing in…" : "Creating account…"
              : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        {mode === "signin" && (
          <button
            type="button"
            onClick={onForgot}
            disabled={disabled}
            className="mt-3 w-full text-center text-sm font-medium text-emerald-700 dark:text-emerald-300 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-50"
          >
            Forgot password?
          </button>
        )}
      </div>

      <p className="mt-5 text-center text-sm text-ink-muted">
        {mode === "signin" ? "New to Waivy? " : "Already have an account? "}
        <button
          type="button"
          onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }}
          className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>

      <p className="mt-3 text-center text-xs text-ink-faint">
        <Link href="/" className="hover:text-ink-muted">← Back to Waivy</Link>
      </p>
    </div>
  );
}

function Field({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative">
      <span aria-hidden className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint">
        {icon}
      </span>
      {children}
    </div>
  );
}
