import { createRequire } from "module";

const require = createRequire(import.meta.url);
const diff = require("diff");

export const createPatch = diff.createPatch;
export const diffArrays = diff.diffArrays;
export const diffLines = diff.diffLines;
export const diffWordsWithSpace = diff.diffWordsWithSpace;
export const structuredPatch = diff.structuredPatch;
export default diff;
