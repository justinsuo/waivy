import { useEffect, useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Screen, ScreenHeader } from "~/components/Screen";
import { Txt, Row, Card, Button, Field, Press, EmptyState, Divider } from "~/components/ui";
import { toast } from "~/components/Toast";
import { colors, space, radius } from "~/theme";
import { useAuth } from "~/lib/firebase/auth";

function initials(name?: string | null, email?: string | null): string {
  const src = (name || email || "?").trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}
function providerLabel(id?: string): string {
  if (id === "google.com") return "Google";
  if (id === "password") return "Email & password";
  return id || "Unknown";
}

export default function AccountScreen() {
  const { user, loading, enabled, signOutUser, updateDisplayName } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    // `!out` so an in-progress sign-out (which nulls `user`) doesn't race the
    // handler's router.replace("/") and strand the user on the login modal.
    if (enabled && !loading && !user && !out) router.replace("/login");
  }, [enabled, loading, user, out]);

  if (!enabled) {
    return (
      <Screen>
        <ScreenHeader title="Account" back />
        <EmptyState emoji="🔒" title="Accounts aren't set up"
          subtitle="Sign-in isn't configured on this build. Your data is saved on this device and works without an account."
          action={<Button title="Back" onPress={() => router.back()} />} />
      </Screen>
    );
  }

  if (loading || !user) {
    return (
      <Screen>
        <ScreenHeader title="Account" back />
        <View style={{ alignItems: "center", paddingVertical: space.xxxl, gap: 10 }}>
          <ActivityIndicator color={colors.basil} />
          <Txt variant="caption" muted>Loading your account…</Txt>
        </View>
      </Screen>
    );
  }

  const provider = providerLabel(user.providerData[0]?.providerId);

  async function saveName() {
    const trimmed = name.trim();
    if (!trimmed) { setEditing(false); return; }
    setSaving(true);
    try {
      await updateDisplayName(trimmed);
      toast("Name updated", "success");
      setEditing(false);
    } catch (e) {
      toast(e instanceof Error ? e.message : "Couldn't update name", "error");
    } finally {
      setSaving(false);
    }
  }

  async function signOut() {
    setOut(true);
    try {
      await signOutUser();
      toast("Signed out — your recipes & pantry stay on this device", "info");
      router.replace("/");
    } catch {
      setOut(false);
      toast("Couldn't sign out — try again", "error");
    }
  }

  return (
    <Screen>
      <ScreenHeader title="Your account" back />

      <Card style={{ gap: 16 }}>
        <Row gap={14} align="center">
          {user.photoURL ? (
            <Image source={{ uri: user.photoURL }} style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: colors.oat }} />
          ) : (
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: colors.basilSoft, alignItems: "center", justifyContent: "center" }}>
              <Txt variant="title" color={colors.basilShadow}>{initials(user.displayName, user.email)}</Txt>
            </View>
          )}
          <View style={{ flex: 1, gap: 2 }}>
            {editing ? (
              <Row gap={8}>
                <Field placeholder="Your name" value={name} onChangeText={setName} editable={!saving} autoFocus style={{ flex: 1 }} />
                <Press onPress={saveName} disabled={saving} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: colors.basil, alignItems: "center", justifyContent: "center" }}>
                  {saving ? <ActivityIndicator color="#fff" size="small" /> : <Feather name="check" size={18} color="#fff" />}
                </Press>
              </Row>
            ) : (
              <Row gap={8} align="center">
                <Txt variant="subheading" numberOfLines={1} style={{ flex: 1 }}>{user.displayName || "No name set"}</Txt>
                <Press onPress={() => { setName(user.displayName || ""); setEditing(true); }} haptic="selection" style={{ padding: 6 }}>
                  <Feather name="edit-2" size={15} color={colors.textMuted} />
                </Press>
              </Row>
            )}
            <Txt variant="caption" muted numberOfLines={1}>{user.email}</Txt>
          </View>
        </Row>

        <Divider />
        <Row justify="space-between">
          <Txt variant="caption" muted>Sign-in method</Txt>
          <Txt variant="caption" weight="700">{provider}</Txt>
        </Row>
        <Row justify="space-between">
          <Txt variant="caption" muted>Email verified</Txt>
          {user.emailVerified
            ? <Txt variant="caption" weight="700" color={colors.basilShadow}>Verified ✓</Txt>
            : <Txt variant="caption" weight="700" color={colors.carrot}>Not verified</Txt>}
        </Row>
      </Card>

      <Button title="Settings" icon="settings" variant="secondary" full style={{ marginTop: space.md }} onPress={() => router.push("/settings")} />
      <Button title={out ? "Signing out…" : "Sign out"} icon="log-out" variant="danger" full loading={out} style={{ marginTop: space.sm }} onPress={signOut} />

      <Txt variant="caption" muted center style={{ marginTop: space.md }}>Signing out keeps your pantry, recipes, and lists on this device.</Txt>
    </Screen>
  );
}
