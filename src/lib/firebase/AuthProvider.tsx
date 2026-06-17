"use client";

/**
 * Auth context. Wraps Firebase `onAuthStateChanged` and exposes sign-in,
 * sign-up, sign-out, and password-reset. Mounted near the root in layout.tsx.
 *
 * - `loading` stays true until the first auth state resolves, so the UI never
 *   flashes signed-out → signed-in on load.
 * - When Firebase isn't configured, `enabled` is false, `loading` resolves
 *   immediately, and all the actions are inert — the app runs exactly as today.
 * - Firebase error codes are mapped to friendly messages; every action throws
 *   an Error whose `.message` is already user-safe.
 *
 * Forward seam: `user.uid` is exposed so a future cloud-sync layer can key data
 * by user. We build NO sync here, and sign-out does NOT touch `srf:*` data.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, isAuthEnabled } from "./config";

/** Map a Firebase auth error to a friendly, user-facing message. */
export function friendlyAuthError(e: unknown): string {
  const code = (e as { code?: string })?.code ?? "";
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Incorrect email or password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists — try signing in instead.";
    case "auth/weak-password":
      return "That password is too weak. Use at least 8 characters.";
    case "auth/invalid-email":
      return "That doesn't look like a valid email address.";
    case "auth/missing-password":
      return "Please enter your password.";
    case "auth/popup-blocked":
      return "Your browser blocked the sign-in popup. Allow popups for this site and try again.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/unauthorized-domain":
      return "This site isn't authorized for Google sign-in yet.";
    case "auth/network-request-failed":
      return "Network error — check your connection and try again.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  /** Whether Firebase is configured at all (gates all auth UI). */
  enabled: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (
    email: string,
    password: string,
    displayName?: string,
  ) => Promise<void>;
  signOutUser: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  updateDisplayName: (name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const enabled = isAuthEnabled();
  const [user, setUser] = useState<User | null>(null);
  // Only "loading" while we wait for Firebase's first auth state. When auth
  // isn't configured we're resolved immediately (no spinner, no flash).
  const [loading, setLoading] = useState(enabled);
  // currentUser is mutated in place by updateProfile — bump this to re-render.
  const [, force] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const auth = getFirebaseAuth();
    if (!auth) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, [enabled]);

  function requireAuth() {
    const auth = getFirebaseAuth();
    if (!auth) throw new Error("Sign-in isn't set up on this build.");
    return auth;
  }

  const signInWithGoogle = useCallback(async () => {
    const auth = requireAuth();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e) {
      throw new Error(friendlyAuthError(e));
    }
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    const auth = requireAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      throw new Error(friendlyAuthError(e));
    }
  }, []);

  const signUpWithEmail = useCallback(
    async (email: string, password: string, displayName?: string) => {
      const auth = requireAuth();
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (displayName && cred.user) {
          await updateProfile(cred.user, { displayName });
        }
      } catch (e) {
        throw new Error(friendlyAuthError(e));
      }
    },
    [],
  );

  const signOutUser = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    // Intentionally do NOT clear srf:* localStorage — in this auth-only scope
    // pantry/grocery/saved/diary are device-local, not tied to the account.
  }, []);

  const sendPasswordReset = useCallback(async (email: string) => {
    const auth = requireAuth();
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (e) {
      throw new Error(friendlyAuthError(e));
    }
  }, []);

  const updateDisplayName = useCallback(async (name: string) => {
    const auth = getFirebaseAuth();
    if (!auth?.currentUser) return;
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      setUser(auth.currentUser);
      force((n) => n + 1); // currentUser mutates in place; nudge a re-render
    } catch (e) {
      throw new Error(friendlyAuthError(e));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        enabled,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOutUser,
        sendPasswordReset,
        updateDisplayName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
