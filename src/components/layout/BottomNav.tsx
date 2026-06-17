"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Coins,
  ChefHat,
  Apple,
  Bookmark,
  Settings,
  User as UserIcon,
  LogIn,
} from "lucide-react";
import { clsx } from "clsx";
import { useAuth } from "@/lib/firebase/AuthProvider";

// AI Chef sits in the middle of the bottom nav as the visual anchor — it's
// the flagship action and benefits from being one tap from anywhere.
// Grocery moved to hamburger menu to make room for Nourish.
const BASE_LINKS = [
  { href: "/", label: "Home", icon: Home, hero: false },
  { href: "/cheap-recipes", label: "Cheap", icon: Coins, hero: false },
  { href: "/ai-chef", label: "AI Chef", icon: ChefHat, hero: true },
  { href: "/nourish", label: "Nourish", icon: Apple, hero: false },
  { href: "/saved", label: "Saved", icon: Bookmark, hero: false },
];

// 6th slot is dynamic: Account/Sign-in when auth is configured, else Settings.
// (Settings stays reachable via the top-nav More menu + the account menu.)
const SETTINGS_LINK = { href: "/settings", label: "Settings", icon: Settings, hero: false };

export function BottomNav() {
  const pathname = usePathname();
  const { enabled, user, loading } = useAuth();
  const [hiddenByInput, setHiddenByInput] = useState(false);

  // 6th tab: Settings when auth is off (or still resolving, to avoid a
  // signed-out → signed-in flash); Account when signed in; Sign in otherwise.
  const sixth =
    !enabled || loading
      ? SETTINGS_LINK
      : user
        ? { href: "/account", label: "Account", icon: UserIcon, hero: false }
        : { href: "/login", label: "Sign in", icon: LogIn, hero: false };
  const links = [...BASE_LINKS, sixth];

  // Same input-aware behavior as the floating Pesto button — get out of the
  // way when the user is typing so the mobile keyboard doesn't push us up
  // onto the form.
  useEffect(() => {
    function isEditable(t: EventTarget | null): boolean {
      if (!(t instanceof HTMLElement)) return false;
      const tag = t.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
    }
    function onFocus(e: FocusEvent) {
      if (isEditable(e.target)) setHiddenByInput(true);
    }
    function onBlur(e: FocusEvent) {
      if (isEditable(e.target)) setHiddenByInput(false);
    }
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    return () => {
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
    };
  }, []);

  return (
    <nav
      aria-label="Quick navigation"
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-[#E8D8C4] bg-[#FFF8ED]/95 backdrop-blur transition-transform duration-200 md:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        hiddenByInput && "translate-y-full",
      )}
    >
      <ul className="mx-auto flex max-w-md items-end justify-between px-1">
        {links.map((link) => {
          const Icon = link.icon;
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          if (link.hero) {
            return (
              <li key={link.href} className="min-w-0 flex-1">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="-mt-5 mx-auto flex w-fit flex-col items-center"
                >
                  <span
                    className={clsx(
                      "grid h-11 w-11 place-items-center rounded-full text-white shadow-md shadow-emerald-300/50 transition-transform motion-safe:hover:scale-105",
                      active
                        ? "bg-emerald-700"
                        : "bg-gradient-to-br from-emerald-500 to-emerald-700",
                    )}
                  >
                    <Icon size={21} />
                  </span>
                  <span
                    className={clsx(
                      "mt-1 max-w-full truncate text-[10px] font-semibold uppercase tracking-wide",
                      active ? "text-emerald-700" : "text-stone-600",
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          }

          return (
            <li key={link.href} className="min-w-0 flex-1">
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
                  active ? "text-emerald-700" : "text-stone-500",
                )}
              >
                <span className="relative">
                  <Icon size={19} />
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -inset-1 -z-10 rounded-full bg-emerald-100 motion-safe:animate-[popIn_220ms_ease-out]"
                    />
                  )}
                </span>
                <span className="max-w-full truncate">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
