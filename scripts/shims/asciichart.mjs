import { createRequire } from "module";

const require = createRequire(import.meta.url);
const asciichart = require("asciichart");

export const plot = asciichart.plot;
export default asciichart;
