import { applySrcRuntimeDefaults, installSrcRuntimeGlobals } from "./src-runtime-env.mjs";

if (process.argv[2] === "--") {
  process.argv.splice(2, 1);
}

await installSrcRuntimeGlobals(process.cwd());
applySrcRuntimeDefaults();

await import("../src/entrypoints/cli.tsx");
