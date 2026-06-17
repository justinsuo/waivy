"use client";

/**
 * Firebase Web SDK init — client-side only (static export → GitHub Pages has no
 * server runtime). We import only `firebase/app` + `firebase/auth` to keep the
 * bundle lean.
 *
 * The web config is PUBLIC by design: the `apiKey` is not a secret — security
 * comes from the Authorized Domains allowlist (and Security Rules later, once
 * cloud data exists). So we ship it as NEXT_PUBLIC_* and read each as a literal
 * `process.env.NEXT_PUBLIC_FIREBASE_*` so Next inlines it at build time.
 *
 * Init is LAZY and `window`-guarded so the static build still prerenders every
 * page cleanly (firebase/auth touches window/indexedDB).
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  type Auth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * Single source of truth that gates ALL auth UI — exactly like `isAiEnabled()`
 * gates the AI features. True only when the Firebase web config is present.
 * Safe to call on the server (reads build-time-inlined env, no SDK access).
 */
export function isAuthEnabled(): boolean {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
}

let cachedAuth: Auth | null = null;

/**
 * Lazily create the single Firebase Auth instance. Returns null on the server
 * or when Firebase isn't configured (callers degrade gracefully). Uses
 * browserLocalPersistence so the session survives a reload.
 */
export function getFirebaseAuth(): Auth | null {
  if (typeof window === "undefined" || !isAuthEnabled()) return null;
  if (cachedAuth) return cachedAuth;
  const app = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig as Record<string, string>);
  cachedAuth = getAuth(app);
  void setPersistence(cachedAuth, browserLocalPersistence).catch(() => {
    /* persistence is best-effort; auth still works in-memory if it fails */
  });
  return cachedAuth;
}
