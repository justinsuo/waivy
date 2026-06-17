/**
 * Mobile auth context. Email/password + sign-out work with only the Firebase
 * config (pure-JS Firebase Auth — no native modules, no rebuild needed).
 *
 * Google sign-in on iOS uses @react-native-google-signin (native Google SDK) to
 * get an id_token, which we exchange for a Firebase credential. It needs the two
 * OAuth client ids (EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID + _IOS_CLIENT_ID) AND a
 * dev-build rebuild with the iOS URL scheme (app.json config plugin). Until both
 * client ids are set, isGoogleSignInConfigured() is false, so `googleEnabled` is
 * false and the Google button stays hidden — never a dead button.
 *
 * The native module is loaded with a lazy require() *inside* signInWithGoogle:
 * its spec calls TurboModuleRegistry.getEnforcing() at module-load, which throws
 * if the native side isn't compiled yet — so we must not touch it until the
 * rebuild ships. (Email/password never needs it.)
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
  GoogleAuthProvider,
  signInWithCredential,
  type User,
} from "firebase/auth";
import {
  getFirebaseAuth,
  isAuthEnabled,
  isGoogleSignInConfigured,
  GOOGLE_WEB_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from "./config";

// Minimal shape of the native module we lazy-require (avoids a top-level import
// that would crash before the native side is compiled — see file header).
type GoogleSignInResult = { type?: string; data?: { idToken?: string | null }; idToken?: string | null };
type GoogleSigninModule = {
  GoogleSignin: {
    configure: (opts: { webClientId: string; iosClientId?: string }) => void;
    hasPlayServices: (opts?: { showPlayServicesUpdateDialog?: boolean }) => Promise<boolean>;
    signIn: () => Promise<GoogleSignInResult>;
    signOut: () => Promise<unknown>;
  };
  statusCodes: { SIGN_IN_CANCELLED: string; IN_PROGRESS: string };
};

let googleConfigured = false;
function loadGoogleSignin(): GoogleSigninModule {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("@react-native-google-signin/google-signin") as GoogleSigninModule;
  if (!googleConfigured) {
    mod.GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID, // makes the id_token valid for Firebase
      iosClientId: GOOGLE_IOS_CLIENT_ID,
    });
    googleConfigured = true;
  }
  return mod;
}

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
  /** Resolves true when a session was established, false when the user cancelled. */
  signInWithGoogle: () => Promise<boolean>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName?: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  updateDisplayName: (name: string) => Promise<void>;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const enabled = isAuthEnabled();
  // Shown only when both OAuth client ids are set (and thus the rebuild shipped
  // the URL scheme). Until then the button is hidden and email/password is the path.
  const googleEnabled = enabled && isGoogleSignInConfigured();
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

  const signInWithGoogle = useCallback(async (): Promise<boolean> => {
    const auth = requireAuth();
    if (!isGoogleSignInConfigured()) {
      throw new Error("Google sign-in isn't set up on this build yet — use email & password.");
    }
    let google: GoogleSigninModule;
    try {
      google = loadGoogleSignin();
    } catch {
      // Native module missing → this build predates the Google rebuild.
      throw new Error("Google sign-in needs the latest app build. Please update the app, or use email & password.");
    }
    try {
      // iOS no-ops this; on Android it surfaces a Play-services prompt. Never fatal on iOS.
      await google.GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }).catch(() => {});
      const res = await google.GoogleSignin.signIn();
      if (res?.type === "cancelled") return false; // user backed out of the Google sheet
      const idToken = res?.data?.idToken ?? res?.idToken;
      if (!idToken) throw new Error("Google didn't return a sign-in token. Please try again.");
      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, credential);
      return true; // signed in — the caller keeps the form frozen; onAuthStateChanged dismisses it
    } catch (e) {
      const code = (e as { code?: string })?.code ?? "";
      if (code === google.statusCodes.SIGN_IN_CANCELLED || code === google.statusCodes.IN_PROGRESS) return false;
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
    // Best-effort: also drop the native Google session so the picker reappears
    // next time. Guarded + swallowed — never break sign-out, never touch the
    // native module on a build that lacks it.
    if (isGoogleSignInConfigured()) {
      try {
        await loadGoogleSignin().GoogleSignin.signOut();
      } catch {
        /* not signed in via Google, or native module absent — ignore */
      }
    }
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
