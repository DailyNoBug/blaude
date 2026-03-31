import { createRequire } from "module";

const require = createRequire(import.meta.url);
const runtime = require("react/compiler-runtime");

export const c = runtime.c;
export default runtime;
