"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User as UserIcon, LogOut, Settings, ChevronDown } from "lucide-react";
import { useAuth } from "@/lib/firebase/AuthProvider";

function initials(name?: string | null, email?: string | null): string {
  const src = (name || email || "?").trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

/** Top-nav auth control: "Sign in" when logged out, an account menu when in. */
export function AccountMenu() {
  const { user, loading, enabled, signOutUser } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Close on route change + Escape.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Graceful degradation: render nothing when Firebase isn't configured, and
  // avoid a signed-out→in flash while the first auth state resolves.
  if (!enabled || loading) return null;

  if (!user) {
    return (
      <Link
        href={`/login?next=${encodeURIComponent(pathname || "/")}`}
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <UserIcon size={15} /> Sign in
      </Link>
    );
  }

  const avatar = user.photoURL ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className="h-8 w-8 rounded-full object-cover" />
  ) : (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
      {initials(user.displayName, user.email)}
    </span>
  );

  async function onSignOut() {
    setOpen(false);
    await signOutUser();
    router.push("/");
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className="inline-flex items-center gap-1 rounded-full p-0.5 pr-1.5 transition-colors hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        {avatar}
        <ChevronDown size={14} className="text-stone-500" />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 cursor-default"
          />
          <div
            role="menu"
            aria-label="Account"
            className="absolute right-0 top-full z-40 mt-2 w-60 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg motion-safe:animate-[fadeUp_180ms_ease-out]"
          >
            <div className="border-b border-stone-100 px-4 py-3">
              <p className="truncate text-sm font-semibold text-stone-900">
                {user.displayName || "Your account"}
              </p>
              <p className="truncate text-xs text-stone-500">{user.email}</p>
            </div>
            <MenuLink href="/account" icon={<UserIcon size={16} />} label="Account" />
            <MenuLink href="/settings" icon={<Settings size={16} />} label="Settings" />
            <button
              type="button"
              role="menuitem"
              onClick={onSignOut}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus-visible:bg-red-50"
            >
              <LogOut size={16} /> Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function MenuLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      role="menuitem"
      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50 focus:outline-none focus-visible:bg-stone-50"
    >
      {icon} {label}
    </Link>
  );
}
