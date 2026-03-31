import { createRequire } from "module";

const require = createRequire(import.meta.url);
const mod = require("marked");

export const Hooks = mod.Hooks;
export const Lexer = mod.Lexer;
export const Marked = mod.Marked;
export const Parser = mod.Parser;
export const Renderer = mod.Renderer;
export const TextRenderer = mod.TextRenderer;
export const Tokenizer = mod.Tokenizer;
export const defaults = mod.defaults;
export const getDefaults = mod.getDefaults;
export const lexer = mod.lexer;
export const marked = mod.marked ?? mod.default ?? mod;
export const options = mod.options;
export const parse = mod.parse;
export const parseInline = mod.parseInline;
export const parser = mod.parser;
export const setOptions = mod.setOptions;
export const use = mod.use;
export const walkTokens = mod.walkTokens;
export default mod.default ?? mod;
