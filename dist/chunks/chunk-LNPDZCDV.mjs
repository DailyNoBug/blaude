#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  init_v4
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import {
  init_memoize,
  memoizeWithLRU
} from "./chunk-NT7W7YWD.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
import {
  __callDispose,
  __esm,
  __using
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/jsonRead.ts
function stripBOM(content) {
  return content.startsWith(UTF8_BOM) ? content.slice(1) : content;
}
var UTF8_BOM;
var init_jsonRead = __esm({
  "src/utils/jsonRead.ts"() {
    UTF8_BOM = "\uFEFF";
  }
});

// node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/scanner.js
function createScanner(text, ignoreTrivia = false) {
  const len = text.length;
  let pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
  function scanHexDigits(count, exact) {
    let digits = 0;
    let value2 = 0;
    while (digits < count || !exact) {
      let ch = text.charCodeAt(pos);
      if (ch >= 48 && ch <= 57) {
        value2 = value2 * 16 + ch - 48;
      } else if (ch >= 65 && ch <= 70) {
        value2 = value2 * 16 + ch - 65 + 10;
      } else if (ch >= 97 && ch <= 102) {
        value2 = value2 * 16 + ch - 97 + 10;
      } else {
        break;
      }
      pos++;
      digits++;
    }
    if (digits < count) {
      value2 = -1;
    }
    return value2;
  }
  function setPosition(newPosition) {
    pos = newPosition;
    value = "";
    tokenOffset = 0;
    token = 16;
    scanError = 0;
  }
  function scanNumber() {
    let start = pos;
    if (text.charCodeAt(pos) === 48) {
      pos++;
    } else {
      pos++;
      while (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++;
      }
    }
    if (pos < text.length && text.charCodeAt(pos) === 46) {
      pos++;
      if (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++;
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
        }
      } else {
        scanError = 3;
        return text.substring(start, pos);
      }
    }
    let end = pos;
    if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
      pos++;
      if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) {
        pos++;
      }
      if (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++;
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
        }
        end = pos;
      } else {
        scanError = 3;
      }
    }
    return text.substring(start, end);
  }
  function scanString() {
    let result = "", start = pos;
    while (true) {
      if (pos >= len) {
        result += text.substring(start, pos);
        scanError = 2;
        break;
      }
      const ch = text.charCodeAt(pos);
      if (ch === 34) {
        result += text.substring(start, pos);
        pos++;
        break;
      }
      if (ch === 92) {
        result += text.substring(start, pos);
        pos++;
        if (pos >= len) {
          scanError = 2;
          break;
        }
        const ch2 = text.charCodeAt(pos++);
        switch (ch2) {
          case 34:
            result += '"';
            break;
          case 92:
            result += "\\";
            break;
          case 47:
            result += "/";
            break;
          case 98:
            result += "\b";
            break;
          case 102:
            result += "\f";
            break;
          case 110:
            result += "\n";
            break;
          case 114:
            result += "\r";
            break;
          case 116:
            result += "	";
            break;
          case 117:
            const ch3 = scanHexDigits(4, true);
            if (ch3 >= 0) {
              result += String.fromCharCode(ch3);
            } else {
              scanError = 4;
            }
            break;
          default:
            scanError = 5;
        }
        start = pos;
        continue;
      }
      if (ch >= 0 && ch <= 31) {
        if (isLineBreak(ch)) {
          result += text.substring(start, pos);
          scanError = 2;
          break;
        } else {
          scanError = 6;
        }
      }
      pos++;
    }
    return result;
  }
  function scanNext() {
    value = "";
    scanError = 0;
    tokenOffset = pos;
    lineStartOffset = lineNumber;
    prevTokenLineStartOffset = tokenLineStartOffset;
    if (pos >= len) {
      tokenOffset = len;
      return token = 17;
    }
    let code = text.charCodeAt(pos);
    if (isWhiteSpace(code)) {
      do {
        pos++;
        value += String.fromCharCode(code);
        code = text.charCodeAt(pos);
      } while (isWhiteSpace(code));
      return token = 15;
    }
    if (isLineBreak(code)) {
      pos++;
      value += String.fromCharCode(code);
      if (code === 13 && text.charCodeAt(pos) === 10) {
        pos++;
        value += "\n";
      }
      lineNumber++;
      tokenLineStartOffset = pos;
      return token = 14;
    }
    switch (code) {
      // tokens: []{}:,
      case 123:
        pos++;
        return token = 1;
      case 125:
        pos++;
        return token = 2;
      case 91:
        pos++;
        return token = 3;
      case 93:
        pos++;
        return token = 4;
      case 58:
        pos++;
        return token = 6;
      case 44:
        pos++;
        return token = 5;
      // strings
      case 34:
        pos++;
        value = scanString();
        return token = 10;
      // comments
      case 47:
        const start = pos - 1;
        if (text.charCodeAt(pos + 1) === 47) {
          pos += 2;
          while (pos < len) {
            if (isLineBreak(text.charCodeAt(pos))) {
              break;
            }
            pos++;
          }
          value = text.substring(start, pos);
          return token = 12;
        }
        if (text.charCodeAt(pos + 1) === 42) {
          pos += 2;
          const safeLength = len - 1;
          let commentClosed = false;
          while (pos < safeLength) {
            const ch = text.charCodeAt(pos);
            if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
              pos += 2;
              commentClosed = true;
              break;
            }
            pos++;
            if (isLineBreak(ch)) {
              if (ch === 13 && text.charCodeAt(pos) === 10) {
                pos++;
              }
              lineNumber++;
              tokenLineStartOffset = pos;
            }
          }
          if (!commentClosed) {
            pos++;
            scanError = 1;
          }
          value = text.substring(start, pos);
          return token = 13;
        }
        value += String.fromCharCode(code);
        pos++;
        return token = 16;
      // numbers
      case 45:
        value += String.fromCharCode(code);
        pos++;
        if (pos === len || !isDigit(text.charCodeAt(pos))) {
          return token = 16;
        }
      // found a minus, followed by a number so
      // we fall through to proceed with scanning
      // numbers
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        value += scanNumber();
        return token = 11;
      // literals and unknown symbols
      default:
        while (pos < len && isUnknownContentCharacter(code)) {
          pos++;
          code = text.charCodeAt(pos);
        }
        if (tokenOffset !== pos) {
          value = text.substring(tokenOffset, pos);
          switch (value) {
            case "true":
              return token = 8;
            case "false":
              return token = 9;
            case "null":
              return token = 7;
          }
          return token = 16;
        }
        value += String.fromCharCode(code);
        pos++;
        return token = 16;
    }
  }
  function isUnknownContentCharacter(code) {
    if (isWhiteSpace(code) || isLineBreak(code)) {
      return false;
    }
    switch (code) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function scanNextNonTrivia() {
    let result;
    do {
      result = scanNext();
    } while (result >= 12 && result <= 15);
    return result;
  }
  return {
    setPosition,
    getPosition: () => pos,
    scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
    getToken: () => token,
    getTokenValue: () => value,
    getTokenOffset: () => tokenOffset,
    getTokenLength: () => pos - tokenOffset,
    getTokenStartLine: () => lineStartOffset,
    getTokenStartCharacter: () => tokenOffset - prevTokenLineStartOffset,
    getTokenError: () => scanError
  };
}
function isWhiteSpace(ch) {
  return ch === 32 || ch === 9;
}
function isLineBreak(ch) {
  return ch === 10 || ch === 13;
}
function isDigit(ch) {
  return ch >= 48 && ch <= 57;
}
var CharacterCodes;
var init_scanner = __esm({
  "node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/scanner.js"() {
    "use strict";
    (function(CharacterCodes2) {
      CharacterCodes2[CharacterCodes2["lineFeed"] = 10] = "lineFeed";
      CharacterCodes2[CharacterCodes2["carriageReturn"] = 13] = "carriageReturn";
      CharacterCodes2[CharacterCodes2["space"] = 32] = "space";
      CharacterCodes2[CharacterCodes2["_0"] = 48] = "_0";
      CharacterCodes2[CharacterCodes2["_1"] = 49] = "_1";
      CharacterCodes2[CharacterCodes2["_2"] = 50] = "_2";
      CharacterCodes2[CharacterCodes2["_3"] = 51] = "_3";
      CharacterCodes2[CharacterCodes2["_4"] = 52] = "_4";
      CharacterCodes2[CharacterCodes2["_5"] = 53] = "_5";
      CharacterCodes2[CharacterCodes2["_6"] = 54] = "_6";
      CharacterCodes2[CharacterCodes2["_7"] = 55] = "_7";
      CharacterCodes2[CharacterCodes2["_8"] = 56] = "_8";
      CharacterCodes2[CharacterCodes2["_9"] = 57] = "_9";
      CharacterCodes2[CharacterCodes2["a"] = 97] = "a";
      CharacterCodes2[CharacterCodes2["b"] = 98] = "b";
      CharacterCodes2[CharacterCodes2["c"] = 99] = "c";
      CharacterCodes2[CharacterCodes2["d"] = 100] = "d";
      CharacterCodes2[CharacterCodes2["e"] = 101] = "e";
      CharacterCodes2[CharacterCodes2["f"] = 102] = "f";
      CharacterCodes2[CharacterCodes2["g"] = 103] = "g";
      CharacterCodes2[CharacterCodes2["h"] = 104] = "h";
      CharacterCodes2[CharacterCodes2["i"] = 105] = "i";
      CharacterCodes2[CharacterCodes2["j"] = 106] = "j";
      CharacterCodes2[CharacterCodes2["k"] = 107] = "k";
      CharacterCodes2[CharacterCodes2["l"] = 108] = "l";
      CharacterCodes2[CharacterCodes2["m"] = 109] = "m";
      CharacterCodes2[CharacterCodes2["n"] = 110] = "n";
      CharacterCodes2[CharacterCodes2["o"] = 111] = "o";
      CharacterCodes2[CharacterCodes2["p"] = 112] = "p";
      CharacterCodes2[CharacterCodes2["q"] = 113] = "q";
      CharacterCodes2[CharacterCodes2["r"] = 114] = "r";
      CharacterCodes2[CharacterCodes2["s"] = 115] = "s";
      CharacterCodes2[CharacterCodes2["t"] = 116] = "t";
      CharacterCodes2[CharacterCodes2["u"] = 117] = "u";
      CharacterCodes2[CharacterCodes2["v"] = 118] = "v";
      CharacterCodes2[CharacterCodes2["w"] = 119] = "w";
      CharacterCodes2[CharacterCodes2["x"] = 120] = "x";
      CharacterCodes2[CharacterCodes2["y"] = 121] = "y";
      CharacterCodes2[CharacterCodes2["z"] = 122] = "z";
      CharacterCodes2[CharacterCodes2["A"] = 65] = "A";
      CharacterCodes2[CharacterCodes2["B"] = 66] = "B";
      CharacterCodes2[CharacterCodes2["C"] = 67] = "C";
      CharacterCodes2[CharacterCodes2["D"] = 68] = "D";
      CharacterCodes2[CharacterCodes2["E"] = 69] = "E";
      CharacterCodes2[CharacterCodes2["F"] = 70] = "F";
      CharacterCodes2[CharacterCodes2["G"] = 71] = "G";
      CharacterCodes2[CharacterCodes2["H"] = 72] = "H";
      CharacterCodes2[CharacterCodes2["I"] = 73] = "I";
      CharacterCodes2[CharacterCodes2["J"] = 74] = "J";
      CharacterCodes2[CharacterCodes2["K"] = 75] = "K";
      CharacterCodes2[CharacterCodes2["L"] = 76] = "L";
      CharacterCodes2[CharacterCodes2["M"] = 77] = "M";
      CharacterCodes2[CharacterCodes2["N"] = 78] = "N";
      CharacterCodes2[CharacterCodes2["O"] = 79] = "O";
      CharacterCodes2[CharacterCodes2["P"] = 80] = "P";
      CharacterCodes2[CharacterCodes2["Q"] = 81] = "Q";
      CharacterCodes2[CharacterCodes2["R"] = 82] = "R";
      CharacterCodes2[CharacterCodes2["S"] = 83] = "S";
      CharacterCodes2[CharacterCodes2["T"] = 84] = "T";
      CharacterCodes2[CharacterCodes2["U"] = 85] = "U";
      CharacterCodes2[CharacterCodes2["V"] = 86] = "V";
      CharacterCodes2[CharacterCodes2["W"] = 87] = "W";
      CharacterCodes2[CharacterCodes2["X"] = 88] = "X";
      CharacterCodes2[CharacterCodes2["Y"] = 89] = "Y";
      CharacterCodes2[CharacterCodes2["Z"] = 90] = "Z";
      CharacterCodes2[CharacterCodes2["asterisk"] = 42] = "asterisk";
      CharacterCodes2[CharacterCodes2["backslash"] = 92] = "backslash";
      CharacterCodes2[CharacterCodes2["closeBrace"] = 125] = "closeBrace";
      CharacterCodes2[CharacterCodes2["closeBracket"] = 93] = "closeBracket";
      CharacterCodes2[CharacterCodes2["colon"] = 58] = "colon";
      CharacterCodes2[CharacterCodes2["comma"] = 44] = "comma";
      CharacterCodes2[CharacterCodes2["dot"] = 46] = "dot";
      CharacterCodes2[CharacterCodes2["doubleQuote"] = 34] = "doubleQuote";
      CharacterCodes2[CharacterCodes2["minus"] = 45] = "minus";
      CharacterCodes2[CharacterCodes2["openBrace"] = 123] = "openBrace";
      CharacterCodes2[CharacterCodes2["openBracket"] = 91] = "openBracket";
      CharacterCodes2[CharacterCodes2["plus"] = 43] = "plus";
      CharacterCodes2[CharacterCodes2["slash"] = 47] = "slash";
      CharacterCodes2[CharacterCodes2["formFeed"] = 12] = "formFeed";
      CharacterCodes2[CharacterCodes2["tab"] = 9] = "tab";
    })(CharacterCodes || (CharacterCodes = {}));
  }
});

// node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/string-intern.js
var cachedSpaces, maxCachedValues, cachedBreakLinesWithSpaces, supportedEols;
var init_string_intern = __esm({
  "node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/string-intern.js"() {
    cachedSpaces = new Array(20).fill(0).map((_, index) => {
      return " ".repeat(index);
    });
    maxCachedValues = 200;
    cachedBreakLinesWithSpaces = {
      " ": {
        "\n": new Array(maxCachedValues).fill(0).map((_, index) => {
          return "\n" + " ".repeat(index);
        }),
        "\r": new Array(maxCachedValues).fill(0).map((_, index) => {
          return "\r" + " ".repeat(index);
        }),
        "\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
          return "\r\n" + " ".repeat(index);
        })
      },
      "	": {
        "\n": new Array(maxCachedValues).fill(0).map((_, index) => {
          return "\n" + "	".repeat(index);
        }),
        "\r": new Array(maxCachedValues).fill(0).map((_, index) => {
          return "\r" + "	".repeat(index);
        }),
        "\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
          return "\r\n" + "	".repeat(index);
        })
      }
    };
    supportedEols = ["\n", "\r", "\r\n"];
  }
});

// node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/format.js
function format(documentText, range, options) {
  let initialIndentLevel;
  let formatText;
  let formatTextStart;
  let rangeStart;
  let rangeEnd;
  if (range) {
    rangeStart = range.offset;
    rangeEnd = rangeStart + range.length;
    formatTextStart = rangeStart;
    while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
      formatTextStart--;
    }
    let endOffset = rangeEnd;
    while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
      endOffset++;
    }
    formatText = documentText.substring(formatTextStart, endOffset);
    initialIndentLevel = computeIndentLevel(formatText, options);
  } else {
    formatText = documentText;
    initialIndentLevel = 0;
    formatTextStart = 0;
    rangeStart = 0;
    rangeEnd = documentText.length;
  }
  const eol = getEOL(options, documentText);
  const eolFastPathSupported = supportedEols.includes(eol);
  let numberLineBreaks = 0;
  let indentLevel = 0;
  let indentValue;
  if (options.insertSpaces) {
    indentValue = cachedSpaces[options.tabSize || 4] ?? repeat(cachedSpaces[1], options.tabSize || 4);
  } else {
    indentValue = "	";
  }
  const indentType = indentValue === "	" ? "	" : " ";
  let scanner = createScanner(formatText, false);
  let hasError = false;
  function newLinesAndIndent() {
    if (numberLineBreaks > 1) {
      return repeat(eol, numberLineBreaks) + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    const amountOfSpaces = indentValue.length * (initialIndentLevel + indentLevel);
    if (!eolFastPathSupported || amountOfSpaces > cachedBreakLinesWithSpaces[indentType][eol].length) {
      return eol + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    if (amountOfSpaces <= 0) {
      return eol;
    }
    return cachedBreakLinesWithSpaces[indentType][eol][amountOfSpaces];
  }
  function scanNext() {
    let token = scanner.scan();
    numberLineBreaks = 0;
    while (token === 15 || token === 14) {
      if (token === 14 && options.keepLines) {
        numberLineBreaks += 1;
      } else if (token === 14) {
        numberLineBreaks = 1;
      }
      token = scanner.scan();
    }
    hasError = token === 16 || scanner.getTokenError() !== 0;
    return token;
  }
  const editOperations = [];
  function addEdit(text, startOffset, endOffset) {
    if (!hasError && (!range || startOffset < rangeEnd && endOffset > rangeStart) && documentText.substring(startOffset, endOffset) !== text) {
      editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
    }
  }
  let firstToken = scanNext();
  if (options.keepLines && numberLineBreaks > 0) {
    addEdit(repeat(eol, numberLineBreaks), 0, 0);
  }
  if (firstToken !== 17) {
    let firstTokenStart = scanner.getTokenOffset() + formatTextStart;
    let initialIndent = indentValue.length * initialIndentLevel < 20 && options.insertSpaces ? cachedSpaces[indentValue.length * initialIndentLevel] : repeat(indentValue, initialIndentLevel);
    addEdit(initialIndent, formatTextStart, firstTokenStart);
  }
  while (firstToken !== 17) {
    let firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
    let secondToken = scanNext();
    let replaceContent = "";
    let needsLineBreak = false;
    while (numberLineBreaks === 0 && (secondToken === 12 || secondToken === 13)) {
      let commentTokenStart = scanner.getTokenOffset() + formatTextStart;
      addEdit(cachedSpaces[1], firstTokenEnd, commentTokenStart);
      firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
      needsLineBreak = secondToken === 12;
      replaceContent = needsLineBreak ? newLinesAndIndent() : "";
      secondToken = scanNext();
    }
    if (secondToken === 2) {
      if (firstToken !== 1) {
        indentLevel--;
      }
      ;
      if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 1) {
        replaceContent = newLinesAndIndent();
      } else if (options.keepLines) {
        replaceContent = cachedSpaces[1];
      }
    } else if (secondToken === 4) {
      if (firstToken !== 3) {
        indentLevel--;
      }
      ;
      if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 3) {
        replaceContent = newLinesAndIndent();
      } else if (options.keepLines) {
        replaceContent = cachedSpaces[1];
      }
    } else {
      switch (firstToken) {
        case 3:
        case 1:
          indentLevel++;
          if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
            replaceContent = newLinesAndIndent();
          } else {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 5:
          if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
            replaceContent = newLinesAndIndent();
          } else {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 12:
          replaceContent = newLinesAndIndent();
          break;
        case 13:
          if (numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else if (!needsLineBreak) {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 6:
          if (options.keepLines && numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else if (!needsLineBreak) {
            replaceContent = cachedSpaces[1];
          }
          break;
        case 10:
          if (options.keepLines && numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else if (secondToken === 6 && !needsLineBreak) {
            replaceContent = "";
          }
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          if (options.keepLines && numberLineBreaks > 0) {
            replaceContent = newLinesAndIndent();
          } else {
            if ((secondToken === 12 || secondToken === 13) && !needsLineBreak) {
              replaceContent = cachedSpaces[1];
            } else if (secondToken !== 5 && secondToken !== 17) {
              hasError = true;
            }
          }
          break;
        case 16:
          hasError = true;
          break;
      }
      if (numberLineBreaks > 0 && (secondToken === 12 || secondToken === 13)) {
        replaceContent = newLinesAndIndent();
      }
    }
    if (secondToken === 17) {
      if (options.keepLines && numberLineBreaks > 0) {
        replaceContent = newLinesAndIndent();
      } else {
        replaceContent = options.insertFinalNewline ? eol : "";
      }
    }
    const secondTokenStart = scanner.getTokenOffset() + formatTextStart;
    addEdit(replaceContent, firstTokenEnd, secondTokenStart);
    firstToken = secondToken;
  }
  return editOperations;
}
function repeat(s, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += s;
  }
  return result;
}
function computeIndentLevel(content, options) {
  let i = 0;
  let nChars = 0;
  const tabSize = options.tabSize || 4;
  while (i < content.length) {
    let ch = content.charAt(i);
    if (ch === cachedSpaces[1]) {
      nChars++;
    } else if (ch === "	") {
      nChars += tabSize;
    } else {
      break;
    }
    i++;
  }
  return Math.floor(nChars / tabSize);
}
function getEOL(options, text) {
  for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);
    if (ch === "\r") {
      if (i + 1 < text.length && text.charAt(i + 1) === "\n") {
        return "\r\n";
      }
      return "\r";
    } else if (ch === "\n") {
      return "\n";
    }
  }
  return options && options.eol || "\n";
}
function isEOL(text, offset) {
  return "\r\n".indexOf(text.charAt(offset)) !== -1;
}
var init_format = __esm({
  "node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/format.js"() {
    "use strict";
    init_scanner();
    init_string_intern();
  }
});

