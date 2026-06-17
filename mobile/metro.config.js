// Metro config for the Waivy iPhone app.
//
// The mobile app shares the web app's business logic *in place*: it imports the
// same modules from ../src (recipes, ingredients, the nutrition/pricing/scoring
// engines, the Nourish calc engine, AI clients) and the cross-platform glue
// from ../shared/src. The `@/`, `@shared/`, and `~/` aliases are rewritten to
// relative paths by babel-plugin-module-resolver (see babel.config.js); Metro
// just needs to (1) watch the repo root so those out-of-tree files are bundled,
// and (2) resolve node_modules from both mobile/ and the repo root.
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const repoRoot = path.resolve(projectRoot, "..");

const config = getDefaultConfig(projectRoot);

config.watchFolders = [repoRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(repoRoot, "node_modules"),
];

// Force a SINGLE copy of React. Shared web files live in ../src and import
// "react"; Metro would otherwise resolve that to the *web* app's
// node_modules/react (a second React instance whose hooks dispatcher is null
// under the RN renderer) — which crashed shared hooks like useFoodSearch with
// "Cannot read property 'useState' of null". Resolving "react"/"react/*" as if
// from the mobile project guarantees the one React the renderer initialized.
const baseResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "react" || moduleName.startsWith("react/")) {
    return context.resolveRequest(
      { ...context, originModulePath: path.join(projectRoot, "metro.config.js") },
      moduleName,
      platform,
    );
  }
  return (baseResolveRequest ?? context.resolveRequest)(context, moduleName, platform);
};

module.exports = config;
