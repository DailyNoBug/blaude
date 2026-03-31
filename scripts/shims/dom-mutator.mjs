import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);
const mod = require(path.join(process.cwd(), "node_modules/.pnpm/dom-mutator@0.6.0/node_modules/dom-mutator/dist/dom-mutator.cjs.development.js"));

export const connectGlobalObserver = mod.connectGlobalObserver;
export const disconnectGlobalObserver = mod.disconnectGlobalObserver;
export const validAttributeName = mod.validAttributeName;
export default mod.default ?? mod;
