import { useEffect, useState } from "react";
import { View } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Screen, ScreenHeader } from "~/components/Screen";
import { Txt, Row, Card, Button, Field, Press, Divider, EmptyState } from "~/components/ui";
import { toast } from "~/components/Toast";
import { colors, space, radius } from "~/theme";
import { useAuth } from "~/lib/firebase/auth";

function validEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
}

export default function LoginScreen() {
  const { user, loading, enabled, googleEnabled, signInWithGoogle, signInWithEmail, signUpWithEmail, sendPasswordReset } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dismiss the modal once signed in.
  useEffect(() => {
    if (!loading && user) router.back();
  }, [user, loading]);

  if (!enabled) {
    return (
      <Screen>
        <ScreenHeader title="Sign in" back />
        <EmptyState
          emoji="🔒"
          title="Sign-in isn't set up"
          subtitle="Accounts aren't configured on this build. Everything in Waivy still works — your pantry, recipes, and lists are saved on this device."
          action={<Button title="Back" onPress={() => router.back()} />}
        />
      </Screen>
    );
  }

  async function submit() {
    setError(null);
    if (!validEmail(email)) return setError("Enter a valid email address.");
    if (pw.length < 8) return setError("Password must be at least 8 characters.");
    if (mode === "signup" && pw !== confirm) return setError("Passwords don't match.");
    setBusy(true);
    try {
      if (mode === "signin") await signInWithEmail(email.trim(), pw);
      else await signUpWithEmail(email.trim(), pw, name.trim() || undefined);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setBusy(false);
    }
  }

  async function google() {
    setError(null);
    setBusy(true);
    try {
      await signInWithGoogle();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Google sign-in failed.");
    } finally {
      setBusy(false);
    }
  }

  async function forgot() {
    setError(null);
    if (!validEmail(email)) return setError("Enter your email above first, then tap Forgot password.");
    try {
      await sendPasswordReset(email.trim());
      toast("Password reset email sent — check your inbox", "success");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't send the reset email.");
    }
  }

  return (
    <Screen>
      <ScreenHeader title={mode === "signin" ? "Welcome back" : "Create account"} back />
      <Txt variant="caption" muted style={{ marginTop: -8, marginBottom: space.lg }}>
        {mode === "signin" ? "Sign in to sync your account across devices." : "Save your account so it travels with you."}
      </Txt>

      <Card style={{ gap: 14 }}>
        {googleEnabled ? (
          <>
            <Press onPress={google} disabled={busy} haptic="selection"
              style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingVertical: 13, backgroundColor: colors.surface }}>
              <FontAwesome name="google" size={16} color={colors.text} />
              <Txt weight="700">Continue with Google</Txt>
            </Press>
            <Row gap={10} align="center"><Divider style={{ flex: 1 }} /><Txt variant="caption" muted>or</Txt><Divider style={{ flex: 1 }} /></Row>
          </>
        ) : null}

        {mode === "signup" ? (
          <Field label="Name (optional)" placeholder="Your name" autoCapitalize="words" value={name} onChangeText={setName} editable={!busy} />
        ) : null}
        <Field label="Email" placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} autoComplete="email" value={email} onChangeText={setEmail} editable={!busy} />
        <Field label="Password" placeholder={mode === "signup" ? "8+ characters" : "Password"} secureTextEntry autoCapitalize="none" value={pw} onChangeText={setPw} editable={!busy} />
        {mode === "signup" ? (
          <Field label="Confirm password" placeholder="Re-enter password" secureTextEntry autoCapitalize="none" value={confirm} onChangeText={setConfirm} editable={!busy} />
        ) : null}

        {error ? (
          <View style={{ backgroundColor: colors.tomatoTint, borderRadius: radius.md, paddingHorizontal: 12, paddingVertical: 9 }}>
            <Txt variant="caption" color={colors.tomatoShadow}>{error}</Txt>
          </View>
        ) : null}

        <Button title={mode === "signin" ? "Sign in" : "Create account"} variant="primary" full loading={busy} onPress={submit} />

        {mode === "signin" ? (
          <Press onPress={forgot} disabled={busy} haptic="selection">
            <Txt variant="caption" weight="700" color={colors.basilShadow} center>Forgot password?</Txt>
          </Press>
        ) : null}
      </Card>

      <Press onPress={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }} style={{ marginTop: space.lg }} haptic="selection">
        <Txt variant="caption" muted center>
          {mode === "signin" ? "New to Waivy? " : "Already have an account? "}
          <Txt variant="caption" weight="800" color={colors.basilShadow}>{mode === "signin" ? "Create an account" : "Sign in"}</Txt>
        </Txt>
      </Press>

      <Txt variant="caption" muted center style={{ marginTop: space.md }}>
        <Feather name="lock" size={11} /> Your pantry & recipes stay on this device.
      </Txt>
    </Screen>
  );
}