// node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/parser.js
function parse(text, errors = [], options = ParseOptions.DEFAULT) {
  let currentProperty = null;
  let currentParent = [];
  const previousParents = [];
  function onValue(value) {
    if (Array.isArray(currentParent)) {
      currentParent.push(value);
    } else if (currentProperty !== null) {
      currentParent[currentProperty] = value;
    }
  }
  const visitor = {
    onObjectBegin: () => {
      const object = {};
      onValue(object);
      previousParents.push(currentParent);
      currentParent = object;
      currentProperty = null;
    },
    onObjectProperty: (name) => {
      currentProperty = name;
    },
    onObjectEnd: () => {
      currentParent = previousParents.pop();
    },
    onArrayBegin: () => {
      const array = [];
      onValue(array);
      previousParents.push(currentParent);
      currentParent = array;
      currentProperty = null;
    },
    onArrayEnd: () => {
      currentParent = previousParents.pop();
    },
    onLiteralValue: onValue,
    onError: (error, offset, length) => {
      errors.push({ error, offset, length });
    }
  };
  visit(text, visitor, options);
  return currentParent[0];
}
function parseTree(text, errors = [], options = ParseOptions.DEFAULT) {
  let currentParent = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function ensurePropertyComplete(endOffset) {
    if (currentParent.type === "property") {
      currentParent.length = endOffset - currentParent.offset;
      currentParent = currentParent.parent;
    }
  }
  function onValue(valueNode) {
    currentParent.children.push(valueNode);
    return valueNode;
  }
  const visitor = {
    onObjectBegin: (offset) => {
      currentParent = onValue({ type: "object", offset, length: -1, parent: currentParent, children: [] });
    },
    onObjectProperty: (name, offset, length) => {
      currentParent = onValue({ type: "property", offset, length: -1, parent: currentParent, children: [] });
      currentParent.children.push({ type: "string", value: name, offset, length, parent: currentParent });
    },
    onObjectEnd: (offset, length) => {
      ensurePropertyComplete(offset + length);
      currentParent.length = offset + length - currentParent.offset;
      currentParent = currentParent.parent;
      ensurePropertyComplete(offset + length);
    },
    onArrayBegin: (offset, length) => {
      currentParent = onValue({ type: "array", offset, length: -1, parent: currentParent, children: [] });
    },
    onArrayEnd: (offset, length) => {
      currentParent.length = offset + length - currentParent.offset;
      currentParent = currentParent.parent;
      ensurePropertyComplete(offset + length);
    },
    onLiteralValue: (value, offset, length) => {
      onValue({ type: getNodeType(value), offset, length, parent: currentParent, value });
      ensurePropertyComplete(offset + length);
    },
    onSeparator: (sep, offset, length) => {
      if (currentParent.type === "property") {
        if (sep === ":") {
          currentParent.colonOffset = offset;
        } else if (sep === ",") {
          ensurePropertyComplete(offset);
        }
      }
    },
    onError: (error, offset, length) => {
      errors.push({ error, offset, length });
    }
  };
  visit(text, visitor, options);
  const result = currentParent.children[0];
  if (result) {
    delete result.parent;
  }
  return result;
}
function findNodeAtLocation(root, path) {
  if (!root) {
    return void 0;
  }
  let node = root;
  for (let segment of path) {
    if (typeof segment === "string") {
      if (node.type !== "object" || !Array.isArray(node.children)) {
        return void 0;
      }
      let found = false;
      for (const propertyNode of node.children) {
        if (Array.isArray(propertyNode.children) && propertyNode.children[0].value === segment && propertyNode.children.length === 2) {
          node = propertyNode.children[1];
          found = true;
          break;
        }
      }
      if (!found) {
        return void 0;
      }
    } else {
      const index = segment;
      if (node.type !== "array" || index < 0 || !Array.isArray(node.children) || index >= node.children.length) {
        return void 0;
      }
      node = node.children[index];
    }
  }
  return node;
}
function visit(text, visitor, options = ParseOptions.DEFAULT) {
  const _scanner = createScanner(text, false);
  const _jsonPath = [];
  let suppressedCallbacks = 0;
  function toNoArgVisit(visitFunction) {
    return visitFunction ? () => suppressedCallbacks === 0 && visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : () => true;
  }
  function toOneArgVisit(visitFunction) {
    return visitFunction ? (arg) => suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : () => true;
  }
  function toOneArgVisitWithPath(visitFunction) {
    return visitFunction ? (arg) => suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), () => _jsonPath.slice()) : () => true;
  }
  function toBeginVisit(visitFunction) {
    return visitFunction ? () => {
      if (suppressedCallbacks > 0) {
        suppressedCallbacks++;
      } else {
        let cbReturn = visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), () => _jsonPath.slice());
        if (cbReturn === false) {
          suppressedCallbacks = 1;
        }
      }
    } : () => true;
  }
  function toEndVisit(visitFunction) {
    return visitFunction ? () => {
      if (suppressedCallbacks > 0) {
        suppressedCallbacks--;
      }
      if (suppressedCallbacks === 0) {
        visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
      }
    } : () => true;
  }
  const onObjectBegin = toBeginVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisitWithPath(visitor.onObjectProperty), onObjectEnd = toEndVisit(visitor.onObjectEnd), onArrayBegin = toBeginVisit(visitor.onArrayBegin), onArrayEnd = toEndVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisitWithPath(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
  const disallowComments = options && options.disallowComments;
  const allowTrailingComma = options && options.allowTrailingComma;
  function scanNext() {
    while (true) {
      const token = _scanner.scan();
      switch (_scanner.getTokenError()) {
        case 4:
          handleError(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          handleError(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          handleError(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          if (!disallowComments) {
            handleError(
              11
              /* ParseErrorCode.UnexpectedEndOfComment */
            );
          }
          break;
        case 2:
          handleError(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          handleError(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (token) {
        case 12:
        case 13:
          if (disallowComments) {
            handleError(
              10
              /* ParseErrorCode.InvalidCommentToken */
            );
          } else {
            onComment();
          }
          break;
        case 16:
          handleError(
            1
            /* ParseErrorCode.InvalidSymbol */
          );
          break;
        case 15:
        case 14:
          break;
        default:
          return token;
      }
    }
  }
  function handleError(error, skipUntilAfter = [], skipUntil = []) {
    onError(error);
    if (skipUntilAfter.length + skipUntil.length > 0) {
      let token = _scanner.getToken();
      while (token !== 17) {
        if (skipUntilAfter.indexOf(token) !== -1) {
          scanNext();
          break;
        } else if (skipUntil.indexOf(token) !== -1) {
          break;
        }
        token = scanNext();
      }
    }
  }
  function parseString(isValue) {
    const value = _scanner.getTokenValue();
    if (isValue) {
      onLiteralValue(value);
    } else {
      onObjectProperty(value);
      _jsonPath.push(value);
    }
    scanNext();
    return true;
  }
  function parseLiteral() {
    switch (_scanner.getToken()) {
      case 11:
        const tokenValue = _scanner.getTokenValue();
        let value = Number(tokenValue);
        if (isNaN(value)) {
          handleError(
            2
            /* ParseErrorCode.InvalidNumberFormat */
          );
          value = 0;
        }
        onLiteralValue(value);
        break;
      case 7:
        onLiteralValue(null);
        break;
      case 8:
        onLiteralValue(true);
        break;
      case 9:
        onLiteralValue(false);
        break;
      default:
        return false;
    }
    scanNext();
    return true;
  }
  function parseProperty() {
    if (_scanner.getToken() !== 10) {
      handleError(3, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]);
      return false;
    }
    parseString(false);
    if (_scanner.getToken() === 6) {
      onSeparator(":");
      scanNext();
      if (!parseValue()) {
        handleError(4, [], [
          2,
          5
          /* SyntaxKind.CommaToken */
        ]);
      }
    } else {
      handleError(5, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]);
    }
    _jsonPath.pop();
    return true;
  }
  function parseObject() {
    onObjectBegin();
    scanNext();
    let needsComma = false;
    while (_scanner.getToken() !== 2 && _scanner.getToken() !== 17) {
      if (_scanner.getToken() === 5) {
        if (!needsComma) {
          handleError(4, [], []);
        }
        onSeparator(",");
        scanNext();
        if (_scanner.getToken() === 2 && allowTrailingComma) {
          break;
        }
      } else if (needsComma) {
        handleError(6, [], []);
      }
      if (!parseProperty()) {
        handleError(4, [], [
          2,
          5
          /* SyntaxKind.CommaToken */
        ]);
      }
      needsComma = true;
    }
    onObjectEnd();
    if (_scanner.getToken() !== 2) {
      handleError(7, [
        2
        /* SyntaxKind.CloseBraceToken */
      ], []);
    } else {
      scanNext();
    }
    return true;
  }
  function parseArray() {
    onArrayBegin();
    scanNext();
    let isFirstElement = true;
    let needsComma = false;
    while (_scanner.getToken() !== 4 && _scanner.getToken() !== 17) {
      if (_scanner.getToken() === 5) {
        if (!needsComma) {
          handleError(4, [], []);
        }
        onSeparator(",");
        scanNext();
        if (_scanner.getToken() === 4 && allowTrailingComma) {
          break;
        }
      } else if (needsComma) {
        handleError(6, [], []);
      }
      if (isFirstElement) {
        _jsonPath.push(0);
        isFirstElement = false;
      } else {
        _jsonPath[_jsonPath.length - 1]++;
      }
      if (!parseValue()) {
        handleError(4, [], [
          4,
          5
          /* SyntaxKind.CommaToken */
        ]);
      }
      needsComma = true;
    }
    onArrayEnd();
    if (!isFirstElement) {
      _jsonPath.pop();
    }
    if (_scanner.getToken() !== 4) {
      handleError(8, [
        4
        /* SyntaxKind.CloseBracketToken */
      ], []);
    } else {
      scanNext();
    }
    return true;
  }
  function parseValue() {
    switch (_scanner.getToken()) {
      case 3:
        return parseArray();
      case 1:
        return parseObject();
      case 10:
        return parseString(true);
      default:
        return parseLiteral();
    }
  }
  scanNext();
  if (_scanner.getToken() === 17) {
    if (options.allowEmptyContent) {
      return true;
    }
    handleError(4, [], []);
    return false;
  }
  if (!parseValue()) {
    handleError(4, [], []);
    return false;
  }
  if (_scanner.getToken() !== 17) {
    handleError(9, [], []);
  }
  return true;
}
function getNodeType(value) {
  switch (typeof value) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (!value) {
        return "null";
      } else if (Array.isArray(value)) {
        return "array";
      }
      return "object";
    }
    default:
      return "null";
  }
}
var ParseOptions;
var init_parser = __esm({
  "node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/parser.js"() {
    "use strict";
    init_scanner();
    (function(ParseOptions2) {
      ParseOptions2.DEFAULT = {
        allowTrailingComma: false
      };
    })(ParseOptions || (ParseOptions = {}));
  }
});

// node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/edit.js
function setProperty(text, originalPath, value, options) {
  const path = originalPath.slice();
  const errors = [];
  const root = parseTree(text, errors);
  let parent = void 0;
  let lastSegment = void 0;
  while (path.length > 0) {
    lastSegment = path.pop();
    parent = findNodeAtLocation(root, path);
    if (parent === void 0 && value !== void 0) {
      if (typeof lastSegment === "string") {
        value = { [lastSegment]: value };
      } else {
        value = [value];
      }
    } else {
      break;
    }
  }
  if (!parent) {
    if (value === void 0) {
      throw new Error("Can not delete in empty document");
    }
    return withFormatting(text, { offset: root ? root.offset : 0, length: root ? root.length : 0, content: JSON.stringify(value) }, options);
  } else if (parent.type === "object" && typeof lastSegment === "string" && Array.isArray(parent.children)) {
    const existing = findNodeAtLocation(parent, [lastSegment]);
    if (existing !== void 0) {
      if (value === void 0) {
        if (!existing.parent) {
          throw new Error("Malformed AST");
        }
        const propertyIndex = parent.children.indexOf(existing.parent);
        let removeBegin;
        let removeEnd = existing.parent.offset + existing.parent.length;
        if (propertyIndex > 0) {
          let previous = parent.children[propertyIndex - 1];
          removeBegin = previous.offset + previous.length;
        } else {
          removeBegin = parent.offset + 1;
          if (parent.children.length > 1) {
            let next = parent.children[1];
            removeEnd = next.offset;
          }
        }
        return withFormatting(text, { offset: removeBegin, length: removeEnd - removeBegin, content: "" }, options);
      } else {
        return withFormatting(text, { offset: existing.offset, length: existing.length, content: JSON.stringify(value) }, options);
      }
    } else {
      if (value === void 0) {
        return [];
      }
      const newProperty = `${JSON.stringify(lastSegment)}: ${JSON.stringify(value)}`;
      const index = options.getInsertionIndex ? options.getInsertionIndex(parent.children.map((p) => p.children[0].value)) : parent.children.length;
      let edit;
      if (index > 0) {
        let previous = parent.children[index - 1];
        edit = { offset: previous.offset + previous.length, length: 0, content: "," + newProperty };
      } else if (parent.children.length === 0) {
        edit = { offset: parent.offset + 1, length: 0, content: newProperty };
      } else {
        edit = { offset: parent.offset + 1, length: 0, content: newProperty + "," };
      }
      return withFormatting(text, edit, options);
    }
  } else if (parent.type === "array" && typeof lastSegment === "number" && Array.isArray(parent.children)) {
    const insertIndex = lastSegment;
    if (insertIndex === -1) {
      const newProperty = `${JSON.stringify(value)}`;
      let edit;
      if (parent.children.length === 0) {
        edit = { offset: parent.offset + 1, length: 0, content: newProperty };
      } else {
        const previous = parent.children[parent.children.length - 1];
        edit = { offset: previous.offset + previous.length, length: 0, content: "," + newProperty };
      }
      return withFormatting(text, edit, options);
    } else if (value === void 0 && parent.children.length >= 0) {
      const removalIndex = lastSegment;
      const toRemove = parent.children[removalIndex];
      let edit;
      if (parent.children.length === 1) {
        edit = { offset: parent.offset + 1, length: parent.length - 2, content: "" };
      } else if (parent.children.length - 1 === removalIndex) {
        let previous = parent.children[removalIndex - 1];
        let offset = previous.offset + previous.length;
        let parentEndOffset = parent.offset + parent.length;
        edit = { offset, length: parentEndOffset - 2 - offset, content: "" };
      } else {
        edit = { offset: toRemove.offset, length: parent.children[removalIndex + 1].offset - toRemove.offset, content: "" };
      }
      return withFormatting(text, edit, options);
    } else if (value !== void 0) {
      let edit;
      const newProperty = `${JSON.stringify(value)}`;
      if (!options.isArrayInsertion && parent.children.length > lastSegment) {
        const toModify = parent.children[lastSegment];
        edit = { offset: toModify.offset, length: toModify.length, content: newProperty };
      } else if (parent.children.length === 0 || lastSegment === 0) {
        edit = { offset: parent.offset + 1, length: 0, content: parent.children.length === 0 ? newProperty : newProperty + "," };
      } else {
        const index = lastSegment > parent.children.length ? parent.children.length : lastSegment;
        const previous = parent.children[index - 1];
        edit = { offset: previous.offset + previous.length, length: 0, content: "," + newProperty };
      }
      return withFormatting(text, edit, options);
    } else {
      throw new Error(`Can not ${value === void 0 ? "remove" : options.isArrayInsertion ? "insert" : "modify"} Array index ${insertIndex} as length is not sufficient`);
    }
  } else {
    throw new Error(`Can not add ${typeof lastSegment !== "number" ? "index" : "property"} to parent of type ${parent.type}`);
  }
}
function withFormatting(text, edit, options) {
  if (!options.formattingOptions) {
    return [edit];
  }
  let newText = applyEdit(text, edit);
  let begin = edit.offset;
  let end = edit.offset + edit.content.length;
  if (edit.length === 0 || edit.content.length === 0) {
    while (begin > 0 && !isEOL(newText, begin - 1)) {
      begin--;
    }
    while (end < newText.length && !isEOL(newText, end)) {
      end++;
    }
  }
  const edits = format(newText, { offset: begin, length: end - begin }, { ...options.formattingOptions, keepLines: false });
  for (let i = edits.length - 1; i >= 0; i--) {
    const edit2 = edits[i];
    newText = applyEdit(newText, edit2);
    begin = Math.min(begin, edit2.offset);
    end = Math.max(end, edit2.offset + edit2.length);
    end += edit2.content.length - edit2.length;
  }
  const editLength = text.length - (newText.length - end) - begin;
  return [{ offset: begin, length: editLength, content: newText.substring(begin, end) }];
}
function applyEdit(text, edit) {
  return text.substring(0, edit.offset) + edit.content + text.substring(edit.offset + edit.length);
}
var init_edit = __esm({
  "node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/edit.js"() {
    "use strict";
    init_format();
    init_parser();
  }
});

// node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js
function modify(text, path, value, options) {
  return setProperty(text, path, value, options);
}
function applyEdits(text, edits) {
  let sortedEdits = edits.slice(0).sort((a, b) => {
    const diff = a.offset - b.offset;
    if (diff === 0) {
      return a.length - b.length;
    }
    return diff;
  });
  let lastModifiedOffset = text.length;
  for (let i = sortedEdits.length - 1; i >= 0; i--) {
    let e = sortedEdits[i];
    if (e.offset + e.length <= lastModifiedOffset) {
      text = applyEdit(text, e);
    } else {
      throw new Error("Overlapping edit");
    }
    lastModifiedOffset = e.offset;
  }
  return text;
}
var ScanError, SyntaxKind, parse2, ParseErrorCode;
var init_main = __esm({
  "node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js"() {
    "use strict";
    init_format();
    init_edit();
    init_scanner();
    init_parser();
    (function(ScanError2) {
      ScanError2[ScanError2["None"] = 0] = "None";
      ScanError2[ScanError2["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
      ScanError2[ScanError2["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
      ScanError2[ScanError2["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
      ScanError2[ScanError2["InvalidUnicode"] = 4] = "InvalidUnicode";
      ScanError2[ScanError2["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
      ScanError2[ScanError2["InvalidCharacter"] = 6] = "InvalidCharacter";
    })(ScanError || (ScanError = {}));
    (function(SyntaxKind2) {
      SyntaxKind2[SyntaxKind2["OpenBraceToken"] = 1] = "OpenBraceToken";
      SyntaxKind2[SyntaxKind2["CloseBraceToken"] = 2] = "CloseBraceToken";
      SyntaxKind2[SyntaxKind2["OpenBracketToken"] = 3] = "OpenBracketToken";
      SyntaxKind2[SyntaxKind2["CloseBracketToken"] = 4] = "CloseBracketToken";
      SyntaxKind2[SyntaxKind2["CommaToken"] = 5] = "CommaToken";
      SyntaxKind2[SyntaxKind2["ColonToken"] = 6] = "ColonToken";
      SyntaxKind2[SyntaxKind2["NullKeyword"] = 7] = "NullKeyword";
      SyntaxKind2[SyntaxKind2["TrueKeyword"] = 8] = "TrueKeyword";
      SyntaxKind2[SyntaxKind2["FalseKeyword"] = 9] = "FalseKeyword";
      SyntaxKind2[SyntaxKind2["StringLiteral"] = 10] = "StringLiteral";
      SyntaxKind2[SyntaxKind2["NumericLiteral"] = 11] = "NumericLiteral";
      SyntaxKind2[SyntaxKind2["LineCommentTrivia"] = 12] = "LineCommentTrivia";
      SyntaxKind2[SyntaxKind2["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
      SyntaxKind2[SyntaxKind2["LineBreakTrivia"] = 14] = "LineBreakTrivia";
      SyntaxKind2[SyntaxKind2["Trivia"] = 15] = "Trivia";
      SyntaxKind2[SyntaxKind2["Unknown"] = 16] = "Unknown";
      SyntaxKind2[SyntaxKind2["EOF"] = 17] = "EOF";
    })(SyntaxKind || (SyntaxKind = {}));
    parse2 = parse;
    (function(ParseErrorCode2) {
      ParseErrorCode2[ParseErrorCode2["InvalidSymbol"] = 1] = "InvalidSymbol";
      ParseErrorCode2[ParseErrorCode2["InvalidNumberFormat"] = 2] = "InvalidNumberFormat";
      ParseErrorCode2[ParseErrorCode2["PropertyNameExpected"] = 3] = "PropertyNameExpected";
      ParseErrorCode2[ParseErrorCode2["ValueExpected"] = 4] = "ValueExpected";
      ParseErrorCode2[ParseErrorCode2["ColonExpected"] = 5] = "ColonExpected";
      ParseErrorCode2[ParseErrorCode2["CommaExpected"] = 6] = "CommaExpected";
      ParseErrorCode2[ParseErrorCode2["CloseBraceExpected"] = 7] = "CloseBraceExpected";
      ParseErrorCode2[ParseErrorCode2["CloseBracketExpected"] = 8] = "CloseBracketExpected";
      ParseErrorCode2[ParseErrorCode2["EndOfFileExpected"] = 9] = "EndOfFileExpected";
      ParseErrorCode2[ParseErrorCode2["InvalidCommentToken"] = 10] = "InvalidCommentToken";
      ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfComment"] = 11] = "UnexpectedEndOfComment";
      ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfString"] = 12] = "UnexpectedEndOfString";
      ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfNumber"] = 13] = "UnexpectedEndOfNumber";
      ParseErrorCode2[ParseErrorCode2["InvalidUnicode"] = 14] = "InvalidUnicode";
      ParseErrorCode2[ParseErrorCode2["InvalidEscapeCharacter"] = 15] = "InvalidEscapeCharacter";
      ParseErrorCode2[ParseErrorCode2["InvalidCharacter"] = 16] = "InvalidCharacter";
    })(ParseErrorCode || (ParseErrorCode = {}));
  }
});

// src/utils/json.ts
import { open, readFile, stat } from "fs/promises";
function parseJSONUncached(json, shouldLogError) {
  try {
    return { ok: true, value: JSON.parse(stripBOM(json)) };
  } catch (e) {
    if (shouldLogError) {
      logError(e);
    }
    return { ok: false };
  }
}
function safeParseJSONC(json) {
  if (!json) {
    return null;
  }
  try {
    return parse2(stripBOM(json));
  } catch (e) {
    logError(e);
    return null;
  }
}
function parseJSONLBun(data) {
  const parse3 = bunJSONLParse;
  const len = data.length;
  const result = parse3(data);
  if (!result.error || result.done || result.read >= len) {
    return result.values;
  }
  let values = result.values;
  let offset = result.read;
  while (offset < len) {
    const newlineIndex = typeof data === "string" ? data.indexOf("\n", offset) : data.indexOf(10, offset);
    if (newlineIndex === -1) break;
    offset = newlineIndex + 1;
    const next = parse3(data, offset);
    if (next.values.length > 0) {
      values = values.concat(next.values);
    }
    if (!next.error || next.done || next.read >= len) break;
    offset = next.read;
  }
  return values;
}
function parseJSONLBuffer(buf) {
  const bufLen = buf.length;
  let start = 0;
  if (buf[0] === 239 && buf[1] === 187 && buf[2] === 191) {
    start = 3;
  }
  const results = [];
  while (start < bufLen) {
    let end = buf.indexOf(10, start);
    if (end === -1) end = bufLen;
    const line = buf.toString("utf8", start, end).trim();
    start = end + 1;
    if (!line) continue;
    try {
      results.push(JSON.parse(line));
    } catch {
    }
  }
  return results;
}
function parseJSONLString(data) {
  const stripped = stripBOM(data);
  const len = stripped.length;
  let start = 0;
  const results = [];
  while (start < len) {
    let end = stripped.indexOf("\n", start);
    if (end === -1) end = len;
    const line = stripped.substring(start, end).trim();
    start = end + 1;
    if (!line) continue;
    try {
      results.push(JSON.parse(line));
    } catch {
    }
  }
  return results;
}
function parseJSONL(data) {
  if (bunJSONLParse) {
    return parseJSONLBun(data);
  }
  if (typeof data === "string") {
    return parseJSONLString(data);
  }
  return parseJSONLBuffer(data);
}
async function readJSONLFile(filePath) {
  var _stack = [];
  try {
    const { size } = await stat(filePath);
    if (size <= MAX_JSONL_READ_BYTES) {
      return parseJSONL(await readFile(filePath));
    }
    const fd = __using(_stack, await open(filePath, "r"), true);
    const buf = Buffer.allocUnsafe(MAX_JSONL_READ_BYTES);
    let totalRead = 0;
    const fileOffset = size - MAX_JSONL_READ_BYTES;
    while (totalRead < MAX_JSONL_READ_BYTES) {
      const { bytesRead } = await fd.read(
        buf,
        totalRead,
        MAX_JSONL_READ_BYTES - totalRead,
        fileOffset + totalRead
      );
      if (bytesRead === 0) break;
      totalRead += bytesRead;
    }
    const newlineIndex = buf.indexOf(10);
    if (newlineIndex !== -1 && newlineIndex < totalRead - 1) {
      return parseJSONL(buf.subarray(newlineIndex + 1, totalRead));
    }
    return parseJSONL(buf.subarray(0, totalRead));
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
function addItemToJSONCArray(content, newItem) {
  try {
    if (!content || content.trim() === "") {
      return jsonStringify([newItem], null, 4);
    }
    const cleanContent = stripBOM(content);
    const parsedContent = parse2(cleanContent);
    if (Array.isArray(parsedContent)) {
      const arrayLength = parsedContent.length;
      const isEmpty = arrayLength === 0;
      const insertPath = isEmpty ? [0] : [arrayLength];
      const edits = modify(cleanContent, insertPath, newItem, {
        formattingOptions: { insertSpaces: true, tabSize: 4 },
        isArrayInsertion: true
      });
      if (!edits || edits.length === 0) {
        const copy = [...parsedContent, newItem];
        return jsonStringify(copy, null, 4);
      }
      return applyEdits(cleanContent, edits);
    } else {
      return jsonStringify([newItem], null, 4);
    }
  } catch (e) {
    logError(e);
    return jsonStringify([newItem], null, 4);
  }
}
var PARSE_CACHE_MAX_KEY_BYTES, parseJSONCached, safeParseJSON, bunJSONLParse, MAX_JSONL_READ_BYTES;
var init_json = __esm({
  "src/utils/json.ts"() {
    init_main();
    init_jsonRead();
    init_log();
    init_memoize();
    init_slowOperations();
    PARSE_CACHE_MAX_KEY_BYTES = 8 * 1024;
    parseJSONCached = memoizeWithLRU(parseJSONUncached, (json) => json, 50);
    safeParseJSON = Object.assign(
      function safeParseJSON2(json, shouldLogError = true) {
        if (!json) return null;
        const result = json.length > PARSE_CACHE_MAX_KEY_BYTES ? parseJSONUncached(json, shouldLogError) : parseJSONCached(json, shouldLogError);
        return result.ok ? result.value : null;
      },
      { cache: parseJSONCached.cache }
    );
    bunJSONLParse = (() => {
      if (typeof Bun === "undefined") return false;
      const b = Bun;
      const jsonl = b.JSONL;
      if (!jsonl?.parseChunk) return false;
      return jsonl.parseChunk;
    })();
    MAX_JSONL_READ_BYTES = 100 * 1024 * 1024;
  }
});

// src/services/mcp/types.ts
var ConfigScopeSchema, TransportSchema, McpStdioServerConfigSchema, McpXaaConfigSchema, McpOAuthConfigSchema, McpSSEServerConfigSchema, McpSSEIDEServerConfigSchema, McpWebSocketIDEServerConfigSchema, McpHTTPServerConfigSchema, McpWebSocketServerConfigSchema, McpSdkServerConfigSchema, McpClaudeAIProxyServerConfigSchema, McpServerConfigSchema, McpJsonConfigSchema;
var init_types = __esm({
  "src/services/mcp/types.ts"() {
    init_v4();
    init_lazySchema();
    ConfigScopeSchema = lazySchema(
      () => external_exports.enum([
        "local",
        "user",
        "project",
        "dynamic",
        "enterprise",
        "claudeai",
        "managed"
      ])
    );
    TransportSchema = lazySchema(
      () => external_exports.enum(["stdio", "sse", "sse-ide", "http", "ws", "sdk"])
    );
    McpStdioServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("stdio").optional(),
        // Optional for backwards compatibility
        command: external_exports.string().min(1, "Command cannot be empty"),
        args: external_exports.array(external_exports.string()).default([]),
        env: external_exports.record(external_exports.string(), external_exports.string()).optional()
      })
    );
    McpXaaConfigSchema = lazySchema(() => external_exports.boolean());
    McpOAuthConfigSchema = lazySchema(
      () => external_exports.object({
        clientId: external_exports.string().optional(),
        callbackPort: external_exports.number().int().positive().optional(),
        authServerMetadataUrl: external_exports.string().url().startsWith("https://", {
          message: "authServerMetadataUrl must use https://"
        }).optional(),
        xaa: McpXaaConfigSchema().optional()
      })
    );
    McpSSEServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("sse"),
        url: external_exports.string(),
        headers: external_exports.record(external_exports.string(), external_exports.string()).optional(),
        headersHelper: external_exports.string().optional(),
        oauth: McpOAuthConfigSchema().optional()
      })
    );
    McpSSEIDEServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("sse-ide"),
        url: external_exports.string(),
        ideName: external_exports.string(),
        ideRunningInWindows: external_exports.boolean().optional()
      })
    );
    McpWebSocketIDEServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("ws-ide"),
        url: external_exports.string(),
        ideName: external_exports.string(),
        authToken: external_exports.string().optional(),
        ideRunningInWindows: external_exports.boolean().optional()
      })
    );
    McpHTTPServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("http"),
        url: external_exports.string(),
        headers: external_exports.record(external_exports.string(), external_exports.string()).optional(),
        headersHelper: external_exports.string().optional(),
        oauth: McpOAuthConfigSchema().optional()
      })
    );
    McpWebSocketServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("ws"),
        url: external_exports.string(),
        headers: external_exports.record(external_exports.string(), external_exports.string()).optional(),
        headersHelper: external_exports.string().optional()
      })
    );
    McpSdkServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("sdk"),
        name: external_exports.string()
      })
    );
    McpClaudeAIProxyServerConfigSchema = lazySchema(
      () => external_exports.object({
        type: external_exports.literal("claudeai-proxy"),
        url: external_exports.string(),
        id: external_exports.string()
      })
    );
    McpServerConfigSchema = lazySchema(
      () => external_exports.union([
        McpStdioServerConfigSchema(),
        McpSSEServerConfigSchema(),
        McpSSEIDEServerConfigSchema(),
        McpWebSocketIDEServerConfigSchema(),
        McpHTTPServerConfigSchema(),
        McpWebSocketServerConfigSchema(),
        McpSdkServerConfigSchema(),
        McpClaudeAIProxyServerConfigSchema()
      ])
    );
    McpJsonConfigSchema = lazySchema(
      () => external_exports.object({
        mcpServers: external_exports.record(external_exports.string(), McpServerConfigSchema())
      })
    );
  }
});

