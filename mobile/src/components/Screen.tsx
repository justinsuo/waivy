/** Screen scaffolds: safe-area aware, themed background, optional header. */
import React from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { space, CONTENT_MAX_WIDTH } from "~/theme";
import { useTheme } from "~/theme/ThemeProvider";
import { Txt, Row, IconButton } from "./ui";

export function ScreenHeader({
  title,
  subtitle,
  back,
  right,
}: {
  title: string;
  subtitle?: string;
  back?: boolean;
  right?: React.ReactNode;
}) {
  const { colors } = useTheme();
  return (
    <Row justify="space-between" align="flex-start" style={{ marginBottom: space.lg }}>
      <Row gap={10} align="center" style={{ flex: 1 }}>
        {back ? (
          <IconButton icon="chevron-left" onPress={() => router.back()} size={40} bg={colors.surface} accessibilityLabel="Go back" />
        ) : null}
        <View style={{ flex: 1 }}>
          <Txt variant="title">{title}</Txt>
          {subtitle ? <Txt variant="label" style={{ marginTop: 2 }}>{subtitle}</Txt> : null}
        </View>
      </Row>
      {right}
    </Row>
  );
}

export function Screen({
  children,
  scroll = true,
  padded = true,
  refreshing,
  onRefresh,
  contentStyle,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  padded?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  contentStyle?: any;
}) {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const bg = { flex: 1, backgroundColor: colors.bg };
  const vpad = {
    paddingTop: insets.top + space.md,
    paddingBottom: insets.bottom + 96, // clear the tab bar + FAB
  };
  // Centered, width-capped column so content fills phones edge-to-edge but
  // doesn't stretch wide on iPad / large screens (cap is a no-op on phones).
  const column = {
    width: "100%" as const,
    maxWidth: CONTENT_MAX_WIDTH,
    alignSelf: "center" as const,
    paddingHorizontal: padded ? space.lg : 0,
  };
  if (!scroll) {
    return (
      <View style={[bg, vpad]}>
        <View style={[{ flex: 1 }, column, contentStyle]}>{children}</View>
      </View>
    );
  }
  return (
    <ScrollView
      style={bg}
      contentContainerStyle={[vpad, { flexGrow: 1, alignItems: "center" }]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustKeyboardInsets // lift the focused field/CTA above the keyboard
      // iOS only lets you pull-to-refresh when the scroll view can bounce; force
      // it when a refresh handler is present so the gesture works even if the
      // content is shorter than the screen.
      alwaysBounceVertical={!!onRefresh}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={!!refreshing}
            onRefresh={onRefresh}
            tintColor={colors.basil}
            colors={[colors.basil]}
            // Drop the spinner below the status bar / notch so it reads as a
            // proper top refresh wheel, not a box jammed under the clock.
            progressViewOffset={insets.top + 4}
          />
        ) : undefined
      }
    >
      <View style={[column, contentStyle]}>{children}</View>
    </ScrollView>
  );
}
