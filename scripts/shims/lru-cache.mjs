import { createRequire } from "module";

const require = createRequire(import.meta.url);
const mod = require("lru-cache");

export const LRUCache = mod.LRUCache ?? mod.default ?? mod;
export default mod.default ?? mod;