export {
  stripBOM,
  init_jsonRead,
  safeParseJSON,
  safeParseJSONC,
  parseJSONL,
  readJSONLFile,
  addItemToJSONCArray,
  init_json,
  ConfigScopeSchema,
  McpStdioServerConfigSchema,
  McpServerConfigSchema,
  McpJsonConfigSchema,
  init_types
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2pzb25SZWFkLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qc29uYy1wYXJzZXJAMy4zLjEvbm9kZV9tb2R1bGVzL2pzb25jLXBhcnNlci9saWIvZXNtL2ltcGwvc2Nhbm5lci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbmMtcGFyc2VyQDMuMy4xL25vZGVfbW9kdWxlcy9qc29uYy1wYXJzZXIvbGliL2VzbS9pbXBsL3N0cmluZy1pbnRlcm4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2pzb25jLXBhcnNlckAzLjMuMS9ub2RlX21vZHVsZXMvanNvbmMtcGFyc2VyL2xpYi9lc20vaW1wbC9mb3JtYXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2pzb25jLXBhcnNlckAzLjMuMS9ub2RlX21vZHVsZXMvanNvbmMtcGFyc2VyL2xpYi9lc20vaW1wbC9wYXJzZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2pzb25jLXBhcnNlckAzLjMuMS9ub2RlX21vZHVsZXMvanNvbmMtcGFyc2VyL2xpYi9lc20vaW1wbC9lZGl0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qc29uYy1wYXJzZXJAMy4zLjEvbm9kZV9tb2R1bGVzL2pzb25jLXBhcnNlci9saWIvZXNtL21haW4uanMiLCAiLi4vLi4vc3JjL3V0aWxzL2pzb24udHMiLCAiLi4vLi4vc3JjL3NlcnZpY2VzL21jcC90eXBlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBMZWFmIHN0cmlwQk9NIFx1MjAxNCBleHRyYWN0ZWQgZnJvbSBqc29uLnRzIHRvIGJyZWFrIHNldHRpbmdzIFx1MjE5MiBqc29uIFx1MjE5MiBsb2cgXHUyMTkyXG4gKiB0eXBlcy9sb2dzIFx1MjE5MiBcdTIwMjYgXHUyMTkyIHNldHRpbmdzLiBqc29uLnRzIGltcG9ydHMgdGhpcyBmb3IgaXRzIG1lbW9pemVkK2xvZ2dpbmdcbiAqIHNhZmVQYXJzZUpTT047IGxlYWYgY2FsbGVycyB0aGF0IGNhbid0IGltcG9ydCBqc29uLnRzIHVzZSBzdHJpcEJPTSArXG4gKiBqc29uUGFyc2UgaW5saW5lIChzeW5jQ2FjaGVTdGF0ZSBkb2VzIHRoaXMpLlxuICpcbiAqIFVURi04IEJPTSAoVStGRUZGKTogUG93ZXJTaGVsbCA1Lnggd3JpdGVzIFVURi04IHdpdGggQk9NIGJ5IGRlZmF1bHRcbiAqIChPdXQtRmlsZSwgU2V0LUNvbnRlbnQpLiBXZSBjYW4ndCBjb250cm9sIHVzZXIgZW52aXJvbm1lbnRzLCBzbyBzdHJpcCBvblxuICogcmVhZC4gV2l0aG91dCB0aGlzLCBKU09OLnBhcnNlIGZhaWxzIHdpdGggXCJVbmV4cGVjdGVkIHRva2VuXCIuXG4gKi9cblxuY29uc3QgVVRGOF9CT00gPSAnXFx1RkVGRidcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjb250ZW50LnN0YXJ0c1dpdGgoVVRGOF9CT00pID8gY29udGVudC5zbGljZSgxKSA6IGNvbnRlbnRcbn1cbiIsICIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIEpTT04gc2Nhbm5lciBvbiB0aGUgZ2l2ZW4gdGV4dC5cbiAqIElmIGlnbm9yZVRyaXZpYSBpcyBzZXQsIHdoaXRlc3BhY2VzIG9yIGNvbW1lbnRzIGFyZSBpZ25vcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2Nhbm5lcih0ZXh0LCBpZ25vcmVUcml2aWEgPSBmYWxzZSkge1xuICAgIGNvbnN0IGxlbiA9IHRleHQubGVuZ3RoO1xuICAgIGxldCBwb3MgPSAwLCB2YWx1ZSA9ICcnLCB0b2tlbk9mZnNldCA9IDAsIHRva2VuID0gMTYgLyogU3ludGF4S2luZC5Vbmtub3duICovLCBsaW5lTnVtYmVyID0gMCwgbGluZVN0YXJ0T2Zmc2V0ID0gMCwgdG9rZW5MaW5lU3RhcnRPZmZzZXQgPSAwLCBwcmV2VG9rZW5MaW5lU3RhcnRPZmZzZXQgPSAwLCBzY2FuRXJyb3IgPSAwIC8qIFNjYW5FcnJvci5Ob25lICovO1xuICAgIGZ1bmN0aW9uIHNjYW5IZXhEaWdpdHMoY291bnQsIGV4YWN0KSB7XG4gICAgICAgIGxldCBkaWdpdHMgPSAwO1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICB3aGlsZSAoZGlnaXRzIDwgY291bnQgfHwgIWV4YWN0KSB7XG4gICAgICAgICAgICBsZXQgY2ggPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICAgIGlmIChjaCA+PSA0OCAvKiBDaGFyYWN0ZXJDb2Rlcy5fMCAqLyAmJiBjaCA8PSA1NyAvKiBDaGFyYWN0ZXJDb2Rlcy5fOSAqLykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxNiArIGNoIC0gNDggLyogQ2hhcmFjdGVyQ29kZXMuXzAgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA+PSA2NSAvKiBDaGFyYWN0ZXJDb2Rlcy5BICovICYmIGNoIDw9IDcwIC8qIENoYXJhY3RlckNvZGVzLkYgKi8pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTYgKyBjaCAtIDY1IC8qIENoYXJhY3RlckNvZGVzLkEgKi8gKyAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID49IDk3IC8qIENoYXJhY3RlckNvZGVzLmEgKi8gJiYgY2ggPD0gMTAyIC8qIENoYXJhY3RlckNvZGVzLmYgKi8pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTYgKyBjaCAtIDk3IC8qIENoYXJhY3RlckNvZGVzLmEgKi8gKyAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICBkaWdpdHMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlnaXRzIDwgY291bnQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgICAgICBwb3MgPSBuZXdQb3NpdGlvbjtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgdG9rZW5PZmZzZXQgPSAwO1xuICAgICAgICB0b2tlbiA9IDE2IC8qIFN5bnRheEtpbmQuVW5rbm93biAqLztcbiAgICAgICAgc2NhbkVycm9yID0gMCAvKiBTY2FuRXJyb3IuTm9uZSAqLztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nhbk51bWJlcigpIHtcbiAgICAgICAgbGV0IHN0YXJ0ID0gcG9zO1xuICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHBvcykgPT09IDQ4IC8qIENoYXJhY3RlckNvZGVzLl8wICovKSB7XG4gICAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgd2hpbGUgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmIHRleHQuY2hhckNvZGVBdChwb3MpID09PSA0NiAvKiBDaGFyYWN0ZXJDb2Rlcy5kb3QgKi8pIHtcbiAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjYW5FcnJvciA9IDMgLyogU2NhbkVycm9yLlVuZXhwZWN0ZWRFbmRPZk51bWJlciAqLztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuZCA9IHBvcztcbiAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmICh0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gNjkgLyogQ2hhcmFjdGVyQ29kZXMuRSAqLyB8fCB0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gMTAxIC8qIENoYXJhY3RlckNvZGVzLmUgKi8pKSB7XG4gICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgIGlmIChwb3MgPCB0ZXh0Lmxlbmd0aCAmJiB0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gNDMgLyogQ2hhcmFjdGVyQ29kZXMucGx1cyAqLyB8fCB0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gNDUgLyogQ2hhcmFjdGVyQ29kZXMubWludXMgKi8pIHtcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3MgPCB0ZXh0Lmxlbmd0aCAmJiBpc0RpZ2l0KHRleHQuY2hhckNvZGVBdChwb3MpKSkge1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHdoaWxlIChwb3MgPCB0ZXh0Lmxlbmd0aCAmJiBpc0RpZ2l0KHRleHQuY2hhckNvZGVBdChwb3MpKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5kID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NhbkVycm9yID0gMyAvKiBTY2FuRXJyb3IuVW5leHBlY3RlZEVuZE9mTnVtYmVyICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NhblN0cmluZygpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnLCBzdGFydCA9IHBvcztcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChwb3MgPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBwb3MpO1xuICAgICAgICAgICAgICAgIHNjYW5FcnJvciA9IDIgLyogU2NhbkVycm9yLlVuZXhwZWN0ZWRFbmRPZlN0cmluZyAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgICAgICBpZiAoY2ggPT09IDM0IC8qIENoYXJhY3RlckNvZGVzLmRvdWJsZVF1b3RlICovKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBwb3MpO1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoID09PSA5MiAvKiBDaGFyYWN0ZXJDb2Rlcy5iYWNrc2xhc2ggKi8pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHBvcyk7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKHBvcyA+PSBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbkVycm9yID0gMiAvKiBTY2FuRXJyb3IuVW5leHBlY3RlZEVuZE9mU3RyaW5nICovO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2gyID0gdGV4dC5jaGFyQ29kZUF0KHBvcysrKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoMikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM0IC8qIENoYXJhY3RlckNvZGVzLmRvdWJsZVF1b3RlICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcXFwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkyIC8qIENoYXJhY3RlckNvZGVzLmJhY2tzbGFzaCAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXFxcXCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NyAvKiBDaGFyYWN0ZXJDb2Rlcy5zbGFzaCAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OCAvKiBDaGFyYWN0ZXJDb2Rlcy5iICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcXGInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAyIC8qIENoYXJhY3RlckNvZGVzLmYgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1xcZic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTAgLyogQ2hhcmFjdGVyQ29kZXMubiAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExNCAvKiBDaGFyYWN0ZXJDb2Rlcy5yICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE2IC8qIENoYXJhY3RlckNvZGVzLnQgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1xcdCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTcgLyogQ2hhcmFjdGVyQ29kZXMudSAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoMyA9IHNjYW5IZXhEaWdpdHMoNCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2gzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbkVycm9yID0gNCAvKiBTY2FuRXJyb3IuSW52YWxpZFVuaWNvZGUgKi87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYW5FcnJvciA9IDUgLyogU2NhbkVycm9yLkludmFsaWRFc2NhcGVDaGFyYWN0ZXIgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gcG9zO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoID49IDAgJiYgY2ggPD0gMHgxZikge1xuICAgICAgICAgICAgICAgIGlmIChpc0xpbmVCcmVhayhjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSAyIC8qIFNjYW5FcnJvci5VbmV4cGVjdGVkRW5kT2ZTdHJpbmcgKi87XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbkVycm9yID0gNiAvKiBTY2FuRXJyb3IuSW52YWxpZENoYXJhY3RlciAqLztcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyayBhcyBlcnJvciBidXQgY29udGludWUgd2l0aCBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FuTmV4dCgpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgc2NhbkVycm9yID0gMCAvKiBTY2FuRXJyb3IuTm9uZSAqLztcbiAgICAgICAgdG9rZW5PZmZzZXQgPSBwb3M7XG4gICAgICAgIGxpbmVTdGFydE9mZnNldCA9IGxpbmVOdW1iZXI7XG4gICAgICAgIHByZXZUb2tlbkxpbmVTdGFydE9mZnNldCA9IHRva2VuTGluZVN0YXJ0T2Zmc2V0O1xuICAgICAgICBpZiAocG9zID49IGxlbikge1xuICAgICAgICAgICAgLy8gYXQgdGhlIGVuZFxuICAgICAgICAgICAgdG9rZW5PZmZzZXQgPSBsZW47XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAxNyAvKiBTeW50YXhLaW5kLkVPRiAqLztcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29kZSA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICAvLyB0cml2aWE6IHdoaXRlc3BhY2VcbiAgICAgICAgaWYgKGlzV2hpdGVTcGFjZShjb2RlKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICAgICAgY29kZSA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICAgICAgfSB3aGlsZSAoaXNXaGl0ZVNwYWNlKGNvZGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE1IC8qIFN5bnRheEtpbmQuVHJpdmlhICovO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRyaXZpYTogbmV3bGluZXNcbiAgICAgICAgaWYgKGlzTGluZUJyZWFrKGNvZGUpKSB7XG4gICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgIHZhbHVlICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMTMgLyogQ2hhcmFjdGVyQ29kZXMuY2FycmlhZ2VSZXR1cm4gKi8gJiYgdGV4dC5jaGFyQ29kZUF0KHBvcykgPT09IDEwIC8qIENoYXJhY3RlckNvZGVzLmxpbmVGZWVkICovKSB7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gJ1xcbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lTnVtYmVyKys7XG4gICAgICAgICAgICB0b2tlbkxpbmVTdGFydE9mZnNldCA9IHBvcztcbiAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE0IC8qIFN5bnRheEtpbmQuTGluZUJyZWFrVHJpdmlhICovO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgLy8gdG9rZW5zOiBbXXt9OixcbiAgICAgICAgICAgIGNhc2UgMTIzIC8qIENoYXJhY3RlckNvZGVzLm9wZW5CcmFjZSAqLzpcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAxIC8qIFN5bnRheEtpbmQuT3BlbkJyYWNlVG9rZW4gKi87XG4gICAgICAgICAgICBjYXNlIDEyNSAvKiBDaGFyYWN0ZXJDb2Rlcy5jbG9zZUJyYWNlICovOlxuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDIgLyogU3ludGF4S2luZC5DbG9zZUJyYWNlVG9rZW4gKi87XG4gICAgICAgICAgICBjYXNlIDkxIC8qIENoYXJhY3RlckNvZGVzLm9wZW5CcmFja2V0ICovOlxuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDMgLyogU3ludGF4S2luZC5PcGVuQnJhY2tldFRva2VuICovO1xuICAgICAgICAgICAgY2FzZSA5MyAvKiBDaGFyYWN0ZXJDb2Rlcy5jbG9zZUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gNCAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2tldFRva2VuICovO1xuICAgICAgICAgICAgY2FzZSA1OCAvKiBDaGFyYWN0ZXJDb2Rlcy5jb2xvbiAqLzpcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4gPSA2IC8qIFN5bnRheEtpbmQuQ29sb25Ub2tlbiAqLztcbiAgICAgICAgICAgIGNhc2UgNDQgLyogQ2hhcmFjdGVyQ29kZXMuY29tbWEgKi86XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gNSAvKiBTeW50YXhLaW5kLkNvbW1hVG9rZW4gKi87XG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBjYXNlIDM0IC8qIENoYXJhY3RlckNvZGVzLmRvdWJsZVF1b3RlICovOlxuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc2NhblN0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDEwIC8qIFN5bnRheEtpbmQuU3RyaW5nTGl0ZXJhbCAqLztcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzXG4gICAgICAgICAgICBjYXNlIDQ3IC8qIENoYXJhY3RlckNvZGVzLnNsYXNoICovOlxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zIC0gMTtcbiAgICAgICAgICAgICAgICAvLyBTaW5nbGUtbGluZSBjb21tZW50XG4gICAgICAgICAgICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gNDcgLyogQ2hhcmFjdGVyQ29kZXMuc2xhc2ggKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwb3MgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xpbmVCcmVhayh0ZXh0LmNoYXJDb2RlQXQocG9zKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDEyIC8qIFN5bnRheEtpbmQuTGluZUNvbW1lbnRUcml2aWEgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE11bHRpLWxpbmUgY29tbWVudFxuICAgICAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDQyIC8qIENoYXJhY3RlckNvZGVzLmFzdGVyaXNrICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWZlTGVuZ3RoID0gbGVuIC0gMTsgLy8gRm9yIGxvb2thaGVhZC5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbW1lbnRDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBvcyA8IHNhZmVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ggPT09IDQyIC8qIENoYXJhY3RlckNvZGVzLmFzdGVyaXNrICovICYmIHRleHQuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gNDcgLyogQ2hhcmFjdGVyQ29kZXMuc2xhc2ggKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Q2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGluZUJyZWFrKGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gMTMgLyogQ2hhcmFjdGVyQ29kZXMuY2FycmlhZ2VSZXR1cm4gKi8gJiYgdGV4dC5jaGFyQ29kZUF0KHBvcykgPT09IDEwIC8qIENoYXJhY3RlckNvZGVzLmxpbmVGZWVkICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5MaW5lU3RhcnRPZmZzZXQgPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21tZW50Q2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYW5FcnJvciA9IDEgLyogU2NhbkVycm9yLlVuZXhwZWN0ZWRFbmRPZkNvbW1lbnQgKi87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gMTMgLyogU3ludGF4S2luZC5CbG9ja0NvbW1lbnRUcml2aWEgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGp1c3QgYSBzaW5nbGUgc2xhc2hcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE2IC8qIFN5bnRheEtpbmQuVW5rbm93biAqLztcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIGNhc2UgNDUgLyogQ2hhcmFjdGVyQ29kZXMubWludXMgKi86XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICBpZiAocG9zID09PSBsZW4gfHwgIWlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE2IC8qIFN5bnRheEtpbmQuVW5rbm93biAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3VuZCBhIG1pbnVzLCBmb2xsb3dlZCBieSBhIG51bWJlciBzb1xuICAgICAgICAgICAgLy8gd2UgZmFsbCB0aHJvdWdoIHRvIHByb2NlZWQgd2l0aCBzY2FubmluZ1xuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgY2FzZSA0OCAvKiBDaGFyYWN0ZXJDb2Rlcy5fMCAqLzpcbiAgICAgICAgICAgIGNhc2UgNDkgLyogQ2hhcmFjdGVyQ29kZXMuXzEgKi86XG4gICAgICAgICAgICBjYXNlIDUwIC8qIENoYXJhY3RlckNvZGVzLl8yICovOlxuICAgICAgICAgICAgY2FzZSA1MSAvKiBDaGFyYWN0ZXJDb2Rlcy5fMyAqLzpcbiAgICAgICAgICAgIGNhc2UgNTIgLyogQ2hhcmFjdGVyQ29kZXMuXzQgKi86XG4gICAgICAgICAgICBjYXNlIDUzIC8qIENoYXJhY3RlckNvZGVzLl81ICovOlxuICAgICAgICAgICAgY2FzZSA1NCAvKiBDaGFyYWN0ZXJDb2Rlcy5fNiAqLzpcbiAgICAgICAgICAgIGNhc2UgNTUgLyogQ2hhcmFjdGVyQ29kZXMuXzcgKi86XG4gICAgICAgICAgICBjYXNlIDU2IC8qIENoYXJhY3RlckNvZGVzLl84ICovOlxuICAgICAgICAgICAgY2FzZSA1NyAvKiBDaGFyYWN0ZXJDb2Rlcy5fOSAqLzpcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBzY2FuTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gMTEgLyogU3ludGF4S2luZC5OdW1lcmljTGl0ZXJhbCAqLztcbiAgICAgICAgICAgIC8vIGxpdGVyYWxzIGFuZCB1bmtub3duIHN5bWJvbHNcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gaXMgYSBsaXRlcmFsPyBSZWFkIHRoZSBmdWxsIHdvcmQuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvcyA8IGxlbiAmJiBpc1Vua25vd25Db250ZW50Q2hhcmFjdGVyKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0b2tlbk9mZnNldCAhPT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGV4dC5zdWJzdHJpbmcodG9rZW5PZmZzZXQsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGtleXdvcmRzOiB0cnVlLCBmYWxzZSwgbnVsbFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRva2VuID0gOCAvKiBTeW50YXhLaW5kLlRydWVLZXl3b3JkICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gdG9rZW4gPSA5IC8qIFN5bnRheEtpbmQuRmFsc2VLZXl3b3JkICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiB0b2tlbiA9IDcgLyogU3ludGF4S2luZC5OdWxsS2V5d29yZCAqLztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAxNiAvKiBTeW50YXhLaW5kLlVua25vd24gKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE2IC8qIFN5bnRheEtpbmQuVW5rbm93biAqLztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1Vua25vd25Db250ZW50Q2hhcmFjdGVyKGNvZGUpIHtcbiAgICAgICAgaWYgKGlzV2hpdGVTcGFjZShjb2RlKSB8fCBpc0xpbmVCcmVhayhjb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSAxMjUgLyogQ2hhcmFjdGVyQ29kZXMuY2xvc2VCcmFjZSAqLzpcbiAgICAgICAgICAgIGNhc2UgOTMgLyogQ2hhcmFjdGVyQ29kZXMuY2xvc2VCcmFja2V0ICovOlxuICAgICAgICAgICAgY2FzZSAxMjMgLyogQ2hhcmFjdGVyQ29kZXMub3BlbkJyYWNlICovOlxuICAgICAgICAgICAgY2FzZSA5MSAvKiBDaGFyYWN0ZXJDb2Rlcy5vcGVuQnJhY2tldCAqLzpcbiAgICAgICAgICAgIGNhc2UgMzQgLyogQ2hhcmFjdGVyQ29kZXMuZG91YmxlUXVvdGUgKi86XG4gICAgICAgICAgICBjYXNlIDU4IC8qIENoYXJhY3RlckNvZGVzLmNvbG9uICovOlxuICAgICAgICAgICAgY2FzZSA0NCAvKiBDaGFyYWN0ZXJDb2Rlcy5jb21tYSAqLzpcbiAgICAgICAgICAgIGNhc2UgNDcgLyogQ2hhcmFjdGVyQ29kZXMuc2xhc2ggKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FuTmV4dE5vblRyaXZpYSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcmVzdWx0ID0gc2Nhbk5leHQoKTtcbiAgICAgICAgfSB3aGlsZSAocmVzdWx0ID49IDEyIC8qIFN5bnRheEtpbmQuTGluZUNvbW1lbnRUcml2aWEgKi8gJiYgcmVzdWx0IDw9IDE1IC8qIFN5bnRheEtpbmQuVHJpdmlhICovKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UG9zaXRpb246IHNldFBvc2l0aW9uLFxuICAgICAgICBnZXRQb3NpdGlvbjogKCkgPT4gcG9zLFxuICAgICAgICBzY2FuOiBpZ25vcmVUcml2aWEgPyBzY2FuTmV4dE5vblRyaXZpYSA6IHNjYW5OZXh0LFxuICAgICAgICBnZXRUb2tlbjogKCkgPT4gdG9rZW4sXG4gICAgICAgIGdldFRva2VuVmFsdWU6ICgpID0+IHZhbHVlLFxuICAgICAgICBnZXRUb2tlbk9mZnNldDogKCkgPT4gdG9rZW5PZmZzZXQsXG4gICAgICAgIGdldFRva2VuTGVuZ3RoOiAoKSA9PiBwb3MgLSB0b2tlbk9mZnNldCxcbiAgICAgICAgZ2V0VG9rZW5TdGFydExpbmU6ICgpID0+IGxpbmVTdGFydE9mZnNldCxcbiAgICAgICAgZ2V0VG9rZW5TdGFydENoYXJhY3RlcjogKCkgPT4gdG9rZW5PZmZzZXQgLSBwcmV2VG9rZW5MaW5lU3RhcnRPZmZzZXQsXG4gICAgICAgIGdldFRva2VuRXJyb3I6ICgpID0+IHNjYW5FcnJvcixcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNXaGl0ZVNwYWNlKGNoKSB7XG4gICAgcmV0dXJuIGNoID09PSAzMiAvKiBDaGFyYWN0ZXJDb2Rlcy5zcGFjZSAqLyB8fCBjaCA9PT0gOSAvKiBDaGFyYWN0ZXJDb2Rlcy50YWIgKi87XG59XG5mdW5jdGlvbiBpc0xpbmVCcmVhayhjaCkge1xuICAgIHJldHVybiBjaCA9PT0gMTAgLyogQ2hhcmFjdGVyQ29kZXMubGluZUZlZWQgKi8gfHwgY2ggPT09IDEzIC8qIENoYXJhY3RlckNvZGVzLmNhcnJpYWdlUmV0dXJuICovO1xufVxuZnVuY3Rpb24gaXNEaWdpdChjaCkge1xuICAgIHJldHVybiBjaCA+PSA0OCAvKiBDaGFyYWN0ZXJDb2Rlcy5fMCAqLyAmJiBjaCA8PSA1NyAvKiBDaGFyYWN0ZXJDb2Rlcy5fOSAqLztcbn1cbnZhciBDaGFyYWN0ZXJDb2RlcztcbihmdW5jdGlvbiAoQ2hhcmFjdGVyQ29kZXMpIHtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImxpbmVGZWVkXCJdID0gMTBdID0gXCJsaW5lRmVlZFwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiY2FycmlhZ2VSZXR1cm5cIl0gPSAxM10gPSBcImNhcnJpYWdlUmV0dXJuXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJzcGFjZVwiXSA9IDMyXSA9IFwic3BhY2VcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIl8wXCJdID0gNDhdID0gXCJfMFwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiXzFcIl0gPSA0OV0gPSBcIl8xXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJfMlwiXSA9IDUwXSA9IFwiXzJcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIl8zXCJdID0gNTFdID0gXCJfM1wiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiXzRcIl0gPSA1Ml0gPSBcIl80XCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJfNVwiXSA9IDUzXSA9IFwiXzVcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIl82XCJdID0gNTRdID0gXCJfNlwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiXzdcIl0gPSA1NV0gPSBcIl83XCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJfOFwiXSA9IDU2XSA9IFwiXzhcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIl85XCJdID0gNTddID0gXCJfOVwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiYVwiXSA9IDk3XSA9IFwiYVwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiYlwiXSA9IDk4XSA9IFwiYlwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiY1wiXSA9IDk5XSA9IFwiY1wiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiZFwiXSA9IDEwMF0gPSBcImRcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImVcIl0gPSAxMDFdID0gXCJlXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJmXCJdID0gMTAyXSA9IFwiZlwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiZ1wiXSA9IDEwM10gPSBcImdcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImhcIl0gPSAxMDRdID0gXCJoXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJpXCJdID0gMTA1XSA9IFwiaVwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wialwiXSA9IDEwNl0gPSBcImpcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImtcIl0gPSAxMDddID0gXCJrXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJsXCJdID0gMTA4XSA9IFwibFwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wibVwiXSA9IDEwOV0gPSBcIm1cIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIm5cIl0gPSAxMTBdID0gXCJuXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJvXCJdID0gMTExXSA9IFwib1wiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wicFwiXSA9IDExMl0gPSBcInBcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcInFcIl0gPSAxMTNdID0gXCJxXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJyXCJdID0gMTE0XSA9IFwiclwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wic1wiXSA9IDExNV0gPSBcInNcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcInRcIl0gPSAxMTZdID0gXCJ0XCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJ1XCJdID0gMTE3XSA9IFwidVwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1widlwiXSA9IDExOF0gPSBcInZcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIndcIl0gPSAxMTldID0gXCJ3XCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJ4XCJdID0gMTIwXSA9IFwieFwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wieVwiXSA9IDEyMV0gPSBcInlcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcInpcIl0gPSAxMjJdID0gXCJ6XCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJBXCJdID0gNjVdID0gXCJBXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJCXCJdID0gNjZdID0gXCJCXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJDXCJdID0gNjddID0gXCJDXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJEXCJdID0gNjhdID0gXCJEXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJFXCJdID0gNjldID0gXCJFXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJGXCJdID0gNzBdID0gXCJGXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJHXCJdID0gNzFdID0gXCJHXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJIXCJdID0gNzJdID0gXCJIXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJJXCJdID0gNzNdID0gXCJJXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJKXCJdID0gNzRdID0gXCJKXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJLXCJdID0gNzVdID0gXCJLXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJMXCJdID0gNzZdID0gXCJMXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJNXCJdID0gNzddID0gXCJNXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJOXCJdID0gNzhdID0gXCJOXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJPXCJdID0gNzldID0gXCJPXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJQXCJdID0gODBdID0gXCJQXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJRXCJdID0gODFdID0gXCJRXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJSXCJdID0gODJdID0gXCJSXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJTXCJdID0gODNdID0gXCJTXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJUXCJdID0gODRdID0gXCJUXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJVXCJdID0gODVdID0gXCJVXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJWXCJdID0gODZdID0gXCJWXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJXXCJdID0gODddID0gXCJXXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJYXCJdID0gODhdID0gXCJYXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJZXCJdID0gODldID0gXCJZXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJaXCJdID0gOTBdID0gXCJaXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJhc3Rlcmlza1wiXSA9IDQyXSA9IFwiYXN0ZXJpc2tcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImJhY2tzbGFzaFwiXSA9IDkyXSA9IFwiYmFja3NsYXNoXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJjbG9zZUJyYWNlXCJdID0gMTI1XSA9IFwiY2xvc2VCcmFjZVwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiY2xvc2VCcmFja2V0XCJdID0gOTNdID0gXCJjbG9zZUJyYWNrZXRcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImNvbG9uXCJdID0gNThdID0gXCJjb2xvblwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiY29tbWFcIl0gPSA0NF0gPSBcImNvbW1hXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJkb3RcIl0gPSA0Nl0gPSBcImRvdFwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiZG91YmxlUXVvdGVcIl0gPSAzNF0gPSBcImRvdWJsZVF1b3RlXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJtaW51c1wiXSA9IDQ1XSA9IFwibWludXNcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIm9wZW5CcmFjZVwiXSA9IDEyM10gPSBcIm9wZW5CcmFjZVwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wib3BlbkJyYWNrZXRcIl0gPSA5MV0gPSBcIm9wZW5CcmFja2V0XCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJwbHVzXCJdID0gNDNdID0gXCJwbHVzXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJzbGFzaFwiXSA9IDQ3XSA9IFwic2xhc2hcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcImZvcm1GZWVkXCJdID0gMTJdID0gXCJmb3JtRmVlZFwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1widGFiXCJdID0gOV0gPSBcInRhYlwiO1xufSkoQ2hhcmFjdGVyQ29kZXMgfHwgKENoYXJhY3RlckNvZGVzID0ge30pKTtcbiIsICJleHBvcnQgY29uc3QgY2FjaGVkU3BhY2VzID0gbmV3IEFycmF5KDIwKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gJyAnLnJlcGVhdChpbmRleCk7XG59KTtcbmNvbnN0IG1heENhY2hlZFZhbHVlcyA9IDIwMDtcbmV4cG9ydCBjb25zdCBjYWNoZWRCcmVha0xpbmVzV2l0aFNwYWNlcyA9IHtcbiAgICAnICc6IHtcbiAgICAgICAgJ1xcbic6IG5ldyBBcnJheShtYXhDYWNoZWRWYWx1ZXMpLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICdcXG4nICsgJyAnLnJlcGVhdChpbmRleCk7XG4gICAgICAgIH0pLFxuICAgICAgICAnXFxyJzogbmV3IEFycmF5KG1heENhY2hlZFZhbHVlcykuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJ1xccicgKyAnICcucmVwZWF0KGluZGV4KTtcbiAgICAgICAgfSksXG4gICAgICAgICdcXHJcXG4nOiBuZXcgQXJyYXkobWF4Q2FjaGVkVmFsdWVzKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAnXFxyXFxuJyArICcgJy5yZXBlYXQoaW5kZXgpO1xuICAgICAgICB9KSxcbiAgICB9LFxuICAgICdcXHQnOiB7XG4gICAgICAgICdcXG4nOiBuZXcgQXJyYXkobWF4Q2FjaGVkVmFsdWVzKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAnXFxuJyArICdcXHQnLnJlcGVhdChpbmRleCk7XG4gICAgICAgIH0pLFxuICAgICAgICAnXFxyJzogbmV3IEFycmF5KG1heENhY2hlZFZhbHVlcykuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJ1xccicgKyAnXFx0Jy5yZXBlYXQoaW5kZXgpO1xuICAgICAgICB9KSxcbiAgICAgICAgJ1xcclxcbic6IG5ldyBBcnJheShtYXhDYWNoZWRWYWx1ZXMpLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICdcXHJcXG4nICsgJ1xcdCcucmVwZWF0KGluZGV4KTtcbiAgICAgICAgfSksXG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRFb2xzID0gWydcXG4nLCAnXFxyJywgJ1xcclxcbiddO1xuIiwgIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgY3JlYXRlU2Nhbm5lciB9IGZyb20gJy4vc2Nhbm5lcic7XG5pbXBvcnQgeyBjYWNoZWRTcGFjZXMsIGNhY2hlZEJyZWFrTGluZXNXaXRoU3BhY2VzLCBzdXBwb3J0ZWRFb2xzIH0gZnJvbSAnLi9zdHJpbmctaW50ZXJuJztcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZG9jdW1lbnRUZXh0LCByYW5nZSwgb3B0aW9ucykge1xuICAgIGxldCBpbml0aWFsSW5kZW50TGV2ZWw7XG4gICAgbGV0IGZvcm1hdFRleHQ7XG4gICAgbGV0IGZvcm1hdFRleHRTdGFydDtcbiAgICBsZXQgcmFuZ2VTdGFydDtcbiAgICBsZXQgcmFuZ2VFbmQ7XG4gICAgaWYgKHJhbmdlKSB7XG4gICAgICAgIHJhbmdlU3RhcnQgPSByYW5nZS5vZmZzZXQ7XG4gICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIHJhbmdlLmxlbmd0aDtcbiAgICAgICAgZm9ybWF0VGV4dFN0YXJ0ID0gcmFuZ2VTdGFydDtcbiAgICAgICAgd2hpbGUgKGZvcm1hdFRleHRTdGFydCA+IDAgJiYgIWlzRU9MKGRvY3VtZW50VGV4dCwgZm9ybWF0VGV4dFN0YXJ0IC0gMSkpIHtcbiAgICAgICAgICAgIGZvcm1hdFRleHRTdGFydC0tO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmRPZmZzZXQgPSByYW5nZUVuZDtcbiAgICAgICAgd2hpbGUgKGVuZE9mZnNldCA8IGRvY3VtZW50VGV4dC5sZW5ndGggJiYgIWlzRU9MKGRvY3VtZW50VGV4dCwgZW5kT2Zmc2V0KSkge1xuICAgICAgICAgICAgZW5kT2Zmc2V0Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0VGV4dCA9IGRvY3VtZW50VGV4dC5zdWJzdHJpbmcoZm9ybWF0VGV4dFN0YXJ0LCBlbmRPZmZzZXQpO1xuICAgICAgICBpbml0aWFsSW5kZW50TGV2ZWwgPSBjb21wdXRlSW5kZW50TGV2ZWwoZm9ybWF0VGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3JtYXRUZXh0ID0gZG9jdW1lbnRUZXh0O1xuICAgICAgICBpbml0aWFsSW5kZW50TGV2ZWwgPSAwO1xuICAgICAgICBmb3JtYXRUZXh0U3RhcnQgPSAwO1xuICAgICAgICByYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgcmFuZ2VFbmQgPSBkb2N1bWVudFRleHQubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBlb2wgPSBnZXRFT0wob3B0aW9ucywgZG9jdW1lbnRUZXh0KTtcbiAgICBjb25zdCBlb2xGYXN0UGF0aFN1cHBvcnRlZCA9IHN1cHBvcnRlZEVvbHMuaW5jbHVkZXMoZW9sKTtcbiAgICBsZXQgbnVtYmVyTGluZUJyZWFrcyA9IDA7XG4gICAgbGV0IGluZGVudExldmVsID0gMDtcbiAgICBsZXQgaW5kZW50VmFsdWU7XG4gICAgaWYgKG9wdGlvbnMuaW5zZXJ0U3BhY2VzKSB7XG4gICAgICAgIGluZGVudFZhbHVlID0gY2FjaGVkU3BhY2VzW29wdGlvbnMudGFiU2l6ZSB8fCA0XSA/PyByZXBlYXQoY2FjaGVkU3BhY2VzWzFdLCBvcHRpb25zLnRhYlNpemUgfHwgNCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbmRlbnRWYWx1ZSA9ICdcXHQnO1xuICAgIH1cbiAgICBjb25zdCBpbmRlbnRUeXBlID0gaW5kZW50VmFsdWUgPT09ICdcXHQnID8gJ1xcdCcgOiAnICc7XG4gICAgbGV0IHNjYW5uZXIgPSBjcmVhdGVTY2FubmVyKGZvcm1hdFRleHQsIGZhbHNlKTtcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBuZXdMaW5lc0FuZEluZGVudCgpIHtcbiAgICAgICAgaWYgKG51bWJlckxpbmVCcmVha3MgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwZWF0KGVvbCwgbnVtYmVyTGluZUJyZWFrcykgKyByZXBlYXQoaW5kZW50VmFsdWUsIGluaXRpYWxJbmRlbnRMZXZlbCArIGluZGVudExldmVsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbW91bnRPZlNwYWNlcyA9IGluZGVudFZhbHVlLmxlbmd0aCAqIChpbml0aWFsSW5kZW50TGV2ZWwgKyBpbmRlbnRMZXZlbCk7XG4gICAgICAgIGlmICghZW9sRmFzdFBhdGhTdXBwb3J0ZWQgfHwgYW1vdW50T2ZTcGFjZXMgPiBjYWNoZWRCcmVha0xpbmVzV2l0aFNwYWNlc1tpbmRlbnRUeXBlXVtlb2xdLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGVvbCArIHJlcGVhdChpbmRlbnRWYWx1ZSwgaW5pdGlhbEluZGVudExldmVsICsgaW5kZW50TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbW91bnRPZlNwYWNlcyA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZW9sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZWRCcmVha0xpbmVzV2l0aFNwYWNlc1tpbmRlbnRUeXBlXVtlb2xdW2Ftb3VudE9mU3BhY2VzXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nhbk5leHQoKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHNjYW5uZXIuc2NhbigpO1xuICAgICAgICBudW1iZXJMaW5lQnJlYWtzID0gMDtcbiAgICAgICAgd2hpbGUgKHRva2VuID09PSAxNSAvKiBTeW50YXhLaW5kLlRyaXZpYSAqLyB8fCB0b2tlbiA9PT0gMTQgLyogU3ludGF4S2luZC5MaW5lQnJlYWtUcml2aWEgKi8pIHtcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gMTQgLyogU3ludGF4S2luZC5MaW5lQnJlYWtUcml2aWEgKi8gJiYgb3B0aW9ucy5rZWVwTGluZXMpIHtcbiAgICAgICAgICAgICAgICBudW1iZXJMaW5lQnJlYWtzICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbiA9PT0gMTQgLyogU3ludGF4S2luZC5MaW5lQnJlYWtUcml2aWEgKi8pIHtcbiAgICAgICAgICAgICAgICBudW1iZXJMaW5lQnJlYWtzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2VuID0gc2Nhbm5lci5zY2FuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaGFzRXJyb3IgPSB0b2tlbiA9PT0gMTYgLyogU3ludGF4S2luZC5Vbmtub3duICovIHx8IHNjYW5uZXIuZ2V0VG9rZW5FcnJvcigpICE9PSAwIC8qIFNjYW5FcnJvci5Ob25lICovO1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICAgIGNvbnN0IGVkaXRPcGVyYXRpb25zID0gW107XG4gICAgZnVuY3Rpb24gYWRkRWRpdCh0ZXh0LCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0KSB7XG4gICAgICAgIGlmICghaGFzRXJyb3IgJiYgKCFyYW5nZSB8fCAoc3RhcnRPZmZzZXQgPCByYW5nZUVuZCAmJiBlbmRPZmZzZXQgPiByYW5nZVN0YXJ0KSkgJiYgZG9jdW1lbnRUZXh0LnN1YnN0cmluZyhzdGFydE9mZnNldCwgZW5kT2Zmc2V0KSAhPT0gdGV4dCkge1xuICAgICAgICAgICAgZWRpdE9wZXJhdGlvbnMucHVzaCh7IG9mZnNldDogc3RhcnRPZmZzZXQsIGxlbmd0aDogZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIGNvbnRlbnQ6IHRleHQgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGZpcnN0VG9rZW4gPSBzY2FuTmV4dCgpO1xuICAgIGlmIChvcHRpb25zLmtlZXBMaW5lcyAmJiBudW1iZXJMaW5lQnJlYWtzID4gMCkge1xuICAgICAgICBhZGRFZGl0KHJlcGVhdChlb2wsIG51bWJlckxpbmVCcmVha3MpLCAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0VG9rZW4gIT09IDE3IC8qIFN5bnRheEtpbmQuRU9GICovKSB7XG4gICAgICAgIGxldCBmaXJzdFRva2VuU3RhcnQgPSBzY2FubmVyLmdldFRva2VuT2Zmc2V0KCkgKyBmb3JtYXRUZXh0U3RhcnQ7XG4gICAgICAgIGxldCBpbml0aWFsSW5kZW50ID0gKGluZGVudFZhbHVlLmxlbmd0aCAqIGluaXRpYWxJbmRlbnRMZXZlbCA8IDIwKSAmJiBvcHRpb25zLmluc2VydFNwYWNlc1xuICAgICAgICAgICAgPyBjYWNoZWRTcGFjZXNbaW5kZW50VmFsdWUubGVuZ3RoICogaW5pdGlhbEluZGVudExldmVsXVxuICAgICAgICAgICAgOiByZXBlYXQoaW5kZW50VmFsdWUsIGluaXRpYWxJbmRlbnRMZXZlbCk7XG4gICAgICAgIGFkZEVkaXQoaW5pdGlhbEluZGVudCwgZm9ybWF0VGV4dFN0YXJ0LCBmaXJzdFRva2VuU3RhcnQpO1xuICAgIH1cbiAgICB3aGlsZSAoZmlyc3RUb2tlbiAhPT0gMTcgLyogU3ludGF4S2luZC5FT0YgKi8pIHtcbiAgICAgICAgbGV0IGZpcnN0VG9rZW5FbmQgPSBzY2FubmVyLmdldFRva2VuT2Zmc2V0KCkgKyBzY2FubmVyLmdldFRva2VuTGVuZ3RoKCkgKyBmb3JtYXRUZXh0U3RhcnQ7XG4gICAgICAgIGxldCBzZWNvbmRUb2tlbiA9IHNjYW5OZXh0KCk7XG4gICAgICAgIGxldCByZXBsYWNlQ29udGVudCA9ICcnO1xuICAgICAgICBsZXQgbmVlZHNMaW5lQnJlYWsgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKG51bWJlckxpbmVCcmVha3MgPT09IDAgJiYgKHNlY29uZFRva2VuID09PSAxMiAvKiBTeW50YXhLaW5kLkxpbmVDb21tZW50VHJpdmlhICovIHx8IHNlY29uZFRva2VuID09PSAxMyAvKiBTeW50YXhLaW5kLkJsb2NrQ29tbWVudFRyaXZpYSAqLykpIHtcbiAgICAgICAgICAgIGxldCBjb21tZW50VG9rZW5TdGFydCA9IHNjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSArIGZvcm1hdFRleHRTdGFydDtcbiAgICAgICAgICAgIGFkZEVkaXQoY2FjaGVkU3BhY2VzWzFdLCBmaXJzdFRva2VuRW5kLCBjb21tZW50VG9rZW5TdGFydCk7XG4gICAgICAgICAgICBmaXJzdFRva2VuRW5kID0gc2Nhbm5lci5nZXRUb2tlbk9mZnNldCgpICsgc2Nhbm5lci5nZXRUb2tlbkxlbmd0aCgpICsgZm9ybWF0VGV4dFN0YXJ0O1xuICAgICAgICAgICAgbmVlZHNMaW5lQnJlYWsgPSBzZWNvbmRUb2tlbiA9PT0gMTIgLyogU3ludGF4S2luZC5MaW5lQ29tbWVudFRyaXZpYSAqLztcbiAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmVlZHNMaW5lQnJlYWsgPyBuZXdMaW5lc0FuZEluZGVudCgpIDogJyc7XG4gICAgICAgICAgICBzZWNvbmRUb2tlbiA9IHNjYW5OZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlY29uZFRva2VuID09PSAyIC8qIFN5bnRheEtpbmQuQ2xvc2VCcmFjZVRva2VuICovKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RUb2tlbiAhPT0gMSAvKiBTeW50YXhLaW5kLk9wZW5CcmFjZVRva2VuICovKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50TGV2ZWwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtlZXBMaW5lcyAmJiBudW1iZXJMaW5lQnJlYWtzID4gMCB8fCAhb3B0aW9ucy5rZWVwTGluZXMgJiYgZmlyc3RUb2tlbiAhPT0gMSAvKiBTeW50YXhLaW5kLk9wZW5CcmFjZVRva2VuICovKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSBuZXdMaW5lc0FuZEluZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5rZWVwTGluZXMpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IGNhY2hlZFNwYWNlc1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWNvbmRUb2tlbiA9PT0gNCAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2tldFRva2VuICovKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RUb2tlbiAhPT0gMyAvKiBTeW50YXhLaW5kLk9wZW5CcmFja2V0VG9rZW4gKi8pIHtcbiAgICAgICAgICAgICAgICBpbmRlbnRMZXZlbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2VlcExpbmVzICYmIG51bWJlckxpbmVCcmVha3MgPiAwIHx8ICFvcHRpb25zLmtlZXBMaW5lcyAmJiBmaXJzdFRva2VuICE9PSAzIC8qIFN5bnRheEtpbmQuT3BlbkJyYWNrZXRUb2tlbiAqLykge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZXNBbmRJbmRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMua2VlcExpbmVzKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSBjYWNoZWRTcGFjZXNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZpcnN0VG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDMgLyogU3ludGF4S2luZC5PcGVuQnJhY2tldFRva2VuICovOlxuICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBTeW50YXhLaW5kLk9wZW5CcmFjZVRva2VuICovOlxuICAgICAgICAgICAgICAgICAgICBpbmRlbnRMZXZlbCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwTGluZXMgJiYgbnVtYmVyTGluZUJyZWFrcyA+IDAgfHwgIW9wdGlvbnMua2VlcExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IG5ld0xpbmVzQW5kSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IGNhY2hlZFNwYWNlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogU3ludGF4S2luZC5Db21tYVRva2VuICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwTGluZXMgJiYgbnVtYmVyTGluZUJyZWFrcyA+IDAgfHwgIW9wdGlvbnMua2VlcExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IG5ld0xpbmVzQW5kSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IGNhY2hlZFNwYWNlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEyIC8qIFN5bnRheEtpbmQuTGluZUNvbW1lbnRUcml2aWEgKi86XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZXNBbmRJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMyAvKiBTeW50YXhLaW5kLkJsb2NrQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlckxpbmVCcmVha3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IG5ld0xpbmVzQW5kSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIW5lZWRzTGluZUJyZWFrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IGNhY2hlZFNwYWNlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDYgLyogU3ludGF4S2luZC5Db2xvblRva2VuICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwTGluZXMgJiYgbnVtYmVyTGluZUJyZWFrcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZXNBbmRJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghbmVlZHNMaW5lQnJlYWspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gY2FjaGVkU3BhY2VzWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTAgLyogU3ludGF4S2luZC5TdHJpbmdMaXRlcmFsICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwTGluZXMgJiYgbnVtYmVyTGluZUJyZWFrcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZXNBbmRJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWNvbmRUb2tlbiA9PT0gNiAvKiBTeW50YXhLaW5kLkNvbG9uVG9rZW4gKi8gJiYgIW5lZWRzTGluZUJyZWFrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNyAvKiBTeW50YXhLaW5kLk51bGxLZXl3b3JkICovOlxuICAgICAgICAgICAgICAgIGNhc2UgOCAvKiBTeW50YXhLaW5kLlRydWVLZXl3b3JkICovOlxuICAgICAgICAgICAgICAgIGNhc2UgOSAvKiBTeW50YXhLaW5kLkZhbHNlS2V5d29yZCAqLzpcbiAgICAgICAgICAgICAgICBjYXNlIDExIC8qIFN5bnRheEtpbmQuTnVtZXJpY0xpdGVyYWwgKi86XG4gICAgICAgICAgICAgICAgY2FzZSAyIC8qIFN5bnRheEtpbmQuQ2xvc2VCcmFjZVRva2VuICovOlxuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2tldFRva2VuICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwTGluZXMgJiYgbnVtYmVyTGluZUJyZWFrcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZXNBbmRJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2Vjb25kVG9rZW4gPT09IDEyIC8qIFN5bnRheEtpbmQuTGluZUNvbW1lbnRUcml2aWEgKi8gfHwgc2Vjb25kVG9rZW4gPT09IDEzIC8qIFN5bnRheEtpbmQuQmxvY2tDb21tZW50VHJpdmlhICovKSAmJiAhbmVlZHNMaW5lQnJlYWspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IGNhY2hlZFNwYWNlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlY29uZFRva2VuICE9PSA1IC8qIFN5bnRheEtpbmQuQ29tbWFUb2tlbiAqLyAmJiBzZWNvbmRUb2tlbiAhPT0gMTcgLyogU3ludGF4S2luZC5FT0YgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxNiAvKiBTeW50YXhLaW5kLlVua25vd24gKi86XG4gICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVtYmVyTGluZUJyZWFrcyA+IDAgJiYgKHNlY29uZFRva2VuID09PSAxMiAvKiBTeW50YXhLaW5kLkxpbmVDb21tZW50VHJpdmlhICovIHx8IHNlY29uZFRva2VuID09PSAxMyAvKiBTeW50YXhLaW5kLkJsb2NrQ29tbWVudFRyaXZpYSAqLykpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IG5ld0xpbmVzQW5kSW5kZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlY29uZFRva2VuID09PSAxNyAvKiBTeW50YXhLaW5kLkVPRiAqLykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2VlcExpbmVzICYmIG51bWJlckxpbmVCcmVha3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSBuZXdMaW5lc0FuZEluZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSBvcHRpb25zLmluc2VydEZpbmFsTmV3bGluZSA/IGVvbCA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlY29uZFRva2VuU3RhcnQgPSBzY2FubmVyLmdldFRva2VuT2Zmc2V0KCkgKyBmb3JtYXRUZXh0U3RhcnQ7XG4gICAgICAgIGFkZEVkaXQocmVwbGFjZUNvbnRlbnQsIGZpcnN0VG9rZW5FbmQsIHNlY29uZFRva2VuU3RhcnQpO1xuICAgICAgICBmaXJzdFRva2VuID0gc2Vjb25kVG9rZW47XG4gICAgfVxuICAgIHJldHVybiBlZGl0T3BlcmF0aW9ucztcbn1cbmZ1bmN0aW9uIHJlcGVhdChzLCBjb3VudCkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlSW5kZW50TGV2ZWwoY29udGVudCwgb3B0aW9ucykge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbkNoYXJzID0gMDtcbiAgICBjb25zdCB0YWJTaXplID0gb3B0aW9ucy50YWJTaXplIHx8IDQ7XG4gICAgd2hpbGUgKGkgPCBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBsZXQgY2ggPSBjb250ZW50LmNoYXJBdChpKTtcbiAgICAgICAgaWYgKGNoID09PSBjYWNoZWRTcGFjZXNbMV0pIHtcbiAgICAgICAgICAgIG5DaGFycysrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXFx0Jykge1xuICAgICAgICAgICAgbkNoYXJzICs9IHRhYlNpemU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKG5DaGFycyAvIHRhYlNpemUpO1xufVxuZnVuY3Rpb24gZ2V0RU9MKG9wdGlvbnMsIHRleHQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgaWYgKGNoID09PSAnXFxyJykge1xuICAgICAgICAgICAgaWYgKGkgKyAxIDwgdGV4dC5sZW5ndGggJiYgdGV4dC5jaGFyQXQoaSArIDEpID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnXFxyXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnXFxyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgIHJldHVybiAnXFxuJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKG9wdGlvbnMgJiYgb3B0aW9ucy5lb2wpIHx8ICdcXG4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRU9MKHRleHQsIG9mZnNldCkge1xuICAgIHJldHVybiAnXFxyXFxuJy5pbmRleE9mKHRleHQuY2hhckF0KG9mZnNldCkpICE9PSAtMTtcbn1cbiIsICIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IGNyZWF0ZVNjYW5uZXIgfSBmcm9tICcuL3NjYW5uZXInO1xudmFyIFBhcnNlT3B0aW9ucztcbihmdW5jdGlvbiAoUGFyc2VPcHRpb25zKSB7XG4gICAgUGFyc2VPcHRpb25zLkRFRkFVTFQgPSB7XG4gICAgICAgIGFsbG93VHJhaWxpbmdDb21tYTogZmFsc2VcbiAgICB9O1xufSkoUGFyc2VPcHRpb25zIHx8IChQYXJzZU9wdGlvbnMgPSB7fSkpO1xuLyoqXG4gKiBGb3IgYSBnaXZlbiBvZmZzZXQsIGV2YWx1YXRlIHRoZSBsb2NhdGlvbiBpbiB0aGUgSlNPTiBkb2N1bWVudC4gRWFjaCBzZWdtZW50IGluIHRoZSBsb2NhdGlvbiBwYXRoIGlzIGVpdGhlciBhIHByb3BlcnR5IG5hbWUgb3IgYW4gYXJyYXkgaW5kZXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbih0ZXh0LCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gW107IC8vIHN0cmluZ3Mgb3IgbnVtYmVyc1xuICAgIGNvbnN0IGVhcmx5UmV0dXJuRXhjZXB0aW9uID0gbmV3IE9iamVjdCgpO1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJldmlvdXNOb2RlSW5zdCA9IHtcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHBhcmVudDogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBsZXQgaXNBdFByb3BlcnR5S2V5ID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gc2V0UHJldmlvdXNOb2RlKHZhbHVlLCBvZmZzZXQsIGxlbmd0aCwgdHlwZSkge1xuICAgICAgICBwcmV2aW91c05vZGVJbnN0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHByZXZpb3VzTm9kZUluc3Qub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICBwcmV2aW91c05vZGVJbnN0Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgcHJldmlvdXNOb2RlSW5zdC50eXBlID0gdHlwZTtcbiAgICAgICAgcHJldmlvdXNOb2RlSW5zdC5jb2xvbk9mZnNldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlSW5zdDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgdmlzaXQodGV4dCwge1xuICAgICAgICAgICAgb25PYmplY3RCZWdpbjogKG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlYXJseVJldHVybkV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlzQXRQcm9wZXJ0eUtleSA9IHBvc2l0aW9uID4gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goJycpOyAvLyBwdXNoIGEgcGxhY2Vob2xkZXIgKHdpbGwgYmUgcmVwbGFjZWQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25PYmplY3RQcm9wZXJ0eTogKG5hbWUsIG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRQcmV2aW91c05vZGUobmFtZSwgb2Zmc2V0LCBsZW5ndGgsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdID0gbmFtZTtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gb2Zmc2V0ICsgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk9iamVjdEVuZDogKG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlYXJseVJldHVybkV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQXJyYXlCZWdpbjogKG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlYXJseVJldHVybkV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BcnJheUVuZDogKG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlYXJseVJldHVybkV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGl0ZXJhbFZhbHVlOiAodmFsdWUsIG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRQcmV2aW91c05vZGUodmFsdWUsIG9mZnNldCwgbGVuZ3RoLCBnZXROb2RlVHlwZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBvZmZzZXQgKyBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2VwYXJhdG9yOiAoc2VwLCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZXAgPT09ICc6JyAmJiBwcmV2aW91c05vZGUgJiYgcHJldmlvdXNOb2RlLnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlLmNvbG9uT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBpc0F0UHJvcGVydHlLZXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXAgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGFzdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdID0gbGFzdCArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0F0UHJvcGVydHlLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgIT09IGVhcmx5UmV0dXJuRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6IHNlZ21lbnRzLFxuICAgICAgICBwcmV2aW91c05vZGUsXG4gICAgICAgIGlzQXRQcm9wZXJ0eUtleSxcbiAgICAgICAgbWF0Y2hlczogKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGxldCBrID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBrIDwgcGF0dGVybi5sZW5ndGggJiYgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm5ba10gPT09IHNlZ21lbnRzW2ldIHx8IHBhdHRlcm5ba10gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhdHRlcm5ba10gIT09ICcqKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrID09PSBwYXR0ZXJuLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dCBhbmQgcmV0dXJucyB0aGUgb2JqZWN0IHRoZSBKU09OIGNvbnRlbnQgcmVwcmVzZW50cy4gT24gaW52YWxpZCBpbnB1dCwgdGhlIHBhcnNlciB0cmllcyB0byBiZSBhcyBmYXVsdCB0b2xlcmFudCBhcyBwb3NzaWJsZSwgYnV0IHN0aWxsIHJldHVybiBhIHJlc3VsdC5cbiAqIFRoZXJlZm9yZSBhbHdheXMgY2hlY2sgdGhlIGVycm9ycyBsaXN0IHRvIGZpbmQgb3V0IGlmIHRoZSBpbnB1dCB3YXMgdmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0LCBlcnJvcnMgPSBbXSwgb3B0aW9ucyA9IFBhcnNlT3B0aW9ucy5ERUZBVUxUKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9wZXJ0eSA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRQYXJlbnQgPSBbXTtcbiAgICBjb25zdCBwcmV2aW91c1BhcmVudHMgPSBbXTtcbiAgICBmdW5jdGlvbiBvblZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRQYXJlbnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudFtjdXJyZW50UHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdmlzaXRvciA9IHtcbiAgICAgICAgb25PYmplY3RCZWdpbjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XG4gICAgICAgICAgICBvblZhbHVlKG9iamVjdCk7XG4gICAgICAgICAgICBwcmV2aW91c1BhcmVudHMucHVzaChjdXJyZW50UGFyZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBvYmplY3Q7XG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvbk9iamVjdFByb3BlcnR5OiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25PYmplY3RFbmQ6ICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBwcmV2aW91c1BhcmVudHMucG9wKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlCZWdpbjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIG9uVmFsdWUoYXJyYXkpO1xuICAgICAgICAgICAgcHJldmlvdXNQYXJlbnRzLnB1c2goY3VycmVudFBhcmVudCk7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gYXJyYXk7XG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvbkFycmF5RW5kOiAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gcHJldmlvdXNQYXJlbnRzLnBvcCgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkxpdGVyYWxWYWx1ZTogb25WYWx1ZSxcbiAgICAgICAgb25FcnJvcjogKGVycm9yLCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBlcnJvciwgb2Zmc2V0LCBsZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZpc2l0KHRleHQsIHZpc2l0b3IsIG9wdGlvbnMpO1xuICAgIHJldHVybiBjdXJyZW50UGFyZW50WzBdO1xufVxuLyoqXG4gKiBQYXJzZXMgdGhlIGdpdmVuIHRleHQgYW5kIHJldHVybnMgYSB0cmVlIHJlcHJlc2VudGF0aW9uIHRoZSBKU09OIGNvbnRlbnQuIE9uIGludmFsaWQgaW5wdXQsIHRoZSBwYXJzZXIgdHJpZXMgdG8gYmUgYXMgZmF1bHQgdG9sZXJhbnQgYXMgcG9zc2libGUsIGJ1dCBzdGlsbCByZXR1cm4gYSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUodGV4dCwgZXJyb3JzID0gW10sIG9wdGlvbnMgPSBQYXJzZU9wdGlvbnMuREVGQVVMVCkge1xuICAgIGxldCBjdXJyZW50UGFyZW50ID0geyB0eXBlOiAnYXJyYXknLCBvZmZzZXQ6IC0xLCBsZW5ndGg6IC0xLCBjaGlsZHJlbjogW10sIHBhcmVudDogdW5kZWZpbmVkIH07IC8vIGFydGlmaWNpYWwgcm9vdFxuICAgIGZ1bmN0aW9uIGVuc3VyZVByb3BlcnR5Q29tcGxldGUoZW5kT2Zmc2V0KSB7XG4gICAgICAgIGlmIChjdXJyZW50UGFyZW50LnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQubGVuZ3RoID0gZW5kT2Zmc2V0IC0gY3VycmVudFBhcmVudC5vZmZzZXQ7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gY3VycmVudFBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25WYWx1ZSh2YWx1ZU5vZGUpIHtcbiAgICAgICAgY3VycmVudFBhcmVudC5jaGlsZHJlbi5wdXNoKHZhbHVlTm9kZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZU5vZGU7XG4gICAgfVxuICAgIGNvbnN0IHZpc2l0b3IgPSB7XG4gICAgICAgIG9uT2JqZWN0QmVnaW46IChvZmZzZXQpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBvblZhbHVlKHsgdHlwZTogJ29iamVjdCcsIG9mZnNldCwgbGVuZ3RoOiAtMSwgcGFyZW50OiBjdXJyZW50UGFyZW50LCBjaGlsZHJlbjogW10gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uT2JqZWN0UHJvcGVydHk6IChuYW1lLCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IG9uVmFsdWUoeyB0eXBlOiAncHJvcGVydHknLCBvZmZzZXQsIGxlbmd0aDogLTEsIHBhcmVudDogY3VycmVudFBhcmVudCwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgICAgICAgY3VycmVudFBhcmVudC5jaGlsZHJlbi5wdXNoKHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBuYW1lLCBvZmZzZXQsIGxlbmd0aCwgcGFyZW50OiBjdXJyZW50UGFyZW50IH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbk9iamVjdEVuZDogKG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBlbnN1cmVQcm9wZXJ0eUNvbXBsZXRlKG9mZnNldCArIGxlbmd0aCk7IC8vIGluIGNhc2Ugb2YgYSBtaXNzaW5nIHZhbHVlIGZvciBhIHByb3BlcnR5OiBtYWtlIHN1cmUgcHJvcGVydHkgaXMgY29tcGxldGVcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQubGVuZ3RoID0gb2Zmc2V0ICsgbGVuZ3RoIC0gY3VycmVudFBhcmVudC5vZmZzZXQ7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gY3VycmVudFBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICBlbnN1cmVQcm9wZXJ0eUNvbXBsZXRlKG9mZnNldCArIGxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlCZWdpbjogKG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gb25WYWx1ZSh7IHR5cGU6ICdhcnJheScsIG9mZnNldCwgbGVuZ3RoOiAtMSwgcGFyZW50OiBjdXJyZW50UGFyZW50LCBjaGlsZHJlbjogW10gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlFbmQ6IChvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudC5sZW5ndGggPSBvZmZzZXQgKyBsZW5ndGggLSBjdXJyZW50UGFyZW50Lm9mZnNldDtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBjdXJyZW50UGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIGVuc3VyZVByb3BlcnR5Q29tcGxldGUob2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25MaXRlcmFsVmFsdWU6ICh2YWx1ZSwgb2Zmc2V0LCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIG9uVmFsdWUoeyB0eXBlOiBnZXROb2RlVHlwZSh2YWx1ZSksIG9mZnNldCwgbGVuZ3RoLCBwYXJlbnQ6IGN1cnJlbnRQYXJlbnQsIHZhbHVlIH0pO1xuICAgICAgICAgICAgZW5zdXJlUHJvcGVydHlDb21wbGV0ZShvZmZzZXQgKyBsZW5ndGgpO1xuICAgICAgICB9LFxuICAgICAgICBvblNlcGFyYXRvcjogKHNlcCwgb2Zmc2V0LCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFyZW50LnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VwID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhcmVudC5jb2xvbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VwID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5zdXJlUHJvcGVydHlDb21wbGV0ZShvZmZzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogKGVycm9yLCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBlcnJvciwgb2Zmc2V0LCBsZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZpc2l0KHRleHQsIHZpc2l0b3IsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGN1cnJlbnRQYXJlbnQuY2hpbGRyZW5bMF07XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBkZWxldGUgcmVzdWx0LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRmluZHMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIHBhdGggaW4gYSBKU09OIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlQXRMb2NhdGlvbihyb290LCBwYXRoKSB7XG4gICAgaWYgKCFyb290KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBub2RlID0gcm9vdDtcbiAgICBmb3IgKGxldCBzZWdtZW50IG9mIHBhdGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWdtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ29iamVjdCcgfHwgIUFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5Tm9kZSBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHlOb2RlLmNoaWxkcmVuKSAmJiBwcm9wZXJ0eU5vZGUuY2hpbGRyZW5bMF0udmFsdWUgPT09IHNlZ21lbnQgJiYgcHJvcGVydHlOb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWdtZW50O1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ2FycmF5JyB8fCBpbmRleCA8IDAgfHwgIUFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikgfHwgaW5kZXggPj0gbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBKU09OIHBhdGggb2YgdGhlIGdpdmVuIEpTT04gRE9NIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVQYXRoKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50IHx8ICFub2RlLnBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBnZXROb2RlUGF0aChub2RlLnBhcmVudCk7XG4gICAgaWYgKG5vZGUucGFyZW50LnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbm9kZS5wYXJlbnQuY2hpbGRyZW5bMF0udmFsdWU7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLnBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogRXZhbHVhdGVzIHRoZSBKYXZhU2NyaXB0IG9iamVjdCBvZiB0aGUgZ2l2ZW4gSlNPTiBET00gbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVZhbHVlKG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbi5tYXAoZ2V0Tm9kZVZhbHVlKTtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vZGUgPSBwcm9wLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3AuY2hpbGRyZW5bMF0udmFsdWVdID0gZ2V0Tm9kZVZhbHVlKHZhbHVlTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhub2RlLCBvZmZzZXQsIGluY2x1ZGVSaWdodEJvdW5kID0gZmFsc2UpIHtcbiAgICByZXR1cm4gKG9mZnNldCA+PSBub2RlLm9mZnNldCAmJiBvZmZzZXQgPCAobm9kZS5vZmZzZXQgKyBub2RlLmxlbmd0aCkpIHx8IGluY2x1ZGVSaWdodEJvdW5kICYmIChvZmZzZXQgPT09IChub2RlLm9mZnNldCArIG5vZGUubGVuZ3RoKSk7XG59XG4vKipcbiAqIEZpbmRzIHRoZSBtb3N0IGlubmVyIG5vZGUgYXQgdGhlIGdpdmVuIG9mZnNldC4gSWYgaW5jbHVkZVJpZ2h0Qm91bmQgaXMgc2V0LCBhbHNvIGZpbmRzIG5vZGVzIHRoYXQgZW5kIGF0IHRoZSBnaXZlbiBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZUF0T2Zmc2V0KG5vZGUsIG9mZnNldCwgaW5jbHVkZVJpZ2h0Qm91bmQgPSBmYWxzZSkge1xuICAgIGlmIChjb250YWlucyhub2RlLCBvZmZzZXQsIGluY2x1ZGVSaWdodEJvdW5kKSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGggJiYgY2hpbGRyZW5baV0ub2Zmc2V0IDw9IG9mZnNldDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGZpbmROb2RlQXRPZmZzZXQoY2hpbGRyZW5baV0sIG9mZnNldCwgaW5jbHVkZVJpZ2h0Qm91bmQpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbi8qKlxuICogUGFyc2VzIHRoZSBnaXZlbiB0ZXh0IGFuZCBpbnZva2VzIHRoZSB2aXNpdG9yIGZ1bmN0aW9ucyBmb3IgZWFjaCBvYmplY3QsIGFycmF5IGFuZCBsaXRlcmFsIHJlYWNoZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdCh0ZXh0LCB2aXNpdG9yLCBvcHRpb25zID0gUGFyc2VPcHRpb25zLkRFRkFVTFQpIHtcbiAgICBjb25zdCBfc2Nhbm5lciA9IGNyZWF0ZVNjYW5uZXIodGV4dCwgZmFsc2UpO1xuICAgIC8vIEltcG9ydGFudDogT25seSBwYXNzIGNvcGllcyBvZiB0aGlzIHRvIHZpc2l0b3IgZnVuY3Rpb25zIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBtb2RpZmljYXRpb24sIGFuZFxuICAgIC8vIHRvIG5vdCBhZmZlY3QgdmlzaXRvciBmdW5jdGlvbnMgd2hpY2ggc3RvcmVkIGEgcmVmZXJlbmNlIHRvIGEgcHJldmlvdXMgSlNPTlBhdGhcbiAgICBjb25zdCBfanNvblBhdGggPSBbXTtcbiAgICAvLyBEZXB0aCBvZiBvblhYWEJlZ2luKCkgY2FsbGJhY2tzIHN1cHByZXNzZWQuIG9uWFhYRW5kKCkgZGVjcmVtZW50cyB0aGlzIGlmIGl0IGlzbid0IDAgYWxyZWFkeS5cbiAgICAvLyBDYWxsYmFja3MgYXJlIG9ubHkgY2FsbGVkIHdoZW4gdGhpcyB2YWx1ZSBpcyAwLlxuICAgIGxldCBzdXBwcmVzc2VkQ2FsbGJhY2tzID0gMDtcbiAgICBmdW5jdGlvbiB0b05vQXJnVmlzaXQodmlzaXRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdmlzaXRGdW5jdGlvbiA/ICgpID0+IHN1cHByZXNzZWRDYWxsYmFja3MgPT09IDAgJiYgdmlzaXRGdW5jdGlvbihfc2Nhbm5lci5nZXRUb2tlbk9mZnNldCgpLCBfc2Nhbm5lci5nZXRUb2tlbkxlbmd0aCgpLCBfc2Nhbm5lci5nZXRUb2tlblN0YXJ0TGluZSgpLCBfc2Nhbm5lci5nZXRUb2tlblN0YXJ0Q2hhcmFjdGVyKCkpIDogKCkgPT4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9PbmVBcmdWaXNpdCh2aXNpdEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB2aXNpdEZ1bmN0aW9uID8gKGFyZykgPT4gc3VwcHJlc3NlZENhbGxiYWNrcyA9PT0gMCAmJiB2aXNpdEZ1bmN0aW9uKGFyZywgX3NjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSwgX3NjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydExpbmUoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydENoYXJhY3RlcigpKSA6ICgpID0+IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvT25lQXJnVmlzaXRXaXRoUGF0aCh2aXNpdEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB2aXNpdEZ1bmN0aW9uID8gKGFyZykgPT4gc3VwcHJlc3NlZENhbGxiYWNrcyA9PT0gMCAmJiB2aXNpdEZ1bmN0aW9uKGFyZywgX3NjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSwgX3NjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydExpbmUoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydENoYXJhY3RlcigpLCAoKSA9PiBfanNvblBhdGguc2xpY2UoKSkgOiAoKSA9PiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0JlZ2luVmlzaXQodmlzaXRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdmlzaXRGdW5jdGlvbiA/XG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHByZXNzZWRDYWxsYmFja3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHByZXNzZWRDYWxsYmFja3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYlJldHVybiA9IHZpc2l0RnVuY3Rpb24oX3NjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSwgX3NjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydExpbmUoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydENoYXJhY3RlcigpLCAoKSA9PiBfanNvblBhdGguc2xpY2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYlJldHVybiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzZWRDYWxsYmFja3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiAoKSA9PiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0VuZFZpc2l0KHZpc2l0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0RnVuY3Rpb24gP1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdXBwcmVzc2VkQ2FsbGJhY2tzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBwcmVzc2VkQ2FsbGJhY2tzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdXBwcmVzc2VkQ2FsbGJhY2tzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0RnVuY3Rpb24oX3NjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSwgX3NjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydExpbmUoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydENoYXJhY3RlcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6ICgpID0+IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG9uT2JqZWN0QmVnaW4gPSB0b0JlZ2luVmlzaXQodmlzaXRvci5vbk9iamVjdEJlZ2luKSwgb25PYmplY3RQcm9wZXJ0eSA9IHRvT25lQXJnVmlzaXRXaXRoUGF0aCh2aXNpdG9yLm9uT2JqZWN0UHJvcGVydHkpLCBvbk9iamVjdEVuZCA9IHRvRW5kVmlzaXQodmlzaXRvci5vbk9iamVjdEVuZCksIG9uQXJyYXlCZWdpbiA9IHRvQmVnaW5WaXNpdCh2aXNpdG9yLm9uQXJyYXlCZWdpbiksIG9uQXJyYXlFbmQgPSB0b0VuZFZpc2l0KHZpc2l0b3Iub25BcnJheUVuZCksIG9uTGl0ZXJhbFZhbHVlID0gdG9PbmVBcmdWaXNpdFdpdGhQYXRoKHZpc2l0b3Iub25MaXRlcmFsVmFsdWUpLCBvblNlcGFyYXRvciA9IHRvT25lQXJnVmlzaXQodmlzaXRvci5vblNlcGFyYXRvciksIG9uQ29tbWVudCA9IHRvTm9BcmdWaXNpdCh2aXNpdG9yLm9uQ29tbWVudCksIG9uRXJyb3IgPSB0b09uZUFyZ1Zpc2l0KHZpc2l0b3Iub25FcnJvcik7XG4gICAgY29uc3QgZGlzYWxsb3dDb21tZW50cyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kaXNhbGxvd0NvbW1lbnRzO1xuICAgIGNvbnN0IGFsbG93VHJhaWxpbmdDb21tYSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hbGxvd1RyYWlsaW5nQ29tbWE7XG4gICAgZnVuY3Rpb24gc2Nhbk5leHQoKSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IF9zY2FubmVyLnNjYW4oKTtcbiAgICAgICAgICAgIHN3aXRjaCAoX3NjYW5uZXIuZ2V0VG9rZW5FcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIFNjYW5FcnJvci5JbnZhbGlkVW5pY29kZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoMTQgLyogUGFyc2VFcnJvckNvZGUuSW52YWxpZFVuaWNvZGUgKi8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogU2NhbkVycm9yLkludmFsaWRFc2NhcGVDaGFyYWN0ZXIgKi86XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDE1IC8qIFBhcnNlRXJyb3JDb2RlLkludmFsaWRFc2NhcGVDaGFyYWN0ZXIgKi8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMgLyogU2NhbkVycm9yLlVuZXhwZWN0ZWRFbmRPZk51bWJlciAqLzpcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoMTMgLyogUGFyc2VFcnJvckNvZGUuVW5leHBlY3RlZEVuZE9mTnVtYmVyICovKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxIC8qIFNjYW5FcnJvci5VbmV4cGVjdGVkRW5kT2ZDb21tZW50ICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FsbG93Q29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDExIC8qIFBhcnNlRXJyb3JDb2RlLlVuZXhwZWN0ZWRFbmRPZkNvbW1lbnQgKi8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBTY2FuRXJyb3IuVW5leHBlY3RlZEVuZE9mU3RyaW5nICovOlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcigxMiAvKiBQYXJzZUVycm9yQ29kZS5VbmV4cGVjdGVkRW5kT2ZTdHJpbmcgKi8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDYgLyogU2NhbkVycm9yLkludmFsaWRDaGFyYWN0ZXIgKi86XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDE2IC8qIFBhcnNlRXJyb3JDb2RlLkludmFsaWRDaGFyYWN0ZXIgKi8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyIC8qIFN5bnRheEtpbmQuTGluZUNvbW1lbnRUcml2aWEgKi86XG4gICAgICAgICAgICAgICAgY2FzZSAxMyAvKiBTeW50YXhLaW5kLkJsb2NrQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FsbG93Q29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDEwIC8qIFBhcnNlRXJyb3JDb2RlLkludmFsaWRDb21tZW50VG9rZW4gKi8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Db21tZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxNiAvKiBTeW50YXhLaW5kLlVua25vd24gKi86XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDEgLyogUGFyc2VFcnJvckNvZGUuSW52YWxpZFN5bWJvbCAqLyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTUgLyogU3ludGF4S2luZC5Ucml2aWEgKi86XG4gICAgICAgICAgICAgICAgY2FzZSAxNCAvKiBTeW50YXhLaW5kLkxpbmVCcmVha1RyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBza2lwVW50aWxBZnRlciA9IFtdLCBza2lwVW50aWwgPSBbXSkge1xuICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgaWYgKHNraXBVbnRpbEFmdGVyLmxlbmd0aCArIHNraXBVbnRpbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBfc2Nhbm5lci5nZXRUb2tlbigpO1xuICAgICAgICAgICAgd2hpbGUgKHRva2VuICE9PSAxNyAvKiBTeW50YXhLaW5kLkVPRiAqLykge1xuICAgICAgICAgICAgICAgIGlmIChza2lwVW50aWxBZnRlci5pbmRleE9mKHRva2VuKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nhbk5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraXBVbnRpbC5pbmRleE9mKHRva2VuKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRva2VuID0gc2Nhbk5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZVN0cmluZyhpc1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gX3NjYW5uZXIuZ2V0VG9rZW5WYWx1ZSgpO1xuICAgICAgICBpZiAoaXNWYWx1ZSkge1xuICAgICAgICAgICAgb25MaXRlcmFsVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb25PYmplY3RQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgICAgICAgICAvLyBhZGQgcHJvcGVydHkgbmFtZSBhZnRlcndhcmRzXG4gICAgICAgICAgICBfanNvblBhdGgucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2Nhbk5leHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlTGl0ZXJhbCgpIHtcbiAgICAgICAgc3dpdGNoIChfc2Nhbm5lci5nZXRUb2tlbigpKSB7XG4gICAgICAgICAgICBjYXNlIDExIC8qIFN5bnRheEtpbmQuTnVtZXJpY0xpdGVyYWwgKi86XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5WYWx1ZSA9IF9zY2FubmVyLmdldFRva2VuVmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBOdW1iZXIodG9rZW5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcigyIC8qIFBhcnNlRXJyb3JDb2RlLkludmFsaWROdW1iZXJGb3JtYXQgKi8pO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uTGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNyAvKiBTeW50YXhLaW5kLk51bGxLZXl3b3JkICovOlxuICAgICAgICAgICAgICAgIG9uTGl0ZXJhbFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4IC8qIFN5bnRheEtpbmQuVHJ1ZUtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgb25MaXRlcmFsVmFsdWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgLyogU3ludGF4S2luZC5GYWxzZUtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgb25MaXRlcmFsVmFsdWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2Nhbk5leHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlUHJvcGVydHkoKSB7XG4gICAgICAgIGlmIChfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAxMCAvKiBTeW50YXhLaW5kLlN0cmluZ0xpdGVyYWwgKi8pIHtcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKDMgLyogUGFyc2VFcnJvckNvZGUuUHJvcGVydHlOYW1lRXhwZWN0ZWQgKi8sIFtdLCBbMiAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2VUb2tlbiAqLywgNSAvKiBTeW50YXhLaW5kLkNvbW1hVG9rZW4gKi9dKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZVN0cmluZyhmYWxzZSk7XG4gICAgICAgIGlmIChfc2Nhbm5lci5nZXRUb2tlbigpID09PSA2IC8qIFN5bnRheEtpbmQuQ29sb25Ub2tlbiAqLykge1xuICAgICAgICAgICAgb25TZXBhcmF0b3IoJzonKTtcbiAgICAgICAgICAgIHNjYW5OZXh0KCk7IC8vIGNvbnN1bWUgY29sb25cbiAgICAgICAgICAgIGlmICghcGFyc2VWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBQYXJzZUVycm9yQ29kZS5WYWx1ZUV4cGVjdGVkICovLCBbXSwgWzIgLyogU3ludGF4S2luZC5DbG9zZUJyYWNlVG9rZW4gKi8sIDUgLyogU3ludGF4S2luZC5Db21tYVRva2VuICovXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcig1IC8qIFBhcnNlRXJyb3JDb2RlLkNvbG9uRXhwZWN0ZWQgKi8sIFtdLCBbMiAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2VUb2tlbiAqLywgNSAvKiBTeW50YXhLaW5kLkNvbW1hVG9rZW4gKi9dKTtcbiAgICAgICAgfVxuICAgICAgICBfanNvblBhdGgucG9wKCk7IC8vIHJlbW92ZSBwcm9jZXNzZWQgcHJvcGVydHkgbmFtZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VPYmplY3QoKSB7XG4gICAgICAgIG9uT2JqZWN0QmVnaW4oKTtcbiAgICAgICAgc2Nhbk5leHQoKTsgLy8gY29uc3VtZSBvcGVuIGJyYWNlXG4gICAgICAgIGxldCBuZWVkc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAyIC8qIFN5bnRheEtpbmQuQ2xvc2VCcmFjZVRva2VuICovICYmIF9zY2FubmVyLmdldFRva2VuKCkgIT09IDE3IC8qIFN5bnRheEtpbmQuRU9GICovKSB7XG4gICAgICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSA9PT0gNSAvKiBTeW50YXhLaW5kLkNvbW1hVG9rZW4gKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5lZWRzQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBQYXJzZUVycm9yQ29kZS5WYWx1ZUV4cGVjdGVkICovLCBbXSwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblNlcGFyYXRvcignLCcpO1xuICAgICAgICAgICAgICAgIHNjYW5OZXh0KCk7IC8vIGNvbnN1bWUgY29tbWFcbiAgICAgICAgICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSA9PT0gMiAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2VUb2tlbiAqLyAmJiBhbGxvd1RyYWlsaW5nQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVlZHNDb21tYSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDYgLyogUGFyc2VFcnJvckNvZGUuQ29tbWFFeHBlY3RlZCAqLywgW10sIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGFyc2VQcm9wZXJ0eSgpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBQYXJzZUVycm9yQ29kZS5WYWx1ZUV4cGVjdGVkICovLCBbXSwgWzIgLyogU3ludGF4S2luZC5DbG9zZUJyYWNlVG9rZW4gKi8sIDUgLyogU3ludGF4S2luZC5Db21tYVRva2VuICovXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZWVkc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvbk9iamVjdEVuZCgpO1xuICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSAhPT0gMiAvKiBTeW50YXhLaW5kLkNsb3NlQnJhY2VUb2tlbiAqLykge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoNyAvKiBQYXJzZUVycm9yQ29kZS5DbG9zZUJyYWNlRXhwZWN0ZWQgKi8sIFsyIC8qIFN5bnRheEtpbmQuQ2xvc2VCcmFjZVRva2VuICovXSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2Nhbk5leHQoKTsgLy8gY29uc3VtZSBjbG9zZSBicmFjZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZUFycmF5KCkge1xuICAgICAgICBvbkFycmF5QmVnaW4oKTtcbiAgICAgICAgc2Nhbk5leHQoKTsgLy8gY29uc3VtZSBvcGVuIGJyYWNrZXRcbiAgICAgICAgbGV0IGlzRmlyc3RFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgbGV0IG5lZWRzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKF9zY2FubmVyLmdldFRva2VuKCkgIT09IDQgLyogU3ludGF4S2luZC5DbG9zZUJyYWNrZXRUb2tlbiAqLyAmJiBfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAxNyAvKiBTeW50YXhLaW5kLkVPRiAqLykge1xuICAgICAgICAgICAgaWYgKF9zY2FubmVyLmdldFRva2VuKCkgPT09IDUgLyogU3ludGF4S2luZC5Db21tYVRva2VuICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZWVkc0NvbW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDQgLyogUGFyc2VFcnJvckNvZGUuVmFsdWVFeHBlY3RlZCAqLywgW10sIFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25TZXBhcmF0b3IoJywnKTtcbiAgICAgICAgICAgICAgICBzY2FuTmV4dCgpOyAvLyBjb25zdW1lIGNvbW1hXG4gICAgICAgICAgICAgICAgaWYgKF9zY2FubmVyLmdldFRva2VuKCkgPT09IDQgLyogU3ludGF4S2luZC5DbG9zZUJyYWNrZXRUb2tlbiAqLyAmJiBhbGxvd1RyYWlsaW5nQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVlZHNDb21tYSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDYgLyogUGFyc2VFcnJvckNvZGUuQ29tbWFFeHBlY3RlZCAqLywgW10sIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0ZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIF9qc29uUGF0aC5wdXNoKDApO1xuICAgICAgICAgICAgICAgIGlzRmlyc3RFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfanNvblBhdGhbX2pzb25QYXRoLmxlbmd0aCAtIDFdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBhcnNlVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDQgLyogUGFyc2VFcnJvckNvZGUuVmFsdWVFeHBlY3RlZCAqLywgW10sIFs0IC8qIFN5bnRheEtpbmQuQ2xvc2VCcmFja2V0VG9rZW4gKi8sIDUgLyogU3ludGF4S2luZC5Db21tYVRva2VuICovXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZWVkc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvbkFycmF5RW5kKCk7XG4gICAgICAgIGlmICghaXNGaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIF9qc29uUGF0aC5wb3AoKTsgLy8gcmVtb3ZlIGFycmF5IGluZGV4XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9zY2FubmVyLmdldFRva2VuKCkgIT09IDQgLyogU3ludGF4S2luZC5DbG9zZUJyYWNrZXRUb2tlbiAqLykge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoOCAvKiBQYXJzZUVycm9yQ29kZS5DbG9zZUJyYWNrZXRFeHBlY3RlZCAqLywgWzQgLyogU3ludGF4S2luZC5DbG9zZUJyYWNrZXRUb2tlbiAqL10sIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjYW5OZXh0KCk7IC8vIGNvbnN1bWUgY2xvc2UgYnJhY2tldFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZVZhbHVlKCkge1xuICAgICAgICBzd2l0Y2ggKF9zY2FubmVyLmdldFRva2VuKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTeW50YXhLaW5kLk9wZW5CcmFja2V0VG9rZW4gKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlQXJyYXkoKTtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBTeW50YXhLaW5kLk9wZW5CcmFjZVRva2VuICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZU9iamVjdCgpO1xuICAgICAgICAgICAgY2FzZSAxMCAvKiBTeW50YXhLaW5kLlN0cmluZ0xpdGVyYWwgKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nKHRydWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VMaXRlcmFsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2Nhbk5leHQoKTtcbiAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSA9PT0gMTcgLyogU3ludGF4S2luZC5FT0YgKi8pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dFbXB0eUNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUVycm9yKDQgLyogUGFyc2VFcnJvckNvZGUuVmFsdWVFeHBlY3RlZCAqLywgW10sIFtdKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXBhcnNlVmFsdWUoKSkge1xuICAgICAgICBoYW5kbGVFcnJvcig0IC8qIFBhcnNlRXJyb3JDb2RlLlZhbHVlRXhwZWN0ZWQgKi8sIFtdLCBbXSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKF9zY2FubmVyLmdldFRva2VuKCkgIT09IDE3IC8qIFN5bnRheEtpbmQuRU9GICovKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKDkgLyogUGFyc2VFcnJvckNvZGUuRW5kT2ZGaWxlRXhwZWN0ZWQgKi8sIFtdLCBbXSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBUYWtlcyBKU09OIHdpdGggSmF2YVNjcmlwdC1zdHlsZSBjb21tZW50cyBhbmQgcmVtb3ZlXG4gKiB0aGVtLiBPcHRpb25hbGx5IHJlcGxhY2VzIGV2ZXJ5IG5vbmUtbmV3bGluZSBjaGFyYWN0ZXJcbiAqIG9mIGNvbW1lbnRzIHdpdGggYSByZXBsYWNlQ2hhcmFjdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcENvbW1lbnRzKHRleHQsIHJlcGxhY2VDaCkge1xuICAgIGxldCBfc2Nhbm5lciA9IGNyZWF0ZVNjYW5uZXIodGV4dCksIHBhcnRzID0gW10sIGtpbmQsIG9mZnNldCA9IDAsIHBvcztcbiAgICBkbyB7XG4gICAgICAgIHBvcyA9IF9zY2FubmVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGtpbmQgPSBfc2Nhbm5lci5zY2FuKCk7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAxMiAvKiBTeW50YXhLaW5kLkxpbmVDb21tZW50VHJpdmlhICovOlxuICAgICAgICAgICAgY2FzZSAxMyAvKiBTeW50YXhLaW5kLkJsb2NrQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgIGNhc2UgMTcgLyogU3ludGF4S2luZC5FT0YgKi86XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2godGV4dC5zdWJzdHJpbmcob2Zmc2V0LCBwb3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VDaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goX3NjYW5uZXIuZ2V0VG9rZW5WYWx1ZSgpLnJlcGxhY2UoL1teXFxyXFxuXS9nLCByZXBsYWNlQ2gpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gX3NjYW5uZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKGtpbmQgIT09IDE3IC8qIFN5bnRheEtpbmQuRU9GICovKTtcbiAgICByZXR1cm4gcGFydHMuam9pbignJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVR5cGUodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdib29sZWFuJzogcmV0dXJuICdib29sZWFuJztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzogcmV0dXJuICdudW1iZXInO1xuICAgICAgICBjYXNlICdzdHJpbmcnOiByZXR1cm4gJ3N0cmluZyc7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ251bGwnO1xuICAgIH1cbn1cbiIsICIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IGZvcm1hdCwgaXNFT0wgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBwYXJzZVRyZWUsIGZpbmROb2RlQXRMb2NhdGlvbiB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0eSh0ZXh0LCBwYXRoLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNldFByb3BlcnR5KHRleHQsIHBhdGgsIHZvaWQgMCwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkodGV4dCwgb3JpZ2luYWxQYXRoLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHBhdGggPSBvcmlnaW5hbFBhdGguc2xpY2UoKTtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBjb25zdCByb290ID0gcGFyc2VUcmVlKHRleHQsIGVycm9ycyk7XG4gICAgbGV0IHBhcmVudCA9IHZvaWQgMDtcbiAgICBsZXQgbGFzdFNlZ21lbnQgPSB2b2lkIDA7XG4gICAgd2hpbGUgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICBsYXN0U2VnbWVudCA9IHBhdGgucG9wKCk7XG4gICAgICAgIHBhcmVudCA9IGZpbmROb2RlQXRMb2NhdGlvbihyb290LCBwYXRoKTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGFzdFNlZ21lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7IFtsYXN0U2VnbWVudF06IHZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAvLyBlbXB0eSBkb2N1bWVudFxuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyAvLyBkZWxldGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBkZWxldGUgaW4gZW1wdHkgZG9jdW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgeyBvZmZzZXQ6IHJvb3QgPyByb290Lm9mZnNldCA6IDAsIGxlbmd0aDogcm9vdCA/IHJvb3QubGVuZ3RoIDogMCwgY29udGVudDogSlNPTi5zdHJpbmdpZnkodmFsdWUpIH0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGxhc3RTZWdtZW50ID09PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KHBhcmVudC5jaGlsZHJlbikpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBmaW5kTm9kZUF0TG9jYXRpb24ocGFyZW50LCBbbGFzdFNlZ21lbnRdKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IC8vIGRlbGV0ZVxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIEFTVCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoZXhpc3RpbmcucGFyZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQmVnaW47XG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZUVuZCA9IGV4aXN0aW5nLnBhcmVudC5vZmZzZXQgKyBleGlzdGluZy5wYXJlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbW1hIG9mIHRoZSBwcmV2aW91cyBub2RlXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IHBhcmVudC5jaGlsZHJlbltwcm9wZXJ0eUluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJlZ2luID0gcHJldmlvdXMub2Zmc2V0ICsgcHJldmlvdXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQmVnaW4gPSBwYXJlbnQub2Zmc2V0ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbW1hIG9mIHRoZSBuZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcGFyZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRW5kID0gbmV4dC5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdGhGb3JtYXR0aW5nKHRleHQsIHsgb2Zmc2V0OiByZW1vdmVCZWdpbiwgbGVuZ3RoOiByZW1vdmVFbmQgLSByZW1vdmVCZWdpbiwgY29udGVudDogJycgfSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdmFsdWUgb2YgZXhpc3RpbmcgcHJvcGVydHlcbiAgICAgICAgICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgeyBvZmZzZXQ6IGV4aXN0aW5nLm9mZnNldCwgbGVuZ3RoOiBleGlzdGluZy5sZW5ndGgsIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSB9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IC8vIGRlbGV0ZVxuICAgICAgICAgICAgICAgIHJldHVybiBbXTsgLy8gcHJvcGVydHkgZG9lcyBub3QgZXhpc3QsIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gYCR7SlNPTi5zdHJpbmdpZnkobGFzdFNlZ21lbnQpfTogJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb3B0aW9ucy5nZXRJbnNlcnRpb25JbmRleCA/IG9wdGlvbnMuZ2V0SW5zZXJ0aW9uSW5kZXgocGFyZW50LmNoaWxkcmVuLm1hcChwID0+IHAuY2hpbGRyZW5bMF0udmFsdWUpKSA6IHBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgZWRpdDtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBwYXJlbnQuY2hpbGRyZW5baW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHByZXZpb3VzLm9mZnNldCArIHByZXZpb3VzLmxlbmd0aCwgbGVuZ3RoOiAwLCBjb250ZW50OiAnLCcgKyBuZXdQcm9wZXJ0eSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogcGFyZW50Lm9mZnNldCArIDEsIGxlbmd0aDogMCwgY29udGVudDogbmV3UHJvcGVydHkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogcGFyZW50Lm9mZnNldCArIDEsIGxlbmd0aDogMCwgY29udGVudDogbmV3UHJvcGVydHkgKyAnLCcgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3aXRoRm9ybWF0dGluZyh0ZXh0LCBlZGl0LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgbGFzdFNlZ21lbnQgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkocGFyZW50LmNoaWxkcmVuKSkge1xuICAgICAgICBjb25zdCBpbnNlcnRJbmRleCA9IGxhc3RTZWdtZW50O1xuICAgICAgICBpZiAoaW5zZXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBJbnNlcnRcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gYCR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWA7XG4gICAgICAgICAgICBsZXQgZWRpdDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZWRpdCA9IHsgb2Zmc2V0OiBwYXJlbnQub2Zmc2V0ICsgMSwgbGVuZ3RoOiAwLCBjb250ZW50OiBuZXdQcm9wZXJ0eSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBwYXJlbnQuY2hpbGRyZW5bcGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogcHJldmlvdXMub2Zmc2V0ICsgcHJldmlvdXMubGVuZ3RoLCBsZW5ndGg6IDAsIGNvbnRlbnQ6ICcsJyArIG5ld1Byb3BlcnR5IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgZWRpdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHZvaWQgMCAmJiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92YWxcbiAgICAgICAgICAgIGNvbnN0IHJlbW92YWxJbmRleCA9IGxhc3RTZWdtZW50O1xuICAgICAgICAgICAgY29uc3QgdG9SZW1vdmUgPSBwYXJlbnQuY2hpbGRyZW5bcmVtb3ZhbEluZGV4XTtcbiAgICAgICAgICAgIGxldCBlZGl0O1xuICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGl0ZW1cbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHBhcmVudC5vZmZzZXQgKyAxLCBsZW5ndGg6IHBhcmVudC5sZW5ndGggLSAyLCBjb250ZW50OiAnJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEgPT09IHJlbW92YWxJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IHBhcmVudC5jaGlsZHJlbltyZW1vdmFsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcHJldmlvdXMub2Zmc2V0ICsgcHJldmlvdXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRFbmRPZmZzZXQgPSBwYXJlbnQub2Zmc2V0ICsgcGFyZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQsIGxlbmd0aDogcGFyZW50RW5kT2Zmc2V0IC0gMiAtIG9mZnNldCwgY29udGVudDogJycgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogdG9SZW1vdmUub2Zmc2V0LCBsZW5ndGg6IHBhcmVudC5jaGlsZHJlbltyZW1vdmFsSW5kZXggKyAxXS5vZmZzZXQgLSB0b1JlbW92ZS5vZmZzZXQsIGNvbnRlbnQ6ICcnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgZWRpdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbGV0IGVkaXQ7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlzQXJyYXlJbnNlcnRpb24gJiYgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9Nb2RpZnkgPSBwYXJlbnQuY2hpbGRyZW5bbGFzdFNlZ21lbnRdO1xuICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogdG9Nb2RpZnkub2Zmc2V0LCBsZW5ndGg6IHRvTW9kaWZ5Lmxlbmd0aCwgY29udGVudDogbmV3UHJvcGVydHkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgfHwgbGFzdFNlZ21lbnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHBhcmVudC5vZmZzZXQgKyAxLCBsZW5ndGg6IDAsIGNvbnRlbnQ6IHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgPyBuZXdQcm9wZXJ0eSA6IG5ld1Byb3BlcnR5ICsgJywnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGxhc3RTZWdtZW50ID4gcGFyZW50LmNoaWxkcmVuLmxlbmd0aCA/IHBhcmVudC5jaGlsZHJlbi5sZW5ndGggOiBsYXN0U2VnbWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IHBhcmVudC5jaGlsZHJlbltpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogcHJldmlvdXMub2Zmc2V0ICsgcHJldmlvdXMubGVuZ3RoLCBsZW5ndGg6IDAsIGNvbnRlbnQ6ICcsJyArIG5ld1Byb3BlcnR5IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgZWRpdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbiBub3QgJHt2YWx1ZSA9PT0gdm9pZCAwID8gJ3JlbW92ZScgOiAob3B0aW9ucy5pc0FycmF5SW5zZXJ0aW9uID8gJ2luc2VydCcgOiAnbW9kaWZ5Jyl9IEFycmF5IGluZGV4ICR7aW5zZXJ0SW5kZXh9IGFzIGxlbmd0aCBpcyBub3Qgc3VmZmljaWVudGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbiBub3QgYWRkICR7dHlwZW9mIGxhc3RTZWdtZW50ICE9PSAnbnVtYmVyJyA/ICdpbmRleCcgOiAncHJvcGVydHknfSB0byBwYXJlbnQgb2YgdHlwZSAke3BhcmVudC50eXBlfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdpdGhGb3JtYXR0aW5nKHRleHQsIGVkaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMuZm9ybWF0dGluZ09wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFtlZGl0XTtcbiAgICB9XG4gICAgLy8gYXBwbHkgdGhlIGVkaXRcbiAgICBsZXQgbmV3VGV4dCA9IGFwcGx5RWRpdCh0ZXh0LCBlZGl0KTtcbiAgICAvLyBmb3JtYXQgdGhlIG5ldyB0ZXh0XG4gICAgbGV0IGJlZ2luID0gZWRpdC5vZmZzZXQ7XG4gICAgbGV0IGVuZCA9IGVkaXQub2Zmc2V0ICsgZWRpdC5jb250ZW50Lmxlbmd0aDtcbiAgICBpZiAoZWRpdC5sZW5ndGggPT09IDAgfHwgZWRpdC5jb250ZW50Lmxlbmd0aCA9PT0gMCkgeyAvLyBpbnNlcnQgb3IgcmVtb3ZlXG4gICAgICAgIHdoaWxlIChiZWdpbiA+IDAgJiYgIWlzRU9MKG5ld1RleHQsIGJlZ2luIC0gMSkpIHtcbiAgICAgICAgICAgIGJlZ2luLS07XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGVuZCA8IG5ld1RleHQubGVuZ3RoICYmICFpc0VPTChuZXdUZXh0LCBlbmQpKSB7XG4gICAgICAgICAgICBlbmQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlZGl0cyA9IGZvcm1hdChuZXdUZXh0LCB7IG9mZnNldDogYmVnaW4sIGxlbmd0aDogZW5kIC0gYmVnaW4gfSwgeyAuLi5vcHRpb25zLmZvcm1hdHRpbmdPcHRpb25zLCBrZWVwTGluZXM6IGZhbHNlIH0pO1xuICAgIC8vIGFwcGx5IHRoZSBmb3JtYXR0aW5nIGVkaXRzIGFuZCB0cmFjayB0aGUgYmVnaW4gYW5kIGVuZCBvZmZzZXRzIG9mIHRoZSBjaGFuZ2VzXG4gICAgZm9yIChsZXQgaSA9IGVkaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBlZGl0c1tpXTtcbiAgICAgICAgbmV3VGV4dCA9IGFwcGx5RWRpdChuZXdUZXh0LCBlZGl0KTtcbiAgICAgICAgYmVnaW4gPSBNYXRoLm1pbihiZWdpbiwgZWRpdC5vZmZzZXQpO1xuICAgICAgICBlbmQgPSBNYXRoLm1heChlbmQsIGVkaXQub2Zmc2V0ICsgZWRpdC5sZW5ndGgpO1xuICAgICAgICBlbmQgKz0gZWRpdC5jb250ZW50Lmxlbmd0aCAtIGVkaXQubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgYSBzaW5nbGUgZWRpdCB3aXRoIGFsbCBjaGFuZ2VzXG4gICAgY29uc3QgZWRpdExlbmd0aCA9IHRleHQubGVuZ3RoIC0gKG5ld1RleHQubGVuZ3RoIC0gZW5kKSAtIGJlZ2luO1xuICAgIHJldHVybiBbeyBvZmZzZXQ6IGJlZ2luLCBsZW5ndGg6IGVkaXRMZW5ndGgsIGNvbnRlbnQ6IG5ld1RleHQuc3Vic3RyaW5nKGJlZ2luLCBlbmQpIH1dO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWRpdCh0ZXh0LCBlZGl0KSB7XG4gICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIGVkaXQub2Zmc2V0KSArIGVkaXQuY29udGVudCArIHRleHQuc3Vic3RyaW5nKGVkaXQub2Zmc2V0ICsgZWRpdC5sZW5ndGgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzV1ModGV4dCwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICdcXHJcXG4gXFx0Jy5pbmRleE9mKHRleHQuY2hhckF0KG9mZnNldCkpICE9PSAtMTtcbn1cbiIsICIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIGZvcm1hdHRlciBmcm9tICcuL2ltcGwvZm9ybWF0JztcbmltcG9ydCAqIGFzIGVkaXQgZnJvbSAnLi9pbXBsL2VkaXQnO1xuaW1wb3J0ICogYXMgc2Nhbm5lciBmcm9tICcuL2ltcGwvc2Nhbm5lcic7XG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSAnLi9pbXBsL3BhcnNlcic7XG4vKipcbiAqIENyZWF0ZXMgYSBKU09OIHNjYW5uZXIgb24gdGhlIGdpdmVuIHRleHQuXG4gKiBJZiBpZ25vcmVUcml2aWEgaXMgc2V0LCB3aGl0ZXNwYWNlcyBvciBjb21tZW50cyBhcmUgaWdub3JlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjYW5uZXIgPSBzY2FubmVyLmNyZWF0ZVNjYW5uZXI7XG5leHBvcnQgdmFyIFNjYW5FcnJvcjtcbihmdW5jdGlvbiAoU2NhbkVycm9yKSB7XG4gICAgU2NhbkVycm9yW1NjYW5FcnJvcltcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFNjYW5FcnJvcltTY2FuRXJyb3JbXCJVbmV4cGVjdGVkRW5kT2ZDb21tZW50XCJdID0gMV0gPSBcIlVuZXhwZWN0ZWRFbmRPZkNvbW1lbnRcIjtcbiAgICBTY2FuRXJyb3JbU2NhbkVycm9yW1wiVW5leHBlY3RlZEVuZE9mU3RyaW5nXCJdID0gMl0gPSBcIlVuZXhwZWN0ZWRFbmRPZlN0cmluZ1wiO1xuICAgIFNjYW5FcnJvcltTY2FuRXJyb3JbXCJVbmV4cGVjdGVkRW5kT2ZOdW1iZXJcIl0gPSAzXSA9IFwiVW5leHBlY3RlZEVuZE9mTnVtYmVyXCI7XG4gICAgU2NhbkVycm9yW1NjYW5FcnJvcltcIkludmFsaWRVbmljb2RlXCJdID0gNF0gPSBcIkludmFsaWRVbmljb2RlXCI7XG4gICAgU2NhbkVycm9yW1NjYW5FcnJvcltcIkludmFsaWRFc2NhcGVDaGFyYWN0ZXJcIl0gPSA1XSA9IFwiSW52YWxpZEVzY2FwZUNoYXJhY3RlclwiO1xuICAgIFNjYW5FcnJvcltTY2FuRXJyb3JbXCJJbnZhbGlkQ2hhcmFjdGVyXCJdID0gNl0gPSBcIkludmFsaWRDaGFyYWN0ZXJcIjtcbn0pKFNjYW5FcnJvciB8fCAoU2NhbkVycm9yID0ge30pKTtcbmV4cG9ydCB2YXIgU3ludGF4S2luZDtcbihmdW5jdGlvbiAoU3ludGF4S2luZCkge1xuICAgIFN5bnRheEtpbmRbU3ludGF4S2luZFtcIk9wZW5CcmFjZVRva2VuXCJdID0gMV0gPSBcIk9wZW5CcmFjZVRva2VuXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiQ2xvc2VCcmFjZVRva2VuXCJdID0gMl0gPSBcIkNsb3NlQnJhY2VUb2tlblwiO1xuICAgIFN5bnRheEtpbmRbU3ludGF4S2luZFtcIk9wZW5CcmFja2V0VG9rZW5cIl0gPSAzXSA9IFwiT3BlbkJyYWNrZXRUb2tlblwiO1xuICAgIFN5bnRheEtpbmRbU3ludGF4S2luZFtcIkNsb3NlQnJhY2tldFRva2VuXCJdID0gNF0gPSBcIkNsb3NlQnJhY2tldFRva2VuXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiQ29tbWFUb2tlblwiXSA9IDVdID0gXCJDb21tYVRva2VuXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiQ29sb25Ub2tlblwiXSA9IDZdID0gXCJDb2xvblRva2VuXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiTnVsbEtleXdvcmRcIl0gPSA3XSA9IFwiTnVsbEtleXdvcmRcIjtcbiAgICBTeW50YXhLaW5kW1N5bnRheEtpbmRbXCJUcnVlS2V5d29yZFwiXSA9IDhdID0gXCJUcnVlS2V5d29yZFwiO1xuICAgIFN5bnRheEtpbmRbU3ludGF4S2luZFtcIkZhbHNlS2V5d29yZFwiXSA9IDldID0gXCJGYWxzZUtleXdvcmRcIjtcbiAgICBTeW50YXhLaW5kW1N5bnRheEtpbmRbXCJTdHJpbmdMaXRlcmFsXCJdID0gMTBdID0gXCJTdHJpbmdMaXRlcmFsXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiTnVtZXJpY0xpdGVyYWxcIl0gPSAxMV0gPSBcIk51bWVyaWNMaXRlcmFsXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiTGluZUNvbW1lbnRUcml2aWFcIl0gPSAxMl0gPSBcIkxpbmVDb21tZW50VHJpdmlhXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiQmxvY2tDb21tZW50VHJpdmlhXCJdID0gMTNdID0gXCJCbG9ja0NvbW1lbnRUcml2aWFcIjtcbiAgICBTeW50YXhLaW5kW1N5bnRheEtpbmRbXCJMaW5lQnJlYWtUcml2aWFcIl0gPSAxNF0gPSBcIkxpbmVCcmVha1RyaXZpYVwiO1xuICAgIFN5bnRheEtpbmRbU3ludGF4S2luZFtcIlRyaXZpYVwiXSA9IDE1XSA9IFwiVHJpdmlhXCI7XG4gICAgU3ludGF4S2luZFtTeW50YXhLaW5kW1wiVW5rbm93blwiXSA9IDE2XSA9IFwiVW5rbm93blwiO1xuICAgIFN5bnRheEtpbmRbU3ludGF4S2luZFtcIkVPRlwiXSA9IDE3XSA9IFwiRU9GXCI7XG59KShTeW50YXhLaW5kIHx8IChTeW50YXhLaW5kID0ge30pKTtcbi8qKlxuICogRm9yIGEgZ2l2ZW4gb2Zmc2V0LCBldmFsdWF0ZSB0aGUgbG9jYXRpb24gaW4gdGhlIEpTT04gZG9jdW1lbnQuIEVhY2ggc2VnbWVudCBpbiB0aGUgbG9jYXRpb24gcGF0aCBpcyBlaXRoZXIgYSBwcm9wZXJ0eSBuYW1lIG9yIGFuIGFycmF5IGluZGV4LlxuICovXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSBwYXJzZXIuZ2V0TG9jYXRpb247XG4vKipcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dCBhbmQgcmV0dXJucyB0aGUgb2JqZWN0IHRoZSBKU09OIGNvbnRlbnQgcmVwcmVzZW50cy4gT24gaW52YWxpZCBpbnB1dCwgdGhlIHBhcnNlciB0cmllcyB0byBiZSBhcyBmYXVsdCB0b2xlcmFudCBhcyBwb3NzaWJsZSwgYnV0IHN0aWxsIHJldHVybiBhIHJlc3VsdC5cbiAqIFRoZXJlZm9yZSwgYWx3YXlzIGNoZWNrIHRoZSBlcnJvcnMgbGlzdCB0byBmaW5kIG91dCBpZiB0aGUgaW5wdXQgd2FzIHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2UgPSBwYXJzZXIucGFyc2U7XG4vKipcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dCBhbmQgcmV0dXJucyBhIHRyZWUgcmVwcmVzZW50YXRpb24gdGhlIEpTT04gY29udGVudC4gT24gaW52YWxpZCBpbnB1dCwgdGhlIHBhcnNlciB0cmllcyB0byBiZSBhcyBmYXVsdCB0b2xlcmFudCBhcyBwb3NzaWJsZSwgYnV0IHN0aWxsIHJldHVybiBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlVHJlZSA9IHBhcnNlci5wYXJzZVRyZWU7XG4vKipcbiAqIEZpbmRzIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBwYXRoIGluIGEgSlNPTiBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTm9kZUF0TG9jYXRpb24gPSBwYXJzZXIuZmluZE5vZGVBdExvY2F0aW9uO1xuLyoqXG4gKiBGaW5kcyB0aGUgaW5uZXJtb3N0IG5vZGUgYXQgdGhlIGdpdmVuIG9mZnNldC4gSWYgaW5jbHVkZVJpZ2h0Qm91bmQgaXMgc2V0LCBhbHNvIGZpbmRzIG5vZGVzIHRoYXQgZW5kIGF0IHRoZSBnaXZlbiBvZmZzZXQuXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kTm9kZUF0T2Zmc2V0ID0gcGFyc2VyLmZpbmROb2RlQXRPZmZzZXQ7XG4vKipcbiAqIEdldHMgdGhlIEpTT04gcGF0aCBvZiB0aGUgZ2l2ZW4gSlNPTiBET00gbm9kZVxuICovXG5leHBvcnQgY29uc3QgZ2V0Tm9kZVBhdGggPSBwYXJzZXIuZ2V0Tm9kZVBhdGg7XG4vKipcbiAqIEV2YWx1YXRlcyB0aGUgSmF2YVNjcmlwdCBvYmplY3Qgb2YgdGhlIGdpdmVuIEpTT04gRE9NIG5vZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE5vZGVWYWx1ZSA9IHBhcnNlci5nZXROb2RlVmFsdWU7XG4vKipcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dCBhbmQgaW52b2tlcyB0aGUgdmlzaXRvciBmdW5jdGlvbnMgZm9yIGVhY2ggb2JqZWN0LCBhcnJheSBhbmQgbGl0ZXJhbCByZWFjaGVkLlxuICovXG5leHBvcnQgY29uc3QgdmlzaXQgPSBwYXJzZXIudmlzaXQ7XG4vKipcbiAqIFRha2VzIEpTT04gd2l0aCBKYXZhU2NyaXB0LXN0eWxlIGNvbW1lbnRzIGFuZCByZW1vdmVcbiAqIHRoZW0uIE9wdGlvbmFsbHkgcmVwbGFjZXMgZXZlcnkgbm9uZS1uZXdsaW5lIGNoYXJhY3RlclxuICogb2YgY29tbWVudHMgd2l0aCBhIHJlcGxhY2VDaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmlwQ29tbWVudHMgPSBwYXJzZXIuc3RyaXBDb21tZW50cztcbmV4cG9ydCB2YXIgUGFyc2VFcnJvckNvZGU7XG4oZnVuY3Rpb24gKFBhcnNlRXJyb3JDb2RlKSB7XG4gICAgUGFyc2VFcnJvckNvZGVbUGFyc2VFcnJvckNvZGVbXCJJbnZhbGlkU3ltYm9sXCJdID0gMV0gPSBcIkludmFsaWRTeW1ib2xcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIkludmFsaWROdW1iZXJGb3JtYXRcIl0gPSAyXSA9IFwiSW52YWxpZE51bWJlckZvcm1hdFwiO1xuICAgIFBhcnNlRXJyb3JDb2RlW1BhcnNlRXJyb3JDb2RlW1wiUHJvcGVydHlOYW1lRXhwZWN0ZWRcIl0gPSAzXSA9IFwiUHJvcGVydHlOYW1lRXhwZWN0ZWRcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIlZhbHVlRXhwZWN0ZWRcIl0gPSA0XSA9IFwiVmFsdWVFeHBlY3RlZFwiO1xuICAgIFBhcnNlRXJyb3JDb2RlW1BhcnNlRXJyb3JDb2RlW1wiQ29sb25FeHBlY3RlZFwiXSA9IDVdID0gXCJDb2xvbkV4cGVjdGVkXCI7XG4gICAgUGFyc2VFcnJvckNvZGVbUGFyc2VFcnJvckNvZGVbXCJDb21tYUV4cGVjdGVkXCJdID0gNl0gPSBcIkNvbW1hRXhwZWN0ZWRcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIkNsb3NlQnJhY2VFeHBlY3RlZFwiXSA9IDddID0gXCJDbG9zZUJyYWNlRXhwZWN0ZWRcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIkNsb3NlQnJhY2tldEV4cGVjdGVkXCJdID0gOF0gPSBcIkNsb3NlQnJhY2tldEV4cGVjdGVkXCI7XG4gICAgUGFyc2VFcnJvckNvZGVbUGFyc2VFcnJvckNvZGVbXCJFbmRPZkZpbGVFeHBlY3RlZFwiXSA9IDldID0gXCJFbmRPZkZpbGVFeHBlY3RlZFwiO1xuICAgIFBhcnNlRXJyb3JDb2RlW1BhcnNlRXJyb3JDb2RlW1wiSW52YWxpZENvbW1lbnRUb2tlblwiXSA9IDEwXSA9IFwiSW52YWxpZENvbW1lbnRUb2tlblwiO1xuICAgIFBhcnNlRXJyb3JDb2RlW1BhcnNlRXJyb3JDb2RlW1wiVW5leHBlY3RlZEVuZE9mQ29tbWVudFwiXSA9IDExXSA9IFwiVW5leHBlY3RlZEVuZE9mQ29tbWVudFwiO1xuICAgIFBhcnNlRXJyb3JDb2RlW1BhcnNlRXJyb3JDb2RlW1wiVW5leHBlY3RlZEVuZE9mU3RyaW5nXCJdID0gMTJdID0gXCJVbmV4cGVjdGVkRW5kT2ZTdHJpbmdcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIlVuZXhwZWN0ZWRFbmRPZk51bWJlclwiXSA9IDEzXSA9IFwiVW5leHBlY3RlZEVuZE9mTnVtYmVyXCI7XG4gICAgUGFyc2VFcnJvckNvZGVbUGFyc2VFcnJvckNvZGVbXCJJbnZhbGlkVW5pY29kZVwiXSA9IDE0XSA9IFwiSW52YWxpZFVuaWNvZGVcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIkludmFsaWRFc2NhcGVDaGFyYWN0ZXJcIl0gPSAxNV0gPSBcIkludmFsaWRFc2NhcGVDaGFyYWN0ZXJcIjtcbiAgICBQYXJzZUVycm9yQ29kZVtQYXJzZUVycm9yQ29kZVtcIkludmFsaWRDaGFyYWN0ZXJcIl0gPSAxNl0gPSBcIkludmFsaWRDaGFyYWN0ZXJcIjtcbn0pKFBhcnNlRXJyb3JDb2RlIHx8IChQYXJzZUVycm9yQ29kZSA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gcHJpbnRQYXJzZUVycm9yQ29kZShjb2RlKSB7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMSAvKiBQYXJzZUVycm9yQ29kZS5JbnZhbGlkU3ltYm9sICovOiByZXR1cm4gJ0ludmFsaWRTeW1ib2wnO1xuICAgICAgICBjYXNlIDIgLyogUGFyc2VFcnJvckNvZGUuSW52YWxpZE51bWJlckZvcm1hdCAqLzogcmV0dXJuICdJbnZhbGlkTnVtYmVyRm9ybWF0JztcbiAgICAgICAgY2FzZSAzIC8qIFBhcnNlRXJyb3JDb2RlLlByb3BlcnR5TmFtZUV4cGVjdGVkICovOiByZXR1cm4gJ1Byb3BlcnR5TmFtZUV4cGVjdGVkJztcbiAgICAgICAgY2FzZSA0IC8qIFBhcnNlRXJyb3JDb2RlLlZhbHVlRXhwZWN0ZWQgKi86IHJldHVybiAnVmFsdWVFeHBlY3RlZCc7XG4gICAgICAgIGNhc2UgNSAvKiBQYXJzZUVycm9yQ29kZS5Db2xvbkV4cGVjdGVkICovOiByZXR1cm4gJ0NvbG9uRXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDYgLyogUGFyc2VFcnJvckNvZGUuQ29tbWFFeHBlY3RlZCAqLzogcmV0dXJuICdDb21tYUV4cGVjdGVkJztcbiAgICAgICAgY2FzZSA3IC8qIFBhcnNlRXJyb3JDb2RlLkNsb3NlQnJhY2VFeHBlY3RlZCAqLzogcmV0dXJuICdDbG9zZUJyYWNlRXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDggLyogUGFyc2VFcnJvckNvZGUuQ2xvc2VCcmFja2V0RXhwZWN0ZWQgKi86IHJldHVybiAnQ2xvc2VCcmFja2V0RXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDkgLyogUGFyc2VFcnJvckNvZGUuRW5kT2ZGaWxlRXhwZWN0ZWQgKi86IHJldHVybiAnRW5kT2ZGaWxlRXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDEwIC8qIFBhcnNlRXJyb3JDb2RlLkludmFsaWRDb21tZW50VG9rZW4gKi86IHJldHVybiAnSW52YWxpZENvbW1lbnRUb2tlbic7XG4gICAgICAgIGNhc2UgMTEgLyogUGFyc2VFcnJvckNvZGUuVW5leHBlY3RlZEVuZE9mQ29tbWVudCAqLzogcmV0dXJuICdVbmV4cGVjdGVkRW5kT2ZDb21tZW50JztcbiAgICAgICAgY2FzZSAxMiAvKiBQYXJzZUVycm9yQ29kZS5VbmV4cGVjdGVkRW5kT2ZTdHJpbmcgKi86IHJldHVybiAnVW5leHBlY3RlZEVuZE9mU3RyaW5nJztcbiAgICAgICAgY2FzZSAxMyAvKiBQYXJzZUVycm9yQ29kZS5VbmV4cGVjdGVkRW5kT2ZOdW1iZXIgKi86IHJldHVybiAnVW5leHBlY3RlZEVuZE9mTnVtYmVyJztcbiAgICAgICAgY2FzZSAxNCAvKiBQYXJzZUVycm9yQ29kZS5JbnZhbGlkVW5pY29kZSAqLzogcmV0dXJuICdJbnZhbGlkVW5pY29kZSc7XG4gICAgICAgIGNhc2UgMTUgLyogUGFyc2VFcnJvckNvZGUuSW52YWxpZEVzY2FwZUNoYXJhY3RlciAqLzogcmV0dXJuICdJbnZhbGlkRXNjYXBlQ2hhcmFjdGVyJztcbiAgICAgICAgY2FzZSAxNiAvKiBQYXJzZUVycm9yQ29kZS5JbnZhbGlkQ2hhcmFjdGVyICovOiByZXR1cm4gJ0ludmFsaWRDaGFyYWN0ZXInO1xuICAgIH1cbiAgICByZXR1cm4gJzx1bmtub3duIFBhcnNlRXJyb3JDb2RlPic7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBlZGl0IG9wZXJhdGlvbnMgbmVlZGVkIHRvIGZvcm1hdCBhIEpTT04gZG9jdW1lbnQuXG4gKlxuICogQHBhcmFtIGRvY3VtZW50VGV4dCBUaGUgaW5wdXQgdGV4dFxuICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSB0byBmb3JtYXQgb3IgYHVuZGVmaW5lZGAgdG8gZm9ybWF0IHRoZSBmdWxsIGNvbnRlbnRcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBmb3JtYXR0aW5nIG9wdGlvbnNcbiAqIEByZXR1cm5zIFRoZSBlZGl0IG9wZXJhdGlvbnMgZGVzY3JpYmluZyB0aGUgZm9ybWF0dGluZyBjaGFuZ2VzIHRvIHRoZSBvcmlnaW5hbCBkb2N1bWVudCBmb2xsb3dpbmcgdGhlIGZvcm1hdCBkZXNjcmliZWQgaW4ge0BsaW5rY29kZSBFZGl0UmVzdWx0fS5cbiAqIFRvIGFwcGx5IHRoZSBlZGl0IG9wZXJhdGlvbnMgdG8gdGhlIGlucHV0LCB1c2Uge0BsaW5rY29kZSBhcHBseUVkaXRzfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkb2N1bWVudFRleHQsIHJhbmdlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZG9jdW1lbnRUZXh0LCByYW5nZSwgb3B0aW9ucyk7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBlZGl0IG9wZXJhdGlvbnMgbmVlZGVkIHRvIG1vZGlmeSBhIHZhbHVlIGluIHRoZSBKU09OIGRvY3VtZW50LlxuICpcbiAqIEBwYXJhbSBkb2N1bWVudFRleHQgVGhlIGlucHV0IHRleHRcbiAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIG9mIHRoZSB2YWx1ZSB0byBjaGFuZ2UuIFRoZSBwYXRoIHJlcHJlc2VudHMgZWl0aGVyIHRvIHRoZSBkb2N1bWVudCByb290LCBhIHByb3BlcnR5IG9yIGFuIGFycmF5IGl0ZW0uXG4gKiBJZiB0aGUgcGF0aCBwb2ludHMgdG8gYW4gbm9uLWV4aXN0aW5nIHByb3BlcnR5IG9yIGl0ZW0sIGl0IHdpbGwgYmUgY3JlYXRlZC5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgc3BlY2lmaWVkIHByb3BlcnR5IG9yIGl0ZW0uIElmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsXG4gKiB0aGUgcHJvcGVydHkgb3IgaXRlbSB3aWxsIGJlIHJlbW92ZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zXG4gKiBAcmV0dXJucyBUaGUgZWRpdCBvcGVyYXRpb25zIGRlc2NyaWJpbmcgdGhlIGNoYW5nZXMgdG8gdGhlIG9yaWdpbmFsIGRvY3VtZW50LCBmb2xsb3dpbmcgdGhlIGZvcm1hdCBkZXNjcmliZWQgaW4ge0BsaW5rY29kZSBFZGl0UmVzdWx0fS5cbiAqIFRvIGFwcGx5IHRoZSBlZGl0IG9wZXJhdGlvbnMgdG8gdGhlIGlucHV0LCB1c2Uge0BsaW5rY29kZSBhcHBseUVkaXRzfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeSh0ZXh0LCBwYXRoLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBlZGl0LnNldFByb3BlcnR5KHRleHQsIHBhdGgsIHZhbHVlLCBvcHRpb25zKTtcbn1cbi8qKlxuICogQXBwbGllcyBlZGl0cyB0byBhbiBpbnB1dCBzdHJpbmcuXG4gKiBAcGFyYW0gdGV4dCBUaGUgaW5wdXQgdGV4dFxuICogQHBhcmFtIGVkaXRzIEVkaXQgb3BlcmF0aW9ucyBmb2xsb3dpbmcgdGhlIGZvcm1hdCBkZXNjcmliZWQgaW4ge0BsaW5rY29kZSBFZGl0UmVzdWx0fS5cbiAqIEByZXR1cm5zIFRoZSB0ZXh0IHdpdGggdGhlIGFwcGxpZWQgZWRpdHMuXG4gKiBAdGhyb3dzIEFuIGVycm9yIGlmIHRoZSBlZGl0IG9wZXJhdGlvbnMgYXJlIG5vdCB3ZWxsLWZvcm1lZCBhcyBkZXNjcmliZWQgaW4ge0BsaW5rY29kZSBFZGl0UmVzdWx0fS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWRpdHModGV4dCwgZWRpdHMpIHtcbiAgICBsZXQgc29ydGVkRWRpdHMgPSBlZGl0cy5zbGljZSgwKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpZmYgPSBhLm9mZnNldCAtIGIub2Zmc2V0O1xuICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfSk7XG4gICAgbGV0IGxhc3RNb2RpZmllZE9mZnNldCA9IHRleHQubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSBzb3J0ZWRFZGl0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZSA9IHNvcnRlZEVkaXRzW2ldO1xuICAgICAgICBpZiAoZS5vZmZzZXQgKyBlLmxlbmd0aCA8PSBsYXN0TW9kaWZpZWRPZmZzZXQpIHtcbiAgICAgICAgICAgIHRleHQgPSBlZGl0LmFwcGx5RWRpdCh0ZXh0LCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3ZlcmxhcHBpbmcgZWRpdCcpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RNb2RpZmllZE9mZnNldCA9IGUub2Zmc2V0O1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbn1cbiIsICJpbXBvcnQgeyBvcGVuLCByZWFkRmlsZSwgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHtcbiAgYXBwbHlFZGl0cyxcbiAgbW9kaWZ5LFxuICBwYXJzZSBhcyBwYXJzZUpzb25jLFxufSBmcm9tICdqc29uYy1wYXJzZXIvbGliL2VzbS9tYWluLmpzJ1xuaW1wb3J0IHsgc3RyaXBCT00gfSBmcm9tICcuL2pzb25SZWFkLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmltcG9ydCB7IG1lbW9pemVXaXRoTFJVIH0gZnJvbSAnLi9tZW1vaXplLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4vc2xvd09wZXJhdGlvbnMuanMnXG5cbnR5cGUgQ2FjaGVkUGFyc2UgPSB7IG9rOiB0cnVlOyB2YWx1ZTogdW5rbm93biB9IHwgeyBvazogZmFsc2UgfVxuXG4vLyBNZW1vaXplZCBpbm5lciBwYXJzZS4gVXNlcyBhIGRpc2NyaW1pbmF0ZWQtdW5pb24gd3JhcHBlciBiZWNhdXNlOlxuLy8gMS4gbWVtb2l6ZVdpdGhMUlUgcmVxdWlyZXMgTm9uTnVsbGFibGU8dW5rbm93bj4sIGJ1dCBKU09OLnBhcnNlIGNhbiByZXR1cm5cbi8vICAgIG51bGwgKGUuZy4gSlNPTi5wYXJzZShcIm51bGxcIikpLlxuLy8gMi4gSW52YWxpZCBKU09OIG11c3QgYWxzbyBiZSBjYWNoZWQgXHUyMDE0IG90aGVyd2lzZSByZXBlYXRlZCBjYWxscyB3aXRoIHRoZSBzYW1lXG4vLyAgICBiYWQgc3RyaW5nIHJlLXBhcnNlIGFuZCByZS1sb2cgZXZlcnkgdGltZSAoYmVoYXZpb3JhbCByZWdyZXNzaW9uIHZzIHRoZVxuLy8gICAgb2xkIGxvZGFzaCBtZW1vaXplIHdoaWNoIHdyYXBwZWQgdGhlIGVudGlyZSB0cnkvY2F0Y2gpLlxuLy8gQm91bmRlZCB0byA1MCBlbnRyaWVzIHRvIHByZXZlbnQgdW5ib3VuZGVkIG1lbW9yeSBncm93dGggXHUyMDE0IHByZXZpb3VzbHkgdGhpc1xuLy8gdXNlZCBsb2Rhc2ggbWVtb2l6ZSB3aGljaCBjYWNoZWQgZXZlcnkgdW5pcXVlIEpTT04gc3RyaW5nIGZvcmV2ZXIgKHNldHRpbmdzLFxuLy8gLm1jcC5qc29uLCBub3RlYm9va3MsIHRvb2wgcmVzdWx0cyksIGNhdXNpbmcgYSBzaWduaWZpY2FudCBtZW1vcnkgbGVhay5cbi8vIE5vdGU6IHNob3VsZExvZ0Vycm9yIGlzIGludGVudGlvbmFsbHkgZXhjbHVkZWQgZnJvbSB0aGUgY2FjaGUga2V5IChtYXRjaGluZ1xuLy8gbG9kYXNoIG1lbW9pemUgZGVmYXVsdCByZXNvbHZlciA9IGZpcnN0IGFyZyBvbmx5KS5cbi8vIFNraXAgY2FjaGluZyBhYm92ZSB0aGlzIHNpemUgXHUyMDE0IHRoZSBMUlUgc3RvcmVzIHRoZSBmdWxsIHN0cmluZyBhcyB0aGUga2V5LFxuLy8gc28gYSAyMDBLQiBjb25maWcgZmlsZSB3b3VsZCBwaW4gfjEwTUIgaW4gI2tleUxpc3QgYWNyb3NzIDUwIHNsb3RzLiBMYXJnZVxuLy8gaW5wdXRzIGxpa2Ugfi8uY2xhdWRlLmpzb24gYWxzbyBjaGFuZ2UgYmV0d2VlbiByZWFkcyAobnVtU3RhcnR1cHMgYnVtcHMgb25cbi8vIGV2ZXJ5IENDIHN0YXJ0dXApLCBzbyB0aGUgY2FjaGUgbmV2ZXIgaGl0cyBhbnl3YXkuXG5jb25zdCBQQVJTRV9DQUNIRV9NQVhfS0VZX0JZVEVTID0gOCAqIDEwMjRcblxuZnVuY3Rpb24gcGFyc2VKU09OVW5jYWNoZWQoanNvbjogc3RyaW5nLCBzaG91bGRMb2dFcnJvcjogYm9vbGVhbik6IENhY2hlZFBhcnNlIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBvazogdHJ1ZSwgdmFsdWU6IEpTT04ucGFyc2Uoc3RyaXBCT00oanNvbikpIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChzaG91bGRMb2dFcnJvcikge1xuICAgICAgbG9nRXJyb3IoZSlcbiAgICB9XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlIH1cbiAgfVxufVxuXG5jb25zdCBwYXJzZUpTT05DYWNoZWQgPSBtZW1vaXplV2l0aExSVShwYXJzZUpTT05VbmNhY2hlZCwganNvbiA9PiBqc29uLCA1MClcblxuLy8gSW1wb3J0YW50OiBtZW1vaXplZCBmb3IgcGVyZm9ybWFuY2UgKExSVS1ib3VuZGVkIHRvIDUwIGVudHJpZXMsIHNtYWxsIGlucHV0cyBvbmx5KS5cbmV4cG9ydCBjb25zdCBzYWZlUGFyc2VKU09OID0gT2JqZWN0LmFzc2lnbihcbiAgZnVuY3Rpb24gc2FmZVBhcnNlSlNPTihcbiAgICBqc29uOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIHNob3VsZExvZ0Vycm9yOiBib29sZWFuID0gdHJ1ZSxcbiAgKTogdW5rbm93biB7XG4gICAgaWYgKCFqc29uKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICBqc29uLmxlbmd0aCA+IFBBUlNFX0NBQ0hFX01BWF9LRVlfQllURVNcbiAgICAgICAgPyBwYXJzZUpTT05VbmNhY2hlZChqc29uLCBzaG91bGRMb2dFcnJvcilcbiAgICAgICAgOiBwYXJzZUpTT05DYWNoZWQoanNvbiwgc2hvdWxkTG9nRXJyb3IpXG4gICAgcmV0dXJuIHJlc3VsdC5vayA/IHJlc3VsdC52YWx1ZSA6IG51bGxcbiAgfSxcbiAgeyBjYWNoZTogcGFyc2VKU09OQ2FjaGVkLmNhY2hlIH0sXG4pXG5cbi8qKlxuICogU2FmZWx5IHBhcnNlIEpTT04gd2l0aCBjb21tZW50cyAoanNvbmMpLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIFZTIENvZGUgY29uZmlndXJhdGlvbiBmaWxlcyBsaWtlIGtleWJpbmRpbmdzLmpzb25cbiAqIHdoaWNoIHN1cHBvcnQgY29tbWVudHMgYW5kIG90aGVyIGpzb25jIGZlYXR1cmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlSlNPTkMoanNvbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHVua25vd24ge1xuICBpZiAoIWpzb24pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHRyeSB7XG4gICAgLy8gU3RyaXAgQk9NIGJlZm9yZSBwYXJzaW5nIC0gUG93ZXJTaGVsbCA1LnggYWRkcyBCT00gdG8gVVRGLTggZmlsZXNcbiAgICByZXR1cm4gcGFyc2VKc29uYyhzdHJpcEJPTShqc29uKSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ0Vycm9yKGUpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIE1vZGlmeSBhIGpzb25jIHN0cmluZyBieSBhZGRpbmcgYSBuZXcgaXRlbSB0byBhbiBhcnJheSwgcHJlc2VydmluZyBjb21tZW50cyBhbmQgZm9ybWF0dGluZy5cbiAqIEBwYXJhbSBjb250ZW50IFRoZSBqc29uYyBzdHJpbmcgdG8gbW9kaWZ5XG4gKiBAcGFyYW0gbmV3SXRlbSBUaGUgbmV3IGl0ZW0gdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHJldHVybnMgVGhlIG1vZGlmaWVkIGpzb25jIHN0cmluZ1xuICovXG4vKipcbiAqIEJ1bi5KU09OTC5wYXJzZUNodW5rIGlmIGF2YWlsYWJsZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICogU3VwcG9ydHMgYm90aCBzdHJpbmdzIGFuZCBCdWZmZXJzLCBtaW5pbWl6aW5nIG1lbW9yeSB1c2FnZSBhbmQgY29waWVzLlxuICogQWxzbyBoYW5kbGVzIEJPTSBzdHJpcHBpbmcgaW50ZXJuYWxseS5cbiAqL1xudHlwZSBCdW5KU09OTFBhcnNlQ2h1bmsgPSAoXG4gIGRhdGE6IHN0cmluZyB8IEJ1ZmZlcixcbiAgb2Zmc2V0PzogbnVtYmVyLFxuKSA9PiB7IHZhbHVlczogdW5rbm93bltdOyBlcnJvcjogbnVsbCB8IEVycm9yOyByZWFkOiBudW1iZXI7IGRvbmU6IGJvb2xlYW4gfVxuXG5jb25zdCBidW5KU09OTFBhcnNlOiBCdW5KU09OTFBhcnNlQ2h1bmsgfCBmYWxzZSA9ICgoKSA9PiB7XG4gIGlmICh0eXBlb2YgQnVuID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IGIgPSBCdW4gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29uc3QganNvbmwgPSBiLkpTT05MIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkXG4gIGlmICghanNvbmw/LnBhcnNlQ2h1bmspIHJldHVybiBmYWxzZVxuICByZXR1cm4ganNvbmwucGFyc2VDaHVuayBhcyBCdW5KU09OTFBhcnNlQ2h1bmtcbn0pKClcblxuZnVuY3Rpb24gcGFyc2VKU09OTEJ1bjxUPihkYXRhOiBzdHJpbmcgfCBCdWZmZXIpOiBUW10ge1xuICBjb25zdCBwYXJzZSA9IGJ1bkpTT05MUGFyc2UgYXMgQnVuSlNPTkxQYXJzZUNodW5rXG4gIGNvbnN0IGxlbiA9IGRhdGEubGVuZ3RoXG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlKGRhdGEpXG4gIGlmICghcmVzdWx0LmVycm9yIHx8IHJlc3VsdC5kb25lIHx8IHJlc3VsdC5yZWFkID49IGxlbikge1xuICAgIHJldHVybiByZXN1bHQudmFsdWVzIGFzIFRbXVxuICB9XG4gIC8vIEhhZCBhbiBlcnJvciBtaWQtc3RyZWFtIFx1MjAxNCBjb2xsZWN0IHdoYXQgd2UgZ290IGFuZCBrZWVwIGdvaW5nXG4gIGxldCB2YWx1ZXMgPSByZXN1bHQudmFsdWVzIGFzIFRbXVxuICBsZXQgb2Zmc2V0ID0gcmVzdWx0LnJlYWRcbiAgd2hpbGUgKG9mZnNldCA8IGxlbikge1xuICAgIGNvbnN0IG5ld2xpbmVJbmRleCA9XG4gICAgICB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBkYXRhLmluZGV4T2YoJ1xcbicsIG9mZnNldClcbiAgICAgICAgOiBkYXRhLmluZGV4T2YoMHgwYSwgb2Zmc2V0KVxuICAgIGlmIChuZXdsaW5lSW5kZXggPT09IC0xKSBicmVha1xuICAgIG9mZnNldCA9IG5ld2xpbmVJbmRleCArIDFcbiAgICBjb25zdCBuZXh0ID0gcGFyc2UoZGF0YSwgb2Zmc2V0KVxuICAgIGlmIChuZXh0LnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KG5leHQudmFsdWVzIGFzIFRbXSlcbiAgICB9XG4gICAgaWYgKCFuZXh0LmVycm9yIHx8IG5leHQuZG9uZSB8fCBuZXh0LnJlYWQgPj0gbGVuKSBicmVha1xuICAgIG9mZnNldCA9IG5leHQucmVhZFxuICB9XG4gIHJldHVybiB2YWx1ZXNcbn1cblxuZnVuY3Rpb24gcGFyc2VKU09OTEJ1ZmZlcjxUPihidWY6IEJ1ZmZlcik6IFRbXSB7XG4gIGNvbnN0IGJ1ZkxlbiA9IGJ1Zi5sZW5ndGhcbiAgbGV0IHN0YXJ0ID0gMFxuXG4gIC8vIFN0cmlwIFVURi04IEJPTSAoRUYgQkIgQkYpXG4gIGlmIChidWZbMF0gPT09IDB4ZWYgJiYgYnVmWzFdID09PSAweGJiICYmIGJ1ZlsyXSA9PT0gMHhiZikge1xuICAgIHN0YXJ0ID0gM1xuICB9XG5cbiAgY29uc3QgcmVzdWx0czogVFtdID0gW11cbiAgd2hpbGUgKHN0YXJ0IDwgYnVmTGVuKSB7XG4gICAgbGV0IGVuZCA9IGJ1Zi5pbmRleE9mKDB4MGEsIHN0YXJ0KVxuICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBidWZMZW5cblxuICAgIGNvbnN0IGxpbmUgPSBidWYudG9TdHJpbmcoJ3V0ZjgnLCBzdGFydCwgZW5kKS50cmltKClcbiAgICBzdGFydCA9IGVuZCArIDFcbiAgICBpZiAoIWxpbmUpIGNvbnRpbnVlXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdHMucHVzaChKU09OLnBhcnNlKGxpbmUpIGFzIFQpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBTa2lwIG1hbGZvcm1lZCBsaW5lc1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0c1xufVxuXG5mdW5jdGlvbiBwYXJzZUpTT05MU3RyaW5nPFQ+KGRhdGE6IHN0cmluZyk6IFRbXSB7XG4gIGNvbnN0IHN0cmlwcGVkID0gc3RyaXBCT00oZGF0YSlcbiAgY29uc3QgbGVuID0gc3RyaXBwZWQubGVuZ3RoXG4gIGxldCBzdGFydCA9IDBcblxuICBjb25zdCByZXN1bHRzOiBUW10gPSBbXVxuICB3aGlsZSAoc3RhcnQgPCBsZW4pIHtcbiAgICBsZXQgZW5kID0gc3RyaXBwZWQuaW5kZXhPZignXFxuJywgc3RhcnQpXG4gICAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGxlblxuXG4gICAgY29uc3QgbGluZSA9IHN0cmlwcGVkLnN1YnN0cmluZyhzdGFydCwgZW5kKS50cmltKClcbiAgICBzdGFydCA9IGVuZCArIDFcbiAgICBpZiAoIWxpbmUpIGNvbnRpbnVlXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdHMucHVzaChKU09OLnBhcnNlKGxpbmUpIGFzIFQpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBTa2lwIG1hbGZvcm1lZCBsaW5lc1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vKipcbiAqIFBhcnNlcyBKU09OTCBkYXRhIGZyb20gYSBzdHJpbmcgb3IgQnVmZmVyLCBza2lwcGluZyBtYWxmb3JtZWQgbGluZXMuXG4gKiBVc2VzIEJ1bi5KU09OTC5wYXJzZUNodW5rIHdoZW4gYXZhaWxhYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UsXG4gKiBmYWxscyBiYWNrIHRvIGluZGV4T2YtYmFzZWQgc2Nhbm5pbmcgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKU09OTDxUPihkYXRhOiBzdHJpbmcgfCBCdWZmZXIpOiBUW10ge1xuICBpZiAoYnVuSlNPTkxQYXJzZSkge1xuICAgIHJldHVybiBwYXJzZUpTT05MQnVuPFQ+KGRhdGEpXG4gIH1cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUpTT05MU3RyaW5nPFQ+KGRhdGEpXG4gIH1cbiAgcmV0dXJuIHBhcnNlSlNPTkxCdWZmZXI8VD4oZGF0YSlcbn1cblxuY29uc3QgTUFYX0pTT05MX1JFQURfQllURVMgPSAxMDAgKiAxMDI0ICogMTAyNFxuXG4vKipcbiAqIFJlYWRzIGFuZCBwYXJzZXMgYSBKU09OTCBmaWxlLCByZWFkaW5nIGF0IG1vc3QgdGhlIGxhc3QgMTAwIE1CLlxuICogRm9yIGZpbGVzIGxhcmdlciB0aGFuIDEwMCBNQiwgcmVhZHMgdGhlIHRhaWwgYW5kIHNraXBzIHRoZSBmaXJzdCBwYXJ0aWFsIGxpbmUuXG4gKlxuICogMTAwIE1CIGlzIG1vcmUgdGhhbiBzdWZmaWNpZW50IHNpbmNlIHRoZSBsb25nZXN0IGNvbnRleHQgd2luZG93IHdlIHN1cHBvcnRcbiAqIGlzIH4yTSB0b2tlbnMsIHdoaWNoIGlzIHdlbGwgdW5kZXIgMTAwIE1CIG9mIEpTT05MLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZEpTT05MRmlsZTxUPihmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxUW10+IHtcbiAgY29uc3QgeyBzaXplIH0gPSBhd2FpdCBzdGF0KGZpbGVQYXRoKVxuICBpZiAoc2l6ZSA8PSBNQVhfSlNPTkxfUkVBRF9CWVRFUykge1xuICAgIHJldHVybiBwYXJzZUpTT05MPFQ+KGF3YWl0IHJlYWRGaWxlKGZpbGVQYXRoKSlcbiAgfVxuICBhd2FpdCB1c2luZyBmZCA9IGF3YWl0IG9wZW4oZmlsZVBhdGgsICdyJylcbiAgY29uc3QgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKE1BWF9KU09OTF9SRUFEX0JZVEVTKVxuICBsZXQgdG90YWxSZWFkID0gMFxuICBjb25zdCBmaWxlT2Zmc2V0ID0gc2l6ZSAtIE1BWF9KU09OTF9SRUFEX0JZVEVTXG4gIHdoaWxlICh0b3RhbFJlYWQgPCBNQVhfSlNPTkxfUkVBRF9CWVRFUykge1xuICAgIGNvbnN0IHsgYnl0ZXNSZWFkIH0gPSBhd2FpdCBmZC5yZWFkKFxuICAgICAgYnVmLFxuICAgICAgdG90YWxSZWFkLFxuICAgICAgTUFYX0pTT05MX1JFQURfQllURVMgLSB0b3RhbFJlYWQsXG4gICAgICBmaWxlT2Zmc2V0ICsgdG90YWxSZWFkLFxuICAgIClcbiAgICBpZiAoYnl0ZXNSZWFkID09PSAwKSBicmVha1xuICAgIHRvdGFsUmVhZCArPSBieXRlc1JlYWRcbiAgfVxuICAvLyBTa2lwIHRoZSBmaXJzdCBwYXJ0aWFsIGxpbmVcbiAgY29uc3QgbmV3bGluZUluZGV4ID0gYnVmLmluZGV4T2YoMHgwYSlcbiAgaWYgKG5ld2xpbmVJbmRleCAhPT0gLTEgJiYgbmV3bGluZUluZGV4IDwgdG90YWxSZWFkIC0gMSkge1xuICAgIHJldHVybiBwYXJzZUpTT05MPFQ+KGJ1Zi5zdWJhcnJheShuZXdsaW5lSW5kZXggKyAxLCB0b3RhbFJlYWQpKVxuICB9XG4gIHJldHVybiBwYXJzZUpTT05MPFQ+KGJ1Zi5zdWJhcnJheSgwLCB0b3RhbFJlYWQpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbVRvSlNPTkNBcnJheShjb250ZW50OiBzdHJpbmcsIG5ld0l0ZW06IHVua25vd24pOiBzdHJpbmcge1xuICB0cnkge1xuICAgIC8vIElmIHRoZSBjb250ZW50IGlzIGVtcHR5IG9yIHdoaXRlc3BhY2UsIGNyZWF0ZSBhIG5ldyBKU09OIGZpbGVcbiAgICBpZiAoIWNvbnRlbnQgfHwgY29udGVudC50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm4ganNvblN0cmluZ2lmeShbbmV3SXRlbV0sIG51bGwsIDQpXG4gICAgfVxuXG4gICAgLy8gU3RyaXAgQk9NIGJlZm9yZSBwYXJzaW5nIC0gUG93ZXJTaGVsbCA1LnggYWRkcyBCT00gdG8gVVRGLTggZmlsZXNcbiAgICBjb25zdCBjbGVhbkNvbnRlbnQgPSBzdHJpcEJPTShjb250ZW50KVxuXG4gICAgLy8gUGFyc2UgdGhlIGNvbnRlbnQgdG8gY2hlY2sgaWYgaXQncyB2YWxpZCBKU09OXG4gICAgY29uc3QgcGFyc2VkQ29udGVudCA9IHBhcnNlSnNvbmMoY2xlYW5Db250ZW50KVxuXG4gICAgLy8gSWYgdGhlIHBhcnNlZCBjb250ZW50IGlzIGEgdmFsaWQgYXJyYXksIG1vZGlmeSBpdFxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZENvbnRlbnQpKSB7XG4gICAgICAvLyBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gcGFyc2VkQ29udGVudC5sZW5ndGhcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIHdlIGFyZSBkZWFsaW5nIHdpdGggYW4gZW1wdHkgYXJyYXlcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSBhcnJheUxlbmd0aCA9PT0gMFxuXG4gICAgICAvLyBJZiBpdCdzIGFuIGVtcHR5IGFycmF5IHdlIHdhbnQgdG8gYWRkIGF0IGluZGV4IDAsIG90aGVyd2lzZSBhcHBlbmQgdG8gdGhlIGVuZFxuICAgICAgY29uc3QgaW5zZXJ0UGF0aCA9IGlzRW1wdHkgPyBbMF0gOiBbYXJyYXlMZW5ndGhdXG5cbiAgICAgIC8vIEdlbmVyYXRlIGVkaXRzIC0gd2UncmUgdXNpbmcgaXNBcnJheUluc2VydGlvbiB0byBhZGQgYSBuZXcgaXRlbSB3aXRob3V0IG92ZXJ3cml0aW5nIGV4aXN0aW5nIG9uZXNcbiAgICAgIGNvbnN0IGVkaXRzID0gbW9kaWZ5KGNsZWFuQ29udGVudCwgaW5zZXJ0UGF0aCwgbmV3SXRlbSwge1xuICAgICAgICBmb3JtYXR0aW5nT3B0aW9uczogeyBpbnNlcnRTcGFjZXM6IHRydWUsIHRhYlNpemU6IDQgfSxcbiAgICAgICAgaXNBcnJheUluc2VydGlvbjogdHJ1ZSxcbiAgICAgIH0pXG5cbiAgICAgIC8vIElmIGVkaXRzIGNvdWxkIG5vdCBiZSBnZW5lcmF0ZWQsIGZhbGwgYmFjayB0byBtYW51YWwgSlNPTiBzdHJpbmcgbWFuaXB1bGF0aW9uXG4gICAgICBpZiAoIWVkaXRzIHx8IGVkaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBjb3B5ID0gWy4uLnBhcnNlZENvbnRlbnQsIG5ld0l0ZW1dXG4gICAgICAgIHJldHVybiBqc29uU3RyaW5naWZ5KGNvcHksIG51bGwsIDQpXG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IHRoZSBlZGl0cyB0byBwcmVzZXJ2ZSBjb21tZW50cyAodXNlIGNsZWFuQ29udGVudCB3aXRob3V0IEJPTSlcbiAgICAgIHJldHVybiBhcHBseUVkaXRzKGNsZWFuQ29udGVudCwgZWRpdHMpXG4gICAgfVxuICAgIC8vIElmIGl0J3Mgbm90IGFuIGFycmF5IGF0IGFsbCwgY3JlYXRlIGEgbmV3IGFycmF5IHdpdGggdGhlIGl0ZW1cbiAgICBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb250ZW50IGV4aXN0cyBidXQgaXMgbm90IGFuIGFycmF5LCB3ZSdsbCByZXBsYWNlIGl0IGNvbXBsZXRlbHlcbiAgICAgIHJldHVybiBqc29uU3RyaW5naWZ5KFtuZXdJdGVtXSwgbnVsbCwgNClcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJZiBwYXJzaW5nIGZhaWxzIGZvciBhbnkgcmVhc29uLCBsb2cgdGhlIGVycm9yIGFuZCBmYWxsYmFjayB0byBjcmVhdGluZyBhIG5ldyBKU09OIGFycmF5XG4gICAgbG9nRXJyb3IoZSlcbiAgICByZXR1cm4ganNvblN0cmluZ2lmeShbbmV3SXRlbV0sIG51bGwsIDQpXG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IENsaWVudCB9IGZyb20gJ0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvY2xpZW50L2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUge1xuICBSZXNvdXJjZSxcbiAgU2VydmVyQ2FwYWJpbGl0aWVzLFxufSBmcm9tICdAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2RrL3R5cGVzLmpzJ1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGxhenlTY2hlbWEgfSBmcm9tICcuLi8uLi91dGlscy9sYXp5U2NoZW1hLmpzJ1xuXG4vLyBDb25maWd1cmF0aW9uIHNjaGVtYXMgYW5kIHR5cGVzXG5leHBvcnQgY29uc3QgQ29uZmlnU2NvcGVTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHouZW51bShbXG4gICAgJ2xvY2FsJyxcbiAgICAndXNlcicsXG4gICAgJ3Byb2plY3QnLFxuICAgICdkeW5hbWljJyxcbiAgICAnZW50ZXJwcmlzZScsXG4gICAgJ2NsYXVkZWFpJyxcbiAgICAnbWFuYWdlZCcsXG4gIF0pLFxuKVxuZXhwb3J0IHR5cGUgQ29uZmlnU2NvcGUgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIENvbmZpZ1Njb3BlU2NoZW1hPj5cblxuZXhwb3J0IGNvbnN0IFRyYW5zcG9ydFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5lbnVtKFsnc3RkaW8nLCAnc3NlJywgJ3NzZS1pZGUnLCAnaHR0cCcsICd3cycsICdzZGsnXSksXG4pXG5leHBvcnQgdHlwZSBUcmFuc3BvcnQgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIFRyYW5zcG9ydFNjaGVtYT4+XG5cbmV4cG9ydCBjb25zdCBNY3BTdGRpb1NlcnZlckNvbmZpZ1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIHR5cGU6IHoubGl0ZXJhbCgnc3RkaW8nKS5vcHRpb25hbCgpLCAvLyBPcHRpb25hbCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICBjb21tYW5kOiB6LnN0cmluZygpLm1pbigxLCAnQ29tbWFuZCBjYW5ub3QgYmUgZW1wdHknKSxcbiAgICBhcmdzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxuICAgIGVudjogei5yZWNvcmQoei5zdHJpbmcoKSwgei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgfSksXG4pXG5cbi8vIENyb3NzLUFwcCBBY2Nlc3MgKFhBQSAvIFNFUC05OTApOiBqdXN0IGEgcGVyLXNlcnZlciBmbGFnLiBJZFAgY29ubmVjdGlvblxuLy8gZGV0YWlscyAoaXNzdWVyLCBjbGllbnRJZCwgY2FsbGJhY2tQb3J0KSBjb21lIGZyb20gc2V0dGluZ3MueGFhSWRwIFx1MjAxNCBjb25maWd1cmVkXG4vLyBvbmNlLCBzaGFyZWQgYWNyb3NzIGFsbCBYQUEtZW5hYmxlZCBzZXJ2ZXJzLiBjbGllbnRJZC9jbGllbnRTZWNyZXQgKHBhcmVudFxuLy8gb2F1dGggY29uZmlnICsga2V5Y2hhaW4gc2xvdCkgYXJlIGZvciB0aGUgTUNQIHNlcnZlcidzIEFTLlxuY29uc3QgTWNwWGFhQ29uZmlnU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PiB6LmJvb2xlYW4oKSlcblxuY29uc3QgTWNwT0F1dGhDb25maWdTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICBjbGllbnRJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIGNhbGxiYWNrUG9ydDogei5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLm9wdGlvbmFsKCksXG4gICAgYXV0aFNlcnZlck1ldGFkYXRhVXJsOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC51cmwoKVxuICAgICAgLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJywge1xuICAgICAgICBtZXNzYWdlOiAnYXV0aFNlcnZlck1ldGFkYXRhVXJsIG11c3QgdXNlIGh0dHBzOi8vJyxcbiAgICAgIH0pXG4gICAgICAub3B0aW9uYWwoKSxcbiAgICB4YWE6IE1jcFhhYUNvbmZpZ1NjaGVtYSgpLm9wdGlvbmFsKCksXG4gIH0pLFxuKVxuXG5leHBvcnQgY29uc3QgTWNwU1NFU2VydmVyQ29uZmlnU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5saXRlcmFsKCdzc2UnKSxcbiAgICB1cmw6IHouc3RyaW5nKCksXG4gICAgaGVhZGVyczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICBoZWFkZXJzSGVscGVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgb2F1dGg6IE1jcE9BdXRoQ29uZmlnU2NoZW1hKCkub3B0aW9uYWwoKSxcbiAgfSksXG4pXG5cbi8vIEludGVybmFsLW9ubHkgc2VydmVyIHR5cGUgZm9yIElERSBleHRlbnNpb25zXG5leHBvcnQgY29uc3QgTWNwU1NFSURFU2VydmVyQ29uZmlnU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5saXRlcmFsKCdzc2UtaWRlJyksXG4gICAgdXJsOiB6LnN0cmluZygpLFxuICAgIGlkZU5hbWU6IHouc3RyaW5nKCksXG4gICAgaWRlUnVubmluZ0luV2luZG93czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgfSksXG4pXG5cbi8vIEludGVybmFsLW9ubHkgc2VydmVyIHR5cGUgZm9yIElERSBleHRlbnNpb25zXG5leHBvcnQgY29uc3QgTWNwV2ViU29ja2V0SURFU2VydmVyQ29uZmlnU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5saXRlcmFsKCd3cy1pZGUnKSxcbiAgICB1cmw6IHouc3RyaW5nKCksXG4gICAgaWRlTmFtZTogei5zdHJpbmcoKSxcbiAgICBhdXRoVG9rZW46IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBpZGVSdW5uaW5nSW5XaW5kb3dzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IE1jcEhUVFBTZXJ2ZXJDb25maWdTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LmxpdGVyYWwoJ2h0dHAnKSxcbiAgICB1cmw6IHouc3RyaW5nKCksXG4gICAgaGVhZGVyczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICBoZWFkZXJzSGVscGVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgb2F1dGg6IE1jcE9BdXRoQ29uZmlnU2NoZW1hKCkub3B0aW9uYWwoKSxcbiAgfSksXG4pXG5cbmV4cG9ydCBjb25zdCBNY3BXZWJTb2NrZXRTZXJ2ZXJDb25maWdTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LmxpdGVyYWwoJ3dzJyksXG4gICAgdXJsOiB6LnN0cmluZygpLFxuICAgIGhlYWRlcnM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgaGVhZGVyc0hlbHBlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IE1jcFNka1NlcnZlckNvbmZpZ1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIHR5cGU6IHoubGl0ZXJhbCgnc2RrJyksXG4gICAgbmFtZTogei5zdHJpbmcoKSxcbiAgfSksXG4pXG5cbi8vIENvbmZpZyB0eXBlIGZvciBDbGF1ZGUuYWkgcHJveHkgc2VydmVyc1xuZXhwb3J0IGNvbnN0IE1jcENsYXVkZUFJUHJveHlTZXJ2ZXJDb25maWdTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LmxpdGVyYWwoJ2NsYXVkZWFpLXByb3h5JyksXG4gICAgdXJsOiB6LnN0cmluZygpLFxuICAgIGlkOiB6LnN0cmluZygpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IE1jcFNlcnZlckNvbmZpZ1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei51bmlvbihbXG4gICAgTWNwU3RkaW9TZXJ2ZXJDb25maWdTY2hlbWEoKSxcbiAgICBNY3BTU0VTZXJ2ZXJDb25maWdTY2hlbWEoKSxcbiAgICBNY3BTU0VJREVTZXJ2ZXJDb25maWdTY2hlbWEoKSxcbiAgICBNY3BXZWJTb2NrZXRJREVTZXJ2ZXJDb25maWdTY2hlbWEoKSxcbiAgICBNY3BIVFRQU2VydmVyQ29uZmlnU2NoZW1hKCksXG4gICAgTWNwV2ViU29ja2V0U2VydmVyQ29uZmlnU2NoZW1hKCksXG4gICAgTWNwU2RrU2VydmVyQ29uZmlnU2NoZW1hKCksXG4gICAgTWNwQ2xhdWRlQUlQcm94eVNlcnZlckNvbmZpZ1NjaGVtYSgpLFxuICBdKSxcbilcblxuZXhwb3J0IHR5cGUgTWNwU3RkaW9TZXJ2ZXJDb25maWcgPSB6LmluZmVyPFxuICBSZXR1cm5UeXBlPHR5cGVvZiBNY3BTdGRpb1NlcnZlckNvbmZpZ1NjaGVtYT5cbj5cbmV4cG9ydCB0eXBlIE1jcFNTRVNlcnZlckNvbmZpZyA9IHouaW5mZXI8XG4gIFJldHVyblR5cGU8dHlwZW9mIE1jcFNTRVNlcnZlckNvbmZpZ1NjaGVtYT5cbj5cbmV4cG9ydCB0eXBlIE1jcFNTRUlERVNlcnZlckNvbmZpZyA9IHouaW5mZXI8XG4gIFJldHVyblR5cGU8dHlwZW9mIE1jcFNTRUlERVNlcnZlckNvbmZpZ1NjaGVtYT5cbj5cbmV4cG9ydCB0eXBlIE1jcFdlYlNvY2tldElERVNlcnZlckNvbmZpZyA9IHouaW5mZXI8XG4gIFJldHVyblR5cGU8dHlwZW9mIE1jcFdlYlNvY2tldElERVNlcnZlckNvbmZpZ1NjaGVtYT5cbj5cbmV4cG9ydCB0eXBlIE1jcEhUVFBTZXJ2ZXJDb25maWcgPSB6LmluZmVyPFxuICBSZXR1cm5UeXBlPHR5cGVvZiBNY3BIVFRQU2VydmVyQ29uZmlnU2NoZW1hPlxuPlxuZXhwb3J0IHR5cGUgTWNwV2ViU29ja2V0U2VydmVyQ29uZmlnID0gei5pbmZlcjxcbiAgUmV0dXJuVHlwZTx0eXBlb2YgTWNwV2ViU29ja2V0U2VydmVyQ29uZmlnU2NoZW1hPlxuPlxuZXhwb3J0IHR5cGUgTWNwU2RrU2VydmVyQ29uZmlnID0gei5pbmZlcjxcbiAgUmV0dXJuVHlwZTx0eXBlb2YgTWNwU2RrU2VydmVyQ29uZmlnU2NoZW1hPlxuPlxuZXhwb3J0IHR5cGUgTWNwQ2xhdWRlQUlQcm94eVNlcnZlckNvbmZpZyA9IHouaW5mZXI8XG4gIFJldHVyblR5cGU8dHlwZW9mIE1jcENsYXVkZUFJUHJveHlTZXJ2ZXJDb25maWdTY2hlbWE+XG4+XG5leHBvcnQgdHlwZSBNY3BTZXJ2ZXJDb25maWcgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIE1jcFNlcnZlckNvbmZpZ1NjaGVtYT4+XG5cbmV4cG9ydCB0eXBlIFNjb3BlZE1jcFNlcnZlckNvbmZpZyA9IE1jcFNlcnZlckNvbmZpZyAmIHtcbiAgc2NvcGU6IENvbmZpZ1Njb3BlXG4gIC8vIEZvciBwbHVnaW4tcHJvdmlkZWQgc2VydmVyczogdGhlIHByb3ZpZGluZyBwbHVnaW4ncyBMb2FkZWRQbHVnaW4uc291cmNlXG4gIC8vIChlLmcuICdzbGFja0BhbnRocm9waWMnKS4gU3Rhc2hlZCBhdCBjb25maWctYnVpbGQgdGltZSBzbyB0aGUgY2hhbm5lbFxuICAvLyBnYXRlIGRvZXNuJ3QgaGF2ZSB0byByYWNlIEFwcFN0YXRlLnBsdWdpbnMuZW5hYmxlZCBoeWRyYXRpb24uXG4gIHBsdWdpblNvdXJjZT86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgTWNwSnNvbkNvbmZpZ1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIG1jcFNlcnZlcnM6IHoucmVjb3JkKHouc3RyaW5nKCksIE1jcFNlcnZlckNvbmZpZ1NjaGVtYSgpKSxcbiAgfSksXG4pXG5cbmV4cG9ydCB0eXBlIE1jcEpzb25Db25maWcgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIE1jcEpzb25Db25maWdTY2hlbWE+PlxuXG4vLyBTZXJ2ZXIgY29ubmVjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ29ubmVjdGVkTUNQU2VydmVyID0ge1xuICBjbGllbnQ6IENsaWVudFxuICBuYW1lOiBzdHJpbmdcbiAgdHlwZTogJ2Nvbm5lY3RlZCdcbiAgY2FwYWJpbGl0aWVzOiBTZXJ2ZXJDYXBhYmlsaXRpZXNcbiAgc2VydmVySW5mbz86IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB2ZXJzaW9uOiBzdHJpbmdcbiAgfVxuICBpbnN0cnVjdGlvbnM/OiBzdHJpbmdcbiAgY29uZmlnOiBTY29wZWRNY3BTZXJ2ZXJDb25maWdcbiAgY2xlYW51cDogKCkgPT4gUHJvbWlzZTx2b2lkPlxufVxuXG5leHBvcnQgdHlwZSBGYWlsZWRNQ1BTZXJ2ZXIgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICB0eXBlOiAnZmFpbGVkJ1xuICBjb25maWc6IFNjb3BlZE1jcFNlcnZlckNvbmZpZ1xuICBlcnJvcj86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZWVkc0F1dGhNQ1BTZXJ2ZXIgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICB0eXBlOiAnbmVlZHMtYXV0aCdcbiAgY29uZmlnOiBTY29wZWRNY3BTZXJ2ZXJDb25maWdcbn1cblxuZXhwb3J0IHR5cGUgUGVuZGluZ01DUFNlcnZlciA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHR5cGU6ICdwZW5kaW5nJ1xuICBjb25maWc6IFNjb3BlZE1jcFNlcnZlckNvbmZpZ1xuICByZWNvbm5lY3RBdHRlbXB0PzogbnVtYmVyXG4gIG1heFJlY29ubmVjdEF0dGVtcHRzPzogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIERpc2FibGVkTUNQU2VydmVyID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgdHlwZTogJ2Rpc2FibGVkJ1xuICBjb25maWc6IFNjb3BlZE1jcFNlcnZlckNvbmZpZ1xufVxuXG5leHBvcnQgdHlwZSBNQ1BTZXJ2ZXJDb25uZWN0aW9uID1cbiAgfCBDb25uZWN0ZWRNQ1BTZXJ2ZXJcbiAgfCBGYWlsZWRNQ1BTZXJ2ZXJcbiAgfCBOZWVkc0F1dGhNQ1BTZXJ2ZXJcbiAgfCBQZW5kaW5nTUNQU2VydmVyXG4gIHwgRGlzYWJsZWRNQ1BTZXJ2ZXJcblxuLy8gUmVzb3VyY2UgdHlwZXNcbmV4cG9ydCB0eXBlIFNlcnZlclJlc291cmNlID0gUmVzb3VyY2UgJiB7IHNlcnZlcjogc3RyaW5nIH1cblxuLy8gTUNQIENMSSBTdGF0ZSB0eXBlc1xuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemVkVG9vbCB7XG4gIG5hbWU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGlucHV0SlNPTlNjaGVtYT86IHtcbiAgICBbeDogc3RyaW5nXTogdW5rbm93blxuICAgIHR5cGU6ICdvYmplY3QnXG4gICAgcHJvcGVydGllcz86IHtcbiAgICAgIFt4OiBzdHJpbmddOiB1bmtub3duXG4gICAgfVxuICB9XG4gIGlzTWNwPzogYm9vbGVhblxuICBvcmlnaW5hbFRvb2xOYW1lPzogc3RyaW5nIC8vIE9yaWdpbmFsIHVubm9ybWFsaXplZCB0b29sIG5hbWUgZnJvbSBNQ1Agc2VydmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXplZENsaWVudCB7XG4gIG5hbWU6IHN0cmluZ1xuICB0eXBlOiAnY29ubmVjdGVkJyB8ICdmYWlsZWQnIHwgJ25lZWRzLWF1dGgnIHwgJ3BlbmRpbmcnIHwgJ2Rpc2FibGVkJ1xuICBjYXBhYmlsaXRpZXM/OiBTZXJ2ZXJDYXBhYmlsaXRpZXNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNQ1BDbGlTdGF0ZSB7XG4gIGNsaWVudHM6IFNlcmlhbGl6ZWRDbGllbnRbXVxuICBjb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBTY29wZWRNY3BTZXJ2ZXJDb25maWc+XG4gIHRvb2xzOiBTZXJpYWxpemVkVG9vbFtdXG4gIHJlc291cmNlczogUmVjb3JkPHN0cmluZywgU2VydmVyUmVzb3VyY2VbXT5cbiAgbm9ybWFsaXplZE5hbWVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiAvLyBNYXBzIG5vcm1hbGl6ZWQgbmFtZXMgdG8gb3JpZ2luYWwgbmFtZXNcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBUyxTQUFTLFNBQXlCO0FBQ2hELFNBQU8sUUFBUSxXQUFXLFFBQVEsSUFBSSxRQUFRLE1BQU0sQ0FBQyxJQUFJO0FBQzNEO0FBZkEsSUFXTTtBQVhOO0FBQUE7QUFXQSxJQUFNLFdBQVc7QUFBQTtBQUFBOzs7QUNGVixTQUFTLGNBQWMsTUFBTSxlQUFlLE9BQU87QUFDdEQsUUFBTSxNQUFNLEtBQUs7QUFDakIsTUFBSSxNQUFNLEdBQUcsUUFBUSxJQUFJLGNBQWMsR0FBRyxRQUFRLElBQTZCLGFBQWEsR0FBRyxrQkFBa0IsR0FBRyx1QkFBdUIsR0FBRywyQkFBMkIsR0FBRyxZQUFZO0FBQ3hMLFdBQVMsY0FBYyxPQUFPLE9BQU87QUFDakMsUUFBSSxTQUFTO0FBQ2IsUUFBSUEsU0FBUTtBQUNaLFdBQU8sU0FBUyxTQUFTLENBQUMsT0FBTztBQUM3QixVQUFJLEtBQUssS0FBSyxXQUFXLEdBQUc7QUFDNUIsVUFBSSxNQUFNLE1BQThCLE1BQU0sSUFBNEI7QUFDdEUsUUFBQUEsU0FBUUEsU0FBUSxLQUFLLEtBQUs7QUFBQSxNQUM5QixXQUNTLE1BQU0sTUFBNkIsTUFBTSxJQUEyQjtBQUN6RSxRQUFBQSxTQUFRQSxTQUFRLEtBQUssS0FBSyxLQUE0QjtBQUFBLE1BQzFELFdBQ1MsTUFBTSxNQUE2QixNQUFNLEtBQTRCO0FBQzFFLFFBQUFBLFNBQVFBLFNBQVEsS0FBSyxLQUFLLEtBQTRCO0FBQUEsTUFDMUQsT0FDSztBQUNEO0FBQUEsTUFDSjtBQUNBO0FBQ0E7QUFBQSxJQUNKO0FBQ0EsUUFBSSxTQUFTLE9BQU87QUFDaEIsTUFBQUEsU0FBUTtBQUFBLElBQ1o7QUFDQSxXQUFPQTtBQUFBLEVBQ1g7QUFDQSxXQUFTLFlBQVksYUFBYTtBQUM5QixVQUFNO0FBQ04sWUFBUTtBQUNSLGtCQUFjO0FBQ2QsWUFBUTtBQUNSLGdCQUFZO0FBQUEsRUFDaEI7QUFDQSxXQUFTLGFBQWE7QUFDbEIsUUFBSSxRQUFRO0FBQ1osUUFBSSxLQUFLLFdBQVcsR0FBRyxNQUFNLElBQTRCO0FBQ3JEO0FBQUEsSUFDSixPQUNLO0FBQ0Q7QUFDQSxhQUFPLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHO0FBQ3ZEO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFDQSxRQUFJLE1BQU0sS0FBSyxVQUFVLEtBQUssV0FBVyxHQUFHLE1BQU0sSUFBNkI7QUFDM0U7QUFDQSxVQUFJLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHO0FBQ3BEO0FBQ0EsZUFBTyxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRztBQUN2RDtBQUFBLFFBQ0o7QUFBQSxNQUNKLE9BQ0s7QUFDRCxvQkFBWTtBQUNaLGVBQU8sS0FBSyxVQUFVLE9BQU8sR0FBRztBQUFBLE1BQ3BDO0FBQUEsSUFDSjtBQUNBLFFBQUksTUFBTTtBQUNWLFFBQUksTUFBTSxLQUFLLFdBQVcsS0FBSyxXQUFXLEdBQUcsTUFBTSxNQUE2QixLQUFLLFdBQVcsR0FBRyxNQUFNLE1BQTZCO0FBQ2xJO0FBQ0EsVUFBSSxNQUFNLEtBQUssVUFBVSxLQUFLLFdBQVcsR0FBRyxNQUFNLE1BQWdDLEtBQUssV0FBVyxHQUFHLE1BQU0sSUFBK0I7QUFDdEk7QUFBQSxNQUNKO0FBQ0EsVUFBSSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRztBQUNwRDtBQUNBLGVBQU8sTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUc7QUFDdkQ7QUFBQSxRQUNKO0FBQ0EsY0FBTTtBQUFBLE1BQ1YsT0FDSztBQUNELG9CQUFZO0FBQUEsTUFDaEI7QUFBQSxJQUNKO0FBQ0EsV0FBTyxLQUFLLFVBQVUsT0FBTyxHQUFHO0FBQUEsRUFDcEM7QUFDQSxXQUFTLGFBQWE7QUFDbEIsUUFBSSxTQUFTLElBQUksUUFBUTtBQUN6QixXQUFPLE1BQU07QUFDVCxVQUFJLE9BQU8sS0FBSztBQUNaLGtCQUFVLEtBQUssVUFBVSxPQUFPLEdBQUc7QUFDbkMsb0JBQVk7QUFDWjtBQUFBLE1BQ0o7QUFDQSxZQUFNLEtBQUssS0FBSyxXQUFXLEdBQUc7QUFDOUIsVUFBSSxPQUFPLElBQXFDO0FBQzVDLGtCQUFVLEtBQUssVUFBVSxPQUFPLEdBQUc7QUFDbkM7QUFDQTtBQUFBLE1BQ0o7QUFDQSxVQUFJLE9BQU8sSUFBbUM7QUFDMUMsa0JBQVUsS0FBSyxVQUFVLE9BQU8sR0FBRztBQUNuQztBQUNBLFlBQUksT0FBTyxLQUFLO0FBQ1osc0JBQVk7QUFDWjtBQUFBLFFBQ0o7QUFDQSxjQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUs7QUFDakMsZ0JBQVEsS0FBSztBQUFBLFVBQ1QsS0FBSztBQUNELHNCQUFVO0FBQ1Y7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVTtBQUNWO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVU7QUFDVjtBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVO0FBQ1Y7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVTtBQUNWO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVU7QUFDVjtBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVO0FBQ1Y7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVTtBQUNWO0FBQUEsVUFDSixLQUFLO0FBQ0Qsa0JBQU0sTUFBTSxjQUFjLEdBQUcsSUFBSTtBQUNqQyxnQkFBSSxPQUFPLEdBQUc7QUFDVix3QkFBVSxPQUFPLGFBQWEsR0FBRztBQUFBLFlBQ3JDLE9BQ0s7QUFDRCwwQkFBWTtBQUFBLFlBQ2hCO0FBQ0E7QUFBQSxVQUNKO0FBQ0ksd0JBQVk7QUFBQSxRQUNwQjtBQUNBLGdCQUFRO0FBQ1I7QUFBQSxNQUNKO0FBQ0EsVUFBSSxNQUFNLEtBQUssTUFBTSxJQUFNO0FBQ3ZCLFlBQUksWUFBWSxFQUFFLEdBQUc7QUFDakIsb0JBQVUsS0FBSyxVQUFVLE9BQU8sR0FBRztBQUNuQyxzQkFBWTtBQUNaO0FBQUEsUUFDSixPQUNLO0FBQ0Qsc0JBQVk7QUFBQSxRQUVoQjtBQUFBLE1BQ0o7QUFDQTtBQUFBLElBQ0o7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUNBLFdBQVMsV0FBVztBQUNoQixZQUFRO0FBQ1IsZ0JBQVk7QUFDWixrQkFBYztBQUNkLHNCQUFrQjtBQUNsQiwrQkFBMkI7QUFDM0IsUUFBSSxPQUFPLEtBQUs7QUFFWixvQkFBYztBQUNkLGFBQU8sUUFBUTtBQUFBLElBQ25CO0FBQ0EsUUFBSSxPQUFPLEtBQUssV0FBVyxHQUFHO0FBRTlCLFFBQUksYUFBYSxJQUFJLEdBQUc7QUFDcEIsU0FBRztBQUNDO0FBQ0EsaUJBQVMsT0FBTyxhQUFhLElBQUk7QUFDakMsZUFBTyxLQUFLLFdBQVcsR0FBRztBQUFBLE1BQzlCLFNBQVMsYUFBYSxJQUFJO0FBQzFCLGFBQU8sUUFBUTtBQUFBLElBQ25CO0FBRUEsUUFBSSxZQUFZLElBQUksR0FBRztBQUNuQjtBQUNBLGVBQVMsT0FBTyxhQUFhLElBQUk7QUFDakMsVUFBSSxTQUFTLE1BQTBDLEtBQUssV0FBVyxHQUFHLE1BQU0sSUFBa0M7QUFDOUc7QUFDQSxpQkFBUztBQUFBLE1BQ2I7QUFDQTtBQUNBLDZCQUF1QjtBQUN2QixhQUFPLFFBQVE7QUFBQSxJQUNuQjtBQUNBLFlBQVEsTUFBTTtBQUFBO0FBQUEsTUFFVixLQUFLO0FBQ0Q7QUFDQSxlQUFPLFFBQVE7QUFBQSxNQUNuQixLQUFLO0FBQ0Q7QUFDQSxlQUFPLFFBQVE7QUFBQSxNQUNuQixLQUFLO0FBQ0Q7QUFDQSxlQUFPLFFBQVE7QUFBQSxNQUNuQixLQUFLO0FBQ0Q7QUFDQSxlQUFPLFFBQVE7QUFBQSxNQUNuQixLQUFLO0FBQ0Q7QUFDQSxlQUFPLFFBQVE7QUFBQSxNQUNuQixLQUFLO0FBQ0Q7QUFDQSxlQUFPLFFBQVE7QUFBQTtBQUFBLE1BRW5CLEtBQUs7QUFDRDtBQUNBLGdCQUFRLFdBQVc7QUFDbkIsZUFBTyxRQUFRO0FBQUE7QUFBQSxNQUVuQixLQUFLO0FBQ0QsY0FBTSxRQUFRLE1BQU07QUFFcEIsWUFBSSxLQUFLLFdBQVcsTUFBTSxDQUFDLE1BQU0sSUFBK0I7QUFDNUQsaUJBQU87QUFDUCxpQkFBTyxNQUFNLEtBQUs7QUFDZCxnQkFBSSxZQUFZLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRztBQUNuQztBQUFBLFlBQ0o7QUFDQTtBQUFBLFVBQ0o7QUFDQSxrQkFBUSxLQUFLLFVBQVUsT0FBTyxHQUFHO0FBQ2pDLGlCQUFPLFFBQVE7QUFBQSxRQUNuQjtBQUVBLFlBQUksS0FBSyxXQUFXLE1BQU0sQ0FBQyxNQUFNLElBQWtDO0FBQy9ELGlCQUFPO0FBQ1AsZ0JBQU0sYUFBYSxNQUFNO0FBQ3pCLGNBQUksZ0JBQWdCO0FBQ3BCLGlCQUFPLE1BQU0sWUFBWTtBQUNyQixrQkFBTSxLQUFLLEtBQUssV0FBVyxHQUFHO0FBQzlCLGdCQUFJLE9BQU8sTUFBb0MsS0FBSyxXQUFXLE1BQU0sQ0FBQyxNQUFNLElBQStCO0FBQ3ZHLHFCQUFPO0FBQ1AsOEJBQWdCO0FBQ2hCO0FBQUEsWUFDSjtBQUNBO0FBQ0EsZ0JBQUksWUFBWSxFQUFFLEdBQUc7QUFDakIsa0JBQUksT0FBTyxNQUEwQyxLQUFLLFdBQVcsR0FBRyxNQUFNLElBQWtDO0FBQzVHO0FBQUEsY0FDSjtBQUNBO0FBQ0EscUNBQXVCO0FBQUEsWUFDM0I7QUFBQSxVQUNKO0FBQ0EsY0FBSSxDQUFDLGVBQWU7QUFDaEI7QUFDQSx3QkFBWTtBQUFBLFVBQ2hCO0FBQ0Esa0JBQVEsS0FBSyxVQUFVLE9BQU8sR0FBRztBQUNqQyxpQkFBTyxRQUFRO0FBQUEsUUFDbkI7QUFFQSxpQkFBUyxPQUFPLGFBQWEsSUFBSTtBQUNqQztBQUNBLGVBQU8sUUFBUTtBQUFBO0FBQUEsTUFFbkIsS0FBSztBQUNELGlCQUFTLE9BQU8sYUFBYSxJQUFJO0FBQ2pDO0FBQ0EsWUFBSSxRQUFRLE9BQU8sQ0FBQyxRQUFRLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRztBQUMvQyxpQkFBTyxRQUFRO0FBQUEsUUFDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlKLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFDRCxpQkFBUyxXQUFXO0FBQ3BCLGVBQU8sUUFBUTtBQUFBO0FBQUEsTUFFbkI7QUFFSSxlQUFPLE1BQU0sT0FBTywwQkFBMEIsSUFBSSxHQUFHO0FBQ2pEO0FBQ0EsaUJBQU8sS0FBSyxXQUFXLEdBQUc7QUFBQSxRQUM5QjtBQUNBLFlBQUksZ0JBQWdCLEtBQUs7QUFDckIsa0JBQVEsS0FBSyxVQUFVLGFBQWEsR0FBRztBQUV2QyxrQkFBUSxPQUFPO0FBQUEsWUFDWCxLQUFLO0FBQVEscUJBQU8sUUFBUTtBQUFBLFlBQzVCLEtBQUs7QUFBUyxxQkFBTyxRQUFRO0FBQUEsWUFDN0IsS0FBSztBQUFRLHFCQUFPLFFBQVE7QUFBQSxVQUNoQztBQUNBLGlCQUFPLFFBQVE7QUFBQSxRQUNuQjtBQUVBLGlCQUFTLE9BQU8sYUFBYSxJQUFJO0FBQ2pDO0FBQ0EsZUFBTyxRQUFRO0FBQUEsSUFDdkI7QUFBQSxFQUNKO0FBQ0EsV0FBUywwQkFBMEIsTUFBTTtBQUNyQyxRQUFJLGFBQWEsSUFBSSxLQUFLLFlBQVksSUFBSSxHQUFHO0FBQ3pDLGFBQU87QUFBQSxJQUNYO0FBQ0EsWUFBUSxNQUFNO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQ0QsZUFBTztBQUFBLElBQ2Y7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUNBLFdBQVMsb0JBQW9CO0FBQ3pCLFFBQUk7QUFDSixPQUFHO0FBQ0MsZUFBUyxTQUFTO0FBQUEsSUFDdEIsU0FBUyxVQUFVLE1BQXlDLFVBQVU7QUFDdEUsV0FBTztBQUFBLEVBQ1g7QUFDQSxTQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0EsYUFBYSxNQUFNO0FBQUEsSUFDbkIsTUFBTSxlQUFlLG9CQUFvQjtBQUFBLElBQ3pDLFVBQVUsTUFBTTtBQUFBLElBQ2hCLGVBQWUsTUFBTTtBQUFBLElBQ3JCLGdCQUFnQixNQUFNO0FBQUEsSUFDdEIsZ0JBQWdCLE1BQU0sTUFBTTtBQUFBLElBQzVCLG1CQUFtQixNQUFNO0FBQUEsSUFDekIsd0JBQXdCLE1BQU0sY0FBYztBQUFBLElBQzVDLGVBQWUsTUFBTTtBQUFBLEVBQ3pCO0FBQ0o7QUFDQSxTQUFTLGFBQWEsSUFBSTtBQUN0QixTQUFPLE9BQU8sTUFBaUMsT0FBTztBQUMxRDtBQUNBLFNBQVMsWUFBWSxJQUFJO0FBQ3JCLFNBQU8sT0FBTyxNQUFvQyxPQUFPO0FBQzdEO0FBQ0EsU0FBUyxRQUFRLElBQUk7QUFDakIsU0FBTyxNQUFNLE1BQThCLE1BQU07QUFDckQ7QUF2V0EsSUF3V0k7QUF4V0o7QUFBQTtBQUFBO0FBeVdBLEtBQUMsU0FBVUMsaUJBQWdCO0FBQ3ZCLE1BQUFBLGdCQUFlQSxnQkFBZSxVQUFVLElBQUksRUFBRSxJQUFJO0FBQ2xELE1BQUFBLGdCQUFlQSxnQkFBZSxnQkFBZ0IsSUFBSSxFQUFFLElBQUk7QUFDeEQsTUFBQUEsZ0JBQWVBLGdCQUFlLE9BQU8sSUFBSSxFQUFFLElBQUk7QUFDL0MsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLElBQUksSUFBSSxFQUFFLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUMsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLEdBQUcsSUFBSSxFQUFFLElBQUk7QUFDM0MsTUFBQUEsZ0JBQWVBLGdCQUFlLFVBQVUsSUFBSSxFQUFFLElBQUk7QUFDbEQsTUFBQUEsZ0JBQWVBLGdCQUFlLFdBQVcsSUFBSSxFQUFFLElBQUk7QUFDbkQsTUFBQUEsZ0JBQWVBLGdCQUFlLFlBQVksSUFBSSxHQUFHLElBQUk7QUFDckQsTUFBQUEsZ0JBQWVBLGdCQUFlLGNBQWMsSUFBSSxFQUFFLElBQUk7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TUFBTTtBQUFBLFFBQ04sMkJBQTJCO0FBQUEsUUFDM0IseUJBQXlCO0FBQUEsUUFDekIsNEJBQTRCO0FBQUEsUUFDNUIsa0NBQWtDO0FBQUEsUUFDbEMsMEJBQTBCO0FBQUEsUUFDMUIsK0JBQStCO0FBQUEsUUFDL0IseUJBQXlCO0FBQUEsUUFDekIsbUNBQW1DO0FBQUEsTUFDckMsQ0FBQztBQUFBLElBQ0g7QUFvQ08sSUFBTSxzQkFBc0I7QUFBQSxNQUFXLE1BQzVDLGlCQUFFLE9BQU87QUFBQSxRQUNQLFlBQVksaUJBQUUsT0FBTyxpQkFBRSxPQUFPLEdBQUcsc0JBQXNCLENBQUM7QUFBQSxNQUMxRCxDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInZhbHVlIiwgIkNoYXJhY3RlckNvZGVzIiwgIlBhcnNlT3B0aW9ucyIsICJlZGl0IiwgInBhcnNlIiwgIlNjYW5FcnJvciIsICJTeW50YXhLaW5kIiwgIlBhcnNlRXJyb3JDb2RlIiwgInBhcnNlIiwgInNhZmVQYXJzZUpTT04iXQp9Cg==
