import { createRequire } from "module";

const require = createRequire(import.meta.url);
const mod = require("semver");

export const coerce = mod.coerce;
export const gte = mod.gte;
export const major = mod.major;
export const minor = mod.minor;
export const patch = mod.patch;
export const satisfies = mod.satisfies;
export default mod;
