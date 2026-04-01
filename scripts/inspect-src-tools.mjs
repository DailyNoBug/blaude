import { applySrcRuntimeDefaults, installSrcRuntimeGlobals } from "./src-runtime-env.mjs";

await installSrcRuntimeGlobals(process.cwd());
applySrcRuntimeDefaults();

const { getEmptyToolPermissionContext } = await import("../src/Tool.ts");
const { getTools } = await import("../src/tools.ts");

const tools = getTools(getEmptyToolPermissionContext());
const payload = {
  count: tools.length,
  names: tools.map((tool) => tool.name).sort(),
};

process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
