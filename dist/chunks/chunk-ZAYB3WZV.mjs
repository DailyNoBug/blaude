#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/is-unicode-supported@2.1.0/node_modules/is-unicode-supported/index.js
import process2 from "node:process";
function isUnicodeSupported() {
  const { env } = process2;
  const { TERM, TERM_PROGRAM } = env;
  if (process2.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env.WT_SESSION) || Boolean(env.TERMINUS_SUBLIME) || env.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var init_is_unicode_supported = __esm({
  "node_modules/.pnpm/is-unicode-supported@2.1.0/node_modules/is-unicode-supported/index.js"() {
  }
});

// node_modules/.pnpm/figures@6.1.0/node_modules/figures/index.js
var common, specialMainSymbols, specialFallbackSymbols, mainSymbols, fallbackSymbols, shouldUseMain, figures, figures_default, replacements;
var init_figures = __esm({
  "node_modules/.pnpm/figures@6.1.0/node_modules/figures/index.js"() {
    init_is_unicode_supported();
    common = {
      circleQuestionMark: "(?)",
      questionMarkPrefix: "(?)",
      square: "\u2588",
      squareDarkShade: "\u2593",
      squareMediumShade: "\u2592",
      squareLightShade: "\u2591",
      squareTop: "\u2580",
      squareBottom: "\u2584",
      squareLeft: "\u258C",
      squareRight: "\u2590",
      squareCenter: "\u25A0",
      bullet: "\u25CF",
      dot: "\u2024",
      ellipsis: "\u2026",
      pointerSmall: "\u203A",
      triangleUp: "\u25B2",
      triangleUpSmall: "\u25B4",
      triangleDown: "\u25BC",
      triangleDownSmall: "\u25BE",
      triangleLeftSmall: "\u25C2",
      triangleRightSmall: "\u25B8",
      home: "\u2302",
      heart: "\u2665",
      musicNote: "\u266A",
      musicNoteBeamed: "\u266B",
      arrowUp: "\u2191",
      arrowDown: "\u2193",
      arrowLeft: "\u2190",
      arrowRight: "\u2192",
      arrowLeftRight: "\u2194",
      arrowUpDown: "\u2195",
      almostEqual: "\u2248",
      notEqual: "\u2260",
      lessOrEqual: "\u2264",
      greaterOrEqual: "\u2265",
      identical: "\u2261",
      infinity: "\u221E",
      subscriptZero: "\u2080",
      subscriptOne: "\u2081",
      subscriptTwo: "\u2082",
      subscriptThree: "\u2083",
      subscriptFour: "\u2084",
      subscriptFive: "\u2085",
      subscriptSix: "\u2086",
      subscriptSeven: "\u2087",
      subscriptEight: "\u2088",
      subscriptNine: "\u2089",
      oneHalf: "\xBD",
      oneThird: "\u2153",
      oneQuarter: "\xBC",
      oneFifth: "\u2155",
      oneSixth: "\u2159",
      oneEighth: "\u215B",
      twoThirds: "\u2154",
      twoFifths: "\u2156",
      threeQuarters: "\xBE",
      threeFifths: "\u2157",
      threeEighths: "\u215C",
      fourFifths: "\u2158",
      fiveSixths: "\u215A",
      fiveEighths: "\u215D",
      sevenEighths: "\u215E",
      line: "\u2500",
      lineBold: "\u2501",
      lineDouble: "\u2550",
      lineDashed0: "\u2504",
      lineDashed1: "\u2505",
      lineDashed2: "\u2508",
      lineDashed3: "\u2509",
      lineDashed4: "\u254C",
      lineDashed5: "\u254D",
      lineDashed6: "\u2574",
      lineDashed7: "\u2576",
      lineDashed8: "\u2578",
      lineDashed9: "\u257A",
      lineDashed10: "\u257C",
      lineDashed11: "\u257E",
      lineDashed12: "\u2212",
      lineDashed13: "\u2013",
      lineDashed14: "\u2010",
      lineDashed15: "\u2043",
      lineVertical: "\u2502",
      lineVerticalBold: "\u2503",
      lineVerticalDouble: "\u2551",
      lineVerticalDashed0: "\u2506",
      lineVerticalDashed1: "\u2507",
      lineVerticalDashed2: "\u250A",
      lineVerticalDashed3: "\u250B",
      lineVerticalDashed4: "\u254E",
      lineVerticalDashed5: "\u254F",
      lineVerticalDashed6: "\u2575",
      lineVerticalDashed7: "\u2577",
      lineVerticalDashed8: "\u2579",
      lineVerticalDashed9: "\u257B",
      lineVerticalDashed10: "\u257D",
      lineVerticalDashed11: "\u257F",
      lineDownLeft: "\u2510",
      lineDownLeftArc: "\u256E",
      lineDownBoldLeftBold: "\u2513",
      lineDownBoldLeft: "\u2512",
      lineDownLeftBold: "\u2511",
      lineDownDoubleLeftDouble: "\u2557",
      lineDownDoubleLeft: "\u2556",
      lineDownLeftDouble: "\u2555",
      lineDownRight: "\u250C",
      lineDownRightArc: "\u256D",
      lineDownBoldRightBold: "\u250F",
      lineDownBoldRight: "\u250E",
      lineDownRightBold: "\u250D",
      lineDownDoubleRightDouble: "\u2554",
      lineDownDoubleRight: "\u2553",
      lineDownRightDouble: "\u2552",
      lineUpLeft: "\u2518",
      lineUpLeftArc: "\u256F",
      lineUpBoldLeftBold: "\u251B",
      lineUpBoldLeft: "\u251A",
      lineUpLeftBold: "\u2519",
      lineUpDoubleLeftDouble: "\u255D",
      lineUpDoubleLeft: "\u255C",
      lineUpLeftDouble: "\u255B",
      lineUpRight: "\u2514",
      lineUpRightArc: "\u2570",
      lineUpBoldRightBold: "\u2517",
      lineUpBoldRight: "\u2516",
      lineUpRightBold: "\u2515",
      lineUpDoubleRightDouble: "\u255A",
      lineUpDoubleRight: "\u2559",
      lineUpRightDouble: "\u2558",
      lineUpDownLeft: "\u2524",
      lineUpBoldDownBoldLeftBold: "\u252B",
      lineUpBoldDownBoldLeft: "\u2528",
      lineUpDownLeftBold: "\u2525",
      lineUpBoldDownLeftBold: "\u2529",
      lineUpDownBoldLeftBold: "\u252A",
      lineUpDownBoldLeft: "\u2527",
      lineUpBoldDownLeft: "\u2526",
      lineUpDoubleDownDoubleLeftDouble: "\u2563",
      lineUpDoubleDownDoubleLeft: "\u2562",
      lineUpDownLeftDouble: "\u2561",
      lineUpDownRight: "\u251C",
      lineUpBoldDownBoldRightBold: "\u2523",
      lineUpBoldDownBoldRight: "\u2520",
      lineUpDownRightBold: "\u251D",
      lineUpBoldDownRightBold: "\u2521",
      lineUpDownBoldRightBold: "\u2522",
      lineUpDownBoldRight: "\u251F",
      lineUpBoldDownRight: "\u251E",
      lineUpDoubleDownDoubleRightDouble: "\u2560",
      lineUpDoubleDownDoubleRight: "\u255F",
      lineUpDownRightDouble: "\u255E",
      lineDownLeftRight: "\u252C",
      lineDownBoldLeftBoldRightBold: "\u2533",
      lineDownLeftBoldRightBold: "\u252F",
      lineDownBoldLeftRight: "\u2530",
      lineDownBoldLeftBoldRight: "\u2531",
      lineDownBoldLeftRightBold: "\u2532",
      lineDownLeftRightBold: "\u252E",
      lineDownLeftBoldRight: "\u252D",
      lineDownDoubleLeftDoubleRightDouble: "\u2566",
      lineDownDoubleLeftRight: "\u2565",
      lineDownLeftDoubleRightDouble: "\u2564",
      lineUpLeftRight: "\u2534",
      lineUpBoldLeftBoldRightBold: "\u253B",
      lineUpLeftBoldRightBold: "\u2537",
      lineUpBoldLeftRight: "\u2538",
      lineUpBoldLeftBoldRight: "\u2539",
      lineUpBoldLeftRightBold: "\u253A",
      lineUpLeftRightBold: "\u2536",
      lineUpLeftBoldRight: "\u2535",
      lineUpDoubleLeftDoubleRightDouble: "\u2569",
      lineUpDoubleLeftRight: "\u2568",
      lineUpLeftDoubleRightDouble: "\u2567",
      lineUpDownLeftRight: "\u253C",
      lineUpBoldDownBoldLeftBoldRightBold: "\u254B",
      lineUpDownBoldLeftBoldRightBold: "\u2548",
      lineUpBoldDownLeftBoldRightBold: "\u2547",
      lineUpBoldDownBoldLeftRightBold: "\u254A",
      lineUpBoldDownBoldLeftBoldRight: "\u2549",
      lineUpBoldDownLeftRight: "\u2540",
      lineUpDownBoldLeftRight: "\u2541",
      lineUpDownLeftBoldRight: "\u253D",
      lineUpDownLeftRightBold: "\u253E",
      lineUpBoldDownBoldLeftRight: "\u2542",
      lineUpDownLeftBoldRightBold: "\u253F",
      lineUpBoldDownLeftBoldRight: "\u2543",
      lineUpBoldDownLeftRightBold: "\u2544",
      lineUpDownBoldLeftBoldRight: "\u2545",
      lineUpDownBoldLeftRightBold: "\u2546",
      lineUpDoubleDownDoubleLeftDoubleRightDouble: "\u256C",
      lineUpDoubleDownDoubleLeftRight: "\u256B",
      lineUpDownLeftDoubleRightDouble: "\u256A",
      lineCross: "\u2573",
      lineBackslash: "\u2572",
      lineSlash: "\u2571"
    };
    specialMainSymbols = {
      tick: "\u2714",
      info: "\u2139",
      warning: "\u26A0",
      cross: "\u2718",
      squareSmall: "\u25FB",
      squareSmallFilled: "\u25FC",
      circle: "\u25EF",
      circleFilled: "\u25C9",
      circleDotted: "\u25CC",
      circleDouble: "\u25CE",
      circleCircle: "\u24DE",
      circleCross: "\u24E7",
      circlePipe: "\u24BE",
      radioOn: "\u25C9",
      radioOff: "\u25EF",
      checkboxOn: "\u2612",
      checkboxOff: "\u2610",
      checkboxCircleOn: "\u24E7",
      checkboxCircleOff: "\u24BE",
      pointer: "\u276F",
      triangleUpOutline: "\u25B3",
      triangleLeft: "\u25C0",
      triangleRight: "\u25B6",
      lozenge: "\u25C6",
      lozengeOutline: "\u25C7",
      hamburger: "\u2630",
      smiley: "\u32E1",
      mustache: "\u0DF4",
      star: "\u2605",
      play: "\u25B6",
      nodejs: "\u2B22",
      oneSeventh: "\u2150",
      oneNinth: "\u2151",
      oneTenth: "\u2152"
    };
    specialFallbackSymbols = {
      tick: "\u221A",
      info: "i",
      warning: "\u203C",
      cross: "\xD7",
      squareSmall: "\u25A1",
      squareSmallFilled: "\u25A0",
      circle: "( )",
      circleFilled: "(*)",
      circleDotted: "( )",
      circleDouble: "( )",
      circleCircle: "(\u25CB)",
      circleCross: "(\xD7)",
      circlePipe: "(\u2502)",
      radioOn: "(*)",
      radioOff: "( )",
      checkboxOn: "[\xD7]",
      checkboxOff: "[ ]",
      checkboxCircleOn: "(\xD7)",
      checkboxCircleOff: "( )",
      pointer: ">",
      triangleUpOutline: "\u2206",
      triangleLeft: "\u25C4",
      triangleRight: "\u25BA",
      lozenge: "\u2666",
      lozengeOutline: "\u25CA",
      hamburger: "\u2261",
      smiley: "\u263A",
      mustache: "\u250C\u2500\u2510",
      star: "\u2736",
      play: "\u25BA",
      nodejs: "\u2666",
      oneSeventh: "1/7",
      oneNinth: "1/9",
      oneTenth: "1/10"
    };
    mainSymbols = { ...common, ...specialMainSymbols };
    fallbackSymbols = { ...common, ...specialFallbackSymbols };
    shouldUseMain = isUnicodeSupported();
    figures = shouldUseMain ? mainSymbols : fallbackSymbols;
    figures_default = figures;
    replacements = Object.entries(specialMainSymbols);
  }
});

// node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
var init_is_plain_obj = __esm({
  "node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js"() {
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/file-url.js
import { fileURLToPath } from "node:url";
var safeNormalizeFileUrl, normalizeDenoExecPath, isDenoExecPath, normalizeFileUrl;
var init_file_url = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/file-url.js"() {
    safeNormalizeFileUrl = (file, name) => {
      const fileString = normalizeFileUrl(normalizeDenoExecPath(file));
      if (typeof fileString !== "string") {
        throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`);
      }
      return fileString;
    };
    normalizeDenoExecPath = (file) => isDenoExecPath(file) ? file.toString() : file;
    isDenoExecPath = (file) => typeof file !== "string" && file && Object.getPrototypeOf(file) === String.prototype;
    normalizeFileUrl = (file) => file instanceof URL ? fileURLToPath(file) : file;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/parameters.js
var normalizeParameters;
var init_parameters = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/parameters.js"() {
    init_is_plain_obj();
    init_file_url();
    normalizeParameters = (rawFile, rawArguments = [], rawOptions = {}) => {
      const filePath = safeNormalizeFileUrl(rawFile, "First argument");
      const [commandArguments, options] = isPlainObject(rawArguments) ? [[], rawArguments] : [rawArguments, rawOptions];
      if (!Array.isArray(commandArguments)) {
        throw new TypeError(`Second argument must be either an array of arguments or an options object: ${commandArguments}`);
      }
      if (commandArguments.some((commandArgument) => typeof commandArgument === "object" && commandArgument !== null)) {
        throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`);
      }
      const normalizedArguments = commandArguments.map(String);
      const nullByteArgument = normalizedArguments.find((normalizedArgument) => normalizedArgument.includes("\0"));
      if (nullByteArgument !== void 0) {
        throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`);
      }
      if (!isPlainObject(options)) {
        throw new TypeError(`Last argument must be an options object: ${options}`);
      }
      return [filePath, normalizedArguments, options];
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/uint-array.js
import { StringDecoder } from "node:string_decoder";
var objectToString, isArrayBuffer, isUint8Array, bufferToUint8Array, textEncoder, stringToUint8Array, textDecoder, uint8ArrayToString, joinToString, uint8ArraysToStrings, joinToUint8Array, stringsToUint8Arrays, concatUint8Arrays, getJoinLength;
var init_uint_array = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/uint-array.js"() {
    ({ toString: objectToString } = Object.prototype);
    isArrayBuffer = (value) => objectToString.call(value) === "[object ArrayBuffer]";
    isUint8Array = (value) => objectToString.call(value) === "[object Uint8Array]";
    bufferToUint8Array = (buffer) => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    textEncoder = new TextEncoder();
    stringToUint8Array = (string) => textEncoder.encode(string);
    textDecoder = new TextDecoder();
    uint8ArrayToString = (uint8Array) => textDecoder.decode(uint8Array);
    joinToString = (uint8ArraysOrStrings, encoding) => {
      const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding);
      return strings.join("");
    };
    uint8ArraysToStrings = (uint8ArraysOrStrings, encoding) => {
      if (encoding === "utf8" && uint8ArraysOrStrings.every((uint8ArrayOrString) => typeof uint8ArrayOrString === "string")) {
        return uint8ArraysOrStrings;
      }
      const decoder = new StringDecoder(encoding);
      const strings = uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString).map((uint8Array) => decoder.write(uint8Array));
      const finalString = decoder.end();
      return finalString === "" ? strings : [...strings, finalString];
    };
    joinToUint8Array = (uint8ArraysOrStrings) => {
      if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
        return uint8ArraysOrStrings[0];
      }
      return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings));
    };
    stringsToUint8Arrays = (uint8ArraysOrStrings) => uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString);
    concatUint8Arrays = (uint8Arrays) => {
      const result = new Uint8Array(getJoinLength(uint8Arrays));
      let index = 0;
      for (const uint8Array of uint8Arrays) {
        result.set(uint8Array, index);
        index += uint8Array.length;
      }
      return result;
    };
    getJoinLength = (uint8Arrays) => {
      let joinLength = 0;
      for (const uint8Array of uint8Arrays) {
        joinLength += uint8Array.length;
      }
      return joinLength;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/template.js
import { ChildProcess } from "node:child_process";
var isTemplateString, parseTemplates, parseTemplate, splitByWhitespaces, DELIMITERS, ESCAPE_LENGTH, concatTokens, parseExpression, getSubprocessResult;
var init_template = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/template.js"() {
    init_is_plain_obj();
    init_uint_array();
    isTemplateString = (templates) => Array.isArray(templates) && Array.isArray(templates.raw);
    parseTemplates = (templates, expressions) => {
      let tokens = [];
      for (const [index, template] of templates.entries()) {
        tokens = parseTemplate({
          templates,
          expressions,
          tokens,
          index,
          template
        });
      }
      if (tokens.length === 0) {
        throw new TypeError("Template script must not be empty");
      }
      const [file, ...commandArguments] = tokens;
      return [file, commandArguments, {}];
    };
    parseTemplate = ({ templates, expressions, tokens, index, template }) => {
      if (template === void 0) {
        throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`);
      }
      const { nextTokens, leadingWhitespaces, trailingWhitespaces } = splitByWhitespaces(template, templates.raw[index]);
      const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces);
      if (index === expressions.length) {
        return newTokens;
      }
      const expression = expressions[index];
      const expressionTokens = Array.isArray(expression) ? expression.map((expression2) => parseExpression(expression2)) : [parseExpression(expression)];
      return concatTokens(newTokens, expressionTokens, trailingWhitespaces);
    };
    splitByWhitespaces = (template, rawTemplate) => {
      if (rawTemplate.length === 0) {
        return { nextTokens: [], leadingWhitespaces: false, trailingWhitespaces: false };
      }
      const nextTokens = [];
      let templateStart = 0;
      const leadingWhitespaces = DELIMITERS.has(rawTemplate[0]);
      for (let templateIndex = 0, rawIndex = 0; templateIndex < template.length; templateIndex += 1, rawIndex += 1) {
        const rawCharacter = rawTemplate[rawIndex];
        if (DELIMITERS.has(rawCharacter)) {
          if (templateStart !== templateIndex) {
            nextTokens.push(template.slice(templateStart, templateIndex));
          }
          templateStart = templateIndex + 1;
        } else if (rawCharacter === "\\") {
          const nextRawCharacter = rawTemplate[rawIndex + 1];
          if (nextRawCharacter === "\n") {
            templateIndex -= 1;
            rawIndex += 1;
          } else if (nextRawCharacter === "u" && rawTemplate[rawIndex + 2] === "{") {
            rawIndex = rawTemplate.indexOf("}", rawIndex + 3);
          } else {
            rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1;
          }
        }
      }
      const trailingWhitespaces = templateStart === template.length;
      if (!trailingWhitespaces) {
        nextTokens.push(template.slice(templateStart));
      }
      return { nextTokens, leadingWhitespaces, trailingWhitespaces };
    };
    DELIMITERS = /* @__PURE__ */ new Set([" ", "	", "\r", "\n"]);
    ESCAPE_LENGTH = { x: 3, u: 5 };
    concatTokens = (tokens, nextTokens, isSeparated) => isSeparated || tokens.length === 0 || nextTokens.length === 0 ? [...tokens, ...nextTokens] : [
      ...tokens.slice(0, -1),
      `${tokens.at(-1)}${nextTokens[0]}`,
      ...nextTokens.slice(1)
    ];
    parseExpression = (expression) => {
      const typeOfExpression = typeof expression;
      if (typeOfExpression === "string") {
        return expression;
      }
      if (typeOfExpression === "number") {
        return String(expression);
      }
      if (isPlainObject(expression) && ("stdout" in expression || "isMaxBuffer" in expression)) {
        return getSubprocessResult(expression);
      }
      if (expression instanceof ChildProcess || Object.prototype.toString.call(expression) === "[object Promise]") {
        throw new TypeError("Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.");
      }
      throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
    };
    getSubprocessResult = ({ stdout }) => {
      if (typeof stdout === "string") {
        return stdout;
      }
      if (isUint8Array(stdout)) {
        return uint8ArrayToString(stdout);
      }
      if (stdout === void 0) {
        throw new TypeError(`Missing result.stdout in template expression. This is probably due to the previous subprocess' "stdout" option.`);
      }
      throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/standard-stream.js
import process3 from "node:process";
var isStandardStream, STANDARD_STREAMS, STANDARD_STREAMS_ALIASES, getStreamName;
var init_standard_stream = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/standard-stream.js"() {
    isStandardStream = (stream) => STANDARD_STREAMS.includes(stream);
    STANDARD_STREAMS = [process3.stdin, process3.stdout, process3.stderr];
    STANDARD_STREAMS_ALIASES = ["stdin", "stdout", "stderr"];
    getStreamName = (fdNumber) => STANDARD_STREAMS_ALIASES[fdNumber] ?? `stdio[${fdNumber}]`;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/specific.js
import { debuglog } from "node:util";
var normalizeFdSpecificOptions, normalizeFdSpecificOption, getStdioLength, normalizeFdSpecificValue, normalizeOptionObject, compareFdName, getFdNameOrder, parseFdName, parseFd, FD_REGEXP, addDefaultValue, verboseDefault, DEFAULT_OPTIONS, FD_SPECIFIC_OPTIONS, getFdSpecificValue;
var init_specific = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/specific.js"() {
    init_is_plain_obj();
    init_standard_stream();
    normalizeFdSpecificOptions = (options) => {
      const optionsCopy = { ...options };
      for (const optionName of FD_SPECIFIC_OPTIONS) {
        optionsCopy[optionName] = normalizeFdSpecificOption(options, optionName);
      }
      return optionsCopy;
    };
    normalizeFdSpecificOption = (options, optionName) => {
      const optionBaseArray = Array.from({ length: getStdioLength(options) + 1 });
      const optionArray = normalizeFdSpecificValue(options[optionName], optionBaseArray, optionName);
      return addDefaultValue(optionArray, optionName);
    };
    getStdioLength = ({ stdio }) => Array.isArray(stdio) ? Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length) : STANDARD_STREAMS_ALIASES.length;
    normalizeFdSpecificValue = (optionValue, optionArray, optionName) => isPlainObject(optionValue) ? normalizeOptionObject(optionValue, optionArray, optionName) : optionArray.fill(optionValue);
    normalizeOptionObject = (optionValue, optionArray, optionName) => {
      for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
        for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
          optionArray[fdNumber] = optionValue[fdName];
        }
      }
      return optionArray;
    };
    compareFdName = (fdNameA, fdNameB) => getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1;
    getFdNameOrder = (fdName) => {
      if (fdName === "stdout" || fdName === "stderr") {
        return 0;
      }
      return fdName === "all" ? 2 : 1;
    };
    parseFdName = (fdName, optionName, optionArray) => {
      if (fdName === "ipc") {
        return [optionArray.length - 1];
      }
      const fdNumber = parseFd(fdName);
      if (fdNumber === void 0 || fdNumber === 0) {
        throw new TypeError(`"${optionName}.${fdName}" is invalid.
It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`);
      }
      if (fdNumber >= optionArray.length) {
        throw new TypeError(`"${optionName}.${fdName}" is invalid: that file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
      }
      return fdNumber === "all" ? [1, 2] : [fdNumber];
    };
    parseFd = (fdName) => {
      if (fdName === "all") {
        return fdName;
      }
      if (STANDARD_STREAMS_ALIASES.includes(fdName)) {
        return STANDARD_STREAMS_ALIASES.indexOf(fdName);
      }
      const regexpResult = FD_REGEXP.exec(fdName);
      if (regexpResult !== null) {
        return Number(regexpResult[1]);
      }
    };
    FD_REGEXP = /^fd(\d+)$/;
    addDefaultValue = (optionArray, optionName) => optionArray.map((optionValue) => optionValue === void 0 ? DEFAULT_OPTIONS[optionName] : optionValue);
    verboseDefault = debuglog("execa").enabled ? "full" : "none";
    DEFAULT_OPTIONS = {
      lines: false,
      buffer: true,
      maxBuffer: 1e3 * 1e3 * 100,
      verbose: verboseDefault,
      stripFinalNewline: true
    };
    FD_SPECIFIC_OPTIONS = ["lines", "buffer", "maxBuffer", "verbose", "stripFinalNewline"];
    getFdSpecificValue = (optionArray, fdNumber) => fdNumber === "ipc" ? optionArray.at(-1) : optionArray[fdNumber];
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/values.js
var isVerbose, isFullVerbose, getVerboseFunction, getFdVerbose, getFdGenericVerbose, isVerboseFunction, VERBOSE_VALUES;
var init_values = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/values.js"() {
    init_specific();
    isVerbose = ({ verbose }, fdNumber) => getFdVerbose(verbose, fdNumber) !== "none";
    isFullVerbose = ({ verbose }, fdNumber) => !["none", "short"].includes(getFdVerbose(verbose, fdNumber));
    getVerboseFunction = ({ verbose }, fdNumber) => {
      const fdVerbose = getFdVerbose(verbose, fdNumber);
      return isVerboseFunction(fdVerbose) ? fdVerbose : void 0;
    };
    getFdVerbose = (verbose, fdNumber) => fdNumber === void 0 ? getFdGenericVerbose(verbose) : getFdSpecificValue(verbose, fdNumber);
    getFdGenericVerbose = (verbose) => verbose.find((fdVerbose) => isVerboseFunction(fdVerbose)) ?? VERBOSE_VALUES.findLast((fdVerbose) => verbose.includes(fdVerbose));
    isVerboseFunction = (fdVerbose) => typeof fdVerbose === "function";
    VERBOSE_VALUES = ["none", "short", "full"];
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/escape.js
import { platform } from "node:process";
import { stripVTControlCharacters } from "node:util";
var joinCommand, escapeLines, escapeControlCharacters, escapeControlCharacter, getSpecialCharRegExp, SPECIAL_CHAR_REGEXP, COMMON_ESCAPES, ASTRAL_START, quoteString, NO_ESCAPE_REGEXP;
var init_escape = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/escape.js"() {
    joinCommand = (filePath, rawArguments) => {
      const fileAndArguments = [filePath, ...rawArguments];
      const command = fileAndArguments.join(" ");
      const escapedCommand = fileAndArguments.map((fileAndArgument) => quoteString(escapeControlCharacters(fileAndArgument))).join(" ");
      return { command, escapedCommand };
    };
    escapeLines = (lines) => stripVTControlCharacters(lines).split("\n").map((line) => escapeControlCharacters(line)).join("\n");
    escapeControlCharacters = (line) => line.replaceAll(SPECIAL_CHAR_REGEXP, (character) => escapeControlCharacter(character));
    escapeControlCharacter = (character) => {
      const commonEscape = COMMON_ESCAPES[character];
      if (commonEscape !== void 0) {
        return commonEscape;
      }
      const codepoint = character.codePointAt(0);
      const codepointHex = codepoint.toString(16);
      return codepoint <= ASTRAL_START ? `\\u${codepointHex.padStart(4, "0")}` : `\\U${codepointHex}`;
    };
    getSpecialCharRegExp = () => {
      try {
        return new RegExp("\\p{Separator}|\\p{Other}", "gu");
      } catch {
        return /[\s\u0000-\u001F\u007F-\u009F\u00AD]/g;
      }
    };
    SPECIAL_CHAR_REGEXP = getSpecialCharRegExp();
    COMMON_ESCAPES = {
      " ": " ",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    };
    ASTRAL_START = 65535;
    quoteString = (escapedArgument) => {
      if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
        return escapedArgument;
      }
      return platform === "win32" ? `"${escapedArgument.replaceAll('"', '""')}"` : `'${escapedArgument.replaceAll("'", "'\\''")}'`;
    };
    NO_ESCAPE_REGEXP = /^[\w./-]+$/;
  }
});

// node_modules/.pnpm/yoctocolors@2.1.2/node_modules/yoctocolors/base.js
import tty from "node:tty";
var hasColors, format, reset, bold, dim, italic, underline, overline, inverse, hidden, strikethrough, black, red, green, yellow, blue, magenta, cyan, white, gray, bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright;
var init_base = __esm({
  "node_modules/.pnpm/yoctocolors@2.1.2/node_modules/yoctocolors/base.js"() {
    hasColors = tty?.WriteStream?.prototype?.hasColors?.() ?? false;
    format = (open, close) => {
      if (!hasColors) {
        return (input) => input;
      }
      const openCode = `\x1B[${open}m`;
      const closeCode = `\x1B[${close}m`;
      return (input) => {
        const string = input + "";
        let index = string.indexOf(closeCode);
        if (index === -1) {
          return openCode + string + closeCode;
        }
        let result = openCode;
        let lastIndex = 0;
        const reopenOnNestedClose = close === 22;
        const replaceCode = (reopenOnNestedClose ? closeCode : "") + openCode;
        while (index !== -1) {
          result += string.slice(lastIndex, index) + replaceCode;
          lastIndex = index + closeCode.length;
          index = string.indexOf(closeCode, lastIndex);
        }
        result += string.slice(lastIndex) + closeCode;
        return result;
      };
    };
    reset = format(0, 0);
    bold = format(1, 22);
    dim = format(2, 22);
    italic = format(3, 23);
    underline = format(4, 24);
    overline = format(53, 55);
    inverse = format(7, 27);
    hidden = format(8, 28);
    strikethrough = format(9, 29);
    black = format(30, 39);
    red = format(31, 39);
    green = format(32, 39);
    yellow = format(33, 39);
    blue = format(34, 39);
    magenta = format(35, 39);
    cyan = format(36, 39);
    white = format(37, 39);
    gray = format(90, 39);
    bgBlack = format(40, 49);
    bgRed = format(41, 49);
    bgGreen = format(42, 49);
    bgYellow = format(43, 49);
    bgBlue = format(44, 49);
    bgMagenta = format(45, 49);
    bgCyan = format(46, 49);
    bgWhite = format(47, 49);
    bgGray = format(100, 49);
    redBright = format(91, 39);
    greenBright = format(92, 39);
    yellowBright = format(93, 39);
    blueBright = format(94, 39);
    magentaBright = format(95, 39);
    cyanBright = format(96, 39);
    whiteBright = format(97, 39);
    bgRedBright = format(101, 49);
    bgGreenBright = format(102, 49);
    bgYellowBright = format(103, 49);
    bgBlueBright = format(104, 49);
    bgMagentaBright = format(105, 49);
    bgCyanBright = format(106, 49);
    bgWhiteBright = format(107, 49);
  }
});

// node_modules/.pnpm/yoctocolors@2.1.2/node_modules/yoctocolors/index.js
var init_yoctocolors = __esm({
  "node_modules/.pnpm/yoctocolors@2.1.2/node_modules/yoctocolors/index.js"() {
    init_base();
    init_base();
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/default.js
var defaultVerboseFunction, serializeTimestamp, padField, getFinalIcon, ICONS, identity, COLORS;
var init_default = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/default.js"() {
    init_figures();
    init_yoctocolors();
    defaultVerboseFunction = ({
      type,
      message,
      timestamp,
      piped,
      commandId,
      result: { failed = false } = {},
      options: { reject = true }
    }) => {
      const timestampString = serializeTimestamp(timestamp);
      const icon = ICONS[type]({ failed, reject, piped });
      const color = COLORS[type]({ reject });
      return `${gray(`[${timestampString}]`)} ${gray(`[${commandId}]`)} ${color(icon)} ${color(message)}`;
    };
    serializeTimestamp = (timestamp) => `${padField(timestamp.getHours(), 2)}:${padField(timestamp.getMinutes(), 2)}:${padField(timestamp.getSeconds(), 2)}.${padField(timestamp.getMilliseconds(), 3)}`;
    padField = (field, padding) => String(field).padStart(padding, "0");
    getFinalIcon = ({ failed, reject }) => {
      if (!failed) {
        return figures_default.tick;
      }
      return reject ? figures_default.cross : figures_default.warning;
    };
    ICONS = {
      command: ({ piped }) => piped ? "|" : "$",
      output: () => " ",
      ipc: () => "*",
      error: getFinalIcon,
      duration: getFinalIcon
    };
    identity = (string) => string;
    COLORS = {
      command: () => bold,
      output: () => identity,
      ipc: () => identity,
      error: ({ reject }) => reject ? redBright : yellowBright,
      duration: () => gray
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/custom.js
var applyVerboseOnLines, applyVerboseFunction, appendNewline;
var init_custom = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/custom.js"() {
    init_values();
    applyVerboseOnLines = (printedLines, verboseInfo, fdNumber) => {
      const verboseFunction = getVerboseFunction(verboseInfo, fdNumber);
      return printedLines.map(({ verboseLine, verboseObject }) => applyVerboseFunction(verboseLine, verboseObject, verboseFunction)).filter((printedLine) => printedLine !== void 0).map((printedLine) => appendNewline(printedLine)).join("");
    };
    applyVerboseFunction = (verboseLine, verboseObject, verboseFunction) => {
      if (verboseFunction === void 0) {
        return verboseLine;
      }
      const printedLine = verboseFunction(verboseLine, verboseObject);
      if (typeof printedLine === "string") {
        return printedLine;
      }
    };
    appendNewline = (printedLine) => printedLine.endsWith("\n") ? printedLine : `${printedLine}
`;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/log.js
import { inspect } from "node:util";
var verboseLog, getVerboseObject, getPrintedLines, getPrintedLine, serializeVerboseMessage, TAB_SIZE;
var init_log = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/log.js"() {
    init_escape();
    init_default();
    init_custom();
    verboseLog = ({ type, verboseMessage, fdNumber, verboseInfo, result }) => {
      const verboseObject = getVerboseObject({ type, result, verboseInfo });
      const printedLines = getPrintedLines(verboseMessage, verboseObject);
      const finalLines = applyVerboseOnLines(printedLines, verboseInfo, fdNumber);
      if (finalLines !== "") {
        console.warn(finalLines.slice(0, -1));
      }
    };
    getVerboseObject = ({
      type,
      result,
      verboseInfo: { escapedCommand, commandId, rawOptions: { piped = false, ...options } }
    }) => ({
      type,
      escapedCommand,
      commandId: `${commandId}`,
      timestamp: /* @__PURE__ */ new Date(),
      piped,
      result,
      options
    });
    getPrintedLines = (verboseMessage, verboseObject) => verboseMessage.split("\n").map((message) => getPrintedLine({ ...verboseObject, message }));
    getPrintedLine = (verboseObject) => {
      const verboseLine = defaultVerboseFunction(verboseObject);
      return { verboseLine, verboseObject };
    };
    serializeVerboseMessage = (message) => {
      const messageString = typeof message === "string" ? message : inspect(message);
      const escapedMessage = escapeLines(messageString);
      return escapedMessage.replaceAll("	", " ".repeat(TAB_SIZE));
    };
    TAB_SIZE = 2;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/start.js
var logCommand;
var init_start = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/start.js"() {
    init_values();
    init_log();
    logCommand = (escapedCommand, verboseInfo) => {
      if (!isVerbose(verboseInfo)) {
        return;
      }
      verboseLog({
        type: "command",
        verboseMessage: escapedCommand,
        verboseInfo
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/info.js
var getVerboseInfo, getCommandId, COMMAND_ID, validateVerbose;
var init_info = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/info.js"() {
    init_values();
    getVerboseInfo = (verbose, escapedCommand, rawOptions) => {
      validateVerbose(verbose);
      const commandId = getCommandId(verbose);
      return {
        verbose,
        escapedCommand,
        commandId,
        rawOptions
      };
    };
    getCommandId = (verbose) => isVerbose({ verbose }) ? COMMAND_ID++ : void 0;
    COMMAND_ID = 0n;
    validateVerbose = (verbose) => {
      for (const fdVerbose of verbose) {
        if (fdVerbose === false) {
          throw new TypeError(`The "verbose: false" option was renamed to "verbose: 'none'".`);
        }
        if (fdVerbose === true) {
          throw new TypeError(`The "verbose: true" option was renamed to "verbose: 'short'".`);
        }
        if (!VERBOSE_VALUES.includes(fdVerbose) && !isVerboseFunction(fdVerbose)) {
          const allowedValues = VERBOSE_VALUES.map((allowedValue) => `'${allowedValue}'`).join(", ");
          throw new TypeError(`The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`);
        }
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/duration.js
import { hrtime } from "node:process";
var getStartTime, getDurationMs;
var init_duration = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/duration.js"() {
    getStartTime = () => hrtime.bigint();
    getDurationMs = (startTime) => Number(hrtime.bigint() - startTime) / 1e6;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/command.js
var handleCommand;
var init_command = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/command.js"() {
    init_start();
    init_info();
    init_duration();
    init_escape();
    init_specific();
    handleCommand = (filePath, rawArguments, rawOptions) => {
      const startTime = getStartTime();
      const { command, escapedCommand } = joinCommand(filePath, rawArguments);
      const verbose = normalizeFdSpecificOption(rawOptions, "verbose");
      const verboseInfo = getVerboseInfo(verbose, escapedCommand, { ...rawOptions });
      logCommand(escapedCommand, verboseInfo);
      return {
        command,
        escapedCommand,
        startTime,
        verboseInfo
      };
    };
  }
});

// scripts/shims/cross-spawn.mjs
import { createRequire } from "module";
import path from "path";
var require2, mod, spawn, sync, cross_spawn_default;
var init_cross_spawn = __esm({
  "scripts/shims/cross-spawn.mjs"() {
    require2 = createRequire(import.meta.url);
    mod = require2(path.join(process.cwd(), "node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"));
    spawn = mod.spawn;
    sync = mod.sync;
    cross_spawn_default = mod;
  }
});

// node_modules/.pnpm/path-key@4.0.0/node_modules/path-key/index.js
function pathKey(options = {}) {
  const {
    env = process.env,
    platform: platform2 = process.platform
  } = options;
  if (platform2 !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
var init_path_key = __esm({
  "node_modules/.pnpm/path-key@4.0.0/node_modules/path-key/index.js"() {
  }
});

// node_modules/.pnpm/unicorn-magic@0.3.0/node_modules/unicorn-magic/default.js
var init_default2 = __esm({
  "node_modules/.pnpm/unicorn-magic@0.3.0/node_modules/unicorn-magic/default.js"() {
  }
});

// node_modules/.pnpm/unicorn-magic@0.3.0/node_modules/unicorn-magic/node.js
import { promisify } from "node:util";
import { execFile as execFileCallback, execFileSync as execFileSyncOriginal } from "node:child_process";
import path2 from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";
function toPath(urlOrPath) {
  return urlOrPath instanceof URL ? fileURLToPath2(urlOrPath) : urlOrPath;
}
function traversePathUp(startPath) {
  return {
    *[Symbol.iterator]() {
      let currentPath = path2.resolve(toPath(startPath));
      let previousPath;
      while (previousPath !== currentPath) {
        yield currentPath;
        previousPath = currentPath;
        currentPath = path2.resolve(currentPath, "..");
      }
    }
  };
}
var execFileOriginal, TEN_MEGABYTES_IN_BYTES;
var init_node = __esm({
  "node_modules/.pnpm/unicorn-magic@0.3.0/node_modules/unicorn-magic/node.js"() {
    init_default2();
    execFileOriginal = promisify(execFileCallback);
    TEN_MEGABYTES_IN_BYTES = 10 * 1024 * 1024;
  }
});

// node_modules/.pnpm/npm-run-path@6.0.0/node_modules/npm-run-path/index.js
import process4 from "node:process";
import path3 from "node:path";
var npmRunPath, applyPreferLocal, applyExecPath, npmRunPathEnv;
var init_npm_run_path = __esm({
  "node_modules/.pnpm/npm-run-path@6.0.0/node_modules/npm-run-path/index.js"() {
    init_path_key();
    init_node();
    npmRunPath = ({
      cwd = process4.cwd(),
      path: pathOption = process4.env[pathKey()],
      preferLocal = true,
      execPath: execPath2 = process4.execPath,
      addExecPath = true
    } = {}) => {
      const cwdPath = path3.resolve(toPath(cwd));
      const result = [];
      const pathParts = pathOption.split(path3.delimiter);
      if (preferLocal) {
        applyPreferLocal(result, pathParts, cwdPath);
      }
      if (addExecPath) {
        applyExecPath(result, pathParts, execPath2, cwdPath);
      }
      return pathOption === "" || pathOption === path3.delimiter ? `${result.join(path3.delimiter)}${pathOption}` : [...result, pathOption].join(path3.delimiter);
    };
    applyPreferLocal = (result, pathParts, cwdPath) => {
      for (const directory of traversePathUp(cwdPath)) {
        const pathPart = path3.join(directory, "node_modules/.bin");
        if (!pathParts.includes(pathPart)) {
          result.push(pathPart);
        }
      }
    };
    applyExecPath = (result, pathParts, execPath2, cwdPath) => {
      const pathPart = path3.resolve(cwdPath, toPath(execPath2), "..");
      if (!pathParts.includes(pathPart)) {
        result.push(pathPart);
      }
    };
    npmRunPathEnv = ({ env = process4.env, ...options } = {}) => {
      env = { ...env };
      const pathName = pathKey({ env });
      options.path = env[pathName];
      env[pathName] = npmRunPath(options);
      return env;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/final-error.js
var getFinalError, DiscardedError, setErrorName, isExecaError, execaErrorSymbol, isErrorInstance, ExecaError, ExecaSyncError;
var init_final_error = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/final-error.js"() {
    getFinalError = (originalError, message, isSync) => {
      const ErrorClass = isSync ? ExecaSyncError : ExecaError;
      const options = originalError instanceof DiscardedError ? {} : { cause: originalError };
      return new ErrorClass(message, options);
    };
    DiscardedError = class extends Error {
    };
    setErrorName = (ErrorClass, value) => {
      Object.defineProperty(ErrorClass.prototype, "name", {
        value,
        writable: true,
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
      });
    };
    isExecaError = (error) => isErrorInstance(error) && execaErrorSymbol in error;
    execaErrorSymbol = /* @__PURE__ */ Symbol("isExecaError");
    isErrorInstance = (value) => Object.prototype.toString.call(value) === "[object Error]";
    ExecaError = class extends Error {
    };
    setErrorName(ExecaError, ExecaError.name);
    ExecaSyncError = class extends Error {
    };
    setErrorName(ExecaSyncError, ExecaSyncError.name);
  }
});

// node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/realtime.js
var getRealtimeSignals, getRealtimeSignal, SIGRTMIN, SIGRTMAX;
var init_realtime = __esm({
  "node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/realtime.js"() {
    getRealtimeSignals = () => {
      const length = SIGRTMAX - SIGRTMIN + 1;
      return Array.from({ length }, getRealtimeSignal);
    };
    getRealtimeSignal = (value, index) => ({
      name: `SIGRT${index + 1}`,
      number: SIGRTMIN + index,
      action: "terminate",
      description: "Application-specific signal (realtime)",
      standard: "posix"
    });
    SIGRTMIN = 34;
    SIGRTMAX = 64;
  }
});

// node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/core.js
var SIGNALS;
var init_core = __esm({
  "node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/core.js"() {
    SIGNALS = [
      {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
      },
      {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
      },
      {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
      },
      {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
      },
      {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
      },
      {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
      },
      {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
      },
      {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
      },
      {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
      },
      {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
      },
      {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
      },
      {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
      },
      {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
      },
      {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
      },
      {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
      },
      {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
      },
      {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
      },
      {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
      },
      {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
      },
      {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
      },
      {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
      },
      {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
      },
      {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
      },
      {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
      },
      {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
      },
      {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
      },
      {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
      },
      {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
      },
      {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
      },
      {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
      },
      {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
      }
    ];
  }
});

// node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/signals.js
import { constants } from "node:os";
var getSignals, normalizeSignal;
var init_signals = __esm({
  "node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/signals.js"() {
    init_core();
    init_realtime();
    getSignals = () => {
      const realtimeSignals = getRealtimeSignals();
      const signals2 = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
      return signals2;
    };
    normalizeSignal = ({
      name,
      number: defaultNumber,
      description,
      action,
      forced = false,
      standard
    }) => {
      const {
        signals: { [name]: constantSignal }
      } = constants;
      const supported = constantSignal !== void 0;
      const number = supported ? constantSignal : defaultNumber;
      return { name, number, description, supported, action, forced, standard };
    };
  }
});

// node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/main.js
import { constants as constants2 } from "node:os";
var getSignalsByName, getSignalByName, signalsByName, getSignalsByNumber, getSignalByNumber, findSignalByNumber, signalsByNumber;
var init_main = __esm({
  "node_modules/.pnpm/human-signals@8.0.1/node_modules/human-signals/build/src/main.js"() {
    init_realtime();
    init_signals();
    getSignalsByName = () => {
      const signals2 = getSignals();
      return Object.fromEntries(signals2.map(getSignalByName));
    };
    getSignalByName = ({
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }) => [name, { name, number, description, supported, action, forced, standard }];
    signalsByName = getSignalsByName();
    getSignalsByNumber = () => {
      const signals2 = getSignals();
      const length = SIGRTMAX + 1;
      const signalsA = Array.from(
        { length },
        (value, number) => getSignalByNumber(number, signals2)
      );
      return Object.assign({}, ...signalsA);
    };
    getSignalByNumber = (number, signals2) => {
      const signal = findSignalByNumber(number, signals2);
      if (signal === void 0) {
        return {};
      }
      const { name, description, supported, action, forced, standard } = signal;
      return {
        [number]: {
          name,
          number,
          description,
          supported,
          action,
          forced,
          standard
        }
      };
    };
    findSignalByNumber = (number, signals2) => {
      const signal = signals2.find(({ name }) => constants2.signals[name] === number);
      if (signal !== void 0) {
        return signal;
      }
      return signals2.find((signalA) => signalA.number === number);
    };
    signalsByNumber = getSignalsByNumber();
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/signal.js
import { constants as constants3 } from "node:os";
var normalizeKillSignal, normalizeSignalArgument, normalizeSignal2, normalizeSignalInteger, getSignalsIntegerToName, signalsIntegerToName, normalizeSignalName, getAvailableSignals, getAvailableSignalNames, getAvailableSignalIntegers, getSignalDescription;
var init_signal = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/signal.js"() {
    init_main();
    normalizeKillSignal = (killSignal) => {
      const optionName = "option `killSignal`";
      if (killSignal === 0) {
        throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`);
      }
      return normalizeSignal2(killSignal, optionName);
    };
    normalizeSignalArgument = (signal) => signal === 0 ? signal : normalizeSignal2(signal, "`subprocess.kill()`'s argument");
    normalizeSignal2 = (signalNameOrInteger, optionName) => {
      if (Number.isInteger(signalNameOrInteger)) {
        return normalizeSignalInteger(signalNameOrInteger, optionName);
      }
      if (typeof signalNameOrInteger === "string") {
        return normalizeSignalName(signalNameOrInteger, optionName);
      }
      throw new TypeError(`Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.
${getAvailableSignals()}`);
    };
    normalizeSignalInteger = (signalInteger, optionName) => {
      if (signalsIntegerToName.has(signalInteger)) {
        return signalsIntegerToName.get(signalInteger);
      }
      throw new TypeError(`Invalid ${optionName} ${signalInteger}: this signal integer does not exist.
${getAvailableSignals()}`);
    };
    getSignalsIntegerToName = () => new Map(Object.entries(constants3.signals).reverse().map(([signalName, signalInteger]) => [signalInteger, signalName]));
    signalsIntegerToName = getSignalsIntegerToName();
    normalizeSignalName = (signalName, optionName) => {
      if (signalName in constants3.signals) {
        return signalName;
      }
      if (signalName.toUpperCase() in constants3.signals) {
        throw new TypeError(`Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`);
      }
      throw new TypeError(`Invalid ${optionName} '${signalName}': this signal name does not exist.
${getAvailableSignals()}`);
    };
    getAvailableSignals = () => `Available signal names: ${getAvailableSignalNames()}.
Available signal numbers: ${getAvailableSignalIntegers()}.`;
    getAvailableSignalNames = () => Object.keys(constants3.signals).sort().map((signalName) => `'${signalName}'`).join(", ");
    getAvailableSignalIntegers = () => [...new Set(Object.values(constants3.signals).sort((signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo))].join(", ");
    getSignalDescription = (signal) => signalsByName[signal].description;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/kill.js
import { setTimeout as setTimeout2 } from "node:timers/promises";
var normalizeForceKillAfterDelay, DEFAULT_FORCE_KILL_TIMEOUT, subprocessKill, parseKillArguments, emitKillError, setKillTimeout, killOnTimeout;
var init_kill = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/kill.js"() {
    init_final_error();
    init_signal();
    normalizeForceKillAfterDelay = (forceKillAfterDelay) => {
      if (forceKillAfterDelay === false) {
        return forceKillAfterDelay;
      }
      if (forceKillAfterDelay === true) {
        return DEFAULT_FORCE_KILL_TIMEOUT;
      }
      if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
        throw new TypeError(`Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`);
      }
      return forceKillAfterDelay;
    };
    DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
    subprocessKill = ({ kill, options: { forceKillAfterDelay, killSignal }, onInternalError, context, controller }, signalOrError, errorArgument) => {
      const { signal, error } = parseKillArguments(signalOrError, errorArgument, killSignal);
      emitKillError(error, onInternalError);
      const killResult = kill(signal);
      setKillTimeout({
        kill,
        signal,
        forceKillAfterDelay,
        killSignal,
        killResult,
        context,
        controller
      });
      return killResult;
    };
    parseKillArguments = (signalOrError, errorArgument, killSignal) => {
      const [signal = killSignal, error] = isErrorInstance(signalOrError) ? [void 0, signalOrError] : [signalOrError, errorArgument];
      if (typeof signal !== "string" && !Number.isInteger(signal)) {
        throw new TypeError(`The first argument must be an error instance or a signal name string/integer: ${String(signal)}`);
      }
      if (error !== void 0 && !isErrorInstance(error)) {
        throw new TypeError(`The second argument is optional. If specified, it must be an error instance: ${error}`);
      }
      return { signal: normalizeSignalArgument(signal), error };
    };
    emitKillError = (error, onInternalError) => {
      if (error !== void 0) {
        onInternalError.reject(error);
      }
    };
    setKillTimeout = async ({ kill, signal, forceKillAfterDelay, killSignal, killResult, context, controller }) => {
      if (signal === killSignal && killResult) {
        killOnTimeout({
          kill,
          forceKillAfterDelay,
          context,
          controllerSignal: controller.signal
        });
      }
    };
    killOnTimeout = async ({ kill, forceKillAfterDelay, context, controllerSignal }) => {
      if (forceKillAfterDelay === false) {
        return;
      }
      try {
        await setTimeout2(forceKillAfterDelay, void 0, { signal: controllerSignal });
        if (kill("SIGKILL")) {
          context.isForcefullyTerminated ??= true;
        }
      } catch {
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/abort-signal.js
import { once } from "node:events";
var onAbortedSignal;
var init_abort_signal = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/abort-signal.js"() {
    onAbortedSignal = async (mainSignal, stopSignal) => {
      if (!mainSignal.aborted) {
        await once(mainSignal, "abort", { signal: stopSignal });
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/cancel.js
var validateCancelSignal, throwOnCancel, terminateOnCancel;
var init_cancel = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/cancel.js"() {
    init_abort_signal();
    validateCancelSignal = ({ cancelSignal }) => {
      if (cancelSignal !== void 0 && Object.prototype.toString.call(cancelSignal) !== "[object AbortSignal]") {
        throw new Error(`The \`cancelSignal\` option must be an AbortSignal: ${String(cancelSignal)}`);
      }
    };
    throwOnCancel = ({ subprocess, cancelSignal, gracefulCancel, context, controller }) => cancelSignal === void 0 || gracefulCancel ? [] : [terminateOnCancel(subprocess, cancelSignal, context, controller)];
    terminateOnCancel = async (subprocess, cancelSignal, context, { signal }) => {
      await onAbortedSignal(cancelSignal, signal);
      context.terminationReason ??= "cancel";
      subprocess.kill();
      throw cancelSignal.reason;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/validation.js
var validateIpcMethod, validateIpcOption, validateConnection, throwOnEarlyDisconnect, throwOnStrictDeadlockError, getStrictResponseError, throwOnMissingStrict, throwOnStrictDisconnect, getAbortDisconnectError, throwOnMissingParent, handleEpipeError, handleSerializationError, isSerializationError, SERIALIZATION_ERROR_CODES, SERIALIZATION_ERROR_MESSAGES, getMethodName, getNamespaceName, getOtherProcessName, disconnect;
var init_validation = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/validation.js"() {
    validateIpcMethod = ({ methodName, isSubprocess, ipc, isConnected: isConnected2 }) => {
      validateIpcOption(methodName, isSubprocess, ipc);
      validateConnection(methodName, isSubprocess, isConnected2);
    };
    validateIpcOption = (methodName, isSubprocess, ipc) => {
      if (!ipc) {
        throw new Error(`${getMethodName(methodName, isSubprocess)} can only be used if the \`ipc\` option is \`true\`.`);
      }
    };
    validateConnection = (methodName, isSubprocess, isConnected2) => {
      if (!isConnected2) {
        throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} has already exited or disconnected.`);
      }
    };
    throwOnEarlyDisconnect = (isSubprocess) => {
      throw new Error(`${getMethodName("getOneMessage", isSubprocess)} could not complete: the ${getOtherProcessName(isSubprocess)} exited or disconnected.`);
    };
    throwOnStrictDeadlockError = (isSubprocess) => {
      throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is sending a message too, instead of listening to incoming messages.
This can be fixed by both sending a message and listening to incoming messages at the same time:

const [receivedMessage] = await Promise.all([
	${getMethodName("getOneMessage", isSubprocess)},
	${getMethodName("sendMessage", isSubprocess, "message, {strict: true}")},
]);`);
    };
    getStrictResponseError = (error, isSubprocess) => new Error(`${getMethodName("sendMessage", isSubprocess)} failed when sending an acknowledgment response to the ${getOtherProcessName(isSubprocess)}.`, { cause: error });
    throwOnMissingStrict = (isSubprocess) => {
      throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is not listening to incoming messages.`);
    };
    throwOnStrictDisconnect = (isSubprocess) => {
      throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} exited without listening to incoming messages.`);
    };
    getAbortDisconnectError = () => new Error(`\`cancelSignal\` aborted: the ${getOtherProcessName(true)} disconnected.`);
    throwOnMissingParent = () => {
      throw new Error("`getCancelSignal()` cannot be used without setting the `cancelSignal` subprocess option.");
    };
    handleEpipeError = ({ error, methodName, isSubprocess }) => {
      if (error.code === "EPIPE") {
        throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} is disconnecting.`, { cause: error });
      }
    };
    handleSerializationError = ({ error, methodName, isSubprocess, message }) => {
      if (isSerializationError(error)) {
        throw new Error(`${getMethodName(methodName, isSubprocess)}'s argument type is invalid: the message cannot be serialized: ${String(message)}.`, { cause: error });
      }
    };
    isSerializationError = ({ code, message }) => SERIALIZATION_ERROR_CODES.has(code) || SERIALIZATION_ERROR_MESSAGES.some((serializationErrorMessage) => message.includes(serializationErrorMessage));
    SERIALIZATION_ERROR_CODES = /* @__PURE__ */ new Set([
      // Message is `undefined`
      "ERR_MISSING_ARGS",
      // Message is a function, a bigint, a symbol
      "ERR_INVALID_ARG_TYPE"
    ]);
    SERIALIZATION_ERROR_MESSAGES = [
      // Message is a promise or a proxy, with `serialization: 'advanced'`
      "could not be cloned",
      // Message has cycles, with `serialization: 'json'`
      "circular structure",
      // Message has cycles inside toJSON(), with `serialization: 'json'`
      "call stack size exceeded"
    ];
    getMethodName = (methodName, isSubprocess, parameters = "") => methodName === "cancelSignal" ? "`cancelSignal`'s `controller.abort()`" : `${getNamespaceName(isSubprocess)}${methodName}(${parameters})`;
    getNamespaceName = (isSubprocess) => isSubprocess ? "" : "subprocess.";
    getOtherProcessName = (isSubprocess) => isSubprocess ? "parent process" : "subprocess";
    disconnect = (anyProcess) => {
      if (anyProcess.connected) {
        anyProcess.disconnect();
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/deferred.js
var createDeferred;
var init_deferred = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/deferred.js"() {
    createDeferred = () => {
      const methods = {};
      const promise = new Promise((resolve, reject) => {
        Object.assign(methods, { resolve, reject });
      });
      return Object.assign(promise, methods);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/fd-options.js
var getToStream, getFromStream, SUBPROCESS_OPTIONS, getFdNumber, parseFdNumber, validateFdNumber, getInvalidStdioOptionMessage, getInvalidStdioOption, getUsedDescriptor, getOptionName, serializeOptionValue;
var init_fd_options = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/fd-options.js"() {
    init_specific();
    getToStream = (destination, to = "stdin") => {
      const isWritable = true;
      const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(destination);
      const fdNumber = getFdNumber(fileDescriptors, to, isWritable);
      const destinationStream = destination.stdio[fdNumber];
      if (destinationStream === null) {
        throw new TypeError(getInvalidStdioOptionMessage(fdNumber, to, options, isWritable));
      }
      return destinationStream;
    };
    getFromStream = (source, from = "stdout") => {
      const isWritable = false;
      const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
      const fdNumber = getFdNumber(fileDescriptors, from, isWritable);
      const sourceStream = fdNumber === "all" ? source.all : source.stdio[fdNumber];
      if (sourceStream === null || sourceStream === void 0) {
        throw new TypeError(getInvalidStdioOptionMessage(fdNumber, from, options, isWritable));
      }
      return sourceStream;
    };
    SUBPROCESS_OPTIONS = /* @__PURE__ */ new WeakMap();
    getFdNumber = (fileDescriptors, fdName, isWritable) => {
      const fdNumber = parseFdNumber(fdName, isWritable);
      validateFdNumber(fdNumber, fdName, isWritable, fileDescriptors);
      return fdNumber;
    };
    parseFdNumber = (fdName, isWritable) => {
      const fdNumber = parseFd(fdName);
      if (fdNumber !== void 0) {
        return fdNumber;
      }
      const { validOptions, defaultValue } = isWritable ? { validOptions: '"stdin"', defaultValue: "stdin" } : { validOptions: '"stdout", "stderr", "all"', defaultValue: "stdout" };
      throw new TypeError(`"${getOptionName(isWritable)}" must not be "${fdName}".
It must be ${validOptions} or "fd3", "fd4" (and so on).
It is optional and defaults to "${defaultValue}".`);
    };
    validateFdNumber = (fdNumber, fdName, isWritable, fileDescriptors) => {
      const fileDescriptor = fileDescriptors[getUsedDescriptor(fdNumber)];
      if (fileDescriptor === void 0) {
        throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. That file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
      }
      if (fileDescriptor.direction === "input" && !isWritable) {
        throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a readable stream, not writable.`);
      }
      if (fileDescriptor.direction !== "input" && isWritable) {
        throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a writable stream, not readable.`);
      }
    };
    getInvalidStdioOptionMessage = (fdNumber, fdName, options, isWritable) => {
      if (fdNumber === "all" && !options.all) {
        return `The "all" option must be true to use "from: 'all'".`;
      }
      const { optionName, optionValue } = getInvalidStdioOption(fdNumber, options);
      return `The "${optionName}: ${serializeOptionValue(optionValue)}" option is incompatible with using "${getOptionName(isWritable)}: ${serializeOptionValue(fdName)}".
Please set this option with "pipe" instead.`;
    };
    getInvalidStdioOption = (fdNumber, { stdin, stdout, stderr, stdio }) => {
      const usedDescriptor = getUsedDescriptor(fdNumber);
      if (usedDescriptor === 0 && stdin !== void 0) {
        return { optionName: "stdin", optionValue: stdin };
      }
      if (usedDescriptor === 1 && stdout !== void 0) {
        return { optionName: "stdout", optionValue: stdout };
      }
      if (usedDescriptor === 2 && stderr !== void 0) {
        return { optionName: "stderr", optionValue: stderr };
      }
      return { optionName: `stdio[${usedDescriptor}]`, optionValue: stdio[usedDescriptor] };
    };
    getUsedDescriptor = (fdNumber) => fdNumber === "all" ? 1 : fdNumber;
    getOptionName = (isWritable) => isWritable ? "to" : "from";
    serializeOptionValue = (value) => {
      if (typeof value === "string") {
        return `'${value}'`;
      }
      return typeof value === "number" ? `${value}` : "Stream";
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/max-listeners.js
import { addAbortListener } from "node:events";
var incrementMaxListeners;
var init_max_listeners = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/utils/max-listeners.js"() {
    incrementMaxListeners = (eventEmitter, maxListenersIncrement, signal) => {
      const maxListeners = eventEmitter.getMaxListeners();
      if (maxListeners === 0 || maxListeners === Number.POSITIVE_INFINITY) {
        return;
      }
      eventEmitter.setMaxListeners(maxListeners + maxListenersIncrement);
      addAbortListener(signal, () => {
        eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() - maxListenersIncrement);
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/reference.js
var addReference, addReferenceCount, removeReference, removeReferenceCount, undoAddedReferences, redoAddedReferences;
var init_reference = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/reference.js"() {
    addReference = (channel, reference) => {
      if (reference) {
        addReferenceCount(channel);
      }
    };
    addReferenceCount = (channel) => {
      channel.refCounted();
    };
    removeReference = (channel, reference) => {
      if (reference) {
        removeReferenceCount(channel);
      }
    };
    removeReferenceCount = (channel) => {
      channel.unrefCounted();
    };
    undoAddedReferences = (channel, isSubprocess) => {
      if (isSubprocess) {
        removeReferenceCount(channel);
        removeReferenceCount(channel);
      }
    };
    redoAddedReferences = (channel, isSubprocess) => {
      if (isSubprocess) {
        addReferenceCount(channel);
        addReferenceCount(channel);
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/incoming.js
import { once as once2 } from "node:events";
import { scheduler } from "node:timers/promises";
var onMessage, onDisconnect, INCOMING_MESSAGES;
var init_incoming = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/incoming.js"() {
    init_outgoing();
    init_reference();
    init_strict();
    init_graceful();
    onMessage = async ({ anyProcess, channel, isSubprocess, ipcEmitter }, wrappedMessage) => {
      if (handleStrictResponse(wrappedMessage) || handleAbort(wrappedMessage)) {
        return;
      }
      if (!INCOMING_MESSAGES.has(anyProcess)) {
        INCOMING_MESSAGES.set(anyProcess, []);
      }
      const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
      incomingMessages.push(wrappedMessage);
      if (incomingMessages.length > 1) {
        return;
      }
      while (incomingMessages.length > 0) {
        await waitForOutgoingMessages(anyProcess, ipcEmitter, wrappedMessage);
        await scheduler.yield();
        const message = await handleStrictRequest({
          wrappedMessage: incomingMessages[0],
          anyProcess,
          channel,
          isSubprocess,
          ipcEmitter
        });
        incomingMessages.shift();
        ipcEmitter.emit("message", message);
        ipcEmitter.emit("message:done");
      }
    };
    onDisconnect = async ({ anyProcess, channel, isSubprocess, ipcEmitter, boundOnMessage }) => {
      abortOnDisconnect();
      const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
      while (incomingMessages?.length > 0) {
        await once2(ipcEmitter, "message:done");
      }
      anyProcess.removeListener("message", boundOnMessage);
      redoAddedReferences(channel, isSubprocess);
      ipcEmitter.connected = false;
      ipcEmitter.emit("disconnect");
    };
    INCOMING_MESSAGES = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/forward.js
import { EventEmitter } from "node:events";
var getIpcEmitter, IPC_EMITTERS, forwardEvents, isConnected;
var init_forward = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/forward.js"() {
    init_incoming();
    init_reference();
    getIpcEmitter = (anyProcess, channel, isSubprocess) => {
      if (IPC_EMITTERS.has(anyProcess)) {
        return IPC_EMITTERS.get(anyProcess);
      }
      const ipcEmitter = new EventEmitter();
      ipcEmitter.connected = true;
      IPC_EMITTERS.set(anyProcess, ipcEmitter);
      forwardEvents({
        ipcEmitter,
        anyProcess,
        channel,
        isSubprocess
      });
      return ipcEmitter;
    };
    IPC_EMITTERS = /* @__PURE__ */ new WeakMap();
    forwardEvents = ({ ipcEmitter, anyProcess, channel, isSubprocess }) => {
      const boundOnMessage = onMessage.bind(void 0, {
        anyProcess,
        channel,
        isSubprocess,
        ipcEmitter
      });
      anyProcess.on("message", boundOnMessage);
      anyProcess.once("disconnect", onDisconnect.bind(void 0, {
        anyProcess,
        channel,
        isSubprocess,
        ipcEmitter,
        boundOnMessage
      }));
      undoAddedReferences(channel, isSubprocess);
    };
    isConnected = (anyProcess) => {
      const ipcEmitter = IPC_EMITTERS.get(anyProcess);
      return ipcEmitter === void 0 ? anyProcess.channel !== null : ipcEmitter.connected;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/strict.js
import { once as once3 } from "node:events";
var handleSendStrict, count, validateStrictDeadlock, handleStrictRequest, handleStrictResponse, waitForStrictResponse, STRICT_RESPONSES, throwOnDisconnect, REQUEST_TYPE, RESPONSE_TYPE;
var init_strict = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/strict.js"() {
    init_deferred();
    init_max_listeners();
    init_send();
    init_validation();
    init_forward();
    init_outgoing();
    handleSendStrict = ({ anyProcess, channel, isSubprocess, message, strict }) => {
      if (!strict) {
        return message;
      }
      const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
      const hasListeners = hasMessageListeners(anyProcess, ipcEmitter);
      return {
        id: count++,
        type: REQUEST_TYPE,
        message,
        hasListeners
      };
    };
    count = 0n;
    validateStrictDeadlock = (outgoingMessages, wrappedMessage) => {
      if (wrappedMessage?.type !== REQUEST_TYPE || wrappedMessage.hasListeners) {
        return;
      }
      for (const { id } of outgoingMessages) {
        if (id !== void 0) {
          STRICT_RESPONSES[id].resolve({ isDeadlock: true, hasListeners: false });
        }
      }
    };
    handleStrictRequest = async ({ wrappedMessage, anyProcess, channel, isSubprocess, ipcEmitter }) => {
      if (wrappedMessage?.type !== REQUEST_TYPE || !anyProcess.connected) {
        return wrappedMessage;
      }
      const { id, message } = wrappedMessage;
      const response = { id, type: RESPONSE_TYPE, message: hasMessageListeners(anyProcess, ipcEmitter) };
      try {
        await sendMessage({
          anyProcess,
          channel,
          isSubprocess,
          ipc: true
        }, response);
      } catch (error) {
        ipcEmitter.emit("strict:error", error);
      }
      return message;
    };
    handleStrictResponse = (wrappedMessage) => {
      if (wrappedMessage?.type !== RESPONSE_TYPE) {
        return false;
      }
      const { id, message: hasListeners } = wrappedMessage;
      STRICT_RESPONSES[id]?.resolve({ isDeadlock: false, hasListeners });
      return true;
    };
    waitForStrictResponse = async (wrappedMessage, anyProcess, isSubprocess) => {
      if (wrappedMessage?.type !== REQUEST_TYPE) {
        return;
      }
      const deferred = createDeferred();
      STRICT_RESPONSES[wrappedMessage.id] = deferred;
      const controller = new AbortController();
      try {
        const { isDeadlock, hasListeners } = await Promise.race([
          deferred,
          throwOnDisconnect(anyProcess, isSubprocess, controller)
        ]);
        if (isDeadlock) {
          throwOnStrictDeadlockError(isSubprocess);
        }
        if (!hasListeners) {
          throwOnMissingStrict(isSubprocess);
        }
      } finally {
        controller.abort();
        delete STRICT_RESPONSES[wrappedMessage.id];
      }
    };
    STRICT_RESPONSES = {};
    throwOnDisconnect = async (anyProcess, isSubprocess, { signal }) => {
      incrementMaxListeners(anyProcess, 1, signal);
      await once3(anyProcess, "disconnect", { signal });
      throwOnStrictDisconnect(isSubprocess);
    };
    REQUEST_TYPE = "execa:ipc:request";
    RESPONSE_TYPE = "execa:ipc:response";
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/outgoing.js
var startSendMessage, endSendMessage, waitForOutgoingMessages, OUTGOING_MESSAGES, hasMessageListeners, getMinListenerCount;
var init_outgoing = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/outgoing.js"() {
    init_deferred();
    init_specific();
    init_fd_options();
    init_strict();
    startSendMessage = (anyProcess, wrappedMessage, strict) => {
      if (!OUTGOING_MESSAGES.has(anyProcess)) {
        OUTGOING_MESSAGES.set(anyProcess, /* @__PURE__ */ new Set());
      }
      const outgoingMessages = OUTGOING_MESSAGES.get(anyProcess);
      const onMessageSent = createDeferred();
      const id = strict ? wrappedMessage.id : void 0;
      const outgoingMessage = { onMessageSent, id };
      outgoingMessages.add(outgoingMessage);
      return { outgoingMessages, outgoingMessage };
    };
    endSendMessage = ({ outgoingMessages, outgoingMessage }) => {
      outgoingMessages.delete(outgoingMessage);
      outgoingMessage.onMessageSent.resolve();
    };
    waitForOutgoingMessages = async (anyProcess, ipcEmitter, wrappedMessage) => {
      while (!hasMessageListeners(anyProcess, ipcEmitter) && OUTGOING_MESSAGES.get(anyProcess)?.size > 0) {
        const outgoingMessages = [...OUTGOING_MESSAGES.get(anyProcess)];
        validateStrictDeadlock(outgoingMessages, wrappedMessage);
        await Promise.all(outgoingMessages.map(({ onMessageSent }) => onMessageSent));
      }
    };
    OUTGOING_MESSAGES = /* @__PURE__ */ new WeakMap();
    hasMessageListeners = (anyProcess, ipcEmitter) => ipcEmitter.listenerCount("message") > getMinListenerCount(anyProcess);
    getMinListenerCount = (anyProcess) => SUBPROCESS_OPTIONS.has(anyProcess) && !getFdSpecificValue(SUBPROCESS_OPTIONS.get(anyProcess).options.buffer, "ipc") ? 1 : 0;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/send.js
import { promisify as promisify2 } from "node:util";
var sendMessage, sendMessageAsync, sendOneMessage, getSendMethod, PROCESS_SEND_METHODS;
var init_send = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/send.js"() {
    init_validation();
    init_outgoing();
    init_strict();
    sendMessage = ({ anyProcess, channel, isSubprocess, ipc }, message, { strict = false } = {}) => {
      const methodName = "sendMessage";
      validateIpcMethod({
        methodName,
        isSubprocess,
        ipc,
        isConnected: anyProcess.connected
      });
      return sendMessageAsync({
        anyProcess,
        channel,
        methodName,
        isSubprocess,
        message,
        strict
      });
    };
    sendMessageAsync = async ({ anyProcess, channel, methodName, isSubprocess, message, strict }) => {
      const wrappedMessage = handleSendStrict({
        anyProcess,
        channel,
        isSubprocess,
        message,
        strict
      });
      const outgoingMessagesState = startSendMessage(anyProcess, wrappedMessage, strict);
      try {
        await sendOneMessage({
          anyProcess,
          methodName,
          isSubprocess,
          wrappedMessage,
          message
        });
      } catch (error) {
        disconnect(anyProcess);
        throw error;
      } finally {
        endSendMessage(outgoingMessagesState);
      }
    };
    sendOneMessage = async ({ anyProcess, methodName, isSubprocess, wrappedMessage, message }) => {
      const sendMethod = getSendMethod(anyProcess);
      try {
        await Promise.all([
          waitForStrictResponse(wrappedMessage, anyProcess, isSubprocess),
          sendMethod(wrappedMessage)
        ]);
      } catch (error) {
        handleEpipeError({ error, methodName, isSubprocess });
        handleSerializationError({
          error,
          methodName,
          isSubprocess,
          message
        });
        throw error;
      }
    };
    getSendMethod = (anyProcess) => {
      if (PROCESS_SEND_METHODS.has(anyProcess)) {
        return PROCESS_SEND_METHODS.get(anyProcess);
      }
      const sendMethod = promisify2(anyProcess.send.bind(anyProcess));
      PROCESS_SEND_METHODS.set(anyProcess, sendMethod);
      return sendMethod;
    };
    PROCESS_SEND_METHODS = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/graceful.js
import { scheduler as scheduler2 } from "node:timers/promises";
var sendAbort, getCancelSignal, startIpc, cancelListening, handleAbort, GRACEFUL_CANCEL_TYPE, abortOnDisconnect, cancelController;
var init_graceful = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/graceful.js"() {
    init_send();
    init_forward();
    init_validation();
    sendAbort = (subprocess, message) => {
      const methodName = "cancelSignal";
      validateConnection(methodName, false, subprocess.connected);
      return sendOneMessage({
        anyProcess: subprocess,
        methodName,
        isSubprocess: false,
        wrappedMessage: { type: GRACEFUL_CANCEL_TYPE, message },
        message
      });
    };
    getCancelSignal = async ({ anyProcess, channel, isSubprocess, ipc }) => {
      await startIpc({
        anyProcess,
        channel,
        isSubprocess,
        ipc
      });
      return cancelController.signal;
    };
    startIpc = async ({ anyProcess, channel, isSubprocess, ipc }) => {
      if (cancelListening) {
        return;
      }
      cancelListening = true;
      if (!ipc) {
        throwOnMissingParent();
        return;
      }
      if (channel === null) {
        abortOnDisconnect();
        return;
      }
      getIpcEmitter(anyProcess, channel, isSubprocess);
      await scheduler2.yield();
    };
    cancelListening = false;
    handleAbort = (wrappedMessage) => {
      if (wrappedMessage?.type !== GRACEFUL_CANCEL_TYPE) {
        return false;
      }
      cancelController.abort(wrappedMessage.message);
      return true;
    };
    GRACEFUL_CANCEL_TYPE = "execa:ipc:cancel";
    abortOnDisconnect = () => {
      cancelController.abort(getAbortDisconnectError());
    };
    cancelController = new AbortController();
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/graceful.js
var validateGracefulCancel, throwOnGracefulCancel, sendOnAbort, getReason;
var init_graceful2 = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/graceful.js"() {
    init_abort_signal();
    init_graceful();
    init_kill();
    validateGracefulCancel = ({ gracefulCancel, cancelSignal, ipc, serialization }) => {
      if (!gracefulCancel) {
        return;
      }
      if (cancelSignal === void 0) {
        throw new Error("The `cancelSignal` option must be defined when setting the `gracefulCancel` option.");
      }
      if (!ipc) {
        throw new Error("The `ipc` option cannot be false when setting the `gracefulCancel` option.");
      }
      if (serialization === "json") {
        throw new Error("The `serialization` option cannot be 'json' when setting the `gracefulCancel` option.");
      }
    };
    throwOnGracefulCancel = ({
      subprocess,
      cancelSignal,
      gracefulCancel,
      forceKillAfterDelay,
      context,
      controller
    }) => gracefulCancel ? [sendOnAbort({
      subprocess,
      cancelSignal,
      forceKillAfterDelay,
      context,
      controller
    })] : [];
    sendOnAbort = async ({ subprocess, cancelSignal, forceKillAfterDelay, context, controller: { signal } }) => {
      await onAbortedSignal(cancelSignal, signal);
      const reason = getReason(cancelSignal);
      await sendAbort(subprocess, reason);
      killOnTimeout({
        kill: subprocess.kill,
        forceKillAfterDelay,
        context,
        controllerSignal: signal
      });
      context.terminationReason ??= "gracefulCancel";
      throw cancelSignal.reason;
    };
    getReason = ({ reason }) => {
      if (!(reason instanceof DOMException)) {
        return reason;
      }
      const error = new Error(reason.message);
      Object.defineProperty(error, "stack", {
        value: reason.stack,
        enumerable: false,
        configurable: true,
        writable: true
      });
      return error;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/timeout.js
import { setTimeout as setTimeout3 } from "node:timers/promises";
var validateTimeout, throwOnTimeout, killAfterTimeout;
var init_timeout = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/timeout.js"() {
    init_final_error();
    validateTimeout = ({ timeout }) => {
      if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
        throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
      }
    };
    throwOnTimeout = (subprocess, timeout, context, controller) => timeout === 0 || timeout === void 0 ? [] : [killAfterTimeout(subprocess, timeout, context, controller)];
    killAfterTimeout = async (subprocess, timeout, context, { signal }) => {
      await setTimeout3(timeout, void 0, { signal });
      context.terminationReason ??= "timeout";
      subprocess.kill();
      throw new DiscardedError();
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/node.js
import { execPath, execArgv } from "node:process";
import path4 from "node:path";
var mapNode, handleNodeOption;
var init_node2 = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/node.js"() {
    init_file_url();
    mapNode = ({ options }) => {
      if (options.node === false) {
        throw new TypeError('The "node" option cannot be false with `execaNode()`.');
      }
      return { options: { ...options, node: true } };
    };
    handleNodeOption = (file, commandArguments, {
      node: shouldHandleNode = false,
      nodePath = execPath,
      nodeOptions = execArgv.filter((nodeOption) => !nodeOption.startsWith("--inspect")),
      cwd,
      execPath: formerNodePath,
      ...options
    }) => {
      if (formerNodePath !== void 0) {
        throw new TypeError('The "execPath" option has been removed. Please use the "nodePath" option instead.');
      }
      const normalizedNodePath = safeNormalizeFileUrl(nodePath, 'The "nodePath" option');
      const resolvedNodePath = path4.resolve(cwd, normalizedNodePath);
      const newOptions = {
        ...options,
        nodePath: resolvedNodePath,
        node: shouldHandleNode,
        cwd
      };
      if (!shouldHandleNode) {
        return [file, commandArguments, newOptions];
      }
      if (path4.basename(file, ".exe") === "node") {
        throw new TypeError('When the "node" option is true, the first argument does not need to be "node".');
      }
      return [
        resolvedNodePath,
        [...nodeOptions, file, ...commandArguments],
        { ipc: true, ...newOptions, shell: false }
      ];
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/ipc-input.js
import { serialize } from "node:v8";
var validateIpcInputOption, validateAdvancedInput, validateJsonInput, validateIpcInput, sendIpcInput;
var init_ipc_input = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/ipc-input.js"() {
    validateIpcInputOption = ({ ipcInput, ipc, serialization }) => {
      if (ipcInput === void 0) {
        return;
      }
      if (!ipc) {
        throw new Error("The `ipcInput` option cannot be set unless the `ipc` option is `true`.");
      }
      validateIpcInput[serialization](ipcInput);
    };
    validateAdvancedInput = (ipcInput) => {
      try {
        serialize(ipcInput);
      } catch (error) {
        throw new Error("The `ipcInput` option is not serializable with a structured clone.", { cause: error });
      }
    };
    validateJsonInput = (ipcInput) => {
      try {
        JSON.stringify(ipcInput);
      } catch (error) {
        throw new Error("The `ipcInput` option is not serializable with JSON.", { cause: error });
      }
    };
    validateIpcInput = {
      advanced: validateAdvancedInput,
      json: validateJsonInput
    };
    sendIpcInput = async (subprocess, ipcInput) => {
      if (ipcInput === void 0) {
        return;
      }
      await subprocess.sendMessage(ipcInput);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/encoding-option.js
var validateEncoding, TEXT_ENCODINGS, BINARY_ENCODINGS, ENCODINGS, getCorrectEncoding, ENCODING_ALIASES, serializeEncoding;
var init_encoding_option = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/encoding-option.js"() {
    validateEncoding = ({ encoding }) => {
      if (ENCODINGS.has(encoding)) {
        return;
      }
      const correctEncoding = getCorrectEncoding(encoding);
      if (correctEncoding !== void 0) {
        throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to ${serializeEncoding(correctEncoding)}.`);
      }
      const correctEncodings = [...ENCODINGS].map((correctEncoding2) => serializeEncoding(correctEncoding2)).join(", ");
      throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to one of: ${correctEncodings}.`);
    };
    TEXT_ENCODINGS = /* @__PURE__ */ new Set(["utf8", "utf16le"]);
    BINARY_ENCODINGS = /* @__PURE__ */ new Set(["buffer", "hex", "base64", "base64url", "latin1", "ascii"]);
    ENCODINGS = /* @__PURE__ */ new Set([...TEXT_ENCODINGS, ...BINARY_ENCODINGS]);
    getCorrectEncoding = (encoding) => {
      if (encoding === null) {
        return "buffer";
      }
      if (typeof encoding !== "string") {
        return;
      }
      const lowerEncoding = encoding.toLowerCase();
      if (lowerEncoding in ENCODING_ALIASES) {
        return ENCODING_ALIASES[lowerEncoding];
      }
      if (ENCODINGS.has(lowerEncoding)) {
        return lowerEncoding;
      }
    };
    ENCODING_ALIASES = {
      // eslint-disable-next-line unicorn/text-encoding-identifier-case
      "utf-8": "utf8",
      "utf-16le": "utf16le",
      "ucs-2": "utf16le",
      ucs2: "utf16le",
      binary: "latin1"
    };
    serializeEncoding = (encoding) => typeof encoding === "string" ? `"${encoding}"` : String(encoding);
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/cwd.js
import { statSync } from "node:fs";
import path5 from "node:path";
import process5 from "node:process";
var normalizeCwd, getDefaultCwd, fixCwdError;
var init_cwd = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/cwd.js"() {
    init_file_url();
    normalizeCwd = (cwd = getDefaultCwd()) => {
      const cwdString = safeNormalizeFileUrl(cwd, 'The "cwd" option');
      return path5.resolve(cwdString);
    };
    getDefaultCwd = () => {
      try {
        return process5.cwd();
      } catch (error) {
        error.message = `The current directory does not exist.
${error.message}`;
        throw error;
      }
    };
    fixCwdError = (originalMessage, cwd) => {
      if (cwd === getDefaultCwd()) {
        return originalMessage;
      }
      let cwdStat;
      try {
        cwdStat = statSync(cwd);
      } catch (error) {
        return `The "cwd" option is invalid: ${cwd}.
${error.message}
${originalMessage}`;
      }
      if (!cwdStat.isDirectory()) {
        return `The "cwd" option is not a directory: ${cwd}.
${originalMessage}`;
      }
      return originalMessage;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/options.js
import path6 from "node:path";
import process6 from "node:process";
var normalizeOptions, addDefaultOptions, getEnv;
var init_options = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/options.js"() {
    init_cross_spawn();
    init_npm_run_path();
    init_kill();
    init_signal();
    init_cancel();
    init_graceful2();
    init_timeout();
    init_node2();
    init_ipc_input();
    init_encoding_option();
    init_cwd();
    init_file_url();
    init_specific();
    normalizeOptions = (filePath, rawArguments, rawOptions) => {
      rawOptions.cwd = normalizeCwd(rawOptions.cwd);
      const [processedFile, processedArguments, processedOptions] = handleNodeOption(filePath, rawArguments, rawOptions);
      const { command: file, args: commandArguments, options: initialOptions } = cross_spawn_default._parse(processedFile, processedArguments, processedOptions);
      const fdOptions = normalizeFdSpecificOptions(initialOptions);
      const options = addDefaultOptions(fdOptions);
      validateTimeout(options);
      validateEncoding(options);
      validateIpcInputOption(options);
      validateCancelSignal(options);
      validateGracefulCancel(options);
      options.shell = normalizeFileUrl(options.shell);
      options.env = getEnv(options);
      options.killSignal = normalizeKillSignal(options.killSignal);
      options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay);
      options.lines = options.lines.map((lines, fdNumber) => lines && !BINARY_ENCODINGS.has(options.encoding) && options.buffer[fdNumber]);
      if (process6.platform === "win32" && path6.basename(file, ".exe") === "cmd") {
        commandArguments.unshift("/q");
      }
      return { file, commandArguments, options };
    };
    addDefaultOptions = ({
      extendEnv = true,
      preferLocal = false,
      cwd,
      localDir: localDirectory = cwd,
      encoding = "utf8",
      reject = true,
      cleanup = true,
      all = false,
      windowsHide = true,
      killSignal = "SIGTERM",
      forceKillAfterDelay = true,
      gracefulCancel = false,
      ipcInput,
      ipc = ipcInput !== void 0 || gracefulCancel,
      serialization = "advanced",
      ...options
    }) => ({
      ...options,
      extendEnv,
      preferLocal,
      cwd,
      localDirectory,
      encoding,
      reject,
      cleanup,
      all,
      windowsHide,
      killSignal,
      forceKillAfterDelay,
      gracefulCancel,
      ipcInput,
      ipc,
      serialization
    });
    getEnv = ({ env: envOption, extendEnv, preferLocal, node, localDirectory, nodePath }) => {
      const env = extendEnv ? { ...process6.env, ...envOption } : envOption;
      if (preferLocal || node) {
        return npmRunPathEnv({
          env,
          cwd: localDirectory,
          execPath: nodePath,
          preferLocal,
          addExecPath: node
        });
      }
      return env;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/shell.js
var concatenateShell;
var init_shell = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/arguments/shell.js"() {
    concatenateShell = (file, commandArguments, options) => options.shell && commandArguments.length > 0 ? [[file, ...commandArguments].join(" "), [], options] : [file, commandArguments, options];
  }
});

// node_modules/.pnpm/strip-final-newline@4.0.0/node_modules/strip-final-newline/index.js
function stripFinalNewline(input) {
  if (typeof input === "string") {
    return stripFinalNewlineString(input);
  }
  if (!(ArrayBuffer.isView(input) && input.BYTES_PER_ELEMENT === 1)) {
    throw new Error("Input must be a string or a Uint8Array");
  }
  return stripFinalNewlineBinary(input);
}
var stripFinalNewlineString, stripFinalNewlineBinary, LF, LF_BINARY, CR, CR_BINARY;
var init_strip_final_newline = __esm({
  "node_modules/.pnpm/strip-final-newline@4.0.0/node_modules/strip-final-newline/index.js"() {
    stripFinalNewlineString = (input) => input.at(-1) === LF ? input.slice(0, input.at(-2) === CR ? -2 : -1) : input;
    stripFinalNewlineBinary = (input) => input.at(-1) === LF_BINARY ? input.subarray(0, input.at(-2) === CR_BINARY ? -2 : -1) : input;
    LF = "\n";
    LF_BINARY = LF.codePointAt(0);
    CR = "\r";
    CR_BINARY = CR.codePointAt(0);
  }
});

// node_modules/.pnpm/is-stream@4.0.1/node_modules/is-stream/index.js
function isStream(stream, { checkOpen = true } = {}) {
  return stream !== null && typeof stream === "object" && (stream.writable || stream.readable || !checkOpen || stream.writable === void 0 && stream.readable === void 0) && typeof stream.pipe === "function";
}
function isWritableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.writable || !checkOpen) && typeof stream.write === "function" && typeof stream.end === "function" && typeof stream.writable === "boolean" && typeof stream.writableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isReadableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.readable || !checkOpen) && typeof stream.read === "function" && typeof stream.readable === "boolean" && typeof stream.readableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isDuplexStream(stream, options) {
  return isWritableStream(stream, options) && isReadableStream(stream, options);
}
var init_is_stream = __esm({
  "node_modules/.pnpm/is-stream@4.0.1/node_modules/is-stream/index.js"() {
  }
});

// node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js
function i() {
  return this[n].next();
}
function o(r) {
  return this[n].return(r);
}
function h({ preventCancel: r = false } = {}) {
  const e = this.getReader(), t = new c(
    e,
    r
  ), s = Object.create(u);
  return s[n] = t, s;
}
var a, c, n, u;
var init_asyncIterator = __esm({
  "node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js"() {
    a = Object.getPrototypeOf(
      Object.getPrototypeOf(
        /* istanbul ignore next */
        async function* () {
        }
      ).prototype
    );
    c = class {
      #t;
      #n;
      #r = false;
      #e = void 0;
      constructor(e, t) {
        this.#t = e, this.#n = t;
      }
      next() {
        const e = () => this.#s();
        return this.#e = this.#e ? this.#e.then(e, e) : e(), this.#e;
      }
      return(e) {
        const t = () => this.#i(e);
        return this.#e ? this.#e.then(t, t) : t();
      }
      async #s() {
        if (this.#r)
          return {
            done: true,
            value: void 0
          };
        let e;
        try {
          e = await this.#t.read();
        } catch (t) {
          throw this.#e = void 0, this.#r = true, this.#t.releaseLock(), t;
        }
        return e.done && (this.#e = void 0, this.#r = true, this.#t.releaseLock()), e;
      }
      async #i(e) {
        if (this.#r)
          return {
            done: true,
            value: e
          };
        if (this.#r = true, !this.#n) {
          const t = this.#t.cancel(e);
          return this.#t.releaseLock(), await t, {
            done: true,
            value: e
          };
        }
        return this.#t.releaseLock(), {
          done: true,
          value: e
        };
      }
    };
    n = /* @__PURE__ */ Symbol();
    Object.defineProperty(i, "name", { value: "next" });
    Object.defineProperty(o, "name", { value: "return" });
    u = Object.create(a, {
      next: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: i
      },
      return: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: o
      }
    });
  }
});

// node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/fromAnyIterable.js
var init_fromAnyIterable = __esm({
  "node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/fromAnyIterable.js"() {
  }
});

// node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/index.js
var init_ponyfill = __esm({
  "node_modules/.pnpm/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/index.js"() {
    init_asyncIterator();
    init_fromAnyIterable();
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/stream.js
var getAsyncIterable, toString, getStreamIterable, handleStreamEnd, nodeImports;
var init_stream = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/stream.js"() {
    init_is_stream();
    init_ponyfill();
    getAsyncIterable = (stream) => {
      if (isReadableStream(stream, { checkOpen: false }) && nodeImports.on !== void 0) {
        return getStreamIterable(stream);
      }
      if (typeof stream?.[Symbol.asyncIterator] === "function") {
        return stream;
      }
      if (toString.call(stream) === "[object ReadableStream]") {
        return h.call(stream);
      }
      throw new TypeError("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    };
    ({ toString } = Object.prototype);
    getStreamIterable = async function* (stream) {
      const controller = new AbortController();
      const state = {};
      handleStreamEnd(stream, controller, state);
      try {
        for await (const [chunk] of nodeImports.on(stream, "data", { signal: controller.signal })) {
          yield chunk;
        }
      } catch (error) {
        if (state.error !== void 0) {
          throw state.error;
        } else if (!controller.signal.aborted) {
          throw error;
        }
      } finally {
        stream.destroy();
      }
    };
    handleStreamEnd = async (stream, controller, state) => {
      try {
        await nodeImports.finished(stream, {
          cleanup: true,
          readable: true,
          writable: false,
          error: false
        });
      } catch (error) {
        state.error = error;
      } finally {
        controller.abort();
      }
    };
    nodeImports = {};
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/contents.js
var getStreamContents, appendFinalChunk, appendChunk, addNewChunk, getChunkType, objectToString2, MaxBufferError;
var init_contents = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/contents.js"() {
    init_stream();
    getStreamContents = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
      const asyncIterable = getAsyncIterable(stream);
      const state = init();
      state.length = 0;
      try {
        for await (const chunk of asyncIterable) {
          const chunkType = getChunkType(chunk);
          const convertedChunk = convertChunk[chunkType](chunk, state);
          appendChunk({
            convertedChunk,
            state,
            getSize,
            truncateChunk,
            addChunk,
            maxBuffer
          });
        }
        appendFinalChunk({
          state,
          convertChunk,
          getSize,
          truncateChunk,
          addChunk,
          getFinalChunk,
          maxBuffer
        });
        return finalize(state);
      } catch (error) {
        const normalizedError = typeof error === "object" && error !== null ? error : new Error(error);
        normalizedError.bufferedData = finalize(state);
        throw normalizedError;
      }
    };
    appendFinalChunk = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
      const convertedChunk = getFinalChunk(state);
      if (convertedChunk !== void 0) {
        appendChunk({
          convertedChunk,
          state,
          getSize,
          truncateChunk,
          addChunk,
          maxBuffer
        });
      }
    };
    appendChunk = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer }) => {
      const chunkSize = getSize(convertedChunk);
      const newLength = state.length + chunkSize;
      if (newLength <= maxBuffer) {
        addNewChunk(convertedChunk, state, addChunk, newLength);
        return;
      }
      const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
      if (truncatedChunk !== void 0) {
        addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
      }
      throw new MaxBufferError();
    };
    addNewChunk = (convertedChunk, state, addChunk, newLength) => {
      state.contents = addChunk(convertedChunk, state, newLength);
      state.length = newLength;
    };
    getChunkType = (chunk) => {
      const typeOfChunk = typeof chunk;
      if (typeOfChunk === "string") {
        return "string";
      }
      if (typeOfChunk !== "object" || chunk === null) {
        return "others";
      }
      if (globalThis.Buffer?.isBuffer(chunk)) {
        return "buffer";
      }
      const prototypeName = objectToString2.call(chunk);
      if (prototypeName === "[object ArrayBuffer]") {
        return "arrayBuffer";
      }
      if (prototypeName === "[object DataView]") {
        return "dataView";
      }
      if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString2.call(chunk.buffer) === "[object ArrayBuffer]") {
        return "typedArray";
      }
      return "others";
    };
    ({ toString: objectToString2 } = Object.prototype);
    MaxBufferError = class extends Error {
      name = "MaxBufferError";
      constructor() {
        super("maxBuffer exceeded");
      }
    };
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/utils.js
var identity2, noop, getContentsProperty, throwObjectStream, getLengthProperty;
var init_utils = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/utils.js"() {
    identity2 = (value) => value;
    noop = () => void 0;
    getContentsProperty = ({ contents }) => contents;
    throwObjectStream = (chunk) => {
      throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
    };
    getLengthProperty = (convertedChunk) => convertedChunk.length;
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/array.js
async function getStreamAsArray(stream, options) {
  return getStreamContents(stream, arrayMethods, options);
}
var initArray, increment, addArrayChunk, arrayMethods;
var init_array = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/array.js"() {
    init_contents();
    init_utils();
    initArray = () => ({ contents: [] });
    increment = () => 1;
    addArrayChunk = (convertedChunk, { contents }) => {
      contents.push(convertedChunk);
      return contents;
    };
    arrayMethods = {
      init: initArray,
      convertChunk: {
        string: identity2,
        buffer: identity2,
        arrayBuffer: identity2,
        dataView: identity2,
        typedArray: identity2,
        others: identity2
      },
      getSize: increment,
      truncateChunk: noop,
      addChunk: addArrayChunk,
      getFinalChunk: noop,
      finalize: getContentsProperty
    };
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/array-buffer.js
async function getStreamAsArrayBuffer(stream, options) {
  return getStreamContents(stream, arrayBufferMethods, options);
}
var initArrayBuffer, useTextEncoder, textEncoder2, useUint8Array, useUint8ArrayWithOffset, truncateArrayBufferChunk, addArrayBufferChunk, resizeArrayBufferSlow, resizeArrayBuffer, getNewContentsLength, SCALE_FACTOR, finalizeArrayBuffer, hasArrayBufferResize, arrayBufferMethods;
var init_array_buffer = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/array-buffer.js"() {
    init_contents();
    init_utils();
    initArrayBuffer = () => ({ contents: new ArrayBuffer(0) });
    useTextEncoder = (chunk) => textEncoder2.encode(chunk);
    textEncoder2 = new TextEncoder();
    useUint8Array = (chunk) => new Uint8Array(chunk);
    useUint8ArrayWithOffset = (chunk) => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
    addArrayBufferChunk = (convertedChunk, { contents, length: previousLength }, length) => {
      const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
      new Uint8Array(newContents).set(convertedChunk, previousLength);
      return newContents;
    };
    resizeArrayBufferSlow = (contents, length) => {
      if (length <= contents.byteLength) {
        return contents;
      }
      const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
      new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
      return arrayBuffer;
    };
    resizeArrayBuffer = (contents, length) => {
      if (length <= contents.maxByteLength) {
        contents.resize(length);
        return contents;
      }
      const arrayBuffer = new ArrayBuffer(length, { maxByteLength: getNewContentsLength(length) });
      new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
      return arrayBuffer;
    };
    getNewContentsLength = (length) => SCALE_FACTOR ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR));
    SCALE_FACTOR = 2;
    finalizeArrayBuffer = ({ contents, length }) => hasArrayBufferResize() ? contents : contents.slice(0, length);
    hasArrayBufferResize = () => "resize" in ArrayBuffer.prototype;
    arrayBufferMethods = {
      init: initArrayBuffer,
      convertChunk: {
        string: useTextEncoder,
        buffer: useUint8Array,
        arrayBuffer: useUint8Array,
        dataView: useUint8ArrayWithOffset,
        typedArray: useUint8ArrayWithOffset,
        others: throwObjectStream
      },
      getSize: getLengthProperty,
      truncateChunk: truncateArrayBufferChunk,
      addChunk: addArrayBufferChunk,
      getFinalChunk: noop,
      finalize: finalizeArrayBuffer
    };
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/buffer.js
var init_buffer = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/buffer.js"() {
    init_array_buffer();
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/string.js
async function getStreamAsString(stream, options) {
  return getStreamContents(stream, stringMethods, options);
}
var initString, useTextDecoder, addStringChunk, truncateStringChunk, getFinalStringChunk, stringMethods;
var init_string = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/string.js"() {
    init_contents();
    init_utils();
    initString = () => ({ contents: "", textDecoder: new TextDecoder() });
    useTextDecoder = (chunk, { textDecoder: textDecoder2 }) => textDecoder2.decode(chunk, { stream: true });
    addStringChunk = (convertedChunk, { contents }) => contents + convertedChunk;
    truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
    getFinalStringChunk = ({ textDecoder: textDecoder2 }) => {
      const finalChunk = textDecoder2.decode();
      return finalChunk === "" ? void 0 : finalChunk;
    };
    stringMethods = {
      init: initString,
      convertChunk: {
        string: identity2,
        buffer: useTextDecoder,
        arrayBuffer: useTextDecoder,
        dataView: useTextDecoder,
        typedArray: useTextDecoder,
        others: throwObjectStream
      },
      getSize: getLengthProperty,
      truncateChunk: truncateStringChunk,
      addChunk: addStringChunk,
      getFinalChunk: getFinalStringChunk,
      finalize: getContentsProperty
    };
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/exports.js
var init_exports = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/exports.js"() {
    init_array();
    init_array_buffer();
    init_buffer();
    init_string();
    init_contents();
  }
});

// node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/index.js
import { on } from "node:events";
import { finished } from "node:stream/promises";
var init_source = __esm({
  "node_modules/.pnpm/get-stream@9.0.1/node_modules/get-stream/source/index.js"() {
    init_stream();
    init_exports();
    Object.assign(nodeImports, { on, finished });
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/max-buffer.js
var handleMaxBuffer, getMaxBufferUnit, checkIpcMaxBuffer, getMaxBufferMessage, getMaxBufferInfo, isMaxBufferSync, truncateMaxBufferSync, getMaxBufferSync;
var init_max_buffer = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/max-buffer.js"() {
    init_source();
    init_standard_stream();
    init_specific();
    handleMaxBuffer = ({ error, stream, readableObjectMode, lines, encoding, fdNumber }) => {
      if (!(error instanceof MaxBufferError)) {
        throw error;
      }
      if (fdNumber === "all") {
        return error;
      }
      const unit = getMaxBufferUnit(readableObjectMode, lines, encoding);
      error.maxBufferInfo = { fdNumber, unit };
      stream.destroy();
      throw error;
    };
    getMaxBufferUnit = (readableObjectMode, lines, encoding) => {
      if (readableObjectMode) {
        return "objects";
      }
      if (lines) {
        return "lines";
      }
      if (encoding === "buffer") {
        return "bytes";
      }
      return "characters";
    };
    checkIpcMaxBuffer = (subprocess, ipcOutput, maxBuffer) => {
      if (ipcOutput.length !== maxBuffer) {
        return;
      }
      const error = new MaxBufferError();
      error.maxBufferInfo = { fdNumber: "ipc" };
      throw error;
    };
    getMaxBufferMessage = (error, maxBuffer) => {
      const { streamName, threshold, unit } = getMaxBufferInfo(error, maxBuffer);
      return `Command's ${streamName} was larger than ${threshold} ${unit}`;
    };
    getMaxBufferInfo = (error, maxBuffer) => {
      if (error?.maxBufferInfo === void 0) {
        return { streamName: "output", threshold: maxBuffer[1], unit: "bytes" };
      }
      const { maxBufferInfo: { fdNumber, unit } } = error;
      delete error.maxBufferInfo;
      const threshold = getFdSpecificValue(maxBuffer, fdNumber);
      if (fdNumber === "ipc") {
        return { streamName: "IPC output", threshold, unit: "messages" };
      }
      return { streamName: getStreamName(fdNumber), threshold, unit };
    };
    isMaxBufferSync = (resultError, output, maxBuffer) => resultError?.code === "ENOBUFS" && output !== null && output.some((result) => result !== null && result.length > getMaxBufferSync(maxBuffer));
    truncateMaxBufferSync = (result, isMaxBuffer, maxBuffer) => {
      if (!isMaxBuffer) {
        return result;
      }
      const maxBufferValue = getMaxBufferSync(maxBuffer);
      return result.length > maxBufferValue ? result.slice(0, maxBufferValue) : result;
    };
    getMaxBufferSync = ([, stdoutMaxBuffer]) => stdoutMaxBuffer;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/message.js
import { inspect as inspect2 } from "node:util";
var createMessages, getErrorPrefix, getForcefulSuffix, getOriginalMessage, serializeIpcMessage, serializeMessagePart, serializeMessageItem;
var init_message = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/message.js"() {
    init_strip_final_newline();
    init_uint_array();
    init_cwd();
    init_escape();
    init_max_buffer();
    init_signal();
    init_final_error();
    createMessages = ({
      stdio,
      all,
      ipcOutput,
      originalError,
      signal,
      signalDescription,
      exitCode,
      escapedCommand,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      forceKillAfterDelay,
      killSignal,
      maxBuffer,
      timeout,
      cwd
    }) => {
      const errorCode = originalError?.code;
      const prefix = getErrorPrefix({
        originalError,
        timedOut,
        timeout,
        isMaxBuffer,
        maxBuffer,
        errorCode,
        signal,
        signalDescription,
        exitCode,
        isCanceled,
        isGracefullyCanceled,
        isForcefullyTerminated,
        forceKillAfterDelay,
        killSignal
      });
      const originalMessage = getOriginalMessage(originalError, cwd);
      const suffix = originalMessage === void 0 ? "" : `
${originalMessage}`;
      const shortMessage = `${prefix}: ${escapedCommand}${suffix}`;
      const messageStdio = all === void 0 ? [stdio[2], stdio[1]] : [all];
      const message = [
        shortMessage,
        ...messageStdio,
        ...stdio.slice(3),
        ipcOutput.map((ipcMessage) => serializeIpcMessage(ipcMessage)).join("\n")
      ].map((messagePart) => escapeLines(stripFinalNewline(serializeMessagePart(messagePart)))).filter(Boolean).join("\n\n");
      return { originalMessage, shortMessage, message };
    };
    getErrorPrefix = ({
      originalError,
      timedOut,
      timeout,
      isMaxBuffer,
      maxBuffer,
      errorCode,
      signal,
      signalDescription,
      exitCode,
      isCanceled,
      isGracefullyCanceled,
      isForcefullyTerminated,
      forceKillAfterDelay,
      killSignal
    }) => {
      const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay);
      if (timedOut) {
        return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`;
      }
      if (isGracefullyCanceled) {
        if (signal === void 0) {
          return `Command was gracefully canceled with exit code ${exitCode}`;
        }
        return isForcefullyTerminated ? `Command was gracefully canceled${forcefulSuffix}` : `Command was gracefully canceled with ${signal} (${signalDescription})`;
      }
      if (isCanceled) {
        return `Command was canceled${forcefulSuffix}`;
      }
      if (isMaxBuffer) {
        return `${getMaxBufferMessage(originalError, maxBuffer)}${forcefulSuffix}`;
      }
      if (errorCode !== void 0) {
        return `Command failed with ${errorCode}${forcefulSuffix}`;
      }
      if (isForcefullyTerminated) {
        return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`;
      }
      if (signal !== void 0) {
        return `Command was killed with ${signal} (${signalDescription})`;
      }
      if (exitCode !== void 0) {
        return `Command failed with exit code ${exitCode}`;
      }
      return "Command failed";
    };
    getForcefulSuffix = (isForcefullyTerminated, forceKillAfterDelay) => isForcefullyTerminated ? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds` : "";
    getOriginalMessage = (originalError, cwd) => {
      if (originalError instanceof DiscardedError) {
        return;
      }
      const originalMessage = isExecaError(originalError) ? originalError.originalMessage : String(originalError?.message ?? originalError);
      const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage, cwd));
      return escapedOriginalMessage === "" ? void 0 : escapedOriginalMessage;
    };
    serializeIpcMessage = (ipcMessage) => typeof ipcMessage === "string" ? ipcMessage : inspect2(ipcMessage);
    serializeMessagePart = (messagePart) => Array.isArray(messagePart) ? messagePart.map((messageItem) => stripFinalNewline(serializeMessageItem(messageItem))).filter(Boolean).join("\n") : serializeMessageItem(messagePart);
    serializeMessageItem = (messageItem) => {
      if (typeof messageItem === "string") {
        return messageItem;
      }
      if (isUint8Array(messageItem)) {
        return uint8ArrayToString(messageItem);
      }
      return "";
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/result.js
var makeSuccessResult, makeEarlyError, makeError, getErrorProperties, omitUndefinedProperties, normalizeExitPayload;
var init_result = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/result.js"() {
    init_signal();
    init_duration();
    init_final_error();
    init_message();
    makeSuccessResult = ({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput,
      options: { cwd },
      startTime
    }) => omitUndefinedProperties({
      command,
      escapedCommand,
      cwd,
      durationMs: getDurationMs(startTime),
      failed: false,
      timedOut: false,
      isCanceled: false,
      isGracefullyCanceled: false,
      isTerminated: false,
      isMaxBuffer: false,
      isForcefullyTerminated: false,
      exitCode: 0,
      stdout: stdio[1],
      stderr: stdio[2],
      all,
      stdio,
      ipcOutput,
      pipedFrom: []
    });
    makeEarlyError = ({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      isSync
    }) => makeError({
      error,
      command,
      escapedCommand,
      startTime,
      timedOut: false,
      isCanceled: false,
      isGracefullyCanceled: false,
      isMaxBuffer: false,
      isForcefullyTerminated: false,
      stdio: Array.from({ length: fileDescriptors.length }),
      ipcOutput: [],
      options,
      isSync
    });
    makeError = ({
      error: originalError,
      command,
      escapedCommand,
      startTime,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode: rawExitCode,
      signal: rawSignal,
      stdio,
      all,
      ipcOutput,
      options: {
        timeoutDuration,
        timeout = timeoutDuration,
        forceKillAfterDelay,
        killSignal,
        cwd,
        maxBuffer
      },
      isSync
    }) => {
      const { exitCode, signal, signalDescription } = normalizeExitPayload(rawExitCode, rawSignal);
      const { originalMessage, shortMessage, message } = createMessages({
        stdio,
        all,
        ipcOutput,
        originalError,
        signal,
        signalDescription,
        exitCode,
        escapedCommand,
        timedOut,
        isCanceled,
        isGracefullyCanceled,
        isMaxBuffer,
        isForcefullyTerminated,
        forceKillAfterDelay,
        killSignal,
        maxBuffer,
        timeout,
        cwd
      });
      const error = getFinalError(originalError, message, isSync);
      Object.assign(error, getErrorProperties({
        error,
        command,
        escapedCommand,
        startTime,
        timedOut,
        isCanceled,
        isGracefullyCanceled,
        isMaxBuffer,
        isForcefullyTerminated,
        exitCode,
        signal,
        signalDescription,
        stdio,
        all,
        ipcOutput,
        cwd,
        originalMessage,
        shortMessage
      }));
      return error;
    };
    getErrorProperties = ({
      error,
      command,
      escapedCommand,
      startTime,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode,
      signal,
      signalDescription,
      stdio,
      all,
      ipcOutput,
      cwd,
      originalMessage,
      shortMessage
    }) => omitUndefinedProperties({
      shortMessage,
      originalMessage,
      command,
      escapedCommand,
      cwd,
      durationMs: getDurationMs(startTime),
      failed: true,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isTerminated: signal !== void 0,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode,
      signal,
      signalDescription,
      code: error.cause?.code,
      stdout: stdio[1],
      stderr: stdio[2],
      all,
      stdio,
      ipcOutput,
      pipedFrom: []
    });
    omitUndefinedProperties = (result) => Object.fromEntries(Object.entries(result).filter(([, value]) => value !== void 0));
    normalizeExitPayload = (rawExitCode, rawSignal) => {
      const exitCode = rawExitCode === null ? void 0 : rawExitCode;
      const signal = rawSignal === null ? void 0 : rawSignal;
      const signalDescription = signal === void 0 ? void 0 : getSignalDescription(rawSignal);
      return { exitCode, signal, signalDescription };
    };
  }
});

// node_modules/.pnpm/parse-ms@4.0.0/node_modules/parse-ms/index.js
function parseNumber(milliseconds) {
  return {
    days: Math.trunc(milliseconds / 864e5),
    hours: Math.trunc(milliseconds / 36e5 % 24),
    minutes: Math.trunc(milliseconds / 6e4 % 60),
    seconds: Math.trunc(milliseconds / 1e3 % 60),
    milliseconds: Math.trunc(milliseconds % 1e3),
    microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e3) % 1e3),
    nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1e3)
  };
}
function parseBigint(milliseconds) {
  return {
    days: milliseconds / 86400000n,
    hours: milliseconds / 3600000n % 24n,
    minutes: milliseconds / 60000n % 60n,
    seconds: milliseconds / 1000n % 60n,
    milliseconds: milliseconds % 1000n,
    microseconds: 0n,
    nanoseconds: 0n
  };
}
function parseMilliseconds(milliseconds) {
  switch (typeof milliseconds) {
    case "number": {
      if (Number.isFinite(milliseconds)) {
        return parseNumber(milliseconds);
      }
      break;
    }
    case "bigint": {
      return parseBigint(milliseconds);
    }
  }
  throw new TypeError("Expected a finite number or bigint");
}
var toZeroIfInfinity;
var init_parse_ms = __esm({
  "node_modules/.pnpm/parse-ms@4.0.0/node_modules/parse-ms/index.js"() {
    toZeroIfInfinity = (value) => Number.isFinite(value) ? value : 0;
  }
});

// node_modules/.pnpm/pretty-ms@9.3.0/node_modules/pretty-ms/index.js
function prettyMilliseconds(milliseconds, options) {
  const isBigInt = typeof milliseconds === "bigint";
  if (!isBigInt && !Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number or bigint");
  }
  options = { ...options };
  const sign = milliseconds < 0 ? "-" : "";
  milliseconds = milliseconds < 0 ? -milliseconds : milliseconds;
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.unitCount = 1;
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  let result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    if ((result.length === 0 || !options.colonNotation) && isZero(value) && !(options.colonNotation && short === "m")) {
      return;
    }
    valueString ??= String(value);
    if (options.colonNotation) {
      const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      valueString += options.verbose ? " " + pluralize(long, value) : short;
    }
    result.push(valueString);
  };
  const parsed = parseMilliseconds(milliseconds);
  const days = BigInt(parsed.days);
  if (options.hideYearAndDays) {
    add(BigInt(days) * 24n + BigInt(parsed.hours), "hour", "h");
  } else {
    if (options.hideYear) {
      add(days, "day", "d");
    } else {
      add(days / 365n, "year", "y");
      add(days % 365n, "day", "d");
    }
    add(Number(parsed.hours), "hour", "h");
  }
  add(Number(parsed.minutes), "minute", "m");
  if (!options.hideSeconds) {
    if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3 && !options.subSecondsAsDecimals) {
      const seconds = Number(parsed.seconds);
      const milliseconds2 = Number(parsed.milliseconds);
      const microseconds = Number(parsed.microseconds);
      const nanoseconds = Number(parsed.nanoseconds);
      add(seconds, "second", "s");
      if (options.formatSubMilliseconds) {
        add(milliseconds2, "millisecond", "ms");
        add(microseconds, "microsecond", "\xB5s");
        add(nanoseconds, "nanosecond", "ns");
      } else {
        const millisecondsAndBelow = milliseconds2 + microseconds / 1e3 + nanoseconds / 1e6;
        const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
        const roundedMilliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
        const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMilliseconds;
        add(
          Number.parseFloat(millisecondsString),
          "millisecond",
          "ms",
          millisecondsString
        );
      }
    } else {
      const seconds = (isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds) / 1e3 % 60;
      const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
      const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
      const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
      add(Number.parseFloat(secondsString), "second", "s", secondsString);
    }
  }
  if (result.length === 0) {
    return sign + "0" + (options.verbose ? " milliseconds" : "ms");
  }
  const separator = options.colonNotation ? ":" : " ";
  if (typeof options.unitCount === "number") {
    result = result.slice(0, Math.max(options.unitCount, 1));
  }
  return sign + result.join(separator);
}
var isZero, pluralize, SECOND_ROUNDING_EPSILON, ONE_DAY_IN_MILLISECONDS;
var init_pretty_ms = __esm({
  "node_modules/.pnpm/pretty-ms@9.3.0/node_modules/pretty-ms/index.js"() {
    init_parse_ms();
    isZero = (value) => value === 0 || value === 0n;
    pluralize = (word, count2) => count2 === 1 || count2 === 1n ? word : `${word}s`;
    SECOND_ROUNDING_EPSILON = 1e-7;
    ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/error.js
var logError;
var init_error = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/error.js"() {
    init_log();
    logError = (result, verboseInfo) => {
      if (result.failed) {
        verboseLog({
          type: "error",
          verboseMessage: result.shortMessage,
          verboseInfo,
          result
        });
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/complete.js
var logResult, logDuration;
var init_complete = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/complete.js"() {
    init_pretty_ms();
    init_values();
    init_log();
    init_error();
    logResult = (result, verboseInfo) => {
      if (!isVerbose(verboseInfo)) {
        return;
      }
      logError(result, verboseInfo);
      logDuration(result, verboseInfo);
    };
    logDuration = (result, verboseInfo) => {
      const verboseMessage = `(done in ${prettyMilliseconds(result.durationMs)})`;
      verboseLog({
        type: "duration",
        verboseMessage,
        verboseInfo,
        result
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/reject.js
var handleResult;
var init_reject = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/reject.js"() {
    init_complete();
    handleResult = (result, verboseInfo, { reject }) => {
      logResult(result, verboseInfo);
      if (result.failed && reject) {
        throw result;
      }
      return result;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/type.js
var getStdioItemType, getTransformObjectType, getDuplexType, getTransformStreamType, validateNonGeneratorType, checkUndefinedOption, getGeneratorObjectType, checkBooleanOption, isGenerator, isAsyncGenerator, isSyncGenerator, isTransformOptions, isUrl, isRegularUrl, isFilePathObject, FILE_PATH_KEYS, isFilePathString, isUnknownStdioString, KNOWN_STDIO_STRINGS, isReadableStream2, isWritableStream2, isWebStream, isTransformStream, isAsyncIterableObject, isIterableObject, isObject, TRANSFORM_TYPES, FILE_TYPES, SPECIAL_DUPLICATE_TYPES_SYNC, SPECIAL_DUPLICATE_TYPES, FORBID_DUPLICATE_TYPES, TYPE_TO_MESSAGE;
var init_type = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/type.js"() {
    init_is_stream();
    init_is_plain_obj();
    init_uint_array();
    getStdioItemType = (value, optionName) => {
      if (isAsyncGenerator(value)) {
        return "asyncGenerator";
      }
      if (isSyncGenerator(value)) {
        return "generator";
      }
      if (isUrl(value)) {
        return "fileUrl";
      }
      if (isFilePathObject(value)) {
        return "filePath";
      }
      if (isWebStream(value)) {
        return "webStream";
      }
      if (isStream(value, { checkOpen: false })) {
        return "native";
      }
      if (isUint8Array(value)) {
        return "uint8Array";
      }
      if (isAsyncIterableObject(value)) {
        return "asyncIterable";
      }
      if (isIterableObject(value)) {
        return "iterable";
      }
      if (isTransformStream(value)) {
        return getTransformStreamType({ transform: value }, optionName);
      }
      if (isTransformOptions(value)) {
        return getTransformObjectType(value, optionName);
      }
      return "native";
    };
    getTransformObjectType = (value, optionName) => {
      if (isDuplexStream(value.transform, { checkOpen: false })) {
        return getDuplexType(value, optionName);
      }
      if (isTransformStream(value.transform)) {
        return getTransformStreamType(value, optionName);
      }
      return getGeneratorObjectType(value, optionName);
    };
    getDuplexType = (value, optionName) => {
      validateNonGeneratorType(value, optionName, "Duplex stream");
      return "duplex";
    };
    getTransformStreamType = (value, optionName) => {
      validateNonGeneratorType(value, optionName, "web TransformStream");
      return "webTransform";
    };
    validateNonGeneratorType = ({ final, binary, objectMode }, optionName, typeName) => {
      checkUndefinedOption(final, `${optionName}.final`, typeName);
      checkUndefinedOption(binary, `${optionName}.binary`, typeName);
      checkBooleanOption(objectMode, `${optionName}.objectMode`);
    };
    checkUndefinedOption = (value, optionName, typeName) => {
      if (value !== void 0) {
        throw new TypeError(`The \`${optionName}\` option can only be defined when using a generator, not a ${typeName}.`);
      }
    };
    getGeneratorObjectType = ({ transform, final, binary, objectMode }, optionName) => {
      if (transform !== void 0 && !isGenerator(transform)) {
        throw new TypeError(`The \`${optionName}.transform\` option must be a generator, a Duplex stream or a web TransformStream.`);
      }
      if (isDuplexStream(final, { checkOpen: false })) {
        throw new TypeError(`The \`${optionName}.final\` option must not be a Duplex stream.`);
      }
      if (isTransformStream(final)) {
        throw new TypeError(`The \`${optionName}.final\` option must not be a web TransformStream.`);
      }
      if (final !== void 0 && !isGenerator(final)) {
        throw new TypeError(`The \`${optionName}.final\` option must be a generator.`);
      }
      checkBooleanOption(binary, `${optionName}.binary`);
      checkBooleanOption(objectMode, `${optionName}.objectMode`);
      return isAsyncGenerator(transform) || isAsyncGenerator(final) ? "asyncGenerator" : "generator";
    };
    checkBooleanOption = (value, optionName) => {
      if (value !== void 0 && typeof value !== "boolean") {
        throw new TypeError(`The \`${optionName}\` option must use a boolean.`);
      }
    };
    isGenerator = (value) => isAsyncGenerator(value) || isSyncGenerator(value);
    isAsyncGenerator = (value) => Object.prototype.toString.call(value) === "[object AsyncGeneratorFunction]";
    isSyncGenerator = (value) => Object.prototype.toString.call(value) === "[object GeneratorFunction]";
    isTransformOptions = (value) => isPlainObject(value) && (value.transform !== void 0 || value.final !== void 0);
    isUrl = (value) => Object.prototype.toString.call(value) === "[object URL]";
    isRegularUrl = (value) => isUrl(value) && value.protocol !== "file:";
    isFilePathObject = (value) => isPlainObject(value) && Object.keys(value).length > 0 && Object.keys(value).every((key) => FILE_PATH_KEYS.has(key)) && isFilePathString(value.file);
    FILE_PATH_KEYS = /* @__PURE__ */ new Set(["file", "append"]);
    isFilePathString = (file) => typeof file === "string";
    isUnknownStdioString = (type, value) => type === "native" && typeof value === "string" && !KNOWN_STDIO_STRINGS.has(value);
    KNOWN_STDIO_STRINGS = /* @__PURE__ */ new Set(["ipc", "ignore", "inherit", "overlapped", "pipe"]);
    isReadableStream2 = (value) => Object.prototype.toString.call(value) === "[object ReadableStream]";
    isWritableStream2 = (value) => Object.prototype.toString.call(value) === "[object WritableStream]";
    isWebStream = (value) => isReadableStream2(value) || isWritableStream2(value);
    isTransformStream = (value) => isReadableStream2(value?.readable) && isWritableStream2(value?.writable);
    isAsyncIterableObject = (value) => isObject(value) && typeof value[Symbol.asyncIterator] === "function";
    isIterableObject = (value) => isObject(value) && typeof value[Symbol.iterator] === "function";
    isObject = (value) => typeof value === "object" && value !== null;
    TRANSFORM_TYPES = /* @__PURE__ */ new Set(["generator", "asyncGenerator", "duplex", "webTransform"]);
    FILE_TYPES = /* @__PURE__ */ new Set(["fileUrl", "filePath", "fileNumber"]);
    SPECIAL_DUPLICATE_TYPES_SYNC = /* @__PURE__ */ new Set(["fileUrl", "filePath"]);
    SPECIAL_DUPLICATE_TYPES = /* @__PURE__ */ new Set([...SPECIAL_DUPLICATE_TYPES_SYNC, "webStream", "nodeStream"]);
    FORBID_DUPLICATE_TYPES = /* @__PURE__ */ new Set(["webTransform", "duplex"]);
    TYPE_TO_MESSAGE = {
      generator: "a generator",
      asyncGenerator: "an async generator",
      fileUrl: "a file URL",
      filePath: "a file path string",
      fileNumber: "a file descriptor number",
      webStream: "a web stream",
      nodeStream: "a Node.js stream",
      webTransform: "a web TransformStream",
      duplex: "a Duplex stream",
      native: "any value",
      iterable: "an iterable",
      asyncIterable: "an async iterable",
      string: "a string",
      uint8Array: "a Uint8Array"
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/object-mode.js
var getTransformObjectModes, getOutputObjectModes, getInputObjectModes, getFdObjectMode;
var init_object_mode = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/object-mode.js"() {
    init_type();
    getTransformObjectModes = (objectMode, index, newTransforms, direction) => direction === "output" ? getOutputObjectModes(objectMode, index, newTransforms) : getInputObjectModes(objectMode, index, newTransforms);
    getOutputObjectModes = (objectMode, index, newTransforms) => {
      const writableObjectMode = index !== 0 && newTransforms[index - 1].value.readableObjectMode;
      const readableObjectMode = objectMode ?? writableObjectMode;
      return { writableObjectMode, readableObjectMode };
    };
    getInputObjectModes = (objectMode, index, newTransforms) => {
      const writableObjectMode = index === 0 ? objectMode === true : newTransforms[index - 1].value.readableObjectMode;
      const readableObjectMode = index !== newTransforms.length - 1 && (objectMode ?? writableObjectMode);
      return { writableObjectMode, readableObjectMode };
    };
    getFdObjectMode = (stdioItems, direction) => {
      const lastTransform = stdioItems.findLast(({ type }) => TRANSFORM_TYPES.has(type));
      if (lastTransform === void 0) {
        return false;
      }
      return direction === "input" ? lastTransform.value.writableObjectMode : lastTransform.value.readableObjectMode;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/normalize.js
var normalizeTransforms, getTransforms, normalizeTransform, normalizeDuplex, normalizeTransformStream, normalizeGenerator, sortTransforms;
var init_normalize = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/normalize.js"() {
    init_is_plain_obj();
    init_encoding_option();
    init_type();
    init_object_mode();
    normalizeTransforms = (stdioItems, optionName, direction, options) => [
      ...stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type)),
      ...getTransforms(stdioItems, optionName, direction, options)
    ];
    getTransforms = (stdioItems, optionName, direction, { encoding }) => {
      const transforms = stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type));
      const newTransforms = Array.from({ length: transforms.length });
      for (const [index, stdioItem] of Object.entries(transforms)) {
        newTransforms[index] = normalizeTransform({
          stdioItem,
          index: Number(index),
          newTransforms,
          optionName,
          direction,
          encoding
        });
      }
      return sortTransforms(newTransforms, direction);
    };
    normalizeTransform = ({ stdioItem, stdioItem: { type }, index, newTransforms, optionName, direction, encoding }) => {
      if (type === "duplex") {
        return normalizeDuplex({ stdioItem, optionName });
      }
      if (type === "webTransform") {
        return normalizeTransformStream({
          stdioItem,
          index,
          newTransforms,
          direction
        });
      }
      return normalizeGenerator({
        stdioItem,
        index,
        newTransforms,
        direction,
        encoding
      });
    };
    normalizeDuplex = ({
      stdioItem,
      stdioItem: {
        value: {
          transform,
          transform: { writableObjectMode, readableObjectMode },
          objectMode = readableObjectMode
        }
      },
      optionName
    }) => {
      if (objectMode && !readableObjectMode) {
        throw new TypeError(`The \`${optionName}.objectMode\` option can only be \`true\` if \`new Duplex({objectMode: true})\` is used.`);
      }
      if (!objectMode && readableObjectMode) {
        throw new TypeError(`The \`${optionName}.objectMode\` option cannot be \`false\` if \`new Duplex({objectMode: true})\` is used.`);
      }
      return {
        ...stdioItem,
        value: { transform, writableObjectMode, readableObjectMode }
      };
    };
    normalizeTransformStream = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction }) => {
      const { transform, objectMode } = isPlainObject(value) ? value : { transform: value };
      const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
      return {
        ...stdioItem,
        value: { transform, writableObjectMode, readableObjectMode }
      };
    };
    normalizeGenerator = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction, encoding }) => {
      const {
        transform,
        final,
        binary: binaryOption = false,
        preserveNewlines = false,
        objectMode
      } = isPlainObject(value) ? value : { transform: value };
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
      return {
        ...stdioItem,
        value: {
          transform,
          final,
          binary,
          preserveNewlines,
          writableObjectMode,
          readableObjectMode
        }
      };
    };
    sortTransforms = (newTransforms, direction) => direction === "input" ? newTransforms.reverse() : newTransforms;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/direction.js
import process7 from "node:process";
var getStreamDirection, getStdioItemDirection, KNOWN_DIRECTIONS, anyDirection, alwaysInput, guessStreamDirection, getStandardStreamDirection, DEFAULT_DIRECTION;
var init_direction = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/direction.js"() {
    init_is_stream();
    init_type();
    getStreamDirection = (stdioItems, fdNumber, optionName) => {
      const directions = stdioItems.map((stdioItem) => getStdioItemDirection(stdioItem, fdNumber));
      if (directions.includes("input") && directions.includes("output")) {
        throw new TypeError(`The \`${optionName}\` option must not be an array of both readable and writable values.`);
      }
      return directions.find(Boolean) ?? DEFAULT_DIRECTION;
    };
    getStdioItemDirection = ({ type, value }, fdNumber) => KNOWN_DIRECTIONS[fdNumber] ?? guessStreamDirection[type](value);
    KNOWN_DIRECTIONS = ["input", "output", "output"];
    anyDirection = () => void 0;
    alwaysInput = () => "input";
    guessStreamDirection = {
      generator: anyDirection,
      asyncGenerator: anyDirection,
      fileUrl: anyDirection,
      filePath: anyDirection,
      iterable: alwaysInput,
      asyncIterable: alwaysInput,
      uint8Array: alwaysInput,
      webStream: (value) => isWritableStream2(value) ? "output" : "input",
      nodeStream(value) {
        if (!isReadableStream(value, { checkOpen: false })) {
          return "output";
        }
        return isWritableStream(value, { checkOpen: false }) ? void 0 : "input";
      },
      webTransform: anyDirection,
      duplex: anyDirection,
      native(value) {
        const standardStreamDirection = getStandardStreamDirection(value);
        if (standardStreamDirection !== void 0) {
          return standardStreamDirection;
        }
        if (isStream(value, { checkOpen: false })) {
          return guessStreamDirection.nodeStream(value);
        }
      }
    };
    getStandardStreamDirection = (value) => {
      if ([0, process7.stdin].includes(value)) {
        return "input";
      }
      if ([1, 2, process7.stdout, process7.stderr].includes(value)) {
        return "output";
      }
    };
    DEFAULT_DIRECTION = "output";
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/array.js
var normalizeIpcStdioArray;
var init_array2 = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/array.js"() {
    normalizeIpcStdioArray = (stdioArray, ipc) => ipc && !stdioArray.includes("ipc") ? [...stdioArray, "ipc"] : stdioArray;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/stdio-option.js
var normalizeStdioOption, getStdioArray, hasAlias, addDefaultValue2, normalizeStdioSync, isOutputPipeOnly;
var init_stdio_option = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/stdio-option.js"() {
    init_standard_stream();
    init_array2();
    init_values();
    normalizeStdioOption = ({ stdio, ipc, buffer, ...options }, verboseInfo, isSync) => {
      const stdioArray = getStdioArray(stdio, options).map((stdioOption, fdNumber) => addDefaultValue2(stdioOption, fdNumber));
      return isSync ? normalizeStdioSync(stdioArray, buffer, verboseInfo) : normalizeIpcStdioArray(stdioArray, ipc);
    };
    getStdioArray = (stdio, options) => {
      if (stdio === void 0) {
        return STANDARD_STREAMS_ALIASES.map((alias) => options[alias]);
      }
      if (hasAlias(options)) {
        throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${STANDARD_STREAMS_ALIASES.map((alias) => `\`${alias}\``).join(", ")}`);
      }
      if (typeof stdio === "string") {
        return [stdio, stdio, stdio];
      }
      if (!Array.isArray(stdio)) {
        throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
      }
      const length = Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length);
      return Array.from({ length }, (_, fdNumber) => stdio[fdNumber]);
    };
    hasAlias = (options) => STANDARD_STREAMS_ALIASES.some((alias) => options[alias] !== void 0);
    addDefaultValue2 = (stdioOption, fdNumber) => {
      if (Array.isArray(stdioOption)) {
        return stdioOption.map((item) => addDefaultValue2(item, fdNumber));
      }
      if (stdioOption === null || stdioOption === void 0) {
        return fdNumber >= STANDARD_STREAMS_ALIASES.length ? "ignore" : "pipe";
      }
      return stdioOption;
    };
    normalizeStdioSync = (stdioArray, buffer, verboseInfo) => stdioArray.map((stdioOption, fdNumber) => !buffer[fdNumber] && fdNumber !== 0 && !isFullVerbose(verboseInfo, fdNumber) && isOutputPipeOnly(stdioOption) ? "ignore" : stdioOption);
    isOutputPipeOnly = (stdioOption) => stdioOption === "pipe" || Array.isArray(stdioOption) && stdioOption.every((item) => item === "pipe");
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/native.js
import { readFileSync } from "node:fs";
import tty2 from "node:tty";
var handleNativeStream, handleNativeStreamSync, getTargetFd, getTargetFdNumber, handleNativeStreamAsync, getStandardStream;
var init_native = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/native.js"() {
    init_is_stream();
    init_standard_stream();
    init_uint_array();
    init_fd_options();
    handleNativeStream = ({ stdioItem, stdioItem: { type }, isStdioArray, fdNumber, direction, isSync }) => {
      if (!isStdioArray || type !== "native") {
        return stdioItem;
      }
      return isSync ? handleNativeStreamSync({ stdioItem, fdNumber, direction }) : handleNativeStreamAsync({ stdioItem, fdNumber });
    };
    handleNativeStreamSync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber, direction }) => {
      const targetFd = getTargetFd({
        value,
        optionName,
        fdNumber,
        direction
      });
      if (targetFd !== void 0) {
        return targetFd;
      }
      if (isStream(value, { checkOpen: false })) {
        throw new TypeError(`The \`${optionName}: Stream\` option cannot both be an array and include a stream with synchronous methods.`);
      }
      return stdioItem;
    };
    getTargetFd = ({ value, optionName, fdNumber, direction }) => {
      const targetFdNumber = getTargetFdNumber(value, fdNumber);
      if (targetFdNumber === void 0) {
        return;
      }
      if (direction === "output") {
        return { type: "fileNumber", value: targetFdNumber, optionName };
      }
      if (tty2.isatty(targetFdNumber)) {
        throw new TypeError(`The \`${optionName}: ${serializeOptionValue(value)}\` option is invalid: it cannot be a TTY with synchronous methods.`);
      }
      return { type: "uint8Array", value: bufferToUint8Array(readFileSync(targetFdNumber)), optionName };
    };
    getTargetFdNumber = (value, fdNumber) => {
      if (value === "inherit") {
        return fdNumber;
      }
      if (typeof value === "number") {
        return value;
      }
      const standardStreamIndex = STANDARD_STREAMS.indexOf(value);
      if (standardStreamIndex !== -1) {
        return standardStreamIndex;
      }
    };
    handleNativeStreamAsync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber }) => {
      if (value === "inherit") {
        return { type: "nodeStream", value: getStandardStream(fdNumber, value, optionName), optionName };
      }
      if (typeof value === "number") {
        return { type: "nodeStream", value: getStandardStream(value, value, optionName), optionName };
      }
      if (isStream(value, { checkOpen: false })) {
        return { type: "nodeStream", value, optionName };
      }
      return stdioItem;
    };
    getStandardStream = (fdNumber, value, optionName) => {
      const standardStream = STANDARD_STREAMS[fdNumber];
      if (standardStream === void 0) {
        throw new TypeError(`The \`${optionName}: ${value}\` option is invalid: no such standard stream.`);
      }
      return standardStream;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/input-option.js
var handleInputOptions, handleInputOption, getInputType, handleInputFileOption, getInputFileType;
var init_input_option = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/input-option.js"() {
    init_is_stream();
    init_uint_array();
    init_type();
    handleInputOptions = ({ input, inputFile }, fdNumber) => fdNumber === 0 ? [
      ...handleInputOption(input),
      ...handleInputFileOption(inputFile)
    ] : [];
    handleInputOption = (input) => input === void 0 ? [] : [{
      type: getInputType(input),
      value: input,
      optionName: "input"
    }];
    getInputType = (input) => {
      if (isReadableStream(input, { checkOpen: false })) {
        return "nodeStream";
      }
      if (typeof input === "string") {
        return "string";
      }
      if (isUint8Array(input)) {
        return "uint8Array";
      }
      throw new Error("The `input` option must be a string, a Uint8Array or a Node.js Readable stream.");
    };
    handleInputFileOption = (inputFile) => inputFile === void 0 ? [] : [{
      ...getInputFileType(inputFile),
      optionName: "inputFile"
    }];
    getInputFileType = (inputFile) => {
      if (isUrl(inputFile)) {
        return { type: "fileUrl", value: inputFile };
      }
      if (isFilePathString(inputFile)) {
        return { type: "filePath", value: { file: inputFile } };
      }
      throw new Error("The `inputFile` option must be a file path string or a file URL.");
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/duplicate.js
var filterDuplicates, getDuplicateStream, getOtherStdioItems, validateDuplicateStreamSync, getDuplicateStreamInstance, hasSameValue, validateDuplicateTransform, throwOnDuplicateStream;
var init_duplicate = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/duplicate.js"() {
    init_type();
    filterDuplicates = (stdioItems) => stdioItems.filter((stdioItemOne, indexOne) => stdioItems.every((stdioItemTwo, indexTwo) => stdioItemOne.value !== stdioItemTwo.value || indexOne >= indexTwo || stdioItemOne.type === "generator" || stdioItemOne.type === "asyncGenerator"));
    getDuplicateStream = ({ stdioItem: { type, value, optionName }, direction, fileDescriptors, isSync }) => {
      const otherStdioItems = getOtherStdioItems(fileDescriptors, type);
      if (otherStdioItems.length === 0) {
        return;
      }
      if (isSync) {
        validateDuplicateStreamSync({
          otherStdioItems,
          type,
          value,
          optionName,
          direction
        });
        return;
      }
      if (SPECIAL_DUPLICATE_TYPES.has(type)) {
        return getDuplicateStreamInstance({
          otherStdioItems,
          type,
          value,
          optionName,
          direction
        });
      }
      if (FORBID_DUPLICATE_TYPES.has(type)) {
        validateDuplicateTransform({
          otherStdioItems,
          type,
          value,
          optionName
        });
      }
    };
    getOtherStdioItems = (fileDescriptors, type) => fileDescriptors.flatMap(({ direction, stdioItems }) => stdioItems.filter((stdioItem) => stdioItem.type === type).map(((stdioItem) => ({ ...stdioItem, direction }))));
    validateDuplicateStreamSync = ({ otherStdioItems, type, value, optionName, direction }) => {
      if (SPECIAL_DUPLICATE_TYPES_SYNC.has(type)) {
        getDuplicateStreamInstance({
          otherStdioItems,
          type,
          value,
          optionName,
          direction
        });
      }
    };
    getDuplicateStreamInstance = ({ otherStdioItems, type, value, optionName, direction }) => {
      const duplicateStdioItems = otherStdioItems.filter((stdioItem) => hasSameValue(stdioItem, value));
      if (duplicateStdioItems.length === 0) {
        return;
      }
      const differentStdioItem = duplicateStdioItems.find((stdioItem) => stdioItem.direction !== direction);
      throwOnDuplicateStream(differentStdioItem, optionName, type);
      return direction === "output" ? duplicateStdioItems[0].stream : void 0;
    };
    hasSameValue = ({ type, value }, secondValue) => {
      if (type === "filePath") {
        return value.file === secondValue.file;
      }
      if (type === "fileUrl") {
        return value.href === secondValue.href;
      }
      return value === secondValue;
    };
    validateDuplicateTransform = ({ otherStdioItems, type, value, optionName }) => {
      const duplicateStdioItem = otherStdioItems.find(({ value: { transform } }) => transform === value.transform);
      throwOnDuplicateStream(duplicateStdioItem, optionName, type);
    };
    throwOnDuplicateStream = (stdioItem, optionName, type) => {
      if (stdioItem !== void 0) {
        throw new TypeError(`The \`${stdioItem.optionName}\` and \`${optionName}\` options must not target ${TYPE_TO_MESSAGE[type]} that is the same.`);
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle.js
var handleStdio, getFileDescriptor, initializeStdioItems, initializeStdioItem, validateStdioArray, INVALID_STDIO_ARRAY_OPTIONS, validateStreams, validateFileStdio, validateFileObjectMode, getFinalFileDescriptors, getFinalFileDescriptor, addStreamProperties, cleanupCustomStreams, forwardStdio;
var init_handle = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle.js"() {
    init_standard_stream();
    init_normalize();
    init_object_mode();
    init_type();
    init_direction();
    init_stdio_option();
    init_native();
    init_input_option();
    init_duplicate();
    handleStdio = (addProperties3, options, verboseInfo, isSync) => {
      const stdio = normalizeStdioOption(options, verboseInfo, isSync);
      const initialFileDescriptors = stdio.map((stdioOption, fdNumber) => getFileDescriptor({
        stdioOption,
        fdNumber,
        options,
        isSync
      }));
      const fileDescriptors = getFinalFileDescriptors({
        initialFileDescriptors,
        addProperties: addProperties3,
        options,
        isSync
      });
      options.stdio = fileDescriptors.map(({ stdioItems }) => forwardStdio(stdioItems));
      return fileDescriptors;
    };
    getFileDescriptor = ({ stdioOption, fdNumber, options, isSync }) => {
      const optionName = getStreamName(fdNumber);
      const { stdioItems: initialStdioItems, isStdioArray } = initializeStdioItems({
        stdioOption,
        fdNumber,
        options,
        optionName
      });
      const direction = getStreamDirection(initialStdioItems, fdNumber, optionName);
      const stdioItems = initialStdioItems.map((stdioItem) => handleNativeStream({
        stdioItem,
        isStdioArray,
        fdNumber,
        direction,
        isSync
      }));
      const normalizedStdioItems = normalizeTransforms(stdioItems, optionName, direction, options);
      const objectMode = getFdObjectMode(normalizedStdioItems, direction);
      validateFileObjectMode(normalizedStdioItems, objectMode);
      return { direction, objectMode, stdioItems: normalizedStdioItems };
    };
    initializeStdioItems = ({ stdioOption, fdNumber, options, optionName }) => {
      const values = Array.isArray(stdioOption) ? stdioOption : [stdioOption];
      const initialStdioItems = [
        ...values.map((value) => initializeStdioItem(value, optionName)),
        ...handleInputOptions(options, fdNumber)
      ];
      const stdioItems = filterDuplicates(initialStdioItems);
      const isStdioArray = stdioItems.length > 1;
      validateStdioArray(stdioItems, isStdioArray, optionName);
      validateStreams(stdioItems);
      return { stdioItems, isStdioArray };
    };
    initializeStdioItem = (value, optionName) => ({
      type: getStdioItemType(value, optionName),
      value,
      optionName
    });
    validateStdioArray = (stdioItems, isStdioArray, optionName) => {
      if (stdioItems.length === 0) {
        throw new TypeError(`The \`${optionName}\` option must not be an empty array.`);
      }
      if (!isStdioArray) {
        return;
      }
      for (const { value, optionName: optionName2 } of stdioItems) {
        if (INVALID_STDIO_ARRAY_OPTIONS.has(value)) {
          throw new Error(`The \`${optionName2}\` option must not include \`${value}\`.`);
        }
      }
    };
    INVALID_STDIO_ARRAY_OPTIONS = /* @__PURE__ */ new Set(["ignore", "ipc"]);
    validateStreams = (stdioItems) => {
      for (const stdioItem of stdioItems) {
        validateFileStdio(stdioItem);
      }
    };
    validateFileStdio = ({ type, value, optionName }) => {
      if (isRegularUrl(value)) {
        throw new TypeError(`The \`${optionName}: URL\` option must use the \`file:\` scheme.
For example, you can use the \`pathToFileURL()\` method of the \`url\` core module.`);
      }
      if (isUnknownStdioString(type, value)) {
        throw new TypeError(`The \`${optionName}: { file: '...' }\` option must be used instead of \`${optionName}: '...'\`.`);
      }
    };
    validateFileObjectMode = (stdioItems, objectMode) => {
      if (!objectMode) {
        return;
      }
      const fileStdioItem = stdioItems.find(({ type }) => FILE_TYPES.has(type));
      if (fileStdioItem !== void 0) {
        throw new TypeError(`The \`${fileStdioItem.optionName}\` option cannot use both files and transforms in objectMode.`);
      }
    };
    getFinalFileDescriptors = ({ initialFileDescriptors, addProperties: addProperties3, options, isSync }) => {
      const fileDescriptors = [];
      try {
        for (const fileDescriptor of initialFileDescriptors) {
          fileDescriptors.push(getFinalFileDescriptor({
            fileDescriptor,
            fileDescriptors,
            addProperties: addProperties3,
            options,
            isSync
          }));
        }
        return fileDescriptors;
      } catch (error) {
        cleanupCustomStreams(fileDescriptors);
        throw error;
      }
    };
    getFinalFileDescriptor = ({
      fileDescriptor: { direction, objectMode, stdioItems },
      fileDescriptors,
      addProperties: addProperties3,
      options,
      isSync
    }) => {
      const finalStdioItems = stdioItems.map((stdioItem) => addStreamProperties({
        stdioItem,
        addProperties: addProperties3,
        direction,
        options,
        fileDescriptors,
        isSync
      }));
      return { direction, objectMode, stdioItems: finalStdioItems };
    };
    addStreamProperties = ({ stdioItem, addProperties: addProperties3, direction, options, fileDescriptors, isSync }) => {
      const duplicateStream = getDuplicateStream({
        stdioItem,
        direction,
        fileDescriptors,
        isSync
      });
      if (duplicateStream !== void 0) {
        return { ...stdioItem, stream: duplicateStream };
      }
      return {
        ...stdioItem,
        ...addProperties3[direction][stdioItem.type](stdioItem, options)
      };
    };
    cleanupCustomStreams = (fileDescriptors) => {
      for (const { stdioItems } of fileDescriptors) {
        for (const { stream } of stdioItems) {
          if (stream !== void 0 && !isStandardStream(stream)) {
            stream.destroy();
          }
        }
      }
    };
    forwardStdio = (stdioItems) => {
      if (stdioItems.length > 1) {
        return stdioItems.some(({ value: value2 }) => value2 === "overlapped") ? "overlapped" : "pipe";
      }
      const [{ type, value }] = stdioItems;
      return type === "native" ? value : "pipe";
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle-sync.js
import { readFileSync as readFileSync2 } from "node:fs";
var handleStdioSync, forbiddenIfSync, forbiddenNativeIfSync, throwInvalidSyncValue, addProperties, addPropertiesSync;
var init_handle_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle-sync.js"() {
    init_uint_array();
    init_handle();
    init_type();
    handleStdioSync = (options, verboseInfo) => handleStdio(addPropertiesSync, options, verboseInfo, true);
    forbiddenIfSync = ({ type, optionName }) => {
      throwInvalidSyncValue(optionName, TYPE_TO_MESSAGE[type]);
    };
    forbiddenNativeIfSync = ({ optionName, value }) => {
      if (value === "ipc" || value === "overlapped") {
        throwInvalidSyncValue(optionName, `"${value}"`);
      }
      return {};
    };
    throwInvalidSyncValue = (optionName, value) => {
      throw new TypeError(`The \`${optionName}\` option cannot be ${value} with synchronous methods.`);
    };
    addProperties = {
      generator() {
      },
      asyncGenerator: forbiddenIfSync,
      webStream: forbiddenIfSync,
      nodeStream: forbiddenIfSync,
      webTransform: forbiddenIfSync,
      duplex: forbiddenIfSync,
      asyncIterable: forbiddenIfSync,
      native: forbiddenNativeIfSync
    };
    addPropertiesSync = {
      input: {
        ...addProperties,
        fileUrl: ({ value }) => ({ contents: [bufferToUint8Array(readFileSync2(value))] }),
        filePath: ({ value: { file } }) => ({ contents: [bufferToUint8Array(readFileSync2(file))] }),
        fileNumber: forbiddenIfSync,
        iterable: ({ value }) => ({ contents: [...value] }),
        string: ({ value }) => ({ contents: [value] }),
        uint8Array: ({ value }) => ({ contents: [value] })
      },
      output: {
        ...addProperties,
        fileUrl: ({ value }) => ({ path: value }),
        filePath: ({ value: { file, append } }) => ({ path: file, append }),
        fileNumber: ({ value }) => ({ path: value }),
        iterable: forbiddenIfSync,
        string: forbiddenIfSync,
        uint8Array: forbiddenIfSync
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/strip-newline.js
var stripNewline, getStripFinalNewline;
var init_strip_newline = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/strip-newline.js"() {
    init_strip_final_newline();
    stripNewline = (value, { stripFinalNewline: stripFinalNewline2 }, fdNumber) => getStripFinalNewline(stripFinalNewline2, fdNumber) && value !== void 0 && !Array.isArray(value) ? stripFinalNewline(value) : value;
    getStripFinalNewline = (stripFinalNewline2, fdNumber) => fdNumber === "all" ? stripFinalNewline2[1] || stripFinalNewline2[2] : stripFinalNewline2[fdNumber];
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/split.js
var getSplitLinesGenerator, splitLinesSync, splitLinesItemSync, initializeSplitLines, splitGenerator, getNewlineLength, linesFinal, getAppendNewlineGenerator, appendNewlineGenerator, concatString, linesStringInfo, concatUint8Array, linesUint8ArrayInfo;
var init_split = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/split.js"() {
    getSplitLinesGenerator = (binary, preserveNewlines, skipped, state) => binary || skipped ? void 0 : initializeSplitLines(preserveNewlines, state);
    splitLinesSync = (chunk, preserveNewlines, objectMode) => objectMode ? chunk.flatMap((item) => splitLinesItemSync(item, preserveNewlines)) : splitLinesItemSync(chunk, preserveNewlines);
    splitLinesItemSync = (chunk, preserveNewlines) => {
      const { transform, final } = initializeSplitLines(preserveNewlines, {});
      return [...transform(chunk), ...final()];
    };
    initializeSplitLines = (preserveNewlines, state) => {
      state.previousChunks = "";
      return {
        transform: splitGenerator.bind(void 0, state, preserveNewlines),
        final: linesFinal.bind(void 0, state)
      };
    };
    splitGenerator = function* (state, preserveNewlines, chunk) {
      if (typeof chunk !== "string") {
        yield chunk;
        return;
      }
      let { previousChunks } = state;
      let start = -1;
      for (let end = 0; end < chunk.length; end += 1) {
        if (chunk[end] === "\n") {
          const newlineLength = getNewlineLength(chunk, end, preserveNewlines, state);
          let line = chunk.slice(start + 1, end + 1 - newlineLength);
          if (previousChunks.length > 0) {
            line = concatString(previousChunks, line);
            previousChunks = "";
          }
          yield line;
          start = end;
        }
      }
      if (start !== chunk.length - 1) {
        previousChunks = concatString(previousChunks, chunk.slice(start + 1));
      }
      state.previousChunks = previousChunks;
    };
    getNewlineLength = (chunk, end, preserveNewlines, state) => {
      if (preserveNewlines) {
        return 0;
      }
      state.isWindowsNewline = end !== 0 && chunk[end - 1] === "\r";
      return state.isWindowsNewline ? 2 : 1;
    };
    linesFinal = function* ({ previousChunks }) {
      if (previousChunks.length > 0) {
        yield previousChunks;
      }
    };
    getAppendNewlineGenerator = ({ binary, preserveNewlines, readableObjectMode, state }) => binary || preserveNewlines || readableObjectMode ? void 0 : { transform: appendNewlineGenerator.bind(void 0, state) };
    appendNewlineGenerator = function* ({ isWindowsNewline = false }, chunk) {
      const { unixNewline, windowsNewline, LF: LF2, concatBytes } = typeof chunk === "string" ? linesStringInfo : linesUint8ArrayInfo;
      if (chunk.at(-1) === LF2) {
        yield chunk;
        return;
      }
      const newline = isWindowsNewline ? windowsNewline : unixNewline;
      yield concatBytes(chunk, newline);
    };
    concatString = (firstChunk, secondChunk) => `${firstChunk}${secondChunk}`;
    linesStringInfo = {
      windowsNewline: "\r\n",
      unixNewline: "\n",
      LF: "\n",
      concatBytes: concatString
    };
    concatUint8Array = (firstChunk, secondChunk) => {
      const chunk = new Uint8Array(firstChunk.length + secondChunk.length);
      chunk.set(firstChunk, 0);
      chunk.set(secondChunk, firstChunk.length);
      return chunk;
    };
    linesUint8ArrayInfo = {
      windowsNewline: new Uint8Array([13, 10]),
      unixNewline: new Uint8Array([10]),
      LF: 10,
      concatBytes: concatUint8Array
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/validate.js
import { Buffer } from "node:buffer";
var getValidateTransformInput, validateStringTransformInput, getValidateTransformReturn, validateObjectTransformReturn, validateStringTransformReturn, validateEmptyReturn;
var init_validate = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/validate.js"() {
    init_uint_array();
    getValidateTransformInput = (writableObjectMode, optionName) => writableObjectMode ? void 0 : validateStringTransformInput.bind(void 0, optionName);
    validateStringTransformInput = function* (optionName, chunk) {
      if (typeof chunk !== "string" && !isUint8Array(chunk) && !Buffer.isBuffer(chunk)) {
        throw new TypeError(`The \`${optionName}\` option's transform must use "objectMode: true" to receive as input: ${typeof chunk}.`);
      }
      yield chunk;
    };
    getValidateTransformReturn = (readableObjectMode, optionName) => readableObjectMode ? validateObjectTransformReturn.bind(void 0, optionName) : validateStringTransformReturn.bind(void 0, optionName);
    validateObjectTransformReturn = function* (optionName, chunk) {
      validateEmptyReturn(optionName, chunk);
      yield chunk;
    };
    validateStringTransformReturn = function* (optionName, chunk) {
      validateEmptyReturn(optionName, chunk);
      if (typeof chunk !== "string" && !isUint8Array(chunk)) {
        throw new TypeError(`The \`${optionName}\` option's function must yield a string or an Uint8Array, not ${typeof chunk}.`);
      }
      yield chunk;
    };
    validateEmptyReturn = (optionName, chunk) => {
      if (chunk === null || chunk === void 0) {
        throw new TypeError(`The \`${optionName}\` option's function must not call \`yield ${chunk}\`.
Instead, \`yield\` should either be called with a value, or not be called at all. For example:
  if (condition) { yield value; }`);
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/encoding-transform.js
import { Buffer as Buffer2 } from "node:buffer";
import { StringDecoder as StringDecoder2 } from "node:string_decoder";
var getEncodingTransformGenerator, encodingUint8ArrayGenerator, encodingStringGenerator, encodingStringFinal;
var init_encoding_transform = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/encoding-transform.js"() {
    init_uint_array();
    getEncodingTransformGenerator = (binary, encoding, skipped) => {
      if (skipped) {
        return;
      }
      if (binary) {
        return { transform: encodingUint8ArrayGenerator.bind(void 0, new TextEncoder()) };
      }
      const stringDecoder = new StringDecoder2(encoding);
      return {
        transform: encodingStringGenerator.bind(void 0, stringDecoder),
        final: encodingStringFinal.bind(void 0, stringDecoder)
      };
    };
    encodingUint8ArrayGenerator = function* (textEncoder3, chunk) {
      if (Buffer2.isBuffer(chunk)) {
        yield bufferToUint8Array(chunk);
      } else if (typeof chunk === "string") {
        yield textEncoder3.encode(chunk);
      } else {
        yield chunk;
      }
    };
    encodingStringGenerator = function* (stringDecoder, chunk) {
      yield isUint8Array(chunk) ? stringDecoder.write(chunk) : chunk;
    };
    encodingStringFinal = function* (stringDecoder) {
      const lastChunk = stringDecoder.end();
      if (lastChunk !== "") {
        yield lastChunk;
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/run-async.js
import { callbackify } from "node:util";
var pushChunks, transformChunk, finalChunks, generatorFinalChunks, destroyTransform, identityGenerator;
var init_run_async = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/run-async.js"() {
    pushChunks = callbackify(async (getChunks, state, getChunksArguments, transformStream) => {
      state.currentIterable = getChunks(...getChunksArguments);
      try {
        for await (const chunk of state.currentIterable) {
          transformStream.push(chunk);
        }
      } finally {
        delete state.currentIterable;
      }
    });
    transformChunk = async function* (chunk, generators, index) {
      if (index === generators.length) {
        yield chunk;
        return;
      }
      const { transform = identityGenerator } = generators[index];
      for await (const transformedChunk of transform(chunk)) {
        yield* transformChunk(transformedChunk, generators, index + 1);
      }
    };
    finalChunks = async function* (generators) {
      for (const [index, { final }] of Object.entries(generators)) {
        yield* generatorFinalChunks(final, Number(index), generators);
      }
    };
    generatorFinalChunks = async function* (final, index, generators) {
      if (final === void 0) {
        return;
      }
      for await (const finalChunk of final()) {
        yield* transformChunk(finalChunk, generators, index + 1);
      }
    };
    destroyTransform = callbackify(async ({ currentIterable }, error) => {
      if (currentIterable !== void 0) {
        await (error ? currentIterable.throw(error) : currentIterable.return());
        return;
      }
      if (error) {
        throw error;
      }
    });
    identityGenerator = function* (chunk) {
      yield chunk;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/run-sync.js
var pushChunksSync, runTransformSync, transformChunkSync, finalChunksSync, generatorFinalChunksSync, identityGenerator2;
var init_run_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/run-sync.js"() {
    pushChunksSync = (getChunksSync, getChunksArguments, transformStream, done) => {
      try {
        for (const chunk of getChunksSync(...getChunksArguments)) {
          transformStream.push(chunk);
        }
        done();
      } catch (error) {
        done(error);
      }
    };
    runTransformSync = (generators, chunks) => [
      ...chunks.flatMap((chunk) => [...transformChunkSync(chunk, generators, 0)]),
      ...finalChunksSync(generators)
    ];
    transformChunkSync = function* (chunk, generators, index) {
      if (index === generators.length) {
        yield chunk;
        return;
      }
      const { transform = identityGenerator2 } = generators[index];
      for (const transformedChunk of transform(chunk)) {
        yield* transformChunkSync(transformedChunk, generators, index + 1);
      }
    };
    finalChunksSync = function* (generators) {
      for (const [index, { final }] of Object.entries(generators)) {
        yield* generatorFinalChunksSync(final, Number(index), generators);
      }
    };
    generatorFinalChunksSync = function* (final, index, generators) {
      if (final === void 0) {
        return;
      }
      for (const finalChunk of final()) {
        yield* transformChunkSync(finalChunk, generators, index + 1);
      }
    };
    identityGenerator2 = function* (chunk) {
      yield chunk;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/generator.js
import { Transform, getDefaultHighWaterMark } from "node:stream";
var generatorToStream, runGeneratorsSync, addInternalGenerators;
var init_generator = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/transform/generator.js"() {
    init_type();
    init_split();
    init_validate();
    init_encoding_transform();
    init_run_async();
    init_run_sync();
    generatorToStream = ({
      value,
      value: { transform, final, writableObjectMode, readableObjectMode },
      optionName
    }, { encoding }) => {
      const state = {};
      const generators = addInternalGenerators(value, encoding, optionName);
      const transformAsync = isAsyncGenerator(transform);
      const finalAsync = isAsyncGenerator(final);
      const transformMethod = transformAsync ? pushChunks.bind(void 0, transformChunk, state) : pushChunksSync.bind(void 0, transformChunkSync);
      const finalMethod = transformAsync || finalAsync ? pushChunks.bind(void 0, finalChunks, state) : pushChunksSync.bind(void 0, finalChunksSync);
      const destroyMethod = transformAsync || finalAsync ? destroyTransform.bind(void 0, state) : void 0;
      const stream = new Transform({
        writableObjectMode,
        writableHighWaterMark: getDefaultHighWaterMark(writableObjectMode),
        readableObjectMode,
        readableHighWaterMark: getDefaultHighWaterMark(readableObjectMode),
        transform(chunk, encoding2, done) {
          transformMethod([chunk, generators, 0], this, done);
        },
        flush(done) {
          finalMethod([generators], this, done);
        },
        destroy: destroyMethod
      });
      return { stream };
    };
    runGeneratorsSync = (chunks, stdioItems, encoding, isInput) => {
      const generators = stdioItems.filter(({ type }) => type === "generator");
      const reversedGenerators = isInput ? generators.reverse() : generators;
      for (const { value, optionName } of reversedGenerators) {
        const generators2 = addInternalGenerators(value, encoding, optionName);
        chunks = runTransformSync(generators2, chunks);
      }
      return chunks;
    };
    addInternalGenerators = ({ transform, final, binary, writableObjectMode, readableObjectMode, preserveNewlines }, encoding, optionName) => {
      const state = {};
      return [
        { transform: getValidateTransformInput(writableObjectMode, optionName) },
        getEncodingTransformGenerator(binary, encoding, writableObjectMode),
        getSplitLinesGenerator(binary, preserveNewlines, writableObjectMode, state),
        { transform, final },
        { transform: getValidateTransformReturn(readableObjectMode, optionName) },
        getAppendNewlineGenerator({
          binary,
          preserveNewlines,
          readableObjectMode,
          state
        })
      ].filter(Boolean);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/input-sync.js
var addInputOptionsSync, getInputFdNumbers, addInputOptionSync, applySingleInputGeneratorsSync, validateSerializable;
var init_input_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/input-sync.js"() {
    init_generator();
    init_uint_array();
    init_type();
    addInputOptionsSync = (fileDescriptors, options) => {
      for (const fdNumber of getInputFdNumbers(fileDescriptors)) {
        addInputOptionSync(fileDescriptors, fdNumber, options);
      }
    };
    getInputFdNumbers = (fileDescriptors) => new Set(Object.entries(fileDescriptors).filter(([, { direction }]) => direction === "input").map(([fdNumber]) => Number(fdNumber)));
    addInputOptionSync = (fileDescriptors, fdNumber, options) => {
      const { stdioItems } = fileDescriptors[fdNumber];
      const allStdioItems = stdioItems.filter(({ contents }) => contents !== void 0);
      if (allStdioItems.length === 0) {
        return;
      }
      if (fdNumber !== 0) {
        const [{ type, optionName }] = allStdioItems;
        throw new TypeError(`Only the \`stdin\` option, not \`${optionName}\`, can be ${TYPE_TO_MESSAGE[type]} with synchronous methods.`);
      }
      const allContents = allStdioItems.map(({ contents }) => contents);
      const transformedContents = allContents.map((contents) => applySingleInputGeneratorsSync(contents, stdioItems));
      options.input = joinToUint8Array(transformedContents);
    };
    applySingleInputGeneratorsSync = (contents, stdioItems) => {
      const newContents = runGeneratorsSync(contents, stdioItems, "utf8", true);
      validateSerializable(newContents);
      return joinToUint8Array(newContents);
    };
    validateSerializable = (newContents) => {
      const invalidItem = newContents.find((item) => typeof item !== "string" && !isUint8Array(item));
      if (invalidItem !== void 0) {
        throw new TypeError(`The \`stdin\` option is invalid: when passing objects as input, a transform must be used to serialize them to strings or Uint8Arrays: ${invalidItem}.`);
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/output.js
var shouldLogOutput, fdUsesVerbose, PIPED_STDIO_VALUES, logLines, logLinesSync, isPipingStream, logLine;
var init_output = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/output.js"() {
    init_encoding_option();
    init_type();
    init_log();
    init_values();
    shouldLogOutput = ({ stdioItems, encoding, verboseInfo, fdNumber }) => fdNumber !== "all" && isFullVerbose(verboseInfo, fdNumber) && !BINARY_ENCODINGS.has(encoding) && fdUsesVerbose(fdNumber) && (stdioItems.some(({ type, value }) => type === "native" && PIPED_STDIO_VALUES.has(value)) || stdioItems.every(({ type }) => TRANSFORM_TYPES.has(type)));
    fdUsesVerbose = (fdNumber) => fdNumber === 1 || fdNumber === 2;
    PIPED_STDIO_VALUES = /* @__PURE__ */ new Set(["pipe", "overlapped"]);
    logLines = async (linesIterable, stream, fdNumber, verboseInfo) => {
      for await (const line of linesIterable) {
        if (!isPipingStream(stream)) {
          logLine(line, fdNumber, verboseInfo);
        }
      }
    };
    logLinesSync = (linesArray, fdNumber, verboseInfo) => {
      for (const line of linesArray) {
        logLine(line, fdNumber, verboseInfo);
      }
    };
    isPipingStream = (stream) => stream._readableState.pipes.length > 0;
    logLine = (line, fdNumber, verboseInfo) => {
      const verboseMessage = serializeVerboseMessage(line);
      verboseLog({
        type: "output",
        verboseMessage,
        fdNumber,
        verboseInfo
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/output-sync.js
import { writeFileSync, appendFileSync } from "node:fs";
var transformOutputSync, transformOutputResultSync, runOutputGeneratorsSync, serializeChunks, logOutputSync, writeToFiles;
var init_output_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/output-sync.js"() {
    init_output();
    init_generator();
    init_split();
    init_uint_array();
    init_type();
    init_max_buffer();
    transformOutputSync = ({ fileDescriptors, syncResult: { output }, options, isMaxBuffer, verboseInfo }) => {
      if (output === null) {
        return { output: Array.from({ length: 3 }) };
      }
      const state = {};
      const outputFiles = /* @__PURE__ */ new Set([]);
      const transformedOutput = output.map((result, fdNumber) => transformOutputResultSync({
        result,
        fileDescriptors,
        fdNumber,
        state,
        outputFiles,
        isMaxBuffer,
        verboseInfo
      }, options));
      return { output: transformedOutput, ...state };
    };
    transformOutputResultSync = ({ result, fileDescriptors, fdNumber, state, outputFiles, isMaxBuffer, verboseInfo }, { buffer, encoding, lines, stripFinalNewline: stripFinalNewline2, maxBuffer }) => {
      if (result === null) {
        return;
      }
      const truncatedResult = truncateMaxBufferSync(result, isMaxBuffer, maxBuffer);
      const uint8ArrayResult = bufferToUint8Array(truncatedResult);
      const { stdioItems, objectMode } = fileDescriptors[fdNumber];
      const chunks = runOutputGeneratorsSync([uint8ArrayResult], stdioItems, encoding, state);
      const { serializedResult, finalResult = serializedResult } = serializeChunks({
        chunks,
        objectMode,
        encoding,
        lines,
        stripFinalNewline: stripFinalNewline2,
        fdNumber
      });
      logOutputSync({
        serializedResult,
        fdNumber,
        state,
        verboseInfo,
        encoding,
        stdioItems,
        objectMode
      });
      const returnedResult = buffer[fdNumber] ? finalResult : void 0;
      try {
        if (state.error === void 0) {
          writeToFiles(serializedResult, stdioItems, outputFiles);
        }
        return returnedResult;
      } catch (error) {
        state.error = error;
        return returnedResult;
      }
    };
    runOutputGeneratorsSync = (chunks, stdioItems, encoding, state) => {
      try {
        return runGeneratorsSync(chunks, stdioItems, encoding, false);
      } catch (error) {
        state.error = error;
        return chunks;
      }
    };
    serializeChunks = ({ chunks, objectMode, encoding, lines, stripFinalNewline: stripFinalNewline2, fdNumber }) => {
      if (objectMode) {
        return { serializedResult: chunks };
      }
      if (encoding === "buffer") {
        return { serializedResult: joinToUint8Array(chunks) };
      }
      const serializedResult = joinToString(chunks, encoding);
      if (lines[fdNumber]) {
        return { serializedResult, finalResult: splitLinesSync(serializedResult, !stripFinalNewline2[fdNumber], objectMode) };
      }
      return { serializedResult };
    };
    logOutputSync = ({ serializedResult, fdNumber, state, verboseInfo, encoding, stdioItems, objectMode }) => {
      if (!shouldLogOutput({
        stdioItems,
        encoding,
        verboseInfo,
        fdNumber
      })) {
        return;
      }
      const linesArray = splitLinesSync(serializedResult, false, objectMode);
      try {
        logLinesSync(linesArray, fdNumber, verboseInfo);
      } catch (error) {
        state.error ??= error;
      }
    };
    writeToFiles = (serializedResult, stdioItems, outputFiles) => {
      for (const { path: path7, append } of stdioItems.filter(({ type }) => FILE_TYPES.has(type))) {
        const pathString = typeof path7 === "string" ? path7 : path7.toString();
        if (append || outputFiles.has(pathString)) {
          appendFileSync(path7, serializedResult);
        } else {
          outputFiles.add(pathString);
          writeFileSync(path7, serializedResult);
        }
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/all-sync.js
var getAllSync;
var init_all_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/all-sync.js"() {
    init_uint_array();
    init_strip_newline();
    getAllSync = ([, stdout, stderr], options) => {
      if (!options.all) {
        return;
      }
      if (stdout === void 0) {
        return stderr;
      }
      if (stderr === void 0) {
        return stdout;
      }
      if (Array.isArray(stdout)) {
        return Array.isArray(stderr) ? [...stdout, ...stderr] : [...stdout, stripNewline(stderr, options, "all")];
      }
      if (Array.isArray(stderr)) {
        return [stripNewline(stdout, options, "all"), ...stderr];
      }
      if (isUint8Array(stdout) && isUint8Array(stderr)) {
        return concatUint8Arrays([stdout, stderr]);
      }
      return `${stdout}${stderr}`;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/exit-async.js
import { once as once4 } from "node:events";
var waitForExit, waitForExitOrError, waitForSubprocessExit, waitForSuccessfulExit, isSubprocessErrorExit, isFailedExit;
var init_exit_async = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/exit-async.js"() {
    init_final_error();
    waitForExit = async (subprocess, context) => {
      const [exitCode, signal] = await waitForExitOrError(subprocess);
      context.isForcefullyTerminated ??= false;
      return [exitCode, signal];
    };
    waitForExitOrError = async (subprocess) => {
      const [spawnPayload, exitPayload] = await Promise.allSettled([
        once4(subprocess, "spawn"),
        once4(subprocess, "exit")
      ]);
      if (spawnPayload.status === "rejected") {
        return [];
      }
      return exitPayload.status === "rejected" ? waitForSubprocessExit(subprocess) : exitPayload.value;
    };
    waitForSubprocessExit = async (subprocess) => {
      try {
        return await once4(subprocess, "exit");
      } catch {
        return waitForSubprocessExit(subprocess);
      }
    };
    waitForSuccessfulExit = async (exitPromise) => {
      const [exitCode, signal] = await exitPromise;
      if (!isSubprocessErrorExit(exitCode, signal) && isFailedExit(exitCode, signal)) {
        throw new DiscardedError();
      }
      return [exitCode, signal];
    };
    isSubprocessErrorExit = (exitCode, signal) => exitCode === void 0 && signal === void 0;
    isFailedExit = (exitCode, signal) => exitCode !== 0 || signal !== null;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/exit-sync.js
var getExitResultSync, getResultError;
var init_exit_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/exit-sync.js"() {
    init_final_error();
    init_max_buffer();
    init_exit_async();
    getExitResultSync = ({ error, status: exitCode, signal, output }, { maxBuffer }) => {
      const resultError = getResultError(error, exitCode, signal);
      const timedOut = resultError?.code === "ETIMEDOUT";
      const isMaxBuffer = isMaxBufferSync(resultError, output, maxBuffer);
      return {
        resultError,
        exitCode,
        signal,
        timedOut,
        isMaxBuffer
      };
    };
    getResultError = (error, exitCode, signal) => {
      if (error !== void 0) {
        return error;
      }
      return isFailedExit(exitCode, signal) ? new DiscardedError() : void 0;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/main-sync.js
import { spawnSync } from "node:child_process";
var execaCoreSync, handleSyncArguments, normalizeSyncOptions, validateSyncOptions, throwInvalidSyncOption, spawnSubprocessSync, runSubprocessSync, normalizeSpawnSyncOptions, getSyncResult;
var init_main_sync = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/main-sync.js"() {
    init_command();
    init_options();
    init_shell();
    init_result();
    init_reject();
    init_handle_sync();
    init_strip_newline();
    init_input_sync();
    init_output_sync();
    init_max_buffer();
    init_all_sync();
    init_exit_sync();
    execaCoreSync = (rawFile, rawArguments, rawOptions) => {
      const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleSyncArguments(rawFile, rawArguments, rawOptions);
      const result = spawnSubprocessSync({
        file,
        commandArguments,
        options,
        command,
        escapedCommand,
        verboseInfo,
        fileDescriptors,
        startTime
      });
      return handleResult(result, verboseInfo, options);
    };
    handleSyncArguments = (rawFile, rawArguments, rawOptions) => {
      const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
      const syncOptions = normalizeSyncOptions(rawOptions);
      const { file, commandArguments, options } = normalizeOptions(rawFile, rawArguments, syncOptions);
      validateSyncOptions(options);
      const fileDescriptors = handleStdioSync(options, verboseInfo);
      return {
        file,
        commandArguments,
        command,
        escapedCommand,
        startTime,
        verboseInfo,
        options,
        fileDescriptors
      };
    };
    normalizeSyncOptions = (options) => options.node && !options.ipc ? { ...options, ipc: false } : options;
    validateSyncOptions = ({ ipc, ipcInput, detached, cancelSignal }) => {
      if (ipcInput) {
        throwInvalidSyncOption("ipcInput");
      }
      if (ipc) {
        throwInvalidSyncOption("ipc: true");
      }
      if (detached) {
        throwInvalidSyncOption("detached: true");
      }
      if (cancelSignal) {
        throwInvalidSyncOption("cancelSignal");
      }
    };
    throwInvalidSyncOption = (value) => {
      throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`);
    };
    spawnSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, verboseInfo, fileDescriptors, startTime }) => {
      const syncResult = runSubprocessSync({
        file,
        commandArguments,
        options,
        command,
        escapedCommand,
        fileDescriptors,
        startTime
      });
      if (syncResult.failed) {
        return syncResult;
      }
      const { resultError, exitCode, signal, timedOut, isMaxBuffer } = getExitResultSync(syncResult, options);
      const { output, error = resultError } = transformOutputSync({
        fileDescriptors,
        syncResult,
        options,
        isMaxBuffer,
        verboseInfo
      });
      const stdio = output.map((stdioOutput, fdNumber) => stripNewline(stdioOutput, options, fdNumber));
      const all = stripNewline(getAllSync(output, options), options, "all");
      return getSyncResult({
        error,
        exitCode,
        signal,
        timedOut,
        isMaxBuffer,
        stdio,
        all,
        options,
        command,
        escapedCommand,
        startTime
      });
    };
    runSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, fileDescriptors, startTime }) => {
      try {
        addInputOptionsSync(fileDescriptors, options);
        const normalizedOptions = normalizeSpawnSyncOptions(options);
        return spawnSync(...concatenateShell(file, commandArguments, normalizedOptions));
      } catch (error) {
        return makeEarlyError({
          error,
          command,
          escapedCommand,
          fileDescriptors,
          options,
          startTime,
          isSync: true
        });
      }
    };
    normalizeSpawnSyncOptions = ({ encoding, maxBuffer, ...options }) => ({ ...options, encoding: "buffer", maxBuffer: getMaxBufferSync(maxBuffer) });
    getSyncResult = ({ error, exitCode, signal, timedOut, isMaxBuffer, stdio, all, options, command, escapedCommand, startTime }) => error === void 0 ? makeSuccessResult({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput: [],
      options,
      startTime
    }) : makeError({
      error,
      command,
      escapedCommand,
      timedOut,
      isCanceled: false,
      isGracefullyCanceled: false,
      isMaxBuffer,
      isForcefullyTerminated: false,
      exitCode,
      signal,
      stdio,
      all,
      ipcOutput: [],
      options,
      startTime,
      isSync: true
    });
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/get-one.js
import { once as once5, on as on2 } from "node:events";
var getOneMessage, getOneMessageAsync, getMessage, throwOnDisconnect2, throwOnStrictError;
var init_get_one = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/get-one.js"() {
    init_validation();
    init_forward();
    init_reference();
    getOneMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true, filter } = {}) => {
      validateIpcMethod({
        methodName: "getOneMessage",
        isSubprocess,
        ipc,
        isConnected: isConnected(anyProcess)
      });
      return getOneMessageAsync({
        anyProcess,
        channel,
        isSubprocess,
        filter,
        reference
      });
    };
    getOneMessageAsync = async ({ anyProcess, channel, isSubprocess, filter, reference }) => {
      addReference(channel, reference);
      const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
      const controller = new AbortController();
      try {
        return await Promise.race([
          getMessage(ipcEmitter, filter, controller),
          throwOnDisconnect2(ipcEmitter, isSubprocess, controller),
          throwOnStrictError(ipcEmitter, isSubprocess, controller)
        ]);
      } catch (error) {
        disconnect(anyProcess);
        throw error;
      } finally {
        controller.abort();
        removeReference(channel, reference);
      }
    };
    getMessage = async (ipcEmitter, filter, { signal }) => {
      if (filter === void 0) {
        const [message] = await once5(ipcEmitter, "message", { signal });
        return message;
      }
      for await (const [message] of on2(ipcEmitter, "message", { signal })) {
        if (filter(message)) {
          return message;
        }
      }
    };
    throwOnDisconnect2 = async (ipcEmitter, isSubprocess, { signal }) => {
      await once5(ipcEmitter, "disconnect", { signal });
      throwOnEarlyDisconnect(isSubprocess);
    };
    throwOnStrictError = async (ipcEmitter, isSubprocess, { signal }) => {
      const [error] = await once5(ipcEmitter, "strict:error", { signal });
      throw getStrictResponseError(error, isSubprocess);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/get-each.js
import { once as once6, on as on3 } from "node:events";
var getEachMessage, loopOnMessages, stopOnDisconnect, abortOnStrictError, iterateOnMessages, throwIfStrictError;
var init_get_each = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/get-each.js"() {
    init_validation();
    init_forward();
    init_reference();
    getEachMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true } = {}) => loopOnMessages({
      anyProcess,
      channel,
      isSubprocess,
      ipc,
      shouldAwait: !isSubprocess,
      reference
    });
    loopOnMessages = ({ anyProcess, channel, isSubprocess, ipc, shouldAwait, reference }) => {
      validateIpcMethod({
        methodName: "getEachMessage",
        isSubprocess,
        ipc,
        isConnected: isConnected(anyProcess)
      });
      addReference(channel, reference);
      const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
      const controller = new AbortController();
      const state = {};
      stopOnDisconnect(anyProcess, ipcEmitter, controller);
      abortOnStrictError({
        ipcEmitter,
        isSubprocess,
        controller,
        state
      });
      return iterateOnMessages({
        anyProcess,
        channel,
        ipcEmitter,
        isSubprocess,
        shouldAwait,
        controller,
        state,
        reference
      });
    };
    stopOnDisconnect = async (anyProcess, ipcEmitter, controller) => {
      try {
        await once6(ipcEmitter, "disconnect", { signal: controller.signal });
        controller.abort();
      } catch {
      }
    };
    abortOnStrictError = async ({ ipcEmitter, isSubprocess, controller, state }) => {
      try {
        const [error] = await once6(ipcEmitter, "strict:error", { signal: controller.signal });
        state.error = getStrictResponseError(error, isSubprocess);
        controller.abort();
      } catch {
      }
    };
    iterateOnMessages = async function* ({ anyProcess, channel, ipcEmitter, isSubprocess, shouldAwait, controller, state, reference }) {
      try {
        for await (const [message] of on3(ipcEmitter, "message", { signal: controller.signal })) {
          throwIfStrictError(state);
          yield message;
        }
      } catch {
        throwIfStrictError(state);
      } finally {
        controller.abort();
        removeReference(channel, reference);
        if (!isSubprocess) {
          disconnect(anyProcess);
        }
        if (shouldAwait) {
          await anyProcess;
        }
      }
    };
    throwIfStrictError = ({ error }) => {
      if (error) {
        throw error;
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/methods.js
import process8 from "node:process";
var addIpcMethods, getIpcExport, getIpcMethods;
var init_methods = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/methods.js"() {
    init_send();
    init_get_one();
    init_get_each();
    init_graceful();
    addIpcMethods = (subprocess, { ipc }) => {
      Object.assign(subprocess, getIpcMethods(subprocess, false, ipc));
    };
    getIpcExport = () => {
      const anyProcess = process8;
      const isSubprocess = true;
      const ipc = process8.channel !== void 0;
      return {
        ...getIpcMethods(anyProcess, isSubprocess, ipc),
        getCancelSignal: getCancelSignal.bind(void 0, {
          anyProcess,
          channel: anyProcess.channel,
          isSubprocess,
          ipc
        })
      };
    };
    getIpcMethods = (anyProcess, isSubprocess, ipc) => ({
      sendMessage: sendMessage.bind(void 0, {
        anyProcess,
        channel: anyProcess.channel,
        isSubprocess,
        ipc
      }),
      getOneMessage: getOneMessage.bind(void 0, {
        anyProcess,
        channel: anyProcess.channel,
        isSubprocess,
        ipc
      }),
      getEachMessage: getEachMessage.bind(void 0, {
        anyProcess,
        channel: anyProcess.channel,
        isSubprocess,
        ipc
      })
    });
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/early-error.js
import { ChildProcess as ChildProcess2 } from "node:child_process";
import {
  PassThrough,
  Readable,
  Writable,
  Duplex
} from "node:stream";
var handleEarlyError, createDummyStreams, createDummyStream, readable, writable, duplex, handleDummyPromise;
var init_early_error = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/return/early-error.js"() {
    init_handle();
    init_result();
    init_reject();
    handleEarlyError = ({ error, command, escapedCommand, fileDescriptors, options, startTime, verboseInfo }) => {
      cleanupCustomStreams(fileDescriptors);
      const subprocess = new ChildProcess2();
      createDummyStreams(subprocess, fileDescriptors);
      Object.assign(subprocess, { readable, writable, duplex });
      const earlyError = makeEarlyError({
        error,
        command,
        escapedCommand,
        fileDescriptors,
        options,
        startTime,
        isSync: false
      });
      const promise = handleDummyPromise(earlyError, verboseInfo, options);
      return { subprocess, promise };
    };
    createDummyStreams = (subprocess, fileDescriptors) => {
      const stdin = createDummyStream();
      const stdout = createDummyStream();
      const stderr = createDummyStream();
      const extraStdio = Array.from({ length: fileDescriptors.length - 3 }, createDummyStream);
      const all = createDummyStream();
      const stdio = [stdin, stdout, stderr, ...extraStdio];
      Object.assign(subprocess, {
        stdin,
        stdout,
        stderr,
        all,
        stdio
      });
    };
    createDummyStream = () => {
      const stream = new PassThrough();
      stream.end();
      return stream;
    };
    readable = () => new Readable({ read() {
    } });
    writable = () => new Writable({ write() {
    } });
    duplex = () => new Duplex({ read() {
    }, write() {
    } });
    handleDummyPromise = async (error, verboseInfo, options) => handleResult(error, verboseInfo, options);
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle-async.js
import { createReadStream, createWriteStream } from "node:fs";
import { Buffer as Buffer3 } from "node:buffer";
import { Readable as Readable2, Writable as Writable2, Duplex as Duplex2 } from "node:stream";
var handleStdioAsync, forbiddenIfAsync, addProperties2, addPropertiesAsync;
var init_handle_async = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/stdio/handle-async.js"() {
    init_generator();
    init_handle();
    init_type();
    handleStdioAsync = (options, verboseInfo) => handleStdio(addPropertiesAsync, options, verboseInfo, false);
    forbiddenIfAsync = ({ type, optionName }) => {
      throw new TypeError(`The \`${optionName}\` option cannot be ${TYPE_TO_MESSAGE[type]}.`);
    };
    addProperties2 = {
      fileNumber: forbiddenIfAsync,
      generator: generatorToStream,
      asyncGenerator: generatorToStream,
      nodeStream: ({ value }) => ({ stream: value }),
      webTransform({ value: { transform, writableObjectMode, readableObjectMode } }) {
        const objectMode = writableObjectMode || readableObjectMode;
        const stream = Duplex2.fromWeb(transform, { objectMode });
        return { stream };
      },
      duplex: ({ value: { transform } }) => ({ stream: transform }),
      native() {
      }
    };
    addPropertiesAsync = {
      input: {
        ...addProperties2,
        fileUrl: ({ value }) => ({ stream: createReadStream(value) }),
        filePath: ({ value: { file } }) => ({ stream: createReadStream(file) }),
        webStream: ({ value }) => ({ stream: Readable2.fromWeb(value) }),
        iterable: ({ value }) => ({ stream: Readable2.from(value) }),
        asyncIterable: ({ value }) => ({ stream: Readable2.from(value) }),
        string: ({ value }) => ({ stream: Readable2.from(value) }),
        uint8Array: ({ value }) => ({ stream: Readable2.from(Buffer3.from(value)) })
      },
      output: {
        ...addProperties2,
        fileUrl: ({ value }) => ({ stream: createWriteStream(value) }),
        filePath: ({ value: { file, append } }) => ({ stream: createWriteStream(file, append ? { flags: "a" } : {}) }),
        webStream: ({ value }) => ({ stream: Writable2.fromWeb(value) }),
        iterable: forbiddenIfAsync,
        asyncIterable: forbiddenIfAsync,
        string: forbiddenIfAsync,
        uint8Array: forbiddenIfAsync
      }
    };
  }
});

// node_modules/.pnpm/@sindresorhus+merge-streams@4.0.0/node_modules/@sindresorhus/merge-streams/index.js
import { on as on4, once as once7 } from "node:events";
import { PassThrough as PassThroughStream, getDefaultHighWaterMark as getDefaultHighWaterMark2 } from "node:stream";
import { finished as finished2 } from "node:stream/promises";
function mergeStreams(streams) {
  if (!Array.isArray(streams)) {
    throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
  }
  for (const stream of streams) {
    validateStream(stream);
  }
  const objectMode = streams.some(({ readableObjectMode }) => readableObjectMode);
  const highWaterMark = getHighWaterMark(streams, objectMode);
  const passThroughStream = new MergedStream({
    objectMode,
    writableHighWaterMark: highWaterMark,
    readableHighWaterMark: highWaterMark
  });
  for (const stream of streams) {
    passThroughStream.add(stream);
  }
  return passThroughStream;
}
var getHighWaterMark, MergedStream, onMergedStreamFinished, onMergedStreamEnd, onInputStreamsUnpipe, validateStream, endWhenStreamsDone, afterMergedStreamFinished, onInputStreamEnd, onInputStreamUnpipe, endStream, errorOrAbortStream, isAbortError, abortStream, errorStream, noop2, updateMaxListeners, PASSTHROUGH_LISTENERS_COUNT, PASSTHROUGH_LISTENERS_PER_STREAM;
var init_merge_streams = __esm({
  "node_modules/.pnpm/@sindresorhus+merge-streams@4.0.0/node_modules/@sindresorhus/merge-streams/index.js"() {
    getHighWaterMark = (streams, objectMode) => {
      if (streams.length === 0) {
        return getDefaultHighWaterMark2(objectMode);
      }
      const highWaterMarks = streams.filter(({ readableObjectMode }) => readableObjectMode === objectMode).map(({ readableHighWaterMark }) => readableHighWaterMark);
      return Math.max(...highWaterMarks);
    };
    MergedStream = class extends PassThroughStream {
      #streams = /* @__PURE__ */ new Set([]);
      #ended = /* @__PURE__ */ new Set([]);
      #aborted = /* @__PURE__ */ new Set([]);
      #onFinished;
      #unpipeEvent = /* @__PURE__ */ Symbol("unpipe");
      #streamPromises = /* @__PURE__ */ new WeakMap();
      add(stream) {
        validateStream(stream);
        if (this.#streams.has(stream)) {
          return;
        }
        this.#streams.add(stream);
        this.#onFinished ??= onMergedStreamFinished(this, this.#streams, this.#unpipeEvent);
        const streamPromise = endWhenStreamsDone({
          passThroughStream: this,
          stream,
          streams: this.#streams,
          ended: this.#ended,
          aborted: this.#aborted,
          onFinished: this.#onFinished,
          unpipeEvent: this.#unpipeEvent
        });
        this.#streamPromises.set(stream, streamPromise);
        stream.pipe(this, { end: false });
      }
      async remove(stream) {
        validateStream(stream);
        if (!this.#streams.has(stream)) {
          return false;
        }
        const streamPromise = this.#streamPromises.get(stream);
        if (streamPromise === void 0) {
          return false;
        }
        this.#streamPromises.delete(stream);
        stream.unpipe(this);
        await streamPromise;
        return true;
      }
    };
    onMergedStreamFinished = async (passThroughStream, streams, unpipeEvent) => {
      updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
      const controller = new AbortController();
      try {
        await Promise.race([
          onMergedStreamEnd(passThroughStream, controller),
          onInputStreamsUnpipe(passThroughStream, streams, unpipeEvent, controller)
        ]);
      } finally {
        controller.abort();
        updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
      }
    };
    onMergedStreamEnd = async (passThroughStream, { signal }) => {
      try {
        await finished2(passThroughStream, { signal, cleanup: true });
      } catch (error) {
        errorOrAbortStream(passThroughStream, error);
        throw error;
      }
    };
    onInputStreamsUnpipe = async (passThroughStream, streams, unpipeEvent, { signal }) => {
      for await (const [unpipedStream] of on4(passThroughStream, "unpipe", { signal })) {
        if (streams.has(unpipedStream)) {
          unpipedStream.emit(unpipeEvent);
        }
      }
    };
    validateStream = (stream) => {
      if (typeof stream?.pipe !== "function") {
        throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
      }
    };
    endWhenStreamsDone = async ({ passThroughStream, stream, streams, ended, aborted: aborted2, onFinished, unpipeEvent }) => {
      updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
      const controller = new AbortController();
      try {
        await Promise.race([
          afterMergedStreamFinished(onFinished, stream, controller),
          onInputStreamEnd({
            passThroughStream,
            stream,
            streams,
            ended,
            aborted: aborted2,
            controller
          }),
          onInputStreamUnpipe({
            stream,
            streams,
            ended,
            aborted: aborted2,
            unpipeEvent,
            controller
          })
        ]);
      } finally {
        controller.abort();
        updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
      }
      if (streams.size > 0 && streams.size === ended.size + aborted2.size) {
        if (ended.size === 0 && aborted2.size > 0) {
          abortStream(passThroughStream);
        } else {
          endStream(passThroughStream);
        }
      }
    };
    afterMergedStreamFinished = async (onFinished, stream, { signal }) => {
      try {
        await onFinished;
        if (!signal.aborted) {
          abortStream(stream);
        }
      } catch (error) {
        if (!signal.aborted) {
          errorOrAbortStream(stream, error);
        }
      }
    };
    onInputStreamEnd = async ({ passThroughStream, stream, streams, ended, aborted: aborted2, controller: { signal } }) => {
      try {
        await finished2(stream, {
          signal,
          cleanup: true,
          readable: true,
          writable: false
        });
        if (streams.has(stream)) {
          ended.add(stream);
        }
      } catch (error) {
        if (signal.aborted || !streams.has(stream)) {
          return;
        }
        if (isAbortError(error)) {
          aborted2.add(stream);
        } else {
          errorStream(passThroughStream, error);
        }
      }
    };
    onInputStreamUnpipe = async ({ stream, streams, ended, aborted: aborted2, unpipeEvent, controller: { signal } }) => {
      await once7(stream, unpipeEvent, { signal });
      if (!stream.readable) {
        return once7(signal, "abort", { signal });
      }
      streams.delete(stream);
      ended.delete(stream);
      aborted2.delete(stream);
    };
    endStream = (stream) => {
      if (stream.writable) {
        stream.end();
      }
    };
    errorOrAbortStream = (stream, error) => {
      if (isAbortError(error)) {
        abortStream(stream);
      } else {
        errorStream(stream, error);
      }
    };
    isAbortError = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE";
    abortStream = (stream) => {
      if (stream.readable || stream.writable) {
        stream.destroy();
      }
    };
    errorStream = (stream, error) => {
      if (!stream.destroyed) {
        stream.once("error", noop2);
        stream.destroy(error);
      }
    };
    noop2 = () => {
    };
    updateMaxListeners = (passThroughStream, increment2) => {
      const maxListeners = passThroughStream.getMaxListeners();
      if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
        passThroughStream.setMaxListeners(maxListeners + increment2);
      }
    };
    PASSTHROUGH_LISTENERS_COUNT = 2;
    PASSTHROUGH_LISTENERS_PER_STREAM = 1;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/pipeline.js
import { finished as finished3 } from "node:stream/promises";
var pipeStreams, onSourceFinish, endDestinationStream, onDestinationFinish, abortSourceStream;
var init_pipeline = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/pipeline.js"() {
    init_standard_stream();
    pipeStreams = (source, destination) => {
      source.pipe(destination);
      onSourceFinish(source, destination);
      onDestinationFinish(source, destination);
    };
    onSourceFinish = async (source, destination) => {
      if (isStandardStream(source) || isStandardStream(destination)) {
        return;
      }
      try {
        await finished3(source, { cleanup: true, readable: true, writable: false });
      } catch {
      }
      endDestinationStream(destination);
    };
    endDestinationStream = (destination) => {
      if (destination.writable) {
        destination.end();
      }
    };
    onDestinationFinish = async (source, destination) => {
      if (isStandardStream(source) || isStandardStream(destination)) {
        return;
      }
      try {
        await finished3(destination, { cleanup: true, readable: false, writable: true });
      } catch {
      }
      abortSourceStream(source);
    };
    abortSourceStream = (source) => {
      if (source.readable) {
        source.destroy();
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/output-async.js
var pipeOutputAsync, pipeTransform, SUBPROCESS_STREAM_PROPERTIES, pipeStdioItem, setStandardStreamMaxListeners, MAX_LISTENERS_INCREMENT;
var init_output_async = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/output-async.js"() {
    init_merge_streams();
    init_standard_stream();
    init_max_listeners();
    init_type();
    init_pipeline();
    pipeOutputAsync = (subprocess, fileDescriptors, controller) => {
      const pipeGroups = /* @__PURE__ */ new Map();
      for (const [fdNumber, { stdioItems, direction }] of Object.entries(fileDescriptors)) {
        for (const { stream } of stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type))) {
          pipeTransform(subprocess, stream, direction, fdNumber);
        }
        for (const { stream } of stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type))) {
          pipeStdioItem({
            subprocess,
            stream,
            direction,
            fdNumber,
            pipeGroups,
            controller
          });
        }
      }
      for (const [outputStream, inputStreams] of pipeGroups.entries()) {
        const inputStream = inputStreams.length === 1 ? inputStreams[0] : mergeStreams(inputStreams);
        pipeStreams(inputStream, outputStream);
      }
    };
    pipeTransform = (subprocess, stream, direction, fdNumber) => {
      if (direction === "output") {
        pipeStreams(subprocess.stdio[fdNumber], stream);
      } else {
        pipeStreams(stream, subprocess.stdio[fdNumber]);
      }
      const streamProperty = SUBPROCESS_STREAM_PROPERTIES[fdNumber];
      if (streamProperty !== void 0) {
        subprocess[streamProperty] = stream;
      }
      subprocess.stdio[fdNumber] = stream;
    };
    SUBPROCESS_STREAM_PROPERTIES = ["stdin", "stdout", "stderr"];
    pipeStdioItem = ({ subprocess, stream, direction, fdNumber, pipeGroups, controller }) => {
      if (stream === void 0) {
        return;
      }
      setStandardStreamMaxListeners(stream, controller);
      const [inputStream, outputStream] = direction === "output" ? [stream, subprocess.stdio[fdNumber]] : [subprocess.stdio[fdNumber], stream];
      const outputStreams = pipeGroups.get(inputStream) ?? [];
      pipeGroups.set(inputStream, [...outputStreams, outputStream]);
    };
    setStandardStreamMaxListeners = (stream, { signal }) => {
      if (isStandardStream(stream)) {
        incrementMaxListeners(stream, MAX_LISTENERS_INCREMENT, signal);
      }
    };
    MAX_LISTENERS_INCREMENT = 2;
  }
});

// node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/signals.js
var signals;
var init_signals2 = __esm({
  "node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/signals.js"() {
    signals = [];
    signals.push("SIGHUP", "SIGINT", "SIGTERM");
    if (process.platform !== "win32") {
      signals.push(
        "SIGALRM",
        "SIGABRT",
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
    }
  }
});

// node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/index.js
var processOk, kExitEmitter, global, ObjectDefineProperty, Emitter, SignalExitBase, signalExitWrap, SignalExitFallback, SignalExit, process9, onExit, load, unload;
var init_mjs = __esm({
  "node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/index.js"() {
    init_signals2();
    processOk = (process10) => !!process10 && typeof process10 === "object" && typeof process10.removeListener === "function" && typeof process10.emit === "function" && typeof process10.reallyExit === "function" && typeof process10.listeners === "function" && typeof process10.kill === "function" && typeof process10.pid === "number" && typeof process10.on === "function";
    kExitEmitter = /* @__PURE__ */ Symbol.for("signal-exit emitter");
    global = globalThis;
    ObjectDefineProperty = Object.defineProperty.bind(Object);
    Emitter = class {
      emitted = {
        afterExit: false,
        exit: false
      };
      listeners = {
        afterExit: [],
        exit: []
      };
      count = 0;
      id = Math.random();
      constructor() {
        if (global[kExitEmitter]) {
          return global[kExitEmitter];
        }
        ObjectDefineProperty(global, kExitEmitter, {
          value: this,
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
      on(ev, fn) {
        this.listeners[ev].push(fn);
      }
      removeListener(ev, fn) {
        const list = this.listeners[ev];
        const i2 = list.indexOf(fn);
        if (i2 === -1) {
          return;
        }
        if (i2 === 0 && list.length === 1) {
          list.length = 0;
        } else {
          list.splice(i2, 1);
        }
      }
      emit(ev, code, signal) {
        if (this.emitted[ev]) {
          return false;
        }
        this.emitted[ev] = true;
        let ret = false;
        for (const fn of this.listeners[ev]) {
          ret = fn(code, signal) === true || ret;
        }
        if (ev === "exit") {
          ret = this.emit("afterExit", code, signal) || ret;
        }
        return ret;
      }
    };
    SignalExitBase = class {
    };
    signalExitWrap = (handler) => {
      return {
        onExit(cb, opts) {
          return handler.onExit(cb, opts);
        },
        load() {
          return handler.load();
        },
        unload() {
          return handler.unload();
        }
      };
    };
    SignalExitFallback = class extends SignalExitBase {
      onExit() {
        return () => {
        };
      }
      load() {
      }
      unload() {
      }
    };
    SignalExit = class extends SignalExitBase {
      // "SIGHUP" throws an `ENOSYS` error on Windows,
      // so use a supported signal instead
      /* c8 ignore start */
      #hupSig = process9.platform === "win32" ? "SIGINT" : "SIGHUP";
      /* c8 ignore stop */
      #emitter = new Emitter();
      #process;
      #originalProcessEmit;
      #originalProcessReallyExit;
      #sigListeners = {};
      #loaded = false;
      constructor(process10) {
        super();
        this.#process = process10;
        this.#sigListeners = {};
        for (const sig of signals) {
          this.#sigListeners[sig] = () => {
            const listeners = this.#process.listeners(sig);
            let { count: count2 } = this.#emitter;
            const p = process10;
            if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
              count2 += p.__signal_exit_emitter__.count;
            }
            if (listeners.length === count2) {
              this.unload();
              const ret = this.#emitter.emit("exit", null, sig);
              const s = sig === "SIGHUP" ? this.#hupSig : sig;
              if (!ret)
                process10.kill(process10.pid, s);
            }
          };
        }
        this.#originalProcessReallyExit = process10.reallyExit;
        this.#originalProcessEmit = process10.emit;
      }
      onExit(cb, opts) {
        if (!processOk(this.#process)) {
          return () => {
          };
        }
        if (this.#loaded === false) {
          this.load();
        }
        const ev = opts?.alwaysLast ? "afterExit" : "exit";
        this.#emitter.on(ev, cb);
        return () => {
          this.#emitter.removeListener(ev, cb);
          if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
            this.unload();
          }
        };
      }
      load() {
        if (this.#loaded) {
          return;
        }
        this.#loaded = true;
        this.#emitter.count += 1;
        for (const sig of signals) {
          try {
            const fn = this.#sigListeners[sig];
            if (fn)
              this.#process.on(sig, fn);
          } catch (_) {
          }
        }
        this.#process.emit = (ev, ...a2) => {
          return this.#processEmit(ev, ...a2);
        };
        this.#process.reallyExit = (code) => {
          return this.#processReallyExit(code);
        };
      }
      unload() {
        if (!this.#loaded) {
          return;
        }
        this.#loaded = false;
        signals.forEach((sig) => {
          const listener = this.#sigListeners[sig];
          if (!listener) {
            throw new Error("Listener not defined for signal: " + sig);
          }
          try {
            this.#process.removeListener(sig, listener);
          } catch (_) {
          }
        });
        this.#process.emit = this.#originalProcessEmit;
        this.#process.reallyExit = this.#originalProcessReallyExit;
        this.#emitter.count -= 1;
      }
      #processReallyExit(code) {
        if (!processOk(this.#process)) {
          return 0;
        }
        this.#process.exitCode = code || 0;
        this.#emitter.emit("exit", this.#process.exitCode, null);
        return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
      }
      #processEmit(ev, ...args) {
        const og = this.#originalProcessEmit;
        if (ev === "exit" && processOk(this.#process)) {
          if (typeof args[0] === "number") {
            this.#process.exitCode = args[0];
          }
          const ret = og.call(this.#process, ev, ...args);
          this.#emitter.emit("exit", this.#process.exitCode, null);
          return ret;
        } else {
          return og.call(this.#process, ev, ...args);
        }
      }
    };
    process9 = globalThis.process;
    ({
      onExit: (
        /**
         * Called when the process is exiting, whether via signal, explicit
         * exit, or running out of stuff to do.
         *
         * If the global process object is not suitable for instrumentation,
         * then this will be a no-op.
         *
         * Returns a function that may be used to unload signal-exit.
         */
        onExit
      ),
      load: (
        /**
         * Load the listeners.  Likely you never need to call this, unless
         * doing a rather deep integration with signal-exit functionality.
         * Mostly exposed for the benefit of testing.
         *
         * @internal
         */
        load
      ),
      unload: (
        /**
         * Unload the listeners.  Likely you never need to call this, unless
         * doing a rather deep integration with signal-exit functionality.
         * Mostly exposed for the benefit of testing.
         *
         * @internal
         */
        unload
      )
    } = signalExitWrap(processOk(process9) ? new SignalExit(process9) : new SignalExitFallback()));
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/cleanup.js
import { addAbortListener as addAbortListener2 } from "node:events";
var cleanupOnExit;
var init_cleanup = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/terminate/cleanup.js"() {
    init_mjs();
    cleanupOnExit = (subprocess, { cleanup, detached }, { signal }) => {
      if (!cleanup || detached) {
        return;
      }
      const removeExitHandler = onExit(() => {
        subprocess.kill();
      });
      addAbortListener2(signal, () => {
        removeExitHandler();
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/pipe-arguments.js
var normalizePipeArguments, getDestinationStream, getDestination, mapDestinationArguments, getSourceStream;
var init_pipe_arguments = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/pipe-arguments.js"() {
    init_parameters();
    init_duration();
    init_fd_options();
    init_file_url();
    normalizePipeArguments = ({ source, sourcePromise, boundOptions, createNested }, ...pipeArguments) => {
      const startTime = getStartTime();
      const {
        destination,
        destinationStream,
        destinationError,
        from,
        unpipeSignal
      } = getDestinationStream(boundOptions, createNested, pipeArguments);
      const { sourceStream, sourceError } = getSourceStream(source, from);
      const { options: sourceOptions, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
      return {
        sourcePromise,
        sourceStream,
        sourceOptions,
        sourceError,
        destination,
        destinationStream,
        destinationError,
        unpipeSignal,
        fileDescriptors,
        startTime
      };
    };
    getDestinationStream = (boundOptions, createNested, pipeArguments) => {
      try {
        const {
          destination,
          pipeOptions: { from, to, unpipeSignal } = {}
        } = getDestination(boundOptions, createNested, ...pipeArguments);
        const destinationStream = getToStream(destination, to);
        return {
          destination,
          destinationStream,
          from,
          unpipeSignal
        };
      } catch (error) {
        return { destinationError: error };
      }
    };
    getDestination = (boundOptions, createNested, firstArgument, ...pipeArguments) => {
      if (Array.isArray(firstArgument)) {
        const destination = createNested(mapDestinationArguments, boundOptions)(firstArgument, ...pipeArguments);
        return { destination, pipeOptions: boundOptions };
      }
      if (typeof firstArgument === "string" || firstArgument instanceof URL || isDenoExecPath(firstArgument)) {
        if (Object.keys(boundOptions).length > 0) {
          throw new TypeError('Please use .pipe("file", ..., options) or .pipe(execa("file", ..., options)) instead of .pipe(options)("file", ...).');
        }
        const [rawFile, rawArguments, rawOptions] = normalizeParameters(firstArgument, ...pipeArguments);
        const destination = createNested(mapDestinationArguments)(rawFile, rawArguments, rawOptions);
        return { destination, pipeOptions: rawOptions };
      }
      if (SUBPROCESS_OPTIONS.has(firstArgument)) {
        if (Object.keys(boundOptions).length > 0) {
          throw new TypeError("Please use .pipe(options)`command` or .pipe($(options)`command`) instead of .pipe(options)($`command`).");
        }
        return { destination: firstArgument, pipeOptions: pipeArguments[0] };
      }
      throw new TypeError(`The first argument must be a template string, an options object, or an Execa subprocess: ${firstArgument}`);
    };
    mapDestinationArguments = ({ options }) => ({ options: { ...options, stdin: "pipe", piped: true } });
    getSourceStream = (source, from) => {
      try {
        const sourceStream = getFromStream(source, from);
        return { sourceStream };
      } catch (error) {
        return { sourceError: error };
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/throw.js
var handlePipeArgumentsError, getPipeArgumentsError, createNonCommandError, PIPE_COMMAND_MESSAGE;
var init_throw = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/throw.js"() {
    init_result();
    init_pipeline();
    handlePipeArgumentsError = ({
      sourceStream,
      sourceError,
      destinationStream,
      destinationError,
      fileDescriptors,
      sourceOptions,
      startTime
    }) => {
      const error = getPipeArgumentsError({
        sourceStream,
        sourceError,
        destinationStream,
        destinationError
      });
      if (error !== void 0) {
        throw createNonCommandError({
          error,
          fileDescriptors,
          sourceOptions,
          startTime
        });
      }
    };
    getPipeArgumentsError = ({ sourceStream, sourceError, destinationStream, destinationError }) => {
      if (sourceError !== void 0 && destinationError !== void 0) {
        return destinationError;
      }
      if (destinationError !== void 0) {
        abortSourceStream(sourceStream);
        return destinationError;
      }
      if (sourceError !== void 0) {
        endDestinationStream(destinationStream);
        return sourceError;
      }
    };
    createNonCommandError = ({ error, fileDescriptors, sourceOptions, startTime }) => makeEarlyError({
      error,
      command: PIPE_COMMAND_MESSAGE,
      escapedCommand: PIPE_COMMAND_MESSAGE,
      fileDescriptors,
      options: sourceOptions,
      startTime,
      isSync: false
    });
    PIPE_COMMAND_MESSAGE = "source.pipe(destination)";
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/sequence.js
var waitForBothSubprocesses;
var init_sequence = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/sequence.js"() {
    waitForBothSubprocesses = async (subprocessPromises) => {
      const [
        { status: sourceStatus, reason: sourceReason, value: sourceResult = sourceReason },
        { status: destinationStatus, reason: destinationReason, value: destinationResult = destinationReason }
      ] = await subprocessPromises;
      if (!destinationResult.pipedFrom.includes(sourceResult)) {
        destinationResult.pipedFrom.push(sourceResult);
      }
      if (destinationStatus === "rejected") {
        throw destinationResult;
      }
      if (sourceStatus === "rejected") {
        throw sourceResult;
      }
      return destinationResult;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/streaming.js
import { finished as finished4 } from "node:stream/promises";
var pipeSubprocessStream, pipeFirstSubprocessStream, pipeMoreSubprocessStream, cleanupMergedStreamsMap, MERGED_STREAMS, SOURCE_LISTENERS_PER_PIPE, DESTINATION_LISTENERS_PER_PIPE;
var init_streaming = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/streaming.js"() {
    init_merge_streams();
    init_max_listeners();
    init_pipeline();
    pipeSubprocessStream = (sourceStream, destinationStream, maxListenersController) => {
      const mergedStream = MERGED_STREAMS.has(destinationStream) ? pipeMoreSubprocessStream(sourceStream, destinationStream) : pipeFirstSubprocessStream(sourceStream, destinationStream);
      incrementMaxListeners(sourceStream, SOURCE_LISTENERS_PER_PIPE, maxListenersController.signal);
      incrementMaxListeners(destinationStream, DESTINATION_LISTENERS_PER_PIPE, maxListenersController.signal);
      cleanupMergedStreamsMap(destinationStream);
      return mergedStream;
    };
    pipeFirstSubprocessStream = (sourceStream, destinationStream) => {
      const mergedStream = mergeStreams([sourceStream]);
      pipeStreams(mergedStream, destinationStream);
      MERGED_STREAMS.set(destinationStream, mergedStream);
      return mergedStream;
    };
    pipeMoreSubprocessStream = (sourceStream, destinationStream) => {
      const mergedStream = MERGED_STREAMS.get(destinationStream);
      mergedStream.add(sourceStream);
      return mergedStream;
    };
    cleanupMergedStreamsMap = async (destinationStream) => {
      try {
        await finished4(destinationStream, { cleanup: true, readable: false, writable: true });
      } catch {
      }
      MERGED_STREAMS.delete(destinationStream);
    };
    MERGED_STREAMS = /* @__PURE__ */ new WeakMap();
    SOURCE_LISTENERS_PER_PIPE = 2;
    DESTINATION_LISTENERS_PER_PIPE = 1;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/abort.js
import { aborted } from "node:util";
var unpipeOnAbort, unpipeOnSignalAbort;
var init_abort = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/abort.js"() {
    init_throw();
    unpipeOnAbort = (unpipeSignal, unpipeContext) => unpipeSignal === void 0 ? [] : [unpipeOnSignalAbort(unpipeSignal, unpipeContext)];
    unpipeOnSignalAbort = async (unpipeSignal, { sourceStream, mergedStream, fileDescriptors, sourceOptions, startTime }) => {
      await aborted(unpipeSignal, sourceStream);
      await mergedStream.remove(sourceStream);
      const error = new Error("Pipe canceled by `unpipeSignal` option.");
      throw createNonCommandError({
        error,
        fileDescriptors,
        sourceOptions,
        startTime
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/setup.js
var pipeToSubprocess, handlePipePromise, getSubprocessPromises;
var init_setup = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/pipe/setup.js"() {
    init_is_plain_obj();
    init_pipe_arguments();
    init_throw();
    init_sequence();
    init_streaming();
    init_abort();
    pipeToSubprocess = (sourceInfo, ...pipeArguments) => {
      if (isPlainObject(pipeArguments[0])) {
        return pipeToSubprocess.bind(void 0, {
          ...sourceInfo,
          boundOptions: { ...sourceInfo.boundOptions, ...pipeArguments[0] }
        });
      }
      const { destination, ...normalizedInfo } = normalizePipeArguments(sourceInfo, ...pipeArguments);
      const promise = handlePipePromise({ ...normalizedInfo, destination });
      promise.pipe = pipeToSubprocess.bind(void 0, {
        ...sourceInfo,
        source: destination,
        sourcePromise: promise,
        boundOptions: {}
      });
      return promise;
    };
    handlePipePromise = async ({
      sourcePromise,
      sourceStream,
      sourceOptions,
      sourceError,
      destination,
      destinationStream,
      destinationError,
      unpipeSignal,
      fileDescriptors,
      startTime
    }) => {
      const subprocessPromises = getSubprocessPromises(sourcePromise, destination);
      handlePipeArgumentsError({
        sourceStream,
        sourceError,
        destinationStream,
        destinationError,
        fileDescriptors,
        sourceOptions,
        startTime
      });
      const maxListenersController = new AbortController();
      try {
        const mergedStream = pipeSubprocessStream(sourceStream, destinationStream, maxListenersController);
        return await Promise.race([
          waitForBothSubprocesses(subprocessPromises),
          ...unpipeOnAbort(unpipeSignal, {
            sourceStream,
            mergedStream,
            sourceOptions,
            fileDescriptors,
            startTime
          })
        ]);
      } finally {
        maxListenersController.abort();
      }
    };
    getSubprocessPromises = (sourcePromise, destination) => Promise.allSettled([sourcePromise, destination]);
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/iterate.js
import { on as on5 } from "node:events";
import { getDefaultHighWaterMark as getDefaultHighWaterMark3 } from "node:stream";
var iterateOnSubprocessStream, stopReadingOnExit, iterateForResult, stopReadingOnStreamEnd, iterateOnStream, DEFAULT_OBJECT_HIGH_WATER_MARK, HIGH_WATER_MARK, iterateOnData, getGenerators;
var init_iterate = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/iterate.js"() {
    init_encoding_transform();
    init_split();
    init_run_sync();
    iterateOnSubprocessStream = ({ subprocessStdout, subprocess, binary, shouldEncode, encoding, preserveNewlines }) => {
      const controller = new AbortController();
      stopReadingOnExit(subprocess, controller);
      return iterateOnStream({
        stream: subprocessStdout,
        controller,
        binary,
        shouldEncode: !subprocessStdout.readableObjectMode && shouldEncode,
        encoding,
        shouldSplit: !subprocessStdout.readableObjectMode,
        preserveNewlines
      });
    };
    stopReadingOnExit = async (subprocess, controller) => {
      try {
        await subprocess;
      } catch {
      } finally {
        controller.abort();
      }
    };
    iterateForResult = ({ stream, onStreamEnd, lines, encoding, stripFinalNewline: stripFinalNewline2, allMixed }) => {
      const controller = new AbortController();
      stopReadingOnStreamEnd(onStreamEnd, controller, stream);
      const objectMode = stream.readableObjectMode && !allMixed;
      return iterateOnStream({
        stream,
        controller,
        binary: encoding === "buffer",
        shouldEncode: !objectMode,
        encoding,
        shouldSplit: !objectMode && lines,
        preserveNewlines: !stripFinalNewline2
      });
    };
    stopReadingOnStreamEnd = async (onStreamEnd, controller, stream) => {
      try {
        await onStreamEnd;
      } catch {
        stream.destroy();
      } finally {
        controller.abort();
      }
    };
    iterateOnStream = ({ stream, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => {
      const onStdoutChunk = on5(stream, "data", {
        signal: controller.signal,
        highWaterMark: HIGH_WATER_MARK,
        // Backward compatibility with older name for this option
        // See https://github.com/nodejs/node/pull/52080#discussion_r1525227861
        // @todo Remove after removing support for Node 21
        highWatermark: HIGH_WATER_MARK
      });
      return iterateOnData({
        onStdoutChunk,
        controller,
        binary,
        shouldEncode,
        encoding,
        shouldSplit,
        preserveNewlines
      });
    };
    DEFAULT_OBJECT_HIGH_WATER_MARK = getDefaultHighWaterMark3(true);
    HIGH_WATER_MARK = DEFAULT_OBJECT_HIGH_WATER_MARK;
    iterateOnData = async function* ({ onStdoutChunk, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) {
      const generators = getGenerators({
        binary,
        shouldEncode,
        encoding,
        shouldSplit,
        preserveNewlines
      });
      try {
        for await (const [chunk] of onStdoutChunk) {
          yield* transformChunkSync(chunk, generators, 0);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          throw error;
        }
      } finally {
        yield* finalChunksSync(generators);
      }
    };
    getGenerators = ({ binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => [
      getEncodingTransformGenerator(binary, encoding, !shouldEncode),
      getSplitLinesGenerator(binary, preserveNewlines, !shouldSplit, {})
    ].filter(Boolean);
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/contents.js
import { setImmediate } from "node:timers/promises";
var getStreamOutput, logOutputAsync, resumeStream, getStreamContents2, getBufferedData, handleBufferedData;
var init_contents2 = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/io/contents.js"() {
    init_source();
    init_uint_array();
    init_output();
    init_iterate();
    init_max_buffer();
    init_strip_newline();
    getStreamOutput = async ({ stream, onStreamEnd, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => {
      const logPromise = logOutputAsync({
        stream,
        onStreamEnd,
        fdNumber,
        encoding,
        allMixed,
        verboseInfo,
        streamInfo
      });
      if (!buffer) {
        await Promise.all([resumeStream(stream), logPromise]);
        return;
      }
      const stripFinalNewlineValue = getStripFinalNewline(stripFinalNewline2, fdNumber);
      const iterable = iterateForResult({
        stream,
        onStreamEnd,
        lines,
        encoding,
        stripFinalNewline: stripFinalNewlineValue,
        allMixed
      });
      const [output] = await Promise.all([
        getStreamContents2({
          stream,
          iterable,
          fdNumber,
          encoding,
          maxBuffer,
          lines
        }),
        logPromise
      ]);
      return output;
    };
    logOutputAsync = async ({ stream, onStreamEnd, fdNumber, encoding, allMixed, verboseInfo, streamInfo: { fileDescriptors } }) => {
      if (!shouldLogOutput({
        stdioItems: fileDescriptors[fdNumber]?.stdioItems,
        encoding,
        verboseInfo,
        fdNumber
      })) {
        return;
      }
      const linesIterable = iterateForResult({
        stream,
        onStreamEnd,
        lines: true,
        encoding,
        stripFinalNewline: true,
        allMixed
      });
      await logLines(linesIterable, stream, fdNumber, verboseInfo);
    };
    resumeStream = async (stream) => {
      await setImmediate();
      if (stream.readableFlowing === null) {
        stream.resume();
      }
    };
    getStreamContents2 = async ({ stream, stream: { readableObjectMode }, iterable, fdNumber, encoding, maxBuffer, lines }) => {
      try {
        if (readableObjectMode || lines) {
          return await getStreamAsArray(iterable, { maxBuffer });
        }
        if (encoding === "buffer") {
          return new Uint8Array(await getStreamAsArrayBuffer(iterable, { maxBuffer }));
        }
        return await getStreamAsString(iterable, { maxBuffer });
      } catch (error) {
        return handleBufferedData(handleMaxBuffer({
          error,
          stream,
          readableObjectMode,
          lines,
          encoding,
          fdNumber
        }));
      }
    };
    getBufferedData = async (streamPromise) => {
      try {
        return await streamPromise;
      } catch (error) {
        return handleBufferedData(error);
      }
    };
    handleBufferedData = ({ bufferedData }) => isArrayBuffer(bufferedData) ? new Uint8Array(bufferedData) : bufferedData;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/wait-stream.js
import { finished as finished5 } from "node:stream/promises";
var waitForStream, handleStdinDestroy, spyOnStdinDestroy, setStdinCleanedUp, handleStreamError, shouldIgnoreStreamError, isInputFileDescriptor, isStreamAbort, isStreamEpipe;
var init_wait_stream = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/wait-stream.js"() {
    waitForStream = async (stream, fdNumber, streamInfo, { isSameDirection, stopOnExit = false } = {}) => {
      const state = handleStdinDestroy(stream, streamInfo);
      const abortController = new AbortController();
      try {
        await Promise.race([
          ...stopOnExit ? [streamInfo.exitPromise] : [],
          finished5(stream, { cleanup: true, signal: abortController.signal })
        ]);
      } catch (error) {
        if (!state.stdinCleanedUp) {
          handleStreamError(error, fdNumber, streamInfo, isSameDirection);
        }
      } finally {
        abortController.abort();
      }
    };
    handleStdinDestroy = (stream, { originalStreams: [originalStdin], subprocess }) => {
      const state = { stdinCleanedUp: false };
      if (stream === originalStdin) {
        spyOnStdinDestroy(stream, subprocess, state);
      }
      return state;
    };
    spyOnStdinDestroy = (subprocessStdin, subprocess, state) => {
      const { _destroy } = subprocessStdin;
      subprocessStdin._destroy = (...destroyArguments) => {
        setStdinCleanedUp(subprocess, state);
        _destroy.call(subprocessStdin, ...destroyArguments);
      };
    };
    setStdinCleanedUp = ({ exitCode, signalCode }, state) => {
      if (exitCode !== null || signalCode !== null) {
        state.stdinCleanedUp = true;
      }
    };
    handleStreamError = (error, fdNumber, streamInfo, isSameDirection) => {
      if (!shouldIgnoreStreamError(error, fdNumber, streamInfo, isSameDirection)) {
        throw error;
      }
    };
    shouldIgnoreStreamError = (error, fdNumber, streamInfo, isSameDirection = true) => {
      if (streamInfo.propagating) {
        return isStreamEpipe(error) || isStreamAbort(error);
      }
      streamInfo.propagating = true;
      return isInputFileDescriptor(streamInfo, fdNumber) === isSameDirection ? isStreamEpipe(error) : isStreamAbort(error);
    };
    isInputFileDescriptor = ({ fileDescriptors }, fdNumber) => fdNumber !== "all" && fileDescriptors[fdNumber].direction === "input";
    isStreamAbort = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE";
    isStreamEpipe = (error) => error?.code === "EPIPE";
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/stdio.js
var waitForStdioStreams, waitForSubprocessStream;
var init_stdio = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/stdio.js"() {
    init_contents2();
    init_wait_stream();
    waitForStdioStreams = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => subprocess.stdio.map((stream, fdNumber) => waitForSubprocessStream({
      stream,
      fdNumber,
      encoding,
      buffer: buffer[fdNumber],
      maxBuffer: maxBuffer[fdNumber],
      lines: lines[fdNumber],
      allMixed: false,
      stripFinalNewline: stripFinalNewline2,
      verboseInfo,
      streamInfo
    }));
    waitForSubprocessStream = async ({ stream, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => {
      if (!stream) {
        return;
      }
      const onStreamEnd = waitForStream(stream, fdNumber, streamInfo);
      if (isInputFileDescriptor(streamInfo, fdNumber)) {
        await onStreamEnd;
        return;
      }
      const [output] = await Promise.all([
        getStreamOutput({
          stream,
          onStreamEnd,
          fdNumber,
          encoding,
          buffer,
          maxBuffer,
          lines,
          allMixed,
          stripFinalNewline: stripFinalNewline2,
          verboseInfo,
          streamInfo
        }),
        onStreamEnd
      ]);
      return output;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/all-async.js
var makeAllStream, waitForAllStream, getAllStream, getAllMixed;
var init_all_async = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/all-async.js"() {
    init_merge_streams();
    init_stdio();
    makeAllStream = ({ stdout, stderr }, { all }) => all && (stdout || stderr) ? mergeStreams([stdout, stderr].filter(Boolean)) : void 0;
    waitForAllStream = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => waitForSubprocessStream({
      ...getAllStream(subprocess, buffer),
      fdNumber: "all",
      encoding,
      maxBuffer: maxBuffer[1] + maxBuffer[2],
      lines: lines[1] || lines[2],
      allMixed: getAllMixed(subprocess),
      stripFinalNewline: stripFinalNewline2,
      verboseInfo,
      streamInfo
    });
    getAllStream = ({ stdout, stderr, all }, [, bufferStdout, bufferStderr]) => {
      const buffer = bufferStdout || bufferStderr;
      if (!buffer) {
        return { stream: all, buffer };
      }
      if (!bufferStdout) {
        return { stream: stderr, buffer };
      }
      if (!bufferStderr) {
        return { stream: stdout, buffer };
      }
      return { stream: all, buffer };
    };
    getAllMixed = ({ all, stdout, stderr }) => all && stdout && stderr && stdout.readableObjectMode !== stderr.readableObjectMode;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/ipc.js
var shouldLogIpc, logIpcOutput;
var init_ipc = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/verbose/ipc.js"() {
    init_log();
    init_values();
    shouldLogIpc = (verboseInfo) => isFullVerbose(verboseInfo, "ipc");
    logIpcOutput = (message, verboseInfo) => {
      const verboseMessage = serializeVerboseMessage(message);
      verboseLog({
        type: "ipc",
        verboseMessage,
        fdNumber: "ipc",
        verboseInfo
      });
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/buffer-messages.js
var waitForIpcOutput, getBufferedIpcOutput;
var init_buffer_messages = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/ipc/buffer-messages.js"() {
    init_max_buffer();
    init_ipc();
    init_specific();
    init_get_each();
    waitForIpcOutput = async ({
      subprocess,
      buffer: bufferArray,
      maxBuffer: maxBufferArray,
      ipc,
      ipcOutput,
      verboseInfo
    }) => {
      if (!ipc) {
        return ipcOutput;
      }
      const isVerbose2 = shouldLogIpc(verboseInfo);
      const buffer = getFdSpecificValue(bufferArray, "ipc");
      const maxBuffer = getFdSpecificValue(maxBufferArray, "ipc");
      for await (const message of loopOnMessages({
        anyProcess: subprocess,
        channel: subprocess.channel,
        isSubprocess: false,
        ipc,
        shouldAwait: false,
        reference: true
      })) {
        if (buffer) {
          checkIpcMaxBuffer(subprocess, ipcOutput, maxBuffer);
          ipcOutput.push(message);
        }
        if (isVerbose2) {
          logIpcOutput(message, verboseInfo);
        }
      }
      return ipcOutput;
    };
    getBufferedIpcOutput = async (ipcOutputPromise, ipcOutput) => {
      await Promise.allSettled([ipcOutputPromise]);
      return ipcOutput;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/wait-subprocess.js
import { once as once8 } from "node:events";
var waitForSubprocessResult, waitForOriginalStreams, waitForCustomStreamsEnd, throwOnSubprocessError;
var init_wait_subprocess = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/resolve/wait-subprocess.js"() {
    init_is_stream();
    init_timeout();
    init_cancel();
    init_graceful2();
    init_standard_stream();
    init_type();
    init_contents2();
    init_buffer_messages();
    init_ipc_input();
    init_all_async();
    init_stdio();
    init_exit_async();
    init_wait_stream();
    waitForSubprocessResult = async ({
      subprocess,
      options: {
        encoding,
        buffer,
        maxBuffer,
        lines,
        timeoutDuration: timeout,
        cancelSignal,
        gracefulCancel,
        forceKillAfterDelay,
        stripFinalNewline: stripFinalNewline2,
        ipc,
        ipcInput
      },
      context,
      verboseInfo,
      fileDescriptors,
      originalStreams,
      onInternalError,
      controller
    }) => {
      const exitPromise = waitForExit(subprocess, context);
      const streamInfo = {
        originalStreams,
        fileDescriptors,
        subprocess,
        exitPromise,
        propagating: false
      };
      const stdioPromises = waitForStdioStreams({
        subprocess,
        encoding,
        buffer,
        maxBuffer,
        lines,
        stripFinalNewline: stripFinalNewline2,
        verboseInfo,
        streamInfo
      });
      const allPromise = waitForAllStream({
        subprocess,
        encoding,
        buffer,
        maxBuffer,
        lines,
        stripFinalNewline: stripFinalNewline2,
        verboseInfo,
        streamInfo
      });
      const ipcOutput = [];
      const ipcOutputPromise = waitForIpcOutput({
        subprocess,
        buffer,
        maxBuffer,
        ipc,
        ipcOutput,
        verboseInfo
      });
      const originalPromises = waitForOriginalStreams(originalStreams, subprocess, streamInfo);
      const customStreamsEndPromises = waitForCustomStreamsEnd(fileDescriptors, streamInfo);
      try {
        return await Promise.race([
          Promise.all([
            {},
            waitForSuccessfulExit(exitPromise),
            Promise.all(stdioPromises),
            allPromise,
            ipcOutputPromise,
            sendIpcInput(subprocess, ipcInput),
            ...originalPromises,
            ...customStreamsEndPromises
          ]),
          onInternalError,
          throwOnSubprocessError(subprocess, controller),
          ...throwOnTimeout(subprocess, timeout, context, controller),
          ...throwOnCancel({
            subprocess,
            cancelSignal,
            gracefulCancel,
            context,
            controller
          }),
          ...throwOnGracefulCancel({
            subprocess,
            cancelSignal,
            gracefulCancel,
            forceKillAfterDelay,
            context,
            controller
          })
        ]);
      } catch (error) {
        context.terminationReason ??= "other";
        return Promise.all([
          { error },
          exitPromise,
          Promise.all(stdioPromises.map((stdioPromise) => getBufferedData(stdioPromise))),
          getBufferedData(allPromise),
          getBufferedIpcOutput(ipcOutputPromise, ipcOutput),
          Promise.allSettled(originalPromises),
          Promise.allSettled(customStreamsEndPromises)
        ]);
      }
    };
    waitForOriginalStreams = (originalStreams, subprocess, streamInfo) => originalStreams.map((stream, fdNumber) => stream === subprocess.stdio[fdNumber] ? void 0 : waitForStream(stream, fdNumber, streamInfo));
    waitForCustomStreamsEnd = (fileDescriptors, streamInfo) => fileDescriptors.flatMap(({ stdioItems }, fdNumber) => stdioItems.filter(({ value, stream = value }) => isStream(stream, { checkOpen: false }) && !isStandardStream(stream)).map(({ type, value, stream = value }) => waitForStream(stream, fdNumber, streamInfo, {
      isSameDirection: TRANSFORM_TYPES.has(type),
      stopOnExit: type === "native"
    })));
    throwOnSubprocessError = async (subprocess, { signal }) => {
      const [error] = await once8(subprocess, "error", { signal });
      throw error;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/concurrent.js
var initializeConcurrentStreams, addConcurrentStream, waitForConcurrentStreams;
var init_concurrent = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/concurrent.js"() {
    init_deferred();
    initializeConcurrentStreams = () => ({
      readableDestroy: /* @__PURE__ */ new WeakMap(),
      writableFinal: /* @__PURE__ */ new WeakMap(),
      writableDestroy: /* @__PURE__ */ new WeakMap()
    });
    addConcurrentStream = (concurrentStreams, stream, waitName) => {
      const weakMap = concurrentStreams[waitName];
      if (!weakMap.has(stream)) {
        weakMap.set(stream, []);
      }
      const promises = weakMap.get(stream);
      const promise = createDeferred();
      promises.push(promise);
      const resolve = promise.resolve.bind(promise);
      return { resolve, promises };
    };
    waitForConcurrentStreams = async ({ resolve, promises }, subprocess) => {
      resolve();
      const [isSubprocessExit] = await Promise.race([
        Promise.allSettled([true, subprocess]),
        Promise.all([false, ...promises])
      ]);
      return !isSubprocessExit;
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/shared.js
import { finished as finished6 } from "node:stream/promises";
var safeWaitForSubprocessStdin, safeWaitForSubprocessStdout, waitForSubprocessStdin, waitForSubprocessStdout, waitForSubprocess, destroyOtherStream;
var init_shared = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/shared.js"() {
    init_wait_stream();
    safeWaitForSubprocessStdin = async (subprocessStdin) => {
      if (subprocessStdin === void 0) {
        return;
      }
      try {
        await waitForSubprocessStdin(subprocessStdin);
      } catch {
      }
    };
    safeWaitForSubprocessStdout = async (subprocessStdout) => {
      if (subprocessStdout === void 0) {
        return;
      }
      try {
        await waitForSubprocessStdout(subprocessStdout);
      } catch {
      }
    };
    waitForSubprocessStdin = async (subprocessStdin) => {
      await finished6(subprocessStdin, { cleanup: true, readable: false, writable: true });
    };
    waitForSubprocessStdout = async (subprocessStdout) => {
      await finished6(subprocessStdout, { cleanup: true, readable: true, writable: false });
    };
    waitForSubprocess = async (subprocess, error) => {
      await subprocess;
      if (error) {
        throw error;
      }
    };
    destroyOtherStream = (stream, isOpen, error) => {
      if (error && !isStreamAbort(error)) {
        stream.destroy(error);
      } else if (isOpen) {
        stream.destroy();
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/readable.js
import { Readable as Readable3 } from "node:stream";
import { callbackify as callbackify2 } from "node:util";
var createReadable, getSubprocessStdout, getReadableOptions, getReadableMethods, onRead, onStdoutFinished, onReadableDestroy, destroyOtherReadable;
var init_readable = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/readable.js"() {
    init_encoding_option();
    init_fd_options();
    init_iterate();
    init_deferred();
    init_concurrent();
    init_shared();
    createReadable = ({ subprocess, concurrentStreams, encoding }, { from, binary: binaryOption = true, preserveNewlines = true } = {}) => {
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
      const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
      const { read, onStdoutDataDone } = getReadableMethods({
        subprocessStdout,
        subprocess,
        binary,
        encoding,
        preserveNewlines
      });
      const readable2 = new Readable3({
        read,
        destroy: callbackify2(onReadableDestroy.bind(void 0, { subprocessStdout, subprocess, waitReadableDestroy })),
        highWaterMark: readableHighWaterMark,
        objectMode: readableObjectMode,
        encoding: readableEncoding
      });
      onStdoutFinished({
        subprocessStdout,
        onStdoutDataDone,
        readable: readable2,
        subprocess
      });
      return readable2;
    };
    getSubprocessStdout = (subprocess, from, concurrentStreams) => {
      const subprocessStdout = getFromStream(subprocess, from);
      const waitReadableDestroy = addConcurrentStream(concurrentStreams, subprocessStdout, "readableDestroy");
      return { subprocessStdout, waitReadableDestroy };
    };
    getReadableOptions = ({ readableEncoding, readableObjectMode, readableHighWaterMark }, binary) => binary ? { readableEncoding, readableObjectMode, readableHighWaterMark } : { readableEncoding, readableObjectMode: true, readableHighWaterMark: DEFAULT_OBJECT_HIGH_WATER_MARK };
    getReadableMethods = ({ subprocessStdout, subprocess, binary, encoding, preserveNewlines }) => {
      const onStdoutDataDone = createDeferred();
      const onStdoutData = iterateOnSubprocessStream({
        subprocessStdout,
        subprocess,
        binary,
        shouldEncode: !binary,
        encoding,
        preserveNewlines
      });
      return {
        read() {
          onRead(this, onStdoutData, onStdoutDataDone);
        },
        onStdoutDataDone
      };
    };
    onRead = async (readable2, onStdoutData, onStdoutDataDone) => {
      try {
        const { value, done } = await onStdoutData.next();
        if (done) {
          onStdoutDataDone.resolve();
        } else {
          readable2.push(value);
        }
      } catch {
      }
    };
    onStdoutFinished = async ({ subprocessStdout, onStdoutDataDone, readable: readable2, subprocess, subprocessStdin }) => {
      try {
        await waitForSubprocessStdout(subprocessStdout);
        await subprocess;
        await safeWaitForSubprocessStdin(subprocessStdin);
        await onStdoutDataDone;
        if (readable2.readable) {
          readable2.push(null);
        }
      } catch (error) {
        await safeWaitForSubprocessStdin(subprocessStdin);
        destroyOtherReadable(readable2, error);
      }
    };
    onReadableDestroy = async ({ subprocessStdout, subprocess, waitReadableDestroy }, error) => {
      if (await waitForConcurrentStreams(waitReadableDestroy, subprocess)) {
        destroyOtherReadable(subprocessStdout, error);
        await waitForSubprocess(subprocess, error);
      }
    };
    destroyOtherReadable = (stream, error) => {
      destroyOtherStream(stream, stream.readable, error);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/writable.js
import { Writable as Writable3 } from "node:stream";
import { callbackify as callbackify3 } from "node:util";
var createWritable, getSubprocessStdin, getWritableMethods, onWrite, onWritableFinal, onStdinFinished, onWritableDestroy, destroyOtherWritable;
var init_writable = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/writable.js"() {
    init_fd_options();
    init_concurrent();
    init_shared();
    createWritable = ({ subprocess, concurrentStreams }, { to } = {}) => {
      const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
      const writable2 = new Writable3({
        ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
        destroy: callbackify3(onWritableDestroy.bind(void 0, {
          subprocessStdin,
          subprocess,
          waitWritableFinal,
          waitWritableDestroy
        })),
        highWaterMark: subprocessStdin.writableHighWaterMark,
        objectMode: subprocessStdin.writableObjectMode
      });
      onStdinFinished(subprocessStdin, writable2);
      return writable2;
    };
    getSubprocessStdin = (subprocess, to, concurrentStreams) => {
      const subprocessStdin = getToStream(subprocess, to);
      const waitWritableFinal = addConcurrentStream(concurrentStreams, subprocessStdin, "writableFinal");
      const waitWritableDestroy = addConcurrentStream(concurrentStreams, subprocessStdin, "writableDestroy");
      return { subprocessStdin, waitWritableFinal, waitWritableDestroy };
    };
    getWritableMethods = (subprocessStdin, subprocess, waitWritableFinal) => ({
      write: onWrite.bind(void 0, subprocessStdin),
      final: callbackify3(onWritableFinal.bind(void 0, subprocessStdin, subprocess, waitWritableFinal))
    });
    onWrite = (subprocessStdin, chunk, encoding, done) => {
      if (subprocessStdin.write(chunk, encoding)) {
        done();
      } else {
        subprocessStdin.once("drain", done);
      }
    };
    onWritableFinal = async (subprocessStdin, subprocess, waitWritableFinal) => {
      if (await waitForConcurrentStreams(waitWritableFinal, subprocess)) {
        if (subprocessStdin.writable) {
          subprocessStdin.end();
        }
        await subprocess;
      }
    };
    onStdinFinished = async (subprocessStdin, writable2, subprocessStdout) => {
      try {
        await waitForSubprocessStdin(subprocessStdin);
        if (writable2.writable) {
          writable2.end();
        }
      } catch (error) {
        await safeWaitForSubprocessStdout(subprocessStdout);
        destroyOtherWritable(writable2, error);
      }
    };
    onWritableDestroy = async ({ subprocessStdin, subprocess, waitWritableFinal, waitWritableDestroy }, error) => {
      await waitForConcurrentStreams(waitWritableFinal, subprocess);
      if (await waitForConcurrentStreams(waitWritableDestroy, subprocess)) {
        destroyOtherWritable(subprocessStdin, error);
        await waitForSubprocess(subprocess, error);
      }
    };
    destroyOtherWritable = (stream, error) => {
      destroyOtherStream(stream, stream.writable, error);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/duplex.js
import { Duplex as Duplex3 } from "node:stream";
import { callbackify as callbackify4 } from "node:util";
var createDuplex, onDuplexDestroy;
var init_duplex = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/duplex.js"() {
    init_encoding_option();
    init_readable();
    init_writable();
    createDuplex = ({ subprocess, concurrentStreams, encoding }, { from, to, binary: binaryOption = true, preserveNewlines = true } = {}) => {
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
      const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
      const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
      const { read, onStdoutDataDone } = getReadableMethods({
        subprocessStdout,
        subprocess,
        binary,
        encoding,
        preserveNewlines
      });
      const duplex2 = new Duplex3({
        read,
        ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
        destroy: callbackify4(onDuplexDestroy.bind(void 0, {
          subprocessStdout,
          subprocessStdin,
          subprocess,
          waitReadableDestroy,
          waitWritableFinal,
          waitWritableDestroy
        })),
        readableHighWaterMark,
        writableHighWaterMark: subprocessStdin.writableHighWaterMark,
        readableObjectMode,
        writableObjectMode: subprocessStdin.writableObjectMode,
        encoding: readableEncoding
      });
      onStdoutFinished({
        subprocessStdout,
        onStdoutDataDone,
        readable: duplex2,
        subprocess,
        subprocessStdin
      });
      onStdinFinished(subprocessStdin, duplex2, subprocessStdout);
      return duplex2;
    };
    onDuplexDestroy = async ({ subprocessStdout, subprocessStdin, subprocess, waitReadableDestroy, waitWritableFinal, waitWritableDestroy }, error) => {
      await Promise.all([
        onReadableDestroy({ subprocessStdout, subprocess, waitReadableDestroy }, error),
        onWritableDestroy({
          subprocessStdin,
          subprocess,
          waitWritableFinal,
          waitWritableDestroy
        }, error)
      ]);
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/iterable.js
var createIterable, iterateOnStdoutData;
var init_iterable = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/iterable.js"() {
    init_encoding_option();
    init_fd_options();
    init_iterate();
    createIterable = (subprocess, encoding, {
      from,
      binary: binaryOption = false,
      preserveNewlines = false
    } = {}) => {
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const subprocessStdout = getFromStream(subprocess, from);
      const onStdoutData = iterateOnSubprocessStream({
        subprocessStdout,
        subprocess,
        binary,
        shouldEncode: true,
        encoding,
        preserveNewlines
      });
      return iterateOnStdoutData(onStdoutData, subprocessStdout, subprocess);
    };
    iterateOnStdoutData = async function* (onStdoutData, subprocessStdout, subprocess) {
      try {
        yield* onStdoutData;
      } finally {
        if (subprocessStdout.readable) {
          subprocessStdout.destroy();
        }
        await subprocess;
      }
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/add.js
var addConvertedStreams;
var init_add = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/convert/add.js"() {
    init_concurrent();
    init_readable();
    init_writable();
    init_duplex();
    init_iterable();
    addConvertedStreams = (subprocess, { encoding }) => {
      const concurrentStreams = initializeConcurrentStreams();
      subprocess.readable = createReadable.bind(void 0, { subprocess, concurrentStreams, encoding });
      subprocess.writable = createWritable.bind(void 0, { subprocess, concurrentStreams });
      subprocess.duplex = createDuplex.bind(void 0, { subprocess, concurrentStreams, encoding });
      subprocess.iterable = createIterable.bind(void 0, subprocess, encoding);
      subprocess[Symbol.asyncIterator] = createIterable.bind(void 0, subprocess, encoding, {});
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/promise.js
var mergePromise, nativePromisePrototype, descriptors;
var init_promise = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/promise.js"() {
    mergePromise = (subprocess, promise) => {
      for (const [property, descriptor] of descriptors) {
        const value = descriptor.value.bind(promise);
        Reflect.defineProperty(subprocess, property, { ...descriptor, value });
      }
    };
    nativePromisePrototype = (async () => {
    })().constructor.prototype;
    descriptors = ["then", "catch", "finally"].map((property) => [
      property,
      Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
    ]);
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/main-async.js
import { setMaxListeners } from "node:events";
import { spawn as spawn2 } from "node:child_process";
var execaCoreAsync, handleAsyncArguments, handleAsyncOptions, spawnSubprocessAsync, handlePromise, getAsyncResult;
var init_main_async = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/main-async.js"() {
    init_source();
    init_command();
    init_options();
    init_fd_options();
    init_shell();
    init_methods();
    init_result();
    init_reject();
    init_early_error();
    init_handle_async();
    init_strip_newline();
    init_output_async();
    init_kill();
    init_cleanup();
    init_setup();
    init_all_async();
    init_wait_subprocess();
    init_add();
    init_deferred();
    init_promise();
    execaCoreAsync = (rawFile, rawArguments, rawOptions, createNested) => {
      const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleAsyncArguments(rawFile, rawArguments, rawOptions);
      const { subprocess, promise } = spawnSubprocessAsync({
        file,
        commandArguments,
        options,
        startTime,
        verboseInfo,
        command,
        escapedCommand,
        fileDescriptors
      });
      subprocess.pipe = pipeToSubprocess.bind(void 0, {
        source: subprocess,
        sourcePromise: promise,
        boundOptions: {},
        createNested
      });
      mergePromise(subprocess, promise);
      SUBPROCESS_OPTIONS.set(subprocess, { options, fileDescriptors });
      return subprocess;
    };
    handleAsyncArguments = (rawFile, rawArguments, rawOptions) => {
      const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
      const { file, commandArguments, options: normalizedOptions } = normalizeOptions(rawFile, rawArguments, rawOptions);
      const options = handleAsyncOptions(normalizedOptions);
      const fileDescriptors = handleStdioAsync(options, verboseInfo);
      return {
        file,
        commandArguments,
        command,
        escapedCommand,
        startTime,
        verboseInfo,
        options,
        fileDescriptors
      };
    };
    handleAsyncOptions = ({ timeout, signal, ...options }) => {
      if (signal !== void 0) {
        throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.');
      }
      return { ...options, timeoutDuration: timeout };
    };
    spawnSubprocessAsync = ({ file, commandArguments, options, startTime, verboseInfo, command, escapedCommand, fileDescriptors }) => {
      let subprocess;
      try {
        subprocess = spawn2(...concatenateShell(file, commandArguments, options));
      } catch (error) {
        return handleEarlyError({
          error,
          command,
          escapedCommand,
          fileDescriptors,
          options,
          startTime,
          verboseInfo
        });
      }
      const controller = new AbortController();
      setMaxListeners(Number.POSITIVE_INFINITY, controller.signal);
      const originalStreams = [...subprocess.stdio];
      pipeOutputAsync(subprocess, fileDescriptors, controller);
      cleanupOnExit(subprocess, options, controller);
      const context = {};
      const onInternalError = createDeferred();
      subprocess.kill = subprocessKill.bind(void 0, {
        kill: subprocess.kill.bind(subprocess),
        options,
        onInternalError,
        context,
        controller
      });
      subprocess.all = makeAllStream(subprocess, options);
      addConvertedStreams(subprocess, options);
      addIpcMethods(subprocess, options);
      const promise = handlePromise({
        subprocess,
        options,
        startTime,
        verboseInfo,
        fileDescriptors,
        originalStreams,
        command,
        escapedCommand,
        context,
        onInternalError,
        controller
      });
      return { subprocess, promise };
    };
    handlePromise = async ({ subprocess, options, startTime, verboseInfo, fileDescriptors, originalStreams, command, escapedCommand, context, onInternalError, controller }) => {
      const [
        errorInfo,
        [exitCode, signal],
        stdioResults,
        allResult,
        ipcOutput
      ] = await waitForSubprocessResult({
        subprocess,
        options,
        context,
        verboseInfo,
        fileDescriptors,
        originalStreams,
        onInternalError,
        controller
      });
      controller.abort();
      onInternalError.resolve();
      const stdio = stdioResults.map((stdioResult, fdNumber) => stripNewline(stdioResult, options, fdNumber));
      const all = stripNewline(allResult, options, "all");
      const result = getAsyncResult({
        errorInfo,
        exitCode,
        signal,
        stdio,
        all,
        ipcOutput,
        context,
        options,
        command,
        escapedCommand,
        startTime
      });
      return handleResult(result, verboseInfo, options);
    };
    getAsyncResult = ({ errorInfo, exitCode, signal, stdio, all, ipcOutput, context, options, command, escapedCommand, startTime }) => "error" in errorInfo ? makeError({
      error: errorInfo.error,
      command,
      escapedCommand,
      timedOut: context.terminationReason === "timeout",
      isCanceled: context.terminationReason === "cancel" || context.terminationReason === "gracefulCancel",
      isGracefullyCanceled: context.terminationReason === "gracefulCancel",
      isMaxBuffer: errorInfo.error instanceof MaxBufferError,
      isForcefullyTerminated: context.isForcefullyTerminated,
      exitCode,
      signal,
      stdio,
      all,
      ipcOutput,
      options,
      startTime,
      isSync: false
    }) : makeSuccessResult({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput,
      options,
      startTime
    });
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/bind.js
var mergeOptions, mergeOption, DEEP_OPTIONS;
var init_bind = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/bind.js"() {
    init_is_plain_obj();
    init_specific();
    mergeOptions = (boundOptions, options) => {
      const newOptions = Object.fromEntries(
        Object.entries(options).map(([optionName, optionValue]) => [
          optionName,
          mergeOption(optionName, boundOptions[optionName], optionValue)
        ])
      );
      return { ...boundOptions, ...newOptions };
    };
    mergeOption = (optionName, boundOptionValue, optionValue) => {
      if (DEEP_OPTIONS.has(optionName) && isPlainObject(boundOptionValue) && isPlainObject(optionValue)) {
        return { ...boundOptionValue, ...optionValue };
      }
      return optionValue;
    };
    DEEP_OPTIONS = /* @__PURE__ */ new Set(["env", ...FD_SPECIFIC_OPTIONS]);
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/create.js
var createExeca, callBoundExeca, parseArguments;
var init_create = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/create.js"() {
    init_is_plain_obj();
    init_parameters();
    init_template();
    init_main_sync();
    init_main_async();
    init_bind();
    createExeca = (mapArguments, boundOptions, deepOptions, setBoundExeca) => {
      const createNested = (mapArguments2, boundOptions2, setBoundExeca2) => createExeca(mapArguments2, boundOptions2, deepOptions, setBoundExeca2);
      const boundExeca = (...execaArguments) => callBoundExeca({
        mapArguments,
        deepOptions,
        boundOptions,
        setBoundExeca,
        createNested
      }, ...execaArguments);
      if (setBoundExeca !== void 0) {
        setBoundExeca(boundExeca, createNested, boundOptions);
      }
      return boundExeca;
    };
    callBoundExeca = ({ mapArguments, deepOptions = {}, boundOptions = {}, setBoundExeca, createNested }, firstArgument, ...nextArguments) => {
      if (isPlainObject(firstArgument)) {
        return createNested(mapArguments, mergeOptions(boundOptions, firstArgument), setBoundExeca);
      }
      const { file, commandArguments, options, isSync } = parseArguments({
        mapArguments,
        firstArgument,
        nextArguments,
        deepOptions,
        boundOptions
      });
      return isSync ? execaCoreSync(file, commandArguments, options) : execaCoreAsync(file, commandArguments, options, createNested);
    };
    parseArguments = ({ mapArguments, firstArgument, nextArguments, deepOptions, boundOptions }) => {
      const callArguments = isTemplateString(firstArgument) ? parseTemplates(firstArgument, nextArguments) : [firstArgument, ...nextArguments];
      const [initialFile, initialArguments, initialOptions] = normalizeParameters(...callArguments);
      const mergedOptions = mergeOptions(mergeOptions(deepOptions, boundOptions), initialOptions);
      const {
        file = initialFile,
        commandArguments = initialArguments,
        options = mergedOptions,
        isSync = false
      } = mapArguments({ file: initialFile, commandArguments: initialArguments, options: mergedOptions });
      return {
        file,
        commandArguments,
        options,
        isSync
      };
    };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/command.js
var mapCommandAsync, mapCommandSync, parseCommand, parseCommandString, SPACES_REGEXP;
var init_command2 = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/command.js"() {
    mapCommandAsync = ({ file, commandArguments }) => parseCommand(file, commandArguments);
    mapCommandSync = ({ file, commandArguments }) => ({ ...parseCommand(file, commandArguments), isSync: true });
    parseCommand = (command, unusedArguments) => {
      if (unusedArguments.length > 0) {
        throw new TypeError(`The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`);
      }
      const [file, ...commandArguments] = parseCommandString(command);
      return { file, commandArguments };
    };
    parseCommandString = (command) => {
      if (typeof command !== "string") {
        throw new TypeError(`The command must be a string: ${String(command)}.`);
      }
      const trimmedCommand = command.trim();
      if (trimmedCommand === "") {
        return [];
      }
      const tokens = [];
      for (const token of trimmedCommand.split(SPACES_REGEXP)) {
        const previousToken = tokens.at(-1);
        if (previousToken && previousToken.endsWith("\\")) {
          tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
        } else {
          tokens.push(token);
        }
      }
      return tokens;
    };
    SPACES_REGEXP = / +/g;
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/script.js
var setScriptSync, mapScriptAsync, mapScriptSync, getScriptOptions, getScriptStdinOption, deepScriptOptions;
var init_script = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/lib/methods/script.js"() {
    setScriptSync = (boundExeca, createNested, boundOptions) => {
      boundExeca.sync = createNested(mapScriptSync, boundOptions);
      boundExeca.s = boundExeca.sync;
    };
    mapScriptAsync = ({ options }) => getScriptOptions(options);
    mapScriptSync = ({ options }) => ({ ...getScriptOptions(options), isSync: true });
    getScriptOptions = (options) => ({ options: { ...getScriptStdinOption(options), ...options } });
    getScriptStdinOption = ({ input, inputFile, stdio }) => input === void 0 && inputFile === void 0 && stdio === void 0 ? { stdin: "inherit" } : {};
    deepScriptOptions = { preferLocal: true };
  }
});

// node_modules/.pnpm/execa@9.6.1/node_modules/execa/index.js
var execa, execaSync, execaCommand, execaCommandSync, execaNode, $, sendMessage2, getOneMessage2, getEachMessage2, getCancelSignal2;
var init_execa = __esm({
  "node_modules/.pnpm/execa@9.6.1/node_modules/execa/index.js"() {
    init_create();
    init_command2();
    init_node2();
    init_script();
    init_methods();
    init_command2();
    init_final_error();
    execa = createExeca(() => ({}));
    execaSync = createExeca(() => ({ isSync: true }));
    execaCommand = createExeca(mapCommandAsync);
    execaCommandSync = createExeca(mapCommandSync);
    execaNode = createExeca(mapNode);
    $ = createExeca(mapScriptAsync, {}, deepScriptOptions, setScriptSync);
    ({
      sendMessage: sendMessage2,
      getOneMessage: getOneMessage2,
      getEachMessage: getEachMessage2,
      getCancelSignal: getCancelSignal2
    } = getIpcExport());
  }
});

export {
  figures_default,
  init_figures,
  cross_spawn_default,
  init_cross_spawn,
  onExit,
  init_mjs,
  execa,
  execaSync,
  init_execa
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2lzLXVuaWNvZGUtc3VwcG9ydGVkQDIuMS4wL25vZGVfbW9kdWxlcy9pcy11bmljb2RlLXN1cHBvcnRlZC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZmlndXJlc0A2LjEuMC9ub2RlX21vZHVsZXMvZmlndXJlcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtcGxhaW4tb2JqQDQuMS4wL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2ZpbGUtdXJsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvcGFyYW1ldGVycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi91dGlscy91aW50LWFycmF5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvdGVtcGxhdGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9zcGVjaWZpYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL3ZhbHVlcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvZXNjYXBlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS95b2N0b2NvbG9yc0AyLjEuMi9ub2RlX21vZHVsZXMveW9jdG9jb2xvcnMvYmFzZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veW9jdG9jb2xvcnNAMi4xLjIvbm9kZV9tb2R1bGVzL3lvY3RvY29sb3JzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvZGVmYXVsdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2N1c3RvbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2xvZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL3N0YXJ0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvaW5mby5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vZHVyYXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2NvbW1hbmQuanMiLCAiLi4vLi4vc2NyaXB0cy9zaGltcy9jcm9zcy1zcGF3bi5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BhdGgta2V5QDQuMC4wL25vZGVfbW9kdWxlcy9wYXRoLWtleS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pY29ybi1tYWdpY0AwLjMuMC9ub2RlX21vZHVsZXMvdW5pY29ybi1tYWdpYy9kZWZhdWx0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS91bmljb3JuLW1hZ2ljQDAuMy4wL25vZGVfbW9kdWxlcy91bmljb3JuLW1hZ2ljL25vZGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25wbS1ydW4tcGF0aEA2LjAuMC9ub2RlX21vZHVsZXMvbnBtLXJ1bi1wYXRoL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3JldHVybi9maW5hbC1lcnJvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaHVtYW4tc2lnbmFsc0A4LjAuMS9ub2RlX21vZHVsZXMvaHVtYW4tc2lnbmFscy9idWlsZC9zcmMvcmVhbHRpbWUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2h1bWFuLXNpZ25hbHNAOC4wLjEvbm9kZV9tb2R1bGVzL2h1bWFuLXNpZ25hbHMvYnVpbGQvc3JjL2NvcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2h1bWFuLXNpZ25hbHNAOC4wLjEvbm9kZV9tb2R1bGVzL2h1bWFuLXNpZ25hbHMvYnVpbGQvc3JjL3NpZ25hbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2h1bWFuLXNpZ25hbHNAOC4wLjEvbm9kZV9tb2R1bGVzL2h1bWFuLXNpZ25hbHMvYnVpbGQvc3JjL21haW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdGVybWluYXRlL3NpZ25hbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUva2lsbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi91dGlscy9hYm9ydC1zaWduYWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdGVybWluYXRlL2NhbmNlbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvdmFsaWRhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi91dGlscy9kZWZlcnJlZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi91dGlscy9tYXgtbGlzdGVuZXJzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9yZWZlcmVuY2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2luY29taW5nLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9mb3J3YXJkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9zdHJpY3QuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL291dGdvaW5nLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9zZW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9ncmFjZWZ1bC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvZ3JhY2VmdWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdGVybWluYXRlL3RpbWVvdXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9ub2RlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9pcGMtaW5wdXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2VuY29kaW5nLW9wdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvY3dkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9vcHRpb25zLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9zaGVsbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3RyaXAtZmluYWwtbmV3bGluZUA0LjAuMC9ub2RlX21vZHVsZXMvc3RyaXAtZmluYWwtbmV3bGluZS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtc3RyZWFtQDQuMC4xL25vZGVfbW9kdWxlcy9pcy1zdHJlYW0vaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzZWMtYW50K3JlYWRhYmxlLXN0cmVhbUAwLjQuMS9ub2RlX21vZHVsZXMvQHNlYy1hbnQvcmVhZGFibGUtc3RyZWFtL2Rpc3QvcG9ueWZpbGwvYXN5bmNJdGVyYXRvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNlYy1hbnQrcmVhZGFibGUtc3RyZWFtQDAuNC4xL25vZGVfbW9kdWxlcy9Ac2VjLWFudC9yZWFkYWJsZS1zdHJlYW0vZGlzdC9wb255ZmlsbC9mcm9tQW55SXRlcmFibGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzZWMtYW50K3JlYWRhYmxlLXN0cmVhbUAwLjQuMS9ub2RlX21vZHVsZXMvQHNlYy1hbnQvcmVhZGFibGUtc3RyZWFtL2Rpc3QvcG9ueWZpbGwvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dldC1zdHJlYW1AOS4wLjEvbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL3N0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LXN0cmVhbUA5LjAuMS9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvY29udGVudHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dldC1zdHJlYW1AOS4wLjEvbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL3V0aWxzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nZXQtc3RyZWFtQDkuMC4xL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL3NvdXJjZS9hcnJheS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LXN0cmVhbUA5LjAuMS9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvYXJyYXktYnVmZmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nZXQtc3RyZWFtQDkuMC4xL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL3NvdXJjZS9idWZmZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dldC1zdHJlYW1AOS4wLjEvbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL3N0cmluZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LXN0cmVhbUA5LjAuMS9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvZXhwb3J0cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LXN0cmVhbUA5LjAuMS9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vbWF4LWJ1ZmZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vbWVzc2FnZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vcmVzdWx0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wYXJzZS1tc0A0LjAuMC9ub2RlX21vZHVsZXMvcGFyc2UtbXMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByZXR0eS1tc0A5LjMuMC9ub2RlX21vZHVsZXMvcHJldHR5LW1zL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvZXJyb3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdmVyYm9zZS9jb21wbGV0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vcmVqZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL3R5cGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL29iamVjdC1tb2RlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9ub3JtYWxpemUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vZGlyZWN0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9hcnJheS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9zdGRpby1vcHRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vbmF0aXZlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2lucHV0LW9wdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9kdXBsaWNhdGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vaGFuZGxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2hhbmRsZS1zeW5jLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lvL3N0cmlwLW5ld2xpbmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL3NwbGl0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS92YWxpZGF0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90cmFuc2Zvcm0vZW5jb2RpbmctdHJhbnNmb3JtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9ydW4tYXN5bmMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL3J1bi1zeW5jLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9nZW5lcmF0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vaW5wdXQtc3luYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL291dHB1dC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9vdXRwdXQtc3luYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL2FsbC1zeW5jLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Jlc29sdmUvZXhpdC1hc3luYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL2V4aXQtc3luYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL21haW4tc3luYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvZ2V0LW9uZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvZ2V0LWVhY2guanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL21ldGhvZHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmV0dXJuL2Vhcmx5LWVycm9yLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2hhbmRsZS1hc3luYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNpbmRyZXNvcmh1cyttZXJnZS1zdHJlYW1zQDQuMC4wL25vZGVfbW9kdWxlcy9Ac2luZHJlc29yaHVzL21lcmdlLXN0cmVhbXMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vcGlwZWxpbmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vb3V0cHV0LWFzeW5jLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zaWduYWwtZXhpdEA0LjEuMC9ub2RlX21vZHVsZXMvc2lnbmFsLWV4aXQvc3JjL3NpZ25hbHMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NpZ25hbC1leGl0QDQuMS4wL25vZGVfbW9kdWxlcy9zaWduYWwtZXhpdC9zcmMvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdGVybWluYXRlL2NsZWFudXAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9waXBlLWFyZ3VtZW50cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL3Rocm93LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3BpcGUvc2VxdWVuY2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9zdHJlYW1pbmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9hYm9ydC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL3NldHVwLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lvL2l0ZXJhdGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vY29udGVudHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS93YWl0LXN0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL3N0ZGlvLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Jlc29sdmUvYWxsLWFzeW5jLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvaXBjLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9idWZmZXItbWVzc2FnZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS93YWl0LXN1YnByb2Nlc3MuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC9jb25jdXJyZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvc2hhcmVkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvcmVhZGFibGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC93cml0YWJsZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9jb252ZXJ0L2R1cGxleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9jb252ZXJ0L2l0ZXJhYmxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvYWRkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvcHJvbWlzZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL21haW4tYXN5bmMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2V4ZWNhQDkuNi4xL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9iaW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvY3JlYXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9leGVjYUA5LjYuMS9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvY29tbWFuZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL3NjcmlwdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXhlY2FAOS42LjEvbm9kZV9tb2R1bGVzL2V4ZWNhL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1VuaWNvZGVTdXBwb3J0ZWQoKSB7XG5cdGNvbnN0IHtlbnZ9ID0gcHJvY2Vzcztcblx0Y29uc3Qge1RFUk0sIFRFUk1fUFJPR1JBTX0gPSBlbnY7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICd3aW4zMicpIHtcblx0XHRyZXR1cm4gVEVSTSAhPT0gJ2xpbnV4JzsgLy8gTGludXggY29uc29sZSAoa2VybmVsKVxuXHR9XG5cblx0cmV0dXJuIEJvb2xlYW4oZW52LldUX1NFU1NJT04pIC8vIFdpbmRvd3MgVGVybWluYWxcblx0XHR8fCBCb29sZWFuKGVudi5URVJNSU5VU19TVUJMSU1FKSAvLyBUZXJtaW51cyAoPDAuMi4yNylcblx0XHR8fCBlbnYuQ29uRW11VGFzayA9PT0gJ3tjbWQ6OkNtZGVyfScgLy8gQ29uRW11IGFuZCBjbWRlclxuXHRcdHx8IFRFUk1fUFJPR1JBTSA9PT0gJ1Rlcm1pbnVzLVN1YmxpbWUnXG5cdFx0fHwgVEVSTV9QUk9HUkFNID09PSAndnNjb2RlJ1xuXHRcdHx8IFRFUk0gPT09ICd4dGVybS0yNTZjb2xvcidcblx0XHR8fCBURVJNID09PSAnYWxhY3JpdHR5J1xuXHRcdHx8IFRFUk0gPT09ICdyeHZ0LXVuaWNvZGUnXG5cdFx0fHwgVEVSTSA9PT0gJ3J4dnQtdW5pY29kZS0yNTZjb2xvcidcblx0XHR8fCBlbnYuVEVSTUlOQUxfRU1VTEFUT1IgPT09ICdKZXRCcmFpbnMtSmVkaVRlcm0nO1xufVxuIiwgImltcG9ydCBpc1VuaWNvZGVTdXBwb3J0ZWQgZnJvbSAnaXMtdW5pY29kZS1zdXBwb3J0ZWQnO1xuXG5jb25zdCBjb21tb24gPSB7XG5cdGNpcmNsZVF1ZXN0aW9uTWFyazogJyg/KScsXG5cdHF1ZXN0aW9uTWFya1ByZWZpeDogJyg/KScsXG5cdHNxdWFyZTogJ1x1MjU4OCcsXG5cdHNxdWFyZURhcmtTaGFkZTogJ1x1MjU5MycsXG5cdHNxdWFyZU1lZGl1bVNoYWRlOiAnXHUyNTkyJyxcblx0c3F1YXJlTGlnaHRTaGFkZTogJ1x1MjU5MScsXG5cdHNxdWFyZVRvcDogJ1x1MjU4MCcsXG5cdHNxdWFyZUJvdHRvbTogJ1x1MjU4NCcsXG5cdHNxdWFyZUxlZnQ6ICdcdTI1OEMnLFxuXHRzcXVhcmVSaWdodDogJ1x1MjU5MCcsXG5cdHNxdWFyZUNlbnRlcjogJ1x1MjVBMCcsXG5cdGJ1bGxldDogJ1x1MjVDRicsXG5cdGRvdDogJ1x1MjAyNCcsXG5cdGVsbGlwc2lzOiAnXHUyMDI2Jyxcblx0cG9pbnRlclNtYWxsOiAnXHUyMDNBJyxcblx0dHJpYW5nbGVVcDogJ1x1MjVCMicsXG5cdHRyaWFuZ2xlVXBTbWFsbDogJ1x1MjVCNCcsXG5cdHRyaWFuZ2xlRG93bjogJ1x1MjVCQycsXG5cdHRyaWFuZ2xlRG93blNtYWxsOiAnXHUyNUJFJyxcblx0dHJpYW5nbGVMZWZ0U21hbGw6ICdcdTI1QzInLFxuXHR0cmlhbmdsZVJpZ2h0U21hbGw6ICdcdTI1QjgnLFxuXHRob21lOiAnXHUyMzAyJyxcblx0aGVhcnQ6ICdcdTI2NjUnLFxuXHRtdXNpY05vdGU6ICdcdTI2NkEnLFxuXHRtdXNpY05vdGVCZWFtZWQ6ICdcdTI2NkInLFxuXHRhcnJvd1VwOiAnXHUyMTkxJyxcblx0YXJyb3dEb3duOiAnXHUyMTkzJyxcblx0YXJyb3dMZWZ0OiAnXHUyMTkwJyxcblx0YXJyb3dSaWdodDogJ1x1MjE5MicsXG5cdGFycm93TGVmdFJpZ2h0OiAnXHUyMTk0Jyxcblx0YXJyb3dVcERvd246ICdcdTIxOTUnLFxuXHRhbG1vc3RFcXVhbDogJ1x1MjI0OCcsXG5cdG5vdEVxdWFsOiAnXHUyMjYwJyxcblx0bGVzc09yRXF1YWw6ICdcdTIyNjQnLFxuXHRncmVhdGVyT3JFcXVhbDogJ1x1MjI2NScsXG5cdGlkZW50aWNhbDogJ1x1MjI2MScsXG5cdGluZmluaXR5OiAnXHUyMjFFJyxcblx0c3Vic2NyaXB0WmVybzogJ1x1MjA4MCcsXG5cdHN1YnNjcmlwdE9uZTogJ1x1MjA4MScsXG5cdHN1YnNjcmlwdFR3bzogJ1x1MjA4MicsXG5cdHN1YnNjcmlwdFRocmVlOiAnXHUyMDgzJyxcblx0c3Vic2NyaXB0Rm91cjogJ1x1MjA4NCcsXG5cdHN1YnNjcmlwdEZpdmU6ICdcdTIwODUnLFxuXHRzdWJzY3JpcHRTaXg6ICdcdTIwODYnLFxuXHRzdWJzY3JpcHRTZXZlbjogJ1x1MjA4NycsXG5cdHN1YnNjcmlwdEVpZ2h0OiAnXHUyMDg4Jyxcblx0c3Vic2NyaXB0TmluZTogJ1x1MjA4OScsXG5cdG9uZUhhbGY6ICdcdTAwQkQnLFxuXHRvbmVUaGlyZDogJ1x1MjE1MycsXG5cdG9uZVF1YXJ0ZXI6ICdcdTAwQkMnLFxuXHRvbmVGaWZ0aDogJ1x1MjE1NScsXG5cdG9uZVNpeHRoOiAnXHUyMTU5Jyxcblx0b25lRWlnaHRoOiAnXHUyMTVCJyxcblx0dHdvVGhpcmRzOiAnXHUyMTU0Jyxcblx0dHdvRmlmdGhzOiAnXHUyMTU2Jyxcblx0dGhyZWVRdWFydGVyczogJ1x1MDBCRScsXG5cdHRocmVlRmlmdGhzOiAnXHUyMTU3Jyxcblx0dGhyZWVFaWdodGhzOiAnXHUyMTVDJyxcblx0Zm91ckZpZnRoczogJ1x1MjE1OCcsXG5cdGZpdmVTaXh0aHM6ICdcdTIxNUEnLFxuXHRmaXZlRWlnaHRoczogJ1x1MjE1RCcsXG5cdHNldmVuRWlnaHRoczogJ1x1MjE1RScsXG5cdGxpbmU6ICdcdTI1MDAnLFxuXHRsaW5lQm9sZDogJ1x1MjUwMScsXG5cdGxpbmVEb3VibGU6ICdcdTI1NTAnLFxuXHRsaW5lRGFzaGVkMDogJ1x1MjUwNCcsXG5cdGxpbmVEYXNoZWQxOiAnXHUyNTA1Jyxcblx0bGluZURhc2hlZDI6ICdcdTI1MDgnLFxuXHRsaW5lRGFzaGVkMzogJ1x1MjUwOScsXG5cdGxpbmVEYXNoZWQ0OiAnXHUyNTRDJyxcblx0bGluZURhc2hlZDU6ICdcdTI1NEQnLFxuXHRsaW5lRGFzaGVkNjogJ1x1MjU3NCcsXG5cdGxpbmVEYXNoZWQ3OiAnXHUyNTc2Jyxcblx0bGluZURhc2hlZDg6ICdcdTI1NzgnLFxuXHRsaW5lRGFzaGVkOTogJ1x1MjU3QScsXG5cdGxpbmVEYXNoZWQxMDogJ1x1MjU3QycsXG5cdGxpbmVEYXNoZWQxMTogJ1x1MjU3RScsXG5cdGxpbmVEYXNoZWQxMjogJ1x1MjIxMicsXG5cdGxpbmVEYXNoZWQxMzogJ1x1MjAxMycsXG5cdGxpbmVEYXNoZWQxNDogJ1x1MjAxMCcsXG5cdGxpbmVEYXNoZWQxNTogJ1x1MjA0MycsXG5cdGxpbmVWZXJ0aWNhbDogJ1x1MjUwMicsXG5cdGxpbmVWZXJ0aWNhbEJvbGQ6ICdcdTI1MDMnLFxuXHRsaW5lVmVydGljYWxEb3VibGU6ICdcdTI1NTEnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQwOiAnXHUyNTA2Jyxcblx0bGluZVZlcnRpY2FsRGFzaGVkMTogJ1x1MjUwNycsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDI6ICdcdTI1MEEnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQzOiAnXHUyNTBCJyxcblx0bGluZVZlcnRpY2FsRGFzaGVkNDogJ1x1MjU0RScsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDU6ICdcdTI1NEYnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQ2OiAnXHUyNTc1Jyxcblx0bGluZVZlcnRpY2FsRGFzaGVkNzogJ1x1MjU3NycsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDg6ICdcdTI1NzknLFxuXHRsaW5lVmVydGljYWxEYXNoZWQ5OiAnXHUyNTdCJyxcblx0bGluZVZlcnRpY2FsRGFzaGVkMTA6ICdcdTI1N0QnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQxMTogJ1x1MjU3RicsXG5cdGxpbmVEb3duTGVmdDogJ1x1MjUxMCcsXG5cdGxpbmVEb3duTGVmdEFyYzogJ1x1MjU2RScsXG5cdGxpbmVEb3duQm9sZExlZnRCb2xkOiAnXHUyNTEzJyxcblx0bGluZURvd25Cb2xkTGVmdDogJ1x1MjUxMicsXG5cdGxpbmVEb3duTGVmdEJvbGQ6ICdcdTI1MTEnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnREb3VibGU6ICdcdTI1NTcnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnQ6ICdcdTI1NTYnLFxuXHRsaW5lRG93bkxlZnREb3VibGU6ICdcdTI1NTUnLFxuXHRsaW5lRG93blJpZ2h0OiAnXHUyNTBDJyxcblx0bGluZURvd25SaWdodEFyYzogJ1x1MjU2RCcsXG5cdGxpbmVEb3duQm9sZFJpZ2h0Qm9sZDogJ1x1MjUwRicsXG5cdGxpbmVEb3duQm9sZFJpZ2h0OiAnXHUyNTBFJyxcblx0bGluZURvd25SaWdodEJvbGQ6ICdcdTI1MEQnLFxuXHRsaW5lRG93bkRvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTU0Jyxcblx0bGluZURvd25Eb3VibGVSaWdodDogJ1x1MjU1MycsXG5cdGxpbmVEb3duUmlnaHREb3VibGU6ICdcdTI1NTInLFxuXHRsaW5lVXBMZWZ0OiAnXHUyNTE4Jyxcblx0bGluZVVwTGVmdEFyYzogJ1x1MjU2RicsXG5cdGxpbmVVcEJvbGRMZWZ0Qm9sZDogJ1x1MjUxQicsXG5cdGxpbmVVcEJvbGRMZWZ0OiAnXHUyNTFBJyxcblx0bGluZVVwTGVmdEJvbGQ6ICdcdTI1MTknLFxuXHRsaW5lVXBEb3VibGVMZWZ0RG91YmxlOiAnXHUyNTVEJyxcblx0bGluZVVwRG91YmxlTGVmdDogJ1x1MjU1QycsXG5cdGxpbmVVcExlZnREb3VibGU6ICdcdTI1NUInLFxuXHRsaW5lVXBSaWdodDogJ1x1MjUxNCcsXG5cdGxpbmVVcFJpZ2h0QXJjOiAnXHUyNTcwJyxcblx0bGluZVVwQm9sZFJpZ2h0Qm9sZDogJ1x1MjUxNycsXG5cdGxpbmVVcEJvbGRSaWdodDogJ1x1MjUxNicsXG5cdGxpbmVVcFJpZ2h0Qm9sZDogJ1x1MjUxNScsXG5cdGxpbmVVcERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTVBJyxcblx0bGluZVVwRG91YmxlUmlnaHQ6ICdcdTI1NTknLFxuXHRsaW5lVXBSaWdodERvdWJsZTogJ1x1MjU1OCcsXG5cdGxpbmVVcERvd25MZWZ0OiAnXHUyNTI0Jyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdEJvbGQ6ICdcdTI1MkInLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0OiAnXHUyNTI4Jyxcblx0bGluZVVwRG93bkxlZnRCb2xkOiAnXHUyNTI1Jyxcblx0bGluZVVwQm9sZERvd25MZWZ0Qm9sZDogJ1x1MjUyOScsXG5cdGxpbmVVcERvd25Cb2xkTGVmdEJvbGQ6ICdcdTI1MkEnLFxuXHRsaW5lVXBEb3duQm9sZExlZnQ6ICdcdTI1MjcnLFxuXHRsaW5lVXBCb2xkRG93bkxlZnQ6ICdcdTI1MjYnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlTGVmdERvdWJsZTogJ1x1MjU2MycsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVMZWZ0OiAnXHUyNTYyJyxcblx0bGluZVVwRG93bkxlZnREb3VibGU6ICdcdTI1NjEnLFxuXHRsaW5lVXBEb3duUmlnaHQ6ICdcdTI1MUMnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRSaWdodEJvbGQ6ICdcdTI1MjMnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRSaWdodDogJ1x1MjUyMCcsXG5cdGxpbmVVcERvd25SaWdodEJvbGQ6ICdcdTI1MUQnLFxuXHRsaW5lVXBCb2xkRG93blJpZ2h0Qm9sZDogJ1x1MjUyMScsXG5cdGxpbmVVcERvd25Cb2xkUmlnaHRCb2xkOiAnXHUyNTIyJyxcblx0bGluZVVwRG93bkJvbGRSaWdodDogJ1x1MjUxRicsXG5cdGxpbmVVcEJvbGREb3duUmlnaHQ6ICdcdTI1MUUnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjAnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlUmlnaHQ6ICdcdTI1NUYnLFxuXHRsaW5lVXBEb3duUmlnaHREb3VibGU6ICdcdTI1NUUnLFxuXHRsaW5lRG93bkxlZnRSaWdodDogJ1x1MjUyQycsXG5cdGxpbmVEb3duQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTMzJyxcblx0bGluZURvd25MZWZ0Qm9sZFJpZ2h0Qm9sZDogJ1x1MjUyRicsXG5cdGxpbmVEb3duQm9sZExlZnRSaWdodDogJ1x1MjUzMCcsXG5cdGxpbmVEb3duQm9sZExlZnRCb2xkUmlnaHQ6ICdcdTI1MzEnLFxuXHRsaW5lRG93bkJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTMyJyxcblx0bGluZURvd25MZWZ0UmlnaHRCb2xkOiAnXHUyNTJFJyxcblx0bGluZURvd25MZWZ0Qm9sZFJpZ2h0OiAnXHUyNTJEJyxcblx0bGluZURvd25Eb3VibGVMZWZ0RG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjYnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnRSaWdodDogJ1x1MjU2NScsXG5cdGxpbmVEb3duTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTY0Jyxcblx0bGluZVVwTGVmdFJpZ2h0OiAnXHUyNTM0Jyxcblx0bGluZVVwQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTNCJyxcblx0bGluZVVwTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1MzcnLFxuXHRsaW5lVXBCb2xkTGVmdFJpZ2h0OiAnXHUyNTM4Jyxcblx0bGluZVVwQm9sZExlZnRCb2xkUmlnaHQ6ICdcdTI1MzknLFxuXHRsaW5lVXBCb2xkTGVmdFJpZ2h0Qm9sZDogJ1x1MjUzQScsXG5cdGxpbmVVcExlZnRSaWdodEJvbGQ6ICdcdTI1MzYnLFxuXHRsaW5lVXBMZWZ0Qm9sZFJpZ2h0OiAnXHUyNTM1Jyxcblx0bGluZVVwRG91YmxlTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTY5Jyxcblx0bGluZVVwRG91YmxlTGVmdFJpZ2h0OiAnXHUyNTY4Jyxcblx0bGluZVVwTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTY3Jyxcblx0bGluZVVwRG93bkxlZnRSaWdodDogJ1x1MjUzQycsXG5cdGxpbmVVcEJvbGREb3duQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTRCJyxcblx0bGluZVVwRG93bkJvbGRMZWZ0Qm9sZFJpZ2h0Qm9sZDogJ1x1MjU0OCcsXG5cdGxpbmVVcEJvbGREb3duTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1NDcnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTRBJyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdEJvbGRSaWdodDogJ1x1MjU0OScsXG5cdGxpbmVVcEJvbGREb3duTGVmdFJpZ2h0OiAnXHUyNTQwJyxcblx0bGluZVVwRG93bkJvbGRMZWZ0UmlnaHQ6ICdcdTI1NDEnLFxuXHRsaW5lVXBEb3duTGVmdEJvbGRSaWdodDogJ1x1MjUzRCcsXG5cdGxpbmVVcERvd25MZWZ0UmlnaHRCb2xkOiAnXHUyNTNFJyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdFJpZ2h0OiAnXHUyNTQyJyxcblx0bGluZVVwRG93bkxlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTNGJyxcblx0bGluZVVwQm9sZERvd25MZWZ0Qm9sZFJpZ2h0OiAnXHUyNTQzJyxcblx0bGluZVVwQm9sZERvd25MZWZ0UmlnaHRCb2xkOiAnXHUyNTQ0Jyxcblx0bGluZVVwRG93bkJvbGRMZWZ0Qm9sZFJpZ2h0OiAnXHUyNTQ1Jyxcblx0bGluZVVwRG93bkJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTQ2Jyxcblx0bGluZVVwRG91YmxlRG93bkRvdWJsZUxlZnREb3VibGVSaWdodERvdWJsZTogJ1x1MjU2QycsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVMZWZ0UmlnaHQ6ICdcdTI1NkInLFxuXHRsaW5lVXBEb3duTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTZBJyxcblx0bGluZUNyb3NzOiAnXHUyNTczJyxcblx0bGluZUJhY2tzbGFzaDogJ1x1MjU3MicsXG5cdGxpbmVTbGFzaDogJ1x1MjU3MScsXG59O1xuXG5jb25zdCBzcGVjaWFsTWFpblN5bWJvbHMgPSB7XG5cdHRpY2s6ICdcdTI3MTQnLFxuXHRpbmZvOiAnXHUyMTM5Jyxcblx0d2FybmluZzogJ1x1MjZBMCcsXG5cdGNyb3NzOiAnXHUyNzE4Jyxcblx0c3F1YXJlU21hbGw6ICdcdTI1RkInLFxuXHRzcXVhcmVTbWFsbEZpbGxlZDogJ1x1MjVGQycsXG5cdGNpcmNsZTogJ1x1MjVFRicsXG5cdGNpcmNsZUZpbGxlZDogJ1x1MjVDOScsXG5cdGNpcmNsZURvdHRlZDogJ1x1MjVDQycsXG5cdGNpcmNsZURvdWJsZTogJ1x1MjVDRScsXG5cdGNpcmNsZUNpcmNsZTogJ1x1MjRERScsXG5cdGNpcmNsZUNyb3NzOiAnXHUyNEU3Jyxcblx0Y2lyY2xlUGlwZTogJ1x1MjRCRScsXG5cdHJhZGlvT246ICdcdTI1QzknLFxuXHRyYWRpb09mZjogJ1x1MjVFRicsXG5cdGNoZWNrYm94T246ICdcdTI2MTInLFxuXHRjaGVja2JveE9mZjogJ1x1MjYxMCcsXG5cdGNoZWNrYm94Q2lyY2xlT246ICdcdTI0RTcnLFxuXHRjaGVja2JveENpcmNsZU9mZjogJ1x1MjRCRScsXG5cdHBvaW50ZXI6ICdcdTI3NkYnLFxuXHR0cmlhbmdsZVVwT3V0bGluZTogJ1x1MjVCMycsXG5cdHRyaWFuZ2xlTGVmdDogJ1x1MjVDMCcsXG5cdHRyaWFuZ2xlUmlnaHQ6ICdcdTI1QjYnLFxuXHRsb3plbmdlOiAnXHUyNUM2Jyxcblx0bG96ZW5nZU91dGxpbmU6ICdcdTI1QzcnLFxuXHRoYW1idXJnZXI6ICdcdTI2MzAnLFxuXHRzbWlsZXk6ICdcdTMyRTEnLFxuXHRtdXN0YWNoZTogJ1x1MERGNCcsXG5cdHN0YXI6ICdcdTI2MDUnLFxuXHRwbGF5OiAnXHUyNUI2Jyxcblx0bm9kZWpzOiAnXHUyQjIyJyxcblx0b25lU2V2ZW50aDogJ1x1MjE1MCcsXG5cdG9uZU5pbnRoOiAnXHUyMTUxJyxcblx0b25lVGVudGg6ICdcdTIxNTInLFxufTtcblxuY29uc3Qgc3BlY2lhbEZhbGxiYWNrU3ltYm9scyA9IHtcblx0dGljazogJ1x1MjIxQScsXG5cdGluZm86ICdpJyxcblx0d2FybmluZzogJ1x1MjAzQycsXG5cdGNyb3NzOiAnXHUwMEQ3Jyxcblx0c3F1YXJlU21hbGw6ICdcdTI1QTEnLFxuXHRzcXVhcmVTbWFsbEZpbGxlZDogJ1x1MjVBMCcsXG5cdGNpcmNsZTogJyggKScsXG5cdGNpcmNsZUZpbGxlZDogJygqKScsXG5cdGNpcmNsZURvdHRlZDogJyggKScsXG5cdGNpcmNsZURvdWJsZTogJyggKScsXG5cdGNpcmNsZUNpcmNsZTogJyhcdTI1Q0IpJyxcblx0Y2lyY2xlQ3Jvc3M6ICcoXHUwMEQ3KScsXG5cdGNpcmNsZVBpcGU6ICcoXHUyNTAyKScsXG5cdHJhZGlvT246ICcoKiknLFxuXHRyYWRpb09mZjogJyggKScsXG5cdGNoZWNrYm94T246ICdbXHUwMEQ3XScsXG5cdGNoZWNrYm94T2ZmOiAnWyBdJyxcblx0Y2hlY2tib3hDaXJjbGVPbjogJyhcdTAwRDcpJyxcblx0Y2hlY2tib3hDaXJjbGVPZmY6ICcoICknLFxuXHRwb2ludGVyOiAnPicsXG5cdHRyaWFuZ2xlVXBPdXRsaW5lOiAnXHUyMjA2Jyxcblx0dHJpYW5nbGVMZWZ0OiAnXHUyNUM0Jyxcblx0dHJpYW5nbGVSaWdodDogJ1x1MjVCQScsXG5cdGxvemVuZ2U6ICdcdTI2NjYnLFxuXHRsb3plbmdlT3V0bGluZTogJ1x1MjVDQScsXG5cdGhhbWJ1cmdlcjogJ1x1MjI2MScsXG5cdHNtaWxleTogJ1x1MjYzQScsXG5cdG11c3RhY2hlOiAnXHUyNTBDXHUyNTAwXHUyNTEwJyxcblx0c3RhcjogJ1x1MjczNicsXG5cdHBsYXk6ICdcdTI1QkEnLFxuXHRub2RlanM6ICdcdTI2NjYnLFxuXHRvbmVTZXZlbnRoOiAnMS83Jyxcblx0b25lTmludGg6ICcxLzknLFxuXHRvbmVUZW50aDogJzEvMTAnLFxufTtcblxuZXhwb3J0IGNvbnN0IG1haW5TeW1ib2xzID0gey4uLmNvbW1vbiwgLi4uc3BlY2lhbE1haW5TeW1ib2xzfTtcbmV4cG9ydCBjb25zdCBmYWxsYmFja1N5bWJvbHMgPSB7Li4uY29tbW9uLCAuLi5zcGVjaWFsRmFsbGJhY2tTeW1ib2xzfTtcblxuY29uc3Qgc2hvdWxkVXNlTWFpbiA9IGlzVW5pY29kZVN1cHBvcnRlZCgpO1xuY29uc3QgZmlndXJlcyA9IHNob3VsZFVzZU1haW4gPyBtYWluU3ltYm9scyA6IGZhbGxiYWNrU3ltYm9scztcbmV4cG9ydCBkZWZhdWx0IGZpZ3VyZXM7XG5cbmNvbnN0IHJlcGxhY2VtZW50cyA9IE9iamVjdC5lbnRyaWVzKHNwZWNpYWxNYWluU3ltYm9scyk7XG5cbi8vIE9uIHRlcm1pbmFscyB3aGljaCBkbyBub3Qgc3VwcG9ydCBVbmljb2RlIHN5bWJvbHMsIHN1YnN0aXR1dGUgdGhlbSB0byBvdGhlciBzeW1ib2xzXG5leHBvcnQgY29uc3QgcmVwbGFjZVN5bWJvbHMgPSAoc3RyaW5nLCB7dXNlRmFsbGJhY2sgPSAhc2hvdWxkVXNlTWFpbn0gPSB7fSkgPT4ge1xuXHRpZiAodXNlRmFsbGJhY2spIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIG1haW5TeW1ib2xdIG9mIHJlcGxhY2VtZW50cykge1xuXHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2VBbGwobWFpblN5bWJvbCwgZmFsbGJhY2tTeW1ib2xzW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHJpbmc7XG59O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXHRyZXR1cm4gKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiB2YWx1ZSk7XG59XG4iLCAiaW1wb3J0IHtmaWxlVVJMVG9QYXRofSBmcm9tICdub2RlOnVybCc7XG5cbi8vIEFsbG93IHNvbWUgYXJndW1lbnRzL29wdGlvbnMgdG8gYmUgZWl0aGVyIGEgZmlsZSBwYXRoIHN0cmluZyBvciBhIGZpbGUgVVJMXG5leHBvcnQgY29uc3Qgc2FmZU5vcm1hbGl6ZUZpbGVVcmwgPSAoZmlsZSwgbmFtZSkgPT4ge1xuXHRjb25zdCBmaWxlU3RyaW5nID0gbm9ybWFsaXplRmlsZVVybChub3JtYWxpemVEZW5vRXhlY1BhdGgoZmlsZSkpO1xuXG5cdGlmICh0eXBlb2YgZmlsZVN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IG11c3QgYmUgYSBzdHJpbmcgb3IgYSBmaWxlIFVSTDogJHtmaWxlU3RyaW5nfS5gKTtcblx0fVxuXG5cdHJldHVybiBmaWxlU3RyaW5nO1xufTtcblxuLy8gSW4gRGVubyBub2RlOnByb2Nlc3MgZXhlY1BhdGggaXMgYSBzcGVjaWFsIG9iamVjdCwgbm90IGp1c3QgYSBzdHJpbmc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGVub2xhbmQvZGVuby9ibG9iL2Y0NjAxODhlNTgzZjAwMTQ0MDAwYWEwZDhhZGUwODIxOGQ0N2MzYzEvZXh0L25vZGUvcG9seWZpbGxzL3Byb2Nlc3MudHMjTDM0NFxuY29uc3Qgbm9ybWFsaXplRGVub0V4ZWNQYXRoID0gZmlsZSA9PiBpc0Rlbm9FeGVjUGF0aChmaWxlKVxuXHQ/IGZpbGUudG9TdHJpbmcoKVxuXHQ6IGZpbGU7XG5cbmV4cG9ydCBjb25zdCBpc0Rlbm9FeGVjUGF0aCA9IGZpbGUgPT4gdHlwZW9mIGZpbGUgIT09ICdzdHJpbmcnXG5cdCYmIGZpbGVcblx0JiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGZpbGUpID09PSBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyBTYW1lIGJ1dCBhbHNvIGFsbG93cyBvdGhlciB2YWx1ZXMsIGUuZy4gYGJvb2xlYW5gIGZvciB0aGUgYHNoZWxsYCBvcHRpb25cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGaWxlVXJsID0gZmlsZSA9PiBmaWxlIGluc3RhbmNlb2YgVVJMID8gZmlsZVVSTFRvUGF0aChmaWxlKSA6IGZpbGU7XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7c2FmZU5vcm1hbGl6ZUZpbGVVcmx9IGZyb20gJy4uL2FyZ3VtZW50cy9maWxlLXVybC5qcyc7XG5cbi8vIFRoZSBjb21tYW5kIGBhcmd1bWVudHNgIGFuZCBgb3B0aW9uc2AgYXJlIGJvdGggb3B0aW9uYWwuXG4vLyBUaGlzIGFsc28gZG9lcyBiYXNpYyB2YWxpZGF0aW9uIG9uIHRoZW0gYW5kIG9uIHRoZSBjb21tYW5kIGZpbGUuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGFyYW1ldGVycyA9IChyYXdGaWxlLCByYXdBcmd1bWVudHMgPSBbXSwgcmF3T3B0aW9ucyA9IHt9KSA9PiB7XG5cdGNvbnN0IGZpbGVQYXRoID0gc2FmZU5vcm1hbGl6ZUZpbGVVcmwocmF3RmlsZSwgJ0ZpcnN0IGFyZ3VtZW50Jyk7XG5cdGNvbnN0IFtjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zXSA9IGlzUGxhaW5PYmplY3QocmF3QXJndW1lbnRzKVxuXHRcdD8gW1tdLCByYXdBcmd1bWVudHNdXG5cdFx0OiBbcmF3QXJndW1lbnRzLCByYXdPcHRpb25zXTtcblxuXHRpZiAoIUFycmF5LmlzQXJyYXkoY29tbWFuZEFyZ3VtZW50cykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBlaXRoZXIgYW4gYXJyYXkgb2YgYXJndW1lbnRzIG9yIGFuIG9wdGlvbnMgb2JqZWN0OiAke2NvbW1hbmRBcmd1bWVudHN9YCk7XG5cdH1cblxuXHRpZiAoY29tbWFuZEFyZ3VtZW50cy5zb21lKGNvbW1hbmRBcmd1bWVudCA9PiB0eXBlb2YgY29tbWFuZEFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBjb21tYW5kQXJndW1lbnQgIT09IG51bGwpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5nczogJHtjb21tYW5kQXJndW1lbnRzfWApO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZEFyZ3VtZW50cyA9IGNvbW1hbmRBcmd1bWVudHMubWFwKFN0cmluZyk7XG5cdGNvbnN0IG51bGxCeXRlQXJndW1lbnQgPSBub3JtYWxpemVkQXJndW1lbnRzLmZpbmQobm9ybWFsaXplZEFyZ3VtZW50ID0+IG5vcm1hbGl6ZWRBcmd1bWVudC5pbmNsdWRlcygnXFwwJykpO1xuXHRpZiAobnVsbEJ5dGVBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgQXJndW1lbnRzIGNhbm5vdCBjb250YWluIG51bGwgYnl0ZXMgKFwiXFxcXDBcIik6ICR7bnVsbEJ5dGVBcmd1bWVudH1gKTtcblx0fVxuXG5cdGlmICghaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYExhc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBvcHRpb25zIG9iamVjdDogJHtvcHRpb25zfWApO1xuXHR9XG5cblx0cmV0dXJuIFtmaWxlUGF0aCwgbm9ybWFsaXplZEFyZ3VtZW50cywgb3B0aW9uc107XG59O1xuIiwgImltcG9ydCB7U3RyaW5nRGVjb2Rlcn0gZnJvbSAnbm9kZTpzdHJpbmdfZGVjb2Rlcic7XG5cbmNvbnN0IHt0b1N0cmluZzogb2JqZWN0VG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlCdWZmZXIgPSB2YWx1ZSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcblxuLy8gSXMgZWl0aGVyIFVpbnQ4QXJyYXkgb3IgQnVmZmVyXG5leHBvcnQgY29uc3QgaXNVaW50OEFycmF5ID0gdmFsdWUgPT4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJztcblxuZXhwb3J0IGNvbnN0IGJ1ZmZlclRvVWludDhBcnJheSA9IGJ1ZmZlciA9PiBuZXcgVWludDhBcnJheShidWZmZXIuYnVmZmVyLCBidWZmZXIuYnl0ZU9mZnNldCwgYnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG5jb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuY29uc3Qgc3RyaW5nVG9VaW50OEFycmF5ID0gc3RyaW5nID0+IHRleHRFbmNvZGVyLmVuY29kZShzdHJpbmcpO1xuXG5jb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuZXhwb3J0IGNvbnN0IHVpbnQ4QXJyYXlUb1N0cmluZyA9IHVpbnQ4QXJyYXkgPT4gdGV4dERlY29kZXIuZGVjb2RlKHVpbnQ4QXJyYXkpO1xuXG5leHBvcnQgY29uc3Qgam9pblRvU3RyaW5nID0gKHVpbnQ4QXJyYXlzT3JTdHJpbmdzLCBlbmNvZGluZykgPT4ge1xuXHRjb25zdCBzdHJpbmdzID0gdWludDhBcnJheXNUb1N0cmluZ3ModWludDhBcnJheXNPclN0cmluZ3MsIGVuY29kaW5nKTtcblx0cmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG59O1xuXG5jb25zdCB1aW50OEFycmF5c1RvU3RyaW5ncyA9ICh1aW50OEFycmF5c09yU3RyaW5ncywgZW5jb2RpbmcpID0+IHtcblx0aWYgKGVuY29kaW5nID09PSAndXRmOCcgJiYgdWludDhBcnJheXNPclN0cmluZ3MuZXZlcnkodWludDhBcnJheU9yU3RyaW5nID0+IHR5cGVvZiB1aW50OEFycmF5T3JTdHJpbmcgPT09ICdzdHJpbmcnKSkge1xuXHRcdHJldHVybiB1aW50OEFycmF5c09yU3RyaW5ncztcblx0fVxuXG5cdGNvbnN0IGRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihlbmNvZGluZyk7XG5cdGNvbnN0IHN0cmluZ3MgPSB1aW50OEFycmF5c09yU3RyaW5nc1xuXHRcdC5tYXAodWludDhBcnJheU9yU3RyaW5nID0+IHR5cGVvZiB1aW50OEFycmF5T3JTdHJpbmcgPT09ICdzdHJpbmcnXG5cdFx0XHQ/IHN0cmluZ1RvVWludDhBcnJheSh1aW50OEFycmF5T3JTdHJpbmcpXG5cdFx0XHQ6IHVpbnQ4QXJyYXlPclN0cmluZylcblx0XHQubWFwKHVpbnQ4QXJyYXkgPT4gZGVjb2Rlci53cml0ZSh1aW50OEFycmF5KSk7XG5cdGNvbnN0IGZpbmFsU3RyaW5nID0gZGVjb2Rlci5lbmQoKTtcblx0cmV0dXJuIGZpbmFsU3RyaW5nID09PSAnJyA/IHN0cmluZ3MgOiBbLi4uc3RyaW5ncywgZmluYWxTdHJpbmddO1xufTtcblxuZXhwb3J0IGNvbnN0IGpvaW5Ub1VpbnQ4QXJyYXkgPSB1aW50OEFycmF5c09yU3RyaW5ncyA9PiB7XG5cdGlmICh1aW50OEFycmF5c09yU3RyaW5ncy5sZW5ndGggPT09IDEgJiYgaXNVaW50OEFycmF5KHVpbnQ4QXJyYXlzT3JTdHJpbmdzWzBdKSkge1xuXHRcdHJldHVybiB1aW50OEFycmF5c09yU3RyaW5nc1swXTtcblx0fVxuXG5cdHJldHVybiBjb25jYXRVaW50OEFycmF5cyhzdHJpbmdzVG9VaW50OEFycmF5cyh1aW50OEFycmF5c09yU3RyaW5ncykpO1xufTtcblxuY29uc3Qgc3RyaW5nc1RvVWludDhBcnJheXMgPSB1aW50OEFycmF5c09yU3RyaW5ncyA9PiB1aW50OEFycmF5c09yU3RyaW5ncy5tYXAodWludDhBcnJheU9yU3RyaW5nID0+IHR5cGVvZiB1aW50OEFycmF5T3JTdHJpbmcgPT09ICdzdHJpbmcnXG5cdD8gc3RyaW5nVG9VaW50OEFycmF5KHVpbnQ4QXJyYXlPclN0cmluZylcblx0OiB1aW50OEFycmF5T3JTdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgY29uY2F0VWludDhBcnJheXMgPSB1aW50OEFycmF5cyA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGdldEpvaW5MZW5ndGgodWludDhBcnJheXMpKTtcblxuXHRsZXQgaW5kZXggPSAwO1xuXHRmb3IgKGNvbnN0IHVpbnQ4QXJyYXkgb2YgdWludDhBcnJheXMpIHtcblx0XHRyZXN1bHQuc2V0KHVpbnQ4QXJyYXksIGluZGV4KTtcblx0XHRpbmRleCArPSB1aW50OEFycmF5Lmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRKb2luTGVuZ3RoID0gdWludDhBcnJheXMgPT4ge1xuXHRsZXQgam9pbkxlbmd0aCA9IDA7XG5cdGZvciAoY29uc3QgdWludDhBcnJheSBvZiB1aW50OEFycmF5cykge1xuXHRcdGpvaW5MZW5ndGggKz0gdWludDhBcnJheS5sZW5ndGg7XG5cdH1cblxuXHRyZXR1cm4gam9pbkxlbmd0aDtcbn07XG4iLCAiaW1wb3J0IHtDaGlsZFByb2Nlc3N9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtpc1VpbnQ4QXJyYXksIHVpbnQ4QXJyYXlUb1N0cmluZ30gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIHRlbXBsYXRlIHN0cmluZyBzeW50YXggaXMgYmVpbmcgdXNlZFxuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVTdHJpbmcgPSB0ZW1wbGF0ZXMgPT4gQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpICYmIEFycmF5LmlzQXJyYXkodGVtcGxhdGVzLnJhdyk7XG5cbi8vIENvbnZlcnQgZXhlY2FgZmlsZSAuLi5jb21tYW5kQXJndW1lbnRzYCB0byBleGVjYShmaWxlLCBjb21tYW5kQXJndW1lbnRzKVxuZXhwb3J0IGNvbnN0IHBhcnNlVGVtcGxhdGVzID0gKHRlbXBsYXRlcywgZXhwcmVzc2lvbnMpID0+IHtcblx0bGV0IHRva2VucyA9IFtdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCB0ZW1wbGF0ZV0gb2YgdGVtcGxhdGVzLmVudHJpZXMoKSkge1xuXHRcdHRva2VucyA9IHBhcnNlVGVtcGxhdGUoe1xuXHRcdFx0dGVtcGxhdGVzLFxuXHRcdFx0ZXhwcmVzc2lvbnMsXG5cdFx0XHR0b2tlbnMsXG5cdFx0XHRpbmRleCxcblx0XHRcdHRlbXBsYXRlLFxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHRva2Vucy5sZW5ndGggPT09IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUZW1wbGF0ZSBzY3JpcHQgbXVzdCBub3QgYmUgZW1wdHknKTtcblx0fVxuXG5cdGNvbnN0IFtmaWxlLCAuLi5jb21tYW5kQXJndW1lbnRzXSA9IHRva2Vucztcblx0cmV0dXJuIFtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCB7fV07XG59O1xuXG5jb25zdCBwYXJzZVRlbXBsYXRlID0gKHt0ZW1wbGF0ZXMsIGV4cHJlc3Npb25zLCB0b2tlbnMsIGluZGV4LCB0ZW1wbGF0ZX0pID0+IHtcblx0aWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGJhY2tzbGFzaCBzZXF1ZW5jZTogJHt0ZW1wbGF0ZXMucmF3W2luZGV4XX1gKTtcblx0fVxuXG5cdGNvbnN0IHtuZXh0VG9rZW5zLCBsZWFkaW5nV2hpdGVzcGFjZXMsIHRyYWlsaW5nV2hpdGVzcGFjZXN9ID0gc3BsaXRCeVdoaXRlc3BhY2VzKHRlbXBsYXRlLCB0ZW1wbGF0ZXMucmF3W2luZGV4XSk7XG5cdGNvbnN0IG5ld1Rva2VucyA9IGNvbmNhdFRva2Vucyh0b2tlbnMsIG5leHRUb2tlbnMsIGxlYWRpbmdXaGl0ZXNwYWNlcyk7XG5cblx0aWYgKGluZGV4ID09PSBleHByZXNzaW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gbmV3VG9rZW5zO1xuXHR9XG5cblx0Y29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zW2luZGV4XTtcblx0Y29uc3QgZXhwcmVzc2lvblRva2VucyA9IEFycmF5LmlzQXJyYXkoZXhwcmVzc2lvbilcblx0XHQ/IGV4cHJlc3Npb24ubWFwKGV4cHJlc3Npb24gPT4gcGFyc2VFeHByZXNzaW9uKGV4cHJlc3Npb24pKVxuXHRcdDogW3BhcnNlRXhwcmVzc2lvbihleHByZXNzaW9uKV07XG5cdHJldHVybiBjb25jYXRUb2tlbnMobmV3VG9rZW5zLCBleHByZXNzaW9uVG9rZW5zLCB0cmFpbGluZ1doaXRlc3BhY2VzKTtcbn07XG5cbi8vIExpa2UgYHN0cmluZy5zcGxpdCgvWyBcXHRcXHJcXG5dKy8pYCBleGNlcHQgbmV3bGluZXMgYW5kIHRhYnMgYXJlOlxuLy8gIC0gaWdub3JlZCB3aGVuIGlucHV0IGFzIGEgYmFja3NsYXNoIHNlcXVlbmNlIGxpa2U6IGBlY2hvIGZvb1xcbiBiYXJgXG4vLyAgLSBub3QgaWdub3JlZCB3aGVuIGlucHV0IGRpcmVjdGx5XG4vLyBUaGUgb25seSB3YXkgdG8gZGlzdGluZ3Vpc2ggdGhvc2UgaW4gSmF2YVNjcmlwdCBpcyB0byB1c2UgYSB0YWdnZWQgdGVtcGxhdGUgYW5kIGNvbXBhcmU6XG4vLyAgLSB0aGUgZmlyc3QgYXJyYXkgYXJndW1lbnQsIHdoaWNoIGRvZXMgbm90IGVzY2FwZSBiYWNrc2xhc2ggc2VxdWVuY2VzXG4vLyAgLSBpdHMgYHJhd2AgcHJvcGVydHksIHdoaWNoIGVzY2FwZXMgdGhlbVxuY29uc3Qgc3BsaXRCeVdoaXRlc3BhY2VzID0gKHRlbXBsYXRlLCByYXdUZW1wbGF0ZSkgPT4ge1xuXHRpZiAocmF3VGVtcGxhdGUubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtuZXh0VG9rZW5zOiBbXSwgbGVhZGluZ1doaXRlc3BhY2VzOiBmYWxzZSwgdHJhaWxpbmdXaGl0ZXNwYWNlczogZmFsc2V9O1xuXHR9XG5cblx0Y29uc3QgbmV4dFRva2VucyA9IFtdO1xuXHRsZXQgdGVtcGxhdGVTdGFydCA9IDA7XG5cdGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlcyA9IERFTElNSVRFUlMuaGFzKHJhd1RlbXBsYXRlWzBdKTtcblxuXHRmb3IgKFxuXHRcdGxldCB0ZW1wbGF0ZUluZGV4ID0gMCwgcmF3SW5kZXggPSAwO1xuXHRcdHRlbXBsYXRlSW5kZXggPCB0ZW1wbGF0ZS5sZW5ndGg7XG5cdFx0dGVtcGxhdGVJbmRleCArPSAxLCByYXdJbmRleCArPSAxXG5cdCkge1xuXHRcdGNvbnN0IHJhd0NoYXJhY3RlciA9IHJhd1RlbXBsYXRlW3Jhd0luZGV4XTtcblx0XHRpZiAoREVMSU1JVEVSUy5oYXMocmF3Q2hhcmFjdGVyKSkge1xuXHRcdFx0aWYgKHRlbXBsYXRlU3RhcnQgIT09IHRlbXBsYXRlSW5kZXgpIHtcblx0XHRcdFx0bmV4dFRva2Vucy5wdXNoKHRlbXBsYXRlLnNsaWNlKHRlbXBsYXRlU3RhcnQsIHRlbXBsYXRlSW5kZXgpKTtcblx0XHRcdH1cblxuXHRcdFx0dGVtcGxhdGVTdGFydCA9IHRlbXBsYXRlSW5kZXggKyAxO1xuXHRcdH0gZWxzZSBpZiAocmF3Q2hhcmFjdGVyID09PSAnXFxcXCcpIHtcblx0XHRcdGNvbnN0IG5leHRSYXdDaGFyYWN0ZXIgPSByYXdUZW1wbGF0ZVtyYXdJbmRleCArIDFdO1xuXHRcdFx0aWYgKG5leHRSYXdDaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdC8vIEhhbmRsZXMgZXNjYXBlZCBuZXdsaW5lcyBpbiB0ZW1wbGF0ZXNcblx0XHRcdFx0dGVtcGxhdGVJbmRleCAtPSAxO1xuXHRcdFx0XHRyYXdJbmRleCArPSAxO1xuXHRcdFx0fSBlbHNlIGlmIChuZXh0UmF3Q2hhcmFjdGVyID09PSAndScgJiYgcmF3VGVtcGxhdGVbcmF3SW5kZXggKyAyXSA9PT0gJ3snKSB7XG5cdFx0XHRcdHJhd0luZGV4ID0gcmF3VGVtcGxhdGUuaW5kZXhPZignfScsIHJhd0luZGV4ICsgMyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyYXdJbmRleCArPSBFU0NBUEVfTEVOR1RIW25leHRSYXdDaGFyYWN0ZXJdID8/IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlcyA9IHRlbXBsYXRlU3RhcnQgPT09IHRlbXBsYXRlLmxlbmd0aDtcblx0aWYgKCF0cmFpbGluZ1doaXRlc3BhY2VzKSB7XG5cdFx0bmV4dFRva2Vucy5wdXNoKHRlbXBsYXRlLnNsaWNlKHRlbXBsYXRlU3RhcnQpKTtcblx0fVxuXG5cdHJldHVybiB7bmV4dFRva2VucywgbGVhZGluZ1doaXRlc3BhY2VzLCB0cmFpbGluZ1doaXRlc3BhY2VzfTtcbn07XG5cbmNvbnN0IERFTElNSVRFUlMgPSBuZXcgU2V0KFsnICcsICdcXHQnLCAnXFxyJywgJ1xcbiddKTtcblxuLy8gTnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gYmFja3NsYXNoIGVzY2FwZSBzZXF1ZW5jZXM6IFxcMCBcXHhYWCBvciBcXHVYWFhYXG4vLyBcXGNYIGlzIGFsbG93ZWQgaW4gUmVnRXhwcyBidXQgbm90IGluIHN0cmluZ3Ncbi8vIE9jdGFsIHNlcXVlbmNlcyBhcmUgbm90IGFsbG93ZWQgaW4gc3RyaWN0IG1vZGVcbmNvbnN0IEVTQ0FQRV9MRU5HVEggPSB7eDogMywgdTogNX07XG5cbmNvbnN0IGNvbmNhdFRva2VucyA9ICh0b2tlbnMsIG5leHRUb2tlbnMsIGlzU2VwYXJhdGVkKSA9PiBpc1NlcGFyYXRlZFxuXHR8fCB0b2tlbnMubGVuZ3RoID09PSAwXG5cdHx8IG5leHRUb2tlbnMubGVuZ3RoID09PSAwXG5cdD8gWy4uLnRva2VucywgLi4ubmV4dFRva2Vuc11cblx0OiBbXG5cdFx0Li4udG9rZW5zLnNsaWNlKDAsIC0xKSxcblx0XHRgJHt0b2tlbnMuYXQoLTEpfSR7bmV4dFRva2Vuc1swXX1gLFxuXHRcdC4uLm5leHRUb2tlbnMuc2xpY2UoMSksXG5cdF07XG5cbi8vIEhhbmRsZSBgJHtleHByZXNzaW9ufWAgaW5zaWRlIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgc3ludGF4XG5jb25zdCBwYXJzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uID0+IHtcblx0Y29uc3QgdHlwZU9mRXhwcmVzc2lvbiA9IHR5cGVvZiBleHByZXNzaW9uO1xuXG5cdGlmICh0eXBlT2ZFeHByZXNzaW9uID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBleHByZXNzaW9uO1xuXHR9XG5cblx0aWYgKHR5cGVPZkV4cHJlc3Npb24gPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIFN0cmluZyhleHByZXNzaW9uKTtcblx0fVxuXG5cdGlmIChpc1BsYWluT2JqZWN0KGV4cHJlc3Npb24pICYmICgnc3Rkb3V0JyBpbiBleHByZXNzaW9uIHx8ICdpc01heEJ1ZmZlcicgaW4gZXhwcmVzc2lvbikpIHtcblx0XHRyZXR1cm4gZ2V0U3VicHJvY2Vzc1Jlc3VsdChleHByZXNzaW9uKTtcblx0fVxuXG5cdGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgQ2hpbGRQcm9jZXNzIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChleHByZXNzaW9uKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZ1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgc3VicHJvY2VzcyBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uLiBQbGVhc2UgdXNlICR7YXdhaXQgc3VicHJvY2Vzc30gaW5zdGVhZCBvZiAke3N1YnByb2Nlc3N9LicpO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVW5leHBlY3RlZCBcIiR7dHlwZU9mRXhwcmVzc2lvbn1cIiBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uYCk7XG59O1xuXG5jb25zdCBnZXRTdWJwcm9jZXNzUmVzdWx0ID0gKHtzdGRvdXR9KSA9PiB7XG5cdGlmICh0eXBlb2Ygc3Rkb3V0ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBzdGRvdXQ7XG5cdH1cblxuXHRpZiAoaXNVaW50OEFycmF5KHN0ZG91dCkpIHtcblx0XHRyZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKHN0ZG91dCk7XG5cdH1cblxuXHRpZiAoc3Rkb3V0ID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNaXNzaW5nIHJlc3VsdC5zdGRvdXQgaW4gdGVtcGxhdGUgZXhwcmVzc2lvbi4gVGhpcyBpcyBwcm9iYWJseSBkdWUgdG8gdGhlIHByZXZpb3VzIHN1YnByb2Nlc3NcXCcgXCJzdGRvdXRcIiBvcHRpb24uJyk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmV4cGVjdGVkIFwiJHt0eXBlb2Ygc3Rkb3V0fVwiIHN0ZG91dCBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uYCk7XG59O1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBpc1N0YW5kYXJkU3RyZWFtID0gc3RyZWFtID0+IFNUQU5EQVJEX1NUUkVBTVMuaW5jbHVkZXMoc3RyZWFtKTtcbmV4cG9ydCBjb25zdCBTVEFOREFSRF9TVFJFQU1TID0gW3Byb2Nlc3Muc3RkaW4sIHByb2Nlc3Muc3Rkb3V0LCBwcm9jZXNzLnN0ZGVycl07XG5leHBvcnQgY29uc3QgU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTID0gWydzdGRpbicsICdzdGRvdXQnLCAnc3RkZXJyJ107XG5leHBvcnQgY29uc3QgZ2V0U3RyZWFtTmFtZSA9IGZkTnVtYmVyID0+IFNUQU5EQVJEX1NUUkVBTVNfQUxJQVNFU1tmZE51bWJlcl0gPz8gYHN0ZGlvWyR7ZmROdW1iZXJ9XWA7XG4iLCAiaW1wb3J0IHtkZWJ1Z2xvZ30gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQge1NUQU5EQVJEX1NUUkVBTVNfQUxJQVNFU30gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcblxuLy8gU29tZSBvcHRpb25zIGNhbiBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgZm9yIGBzdGRvdXRgL2BzdGRlcnJgL2BmZDNgLlxuLy8gVGhpcyBub3JtYWxpemVzIHRob3NlIHRvIGFycmF5IG9mIHZhbHVlcy5cbi8vIEZvciBleGFtcGxlLCBge3ZlcmJvc2U6IHtzdGRvdXQ6ICdub25lJywgc3RkZXJyOiAnZnVsbCd9fWAgYmVjb21lcyBge3ZlcmJvc2U6IFsnbm9uZScsICdub25lJywgJ2Z1bGwnXX1gXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbnMgPSBvcHRpb25zID0+IHtcblx0Y29uc3Qgb3B0aW9uc0NvcHkgPSB7Li4ub3B0aW9uc307XG5cblx0Zm9yIChjb25zdCBvcHRpb25OYW1lIG9mIEZEX1NQRUNJRklDX09QVElPTlMpIHtcblx0XHRvcHRpb25zQ29weVtvcHRpb25OYW1lXSA9IG5vcm1hbGl6ZUZkU3BlY2lmaWNPcHRpb24ob3B0aW9ucywgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9uc0NvcHk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbiA9IChvcHRpb25zLCBvcHRpb25OYW1lKSA9PiB7XG5cdGNvbnN0IG9wdGlvbkJhc2VBcnJheSA9IEFycmF5LmZyb20oe2xlbmd0aDogZ2V0U3RkaW9MZW5ndGgob3B0aW9ucykgKyAxfSk7XG5cdGNvbnN0IG9wdGlvbkFycmF5ID0gbm9ybWFsaXplRmRTcGVjaWZpY1ZhbHVlKG9wdGlvbnNbb3B0aW9uTmFtZV0sIG9wdGlvbkJhc2VBcnJheSwgb3B0aW9uTmFtZSk7XG5cdHJldHVybiBhZGREZWZhdWx0VmFsdWUob3B0aW9uQXJyYXksIG9wdGlvbk5hbWUpO1xufTtcblxuY29uc3QgZ2V0U3RkaW9MZW5ndGggPSAoe3N0ZGlvfSkgPT4gQXJyYXkuaXNBcnJheShzdGRpbylcblx0PyBNYXRoLm1heChzdGRpby5sZW5ndGgsIFNUQU5EQVJEX1NUUkVBTVNfQUxJQVNFUy5sZW5ndGgpXG5cdDogU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLmxlbmd0aDtcblxuY29uc3Qgbm9ybWFsaXplRmRTcGVjaWZpY1ZhbHVlID0gKG9wdGlvblZhbHVlLCBvcHRpb25BcnJheSwgb3B0aW9uTmFtZSkgPT4gaXNQbGFpbk9iamVjdChvcHRpb25WYWx1ZSlcblx0PyBub3JtYWxpemVPcHRpb25PYmplY3Qob3B0aW9uVmFsdWUsIG9wdGlvbkFycmF5LCBvcHRpb25OYW1lKVxuXHQ6IG9wdGlvbkFycmF5LmZpbGwob3B0aW9uVmFsdWUpO1xuXG5jb25zdCBub3JtYWxpemVPcHRpb25PYmplY3QgPSAob3B0aW9uVmFsdWUsIG9wdGlvbkFycmF5LCBvcHRpb25OYW1lKSA9PiB7XG5cdGZvciAoY29uc3QgZmROYW1lIG9mIE9iamVjdC5rZXlzKG9wdGlvblZhbHVlKS5zb3J0KGNvbXBhcmVGZE5hbWUpKSB7XG5cdFx0Zm9yIChjb25zdCBmZE51bWJlciBvZiBwYXJzZUZkTmFtZShmZE5hbWUsIG9wdGlvbk5hbWUsIG9wdGlvbkFycmF5KSkge1xuXHRcdFx0b3B0aW9uQXJyYXlbZmROdW1iZXJdID0gb3B0aW9uVmFsdWVbZmROYW1lXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9uQXJyYXk7XG59O1xuXG4vLyBFbnN1cmUgcHJpb3JpdHkgb3JkZXIgd2hlbiBzZXR0aW5nIGJvdGggYHN0ZG91dGAvYHN0ZGVycmAsIGBmZDFgL2BmZDJgLCBhbmQgYGFsbGBcbmNvbnN0IGNvbXBhcmVGZE5hbWUgPSAoZmROYW1lQSwgZmROYW1lQikgPT4gZ2V0RmROYW1lT3JkZXIoZmROYW1lQSkgPCBnZXRGZE5hbWVPcmRlcihmZE5hbWVCKSA/IDEgOiAtMTtcblxuY29uc3QgZ2V0RmROYW1lT3JkZXIgPSBmZE5hbWUgPT4ge1xuXHRpZiAoZmROYW1lID09PSAnc3Rkb3V0JyB8fCBmZE5hbWUgPT09ICdzdGRlcnInKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRyZXR1cm4gZmROYW1lID09PSAnYWxsJyA/IDIgOiAxO1xufTtcblxuY29uc3QgcGFyc2VGZE5hbWUgPSAoZmROYW1lLCBvcHRpb25OYW1lLCBvcHRpb25BcnJheSkgPT4ge1xuXHRpZiAoZmROYW1lID09PSAnaXBjJykge1xuXHRcdHJldHVybiBbb3B0aW9uQXJyYXkubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRjb25zdCBmZE51bWJlciA9IHBhcnNlRmQoZmROYW1lKTtcblx0aWYgKGZkTnVtYmVyID09PSB1bmRlZmluZWQgfHwgZmROdW1iZXIgPT09IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7b3B0aW9uTmFtZX0uJHtmZE5hbWV9XCIgaXMgaW52YWxpZC5cbkl0IG11c3QgYmUgXCIke29wdGlvbk5hbWV9LnN0ZG91dFwiLCBcIiR7b3B0aW9uTmFtZX0uc3RkZXJyXCIsIFwiJHtvcHRpb25OYW1lfS5hbGxcIiwgXCIke29wdGlvbk5hbWV9LmlwY1wiLCBvciBcIiR7b3B0aW9uTmFtZX0uZmQzXCIsIFwiJHtvcHRpb25OYW1lfS5mZDRcIiAoYW5kIHNvIG9uKS5gKTtcblx0fVxuXG5cdGlmIChmZE51bWJlciA+PSBvcHRpb25BcnJheS5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7b3B0aW9uTmFtZX0uJHtmZE5hbWV9XCIgaXMgaW52YWxpZDogdGhhdCBmaWxlIGRlc2NyaXB0b3IgZG9lcyBub3QgZXhpc3QuXG5QbGVhc2Ugc2V0IHRoZSBcInN0ZGlvXCIgb3B0aW9uIHRvIGVuc3VyZSB0aGF0IGZpbGUgZGVzY3JpcHRvciBleGlzdHMuYCk7XG5cdH1cblxuXHRyZXR1cm4gZmROdW1iZXIgPT09ICdhbGwnID8gWzEsIDJdIDogW2ZkTnVtYmVyXTtcbn07XG5cbi8vIFVzZSB0aGUgc2FtZSBzeW50YXggZm9yIGZkLXNwZWNpZmljIG9wdGlvbnMgYW5kIHRoZSBgZnJvbWAvYHRvYCBvcHRpb25zXG5leHBvcnQgY29uc3QgcGFyc2VGZCA9IGZkTmFtZSA9PiB7XG5cdGlmIChmZE5hbWUgPT09ICdhbGwnKSB7XG5cdFx0cmV0dXJuIGZkTmFtZTtcblx0fVxuXG5cdGlmIChTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMuaW5jbHVkZXMoZmROYW1lKSkge1xuXHRcdHJldHVybiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMuaW5kZXhPZihmZE5hbWUpO1xuXHR9XG5cblx0Y29uc3QgcmVnZXhwUmVzdWx0ID0gRkRfUkVHRVhQLmV4ZWMoZmROYW1lKTtcblx0aWYgKHJlZ2V4cFJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBOdW1iZXIocmVnZXhwUmVzdWx0WzFdKTtcblx0fVxufTtcblxuY29uc3QgRkRfUkVHRVhQID0gL15mZChcXGQrKSQvO1xuXG5jb25zdCBhZGREZWZhdWx0VmFsdWUgPSAob3B0aW9uQXJyYXksIG9wdGlvbk5hbWUpID0+IG9wdGlvbkFycmF5Lm1hcChvcHRpb25WYWx1ZSA9PiBvcHRpb25WYWx1ZSA9PT0gdW5kZWZpbmVkXG5cdD8gREVGQVVMVF9PUFRJT05TW29wdGlvbk5hbWVdXG5cdDogb3B0aW9uVmFsdWUpO1xuXG4vLyBEZWZhdWx0IHZhbHVlIGZvciB0aGUgYHZlcmJvc2VgIG9wdGlvblxuY29uc3QgdmVyYm9zZURlZmF1bHQgPSBkZWJ1Z2xvZygnZXhlY2EnKS5lbmFibGVkID8gJ2Z1bGwnIDogJ25vbmUnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG5cdGxpbmVzOiBmYWxzZSxcblx0YnVmZmVyOiB0cnVlLFxuXHRtYXhCdWZmZXI6IDEwMDAgKiAxMDAwICogMTAwLFxuXHR2ZXJib3NlOiB2ZXJib3NlRGVmYXVsdCxcblx0c3RyaXBGaW5hbE5ld2xpbmU6IHRydWUsXG59O1xuXG4vLyBMaXN0IG9mIG9wdGlvbnMgd2hpY2ggY2FuIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBmb3IgYHN0ZG91dGAvYHN0ZGVycmBcbmV4cG9ydCBjb25zdCBGRF9TUEVDSUZJQ19PUFRJT05TID0gWydsaW5lcycsICdidWZmZXInLCAnbWF4QnVmZmVyJywgJ3ZlcmJvc2UnLCAnc3RyaXBGaW5hbE5ld2xpbmUnXTtcblxuLy8gUmV0cmlldmUgZmQtc3BlY2lmaWMgb3B0aW9uXG5leHBvcnQgY29uc3QgZ2V0RmRTcGVjaWZpY1ZhbHVlID0gKG9wdGlvbkFycmF5LCBmZE51bWJlcikgPT4gZmROdW1iZXIgPT09ICdpcGMnXG5cdD8gb3B0aW9uQXJyYXkuYXQoLTEpXG5cdDogb3B0aW9uQXJyYXlbZmROdW1iZXJdO1xuIiwgImltcG9ydCB7Z2V0RmRTcGVjaWZpY1ZhbHVlfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuXG4vLyBUaGUgYHZlcmJvc2VgIG9wdGlvbiBjYW4gaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGZvciBgc3Rkb3V0YC9gc3RkZXJyYFxuZXhwb3J0IGNvbnN0IGlzVmVyYm9zZSA9ICh7dmVyYm9zZX0sIGZkTnVtYmVyKSA9PiBnZXRGZFZlcmJvc2UodmVyYm9zZSwgZmROdW1iZXIpICE9PSAnbm9uZSc7XG5cbi8vIFdoZXRoZXIgSVBDIGFuZCBvdXRwdXQgYW5kIGxvZ2dlZFxuZXhwb3J0IGNvbnN0IGlzRnVsbFZlcmJvc2UgPSAoe3ZlcmJvc2V9LCBmZE51bWJlcikgPT4gIVsnbm9uZScsICdzaG9ydCddLmluY2x1ZGVzKGdldEZkVmVyYm9zZSh2ZXJib3NlLCBmZE51bWJlcikpO1xuXG4vLyBUaGUgYHZlcmJvc2VgIG9wdGlvbiBjYW4gYmUgYSBmdW5jdGlvbiB0byBjdXN0b21pemUgbG9nZ2luZ1xuZXhwb3J0IGNvbnN0IGdldFZlcmJvc2VGdW5jdGlvbiA9ICh7dmVyYm9zZX0sIGZkTnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZkVmVyYm9zZSA9IGdldEZkVmVyYm9zZSh2ZXJib3NlLCBmZE51bWJlcik7XG5cdHJldHVybiBpc1ZlcmJvc2VGdW5jdGlvbihmZFZlcmJvc2UpID8gZmRWZXJib3NlIDogdW5kZWZpbmVkO1xufTtcblxuLy8gV2hlbiB1c2luZyBgdmVyYm9zZToge3N0ZG91dCwgc3RkZXJyLCBmZDMsIGlwY31gOlxuLy8gIC0gYHZlcmJvc2Uuc3Rkb3V0fHN0ZGVycnxmZDNgIGlzIHVzZWQgZm9yICdvdXRwdXQnXG4vLyAgLSBgdmVyYm9zZS5pcGNgIGlzIG9ubHkgdXNlZCBmb3IgJ2lwYydcbi8vICAtIGhpZ2hlc3QgYHZlcmJvc2UuKmAgdmFsdWUgaXMgdXNlZCBmb3IgJ2NvbW1hbmQnLCAnZXJyb3InIGFuZCAnZHVyYXRpb24nXG5jb25zdCBnZXRGZFZlcmJvc2UgPSAodmVyYm9zZSwgZmROdW1iZXIpID0+IGZkTnVtYmVyID09PSB1bmRlZmluZWRcblx0PyBnZXRGZEdlbmVyaWNWZXJib3NlKHZlcmJvc2UpXG5cdDogZ2V0RmRTcGVjaWZpY1ZhbHVlKHZlcmJvc2UsIGZkTnVtYmVyKTtcblxuLy8gV2hlbiB1c2luZyBgdmVyYm9zZToge3N0ZG91dCwgc3RkZXJyLCBmZDMsIGlwY31gIGFuZCBsb2dnaW5nIGlzIG5vdCBzcGVjaWZpYyB0byBhIGZpbGUgZGVzY3JpcHRvci5cbi8vIFdlIHRoZW4gdXNlIHRoZSBoaWdoZXN0IGB2ZXJib3NlLipgIHZhbHVlLCB1c2luZyB0aGUgZm9sbG93aW5nIG9yZGVyOlxuLy8gIC0gZnVuY3Rpb24gPiAnZnVsbCcgPiAnc2hvcnQnID4gJ25vbmUnXG4vLyAgLSBpZiBzZXZlcmFsIGZ1bmN0aW9ucyBhcmUgZGVmaW5lZDogc3Rkb3V0ID4gc3RkZXJyID4gZmQzID4gaXBjXG5jb25zdCBnZXRGZEdlbmVyaWNWZXJib3NlID0gdmVyYm9zZSA9PiB2ZXJib3NlLmZpbmQoZmRWZXJib3NlID0+IGlzVmVyYm9zZUZ1bmN0aW9uKGZkVmVyYm9zZSkpXG5cdD8/IFZFUkJPU0VfVkFMVUVTLmZpbmRMYXN0KGZkVmVyYm9zZSA9PiB2ZXJib3NlLmluY2x1ZGVzKGZkVmVyYm9zZSkpO1xuXG4vLyBXaGV0aGVyIHRoZSBgdmVyYm9zZWAgb3B0aW9uIGlzIGN1c3RvbWl6ZWQgdXNpbmcgYSBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IGlzVmVyYm9zZUZ1bmN0aW9uID0gZmRWZXJib3NlID0+IHR5cGVvZiBmZFZlcmJvc2UgPT09ICdmdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBWRVJCT1NFX1ZBTFVFUyA9IFsnbm9uZScsICdzaG9ydCcsICdmdWxsJ107XG4iLCAiaW1wb3J0IHtwbGF0Zm9ybX0gZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7c3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzfSBmcm9tICdub2RlOnV0aWwnO1xuXG4vLyBDb21wdXRlIGByZXN1bHQuY29tbWFuZGAgYW5kIGByZXN1bHQuZXNjYXBlZENvbW1hbmRgXG5leHBvcnQgY29uc3Qgam9pbkNvbW1hbmQgPSAoZmlsZVBhdGgsIHJhd0FyZ3VtZW50cykgPT4ge1xuXHRjb25zdCBmaWxlQW5kQXJndW1lbnRzID0gW2ZpbGVQYXRoLCAuLi5yYXdBcmd1bWVudHNdO1xuXHRjb25zdCBjb21tYW5kID0gZmlsZUFuZEFyZ3VtZW50cy5qb2luKCcgJyk7XG5cdGNvbnN0IGVzY2FwZWRDb21tYW5kID0gZmlsZUFuZEFyZ3VtZW50c1xuXHRcdC5tYXAoZmlsZUFuZEFyZ3VtZW50ID0+IHF1b3RlU3RyaW5nKGVzY2FwZUNvbnRyb2xDaGFyYWN0ZXJzKGZpbGVBbmRBcmd1bWVudCkpKVxuXHRcdC5qb2luKCcgJyk7XG5cdHJldHVybiB7Y29tbWFuZCwgZXNjYXBlZENvbW1hbmR9O1xufTtcblxuLy8gUmVtb3ZlIEFOU0kgc2VxdWVuY2VzIGFuZCBlc2NhcGUgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCBuZXdsaW5lc1xuZXhwb3J0IGNvbnN0IGVzY2FwZUxpbmVzID0gbGluZXMgPT4gc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzKGxpbmVzKVxuXHQuc3BsaXQoJ1xcbicpXG5cdC5tYXAobGluZSA9PiBlc2NhcGVDb250cm9sQ2hhcmFjdGVycyhsaW5lKSlcblx0LmpvaW4oJ1xcbicpO1xuXG5jb25zdCBlc2NhcGVDb250cm9sQ2hhcmFjdGVycyA9IGxpbmUgPT4gbGluZS5yZXBsYWNlQWxsKFNQRUNJQUxfQ0hBUl9SRUdFWFAsIGNoYXJhY3RlciA9PiBlc2NhcGVDb250cm9sQ2hhcmFjdGVyKGNoYXJhY3RlcikpO1xuXG5jb25zdCBlc2NhcGVDb250cm9sQ2hhcmFjdGVyID0gY2hhcmFjdGVyID0+IHtcblx0Y29uc3QgY29tbW9uRXNjYXBlID0gQ09NTU9OX0VTQ0FQRVNbY2hhcmFjdGVyXTtcblx0aWYgKGNvbW1vbkVzY2FwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNvbW1vbkVzY2FwZTtcblx0fVxuXG5cdGNvbnN0IGNvZGVwb2ludCA9IGNoYXJhY3Rlci5jb2RlUG9pbnRBdCgwKTtcblx0Y29uc3QgY29kZXBvaW50SGV4ID0gY29kZXBvaW50LnRvU3RyaW5nKDE2KTtcblx0cmV0dXJuIGNvZGVwb2ludCA8PSBBU1RSQUxfU1RBUlRcblx0XHQ/IGBcXFxcdSR7Y29kZXBvaW50SGV4LnBhZFN0YXJ0KDQsICcwJyl9YFxuXHRcdDogYFxcXFxVJHtjb2RlcG9pbnRIZXh9YDtcbn07XG5cbi8vIENoYXJhY3RlcnMgdGhhdCB3b3VsZCBjcmVhdGUgaXNzdWVzIHdoZW4gcHJpbnRlZCBhcmUgZXNjYXBlZCB1c2luZyB0aGUgXFx1IG9yIFxcVSBub3RhdGlvbi5cbi8vIFRob3NlIGluY2x1ZGUgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCBuZXdsaW5lcy5cbi8vIFRoZSBcXHUgYW5kIFxcVSBub3RhdGlvbiBpcyBCYXNoIHNwZWNpZmljLCBidXQgdGhlcmUgaXMgbm8gd2F5IHRvIGRvIHRoaXMgaW4gYSBzaGVsbC1hZ25vc3RpYyB3YXkuXG4vLyBTb21lIHNoZWxscyBkbyBub3QgZXZlbiBoYXZlIGEgd2F5IHRvIHByaW50IHRob3NlIGNoYXJhY3RlcnMgaW4gYW4gZXNjYXBlZCBmYXNoaW9uLlxuLy8gVGhlcmVmb3JlLCB3ZSBwcmlvcml0aXplIHByaW50aW5nIHRob3NlIHNhZmVseSwgaW5zdGVhZCBvZiBhbGxvd2luZyB0aG9zZSB0byBiZSBjb3B5LXBhc3RlZC5cbi8vIExpc3Qgb2YgVW5pY29kZSBjaGFyYWN0ZXIgY2F0ZWdvcmllczogaHR0cHM6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9pbmRleC5odG1cbmNvbnN0IGdldFNwZWNpYWxDaGFyUmVnRXhwID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIFRoaXMgdGhyb3dzIHdoZW4gdXNpbmcgTm9kZS5qcyB3aXRob3V0IElDVSBzdXBwb3J0LlxuXHRcdC8vIFdoZW4gdXNpbmcgYSBSZWdFeHAgbGl0ZXJhbCwgdGhpcyB3b3VsZCB0aHJvdyBhdCBwYXJzaW5nLXRpbWUsIGluc3RlYWQgb2YgcnVudGltZS5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZ2V4LWxpdGVyYWxzXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoJ1xcXFxwe1NlcGFyYXRvcn18XFxcXHB7T3RoZXJ9JywgJ2d1Jyk7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIFNpbWlsYXIgdG8gdGhlIGFib3ZlIFJlZ0V4cCwgYnV0IHdvcmtzIGV2ZW4gd2hlbiBOb2RlLmpzIGhhcyBiZWVuIGJ1aWx0IHdpdGhvdXQgSUNVIHN1cHBvcnQuXG5cdFx0Ly8gVW5saWtlIHRoZSBhYm92ZSBSZWdFeHAsIGl0IG9ubHkgY292ZXJzIHdoaXRlc3BhY2VzIGFuZCBDMC9DMSBjb250cm9sIGNoYXJhY3RlcnMuXG5cdFx0Ly8gSXQgZG9lcyBub3QgY292ZXIgc29tZSBlZGdlIGNhc2VzLCBzdWNoIGFzIFVuaWNvZGUgcmVzZXJ2ZWQgY2hhcmFjdGVycy5cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9leGVjYS9pc3N1ZXMvMTE0M1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5cdFx0cmV0dXJuIC9bXFxzXFx1MDAwMC1cXHUwMDFGXFx1MDA3Ri1cXHUwMDlGXFx1MDBBRF0vZztcblx0fVxufTtcblxuY29uc3QgU1BFQ0lBTF9DSEFSX1JFR0VYUCA9IGdldFNwZWNpYWxDaGFyUmVnRXhwKCk7XG5cbi8vIEFjY2VwdGVkIGJ5ICQnLi4uJyBpbiBCYXNoLlxuLy8gRXhjbHVkZSBcXGEgXFxlIFxcdiB3aGljaCBhcmUgYWNjZXB0ZWQgaW4gQmFzaCBidXQgbm90IGluIEphdmFTY3JpcHQgKGV4Y2VwdCBcXHYpIGFuZCBKU09OLlxuY29uc3QgQ09NTU9OX0VTQ0FQRVMgPSB7XG5cdCcgJzogJyAnLFxuXHQnXFxiJzogJ1xcXFxiJyxcblx0J1xcZic6ICdcXFxcZicsXG5cdCdcXG4nOiAnXFxcXG4nLFxuXHQnXFxyJzogJ1xcXFxyJyxcblx0J1xcdCc6ICdcXFxcdCcsXG59O1xuXG4vLyBVcCB1bnRpbCB0aGF0IGNvZGVwb2ludCwgXFx1IG5vdGF0aW9uIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgXFxVXG5jb25zdCBBU1RSQUxfU1RBUlQgPSA2NV81MzU7XG5cbi8vIFNvbWUgY2hhcmFjdGVycyBhcmUgc2hlbGwtc3BlY2lmaWMsIGkuZS4gbmVlZCB0byBiZSBlc2NhcGVkIHdoZW4gdGhlIGNvbW1hbmQgaXMgY29weS1wYXN0ZWQgdGhlbiBydW4uXG4vLyBFc2NhcGluZyBpcyBzaGVsbC1zcGVjaWZpYy4gV2UgY2Fubm90IGtub3cgd2hpY2ggc2hlbGwgaXMgdXNlZDogYHByb2Nlc3MucGxhdGZvcm1gIGRldGVjdGlvbiBpcyBub3QgZW5vdWdoLlxuLy8gRm9yIGV4YW1wbGUsIFdpbmRvd3MgdXNlcnMgY291bGQgYmUgdXNpbmcgYGNtZC5leGVgLCBQb3dlcnNoZWxsIG9yIEJhc2ggZm9yIFdpbmRvd3Mgd2hpY2ggYWxsIHVzZSBkaWZmZXJlbnQgZXNjYXBpbmcuXG4vLyBXZSB1c2UgJy4uLicgb24gVW5peCwgd2hpY2ggaXMgUE9TSVggc2hlbGwgY29tcGxpYW50IGFuZCBlc2NhcGUgYWxsIGNoYXJhY3RlcnMgYnV0ICcgc28gdGhpcyBpcyBmYWlybHkgc2FmZS5cbi8vIE9uIFdpbmRvd3MsIHdlIGFzc3VtZSBjbWQuZXhlIGlzIHVzZWQgYW5kIGVzY2FwZSB3aXRoIFwiLi4uXCIsIHdoaWNoIGFsc28gd29ya3Mgd2l0aCBQb3dlcnNoZWxsLlxuY29uc3QgcXVvdGVTdHJpbmcgPSBlc2NhcGVkQXJndW1lbnQgPT4ge1xuXHRpZiAoTk9fRVNDQVBFX1JFR0VYUC50ZXN0KGVzY2FwZWRBcmd1bWVudCkpIHtcblx0XHRyZXR1cm4gZXNjYXBlZEFyZ3VtZW50O1xuXHR9XG5cblx0cmV0dXJuIHBsYXRmb3JtID09PSAnd2luMzInXG5cdFx0PyBgXCIke2VzY2FwZWRBcmd1bWVudC5yZXBsYWNlQWxsKCdcIicsICdcIlwiJyl9XCJgXG5cdFx0OiBgJyR7ZXNjYXBlZEFyZ3VtZW50LnJlcGxhY2VBbGwoJ1xcJycsICdcXCdcXFxcXFwnXFwnJyl9J2A7XG59O1xuXG5jb25zdCBOT19FU0NBUEVfUkVHRVhQID0gL15bXFx3Li8tXSskLztcbiIsICJpbXBvcnQgdHR5IGZyb20gJ25vZGU6dHR5JztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXdhcm5pbmctY29tbWVudHNcbi8vIFRPRE86IFVzZSBhIGJldHRlciBtZXRob2Qgd2hlbiBpdCdzIGFkZGVkIHRvIE5vZGUuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9wdWxsLzQwMjQwKVxuLy8gTG90cyBvZiBvcHRpb25hbHMgaGVyZSB0byBzdXBwb3J0IERlbm8uXG5jb25zdCBoYXNDb2xvcnMgPSB0dHk/LldyaXRlU3RyZWFtPy5wcm90b3R5cGU/Lmhhc0NvbG9ycz8uKCkgPz8gZmFsc2U7XG5cbmNvbnN0IGZvcm1hdCA9IChvcGVuLCBjbG9zZSkgPT4ge1xuXHRpZiAoIWhhc0NvbG9ycykge1xuXHRcdHJldHVybiBpbnB1dCA9PiBpbnB1dDtcblx0fVxuXG5cdGNvbnN0IG9wZW5Db2RlID0gYFxcdTAwMUJbJHtvcGVufW1gO1xuXHRjb25zdCBjbG9zZUNvZGUgPSBgXFx1MDAxQlske2Nsb3NlfW1gO1xuXG5cdHJldHVybiBpbnB1dCA9PiB7XG5cdFx0Y29uc3Qgc3RyaW5nID0gaW5wdXQgKyAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiAtLSBUaGlzIGlzIGZhc3Rlci5cblx0XHRsZXQgaW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZUNvZGUpO1xuXG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0Ly8gTm90ZTogSW50ZW50aW9uYWxseSBub3QgdXNpbmcgc3RyaW5nIGludGVycG9sYXRpb24gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG5cdFx0XHRyZXR1cm4gb3BlbkNvZGUgKyBzdHJpbmcgKyBjbG9zZUNvZGU7XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG5lc3RlZCBjb2xvcnMuXG5cblx0XHQvLyBXZSBjb3VsZCBoYXZlIGRvbmUgdGhpcywgYnV0IGl0J3MgdG9vIHNsb3cgKGFzIG9mIE5vZGUuanMgMjIpLlxuXHRcdC8vIHJldHVybiBvcGVuQ29kZSArIHN0cmluZy5yZXBsYWNlQWxsKGNsb3NlQ29kZSwgKGNsb3NlID09PSAyMiA/IGNsb3NlQ29kZSA6ICcnKSArIG9wZW5Db2RlKSArIGNsb3NlQ29kZTtcblxuXHRcdGxldCByZXN1bHQgPSBvcGVuQ29kZTtcblx0XHRsZXQgbGFzdEluZGV4ID0gMDtcblxuXHRcdC8vIFNHUiAyMiByZXNldHMgYm90aCBib2xkICgxKSBhbmQgZGltICgyKS4gV2hlbiB3ZSBlbmNvdW50ZXIgYSBuZXN0ZWRcblx0XHQvLyBjbG9zZSBmb3Igc3R5bGVzIHRoYXQgdXNlIDIyLCB3ZSBuZWVkIHRvIHJlLW9wZW4gdGhlIG91dGVyIHN0eWxlLlxuXHRcdGNvbnN0IHJlb3Blbk9uTmVzdGVkQ2xvc2UgPSBjbG9zZSA9PT0gMjI7XG5cdFx0Y29uc3QgcmVwbGFjZUNvZGUgPSAocmVvcGVuT25OZXN0ZWRDbG9zZSA/IGNsb3NlQ29kZSA6ICcnKSArIG9wZW5Db2RlO1xuXG5cdFx0d2hpbGUgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0cmVzdWx0ICs9IHN0cmluZy5zbGljZShsYXN0SW5kZXgsIGluZGV4KSArIHJlcGxhY2VDb2RlO1xuXHRcdFx0bGFzdEluZGV4ID0gaW5kZXggKyBjbG9zZUNvZGUubGVuZ3RoO1xuXHRcdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZUNvZGUsIGxhc3RJbmRleCk7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ICs9IHN0cmluZy5zbGljZShsYXN0SW5kZXgpICsgY2xvc2VDb2RlO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldCA9IGZvcm1hdCgwLCAwKTtcbmV4cG9ydCBjb25zdCBib2xkID0gZm9ybWF0KDEsIDIyKTtcbmV4cG9ydCBjb25zdCBkaW0gPSBmb3JtYXQoMiwgMjIpO1xuZXhwb3J0IGNvbnN0IGl0YWxpYyA9IGZvcm1hdCgzLCAyMyk7XG5leHBvcnQgY29uc3QgdW5kZXJsaW5lID0gZm9ybWF0KDQsIDI0KTtcbmV4cG9ydCBjb25zdCBvdmVybGluZSA9IGZvcm1hdCg1MywgNTUpO1xuZXhwb3J0IGNvbnN0IGludmVyc2UgPSBmb3JtYXQoNywgMjcpO1xuZXhwb3J0IGNvbnN0IGhpZGRlbiA9IGZvcm1hdCg4LCAyOCk7XG5leHBvcnQgY29uc3Qgc3RyaWtldGhyb3VnaCA9IGZvcm1hdCg5LCAyOSk7XG5cbmV4cG9ydCBjb25zdCBibGFjayA9IGZvcm1hdCgzMCwgMzkpO1xuZXhwb3J0IGNvbnN0IHJlZCA9IGZvcm1hdCgzMSwgMzkpO1xuZXhwb3J0IGNvbnN0IGdyZWVuID0gZm9ybWF0KDMyLCAzOSk7XG5leHBvcnQgY29uc3QgeWVsbG93ID0gZm9ybWF0KDMzLCAzOSk7XG5leHBvcnQgY29uc3QgYmx1ZSA9IGZvcm1hdCgzNCwgMzkpO1xuZXhwb3J0IGNvbnN0IG1hZ2VudGEgPSBmb3JtYXQoMzUsIDM5KTtcbmV4cG9ydCBjb25zdCBjeWFuID0gZm9ybWF0KDM2LCAzOSk7XG5leHBvcnQgY29uc3Qgd2hpdGUgPSBmb3JtYXQoMzcsIDM5KTtcbmV4cG9ydCBjb25zdCBncmF5ID0gZm9ybWF0KDkwLCAzOSk7XG5cbmV4cG9ydCBjb25zdCBiZ0JsYWNrID0gZm9ybWF0KDQwLCA0OSk7XG5leHBvcnQgY29uc3QgYmdSZWQgPSBmb3JtYXQoNDEsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0dyZWVuID0gZm9ybWF0KDQyLCA0OSk7XG5leHBvcnQgY29uc3QgYmdZZWxsb3cgPSBmb3JtYXQoNDMsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0JsdWUgPSBmb3JtYXQoNDQsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ01hZ2VudGEgPSBmb3JtYXQoNDUsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0N5YW4gPSBmb3JtYXQoNDYsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ1doaXRlID0gZm9ybWF0KDQ3LCA0OSk7XG5leHBvcnQgY29uc3QgYmdHcmF5ID0gZm9ybWF0KDEwMCwgNDkpO1xuXG5leHBvcnQgY29uc3QgcmVkQnJpZ2h0ID0gZm9ybWF0KDkxLCAzOSk7XG5leHBvcnQgY29uc3QgZ3JlZW5CcmlnaHQgPSBmb3JtYXQoOTIsIDM5KTtcbmV4cG9ydCBjb25zdCB5ZWxsb3dCcmlnaHQgPSBmb3JtYXQoOTMsIDM5KTtcbmV4cG9ydCBjb25zdCBibHVlQnJpZ2h0ID0gZm9ybWF0KDk0LCAzOSk7XG5leHBvcnQgY29uc3QgbWFnZW50YUJyaWdodCA9IGZvcm1hdCg5NSwgMzkpO1xuZXhwb3J0IGNvbnN0IGN5YW5CcmlnaHQgPSBmb3JtYXQoOTYsIDM5KTtcbmV4cG9ydCBjb25zdCB3aGl0ZUJyaWdodCA9IGZvcm1hdCg5NywgMzkpO1xuXG5leHBvcnQgY29uc3QgYmdSZWRCcmlnaHQgPSBmb3JtYXQoMTAxLCA0OSk7XG5leHBvcnQgY29uc3QgYmdHcmVlbkJyaWdodCA9IGZvcm1hdCgxMDIsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ1llbGxvd0JyaWdodCA9IGZvcm1hdCgxMDMsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0JsdWVCcmlnaHQgPSBmb3JtYXQoMTA0LCA0OSk7XG5leHBvcnQgY29uc3QgYmdNYWdlbnRhQnJpZ2h0ID0gZm9ybWF0KDEwNSwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnQ3lhbkJyaWdodCA9IGZvcm1hdCgxMDYsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ1doaXRlQnJpZ2h0ID0gZm9ybWF0KDEwNywgNDkpO1xuIiwgImV4cG9ydCAqIGZyb20gJy4vYmFzZS5qcyc7XG5leHBvcnQgKiBhcyBkZWZhdWx0IGZyb20gJy4vYmFzZS5qcyc7XG4iLCAiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcyc7XG5pbXBvcnQge1xuXHRncmF5LFxuXHRib2xkLFxuXHRyZWRCcmlnaHQsXG5cdHllbGxvd0JyaWdodCxcbn0gZnJvbSAneW9jdG9jb2xvcnMnO1xuXG4vLyBEZWZhdWx0IHdoZW4gYHZlcmJvc2VgIGlzIG5vdCBhIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgZGVmYXVsdFZlcmJvc2VGdW5jdGlvbiA9ICh7XG5cdHR5cGUsXG5cdG1lc3NhZ2UsXG5cdHRpbWVzdGFtcCxcblx0cGlwZWQsXG5cdGNvbW1hbmRJZCxcblx0cmVzdWx0OiB7ZmFpbGVkID0gZmFsc2V9ID0ge30sXG5cdG9wdGlvbnM6IHtyZWplY3QgPSB0cnVlfSxcbn0pID0+IHtcblx0Y29uc3QgdGltZXN0YW1wU3RyaW5nID0gc2VyaWFsaXplVGltZXN0YW1wKHRpbWVzdGFtcCk7XG5cdGNvbnN0IGljb24gPSBJQ09OU1t0eXBlXSh7ZmFpbGVkLCByZWplY3QsIHBpcGVkfSk7XG5cdGNvbnN0IGNvbG9yID0gQ09MT1JTW3R5cGVdKHtyZWplY3R9KTtcblx0cmV0dXJuIGAke2dyYXkoYFske3RpbWVzdGFtcFN0cmluZ31dYCl9ICR7Z3JheShgWyR7Y29tbWFuZElkfV1gKX0gJHtjb2xvcihpY29uKX0gJHtjb2xvcihtZXNzYWdlKX1gO1xufTtcblxuLy8gUHJlcGVuZGluZyB0aGUgdGltZXN0YW1wIGFsbG93cyBkZWJ1Z2dpbmcgdGhlIHNsb3cgcGF0aHMgb2YgYSBzdWJwcm9jZXNzXG5jb25zdCBzZXJpYWxpemVUaW1lc3RhbXAgPSB0aW1lc3RhbXAgPT4gYCR7cGFkRmllbGQodGltZXN0YW1wLmdldEhvdXJzKCksIDIpfToke3BhZEZpZWxkKHRpbWVzdGFtcC5nZXRNaW51dGVzKCksIDIpfToke3BhZEZpZWxkKHRpbWVzdGFtcC5nZXRTZWNvbmRzKCksIDIpfS4ke3BhZEZpZWxkKHRpbWVzdGFtcC5nZXRNaWxsaXNlY29uZHMoKSwgMyl9YDtcblxuY29uc3QgcGFkRmllbGQgPSAoZmllbGQsIHBhZGRpbmcpID0+IFN0cmluZyhmaWVsZCkucGFkU3RhcnQocGFkZGluZywgJzAnKTtcblxuY29uc3QgZ2V0RmluYWxJY29uID0gKHtmYWlsZWQsIHJlamVjdH0pID0+IHtcblx0aWYgKCFmYWlsZWQpIHtcblx0XHRyZXR1cm4gZmlndXJlcy50aWNrO1xuXHR9XG5cblx0cmV0dXJuIHJlamVjdCA/IGZpZ3VyZXMuY3Jvc3MgOiBmaWd1cmVzLndhcm5pbmc7XG59O1xuXG5jb25zdCBJQ09OUyA9IHtcblx0Y29tbWFuZDogKHtwaXBlZH0pID0+IHBpcGVkID8gJ3wnIDogJyQnLFxuXHRvdXRwdXQ6ICgpID0+ICcgJyxcblx0aXBjOiAoKSA9PiAnKicsXG5cdGVycm9yOiBnZXRGaW5hbEljb24sXG5cdGR1cmF0aW9uOiBnZXRGaW5hbEljb24sXG59O1xuXG5jb25zdCBpZGVudGl0eSA9IHN0cmluZyA9PiBzdHJpbmc7XG5cbmNvbnN0IENPTE9SUyA9IHtcblx0Y29tbWFuZDogKCkgPT4gYm9sZCxcblx0b3V0cHV0OiAoKSA9PiBpZGVudGl0eSxcblx0aXBjOiAoKSA9PiBpZGVudGl0eSxcblx0ZXJyb3I6ICh7cmVqZWN0fSkgPT4gcmVqZWN0ID8gcmVkQnJpZ2h0IDogeWVsbG93QnJpZ2h0LFxuXHRkdXJhdGlvbjogKCkgPT4gZ3JheSxcbn07XG4iLCAiaW1wb3J0IHtnZXRWZXJib3NlRnVuY3Rpb259IGZyb20gJy4vdmFsdWVzLmpzJztcblxuLy8gQXBwbHkgdGhlIGB2ZXJib3NlYCBmdW5jdGlvbiBvbiBlYWNoIGxpbmVcbmV4cG9ydCBjb25zdCBhcHBseVZlcmJvc2VPbkxpbmVzID0gKHByaW50ZWRMaW5lcywgdmVyYm9zZUluZm8sIGZkTnVtYmVyKSA9PiB7XG5cdGNvbnN0IHZlcmJvc2VGdW5jdGlvbiA9IGdldFZlcmJvc2VGdW5jdGlvbih2ZXJib3NlSW5mbywgZmROdW1iZXIpO1xuXHRyZXR1cm4gcHJpbnRlZExpbmVzXG5cdFx0Lm1hcCgoe3ZlcmJvc2VMaW5lLCB2ZXJib3NlT2JqZWN0fSkgPT4gYXBwbHlWZXJib3NlRnVuY3Rpb24odmVyYm9zZUxpbmUsIHZlcmJvc2VPYmplY3QsIHZlcmJvc2VGdW5jdGlvbikpXG5cdFx0LmZpbHRlcihwcmludGVkTGluZSA9PiBwcmludGVkTGluZSAhPT0gdW5kZWZpbmVkKVxuXHRcdC5tYXAocHJpbnRlZExpbmUgPT4gYXBwZW5kTmV3bGluZShwcmludGVkTGluZSkpXG5cdFx0LmpvaW4oJycpO1xufTtcblxuY29uc3QgYXBwbHlWZXJib3NlRnVuY3Rpb24gPSAodmVyYm9zZUxpbmUsIHZlcmJvc2VPYmplY3QsIHZlcmJvc2VGdW5jdGlvbikgPT4ge1xuXHRpZiAodmVyYm9zZUZ1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gdmVyYm9zZUxpbmU7XG5cdH1cblxuXHRjb25zdCBwcmludGVkTGluZSA9IHZlcmJvc2VGdW5jdGlvbih2ZXJib3NlTGluZSwgdmVyYm9zZU9iamVjdCk7XG5cdGlmICh0eXBlb2YgcHJpbnRlZExpbmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHByaW50ZWRMaW5lO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmROZXdsaW5lID0gcHJpbnRlZExpbmUgPT4gcHJpbnRlZExpbmUuZW5kc1dpdGgoJ1xcbicpXG5cdD8gcHJpbnRlZExpbmVcblx0OiBgJHtwcmludGVkTGluZX1cXG5gO1xuIiwgImltcG9ydCB7aW5zcGVjdH0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7ZXNjYXBlTGluZXN9IGZyb20gJy4uL2FyZ3VtZW50cy9lc2NhcGUuanMnO1xuaW1wb3J0IHtkZWZhdWx0VmVyYm9zZUZ1bmN0aW9ufSBmcm9tICcuL2RlZmF1bHQuanMnO1xuaW1wb3J0IHthcHBseVZlcmJvc2VPbkxpbmVzfSBmcm9tICcuL2N1c3RvbS5qcyc7XG5cbi8vIFRoaXMgcHJpbnRzIG9uIHN0ZGVyci5cbi8vIElmIHRoZSBzdWJwcm9jZXNzIHByaW50cyBvbiBzdGRvdXQgYW5kIGlzIHVzaW5nIGBzdGRvdXQ6ICdpbmhlcml0J2AsXG4vLyB0aGVyZSBpcyBhIGNoYW5jZSBib3RoIHdyaXRlcyB3aWxsIGNvbXBldGUgKGludHJvZHVjaW5nIGEgcmFjZSBjb25kaXRpb24pLlxuLy8gVGhpcyBtZWFucyB0aGVpciByZXNwZWN0aXZlIG9yZGVyIGlzIG5vdCBkZXRlcm1pbmlzdGljLlxuLy8gSW4gcGFydGljdWxhciwgdGhpcyBtZWFucyB0aGUgdmVyYm9zZSBjb21tYW5kIGxpbmVzIG1pZ2h0IGJlIGFmdGVyIHRoZSBzdGFydCBvZiB0aGUgc3VicHJvY2VzcyBvdXRwdXQuXG4vLyBVc2luZyBzeW5jaHJvbm91cyBJL08gZG9lcyBub3Qgc29sdmUgdGhpcyBwcm9ibGVtLlxuLy8gSG93ZXZlciwgdGhpcyBvbmx5IHNlZW1zIHRvIGhhcHBlbiB3aGVuIHRoZSBzdGRvdXQvc3RkZXJyIHRhcmdldFxuLy8gKGUuZy4gYSB0ZXJtaW5hbCkgaXMgYmVpbmcgd3JpdHRlbiB0byBieSBtYW55IHN1YnByb2Nlc3NlcyBhdCBvbmNlLCB3aGljaCBpcyB1bmxpa2VseSBpbiByZWFsIHNjZW5hcmlvcy5cbmV4cG9ydCBjb25zdCB2ZXJib3NlTG9nID0gKHt0eXBlLCB2ZXJib3NlTWVzc2FnZSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvLCByZXN1bHR9KSA9PiB7XG5cdGNvbnN0IHZlcmJvc2VPYmplY3QgPSBnZXRWZXJib3NlT2JqZWN0KHt0eXBlLCByZXN1bHQsIHZlcmJvc2VJbmZvfSk7XG5cdGNvbnN0IHByaW50ZWRMaW5lcyA9IGdldFByaW50ZWRMaW5lcyh2ZXJib3NlTWVzc2FnZSwgdmVyYm9zZU9iamVjdCk7XG5cdGNvbnN0IGZpbmFsTGluZXMgPSBhcHBseVZlcmJvc2VPbkxpbmVzKHByaW50ZWRMaW5lcywgdmVyYm9zZUluZm8sIGZkTnVtYmVyKTtcblx0aWYgKGZpbmFsTGluZXMgIT09ICcnKSB7XG5cdFx0Y29uc29sZS53YXJuKGZpbmFsTGluZXMuc2xpY2UoMCwgLTEpKTtcblx0fVxufTtcblxuY29uc3QgZ2V0VmVyYm9zZU9iamVjdCA9ICh7XG5cdHR5cGUsXG5cdHJlc3VsdCxcblx0dmVyYm9zZUluZm86IHtlc2NhcGVkQ29tbWFuZCwgY29tbWFuZElkLCByYXdPcHRpb25zOiB7cGlwZWQgPSBmYWxzZSwgLi4ub3B0aW9uc319LFxufSkgPT4gKHtcblx0dHlwZSxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdGNvbW1hbmRJZDogYCR7Y29tbWFuZElkfWAsXG5cdHRpbWVzdGFtcDogbmV3IERhdGUoKSxcblx0cGlwZWQsXG5cdHJlc3VsdCxcblx0b3B0aW9ucyxcbn0pO1xuXG5jb25zdCBnZXRQcmludGVkTGluZXMgPSAodmVyYm9zZU1lc3NhZ2UsIHZlcmJvc2VPYmplY3QpID0+IHZlcmJvc2VNZXNzYWdlXG5cdC5zcGxpdCgnXFxuJylcblx0Lm1hcChtZXNzYWdlID0+IGdldFByaW50ZWRMaW5lKHsuLi52ZXJib3NlT2JqZWN0LCBtZXNzYWdlfSkpO1xuXG5jb25zdCBnZXRQcmludGVkTGluZSA9IHZlcmJvc2VPYmplY3QgPT4ge1xuXHRjb25zdCB2ZXJib3NlTGluZSA9IGRlZmF1bHRWZXJib3NlRnVuY3Rpb24odmVyYm9zZU9iamVjdCk7XG5cdHJldHVybiB7dmVyYm9zZUxpbmUsIHZlcmJvc2VPYmplY3R9O1xufTtcblxuLy8gU2VyaWFsaXplIGFueSB0eXBlIHRvIGEgbGluZSBzdHJpbmcsIGZvciBsb2dnaW5nXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplVmVyYm9zZU1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcblx0Y29uc3QgbWVzc2FnZVN0cmluZyA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJyA/IG1lc3NhZ2UgOiBpbnNwZWN0KG1lc3NhZ2UpO1xuXHRjb25zdCBlc2NhcGVkTWVzc2FnZSA9IGVzY2FwZUxpbmVzKG1lc3NhZ2VTdHJpbmcpO1xuXHRyZXR1cm4gZXNjYXBlZE1lc3NhZ2UucmVwbGFjZUFsbCgnXFx0JywgJyAnLnJlcGVhdChUQUJfU0laRSkpO1xufTtcblxuLy8gU2FtZSBhcyBgdXRpbC5pbnNwZWN0KClgXG5jb25zdCBUQUJfU0laRSA9IDI7XG4iLCAiaW1wb3J0IHtpc1ZlcmJvc2V9IGZyb20gJy4vdmFsdWVzLmpzJztcbmltcG9ydCB7dmVyYm9zZUxvZ30gZnJvbSAnLi9sb2cuanMnO1xuXG4vLyBXaGVuIGB2ZXJib3NlYCBpcyBgc2hvcnR8ZnVsbHxjdXN0b21gLCBwcmludCBlYWNoIGNvbW1hbmRcbmV4cG9ydCBjb25zdCBsb2dDb21tYW5kID0gKGVzY2FwZWRDb21tYW5kLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRpZiAoIWlzVmVyYm9zZSh2ZXJib3NlSW5mbykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2ZXJib3NlTG9nKHtcblx0XHR0eXBlOiAnY29tbWFuZCcsXG5cdFx0dmVyYm9zZU1lc3NhZ2U6IGVzY2FwZWRDb21tYW5kLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtpc1ZlcmJvc2UsIFZFUkJPU0VfVkFMVUVTLCBpc1ZlcmJvc2VGdW5jdGlvbn0gZnJvbSAnLi92YWx1ZXMuanMnO1xuXG4vLyBJbmZvcm1hdGlvbiBjb21wdXRlZCBiZWZvcmUgc3Bhd25pbmcsIHVzZWQgYnkgdGhlIGB2ZXJib3NlYCBvcHRpb25cbmV4cG9ydCBjb25zdCBnZXRWZXJib3NlSW5mbyA9ICh2ZXJib3NlLCBlc2NhcGVkQ29tbWFuZCwgcmF3T3B0aW9ucykgPT4ge1xuXHR2YWxpZGF0ZVZlcmJvc2UodmVyYm9zZSk7XG5cdGNvbnN0IGNvbW1hbmRJZCA9IGdldENvbW1hbmRJZCh2ZXJib3NlKTtcblx0cmV0dXJuIHtcblx0XHR2ZXJib3NlLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdGNvbW1hbmRJZCxcblx0XHRyYXdPcHRpb25zLFxuXHR9O1xufTtcblxuY29uc3QgZ2V0Q29tbWFuZElkID0gdmVyYm9zZSA9PiBpc1ZlcmJvc2Uoe3ZlcmJvc2V9KSA/IENPTU1BTkRfSUQrKyA6IHVuZGVmaW5lZDtcblxuLy8gUHJlcGVuZGluZyB0aGUgYHBpZGAgaXMgdXNlZnVsIHdoZW4gbXVsdGlwbGUgY29tbWFuZHMgcHJpbnQgdGhlaXIgb3V0cHV0IGF0IHRoZSBzYW1lIHRpbWUuXG4vLyBIb3dldmVyLCB3ZSBjYW5ub3QgdXNlIHRoZSByZWFsIFBJRCBzaW5jZSB0aGlzIGlzIG5vdCBhdmFpbGFibGUgd2l0aCBgY2hpbGRfcHJvY2Vzcy5zcGF3blN5bmMoKWAuXG4vLyBBbHNvLCB3ZSBjYW5ub3QgdXNlIHRoZSByZWFsIFBJRCBpZiB3ZSB3YW50IHRvIHByaW50IGl0IGJlZm9yZSBgY2hpbGRfcHJvY2Vzcy5zcGF3bigpYCBpcyBydW4uXG4vLyBBcyBhIHBybywgaXQgaXMgc2hvcnRlciB0aGFuIGEgbm9ybWFsIFBJRCBhbmQgbmV2ZXIgcmUtdXNlcyB0aGUgc2FtZSBpZC5cbi8vIEFzIGEgY29uLCBpdCBjYW5ub3QgYmUgdXNlZCB0byBzZW5kIHNpZ25hbHMuXG5sZXQgQ09NTUFORF9JRCA9IDBuO1xuXG5jb25zdCB2YWxpZGF0ZVZlcmJvc2UgPSB2ZXJib3NlID0+IHtcblx0Zm9yIChjb25zdCBmZFZlcmJvc2Ugb2YgdmVyYm9zZSkge1xuXHRcdGlmIChmZFZlcmJvc2UgPT09IGZhbHNlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ2ZXJib3NlOiBmYWxzZVwiIG9wdGlvbiB3YXMgcmVuYW1lZCB0byBcInZlcmJvc2U6IFxcJ25vbmVcXCdcIi4nKTtcblx0XHR9XG5cblx0XHRpZiAoZmRWZXJib3NlID09PSB0cnVlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ2ZXJib3NlOiB0cnVlXCIgb3B0aW9uIHdhcyByZW5hbWVkIHRvIFwidmVyYm9zZTogXFwnc2hvcnRcXCdcIi4nKTtcblx0XHR9XG5cblx0XHRpZiAoIVZFUkJPU0VfVkFMVUVTLmluY2x1ZGVzKGZkVmVyYm9zZSkgJiYgIWlzVmVyYm9zZUZ1bmN0aW9uKGZkVmVyYm9zZSkpIHtcblx0XHRcdGNvbnN0IGFsbG93ZWRWYWx1ZXMgPSBWRVJCT1NFX1ZBTFVFUy5tYXAoYWxsb3dlZFZhbHVlID0+IGAnJHthbGxvd2VkVmFsdWV9J2ApLmpvaW4oJywgJyk7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJ2ZXJib3NlXCIgb3B0aW9uIG11c3Qgbm90IGJlICR7ZmRWZXJib3NlfS4gQWxsb3dlZCB2YWx1ZXMgYXJlOiAke2FsbG93ZWRWYWx1ZXN9IG9yIGEgZnVuY3Rpb24uYCk7XG5cdFx0fVxuXHR9XG59O1xuIiwgImltcG9ydCB7aHJ0aW1lfSBmcm9tICdub2RlOnByb2Nlc3MnO1xuXG4vLyBTdGFydCBjb3VudGluZyB0aW1lIGJlZm9yZSBzcGF3bmluZyB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IGdldFN0YXJ0VGltZSA9ICgpID0+IGhydGltZS5iaWdpbnQoKTtcblxuLy8gQ29tcHV0ZSBkdXJhdGlvbiBhZnRlciB0aGUgc3VicHJvY2VzcyBlbmRlZC5cbi8vIFByaW50ZWQgYnkgdGhlIGB2ZXJib3NlYCBvcHRpb24uXG5leHBvcnQgY29uc3QgZ2V0RHVyYXRpb25NcyA9IHN0YXJ0VGltZSA9PiBOdW1iZXIoaHJ0aW1lLmJpZ2ludCgpIC0gc3RhcnRUaW1lKSAvIDFlNjtcbiIsICJpbXBvcnQge2xvZ0NvbW1hbmR9IGZyb20gJy4uL3ZlcmJvc2Uvc3RhcnQuanMnO1xuaW1wb3J0IHtnZXRWZXJib3NlSW5mb30gZnJvbSAnLi4vdmVyYm9zZS9pbmZvLmpzJztcbmltcG9ydCB7Z2V0U3RhcnRUaW1lfSBmcm9tICcuLi9yZXR1cm4vZHVyYXRpb24uanMnO1xuaW1wb3J0IHtqb2luQ29tbWFuZH0gZnJvbSAnLi9lc2NhcGUuanMnO1xuaW1wb3J0IHtub3JtYWxpemVGZFNwZWNpZmljT3B0aW9ufSBmcm9tICcuL3NwZWNpZmljLmpzJztcblxuLy8gQ29tcHV0ZSBgcmVzdWx0LmNvbW1hbmRgLCBgcmVzdWx0LmVzY2FwZWRDb21tYW5kYCBhbmQgYHZlcmJvc2VgLXJlbGF0ZWQgaW5mb3JtYXRpb25cbmV4cG9ydCBjb25zdCBoYW5kbGVDb21tYW5kID0gKGZpbGVQYXRoLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpID0+IHtcblx0Y29uc3Qgc3RhcnRUaW1lID0gZ2V0U3RhcnRUaW1lKCk7XG5cdGNvbnN0IHtjb21tYW5kLCBlc2NhcGVkQ29tbWFuZH0gPSBqb2luQ29tbWFuZChmaWxlUGF0aCwgcmF3QXJndW1lbnRzKTtcblx0Y29uc3QgdmVyYm9zZSA9IG5vcm1hbGl6ZUZkU3BlY2lmaWNPcHRpb24ocmF3T3B0aW9ucywgJ3ZlcmJvc2UnKTtcblx0Y29uc3QgdmVyYm9zZUluZm8gPSBnZXRWZXJib3NlSW5mbyh2ZXJib3NlLCBlc2NhcGVkQ29tbWFuZCwgey4uLnJhd09wdGlvbnN9KTtcblx0bG9nQ29tbWFuZChlc2NhcGVkQ29tbWFuZCwgdmVyYm9zZUluZm8pO1xuXHRyZXR1cm4ge1xuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9O1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSBcIm1vZHVsZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IG1vZCA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwibm9kZV9tb2R1bGVzLy5wbnBtL2Nyb3NzLXNwYXduQDcuMC42L25vZGVfbW9kdWxlcy9jcm9zcy1zcGF3bi9pbmRleC5qc1wiKSk7XG5cbmV4cG9ydCBjb25zdCBzcGF3biA9IG1vZC5zcGF3bjtcbmV4cG9ydCBjb25zdCBzeW5jID0gbW9kLnN5bmM7XG5leHBvcnQgZGVmYXVsdCBtb2Q7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGF0aEtleShvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGVudiA9IHByb2Nlc3MuZW52LFxuXHRcdHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybVxuXHR9ID0gb3B0aW9ucztcblxuXHRpZiAocGxhdGZvcm0gIT09ICd3aW4zMicpIHtcblx0XHRyZXR1cm4gJ1BBVEgnO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5rZXlzKGVudikucmV2ZXJzZSgpLmZpbmQoa2V5ID0+IGtleS50b1VwcGVyQ2FzZSgpID09PSAnUEFUSCcpIHx8ICdQYXRoJztcbn1cbiIsICJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsYXkoe3NlY29uZHMsIG1pbGxpc2Vjb25kc30gPSB7fSkge1xuXHRsZXQgZHVyYXRpb247XG5cdGlmICh0eXBlb2Ygc2Vjb25kcyA9PT0gJ251bWJlcicpIHtcblx0XHRkdXJhdGlvbiA9IHNlY29uZHMgKiAxMDAwO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaWxsaXNlY29uZHMgPT09ICdudW1iZXInKSB7XG5cdFx0ZHVyYXRpb24gPSBtaWxsaXNlY29uZHM7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYW4gb2JqZWN0IHdpdGggZWl0aGVyIGBzZWNvbmRzYCBvciBgbWlsbGlzZWNvbmRzYC4nKTtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIGR1cmF0aW9uKTtcblx0fSk7XG59XG4iLCAiaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge2V4ZWNGaWxlIGFzIGV4ZWNGaWxlQ2FsbGJhY2ssIGV4ZWNGaWxlU3luYyBhcyBleGVjRmlsZVN5bmNPcmlnaW5hbH0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQge2ZpbGVVUkxUb1BhdGh9IGZyb20gJ25vZGU6dXJsJztcblxuY29uc3QgZXhlY0ZpbGVPcmlnaW5hbCA9IHByb21pc2lmeShleGVjRmlsZUNhbGxiYWNrKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvUGF0aCh1cmxPclBhdGgpIHtcblx0cmV0dXJuIHVybE9yUGF0aCBpbnN0YW5jZW9mIFVSTCA/IGZpbGVVUkxUb1BhdGgodXJsT3JQYXRoKSA6IHVybE9yUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvb3REaXJlY3RvcnkocGF0aElucHV0KSB7XG5cdHJldHVybiBwYXRoLnBhcnNlKHRvUGF0aChwYXRoSW5wdXQpKS5yb290O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VQYXRoVXAoc3RhcnRQYXRoKSB7XG5cdHJldHVybiB7XG5cdFx0KiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRcdGxldCBjdXJyZW50UGF0aCA9IHBhdGgucmVzb2x2ZSh0b1BhdGgoc3RhcnRQYXRoKSk7XG5cdFx0XHRsZXQgcHJldmlvdXNQYXRoO1xuXG5cdFx0XHR3aGlsZSAocHJldmlvdXNQYXRoICE9PSBjdXJyZW50UGF0aCkge1xuXHRcdFx0XHR5aWVsZCBjdXJyZW50UGF0aDtcblx0XHRcdFx0cHJldmlvdXNQYXRoID0gY3VycmVudFBhdGg7XG5cdFx0XHRcdGN1cnJlbnRQYXRoID0gcGF0aC5yZXNvbHZlKGN1cnJlbnRQYXRoLCAnLi4nKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuXG5jb25zdCBURU5fTUVHQUJZVEVTX0lOX0JZVEVTID0gMTAgKiAxMDI0ICogMTAyNDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNGaWxlKGZpbGUsIGFyZ3VtZW50c18sIG9wdGlvbnMgPSB7fSkge1xuXHRyZXR1cm4gZXhlY0ZpbGVPcmlnaW5hbChmaWxlLCBhcmd1bWVudHNfLCB7XG5cdFx0bWF4QnVmZmVyOiBURU5fTUVHQUJZVEVTX0lOX0JZVEVTLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhlY0ZpbGVTeW5jKGZpbGUsIGFyZ3VtZW50c18gPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG5cdHJldHVybiBleGVjRmlsZVN5bmNPcmlnaW5hbChmaWxlLCBhcmd1bWVudHNfLCB7XG5cdFx0bWF4QnVmZmVyOiBURU5fTUVHQUJZVEVTX0lOX0JZVEVTLFxuXHRcdGVuY29kaW5nOiAndXRmOCcsXG5cdFx0c3RkaW86ICdwaXBlJyxcblx0XHQuLi5vcHRpb25zLFxuXHR9KTtcbn1cblxuZXhwb3J0ICogZnJvbSAnLi9kZWZhdWx0LmpzJztcbiIsICJpbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwYXRoS2V5IGZyb20gJ3BhdGgta2V5JztcbmltcG9ydCB7dG9QYXRoLCB0cmF2ZXJzZVBhdGhVcH0gZnJvbSAndW5pY29ybi1tYWdpYyc7XG5cbmV4cG9ydCBjb25zdCBucG1SdW5QYXRoID0gKHtcblx0Y3dkID0gcHJvY2Vzcy5jd2QoKSxcblx0cGF0aDogcGF0aE9wdGlvbiA9IHByb2Nlc3MuZW52W3BhdGhLZXkoKV0sXG5cdHByZWZlckxvY2FsID0gdHJ1ZSxcblx0ZXhlY1BhdGggPSBwcm9jZXNzLmV4ZWNQYXRoLFxuXHRhZGRFeGVjUGF0aCA9IHRydWUsXG59ID0ge30pID0+IHtcblx0Y29uc3QgY3dkUGF0aCA9IHBhdGgucmVzb2x2ZSh0b1BhdGgoY3dkKSk7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRjb25zdCBwYXRoUGFydHMgPSBwYXRoT3B0aW9uLnNwbGl0KHBhdGguZGVsaW1pdGVyKTtcblxuXHRpZiAocHJlZmVyTG9jYWwpIHtcblx0XHRhcHBseVByZWZlckxvY2FsKHJlc3VsdCwgcGF0aFBhcnRzLCBjd2RQYXRoKTtcblx0fVxuXG5cdGlmIChhZGRFeGVjUGF0aCkge1xuXHRcdGFwcGx5RXhlY1BhdGgocmVzdWx0LCBwYXRoUGFydHMsIGV4ZWNQYXRoLCBjd2RQYXRoKTtcblx0fVxuXG5cdHJldHVybiBwYXRoT3B0aW9uID09PSAnJyB8fCBwYXRoT3B0aW9uID09PSBwYXRoLmRlbGltaXRlclxuXHRcdD8gYCR7cmVzdWx0LmpvaW4ocGF0aC5kZWxpbWl0ZXIpfSR7cGF0aE9wdGlvbn1gXG5cdFx0OiBbLi4ucmVzdWx0LCBwYXRoT3B0aW9uXS5qb2luKHBhdGguZGVsaW1pdGVyKTtcbn07XG5cbmNvbnN0IGFwcGx5UHJlZmVyTG9jYWwgPSAocmVzdWx0LCBwYXRoUGFydHMsIGN3ZFBhdGgpID0+IHtcblx0Zm9yIChjb25zdCBkaXJlY3Rvcnkgb2YgdHJhdmVyc2VQYXRoVXAoY3dkUGF0aCkpIHtcblx0XHRjb25zdCBwYXRoUGFydCA9IHBhdGguam9pbihkaXJlY3RvcnksICdub2RlX21vZHVsZXMvLmJpbicpO1xuXHRcdGlmICghcGF0aFBhcnRzLmluY2x1ZGVzKHBhdGhQYXJ0KSkge1xuXHRcdFx0cmVzdWx0LnB1c2gocGF0aFBhcnQpO1xuXHRcdH1cblx0fVxufTtcblxuLy8gRW5zdXJlIHRoZSBydW5uaW5nIGBub2RlYCBiaW5hcnkgaXMgdXNlZFxuY29uc3QgYXBwbHlFeGVjUGF0aCA9IChyZXN1bHQsIHBhdGhQYXJ0cywgZXhlY1BhdGgsIGN3ZFBhdGgpID0+IHtcblx0Y29uc3QgcGF0aFBhcnQgPSBwYXRoLnJlc29sdmUoY3dkUGF0aCwgdG9QYXRoKGV4ZWNQYXRoKSwgJy4uJyk7XG5cdGlmICghcGF0aFBhcnRzLmluY2x1ZGVzKHBhdGhQYXJ0KSkge1xuXHRcdHJlc3VsdC5wdXNoKHBhdGhQYXJ0KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IG5wbVJ1blBhdGhFbnYgPSAoe2VudiA9IHByb2Nlc3MuZW52LCAuLi5vcHRpb25zfSA9IHt9KSA9PiB7XG5cdGVudiA9IHsuLi5lbnZ9O1xuXG5cdGNvbnN0IHBhdGhOYW1lID0gcGF0aEtleSh7ZW52fSk7XG5cdG9wdGlvbnMucGF0aCA9IGVudltwYXRoTmFtZV07XG5cdGVudltwYXRoTmFtZV0gPSBucG1SdW5QYXRoKG9wdGlvbnMpO1xuXG5cdHJldHVybiBlbnY7XG59O1xuIiwgIi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgZmFpbHMsIHRoaXMgaXMgdGhlIGVycm9yIGluc3RhbmNlIGJlaW5nIHJldHVybmVkLlxuLy8gSWYgYW5vdGhlciBlcnJvciBpbnN0YW5jZSBpcyBiZWluZyB0aHJvd24sIGl0IGlzIGtlcHQgYXMgYGVycm9yLmNhdXNlYC5cbmV4cG9ydCBjb25zdCBnZXRGaW5hbEVycm9yID0gKG9yaWdpbmFsRXJyb3IsIG1lc3NhZ2UsIGlzU3luYykgPT4ge1xuXHRjb25zdCBFcnJvckNsYXNzID0gaXNTeW5jID8gRXhlY2FTeW5jRXJyb3IgOiBFeGVjYUVycm9yO1xuXHRjb25zdCBvcHRpb25zID0gb3JpZ2luYWxFcnJvciBpbnN0YW5jZW9mIERpc2NhcmRlZEVycm9yID8ge30gOiB7Y2F1c2U6IG9yaWdpbmFsRXJyb3J9O1xuXHRyZXR1cm4gbmV3IEVycm9yQ2xhc3MobWVzc2FnZSwgb3B0aW9ucyk7XG59O1xuXG4vLyBJbmRpY2F0ZXMgdGhhdCB0aGUgZXJyb3IgaXMgdXNlZCBvbmx5IHRvIGludGVycnVwdCBjb250cm9sIGZsb3csIGJ1dCBub3QgaW4gdGhlIHJldHVybiB2YWx1ZVxuZXhwb3J0IGNsYXNzIERpc2NhcmRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuLy8gUHJvcGVyIHdheSB0byBzZXQgYGVycm9yLm5hbWVgOiBpdCBzaG91bGQgYmUgaW5oZXJpdGVkIGFuZCBub24tZW51bWVyYWJsZVxuY29uc3Qgc2V0RXJyb3JOYW1lID0gKEVycm9yQ2xhc3MsIHZhbHVlKSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckNsYXNzLnByb3RvdHlwZSwgJ25hbWUnLCB7XG5cdFx0dmFsdWUsXG5cdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEVycm9yQ2xhc3MucHJvdG90eXBlLCBleGVjYUVycm9yU3ltYm9sLCB7XG5cdFx0dmFsdWU6IHRydWUsXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdH0pO1xufTtcblxuLy8gVW5saWtlIGBpbnN0YW5jZW9mYCwgdGhpcyB3b3JrcyBhY3Jvc3MgcmVhbG1zXG5leHBvcnQgY29uc3QgaXNFeGVjYUVycm9yID0gZXJyb3IgPT4gaXNFcnJvckluc3RhbmNlKGVycm9yKSAmJiBleGVjYUVycm9yU3ltYm9sIGluIGVycm9yO1xuXG5jb25zdCBleGVjYUVycm9yU3ltYm9sID0gU3ltYm9sKCdpc0V4ZWNhRXJyb3InKTtcblxuZXhwb3J0IGNvbnN0IGlzRXJyb3JJbnN0YW5jZSA9IHZhbHVlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEVycm9yXSc7XG5cbi8vIFdlIHVzZSB0d28gZGlmZmVyZW50IEVycm9yIGNsYXNzZXMgZm9yIGFzeW5jL3N5bmMgbWV0aG9kcyBzaW5jZSB0aGV5IGhhdmUgc2xpZ2h0bHkgZGlmZmVyZW50IHNoYXBlIGFuZCB0eXBlc1xuZXhwb3J0IGNsYXNzIEV4ZWNhRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuc2V0RXJyb3JOYW1lKEV4ZWNhRXJyb3IsIEV4ZWNhRXJyb3IubmFtZSk7XG5cbmV4cG9ydCBjbGFzcyBFeGVjYVN5bmNFcnJvciBleHRlbmRzIEVycm9yIHt9XG5zZXRFcnJvck5hbWUoRXhlY2FTeW5jRXJyb3IsIEV4ZWNhU3luY0Vycm9yLm5hbWUpO1xuIiwgIlxuZXhwb3J0IGNvbnN0IGdldFJlYWx0aW1lU2lnbmFscz0oKT0+e1xuY29uc3QgbGVuZ3RoPVNJR1JUTUFYLVNJR1JUTUlOKzE7XG5yZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RofSxnZXRSZWFsdGltZVNpZ25hbClcbn07XG5cbmNvbnN0IGdldFJlYWx0aW1lU2lnbmFsPSh2YWx1ZSxpbmRleCk9Pih7XG5uYW1lOmBTSUdSVCR7aW5kZXgrMX1gLFxubnVtYmVyOlNJR1JUTUlOK2luZGV4LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkFwcGxpY2F0aW9uLXNwZWNpZmljIHNpZ25hbCAocmVhbHRpbWUpXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0pO1xuXG5jb25zdCBTSUdSVE1JTj0zNDtcbmV4cG9ydCBjb25zdCBTSUdSVE1BWD02NDsiLCAiXG5cbmV4cG9ydCBjb25zdCBTSUdOQUxTPVtcbntcbm5hbWU6XCJTSUdIVVBcIixcbm51bWJlcjoxLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlRlcm1pbmFsIGNsb3NlZFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR0lOVFwiLFxubnVtYmVyOjIsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVXNlciBpbnRlcnJ1cHRpb24gd2l0aCBDVFJMLUNcIixcbnN0YW5kYXJkOlwiYW5zaVwiXG59LFxue1xubmFtZTpcIlNJR1FVSVRcIixcbm51bWJlcjozLFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJVc2VyIGludGVycnVwdGlvbiB3aXRoIENUUkwtXFxcXFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR0lMTFwiLFxubnVtYmVyOjQsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkludmFsaWQgbWFjaGluZSBpbnN0cnVjdGlvblwiLFxuc3RhbmRhcmQ6XCJhbnNpXCJcbn0sXG57XG5uYW1lOlwiU0lHVFJBUFwiLFxubnVtYmVyOjUsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkRlYnVnZ2VyIGJyZWFrcG9pbnRcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdBQlJUXCIsXG5udW1iZXI6NixcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiQWJvcnRlZFwiLFxuc3RhbmRhcmQ6XCJhbnNpXCJcbn0sXG57XG5uYW1lOlwiU0lHSU9UXCIsXG5udW1iZXI6NixcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiQWJvcnRlZFwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdCVVNcIixcbm51bWJlcjo3LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XG5cIkJ1cyBlcnJvciBkdWUgdG8gbWlzYWxpZ25lZCwgbm9uLWV4aXN0aW5nIGFkZHJlc3Mgb3IgcGFnaW5nIGVycm9yXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR0VNVFwiLFxubnVtYmVyOjcsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiQ29tbWFuZCBzaG91bGQgYmUgZW11bGF0ZWQgYnV0IGlzIG5vdCBpbXBsZW1lbnRlZFwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR0ZQRVwiLFxubnVtYmVyOjgsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkZsb2F0aW5nIHBvaW50IGFyaXRobWV0aWMgZXJyb3JcIixcbnN0YW5kYXJkOlwiYW5zaVwiXG59LFxue1xubmFtZTpcIlNJR0tJTExcIixcbm51bWJlcjo5LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkZvcmNlZCB0ZXJtaW5hdGlvblwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiLFxuZm9yY2VkOnRydWVcbn0sXG57XG5uYW1lOlwiU0lHVVNSMVwiLFxubnVtYmVyOjEwLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkFwcGxpY2F0aW9uLXNwZWNpZmljIHNpZ25hbFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR1NFR1ZcIixcbm51bWJlcjoxMSxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiU2VnbWVudGF0aW9uIGZhdWx0XCIsXG5zdGFuZGFyZDpcImFuc2lcIlxufSxcbntcbm5hbWU6XCJTSUdVU1IyXCIsXG5udW1iZXI6MTIsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiQXBwbGljYXRpb24tc3BlY2lmaWMgc2lnbmFsXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHUElQRVwiLFxubnVtYmVyOjEzLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkJyb2tlbiBwaXBlIG9yIHNvY2tldFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR0FMUk1cIixcbm51bWJlcjoxNCxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJUaW1lb3V0IG9yIHRpbWVyXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHVEVSTVwiLFxubnVtYmVyOjE1LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlRlcm1pbmF0aW9uXCIsXG5zdGFuZGFyZDpcImFuc2lcIlxufSxcbntcbm5hbWU6XCJTSUdTVEtGTFRcIixcbm51bWJlcjoxNixcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJTdGFjayBpcyBlbXB0eSBvciBvdmVyZmxvd2VkXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHQ0hMRFwiLFxubnVtYmVyOjE3LFxuYWN0aW9uOlwiaWdub3JlXCIsXG5kZXNjcmlwdGlvbjpcIkNoaWxkIHByb2Nlc3MgdGVybWluYXRlZCwgcGF1c2VkIG9yIHVucGF1c2VkXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHQ0xEXCIsXG5udW1iZXI6MTcsXG5hY3Rpb246XCJpZ25vcmVcIixcbmRlc2NyaXB0aW9uOlwiQ2hpbGQgcHJvY2VzcyB0ZXJtaW5hdGVkLCBwYXVzZWQgb3IgdW5wYXVzZWRcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdDT05UXCIsXG5udW1iZXI6MTgsXG5hY3Rpb246XCJ1bnBhdXNlXCIsXG5kZXNjcmlwdGlvbjpcIlVucGF1c2VkXCIsXG5zdGFuZGFyZDpcInBvc2l4XCIsXG5mb3JjZWQ6dHJ1ZVxufSxcbntcbm5hbWU6XCJTSUdTVE9QXCIsXG5udW1iZXI6MTksXG5hY3Rpb246XCJwYXVzZVwiLFxuZGVzY3JpcHRpb246XCJQYXVzZWRcIixcbnN0YW5kYXJkOlwicG9zaXhcIixcbmZvcmNlZDp0cnVlXG59LFxue1xubmFtZTpcIlNJR1RTVFBcIixcbm51bWJlcjoyMCxcbmFjdGlvbjpcInBhdXNlXCIsXG5kZXNjcmlwdGlvbjpcIlBhdXNlZCB1c2luZyBDVFJMLVogb3IgXFxcInN1c3BlbmRcXFwiXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHVFRJTlwiLFxubnVtYmVyOjIxLFxuYWN0aW9uOlwicGF1c2VcIixcbmRlc2NyaXB0aW9uOlwiQmFja2dyb3VuZCBwcm9jZXNzIGNhbm5vdCByZWFkIHRlcm1pbmFsIGlucHV0XCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHQlJFQUtcIixcbm51bWJlcjoyMSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJVc2VyIGludGVycnVwdGlvbiB3aXRoIENUUkwtQlJFQUtcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdUVE9VXCIsXG5udW1iZXI6MjIsXG5hY3Rpb246XCJwYXVzZVwiLFxuZGVzY3JpcHRpb246XCJCYWNrZ3JvdW5kIHByb2Nlc3MgY2Fubm90IHdyaXRlIHRvIHRlcm1pbmFsIG91dHB1dFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR1VSR1wiLFxubnVtYmVyOjIzLFxuYWN0aW9uOlwiaWdub3JlXCIsXG5kZXNjcmlwdGlvbjpcIlNvY2tldCByZWNlaXZlZCBvdXQtb2YtYmFuZCBkYXRhXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR1hDUFVcIixcbm51bWJlcjoyNCxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiUHJvY2VzcyB0aW1lZCBvdXRcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHWEZTWlwiLFxubnVtYmVyOjI1LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJGaWxlIHRvbyBiaWdcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHVlRBTFJNXCIsXG5udW1iZXI6MjYsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVGltZW91dCBvciB0aW1lclwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdQUk9GXCIsXG5udW1iZXI6MjcsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVGltZW91dCBvciB0aW1lclwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdXSU5DSFwiLFxubnVtYmVyOjI4LFxuYWN0aW9uOlwiaWdub3JlXCIsXG5kZXNjcmlwdGlvbjpcIlRlcm1pbmFsIHdpbmRvdyBzaXplIGNoYW5nZWRcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHSU9cIixcbm51bWJlcjoyOSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJJL08gaXMgYXZhaWxhYmxlXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHUE9MTFwiLFxubnVtYmVyOjI5LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIldhdGNoZWQgZXZlbnRcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdJTkZPXCIsXG5udW1iZXI6MjksXG5hY3Rpb246XCJpZ25vcmVcIixcbmRlc2NyaXB0aW9uOlwiUmVxdWVzdCBmb3IgcHJvY2VzcyBpbmZvcm1hdGlvblwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR1BXUlwiLFxubnVtYmVyOjMwLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkRldmljZSBydW5uaW5nIG91dCBvZiBwb3dlclwiLFxuc3RhbmRhcmQ6XCJzeXN0ZW12XCJcbn0sXG57XG5uYW1lOlwiU0lHU1lTXCIsXG5udW1iZXI6MzEsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkludmFsaWQgc3lzdGVtIGNhbGxcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdVTlVTRURcIixcbm51bWJlcjozMSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJJbnZhbGlkIHN5c3RlbSBjYWxsXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn1dOyIsICJpbXBvcnR7Y29uc3RhbnRzfWZyb21cIm5vZGU6b3NcIjtcblxuaW1wb3J0e1NJR05BTFN9ZnJvbVwiLi9jb3JlLmpzXCI7XG5pbXBvcnR7Z2V0UmVhbHRpbWVTaWduYWxzfWZyb21cIi4vcmVhbHRpbWUuanNcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRTaWduYWxzPSgpPT57XG5jb25zdCByZWFsdGltZVNpZ25hbHM9Z2V0UmVhbHRpbWVTaWduYWxzKCk7XG5jb25zdCBzaWduYWxzPVsuLi5TSUdOQUxTLC4uLnJlYWx0aW1lU2lnbmFsc10ubWFwKG5vcm1hbGl6ZVNpZ25hbCk7XG5yZXR1cm4gc2lnbmFsc1xufTtcblxuXG5cblxuXG5cblxuY29uc3Qgbm9ybWFsaXplU2lnbmFsPSh7XG5uYW1lLFxubnVtYmVyOmRlZmF1bHROdW1iZXIsXG5kZXNjcmlwdGlvbixcbmFjdGlvbixcbmZvcmNlZD1mYWxzZSxcbnN0YW5kYXJkXG59KT0+e1xuY29uc3R7XG5zaWduYWxzOntbbmFtZV06Y29uc3RhbnRTaWduYWx9XG59PWNvbnN0YW50cztcbmNvbnN0IHN1cHBvcnRlZD1jb25zdGFudFNpZ25hbCE9PXVuZGVmaW5lZDtcbmNvbnN0IG51bWJlcj1zdXBwb3J0ZWQ/Y29uc3RhbnRTaWduYWw6ZGVmYXVsdE51bWJlcjtcbnJldHVybntuYW1lLG51bWJlcixkZXNjcmlwdGlvbixzdXBwb3J0ZWQsYWN0aW9uLGZvcmNlZCxzdGFuZGFyZH1cbn07IiwgImltcG9ydHtjb25zdGFudHN9ZnJvbVwibm9kZTpvc1wiO1xuXG5pbXBvcnR7U0lHUlRNQVh9ZnJvbVwiLi9yZWFsdGltZS5qc1wiO1xuaW1wb3J0e2dldFNpZ25hbHN9ZnJvbVwiLi9zaWduYWxzLmpzXCI7XG5cblxuXG5jb25zdCBnZXRTaWduYWxzQnlOYW1lPSgpPT57XG5jb25zdCBzaWduYWxzPWdldFNpZ25hbHMoKTtcbnJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc2lnbmFscy5tYXAoZ2V0U2lnbmFsQnlOYW1lKSlcbn07XG5cbmNvbnN0IGdldFNpZ25hbEJ5TmFtZT0oe1xubmFtZSxcbm51bWJlcixcbmRlc2NyaXB0aW9uLFxuc3VwcG9ydGVkLFxuYWN0aW9uLFxuZm9yY2VkLFxuc3RhbmRhcmRcbn0pPT5bbmFtZSx7bmFtZSxudW1iZXIsZGVzY3JpcHRpb24sc3VwcG9ydGVkLGFjdGlvbixmb3JjZWQsc3RhbmRhcmR9XTtcblxuZXhwb3J0IGNvbnN0IHNpZ25hbHNCeU5hbWU9Z2V0U2lnbmFsc0J5TmFtZSgpO1xuXG5cblxuXG5jb25zdCBnZXRTaWduYWxzQnlOdW1iZXI9KCk9PntcbmNvbnN0IHNpZ25hbHM9Z2V0U2lnbmFscygpO1xuY29uc3QgbGVuZ3RoPVNJR1JUTUFYKzE7XG5jb25zdCBzaWduYWxzQT1BcnJheS5mcm9tKHtsZW5ndGh9LCh2YWx1ZSxudW1iZXIpPT5cbmdldFNpZ25hbEJ5TnVtYmVyKG51bWJlcixzaWduYWxzKVxuKTtcbnJldHVybiBPYmplY3QuYXNzaWduKHt9LC4uLnNpZ25hbHNBKVxufTtcblxuY29uc3QgZ2V0U2lnbmFsQnlOdW1iZXI9KG51bWJlcixzaWduYWxzKT0+e1xuY29uc3Qgc2lnbmFsPWZpbmRTaWduYWxCeU51bWJlcihudW1iZXIsc2lnbmFscyk7XG5cbmlmKHNpZ25hbD09PXVuZGVmaW5lZCl7XG5yZXR1cm57fVxufVxuXG5jb25zdHtuYW1lLGRlc2NyaXB0aW9uLHN1cHBvcnRlZCxhY3Rpb24sZm9yY2VkLHN0YW5kYXJkfT1zaWduYWw7XG5yZXR1cm57XG5bbnVtYmVyXTp7XG5uYW1lLFxubnVtYmVyLFxuZGVzY3JpcHRpb24sXG5zdXBwb3J0ZWQsXG5hY3Rpb24sXG5mb3JjZWQsXG5zdGFuZGFyZFxufVxufVxufTtcblxuXG5cbmNvbnN0IGZpbmRTaWduYWxCeU51bWJlcj0obnVtYmVyLHNpZ25hbHMpPT57XG5jb25zdCBzaWduYWw9c2lnbmFscy5maW5kKCh7bmFtZX0pPT5jb25zdGFudHMuc2lnbmFsc1tuYW1lXT09PW51bWJlcik7XG5cbmlmKHNpZ25hbCE9PXVuZGVmaW5lZCl7XG5yZXR1cm4gc2lnbmFsXG59XG5cbnJldHVybiBzaWduYWxzLmZpbmQoKHNpZ25hbEEpPT5zaWduYWxBLm51bWJlcj09PW51bWJlcilcbn07XG5cbmV4cG9ydCBjb25zdCBzaWduYWxzQnlOdW1iZXI9Z2V0U2lnbmFsc0J5TnVtYmVyKCk7IiwgImltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICdub2RlOm9zJztcbmltcG9ydCB7c2lnbmFsc0J5TmFtZX0gZnJvbSAnaHVtYW4tc2lnbmFscyc7XG5cbi8vIE5vcm1hbGl6ZSBzaWduYWxzIGZvciBjb21wYXJpc29uIHB1cnBvc2UuXG4vLyBBbHNvIHZhbGlkYXRlIHRoZSBzaWduYWwgZXhpc3RzLlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUtpbGxTaWduYWwgPSBraWxsU2lnbmFsID0+IHtcblx0Y29uc3Qgb3B0aW9uTmFtZSA9ICdvcHRpb24gYGtpbGxTaWduYWxgJztcblx0aWYgKGtpbGxTaWduYWwgPT09IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkICR7b3B0aW9uTmFtZX06IDAgY2Fubm90IGJlIHVzZWQuYCk7XG5cdH1cblxuXHRyZXR1cm4gbm9ybWFsaXplU2lnbmFsKGtpbGxTaWduYWwsIG9wdGlvbk5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVNpZ25hbEFyZ3VtZW50ID0gc2lnbmFsID0+IHNpZ25hbCA9PT0gMFxuXHQ/IHNpZ25hbFxuXHQ6IG5vcm1hbGl6ZVNpZ25hbChzaWduYWwsICdgc3VicHJvY2Vzcy5raWxsKClgXFwncyBhcmd1bWVudCcpO1xuXG5jb25zdCBub3JtYWxpemVTaWduYWwgPSAoc2lnbmFsTmFtZU9ySW50ZWdlciwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoTnVtYmVyLmlzSW50ZWdlcihzaWduYWxOYW1lT3JJbnRlZ2VyKSkge1xuXHRcdHJldHVybiBub3JtYWxpemVTaWduYWxJbnRlZ2VyKHNpZ25hbE5hbWVPckludGVnZXIsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBzaWduYWxOYW1lT3JJbnRlZ2VyID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBub3JtYWxpemVTaWduYWxOYW1lKHNpZ25hbE5hbWVPckludGVnZXIsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCAke29wdGlvbk5hbWV9ICR7U3RyaW5nKHNpZ25hbE5hbWVPckludGVnZXIpfTogaXQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBpbnRlZ2VyLlxcbiR7Z2V0QXZhaWxhYmxlU2lnbmFscygpfWApO1xufTtcblxuY29uc3Qgbm9ybWFsaXplU2lnbmFsSW50ZWdlciA9IChzaWduYWxJbnRlZ2VyLCBvcHRpb25OYW1lKSA9PiB7XG5cdGlmIChzaWduYWxzSW50ZWdlclRvTmFtZS5oYXMoc2lnbmFsSW50ZWdlcikpIHtcblx0XHRyZXR1cm4gc2lnbmFsc0ludGVnZXJUb05hbWUuZ2V0KHNpZ25hbEludGVnZXIpO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCAke29wdGlvbk5hbWV9ICR7c2lnbmFsSW50ZWdlcn06IHRoaXMgc2lnbmFsIGludGVnZXIgZG9lcyBub3QgZXhpc3QuXFxuJHtnZXRBdmFpbGFibGVTaWduYWxzKCl9YCk7XG59O1xuXG5jb25zdCBnZXRTaWduYWxzSW50ZWdlclRvTmFtZSA9ICgpID0+IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoY29uc3RhbnRzLnNpZ25hbHMpXG5cdC5yZXZlcnNlKClcblx0Lm1hcCgoW3NpZ25hbE5hbWUsIHNpZ25hbEludGVnZXJdKSA9PiBbc2lnbmFsSW50ZWdlciwgc2lnbmFsTmFtZV0pKTtcblxuY29uc3Qgc2lnbmFsc0ludGVnZXJUb05hbWUgPSBnZXRTaWduYWxzSW50ZWdlclRvTmFtZSgpO1xuXG5jb25zdCBub3JtYWxpemVTaWduYWxOYW1lID0gKHNpZ25hbE5hbWUsIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKHNpZ25hbE5hbWUgaW4gY29uc3RhbnRzLnNpZ25hbHMpIHtcblx0XHRyZXR1cm4gc2lnbmFsTmFtZTtcblx0fVxuXG5cdGlmIChzaWduYWxOYW1lLnRvVXBwZXJDYXNlKCkgaW4gY29uc3RhbnRzLnNpZ25hbHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkICR7b3B0aW9uTmFtZX0gJyR7c2lnbmFsTmFtZX0nOiBwbGVhc2UgcmVuYW1lIGl0IHRvICcke3NpZ25hbE5hbWUudG9VcHBlckNhc2UoKX0nLmApO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCAke29wdGlvbk5hbWV9ICcke3NpZ25hbE5hbWV9JzogdGhpcyBzaWduYWwgbmFtZSBkb2VzIG5vdCBleGlzdC5cXG4ke2dldEF2YWlsYWJsZVNpZ25hbHMoKX1gKTtcbn07XG5cbmNvbnN0IGdldEF2YWlsYWJsZVNpZ25hbHMgPSAoKSA9PiBgQXZhaWxhYmxlIHNpZ25hbCBuYW1lczogJHtnZXRBdmFpbGFibGVTaWduYWxOYW1lcygpfS5cbkF2YWlsYWJsZSBzaWduYWwgbnVtYmVyczogJHtnZXRBdmFpbGFibGVTaWduYWxJbnRlZ2VycygpfS5gO1xuXG5jb25zdCBnZXRBdmFpbGFibGVTaWduYWxOYW1lcyA9ICgpID0+IE9iamVjdC5rZXlzKGNvbnN0YW50cy5zaWduYWxzKVxuXHQuc29ydCgpXG5cdC5tYXAoc2lnbmFsTmFtZSA9PiBgJyR7c2lnbmFsTmFtZX0nYClcblx0LmpvaW4oJywgJyk7XG5cbmNvbnN0IGdldEF2YWlsYWJsZVNpZ25hbEludGVnZXJzID0gKCkgPT4gWy4uLm5ldyBTZXQoT2JqZWN0LnZhbHVlcyhjb25zdGFudHMuc2lnbmFscylcblx0LnNvcnQoKHNpZ25hbEludGVnZXIsIHNpZ25hbEludGVnZXJUd28pID0+IHNpZ25hbEludGVnZXIgLSBzaWduYWxJbnRlZ2VyVHdvKSldXG5cdC5qb2luKCcsICcpO1xuXG4vLyBIdW1hbi1mcmllbmRseSBkZXNjcmlwdGlvbiBvZiBhIHNpZ25hbFxuZXhwb3J0IGNvbnN0IGdldFNpZ25hbERlc2NyaXB0aW9uID0gc2lnbmFsID0+IHNpZ25hbHNCeU5hbWVbc2lnbmFsXS5kZXNjcmlwdGlvbjtcbiIsICJpbXBvcnQge3NldFRpbWVvdXR9IGZyb20gJ25vZGU6dGltZXJzL3Byb21pc2VzJztcbmltcG9ydCB7aXNFcnJvckluc3RhbmNlfSBmcm9tICcuLi9yZXR1cm4vZmluYWwtZXJyb3IuanMnO1xuaW1wb3J0IHtub3JtYWxpemVTaWduYWxBcmd1bWVudH0gZnJvbSAnLi9zaWduYWwuanMnO1xuXG4vLyBOb3JtYWxpemUgdGhlIGBmb3JjZUtpbGxBZnRlckRlbGF5YCBvcHRpb25cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGb3JjZUtpbGxBZnRlckRlbGF5ID0gZm9yY2VLaWxsQWZ0ZXJEZWxheSA9PiB7XG5cdGlmIChmb3JjZUtpbGxBZnRlckRlbGF5ID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmb3JjZUtpbGxBZnRlckRlbGF5O1xuXHR9XG5cblx0aWYgKGZvcmNlS2lsbEFmdGVyRGVsYXkgPT09IHRydWUpIHtcblx0XHRyZXR1cm4gREVGQVVMVF9GT1JDRV9LSUxMX1RJTUVPVVQ7XG5cdH1cblxuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShmb3JjZUtpbGxBZnRlckRlbGF5KSB8fCBmb3JjZUtpbGxBZnRlckRlbGF5IDwgMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHRoZSBcXGBmb3JjZUtpbGxBZnRlckRlbGF5XFxgIG9wdGlvbiB0byBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBnb3QgXFxgJHtmb3JjZUtpbGxBZnRlckRlbGF5fVxcYCAoJHt0eXBlb2YgZm9yY2VLaWxsQWZ0ZXJEZWxheX0pYCk7XG5cdH1cblxuXHRyZXR1cm4gZm9yY2VLaWxsQWZ0ZXJEZWxheTtcbn07XG5cbmNvbnN0IERFRkFVTFRfRk9SQ0VfS0lMTF9USU1FT1VUID0gMTAwMCAqIDU7XG5cbi8vIE1vbmtleS1wYXRjaGVzIGBzdWJwcm9jZXNzLmtpbGwoKWAgdG8gYWRkIGBmb3JjZUtpbGxBZnRlckRlbGF5YCBiZWhhdmlvciBhbmQgYC5raWxsKGVycm9yKWBcbmV4cG9ydCBjb25zdCBzdWJwcm9jZXNzS2lsbCA9IChcblx0e2tpbGwsIG9wdGlvbnM6IHtmb3JjZUtpbGxBZnRlckRlbGF5LCBraWxsU2lnbmFsfSwgb25JbnRlcm5hbEVycm9yLCBjb250ZXh0LCBjb250cm9sbGVyfSxcblx0c2lnbmFsT3JFcnJvcixcblx0ZXJyb3JBcmd1bWVudCxcbikgPT4ge1xuXHRjb25zdCB7c2lnbmFsLCBlcnJvcn0gPSBwYXJzZUtpbGxBcmd1bWVudHMoc2lnbmFsT3JFcnJvciwgZXJyb3JBcmd1bWVudCwga2lsbFNpZ25hbCk7XG5cdGVtaXRLaWxsRXJyb3IoZXJyb3IsIG9uSW50ZXJuYWxFcnJvcik7XG5cdGNvbnN0IGtpbGxSZXN1bHQgPSBraWxsKHNpZ25hbCk7XG5cdHNldEtpbGxUaW1lb3V0KHtcblx0XHRraWxsLFxuXHRcdHNpZ25hbCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGtpbGxTaWduYWwsXG5cdFx0a2lsbFJlc3VsdCxcblx0XHRjb250ZXh0LFxuXHRcdGNvbnRyb2xsZXIsXG5cdH0pO1xuXHRyZXR1cm4ga2lsbFJlc3VsdDtcbn07XG5cbmNvbnN0IHBhcnNlS2lsbEFyZ3VtZW50cyA9IChzaWduYWxPckVycm9yLCBlcnJvckFyZ3VtZW50LCBraWxsU2lnbmFsKSA9PiB7XG5cdGNvbnN0IFtzaWduYWwgPSBraWxsU2lnbmFsLCBlcnJvcl0gPSBpc0Vycm9ySW5zdGFuY2Uoc2lnbmFsT3JFcnJvcilcblx0XHQ/IFt1bmRlZmluZWQsIHNpZ25hbE9yRXJyb3JdXG5cdFx0OiBbc2lnbmFsT3JFcnJvciwgZXJyb3JBcmd1bWVudF07XG5cblx0aWYgKHR5cGVvZiBzaWduYWwgIT09ICdzdHJpbmcnICYmICFOdW1iZXIuaXNJbnRlZ2VyKHNpZ25hbCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBlcnJvciBpbnN0YW5jZSBvciBhIHNpZ25hbCBuYW1lIHN0cmluZy9pbnRlZ2VyOiAke1N0cmluZyhzaWduYWwpfWApO1xuXHR9XG5cblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQgJiYgIWlzRXJyb3JJbnN0YW5jZShlcnJvcikpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG9wdGlvbmFsLiBJZiBzcGVjaWZpZWQsIGl0IG11c3QgYmUgYW4gZXJyb3IgaW5zdGFuY2U6ICR7ZXJyb3J9YCk7XG5cdH1cblxuXHRyZXR1cm4ge3NpZ25hbDogbm9ybWFsaXplU2lnbmFsQXJndW1lbnQoc2lnbmFsKSwgZXJyb3J9O1xufTtcblxuLy8gRmFpbHMgcmlnaHQgYXdheSB3aGVuIGNhbGxpbmcgYHN1YnByb2Nlc3Mua2lsbChlcnJvcilgLlxuLy8gRG9lcyBub3Qgd2FpdCBmb3IgYWN0dWFsIHNpZ25hbCB0ZXJtaW5hdGlvbi5cbi8vIFVzZXMgYSBkZWZlcnJlZCBwcm9taXNlIGluc3RlYWQgb2YgdGhlIGBlcnJvcmAgZXZlbnQgb24gdGhlIHN1YnByb2Nlc3MsIGFzIHRoaXMgaXMgbGVzcyBpbnRydXNpdmUuXG5jb25zdCBlbWl0S2lsbEVycm9yID0gKGVycm9yLCBvbkludGVybmFsRXJyb3IpID0+IHtcblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRvbkludGVybmFsRXJyb3IucmVqZWN0KGVycm9yKTtcblx0fVxufTtcblxuY29uc3Qgc2V0S2lsbFRpbWVvdXQgPSBhc3luYyAoe2tpbGwsIHNpZ25hbCwgZm9yY2VLaWxsQWZ0ZXJEZWxheSwga2lsbFNpZ25hbCwga2lsbFJlc3VsdCwgY29udGV4dCwgY29udHJvbGxlcn0pID0+IHtcblx0aWYgKHNpZ25hbCA9PT0ga2lsbFNpZ25hbCAmJiBraWxsUmVzdWx0KSB7XG5cdFx0a2lsbE9uVGltZW91dCh7XG5cdFx0XHRraWxsLFxuXHRcdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRcdGNvbnRleHQsXG5cdFx0XHRjb250cm9sbGVyU2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcblx0XHR9KTtcblx0fVxufTtcblxuLy8gRm9yY2VmdWxseSB0ZXJtaW5hdGUgYSBzdWJwcm9jZXNzIGFmdGVyIGEgdGltZW91dFxuZXhwb3J0IGNvbnN0IGtpbGxPblRpbWVvdXQgPSBhc3luYyAoe2tpbGwsIGZvcmNlS2lsbEFmdGVyRGVsYXksIGNvbnRleHQsIGNvbnRyb2xsZXJTaWduYWx9KSA9PiB7XG5cdGlmIChmb3JjZUtpbGxBZnRlckRlbGF5ID09PSBmYWxzZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgc2V0VGltZW91dChmb3JjZUtpbGxBZnRlckRlbGF5LCB1bmRlZmluZWQsIHtzaWduYWw6IGNvbnRyb2xsZXJTaWduYWx9KTtcblx0XHRpZiAoa2lsbCgnU0lHS0lMTCcpKSB7XG5cdFx0XHRjb250ZXh0LmlzRm9yY2VmdWxseVRlcm1pbmF0ZWQgPz89IHRydWU7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xuIiwgImltcG9ydCB7b25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuXG4vLyBDb21iaW5lcyBgdXRpbC5hYm9ydGVkKClgIGFuZCBgZXZlbnRzLmFkZEFib3J0TGlzdGVuZXIoKWA6IHByb21pc2UtYmFzZWQgYW5kIGNsZWFuZWQgdXAgd2l0aCBhIHN0b3Agc2lnbmFsXG5leHBvcnQgY29uc3Qgb25BYm9ydGVkU2lnbmFsID0gYXN5bmMgKG1haW5TaWduYWwsIHN0b3BTaWduYWwpID0+IHtcblx0aWYgKCFtYWluU2lnbmFsLmFib3J0ZWQpIHtcblx0XHRhd2FpdCBvbmNlKG1haW5TaWduYWwsICdhYm9ydCcsIHtzaWduYWw6IHN0b3BTaWduYWx9KTtcblx0fVxufTtcbiIsICJpbXBvcnQge29uQWJvcnRlZFNpZ25hbH0gZnJvbSAnLi4vdXRpbHMvYWJvcnQtc2lnbmFsLmpzJztcblxuLy8gVmFsaWRhdGUgdGhlIGBjYW5jZWxTaWduYWxgIG9wdGlvblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQ2FuY2VsU2lnbmFsID0gKHtjYW5jZWxTaWduYWx9KSA9PiB7XG5cdGlmIChjYW5jZWxTaWduYWwgIT09IHVuZGVmaW5lZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2FuY2VsU2lnbmFsKSAhPT0gJ1tvYmplY3QgQWJvcnRTaWduYWxdJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgVGhlIFxcYGNhbmNlbFNpZ25hbFxcYCBvcHRpb24gbXVzdCBiZSBhbiBBYm9ydFNpZ25hbDogJHtTdHJpbmcoY2FuY2VsU2lnbmFsKX1gKTtcblx0fVxufTtcblxuLy8gVGVybWluYXRlIHRoZSBzdWJwcm9jZXNzIHdoZW4gYWJvcnRpbmcgdGhlIGBjYW5jZWxTaWduYWxgIG9wdGlvbiBhbmQgYGdyYWNlZnVsU2lnbmFsYCBpcyBgZmFsc2VgXG5leHBvcnQgY29uc3QgdGhyb3dPbkNhbmNlbCA9ICh7c3VicHJvY2VzcywgY2FuY2VsU2lnbmFsLCBncmFjZWZ1bENhbmNlbCwgY29udGV4dCwgY29udHJvbGxlcn0pID0+IGNhbmNlbFNpZ25hbCA9PT0gdW5kZWZpbmVkIHx8IGdyYWNlZnVsQ2FuY2VsXG5cdD8gW11cblx0OiBbdGVybWluYXRlT25DYW5jZWwoc3VicHJvY2VzcywgY2FuY2VsU2lnbmFsLCBjb250ZXh0LCBjb250cm9sbGVyKV07XG5cbmNvbnN0IHRlcm1pbmF0ZU9uQ2FuY2VsID0gYXN5bmMgKHN1YnByb2Nlc3MsIGNhbmNlbFNpZ25hbCwgY29udGV4dCwge3NpZ25hbH0pID0+IHtcblx0YXdhaXQgb25BYm9ydGVkU2lnbmFsKGNhbmNlbFNpZ25hbCwgc2lnbmFsKTtcblx0Y29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA/Pz0gJ2NhbmNlbCc7XG5cdHN1YnByb2Nlc3Mua2lsbCgpO1xuXHR0aHJvdyBjYW5jZWxTaWduYWwucmVhc29uO1xufTtcbiIsICIvLyBWYWxpZGF0ZSB0aGUgSVBDIGNoYW5uZWwgaXMgY29ubmVjdGVkIGJlZm9yZSByZWNlaXZpbmcvc2VuZGluZyBtZXNzYWdlc1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlSXBjTWV0aG9kID0gKHttZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIGlwYywgaXNDb25uZWN0ZWR9KSA9PiB7XG5cdHZhbGlkYXRlSXBjT3B0aW9uKG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgaXBjKTtcblx0dmFsaWRhdGVDb25uZWN0aW9uKG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgaXNDb25uZWN0ZWQpO1xufTtcblxuLy8gQmV0dGVyIGVycm9yIG1lc3NhZ2Ugd2hlbiBmb3JnZXR0aW5nIHRvIHNldCBgaXBjOiB0cnVlYCBhbmQgdXNpbmcgdGhlIElQQyBtZXRob2RzXG5jb25zdCB2YWxpZGF0ZUlwY09wdGlvbiA9IChtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIGlwYykgPT4ge1xuXHRpZiAoIWlwYykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzcyl9IGNhbiBvbmx5IGJlIHVzZWQgaWYgdGhlIFxcYGlwY1xcYCBvcHRpb24gaXMgXFxgdHJ1ZVxcYC5gKTtcblx0fVxufTtcblxuLy8gQmV0dGVyIGVycm9yIG1lc3NhZ2Ugd2hlbiBvbmUgcHJvY2VzcyBkb2VzIG5vdCBzZW5kL3JlY2VpdmUgbWVzc2FnZXMgb25jZSB0aGUgb3RoZXIgcHJvY2VzcyBoYXMgZGlzY29ubmVjdGVkLlxuLy8gVGhpcyBhbHNvIG1ha2VzIGl0IGNsZWFyIHRoYXQgYW55IGJ1ZmZlcmVkIG1lc3NhZ2VzIGFyZSBsb3N0IG9uY2UgZWl0aGVyIHByb2Nlc3MgaGFzIGRpc2Nvbm5lY3RlZC5cbi8vIEFsc28gd2hlbiBhYm9ydGluZyBgY2FuY2VsU2lnbmFsYCBhZnRlciBkaXNjb25uZWN0aW5nIHRoZSBJUEMuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDb25uZWN0aW9uID0gKG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgaXNDb25uZWN0ZWQpID0+IHtcblx0aWYgKCFpc0Nvbm5lY3RlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzcyl9IGNhbm5vdCBiZSB1c2VkOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9IGhhcyBhbHJlYWR5IGV4aXRlZCBvciBkaXNjb25uZWN0ZWQuYCk7XG5cdH1cbn07XG5cbi8vIFdoZW4gYGdldE9uZU1lc3NhZ2UoKWAgY291bGQgbm90IGNvbXBsZXRlIGR1ZSB0byBhbiBlYXJseSBkaXNjb25uZWN0aW9uXG5leHBvcnQgY29uc3QgdGhyb3dPbkVhcmx5RGlzY29ubmVjdCA9IGlzU3VicHJvY2VzcyA9PiB7XG5cdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKCdnZXRPbmVNZXNzYWdlJywgaXNTdWJwcm9jZXNzKX0gY291bGQgbm90IGNvbXBsZXRlOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9IGV4aXRlZCBvciBkaXNjb25uZWN0ZWQuYCk7XG59O1xuXG4vLyBXaGVuIGJvdGggcHJvY2Vzc2VzIHVzZSBgc2VuZE1lc3NhZ2UoKWAgd2l0aCBgc3RyaWN0YCBhdCB0aGUgc2FtZSB0aW1lXG5leHBvcnQgY29uc3QgdGhyb3dPblN0cmljdERlYWRsb2NrRXJyb3IgPSBpc1N1YnByb2Nlc3MgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZSgnc2VuZE1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MpfSBmYWlsZWQ6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0gaXMgc2VuZGluZyBhIG1lc3NhZ2UgdG9vLCBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0byBpbmNvbWluZyBtZXNzYWdlcy5cblRoaXMgY2FuIGJlIGZpeGVkIGJ5IGJvdGggc2VuZGluZyBhIG1lc3NhZ2UgYW5kIGxpc3RlbmluZyB0byBpbmNvbWluZyBtZXNzYWdlcyBhdCB0aGUgc2FtZSB0aW1lOlxuXG5jb25zdCBbcmVjZWl2ZWRNZXNzYWdlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0JHtnZXRNZXRob2ROYW1lKCdnZXRPbmVNZXNzYWdlJywgaXNTdWJwcm9jZXNzKX0sXG5cdCR7Z2V0TWV0aG9kTmFtZSgnc2VuZE1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MsICdtZXNzYWdlLCB7c3RyaWN0OiB0cnVlfScpfSxcbl0pO2ApO1xufTtcblxuLy8gV2hlbiB0aGUgb3RoZXIgcHJvY2VzcyB1c2VkIGBzdHJpY3RgIGJ1dCB0aGUgY3VycmVudCBwcm9jZXNzIGhhZCBJL08gZXJyb3IgY2FsbGluZyBgc2VuZE1lc3NhZ2UoKWAgZm9yIHRoZSByZXNwb25zZVxuZXhwb3J0IGNvbnN0IGdldFN0cmljdFJlc3BvbnNlRXJyb3IgPSAoZXJyb3IsIGlzU3VicHJvY2VzcykgPT4gbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUoJ3NlbmRNZXNzYWdlJywgaXNTdWJwcm9jZXNzKX0gZmFpbGVkIHdoZW4gc2VuZGluZyBhbiBhY2tub3dsZWRnbWVudCByZXNwb25zZSB0byB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9LmAsIHtjYXVzZTogZXJyb3J9KTtcblxuLy8gV2hlbiB1c2luZyBgc3RyaWN0YCBidXQgdGhlIG90aGVyIHByb2Nlc3Mgd2FzIG5vdCBsaXN0ZW5pbmcgZm9yIG1lc3NhZ2VzXG5leHBvcnQgY29uc3QgdGhyb3dPbk1pc3NpbmdTdHJpY3QgPSBpc1N1YnByb2Nlc3MgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZSgnc2VuZE1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MpfSBmYWlsZWQ6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0gaXMgbm90IGxpc3RlbmluZyB0byBpbmNvbWluZyBtZXNzYWdlcy5gKTtcbn07XG5cbi8vIFdoZW4gdXNpbmcgYHN0cmljdGAgYnV0IHRoZSBvdGhlciBwcm9jZXNzIGRpc2Nvbm5lY3RlZCBiZWZvcmUgcmVjZWl2aW5nIHRoZSBtZXNzYWdlXG5leHBvcnQgY29uc3QgdGhyb3dPblN0cmljdERpc2Nvbm5lY3QgPSBpc1N1YnByb2Nlc3MgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZSgnc2VuZE1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MpfSBmYWlsZWQ6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0gZXhpdGVkIHdpdGhvdXQgbGlzdGVuaW5nIHRvIGluY29taW5nIG1lc3NhZ2VzLmApO1xufTtcblxuLy8gV2hlbiB0aGUgY3VycmVudCBwcm9jZXNzIGRpc2Nvbm5lY3RzIHdoaWxlIHRoZSBzdWJwcm9jZXNzIGlzIGxpc3RlbmluZyB0byBgY2FuY2VsU2lnbmFsYFxuZXhwb3J0IGNvbnN0IGdldEFib3J0RGlzY29ubmVjdEVycm9yID0gKCkgPT4gbmV3IEVycm9yKGBcXGBjYW5jZWxTaWduYWxcXGAgYWJvcnRlZDogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZSh0cnVlKX0gZGlzY29ubmVjdGVkLmApO1xuXG4vLyBXaGVuIHRoZSBzdWJwcm9jZXNzIHVzZXMgYGNhbmNlbFNpZ25hbGAgYnV0IG5vdCB0aGUgY3VycmVudCBwcm9jZXNzXG5leHBvcnQgY29uc3QgdGhyb3dPbk1pc3NpbmdQYXJlbnQgPSAoKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignYGdldENhbmNlbFNpZ25hbCgpYCBjYW5ub3QgYmUgdXNlZCB3aXRob3V0IHNldHRpbmcgdGhlIGBjYW5jZWxTaWduYWxgIHN1YnByb2Nlc3Mgb3B0aW9uLicpO1xufTtcblxuLy8gRVBJUEUgY2FuIGhhcHBlbiB3aGVuIHNlbmRpbmcgYSBtZXNzYWdlIHRvIGEgc3VicHJvY2VzcyB0aGF0IGlzIGNsb3NpbmcgYnV0IGhhcyBub3QgZGlzY29ubmVjdGVkIHlldFxuZXhwb3J0IGNvbnN0IGhhbmRsZUVwaXBlRXJyb3IgPSAoe2Vycm9yLCBtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3N9KSA9PiB7XG5cdGlmIChlcnJvci5jb2RlID09PSAnRVBJUEUnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzKX0gY2Fubm90IGJlIHVzZWQ6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0gaXMgZGlzY29ubmVjdGluZy5gLCB7Y2F1c2U6IGVycm9yfSk7XG5cdH1cbn07XG5cbi8vIEJldHRlciBlcnJvciBtZXNzYWdlIHdoZW4gc2VuZGluZyBtZXNzYWdlcyB3aGljaCBjYW5ub3QgYmUgc2VyaWFsaXplZC5cbi8vIFdvcmtzIHdpdGggYm90aCBgc2VyaWFsaXphdGlvbjogJ2FkdmFuY2VkJ2AgYW5kIGBzZXJpYWxpemF0aW9uOiAnanNvbidgLlxuZXhwb3J0IGNvbnN0IGhhbmRsZVNlcmlhbGl6YXRpb25FcnJvciA9ICh7ZXJyb3IsIG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgbWVzc2FnZX0pID0+IHtcblx0aWYgKGlzU2VyaWFsaXphdGlvbkVycm9yKGVycm9yKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzcyl9J3MgYXJndW1lbnQgdHlwZSBpcyBpbnZhbGlkOiB0aGUgbWVzc2FnZSBjYW5ub3QgYmUgc2VyaWFsaXplZDogJHtTdHJpbmcobWVzc2FnZSl9LmAsIHtjYXVzZTogZXJyb3J9KTtcblx0fVxufTtcblxuY29uc3QgaXNTZXJpYWxpemF0aW9uRXJyb3IgPSAoe2NvZGUsIG1lc3NhZ2V9KSA9PiBTRVJJQUxJWkFUSU9OX0VSUk9SX0NPREVTLmhhcyhjb2RlKVxuXHR8fCBTRVJJQUxJWkFUSU9OX0VSUk9SX01FU1NBR0VTLnNvbWUoc2VyaWFsaXphdGlvbkVycm9yTWVzc2FnZSA9PiBtZXNzYWdlLmluY2x1ZGVzKHNlcmlhbGl6YXRpb25FcnJvck1lc3NhZ2UpKTtcblxuLy8gYGVycm9yLmNvZGVgIHNldCBieSBOb2RlLmpzIHdoZW4gaXQgZmFpbGVkIHRvIHNlcmlhbGl6ZSB0aGUgbWVzc2FnZVxuY29uc3QgU0VSSUFMSVpBVElPTl9FUlJPUl9DT0RFUyA9IG5ldyBTZXQoW1xuXHQvLyBNZXNzYWdlIGlzIGB1bmRlZmluZWRgXG5cdCdFUlJfTUlTU0lOR19BUkdTJyxcblx0Ly8gTWVzc2FnZSBpcyBhIGZ1bmN0aW9uLCBhIGJpZ2ludCwgYSBzeW1ib2xcblx0J0VSUl9JTlZBTElEX0FSR19UWVBFJyxcbl0pO1xuXG4vLyBgZXJyb3IubWVzc2FnZWAgc2V0IGJ5IE5vZGUuanMgd2hlbiBpdCBmYWlsZWQgdG8gc2VyaWFsaXplIHRoZSBtZXNzYWdlXG5jb25zdCBTRVJJQUxJWkFUSU9OX0VSUk9SX01FU1NBR0VTID0gW1xuXHQvLyBNZXNzYWdlIGlzIGEgcHJvbWlzZSBvciBhIHByb3h5LCB3aXRoIGBzZXJpYWxpemF0aW9uOiAnYWR2YW5jZWQnYFxuXHQnY291bGQgbm90IGJlIGNsb25lZCcsXG5cdC8vIE1lc3NhZ2UgaGFzIGN5Y2xlcywgd2l0aCBgc2VyaWFsaXphdGlvbjogJ2pzb24nYFxuXHQnY2lyY3VsYXIgc3RydWN0dXJlJyxcblx0Ly8gTWVzc2FnZSBoYXMgY3ljbGVzIGluc2lkZSB0b0pTT04oKSwgd2l0aCBgc2VyaWFsaXphdGlvbjogJ2pzb24nYFxuXHQnY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkJyxcbl07XG5cbmNvbnN0IGdldE1ldGhvZE5hbWUgPSAobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBwYXJhbWV0ZXJzID0gJycpID0+IG1ldGhvZE5hbWUgPT09ICdjYW5jZWxTaWduYWwnXG5cdD8gJ2BjYW5jZWxTaWduYWxgXFwncyBgY29udHJvbGxlci5hYm9ydCgpYCdcblx0OiBgJHtnZXROYW1lc3BhY2VOYW1lKGlzU3VicHJvY2Vzcyl9JHttZXRob2ROYW1lfSgke3BhcmFtZXRlcnN9KWA7XG5cbmNvbnN0IGdldE5hbWVzcGFjZU5hbWUgPSBpc1N1YnByb2Nlc3MgPT4gaXNTdWJwcm9jZXNzID8gJycgOiAnc3VicHJvY2Vzcy4nO1xuXG5jb25zdCBnZXRPdGhlclByb2Nlc3NOYW1lID0gaXNTdWJwcm9jZXNzID0+IGlzU3VicHJvY2VzcyA/ICdwYXJlbnQgcHJvY2VzcycgOiAnc3VicHJvY2Vzcyc7XG5cbi8vIFdoZW4gYW55IGVycm9yIGFyaXNlcywgd2UgZGlzY29ubmVjdCB0aGUgSVBDLlxuLy8gT3RoZXJ3aXNlLCBpdCBpcyBsaWtlbHkgdGhhdCBvbmUgb2YgdGhlIHByb2Nlc3NlcyB3aWxsIHN0b3Agc2VuZGluZy9yZWNlaXZpbmcgbWVzc2FnZXMuXG4vLyBUaGlzIHdvdWxkIGxlYXZlIHRoZSBvdGhlciBwcm9jZXNzIGhhbmdpbmcuXG5leHBvcnQgY29uc3QgZGlzY29ubmVjdCA9IGFueVByb2Nlc3MgPT4ge1xuXHRpZiAoYW55UHJvY2Vzcy5jb25uZWN0ZWQpIHtcblx0XHRhbnlQcm9jZXNzLmRpc2Nvbm5lY3QoKTtcblx0fVxufTtcbiIsICJleHBvcnQgY29uc3QgY3JlYXRlRGVmZXJyZWQgPSAoKSA9PiB7XG5cdGNvbnN0IG1ldGhvZHMgPSB7fTtcblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRPYmplY3QuYXNzaWduKG1ldGhvZHMsIHtyZXNvbHZlLCByZWplY3R9KTtcblx0fSk7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHByb21pc2UsIG1ldGhvZHMpO1xufTtcbiIsICJpbXBvcnQge3BhcnNlRmR9IGZyb20gJy4vc3BlY2lmaWMuanMnO1xuXG4vLyBSZXRyaWV2ZSBzdHJlYW0gdGFyZ2V0ZWQgYnkgdGhlIGB0b2Agb3B0aW9uXG5leHBvcnQgY29uc3QgZ2V0VG9TdHJlYW0gPSAoZGVzdGluYXRpb24sIHRvID0gJ3N0ZGluJykgPT4ge1xuXHRjb25zdCBpc1dyaXRhYmxlID0gdHJ1ZTtcblx0Y29uc3Qge29wdGlvbnMsIGZpbGVEZXNjcmlwdG9yc30gPSBTVUJQUk9DRVNTX09QVElPTlMuZ2V0KGRlc3RpbmF0aW9uKTtcblx0Y29uc3QgZmROdW1iZXIgPSBnZXRGZE51bWJlcihmaWxlRGVzY3JpcHRvcnMsIHRvLCBpc1dyaXRhYmxlKTtcblx0Y29uc3QgZGVzdGluYXRpb25TdHJlYW0gPSBkZXN0aW5hdGlvbi5zdGRpb1tmZE51bWJlcl07XG5cblx0aWYgKGRlc3RpbmF0aW9uU3RyZWFtID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihnZXRJbnZhbGlkU3RkaW9PcHRpb25NZXNzYWdlKGZkTnVtYmVyLCB0bywgb3B0aW9ucywgaXNXcml0YWJsZSkpO1xuXHR9XG5cblx0cmV0dXJuIGRlc3RpbmF0aW9uU3RyZWFtO1xufTtcblxuLy8gUmV0cmlldmUgc3RyZWFtIHRhcmdldGVkIGJ5IHRoZSBgZnJvbWAgb3B0aW9uXG5leHBvcnQgY29uc3QgZ2V0RnJvbVN0cmVhbSA9IChzb3VyY2UsIGZyb20gPSAnc3Rkb3V0JykgPT4ge1xuXHRjb25zdCBpc1dyaXRhYmxlID0gZmFsc2U7XG5cdGNvbnN0IHtvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnN9ID0gU1VCUFJPQ0VTU19PUFRJT05TLmdldChzb3VyY2UpO1xuXHRjb25zdCBmZE51bWJlciA9IGdldEZkTnVtYmVyKGZpbGVEZXNjcmlwdG9ycywgZnJvbSwgaXNXcml0YWJsZSk7XG5cdGNvbnN0IHNvdXJjZVN0cmVhbSA9IGZkTnVtYmVyID09PSAnYWxsJyA/IHNvdXJjZS5hbGwgOiBzb3VyY2Uuc3RkaW9bZmROdW1iZXJdO1xuXG5cdGlmIChzb3VyY2VTdHJlYW0gPT09IG51bGwgfHwgc291cmNlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGdldEludmFsaWRTdGRpb09wdGlvbk1lc3NhZ2UoZmROdW1iZXIsIGZyb20sIG9wdGlvbnMsIGlzV3JpdGFibGUpKTtcblx0fVxuXG5cdHJldHVybiBzb3VyY2VTdHJlYW07XG59O1xuXG4vLyBLZWVwcyB0cmFjayBvZiB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gZWFjaCBFeGVjYSBjYWxsXG5leHBvcnQgY29uc3QgU1VCUFJPQ0VTU19PUFRJT05TID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3QgZ2V0RmROdW1iZXIgPSAoZmlsZURlc2NyaXB0b3JzLCBmZE5hbWUsIGlzV3JpdGFibGUpID0+IHtcblx0Y29uc3QgZmROdW1iZXIgPSBwYXJzZUZkTnVtYmVyKGZkTmFtZSwgaXNXcml0YWJsZSk7XG5cdHZhbGlkYXRlRmROdW1iZXIoZmROdW1iZXIsIGZkTmFtZSwgaXNXcml0YWJsZSwgZmlsZURlc2NyaXB0b3JzKTtcblx0cmV0dXJuIGZkTnVtYmVyO1xufTtcblxuY29uc3QgcGFyc2VGZE51bWJlciA9IChmZE5hbWUsIGlzV3JpdGFibGUpID0+IHtcblx0Y29uc3QgZmROdW1iZXIgPSBwYXJzZUZkKGZkTmFtZSk7XG5cdGlmIChmZE51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZkTnVtYmVyO1xuXHR9XG5cblx0Y29uc3Qge3ZhbGlkT3B0aW9ucywgZGVmYXVsdFZhbHVlfSA9IGlzV3JpdGFibGVcblx0XHQ/IHt2YWxpZE9wdGlvbnM6ICdcInN0ZGluXCInLCBkZWZhdWx0VmFsdWU6ICdzdGRpbid9XG5cdFx0OiB7dmFsaWRPcHRpb25zOiAnXCJzdGRvdXRcIiwgXCJzdGRlcnJcIiwgXCJhbGxcIicsIGRlZmF1bHRWYWx1ZTogJ3N0ZG91dCd9O1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7Z2V0T3B0aW9uTmFtZShpc1dyaXRhYmxlKX1cIiBtdXN0IG5vdCBiZSBcIiR7ZmROYW1lfVwiLlxuSXQgbXVzdCBiZSAke3ZhbGlkT3B0aW9uc30gb3IgXCJmZDNcIiwgXCJmZDRcIiAoYW5kIHNvIG9uKS5cbkl0IGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBcIiR7ZGVmYXVsdFZhbHVlfVwiLmApO1xufTtcblxuY29uc3QgdmFsaWRhdGVGZE51bWJlciA9IChmZE51bWJlciwgZmROYW1lLCBpc1dyaXRhYmxlLCBmaWxlRGVzY3JpcHRvcnMpID0+IHtcblx0Y29uc3QgZmlsZURlc2NyaXB0b3IgPSBmaWxlRGVzY3JpcHRvcnNbZ2V0VXNlZERlc2NyaXB0b3IoZmROdW1iZXIpXTtcblx0aWYgKGZpbGVEZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7Z2V0T3B0aW9uTmFtZShpc1dyaXRhYmxlKX1cIiBtdXN0IG5vdCBiZSAke2ZkTmFtZX0uIFRoYXQgZmlsZSBkZXNjcmlwdG9yIGRvZXMgbm90IGV4aXN0LlxuUGxlYXNlIHNldCB0aGUgXCJzdGRpb1wiIG9wdGlvbiB0byBlbnN1cmUgdGhhdCBmaWxlIGRlc2NyaXB0b3IgZXhpc3RzLmApO1xuXHR9XG5cblx0aWYgKGZpbGVEZXNjcmlwdG9yLmRpcmVjdGlvbiA9PT0gJ2lucHV0JyAmJiAhaXNXcml0YWJsZSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtnZXRPcHRpb25OYW1lKGlzV3JpdGFibGUpfVwiIG11c3Qgbm90IGJlICR7ZmROYW1lfS4gSXQgbXVzdCBiZSBhIHJlYWRhYmxlIHN0cmVhbSwgbm90IHdyaXRhYmxlLmApO1xuXHR9XG5cblx0aWYgKGZpbGVEZXNjcmlwdG9yLmRpcmVjdGlvbiAhPT0gJ2lucHV0JyAmJiBpc1dyaXRhYmxlKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgXCIke2dldE9wdGlvbk5hbWUoaXNXcml0YWJsZSl9XCIgbXVzdCBub3QgYmUgJHtmZE5hbWV9LiBJdCBtdXN0IGJlIGEgd3JpdGFibGUgc3RyZWFtLCBub3QgcmVhZGFibGUuYCk7XG5cdH1cbn07XG5cbmNvbnN0IGdldEludmFsaWRTdGRpb09wdGlvbk1lc3NhZ2UgPSAoZmROdW1iZXIsIGZkTmFtZSwgb3B0aW9ucywgaXNXcml0YWJsZSkgPT4ge1xuXHRpZiAoZmROdW1iZXIgPT09ICdhbGwnICYmICFvcHRpb25zLmFsbCkge1xuXHRcdHJldHVybiAnVGhlIFwiYWxsXCIgb3B0aW9uIG11c3QgYmUgdHJ1ZSB0byB1c2UgXCJmcm9tOiBcXCdhbGxcXCdcIi4nO1xuXHR9XG5cblx0Y29uc3Qge29wdGlvbk5hbWUsIG9wdGlvblZhbHVlfSA9IGdldEludmFsaWRTdGRpb09wdGlvbihmZE51bWJlciwgb3B0aW9ucyk7XG5cdHJldHVybiBgVGhlIFwiJHtvcHRpb25OYW1lfTogJHtzZXJpYWxpemVPcHRpb25WYWx1ZShvcHRpb25WYWx1ZSl9XCIgb3B0aW9uIGlzIGluY29tcGF0aWJsZSB3aXRoIHVzaW5nIFwiJHtnZXRPcHRpb25OYW1lKGlzV3JpdGFibGUpfTogJHtzZXJpYWxpemVPcHRpb25WYWx1ZShmZE5hbWUpfVwiLlxuUGxlYXNlIHNldCB0aGlzIG9wdGlvbiB3aXRoIFwicGlwZVwiIGluc3RlYWQuYDtcbn07XG5cbmNvbnN0IGdldEludmFsaWRTdGRpb09wdGlvbiA9IChmZE51bWJlciwge3N0ZGluLCBzdGRvdXQsIHN0ZGVyciwgc3RkaW99KSA9PiB7XG5cdGNvbnN0IHVzZWREZXNjcmlwdG9yID0gZ2V0VXNlZERlc2NyaXB0b3IoZmROdW1iZXIpO1xuXG5cdGlmICh1c2VkRGVzY3JpcHRvciA9PT0gMCAmJiBzdGRpbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHtvcHRpb25OYW1lOiAnc3RkaW4nLCBvcHRpb25WYWx1ZTogc3RkaW59O1xuXHR9XG5cblx0aWYgKHVzZWREZXNjcmlwdG9yID09PSAxICYmIHN0ZG91dCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHtvcHRpb25OYW1lOiAnc3Rkb3V0Jywgb3B0aW9uVmFsdWU6IHN0ZG91dH07XG5cdH1cblxuXHRpZiAodXNlZERlc2NyaXB0b3IgPT09IDIgJiYgc3RkZXJyICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4ge29wdGlvbk5hbWU6ICdzdGRlcnInLCBvcHRpb25WYWx1ZTogc3RkZXJyfTtcblx0fVxuXG5cdHJldHVybiB7b3B0aW9uTmFtZTogYHN0ZGlvWyR7dXNlZERlc2NyaXB0b3J9XWAsIG9wdGlvblZhbHVlOiBzdGRpb1t1c2VkRGVzY3JpcHRvcl19O1xufTtcblxuY29uc3QgZ2V0VXNlZERlc2NyaXB0b3IgPSBmZE51bWJlciA9PiBmZE51bWJlciA9PT0gJ2FsbCcgPyAxIDogZmROdW1iZXI7XG5cbmNvbnN0IGdldE9wdGlvbk5hbWUgPSBpc1dyaXRhYmxlID0+IGlzV3JpdGFibGUgPyAndG8nIDogJ2Zyb20nO1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplT3B0aW9uVmFsdWUgPSB2YWx1ZSA9PiB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGAnJHt2YWx1ZX0nYDtcblx0fVxuXG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYCR7dmFsdWV9YCA6ICdTdHJlYW0nO1xufTtcbiIsICJpbXBvcnQge2FkZEFib3J0TGlzdGVuZXJ9IGZyb20gJ25vZGU6ZXZlbnRzJztcblxuLy8gVGVtcG9yYXJpbHkgaW5jcmVhc2UgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxpc3RlbmVycyBvbiBhbiBldmVudEVtaXR0ZXJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRNYXhMaXN0ZW5lcnMgPSAoZXZlbnRFbWl0dGVyLCBtYXhMaXN0ZW5lcnNJbmNyZW1lbnQsIHNpZ25hbCkgPT4ge1xuXHRjb25zdCBtYXhMaXN0ZW5lcnMgPSBldmVudEVtaXR0ZXIuZ2V0TWF4TGlzdGVuZXJzKCk7XG5cdGlmIChtYXhMaXN0ZW5lcnMgPT09IDAgfHwgbWF4TGlzdGVuZXJzID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRldmVudEVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKG1heExpc3RlbmVycyArIG1heExpc3RlbmVyc0luY3JlbWVudCk7XG5cdGFkZEFib3J0TGlzdGVuZXIoc2lnbmFsLCAoKSA9PiB7XG5cdFx0ZXZlbnRFbWl0dGVyLnNldE1heExpc3RlbmVycyhldmVudEVtaXR0ZXIuZ2V0TWF4TGlzdGVuZXJzKCkgLSBtYXhMaXN0ZW5lcnNJbmNyZW1lbnQpO1xuXHR9KTtcbn07XG4iLCAiLy8gQnkgZGVmYXVsdCwgTm9kZS5qcyBrZWVwcyB0aGUgc3VicHJvY2VzcyBhbGl2ZSB3aGlsZSBpdCBoYXMgYSBgbWVzc2FnZWAgb3IgYGRpc2Nvbm5lY3RgIGxpc3RlbmVyLlxuLy8gV2UgcmVwbGljYXRlIHRoZSBzYW1lIGxvZ2ljIGZvciB0aGUgZXZlbnRzIHRoYXQgd2UgcHJveHkuXG4vLyBUaGlzIGVuc3VyZXMgdGhlIHN1YnByb2Nlc3MgaXMga2VwdCBhbGl2ZSB3aGlsZSBgZ2V0T25lTWVzc2FnZSgpYCBhbmQgYGdldEVhY2hNZXNzYWdlKClgIGFyZSBvbmdvaW5nLlxuLy8gVGhpcyBpcyBub3QgYSBwcm9ibGVtIHdpdGggYHNlbmRNZXNzYWdlKClgIHNpbmNlIE5vZGUuanMgaGFuZGxlcyB0aGF0IG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuLy8gV2UgZG8gbm90IHVzZSBgYW55UHJvY2Vzcy5jaGFubmVsLnJlZigpYCBzaW5jZSB0aGlzIHdvdWxkIHByZXZlbnQgdGhlIGF1dG9tYXRpYyBgLmNoYW5uZWwucmVmQ291bnRlZCgpYCBOb2RlLmpzIGlzIGRvaW5nLlxuLy8gV2Uga2VlcCBhIHJlZmVyZW5jZSB0byBgYW55UHJvY2Vzcy5jaGFubmVsYCBzaW5jZSBpdCBtaWdodCBiZSBgbnVsbGAgd2hpbGUgYGdldE9uZU1lc3NhZ2UoKWAgb3IgYGdldEVhY2hNZXNzYWdlKClgIGlzIHN0aWxsIHByb2Nlc3NpbmcgZGVib3VuY2VkIG1lc3NhZ2VzLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzJhYWVhYTg2M2MzNWJlZmEyZWJhYTk4ZmI3NzM3ZWM4NGRmNGQ4ZTkvbGliL2ludGVybmFsL2NoaWxkX3Byb2Nlc3MuanMjTDU0N1xuZXhwb3J0IGNvbnN0IGFkZFJlZmVyZW5jZSA9IChjaGFubmVsLCByZWZlcmVuY2UpID0+IHtcblx0aWYgKHJlZmVyZW5jZSkge1xuXHRcdGFkZFJlZmVyZW5jZUNvdW50KGNoYW5uZWwpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRSZWZlcmVuY2VDb3VudCA9IGNoYW5uZWwgPT4ge1xuXHRjaGFubmVsLnJlZkNvdW50ZWQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVSZWZlcmVuY2UgPSAoY2hhbm5lbCwgcmVmZXJlbmNlKSA9PiB7XG5cdGlmIChyZWZlcmVuY2UpIHtcblx0XHRyZW1vdmVSZWZlcmVuY2VDb3VudChjaGFubmVsKTtcblx0fVxufTtcblxuY29uc3QgcmVtb3ZlUmVmZXJlbmNlQ291bnQgPSBjaGFubmVsID0+IHtcblx0Y2hhbm5lbC51bnJlZkNvdW50ZWQoKTtcbn07XG5cbi8vIFRvIHByb3h5IGV2ZW50cywgd2Ugc2V0dXAgc29tZSBnbG9iYWwgbGlzdGVuZXJzIG9uIHRoZSBgbWVzc2FnZWAgYW5kIGBkaXNjb25uZWN0YCBldmVudHMuXG4vLyBUaG9zZSBzaG91bGQgbm90IGtlZXAgdGhlIHN1YnByb2Nlc3MgYWxpdmUsIHNvIHdlIHJlbW92ZSB0aGUgYXV0b21hdGljIGNvdW50aW5nIHRoYXQgTm9kZS5qcyBpcyBkb2luZy5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi8xYjk2NTI3MGE5YzI3M2Q0Y2Y3MGU4ODA4ZTlkMjhiOWFkYTc4NDRmL2xpYi9jaGlsZF9wcm9jZXNzLmpzI0wxODBcbmV4cG9ydCBjb25zdCB1bmRvQWRkZWRSZWZlcmVuY2VzID0gKGNoYW5uZWwsIGlzU3VicHJvY2VzcykgPT4ge1xuXHRpZiAoaXNTdWJwcm9jZXNzKSB7XG5cdFx0cmVtb3ZlUmVmZXJlbmNlQ291bnQoY2hhbm5lbCk7XG5cdFx0cmVtb3ZlUmVmZXJlbmNlQ291bnQoY2hhbm5lbCk7XG5cdH1cbn07XG5cbi8vIFJldmVyc2UgaXQgZHVyaW5nIGBkaXNjb25uZWN0YFxuZXhwb3J0IGNvbnN0IHJlZG9BZGRlZFJlZmVyZW5jZXMgPSAoY2hhbm5lbCwgaXNTdWJwcm9jZXNzKSA9PiB7XG5cdGlmIChpc1N1YnByb2Nlc3MpIHtcblx0XHRhZGRSZWZlcmVuY2VDb3VudChjaGFubmVsKTtcblx0XHRhZGRSZWZlcmVuY2VDb3VudChjaGFubmVsKTtcblx0fVxufTtcbiIsICJpbXBvcnQge29uY2V9IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7c2NoZWR1bGVyfSBmcm9tICdub2RlOnRpbWVycy9wcm9taXNlcyc7XG5pbXBvcnQge3dhaXRGb3JPdXRnb2luZ01lc3NhZ2VzfSBmcm9tICcuL291dGdvaW5nLmpzJztcbmltcG9ydCB7cmVkb0FkZGVkUmVmZXJlbmNlc30gZnJvbSAnLi9yZWZlcmVuY2UuanMnO1xuaW1wb3J0IHtoYW5kbGVTdHJpY3RSZXF1ZXN0LCBoYW5kbGVTdHJpY3RSZXNwb25zZX0gZnJvbSAnLi9zdHJpY3QuanMnO1xuaW1wb3J0IHtoYW5kbGVBYm9ydCwgYWJvcnRPbkRpc2Nvbm5lY3R9IGZyb20gJy4vZ3JhY2VmdWwuanMnO1xuXG4vLyBCeSBkZWZhdWx0LCBOb2RlLmpzIGJ1ZmZlcnMgYG1lc3NhZ2VgIGV2ZW50cy5cbi8vICAtIEJ1ZmZlcmluZyBoYXBwZW5zIHdoZW4gdGhlcmUgaXMgYSBgbWVzc2FnZWAgZXZlbnQgaXMgZW1pdHRlZCBidXQgdGhlcmUgaXMgbm8gaGFuZGxlci5cbi8vICAtIEFzIHNvb24gYXMgYSBgbWVzc2FnZWAgZXZlbnQgaGFuZGxlciBpcyBzZXQsIGFsbCBidWZmZXJlZCBgbWVzc2FnZWAgZXZlbnRzIGFyZSBlbWl0dGVkLCBlbXB0eWluZyB0aGUgYnVmZmVyLlxuLy8gIC0gVGhpcyBoYXBwZW5zIGJvdGggaW4gdGhlIGN1cnJlbnQgcHJvY2VzcyBhbmQgdGhlIHN1YnByb2Nlc3MuXG4vLyAgLSBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvNTAxNTQ2ZThmMzcwNTljZDU3NzA0MWUyMzk0MWI2NDBkMGQ0ZDQwNi9saWIvaW50ZXJuYWwvY2hpbGRfcHJvY2Vzcy5qcyNMNzE5XG4vLyBUaGlzIGlzIGhlbHBmdWwuIE5vdGFibHksIHRoaXMgYWxsb3dzIHNlbmRpbmcgbWVzc2FnZXMgdG8gYSBzdWJwcm9jZXNzIHRoYXQncyBzdGlsbCBpbml0aWFsaXppbmcuXG4vLyBIb3dldmVyLCBpdCBoYXMgc2V2ZXJhbCBwcm9ibGVtcy5cbi8vICAtIFRoaXMgd29ya3Mgd2l0aCBgZXZlbnRzLm9uKClgIGJ1dCBub3QgYGV2ZW50cy5vbmNlKClgIHNpbmNlIGFsbCBidWZmZXJlZCBtZXNzYWdlcyBhcmUgZW1pdHRlZCBhdCBvbmNlLlxuLy8gICAgRm9yIGV4YW1wbGUsIHVzZXJzIGNhbm5vdCBjYWxsIGBhd2FpdCBnZXRPbmVNZXNzYWdlKClgL2BnZXRFYWNoTWVzc2FnZSgpYCBtdWx0aXBsZSB0aW1lcyBpbiBhIHJvdy5cbi8vICAtIFdoZW4gYSB1c2VyIGludGVudGlvbmFsbHkgc3RhcnRzIGxpc3RlbmluZyB0byBgbWVzc2FnZWAgYXQgYSBzcGVjaWZpYyBwb2ludCBpbiB0aW1lLCBwYXN0IGBtZXNzYWdlYCBldmVudHMgYXJlIHJlcGxheWVkLCB3aGljaCBtaWdodCBiZSB1bmV4cGVjdGVkLlxuLy8gIC0gQnVmZmVyaW5nIGlzIHVubGltaXRlZCwgd2hpY2ggbWlnaHQgbGVhZCB0byBhbiBvdXQtb2YtbWVtb3J5IGNyYXNoLlxuLy8gIC0gVGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBtdWx0aXBsZSBjb25zdW1lcnMuXG4vLyAgICBGb3IgZXhhbXBsZSwgRXhlY2EgY29uc3VtZXMgZXZlbnRzIHdpdGggYm90aCBgcmVzdWx0LmlwY091dHB1dGAgYW5kIG1hbnVhbCBJUEMgY2FsbHMgbGlrZSBgZ2V0T25lTWVzc2FnZSgpYC5cbi8vICAgIFNpbmNlIGByZXN1bHQuaXBjT3V0cHV0YCByZWFkcyBhbGwgaW5jb21pbmcgbWVzc2FnZXMsIG5vIGJ1ZmZlcmluZyBoYXBwZW5zIGZvciBtYW51YWwgSVBDIGNhbGxzLlxuLy8gIC0gRm9yZ2V0dGluZyB0byBzZXR1cCBhIGBtZXNzYWdlYCBsaXN0ZW5lciwgb3Igc2V0dGluZyBpdCB1cCB0b28gbGF0ZSwgaXMgYSBwcm9ncmFtbWluZyBtaXN0YWtlLlxuLy8gICAgVGhlIGRlZmF1bHQgYmVoYXZpb3IgZG9lcyBub3QgYWxsb3cgdXNlcnMgdG8gcmVhbGl6ZSB0aGV5IG1hZGUgdGhhdCBtaXN0YWtlLlxuLy8gVG8gc29sdmUgdGhvc2UgcHJvYmxlbXMsIGluc3RlYWQgb2YgYnVmZmVyaW5nIG1lc3NhZ2VzLCB3ZSBkZWJvdW5jZSB0aGVtLlxuLy8gVGhlIGBtZXNzYWdlYCBldmVudCBzbyBpdCBpcyBlbWl0dGVkIGF0IG1vc3Qgb25jZSBwZXIgbWFjcm90YXNrLlxuZXhwb3J0IGNvbnN0IG9uTWVzc2FnZSA9IGFzeW5jICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBpcGNFbWl0dGVyfSwgd3JhcHBlZE1lc3NhZ2UpID0+IHtcblx0aWYgKGhhbmRsZVN0cmljdFJlc3BvbnNlKHdyYXBwZWRNZXNzYWdlKSB8fCBoYW5kbGVBYm9ydCh3cmFwcGVkTWVzc2FnZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIUlOQ09NSU5HX01FU1NBR0VTLmhhcyhhbnlQcm9jZXNzKSkge1xuXHRcdElOQ09NSU5HX01FU1NBR0VTLnNldChhbnlQcm9jZXNzLCBbXSk7XG5cdH1cblxuXHRjb25zdCBpbmNvbWluZ01lc3NhZ2VzID0gSU5DT01JTkdfTUVTU0FHRVMuZ2V0KGFueVByb2Nlc3MpO1xuXHRpbmNvbWluZ01lc3NhZ2VzLnB1c2god3JhcHBlZE1lc3NhZ2UpO1xuXG5cdGlmIChpbmNvbWluZ01lc3NhZ2VzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3aGlsZSAoaW5jb21pbmdNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHRhd2FpdCB3YWl0Rm9yT3V0Z29pbmdNZXNzYWdlcyhhbnlQcm9jZXNzLCBpcGNFbWl0dGVyLCB3cmFwcGVkTWVzc2FnZSk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHRhd2FpdCBzY2hlZHVsZXIueWllbGQoKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGF3YWl0IGhhbmRsZVN0cmljdFJlcXVlc3Qoe1xuXHRcdFx0d3JhcHBlZE1lc3NhZ2U6IGluY29taW5nTWVzc2FnZXNbMF0sXG5cdFx0XHRhbnlQcm9jZXNzLFxuXHRcdFx0Y2hhbm5lbCxcblx0XHRcdGlzU3VicHJvY2Vzcyxcblx0XHRcdGlwY0VtaXR0ZXIsXG5cdFx0fSk7XG5cblx0XHRpbmNvbWluZ01lc3NhZ2VzLnNoaWZ0KCk7XG5cdFx0aXBjRW1pdHRlci5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG5cdFx0aXBjRW1pdHRlci5lbWl0KCdtZXNzYWdlOmRvbmUnKTtcblx0fVxufTtcblxuLy8gSWYgdGhlIGBtZXNzYWdlYCBldmVudCBpcyBjdXJyZW50bHkgZGVib3VuY2VkLCB0aGUgYGRpc2Nvbm5lY3RgIGV2ZW50IG11c3Qgd2FpdCBmb3IgaXRcbmV4cG9ydCBjb25zdCBvbkRpc2Nvbm5lY3QgPSBhc3luYyAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjRW1pdHRlciwgYm91bmRPbk1lc3NhZ2V9KSA9PiB7XG5cdGFib3J0T25EaXNjb25uZWN0KCk7XG5cblx0Y29uc3QgaW5jb21pbmdNZXNzYWdlcyA9IElOQ09NSU5HX01FU1NBR0VTLmdldChhbnlQcm9jZXNzKTtcblx0d2hpbGUgKGluY29taW5nTWVzc2FnZXM/Lmxlbmd0aCA+IDApIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdGF3YWl0IG9uY2UoaXBjRW1pdHRlciwgJ21lc3NhZ2U6ZG9uZScpO1xuXHR9XG5cblx0YW55UHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kT25NZXNzYWdlKTtcblx0cmVkb0FkZGVkUmVmZXJlbmNlcyhjaGFubmVsLCBpc1N1YnByb2Nlc3MpO1xuXHRpcGNFbWl0dGVyLmNvbm5lY3RlZCA9IGZhbHNlO1xuXHRpcGNFbWl0dGVyLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbn07XG5cbmNvbnN0IElOQ09NSU5HX01FU1NBR0VTID0gbmV3IFdlYWtNYXAoKTtcbiIsICJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtvbk1lc3NhZ2UsIG9uRGlzY29ubmVjdH0gZnJvbSAnLi9pbmNvbWluZy5qcyc7XG5pbXBvcnQge3VuZG9BZGRlZFJlZmVyZW5jZXN9IGZyb20gJy4vcmVmZXJlbmNlLmpzJztcblxuLy8gRm9yd2FyZCB0aGUgYG1lc3NhZ2VgIGFuZCBgZGlzY29ubmVjdGAgZXZlbnRzIGZyb20gdGhlIHByb2Nlc3MgYW5kIHN1YnByb2Nlc3MgdG8gYSBwcm94eSBlbWl0dGVyLlxuLy8gVGhpcyBwcmV2ZW50cyB0aGUgYGVycm9yYCBldmVudCBmcm9tIHN0b3BwaW5nIElQQy5cbi8vIFRoaXMgYWxzbyBhbGxvd3MgZGVib3VuY2luZyB0aGUgYG1lc3NhZ2VgIGV2ZW50LlxuZXhwb3J0IGNvbnN0IGdldElwY0VtaXR0ZXIgPSAoYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzKSA9PiB7XG5cdGlmIChJUENfRU1JVFRFUlMuaGFzKGFueVByb2Nlc3MpKSB7XG5cdFx0cmV0dXJuIElQQ19FTUlUVEVSUy5nZXQoYW55UHJvY2Vzcyk7XG5cdH1cblxuXHQvLyBVc2UgYW4gYEV2ZW50RW1pdHRlcmAsIGxpa2UgdGhlIGBwcm9jZXNzYCB0aGF0IGlzIGJlaW5nIHByb3hpZWRcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWV2ZW50LXRhcmdldFxuXHRjb25zdCBpcGNFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRpcGNFbWl0dGVyLmNvbm5lY3RlZCA9IHRydWU7XG5cdElQQ19FTUlUVEVSUy5zZXQoYW55UHJvY2VzcywgaXBjRW1pdHRlcik7XG5cdGZvcndhcmRFdmVudHMoe1xuXHRcdGlwY0VtaXR0ZXIsXG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0fSk7XG5cdHJldHVybiBpcGNFbWl0dGVyO1xufTtcblxuY29uc3QgSVBDX0VNSVRURVJTID0gbmV3IFdlYWtNYXAoKTtcblxuLy8gVGhlIGBtZXNzYWdlYCBhbmQgYGRpc2Nvbm5lY3RgIGV2ZW50cyBhcmUgYnVmZmVyZWQgaW4gdGhlIHN1YnByb2Nlc3MgdW50aWwgdGhlIGZpcnN0IGxpc3RlbmVyIGlzIHNldHVwLlxuLy8gSG93ZXZlciwgdW5idWZmZXJpbmcgaGFwcGVucyBhZnRlciBvbmUgdGljaywgc28gdGhpcyBnaXZlIGVub3VnaCB0aW1lIGZvciB0aGUgY2FsbGVyIHRvIHNldHVwIHRoZSBsaXN0ZW5lciBvbiB0aGUgcHJveHkgZW1pdHRlciBmaXJzdC5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi8yYWFlYWE4NjNjMzViZWZhMmViYWE5OGZiNzczN2VjODRkZjRkOGU5L2xpYi9pbnRlcm5hbC9jaGlsZF9wcm9jZXNzLmpzI0w3MjFcbmNvbnN0IGZvcndhcmRFdmVudHMgPSAoe2lwY0VtaXR0ZXIsIGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2Vzc30pID0+IHtcblx0Y29uc3QgYm91bmRPbk1lc3NhZ2UgPSBvbk1lc3NhZ2UuYmluZCh1bmRlZmluZWQsIHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwY0VtaXR0ZXIsXG5cdH0pO1xuXHRhbnlQcm9jZXNzLm9uKCdtZXNzYWdlJywgYm91bmRPbk1lc3NhZ2UpO1xuXHRhbnlQcm9jZXNzLm9uY2UoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QuYmluZCh1bmRlZmluZWQsIHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwY0VtaXR0ZXIsXG5cdFx0Ym91bmRPbk1lc3NhZ2UsXG5cdH0pKTtcblx0dW5kb0FkZGVkUmVmZXJlbmNlcyhjaGFubmVsLCBpc1N1YnByb2Nlc3MpO1xufTtcblxuLy8gQ2hlY2sgd2hldGhlciB0aGVyZSBtaWdodCBzdGlsbCBiZSBzb21lIGBtZXNzYWdlYCBldmVudHMgdG8gcmVjZWl2ZVxuZXhwb3J0IGNvbnN0IGlzQ29ubmVjdGVkID0gYW55UHJvY2VzcyA9PiB7XG5cdGNvbnN0IGlwY0VtaXR0ZXIgPSBJUENfRU1JVFRFUlMuZ2V0KGFueVByb2Nlc3MpO1xuXHRyZXR1cm4gaXBjRW1pdHRlciA9PT0gdW5kZWZpbmVkXG5cdFx0PyBhbnlQcm9jZXNzLmNoYW5uZWwgIT09IG51bGxcblx0XHQ6IGlwY0VtaXR0ZXIuY29ubmVjdGVkO1xufTtcbiIsICJpbXBvcnQge29uY2V9IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJy4uL3V0aWxzL2RlZmVycmVkLmpzJztcbmltcG9ydCB7aW5jcmVtZW50TWF4TGlzdGVuZXJzfSBmcm9tICcuLi91dGlscy9tYXgtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7c2VuZE1lc3NhZ2V9IGZyb20gJy4vc2VuZC5qcyc7XG5pbXBvcnQge3Rocm93T25NaXNzaW5nU3RyaWN0LCB0aHJvd09uU3RyaWN0RGlzY29ubmVjdCwgdGhyb3dPblN0cmljdERlYWRsb2NrRXJyb3J9IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQge2dldElwY0VtaXR0ZXJ9IGZyb20gJy4vZm9yd2FyZC5qcyc7XG5pbXBvcnQge2hhc01lc3NhZ2VMaXN0ZW5lcnN9IGZyb20gJy4vb3V0Z29pbmcuanMnO1xuXG4vLyBXaGVuIHVzaW5nIHRoZSBgc3RyaWN0YCBvcHRpb24sIHdyYXAgdGhlIG1lc3NhZ2Ugd2l0aCBtZXRhZGF0YSBkdXJpbmcgYHNlbmRNZXNzYWdlKClgXG5leHBvcnQgY29uc3QgaGFuZGxlU2VuZFN0cmljdCA9ICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBtZXNzYWdlLCBzdHJpY3R9KSA9PiB7XG5cdGlmICghc3RyaWN0KSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH1cblxuXHRjb25zdCBpcGNFbWl0dGVyID0gZ2V0SXBjRW1pdHRlcihhbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MpO1xuXHRjb25zdCBoYXNMaXN0ZW5lcnMgPSBoYXNNZXNzYWdlTGlzdGVuZXJzKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIpO1xuXHRyZXR1cm4ge1xuXHRcdGlkOiBjb3VudCsrLFxuXHRcdHR5cGU6IFJFUVVFU1RfVFlQRSxcblx0XHRtZXNzYWdlLFxuXHRcdGhhc0xpc3RlbmVycyxcblx0fTtcbn07XG5cbmxldCBjb3VudCA9IDBuO1xuXG4vLyBIYW5kbGVzIHdoZW4gYm90aCBwcm9jZXNzZXMgYXJlIGNhbGxpbmcgYHNlbmRNZXNzYWdlKClgIHdpdGggYHN0cmljdGAgYXQgdGhlIHNhbWUgdGltZS5cbi8vIElmIG5laXRoZXIgcHJvY2VzcyBpcyBsaXN0ZW5pbmcsIHRoaXMgd291bGQgY3JlYXRlIGEgZGVhZGxvY2suIFdlIGRldGVjdCBpdCBhbmQgdGhyb3cuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTdHJpY3REZWFkbG9jayA9IChvdXRnb2luZ01lc3NhZ2VzLCB3cmFwcGVkTWVzc2FnZSkgPT4ge1xuXHRpZiAod3JhcHBlZE1lc3NhZ2U/LnR5cGUgIT09IFJFUVVFU1RfVFlQRSB8fCB3cmFwcGVkTWVzc2FnZS5oYXNMaXN0ZW5lcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpZH0gb2Ygb3V0Z29pbmdNZXNzYWdlcykge1xuXHRcdGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRTVFJJQ1RfUkVTUE9OU0VTW2lkXS5yZXNvbHZlKHtpc0RlYWRsb2NrOiB0cnVlLCBoYXNMaXN0ZW5lcnM6IGZhbHNlfSk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBUaGUgb3RoZXIgcHJvY2VzcyB0aGVuIHNlbmRzIHRoZSBhY2tub3dsZWRnbWVudCBiYWNrIGFzIGEgcmVzcG9uc2VcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJpY3RSZXF1ZXN0ID0gYXN5bmMgKHt3cmFwcGVkTWVzc2FnZSwgYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBpcGNFbWl0dGVyfSkgPT4ge1xuXHRpZiAod3JhcHBlZE1lc3NhZ2U/LnR5cGUgIT09IFJFUVVFU1RfVFlQRSB8fCAhYW55UHJvY2Vzcy5jb25uZWN0ZWQpIHtcblx0XHRyZXR1cm4gd3JhcHBlZE1lc3NhZ2U7XG5cdH1cblxuXHRjb25zdCB7aWQsIG1lc3NhZ2V9ID0gd3JhcHBlZE1lc3NhZ2U7XG5cdGNvbnN0IHJlc3BvbnNlID0ge2lkLCB0eXBlOiBSRVNQT05TRV9UWVBFLCBtZXNzYWdlOiBoYXNNZXNzYWdlTGlzdGVuZXJzKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIpfTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IHNlbmRNZXNzYWdlKHtcblx0XHRcdGFueVByb2Nlc3MsXG5cdFx0XHRjaGFubmVsLFxuXHRcdFx0aXNTdWJwcm9jZXNzLFxuXHRcdFx0aXBjOiB0cnVlLFxuXHRcdH0sIHJlc3BvbnNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpcGNFbWl0dGVyLmVtaXQoJ3N0cmljdDplcnJvcicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuLy8gUmVjZXB0aW9uIG9mIHRoZSBhY2tub3dsZWRnbWVudCByZXNwb25zZVxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cmljdFJlc3BvbnNlID0gd3JhcHBlZE1lc3NhZ2UgPT4ge1xuXHRpZiAod3JhcHBlZE1lc3NhZ2U/LnR5cGUgIT09IFJFU1BPTlNFX1RZUEUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCB7aWQsIG1lc3NhZ2U6IGhhc0xpc3RlbmVyc30gPSB3cmFwcGVkTWVzc2FnZTtcblx0U1RSSUNUX1JFU1BPTlNFU1tpZF0/LnJlc29sdmUoe2lzRGVhZGxvY2s6IGZhbHNlLCBoYXNMaXN0ZW5lcnN9KTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBXYWl0IGZvciB0aGUgb3RoZXIgcHJvY2VzcyB0byByZWNlaXZlIHRoZSBtZXNzYWdlIGZyb20gYHNlbmRNZXNzYWdlKClgXG5leHBvcnQgY29uc3Qgd2FpdEZvclN0cmljdFJlc3BvbnNlID0gYXN5bmMgKHdyYXBwZWRNZXNzYWdlLCBhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MpID0+IHtcblx0aWYgKHdyYXBwZWRNZXNzYWdlPy50eXBlICE9PSBSRVFVRVNUX1RZUEUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9IGNyZWF0ZURlZmVycmVkKCk7XG5cdFNUUklDVF9SRVNQT05TRVNbd3JhcHBlZE1lc3NhZ2UuaWRdID0gZGVmZXJyZWQ7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCB7aXNEZWFkbG9jaywgaGFzTGlzdGVuZXJzfSA9IGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0XHRkZWZlcnJlZCxcblx0XHRcdHRocm93T25EaXNjb25uZWN0KGFueVByb2Nlc3MsIGlzU3VicHJvY2VzcywgY29udHJvbGxlciksXG5cdFx0XSk7XG5cblx0XHRpZiAoaXNEZWFkbG9jaykge1xuXHRcdFx0dGhyb3dPblN0cmljdERlYWRsb2NrRXJyb3IoaXNTdWJwcm9jZXNzKTtcblx0XHR9XG5cblx0XHRpZiAoIWhhc0xpc3RlbmVycykge1xuXHRcdFx0dGhyb3dPbk1pc3NpbmdTdHJpY3QoaXNTdWJwcm9jZXNzKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdGRlbGV0ZSBTVFJJQ1RfUkVTUE9OU0VTW3dyYXBwZWRNZXNzYWdlLmlkXTtcblx0fVxufTtcblxuY29uc3QgU1RSSUNUX1JFU1BPTlNFUyA9IHt9O1xuXG5jb25zdCB0aHJvd09uRGlzY29ubmVjdCA9IGFzeW5jIChhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MsIHtzaWduYWx9KSA9PiB7XG5cdGluY3JlbWVudE1heExpc3RlbmVycyhhbnlQcm9jZXNzLCAxLCBzaWduYWwpO1xuXHRhd2FpdCBvbmNlKGFueVByb2Nlc3MsICdkaXNjb25uZWN0Jywge3NpZ25hbH0pO1xuXHR0aHJvd09uU3RyaWN0RGlzY29ubmVjdChpc1N1YnByb2Nlc3MpO1xufTtcblxuY29uc3QgUkVRVUVTVF9UWVBFID0gJ2V4ZWNhOmlwYzpyZXF1ZXN0JztcbmNvbnN0IFJFU1BPTlNFX1RZUEUgPSAnZXhlY2E6aXBjOnJlc3BvbnNlJztcbiIsICJpbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICcuLi91dGlscy9kZWZlcnJlZC5qcyc7XG5pbXBvcnQge2dldEZkU3BlY2lmaWNWYWx1ZX0gZnJvbSAnLi4vYXJndW1lbnRzL3NwZWNpZmljLmpzJztcbmltcG9ydCB7U1VCUFJPQ0VTU19PUFRJT05TfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlU3RyaWN0RGVhZGxvY2t9IGZyb20gJy4vc3RyaWN0LmpzJztcblxuLy8gV2hlbiBgc2VuZE1lc3NhZ2UoKWAgaXMgb25nb2luZywgYW55IGBtZXNzYWdlYCBiZWluZyByZWNlaXZlZCB3YWl0cyBiZWZvcmUgYmVpbmcgZW1pdHRlZC5cbi8vIFRoaXMgYWxsb3dzIGNhbGxpbmcgb25lIG9yIG11bHRpcGxlIGBhd2FpdCBzZW5kTWVzc2FnZSgpYCBmb2xsb3dlZCBieSBgYXdhaXQgZ2V0T25lTWVzc2FnZSgpYC9gYXdhaXQgZ2V0RWFjaE1lc3NhZ2UoKWAuXG4vLyBXaXRob3V0IHJ1bm5pbmcgaW50byBhIHJhY2UgY29uZGl0aW9uIHdoZW4gdGhlIG90aGVyIHByb2Nlc3Mgc2VuZHMgYSByZXNwb25zZSB0b28gZmFzdCwgYmVmb3JlIHRoZSBjdXJyZW50IHByb2Nlc3Mgc2V0IHVwIGEgbGlzdGVuZXIuXG5leHBvcnQgY29uc3Qgc3RhcnRTZW5kTWVzc2FnZSA9IChhbnlQcm9jZXNzLCB3cmFwcGVkTWVzc2FnZSwgc3RyaWN0KSA9PiB7XG5cdGlmICghT1VUR09JTkdfTUVTU0FHRVMuaGFzKGFueVByb2Nlc3MpKSB7XG5cdFx0T1VUR09JTkdfTUVTU0FHRVMuc2V0KGFueVByb2Nlc3MsIG5ldyBTZXQoKSk7XG5cdH1cblxuXHRjb25zdCBvdXRnb2luZ01lc3NhZ2VzID0gT1VUR09JTkdfTUVTU0FHRVMuZ2V0KGFueVByb2Nlc3MpO1xuXHRjb25zdCBvbk1lc3NhZ2VTZW50ID0gY3JlYXRlRGVmZXJyZWQoKTtcblx0Y29uc3QgaWQgPSBzdHJpY3QgPyB3cmFwcGVkTWVzc2FnZS5pZCA6IHVuZGVmaW5lZDtcblx0Y29uc3Qgb3V0Z29pbmdNZXNzYWdlID0ge29uTWVzc2FnZVNlbnQsIGlkfTtcblx0b3V0Z29pbmdNZXNzYWdlcy5hZGQob3V0Z29pbmdNZXNzYWdlKTtcblx0cmV0dXJuIHtvdXRnb2luZ01lc3NhZ2VzLCBvdXRnb2luZ01lc3NhZ2V9O1xufTtcblxuZXhwb3J0IGNvbnN0IGVuZFNlbmRNZXNzYWdlID0gKHtvdXRnb2luZ01lc3NhZ2VzLCBvdXRnb2luZ01lc3NhZ2V9KSA9PiB7XG5cdG91dGdvaW5nTWVzc2FnZXMuZGVsZXRlKG91dGdvaW5nTWVzc2FnZSk7XG5cdG91dGdvaW5nTWVzc2FnZS5vbk1lc3NhZ2VTZW50LnJlc29sdmUoKTtcbn07XG5cbi8vIEF3YWl0IHdoaWxlIGBzZW5kTWVzc2FnZSgpYCBpcyBvbmdvaW5nLCB1bmxlc3MgdGhlcmUgaXMgYWxyZWFkeSBhIGBtZXNzYWdlYCBsaXN0ZW5lclxuZXhwb3J0IGNvbnN0IHdhaXRGb3JPdXRnb2luZ01lc3NhZ2VzID0gYXN5bmMgKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIsIHdyYXBwZWRNZXNzYWdlKSA9PiB7XG5cdHdoaWxlICghaGFzTWVzc2FnZUxpc3RlbmVycyhhbnlQcm9jZXNzLCBpcGNFbWl0dGVyKSAmJiBPVVRHT0lOR19NRVNTQUdFUy5nZXQoYW55UHJvY2Vzcyk/LnNpemUgPiAwKSB7XG5cdFx0Y29uc3Qgb3V0Z29pbmdNZXNzYWdlcyA9IFsuLi5PVVRHT0lOR19NRVNTQUdFUy5nZXQoYW55UHJvY2VzcyldO1xuXHRcdHZhbGlkYXRlU3RyaWN0RGVhZGxvY2sob3V0Z29pbmdNZXNzYWdlcywgd3JhcHBlZE1lc3NhZ2UpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwob3V0Z29pbmdNZXNzYWdlcy5tYXAoKHtvbk1lc3NhZ2VTZW50fSkgPT4gb25NZXNzYWdlU2VudCkpO1xuXHR9XG59O1xuXG5jb25zdCBPVVRHT0lOR19NRVNTQUdFUyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8vIFdoZXRoZXIgYW55IGBtZXNzYWdlYCBsaXN0ZW5lciBpcyBzZXR1cFxuZXhwb3J0IGNvbnN0IGhhc01lc3NhZ2VMaXN0ZW5lcnMgPSAoYW55UHJvY2VzcywgaXBjRW1pdHRlcikgPT4gaXBjRW1pdHRlci5saXN0ZW5lckNvdW50KCdtZXNzYWdlJykgPiBnZXRNaW5MaXN0ZW5lckNvdW50KGFueVByb2Nlc3MpO1xuXG4vLyBXaGVuIGBidWZmZXJgIGlzIGBmYWxzZWAsIHdlIHNldCB1cCBhIGBtZXNzYWdlYCBsaXN0ZW5lciB0aGF0IHNob3VsZCBiZSBpZ25vcmVkLlxuLy8gVGhhdCBsaXN0ZW5lciBpcyBvbmx5IG1lYW50IHRvIGludGVyY2VwdCBgc3RyaWN0YCBhY2tub3dsZWRnZW1lbnQgcmVzcG9uc2VzLlxuY29uc3QgZ2V0TWluTGlzdGVuZXJDb3VudCA9IGFueVByb2Nlc3MgPT4gU1VCUFJPQ0VTU19PUFRJT05TLmhhcyhhbnlQcm9jZXNzKVxuXHQmJiAhZ2V0RmRTcGVjaWZpY1ZhbHVlKFNVQlBST0NFU1NfT1BUSU9OUy5nZXQoYW55UHJvY2Vzcykub3B0aW9ucy5idWZmZXIsICdpcGMnKVxuXHQ/IDFcblx0OiAwO1xuIiwgImltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtcblx0dmFsaWRhdGVJcGNNZXRob2QsXG5cdGhhbmRsZUVwaXBlRXJyb3IsXG5cdGhhbmRsZVNlcmlhbGl6YXRpb25FcnJvcixcblx0ZGlzY29ubmVjdCxcbn0gZnJvbSAnLi92YWxpZGF0aW9uLmpzJztcbmltcG9ydCB7c3RhcnRTZW5kTWVzc2FnZSwgZW5kU2VuZE1lc3NhZ2V9IGZyb20gJy4vb3V0Z29pbmcuanMnO1xuaW1wb3J0IHtoYW5kbGVTZW5kU3RyaWN0LCB3YWl0Rm9yU3RyaWN0UmVzcG9uc2V9IGZyb20gJy4vc3RyaWN0LmpzJztcblxuLy8gTGlrZSBgW3N1Yl1wcm9jZXNzLnNlbmQoKWAgYnV0IHByb21pc2UtYmFzZWQuXG4vLyBXZSBkbyBub3QgYGF3YWl0IHN1YnByb2Nlc3NgIGR1cmluZyBgLnNlbmRNZXNzYWdlKClgIG5vciBgLmdldE9uZU1lc3NhZ2UoKWAgc2luY2UgdGhvc2UgbWV0aG9kcyBhcmUgdHJhbnNpZW50LlxuLy8gVXNlcnMgd291bGQgc3RpbGwgbmVlZCB0byBgYXdhaXQgc3VicHJvY2Vzc2AgYWZ0ZXIgdGhlIG1ldGhvZCBpcyBkb25lLlxuLy8gQWxzbywgdGhpcyB3b3VsZCBwcmV2ZW50IGB1bmhhbmRsZWRSZWplY3Rpb25gIGV2ZW50IGZyb20gYmVpbmcgZW1pdHRlZCwgbWFraW5nIGl0IHNpbGVudC5cbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9ICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBpcGN9LCBtZXNzYWdlLCB7c3RyaWN0ID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3QgbWV0aG9kTmFtZSA9ICdzZW5kTWVzc2FnZSc7XG5cdHZhbGlkYXRlSXBjTWV0aG9kKHtcblx0XHRtZXRob2ROYW1lLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGMsXG5cdFx0aXNDb25uZWN0ZWQ6IGFueVByb2Nlc3MuY29ubmVjdGVkLFxuXHR9KTtcblxuXHRyZXR1cm4gc2VuZE1lc3NhZ2VBc3luYyh7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdG1ldGhvZE5hbWUsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdG1lc3NhZ2UsXG5cdFx0c3RyaWN0LFxuXHR9KTtcbn07XG5cbmNvbnN0IHNlbmRNZXNzYWdlQXN5bmMgPSBhc3luYyAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgbWVzc2FnZSwgc3RyaWN0fSkgPT4ge1xuXHRjb25zdCB3cmFwcGVkTWVzc2FnZSA9IGhhbmRsZVNlbmRTdHJpY3Qoe1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0bWVzc2FnZSxcblx0XHRzdHJpY3QsXG5cdH0pO1xuXHRjb25zdCBvdXRnb2luZ01lc3NhZ2VzU3RhdGUgPSBzdGFydFNlbmRNZXNzYWdlKGFueVByb2Nlc3MsIHdyYXBwZWRNZXNzYWdlLCBzdHJpY3QpO1xuXHR0cnkge1xuXHRcdGF3YWl0IHNlbmRPbmVNZXNzYWdlKHtcblx0XHRcdGFueVByb2Nlc3MsXG5cdFx0XHRtZXRob2ROYW1lLFxuXHRcdFx0aXNTdWJwcm9jZXNzLFxuXHRcdFx0d3JhcHBlZE1lc3NhZ2UsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGRpc2Nvbm5lY3QoYW55UHJvY2Vzcyk7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZmluYWxseSB7XG5cdFx0ZW5kU2VuZE1lc3NhZ2Uob3V0Z29pbmdNZXNzYWdlc1N0YXRlKTtcblx0fVxufTtcblxuLy8gVXNlZCBpbnRlcm5hbGx5IGJ5IGBjYW5jZWxTaWduYWxgXG5leHBvcnQgY29uc3Qgc2VuZE9uZU1lc3NhZ2UgPSBhc3luYyAoe2FueVByb2Nlc3MsIG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzcywgd3JhcHBlZE1lc3NhZ2UsIG1lc3NhZ2V9KSA9PiB7XG5cdGNvbnN0IHNlbmRNZXRob2QgPSBnZXRTZW5kTWV0aG9kKGFueVByb2Nlc3MpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdFx0d2FpdEZvclN0cmljdFJlc3BvbnNlKHdyYXBwZWRNZXNzYWdlLCBhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MpLFxuXHRcdFx0c2VuZE1ldGhvZCh3cmFwcGVkTWVzc2FnZSksXG5cdFx0XSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aGFuZGxlRXBpcGVFcnJvcih7ZXJyb3IsIG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzc30pO1xuXHRcdGhhbmRsZVNlcmlhbGl6YXRpb25FcnJvcih7XG5cdFx0XHRlcnJvcixcblx0XHRcdG1ldGhvZE5hbWUsXG5cdFx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdH0pO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG4vLyBbc3ViXXByb2Nlc3Muc2VuZCgpIHByb21pc2lmaWVkLCBtZW1vaXplZFxuY29uc3QgZ2V0U2VuZE1ldGhvZCA9IGFueVByb2Nlc3MgPT4ge1xuXHRpZiAoUFJPQ0VTU19TRU5EX01FVEhPRFMuaGFzKGFueVByb2Nlc3MpKSB7XG5cdFx0cmV0dXJuIFBST0NFU1NfU0VORF9NRVRIT0RTLmdldChhbnlQcm9jZXNzKTtcblx0fVxuXG5cdGNvbnN0IHNlbmRNZXRob2QgPSBwcm9taXNpZnkoYW55UHJvY2Vzcy5zZW5kLmJpbmQoYW55UHJvY2VzcykpO1xuXHRQUk9DRVNTX1NFTkRfTUVUSE9EUy5zZXQoYW55UHJvY2Vzcywgc2VuZE1ldGhvZCk7XG5cdHJldHVybiBzZW5kTWV0aG9kO1xufTtcblxuY29uc3QgUFJPQ0VTU19TRU5EX01FVEhPRFMgPSBuZXcgV2Vha01hcCgpO1xuIiwgImltcG9ydCB7c2NoZWR1bGVyfSBmcm9tICdub2RlOnRpbWVycy9wcm9taXNlcyc7XG5pbXBvcnQge3NlbmRPbmVNZXNzYWdlfSBmcm9tICcuL3NlbmQuanMnO1xuaW1wb3J0IHtnZXRJcGNFbWl0dGVyfSBmcm9tICcuL2ZvcndhcmQuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZUNvbm5lY3Rpb24sIGdldEFib3J0RGlzY29ubmVjdEVycm9yLCB0aHJvd09uTWlzc2luZ1BhcmVudH0gZnJvbSAnLi92YWxpZGF0aW9uLmpzJztcblxuLy8gU2VuZCBhbiBJUEMgbWVzc2FnZSBzbyB0aGUgc3VicHJvY2VzcyBwZXJmb3JtcyBhIGdyYWNlZnVsIHRlcm1pbmF0aW9uXG5leHBvcnQgY29uc3Qgc2VuZEFib3J0ID0gKHN1YnByb2Nlc3MsIG1lc3NhZ2UpID0+IHtcblx0Y29uc3QgbWV0aG9kTmFtZSA9ICdjYW5jZWxTaWduYWwnO1xuXHR2YWxpZGF0ZUNvbm5lY3Rpb24obWV0aG9kTmFtZSwgZmFsc2UsIHN1YnByb2Nlc3MuY29ubmVjdGVkKTtcblx0cmV0dXJuIHNlbmRPbmVNZXNzYWdlKHtcblx0XHRhbnlQcm9jZXNzOiBzdWJwcm9jZXNzLFxuXHRcdG1ldGhvZE5hbWUsXG5cdFx0aXNTdWJwcm9jZXNzOiBmYWxzZSxcblx0XHR3cmFwcGVkTWVzc2FnZToge3R5cGU6IEdSQUNFRlVMX0NBTkNFTF9UWVBFLCBtZXNzYWdlfSxcblx0XHRtZXNzYWdlLFxuXHR9KTtcbn07XG5cbi8vIFdoZW4gdGhlIHNpZ25hbCBpcyBiZWluZyB1c2VkLCBzdGFydCBsaXN0ZW5pbmcgZm9yIGluY29taW5nIG1lc3NhZ2VzLlxuLy8gVW5idWZmZXJpbmcgbWVzc2FnZXMgdGFrZXMgb25lIG1pY3JvdGFzayB0byBjb21wbGV0ZSwgc28gdGhpcyBtdXN0IGJlIGFzeW5jLlxuZXhwb3J0IGNvbnN0IGdldENhbmNlbFNpZ25hbCA9IGFzeW5jICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBpcGN9KSA9PiB7XG5cdGF3YWl0IHN0YXJ0SXBjKHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0fSk7XG5cdHJldHVybiBjYW5jZWxDb250cm9sbGVyLnNpZ25hbDtcbn07XG5cbmNvbnN0IHN0YXJ0SXBjID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY30pID0+IHtcblx0aWYgKGNhbmNlbExpc3RlbmluZykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNhbmNlbExpc3RlbmluZyA9IHRydWU7XG5cblx0aWYgKCFpcGMpIHtcblx0XHR0aHJvd09uTWlzc2luZ1BhcmVudCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChjaGFubmVsID09PSBudWxsKSB7XG5cdFx0YWJvcnRPbkRpc2Nvbm5lY3QoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRnZXRJcGNFbWl0dGVyKGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG5cdGF3YWl0IHNjaGVkdWxlci55aWVsZCgpO1xufTtcblxubGV0IGNhbmNlbExpc3RlbmluZyA9IGZhbHNlO1xuXG4vLyBSZWNlcHRpb24gb2YgSVBDIG1lc3NhZ2UgdG8gcGVyZm9ybSBhIGdyYWNlZnVsIHRlcm1pbmF0aW9uXG5leHBvcnQgY29uc3QgaGFuZGxlQWJvcnQgPSB3cmFwcGVkTWVzc2FnZSA9PiB7XG5cdGlmICh3cmFwcGVkTWVzc2FnZT8udHlwZSAhPT0gR1JBQ0VGVUxfQ0FOQ0VMX1RZUEUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjYW5jZWxDb250cm9sbGVyLmFib3J0KHdyYXBwZWRNZXNzYWdlLm1lc3NhZ2UpO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IEdSQUNFRlVMX0NBTkNFTF9UWVBFID0gJ2V4ZWNhOmlwYzpjYW5jZWwnO1xuXG4vLyBXaGVuIHRoZSBjdXJyZW50IHByb2Nlc3MgZGlzY29ubmVjdHMgZWFybHksIHRoZSBzdWJwcm9jZXNzIGBjYW5jZWxTaWduYWxgIGlzIGFib3J0ZWQuXG4vLyBPdGhlcndpc2UsIHRoZSBzaWduYWwgd291bGQgbmV2ZXIgYmUgYWJsZSB0byBiZSBhYm9ydGVkIGxhdGVyIG9uLlxuZXhwb3J0IGNvbnN0IGFib3J0T25EaXNjb25uZWN0ID0gKCkgPT4ge1xuXHRjYW5jZWxDb250cm9sbGVyLmFib3J0KGdldEFib3J0RGlzY29ubmVjdEVycm9yKCkpO1xufTtcblxuY29uc3QgY2FuY2VsQ29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiIsICJpbXBvcnQge29uQWJvcnRlZFNpZ25hbH0gZnJvbSAnLi4vdXRpbHMvYWJvcnQtc2lnbmFsLmpzJztcbmltcG9ydCB7c2VuZEFib3J0fSBmcm9tICcuLi9pcGMvZ3JhY2VmdWwuanMnO1xuaW1wb3J0IHtraWxsT25UaW1lb3V0fSBmcm9tICcuL2tpbGwuanMnO1xuXG4vLyBWYWxpZGF0ZSB0aGUgYGdyYWNlZnVsQ2FuY2VsYCBvcHRpb25cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUdyYWNlZnVsQ2FuY2VsID0gKHtncmFjZWZ1bENhbmNlbCwgY2FuY2VsU2lnbmFsLCBpcGMsIHNlcmlhbGl6YXRpb259KSA9PiB7XG5cdGlmICghZ3JhY2VmdWxDYW5jZWwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY2FuY2VsU2lnbmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY2FuY2VsU2lnbmFsYCBvcHRpb24gbXVzdCBiZSBkZWZpbmVkIHdoZW4gc2V0dGluZyB0aGUgYGdyYWNlZnVsQ2FuY2VsYCBvcHRpb24uJyk7XG5cdH1cblxuXHRpZiAoIWlwYykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBpcGNgIG9wdGlvbiBjYW5ub3QgYmUgZmFsc2Ugd2hlbiBzZXR0aW5nIHRoZSBgZ3JhY2VmdWxDYW5jZWxgIG9wdGlvbi4nKTtcblx0fVxuXG5cdGlmIChzZXJpYWxpemF0aW9uID09PSAnanNvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgc2VyaWFsaXphdGlvbmAgb3B0aW9uIGNhbm5vdCBiZSBcXCdqc29uXFwnIHdoZW4gc2V0dGluZyB0aGUgYGdyYWNlZnVsQ2FuY2VsYCBvcHRpb24uJyk7XG5cdH1cbn07XG5cbi8vIFNlbmQgYWJvcnQgcmVhc29uIHRvIHRoZSBzdWJwcm9jZXNzIHdoZW4gYWJvcnRpbmcgdGhlIGBjYW5jZWxTaWduYWxgIG9wdGlvbiBhbmQgYGdyYWNlZnVsQ2FuY2VsYCBpcyBgdHJ1ZWBcbmV4cG9ydCBjb25zdCB0aHJvd09uR3JhY2VmdWxDYW5jZWwgPSAoe1xuXHRzdWJwcm9jZXNzLFxuXHRjYW5jZWxTaWduYWwsXG5cdGdyYWNlZnVsQ2FuY2VsLFxuXHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRjb250ZXh0LFxuXHRjb250cm9sbGVyLFxufSkgPT4gZ3JhY2VmdWxDYW5jZWxcblx0PyBbc2VuZE9uQWJvcnQoe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0Y2FuY2VsU2lnbmFsLFxuXHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0Y29udGV4dCxcblx0XHRjb250cm9sbGVyLFxuXHR9KV1cblx0OiBbXTtcblxuY29uc3Qgc2VuZE9uQWJvcnQgPSBhc3luYyAoe3N1YnByb2Nlc3MsIGNhbmNlbFNpZ25hbCwgZm9yY2VLaWxsQWZ0ZXJEZWxheSwgY29udGV4dCwgY29udHJvbGxlcjoge3NpZ25hbH19KSA9PiB7XG5cdGF3YWl0IG9uQWJvcnRlZFNpZ25hbChjYW5jZWxTaWduYWwsIHNpZ25hbCk7XG5cdGNvbnN0IHJlYXNvbiA9IGdldFJlYXNvbihjYW5jZWxTaWduYWwpO1xuXHRhd2FpdCBzZW5kQWJvcnQoc3VicHJvY2VzcywgcmVhc29uKTtcblx0a2lsbE9uVGltZW91dCh7XG5cdFx0a2lsbDogc3VicHJvY2Vzcy5raWxsLFxuXHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0Y29udGV4dCxcblx0XHRjb250cm9sbGVyU2lnbmFsOiBzaWduYWwsXG5cdH0pO1xuXHRjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID8/PSAnZ3JhY2VmdWxDYW5jZWwnO1xuXHR0aHJvdyBjYW5jZWxTaWduYWwucmVhc29uO1xufTtcblxuLy8gVGhlIGRlZmF1bHQgYHJlYXNvbmAgaXMgYSBET01FeGNlcHRpb24sIHdoaWNoIGlzIG5vdCBzZXJpYWxpemFibGUgd2l0aCBWOFxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvNTMyMjVcbmNvbnN0IGdldFJlYXNvbiA9ICh7cmVhc29ufSkgPT4ge1xuXHRpZiAoIShyZWFzb24gaW5zdGFuY2VvZiBET01FeGNlcHRpb24pKSB7XG5cdFx0cmV0dXJuIHJlYXNvbjtcblx0fVxuXG5cdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlYXNvbi5tZXNzYWdlKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnc3RhY2snLCB7XG5cdFx0dmFsdWU6IHJlYXNvbi5zdGFjayxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0d3JpdGFibGU6IHRydWUsXG5cdH0pO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuIiwgImltcG9ydCB7c2V0VGltZW91dH0gZnJvbSAnbm9kZTp0aW1lcnMvcHJvbWlzZXMnO1xuaW1wb3J0IHtEaXNjYXJkZWRFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL2ZpbmFsLWVycm9yLmpzJztcblxuLy8gVmFsaWRhdGUgYHRpbWVvdXRgIG9wdGlvblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVGltZW91dCA9ICh7dGltZW91dH0pID0+IHtcblx0aWYgKHRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJiAoIU51bWJlci5pc0Zpbml0ZSh0aW1lb3V0KSB8fCB0aW1lb3V0IDwgMCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCB0aGUgXFxgdGltZW91dFxcYCBvcHRpb24gdG8gYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciwgZ290IFxcYCR7dGltZW91dH1cXGAgKCR7dHlwZW9mIHRpbWVvdXR9KWApO1xuXHR9XG59O1xuXG4vLyBGYWlscyB3aGVuIHRoZSBgdGltZW91dGAgb3B0aW9uIGlzIGV4Y2VlZGVkXG5leHBvcnQgY29uc3QgdGhyb3dPblRpbWVvdXQgPSAoc3VicHJvY2VzcywgdGltZW91dCwgY29udGV4dCwgY29udHJvbGxlcikgPT4gdGltZW91dCA9PT0gMCB8fCB0aW1lb3V0ID09PSB1bmRlZmluZWRcblx0PyBbXVxuXHQ6IFtraWxsQWZ0ZXJUaW1lb3V0KHN1YnByb2Nlc3MsIHRpbWVvdXQsIGNvbnRleHQsIGNvbnRyb2xsZXIpXTtcblxuY29uc3Qga2lsbEFmdGVyVGltZW91dCA9IGFzeW5jIChzdWJwcm9jZXNzLCB0aW1lb3V0LCBjb250ZXh0LCB7c2lnbmFsfSkgPT4ge1xuXHRhd2FpdCBzZXRUaW1lb3V0KHRpbWVvdXQsIHVuZGVmaW5lZCwge3NpZ25hbH0pO1xuXHRjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID8/PSAndGltZW91dCc7XG5cdHN1YnByb2Nlc3Mua2lsbCgpO1xuXHR0aHJvdyBuZXcgRGlzY2FyZGVkRXJyb3IoKTtcbn07XG4iLCAiaW1wb3J0IHtleGVjUGF0aCwgZXhlY0FyZ3Z9IGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHtzYWZlTm9ybWFsaXplRmlsZVVybH0gZnJvbSAnLi4vYXJndW1lbnRzL2ZpbGUtdXJsLmpzJztcblxuLy8gYGV4ZWNhTm9kZSgpYCBpcyBhIHNob3J0Y3V0IGZvciBgZXhlY2EoLi4uLCB7bm9kZTogdHJ1ZX0pYFxuZXhwb3J0IGNvbnN0IG1hcE5vZGUgPSAoe29wdGlvbnN9KSA9PiB7XG5cdGlmIChvcHRpb25zLm5vZGUgPT09IGZhbHNlKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibm9kZVwiIG9wdGlvbiBjYW5ub3QgYmUgZmFsc2Ugd2l0aCBgZXhlY2FOb2RlKClgLicpO1xuXHR9XG5cblx0cmV0dXJuIHtvcHRpb25zOiB7Li4ub3B0aW9ucywgbm9kZTogdHJ1ZX19O1xufTtcblxuLy8gQXBwbGllcyB0aGUgYG5vZGU6IHRydWVgIG9wdGlvbiwgYW5kIHRoZSByZWxhdGVkIGBub2RlUGF0aGAvYG5vZGVPcHRpb25zYCBvcHRpb25zLlxuLy8gTW9kaWZpZXMgdGhlIGZpbGUgY29tbWFuZHMvYXJndW1lbnRzIHRvIGVuc3VyZSB0aGUgc2FtZSBOb2RlIGJpbmFyeSBhbmQgZmxhZ3MgYXJlIHJlLXVzZWQuXG4vLyBBbHNvIGFkZHMgYGlwYzogdHJ1ZWAgYW5kIGBzaGVsbDogZmFsc2VgLlxuZXhwb3J0IGNvbnN0IGhhbmRsZU5vZGVPcHRpb24gPSAoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywge1xuXHRub2RlOiBzaG91bGRIYW5kbGVOb2RlID0gZmFsc2UsXG5cdG5vZGVQYXRoID0gZXhlY1BhdGgsXG5cdG5vZGVPcHRpb25zID0gZXhlY0FyZ3YuZmlsdGVyKG5vZGVPcHRpb24gPT4gIW5vZGVPcHRpb24uc3RhcnRzV2l0aCgnLS1pbnNwZWN0JykpLFxuXHRjd2QsXG5cdGV4ZWNQYXRoOiBmb3JtZXJOb2RlUGF0aCxcblx0Li4ub3B0aW9uc1xufSkgPT4ge1xuXHRpZiAoZm9ybWVyTm9kZVBhdGggIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImV4ZWNQYXRoXCIgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIFBsZWFzZSB1c2UgdGhlIFwibm9kZVBhdGhcIiBvcHRpb24gaW5zdGVhZC4nKTtcblx0fVxuXG5cdGNvbnN0IG5vcm1hbGl6ZWROb2RlUGF0aCA9IHNhZmVOb3JtYWxpemVGaWxlVXJsKG5vZGVQYXRoLCAnVGhlIFwibm9kZVBhdGhcIiBvcHRpb24nKTtcblx0Y29uc3QgcmVzb2x2ZWROb2RlUGF0aCA9IHBhdGgucmVzb2x2ZShjd2QsIG5vcm1hbGl6ZWROb2RlUGF0aCk7XG5cdGNvbnN0IG5ld09wdGlvbnMgPSB7XG5cdFx0Li4ub3B0aW9ucyxcblx0XHRub2RlUGF0aDogcmVzb2x2ZWROb2RlUGF0aCxcblx0XHRub2RlOiBzaG91bGRIYW5kbGVOb2RlLFxuXHRcdGN3ZCxcblx0fTtcblxuXHRpZiAoIXNob3VsZEhhbmRsZU5vZGUpIHtcblx0XHRyZXR1cm4gW2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG5ld09wdGlvbnNdO1xuXHR9XG5cblx0aWYgKHBhdGguYmFzZW5hbWUoZmlsZSwgJy5leGUnKSA9PT0gJ25vZGUnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignV2hlbiB0aGUgXCJub2RlXCIgb3B0aW9uIGlzIHRydWUsIHRoZSBmaXJzdCBhcmd1bWVudCBkb2VzIG5vdCBuZWVkIHRvIGJlIFwibm9kZVwiLicpO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRyZXNvbHZlZE5vZGVQYXRoLFxuXHRcdFsuLi5ub2RlT3B0aW9ucywgZmlsZSwgLi4uY29tbWFuZEFyZ3VtZW50c10sXG5cdFx0e2lwYzogdHJ1ZSwgLi4ubmV3T3B0aW9ucywgc2hlbGw6IGZhbHNlfSxcblx0XTtcbn07XG4iLCAiaW1wb3J0IHtzZXJpYWxpemV9IGZyb20gJ25vZGU6djgnO1xuXG4vLyBWYWxpZGF0ZSB0aGUgYGlwY0lucHV0YCBvcHRpb25cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUlwY0lucHV0T3B0aW9uID0gKHtpcGNJbnB1dCwgaXBjLCBzZXJpYWxpemF0aW9ufSkgPT4ge1xuXHRpZiAoaXBjSW5wdXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghaXBjKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGlwY0lucHV0YCBvcHRpb24gY2Fubm90IGJlIHNldCB1bmxlc3MgdGhlIGBpcGNgIG9wdGlvbiBpcyBgdHJ1ZWAuJyk7XG5cdH1cblxuXHR2YWxpZGF0ZUlwY0lucHV0W3NlcmlhbGl6YXRpb25dKGlwY0lucHV0KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlQWR2YW5jZWRJbnB1dCA9IGlwY0lucHV0ID0+IHtcblx0dHJ5IHtcblx0XHRzZXJpYWxpemUoaXBjSW5wdXQpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBpcGNJbnB1dGAgb3B0aW9uIGlzIG5vdCBzZXJpYWxpemFibGUgd2l0aCBhIHN0cnVjdHVyZWQgY2xvbmUuJywge2NhdXNlOiBlcnJvcn0pO1xuXHR9XG59O1xuXG5jb25zdCB2YWxpZGF0ZUpzb25JbnB1dCA9IGlwY0lucHV0ID0+IHtcblx0dHJ5IHtcblx0XHRKU09OLnN0cmluZ2lmeShpcGNJbnB1dCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGlwY0lucHV0YCBvcHRpb24gaXMgbm90IHNlcmlhbGl6YWJsZSB3aXRoIEpTT04uJywge2NhdXNlOiBlcnJvcn0pO1xuXHR9XG59O1xuXG5jb25zdCB2YWxpZGF0ZUlwY0lucHV0ID0ge1xuXHRhZHZhbmNlZDogdmFsaWRhdGVBZHZhbmNlZElucHV0LFxuXHRqc29uOiB2YWxpZGF0ZUpzb25JbnB1dCxcbn07XG5cbi8vIFdoZW4gdGhlIGBpcGNJbnB1dGAgb3B0aW9uIGlzIHNldCwgaXQgaXMgc2VudCBhcyBhbiBpbml0aWFsIElQQyBtZXNzYWdlIHRvIHRoZSBzdWJwcm9jZXNzXG5leHBvcnQgY29uc3Qgc2VuZElwY0lucHV0ID0gYXN5bmMgKHN1YnByb2Nlc3MsIGlwY0lucHV0KSA9PiB7XG5cdGlmIChpcGNJbnB1dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgc3VicHJvY2Vzcy5zZW5kTWVzc2FnZShpcGNJbnB1dCk7XG59O1xuIiwgIi8vIFZhbGlkYXRlIGBlbmNvZGluZ2Agb3B0aW9uXG5leHBvcnQgY29uc3QgdmFsaWRhdGVFbmNvZGluZyA9ICh7ZW5jb2Rpbmd9KSA9PiB7XG5cdGlmIChFTkNPRElOR1MuaGFzKGVuY29kaW5nKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvcnJlY3RFbmNvZGluZyA9IGdldENvcnJlY3RFbmNvZGluZyhlbmNvZGluZyk7XG5cdGlmIChjb3JyZWN0RW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgb3B0aW9uIFxcYGVuY29kaW5nOiAke3NlcmlhbGl6ZUVuY29kaW5nKGVuY29kaW5nKX1cXGAuXG5QbGVhc2UgcmVuYW1lIGl0IHRvICR7c2VyaWFsaXplRW5jb2RpbmcoY29ycmVjdEVuY29kaW5nKX0uYCk7XG5cdH1cblxuXHRjb25zdCBjb3JyZWN0RW5jb2RpbmdzID0gWy4uLkVOQ09ESU5HU10ubWFwKGNvcnJlY3RFbmNvZGluZyA9PiBzZXJpYWxpemVFbmNvZGluZyhjb3JyZWN0RW5jb2RpbmcpKS5qb2luKCcsICcpO1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG9wdGlvbiBcXGBlbmNvZGluZzogJHtzZXJpYWxpemVFbmNvZGluZyhlbmNvZGluZyl9XFxgLlxuUGxlYXNlIHJlbmFtZSBpdCB0byBvbmUgb2Y6ICR7Y29ycmVjdEVuY29kaW5nc30uYCk7XG59O1xuXG5jb25zdCBURVhUX0VOQ09ESU5HUyA9IG5ldyBTZXQoWyd1dGY4JywgJ3V0ZjE2bGUnXSk7XG5leHBvcnQgY29uc3QgQklOQVJZX0VOQ09ESU5HUyA9IG5ldyBTZXQoWydidWZmZXInLCAnaGV4JywgJ2Jhc2U2NCcsICdiYXNlNjR1cmwnLCAnbGF0aW4xJywgJ2FzY2lpJ10pO1xuY29uc3QgRU5DT0RJTkdTID0gbmV3IFNldChbLi4uVEVYVF9FTkNPRElOR1MsIC4uLkJJTkFSWV9FTkNPRElOR1NdKTtcblxuY29uc3QgZ2V0Q29ycmVjdEVuY29kaW5nID0gZW5jb2RpbmcgPT4ge1xuXHRpZiAoZW5jb2RpbmcgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gJ2J1ZmZlcic7XG5cdH1cblxuXHRpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxvd2VyRW5jb2RpbmcgPSBlbmNvZGluZy50b0xvd2VyQ2FzZSgpO1xuXHRpZiAobG93ZXJFbmNvZGluZyBpbiBFTkNPRElOR19BTElBU0VTKSB7XG5cdFx0cmV0dXJuIEVOQ09ESU5HX0FMSUFTRVNbbG93ZXJFbmNvZGluZ107XG5cdH1cblxuXHRpZiAoRU5DT0RJTkdTLmhhcyhsb3dlckVuY29kaW5nKSkge1xuXHRcdHJldHVybiBsb3dlckVuY29kaW5nO1xuXHR9XG59O1xuXG5jb25zdCBFTkNPRElOR19BTElBU0VTID0ge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi90ZXh0LWVuY29kaW5nLWlkZW50aWZpZXItY2FzZVxuXHQndXRmLTgnOiAndXRmOCcsXG5cdCd1dGYtMTZsZSc6ICd1dGYxNmxlJyxcblx0J3Vjcy0yJzogJ3V0ZjE2bGUnLFxuXHR1Y3MyOiAndXRmMTZsZScsXG5cdGJpbmFyeTogJ2xhdGluMScsXG59O1xuXG5jb25zdCBzZXJpYWxpemVFbmNvZGluZyA9IGVuY29kaW5nID0+IHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgPyBgXCIke2VuY29kaW5nfVwiYCA6IFN0cmluZyhlbmNvZGluZyk7XG4iLCAiaW1wb3J0IHtzdGF0U3luY30gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7c2FmZU5vcm1hbGl6ZUZpbGVVcmx9IGZyb20gJy4vZmlsZS11cmwuanMnO1xuXG4vLyBOb3JtYWxpemUgYGN3ZGAgb3B0aW9uXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQ3dkID0gKGN3ZCA9IGdldERlZmF1bHRDd2QoKSkgPT4ge1xuXHRjb25zdCBjd2RTdHJpbmcgPSBzYWZlTm9ybWFsaXplRmlsZVVybChjd2QsICdUaGUgXCJjd2RcIiBvcHRpb24nKTtcblx0cmV0dXJuIHBhdGgucmVzb2x2ZShjd2RTdHJpbmcpO1xufTtcblxuY29uc3QgZ2V0RGVmYXVsdEN3ZCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gcHJvY2Vzcy5jd2QoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvci5tZXNzYWdlID0gYFRoZSBjdXJyZW50IGRpcmVjdG9yeSBkb2VzIG5vdCBleGlzdC5cXG4ke2Vycm9yLm1lc3NhZ2V9YDtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuLy8gV2hlbiBgY3dkYCBvcHRpb24gaGFzIGFuIGludmFsaWQgdmFsdWUsIHByb3ZpZGUgd2l0aCBhIGJldHRlciBlcnJvciBtZXNzYWdlXG5leHBvcnQgY29uc3QgZml4Q3dkRXJyb3IgPSAob3JpZ2luYWxNZXNzYWdlLCBjd2QpID0+IHtcblx0aWYgKGN3ZCA9PT0gZ2V0RGVmYXVsdEN3ZCgpKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsTWVzc2FnZTtcblx0fVxuXG5cdGxldCBjd2RTdGF0O1xuXHR0cnkge1xuXHRcdGN3ZFN0YXQgPSBzdGF0U3luYyhjd2QpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBgVGhlIFwiY3dkXCIgb3B0aW9uIGlzIGludmFsaWQ6ICR7Y3dkfS5cXG4ke2Vycm9yLm1lc3NhZ2V9XFxuJHtvcmlnaW5hbE1lc3NhZ2V9YDtcblx0fVxuXG5cdGlmICghY3dkU3RhdC5pc0RpcmVjdG9yeSgpKSB7XG5cdFx0cmV0dXJuIGBUaGUgXCJjd2RcIiBvcHRpb24gaXMgbm90IGEgZGlyZWN0b3J5OiAke2N3ZH0uXFxuJHtvcmlnaW5hbE1lc3NhZ2V9YDtcblx0fVxuXG5cdHJldHVybiBvcmlnaW5hbE1lc3NhZ2U7XG59O1xuIiwgImltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IGNyb3NzU3Bhd24gZnJvbSAnY3Jvc3Mtc3Bhd24nO1xuaW1wb3J0IHtucG1SdW5QYXRoRW52fSBmcm9tICducG0tcnVuLXBhdGgnO1xuaW1wb3J0IHtub3JtYWxpemVGb3JjZUtpbGxBZnRlckRlbGF5fSBmcm9tICcuLi90ZXJtaW5hdGUva2lsbC5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUtpbGxTaWduYWx9IGZyb20gJy4uL3Rlcm1pbmF0ZS9zaWduYWwuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZUNhbmNlbFNpZ25hbH0gZnJvbSAnLi4vdGVybWluYXRlL2NhbmNlbC5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlR3JhY2VmdWxDYW5jZWx9IGZyb20gJy4uL3Rlcm1pbmF0ZS9ncmFjZWZ1bC5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlVGltZW91dH0gZnJvbSAnLi4vdGVybWluYXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHtoYW5kbGVOb2RlT3B0aW9ufSBmcm9tICcuLi9tZXRob2RzL25vZGUuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZUlwY0lucHV0T3B0aW9ufSBmcm9tICcuLi9pcGMvaXBjLWlucHV0LmpzJztcbmltcG9ydCB7dmFsaWRhdGVFbmNvZGluZywgQklOQVJZX0VOQ09ESU5HU30gZnJvbSAnLi9lbmNvZGluZy1vcHRpb24uanMnO1xuaW1wb3J0IHtub3JtYWxpemVDd2R9IGZyb20gJy4vY3dkLmpzJztcbmltcG9ydCB7bm9ybWFsaXplRmlsZVVybH0gZnJvbSAnLi9maWxlLXVybC5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUZkU3BlY2lmaWNPcHRpb25zfSBmcm9tICcuL3NwZWNpZmljLmpzJztcblxuLy8gTm9ybWFsaXplIHRoZSBvcHRpb25zIG9iamVjdCwgYW5kIHNvbWV0aW1lcyBhbHNvIHRoZSBmaWxlIHBhdGhzIGFuZCBhcmd1bWVudHMuXG4vLyBBcHBsaWVzIGRlZmF1bHQgdmFsdWVzLCB2YWxpZGF0ZSBhbGxvd2VkIG9wdGlvbnMsIG5vcm1hbGl6ZSB0aGVtLlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZU9wdGlvbnMgPSAoZmlsZVBhdGgsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucykgPT4ge1xuXHRyYXdPcHRpb25zLmN3ZCA9IG5vcm1hbGl6ZUN3ZChyYXdPcHRpb25zLmN3ZCk7XG5cdGNvbnN0IFtwcm9jZXNzZWRGaWxlLCBwcm9jZXNzZWRBcmd1bWVudHMsIHByb2Nlc3NlZE9wdGlvbnNdID0gaGFuZGxlTm9kZU9wdGlvbihmaWxlUGF0aCwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblxuXHRjb25zdCB7Y29tbWFuZDogZmlsZSwgYXJnczogY29tbWFuZEFyZ3VtZW50cywgb3B0aW9uczogaW5pdGlhbE9wdGlvbnN9ID0gY3Jvc3NTcGF3bi5fcGFyc2UocHJvY2Vzc2VkRmlsZSwgcHJvY2Vzc2VkQXJndW1lbnRzLCBwcm9jZXNzZWRPcHRpb25zKTtcblxuXHRjb25zdCBmZE9wdGlvbnMgPSBub3JtYWxpemVGZFNwZWNpZmljT3B0aW9ucyhpbml0aWFsT3B0aW9ucyk7XG5cdGNvbnN0IG9wdGlvbnMgPSBhZGREZWZhdWx0T3B0aW9ucyhmZE9wdGlvbnMpO1xuXHR2YWxpZGF0ZVRpbWVvdXQob3B0aW9ucyk7XG5cdHZhbGlkYXRlRW5jb2Rpbmcob3B0aW9ucyk7XG5cdHZhbGlkYXRlSXBjSW5wdXRPcHRpb24ob3B0aW9ucyk7XG5cdHZhbGlkYXRlQ2FuY2VsU2lnbmFsKG9wdGlvbnMpO1xuXHR2YWxpZGF0ZUdyYWNlZnVsQ2FuY2VsKG9wdGlvbnMpO1xuXHRvcHRpb25zLnNoZWxsID0gbm9ybWFsaXplRmlsZVVybChvcHRpb25zLnNoZWxsKTtcblx0b3B0aW9ucy5lbnYgPSBnZXRFbnYob3B0aW9ucyk7XG5cdG9wdGlvbnMua2lsbFNpZ25hbCA9IG5vcm1hbGl6ZUtpbGxTaWduYWwob3B0aW9ucy5raWxsU2lnbmFsKTtcblx0b3B0aW9ucy5mb3JjZUtpbGxBZnRlckRlbGF5ID0gbm9ybWFsaXplRm9yY2VLaWxsQWZ0ZXJEZWxheShvcHRpb25zLmZvcmNlS2lsbEFmdGVyRGVsYXkpO1xuXHRvcHRpb25zLmxpbmVzID0gb3B0aW9ucy5saW5lcy5tYXAoKGxpbmVzLCBmZE51bWJlcikgPT4gbGluZXMgJiYgIUJJTkFSWV9FTkNPRElOR1MuaGFzKG9wdGlvbnMuZW5jb2RpbmcpICYmIG9wdGlvbnMuYnVmZmVyW2ZkTnVtYmVyXSk7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgcGF0aC5iYXNlbmFtZShmaWxlLCAnLmV4ZScpID09PSAnY21kJykge1xuXHRcdC8vICMxMTZcblx0XHRjb21tYW5kQXJndW1lbnRzLnVuc2hpZnQoJy9xJyk7XG5cdH1cblxuXHRyZXR1cm4ge2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnN9O1xufTtcblxuY29uc3QgYWRkRGVmYXVsdE9wdGlvbnMgPSAoe1xuXHRleHRlbmRFbnYgPSB0cnVlLFxuXHRwcmVmZXJMb2NhbCA9IGZhbHNlLFxuXHRjd2QsXG5cdGxvY2FsRGlyOiBsb2NhbERpcmVjdG9yeSA9IGN3ZCxcblx0ZW5jb2RpbmcgPSAndXRmOCcsXG5cdHJlamVjdCA9IHRydWUsXG5cdGNsZWFudXAgPSB0cnVlLFxuXHRhbGwgPSBmYWxzZSxcblx0d2luZG93c0hpZGUgPSB0cnVlLFxuXHRraWxsU2lnbmFsID0gJ1NJR1RFUk0nLFxuXHRmb3JjZUtpbGxBZnRlckRlbGF5ID0gdHJ1ZSxcblx0Z3JhY2VmdWxDYW5jZWwgPSBmYWxzZSxcblx0aXBjSW5wdXQsXG5cdGlwYyA9IGlwY0lucHV0ICE9PSB1bmRlZmluZWQgfHwgZ3JhY2VmdWxDYW5jZWwsXG5cdHNlcmlhbGl6YXRpb24gPSAnYWR2YW5jZWQnLFxuXHQuLi5vcHRpb25zXG59KSA9PiAoe1xuXHQuLi5vcHRpb25zLFxuXHRleHRlbmRFbnYsXG5cdHByZWZlckxvY2FsLFxuXHRjd2QsXG5cdGxvY2FsRGlyZWN0b3J5LFxuXHRlbmNvZGluZyxcblx0cmVqZWN0LFxuXHRjbGVhbnVwLFxuXHRhbGwsXG5cdHdpbmRvd3NIaWRlLFxuXHRraWxsU2lnbmFsLFxuXHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRncmFjZWZ1bENhbmNlbCxcblx0aXBjSW5wdXQsXG5cdGlwYyxcblx0c2VyaWFsaXphdGlvbixcbn0pO1xuXG5jb25zdCBnZXRFbnYgPSAoe2VudjogZW52T3B0aW9uLCBleHRlbmRFbnYsIHByZWZlckxvY2FsLCBub2RlLCBsb2NhbERpcmVjdG9yeSwgbm9kZVBhdGh9KSA9PiB7XG5cdGNvbnN0IGVudiA9IGV4dGVuZEVudiA/IHsuLi5wcm9jZXNzLmVudiwgLi4uZW52T3B0aW9ufSA6IGVudk9wdGlvbjtcblxuXHRpZiAocHJlZmVyTG9jYWwgfHwgbm9kZSkge1xuXHRcdHJldHVybiBucG1SdW5QYXRoRW52KHtcblx0XHRcdGVudixcblx0XHRcdGN3ZDogbG9jYWxEaXJlY3RvcnksXG5cdFx0XHRleGVjUGF0aDogbm9kZVBhdGgsXG5cdFx0XHRwcmVmZXJMb2NhbCxcblx0XHRcdGFkZEV4ZWNQYXRoOiBub2RlLFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVudjtcbn07XG4iLCAiLy8gV2hlbiB0aGUgYHNoZWxsYCBvcHRpb24gaXMgc2V0LCBhbnkgY29tbWFuZCBhcmd1bWVudCBpcyBjb25jYXRlbmF0ZWQgYXMgYSBzaW5nbGUgc3RyaW5nIGJ5IE5vZGUuanM6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9lMzhjZTI3ZjNjYTBhNjVmNjhhMzFjZWRkOTg0Y2RkYjkyN2Q0MDAyL2xpYi9jaGlsZF9wcm9jZXNzLmpzI0w2MTQtTDYyNFxuLy8gSG93ZXZlciwgc2luY2UgTm9kZSAyNCwgaXQgYWxzbyBwcmludHMgYSBkZXByZWNhdGlvbiB3YXJuaW5nLlxuLy8gVG8gYXZvaWQgdGhpcyB3YXJuaW5nLCB3ZSBwZXJmb3JtIHRoYXQgc2FtZSBvcGVyYXRpb24gYmVmb3JlIGNhbGxpbmcgYG5vZGU6Y2hpbGRfcHJvY2Vzc2AuXG4vLyBTaGVsbHMgb25seSB1bmRlcnN0YW5kIHN0cmluZ3MsIHdoaWNoIGlzIHdoeSBOb2RlLmpzIHBlcmZvcm1zIHRoYXQgY29uY2F0ZW5hdGlvbi5cbi8vIEhvd2V2ZXIsIHdlIHJlbHkgb24gdXNlcnMgc3BsaXR0aW5nIGNvbW1hbmQgYXJndW1lbnRzIGFzIGFuIGFycmF5LlxuLy8gRm9yIGV4YW1wbGUsIHRoaXMgYWxsb3dzIHVzIHRvIGVhc2lseSBkZXRlY3Qgd2hpY2ggYXJndW1lbnRzIGFyZSBwYXNzZWQuXG4vLyBTbyB3ZSBkbyB3YW50IHVzZXJzIHRvIHBhc3MgYXJyYXkgb2YgYXJndW1lbnRzIGV2ZW4gd2l0aCBgc2hlbGw6IHRydWVgLCBidXQgd2UgYWxzbyB3YW50IHRvIGF2b2lkIGFueSB3YXJuaW5nLlxuZXhwb3J0IGNvbnN0IGNvbmNhdGVuYXRlU2hlbGwgPSAoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucykgPT4gb3B0aW9ucy5zaGVsbCAmJiBjb21tYW5kQXJndW1lbnRzLmxlbmd0aCA+IDBcblx0PyBbW2ZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHNdLmpvaW4oJyAnKSwgW10sIG9wdGlvbnNdXG5cdDogW2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnNdO1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmlwRmluYWxOZXdsaW5lKGlucHV0KSB7XG5cdGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHN0cmlwRmluYWxOZXdsaW5lU3RyaW5nKGlucHV0KTtcblx0fVxuXG5cdGlmICghKEFycmF5QnVmZmVyLmlzVmlldyhpbnB1dCkgJiYgaW5wdXQuQllURVNfUEVSX0VMRU1FTlQgPT09IDEpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnB1dCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgVWludDhBcnJheScpO1xuXHR9XG5cblx0cmV0dXJuIHN0cmlwRmluYWxOZXdsaW5lQmluYXJ5KGlucHV0KTtcbn1cblxuY29uc3Qgc3RyaXBGaW5hbE5ld2xpbmVTdHJpbmcgPSBpbnB1dCA9PlxuXHRpbnB1dC5hdCgtMSkgPT09IExGXG5cdFx0PyBpbnB1dC5zbGljZSgwLCBpbnB1dC5hdCgtMikgPT09IENSID8gLTIgOiAtMSlcblx0XHQ6IGlucHV0O1xuXG5jb25zdCBzdHJpcEZpbmFsTmV3bGluZUJpbmFyeSA9IGlucHV0ID0+XG5cdGlucHV0LmF0KC0xKSA9PT0gTEZfQklOQVJZXG5cdFx0PyBpbnB1dC5zdWJhcnJheSgwLCBpbnB1dC5hdCgtMikgPT09IENSX0JJTkFSWSA/IC0yIDogLTEpXG5cdFx0OiBpbnB1dDtcblxuY29uc3QgTEYgPSAnXFxuJztcbmNvbnN0IExGX0JJTkFSWSA9IExGLmNvZGVQb2ludEF0KDApO1xuY29uc3QgQ1IgPSAnXFxyJztcbmNvbnN0IENSX0JJTkFSWSA9IENSLmNvZGVQb2ludEF0KDApO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBpc1N0cmVhbShzdHJlYW0sIHtjaGVja09wZW4gPSB0cnVlfSA9IHt9KSB7XG5cdHJldHVybiBzdHJlYW0gIT09IG51bGxcblx0XHQmJiB0eXBlb2Ygc3RyZWFtID09PSAnb2JqZWN0J1xuXHRcdCYmIChzdHJlYW0ud3JpdGFibGUgfHwgc3RyZWFtLnJlYWRhYmxlIHx8ICFjaGVja09wZW4gfHwgKHN0cmVhbS53cml0YWJsZSA9PT0gdW5kZWZpbmVkICYmIHN0cmVhbS5yZWFkYWJsZSA9PT0gdW5kZWZpbmVkKSlcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnBpcGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dyaXRhYmxlU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbiA9IHRydWV9ID0ge30pIHtcblx0cmV0dXJuIGlzU3RyZWFtKHN0cmVhbSwge2NoZWNrT3Blbn0pXG5cdFx0JiYgKHN0cmVhbS53cml0YWJsZSB8fCAhY2hlY2tPcGVuKVxuXHRcdCYmIHR5cGVvZiBzdHJlYW0ud3JpdGUgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmVuZCA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ud3JpdGFibGUgPT09ICdib29sZWFuJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ud3JpdGFibGVPYmplY3RNb2RlID09PSAnYm9vbGVhbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmRlc3Ryb3kgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmRlc3Ryb3llZCA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0sIHtjaGVja09wZW4gPSB0cnVlfSA9IHt9KSB7XG5cdHJldHVybiBpc1N0cmVhbShzdHJlYW0sIHtjaGVja09wZW59KVxuXHRcdCYmIChzdHJlYW0ucmVhZGFibGUgfHwgIWNoZWNrT3Blbilcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnJlYWQgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnJlYWRhYmxlID09PSAnYm9vbGVhbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnJlYWRhYmxlT2JqZWN0TW9kZSA9PT0gJ2Jvb2xlYW4nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5kZXN0cm95ID09PSAnZnVuY3Rpb24nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5kZXN0cm95ZWQgPT09ICdib29sZWFuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVwbGV4U3RyZWFtKHN0cmVhbSwgb3B0aW9ucykge1xuXHRyZXR1cm4gaXNXcml0YWJsZVN0cmVhbShzdHJlYW0sIG9wdGlvbnMpXG5cdFx0JiYgaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0sIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFuc2Zvcm1TdHJlYW0oc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBpc0R1cGxleFN0cmVhbShzdHJlYW0sIG9wdGlvbnMpXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5fdHJhbnNmb3JtID09PSAnZnVuY3Rpb24nO1xufVxuIiwgImNvbnN0IGEgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoXG4gIE9iamVjdC5nZXRQcm90b3R5cGVPZihcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uKiAoKSB7XG4gICAgfVxuICApLnByb3RvdHlwZVxuKTtcbmNsYXNzIGMge1xuICAjdDtcbiAgI247XG4gICNyID0gITE7XG4gICNlID0gdm9pZCAwO1xuICBjb25zdHJ1Y3RvcihlLCB0KSB7XG4gICAgdGhpcy4jdCA9IGUsIHRoaXMuI24gPSB0O1xuICB9XG4gIG5leHQoKSB7XG4gICAgY29uc3QgZSA9ICgpID0+IHRoaXMuI3MoKTtcbiAgICByZXR1cm4gdGhpcy4jZSA9IHRoaXMuI2UgPyB0aGlzLiNlLnRoZW4oZSwgZSkgOiBlKCksIHRoaXMuI2U7XG4gIH1cbiAgcmV0dXJuKGUpIHtcbiAgICBjb25zdCB0ID0gKCkgPT4gdGhpcy4jaShlKTtcbiAgICByZXR1cm4gdGhpcy4jZSA/IHRoaXMuI2UudGhlbih0LCB0KSA6IHQoKTtcbiAgfVxuICBhc3luYyAjcygpIHtcbiAgICBpZiAodGhpcy4jcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbmU6ICEwLFxuICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICB9O1xuICAgIGxldCBlO1xuICAgIHRyeSB7XG4gICAgICBlID0gYXdhaXQgdGhpcy4jdC5yZWFkKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgdGhyb3cgdGhpcy4jZSA9IHZvaWQgMCwgdGhpcy4jciA9ICEwLCB0aGlzLiN0LnJlbGVhc2VMb2NrKCksIHQ7XG4gICAgfVxuICAgIHJldHVybiBlLmRvbmUgJiYgKHRoaXMuI2UgPSB2b2lkIDAsIHRoaXMuI3IgPSAhMCwgdGhpcy4jdC5yZWxlYXNlTG9jaygpKSwgZTtcbiAgfVxuICBhc3luYyAjaShlKSB7XG4gICAgaWYgKHRoaXMuI3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH07XG4gICAgaWYgKHRoaXMuI3IgPSAhMCwgIXRoaXMuI24pIHtcbiAgICAgIGNvbnN0IHQgPSB0aGlzLiN0LmNhbmNlbChlKTtcbiAgICAgIHJldHVybiB0aGlzLiN0LnJlbGVhc2VMb2NrKCksIGF3YWl0IHQsIHtcbiAgICAgICAgZG9uZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jdC5yZWxlYXNlTG9jaygpLCB7XG4gICAgICBkb25lOiAhMCxcbiAgICAgIHZhbHVlOiBlXG4gICAgfTtcbiAgfVxufVxuY29uc3QgbiA9IFN5bWJvbCgpO1xuZnVuY3Rpb24gaSgpIHtcbiAgcmV0dXJuIHRoaXNbbl0ubmV4dCgpO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGksIFwibmFtZVwiLCB7IHZhbHVlOiBcIm5leHRcIiB9KTtcbmZ1bmN0aW9uIG8ocikge1xuICByZXR1cm4gdGhpc1tuXS5yZXR1cm4ocik7XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJuYW1lXCIsIHsgdmFsdWU6IFwicmV0dXJuXCIgfSk7XG5jb25zdCB1ID0gT2JqZWN0LmNyZWF0ZShhLCB7XG4gIG5leHQ6IHtcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMCxcbiAgICB2YWx1ZTogaVxuICB9LFxuICByZXR1cm46IHtcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMCxcbiAgICB2YWx1ZTogb1xuICB9XG59KTtcbmZ1bmN0aW9uIGgoeyBwcmV2ZW50Q2FuY2VsOiByID0gITEgfSA9IHt9KSB7XG4gIGNvbnN0IGUgPSB0aGlzLmdldFJlYWRlcigpLCB0ID0gbmV3IGMoXG4gICAgZSxcbiAgICByXG4gICksIHMgPSBPYmplY3QuY3JlYXRlKHUpO1xuICByZXR1cm4gc1tuXSA9IHQsIHM7XG59XG5leHBvcnQge1xuICBoIGFzIGFzeW5jSXRlcmF0b3Jcbn07XG4iLCAiZnVuY3Rpb24gYyhuKSB7XG4gIGNvbnN0IHQgPSBhKG4pO1xuICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKFxuICAgIHtcbiAgICAgIGFzeW5jIHB1bGwoZSkge1xuICAgICAgICBjb25zdCB7IHZhbHVlOiByLCBkb25lOiBvIH0gPSBhd2FpdCB0Lm5leHQoKTtcbiAgICAgICAgbyA/IGUuY2xvc2UoKSA6IGUuZW5xdWV1ZShyKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBjYW5jZWwoZSkge1xuICAgICAgICBpZiAodHlwZW9mIHQucmV0dXJuID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYXdhaXQgdC5yZXR1cm4oZSkgIT0gXCJvYmplY3RcIilcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwicmV0dXJuKCkgZnVsZmlsbHMgd2l0aCBhIG5vbi1vYmplY3QuXCIpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5ldyBDb3VudFF1ZXVpbmdTdHJhdGVneSh7XG4gICAgICBoaWdoV2F0ZXJNYXJrOiAwXG4gICAgfSlcbiAgKTtcbn1cbmZ1bmN0aW9uIGEobikge1xuICBsZXQgdCA9IG5bU3ltYm9sLmFzeW5jSXRlcmF0b3JdPy5iaW5kKG4pO1xuICBpZiAodCA9PT0gdm9pZCAwKSB7XG4gICAgY29uc3QgciA9IG5bU3ltYm9sLml0ZXJhdG9yXSgpLCBvID0ge1xuICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHJcbiAgICB9O1xuICAgIHQgPSBhc3luYyBmdW5jdGlvbiogKCkge1xuICAgICAgcmV0dXJuIHlpZWxkKiBvO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHQoKTtcbn1cbmV4cG9ydCB7XG4gIGMgYXMgZnJvbUFueUl0ZXJhYmxlXG59O1xuIiwgImltcG9ydCB7IGFzeW5jSXRlcmF0b3IgYXMgZSB9IGZyb20gXCIuL2FzeW5jSXRlcmF0b3IuanNcIjtcbmltcG9ydCB7IGZyb21BbnlJdGVyYWJsZSBhcyBhIH0gZnJvbSBcIi4vZnJvbUFueUl0ZXJhYmxlLmpzXCI7XG5leHBvcnQge1xuICBlIGFzIGFzeW5jSXRlcmF0b3IsXG4gIGEgYXMgZnJvbUFueUl0ZXJhYmxlXG59O1xuIiwgImltcG9ydCB7aXNSZWFkYWJsZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7YXN5bmNJdGVyYXRvcn0gZnJvbSAnQHNlYy1hbnQvcmVhZGFibGUtc3RyZWFtL3BvbnlmaWxsJztcblxuZXhwb3J0IGNvbnN0IGdldEFzeW5jSXRlcmFibGUgPSBzdHJlYW0gPT4ge1xuXHRpZiAoaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0sIHtjaGVja09wZW46IGZhbHNlfSkgJiYgbm9kZUltcG9ydHMub24gIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBnZXRTdHJlYW1JdGVyYWJsZShzdHJlYW0pO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBzdHJlYW0/LltTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gc3RyZWFtO1xuXHR9XG5cblx0Ly8gYFJlYWRhYmxlU3RyZWFtW1N5bWJvbC5hc3luY0l0ZXJhdG9yXWAgc3VwcG9ydCBpcyBtaXNzaW5nIGluIG11bHRpcGxlIGJyb3dzZXJzLCBzbyB3ZSBwb255ZmlsbCBpdFxuXHRpZiAodG9TdHJpbmcuY2FsbChzdHJlYW0pID09PSAnW29iamVjdCBSZWFkYWJsZVN0cmVhbV0nKSB7XG5cdFx0cmV0dXJuIGFzeW5jSXRlcmF0b3IuY2FsbChzdHJlYW0pO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBSZWFkYWJsZSwgYSBSZWFkYWJsZVN0cmVhbSwgb3IgYW4gYXN5bmMgaXRlcmFibGUuJyk7XG59O1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gVGhlIGRlZmF1bHQgaXRlcmFibGUgZm9yIE5vZGUuanMgc3RyZWFtcyBkb2VzIG5vdCBhbGxvdyBmb3IgbXVsdGlwbGUgcmVhZGVycyBhdCBvbmNlLCBzbyB3ZSByZS1pbXBsZW1lbnQgaXRcbmNvbnN0IGdldFN0cmVhbUl0ZXJhYmxlID0gYXN5bmMgZnVuY3Rpb24gKiAoc3RyZWFtKSB7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdGNvbnN0IHN0YXRlID0ge307XG5cdGhhbmRsZVN0cmVhbUVuZChzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXRlKTtcblxuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgW2NodW5rXSBvZiBub2RlSW1wb3J0cy5vbihzdHJlYW0sICdkYXRhJywge3NpZ25hbDogY29udHJvbGxlci5zaWduYWx9KSkge1xuXHRcdFx0eWllbGQgY2h1bms7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN0cmVhbSBmYWlsdXJlLCBmb3IgZXhhbXBsZSBkdWUgdG8gYHN0cmVhbS5kZXN0cm95KGVycm9yKWBcblx0XHRpZiAoc3RhdGUuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgc3RhdGUuZXJyb3I7XG5cdFx0Ly8gYGVycm9yYCBldmVudCBkaXJlY3RseSBlbWl0dGVkIG9uIHN0cmVhbVxuXHRcdH0gZWxzZSBpZiAoIWNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdC8vIE90aGVyd2lzZSwgc3RyZWFtIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcblx0XHR9XG5cdFx0Ly8gVGhlIGBmaW5hbGx5YCBibG9jayBhbHNvIHJ1bnMgd2hlbiB0aGUgY2FsbGVyIHRocm93cywgZm9yIGV4YW1wbGUgZHVlIHRvIHRoZSBgbWF4QnVmZmVyYCBvcHRpb25cblx0fSBmaW5hbGx5IHtcblx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHR9XG59O1xuXG5jb25zdCBoYW5kbGVTdHJlYW1FbmQgPSBhc3luYyAoc3RyZWFtLCBjb250cm9sbGVyLCBzdGF0ZSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IG5vZGVJbXBvcnRzLmZpbmlzaGVkKHN0cmVhbSwge1xuXHRcdFx0Y2xlYW51cDogdHJ1ZSxcblx0XHRcdHJlYWRhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHN0YXRlLmVycm9yID0gZXJyb3I7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHR9XG59O1xuXG4vLyBMb2FkZWQgYnkgdGhlIE5vZGUgZW50cnlwb2ludCwgYnV0IG5vdCBieSB0aGUgYnJvd3NlciBvbmUuXG4vLyBUaGlzIHByZXZlbnRzIHVzaW5nIGR5bmFtaWMgaW1wb3J0cy5cbmV4cG9ydCBjb25zdCBub2RlSW1wb3J0cyA9IHt9O1xuIiwgImltcG9ydCB7Z2V0QXN5bmNJdGVyYWJsZX0gZnJvbSAnLi9zdHJlYW0uanMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RyZWFtQ29udGVudHMgPSBhc3luYyAoc3RyZWFtLCB7aW5pdCwgY29udmVydENodW5rLCBnZXRTaXplLCB0cnVuY2F0ZUNodW5rLCBhZGRDaHVuaywgZ2V0RmluYWxDaHVuaywgZmluYWxpemV9LCB7bWF4QnVmZmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSA9IHt9KSA9PiB7XG5cdGNvbnN0IGFzeW5jSXRlcmFibGUgPSBnZXRBc3luY0l0ZXJhYmxlKHN0cmVhbSk7XG5cblx0Y29uc3Qgc3RhdGUgPSBpbml0KCk7XG5cdHN0YXRlLmxlbmd0aCA9IDA7XG5cblx0dHJ5IHtcblx0XHRmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIGFzeW5jSXRlcmFibGUpIHtcblx0XHRcdGNvbnN0IGNodW5rVHlwZSA9IGdldENodW5rVHlwZShjaHVuayk7XG5cdFx0XHRjb25zdCBjb252ZXJ0ZWRDaHVuayA9IGNvbnZlcnRDaHVua1tjaHVua1R5cGVdKGNodW5rLCBzdGF0ZSk7XG5cdFx0XHRhcHBlbmRDaHVuayh7XG5cdFx0XHRcdGNvbnZlcnRlZENodW5rLFxuXHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0Z2V0U2l6ZSxcblx0XHRcdFx0dHJ1bmNhdGVDaHVuayxcblx0XHRcdFx0YWRkQ2h1bmssXG5cdFx0XHRcdG1heEJ1ZmZlcixcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGFwcGVuZEZpbmFsQ2h1bmsoe1xuXHRcdFx0c3RhdGUsXG5cdFx0XHRjb252ZXJ0Q2h1bmssXG5cdFx0XHRnZXRTaXplLFxuXHRcdFx0dHJ1bmNhdGVDaHVuayxcblx0XHRcdGFkZENodW5rLFxuXHRcdFx0Z2V0RmluYWxDaHVuayxcblx0XHRcdG1heEJ1ZmZlcixcblx0XHR9KTtcblx0XHRyZXR1cm4gZmluYWxpemUoc3RhdGUpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRFcnJvciA9IHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgZXJyb3IgIT09IG51bGwgPyBlcnJvciA6IG5ldyBFcnJvcihlcnJvcik7XG5cdFx0bm9ybWFsaXplZEVycm9yLmJ1ZmZlcmVkRGF0YSA9IGZpbmFsaXplKHN0YXRlKTtcblx0XHR0aHJvdyBub3JtYWxpemVkRXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZEZpbmFsQ2h1bmsgPSAoe3N0YXRlLCBnZXRTaXplLCB0cnVuY2F0ZUNodW5rLCBhZGRDaHVuaywgZ2V0RmluYWxDaHVuaywgbWF4QnVmZmVyfSkgPT4ge1xuXHRjb25zdCBjb252ZXJ0ZWRDaHVuayA9IGdldEZpbmFsQ2h1bmsoc3RhdGUpO1xuXHRpZiAoY29udmVydGVkQ2h1bmsgIT09IHVuZGVmaW5lZCkge1xuXHRcdGFwcGVuZENodW5rKHtcblx0XHRcdGNvbnZlcnRlZENodW5rLFxuXHRcdFx0c3RhdGUsXG5cdFx0XHRnZXRTaXplLFxuXHRcdFx0dHJ1bmNhdGVDaHVuayxcblx0XHRcdGFkZENodW5rLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRDaHVuayA9ICh7Y29udmVydGVkQ2h1bmssIHN0YXRlLCBnZXRTaXplLCB0cnVuY2F0ZUNodW5rLCBhZGRDaHVuaywgbWF4QnVmZmVyfSkgPT4ge1xuXHRjb25zdCBjaHVua1NpemUgPSBnZXRTaXplKGNvbnZlcnRlZENodW5rKTtcblx0Y29uc3QgbmV3TGVuZ3RoID0gc3RhdGUubGVuZ3RoICsgY2h1bmtTaXplO1xuXG5cdGlmIChuZXdMZW5ndGggPD0gbWF4QnVmZmVyKSB7XG5cdFx0YWRkTmV3Q2h1bmsoY29udmVydGVkQ2h1bmssIHN0YXRlLCBhZGRDaHVuaywgbmV3TGVuZ3RoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0cnVuY2F0ZWRDaHVuayA9IHRydW5jYXRlQ2h1bmsoY29udmVydGVkQ2h1bmssIG1heEJ1ZmZlciAtIHN0YXRlLmxlbmd0aCk7XG5cblx0aWYgKHRydW5jYXRlZENodW5rICE9PSB1bmRlZmluZWQpIHtcblx0XHRhZGROZXdDaHVuayh0cnVuY2F0ZWRDaHVuaywgc3RhdGUsIGFkZENodW5rLCBtYXhCdWZmZXIpO1xuXHR9XG5cblx0dGhyb3cgbmV3IE1heEJ1ZmZlckVycm9yKCk7XG59O1xuXG5jb25zdCBhZGROZXdDaHVuayA9IChjb252ZXJ0ZWRDaHVuaywgc3RhdGUsIGFkZENodW5rLCBuZXdMZW5ndGgpID0+IHtcblx0c3RhdGUuY29udGVudHMgPSBhZGRDaHVuayhjb252ZXJ0ZWRDaHVuaywgc3RhdGUsIG5ld0xlbmd0aCk7XG5cdHN0YXRlLmxlbmd0aCA9IG5ld0xlbmd0aDtcbn07XG5cbmNvbnN0IGdldENodW5rVHlwZSA9IGNodW5rID0+IHtcblx0Y29uc3QgdHlwZU9mQ2h1bmsgPSB0eXBlb2YgY2h1bms7XG5cblx0aWYgKHR5cGVPZkNodW5rID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAnc3RyaW5nJztcblx0fVxuXG5cdGlmICh0eXBlT2ZDaHVuayAhPT0gJ29iamVjdCcgfHwgY2h1bmsgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gJ290aGVycyc7XG5cdH1cblxuXHRpZiAoZ2xvYmFsVGhpcy5CdWZmZXI/LmlzQnVmZmVyKGNodW5rKSkge1xuXHRcdHJldHVybiAnYnVmZmVyJztcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZU5hbWUgPSBvYmplY3RUb1N0cmluZy5jYWxsKGNodW5rKTtcblxuXHRpZiAocHJvdG90eXBlTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdHJldHVybiAnYXJyYXlCdWZmZXInO1xuXHR9XG5cblx0aWYgKHByb3RvdHlwZU5hbWUgPT09ICdbb2JqZWN0IERhdGFWaWV3XScpIHtcblx0XHRyZXR1cm4gJ2RhdGFWaWV3Jztcblx0fVxuXG5cdGlmIChcblx0XHROdW1iZXIuaXNJbnRlZ2VyKGNodW5rLmJ5dGVMZW5ndGgpXG5cdFx0JiYgTnVtYmVyLmlzSW50ZWdlcihjaHVuay5ieXRlT2Zmc2V0KVxuXHRcdCYmIG9iamVjdFRvU3RyaW5nLmNhbGwoY2h1bmsuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuXHQpIHtcblx0XHRyZXR1cm4gJ3R5cGVkQXJyYXknO1xuXHR9XG5cblx0cmV0dXJuICdvdGhlcnMnO1xufTtcblxuY29uc3Qge3RvU3RyaW5nOiBvYmplY3RUb1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuXG5leHBvcnQgY2xhc3MgTWF4QnVmZmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdG5hbWUgPSAnTWF4QnVmZmVyRXJyb3InO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCdtYXhCdWZmZXIgZXhjZWVkZWQnKTtcblx0fVxufVxuIiwgImV4cG9ydCBjb25zdCBpZGVudGl0eSA9IHZhbHVlID0+IHZhbHVlO1xuXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRzUHJvcGVydHkgPSAoe2NvbnRlbnRzfSkgPT4gY29udGVudHM7XG5cbmV4cG9ydCBjb25zdCB0aHJvd09iamVjdFN0cmVhbSA9IGNodW5rID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKGBTdHJlYW1zIGluIG9iamVjdCBtb2RlIGFyZSBub3Qgc3VwcG9ydGVkOiAke1N0cmluZyhjaHVuayl9YCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGVuZ3RoUHJvcGVydHkgPSBjb252ZXJ0ZWRDaHVuayA9PiBjb252ZXJ0ZWRDaHVuay5sZW5ndGg7XG4iLCAiaW1wb3J0IHtnZXRTdHJlYW1Db250ZW50c30gZnJvbSAnLi9jb250ZW50cy5qcyc7XG5pbXBvcnQge2lkZW50aXR5LCBub29wLCBnZXRDb250ZW50c1Byb3BlcnR5fSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmVhbUFzQXJyYXkoc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBnZXRTdHJlYW1Db250ZW50cyhzdHJlYW0sIGFycmF5TWV0aG9kcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IGluaXRBcnJheSA9ICgpID0+ICh7Y29udGVudHM6IFtdfSk7XG5cbmNvbnN0IGluY3JlbWVudCA9ICgpID0+IDE7XG5cbmNvbnN0IGFkZEFycmF5Q2h1bmsgPSAoY29udmVydGVkQ2h1bmssIHtjb250ZW50c30pID0+IHtcblx0Y29udGVudHMucHVzaChjb252ZXJ0ZWRDaHVuayk7XG5cdHJldHVybiBjb250ZW50cztcbn07XG5cbmNvbnN0IGFycmF5TWV0aG9kcyA9IHtcblx0aW5pdDogaW5pdEFycmF5LFxuXHRjb252ZXJ0Q2h1bms6IHtcblx0XHRzdHJpbmc6IGlkZW50aXR5LFxuXHRcdGJ1ZmZlcjogaWRlbnRpdHksXG5cdFx0YXJyYXlCdWZmZXI6IGlkZW50aXR5LFxuXHRcdGRhdGFWaWV3OiBpZGVudGl0eSxcblx0XHR0eXBlZEFycmF5OiBpZGVudGl0eSxcblx0XHRvdGhlcnM6IGlkZW50aXR5LFxuXHR9LFxuXHRnZXRTaXplOiBpbmNyZW1lbnQsXG5cdHRydW5jYXRlQ2h1bms6IG5vb3AsXG5cdGFkZENodW5rOiBhZGRBcnJheUNodW5rLFxuXHRnZXRGaW5hbENodW5rOiBub29wLFxuXHRmaW5hbGl6ZTogZ2V0Q29udGVudHNQcm9wZXJ0eSxcbn07XG4iLCAiaW1wb3J0IHtnZXRTdHJlYW1Db250ZW50c30gZnJvbSAnLi9jb250ZW50cy5qcyc7XG5pbXBvcnQge25vb3AsIHRocm93T2JqZWN0U3RyZWFtLCBnZXRMZW5ndGhQcm9wZXJ0eX0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJlYW1Bc0FycmF5QnVmZmVyKHN0cmVhbSwgb3B0aW9ucykge1xuXHRyZXR1cm4gZ2V0U3RyZWFtQ29udGVudHMoc3RyZWFtLCBhcnJheUJ1ZmZlck1ldGhvZHMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBpbml0QXJyYXlCdWZmZXIgPSAoKSA9PiAoe2NvbnRlbnRzOiBuZXcgQXJyYXlCdWZmZXIoMCl9KTtcblxuY29uc3QgdXNlVGV4dEVuY29kZXIgPSBjaHVuayA9PiB0ZXh0RW5jb2Rlci5lbmNvZGUoY2h1bmspO1xuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblxuY29uc3QgdXNlVWludDhBcnJheSA9IGNodW5rID0+IG5ldyBVaW50OEFycmF5KGNodW5rKTtcblxuY29uc3QgdXNlVWludDhBcnJheVdpdGhPZmZzZXQgPSBjaHVuayA9PiBuZXcgVWludDhBcnJheShjaHVuay5idWZmZXIsIGNodW5rLmJ5dGVPZmZzZXQsIGNodW5rLmJ5dGVMZW5ndGgpO1xuXG5jb25zdCB0cnVuY2F0ZUFycmF5QnVmZmVyQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIGNodW5rU2l6ZSkgPT4gY29udmVydGVkQ2h1bmsuc2xpY2UoMCwgY2h1bmtTaXplKTtcblxuLy8gYGNvbnRlbnRzYCBpcyBhbiBpbmNyZWFzaW5nbHkgZ3Jvd2luZyBgVWludDhBcnJheWAuXG5jb25zdCBhZGRBcnJheUJ1ZmZlckNodW5rID0gKGNvbnZlcnRlZENodW5rLCB7Y29udGVudHMsIGxlbmd0aDogcHJldmlvdXNMZW5ndGh9LCBsZW5ndGgpID0+IHtcblx0Y29uc3QgbmV3Q29udGVudHMgPSBoYXNBcnJheUJ1ZmZlclJlc2l6ZSgpID8gcmVzaXplQXJyYXlCdWZmZXIoY29udGVudHMsIGxlbmd0aCkgOiByZXNpemVBcnJheUJ1ZmZlclNsb3coY29udGVudHMsIGxlbmd0aCk7XG5cdG5ldyBVaW50OEFycmF5KG5ld0NvbnRlbnRzKS5zZXQoY29udmVydGVkQ2h1bmssIHByZXZpb3VzTGVuZ3RoKTtcblx0cmV0dXJuIG5ld0NvbnRlbnRzO1xufTtcblxuLy8gV2l0aG91dCBgQXJyYXlCdWZmZXIucmVzaXplKClgLCBgY29udGVudHNgIHNpemUgaXMgYWx3YXlzIGEgcG93ZXIgb2YgMi5cbi8vIFRoaXMgbWVhbnMgaXRzIGxhc3QgYnl0ZXMgYXJlIHplcm9lcyAobm90IHN0cmVhbSBkYXRhKSwgd2hpY2ggbmVlZCB0byBiZVxuLy8gdHJpbW1lZCBhdCB0aGUgZW5kIHdpdGggYEFycmF5QnVmZmVyLnNsaWNlKClgLlxuY29uc3QgcmVzaXplQXJyYXlCdWZmZXJTbG93ID0gKGNvbnRlbnRzLCBsZW5ndGgpID0+IHtcblx0aWYgKGxlbmd0aCA8PSBjb250ZW50cy5ieXRlTGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnRzO1xuXHR9XG5cblx0Y29uc3QgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoZ2V0TmV3Q29udGVudHNMZW5ndGgobGVuZ3RoKSk7XG5cdG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKS5zZXQobmV3IFVpbnQ4QXJyYXkoY29udGVudHMpLCAwKTtcblx0cmV0dXJuIGFycmF5QnVmZmVyO1xufTtcblxuLy8gV2l0aCBgQXJyYXlCdWZmZXIucmVzaXplKClgLCBgY29udGVudHNgIHNpemUgbWF0Y2hlcyBleGFjdGx5IHRoZSBzaXplIG9mXG4vLyB0aGUgc3RyZWFtIGRhdGEuIEl0IGRvZXMgbm90IGluY2x1ZGUgZXh0cmFuZW91cyB6ZXJvZXMgdG8gdHJpbSBhdCB0aGUgZW5kLlxuLy8gVGhlIHVuZGVybHlpbmcgYEFycmF5QnVmZmVyYCBkb2VzIGFsbG9jYXRlIGEgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgaXMgYSBwb3dlclxuLy8gb2YgMiwgYnV0IHRob3NlIGJ5dGVzIGFyZSBvbmx5IHZpc2libGUgYWZ0ZXIgY2FsbGluZyBgQXJyYXlCdWZmZXIucmVzaXplKClgLlxuY29uc3QgcmVzaXplQXJyYXlCdWZmZXIgPSAoY29udGVudHMsIGxlbmd0aCkgPT4ge1xuXHRpZiAobGVuZ3RoIDw9IGNvbnRlbnRzLm1heEJ5dGVMZW5ndGgpIHtcblx0XHRjb250ZW50cy5yZXNpemUobGVuZ3RoKTtcblx0XHRyZXR1cm4gY29udGVudHM7XG5cdH1cblxuXHRjb25zdCBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgsIHttYXhCeXRlTGVuZ3RoOiBnZXROZXdDb250ZW50c0xlbmd0aChsZW5ndGgpfSk7XG5cdG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKS5zZXQobmV3IFVpbnQ4QXJyYXkoY29udGVudHMpLCAwKTtcblx0cmV0dXJuIGFycmF5QnVmZmVyO1xufTtcblxuLy8gUmV0cmlldmUgdGhlIGNsb3Nlc3QgYGxlbmd0aGAgdGhhdCBpcyBib3RoID49IGFuZCBhIHBvd2VyIG9mIDJcbmNvbnN0IGdldE5ld0NvbnRlbnRzTGVuZ3RoID0gbGVuZ3RoID0+IFNDQUxFX0ZBQ1RPUiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cobGVuZ3RoKSAvIE1hdGgubG9nKFNDQUxFX0ZBQ1RPUikpO1xuXG5jb25zdCBTQ0FMRV9GQUNUT1IgPSAyO1xuXG5jb25zdCBmaW5hbGl6ZUFycmF5QnVmZmVyID0gKHtjb250ZW50cywgbGVuZ3RofSkgPT4gaGFzQXJyYXlCdWZmZXJSZXNpemUoKSA/IGNvbnRlbnRzIDogY29udGVudHMuc2xpY2UoMCwgbGVuZ3RoKTtcblxuLy8gYEFycmF5QnVmZmVyLnNsaWNlKClgIGlzIHNsb3cuIFdoZW4gYEFycmF5QnVmZmVyLnJlc2l6ZSgpYCBpcyBhdmFpbGFibGVcbi8vIChOb2RlID49MjAuMC4wLCBTYWZhcmkgPj0xNi40IGFuZCBDaHJvbWUpLCB3ZSBjYW4gdXNlIGl0IGluc3RlYWQuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8td2FybmluZy1jb21tZW50c1xuLy8gVE9ETzogcmVtb3ZlIGFmdGVyIGRyb3BwaW5nIHN1cHBvcnQgZm9yIE5vZGUgMjAuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8td2FybmluZy1jb21tZW50c1xuLy8gVE9ETzogdXNlIGBBcnJheUJ1ZmZlci50cmFuc2ZlclRvRml4ZWRMZW5ndGgoKWAgaW5zdGVhZCBvbmNlIGl0IGlzIGF2YWlsYWJsZVxuY29uc3QgaGFzQXJyYXlCdWZmZXJSZXNpemUgPSAoKSA9PiAncmVzaXplJyBpbiBBcnJheUJ1ZmZlci5wcm90b3R5cGU7XG5cbmNvbnN0IGFycmF5QnVmZmVyTWV0aG9kcyA9IHtcblx0aW5pdDogaW5pdEFycmF5QnVmZmVyLFxuXHRjb252ZXJ0Q2h1bms6IHtcblx0XHRzdHJpbmc6IHVzZVRleHRFbmNvZGVyLFxuXHRcdGJ1ZmZlcjogdXNlVWludDhBcnJheSxcblx0XHRhcnJheUJ1ZmZlcjogdXNlVWludDhBcnJheSxcblx0XHRkYXRhVmlldzogdXNlVWludDhBcnJheVdpdGhPZmZzZXQsXG5cdFx0dHlwZWRBcnJheTogdXNlVWludDhBcnJheVdpdGhPZmZzZXQsXG5cdFx0b3RoZXJzOiB0aHJvd09iamVjdFN0cmVhbSxcblx0fSxcblx0Z2V0U2l6ZTogZ2V0TGVuZ3RoUHJvcGVydHksXG5cdHRydW5jYXRlQ2h1bms6IHRydW5jYXRlQXJyYXlCdWZmZXJDaHVuayxcblx0YWRkQ2h1bms6IGFkZEFycmF5QnVmZmVyQ2h1bmssXG5cdGdldEZpbmFsQ2h1bms6IG5vb3AsXG5cdGZpbmFsaXplOiBmaW5hbGl6ZUFycmF5QnVmZmVyLFxufTtcbiIsICJpbXBvcnQge2dldFN0cmVhbUFzQXJyYXlCdWZmZXJ9IGZyb20gJy4vYXJyYXktYnVmZmVyLmpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmVhbUFzQnVmZmVyKHN0cmVhbSwgb3B0aW9ucykge1xuXHRpZiAoISgnQnVmZmVyJyBpbiBnbG9iYWxUaGlzKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZ2V0U3RyZWFtQXNCdWZmZXIoKSBpcyBvbmx5IHN1cHBvcnRlZCBpbiBOb2RlLmpzJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdHJldHVybiBhcnJheUJ1ZmZlclRvTm9kZUJ1ZmZlcihhd2FpdCBnZXRTdHJlYW1Bc0FycmF5QnVmZmVyKHN0cmVhbSwgb3B0aW9ucykpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvci5idWZmZXJlZERhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZXJyb3IuYnVmZmVyZWREYXRhID0gYXJyYXlCdWZmZXJUb05vZGVCdWZmZXIoZXJyb3IuYnVmZmVyZWREYXRhKTtcblx0XHR9XG5cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5jb25zdCBhcnJheUJ1ZmZlclRvTm9kZUJ1ZmZlciA9IGFycmF5QnVmZmVyID0+IGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpO1xuIiwgImltcG9ydCB7Z2V0U3RyZWFtQ29udGVudHN9IGZyb20gJy4vY29udGVudHMuanMnO1xuaW1wb3J0IHtcblx0aWRlbnRpdHksXG5cdGdldENvbnRlbnRzUHJvcGVydHksXG5cdHRocm93T2JqZWN0U3RyZWFtLFxuXHRnZXRMZW5ndGhQcm9wZXJ0eSxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJlYW1Bc1N0cmluZyhzdHJlYW0sIG9wdGlvbnMpIHtcblx0cmV0dXJuIGdldFN0cmVhbUNvbnRlbnRzKHN0cmVhbSwgc3RyaW5nTWV0aG9kcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IGluaXRTdHJpbmcgPSAoKSA9PiAoe2NvbnRlbnRzOiAnJywgdGV4dERlY29kZXI6IG5ldyBUZXh0RGVjb2RlcigpfSk7XG5cbmNvbnN0IHVzZVRleHREZWNvZGVyID0gKGNodW5rLCB7dGV4dERlY29kZXJ9KSA9PiB0ZXh0RGVjb2Rlci5kZWNvZGUoY2h1bmssIHtzdHJlYW06IHRydWV9KTtcblxuY29uc3QgYWRkU3RyaW5nQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIHtjb250ZW50c30pID0+IGNvbnRlbnRzICsgY29udmVydGVkQ2h1bms7XG5cbmNvbnN0IHRydW5jYXRlU3RyaW5nQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIGNodW5rU2l6ZSkgPT4gY29udmVydGVkQ2h1bmsuc2xpY2UoMCwgY2h1bmtTaXplKTtcblxuY29uc3QgZ2V0RmluYWxTdHJpbmdDaHVuayA9ICh7dGV4dERlY29kZXJ9KSA9PiB7XG5cdGNvbnN0IGZpbmFsQ2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUoKTtcblx0cmV0dXJuIGZpbmFsQ2h1bmsgPT09ICcnID8gdW5kZWZpbmVkIDogZmluYWxDaHVuaztcbn07XG5cbmNvbnN0IHN0cmluZ01ldGhvZHMgPSB7XG5cdGluaXQ6IGluaXRTdHJpbmcsXG5cdGNvbnZlcnRDaHVuazoge1xuXHRcdHN0cmluZzogaWRlbnRpdHksXG5cdFx0YnVmZmVyOiB1c2VUZXh0RGVjb2Rlcixcblx0XHRhcnJheUJ1ZmZlcjogdXNlVGV4dERlY29kZXIsXG5cdFx0ZGF0YVZpZXc6IHVzZVRleHREZWNvZGVyLFxuXHRcdHR5cGVkQXJyYXk6IHVzZVRleHREZWNvZGVyLFxuXHRcdG90aGVyczogdGhyb3dPYmplY3RTdHJlYW0sXG5cdH0sXG5cdGdldFNpemU6IGdldExlbmd0aFByb3BlcnR5LFxuXHR0cnVuY2F0ZUNodW5rOiB0cnVuY2F0ZVN0cmluZ0NodW5rLFxuXHRhZGRDaHVuazogYWRkU3RyaW5nQ2h1bmssXG5cdGdldEZpbmFsQ2h1bms6IGdldEZpbmFsU3RyaW5nQ2h1bmssXG5cdGZpbmFsaXplOiBnZXRDb250ZW50c1Byb3BlcnR5LFxufTtcbiIsICJleHBvcnQge2dldFN0cmVhbUFzQXJyYXl9IGZyb20gJy4vYXJyYXkuanMnO1xuZXhwb3J0IHtnZXRTdHJlYW1Bc0FycmF5QnVmZmVyfSBmcm9tICcuL2FycmF5LWJ1ZmZlci5qcyc7XG5leHBvcnQge2dldFN0cmVhbUFzQnVmZmVyfSBmcm9tICcuL2J1ZmZlci5qcyc7XG5leHBvcnQge2dldFN0cmVhbUFzU3RyaW5nIGFzIGRlZmF1bHR9IGZyb20gJy4vc3RyaW5nLmpzJztcbmV4cG9ydCB7TWF4QnVmZmVyRXJyb3J9IGZyb20gJy4vY29udGVudHMuanMnO1xuIiwgImltcG9ydCB7b259IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcbmltcG9ydCB7bm9kZUltcG9ydHN9IGZyb20gJy4vc3RyZWFtLmpzJztcblxuT2JqZWN0LmFzc2lnbihub2RlSW1wb3J0cywge29uLCBmaW5pc2hlZH0pO1xuXG5leHBvcnQge1xuXHRkZWZhdWx0LFxuXHRnZXRTdHJlYW1Bc0FycmF5LFxuXHRnZXRTdHJlYW1Bc0FycmF5QnVmZmVyLFxuXHRnZXRTdHJlYW1Bc0J1ZmZlcixcblx0TWF4QnVmZmVyRXJyb3IsXG59IGZyb20gJy4vZXhwb3J0cy5qcyc7XG4iLCAiaW1wb3J0IHtNYXhCdWZmZXJFcnJvcn0gZnJvbSAnZ2V0LXN0cmVhbSc7XG5pbXBvcnQge2dldFN0cmVhbU5hbWV9IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge2dldEZkU3BlY2lmaWNWYWx1ZX0gZnJvbSAnLi4vYXJndW1lbnRzL3NwZWNpZmljLmpzJztcblxuLy8gV2hlbiB0aGUgYG1heEJ1ZmZlcmAgb3B0aW9uIGlzIGhpdCwgYSBNYXhCdWZmZXJFcnJvciBpcyB0aHJvd24uXG4vLyBUaGUgc3RyZWFtIGlzIGFib3J0ZWQsIHRoZW4gc3BlY2lmaWMgaW5mb3JtYXRpb24gaXMga2VwdCBmb3IgdGhlIGVycm9yIG1lc3NhZ2UuXG5leHBvcnQgY29uc3QgaGFuZGxlTWF4QnVmZmVyID0gKHtlcnJvciwgc3RyZWFtLCByZWFkYWJsZU9iamVjdE1vZGUsIGxpbmVzLCBlbmNvZGluZywgZmROdW1iZXJ9KSA9PiB7XG5cdGlmICghKGVycm9yIGluc3RhbmNlb2YgTWF4QnVmZmVyRXJyb3IpKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cblxuXHRpZiAoZmROdW1iZXIgPT09ICdhbGwnKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0Y29uc3QgdW5pdCA9IGdldE1heEJ1ZmZlclVuaXQocmVhZGFibGVPYmplY3RNb2RlLCBsaW5lcywgZW5jb2RpbmcpO1xuXHRlcnJvci5tYXhCdWZmZXJJbmZvID0ge2ZkTnVtYmVyLCB1bml0fTtcblx0c3RyZWFtLmRlc3Ryb3koKTtcblx0dGhyb3cgZXJyb3I7XG59O1xuXG5jb25zdCBnZXRNYXhCdWZmZXJVbml0ID0gKHJlYWRhYmxlT2JqZWN0TW9kZSwgbGluZXMsIGVuY29kaW5nKSA9PiB7XG5cdGlmIChyZWFkYWJsZU9iamVjdE1vZGUpIHtcblx0XHRyZXR1cm4gJ29iamVjdHMnO1xuXHR9XG5cblx0aWYgKGxpbmVzKSB7XG5cdFx0cmV0dXJuICdsaW5lcyc7XG5cdH1cblxuXHRpZiAoZW5jb2RpbmcgPT09ICdidWZmZXInKSB7XG5cdFx0cmV0dXJuICdieXRlcyc7XG5cdH1cblxuXHRyZXR1cm4gJ2NoYXJhY3RlcnMnO1xufTtcblxuLy8gQ2hlY2sgdGhlIGBtYXhCdWZmZXJgIG9wdGlvbiB3aXRoIGByZXN1bHQuaXBjT3V0cHV0YFxuZXhwb3J0IGNvbnN0IGNoZWNrSXBjTWF4QnVmZmVyID0gKHN1YnByb2Nlc3MsIGlwY091dHB1dCwgbWF4QnVmZmVyKSA9PiB7XG5cdGlmIChpcGNPdXRwdXQubGVuZ3RoICE9PSBtYXhCdWZmZXIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBlcnJvciA9IG5ldyBNYXhCdWZmZXJFcnJvcigpO1xuXHRlcnJvci5tYXhCdWZmZXJJbmZvID0ge2ZkTnVtYmVyOiAnaXBjJ307XG5cdHRocm93IGVycm9yO1xufTtcblxuLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGBtYXhCdWZmZXJgIGlzIGhpdFxuZXhwb3J0IGNvbnN0IGdldE1heEJ1ZmZlck1lc3NhZ2UgPSAoZXJyb3IsIG1heEJ1ZmZlcikgPT4ge1xuXHRjb25zdCB7c3RyZWFtTmFtZSwgdGhyZXNob2xkLCB1bml0fSA9IGdldE1heEJ1ZmZlckluZm8oZXJyb3IsIG1heEJ1ZmZlcik7XG5cdHJldHVybiBgQ29tbWFuZCdzICR7c3RyZWFtTmFtZX0gd2FzIGxhcmdlciB0aGFuICR7dGhyZXNob2xkfSAke3VuaXR9YDtcbn07XG5cbmNvbnN0IGdldE1heEJ1ZmZlckluZm8gPSAoZXJyb3IsIG1heEJ1ZmZlcikgPT4ge1xuXHRpZiAoZXJyb3I/Lm1heEJ1ZmZlckluZm8gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7c3RyZWFtTmFtZTogJ291dHB1dCcsIHRocmVzaG9sZDogbWF4QnVmZmVyWzFdLCB1bml0OiAnYnl0ZXMnfTtcblx0fVxuXG5cdGNvbnN0IHttYXhCdWZmZXJJbmZvOiB7ZmROdW1iZXIsIHVuaXR9fSA9IGVycm9yO1xuXHRkZWxldGUgZXJyb3IubWF4QnVmZmVySW5mbztcblxuXHRjb25zdCB0aHJlc2hvbGQgPSBnZXRGZFNwZWNpZmljVmFsdWUobWF4QnVmZmVyLCBmZE51bWJlcik7XG5cdGlmIChmZE51bWJlciA9PT0gJ2lwYycpIHtcblx0XHRyZXR1cm4ge3N0cmVhbU5hbWU6ICdJUEMgb3V0cHV0JywgdGhyZXNob2xkLCB1bml0OiAnbWVzc2FnZXMnfTtcblx0fVxuXG5cdHJldHVybiB7c3RyZWFtTmFtZTogZ2V0U3RyZWFtTmFtZShmZE51bWJlciksIHRocmVzaG9sZCwgdW5pdH07XG59O1xuXG4vLyBUaGUgb25seSB3YXkgdG8gYXBwbHkgYG1heEJ1ZmZlcmAgd2l0aCBgc3Bhd25TeW5jKClgIGlzIHRvIHVzZSB0aGUgbmF0aXZlIGBtYXhCdWZmZXJgIG9wdGlvbiBOb2RlLmpzIHByb3ZpZGVzLlxuLy8gSG93ZXZlciwgdGhpcyBoYXMgbXVsdGlwbGUgbGltaXRhdGlvbnMsIGFuZCBjYW5ub3QgYmVoYXZlIHRoZSBleGFjdCBzYW1lIHdheSBhcyB0aGUgYXN5bmMgYmVoYXZpb3IuXG4vLyBXaGVuIHRoZSBgbWF4QnVmZmVyYCBpcyBoaXQsIGEgYEVOT0JVRlNgIGVycm9yIGlzIHRocm93bi5cbmV4cG9ydCBjb25zdCBpc01heEJ1ZmZlclN5bmMgPSAocmVzdWx0RXJyb3IsIG91dHB1dCwgbWF4QnVmZmVyKSA9PiByZXN1bHRFcnJvcj8uY29kZSA9PT0gJ0VOT0JVRlMnXG5cdCYmIG91dHB1dCAhPT0gbnVsbFxuXHQmJiBvdXRwdXQuc29tZShyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdC5sZW5ndGggPiBnZXRNYXhCdWZmZXJTeW5jKG1heEJ1ZmZlcikpO1xuXG4vLyBXaGVuIGBtYXhCdWZmZXJgIGlzIGhpdCwgZW5zdXJlIHRoZSByZXN1bHQgaXMgdHJ1bmNhdGVkXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVNYXhCdWZmZXJTeW5jID0gKHJlc3VsdCwgaXNNYXhCdWZmZXIsIG1heEJ1ZmZlcikgPT4ge1xuXHRpZiAoIWlzTWF4QnVmZmVyKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGNvbnN0IG1heEJ1ZmZlclZhbHVlID0gZ2V0TWF4QnVmZmVyU3luYyhtYXhCdWZmZXIpO1xuXHRyZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IG1heEJ1ZmZlclZhbHVlID8gcmVzdWx0LnNsaWNlKDAsIG1heEJ1ZmZlclZhbHVlKSA6IHJlc3VsdDtcbn07XG5cbi8vIGBzcGF3blN5bmMoKWAgZG9lcyBub3QgYWxsb3cgZGlmZmVyZW50aWF0aW5nIGBtYXhCdWZmZXJgIHBlciBmaWxlIGRlc2NyaXB0b3IsIHNvIHdlIGFsd2F5cyB1c2UgYHN0ZG91dGBcbmV4cG9ydCBjb25zdCBnZXRNYXhCdWZmZXJTeW5jID0gKFssIHN0ZG91dE1heEJ1ZmZlcl0pID0+IHN0ZG91dE1heEJ1ZmZlcjtcbiIsICJpbXBvcnQge2luc3BlY3R9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQgc3RyaXBGaW5hbE5ld2xpbmUgZnJvbSAnc3RyaXAtZmluYWwtbmV3bGluZSc7XG5pbXBvcnQge2lzVWludDhBcnJheSwgdWludDhBcnJheVRvU3RyaW5nfSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7Zml4Q3dkRXJyb3J9IGZyb20gJy4uL2FyZ3VtZW50cy9jd2QuanMnO1xuaW1wb3J0IHtlc2NhcGVMaW5lc30gZnJvbSAnLi4vYXJndW1lbnRzL2VzY2FwZS5qcyc7XG5pbXBvcnQge2dldE1heEJ1ZmZlck1lc3NhZ2V9IGZyb20gJy4uL2lvL21heC1idWZmZXIuanMnO1xuaW1wb3J0IHtnZXRTaWduYWxEZXNjcmlwdGlvbn0gZnJvbSAnLi4vdGVybWluYXRlL3NpZ25hbC5qcyc7XG5pbXBvcnQge0Rpc2NhcmRlZEVycm9yLCBpc0V4ZWNhRXJyb3J9IGZyb20gJy4vZmluYWwtZXJyb3IuanMnO1xuXG4vLyBDb21wdXRlcyBgZXJyb3IubWVzc2FnZWAsIGBlcnJvci5zaG9ydE1lc3NhZ2VgIGFuZCBgZXJyb3Iub3JpZ2luYWxNZXNzYWdlYFxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lc3NhZ2VzID0gKHtcblx0c3RkaW8sXG5cdGFsbCxcblx0aXBjT3V0cHV0LFxuXHRvcmlnaW5hbEVycm9yLFxuXHRzaWduYWwsXG5cdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRleGl0Q29kZSxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdHRpbWVkT3V0LFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNNYXhCdWZmZXIsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdGtpbGxTaWduYWwsXG5cdG1heEJ1ZmZlcixcblx0dGltZW91dCxcblx0Y3dkLFxufSkgPT4ge1xuXHRjb25zdCBlcnJvckNvZGUgPSBvcmlnaW5hbEVycm9yPy5jb2RlO1xuXHRjb25zdCBwcmVmaXggPSBnZXRFcnJvclByZWZpeCh7XG5cdFx0b3JpZ2luYWxFcnJvcixcblx0XHR0aW1lZE91dCxcblx0XHR0aW1lb3V0LFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdG1heEJ1ZmZlcixcblx0XHRlcnJvckNvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRcdGV4aXRDb2RlLFxuXHRcdGlzQ2FuY2VsZWQsXG5cdFx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGtpbGxTaWduYWwsXG5cdH0pO1xuXHRjb25zdCBvcmlnaW5hbE1lc3NhZ2UgPSBnZXRPcmlnaW5hbE1lc3NhZ2Uob3JpZ2luYWxFcnJvciwgY3dkKTtcblx0Y29uc3Qgc3VmZml4ID0gb3JpZ2luYWxNZXNzYWdlID09PSB1bmRlZmluZWQgPyAnJyA6IGBcXG4ke29yaWdpbmFsTWVzc2FnZX1gO1xuXHRjb25zdCBzaG9ydE1lc3NhZ2UgPSBgJHtwcmVmaXh9OiAke2VzY2FwZWRDb21tYW5kfSR7c3VmZml4fWA7XG5cdGNvbnN0IG1lc3NhZ2VTdGRpbyA9IGFsbCA9PT0gdW5kZWZpbmVkID8gW3N0ZGlvWzJdLCBzdGRpb1sxXV0gOiBbYWxsXTtcblx0Y29uc3QgbWVzc2FnZSA9IFtcblx0XHRzaG9ydE1lc3NhZ2UsXG5cdFx0Li4ubWVzc2FnZVN0ZGlvLFxuXHRcdC4uLnN0ZGlvLnNsaWNlKDMpLFxuXHRcdGlwY091dHB1dC5tYXAoaXBjTWVzc2FnZSA9PiBzZXJpYWxpemVJcGNNZXNzYWdlKGlwY01lc3NhZ2UpKS5qb2luKCdcXG4nKSxcblx0XVxuXHRcdC5tYXAobWVzc2FnZVBhcnQgPT4gZXNjYXBlTGluZXMoc3RyaXBGaW5hbE5ld2xpbmUoc2VyaWFsaXplTWVzc2FnZVBhcnQobWVzc2FnZVBhcnQpKSkpXG5cdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdC5qb2luKCdcXG5cXG4nKTtcblx0cmV0dXJuIHtvcmlnaW5hbE1lc3NhZ2UsIHNob3J0TWVzc2FnZSwgbWVzc2FnZX07XG59O1xuXG5jb25zdCBnZXRFcnJvclByZWZpeCA9ICh7XG5cdG9yaWdpbmFsRXJyb3IsXG5cdHRpbWVkT3V0LFxuXHR0aW1lb3V0LFxuXHRpc01heEJ1ZmZlcixcblx0bWF4QnVmZmVyLFxuXHRlcnJvckNvZGUsXG5cdHNpZ25hbCxcblx0c2lnbmFsRGVzY3JpcHRpb24sXG5cdGV4aXRDb2RlLFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0a2lsbFNpZ25hbCxcbn0pID0+IHtcblx0Y29uc3QgZm9yY2VmdWxTdWZmaXggPSBnZXRGb3JjZWZ1bFN1ZmZpeChpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLCBmb3JjZUtpbGxBZnRlckRlbGF5KTtcblxuXHRpZiAodGltZWRPdXQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgdGltZWQgb3V0IGFmdGVyICR7dGltZW91dH0gbWlsbGlzZWNvbmRzJHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGlzR3JhY2VmdWxseUNhbmNlbGVkKSB7XG5cdFx0aWYgKHNpZ25hbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGdyYWNlZnVsbHkgY2FuY2VsZWQgd2l0aCBleGl0IGNvZGUgJHtleGl0Q29kZX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkXG5cdFx0XHQ/IGBDb21tYW5kIHdhcyBncmFjZWZ1bGx5IGNhbmNlbGVkJHtmb3JjZWZ1bFN1ZmZpeH1gXG5cdFx0XHQ6IGBDb21tYW5kIHdhcyBncmFjZWZ1bGx5IGNhbmNlbGVkIHdpdGggJHtzaWduYWx9ICgke3NpZ25hbERlc2NyaXB0aW9ufSlgO1xuXHR9XG5cblx0aWYgKGlzQ2FuY2VsZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGNhbmNlbGVkJHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGlzTWF4QnVmZmVyKSB7XG5cdFx0cmV0dXJuIGAke2dldE1heEJ1ZmZlck1lc3NhZ2Uob3JpZ2luYWxFcnJvciwgbWF4QnVmZmVyKX0ke2ZvcmNlZnVsU3VmZml4fWA7XG5cdH1cblxuXHRpZiAoZXJyb3JDb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgZmFpbGVkIHdpdGggJHtlcnJvckNvZGV9JHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGtpbGxlZCB3aXRoICR7a2lsbFNpZ25hbH0gKCR7Z2V0U2lnbmFsRGVzY3JpcHRpb24oa2lsbFNpZ25hbCl9KSR7Zm9yY2VmdWxTdWZmaXh9YDtcblx0fVxuXG5cdGlmIChzaWduYWwgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBgQ29tbWFuZCB3YXMga2lsbGVkIHdpdGggJHtzaWduYWx9ICgke3NpZ25hbERlc2NyaXB0aW9ufSlgO1xuXHR9XG5cblx0aWYgKGV4aXRDb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgZmFpbGVkIHdpdGggZXhpdCBjb2RlICR7ZXhpdENvZGV9YDtcblx0fVxuXG5cdHJldHVybiAnQ29tbWFuZCBmYWlsZWQnO1xufTtcblxuY29uc3QgZ2V0Rm9yY2VmdWxTdWZmaXggPSAoaXNGb3JjZWZ1bGx5VGVybWluYXRlZCwgZm9yY2VLaWxsQWZ0ZXJEZWxheSkgPT4gaXNGb3JjZWZ1bGx5VGVybWluYXRlZFxuXHQ/IGAgYW5kIHdhcyBmb3JjZWZ1bGx5IHRlcm1pbmF0ZWQgYWZ0ZXIgJHtmb3JjZUtpbGxBZnRlckRlbGF5fSBtaWxsaXNlY29uZHNgXG5cdDogJyc7XG5cbmNvbnN0IGdldE9yaWdpbmFsTWVzc2FnZSA9IChvcmlnaW5hbEVycm9yLCBjd2QpID0+IHtcblx0aWYgKG9yaWdpbmFsRXJyb3IgaW5zdGFuY2VvZiBEaXNjYXJkZWRFcnJvcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9yaWdpbmFsTWVzc2FnZSA9IGlzRXhlY2FFcnJvcihvcmlnaW5hbEVycm9yKVxuXHRcdD8gb3JpZ2luYWxFcnJvci5vcmlnaW5hbE1lc3NhZ2Vcblx0XHQ6IFN0cmluZyhvcmlnaW5hbEVycm9yPy5tZXNzYWdlID8/IG9yaWdpbmFsRXJyb3IpO1xuXHRjb25zdCBlc2NhcGVkT3JpZ2luYWxNZXNzYWdlID0gZXNjYXBlTGluZXMoZml4Q3dkRXJyb3Iob3JpZ2luYWxNZXNzYWdlLCBjd2QpKTtcblx0cmV0dXJuIGVzY2FwZWRPcmlnaW5hbE1lc3NhZ2UgPT09ICcnID8gdW5kZWZpbmVkIDogZXNjYXBlZE9yaWdpbmFsTWVzc2FnZTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUlwY01lc3NhZ2UgPSBpcGNNZXNzYWdlID0+IHR5cGVvZiBpcGNNZXNzYWdlID09PSAnc3RyaW5nJ1xuXHQ/IGlwY01lc3NhZ2Vcblx0OiBpbnNwZWN0KGlwY01lc3NhZ2UpO1xuXG5jb25zdCBzZXJpYWxpemVNZXNzYWdlUGFydCA9IG1lc3NhZ2VQYXJ0ID0+IEFycmF5LmlzQXJyYXkobWVzc2FnZVBhcnQpXG5cdD8gbWVzc2FnZVBhcnQubWFwKG1lc3NhZ2VJdGVtID0+IHN0cmlwRmluYWxOZXdsaW5lKHNlcmlhbGl6ZU1lc3NhZ2VJdGVtKG1lc3NhZ2VJdGVtKSkpLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuXHQ6IHNlcmlhbGl6ZU1lc3NhZ2VJdGVtKG1lc3NhZ2VQYXJ0KTtcblxuY29uc3Qgc2VyaWFsaXplTWVzc2FnZUl0ZW0gPSBtZXNzYWdlSXRlbSA9PiB7XG5cdGlmICh0eXBlb2YgbWVzc2FnZUl0ZW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2VJdGVtO1xuXHR9XG5cblx0aWYgKGlzVWludDhBcnJheShtZXNzYWdlSXRlbSkpIHtcblx0XHRyZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKG1lc3NhZ2VJdGVtKTtcblx0fVxuXG5cdHJldHVybiAnJztcbn07XG4iLCAiaW1wb3J0IHtnZXRTaWduYWxEZXNjcmlwdGlvbn0gZnJvbSAnLi4vdGVybWluYXRlL3NpZ25hbC5qcyc7XG5pbXBvcnQge2dldER1cmF0aW9uTXN9IGZyb20gJy4vZHVyYXRpb24uanMnO1xuaW1wb3J0IHtnZXRGaW5hbEVycm9yfSBmcm9tICcuL2ZpbmFsLWVycm9yLmpzJztcbmltcG9ydCB7Y3JlYXRlTWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZS5qcyc7XG5cbi8vIE9iamVjdCByZXR1cm5lZCBvbiBzdWJwcm9jZXNzIHN1Y2Nlc3NcbmV4cG9ydCBjb25zdCBtYWtlU3VjY2Vzc1Jlc3VsdCA9ICh7XG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRzdGRpbyxcblx0YWxsLFxuXHRpcGNPdXRwdXQsXG5cdG9wdGlvbnM6IHtjd2R9LFxuXHRzdGFydFRpbWUsXG59KSA9PiBvbWl0VW5kZWZpbmVkUHJvcGVydGllcyh7XG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRjd2QsXG5cdGR1cmF0aW9uTXM6IGdldER1cmF0aW9uTXMoc3RhcnRUaW1lKSxcblx0ZmFpbGVkOiBmYWxzZSxcblx0dGltZWRPdXQ6IGZhbHNlLFxuXHRpc0NhbmNlbGVkOiBmYWxzZSxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQ6IGZhbHNlLFxuXHRpc1Rlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRpc01heEJ1ZmZlcjogZmFsc2UsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRleGl0Q29kZTogMCxcblx0c3Rkb3V0OiBzdGRpb1sxXSxcblx0c3RkZXJyOiBzdGRpb1syXSxcblx0YWxsLFxuXHRzdGRpbyxcblx0aXBjT3V0cHV0LFxuXHRwaXBlZEZyb206IFtdLFxufSk7XG5cbi8vIE9iamVjdCByZXR1cm5lZCBvbiBzdWJwcm9jZXNzIGZhaWx1cmUgYmVmb3JlIHNwYXduaW5nXG5leHBvcnQgY29uc3QgbWFrZUVhcmx5RXJyb3IgPSAoe1xuXHRlcnJvcixcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0b3B0aW9ucyxcblx0c3RhcnRUaW1lLFxuXHRpc1N5bmMsXG59KSA9PiBtYWtlRXJyb3Ioe1xuXHRlcnJvcixcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdHN0YXJ0VGltZSxcblx0dGltZWRPdXQ6IGZhbHNlLFxuXHRpc0NhbmNlbGVkOiBmYWxzZSxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQ6IGZhbHNlLFxuXHRpc01heEJ1ZmZlcjogZmFsc2UsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRzdGRpbzogQXJyYXkuZnJvbSh7bGVuZ3RoOiBmaWxlRGVzY3JpcHRvcnMubGVuZ3RofSksXG5cdGlwY091dHB1dDogW10sXG5cdG9wdGlvbnMsXG5cdGlzU3luYyxcbn0pO1xuXG4vLyBPYmplY3QgcmV0dXJuZWQgb24gc3VicHJvY2VzcyBmYWlsdXJlXG5leHBvcnQgY29uc3QgbWFrZUVycm9yID0gKHtcblx0ZXJyb3I6IG9yaWdpbmFsRXJyb3IsXG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRzdGFydFRpbWUsXG5cdHRpbWVkT3V0LFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNNYXhCdWZmZXIsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGV4aXRDb2RlOiByYXdFeGl0Q29kZSxcblx0c2lnbmFsOiByYXdTaWduYWwsXG5cdHN0ZGlvLFxuXHRhbGwsXG5cdGlwY091dHB1dCxcblx0b3B0aW9uczoge1xuXHRcdHRpbWVvdXREdXJhdGlvbixcblx0XHR0aW1lb3V0ID0gdGltZW91dER1cmF0aW9uLFxuXHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0a2lsbFNpZ25hbCxcblx0XHRjd2QsXG5cdFx0bWF4QnVmZmVyLFxuXHR9LFxuXHRpc1N5bmMsXG59KSA9PiB7XG5cdGNvbnN0IHtleGl0Q29kZSwgc2lnbmFsLCBzaWduYWxEZXNjcmlwdGlvbn0gPSBub3JtYWxpemVFeGl0UGF5bG9hZChyYXdFeGl0Q29kZSwgcmF3U2lnbmFsKTtcblx0Y29uc3Qge29yaWdpbmFsTWVzc2FnZSwgc2hvcnRNZXNzYWdlLCBtZXNzYWdlfSA9IGNyZWF0ZU1lc3NhZ2VzKHtcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdG9yaWdpbmFsRXJyb3IsXG5cdFx0c2lnbmFsLFxuXHRcdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRcdGV4aXRDb2RlLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzQ2FuY2VsZWQsXG5cdFx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdFx0aXNNYXhCdWZmZXIsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGtpbGxTaWduYWwsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdHRpbWVvdXQsXG5cdFx0Y3dkLFxuXHR9KTtcblx0Y29uc3QgZXJyb3IgPSBnZXRGaW5hbEVycm9yKG9yaWdpbmFsRXJyb3IsIG1lc3NhZ2UsIGlzU3luYyk7XG5cdE9iamVjdC5hc3NpZ24oZXJyb3IsIGdldEVycm9yUHJvcGVydGllcyh7XG5cdFx0ZXJyb3IsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGFydFRpbWUsXG5cdFx0dGltZWRPdXQsXG5cdFx0aXNDYW5jZWxlZCxcblx0XHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0XHRpc01heEJ1ZmZlcixcblx0XHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHRzaWduYWxEZXNjcmlwdGlvbixcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdGN3ZCxcblx0XHRvcmlnaW5hbE1lc3NhZ2UsXG5cdFx0c2hvcnRNZXNzYWdlLFxuXHR9KSk7XG5cdHJldHVybiBlcnJvcjtcbn07XG5cbmNvbnN0IGdldEVycm9yUHJvcGVydGllcyA9ICh7XG5cdGVycm9yLFxuXHRjb21tYW5kLFxuXHRlc2NhcGVkQ29tbWFuZCxcblx0c3RhcnRUaW1lLFxuXHR0aW1lZE91dCxcblx0aXNDYW5jZWxlZCxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdGlzTWF4QnVmZmVyLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRleGl0Q29kZSxcblx0c2lnbmFsLFxuXHRzaWduYWxEZXNjcmlwdGlvbixcblx0c3RkaW8sXG5cdGFsbCxcblx0aXBjT3V0cHV0LFxuXHRjd2QsXG5cdG9yaWdpbmFsTWVzc2FnZSxcblx0c2hvcnRNZXNzYWdlLFxufSkgPT4gb21pdFVuZGVmaW5lZFByb3BlcnRpZXMoe1xuXHRzaG9ydE1lc3NhZ2UsXG5cdG9yaWdpbmFsTWVzc2FnZSxcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdGN3ZCxcblx0ZHVyYXRpb25NczogZ2V0RHVyYXRpb25NcyhzdGFydFRpbWUpLFxuXHRmYWlsZWQ6IHRydWUsXG5cdHRpbWVkT3V0LFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNUZXJtaW5hdGVkOiBzaWduYWwgIT09IHVuZGVmaW5lZCxcblx0aXNNYXhCdWZmZXIsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGV4aXRDb2RlLFxuXHRzaWduYWwsXG5cdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRjb2RlOiBlcnJvci5jYXVzZT8uY29kZSxcblx0c3Rkb3V0OiBzdGRpb1sxXSxcblx0c3RkZXJyOiBzdGRpb1syXSxcblx0YWxsLFxuXHRzdGRpbyxcblx0aXBjT3V0cHV0LFxuXHRwaXBlZEZyb206IFtdLFxufSk7XG5cbmNvbnN0IG9taXRVbmRlZmluZWRQcm9wZXJ0aWVzID0gcmVzdWx0ID0+IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhyZXN1bHQpLmZpbHRlcigoWywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG5cbi8vIGBzaWduYWxgIGFuZCBgZXhpdENvZGVgIGVtaXR0ZWQgb24gYHN1YnByb2Nlc3Mub24oJ2V4aXQnKWAgZXZlbnQgY2FuIGJlIGBudWxsYC5cbi8vIFdlIG5vcm1hbGl6ZSB0aGVtIHRvIGB1bmRlZmluZWRgXG5jb25zdCBub3JtYWxpemVFeGl0UGF5bG9hZCA9IChyYXdFeGl0Q29kZSwgcmF3U2lnbmFsKSA9PiB7XG5cdGNvbnN0IGV4aXRDb2RlID0gcmF3RXhpdENvZGUgPT09IG51bGwgPyB1bmRlZmluZWQgOiByYXdFeGl0Q29kZTtcblx0Y29uc3Qgc2lnbmFsID0gcmF3U2lnbmFsID09PSBudWxsID8gdW5kZWZpbmVkIDogcmF3U2lnbmFsO1xuXHRjb25zdCBzaWduYWxEZXNjcmlwdGlvbiA9IHNpZ25hbCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0U2lnbmFsRGVzY3JpcHRpb24ocmF3U2lnbmFsKTtcblx0cmV0dXJuIHtleGl0Q29kZSwgc2lnbmFsLCBzaWduYWxEZXNjcmlwdGlvbn07XG59O1xuIiwgImNvbnN0IHRvWmVyb0lmSW5maW5pdHkgPSB2YWx1ZSA9PiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiAwO1xuXG5mdW5jdGlvbiBwYXJzZU51bWJlcihtaWxsaXNlY29uZHMpIHtcblx0cmV0dXJuIHtcblx0XHRkYXlzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDg2XzQwMF8wMDApLFxuXHRcdGhvdXJzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDNfNjAwXzAwMCAlIDI0KSxcblx0XHRtaW51dGVzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDYwXzAwMCAlIDYwKSxcblx0XHRzZWNvbmRzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDEwMDAgJSA2MCksXG5cdFx0bWlsbGlzZWNvbmRzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAlIDEwMDApLFxuXHRcdG1pY3Jvc2Vjb25kczogTWF0aC50cnVuYyh0b1plcm9JZkluZmluaXR5KG1pbGxpc2Vjb25kcyAqIDEwMDApICUgMTAwMCksXG5cdFx0bmFub3NlY29uZHM6IE1hdGgudHJ1bmModG9aZXJvSWZJbmZpbml0eShtaWxsaXNlY29uZHMgKiAxZTYpICUgMTAwMCksXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlQmlnaW50KG1pbGxpc2Vjb25kcykge1xuXHRyZXR1cm4ge1xuXHRcdGRheXM6IG1pbGxpc2Vjb25kcyAvIDg2XzQwMF8wMDBuLFxuXHRcdGhvdXJzOiBtaWxsaXNlY29uZHMgLyAzXzYwMF8wMDBuICUgMjRuLFxuXHRcdG1pbnV0ZXM6IG1pbGxpc2Vjb25kcyAvIDYwXzAwMG4gJSA2MG4sXG5cdFx0c2Vjb25kczogbWlsbGlzZWNvbmRzIC8gMTAwMG4gJSA2MG4sXG5cdFx0bWlsbGlzZWNvbmRzOiBtaWxsaXNlY29uZHMgJSAxMDAwbixcblx0XHRtaWNyb3NlY29uZHM6IDBuLFxuXHRcdG5hbm9zZWNvbmRzOiAwbixcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VNaWxsaXNlY29uZHMobWlsbGlzZWNvbmRzKSB7XG5cdHN3aXRjaCAodHlwZW9mIG1pbGxpc2Vjb25kcykge1xuXHRcdGNhc2UgJ251bWJlcic6IHtcblx0XHRcdGlmIChOdW1iZXIuaXNGaW5pdGUobWlsbGlzZWNvbmRzKSkge1xuXHRcdFx0XHRyZXR1cm4gcGFyc2VOdW1iZXIobWlsbGlzZWNvbmRzKTtcblx0XHRcdH1cblxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnYmlnaW50Jzoge1xuXHRcdFx0cmV0dXJuIHBhcnNlQmlnaW50KG1pbGxpc2Vjb25kcyk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gZGVmYXVsdFxuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBmaW5pdGUgbnVtYmVyIG9yIGJpZ2ludCcpO1xufVxuIiwgImltcG9ydCBwYXJzZU1pbGxpc2Vjb25kcyBmcm9tICdwYXJzZS1tcyc7XG5cbmNvbnN0IGlzWmVybyA9IHZhbHVlID0+IHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAwbjtcbmNvbnN0IHBsdXJhbGl6ZSA9ICh3b3JkLCBjb3VudCkgPT4gKGNvdW50ID09PSAxIHx8IGNvdW50ID09PSAxbikgPyB3b3JkIDogYCR7d29yZH1zYDtcblxuY29uc3QgU0VDT05EX1JPVU5ESU5HX0VQU0lMT04gPSAwLjAwMF8wMDBfMTtcbmNvbnN0IE9ORV9EQVlfSU5fTUlMTElTRUNPTkRTID0gMjRuICogNjBuICogNjBuICogMTAwMG47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXR0eU1pbGxpc2Vjb25kcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMpIHtcblx0Y29uc3QgaXNCaWdJbnQgPSB0eXBlb2YgbWlsbGlzZWNvbmRzID09PSAnYmlnaW50Jztcblx0aWYgKCFpc0JpZ0ludCAmJiAhTnVtYmVyLmlzRmluaXRlKG1pbGxpc2Vjb25kcykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIGZpbml0ZSBudW1iZXIgb3IgYmlnaW50Jyk7XG5cdH1cblxuXHRvcHRpb25zID0gey4uLm9wdGlvbnN9O1xuXG5cdGNvbnN0IHNpZ24gPSBtaWxsaXNlY29uZHMgPCAwID8gJy0nIDogJyc7XG5cdG1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyA8IDAgPyAtbWlsbGlzZWNvbmRzIDogbWlsbGlzZWNvbmRzOyAvLyBDYW5ub3QgdXNlIGBNYXRoLmFicygpYCBiZWNhdXNlIG9mIEJpZ0ludCBzdXBwb3J0LlxuXG5cdGlmIChvcHRpb25zLmNvbG9uTm90YXRpb24pIHtcblx0XHRvcHRpb25zLmNvbXBhY3QgPSBmYWxzZTtcblx0XHRvcHRpb25zLmZvcm1hdFN1Yk1pbGxpc2Vjb25kcyA9IGZhbHNlO1xuXHRcdG9wdGlvbnMuc2VwYXJhdGVNaWxsaXNlY29uZHMgPSBmYWxzZTtcblx0XHRvcHRpb25zLnZlcmJvc2UgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmNvbXBhY3QpIHtcblx0XHRvcHRpb25zLnVuaXRDb3VudCA9IDE7XG5cdFx0b3B0aW9ucy5zZWNvbmRzRGVjaW1hbERpZ2l0cyA9IDA7XG5cdFx0b3B0aW9ucy5taWxsaXNlY29uZHNEZWNpbWFsRGlnaXRzID0gMDtcblx0fVxuXG5cdGxldCByZXN1bHQgPSBbXTtcblxuXHRjb25zdCBmbG9vckRlY2ltYWxzID0gKHZhbHVlLCBkZWNpbWFsRGlnaXRzKSA9PiB7XG5cdFx0Y29uc3QgZmxvb3JlZEludGVyaW1WYWx1ZSA9IE1hdGguZmxvb3IoKHZhbHVlICogKDEwICoqIGRlY2ltYWxEaWdpdHMpKSArIFNFQ09ORF9ST1VORElOR19FUFNJTE9OKTtcblx0XHRjb25zdCBmbG9vcmVkVmFsdWUgPSBNYXRoLnJvdW5kKGZsb29yZWRJbnRlcmltVmFsdWUpIC8gKDEwICoqIGRlY2ltYWxEaWdpdHMpO1xuXHRcdHJldHVybiBmbG9vcmVkVmFsdWUudG9GaXhlZChkZWNpbWFsRGlnaXRzKTtcblx0fTtcblxuXHRjb25zdCBhZGQgPSAodmFsdWUsIGxvbmcsIHNob3J0LCB2YWx1ZVN0cmluZykgPT4ge1xuXHRcdGlmIChcblx0XHRcdChyZXN1bHQubGVuZ3RoID09PSAwIHx8ICFvcHRpb25zLmNvbG9uTm90YXRpb24pXG5cdFx0XHQmJiBpc1plcm8odmFsdWUpXG5cdFx0XHQmJiAhKG9wdGlvbnMuY29sb25Ob3RhdGlvbiAmJiBzaG9ydCA9PT0gJ20nKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlU3RyaW5nID8/PSBTdHJpbmcodmFsdWUpO1xuXHRcdGlmIChvcHRpb25zLmNvbG9uTm90YXRpb24pIHtcblx0XHRcdGNvbnN0IHdob2xlRGlnaXRzID0gdmFsdWVTdHJpbmcuaW5jbHVkZXMoJy4nKSA/IHZhbHVlU3RyaW5nLnNwbGl0KCcuJylbMF0ubGVuZ3RoIDogdmFsdWVTdHJpbmcubGVuZ3RoO1xuXHRcdFx0Y29uc3QgbWluTGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCA+IDAgPyAyIDogMTtcblx0XHRcdHZhbHVlU3RyaW5nID0gJzAnLnJlcGVhdChNYXRoLm1heCgwLCBtaW5MZW5ndGggLSB3aG9sZURpZ2l0cykpICsgdmFsdWVTdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlU3RyaW5nICs9IG9wdGlvbnMudmVyYm9zZSA/ICcgJyArIHBsdXJhbGl6ZShsb25nLCB2YWx1ZSkgOiBzaG9ydDtcblx0XHR9XG5cblx0XHRyZXN1bHQucHVzaCh2YWx1ZVN0cmluZyk7XG5cdH07XG5cblx0Y29uc3QgcGFyc2VkID0gcGFyc2VNaWxsaXNlY29uZHMobWlsbGlzZWNvbmRzKTtcblx0Y29uc3QgZGF5cyA9IEJpZ0ludChwYXJzZWQuZGF5cyk7XG5cblx0aWYgKG9wdGlvbnMuaGlkZVllYXJBbmREYXlzKSB7XG5cdFx0YWRkKChCaWdJbnQoZGF5cykgKiAyNG4pICsgQmlnSW50KHBhcnNlZC5ob3VycyksICdob3VyJywgJ2gnKTtcblx0fSBlbHNlIHtcblx0XHRpZiAob3B0aW9ucy5oaWRlWWVhcikge1xuXHRcdFx0YWRkKGRheXMsICdkYXknLCAnZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhZGQoZGF5cyAvIDM2NW4sICd5ZWFyJywgJ3knKTtcblx0XHRcdGFkZChkYXlzICUgMzY1biwgJ2RheScsICdkJyk7XG5cdFx0fVxuXG5cdFx0YWRkKE51bWJlcihwYXJzZWQuaG91cnMpLCAnaG91cicsICdoJyk7XG5cdH1cblxuXHRhZGQoTnVtYmVyKHBhcnNlZC5taW51dGVzKSwgJ21pbnV0ZScsICdtJyk7XG5cblx0aWYgKCFvcHRpb25zLmhpZGVTZWNvbmRzKSB7XG5cdFx0aWYgKFxuXHRcdFx0b3B0aW9ucy5zZXBhcmF0ZU1pbGxpc2Vjb25kc1xuXHRcdFx0fHwgb3B0aW9ucy5mb3JtYXRTdWJNaWxsaXNlY29uZHNcblx0XHRcdHx8ICghb3B0aW9ucy5jb2xvbk5vdGF0aW9uICYmIG1pbGxpc2Vjb25kcyA8IDEwMDAgJiYgIW9wdGlvbnMuc3ViU2Vjb25kc0FzRGVjaW1hbHMpXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBzZWNvbmRzID0gTnVtYmVyKHBhcnNlZC5zZWNvbmRzKTtcblx0XHRcdGNvbnN0IG1pbGxpc2Vjb25kcyA9IE51bWJlcihwYXJzZWQubWlsbGlzZWNvbmRzKTtcblx0XHRcdGNvbnN0IG1pY3Jvc2Vjb25kcyA9IE51bWJlcihwYXJzZWQubWljcm9zZWNvbmRzKTtcblx0XHRcdGNvbnN0IG5hbm9zZWNvbmRzID0gTnVtYmVyKHBhcnNlZC5uYW5vc2Vjb25kcyk7XG5cblx0XHRcdGFkZChzZWNvbmRzLCAnc2Vjb25kJywgJ3MnKTtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZm9ybWF0U3ViTWlsbGlzZWNvbmRzKSB7XG5cdFx0XHRcdGFkZChtaWxsaXNlY29uZHMsICdtaWxsaXNlY29uZCcsICdtcycpO1xuXHRcdFx0XHRhZGQobWljcm9zZWNvbmRzLCAnbWljcm9zZWNvbmQnLCAnXHUwMEI1cycpO1xuXHRcdFx0XHRhZGQobmFub3NlY29uZHMsICduYW5vc2Vjb25kJywgJ25zJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBtaWxsaXNlY29uZHNBbmRCZWxvd1xuXHRcdFx0XHRcdD0gbWlsbGlzZWNvbmRzXG5cdFx0XHRcdFx0KyAobWljcm9zZWNvbmRzIC8gMTAwMClcblx0XHRcdFx0XHQrIChuYW5vc2Vjb25kcyAvIDFlNik7XG5cblx0XHRcdFx0Y29uc3QgbWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHRcdD0gdHlwZW9mIG9wdGlvbnMubWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0cyA9PT0gJ251bWJlcidcblx0XHRcdFx0XHRcdD8gb3B0aW9ucy5taWxsaXNlY29uZHNEZWNpbWFsRGlnaXRzXG5cdFx0XHRcdFx0XHQ6IDA7XG5cblx0XHRcdFx0Y29uc3Qgcm91bmRlZE1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kc0FuZEJlbG93ID49IDFcblx0XHRcdFx0XHQ/IE1hdGgucm91bmQobWlsbGlzZWNvbmRzQW5kQmVsb3cpXG5cdFx0XHRcdFx0OiBNYXRoLmNlaWwobWlsbGlzZWNvbmRzQW5kQmVsb3cpO1xuXG5cdFx0XHRcdGNvbnN0IG1pbGxpc2Vjb25kc1N0cmluZyA9IG1pbGxpc2Vjb25kc0RlY2ltYWxEaWdpdHNcblx0XHRcdFx0XHQ/IG1pbGxpc2Vjb25kc0FuZEJlbG93LnRvRml4ZWQobWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0cylcblx0XHRcdFx0XHQ6IHJvdW5kZWRNaWxsaXNlY29uZHM7XG5cblx0XHRcdFx0YWRkKFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUZsb2F0KG1pbGxpc2Vjb25kc1N0cmluZyksXG5cdFx0XHRcdFx0J21pbGxpc2Vjb25kJyxcblx0XHRcdFx0XHQnbXMnLFxuXHRcdFx0XHRcdG1pbGxpc2Vjb25kc1N0cmluZyxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgc2Vjb25kcyA9IChcblx0XHRcdFx0KGlzQmlnSW50ID8gTnVtYmVyKG1pbGxpc2Vjb25kcyAlIE9ORV9EQVlfSU5fTUlMTElTRUNPTkRTKSA6IG1pbGxpc2Vjb25kcylcblx0XHRcdFx0LyAxMDAwXG5cdFx0XHQpICUgNjA7XG5cdFx0XHRjb25zdCBzZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHQ9IHR5cGVvZiBvcHRpb25zLnNlY29uZHNEZWNpbWFsRGlnaXRzID09PSAnbnVtYmVyJ1xuXHRcdFx0XHRcdD8gb3B0aW9ucy5zZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHRcdDogMTtcblx0XHRcdGNvbnN0IHNlY29uZHNGaXhlZCA9IGZsb29yRGVjaW1hbHMoc2Vjb25kcywgc2Vjb25kc0RlY2ltYWxEaWdpdHMpO1xuXHRcdFx0Y29uc3Qgc2Vjb25kc1N0cmluZyA9IG9wdGlvbnMua2VlcERlY2ltYWxzT25XaG9sZVNlY29uZHNcblx0XHRcdFx0PyBzZWNvbmRzRml4ZWRcblx0XHRcdFx0OiBzZWNvbmRzRml4ZWQucmVwbGFjZSgvXFwuMCskLywgJycpO1xuXHRcdFx0YWRkKE51bWJlci5wYXJzZUZsb2F0KHNlY29uZHNTdHJpbmcpLCAnc2Vjb25kJywgJ3MnLCBzZWNvbmRzU3RyaW5nKTtcblx0XHR9XG5cdH1cblxuXHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBzaWduICsgJzAnICsgKG9wdGlvbnMudmVyYm9zZSA/ICcgbWlsbGlzZWNvbmRzJyA6ICdtcycpO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9yID0gb3B0aW9ucy5jb2xvbk5vdGF0aW9uID8gJzonIDogJyAnO1xuXHRpZiAodHlwZW9mIG9wdGlvbnMudW5pdENvdW50ID09PSAnbnVtYmVyJykge1xuXHRcdHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCBNYXRoLm1heChvcHRpb25zLnVuaXRDb3VudCwgMSkpO1xuXHR9XG5cblx0cmV0dXJuIHNpZ24gKyByZXN1bHQuam9pbihzZXBhcmF0b3IpO1xufVxuIiwgImltcG9ydCB7dmVyYm9zZUxvZ30gZnJvbSAnLi9sb2cuanMnO1xuXG4vLyBXaGVuIGB2ZXJib3NlYCBpcyBgc2hvcnR8ZnVsbHxjdXN0b21gLCBwcmludCBlYWNoIGNvbW1hbmQncyBlcnJvciB3aGVuIGl0IGZhaWxzXG5leHBvcnQgY29uc3QgbG9nRXJyb3IgPSAocmVzdWx0LCB2ZXJib3NlSW5mbykgPT4ge1xuXHRpZiAocmVzdWx0LmZhaWxlZCkge1xuXHRcdHZlcmJvc2VMb2coe1xuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdHZlcmJvc2VNZXNzYWdlOiByZXN1bHQuc2hvcnRNZXNzYWdlLFxuXHRcdFx0dmVyYm9zZUluZm8sXG5cdFx0XHRyZXN1bHQsXG5cdFx0fSk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHByZXR0eU1zIGZyb20gJ3ByZXR0eS1tcyc7XG5pbXBvcnQge2lzVmVyYm9zZX0gZnJvbSAnLi92YWx1ZXMuanMnO1xuaW1wb3J0IHt2ZXJib3NlTG9nfSBmcm9tICcuL2xvZy5qcyc7XG5pbXBvcnQge2xvZ0Vycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcblxuLy8gV2hlbiBgdmVyYm9zZWAgaXMgYHNob3J0fGZ1bGx8Y3VzdG9tYCwgcHJpbnQgZWFjaCBjb21tYW5kJ3MgY29tcGxldGlvbiwgZHVyYXRpb24gYW5kIGVycm9yXG5leHBvcnQgY29uc3QgbG9nUmVzdWx0ID0gKHJlc3VsdCwgdmVyYm9zZUluZm8pID0+IHtcblx0aWYgKCFpc1ZlcmJvc2UodmVyYm9zZUluZm8pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bG9nRXJyb3IocmVzdWx0LCB2ZXJib3NlSW5mbyk7XG5cdGxvZ0R1cmF0aW9uKHJlc3VsdCwgdmVyYm9zZUluZm8pO1xufTtcblxuY29uc3QgbG9nRHVyYXRpb24gPSAocmVzdWx0LCB2ZXJib3NlSW5mbykgPT4ge1xuXHRjb25zdCB2ZXJib3NlTWVzc2FnZSA9IGAoZG9uZSBpbiAke3ByZXR0eU1zKHJlc3VsdC5kdXJhdGlvbk1zKX0pYDtcblx0dmVyYm9zZUxvZyh7XG5cdFx0dHlwZTogJ2R1cmF0aW9uJyxcblx0XHR2ZXJib3NlTWVzc2FnZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRyZXN1bHQsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2xvZ1Jlc3VsdH0gZnJvbSAnLi4vdmVyYm9zZS9jb21wbGV0ZS5qcyc7XG5cbi8vIEFwcGxpZXMgdGhlIGByZWplY3RgIG9wdGlvbi5cbi8vIEFsc28gcHJpbnQgdGhlIGZpbmFsIGxvZyBsaW5lIHdpdGggYHZlcmJvc2VgLlxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc3VsdCA9IChyZXN1bHQsIHZlcmJvc2VJbmZvLCB7cmVqZWN0fSkgPT4ge1xuXHRsb2dSZXN1bHQocmVzdWx0LCB2ZXJib3NlSW5mbyk7XG5cblx0aWYgKHJlc3VsdC5mYWlsZWQgJiYgcmVqZWN0KSB7XG5cdFx0dGhyb3cgcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiaW1wb3J0IHtpc1N0cmVhbSBhcyBpc05vZGVTdHJlYW0sIGlzRHVwbGV4U3RyZWFtfSBmcm9tICdpcy1zdHJlYW0nO1xuaW1wb3J0IGlzUGxhaW5PYmogZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7aXNVaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcblxuLy8gVGhlIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgb3B0aW9uIGNhbiBiZSBvZiBtYW55IHR5cGVzLiBUaGlzIGRldGVjdHMgaXQuXG5leHBvcnQgY29uc3QgZ2V0U3RkaW9JdGVtVHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoaXNBc3luY0dlbmVyYXRvcih2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2FzeW5jR2VuZXJhdG9yJztcblx0fVxuXG5cdGlmIChpc1N5bmNHZW5lcmF0b3IodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdnZW5lcmF0b3InO1xuXHR9XG5cblx0aWYgKGlzVXJsKHZhbHVlKSkge1xuXHRcdHJldHVybiAnZmlsZVVybCc7XG5cdH1cblxuXHRpZiAoaXNGaWxlUGF0aE9iamVjdCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2ZpbGVQYXRoJztcblx0fVxuXG5cdGlmIChpc1dlYlN0cmVhbSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ3dlYlN0cmVhbSc7XG5cdH1cblxuXHRpZiAoaXNOb2RlU3RyZWFtKHZhbHVlLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0cmV0dXJuICduYXRpdmUnO1xuXHR9XG5cblx0aWYgKGlzVWludDhBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ3VpbnQ4QXJyYXknO1xuXHR9XG5cblx0aWYgKGlzQXN5bmNJdGVyYWJsZU9iamVjdCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2FzeW5jSXRlcmFibGUnO1xuXHR9XG5cblx0aWYgKGlzSXRlcmFibGVPYmplY3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdpdGVyYWJsZSc7XG5cdH1cblxuXHRpZiAoaXNUcmFuc2Zvcm1TdHJlYW0odmFsdWUpKSB7XG5cdFx0cmV0dXJuIGdldFRyYW5zZm9ybVN0cmVhbVR5cGUoe3RyYW5zZm9ybTogdmFsdWV9LCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdGlmIChpc1RyYW5zZm9ybU9wdGlvbnModmFsdWUpKSB7XG5cdFx0cmV0dXJuIGdldFRyYW5zZm9ybU9iamVjdFR5cGUodmFsdWUsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0cmV0dXJuICduYXRpdmUnO1xufTtcblxuY29uc3QgZ2V0VHJhbnNmb3JtT2JqZWN0VHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoaXNEdXBsZXhTdHJlYW0odmFsdWUudHJhbnNmb3JtLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0cmV0dXJuIGdldER1cGxleFR5cGUodmFsdWUsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0aWYgKGlzVHJhbnNmb3JtU3RyZWFtKHZhbHVlLnRyYW5zZm9ybSkpIHtcblx0XHRyZXR1cm4gZ2V0VHJhbnNmb3JtU3RyZWFtVHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gZ2V0R2VuZXJhdG9yT2JqZWN0VHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSk7XG59O1xuXG5jb25zdCBnZXREdXBsZXhUeXBlID0gKHZhbHVlLCBvcHRpb25OYW1lKSA9PiB7XG5cdHZhbGlkYXRlTm9uR2VuZXJhdG9yVHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSwgJ0R1cGxleCBzdHJlYW0nKTtcblx0cmV0dXJuICdkdXBsZXgnO1xufTtcblxuY29uc3QgZ2V0VHJhbnNmb3JtU3RyZWFtVHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHR2YWxpZGF0ZU5vbkdlbmVyYXRvclR5cGUodmFsdWUsIG9wdGlvbk5hbWUsICd3ZWIgVHJhbnNmb3JtU3RyZWFtJyk7XG5cdHJldHVybiAnd2ViVHJhbnNmb3JtJztcbn07XG5cbmNvbnN0IHZhbGlkYXRlTm9uR2VuZXJhdG9yVHlwZSA9ICh7ZmluYWwsIGJpbmFyeSwgb2JqZWN0TW9kZX0sIG9wdGlvbk5hbWUsIHR5cGVOYW1lKSA9PiB7XG5cdGNoZWNrVW5kZWZpbmVkT3B0aW9uKGZpbmFsLCBgJHtvcHRpb25OYW1lfS5maW5hbGAsIHR5cGVOYW1lKTtcblx0Y2hlY2tVbmRlZmluZWRPcHRpb24oYmluYXJ5LCBgJHtvcHRpb25OYW1lfS5iaW5hcnlgLCB0eXBlTmFtZSk7XG5cdGNoZWNrQm9vbGVhbk9wdGlvbihvYmplY3RNb2RlLCBgJHtvcHRpb25OYW1lfS5vYmplY3RNb2RlYCk7XG59O1xuXG5jb25zdCBjaGVja1VuZGVmaW5lZE9wdGlvbiA9ICh2YWx1ZSwgb3B0aW9uTmFtZSwgdHlwZU5hbWUpID0+IHtcblx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24gY2FuIG9ubHkgYmUgZGVmaW5lZCB3aGVuIHVzaW5nIGEgZ2VuZXJhdG9yLCBub3QgYSAke3R5cGVOYW1lfS5gKTtcblx0fVxufTtcblxuY29uc3QgZ2V0R2VuZXJhdG9yT2JqZWN0VHlwZSA9ICh7dHJhbnNmb3JtLCBmaW5hbCwgYmluYXJ5LCBvYmplY3RNb2RlfSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAodHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgIWlzR2VuZXJhdG9yKHRyYW5zZm9ybSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS50cmFuc2Zvcm1cXGAgb3B0aW9uIG11c3QgYmUgYSBnZW5lcmF0b3IsIGEgRHVwbGV4IHN0cmVhbSBvciBhIHdlYiBUcmFuc2Zvcm1TdHJlYW0uYCk7XG5cdH1cblxuXHRpZiAoaXNEdXBsZXhTdHJlYW0oZmluYWwsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS5maW5hbFxcYCBvcHRpb24gbXVzdCBub3QgYmUgYSBEdXBsZXggc3RyZWFtLmApO1xuXHR9XG5cblx0aWYgKGlzVHJhbnNmb3JtU3RyZWFtKGZpbmFsKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9LmZpbmFsXFxgIG9wdGlvbiBtdXN0IG5vdCBiZSBhIHdlYiBUcmFuc2Zvcm1TdHJlYW0uYCk7XG5cdH1cblxuXHRpZiAoZmluYWwgIT09IHVuZGVmaW5lZCAmJiAhaXNHZW5lcmF0b3IoZmluYWwpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0uZmluYWxcXGAgb3B0aW9uIG11c3QgYmUgYSBnZW5lcmF0b3IuYCk7XG5cdH1cblxuXHRjaGVja0Jvb2xlYW5PcHRpb24oYmluYXJ5LCBgJHtvcHRpb25OYW1lfS5iaW5hcnlgKTtcblx0Y2hlY2tCb29sZWFuT3B0aW9uKG9iamVjdE1vZGUsIGAke29wdGlvbk5hbWV9Lm9iamVjdE1vZGVgKTtcblxuXHRyZXR1cm4gaXNBc3luY0dlbmVyYXRvcih0cmFuc2Zvcm0pIHx8IGlzQXN5bmNHZW5lcmF0b3IoZmluYWwpID8gJ2FzeW5jR2VuZXJhdG9yJyA6ICdnZW5lcmF0b3InO1xufTtcblxuY29uc3QgY2hlY2tCb29sZWFuT3B0aW9uID0gKHZhbHVlLCBvcHRpb25OYW1lKSA9PiB7XG5cdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3QgdXNlIGEgYm9vbGVhbi5gKTtcblx0fVxufTtcblxuY29uc3QgaXNHZW5lcmF0b3IgPSB2YWx1ZSA9PiBpc0FzeW5jR2VuZXJhdG9yKHZhbHVlKSB8fCBpc1N5bmNHZW5lcmF0b3IodmFsdWUpO1xuZXhwb3J0IGNvbnN0IGlzQXN5bmNHZW5lcmF0b3IgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBc3luY0dlbmVyYXRvckZ1bmN0aW9uXSc7XG5jb25zdCBpc1N5bmNHZW5lcmF0b3IgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuY29uc3QgaXNUcmFuc2Zvcm1PcHRpb25zID0gdmFsdWUgPT4gaXNQbGFpbk9iaih2YWx1ZSlcblx0JiYgKHZhbHVlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmZpbmFsICE9PSB1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNVcmwgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBVUkxdJztcbmV4cG9ydCBjb25zdCBpc1JlZ3VsYXJVcmwgPSB2YWx1ZSA9PiBpc1VybCh2YWx1ZSkgJiYgdmFsdWUucHJvdG9jb2wgIT09ICdmaWxlOic7XG5cbmNvbnN0IGlzRmlsZVBhdGhPYmplY3QgPSB2YWx1ZSA9PiBpc1BsYWluT2JqKHZhbHVlKVxuXHQmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMFxuXHQmJiBPYmplY3Qua2V5cyh2YWx1ZSkuZXZlcnkoa2V5ID0+IEZJTEVfUEFUSF9LRVlTLmhhcyhrZXkpKVxuXHQmJiBpc0ZpbGVQYXRoU3RyaW5nKHZhbHVlLmZpbGUpO1xuY29uc3QgRklMRV9QQVRIX0tFWVMgPSBuZXcgU2V0KFsnZmlsZScsICdhcHBlbmQnXSk7XG5leHBvcnQgY29uc3QgaXNGaWxlUGF0aFN0cmluZyA9IGZpbGUgPT4gdHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnO1xuXG5leHBvcnQgY29uc3QgaXNVbmtub3duU3RkaW9TdHJpbmcgPSAodHlwZSwgdmFsdWUpID0+IHR5cGUgPT09ICduYXRpdmUnXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcblx0JiYgIUtOT1dOX1NURElPX1NUUklOR1MuaGFzKHZhbHVlKTtcbmNvbnN0IEtOT1dOX1NURElPX1NUUklOR1MgPSBuZXcgU2V0KFsnaXBjJywgJ2lnbm9yZScsICdpbmhlcml0JywgJ292ZXJsYXBwZWQnLCAncGlwZSddKTtcblxuY29uc3QgaXNSZWFkYWJsZVN0cmVhbSA9IHZhbHVlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlYWRhYmxlU3RyZWFtXSc7XG5leHBvcnQgY29uc3QgaXNXcml0YWJsZVN0cmVhbSA9IHZhbHVlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFdyaXRhYmxlU3RyZWFtXSc7XG5jb25zdCBpc1dlYlN0cmVhbSA9IHZhbHVlID0+IGlzUmVhZGFibGVTdHJlYW0odmFsdWUpIHx8IGlzV3JpdGFibGVTdHJlYW0odmFsdWUpO1xuY29uc3QgaXNUcmFuc2Zvcm1TdHJlYW0gPSB2YWx1ZSA9PiBpc1JlYWRhYmxlU3RyZWFtKHZhbHVlPy5yZWFkYWJsZSkgJiYgaXNXcml0YWJsZVN0cmVhbSh2YWx1ZT8ud3JpdGFibGUpO1xuXG5jb25zdCBpc0FzeW5jSXRlcmFibGVPYmplY3QgPSB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IGlzSXRlcmFibGVPYmplY3QgPSB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbic7XG5jb25zdCBpc09iamVjdCA9IHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG5cbi8vIFR5cGVzIHdoaWNoIG1vZGlmeSBgc3VicHJvY2Vzcy5zdGQqYFxuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9UWVBFUyA9IG5ldyBTZXQoWydnZW5lcmF0b3InLCAnYXN5bmNHZW5lcmF0b3InLCAnZHVwbGV4JywgJ3dlYlRyYW5zZm9ybSddKTtcbi8vIFR5cGVzIHdoaWNoIHdyaXRlIHRvIGEgZmlsZSBvciBhIGZpbGUgZGVzY3JpcHRvclxuZXhwb3J0IGNvbnN0IEZJTEVfVFlQRVMgPSBuZXcgU2V0KFsnZmlsZVVybCcsICdmaWxlUGF0aCcsICdmaWxlTnVtYmVyJ10pO1xuLy8gV2hlbiB0d28gZmlsZSBkZXNjcmlwdG9ycyBvZiB0aGlzIHR5cGUgc2hhcmUgdGhlIHNhbWUgdGFyZ2V0LCB3ZSBuZWVkIHRvIGRvIHNvbWUgc3BlY2lhbCBsb2dpY1xuZXhwb3J0IGNvbnN0IFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTX1NZTkMgPSBuZXcgU2V0KFsnZmlsZVVybCcsICdmaWxlUGF0aCddKTtcbmV4cG9ydCBjb25zdCBTUEVDSUFMX0RVUExJQ0FURV9UWVBFUyA9IG5ldyBTZXQoWy4uLlNQRUNJQUxfRFVQTElDQVRFX1RZUEVTX1NZTkMsICd3ZWJTdHJlYW0nLCAnbm9kZVN0cmVhbSddKTtcbi8vIERvIG5vdCBhbGxvdyB0d28gZmlsZSBkZXNjcmlwdG9ycyBvZiB0aGlzIHR5cGUgc2hhcmluZyB0aGUgc2FtZSB0YXJnZXRcbmV4cG9ydCBjb25zdCBGT1JCSURfRFVQTElDQVRFX1RZUEVTID0gbmV3IFNldChbJ3dlYlRyYW5zZm9ybScsICdkdXBsZXgnXSk7XG5cbi8vIENvbnZlcnQgdHlwZXMgdG8gaHVtYW4tZnJpZW5kbHkgc3RyaW5ncyBmb3IgZXJyb3IgbWVzc2FnZXNcbmV4cG9ydCBjb25zdCBUWVBFX1RPX01FU1NBR0UgPSB7XG5cdGdlbmVyYXRvcjogJ2EgZ2VuZXJhdG9yJyxcblx0YXN5bmNHZW5lcmF0b3I6ICdhbiBhc3luYyBnZW5lcmF0b3InLFxuXHRmaWxlVXJsOiAnYSBmaWxlIFVSTCcsXG5cdGZpbGVQYXRoOiAnYSBmaWxlIHBhdGggc3RyaW5nJyxcblx0ZmlsZU51bWJlcjogJ2EgZmlsZSBkZXNjcmlwdG9yIG51bWJlcicsXG5cdHdlYlN0cmVhbTogJ2Egd2ViIHN0cmVhbScsXG5cdG5vZGVTdHJlYW06ICdhIE5vZGUuanMgc3RyZWFtJyxcblx0d2ViVHJhbnNmb3JtOiAnYSB3ZWIgVHJhbnNmb3JtU3RyZWFtJyxcblx0ZHVwbGV4OiAnYSBEdXBsZXggc3RyZWFtJyxcblx0bmF0aXZlOiAnYW55IHZhbHVlJyxcblx0aXRlcmFibGU6ICdhbiBpdGVyYWJsZScsXG5cdGFzeW5jSXRlcmFibGU6ICdhbiBhc3luYyBpdGVyYWJsZScsXG5cdHN0cmluZzogJ2Egc3RyaW5nJyxcblx0dWludDhBcnJheTogJ2EgVWludDhBcnJheScsXG59O1xuIiwgImltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcblxuLypcblJldHJpZXZlIHRoZSBgb2JqZWN0TW9kZWBzIG9mIGEgc2luZ2xlIHRyYW5zZm9ybS5cbmBvYmplY3RNb2RlYCBkZXRlcm1pbmVzIHRoZSByZXR1cm4gdmFsdWUncyB0eXBlLCBpLmUuIHRoZSBgcmVhZGFibGVPYmplY3RNb2RlYC5cblRoZSBjaHVuayBhcmd1bWVudCdzIHR5cGUgaXMgYmFzZWQgb24gdGhlIHByZXZpb3VzIGdlbmVyYXRvcidzIHJldHVybiB2YWx1ZSwgaS5lLiB0aGUgYHdyaXRhYmxlT2JqZWN0TW9kZWAgaXMgYmFzZWQgb24gdGhlIHByZXZpb3VzIGByZWFkYWJsZU9iamVjdE1vZGVgLlxuVGhlIGxhc3QgaW5wdXQncyBnZW5lcmF0b3IgaXMgcmVhZCBieSBgc3VicHJvY2Vzcy5zdGRpbmAgd2hpY2g6XG4tIHNob3VsZCBub3QgYmUgaW4gYG9iamVjdE1vZGVgIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuLSBjYW4gb25seSBiZSBzdHJpbmdzLCBCdWZmZXJzIGFuZCBVaW50OEFycmF5cy5cblRoZXJlZm9yZSBpdHMgYHJlYWRhYmxlT2JqZWN0TW9kZWAgbXVzdCBiZSBgZmFsc2VgLlxuVGhlIHNhbWUgYXBwbGllcyB0byB0aGUgZmlyc3Qgb3V0cHV0J3MgZ2VuZXJhdG9yJ3MgYHdyaXRhYmxlT2JqZWN0TW9kZWAuXG4qL1xuZXhwb3J0IGNvbnN0IGdldFRyYW5zZm9ybU9iamVjdE1vZGVzID0gKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24pID0+IGRpcmVjdGlvbiA9PT0gJ291dHB1dCdcblx0PyBnZXRPdXRwdXRPYmplY3RNb2RlcyhvYmplY3RNb2RlLCBpbmRleCwgbmV3VHJhbnNmb3Jtcylcblx0OiBnZXRJbnB1dE9iamVjdE1vZGVzKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zKTtcblxuY29uc3QgZ2V0T3V0cHV0T2JqZWN0TW9kZXMgPSAob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMpID0+IHtcblx0Y29uc3Qgd3JpdGFibGVPYmplY3RNb2RlID0gaW5kZXggIT09IDAgJiYgbmV3VHJhbnNmb3Jtc1tpbmRleCAtIDFdLnZhbHVlLnJlYWRhYmxlT2JqZWN0TW9kZTtcblx0Y29uc3QgcmVhZGFibGVPYmplY3RNb2RlID0gb2JqZWN0TW9kZSA/PyB3cml0YWJsZU9iamVjdE1vZGU7XG5cdHJldHVybiB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9O1xufTtcblxuY29uc3QgZ2V0SW5wdXRPYmplY3RNb2RlcyA9IChvYmplY3RNb2RlLCBpbmRleCwgbmV3VHJhbnNmb3JtcykgPT4ge1xuXHRjb25zdCB3cml0YWJsZU9iamVjdE1vZGUgPSBpbmRleCA9PT0gMFxuXHRcdD8gb2JqZWN0TW9kZSA9PT0gdHJ1ZVxuXHRcdDogbmV3VHJhbnNmb3Jtc1tpbmRleCAtIDFdLnZhbHVlLnJlYWRhYmxlT2JqZWN0TW9kZTtcblx0Y29uc3QgcmVhZGFibGVPYmplY3RNb2RlID0gaW5kZXggIT09IG5ld1RyYW5zZm9ybXMubGVuZ3RoIC0gMSAmJiAob2JqZWN0TW9kZSA/PyB3cml0YWJsZU9iamVjdE1vZGUpO1xuXHRyZXR1cm4ge3dyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfTtcbn07XG5cbi8vIFJldHJpZXZlIHRoZSBgb2JqZWN0TW9kZWAgb2YgYSBmaWxlIGRlc2NyaXB0b3IsIGUuZy4gYHN0ZG91dGAgb3IgYHN0ZGVycmBcbmV4cG9ydCBjb25zdCBnZXRGZE9iamVjdE1vZGUgPSAoc3RkaW9JdGVtcywgZGlyZWN0aW9uKSA9PiB7XG5cdGNvbnN0IGxhc3RUcmFuc2Zvcm0gPSBzdGRpb0l0ZW1zLmZpbmRMYXN0KCh7dHlwZX0pID0+IFRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpO1xuXHRpZiAobGFzdFRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2lucHV0J1xuXHRcdD8gbGFzdFRyYW5zZm9ybS52YWx1ZS53cml0YWJsZU9iamVjdE1vZGVcblx0XHQ6IGxhc3RUcmFuc2Zvcm0udmFsdWUucmVhZGFibGVPYmplY3RNb2RlO1xufTtcbiIsICJpbXBvcnQgaXNQbGFpbk9iaiBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7Z2V0VHJhbnNmb3JtT2JqZWN0TW9kZXN9IGZyb20gJy4vb2JqZWN0LW1vZGUuanMnO1xuXG4vLyBUcmFuc2Zvcm1zIGdlbmVyYXRvcnMvZHVwbGV4L1RyYW5zZm9ybVN0cmVhbSBjYW4gaGF2ZSBtdWx0aXBsZSBzaGFwZXMuXG4vLyBUaGlzIG5vcm1hbGl6ZXMgaXQgYW5kIGFwcGxpZXMgZGVmYXVsdCB2YWx1ZXMuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplVHJhbnNmb3JtcyA9IChzdGRpb0l0ZW1zLCBvcHRpb25OYW1lLCBkaXJlY3Rpb24sIG9wdGlvbnMpID0+IFtcblx0Li4uc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gIVRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpLFxuXHQuLi5nZXRUcmFuc2Zvcm1zKHN0ZGlvSXRlbXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwgb3B0aW9ucyksXG5dO1xuXG5jb25zdCBnZXRUcmFuc2Zvcm1zID0gKHN0ZGlvSXRlbXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwge2VuY29kaW5nfSkgPT4ge1xuXHRjb25zdCB0cmFuc2Zvcm1zID0gc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gVFJBTlNGT1JNX1RZUEVTLmhhcyh0eXBlKSk7XG5cdGNvbnN0IG5ld1RyYW5zZm9ybXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHRyYW5zZm9ybXMubGVuZ3RofSk7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIHN0ZGlvSXRlbV0gb2YgT2JqZWN0LmVudHJpZXModHJhbnNmb3JtcykpIHtcblx0XHRuZXdUcmFuc2Zvcm1zW2luZGV4XSA9IG5vcm1hbGl6ZVRyYW5zZm9ybSh7XG5cdFx0XHRzdGRpb0l0ZW0sXG5cdFx0XHRpbmRleDogTnVtYmVyKGluZGV4KSxcblx0XHRcdG5ld1RyYW5zZm9ybXMsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdFx0ZW5jb2RpbmcsXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gc29ydFRyYW5zZm9ybXMobmV3VHJhbnNmb3JtcywgZGlyZWN0aW9uKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVRyYW5zZm9ybSA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt0eXBlfSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwgZW5jb2Rpbmd9KSA9PiB7XG5cdGlmICh0eXBlID09PSAnZHVwbGV4Jykge1xuXHRcdHJldHVybiBub3JtYWxpemVEdXBsZXgoe3N0ZGlvSXRlbSwgb3B0aW9uTmFtZX0pO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICd3ZWJUcmFuc2Zvcm0nKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZVRyYW5zZm9ybVN0cmVhbSh7XG5cdFx0XHRzdGRpb0l0ZW0sXG5cdFx0XHRpbmRleCxcblx0XHRcdG5ld1RyYW5zZm9ybXMsXG5cdFx0XHRkaXJlY3Rpb24sXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gbm9ybWFsaXplR2VuZXJhdG9yKHtcblx0XHRzdGRpb0l0ZW0sXG5cdFx0aW5kZXgsXG5cdFx0bmV3VHJhbnNmb3Jtcyxcblx0XHRkaXJlY3Rpb24sXG5cdFx0ZW5jb2RpbmcsXG5cdH0pO1xufTtcblxuY29uc3Qgbm9ybWFsaXplRHVwbGV4ID0gKHtcblx0c3RkaW9JdGVtLFxuXHRzdGRpb0l0ZW06IHtcblx0XHR2YWx1ZToge1xuXHRcdFx0dHJhbnNmb3JtLFxuXHRcdFx0dHJhbnNmb3JtOiB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHRcdFx0b2JqZWN0TW9kZSA9IHJlYWRhYmxlT2JqZWN0TW9kZSxcblx0XHR9LFxuXHR9LFxuXHRvcHRpb25OYW1lLFxufSkgPT4ge1xuXHRpZiAob2JqZWN0TW9kZSAmJiAhcmVhZGFibGVPYmplY3RNb2RlKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0ub2JqZWN0TW9kZVxcYCBvcHRpb24gY2FuIG9ubHkgYmUgXFxgdHJ1ZVxcYCBpZiBcXGBuZXcgRHVwbGV4KHtvYmplY3RNb2RlOiB0cnVlfSlcXGAgaXMgdXNlZC5gKTtcblx0fVxuXG5cdGlmICghb2JqZWN0TW9kZSAmJiByZWFkYWJsZU9iamVjdE1vZGUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS5vYmplY3RNb2RlXFxgIG9wdGlvbiBjYW5ub3QgYmUgXFxgZmFsc2VcXGAgaWYgXFxgbmV3IER1cGxleCh7b2JqZWN0TW9kZTogdHJ1ZX0pXFxgIGlzIHVzZWQuYCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHR2YWx1ZToge3RyYW5zZm9ybSwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHR9O1xufTtcblxuY29uc3Qgbm9ybWFsaXplVHJhbnNmb3JtU3RyZWFtID0gKHtzdGRpb0l0ZW0sIHN0ZGlvSXRlbToge3ZhbHVlfSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbn0pID0+IHtcblx0Y29uc3Qge3RyYW5zZm9ybSwgb2JqZWN0TW9kZX0gPSBpc1BsYWluT2JqKHZhbHVlKSA/IHZhbHVlIDoge3RyYW5zZm9ybTogdmFsdWV9O1xuXHRjb25zdCB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9ID0gZ2V0VHJhbnNmb3JtT2JqZWN0TW9kZXMob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbik7XG5cdHJldHVybiAoe1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHR2YWx1ZToge3RyYW5zZm9ybSwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHR9KTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUdlbmVyYXRvciA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt2YWx1ZX0sIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24sIGVuY29kaW5nfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0dHJhbnNmb3JtLFxuXHRcdGZpbmFsLFxuXHRcdGJpbmFyeTogYmluYXJ5T3B0aW9uID0gZmFsc2UsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyA9IGZhbHNlLFxuXHRcdG9iamVjdE1vZGUsXG5cdH0gPSBpc1BsYWluT2JqKHZhbHVlKSA/IHZhbHVlIDoge3RyYW5zZm9ybTogdmFsdWV9O1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9ID0gZ2V0VHJhbnNmb3JtT2JqZWN0TW9kZXMob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbik7XG5cdHJldHVybiB7XG5cdFx0Li4uc3RkaW9JdGVtLFxuXHRcdHZhbHVlOiB7XG5cdFx0XHR0cmFuc2Zvcm0sXG5cdFx0XHRmaW5hbCxcblx0XHRcdGJpbmFyeSxcblx0XHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdFx0XHR3cml0YWJsZU9iamVjdE1vZGUsXG5cdFx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0fSxcblx0fTtcbn07XG5cbmNvbnN0IHNvcnRUcmFuc2Zvcm1zID0gKG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbikgPT4gZGlyZWN0aW9uID09PSAnaW5wdXQnID8gbmV3VHJhbnNmb3Jtcy5yZXZlcnNlKCkgOiBuZXdUcmFuc2Zvcm1zO1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge1xuXHRpc1N0cmVhbSBhcyBpc05vZGVTdHJlYW0sXG5cdGlzUmVhZGFibGVTdHJlYW0gYXMgaXNOb2RlUmVhZGFibGVTdHJlYW0sXG5cdGlzV3JpdGFibGVTdHJlYW0gYXMgaXNOb2RlV3JpdGFibGVTdHJlYW0sXG59IGZyb20gJ2lzLXN0cmVhbSc7XG5pbXBvcnQge2lzV3JpdGFibGVTdHJlYW19IGZyb20gJy4vdHlwZS5qcyc7XG5cbi8vIEZvciBgc3RkaW9bZmROdW1iZXJdYCBiZXlvbmQgc3RkaW4vc3Rkb3V0L3N0ZGVyciwgd2UgbmVlZCB0byBndWVzcyB3aGV0aGVyIHRoZSB2YWx1ZSBwYXNzZWQgaXMgaW50ZW5kZWQgZm9yIGlucHV0cyBvciBvdXRwdXRzLlxuLy8gVGhpcyBhbGxvd3MgdXMgdG8ga25vdyB3aGV0aGVyIHRvIHBpcGUgX2ludG9fIG9yIF9mcm9tXyB0aGUgc3RyZWFtLlxuLy8gV2hlbiBgc3RkaW9bZmROdW1iZXJdYCBpcyBhIHNpbmdsZSB2YWx1ZSwgdGhpcyBndWVzcyBpcyBmYWlybHkgc3RyYWlnaHRmb3J3YXJkLlxuLy8gSG93ZXZlciwgd2hlbiBpdCBpcyBhbiBhcnJheSBpbnN0ZWFkLCB3ZSBhbHNvIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBkaWZmZXJlbnQgdmFsdWVzIGFyZSBub3QgaW5jb21wYXRpYmxlIHdpdGggZWFjaCBvdGhlci5cbmV4cG9ydCBjb25zdCBnZXRTdHJlYW1EaXJlY3Rpb24gPSAoc3RkaW9JdGVtcywgZmROdW1iZXIsIG9wdGlvbk5hbWUpID0+IHtcblx0Y29uc3QgZGlyZWN0aW9ucyA9IHN0ZGlvSXRlbXMubWFwKHN0ZGlvSXRlbSA9PiBnZXRTdGRpb0l0ZW1EaXJlY3Rpb24oc3RkaW9JdGVtLCBmZE51bWJlcikpO1xuXG5cdGlmIChkaXJlY3Rpb25zLmluY2x1ZGVzKCdpbnB1dCcpICYmIGRpcmVjdGlvbnMuaW5jbHVkZXMoJ291dHB1dCcpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3Qgbm90IGJlIGFuIGFycmF5IG9mIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlIHZhbHVlcy5gKTtcblx0fVxuXG5cdHJldHVybiBkaXJlY3Rpb25zLmZpbmQoQm9vbGVhbikgPz8gREVGQVVMVF9ESVJFQ1RJT047XG59O1xuXG5jb25zdCBnZXRTdGRpb0l0ZW1EaXJlY3Rpb24gPSAoe3R5cGUsIHZhbHVlfSwgZmROdW1iZXIpID0+IEtOT1dOX0RJUkVDVElPTlNbZmROdW1iZXJdID8/IGd1ZXNzU3RyZWFtRGlyZWN0aW9uW3R5cGVdKHZhbHVlKTtcblxuLy8gYHN0ZGluYC9gc3Rkb3V0YC9gc3RkZXJyYCBoYXZlIGEga25vd24gZGlyZWN0aW9uXG5jb25zdCBLTk9XTl9ESVJFQ1RJT05TID0gWydpbnB1dCcsICdvdXRwdXQnLCAnb3V0cHV0J107XG5cbmNvbnN0IGFueURpcmVjdGlvbiA9ICgpID0+IHVuZGVmaW5lZDtcbmNvbnN0IGFsd2F5c0lucHV0ID0gKCkgPT4gJ2lucHV0JztcblxuLy8gYHN0cmluZ2AgY2FuIG9ubHkgYmUgYWRkZWQgdGhyb3VnaCB0aGUgYGlucHV0YCBvcHRpb24sIGkuZS4gZG9lcyBub3QgbmVlZCB0byBiZSBoYW5kbGVkIGhlcmVcbmNvbnN0IGd1ZXNzU3RyZWFtRGlyZWN0aW9uID0ge1xuXHRnZW5lcmF0b3I6IGFueURpcmVjdGlvbixcblx0YXN5bmNHZW5lcmF0b3I6IGFueURpcmVjdGlvbixcblx0ZmlsZVVybDogYW55RGlyZWN0aW9uLFxuXHRmaWxlUGF0aDogYW55RGlyZWN0aW9uLFxuXHRpdGVyYWJsZTogYWx3YXlzSW5wdXQsXG5cdGFzeW5jSXRlcmFibGU6IGFsd2F5c0lucHV0LFxuXHR1aW50OEFycmF5OiBhbHdheXNJbnB1dCxcblx0d2ViU3RyZWFtOiB2YWx1ZSA9PiBpc1dyaXRhYmxlU3RyZWFtKHZhbHVlKSA/ICdvdXRwdXQnIDogJ2lucHV0Jyxcblx0bm9kZVN0cmVhbSh2YWx1ZSkge1xuXHRcdGlmICghaXNOb2RlUmVhZGFibGVTdHJlYW0odmFsdWUsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHRcdHJldHVybiAnb3V0cHV0Jztcblx0XHR9XG5cblx0XHRyZXR1cm4gaXNOb2RlV3JpdGFibGVTdHJlYW0odmFsdWUsIHtjaGVja09wZW46IGZhbHNlfSkgPyB1bmRlZmluZWQgOiAnaW5wdXQnO1xuXHR9LFxuXHR3ZWJUcmFuc2Zvcm06IGFueURpcmVjdGlvbixcblx0ZHVwbGV4OiBhbnlEaXJlY3Rpb24sXG5cdG5hdGl2ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHN0YW5kYXJkU3RyZWFtRGlyZWN0aW9uID0gZ2V0U3RhbmRhcmRTdHJlYW1EaXJlY3Rpb24odmFsdWUpO1xuXHRcdGlmIChzdGFuZGFyZFN0cmVhbURpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gc3RhbmRhcmRTdHJlYW1EaXJlY3Rpb247XG5cdFx0fVxuXG5cdFx0aWYgKGlzTm9kZVN0cmVhbSh2YWx1ZSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdFx0cmV0dXJuIGd1ZXNzU3RyZWFtRGlyZWN0aW9uLm5vZGVTdHJlYW0odmFsdWUpO1xuXHRcdH1cblx0fSxcbn07XG5cbmNvbnN0IGdldFN0YW5kYXJkU3RyZWFtRGlyZWN0aW9uID0gdmFsdWUgPT4ge1xuXHRpZiAoWzAsIHByb2Nlc3Muc3RkaW5dLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdHJldHVybiAnaW5wdXQnO1xuXHR9XG5cblx0aWYgKFsxLCAyLCBwcm9jZXNzLnN0ZG91dCwgcHJvY2Vzcy5zdGRlcnJdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdHJldHVybiAnb3V0cHV0Jztcblx0fVxufTtcblxuLy8gV2hlbiBhbWJpZ3VvdXMsIHdlIGluaXRpYWxseSBrZWVwIHRoZSBkaXJlY3Rpb24gYXMgYHVuZGVmaW5lZGAuXG4vLyBUaGlzIGFsbG93cyBhcnJheXMgb2YgYHN0ZGlvYCB2YWx1ZXMgdG8gcmVzb2x2ZSB0aGUgYW1iaWd1aXR5LlxuLy8gRm9yIGV4YW1wbGUsIGBzdGRpb1szXTogRHVwbGV4U3RyZWFtYCBpcyBhbWJpZ3VvdXMsIGJ1dCBgc3RkaW9bM106IFtEdXBsZXhTdHJlYW0sIFdyaXRhYmxlU3RyZWFtXWAgaXMgbm90LlxuLy8gV2hlbiB0aGUgYW1iaWd1aXR5IHJlbWFpbnMsIHdlIGRlZmF1bHQgdG8gYG91dHB1dGAgc2luY2UgaXQgaXMgdGhlIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciBhZGRpdGlvbmFsIGZpbGUgZGVzY3JpcHRvcnMuXG5jb25zdCBERUZBVUxUX0RJUkVDVElPTiA9ICdvdXRwdXQnO1xuIiwgIi8vIFRoZSBgaXBjYCBvcHRpb24gYWRkcyBhbiBgaXBjYCBpdGVtIHRvIHRoZSBgc3RkaW9gIG9wdGlvblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUlwY1N0ZGlvQXJyYXkgPSAoc3RkaW9BcnJheSwgaXBjKSA9PiBpcGMgJiYgIXN0ZGlvQXJyYXkuaW5jbHVkZXMoJ2lwYycpXG5cdD8gWy4uLnN0ZGlvQXJyYXksICdpcGMnXVxuXHQ6IHN0ZGlvQXJyYXk7XG4iLCAiaW1wb3J0IHtTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVN9IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUlwY1N0ZGlvQXJyYXl9IGZyb20gJy4uL2lwYy9hcnJheS5qcyc7XG5pbXBvcnQge2lzRnVsbFZlcmJvc2V9IGZyb20gJy4uL3ZlcmJvc2UvdmFsdWVzLmpzJztcblxuLy8gQWRkIHN1cHBvcnQgZm9yIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgYXMgYW4gYWxpYXMgZm9yIGBzdGRpb2AuXG4vLyBBbHNvIG5vcm1hbGl6ZSB0aGUgYHN0ZGlvYCBvcHRpb24uXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplU3RkaW9PcHRpb24gPSAoe3N0ZGlvLCBpcGMsIGJ1ZmZlciwgLi4ub3B0aW9uc30sIHZlcmJvc2VJbmZvLCBpc1N5bmMpID0+IHtcblx0Y29uc3Qgc3RkaW9BcnJheSA9IGdldFN0ZGlvQXJyYXkoc3RkaW8sIG9wdGlvbnMpLm1hcCgoc3RkaW9PcHRpb24sIGZkTnVtYmVyKSA9PiBhZGREZWZhdWx0VmFsdWUoc3RkaW9PcHRpb24sIGZkTnVtYmVyKSk7XG5cdHJldHVybiBpc1N5bmNcblx0XHQ/IG5vcm1hbGl6ZVN0ZGlvU3luYyhzdGRpb0FycmF5LCBidWZmZXIsIHZlcmJvc2VJbmZvKVxuXHRcdDogbm9ybWFsaXplSXBjU3RkaW9BcnJheShzdGRpb0FycmF5LCBpcGMpO1xufTtcblxuY29uc3QgZ2V0U3RkaW9BcnJheSA9IChzdGRpbywgb3B0aW9ucykgPT4ge1xuXHRpZiAoc3RkaW8gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubWFwKGFsaWFzID0+IG9wdGlvbnNbYWxpYXNdKTtcblx0fVxuXG5cdGlmIChoYXNBbGlhcyhvcHRpb25zKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgSXQncyBub3QgcG9zc2libGUgdG8gcHJvdmlkZSBcXGBzdGRpb1xcYCBpbiBjb21iaW5hdGlvbiB3aXRoIG9uZSBvZiAke1NUQU5EQVJEX1NUUkVBTVNfQUxJQVNFUy5tYXAoYWxpYXMgPT4gYFxcYCR7YWxpYXN9XFxgYCkuam9pbignLCAnKX1gKTtcblx0fVxuXG5cdGlmICh0eXBlb2Ygc3RkaW8gPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIFtzdGRpbywgc3RkaW8sIHN0ZGlvXTtcblx0fVxuXG5cdGlmICghQXJyYXkuaXNBcnJheShzdGRpbykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBzdGRpb1xcYCB0byBiZSBvZiB0eXBlIFxcYHN0cmluZ1xcYCBvciBcXGBBcnJheVxcYCwgZ290IFxcYCR7dHlwZW9mIHN0ZGlvfVxcYGApO1xuXHR9XG5cblx0Y29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoc3RkaW8ubGVuZ3RoLCBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubGVuZ3RoKTtcblx0cmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aH0sIChfLCBmZE51bWJlcikgPT4gc3RkaW9bZmROdW1iZXJdKTtcbn07XG5cbmNvbnN0IGhhc0FsaWFzID0gb3B0aW9ucyA9PiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMuc29tZShhbGlhcyA9PiBvcHRpb25zW2FsaWFzXSAhPT0gdW5kZWZpbmVkKTtcblxuY29uc3QgYWRkRGVmYXVsdFZhbHVlID0gKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShzdGRpb09wdGlvbikpIHtcblx0XHRyZXR1cm4gc3RkaW9PcHRpb24ubWFwKGl0ZW0gPT4gYWRkRGVmYXVsdFZhbHVlKGl0ZW0sIGZkTnVtYmVyKSk7XG5cdH1cblxuXHRpZiAoc3RkaW9PcHRpb24gPT09IG51bGwgfHwgc3RkaW9PcHRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmZE51bWJlciA+PSBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubGVuZ3RoID8gJ2lnbm9yZScgOiAncGlwZSc7XG5cdH1cblxuXHRyZXR1cm4gc3RkaW9PcHRpb247XG59O1xuXG4vLyBVc2luZyBgYnVmZmVyOiBmYWxzZWAgd2l0aCBzeW5jaHJvbm91cyBtZXRob2RzIGltcGxpZXMgYHN0ZG91dGAvYHN0ZGVycmA6IGBpZ25vcmVgLlxuLy8gVW5sZXNzIHRoZSBvdXRwdXQgaXMgbmVlZGVkLCBlLmcuIGR1ZSB0byBgdmVyYm9zZTogJ2Z1bGwnYCBvciB0byByZWRpcmVjdGluZyB0byBhIGZpbGUuXG5jb25zdCBub3JtYWxpemVTdGRpb1N5bmMgPSAoc3RkaW9BcnJheSwgYnVmZmVyLCB2ZXJib3NlSW5mbykgPT4gc3RkaW9BcnJheS5tYXAoKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT5cblx0IWJ1ZmZlcltmZE51bWJlcl1cblx0JiYgZmROdW1iZXIgIT09IDBcblx0JiYgIWlzRnVsbFZlcmJvc2UodmVyYm9zZUluZm8sIGZkTnVtYmVyKVxuXHQmJiBpc091dHB1dFBpcGVPbmx5KHN0ZGlvT3B0aW9uKVxuXHRcdD8gJ2lnbm9yZSdcblx0XHQ6IHN0ZGlvT3B0aW9uKTtcblxuY29uc3QgaXNPdXRwdXRQaXBlT25seSA9IHN0ZGlvT3B0aW9uID0+IHN0ZGlvT3B0aW9uID09PSAncGlwZSdcblx0fHwgKEFycmF5LmlzQXJyYXkoc3RkaW9PcHRpb24pICYmIHN0ZGlvT3B0aW9uLmV2ZXJ5KGl0ZW0gPT4gaXRlbSA9PT0gJ3BpcGUnKSk7XG4iLCAiaW1wb3J0IHtyZWFkRmlsZVN5bmN9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHR0eSBmcm9tICdub2RlOnR0eSc7XG5pbXBvcnQge2lzU3RyZWFtIGFzIGlzTm9kZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7U1RBTkRBUkRfU1RSRUFNU30gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcbmltcG9ydCB7YnVmZmVyVG9VaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7c2VyaWFsaXplT3B0aW9uVmFsdWV9IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcblxuLy8gV2hlbiB3ZSB1c2UgbXVsdGlwbGUgYHN0ZGlvYCB2YWx1ZXMgZm9yIHRoZSBzYW1lIHN0cmVhbXMsIHdlIHBhc3MgJ3BpcGUnIHRvIGBjaGlsZF9wcm9jZXNzLnNwYXduKClgLlxuLy8gV2UgdGhlbiBlbXVsYXRlIHRoZSBwaXBpbmcgZG9uZSBieSBjb3JlIE5vZGUuanMuXG4vLyBUbyBkbyBzbywgd2UgdHJhbnNmb3JtIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuLy8gIC0gTm9kZS5qcyBzdHJlYW1zIGFyZSBtYXJrZWQgYXMgYHR5cGU6IG5vZGVTdHJlYW1gXG4vLyAgLSAnaW5oZXJpdCcgYmVjb21lcyBgcHJvY2Vzcy5zdGRpbnxzdGRvdXR8c3RkZXJyYFxuLy8gIC0gYW55IGZpbGUgZGVzY3JpcHRvciBpbnRlZ2VyIGJlY29tZXMgYHByb2Nlc3Muc3RkaW9bZmROdW1iZXJdYFxuLy8gQWxsIG9mIHRoZSBhYm92ZSB0cmFuc2Zvcm1hdGlvbnMgdGVsbCBFeGVjYSB0byBwZXJmb3JtIG1hbnVhbCBwaXBpbmcuXG5leHBvcnQgY29uc3QgaGFuZGxlTmF0aXZlU3RyZWFtID0gKHtzdGRpb0l0ZW0sIHN0ZGlvSXRlbToge3R5cGV9LCBpc1N0ZGlvQXJyYXksIGZkTnVtYmVyLCBkaXJlY3Rpb24sIGlzU3luY30pID0+IHtcblx0aWYgKCFpc1N0ZGlvQXJyYXkgfHwgdHlwZSAhPT0gJ25hdGl2ZScpIHtcblx0XHRyZXR1cm4gc3RkaW9JdGVtO1xuXHR9XG5cblx0cmV0dXJuIGlzU3luY1xuXHRcdD8gaGFuZGxlTmF0aXZlU3RyZWFtU3luYyh7c3RkaW9JdGVtLCBmZE51bWJlciwgZGlyZWN0aW9ufSlcblx0XHQ6IGhhbmRsZU5hdGl2ZVN0cmVhbUFzeW5jKHtzdGRpb0l0ZW0sIGZkTnVtYmVyfSk7XG59O1xuXG4vLyBTeW5jaHJvbm91cyBtZXRob2RzIHVzZSBhIGRpZmZlcmVudCBsb2dpYy5cbi8vICdpbmhlcml0JywgZmlsZSBkZXNjcmlwdG9ycyBhbmQgcHJvY2Vzcy5zdGQqIGFyZSBoYW5kbGVkIGJ5IHJlYWRGaWxlU3luYygpL3dyaXRlRmlsZVN5bmMoKS5cbmNvbnN0IGhhbmRsZU5hdGl2ZVN0cmVhbVN5bmMgPSAoe3N0ZGlvSXRlbSwgc3RkaW9JdGVtOiB7dmFsdWUsIG9wdGlvbk5hbWV9LCBmZE51bWJlciwgZGlyZWN0aW9ufSkgPT4ge1xuXHRjb25zdCB0YXJnZXRGZCA9IGdldFRhcmdldEZkKHtcblx0XHR2YWx1ZSxcblx0XHRvcHRpb25OYW1lLFxuXHRcdGZkTnVtYmVyLFxuXHRcdGRpcmVjdGlvbixcblx0fSk7XG5cdGlmICh0YXJnZXRGZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRhcmdldEZkO1xuXHR9XG5cblx0aWYgKGlzTm9kZVN0cmVhbSh2YWx1ZSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiBTdHJlYW1cXGAgb3B0aW9uIGNhbm5vdCBib3RoIGJlIGFuIGFycmF5IGFuZCBpbmNsdWRlIGEgc3RyZWFtIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcblx0fVxuXG5cdHJldHVybiBzdGRpb0l0ZW07XG59O1xuXG5jb25zdCBnZXRUYXJnZXRGZCA9ICh7dmFsdWUsIG9wdGlvbk5hbWUsIGZkTnVtYmVyLCBkaXJlY3Rpb259KSA9PiB7XG5cdGNvbnN0IHRhcmdldEZkTnVtYmVyID0gZ2V0VGFyZ2V0RmROdW1iZXIodmFsdWUsIGZkTnVtYmVyKTtcblx0aWYgKHRhcmdldEZkTnVtYmVyID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZGlyZWN0aW9uID09PSAnb3V0cHV0Jykge1xuXHRcdHJldHVybiB7dHlwZTogJ2ZpbGVOdW1iZXInLCB2YWx1ZTogdGFyZ2V0RmROdW1iZXIsIG9wdGlvbk5hbWV9O1xuXHR9XG5cblx0aWYgKHR0eS5pc2F0dHkodGFyZ2V0RmROdW1iZXIpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX06ICR7c2VyaWFsaXplT3B0aW9uVmFsdWUodmFsdWUpfVxcYCBvcHRpb24gaXMgaW52YWxpZDogaXQgY2Fubm90IGJlIGEgVFRZIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcblx0fVxuXG5cdHJldHVybiB7dHlwZTogJ3VpbnQ4QXJyYXknLCB2YWx1ZTogYnVmZmVyVG9VaW50OEFycmF5KHJlYWRGaWxlU3luYyh0YXJnZXRGZE51bWJlcikpLCBvcHRpb25OYW1lfTtcbn07XG5cbmNvbnN0IGdldFRhcmdldEZkTnVtYmVyID0gKHZhbHVlLCBmZE51bWJlcikgPT4ge1xuXHRpZiAodmFsdWUgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiBmZE51bWJlcjtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3Qgc3RhbmRhcmRTdHJlYW1JbmRleCA9IFNUQU5EQVJEX1NUUkVBTVMuaW5kZXhPZih2YWx1ZSk7XG5cdGlmIChzdGFuZGFyZFN0cmVhbUluZGV4ICE9PSAtMSkge1xuXHRcdHJldHVybiBzdGFuZGFyZFN0cmVhbUluZGV4O1xuXHR9XG59O1xuXG5jb25zdCBoYW5kbGVOYXRpdmVTdHJlYW1Bc3luYyA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt2YWx1ZSwgb3B0aW9uTmFtZX0sIGZkTnVtYmVyfSkgPT4ge1xuXHRpZiAodmFsdWUgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiB7dHlwZTogJ25vZGVTdHJlYW0nLCB2YWx1ZTogZ2V0U3RhbmRhcmRTdHJlYW0oZmROdW1iZXIsIHZhbHVlLCBvcHRpb25OYW1lKSwgb3B0aW9uTmFtZX07XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiB7dHlwZTogJ25vZGVTdHJlYW0nLCB2YWx1ZTogZ2V0U3RhbmRhcmRTdHJlYW0odmFsdWUsIHZhbHVlLCBvcHRpb25OYW1lKSwgb3B0aW9uTmFtZX07XG5cdH1cblxuXHRpZiAoaXNOb2RlU3RyZWFtKHZhbHVlLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0cmV0dXJuIHt0eXBlOiAnbm9kZVN0cmVhbScsIHZhbHVlLCBvcHRpb25OYW1lfTtcblx0fVxuXG5cdHJldHVybiBzdGRpb0l0ZW07XG59O1xuXG4vLyBOb2RlLmpzIGRvZXMgbm90IGFsbG93IHRvIGVhc2lseSByZXRyaWV2ZSBmaWxlIGRlc2NyaXB0b3JzIGJleW9uZCBzdGRpbi9zdGRvdXQvc3RkZXJyIGFzIHN0cmVhbXMuXG4vLyAgLSBgZnMuY3JlYXRlUmVhZFN0cmVhbSgpYC9gZnMuY3JlYXRlV3JpdGVTdHJlYW0oKWAgd2l0aCB0aGUgYGZkYCBvcHRpb24gZG8gbm90IHdvcmsgd2l0aCBjaGFyYWN0ZXIgZGV2aWNlcyB0aGF0IHVzZSBibG9ja2luZyByZWFkcy93cml0ZXMgKHN1Y2ggYXMgaW50ZXJhY3RpdmUgVFRZcykuXG4vLyAgLSBVc2luZyBhIFRDUCBgU29ja2V0YCB3b3VsZCB3b3JrIGJ1dCBiZSByYXRoZXIgY29tcGxleCB0byBpbXBsZW1lbnQuXG4vLyBTaW5jZSB0aGlzIGlzIGFuIGVkZ2UgY2FzZSwgd2Ugc2ltcGx5IHRocm93IGFuIGVycm9yIG1lc3NhZ2UuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9leGVjYS9wdWxsLzY0MyNkaXNjdXNzaW9uX3IxNDM1OTA1NzA3XG5jb25zdCBnZXRTdGFuZGFyZFN0cmVhbSA9IChmZE51bWJlciwgdmFsdWUsIG9wdGlvbk5hbWUpID0+IHtcblx0Y29uc3Qgc3RhbmRhcmRTdHJlYW0gPSBTVEFOREFSRF9TVFJFQU1TW2ZkTnVtYmVyXTtcblxuXHRpZiAoc3RhbmRhcmRTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiAke3ZhbHVlfVxcYCBvcHRpb24gaXMgaW52YWxpZDogbm8gc3VjaCBzdGFuZGFyZCBzdHJlYW0uYCk7XG5cdH1cblxuXHRyZXR1cm4gc3RhbmRhcmRTdHJlYW07XG59O1xuIiwgImltcG9ydCB7aXNSZWFkYWJsZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7aXNVaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7aXNVcmwsIGlzRmlsZVBhdGhTdHJpbmd9IGZyb20gJy4vdHlwZS5qcyc7XG5cbi8vIEFwcGVuZCB0aGUgYHN0ZGluYCBvcHRpb24gd2l0aCB0aGUgYGlucHV0YCBhbmQgYGlucHV0RmlsZWAgb3B0aW9uc1xuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0T3B0aW9ucyA9ICh7aW5wdXQsIGlucHV0RmlsZX0sIGZkTnVtYmVyKSA9PiBmZE51bWJlciA9PT0gMFxuXHQ/IFtcblx0XHQuLi5oYW5kbGVJbnB1dE9wdGlvbihpbnB1dCksXG5cdFx0Li4uaGFuZGxlSW5wdXRGaWxlT3B0aW9uKGlucHV0RmlsZSksXG5cdF1cblx0OiBbXTtcblxuY29uc3QgaGFuZGxlSW5wdXRPcHRpb24gPSBpbnB1dCA9PiBpbnB1dCA9PT0gdW5kZWZpbmVkID8gW10gOiBbe1xuXHR0eXBlOiBnZXRJbnB1dFR5cGUoaW5wdXQpLFxuXHR2YWx1ZTogaW5wdXQsXG5cdG9wdGlvbk5hbWU6ICdpbnB1dCcsXG59XTtcblxuY29uc3QgZ2V0SW5wdXRUeXBlID0gaW5wdXQgPT4ge1xuXHRpZiAoaXNSZWFkYWJsZVN0cmVhbShpbnB1dCwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHJldHVybiAnbm9kZVN0cmVhbSc7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAnc3RyaW5nJztcblx0fVxuXG5cdGlmIChpc1VpbnQ4QXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuICd1aW50OEFycmF5Jztcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcignVGhlIGBpbnB1dGAgb3B0aW9uIG11c3QgYmUgYSBzdHJpbmcsIGEgVWludDhBcnJheSBvciBhIE5vZGUuanMgUmVhZGFibGUgc3RyZWFtLicpO1xufTtcblxuY29uc3QgaGFuZGxlSW5wdXRGaWxlT3B0aW9uID0gaW5wdXRGaWxlID0+IGlucHV0RmlsZSA9PT0gdW5kZWZpbmVkID8gW10gOiBbe1xuXHQuLi5nZXRJbnB1dEZpbGVUeXBlKGlucHV0RmlsZSksXG5cdG9wdGlvbk5hbWU6ICdpbnB1dEZpbGUnLFxufV07XG5cbmNvbnN0IGdldElucHV0RmlsZVR5cGUgPSBpbnB1dEZpbGUgPT4ge1xuXHRpZiAoaXNVcmwoaW5wdXRGaWxlKSkge1xuXHRcdHJldHVybiB7dHlwZTogJ2ZpbGVVcmwnLCB2YWx1ZTogaW5wdXRGaWxlfTtcblx0fVxuXG5cdGlmIChpc0ZpbGVQYXRoU3RyaW5nKGlucHV0RmlsZSkpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdmaWxlUGF0aCcsIHZhbHVlOiB7ZmlsZTogaW5wdXRGaWxlfX07XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaW5wdXRGaWxlYCBvcHRpb24gbXVzdCBiZSBhIGZpbGUgcGF0aCBzdHJpbmcgb3IgYSBmaWxlIFVSTC4nKTtcbn07XG4iLCAiaW1wb3J0IHtcblx0U1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVNfU1lOQyxcblx0U1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVMsXG5cdEZPUkJJRF9EVVBMSUNBVEVfVFlQRVMsXG5cdFRZUEVfVE9fTUVTU0FHRSxcbn0gZnJvbSAnLi90eXBlLmpzJztcblxuLy8gRHVwbGljYXRlcyBpbiB0aGUgc2FtZSBmaWxlIGRlc2NyaXB0b3IgaXMgbW9zdCBsaWtlbHkgYW4gZXJyb3IuXG4vLyBIb3dldmVyLCB0aGlzIGNhbiBiZSB1c2VmdWwgd2l0aCBnZW5lcmF0b3JzLlxuZXhwb3J0IGNvbnN0IGZpbHRlckR1cGxpY2F0ZXMgPSBzdGRpb0l0ZW1zID0+IHN0ZGlvSXRlbXMuZmlsdGVyKChzdGRpb0l0ZW1PbmUsIGluZGV4T25lKSA9PlxuXHRzdGRpb0l0ZW1zLmV2ZXJ5KChzdGRpb0l0ZW1Ud28sIGluZGV4VHdvKSA9PiBzdGRpb0l0ZW1PbmUudmFsdWUgIT09IHN0ZGlvSXRlbVR3by52YWx1ZVxuXHRcdHx8IGluZGV4T25lID49IGluZGV4VHdvXG5cdFx0fHwgc3RkaW9JdGVtT25lLnR5cGUgPT09ICdnZW5lcmF0b3InXG5cdFx0fHwgc3RkaW9JdGVtT25lLnR5cGUgPT09ICdhc3luY0dlbmVyYXRvcicpKTtcblxuLy8gQ2hlY2sgaWYgdHdvIGZpbGUgZGVzY3JpcHRvcnMgYXJlIHNoYXJpbmcgdGhlIHNhbWUgdGFyZ2V0LlxuLy8gRm9yIGV4YW1wbGUgYHtzdGRvdXQ6IHtmaWxlOiAnLi9vdXRwdXQudHh0J30sIHN0ZGVycjoge2ZpbGU6ICcuL291dHB1dC50eHQnfX1gLlxuZXhwb3J0IGNvbnN0IGdldER1cGxpY2F0ZVN0cmVhbSA9ICh7c3RkaW9JdGVtOiB7dHlwZSwgdmFsdWUsIG9wdGlvbk5hbWV9LCBkaXJlY3Rpb24sIGZpbGVEZXNjcmlwdG9ycywgaXNTeW5jfSkgPT4ge1xuXHRjb25zdCBvdGhlclN0ZGlvSXRlbXMgPSBnZXRPdGhlclN0ZGlvSXRlbXMoZmlsZURlc2NyaXB0b3JzLCB0eXBlKTtcblx0aWYgKG90aGVyU3RkaW9JdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaXNTeW5jKSB7XG5cdFx0dmFsaWRhdGVEdXBsaWNhdGVTdHJlYW1TeW5jKHtcblx0XHRcdG90aGVyU3RkaW9JdGVtcyxcblx0XHRcdHR5cGUsXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG9wdGlvbk5hbWUsXG5cdFx0XHRkaXJlY3Rpb24sXG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTLmhhcyh0eXBlKSkge1xuXHRcdHJldHVybiBnZXREdXBsaWNhdGVTdHJlYW1JbnN0YW5jZSh7XG5cdFx0XHRvdGhlclN0ZGlvSXRlbXMsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKEZPUkJJRF9EVVBMSUNBVEVfVFlQRVMuaGFzKHR5cGUpKSB7XG5cdFx0dmFsaWRhdGVEdXBsaWNhdGVUcmFuc2Zvcm0oe1xuXHRcdFx0b3RoZXJTdGRpb0l0ZW1zLFxuXHRcdFx0dHlwZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0b3B0aW9uTmFtZSxcblx0XHR9KTtcblx0fVxufTtcblxuLy8gVmFsdWVzIHNoYXJlZCBieSBtdWx0aXBsZSBmaWxlIGRlc2NyaXB0b3JzXG5jb25zdCBnZXRPdGhlclN0ZGlvSXRlbXMgPSAoZmlsZURlc2NyaXB0b3JzLCB0eXBlKSA9PiBmaWxlRGVzY3JpcHRvcnNcblx0LmZsYXRNYXAoKHtkaXJlY3Rpb24sIHN0ZGlvSXRlbXN9KSA9PiBzdGRpb0l0ZW1zXG5cdFx0LmZpbHRlcihzdGRpb0l0ZW0gPT4gc3RkaW9JdGVtLnR5cGUgPT09IHR5cGUpXG5cdFx0Lm1hcCgoc3RkaW9JdGVtID0+ICh7Li4uc3RkaW9JdGVtLCBkaXJlY3Rpb259KSkpKTtcblxuLy8gV2l0aCBgZXhlY2FTeW5jKClgLCBkbyBub3QgYWxsb3cgc2V0dGluZyBhIGZpbGUgcGF0aCBib3RoIGluIGlucHV0IGFuZCBvdXRwdXRcbmNvbnN0IHZhbGlkYXRlRHVwbGljYXRlU3RyZWFtU3luYyA9ICh7b3RoZXJTdGRpb0l0ZW1zLCB0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZSwgZGlyZWN0aW9ufSkgPT4ge1xuXHRpZiAoU1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVNfU1lOQy5oYXModHlwZSkpIHtcblx0XHRnZXREdXBsaWNhdGVTdHJlYW1JbnN0YW5jZSh7XG5cdFx0XHRvdGhlclN0ZGlvSXRlbXMsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBXaGVuIHR3byBmaWxlIGRlc2NyaXB0b3JzIHNoYXJlIHRoZSBmaWxlIG9yIHN0cmVhbSwgd2UgbmVlZCB0byByZS11c2UgdGhlIHNhbWUgdW5kZXJseWluZyBzdHJlYW0uXG4vLyBPdGhlcndpc2UsIHRoZSBzdHJlYW0gd291bGQgYmUgY2xvc2VkIHR3aWNlIHdoZW4gcGlwaW5nIGVuZHMuXG4vLyBUaGlzIGlzIG9ubHkgYW4gaXNzdWUgd2l0aCBvdXRwdXQgZmlsZSBkZXNjcmlwdG9ycy5cbi8vIFRoaXMgaXMgbm90IGEgcHJvYmxlbSB3aXRoIGdlbmVyYXRvciBmdW5jdGlvbnMgc2luY2UgdGhvc2UgY3JlYXRlIGEgbmV3IGluc3RhbmNlIGZvciBlYWNoIGZpbGUgZGVzY3JpcHRvci5cbi8vIFdlIGFsc28gZm9yYmlkIGlucHV0IGFuZCBvdXRwdXQgZmlsZSBkZXNjcmlwdG9ycyBzaGFyaW5nIHRoZSBzYW1lIGZpbGUgb3Igc3RyZWFtLCBzaW5jZSB0aGF0IGRvZXMgbm90IG1ha2Ugc2Vuc2UuXG5jb25zdCBnZXREdXBsaWNhdGVTdHJlYW1JbnN0YW5jZSA9ICh7b3RoZXJTdGRpb0l0ZW1zLCB0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZSwgZGlyZWN0aW9ufSkgPT4ge1xuXHRjb25zdCBkdXBsaWNhdGVTdGRpb0l0ZW1zID0gb3RoZXJTdGRpb0l0ZW1zLmZpbHRlcihzdGRpb0l0ZW0gPT4gaGFzU2FtZVZhbHVlKHN0ZGlvSXRlbSwgdmFsdWUpKTtcblx0aWYgKGR1cGxpY2F0ZVN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZGlmZmVyZW50U3RkaW9JdGVtID0gZHVwbGljYXRlU3RkaW9JdGVtcy5maW5kKHN0ZGlvSXRlbSA9PiBzdGRpb0l0ZW0uZGlyZWN0aW9uICE9PSBkaXJlY3Rpb24pO1xuXHR0aHJvd09uRHVwbGljYXRlU3RyZWFtKGRpZmZlcmVudFN0ZGlvSXRlbSwgb3B0aW9uTmFtZSwgdHlwZSk7XG5cblx0cmV0dXJuIGRpcmVjdGlvbiA9PT0gJ291dHB1dCcgPyBkdXBsaWNhdGVTdGRpb0l0ZW1zWzBdLnN0cmVhbSA6IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IGhhc1NhbWVWYWx1ZSA9ICh7dHlwZSwgdmFsdWV9LCBzZWNvbmRWYWx1ZSkgPT4ge1xuXHRpZiAodHlwZSA9PT0gJ2ZpbGVQYXRoJykge1xuXHRcdHJldHVybiB2YWx1ZS5maWxlID09PSBzZWNvbmRWYWx1ZS5maWxlO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdmaWxlVXJsJykge1xuXHRcdHJldHVybiB2YWx1ZS5ocmVmID09PSBzZWNvbmRWYWx1ZS5ocmVmO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlID09PSBzZWNvbmRWYWx1ZTtcbn07XG5cbi8vIFdlIGRvIG5vdCBhbGxvdyB0d28gZmlsZSBkZXNjcmlwdG9ycyB0byBzaGFyZSB0aGUgc2FtZSBEdXBsZXggb3IgVHJhbnNmb3JtU3RyZWFtLlxuLy8gVGhpcyBpcyBiZWNhdXNlIHRob3NlIGFyZSBzZXQgZGlyZWN0bHkgdG8gYHN1YnByb2Nlc3Muc3RkKmAuXG4vLyBGb3IgZXhhbXBsZSwgdGhpcyBjb3VsZCByZXN1bHQgaW4gYHN1YnByb2Nlc3Muc3Rkb3V0YCBhbmQgYHN1YnByb2Nlc3Muc3RkZXJyYCBiZWluZyB0aGUgc2FtZSB2YWx1ZS5cbi8vIFRoaXMgbWVhbnMgcmVhZGluZyBmcm9tIGVpdGhlciB3b3VsZCBnZXQgZGF0YSBmcm9tIGJvdGggc3Rkb3V0IGFuZCBzdGRlcnIuXG5jb25zdCB2YWxpZGF0ZUR1cGxpY2F0ZVRyYW5zZm9ybSA9ICh7b3RoZXJTdGRpb0l0ZW1zLCB0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZX0pID0+IHtcblx0Y29uc3QgZHVwbGljYXRlU3RkaW9JdGVtID0gb3RoZXJTdGRpb0l0ZW1zLmZpbmQoKHt2YWx1ZToge3RyYW5zZm9ybX19KSA9PiB0cmFuc2Zvcm0gPT09IHZhbHVlLnRyYW5zZm9ybSk7XG5cdHRocm93T25EdXBsaWNhdGVTdHJlYW0oZHVwbGljYXRlU3RkaW9JdGVtLCBvcHRpb25OYW1lLCB0eXBlKTtcbn07XG5cbmNvbnN0IHRocm93T25EdXBsaWNhdGVTdHJlYW0gPSAoc3RkaW9JdGVtLCBvcHRpb25OYW1lLCB0eXBlKSA9PiB7XG5cdGlmIChzdGRpb0l0ZW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke3N0ZGlvSXRlbS5vcHRpb25OYW1lfVxcYCBhbmQgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb25zIG11c3Qgbm90IHRhcmdldCAke1RZUEVfVE9fTUVTU0FHRVt0eXBlXX0gdGhhdCBpcyB0aGUgc2FtZS5gKTtcblx0fVxufTtcbiIsICJpbXBvcnQge2dldFN0cmVhbU5hbWUsIGlzU3RhbmRhcmRTdHJlYW19IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZVRyYW5zZm9ybXN9IGZyb20gJy4uL3RyYW5zZm9ybS9ub3JtYWxpemUuanMnO1xuaW1wb3J0IHtnZXRGZE9iamVjdE1vZGV9IGZyb20gJy4uL3RyYW5zZm9ybS9vYmplY3QtbW9kZS5qcyc7XG5pbXBvcnQge1xuXHRnZXRTdGRpb0l0ZW1UeXBlLFxuXHRpc1JlZ3VsYXJVcmwsXG5cdGlzVW5rbm93blN0ZGlvU3RyaW5nLFxuXHRGSUxFX1RZUEVTLFxufSBmcm9tICcuL3R5cGUuanMnO1xuaW1wb3J0IHtnZXRTdHJlYW1EaXJlY3Rpb259IGZyb20gJy4vZGlyZWN0aW9uLmpzJztcbmltcG9ydCB7bm9ybWFsaXplU3RkaW9PcHRpb259IGZyb20gJy4vc3RkaW8tb3B0aW9uLmpzJztcbmltcG9ydCB7aGFuZGxlTmF0aXZlU3RyZWFtfSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQge2hhbmRsZUlucHV0T3B0aW9uc30gZnJvbSAnLi9pbnB1dC1vcHRpb24uanMnO1xuaW1wb3J0IHtmaWx0ZXJEdXBsaWNhdGVzLCBnZXREdXBsaWNhdGVTdHJlYW19IGZyb20gJy4vZHVwbGljYXRlLmpzJztcblxuLy8gSGFuZGxlIGBpbnB1dGAsIGBpbnB1dEZpbGVgLCBgc3RkaW5gLCBgc3Rkb3V0YCBhbmQgYHN0ZGVycmAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBhc3luYy9zeW5jIG1vZGVcbi8vIFRoZXkgYXJlIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5IG9mIGBmaWxlRGVzY3JpcHRvcnNgLlxuLy8gRWFjaCBgZmlsZURlc2NyaXB0b3JgIGlzIG5vcm1hbGl6ZWQsIHZhbGlkYXRlZCBhbmQgY29udGFpbnMgYWxsIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSBmb3IgZnVydGhlciBoYW5kbGluZy5cbmV4cG9ydCBjb25zdCBoYW5kbGVTdGRpbyA9IChhZGRQcm9wZXJ0aWVzLCBvcHRpb25zLCB2ZXJib3NlSW5mbywgaXNTeW5jKSA9PiB7XG5cdGNvbnN0IHN0ZGlvID0gbm9ybWFsaXplU3RkaW9PcHRpb24ob3B0aW9ucywgdmVyYm9zZUluZm8sIGlzU3luYyk7XG5cdGNvbnN0IGluaXRpYWxGaWxlRGVzY3JpcHRvcnMgPSBzdGRpby5tYXAoKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT4gZ2V0RmlsZURlc2NyaXB0b3Ioe1xuXHRcdHN0ZGlvT3B0aW9uLFxuXHRcdGZkTnVtYmVyLFxuXHRcdG9wdGlvbnMsXG5cdFx0aXNTeW5jLFxuXHR9KSk7XG5cdGNvbnN0IGZpbGVEZXNjcmlwdG9ycyA9IGdldEZpbmFsRmlsZURlc2NyaXB0b3JzKHtcblx0XHRpbml0aWFsRmlsZURlc2NyaXB0b3JzLFxuXHRcdGFkZFByb3BlcnRpZXMsXG5cdFx0b3B0aW9ucyxcblx0XHRpc1N5bmMsXG5cdH0pO1xuXHRvcHRpb25zLnN0ZGlvID0gZmlsZURlc2NyaXB0b3JzLm1hcCgoe3N0ZGlvSXRlbXN9KSA9PiBmb3J3YXJkU3RkaW8oc3RkaW9JdGVtcykpO1xuXHRyZXR1cm4gZmlsZURlc2NyaXB0b3JzO1xufTtcblxuY29uc3QgZ2V0RmlsZURlc2NyaXB0b3IgPSAoe3N0ZGlvT3B0aW9uLCBmZE51bWJlciwgb3B0aW9ucywgaXNTeW5jfSkgPT4ge1xuXHRjb25zdCBvcHRpb25OYW1lID0gZ2V0U3RyZWFtTmFtZShmZE51bWJlcik7XG5cdGNvbnN0IHtzdGRpb0l0ZW1zOiBpbml0aWFsU3RkaW9JdGVtcywgaXNTdGRpb0FycmF5fSA9IGluaXRpYWxpemVTdGRpb0l0ZW1zKHtcblx0XHRzdGRpb09wdGlvbixcblx0XHRmZE51bWJlcixcblx0XHRvcHRpb25zLFxuXHRcdG9wdGlvbk5hbWUsXG5cdH0pO1xuXHRjb25zdCBkaXJlY3Rpb24gPSBnZXRTdHJlYW1EaXJlY3Rpb24oaW5pdGlhbFN0ZGlvSXRlbXMsIGZkTnVtYmVyLCBvcHRpb25OYW1lKTtcblx0Y29uc3Qgc3RkaW9JdGVtcyA9IGluaXRpYWxTdGRpb0l0ZW1zLm1hcChzdGRpb0l0ZW0gPT4gaGFuZGxlTmF0aXZlU3RyZWFtKHtcblx0XHRzdGRpb0l0ZW0sXG5cdFx0aXNTdGRpb0FycmF5LFxuXHRcdGZkTnVtYmVyLFxuXHRcdGRpcmVjdGlvbixcblx0XHRpc1N5bmMsXG5cdH0pKTtcblx0Y29uc3Qgbm9ybWFsaXplZFN0ZGlvSXRlbXMgPSBub3JtYWxpemVUcmFuc2Zvcm1zKHN0ZGlvSXRlbXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwgb3B0aW9ucyk7XG5cdGNvbnN0IG9iamVjdE1vZGUgPSBnZXRGZE9iamVjdE1vZGUobm9ybWFsaXplZFN0ZGlvSXRlbXMsIGRpcmVjdGlvbik7XG5cdHZhbGlkYXRlRmlsZU9iamVjdE1vZGUobm9ybWFsaXplZFN0ZGlvSXRlbXMsIG9iamVjdE1vZGUpO1xuXHRyZXR1cm4ge2RpcmVjdGlvbiwgb2JqZWN0TW9kZSwgc3RkaW9JdGVtczogbm9ybWFsaXplZFN0ZGlvSXRlbXN9O1xufTtcblxuLy8gV2UgbWFrZSBzdXJlIHBhc3NpbmcgYW4gYXJyYXkgd2l0aCBhIHNpbmdsZSBpdGVtIGJlaGF2ZXMgdGhlIHNhbWUgYXMgcGFzc2luZyB0aGF0IGl0ZW0gd2l0aG91dCBhbiBhcnJheS5cbi8vIFRoaXMgaXMgd2hhdCB1c2VycyB3b3VsZCBleHBlY3QuXG4vLyBGb3IgZXhhbXBsZSwgYHN0ZG91dDogWydpZ25vcmUnXWAgYmVoYXZlcyB0aGUgc2FtZSBhcyBgc3Rkb3V0OiAnaWdub3JlJ2AuXG5jb25zdCBpbml0aWFsaXplU3RkaW9JdGVtcyA9ICh7c3RkaW9PcHRpb24sIGZkTnVtYmVyLCBvcHRpb25zLCBvcHRpb25OYW1lfSkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0ZGlvT3B0aW9uKSA/IHN0ZGlvT3B0aW9uIDogW3N0ZGlvT3B0aW9uXTtcblx0Y29uc3QgaW5pdGlhbFN0ZGlvSXRlbXMgPSBbXG5cdFx0Li4udmFsdWVzLm1hcCh2YWx1ZSA9PiBpbml0aWFsaXplU3RkaW9JdGVtKHZhbHVlLCBvcHRpb25OYW1lKSksXG5cdFx0Li4uaGFuZGxlSW5wdXRPcHRpb25zKG9wdGlvbnMsIGZkTnVtYmVyKSxcblx0XTtcblxuXHRjb25zdCBzdGRpb0l0ZW1zID0gZmlsdGVyRHVwbGljYXRlcyhpbml0aWFsU3RkaW9JdGVtcyk7XG5cdGNvbnN0IGlzU3RkaW9BcnJheSA9IHN0ZGlvSXRlbXMubGVuZ3RoID4gMTtcblx0dmFsaWRhdGVTdGRpb0FycmF5KHN0ZGlvSXRlbXMsIGlzU3RkaW9BcnJheSwgb3B0aW9uTmFtZSk7XG5cdHZhbGlkYXRlU3RyZWFtcyhzdGRpb0l0ZW1zKTtcblx0cmV0dXJuIHtzdGRpb0l0ZW1zLCBpc1N0ZGlvQXJyYXl9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVN0ZGlvSXRlbSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4gKHtcblx0dHlwZTogZ2V0U3RkaW9JdGVtVHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSksXG5cdHZhbHVlLFxuXHRvcHRpb25OYW1lLFxufSk7XG5cbmNvbnN0IHZhbGlkYXRlU3RkaW9BcnJheSA9IChzdGRpb0l0ZW1zLCBpc1N0ZGlvQXJyYXksIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKHN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3Qgbm90IGJlIGFuIGVtcHR5IGFycmF5LmApO1xuXHR9XG5cblx0aWYgKCFpc1N0ZGlvQXJyYXkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHt2YWx1ZSwgb3B0aW9uTmFtZX0gb2Ygc3RkaW9JdGVtcykge1xuXHRcdGlmIChJTlZBTElEX1NURElPX0FSUkFZX09QVElPTlMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24gbXVzdCBub3QgaW5jbHVkZSBcXGAke3ZhbHVlfVxcYC5gKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIFVzaW5nIHRob3NlIGBzdGRpb2AgdmFsdWVzIHRvZ2V0aGVyIHdpdGggb3RoZXJzIGZvciB0aGUgc2FtZSBzdHJlYW0gZG9lcyBub3QgbWFrZSBzZW5zZSwgc28gd2UgbWFrZSBpdCBmYWlsLlxuLy8gSG93ZXZlciwgd2UgZG8gYWxsb3cgaXQgaWYgdGhlIGFycmF5IGhhcyBhIHNpbmdsZSBpdGVtLlxuY29uc3QgSU5WQUxJRF9TVERJT19BUlJBWV9PUFRJT05TID0gbmV3IFNldChbJ2lnbm9yZScsICdpcGMnXSk7XG5cbmNvbnN0IHZhbGlkYXRlU3RyZWFtcyA9IHN0ZGlvSXRlbXMgPT4ge1xuXHRmb3IgKGNvbnN0IHN0ZGlvSXRlbSBvZiBzdGRpb0l0ZW1zKSB7XG5cdFx0dmFsaWRhdGVGaWxlU3RkaW8oc3RkaW9JdGVtKTtcblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVGaWxlU3RkaW8gPSAoe3R5cGUsIHZhbHVlLCBvcHRpb25OYW1lfSkgPT4ge1xuXHRpZiAoaXNSZWd1bGFyVXJsKHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiBVUkxcXGAgb3B0aW9uIG11c3QgdXNlIHRoZSBcXGBmaWxlOlxcYCBzY2hlbWUuXG5Gb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgdGhlIFxcYHBhdGhUb0ZpbGVVUkwoKVxcYCBtZXRob2Qgb2YgdGhlIFxcYHVybFxcYCBjb3JlIG1vZHVsZS5gKTtcblx0fVxuXG5cdGlmIChpc1Vua25vd25TdGRpb1N0cmluZyh0eXBlLCB2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfTogeyBmaWxlOiAnLi4uJyB9XFxgIG9wdGlvbiBtdXN0IGJlIHVzZWQgaW5zdGVhZCBvZiBcXGAke29wdGlvbk5hbWV9OiAnLi4uJ1xcYC5gKTtcblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVGaWxlT2JqZWN0TW9kZSA9IChzdGRpb0l0ZW1zLCBvYmplY3RNb2RlKSA9PiB7XG5cdGlmICghb2JqZWN0TW9kZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZpbGVTdGRpb0l0ZW0gPSBzdGRpb0l0ZW1zLmZpbmQoKHt0eXBlfSkgPT4gRklMRV9UWVBFUy5oYXModHlwZSkpO1xuXHRpZiAoZmlsZVN0ZGlvSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7ZmlsZVN0ZGlvSXRlbS5vcHRpb25OYW1lfVxcYCBvcHRpb24gY2Fubm90IHVzZSBib3RoIGZpbGVzIGFuZCB0cmFuc2Zvcm1zIGluIG9iamVjdE1vZGUuYCk7XG5cdH1cbn07XG5cbi8vIFNvbWUgYHN0ZGlvYCB2YWx1ZXMgcmVxdWlyZSBFeGVjYSB0byBjcmVhdGUgc3RyZWFtcy5cbi8vIEZvciBleGFtcGxlLCBmaWxlIHBhdGhzIGNyZWF0ZSBmaWxlIHJlYWQvd3JpdGUgc3RyZWFtcy5cbi8vIFRob3NlIHRyYW5zZm9ybWF0aW9ucyBhcmUgc3BlY2lmaWVkIGluIGBhZGRQcm9wZXJ0aWVzYCwgd2hpY2ggaXMgYm90aCBkaXJlY3Rpb24tc3BlY2lmaWMgYW5kIHR5cGUtc3BlY2lmaWMuXG5jb25zdCBnZXRGaW5hbEZpbGVEZXNjcmlwdG9ycyA9ICh7aW5pdGlhbEZpbGVEZXNjcmlwdG9ycywgYWRkUHJvcGVydGllcywgb3B0aW9ucywgaXNTeW5jfSkgPT4ge1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBbXTtcblxuXHR0cnkge1xuXHRcdGZvciAoY29uc3QgZmlsZURlc2NyaXB0b3Igb2YgaW5pdGlhbEZpbGVEZXNjcmlwdG9ycykge1xuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLnB1c2goZ2V0RmluYWxGaWxlRGVzY3JpcHRvcih7XG5cdFx0XHRcdGZpbGVEZXNjcmlwdG9yLFxuXHRcdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRcdGFkZFByb3BlcnRpZXMsXG5cdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdGlzU3luYyxcblx0XHRcdH0pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsZURlc2NyaXB0b3JzO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNsZWFudXBDdXN0b21TdHJlYW1zKGZpbGVEZXNjcmlwdG9ycyk7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IGdldEZpbmFsRmlsZURlc2NyaXB0b3IgPSAoe1xuXHRmaWxlRGVzY3JpcHRvcjoge2RpcmVjdGlvbiwgb2JqZWN0TW9kZSwgc3RkaW9JdGVtc30sXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0YWRkUHJvcGVydGllcyxcblx0b3B0aW9ucyxcblx0aXNTeW5jLFxufSkgPT4ge1xuXHRjb25zdCBmaW5hbFN0ZGlvSXRlbXMgPSBzdGRpb0l0ZW1zLm1hcChzdGRpb0l0ZW0gPT4gYWRkU3RyZWFtUHJvcGVydGllcyh7XG5cdFx0c3RkaW9JdGVtLFxuXHRcdGFkZFByb3BlcnRpZXMsXG5cdFx0ZGlyZWN0aW9uLFxuXHRcdG9wdGlvbnMsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdGlzU3luYyxcblx0fSkpO1xuXHRyZXR1cm4ge2RpcmVjdGlvbiwgb2JqZWN0TW9kZSwgc3RkaW9JdGVtczogZmluYWxTdGRpb0l0ZW1zfTtcbn07XG5cbmNvbnN0IGFkZFN0cmVhbVByb3BlcnRpZXMgPSAoe3N0ZGlvSXRlbSwgYWRkUHJvcGVydGllcywgZGlyZWN0aW9uLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnMsIGlzU3luY30pID0+IHtcblx0Y29uc3QgZHVwbGljYXRlU3RyZWFtID0gZ2V0RHVwbGljYXRlU3RyZWFtKHtcblx0XHRzdGRpb0l0ZW0sXG5cdFx0ZGlyZWN0aW9uLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRpc1N5bmMsXG5cdH0pO1xuXG5cdGlmIChkdXBsaWNhdGVTdHJlYW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7Li4uc3RkaW9JdGVtLCBzdHJlYW06IGR1cGxpY2F0ZVN0cmVhbX07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHQuLi5hZGRQcm9wZXJ0aWVzW2RpcmVjdGlvbl1bc3RkaW9JdGVtLnR5cGVdKHN0ZGlvSXRlbSwgb3B0aW9ucyksXG5cdH07XG59O1xuXG4vLyBUaGUgc3RyZWFtIGVycm9yIGhhbmRsaW5nIGlzIHBlcmZvcm1lZCBieSB0aGUgcGlwaW5nIGxvZ2ljIGFib3ZlLCB3aGljaCBjYW5ub3QgYmUgcGVyZm9ybWVkIGJlZm9yZSBzdWJwcm9jZXNzIHNwYXduaW5nLlxuLy8gSWYgdGhlIHN1YnByb2Nlc3Mgc3Bhd25pbmcgZmFpbHMgKGUuZy4gZHVlIHRvIGFuIGludmFsaWQgY29tbWFuZCksIHRoZSBzdHJlYW1zIG5lZWQgdG8gYmUgbWFudWFsbHkgZGVzdHJveWVkLlxuLy8gV2UgbmVlZCB0byBjcmVhdGUgdGhvc2Ugc3RyZWFtcyBiZWZvcmUgc3VicHJvY2VzcyBzcGF3bmluZywgaW4gY2FzZSB0aGVpciBjcmVhdGlvbiBmYWlscywgZS5nLiB3aGVuIHBhc3NpbmcgYW4gaW52YWxpZCBnZW5lcmF0b3IgYXMgYXJndW1lbnQuXG4vLyBMaWtlIHRoaXMsIGFuIGV4Y2VwdGlvbiB3b3VsZCBiZSB0aHJvd24sIHdoaWNoIHdvdWxkIHByZXZlbnQgc3Bhd25pbmcgYSBzdWJwcm9jZXNzLlxuZXhwb3J0IGNvbnN0IGNsZWFudXBDdXN0b21TdHJlYW1zID0gZmlsZURlc2NyaXB0b3JzID0+IHtcblx0Zm9yIChjb25zdCB7c3RkaW9JdGVtc30gb2YgZmlsZURlc2NyaXB0b3JzKSB7XG5cdFx0Zm9yIChjb25zdCB7c3RyZWFtfSBvZiBzdGRpb0l0ZW1zKSB7XG5cdFx0XHRpZiAoc3RyZWFtICE9PSB1bmRlZmluZWQgJiYgIWlzU3RhbmRhcmRTdHJlYW0oc3RyZWFtKSkge1xuXHRcdFx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gV2hlbiB0aGUgYHN0ZCo6IEl0ZXJhYmxlIHwgV2ViU3RyZWFtIHwgVVJMIHwgZmlsZVBhdGhgLCBgaW5wdXRgIG9yIGBpbnB1dEZpbGVgIG9wdGlvbiBpcyB1c2VkLCB3ZSBwaXBlIHRvIGBzdWJwcm9jZXNzLnN0ZCpgLlxuLy8gV2hlbiB0aGUgYHN0ZCo6IEFycmF5YCBvcHRpb24gaXMgdXNlZCwgd2UgZW11bGF0ZSBzb21lIG9mIHRoZSBuYXRpdmUgdmFsdWVzICgnaW5oZXJpdCcsIE5vZGUuanMgc3RyZWFtIGFuZCBmaWxlIGRlc2NyaXB0b3IgaW50ZWdlcikuIFRvIGRvIHNvLCB3ZSBhbHNvIG5lZWQgdG8gcGlwZSB0byBgc3VicHJvY2Vzcy5zdGQqYC5cbi8vIFRoZXJlZm9yZSB0aGUgYHN0ZCpgIG9wdGlvbnMgbXVzdCBiZSBlaXRoZXIgYHBpcGVgIG9yIGBvdmVybGFwcGVkYC4gT3RoZXIgdmFsdWVzIGRvIG5vdCBzZXQgYHN1YnByb2Nlc3Muc3RkKmAuXG5jb25zdCBmb3J3YXJkU3RkaW8gPSBzdGRpb0l0ZW1zID0+IHtcblx0aWYgKHN0ZGlvSXRlbXMubGVuZ3RoID4gMSkge1xuXHRcdHJldHVybiBzdGRpb0l0ZW1zLnNvbWUoKHt2YWx1ZX0pID0+IHZhbHVlID09PSAnb3ZlcmxhcHBlZCcpID8gJ292ZXJsYXBwZWQnIDogJ3BpcGUnO1xuXHR9XG5cblx0Y29uc3QgW3t0eXBlLCB2YWx1ZX1dID0gc3RkaW9JdGVtcztcblx0cmV0dXJuIHR5cGUgPT09ICduYXRpdmUnID8gdmFsdWUgOiAncGlwZSc7XG59O1xuIiwgImltcG9ydCB7cmVhZEZpbGVTeW5jfSBmcm9tICdub2RlOmZzJztcbmltcG9ydCB7YnVmZmVyVG9VaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7aGFuZGxlU3RkaW99IGZyb20gJy4vaGFuZGxlLmpzJztcbmltcG9ydCB7VFlQRV9UT19NRVNTQUdFfSBmcm9tICcuL3R5cGUuanMnO1xuXG4vLyBOb3JtYWxpemUgYGlucHV0YCwgYGlucHV0RmlsZWAsIGBzdGRpbmAsIGBzdGRvdXRgIGFuZCBgc3RkZXJyYCBvcHRpb25zLCBiZWZvcmUgc3Bhd25pbmcsIGluIHN5bmMgbW9kZVxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0ZGlvU3luYyA9IChvcHRpb25zLCB2ZXJib3NlSW5mbykgPT4gaGFuZGxlU3RkaW8oYWRkUHJvcGVydGllc1N5bmMsIG9wdGlvbnMsIHZlcmJvc2VJbmZvLCB0cnVlKTtcblxuY29uc3QgZm9yYmlkZGVuSWZTeW5jID0gKHt0eXBlLCBvcHRpb25OYW1lfSkgPT4ge1xuXHR0aHJvd0ludmFsaWRTeW5jVmFsdWUob3B0aW9uTmFtZSwgVFlQRV9UT19NRVNTQUdFW3R5cGVdKTtcbn07XG5cbmNvbnN0IGZvcmJpZGRlbk5hdGl2ZUlmU3luYyA9ICh7b3B0aW9uTmFtZSwgdmFsdWV9KSA9PiB7XG5cdGlmICh2YWx1ZSA9PT0gJ2lwYycgfHwgdmFsdWUgPT09ICdvdmVybGFwcGVkJykge1xuXHRcdHRocm93SW52YWxpZFN5bmNWYWx1ZShvcHRpb25OYW1lLCBgXCIke3ZhbHVlfVwiYCk7XG5cdH1cblxuXHRyZXR1cm4ge307XG59O1xuXG5jb25zdCB0aHJvd0ludmFsaWRTeW5jVmFsdWUgPSAob3B0aW9uTmFtZSwgdmFsdWUpID0+IHtcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIGNhbm5vdCBiZSAke3ZhbHVlfSB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHMuYCk7XG59O1xuXG4vLyBDcmVhdGUgc3RyZWFtcyB1c2VkIGludGVybmFsbHkgZm9yIHJlZGlyZWN0aW5nIHdoZW4gdXNpbmcgc3BlY2lmaWMgdmFsdWVzIGZvciB0aGUgYHN0ZCpgIG9wdGlvbnMsIGluIHN5bmMgbW9kZS5cbi8vIEZvciBleGFtcGxlLCBgc3RkaW46IHtmaWxlfWAgcmVhZHMgdGhlIGZpbGUgc3luY2hyb25vdXNseSwgdGhlbiBwYXNzZXMgaXQgYXMgdGhlIGBpbnB1dGAgb3B0aW9uLlxuY29uc3QgYWRkUHJvcGVydGllcyA9IHtcblx0Z2VuZXJhdG9yKCkge30sXG5cdGFzeW5jR2VuZXJhdG9yOiBmb3JiaWRkZW5JZlN5bmMsXG5cdHdlYlN0cmVhbTogZm9yYmlkZGVuSWZTeW5jLFxuXHRub2RlU3RyZWFtOiBmb3JiaWRkZW5JZlN5bmMsXG5cdHdlYlRyYW5zZm9ybTogZm9yYmlkZGVuSWZTeW5jLFxuXHRkdXBsZXg6IGZvcmJpZGRlbklmU3luYyxcblx0YXN5bmNJdGVyYWJsZTogZm9yYmlkZGVuSWZTeW5jLFxuXHRuYXRpdmU6IGZvcmJpZGRlbk5hdGl2ZUlmU3luYyxcbn07XG5cbmNvbnN0IGFkZFByb3BlcnRpZXNTeW5jID0ge1xuXHRpbnB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7Y29udGVudHM6IFtidWZmZXJUb1VpbnQ4QXJyYXkocmVhZEZpbGVTeW5jKHZhbHVlKSldfSksXG5cdFx0ZmlsZVBhdGg6ICh7dmFsdWU6IHtmaWxlfX0pID0+ICh7Y29udGVudHM6IFtidWZmZXJUb1VpbnQ4QXJyYXkocmVhZEZpbGVTeW5jKGZpbGUpKV19KSxcblx0XHRmaWxlTnVtYmVyOiBmb3JiaWRkZW5JZlN5bmMsXG5cdFx0aXRlcmFibGU6ICh7dmFsdWV9KSA9PiAoe2NvbnRlbnRzOiBbLi4udmFsdWVdfSksXG5cdFx0c3RyaW5nOiAoe3ZhbHVlfSkgPT4gKHtjb250ZW50czogW3ZhbHVlXX0pLFxuXHRcdHVpbnQ4QXJyYXk6ICh7dmFsdWV9KSA9PiAoe2NvbnRlbnRzOiBbdmFsdWVdfSksXG5cdH0sXG5cdG91dHB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7cGF0aDogdmFsdWV9KSxcblx0XHRmaWxlUGF0aDogKHt2YWx1ZToge2ZpbGUsIGFwcGVuZH19KSA9PiAoe3BhdGg6IGZpbGUsIGFwcGVuZH0pLFxuXHRcdGZpbGVOdW1iZXI6ICh7dmFsdWV9KSA9PiAoe3BhdGg6IHZhbHVlfSksXG5cdFx0aXRlcmFibGU6IGZvcmJpZGRlbklmU3luYyxcblx0XHRzdHJpbmc6IGZvcmJpZGRlbklmU3luYyxcblx0XHR1aW50OEFycmF5OiBmb3JiaWRkZW5JZlN5bmMsXG5cdH0sXG59O1xuIiwgImltcG9ydCBzdHJpcEZpbmFsTmV3bGluZUZ1bmN0aW9uIGZyb20gJ3N0cmlwLWZpbmFsLW5ld2xpbmUnO1xuXG4vLyBBcHBseSBgc3RyaXBGaW5hbE5ld2xpbmVgIG9wdGlvbiwgd2hpY2ggYXBwbGllcyB0byBgcmVzdWx0LnN0ZG91dHxzdGRlcnJ8YWxsfHN0ZGlvWypdYC5cbi8vIElmIHRoZSBgbGluZXNgIG9wdGlvbiBpcyB1c2VkLCBpdCBpcyBhcHBsaWVkIG9uIGVhY2ggbGluZSwgYnV0IHVzaW5nIGEgZGlmZmVyZW50IGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IHN0cmlwTmV3bGluZSA9ICh2YWx1ZSwge3N0cmlwRmluYWxOZXdsaW5lfSwgZmROdW1iZXIpID0+IGdldFN0cmlwRmluYWxOZXdsaW5lKHN0cmlwRmluYWxOZXdsaW5lLCBmZE51bWJlcikgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSlcblx0PyBzdHJpcEZpbmFsTmV3bGluZUZ1bmN0aW9uKHZhbHVlKVxuXHQ6IHZhbHVlO1xuXG4vLyBSZXRyaWV2ZSBgc3RyaXBGaW5hbE5ld2xpbmVgIG9wdGlvbiB2YWx1ZSwgaW5jbHVkaW5nIHdpdGggYHN1YnByb2Nlc3MuYWxsYFxuZXhwb3J0IGNvbnN0IGdldFN0cmlwRmluYWxOZXdsaW5lID0gKHN0cmlwRmluYWxOZXdsaW5lLCBmZE51bWJlcikgPT4gZmROdW1iZXIgPT09ICdhbGwnXG5cdD8gc3RyaXBGaW5hbE5ld2xpbmVbMV0gfHwgc3RyaXBGaW5hbE5ld2xpbmVbMl1cblx0OiBzdHJpcEZpbmFsTmV3bGluZVtmZE51bWJlcl07XG4iLCAiLy8gU3BsaXQgY2h1bmtzIGxpbmUtd2lzZSBmb3IgZ2VuZXJhdG9ycyBwYXNzZWQgdG8gdGhlIGBzdGQqYCBvcHRpb25zXG5leHBvcnQgY29uc3QgZ2V0U3BsaXRMaW5lc0dlbmVyYXRvciA9IChiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsIHNraXBwZWQsIHN0YXRlKSA9PiBiaW5hcnkgfHwgc2tpcHBlZFxuXHQ/IHVuZGVmaW5lZFxuXHQ6IGluaXRpYWxpemVTcGxpdExpbmVzKHByZXNlcnZlTmV3bGluZXMsIHN0YXRlKTtcblxuLy8gU2FtZSBidXQgZm9yIHN5bmNocm9ub3VzIG1ldGhvZHNcbmV4cG9ydCBjb25zdCBzcGxpdExpbmVzU3luYyA9IChjaHVuaywgcHJlc2VydmVOZXdsaW5lcywgb2JqZWN0TW9kZSkgPT4gb2JqZWN0TW9kZVxuXHQ/IGNodW5rLmZsYXRNYXAoaXRlbSA9PiBzcGxpdExpbmVzSXRlbVN5bmMoaXRlbSwgcHJlc2VydmVOZXdsaW5lcykpXG5cdDogc3BsaXRMaW5lc0l0ZW1TeW5jKGNodW5rLCBwcmVzZXJ2ZU5ld2xpbmVzKTtcblxuY29uc3Qgc3BsaXRMaW5lc0l0ZW1TeW5jID0gKGNodW5rLCBwcmVzZXJ2ZU5ld2xpbmVzKSA9PiB7XG5cdGNvbnN0IHt0cmFuc2Zvcm0sIGZpbmFsfSA9IGluaXRpYWxpemVTcGxpdExpbmVzKHByZXNlcnZlTmV3bGluZXMsIHt9KTtcblx0cmV0dXJuIFsuLi50cmFuc2Zvcm0oY2h1bmspLCAuLi5maW5hbCgpXTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVTcGxpdExpbmVzID0gKHByZXNlcnZlTmV3bGluZXMsIHN0YXRlKSA9PiB7XG5cdHN0YXRlLnByZXZpb3VzQ2h1bmtzID0gJyc7XG5cdHJldHVybiB7XG5cdFx0dHJhbnNmb3JtOiBzcGxpdEdlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgc3RhdGUsIHByZXNlcnZlTmV3bGluZXMpLFxuXHRcdGZpbmFsOiBsaW5lc0ZpbmFsLmJpbmQodW5kZWZpbmVkLCBzdGF0ZSksXG5cdH07XG59O1xuXG4vLyBUaGlzIGltcGVyYXRpdmUgbG9naWMgaXMgbXVjaCBmYXN0ZXIgdGhhbiB1c2luZyBgU3RyaW5nLnNwbGl0KClgIGFuZCB1c2VzIHZlcnkgbG93IG1lbW9yeS5cbmNvbnN0IHNwbGl0R2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoc3RhdGUsIHByZXNlcnZlTmV3bGluZXMsIGNodW5rKSB7XG5cdGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnKSB7XG5cdFx0eWllbGQgY2h1bms7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHtwcmV2aW91c0NodW5rc30gPSBzdGF0ZTtcblx0bGV0IHN0YXJ0ID0gLTE7XG5cblx0Zm9yIChsZXQgZW5kID0gMDsgZW5kIDwgY2h1bmsubGVuZ3RoOyBlbmQgKz0gMSkge1xuXHRcdGlmIChjaHVua1tlbmRdID09PSAnXFxuJykge1xuXHRcdFx0Y29uc3QgbmV3bGluZUxlbmd0aCA9IGdldE5ld2xpbmVMZW5ndGgoY2h1bmssIGVuZCwgcHJlc2VydmVOZXdsaW5lcywgc3RhdGUpO1xuXHRcdFx0bGV0IGxpbmUgPSBjaHVuay5zbGljZShzdGFydCArIDEsIGVuZCArIDEgLSBuZXdsaW5lTGVuZ3RoKTtcblxuXHRcdFx0aWYgKHByZXZpb3VzQ2h1bmtzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluZSA9IGNvbmNhdFN0cmluZyhwcmV2aW91c0NodW5rcywgbGluZSk7XG5cdFx0XHRcdHByZXZpb3VzQ2h1bmtzID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdHlpZWxkIGxpbmU7XG5cdFx0XHRzdGFydCA9IGVuZDtcblx0XHR9XG5cdH1cblxuXHRpZiAoc3RhcnQgIT09IGNodW5rLmxlbmd0aCAtIDEpIHtcblx0XHRwcmV2aW91c0NodW5rcyA9IGNvbmNhdFN0cmluZyhwcmV2aW91c0NodW5rcywgY2h1bmsuc2xpY2Uoc3RhcnQgKyAxKSk7XG5cdH1cblxuXHRzdGF0ZS5wcmV2aW91c0NodW5rcyA9IHByZXZpb3VzQ2h1bmtzO1xufTtcblxuY29uc3QgZ2V0TmV3bGluZUxlbmd0aCA9IChjaHVuaywgZW5kLCBwcmVzZXJ2ZU5ld2xpbmVzLCBzdGF0ZSkgPT4ge1xuXHRpZiAocHJlc2VydmVOZXdsaW5lcykge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RhdGUuaXNXaW5kb3dzTmV3bGluZSA9IGVuZCAhPT0gMCAmJiBjaHVua1tlbmQgLSAxXSA9PT0gJ1xccic7XG5cdHJldHVybiBzdGF0ZS5pc1dpbmRvd3NOZXdsaW5lID8gMiA6IDE7XG59O1xuXG5jb25zdCBsaW5lc0ZpbmFsID0gZnVuY3Rpb24gKiAoe3ByZXZpb3VzQ2h1bmtzfSkge1xuXHRpZiAocHJldmlvdXNDaHVua3MubGVuZ3RoID4gMCkge1xuXHRcdHlpZWxkIHByZXZpb3VzQ2h1bmtzO1xuXHR9XG59O1xuXG4vLyBVbmxlc3MgYHByZXNlcnZlTmV3bGluZXM6IHRydWVgIGlzIHVzZWQsIHdlIHN0cmlwIHRoZSBuZXdsaW5lIG9mIGVhY2ggbGluZS5cbi8vIFRoaXMgcmUtYWRkcyB0aGVtIGFmdGVyIHRoZSB1c2VyIGB0cmFuc2Zvcm1gIGNvZGUgaGFzIHJ1bi5cbmV4cG9ydCBjb25zdCBnZXRBcHBlbmROZXdsaW5lR2VuZXJhdG9yID0gKHtiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsIHJlYWRhYmxlT2JqZWN0TW9kZSwgc3RhdGV9KSA9PiBiaW5hcnkgfHwgcHJlc2VydmVOZXdsaW5lcyB8fCByZWFkYWJsZU9iamVjdE1vZGVcblx0PyB1bmRlZmluZWRcblx0OiB7dHJhbnNmb3JtOiBhcHBlbmROZXdsaW5lR2VuZXJhdG9yLmJpbmQodW5kZWZpbmVkLCBzdGF0ZSl9O1xuXG5jb25zdCBhcHBlbmROZXdsaW5lR2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoe2lzV2luZG93c05ld2xpbmUgPSBmYWxzZX0sIGNodW5rKSB7XG5cdGNvbnN0IHt1bml4TmV3bGluZSwgd2luZG93c05ld2xpbmUsIExGLCBjb25jYXRCeXRlc30gPSB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gbGluZXNTdHJpbmdJbmZvIDogbGluZXNVaW50OEFycmF5SW5mbztcblxuXHRpZiAoY2h1bmsuYXQoLTEpID09PSBMRikge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG5ld2xpbmUgPSBpc1dpbmRvd3NOZXdsaW5lID8gd2luZG93c05ld2xpbmUgOiB1bml4TmV3bGluZTtcblx0eWllbGQgY29uY2F0Qnl0ZXMoY2h1bmssIG5ld2xpbmUpO1xufTtcblxuY29uc3QgY29uY2F0U3RyaW5nID0gKGZpcnN0Q2h1bmssIHNlY29uZENodW5rKSA9PiBgJHtmaXJzdENodW5rfSR7c2Vjb25kQ2h1bmt9YDtcblxuY29uc3QgbGluZXNTdHJpbmdJbmZvID0ge1xuXHR3aW5kb3dzTmV3bGluZTogJ1xcclxcbicsXG5cdHVuaXhOZXdsaW5lOiAnXFxuJyxcblx0TEY6ICdcXG4nLFxuXHRjb25jYXRCeXRlczogY29uY2F0U3RyaW5nLFxufTtcblxuY29uc3QgY29uY2F0VWludDhBcnJheSA9IChmaXJzdENodW5rLCBzZWNvbmRDaHVuaykgPT4ge1xuXHRjb25zdCBjaHVuayA9IG5ldyBVaW50OEFycmF5KGZpcnN0Q2h1bmsubGVuZ3RoICsgc2Vjb25kQ2h1bmsubGVuZ3RoKTtcblx0Y2h1bmsuc2V0KGZpcnN0Q2h1bmssIDApO1xuXHRjaHVuay5zZXQoc2Vjb25kQ2h1bmssIGZpcnN0Q2h1bmsubGVuZ3RoKTtcblx0cmV0dXJuIGNodW5rO1xufTtcblxuY29uc3QgbGluZXNVaW50OEFycmF5SW5mbyA9IHtcblx0d2luZG93c05ld2xpbmU6IG5ldyBVaW50OEFycmF5KFsweDBELCAweDBBXSksXG5cdHVuaXhOZXdsaW5lOiBuZXcgVWludDhBcnJheShbMHgwQV0pLFxuXHRMRjogMHgwQSxcblx0Y29uY2F0Qnl0ZXM6IGNvbmNhdFVpbnQ4QXJyYXksXG59O1xuIiwgImltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5pbXBvcnQge2lzVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8vIFZhbGlkYXRlIHRoZSB0eXBlIG9mIGNodW5rIGFyZ3VtZW50IHBhc3NlZCB0byB0cmFuc2Zvcm0gZ2VuZXJhdG9yc1xuZXhwb3J0IGNvbnN0IGdldFZhbGlkYXRlVHJhbnNmb3JtSW5wdXQgPSAod3JpdGFibGVPYmplY3RNb2RlLCBvcHRpb25OYW1lKSA9PiB3cml0YWJsZU9iamVjdE1vZGVcblx0PyB1bmRlZmluZWRcblx0OiB2YWxpZGF0ZVN0cmluZ1RyYW5zZm9ybUlucHV0LmJpbmQodW5kZWZpbmVkLCBvcHRpb25OYW1lKTtcblxuY29uc3QgdmFsaWRhdGVTdHJpbmdUcmFuc2Zvcm1JbnB1dCA9IGZ1bmN0aW9uICogKG9wdGlvbk5hbWUsIGNodW5rKSB7XG5cdGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmICFpc1VpbnQ4QXJyYXkoY2h1bmspICYmICFCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uJ3MgdHJhbnNmb3JtIG11c3QgdXNlIFwib2JqZWN0TW9kZTogdHJ1ZVwiIHRvIHJlY2VpdmUgYXMgaW5wdXQ6ICR7dHlwZW9mIGNodW5rfS5gKTtcblx0fVxuXG5cdHlpZWxkIGNodW5rO1xufTtcblxuLy8gVmFsaWRhdGUgdGhlIHR5cGUgb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRyYW5zZm9ybSBnZW5lcmF0b3JzXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdGVUcmFuc2Zvcm1SZXR1cm4gPSAocmVhZGFibGVPYmplY3RNb2RlLCBvcHRpb25OYW1lKSA9PiByZWFkYWJsZU9iamVjdE1vZGVcblx0PyB2YWxpZGF0ZU9iamVjdFRyYW5zZm9ybVJldHVybi5iaW5kKHVuZGVmaW5lZCwgb3B0aW9uTmFtZSlcblx0OiB2YWxpZGF0ZVN0cmluZ1RyYW5zZm9ybVJldHVybi5iaW5kKHVuZGVmaW5lZCwgb3B0aW9uTmFtZSk7XG5cbmNvbnN0IHZhbGlkYXRlT2JqZWN0VHJhbnNmb3JtUmV0dXJuID0gZnVuY3Rpb24gKiAob3B0aW9uTmFtZSwgY2h1bmspIHtcblx0dmFsaWRhdGVFbXB0eVJldHVybihvcHRpb25OYW1lLCBjaHVuayk7XG5cdHlpZWxkIGNodW5rO1xufTtcblxuY29uc3QgdmFsaWRhdGVTdHJpbmdUcmFuc2Zvcm1SZXR1cm4gPSBmdW5jdGlvbiAqIChvcHRpb25OYW1lLCBjaHVuaykge1xuXHR2YWxpZGF0ZUVtcHR5UmV0dXJuKG9wdGlvbk5hbWUsIGNodW5rKTtcblxuXHRpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiAhaXNVaW50OEFycmF5KGNodW5rKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbidzIGZ1bmN0aW9uIG11c3QgeWllbGQgYSBzdHJpbmcgb3IgYW4gVWludDhBcnJheSwgbm90ICR7dHlwZW9mIGNodW5rfS5gKTtcblx0fVxuXG5cdHlpZWxkIGNodW5rO1xufTtcblxuY29uc3QgdmFsaWRhdGVFbXB0eVJldHVybiA9IChvcHRpb25OYW1lLCBjaHVuaykgPT4ge1xuXHRpZiAoY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbidzIGZ1bmN0aW9uIG11c3Qgbm90IGNhbGwgXFxgeWllbGQgJHtjaHVua31cXGAuXG5JbnN0ZWFkLCBcXGB5aWVsZFxcYCBzaG91bGQgZWl0aGVyIGJlIGNhbGxlZCB3aXRoIGEgdmFsdWUsIG9yIG5vdCBiZSBjYWxsZWQgYXQgYWxsLiBGb3IgZXhhbXBsZTpcbiAgaWYgKGNvbmRpdGlvbikgeyB5aWVsZCB2YWx1ZTsgfWApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5pbXBvcnQge1N0cmluZ0RlY29kZXJ9IGZyb20gJ25vZGU6c3RyaW5nX2RlY29kZXInO1xuaW1wb3J0IHtpc1VpbnQ4QXJyYXksIGJ1ZmZlclRvVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8qXG5XaGVuIHVzaW5nIGJpbmFyeSBlbmNvZGluZ3MsIGFkZCBhbiBpbnRlcm5hbCBnZW5lcmF0b3IgdGhhdCBjb252ZXJ0cyBjaHVua3MgZnJvbSBgQnVmZmVyYCB0byBgc3RyaW5nYCBvciBgVWludDhBcnJheWAuXG5DaHVua3MgbWlnaHQgYmUgQnVmZmVyLCBVaW50OEFycmF5IG9yIHN0cmluZ3Mgc2luY2U6XG4tIGBzdWJwcm9jZXNzLnN0ZG91dHxzdGRlcnJgIGVtaXRzIEJ1ZmZlcnNcbi0gYHN1YnByb2Nlc3Muc3RkaW4ud3JpdGUoKWAgYWNjZXB0cyBCdWZmZXIsIFVpbnQ4QXJyYXkgb3Igc3RyaW5nXG4tIFByZXZpb3VzIGdlbmVyYXRvcnMgbWlnaHQgcmV0dXJuIFVpbnQ4QXJyYXkgb3Igc3RyaW5nXG5cbkhvd2V2ZXIsIHRob3NlIGFyZSBjb252ZXJ0ZWQgdG8gQnVmZmVyOlxuLSBvbiB3cml0ZXM6IGBEdXBsZXgud3JpdGFibGVgIGBkZWNvZGVTdHJpbmdzOiB0cnVlYCBkZWZhdWx0IG9wdGlvblxuLSBvbiByZWFkczogYER1cGxleC5yZWFkYWJsZWAgYHJlYWRhYmxlRW5jb2Rpbmc6IG51bGxgIGRlZmF1bHQgb3B0aW9uXG4qL1xuZXhwb3J0IGNvbnN0IGdldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yID0gKGJpbmFyeSwgZW5jb2RpbmcsIHNraXBwZWQpID0+IHtcblx0aWYgKHNraXBwZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoYmluYXJ5KSB7XG5cdFx0cmV0dXJuIHt0cmFuc2Zvcm06IGVuY29kaW5nVWludDhBcnJheUdlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgbmV3IFRleHRFbmNvZGVyKCkpfTtcblx0fVxuXG5cdGNvbnN0IHN0cmluZ0RlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihlbmNvZGluZyk7XG5cdHJldHVybiB7XG5cdFx0dHJhbnNmb3JtOiBlbmNvZGluZ1N0cmluZ0dlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgc3RyaW5nRGVjb2RlciksXG5cdFx0ZmluYWw6IGVuY29kaW5nU3RyaW5nRmluYWwuYmluZCh1bmRlZmluZWQsIHN0cmluZ0RlY29kZXIpLFxuXHR9O1xufTtcblxuY29uc3QgZW5jb2RpbmdVaW50OEFycmF5R2VuZXJhdG9yID0gZnVuY3Rpb24gKiAodGV4dEVuY29kZXIsIGNodW5rKSB7XG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XG5cdFx0eWllbGQgYnVmZmVyVG9VaW50OEFycmF5KGNodW5rKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG5cdFx0eWllbGQgdGV4dEVuY29kZXIuZW5jb2RlKGNodW5rKTtcblx0fSBlbHNlIHtcblx0XHR5aWVsZCBjaHVuaztcblx0fVxufTtcblxuY29uc3QgZW5jb2RpbmdTdHJpbmdHZW5lcmF0b3IgPSBmdW5jdGlvbiAqIChzdHJpbmdEZWNvZGVyLCBjaHVuaykge1xuXHR5aWVsZCBpc1VpbnQ4QXJyYXkoY2h1bmspID8gc3RyaW5nRGVjb2Rlci53cml0ZShjaHVuaykgOiBjaHVuaztcbn07XG5cbmNvbnN0IGVuY29kaW5nU3RyaW5nRmluYWwgPSBmdW5jdGlvbiAqIChzdHJpbmdEZWNvZGVyKSB7XG5cdGNvbnN0IGxhc3RDaHVuayA9IHN0cmluZ0RlY29kZXIuZW5kKCk7XG5cdGlmIChsYXN0Q2h1bmsgIT09ICcnKSB7XG5cdFx0eWllbGQgbGFzdENodW5rO1xuXHR9XG59O1xuIiwgImltcG9ydCB7Y2FsbGJhY2tpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5cbi8vIEFwcGxpZXMgYSBzZXJpZXMgb2YgZ2VuZXJhdG9yIGZ1bmN0aW9ucyBhc3luY2hyb25vdXNseVxuZXhwb3J0IGNvbnN0IHB1c2hDaHVua3MgPSBjYWxsYmFja2lmeShhc3luYyAoZ2V0Q2h1bmtzLCBzdGF0ZSwgZ2V0Q2h1bmtzQXJndW1lbnRzLCB0cmFuc2Zvcm1TdHJlYW0pID0+IHtcblx0c3RhdGUuY3VycmVudEl0ZXJhYmxlID0gZ2V0Q2h1bmtzKC4uLmdldENodW5rc0FyZ3VtZW50cyk7XG5cblx0dHJ5IHtcblx0XHRmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHN0YXRlLmN1cnJlbnRJdGVyYWJsZSkge1xuXHRcdFx0dHJhbnNmb3JtU3RyZWFtLnB1c2goY2h1bmspO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRkZWxldGUgc3RhdGUuY3VycmVudEl0ZXJhYmxlO1xuXHR9XG59KTtcblxuLy8gRm9yIGVhY2ggbmV3IGNodW5rLCBhcHBseSBlYWNoIGB0cmFuc2Zvcm0oKWAgbWV0aG9kXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2h1bmsgPSBhc3luYyBmdW5jdGlvbiAqIChjaHVuaywgZ2VuZXJhdG9ycywgaW5kZXgpIHtcblx0aWYgKGluZGV4ID09PSBnZW5lcmF0b3JzLmxlbmd0aCkge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0cmFuc2Zvcm0gPSBpZGVudGl0eUdlbmVyYXRvcn0gPSBnZW5lcmF0b3JzW2luZGV4XTtcblx0Zm9yIGF3YWl0IChjb25zdCB0cmFuc2Zvcm1lZENodW5rIG9mIHRyYW5zZm9ybShjaHVuaykpIHtcblx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rKHRyYW5zZm9ybWVkQ2h1bmssIGdlbmVyYXRvcnMsIGluZGV4ICsgMSk7XG5cdH1cbn07XG5cbi8vIEF0IHRoZSBlbmQsIGFwcGx5IGVhY2ggYGZpbmFsKClgIG1ldGhvZCwgZm9sbG93ZWQgYnkgdGhlIGB0cmFuc2Zvcm0oKWAgbWV0aG9kIG9mIHRoZSBuZXh0IHRyYW5zZm9ybXNcbmV4cG9ydCBjb25zdCBmaW5hbENodW5rcyA9IGFzeW5jIGZ1bmN0aW9uICogKGdlbmVyYXRvcnMpIHtcblx0Zm9yIChjb25zdCBbaW5kZXgsIHtmaW5hbH1dIG9mIE9iamVjdC5lbnRyaWVzKGdlbmVyYXRvcnMpKSB7XG5cdFx0eWllbGQgKiBnZW5lcmF0b3JGaW5hbENodW5rcyhmaW5hbCwgTnVtYmVyKGluZGV4KSwgZ2VuZXJhdG9ycyk7XG5cdH1cbn07XG5cbmNvbnN0IGdlbmVyYXRvckZpbmFsQ2h1bmtzID0gYXN5bmMgZnVuY3Rpb24gKiAoZmluYWwsIGluZGV4LCBnZW5lcmF0b3JzKSB7XG5cdGlmIChmaW5hbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIGF3YWl0IChjb25zdCBmaW5hbENodW5rIG9mIGZpbmFsKCkpIHtcblx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rKGZpbmFsQ2h1bmssIGdlbmVyYXRvcnMsIGluZGV4ICsgMSk7XG5cdH1cbn07XG5cbi8vIENhbmNlbCBhbnkgb25nb2luZyBhc3luYyBnZW5lcmF0b3Igd2hlbiB0aGUgVHJhbnNmb3JtIGlzIGRlc3Ryb3llZCwgZS5nLiB3aGVuIHRoZSBzdWJwcm9jZXNzIGVycm9yc1xuZXhwb3J0IGNvbnN0IGRlc3Ryb3lUcmFuc2Zvcm0gPSBjYWxsYmFja2lmeShhc3luYyAoe2N1cnJlbnRJdGVyYWJsZX0sIGVycm9yKSA9PiB7XG5cdGlmIChjdXJyZW50SXRlcmFibGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGF3YWl0IChlcnJvciA/IGN1cnJlbnRJdGVyYWJsZS50aHJvdyhlcnJvcikgOiBjdXJyZW50SXRlcmFibGUucmV0dXJuKCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChlcnJvcikge1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59KTtcblxuY29uc3QgaWRlbnRpdHlHZW5lcmF0b3IgPSBmdW5jdGlvbiAqIChjaHVuaykge1xuXHR5aWVsZCBjaHVuaztcbn07XG4iLCAiLy8gRHVwbGljYXRlIHRoZSBjb2RlIGZyb20gYHJ1bi1hc3luYy5qc2AgYnV0IGFzIHN5bmNocm9ub3VzIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHB1c2hDaHVua3NTeW5jID0gKGdldENodW5rc1N5bmMsIGdldENodW5rc0FyZ3VtZW50cywgdHJhbnNmb3JtU3RyZWFtLCBkb25lKSA9PiB7XG5cdHRyeSB7XG5cdFx0Zm9yIChjb25zdCBjaHVuayBvZiBnZXRDaHVua3NTeW5jKC4uLmdldENodW5rc0FyZ3VtZW50cykpIHtcblx0XHRcdHRyYW5zZm9ybVN0cmVhbS5wdXNoKGNodW5rKTtcblx0XHR9XG5cblx0XHRkb25lKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZG9uZShlcnJvcik7XG5cdH1cbn07XG5cbi8vIFJ1biBzeW5jaHJvbm91cyBnZW5lcmF0b3JzIHdpdGggYGV4ZWNhU3luYygpYFxuZXhwb3J0IGNvbnN0IHJ1blRyYW5zZm9ybVN5bmMgPSAoZ2VuZXJhdG9ycywgY2h1bmtzKSA9PiBbXG5cdC4uLmNodW5rcy5mbGF0TWFwKGNodW5rID0+IFsuLi50cmFuc2Zvcm1DaHVua1N5bmMoY2h1bmssIGdlbmVyYXRvcnMsIDApXSksXG5cdC4uLmZpbmFsQ2h1bmtzU3luYyhnZW5lcmF0b3JzKSxcbl07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1DaHVua1N5bmMgPSBmdW5jdGlvbiAqIChjaHVuaywgZ2VuZXJhdG9ycywgaW5kZXgpIHtcblx0aWYgKGluZGV4ID09PSBnZW5lcmF0b3JzLmxlbmd0aCkge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0cmFuc2Zvcm0gPSBpZGVudGl0eUdlbmVyYXRvcn0gPSBnZW5lcmF0b3JzW2luZGV4XTtcblx0Zm9yIChjb25zdCB0cmFuc2Zvcm1lZENodW5rIG9mIHRyYW5zZm9ybShjaHVuaykpIHtcblx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rU3luYyh0cmFuc2Zvcm1lZENodW5rLCBnZW5lcmF0b3JzLCBpbmRleCArIDEpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZmluYWxDaHVua3NTeW5jID0gZnVuY3Rpb24gKiAoZ2VuZXJhdG9ycykge1xuXHRmb3IgKGNvbnN0IFtpbmRleCwge2ZpbmFsfV0gb2YgT2JqZWN0LmVudHJpZXMoZ2VuZXJhdG9ycykpIHtcblx0XHR5aWVsZCAqIGdlbmVyYXRvckZpbmFsQ2h1bmtzU3luYyhmaW5hbCwgTnVtYmVyKGluZGV4KSwgZ2VuZXJhdG9ycyk7XG5cdH1cbn07XG5cbmNvbnN0IGdlbmVyYXRvckZpbmFsQ2h1bmtzU3luYyA9IGZ1bmN0aW9uICogKGZpbmFsLCBpbmRleCwgZ2VuZXJhdG9ycykge1xuXHRpZiAoZmluYWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZmluYWxDaHVuayBvZiBmaW5hbCgpKSB7XG5cdFx0eWllbGQgKiB0cmFuc2Zvcm1DaHVua1N5bmMoZmluYWxDaHVuaywgZ2VuZXJhdG9ycywgaW5kZXggKyAxKTtcblx0fVxufTtcblxuY29uc3QgaWRlbnRpdHlHZW5lcmF0b3IgPSBmdW5jdGlvbiAqIChjaHVuaykge1xuXHR5aWVsZCBjaHVuaztcbn07XG4iLCAiaW1wb3J0IHtUcmFuc2Zvcm0sIGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrfSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2lzQXN5bmNHZW5lcmF0b3J9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuaW1wb3J0IHtnZXRTcGxpdExpbmVzR2VuZXJhdG9yLCBnZXRBcHBlbmROZXdsaW5lR2VuZXJhdG9yfSBmcm9tICcuL3NwbGl0LmpzJztcbmltcG9ydCB7Z2V0VmFsaWRhdGVUcmFuc2Zvcm1JbnB1dCwgZ2V0VmFsaWRhdGVUcmFuc2Zvcm1SZXR1cm59IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuaW1wb3J0IHtnZXRFbmNvZGluZ1RyYW5zZm9ybUdlbmVyYXRvcn0gZnJvbSAnLi9lbmNvZGluZy10cmFuc2Zvcm0uanMnO1xuaW1wb3J0IHtcblx0cHVzaENodW5rcyxcblx0dHJhbnNmb3JtQ2h1bmssXG5cdGZpbmFsQ2h1bmtzLFxuXHRkZXN0cm95VHJhbnNmb3JtLFxufSBmcm9tICcuL3J1bi1hc3luYy5qcyc7XG5pbXBvcnQge1xuXHRwdXNoQ2h1bmtzU3luYyxcblx0dHJhbnNmb3JtQ2h1bmtTeW5jLFxuXHRmaW5hbENodW5rc1N5bmMsXG5cdHJ1blRyYW5zZm9ybVN5bmMsXG59IGZyb20gJy4vcnVuLXN5bmMuanMnO1xuXG4vKlxuR2VuZXJhdG9ycyBjYW4gYmUgdXNlZCB0byB0cmFuc2Zvcm0vZmlsdGVyIHN0YW5kYXJkIHN0cmVhbXMuXG5cbkdlbmVyYXRvcnMgaGF2ZSBhIHNpbXBsZSBzeW50YXgsIHlldCBhbGxvd3MgYWxsIG9mIHRoZSBmb2xsb3dpbmc6XG4tIFNoYXJpbmcgYHN0YXRlYCBiZXR3ZWVuIGNodW5rc1xuLSBGbHVzaGluZyBsb2dpYywgYnkgdXNpbmcgYSBgZmluYWxgIGZ1bmN0aW9uXG4tIEFzeW5jaHJvbm91cyBsb2dpY1xuLSBFbWl0dGluZyBtdWx0aXBsZSBjaHVua3MgZnJvbSBhIHNpbmdsZSBzb3VyY2UgY2h1bmssIGV2ZW4gaWYgc3BhY2VkIGluIHRpbWUsIGJ5IHVzaW5nIG11bHRpcGxlIGB5aWVsZGBcbi0gRmlsdGVyaW5nLCBieSB1c2luZyBubyBgeWllbGRgXG5cblRoZXJlZm9yZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBhbGxvdyBOb2RlLmpzIG9yIHdlYiB0cmFuc2Zvcm0gc3RyZWFtcy5cblxuVGhlIGBoaWdoV2F0ZXJNYXJrYCBpcyBrZXB0IGFzIHRoZSBkZWZhdWx0IHZhbHVlLCBzaW5jZSB0aGlzIGlzIHdoYXQgYHN1YnByb2Nlc3Muc3RkKmAgdXNlcy5cblxuQ2h1bmtzIGFyZSBjdXJyZW50bHkgcHJvY2Vzc2VkIHNlcmlhbGx5LiBXZSBjb3VsZCBhZGQgYSBgY29uY3VycmVuY3lgIG9wdGlvbiB0byBwYXJhbGxlbGl6ZSBpbiB0aGUgZnV0dXJlLlxuXG5UcmFuc2Zvcm0gYW4gYXJyYXkgb2YgZ2VuZXJhdG9yIGZ1bmN0aW9ucyBpbnRvIGEgYFRyYW5zZm9ybWAgc3RyZWFtLlxuYER1cGxleC5mcm9tKGdlbmVyYXRvcilgIGNhbm5vdCBiZSB1c2VkIGJlY2F1c2UgaXQgZG9lcyBub3QgYWxsb3cgc2V0dGluZyB0aGUgYG9iamVjdE1vZGVgIGFuZCBgaGlnaFdhdGVyTWFya2AuXG4qL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRvclRvU3RyZWFtID0gKHtcblx0dmFsdWUsXG5cdHZhbHVlOiB7dHJhbnNmb3JtLCBmaW5hbCwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHRvcHRpb25OYW1lLFxufSwge2VuY29kaW5nfSkgPT4ge1xuXHRjb25zdCBzdGF0ZSA9IHt9O1xuXHRjb25zdCBnZW5lcmF0b3JzID0gYWRkSW50ZXJuYWxHZW5lcmF0b3JzKHZhbHVlLCBlbmNvZGluZywgb3B0aW9uTmFtZSk7XG5cblx0Y29uc3QgdHJhbnNmb3JtQXN5bmMgPSBpc0FzeW5jR2VuZXJhdG9yKHRyYW5zZm9ybSk7XG5cdGNvbnN0IGZpbmFsQXN5bmMgPSBpc0FzeW5jR2VuZXJhdG9yKGZpbmFsKTtcblx0Y29uc3QgdHJhbnNmb3JtTWV0aG9kID0gdHJhbnNmb3JtQXN5bmNcblx0XHQ/IHB1c2hDaHVua3MuYmluZCh1bmRlZmluZWQsIHRyYW5zZm9ybUNodW5rLCBzdGF0ZSlcblx0XHQ6IHB1c2hDaHVua3NTeW5jLmJpbmQodW5kZWZpbmVkLCB0cmFuc2Zvcm1DaHVua1N5bmMpO1xuXHRjb25zdCBmaW5hbE1ldGhvZCA9IHRyYW5zZm9ybUFzeW5jIHx8IGZpbmFsQXN5bmNcblx0XHQ/IHB1c2hDaHVua3MuYmluZCh1bmRlZmluZWQsIGZpbmFsQ2h1bmtzLCBzdGF0ZSlcblx0XHQ6IHB1c2hDaHVua3NTeW5jLmJpbmQodW5kZWZpbmVkLCBmaW5hbENodW5rc1N5bmMpO1xuXHRjb25zdCBkZXN0cm95TWV0aG9kID0gdHJhbnNmb3JtQXN5bmMgfHwgZmluYWxBc3luY1xuXHRcdD8gZGVzdHJveVRyYW5zZm9ybS5iaW5kKHVuZGVmaW5lZCwgc3RhdGUpXG5cdFx0OiB1bmRlZmluZWQ7XG5cblx0Y29uc3Qgc3RyZWFtID0gbmV3IFRyYW5zZm9ybSh7XG5cdFx0d3JpdGFibGVPYmplY3RNb2RlLFxuXHRcdHdyaXRhYmxlSGlnaFdhdGVyTWFyazogZ2V0RGVmYXVsdEhpZ2hXYXRlck1hcmsod3JpdGFibGVPYmplY3RNb2RlKSxcblx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0cmVhZGFibGVIaWdoV2F0ZXJNYXJrOiBnZXREZWZhdWx0SGlnaFdhdGVyTWFyayhyZWFkYWJsZU9iamVjdE1vZGUpLFxuXHRcdHRyYW5zZm9ybShjaHVuaywgZW5jb2RpbmcsIGRvbmUpIHtcblx0XHRcdHRyYW5zZm9ybU1ldGhvZChbY2h1bmssIGdlbmVyYXRvcnMsIDBdLCB0aGlzLCBkb25lKTtcblx0XHR9LFxuXHRcdGZsdXNoKGRvbmUpIHtcblx0XHRcdGZpbmFsTWV0aG9kKFtnZW5lcmF0b3JzXSwgdGhpcywgZG9uZSk7XG5cdFx0fSxcblx0XHRkZXN0cm95OiBkZXN0cm95TWV0aG9kLFxuXHR9KTtcblx0cmV0dXJuIHtzdHJlYW19O1xufTtcblxuLy8gQXBwbGllcyB0cmFuc2Zvcm0gZ2VuZXJhdG9ycyBpbiBzeW5jIG1vZGVcbmV4cG9ydCBjb25zdCBydW5HZW5lcmF0b3JzU3luYyA9IChjaHVua3MsIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBpc0lucHV0KSA9PiB7XG5cdGNvbnN0IGdlbmVyYXRvcnMgPSBzdGRpb0l0ZW1zLmZpbHRlcigoe3R5cGV9KSA9PiB0eXBlID09PSAnZ2VuZXJhdG9yJyk7XG5cdGNvbnN0IHJldmVyc2VkR2VuZXJhdG9ycyA9IGlzSW5wdXQgPyBnZW5lcmF0b3JzLnJldmVyc2UoKSA6IGdlbmVyYXRvcnM7XG5cblx0Zm9yIChjb25zdCB7dmFsdWUsIG9wdGlvbk5hbWV9IG9mIHJldmVyc2VkR2VuZXJhdG9ycykge1xuXHRcdGNvbnN0IGdlbmVyYXRvcnMgPSBhZGRJbnRlcm5hbEdlbmVyYXRvcnModmFsdWUsIGVuY29kaW5nLCBvcHRpb25OYW1lKTtcblx0XHRjaHVua3MgPSBydW5UcmFuc2Zvcm1TeW5jKGdlbmVyYXRvcnMsIGNodW5rcyk7XG5cdH1cblxuXHRyZXR1cm4gY2h1bmtzO1xufTtcblxuLy8gR2VuZXJhdG9ycyB1c2VkIGludGVybmFsbHkgdG8gY29udmVydCB0aGUgY2h1bmsgdHlwZSwgdmFsaWRhdGUgaXQsIGFuZCBzcGxpdCBpbnRvIGxpbmVzXG5jb25zdCBhZGRJbnRlcm5hbEdlbmVyYXRvcnMgPSAoXG5cdHt0cmFuc2Zvcm0sIGZpbmFsLCBiaW5hcnksIHdyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlLCBwcmVzZXJ2ZU5ld2xpbmVzfSxcblx0ZW5jb2RpbmcsXG5cdG9wdGlvbk5hbWUsXG4pID0+IHtcblx0Y29uc3Qgc3RhdGUgPSB7fTtcblx0cmV0dXJuIFtcblx0XHR7dHJhbnNmb3JtOiBnZXRWYWxpZGF0ZVRyYW5zZm9ybUlucHV0KHdyaXRhYmxlT2JqZWN0TW9kZSwgb3B0aW9uTmFtZSl9LFxuXHRcdGdldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yKGJpbmFyeSwgZW5jb2RpbmcsIHdyaXRhYmxlT2JqZWN0TW9kZSksXG5cdFx0Z2V0U3BsaXRMaW5lc0dlbmVyYXRvcihiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsIHdyaXRhYmxlT2JqZWN0TW9kZSwgc3RhdGUpLFxuXHRcdHt0cmFuc2Zvcm0sIGZpbmFsfSxcblx0XHR7dHJhbnNmb3JtOiBnZXRWYWxpZGF0ZVRyYW5zZm9ybVJldHVybihyZWFkYWJsZU9iamVjdE1vZGUsIG9wdGlvbk5hbWUpfSxcblx0XHRnZXRBcHBlbmROZXdsaW5lR2VuZXJhdG9yKHtcblx0XHRcdGJpbmFyeSxcblx0XHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdFx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0XHRzdGF0ZSxcblx0XHR9KSxcblx0XS5maWx0ZXIoQm9vbGVhbik7XG59O1xuIiwgImltcG9ydCB7cnVuR2VuZXJhdG9yc1N5bmN9IGZyb20gJy4uL3RyYW5zZm9ybS9nZW5lcmF0b3IuanMnO1xuaW1wb3J0IHtqb2luVG9VaW50OEFycmF5LCBpc1VpbnQ4QXJyYXl9IGZyb20gJy4uL3V0aWxzL3VpbnQtYXJyYXkuanMnO1xuaW1wb3J0IHtUWVBFX1RPX01FU1NBR0V9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuXG4vLyBBcHBseSBgc3RkaW5gL2BpbnB1dGAvYGlucHV0RmlsZWAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBzeW5jIG1vZGUsIGJ5IGNvbnZlcnRpbmcgaXQgdG8gdGhlIGBpbnB1dGAgb3B0aW9uXG5leHBvcnQgY29uc3QgYWRkSW5wdXRPcHRpb25zU3luYyA9IChmaWxlRGVzY3JpcHRvcnMsIG9wdGlvbnMpID0+IHtcblx0Zm9yIChjb25zdCBmZE51bWJlciBvZiBnZXRJbnB1dEZkTnVtYmVycyhmaWxlRGVzY3JpcHRvcnMpKSB7XG5cdFx0YWRkSW5wdXRPcHRpb25TeW5jKGZpbGVEZXNjcmlwdG9ycywgZmROdW1iZXIsIG9wdGlvbnMpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRJbnB1dEZkTnVtYmVycyA9IGZpbGVEZXNjcmlwdG9ycyA9PiBuZXcgU2V0KE9iamVjdC5lbnRyaWVzKGZpbGVEZXNjcmlwdG9ycylcblx0LmZpbHRlcigoWywge2RpcmVjdGlvbn1dKSA9PiBkaXJlY3Rpb24gPT09ICdpbnB1dCcpXG5cdC5tYXAoKFtmZE51bWJlcl0pID0+IE51bWJlcihmZE51bWJlcikpKTtcblxuY29uc3QgYWRkSW5wdXRPcHRpb25TeW5jID0gKGZpbGVEZXNjcmlwdG9ycywgZmROdW1iZXIsIG9wdGlvbnMpID0+IHtcblx0Y29uc3Qge3N0ZGlvSXRlbXN9ID0gZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXTtcblx0Y29uc3QgYWxsU3RkaW9JdGVtcyA9IHN0ZGlvSXRlbXMuZmlsdGVyKCh7Y29udGVudHN9KSA9PiBjb250ZW50cyAhPT0gdW5kZWZpbmVkKTtcblx0aWYgKGFsbFN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGZkTnVtYmVyICE9PSAwKSB7XG5cdFx0Y29uc3QgW3t0eXBlLCBvcHRpb25OYW1lfV0gPSBhbGxTdGRpb0l0ZW1zO1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYE9ubHkgdGhlIFxcYHN0ZGluXFxgIG9wdGlvbiwgbm90IFxcYCR7b3B0aW9uTmFtZX1cXGAsIGNhbiBiZSAke1RZUEVfVE9fTUVTU0FHRVt0eXBlXX0gd2l0aCBzeW5jaHJvbm91cyBtZXRob2RzLmApO1xuXHR9XG5cblx0Y29uc3QgYWxsQ29udGVudHMgPSBhbGxTdGRpb0l0ZW1zLm1hcCgoe2NvbnRlbnRzfSkgPT4gY29udGVudHMpO1xuXHRjb25zdCB0cmFuc2Zvcm1lZENvbnRlbnRzID0gYWxsQ29udGVudHMubWFwKGNvbnRlbnRzID0+IGFwcGx5U2luZ2xlSW5wdXRHZW5lcmF0b3JzU3luYyhjb250ZW50cywgc3RkaW9JdGVtcykpO1xuXHRvcHRpb25zLmlucHV0ID0gam9pblRvVWludDhBcnJheSh0cmFuc2Zvcm1lZENvbnRlbnRzKTtcbn07XG5cbmNvbnN0IGFwcGx5U2luZ2xlSW5wdXRHZW5lcmF0b3JzU3luYyA9IChjb250ZW50cywgc3RkaW9JdGVtcykgPT4ge1xuXHRjb25zdCBuZXdDb250ZW50cyA9IHJ1bkdlbmVyYXRvcnNTeW5jKGNvbnRlbnRzLCBzdGRpb0l0ZW1zLCAndXRmOCcsIHRydWUpO1xuXHR2YWxpZGF0ZVNlcmlhbGl6YWJsZShuZXdDb250ZW50cyk7XG5cdHJldHVybiBqb2luVG9VaW50OEFycmF5KG5ld0NvbnRlbnRzKTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlU2VyaWFsaXphYmxlID0gbmV3Q29udGVudHMgPT4ge1xuXHRjb25zdCBpbnZhbGlkSXRlbSA9IG5ld0NvbnRlbnRzLmZpbmQoaXRlbSA9PiB0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZycgJiYgIWlzVWludDhBcnJheShpdGVtKSk7XG5cdGlmIChpbnZhbGlkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYHN0ZGluXFxgIG9wdGlvbiBpcyBpbnZhbGlkOiB3aGVuIHBhc3Npbmcgb2JqZWN0cyBhcyBpbnB1dCwgYSB0cmFuc2Zvcm0gbXVzdCBiZSB1c2VkIHRvIHNlcmlhbGl6ZSB0aGVtIHRvIHN0cmluZ3Mgb3IgVWludDhBcnJheXM6ICR7aW52YWxpZEl0ZW19LmApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7QklOQVJZX0VOQ09ESU5HU30gZnJvbSAnLi4vYXJndW1lbnRzL2VuY29kaW5nLW9wdGlvbi5qcyc7XG5pbXBvcnQge1RSQU5TRk9STV9UWVBFU30gZnJvbSAnLi4vc3RkaW8vdHlwZS5qcyc7XG5pbXBvcnQge3ZlcmJvc2VMb2csIHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlfSBmcm9tICcuL2xvZy5qcyc7XG5pbXBvcnQge2lzRnVsbFZlcmJvc2V9IGZyb20gJy4vdmFsdWVzLmpzJztcblxuLy8gYGlnbm9yZWAgb3B0cy1vdXQgb2YgYHZlcmJvc2VgIGZvciBhIHNwZWNpZmljIHN0cmVhbS5cbi8vIGBpcGNgIGNhbm5vdCB1c2UgcGlwaW5nLlxuLy8gYGluaGVyaXRgIHdvdWxkIHJlc3VsdCBpbiBkb3VibGUgcHJpbnRpbmcuXG4vLyBUaGV5IGNhbiBhbHNvIGxlYWQgdG8gZG91YmxlIHByaW50aW5nIHdoZW4gcGFzc2luZyBmaWxlIGRlc2NyaXB0b3IgaW50ZWdlcnMgb3IgYHByb2Nlc3Muc3RkKmAuXG4vLyBUaGlzIG9ubHkgbGVhdmVzIHdpdGggYHBpcGVgIGFuZCBgb3ZlcmxhcHBlZGAuXG5leHBvcnQgY29uc3Qgc2hvdWxkTG9nT3V0cHV0ID0gKHtzdGRpb0l0ZW1zLCBlbmNvZGluZywgdmVyYm9zZUluZm8sIGZkTnVtYmVyfSkgPT4gZmROdW1iZXIgIT09ICdhbGwnXG5cdCYmIGlzRnVsbFZlcmJvc2UodmVyYm9zZUluZm8sIGZkTnVtYmVyKVxuXHQmJiAhQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpXG5cdCYmIGZkVXNlc1ZlcmJvc2UoZmROdW1iZXIpXG5cdCYmIChzdGRpb0l0ZW1zLnNvbWUoKHt0eXBlLCB2YWx1ZX0pID0+IHR5cGUgPT09ICduYXRpdmUnICYmIFBJUEVEX1NURElPX1ZBTFVFUy5oYXModmFsdWUpKVxuXHR8fCBzdGRpb0l0ZW1zLmV2ZXJ5KCh7dHlwZX0pID0+IFRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpKTtcblxuLy8gUHJpbnRpbmcgaW5wdXQgc3RyZWFtcyB3b3VsZCBiZSBjb25mdXNpbmcuXG4vLyBGaWxlcyBhbmQgc3RyZWFtcyBjYW4gcHJvZHVjZSBiaWcgb3V0cHV0cywgd2hpY2ggd2UgZG9uJ3Qgd2FudCB0byBwcmludC5cbi8vIFdlIGNvdWxkIHByaW50IGBzdGRpb1szK11gIGJ1dCBpdCBvZnRlbiBpcyByZWRpcmVjdGVkIHRvIGZpbGVzIGFuZCBzdHJlYW1zLCB3aXRoIHRoZSBzYW1lIGlzc3VlLlxuLy8gU28gd2Ugb25seSBwcmludCBzdGRvdXQgYW5kIHN0ZGVyci5cbmNvbnN0IGZkVXNlc1ZlcmJvc2UgPSBmZE51bWJlciA9PiBmZE51bWJlciA9PT0gMSB8fCBmZE51bWJlciA9PT0gMjtcblxuY29uc3QgUElQRURfU1RESU9fVkFMVUVTID0gbmV3IFNldChbJ3BpcGUnLCAnb3ZlcmxhcHBlZCddKTtcblxuLy8gYHZlcmJvc2U6ICdmdWxsJ2AgcHJpbnRpbmcgbG9naWMgd2l0aCBhc3luYyBtZXRob2RzXG5leHBvcnQgY29uc3QgbG9nTGluZXMgPSBhc3luYyAobGluZXNJdGVyYWJsZSwgc3RyZWFtLCBmZE51bWJlciwgdmVyYm9zZUluZm8pID0+IHtcblx0Zm9yIGF3YWl0IChjb25zdCBsaW5lIG9mIGxpbmVzSXRlcmFibGUpIHtcblx0XHRpZiAoIWlzUGlwaW5nU3RyZWFtKHN0cmVhbSkpIHtcblx0XHRcdGxvZ0xpbmUobGluZSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIGB2ZXJib3NlOiAnZnVsbCdgIHByaW50aW5nIGxvZ2ljIHdpdGggc3luYyBtZXRob2RzXG5leHBvcnQgY29uc3QgbG9nTGluZXNTeW5jID0gKGxpbmVzQXJyYXksIGZkTnVtYmVyLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXNBcnJheSkge1xuXHRcdGxvZ0xpbmUobGluZSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcblx0fVxufTtcblxuLy8gV2hlbiBgc3VicHJvY2Vzcy5zdGRvdXR8c3RkZXJyLnBpcGUoKWAgaXMgY2FsbGVkLCBgdmVyYm9zZWAgYmVjb21lcyBhIG5vb3AuXG4vLyBUaGlzIHByZXZlbnRzIHRoZSBmb2xsb3dpbmcgcHJvYmxlbXM6XG4vLyAgLSBgLnBpcGUoKWAgYWNoaWV2ZXMgdGhlIHNhbWUgcmVzdWx0IGFzIHVzaW5nIGBzdGRvdXQ6ICdpbmhlcml0J2AsIGBzdGRvdXQ6IHN0cmVhbWAsIGV0Yy4gd2hpY2ggYWxzbyBtYWtlIGB2ZXJib3NlYCBhIG5vb3AuXG4vLyAgICBGb3IgZXhhbXBsZSwgYHN1YnByb2Nlc3Muc3Rkb3V0LnBpcGUocHJvY2Vzcy5zdGRpbilgIHdvdWxkIHByaW50IGVhY2ggbGluZSB0d2ljZS5cbi8vICAtIFdoZW4gY2hhaW5pbmcgc3VicHJvY2Vzc2VzIHdpdGggYHN1YnByb2Nlc3MucGlwZShvdGhlclN1YnByb2Nlc3MpYCwgb25seSB0aGUgbGFzdCBvbmUgc2hvdWxkIHByaW50IGl0cyBvdXRwdXQuXG4vLyBEZXRlY3Rpbmcgd2hldGhlciBgLnBpcGUoKWAgaXMgaW1wb3NzaWJsZSB3aXRob3V0IG1vbmtleS1wYXRjaGluZyBpdCwgc28gd2UgdXNlIHRoZSBmb2xsb3dpbmcgdW5kb2N1bWVudGVkIHByb3BlcnR5LlxuLy8gVGhpcyBpcyBub3QgYSBjcml0aWNhbCBiZWhhdmlvciBzaW5jZSBjaGFuZ2VzIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydHkgd291bGQgb25seSBtYWtlIGB2ZXJib3NlYCBtb3JlIHZlcmJvc2UuXG5jb25zdCBpc1BpcGluZ1N0cmVhbSA9IHN0cmVhbSA9PiBzdHJlYW0uX3JlYWRhYmxlU3RhdGUucGlwZXMubGVuZ3RoID4gMDtcblxuLy8gV2hlbiBgdmVyYm9zZWAgaXMgYGZ1bGxgLCBwcmludCBzdGRvdXR8c3RkZXJyXG5jb25zdCBsb2dMaW5lID0gKGxpbmUsIGZkTnVtYmVyLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRjb25zdCB2ZXJib3NlTWVzc2FnZSA9IHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlKGxpbmUpO1xuXHR2ZXJib3NlTG9nKHtcblx0XHR0eXBlOiAnb3V0cHV0Jyxcblx0XHR2ZXJib3NlTWVzc2FnZSxcblx0XHRmZE51bWJlcixcblx0XHR2ZXJib3NlSW5mbyxcblx0fSk7XG59O1xuIiwgImltcG9ydCB7d3JpdGVGaWxlU3luYywgYXBwZW5kRmlsZVN5bmN9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHtzaG91bGRMb2dPdXRwdXQsIGxvZ0xpbmVzU3luY30gZnJvbSAnLi4vdmVyYm9zZS9vdXRwdXQuanMnO1xuaW1wb3J0IHtydW5HZW5lcmF0b3JzU3luY30gZnJvbSAnLi4vdHJhbnNmb3JtL2dlbmVyYXRvci5qcyc7XG5pbXBvcnQge3NwbGl0TGluZXNTeW5jfSBmcm9tICcuLi90cmFuc2Zvcm0vc3BsaXQuanMnO1xuaW1wb3J0IHtqb2luVG9TdHJpbmcsIGpvaW5Ub1VpbnQ4QXJyYXksIGJ1ZmZlclRvVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge0ZJTEVfVFlQRVN9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuaW1wb3J0IHt0cnVuY2F0ZU1heEJ1ZmZlclN5bmN9IGZyb20gJy4vbWF4LWJ1ZmZlci5qcyc7XG5cbi8vIEFwcGx5IGBzdGRvdXRgL2BzdGRlcnJgIG9wdGlvbnMsIGFmdGVyIHNwYXduaW5nLCBpbiBzeW5jIG1vZGVcbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1PdXRwdXRTeW5jID0gKHtmaWxlRGVzY3JpcHRvcnMsIHN5bmNSZXN1bHQ6IHtvdXRwdXR9LCBvcHRpb25zLCBpc01heEJ1ZmZlciwgdmVyYm9zZUluZm99KSA9PiB7XG5cdGlmIChvdXRwdXQgPT09IG51bGwpIHtcblx0XHRyZXR1cm4ge291dHB1dDogQXJyYXkuZnJvbSh7bGVuZ3RoOiAzfSl9O1xuXHR9XG5cblx0Y29uc3Qgc3RhdGUgPSB7fTtcblx0Y29uc3Qgb3V0cHV0RmlsZXMgPSBuZXcgU2V0KFtdKTtcblx0Y29uc3QgdHJhbnNmb3JtZWRPdXRwdXQgPSBvdXRwdXQubWFwKChyZXN1bHQsIGZkTnVtYmVyKSA9PlxuXHRcdHRyYW5zZm9ybU91dHB1dFJlc3VsdFN5bmMoe1xuXHRcdFx0cmVzdWx0LFxuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0ZmROdW1iZXIsXG5cdFx0XHRzdGF0ZSxcblx0XHRcdG91dHB1dEZpbGVzLFxuXHRcdFx0aXNNYXhCdWZmZXIsXG5cdFx0XHR2ZXJib3NlSW5mbyxcblx0XHR9LCBvcHRpb25zKSk7XG5cdHJldHVybiB7b3V0cHV0OiB0cmFuc2Zvcm1lZE91dHB1dCwgLi4uc3RhdGV9O1xufTtcblxuY29uc3QgdHJhbnNmb3JtT3V0cHV0UmVzdWx0U3luYyA9IChcblx0e3Jlc3VsdCwgZmlsZURlc2NyaXB0b3JzLCBmZE51bWJlciwgc3RhdGUsIG91dHB1dEZpbGVzLCBpc01heEJ1ZmZlciwgdmVyYm9zZUluZm99LFxuXHR7YnVmZmVyLCBlbmNvZGluZywgbGluZXMsIHN0cmlwRmluYWxOZXdsaW5lLCBtYXhCdWZmZXJ9LFxuKSA9PiB7XG5cdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0cnVuY2F0ZWRSZXN1bHQgPSB0cnVuY2F0ZU1heEJ1ZmZlclN5bmMocmVzdWx0LCBpc01heEJ1ZmZlciwgbWF4QnVmZmVyKTtcblx0Y29uc3QgdWludDhBcnJheVJlc3VsdCA9IGJ1ZmZlclRvVWludDhBcnJheSh0cnVuY2F0ZWRSZXN1bHQpO1xuXHRjb25zdCB7c3RkaW9JdGVtcywgb2JqZWN0TW9kZX0gPSBmaWxlRGVzY3JpcHRvcnNbZmROdW1iZXJdO1xuXHRjb25zdCBjaHVua3MgPSBydW5PdXRwdXRHZW5lcmF0b3JzU3luYyhbdWludDhBcnJheVJlc3VsdF0sIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBzdGF0ZSk7XG5cdGNvbnN0IHtzZXJpYWxpemVkUmVzdWx0LCBmaW5hbFJlc3VsdCA9IHNlcmlhbGl6ZWRSZXN1bHR9ID0gc2VyaWFsaXplQ2h1bmtzKHtcblx0XHRjaHVua3MsXG5cdFx0b2JqZWN0TW9kZSxcblx0XHRlbmNvZGluZyxcblx0XHRsaW5lcyxcblx0XHRzdHJpcEZpbmFsTmV3bGluZSxcblx0XHRmZE51bWJlcixcblx0fSk7XG5cblx0bG9nT3V0cHV0U3luYyh7XG5cdFx0c2VyaWFsaXplZFJlc3VsdCxcblx0XHRmZE51bWJlcixcblx0XHRzdGF0ZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRlbmNvZGluZyxcblx0XHRzdGRpb0l0ZW1zLFxuXHRcdG9iamVjdE1vZGUsXG5cdH0pO1xuXG5cdGNvbnN0IHJldHVybmVkUmVzdWx0ID0gYnVmZmVyW2ZkTnVtYmVyXSA/IGZpbmFsUmVzdWx0IDogdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0aWYgKHN0YXRlLmVycm9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHdyaXRlVG9GaWxlcyhzZXJpYWxpemVkUmVzdWx0LCBzdGRpb0l0ZW1zLCBvdXRwdXRGaWxlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVybmVkUmVzdWx0O1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHN0YXRlLmVycm9yID0gZXJyb3I7XG5cdFx0cmV0dXJuIHJldHVybmVkUmVzdWx0O1xuXHR9XG59O1xuXG4vLyBBcHBsaWVzIHRyYW5zZm9ybSBnZW5lcmF0b3JzIHRvIGBzdGRvdXRgL2BzdGRlcnJgXG5jb25zdCBydW5PdXRwdXRHZW5lcmF0b3JzU3luYyA9IChjaHVua3MsIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBzdGF0ZSkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBydW5HZW5lcmF0b3JzU3luYyhjaHVua3MsIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBmYWxzZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0c3RhdGUuZXJyb3IgPSBlcnJvcjtcblx0XHRyZXR1cm4gY2h1bmtzO1xuXHR9XG59O1xuXG4vLyBUaGUgY29udGVudHMgaXMgY29udmVydGVkIHRvIHRocmVlIHN0YWdlczpcbi8vICAtIHNlcmlhbGl6ZWRSZXN1bHQ6IHVzZWQgd2hlbiB0aGUgdGFyZ2V0IGlzIGEgZmlsZSBwYXRoL1VSTCBvciBhIGZpbGUgZGVzY3JpcHRvciAoaW5jbHVkaW5nICdpbmhlcml0Jylcbi8vICAtIGZpbmFsUmVzdWx0L3JldHVybmVkUmVzdWx0OiByZXR1cm5lZCBhcyBgcmVzdWx0LnN0ZCpgXG5jb25zdCBzZXJpYWxpemVDaHVua3MgPSAoe2NodW5rcywgb2JqZWN0TW9kZSwgZW5jb2RpbmcsIGxpbmVzLCBzdHJpcEZpbmFsTmV3bGluZSwgZmROdW1iZXJ9KSA9PiB7XG5cdGlmIChvYmplY3RNb2RlKSB7XG5cdFx0cmV0dXJuIHtzZXJpYWxpemVkUmVzdWx0OiBjaHVua3N9O1xuXHR9XG5cblx0aWYgKGVuY29kaW5nID09PSAnYnVmZmVyJykge1xuXHRcdHJldHVybiB7c2VyaWFsaXplZFJlc3VsdDogam9pblRvVWludDhBcnJheShjaHVua3MpfTtcblx0fVxuXG5cdGNvbnN0IHNlcmlhbGl6ZWRSZXN1bHQgPSBqb2luVG9TdHJpbmcoY2h1bmtzLCBlbmNvZGluZyk7XG5cdGlmIChsaW5lc1tmZE51bWJlcl0pIHtcblx0XHRyZXR1cm4ge3NlcmlhbGl6ZWRSZXN1bHQsIGZpbmFsUmVzdWx0OiBzcGxpdExpbmVzU3luYyhzZXJpYWxpemVkUmVzdWx0LCAhc3RyaXBGaW5hbE5ld2xpbmVbZmROdW1iZXJdLCBvYmplY3RNb2RlKX07XG5cdH1cblxuXHRyZXR1cm4ge3NlcmlhbGl6ZWRSZXN1bHR9O1xufTtcblxuY29uc3QgbG9nT3V0cHV0U3luYyA9ICh7c2VyaWFsaXplZFJlc3VsdCwgZmROdW1iZXIsIHN0YXRlLCB2ZXJib3NlSW5mbywgZW5jb2RpbmcsIHN0ZGlvSXRlbXMsIG9iamVjdE1vZGV9KSA9PiB7XG5cdGlmICghc2hvdWxkTG9nT3V0cHV0KHtcblx0XHRzdGRpb0l0ZW1zLFxuXHRcdGVuY29kaW5nLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdGZkTnVtYmVyLFxuXHR9KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxpbmVzQXJyYXkgPSBzcGxpdExpbmVzU3luYyhzZXJpYWxpemVkUmVzdWx0LCBmYWxzZSwgb2JqZWN0TW9kZSk7XG5cblx0dHJ5IHtcblx0XHRsb2dMaW5lc1N5bmMobGluZXNBcnJheSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzdGF0ZS5lcnJvciA/Pz0gZXJyb3I7XG5cdH1cbn07XG5cbi8vIFdoZW4gdGhlIGBzdGQqYCB0YXJnZXQgaXMgYSBmaWxlIHBhdGgvVVJMIG9yIGEgZmlsZSBkZXNjcmlwdG9yXG5jb25zdCB3cml0ZVRvRmlsZXMgPSAoc2VyaWFsaXplZFJlc3VsdCwgc3RkaW9JdGVtcywgb3V0cHV0RmlsZXMpID0+IHtcblx0Zm9yIChjb25zdCB7cGF0aCwgYXBwZW5kfSBvZiBzdGRpb0l0ZW1zLmZpbHRlcigoe3R5cGV9KSA9PiBGSUxFX1RZUEVTLmhhcyh0eXBlKSkpIHtcblx0XHRjb25zdCBwYXRoU3RyaW5nID0gdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnID8gcGF0aCA6IHBhdGgudG9TdHJpbmcoKTtcblx0XHRpZiAoYXBwZW5kIHx8IG91dHB1dEZpbGVzLmhhcyhwYXRoU3RyaW5nKSkge1xuXHRcdFx0YXBwZW5kRmlsZVN5bmMocGF0aCwgc2VyaWFsaXplZFJlc3VsdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dEZpbGVzLmFkZChwYXRoU3RyaW5nKTtcblx0XHRcdHdyaXRlRmlsZVN5bmMocGF0aCwgc2VyaWFsaXplZFJlc3VsdCk7XG5cdFx0fVxuXHR9XG59O1xuIiwgImltcG9ydCB7aXNVaW50OEFycmF5LCBjb25jYXRVaW50OEFycmF5c30gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge3N0cmlwTmV3bGluZX0gZnJvbSAnLi4vaW8vc3RyaXAtbmV3bGluZS5qcyc7XG5cbi8vIFJldHJpZXZlIGByZXN1bHQuYWxsYCB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHNcbmV4cG9ydCBjb25zdCBnZXRBbGxTeW5jID0gKFssIHN0ZG91dCwgc3RkZXJyXSwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9wdGlvbnMuYWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHN0ZG91dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHN0ZGVycjtcblx0fVxuXG5cdGlmIChzdGRlcnIgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBzdGRvdXQ7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShzdGRvdXQpKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoc3RkZXJyKVxuXHRcdFx0PyBbLi4uc3Rkb3V0LCAuLi5zdGRlcnJdXG5cdFx0XHQ6IFsuLi5zdGRvdXQsIHN0cmlwTmV3bGluZShzdGRlcnIsIG9wdGlvbnMsICdhbGwnKV07XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShzdGRlcnIpKSB7XG5cdFx0cmV0dXJuIFtzdHJpcE5ld2xpbmUoc3Rkb3V0LCBvcHRpb25zLCAnYWxsJyksIC4uLnN0ZGVycl07XG5cdH1cblxuXHRpZiAoaXNVaW50OEFycmF5KHN0ZG91dCkgJiYgaXNVaW50OEFycmF5KHN0ZGVycikpIHtcblx0XHRyZXR1cm4gY29uY2F0VWludDhBcnJheXMoW3N0ZG91dCwgc3RkZXJyXSk7XG5cdH1cblxuXHRyZXR1cm4gYCR7c3Rkb3V0fSR7c3RkZXJyfWA7XG59O1xuIiwgImltcG9ydCB7b25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtEaXNjYXJkZWRFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL2ZpbmFsLWVycm9yLmpzJztcblxuLy8gSWYgYGVycm9yYCBpcyBlbWl0dGVkIGJlZm9yZSBgc3Bhd25gLCBgZXhpdGAgd2lsbCBuZXZlciBiZSBlbWl0dGVkLlxuLy8gSG93ZXZlciwgYGVycm9yYCBtaWdodCBiZSBlbWl0dGVkIGFmdGVyIGBzcGF3bmAuXG4vLyBJbiB0aGF0IGNhc2UsIGBleGl0YCB3aWxsIHN0aWxsIGJlIGVtaXR0ZWQuXG4vLyBTaW5jZSB0aGUgYGV4aXRgIGV2ZW50IGNvbnRhaW5zIHRoZSBzaWduYWwgbmFtZSwgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgYXJlIGxpc3RlbmluZyBmb3IgaXQuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsc28gdGFrZXMgaW50byBhY2NvdW50IHRoZSBmb2xsb3dpbmcgdW5saWtlbHkgY2FzZXM6XG4vLyAgLSBgZXhpdGAgYmVpbmcgZW1pdHRlZCBpbiB0aGUgc2FtZSBtaWNyb3Rhc2sgYXMgYHNwYXduYFxuLy8gIC0gYGVycm9yYCBiZWluZyBlbWl0dGVkIG11bHRpcGxlIHRpbWVzXG5leHBvcnQgY29uc3Qgd2FpdEZvckV4aXQgPSBhc3luYyAoc3VicHJvY2VzcywgY29udGV4dCkgPT4ge1xuXHRjb25zdCBbZXhpdENvZGUsIHNpZ25hbF0gPSBhd2FpdCB3YWl0Rm9yRXhpdE9yRXJyb3Ioc3VicHJvY2Vzcyk7XG5cdGNvbnRleHQuaXNGb3JjZWZ1bGx5VGVybWluYXRlZCA/Pz0gZmFsc2U7XG5cdHJldHVybiBbZXhpdENvZGUsIHNpZ25hbF07XG59O1xuXG5jb25zdCB3YWl0Rm9yRXhpdE9yRXJyb3IgPSBhc3luYyBzdWJwcm9jZXNzID0+IHtcblx0Y29uc3QgW3NwYXduUGF5bG9hZCwgZXhpdFBheWxvYWRdID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcblx0XHRvbmNlKHN1YnByb2Nlc3MsICdzcGF3bicpLFxuXHRcdG9uY2Uoc3VicHJvY2VzcywgJ2V4aXQnKSxcblx0XSk7XG5cblx0aWYgKHNwYXduUGF5bG9hZC5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZXR1cm4gZXhpdFBheWxvYWQuc3RhdHVzID09PSAncmVqZWN0ZWQnXG5cdFx0PyB3YWl0Rm9yU3VicHJvY2Vzc0V4aXQoc3VicHJvY2Vzcylcblx0XHQ6IGV4aXRQYXlsb2FkLnZhbHVlO1xufTtcblxuY29uc3Qgd2FpdEZvclN1YnByb2Nlc3NFeGl0ID0gYXN5bmMgc3VicHJvY2VzcyA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IG9uY2Uoc3VicHJvY2VzcywgJ2V4aXQnKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHdhaXRGb3JTdWJwcm9jZXNzRXhpdChzdWJwcm9jZXNzKTtcblx0fVxufTtcblxuLy8gUmV0cmlldmUgdGhlIGZpbmFsIGV4aXQgY29kZSBhbmR8b3Igc2lnbmFsIG5hbWVcbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VjY2Vzc2Z1bEV4aXQgPSBhc3luYyBleGl0UHJvbWlzZSA9PiB7XG5cdGNvbnN0IFtleGl0Q29kZSwgc2lnbmFsXSA9IGF3YWl0IGV4aXRQcm9taXNlO1xuXG5cdGlmICghaXNTdWJwcm9jZXNzRXJyb3JFeGl0KGV4aXRDb2RlLCBzaWduYWwpICYmIGlzRmFpbGVkRXhpdChleGl0Q29kZSwgc2lnbmFsKSkge1xuXHRcdHRocm93IG5ldyBEaXNjYXJkZWRFcnJvcigpO1xuXHR9XG5cblx0cmV0dXJuIFtleGl0Q29kZSwgc2lnbmFsXTtcbn07XG5cbi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgZmFpbHMgZHVlIHRvIGFuIGBlcnJvcmAgZXZlbnRcbmNvbnN0IGlzU3VicHJvY2Vzc0Vycm9yRXhpdCA9IChleGl0Q29kZSwgc2lnbmFsKSA9PiBleGl0Q29kZSA9PT0gdW5kZWZpbmVkICYmIHNpZ25hbCA9PT0gdW5kZWZpbmVkO1xuLy8gV2hlbiB0aGUgc3VicHJvY2VzcyBmYWlscyBkdWUgdG8gYSBub24tMCBleGl0IGNvZGUgb3IgdG8gYSBzaWduYWwgdGVybWluYXRpb25cbmV4cG9ydCBjb25zdCBpc0ZhaWxlZEV4aXQgPSAoZXhpdENvZGUsIHNpZ25hbCkgPT4gZXhpdENvZGUgIT09IDAgfHwgc2lnbmFsICE9PSBudWxsO1xuIiwgImltcG9ydCB7RGlzY2FyZGVkRXJyb3J9IGZyb20gJy4uL3JldHVybi9maW5hbC1lcnJvci5qcyc7XG5pbXBvcnQge2lzTWF4QnVmZmVyU3luY30gZnJvbSAnLi4vaW8vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge2lzRmFpbGVkRXhpdH0gZnJvbSAnLi9leGl0LWFzeW5jLmpzJztcblxuLy8gUmV0cmlldmUgZXhpdCBjb2RlLCBzaWduYWwgbmFtZSBhbmQgZXJyb3IgaW5mb3JtYXRpb24sIHdpdGggc3luY2hyb25vdXMgbWV0aG9kc1xuZXhwb3J0IGNvbnN0IGdldEV4aXRSZXN1bHRTeW5jID0gKHtlcnJvciwgc3RhdHVzOiBleGl0Q29kZSwgc2lnbmFsLCBvdXRwdXR9LCB7bWF4QnVmZmVyfSkgPT4ge1xuXHRjb25zdCByZXN1bHRFcnJvciA9IGdldFJlc3VsdEVycm9yKGVycm9yLCBleGl0Q29kZSwgc2lnbmFsKTtcblx0Y29uc3QgdGltZWRPdXQgPSByZXN1bHRFcnJvcj8uY29kZSA9PT0gJ0VUSU1FRE9VVCc7XG5cdGNvbnN0IGlzTWF4QnVmZmVyID0gaXNNYXhCdWZmZXJTeW5jKHJlc3VsdEVycm9yLCBvdXRwdXQsIG1heEJ1ZmZlcik7XG5cdHJldHVybiB7XG5cdFx0cmVzdWx0RXJyb3IsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzTWF4QnVmZmVyLFxuXHR9O1xufTtcblxuY29uc3QgZ2V0UmVzdWx0RXJyb3IgPSAoZXJyb3IsIGV4aXRDb2RlLCBzaWduYWwpID0+IHtcblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZXJyb3I7XG5cdH1cblxuXHRyZXR1cm4gaXNGYWlsZWRFeGl0KGV4aXRDb2RlLCBzaWduYWwpID8gbmV3IERpc2NhcmRlZEVycm9yKCkgOiB1bmRlZmluZWQ7XG59O1xuIiwgImltcG9ydCB7c3Bhd25TeW5jfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHtoYW5kbGVDb21tYW5kfSBmcm9tICcuLi9hcmd1bWVudHMvY29tbWFuZC5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZU9wdGlvbnN9IGZyb20gJy4uL2FyZ3VtZW50cy9vcHRpb25zLmpzJztcbmltcG9ydCB7Y29uY2F0ZW5hdGVTaGVsbH0gZnJvbSAnLi4vYXJndW1lbnRzL3NoZWxsLmpzJztcbmltcG9ydCB7bWFrZUVycm9yLCBtYWtlRWFybHlFcnJvciwgbWFrZVN1Y2Nlc3NSZXN1bHR9IGZyb20gJy4uL3JldHVybi9yZXN1bHQuanMnO1xuaW1wb3J0IHtoYW5kbGVSZXN1bHR9IGZyb20gJy4uL3JldHVybi9yZWplY3QuanMnO1xuaW1wb3J0IHtoYW5kbGVTdGRpb1N5bmN9IGZyb20gJy4uL3N0ZGlvL2hhbmRsZS1zeW5jLmpzJztcbmltcG9ydCB7c3RyaXBOZXdsaW5lfSBmcm9tICcuLi9pby9zdHJpcC1uZXdsaW5lLmpzJztcbmltcG9ydCB7YWRkSW5wdXRPcHRpb25zU3luY30gZnJvbSAnLi4vaW8vaW5wdXQtc3luYy5qcyc7XG5pbXBvcnQge3RyYW5zZm9ybU91dHB1dFN5bmN9IGZyb20gJy4uL2lvL291dHB1dC1zeW5jLmpzJztcbmltcG9ydCB7Z2V0TWF4QnVmZmVyU3luY30gZnJvbSAnLi4vaW8vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge2dldEFsbFN5bmN9IGZyb20gJy4uL3Jlc29sdmUvYWxsLXN5bmMuanMnO1xuaW1wb3J0IHtnZXRFeGl0UmVzdWx0U3luY30gZnJvbSAnLi4vcmVzb2x2ZS9leGl0LXN5bmMuanMnO1xuXG4vLyBNYWluIHNoYXJlZCBsb2dpYyBmb3IgYWxsIHN5bmMgbWV0aG9kczogYGV4ZWNhU3luYygpYCwgYCQuc3luYygpYFxuZXhwb3J0IGNvbnN0IGV4ZWNhQ29yZVN5bmMgPSAocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKSA9PiB7XG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lLCB2ZXJib3NlSW5mbywgb3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IGhhbmRsZVN5bmNBcmd1bWVudHMocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0Y29uc3QgcmVzdWx0ID0gc3Bhd25TdWJwcm9jZXNzU3luYyh7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0cmV0dXJuIGhhbmRsZVJlc3VsdChyZXN1bHQsIHZlcmJvc2VJbmZvLCBvcHRpb25zKTtcbn07XG5cbi8vIENvbXB1dGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gYGNoaWxkX3Byb2Nlc3Muc3Bhd25TeW5jKClgXG5jb25zdCBoYW5kbGVTeW5jQXJndW1lbnRzID0gKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucykgPT4ge1xuXHRjb25zdCB7Y29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZSwgdmVyYm9zZUluZm99ID0gaGFuZGxlQ29tbWFuZChyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpO1xuXHRjb25zdCBzeW5jT3B0aW9ucyA9IG5vcm1hbGl6ZVN5bmNPcHRpb25zKHJhd09wdGlvbnMpO1xuXHRjb25zdCB7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9uc30gPSBub3JtYWxpemVPcHRpb25zKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgc3luY09wdGlvbnMpO1xuXHR2YWxpZGF0ZVN5bmNPcHRpb25zKG9wdGlvbnMpO1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBoYW5kbGVTdGRpb1N5bmMob3B0aW9ucywgdmVyYm9zZUluZm8pO1xuXHRyZXR1cm4ge1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRvcHRpb25zLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0fTtcbn07XG5cbi8vIE9wdGlvbnMgbm9ybWFsaXphdGlvbiBsb2dpYyBzcGVjaWZpYyB0byBzeW5jIG1ldGhvZHNcbmNvbnN0IG5vcm1hbGl6ZVN5bmNPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLm5vZGUgJiYgIW9wdGlvbnMuaXBjID8gey4uLm9wdGlvbnMsIGlwYzogZmFsc2V9IDogb3B0aW9ucztcblxuLy8gT3B0aW9ucyB2YWxpZGF0aW9uIGxvZ2ljIHNwZWNpZmljIHRvIHN5bmMgbWV0aG9kc1xuY29uc3QgdmFsaWRhdGVTeW5jT3B0aW9ucyA9ICh7aXBjLCBpcGNJbnB1dCwgZGV0YWNoZWQsIGNhbmNlbFNpZ25hbH0pID0+IHtcblx0aWYgKGlwY0lucHV0KSB7XG5cdFx0dGhyb3dJbnZhbGlkU3luY09wdGlvbignaXBjSW5wdXQnKTtcblx0fVxuXG5cdGlmIChpcGMpIHtcblx0XHR0aHJvd0ludmFsaWRTeW5jT3B0aW9uKCdpcGM6IHRydWUnKTtcblx0fVxuXG5cdGlmIChkZXRhY2hlZCkge1xuXHRcdHRocm93SW52YWxpZFN5bmNPcHRpb24oJ2RldGFjaGVkOiB0cnVlJyk7XG5cdH1cblxuXHRpZiAoY2FuY2VsU2lnbmFsKSB7XG5cdFx0dGhyb3dJbnZhbGlkU3luY09wdGlvbignY2FuY2VsU2lnbmFsJyk7XG5cdH1cbn07XG5cbmNvbnN0IHRocm93SW52YWxpZFN5bmNPcHRpb24gPSB2YWx1ZSA9PiB7XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcIiR7dmFsdWV9XCIgb3B0aW9uIGNhbm5vdCBiZSB1c2VkIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcbn07XG5cbmNvbnN0IHNwYXduU3VicHJvY2Vzc1N5bmMgPSAoe2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnMsIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCB2ZXJib3NlSW5mbywgZmlsZURlc2NyaXB0b3JzLCBzdGFydFRpbWV9KSA9PiB7XG5cdGNvbnN0IHN5bmNSZXN1bHQgPSBydW5TdWJwcm9jZXNzU3luYyh7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0aWYgKHN5bmNSZXN1bHQuZmFpbGVkKSB7XG5cdFx0cmV0dXJuIHN5bmNSZXN1bHQ7XG5cdH1cblxuXHRjb25zdCB7cmVzdWx0RXJyb3IsIGV4aXRDb2RlLCBzaWduYWwsIHRpbWVkT3V0LCBpc01heEJ1ZmZlcn0gPSBnZXRFeGl0UmVzdWx0U3luYyhzeW5jUmVzdWx0LCBvcHRpb25zKTtcblx0Y29uc3Qge291dHB1dCwgZXJyb3IgPSByZXN1bHRFcnJvcn0gPSB0cmFuc2Zvcm1PdXRwdXRTeW5jKHtcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3luY1Jlc3VsdCxcblx0XHRvcHRpb25zLFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9KTtcblx0Y29uc3Qgc3RkaW8gPSBvdXRwdXQubWFwKChzdGRpb091dHB1dCwgZmROdW1iZXIpID0+IHN0cmlwTmV3bGluZShzdGRpb091dHB1dCwgb3B0aW9ucywgZmROdW1iZXIpKTtcblx0Y29uc3QgYWxsID0gc3RyaXBOZXdsaW5lKGdldEFsbFN5bmMob3V0cHV0LCBvcHRpb25zKSwgb3B0aW9ucywgJ2FsbCcpO1xuXHRyZXR1cm4gZ2V0U3luY1Jlc3VsdCh7XG5cdFx0ZXJyb3IsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRvcHRpb25zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcbn07XG5cbmNvbnN0IHJ1blN1YnByb2Nlc3NTeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgZmlsZURlc2NyaXB0b3JzLCBzdGFydFRpbWV9KSA9PiB7XG5cdHRyeSB7XG5cdFx0YWRkSW5wdXRPcHRpb25zU3luYyhmaWxlRGVzY3JpcHRvcnMsIG9wdGlvbnMpO1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplU3Bhd25TeW5jT3B0aW9ucyhvcHRpb25zKTtcblx0XHRyZXR1cm4gc3Bhd25TeW5jKC4uLmNvbmNhdGVuYXRlU2hlbGwoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgbm9ybWFsaXplZE9wdGlvbnMpKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gbWFrZUVhcmx5RXJyb3Ioe1xuXHRcdFx0ZXJyb3IsXG5cdFx0XHRjb21tYW5kLFxuXHRcdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lLFxuXHRcdFx0aXNTeW5jOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBUaGUgYGVuY29kaW5nYCBvcHRpb24gaXMgaGFuZGxlZCBieSBFeGVjYSwgbm90IGJ5IGBjaGlsZF9wcm9jZXNzLnNwYXduU3luYygpYFxuY29uc3Qgbm9ybWFsaXplU3Bhd25TeW5jT3B0aW9ucyA9ICh7ZW5jb2RpbmcsIG1heEJ1ZmZlciwgLi4ub3B0aW9uc30pID0+ICh7Li4ub3B0aW9ucywgZW5jb2Rpbmc6ICdidWZmZXInLCBtYXhCdWZmZXI6IGdldE1heEJ1ZmZlclN5bmMobWF4QnVmZmVyKX0pO1xuXG5jb25zdCBnZXRTeW5jUmVzdWx0ID0gKHtlcnJvciwgZXhpdENvZGUsIHNpZ25hbCwgdGltZWRPdXQsIGlzTWF4QnVmZmVyLCBzdGRpbywgYWxsLCBvcHRpb25zLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lfSkgPT4gZXJyb3IgPT09IHVuZGVmaW5lZFxuXHQ/IG1ha2VTdWNjZXNzUmVzdWx0KHtcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQ6IFtdLFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KVxuXHQ6IG1ha2VFcnJvcih7XG5cdFx0ZXJyb3IsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHR0aW1lZE91dCxcblx0XHRpc0NhbmNlbGVkOiBmYWxzZSxcblx0XHRpc0dyYWNlZnVsbHlDYW5jZWxlZDogZmFsc2UsXG5cdFx0aXNNYXhCdWZmZXIsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZDogZmFsc2UsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQ6IFtdLFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdGlzU3luYzogdHJ1ZSxcblx0fSk7XG4iLCAiaW1wb3J0IHtvbmNlLCBvbn0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtcblx0dmFsaWRhdGVJcGNNZXRob2QsXG5cdHRocm93T25FYXJseURpc2Nvbm5lY3QsXG5cdGRpc2Nvbm5lY3QsXG5cdGdldFN0cmljdFJlc3BvbnNlRXJyb3IsXG59IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQge2dldElwY0VtaXR0ZXIsIGlzQ29ubmVjdGVkfSBmcm9tICcuL2ZvcndhcmQuanMnO1xuaW1wb3J0IHthZGRSZWZlcmVuY2UsIHJlbW92ZVJlZmVyZW5jZX0gZnJvbSAnLi9yZWZlcmVuY2UuanMnO1xuXG4vLyBMaWtlIGBbc3ViXXByb2Nlc3Mub25jZSgnbWVzc2FnZScpYCBidXQgcHJvbWlzZS1iYXNlZFxuZXhwb3J0IGNvbnN0IGdldE9uZU1lc3NhZ2UgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSwge3JlZmVyZW5jZSA9IHRydWUsIGZpbHRlcn0gPSB7fSkgPT4ge1xuXHR2YWxpZGF0ZUlwY01ldGhvZCh7XG5cdFx0bWV0aG9kTmFtZTogJ2dldE9uZU1lc3NhZ2UnLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGMsXG5cdFx0aXNDb25uZWN0ZWQ6IGlzQ29ubmVjdGVkKGFueVByb2Nlc3MpLFxuXHR9KTtcblxuXHRyZXR1cm4gZ2V0T25lTWVzc2FnZUFzeW5jKHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGZpbHRlcixcblx0XHRyZWZlcmVuY2UsXG5cdH0pO1xufTtcblxuY29uc3QgZ2V0T25lTWVzc2FnZUFzeW5jID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGZpbHRlciwgcmVmZXJlbmNlfSkgPT4ge1xuXHRhZGRSZWZlcmVuY2UoY2hhbm5lbCwgcmVmZXJlbmNlKTtcblx0Y29uc3QgaXBjRW1pdHRlciA9IGdldElwY0VtaXR0ZXIoYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzKTtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdGdldE1lc3NhZ2UoaXBjRW1pdHRlciwgZmlsdGVyLCBjb250cm9sbGVyKSxcblx0XHRcdHRocm93T25EaXNjb25uZWN0KGlwY0VtaXR0ZXIsIGlzU3VicHJvY2VzcywgY29udHJvbGxlciksXG5cdFx0XHR0aHJvd09uU3RyaWN0RXJyb3IoaXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCBjb250cm9sbGVyKSxcblx0XHRdKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRkaXNjb25uZWN0KGFueVByb2Nlc3MpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHRyZW1vdmVSZWZlcmVuY2UoY2hhbm5lbCwgcmVmZXJlbmNlKTtcblx0fVxufTtcblxuY29uc3QgZ2V0TWVzc2FnZSA9IGFzeW5jIChpcGNFbWl0dGVyLCBmaWx0ZXIsIHtzaWduYWx9KSA9PiB7XG5cdGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IFttZXNzYWdlXSA9IGF3YWl0IG9uY2UoaXBjRW1pdHRlciwgJ21lc3NhZ2UnLCB7c2lnbmFsfSk7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH1cblxuXHRmb3IgYXdhaXQgKGNvbnN0IFttZXNzYWdlXSBvZiBvbihpcGNFbWl0dGVyLCAnbWVzc2FnZScsIHtzaWduYWx9KSkge1xuXHRcdGlmIChmaWx0ZXIobWVzc2FnZSkpIHtcblx0XHRcdHJldHVybiBtZXNzYWdlO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgdGhyb3dPbkRpc2Nvbm5lY3QgPSBhc3luYyAoaXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCB7c2lnbmFsfSkgPT4ge1xuXHRhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdkaXNjb25uZWN0Jywge3NpZ25hbH0pO1xuXHR0aHJvd09uRWFybHlEaXNjb25uZWN0KGlzU3VicHJvY2Vzcyk7XG59O1xuXG5jb25zdCB0aHJvd09uU3RyaWN0RXJyb3IgPSBhc3luYyAoaXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCB7c2lnbmFsfSkgPT4ge1xuXHRjb25zdCBbZXJyb3JdID0gYXdhaXQgb25jZShpcGNFbWl0dGVyLCAnc3RyaWN0OmVycm9yJywge3NpZ25hbH0pO1xuXHR0aHJvdyBnZXRTdHJpY3RSZXNwb25zZUVycm9yKGVycm9yLCBpc1N1YnByb2Nlc3MpO1xufTtcbiIsICJpbXBvcnQge29uY2UsIG9ufSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge3ZhbGlkYXRlSXBjTWV0aG9kLCBkaXNjb25uZWN0LCBnZXRTdHJpY3RSZXNwb25zZUVycm9yfSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHtnZXRJcGNFbWl0dGVyLCBpc0Nvbm5lY3RlZH0gZnJvbSAnLi9mb3J3YXJkLmpzJztcbmltcG9ydCB7YWRkUmVmZXJlbmNlLCByZW1vdmVSZWZlcmVuY2V9IGZyb20gJy4vcmVmZXJlbmNlLmpzJztcblxuLy8gTGlrZSBgW3N1Yl1wcm9jZXNzLm9uKCdtZXNzYWdlJylgIGJ1dCBwcm9taXNlLWJhc2VkXG5leHBvcnQgY29uc3QgZ2V0RWFjaE1lc3NhZ2UgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSwge3JlZmVyZW5jZSA9IHRydWV9ID0ge30pID0+IGxvb3BPbk1lc3NhZ2VzKHtcblx0YW55UHJvY2Vzcyxcblx0Y2hhbm5lbCxcblx0aXNTdWJwcm9jZXNzLFxuXHRpcGMsXG5cdHNob3VsZEF3YWl0OiAhaXNTdWJwcm9jZXNzLFxuXHRyZWZlcmVuY2UsXG59KTtcblxuLy8gU2FtZSBidXQgdXNlZCBpbnRlcm5hbGx5XG5leHBvcnQgY29uc3QgbG9vcE9uTWVzc2FnZXMgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjLCBzaG91bGRBd2FpdCwgcmVmZXJlbmNlfSkgPT4ge1xuXHR2YWxpZGF0ZUlwY01ldGhvZCh7XG5cdFx0bWV0aG9kTmFtZTogJ2dldEVhY2hNZXNzYWdlJyxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHRcdGlzQ29ubmVjdGVkOiBpc0Nvbm5lY3RlZChhbnlQcm9jZXNzKSxcblx0fSk7XG5cblx0YWRkUmVmZXJlbmNlKGNoYW5uZWwsIHJlZmVyZW5jZSk7XG5cdGNvbnN0IGlwY0VtaXR0ZXIgPSBnZXRJcGNFbWl0dGVyKGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdGNvbnN0IHN0YXRlID0ge307XG5cdHN0b3BPbkRpc2Nvbm5lY3QoYW55UHJvY2VzcywgaXBjRW1pdHRlciwgY29udHJvbGxlcik7XG5cdGFib3J0T25TdHJpY3RFcnJvcih7XG5cdFx0aXBjRW1pdHRlcixcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0Y29udHJvbGxlcixcblx0XHRzdGF0ZSxcblx0fSk7XG5cdHJldHVybiBpdGVyYXRlT25NZXNzYWdlcyh7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlwY0VtaXR0ZXIsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdHNob3VsZEF3YWl0LFxuXHRcdGNvbnRyb2xsZXIsXG5cdFx0c3RhdGUsXG5cdFx0cmVmZXJlbmNlLFxuXHR9KTtcbn07XG5cbmNvbnN0IHN0b3BPbkRpc2Nvbm5lY3QgPSBhc3luYyAoYW55UHJvY2VzcywgaXBjRW1pdHRlciwgY29udHJvbGxlcikgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IG9uY2UoaXBjRW1pdHRlciwgJ2Rpc2Nvbm5lY3QnLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pO1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0fSBjYXRjaCB7fVxufTtcblxuY29uc3QgYWJvcnRPblN0cmljdEVycm9yID0gYXN5bmMgKHtpcGNFbWl0dGVyLCBpc1N1YnByb2Nlc3MsIGNvbnRyb2xsZXIsIHN0YXRlfSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IFtlcnJvcl0gPSBhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdzdHJpY3Q6ZXJyb3InLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pO1xuXHRcdHN0YXRlLmVycm9yID0gZ2V0U3RyaWN0UmVzcG9uc2VFcnJvcihlcnJvciwgaXNTdWJwcm9jZXNzKTtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH0gY2F0Y2gge31cbn07XG5cbmNvbnN0IGl0ZXJhdGVPbk1lc3NhZ2VzID0gYXN5bmMgZnVuY3Rpb24gKiAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlwY0VtaXR0ZXIsIGlzU3VicHJvY2Vzcywgc2hvdWxkQXdhaXQsIGNvbnRyb2xsZXIsIHN0YXRlLCByZWZlcmVuY2V9KSB7XG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBbbWVzc2FnZV0gb2Ygb24oaXBjRW1pdHRlciwgJ21lc3NhZ2UnLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pKSB7XG5cdFx0XHR0aHJvd0lmU3RyaWN0RXJyb3Ioc3RhdGUpO1xuXHRcdFx0eWllbGQgbWVzc2FnZTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHRocm93SWZTdHJpY3RFcnJvcihzdGF0ZSk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdHJlbW92ZVJlZmVyZW5jZShjaGFubmVsLCByZWZlcmVuY2UpO1xuXG5cdFx0aWYgKCFpc1N1YnByb2Nlc3MpIHtcblx0XHRcdGRpc2Nvbm5lY3QoYW55UHJvY2Vzcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3VsZEF3YWl0KSB7XG5cdFx0XHRhd2FpdCBhbnlQcm9jZXNzO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgdGhyb3dJZlN0cmljdEVycm9yID0gKHtlcnJvcn0pID0+IHtcblx0aWYgKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7c2VuZE1lc3NhZ2V9IGZyb20gJy4vc2VuZC5qcyc7XG5pbXBvcnQge2dldE9uZU1lc3NhZ2V9IGZyb20gJy4vZ2V0LW9uZS5qcyc7XG5pbXBvcnQge2dldEVhY2hNZXNzYWdlfSBmcm9tICcuL2dldC1lYWNoLmpzJztcbmltcG9ydCB7Z2V0Q2FuY2VsU2lnbmFsfSBmcm9tICcuL2dyYWNlZnVsLmpzJztcblxuLy8gQWRkIHByb21pc2UtYmFzZWQgSVBDIG1ldGhvZHMgaW4gY3VycmVudCBwcm9jZXNzXG5leHBvcnQgY29uc3QgYWRkSXBjTWV0aG9kcyA9IChzdWJwcm9jZXNzLCB7aXBjfSkgPT4ge1xuXHRPYmplY3QuYXNzaWduKHN1YnByb2Nlc3MsIGdldElwY01ldGhvZHMoc3VicHJvY2VzcywgZmFsc2UsIGlwYykpO1xufTtcblxuLy8gR2V0IHByb21pc2UtYmFzZWQgSVBDIGluIHRoZSBzdWJwcm9jZXNzXG5leHBvcnQgY29uc3QgZ2V0SXBjRXhwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCBhbnlQcm9jZXNzID0gcHJvY2Vzcztcblx0Y29uc3QgaXNTdWJwcm9jZXNzID0gdHJ1ZTtcblx0Y29uc3QgaXBjID0gcHJvY2Vzcy5jaGFubmVsICE9PSB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIHtcblx0XHQuLi5nZXRJcGNNZXRob2RzKGFueVByb2Nlc3MsIGlzU3VicHJvY2VzcywgaXBjKSxcblx0XHRnZXRDYW5jZWxTaWduYWw6IGdldENhbmNlbFNpZ25hbC5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdFx0YW55UHJvY2Vzcyxcblx0XHRcdGNoYW5uZWw6IGFueVByb2Nlc3MuY2hhbm5lbCxcblx0XHRcdGlzU3VicHJvY2Vzcyxcblx0XHRcdGlwYyxcblx0XHR9KSxcblx0fTtcbn07XG5cbi8vIFJldHJpZXZlIHRoZSBgaXBjYCBzaGFyZWQgYnkgYm90aCB0aGUgY3VycmVudCBwcm9jZXNzIGFuZCB0aGUgc3VicHJvY2Vzc1xuY29uc3QgZ2V0SXBjTWV0aG9kcyA9IChhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MsIGlwYykgPT4gKHtcblx0c2VuZE1lc3NhZ2U6IHNlbmRNZXNzYWdlLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsOiBhbnlQcm9jZXNzLmNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0fSksXG5cdGdldE9uZU1lc3NhZ2U6IGdldE9uZU1lc3NhZ2UuYmluZCh1bmRlZmluZWQsIHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWw6IGFueVByb2Nlc3MuY2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHR9KSxcblx0Z2V0RWFjaE1lc3NhZ2U6IGdldEVhY2hNZXNzYWdlLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsOiBhbnlQcm9jZXNzLmNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0fSksXG59KTtcbiIsICJpbXBvcnQge0NoaWxkUHJvY2Vzc30gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7XG5cdFBhc3NUaHJvdWdoLFxuXHRSZWFkYWJsZSxcblx0V3JpdGFibGUsXG5cdER1cGxleCxcbn0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtjbGVhbnVwQ3VzdG9tU3RyZWFtc30gZnJvbSAnLi4vc3RkaW8vaGFuZGxlLmpzJztcbmltcG9ydCB7bWFrZUVhcmx5RXJyb3J9IGZyb20gJy4vcmVzdWx0LmpzJztcbmltcG9ydCB7aGFuZGxlUmVzdWx0fSBmcm9tICcuL3JlamVjdC5qcyc7XG5cbi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgZmFpbHMgdG8gc3Bhd24uXG4vLyBXZSBlbnN1cmUgdGhlIHJldHVybmVkIGVycm9yIGlzIGFsd2F5cyBib3RoIGEgcHJvbWlzZSBhbmQgYSBzdWJwcm9jZXNzLlxuZXhwb3J0IGNvbnN0IGhhbmRsZUVhcmx5RXJyb3IgPSAoe2Vycm9yLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgZmlsZURlc2NyaXB0b3JzLCBvcHRpb25zLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvfSkgPT4ge1xuXHRjbGVhbnVwQ3VzdG9tU3RyZWFtcyhmaWxlRGVzY3JpcHRvcnMpO1xuXG5cdGNvbnN0IHN1YnByb2Nlc3MgPSBuZXcgQ2hpbGRQcm9jZXNzKCk7XG5cdGNyZWF0ZUR1bW15U3RyZWFtcyhzdWJwcm9jZXNzLCBmaWxlRGVzY3JpcHRvcnMpO1xuXHRPYmplY3QuYXNzaWduKHN1YnByb2Nlc3MsIHtyZWFkYWJsZSwgd3JpdGFibGUsIGR1cGxleH0pO1xuXG5cdGNvbnN0IGVhcmx5RXJyb3IgPSBtYWtlRWFybHlFcnJvcih7XG5cdFx0ZXJyb3IsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0b3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdFx0aXNTeW5jOiBmYWxzZSxcblx0fSk7XG5cdGNvbnN0IHByb21pc2UgPSBoYW5kbGVEdW1teVByb21pc2UoZWFybHlFcnJvciwgdmVyYm9zZUluZm8sIG9wdGlvbnMpO1xuXHRyZXR1cm4ge3N1YnByb2Nlc3MsIHByb21pc2V9O1xufTtcblxuY29uc3QgY3JlYXRlRHVtbXlTdHJlYW1zID0gKHN1YnByb2Nlc3MsIGZpbGVEZXNjcmlwdG9ycykgPT4ge1xuXHRjb25zdCBzdGRpbiA9IGNyZWF0ZUR1bW15U3RyZWFtKCk7XG5cdGNvbnN0IHN0ZG91dCA9IGNyZWF0ZUR1bW15U3RyZWFtKCk7XG5cdGNvbnN0IHN0ZGVyciA9IGNyZWF0ZUR1bW15U3RyZWFtKCk7XG5cdGNvbnN0IGV4dHJhU3RkaW8gPSBBcnJheS5mcm9tKHtsZW5ndGg6IGZpbGVEZXNjcmlwdG9ycy5sZW5ndGggLSAzfSwgY3JlYXRlRHVtbXlTdHJlYW0pO1xuXHRjb25zdCBhbGwgPSBjcmVhdGVEdW1teVN0cmVhbSgpO1xuXHRjb25zdCBzdGRpbyA9IFtzdGRpbiwgc3Rkb3V0LCBzdGRlcnIsIC4uLmV4dHJhU3RkaW9dO1xuXHRPYmplY3QuYXNzaWduKHN1YnByb2Nlc3MsIHtcblx0XHRzdGRpbixcblx0XHRzdGRvdXQsXG5cdFx0c3RkZXJyLFxuXHRcdGFsbCxcblx0XHRzdGRpbyxcblx0fSk7XG59O1xuXG5jb25zdCBjcmVhdGVEdW1teVN0cmVhbSA9ICgpID0+IHtcblx0Y29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdHN0cmVhbS5lbmQoKTtcblx0cmV0dXJuIHN0cmVhbTtcbn07XG5cbmNvbnN0IHJlYWRhYmxlID0gKCkgPT4gbmV3IFJlYWRhYmxlKHtyZWFkKCkge319KTtcbmNvbnN0IHdyaXRhYmxlID0gKCkgPT4gbmV3IFdyaXRhYmxlKHt3cml0ZSgpIHt9fSk7XG5jb25zdCBkdXBsZXggPSAoKSA9PiBuZXcgRHVwbGV4KHtyZWFkKCkge30sIHdyaXRlKCkge319KTtcblxuY29uc3QgaGFuZGxlRHVtbXlQcm9taXNlID0gYXN5bmMgKGVycm9yLCB2ZXJib3NlSW5mbywgb3B0aW9ucykgPT4gaGFuZGxlUmVzdWx0KGVycm9yLCB2ZXJib3NlSW5mbywgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHtjcmVhdGVSZWFkU3RyZWFtLCBjcmVhdGVXcml0ZVN0cmVhbX0gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQge0J1ZmZlcn0gZnJvbSAnbm9kZTpidWZmZXInO1xuaW1wb3J0IHtSZWFkYWJsZSwgV3JpdGFibGUsIER1cGxleH0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtnZW5lcmF0b3JUb1N0cmVhbX0gZnJvbSAnLi4vdHJhbnNmb3JtL2dlbmVyYXRvci5qcyc7XG5pbXBvcnQge2hhbmRsZVN0ZGlvfSBmcm9tICcuL2hhbmRsZS5qcyc7XG5pbXBvcnQge1RZUEVfVE9fTUVTU0FHRX0gZnJvbSAnLi90eXBlLmpzJztcblxuLy8gSGFuZGxlIGBpbnB1dGAsIGBpbnB1dEZpbGVgLCBgc3RkaW5gLCBgc3Rkb3V0YCBhbmQgYHN0ZGVycmAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBhc3luYyBtb2RlXG5leHBvcnQgY29uc3QgaGFuZGxlU3RkaW9Bc3luYyA9IChvcHRpb25zLCB2ZXJib3NlSW5mbykgPT4gaGFuZGxlU3RkaW8oYWRkUHJvcGVydGllc0FzeW5jLCBvcHRpb25zLCB2ZXJib3NlSW5mbywgZmFsc2UpO1xuXG5jb25zdCBmb3JiaWRkZW5JZkFzeW5jID0gKHt0eXBlLCBvcHRpb25OYW1lfSkgPT4ge1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24gY2Fubm90IGJlICR7VFlQRV9UT19NRVNTQUdFW3R5cGVdfS5gKTtcbn07XG5cbi8vIENyZWF0ZSBzdHJlYW1zIHVzZWQgaW50ZXJuYWxseSBmb3IgcGlwaW5nIHdoZW4gdXNpbmcgc3BlY2lmaWMgdmFsdWVzIGZvciB0aGUgYHN0ZCpgIG9wdGlvbnMsIGluIGFzeW5jIG1vZGUuXG4vLyBGb3IgZXhhbXBsZSwgYHN0ZG91dDoge2ZpbGV9YCBjcmVhdGVzIGEgZmlsZSBzdHJlYW0sIHdoaWNoIGlzIHBpcGVkIGZyb20vdG8uXG5jb25zdCBhZGRQcm9wZXJ0aWVzID0ge1xuXHRmaWxlTnVtYmVyOiBmb3JiaWRkZW5JZkFzeW5jLFxuXHRnZW5lcmF0b3I6IGdlbmVyYXRvclRvU3RyZWFtLFxuXHRhc3luY0dlbmVyYXRvcjogZ2VuZXJhdG9yVG9TdHJlYW0sXG5cdG5vZGVTdHJlYW06ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogdmFsdWV9KSxcblx0d2ViVHJhbnNmb3JtKHt2YWx1ZToge3RyYW5zZm9ybSwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9fSkge1xuXHRcdGNvbnN0IG9iamVjdE1vZGUgPSB3cml0YWJsZU9iamVjdE1vZGUgfHwgcmVhZGFibGVPYmplY3RNb2RlO1xuXHRcdGNvbnN0IHN0cmVhbSA9IER1cGxleC5mcm9tV2ViKHRyYW5zZm9ybSwge29iamVjdE1vZGV9KTtcblx0XHRyZXR1cm4ge3N0cmVhbX07XG5cdH0sXG5cdGR1cGxleDogKHt2YWx1ZToge3RyYW5zZm9ybX19KSA9PiAoe3N0cmVhbTogdHJhbnNmb3JtfSksXG5cdG5hdGl2ZSgpIHt9LFxufTtcblxuY29uc3QgYWRkUHJvcGVydGllc0FzeW5jID0ge1xuXHRpbnB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBjcmVhdGVSZWFkU3RyZWFtKHZhbHVlKX0pLFxuXHRcdGZpbGVQYXRoOiAoe3ZhbHVlOiB7ZmlsZX19KSA9PiAoe3N0cmVhbTogY3JlYXRlUmVhZFN0cmVhbShmaWxlKX0pLFxuXHRcdHdlYlN0cmVhbTogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tV2ViKHZhbHVlKX0pLFxuXHRcdGl0ZXJhYmxlOiAoe3ZhbHVlfSkgPT4gKHtzdHJlYW06IFJlYWRhYmxlLmZyb20odmFsdWUpfSksXG5cdFx0YXN5bmNJdGVyYWJsZTogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tKHZhbHVlKX0pLFxuXHRcdHN0cmluZzogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tKHZhbHVlKX0pLFxuXHRcdHVpbnQ4QXJyYXk6ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogUmVhZGFibGUuZnJvbShCdWZmZXIuZnJvbSh2YWx1ZSkpfSksXG5cdH0sXG5cdG91dHB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBjcmVhdGVXcml0ZVN0cmVhbSh2YWx1ZSl9KSxcblx0XHRmaWxlUGF0aDogKHt2YWx1ZToge2ZpbGUsIGFwcGVuZH19KSA9PiAoe3N0cmVhbTogY3JlYXRlV3JpdGVTdHJlYW0oZmlsZSwgYXBwZW5kID8ge2ZsYWdzOiAnYSd9IDoge30pfSksXG5cdFx0d2ViU3RyZWFtOiAoe3ZhbHVlfSkgPT4gKHtzdHJlYW06IFdyaXRhYmxlLmZyb21XZWIodmFsdWUpfSksXG5cdFx0aXRlcmFibGU6IGZvcmJpZGRlbklmQXN5bmMsXG5cdFx0YXN5bmNJdGVyYWJsZTogZm9yYmlkZGVuSWZBc3luYyxcblx0XHRzdHJpbmc6IGZvcmJpZGRlbklmQXN5bmMsXG5cdFx0dWludDhBcnJheTogZm9yYmlkZGVuSWZBc3luYyxcblx0fSxcbn07XG4iLCAiaW1wb3J0IHtvbiwgb25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtQYXNzVGhyb3VnaCBhcyBQYXNzVGhyb3VnaFN0cmVhbSwgZ2V0RGVmYXVsdEhpZ2hXYXRlck1hcmt9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VTdHJlYW1zKHN0cmVhbXMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KHN0cmVhbXMpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYW4gYXJyYXksIGdvdCBcXGAke3R5cGVvZiBzdHJlYW1zfVxcYC5gKTtcblx0fVxuXG5cdGZvciAoY29uc3Qgc3RyZWFtIG9mIHN0cmVhbXMpIHtcblx0XHR2YWxpZGF0ZVN0cmVhbShzdHJlYW0pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0TW9kZSA9IHN0cmVhbXMuc29tZSgoe3JlYWRhYmxlT2JqZWN0TW9kZX0pID0+IHJlYWRhYmxlT2JqZWN0TW9kZSk7XG5cdGNvbnN0IGhpZ2hXYXRlck1hcmsgPSBnZXRIaWdoV2F0ZXJNYXJrKHN0cmVhbXMsIG9iamVjdE1vZGUpO1xuXHRjb25zdCBwYXNzVGhyb3VnaFN0cmVhbSA9IG5ldyBNZXJnZWRTdHJlYW0oe1xuXHRcdG9iamVjdE1vZGUsXG5cdFx0d3JpdGFibGVIaWdoV2F0ZXJNYXJrOiBoaWdoV2F0ZXJNYXJrLFxuXHRcdHJlYWRhYmxlSGlnaFdhdGVyTWFyazogaGlnaFdhdGVyTWFyayxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBzdHJlYW0gb2Ygc3RyZWFtcykge1xuXHRcdHBhc3NUaHJvdWdoU3RyZWFtLmFkZChzdHJlYW0pO1xuXHR9XG5cblx0cmV0dXJuIHBhc3NUaHJvdWdoU3RyZWFtO1xufVxuXG5jb25zdCBnZXRIaWdoV2F0ZXJNYXJrID0gKHN0cmVhbXMsIG9iamVjdE1vZGUpID0+IHtcblx0aWYgKHN0cmVhbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKG9iamVjdE1vZGUpO1xuXHR9XG5cblx0Y29uc3QgaGlnaFdhdGVyTWFya3MgPSBzdHJlYW1zXG5cdFx0LmZpbHRlcigoe3JlYWRhYmxlT2JqZWN0TW9kZX0pID0+IHJlYWRhYmxlT2JqZWN0TW9kZSA9PT0gb2JqZWN0TW9kZSlcblx0XHQubWFwKCh7cmVhZGFibGVIaWdoV2F0ZXJNYXJrfSkgPT4gcmVhZGFibGVIaWdoV2F0ZXJNYXJrKTtcblx0cmV0dXJuIE1hdGgubWF4KC4uLmhpZ2hXYXRlck1hcmtzKTtcbn07XG5cbmNsYXNzIE1lcmdlZFN0cmVhbSBleHRlbmRzIFBhc3NUaHJvdWdoU3RyZWFtIHtcblx0I3N0cmVhbXMgPSBuZXcgU2V0KFtdKTtcblx0I2VuZGVkID0gbmV3IFNldChbXSk7XG5cdCNhYm9ydGVkID0gbmV3IFNldChbXSk7XG5cdCNvbkZpbmlzaGVkO1xuXHQjdW5waXBlRXZlbnQgPSBTeW1ib2woJ3VucGlwZScpO1xuXHQjc3RyZWFtUHJvbWlzZXMgPSBuZXcgV2Vha01hcCgpO1xuXG5cdGFkZChzdHJlYW0pIHtcblx0XHR2YWxpZGF0ZVN0cmVhbShzdHJlYW0pO1xuXG5cdFx0aWYgKHRoaXMuI3N0cmVhbXMuaGFzKHN0cmVhbSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLiNzdHJlYW1zLmFkZChzdHJlYW0pO1xuXG5cdFx0dGhpcy4jb25GaW5pc2hlZCA/Pz0gb25NZXJnZWRTdHJlYW1GaW5pc2hlZCh0aGlzLCB0aGlzLiNzdHJlYW1zLCB0aGlzLiN1bnBpcGVFdmVudCk7XG5cdFx0Y29uc3Qgc3RyZWFtUHJvbWlzZSA9IGVuZFdoZW5TdHJlYW1zRG9uZSh7XG5cdFx0XHRwYXNzVGhyb3VnaFN0cmVhbTogdGhpcyxcblx0XHRcdHN0cmVhbSxcblx0XHRcdHN0cmVhbXM6IHRoaXMuI3N0cmVhbXMsXG5cdFx0XHRlbmRlZDogdGhpcy4jZW5kZWQsXG5cdFx0XHRhYm9ydGVkOiB0aGlzLiNhYm9ydGVkLFxuXHRcdFx0b25GaW5pc2hlZDogdGhpcy4jb25GaW5pc2hlZCxcblx0XHRcdHVucGlwZUV2ZW50OiB0aGlzLiN1bnBpcGVFdmVudCxcblx0XHR9KTtcblx0XHR0aGlzLiNzdHJlYW1Qcm9taXNlcy5zZXQoc3RyZWFtLCBzdHJlYW1Qcm9taXNlKTtcblxuXHRcdHN0cmVhbS5waXBlKHRoaXMsIHtlbmQ6IGZhbHNlfSk7XG5cdH1cblxuXHRhc3luYyByZW1vdmUoc3RyZWFtKSB7XG5cdFx0dmFsaWRhdGVTdHJlYW0oc3RyZWFtKTtcblxuXHRcdGlmICghdGhpcy4jc3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0cmVhbVByb21pc2UgPSB0aGlzLiNzdHJlYW1Qcm9taXNlcy5nZXQoc3RyZWFtKTtcblx0XHRpZiAoc3RyZWFtUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy4jc3RyZWFtUHJvbWlzZXMuZGVsZXRlKHN0cmVhbSk7XG5cblx0XHRzdHJlYW0udW5waXBlKHRoaXMpO1xuXHRcdGF3YWl0IHN0cmVhbVByb21pc2U7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuY29uc3Qgb25NZXJnZWRTdHJlYW1GaW5pc2hlZCA9IGFzeW5jIChwYXNzVGhyb3VnaFN0cmVhbSwgc3RyZWFtcywgdW5waXBlRXZlbnQpID0+IHtcblx0dXBkYXRlTWF4TGlzdGVuZXJzKHBhc3NUaHJvdWdoU3RyZWFtLCBQQVNTVEhST1VHSF9MSVNURU5FUlNfQ09VTlQpO1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdG9uTWVyZ2VkU3RyZWFtRW5kKHBhc3NUaHJvdWdoU3RyZWFtLCBjb250cm9sbGVyKSxcblx0XHRcdG9uSW5wdXRTdHJlYW1zVW5waXBlKHBhc3NUaHJvdWdoU3RyZWFtLCBzdHJlYW1zLCB1bnBpcGVFdmVudCwgY29udHJvbGxlciksXG5cdFx0XSk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgLVBBU1NUSFJPVUdIX0xJU1RFTkVSU19DT1VOVCk7XG5cdH1cbn07XG5cbmNvbnN0IG9uTWVyZ2VkU3RyZWFtRW5kID0gYXN5bmMgKHBhc3NUaHJvdWdoU3RyZWFtLCB7c2lnbmFsfSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKHBhc3NUaHJvdWdoU3RyZWFtLCB7c2lnbmFsLCBjbGVhbnVwOiB0cnVlfSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JPckFib3J0U3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtLCBlcnJvcik7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IG9uSW5wdXRTdHJlYW1zVW5waXBlID0gYXN5bmMgKHBhc3NUaHJvdWdoU3RyZWFtLCBzdHJlYW1zLCB1bnBpcGVFdmVudCwge3NpZ25hbH0pID0+IHtcblx0Zm9yIGF3YWl0IChjb25zdCBbdW5waXBlZFN0cmVhbV0gb2Ygb24ocGFzc1Rocm91Z2hTdHJlYW0sICd1bnBpcGUnLCB7c2lnbmFsfSkpIHtcblx0XHRpZiAoc3RyZWFtcy5oYXModW5waXBlZFN0cmVhbSkpIHtcblx0XHRcdHVucGlwZWRTdHJlYW0uZW1pdCh1bnBpcGVFdmVudCk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCB2YWxpZGF0ZVN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyZWFtPy5waXBlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSByZWFkYWJsZSBzdHJlYW0sIGdvdDogXFxgJHt0eXBlb2Ygc3RyZWFtfVxcYC5gKTtcblx0fVxufTtcblxuY29uc3QgZW5kV2hlblN0cmVhbXNEb25lID0gYXN5bmMgKHtwYXNzVGhyb3VnaFN0cmVhbSwgc3RyZWFtLCBzdHJlYW1zLCBlbmRlZCwgYWJvcnRlZCwgb25GaW5pc2hlZCwgdW5waXBlRXZlbnR9KSA9PiB7XG5cdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgUEFTU1RIUk9VR0hfTElTVEVORVJTX1BFUl9TVFJFQU0pO1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdGFmdGVyTWVyZ2VkU3RyZWFtRmluaXNoZWQob25GaW5pc2hlZCwgc3RyZWFtLCBjb250cm9sbGVyKSxcblx0XHRcdG9uSW5wdXRTdHJlYW1FbmQoe1xuXHRcdFx0XHRwYXNzVGhyb3VnaFN0cmVhbSxcblx0XHRcdFx0c3RyZWFtLFxuXHRcdFx0XHRzdHJlYW1zLFxuXHRcdFx0XHRlbmRlZCxcblx0XHRcdFx0YWJvcnRlZCxcblx0XHRcdFx0Y29udHJvbGxlcixcblx0XHRcdH0pLFxuXHRcdFx0b25JbnB1dFN0cmVhbVVucGlwZSh7XG5cdFx0XHRcdHN0cmVhbSxcblx0XHRcdFx0c3RyZWFtcyxcblx0XHRcdFx0ZW5kZWQsXG5cdFx0XHRcdGFib3J0ZWQsXG5cdFx0XHRcdHVucGlwZUV2ZW50LFxuXHRcdFx0XHRjb250cm9sbGVyLFxuXHRcdFx0fSksXG5cdFx0XSk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgLVBBU1NUSFJPVUdIX0xJU1RFTkVSU19QRVJfU1RSRUFNKTtcblx0fVxuXG5cdGlmIChzdHJlYW1zLnNpemUgPiAwICYmIHN0cmVhbXMuc2l6ZSA9PT0gZW5kZWQuc2l6ZSArIGFib3J0ZWQuc2l6ZSkge1xuXHRcdGlmIChlbmRlZC5zaXplID09PSAwICYmIGFib3J0ZWQuc2l6ZSA+IDApIHtcblx0XHRcdGFib3J0U3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5kU3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtKTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IGFmdGVyTWVyZ2VkU3RyZWFtRmluaXNoZWQgPSBhc3luYyAob25GaW5pc2hlZCwgc3RyZWFtLCB7c2lnbmFsfSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IG9uRmluaXNoZWQ7XG5cdFx0aWYgKCFzaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0YWJvcnRTdHJlYW0oc3RyZWFtKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKCFzaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0ZXJyb3JPckFib3J0U3RyZWFtKHN0cmVhbSwgZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgb25JbnB1dFN0cmVhbUVuZCA9IGFzeW5jICh7cGFzc1Rocm91Z2hTdHJlYW0sIHN0cmVhbSwgc3RyZWFtcywgZW5kZWQsIGFib3J0ZWQsIGNvbnRyb2xsZXI6IHtzaWduYWx9fSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKHN0cmVhbSwge1xuXHRcdFx0c2lnbmFsLFxuXHRcdFx0Y2xlYW51cDogdHJ1ZSxcblx0XHRcdHJlYWRhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdGlmIChzdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG5cdFx0XHRlbmRlZC5hZGQoc3RyZWFtKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKHNpZ25hbC5hYm9ydGVkIHx8ICFzdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGlzQWJvcnRFcnJvcihlcnJvcikpIHtcblx0XHRcdGFib3J0ZWQuYWRkKHN0cmVhbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9yU3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtLCBlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBvbklucHV0U3RyZWFtVW5waXBlID0gYXN5bmMgKHtzdHJlYW0sIHN0cmVhbXMsIGVuZGVkLCBhYm9ydGVkLCB1bnBpcGVFdmVudCwgY29udHJvbGxlcjoge3NpZ25hbH19KSA9PiB7XG5cdGF3YWl0IG9uY2Uoc3RyZWFtLCB1bnBpcGVFdmVudCwge3NpZ25hbH0pO1xuXG5cdGlmICghc3RyZWFtLnJlYWRhYmxlKSB7XG5cdFx0cmV0dXJuIG9uY2Uoc2lnbmFsLCAnYWJvcnQnLCB7c2lnbmFsfSk7XG5cdH1cblxuXHRzdHJlYW1zLmRlbGV0ZShzdHJlYW0pO1xuXHRlbmRlZC5kZWxldGUoc3RyZWFtKTtcblx0YWJvcnRlZC5kZWxldGUoc3RyZWFtKTtcbn07XG5cbmNvbnN0IGVuZFN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdGlmIChzdHJlYW0ud3JpdGFibGUpIHtcblx0XHRzdHJlYW0uZW5kKCk7XG5cdH1cbn07XG5cbmNvbnN0IGVycm9yT3JBYm9ydFN0cmVhbSA9IChzdHJlYW0sIGVycm9yKSA9PiB7XG5cdGlmIChpc0Fib3J0RXJyb3IoZXJyb3IpKSB7XG5cdFx0YWJvcnRTdHJlYW0oc3RyZWFtKTtcblx0fSBlbHNlIHtcblx0XHRlcnJvclN0cmVhbShzdHJlYW0sIGVycm9yKTtcblx0fVxufTtcblxuLy8gVGhpcyBpcyB0aGUgZXJyb3IgdGhyb3duIGJ5IGBmaW5pc2hlZCgpYCBvbiBgc3RyZWFtLmRlc3Ryb3koKWBcbmNvbnN0IGlzQWJvcnRFcnJvciA9IGVycm9yID0+IGVycm9yPy5jb2RlID09PSAnRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UnO1xuXG5jb25zdCBhYm9ydFN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdGlmIChzdHJlYW0ucmVhZGFibGUgfHwgc3RyZWFtLndyaXRhYmxlKSB7XG5cdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0fVxufTtcblxuLy8gYHN0cmVhbS5kZXN0cm95KGVycm9yKWAgY3Jhc2hlcyB0aGUgcHJvY2VzcyB3aXRoIGB1bmNhdWdodEV4Y2VwdGlvbmAgaWYgbm8gYGVycm9yYCBldmVudCBsaXN0ZW5lciBleGlzdHMgb24gYHN0cmVhbWAuXG4vLyBXZSB0YWtlIGNhcmUgb2YgZXJyb3IgaGFuZGxpbmcgb24gdXNlciBiZWhhbGYsIHNvIHdlIGRvIG5vdCB3YW50IHRoaXMgdG8gaGFwcGVuLlxuY29uc3QgZXJyb3JTdHJlYW0gPSAoc3RyZWFtLCBlcnJvcikgPT4ge1xuXHRpZiAoIXN0cmVhbS5kZXN0cm95ZWQpIHtcblx0XHRzdHJlYW0ub25jZSgnZXJyb3InLCBub29wKTtcblx0XHRzdHJlYW0uZGVzdHJveShlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgdXBkYXRlTWF4TGlzdGVuZXJzID0gKHBhc3NUaHJvdWdoU3RyZWFtLCBpbmNyZW1lbnQpID0+IHtcblx0Y29uc3QgbWF4TGlzdGVuZXJzID0gcGFzc1Rocm91Z2hTdHJlYW0uZ2V0TWF4TGlzdGVuZXJzKCk7XG5cdGlmIChtYXhMaXN0ZW5lcnMgIT09IDAgJiYgbWF4TGlzdGVuZXJzICE9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcblx0XHRwYXNzVGhyb3VnaFN0cmVhbS5zZXRNYXhMaXN0ZW5lcnMobWF4TGlzdGVuZXJzICsgaW5jcmVtZW50KTtcblx0fVxufTtcblxuLy8gTnVtYmVyIG9mIHRpbWVzIGBwYXNzVGhyb3VnaFN0cmVhbS5vbigpYCBpcyBjYWxsZWQgcmVnYXJkbGVzcyBvZiBzdHJlYW1zOlxuLy8gIC0gb25jZSBkdWUgdG8gYGZpbmlzaGVkKHBhc3NUaHJvdWdoU3RyZWFtKWBcbi8vICAtIG9uY2UgZHVlIHRvIGBvbihwYXNzVGhyb3VnaFN0cmVhbSlgXG5jb25zdCBQQVNTVEhST1VHSF9MSVNURU5FUlNfQ09VTlQgPSAyO1xuXG4vLyBOdW1iZXIgb2YgdGltZXMgYHBhc3NUaHJvdWdoU3RyZWFtLm9uKClgIGlzIGNhbGxlZCBwZXIgc3RyZWFtOlxuLy8gIC0gb25jZSBkdWUgdG8gYHN0cmVhbS5waXBlKHBhc3NUaHJvdWdoU3RyZWFtKWBcbmNvbnN0IFBBU1NUSFJPVUdIX0xJU1RFTkVSU19QRVJfU1RSRUFNID0gMTtcbiIsICJpbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQge2lzU3RhbmRhcmRTdHJlYW19IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5cbi8vIFNpbWlsYXIgdG8gYFN0cmVhbS5waXBlbGluZShzb3VyY2UsIGRlc3RpbmF0aW9uKWAsIGJ1dCBkb2VzIG5vdCBkZXN0cm95IHN0YW5kYXJkIHN0cmVhbXNcbmV4cG9ydCBjb25zdCBwaXBlU3RyZWFtcyA9IChzb3VyY2UsIGRlc3RpbmF0aW9uKSA9PiB7XG5cdHNvdXJjZS5waXBlKGRlc3RpbmF0aW9uKTtcblx0b25Tb3VyY2VGaW5pc2goc291cmNlLCBkZXN0aW5hdGlvbik7XG5cdG9uRGVzdGluYXRpb25GaW5pc2goc291cmNlLCBkZXN0aW5hdGlvbik7XG59O1xuXG4vLyBgc291cmNlLnBpcGUoZGVzdGluYXRpb24pYCBtYWtlcyBgZGVzdGluYXRpb25gIGVuZCB3aGVuIGBzb3VyY2VgIGVuZHMuXG4vLyBCdXQgaXQgZG9lcyBub3QgcHJvcGFnYXRlIGFib3J0cyBvciBlcnJvcnMuIFRoaXMgZnVuY3Rpb24gZG9lcyBpdC5cbmNvbnN0IG9uU291cmNlRmluaXNoID0gYXN5bmMgKHNvdXJjZSwgZGVzdGluYXRpb24pID0+IHtcblx0aWYgKGlzU3RhbmRhcmRTdHJlYW0oc291cmNlKSB8fCBpc1N0YW5kYXJkU3RyZWFtKGRlc3RpbmF0aW9uKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluaXNoZWQoc291cmNlLCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZX0pO1xuXHR9IGNhdGNoIHt9XG5cblx0ZW5kRGVzdGluYXRpb25TdHJlYW0oZGVzdGluYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuZERlc3RpbmF0aW9uU3RyZWFtID0gZGVzdGluYXRpb24gPT4ge1xuXHRpZiAoZGVzdGluYXRpb24ud3JpdGFibGUpIHtcblx0XHRkZXN0aW5hdGlvbi5lbmQoKTtcblx0fVxufTtcblxuLy8gV2UgZG8gdGhlIHNhbWUgdGhpbmcgaW4gdGhlIG90aGVyIGRpcmVjdGlvbiBhcyB3ZWxsLlxuY29uc3Qgb25EZXN0aW5hdGlvbkZpbmlzaCA9IGFzeW5jIChzb3VyY2UsIGRlc3RpbmF0aW9uKSA9PiB7XG5cdGlmIChpc1N0YW5kYXJkU3RyZWFtKHNvdXJjZSkgfHwgaXNTdGFuZGFyZFN0cmVhbShkZXN0aW5hdGlvbikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKGRlc3RpbmF0aW9uLCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX0pO1xuXHR9IGNhdGNoIHt9XG5cblx0YWJvcnRTb3VyY2VTdHJlYW0oc291cmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhYm9ydFNvdXJjZVN0cmVhbSA9IHNvdXJjZSA9PiB7XG5cdGlmIChzb3VyY2UucmVhZGFibGUpIHtcblx0XHRzb3VyY2UuZGVzdHJveSgpO1xuXHR9XG59O1xuIiwgImltcG9ydCBtZXJnZVN0cmVhbXMgZnJvbSAnQHNpbmRyZXNvcmh1cy9tZXJnZS1zdHJlYW1zJztcbmltcG9ydCB7aXNTdGFuZGFyZFN0cmVhbX0gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcbmltcG9ydCB7aW5jcmVtZW50TWF4TGlzdGVuZXJzfSBmcm9tICcuLi91dGlscy9tYXgtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7cGlwZVN0cmVhbXN9IGZyb20gJy4vcGlwZWxpbmUuanMnO1xuXG4vLyBIYW5kbGUgYGlucHV0YCwgYGlucHV0RmlsZWAsIGBzdGRpbmAsIGBzdGRvdXRgIGFuZCBgc3RkZXJyYCBvcHRpb25zLCBhZnRlciBzcGF3bmluZywgaW4gYXN5bmMgbW9kZVxuLy8gV2hlbiBtdWx0aXBsZSBpbnB1dCBzdHJlYW1zIGFyZSB1c2VkLCB3ZSBtZXJnZSB0aGVtIHRvIGVuc3VyZSB0aGUgb3V0cHV0IHN0cmVhbSBlbmRzIG9ubHkgb25jZSBlYWNoIGlucHV0IHN0cmVhbSBoYXMgZW5kZWRcbmV4cG9ydCBjb25zdCBwaXBlT3V0cHV0QXN5bmMgPSAoc3VicHJvY2VzcywgZmlsZURlc2NyaXB0b3JzLCBjb250cm9sbGVyKSA9PiB7XG5cdGNvbnN0IHBpcGVHcm91cHMgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChjb25zdCBbZmROdW1iZXIsIHtzdGRpb0l0ZW1zLCBkaXJlY3Rpb259XSBvZiBPYmplY3QuZW50cmllcyhmaWxlRGVzY3JpcHRvcnMpKSB7XG5cdFx0Zm9yIChjb25zdCB7c3RyZWFtfSBvZiBzdGRpb0l0ZW1zLmZpbHRlcigoe3R5cGV9KSA9PiBUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpKSkge1xuXHRcdFx0cGlwZVRyYW5zZm9ybShzdWJwcm9jZXNzLCBzdHJlYW0sIGRpcmVjdGlvbiwgZmROdW1iZXIpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qge3N0cmVhbX0gb2Ygc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gIVRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpKSB7XG5cdFx0XHRwaXBlU3RkaW9JdGVtKHtcblx0XHRcdFx0c3VicHJvY2Vzcyxcblx0XHRcdFx0c3RyZWFtLFxuXHRcdFx0XHRkaXJlY3Rpb24sXG5cdFx0XHRcdGZkTnVtYmVyLFxuXHRcdFx0XHRwaXBlR3JvdXBzLFxuXHRcdFx0XHRjb250cm9sbGVyLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBbb3V0cHV0U3RyZWFtLCBpbnB1dFN0cmVhbXNdIG9mIHBpcGVHcm91cHMuZW50cmllcygpKSB7XG5cdFx0Y29uc3QgaW5wdXRTdHJlYW0gPSBpbnB1dFN0cmVhbXMubGVuZ3RoID09PSAxID8gaW5wdXRTdHJlYW1zWzBdIDogbWVyZ2VTdHJlYW1zKGlucHV0U3RyZWFtcyk7XG5cdFx0cGlwZVN0cmVhbXMoaW5wdXRTdHJlYW0sIG91dHB1dFN0cmVhbSk7XG5cdH1cbn07XG5cbi8vIFdoZW4gdXNpbmcgdHJhbnNmb3JtcywgYHN1YnByb2Nlc3Muc3RkaW58c3Rkb3V0fHN0ZGVycnxzdGRpb2AgaXMgZGlyZWN0bHkgbXV0YXRlZFxuY29uc3QgcGlwZVRyYW5zZm9ybSA9IChzdWJwcm9jZXNzLCBzdHJlYW0sIGRpcmVjdGlvbiwgZmROdW1iZXIpID0+IHtcblx0aWYgKGRpcmVjdGlvbiA9PT0gJ291dHB1dCcpIHtcblx0XHRwaXBlU3RyZWFtcyhzdWJwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXSwgc3RyZWFtKTtcblx0fSBlbHNlIHtcblx0XHRwaXBlU3RyZWFtcyhzdHJlYW0sIHN1YnByb2Nlc3Muc3RkaW9bZmROdW1iZXJdKTtcblx0fVxuXG5cdGNvbnN0IHN0cmVhbVByb3BlcnR5ID0gU1VCUFJPQ0VTU19TVFJFQU1fUFJPUEVSVElFU1tmZE51bWJlcl07XG5cdGlmIChzdHJlYW1Qcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c3VicHJvY2Vzc1tzdHJlYW1Qcm9wZXJ0eV0gPSBzdHJlYW07XG5cdH1cblxuXHRzdWJwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXSA9IHN0cmVhbTtcbn07XG5cbmNvbnN0IFNVQlBST0NFU1NfU1RSRUFNX1BST1BFUlRJRVMgPSBbJ3N0ZGluJywgJ3N0ZG91dCcsICdzdGRlcnInXTtcblxuLy8gTW9zdCBgc3RkKmAgb3B0aW9uIHZhbHVlcyBpbnZvbHZlIHBpcGluZyBgc3VicHJvY2Vzcy5zdGQqYCB0byBhIHN0cmVhbS5cbi8vIFRoZSBzdHJlYW0gaXMgZWl0aGVyIHBhc3NlZCBieSB0aGUgdXNlciBvciBjcmVhdGVkIGludGVybmFsbHkuXG5jb25zdCBwaXBlU3RkaW9JdGVtID0gKHtzdWJwcm9jZXNzLCBzdHJlYW0sIGRpcmVjdGlvbiwgZmROdW1iZXIsIHBpcGVHcm91cHMsIGNvbnRyb2xsZXJ9KSA9PiB7XG5cdGlmIChzdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNldFN0YW5kYXJkU3RyZWFtTWF4TGlzdGVuZXJzKHN0cmVhbSwgY29udHJvbGxlcik7XG5cblx0Y29uc3QgW2lucHV0U3RyZWFtLCBvdXRwdXRTdHJlYW1dID0gZGlyZWN0aW9uID09PSAnb3V0cHV0J1xuXHRcdD8gW3N0cmVhbSwgc3VicHJvY2Vzcy5zdGRpb1tmZE51bWJlcl1dXG5cdFx0OiBbc3VicHJvY2Vzcy5zdGRpb1tmZE51bWJlcl0sIHN0cmVhbV07XG5cdGNvbnN0IG91dHB1dFN0cmVhbXMgPSBwaXBlR3JvdXBzLmdldChpbnB1dFN0cmVhbSkgPz8gW107XG5cdHBpcGVHcm91cHMuc2V0KGlucHV0U3RyZWFtLCBbLi4ub3V0cHV0U3RyZWFtcywgb3V0cHV0U3RyZWFtXSk7XG59O1xuXG4vLyBNdWx0aXBsZSBzdWJwcm9jZXNzZXMgbWlnaHQgYmUgcGlwaW5nIGZyb20vdG8gYHByb2Nlc3Muc3RkKmAgYXQgdGhlIHNhbWUgdGltZS5cbi8vIFRoaXMgaXMgbm90IG5lY2Vzc2FyaWx5IGFuIGVycm9yIGFuZCBzaG91bGQgbm90IHByaW50IGEgYG1heExpc3RlbmVyc2Agd2FybmluZy5cbmNvbnN0IHNldFN0YW5kYXJkU3RyZWFtTWF4TGlzdGVuZXJzID0gKHN0cmVhbSwge3NpZ25hbH0pID0+IHtcblx0aWYgKGlzU3RhbmRhcmRTdHJlYW0oc3RyZWFtKSkge1xuXHRcdGluY3JlbWVudE1heExpc3RlbmVycyhzdHJlYW0sIE1BWF9MSVNURU5FUlNfSU5DUkVNRU5ULCBzaWduYWwpO1xuXHR9XG59O1xuXG4vLyBgc291cmNlLnBpcGUoZGVzdGluYXRpb24pYCBhZGRzIGF0IG1vc3QgMSBsaXN0ZW5lciBmb3IgZWFjaCBldmVudC5cbi8vIElmIGBzdGRpbmAgb3B0aW9uIGlzIGFuIGFycmF5LCB0aGUgdmFsdWVzIG1pZ2h0IGJlIGNvbWJpbmVkIHdpdGggYG1lcmdlLXN0cmVhbXNgLlxuLy8gVGhhdCBsaWJyYXJ5IGFsc28gbGlzdGVucyBmb3IgYHNvdXJjZWAgZW5kLCB3aGljaCBhZGRzIDEgbW9yZSBsaXN0ZW5lci5cbmNvbnN0IE1BWF9MSVNURU5FUlNfSU5DUkVNRU5UID0gMjtcbiIsICIvKipcbiAqIFRoaXMgaXMgbm90IHRoZSBzZXQgb2YgYWxsIHBvc3NpYmxlIHNpZ25hbHMuXG4gKlxuICogSXQgSVMsIGhvd2V2ZXIsIHRoZSBzZXQgb2YgYWxsIHNpZ25hbHMgdGhhdCB0cmlnZ2VyXG4gKiBhbiBleGl0IG9uIGVpdGhlciBMaW51eCBvciBCU0Qgc3lzdGVtcy4gIExpbnV4IGlzIGFcbiAqIHN1cGVyc2V0IG9mIHRoZSBzaWduYWwgbmFtZXMgc3VwcG9ydGVkIG9uIEJTRCwgYW5kXG4gKiB0aGUgdW5rbm93biBzaWduYWxzIGp1c3QgZmFpbCB0byByZWdpc3Rlciwgc28gd2UgY2FuXG4gKiBjYXRjaCB0aGF0IGVhc2lseSBlbm91Z2guXG4gKlxuICogV2luZG93cyBzaWduYWxzIGFyZSBhIGRpZmZlcmVudCBzZXQsIHNpbmNlIHRoZXJlIGFyZVxuICogc2lnbmFscyB0aGF0IHRlcm1pbmF0ZSBXaW5kb3dzIHByb2Nlc3NlcywgYnV0IGRvbid0XG4gKiB0ZXJtaW5hdGUgKG9yIGRvbid0IGV2ZW4gZXhpc3QpIG9uIFBvc2l4IHN5c3RlbXMuXG4gKlxuICogRG9uJ3QgYm90aGVyIHdpdGggU0lHS0lMTC4gIEl0J3MgdW5jYXRjaGFibGUsIHdoaWNoXG4gKiBtZWFucyB0aGF0IHdlIGNhbid0IGZpcmUgYW55IGNhbGxiYWNrcyBhbnl3YXkuXG4gKlxuICogSWYgYSB1c2VyIGRvZXMgaGFwcGVuIHRvIHJlZ2lzdGVyIGEgaGFuZGxlciBvbiBhIG5vbi1cbiAqIGZhdGFsIHNpZ25hbCBsaWtlIFNJR1dJTkNIIG9yIHNvbWV0aGluZywgYW5kIHRoZW5cbiAqIGV4aXQsIGl0J2xsIGVuZCB1cCBmaXJpbmcgYHByb2Nlc3MuZW1pdCgnZXhpdCcpYCwgc29cbiAqIHRoZSBoYW5kbGVyIHdpbGwgYmUgZmlyZWQgYW55d2F5LlxuICpcbiAqIFNJR0JVUywgU0lHRlBFLCBTSUdTRUdWIGFuZCBTSUdJTEwsIHdoZW4gbm90IHJhaXNlZFxuICogYXJ0aWZpY2lhbGx5LCBpbmhlcmVudGx5IGxlYXZlIHRoZSBwcm9jZXNzIGluIGFcbiAqIHN0YXRlIGZyb20gd2hpY2ggaXQgaXMgbm90IHNhZmUgdG8gdHJ5IGFuZCBlbnRlciBKU1xuICogbGlzdGVuZXJzLlxuICovXG5leHBvcnQgY29uc3Qgc2lnbmFsczogTm9kZUpTLlNpZ25hbHNbXSA9IFtdXG5zaWduYWxzLnB1c2goJ1NJR0hVUCcsICdTSUdJTlQnLCAnU0lHVEVSTScpXG5cbmlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG4gIHNpZ25hbHMucHVzaChcbiAgICAnU0lHQUxSTScsXG4gICAgJ1NJR0FCUlQnLFxuICAgICdTSUdWVEFMUk0nLFxuICAgICdTSUdYQ1BVJyxcbiAgICAnU0lHWEZTWicsXG4gICAgJ1NJR1VTUjInLFxuICAgICdTSUdUUkFQJyxcbiAgICAnU0lHU1lTJyxcbiAgICAnU0lHUVVJVCcsXG4gICAgJ1NJR0lPVCdcbiAgICAvLyBzaG91bGQgZGV0ZWN0IHByb2ZpbGVyIGFuZCBlbmFibGUvZGlzYWJsZSBhY2NvcmRpbmdseS5cbiAgICAvLyBzZWUgIzIxXG4gICAgLy8gJ1NJR1BST0YnXG4gIClcbn1cblxuaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpIHtcbiAgc2lnbmFscy5wdXNoKCdTSUdJTycsICdTSUdQT0xMJywgJ1NJR1BXUicsICdTSUdTVEtGTFQnKVxufVxuIiwgIi8vIE5vdGU6IHNpbmNlIG55YyB1c2VzIHRoaXMgbW9kdWxlIHRvIG91dHB1dCBjb3ZlcmFnZSwgYW55IGxpbmVzXG4vLyB0aGF0IGFyZSBpbiB0aGUgZGlyZWN0IHN5bmMgZmxvdyBvZiBueWMncyBvdXRwdXRDb3ZlcmFnZSBhcmVcbi8vIGlnbm9yZWQsIHNpbmNlIHdlIGNhbiBuZXZlciBnZXQgY292ZXJhZ2UgZm9yIHRoZW0uXG4vLyBncmFiIGEgcmVmZXJlbmNlIHRvIG5vZGUncyByZWFsIHByb2Nlc3Mgb2JqZWN0IHJpZ2h0IGF3YXlcbmltcG9ydCB7IHNpZ25hbHMgfSBmcm9tICcuL3NpZ25hbHMuanMnXG5leHBvcnQgeyBzaWduYWxzIH1cblxuLy8ganVzdCBhIGxvb3NlbmVkIHByb2Nlc3MgdHlwZSBzbyB3ZSBjYW4gZG8gc29tZSBldmlsIHRoaW5nc1xudHlwZSBQcm9jZXNzUkUgPSBOb2RlSlMuUHJvY2VzcyAmIHtcbiAgcmVhbGx5RXhpdDogKGNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsKSA9PiBhbnlcbiAgZW1pdDogKGV2OiBzdHJpbmcsIC4uLmE6IGFueVtdKSA9PiBhbnlcbn1cblxuY29uc3QgcHJvY2Vzc09rID0gKHByb2Nlc3M6IGFueSk6IHByb2Nlc3MgaXMgUHJvY2Vzc1JFID0+XG4gICEhcHJvY2VzcyAmJlxuICB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgdHlwZW9mIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHByb2Nlc3MuZW1pdCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcHJvY2Vzcy5yZWFsbHlFeGl0ID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwcm9jZXNzLmxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcHJvY2Vzcy5raWxsID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwcm9jZXNzLnBpZCA9PT0gJ251bWJlcicgJiZcbiAgdHlwZW9mIHByb2Nlc3Mub24gPT09ICdmdW5jdGlvbidcblxuY29uc3Qga0V4aXRFbWl0dGVyID0gU3ltYm9sLmZvcignc2lnbmFsLWV4aXQgZW1pdHRlcicpXG5jb25zdCBnbG9iYWw6IHR5cGVvZiBnbG9iYWxUaGlzICYgeyBba0V4aXRFbWl0dGVyXT86IEVtaXR0ZXIgfSA9IGdsb2JhbFRoaXNcbmNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LmJpbmQoT2JqZWN0KVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBleGl0IGNvZGUgYW5kIHNpZ25hbCBhcyBhcmd1bWVudHNcbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBzaWduYWwgZXhpdHMgKm9ubHkqLCBhIHJldHVybiB2YWx1ZSBvZiB0cnVlXG4gKiB3aWxsIGluZGljYXRlIHRoYXQgdGhlIHNpZ25hbCBpcyBiZWluZyBoYW5kbGVkLCBhbmQgd2Ugc2hvdWxkXG4gKiBub3Qgc3ludGhldGljYWxseSBleGl0IHdpdGggdGhlIHNpZ25hbCB3ZSByZWNlaXZlZC4gUmVnYXJkbGVzc1xuICogb2YgdGhlIGhhbmRsZXIgcmV0dXJuIHZhbHVlLCB0aGUgaGFuZGxlciBpcyB1bmxvYWRlZCB3aGVuIGFuXG4gKiBvdGhlcndpc2UgZmF0YWwgc2lnbmFsIGlzIHJlY2VpdmVkLCBzbyB5b3UgZ2V0IGV4YWN0bHkgMSBzaG90XG4gKiBhdCBpdCwgdW5sZXNzIHlvdSBhZGQgYW5vdGhlciBvbkV4aXQgaGFuZGxlciBhdCB0aGF0IHBvaW50LlxuICpcbiAqIEluIHRoZSBjYXNlIG9mIG51bWVyaWMgY29kZSBleGl0cywgd2UgbWF5IGFscmVhZHkgaGF2ZSBjb21taXR0ZWRcbiAqIHRvIGV4aXRpbmcgdGhlIHByb2Nlc3MsIGZvciBleGFtcGxlIHZpYSBhIGZhdGFsIGV4Y2VwdGlvbiBvclxuICogdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uLCBzbyBpdCBpcyBpbXBvc3NpYmxlIHRvIHN0b3Agc2FmZWx5LlxuICovXG5leHBvcnQgdHlwZSBIYW5kbGVyID0gKFxuICBjb2RlOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBzaWduYWw6IE5vZGVKUy5TaWduYWxzIHwgbnVsbFxuKSA9PiB0cnVlIHwgdm9pZFxudHlwZSBFeGl0RXZlbnQgPSAnYWZ0ZXJFeGl0JyB8ICdleGl0J1xudHlwZSBFbWl0dGVkID0geyBbayBpbiBFeGl0RXZlbnRdOiBib29sZWFuIH1cbnR5cGUgTGlzdGVuZXJzID0geyBbayBpbiBFeGl0RXZlbnRdOiBIYW5kbGVyW10gfVxuXG4vLyB0ZWVueSBzcGVjaWFsIHB1cnBvc2UgZWVcbmNsYXNzIEVtaXR0ZXIge1xuICBlbWl0dGVkOiBFbWl0dGVkID0ge1xuICAgIGFmdGVyRXhpdDogZmFsc2UsXG4gICAgZXhpdDogZmFsc2UsXG4gIH1cblxuICBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IHtcbiAgICBhZnRlckV4aXQ6IFtdLFxuICAgIGV4aXQ6IFtdLFxuICB9XG5cbiAgY291bnQ6IG51bWJlciA9IDBcbiAgaWQ6IG51bWJlciA9IE1hdGgucmFuZG9tKClcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoZ2xvYmFsW2tFeGl0RW1pdHRlcl0pIHtcbiAgICAgIHJldHVybiBnbG9iYWxba0V4aXRFbWl0dGVyXVxuICAgIH1cbiAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtFeGl0RW1pdHRlciwge1xuICAgICAgdmFsdWU6IHRoaXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgfSlcbiAgfVxuXG4gIG9uKGV2OiBFeGl0RXZlbnQsIGZuOiBIYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZdLnB1c2goZm4pXG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcihldjogRXhpdEV2ZW50LCBmbjogSGFuZGxlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmxpc3RlbmVyc1tldl1cbiAgICBjb25zdCBpID0gbGlzdC5pbmRleE9mKGZuKVxuICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgIGlmIChpID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgaWYgKGkgPT09IDAgJiYgbGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoXG4gICAgZXY6IEV4aXRFdmVudCxcbiAgICBjb2RlOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIHNpZ25hbDogTm9kZUpTLlNpZ25hbHMgfCBudWxsXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmVtaXR0ZWRbZXZdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgdGhpcy5lbWl0dGVkW2V2XSA9IHRydWVcbiAgICBsZXQgcmV0OiBib29sZWFuID0gZmFsc2VcbiAgICBmb3IgKGNvbnN0IGZuIG9mIHRoaXMubGlzdGVuZXJzW2V2XSkge1xuICAgICAgcmV0ID0gZm4oY29kZSwgc2lnbmFsKSA9PT0gdHJ1ZSB8fCByZXRcbiAgICB9XG4gICAgaWYgKGV2ID09PSAnZXhpdCcpIHtcbiAgICAgIHJldCA9IHRoaXMuZW1pdCgnYWZ0ZXJFeGl0JywgY29kZSwgc2lnbmFsKSB8fCByZXRcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIFNpZ25hbEV4aXRCYXNlIHtcbiAgYWJzdHJhY3Qgb25FeGl0KGNiOiBIYW5kbGVyLCBvcHRzPzogeyBhbHdheXNMYXN0PzogYm9vbGVhbiB9KTogKCkgPT4gdm9pZFxuICBhYnN0cmFjdCBsb2FkKCk6IHZvaWRcbiAgYWJzdHJhY3QgdW5sb2FkKCk6IHZvaWRcbn1cblxuY29uc3Qgc2lnbmFsRXhpdFdyYXAgPSA8VCBleHRlbmRzIFNpZ25hbEV4aXRCYXNlPihoYW5kbGVyOiBUKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25FeGl0KGNiOiBIYW5kbGVyLCBvcHRzPzogeyBhbHdheXNMYXN0PzogYm9vbGVhbiB9KSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5vbkV4aXQoY2IsIG9wdHMpXG4gICAgfSxcbiAgICBsb2FkKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIubG9hZCgpXG4gICAgfSxcbiAgICB1bmxvYWQoKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci51bmxvYWQoKVxuICAgIH0sXG4gIH1cbn1cblxuY2xhc3MgU2lnbmFsRXhpdEZhbGxiYWNrIGV4dGVuZHMgU2lnbmFsRXhpdEJhc2Uge1xuICBvbkV4aXQoKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cbiAgbG9hZCgpIHt9XG4gIHVubG9hZCgpIHt9XG59XG5cbmNsYXNzIFNpZ25hbEV4aXQgZXh0ZW5kcyBTaWduYWxFeGl0QmFzZSB7XG4gIC8vIFwiU0lHSFVQXCIgdGhyb3dzIGFuIGBFTk9TWVNgIGVycm9yIG9uIFdpbmRvd3MsXG4gIC8vIHNvIHVzZSBhIHN1cHBvcnRlZCBzaWduYWwgaW5zdGVhZFxuICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgI2h1cFNpZyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyAnU0lHSU5UJyA6ICdTSUdIVVAnXG4gIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICNlbWl0dGVyID0gbmV3IEVtaXR0ZXIoKVxuICAjcHJvY2VzczogUHJvY2Vzc1JFXG4gICNvcmlnaW5hbFByb2Nlc3NFbWl0OiBQcm9jZXNzUkVbJ2VtaXQnXVxuICAjb3JpZ2luYWxQcm9jZXNzUmVhbGx5RXhpdDogUHJvY2Vzc1JFWydyZWFsbHlFeGl0J11cblxuICAjc2lnTGlzdGVuZXJzOiB7IFtrIGluIE5vZGVKUy5TaWduYWxzXT86ICgpID0+IHZvaWQgfSA9IHt9XG4gICNsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHByb2Nlc3M6IFByb2Nlc3NSRSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLiNwcm9jZXNzID0gcHJvY2Vzc1xuICAgIC8vIHsgPHNpZ25hbD46IDxsaXN0ZW5lciBmbj4sIC4uLiB9XG4gICAgdGhpcy4jc2lnTGlzdGVuZXJzID0ge31cbiAgICBmb3IgKGNvbnN0IHNpZyBvZiBzaWduYWxzKSB7XG4gICAgICB0aGlzLiNzaWdMaXN0ZW5lcnNbc2lnXSA9ICgpID0+IHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG90aGVyIGxpc3RlbmVycywgYW4gZXhpdCBpcyBjb21pbmchXG4gICAgICAgIC8vIFNpbXBsZXN0IHdheTogcmVtb3ZlIHVzIGFuZCB0aGVuIHJlLXNlbmQgdGhlIHNpZ25hbC5cbiAgICAgICAgLy8gV2Uga25vdyB0aGF0IHRoaXMgd2lsbCBraWxsIHRoZSBwcm9jZXNzLCBzbyB3ZSBjYW5cbiAgICAgICAgLy8gc2FmZWx5IGVtaXQgbm93LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiNwcm9jZXNzLmxpc3RlbmVycyhzaWcpXG4gICAgICAgIGxldCB7IGNvdW50IH0gPSB0aGlzLiNlbWl0dGVyXG4gICAgICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciB0aGUgZmFjdCB0aGF0IHNpZ25hbC1leGl0IHYzIGFuZCBzaWduYWxcbiAgICAgICAgLy8gZXhpdCB2NCBhcmUgbm90IGF3YXJlIG9mIGVhY2ggb3RoZXIsIGFuZCBlYWNoIHdpbGwgYXR0ZW1wdCB0byBsZXRcbiAgICAgICAgLy8gdGhlIG90aGVyIGhhbmRsZSBpdCwgc28gbmVpdGhlciBvZiB0aGVtIGRvLiBUbyBjb3JyZWN0IHRoaXMsIHdlXG4gICAgICAgIC8vIGRldGVjdCBpZiB3ZSdyZSB0aGUgb25seSBoYW5kbGVyICpleGNlcHQqIGZvciBwcmV2aW91cyB2ZXJzaW9uc1xuICAgICAgICAvLyBvZiBzaWduYWwtZXhpdCwgYW5kIGluY3JlbWVudCBieSB0aGUgY291bnQgb2YgbGlzdGVuZXJzIGl0IGhhc1xuICAgICAgICAvLyBjcmVhdGVkLlxuICAgICAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICAgICAgY29uc3QgcCA9IHByb2Nlc3MgYXMgdW5rbm93biBhcyB7XG4gICAgICAgICAgX19zaWduYWxfZXhpdF9lbWl0dGVyX18/OiB7IGNvdW50OiBudW1iZXIgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgcC5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICB0eXBlb2YgcC5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXy5jb3VudCA9PT0gJ251bWJlcidcbiAgICAgICAgKSB7XG4gICAgICAgICAgY291bnQgKz0gcC5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXy5jb3VudFxuICAgICAgICB9XG4gICAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSBjb3VudCkge1xuICAgICAgICAgIHRoaXMudW5sb2FkKClcbiAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLiNlbWl0dGVyLmVtaXQoJ2V4aXQnLCBudWxsLCBzaWcpXG4gICAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICAgICAgY29uc3QgcyA9IHNpZyA9PT0gJ1NJR0hVUCcgPyB0aGlzLiNodXBTaWcgOiBzaWdcbiAgICAgICAgICBpZiAoIXJldCkgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzKVxuICAgICAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0ID0gcHJvY2Vzcy5yZWFsbHlFeGl0XG4gICAgdGhpcy4jb3JpZ2luYWxQcm9jZXNzRW1pdCA9IHByb2Nlc3MuZW1pdFxuICB9XG5cbiAgb25FeGl0KGNiOiBIYW5kbGVyLCBvcHRzPzogeyBhbHdheXNMYXN0PzogYm9vbGVhbiB9KSB7XG4gICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgaWYgKCFwcm9jZXNzT2sodGhpcy4jcHJvY2VzcykpIHtcbiAgICAgIHJldHVybiAoKSA9PiB7fVxuICAgIH1cbiAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuXG4gICAgaWYgKHRoaXMuI2xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubG9hZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXYgPSBvcHRzPy5hbHdheXNMYXN0ID8gJ2FmdGVyRXhpdCcgOiAnZXhpdCdcbiAgICB0aGlzLiNlbWl0dGVyLm9uKGV2LCBjYilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy4jZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldiwgY2IpXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuI2VtaXR0ZXIubGlzdGVuZXJzWydleGl0J10ubGVuZ3RoID09PSAwICYmXG4gICAgICAgIHRoaXMuI2VtaXR0ZXIubGlzdGVuZXJzWydhZnRlckV4aXQnXS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnVubG9hZCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBpZiAodGhpcy4jbG9hZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy4jbG9hZGVkID0gdHJ1ZVxuXG4gICAgLy8gVGhpcyBpcyB0aGUgbnVtYmVyIG9mIG9uU2lnbmFsRXhpdCdzIHRoYXQgYXJlIGluIHBsYXkuXG4gICAgLy8gSXQncyBpbXBvcnRhbnQgc28gdGhhdCB3ZSBjYW4gY291bnQgdGhlIGNvcnJlY3QgbnVtYmVyIG9mXG4gICAgLy8gbGlzdGVuZXJzIG9uIHNpZ25hbHMsIGFuZCBkb24ndCB3YWl0IGZvciB0aGUgb3RoZXIgb25lIHRvXG4gICAgLy8gaGFuZGxlIGl0IGluc3RlYWQgb2YgdXMuXG4gICAgdGhpcy4jZW1pdHRlci5jb3VudCArPSAxXG5cbiAgICBmb3IgKGNvbnN0IHNpZyBvZiBzaWduYWxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbiA9IHRoaXMuI3NpZ0xpc3RlbmVyc1tzaWddXG4gICAgICAgIGlmIChmbikgdGhpcy4jcHJvY2Vzcy5vbihzaWcsIGZuKVxuICAgICAgfSBjYXRjaCAoXykge31cbiAgICB9XG5cbiAgICB0aGlzLiNwcm9jZXNzLmVtaXQgPSAoZXY6IHN0cmluZywgLi4uYTogYW55W10pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLiNwcm9jZXNzRW1pdChldiwgLi4uYSlcbiAgICB9XG4gICAgdGhpcy4jcHJvY2Vzcy5yZWFsbHlFeGl0ID0gKGNvZGU/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy4jcHJvY2Vzc1JlYWxseUV4aXQoY29kZSlcbiAgICB9XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLiNsb2FkZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLiNsb2FkZWQgPSBmYWxzZVxuXG4gICAgc2lnbmFscy5mb3JFYWNoKHNpZyA9PiB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuI3NpZ0xpc3RlbmVyc1tzaWddXG4gICAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0ZW5lciBub3QgZGVmaW5lZCBmb3Igc2lnbmFsOiAnICsgc2lnKVxuICAgICAgfVxuICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuI3Byb2Nlc3MucmVtb3ZlTGlzdGVuZXIoc2lnLCBsaXN0ZW5lcilcbiAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICB9KVxuICAgIHRoaXMuI3Byb2Nlc3MuZW1pdCA9IHRoaXMuI29yaWdpbmFsUHJvY2Vzc0VtaXRcbiAgICB0aGlzLiNwcm9jZXNzLnJlYWxseUV4aXQgPSB0aGlzLiNvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0XG4gICAgdGhpcy4jZW1pdHRlci5jb3VudCAtPSAxXG4gIH1cblxuICAjcHJvY2Vzc1JlYWxseUV4aXQoY29kZT86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICBpZiAoIXByb2Nlc3NPayh0aGlzLiNwcm9jZXNzKSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgdGhpcy4jcHJvY2Vzcy5leGl0Q29kZSA9IGNvZGUgfHwgMFxuICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG5cbiAgICB0aGlzLiNlbWl0dGVyLmVtaXQoJ2V4aXQnLCB0aGlzLiNwcm9jZXNzLmV4aXRDb2RlLCBudWxsKVxuICAgIHJldHVybiB0aGlzLiNvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0LmNhbGwoXG4gICAgICB0aGlzLiNwcm9jZXNzLFxuICAgICAgdGhpcy4jcHJvY2Vzcy5leGl0Q29kZVxuICAgIClcbiAgfVxuXG4gICNwcm9jZXNzRW1pdChldjogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgY29uc3Qgb2cgPSB0aGlzLiNvcmlnaW5hbFByb2Nlc3NFbWl0XG4gICAgaWYgKGV2ID09PSAnZXhpdCcgJiYgcHJvY2Vzc09rKHRoaXMuI3Byb2Nlc3MpKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuI3Byb2Nlc3MuZXhpdENvZGUgPSBhcmdzWzBdXG4gICAgICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgICAgfVxuICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICBjb25zdCByZXQgPSBvZy5jYWxsKHRoaXMuI3Byb2Nlc3MsIGV2LCAuLi5hcmdzKVxuICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICB0aGlzLiNlbWl0dGVyLmVtaXQoJ2V4aXQnLCB0aGlzLiNwcm9jZXNzLmV4aXRDb2RlLCBudWxsKVxuICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcy4jcHJvY2VzcywgZXYsIC4uLmFyZ3MpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3Ncbi8vIHdyYXAgc28gdGhhdCB3ZSBjYWxsIHRoZSBtZXRob2Qgb24gdGhlIGFjdHVhbCBoYW5kbGVyLCB3aXRob3V0XG4vLyBleHBvcnRpbmcgaXQgZGlyZWN0bHkuXG5leHBvcnQgY29uc3Qge1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHByb2Nlc3MgaXMgZXhpdGluZywgd2hldGhlciB2aWEgc2lnbmFsLCBleHBsaWNpdFxuICAgKiBleGl0LCBvciBydW5uaW5nIG91dCBvZiBzdHVmZiB0byBkby5cbiAgICpcbiAgICogSWYgdGhlIGdsb2JhbCBwcm9jZXNzIG9iamVjdCBpcyBub3Qgc3VpdGFibGUgZm9yIGluc3RydW1lbnRhdGlvbixcbiAgICogdGhlbiB0aGlzIHdpbGwgYmUgYSBuby1vcC5cbiAgICpcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gdW5sb2FkIHNpZ25hbC1leGl0LlxuICAgKi9cbiAgb25FeGl0LFxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBsaXN0ZW5lcnMuICBMaWtlbHkgeW91IG5ldmVyIG5lZWQgdG8gY2FsbCB0aGlzLCB1bmxlc3NcbiAgICogZG9pbmcgYSByYXRoZXIgZGVlcCBpbnRlZ3JhdGlvbiB3aXRoIHNpZ25hbC1leGl0IGZ1bmN0aW9uYWxpdHkuXG4gICAqIE1vc3RseSBleHBvc2VkIGZvciB0aGUgYmVuZWZpdCBvZiB0ZXN0aW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGxvYWQsXG5cbiAgLyoqXG4gICAqIFVubG9hZCB0aGUgbGlzdGVuZXJzLiAgTGlrZWx5IHlvdSBuZXZlciBuZWVkIHRvIGNhbGwgdGhpcywgdW5sZXNzXG4gICAqIGRvaW5nIGEgcmF0aGVyIGRlZXAgaW50ZWdyYXRpb24gd2l0aCBzaWduYWwtZXhpdCBmdW5jdGlvbmFsaXR5LlxuICAgKiBNb3N0bHkgZXhwb3NlZCBmb3IgdGhlIGJlbmVmaXQgb2YgdGVzdGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bmxvYWQsXG59ID0gc2lnbmFsRXhpdFdyYXAoXG4gIHByb2Nlc3NPayhwcm9jZXNzKSA/IG5ldyBTaWduYWxFeGl0KHByb2Nlc3MpIDogbmV3IFNpZ25hbEV4aXRGYWxsYmFjaygpXG4pXG4iLCAiaW1wb3J0IHthZGRBYm9ydExpc3RlbmVyfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge29uRXhpdH0gZnJvbSAnc2lnbmFsLWV4aXQnO1xuXG4vLyBJZiB0aGUgYGNsZWFudXBgIG9wdGlvbiBpcyB1c2VkLCBjYWxsIGBzdWJwcm9jZXNzLmtpbGwoKWAgd2hlbiB0aGUgcGFyZW50IHByb2Nlc3MgZXhpdHNcbmV4cG9ydCBjb25zdCBjbGVhbnVwT25FeGl0ID0gKHN1YnByb2Nlc3MsIHtjbGVhbnVwLCBkZXRhY2hlZH0sIHtzaWduYWx9KSA9PiB7XG5cdGlmICghY2xlYW51cCB8fCBkZXRhY2hlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW92ZUV4aXRIYW5kbGVyID0gb25FeGl0KCgpID0+IHtcblx0XHRzdWJwcm9jZXNzLmtpbGwoKTtcblx0fSk7XG5cdGFkZEFib3J0TGlzdGVuZXIoc2lnbmFsLCAoKSA9PiB7XG5cdFx0cmVtb3ZlRXhpdEhhbmRsZXIoKTtcblx0fSk7XG59O1xuIiwgImltcG9ydCB7bm9ybWFsaXplUGFyYW1ldGVyc30gZnJvbSAnLi4vbWV0aG9kcy9wYXJhbWV0ZXJzLmpzJztcbmltcG9ydCB7Z2V0U3RhcnRUaW1lfSBmcm9tICcuLi9yZXR1cm4vZHVyYXRpb24uanMnO1xuaW1wb3J0IHtTVUJQUk9DRVNTX09QVElPTlMsIGdldFRvU3RyZWFtLCBnZXRGcm9tU3RyZWFtfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge2lzRGVub0V4ZWNQYXRofSBmcm9tICcuLi9hcmd1bWVudHMvZmlsZS11cmwuanMnO1xuXG4vLyBOb3JtYWxpemUgYW5kIHZhbGlkYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYHNvdXJjZS5waXBlKGRlc3RpbmF0aW9uKWBcbmV4cG9ydCBjb25zdCBub3JtYWxpemVQaXBlQXJndW1lbnRzID0gKHtzb3VyY2UsIHNvdXJjZVByb21pc2UsIGJvdW5kT3B0aW9ucywgY3JlYXRlTmVzdGVkfSwgLi4ucGlwZUFyZ3VtZW50cykgPT4ge1xuXHRjb25zdCBzdGFydFRpbWUgPSBnZXRTdGFydFRpbWUoKTtcblx0Y29uc3Qge1xuXHRcdGRlc3RpbmF0aW9uLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdFx0ZnJvbSxcblx0XHR1bnBpcGVTaWduYWwsXG5cdH0gPSBnZXREZXN0aW5hdGlvblN0cmVhbShib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgcGlwZUFyZ3VtZW50cyk7XG5cdGNvbnN0IHtzb3VyY2VTdHJlYW0sIHNvdXJjZUVycm9yfSA9IGdldFNvdXJjZVN0cmVhbShzb3VyY2UsIGZyb20pO1xuXHRjb25zdCB7b3B0aW9uczogc291cmNlT3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IFNVQlBST0NFU1NfT1BUSU9OUy5nZXQoc291cmNlKTtcblx0cmV0dXJuIHtcblx0XHRzb3VyY2VQcm9taXNlLFxuXHRcdHNvdXJjZVN0cmVhbSxcblx0XHRzb3VyY2VPcHRpb25zLFxuXHRcdHNvdXJjZUVycm9yLFxuXHRcdGRlc3RpbmF0aW9uLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdFx0dW5waXBlU2lnbmFsLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRzdGFydFRpbWUsXG5cdH07XG59O1xuXG5jb25zdCBnZXREZXN0aW5hdGlvblN0cmVhbSA9IChib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgcGlwZUFyZ3VtZW50cykgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRlc3RpbmF0aW9uLFxuXHRcdFx0cGlwZU9wdGlvbnM6IHtmcm9tLCB0bywgdW5waXBlU2lnbmFsfSA9IHt9LFxuXHRcdH0gPSBnZXREZXN0aW5hdGlvbihib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgZGVzdGluYXRpb25TdHJlYW0gPSBnZXRUb1N0cmVhbShkZXN0aW5hdGlvbiwgdG8pO1xuXHRcdHJldHVybiB7XG5cdFx0XHRkZXN0aW5hdGlvbixcblx0XHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdFx0ZnJvbSxcblx0XHRcdHVucGlwZVNpZ25hbCxcblx0XHR9O1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiB7ZGVzdGluYXRpb25FcnJvcjogZXJyb3J9O1xuXHR9XG59O1xuXG4vLyBQaXBpbmcgc3VicHJvY2Vzc2VzIGNhbiB1c2UgdGhyZWUgc3ludGF4ZXM6XG4vLyAgLSBzb3VyY2UucGlwZSgnY29tbWFuZCcsIGNvbW1hbmRBcmd1bWVudHMsIHBpcGVPcHRpb25zT3JEZXN0aW5hdGlvbk9wdGlvbnMpXG4vLyAgLSBzb3VyY2UucGlwZWBjb21tYW5kIGNvbW1hbmRBcmd1bWVudGAgb3Igc291cmNlLnBpcGUocGlwZU9wdGlvbnNPckRlc3RpbmF0aW9uT3B0aW9ucylgY29tbWFuZCBjb21tYW5kQXJndW1lbnRgXG4vLyAgLSBzb3VyY2UucGlwZShleGVjYSguLi4pLCBwaXBlT3B0aW9ucylcbmNvbnN0IGdldERlc3RpbmF0aW9uID0gKGJvdW5kT3B0aW9ucywgY3JlYXRlTmVzdGVkLCBmaXJzdEFyZ3VtZW50LCAuLi5waXBlQXJndW1lbnRzKSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KGZpcnN0QXJndW1lbnQpKSB7XG5cdFx0Y29uc3QgZGVzdGluYXRpb24gPSBjcmVhdGVOZXN0ZWQobWFwRGVzdGluYXRpb25Bcmd1bWVudHMsIGJvdW5kT3B0aW9ucykoZmlyc3RBcmd1bWVudCwgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIHtkZXN0aW5hdGlvbiwgcGlwZU9wdGlvbnM6IGJvdW5kT3B0aW9uc307XG5cdH1cblxuXHRpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBVUkwgfHwgaXNEZW5vRXhlY1BhdGgoZmlyc3RBcmd1bWVudCkpIHtcblx0XHRpZiAoT2JqZWN0LmtleXMoYm91bmRPcHRpb25zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIC5waXBlKFwiZmlsZVwiLCAuLi4sIG9wdGlvbnMpIG9yIC5waXBlKGV4ZWNhKFwiZmlsZVwiLCAuLi4sIG9wdGlvbnMpKSBpbnN0ZWFkIG9mIC5waXBlKG9wdGlvbnMpKFwiZmlsZVwiLCAuLi4pLicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnNdID0gbm9ybWFsaXplUGFyYW1ldGVycyhmaXJzdEFyZ3VtZW50LCAuLi5waXBlQXJndW1lbnRzKTtcblx0XHRjb25zdCBkZXN0aW5hdGlvbiA9IGNyZWF0ZU5lc3RlZChtYXBEZXN0aW5hdGlvbkFyZ3VtZW50cykocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0XHRyZXR1cm4ge2Rlc3RpbmF0aW9uLCBwaXBlT3B0aW9uczogcmF3T3B0aW9uc307XG5cdH1cblxuXHRpZiAoU1VCUFJPQ0VTU19PUFRJT05TLmhhcyhmaXJzdEFyZ3VtZW50KSkge1xuXHRcdGlmIChPYmplY3Qua2V5cyhib3VuZE9wdGlvbnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgLnBpcGUob3B0aW9ucylgY29tbWFuZGAgb3IgLnBpcGUoJChvcHRpb25zKWBjb21tYW5kYCkgaW5zdGVhZCBvZiAucGlwZShvcHRpb25zKSgkYGNvbW1hbmRgKS4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge2Rlc3RpbmF0aW9uOiBmaXJzdEFyZ3VtZW50LCBwaXBlT3B0aW9uczogcGlwZUFyZ3VtZW50c1swXX07XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHRlbXBsYXRlIHN0cmluZywgYW4gb3B0aW9ucyBvYmplY3QsIG9yIGFuIEV4ZWNhIHN1YnByb2Nlc3M6ICR7Zmlyc3RBcmd1bWVudH1gKTtcbn07XG5cbi8vIEZvcmNlIGBzdGRpbjogJ3BpcGUnYCB3aXRoIHRoZSBkZXN0aW5hdGlvbiBzdWJwcm9jZXNzXG5jb25zdCBtYXBEZXN0aW5hdGlvbkFyZ3VtZW50cyA9ICh7b3B0aW9uc30pID0+ICh7b3B0aW9uczogey4uLm9wdGlvbnMsIHN0ZGluOiAncGlwZScsIHBpcGVkOiB0cnVlfX0pO1xuXG5jb25zdCBnZXRTb3VyY2VTdHJlYW0gPSAoc291cmNlLCBmcm9tKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc291cmNlU3RyZWFtID0gZ2V0RnJvbVN0cmVhbShzb3VyY2UsIGZyb20pO1xuXHRcdHJldHVybiB7c291cmNlU3RyZWFtfTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4ge3NvdXJjZUVycm9yOiBlcnJvcn07XG5cdH1cbn07XG4iLCAiaW1wb3J0IHttYWtlRWFybHlFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL3Jlc3VsdC5qcyc7XG5pbXBvcnQge2Fib3J0U291cmNlU3RyZWFtLCBlbmREZXN0aW5hdGlvblN0cmVhbX0gZnJvbSAnLi4vaW8vcGlwZWxpbmUuanMnO1xuXG4vLyBXaGVuIHBhc3NpbmcgaW52YWxpZCBhcmd1bWVudHMgdG8gYHNvdXJjZS5waXBlKClgLCB0aHJvdyBhc3luY2hyb25vdXNseS5cbi8vIFdlIGFsc28gYWJvcnQgYm90aCBzdWJwcm9jZXNzZXMuXG5leHBvcnQgY29uc3QgaGFuZGxlUGlwZUFyZ3VtZW50c0Vycm9yID0gKHtcblx0c291cmNlU3RyZWFtLFxuXHRzb3VyY2VFcnJvcixcblx0ZGVzdGluYXRpb25TdHJlYW0sXG5cdGRlc3RpbmF0aW9uRXJyb3IsXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0c291cmNlT3B0aW9ucyxcblx0c3RhcnRUaW1lLFxufSkgPT4ge1xuXHRjb25zdCBlcnJvciA9IGdldFBpcGVBcmd1bWVudHNFcnJvcih7XG5cdFx0c291cmNlU3RyZWFtLFxuXHRcdHNvdXJjZUVycm9yLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdH0pO1xuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IGNyZWF0ZU5vbkNvbW1hbmRFcnJvcih7XG5cdFx0XHRlcnJvcixcblx0XHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRcdHNvdXJjZU9wdGlvbnMsXG5cdFx0XHRzdGFydFRpbWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGdldFBpcGVBcmd1bWVudHNFcnJvciA9ICh7c291cmNlU3RyZWFtLCBzb3VyY2VFcnJvciwgZGVzdGluYXRpb25TdHJlYW0sIGRlc3RpbmF0aW9uRXJyb3J9KSA9PiB7XG5cdGlmIChzb3VyY2VFcnJvciAhPT0gdW5kZWZpbmVkICYmIGRlc3RpbmF0aW9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBkZXN0aW5hdGlvbkVycm9yO1xuXHR9XG5cblx0aWYgKGRlc3RpbmF0aW9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdGFib3J0U291cmNlU3RyZWFtKHNvdXJjZVN0cmVhbSk7XG5cdFx0cmV0dXJuIGRlc3RpbmF0aW9uRXJyb3I7XG5cdH1cblxuXHRpZiAoc291cmNlRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdGVuZERlc3RpbmF0aW9uU3RyZWFtKGRlc3RpbmF0aW9uU3RyZWFtKTtcblx0XHRyZXR1cm4gc291cmNlRXJyb3I7XG5cdH1cbn07XG5cbi8vIFNwZWNpZmljIGVycm9yIHJldHVybiB2YWx1ZSB3aGVuIHBhc3NpbmcgaW52YWxpZCBhcmd1bWVudHMgdG8gYHN1YnByb2Nlc3MucGlwZSgpYCBvciB3aGVuIHVzaW5nIGB1bnBpcGVTaWduYWxgXG5leHBvcnQgY29uc3QgY3JlYXRlTm9uQ29tbWFuZEVycm9yID0gKHtlcnJvciwgZmlsZURlc2NyaXB0b3JzLCBzb3VyY2VPcHRpb25zLCBzdGFydFRpbWV9KSA9PiBtYWtlRWFybHlFcnJvcih7XG5cdGVycm9yLFxuXHRjb21tYW5kOiBQSVBFX0NPTU1BTkRfTUVTU0FHRSxcblx0ZXNjYXBlZENvbW1hbmQ6IFBJUEVfQ09NTUFORF9NRVNTQUdFLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdG9wdGlvbnM6IHNvdXJjZU9wdGlvbnMsXG5cdHN0YXJ0VGltZSxcblx0aXNTeW5jOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBQSVBFX0NPTU1BTkRfTUVTU0FHRSA9ICdzb3VyY2UucGlwZShkZXN0aW5hdGlvbiknO1xuIiwgIi8vIExpa2UgQmFzaCwgd2UgYXdhaXQgYm90aCBzdWJwcm9jZXNzZXMuIFRoaXMgaXMgdW5saWtlIHNvbWUgb3RoZXIgc2hlbGxzIHdoaWNoIG9ubHkgYXdhaXQgdGhlIGRlc3RpbmF0aW9uIHN1YnByb2Nlc3MuXG4vLyBMaWtlIEJhc2ggd2l0aCB0aGUgYHBpcGVmYWlsYCBvcHRpb24sIGlmIGVpdGhlciBzdWJwcm9jZXNzIGZhaWxzLCB0aGUgd2hvbGUgcGlwZSBmYWlscy5cbi8vIExpa2UgQmFzaCwgaWYgYm90aCBzdWJwcm9jZXNzZXMgZmFpbCwgd2UgcmV0dXJuIHRoZSBmYWlsdXJlIG9mIHRoZSBkZXN0aW5hdGlvbi5cbi8vIFRoaXMgZW5zdXJlcyBib3RoIHN1YnByb2Nlc3NlcycgZXJyb3JzIGFyZSBwcmVzZW50LCB1c2luZyBgZXJyb3IucGlwZWRGcm9tYC5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yQm90aFN1YnByb2Nlc3NlcyA9IGFzeW5jIHN1YnByb2Nlc3NQcm9taXNlcyA9PiB7XG5cdGNvbnN0IFtcblx0XHR7c3RhdHVzOiBzb3VyY2VTdGF0dXMsIHJlYXNvbjogc291cmNlUmVhc29uLCB2YWx1ZTogc291cmNlUmVzdWx0ID0gc291cmNlUmVhc29ufSxcblx0XHR7c3RhdHVzOiBkZXN0aW5hdGlvblN0YXR1cywgcmVhc29uOiBkZXN0aW5hdGlvblJlYXNvbiwgdmFsdWU6IGRlc3RpbmF0aW9uUmVzdWx0ID0gZGVzdGluYXRpb25SZWFzb259LFxuXHRdID0gYXdhaXQgc3VicHJvY2Vzc1Byb21pc2VzO1xuXG5cdGlmICghZGVzdGluYXRpb25SZXN1bHQucGlwZWRGcm9tLmluY2x1ZGVzKHNvdXJjZVJlc3VsdCkpIHtcblx0XHRkZXN0aW5hdGlvblJlc3VsdC5waXBlZEZyb20ucHVzaChzb3VyY2VSZXN1bHQpO1xuXHR9XG5cblx0aWYgKGRlc3RpbmF0aW9uU3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG5cdFx0dGhyb3cgZGVzdGluYXRpb25SZXN1bHQ7XG5cdH1cblxuXHRpZiAoc291cmNlU3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG5cdFx0dGhyb3cgc291cmNlUmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIGRlc3RpbmF0aW9uUmVzdWx0O1xufTtcbiIsICJpbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQgbWVyZ2VTdHJlYW1zIGZyb20gJ0BzaW5kcmVzb3JodXMvbWVyZ2Utc3RyZWFtcyc7XG5pbXBvcnQge2luY3JlbWVudE1heExpc3RlbmVyc30gZnJvbSAnLi4vdXRpbHMvbWF4LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQge3BpcGVTdHJlYW1zfSBmcm9tICcuLi9pby9waXBlbGluZS5qcyc7XG5cbi8vIFRoZSBwaXBpbmcgYmVoYXZpb3IgaXMgbGlrZSBCYXNoLlxuLy8gSW4gcGFydGljdWxhciwgd2hlbiBvbmUgc3VicHJvY2VzcyBleGl0cywgdGhlIG90aGVyIGlzIG5vdCB0ZXJtaW5hdGVkIGJ5IGEgc2lnbmFsLlxuLy8gSW5zdGVhZCwgaXRzIHN0ZG91dCAoZm9yIHRoZSBzb3VyY2UpIG9yIHN0ZGluIChmb3IgdGhlIGRlc3RpbmF0aW9uKSBjbG9zZXMuXG4vLyBJZiB0aGUgc3VicHJvY2VzcyB1c2VzIGl0LCBpdCB3aWxsIG1ha2UgaXQgZXJyb3Igd2l0aCBTSUdQSVBFIG9yIEVQSVBFIChmb3IgdGhlIHNvdXJjZSkgb3IgZW5kIChmb3IgdGhlIGRlc3RpbmF0aW9uKS5cbi8vIElmIGl0IGRvZXMgbm90IHVzZSBpdCwgaXQgd2lsbCBjb250aW51ZSBydW5uaW5nLlxuLy8gVGhpcyBhbGxvd3MgZm9yIHN1YnByb2Nlc3NlcyB0byBncmFjZWZ1bGx5IGV4aXQgYW5kIGxvd2VyIHRoZSBjb3VwbGluZyBiZXR3ZWVuIHN1YnByb2Nlc3Nlcy5cbmV4cG9ydCBjb25zdCBwaXBlU3VicHJvY2Vzc1N0cmVhbSA9IChzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtLCBtYXhMaXN0ZW5lcnNDb250cm9sbGVyKSA9PiB7XG5cdGNvbnN0IG1lcmdlZFN0cmVhbSA9IE1FUkdFRF9TVFJFQU1TLmhhcyhkZXN0aW5hdGlvblN0cmVhbSlcblx0XHQ/IHBpcGVNb3JlU3VicHJvY2Vzc1N0cmVhbShzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKVxuXHRcdDogcGlwZUZpcnN0U3VicHJvY2Vzc1N0cmVhbShzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKTtcblx0aW5jcmVtZW50TWF4TGlzdGVuZXJzKHNvdXJjZVN0cmVhbSwgU09VUkNFX0xJU1RFTkVSU19QRVJfUElQRSwgbWF4TGlzdGVuZXJzQ29udHJvbGxlci5zaWduYWwpO1xuXHRpbmNyZW1lbnRNYXhMaXN0ZW5lcnMoZGVzdGluYXRpb25TdHJlYW0sIERFU1RJTkFUSU9OX0xJU1RFTkVSU19QRVJfUElQRSwgbWF4TGlzdGVuZXJzQ29udHJvbGxlci5zaWduYWwpO1xuXHRjbGVhbnVwTWVyZ2VkU3RyZWFtc01hcChkZXN0aW5hdGlvblN0cmVhbSk7XG5cdHJldHVybiBtZXJnZWRTdHJlYW07XG59O1xuXG4vLyBXZSB1c2UgYG1lcmdlLXN0cmVhbXNgIHRvIGFsbG93IGZvciBtdWx0aXBsZSBzb3VyY2VzIHRvIHBpcGUgdG8gdGhlIHNhbWUgZGVzdGluYXRpb24uXG5jb25zdCBwaXBlRmlyc3RTdWJwcm9jZXNzU3RyZWFtID0gKHNvdXJjZVN0cmVhbSwgZGVzdGluYXRpb25TdHJlYW0pID0+IHtcblx0Y29uc3QgbWVyZ2VkU3RyZWFtID0gbWVyZ2VTdHJlYW1zKFtzb3VyY2VTdHJlYW1dKTtcblx0cGlwZVN0cmVhbXMobWVyZ2VkU3RyZWFtLCBkZXN0aW5hdGlvblN0cmVhbSk7XG5cdE1FUkdFRF9TVFJFQU1TLnNldChkZXN0aW5hdGlvblN0cmVhbSwgbWVyZ2VkU3RyZWFtKTtcblx0cmV0dXJuIG1lcmdlZFN0cmVhbTtcbn07XG5cbmNvbnN0IHBpcGVNb3JlU3VicHJvY2Vzc1N0cmVhbSA9IChzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKSA9PiB7XG5cdGNvbnN0IG1lcmdlZFN0cmVhbSA9IE1FUkdFRF9TVFJFQU1TLmdldChkZXN0aW5hdGlvblN0cmVhbSk7XG5cdG1lcmdlZFN0cmVhbS5hZGQoc291cmNlU3RyZWFtKTtcblx0cmV0dXJuIG1lcmdlZFN0cmVhbTtcbn07XG5cbmNvbnN0IGNsZWFudXBNZXJnZWRTdHJlYW1zTWFwID0gYXN5bmMgZGVzdGluYXRpb25TdHJlYW0gPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKGRlc3RpbmF0aW9uU3RyZWFtLCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX0pO1xuXHR9IGNhdGNoIHt9XG5cblx0TUVSR0VEX1NUUkVBTVMuZGVsZXRlKGRlc3RpbmF0aW9uU3RyZWFtKTtcbn07XG5cbmNvbnN0IE1FUkdFRF9TVFJFQU1TID0gbmV3IFdlYWtNYXAoKTtcblxuLy8gTnVtYmVyIG9mIGxpc3RlbmVycyBzZXQgdXAgb24gYHNvdXJjZVN0cmVhbWAgYnkgZWFjaCBgc291cmNlU3RyZWFtLnBpcGUoZGVzdGluYXRpb25TdHJlYW0pYFxuLy8gVGhvc2UgYXJlIGFkZGVkIGJ5IGBtZXJnZS1zdHJlYW1zYFxuY29uc3QgU09VUkNFX0xJU1RFTkVSU19QRVJfUElQRSA9IDI7XG4vLyBOdW1iZXIgb2YgbGlzdGVuZXJzIHNldCB1cCBvbiBgZGVzdGluYXRpb25TdHJlYW1gIGJ5IGVhY2ggYHNvdXJjZVN0cmVhbS5waXBlKGRlc3RpbmF0aW9uU3RyZWFtKWBcbi8vIFRob3NlIGFyZSBhZGRlZCBieSBgZmluaXNoZWQoKWAgaW4gYGNsZWFudXBNZXJnZWRTdHJlYW1zTWFwKClgXG5jb25zdCBERVNUSU5BVElPTl9MSVNURU5FUlNfUEVSX1BJUEUgPSAxO1xuIiwgImltcG9ydCB7YWJvcnRlZH0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7Y3JlYXRlTm9uQ29tbWFuZEVycm9yfSBmcm9tICcuL3Rocm93LmpzJztcblxuLy8gV2hlbiBwYXNzaW5nIGFuIGB1bnBpcGVTaWduYWxgIG9wdGlvbiwgYWJvcnQgcGlwaW5nIHdoZW4gdGhlIHNpZ25hbCBpcyBhYm9ydGVkLlxuLy8gSG93ZXZlciwgZG8gbm90IHRlcm1pbmF0ZSB0aGUgc3VicHJvY2Vzc2VzLlxuZXhwb3J0IGNvbnN0IHVucGlwZU9uQWJvcnQgPSAodW5waXBlU2lnbmFsLCB1bnBpcGVDb250ZXh0KSA9PiB1bnBpcGVTaWduYWwgPT09IHVuZGVmaW5lZFxuXHQ/IFtdXG5cdDogW3VucGlwZU9uU2lnbmFsQWJvcnQodW5waXBlU2lnbmFsLCB1bnBpcGVDb250ZXh0KV07XG5cbmNvbnN0IHVucGlwZU9uU2lnbmFsQWJvcnQgPSBhc3luYyAodW5waXBlU2lnbmFsLCB7c291cmNlU3RyZWFtLCBtZXJnZWRTdHJlYW0sIGZpbGVEZXNjcmlwdG9ycywgc291cmNlT3B0aW9ucywgc3RhcnRUaW1lfSkgPT4ge1xuXHRhd2FpdCBhYm9ydGVkKHVucGlwZVNpZ25hbCwgc291cmNlU3RyZWFtKTtcblx0YXdhaXQgbWVyZ2VkU3RyZWFtLnJlbW92ZShzb3VyY2VTdHJlYW0pO1xuXHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcignUGlwZSBjYW5jZWxlZCBieSBgdW5waXBlU2lnbmFsYCBvcHRpb24uJyk7XG5cdHRocm93IGNyZWF0ZU5vbkNvbW1hbmRFcnJvcih7XG5cdFx0ZXJyb3IsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdHNvdXJjZU9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7bm9ybWFsaXplUGlwZUFyZ3VtZW50c30gZnJvbSAnLi9waXBlLWFyZ3VtZW50cy5qcyc7XG5pbXBvcnQge2hhbmRsZVBpcGVBcmd1bWVudHNFcnJvcn0gZnJvbSAnLi90aHJvdy5qcyc7XG5pbXBvcnQge3dhaXRGb3JCb3RoU3VicHJvY2Vzc2VzfSBmcm9tICcuL3NlcXVlbmNlLmpzJztcbmltcG9ydCB7cGlwZVN1YnByb2Nlc3NTdHJlYW19IGZyb20gJy4vc3RyZWFtaW5nLmpzJztcbmltcG9ydCB7dW5waXBlT25BYm9ydH0gZnJvbSAnLi9hYm9ydC5qcyc7XG5cbi8vIFBpcGUgYSBzdWJwcm9jZXNzJyBgc3Rkb3V0YC9gc3RkZXJyYC9gc3RkaW9gIGludG8gYW5vdGhlciBzdWJwcm9jZXNzJyBgc3RkaW5gXG5leHBvcnQgY29uc3QgcGlwZVRvU3VicHJvY2VzcyA9IChzb3VyY2VJbmZvLCAuLi5waXBlQXJndW1lbnRzKSA9PiB7XG5cdGlmIChpc1BsYWluT2JqZWN0KHBpcGVBcmd1bWVudHNbMF0pKSB7XG5cdFx0cmV0dXJuIHBpcGVUb1N1YnByb2Nlc3MuYmluZCh1bmRlZmluZWQsIHtcblx0XHRcdC4uLnNvdXJjZUluZm8sXG5cdFx0XHRib3VuZE9wdGlvbnM6IHsuLi5zb3VyY2VJbmZvLmJvdW5kT3B0aW9ucywgLi4ucGlwZUFyZ3VtZW50c1swXX0sXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCB7ZGVzdGluYXRpb24sIC4uLm5vcm1hbGl6ZWRJbmZvfSA9IG5vcm1hbGl6ZVBpcGVBcmd1bWVudHMoc291cmNlSW5mbywgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdGNvbnN0IHByb21pc2UgPSBoYW5kbGVQaXBlUHJvbWlzZSh7Li4ubm9ybWFsaXplZEluZm8sIGRlc3RpbmF0aW9ufSk7XG5cdHByb21pc2UucGlwZSA9IHBpcGVUb1N1YnByb2Nlc3MuYmluZCh1bmRlZmluZWQsIHtcblx0XHQuLi5zb3VyY2VJbmZvLFxuXHRcdHNvdXJjZTogZGVzdGluYXRpb24sXG5cdFx0c291cmNlUHJvbWlzZTogcHJvbWlzZSxcblx0XHRib3VuZE9wdGlvbnM6IHt9LFxuXHR9KTtcblx0cmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBBc3luY2hyb25vdXMgbG9naWMgd2hlbiBwaXBpbmcgc3VicHJvY2Vzc2VzXG5jb25zdCBoYW5kbGVQaXBlUHJvbWlzZSA9IGFzeW5jICh7XG5cdHNvdXJjZVByb21pc2UsXG5cdHNvdXJjZVN0cmVhbSxcblx0c291cmNlT3B0aW9ucyxcblx0c291cmNlRXJyb3IsXG5cdGRlc3RpbmF0aW9uLFxuXHRkZXN0aW5hdGlvblN0cmVhbSxcblx0ZGVzdGluYXRpb25FcnJvcixcblx0dW5waXBlU2lnbmFsLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdHN0YXJ0VGltZSxcbn0pID0+IHtcblx0Y29uc3Qgc3VicHJvY2Vzc1Byb21pc2VzID0gZ2V0U3VicHJvY2Vzc1Byb21pc2VzKHNvdXJjZVByb21pc2UsIGRlc3RpbmF0aW9uKTtcblx0aGFuZGxlUGlwZUFyZ3VtZW50c0Vycm9yKHtcblx0XHRzb3VyY2VTdHJlYW0sXG5cdFx0c291cmNlRXJyb3IsXG5cdFx0ZGVzdGluYXRpb25TdHJlYW0sXG5cdFx0ZGVzdGluYXRpb25FcnJvcixcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c291cmNlT3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdH0pO1xuXHRjb25zdCBtYXhMaXN0ZW5lcnNDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHR0cnkge1xuXHRcdGNvbnN0IG1lcmdlZFN0cmVhbSA9IHBpcGVTdWJwcm9jZXNzU3RyZWFtKHNvdXJjZVN0cmVhbSwgZGVzdGluYXRpb25TdHJlYW0sIG1heExpc3RlbmVyc0NvbnRyb2xsZXIpO1xuXHRcdHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0d2FpdEZvckJvdGhTdWJwcm9jZXNzZXMoc3VicHJvY2Vzc1Byb21pc2VzKSxcblx0XHRcdC4uLnVucGlwZU9uQWJvcnQodW5waXBlU2lnbmFsLCB7XG5cdFx0XHRcdHNvdXJjZVN0cmVhbSxcblx0XHRcdFx0bWVyZ2VkU3RyZWFtLFxuXHRcdFx0XHRzb3VyY2VPcHRpb25zLFxuXHRcdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRcdHN0YXJ0VGltZSxcblx0XHRcdH0pLFxuXHRcdF0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdG1heExpc3RlbmVyc0NvbnRyb2xsZXIuYWJvcnQoKTtcblx0fVxufTtcblxuLy8gYC5waXBlKClgIGF3YWl0cyB0aGUgc3VicHJvY2VzcyBwcm9taXNlcy5cbi8vIFdoZW4gaW52YWxpZCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0byBgLnBpcGUoKWAsIHdlIHRocm93IGFuIGVycm9yLCB3aGljaCBwcmV2ZW50cyBhd2FpdGluZyB0aGVtLlxuLy8gV2UgbmVlZCB0byBlbnN1cmUgdGhpcyBkb2VzIG5vdCBjcmVhdGUgdW5oYW5kbGVkIHJlamVjdGlvbnMuXG5jb25zdCBnZXRTdWJwcm9jZXNzUHJvbWlzZXMgPSAoc291cmNlUHJvbWlzZSwgZGVzdGluYXRpb24pID0+IFByb21pc2UuYWxsU2V0dGxlZChbc291cmNlUHJvbWlzZSwgZGVzdGluYXRpb25dKTtcbiIsICJpbXBvcnQge29ufSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge2dldERlZmF1bHRIaWdoV2F0ZXJNYXJrfSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2dldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yfSBmcm9tICcuLi90cmFuc2Zvcm0vZW5jb2RpbmctdHJhbnNmb3JtLmpzJztcbmltcG9ydCB7Z2V0U3BsaXRMaW5lc0dlbmVyYXRvcn0gZnJvbSAnLi4vdHJhbnNmb3JtL3NwbGl0LmpzJztcbmltcG9ydCB7dHJhbnNmb3JtQ2h1bmtTeW5jLCBmaW5hbENodW5rc1N5bmN9IGZyb20gJy4uL3RyYW5zZm9ybS9ydW4tc3luYy5qcyc7XG5cbi8vIEl0ZXJhdGUgb3ZlciBsaW5lcyBvZiBgc3VicHJvY2Vzcy5zdGRvdXRgLCB1c2VkIGJ5IGBzdWJwcm9jZXNzLnJlYWRhYmxlfGR1cGxleHxpdGVyYWJsZSgpYFxuZXhwb3J0IGNvbnN0IGl0ZXJhdGVPblN1YnByb2Nlc3NTdHJlYW0gPSAoe3N1YnByb2Nlc3NTdGRvdXQsIHN1YnByb2Nlc3MsIGJpbmFyeSwgc2hvdWxkRW5jb2RlLCBlbmNvZGluZywgcHJlc2VydmVOZXdsaW5lc30pID0+IHtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0c3RvcFJlYWRpbmdPbkV4aXQoc3VicHJvY2VzcywgY29udHJvbGxlcik7XG5cdHJldHVybiBpdGVyYXRlT25TdHJlYW0oe1xuXHRcdHN0cmVhbTogc3VicHJvY2Vzc1N0ZG91dCxcblx0XHRjb250cm9sbGVyLFxuXHRcdGJpbmFyeSxcblx0XHRzaG91bGRFbmNvZGU6ICFzdWJwcm9jZXNzU3Rkb3V0LnJlYWRhYmxlT2JqZWN0TW9kZSAmJiBzaG91bGRFbmNvZGUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0c2hvdWxkU3BsaXQ6ICFzdWJwcm9jZXNzU3Rkb3V0LnJlYWRhYmxlT2JqZWN0TW9kZSxcblx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHR9KTtcbn07XG5cbmNvbnN0IHN0b3BSZWFkaW5nT25FeGl0ID0gYXN5bmMgKHN1YnByb2Nlc3MsIGNvbnRyb2xsZXIpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBzdWJwcm9jZXNzO1xuXHR9IGNhdGNoIHt9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0fVxufTtcblxuLy8gSXRlcmF0ZSBvdmVyIGxpbmVzIG9mIGBzdWJwcm9jZXNzLnN0ZG91dGAsIHVzZWQgYnkgYHJlc3VsdC5zdGRvdXRgIGFuZCB0aGUgYHZlcmJvc2U6ICdmdWxsJ2Agb3B0aW9uLlxuLy8gQXBwbGllcyB0aGUgYGxpbmVzYCBhbmQgYGVuY29kaW5nYCBvcHRpb25zLlxuZXhwb3J0IGNvbnN0IGl0ZXJhdGVGb3JSZXN1bHQgPSAoe3N0cmVhbSwgb25TdHJlYW1FbmQsIGxpbmVzLCBlbmNvZGluZywgc3RyaXBGaW5hbE5ld2xpbmUsIGFsbE1peGVkfSkgPT4ge1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRzdG9wUmVhZGluZ09uU3RyZWFtRW5kKG9uU3RyZWFtRW5kLCBjb250cm9sbGVyLCBzdHJlYW0pO1xuXHRjb25zdCBvYmplY3RNb2RlID0gc3RyZWFtLnJlYWRhYmxlT2JqZWN0TW9kZSAmJiAhYWxsTWl4ZWQ7XG5cdHJldHVybiBpdGVyYXRlT25TdHJlYW0oe1xuXHRcdHN0cmVhbSxcblx0XHRjb250cm9sbGVyLFxuXHRcdGJpbmFyeTogZW5jb2RpbmcgPT09ICdidWZmZXInLFxuXHRcdHNob3VsZEVuY29kZTogIW9iamVjdE1vZGUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0c2hvdWxkU3BsaXQ6ICFvYmplY3RNb2RlICYmIGxpbmVzLFxuXHRcdHByZXNlcnZlTmV3bGluZXM6ICFzdHJpcEZpbmFsTmV3bGluZSxcblx0fSk7XG59O1xuXG5jb25zdCBzdG9wUmVhZGluZ09uU3RyZWFtRW5kID0gYXN5bmMgKG9uU3RyZWFtRW5kLCBjb250cm9sbGVyLCBzdHJlYW0pID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBvblN0cmVhbUVuZDtcblx0fSBjYXRjaCB7XG5cdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0fSBmaW5hbGx5IHtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGVPblN0cmVhbSA9ICh7c3RyZWFtLCBjb250cm9sbGVyLCBiaW5hcnksIHNob3VsZEVuY29kZSwgZW5jb2RpbmcsIHNob3VsZFNwbGl0LCBwcmVzZXJ2ZU5ld2xpbmVzfSkgPT4ge1xuXHRjb25zdCBvblN0ZG91dENodW5rID0gb24oc3RyZWFtLCAnZGF0YScsIHtcblx0XHRzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuXHRcdGhpZ2hXYXRlck1hcms6IEhJR0hfV0FURVJfTUFSSyxcblx0XHQvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgbmFtZSBmb3IgdGhpcyBvcHRpb25cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvNTIwODAjZGlzY3Vzc2lvbl9yMTUyNTIyNzg2MVxuXHRcdC8vIEB0b2RvIFJlbW92ZSBhZnRlciByZW1vdmluZyBzdXBwb3J0IGZvciBOb2RlIDIxXG5cdFx0aGlnaFdhdGVybWFyazogSElHSF9XQVRFUl9NQVJLLFxuXHR9KTtcblx0cmV0dXJuIGl0ZXJhdGVPbkRhdGEoe1xuXHRcdG9uU3Rkb3V0Q2h1bmssXG5cdFx0Y29udHJvbGxlcixcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHNob3VsZFNwbGl0LFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0JKRUNUX0hJR0hfV0FURVJfTUFSSyA9IGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKHRydWUpO1xuXG4vLyBUaGUgYGhpZ2hXYXRlck1hcmtgIG9mIGBldmVudHMub24oKWAgaXMgbWVhc3VyZWQgaW4gbnVtYmVyIG9mIGV2ZW50cywgbm90IGluIGJ5dGVzLlxuLy8gTm90IGtub3dpbmcgdGhlIGF2ZXJhZ2UgYW1vdW50IG9mIGJ5dGVzIHBlciBgZGF0YWAgZXZlbnQsIHdlIHVzZSB0aGUgc2FtZSBoZXVyaXN0aWMgYXMgc3RyZWFtcyBpbiBvYmplY3RNb2RlLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgaXNzdWUuXG4vLyBUaGVyZWZvcmUsIHdlIHVzZSB0aGUgdmFsdWUgb2YgYGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKHRydWUpYC5cbi8vIE5vdGU6IHRoaXMgb3B0aW9uIGRvZXMgbm90IGV4aXN0IG9uIE5vZGUgMTgsIGJ1dCB0aGlzIGlzIG9rIHNpbmNlIHRoZSBsb2dpYyB3b3JrcyB3aXRob3V0IGl0LiBJdCBqdXN0IGNvbnN1bWVzIG1vcmUgbWVtb3J5LlxuY29uc3QgSElHSF9XQVRFUl9NQVJLID0gREVGQVVMVF9PQkpFQ1RfSElHSF9XQVRFUl9NQVJLO1xuXG5jb25zdCBpdGVyYXRlT25EYXRhID0gYXN5bmMgZnVuY3Rpb24gKiAoe29uU3Rkb3V0Q2h1bmssIGNvbnRyb2xsZXIsIGJpbmFyeSwgc2hvdWxkRW5jb2RlLCBlbmNvZGluZywgc2hvdWxkU3BsaXQsIHByZXNlcnZlTmV3bGluZXN9KSB7XG5cdGNvbnN0IGdlbmVyYXRvcnMgPSBnZXRHZW5lcmF0b3JzKHtcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHNob3VsZFNwbGl0LFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBbY2h1bmtdIG9mIG9uU3Rkb3V0Q2h1bmspIHtcblx0XHRcdHlpZWxkICogdHJhbnNmb3JtQ2h1bmtTeW5jKGNodW5rLCBnZW5lcmF0b3JzLCAwKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKCFjb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0eWllbGQgKiBmaW5hbENodW5rc1N5bmMoZ2VuZXJhdG9ycyk7XG5cdH1cbn07XG5cbmNvbnN0IGdldEdlbmVyYXRvcnMgPSAoe2JpbmFyeSwgc2hvdWxkRW5jb2RlLCBlbmNvZGluZywgc2hvdWxkU3BsaXQsIHByZXNlcnZlTmV3bGluZXN9KSA9PiBbXG5cdGdldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yKGJpbmFyeSwgZW5jb2RpbmcsICFzaG91bGRFbmNvZGUpLFxuXHRnZXRTcGxpdExpbmVzR2VuZXJhdG9yKGJpbmFyeSwgcHJlc2VydmVOZXdsaW5lcywgIXNob3VsZFNwbGl0LCB7fSksXG5dLmZpbHRlcihCb29sZWFuKTtcbiIsICJpbXBvcnQge3NldEltbWVkaWF0ZX0gZnJvbSAnbm9kZTp0aW1lcnMvcHJvbWlzZXMnO1xuaW1wb3J0IGdldFN0cmVhbSwge2dldFN0cmVhbUFzQXJyYXlCdWZmZXIsIGdldFN0cmVhbUFzQXJyYXl9IGZyb20gJ2dldC1zdHJlYW0nO1xuaW1wb3J0IHtpc0FycmF5QnVmZmVyfSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7c2hvdWxkTG9nT3V0cHV0LCBsb2dMaW5lc30gZnJvbSAnLi4vdmVyYm9zZS9vdXRwdXQuanMnO1xuaW1wb3J0IHtpdGVyYXRlRm9yUmVzdWx0fSBmcm9tICcuL2l0ZXJhdGUuanMnO1xuaW1wb3J0IHtoYW5kbGVNYXhCdWZmZXJ9IGZyb20gJy4vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge2dldFN0cmlwRmluYWxOZXdsaW5lfSBmcm9tICcuL3N0cmlwLW5ld2xpbmUuanMnO1xuXG4vLyBSZXRyaWV2ZSBgcmVzdWx0LnN0ZG91dHxzdGRlcnJ8YWxsfHN0ZGlvWypdYFxuZXhwb3J0IGNvbnN0IGdldFN0cmVhbU91dHB1dCA9IGFzeW5jICh7c3RyZWFtLCBvblN0cmVhbUVuZCwgZmROdW1iZXIsIGVuY29kaW5nLCBidWZmZXIsIG1heEJ1ZmZlciwgbGluZXMsIGFsbE1peGVkLCBzdHJpcEZpbmFsTmV3bGluZSwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm99KSA9PiB7XG5cdGNvbnN0IGxvZ1Byb21pc2UgPSBsb2dPdXRwdXRBc3luYyh7XG5cdFx0c3RyZWFtLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRcdGZkTnVtYmVyLFxuXHRcdGVuY29kaW5nLFxuXHRcdGFsbE1peGVkLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdHN0cmVhbUluZm8sXG5cdH0pO1xuXG5cdGlmICghYnVmZmVyKSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwoW3Jlc3VtZVN0cmVhbShzdHJlYW0pLCBsb2dQcm9taXNlXSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc3RyaXBGaW5hbE5ld2xpbmVWYWx1ZSA9IGdldFN0cmlwRmluYWxOZXdsaW5lKHN0cmlwRmluYWxOZXdsaW5lLCBmZE51bWJlcik7XG5cdGNvbnN0IGl0ZXJhYmxlID0gaXRlcmF0ZUZvclJlc3VsdCh7XG5cdFx0c3RyZWFtLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRcdGxpbmVzLFxuXHRcdGVuY29kaW5nLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lOiBzdHJpcEZpbmFsTmV3bGluZVZhbHVlLFxuXHRcdGFsbE1peGVkLFxuXHR9KTtcblx0Y29uc3QgW291dHB1dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0Z2V0U3RyZWFtQ29udGVudHMoe1xuXHRcdFx0c3RyZWFtLFxuXHRcdFx0aXRlcmFibGUsXG5cdFx0XHRmZE51bWJlcixcblx0XHRcdGVuY29kaW5nLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdFx0bGluZXMsXG5cdFx0fSksXG5cdFx0bG9nUHJvbWlzZSxcblx0XSk7XG5cdHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBsb2dPdXRwdXRBc3luYyA9IGFzeW5jICh7c3RyZWFtLCBvblN0cmVhbUVuZCwgZmROdW1iZXIsIGVuY29kaW5nLCBhbGxNaXhlZCwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm86IHtmaWxlRGVzY3JpcHRvcnN9fSkgPT4ge1xuXHRpZiAoIXNob3VsZExvZ091dHB1dCh7XG5cdFx0c3RkaW9JdGVtczogZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXT8uc3RkaW9JdGVtcyxcblx0XHRlbmNvZGluZyxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmZE51bWJlcixcblx0fSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5lc0l0ZXJhYmxlID0gaXRlcmF0ZUZvclJlc3VsdCh7XG5cdFx0c3RyZWFtLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRcdGxpbmVzOiB0cnVlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lOiB0cnVlLFxuXHRcdGFsbE1peGVkLFxuXHR9KTtcblx0YXdhaXQgbG9nTGluZXMobGluZXNJdGVyYWJsZSwgc3RyZWFtLCBmZE51bWJlciwgdmVyYm9zZUluZm8pO1xufTtcblxuLy8gV2hlbiB1c2luZyBgYnVmZmVyOiBmYWxzZWAsIHVzZXJzIG5lZWQgdG8gcmVhZCBgc3VicHJvY2Vzcy5zdGRvdXR8c3RkZXJyfGFsbGAgcmlnaHQgYXdheVxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZXhlY2EvaXNzdWVzLzczMCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9leGVjYS9wdWxsLzcyOSNkaXNjdXNzaW9uX3IxNDY1NDk2MzEwXG5jb25zdCByZXN1bWVTdHJlYW0gPSBhc3luYyBzdHJlYW0gPT4ge1xuXHRhd2FpdCBzZXRJbW1lZGlhdGUoKTtcblx0aWYgKHN0cmVhbS5yZWFkYWJsZUZsb3dpbmcgPT09IG51bGwpIHtcblx0XHRzdHJlYW0ucmVzdW1lKCk7XG5cdH1cbn07XG5cbmNvbnN0IGdldFN0cmVhbUNvbnRlbnRzID0gYXN5bmMgKHtzdHJlYW0sIHN0cmVhbToge3JlYWRhYmxlT2JqZWN0TW9kZX0sIGl0ZXJhYmxlLCBmZE51bWJlciwgZW5jb2RpbmcsIG1heEJ1ZmZlciwgbGluZXN9KSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHJlYWRhYmxlT2JqZWN0TW9kZSB8fCBsaW5lcykge1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldFN0cmVhbUFzQXJyYXkoaXRlcmFibGUsIHttYXhCdWZmZXJ9KTtcblx0XHR9XG5cblx0XHRpZiAoZW5jb2RpbmcgPT09ICdidWZmZXInKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgZ2V0U3RyZWFtQXNBcnJheUJ1ZmZlcihpdGVyYWJsZSwge21heEJ1ZmZlcn0pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXdhaXQgZ2V0U3RyZWFtKGl0ZXJhYmxlLCB7bWF4QnVmZmVyfSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIGhhbmRsZUJ1ZmZlcmVkRGF0YShoYW5kbGVNYXhCdWZmZXIoe1xuXHRcdFx0ZXJyb3IsXG5cdFx0XHRzdHJlYW0sXG5cdFx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0XHRsaW5lcyxcblx0XHRcdGVuY29kaW5nLFxuXHRcdFx0ZmROdW1iZXIsXG5cdFx0fSkpO1xuXHR9XG59O1xuXG4vLyBPbiBmYWlsdXJlLCBgcmVzdWx0LnN0ZG91dHxzdGRlcnJ8YWxsYCBzaG91bGQgY29udGFpbiB0aGUgY3VycmVudGx5IGJ1ZmZlcmVkIHN0cmVhbVxuLy8gVGhleSBhcmUgYXV0b21hdGljYWxseSBjbG9zZWQgYW5kIGZsdXNoZWQgYnkgTm9kZS5qcyB3aGVuIHRoZSBzdWJwcm9jZXNzIGV4aXRzXG4vLyBXaGVuIGBidWZmZXJgIGlzIGBmYWxzZWAsIGBzdHJlYW1Qcm9taXNlYCBpcyBgdW5kZWZpbmVkYCBhbmQgdGhlcmUgaXMgbm8gYnVmZmVyZWQgZGF0YSB0byByZXRyaWV2ZVxuZXhwb3J0IGNvbnN0IGdldEJ1ZmZlcmVkRGF0YSA9IGFzeW5jIHN0cmVhbVByb21pc2UgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBzdHJlYW1Qcm9taXNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBoYW5kbGVCdWZmZXJlZERhdGEoZXJyb3IpO1xuXHR9XG59O1xuXG4vLyBFbnN1cmUgd2UgYXJlIHJldHVybmluZyBVaW50OEFycmF5cyB3aGVuIHVzaW5nIGBlbmNvZGluZzogJ2J1ZmZlcidgXG5jb25zdCBoYW5kbGVCdWZmZXJlZERhdGEgPSAoe2J1ZmZlcmVkRGF0YX0pID0+IGlzQXJyYXlCdWZmZXIoYnVmZmVyZWREYXRhKVxuXHQ/IG5ldyBVaW50OEFycmF5KGJ1ZmZlcmVkRGF0YSlcblx0OiBidWZmZXJlZERhdGE7XG4iLCAiaW1wb3J0IHtmaW5pc2hlZH0gZnJvbSAnbm9kZTpzdHJlYW0vcHJvbWlzZXMnO1xuXG4vLyBXcmFwcyBgZmluaXNoZWQoc3RyZWFtKWAgdG8gaGFuZGxlIHRoZSBmb2xsb3dpbmcgY2FzZTpcbi8vICAtIFdoZW4gdGhlIHN1YnByb2Nlc3MgZXhpdHMsIE5vZGUuanMgYXV0b21hdGljYWxseSBjYWxscyBgc3VicHJvY2Vzcy5zdGRpbi5kZXN0cm95KClgLCB3aGljaCB3ZSBuZWVkIHRvIGlnbm9yZS5cbi8vICAtIEhvd2V2ZXIsIHdlIHN0aWxsIG5lZWQgdG8gdGhyb3cgaWYgYHN1YnByb2Nlc3Muc3RkaW4uZGVzdHJveSgpYCBpcyBjYWxsZWQgYmVmb3JlIHN1YnByb2Nlc3MgZXhpdC5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3RyZWFtID0gYXN5bmMgKHN0cmVhbSwgZmROdW1iZXIsIHN0cmVhbUluZm8sIHtpc1NhbWVEaXJlY3Rpb24sIHN0b3BPbkV4aXQgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBzdGF0ZSA9IGhhbmRsZVN0ZGluRGVzdHJveShzdHJlYW0sIHN0cmVhbUluZm8pO1xuXHRjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdC4uLihzdG9wT25FeGl0ID8gW3N0cmVhbUluZm8uZXhpdFByb21pc2VdIDogW10pLFxuXHRcdFx0ZmluaXNoZWQoc3RyZWFtLCB7Y2xlYW51cDogdHJ1ZSwgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsfSksXG5cdFx0XSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKCFzdGF0ZS5zdGRpbkNsZWFuZWRVcCkge1xuXHRcdFx0aGFuZGxlU3RyZWFtRXJyb3IoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24pO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcblx0fVxufTtcblxuLy8gSWYgYHN1YnByb2Nlc3Muc3RkaW5gIGlzIGRlc3Ryb3llZCBiZWZvcmUgYmVpbmcgZnVsbHkgd3JpdHRlbiB0bywgaXQgaXMgY29uc2lkZXJlZCBhYm9ydGVkIGFuZCBzaG91bGQgdGhyb3cgYW4gZXJyb3IuXG4vLyBUaGlzIGNhbiBoYXBwZW4gZm9yIGV4YW1wbGUgd2hlbiB1c2VyIGNhbGxlZCBgc3VicHJvY2Vzcy5zdGRpbi5kZXN0cm95KClgIGJlZm9yZSBgc3VicHJvY2Vzcy5zdGRpbi5lbmQoKWAuXG4vLyBIb3dldmVyLCBOb2RlLmpzIGNhbGxzIGBzdWJwcm9jZXNzLnN0ZGluLmRlc3Ryb3koKWAgb24gZXhpdCBmb3IgY2xlYW51cCBwdXJwb3Nlcy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzBiNGNkYjRiNDI5NTZjYmQ3MDE5MDU4ZTQwOWUwNjcwMGExOTllMTEvbGliL2ludGVybmFsL2NoaWxkX3Byb2Nlc3MuanMjTDI3OFxuLy8gVGhpcyBpcyBub3JtYWwgYW5kIHNob3VsZCBub3QgdGhyb3cgYW4gZXJyb3IuXG4vLyBUaGVyZWZvcmUsIHdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGJvdGggc2l0dWF0aW9ucyB0byBrbm93IHdoZXRoZXIgdG8gdGhyb3cgYW4gZXJyb3IuXG4vLyBVbmZvcnR1bmF0ZWx5LCBldmVudHMgKGBjbG9zZWAsIGBlcnJvcmAsIGBlbmRgLCBgZXhpdGApIGNhbm5vdCBiZSB1c2VkIGJlY2F1c2UgYC5kZXN0cm95KClgIGNhbiB0YWtlIGFuIGFyYml0cmFyeSBhbW91bnQgb2YgdGltZS5cbi8vIEZvciBleGFtcGxlLCBgc3RkaW46ICdwaXBlJ2AgaXMgaW1wbGVtZW50ZWQgYXMgYSBUQ1Agc29ja2V0LCBhbmQgaXRzIGAuZGVzdHJveSgpYCBtZXRob2Qgd2FpdHMgZm9yIFRDUCBkaXNjb25uZWN0aW9uLlxuLy8gVGhlcmVmb3JlIGAuZGVzdHJveSgpYCBtaWdodCBlbmQgYmVmb3JlIG9yIGFmdGVyIHN1YnByb2Nlc3MgZXhpdCwgYmFzZWQgb24gT1Mgc3BlZWQgYW5kIGxvYWQuXG4vLyBUaGUgb25seSB3YXkgdG8gZGV0ZWN0IHRoaXMgaXMgdG8gc3B5IG9uIGBzdWJwcm9jZXNzLnN0ZGluLl9kZXN0cm95KClgIGJ5IHdyYXBwaW5nIGl0LlxuLy8gSWYgYHN1YnByb2Nlc3MuZXhpdENvZGVgIG9yIGBzdWJwcm9jZXNzLnNpZ25hbENvZGVgIGlzIHNldCwgaXQgbWVhbnMgYC5kZXN0cm95KClgIGlzIGJlaW5nIGNhbGxlZCBieSBOb2RlLmpzIGl0c2VsZi5cbmNvbnN0IGhhbmRsZVN0ZGluRGVzdHJveSA9IChzdHJlYW0sIHtvcmlnaW5hbFN0cmVhbXM6IFtvcmlnaW5hbFN0ZGluXSwgc3VicHJvY2Vzc30pID0+IHtcblx0Y29uc3Qgc3RhdGUgPSB7c3RkaW5DbGVhbmVkVXA6IGZhbHNlfTtcblx0aWYgKHN0cmVhbSA9PT0gb3JpZ2luYWxTdGRpbikge1xuXHRcdHNweU9uU3RkaW5EZXN0cm95KHN0cmVhbSwgc3VicHJvY2Vzcywgc3RhdGUpO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3Qgc3B5T25TdGRpbkRlc3Ryb3kgPSAoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCBzdGF0ZSkgPT4ge1xuXHRjb25zdCB7X2Rlc3Ryb3l9ID0gc3VicHJvY2Vzc1N0ZGluO1xuXHRzdWJwcm9jZXNzU3RkaW4uX2Rlc3Ryb3kgPSAoLi4uZGVzdHJveUFyZ3VtZW50cykgPT4ge1xuXHRcdHNldFN0ZGluQ2xlYW5lZFVwKHN1YnByb2Nlc3MsIHN0YXRlKTtcblx0XHRfZGVzdHJveS5jYWxsKHN1YnByb2Nlc3NTdGRpbiwgLi4uZGVzdHJveUFyZ3VtZW50cyk7XG5cdH07XG59O1xuXG5jb25zdCBzZXRTdGRpbkNsZWFuZWRVcCA9ICh7ZXhpdENvZGUsIHNpZ25hbENvZGV9LCBzdGF0ZSkgPT4ge1xuXHRpZiAoZXhpdENvZGUgIT09IG51bGwgfHwgc2lnbmFsQ29kZSAhPT0gbnVsbCkge1xuXHRcdHN0YXRlLnN0ZGluQ2xlYW5lZFVwID0gdHJ1ZTtcblx0fVxufTtcblxuLy8gV2UgaWdub3JlIEVQSVBFcyBvbiB3cml0YWJsZSBzdHJlYW1zIGFuZCBhYm9ydHMgb24gcmVhZGFibGUgc3RyZWFtcyBzaW5jZSB0aG9zZSBjYW4gaGFwcGVuIG5vcm1hbGx5LlxuLy8gV2hlbiBvbmUgc3RyZWFtIGVycm9ycywgdGhlIGVycm9yIGlzIHByb3BhZ2F0ZWQgdG8gdGhlIG90aGVyIHN0cmVhbXMgb24gdGhlIHNhbWUgZmlsZSBkZXNjcmlwdG9yLlxuLy8gVGhvc2Ugb3RoZXIgc3RyZWFtcyBtaWdodCBoYXZlIGEgZGlmZmVyZW50IGRpcmVjdGlvbiBkdWUgdG8gdGhlIGFib3ZlLlxuLy8gV2hlbiB0aGlzIGhhcHBlbnMsIHRoZSBkaXJlY3Rpb24gb2YgYm90aCB0aGUgaW5pdGlhbCBzdHJlYW0gYW5kIHRoZSBvdGhlcnMgc2hvdWxkIHRoZW4gYmUgdGFrZW4gaW50byBhY2NvdW50LlxuLy8gVGhlcmVmb3JlLCB3ZSBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgYSBzdHJlYW0gZXJyb3IgaXMgY3VycmVudGx5IHByb3BhZ2F0aW5nLlxuY29uc3QgaGFuZGxlU3RyZWFtRXJyb3IgPSAoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24pID0+IHtcblx0aWYgKCFzaG91bGRJZ25vcmVTdHJlYW1FcnJvcihlcnJvciwgZmROdW1iZXIsIHN0cmVhbUluZm8sIGlzU2FtZURpcmVjdGlvbikpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuY29uc3Qgc2hvdWxkSWdub3JlU3RyZWFtRXJyb3IgPSAoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24gPSB0cnVlKSA9PiB7XG5cdGlmIChzdHJlYW1JbmZvLnByb3BhZ2F0aW5nKSB7XG5cdFx0cmV0dXJuIGlzU3RyZWFtRXBpcGUoZXJyb3IpIHx8IGlzU3RyZWFtQWJvcnQoZXJyb3IpO1xuXHR9XG5cblx0c3RyZWFtSW5mby5wcm9wYWdhdGluZyA9IHRydWU7XG5cdHJldHVybiBpc0lucHV0RmlsZURlc2NyaXB0b3Ioc3RyZWFtSW5mbywgZmROdW1iZXIpID09PSBpc1NhbWVEaXJlY3Rpb25cblx0XHQ/IGlzU3RyZWFtRXBpcGUoZXJyb3IpXG5cdFx0OiBpc1N0cmVhbUFib3J0KGVycm9yKTtcbn07XG5cbi8vIFVuZm9ydHVuYXRlbHksIHdlIGNhbm5vdCB1c2UgdGhlIHN0cmVhbSdzIGNsYXNzIG9yIHByb3BlcnRpZXMgdG8ga25vdyB3aGV0aGVyIGl0IGlzIHJlYWRhYmxlIG9yIHdyaXRhYmxlLlxuLy8gRm9yIGV4YW1wbGUsIGBzdWJwcm9jZXNzLnN0ZGluYCBpcyB0ZWNobmljYWxseSBhIER1cGxleCwgYnV0IGNhbiBvbmx5IGJlIHVzZWQgYXMgYSB3cml0YWJsZS5cbi8vIFRoZXJlZm9yZSwgd2UgbmVlZCB0byB1c2UgdGhlIGZpbGUgZGVzY3JpcHRvcidzIGRpcmVjdGlvbiAoYHN0ZGluYCBpcyBpbnB1dCwgYHN0ZG91dGAgaXMgb3V0cHV0LCBldGMuKS5cbi8vIEhvd2V2ZXIsIHdoaWxlIGBzdWJwcm9jZXNzLnN0ZCpgIGFuZCB0cmFuc2Zvcm1zIGZvbGxvdyB0aGF0IGRpcmVjdGlvbiwgYW55IHN0cmVhbSBwYXNzZWQgdGhlIGBzdGQqYCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4vLyBGb3IgZXhhbXBsZSwgYHN1YnByb2Nlc3Muc3RkaW5gIGlzIGEgd3JpdGFibGUsIGJ1dCB0aGUgYHN0ZGluYCBvcHRpb24gaXMgYSByZWFkYWJsZS5cbmV4cG9ydCBjb25zdCBpc0lucHV0RmlsZURlc2NyaXB0b3IgPSAoe2ZpbGVEZXNjcmlwdG9yc30sIGZkTnVtYmVyKSA9PiBmZE51bWJlciAhPT0gJ2FsbCcgJiYgZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXS5kaXJlY3Rpb24gPT09ICdpbnB1dCc7XG5cbi8vIFdoZW4gYHN0cmVhbS5kZXN0cm95KClgIGlzIGNhbGxlZCB3aXRob3V0IGFuIGBlcnJvcmAgYXJndW1lbnQsIHN0cmVhbSBpcyBhYm9ydGVkLlxuLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gYWJvcnQgYSByZWFkYWJsZSBzdHJlYW0sIHdoaWNoIGNhbiBiZSB1c2VmdWwgaW4gc29tZSBpbnN0YW5jZXMuXG4vLyBUaGVyZWZvcmUsIHdlIGlnbm9yZSB0aGlzIGVycm9yIG9uIHJlYWRhYmxlIHN0cmVhbXMuXG5leHBvcnQgY29uc3QgaXNTdHJlYW1BYm9ydCA9IGVycm9yID0+IGVycm9yPy5jb2RlID09PSAnRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UnO1xuXG4vLyBXaGVuIGBzdHJlYW0ud3JpdGUoKWAgaXMgY2FsbGVkIGJ1dCB0aGUgdW5kZXJseWluZyBzb3VyY2UgaGFzIGJlZW4gY2xvc2VkLCBgRVBJUEVgIGlzIGVtaXR0ZWQuXG4vLyBXaGVuIHBpcGluZyBzdWJwcm9jZXNzZXMsIHRoZSBzb3VyY2Ugc3VicHJvY2VzcyB1c3VhbGx5IGRlY2lkZXMgd2hlbiB0byBzdG9wIHBpcGluZy5cbi8vIEhvd2V2ZXIsIHRoZXJlIGFyZSBzb21lIGluc3RhbmNlcyB3aGVuIHRoZSBkZXN0aW5hdGlvbiBkb2VzIGluc3RlYWQsIHN1Y2ggYXMgYC4uLiB8IGhlYWQgLW4xYC5cbi8vIEl0IG5vdGlmaWVzIHRoZSBzb3VyY2UgYnkgdXNpbmcgYEVQSVBFYC5cbi8vIFRoZXJlZm9yZSwgd2UgaWdub3JlIHRoaXMgZXJyb3Igb24gd3JpdGFibGUgc3RyZWFtcy5cbmNvbnN0IGlzU3RyZWFtRXBpcGUgPSBlcnJvciA9PiBlcnJvcj8uY29kZSA9PT0gJ0VQSVBFJztcbiIsICJpbXBvcnQge2dldFN0cmVhbU91dHB1dH0gZnJvbSAnLi4vaW8vY29udGVudHMuanMnO1xuaW1wb3J0IHt3YWl0Rm9yU3RyZWFtLCBpc0lucHV0RmlsZURlc2NyaXB0b3J9IGZyb20gJy4vd2FpdC1zdHJlYW0uanMnO1xuXG4vLyBSZWFkIHRoZSBjb250ZW50cyBvZiBgc3VicHJvY2Vzcy5zdGQqYCBhbmR8b3Igd2FpdCBmb3IgaXRzIGNvbXBsZXRpb25cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3RkaW9TdHJlYW1zID0gKHtzdWJwcm9jZXNzLCBlbmNvZGluZywgYnVmZmVyLCBtYXhCdWZmZXIsIGxpbmVzLCBzdHJpcEZpbmFsTmV3bGluZSwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm99KSA9PiBzdWJwcm9jZXNzLnN0ZGlvLm1hcCgoc3RyZWFtLCBmZE51bWJlcikgPT4gd2FpdEZvclN1YnByb2Nlc3NTdHJlYW0oe1xuXHRzdHJlYW0sXG5cdGZkTnVtYmVyLFxuXHRlbmNvZGluZyxcblx0YnVmZmVyOiBidWZmZXJbZmROdW1iZXJdLFxuXHRtYXhCdWZmZXI6IG1heEJ1ZmZlcltmZE51bWJlcl0sXG5cdGxpbmVzOiBsaW5lc1tmZE51bWJlcl0sXG5cdGFsbE1peGVkOiBmYWxzZSxcblx0c3RyaXBGaW5hbE5ld2xpbmUsXG5cdHZlcmJvc2VJbmZvLFxuXHRzdHJlYW1JbmZvLFxufSkpO1xuXG4vLyBSZWFkIHRoZSBjb250ZW50cyBvZiBgc3VicHJvY2Vzcy5zdGQqYCBvciBgc3VicHJvY2Vzcy5hbGxgIGFuZHxvciB3YWl0IGZvciBpdHMgY29tcGxldGlvblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JTdWJwcm9jZXNzU3RyZWFtID0gYXN5bmMgKHtzdHJlYW0sIGZkTnVtYmVyLCBlbmNvZGluZywgYnVmZmVyLCBtYXhCdWZmZXIsIGxpbmVzLCBhbGxNaXhlZCwgc3RyaXBGaW5hbE5ld2xpbmUsIHZlcmJvc2VJbmZvLCBzdHJlYW1JbmZvfSkgPT4ge1xuXHRpZiAoIXN0cmVhbSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uU3RyZWFtRW5kID0gd2FpdEZvclN0cmVhbShzdHJlYW0sIGZkTnVtYmVyLCBzdHJlYW1JbmZvKTtcblx0aWYgKGlzSW5wdXRGaWxlRGVzY3JpcHRvcihzdHJlYW1JbmZvLCBmZE51bWJlcikpIHtcblx0XHRhd2FpdCBvblN0cmVhbUVuZDtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBbb3V0cHV0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRnZXRTdHJlYW1PdXRwdXQoe1xuXHRcdFx0c3RyZWFtLFxuXHRcdFx0b25TdHJlYW1FbmQsXG5cdFx0XHRmZE51bWJlcixcblx0XHRcdGVuY29kaW5nLFxuXHRcdFx0YnVmZmVyLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdFx0bGluZXMsXG5cdFx0XHRhbGxNaXhlZCxcblx0XHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdFx0dmVyYm9zZUluZm8sXG5cdFx0XHRzdHJlYW1JbmZvLFxuXHRcdH0pLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRdKTtcblx0cmV0dXJuIG91dHB1dDtcbn07XG4iLCAiaW1wb3J0IG1lcmdlU3RyZWFtcyBmcm9tICdAc2luZHJlc29yaHVzL21lcmdlLXN0cmVhbXMnO1xuaW1wb3J0IHt3YWl0Rm9yU3VicHJvY2Vzc1N0cmVhbX0gZnJvbSAnLi9zdGRpby5qcyc7XG5cbi8vIGBhbGxgIGludGVybGVhdmVzIGBzdGRvdXRgIGFuZCBgc3RkZXJyYFxuZXhwb3J0IGNvbnN0IG1ha2VBbGxTdHJlYW0gPSAoe3N0ZG91dCwgc3RkZXJyfSwge2FsbH0pID0+IGFsbCAmJiAoc3Rkb3V0IHx8IHN0ZGVycilcblx0PyBtZXJnZVN0cmVhbXMoW3N0ZG91dCwgc3RkZXJyXS5maWx0ZXIoQm9vbGVhbikpXG5cdDogdW5kZWZpbmVkO1xuXG4vLyBSZWFkIHRoZSBjb250ZW50cyBvZiBgc3VicHJvY2Vzcy5hbGxgIGFuZHxvciB3YWl0IGZvciBpdHMgY29tcGxldGlvblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JBbGxTdHJlYW0gPSAoe3N1YnByb2Nlc3MsIGVuY29kaW5nLCBidWZmZXIsIG1heEJ1ZmZlciwgbGluZXMsIHN0cmlwRmluYWxOZXdsaW5lLCB2ZXJib3NlSW5mbywgc3RyZWFtSW5mb30pID0+IHdhaXRGb3JTdWJwcm9jZXNzU3RyZWFtKHtcblx0Li4uZ2V0QWxsU3RyZWFtKHN1YnByb2Nlc3MsIGJ1ZmZlciksXG5cdGZkTnVtYmVyOiAnYWxsJyxcblx0ZW5jb2RpbmcsXG5cdG1heEJ1ZmZlcjogbWF4QnVmZmVyWzFdICsgbWF4QnVmZmVyWzJdLFxuXHRsaW5lczogbGluZXNbMV0gfHwgbGluZXNbMl0sXG5cdGFsbE1peGVkOiBnZXRBbGxNaXhlZChzdWJwcm9jZXNzKSxcblx0c3RyaXBGaW5hbE5ld2xpbmUsXG5cdHZlcmJvc2VJbmZvLFxuXHRzdHJlYW1JbmZvLFxufSk7XG5cbmNvbnN0IGdldEFsbFN0cmVhbSA9ICh7c3Rkb3V0LCBzdGRlcnIsIGFsbH0sIFssIGJ1ZmZlclN0ZG91dCwgYnVmZmVyU3RkZXJyXSkgPT4ge1xuXHRjb25zdCBidWZmZXIgPSBidWZmZXJTdGRvdXQgfHwgYnVmZmVyU3RkZXJyO1xuXHRpZiAoIWJ1ZmZlcikge1xuXHRcdHJldHVybiB7c3RyZWFtOiBhbGwsIGJ1ZmZlcn07XG5cdH1cblxuXHRpZiAoIWJ1ZmZlclN0ZG91dCkge1xuXHRcdHJldHVybiB7c3RyZWFtOiBzdGRlcnIsIGJ1ZmZlcn07XG5cdH1cblxuXHRpZiAoIWJ1ZmZlclN0ZGVycikge1xuXHRcdHJldHVybiB7c3RyZWFtOiBzdGRvdXQsIGJ1ZmZlcn07XG5cdH1cblxuXHRyZXR1cm4ge3N0cmVhbTogYWxsLCBidWZmZXJ9O1xufTtcblxuLy8gV2hlbiBgc3VicHJvY2Vzcy5zdGRvdXRgIGlzIGluIG9iamVjdE1vZGUgYnV0IG5vdCBgc3VicHJvY2Vzcy5zdGRlcnJgIChvciB0aGUgb3Bwb3NpdGUpLCB3ZSBuZWVkIHRvIHVzZSBib3RoOlxuLy8gIC0gYGdldFN0cmVhbUFzQXJyYXkoKWAgZm9yIHRoZSBjaHVua3MgaW4gb2JqZWN0TW9kZSwgdG8gcmV0dXJuIGFzIGFuIGFycmF5IHdpdGhvdXQgY2hhbmdpbmcgZWFjaCBjaHVua1xuLy8gIC0gYGdldFN0cmVhbUFzQXJyYXlCdWZmZXIoKWAgb3IgYGdldFN0cmVhbSgpYCBmb3IgdGhlIGNodW5rcyBub3QgaW4gb2JqZWN0TW9kZSwgdG8gY29udmVydCB0aGVtIGZyb20gQnVmZmVycyB0byBzdHJpbmcgb3IgVWludDhBcnJheVxuLy8gV2UgZG8gdGhpcyBieSBlbXVsYXRpbmcgdGhlIEJ1ZmZlciAtPiBzdHJpbmd8VWludDhBcnJheSBjb252ZXJzaW9uIHBlcmZvcm1lZCBieSBgZ2V0LXN0cmVhbWAgd2l0aCBvdXIgb3duLCB3aGljaCBpcyBpZGVudGljYWwuXG5jb25zdCBnZXRBbGxNaXhlZCA9ICh7YWxsLCBzdGRvdXQsIHN0ZGVycn0pID0+IGFsbFxuXHQmJiBzdGRvdXRcblx0JiYgc3RkZXJyXG5cdCYmIHN0ZG91dC5yZWFkYWJsZU9iamVjdE1vZGUgIT09IHN0ZGVyci5yZWFkYWJsZU9iamVjdE1vZGU7XG4iLCAiaW1wb3J0IHt2ZXJib3NlTG9nLCBzZXJpYWxpemVWZXJib3NlTWVzc2FnZX0gZnJvbSAnLi9sb2cuanMnO1xuaW1wb3J0IHtpc0Z1bGxWZXJib3NlfSBmcm9tICcuL3ZhbHVlcy5qcyc7XG5cbi8vIFdoZW4gYHZlcmJvc2VgIGlzIGAnZnVsbCdgLCBwcmludCBJUEMgbWVzc2FnZXMgZnJvbSB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IHNob3VsZExvZ0lwYyA9IHZlcmJvc2VJbmZvID0+IGlzRnVsbFZlcmJvc2UodmVyYm9zZUluZm8sICdpcGMnKTtcblxuZXhwb3J0IGNvbnN0IGxvZ0lwY091dHB1dCA9IChtZXNzYWdlLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRjb25zdCB2ZXJib3NlTWVzc2FnZSA9IHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlKG1lc3NhZ2UpO1xuXHR2ZXJib3NlTG9nKHtcblx0XHR0eXBlOiAnaXBjJyxcblx0XHR2ZXJib3NlTWVzc2FnZSxcblx0XHRmZE51bWJlcjogJ2lwYycsXG5cdFx0dmVyYm9zZUluZm8sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2NoZWNrSXBjTWF4QnVmZmVyfSBmcm9tICcuLi9pby9tYXgtYnVmZmVyLmpzJztcbmltcG9ydCB7c2hvdWxkTG9nSXBjLCBsb2dJcGNPdXRwdXR9IGZyb20gJy4uL3ZlcmJvc2UvaXBjLmpzJztcbmltcG9ydCB7Z2V0RmRTcGVjaWZpY1ZhbHVlfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuaW1wb3J0IHtsb29wT25NZXNzYWdlc30gZnJvbSAnLi9nZXQtZWFjaC5qcyc7XG5cbi8vIEl0ZXJhdGUgdGhyb3VnaCBJUEMgbWVzc2FnZXMgc2VudCBieSB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JJcGNPdXRwdXQgPSBhc3luYyAoe1xuXHRzdWJwcm9jZXNzLFxuXHRidWZmZXI6IGJ1ZmZlckFycmF5LFxuXHRtYXhCdWZmZXI6IG1heEJ1ZmZlckFycmF5LFxuXHRpcGMsXG5cdGlwY091dHB1dCxcblx0dmVyYm9zZUluZm8sXG59KSA9PiB7XG5cdGlmICghaXBjKSB7XG5cdFx0cmV0dXJuIGlwY091dHB1dDtcblx0fVxuXG5cdGNvbnN0IGlzVmVyYm9zZSA9IHNob3VsZExvZ0lwYyh2ZXJib3NlSW5mbyk7XG5cdGNvbnN0IGJ1ZmZlciA9IGdldEZkU3BlY2lmaWNWYWx1ZShidWZmZXJBcnJheSwgJ2lwYycpO1xuXHRjb25zdCBtYXhCdWZmZXIgPSBnZXRGZFNwZWNpZmljVmFsdWUobWF4QnVmZmVyQXJyYXksICdpcGMnKTtcblxuXHRmb3IgYXdhaXQgKGNvbnN0IG1lc3NhZ2Ugb2YgbG9vcE9uTWVzc2FnZXMoe1xuXHRcdGFueVByb2Nlc3M6IHN1YnByb2Nlc3MsXG5cdFx0Y2hhbm5lbDogc3VicHJvY2Vzcy5jaGFubmVsLFxuXHRcdGlzU3VicHJvY2VzczogZmFsc2UsXG5cdFx0aXBjLFxuXHRcdHNob3VsZEF3YWl0OiBmYWxzZSxcblx0XHRyZWZlcmVuY2U6IHRydWUsXG5cdH0pKSB7XG5cdFx0aWYgKGJ1ZmZlcikge1xuXHRcdFx0Y2hlY2tJcGNNYXhCdWZmZXIoc3VicHJvY2VzcywgaXBjT3V0cHV0LCBtYXhCdWZmZXIpO1xuXHRcdFx0aXBjT3V0cHV0LnB1c2gobWVzc2FnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzVmVyYm9zZSkge1xuXHRcdFx0bG9nSXBjT3V0cHV0KG1lc3NhZ2UsIHZlcmJvc2VJbmZvKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaXBjT3V0cHV0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJ1ZmZlcmVkSXBjT3V0cHV0ID0gYXN5bmMgKGlwY091dHB1dFByb21pc2UsIGlwY091dHB1dCkgPT4ge1xuXHRhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoW2lwY091dHB1dFByb21pc2VdKTtcblx0cmV0dXJuIGlwY091dHB1dDtcbn07XG4iLCAiaW1wb3J0IHtvbmNlfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge2lzU3RyZWFtIGFzIGlzTm9kZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7dGhyb3dPblRpbWVvdXR9IGZyb20gJy4uL3Rlcm1pbmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7dGhyb3dPbkNhbmNlbH0gZnJvbSAnLi4vdGVybWluYXRlL2NhbmNlbC5qcyc7XG5pbXBvcnQge3Rocm93T25HcmFjZWZ1bENhbmNlbH0gZnJvbSAnLi4vdGVybWluYXRlL2dyYWNlZnVsLmpzJztcbmltcG9ydCB7aXNTdGFuZGFyZFN0cmVhbX0gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcbmltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7Z2V0QnVmZmVyZWREYXRhfSBmcm9tICcuLi9pby9jb250ZW50cy5qcyc7XG5pbXBvcnQge3dhaXRGb3JJcGNPdXRwdXQsIGdldEJ1ZmZlcmVkSXBjT3V0cHV0fSBmcm9tICcuLi9pcGMvYnVmZmVyLW1lc3NhZ2VzLmpzJztcbmltcG9ydCB7c2VuZElwY0lucHV0fSBmcm9tICcuLi9pcGMvaXBjLWlucHV0LmpzJztcbmltcG9ydCB7d2FpdEZvckFsbFN0cmVhbX0gZnJvbSAnLi9hbGwtYXN5bmMuanMnO1xuaW1wb3J0IHt3YWl0Rm9yU3RkaW9TdHJlYW1zfSBmcm9tICcuL3N0ZGlvLmpzJztcbmltcG9ydCB7d2FpdEZvckV4aXQsIHdhaXRGb3JTdWNjZXNzZnVsRXhpdH0gZnJvbSAnLi9leGl0LWFzeW5jLmpzJztcbmltcG9ydCB7d2FpdEZvclN0cmVhbX0gZnJvbSAnLi93YWl0LXN0cmVhbS5qcyc7XG5cbi8vIFJldHJpZXZlIHJlc3VsdCBvZiBzdWJwcm9jZXNzOiBleGl0IGNvZGUsIHNpZ25hbCwgZXJyb3IsIHN0cmVhbXMgKHN0ZG91dC9zdGRlcnIvYWxsKVxuZXhwb3J0IGNvbnN0IHdhaXRGb3JTdWJwcm9jZXNzUmVzdWx0ID0gYXN5bmMgKHtcblx0c3VicHJvY2Vzcyxcblx0b3B0aW9uczoge1xuXHRcdGVuY29kaW5nLFxuXHRcdGJ1ZmZlcixcblx0XHRtYXhCdWZmZXIsXG5cdFx0bGluZXMsXG5cdFx0dGltZW91dER1cmF0aW9uOiB0aW1lb3V0LFxuXHRcdGNhbmNlbFNpZ25hbCxcblx0XHRncmFjZWZ1bENhbmNlbCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdGlwYyxcblx0XHRpcGNJbnB1dCxcblx0fSxcblx0Y29udGV4dCxcblx0dmVyYm9zZUluZm8sXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0b3JpZ2luYWxTdHJlYW1zLFxuXHRvbkludGVybmFsRXJyb3IsXG5cdGNvbnRyb2xsZXIsXG59KSA9PiB7XG5cdGNvbnN0IGV4aXRQcm9taXNlID0gd2FpdEZvckV4aXQoc3VicHJvY2VzcywgY29udGV4dCk7XG5cdGNvbnN0IHN0cmVhbUluZm8gPSB7XG5cdFx0b3JpZ2luYWxTdHJlYW1zLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGV4aXRQcm9taXNlLFxuXHRcdHByb3BhZ2F0aW5nOiBmYWxzZSxcblx0fTtcblxuXHRjb25zdCBzdGRpb1Byb21pc2VzID0gd2FpdEZvclN0ZGlvU3RyZWFtcyh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRlbmNvZGluZyxcblx0XHRidWZmZXIsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdGxpbmVzLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdHN0cmVhbUluZm8sXG5cdH0pO1xuXHRjb25zdCBhbGxQcm9taXNlID0gd2FpdEZvckFsbFN0cmVhbSh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRlbmNvZGluZyxcblx0XHRidWZmZXIsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdGxpbmVzLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdHN0cmVhbUluZm8sXG5cdH0pO1xuXHRjb25zdCBpcGNPdXRwdXQgPSBbXTtcblx0Y29uc3QgaXBjT3V0cHV0UHJvbWlzZSA9IHdhaXRGb3JJcGNPdXRwdXQoe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0YnVmZmVyLFxuXHRcdG1heEJ1ZmZlcixcblx0XHRpcGMsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9KTtcblx0Y29uc3Qgb3JpZ2luYWxQcm9taXNlcyA9IHdhaXRGb3JPcmlnaW5hbFN0cmVhbXMob3JpZ2luYWxTdHJlYW1zLCBzdWJwcm9jZXNzLCBzdHJlYW1JbmZvKTtcblx0Y29uc3QgY3VzdG9tU3RyZWFtc0VuZFByb21pc2VzID0gd2FpdEZvckN1c3RvbVN0cmVhbXNFbmQoZmlsZURlc2NyaXB0b3JzLCBzdHJlYW1JbmZvKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0UHJvbWlzZS5hbGwoW1xuXHRcdFx0XHR7fSxcblx0XHRcdFx0d2FpdEZvclN1Y2Nlc3NmdWxFeGl0KGV4aXRQcm9taXNlKSxcblx0XHRcdFx0UHJvbWlzZS5hbGwoc3RkaW9Qcm9taXNlcyksXG5cdFx0XHRcdGFsbFByb21pc2UsXG5cdFx0XHRcdGlwY091dHB1dFByb21pc2UsXG5cdFx0XHRcdHNlbmRJcGNJbnB1dChzdWJwcm9jZXNzLCBpcGNJbnB1dCksXG5cdFx0XHRcdC4uLm9yaWdpbmFsUHJvbWlzZXMsXG5cdFx0XHRcdC4uLmN1c3RvbVN0cmVhbXNFbmRQcm9taXNlcyxcblx0XHRcdF0pLFxuXHRcdFx0b25JbnRlcm5hbEVycm9yLFxuXHRcdFx0dGhyb3dPblN1YnByb2Nlc3NFcnJvcihzdWJwcm9jZXNzLCBjb250cm9sbGVyKSxcblx0XHRcdC4uLnRocm93T25UaW1lb3V0KHN1YnByb2Nlc3MsIHRpbWVvdXQsIGNvbnRleHQsIGNvbnRyb2xsZXIpLFxuXHRcdFx0Li4udGhyb3dPbkNhbmNlbCh7XG5cdFx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHRcdGNhbmNlbFNpZ25hbCxcblx0XHRcdFx0Z3JhY2VmdWxDYW5jZWwsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdGNvbnRyb2xsZXIsXG5cdFx0XHR9KSxcblx0XHRcdC4uLnRocm93T25HcmFjZWZ1bENhbmNlbCh7XG5cdFx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHRcdGNhbmNlbFNpZ25hbCxcblx0XHRcdFx0Z3JhY2VmdWxDYW5jZWwsXG5cdFx0XHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdGNvbnRyb2xsZXIsXG5cdFx0XHR9KSxcblx0XHRdKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID8/PSAnb3RoZXInO1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChbXG5cdFx0XHR7ZXJyb3J9LFxuXHRcdFx0ZXhpdFByb21pc2UsXG5cdFx0XHRQcm9taXNlLmFsbChzdGRpb1Byb21pc2VzLm1hcChzdGRpb1Byb21pc2UgPT4gZ2V0QnVmZmVyZWREYXRhKHN0ZGlvUHJvbWlzZSkpKSxcblx0XHRcdGdldEJ1ZmZlcmVkRGF0YShhbGxQcm9taXNlKSxcblx0XHRcdGdldEJ1ZmZlcmVkSXBjT3V0cHV0KGlwY091dHB1dFByb21pc2UsIGlwY091dHB1dCksXG5cdFx0XHRQcm9taXNlLmFsbFNldHRsZWQob3JpZ2luYWxQcm9taXNlcyksXG5cdFx0XHRQcm9taXNlLmFsbFNldHRsZWQoY3VzdG9tU3RyZWFtc0VuZFByb21pc2VzKSxcblx0XHRdKTtcblx0fVxufTtcblxuLy8gVHJhbnNmb3JtcyByZXBsYWNlIGBzdWJwcm9jZXNzLnN0ZCpgLCB3aGljaCBtZWFucyB0aGV5IGFyZSBub3QgZXhwb3NlZCB0byB1c2Vycy5cbi8vIEhvd2V2ZXIsIHdlIHN0aWxsIHdhbnQgdG8gd2FpdCBmb3IgdGhlaXIgY29tcGxldGlvbi5cbmNvbnN0IHdhaXRGb3JPcmlnaW5hbFN0cmVhbXMgPSAob3JpZ2luYWxTdHJlYW1zLCBzdWJwcm9jZXNzLCBzdHJlYW1JbmZvKSA9PlxuXHRvcmlnaW5hbFN0cmVhbXMubWFwKChzdHJlYW0sIGZkTnVtYmVyKSA9PiBzdHJlYW0gPT09IHN1YnByb2Nlc3Muc3RkaW9bZmROdW1iZXJdXG5cdFx0PyB1bmRlZmluZWRcblx0XHQ6IHdhaXRGb3JTdHJlYW0oc3RyZWFtLCBmZE51bWJlciwgc3RyZWFtSW5mbykpO1xuXG4vLyBTb21lIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgb3B0aW9ucyBjcmVhdGUgYSBzdHJlYW0sIGUuZy4gd2hlbiBwYXNzaW5nIGEgZmlsZSBwYXRoLlxuLy8gVGhlIGAucGlwZSgpYCBtZXRob2QgYXV0b21hdGljYWxseSBlbmRzIHRoYXQgc3RyZWFtIHdoZW4gYHN1YnByb2Nlc3NgIGVuZHMuXG4vLyBUaGlzIG1ha2VzIHN1cmUgd2Ugd2FpdCBmb3IgdGhlIGNvbXBsZXRpb24gb2YgdGhvc2Ugc3RyZWFtcywgaW4gb3JkZXIgdG8gY2F0Y2ggYW55IGVycm9yLlxuY29uc3Qgd2FpdEZvckN1c3RvbVN0cmVhbXNFbmQgPSAoZmlsZURlc2NyaXB0b3JzLCBzdHJlYW1JbmZvKSA9PiBmaWxlRGVzY3JpcHRvcnMuZmxhdE1hcCgoe3N0ZGlvSXRlbXN9LCBmZE51bWJlcikgPT4gc3RkaW9JdGVtc1xuXHQuZmlsdGVyKCh7dmFsdWUsIHN0cmVhbSA9IHZhbHVlfSkgPT4gaXNOb2RlU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbjogZmFsc2V9KSAmJiAhaXNTdGFuZGFyZFN0cmVhbShzdHJlYW0pKVxuXHQubWFwKCh7dHlwZSwgdmFsdWUsIHN0cmVhbSA9IHZhbHVlfSkgPT4gd2FpdEZvclN0cmVhbShzdHJlYW0sIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCB7XG5cdFx0aXNTYW1lRGlyZWN0aW9uOiBUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpLFxuXHRcdHN0b3BPbkV4aXQ6IHR5cGUgPT09ICduYXRpdmUnLFxuXHR9KSkpO1xuXG4vLyBGYWlscyB3aGVuIHRoZSBzdWJwcm9jZXNzIGVtaXRzIGFuIGBlcnJvcmAgZXZlbnRcbmNvbnN0IHRocm93T25TdWJwcm9jZXNzRXJyb3IgPSBhc3luYyAoc3VicHJvY2Vzcywge3NpZ25hbH0pID0+IHtcblx0Y29uc3QgW2Vycm9yXSA9IGF3YWl0IG9uY2Uoc3VicHJvY2VzcywgJ2Vycm9yJywge3NpZ25hbH0pO1xuXHR0aHJvdyBlcnJvcjtcbn07XG4iLCAiaW1wb3J0IHtjcmVhdGVEZWZlcnJlZH0gZnJvbSAnLi4vdXRpbHMvZGVmZXJyZWQuanMnO1xuXG4vLyBXaGVuIHVzaW5nIG11bHRpcGxlIGAucmVhZGFibGUoKWAvYC53cml0YWJsZSgpYC9gLmR1cGxleCgpYCwgYGZpbmFsYCBhbmQgYGRlc3Ryb3lgIHNob3VsZCB3YWl0IGZvciBvdGhlciBzdHJlYW1zXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUNvbmN1cnJlbnRTdHJlYW1zID0gKCkgPT4gKHtcblx0cmVhZGFibGVEZXN0cm95OiBuZXcgV2Vha01hcCgpLFxuXHR3cml0YWJsZUZpbmFsOiBuZXcgV2Vha01hcCgpLFxuXHR3cml0YWJsZURlc3Ryb3k6IG5ldyBXZWFrTWFwKCksXG59KTtcblxuLy8gRWFjaCBmaWxlIGRlc2NyaXB0b3IgKyBgd2FpdE5hbWVgIGhhcyBpdHMgb3duIGFycmF5IG9mIHByb21pc2VzLlxuLy8gRWFjaCBwcm9taXNlIGlzIGEgc2luZ2xlIGAucmVhZGFibGUoKWAvYC53cml0YWJsZSgpYC9gLmR1cGxleCgpYCBjYWxsLlxuZXhwb3J0IGNvbnN0IGFkZENvbmN1cnJlbnRTdHJlYW0gPSAoY29uY3VycmVudFN0cmVhbXMsIHN0cmVhbSwgd2FpdE5hbWUpID0+IHtcblx0Y29uc3Qgd2Vha01hcCA9IGNvbmN1cnJlbnRTdHJlYW1zW3dhaXROYW1lXTtcblx0aWYgKCF3ZWFrTWFwLmhhcyhzdHJlYW0pKSB7XG5cdFx0d2Vha01hcC5zZXQoc3RyZWFtLCBbXSk7XG5cdH1cblxuXHRjb25zdCBwcm9taXNlcyA9IHdlYWtNYXAuZ2V0KHN0cmVhbSk7XG5cdGNvbnN0IHByb21pc2UgPSBjcmVhdGVEZWZlcnJlZCgpO1xuXHRwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRjb25zdCByZXNvbHZlID0gcHJvbWlzZS5yZXNvbHZlLmJpbmQocHJvbWlzZSk7XG5cdHJldHVybiB7cmVzb2x2ZSwgcHJvbWlzZXN9O1xufTtcblxuLy8gV2FpdCBmb3Igb3RoZXIgc3RyZWFtcywgYnV0IHN0b3Agd2FpdGluZyB3aGVuIHN1YnByb2Nlc3MgZW5kc1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JDb25jdXJyZW50U3RyZWFtcyA9IGFzeW5jICh7cmVzb2x2ZSwgcHJvbWlzZXN9LCBzdWJwcm9jZXNzKSA9PiB7XG5cdHJlc29sdmUoKTtcblx0Y29uc3QgW2lzU3VicHJvY2Vzc0V4aXRdID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRQcm9taXNlLmFsbFNldHRsZWQoW3RydWUsIHN1YnByb2Nlc3NdKSxcblx0XHRQcm9taXNlLmFsbChbZmFsc2UsIC4uLnByb21pc2VzXSksXG5cdF0pO1xuXHRyZXR1cm4gIWlzU3VicHJvY2Vzc0V4aXQ7XG59O1xuIiwgImltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcbmltcG9ydCB7aXNTdHJlYW1BYm9ydH0gZnJvbSAnLi4vcmVzb2x2ZS93YWl0LXN0cmVhbS5qcyc7XG5cbmV4cG9ydCBjb25zdCBzYWZlV2FpdEZvclN1YnByb2Nlc3NTdGRpbiA9IGFzeW5jIHN1YnByb2Nlc3NTdGRpbiA9PiB7XG5cdGlmIChzdWJwcm9jZXNzU3RkaW4gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgd2FpdEZvclN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzU3RkaW4pO1xuXHR9IGNhdGNoIHt9XG59O1xuXG5leHBvcnQgY29uc3Qgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0ID0gYXN5bmMgc3VicHJvY2Vzc1N0ZG91dCA9PiB7XG5cdGlmIChzdWJwcm9jZXNzU3Rkb3V0ID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3NTdGRvdXQpO1xuXHR9IGNhdGNoIHt9XG59O1xuXG5leHBvcnQgY29uc3Qgd2FpdEZvclN1YnByb2Nlc3NTdGRpbiA9IGFzeW5jIHN1YnByb2Nlc3NTdGRpbiA9PiB7XG5cdGF3YWl0IGZpbmlzaGVkKHN1YnByb2Nlc3NTdGRpbiwge2NsZWFudXA6IHRydWUsIHJlYWRhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWV9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VicHJvY2Vzc1N0ZG91dCA9IGFzeW5jIHN1YnByb2Nlc3NTdGRvdXQgPT4ge1xuXHRhd2FpdCBmaW5pc2hlZChzdWJwcm9jZXNzU3Rkb3V0LCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZX0pO1xufTtcblxuLy8gV2hlbiBgcmVhZGFibGVgIG9yIGB3cml0YWJsZWAgYWJvcnRzL2Vycm9ycywgYXdhaXRzIHRoZSBzdWJwcm9jZXNzLCBmb3IgdGhlIHJlYXNvbiBtZW50aW9uZWQgYWJvdmVcbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VicHJvY2VzcyA9IGFzeW5jIChzdWJwcm9jZXNzLCBlcnJvcikgPT4ge1xuXHRhd2FpdCBzdWJwcm9jZXNzO1xuXHRpZiAoZXJyb3IpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGRlc3Ryb3lPdGhlclN0cmVhbSA9IChzdHJlYW0sIGlzT3BlbiwgZXJyb3IpID0+IHtcblx0aWYgKGVycm9yICYmICFpc1N0cmVhbUFib3J0KGVycm9yKSkge1xuXHRcdHN0cmVhbS5kZXN0cm95KGVycm9yKTtcblx0fSBlbHNlIGlmIChpc09wZW4pIHtcblx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHR9XG59O1xuIiwgImltcG9ydCB7UmVhZGFibGV9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7Y2FsbGJhY2tpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge0JJTkFSWV9FTkNPRElOR1N9IGZyb20gJy4uL2FyZ3VtZW50cy9lbmNvZGluZy1vcHRpb24uanMnO1xuaW1wb3J0IHtnZXRGcm9tU3RyZWFtfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge2l0ZXJhdGVPblN1YnByb2Nlc3NTdHJlYW0sIERFRkFVTFRfT0JKRUNUX0hJR0hfV0FURVJfTUFSS30gZnJvbSAnLi4vaW8vaXRlcmF0ZS5qcyc7XG5pbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICcuLi91dGlscy9kZWZlcnJlZC5qcyc7XG5pbXBvcnQge2FkZENvbmN1cnJlbnRTdHJlYW0sIHdhaXRGb3JDb25jdXJyZW50U3RyZWFtc30gZnJvbSAnLi9jb25jdXJyZW50LmpzJztcbmltcG9ydCB7XG5cdHNhZmVXYWl0Rm9yU3VicHJvY2Vzc1N0ZGluLFxuXHR3YWl0Rm9yU3VicHJvY2Vzc1N0ZG91dCxcblx0d2FpdEZvclN1YnByb2Nlc3MsXG5cdGRlc3Ryb3lPdGhlclN0cmVhbSxcbn0gZnJvbSAnLi9zaGFyZWQuanMnO1xuXG4vLyBDcmVhdGUgYSBgUmVhZGFibGVgIHN0cmVhbSB0aGF0IGZvcndhcmRzIGZyb20gYHN0ZG91dGAgYW5kIGF3YWl0cyB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlYWRhYmxlID0gKHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtcywgZW5jb2Rpbmd9LCB7ZnJvbSwgYmluYXJ5OiBiaW5hcnlPcHRpb24gPSB0cnVlLCBwcmVzZXJ2ZU5ld2xpbmVzID0gdHJ1ZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCB7c3VicHJvY2Vzc1N0ZG91dCwgd2FpdFJlYWRhYmxlRGVzdHJveX0gPSBnZXRTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3MsIGZyb20sIGNvbmN1cnJlbnRTdHJlYW1zKTtcblx0Y29uc3Qge3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrfSA9IGdldFJlYWRhYmxlT3B0aW9ucyhzdWJwcm9jZXNzU3Rkb3V0LCBiaW5hcnkpO1xuXHRjb25zdCB7cmVhZCwgb25TdGRvdXREYXRhRG9uZX0gPSBnZXRSZWFkYWJsZU1ldGhvZHMoe1xuXHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRiaW5hcnksXG5cdFx0ZW5jb2RpbmcsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG5cdGNvbnN0IHJlYWRhYmxlID0gbmV3IFJlYWRhYmxlKHtcblx0XHRyZWFkLFxuXHRcdGRlc3Ryb3k6IGNhbGxiYWNraWZ5KG9uUmVhZGFibGVEZXN0cm95LmJpbmQodW5kZWZpbmVkLCB7c3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzcywgd2FpdFJlYWRhYmxlRGVzdHJveX0pKSxcblx0XHRoaWdoV2F0ZXJNYXJrOiByZWFkYWJsZUhpZ2hXYXRlck1hcmssXG5cdFx0b2JqZWN0TW9kZTogcmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdGVuY29kaW5nOiByZWFkYWJsZUVuY29kaW5nLFxuXHR9KTtcblx0b25TdGRvdXRGaW5pc2hlZCh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRvblN0ZG91dERhdGFEb25lLFxuXHRcdHJlYWRhYmxlLFxuXHRcdHN1YnByb2Nlc3MsXG5cdH0pO1xuXHRyZXR1cm4gcmVhZGFibGU7XG59O1xuXG4vLyBSZXRyaWV2ZSBgc3Rkb3V0YCAob3Igb3RoZXIgc3RyZWFtIGRlcGVuZGluZyBvbiBgZnJvbWApXG5leHBvcnQgY29uc3QgZ2V0U3VicHJvY2Vzc1N0ZG91dCA9IChzdWJwcm9jZXNzLCBmcm9tLCBjb25jdXJyZW50U3RyZWFtcykgPT4ge1xuXHRjb25zdCBzdWJwcm9jZXNzU3Rkb3V0ID0gZ2V0RnJvbVN0cmVhbShzdWJwcm9jZXNzLCBmcm9tKTtcblx0Y29uc3Qgd2FpdFJlYWRhYmxlRGVzdHJveSA9IGFkZENvbmN1cnJlbnRTdHJlYW0oY29uY3VycmVudFN0cmVhbXMsIHN1YnByb2Nlc3NTdGRvdXQsICdyZWFkYWJsZURlc3Ryb3knKTtcblx0cmV0dXJuIHtzdWJwcm9jZXNzU3Rkb3V0LCB3YWl0UmVhZGFibGVEZXN0cm95fTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSZWFkYWJsZU9wdGlvbnMgPSAoe3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrfSwgYmluYXJ5KSA9PiBiaW5hcnlcblx0PyB7cmVhZGFibGVFbmNvZGluZywgcmVhZGFibGVPYmplY3RNb2RlLCByZWFkYWJsZUhpZ2hXYXRlck1hcmt9XG5cdDoge3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZTogdHJ1ZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrOiBERUZBVUxUX09CSkVDVF9ISUdIX1dBVEVSX01BUkt9O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVhZGFibGVNZXRob2RzID0gKHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzLCBiaW5hcnksIGVuY29kaW5nLCBwcmVzZXJ2ZU5ld2xpbmVzfSkgPT4ge1xuXHRjb25zdCBvblN0ZG91dERhdGFEb25lID0gY3JlYXRlRGVmZXJyZWQoKTtcblx0Y29uc3Qgb25TdGRvdXREYXRhID0gaXRlcmF0ZU9uU3VicHJvY2Vzc1N0cmVhbSh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGJpbmFyeSxcblx0XHRzaG91bGRFbmNvZGU6ICFiaW5hcnksXG5cdFx0ZW5jb2RpbmcsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZWFkKCkge1xuXHRcdFx0b25SZWFkKHRoaXMsIG9uU3Rkb3V0RGF0YSwgb25TdGRvdXREYXRhRG9uZSk7XG5cdFx0fSxcblx0XHRvblN0ZG91dERhdGFEb25lLFxuXHR9O1xufTtcblxuLy8gRm9yd2FyZHMgZGF0YSBmcm9tIGBzdGRvdXRgIHRvIGByZWFkYWJsZWBcbmNvbnN0IG9uUmVhZCA9IGFzeW5jIChyZWFkYWJsZSwgb25TdGRvdXREYXRhLCBvblN0ZG91dERhdGFEb25lKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qge3ZhbHVlLCBkb25lfSA9IGF3YWl0IG9uU3Rkb3V0RGF0YS5uZXh0KCk7XG5cdFx0aWYgKGRvbmUpIHtcblx0XHRcdG9uU3Rkb3V0RGF0YURvbmUucmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWFkYWJsZS5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vIFdoZW4gYHN1YnByb2Nlc3Muc3Rkb3V0YCBlbmRzL2Fib3J0cy9lcnJvcnMsIGRvIHRoZSBzYW1lIG9uIGByZWFkYWJsZWAuXG4vLyBBd2FpdCB0aGUgc3VicHJvY2VzcywgZm9yIHRoZSBzYW1lIHJlYXNvbiBhcyBhYm92ZS5cbmV4cG9ydCBjb25zdCBvblN0ZG91dEZpbmlzaGVkID0gYXN5bmMgKHtzdWJwcm9jZXNzU3Rkb3V0LCBvblN0ZG91dERhdGFEb25lLCByZWFkYWJsZSwgc3VicHJvY2Vzcywgc3VicHJvY2Vzc1N0ZGlufSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3NTdGRvdXQpO1xuXHRcdGF3YWl0IHN1YnByb2Nlc3M7XG5cdFx0YXdhaXQgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3RkaW4oc3VicHJvY2Vzc1N0ZGluKTtcblx0XHRhd2FpdCBvblN0ZG91dERhdGFEb25lO1xuXG5cdFx0aWYgKHJlYWRhYmxlLnJlYWRhYmxlKSB7XG5cdFx0XHRyZWFkYWJsZS5wdXNoKG51bGwpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRhd2FpdCBzYWZlV2FpdEZvclN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzU3RkaW4pO1xuXHRcdGRlc3Ryb3lPdGhlclJlYWRhYmxlKHJlYWRhYmxlLCBlcnJvcik7XG5cdH1cbn07XG5cbi8vIFdoZW4gYHJlYWRhYmxlYCBhYm9ydHMvZXJyb3JzLCBkbyB0aGUgc2FtZSBvbiBgc3VicHJvY2Vzcy5zdGRvdXRgXG5leHBvcnQgY29uc3Qgb25SZWFkYWJsZURlc3Ryb3kgPSBhc3luYyAoe3N1YnByb2Nlc3NTdGRvdXQsIHN1YnByb2Nlc3MsIHdhaXRSZWFkYWJsZURlc3Ryb3l9LCBlcnJvcikgPT4ge1xuXHRpZiAoYXdhaXQgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zKHdhaXRSZWFkYWJsZURlc3Ryb3ksIHN1YnByb2Nlc3MpKSB7XG5cdFx0ZGVzdHJveU90aGVyUmVhZGFibGUoc3VicHJvY2Vzc1N0ZG91dCwgZXJyb3IpO1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzKHN1YnByb2Nlc3MsIGVycm9yKTtcblx0fVxufTtcblxuY29uc3QgZGVzdHJveU90aGVyUmVhZGFibGUgPSAoc3RyZWFtLCBlcnJvcikgPT4ge1xuXHRkZXN0cm95T3RoZXJTdHJlYW0oc3RyZWFtLCBzdHJlYW0ucmVhZGFibGUsIGVycm9yKTtcbn07XG4iLCAiaW1wb3J0IHtXcml0YWJsZX0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtjYWxsYmFja2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7Z2V0VG9TdHJlYW19IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcbmltcG9ydCB7YWRkQ29uY3VycmVudFN0cmVhbSwgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zfSBmcm9tICcuL2NvbmN1cnJlbnQuanMnO1xuaW1wb3J0IHtcblx0c2FmZVdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0LFxuXHR3YWl0Rm9yU3VicHJvY2Vzc1N0ZGluLFxuXHR3YWl0Rm9yU3VicHJvY2Vzcyxcblx0ZGVzdHJveU90aGVyU3RyZWFtLFxufSBmcm9tICcuL3NoYXJlZC5qcyc7XG5cbi8vIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RyZWFtIHRoYXQgZm9yd2FyZHMgdG8gYHN0ZGluYCBhbmQgYXdhaXRzIHRoZSBzdWJwcm9jZXNzXG5leHBvcnQgY29uc3QgY3JlYXRlV3JpdGFibGUgPSAoe3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zfSwge3RvfSA9IHt9KSA9PiB7XG5cdGNvbnN0IHtzdWJwcm9jZXNzU3RkaW4sIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fSA9IGdldFN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzLCB0bywgY29uY3VycmVudFN0cmVhbXMpO1xuXHRjb25zdCB3cml0YWJsZSA9IG5ldyBXcml0YWJsZSh7XG5cdFx0Li4uZ2V0V3JpdGFibGVNZXRob2RzKHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwpLFxuXHRcdGRlc3Ryb3k6IGNhbGxiYWNraWZ5KG9uV3JpdGFibGVEZXN0cm95LmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0d2FpdFdyaXRhYmxlRmluYWwsXG5cdFx0XHR3YWl0V3JpdGFibGVEZXN0cm95LFxuXHRcdH0pKSxcblx0XHRoaWdoV2F0ZXJNYXJrOiBzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGVIaWdoV2F0ZXJNYXJrLFxuXHRcdG9iamVjdE1vZGU6IHN1YnByb2Nlc3NTdGRpbi53cml0YWJsZU9iamVjdE1vZGUsXG5cdH0pO1xuXHRvblN0ZGluRmluaXNoZWQoc3VicHJvY2Vzc1N0ZGluLCB3cml0YWJsZSk7XG5cdHJldHVybiB3cml0YWJsZTtcbn07XG5cbi8vIFJldHJpZXZlIGBzdGRpbmAgKG9yIG90aGVyIHN0cmVhbSBkZXBlbmRpbmcgb24gYHRvYClcbmV4cG9ydCBjb25zdCBnZXRTdWJwcm9jZXNzU3RkaW4gPSAoc3VicHJvY2VzcywgdG8sIGNvbmN1cnJlbnRTdHJlYW1zKSA9PiB7XG5cdGNvbnN0IHN1YnByb2Nlc3NTdGRpbiA9IGdldFRvU3RyZWFtKHN1YnByb2Nlc3MsIHRvKTtcblx0Y29uc3Qgd2FpdFdyaXRhYmxlRmluYWwgPSBhZGRDb25jdXJyZW50U3RyZWFtKGNvbmN1cnJlbnRTdHJlYW1zLCBzdWJwcm9jZXNzU3RkaW4sICd3cml0YWJsZUZpbmFsJyk7XG5cdGNvbnN0IHdhaXRXcml0YWJsZURlc3Ryb3kgPSBhZGRDb25jdXJyZW50U3RyZWFtKGNvbmN1cnJlbnRTdHJlYW1zLCBzdWJwcm9jZXNzU3RkaW4sICd3cml0YWJsZURlc3Ryb3knKTtcblx0cmV0dXJuIHtzdWJwcm9jZXNzU3RkaW4sIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRXcml0YWJsZU1ldGhvZHMgPSAoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCkgPT4gKHtcblx0d3JpdGU6IG9uV3JpdGUuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3NTdGRpbiksXG5cdGZpbmFsOiBjYWxsYmFja2lmeShvbldyaXRhYmxlRmluYWwuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwpKSxcbn0pO1xuXG4vLyBGb3J3YXJkcyBkYXRhIGZyb20gYHdyaXRhYmxlYCB0byBgc3RkaW5gXG5jb25zdCBvbldyaXRlID0gKHN1YnByb2Nlc3NTdGRpbiwgY2h1bmssIGVuY29kaW5nLCBkb25lKSA9PiB7XG5cdGlmIChzdWJwcm9jZXNzU3RkaW4ud3JpdGUoY2h1bmssIGVuY29kaW5nKSkge1xuXHRcdGRvbmUoKTtcblx0fSBlbHNlIHtcblx0XHRzdWJwcm9jZXNzU3RkaW4ub25jZSgnZHJhaW4nLCBkb25lKTtcblx0fVxufTtcblxuLy8gRW5zdXJlcyB0aGF0IHRoZSB3cml0YWJsZSBgZmluYWxgIGFuZCByZWFkYWJsZSBgZW5kYCBldmVudHMgYXdhaXRzIHRoZSBzdWJwcm9jZXNzLlxuLy8gTGlrZSB0aGlzLCBhbnkgc3VicHJvY2VzcyBmYWlsdXJlIGlzIHByb3BhZ2F0ZWQgYXMgYSBzdHJlYW0gYGVycm9yYCBldmVudCwgaW5zdGVhZCBvZiBiZWluZyBsb3N0LlxuLy8gVGhlIHVzZXIgZG9lcyBub3QgbmVlZCB0byBgYXdhaXRgIHRoZSBzdWJwcm9jZXNzIGFueW1vcmUsIGJ1dCBub3cgbmVlZHMgdG8gYXdhaXQgdGhlIHN0cmVhbSBjb21wbGV0aW9uIG9yIGVycm9yLlxuLy8gV2hlbiBtdWx0aXBsZSB3cml0YWJsZXMgYXJlIHRhcmdldGluZyB0aGUgc2FtZSBzdHJlYW0sIHRoZXkgd2FpdCBmb3IgZWFjaCBvdGhlciwgdW5sZXNzIHRoZSBzdWJwcm9jZXNzIGVuZHMgZmlyc3QuXG5jb25zdCBvbldyaXRhYmxlRmluYWwgPSBhc3luYyAoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCkgPT4ge1xuXHRpZiAoYXdhaXQgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zKHdhaXRXcml0YWJsZUZpbmFsLCBzdWJwcm9jZXNzKSkge1xuXHRcdGlmIChzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGUpIHtcblx0XHRcdHN1YnByb2Nlc3NTdGRpbi5lbmQoKTtcblx0XHR9XG5cblx0XHRhd2FpdCBzdWJwcm9jZXNzO1xuXHR9XG59O1xuXG4vLyBXaGVuIGBzdWJwcm9jZXNzLnN0ZGluYCBlbmRzL2Fib3J0cy9lcnJvcnMsIGRvIHRoZSBzYW1lIG9uIGB3cml0YWJsZWAuXG5leHBvcnQgY29uc3Qgb25TdGRpbkZpbmlzaGVkID0gYXN5bmMgKHN1YnByb2Nlc3NTdGRpbiwgd3JpdGFibGUsIHN1YnByb2Nlc3NTdGRvdXQpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2Vzc1N0ZGluKHN1YnByb2Nlc3NTdGRpbik7XG5cdFx0aWYgKHdyaXRhYmxlLndyaXRhYmxlKSB7XG5cdFx0XHR3cml0YWJsZS5lbmQoKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0YXdhaXQgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3NTdGRvdXQpO1xuXHRcdGRlc3Ryb3lPdGhlcldyaXRhYmxlKHdyaXRhYmxlLCBlcnJvcik7XG5cdH1cbn07XG5cbi8vIFdoZW4gYHdyaXRhYmxlYCBhYm9ydHMvZXJyb3JzLCBkbyB0aGUgc2FtZSBvbiBgc3VicHJvY2Vzcy5zdGRpbmBcbmV4cG9ydCBjb25zdCBvbldyaXRhYmxlRGVzdHJveSA9IGFzeW5jICh7c3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCwgd2FpdFdyaXRhYmxlRGVzdHJveX0sIGVycm9yKSA9PiB7XG5cdGF3YWl0IHdhaXRGb3JDb25jdXJyZW50U3RyZWFtcyh3YWl0V3JpdGFibGVGaW5hbCwgc3VicHJvY2Vzcyk7XG5cdGlmIChhd2FpdCB3YWl0Rm9yQ29uY3VycmVudFN0cmVhbXMod2FpdFdyaXRhYmxlRGVzdHJveSwgc3VicHJvY2VzcykpIHtcblx0XHRkZXN0cm95T3RoZXJXcml0YWJsZShzdWJwcm9jZXNzU3RkaW4sIGVycm9yKTtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2VzcyhzdWJwcm9jZXNzLCBlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IGRlc3Ryb3lPdGhlcldyaXRhYmxlID0gKHN0cmVhbSwgZXJyb3IpID0+IHtcblx0ZGVzdHJveU90aGVyU3RyZWFtKHN0cmVhbSwgc3RyZWFtLndyaXRhYmxlLCBlcnJvcik7XG59O1xuIiwgImltcG9ydCB7RHVwbGV4fSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2NhbGxiYWNraWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7XG5cdGdldFN1YnByb2Nlc3NTdGRvdXQsXG5cdGdldFJlYWRhYmxlT3B0aW9ucyxcblx0Z2V0UmVhZGFibGVNZXRob2RzLFxuXHRvblN0ZG91dEZpbmlzaGVkLFxuXHRvblJlYWRhYmxlRGVzdHJveSxcbn0gZnJvbSAnLi9yZWFkYWJsZS5qcyc7XG5pbXBvcnQge1xuXHRnZXRTdWJwcm9jZXNzU3RkaW4sXG5cdGdldFdyaXRhYmxlTWV0aG9kcyxcblx0b25TdGRpbkZpbmlzaGVkLFxuXHRvbldyaXRhYmxlRGVzdHJveSxcbn0gZnJvbSAnLi93cml0YWJsZS5qcyc7XG5cbi8vIENyZWF0ZSBhIGBEdXBsZXhgIHN0cmVhbSBjb21iaW5pbmcgYm90aCBgc3VicHJvY2Vzcy5yZWFkYWJsZSgpYCBhbmQgYHN1YnByb2Nlc3Mud3JpdGFibGUoKWBcbmV4cG9ydCBjb25zdCBjcmVhdGVEdXBsZXggPSAoe3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zLCBlbmNvZGluZ30sIHtmcm9tLCB0bywgYmluYXJ5OiBiaW5hcnlPcHRpb24gPSB0cnVlLCBwcmVzZXJ2ZU5ld2xpbmVzID0gdHJ1ZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCB7c3VicHJvY2Vzc1N0ZG91dCwgd2FpdFJlYWRhYmxlRGVzdHJveX0gPSBnZXRTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3MsIGZyb20sIGNvbmN1cnJlbnRTdHJlYW1zKTtcblx0Y29uc3Qge3N1YnByb2Nlc3NTdGRpbiwgd2FpdFdyaXRhYmxlRmluYWwsIHdhaXRXcml0YWJsZURlc3Ryb3l9ID0gZ2V0U3VicHJvY2Vzc1N0ZGluKHN1YnByb2Nlc3MsIHRvLCBjb25jdXJyZW50U3RyZWFtcyk7XG5cdGNvbnN0IHtyZWFkYWJsZUVuY29kaW5nLCByZWFkYWJsZU9iamVjdE1vZGUsIHJlYWRhYmxlSGlnaFdhdGVyTWFya30gPSBnZXRSZWFkYWJsZU9wdGlvbnMoc3VicHJvY2Vzc1N0ZG91dCwgYmluYXJ5KTtcblx0Y29uc3Qge3JlYWQsIG9uU3Rkb3V0RGF0YURvbmV9ID0gZ2V0UmVhZGFibGVNZXRob2RzKHtcblx0XHRzdWJwcm9jZXNzU3Rkb3V0LFxuXHRcdHN1YnByb2Nlc3MsXG5cdFx0YmluYXJ5LFxuXHRcdGVuY29kaW5nLFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXHRjb25zdCBkdXBsZXggPSBuZXcgRHVwbGV4KHtcblx0XHRyZWFkLFxuXHRcdC4uLmdldFdyaXRhYmxlTWV0aG9kcyhzdWJwcm9jZXNzU3RkaW4sIHN1YnByb2Nlc3MsIHdhaXRXcml0YWJsZUZpbmFsKSxcblx0XHRkZXN0cm95OiBjYWxsYmFja2lmeShvbkR1cGxleERlc3Ryb3kuYmluZCh1bmRlZmluZWQsIHtcblx0XHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0d2FpdFJlYWRhYmxlRGVzdHJveSxcblx0XHRcdHdhaXRXcml0YWJsZUZpbmFsLFxuXHRcdFx0d2FpdFdyaXRhYmxlRGVzdHJveSxcblx0XHR9KSksXG5cdFx0cmVhZGFibGVIaWdoV2F0ZXJNYXJrLFxuXHRcdHdyaXRhYmxlSGlnaFdhdGVyTWFyazogc3VicHJvY2Vzc1N0ZGluLndyaXRhYmxlSGlnaFdhdGVyTWFyayxcblx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0d3JpdGFibGVPYmplY3RNb2RlOiBzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGVPYmplY3RNb2RlLFxuXHRcdGVuY29kaW5nOiByZWFkYWJsZUVuY29kaW5nLFxuXHR9KTtcblx0b25TdGRvdXRGaW5pc2hlZCh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRvblN0ZG91dERhdGFEb25lLFxuXHRcdHJlYWRhYmxlOiBkdXBsZXgsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdH0pO1xuXHRvblN0ZGluRmluaXNoZWQoc3VicHJvY2Vzc1N0ZGluLCBkdXBsZXgsIHN1YnByb2Nlc3NTdGRvdXQpO1xuXHRyZXR1cm4gZHVwbGV4O1xufTtcblxuY29uc3Qgb25EdXBsZXhEZXN0cm95ID0gYXN5bmMgKHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzU3RkaW4sIHN1YnByb2Nlc3MsIHdhaXRSZWFkYWJsZURlc3Ryb3ksIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fSwgZXJyb3IpID0+IHtcblx0YXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdG9uUmVhZGFibGVEZXN0cm95KHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzLCB3YWl0UmVhZGFibGVEZXN0cm95fSwgZXJyb3IpLFxuXHRcdG9uV3JpdGFibGVEZXN0cm95KHtcblx0XHRcdHN1YnByb2Nlc3NTdGRpbixcblx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHR3YWl0V3JpdGFibGVGaW5hbCxcblx0XHRcdHdhaXRXcml0YWJsZURlc3Ryb3ksXG5cdFx0fSwgZXJyb3IpLFxuXHRdKTtcbn07XG4iLCAiaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7Z2V0RnJvbVN0cmVhbX0gZnJvbSAnLi4vYXJndW1lbnRzL2ZkLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtpdGVyYXRlT25TdWJwcm9jZXNzU3RyZWFtfSBmcm9tICcuLi9pby9pdGVyYXRlLmpzJztcblxuLy8gQ29udmVydCB0aGUgc3VicHJvY2VzcyB0byBhbiBhc3luYyBpdGVyYWJsZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZXJhYmxlID0gKHN1YnByb2Nlc3MsIGVuY29kaW5nLCB7XG5cdGZyb20sXG5cdGJpbmFyeTogYmluYXJ5T3B0aW9uID0gZmFsc2UsXG5cdHByZXNlcnZlTmV3bGluZXMgPSBmYWxzZSxcbn0gPSB7fSkgPT4ge1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCBzdWJwcm9jZXNzU3Rkb3V0ID0gZ2V0RnJvbVN0cmVhbShzdWJwcm9jZXNzLCBmcm9tKTtcblx0Y29uc3Qgb25TdGRvdXREYXRhID0gaXRlcmF0ZU9uU3VicHJvY2Vzc1N0cmVhbSh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGJpbmFyeSxcblx0XHRzaG91bGRFbmNvZGU6IHRydWUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG5cdHJldHVybiBpdGVyYXRlT25TdGRvdXREYXRhKG9uU3Rkb3V0RGF0YSwgc3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzcyk7XG59O1xuXG5jb25zdCBpdGVyYXRlT25TdGRvdXREYXRhID0gYXN5bmMgZnVuY3Rpb24gKiAob25TdGRvdXREYXRhLCBzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzKSB7XG5cdHRyeSB7XG5cdFx0eWllbGQgKiBvblN0ZG91dERhdGE7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYgKHN1YnByb2Nlc3NTdGRvdXQucmVhZGFibGUpIHtcblx0XHRcdHN1YnByb2Nlc3NTdGRvdXQuZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdGF3YWl0IHN1YnByb2Nlc3M7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtpbml0aWFsaXplQ29uY3VycmVudFN0cmVhbXN9IGZyb20gJy4vY29uY3VycmVudC5qcyc7XG5pbXBvcnQge2NyZWF0ZVJlYWRhYmxlfSBmcm9tICcuL3JlYWRhYmxlLmpzJztcbmltcG9ydCB7Y3JlYXRlV3JpdGFibGV9IGZyb20gJy4vd3JpdGFibGUuanMnO1xuaW1wb3J0IHtjcmVhdGVEdXBsZXh9IGZyb20gJy4vZHVwbGV4LmpzJztcbmltcG9ydCB7Y3JlYXRlSXRlcmFibGV9IGZyb20gJy4vaXRlcmFibGUuanMnO1xuXG4vLyBBZGQgbWV0aG9kcyB0byBjb252ZXJ0IHRoZSBzdWJwcm9jZXNzIHRvIGEgc3RyZWFtIG9yIGl0ZXJhYmxlXG5leHBvcnQgY29uc3QgYWRkQ29udmVydGVkU3RyZWFtcyA9IChzdWJwcm9jZXNzLCB7ZW5jb2Rpbmd9KSA9PiB7XG5cdGNvbnN0IGNvbmN1cnJlbnRTdHJlYW1zID0gaW5pdGlhbGl6ZUNvbmN1cnJlbnRTdHJlYW1zKCk7XG5cdHN1YnByb2Nlc3MucmVhZGFibGUgPSBjcmVhdGVSZWFkYWJsZS5iaW5kKHVuZGVmaW5lZCwge3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zLCBlbmNvZGluZ30pO1xuXHRzdWJwcm9jZXNzLndyaXRhYmxlID0gY3JlYXRlV3JpdGFibGUuYmluZCh1bmRlZmluZWQsIHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtc30pO1xuXHRzdWJwcm9jZXNzLmR1cGxleCA9IGNyZWF0ZUR1cGxleC5iaW5kKHVuZGVmaW5lZCwge3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zLCBlbmNvZGluZ30pO1xuXHRzdWJwcm9jZXNzLml0ZXJhYmxlID0gY3JlYXRlSXRlcmFibGUuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3MsIGVuY29kaW5nKTtcblx0c3VicHJvY2Vzc1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBjcmVhdGVJdGVyYWJsZS5iaW5kKHVuZGVmaW5lZCwgc3VicHJvY2VzcywgZW5jb2RpbmcsIHt9KTtcbn07XG4iLCAiLy8gVGhlIHJldHVybiB2YWx1ZSBpcyBhIG1peGluIG9mIGBzdWJwcm9jZXNzYCBhbmQgYFByb21pc2VgXG5leHBvcnQgY29uc3QgbWVyZ2VQcm9taXNlID0gKHN1YnByb2Nlc3MsIHByb21pc2UpID0+IHtcblx0Zm9yIChjb25zdCBbcHJvcGVydHksIGRlc2NyaXB0b3JdIG9mIGRlc2NyaXB0b3JzKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlLmJpbmQocHJvbWlzZSk7XG5cdFx0UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShzdWJwcm9jZXNzLCBwcm9wZXJ0eSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlfSk7XG5cdH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci10b3AtbGV2ZWwtYXdhaXRcbmNvbnN0IG5hdGl2ZVByb21pc2VQcm90b3R5cGUgPSAoYXN5bmMgKCkgPT4ge30pKCkuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5jb25zdCBkZXNjcmlwdG9ycyA9IFsndGhlbicsICdjYXRjaCcsICdmaW5hbGx5J10ubWFwKHByb3BlcnR5ID0+IFtcblx0cHJvcGVydHksXG5cdFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5hdGl2ZVByb21pc2VQcm90b3R5cGUsIHByb3BlcnR5KSxcbl0pO1xuIiwgImltcG9ydCB7c2V0TWF4TGlzdGVuZXJzfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge3NwYXdufSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHtNYXhCdWZmZXJFcnJvcn0gZnJvbSAnZ2V0LXN0cmVhbSc7XG5pbXBvcnQge2hhbmRsZUNvbW1hbmR9IGZyb20gJy4uL2FyZ3VtZW50cy9jb21tYW5kLmpzJztcbmltcG9ydCB7bm9ybWFsaXplT3B0aW9uc30gZnJvbSAnLi4vYXJndW1lbnRzL29wdGlvbnMuanMnO1xuaW1wb3J0IHtTVUJQUk9DRVNTX09QVElPTlN9IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcbmltcG9ydCB7Y29uY2F0ZW5hdGVTaGVsbH0gZnJvbSAnLi4vYXJndW1lbnRzL3NoZWxsLmpzJztcbmltcG9ydCB7YWRkSXBjTWV0aG9kc30gZnJvbSAnLi4vaXBjL21ldGhvZHMuanMnO1xuaW1wb3J0IHttYWtlRXJyb3IsIG1ha2VTdWNjZXNzUmVzdWx0fSBmcm9tICcuLi9yZXR1cm4vcmVzdWx0LmpzJztcbmltcG9ydCB7aGFuZGxlUmVzdWx0fSBmcm9tICcuLi9yZXR1cm4vcmVqZWN0LmpzJztcbmltcG9ydCB7aGFuZGxlRWFybHlFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL2Vhcmx5LWVycm9yLmpzJztcbmltcG9ydCB7aGFuZGxlU3RkaW9Bc3luY30gZnJvbSAnLi4vc3RkaW8vaGFuZGxlLWFzeW5jLmpzJztcbmltcG9ydCB7c3RyaXBOZXdsaW5lfSBmcm9tICcuLi9pby9zdHJpcC1uZXdsaW5lLmpzJztcbmltcG9ydCB7cGlwZU91dHB1dEFzeW5jfSBmcm9tICcuLi9pby9vdXRwdXQtYXN5bmMuanMnO1xuaW1wb3J0IHtzdWJwcm9jZXNzS2lsbH0gZnJvbSAnLi4vdGVybWluYXRlL2tpbGwuanMnO1xuaW1wb3J0IHtjbGVhbnVwT25FeGl0fSBmcm9tICcuLi90ZXJtaW5hdGUvY2xlYW51cC5qcyc7XG5pbXBvcnQge3BpcGVUb1N1YnByb2Nlc3N9IGZyb20gJy4uL3BpcGUvc2V0dXAuanMnO1xuaW1wb3J0IHttYWtlQWxsU3RyZWFtfSBmcm9tICcuLi9yZXNvbHZlL2FsbC1hc3luYy5qcyc7XG5pbXBvcnQge3dhaXRGb3JTdWJwcm9jZXNzUmVzdWx0fSBmcm9tICcuLi9yZXNvbHZlL3dhaXQtc3VicHJvY2Vzcy5qcyc7XG5pbXBvcnQge2FkZENvbnZlcnRlZFN0cmVhbXN9IGZyb20gJy4uL2NvbnZlcnQvYWRkLmpzJztcbmltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJy4uL3V0aWxzL2RlZmVycmVkLmpzJztcbmltcG9ydCB7bWVyZ2VQcm9taXNlfSBmcm9tICcuL3Byb21pc2UuanMnO1xuXG4vLyBNYWluIHNoYXJlZCBsb2dpYyBmb3IgYWxsIGFzeW5jIG1ldGhvZHM6IGBleGVjYSgpYCwgYCRgLCBgZXhlY2FOb2RlKClgXG5leHBvcnQgY29uc3QgZXhlY2FDb3JlQXN5bmMgPSAocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zLCBjcmVhdGVOZXN0ZWQpID0+IHtcblx0Y29uc3Qge2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnN9ID0gaGFuZGxlQXN5bmNBcmd1bWVudHMocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0Y29uc3Qge3N1YnByb2Nlc3MsIHByb21pc2V9ID0gc3Bhd25TdWJwcm9jZXNzQXN5bmMoe1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0fSk7XG5cdHN1YnByb2Nlc3MucGlwZSA9IHBpcGVUb1N1YnByb2Nlc3MuYmluZCh1bmRlZmluZWQsIHtcblx0XHRzb3VyY2U6IHN1YnByb2Nlc3MsXG5cdFx0c291cmNlUHJvbWlzZTogcHJvbWlzZSxcblx0XHRib3VuZE9wdGlvbnM6IHt9LFxuXHRcdGNyZWF0ZU5lc3RlZCxcblx0fSk7XG5cdG1lcmdlUHJvbWlzZShzdWJwcm9jZXNzLCBwcm9taXNlKTtcblx0U1VCUFJPQ0VTU19PUFRJT05TLnNldChzdWJwcm9jZXNzLCB7b3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSk7XG5cdHJldHVybiBzdWJwcm9jZXNzO1xufTtcblxuLy8gQ29tcHV0ZSBhcmd1bWVudHMgdG8gcGFzcyB0byBgY2hpbGRfcHJvY2Vzcy5zcGF3bigpYFxuY29uc3QgaGFuZGxlQXN5bmNBcmd1bWVudHMgPSAocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKSA9PiB7XG5cdGNvbnN0IHtjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lLCB2ZXJib3NlSW5mb30gPSBoYW5kbGVDb21tYW5kKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zOiBub3JtYWxpemVkT3B0aW9uc30gPSBub3JtYWxpemVPcHRpb25zKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdGNvbnN0IG9wdGlvbnMgPSBoYW5kbGVBc3luY09wdGlvbnMobm9ybWFsaXplZE9wdGlvbnMpO1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBoYW5kbGVTdGRpb0FzeW5jKG9wdGlvbnMsIHZlcmJvc2VJbmZvKTtcblx0cmV0dXJuIHtcblx0XHRmaWxlLFxuXHRcdGNvbW1hbmRBcmd1bWVudHMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGFydFRpbWUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0b3B0aW9ucyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdH07XG59O1xuXG4vLyBPcHRpb25zIG5vcm1hbGl6YXRpb24gbG9naWMgc3BlY2lmaWMgdG8gYXN5bmMgbWV0aG9kcy5cbi8vIFByZXZlbnQgcGFzc2luZyB0aGUgYHRpbWVvdXRgIG9wdGlvbiBkaXJlY3RseSB0byBgY2hpbGRfcHJvY2Vzcy5zcGF3bigpYC5cbmNvbnN0IGhhbmRsZUFzeW5jT3B0aW9ucyA9ICh7dGltZW91dCwgc2lnbmFsLCAuLi5vcHRpb25zfSkgPT4ge1xuXHRpZiAoc2lnbmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJzaWduYWxcIiBvcHRpb24gaGFzIGJlZW4gcmVuYW1lZCB0byBcImNhbmNlbFNpZ25hbFwiIGluc3RlYWQuJyk7XG5cdH1cblxuXHRyZXR1cm4gey4uLm9wdGlvbnMsIHRpbWVvdXREdXJhdGlvbjogdGltZW91dH07XG59O1xuXG5jb25zdCBzcGF3blN1YnByb2Nlc3NBc3luYyA9ICh7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucywgc3RhcnRUaW1lLCB2ZXJib3NlSW5mbywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIGZpbGVEZXNjcmlwdG9yc30pID0+IHtcblx0bGV0IHN1YnByb2Nlc3M7XG5cdHRyeSB7XG5cdFx0c3VicHJvY2VzcyA9IHNwYXduKC4uLmNvbmNhdGVuYXRlU2hlbGwoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucykpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBoYW5kbGVFYXJseUVycm9yKHtcblx0XHRcdGVycm9yLFxuXHRcdFx0Y29tbWFuZCxcblx0XHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0b3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZSxcblx0XHRcdHZlcmJvc2VJbmZvLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0c2V0TWF4TGlzdGVuZXJzKE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgY29udHJvbGxlci5zaWduYWwpO1xuXG5cdGNvbnN0IG9yaWdpbmFsU3RyZWFtcyA9IFsuLi5zdWJwcm9jZXNzLnN0ZGlvXTtcblx0cGlwZU91dHB1dEFzeW5jKHN1YnByb2Nlc3MsIGZpbGVEZXNjcmlwdG9ycywgY29udHJvbGxlcik7XG5cdGNsZWFudXBPbkV4aXQoc3VicHJvY2Vzcywgb3B0aW9ucywgY29udHJvbGxlcik7XG5cblx0Y29uc3QgY29udGV4dCA9IHt9O1xuXHRjb25zdCBvbkludGVybmFsRXJyb3IgPSBjcmVhdGVEZWZlcnJlZCgpO1xuXHRzdWJwcm9jZXNzLmtpbGwgPSBzdWJwcm9jZXNzS2lsbC5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdGtpbGw6IHN1YnByb2Nlc3Mua2lsbC5iaW5kKHN1YnByb2Nlc3MpLFxuXHRcdG9wdGlvbnMsXG5cdFx0b25JbnRlcm5hbEVycm9yLFxuXHRcdGNvbnRleHQsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdHN1YnByb2Nlc3MuYWxsID0gbWFrZUFsbFN0cmVhbShzdWJwcm9jZXNzLCBvcHRpb25zKTtcblx0YWRkQ29udmVydGVkU3RyZWFtcyhzdWJwcm9jZXNzLCBvcHRpb25zKTtcblx0YWRkSXBjTWV0aG9kcyhzdWJwcm9jZXNzLCBvcHRpb25zKTtcblxuXHRjb25zdCBwcm9taXNlID0gaGFuZGxlUHJvbWlzZSh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0b3JpZ2luYWxTdHJlYW1zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0Y29udGV4dCxcblx0XHRvbkludGVybmFsRXJyb3IsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdHJldHVybiB7c3VicHJvY2VzcywgcHJvbWlzZX07XG59O1xuXG4vLyBBc3luY2hyb25vdXMgbG9naWMsIGFzIG9wcG9zZWQgdG8gdGhlIHByZXZpb3VzIGxvZ2ljIHdoaWNoIGNhbiBiZSBydW4gc3luY2hyb25vdXNseSwgaS5lLiBjYW4gYmUgcmV0dXJuZWQgdG8gdXNlciByaWdodCBhd2F5XG5jb25zdCBoYW5kbGVQcm9taXNlID0gYXN5bmMgKHtzdWJwcm9jZXNzLCBvcHRpb25zLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvLCBmaWxlRGVzY3JpcHRvcnMsIG9yaWdpbmFsU3RyZWFtcywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIGNvbnRleHQsIG9uSW50ZXJuYWxFcnJvciwgY29udHJvbGxlcn0pID0+IHtcblx0Y29uc3QgW1xuXHRcdGVycm9ySW5mbyxcblx0XHRbZXhpdENvZGUsIHNpZ25hbF0sXG5cdFx0c3RkaW9SZXN1bHRzLFxuXHRcdGFsbFJlc3VsdCxcblx0XHRpcGNPdXRwdXQsXG5cdF0gPSBhd2FpdCB3YWl0Rm9yU3VicHJvY2Vzc1Jlc3VsdCh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRvcHRpb25zLFxuXHRcdGNvbnRleHQsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdG9yaWdpbmFsU3RyZWFtcyxcblx0XHRvbkludGVybmFsRXJyb3IsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0b25JbnRlcm5hbEVycm9yLnJlc29sdmUoKTtcblxuXHRjb25zdCBzdGRpbyA9IHN0ZGlvUmVzdWx0cy5tYXAoKHN0ZGlvUmVzdWx0LCBmZE51bWJlcikgPT4gc3RyaXBOZXdsaW5lKHN0ZGlvUmVzdWx0LCBvcHRpb25zLCBmZE51bWJlcikpO1xuXHRjb25zdCBhbGwgPSBzdHJpcE5ld2xpbmUoYWxsUmVzdWx0LCBvcHRpb25zLCAnYWxsJyk7XG5cdGNvbnN0IHJlc3VsdCA9IGdldEFzeW5jUmVzdWx0KHtcblx0XHRlcnJvckluZm8sXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQsXG5cdFx0Y29udGV4dCxcblx0XHRvcHRpb25zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0cmV0dXJuIGhhbmRsZVJlc3VsdChyZXN1bHQsIHZlcmJvc2VJbmZvLCBvcHRpb25zKTtcbn07XG5cbmNvbnN0IGdldEFzeW5jUmVzdWx0ID0gKHtlcnJvckluZm8sIGV4aXRDb2RlLCBzaWduYWwsIHN0ZGlvLCBhbGwsIGlwY091dHB1dCwgY29udGV4dCwgb3B0aW9ucywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZX0pID0+ICdlcnJvcicgaW4gZXJyb3JJbmZvXG5cdD8gbWFrZUVycm9yKHtcblx0XHRlcnJvcjogZXJyb3JJbmZvLmVycm9yLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0dGltZWRPdXQ6IGNvbnRleHQudGVybWluYXRpb25SZWFzb24gPT09ICd0aW1lb3V0Jyxcblx0XHRpc0NhbmNlbGVkOiBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAnY2FuY2VsJyB8fCBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAnZ3JhY2VmdWxDYW5jZWwnLFxuXHRcdGlzR3JhY2VmdWxseUNhbmNlbGVkOiBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAnZ3JhY2VmdWxDYW5jZWwnLFxuXHRcdGlzTWF4QnVmZmVyOiBlcnJvckluZm8uZXJyb3IgaW5zdGFuY2VvZiBNYXhCdWZmZXJFcnJvcixcblx0XHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkOiBjb250ZXh0LmlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQsXG5cdFx0b3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdFx0aXNTeW5jOiBmYWxzZSxcblx0fSlcblx0OiBtYWtlU3VjY2Vzc1Jlc3VsdCh7XG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcbiIsICJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtGRF9TUEVDSUZJQ19PUFRJT05TfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuXG4vLyBEZWVwIG1lcmdlIHNwZWNpZmljIG9wdGlvbnMgbGlrZSBgZW52YC4gU2hhbGxvdyBtZXJnZSB0aGUgb3RoZXIgb25lcy5cbmV4cG9ydCBjb25zdCBtZXJnZU9wdGlvbnMgPSAoYm91bmRPcHRpb25zLCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IG5ld09wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0T2JqZWN0LmVudHJpZXMob3B0aW9ucykubWFwKChbb3B0aW9uTmFtZSwgb3B0aW9uVmFsdWVdKSA9PiBbXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0bWVyZ2VPcHRpb24ob3B0aW9uTmFtZSwgYm91bmRPcHRpb25zW29wdGlvbk5hbWVdLCBvcHRpb25WYWx1ZSksXG5cdFx0XSksXG5cdCk7XG5cdHJldHVybiB7Li4uYm91bmRPcHRpb25zLCAuLi5uZXdPcHRpb25zfTtcbn07XG5cbmNvbnN0IG1lcmdlT3B0aW9uID0gKG9wdGlvbk5hbWUsIGJvdW5kT3B0aW9uVmFsdWUsIG9wdGlvblZhbHVlKSA9PiB7XG5cdGlmIChERUVQX09QVElPTlMuaGFzKG9wdGlvbk5hbWUpICYmIGlzUGxhaW5PYmplY3QoYm91bmRPcHRpb25WYWx1ZSkgJiYgaXNQbGFpbk9iamVjdChvcHRpb25WYWx1ZSkpIHtcblx0XHRyZXR1cm4gey4uLmJvdW5kT3B0aW9uVmFsdWUsIC4uLm9wdGlvblZhbHVlfTtcblx0fVxuXG5cdHJldHVybiBvcHRpb25WYWx1ZTtcbn07XG5cbmNvbnN0IERFRVBfT1BUSU9OUyA9IG5ldyBTZXQoWydlbnYnLCAuLi5GRF9TUEVDSUZJQ19PUFRJT05TXSk7XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7bm9ybWFsaXplUGFyYW1ldGVyc30gZnJvbSAnLi9wYXJhbWV0ZXJzLmpzJztcbmltcG9ydCB7aXNUZW1wbGF0ZVN0cmluZywgcGFyc2VUZW1wbGF0ZXN9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtleGVjYUNvcmVTeW5jfSBmcm9tICcuL21haW4tc3luYy5qcyc7XG5pbXBvcnQge2V4ZWNhQ29yZUFzeW5jfSBmcm9tICcuL21haW4tYXN5bmMuanMnO1xuaW1wb3J0IHttZXJnZU9wdGlvbnN9IGZyb20gJy4vYmluZC5qcyc7XG5cbi8vIFdyYXBzIGV2ZXJ5IGV4cG9ydGVkIG1ldGhvZHMgdG8gcHJvdmlkZSB0aGUgZm9sbG93aW5nIGZlYXR1cmVzOlxuLy8gIC0gdGVtcGxhdGUgc3RyaW5nIHN5bnRheDogZXhlY2FgY29tbWFuZCBhcmd1bWVudGBcbi8vICAtIG9wdGlvbnMgYmluZGluZzogYm91bmRFeGVjYSA9IGV4ZWNhKG9wdGlvbnMpXG4vLyAgLSBvcHRpb25hbCBhcmd1bWVudC9vcHRpb25zOiBleGVjYShmaWxlKSwgZXhlY2EoZmlsZSwgYXJncyksIGV4ZWNhKGZpbGUsIG9wdGlvbnMpLCBleGVjYShmaWxlLCBhcmdzLCBvcHRpb25zKVxuLy8gYG1hcEFyZ3VtZW50cygpYCBhbmQgYHNldEJvdW5kRXhlY2EoKWAgYWxsb3dzIGZvciBtZXRob2Qtc3BlY2lmaWMgbG9naWMuXG5leHBvcnQgY29uc3QgY3JlYXRlRXhlY2EgPSAobWFwQXJndW1lbnRzLCBib3VuZE9wdGlvbnMsIGRlZXBPcHRpb25zLCBzZXRCb3VuZEV4ZWNhKSA9PiB7XG5cdGNvbnN0IGNyZWF0ZU5lc3RlZCA9IChtYXBBcmd1bWVudHMsIGJvdW5kT3B0aW9ucywgc2V0Qm91bmRFeGVjYSkgPT4gY3JlYXRlRXhlY2EobWFwQXJndW1lbnRzLCBib3VuZE9wdGlvbnMsIGRlZXBPcHRpb25zLCBzZXRCb3VuZEV4ZWNhKTtcblx0Y29uc3QgYm91bmRFeGVjYSA9ICguLi5leGVjYUFyZ3VtZW50cykgPT4gY2FsbEJvdW5kRXhlY2Eoe1xuXHRcdG1hcEFyZ3VtZW50cyxcblx0XHRkZWVwT3B0aW9ucyxcblx0XHRib3VuZE9wdGlvbnMsXG5cdFx0c2V0Qm91bmRFeGVjYSxcblx0XHRjcmVhdGVOZXN0ZWQsXG5cdH0sIC4uLmV4ZWNhQXJndW1lbnRzKTtcblxuXHRpZiAoc2V0Qm91bmRFeGVjYSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2V0Qm91bmRFeGVjYShib3VuZEV4ZWNhLCBjcmVhdGVOZXN0ZWQsIGJvdW5kT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gYm91bmRFeGVjYTtcbn07XG5cbmNvbnN0IGNhbGxCb3VuZEV4ZWNhID0gKHttYXBBcmd1bWVudHMsIGRlZXBPcHRpb25zID0ge30sIGJvdW5kT3B0aW9ucyA9IHt9LCBzZXRCb3VuZEV4ZWNhLCBjcmVhdGVOZXN0ZWR9LCBmaXJzdEFyZ3VtZW50LCAuLi5uZXh0QXJndW1lbnRzKSA9PiB7XG5cdGlmIChpc1BsYWluT2JqZWN0KGZpcnN0QXJndW1lbnQpKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZU5lc3RlZChtYXBBcmd1bWVudHMsIG1lcmdlT3B0aW9ucyhib3VuZE9wdGlvbnMsIGZpcnN0QXJndW1lbnQpLCBzZXRCb3VuZEV4ZWNhKTtcblx0fVxuXG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zLCBpc1N5bmN9ID0gcGFyc2VBcmd1bWVudHMoe1xuXHRcdG1hcEFyZ3VtZW50cyxcblx0XHRmaXJzdEFyZ3VtZW50LFxuXHRcdG5leHRBcmd1bWVudHMsXG5cdFx0ZGVlcE9wdGlvbnMsXG5cdFx0Ym91bmRPcHRpb25zLFxuXHR9KTtcblx0cmV0dXJuIGlzU3luY1xuXHRcdD8gZXhlY2FDb3JlU3luYyhmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zKVxuXHRcdDogZXhlY2FDb3JlQXN5bmMoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucywgY3JlYXRlTmVzdGVkKTtcbn07XG5cbmNvbnN0IHBhcnNlQXJndW1lbnRzID0gKHttYXBBcmd1bWVudHMsIGZpcnN0QXJndW1lbnQsIG5leHRBcmd1bWVudHMsIGRlZXBPcHRpb25zLCBib3VuZE9wdGlvbnN9KSA9PiB7XG5cdGNvbnN0IGNhbGxBcmd1bWVudHMgPSBpc1RlbXBsYXRlU3RyaW5nKGZpcnN0QXJndW1lbnQpXG5cdFx0PyBwYXJzZVRlbXBsYXRlcyhmaXJzdEFyZ3VtZW50LCBuZXh0QXJndW1lbnRzKVxuXHRcdDogW2ZpcnN0QXJndW1lbnQsIC4uLm5leHRBcmd1bWVudHNdO1xuXHRjb25zdCBbaW5pdGlhbEZpbGUsIGluaXRpYWxBcmd1bWVudHMsIGluaXRpYWxPcHRpb25zXSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMoLi4uY2FsbEFyZ3VtZW50cyk7XG5cdGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBtZXJnZU9wdGlvbnMobWVyZ2VPcHRpb25zKGRlZXBPcHRpb25zLCBib3VuZE9wdGlvbnMpLCBpbml0aWFsT3B0aW9ucyk7XG5cdGNvbnN0IHtcblx0XHRmaWxlID0gaW5pdGlhbEZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyA9IGluaXRpYWxBcmd1bWVudHMsXG5cdFx0b3B0aW9ucyA9IG1lcmdlZE9wdGlvbnMsXG5cdFx0aXNTeW5jID0gZmFsc2UsXG5cdH0gPSBtYXBBcmd1bWVudHMoe2ZpbGU6IGluaXRpYWxGaWxlLCBjb21tYW5kQXJndW1lbnRzOiBpbml0aWFsQXJndW1lbnRzLCBvcHRpb25zOiBtZXJnZWRPcHRpb25zfSk7XG5cdHJldHVybiB7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMsXG5cdFx0aXNTeW5jLFxuXHR9O1xufTtcbiIsICIvLyBNYWluIGxvZ2ljIGZvciBgZXhlY2FDb21tYW5kKClgXG5leHBvcnQgY29uc3QgbWFwQ29tbWFuZEFzeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzfSkgPT4gcGFyc2VDb21tYW5kKGZpbGUsIGNvbW1hbmRBcmd1bWVudHMpO1xuXG4vLyBNYWluIGxvZ2ljIGZvciBgZXhlY2FDb21tYW5kU3luYygpYFxuZXhwb3J0IGNvbnN0IG1hcENvbW1hbmRTeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzfSkgPT4gKHsuLi5wYXJzZUNvbW1hbmQoZmlsZSwgY29tbWFuZEFyZ3VtZW50cyksIGlzU3luYzogdHJ1ZX0pO1xuXG4vLyBDb252ZXJ0IGBleGVjYUNvbW1hbmQoY29tbWFuZClgIGludG8gYGV4ZWNhKGZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHMpYFxuY29uc3QgcGFyc2VDb21tYW5kID0gKGNvbW1hbmQsIHVudXNlZEFyZ3VtZW50cykgPT4ge1xuXHRpZiAodW51c2VkQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29tbWFuZCBhbmQgaXRzIGFyZ3VtZW50cyBtdXN0IGJlIHBhc3NlZCBhcyBhIHNpbmdsZSBzdHJpbmc6ICR7Y29tbWFuZH0gJHt1bnVzZWRBcmd1bWVudHN9LmApO1xuXHR9XG5cblx0Y29uc3QgW2ZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHNdID0gcGFyc2VDb21tYW5kU3RyaW5nKGNvbW1hbmQpO1xuXHRyZXR1cm4ge2ZpbGUsIGNvbW1hbmRBcmd1bWVudHN9O1xufTtcblxuLy8gQ29udmVydCBgY29tbWFuZGAgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgZmlsZSBvciBhcmd1bWVudHMgdG8gcGFzcyB0byAkYCR7Li4uZmlsZU9yQ29tbWFuZEFyZ3VtZW50c31gXG5leHBvcnQgY29uc3QgcGFyc2VDb21tYW5kU3RyaW5nID0gY29tbWFuZCA9PiB7XG5cdGlmICh0eXBlb2YgY29tbWFuZCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29tbWFuZCBtdXN0IGJlIGEgc3RyaW5nOiAke1N0cmluZyhjb21tYW5kKX0uYCk7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkQ29tbWFuZCA9IGNvbW1hbmQudHJpbSgpO1xuXHRpZiAodHJpbW1lZENvbW1hbmQgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgdG9rZW5zID0gW107XG5cdGZvciAoY29uc3QgdG9rZW4gb2YgdHJpbW1lZENvbW1hbmQuc3BsaXQoU1BBQ0VTX1JFR0VYUCkpIHtcblx0XHQvLyBBbGxvdyBzcGFjZXMgdG8gYmUgZXNjYXBlZCBieSBhIGJhY2tzbGFzaCBpZiBub3QgbWVhbnQgYXMgYSBkZWxpbWl0ZXJcblx0XHRjb25zdCBwcmV2aW91c1Rva2VuID0gdG9rZW5zLmF0KC0xKTtcblx0XHRpZiAocHJldmlvdXNUb2tlbiAmJiBwcmV2aW91c1Rva2VuLmVuZHNXaXRoKCdcXFxcJykpIHtcblx0XHRcdC8vIE1lcmdlIHByZXZpb3VzIHRva2VuIHdpdGggY3VycmVudCBvbmVcblx0XHRcdHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gPSBgJHtwcmV2aW91c1Rva2VuLnNsaWNlKDAsIC0xKX0gJHt0b2tlbn1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2tlbnMucHVzaCh0b2tlbik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRva2Vucztcbn07XG5cbmNvbnN0IFNQQUNFU19SRUdFWFAgPSAvICsvZztcbiIsICIvLyBTZXRzIGAkLnN5bmNgIGFuZCBgJC5zYFxuZXhwb3J0IGNvbnN0IHNldFNjcmlwdFN5bmMgPSAoYm91bmRFeGVjYSwgY3JlYXRlTmVzdGVkLCBib3VuZE9wdGlvbnMpID0+IHtcblx0Ym91bmRFeGVjYS5zeW5jID0gY3JlYXRlTmVzdGVkKG1hcFNjcmlwdFN5bmMsIGJvdW5kT3B0aW9ucyk7XG5cdGJvdW5kRXhlY2EucyA9IGJvdW5kRXhlY2Euc3luYztcbn07XG5cbi8vIE1haW4gbG9naWMgZm9yIGAkYFxuZXhwb3J0IGNvbnN0IG1hcFNjcmlwdEFzeW5jID0gKHtvcHRpb25zfSkgPT4gZ2V0U2NyaXB0T3B0aW9ucyhvcHRpb25zKTtcblxuLy8gTWFpbiBsb2dpYyBmb3IgYCQuc3luY2BcbmNvbnN0IG1hcFNjcmlwdFN5bmMgPSAoe29wdGlvbnN9KSA9PiAoey4uLmdldFNjcmlwdE9wdGlvbnMob3B0aW9ucyksIGlzU3luYzogdHJ1ZX0pO1xuXG4vLyBgJGAgaXMgbGlrZSBgZXhlY2FgIGJ1dCB3aXRoIHNjcmlwdC1mcmllbmRseSBvcHRpb25zOiBge3N0ZGluOiAnaW5oZXJpdCcsIHByZWZlckxvY2FsOiB0cnVlfWBcbmNvbnN0IGdldFNjcmlwdE9wdGlvbnMgPSBvcHRpb25zID0+ICh7b3B0aW9uczogey4uLmdldFNjcmlwdFN0ZGluT3B0aW9uKG9wdGlvbnMpLCAuLi5vcHRpb25zfX0pO1xuXG5jb25zdCBnZXRTY3JpcHRTdGRpbk9wdGlvbiA9ICh7aW5wdXQsIGlucHV0RmlsZSwgc3RkaW99KSA9PiBpbnB1dCA9PT0gdW5kZWZpbmVkICYmIGlucHV0RmlsZSA9PT0gdW5kZWZpbmVkICYmIHN0ZGlvID09PSB1bmRlZmluZWRcblx0PyB7c3RkaW46ICdpbmhlcml0J31cblx0OiB7fTtcblxuLy8gV2hlbiB1c2luZyAkKC4uLikucGlwZSguLi4pLCBtb3N0IHNjcmlwdC1mcmllbmRseSBvcHRpb25zIHNob3VsZCBhcHBseSB0byBib3RoIGNvbW1hbmRzLlxuLy8gSG93ZXZlciwgc29tZSBvcHRpb25zIChsaWtlIGBzdGRpbjogJ2luaGVyaXQnYCkgd291bGQgY3JlYXRlIGlzc3VlcyB3aXRoIHBpcGluZywgaS5lLiBjYW5ub3QgYmUgZGVlcC5cbmV4cG9ydCBjb25zdCBkZWVwU2NyaXB0T3B0aW9ucyA9IHtwcmVmZXJMb2NhbDogdHJ1ZX07XG4iLCAiaW1wb3J0IHtjcmVhdGVFeGVjYX0gZnJvbSAnLi9saWIvbWV0aG9kcy9jcmVhdGUuanMnO1xuaW1wb3J0IHttYXBDb21tYW5kQXN5bmMsIG1hcENvbW1hbmRTeW5jfSBmcm9tICcuL2xpYi9tZXRob2RzL2NvbW1hbmQuanMnO1xuaW1wb3J0IHttYXBOb2RlfSBmcm9tICcuL2xpYi9tZXRob2RzL25vZGUuanMnO1xuaW1wb3J0IHttYXBTY3JpcHRBc3luYywgc2V0U2NyaXB0U3luYywgZGVlcFNjcmlwdE9wdGlvbnN9IGZyb20gJy4vbGliL21ldGhvZHMvc2NyaXB0LmpzJztcbmltcG9ydCB7Z2V0SXBjRXhwb3J0fSBmcm9tICcuL2xpYi9pcGMvbWV0aG9kcy5qcyc7XG5cbmV4cG9ydCB7cGFyc2VDb21tYW5kU3RyaW5nfSBmcm9tICcuL2xpYi9tZXRob2RzL2NvbW1hbmQuanMnO1xuZXhwb3J0IHtFeGVjYUVycm9yLCBFeGVjYVN5bmNFcnJvcn0gZnJvbSAnLi9saWIvcmV0dXJuL2ZpbmFsLWVycm9yLmpzJztcblxuZXhwb3J0IGNvbnN0IGV4ZWNhID0gY3JlYXRlRXhlY2EoKCkgPT4gKHt9KSk7XG5leHBvcnQgY29uc3QgZXhlY2FTeW5jID0gY3JlYXRlRXhlY2EoKCkgPT4gKHtpc1N5bmM6IHRydWV9KSk7XG5leHBvcnQgY29uc3QgZXhlY2FDb21tYW5kID0gY3JlYXRlRXhlY2EobWFwQ29tbWFuZEFzeW5jKTtcbmV4cG9ydCBjb25zdCBleGVjYUNvbW1hbmRTeW5jID0gY3JlYXRlRXhlY2EobWFwQ29tbWFuZFN5bmMpO1xuZXhwb3J0IGNvbnN0IGV4ZWNhTm9kZSA9IGNyZWF0ZUV4ZWNhKG1hcE5vZGUpO1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVFeGVjYShtYXBTY3JpcHRBc3luYywge30sIGRlZXBTY3JpcHRPcHRpb25zLCBzZXRTY3JpcHRTeW5jKTtcblxuY29uc3Qge1xuXHRzZW5kTWVzc2FnZSxcblx0Z2V0T25lTWVzc2FnZSxcblx0Z2V0RWFjaE1lc3NhZ2UsXG5cdGdldENhbmNlbFNpZ25hbCxcbn0gPSBnZXRJcGNFeHBvcnQoKTtcbmV4cG9ydCB7XG5cdHNlbmRNZXNzYWdlLFxuXHRnZXRPbmVNZXNzYWdlLFxuXHRnZXRFYWNoTWVzc2FnZSxcblx0Z2V0Q2FuY2VsU2lnbmFsLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsT0FBT0EsY0FBYTtBQUVMLFNBQVIscUJBQXNDO0FBQzVDLFFBQU0sRUFBQyxJQUFHLElBQUlBO0FBQ2QsUUFBTSxFQUFDLE1BQU0sYUFBWSxJQUFJO0FBRTdCLE1BQUlBLFNBQVEsYUFBYSxTQUFTO0FBQ2pDLFdBQU8sU0FBUztBQUFBLEVBQ2pCO0FBRUEsU0FBTyxRQUFRLElBQUksVUFBVSxLQUN6QixRQUFRLElBQUksZ0JBQWdCLEtBQzVCLElBQUksZUFBZSxrQkFDbkIsaUJBQWlCLHNCQUNqQixpQkFBaUIsWUFDakIsU0FBUyxvQkFDVCxTQUFTLGVBQ1QsU0FBUyxrQkFDVCxTQUFTLDJCQUNULElBQUksc0JBQXNCO0FBQy9CO0FBcEJBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUVNLFFBcU1BLG9CQXFDQSx3QkFxQ08sYUFDQSxpQkFFUCxlQUNBLFNBQ0MsaUJBRUQ7QUF4Uk47QUFBQTtBQUFBO0FBRUEsSUFBTSxTQUFTO0FBQUEsTUFDZCxvQkFBb0I7QUFBQSxNQUNwQixvQkFBb0I7QUFBQSxNQUNwQixRQUFRO0FBQUEsTUFD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QUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQ0E7QUFBQSxRQUNBLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxRQUNULFFBQU87QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLFFBQ1QsUUFBTztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsUUFDVCxRQUFPO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixV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T0FBTztBQUdyRSxJQUFNLGdCQUFnQixDQUFDLEVBQUMsUUFBTyxPQUFPLEVBQUMsR0FBRyxpQkFBaUIsT0FBTyxHQUFHLFFBQVEsS0FBSTtBQUdqRixJQUFNLG1CQUFtQixjQUFZLEVBQUMsU0FBUyxFQUFDLEdBQUcscUJBQXFCLE9BQU8sR0FBRyxHQUFHLFFBQU8sRUFBQztBQUU3RixJQUFNLHVCQUF1QixDQUFDLEVBQUMsT0FBTyxXQUFXLE1BQUssTUFBTSxVQUFVLFVBQWEsY0FBYyxVQUFhLFVBQVUsU0FDckgsRUFBQyxPQUFPLFVBQVMsSUFDakIsQ0FBQztBQUlHLElBQU0sb0JBQW9CLEVBQUMsYUFBYSxLQUFJO0FBQUE7QUFBQTs7O0FDckJuRCxJQVNhLE9BQ0EsV0FDQSxjQUNBLGtCQUNBLFdBQ0EsR0FHWkMsY0FDQUMsZ0JBQ0FDLGlCQUNBQztBQXBCRDtBQUFBO0FBQUE7QUFDQSxJQUFBQztBQUNBLElBQUFDO0FBQ0E7QUFDQTtBQUVBLElBQUFEO0FBQ0E7QUFFTyxJQUFNLFFBQVEsWUFBWSxPQUFPLENBQUMsRUFBRTtBQUNwQyxJQUFNLFlBQVksWUFBWSxPQUFPLEVBQUMsUUFBUSxLQUFJLEVBQUU7QUFDcEQsSUFBTSxlQUFlLFlBQVksZUFBZTtBQUNoRCxJQUFNLG1CQUFtQixZQUFZLGNBQWM7QUFDbkQsSUFBTSxZQUFZLFlBQVksT0FBTztBQUNyQyxJQUFNLElBQUksWUFBWSxnQkFBZ0IsQ0FBQyxHQUFHLG1CQUFtQixhQUFhO0FBRWpGLEtBQU07QUFBQSxNQUNMLGFBQUFKO0FBQUEsTUFDQSxlQUFBQztBQUFBLE1BQ0EsZ0JBQUFDO0FBQUEsTUFDQSxpQkFBQUM7QUFBQSxRQUNHLGFBQWE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJwcm9jZXNzIiwgImV4cHJlc3Npb24iLCAicHJvY2VzcyIsICJyZXF1aXJlIiwgInBsYXRmb3JtIiwgImluaXRfZGVmYXVsdCIsICJwYXRoIiwgImZpbGVVUkxUb1BhdGgiLCAiaW5pdF9kZWZhdWx0IiwgInByb2Nlc3MiLCAicGF0aCIsICJleGVjUGF0aCIsICJzaWduYWxzIiwgImNvbnN0YW50cyIsICJzaWduYWxzIiwgImNvbnN0YW50cyIsICJub3JtYWxpemVTaWduYWwiLCAic2V0VGltZW91dCIsICJpc0Nvbm5lY3RlZCIsICJvbmNlIiwgIm9uY2UiLCAicHJvbWlzaWZ5IiwgInNjaGVkdWxlciIsICJpbml0X2dyYWNlZnVsIiwgInNldFRpbWVvdXQiLCAicGF0aCIsICJpbml0X25vZGUiLCAiY29ycmVjdEVuY29kaW5nIiwgInBhdGgiLCAicHJvY2VzcyIsICJwYXRoIiwgInByb2Nlc3MiLCAiaW5pdF9ncmFjZWZ1bCIsICJpbml0X25vZGUiLCAib2JqZWN0VG9TdHJpbmciLCAiaWRlbnRpdHkiLCAiaWRlbnRpdHkiLCAidGV4dEVuY29kZXIiLCAidGV4dERlY29kZXIiLCAiaWRlbnRpdHkiLCAiaW5zcGVjdCIsICJtaWxsaXNlY29uZHMiLCAiY291bnQiLCAiaXNSZWFkYWJsZVN0cmVhbSIsICJpc1dyaXRhYmxlU3RyZWFtIiwgInByb2Nlc3MiLCAiaXNXcml0YWJsZVN0cmVhbSIsICJpbml0X2FycmF5IiwgImFkZERlZmF1bHRWYWx1ZSIsICJpbml0X2FycmF5IiwgInR0eSIsICJhZGRQcm9wZXJ0aWVzIiwgIm9wdGlvbk5hbWUiLCAidmFsdWUiLCAicmVhZEZpbGVTeW5jIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgIkxGIiwgIkJ1ZmZlciIsICJTdHJpbmdEZWNvZGVyIiwgInRleHRFbmNvZGVyIiwgImlkZW50aXR5R2VuZXJhdG9yIiwgImVuY29kaW5nIiwgImdlbmVyYXRvcnMiLCAic3RyaXBGaW5hbE5ld2xpbmUiLCAicGF0aCIsICJvbmNlIiwgIm9uY2UiLCAib24iLCAidGhyb3dPbkRpc2Nvbm5lY3QiLCAib25jZSIsICJvbiIsICJwcm9jZXNzIiwgIkNoaWxkUHJvY2VzcyIsICJCdWZmZXIiLCAiUmVhZGFibGUiLCAiV3JpdGFibGUiLCAiRHVwbGV4IiwgImFkZFByb3BlcnRpZXMiLCAib24iLCAib25jZSIsICJnZXREZWZhdWx0SGlnaFdhdGVyTWFyayIsICJmaW5pc2hlZCIsICJub29wIiwgImFib3J0ZWQiLCAiaW5jcmVtZW50IiwgImZpbmlzaGVkIiwgImluaXRfc2lnbmFscyIsICJwcm9jZXNzIiwgImluaXRfc2lnbmFscyIsICJpIiwgImNvdW50IiwgImEiLCAiYWRkQWJvcnRMaXN0ZW5lciIsICJmaW5pc2hlZCIsICJvbiIsICJnZXREZWZhdWx0SGlnaFdhdGVyTWFyayIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJnZXRTdHJlYW1Db250ZW50cyIsICJpbml0X2NvbnRlbnRzIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgImZpbmlzaGVkIiwgImluaXRfY29udGVudHMiLCAic3RyaXBGaW5hbE5ld2xpbmUiLCAic3RyaXBGaW5hbE5ld2xpbmUiLCAiaXNWZXJib3NlIiwgIm9uY2UiLCAiaW5pdF9ncmFjZWZ1bCIsICJpbml0X2NvbnRlbnRzIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgImZpbmlzaGVkIiwgIlJlYWRhYmxlIiwgImNhbGxiYWNraWZ5IiwgInJlYWRhYmxlIiwgIldyaXRhYmxlIiwgImNhbGxiYWNraWZ5IiwgIndyaXRhYmxlIiwgIkR1cGxleCIsICJjYWxsYmFja2lmeSIsICJkdXBsZXgiLCAic3Bhd24iLCAibWFwQXJndW1lbnRzIiwgImJvdW5kT3B0aW9ucyIsICJzZXRCb3VuZEV4ZWNhIiwgImluaXRfY29tbWFuZCIsICJzZW5kTWVzc2FnZSIsICJnZXRPbmVNZXNzYWdlIiwgImdldEVhY2hNZXNzYWdlIiwgImdldENhbmNlbFNpZ25hbCIsICJpbml0X2NvbW1hbmQiLCAiaW5pdF9ub2RlIl0KfQo=
