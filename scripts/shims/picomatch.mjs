import { createRequire } from "module";

const require = createRequire(import.meta.url);
const picomatch = require("picomatch");

export default picomatch.default ?? picomatch;
