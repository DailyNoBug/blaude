import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);
const mod = require(path.join(process.cwd(), "node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"));

export const spawn = mod.spawn;
export const sync = mod.sync;
export default mod;
