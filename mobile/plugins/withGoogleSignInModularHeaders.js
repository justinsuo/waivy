/* eslint-disable @typescript-eslint/no-require-imports -- Expo config plugins run in Node (CommonJS), not the RN bundle. */
const { withDangerousMod } = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

/**
 * GoogleSignin (a Swift pod, pulled in by @react-native-google-signin) depends on
 * AppCheckCore, whose own deps GoogleUtilities & RecaptchaInterop don't define
 * module maps. As static libraries that breaks the Swift import, failing
 * `pod install` with:
 *   "The Swift pod `AppCheckCore` depends upon `GoogleUtilities` and
 *    `RecaptchaInterop`, which do not define modules."
 *
 * Declaring those pods with `:modular_headers => true` makes CocoaPods generate
 * the module maps. This is the surgical fix the error itself recommends — and
 * unlike `use_frameworks! :static` it's safe with the New Architecture (default
 * on Expo SDK 56), so it won't disturb React Native codegen.
 */
const MODULAR_PODS = ["GoogleUtilities", "RecaptchaInterop", "AppCheckCore"];
const MARKER = "pod 'GoogleUtilities', :modular_headers => true";

module.exports = function withGoogleSignInModularHeaders(config) {
  return withDangerousMod(config, [
    "ios",
    (cfg) => {
      const podfilePath = path.join(cfg.modRequest.platformProjectRoot, "Podfile");
      let contents = fs.readFileSync(podfilePath, "utf8");
      if (contents.includes(MARKER)) return cfg; // already injected

      const inject =
        "\n  # Module maps for GoogleSignin/AppCheckCore deps (static-lib build).\n" +
        MODULAR_PODS.map((p) => `  pod '${p}', :modular_headers => true`).join("\n") +
        "\n";

      // Insert just inside the app target so the pods build with module maps.
      contents = contents.replace(/(target ['"][^'"]+['"] do\n)/, `$1${inject}`);
      fs.writeFileSync(podfilePath, contents);
      return cfg;
    },
  ]);
};
