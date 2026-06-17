/**
 * Mobile auth context. Email/password + sign-out work with only the Firebase
 * config (pure-JS Firebase Auth — no native modules, no rebuild needed).
 *
 * Google sign-in on iOS needs native bits (expo-auth-session + a reversed-client
 * URL scheme + a dev-build rebuild) AND an iOS OAuth client id, so it's a
 * documented follow-up (see README → "Accounts on mobile"). Until then
 * `googleEnabled` is false, the Google button is hidden, and signInWithGoogle
 * throws a clear message.
 *
 * When Firebase isn't configured the whole thing is inert and the auth UI hides.
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
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, isAuthEnabled } from "./config";

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
    case "auth/network-request-failed":
      return "Network error — check your connection and try again.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

interface AuthValue {
  user: User | null;
  loading: boolean;
  enabled: boolean;
  googleEnabled: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName?: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  updateDisplayName: (name: string) => Promise<void>;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const enabled = isAuthEnabled();
  // Google on mobile needs a native rebuild + OAuth client id (see README);
  // off for now so the button is hidden and email/password is the path.
  const googleEnabled = false;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(enabled);

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
    throw new Error("Google sign-in on mobile isn't set up yet — use email & password.");
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
        if (displayName && cred.user) await updateProfile(cred.user, { displayName });
      } catch (e) {
        throw new Error(friendlyAuthError(e));
      }
    },
    [],
  );

  const signOutUser = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    // Do NOT clear srf:* — pantry/grocery/diary stay device-local.
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
        googleEnabled,
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

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
