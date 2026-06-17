/**
 * Firebase init for the mobile app.
 *
 * Same project as the web app, but React Native needs its own setup:
 *  - persistence is AsyncStorage (the RN equivalent of browserLocalPersistence),
 *    so the session survives app restarts;
 *  - the config comes from EXPO_PUBLIC_FIREBASE_* (Expo inlines those), and
 *    auth is OPTIONAL — when unset, isAuthEnabled() is false and all auth UI is
 *    hidden (graceful degradation, same as the AI features).
 */
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getAuth, type Auth, type Persistence } from "firebase/auth";
import * as fbAuth from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// getReactNativePersistence is exported by firebase/auth's React-Native build
// (which Metro resolves via the package's "react-native" export condition) but
// isn't in the default web typings — reach it through a typed namespace cast.
const getReactNativePersistence = (
  fbAuth as unknown as { getReactNativePersistence: (storage: unknown) => Persistence }
).getReactNativePersistence;

const cfg = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

/** Optional Google OAuth iOS client id (enables the Google button). */
export const GOOGLE_IOS_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || "";

/** True only when the Firebase config is present — gates all auth UI. */
export function isAuthEnabled(): boolean {
  return !!(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId);
}

let cachedAuth: Auth | null = null;

/** Lazily create the single Auth instance with AsyncStorage persistence. */
export function getFirebaseAuth(): Auth | null {
  if (!isAuthEnabled()) return null;
  if (cachedAuth) return cachedAuth;
  const app = getApps().length ? getApp() : initializeApp(cfg as Record<string, string>);
  try {
    cachedAuth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch {
    // Already initialized (e.g. after a Fast Refresh) — reuse it.
    cachedAuth = getAuth(app);
  }
  return cachedAuth;
}
