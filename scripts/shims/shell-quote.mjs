import { createRequire } from "module";

const require = createRequire(import.meta.url);
const shellQuote = require("shell-quote");

export const parse = shellQuote.parse;
export const quote = shellQuote.quote;
export default shellQuote;
