import { createRequire } from "module";

const require = createRequire(import.meta.url);
const ajv = require("ajv");

export const Ajv = ajv.Ajv ?? ajv.default ?? ajv;
export const CodeGen = ajv.CodeGen;
export const KeywordCxt = ajv.KeywordCxt;
export const MissingRefError = ajv.MissingRefError;
export const Name = ajv.Name;
export const ValidationError = ajv.ValidationError;
export const _ = ajv._;
export const nil = ajv.nil;
export const str = ajv.str;
export const stringify = ajv.stringify;
export default ajv.default ?? ajv;
