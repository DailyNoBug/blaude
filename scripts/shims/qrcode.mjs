import { createRequire } from "module";

const require = createRequire(import.meta.url);
const mod = require("qrcode");

export const toString = mod.toString;
export default mod;
