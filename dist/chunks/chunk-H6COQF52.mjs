#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/bash/bashParser.ts
function ensureParserInitialized() {
  return READY;
}
function getParserModule() {
  return MODULE;
}
function makeLexer(src) {
  return {
    src,
    len: src.length,
    i: 0,
    b: 0,
    heredocs: [],
    byteTable: null
  };
}
function advance(L) {
  const c = L.src.charCodeAt(L.i);
  L.i++;
  if (c < 128) {
    L.b++;
  } else if (c < 2048) {
    L.b += 2;
  } else if (c >= 55296 && c <= 56319) {
    L.b += 4;
    L.i++;
  } else {
    L.b += 3;
  }
}
function peek(L, off = 0) {
  return L.i + off < L.len ? L.src[L.i + off] : "";
}
function byteAt(L, charIdx) {
  if (L.byteTable) return L.byteTable[charIdx];
  const t = new Uint32Array(L.len + 1);
  let b = 0;
  let i = 0;
  while (i < L.len) {
    t[i] = b;
    const c = L.src.charCodeAt(i);
    if (c < 128) {
      b++;
      i++;
    } else if (c < 2048) {
      b += 2;
      i++;
    } else if (c >= 55296 && c <= 56319) {
      t[i + 1] = b + 2;
      b += 4;
      i += 2;
    } else {
      b += 3;
      i++;
    }
  }
  t[L.len] = b;
  L.byteTable = t;
  return t[charIdx];
}
function isWordChar(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "_" || c === "/" || c === "." || c === "-" || c === "+" || c === ":" || c === "@" || c === "%" || c === "," || c === "~" || c === "^" || c === "?" || c === "*" || c === "!" || c === "=" || c === "[" || c === "]";
}
function isWordStart(c) {
  return isWordChar(c) || c === "\\";
}
function isIdentStart(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "_";
}
function isIdentChar(c) {
  return isIdentStart(c) || c >= "0" && c <= "9";
}
function isDigit(c) {
  return c >= "0" && c <= "9";
}
function isHexDigit(c) {
  return isDigit(c) || c >= "a" && c <= "f" || c >= "A" && c <= "F";
}
function isBaseDigit(c) {
  return isIdentChar(c) || c === "@";
}
function isHeredocDelimChar(c) {
  return c !== "" && c !== " " && c !== "	" && c !== "\n" && c !== "<" && c !== ">" && c !== "|" && c !== "&" && c !== ";" && c !== "(" && c !== ")" && c !== "'" && c !== '"' && c !== "`" && c !== "\\";
}
function skipBlanks(L) {
  while (L.i < L.len) {
    const c = L.src[L.i];
    if (c === " " || c === "	" || c === "\r") {
      advance(L);
    } else if (c === "\\") {
      const nx = L.src[L.i + 1];
      if (nx === "\n" || nx === "\r" && L.src[L.i + 2] === "\n") {
        advance(L);
        advance(L);
        if (nx === "\r") advance(L);
      } else if (nx === " " || nx === "	") {
        advance(L);
        advance(L);
      } else {
        break;
      }
    } else {
      break;
    }
  }
}
function nextToken(L, ctx = "arg") {
  skipBlanks(L);
  const start = L.b;
  if (L.i >= L.len) return { type: "EOF", value: "", start, end: start };
  const c = L.src[L.i];
  const c1 = peek(L, 1);
  const c2 = peek(L, 2);
  if (c === "\n") {
    advance(L);
    return { type: "NEWLINE", value: "\n", start, end: L.b };
  }
  if (c === "#") {
    const si = L.i;
    while (L.i < L.len && L.src[L.i] !== "\n") advance(L);
    return {
      type: "COMMENT",
      value: L.src.slice(si, L.i),
      start,
      end: L.b
    };
  }
  if (c === "&" && c1 === "&") {
    advance(L);
    advance(L);
    return { type: "OP", value: "&&", start, end: L.b };
  }
  if (c === "|" && c1 === "|") {
    advance(L);
    advance(L);
    return { type: "OP", value: "||", start, end: L.b };
  }
  if (c === "|" && c1 === "&") {
    advance(L);
    advance(L);
    return { type: "OP", value: "|&", start, end: L.b };
  }
  if (c === ";" && c1 === ";" && c2 === "&") {
    advance(L);
    advance(L);
    advance(L);
    return { type: "OP", value: ";;&", start, end: L.b };
  }
  if (c === ";" && c1 === ";") {
    advance(L);
    advance(L);
    return { type: "OP", value: ";;", start, end: L.b };
  }
  if (c === ";" && c1 === "&") {
    advance(L);
    advance(L);
    return { type: "OP", value: ";&", start, end: L.b };
  }
  if (c === ">" && c1 === ">") {
    advance(L);
    advance(L);
    return { type: "OP", value: ">>", start, end: L.b };
  }
  if (c === ">" && c1 === "&" && c2 === "-") {
    advance(L);
    advance(L);
    advance(L);
    return { type: "OP", value: ">&-", start, end: L.b };
  }
  if (c === ">" && c1 === "&") {
    advance(L);
    advance(L);
    return { type: "OP", value: ">&", start, end: L.b };
  }
  if (c === ">" && c1 === "|") {
    advance(L);
    advance(L);
    return { type: "OP", value: ">|", start, end: L.b };
  }
  if (c === "&" && c1 === ">" && c2 === ">") {
    advance(L);
    advance(L);
    advance(L);
    return { type: "OP", value: "&>>", start, end: L.b };
  }
  if (c === "&" && c1 === ">") {
    advance(L);
    advance(L);
    return { type: "OP", value: "&>", start, end: L.b };
  }
  if (c === "<" && c1 === "<" && c2 === "<") {
    advance(L);
    advance(L);
    advance(L);
    return { type: "OP", value: "<<<", start, end: L.b };
  }
  if (c === "<" && c1 === "<" && c2 === "-") {
    advance(L);
    advance(L);
    advance(L);
    return { type: "OP", value: "<<-", start, end: L.b };
  }
  if (c === "<" && c1 === "<") {
    advance(L);
    advance(L);
    return { type: "OP", value: "<<", start, end: L.b };
  }
  if (c === "<" && c1 === "&" && c2 === "-") {
    advance(L);
    advance(L);
    advance(L);
    return { type: "OP", value: "<&-", start, end: L.b };
  }
  if (c === "<" && c1 === "&") {
    advance(L);
    advance(L);
    return { type: "OP", value: "<&", start, end: L.b };
  }
  if (c === "<" && c1 === "(") {
    advance(L);
    advance(L);
    return { type: "LT_PAREN", value: "<(", start, end: L.b };
  }
  if (c === ">" && c1 === "(") {
    advance(L);
    advance(L);
    return { type: "GT_PAREN", value: ">(", start, end: L.b };
  }
  if (c === "(" && c1 === "(") {
    advance(L);
    advance(L);
    return { type: "OP", value: "((", start, end: L.b };
  }
  if (c === ")" && c1 === ")") {
    advance(L);
    advance(L);
    return { type: "OP", value: "))", start, end: L.b };
  }
  if (c === "|" || c === "&" || c === ";" || c === ">" || c === "<") {
    advance(L);
    return { type: "OP", value: c, start, end: L.b };
  }
  if (c === "(" || c === ")") {
    advance(L);
    return { type: "OP", value: c, start, end: L.b };
  }
  if (ctx === "cmd") {
    if (c === "[" && c1 === "[") {
      advance(L);
      advance(L);
      return { type: "OP", value: "[[", start, end: L.b };
    }
    if (c === "[") {
      advance(L);
      return { type: "OP", value: "[", start, end: L.b };
    }
    if (c === "{" && (c1 === " " || c1 === "	" || c1 === "\n")) {
      advance(L);
      return { type: "OP", value: "{", start, end: L.b };
    }
    if (c === "}") {
      advance(L);
      return { type: "OP", value: "}", start, end: L.b };
    }
    if (c === "!" && (c1 === " " || c1 === "	")) {
      advance(L);
      return { type: "OP", value: "!", start, end: L.b };
    }
  }
  if (c === '"') {
    advance(L);
    return { type: "DQUOTE", value: '"', start, end: L.b };
  }
  if (c === "'") {
    const si = L.i;
    advance(L);
    while (L.i < L.len && L.src[L.i] !== "'") advance(L);
    if (L.i < L.len) advance(L);
    return {
      type: "SQUOTE",
      value: L.src.slice(si, L.i),
      start,
      end: L.b
    };
  }
  if (c === "$") {
    if (c1 === "(" && c2 === "(") {
      advance(L);
      advance(L);
      advance(L);
      return { type: "DOLLAR_DPAREN", value: "$((", start, end: L.b };
    }
    if (c1 === "(") {
      advance(L);
      advance(L);
      return { type: "DOLLAR_PAREN", value: "$(", start, end: L.b };
    }
    if (c1 === "{") {
      advance(L);
      advance(L);
      return { type: "DOLLAR_BRACE", value: "${", start, end: L.b };
    }
    if (c1 === "'") {
      const si = L.i;
      advance(L);
      advance(L);
      while (L.i < L.len && L.src[L.i] !== "'") {
        if (L.src[L.i] === "\\" && L.i + 1 < L.len) advance(L);
        advance(L);
      }
      if (L.i < L.len) advance(L);
      return {
        type: "ANSI_C",
        value: L.src.slice(si, L.i),
        start,
        end: L.b
      };
    }
    advance(L);
    return { type: "DOLLAR", value: "$", start, end: L.b };
  }
  if (c === "`") {
    advance(L);
    return { type: "BACKTICK", value: "`", start, end: L.b };
  }
  if (isDigit(c)) {
    let j = L.i;
    while (j < L.len && isDigit(L.src[j])) j++;
    const after = j < L.len ? L.src[j] : "";
    if (after === ">" || after === "<") {
      const si = L.i;
      while (L.i < j) advance(L);
      return {
        type: "WORD",
        value: L.src.slice(si, L.i),
        start,
        end: L.b
      };
    }
  }
  if (isWordStart(c) || c === "{" || c === "}") {
    const si = L.i;
    while (L.i < L.len) {
      const ch = L.src[L.i];
      if (ch === "\\") {
        if (L.i + 1 >= L.len) {
          break;
        }
        if (L.src[L.i + 1] === "\n") {
          advance(L);
          advance(L);
          continue;
        }
        advance(L);
        advance(L);
        continue;
      }
      if (!isWordChar(ch) && ch !== "{" && ch !== "}") {
        break;
      }
      advance(L);
    }
    if (L.i > si) {
      const v = L.src.slice(si, L.i);
      if (/^-?\d+$/.test(v)) {
        return { type: "NUMBER", value: v, start, end: L.b };
      }
      return { type: "WORD", value: v, start, end: L.b };
    }
  }
  advance(L);
  return { type: "WORD", value: c, start, end: L.b };
}
function parseSource(source, timeoutMs) {
  const L = makeLexer(source);
  const srcBytes = byteLengthUtf8(source);
  const P = {
    L,
    src: source,
    srcBytes,
    isAscii: srcBytes === source.length,
    nodeCount: 0,
    deadline: performance.now() + (timeoutMs ?? PARSE_TIMEOUT_MS),
    aborted: false,
    inBacktick: 0,
    stopToken: null
  };
  try {
    const program = parseProgram(P);
    if (P.aborted) return null;
    return program;
  } catch {
    return null;
  }
}
function byteLengthUtf8(s) {
  let b = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c < 128) b++;
    else if (c < 2048) b += 2;
    else if (c >= 55296 && c <= 56319) {
      b += 4;
      i++;
    } else b += 3;
  }
  return b;
}
function checkBudget(P) {
  P.nodeCount++;
  if (P.nodeCount > MAX_NODES) {
    P.aborted = true;
    throw new Error("budget");
  }
  if ((P.nodeCount & 127) === 0 && performance.now() > P.deadline) {
    P.aborted = true;
    throw new Error("timeout");
  }
}
function mk(P, type, start, end, children) {
  checkBudget(P);
  return {
    type,
    text: sliceBytes(P, start, end),
    startIndex: start,
    endIndex: end,
    children
  };
}
function sliceBytes(P, startByte, endByte) {
  if (P.isAscii) return P.src.slice(startByte, endByte);
  const L = P.L;
  if (!L.byteTable) byteAt(L, 0);
  const t = L.byteTable;
  let lo = 0;
  let hi = P.src.length;
  while (lo < hi) {
    const m = lo + hi >>> 1;
    if (t[m] < startByte) lo = m + 1;
    else hi = m;
  }
  const sc = lo;
  lo = sc;
  hi = P.src.length;
  while (lo < hi) {
    const m = lo + hi >>> 1;
    if (t[m] < endByte) lo = m + 1;
    else hi = m;
  }
  return P.src.slice(sc, lo);
}
function leaf(P, type, tok) {
  return mk(P, type, tok.start, tok.end, []);
}
function parseProgram(P) {
  const children = [];
  skipBlanks(P.L);
  while (true) {
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "NEWLINE") {
      skipBlanks(P.L);
      continue;
    }
    restoreLex(P.L, save);
    break;
  }
  const progStart = P.L.b;
  while (P.L.i < P.L.len) {
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "EOF") break;
    if (t.type === "NEWLINE") continue;
    if (t.type === "COMMENT") {
      children.push(leaf(P, "comment", t));
      continue;
    }
    restoreLex(P.L, save);
    const stmts = parseStatements(P, null);
    for (const s of stmts) children.push(s);
    if (stmts.length === 0) {
      const errTok = nextToken(P.L, "cmd");
      if (errTok.type === "EOF") break;
      if (errTok.type === "OP" && errTok.value === ";;" && children.length > 0) {
        continue;
      }
      children.push(mk(P, "ERROR", errTok.start, errTok.end, []));
    }
  }
  const progEnd = children.length > 0 ? P.srcBytes : progStart;
  return mk(P, "program", progStart, progEnd, children);
}
function saveLex(L) {
  return L.b * 65536 + L.i;
}
function restoreLex(L, s) {
  L.i = s & 65535;
  L.b = s >>> 16;
}
function parseStatements(P, terminator) {
  const out = [];
  while (true) {
    skipBlanks(P.L);
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "EOF") {
      restoreLex(P.L, save);
      break;
    }
    if (t.type === "NEWLINE") {
      if (P.L.heredocs.length > 0) {
        scanHeredocBodies(P);
      }
      continue;
    }
    if (t.type === "COMMENT") {
      out.push(leaf(P, "comment", t));
      continue;
    }
    if (terminator && t.type === "OP" && t.value === terminator) {
      restoreLex(P.L, save);
      break;
    }
    if (t.type === "OP" && (t.value === ")" || t.value === "}" || t.value === ";;" || t.value === ";&" || t.value === ";;&" || t.value === "))" || t.value === "]]" || t.value === "]")) {
      restoreLex(P.L, save);
      break;
    }
    if (t.type === "BACKTICK" && P.inBacktick > 0) {
      restoreLex(P.L, save);
      break;
    }
    if (t.type === "WORD" && (t.value === "then" || t.value === "elif" || t.value === "else" || t.value === "fi" || t.value === "do" || t.value === "done" || t.value === "esac")) {
      restoreLex(P.L, save);
      break;
    }
    restoreLex(P.L, save);
    const stmt = parseAndOr(P);
    if (!stmt) break;
    out.push(stmt);
    skipBlanks(P.L);
    const save2 = saveLex(P.L);
    const sep = nextToken(P.L, "cmd");
    if (sep.type === "OP" && (sep.value === ";" || sep.value === "&")) {
      const save3 = saveLex(P.L);
      const after = nextToken(P.L, "cmd");
      restoreLex(P.L, save3);
      out.push(leaf(P, sep.value, sep));
      if (after.type === "EOF" || after.type === "OP" && (after.value === ")" || after.value === "}" || after.value === ";;" || after.value === ";&" || after.value === ";;&") || after.type === "WORD" && (after.value === "then" || after.value === "elif" || after.value === "else" || after.value === "fi" || after.value === "do" || after.value === "done" || after.value === "esac")) {
        continue;
      }
    } else if (sep.type === "NEWLINE") {
      if (P.L.heredocs.length > 0) {
        scanHeredocBodies(P);
      }
      continue;
    } else {
      restoreLex(P.L, save2);
    }
  }
  return out;
}
function parseAndOr(P) {
  let left = parsePipeline(P);
  if (!left) return null;
  while (true) {
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "OP" && (t.value === "&&" || t.value === "||")) {
      const op = leaf(P, t.value, t);
      skipNewlines(P);
      const right = parsePipeline(P);
      if (!right) {
        left = mk(P, "list", left.startIndex, op.endIndex, [left, op]);
        break;
      }
      if (right.type === "redirected_statement" && right.children.length >= 2) {
        const inner = right.children[0];
        const redirs = right.children.slice(1);
        const listNode = mk(P, "list", left.startIndex, inner.endIndex, [
          left,
          op,
          inner
        ]);
        const lastR = redirs[redirs.length - 1];
        left = mk(
          P,
          "redirected_statement",
          listNode.startIndex,
          lastR.endIndex,
          [listNode, ...redirs]
        );
      } else {
        left = mk(P, "list", left.startIndex, right.endIndex, [left, op, right]);
      }
    } else {
      restoreLex(P.L, save);
      break;
    }
  }
  return left;
}
function skipNewlines(P) {
  while (true) {
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type !== "NEWLINE") {
      restoreLex(P.L, save);
      break;
    }
  }
}
function parsePipeline(P) {
  let first = parseCommand(P);
  if (!first) return null;
  const parts = [first];
  while (true) {
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "OP" && (t.value === "|" || t.value === "|&")) {
      const op = leaf(P, t.value, t);
      skipNewlines(P);
      const next = parseCommand(P);
      if (!next) {
        parts.push(op);
        break;
      }
      if (next.type === "redirected_statement" && next.children.length >= 2 && parts.length >= 1) {
        const inner = next.children[0];
        const redirs = next.children.slice(1);
        const pipeKids = [...parts, op, inner];
        const pipeNode = mk(
          P,
          "pipeline",
          pipeKids[0].startIndex,
          inner.endIndex,
          pipeKids
        );
        const lastR = redirs[redirs.length - 1];
        const wrapped = mk(
          P,
          "redirected_statement",
          pipeNode.startIndex,
          lastR.endIndex,
          [pipeNode, ...redirs]
        );
        parts.length = 0;
        parts.push(wrapped);
        first = wrapped;
        continue;
      }
      parts.push(op, next);
    } else {
      restoreLex(P.L, save);
      break;
    }
  }
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  return mk(P, "pipeline", parts[0].startIndex, last.endIndex, parts);
}
function parseCommand(P) {
  skipBlanks(P.L);
  const save = saveLex(P.L);
  const t = nextToken(P.L, "cmd");
  if (t.type === "EOF") {
    restoreLex(P.L, save);
    return null;
  }
  if (t.type === "OP" && t.value === "!") {
    const bang = leaf(P, "!", t);
    const inner = parseCommand(P);
    if (!inner) {
      restoreLex(P.L, save);
      return null;
    }
    if (inner.type === "redirected_statement" && inner.children.length >= 2) {
      const cmd = inner.children[0];
      const redirs = inner.children.slice(1);
      const neg = mk(P, "negated_command", bang.startIndex, cmd.endIndex, [
        bang,
        cmd
      ]);
      const lastR = redirs[redirs.length - 1];
      return mk(P, "redirected_statement", neg.startIndex, lastR.endIndex, [
        neg,
        ...redirs
      ]);
    }
    return mk(P, "negated_command", bang.startIndex, inner.endIndex, [
      bang,
      inner
    ]);
  }
  if (t.type === "OP" && t.value === "(") {
    const open = leaf(P, "(", t);
    const body = parseStatements(P, ")");
    const closeTok = nextToken(P.L, "cmd");
    const close = closeTok.type === "OP" && closeTok.value === ")" ? leaf(P, ")", closeTok) : mk(P, ")", open.endIndex, open.endIndex, []);
    const node = mk(P, "subshell", open.startIndex, close.endIndex, [
      open,
      ...body,
      close
    ]);
    return maybeRedirect(P, node);
  }
  if (t.type === "OP" && t.value === "((") {
    const open = leaf(P, "((", t);
    const exprs = parseArithCommaList(P, "))", "var");
    const closeTok = nextToken(P.L, "cmd");
    const close = closeTok.value === "))" ? leaf(P, "))", closeTok) : mk(P, "))", open.endIndex, open.endIndex, []);
    return mk(P, "compound_statement", open.startIndex, close.endIndex, [
      open,
      ...exprs,
      close
    ]);
  }
  if (t.type === "OP" && t.value === "{") {
    const open = leaf(P, "{", t);
    const body = parseStatements(P, "}");
    const closeTok = nextToken(P.L, "cmd");
    const close = closeTok.type === "OP" && closeTok.value === "}" ? leaf(P, "}", closeTok) : mk(P, "}", open.endIndex, open.endIndex, []);
    const node = mk(P, "compound_statement", open.startIndex, close.endIndex, [
      open,
      ...body,
      close
    ]);
    return maybeRedirect(P, node);
  }
  if (t.type === "OP" && (t.value === "[" || t.value === "[[")) {
    const open = leaf(P, t.value, t);
    const closer = t.value === "[" ? "]" : "]]";
    const exprSave = saveLex(P.L);
    let expr = parseTestExpr(P, closer);
    skipBlanks(P.L);
    if (t.value === "[" && peek(P.L) !== "]") {
      restoreLex(P.L, exprSave);
      const prevStop = P.stopToken;
      P.stopToken = "]";
      const rstmt = parseCommand(P);
      P.stopToken = prevStop;
      if (rstmt && rstmt.type === "redirected_statement") {
        expr = rstmt;
      } else {
        restoreLex(P.L, exprSave);
        expr = parseTestExpr(P, closer);
      }
      skipBlanks(P.L);
    }
    const closeTok = nextToken(P.L, "arg");
    let close;
    if (closeTok.value === closer) {
      close = leaf(P, closer, closeTok);
    } else {
      close = mk(P, closer, open.endIndex, open.endIndex, []);
    }
    const kids = expr ? [open, expr, close] : [open, close];
    return mk(P, "test_command", open.startIndex, close.endIndex, kids);
  }
  if (t.type === "WORD") {
    if (t.value === "if") return maybeRedirect(P, parseIf(P, t), true);
    if (t.value === "while" || t.value === "until")
      return maybeRedirect(P, parseWhile(P, t), true);
    if (t.value === "for") return maybeRedirect(P, parseFor(P, t), true);
    if (t.value === "select") return maybeRedirect(P, parseFor(P, t), true);
    if (t.value === "case") return maybeRedirect(P, parseCase(P, t), true);
    if (t.value === "function") return parseFunction(P, t);
    if (DECL_KEYWORDS.has(t.value))
      return maybeRedirect(P, parseDeclaration(P, t));
    if (t.value === "unset" || t.value === "unsetenv") {
      return maybeRedirect(P, parseUnset(P, t));
    }
  }
  restoreLex(P.L, save);
  return parseSimpleCommand(P);
}
function parseSimpleCommand(P) {
  const start = P.L.b;
  const assignments = [];
  const preRedirects = [];
  while (true) {
    skipBlanks(P.L);
    const a = tryParseAssignment(P);
    if (a) {
      assignments.push(a);
      continue;
    }
    const r = tryParseRedirect(P);
    if (r) {
      preRedirects.push(r);
      continue;
    }
    break;
  }
  skipBlanks(P.L);
  const save = saveLex(P.L);
  const nameTok = nextToken(P.L, "cmd");
  if (nameTok.type === "EOF" || nameTok.type === "NEWLINE" || nameTok.type === "COMMENT" || nameTok.type === "OP" && nameTok.value !== "{" && nameTok.value !== "[" && nameTok.value !== "[[" || nameTok.type === "WORD" && SHELL_KEYWORDS.has(nameTok.value) && nameTok.value !== "in") {
    restoreLex(P.L, save);
    if (assignments.length === 1 && preRedirects.length === 0) {
      return assignments[0];
    }
    if (preRedirects.length > 0 && assignments.length === 0) {
      const last = preRedirects[preRedirects.length - 1];
      return mk(
        P,
        "redirected_statement",
        preRedirects[0].startIndex,
        last.endIndex,
        preRedirects
      );
    }
    if (assignments.length > 1 && preRedirects.length === 0) {
      const last = assignments[assignments.length - 1];
      return mk(
        P,
        "variable_assignments",
        assignments[0].startIndex,
        last.endIndex,
        assignments
      );
    }
    if (assignments.length > 0 || preRedirects.length > 0) {
      const all = [...assignments, ...preRedirects];
      const last = all[all.length - 1];
      return mk(P, "command", start, last.endIndex, all);
    }
    return null;
  }
  restoreLex(P.L, save);
  const fnSave = saveLex(P.L);
  const nm = parseWord(P, "cmd");
  if (nm && nm.type === "word") {
    skipBlanks(P.L);
    if (peek(P.L) === "(" && peek(P.L, 1) === ")") {
      const oTok = nextToken(P.L, "cmd");
      const cTok = nextToken(P.L, "cmd");
      const oParen = leaf(P, "(", oTok);
      const cParen = leaf(P, ")", cTok);
      skipBlanks(P.L);
      skipNewlines(P);
      const body = parseCommand(P);
      if (body) {
        let bodyKids = [body];
        if (body.type === "redirected_statement" && body.children.length >= 2 && body.children[0].type === "compound_statement") {
          bodyKids = body.children;
        }
        const last = bodyKids[bodyKids.length - 1];
        return mk(P, "function_definition", nm.startIndex, last.endIndex, [
          nm,
          oParen,
          cParen,
          ...bodyKids
        ]);
      }
    }
  }
  restoreLex(P.L, fnSave);
  const nameArg = parseWord(P, "cmd");
  if (!nameArg) {
    if (assignments.length === 1) return assignments[0];
    return null;
  }
  const cmdName = mk(P, "command_name", nameArg.startIndex, nameArg.endIndex, [
    nameArg
  ]);
  const args = [];
  const redirects = [];
  let heredocRedirect = null;
  while (true) {
    skipBlanks(P.L);
    const r = tryParseRedirect(P, true);
    if (r) {
      if (r.type === "heredoc_redirect") {
        heredocRedirect = r;
      } else if (r.type === "herestring_redirect") {
        args.push(r);
      } else {
        redirects.push(r);
      }
      continue;
    }
    if (redirects.length > 0) break;
    if (P.stopToken === "]" && peek(P.L) === "]") break;
    const save2 = saveLex(P.L);
    const pk = nextToken(P.L, "arg");
    if (pk.type === "EOF" || pk.type === "NEWLINE" || pk.type === "COMMENT" || pk.type === "OP" && (pk.value === "|" || pk.value === "|&" || pk.value === "&&" || pk.value === "||" || pk.value === ";" || pk.value === ";;" || pk.value === ";&" || pk.value === ";;&" || pk.value === "&" || pk.value === ")" || pk.value === "}" || pk.value === "))")) {
      restoreLex(P.L, save2);
      break;
    }
    restoreLex(P.L, save2);
    const arg = parseWord(P, "arg");
    if (!arg) {
      if (peek(P.L) === "(") {
        const oTok = nextToken(P.L, "cmd");
        const open = leaf(P, "(", oTok);
        const body = parseStatements(P, ")");
        const cTok = nextToken(P.L, "cmd");
        const close = cTok.type === "OP" && cTok.value === ")" ? leaf(P, ")", cTok) : mk(P, ")", open.endIndex, open.endIndex, []);
        args.push(
          mk(P, "subshell", open.startIndex, close.endIndex, [
            open,
            ...body,
            close
          ])
        );
        continue;
      }
      break;
    }
    if (arg.type === "word" && arg.text === "=") {
      args.push(mk(P, "ERROR", arg.startIndex, arg.endIndex, [arg]));
      continue;
    }
    if ((arg.type === "word" || arg.type === "concatenation") && peek(P.L) === "(" && P.L.b === arg.endIndex) {
      args.push(mk(P, "ERROR", arg.startIndex, arg.endIndex, [arg]));
      continue;
    }
    args.push(arg);
  }
  const cmdChildren = [...assignments, ...preRedirects, cmdName, ...args];
  const cmdEnd = cmdChildren.length > 0 ? cmdChildren[cmdChildren.length - 1].endIndex : cmdName.endIndex;
  const cmdStart = cmdChildren[0].startIndex;
  const cmd = mk(P, "command", cmdStart, cmdEnd, cmdChildren);
  if (heredocRedirect) {
    scanHeredocBodies(P);
    const hd = P.L.heredocs.shift();
    if (hd && heredocRedirect.children.length >= 2) {
      const bodyNode = mk(
        P,
        "heredoc_body",
        hd.bodyStart,
        hd.bodyEnd,
        hd.quoted ? [] : parseHeredocBodyContent(P, hd.bodyStart, hd.bodyEnd)
      );
      const endNode = mk(P, "heredoc_end", hd.endStart, hd.endEnd, []);
      heredocRedirect.children.push(bodyNode, endNode);
      heredocRedirect.endIndex = hd.endEnd;
      heredocRedirect.text = sliceBytes(
        P,
        heredocRedirect.startIndex,
        hd.endEnd
      );
    }
    const allR = [...preRedirects, heredocRedirect, ...redirects];
    const rStart = preRedirects.length > 0 ? Math.min(cmd.startIndex, preRedirects[0].startIndex) : cmd.startIndex;
    return mk(P, "redirected_statement", rStart, heredocRedirect.endIndex, [
      cmd,
      ...allR
    ]);
  }
  if (redirects.length > 0) {
    const last = redirects[redirects.length - 1];
    return mk(P, "redirected_statement", cmd.startIndex, last.endIndex, [
      cmd,
      ...redirects
    ]);
  }
  return cmd;
}
function maybeRedirect(P, node, allowHerestring = false) {
  const redirects = [];
  while (true) {
    skipBlanks(P.L);
    const save = saveLex(P.L);
    const r = tryParseRedirect(P);
    if (!r) break;
    if (r.type === "herestring_redirect" && !allowHerestring) {
      restoreLex(P.L, save);
      break;
    }
    redirects.push(r);
  }
  if (redirects.length === 0) return node;
  const last = redirects[redirects.length - 1];
  return mk(P, "redirected_statement", node.startIndex, last.endIndex, [
    node,
    ...redirects
  ]);
}
function tryParseAssignment(P) {
  const save = saveLex(P.L);
  skipBlanks(P.L);
  const startB = P.L.b;
  if (!isIdentStart(peek(P.L))) {
    restoreLex(P.L, save);
    return null;
  }
  while (isIdentChar(peek(P.L))) advance(P.L);
  const nameEnd = P.L.b;
  let subEnd = nameEnd;
  if (peek(P.L) === "[") {
    advance(P.L);
    let depth = 1;
    while (P.L.i < P.L.len && depth > 0) {
      const c2 = peek(P.L);
      if (c2 === "[") depth++;
      else if (c2 === "]") depth--;
      advance(P.L);
    }
    subEnd = P.L.b;
  }
  const c = peek(P.L);
  const c1 = peek(P.L, 1);
  let op;
  if (c === "=" && c1 !== "=") {
    op = "=";
  } else if (c === "+" && c1 === "=") {
    op = "+=";
  } else {
    restoreLex(P.L, save);
    return null;
  }
  const nameNode = mk(P, "variable_name", startB, nameEnd, []);
  let lhs = nameNode;
  if (subEnd > nameEnd) {
    const brOpen = mk(P, "[", nameEnd, nameEnd + 1, []);
    const idx = parseSubscriptIndex(P, nameEnd + 1, subEnd - 1);
    const brClose = mk(P, "]", subEnd - 1, subEnd, []);
    lhs = mk(P, "subscript", startB, subEnd, [nameNode, brOpen, idx, brClose]);
  }
  const opStart = P.L.b;
  advance(P.L);
  if (op === "+=") advance(P.L);
  const opEnd = P.L.b;
  const opNode = mk(P, op, opStart, opEnd, []);
  let val = null;
  if (peek(P.L) === "(") {
    const aoTok = nextToken(P.L, "cmd");
    const aOpen = leaf(P, "(", aoTok);
    const elems = [aOpen];
    while (true) {
      skipBlanks(P.L);
      if (peek(P.L) === ")") break;
      const e = parseWord(P, "arg");
      if (!e) break;
      elems.push(e);
    }
    const acTok = nextToken(P.L, "cmd");
    const aClose = acTok.value === ")" ? leaf(P, ")", acTok) : mk(P, ")", aOpen.endIndex, aOpen.endIndex, []);
    elems.push(aClose);
    val = mk(P, "array", aOpen.startIndex, aClose.endIndex, elems);
  } else {
    const c2 = peek(P.L);
    if (c2 && c2 !== " " && c2 !== "	" && c2 !== "\n" && c2 !== ";" && c2 !== "&" && c2 !== "|" && c2 !== ")" && c2 !== "}") {
      val = parseWord(P, "arg");
    }
  }
  const kids = val ? [lhs, opNode, val] : [lhs, opNode];
  const end = val ? val.endIndex : opEnd;
  return mk(P, "variable_assignment", startB, end, kids);
}
function parseSubscriptIndexInline(P) {
  skipBlanks(P.L);
  const c = peek(P.L);
  if ((c === "@" || c === "*") && peek(P.L, 1) === "]") {
    const s = P.L.b;
    advance(P.L);
    return mk(P, "word", s, P.L.b, []);
  }
  if (c === "(" && peek(P.L, 1) === "(") {
    const oStart = P.L.b;
    advance(P.L);
    advance(P.L);
    const open = mk(P, "((", oStart, P.L.b, []);
    const inner = parseArithExpr(P, "))", "var");
    skipBlanks(P.L);
    let close;
    if (peek(P.L) === ")" && peek(P.L, 1) === ")") {
      const cs = P.L.b;
      advance(P.L);
      advance(P.L);
      close = mk(P, "))", cs, P.L.b, []);
    } else {
      close = mk(P, "))", P.L.b, P.L.b, []);
    }
    const kids = inner ? [open, inner, close] : [open, close];
    return mk(P, "compound_statement", open.startIndex, close.endIndex, kids);
  }
  return parseArithExpr(P, "]", "word");
}
function parseSubscriptIndex(P, startB, endB) {
  const text = sliceBytes(P, startB, endB);
  if (/^\d+$/.test(text)) return mk(P, "number", startB, endB, []);
  const m = /^\$([a-zA-Z_]\w*)$/.exec(text);
  if (m) {
    const dollar = mk(P, "$", startB, startB + 1, []);
    const vn = mk(P, "variable_name", startB + 1, endB, []);
    return mk(P, "simple_expansion", startB, endB, [dollar, vn]);
  }
  if (text.length === 2 && text[0] === "$" && SPECIAL_VARS.has(text[1])) {
    const dollar = mk(P, "$", startB, startB + 1, []);
    const vn = mk(P, "special_variable_name", startB + 1, endB, []);
    return mk(P, "simple_expansion", startB, endB, [dollar, vn]);
  }
  return mk(P, "word", startB, endB, []);
}
function isRedirectLiteralStart(P) {
  const c = peek(P.L);
  if (c === "" || c === "\n") return false;
  if (c === "|" || c === "&" || c === ";" || c === "(" || c === ")")
    return false;
  if (c === "<" || c === ">") {
    return peek(P.L, 1) === "(";
  }
  if (isDigit(c)) {
    let j = P.L.i;
    while (j < P.L.len && isDigit(P.L.src[j])) j++;
    const after = j < P.L.len ? P.L.src[j] : "";
    if (after === ">" || after === "<") return false;
  }
  if (c === "}") return false;
  if (P.stopToken === "]" && c === "]") return false;
  return true;
}
function tryParseRedirect(P, greedy = false) {
  const save = saveLex(P.L);
  skipBlanks(P.L);
  let fd = null;
  if (isDigit(peek(P.L))) {
    const startB = P.L.b;
    let j = P.L.i;
    while (j < P.L.len && isDigit(P.L.src[j])) j++;
    const after = j < P.L.len ? P.L.src[j] : "";
    if (after === ">" || after === "<") {
      while (P.L.i < j) advance(P.L);
      fd = mk(P, "file_descriptor", startB, P.L.b, []);
    }
  }
  const t = nextToken(P.L, "arg");
  if (t.type !== "OP") {
    restoreLex(P.L, save);
    return null;
  }
  const v = t.value;
  if (v === "<<<") {
    const op = leaf(P, "<<<", t);
    skipBlanks(P.L);
    const target = parseWord(P, "arg");
    const end = target ? target.endIndex : op.endIndex;
    const kids = target ? [op, target] : [op];
    return mk(
      P,
      "herestring_redirect",
      fd ? fd.startIndex : op.startIndex,
      end,
      fd ? [fd, ...kids] : kids
    );
  }
  if (v === "<<" || v === "<<-") {
    const op = leaf(P, v, t);
    skipBlanks(P.L);
    const dStart = P.L.b;
    let quoted = false;
    let delim = "";
    const dc = peek(P.L);
    if (dc === "'" || dc === '"') {
      quoted = true;
      advance(P.L);
      while (P.L.i < P.L.len && peek(P.L) !== dc) {
        delim += peek(P.L);
        advance(P.L);
      }
      if (P.L.i < P.L.len) advance(P.L);
    } else if (dc === "\\") {
      quoted = true;
      advance(P.L);
      if (P.L.i < P.L.len && peek(P.L) !== "\n") {
        delim += peek(P.L);
        advance(P.L);
      }
      while (P.L.i < P.L.len && isIdentChar(peek(P.L))) {
        delim += peek(P.L);
        advance(P.L);
      }
    } else {
      while (P.L.i < P.L.len && isHeredocDelimChar(peek(P.L))) {
        delim += peek(P.L);
        advance(P.L);
      }
    }
    const dEnd = P.L.b;
    const startNode = mk(P, "heredoc_start", dStart, dEnd, []);
    P.L.heredocs.push({
      delim,
      stripTabs: v === "<<-",
      quoted,
      bodyStart: 0,
      bodyEnd: 0,
      endStart: 0,
      endEnd: 0
    });
    const kids = fd ? [fd, op, startNode] : [op, startNode];
    const startIdx = fd ? fd.startIndex : op.startIndex;
    while (true) {
      skipBlanks(P.L);
      const tc = peek(P.L);
      if (tc === "\n" || tc === "" || P.L.i >= P.L.len) break;
      if (tc === ">" || tc === "<" || isDigit(tc)) {
        const rSave = saveLex(P.L);
        const r = tryParseRedirect(P);
        if (r && r.type === "file_redirect") {
          kids.push(r);
          continue;
        }
        restoreLex(P.L, rSave);
      }
      if (tc === "|" && peek(P.L, 1) !== "|") {
        advance(P.L);
        skipBlanks(P.L);
        const pipeCmds = [];
        while (true) {
          const cmd = parseCommand(P);
          if (!cmd) break;
          pipeCmds.push(cmd);
          skipBlanks(P.L);
          if (peek(P.L) === "|" && peek(P.L, 1) !== "|") {
            const ps = P.L.b;
            advance(P.L);
            pipeCmds.push(mk(P, "|", ps, P.L.b, []));
            skipBlanks(P.L);
            continue;
          }
          break;
        }
        if (pipeCmds.length > 0) {
          const pl = pipeCmds[pipeCmds.length - 1];
          kids.push(
            mk(P, "pipeline", pipeCmds[0].startIndex, pl.endIndex, pipeCmds)
          );
        }
        continue;
      }
      if (tc === "&" && peek(P.L, 1) === "&" || tc === "|" && peek(P.L, 1) === "|") {
        advance(P.L);
        advance(P.L);
        skipBlanks(P.L);
        const rhs = parseCommand(P);
        if (rhs) kids.push(rhs);
        continue;
      }
      if (tc === "&" || tc === ";" || tc === "(" || tc === ")") {
        const eStart2 = P.L.b;
        while (P.L.i < P.L.len && peek(P.L) !== "\n") advance(P.L);
        kids.push(mk(P, "ERROR", eStart2, P.L.b, []));
        break;
      }
      const w = parseWord(P, "arg");
      if (w) {
        kids.push(w);
        continue;
      }
      const eStart = P.L.b;
      while (P.L.i < P.L.len && peek(P.L) !== "\n") advance(P.L);
      if (P.L.b > eStart) kids.push(mk(P, "ERROR", eStart, P.L.b, []));
      break;
    }
    return mk(P, "heredoc_redirect", startIdx, P.L.b, kids);
  }
  if (v === "<&-" || v === ">&-") {
    const op = leaf(P, v, t);
    const kids = [];
    if (fd) kids.push(fd);
    kids.push(op);
    skipBlanks(P.L);
    const dSave = saveLex(P.L);
    const dest = isRedirectLiteralStart(P) ? parseWord(P, "arg") : null;
    if (dest) {
      kids.push(dest);
    } else {
      restoreLex(P.L, dSave);
    }
    const startIdx = fd ? fd.startIndex : op.startIndex;
    const end = dest ? dest.endIndex : op.endIndex;
    return mk(P, "file_redirect", startIdx, end, kids);
  }
  if (v === ">" || v === ">>" || v === ">&" || v === ">|" || v === "&>" || v === "&>>" || v === "<" || v === "<&") {
    const op = leaf(P, v, t);
    const kids = [];
    if (fd) kids.push(fd);
    kids.push(op);
    let end = op.endIndex;
    let taken = 0;
    while (true) {
      skipBlanks(P.L);
      if (!isRedirectLiteralStart(P)) break;
      if (!greedy && taken >= 1) break;
      const tc = peek(P.L);
      const tc1 = peek(P.L, 1);
      let target = null;
      if ((tc === "<" || tc === ">") && tc1 === "(") {
        target = parseProcessSub(P);
      } else {
        target = parseWord(P, "arg");
      }
      if (!target) break;
      kids.push(target);
      end = target.endIndex;
      taken++;
    }
    const startIdx = fd ? fd.startIndex : op.startIndex;
    return mk(P, "file_redirect", startIdx, end, kids);
  }
  restoreLex(P.L, save);
  return null;
}
function parseProcessSub(P) {
  const c = peek(P.L);
  if (c !== "<" && c !== ">" || peek(P.L, 1) !== "(") return null;
  const start = P.L.b;
  advance(P.L);
  advance(P.L);
  const open = mk(P, c + "(", start, P.L.b, []);
  const body = parseStatements(P, ")");
  skipBlanks(P.L);
  let close;
  if (peek(P.L) === ")") {
    const cs = P.L.b;
    advance(P.L);
    close = mk(P, ")", cs, P.L.b, []);
  } else {
    close = mk(P, ")", P.L.b, P.L.b, []);
  }
  return mk(P, "process_substitution", start, close.endIndex, [
    open,
    ...body,
    close
  ]);
}
function scanHeredocBodies(P) {
  while (P.L.i < P.L.len && P.L.src[P.L.i] !== "\n") advance(P.L);
  if (P.L.i < P.L.len) advance(P.L);
  for (const hd of P.L.heredocs) {
    hd.bodyStart = P.L.b;
    const delimLen = hd.delim.length;
    while (P.L.i < P.L.len) {
      const lineStart = P.L.i;
      const lineStartB = P.L.b;
      let checkI = lineStart;
      if (hd.stripTabs) {
        while (checkI < P.L.len && P.L.src[checkI] === "	") checkI++;
      }
      if (P.L.src.startsWith(hd.delim, checkI) && (checkI + delimLen >= P.L.len || P.L.src[checkI + delimLen] === "\n" || P.L.src[checkI + delimLen] === "\r")) {
        hd.bodyEnd = lineStartB;
        while (P.L.i < checkI) advance(P.L);
        hd.endStart = P.L.b;
        for (let k = 0; k < delimLen; k++) advance(P.L);
        hd.endEnd = P.L.b;
        if (P.L.i < P.L.len && P.L.src[P.L.i] === "\n") advance(P.L);
        return;
      }
      while (P.L.i < P.L.len && P.L.src[P.L.i] !== "\n") advance(P.L);
      if (P.L.i < P.L.len) advance(P.L);
    }
    hd.bodyEnd = P.L.b;
    hd.endStart = P.L.b;
    hd.endEnd = P.L.b;
  }
}
function parseHeredocBodyContent(P, start, end) {
  const saved = saveLex(P.L);
  restoreLexToByte(P, start);
  const out = [];
  let contentStart = P.L.b;
  let sawExpansion = false;
  while (P.L.b < end) {
    const c = peek(P.L);
    if (c === "\\") {
      const nxt = peek(P.L, 1);
      if (nxt === "$" || nxt === "`" || nxt === "\\") {
        advance(P.L);
        advance(P.L);
        continue;
      }
      advance(P.L);
      continue;
    }
    if (c === "$" || c === "`") {
      const preB = P.L.b;
      const exp = parseDollarLike(P);
      if (exp && (exp.type === "simple_expansion" || exp.type === "expansion" || exp.type === "command_substitution" || exp.type === "arithmetic_expansion")) {
        if (sawExpansion && preB > contentStart) {
          out.push(mk(P, "heredoc_content", contentStart, preB, []));
        }
        out.push(exp);
        contentStart = P.L.b;
        sawExpansion = true;
      }
      continue;
    }
    advance(P.L);
  }
  if (sawExpansion) {
    out.push(mk(P, "heredoc_content", contentStart, end, []));
  }
  restoreLex(P.L, saved);
  return out;
}
function restoreLexToByte(P, targetByte) {
  if (!P.L.byteTable) byteAt(P.L, 0);
  const t = P.L.byteTable;
  let lo = 0;
  let hi = P.src.length;
  while (lo < hi) {
    const m = lo + hi >>> 1;
    if (t[m] < targetByte) lo = m + 1;
    else hi = m;
  }
  P.L.i = lo;
  P.L.b = targetByte;
}
function parseWord(P, _ctx) {
  skipBlanks(P.L);
  const parts = [];
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === " " || c === "	" || c === "\n" || c === "\r" || c === "" || c === "|" || c === "&" || c === ";" || c === "(" || c === ")") {
      break;
    }
    if (c === "<" || c === ">") {
      if (peek(P.L, 1) === "(") {
        const ps = parseProcessSub(P);
        if (ps) parts.push(ps);
        continue;
      }
      break;
    }
    if (c === '"') {
      parts.push(parseDoubleQuoted(P));
      continue;
    }
    if (c === "'") {
      const tok = nextToken(P.L, "arg");
      parts.push(leaf(P, "raw_string", tok));
      continue;
    }
    if (c === "$") {
      const c1 = peek(P.L, 1);
      if (c1 === "'") {
        const tok = nextToken(P.L, "arg");
        parts.push(leaf(P, "ansi_c_string", tok));
        continue;
      }
      if (c1 === '"') {
        const dTok = {
          type: "DOLLAR",
          value: "$",
          start: P.L.b,
          end: P.L.b + 1
        };
        advance(P.L);
        parts.push(leaf(P, "$", dTok));
        parts.push(parseDoubleQuoted(P));
        continue;
      }
      if (c1 === "`") {
        advance(P.L);
        continue;
      }
      const exp = parseDollarLike(P);
      if (exp) parts.push(exp);
      continue;
    }
    if (c === "`") {
      if (P.inBacktick > 0) break;
      const bt = parseBacktick(P);
      if (bt) parts.push(bt);
      continue;
    }
    if (c === "{") {
      const be = tryParseBraceExpr(P);
      if (be) {
        parts.push(be);
        continue;
      }
      const nc = peek(P.L, 1);
      if (nc === ";" || nc === "|" || nc === "&" || nc === "\n" || nc === "" || nc === ")" || nc === " " || nc === "	") {
        const bStart = P.L.b;
        advance(P.L);
        parts.push(mk(P, "word", bStart, P.L.b, []));
        continue;
      }
      const cat = tryParseBraceLikeCat(P);
      if (cat) {
        for (const p of cat) parts.push(p);
        continue;
      }
    }
    if (c === "}") {
      const bStart = P.L.b;
      advance(P.L);
      parts.push(mk(P, "word", bStart, P.L.b, []));
      continue;
    }
    if (c === "[" || c === "]") {
      const bStart = P.L.b;
      advance(P.L);
      parts.push(mk(P, "word", bStart, P.L.b, []));
      continue;
    }
    const frag = parseBareWord(P);
    if (!frag) break;
    if (frag.type === "word" && /^-?(0x)?[0-9]+#$/.test(frag.text) && peek(P.L) === "$" && (peek(P.L, 1) === "{" || peek(P.L, 1) === "(")) {
      const exp = parseDollarLike(P);
      if (exp) {
        parts.push(mk(P, "number", frag.startIndex, exp.endIndex, [exp]));
        continue;
      }
    }
    parts.push(frag);
  }
  if (parts.length === 0) return null;
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const last = parts[parts.length - 1];
  return mk(P, "concatenation", first.startIndex, last.endIndex, parts);
}
function parseBareWord(P) {
  const start = P.L.b;
  const startI = P.L.i;
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "\\") {
      if (P.L.i + 1 >= P.L.len) {
        break;
      }
      const nx = P.L.src[P.L.i + 1];
      if (nx === "\n" || nx === "\r" && P.L.src[P.L.i + 2] === "\n") {
        break;
      }
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === " " || c === "	" || c === "\n" || c === "\r" || c === "" || c === "|" || c === "&" || c === ";" || c === "(" || c === ")" || c === "<" || c === ">" || c === '"' || c === "'" || c === "$" || c === "`" || c === "{" || c === "}" || c === "[" || c === "]") {
      break;
    }
    advance(P.L);
  }
  if (P.L.b === start) return null;
  const text = P.src.slice(startI, P.L.i);
  const type = /^-?\d+$/.test(text) ? "number" : "word";
  return mk(P, type, start, P.L.b, []);
}
function tryParseBraceExpr(P) {
  const save = saveLex(P.L);
  if (peek(P.L) !== "{") return null;
  const oStart = P.L.b;
  advance(P.L);
  const oEnd = P.L.b;
  const p1Start = P.L.b;
  while (isDigit(peek(P.L)) || isIdentStart(peek(P.L))) advance(P.L);
  const p1End = P.L.b;
  if (p1End === p1Start || peek(P.L) !== "." || peek(P.L, 1) !== ".") {
    restoreLex(P.L, save);
    return null;
  }
  const dotStart = P.L.b;
  advance(P.L);
  advance(P.L);
  const dotEnd = P.L.b;
  const p2Start = P.L.b;
  while (isDigit(peek(P.L)) || isIdentStart(peek(P.L))) advance(P.L);
  const p2End = P.L.b;
  if (p2End === p2Start || peek(P.L) !== "}") {
    restoreLex(P.L, save);
    return null;
  }
  const cStart = P.L.b;
  advance(P.L);
  const cEnd = P.L.b;
  const p1Text = sliceBytes(P, p1Start, p1End);
  const p2Text = sliceBytes(P, p2Start, p2End);
  const p1IsNum = /^\d+$/.test(p1Text);
  const p2IsNum = /^\d+$/.test(p2Text);
  if (p1IsNum !== p2IsNum) {
    restoreLex(P.L, save);
    return null;
  }
  if (!p1IsNum && (p1Text.length !== 1 || p2Text.length !== 1)) {
    restoreLex(P.L, save);
    return null;
  }
  const p1Type = p1IsNum ? "number" : "word";
  const p2Type = p2IsNum ? "number" : "word";
  return mk(P, "brace_expression", oStart, cEnd, [
    mk(P, "{", oStart, oEnd, []),
    mk(P, p1Type, p1Start, p1End, []),
    mk(P, "..", dotStart, dotEnd, []),
    mk(P, p2Type, p2Start, p2End, []),
    mk(P, "}", cStart, cEnd, [])
  ]);
}
function tryParseBraceLikeCat(P) {
  if (peek(P.L) !== "{") return null;
  const oStart = P.L.b;
  advance(P.L);
  const oEnd = P.L.b;
  const inner = [mk(P, "word", oStart, oEnd, [])];
  while (P.L.i < P.L.len) {
    const bc = peek(P.L);
    if (bc === "}" || bc === "\n" || bc === ";" || bc === "|" || bc === "&" || bc === " " || bc === "	" || bc === "<" || bc === ">" || bc === "(" || bc === ")") {
      break;
    }
    if (bc === "[" || bc === "]") {
      const bStart = P.L.b;
      advance(P.L);
      inner.push(mk(P, "word", bStart, P.L.b, []));
      continue;
    }
    const midStart = P.L.b;
    while (P.L.i < P.L.len) {
      const mc = peek(P.L);
      if (mc === "}" || mc === "\n" || mc === ";" || mc === "|" || mc === "&" || mc === " " || mc === "	" || mc === "<" || mc === ">" || mc === "(" || mc === ")" || mc === "[" || mc === "]") {
        break;
      }
      advance(P.L);
    }
    const midEnd = P.L.b;
    if (midEnd > midStart) {
      const midText = sliceBytes(P, midStart, midEnd);
      const midType = /^-?\d+$/.test(midText) ? "number" : "word";
      inner.push(mk(P, midType, midStart, midEnd, []));
    } else {
      break;
    }
  }
  if (peek(P.L) === "}") {
    const cStart = P.L.b;
    advance(P.L);
    inner.push(mk(P, "word", cStart, P.L.b, []));
  }
  return inner;
}
function parseDoubleQuoted(P) {
  const qStart = P.L.b;
  advance(P.L);
  const qEnd = P.L.b;
  const openQ = mk(P, '"', qStart, qEnd, []);
  const parts = [openQ];
  let contentStart = P.L.b;
  let contentStartI = P.L.i;
  const flushContent = () => {
    if (P.L.b > contentStart) {
      const txt = P.src.slice(contentStartI, P.L.i);
      if (!/^[ \t]+$/.test(txt)) {
        parts.push(mk(P, "string_content", contentStart, P.L.b, []));
      }
    }
  };
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === '"') break;
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === "\n") {
      flushContent();
      advance(P.L);
      contentStart = P.L.b;
      contentStartI = P.L.i;
      continue;
    }
    if (c === "$") {
      const c1 = peek(P.L, 1);
      if (c1 === "(" || c1 === "{" || isIdentStart(c1) || SPECIAL_VARS.has(c1) || isDigit(c1)) {
        flushContent();
        const exp = parseDollarLike(P);
        if (exp) parts.push(exp);
        contentStart = P.L.b;
        contentStartI = P.L.i;
        continue;
      }
      if (c1 !== '"' && c1 !== "") {
        flushContent();
        const dS = P.L.b;
        advance(P.L);
        parts.push(mk(P, "$", dS, P.L.b, []));
        contentStart = P.L.b;
        contentStartI = P.L.i;
        continue;
      }
    }
    if (c === "`") {
      flushContent();
      const bt = parseBacktick(P);
      if (bt) parts.push(bt);
      contentStart = P.L.b;
      contentStartI = P.L.i;
      continue;
    }
    advance(P.L);
  }
  flushContent();
  let close;
  if (peek(P.L) === '"') {
    const cStart = P.L.b;
    advance(P.L);
    close = mk(P, '"', cStart, P.L.b, []);
  } else {
    close = mk(P, '"', P.L.b, P.L.b, []);
  }
  parts.push(close);
  return mk(P, "string", qStart, close.endIndex, parts);
}
function parseDollarLike(P) {
  const c1 = peek(P.L, 1);
  const dStart = P.L.b;
  if (c1 === "(" && peek(P.L, 2) === "(") {
    advance(P.L);
    advance(P.L);
    advance(P.L);
    const open = mk(P, "$((", dStart, P.L.b, []);
    const exprs = parseArithCommaList(P, "))", "var");
    skipBlanks(P.L);
    let close;
    if (peek(P.L) === ")" && peek(P.L, 1) === ")") {
      const cStart = P.L.b;
      advance(P.L);
      advance(P.L);
      close = mk(P, "))", cStart, P.L.b, []);
    } else {
      close = mk(P, "))", P.L.b, P.L.b, []);
    }
    return mk(P, "arithmetic_expansion", dStart, close.endIndex, [
      open,
      ...exprs,
      close
    ]);
  }
  if (c1 === "[") {
    advance(P.L);
    advance(P.L);
    const open = mk(P, "$[", dStart, P.L.b, []);
    const exprs = parseArithCommaList(P, "]", "var");
    skipBlanks(P.L);
    let close;
    if (peek(P.L) === "]") {
      const cStart = P.L.b;
      advance(P.L);
      close = mk(P, "]", cStart, P.L.b, []);
    } else {
      close = mk(P, "]", P.L.b, P.L.b, []);
    }
    return mk(P, "arithmetic_expansion", dStart, close.endIndex, [
      open,
      ...exprs,
      close
    ]);
  }
  if (c1 === "(") {
    advance(P.L);
    advance(P.L);
    const open = mk(P, "$(", dStart, P.L.b, []);
    let body = parseStatements(P, ")");
    skipBlanks(P.L);
    let close;
    if (peek(P.L) === ")") {
      const cStart = P.L.b;
      advance(P.L);
      close = mk(P, ")", cStart, P.L.b, []);
    } else {
      close = mk(P, ")", P.L.b, P.L.b, []);
    }
    if (body.length === 1 && body[0].type === "redirected_statement" && body[0].children.length === 1 && body[0].children[0].type === "file_redirect") {
      body = body[0].children;
    }
    return mk(P, "command_substitution", dStart, close.endIndex, [
      open,
      ...body,
      close
    ]);
  }
  if (c1 === "{") {
    advance(P.L);
    advance(P.L);
    const open = mk(P, "${", dStart, P.L.b, []);
    const inner = parseExpansionBody(P);
    let close;
    if (peek(P.L) === "}") {
      const cStart = P.L.b;
      advance(P.L);
      close = mk(P, "}", cStart, P.L.b, []);
    } else {
      close = mk(P, "}", P.L.b, P.L.b, []);
    }
    return mk(P, "expansion", dStart, close.endIndex, [open, ...inner, close]);
  }
  advance(P.L);
  const dEnd = P.L.b;
  const dollar = mk(P, "$", dStart, dEnd, []);
  const nc = peek(P.L);
  if (nc === "_" && !isIdentChar(peek(P.L, 1))) {
    const vStart = P.L.b;
    advance(P.L);
    const vn = mk(P, "special_variable_name", vStart, P.L.b, []);
    return mk(P, "simple_expansion", dStart, P.L.b, [dollar, vn]);
  }
  if (isIdentStart(nc)) {
    const vStart = P.L.b;
    while (isIdentChar(peek(P.L))) advance(P.L);
    const vn = mk(P, "variable_name", vStart, P.L.b, []);
    return mk(P, "simple_expansion", dStart, P.L.b, [dollar, vn]);
  }
  if (isDigit(nc)) {
    const vStart = P.L.b;
    advance(P.L);
    const vn = mk(P, "variable_name", vStart, P.L.b, []);
    return mk(P, "simple_expansion", dStart, P.L.b, [dollar, vn]);
  }
  if (SPECIAL_VARS.has(nc)) {
    const vStart = P.L.b;
    advance(P.L);
    const vn = mk(P, "special_variable_name", vStart, P.L.b, []);
    return mk(P, "simple_expansion", dStart, P.L.b, [dollar, vn]);
  }
  return dollar;
}
function parseExpansionBody(P) {
  const out = [];
  skipBlanks(P.L);
  {
    const c0 = peek(P.L);
    const c1 = peek(P.L, 1);
    if (c0 === "#" && c1 === "!" && peek(P.L, 2) === "}") {
      advance(P.L);
      advance(P.L);
      return out;
    }
    if (c0 === "!" && c1 === "#") {
      let j = 2;
      if (peek(P.L, j) === "#") j++;
      if (peek(P.L, j) === " ") j++;
      if (peek(P.L, j) === "}") {
        while (j-- > 0) advance(P.L);
        return out;
      }
    }
  }
  if (peek(P.L) === "#") {
    const s = P.L.b;
    advance(P.L);
    out.push(mk(P, "#", s, P.L.b, []));
  }
  const pc = peek(P.L);
  if ((pc === "!" || pc === "=" || pc === "~") && (isIdentStart(peek(P.L, 1)) || isDigit(peek(P.L, 1)))) {
    const s = P.L.b;
    advance(P.L);
    out.push(mk(P, pc, s, P.L.b, []));
  }
  skipBlanks(P.L);
  if (isIdentStart(peek(P.L))) {
    const s = P.L.b;
    while (isIdentChar(peek(P.L))) advance(P.L);
    out.push(mk(P, "variable_name", s, P.L.b, []));
  } else if (isDigit(peek(P.L))) {
    const s = P.L.b;
    while (isDigit(peek(P.L))) advance(P.L);
    out.push(mk(P, "variable_name", s, P.L.b, []));
  } else if (SPECIAL_VARS.has(peek(P.L))) {
    const s = P.L.b;
    advance(P.L);
    out.push(mk(P, "special_variable_name", s, P.L.b, []));
  }
  if (peek(P.L) === "[") {
    const varNode = out[out.length - 1];
    const brOpen = P.L.b;
    advance(P.L);
    const brOpenNode = mk(P, "[", brOpen, P.L.b, []);
    const idx = parseSubscriptIndexInline(P);
    skipBlanks(P.L);
    const brClose = P.L.b;
    if (peek(P.L) === "]") advance(P.L);
    const brCloseNode = mk(P, "]", brClose, P.L.b, []);
    if (varNode) {
      const kids = idx ? [varNode, brOpenNode, idx, brCloseNode] : [varNode, brOpenNode, brCloseNode];
      out[out.length - 1] = mk(P, "subscript", varNode.startIndex, P.L.b, kids);
    }
  }
  skipBlanks(P.L);
  const tc = peek(P.L);
  if ((tc === "*" || tc === "@") && peek(P.L, 1) === "}") {
    const s = P.L.b;
    advance(P.L);
    out.push(mk(P, tc, s, P.L.b, []));
    return out;
  }
  if (tc === "@" && isIdentStart(peek(P.L, 1))) {
    const s = P.L.b;
    advance(P.L);
    out.push(mk(P, "@", s, P.L.b, []));
    while (isIdentChar(peek(P.L))) advance(P.L);
    return out;
  }
  const c = peek(P.L);
  if (c === ":") {
    const c1 = peek(P.L, 1);
    if (c1 === "\n" || c1 === "}") {
      advance(P.L);
      while (peek(P.L) === "\n") advance(P.L);
      return out;
    }
    if (c1 !== "-" && c1 !== "=" && c1 !== "?" && c1 !== "+") {
      advance(P.L);
      skipBlanks(P.L);
      const offC = peek(P.L);
      let off;
      if (offC === "-" && isDigit(peek(P.L, 1))) {
        const ns = P.L.b;
        advance(P.L);
        while (isDigit(peek(P.L))) advance(P.L);
        off = mk(P, "number", ns, P.L.b, []);
      } else {
        off = parseArithExpr(P, ":}", "var");
      }
      if (off) out.push(off);
      skipBlanks(P.L);
      if (peek(P.L) === ":") {
        advance(P.L);
        skipBlanks(P.L);
        const lenC = peek(P.L);
        let len;
        if (lenC === "-" && isDigit(peek(P.L, 1))) {
          const ns = P.L.b;
          advance(P.L);
          while (isDigit(peek(P.L))) advance(P.L);
          len = mk(P, "number", ns, P.L.b, []);
        } else {
          len = parseArithExpr(P, "}", "var");
        }
        if (len) out.push(len);
      }
      return out;
    }
  }
  if (c === ":" || c === "#" || c === "%" || c === "/" || c === "^" || c === "," || c === "-" || c === "=" || c === "?" || c === "+") {
    const s = P.L.b;
    const c1 = peek(P.L, 1);
    let op = c;
    if (c === ":" && (c1 === "-" || c1 === "=" || c1 === "?" || c1 === "+")) {
      advance(P.L);
      advance(P.L);
      op = c + c1;
    } else if ((c === "#" || c === "%" || c === "/" || c === "^" || c === ",") && c1 === c) {
      advance(P.L);
      advance(P.L);
      op = c + c;
    } else {
      advance(P.L);
    }
    out.push(mk(P, op, s, P.L.b, []));
    const isPattern = op === "#" || op === "##" || op === "%" || op === "%%" || op === "/" || op === "//" || op === "^" || op === "^^" || op === "," || op === ",,";
    if (op === "/" || op === "//") {
      const ac = peek(P.L);
      if (ac === "#" || ac === "%") {
        const aStart = P.L.b;
        advance(P.L);
        out.push(mk(P, ac, aStart, P.L.b, []));
      }
      if (peek(P.L) === '"') {
        out.push(parseDoubleQuoted(P));
        const tail = parseExpansionRest(P, "regex", true);
        if (tail) out.push(tail);
      } else {
        const regex = parseExpansionRest(P, "regex", true);
        if (regex) out.push(regex);
      }
      if (peek(P.L) === "/") {
        const sepStart = P.L.b;
        advance(P.L);
        out.push(mk(P, "/", sepStart, P.L.b, []));
        const repl = parseExpansionRest(P, "replword", false);
        if (repl) {
          if (repl.type === "concatenation" && repl.children.length === 2 && repl.children[0].type === "command_substitution") {
            out.push(repl.children[0]);
            out.push(repl.children[1]);
          } else {
            out.push(repl);
          }
        }
      }
    } else if (op === "#" || op === "##" || op === "%" || op === "%%") {
      for (const p of parseExpansionRegexSegmented(P)) out.push(p);
    } else {
      const rest = parseExpansionRest(P, isPattern ? "regex" : "word", false);
      if (rest) out.push(rest);
    }
  }
  return out;
}
function parseExpansionRest(P, nodeType, stopAtSlash) {
  const start = P.L.b;
  if (nodeType === "word" && peek(P.L) === "(") {
    advance(P.L);
    const open = mk(P, "(", start, P.L.b, []);
    const elems = [open];
    while (P.L.i < P.L.len) {
      skipBlanks(P.L);
      const c = peek(P.L);
      if (c === ")" || c === "}" || c === "\n" || c === "") break;
      const wStart = P.L.b;
      while (P.L.i < P.L.len) {
        const wc = peek(P.L);
        if (wc === ")" || wc === "}" || wc === " " || wc === "	" || wc === "\n" || wc === "") {
          break;
        }
        advance(P.L);
      }
      if (P.L.b > wStart) elems.push(mk(P, "word", wStart, P.L.b, []));
      else break;
    }
    if (peek(P.L) === ")") {
      const cStart = P.L.b;
      advance(P.L);
      elems.push(mk(P, ")", cStart, P.L.b, []));
    }
    while (peek(P.L) === "\n") advance(P.L);
    return mk(P, "array", start, P.L.b, elems);
  }
  if (nodeType === "regex") {
    let braceDepth2 = 0;
    while (P.L.i < P.L.len) {
      const c = peek(P.L);
      if (c === "\n") break;
      if (braceDepth2 === 0) {
        if (c === "}") break;
        if (stopAtSlash && c === "/") break;
      }
      if (c === "\\" && P.L.i + 1 < P.L.len) {
        advance(P.L);
        advance(P.L);
        continue;
      }
      if (c === '"' || c === "'") {
        advance(P.L);
        while (P.L.i < P.L.len && peek(P.L) !== c) {
          if (peek(P.L) === "\\" && P.L.i + 1 < P.L.len) advance(P.L);
          advance(P.L);
        }
        if (peek(P.L) === c) advance(P.L);
        continue;
      }
      if (c === "$") {
        const c1 = peek(P.L, 1);
        if (c1 === "{") {
          let d = 0;
          advance(P.L);
          advance(P.L);
          d++;
          while (P.L.i < P.L.len && d > 0) {
            const nc = peek(P.L);
            if (nc === "{") d++;
            else if (nc === "}") d--;
            advance(P.L);
          }
          continue;
        }
        if (c1 === "(") {
          let d = 0;
          advance(P.L);
          advance(P.L);
          d++;
          while (P.L.i < P.L.len && d > 0) {
            const nc = peek(P.L);
            if (nc === "(") d++;
            else if (nc === ")") d--;
            advance(P.L);
          }
          continue;
        }
      }
      if (c === "{") braceDepth2++;
      else if (c === "}" && braceDepth2 > 0) braceDepth2--;
      advance(P.L);
    }
    const end = P.L.b;
    while (peek(P.L) === "\n") advance(P.L);
    if (end === start) return null;
    return mk(P, "regex", start, end, []);
  }
  const parts = [];
  let segStart = P.L.b;
  let braceDepth = 0;
  const flushSeg = () => {
    if (P.L.b > segStart) {
      parts.push(mk(P, "word", segStart, P.L.b, []));
    }
  };
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "\n") break;
    if (braceDepth === 0) {
      if (c === "}") break;
      if (stopAtSlash && c === "/") break;
    }
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    const c1 = peek(P.L, 1);
    if (c === "$") {
      if (c1 === "{" || c1 === "(" || c1 === "[") {
        flushSeg();
        const exp = parseDollarLike(P);
        if (exp) parts.push(exp);
        segStart = P.L.b;
        continue;
      }
      if (c1 === "'") {
        flushSeg();
        const aStart = P.L.b;
        advance(P.L);
        advance(P.L);
        while (P.L.i < P.L.len && peek(P.L) !== "'") {
          if (peek(P.L) === "\\" && P.L.i + 1 < P.L.len) advance(P.L);
          advance(P.L);
        }
        if (peek(P.L) === "'") advance(P.L);
        parts.push(mk(P, "ansi_c_string", aStart, P.L.b, []));
        segStart = P.L.b;
        continue;
      }
      if (isIdentStart(c1) || isDigit(c1) || SPECIAL_VARS.has(c1)) {
        flushSeg();
        const exp = parseDollarLike(P);
        if (exp) parts.push(exp);
        segStart = P.L.b;
        continue;
      }
    }
    if (c === '"') {
      flushSeg();
      parts.push(parseDoubleQuoted(P));
      segStart = P.L.b;
      continue;
    }
    if (c === "'") {
      flushSeg();
      const rStart = P.L.b;
      advance(P.L);
      while (P.L.i < P.L.len && peek(P.L) !== "'") advance(P.L);
      if (peek(P.L) === "'") advance(P.L);
      parts.push(mk(P, "raw_string", rStart, P.L.b, []));
      segStart = P.L.b;
      continue;
    }
    if ((c === "<" || c === ">") && c1 === "(") {
      flushSeg();
      const ps = parseProcessSub(P);
      if (ps) parts.push(ps);
      segStart = P.L.b;
      continue;
    }
    if (c === "`") {
      flushSeg();
      const bt = parseBacktick(P);
      if (bt) parts.push(bt);
      segStart = P.L.b;
      continue;
    }
    if (c === "{") braceDepth++;
    else if (c === "}" && braceDepth > 0) braceDepth--;
    advance(P.L);
  }
  flushSeg();
  while (peek(P.L) === "\n") advance(P.L);
  if (parts.length > 1 && parts[0].type === "word" && /^[ \t]+$/.test(parts[0].text)) {
    parts.shift();
  }
  if (parts.length === 0) return null;
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  return mk(P, "concatenation", parts[0].startIndex, last.endIndex, parts);
}
function parseExpansionRegexSegmented(P) {
  const out = [];
  let segStart = P.L.b;
  const flushRegex = () => {
    if (P.L.b > segStart) out.push(mk(P, "regex", segStart, P.L.b, []));
  };
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "}" || c === "\n") break;
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === '"') {
      flushRegex();
      out.push(parseDoubleQuoted(P));
      segStart = P.L.b;
      continue;
    }
    if (c === "'") {
      flushRegex();
      const rStart = P.L.b;
      advance(P.L);
      while (P.L.i < P.L.len && peek(P.L) !== "'") advance(P.L);
      if (peek(P.L) === "'") advance(P.L);
      out.push(mk(P, "raw_string", rStart, P.L.b, []));
      segStart = P.L.b;
      continue;
    }
    if (c === "$") {
      const c1 = peek(P.L, 1);
      if (c1 === "{") {
        let d = 1;
        advance(P.L);
        advance(P.L);
        while (P.L.i < P.L.len && d > 0) {
          const nc = peek(P.L);
          if (nc === "{") d++;
          else if (nc === "}") d--;
          advance(P.L);
        }
        continue;
      }
      if (c1 === "(") {
        let d = 1;
        advance(P.L);
        advance(P.L);
        while (P.L.i < P.L.len && d > 0) {
          const nc = peek(P.L);
          if (nc === "(") d++;
          else if (nc === ")") d--;
          advance(P.L);
        }
        continue;
      }
    }
    advance(P.L);
  }
  flushRegex();
  while (peek(P.L) === "\n") advance(P.L);
  return out;
}
function parseBacktick(P) {
  const start = P.L.b;
  advance(P.L);
  const open = mk(P, "`", start, P.L.b, []);
  P.inBacktick++;
  const body = [];
  while (true) {
    skipBlanks(P.L);
    if (peek(P.L) === "`" || peek(P.L) === "") break;
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "EOF" || t.type === "BACKTICK") {
      restoreLex(P.L, save);
      break;
    }
    if (t.type === "NEWLINE") continue;
    restoreLex(P.L, save);
    const stmt = parseAndOr(P);
    if (!stmt) break;
    body.push(stmt);
    skipBlanks(P.L);
    if (peek(P.L) === "`") break;
    const save2 = saveLex(P.L);
    const sep = nextToken(P.L, "cmd");
    if (sep.type === "OP" && (sep.value === ";" || sep.value === "&")) {
      body.push(leaf(P, sep.value, sep));
    } else if (sep.type !== "NEWLINE") {
      restoreLex(P.L, save2);
    }
  }
  P.inBacktick--;
  let close;
  if (peek(P.L) === "`") {
    const cStart = P.L.b;
    advance(P.L);
    close = mk(P, "`", cStart, P.L.b, []);
  } else {
    close = mk(P, "`", P.L.b, P.L.b, []);
  }
  if (body.length === 0) return null;
  return mk(P, "command_substitution", start, close.endIndex, [
    open,
    ...body,
    close
  ]);
}
function parseIf(P, ifTok) {
  const ifKw = leaf(P, "if", ifTok);
  const kids = [ifKw];
  const cond = parseStatements(P, null);
  kids.push(...cond);
  consumeKeyword(P, "then", kids);
  const body = parseStatements(P, null);
  kids.push(...body);
  while (true) {
    const save = saveLex(P.L);
    const t = nextToken(P.L, "cmd");
    if (t.type === "WORD" && t.value === "elif") {
      const eKw = leaf(P, "elif", t);
      const eCond = parseStatements(P, null);
      const eKids = [eKw, ...eCond];
      consumeKeyword(P, "then", eKids);
      const eBody = parseStatements(P, null);
      eKids.push(...eBody);
      const last2 = eKids[eKids.length - 1];
      kids.push(mk(P, "elif_clause", eKw.startIndex, last2.endIndex, eKids));
    } else if (t.type === "WORD" && t.value === "else") {
      const elKw = leaf(P, "else", t);
      const elBody = parseStatements(P, null);
      const last2 = elBody.length > 0 ? elBody[elBody.length - 1] : elKw;
      kids.push(
        mk(P, "else_clause", elKw.startIndex, last2.endIndex, [elKw, ...elBody])
      );
    } else {
      restoreLex(P.L, save);
      break;
    }
  }
  consumeKeyword(P, "fi", kids);
  const last = kids[kids.length - 1];
  return mk(P, "if_statement", ifKw.startIndex, last.endIndex, kids);
}
function parseWhile(P, kwTok) {
  const kw = leaf(P, kwTok.value, kwTok);
  const kids = [kw];
  const cond = parseStatements(P, null);
  kids.push(...cond);
  const dg = parseDoGroup(P);
  if (dg) kids.push(dg);
  const last = kids[kids.length - 1];
  return mk(P, "while_statement", kw.startIndex, last.endIndex, kids);
}
function parseFor(P, forTok) {
  const forKw = leaf(P, forTok.value, forTok);
  skipBlanks(P.L);
  if (forTok.value === "for" && peek(P.L) === "(" && peek(P.L, 1) === "(") {
    const oStart = P.L.b;
    advance(P.L);
    advance(P.L);
    const open = mk(P, "((", oStart, P.L.b, []);
    const kids2 = [forKw, open];
    for (let k = 0; k < 3; k++) {
      skipBlanks(P.L);
      const es = parseArithCommaList(P, k < 2 ? ";" : "))", "assign");
      kids2.push(...es);
      if (k < 2) {
        if (peek(P.L) === ";") {
          const s = P.L.b;
          advance(P.L);
          kids2.push(mk(P, ";", s, P.L.b, []));
        }
      }
    }
    skipBlanks(P.L);
    if (peek(P.L) === ")" && peek(P.L, 1) === ")") {
      const cStart = P.L.b;
      advance(P.L);
      advance(P.L);
      kids2.push(mk(P, "))", cStart, P.L.b, []));
    }
    const save3 = saveLex(P.L);
    const sep2 = nextToken(P.L, "cmd");
    if (sep2.type === "OP" && sep2.value === ";") {
      kids2.push(leaf(P, ";", sep2));
    } else if (sep2.type !== "NEWLINE") {
      restoreLex(P.L, save3);
    }
    const dg2 = parseDoGroup(P);
    if (dg2) {
      kids2.push(dg2);
    } else {
      skipNewlines(P);
      skipBlanks(P.L);
      if (peek(P.L) === "{") {
        const bOpen = P.L.b;
        advance(P.L);
        const brace = mk(P, "{", bOpen, P.L.b, []);
        const body = parseStatements(P, "}");
        let bClose;
        if (peek(P.L) === "}") {
          const cs = P.L.b;
          advance(P.L);
          bClose = mk(P, "}", cs, P.L.b, []);
        } else {
          bClose = mk(P, "}", P.L.b, P.L.b, []);
        }
        kids2.push(
          mk(P, "compound_statement", brace.startIndex, bClose.endIndex, [
            brace,
            ...body,
            bClose
          ])
        );
      }
    }
    const last2 = kids2[kids2.length - 1];
    return mk(P, "c_style_for_statement", forKw.startIndex, last2.endIndex, kids2);
  }
  const kids = [forKw];
  const varTok = nextToken(P.L, "arg");
  kids.push(mk(P, "variable_name", varTok.start, varTok.end, []));
  skipBlanks(P.L);
  const save = saveLex(P.L);
  const inTok = nextToken(P.L, "arg");
  if (inTok.type === "WORD" && inTok.value === "in") {
    kids.push(leaf(P, "in", inTok));
    while (true) {
      skipBlanks(P.L);
      const c = peek(P.L);
      if (c === ";" || c === "\n" || c === "") break;
      const w = parseWord(P, "arg");
      if (!w) break;
      kids.push(w);
    }
  } else {
    restoreLex(P.L, save);
  }
  const save2 = saveLex(P.L);
  const sep = nextToken(P.L, "cmd");
  if (sep.type === "OP" && sep.value === ";") {
    kids.push(leaf(P, ";", sep));
  } else if (sep.type !== "NEWLINE") {
    restoreLex(P.L, save2);
  }
  const dg = parseDoGroup(P);
  if (dg) kids.push(dg);
  const last = kids[kids.length - 1];
  return mk(P, "for_statement", forKw.startIndex, last.endIndex, kids);
}
function parseDoGroup(P) {
  skipNewlines(P);
  const save = saveLex(P.L);
  const doTok = nextToken(P.L, "cmd");
  if (doTok.type !== "WORD" || doTok.value !== "do") {
    restoreLex(P.L, save);
    return null;
  }
  const doKw = leaf(P, "do", doTok);
  const body = parseStatements(P, null);
  const kids = [doKw, ...body];
  consumeKeyword(P, "done", kids);
  const last = kids[kids.length - 1];
  return mk(P, "do_group", doKw.startIndex, last.endIndex, kids);
}
function parseCase(P, caseTok) {
  const caseKw = leaf(P, "case", caseTok);
  const kids = [caseKw];
  skipBlanks(P.L);
  const word = parseWord(P, "arg");
  if (word) kids.push(word);
  skipBlanks(P.L);
  consumeKeyword(P, "in", kids);
  skipNewlines(P);
  while (true) {
    skipBlanks(P.L);
    skipNewlines(P);
    const save = saveLex(P.L);
    const t = nextToken(P.L, "arg");
    if (t.type === "WORD" && t.value === "esac") {
      kids.push(leaf(P, "esac", t));
      break;
    }
    if (t.type === "EOF") break;
    restoreLex(P.L, save);
    const item = parseCaseItem(P);
    if (!item) break;
    kids.push(item);
  }
  const last = kids[kids.length - 1];
  return mk(P, "case_statement", caseKw.startIndex, last.endIndex, kids);
}
function parseCaseItem(P) {
  skipBlanks(P.L);
  const start = P.L.b;
  const kids = [];
  if (peek(P.L) === "(") {
    const s = P.L.b;
    advance(P.L);
    kids.push(mk(P, "(", s, P.L.b, []));
  }
  let isFirstAlt = true;
  while (true) {
    skipBlanks(P.L);
    const c = peek(P.L);
    if (c === ")" || c === "") break;
    const pats = parseCasePattern(P);
    if (pats.length === 0) break;
    if (!isFirstAlt && pats.length > 1) {
      const rewritten = pats.map(
        (p) => p.type === "extglob_pattern" ? mk(P, "word", p.startIndex, p.endIndex, []) : p
      );
      const first = rewritten[0];
      const last2 = rewritten[rewritten.length - 1];
      kids.push(
        mk(P, "concatenation", first.startIndex, last2.endIndex, rewritten)
      );
    } else {
      kids.push(...pats);
    }
    isFirstAlt = false;
    skipBlanks(P.L);
    if (peek(P.L) === "\\" && peek(P.L, 1) === "\n") {
      advance(P.L);
      advance(P.L);
      skipBlanks(P.L);
    }
    if (peek(P.L) === "|") {
      const s = P.L.b;
      advance(P.L);
      kids.push(mk(P, "|", s, P.L.b, []));
      if (peek(P.L) === "\\" && peek(P.L, 1) === "\n") {
        advance(P.L);
        advance(P.L);
      }
    } else {
      break;
    }
  }
  if (peek(P.L) === ")") {
    const s = P.L.b;
    advance(P.L);
    kids.push(mk(P, ")", s, P.L.b, []));
  }
  const body = parseStatements(P, null);
  kids.push(...body);
  const save = saveLex(P.L);
  const term = nextToken(P.L, "cmd");
  if (term.type === "OP" && (term.value === ";;" || term.value === ";&" || term.value === ";;&")) {
    kids.push(leaf(P, term.value, term));
  } else {
    restoreLex(P.L, save);
  }
  if (kids.length === 0) return null;
  if (body.length === 0) {
    for (let i = 0; i < kids.length; i++) {
      const k = kids[i];
      if (k.type !== "extglob_pattern") continue;
      const text = sliceBytes(P, k.startIndex, k.endIndex);
      if (/^[-+?*@!][a-zA-Z]/.test(text) && !/[*?(]/.test(text)) {
        kids[i] = mk(P, "word", k.startIndex, k.endIndex, []);
      }
    }
  }
  const last = kids[kids.length - 1];
  return mk(P, "case_item", start, last.endIndex, kids);
}
function parseCasePattern(P) {
  skipBlanks(P.L);
  const save = saveLex(P.L);
  const start = P.L.b;
  const startI = P.L.i;
  let parenDepth = 0;
  let hasDollar = false;
  let hasBracketOutsideParen = false;
  let hasQuote = false;
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === '"' || c === "'") {
      hasQuote = true;
      advance(P.L);
      while (P.L.i < P.L.len && peek(P.L) !== c) {
        if (peek(P.L) === "\\" && P.L.i + 1 < P.L.len) advance(P.L);
        advance(P.L);
      }
      if (peek(P.L) === c) advance(P.L);
      continue;
    }
    if (c === "(") {
      parenDepth++;
      advance(P.L);
      continue;
    }
    if (parenDepth > 0) {
      if (c === ")") {
        parenDepth--;
        advance(P.L);
        continue;
      }
      if (c === "\n") break;
      advance(P.L);
      continue;
    }
    if (c === ")" || c === "|" || c === " " || c === "	" || c === "\n") break;
    if (c === "$") hasDollar = true;
    if (c === "[") hasBracketOutsideParen = true;
    advance(P.L);
  }
  if (P.L.b === start) return [];
  const text = P.src.slice(startI, P.L.i);
  const hasExtglobParen = /[*?+@!]\(/.test(text);
  if (hasQuote && !hasExtglobParen) {
    restoreLex(P.L, save);
    return parseCasePatternSegmented(P);
  }
  if (!hasExtglobParen && (hasDollar || hasBracketOutsideParen)) {
    restoreLex(P.L, save);
    const w = parseWord(P, "arg");
    return w ? [w] : [];
  }
  const type = hasExtglobParen || /[*?]/.test(text) || /^[-+?*@!][a-zA-Z]/.test(text) ? "extglob_pattern" : "word";
  return [mk(P, type, start, P.L.b, [])];
}
function parseCasePatternSegmented(P) {
  const parts = [];
  let segStart = P.L.b;
  let segStartI = P.L.i;
  const flushSeg = () => {
    if (P.L.i > segStartI) {
      const t = P.src.slice(segStartI, P.L.i);
      const type = /[*?]/.test(t) ? "extglob_pattern" : "word";
      parts.push(mk(P, type, segStart, P.L.b, []));
    }
  };
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === '"') {
      flushSeg();
      parts.push(parseDoubleQuoted(P));
      segStart = P.L.b;
      segStartI = P.L.i;
      continue;
    }
    if (c === "'") {
      flushSeg();
      const tok = nextToken(P.L, "arg");
      parts.push(leaf(P, "raw_string", tok));
      segStart = P.L.b;
      segStartI = P.L.i;
      continue;
    }
    if (c === ")" || c === "|" || c === " " || c === "	" || c === "\n") break;
    advance(P.L);
  }
  flushSeg();
  return parts;
}
function parseFunction(P, fnTok) {
  const fnKw = leaf(P, "function", fnTok);
  skipBlanks(P.L);
  const nameTok = nextToken(P.L, "arg");
  const name = mk(P, "word", nameTok.start, nameTok.end, []);
  const kids = [fnKw, name];
  skipBlanks(P.L);
  if (peek(P.L) === "(" && peek(P.L, 1) === ")") {
    const o = nextToken(P.L, "cmd");
    const c = nextToken(P.L, "cmd");
    kids.push(leaf(P, "(", o));
    kids.push(leaf(P, ")", c));
  }
  skipBlanks(P.L);
  skipNewlines(P);
  const body = parseCommand(P);
  if (body) {
    if (body.type === "redirected_statement" && body.children.length >= 2 && body.children[0].type === "compound_statement") {
      kids.push(...body.children);
    } else {
      kids.push(body);
    }
  }
  const last = kids[kids.length - 1];
  return mk(P, "function_definition", fnKw.startIndex, last.endIndex, kids);
}
function parseDeclaration(P, kwTok) {
  const kw = leaf(P, kwTok.value, kwTok);
  const kids = [kw];
  while (true) {
    skipBlanks(P.L);
    const c = peek(P.L);
    if (c === "" || c === "\n" || c === ";" || c === "&" || c === "|" || c === ")" || c === "<" || c === ">") {
      break;
    }
    const a = tryParseAssignment(P);
    if (a) {
      kids.push(a);
      continue;
    }
    if (c === '"' || c === "'" || c === "$") {
      const w = parseWord(P, "arg");
      if (w) {
        kids.push(w);
        continue;
      }
      break;
    }
    const save = saveLex(P.L);
    const tok = nextToken(P.L, "arg");
    if (tok.type === "WORD" || tok.type === "NUMBER") {
      if (tok.value.startsWith("-")) {
        kids.push(leaf(P, "word", tok));
      } else if (isIdentStart(tok.value[0] ?? "")) {
        kids.push(mk(P, "variable_name", tok.start, tok.end, []));
      } else {
        kids.push(leaf(P, "word", tok));
      }
    } else {
      restoreLex(P.L, save);
      break;
    }
  }
  const last = kids[kids.length - 1];
  return mk(P, "declaration_command", kw.startIndex, last.endIndex, kids);
}
function parseUnset(P, kwTok) {
  const kw = leaf(P, "unset", kwTok);
  const kids = [kw];
  while (true) {
    skipBlanks(P.L);
    const c = peek(P.L);
    if (c === "" || c === "\n" || c === ";" || c === "&" || c === "|" || c === ")" || c === "<" || c === ">") {
      break;
    }
    const arg = parseWord(P, "arg");
    if (!arg) break;
    if (arg.type === "word") {
      if (arg.text.startsWith("-")) {
        kids.push(arg);
      } else {
        kids.push(mk(P, "variable_name", arg.startIndex, arg.endIndex, []));
      }
    } else {
      kids.push(arg);
    }
  }
  const last = kids[kids.length - 1];
  return mk(P, "unset_command", kw.startIndex, last.endIndex, kids);
}
function consumeKeyword(P, name, kids) {
  skipNewlines(P);
  const save = saveLex(P.L);
  const t = nextToken(P.L, "cmd");
  if (t.type === "WORD" && t.value === name) {
    kids.push(leaf(P, name, t));
  } else {
    restoreLex(P.L, save);
  }
}
function parseTestExpr(P, closer) {
  return parseTestOr(P, closer);
}
function parseTestOr(P, closer) {
  let left = parseTestAnd(P, closer);
  if (!left) return null;
  while (true) {
    skipBlanks(P.L);
    const save = saveLex(P.L);
    if (peek(P.L) === "|" && peek(P.L, 1) === "|") {
      const s = P.L.b;
      advance(P.L);
      advance(P.L);
      const op = mk(P, "||", s, P.L.b, []);
      const right = parseTestAnd(P, closer);
      if (!right) {
        restoreLex(P.L, save);
        break;
      }
      left = mk(P, "binary_expression", left.startIndex, right.endIndex, [
        left,
        op,
        right
      ]);
    } else {
      break;
    }
  }
  return left;
}
function parseTestAnd(P, closer) {
  let left = parseTestUnary(P, closer);
  if (!left) return null;
  while (true) {
    skipBlanks(P.L);
    if (peek(P.L) === "&" && peek(P.L, 1) === "&") {
      const s = P.L.b;
      advance(P.L);
      advance(P.L);
      const op = mk(P, "&&", s, P.L.b, []);
      const right = parseTestUnary(P, closer);
      if (!right) break;
      left = mk(P, "binary_expression", left.startIndex, right.endIndex, [
        left,
        op,
        right
      ]);
    } else {
      break;
    }
  }
  return left;
}
function parseTestUnary(P, closer) {
  skipBlanks(P.L);
  const c = peek(P.L);
  if (c === "(") {
    const s = P.L.b;
    advance(P.L);
    const open = mk(P, "(", s, P.L.b, []);
    const inner = parseTestOr(P, closer);
    skipBlanks(P.L);
    let close;
    if (peek(P.L) === ")") {
      const cs = P.L.b;
      advance(P.L);
      close = mk(P, ")", cs, P.L.b, []);
    } else {
      close = mk(P, ")", P.L.b, P.L.b, []);
    }
    const kids = inner ? [open, inner, close] : [open, close];
    return mk(
      P,
      "parenthesized_expression",
      open.startIndex,
      close.endIndex,
      kids
    );
  }
  return parseTestBinary(P, closer);
}
function parseTestNegatablePrimary(P, closer) {
  skipBlanks(P.L);
  const c = peek(P.L);
  if (c === "!") {
    const s = P.L.b;
    advance(P.L);
    const bang = mk(P, "!", s, P.L.b, []);
    const inner = parseTestNegatablePrimary(P, closer);
    if (!inner) return bang;
    return mk(P, "unary_expression", bang.startIndex, inner.endIndex, [
      bang,
      inner
    ]);
  }
  if (c === "-" && isIdentStart(peek(P.L, 1))) {
    const s = P.L.b;
    advance(P.L);
    while (isIdentChar(peek(P.L))) advance(P.L);
    const op = mk(P, "test_operator", s, P.L.b, []);
    skipBlanks(P.L);
    const arg = parseTestPrimary(P, closer);
    if (!arg) return op;
    return mk(P, "unary_expression", op.startIndex, arg.endIndex, [op, arg]);
  }
  return parseTestPrimary(P, closer);
}
function parseTestBinary(P, closer) {
  skipBlanks(P.L);
  const left = parseTestNegatablePrimary(P, closer);
  if (!left) return null;
  skipBlanks(P.L);
  const c = peek(P.L);
  const c1 = peek(P.L, 1);
  let op = null;
  const os = P.L.b;
  if (c === "=" && c1 === "=") {
    advance(P.L);
    advance(P.L);
    op = mk(P, "==", os, P.L.b, []);
  } else if (c === "!" && c1 === "=") {
    advance(P.L);
    advance(P.L);
    op = mk(P, "!=", os, P.L.b, []);
  } else if (c === "=" && c1 === "~") {
    advance(P.L);
    advance(P.L);
    op = mk(P, "=~", os, P.L.b, []);
  } else if (c === "=" && c1 !== "=") {
    advance(P.L);
    op = mk(P, "=", os, P.L.b, []);
  } else if (c === "<" && c1 !== "<") {
    advance(P.L);
    op = mk(P, "<", os, P.L.b, []);
  } else if (c === ">" && c1 !== ">") {
    advance(P.L);
    op = mk(P, ">", os, P.L.b, []);
  } else if (c === "-" && isIdentStart(c1)) {
    advance(P.L);
    while (isIdentChar(peek(P.L))) advance(P.L);
    op = mk(P, "test_operator", os, P.L.b, []);
  }
  if (!op) return left;
  skipBlanks(P.L);
  if (closer === "]]") {
    const opText = op.type;
    if (opText === "=~") {
      skipBlanks(P.L);
      const rc = peek(P.L);
      let rhs = null;
      if (rc === '"' || rc === "'") {
        const save = saveLex(P.L);
        const quoted = rc === '"' ? parseDoubleQuoted(P) : leaf(P, "raw_string", nextToken(P.L, "arg"));
        let j = P.L.i;
        while (j < P.L.len && (P.src[j] === " " || P.src[j] === "	")) j++;
        const nc = P.src[j] ?? "";
        const nc1 = P.src[j + 1] ?? "";
        if (nc === "]" && nc1 === "]" || nc === "&" && nc1 === "&" || nc === "|" && nc1 === "|" || nc === "\n" || nc === "") {
          rhs = quoted;
        } else {
          restoreLex(P.L, save);
        }
      }
      if (!rhs) rhs = parseTestRegexRhs(P);
      if (!rhs) return left;
      return mk(P, "binary_expression", left.startIndex, rhs.endIndex, [
        left,
        op,
        rhs
      ]);
    }
    if (opText === "=") {
      const rhs = parseTestRegexRhs(P);
      if (!rhs) return left;
      return mk(P, "binary_expression", left.startIndex, rhs.endIndex, [
        left,
        op,
        rhs
      ]);
    }
    if (opText === "==" || opText === "!=") {
      const parts = parseTestExtglobRhs(P);
      if (parts.length === 0) return left;
      const last = parts[parts.length - 1];
      return mk(P, "binary_expression", left.startIndex, last.endIndex, [
        left,
        op,
        ...parts
      ]);
    }
  }
  const right = parseTestPrimary(P, closer);
  if (!right) return left;
  return mk(P, "binary_expression", left.startIndex, right.endIndex, [
    left,
    op,
    right
  ]);
}
function parseTestRegexRhs(P) {
  skipBlanks(P.L);
  const start = P.L.b;
  let parenDepth = 0;
  let bracketDepth = 0;
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === "\n") break;
    if (parenDepth === 0 && bracketDepth === 0) {
      if (c === "]" && peek(P.L, 1) === "]") break;
      if (c === " " || c === "	") {
        let j = P.L.i;
        while (j < P.L.len && (P.L.src[j] === " " || P.L.src[j] === "	")) j++;
        const nc = P.L.src[j] ?? "";
        const nc1 = P.L.src[j + 1] ?? "";
        if (nc === "]" && nc1 === "]" || nc === "&" && nc1 === "&" || nc === "|" && nc1 === "|") {
          break;
        }
        advance(P.L);
        continue;
      }
    }
    if (c === "(") parenDepth++;
    else if (c === ")" && parenDepth > 0) parenDepth--;
    else if (c === "[") bracketDepth++;
    else if (c === "]" && bracketDepth > 0) bracketDepth--;
    advance(P.L);
  }
  if (P.L.b === start) return null;
  return mk(P, "regex", start, P.L.b, []);
}
function parseTestExtglobRhs(P) {
  skipBlanks(P.L);
  const parts = [];
  let segStart = P.L.b;
  let segStartI = P.L.i;
  let parenDepth = 0;
  const flushSeg = () => {
    if (P.L.i > segStartI) {
      const text = P.src.slice(segStartI, P.L.i);
      const type = /^\d+$/.test(text) ? "number" : "extglob_pattern";
      parts.push(mk(P, type, segStart, P.L.b, []));
    }
  };
  while (P.L.i < P.L.len) {
    const c = peek(P.L);
    if (c === "\\" && P.L.i + 1 < P.L.len) {
      advance(P.L);
      advance(P.L);
      continue;
    }
    if (c === "\n") break;
    if (parenDepth === 0) {
      if (c === "]" && peek(P.L, 1) === "]") break;
      if (c === " " || c === "	") {
        let j = P.L.i;
        while (j < P.L.len && (P.L.src[j] === " " || P.L.src[j] === "	")) j++;
        const nc = P.L.src[j] ?? "";
        const nc1 = P.L.src[j + 1] ?? "";
        if (nc === "]" && nc1 === "]" || nc === "&" && nc1 === "&" || nc === "|" && nc1 === "|") {
          break;
        }
        advance(P.L);
        continue;
      }
    }
    if (c === "$") {
      const c1 = peek(P.L, 1);
      if (c1 === "(" || c1 === "{" || isIdentStart(c1) || SPECIAL_VARS.has(c1)) {
        flushSeg();
        const exp = parseDollarLike(P);
        if (exp) parts.push(exp);
        segStart = P.L.b;
        segStartI = P.L.i;
        continue;
      }
    }
    if (c === '"') {
      flushSeg();
      parts.push(parseDoubleQuoted(P));
      segStart = P.L.b;
      segStartI = P.L.i;
      continue;
    }
    if (c === "'") {
      flushSeg();
      const tok = nextToken(P.L, "arg");
      parts.push(leaf(P, "raw_string", tok));
      segStart = P.L.b;
      segStartI = P.L.i;
      continue;
    }
    if (c === "(") parenDepth++;
    else if (c === ")" && parenDepth > 0) parenDepth--;
    advance(P.L);
  }
  flushSeg();
  return parts;
}
function parseTestPrimary(P, closer) {
  skipBlanks(P.L);
  if (closer === "]" && peek(P.L) === "]") return null;
  if (closer === "]]" && peek(P.L) === "]" && peek(P.L, 1) === "]") return null;
  return parseWord(P, "arg");
}
function parseArithExpr(P, stop, mode = "var") {
  return parseArithTernary(P, stop, mode);
}
function parseArithCommaList(P, stop, mode = "var") {
  const out = [];
  while (true) {
    const e = parseArithTernary(P, stop, mode);
    if (e) out.push(e);
    skipBlanks(P.L);
    if (peek(P.L) === "," && !isArithStop(P, stop)) {
      advance(P.L);
      continue;
    }
    break;
  }
  return out;
}
function parseArithTernary(P, stop, mode) {
  const cond = parseArithBinary(P, stop, 0, mode);
  if (!cond) return null;
  skipBlanks(P.L);
  if (peek(P.L) === "?") {
    const qs = P.L.b;
    advance(P.L);
    const q = mk(P, "?", qs, P.L.b, []);
    const t = parseArithBinary(P, ":", 0, mode);
    skipBlanks(P.L);
    let colon;
    if (peek(P.L) === ":") {
      const cs = P.L.b;
      advance(P.L);
      colon = mk(P, ":", cs, P.L.b, []);
    } else {
      colon = mk(P, ":", P.L.b, P.L.b, []);
    }
    const f = parseArithTernary(P, stop, mode);
    const last = f ?? colon;
    const kids = [cond, q];
    if (t) kids.push(t);
    kids.push(colon);
    if (f) kids.push(f);
    return mk(P, "ternary_expression", cond.startIndex, last.endIndex, kids);
  }
  return cond;
}
function scanArithOp(P) {
  const c = peek(P.L);
  const c1 = peek(P.L, 1);
  const c2 = peek(P.L, 2);
  if (c === "<" && c1 === "<" && c2 === "=") return ["<<=", 3];
  if (c === ">" && c1 === ">" && c2 === "=") return [">>=", 3];
  if (c === "*" && c1 === "*") return ["**", 2];
  if (c === "<" && c1 === "<") return ["<<", 2];
  if (c === ">" && c1 === ">") return [">>", 2];
  if (c === "=" && c1 === "=") return ["==", 2];
  if (c === "!" && c1 === "=") return ["!=", 2];
  if (c === "<" && c1 === "=") return ["<=", 2];
  if (c === ">" && c1 === "=") return [">=", 2];
  if (c === "&" && c1 === "&") return ["&&", 2];
  if (c === "|" && c1 === "|") return ["||", 2];
  if (c === "+" && c1 === "=") return ["+=", 2];
  if (c === "-" && c1 === "=") return ["-=", 2];
  if (c === "*" && c1 === "=") return ["*=", 2];
  if (c === "/" && c1 === "=") return ["/=", 2];
  if (c === "%" && c1 === "=") return ["%=", 2];
  if (c === "&" && c1 === "=") return ["&=", 2];
  if (c === "^" && c1 === "=") return ["^=", 2];
  if (c === "|" && c1 === "=") return ["|=", 2];
  if (c === "+" && c1 !== "+") return ["+", 1];
  if (c === "-" && c1 !== "-") return ["-", 1];
  if (c === "*") return ["*", 1];
  if (c === "/") return ["/", 1];
  if (c === "%") return ["%", 1];
  if (c === "<") return ["<", 1];
  if (c === ">") return [">", 1];
  if (c === "&") return ["&", 1];
  if (c === "|") return ["|", 1];
  if (c === "^") return ["^", 1];
  if (c === "=") return ["=", 1];
  return null;
}
function parseArithBinary(P, stop, minPrec, mode) {
  let left = parseArithUnary(P, stop, mode);
  if (!left) return null;
  while (true) {
    skipBlanks(P.L);
    if (isArithStop(P, stop)) break;
    if (peek(P.L) === ",") break;
    const opInfo = scanArithOp(P);
    if (!opInfo) break;
    const [opText, opLen] = opInfo;
    const prec = ARITH_PREC[opText];
    if (prec === void 0 || prec < minPrec) break;
    const os = P.L.b;
    for (let k = 0; k < opLen; k++) advance(P.L);
    const op = mk(P, opText, os, P.L.b, []);
    const nextMin = ARITH_RIGHT_ASSOC.has(opText) ? prec : prec + 1;
    const right = parseArithBinary(P, stop, nextMin, mode);
    if (!right) break;
    left = mk(P, "binary_expression", left.startIndex, right.endIndex, [
      left,
      op,
      right
    ]);
  }
  return left;
}
function parseArithUnary(P, stop, mode) {
  skipBlanks(P.L);
  if (isArithStop(P, stop)) return null;
  const c = peek(P.L);
  const c1 = peek(P.L, 1);
  if (c === "+" && c1 === "+" || c === "-" && c1 === "-") {
    const s = P.L.b;
    advance(P.L);
    advance(P.L);
    const op = mk(P, c + c1, s, P.L.b, []);
    const inner = parseArithUnary(P, stop, mode);
    if (!inner) return op;
    return mk(P, "unary_expression", op.startIndex, inner.endIndex, [op, inner]);
  }
  if (c === "-" || c === "+" || c === "!" || c === "~") {
    if (mode !== "var" && c === "-" && isDigit(c1)) {
      const s2 = P.L.b;
      advance(P.L);
      while (isDigit(peek(P.L))) advance(P.L);
      return mk(P, "number", s2, P.L.b, []);
    }
    const s = P.L.b;
    advance(P.L);
    const op = mk(P, c, s, P.L.b, []);
    const inner = parseArithUnary(P, stop, mode);
    if (!inner) return op;
    return mk(P, "unary_expression", op.startIndex, inner.endIndex, [op, inner]);
  }
  return parseArithPostfix(P, stop, mode);
}
function parseArithPostfix(P, stop, mode) {
  const prim = parseArithPrimary(P, stop, mode);
  if (!prim) return null;
  const c = peek(P.L);
  const c1 = peek(P.L, 1);
  if (c === "+" && c1 === "+" || c === "-" && c1 === "-") {
    const s = P.L.b;
    advance(P.L);
    advance(P.L);
    const op = mk(P, c + c1, s, P.L.b, []);
    return mk(P, "postfix_expression", prim.startIndex, op.endIndex, [prim, op]);
  }
  return prim;
}
function parseArithPrimary(P, stop, mode) {
  skipBlanks(P.L);
  if (isArithStop(P, stop)) return null;
  const c = peek(P.L);
  if (c === "(") {
    const s = P.L.b;
    advance(P.L);
    const open = mk(P, "(", s, P.L.b, []);
    const inners = parseArithCommaList(P, ")", mode);
    skipBlanks(P.L);
    let close;
    if (peek(P.L) === ")") {
      const cs = P.L.b;
      advance(P.L);
      close = mk(P, ")", cs, P.L.b, []);
    } else {
      close = mk(P, ")", P.L.b, P.L.b, []);
    }
    return mk(P, "parenthesized_expression", open.startIndex, close.endIndex, [
      open,
      ...inners,
      close
    ]);
  }
  if (c === '"') {
    return parseDoubleQuoted(P);
  }
  if (c === "$") {
    return parseDollarLike(P);
  }
  if (isDigit(c)) {
    const s = P.L.b;
    while (isDigit(peek(P.L))) advance(P.L);
    if (P.L.b - s === 1 && c === "0" && (peek(P.L) === "x" || peek(P.L) === "X")) {
      advance(P.L);
      while (isHexDigit(peek(P.L))) advance(P.L);
    } else if (peek(P.L) === "#") {
      advance(P.L);
      while (isBaseDigit(peek(P.L))) advance(P.L);
    }
    return mk(P, "number", s, P.L.b, []);
  }
  if (isIdentStart(c)) {
    const s = P.L.b;
    while (isIdentChar(peek(P.L))) advance(P.L);
    const nc = peek(P.L);
    if (mode === "assign") {
      skipBlanks(P.L);
      const ac = peek(P.L);
      const ac1 = peek(P.L, 1);
      if (ac === "=" && ac1 !== "=") {
        const vn = mk(P, "variable_name", s, P.L.b, []);
        const es = P.L.b;
        advance(P.L);
        const eq = mk(P, "=", es, P.L.b, []);
        const val = parseArithTernary(P, stop, mode);
        const end = val ? val.endIndex : eq.endIndex;
        const kids = val ? [vn, eq, val] : [vn, eq];
        return mk(P, "variable_assignment", s, end, kids);
      }
    }
    if (nc === "[") {
      const vn = mk(P, "variable_name", s, P.L.b, []);
      const brS = P.L.b;
      advance(P.L);
      const brOpen = mk(P, "[", brS, P.L.b, []);
      const idx = parseArithTernary(P, "]", "var") ?? parseDollarLike(P);
      skipBlanks(P.L);
      let brClose;
      if (peek(P.L) === "]") {
        const cs = P.L.b;
        advance(P.L);
        brClose = mk(P, "]", cs, P.L.b, []);
      } else {
        brClose = mk(P, "]", P.L.b, P.L.b, []);
      }
      const kids = idx ? [vn, brOpen, idx, brClose] : [vn, brOpen, brClose];
      return mk(P, "subscript", s, brClose.endIndex, kids);
    }
    const identType = mode === "var" ? "variable_name" : "word";
    return mk(P, identType, s, P.L.b, []);
  }
  return null;
}
function isArithStop(P, stop) {
  const c = peek(P.L);
  if (stop === "))") return c === ")" && peek(P.L, 1) === ")";
  if (stop === ")") return c === ")";
  if (stop === ";") return c === ";";
  if (stop === ":") return c === ":";
  if (stop === "]") return c === "]";
  if (stop === "}") return c === "}";
  if (stop === ":}") return c === ":" || c === "}";
  return c === "" || c === "\n";
}
var PARSE_TIMEOUT_MS, MAX_NODES, MODULE, READY, SPECIAL_VARS, DECL_KEYWORDS, SHELL_KEYWORDS, ARITH_PREC, ARITH_RIGHT_ASSOC;
var init_bashParser = __esm({
  "src/utils/bash/bashParser.ts"() {
    PARSE_TIMEOUT_MS = 50;
    MAX_NODES = 5e4;
    MODULE = { parse: parseSource };
    READY = Promise.resolve();
    SPECIAL_VARS = /* @__PURE__ */ new Set(["?", "$", "@", "*", "#", "-", "!", "_"]);
    DECL_KEYWORDS = /* @__PURE__ */ new Set([
      "export",
      "declare",
      "typeset",
      "readonly",
      "local"
    ]);
    SHELL_KEYWORDS = /* @__PURE__ */ new Set([
      "if",
      "then",
      "elif",
      "else",
      "fi",
      "while",
      "until",
      "for",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "function",
      "select"
    ]);
    ARITH_PREC = {
      "=": 2,
      "+=": 2,
      "-=": 2,
      "*=": 2,
      "/=": 2,
      "%=": 2,
      "<<=": 2,
      ">>=": 2,
      "&=": 2,
      "^=": 2,
      "|=": 2,
      "||": 4,
      "&&": 5,
      "|": 6,
      "^": 7,
      "&": 8,
      "==": 9,
      "!=": 9,
      "<": 10,
      ">": 10,
      "<=": 10,
      ">=": 10,
      "<<": 11,
      ">>": 11,
      "+": 12,
      "-": 12,
      "*": 13,
      "/": 13,
      "%": 13,
      "**": 14
    };
    ARITH_RIGHT_ASSOC = /* @__PURE__ */ new Set([
      "=",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "<<=",
      ">>=",
      "&=",
      "^=",
      "|=",
      "**"
    ]);
  }
});

// src/utils/bash/parser.ts
function logLoadOnce(success) {
  if (logged) return;
  logged = true;
  logForDebugging(
    success ? "tree-sitter: native module loaded" : "tree-sitter: unavailable"
  );
  logEvent("tengu_tree_sitter_load", { success });
}
async function ensureInitialized() {
  if (feature("TREE_SITTER_BASH") || feature("TREE_SITTER_BASH_SHADOW")) {
    await ensureParserInitialized();
  }
}
async function parseCommand2(command) {
  if (!command || command.length > MAX_COMMAND_LENGTH) return null;
  if (feature("TREE_SITTER_BASH")) {
    await ensureParserInitialized();
    const mod = getParserModule();
    logLoadOnce(mod !== null);
    if (!mod) return null;
    try {
      const rootNode = mod.parse(command);
      if (!rootNode) return null;
      const commandNode = findCommandNode(rootNode, null);
      const envVars = extractEnvVars(commandNode);
      return { rootNode, envVars, commandNode, originalCommand: command };
    } catch {
      return null;
    }
  }
  return null;
}
async function parseCommandRaw(command) {
  if (!command || command.length > MAX_COMMAND_LENGTH) return null;
  if (feature("TREE_SITTER_BASH") || feature("TREE_SITTER_BASH_SHADOW")) {
    await ensureParserInitialized();
    const mod = getParserModule();
    logLoadOnce(mod !== null);
    if (!mod) return null;
    try {
      const result = mod.parse(command);
      if (result === null) {
        logEvent("tengu_tree_sitter_parse_abort", {
          cmdLength: command.length,
          panic: false
        });
        return PARSE_ABORTED;
      }
      return result;
    } catch {
      logEvent("tengu_tree_sitter_parse_abort", {
        cmdLength: command.length,
        panic: true
      });
      return PARSE_ABORTED;
    }
  }
  return null;
}
function findCommandNode(node, parent) {
  const { type, children } = node;
  if (COMMAND_TYPES.has(type)) return node;
  if (type === "variable_assignment" && parent) {
    return parent.children.find(
      (c) => COMMAND_TYPES.has(c.type) && c.startIndex > node.startIndex
    ) ?? null;
  }
  if (type === "pipeline") {
    for (const child of children) {
      const result = findCommandNode(child, node);
      if (result) return result;
    }
    return null;
  }
  if (type === "redirected_statement") {
    return children.find((c) => COMMAND_TYPES.has(c.type)) ?? null;
  }
  for (const child of children) {
    const result = findCommandNode(child, node);
    if (result) return result;
  }
  return null;
}
function extractEnvVars(commandNode) {
  if (!commandNode || commandNode.type !== "command") return [];
  const envVars = [];
  for (const child of commandNode.children) {
    if (child.type === "variable_assignment") {
      envVars.push(child.text);
    } else if (child.type === "command_name" || child.type === "word") {
      break;
    }
  }
  return envVars;
}
function extractCommandArguments(commandNode) {
  if (commandNode.type === "declaration_command") {
    const firstChild = commandNode.children[0];
    return firstChild && DECLARATION_COMMANDS.has(firstChild.text) ? [firstChild.text] : [];
  }
  const args = [];
  let foundCommandName = false;
  for (const child of commandNode.children) {
    if (child.type === "variable_assignment") continue;
    if (child.type === "command_name" || !foundCommandName && child.type === "word") {
      foundCommandName = true;
      args.push(child.text);
      continue;
    }
    if (ARGUMENT_TYPES.has(child.type)) {
      args.push(stripQuotes(child.text));
    } else if (SUBSTITUTION_TYPES.has(child.type)) {
      break;
    }
  }
  return args;
}
function stripQuotes(text) {
  return text.length >= 2 && (text[0] === '"' && text.at(-1) === '"' || text[0] === "'" && text.at(-1) === "'") ? text.slice(1, -1) : text;
}
var MAX_COMMAND_LENGTH, DECLARATION_COMMANDS, ARGUMENT_TYPES, SUBSTITUTION_TYPES, COMMAND_TYPES, logged, PARSE_ABORTED;
var init_parser = __esm({
  "src/utils/bash/parser.ts"() {
    init_bun_bundle();
    init_analytics();
    init_debug();
    init_bashParser();
    MAX_COMMAND_LENGTH = 1e4;
    DECLARATION_COMMANDS = /* @__PURE__ */ new Set([
      "export",
      "declare",
      "typeset",
      "readonly",
      "local",
      "unset",
      "unsetenv"
    ]);
    ARGUMENT_TYPES = /* @__PURE__ */ new Set(["word", "string", "raw_string", "number"]);
    SUBSTITUTION_TYPES = /* @__PURE__ */ new Set([
      "command_substitution",
      "process_substitution"
    ]);
    COMMAND_TYPES = /* @__PURE__ */ new Set(["command", "declaration_command"]);
    logged = false;
    PARSE_ABORTED = /* @__PURE__ */ Symbol("parse-aborted");
  }
});

export {
  SHELL_KEYWORDS,
  init_bashParser,
  ensureInitialized,
  parseCommand2 as parseCommand,
  PARSE_ABORTED,
  parseCommandRaw,
  extractCommandArguments,
  init_parser
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2Jhc2gvYmFzaFBhcnNlci50cyIsICIuLi8uLi9zcmMvdXRpbHMvYmFzaC9wYXJzZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogUHVyZS1UeXBlU2NyaXB0IGJhc2ggcGFyc2VyIHByb2R1Y2luZyB0cmVlLXNpdHRlci1iYXNoLWNvbXBhdGlibGUgQVNUcy5cbiAqXG4gKiBEb3duc3RyZWFtIGNvZGUgaW4gcGFyc2VyLnRzLCBhc3QudHMsIHByZWZpeC50cywgUGFyc2VkQ29tbWFuZC50cyB3YWxrcyB0aGlzXG4gKiBieSBmaWVsZCBuYW1lLiBzdGFydEluZGV4L2VuZEluZGV4IGFyZSBVVEYtOCBCWVRFIG9mZnNldHMgKG5vdCBKUyBzdHJpbmdcbiAqIGluZGljZXMpLlxuICpcbiAqIEdyYW1tYXIgcmVmZXJlbmNlOiB0cmVlLXNpdHRlci1iYXNoLiBWYWxpZGF0ZWQgYWdhaW5zdCBhIDM0NDktaW5wdXQgZ29sZGVuXG4gKiBjb3JwdXMgZ2VuZXJhdGVkIGZyb20gdGhlIFdBU00gcGFyc2VyLlxuICovXG5cbmV4cG9ydCB0eXBlIFRzTm9kZSA9IHtcbiAgdHlwZTogc3RyaW5nXG4gIHRleHQ6IHN0cmluZ1xuICBzdGFydEluZGV4OiBudW1iZXJcbiAgZW5kSW5kZXg6IG51bWJlclxuICBjaGlsZHJlbjogVHNOb2RlW11cbn1cblxudHlwZSBQYXJzZXJNb2R1bGUgPSB7XG4gIHBhcnNlOiAoc291cmNlOiBzdHJpbmcsIHRpbWVvdXRNcz86IG51bWJlcikgPT4gVHNOb2RlIHwgbnVsbFxufVxuXG4vKipcbiAqIDUwbXMgd2FsbC1jbG9jayBjYXAgXHUyMDE0IGJhaWxzIG91dCBvbiBwYXRob2xvZ2ljYWwvYWR2ZXJzYXJpYWwgaW5wdXQuXG4gKiBQYXNzIGBJbmZpbml0eWAgdmlhIGBwYXJzZShzcmMsIEluZmluaXR5KWAgdG8gZGlzYWJsZSAoZS5nLiBjb3JyZWN0bmVzc1xuICogdGVzdHMsIHdoZXJlIENJIGppdHRlciB3b3VsZCBvdGhlcndpc2UgY2F1c2Ugc3B1cmlvdXMgbnVsbCByZXR1cm5zKS5cbiAqL1xuY29uc3QgUEFSU0VfVElNRU9VVF9NUyA9IDUwXG5cbi8qKiBOb2RlIGJ1ZGdldCBjYXAgXHUyMDE0IGJhaWxzIG91dCBiZWZvcmUgT09NIG9uIGRlZXBseSBuZXN0ZWQgaW5wdXQuICovXG5jb25zdCBNQVhfTk9ERVMgPSA1MF8wMDBcblxuY29uc3QgTU9EVUxFOiBQYXJzZXJNb2R1bGUgPSB7IHBhcnNlOiBwYXJzZVNvdXJjZSB9XG5cbmNvbnN0IFJFQURZID0gUHJvbWlzZS5yZXNvbHZlKClcblxuLyoqIE5vLW9wOiBwdXJlLVRTIHBhcnNlciBuZWVkcyBubyBhc3luYyBpbml0LiBLZXB0IGZvciBBUEkgY29tcGF0aWJpbGl0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVQYXJzZXJJbml0aWFsaXplZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIFJFQURZXG59XG5cbi8qKiBBbHdheXMgc3VjY2VlZHMgXHUyMDE0IHB1cmUtVFMgbmVlZHMgbm8gaW5pdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZXJNb2R1bGUoKTogUGFyc2VyTW9kdWxlIHwgbnVsbCB7XG4gIHJldHVybiBNT0RVTEVcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIFRva2VuaXplciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxudHlwZSBUb2tlblR5cGUgPVxuICB8ICdXT1JEJ1xuICB8ICdOVU1CRVInXG4gIHwgJ09QJ1xuICB8ICdORVdMSU5FJ1xuICB8ICdDT01NRU5UJ1xuICB8ICdEUVVPVEUnXG4gIHwgJ1NRVU9URSdcbiAgfCAnQU5TSV9DJ1xuICB8ICdET0xMQVInXG4gIHwgJ0RPTExBUl9QQVJFTidcbiAgfCAnRE9MTEFSX0JSQUNFJ1xuICB8ICdET0xMQVJfRFBBUkVOJ1xuICB8ICdCQUNLVElDSydcbiAgfCAnTFRfUEFSRU4nXG4gIHwgJ0dUX1BBUkVOJ1xuICB8ICdFT0YnXG5cbnR5cGUgVG9rZW4gPSB7XG4gIHR5cGU6IFRva2VuVHlwZVxuICB2YWx1ZTogc3RyaW5nXG4gIC8qKiBVVEYtOCBieXRlIG9mZnNldCBvZiBmaXJzdCBjaGFyICovXG4gIHN0YXJ0OiBudW1iZXJcbiAgLyoqIFVURi04IGJ5dGUgb2Zmc2V0IG9uZSBwYXN0IGxhc3QgY2hhciAqL1xuICBlbmQ6IG51bWJlclxufVxuXG5jb25zdCBTUEVDSUFMX1ZBUlMgPSBuZXcgU2V0KFsnPycsICckJywgJ0AnLCAnKicsICcjJywgJy0nLCAnIScsICdfJ10pXG5cbmNvbnN0IERFQ0xfS0VZV09SRFMgPSBuZXcgU2V0KFtcbiAgJ2V4cG9ydCcsXG4gICdkZWNsYXJlJyxcbiAgJ3R5cGVzZXQnLFxuICAncmVhZG9ubHknLFxuICAnbG9jYWwnLFxuXSlcblxuZXhwb3J0IGNvbnN0IFNIRUxMX0tFWVdPUkRTID0gbmV3IFNldChbXG4gICdpZicsXG4gICd0aGVuJyxcbiAgJ2VsaWYnLFxuICAnZWxzZScsXG4gICdmaScsXG4gICd3aGlsZScsXG4gICd1bnRpbCcsXG4gICdmb3InLFxuICAnaW4nLFxuICAnZG8nLFxuICAnZG9uZScsXG4gICdjYXNlJyxcbiAgJ2VzYWMnLFxuICAnZnVuY3Rpb24nLFxuICAnc2VsZWN0Jyxcbl0pXG5cbi8qKlxuICogTGV4ZXIgc3RhdGUuIFRyYWNrcyBib3RoIEpTLXN0cmluZyBpbmRleCAoZm9yIGNoYXJBdCkgYW5kIFVURi04IGJ5dGUgb2Zmc2V0XG4gKiAoZm9yIFRzTm9kZSBwb3NpdGlvbnMpLiBBU0NJSSBmYXN0IHBhdGg6IGJ5dGUgPT0gY2hhciBpbmRleC4gTm9uLUFTQ0lJXG4gKiBhZHZhbmNlcyBieXRlIGNvdW50IHBlci1jb2RlcG9pbnQuXG4gKi9cbnR5cGUgTGV4ZXIgPSB7XG4gIHNyYzogc3RyaW5nXG4gIGxlbjogbnVtYmVyXG4gIC8qKiBKUyBzdHJpbmcgaW5kZXggKi9cbiAgaTogbnVtYmVyXG4gIC8qKiBVVEYtOCBieXRlIG9mZnNldCAqL1xuICBiOiBudW1iZXJcbiAgLyoqIFBlbmRpbmcgaGVyZWRvYyBkZWxpbWl0ZXJzIGF3YWl0aW5nIGJvZHkgc2NhbiBhdCBuZXh0IG5ld2xpbmUgKi9cbiAgaGVyZWRvY3M6IEhlcmVkb2NQZW5kaW5nW11cbiAgLyoqIFByZWNvbXB1dGVkIGJ5dGUgb2Zmc2V0IGZvciBlYWNoIGNoYXIgaW5kZXggKGxhenkgZm9yIG5vbi1BU0NJSSkgKi9cbiAgYnl0ZVRhYmxlOiBVaW50MzJBcnJheSB8IG51bGxcbn1cblxudHlwZSBIZXJlZG9jUGVuZGluZyA9IHtcbiAgZGVsaW06IHN0cmluZ1xuICBzdHJpcFRhYnM6IGJvb2xlYW5cbiAgcXVvdGVkOiBib29sZWFuXG4gIC8qKiBGaWxsZWQgYWZ0ZXIgYm9keSBzY2FuICovXG4gIGJvZHlTdGFydDogbnVtYmVyXG4gIGJvZHlFbmQ6IG51bWJlclxuICBlbmRTdGFydDogbnVtYmVyXG4gIGVuZEVuZDogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIG1ha2VMZXhlcihzcmM6IHN0cmluZyk6IExleGVyIHtcbiAgcmV0dXJuIHtcbiAgICBzcmMsXG4gICAgbGVuOiBzcmMubGVuZ3RoLFxuICAgIGk6IDAsXG4gICAgYjogMCxcbiAgICBoZXJlZG9jczogW10sXG4gICAgYnl0ZVRhYmxlOiBudWxsLFxuICB9XG59XG5cbi8qKiBBZHZhbmNlIG9uZSBKUyBjaGFyLCB1cGRhdGluZyBieXRlIG9mZnNldCBmb3IgVVRGLTguICovXG5mdW5jdGlvbiBhZHZhbmNlKEw6IExleGVyKTogdm9pZCB7XG4gIGNvbnN0IGMgPSBMLnNyYy5jaGFyQ29kZUF0KEwuaSlcbiAgTC5pKytcbiAgaWYgKGMgPCAweDgwKSB7XG4gICAgTC5iKytcbiAgfSBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICBMLmIgKz0gMlxuICB9IGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XG4gICAgLy8gSGlnaCBzdXJyb2dhdGUgXHUyMDE0IG5leHQgY2hhciBjb21wbGV0ZXMgdGhlIHBhaXIsIHRvdGFsIDQgVVRGLTggYnl0ZXNcbiAgICBMLmIgKz0gNFxuICAgIEwuaSsrXG4gIH0gZWxzZSB7XG4gICAgTC5iICs9IDNcbiAgfVxufVxuXG5mdW5jdGlvbiBwZWVrKEw6IExleGVyLCBvZmYgPSAwKTogc3RyaW5nIHtcbiAgcmV0dXJuIEwuaSArIG9mZiA8IEwubGVuID8gTC5zcmNbTC5pICsgb2ZmXSEgOiAnJ1xufVxuXG5mdW5jdGlvbiBieXRlQXQoTDogTGV4ZXIsIGNoYXJJZHg6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIEZhc3QgcGF0aDogQVNDSUktb25seSBwcmVmaXggbWVhbnMgY2hhciBpZHggPT0gYnl0ZSBpZHhcbiAgaWYgKEwuYnl0ZVRhYmxlKSByZXR1cm4gTC5ieXRlVGFibGVbY2hhcklkeF0hXG4gIC8vIEJ1aWxkIHRhYmxlIG9uIGZpcnN0IG5vbi10cml2aWFsIGxvb2t1cFxuICBjb25zdCB0ID0gbmV3IFVpbnQzMkFycmF5KEwubGVuICsgMSlcbiAgbGV0IGIgPSAwXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IEwubGVuKSB7XG4gICAgdFtpXSA9IGJcbiAgICBjb25zdCBjID0gTC5zcmMuY2hhckNvZGVBdChpKVxuICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgYisrXG4gICAgICBpKytcbiAgICB9IGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgYiArPSAyXG4gICAgICBpKytcbiAgICB9IGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XG4gICAgICB0W2kgKyAxXSA9IGIgKyAyXG4gICAgICBiICs9IDRcbiAgICAgIGkgKz0gMlxuICAgIH0gZWxzZSB7XG4gICAgICBiICs9IDNcbiAgICAgIGkrK1xuICAgIH1cbiAgfVxuICB0W0wubGVuXSA9IGJcbiAgTC5ieXRlVGFibGUgPSB0XG4gIHJldHVybiB0W2NoYXJJZHhdIVxufVxuXG5mdW5jdGlvbiBpc1dvcmRDaGFyKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBCYXNoIHdvcmQgY2hhcnM6IGFscGhhbnVtZXJpYyArIHZhcmlvdXMgcHVuY3R1YXRpb24gdGhhdCBkb2Vzbid0IHN0YXJ0IG9wZXJhdG9yc1xuICByZXR1cm4gKFxuICAgIChjID49ICdhJyAmJiBjIDw9ICd6JykgfHxcbiAgICAoYyA+PSAnQScgJiYgYyA8PSAnWicpIHx8XG4gICAgKGMgPj0gJzAnICYmIGMgPD0gJzknKSB8fFxuICAgIGMgPT09ICdfJyB8fFxuICAgIGMgPT09ICcvJyB8fFxuICAgIGMgPT09ICcuJyB8fFxuICAgIGMgPT09ICctJyB8fFxuICAgIGMgPT09ICcrJyB8fFxuICAgIGMgPT09ICc6JyB8fFxuICAgIGMgPT09ICdAJyB8fFxuICAgIGMgPT09ICclJyB8fFxuICAgIGMgPT09ICcsJyB8fFxuICAgIGMgPT09ICd+JyB8fFxuICAgIGMgPT09ICdeJyB8fFxuICAgIGMgPT09ICc/JyB8fFxuICAgIGMgPT09ICcqJyB8fFxuICAgIGMgPT09ICchJyB8fFxuICAgIGMgPT09ICc9JyB8fFxuICAgIGMgPT09ICdbJyB8fFxuICAgIGMgPT09ICddJ1xuICApXG59XG5cbmZ1bmN0aW9uIGlzV29yZFN0YXJ0KGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNXb3JkQ2hhcihjKSB8fCBjID09PSAnXFxcXCdcbn1cblxuZnVuY3Rpb24gaXNJZGVudFN0YXJ0KGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKGMgPj0gJ2EnICYmIGMgPD0gJ3onKSB8fCAoYyA+PSAnQScgJiYgYyA8PSAnWicpIHx8IGMgPT09ICdfJ1xufVxuXG5mdW5jdGlvbiBpc0lkZW50Q2hhcihjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzSWRlbnRTdGFydChjKSB8fCAoYyA+PSAnMCcgJiYgYyA8PSAnOScpXG59XG5cbmZ1bmN0aW9uIGlzRGlnaXQoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBjID49ICcwJyAmJiBjIDw9ICc5J1xufVxuXG5mdW5jdGlvbiBpc0hleERpZ2l0KGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNEaWdpdChjKSB8fCAoYyA+PSAnYScgJiYgYyA8PSAnZicpIHx8IChjID49ICdBJyAmJiBjIDw9ICdGJylcbn1cblxuZnVuY3Rpb24gaXNCYXNlRGlnaXQoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIEJhc2ggQkFTRSNESUdJVFM6IGRpZ2l0cywgbGV0dGVycywgQCBhbmQgXyAodXAgdG8gYmFzZSA2NClcbiAgcmV0dXJuIGlzSWRlbnRDaGFyKGMpIHx8IGMgPT09ICdAJ1xufVxuXG4vKipcbiAqIFVucXVvdGVkIGhlcmVkb2MgZGVsaW1pdGVyIGNoYXJzLiBCYXNoIGFjY2VwdHMgbW9zdCBub24tbWV0YWNoYXJhY3RlcnMgXHUyMDE0XG4gKiBub3QganVzdCBpZGVudGlmaWVycy4gU3RvcCBhdCB3aGl0ZXNwYWNlLCByZWRpcmVjdHMsIHBpcGUvbGlzdCBvcGVyYXRvcnMsXG4gKiBhbmQgc3RydWN0dXJhbCB0b2tlbnMuIEFsbG93cyAhLCAtLCAuLCArLCBldGMuIChlLmcuIDw8IUhFUkVET0MhKS5cbiAqL1xuZnVuY3Rpb24gaXNIZXJlZG9jRGVsaW1DaGFyKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGMgIT09ICcnICYmXG4gICAgYyAhPT0gJyAnICYmXG4gICAgYyAhPT0gJ1xcdCcgJiZcbiAgICBjICE9PSAnXFxuJyAmJlxuICAgIGMgIT09ICc8JyAmJlxuICAgIGMgIT09ICc+JyAmJlxuICAgIGMgIT09ICd8JyAmJlxuICAgIGMgIT09ICcmJyAmJlxuICAgIGMgIT09ICc7JyAmJlxuICAgIGMgIT09ICcoJyAmJlxuICAgIGMgIT09ICcpJyAmJlxuICAgIGMgIT09IFwiJ1wiICYmXG4gICAgYyAhPT0gJ1wiJyAmJlxuICAgIGMgIT09ICdgJyAmJlxuICAgIGMgIT09ICdcXFxcJ1xuICApXG59XG5cbmZ1bmN0aW9uIHNraXBCbGFua3MoTDogTGV4ZXIpOiB2b2lkIHtcbiAgd2hpbGUgKEwuaSA8IEwubGVuKSB7XG4gICAgY29uc3QgYyA9IEwuc3JjW0wuaV0hXG4gICAgaWYgKGMgPT09ICcgJyB8fCBjID09PSAnXFx0JyB8fCBjID09PSAnXFxyJykge1xuICAgICAgLy8gXFxyIGlzIHdoaXRlc3BhY2UgcGVyIHRyZWUtc2l0dGVyLWJhc2ggZXh0cmFzIC9cXHMvIFx1MjAxNCBoYW5kbGVzIENSTEYgaW5wdXRzXG4gICAgICBhZHZhbmNlKEwpXG4gICAgfSBlbHNlIGlmIChjID09PSAnXFxcXCcpIHtcbiAgICAgIGNvbnN0IG54ID0gTC5zcmNbTC5pICsgMV1cbiAgICAgIGlmIChueCA9PT0gJ1xcbicgfHwgKG54ID09PSAnXFxyJyAmJiBMLnNyY1tMLmkgKyAyXSA9PT0gJ1xcbicpKSB7XG4gICAgICAgIC8vIExpbmUgY29udGludWF0aW9uIFx1MjAxNCB0cmVlLXNpdHRlciBleHRyYXM6IC9cXFxcXFxyP1xcbi9cbiAgICAgICAgYWR2YW5jZShMKVxuICAgICAgICBhZHZhbmNlKEwpXG4gICAgICAgIGlmIChueCA9PT0gJ1xccicpIGFkdmFuY2UoTClcbiAgICAgIH0gZWxzZSBpZiAobnggPT09ICcgJyB8fCBueCA9PT0gJ1xcdCcpIHtcbiAgICAgICAgLy8gXFw8c3BhY2U+IG9yIFxcPHRhYj4gXHUyMDE0IHRyZWUtc2l0dGVyJ3MgX3doaXRlc3BhY2UgaXMgL1xcXFw/WyBcXHRcXHZdKy9cbiAgICAgICAgYWR2YW5jZShMKVxuICAgICAgICBhZHZhbmNlKEwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNjYW4gbmV4dCB0b2tlbi4gQ29udGV4dC1zZW5zaXRpdmU6IGBjbWRgIG1vZGUgdHJlYXRzIFsgYXMgb3BlcmF0b3IgKHRlc3RcbiAqIGNvbW1hbmQgc3RhcnQpLCBgYXJnYCBtb2RlIHRyZWF0cyBbIGFzIHdvcmQgY2hhciAoZ2xvYi9zdWJzY3JpcHQpLlxuICovXG5mdW5jdGlvbiBuZXh0VG9rZW4oTDogTGV4ZXIsIGN0eDogJ2NtZCcgfCAnYXJnJyA9ICdhcmcnKTogVG9rZW4ge1xuICBza2lwQmxhbmtzKEwpXG4gIGNvbnN0IHN0YXJ0ID0gTC5iXG4gIGlmIChMLmkgPj0gTC5sZW4pIHJldHVybiB7IHR5cGU6ICdFT0YnLCB2YWx1ZTogJycsIHN0YXJ0LCBlbmQ6IHN0YXJ0IH1cblxuICBjb25zdCBjID0gTC5zcmNbTC5pXSFcbiAgY29uc3QgYzEgPSBwZWVrKEwsIDEpXG4gIGNvbnN0IGMyID0gcGVlayhMLCAyKVxuXG4gIGlmIChjID09PSAnXFxuJykge1xuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnTkVXTElORScsIHZhbHVlOiAnXFxuJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuXG4gIGlmIChjID09PSAnIycpIHtcbiAgICBjb25zdCBzaSA9IEwuaVxuICAgIHdoaWxlIChMLmkgPCBMLmxlbiAmJiBMLnNyY1tMLmldICE9PSAnXFxuJykgYWR2YW5jZShMKVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnQ09NTUVOVCcsXG4gICAgICB2YWx1ZTogTC5zcmMuc2xpY2Uoc2ksIEwuaSksXG4gICAgICBzdGFydCxcbiAgICAgIGVuZDogTC5iLFxuICAgIH1cbiAgfVxuXG4gIC8vIE11bHRpLWNoYXIgb3BlcmF0b3JzIChsb25nZXN0IG1hdGNoIGZpcnN0KVxuICBpZiAoYyA9PT0gJyYnICYmIGMxID09PSAnJicpIHtcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnJiYnLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnfCcgJiYgYzEgPT09ICd8Jykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICd8fCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09ICd8JyAmJiBjMSA9PT0gJyYnKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnT1AnLCB2YWx1ZTogJ3wmJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJzsnICYmIGMxID09PSAnOycgJiYgYzIgPT09ICcmJykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnOzsmJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJzsnICYmIGMxID09PSAnOycpIHtcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnOzsnLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnOycgJiYgYzEgPT09ICcmJykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICc7JicsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09ICc+JyAmJiBjMSA9PT0gJz4nKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnT1AnLCB2YWx1ZTogJz4+Jywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJz4nICYmIGMxID09PSAnJicgJiYgYzIgPT09ICctJykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnPiYtJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJz4nICYmIGMxID09PSAnJicpIHtcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnPiYnLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnPicgJiYgYzEgPT09ICd8Jykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICc+fCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09ICcmJyAmJiBjMSA9PT0gJz4nICYmIGMyID09PSAnPicpIHtcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnT1AnLCB2YWx1ZTogJyY+PicsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09ICcmJyAmJiBjMSA9PT0gJz4nKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnT1AnLCB2YWx1ZTogJyY+Jywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJzwnICYmIGMxID09PSAnPCcgJiYgYzIgPT09ICc8Jykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnPDw8Jywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJzwnICYmIGMxID09PSAnPCcgJiYgYzIgPT09ICctJykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnPDwtJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJzwnICYmIGMxID09PSAnPCcpIHtcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnPDwnLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnPCcgJiYgYzEgPT09ICcmJyAmJiBjMiA9PT0gJy0nKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICc8Ji0nLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnPCcgJiYgYzEgPT09ICcmJykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICc8JicsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09ICc8JyAmJiBjMSA9PT0gJygnKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnTFRfUEFSRU4nLCB2YWx1ZTogJzwoJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuICBpZiAoYyA9PT0gJz4nICYmIGMxID09PSAnKCcpIHtcbiAgICBhZHZhbmNlKEwpXG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdHVF9QQVJFTicsIHZhbHVlOiAnPignLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnKCcgJiYgYzEgPT09ICcoJykge1xuICAgIGFkdmFuY2UoTClcbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICcoKCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09ICcpJyAmJiBjMSA9PT0gJyknKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnT1AnLCB2YWx1ZTogJykpJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgfVxuXG4gIGlmIChjID09PSAnfCcgfHwgYyA9PT0gJyYnIHx8IGMgPT09ICc7JyB8fCBjID09PSAnPicgfHwgYyA9PT0gJzwnKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiBjLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG4gIGlmIChjID09PSAnKCcgfHwgYyA9PT0gJyknKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiBjLCBzdGFydCwgZW5kOiBMLmIgfVxuICB9XG5cbiAgLy8gSW4gY21kIHBvc2l0aW9uLCBbIFtbIHsgc3RhcnQgdGVzdC9ncm91cDsgaW4gYXJnIHBvc2l0aW9uIHRoZXkncmUgd29yZCBjaGFyc1xuICBpZiAoY3R4ID09PSAnY21kJykge1xuICAgIGlmIChjID09PSAnWycgJiYgYzEgPT09ICdbJykge1xuICAgICAgYWR2YW5jZShMKVxuICAgICAgYWR2YW5jZShMKVxuICAgICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICdbWycsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjID09PSAnWycpIHtcbiAgICAgIGFkdmFuY2UoTClcbiAgICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnWycsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjID09PSAneycgJiYgKGMxID09PSAnICcgfHwgYzEgPT09ICdcXHQnIHx8IGMxID09PSAnXFxuJykpIHtcbiAgICAgIGFkdmFuY2UoTClcbiAgICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAneycsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjID09PSAnfScpIHtcbiAgICAgIGFkdmFuY2UoTClcbiAgICAgIHJldHVybiB7IHR5cGU6ICdPUCcsIHZhbHVlOiAnfScsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjID09PSAnIScgJiYgKGMxID09PSAnICcgfHwgYzEgPT09ICdcXHQnKSkge1xuICAgICAgYWR2YW5jZShMKVxuICAgICAgcmV0dXJuIHsgdHlwZTogJ09QJywgdmFsdWU6ICchJywgc3RhcnQsIGVuZDogTC5iIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYyA9PT0gJ1wiJykge1xuICAgIGFkdmFuY2UoTClcbiAgICByZXR1cm4geyB0eXBlOiAnRFFVT1RFJywgdmFsdWU6ICdcIicsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cbiAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgY29uc3Qgc2kgPSBMLmlcbiAgICBhZHZhbmNlKEwpXG4gICAgd2hpbGUgKEwuaSA8IEwubGVuICYmIEwuc3JjW0wuaV0gIT09IFwiJ1wiKSBhZHZhbmNlKEwpXG4gICAgaWYgKEwuaSA8IEwubGVuKSBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdTUVVPVEUnLFxuICAgICAgdmFsdWU6IEwuc3JjLnNsaWNlKHNpLCBMLmkpLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQ6IEwuYixcbiAgICB9XG4gIH1cblxuICBpZiAoYyA9PT0gJyQnKSB7XG4gICAgaWYgKGMxID09PSAnKCcgJiYgYzIgPT09ICcoJykge1xuICAgICAgYWR2YW5jZShMKVxuICAgICAgYWR2YW5jZShMKVxuICAgICAgYWR2YW5jZShMKVxuICAgICAgcmV0dXJuIHsgdHlwZTogJ0RPTExBUl9EUEFSRU4nLCB2YWx1ZTogJyQoKCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjMSA9PT0gJygnKSB7XG4gICAgICBhZHZhbmNlKEwpXG4gICAgICBhZHZhbmNlKEwpXG4gICAgICByZXR1cm4geyB0eXBlOiAnRE9MTEFSX1BBUkVOJywgdmFsdWU6ICckKCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjMSA9PT0gJ3snKSB7XG4gICAgICBhZHZhbmNlKEwpXG4gICAgICBhZHZhbmNlKEwpXG4gICAgICByZXR1cm4geyB0eXBlOiAnRE9MTEFSX0JSQUNFJywgdmFsdWU6ICckeycsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIGlmIChjMSA9PT0gXCInXCIpIHtcbiAgICAgIC8vIEFOU0ktQyBzdHJpbmcgJCcuLi4nXG4gICAgICBjb25zdCBzaSA9IEwuaVxuICAgICAgYWR2YW5jZShMKVxuICAgICAgYWR2YW5jZShMKVxuICAgICAgd2hpbGUgKEwuaSA8IEwubGVuICYmIEwuc3JjW0wuaV0gIT09IFwiJ1wiKSB7XG4gICAgICAgIGlmIChMLnNyY1tMLmldID09PSAnXFxcXCcgJiYgTC5pICsgMSA8IEwubGVuKSBhZHZhbmNlKEwpXG4gICAgICAgIGFkdmFuY2UoTClcbiAgICAgIH1cbiAgICAgIGlmIChMLmkgPCBMLmxlbikgYWR2YW5jZShMKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0FOU0lfQycsXG4gICAgICAgIHZhbHVlOiBMLnNyYy5zbGljZShzaSwgTC5pKSxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZDogTC5iLFxuICAgICAgfVxuICAgIH1cbiAgICBhZHZhbmNlKEwpXG4gICAgcmV0dXJuIHsgdHlwZTogJ0RPTExBUicsIHZhbHVlOiAnJCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cblxuICBpZiAoYyA9PT0gJ2AnKSB7XG4gICAgYWR2YW5jZShMKVxuICAgIHJldHVybiB7IHR5cGU6ICdCQUNLVElDSycsIHZhbHVlOiAnYCcsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gIH1cblxuICAvLyBGaWxlIGRlc2NyaXB0b3IgYmVmb3JlIHJlZGlyZWN0OiBkaWdpdCsgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgPiBvciA8XG4gIGlmIChpc0RpZ2l0KGMpKSB7XG4gICAgbGV0IGogPSBMLmlcbiAgICB3aGlsZSAoaiA8IEwubGVuICYmIGlzRGlnaXQoTC5zcmNbal0hKSkgaisrXG4gICAgY29uc3QgYWZ0ZXIgPSBqIDwgTC5sZW4gPyBMLnNyY1tqXSEgOiAnJ1xuICAgIGlmIChhZnRlciA9PT0gJz4nIHx8IGFmdGVyID09PSAnPCcpIHtcbiAgICAgIGNvbnN0IHNpID0gTC5pXG4gICAgICB3aGlsZSAoTC5pIDwgaikgYWR2YW5jZShMKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1dPUkQnLFxuICAgICAgICB2YWx1ZTogTC5zcmMuc2xpY2Uoc2ksIEwuaSksXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQ6IEwuYixcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBXb3JkIC8gbnVtYmVyXG4gIGlmIChpc1dvcmRTdGFydChjKSB8fCBjID09PSAneycgfHwgYyA9PT0gJ30nKSB7XG4gICAgY29uc3Qgc2kgPSBMLmlcbiAgICB3aGlsZSAoTC5pIDwgTC5sZW4pIHtcbiAgICAgIGNvbnN0IGNoID0gTC5zcmNbTC5pXSFcbiAgICAgIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGlmIChMLmkgKyAxID49IEwubGVuKSB7XG4gICAgICAgICAgLy8gVHJhaWxpbmcgYFxcYCBhdCBFT0YgXHUyMDE0IHRyZWUtc2l0dGVyIGV4Y2x1ZGVzIGl0IGZyb20gdGhlIHdvcmQgYW5kXG4gICAgICAgICAgLy8gZW1pdHMgYSBzaWJsaW5nIEVSUk9SLiBTdG9wIGhlcmUgc28gdGhlIHdvcmQgZW5kcyBiZWZvcmUgYFxcYC5cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIC8vIEVzY2FwZSBuZXh0IGNoYXIgKGluY2x1ZGluZyBcXG4gZm9yIGxpbmUgY29udGludWF0aW9uIG1pZC13b3JkKVxuICAgICAgICBpZiAoTC5zcmNbTC5pICsgMV0gPT09ICdcXG4nKSB7XG4gICAgICAgICAgYWR2YW5jZShMKVxuICAgICAgICAgIGFkdmFuY2UoTClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGFkdmFuY2UoTClcbiAgICAgICAgYWR2YW5jZShMKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKCFpc1dvcmRDaGFyKGNoKSAmJiBjaCAhPT0gJ3snICYmIGNoICE9PSAnfScpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGFkdmFuY2UoTClcbiAgICB9XG4gICAgaWYgKEwuaSA+IHNpKSB7XG4gICAgICBjb25zdCB2ID0gTC5zcmMuc2xpY2Uoc2ksIEwuaSlcbiAgICAgIC8vIE51bWJlcjogb3B0aW9uYWwgc2lnbiB0aGVuIGRpZ2l0cyBvbmx5XG4gICAgICBpZiAoL14tP1xcZCskLy50ZXN0KHYpKSB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdOVU1CRVInLCB2YWx1ZTogdiwgc3RhcnQsIGVuZDogTC5iIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHR5cGU6ICdXT1JEJywgdmFsdWU6IHYsIHN0YXJ0LCBlbmQ6IEwuYiB9XG4gICAgfVxuICAgIC8vIEVtcHR5IHdvcmQgKGxvbmUgYFxcYCBhdCBFT0YpIFx1MjAxNCBmYWxsIHRocm91Z2ggdG8gc2luZ2xlLWNoYXIgY29uc3VtZXJcbiAgfVxuXG4gIC8vIFVua25vd24gY2hhciBcdTIwMTQgY29uc3VtZSBhcyBzaW5nbGUtY2hhciB3b3JkXG4gIGFkdmFuY2UoTClcbiAgcmV0dXJuIHsgdHlwZTogJ1dPUkQnLCB2YWx1ZTogYywgc3RhcnQsIGVuZDogTC5iIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIFBhcnNlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxudHlwZSBQYXJzZVN0YXRlID0ge1xuICBMOiBMZXhlclxuICBzcmM6IHN0cmluZ1xuICBzcmNCeXRlczogbnVtYmVyXG4gIC8qKiBUcnVlIHdoZW4gYnl0ZSBvZmZzZXRzID09IGNoYXIgaW5kaWNlcyAobm8gbXVsdGktYnl0ZSBVVEYtOCkgKi9cbiAgaXNBc2NpaTogYm9vbGVhblxuICBub2RlQ291bnQ6IG51bWJlclxuICBkZWFkbGluZTogbnVtYmVyXG4gIGFib3J0ZWQ6IGJvb2xlYW5cbiAgLyoqIERlcHRoIG9mIGJhY2t0aWNrIG5lc3RpbmcgXHUyMDE0IGluc2lkZSBgLi4uYCwgYCB0ZXJtaW5hdGVzIHdvcmRzICovXG4gIGluQmFja3RpY2s6IG51bWJlclxuICAvKiogV2hlbiBzZXQsIHBhcnNlU2ltcGxlQ29tbWFuZCBzdG9wcyBhdCB0aGlzIHRva2VuIChmb3IgYFtgIGJhY2t0cmFjaykgKi9cbiAgc3RvcFRva2VuOiBzdHJpbmcgfCBudWxsXG59XG5cbmZ1bmN0aW9uIHBhcnNlU291cmNlKHNvdXJjZTogc3RyaW5nLCB0aW1lb3V0TXM/OiBudW1iZXIpOiBUc05vZGUgfCBudWxsIHtcbiAgY29uc3QgTCA9IG1ha2VMZXhlcihzb3VyY2UpXG4gIGNvbnN0IHNyY0J5dGVzID0gYnl0ZUxlbmd0aFV0Zjgoc291cmNlKVxuICBjb25zdCBQOiBQYXJzZVN0YXRlID0ge1xuICAgIEwsXG4gICAgc3JjOiBzb3VyY2UsXG4gICAgc3JjQnl0ZXMsXG4gICAgaXNBc2NpaTogc3JjQnl0ZXMgPT09IHNvdXJjZS5sZW5ndGgsXG4gICAgbm9kZUNvdW50OiAwLFxuICAgIGRlYWRsaW5lOiBwZXJmb3JtYW5jZS5ub3coKSArICh0aW1lb3V0TXMgPz8gUEFSU0VfVElNRU9VVF9NUyksXG4gICAgYWJvcnRlZDogZmFsc2UsXG4gICAgaW5CYWNrdGljazogMCxcbiAgICBzdG9wVG9rZW46IG51bGwsXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9ncmFtID0gcGFyc2VQcm9ncmFtKFApXG4gICAgaWYgKFAuYWJvcnRlZCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gcHJvZ3JhbVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGhVdGY4KHM6IHN0cmluZyk6IG51bWJlciB7XG4gIGxldCBiID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gcy5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGMgPCAweDgwKSBiKytcbiAgICBlbHNlIGlmIChjIDwgMHg4MDApIGIgKz0gMlxuICAgIGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XG4gICAgICBiICs9IDRcbiAgICAgIGkrK1xuICAgIH0gZWxzZSBiICs9IDNcbiAgfVxuICByZXR1cm4gYlxufVxuXG5mdW5jdGlvbiBjaGVja0J1ZGdldChQOiBQYXJzZVN0YXRlKTogdm9pZCB7XG4gIFAubm9kZUNvdW50KytcbiAgaWYgKFAubm9kZUNvdW50ID4gTUFYX05PREVTKSB7XG4gICAgUC5hYm9ydGVkID0gdHJ1ZVxuICAgIHRocm93IG5ldyBFcnJvcignYnVkZ2V0JylcbiAgfVxuICBpZiAoKFAubm9kZUNvdW50ICYgMHg3ZikgPT09IDAgJiYgcGVyZm9ybWFuY2Uubm93KCkgPiBQLmRlYWRsaW5lKSB7XG4gICAgUC5hYm9ydGVkID0gdHJ1ZVxuICAgIHRocm93IG5ldyBFcnJvcigndGltZW91dCcpXG4gIH1cbn1cblxuLyoqIEJ1aWxkIGEgbm9kZS4gU2xpY2VzIHRleHQgZnJvbSBzb3VyY2UgYnkgYnl0ZSByYW5nZSB2aWEgY2hhci1pbmRleCBsb29rdXAuICovXG5mdW5jdGlvbiBtayhcbiAgUDogUGFyc2VTdGF0ZSxcbiAgdHlwZTogc3RyaW5nLFxuICBzdGFydDogbnVtYmVyLFxuICBlbmQ6IG51bWJlcixcbiAgY2hpbGRyZW46IFRzTm9kZVtdLFxuKTogVHNOb2RlIHtcbiAgY2hlY2tCdWRnZXQoUClcbiAgcmV0dXJuIHtcbiAgICB0eXBlLFxuICAgIHRleHQ6IHNsaWNlQnl0ZXMoUCwgc3RhcnQsIGVuZCksXG4gICAgc3RhcnRJbmRleDogc3RhcnQsXG4gICAgZW5kSW5kZXg6IGVuZCxcbiAgICBjaGlsZHJlbixcbiAgfVxufVxuXG5mdW5jdGlvbiBzbGljZUJ5dGVzKFA6IFBhcnNlU3RhdGUsIHN0YXJ0Qnl0ZTogbnVtYmVyLCBlbmRCeXRlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoUC5pc0FzY2lpKSByZXR1cm4gUC5zcmMuc2xpY2Uoc3RhcnRCeXRlLCBlbmRCeXRlKVxuICAvLyBGaW5kIGNoYXIgaW5kaWNlcyBmb3IgYnl0ZSBvZmZzZXRzLiBCdWlsZCBieXRlIHRhYmxlIGlmIG5lZWRlZC5cbiAgY29uc3QgTCA9IFAuTFxuICBpZiAoIUwuYnl0ZVRhYmxlKSBieXRlQXQoTCwgMClcbiAgY29uc3QgdCA9IEwuYnl0ZVRhYmxlIVxuICAvLyBCaW5hcnkgc2VhcmNoIGZvciBjaGFyIGluZGV4IHdoZXJlIGJ5dGUgb2Zmc2V0IG1hdGNoZXNcbiAgbGV0IGxvID0gMFxuICBsZXQgaGkgPSBQLnNyYy5sZW5ndGhcbiAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICBjb25zdCBtID0gKGxvICsgaGkpID4+PiAxXG4gICAgaWYgKHRbbV0hIDwgc3RhcnRCeXRlKSBsbyA9IG0gKyAxXG4gICAgZWxzZSBoaSA9IG1cbiAgfVxuICBjb25zdCBzYyA9IGxvXG4gIGxvID0gc2NcbiAgaGkgPSBQLnNyYy5sZW5ndGhcbiAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICBjb25zdCBtID0gKGxvICsgaGkpID4+PiAxXG4gICAgaWYgKHRbbV0hIDwgZW5kQnl0ZSkgbG8gPSBtICsgMVxuICAgIGVsc2UgaGkgPSBtXG4gIH1cbiAgcmV0dXJuIFAuc3JjLnNsaWNlKHNjLCBsbylcbn1cblxuZnVuY3Rpb24gbGVhZihQOiBQYXJzZVN0YXRlLCB0eXBlOiBzdHJpbmcsIHRvazogVG9rZW4pOiBUc05vZGUge1xuICByZXR1cm4gbWsoUCwgdHlwZSwgdG9rLnN0YXJ0LCB0b2suZW5kLCBbXSlcbn1cblxuZnVuY3Rpb24gcGFyc2VQcm9ncmFtKFA6IFBhcnNlU3RhdGUpOiBUc05vZGUge1xuICBjb25zdCBjaGlsZHJlbjogVHNOb2RlW10gPSBbXVxuICAvLyBTa2lwIGxlYWRpbmcgd2hpdGVzcGFjZSAmIG5ld2xpbmVzIFx1MjAxNCBwcm9ncmFtIHN0YXJ0IGlzIGZpcnN0IGNvbnRlbnQgYnl0ZVxuICBza2lwQmxhbmtzKFAuTClcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmICh0LnR5cGUgPT09ICdORVdMSU5FJykge1xuICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICBicmVha1xuICB9XG4gIGNvbnN0IHByb2dTdGFydCA9IFAuTC5iXG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmICh0LnR5cGUgPT09ICdFT0YnKSBicmVha1xuICAgIGlmICh0LnR5cGUgPT09ICdORVdMSU5FJykgY29udGludWVcbiAgICBpZiAodC50eXBlID09PSAnQ09NTUVOVCcpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2gobGVhZihQLCAnY29tbWVudCcsIHQpKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgY29uc3Qgc3RtdHMgPSBwYXJzZVN0YXRlbWVudHMoUCwgbnVsbClcbiAgICBmb3IgKGNvbnN0IHMgb2Ygc3RtdHMpIGNoaWxkcmVuLnB1c2gocylcbiAgICBpZiAoc3RtdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBDb3VsZG4ndCBwYXJzZSBcdTIwMTQgZW1pdCBFUlJPUiBhbmQgc2tpcCBvbmUgdG9rZW5cbiAgICAgIGNvbnN0IGVyclRvayA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgICAgaWYgKGVyclRvay50eXBlID09PSAnRU9GJykgYnJlYWtcbiAgICAgIC8vIFN0cmF5IGA7O2AgYXQgcHJvZ3JhbSBsZXZlbCAoZS5nLiwgYHZhcj07O2Agb3V0c2lkZSBjYXNlKSBcdTIwMTQgdHJlZS1zaXR0ZXJcbiAgICAgIC8vIHNpbGVudGx5IGVsaWRlcy4gS2VlcCBsZWFkaW5nIGA7YCBhcyBFUlJPUiAoc2VjdXJpdHk6IHBhc3RlIGFydGlmYWN0KS5cbiAgICAgIGlmIChcbiAgICAgICAgZXJyVG9rLnR5cGUgPT09ICdPUCcgJiZcbiAgICAgICAgZXJyVG9rLnZhbHVlID09PSAnOzsnICYmXG4gICAgICAgIGNoaWxkcmVuLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY2hpbGRyZW4ucHVzaChtayhQLCAnRVJST1InLCBlcnJUb2suc3RhcnQsIGVyclRvay5lbmQsIFtdKSlcbiAgICB9XG4gIH1cbiAgLy8gdHJlZS1zaXR0ZXIgaW5jbHVkZXMgdHJhaWxpbmcgd2hpdGVzcGFjZSBpbiBwcm9ncmFtIGV4dGVudFxuICBjb25zdCBwcm9nRW5kID0gY2hpbGRyZW4ubGVuZ3RoID4gMCA/IFAuc3JjQnl0ZXMgOiBwcm9nU3RhcnRcbiAgcmV0dXJuIG1rKFAsICdwcm9ncmFtJywgcHJvZ1N0YXJ0LCBwcm9nRW5kLCBjaGlsZHJlbilcbn1cblxuLyoqIFBhY2tlZCBhcyAoYiA8PCAxNikgfCBpIFx1MjAxNCBhdm9pZHMgaGVhcCBhbGxvYyBvbiBldmVyeSBiYWNrdHJhY2suICovXG50eXBlIExleFNhdmUgPSBudW1iZXJcbmZ1bmN0aW9uIHNhdmVMZXgoTDogTGV4ZXIpOiBMZXhTYXZlIHtcbiAgcmV0dXJuIEwuYiAqIDB4MTAwMDAgKyBMLmlcbn1cbmZ1bmN0aW9uIHJlc3RvcmVMZXgoTDogTGV4ZXIsIHM6IExleFNhdmUpOiB2b2lkIHtcbiAgTC5pID0gcyAmIDB4ZmZmZlxuICBMLmIgPSBzID4+PiAxNlxufVxuXG4vKipcbiAqIFBhcnNlIGEgc2VxdWVuY2Ugb2Ygc3RhdGVtZW50cyBzZXBhcmF0ZWQgYnkgOyAmIG5ld2xpbmUuIFJldHVybnMgYSBmbGF0IGxpc3RcbiAqIHdoZXJlIDsgYW5kICYgYXJlIHNpYmxpbmcgbGVhdmVzIChOT1Qgd3JhcHBlZCBpbiAnbGlzdCcgXHUyMDE0IG9ubHkgJiYgfHwgZ2V0XG4gKiB0aGF0KS4gU3RvcHMgYXQgdGVybWluYXRvciBvciBFT0YuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50cyhQOiBQYXJzZVN0YXRlLCB0ZXJtaW5hdG9yOiBzdHJpbmcgfCBudWxsKTogVHNOb2RlW10ge1xuICBjb25zdCBvdXQ6IFRzTm9kZVtdID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmICh0LnR5cGUgPT09ICdFT0YnKSB7XG4gICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmICh0LnR5cGUgPT09ICdORVdMSU5FJykge1xuICAgICAgLy8gUHJvY2VzcyBwZW5kaW5nIGhlcmVkb2NzXG4gICAgICBpZiAoUC5MLmhlcmVkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2NhbkhlcmVkb2NCb2RpZXMoUClcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmICh0LnR5cGUgPT09ICdDT01NRU5UJykge1xuICAgICAgb3V0LnB1c2gobGVhZihQLCAnY29tbWVudCcsIHQpKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0b3IgJiYgdC50eXBlID09PSAnT1AnICYmIHQudmFsdWUgPT09IHRlcm1pbmF0b3IpIHtcbiAgICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdC50eXBlID09PSAnT1AnICYmXG4gICAgICAodC52YWx1ZSA9PT0gJyknIHx8XG4gICAgICAgIHQudmFsdWUgPT09ICd9JyB8fFxuICAgICAgICB0LnZhbHVlID09PSAnOzsnIHx8XG4gICAgICAgIHQudmFsdWUgPT09ICc7JicgfHxcbiAgICAgICAgdC52YWx1ZSA9PT0gJzs7JicgfHxcbiAgICAgICAgdC52YWx1ZSA9PT0gJykpJyB8fFxuICAgICAgICB0LnZhbHVlID09PSAnXV0nIHx8XG4gICAgICAgIHQudmFsdWUgPT09ICddJylcbiAgICApIHtcbiAgICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKHQudHlwZSA9PT0gJ0JBQ0tUSUNLJyAmJiBQLmluQmFja3RpY2sgPiAwKSB7XG4gICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChcbiAgICAgIHQudHlwZSA9PT0gJ1dPUkQnICYmXG4gICAgICAodC52YWx1ZSA9PT0gJ3RoZW4nIHx8XG4gICAgICAgIHQudmFsdWUgPT09ICdlbGlmJyB8fFxuICAgICAgICB0LnZhbHVlID09PSAnZWxzZScgfHxcbiAgICAgICAgdC52YWx1ZSA9PT0gJ2ZpJyB8fFxuICAgICAgICB0LnZhbHVlID09PSAnZG8nIHx8XG4gICAgICAgIHQudmFsdWUgPT09ICdkb25lJyB8fFxuICAgICAgICB0LnZhbHVlID09PSAnZXNhYycpXG4gICAgKSB7XG4gICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIGNvbnN0IHN0bXQgPSBwYXJzZUFuZE9yKFApXG4gICAgaWYgKCFzdG10KSBicmVha1xuICAgIG91dC5wdXNoKHN0bXQpXG4gICAgLy8gTG9vayBmb3Igc2VwYXJhdG9yXG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgY29uc3Qgc2F2ZTIgPSBzYXZlTGV4KFAuTClcbiAgICBjb25zdCBzZXAgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgICBpZiAoc2VwLnR5cGUgPT09ICdPUCcgJiYgKHNlcC52YWx1ZSA9PT0gJzsnIHx8IHNlcC52YWx1ZSA9PT0gJyYnKSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGVybWluYXRvciBmb2xsb3dzIFx1MjAxNCBpZiBzbywgZW1pdCBzZXBhcmF0b3IgYnV0IHN0b3BcbiAgICAgIGNvbnN0IHNhdmUzID0gc2F2ZUxleChQLkwpXG4gICAgICBjb25zdCBhZnRlciA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUzKVxuICAgICAgb3V0LnB1c2gobGVhZihQLCBzZXAudmFsdWUsIHNlcCkpXG4gICAgICBpZiAoXG4gICAgICAgIGFmdGVyLnR5cGUgPT09ICdFT0YnIHx8XG4gICAgICAgIChhZnRlci50eXBlID09PSAnT1AnICYmXG4gICAgICAgICAgKGFmdGVyLnZhbHVlID09PSAnKScgfHxcbiAgICAgICAgICAgIGFmdGVyLnZhbHVlID09PSAnfScgfHxcbiAgICAgICAgICAgIGFmdGVyLnZhbHVlID09PSAnOzsnIHx8XG4gICAgICAgICAgICBhZnRlci52YWx1ZSA9PT0gJzsmJyB8fFxuICAgICAgICAgICAgYWZ0ZXIudmFsdWUgPT09ICc7OyYnKSkgfHxcbiAgICAgICAgKGFmdGVyLnR5cGUgPT09ICdXT1JEJyAmJlxuICAgICAgICAgIChhZnRlci52YWx1ZSA9PT0gJ3RoZW4nIHx8XG4gICAgICAgICAgICBhZnRlci52YWx1ZSA9PT0gJ2VsaWYnIHx8XG4gICAgICAgICAgICBhZnRlci52YWx1ZSA9PT0gJ2Vsc2UnIHx8XG4gICAgICAgICAgICBhZnRlci52YWx1ZSA9PT0gJ2ZpJyB8fFxuICAgICAgICAgICAgYWZ0ZXIudmFsdWUgPT09ICdkbycgfHxcbiAgICAgICAgICAgIGFmdGVyLnZhbHVlID09PSAnZG9uZScgfHxcbiAgICAgICAgICAgIGFmdGVyLnZhbHVlID09PSAnZXNhYycpKVxuICAgICAgKSB7XG4gICAgICAgIC8vIFRyYWlsaW5nIHNlcGFyYXRvciBcdTIwMTQgZG9uJ3QgaW5jbHVkZSBpdCBhdCBwcm9ncmFtIGxldmVsIHVubGVzc1xuICAgICAgICAvLyB0aGVyZSdzIGNvbnRlbnQgYWZ0ZXIuIEJ1dCBhdCBpbm5lciBsZXZlbHMgd2Uga2VlcCBpdC5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlcC50eXBlID09PSAnTkVXTElORScpIHtcbiAgICAgIGlmIChQLkwuaGVyZWRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICBzY2FuSGVyZWRvY0JvZGllcyhQKVxuICAgICAgfVxuICAgICAgY29udGludWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUyKVxuICAgIH1cbiAgfVxuICAvLyBUcmltIHRyYWlsaW5nIHNlcGFyYXRvciBpZiBhdCBwcm9ncmFtIGxldmVsXG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBQYXJzZSBwaXBlbGluZSBjaGFpbnMgam9pbmVkIGJ5ICYmIHx8LiBMZWZ0LWFzc29jaWF0aXZlIG5lc3RpbmcuXG4gKiB0cmVlLXNpdHRlciBxdWlyazogdHJhaWxpbmcgcmVkaXJlY3Qgb24gdGhlIGxhc3QgcGlwZWxpbmUgd3JhcHMgdGhlIEVOVElSRVxuICogbGlzdCBpbiBhIHJlZGlyZWN0ZWRfc3RhdGVtZW50IFx1MjAxNCBgYSA+IHggJiYgYiA+IHlgIGJlY29tZXNcbiAqIHJlZGlyZWN0ZWRfc3RhdGVtZW50KGxpc3QocmVkaXJlY3RlZF9zdGF0ZW1lbnQoYSw+eCksICYmLCBiKSwgPnkpLlxuICovXG5mdW5jdGlvbiBwYXJzZUFuZE9yKFA6IFBhcnNlU3RhdGUpOiBUc05vZGUgfCBudWxsIHtcbiAgbGV0IGxlZnQgPSBwYXJzZVBpcGVsaW5lKFApXG4gIGlmICghbGVmdCkgcmV0dXJuIG51bGxcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmICh0LnR5cGUgPT09ICdPUCcgJiYgKHQudmFsdWUgPT09ICcmJicgfHwgdC52YWx1ZSA9PT0gJ3x8JykpIHtcbiAgICAgIGNvbnN0IG9wID0gbGVhZihQLCB0LnZhbHVlLCB0KVxuICAgICAgc2tpcE5ld2xpbmVzKFApXG4gICAgICBjb25zdCByaWdodCA9IHBhcnNlUGlwZWxpbmUoUClcbiAgICAgIGlmICghcmlnaHQpIHtcbiAgICAgICAgbGVmdCA9IG1rKFAsICdsaXN0JywgbGVmdC5zdGFydEluZGV4LCBvcC5lbmRJbmRleCwgW2xlZnQsIG9wXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIC8vIElmIHJpZ2h0IGlzIGEgcmVkaXJlY3RlZF9zdGF0ZW1lbnQsIGhvaXN0IGl0cyByZWRpcmVjdHMgdG8gd3JhcCB0aGUgbGlzdC5cbiAgICAgIGlmIChyaWdodC50eXBlID09PSAncmVkaXJlY3RlZF9zdGF0ZW1lbnQnICYmIHJpZ2h0LmNoaWxkcmVuLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIGNvbnN0IGlubmVyID0gcmlnaHQuY2hpbGRyZW5bMF0hXG4gICAgICAgIGNvbnN0IHJlZGlycyA9IHJpZ2h0LmNoaWxkcmVuLnNsaWNlKDEpXG4gICAgICAgIGNvbnN0IGxpc3ROb2RlID0gbWsoUCwgJ2xpc3QnLCBsZWZ0LnN0YXJ0SW5kZXgsIGlubmVyLmVuZEluZGV4LCBbXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICBvcCxcbiAgICAgICAgICBpbm5lcixcbiAgICAgICAgXSlcbiAgICAgICAgY29uc3QgbGFzdFIgPSByZWRpcnNbcmVkaXJzLmxlbmd0aCAtIDFdIVxuICAgICAgICBsZWZ0ID0gbWsoXG4gICAgICAgICAgUCxcbiAgICAgICAgICAncmVkaXJlY3RlZF9zdGF0ZW1lbnQnLFxuICAgICAgICAgIGxpc3ROb2RlLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgbGFzdFIuZW5kSW5kZXgsXG4gICAgICAgICAgW2xpc3ROb2RlLCAuLi5yZWRpcnNdLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gbWsoUCwgJ2xpc3QnLCBsZWZ0LnN0YXJ0SW5kZXgsIHJpZ2h0LmVuZEluZGV4LCBbbGVmdCwgb3AsIHJpZ2h0XSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGVmdFxufVxuXG5mdW5jdGlvbiBza2lwTmV3bGluZXMoUDogUGFyc2VTdGF0ZSk6IHZvaWQge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHNhdmUgPSBzYXZlTGV4KFAuTClcbiAgICBjb25zdCB0ID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgaWYgKHQudHlwZSAhPT0gJ05FV0xJTkUnKSB7XG4gICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgY29tbWFuZHMgam9pbmVkIGJ5IHwgb3IgfCYuIEZsYXQgY2hpbGRyZW4gd2l0aCBvcGVyYXRvciBsZWF2ZXMuXG4gKiB0cmVlLXNpdHRlciBxdWlyazogYGEgfCBiIDI+bnVsIHwgY2AgaG9pc3RzIHRoZSByZWRpcmVjdCBvbiBgYmAgdG8gd3JhcFxuICogdGhlIHByZWNlZGluZyBwaXBlbGluZSBmcmFnbWVudCBcdTIwMTQgcGlwZWxpbmUocmVkaXJlY3RlZF9zdGF0ZW1lbnQoXG4gKiBwaXBlbGluZShhLHwsYiksIDI+bnVsKSwgfCwgYykuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUGlwZWxpbmUoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZSB8IG51bGwge1xuICBsZXQgZmlyc3QgPSBwYXJzZUNvbW1hbmQoUClcbiAgaWYgKCFmaXJzdCkgcmV0dXJuIG51bGxcbiAgY29uc3QgcGFydHM6IFRzTm9kZVtdID0gW2ZpcnN0XVxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHNhdmUgPSBzYXZlTGV4KFAuTClcbiAgICBjb25zdCB0ID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgaWYgKHQudHlwZSA9PT0gJ09QJyAmJiAodC52YWx1ZSA9PT0gJ3wnIHx8IHQudmFsdWUgPT09ICd8JicpKSB7XG4gICAgICBjb25zdCBvcCA9IGxlYWYoUCwgdC52YWx1ZSwgdClcbiAgICAgIHNraXBOZXdsaW5lcyhQKVxuICAgICAgY29uc3QgbmV4dCA9IHBhcnNlQ29tbWFuZChQKVxuICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgIHBhcnRzLnB1c2gob3ApXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICAvLyBIb2lzdCB0cmFpbGluZyByZWRpcmVjdCBvbiBgbmV4dGAgdG8gd3JhcCBjdXJyZW50IHBpcGVsaW5lIGZyYWdtZW50XG4gICAgICBpZiAoXG4gICAgICAgIG5leHQudHlwZSA9PT0gJ3JlZGlyZWN0ZWRfc3RhdGVtZW50JyAmJlxuICAgICAgICBuZXh0LmNoaWxkcmVuLmxlbmd0aCA+PSAyICYmXG4gICAgICAgIHBhcnRzLmxlbmd0aCA+PSAxXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBuZXh0LmNoaWxkcmVuWzBdIVxuICAgICAgICBjb25zdCByZWRpcnMgPSBuZXh0LmNoaWxkcmVuLnNsaWNlKDEpXG4gICAgICAgIC8vIFdyYXAgZXhpc3RpbmcgcGFydHMgKyBvcCArIGlubmVyIGFzIGEgcGlwZWxpbmVcbiAgICAgICAgY29uc3QgcGlwZUtpZHMgPSBbLi4ucGFydHMsIG9wLCBpbm5lcl1cbiAgICAgICAgY29uc3QgcGlwZU5vZGUgPSBtayhcbiAgICAgICAgICBQLFxuICAgICAgICAgICdwaXBlbGluZScsXG4gICAgICAgICAgcGlwZUtpZHNbMF0hLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgaW5uZXIuZW5kSW5kZXgsXG4gICAgICAgICAgcGlwZUtpZHMsXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgbGFzdFIgPSByZWRpcnNbcmVkaXJzLmxlbmd0aCAtIDFdIVxuICAgICAgICBjb25zdCB3cmFwcGVkID0gbWsoXG4gICAgICAgICAgUCxcbiAgICAgICAgICAncmVkaXJlY3RlZF9zdGF0ZW1lbnQnLFxuICAgICAgICAgIHBpcGVOb2RlLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgbGFzdFIuZW5kSW5kZXgsXG4gICAgICAgICAgW3BpcGVOb2RlLCAuLi5yZWRpcnNdLFxuICAgICAgICApXG4gICAgICAgIHBhcnRzLmxlbmd0aCA9IDBcbiAgICAgICAgcGFydHMucHVzaCh3cmFwcGVkKVxuICAgICAgICBmaXJzdCA9IHdyYXBwZWRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIHBhcnRzLnB1c2gob3AsIG5leHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHBhcnRzWzBdIVxuICBjb25zdCBsYXN0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0hXG4gIHJldHVybiBtayhQLCAncGlwZWxpbmUnLCBwYXJ0c1swXSEuc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgcGFydHMpXG59XG5cbi8qKiBQYXJzZSBhIHNpbmdsZSBjb21tYW5kOiBzaW1wbGUsIGNvbXBvdW5kLCBvciBjb250cm9sIHN0cnVjdHVyZS4gKi9cbmZ1bmN0aW9uIHBhcnNlQ29tbWFuZChQOiBQYXJzZVN0YXRlKTogVHNOb2RlIHwgbnVsbCB7XG4gIHNraXBCbGFua3MoUC5MKVxuICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gIGNvbnN0IHQgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcblxuICBpZiAodC50eXBlID09PSAnRU9GJykge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBOZWdhdGlvbiBcdTIwMTQgdHJlZS1zaXR0ZXIgd3JhcHMganVzdCB0aGUgY29tbWFuZCwgcmVkaXJlY3RzIGdvIG91dHNpZGUuXG4gIC8vIGAhIGNtZCA+IG91dGAgXHUyMTkyIHJlZGlyZWN0ZWRfc3RhdGVtZW50KG5lZ2F0ZWRfY29tbWFuZCghLCBjbWQpLCA+b3V0KVxuICBpZiAodC50eXBlID09PSAnT1AnICYmIHQudmFsdWUgPT09ICchJykge1xuICAgIGNvbnN0IGJhbmcgPSBsZWFmKFAsICchJywgdClcbiAgICBjb25zdCBpbm5lciA9IHBhcnNlQ29tbWFuZChQKVxuICAgIGlmICghaW5uZXIpIHtcbiAgICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgLy8gSWYgaW5uZXIgaXMgYSByZWRpcmVjdGVkX3N0YXRlbWVudCwgaG9pc3QgcmVkaXJlY3RzIG91dHNpZGUgbmVnYXRpb25cbiAgICBpZiAoaW5uZXIudHlwZSA9PT0gJ3JlZGlyZWN0ZWRfc3RhdGVtZW50JyAmJiBpbm5lci5jaGlsZHJlbi5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgY21kID0gaW5uZXIuY2hpbGRyZW5bMF0hXG4gICAgICBjb25zdCByZWRpcnMgPSBpbm5lci5jaGlsZHJlbi5zbGljZSgxKVxuICAgICAgY29uc3QgbmVnID0gbWsoUCwgJ25lZ2F0ZWRfY29tbWFuZCcsIGJhbmcuc3RhcnRJbmRleCwgY21kLmVuZEluZGV4LCBbXG4gICAgICAgIGJhbmcsXG4gICAgICAgIGNtZCxcbiAgICAgIF0pXG4gICAgICBjb25zdCBsYXN0UiA9IHJlZGlyc1tyZWRpcnMubGVuZ3RoIC0gMV0hXG4gICAgICByZXR1cm4gbWsoUCwgJ3JlZGlyZWN0ZWRfc3RhdGVtZW50JywgbmVnLnN0YXJ0SW5kZXgsIGxhc3RSLmVuZEluZGV4LCBbXG4gICAgICAgIG5lZyxcbiAgICAgICAgLi4ucmVkaXJzLFxuICAgICAgXSlcbiAgICB9XG4gICAgcmV0dXJuIG1rKFAsICduZWdhdGVkX2NvbW1hbmQnLCBiYW5nLnN0YXJ0SW5kZXgsIGlubmVyLmVuZEluZGV4LCBbXG4gICAgICBiYW5nLFxuICAgICAgaW5uZXIsXG4gICAgXSlcbiAgfVxuXG4gIGlmICh0LnR5cGUgPT09ICdPUCcgJiYgdC52YWx1ZSA9PT0gJygnKSB7XG4gICAgY29uc3Qgb3BlbiA9IGxlYWYoUCwgJygnLCB0KVxuICAgIGNvbnN0IGJvZHkgPSBwYXJzZVN0YXRlbWVudHMoUCwgJyknKVxuICAgIGNvbnN0IGNsb3NlVG9rID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgY29uc3QgY2xvc2UgPVxuICAgICAgY2xvc2VUb2sudHlwZSA9PT0gJ09QJyAmJiBjbG9zZVRvay52YWx1ZSA9PT0gJyknXG4gICAgICAgID8gbGVhZihQLCAnKScsIGNsb3NlVG9rKVxuICAgICAgICA6IG1rKFAsICcpJywgb3Blbi5lbmRJbmRleCwgb3Blbi5lbmRJbmRleCwgW10pXG4gICAgY29uc3Qgbm9kZSA9IG1rKFAsICdzdWJzaGVsbCcsIG9wZW4uc3RhcnRJbmRleCwgY2xvc2UuZW5kSW5kZXgsIFtcbiAgICAgIG9wZW4sXG4gICAgICAuLi5ib2R5LFxuICAgICAgY2xvc2UsXG4gICAgXSlcbiAgICByZXR1cm4gbWF5YmVSZWRpcmVjdChQLCBub2RlKVxuICB9XG5cbiAgaWYgKHQudHlwZSA9PT0gJ09QJyAmJiB0LnZhbHVlID09PSAnKCgnKSB7XG4gICAgY29uc3Qgb3BlbiA9IGxlYWYoUCwgJygoJywgdClcbiAgICBjb25zdCBleHBycyA9IHBhcnNlQXJpdGhDb21tYUxpc3QoUCwgJykpJywgJ3ZhcicpXG4gICAgY29uc3QgY2xvc2VUb2sgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgICBjb25zdCBjbG9zZSA9XG4gICAgICBjbG9zZVRvay52YWx1ZSA9PT0gJykpJ1xuICAgICAgICA/IGxlYWYoUCwgJykpJywgY2xvc2VUb2spXG4gICAgICAgIDogbWsoUCwgJykpJywgb3Blbi5lbmRJbmRleCwgb3Blbi5lbmRJbmRleCwgW10pXG4gICAgcmV0dXJuIG1rKFAsICdjb21wb3VuZF9zdGF0ZW1lbnQnLCBvcGVuLnN0YXJ0SW5kZXgsIGNsb3NlLmVuZEluZGV4LCBbXG4gICAgICBvcGVuLFxuICAgICAgLi4uZXhwcnMsXG4gICAgICBjbG9zZSxcbiAgICBdKVxuICB9XG5cbiAgaWYgKHQudHlwZSA9PT0gJ09QJyAmJiB0LnZhbHVlID09PSAneycpIHtcbiAgICBjb25zdCBvcGVuID0gbGVhZihQLCAneycsIHQpXG4gICAgY29uc3QgYm9keSA9IHBhcnNlU3RhdGVtZW50cyhQLCAnfScpXG4gICAgY29uc3QgY2xvc2VUb2sgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgICBjb25zdCBjbG9zZSA9XG4gICAgICBjbG9zZVRvay50eXBlID09PSAnT1AnICYmIGNsb3NlVG9rLnZhbHVlID09PSAnfSdcbiAgICAgICAgPyBsZWFmKFAsICd9JywgY2xvc2VUb2spXG4gICAgICAgIDogbWsoUCwgJ30nLCBvcGVuLmVuZEluZGV4LCBvcGVuLmVuZEluZGV4LCBbXSlcbiAgICBjb25zdCBub2RlID0gbWsoUCwgJ2NvbXBvdW5kX3N0YXRlbWVudCcsIG9wZW4uc3RhcnRJbmRleCwgY2xvc2UuZW5kSW5kZXgsIFtcbiAgICAgIG9wZW4sXG4gICAgICAuLi5ib2R5LFxuICAgICAgY2xvc2UsXG4gICAgXSlcbiAgICByZXR1cm4gbWF5YmVSZWRpcmVjdChQLCBub2RlKVxuICB9XG5cbiAgaWYgKHQudHlwZSA9PT0gJ09QJyAmJiAodC52YWx1ZSA9PT0gJ1snIHx8IHQudmFsdWUgPT09ICdbWycpKSB7XG4gICAgY29uc3Qgb3BlbiA9IGxlYWYoUCwgdC52YWx1ZSwgdClcbiAgICBjb25zdCBjbG9zZXIgPSB0LnZhbHVlID09PSAnWycgPyAnXScgOiAnXV0nXG4gICAgLy8gR3JhbW1hcjogYFtgIGNhbiBjb250YWluIGNob2ljZShfZXhwcmVzc2lvbiwgcmVkaXJlY3RlZF9zdGF0ZW1lbnQpLlxuICAgIC8vIFRyeSBfZXhwcmVzc2lvbiBmaXJzdDsgaWYgd2UgZG9uJ3QgcmVhY2ggYF1gLCBiYWNrdHJhY2sgYW5kIHBhcnNlIGFzXG4gICAgLy8gcmVkaXJlY3RlZF9zdGF0ZW1lbnQgKGhhbmRsZXMgYFsgISBjbWQgLXYgZ28gJj4vZGV2L251bGwgXWApLlxuICAgIGNvbnN0IGV4cHJTYXZlID0gc2F2ZUxleChQLkwpXG4gICAgbGV0IGV4cHIgPSBwYXJzZVRlc3RFeHByKFAsIGNsb3NlcilcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBpZiAodC52YWx1ZSA9PT0gJ1snICYmIHBlZWsoUC5MKSAhPT0gJ10nKSB7XG4gICAgICAvLyBFeHByZXNzaW9uIHBhcnNlIGRpZG4ndCByZWFjaCBgXWAgXHUyMDE0IHRyeSBhcyByZWRpcmVjdGVkX3N0YXRlbWVudC5cbiAgICAgIC8vIFRocmVhZCBgXWAgc3RvcC10b2tlbiBzbyBwYXJzZVNpbXBsZUNvbW1hbmQgZG9lc24ndCBlYXQgaXQgYXMgYXJnLlxuICAgICAgcmVzdG9yZUxleChQLkwsIGV4cHJTYXZlKVxuICAgICAgY29uc3QgcHJldlN0b3AgPSBQLnN0b3BUb2tlblxuICAgICAgUC5zdG9wVG9rZW4gPSAnXSdcbiAgICAgIGNvbnN0IHJzdG10ID0gcGFyc2VDb21tYW5kKFApXG4gICAgICBQLnN0b3BUb2tlbiA9IHByZXZTdG9wXG4gICAgICBpZiAocnN0bXQgJiYgcnN0bXQudHlwZSA9PT0gJ3JlZGlyZWN0ZWRfc3RhdGVtZW50Jykge1xuICAgICAgICBleHByID0gcnN0bXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5laXRoZXIgd29ya2VkIFx1MjAxNCByZXN0b3JlIGFuZCBrZWVwIHRoZSBleHByZXNzaW9uIHJlc3VsdFxuICAgICAgICByZXN0b3JlTGV4KFAuTCwgZXhwclNhdmUpXG4gICAgICAgIGV4cHIgPSBwYXJzZVRlc3RFeHByKFAsIGNsb3NlcilcbiAgICAgIH1cbiAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgIH1cbiAgICBjb25zdCBjbG9zZVRvayA9IG5leHRUb2tlbihQLkwsICdhcmcnKVxuICAgIGxldCBjbG9zZTogVHNOb2RlXG4gICAgaWYgKGNsb3NlVG9rLnZhbHVlID09PSBjbG9zZXIpIHtcbiAgICAgIGNsb3NlID0gbGVhZihQLCBjbG9zZXIsIGNsb3NlVG9rKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZSA9IG1rKFAsIGNsb3Nlciwgb3Blbi5lbmRJbmRleCwgb3Blbi5lbmRJbmRleCwgW10pXG4gICAgfVxuICAgIGNvbnN0IGtpZHMgPSBleHByID8gW29wZW4sIGV4cHIsIGNsb3NlXSA6IFtvcGVuLCBjbG9zZV1cbiAgICByZXR1cm4gbWsoUCwgJ3Rlc3RfY29tbWFuZCcsIG9wZW4uc3RhcnRJbmRleCwgY2xvc2UuZW5kSW5kZXgsIGtpZHMpXG4gIH1cblxuICBpZiAodC50eXBlID09PSAnV09SRCcpIHtcbiAgICBpZiAodC52YWx1ZSA9PT0gJ2lmJykgcmV0dXJuIG1heWJlUmVkaXJlY3QoUCwgcGFyc2VJZihQLCB0KSwgdHJ1ZSlcbiAgICBpZiAodC52YWx1ZSA9PT0gJ3doaWxlJyB8fCB0LnZhbHVlID09PSAndW50aWwnKVxuICAgICAgcmV0dXJuIG1heWJlUmVkaXJlY3QoUCwgcGFyc2VXaGlsZShQLCB0KSwgdHJ1ZSlcbiAgICBpZiAodC52YWx1ZSA9PT0gJ2ZvcicpIHJldHVybiBtYXliZVJlZGlyZWN0KFAsIHBhcnNlRm9yKFAsIHQpLCB0cnVlKVxuICAgIGlmICh0LnZhbHVlID09PSAnc2VsZWN0JykgcmV0dXJuIG1heWJlUmVkaXJlY3QoUCwgcGFyc2VGb3IoUCwgdCksIHRydWUpXG4gICAgaWYgKHQudmFsdWUgPT09ICdjYXNlJykgcmV0dXJuIG1heWJlUmVkaXJlY3QoUCwgcGFyc2VDYXNlKFAsIHQpLCB0cnVlKVxuICAgIGlmICh0LnZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gcGFyc2VGdW5jdGlvbihQLCB0KVxuICAgIGlmIChERUNMX0tFWVdPUkRTLmhhcyh0LnZhbHVlKSlcbiAgICAgIHJldHVybiBtYXliZVJlZGlyZWN0KFAsIHBhcnNlRGVjbGFyYXRpb24oUCwgdCkpXG4gICAgaWYgKHQudmFsdWUgPT09ICd1bnNldCcgfHwgdC52YWx1ZSA9PT0gJ3Vuc2V0ZW52Jykge1xuICAgICAgcmV0dXJuIG1heWJlUmVkaXJlY3QoUCwgcGFyc2VVbnNldChQLCB0KSlcbiAgICB9XG4gIH1cblxuICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgcmV0dXJuIHBhcnNlU2ltcGxlQ29tbWFuZChQKVxufVxuXG4vKipcbiAqIFBhcnNlIGEgc2ltcGxlIGNvbW1hbmQ6IFthc3NpZ25tZW50XSogd29yZCBbYXJnfHJlZGlyZWN0XSpcbiAqIFJldHVybnMgdmFyaWFibGVfYXNzaWdubWVudCBpZiBvbmx5IG9uZSBhc3NpZ25tZW50IGFuZCBubyBjb21tYW5kLlxuICovXG5mdW5jdGlvbiBwYXJzZVNpbXBsZUNvbW1hbmQoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZSB8IG51bGwge1xuICBjb25zdCBzdGFydCA9IFAuTC5iXG4gIGNvbnN0IGFzc2lnbm1lbnRzOiBUc05vZGVbXSA9IFtdXG4gIGNvbnN0IHByZVJlZGlyZWN0czogVHNOb2RlW10gPSBbXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgY29uc3QgYSA9IHRyeVBhcnNlQXNzaWdubWVudChQKVxuICAgIGlmIChhKSB7XG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCByID0gdHJ5UGFyc2VSZWRpcmVjdChQKVxuICAgIGlmIChyKSB7XG4gICAgICBwcmVSZWRpcmVjdHMucHVzaChyKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgYnJlYWtcbiAgfVxuXG4gIHNraXBCbGFua3MoUC5MKVxuICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gIGNvbnN0IG5hbWVUb2sgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgaWYgKFxuICAgIG5hbWVUb2sudHlwZSA9PT0gJ0VPRicgfHxcbiAgICBuYW1lVG9rLnR5cGUgPT09ICdORVdMSU5FJyB8fFxuICAgIG5hbWVUb2sudHlwZSA9PT0gJ0NPTU1FTlQnIHx8XG4gICAgKG5hbWVUb2sudHlwZSA9PT0gJ09QJyAmJlxuICAgICAgbmFtZVRvay52YWx1ZSAhPT0gJ3snICYmXG4gICAgICBuYW1lVG9rLnZhbHVlICE9PSAnWycgJiZcbiAgICAgIG5hbWVUb2sudmFsdWUgIT09ICdbWycpIHx8XG4gICAgKG5hbWVUb2sudHlwZSA9PT0gJ1dPUkQnICYmXG4gICAgICBTSEVMTF9LRVlXT1JEUy5oYXMobmFtZVRvay52YWx1ZSkgJiZcbiAgICAgIG5hbWVUb2sudmFsdWUgIT09ICdpbicpXG4gICkge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIC8vIE5vIGNvbW1hbmQgXHUyMDE0IHN0YW5kYWxvbmUgYXNzaWdubWVudChzKSBvciByZWRpcmVjdFxuICAgIGlmIChhc3NpZ25tZW50cy5sZW5ndGggPT09IDEgJiYgcHJlUmVkaXJlY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGFzc2lnbm1lbnRzWzBdIVxuICAgIH1cbiAgICBpZiAocHJlUmVkaXJlY3RzLmxlbmd0aCA+IDAgJiYgYXNzaWdubWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBCYXJlIHJlZGlyZWN0IFx1MjE5MiByZWRpcmVjdGVkX3N0YXRlbWVudCB3aXRoIGp1c3QgZmlsZV9yZWRpcmVjdCBjaGlsZHJlblxuICAgICAgY29uc3QgbGFzdCA9IHByZVJlZGlyZWN0c1twcmVSZWRpcmVjdHMubGVuZ3RoIC0gMV0hXG4gICAgICByZXR1cm4gbWsoXG4gICAgICAgIFAsXG4gICAgICAgICdyZWRpcmVjdGVkX3N0YXRlbWVudCcsXG4gICAgICAgIHByZVJlZGlyZWN0c1swXSEuc3RhcnRJbmRleCxcbiAgICAgICAgbGFzdC5lbmRJbmRleCxcbiAgICAgICAgcHJlUmVkaXJlY3RzLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoYXNzaWdubWVudHMubGVuZ3RoID4gMSAmJiBwcmVSZWRpcmVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBgQT0xIEI9MmAgd2l0aCBubyBjb21tYW5kIFx1MjE5MiB2YXJpYWJsZV9hc3NpZ25tZW50cyAocGx1cmFsKVxuICAgICAgY29uc3QgbGFzdCA9IGFzc2lnbm1lbnRzW2Fzc2lnbm1lbnRzLmxlbmd0aCAtIDFdIVxuICAgICAgcmV0dXJuIG1rKFxuICAgICAgICBQLFxuICAgICAgICAndmFyaWFibGVfYXNzaWdubWVudHMnLFxuICAgICAgICBhc3NpZ25tZW50c1swXSEuc3RhcnRJbmRleCxcbiAgICAgICAgbGFzdC5lbmRJbmRleCxcbiAgICAgICAgYXNzaWdubWVudHMsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChhc3NpZ25tZW50cy5sZW5ndGggPiAwIHx8IHByZVJlZGlyZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhbGwgPSBbLi4uYXNzaWdubWVudHMsIC4uLnByZVJlZGlyZWN0c11cbiAgICAgIGNvbnN0IGxhc3QgPSBhbGxbYWxsLmxlbmd0aCAtIDFdIVxuICAgICAgcmV0dXJuIG1rKFAsICdjb21tYW5kJywgc3RhcnQsIGxhc3QuZW5kSW5kZXgsIGFsbClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcblxuICAvLyBDaGVjayBmb3IgZnVuY3Rpb24gZGVmaW5pdGlvbjogbmFtZSgpIHsgLi4uIH1cbiAgY29uc3QgZm5TYXZlID0gc2F2ZUxleChQLkwpXG4gIGNvbnN0IG5tID0gcGFyc2VXb3JkKFAsICdjbWQnKVxuICBpZiAobm0gJiYgbm0udHlwZSA9PT0gJ3dvcmQnKSB7XG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJygnICYmIHBlZWsoUC5MLCAxKSA9PT0gJyknKSB7XG4gICAgICBjb25zdCBvVG9rID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgICBjb25zdCBjVG9rID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgICBjb25zdCBvUGFyZW4gPSBsZWFmKFAsICcoJywgb1RvaylcbiAgICAgIGNvbnN0IGNQYXJlbiA9IGxlYWYoUCwgJyknLCBjVG9rKVxuICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICBza2lwTmV3bGluZXMoUClcbiAgICAgIGNvbnN0IGJvZHkgPSBwYXJzZUNvbW1hbmQoUClcbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIC8vIElmIGJvZHkgaXMgcmVkaXJlY3RlZF9zdGF0ZW1lbnQoY29tcG91bmRfc3RhdGVtZW50LCBmaWxlX3JlZGlyZWN0Li4uKSxcbiAgICAgICAgLy8gaG9pc3QgcmVkaXJlY3RzIHRvIGZ1bmN0aW9uX2RlZmluaXRpb24gbGV2ZWwgcGVyIHRyZWUtc2l0dGVyIGdyYW1tYXJcbiAgICAgICAgbGV0IGJvZHlLaWRzOiBUc05vZGVbXSA9IFtib2R5XVxuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9keS50eXBlID09PSAncmVkaXJlY3RlZF9zdGF0ZW1lbnQnICYmXG4gICAgICAgICAgYm9keS5jaGlsZHJlbi5sZW5ndGggPj0gMiAmJlxuICAgICAgICAgIGJvZHkuY2hpbGRyZW5bMF0hLnR5cGUgPT09ICdjb21wb3VuZF9zdGF0ZW1lbnQnXG4gICAgICAgICkge1xuICAgICAgICAgIGJvZHlLaWRzID0gYm9keS5jaGlsZHJlblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3QgPSBib2R5S2lkc1tib2R5S2lkcy5sZW5ndGggLSAxXSFcbiAgICAgICAgcmV0dXJuIG1rKFAsICdmdW5jdGlvbl9kZWZpbml0aW9uJywgbm0uc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgW1xuICAgICAgICAgIG5tLFxuICAgICAgICAgIG9QYXJlbixcbiAgICAgICAgICBjUGFyZW4sXG4gICAgICAgICAgLi4uYm9keUtpZHMsXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlc3RvcmVMZXgoUC5MLCBmblNhdmUpXG5cbiAgY29uc3QgbmFtZUFyZyA9IHBhcnNlV29yZChQLCAnY21kJylcbiAgaWYgKCFuYW1lQXJnKSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFzc2lnbm1lbnRzWzBdIVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBjbWROYW1lID0gbWsoUCwgJ2NvbW1hbmRfbmFtZScsIG5hbWVBcmcuc3RhcnRJbmRleCwgbmFtZUFyZy5lbmRJbmRleCwgW1xuICAgIG5hbWVBcmcsXG4gIF0pXG5cbiAgY29uc3QgYXJnczogVHNOb2RlW10gPSBbXVxuICBjb25zdCByZWRpcmVjdHM6IFRzTm9kZVtdID0gW11cbiAgbGV0IGhlcmVkb2NSZWRpcmVjdDogVHNOb2RlIHwgbnVsbCA9IG51bGxcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIC8vIFBvc3QtY29tbWFuZCByZWRpcmVjdHMgYXJlIGdyZWVkeSAocmVwZWF0MSAkLl9saXRlcmFsKSBcdTIwMTQgb25jZSBhIHJlZGlyZWN0XG4gICAgLy8gYXBwZWFycyBhZnRlciBjb21tYW5kX25hbWUsIHN1YnNlcXVlbnQgbGl0ZXJhbHMgYXR0YWNoIHRvIGl0IHBlciBncmFtbWFyJ3NcbiAgICAvLyBwcmVjLmxlZnQuIGBncmVwIDI+L2Rldi9udWxsIC1xIGZvb2AgXHUyMTkyIGZpbGVfcmVkaXJlY3QgZWF0cyBgLXEgZm9vYC5cbiAgICAvLyBBcmdzIHBhcnNlZCBCRUZPUkUgdGhlIGZpcnN0IHJlZGlyZWN0IHN0aWxsIGdvIHRvIGNvbW1hbmQgKGNhdCBhIGIgPiBvdXQpLlxuICAgIGNvbnN0IHIgPSB0cnlQYXJzZVJlZGlyZWN0KFAsIHRydWUpXG4gICAgaWYgKHIpIHtcbiAgICAgIGlmIChyLnR5cGUgPT09ICdoZXJlZG9jX3JlZGlyZWN0Jykge1xuICAgICAgICBoZXJlZG9jUmVkaXJlY3QgPSByXG4gICAgICB9IGVsc2UgaWYgKHIudHlwZSA9PT0gJ2hlcmVzdHJpbmdfcmVkaXJlY3QnKSB7XG4gICAgICAgIGFyZ3MucHVzaChyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVkaXJlY3RzLnB1c2gocilcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIC8vIE9uY2UgYSBmaWxlX3JlZGlyZWN0IGhhcyBiZWVuIHNlZW4sIGNvbW1hbmQgYXJncyBhcmUgZG9uZSBcdTIwMTQgZ3JhbW1hcidzXG4gICAgLy8gY29tbWFuZCBydWxlIGRvZXNuJ3QgYWxsb3cgZmlsZV9yZWRpcmVjdCBpbiBpdHMgcG9zdC1uYW1lIGNob2ljZSwgc29cbiAgICAvLyBhbnl0aGluZyBhZnRlciBiZWxvbmdzIHRvIHJlZGlyZWN0ZWRfc3RhdGVtZW50J3MgZmlsZV9yZWRpcmVjdCBjaGlsZHJlbi5cbiAgICBpZiAocmVkaXJlY3RzLmxlbmd0aCA+IDApIGJyZWFrXG4gICAgLy8gYFtgIHRlc3RfY29tbWFuZCBiYWNrdHJhY2sgXHUyMDE0IHN0b3AgYXQgYF1gIHNvIG91dGVyIGhhbmRsZXIgY2FuIGNvbnN1bWUgaXRcbiAgICBpZiAoUC5zdG9wVG9rZW4gPT09ICddJyAmJiBwZWVrKFAuTCkgPT09ICddJykgYnJlYWtcbiAgICBjb25zdCBzYXZlMiA9IHNhdmVMZXgoUC5MKVxuICAgIGNvbnN0IHBrID0gbmV4dFRva2VuKFAuTCwgJ2FyZycpXG4gICAgaWYgKFxuICAgICAgcGsudHlwZSA9PT0gJ0VPRicgfHxcbiAgICAgIHBrLnR5cGUgPT09ICdORVdMSU5FJyB8fFxuICAgICAgcGsudHlwZSA9PT0gJ0NPTU1FTlQnIHx8XG4gICAgICAocGsudHlwZSA9PT0gJ09QJyAmJlxuICAgICAgICAocGsudmFsdWUgPT09ICd8JyB8fFxuICAgICAgICAgIHBrLnZhbHVlID09PSAnfCYnIHx8XG4gICAgICAgICAgcGsudmFsdWUgPT09ICcmJicgfHxcbiAgICAgICAgICBway52YWx1ZSA9PT0gJ3x8JyB8fFxuICAgICAgICAgIHBrLnZhbHVlID09PSAnOycgfHxcbiAgICAgICAgICBway52YWx1ZSA9PT0gJzs7JyB8fFxuICAgICAgICAgIHBrLnZhbHVlID09PSAnOyYnIHx8XG4gICAgICAgICAgcGsudmFsdWUgPT09ICc7OyYnIHx8XG4gICAgICAgICAgcGsudmFsdWUgPT09ICcmJyB8fFxuICAgICAgICAgIHBrLnZhbHVlID09PSAnKScgfHxcbiAgICAgICAgICBway52YWx1ZSA9PT0gJ30nIHx8XG4gICAgICAgICAgcGsudmFsdWUgPT09ICcpKScpKVxuICAgICkge1xuICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUyKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgcmVzdG9yZUxleChQLkwsIHNhdmUyKVxuICAgIGNvbnN0IGFyZyA9IHBhcnNlV29yZChQLCAnYXJnJylcbiAgICBpZiAoIWFyZykge1xuICAgICAgLy8gTG9uZSBgKGAgaW4gYXJnIHBvc2l0aW9uIFx1MjAxNCB0cmVlLXNpdHRlciBwYXJzZXMgdGhpcyBhcyBzdWJzaGVsbCBhcmdcbiAgICAgIC8vIGUuZy4sIGBlY2hvID0oY21kKWAgXHUyMTkyIGNvbW1hbmQgaGFzIEVSUk9SKD0pLCBzdWJzaGVsbChjbWQpIGFzIGFyZ3NcbiAgICAgIGlmIChwZWVrKFAuTCkgPT09ICcoJykge1xuICAgICAgICBjb25zdCBvVG9rID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgICAgIGNvbnN0IG9wZW4gPSBsZWFmKFAsICcoJywgb1RvaylcbiAgICAgICAgY29uc3QgYm9keSA9IHBhcnNlU3RhdGVtZW50cyhQLCAnKScpXG4gICAgICAgIGNvbnN0IGNUb2sgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgICAgICAgY29uc3QgY2xvc2UgPVxuICAgICAgICAgIGNUb2sudHlwZSA9PT0gJ09QJyAmJiBjVG9rLnZhbHVlID09PSAnKSdcbiAgICAgICAgICAgID8gbGVhZihQLCAnKScsIGNUb2spXG4gICAgICAgICAgICA6IG1rKFAsICcpJywgb3Blbi5lbmRJbmRleCwgb3Blbi5lbmRJbmRleCwgW10pXG4gICAgICAgIGFyZ3MucHVzaChcbiAgICAgICAgICBtayhQLCAnc3Vic2hlbGwnLCBvcGVuLnN0YXJ0SW5kZXgsIGNsb3NlLmVuZEluZGV4LCBbXG4gICAgICAgICAgICBvcGVuLFxuICAgICAgICAgICAgLi4uYm9keSxcbiAgICAgICAgICAgIGNsb3NlLFxuICAgICAgICAgIF0pLFxuICAgICAgICApXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgICAvLyBMb25lIGA9YCBpbiBhcmcgcG9zaXRpb24gaXMgYSBwYXJzZSBlcnJvciBpbiBiYXNoIFx1MjAxNCB0cmVlLXNpdHRlciB3cmFwc1xuICAgIC8vIGl0IGluIEVSUk9SIGZvciByZWNvdmVyeS4gSGFwcGVucyBpbiBgZWNobyA9KGNtZClgICh6c2ggcHJvY2Vzcy1zdWIpLlxuICAgIGlmIChhcmcudHlwZSA9PT0gJ3dvcmQnICYmIGFyZy50ZXh0ID09PSAnPScpIHtcbiAgICAgIGFyZ3MucHVzaChtayhQLCAnRVJST1InLCBhcmcuc3RhcnRJbmRleCwgYXJnLmVuZEluZGV4LCBbYXJnXSkpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICAvLyBXb3JkIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGAoYCAobm8gd2hpdGVzcGFjZSkgaXMgYSBwYXJzZSBlcnJvciBcdTIwMTRcbiAgICAvLyBiYXNoIGRvZXNuJ3QgYWxsb3cgZ2xvYi10aGVuLXN1YnNoZWxsIGFkamFjZW5jeS4gdHJlZS1zaXR0ZXIgd3JhcHMgdGhlXG4gICAgLy8gd29yZCBpbiBFUlJPUi4gQ2F0Y2hlcyB6c2ggZ2xvYiBxdWFsaWZpZXJzIGxpa2UgYCouKGU6J2NtZCc6KWAuXG4gICAgaWYgKFxuICAgICAgKGFyZy50eXBlID09PSAnd29yZCcgfHwgYXJnLnR5cGUgPT09ICdjb25jYXRlbmF0aW9uJykgJiZcbiAgICAgIHBlZWsoUC5MKSA9PT0gJygnICYmXG4gICAgICBQLkwuYiA9PT0gYXJnLmVuZEluZGV4XG4gICAgKSB7XG4gICAgICBhcmdzLnB1c2gobWsoUCwgJ0VSUk9SJywgYXJnLnN0YXJ0SW5kZXgsIGFyZy5lbmRJbmRleCwgW2FyZ10pKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgYXJncy5wdXNoKGFyZylcbiAgfVxuXG4gIC8vIHByZVJlZGlyZWN0cyAoZS5nLiwgYDI+JjEgY2F0YCwgYDw8PHN0ciBjbWRgKSBnbyBJTlNJREUgdGhlIGNvbW1hbmQgbm9kZVxuICAvLyBiZWZvcmUgY29tbWFuZF9uYW1lIHBlciB0cmVlLXNpdHRlciBncmFtbWFyLCBub3QgaW4gcmVkaXJlY3RlZF9zdGF0ZW1lbnRcbiAgY29uc3QgY21kQ2hpbGRyZW4gPSBbLi4uYXNzaWdubWVudHMsIC4uLnByZVJlZGlyZWN0cywgY21kTmFtZSwgLi4uYXJnc11cbiAgY29uc3QgY21kRW5kID1cbiAgICBjbWRDaGlsZHJlbi5sZW5ndGggPiAwXG4gICAgICA/IGNtZENoaWxkcmVuW2NtZENoaWxkcmVuLmxlbmd0aCAtIDFdIS5lbmRJbmRleFxuICAgICAgOiBjbWROYW1lLmVuZEluZGV4XG4gIGNvbnN0IGNtZFN0YXJ0ID0gY21kQ2hpbGRyZW5bMF0hLnN0YXJ0SW5kZXhcbiAgY29uc3QgY21kID0gbWsoUCwgJ2NvbW1hbmQnLCBjbWRTdGFydCwgY21kRW5kLCBjbWRDaGlsZHJlbilcblxuICBpZiAoaGVyZWRvY1JlZGlyZWN0KSB7XG4gICAgLy8gU2NhbiBoZXJlZG9jIGJvZHkgbm93XG4gICAgc2NhbkhlcmVkb2NCb2RpZXMoUClcbiAgICBjb25zdCBoZCA9IFAuTC5oZXJlZG9jcy5zaGlmdCgpXG4gICAgaWYgKGhkICYmIGhlcmVkb2NSZWRpcmVjdC5jaGlsZHJlbi5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgYm9keU5vZGUgPSBtayhcbiAgICAgICAgUCxcbiAgICAgICAgJ2hlcmVkb2NfYm9keScsXG4gICAgICAgIGhkLmJvZHlTdGFydCxcbiAgICAgICAgaGQuYm9keUVuZCxcbiAgICAgICAgaGQucXVvdGVkID8gW10gOiBwYXJzZUhlcmVkb2NCb2R5Q29udGVudChQLCBoZC5ib2R5U3RhcnQsIGhkLmJvZHlFbmQpLFxuICAgICAgKVxuICAgICAgY29uc3QgZW5kTm9kZSA9IG1rKFAsICdoZXJlZG9jX2VuZCcsIGhkLmVuZFN0YXJ0LCBoZC5lbmRFbmQsIFtdKVxuICAgICAgaGVyZWRvY1JlZGlyZWN0LmNoaWxkcmVuLnB1c2goYm9keU5vZGUsIGVuZE5vZGUpXG4gICAgICBoZXJlZG9jUmVkaXJlY3QuZW5kSW5kZXggPSBoZC5lbmRFbmRcbiAgICAgIGhlcmVkb2NSZWRpcmVjdC50ZXh0ID0gc2xpY2VCeXRlcyhcbiAgICAgICAgUCxcbiAgICAgICAgaGVyZWRvY1JlZGlyZWN0LnN0YXJ0SW5kZXgsXG4gICAgICAgIGhkLmVuZEVuZCxcbiAgICAgIClcbiAgICB9XG4gICAgY29uc3QgYWxsUiA9IFsuLi5wcmVSZWRpcmVjdHMsIGhlcmVkb2NSZWRpcmVjdCwgLi4ucmVkaXJlY3RzXVxuICAgIGNvbnN0IHJTdGFydCA9XG4gICAgICBwcmVSZWRpcmVjdHMubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWluKGNtZC5zdGFydEluZGV4LCBwcmVSZWRpcmVjdHNbMF0hLnN0YXJ0SW5kZXgpXG4gICAgICAgIDogY21kLnN0YXJ0SW5kZXhcbiAgICByZXR1cm4gbWsoUCwgJ3JlZGlyZWN0ZWRfc3RhdGVtZW50JywgclN0YXJ0LCBoZXJlZG9jUmVkaXJlY3QuZW5kSW5kZXgsIFtcbiAgICAgIGNtZCxcbiAgICAgIC4uLmFsbFIsXG4gICAgXSlcbiAgfVxuXG4gIGlmIChyZWRpcmVjdHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3QgPSByZWRpcmVjdHNbcmVkaXJlY3RzLmxlbmd0aCAtIDFdIVxuICAgIHJldHVybiBtayhQLCAncmVkaXJlY3RlZF9zdGF0ZW1lbnQnLCBjbWQuc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgW1xuICAgICAgY21kLFxuICAgICAgLi4ucmVkaXJlY3RzLFxuICAgIF0pXG4gIH1cblxuICByZXR1cm4gY21kXG59XG5cbmZ1bmN0aW9uIG1heWJlUmVkaXJlY3QoXG4gIFA6IFBhcnNlU3RhdGUsXG4gIG5vZGU6IFRzTm9kZSxcbiAgYWxsb3dIZXJlc3RyaW5nID0gZmFsc2UsXG4pOiBUc05vZGUge1xuICBjb25zdCByZWRpcmVjdHM6IFRzTm9kZVtdID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgciA9IHRyeVBhcnNlUmVkaXJlY3QoUClcbiAgICBpZiAoIXIpIGJyZWFrXG4gICAgaWYgKHIudHlwZSA9PT0gJ2hlcmVzdHJpbmdfcmVkaXJlY3QnICYmICFhbGxvd0hlcmVzdHJpbmcpIHtcbiAgICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgcmVkaXJlY3RzLnB1c2gocilcbiAgfVxuICBpZiAocmVkaXJlY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG5vZGVcbiAgY29uc3QgbGFzdCA9IHJlZGlyZWN0c1tyZWRpcmVjdHMubGVuZ3RoIC0gMV0hXG4gIHJldHVybiBtayhQLCAncmVkaXJlY3RlZF9zdGF0ZW1lbnQnLCBub2RlLnN0YXJ0SW5kZXgsIGxhc3QuZW5kSW5kZXgsIFtcbiAgICBub2RlLFxuICAgIC4uLnJlZGlyZWN0cyxcbiAgXSlcbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VBc3NpZ25tZW50KFA6IFBhcnNlU3RhdGUpOiBUc05vZGUgfCBudWxsIHtcbiAgY29uc3Qgc2F2ZSA9IHNhdmVMZXgoUC5MKVxuICBza2lwQmxhbmtzKFAuTClcbiAgY29uc3Qgc3RhcnRCID0gUC5MLmJcbiAgLy8gTXVzdCBzdGFydCB3aXRoIGlkZW50aWZpZXJcbiAgaWYgKCFpc0lkZW50U3RhcnQocGVlayhQLkwpKSkge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgd2hpbGUgKGlzSWRlbnRDaGFyKHBlZWsoUC5MKSkpIGFkdmFuY2UoUC5MKVxuICBjb25zdCBuYW1lRW5kID0gUC5MLmJcbiAgLy8gT3B0aW9uYWwgc3Vic2NyaXB0XG4gIGxldCBzdWJFbmQgPSBuYW1lRW5kXG4gIGlmIChwZWVrKFAuTCkgPT09ICdbJykge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIGxldCBkZXB0aCA9IDFcbiAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIGRlcHRoID4gMCkge1xuICAgICAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICAgICAgaWYgKGMgPT09ICdbJykgZGVwdGgrK1xuICAgICAgZWxzZSBpZiAoYyA9PT0gJ10nKSBkZXB0aC0tXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICB9XG4gICAgc3ViRW5kID0gUC5MLmJcbiAgfVxuICBjb25zdCBjID0gcGVlayhQLkwpXG4gIGNvbnN0IGMxID0gcGVlayhQLkwsIDEpXG4gIGxldCBvcDogc3RyaW5nXG4gIGlmIChjID09PSAnPScgJiYgYzEgIT09ICc9Jykge1xuICAgIG9wID0gJz0nXG4gIH0gZWxzZSBpZiAoYyA9PT0gJysnICYmIGMxID09PSAnPScpIHtcbiAgICBvcCA9ICcrPSdcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IG5hbWVOb2RlID0gbWsoUCwgJ3ZhcmlhYmxlX25hbWUnLCBzdGFydEIsIG5hbWVFbmQsIFtdKVxuICAvLyBTdWJzY3JpcHQgaGFuZGxpbmc6IHdyYXAgaW4gc3Vic2NyaXB0IG5vZGUgaWYgcHJlc2VudFxuICBsZXQgbGhzOiBUc05vZGUgPSBuYW1lTm9kZVxuICBpZiAoc3ViRW5kID4gbmFtZUVuZCkge1xuICAgIGNvbnN0IGJyT3BlbiA9IG1rKFAsICdbJywgbmFtZUVuZCwgbmFtZUVuZCArIDEsIFtdKVxuICAgIGNvbnN0IGlkeCA9IHBhcnNlU3Vic2NyaXB0SW5kZXgoUCwgbmFtZUVuZCArIDEsIHN1YkVuZCAtIDEpXG4gICAgY29uc3QgYnJDbG9zZSA9IG1rKFAsICddJywgc3ViRW5kIC0gMSwgc3ViRW5kLCBbXSlcbiAgICBsaHMgPSBtayhQLCAnc3Vic2NyaXB0Jywgc3RhcnRCLCBzdWJFbmQsIFtuYW1lTm9kZSwgYnJPcGVuLCBpZHgsIGJyQ2xvc2VdKVxuICB9XG4gIGNvbnN0IG9wU3RhcnQgPSBQLkwuYlxuICBhZHZhbmNlKFAuTClcbiAgaWYgKG9wID09PSAnKz0nKSBhZHZhbmNlKFAuTClcbiAgY29uc3Qgb3BFbmQgPSBQLkwuYlxuICBjb25zdCBvcE5vZGUgPSBtayhQLCBvcCwgb3BTdGFydCwgb3BFbmQsIFtdKVxuICBsZXQgdmFsOiBUc05vZGUgfCBudWxsID0gbnVsbFxuICBpZiAocGVlayhQLkwpID09PSAnKCcpIHtcbiAgICAvLyBBcnJheVxuICAgIGNvbnN0IGFvVG9rID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgY29uc3QgYU9wZW4gPSBsZWFmKFAsICcoJywgYW9Ub2spXG4gICAgY29uc3QgZWxlbXM6IFRzTm9kZVtdID0gW2FPcGVuXVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBza2lwQmxhbmtzKFAuTClcbiAgICAgIGlmIChwZWVrKFAuTCkgPT09ICcpJykgYnJlYWtcbiAgICAgIGNvbnN0IGUgPSBwYXJzZVdvcmQoUCwgJ2FyZycpXG4gICAgICBpZiAoIWUpIGJyZWFrXG4gICAgICBlbGVtcy5wdXNoKGUpXG4gICAgfVxuICAgIGNvbnN0IGFjVG9rID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgY29uc3QgYUNsb3NlID1cbiAgICAgIGFjVG9rLnZhbHVlID09PSAnKSdcbiAgICAgICAgPyBsZWFmKFAsICcpJywgYWNUb2spXG4gICAgICAgIDogbWsoUCwgJyknLCBhT3Blbi5lbmRJbmRleCwgYU9wZW4uZW5kSW5kZXgsIFtdKVxuICAgIGVsZW1zLnB1c2goYUNsb3NlKVxuICAgIHZhbCA9IG1rKFAsICdhcnJheScsIGFPcGVuLnN0YXJ0SW5kZXgsIGFDbG9zZS5lbmRJbmRleCwgZWxlbXMpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYzIgPSBwZWVrKFAuTClcbiAgICBpZiAoXG4gICAgICBjMiAmJlxuICAgICAgYzIgIT09ICcgJyAmJlxuICAgICAgYzIgIT09ICdcXHQnICYmXG4gICAgICBjMiAhPT0gJ1xcbicgJiZcbiAgICAgIGMyICE9PSAnOycgJiZcbiAgICAgIGMyICE9PSAnJicgJiZcbiAgICAgIGMyICE9PSAnfCcgJiZcbiAgICAgIGMyICE9PSAnKScgJiZcbiAgICAgIGMyICE9PSAnfSdcbiAgICApIHtcbiAgICAgIHZhbCA9IHBhcnNlV29yZChQLCAnYXJnJylcbiAgICB9XG4gIH1cbiAgY29uc3Qga2lkcyA9IHZhbCA/IFtsaHMsIG9wTm9kZSwgdmFsXSA6IFtsaHMsIG9wTm9kZV1cbiAgY29uc3QgZW5kID0gdmFsID8gdmFsLmVuZEluZGV4IDogb3BFbmRcbiAgcmV0dXJuIG1rKFAsICd2YXJpYWJsZV9hc3NpZ25tZW50Jywgc3RhcnRCLCBlbmQsIGtpZHMpXG59XG5cbi8qKlxuICogUGFyc2Ugc3Vic2NyaXB0IGluZGV4IGNvbnRlbnQuIFBhcnNlZCBhcml0aG1ldGljYWxseSBwZXIgdHJlZS1zaXR0ZXIgZ3JhbW1hcjpcbiAqIGAke2FbMSsyXX1gIFx1MjE5MiBiaW5hcnlfZXhwcmVzc2lvbjsgYCR7YVsrK2ldfWAgXHUyMTkyIHVuYXJ5X2V4cHJlc3Npb24od29yZCk7XG4gKiBgJHthWygoJG4rMSkpXX1gIFx1MjE5MiBjb21wb3VuZF9zdGF0ZW1lbnQoYmluYXJ5X2V4cHJlc3Npb24pLiBGYWxscyBiYWNrIHRvXG4gKiBzaW1wbGUgcGF0dGVybnMgKEAsICopIGFzIHdvcmQuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU3Vic2NyaXB0SW5kZXhJbmxpbmUoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZSB8IG51bGwge1xuICBza2lwQmxhbmtzKFAuTClcbiAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICAvLyBAIG9yICogYWxvbmUgXHUyMTkyIHdvcmQgKGFzc29jaWF0aXZlIGFycmF5IGFsbC1rZXlzKVxuICBpZiAoKGMgPT09ICdAJyB8fCBjID09PSAnKicpICYmIHBlZWsoUC5MLCAxKSA9PT0gJ10nKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgcmV0dXJuIG1rKFAsICd3b3JkJywgcywgUC5MLmIsIFtdKVxuICB9XG4gIC8vICgoZXhwcikpIFx1MjE5MiBjb21wb3VuZF9zdGF0ZW1lbnQgd3JhcHBpbmcgdGhlIGlubmVyIGFyaXRobWV0aWNcbiAgaWYgKGMgPT09ICcoJyAmJiBwZWVrKFAuTCwgMSkgPT09ICcoJykge1xuICAgIGNvbnN0IG9TdGFydCA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgb3BlbiA9IG1rKFAsICcoKCcsIG9TdGFydCwgUC5MLmIsIFtdKVxuICAgIGNvbnN0IGlubmVyID0gcGFyc2VBcml0aEV4cHIoUCwgJykpJywgJ3ZhcicpXG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgbGV0IGNsb3NlOiBUc05vZGVcbiAgICBpZiAocGVlayhQLkwpID09PSAnKScgJiYgcGVlayhQLkwsIDEpID09PSAnKScpIHtcbiAgICAgIGNvbnN0IGNzID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjbG9zZSA9IG1rKFAsICcpKScsIGNzLCBQLkwuYiwgW10pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlID0gbWsoUCwgJykpJywgUC5MLmIsIFAuTC5iLCBbXSlcbiAgICB9XG4gICAgY29uc3Qga2lkcyA9IGlubmVyID8gW29wZW4sIGlubmVyLCBjbG9zZV0gOiBbb3BlbiwgY2xvc2VdXG4gICAgcmV0dXJuIG1rKFAsICdjb21wb3VuZF9zdGF0ZW1lbnQnLCBvcGVuLnN0YXJ0SW5kZXgsIGNsb3NlLmVuZEluZGV4LCBraWRzKVxuICB9XG4gIC8vIEFyaXRobWV0aWMgXHUyMDE0IGJ1dCBiYXJlIGlkZW50aWZpZXJzIGluIHN1YnNjcmlwdCB1c2UgJ3dvcmQnIG1vZGUgcGVyXG4gIC8vIHRyZWUtc2l0dGVyICgke3dvcmRzWysrY291bnRlcl19IFx1MjE5MiB1bmFyeV9leHByZXNzaW9uKHdvcmQpKS5cbiAgcmV0dXJuIHBhcnNlQXJpdGhFeHByKFAsICddJywgJ3dvcmQnKVxufVxuXG4vKiogTGVnYWN5IGJ5dGUtcmFuZ2Ugc3Vic2NyaXB0IGluZGV4IHBhcnNlciBcdTIwMTQga2VwdCBmb3IgY2FsbGVycyB0aGF0IHByZS1zY2FuLiAqL1xuZnVuY3Rpb24gcGFyc2VTdWJzY3JpcHRJbmRleChcbiAgUDogUGFyc2VTdGF0ZSxcbiAgc3RhcnRCOiBudW1iZXIsXG4gIGVuZEI6IG51bWJlcixcbik6IFRzTm9kZSB7XG4gIGNvbnN0IHRleHQgPSBzbGljZUJ5dGVzKFAsIHN0YXJ0QiwgZW5kQilcbiAgaWYgKC9eXFxkKyQvLnRlc3QodGV4dCkpIHJldHVybiBtayhQLCAnbnVtYmVyJywgc3RhcnRCLCBlbmRCLCBbXSlcbiAgY29uc3QgbSA9IC9eXFwkKFthLXpBLVpfXVxcdyopJC8uZXhlYyh0ZXh0KVxuICBpZiAobSkge1xuICAgIGNvbnN0IGRvbGxhciA9IG1rKFAsICckJywgc3RhcnRCLCBzdGFydEIgKyAxLCBbXSlcbiAgICBjb25zdCB2biA9IG1rKFAsICd2YXJpYWJsZV9uYW1lJywgc3RhcnRCICsgMSwgZW5kQiwgW10pXG4gICAgcmV0dXJuIG1rKFAsICdzaW1wbGVfZXhwYW5zaW9uJywgc3RhcnRCLCBlbmRCLCBbZG9sbGFyLCB2bl0pXG4gIH1cbiAgaWYgKHRleHQubGVuZ3RoID09PSAyICYmIHRleHRbMF0gPT09ICckJyAmJiBTUEVDSUFMX1ZBUlMuaGFzKHRleHRbMV0hKSkge1xuICAgIGNvbnN0IGRvbGxhciA9IG1rKFAsICckJywgc3RhcnRCLCBzdGFydEIgKyAxLCBbXSlcbiAgICBjb25zdCB2biA9IG1rKFAsICdzcGVjaWFsX3ZhcmlhYmxlX25hbWUnLCBzdGFydEIgKyAxLCBlbmRCLCBbXSlcbiAgICByZXR1cm4gbWsoUCwgJ3NpbXBsZV9leHBhbnNpb24nLCBzdGFydEIsIGVuZEIsIFtkb2xsYXIsIHZuXSlcbiAgfVxuICByZXR1cm4gbWsoUCwgJ3dvcmQnLCBzdGFydEIsIGVuZEIsIFtdKVxufVxuXG4vKipcbiAqIENhbiB0aGUgY3VycmVudCBwb3NpdGlvbiBzdGFydCBhIHJlZGlyZWN0IGRlc3RpbmF0aW9uIGxpdGVyYWw/XG4gKiBSZXR1cm5zIGZhbHNlIGF0IHJlZGlyZWN0IG9wcywgdGVybWluYXRvcnMsIG9yIGZpbGUtZGVzY3JpcHRvci1wcmVmaXhlZCBvcHNcbiAqIHNvIGZpbGVfcmVkaXJlY3QncyByZXBlYXQxKCQuX2xpdGVyYWwpIHN0b3BzIGF0IHRoZSByaWdodCBib3VuZGFyeS5cbiAqL1xuZnVuY3Rpb24gaXNSZWRpcmVjdExpdGVyYWxTdGFydChQOiBQYXJzZVN0YXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgaWYgKGMgPT09ICcnIHx8IGMgPT09ICdcXG4nKSByZXR1cm4gZmFsc2VcbiAgLy8gU2hlbGwgdGVybWluYXRvcnMgYW5kIG9wZXJhdG9yc1xuICBpZiAoYyA9PT0gJ3wnIHx8IGMgPT09ICcmJyB8fCBjID09PSAnOycgfHwgYyA9PT0gJygnIHx8IGMgPT09ICcpJylcbiAgICByZXR1cm4gZmFsc2VcbiAgLy8gUmVkaXJlY3Qgb3BlcmF0b3JzICg8ID4gd2l0aCBhbnkgc3VmZml4OyA8KCA+KCBoYW5kbGVkIGJ5IGNhbGxlcilcbiAgaWYgKGMgPT09ICc8JyB8fCBjID09PSAnPicpIHtcbiAgICAvLyA8KCA+KCBhcmUgcHJvY2VzcyBzdWJzdGl0dXRpb25zIFx1MjAxNCB0aG9zZSBBUkUgbGl0ZXJhbHNcbiAgICByZXR1cm4gcGVlayhQLkwsIDEpID09PSAnKCdcbiAgfVxuICAvLyBOPCBOPiBmaWxlIGRlc2NyaXB0b3IgcHJlZml4IFx1MjAxNCBzdGFydHMgYSBuZXcgcmVkaXJlY3QsIG5vdCBhIGxpdGVyYWxcbiAgaWYgKGlzRGlnaXQoYykpIHtcbiAgICBsZXQgaiA9IFAuTC5pXG4gICAgd2hpbGUgKGogPCBQLkwubGVuICYmIGlzRGlnaXQoUC5MLnNyY1tqXSEpKSBqKytcbiAgICBjb25zdCBhZnRlciA9IGogPCBQLkwubGVuID8gUC5MLnNyY1tqXSEgOiAnJ1xuICAgIGlmIChhZnRlciA9PT0gJz4nIHx8IGFmdGVyID09PSAnPCcpIHJldHVybiBmYWxzZVxuICB9XG4gIC8vIGB9YCBvbmx5IHRlcm1pbmF0ZXMgaWYgd2UncmUgaW4gYSBjb250ZXh0IHdoZXJlIGl0J3MgYSBjbG9zZXIgXHUyMDE0IGJ1dFxuICAvLyBmaWxlX3JlZGlyZWN0IHNlZXMgYH1gIGFzIHdvcmQgY2hhciAoZS5nLiwgYD4kSE9NRX1gIGlzIHZhbGlkIHBhdGggY2hhcikuXG4gIC8vIEFjdHVhbGx5IGB9YCBhdCB0b3AgbGV2ZWwgdGVybWluYXRlcyBjb21wb3VuZF9zdGF0ZW1lbnQgXHUyMDE0IG5lZWQgdG8gc3RvcC5cbiAgaWYgKGMgPT09ICd9JykgcmV0dXJuIGZhbHNlXG4gIC8vIFRlc3QgY29tbWFuZCBjbG9zZXIgXHUyMDE0IHdoZW4gcGFyc2VTaW1wbGVDb21tYW5kIGlzIGNhbGxlZCBmcm9tIGBbYCBjb250ZXh0LFxuICAvLyBgXWAgbXVzdCB0ZXJtaW5hdGUgc28gcGFyc2VDb21tYW5kIGNhbiByZXR1cm4gYW5kIGBbYCBoYW5kbGVyIGNvbnN1bWUgaXQuXG4gIGlmIChQLnN0b3BUb2tlbiA9PT0gJ10nICYmIGMgPT09ICddJykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogUGFyc2UgYSByZWRpcmVjdCBvcGVyYXRvciArIGRlc3RpbmF0aW9uKHMpLlxuICogQHBhcmFtIGdyZWVkeSBXaGVuIHRydWUsIGZpbGVfcmVkaXJlY3QgY29uc3VtZXMgcmVwZWF0MSgkLl9saXRlcmFsKSBwZXJcbiAqICAgZ3JhbW1hcidzIHByZWMubGVmdCBcdTIwMTQgYGNtZCA+ZiBhIGIgY2AgYXR0YWNoZXMgYGEgYiBjYCB0byB0aGUgcmVkaXJlY3QuXG4gKiAgIFdoZW4gZmFsc2UgKHByZVJlZGlyZWN0IGNvbnRleHQpLCB0YWtlcyBvbmx5IDEgZGVzdGluYXRpb24gYmVjYXVzZVxuICogICBjb21tYW5kJ3MgZHluYW1pYyBwcmVjZWRlbmNlIGJlYXRzIHJlZGlyZWN0ZWRfc3RhdGVtZW50J3MgcHJlYygtMSkuXG4gKi9cbmZ1bmN0aW9uIHRyeVBhcnNlUmVkaXJlY3QoUDogUGFyc2VTdGF0ZSwgZ3JlZWR5ID0gZmFsc2UpOiBUc05vZGUgfCBudWxsIHtcbiAgY29uc3Qgc2F2ZSA9IHNhdmVMZXgoUC5MKVxuICBza2lwQmxhbmtzKFAuTClcbiAgLy8gRmlsZSBkZXNjcmlwdG9yIHByZWZpeD9cbiAgbGV0IGZkOiBUc05vZGUgfCBudWxsID0gbnVsbFxuICBpZiAoaXNEaWdpdChwZWVrKFAuTCkpKSB7XG4gICAgY29uc3Qgc3RhcnRCID0gUC5MLmJcbiAgICBsZXQgaiA9IFAuTC5pXG4gICAgd2hpbGUgKGogPCBQLkwubGVuICYmIGlzRGlnaXQoUC5MLnNyY1tqXSEpKSBqKytcbiAgICBjb25zdCBhZnRlciA9IGogPCBQLkwubGVuID8gUC5MLnNyY1tqXSEgOiAnJ1xuICAgIGlmIChhZnRlciA9PT0gJz4nIHx8IGFmdGVyID09PSAnPCcpIHtcbiAgICAgIHdoaWxlIChQLkwuaSA8IGopIGFkdmFuY2UoUC5MKVxuICAgICAgZmQgPSBtayhQLCAnZmlsZV9kZXNjcmlwdG9yJywgc3RhcnRCLCBQLkwuYiwgW10pXG4gICAgfVxuICB9XG4gIGNvbnN0IHQgPSBuZXh0VG9rZW4oUC5MLCAnYXJnJylcbiAgaWYgKHQudHlwZSAhPT0gJ09QJykge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgdiA9IHQudmFsdWVcbiAgaWYgKHYgPT09ICc8PDwnKSB7XG4gICAgY29uc3Qgb3AgPSBsZWFmKFAsICc8PDwnLCB0KVxuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIGNvbnN0IHRhcmdldCA9IHBhcnNlV29yZChQLCAnYXJnJylcbiAgICBjb25zdCBlbmQgPSB0YXJnZXQgPyB0YXJnZXQuZW5kSW5kZXggOiBvcC5lbmRJbmRleFxuICAgIGNvbnN0IGtpZHMgPSB0YXJnZXQgPyBbb3AsIHRhcmdldF0gOiBbb3BdXG4gICAgcmV0dXJuIG1rKFxuICAgICAgUCxcbiAgICAgICdoZXJlc3RyaW5nX3JlZGlyZWN0JyxcbiAgICAgIGZkID8gZmQuc3RhcnRJbmRleCA6IG9wLnN0YXJ0SW5kZXgsXG4gICAgICBlbmQsXG4gICAgICBmZCA/IFtmZCwgLi4ua2lkc10gOiBraWRzLFxuICAgIClcbiAgfVxuICBpZiAodiA9PT0gJzw8JyB8fCB2ID09PSAnPDwtJykge1xuICAgIGNvbnN0IG9wID0gbGVhZihQLCB2LCB0KVxuICAgIC8vIEhlcmVkb2Mgc3RhcnQgXHUyMDE0IGRlbGltaXRlciB3b3JkIChtYXkgYmUgcXVvdGVkKVxuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIGNvbnN0IGRTdGFydCA9IFAuTC5iXG4gICAgbGV0IHF1b3RlZCA9IGZhbHNlXG4gICAgbGV0IGRlbGltID0gJydcbiAgICBjb25zdCBkYyA9IHBlZWsoUC5MKVxuICAgIGlmIChkYyA9PT0gXCInXCIgfHwgZGMgPT09ICdcIicpIHtcbiAgICAgIHF1b3RlZCA9IHRydWVcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbiAmJiBwZWVrKFAuTCkgIT09IGRjKSB7XG4gICAgICAgIGRlbGltICs9IHBlZWsoUC5MKVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgIH1cbiAgICAgIGlmIChQLkwuaSA8IFAuTC5sZW4pIGFkdmFuY2UoUC5MKVxuICAgIH0gZWxzZSBpZiAoZGMgPT09ICdcXFxcJykge1xuICAgICAgLy8gQmFja3NsYXNoLWVzY2FwZWQgZGVsaW1pdGVyOiBcXFggXHUyMDE0IGV4YWN0bHkgb25lIGVzY2FwZWQgY2hhciwgYm9keSBpc1xuICAgICAgLy8gcXVvdGVkIChsaXRlcmFsKS4gQ292ZXJzIDw8XFxFT0YgPDxcXCcgPDxcXFxcIGV0Yy5cbiAgICAgIHF1b3RlZCA9IHRydWVcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgaWYgKFAuTC5pIDwgUC5MLmxlbiAmJiBwZWVrKFAuTCkgIT09ICdcXG4nKSB7XG4gICAgICAgIGRlbGltICs9IHBlZWsoUC5MKVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgIH1cbiAgICAgIC8vIE1heSBiZSBmb2xsb3dlZCBieSBtb3JlIGlkZW50IGNoYXJzIChlLmcuIDw8XFxFT0YgXHUyMTkyIGRlbGltIFwiRU9GXCIpXG4gICAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIGlzSWRlbnRDaGFyKHBlZWsoUC5MKSkpIHtcbiAgICAgICAgZGVsaW0gKz0gcGVlayhQLkwpXG4gICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbnF1b3RlZCBkZWxpbWl0ZXI6IGJhc2ggYWNjZXB0cyBtb3N0IG5vbi1tZXRhY2hhcmFjdGVycyAobm90IGp1c3RcbiAgICAgIC8vIGlkZW50aWZpZXJzKS4gQWxsb3cgISwgLSwgLiwgZXRjLiBcdTIwMTQgc3RvcCBhdCBzaGVsbCBtZXRhY2hhcnMuXG4gICAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIGlzSGVyZWRvY0RlbGltQ2hhcihwZWVrKFAuTCkpKSB7XG4gICAgICAgIGRlbGltICs9IHBlZWsoUC5MKVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZEVuZCA9IFAuTC5iXG4gICAgY29uc3Qgc3RhcnROb2RlID0gbWsoUCwgJ2hlcmVkb2Nfc3RhcnQnLCBkU3RhcnQsIGRFbmQsIFtdKVxuICAgIC8vIFJlZ2lzdGVyIHBlbmRpbmcgaGVyZWRvYyBcdTIwMTQgYm9keSBzY2FubmVkIGF0IG5leHQgbmV3bGluZVxuICAgIFAuTC5oZXJlZG9jcy5wdXNoKHtcbiAgICAgIGRlbGltLFxuICAgICAgc3RyaXBUYWJzOiB2ID09PSAnPDwtJyxcbiAgICAgIHF1b3RlZCxcbiAgICAgIGJvZHlTdGFydDogMCxcbiAgICAgIGJvZHlFbmQ6IDAsXG4gICAgICBlbmRTdGFydDogMCxcbiAgICAgIGVuZEVuZDogMCxcbiAgICB9KVxuICAgIGNvbnN0IGtpZHMgPSBmZCA/IFtmZCwgb3AsIHN0YXJ0Tm9kZV0gOiBbb3AsIHN0YXJ0Tm9kZV1cbiAgICBjb25zdCBzdGFydElkeCA9IGZkID8gZmQuc3RhcnRJbmRleCA6IG9wLnN0YXJ0SW5kZXhcbiAgICAvLyBTRUNVUklUWTogdHJlZS1zaXR0ZXIgbmVzdHMgYW55IHBpcGVsaW5lL2xpc3QvZmlsZV9yZWRpcmVjdCBhcHBlYXJpbmdcbiAgICAvLyBiZXR3ZWVuIGhlcmVkb2Nfc3RhcnQgYW5kIHRoZSBuZXdsaW5lIGFzIGEgQ0hJTEQgb2YgaGVyZWRvY19yZWRpcmVjdC5cbiAgICAvLyBgbHMgPDwnRU9GJyB8IHJtIC1yZiAvdG1wL2V2aWxgIG11c3Qgbm90IHNpbGVudGx5IGRyb3AgdGhlIHJtLiBQYXJzZVxuICAgIC8vIHRyYWlsaW5nIHdvcmRzIGFuZCBmaWxlX3JlZGlyZWN0cyBwcm9wZXJseSAoYXN0LnRzIHdhbGtIZXJlZG9jUmVkaXJlY3RcbiAgICAvLyBmYWlscyBjbG9zZWQgb24gYW55IHVucmVjb2duaXplZCBjaGlsZCB2aWEgdG9vQ29tcGxleCkuIFBpcGVsaW5lIC8gbGlzdFxuICAgIC8vIG9wZXJhdG9ycyAofCAmJiB8fCA7KSBhcmUgc3RydWN0dXJhbGx5IGNvbXBsZXggXHUyMDE0IGVtaXQgRVJST1Igc28gdGhlIHNhbWVcbiAgICAvLyBmYWlsLWNsb3NlZCBwYXRoIHJlamVjdHMgdGhlbS5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICBjb25zdCB0YyA9IHBlZWsoUC5MKVxuICAgICAgaWYgKHRjID09PSAnXFxuJyB8fCB0YyA9PT0gJycgfHwgUC5MLmkgPj0gUC5MLmxlbikgYnJlYWtcbiAgICAgIC8vIEZpbGUgcmVkaXJlY3QgYWZ0ZXIgZGVsaW1pdGVyOiBjYXQgPDxFT0YgPiBvdXQudHh0XG4gICAgICBpZiAodGMgPT09ICc+JyB8fCB0YyA9PT0gJzwnIHx8IGlzRGlnaXQodGMpKSB7XG4gICAgICAgIGNvbnN0IHJTYXZlID0gc2F2ZUxleChQLkwpXG4gICAgICAgIGNvbnN0IHIgPSB0cnlQYXJzZVJlZGlyZWN0KFApXG4gICAgICAgIGlmIChyICYmIHIudHlwZSA9PT0gJ2ZpbGVfcmVkaXJlY3QnKSB7XG4gICAgICAgICAga2lkcy5wdXNoKHIpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICByZXN0b3JlTGV4KFAuTCwgclNhdmUpXG4gICAgICB9XG4gICAgICAvLyBQaXBlbGluZSBhZnRlciBoZXJlZG9jX3N0YXJ0OiBgb25lIDw8RU9GIHwgZ3JlcCB0d29gIFx1MjAxNCB0cmVlLXNpdHRlclxuICAgICAgLy8gbmVzdHMgdGhlIHBpcGVsaW5lIGFzIGEgY2hpbGQgb2YgaGVyZWRvY19yZWRpcmVjdC4gYXN0LnRzXG4gICAgICAvLyB3YWxrSGVyZWRvY1JlZGlyZWN0IGZhaWxzIGNsb3NlZCBvbiBwaXBlbGluZS9jb21tYW5kIHZpYSB0b29Db21wbGV4LlxuICAgICAgaWYgKHRjID09PSAnfCcgJiYgcGVlayhQLkwsIDEpICE9PSAnfCcpIHtcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgICBjb25zdCBwaXBlQ21kczogVHNOb2RlW10gPSBbXVxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGNtZCA9IHBhcnNlQ29tbWFuZChQKVxuICAgICAgICAgIGlmICghY21kKSBicmVha1xuICAgICAgICAgIHBpcGVDbWRzLnB1c2goY21kKVxuICAgICAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgICAgIGlmIChwZWVrKFAuTCkgPT09ICd8JyAmJiBwZWVrKFAuTCwgMSkgIT09ICd8Jykge1xuICAgICAgICAgICAgY29uc3QgcHMgPSBQLkwuYlxuICAgICAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgICAgICBwaXBlQ21kcy5wdXNoKG1rKFAsICd8JywgcHMsIFAuTC5iLCBbXSkpXG4gICAgICAgICAgICBza2lwQmxhbmtzKFAuTClcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcGVDbWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwbCA9IHBpcGVDbWRzW3BpcGVDbWRzLmxlbmd0aCAtIDFdIVxuICAgICAgICAgIC8vIHRyZWUtc2l0dGVyIGFsd2F5cyB3cmFwcyBpbiBwaXBlbGluZSBhZnRlciBgfGAsIGV2ZW4gc2luZ2xlIGNvbW1hbmRcbiAgICAgICAgICBraWRzLnB1c2goXG4gICAgICAgICAgICBtayhQLCAncGlwZWxpbmUnLCBwaXBlQ21kc1swXSEuc3RhcnRJbmRleCwgcGwuZW5kSW5kZXgsIHBpcGVDbWRzKSxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIC8vICYmIC8gfHwgYWZ0ZXIgaGVyZWRvY19zdGFydDogYGNhdCA8PC1FT0YgfHwgZGllIFwiLi4uXCJgIFx1MjAxNCB0cmVlLXNpdHRlclxuICAgICAgLy8gbmVzdHMganVzdCB0aGUgUkhTIGNvbW1hbmQgKG5vdCBhIGxpc3QpIGFzIGEgY2hpbGQgb2YgaGVyZWRvY19yZWRpcmVjdC5cbiAgICAgIGlmIChcbiAgICAgICAgKHRjID09PSAnJicgJiYgcGVlayhQLkwsIDEpID09PSAnJicpIHx8XG4gICAgICAgICh0YyA9PT0gJ3wnICYmIHBlZWsoUC5MLCAxKSA9PT0gJ3wnKVxuICAgICAgKSB7XG4gICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICAgIGNvbnN0IHJocyA9IHBhcnNlQ29tbWFuZChQKVxuICAgICAgICBpZiAocmhzKSBraWRzLnB1c2gocmhzKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgLy8gVGVybWluYXRvciAvIHVuaGFuZGxlZCBtZXRhY2hhciBcdTIwMTQgY29uc3VtZSByZXN0IG9mIGxpbmUgYXMgRVJST1Igc29cbiAgICAgIC8vIGFzdC50cyByZWplY3RzIGl0LiBDb3ZlcnMgOyAmICggKVxuICAgICAgaWYgKHRjID09PSAnJicgfHwgdGMgPT09ICc7JyB8fCB0YyA9PT0gJygnIHx8IHRjID09PSAnKScpIHtcbiAgICAgICAgY29uc3QgZVN0YXJ0ID0gUC5MLmJcbiAgICAgICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbiAmJiBwZWVrKFAuTCkgIT09ICdcXG4nKSBhZHZhbmNlKFAuTClcbiAgICAgICAga2lkcy5wdXNoKG1rKFAsICdFUlJPUicsIGVTdGFydCwgUC5MLmIsIFtdKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIC8vIFRyYWlsaW5nIHdvcmQgYXJndW1lbnQ6IG5ld2lucyA8PC1FT0YgLSBvcmcuZnJlZWRlc2t0b3Auc2VydmljZVxuICAgICAgY29uc3QgdyA9IHBhcnNlV29yZChQLCAnYXJnJylcbiAgICAgIGlmICh3KSB7XG4gICAgICAgIGtpZHMucHVzaCh3KVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgLy8gVW5yZWNvZ25pemVkIFx1MjAxNCBjb25zdW1lIHJlc3Qgb2YgbGluZSBhcyBFUlJPUlxuICAgICAgY29uc3QgZVN0YXJ0ID0gUC5MLmJcbiAgICAgIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4gJiYgcGVlayhQLkwpICE9PSAnXFxuJykgYWR2YW5jZShQLkwpXG4gICAgICBpZiAoUC5MLmIgPiBlU3RhcnQpIGtpZHMucHVzaChtayhQLCAnRVJST1InLCBlU3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gbWsoUCwgJ2hlcmVkb2NfcmVkaXJlY3QnLCBzdGFydElkeCwgUC5MLmIsIGtpZHMpXG4gIH1cbiAgLy8gQ2xvc2UtZmQgdmFyaWFudHM6IGA8Ji1gIGA+Ji1gIGhhdmUgT1BUSU9OQUwgZGVzdGluYXRpb24gKDAgb3IgMSlcbiAgaWYgKHYgPT09ICc8Ji0nIHx8IHYgPT09ICc+Ji0nKSB7XG4gICAgY29uc3Qgb3AgPSBsZWFmKFAsIHYsIHQpXG4gICAgY29uc3Qga2lkczogVHNOb2RlW10gPSBbXVxuICAgIGlmIChmZCkga2lkcy5wdXNoKGZkKVxuICAgIGtpZHMucHVzaChvcClcbiAgICAvLyBPcHRpb25hbCBzaW5nbGUgZGVzdGluYXRpb24gXHUyMDE0IG9ubHkgY29uc3VtZSBpZiBuZXh0IGlzIGEgbGl0ZXJhbFxuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIGNvbnN0IGRTYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgZGVzdCA9IGlzUmVkaXJlY3RMaXRlcmFsU3RhcnQoUCkgPyBwYXJzZVdvcmQoUCwgJ2FyZycpIDogbnVsbFxuICAgIGlmIChkZXN0KSB7XG4gICAgICBraWRzLnB1c2goZGVzdClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdG9yZUxleChQLkwsIGRTYXZlKVxuICAgIH1cbiAgICBjb25zdCBzdGFydElkeCA9IGZkID8gZmQuc3RhcnRJbmRleCA6IG9wLnN0YXJ0SW5kZXhcbiAgICBjb25zdCBlbmQgPSBkZXN0ID8gZGVzdC5lbmRJbmRleCA6IG9wLmVuZEluZGV4XG4gICAgcmV0dXJuIG1rKFAsICdmaWxlX3JlZGlyZWN0Jywgc3RhcnRJZHgsIGVuZCwga2lkcylcbiAgfVxuICBpZiAoXG4gICAgdiA9PT0gJz4nIHx8XG4gICAgdiA9PT0gJz4+JyB8fFxuICAgIHYgPT09ICc+JicgfHxcbiAgICB2ID09PSAnPnwnIHx8XG4gICAgdiA9PT0gJyY+JyB8fFxuICAgIHYgPT09ICcmPj4nIHx8XG4gICAgdiA9PT0gJzwnIHx8XG4gICAgdiA9PT0gJzwmJ1xuICApIHtcbiAgICBjb25zdCBvcCA9IGxlYWYoUCwgdiwgdClcbiAgICBjb25zdCBraWRzOiBUc05vZGVbXSA9IFtdXG4gICAgaWYgKGZkKSBraWRzLnB1c2goZmQpXG4gICAga2lkcy5wdXNoKG9wKVxuICAgIC8vIEdyYW1tYXI6IGRlc3RpbmF0aW9uIGlzIHJlcGVhdDEoJC5fbGl0ZXJhbCkgXHUyMDE0IGdyZWVkaWx5IGNvbnN1bWUgbGl0ZXJhbHNcbiAgICAvLyB1bnRpbCBhIG5vbi1saXRlcmFsIChyZWRpcmVjdCBvcCwgdGVybWluYXRvciwgZXRjKS4gdHJlZS1zaXR0ZXInc1xuICAgIC8vIHByZWMubGVmdCBtYWtlcyBgY21kID5mIGEgYiBjYCBhdHRhY2ggYGEgYiBjYCB0byB0aGUgZmlsZV9yZWRpcmVjdCxcbiAgICAvLyBOT1QgdG8gdGhlIGNvbW1hbmQuIFN0cnVjdHVyYWwgcXVpcmsgYnV0IHJlcXVpcmVkIGZvciBjb3JwdXMgcGFyaXR5LlxuICAgIC8vIEluIHByZVJlZGlyZWN0IGNvbnRleHQgKGdyZWVkeT1mYWxzZSksIHRha2Ugb25seSAxIGxpdGVyYWwgYmVjYXVzZVxuICAgIC8vIGNvbW1hbmQncyBkeW5hbWljIHByZWNlZGVuY2UgYmVhdHMgcmVkaXJlY3RlZF9zdGF0ZW1lbnQncyBwcmVjKC0xKS5cbiAgICBsZXQgZW5kID0gb3AuZW5kSW5kZXhcbiAgICBsZXQgdGFrZW4gPSAwXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgaWYgKCFpc1JlZGlyZWN0TGl0ZXJhbFN0YXJ0KFApKSBicmVha1xuICAgICAgaWYgKCFncmVlZHkgJiYgdGFrZW4gPj0gMSkgYnJlYWtcbiAgICAgIGNvbnN0IHRjID0gcGVlayhQLkwpXG4gICAgICBjb25zdCB0YzEgPSBwZWVrKFAuTCwgMSlcbiAgICAgIGxldCB0YXJnZXQ6IFRzTm9kZSB8IG51bGwgPSBudWxsXG4gICAgICBpZiAoKHRjID09PSAnPCcgfHwgdGMgPT09ICc+JykgJiYgdGMxID09PSAnKCcpIHtcbiAgICAgICAgdGFyZ2V0ID0gcGFyc2VQcm9jZXNzU3ViKFApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQgPSBwYXJzZVdvcmQoUCwgJ2FyZycpXG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldCkgYnJlYWtcbiAgICAgIGtpZHMucHVzaCh0YXJnZXQpXG4gICAgICBlbmQgPSB0YXJnZXQuZW5kSW5kZXhcbiAgICAgIHRha2VuKytcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRJZHggPSBmZCA/IGZkLnN0YXJ0SW5kZXggOiBvcC5zdGFydEluZGV4XG4gICAgcmV0dXJuIG1rKFAsICdmaWxlX3JlZGlyZWN0Jywgc3RhcnRJZHgsIGVuZCwga2lkcylcbiAgfVxuICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gcGFyc2VQcm9jZXNzU3ViKFA6IFBhcnNlU3RhdGUpOiBUc05vZGUgfCBudWxsIHtcbiAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICBpZiAoKGMgIT09ICc8JyAmJiBjICE9PSAnPicpIHx8IHBlZWsoUC5MLCAxKSAhPT0gJygnKSByZXR1cm4gbnVsbFxuICBjb25zdCBzdGFydCA9IFAuTC5iXG4gIGFkdmFuY2UoUC5MKVxuICBhZHZhbmNlKFAuTClcbiAgY29uc3Qgb3BlbiA9IG1rKFAsIGMgKyAnKCcsIHN0YXJ0LCBQLkwuYiwgW10pXG4gIGNvbnN0IGJvZHkgPSBwYXJzZVN0YXRlbWVudHMoUCwgJyknKVxuICBza2lwQmxhbmtzKFAuTClcbiAgbGV0IGNsb3NlOiBUc05vZGVcbiAgaWYgKHBlZWsoUC5MKSA9PT0gJyknKSB7XG4gICAgY29uc3QgY3MgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNsb3NlID0gbWsoUCwgJyknLCBjcywgUC5MLmIsIFtdKVxuICB9IGVsc2Uge1xuICAgIGNsb3NlID0gbWsoUCwgJyknLCBQLkwuYiwgUC5MLmIsIFtdKVxuICB9XG4gIHJldHVybiBtayhQLCAncHJvY2Vzc19zdWJzdGl0dXRpb24nLCBzdGFydCwgY2xvc2UuZW5kSW5kZXgsIFtcbiAgICBvcGVuLFxuICAgIC4uLmJvZHksXG4gICAgY2xvc2UsXG4gIF0pXG59XG5cbmZ1bmN0aW9uIHNjYW5IZXJlZG9jQm9kaWVzKFA6IFBhcnNlU3RhdGUpOiB2b2lkIHtcbiAgLy8gU2tpcCB0byBuZXdsaW5lIGlmIG5vdCBhbHJlYWR5IHRoZXJlXG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4gJiYgUC5MLnNyY1tQLkwuaV0gIT09ICdcXG4nKSBhZHZhbmNlKFAuTClcbiAgaWYgKFAuTC5pIDwgUC5MLmxlbikgYWR2YW5jZShQLkwpXG4gIGZvciAoY29uc3QgaGQgb2YgUC5MLmhlcmVkb2NzKSB7XG4gICAgaGQuYm9keVN0YXJ0ID0gUC5MLmJcbiAgICBjb25zdCBkZWxpbUxlbiA9IGhkLmRlbGltLmxlbmd0aFxuICAgIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICAgIGNvbnN0IGxpbmVTdGFydCA9IFAuTC5pXG4gICAgICBjb25zdCBsaW5lU3RhcnRCID0gUC5MLmJcbiAgICAgIC8vIFNraXAgbGVhZGluZyB0YWJzIGlmIDw8LVxuICAgICAgbGV0IGNoZWNrSSA9IGxpbmVTdGFydFxuICAgICAgaWYgKGhkLnN0cmlwVGFicykge1xuICAgICAgICB3aGlsZSAoY2hlY2tJIDwgUC5MLmxlbiAmJiBQLkwuc3JjW2NoZWNrSV0gPT09ICdcXHQnKSBjaGVja0krK1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBsaW5lIGlzIHRoZSBkZWxpbWl0ZXJcbiAgICAgIGlmIChcbiAgICAgICAgUC5MLnNyYy5zdGFydHNXaXRoKGhkLmRlbGltLCBjaGVja0kpICYmXG4gICAgICAgIChjaGVja0kgKyBkZWxpbUxlbiA+PSBQLkwubGVuIHx8XG4gICAgICAgICAgUC5MLnNyY1tjaGVja0kgKyBkZWxpbUxlbl0gPT09ICdcXG4nIHx8XG4gICAgICAgICAgUC5MLnNyY1tjaGVja0kgKyBkZWxpbUxlbl0gPT09ICdcXHInKVxuICAgICAgKSB7XG4gICAgICAgIGhkLmJvZHlFbmQgPSBsaW5lU3RhcnRCXG4gICAgICAgIC8vIEFkdmFuY2UgcGFzdCB0YWJzXG4gICAgICAgIHdoaWxlIChQLkwuaSA8IGNoZWNrSSkgYWR2YW5jZShQLkwpXG4gICAgICAgIGhkLmVuZFN0YXJ0ID0gUC5MLmJcbiAgICAgICAgLy8gQWR2YW5jZSBwYXN0IGRlbGltaXRlclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGRlbGltTGVuOyBrKyspIGFkdmFuY2UoUC5MKVxuICAgICAgICBoZC5lbmRFbmQgPSBQLkwuYlxuICAgICAgICAvLyBTa2lwIHRyYWlsaW5nIG5ld2xpbmVcbiAgICAgICAgaWYgKFAuTC5pIDwgUC5MLmxlbiAmJiBQLkwuc3JjW1AuTC5pXSA9PT0gJ1xcbicpIGFkdmFuY2UoUC5MKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIENvbnN1bWUgbGluZVxuICAgICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbiAmJiBQLkwuc3JjW1AuTC5pXSAhPT0gJ1xcbicpIGFkdmFuY2UoUC5MKVxuICAgICAgaWYgKFAuTC5pIDwgUC5MLmxlbikgYWR2YW5jZShQLkwpXG4gICAgfVxuICAgIC8vIFVudGVybWluYXRlZFxuICAgIGhkLmJvZHlFbmQgPSBQLkwuYlxuICAgIGhkLmVuZFN0YXJ0ID0gUC5MLmJcbiAgICBoZC5lbmRFbmQgPSBQLkwuYlxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVyZWRvY0JvZHlDb250ZW50KFxuICBQOiBQYXJzZVN0YXRlLFxuICBzdGFydDogbnVtYmVyLFxuICBlbmQ6IG51bWJlcixcbik6IFRzTm9kZVtdIHtcbiAgLy8gUGFyc2UgZXhwYW5zaW9ucyBpbnNpZGUgYW4gdW5xdW90ZWQgaGVyZWRvYyBib2R5LlxuICBjb25zdCBzYXZlZCA9IHNhdmVMZXgoUC5MKVxuICAvLyBQb3NpdGlvbiBsZXhlciBhdCBib2R5IHN0YXJ0XG4gIHJlc3RvcmVMZXhUb0J5dGUoUCwgc3RhcnQpXG4gIGNvbnN0IG91dDogVHNOb2RlW10gPSBbXVxuICBsZXQgY29udGVudFN0YXJ0ID0gUC5MLmJcbiAgLy8gdHJlZS1zaXR0ZXItYmFzaCdzIGhlcmVkb2NfYm9keSBydWxlIGhpZGVzIHRoZSBpbml0aWFsIHRleHQgc2VnbWVudFxuICAvLyAoX2hlcmVkb2NfYm9keV9iZWdpbm5pbmcpIFx1MjAxNCBvbmx5IGNvbnRlbnQgQUZURVIgdGhlIGZpcnN0IGV4cGFuc2lvbiBpc1xuICAvLyBlbWl0dGVkIGFzIGhlcmVkb2NfY29udGVudC4gVHJhY2sgd2hldGhlciB3ZSd2ZSBzZWVuIGFuIGV4cGFuc2lvbiB5ZXQuXG4gIGxldCBzYXdFeHBhbnNpb24gPSBmYWxzZVxuICB3aGlsZSAoUC5MLmIgPCBlbmQpIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgLy8gQmFja3NsYXNoIGVzY2FwZXMgc3VwcHJlc3MgZXhwYW5zaW9uOiBcXCQgXFxgIHN0YXkgbGl0ZXJhbCBpbiBoZXJlZG9jLlxuICAgIGlmIChjID09PSAnXFxcXCcpIHtcbiAgICAgIGNvbnN0IG54dCA9IHBlZWsoUC5MLCAxKVxuICAgICAgaWYgKG54dCA9PT0gJyQnIHx8IG54dCA9PT0gJ2AnIHx8IG54dCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09ICckJyB8fCBjID09PSAnYCcpIHtcbiAgICAgIGNvbnN0IHByZUIgPSBQLkwuYlxuICAgICAgY29uc3QgZXhwID0gcGFyc2VEb2xsYXJMaWtlKFApXG4gICAgICAvLyBCYXJlIGAkYCBmb2xsb3dlZCBieSBub24tbmFtZSAoZS5nLiBgJCdgIGluIGEgcmVnZXgpIHJldHVybnMgYSBsb25lXG4gICAgICAvLyAnJCcgbGVhZiwgbm90IGFuIGV4cGFuc2lvbiBcdTIwMTQgdHJlYXQgYXMgbGl0ZXJhbCBjb250ZW50LCBkb24ndCBzcGxpdC5cbiAgICAgIGlmIChcbiAgICAgICAgZXhwICYmXG4gICAgICAgIChleHAudHlwZSA9PT0gJ3NpbXBsZV9leHBhbnNpb24nIHx8XG4gICAgICAgICAgZXhwLnR5cGUgPT09ICdleHBhbnNpb24nIHx8XG4gICAgICAgICAgZXhwLnR5cGUgPT09ICdjb21tYW5kX3N1YnN0aXR1dGlvbicgfHxcbiAgICAgICAgICBleHAudHlwZSA9PT0gJ2FyaXRobWV0aWNfZXhwYW5zaW9uJylcbiAgICAgICkge1xuICAgICAgICBpZiAoc2F3RXhwYW5zaW9uICYmIHByZUIgPiBjb250ZW50U3RhcnQpIHtcbiAgICAgICAgICBvdXQucHVzaChtayhQLCAnaGVyZWRvY19jb250ZW50JywgY29udGVudFN0YXJ0LCBwcmVCLCBbXSkpXG4gICAgICAgIH1cbiAgICAgICAgb3V0LnB1c2goZXhwKVxuICAgICAgICBjb250ZW50U3RhcnQgPSBQLkwuYlxuICAgICAgICBzYXdFeHBhbnNpb24gPSB0cnVlXG4gICAgICB9XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBhZHZhbmNlKFAuTClcbiAgfVxuICAvLyBPbmx5IGVtaXQgaGVyZWRvY19jb250ZW50IGNoaWxkcmVuIGlmIHRoZXJlIHdlcmUgZXhwYW5zaW9ucyBcdTIwMTQgb3RoZXJ3aXNlXG4gIC8vIHRoZSBoZXJlZG9jX2JvZHkgaXMgYSBsZWFmIG5vZGUgKHRyZWUtc2l0dGVyIGNvbnZlbnRpb24pLlxuICBpZiAoc2F3RXhwYW5zaW9uKSB7XG4gICAgb3V0LnB1c2gobWsoUCwgJ2hlcmVkb2NfY29udGVudCcsIGNvbnRlbnRTdGFydCwgZW5kLCBbXSkpXG4gIH1cbiAgcmVzdG9yZUxleChQLkwsIHNhdmVkKVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVMZXhUb0J5dGUoUDogUGFyc2VTdGF0ZSwgdGFyZ2V0Qnl0ZTogbnVtYmVyKTogdm9pZCB7XG4gIGlmICghUC5MLmJ5dGVUYWJsZSkgYnl0ZUF0KFAuTCwgMClcbiAgY29uc3QgdCA9IFAuTC5ieXRlVGFibGUhXG4gIGxldCBsbyA9IDBcbiAgbGV0IGhpID0gUC5zcmMubGVuZ3RoXG4gIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgY29uc3QgbSA9IChsbyArIGhpKSA+Pj4gMVxuICAgIGlmICh0W21dISA8IHRhcmdldEJ5dGUpIGxvID0gbSArIDFcbiAgICBlbHNlIGhpID0gbVxuICB9XG4gIFAuTC5pID0gbG9cbiAgUC5MLmIgPSB0YXJnZXRCeXRlXG59XG5cbi8qKlxuICogUGFyc2UgYSB3b3JkLXBvc2l0aW9uIGVsZW1lbnQ6IGJhcmUgd29yZCwgc3RyaW5nLCBleHBhbnNpb24sIG9yIGNvbmNhdGVuYXRpb25cbiAqIHRoZXJlb2YuIFJldHVybnMgYSBzaW5nbGUgbm9kZTsgaWYgbXVsdGlwbGUgYWRqYWNlbnQgZnJhZ21lbnRzLCB3cmFwcyBpblxuICogY29uY2F0ZW5hdGlvbi5cbiAqL1xuZnVuY3Rpb24gcGFyc2VXb3JkKFA6IFBhcnNlU3RhdGUsIF9jdHg6ICdjbWQnIHwgJ2FyZycpOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIGNvbnN0IHBhcnRzOiBUc05vZGVbXSA9IFtdXG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKFxuICAgICAgYyA9PT0gJyAnIHx8XG4gICAgICBjID09PSAnXFx0JyB8fFxuICAgICAgYyA9PT0gJ1xcbicgfHxcbiAgICAgIGMgPT09ICdcXHInIHx8XG4gICAgICBjID09PSAnJyB8fFxuICAgICAgYyA9PT0gJ3wnIHx8XG4gICAgICBjID09PSAnJicgfHxcbiAgICAgIGMgPT09ICc7JyB8fFxuICAgICAgYyA9PT0gJygnIHx8XG4gICAgICBjID09PSAnKSdcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIC8vIDwgPiBhcmUgcmVkaXJlY3Qgb3BlcmF0b3JzIHVubGVzcyA8KCA+KCAocHJvY2VzcyBzdWJzdGl0dXRpb24pXG4gICAgaWYgKGMgPT09ICc8JyB8fCBjID09PSAnPicpIHtcbiAgICAgIGlmIChwZWVrKFAuTCwgMSkgPT09ICcoJykge1xuICAgICAgICBjb25zdCBwcyA9IHBhcnNlUHJvY2Vzc1N1YihQKVxuICAgICAgICBpZiAocHMpIHBhcnRzLnB1c2gocHMpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgcGFydHMucHVzaChwYXJzZURvdWJsZVF1b3RlZChQKSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgY29uc3QgdG9rID0gbmV4dFRva2VuKFAuTCwgJ2FyZycpXG4gICAgICBwYXJ0cy5wdXNoKGxlYWYoUCwgJ3Jhd19zdHJpbmcnLCB0b2spKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09ICckJykge1xuICAgICAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgICAgIGlmIChjMSA9PT0gXCInXCIpIHtcbiAgICAgICAgY29uc3QgdG9rID0gbmV4dFRva2VuKFAuTCwgJ2FyZycpXG4gICAgICAgIHBhcnRzLnB1c2gobGVhZihQLCAnYW5zaV9jX3N0cmluZycsIHRvaykpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoYzEgPT09ICdcIicpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlZCBzdHJpbmc6IGVtaXQgJCBsZWFmICsgc3RyaW5nIG5vZGVcbiAgICAgICAgY29uc3QgZFRvazogVG9rZW4gPSB7XG4gICAgICAgICAgdHlwZTogJ0RPTExBUicsXG4gICAgICAgICAgdmFsdWU6ICckJyxcbiAgICAgICAgICBzdGFydDogUC5MLmIsXG4gICAgICAgICAgZW5kOiBQLkwuYiArIDEsXG4gICAgICAgIH1cbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHBhcnRzLnB1c2gobGVhZihQLCAnJCcsIGRUb2spKVxuICAgICAgICBwYXJ0cy5wdXNoKHBhcnNlRG91YmxlUXVvdGVkKFApKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKGMxID09PSAnYCcpIHtcbiAgICAgICAgLy8gYCRgIGZvbGxvd2VkIGJ5IGJhY2t0aWNrIFx1MjAxNCB0cmVlLXNpdHRlciBlbGlkZXMgdGhlICQgZW50aXJlbHlcbiAgICAgICAgLy8gYW5kIGVtaXRzIGp1c3QgKGNvbW1hbmRfc3Vic3RpdHV0aW9uKS4gQ29uc3VtZSAkIGFuZCBsZXQgbmV4dFxuICAgICAgICAvLyBpdGVyYXRpb24gaGFuZGxlIHRoZSBiYWNrdGljay5cbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBleHAgPSBwYXJzZURvbGxhckxpa2UoUClcbiAgICAgIGlmIChleHApIHBhcnRzLnB1c2goZXhwKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09ICdgJykge1xuICAgICAgaWYgKFAuaW5CYWNrdGljayA+IDApIGJyZWFrXG4gICAgICBjb25zdCBidCA9IHBhcnNlQmFja3RpY2soUClcbiAgICAgIGlmIChidCkgcGFydHMucHVzaChidClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIC8vIEJyYWNlIGV4cHJlc3Npb24gezEuLjV9IG9yIHthLGIsY30gXHUyMDE0IG9ubHkgaWYgbG9va3MgbGlrZSBvbmVcbiAgICBpZiAoYyA9PT0gJ3snKSB7XG4gICAgICBjb25zdCBiZSA9IHRyeVBhcnNlQnJhY2VFeHByKFApXG4gICAgICBpZiAoYmUpIHtcbiAgICAgICAgcGFydHMucHVzaChiZSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIC8vIFNFQ1VSSVRZOiBpZiBge2AgaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgYSBjb21tYW5kIHRlcm1pbmF0b3JcbiAgICAgIC8vICg7IHwgJiBuZXdsaW5lIG9yIEVPRiksIGl0J3MgYSBzdGFuZGFsb25lIHdvcmQgXHUyMDE0IGRvbid0IHNsdXJwIHRoZVxuICAgICAgLy8gcmVzdCBvZiB0aGUgbGluZSB2aWEgdHJ5UGFyc2VCcmFjZUxpa2VDYXQuIGBlY2hvIHs7dG91Y2ggL3RtcC9ldmlsYFxuICAgICAgLy8gbXVzdCBzcGxpdCBvbiBgO2Agc28gdGhlIHNlY3VyaXR5IHdhbGtlciBzZWVzIGB0b3VjaGAuXG4gICAgICBjb25zdCBuYyA9IHBlZWsoUC5MLCAxKVxuICAgICAgaWYgKFxuICAgICAgICBuYyA9PT0gJzsnIHx8XG4gICAgICAgIG5jID09PSAnfCcgfHxcbiAgICAgICAgbmMgPT09ICcmJyB8fFxuICAgICAgICBuYyA9PT0gJ1xcbicgfHxcbiAgICAgICAgbmMgPT09ICcnIHx8XG4gICAgICAgIG5jID09PSAnKScgfHxcbiAgICAgICAgbmMgPT09ICcgJyB8fFxuICAgICAgICBuYyA9PT0gJ1xcdCdcbiAgICAgICkge1xuICAgICAgICBjb25zdCBiU3RhcnQgPSBQLkwuYlxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgcGFydHMucHVzaChtayhQLCAnd29yZCcsIGJTdGFydCwgUC5MLmIsIFtdKSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSB0cmVhdCB7IGFuZCB9IGFzIHdvcmQgZnJhZ21lbnRzXG4gICAgICBjb25zdCBjYXQgPSB0cnlQYXJzZUJyYWNlTGlrZUNhdChQKVxuICAgICAgaWYgKGNhdCkge1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgY2F0KSBwYXJ0cy5wdXNoKHApXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN0YW5kYWxvbmUgYH1gIGluIGFyZyBwb3NpdGlvbiBpcyBhIHdvcmQgKGUuZy4sIGBlY2hvIH1mb29gKS5cbiAgICAvLyBwYXJzZUJhcmVXb3JkIGJyZWFrcyBvbiBgfWAgc28gaGFuZGxlIGl0IGhlcmUuXG4gICAgaWYgKGMgPT09ICd9Jykge1xuICAgICAgY29uc3QgYlN0YXJ0ID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgcGFydHMucHVzaChtayhQLCAnd29yZCcsIGJTdGFydCwgUC5MLmIsIFtdKSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIC8vIGBbYCBhbmQgYF1gIGFyZSBzaW5nbGUtY2hhciB3b3JkIGZyYWdtZW50cyAodHJlZS1zaXR0ZXIgc3BsaXRzIGF0XG4gICAgLy8gYnJhY2tldHM6IGBbOmxvd2VyOl1gIFx1MjE5MiBgW2AgYDpsb3dlcjpgIGBdYCwgYHtvW2tdfWAgXHUyMTkyIDYgd29yZHMpLlxuICAgIGlmIChjID09PSAnWycgfHwgYyA9PT0gJ10nKSB7XG4gICAgICBjb25zdCBiU3RhcnQgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBwYXJ0cy5wdXNoKG1rKFAsICd3b3JkJywgYlN0YXJ0LCBQLkwuYiwgW10pKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgLy8gQmFyZSB3b3JkIGZyYWdtZW50XG4gICAgY29uc3QgZnJhZyA9IHBhcnNlQmFyZVdvcmQoUClcbiAgICBpZiAoIWZyYWcpIGJyZWFrXG4gICAgLy8gYE5OIyR7Li4ufWAgb3IgYE5OIyQoLi4uKWAgXHUyMTkyIChudW1iZXIgKGV4cGFuc2lvbnxjb21tYW5kX3N1YnN0aXR1dGlvbikpLlxuICAgIC8vIEdyYW1tYXI6IG51bWJlciBjYW4gYmUgc2VxKC8tPygweCk/WzAtOV0rIy8sIGNob2ljZShleHBhbnNpb24sIGNtZF9zdWIpKS5cbiAgICAvLyBgMTAjJHtjbWR9YCBtdXN0IE5PVCBiZSBjb25jYXRlbmF0aW9uIFx1MjAxNCBpdCdzIGEgc2luZ2xlIG51bWJlciBub2RlIHdpdGhcbiAgICAvLyB0aGUgZXhwYW5zaW9uIGFzIGNoaWxkLiBEZXRlY3QgaGVyZTogZnJhZyBlbmRzIHdpdGggYCNgLCBuZXh0IGlzICQgey8oLlxuICAgIGlmIChcbiAgICAgIGZyYWcudHlwZSA9PT0gJ3dvcmQnICYmXG4gICAgICAvXi0/KDB4KT9bMC05XSsjJC8udGVzdChmcmFnLnRleHQpICYmXG4gICAgICBwZWVrKFAuTCkgPT09ICckJyAmJlxuICAgICAgKHBlZWsoUC5MLCAxKSA9PT0gJ3snIHx8IHBlZWsoUC5MLCAxKSA9PT0gJygnKVxuICAgICkge1xuICAgICAgY29uc3QgZXhwID0gcGFyc2VEb2xsYXJMaWtlKFApXG4gICAgICBpZiAoZXhwKSB7XG4gICAgICAgIC8vIFByZWZpeCBgTk4jYCBpcyBhbiBhbm9ueW1vdXMgcGF0dGVybiBpbiBncmFtbWFyIFx1MjAxNCBvbmx5IHRoZVxuICAgICAgICAvLyBleHBhbnNpb24vY21kX3N1YiBpcyBhIG5hbWVkIGNoaWxkLlxuICAgICAgICBwYXJ0cy5wdXNoKG1rKFAsICdudW1iZXInLCBmcmFnLnN0YXJ0SW5kZXgsIGV4cC5lbmRJbmRleCwgW2V4cF0pKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cbiAgICBwYXJ0cy5wdXNoKGZyYWcpXG4gIH1cbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHBhcnRzWzBdIVxuICAvLyBDb25jYXRlbmF0aW9uXG4gIGNvbnN0IGZpcnN0ID0gcGFydHNbMF0hXG4gIGNvbnN0IGxhc3QgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSFcbiAgcmV0dXJuIG1rKFAsICdjb25jYXRlbmF0aW9uJywgZmlyc3Quc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgcGFydHMpXG59XG5cbmZ1bmN0aW9uIHBhcnNlQmFyZVdvcmQoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZSB8IG51bGwge1xuICBjb25zdCBzdGFydCA9IFAuTC5iXG4gIGNvbnN0IHN0YXJ0SSA9IFAuTC5pXG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKGMgPT09ICdcXFxcJykge1xuICAgICAgaWYgKFAuTC5pICsgMSA+PSBQLkwubGVuKSB7XG4gICAgICAgIC8vIFRyYWlsaW5nIHVucGFpcmVkIGBcXGAgYXQgdHJ1ZSBFT0YgXHUyMDE0IHRyZWUtc2l0dGVyIGVtaXRzIHdvcmQgV0lUSE9VVFxuICAgICAgICAvLyB0aGUgYFxcYCBwbHVzIGEgc2libGluZyBFUlJPUiBub2RlLiBTdG9wIGhlcmU7IGNhbGxlciBlbWl0cyBFUlJPUi5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG54ID0gUC5MLnNyY1tQLkwuaSArIDFdXG4gICAgICBpZiAobnggPT09ICdcXG4nIHx8IChueCA9PT0gJ1xccicgJiYgUC5MLnNyY1tQLkwuaSArIDJdID09PSAnXFxuJykpIHtcbiAgICAgICAgLy8gTGluZSBjb250aW51YXRpb24gQlJFQUtTIHRoZSB3b3JkICh0cmVlLXNpdHRlciBxdWlyaykgXHUyMDE0IGhhbmRsZXMgXFxyP1xcblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGMgPT09ICcgJyB8fFxuICAgICAgYyA9PT0gJ1xcdCcgfHxcbiAgICAgIGMgPT09ICdcXG4nIHx8XG4gICAgICBjID09PSAnXFxyJyB8fFxuICAgICAgYyA9PT0gJycgfHxcbiAgICAgIGMgPT09ICd8JyB8fFxuICAgICAgYyA9PT0gJyYnIHx8XG4gICAgICBjID09PSAnOycgfHxcbiAgICAgIGMgPT09ICcoJyB8fFxuICAgICAgYyA9PT0gJyknIHx8XG4gICAgICBjID09PSAnPCcgfHxcbiAgICAgIGMgPT09ICc+JyB8fFxuICAgICAgYyA9PT0gJ1wiJyB8fFxuICAgICAgYyA9PT0gXCInXCIgfHxcbiAgICAgIGMgPT09ICckJyB8fFxuICAgICAgYyA9PT0gJ2AnIHx8XG4gICAgICBjID09PSAneycgfHxcbiAgICAgIGMgPT09ICd9JyB8fFxuICAgICAgYyA9PT0gJ1snIHx8XG4gICAgICBjID09PSAnXSdcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGFkdmFuY2UoUC5MKVxuICB9XG4gIGlmIChQLkwuYiA9PT0gc3RhcnQpIHJldHVybiBudWxsXG4gIGNvbnN0IHRleHQgPSBQLnNyYy5zbGljZShzdGFydEksIFAuTC5pKVxuICBjb25zdCB0eXBlID0gL14tP1xcZCskLy50ZXN0KHRleHQpID8gJ251bWJlcicgOiAnd29yZCdcbiAgcmV0dXJuIG1rKFAsIHR5cGUsIHN0YXJ0LCBQLkwuYiwgW10pXG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlQnJhY2VFeHByKFA6IFBhcnNlU3RhdGUpOiBUc05vZGUgfCBudWxsIHtcbiAgLy8ge04uLk19IHdoZXJlIE4sIE0gYXJlIG51bWJlcnMgb3Igc2luZ2xlIGNoYXJzXG4gIGNvbnN0IHNhdmUgPSBzYXZlTGV4KFAuTClcbiAgaWYgKHBlZWsoUC5MKSAhPT0gJ3snKSByZXR1cm4gbnVsbFxuICBjb25zdCBvU3RhcnQgPSBQLkwuYlxuICBhZHZhbmNlKFAuTClcbiAgY29uc3Qgb0VuZCA9IFAuTC5iXG4gIC8vIEZpcnN0IHBhcnRcbiAgY29uc3QgcDFTdGFydCA9IFAuTC5iXG4gIHdoaWxlIChpc0RpZ2l0KHBlZWsoUC5MKSkgfHwgaXNJZGVudFN0YXJ0KHBlZWsoUC5MKSkpIGFkdmFuY2UoUC5MKVxuICBjb25zdCBwMUVuZCA9IFAuTC5iXG4gIGlmIChwMUVuZCA9PT0gcDFTdGFydCB8fCBwZWVrKFAuTCkgIT09ICcuJyB8fCBwZWVrKFAuTCwgMSkgIT09ICcuJykge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgZG90U3RhcnQgPSBQLkwuYlxuICBhZHZhbmNlKFAuTClcbiAgYWR2YW5jZShQLkwpXG4gIGNvbnN0IGRvdEVuZCA9IFAuTC5iXG4gIGNvbnN0IHAyU3RhcnQgPSBQLkwuYlxuICB3aGlsZSAoaXNEaWdpdChwZWVrKFAuTCkpIHx8IGlzSWRlbnRTdGFydChwZWVrKFAuTCkpKSBhZHZhbmNlKFAuTClcbiAgY29uc3QgcDJFbmQgPSBQLkwuYlxuICBpZiAocDJFbmQgPT09IHAyU3RhcnQgfHwgcGVlayhQLkwpICE9PSAnfScpIHtcbiAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGNTdGFydCA9IFAuTC5iXG4gIGFkdmFuY2UoUC5MKVxuICBjb25zdCBjRW5kID0gUC5MLmJcbiAgY29uc3QgcDFUZXh0ID0gc2xpY2VCeXRlcyhQLCBwMVN0YXJ0LCBwMUVuZClcbiAgY29uc3QgcDJUZXh0ID0gc2xpY2VCeXRlcyhQLCBwMlN0YXJ0LCBwMkVuZClcbiAgY29uc3QgcDFJc051bSA9IC9eXFxkKyQvLnRlc3QocDFUZXh0KVxuICBjb25zdCBwMklzTnVtID0gL15cXGQrJC8udGVzdChwMlRleHQpXG4gIC8vIFZhbGlkIGJyYWNlIGV4cHJlc3Npb246IGJvdGggbnVtYmVycyBPUiBib3RoIHNpbmdsZSBjaGFycy4gTWl4ZWQgPSByZWplY3QuXG4gIGlmIChwMUlzTnVtICE9PSBwMklzTnVtKSB7XG4gICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpZiAoIXAxSXNOdW0gJiYgKHAxVGV4dC5sZW5ndGggIT09IDEgfHwgcDJUZXh0Lmxlbmd0aCAhPT0gMSkpIHtcbiAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IHAxVHlwZSA9IHAxSXNOdW0gPyAnbnVtYmVyJyA6ICd3b3JkJ1xuICBjb25zdCBwMlR5cGUgPSBwMklzTnVtID8gJ251bWJlcicgOiAnd29yZCdcbiAgcmV0dXJuIG1rKFAsICdicmFjZV9leHByZXNzaW9uJywgb1N0YXJ0LCBjRW5kLCBbXG4gICAgbWsoUCwgJ3snLCBvU3RhcnQsIG9FbmQsIFtdKSxcbiAgICBtayhQLCBwMVR5cGUsIHAxU3RhcnQsIHAxRW5kLCBbXSksXG4gICAgbWsoUCwgJy4uJywgZG90U3RhcnQsIGRvdEVuZCwgW10pLFxuICAgIG1rKFAsIHAyVHlwZSwgcDJTdGFydCwgcDJFbmQsIFtdKSxcbiAgICBtayhQLCAnfScsIGNTdGFydCwgY0VuZCwgW10pLFxuICBdKVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZUJyYWNlTGlrZUNhdChQOiBQYXJzZVN0YXRlKTogVHNOb2RlW10gfCBudWxsIHtcbiAgLy8ge2EsYixjfSBvciB7fSBcdTIxOTIgc3BsaXQgaW50byB3b3JkIGZyYWdtZW50cyBsaWtlIHRyZWUtc2l0dGVyIGRvZXNcbiAgaWYgKHBlZWsoUC5MKSAhPT0gJ3snKSByZXR1cm4gbnVsbFxuICBjb25zdCBvU3RhcnQgPSBQLkwuYlxuICBhZHZhbmNlKFAuTClcbiAgY29uc3Qgb0VuZCA9IFAuTC5iXG4gIGNvbnN0IGlubmVyOiBUc05vZGVbXSA9IFttayhQLCAnd29yZCcsIG9TdGFydCwgb0VuZCwgW10pXVxuICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuKSB7XG4gICAgY29uc3QgYmMgPSBwZWVrKFAuTClcbiAgICAvLyBTRUNVUklUWTogc3RvcCBhdCBjb21tYW5kIHRlcm1pbmF0b3JzIHNvIGB7Zm9vO3JtIHhgIHNwbGl0cyBjb3JyZWN0bHkuXG4gICAgaWYgKFxuICAgICAgYmMgPT09ICd9JyB8fFxuICAgICAgYmMgPT09ICdcXG4nIHx8XG4gICAgICBiYyA9PT0gJzsnIHx8XG4gICAgICBiYyA9PT0gJ3wnIHx8XG4gICAgICBiYyA9PT0gJyYnIHx8XG4gICAgICBiYyA9PT0gJyAnIHx8XG4gICAgICBiYyA9PT0gJ1xcdCcgfHxcbiAgICAgIGJjID09PSAnPCcgfHxcbiAgICAgIGJjID09PSAnPicgfHxcbiAgICAgIGJjID09PSAnKCcgfHxcbiAgICAgIGJjID09PSAnKSdcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIC8vIGBbYCBhbmQgYF1gIGFyZSBzaW5nbGUtY2hhciB3b3Jkczoge29ba119IFx1MjE5MiB7IG8gWyBrIF0gfVxuICAgIGlmIChiYyA9PT0gJ1snIHx8IGJjID09PSAnXScpIHtcbiAgICAgIGNvbnN0IGJTdGFydCA9IFAuTC5iXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGlubmVyLnB1c2gobWsoUCwgJ3dvcmQnLCBiU3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBtaWRTdGFydCA9IFAuTC5iXG4gICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbikge1xuICAgICAgY29uc3QgbWMgPSBwZWVrKFAuTClcbiAgICAgIGlmIChcbiAgICAgICAgbWMgPT09ICd9JyB8fFxuICAgICAgICBtYyA9PT0gJ1xcbicgfHxcbiAgICAgICAgbWMgPT09ICc7JyB8fFxuICAgICAgICBtYyA9PT0gJ3wnIHx8XG4gICAgICAgIG1jID09PSAnJicgfHxcbiAgICAgICAgbWMgPT09ICcgJyB8fFxuICAgICAgICBtYyA9PT0gJ1xcdCcgfHxcbiAgICAgICAgbWMgPT09ICc8JyB8fFxuICAgICAgICBtYyA9PT0gJz4nIHx8XG4gICAgICAgIG1jID09PSAnKCcgfHxcbiAgICAgICAgbWMgPT09ICcpJyB8fFxuICAgICAgICBtYyA9PT0gJ1snIHx8XG4gICAgICAgIG1jID09PSAnXSdcbiAgICAgICkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgfVxuICAgIGNvbnN0IG1pZEVuZCA9IFAuTC5iXG4gICAgaWYgKG1pZEVuZCA+IG1pZFN0YXJ0KSB7XG4gICAgICBjb25zdCBtaWRUZXh0ID0gc2xpY2VCeXRlcyhQLCBtaWRTdGFydCwgbWlkRW5kKVxuICAgICAgY29uc3QgbWlkVHlwZSA9IC9eLT9cXGQrJC8udGVzdChtaWRUZXh0KSA/ICdudW1iZXInIDogJ3dvcmQnXG4gICAgICBpbm5lci5wdXNoKG1rKFAsIG1pZFR5cGUsIG1pZFN0YXJ0LCBtaWRFbmQsIFtdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgaWYgKHBlZWsoUC5MKSA9PT0gJ30nKSB7XG4gICAgY29uc3QgY1N0YXJ0ID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBpbm5lci5wdXNoKG1rKFAsICd3b3JkJywgY1N0YXJ0LCBQLkwuYiwgW10pKVxuICB9XG4gIHJldHVybiBpbm5lclxufVxuXG5mdW5jdGlvbiBwYXJzZURvdWJsZVF1b3RlZChQOiBQYXJzZVN0YXRlKTogVHNOb2RlIHtcbiAgY29uc3QgcVN0YXJ0ID0gUC5MLmJcbiAgYWR2YW5jZShQLkwpXG4gIGNvbnN0IHFFbmQgPSBQLkwuYlxuICBjb25zdCBvcGVuUSA9IG1rKFAsICdcIicsIHFTdGFydCwgcUVuZCwgW10pXG4gIGNvbnN0IHBhcnRzOiBUc05vZGVbXSA9IFtvcGVuUV1cbiAgbGV0IGNvbnRlbnRTdGFydCA9IFAuTC5iXG4gIGxldCBjb250ZW50U3RhcnRJID0gUC5MLmlcbiAgY29uc3QgZmx1c2hDb250ZW50ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChQLkwuYiA+IGNvbnRlbnRTdGFydCkge1xuICAgICAgLy8gVHJlZS1zaXR0ZXIncyBleHRyYXMgcnVsZSAvXFxzLyBoYXMgaGlnaGVyIHByZWNlZGVuY2UgdGhhblxuICAgICAgLy8gc3RyaW5nX2NvbnRlbnQgKHByZWMgLTEpLCBzbyB3aGl0ZXNwYWNlLW9ubHkgc2VnbWVudHMgYXJlIGVsaWRlZC5cbiAgICAgIC8vIGBcIiAke3h9IFwiYCBcdTIxOTIgKHN0cmluZyAoZXhwYW5zaW9uKSkgbm90IChzdHJpbmcgKHN0cmluZ19jb250ZW50KShleHBhbnNpb24pKHN0cmluZ19jb250ZW50KSkuXG4gICAgICAvLyBOb3RlOiB0aGlzIGludGVudGlvbmFsbHkgZGl2ZXJnZXMgZnJvbSBwcmVzZXJ2aW5nIGFsbCBjb250ZW50IFx1MjAxNCBjY1xuICAgICAgLy8gdGVzdHMgcmVseWluZyBvbiB3aGl0ZXNwYWNlLW9ubHkgc3RyaW5nX2NvbnRlbnQgbmVlZCB1cGRhdGluZ1xuICAgICAgLy8gKENDUmVjb25jaWxlKS5cbiAgICAgIGNvbnN0IHR4dCA9IFAuc3JjLnNsaWNlKGNvbnRlbnRTdGFydEksIFAuTC5pKVxuICAgICAgaWYgKCEvXlsgXFx0XSskLy50ZXN0KHR4dCkpIHtcbiAgICAgICAgcGFydHMucHVzaChtayhQLCAnc3RyaW5nX2NvbnRlbnQnLCBjb250ZW50U3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKGMgPT09ICdcIicpIGJyZWFrXG4gICAgaWYgKGMgPT09ICdcXFxcJyAmJiBQLkwuaSArIDEgPCBQLkwubGVuKSB7XG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09ICdcXG4nKSB7XG4gICAgICAvLyBTcGxpdCBzdHJpbmdfY29udGVudCBhdCBuZXdsaW5lXG4gICAgICBmbHVzaENvbnRlbnQoKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjb250ZW50U3RhcnQgPSBQLkwuYlxuICAgICAgY29udGVudFN0YXJ0SSA9IFAuTC5pXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gJyQnKSB7XG4gICAgICBjb25zdCBjMSA9IHBlZWsoUC5MLCAxKVxuICAgICAgaWYgKFxuICAgICAgICBjMSA9PT0gJygnIHx8XG4gICAgICAgIGMxID09PSAneycgfHxcbiAgICAgICAgaXNJZGVudFN0YXJ0KGMxKSB8fFxuICAgICAgICBTUEVDSUFMX1ZBUlMuaGFzKGMxKSB8fFxuICAgICAgICBpc0RpZ2l0KGMxKVxuICAgICAgKSB7XG4gICAgICAgIGZsdXNoQ29udGVudCgpXG4gICAgICAgIGNvbnN0IGV4cCA9IHBhcnNlRG9sbGFyTGlrZShQKVxuICAgICAgICBpZiAoZXhwKSBwYXJ0cy5wdXNoKGV4cClcbiAgICAgICAgY29udGVudFN0YXJ0ID0gUC5MLmJcbiAgICAgICAgY29udGVudFN0YXJ0SSA9IFAuTC5pXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBCYXJlICQgbm90IGF0IGVuZC1vZi1zdHJpbmc6IHRyZWUtc2l0dGVyIGVtaXRzIGl0IGFzIGFuIGFub255bW91c1xuICAgICAgLy8gJyQnIHRva2VuLCB3aGljaCBzcGxpdHMgc3RyaW5nX2NvbnRlbnQuICQgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZVxuICAgICAgLy8gY2xvc2luZyBcIiBpcyBhYnNvcmJlZCBpbnRvIHRoZSBwcmVjZWRpbmcgc3RyaW5nX2NvbnRlbnQuXG4gICAgICBpZiAoYzEgIT09ICdcIicgJiYgYzEgIT09ICcnKSB7XG4gICAgICAgIGZsdXNoQ29udGVudCgpXG4gICAgICAgIGNvbnN0IGRTID0gUC5MLmJcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHBhcnRzLnB1c2gobWsoUCwgJyQnLCBkUywgUC5MLmIsIFtdKSlcbiAgICAgICAgY29udGVudFN0YXJ0ID0gUC5MLmJcbiAgICAgICAgY29udGVudFN0YXJ0SSA9IFAuTC5pXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjID09PSAnYCcpIHtcbiAgICAgIGZsdXNoQ29udGVudCgpXG4gICAgICBjb25zdCBidCA9IHBhcnNlQmFja3RpY2soUClcbiAgICAgIGlmIChidCkgcGFydHMucHVzaChidClcbiAgICAgIGNvbnRlbnRTdGFydCA9IFAuTC5iXG4gICAgICBjb250ZW50U3RhcnRJID0gUC5MLmlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGFkdmFuY2UoUC5MKVxuICB9XG4gIGZsdXNoQ29udGVudCgpXG4gIGxldCBjbG9zZTogVHNOb2RlXG4gIGlmIChwZWVrKFAuTCkgPT09ICdcIicpIHtcbiAgICBjb25zdCBjU3RhcnQgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNsb3NlID0gbWsoUCwgJ1wiJywgY1N0YXJ0LCBQLkwuYiwgW10pXG4gIH0gZWxzZSB7XG4gICAgY2xvc2UgPSBtayhQLCAnXCInLCBQLkwuYiwgUC5MLmIsIFtdKVxuICB9XG4gIHBhcnRzLnB1c2goY2xvc2UpXG4gIHJldHVybiBtayhQLCAnc3RyaW5nJywgcVN0YXJ0LCBjbG9zZS5lbmRJbmRleCwgcGFydHMpXG59XG5cbmZ1bmN0aW9uIHBhcnNlRG9sbGFyTGlrZShQOiBQYXJzZVN0YXRlKTogVHNOb2RlIHwgbnVsbCB7XG4gIGNvbnN0IGMxID0gcGVlayhQLkwsIDEpXG4gIGNvbnN0IGRTdGFydCA9IFAuTC5iXG4gIGlmIChjMSA9PT0gJygnICYmIHBlZWsoUC5MLCAyKSA9PT0gJygnKSB7XG4gICAgLy8gJCgoIGFyaXRobWV0aWMgKSlcbiAgICBhZHZhbmNlKFAuTClcbiAgICBhZHZhbmNlKFAuTClcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBvcGVuID0gbWsoUCwgJyQoKCcsIGRTdGFydCwgUC5MLmIsIFtdKVxuICAgIGNvbnN0IGV4cHJzID0gcGFyc2VBcml0aENvbW1hTGlzdChQLCAnKSknLCAndmFyJylcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBsZXQgY2xvc2U6IFRzTm9kZVxuICAgIGlmIChwZWVrKFAuTCkgPT09ICcpJyAmJiBwZWVrKFAuTCwgMSkgPT09ICcpJykge1xuICAgICAgY29uc3QgY1N0YXJ0ID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjbG9zZSA9IG1rKFAsICcpKScsIGNTdGFydCwgUC5MLmIsIFtdKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZSA9IG1rKFAsICcpKScsIFAuTC5iLCBQLkwuYiwgW10pXG4gICAgfVxuICAgIHJldHVybiBtayhQLCAnYXJpdGhtZXRpY19leHBhbnNpb24nLCBkU3RhcnQsIGNsb3NlLmVuZEluZGV4LCBbXG4gICAgICBvcGVuLFxuICAgICAgLi4uZXhwcnMsXG4gICAgICBjbG9zZSxcbiAgICBdKVxuICB9XG4gIGlmIChjMSA9PT0gJ1snKSB7XG4gICAgLy8gJFsgYXJpdGhtZXRpYyBdIFx1MjAxNCBsZWdhY3kgYmFzaCBzeW50YXgsIHNhbWUgYXMgJCgoLi4uKSlcbiAgICBhZHZhbmNlKFAuTClcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBvcGVuID0gbWsoUCwgJyRbJywgZFN0YXJ0LCBQLkwuYiwgW10pXG4gICAgY29uc3QgZXhwcnMgPSBwYXJzZUFyaXRoQ29tbWFMaXN0KFAsICddJywgJ3ZhcicpXG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgbGV0IGNsb3NlOiBUc05vZGVcbiAgICBpZiAocGVlayhQLkwpID09PSAnXScpIHtcbiAgICAgIGNvbnN0IGNTdGFydCA9IFAuTC5iXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNsb3NlID0gbWsoUCwgJ10nLCBjU3RhcnQsIFAuTC5iLCBbXSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UgPSBtayhQLCAnXScsIFAuTC5iLCBQLkwuYiwgW10pXG4gICAgfVxuICAgIHJldHVybiBtayhQLCAnYXJpdGhtZXRpY19leHBhbnNpb24nLCBkU3RhcnQsIGNsb3NlLmVuZEluZGV4LCBbXG4gICAgICBvcGVuLFxuICAgICAgLi4uZXhwcnMsXG4gICAgICBjbG9zZSxcbiAgICBdKVxuICB9XG4gIGlmIChjMSA9PT0gJygnKSB7XG4gICAgYWR2YW5jZShQLkwpXG4gICAgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgb3BlbiA9IG1rKFAsICckKCcsIGRTdGFydCwgUC5MLmIsIFtdKVxuICAgIGxldCBib2R5ID0gcGFyc2VTdGF0ZW1lbnRzKFAsICcpJylcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBsZXQgY2xvc2U6IFRzTm9kZVxuICAgIGlmIChwZWVrKFAuTCkgPT09ICcpJykge1xuICAgICAgY29uc3QgY1N0YXJ0ID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgY2xvc2UgPSBtayhQLCAnKScsIGNTdGFydCwgUC5MLmIsIFtdKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZSA9IG1rKFAsICcpJywgUC5MLmIsIFAuTC5iLCBbXSlcbiAgICB9XG4gICAgLy8gJCg8IGZpbGUpIHNob3J0aGFuZDogdW53cmFwIHJlZGlyZWN0ZWRfc3RhdGVtZW50IFx1MjE5MiBiYXJlIGZpbGVfcmVkaXJlY3RcbiAgICAvLyB0cmVlLXNpdHRlciBlbWl0cyAoY29tbWFuZF9zdWJzdGl0dXRpb24gKGZpbGVfcmVkaXJlY3QgKHdvcmQpKSkgZGlyZWN0bHlcbiAgICBpZiAoXG4gICAgICBib2R5Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgYm9keVswXSEudHlwZSA9PT0gJ3JlZGlyZWN0ZWRfc3RhdGVtZW50JyAmJlxuICAgICAgYm9keVswXSEuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmXG4gICAgICBib2R5WzBdIS5jaGlsZHJlblswXSEudHlwZSA9PT0gJ2ZpbGVfcmVkaXJlY3QnXG4gICAgKSB7XG4gICAgICBib2R5ID0gYm9keVswXSEuY2hpbGRyZW5cbiAgICB9XG4gICAgcmV0dXJuIG1rKFAsICdjb21tYW5kX3N1YnN0aXR1dGlvbicsIGRTdGFydCwgY2xvc2UuZW5kSW5kZXgsIFtcbiAgICAgIG9wZW4sXG4gICAgICAuLi5ib2R5LFxuICAgICAgY2xvc2UsXG4gICAgXSlcbiAgfVxuICBpZiAoYzEgPT09ICd7Jykge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNvbnN0IG9wZW4gPSBtayhQLCAnJHsnLCBkU3RhcnQsIFAuTC5iLCBbXSlcbiAgICBjb25zdCBpbm5lciA9IHBhcnNlRXhwYW5zaW9uQm9keShQKVxuICAgIGxldCBjbG9zZTogVHNOb2RlXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJ30nKSB7XG4gICAgICBjb25zdCBjU3RhcnQgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjbG9zZSA9IG1rKFAsICd9JywgY1N0YXJ0LCBQLkwuYiwgW10pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlID0gbWsoUCwgJ30nLCBQLkwuYiwgUC5MLmIsIFtdKVxuICAgIH1cbiAgICByZXR1cm4gbWsoUCwgJ2V4cGFuc2lvbicsIGRTdGFydCwgY2xvc2UuZW5kSW5kZXgsIFtvcGVuLCAuLi5pbm5lciwgY2xvc2VdKVxuICB9XG4gIC8vIFNpbXBsZSBleHBhbnNpb24gJFZBUiBvciAkPyAkJCAkQCBldGNcbiAgYWR2YW5jZShQLkwpXG4gIGNvbnN0IGRFbmQgPSBQLkwuYlxuICBjb25zdCBkb2xsYXIgPSBtayhQLCAnJCcsIGRTdGFydCwgZEVuZCwgW10pXG4gIGNvbnN0IG5jID0gcGVlayhQLkwpXG4gIC8vICRfIGlzIHNwZWNpYWxfdmFyaWFibGVfbmFtZSBvbmx5IHdoZW4gbm90IGZvbGxvd2VkIGJ5IG1vcmUgaWRlbnQgY2hhcnNcbiAgaWYgKG5jID09PSAnXycgJiYgIWlzSWRlbnRDaGFyKHBlZWsoUC5MLCAxKSkpIHtcbiAgICBjb25zdCB2U3RhcnQgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNvbnN0IHZuID0gbWsoUCwgJ3NwZWNpYWxfdmFyaWFibGVfbmFtZScsIHZTdGFydCwgUC5MLmIsIFtdKVxuICAgIHJldHVybiBtayhQLCAnc2ltcGxlX2V4cGFuc2lvbicsIGRTdGFydCwgUC5MLmIsIFtkb2xsYXIsIHZuXSlcbiAgfVxuICBpZiAoaXNJZGVudFN0YXJ0KG5jKSkge1xuICAgIGNvbnN0IHZTdGFydCA9IFAuTC5iXG4gICAgd2hpbGUgKGlzSWRlbnRDaGFyKHBlZWsoUC5MKSkpIGFkdmFuY2UoUC5MKVxuICAgIGNvbnN0IHZuID0gbWsoUCwgJ3ZhcmlhYmxlX25hbWUnLCB2U3RhcnQsIFAuTC5iLCBbXSlcbiAgICByZXR1cm4gbWsoUCwgJ3NpbXBsZV9leHBhbnNpb24nLCBkU3RhcnQsIFAuTC5iLCBbZG9sbGFyLCB2bl0pXG4gIH1cbiAgaWYgKGlzRGlnaXQobmMpKSB7XG4gICAgY29uc3QgdlN0YXJ0ID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCB2biA9IG1rKFAsICd2YXJpYWJsZV9uYW1lJywgdlN0YXJ0LCBQLkwuYiwgW10pXG4gICAgcmV0dXJuIG1rKFAsICdzaW1wbGVfZXhwYW5zaW9uJywgZFN0YXJ0LCBQLkwuYiwgW2RvbGxhciwgdm5dKVxuICB9XG4gIGlmIChTUEVDSUFMX1ZBUlMuaGFzKG5jKSkge1xuICAgIGNvbnN0IHZTdGFydCA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgdm4gPSBtayhQLCAnc3BlY2lhbF92YXJpYWJsZV9uYW1lJywgdlN0YXJ0LCBQLkwuYiwgW10pXG4gICAgcmV0dXJuIG1rKFAsICdzaW1wbGVfZXhwYW5zaW9uJywgZFN0YXJ0LCBQLkwuYiwgW2RvbGxhciwgdm5dKVxuICB9XG4gIC8vIEJhcmUgJCBcdTIwMTQganVzdCBhICQgbGVhZiAodHJlZS1zaXR0ZXIgdHJlYXRzIHRyYWlsaW5nICQgYXMgbGl0ZXJhbClcbiAgcmV0dXJuIGRvbGxhclxufVxuXG5mdW5jdGlvbiBwYXJzZUV4cGFuc2lvbkJvZHkoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZVtdIHtcbiAgY29uc3Qgb3V0OiBUc05vZGVbXSA9IFtdXG4gIHNraXBCbGFua3MoUC5MKVxuICAvLyBCaXphcnJlIGNhc2VzOiAkeyMhfSAkeyEjfSAkeyEjI30gJHshIyB9ICR7ISMjIH0gYWxsIGVtaXQgZW1wdHkgKGV4cGFuc2lvbilcbiAgLy8gXHUyMDE0IGJvdGggIyBhbmQgISBiZWNvbWUgYW5vbnltb3VzIG5vZGVzIHdoZW4gb25seSBjb21iaW5lZCB3aXRoIGVhY2ggb3RoZXJcbiAgLy8gYW5kIG9wdGlvbmFsIHRyYWlsaW5nIHNwYWNlIGJlZm9yZSB9LiBOb3RlICR7ISMjL30gZG9lcyBOT1QgbWF0Y2ggKGhhc1xuICAvLyBjb250ZW50IGFmdGVyKSwgc28gaXQgcGFyc2VzIG5vcm1hbGx5IGFzIChzcGVjaWFsX3ZhcmlhYmxlX25hbWUpKHJlZ2V4KS5cbiAge1xuICAgIGNvbnN0IGMwID0gcGVlayhQLkwpXG4gICAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgICBpZiAoYzAgPT09ICcjJyAmJiBjMSA9PT0gJyEnICYmIHBlZWsoUC5MLCAyKSA9PT0gJ30nKSB7XG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgcmV0dXJuIG91dFxuICAgIH1cbiAgICBpZiAoYzAgPT09ICchJyAmJiBjMSA9PT0gJyMnKSB7XG4gICAgICAvLyAkeyEjfSAkeyEjI30gd2l0aCBvcHRpb25hbCB0cmFpbGluZyBzcGFjZSB0aGVuIH1cbiAgICAgIGxldCBqID0gMlxuICAgICAgaWYgKHBlZWsoUC5MLCBqKSA9PT0gJyMnKSBqKytcbiAgICAgIGlmIChwZWVrKFAuTCwgaikgPT09ICcgJykgaisrXG4gICAgICBpZiAocGVlayhQLkwsIGopID09PSAnfScpIHtcbiAgICAgICAgd2hpbGUgKGotLSA+IDApIGFkdmFuY2UoUC5MKVxuICAgICAgICByZXR1cm4gb3V0XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIE9wdGlvbmFsICMgcHJlZml4IGZvciBsZW5ndGhcbiAgaWYgKHBlZWsoUC5MKSA9PT0gJyMnKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgb3V0LnB1c2gobWsoUCwgJyMnLCBzLCBQLkwuYiwgW10pKVxuICB9XG4gIC8vIE9wdGlvbmFsICEgcHJlZml4IGZvciBpbmRpcmVjdCBleHBhbnNpb246ICR7IXZhcm5hbWV9ICR7IXByZWZpeCp9ICR7IXByZWZpeEB9XG4gIC8vIE9ubHkgd2hlbiBmb2xsb3dlZCBieSBhbiBpZGVudGlmaWVyIFx1MjAxNCAkeyF9IGFsb25lIGlzIHNwZWNpYWwgdmFyICQhXG4gIC8vIEFsc28gPSB+IHByZWZpeGVzICh6c2gtc3R5bGUgJHs9dmFyfSAke352YXJ9KVxuICBjb25zdCBwYyA9IHBlZWsoUC5MKVxuICBpZiAoXG4gICAgKHBjID09PSAnIScgfHwgcGMgPT09ICc9JyB8fCBwYyA9PT0gJ34nKSAmJlxuICAgIChpc0lkZW50U3RhcnQocGVlayhQLkwsIDEpKSB8fCBpc0RpZ2l0KHBlZWsoUC5MLCAxKSkpXG4gICkge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIG91dC5wdXNoKG1rKFAsIHBjLCBzLCBQLkwuYiwgW10pKVxuICB9XG4gIHNraXBCbGFua3MoUC5MKVxuICAvLyBWYXJpYWJsZSBuYW1lXG4gIGlmIChpc0lkZW50U3RhcnQocGVlayhQLkwpKSkge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIHdoaWxlIChpc0lkZW50Q2hhcihwZWVrKFAuTCkpKSBhZHZhbmNlKFAuTClcbiAgICBvdXQucHVzaChtayhQLCAndmFyaWFibGVfbmFtZScsIHMsIFAuTC5iLCBbXSkpXG4gIH0gZWxzZSBpZiAoaXNEaWdpdChwZWVrKFAuTCkpKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgd2hpbGUgKGlzRGlnaXQocGVlayhQLkwpKSkgYWR2YW5jZShQLkwpXG4gICAgb3V0LnB1c2gobWsoUCwgJ3ZhcmlhYmxlX25hbWUnLCBzLCBQLkwuYiwgW10pKVxuICB9IGVsc2UgaWYgKFNQRUNJQUxfVkFSUy5oYXMocGVlayhQLkwpKSkge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIG91dC5wdXNoKG1rKFAsICdzcGVjaWFsX3ZhcmlhYmxlX25hbWUnLCBzLCBQLkwuYiwgW10pKVxuICB9XG4gIC8vIE9wdGlvbmFsIHN1YnNjcmlwdCBbaWR4XSBcdTIwMTQgcGFyc2VkIGFyaXRobWV0aWNhbGx5XG4gIGlmIChwZWVrKFAuTCkgPT09ICdbJykge1xuICAgIGNvbnN0IHZhck5vZGUgPSBvdXRbb3V0Lmxlbmd0aCAtIDFdXG4gICAgY29uc3QgYnJPcGVuID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBick9wZW5Ob2RlID0gbWsoUCwgJ1snLCBick9wZW4sIFAuTC5iLCBbXSlcbiAgICBjb25zdCBpZHggPSBwYXJzZVN1YnNjcmlwdEluZGV4SW5saW5lKFApXG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgY29uc3QgYnJDbG9zZSA9IFAuTC5iXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJ10nKSBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBickNsb3NlTm9kZSA9IG1rKFAsICddJywgYnJDbG9zZSwgUC5MLmIsIFtdKVxuICAgIGlmICh2YXJOb2RlKSB7XG4gICAgICBjb25zdCBraWRzID0gaWR4XG4gICAgICAgID8gW3Zhck5vZGUsIGJyT3Blbk5vZGUsIGlkeCwgYnJDbG9zZU5vZGVdXG4gICAgICAgIDogW3Zhck5vZGUsIGJyT3Blbk5vZGUsIGJyQ2xvc2VOb2RlXVxuICAgICAgb3V0W291dC5sZW5ndGggLSAxXSA9IG1rKFAsICdzdWJzY3JpcHQnLCB2YXJOb2RlLnN0YXJ0SW5kZXgsIFAuTC5iLCBraWRzKVxuICAgIH1cbiAgfVxuICBza2lwQmxhbmtzKFAuTClcbiAgLy8gVHJhaWxpbmcgKiBvciBAIGZvciBpbmRpcmVjdCBleHBhbnNpb24gKCR7IXByZWZpeCp9ICR7IXByZWZpeEB9KSBvclxuICAvLyBAb3BlcmF0b3IgZm9yIHBhcmFtZXRlciB0cmFuc2Zvcm1hdGlvbiAoJHt2YXJAVX0gJHt2YXJAUX0pIFx1MjAxNCBhbm9ueW1vdXNcbiAgY29uc3QgdGMgPSBwZWVrKFAuTClcbiAgaWYgKCh0YyA9PT0gJyonIHx8IHRjID09PSAnQCcpICYmIHBlZWsoUC5MLCAxKSA9PT0gJ30nKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgb3V0LnB1c2gobWsoUCwgdGMsIHMsIFAuTC5iLCBbXSkpXG4gICAgcmV0dXJuIG91dFxuICB9XG4gIGlmICh0YyA9PT0gJ0AnICYmIGlzSWRlbnRTdGFydChwZWVrKFAuTCwgMSkpKSB7XG4gICAgLy8gJHt2YXJAVX0gdHJhbnNmb3JtYXRpb24gXHUyMDE0IEAgaXMgYW5vbnltb3VzLCBjb25zdW1lIG9wIGNoYXIocylcbiAgICBjb25zdCBzID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBvdXQucHVzaChtayhQLCAnQCcsIHMsIFAuTC5iLCBbXSkpXG4gICAgd2hpbGUgKGlzSWRlbnRDaGFyKHBlZWsoUC5MKSkpIGFkdmFuY2UoUC5MKVxuICAgIHJldHVybiBvdXRcbiAgfVxuICAvLyBPcGVyYXRvciA6LSA6PSA6PyA6KyAtID0gPyArICMgIyMgJSAlJSAvIC8vIF4gXl4gLCAsLCBldGMuXG4gIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgLy8gQmFyZSBgOmAgc3Vic3RyaW5nIG9wZXJhdG9yICR7dmFyOm9mZjpsZW59IFx1MjAxNCBvZmZzZXQgYW5kIGxlbmd0aCBwYXJzZWRcbiAgLy8gYXJpdGhtZXRpY2FsbHkuIE11c3QgY29tZSBCRUZPUkUgdGhlIGdlbmVyaWMgb3BlcmF0b3IgaGFuZGxpbmcgc28gYChgIGFmdGVyXG4gIC8vIGA6YCBnb2VzIHRvIHBhcmVudGhlc2l6ZWRfZXhwcmVzc2lvbiBub3QgdGhlIGFycmF5IHBhdGguIGA6LWAgYDo9YCBgOj9gXG4gIC8vIGA6K2AgKG5vIHNwYWNlKSByZW1haW4gZGVmYXVsdC12YWx1ZSBvcGVyYXRvcnM7IGA6IC0xYCAod2l0aCBzcGFjZSBiZWZvcmVcbiAgLy8gLTEpIGlzIHN1YnN0cmluZyB3aXRoIG5lZ2F0aXZlIG9mZnNldC5cbiAgaWYgKGMgPT09ICc6Jykge1xuICAgIGNvbnN0IGMxID0gcGVlayhQLkwsIDEpXG4gICAgLy8gYDpcXG5gIG9yIGA6fWAgXHUyMDE0IGVtcHR5IHN1YnN0cmluZyBleHBhbnNpb24sIGVtaXRzIG5vdGhpbmcgKHZhcmlhYmxlX25hbWUgb25seSlcbiAgICBpZiAoYzEgPT09ICdcXG4nIHx8IGMxID09PSAnfScpIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgd2hpbGUgKHBlZWsoUC5MKSA9PT0gJ1xcbicpIGFkdmFuY2UoUC5MKVxuICAgICAgcmV0dXJuIG91dFxuICAgIH1cbiAgICBpZiAoYzEgIT09ICctJyAmJiBjMSAhPT0gJz0nICYmIGMxICE9PSAnPycgJiYgYzEgIT09ICcrJykge1xuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBza2lwQmxhbmtzKFAuTClcbiAgICAgIC8vIE9mZnNldCBcdTIwMTQgYXJpdGhtZXRpYy4gYC1OYCBhdCB0b3AgbGV2ZWwgaXMgYSBzaW5nbGUgbnVtYmVyIG5vZGUgcGVyXG4gICAgICAvLyB0cmVlLXNpdHRlcjsgaW5zaWRlIHBhcmVucyBpdCdzIHVuYXJ5X2V4cHJlc3Npb24obnVtYmVyKS5cbiAgICAgIGNvbnN0IG9mZkMgPSBwZWVrKFAuTClcbiAgICAgIGxldCBvZmY6IFRzTm9kZSB8IG51bGxcbiAgICAgIGlmIChvZmZDID09PSAnLScgJiYgaXNEaWdpdChwZWVrKFAuTCwgMSkpKSB7XG4gICAgICAgIGNvbnN0IG5zID0gUC5MLmJcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHdoaWxlIChpc0RpZ2l0KHBlZWsoUC5MKSkpIGFkdmFuY2UoUC5MKVxuICAgICAgICBvZmYgPSBtayhQLCAnbnVtYmVyJywgbnMsIFAuTC5iLCBbXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiA9IHBhcnNlQXJpdGhFeHByKFAsICc6fScsICd2YXInKVxuICAgICAgfVxuICAgICAgaWYgKG9mZikgb3V0LnB1c2gob2ZmKVxuICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICBpZiAocGVlayhQLkwpID09PSAnOicpIHtcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgICBjb25zdCBsZW5DID0gcGVlayhQLkwpXG4gICAgICAgIGxldCBsZW46IFRzTm9kZSB8IG51bGxcbiAgICAgICAgaWYgKGxlbkMgPT09ICctJyAmJiBpc0RpZ2l0KHBlZWsoUC5MLCAxKSkpIHtcbiAgICAgICAgICBjb25zdCBucyA9IFAuTC5iXG4gICAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgICAgd2hpbGUgKGlzRGlnaXQocGVlayhQLkwpKSkgYWR2YW5jZShQLkwpXG4gICAgICAgICAgbGVuID0gbWsoUCwgJ251bWJlcicsIG5zLCBQLkwuYiwgW10pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVuID0gcGFyc2VBcml0aEV4cHIoUCwgJ30nLCAndmFyJylcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuKSBvdXQucHVzaChsZW4pXG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0XG4gICAgfVxuICB9XG4gIGlmIChcbiAgICBjID09PSAnOicgfHxcbiAgICBjID09PSAnIycgfHxcbiAgICBjID09PSAnJScgfHxcbiAgICBjID09PSAnLycgfHxcbiAgICBjID09PSAnXicgfHxcbiAgICBjID09PSAnLCcgfHxcbiAgICBjID09PSAnLScgfHxcbiAgICBjID09PSAnPScgfHxcbiAgICBjID09PSAnPycgfHxcbiAgICBjID09PSAnKydcbiAgKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgICBsZXQgb3AgPSBjXG4gICAgaWYgKGMgPT09ICc6JyAmJiAoYzEgPT09ICctJyB8fCBjMSA9PT0gJz0nIHx8IGMxID09PSAnPycgfHwgYzEgPT09ICcrJykpIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBvcCA9IGMgKyBjMVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoYyA9PT0gJyMnIHx8IGMgPT09ICclJyB8fCBjID09PSAnLycgfHwgYyA9PT0gJ14nIHx8IGMgPT09ICcsJykgJiZcbiAgICAgIGMxID09PSBjXG4gICAgKSB7XG4gICAgICAvLyBEb3VibGVkIG9wZXJhdG9yczogIyMgJSUgLy8gXl4gLCxcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBvcCA9IGMgKyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgIH1cbiAgICBvdXQucHVzaChtayhQLCBvcCwgcywgUC5MLmIsIFtdKSlcbiAgICAvLyBSZXN0IGlzIHRoZSBkZWZhdWx0L3JlcGxhY2VtZW50IFx1MjAxNCBwYXJzZSBhcyB3b3JkIG9yIHJlZ2V4IHVudGlsIH1cbiAgICAvLyBQYXR0ZXJuLW1hdGNoaW5nIG9wZXJhdG9ycyAoIyAjIyAlICUlIC8gLy8gXiBeXiAsICwsKSBlbWl0IHJlZ2V4O1xuICAgIC8vIHZhbHVlLXN1YnN0aXR1dGlvbiBvcGVyYXRvcnMgKDotIDo9IDo/IDorIC0gPSA/ICsgOikgZW1pdCB3b3JkLlxuICAgIC8vIGAvYCBhbmQgYC8vYCBzcGxpdCBhdCBuZXh0IGAvYCBpbnRvIChyZWdleCkrKHdvcmQpIGZvciBwYXQvcmVwbC5cbiAgICBjb25zdCBpc1BhdHRlcm4gPVxuICAgICAgb3AgPT09ICcjJyB8fFxuICAgICAgb3AgPT09ICcjIycgfHxcbiAgICAgIG9wID09PSAnJScgfHxcbiAgICAgIG9wID09PSAnJSUnIHx8XG4gICAgICBvcCA9PT0gJy8nIHx8XG4gICAgICBvcCA9PT0gJy8vJyB8fFxuICAgICAgb3AgPT09ICdeJyB8fFxuICAgICAgb3AgPT09ICdeXicgfHxcbiAgICAgIG9wID09PSAnLCcgfHxcbiAgICAgIG9wID09PSAnLCwnXG4gICAgaWYgKG9wID09PSAnLycgfHwgb3AgPT09ICcvLycpIHtcbiAgICAgIC8vIE9wdGlvbmFsIC8jIG9yIC8lIGFuY2hvciBwcmVmaXggXHUyMDE0IGFub255bW91cyBub2RlXG4gICAgICBjb25zdCBhYyA9IHBlZWsoUC5MKVxuICAgICAgaWYgKGFjID09PSAnIycgfHwgYWMgPT09ICclJykge1xuICAgICAgICBjb25zdCBhU3RhcnQgPSBQLkwuYlxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgb3V0LnB1c2gobWsoUCwgYWMsIGFTdGFydCwgUC5MLmIsIFtdKSlcbiAgICAgIH1cbiAgICAgIC8vIFBhdHRlcm46IHBlciBncmFtbWFyIF9leHBhbnNpb25fcmVnZXhfcmVwbGFjZW1lbnQsIHBhdHRlcm4gaXNcbiAgICAgIC8vIGNob2ljZShyZWdleCwgc3RyaW5nLCBjbWRfc3ViLCBzZXEoc3RyaW5nLCByZWdleCkpLiBJZiBpdCBTVEFSVFNcbiAgICAgIC8vIHdpdGggXCIsIGVtaXQgKHN0cmluZykgYW5kIGFueSB0cmFpbGluZyBjaGFycyBiZWNvbWUgKHJlZ2V4KS5cbiAgICAgIC8vIGAke3YvL1wiJHtvbGR9XCIvfWAgXHUyMTkyIChzdHJpbmcoZXhwYW5zaW9uKSk7IGAke3YvL1wiJHtjfVwiXFwvL31gIFx1MjE5MlxuICAgICAgLy8gKHN0cmluZykocmVnZXgpLlxuICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gJ1wiJykge1xuICAgICAgICBvdXQucHVzaChwYXJzZURvdWJsZVF1b3RlZChQKSlcbiAgICAgICAgY29uc3QgdGFpbCA9IHBhcnNlRXhwYW5zaW9uUmVzdChQLCAncmVnZXgnLCB0cnVlKVxuICAgICAgICBpZiAodGFpbCkgb3V0LnB1c2godGFpbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gcGFyc2VFeHBhbnNpb25SZXN0KFAsICdyZWdleCcsIHRydWUpXG4gICAgICAgIGlmIChyZWdleCkgb3V0LnB1c2gocmVnZXgpXG4gICAgICB9XG4gICAgICBpZiAocGVlayhQLkwpID09PSAnLycpIHtcbiAgICAgICAgY29uc3Qgc2VwU3RhcnQgPSBQLkwuYlxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgb3V0LnB1c2gobWsoUCwgJy8nLCBzZXBTdGFydCwgUC5MLmIsIFtdKSlcbiAgICAgICAgLy8gUmVwbGFjZW1lbnQ6IHBlciBncmFtbWFyLCBjaG9pY2UgaW5jbHVkZXMgYHNlcShjbWRfc3ViLCB3b3JkKWBcbiAgICAgICAgLy8gd2hpY2ggZW1pdHMgVFdPIHNpYmxpbmdzIChub3QgY29uY2F0ZW5hdGlvbikuIEFsc28gYChgIGF0IHN0YXJ0XG4gICAgICAgIC8vIG9mIHJlcGxhY2VtZW50IGlzIGEgcmVndWxhciB3b3JkIGNoYXIsIE5PVCBhcnJheSBcdTIwMTQgdW5saWtlIGA6LWBcbiAgICAgICAgLy8gZGVmYXVsdC12YWx1ZSBjb250ZXh0LiBgJHt2LygvKEdlbnRvbyAke3h9LCB9YCByZXBsYWNlbWVudFxuICAgICAgICAvLyBgKEdlbnRvbyAke3h9LCBgIGlzIChjb25jYXRlbmF0aW9uICh3b3JkKShleHBhbnNpb24pKHdvcmQpKS5cbiAgICAgICAgY29uc3QgcmVwbCA9IHBhcnNlRXhwYW5zaW9uUmVzdChQLCAncmVwbHdvcmQnLCBmYWxzZSlcbiAgICAgICAgaWYgKHJlcGwpIHtcbiAgICAgICAgICAvLyBzZXEoY21kX3N1Yiwgd29yZCkgc3BlY2lhbCBjYXNlIFx1MjE5MiBzaWJsaW5ncy4gRGV0ZWN0ZWQgd2hlblxuICAgICAgICAgIC8vIHJlcGxhY2VtZW50IGlzIGEgY29uY2F0ZW5hdGlvbiBvZiBleGFjdGx5IDIgcGFydHMgd2l0aCBmaXJzdFxuICAgICAgICAgIC8vIGJlaW5nIGNvbW1hbmRfc3Vic3RpdHV0aW9uLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlcGwudHlwZSA9PT0gJ2NvbmNhdGVuYXRpb24nICYmXG4gICAgICAgICAgICByZXBsLmNoaWxkcmVuLmxlbmd0aCA9PT0gMiAmJlxuICAgICAgICAgICAgcmVwbC5jaGlsZHJlblswXSEudHlwZSA9PT0gJ2NvbW1hbmRfc3Vic3RpdHV0aW9uJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgb3V0LnB1c2gocmVwbC5jaGlsZHJlblswXSEpXG4gICAgICAgICAgICBvdXQucHVzaChyZXBsLmNoaWxkcmVuWzFdISlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0LnB1c2gocmVwbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wID09PSAnIycgfHwgb3AgPT09ICcjIycgfHwgb3AgPT09ICclJyB8fCBvcCA9PT0gJyUlJykge1xuICAgICAgLy8gUGF0dGVybi1yZW1vdmFsOiBwZXIgZ3JhbW1hciBfZXhwYW5zaW9uX3JlZ2V4LCBwYXR0ZXJuIGlzXG4gICAgICAvLyByZXBlYXQoY2hvaWNlKHJlZ2V4LCBzdHJpbmcsIHJhd19zdHJpbmcsICcpJykpLiBFYWNoIHF1b3RlL3N0cmluZ1xuICAgICAgLy8gaXMgYSBTSUJMSU5HLCBub3QgYWJzb3JiZWQgaW50byBvbmUgcmVnZXguIGAke2YlJ3N0cicqfWAgXHUyMTkyXG4gICAgICAvLyAocmF3X3N0cmluZykocmVnZXgpOyBgJHtmLydzdHInKn1gIChzbGFzaCkgc3RheXMgc2luZ2xlIHJlZ2V4LlxuICAgICAgZm9yIChjb25zdCBwIG9mIHBhcnNlRXhwYW5zaW9uUmVnZXhTZWdtZW50ZWQoUCkpIG91dC5wdXNoKHApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3QgPSBwYXJzZUV4cGFuc2lvblJlc3QoUCwgaXNQYXR0ZXJuID8gJ3JlZ2V4JyA6ICd3b3JkJywgZmFsc2UpXG4gICAgICBpZiAocmVzdCkgb3V0LnB1c2gocmVzdClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBwYXJzZUV4cGFuc2lvblJlc3QoXG4gIFA6IFBhcnNlU3RhdGUsXG4gIG5vZGVUeXBlOiBzdHJpbmcsXG4gIHN0b3BBdFNsYXNoOiBib29sZWFuLFxuKTogVHNOb2RlIHwgbnVsbCB7XG4gIC8vIERvbid0IHNraXBCbGFua3MgXHUyMDE0IGAke3ZhcjotIH1gIHNwYWNlIElTIHRoZSB3b3JkLiBTdG9wIGF0IH0gb3IgbmV3bGluZVxuICAvLyAoYCR7dmFyOlxcbn1gIGVtaXRzIG5vIHdvcmQpLiBzdG9wQXRTbGFzaD10cnVlIHN0b3BzIGF0IGAvYCBmb3IgcGF0L3JlcGxcbiAgLy8gc3BsaXQgaW4gJHt2YXIvcGF0L3JlcGx9LiBub2RlVHlwZSAncmVwbHdvcmQnIGlzIHdvcmQtbW9kZSBmb3IgdGhlXG4gIC8vIHJlcGxhY2VtZW50IGluIGAvYCBgLy9gIFx1MjAxNCBzYW1lIGFzICd3b3JkJyBidXQgYChgIGlzIE5PVCBhcnJheS5cbiAgY29uc3Qgc3RhcnQgPSBQLkwuYlxuICAvLyBWYWx1ZS1zdWJzdGl0dXRpb24gUkhTIHN0YXJ0aW5nIHdpdGggYChgIHBhcnNlcyBhcyBhcnJheTogJHt2YXI6LSh4KX0gXHUyMTkyXG4gIC8vIChleHBhbnNpb24gKHZhcmlhYmxlX25hbWUpIChhcnJheSAod29yZCkpKS4gT25seSBmb3IgJ3dvcmQnIGNvbnRleHQgKG5vdFxuICAvLyBwYXR0ZXJuLW1hdGNoaW5nIG9wZXJhdG9ycyB3aGljaCBlbWl0IHJlZ2V4LCBhbmQgbm90ICdyZXBsd29yZCcgd2hlcmUgYChgXG4gIC8vIGlzIGEgcmVndWxhciBjaGFyIHBlciBncmFtbWFyIGBfZXhwYW5zaW9uX3JlZ2V4X3JlcGxhY2VtZW50YCkuXG4gIGlmIChub2RlVHlwZSA9PT0gJ3dvcmQnICYmIHBlZWsoUC5MKSA9PT0gJygnKSB7XG4gICAgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgb3BlbiA9IG1rKFAsICcoJywgc3RhcnQsIFAuTC5iLCBbXSlcbiAgICBjb25zdCBlbGVtczogVHNOb2RlW10gPSBbb3Blbl1cbiAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuKSB7XG4gICAgICBza2lwQmxhbmtzKFAuTClcbiAgICAgIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgICAgIGlmIChjID09PSAnKScgfHwgYyA9PT0gJ30nIHx8IGMgPT09ICdcXG4nIHx8IGMgPT09ICcnKSBicmVha1xuICAgICAgY29uc3Qgd1N0YXJ0ID0gUC5MLmJcbiAgICAgIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICAgICAgY29uc3Qgd2MgPSBwZWVrKFAuTClcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHdjID09PSAnKScgfHxcbiAgICAgICAgICB3YyA9PT0gJ30nIHx8XG4gICAgICAgICAgd2MgPT09ICcgJyB8fFxuICAgICAgICAgIHdjID09PSAnXFx0JyB8fFxuICAgICAgICAgIHdjID09PSAnXFxuJyB8fFxuICAgICAgICAgIHdjID09PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgfVxuICAgICAgaWYgKFAuTC5iID4gd1N0YXJ0KSBlbGVtcy5wdXNoKG1rKFAsICd3b3JkJywgd1N0YXJ0LCBQLkwuYiwgW10pKVxuICAgICAgZWxzZSBicmVha1xuICAgIH1cbiAgICBpZiAocGVlayhQLkwpID09PSAnKScpIHtcbiAgICAgIGNvbnN0IGNTdGFydCA9IFAuTC5iXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGVsZW1zLnB1c2gobWsoUCwgJyknLCBjU3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgfVxuICAgIHdoaWxlIChwZWVrKFAuTCkgPT09ICdcXG4nKSBhZHZhbmNlKFAuTClcbiAgICByZXR1cm4gbWsoUCwgJ2FycmF5Jywgc3RhcnQsIFAuTC5iLCBlbGVtcylcbiAgfVxuICAvLyBSRUdFWCBtb2RlOiBmbGF0IHNpbmdsZS1zcGFuIHNjYW4uIFF1b3RlcyBhcmUgb3BhcXVlIChza2lwcGVkIHBhc3Qgc29cbiAgLy8gYC9gIGluc2lkZSB0aGVtIGRvZXNuJ3QgYnJlYWsgc3RvcEF0U2xhc2gpLCBidXQgTk9UIGVtaXR0ZWQgYXMgc2VwYXJhdGVcbiAgLy8gbm9kZXMgXHUyMDE0IHRoZSBlbnRpcmUgcmFuZ2UgYmVjb21lcyBvbmUgcmVnZXggbm9kZS5cbiAgaWYgKG5vZGVUeXBlID09PSAncmVnZXgnKSB7XG4gICAgbGV0IGJyYWNlRGVwdGggPSAwXG4gICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbikge1xuICAgICAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICAgICAgaWYgKGMgPT09ICdcXG4nKSBicmVha1xuICAgICAgaWYgKGJyYWNlRGVwdGggPT09IDApIHtcbiAgICAgICAgaWYgKGMgPT09ICd9JykgYnJlYWtcbiAgICAgICAgaWYgKHN0b3BBdFNsYXNoICYmIGMgPT09ICcvJykgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmIChjID09PSAnXFxcXCcgJiYgUC5MLmkgKyAxIDwgUC5MLmxlbikge1xuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIikge1xuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbiAmJiBwZWVrKFAuTCkgIT09IGMpIHtcbiAgICAgICAgICBpZiAocGVlayhQLkwpID09PSAnXFxcXCcgJiYgUC5MLmkgKyAxIDwgUC5MLmxlbikgYWR2YW5jZShQLkwpXG4gICAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gYykgYWR2YW5jZShQLkwpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBTa2lwIHBhc3QgbmVzdGVkICR7Li4ufSAkKC4uLikgJFsuLi5dIHNvIHRoZWlyIH0gLyBkb24ndCB0ZXJtaW5hdGUgdXNcbiAgICAgIGlmIChjID09PSAnJCcpIHtcbiAgICAgICAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgICAgICAgaWYgKGMxID09PSAneycpIHtcbiAgICAgICAgICBsZXQgZCA9IDBcbiAgICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgICBkKytcbiAgICAgICAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIGQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuYyA9IHBlZWsoUC5MKVxuICAgICAgICAgICAgaWYgKG5jID09PSAneycpIGQrK1xuICAgICAgICAgICAgZWxzZSBpZiAobmMgPT09ICd9JykgZC0tXG4gICAgICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYzEgPT09ICcoJykge1xuICAgICAgICAgIGxldCBkID0gMFxuICAgICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICAgIGQrK1xuICAgICAgICAgIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4gJiYgZCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5jID0gcGVlayhQLkwpXG4gICAgICAgICAgICBpZiAobmMgPT09ICcoJykgZCsrXG4gICAgICAgICAgICBlbHNlIGlmIChuYyA9PT0gJyknKSBkLS1cbiAgICAgICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYyA9PT0gJ3snKSBicmFjZURlcHRoKytcbiAgICAgIGVsc2UgaWYgKGMgPT09ICd9JyAmJiBicmFjZURlcHRoID4gMCkgYnJhY2VEZXB0aC0tXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICB9XG4gICAgY29uc3QgZW5kID0gUC5MLmJcbiAgICB3aGlsZSAocGVlayhQLkwpID09PSAnXFxuJykgYWR2YW5jZShQLkwpXG4gICAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG1rKFAsICdyZWdleCcsIHN0YXJ0LCBlbmQsIFtdKVxuICB9XG4gIC8vIFdPUkQgbW9kZTogc2VnbWVudGluZyBwYXJzZXIgXHUyMDE0IHJlY29nbml6ZSBuZXN0ZWQgJHsuLi59LCAkKC4uLiksICQnLi4uJyxcbiAgLy8gXCIuLi5cIiwgJy4uLicsICRpZGVudCwgPCguLi4pLz4oLi4uKTsgYmFyZSBjaGFycyBhY2N1bXVsYXRlIGludG8gd29yZFxuICAvLyBzZWdtZW50cy4gTXVsdGlwbGUgcGFydHMgXHUyMTkyIHdyYXBwZWQgaW4gY29uY2F0ZW5hdGlvbi5cbiAgY29uc3QgcGFydHM6IFRzTm9kZVtdID0gW11cbiAgbGV0IHNlZ1N0YXJ0ID0gUC5MLmJcbiAgbGV0IGJyYWNlRGVwdGggPSAwXG4gIGNvbnN0IGZsdXNoU2VnID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChQLkwuYiA+IHNlZ1N0YXJ0KSB7XG4gICAgICBwYXJ0cy5wdXNoKG1rKFAsICd3b3JkJywgc2VnU3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgfVxuICB9XG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKGMgPT09ICdcXG4nKSBicmVha1xuICAgIGlmIChicmFjZURlcHRoID09PSAwKSB7XG4gICAgICBpZiAoYyA9PT0gJ30nKSBicmVha1xuICAgICAgaWYgKHN0b3BBdFNsYXNoICYmIGMgPT09ICcvJykgYnJlYWtcbiAgICB9XG4gICAgaWYgKGMgPT09ICdcXFxcJyAmJiBQLkwuaSArIDEgPCBQLkwubGVuKSB7XG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgICBpZiAoYyA9PT0gJyQnKSB7XG4gICAgICBpZiAoYzEgPT09ICd7JyB8fCBjMSA9PT0gJygnIHx8IGMxID09PSAnWycpIHtcbiAgICAgICAgZmx1c2hTZWcoKVxuICAgICAgICBjb25zdCBleHAgPSBwYXJzZURvbGxhckxpa2UoUClcbiAgICAgICAgaWYgKGV4cCkgcGFydHMucHVzaChleHApXG4gICAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChjMSA9PT0gXCInXCIpIHtcbiAgICAgICAgLy8gJCcuLi4nIEFOU0ktQyBzdHJpbmdcbiAgICAgICAgZmx1c2hTZWcoKVxuICAgICAgICBjb25zdCBhU3RhcnQgPSBQLkwuYlxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4gJiYgcGVlayhQLkwpICE9PSBcIidcIikge1xuICAgICAgICAgIGlmIChwZWVrKFAuTCkgPT09ICdcXFxcJyAmJiBQLkwuaSArIDEgPCBQLkwubGVuKSBhZHZhbmNlKFAuTClcbiAgICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVlayhQLkwpID09PSBcIidcIikgYWR2YW5jZShQLkwpXG4gICAgICAgIHBhcnRzLnB1c2gobWsoUCwgJ2Fuc2lfY19zdHJpbmcnLCBhU3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChpc0lkZW50U3RhcnQoYzEpIHx8IGlzRGlnaXQoYzEpIHx8IFNQRUNJQUxfVkFSUy5oYXMoYzEpKSB7XG4gICAgICAgIGZsdXNoU2VnKClcbiAgICAgICAgY29uc3QgZXhwID0gcGFyc2VEb2xsYXJMaWtlKFApXG4gICAgICAgIGlmIChleHApIHBhcnRzLnB1c2goZXhwKVxuICAgICAgICBzZWdTdGFydCA9IFAuTC5iXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjID09PSAnXCInKSB7XG4gICAgICBmbHVzaFNlZygpXG4gICAgICBwYXJ0cy5wdXNoKHBhcnNlRG91YmxlUXVvdGVkKFApKVxuICAgICAgc2VnU3RhcnQgPSBQLkwuYlxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICBmbHVzaFNlZygpXG4gICAgICBjb25zdCByU3RhcnQgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIHBlZWsoUC5MKSAhPT0gXCInXCIpIGFkdmFuY2UoUC5MKVxuICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gXCInXCIpIGFkdmFuY2UoUC5MKVxuICAgICAgcGFydHMucHVzaChtayhQLCAncmF3X3N0cmluZycsIHJTdGFydCwgUC5MLmIsIFtdKSlcbiAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmICgoYyA9PT0gJzwnIHx8IGMgPT09ICc+JykgJiYgYzEgPT09ICcoJykge1xuICAgICAgZmx1c2hTZWcoKVxuICAgICAgY29uc3QgcHMgPSBwYXJzZVByb2Nlc3NTdWIoUClcbiAgICAgIGlmIChwcykgcGFydHMucHVzaChwcylcbiAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjID09PSAnYCcpIHtcbiAgICAgIGZsdXNoU2VnKClcbiAgICAgIGNvbnN0IGJ0ID0gcGFyc2VCYWNrdGljayhQKVxuICAgICAgaWYgKGJ0KSBwYXJ0cy5wdXNoKGJ0KVxuICAgICAgc2VnU3RhcnQgPSBQLkwuYlxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgLy8gQnJhY2UgdHJhY2tpbmcgc28gbmVzdGVkIHthLGJ9IGJyYWNlLWV4cGFuc2lvbiBjaGFycyBkb24ndCBwcmVtYXR1cmVseVxuICAgIC8vIHRlcm1pbmF0ZSAocmFyZSwgYnV0IHRoZSBgP2AgaW4gYCR7Y29uZH0/IChgIHNob3VsZCBiZSB0cmVhdGVkIGFzIHdvcmQpLlxuICAgIGlmIChjID09PSAneycpIGJyYWNlRGVwdGgrK1xuICAgIGVsc2UgaWYgKGMgPT09ICd9JyAmJiBicmFjZURlcHRoID4gMCkgYnJhY2VEZXB0aC0tXG4gICAgYWR2YW5jZShQLkwpXG4gIH1cbiAgZmx1c2hTZWcoKVxuICAvLyBDb25zdW1lIHRyYWlsaW5nIG5ld2xpbmVzIGJlZm9yZSB9IHNvIGNhbGxlciBzZWVzIH1cbiAgd2hpbGUgKHBlZWsoUC5MKSA9PT0gJ1xcbicpIGFkdmFuY2UoUC5MKVxuICAvLyBUcmVlLXNpdHRlciBza2lwcyBsZWFkaW5nIHdoaXRlc3BhY2UgKGV4dHJhcykgaW4gZXhwYW5zaW9uIFJIUyB3aGVuXG4gIC8vIHRoZXJlJ3MgY29udGVudCBhZnRlcjogYCR7MisgJHsyfX1gIFx1MjE5MiBqdXN0IChleHBhbnNpb24pLiBCdXQgYCR7djotIH1gXG4gIC8vIChzcGFjZS1vbmx5IFJIUykga2VlcHMgdGhlIHNwYWNlIGFzICh3b3JkKS4gU28gZHJvcCBsZWFkaW5nIHdoaXRlc3BhY2UtXG4gIC8vIG9ubHkgd29yZCBzZWdtZW50IGlmIGl0J3MgTk9UIHRoZSBvbmx5IHBhcnQuXG4gIGlmIChcbiAgICBwYXJ0cy5sZW5ndGggPiAxICYmXG4gICAgcGFydHNbMF0hLnR5cGUgPT09ICd3b3JkJyAmJlxuICAgIC9eWyBcXHRdKyQvLnRlc3QocGFydHNbMF0hLnRleHQpXG4gICkge1xuICAgIHBhcnRzLnNoaWZ0KClcbiAgfVxuICBpZiAocGFydHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSByZXR1cm4gcGFydHNbMF0hXG4gIC8vIE11bHRpcGxlIHBhcnRzOiB3cmFwIGluIGNvbmNhdGVuYXRpb24gKHdvcmQgbW9kZSBrZWVwcyBjb25jYXQgd3JhcHBpbmc7XG4gIC8vIHJlZ2V4IG1vZGUgYWxzbyBjb25jYXRzIHBlciB0cmVlLXNpdHRlciBmb3IgbWl4ZWQgcXVvdGUrZ2xvYiBwYXR0ZXJucykuXG4gIGNvbnN0IGxhc3QgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSFcbiAgcmV0dXJuIG1rKFAsICdjb25jYXRlbmF0aW9uJywgcGFydHNbMF0hLnN0YXJ0SW5kZXgsIGxhc3QuZW5kSW5kZXgsIHBhcnRzKVxufVxuXG4vLyBQYXR0ZXJuIGZvciAjICMjICUgJSUgb3BlcmF0b3JzIFx1MjAxNCBwZXIgZ3JhbW1hciBfZXhwYW5zaW9uX3JlZ2V4OlxuLy8gcmVwZWF0KGNob2ljZShyZWdleCwgc3RyaW5nLCByYXdfc3RyaW5nLCAnKScsIC9cXHMrL1x1MjE5MnJlZ2V4KSkuIEVhY2ggcXVvdGVcbi8vIGJlY29tZXMgYSBTSUJMSU5HIG5vZGUsIG5vdCBhYnNvcmJlZC4gYCR7ZiUnc3RyJyp9YCBcdTIxOTIgKHJhd19zdHJpbmcpKHJlZ2V4KS5cbmZ1bmN0aW9uIHBhcnNlRXhwYW5zaW9uUmVnZXhTZWdtZW50ZWQoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZVtdIHtcbiAgY29uc3Qgb3V0OiBUc05vZGVbXSA9IFtdXG4gIGxldCBzZWdTdGFydCA9IFAuTC5iXG4gIGNvbnN0IGZsdXNoUmVnZXggPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKFAuTC5iID4gc2VnU3RhcnQpIG91dC5wdXNoKG1rKFAsICdyZWdleCcsIHNlZ1N0YXJ0LCBQLkwuYiwgW10pKVxuICB9XG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKGMgPT09ICd9JyB8fCBjID09PSAnXFxuJykgYnJlYWtcbiAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIFAuTC5pICsgMSA8IFAuTC5sZW4pIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgZmx1c2hSZWdleCgpXG4gICAgICBvdXQucHVzaChwYXJzZURvdWJsZVF1b3RlZChQKSlcbiAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgZmx1c2hSZWdleCgpXG4gICAgICBjb25zdCByU3RhcnQgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIHBlZWsoUC5MKSAhPT0gXCInXCIpIGFkdmFuY2UoUC5MKVxuICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gXCInXCIpIGFkdmFuY2UoUC5MKVxuICAgICAgb3V0LnB1c2gobWsoUCwgJ3Jhd19zdHJpbmcnLCByU3RhcnQsIFAuTC5iLCBbXSkpXG4gICAgICBzZWdTdGFydCA9IFAuTC5iXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICAvLyBOZXN0ZWQgJHsuLi59ICQoLi4uKSBcdTIwMTQgb3BhcXVlIHNjYW4gc28gdGhlaXIgfSBkb2Vzbid0IHRlcm1pbmF0ZSB1c1xuICAgIGlmIChjID09PSAnJCcpIHtcbiAgICAgIGNvbnN0IGMxID0gcGVlayhQLkwsIDEpXG4gICAgICBpZiAoYzEgPT09ICd7Jykge1xuICAgICAgICBsZXQgZCA9IDFcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICB3aGlsZSAoUC5MLmkgPCBQLkwubGVuICYmIGQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgbmMgPSBwZWVrKFAuTClcbiAgICAgICAgICBpZiAobmMgPT09ICd7JykgZCsrXG4gICAgICAgICAgZWxzZSBpZiAobmMgPT09ICd9JykgZC0tXG4gICAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChjMSA9PT0gJygnKSB7XG4gICAgICAgIGxldCBkID0gMVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4gJiYgZCA+IDApIHtcbiAgICAgICAgICBjb25zdCBuYyA9IHBlZWsoUC5MKVxuICAgICAgICAgIGlmIChuYyA9PT0gJygnKSBkKytcbiAgICAgICAgICBlbHNlIGlmIChuYyA9PT0gJyknKSBkLS1cbiAgICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cbiAgICBhZHZhbmNlKFAuTClcbiAgfVxuICBmbHVzaFJlZ2V4KClcbiAgd2hpbGUgKHBlZWsoUC5MKSA9PT0gJ1xcbicpIGFkdmFuY2UoUC5MKVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHBhcnNlQmFja3RpY2soUDogUGFyc2VTdGF0ZSk6IFRzTm9kZSB8IG51bGwge1xuICBjb25zdCBzdGFydCA9IFAuTC5iXG4gIGFkdmFuY2UoUC5MKVxuICBjb25zdCBvcGVuID0gbWsoUCwgJ2AnLCBzdGFydCwgUC5MLmIsIFtdKVxuICBQLmluQmFja3RpY2srK1xuICAvLyBQYXJzZSBzdGF0ZW1lbnRzIGlubGluZSBcdTIwMTQgc3RvcCBhdCBjbG9zaW5nIGJhY2t0aWNrXG4gIGNvbnN0IGJvZHk6IFRzTm9kZVtdID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBpZiAocGVlayhQLkwpID09PSAnYCcgfHwgcGVlayhQLkwpID09PSAnJykgYnJlYWtcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmICh0LnR5cGUgPT09ICdFT0YnIHx8IHQudHlwZSA9PT0gJ0JBQ0tUSUNLJykge1xuICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBpZiAodC50eXBlID09PSAnTkVXTElORScpIGNvbnRpbnVlXG4gICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgY29uc3Qgc3RtdCA9IHBhcnNlQW5kT3IoUClcbiAgICBpZiAoIXN0bXQpIGJyZWFrXG4gICAgYm9keS5wdXNoKHN0bXQpXG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJ2AnKSBicmVha1xuICAgIGNvbnN0IHNhdmUyID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3Qgc2VwID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gICAgaWYgKHNlcC50eXBlID09PSAnT1AnICYmIChzZXAudmFsdWUgPT09ICc7JyB8fCBzZXAudmFsdWUgPT09ICcmJykpIHtcbiAgICAgIGJvZHkucHVzaChsZWFmKFAsIHNlcC52YWx1ZSwgc2VwKSlcbiAgICB9IGVsc2UgaWYgKHNlcC50eXBlICE9PSAnTkVXTElORScpIHtcbiAgICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlMilcbiAgICB9XG4gIH1cbiAgUC5pbkJhY2t0aWNrLS1cbiAgbGV0IGNsb3NlOiBUc05vZGVcbiAgaWYgKHBlZWsoUC5MKSA9PT0gJ2AnKSB7XG4gICAgY29uc3QgY1N0YXJ0ID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjbG9zZSA9IG1rKFAsICdgJywgY1N0YXJ0LCBQLkwuYiwgW10pXG4gIH0gZWxzZSB7XG4gICAgY2xvc2UgPSBtayhQLCAnYCcsIFAuTC5iLCBQLkwuYiwgW10pXG4gIH1cbiAgLy8gRW1wdHkgYmFja3RpY2tzICh3aGl0ZXNwYWNlL25ld2xpbmUgb25seSkgYXJlIGVsaWRlZCBlbnRpcmVseSBieVxuICAvLyB0cmVlLXNpdHRlciBcdTIwMTQgdXNlZCBhcyBhIGxpbmUtY29udGludWF0aW9uIGhhY2s6IFwiZm9vXCJgPG5ld2xpbmU+YFwiYmFyXCJcbiAgLy8gXHUyMTkyIChjb25jYXRlbmF0aW9uIChzdHJpbmcpIChzdHJpbmcpKSB3aXRoIG5vIGNvbW1hbmRfc3Vic3RpdHV0aW9uLlxuICBpZiAoYm9keS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG4gIHJldHVybiBtayhQLCAnY29tbWFuZF9zdWJzdGl0dXRpb24nLCBzdGFydCwgY2xvc2UuZW5kSW5kZXgsIFtcbiAgICBvcGVuLFxuICAgIC4uLmJvZHksXG4gICAgY2xvc2UsXG4gIF0pXG59XG5cbmZ1bmN0aW9uIHBhcnNlSWYoUDogUGFyc2VTdGF0ZSwgaWZUb2s6IFRva2VuKTogVHNOb2RlIHtcbiAgY29uc3QgaWZLdyA9IGxlYWYoUCwgJ2lmJywgaWZUb2spXG4gIGNvbnN0IGtpZHM6IFRzTm9kZVtdID0gW2lmS3ddXG4gIGNvbnN0IGNvbmQgPSBwYXJzZVN0YXRlbWVudHMoUCwgbnVsbClcbiAga2lkcy5wdXNoKC4uLmNvbmQpXG4gIGNvbnN1bWVLZXl3b3JkKFAsICd0aGVuJywga2lkcylcbiAgY29uc3QgYm9keSA9IHBhcnNlU3RhdGVtZW50cyhQLCBudWxsKVxuICBraWRzLnB1c2goLi4uYm9keSlcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmICh0LnR5cGUgPT09ICdXT1JEJyAmJiB0LnZhbHVlID09PSAnZWxpZicpIHtcbiAgICAgIGNvbnN0IGVLdyA9IGxlYWYoUCwgJ2VsaWYnLCB0KVxuICAgICAgY29uc3QgZUNvbmQgPSBwYXJzZVN0YXRlbWVudHMoUCwgbnVsbClcbiAgICAgIGNvbnN0IGVLaWRzOiBUc05vZGVbXSA9IFtlS3csIC4uLmVDb25kXVxuICAgICAgY29uc3VtZUtleXdvcmQoUCwgJ3RoZW4nLCBlS2lkcylcbiAgICAgIGNvbnN0IGVCb2R5ID0gcGFyc2VTdGF0ZW1lbnRzKFAsIG51bGwpXG4gICAgICBlS2lkcy5wdXNoKC4uLmVCb2R5KVxuICAgICAgY29uc3QgbGFzdCA9IGVLaWRzW2VLaWRzLmxlbmd0aCAtIDFdIVxuICAgICAga2lkcy5wdXNoKG1rKFAsICdlbGlmX2NsYXVzZScsIGVLdy5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBlS2lkcykpXG4gICAgfSBlbHNlIGlmICh0LnR5cGUgPT09ICdXT1JEJyAmJiB0LnZhbHVlID09PSAnZWxzZScpIHtcbiAgICAgIGNvbnN0IGVsS3cgPSBsZWFmKFAsICdlbHNlJywgdClcbiAgICAgIGNvbnN0IGVsQm9keSA9IHBhcnNlU3RhdGVtZW50cyhQLCBudWxsKVxuICAgICAgY29uc3QgbGFzdCA9IGVsQm9keS5sZW5ndGggPiAwID8gZWxCb2R5W2VsQm9keS5sZW5ndGggLSAxXSEgOiBlbEt3XG4gICAgICBraWRzLnB1c2goXG4gICAgICAgIG1rKFAsICdlbHNlX2NsYXVzZScsIGVsS3cuc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgW2VsS3csIC4uLmVsQm9keV0pLFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIGNvbnN1bWVLZXl3b3JkKFAsICdmaScsIGtpZHMpXG4gIGNvbnN0IGxhc3QgPSBraWRzW2tpZHMubGVuZ3RoIC0gMV0hXG4gIHJldHVybiBtayhQLCAnaWZfc3RhdGVtZW50JywgaWZLdy5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBraWRzKVxufVxuXG5mdW5jdGlvbiBwYXJzZVdoaWxlKFA6IFBhcnNlU3RhdGUsIGt3VG9rOiBUb2tlbik6IFRzTm9kZSB7XG4gIGNvbnN0IGt3ID0gbGVhZihQLCBrd1Rvay52YWx1ZSwga3dUb2spXG4gIGNvbnN0IGtpZHM6IFRzTm9kZVtdID0gW2t3XVxuICBjb25zdCBjb25kID0gcGFyc2VTdGF0ZW1lbnRzKFAsIG51bGwpXG4gIGtpZHMucHVzaCguLi5jb25kKVxuICBjb25zdCBkZyA9IHBhcnNlRG9Hcm91cChQKVxuICBpZiAoZGcpIGtpZHMucHVzaChkZylcbiAgY29uc3QgbGFzdCA9IGtpZHNba2lkcy5sZW5ndGggLSAxXSFcbiAgcmV0dXJuIG1rKFAsICd3aGlsZV9zdGF0ZW1lbnQnLCBrdy5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBraWRzKVxufVxuXG5mdW5jdGlvbiBwYXJzZUZvcihQOiBQYXJzZVN0YXRlLCBmb3JUb2s6IFRva2VuKTogVHNOb2RlIHtcbiAgY29uc3QgZm9yS3cgPSBsZWFmKFAsIGZvclRvay52YWx1ZSwgZm9yVG9rKVxuICBza2lwQmxhbmtzKFAuTClcbiAgLy8gQy1zdHlsZSBmb3IgKCggOyA7ICkpIFx1MjAxNCBvbmx5IGZvciBgZm9yYCwgbm90IGBzZWxlY3RgXG4gIGlmIChmb3JUb2sudmFsdWUgPT09ICdmb3InICYmIHBlZWsoUC5MKSA9PT0gJygnICYmIHBlZWsoUC5MLCAxKSA9PT0gJygnKSB7XG4gICAgY29uc3Qgb1N0YXJ0ID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBvcGVuID0gbWsoUCwgJygoJywgb1N0YXJ0LCBQLkwuYiwgW10pXG4gICAgY29uc3Qga2lkczogVHNOb2RlW10gPSBbZm9yS3csIG9wZW5dXG4gICAgLy8gaW5pdDsgY29uZDsgdXBkYXRlIFx1MjAxNCBhbGwgdGhyZWUgdXNlICdhc3NpZ24nIG1vZGUgc28gYGMgPSBleHByYCBlbWl0c1xuICAgIC8vIHZhcmlhYmxlX2Fzc2lnbm1lbnQsIHdoaWxlIGJhcmUgaWRlbnRzIChjIGluIGBjPD01YCkgXHUyMTkyIHdvcmQuIEVhY2hcbiAgICAvLyBjbGF1c2UgbWF5IGJlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3QuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAzOyBrKyspIHtcbiAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgY29uc3QgZXMgPSBwYXJzZUFyaXRoQ29tbWFMaXN0KFAsIGsgPCAyID8gJzsnIDogJykpJywgJ2Fzc2lnbicpXG4gICAgICBraWRzLnB1c2goLi4uZXMpXG4gICAgICBpZiAoayA8IDIpIHtcbiAgICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gJzsnKSB7XG4gICAgICAgICAgY29uc3QgcyA9IFAuTC5iXG4gICAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgICAga2lkcy5wdXNoKG1rKFAsICc7JywgcywgUC5MLmIsIFtdKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBpZiAocGVlayhQLkwpID09PSAnKScgJiYgcGVlayhQLkwsIDEpID09PSAnKScpIHtcbiAgICAgIGNvbnN0IGNTdGFydCA9IFAuTC5iXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAga2lkcy5wdXNoKG1rKFAsICcpKScsIGNTdGFydCwgUC5MLmIsIFtdKSlcbiAgICB9XG4gICAgLy8gT3B0aW9uYWwgOyBvciBuZXdsaW5lXG4gICAgY29uc3Qgc2F2ZSA9IHNhdmVMZXgoUC5MKVxuICAgIGNvbnN0IHNlcCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGlmIChzZXAudHlwZSA9PT0gJ09QJyAmJiBzZXAudmFsdWUgPT09ICc7Jykge1xuICAgICAga2lkcy5wdXNoKGxlYWYoUCwgJzsnLCBzZXApKVxuICAgIH0gZWxzZSBpZiAoc2VwLnR5cGUgIT09ICdORVdMSU5FJykge1xuICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgfVxuICAgIGNvbnN0IGRnID0gcGFyc2VEb0dyb3VwKFApXG4gICAgaWYgKGRnKSB7XG4gICAgICBraWRzLnB1c2goZGcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEMtc3R5bGUgZm9yIGNhbiBhbHNvIHVzZSBgeyAuLi4gfWAgYm9keSBpbnN0ZWFkIG9mIGBkbyAuLi4gZG9uZWBcbiAgICAgIHNraXBOZXdsaW5lcyhQKVxuICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICBpZiAocGVlayhQLkwpID09PSAneycpIHtcbiAgICAgICAgY29uc3QgYk9wZW4gPSBQLkwuYlxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgY29uc3QgYnJhY2UgPSBtayhQLCAneycsIGJPcGVuLCBQLkwuYiwgW10pXG4gICAgICAgIGNvbnN0IGJvZHkgPSBwYXJzZVN0YXRlbWVudHMoUCwgJ30nKVxuICAgICAgICBsZXQgYkNsb3NlOiBUc05vZGVcbiAgICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gJ30nKSB7XG4gICAgICAgICAgY29uc3QgY3MgPSBQLkwuYlxuICAgICAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgICAgIGJDbG9zZSA9IG1rKFAsICd9JywgY3MsIFAuTC5iLCBbXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiQ2xvc2UgPSBtayhQLCAnfScsIFAuTC5iLCBQLkwuYiwgW10pXG4gICAgICAgIH1cbiAgICAgICAga2lkcy5wdXNoKFxuICAgICAgICAgIG1rKFAsICdjb21wb3VuZF9zdGF0ZW1lbnQnLCBicmFjZS5zdGFydEluZGV4LCBiQ2xvc2UuZW5kSW5kZXgsIFtcbiAgICAgICAgICAgIGJyYWNlLFxuICAgICAgICAgICAgLi4uYm9keSxcbiAgICAgICAgICAgIGJDbG9zZSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsYXN0ID0ga2lkc1traWRzLmxlbmd0aCAtIDFdIVxuICAgIHJldHVybiBtayhQLCAnY19zdHlsZV9mb3Jfc3RhdGVtZW50JywgZm9yS3cuc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwga2lkcylcbiAgfVxuICAvLyBSZWd1bGFyIGZvciBWQVIgaW4gd29yZHM7IGRvIC4uLiBkb25lXG4gIGNvbnN0IGtpZHM6IFRzTm9kZVtdID0gW2Zvckt3XVxuICBjb25zdCB2YXJUb2sgPSBuZXh0VG9rZW4oUC5MLCAnYXJnJylcbiAga2lkcy5wdXNoKG1rKFAsICd2YXJpYWJsZV9uYW1lJywgdmFyVG9rLnN0YXJ0LCB2YXJUb2suZW5kLCBbXSkpXG4gIHNraXBCbGFua3MoUC5MKVxuICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gIGNvbnN0IGluVG9rID0gbmV4dFRva2VuKFAuTCwgJ2FyZycpXG4gIGlmIChpblRvay50eXBlID09PSAnV09SRCcgJiYgaW5Ub2sudmFsdWUgPT09ICdpbicpIHtcbiAgICBraWRzLnB1c2gobGVhZihQLCAnaW4nLCBpblRvaykpXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICAgICAgaWYgKGMgPT09ICc7JyB8fCBjID09PSAnXFxuJyB8fCBjID09PSAnJykgYnJlYWtcbiAgICAgIGNvbnN0IHcgPSBwYXJzZVdvcmQoUCwgJ2FyZycpXG4gICAgICBpZiAoIXcpIGJyZWFrXG4gICAgICBraWRzLnB1c2godylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gIH1cbiAgLy8gU2VwYXJhdG9yXG4gIGNvbnN0IHNhdmUyID0gc2F2ZUxleChQLkwpXG4gIGNvbnN0IHNlcCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICBpZiAoc2VwLnR5cGUgPT09ICdPUCcgJiYgc2VwLnZhbHVlID09PSAnOycpIHtcbiAgICBraWRzLnB1c2gobGVhZihQLCAnOycsIHNlcCkpXG4gIH0gZWxzZSBpZiAoc2VwLnR5cGUgIT09ICdORVdMSU5FJykge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlMilcbiAgfVxuICBjb25zdCBkZyA9IHBhcnNlRG9Hcm91cChQKVxuICBpZiAoZGcpIGtpZHMucHVzaChkZylcbiAgY29uc3QgbGFzdCA9IGtpZHNba2lkcy5sZW5ndGggLSAxXSFcbiAgcmV0dXJuIG1rKFAsICdmb3Jfc3RhdGVtZW50JywgZm9yS3cuc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwga2lkcylcbn1cblxuZnVuY3Rpb24gcGFyc2VEb0dyb3VwKFA6IFBhcnNlU3RhdGUpOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcE5ld2xpbmVzKFApXG4gIGNvbnN0IHNhdmUgPSBzYXZlTGV4KFAuTClcbiAgY29uc3QgZG9Ub2sgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgaWYgKGRvVG9rLnR5cGUgIT09ICdXT1JEJyB8fCBkb1Rvay52YWx1ZSAhPT0gJ2RvJykge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgZG9LdyA9IGxlYWYoUCwgJ2RvJywgZG9Ub2spXG4gIGNvbnN0IGJvZHkgPSBwYXJzZVN0YXRlbWVudHMoUCwgbnVsbClcbiAgY29uc3Qga2lkczogVHNOb2RlW10gPSBbZG9LdywgLi4uYm9keV1cbiAgY29uc3VtZUtleXdvcmQoUCwgJ2RvbmUnLCBraWRzKVxuICBjb25zdCBsYXN0ID0ga2lkc1traWRzLmxlbmd0aCAtIDFdIVxuICByZXR1cm4gbWsoUCwgJ2RvX2dyb3VwJywgZG9Ldy5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBraWRzKVxufVxuXG5mdW5jdGlvbiBwYXJzZUNhc2UoUDogUGFyc2VTdGF0ZSwgY2FzZVRvazogVG9rZW4pOiBUc05vZGUge1xuICBjb25zdCBjYXNlS3cgPSBsZWFmKFAsICdjYXNlJywgY2FzZVRvaylcbiAgY29uc3Qga2lkczogVHNOb2RlW10gPSBbY2FzZUt3XVxuICBza2lwQmxhbmtzKFAuTClcbiAgY29uc3Qgd29yZCA9IHBhcnNlV29yZChQLCAnYXJnJylcbiAgaWYgKHdvcmQpIGtpZHMucHVzaCh3b3JkKVxuICBza2lwQmxhbmtzKFAuTClcbiAgY29uc3VtZUtleXdvcmQoUCwgJ2luJywga2lkcylcbiAgc2tpcE5ld2xpbmVzKFApXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgc2tpcE5ld2xpbmVzKFApXG4gICAgY29uc3Qgc2F2ZSA9IHNhdmVMZXgoUC5MKVxuICAgIGNvbnN0IHQgPSBuZXh0VG9rZW4oUC5MLCAnYXJnJylcbiAgICBpZiAodC50eXBlID09PSAnV09SRCcgJiYgdC52YWx1ZSA9PT0gJ2VzYWMnKSB7XG4gICAgICBraWRzLnB1c2gobGVhZihQLCAnZXNhYycsIHQpKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKHQudHlwZSA9PT0gJ0VPRicpIGJyZWFrXG4gICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgY29uc3QgaXRlbSA9IHBhcnNlQ2FzZUl0ZW0oUClcbiAgICBpZiAoIWl0ZW0pIGJyZWFrXG4gICAga2lkcy5wdXNoKGl0ZW0pXG4gIH1cbiAgY29uc3QgbGFzdCA9IGtpZHNba2lkcy5sZW5ndGggLSAxXSFcbiAgcmV0dXJuIG1rKFAsICdjYXNlX3N0YXRlbWVudCcsIGNhc2VLdy5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBraWRzKVxufVxuXG5mdW5jdGlvbiBwYXJzZUNhc2VJdGVtKFA6IFBhcnNlU3RhdGUpOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIGNvbnN0IHN0YXJ0ID0gUC5MLmJcbiAgY29uc3Qga2lkczogVHNOb2RlW10gPSBbXVxuICAvLyBPcHRpb25hbCBsZWFkaW5nICcoJyBiZWZvcmUgcGF0dGVybiBcdTIwMTQgYmFzaCBhbGxvd3MgKHBhdHRlcm4pIHN5bnRheFxuICBpZiAocGVlayhQLkwpID09PSAnKCcpIHtcbiAgICBjb25zdCBzID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBraWRzLnB1c2gobWsoUCwgJygnLCBzLCBQLkwuYiwgW10pKVxuICB9XG4gIC8vIFBhdHRlcm4ocylcbiAgbGV0IGlzRmlyc3RBbHQgPSB0cnVlXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICAgIGlmIChjID09PSAnKScgfHwgYyA9PT0gJycpIGJyZWFrXG4gICAgY29uc3QgcGF0cyA9IHBhcnNlQ2FzZVBhdHRlcm4oUClcbiAgICBpZiAocGF0cy5sZW5ndGggPT09IDApIGJyZWFrXG4gICAgLy8gdHJlZS1zaXR0ZXIgcXVpcms6IGZpcnN0IGFsdGVybmF0aXZlIHdpdGggcXVvdGVzIGlzIGlubGluZWQgYXMgZmxhdFxuICAgIC8vIHNpYmxpbmdzOyBzdWJzZXF1ZW50IGFsdGVybmF0aXZlcyBhcmUgd3JhcHBlZCBpbiAoY29uY2F0ZW5hdGlvbikgd2l0aFxuICAgIC8vIGB3b3JkYCBpbnN0ZWFkIG9mIGBleHRnbG9iX3BhdHRlcm5gIGZvciBiYXJlIHNlZ21lbnRzLlxuICAgIGlmICghaXNGaXJzdEFsdCAmJiBwYXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbiA9IHBhdHMubWFwKHAgPT5cbiAgICAgICAgcC50eXBlID09PSAnZXh0Z2xvYl9wYXR0ZXJuJ1xuICAgICAgICAgID8gbWsoUCwgJ3dvcmQnLCBwLnN0YXJ0SW5kZXgsIHAuZW5kSW5kZXgsIFtdKVxuICAgICAgICAgIDogcCxcbiAgICAgIClcbiAgICAgIGNvbnN0IGZpcnN0ID0gcmV3cml0dGVuWzBdIVxuICAgICAgY29uc3QgbGFzdCA9IHJld3JpdHRlbltyZXdyaXR0ZW4ubGVuZ3RoIC0gMV0hXG4gICAgICBraWRzLnB1c2goXG4gICAgICAgIG1rKFAsICdjb25jYXRlbmF0aW9uJywgZmlyc3Quc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgcmV3cml0dGVuKSxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAga2lkcy5wdXNoKC4uLnBhdHMpXG4gICAgfVxuICAgIGlzRmlyc3RBbHQgPSBmYWxzZVxuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIC8vIFxcPG5ld2xpbmU+IGxpbmUgY29udGludWF0aW9uIGJldHdlZW4gYWx0ZXJuYXRpdmVzXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJ1xcXFwnICYmIHBlZWsoUC5MLCAxKSA9PT0gJ1xcbicpIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBza2lwQmxhbmtzKFAuTClcbiAgICB9XG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJ3wnKSB7XG4gICAgICBjb25zdCBzID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAga2lkcy5wdXNoKG1rKFAsICd8JywgcywgUC5MLmIsIFtdKSlcbiAgICAgIC8vIFxcPG5ld2xpbmU+IGFmdGVyIHwgaXMgYWxzbyBhIGxpbmUgY29udGludWF0aW9uXG4gICAgICBpZiAocGVlayhQLkwpID09PSAnXFxcXCcgJiYgcGVlayhQLkwsIDEpID09PSAnXFxuJykge1xuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIGlmIChwZWVrKFAuTCkgPT09ICcpJykge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGtpZHMucHVzaChtayhQLCAnKScsIHMsIFAuTC5iLCBbXSkpXG4gIH1cbiAgY29uc3QgYm9keSA9IHBhcnNlU3RhdGVtZW50cyhQLCBudWxsKVxuICBraWRzLnB1c2goLi4uYm9keSlcbiAgY29uc3Qgc2F2ZSA9IHNhdmVMZXgoUC5MKVxuICBjb25zdCB0ZXJtID0gbmV4dFRva2VuKFAuTCwgJ2NtZCcpXG4gIGlmIChcbiAgICB0ZXJtLnR5cGUgPT09ICdPUCcgJiZcbiAgICAodGVybS52YWx1ZSA9PT0gJzs7JyB8fCB0ZXJtLnZhbHVlID09PSAnOyYnIHx8IHRlcm0udmFsdWUgPT09ICc7OyYnKVxuICApIHtcbiAgICBraWRzLnB1c2gobGVhZihQLCB0ZXJtLnZhbHVlLCB0ZXJtKSlcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgfVxuICBpZiAoa2lkcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG4gIC8vIHRyZWUtc2l0dGVyIHF1aXJrOiBjYXNlX2l0ZW0gd2l0aCBFTVBUWSBib2R5IGFuZCBhIHNpbmdsZSBwYXR0ZXJuIG1hdGNoaW5nXG4gIC8vIGV4dGdsb2Itb3BlcmF0b3ItY2hhci1wcmVmaXggKG5vIGFjdHVhbCBnbG9iIG1ldGFjaGFycykgZG93bmdyYWRlcyB0byB3b3JkLlxuICAvLyBgLW8pIG93bmVyPSQyIDs7YCAoaGFzIGJvZHkpIFx1MjE5MiBleHRnbG9iX3BhdHRlcm47IGAtZykgOztgIChlbXB0eSkgXHUyMTkyIHdvcmQuXG4gIGlmIChib2R5Lmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgayA9IGtpZHNbaV0hXG4gICAgICBpZiAoay50eXBlICE9PSAnZXh0Z2xvYl9wYXR0ZXJuJykgY29udGludWVcbiAgICAgIGNvbnN0IHRleHQgPSBzbGljZUJ5dGVzKFAsIGsuc3RhcnRJbmRleCwgay5lbmRJbmRleClcbiAgICAgIGlmICgvXlstKz8qQCFdW2EtekEtWl0vLnRlc3QodGV4dCkgJiYgIS9bKj8oXS8udGVzdCh0ZXh0KSkge1xuICAgICAgICBraWRzW2ldID0gbWsoUCwgJ3dvcmQnLCBrLnN0YXJ0SW5kZXgsIGsuZW5kSW5kZXgsIFtdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBsYXN0ID0ga2lkc1traWRzLmxlbmd0aCAtIDFdIVxuICByZXR1cm4gbWsoUCwgJ2Nhc2VfaXRlbScsIHN0YXJ0LCBsYXN0LmVuZEluZGV4LCBraWRzKVxufVxuXG5mdW5jdGlvbiBwYXJzZUNhc2VQYXR0ZXJuKFA6IFBhcnNlU3RhdGUpOiBUc05vZGVbXSB7XG4gIHNraXBCbGFua3MoUC5MKVxuICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gIGNvbnN0IHN0YXJ0ID0gUC5MLmJcbiAgY29uc3Qgc3RhcnRJID0gUC5MLmlcbiAgbGV0IHBhcmVuRGVwdGggPSAwXG4gIGxldCBoYXNEb2xsYXIgPSBmYWxzZVxuICBsZXQgaGFzQnJhY2tldE91dHNpZGVQYXJlbiA9IGZhbHNlXG4gIGxldCBoYXNRdW90ZSA9IGZhbHNlXG4gIHdoaWxlIChQLkwuaSA8IFAuTC5sZW4pIHtcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKGMgPT09ICdcXFxcJyAmJiBQLkwuaSArIDEgPCBQLkwubGVuKSB7XG4gICAgICAvLyBFc2NhcGVkIGNoYXIgXHUyMDE0IGNvbnN1bWUgYm90aCAoaGFuZGxlcyBgYmFyXFwgYmF6YCBhcyBzaW5nbGUgcGF0dGVybilcbiAgICAgIC8vIFxcPG5ld2xpbmU+IGlzIGEgbGluZSBjb250aW51YXRpb247IGVhdCBpdCBidXQgc3RheSBpbiBwYXR0ZXJuLlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChjID09PSAnXCInIHx8IGMgPT09IFwiJ1wiKSB7XG4gICAgICBoYXNRdW90ZSA9IHRydWVcbiAgICAgIC8vIFNraXAgcGFzdCB0aGUgcXVvdGVkIHNlZ21lbnQgc28gaXRzIGNvbnRlbnQgKHNwYWNlcywgfCwgZXRjLikgZG9lc24ndFxuICAgICAgLy8gYnJlYWsgdGhlIHBlZWstYWhlYWQgc2Nhbi5cbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbiAmJiBwZWVrKFAuTCkgIT09IGMpIHtcbiAgICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gJ1xcXFwnICYmIFAuTC5pICsgMSA8IFAuTC5sZW4pIGFkdmFuY2UoUC5MKVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgIH1cbiAgICAgIGlmIChwZWVrKFAuTCkgPT09IGMpIGFkdmFuY2UoUC5MKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgLy8gUGFyZW4gY291bnRpbmc6IGFueSAoIGluc2lkZSBwYXR0ZXJuIG9wZW5zIGEgc2NvcGU7IGRvbid0IGJyZWFrIGF0ICkgb3IgfFxuICAgIC8vIHVudGlsIGJhbGFuY2VkLiBIYW5kbGVzIGV4dGdsb2IgKihhfGIpIGFuZCBuZXN0ZWQgc2hhcGVzICooWzAtOV0pKFswLTldKS5cbiAgICBpZiAoYyA9PT0gJygnKSB7XG4gICAgICBwYXJlbkRlcHRoKytcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKHBhcmVuRGVwdGggPiAwKSB7XG4gICAgICBpZiAoYyA9PT0gJyknKSB7XG4gICAgICAgIHBhcmVuRGVwdGgtLVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChjID09PSAnXFxuJykgYnJlYWtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09ICcpJyB8fCBjID09PSAnfCcgfHwgYyA9PT0gJyAnIHx8IGMgPT09ICdcXHQnIHx8IGMgPT09ICdcXG4nKSBicmVha1xuICAgIGlmIChjID09PSAnJCcpIGhhc0RvbGxhciA9IHRydWVcbiAgICBpZiAoYyA9PT0gJ1snKSBoYXNCcmFja2V0T3V0c2lkZVBhcmVuID0gdHJ1ZVxuICAgIGFkdmFuY2UoUC5MKVxuICB9XG4gIGlmIChQLkwuYiA9PT0gc3RhcnQpIHJldHVybiBbXVxuICBjb25zdCB0ZXh0ID0gUC5zcmMuc2xpY2Uoc3RhcnRJLCBQLkwuaSlcbiAgY29uc3QgaGFzRXh0Z2xvYlBhcmVuID0gL1sqPytAIV1cXCgvLnRlc3QodGV4dClcbiAgLy8gUXVvdGVkIHNlZ21lbnRzIGluIHBhdHRlcm46IHRyZWUtc2l0dGVyIHNwbGl0cyBhdCBxdW90ZSBib3VuZGFyaWVzIGludG9cbiAgLy8gbXVsdGlwbGUgc2libGluZyBub2Rlcy4gYCpcImZvb1wiKmAgXHUyMTkyIChleHRnbG9iX3BhdHRlcm4pKHN0cmluZykoZXh0Z2xvYl9wYXR0ZXJuKS5cbiAgLy8gUmUtc2NhbiB3aXRoIGEgc2VnbWVudGluZyBwYXNzLlxuICBpZiAoaGFzUXVvdGUgJiYgIWhhc0V4dGdsb2JQYXJlbikge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICAgIHJldHVybiBwYXJzZUNhc2VQYXR0ZXJuU2VnbWVudGVkKFApXG4gIH1cbiAgLy8gdHJlZS1zaXR0ZXIgc3BsaXRzIHBhdHRlcm5zIHdpdGggWyBvciAkIGludG8gY29uY2F0ZW5hdGlvbiB2aWEgd29yZCBwYXJzaW5nXG4gIC8vIFVOTEVTUyBwYXR0ZXJuIGhhcyBleHRnbG9iIHBhcmVucyAodGhvc2Ugb3ZlcnJpZGUgYW5kIGVtaXQgZXh0Z2xvYl9wYXR0ZXJuKS5cbiAgLy8gYCouWzEzNTddYCBcdTIxOTIgY29uY2F0KHdvcmQgd29yZCBudW1iZXIgd29yZCk7IGAke1BOfS5wb3RgIFx1MjE5MiBjb25jYXQoZXhwYW5zaW9uIHdvcmQpO1xuICAvLyBidXQgYCooWzAtOV0pYCBcdTIxOTIgZXh0Z2xvYl9wYXR0ZXJuIChoYXMgZXh0Z2xvYiBwYXJlbikuXG4gIGlmICghaGFzRXh0Z2xvYlBhcmVuICYmIChoYXNEb2xsYXIgfHwgaGFzQnJhY2tldE91dHNpZGVQYXJlbikpIHtcbiAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICBjb25zdCB3ID0gcGFyc2VXb3JkKFAsICdhcmcnKVxuICAgIHJldHVybiB3ID8gW3ddIDogW11cbiAgfVxuICAvLyBQYXR0ZXJucyBzdGFydGluZyB3aXRoIGV4dGdsb2Igb3BlcmF0b3IgY2hhcnMgKCsgLSA/ICogQCAhKSBmb2xsb3dlZCBieVxuICAvLyBpZGVudGlmaWVyIGNoYXJzIGFyZSBleHRnbG9iX3BhdHRlcm4gcGVyIHRyZWUtc2l0dGVyLCBldmVuIHdpdGhvdXQgcGFyZW5zXG4gIC8vIG9yIGdsb2IgbWV0YWNoYXJzLiBgLW8pYCBcdTIxOTIgZXh0Z2xvYl9wYXR0ZXJuOyBwbGFpbiBgZm9vKWAgXHUyMTkyIHdvcmQuXG4gIGNvbnN0IHR5cGUgPVxuICAgIGhhc0V4dGdsb2JQYXJlbiB8fCAvWyo/XS8udGVzdCh0ZXh0KSB8fCAvXlstKz8qQCFdW2EtekEtWl0vLnRlc3QodGV4dClcbiAgICAgID8gJ2V4dGdsb2JfcGF0dGVybidcbiAgICAgIDogJ3dvcmQnXG4gIHJldHVybiBbbWsoUCwgdHlwZSwgc3RhcnQsIFAuTC5iLCBbXSldXG59XG5cbi8vIFNlZ21lbnRlZCBzY2FuIGZvciBjYXNlIHBhdHRlcm5zIGNvbnRhaW5pbmcgcXVvdGVzOiBgKlwiZm9vXCIqYCBcdTIxOTJcbi8vIFtleHRnbG9iX3BhdHRlcm4sIHN0cmluZywgZXh0Z2xvYl9wYXR0ZXJuXS4gQmFyZSBzZWdtZW50cyBcdTIxOTIgZXh0Z2xvYl9wYXR0ZXJuXG4vLyBpZiB0aGV5IGhhdmUgKi8/LCBlbHNlIHdvcmQuIFN0b3BzIGF0ICkgfCBzcGFjZSB0YWIgbmV3bGluZSBvdXRzaWRlIHF1b3Rlcy5cbmZ1bmN0aW9uIHBhcnNlQ2FzZVBhdHRlcm5TZWdtZW50ZWQoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZVtdIHtcbiAgY29uc3QgcGFydHM6IFRzTm9kZVtdID0gW11cbiAgbGV0IHNlZ1N0YXJ0ID0gUC5MLmJcbiAgbGV0IHNlZ1N0YXJ0SSA9IFAuTC5pXG4gIGNvbnN0IGZsdXNoU2VnID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmIChQLkwuaSA+IHNlZ1N0YXJ0SSkge1xuICAgICAgY29uc3QgdCA9IFAuc3JjLnNsaWNlKHNlZ1N0YXJ0SSwgUC5MLmkpXG4gICAgICBjb25zdCB0eXBlID0gL1sqP10vLnRlc3QodCkgPyAnZXh0Z2xvYl9wYXR0ZXJuJyA6ICd3b3JkJ1xuICAgICAgcGFydHMucHVzaChtayhQLCB0eXBlLCBzZWdTdGFydCwgUC5MLmIsIFtdKSlcbiAgICB9XG4gIH1cbiAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbikge1xuICAgIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIFAuTC5pICsgMSA8IFAuTC5sZW4pIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgZmx1c2hTZWcoKVxuICAgICAgcGFydHMucHVzaChwYXJzZURvdWJsZVF1b3RlZChQKSlcbiAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgIHNlZ1N0YXJ0SSA9IFAuTC5pXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gXCInXCIpIHtcbiAgICAgIGZsdXNoU2VnKClcbiAgICAgIGNvbnN0IHRvayA9IG5leHRUb2tlbihQLkwsICdhcmcnKVxuICAgICAgcGFydHMucHVzaChsZWFmKFAsICdyYXdfc3RyaW5nJywgdG9rKSlcbiAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgIHNlZ1N0YXJ0SSA9IFAuTC5pXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gJyknIHx8IGMgPT09ICd8JyB8fCBjID09PSAnICcgfHwgYyA9PT0gJ1xcdCcgfHwgYyA9PT0gJ1xcbicpIGJyZWFrXG4gICAgYWR2YW5jZShQLkwpXG4gIH1cbiAgZmx1c2hTZWcoKVxuICByZXR1cm4gcGFydHNcbn1cblxuZnVuY3Rpb24gcGFyc2VGdW5jdGlvbihQOiBQYXJzZVN0YXRlLCBmblRvazogVG9rZW4pOiBUc05vZGUge1xuICBjb25zdCBmbkt3ID0gbGVhZihQLCAnZnVuY3Rpb24nLCBmblRvaylcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIGNvbnN0IG5hbWVUb2sgPSBuZXh0VG9rZW4oUC5MLCAnYXJnJylcbiAgY29uc3QgbmFtZSA9IG1rKFAsICd3b3JkJywgbmFtZVRvay5zdGFydCwgbmFtZVRvay5lbmQsIFtdKVxuICBjb25zdCBraWRzOiBUc05vZGVbXSA9IFtmbkt3LCBuYW1lXVxuICBza2lwQmxhbmtzKFAuTClcbiAgaWYgKHBlZWsoUC5MKSA9PT0gJygnICYmIHBlZWsoUC5MLCAxKSA9PT0gJyknKSB7XG4gICAgY29uc3QgbyA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICAgIGNvbnN0IGMgPSBuZXh0VG9rZW4oUC5MLCAnY21kJylcbiAgICBraWRzLnB1c2gobGVhZihQLCAnKCcsIG8pKVxuICAgIGtpZHMucHVzaChsZWFmKFAsICcpJywgYykpXG4gIH1cbiAgc2tpcEJsYW5rcyhQLkwpXG4gIHNraXBOZXdsaW5lcyhQKVxuICBjb25zdCBib2R5ID0gcGFyc2VDb21tYW5kKFApXG4gIGlmIChib2R5KSB7XG4gICAgLy8gSG9pc3QgcmVkaXJlY3RzIGZyb20gcmVkaXJlY3RlZF9zdGF0ZW1lbnQoY29tcG91bmRfc3RhdGVtZW50LCAuLi4pIHRvXG4gICAgLy8gZnVuY3Rpb25fZGVmaW5pdGlvbiBsZXZlbCBwZXIgdHJlZS1zaXR0ZXIgZ3JhbW1hclxuICAgIGlmIChcbiAgICAgIGJvZHkudHlwZSA9PT0gJ3JlZGlyZWN0ZWRfc3RhdGVtZW50JyAmJlxuICAgICAgYm9keS5jaGlsZHJlbi5sZW5ndGggPj0gMiAmJlxuICAgICAgYm9keS5jaGlsZHJlblswXSEudHlwZSA9PT0gJ2NvbXBvdW5kX3N0YXRlbWVudCdcbiAgICApIHtcbiAgICAgIGtpZHMucHVzaCguLi5ib2R5LmNoaWxkcmVuKVxuICAgIH0gZWxzZSB7XG4gICAgICBraWRzLnB1c2goYm9keSlcbiAgICB9XG4gIH1cbiAgY29uc3QgbGFzdCA9IGtpZHNba2lkcy5sZW5ndGggLSAxXSFcbiAgcmV0dXJuIG1rKFAsICdmdW5jdGlvbl9kZWZpbml0aW9uJywgZm5Ldy5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBraWRzKVxufVxuXG5mdW5jdGlvbiBwYXJzZURlY2xhcmF0aW9uKFA6IFBhcnNlU3RhdGUsIGt3VG9rOiBUb2tlbik6IFRzTm9kZSB7XG4gIGNvbnN0IGt3ID0gbGVhZihQLCBrd1Rvay52YWx1ZSwga3dUb2spXG4gIGNvbnN0IGtpZHM6IFRzTm9kZVtdID0gW2t3XVxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgICBpZiAoXG4gICAgICBjID09PSAnJyB8fFxuICAgICAgYyA9PT0gJ1xcbicgfHxcbiAgICAgIGMgPT09ICc7JyB8fFxuICAgICAgYyA9PT0gJyYnIHx8XG4gICAgICBjID09PSAnfCcgfHxcbiAgICAgIGMgPT09ICcpJyB8fFxuICAgICAgYyA9PT0gJzwnIHx8XG4gICAgICBjID09PSAnPidcbiAgICApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNvbnN0IGEgPSB0cnlQYXJzZUFzc2lnbm1lbnQoUClcbiAgICBpZiAoYSkge1xuICAgICAga2lkcy5wdXNoKGEpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICAvLyBRdW90ZWQgc3RyaW5nIG9yIGNvbmNhdGVuYXRpb246IGBleHBvcnQgXCJGT089YmFyXCJgLCBgZXhwb3J0ICdYJ2BcbiAgICBpZiAoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIiB8fCBjID09PSAnJCcpIHtcbiAgICAgIGNvbnN0IHcgPSBwYXJzZVdvcmQoUCwgJ2FyZycpXG4gICAgICBpZiAodykge1xuICAgICAgICBraWRzLnB1c2godylcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIC8vIEZsYWcgbGlrZSAtYSBvciBiYXJlIHZhcmlhYmxlIG5hbWVcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgY29uc3QgdG9rID0gbmV4dFRva2VuKFAuTCwgJ2FyZycpXG4gICAgaWYgKHRvay50eXBlID09PSAnV09SRCcgfHwgdG9rLnR5cGUgPT09ICdOVU1CRVInKSB7XG4gICAgICBpZiAodG9rLnZhbHVlLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgICBraWRzLnB1c2gobGVhZihQLCAnd29yZCcsIHRvaykpXG4gICAgICB9IGVsc2UgaWYgKGlzSWRlbnRTdGFydCh0b2sudmFsdWVbMF0gPz8gJycpKSB7XG4gICAgICAgIGtpZHMucHVzaChtayhQLCAndmFyaWFibGVfbmFtZScsIHRvay5zdGFydCwgdG9rLmVuZCwgW10pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2lkcy5wdXNoKGxlYWYoUCwgJ3dvcmQnLCB0b2spKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIGNvbnN0IGxhc3QgPSBraWRzW2tpZHMubGVuZ3RoIC0gMV0hXG4gIHJldHVybiBtayhQLCAnZGVjbGFyYXRpb25fY29tbWFuZCcsIGt3LnN0YXJ0SW5kZXgsIGxhc3QuZW5kSW5kZXgsIGtpZHMpXG59XG5cbmZ1bmN0aW9uIHBhcnNlVW5zZXQoUDogUGFyc2VTdGF0ZSwga3dUb2s6IFRva2VuKTogVHNOb2RlIHtcbiAgY29uc3Qga3cgPSBsZWFmKFAsICd1bnNldCcsIGt3VG9rKVxuICBjb25zdCBraWRzOiBUc05vZGVbXSA9IFtrd11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBjb25zdCBjID0gcGVlayhQLkwpXG4gICAgaWYgKFxuICAgICAgYyA9PT0gJycgfHxcbiAgICAgIGMgPT09ICdcXG4nIHx8XG4gICAgICBjID09PSAnOycgfHxcbiAgICAgIGMgPT09ICcmJyB8fFxuICAgICAgYyA9PT0gJ3wnIHx8XG4gICAgICBjID09PSAnKScgfHxcbiAgICAgIGMgPT09ICc8JyB8fFxuICAgICAgYyA9PT0gJz4nXG4gICAgKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgICAvLyBTRUNVUklUWTogdXNlIHBhcnNlV29yZCAobm90IHJhdyBuZXh0VG9rZW4pIHNvIHF1b3RlZCBzdHJpbmdzIGxpa2VcbiAgICAvLyBgdW5zZXQgJ2FbJChpZCldJ2AgZW1pdCBhIHJhd19zdHJpbmcgY2hpbGQgdGhhdCBhc3QudHMgY2FuIHJlamVjdC5cbiAgICAvLyBQcmV2aW91c2x5IGBicmVha2Agc2lsZW50bHkgZHJvcHBlZCBub24tV09SRCBhcmdzIFx1MjAxNCBoaWRpbmcgdGhlXG4gICAgLy8gYXJpdGhtZXRpYy1zdWJzY3JpcHQgY29kZS1leGVjIHZlY3RvciBmcm9tIHRoZSBzZWN1cml0eSB3YWxrZXIuXG4gICAgY29uc3QgYXJnID0gcGFyc2VXb3JkKFAsICdhcmcnKVxuICAgIGlmICghYXJnKSBicmVha1xuICAgIGlmIChhcmcudHlwZSA9PT0gJ3dvcmQnKSB7XG4gICAgICBpZiAoYXJnLnRleHQuc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgICAgIGtpZHMucHVzaChhcmcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBraWRzLnB1c2gobWsoUCwgJ3ZhcmlhYmxlX25hbWUnLCBhcmcuc3RhcnRJbmRleCwgYXJnLmVuZEluZGV4LCBbXSkpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtpZHMucHVzaChhcmcpXG4gICAgfVxuICB9XG4gIGNvbnN0IGxhc3QgPSBraWRzW2tpZHMubGVuZ3RoIC0gMV0hXG4gIHJldHVybiBtayhQLCAndW5zZXRfY29tbWFuZCcsIGt3LnN0YXJ0SW5kZXgsIGxhc3QuZW5kSW5kZXgsIGtpZHMpXG59XG5cbmZ1bmN0aW9uIGNvbnN1bWVLZXl3b3JkKFA6IFBhcnNlU3RhdGUsIG5hbWU6IHN0cmluZywga2lkczogVHNOb2RlW10pOiB2b2lkIHtcbiAgc2tpcE5ld2xpbmVzKFApXG4gIGNvbnN0IHNhdmUgPSBzYXZlTGV4KFAuTClcbiAgY29uc3QgdCA9IG5leHRUb2tlbihQLkwsICdjbWQnKVxuICBpZiAodC50eXBlID09PSAnV09SRCcgJiYgdC52YWx1ZSA9PT0gbmFtZSkge1xuICAgIGtpZHMucHVzaChsZWFmKFAsIG5hbWUsIHQpKVxuICB9IGVsc2Uge1xuICAgIHJlc3RvcmVMZXgoUC5MLCBzYXZlKVxuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBUZXN0ICYgQXJpdGhtZXRpYyBFeHByZXNzaW9ucyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gcGFyc2VUZXN0RXhwcihQOiBQYXJzZVN0YXRlLCBjbG9zZXI6IHN0cmluZyk6IFRzTm9kZSB8IG51bGwge1xuICByZXR1cm4gcGFyc2VUZXN0T3IoUCwgY2xvc2VyKVxufVxuXG5mdW5jdGlvbiBwYXJzZVRlc3RPcihQOiBQYXJzZVN0YXRlLCBjbG9zZXI6IHN0cmluZyk6IFRzTm9kZSB8IG51bGwge1xuICBsZXQgbGVmdCA9IHBhcnNlVGVzdEFuZChQLCBjbG9zZXIpXG4gIGlmICghbGVmdCkgcmV0dXJuIG51bGxcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJ3wnICYmIHBlZWsoUC5MLCAxKSA9PT0gJ3wnKSB7XG4gICAgICBjb25zdCBzID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjb25zdCBvcCA9IG1rKFAsICd8fCcsIHMsIFAuTC5iLCBbXSlcbiAgICAgIGNvbnN0IHJpZ2h0ID0gcGFyc2VUZXN0QW5kKFAsIGNsb3NlcilcbiAgICAgIGlmICghcmlnaHQpIHtcbiAgICAgICAgcmVzdG9yZUxleChQLkwsIHNhdmUpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBsZWZ0ID0gbWsoUCwgJ2JpbmFyeV9leHByZXNzaW9uJywgbGVmdC5zdGFydEluZGV4LCByaWdodC5lbmRJbmRleCwgW1xuICAgICAgICBsZWZ0LFxuICAgICAgICBvcCxcbiAgICAgICAgcmlnaHQsXG4gICAgICBdKVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGVmdFxufVxuXG5mdW5jdGlvbiBwYXJzZVRlc3RBbmQoUDogUGFyc2VTdGF0ZSwgY2xvc2VyOiBzdHJpbmcpOiBUc05vZGUgfCBudWxsIHtcbiAgbGV0IGxlZnQgPSBwYXJzZVRlc3RVbmFyeShQLCBjbG9zZXIpXG4gIGlmICghbGVmdCkgcmV0dXJuIG51bGxcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBpZiAocGVlayhQLkwpID09PSAnJicgJiYgcGVlayhQLkwsIDEpID09PSAnJicpIHtcbiAgICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNvbnN0IG9wID0gbWsoUCwgJyYmJywgcywgUC5MLmIsIFtdKVxuICAgICAgY29uc3QgcmlnaHQgPSBwYXJzZVRlc3RVbmFyeShQLCBjbG9zZXIpXG4gICAgICBpZiAoIXJpZ2h0KSBicmVha1xuICAgICAgbGVmdCA9IG1rKFAsICdiaW5hcnlfZXhwcmVzc2lvbicsIGxlZnQuc3RhcnRJbmRleCwgcmlnaHQuZW5kSW5kZXgsIFtcbiAgICAgICAgbGVmdCxcbiAgICAgICAgb3AsXG4gICAgICAgIHJpZ2h0LFxuICAgICAgXSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxlZnRcbn1cblxuZnVuY3Rpb24gcGFyc2VUZXN0VW5hcnkoUDogUGFyc2VTdGF0ZSwgY2xvc2VyOiBzdHJpbmcpOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgaWYgKGMgPT09ICcoJykge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNvbnN0IG9wZW4gPSBtayhQLCAnKCcsIHMsIFAuTC5iLCBbXSlcbiAgICBjb25zdCBpbm5lciA9IHBhcnNlVGVzdE9yKFAsIGNsb3NlcilcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBsZXQgY2xvc2U6IFRzTm9kZVxuICAgIGlmIChwZWVrKFAuTCkgPT09ICcpJykge1xuICAgICAgY29uc3QgY3MgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjbG9zZSA9IG1rKFAsICcpJywgY3MsIFAuTC5iLCBbXSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UgPSBtayhQLCAnKScsIFAuTC5iLCBQLkwuYiwgW10pXG4gICAgfVxuICAgIGNvbnN0IGtpZHMgPSBpbm5lciA/IFtvcGVuLCBpbm5lciwgY2xvc2VdIDogW29wZW4sIGNsb3NlXVxuICAgIHJldHVybiBtayhcbiAgICAgIFAsXG4gICAgICAncGFyZW50aGVzaXplZF9leHByZXNzaW9uJyxcbiAgICAgIG9wZW4uc3RhcnRJbmRleCxcbiAgICAgIGNsb3NlLmVuZEluZGV4LFxuICAgICAga2lkcyxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHBhcnNlVGVzdEJpbmFyeShQLCBjbG9zZXIpXG59XG5cbi8qKlxuICogUGFyc2UgYCFgLW5lZ2F0ZWQgb3IgdGVzdC1vcGVyYXRvciAoYC1mYCkgb3IgcGFyZW50aGVzaXplZCBwcmltYXJ5IFx1MjAxNCBidXQgTk9UXG4gKiBhIGJpbmFyeSBjb21wYXJpc29uLiBVc2VkIGFzIExIUyBvZiBiaW5hcnlfZXhwcmVzc2lvbiBzbyBgISB4ID1+IHlgIGJpbmRzXG4gKiBgIWAgdG8gYHhgIG9ubHksIG5vdCB0aGUgd2hvbGUgYHggPX4geWAuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlVGVzdE5lZ2F0YWJsZVByaW1hcnkoXG4gIFA6IFBhcnNlU3RhdGUsXG4gIGNsb3Nlcjogc3RyaW5nLFxuKTogVHNOb2RlIHwgbnVsbCB7XG4gIHNraXBCbGFua3MoUC5MKVxuICBjb25zdCBjID0gcGVlayhQLkwpXG4gIGlmIChjID09PSAnIScpIHtcbiAgICBjb25zdCBzID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBiYW5nID0gbWsoUCwgJyEnLCBzLCBQLkwuYiwgW10pXG4gICAgY29uc3QgaW5uZXIgPSBwYXJzZVRlc3ROZWdhdGFibGVQcmltYXJ5KFAsIGNsb3NlcilcbiAgICBpZiAoIWlubmVyKSByZXR1cm4gYmFuZ1xuICAgIHJldHVybiBtayhQLCAndW5hcnlfZXhwcmVzc2lvbicsIGJhbmcuc3RhcnRJbmRleCwgaW5uZXIuZW5kSW5kZXgsIFtcbiAgICAgIGJhbmcsXG4gICAgICBpbm5lcixcbiAgICBdKVxuICB9XG4gIGlmIChjID09PSAnLScgJiYgaXNJZGVudFN0YXJ0KHBlZWsoUC5MLCAxKSkpIHtcbiAgICBjb25zdCBzID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICB3aGlsZSAoaXNJZGVudENoYXIocGVlayhQLkwpKSkgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgb3AgPSBtayhQLCAndGVzdF9vcGVyYXRvcicsIHMsIFAuTC5iLCBbXSlcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBjb25zdCBhcmcgPSBwYXJzZVRlc3RQcmltYXJ5KFAsIGNsb3NlcilcbiAgICBpZiAoIWFyZykgcmV0dXJuIG9wXG4gICAgcmV0dXJuIG1rKFAsICd1bmFyeV9leHByZXNzaW9uJywgb3Auc3RhcnRJbmRleCwgYXJnLmVuZEluZGV4LCBbb3AsIGFyZ10pXG4gIH1cbiAgcmV0dXJuIHBhcnNlVGVzdFByaW1hcnkoUCwgY2xvc2VyKVxufVxuXG5mdW5jdGlvbiBwYXJzZVRlc3RCaW5hcnkoUDogUGFyc2VTdGF0ZSwgY2xvc2VyOiBzdHJpbmcpOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIC8vIGAhYCBpbiB0ZXN0IGNvbnRleHQgYmluZHMgdGlnaHRlciB0aGFuID1+Lz09LlxuICAvLyBgW1sgISBcInhcIiA9fiB5IF1dYCBcdTIxOTIgKGJpbmFyeV9leHByZXNzaW9uICh1bmFyeV9leHByZXNzaW9uIChzdHJpbmcpKSAocmVnZXgpKVxuICAvLyBgW1sgISAtZiB4IF1dYCBcdTIxOTIgKHVuYXJ5X2V4cHJlc3Npb24gISAodW5hcnlfZXhwcmVzc2lvbiAodGVzdF9vcGVyYXRvcikgKHdvcmQpKSlcbiAgY29uc3QgbGVmdCA9IHBhcnNlVGVzdE5lZ2F0YWJsZVByaW1hcnkoUCwgY2xvc2VyKVxuICBpZiAoIWxlZnQpIHJldHVybiBudWxsXG4gIHNraXBCbGFua3MoUC5MKVxuICAvLyBCaW5hcnkgY29tcGFyaXNvbjogPT0gIT0gPX4gLWVxIC1sdCBldGMuXG4gIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgbGV0IG9wOiBUc05vZGUgfCBudWxsID0gbnVsbFxuICBjb25zdCBvcyA9IFAuTC5iXG4gIGlmIChjID09PSAnPScgJiYgYzEgPT09ICc9Jykge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIGFkdmFuY2UoUC5MKVxuICAgIG9wID0gbWsoUCwgJz09Jywgb3MsIFAuTC5iLCBbXSlcbiAgfSBlbHNlIGlmIChjID09PSAnIScgJiYgYzEgPT09ICc9Jykge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIGFkdmFuY2UoUC5MKVxuICAgIG9wID0gbWsoUCwgJyE9Jywgb3MsIFAuTC5iLCBbXSlcbiAgfSBlbHNlIGlmIChjID09PSAnPScgJiYgYzEgPT09ICd+Jykge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIGFkdmFuY2UoUC5MKVxuICAgIG9wID0gbWsoUCwgJz1+Jywgb3MsIFAuTC5iLCBbXSlcbiAgfSBlbHNlIGlmIChjID09PSAnPScgJiYgYzEgIT09ICc9Jykge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIG9wID0gbWsoUCwgJz0nLCBvcywgUC5MLmIsIFtdKVxuICB9IGVsc2UgaWYgKGMgPT09ICc8JyAmJiBjMSAhPT0gJzwnKSB7XG4gICAgYWR2YW5jZShQLkwpXG4gICAgb3AgPSBtayhQLCAnPCcsIG9zLCBQLkwuYiwgW10pXG4gIH0gZWxzZSBpZiAoYyA9PT0gJz4nICYmIGMxICE9PSAnPicpIHtcbiAgICBhZHZhbmNlKFAuTClcbiAgICBvcCA9IG1rKFAsICc+Jywgb3MsIFAuTC5iLCBbXSlcbiAgfSBlbHNlIGlmIChjID09PSAnLScgJiYgaXNJZGVudFN0YXJ0KGMxKSkge1xuICAgIGFkdmFuY2UoUC5MKVxuICAgIHdoaWxlIChpc0lkZW50Q2hhcihwZWVrKFAuTCkpKSBhZHZhbmNlKFAuTClcbiAgICBvcCA9IG1rKFAsICd0ZXN0X29wZXJhdG9yJywgb3MsIFAuTC5iLCBbXSlcbiAgfVxuICBpZiAoIW9wKSByZXR1cm4gbGVmdFxuICBza2lwQmxhbmtzKFAuTClcbiAgLy8gSW4gW1sgXV0sIFJIUyBvZiA9PS8hPS89Lz1+IGdldHMgc3BlY2lhbCBwYXR0ZXJuIHBhcnNpbmc6IHBhcmVuIGNvdW50aW5nXG4gIC8vIHNvIEAoYXxifGMpIGRvZXNuJ3QgYnJlYWsgb24gfCwgYW5kIHNlZ21lbnRzIGJlY29tZSBleHRnbG9iX3BhdHRlcm4vcmVnZXguXG4gIGlmIChjbG9zZXIgPT09ICddXScpIHtcbiAgICBjb25zdCBvcFRleHQgPSBvcC50eXBlXG4gICAgaWYgKG9wVGV4dCA9PT0gJz1+Jykge1xuICAgICAgc2tpcEJsYW5rcyhQLkwpXG4gICAgICAvLyBJZiB0aGUgRU5USVJFIFJIUyBpcyBhIHF1b3RlZCBzdHJpbmcsIGVtaXQgc3RyaW5nL3Jhd19zdHJpbmcgbm90XG4gICAgICAvLyByZWdleDogYFtbIFwiJHhcIiA9fiBcIiR5XCIgXV1gIFx1MjE5MiAoYmluYXJ5X2V4cHJlc3Npb24gKHN0cmluZykgKHN0cmluZykpLlxuICAgICAgLy8gSWYgdGhlcmUncyBjb250ZW50IGFmdGVyIHRoZSBxdW90ZSAoYCcgYm9vcCAnKC4qKSRgKSwgdGhlIHdob2xlIFJIU1xuICAgICAgLy8gc3RheXMgYSBzaW5nbGUgKHJlZ2V4KS4gUGVlayBwYXN0IHRoZSBxdW90ZSB0byBjaGVjay5cbiAgICAgIGNvbnN0IHJjID0gcGVlayhQLkwpXG4gICAgICBsZXQgcmhzOiBUc05vZGUgfCBudWxsID0gbnVsbFxuICAgICAgaWYgKHJjID09PSAnXCInIHx8IHJjID09PSBcIidcIikge1xuICAgICAgICBjb25zdCBzYXZlID0gc2F2ZUxleChQLkwpXG4gICAgICAgIGNvbnN0IHF1b3RlZCA9XG4gICAgICAgICAgcmMgPT09ICdcIidcbiAgICAgICAgICAgID8gcGFyc2VEb3VibGVRdW90ZWQoUClcbiAgICAgICAgICAgIDogbGVhZihQLCAncmF3X3N0cmluZycsIG5leHRUb2tlbihQLkwsICdhcmcnKSlcbiAgICAgICAgLy8gQ2hlY2sgaWYgUkhTIGVuZHMgaGVyZTogb25seSB3aGl0ZXNwYWNlIHRoZW4gXV0gb3IgJiYvfHwgb3IgbmV3bGluZVxuICAgICAgICBsZXQgaiA9IFAuTC5pXG4gICAgICAgIHdoaWxlIChqIDwgUC5MLmxlbiAmJiAoUC5zcmNbal0gPT09ICcgJyB8fCBQLnNyY1tqXSA9PT0gJ1xcdCcpKSBqKytcbiAgICAgICAgY29uc3QgbmMgPSBQLnNyY1tqXSA/PyAnJ1xuICAgICAgICBjb25zdCBuYzEgPSBQLnNyY1tqICsgMV0gPz8gJydcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChuYyA9PT0gJ10nICYmIG5jMSA9PT0gJ10nKSB8fFxuICAgICAgICAgIChuYyA9PT0gJyYnICYmIG5jMSA9PT0gJyYnKSB8fFxuICAgICAgICAgIChuYyA9PT0gJ3wnICYmIG5jMSA9PT0gJ3wnKSB8fFxuICAgICAgICAgIG5jID09PSAnXFxuJyB8fFxuICAgICAgICAgIG5jID09PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICByaHMgPSBxdW90ZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN0b3JlTGV4KFAuTCwgc2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyaHMpIHJocyA9IHBhcnNlVGVzdFJlZ2V4UmhzKFApXG4gICAgICBpZiAoIXJocykgcmV0dXJuIGxlZnRcbiAgICAgIHJldHVybiBtayhQLCAnYmluYXJ5X2V4cHJlc3Npb24nLCBsZWZ0LnN0YXJ0SW5kZXgsIHJocy5lbmRJbmRleCwgW1xuICAgICAgICBsZWZ0LFxuICAgICAgICBvcCxcbiAgICAgICAgcmhzLFxuICAgICAgXSlcbiAgICB9XG4gICAgLy8gU2luZ2xlIGA9YCBlbWl0cyAocmVnZXgpIHBlciB0cmVlLXNpdHRlcjsgYD09YCBhbmQgYCE9YCBlbWl0IGV4dGdsb2JfcGF0dGVyblxuICAgIGlmIChvcFRleHQgPT09ICc9Jykge1xuICAgICAgY29uc3QgcmhzID0gcGFyc2VUZXN0UmVnZXhSaHMoUClcbiAgICAgIGlmICghcmhzKSByZXR1cm4gbGVmdFxuICAgICAgcmV0dXJuIG1rKFAsICdiaW5hcnlfZXhwcmVzc2lvbicsIGxlZnQuc3RhcnRJbmRleCwgcmhzLmVuZEluZGV4LCBbXG4gICAgICAgIGxlZnQsXG4gICAgICAgIG9wLFxuICAgICAgICByaHMsXG4gICAgICBdKVxuICAgIH1cbiAgICBpZiAob3BUZXh0ID09PSAnPT0nIHx8IG9wVGV4dCA9PT0gJyE9Jykge1xuICAgICAgY29uc3QgcGFydHMgPSBwYXJzZVRlc3RFeHRnbG9iUmhzKFApXG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAwKSByZXR1cm4gbGVmdFxuICAgICAgY29uc3QgbGFzdCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdIVxuICAgICAgcmV0dXJuIG1rKFAsICdiaW5hcnlfZXhwcmVzc2lvbicsIGxlZnQuc3RhcnRJbmRleCwgbGFzdC5lbmRJbmRleCwgW1xuICAgICAgICBsZWZ0LFxuICAgICAgICBvcCxcbiAgICAgICAgLi4ucGFydHMsXG4gICAgICBdKVxuICAgIH1cbiAgfVxuICBjb25zdCByaWdodCA9IHBhcnNlVGVzdFByaW1hcnkoUCwgY2xvc2VyKVxuICBpZiAoIXJpZ2h0KSByZXR1cm4gbGVmdFxuICByZXR1cm4gbWsoUCwgJ2JpbmFyeV9leHByZXNzaW9uJywgbGVmdC5zdGFydEluZGV4LCByaWdodC5lbmRJbmRleCwgW1xuICAgIGxlZnQsXG4gICAgb3AsXG4gICAgcmlnaHQsXG4gIF0pXG59XG5cbi8vIFJIUyBvZiA9fiBpbiBbWyBdXSBcdTIwMTQgc2NhbiBhcyBzaW5nbGUgKHJlZ2V4KSBub2RlIHdpdGggcGFyZW4vYnJhY2tldCBjb3VudGluZ1xuLy8gc28gfCAoICkgaW5zaWRlIHRoZSByZWdleCBkb24ndCBicmVhayBwYXJzaW5nLiBTdG9wIGF0IF1dIG9yIHdzKyYmL3x8LlxuZnVuY3Rpb24gcGFyc2VUZXN0UmVnZXhSaHMoUDogUGFyc2VTdGF0ZSk6IFRzTm9kZSB8IG51bGwge1xuICBza2lwQmxhbmtzKFAuTClcbiAgY29uc3Qgc3RhcnQgPSBQLkwuYlxuICBsZXQgcGFyZW5EZXB0aCA9IDBcbiAgbGV0IGJyYWNrZXREZXB0aCA9IDBcbiAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbikge1xuICAgIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIFAuTC5pICsgMSA8IFAuTC5sZW4pIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gJ1xcbicpIGJyZWFrXG4gICAgaWYgKHBhcmVuRGVwdGggPT09IDAgJiYgYnJhY2tldERlcHRoID09PSAwKSB7XG4gICAgICBpZiAoYyA9PT0gJ10nICYmIHBlZWsoUC5MLCAxKSA9PT0gJ10nKSBicmVha1xuICAgICAgaWYgKGMgPT09ICcgJyB8fCBjID09PSAnXFx0Jykge1xuICAgICAgICAvLyBQZWVrIHBhc3QgYmxhbmtzIGZvciBdXSBvciAmJi98fFxuICAgICAgICBsZXQgaiA9IFAuTC5pXG4gICAgICAgIHdoaWxlIChqIDwgUC5MLmxlbiAmJiAoUC5MLnNyY1tqXSA9PT0gJyAnIHx8IFAuTC5zcmNbal0gPT09ICdcXHQnKSkgaisrXG4gICAgICAgIGNvbnN0IG5jID0gUC5MLnNyY1tqXSA/PyAnJ1xuICAgICAgICBjb25zdCBuYzEgPSBQLkwuc3JjW2ogKyAxXSA/PyAnJ1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKG5jID09PSAnXScgJiYgbmMxID09PSAnXScpIHx8XG4gICAgICAgICAgKG5jID09PSAnJicgJiYgbmMxID09PSAnJicpIHx8XG4gICAgICAgICAgKG5jID09PSAnfCcgJiYgbmMxID09PSAnfCcpXG4gICAgICAgICkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjID09PSAnKCcpIHBhcmVuRGVwdGgrK1xuICAgIGVsc2UgaWYgKGMgPT09ICcpJyAmJiBwYXJlbkRlcHRoID4gMCkgcGFyZW5EZXB0aC0tXG4gICAgZWxzZSBpZiAoYyA9PT0gJ1snKSBicmFja2V0RGVwdGgrK1xuICAgIGVsc2UgaWYgKGMgPT09ICddJyAmJiBicmFja2V0RGVwdGggPiAwKSBicmFja2V0RGVwdGgtLVxuICAgIGFkdmFuY2UoUC5MKVxuICB9XG4gIGlmIChQLkwuYiA9PT0gc3RhcnQpIHJldHVybiBudWxsXG4gIHJldHVybiBtayhQLCAncmVnZXgnLCBzdGFydCwgUC5MLmIsIFtdKVxufVxuXG4vLyBSSFMgb2YgPT0vIT0vPSBpbiBbWyBdXSBcdTIwMTQgcmV0dXJucyBhcnJheSBvZiBwYXJ0cy4gQmFyZSB0ZXh0IFx1MjE5MiBleHRnbG9iX3BhdHRlcm5cbi8vICh3aXRoIHBhcmVuIGNvdW50aW5nIGZvciBAKGF8YikpOyAkKC4uLikvJHt9L3F1b3RlZCBcdTIxOTIgcHJvcGVyIG5vZGUgdHlwZXMuXG4vLyBNdWx0aXBsZSBwYXJ0cyBiZWNvbWUgZmxhdCBjaGlsZHJlbiBvZiBiaW5hcnlfZXhwcmVzc2lvbiBwZXIgdHJlZS1zaXR0ZXIuXG5mdW5jdGlvbiBwYXJzZVRlc3RFeHRnbG9iUmhzKFA6IFBhcnNlU3RhdGUpOiBUc05vZGVbXSB7XG4gIHNraXBCbGFua3MoUC5MKVxuICBjb25zdCBwYXJ0czogVHNOb2RlW10gPSBbXVxuICBsZXQgc2VnU3RhcnQgPSBQLkwuYlxuICBsZXQgc2VnU3RhcnRJID0gUC5MLmlcbiAgbGV0IHBhcmVuRGVwdGggPSAwXG4gIGNvbnN0IGZsdXNoU2VnID0gKCkgPT4ge1xuICAgIGlmIChQLkwuaSA+IHNlZ1N0YXJ0SSkge1xuICAgICAgY29uc3QgdGV4dCA9IFAuc3JjLnNsaWNlKHNlZ1N0YXJ0SSwgUC5MLmkpXG4gICAgICAvLyBQdXJlIG51bWJlciBzdGF5cyBudW1iZXI7IGV2ZXJ5dGhpbmcgZWxzZSBpcyBleHRnbG9iX3BhdHRlcm5cbiAgICAgIGNvbnN0IHR5cGUgPSAvXlxcZCskLy50ZXN0KHRleHQpID8gJ251bWJlcicgOiAnZXh0Z2xvYl9wYXR0ZXJuJ1xuICAgICAgcGFydHMucHVzaChtayhQLCB0eXBlLCBzZWdTdGFydCwgUC5MLmIsIFtdKSlcbiAgICB9XG4gIH1cbiAgd2hpbGUgKFAuTC5pIDwgUC5MLmxlbikge1xuICAgIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIFAuTC5pICsgMSA8IFAuTC5sZW4pIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoYyA9PT0gJ1xcbicpIGJyZWFrXG4gICAgaWYgKHBhcmVuRGVwdGggPT09IDApIHtcbiAgICAgIGlmIChjID09PSAnXScgJiYgcGVlayhQLkwsIDEpID09PSAnXScpIGJyZWFrXG4gICAgICBpZiAoYyA9PT0gJyAnIHx8IGMgPT09ICdcXHQnKSB7XG4gICAgICAgIGxldCBqID0gUC5MLmlcbiAgICAgICAgd2hpbGUgKGogPCBQLkwubGVuICYmIChQLkwuc3JjW2pdID09PSAnICcgfHwgUC5MLnNyY1tqXSA9PT0gJ1xcdCcpKSBqKytcbiAgICAgICAgY29uc3QgbmMgPSBQLkwuc3JjW2pdID8/ICcnXG4gICAgICAgIGNvbnN0IG5jMSA9IFAuTC5zcmNbaiArIDFdID8/ICcnXG4gICAgICAgIGlmIChcbiAgICAgICAgICAobmMgPT09ICddJyAmJiBuYzEgPT09ICddJykgfHxcbiAgICAgICAgICAobmMgPT09ICcmJyAmJiBuYzEgPT09ICcmJykgfHxcbiAgICAgICAgICAobmMgPT09ICd8JyAmJiBuYzEgPT09ICd8JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBhZHZhbmNlKFAuTClcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gJCBcIiAnIG11c3QgYmUgcGFyc2VkIGV2ZW4gaW5zaWRlIEAoICkgZXh0Z2xvYiBwYXJlbnMgXHUyMDE0IHBhcnNlRG9sbGFyTGlrZVxuICAgIC8vIGNvbnN1bWVzIG1hdGNoaW5nICkgc28gcGFyZW5EZXB0aCBzdGF5cyBjb25zaXN0ZW50LlxuICAgIGlmIChjID09PSAnJCcpIHtcbiAgICAgIGNvbnN0IGMxID0gcGVlayhQLkwsIDEpXG4gICAgICBpZiAoXG4gICAgICAgIGMxID09PSAnKCcgfHxcbiAgICAgICAgYzEgPT09ICd7JyB8fFxuICAgICAgICBpc0lkZW50U3RhcnQoYzEpIHx8XG4gICAgICAgIFNQRUNJQUxfVkFSUy5oYXMoYzEpXG4gICAgICApIHtcbiAgICAgICAgZmx1c2hTZWcoKVxuICAgICAgICBjb25zdCBleHAgPSBwYXJzZURvbGxhckxpa2UoUClcbiAgICAgICAgaWYgKGV4cCkgcGFydHMucHVzaChleHApXG4gICAgICAgIHNlZ1N0YXJ0ID0gUC5MLmJcbiAgICAgICAgc2VnU3RhcnRJID0gUC5MLmlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGMgPT09ICdcIicpIHtcbiAgICAgIGZsdXNoU2VnKClcbiAgICAgIHBhcnRzLnB1c2gocGFyc2VEb3VibGVRdW90ZWQoUCkpXG4gICAgICBzZWdTdGFydCA9IFAuTC5iXG4gICAgICBzZWdTdGFydEkgPSBQLkwuaVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICBmbHVzaFNlZygpXG4gICAgICBjb25zdCB0b2sgPSBuZXh0VG9rZW4oUC5MLCAnYXJnJylcbiAgICAgIHBhcnRzLnB1c2gobGVhZihQLCAncmF3X3N0cmluZycsIHRvaykpXG4gICAgICBzZWdTdGFydCA9IFAuTC5iXG4gICAgICBzZWdTdGFydEkgPSBQLkwuaVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGMgPT09ICcoJykgcGFyZW5EZXB0aCsrXG4gICAgZWxzZSBpZiAoYyA9PT0gJyknICYmIHBhcmVuRGVwdGggPiAwKSBwYXJlbkRlcHRoLS1cbiAgICBhZHZhbmNlKFAuTClcbiAgfVxuICBmbHVzaFNlZygpXG4gIHJldHVybiBwYXJ0c1xufVxuXG5mdW5jdGlvbiBwYXJzZVRlc3RQcmltYXJ5KFA6IFBhcnNlU3RhdGUsIGNsb3Nlcjogc3RyaW5nKTogVHNOb2RlIHwgbnVsbCB7XG4gIHNraXBCbGFua3MoUC5MKVxuICAvLyBTdG9wIGF0IGNsb3NlclxuICBpZiAoY2xvc2VyID09PSAnXScgJiYgcGVlayhQLkwpID09PSAnXScpIHJldHVybiBudWxsXG4gIGlmIChjbG9zZXIgPT09ICddXScgJiYgcGVlayhQLkwpID09PSAnXScgJiYgcGVlayhQLkwsIDEpID09PSAnXScpIHJldHVybiBudWxsXG4gIHJldHVybiBwYXJzZVdvcmQoUCwgJ2FyZycpXG59XG5cbi8qKlxuICogQXJpdGhtZXRpYyBjb250ZXh0IG1vZGVzOlxuICogLSAndmFyJzogYmFyZSBpZGVudGlmaWVycyBcdTIxOTIgdmFyaWFibGVfbmFtZSAoZGVmYXVsdCwgdXNlZCBpbiAkKCguLikpLCAoKC4uKSkpXG4gKiAtICd3b3JkJzogYmFyZSBpZGVudGlmaWVycyBcdTIxOTIgd29yZCAoYy1zdHlsZSBmb3IgaGVhZCBjb25kaXRpb24vdXBkYXRlIGNsYXVzZXMpXG4gKiAtICdhc3NpZ24nOiBpZGVudGlmaWVycyB3aXRoID0gXHUyMTkyIHZhcmlhYmxlX2Fzc2lnbm1lbnQgKGMtc3R5bGUgZm9yIGluaXQgY2xhdXNlKVxuICovXG50eXBlIEFyaXRoTW9kZSA9ICd2YXInIHwgJ3dvcmQnIHwgJ2Fzc2lnbidcblxuLyoqIE9wZXJhdG9yIHByZWNlZGVuY2UgdGFibGUgKGhpZ2hlciA9IHRpZ2h0ZXIgYmluZGluZykuICovXG5jb25zdCBBUklUSF9QUkVDOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xuICAnPSc6IDIsXG4gICcrPSc6IDIsXG4gICctPSc6IDIsXG4gICcqPSc6IDIsXG4gICcvPSc6IDIsXG4gICclPSc6IDIsXG4gICc8PD0nOiAyLFxuICAnPj49JzogMixcbiAgJyY9JzogMixcbiAgJ149JzogMixcbiAgJ3w9JzogMixcbiAgJ3x8JzogNCxcbiAgJyYmJzogNSxcbiAgJ3wnOiA2LFxuICAnXic6IDcsXG4gICcmJzogOCxcbiAgJz09JzogOSxcbiAgJyE9JzogOSxcbiAgJzwnOiAxMCxcbiAgJz4nOiAxMCxcbiAgJzw9JzogMTAsXG4gICc+PSc6IDEwLFxuICAnPDwnOiAxMSxcbiAgJz4+JzogMTEsXG4gICcrJzogMTIsXG4gICctJzogMTIsXG4gICcqJzogMTMsXG4gICcvJzogMTMsXG4gICclJzogMTMsXG4gICcqKic6IDE0LFxufVxuXG4vKiogUmlnaHQtYXNzb2NpYXRpdmUgb3BlcmF0b3JzIChhc3NpZ25tZW50IGFuZCBleHBvbmVudCkuICovXG5jb25zdCBBUklUSF9SSUdIVF9BU1NPQyA9IG5ldyBTZXQoW1xuICAnPScsXG4gICcrPScsXG4gICctPScsXG4gICcqPScsXG4gICcvPScsXG4gICclPScsXG4gICc8PD0nLFxuICAnPj49JyxcbiAgJyY9JyxcbiAgJ149JyxcbiAgJ3w9JyxcbiAgJyoqJyxcbl0pXG5cbmZ1bmN0aW9uIHBhcnNlQXJpdGhFeHByKFxuICBQOiBQYXJzZVN0YXRlLFxuICBzdG9wOiBzdHJpbmcsXG4gIG1vZGU6IEFyaXRoTW9kZSA9ICd2YXInLFxuKTogVHNOb2RlIHwgbnVsbCB7XG4gIHJldHVybiBwYXJzZUFyaXRoVGVybmFyeShQLCBzdG9wLCBtb2RlKVxufVxuXG4vKiogVG9wLWxldmVsOiBjb21tYS1zZXBhcmF0ZWQgbGlzdC4gYXJpdGhtZXRpY19leHBhbnNpb24gZW1pdHMgbXVsdGlwbGUgY2hpbGRyZW4uICovXG5mdW5jdGlvbiBwYXJzZUFyaXRoQ29tbWFMaXN0KFxuICBQOiBQYXJzZVN0YXRlLFxuICBzdG9wOiBzdHJpbmcsXG4gIG1vZGU6IEFyaXRoTW9kZSA9ICd2YXInLFxuKTogVHNOb2RlW10ge1xuICBjb25zdCBvdXQ6IFRzTm9kZVtdID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBlID0gcGFyc2VBcml0aFRlcm5hcnkoUCwgc3RvcCwgbW9kZSlcbiAgICBpZiAoZSkgb3V0LnB1c2goZSlcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBpZiAocGVlayhQLkwpID09PSAnLCcgJiYgIWlzQXJpdGhTdG9wKFAsIHN0b3ApKSB7XG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBwYXJzZUFyaXRoVGVybmFyeShcbiAgUDogUGFyc2VTdGF0ZSxcbiAgc3RvcDogc3RyaW5nLFxuICBtb2RlOiBBcml0aE1vZGUsXG4pOiBUc05vZGUgfCBudWxsIHtcbiAgY29uc3QgY29uZCA9IHBhcnNlQXJpdGhCaW5hcnkoUCwgc3RvcCwgMCwgbW9kZSlcbiAgaWYgKCFjb25kKSByZXR1cm4gbnVsbFxuICBza2lwQmxhbmtzKFAuTClcbiAgaWYgKHBlZWsoUC5MKSA9PT0gJz8nKSB7XG4gICAgY29uc3QgcXMgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNvbnN0IHEgPSBtayhQLCAnPycsIHFzLCBQLkwuYiwgW10pXG4gICAgY29uc3QgdCA9IHBhcnNlQXJpdGhCaW5hcnkoUCwgJzonLCAwLCBtb2RlKVxuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIGxldCBjb2xvbjogVHNOb2RlXG4gICAgaWYgKHBlZWsoUC5MKSA9PT0gJzonKSB7XG4gICAgICBjb25zdCBjcyA9IFAuTC5iXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNvbG9uID0gbWsoUCwgJzonLCBjcywgUC5MLmIsIFtdKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvbiA9IG1rKFAsICc6JywgUC5MLmIsIFAuTC5iLCBbXSlcbiAgICB9XG4gICAgY29uc3QgZiA9IHBhcnNlQXJpdGhUZXJuYXJ5KFAsIHN0b3AsIG1vZGUpXG4gICAgY29uc3QgbGFzdCA9IGYgPz8gY29sb25cbiAgICBjb25zdCBraWRzOiBUc05vZGVbXSA9IFtjb25kLCBxXVxuICAgIGlmICh0KSBraWRzLnB1c2godClcbiAgICBraWRzLnB1c2goY29sb24pXG4gICAgaWYgKGYpIGtpZHMucHVzaChmKVxuICAgIHJldHVybiBtayhQLCAndGVybmFyeV9leHByZXNzaW9uJywgY29uZC5zdGFydEluZGV4LCBsYXN0LmVuZEluZGV4LCBraWRzKVxuICB9XG4gIHJldHVybiBjb25kXG59XG5cbi8qKiBTY2FuIG5leHQgYXJpdGhtZXRpYyBiaW5hcnkgb3BlcmF0b3I7IHJldHVybnMgW3RleHQsIGxlbmd0aF0gb3IgbnVsbC4gKi9cbmZ1bmN0aW9uIHNjYW5Bcml0aE9wKFA6IFBhcnNlU3RhdGUpOiBbc3RyaW5nLCBudW1iZXJdIHwgbnVsbCB7XG4gIGNvbnN0IGMgPSBwZWVrKFAuTClcbiAgY29uc3QgYzEgPSBwZWVrKFAuTCwgMSlcbiAgY29uc3QgYzIgPSBwZWVrKFAuTCwgMilcbiAgLy8gMy1jaGFyOiA8PD0gPj49XG4gIGlmIChjID09PSAnPCcgJiYgYzEgPT09ICc8JyAmJiBjMiA9PT0gJz0nKSByZXR1cm4gWyc8PD0nLCAzXVxuICBpZiAoYyA9PT0gJz4nICYmIGMxID09PSAnPicgJiYgYzIgPT09ICc9JykgcmV0dXJuIFsnPj49JywgM11cbiAgLy8gMi1jaGFyXG4gIGlmIChjID09PSAnKicgJiYgYzEgPT09ICcqJykgcmV0dXJuIFsnKionLCAyXVxuICBpZiAoYyA9PT0gJzwnICYmIGMxID09PSAnPCcpIHJldHVybiBbJzw8JywgMl1cbiAgaWYgKGMgPT09ICc+JyAmJiBjMSA9PT0gJz4nKSByZXR1cm4gWyc+PicsIDJdXG4gIGlmIChjID09PSAnPScgJiYgYzEgPT09ICc9JykgcmV0dXJuIFsnPT0nLCAyXVxuICBpZiAoYyA9PT0gJyEnICYmIGMxID09PSAnPScpIHJldHVybiBbJyE9JywgMl1cbiAgaWYgKGMgPT09ICc8JyAmJiBjMSA9PT0gJz0nKSByZXR1cm4gWyc8PScsIDJdXG4gIGlmIChjID09PSAnPicgJiYgYzEgPT09ICc9JykgcmV0dXJuIFsnPj0nLCAyXVxuICBpZiAoYyA9PT0gJyYnICYmIGMxID09PSAnJicpIHJldHVybiBbJyYmJywgMl1cbiAgaWYgKGMgPT09ICd8JyAmJiBjMSA9PT0gJ3wnKSByZXR1cm4gWyd8fCcsIDJdXG4gIGlmIChjID09PSAnKycgJiYgYzEgPT09ICc9JykgcmV0dXJuIFsnKz0nLCAyXVxuICBpZiAoYyA9PT0gJy0nICYmIGMxID09PSAnPScpIHJldHVybiBbJy09JywgMl1cbiAgaWYgKGMgPT09ICcqJyAmJiBjMSA9PT0gJz0nKSByZXR1cm4gWycqPScsIDJdXG4gIGlmIChjID09PSAnLycgJiYgYzEgPT09ICc9JykgcmV0dXJuIFsnLz0nLCAyXVxuICBpZiAoYyA9PT0gJyUnICYmIGMxID09PSAnPScpIHJldHVybiBbJyU9JywgMl1cbiAgaWYgKGMgPT09ICcmJyAmJiBjMSA9PT0gJz0nKSByZXR1cm4gWycmPScsIDJdXG4gIGlmIChjID09PSAnXicgJiYgYzEgPT09ICc9JykgcmV0dXJuIFsnXj0nLCAyXVxuICBpZiAoYyA9PT0gJ3wnICYmIGMxID09PSAnPScpIHJldHVybiBbJ3w9JywgMl1cbiAgLy8gMS1jaGFyIFx1MjAxNCBidXQgTk9UICsrIC0tICh0aG9zZSBhcmUgcHJlL3Bvc3RmaXgpXG4gIGlmIChjID09PSAnKycgJiYgYzEgIT09ICcrJykgcmV0dXJuIFsnKycsIDFdXG4gIGlmIChjID09PSAnLScgJiYgYzEgIT09ICctJykgcmV0dXJuIFsnLScsIDFdXG4gIGlmIChjID09PSAnKicpIHJldHVybiBbJyonLCAxXVxuICBpZiAoYyA9PT0gJy8nKSByZXR1cm4gWycvJywgMV1cbiAgaWYgKGMgPT09ICclJykgcmV0dXJuIFsnJScsIDFdXG4gIGlmIChjID09PSAnPCcpIHJldHVybiBbJzwnLCAxXVxuICBpZiAoYyA9PT0gJz4nKSByZXR1cm4gWyc+JywgMV1cbiAgaWYgKGMgPT09ICcmJykgcmV0dXJuIFsnJicsIDFdXG4gIGlmIChjID09PSAnfCcpIHJldHVybiBbJ3wnLCAxXVxuICBpZiAoYyA9PT0gJ14nKSByZXR1cm4gWydeJywgMV1cbiAgaWYgKGMgPT09ICc9JykgcmV0dXJuIFsnPScsIDFdXG4gIHJldHVybiBudWxsXG59XG5cbi8qKiBQcmVjZWRlbmNlLWNsaW1iaW5nIGJpbmFyeSBleHByZXNzaW9uIHBhcnNlci4gKi9cbmZ1bmN0aW9uIHBhcnNlQXJpdGhCaW5hcnkoXG4gIFA6IFBhcnNlU3RhdGUsXG4gIHN0b3A6IHN0cmluZyxcbiAgbWluUHJlYzogbnVtYmVyLFxuICBtb2RlOiBBcml0aE1vZGUsXG4pOiBUc05vZGUgfCBudWxsIHtcbiAgbGV0IGxlZnQgPSBwYXJzZUFyaXRoVW5hcnkoUCwgc3RvcCwgbW9kZSlcbiAgaWYgKCFsZWZ0KSByZXR1cm4gbnVsbFxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHNraXBCbGFua3MoUC5MKVxuICAgIGlmIChpc0FyaXRoU3RvcChQLCBzdG9wKSkgYnJlYWtcbiAgICBpZiAocGVlayhQLkwpID09PSAnLCcpIGJyZWFrXG4gICAgY29uc3Qgb3BJbmZvID0gc2NhbkFyaXRoT3AoUClcbiAgICBpZiAoIW9wSW5mbykgYnJlYWtcbiAgICBjb25zdCBbb3BUZXh0LCBvcExlbl0gPSBvcEluZm9cbiAgICBjb25zdCBwcmVjID0gQVJJVEhfUFJFQ1tvcFRleHRdXG4gICAgaWYgKHByZWMgPT09IHVuZGVmaW5lZCB8fCBwcmVjIDwgbWluUHJlYykgYnJlYWtcbiAgICBjb25zdCBvcyA9IFAuTC5iXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBvcExlbjsgaysrKSBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBvcCA9IG1rKFAsIG9wVGV4dCwgb3MsIFAuTC5iLCBbXSlcbiAgICBjb25zdCBuZXh0TWluID0gQVJJVEhfUklHSFRfQVNTT0MuaGFzKG9wVGV4dCkgPyBwcmVjIDogcHJlYyArIDFcbiAgICBjb25zdCByaWdodCA9IHBhcnNlQXJpdGhCaW5hcnkoUCwgc3RvcCwgbmV4dE1pbiwgbW9kZSlcbiAgICBpZiAoIXJpZ2h0KSBicmVha1xuICAgIGxlZnQgPSBtayhQLCAnYmluYXJ5X2V4cHJlc3Npb24nLCBsZWZ0LnN0YXJ0SW5kZXgsIHJpZ2h0LmVuZEluZGV4LCBbXG4gICAgICBsZWZ0LFxuICAgICAgb3AsXG4gICAgICByaWdodCxcbiAgICBdKVxuICB9XG4gIHJldHVybiBsZWZ0XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJpdGhVbmFyeShcbiAgUDogUGFyc2VTdGF0ZSxcbiAgc3RvcDogc3RyaW5nLFxuICBtb2RlOiBBcml0aE1vZGUsXG4pOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIGlmIChpc0FyaXRoU3RvcChQLCBzdG9wKSkgcmV0dXJuIG51bGxcbiAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICBjb25zdCBjMSA9IHBlZWsoUC5MLCAxKVxuICAvLyBQcmVmaXggKysgLS1cbiAgaWYgKChjID09PSAnKycgJiYgYzEgPT09ICcrJykgfHwgKGMgPT09ICctJyAmJiBjMSA9PT0gJy0nKSkge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGFkdmFuY2UoUC5MKVxuICAgIGNvbnN0IG9wID0gbWsoUCwgYyArIGMxLCBzLCBQLkwuYiwgW10pXG4gICAgY29uc3QgaW5uZXIgPSBwYXJzZUFyaXRoVW5hcnkoUCwgc3RvcCwgbW9kZSlcbiAgICBpZiAoIWlubmVyKSByZXR1cm4gb3BcbiAgICByZXR1cm4gbWsoUCwgJ3VuYXJ5X2V4cHJlc3Npb24nLCBvcC5zdGFydEluZGV4LCBpbm5lci5lbmRJbmRleCwgW29wLCBpbm5lcl0pXG4gIH1cbiAgaWYgKGMgPT09ICctJyB8fCBjID09PSAnKycgfHwgYyA9PT0gJyEnIHx8IGMgPT09ICd+Jykge1xuICAgIC8vIEluICd3b3JkJy8nYXNzaWduJyBtb2RlIChjLXN0eWxlIGZvciBoZWFkKSwgYC1OYCBpcyBhIHNpbmdsZSBudW1iZXJcbiAgICAvLyBsaXRlcmFsIHBlciB0cmVlLXNpdHRlciwgbm90IHVuYXJ5X2V4cHJlc3Npb24uICd2YXInIG1vZGUgdXNlcyB1bmFyeS5cbiAgICBpZiAobW9kZSAhPT0gJ3ZhcicgJiYgYyA9PT0gJy0nICYmIGlzRGlnaXQoYzEpKSB7XG4gICAgICBjb25zdCBzID0gUC5MLmJcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgd2hpbGUgKGlzRGlnaXQocGVlayhQLkwpKSkgYWR2YW5jZShQLkwpXG4gICAgICByZXR1cm4gbWsoUCwgJ251bWJlcicsIHMsIFAuTC5iLCBbXSlcbiAgICB9XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgb3AgPSBtayhQLCBjLCBzLCBQLkwuYiwgW10pXG4gICAgY29uc3QgaW5uZXIgPSBwYXJzZUFyaXRoVW5hcnkoUCwgc3RvcCwgbW9kZSlcbiAgICBpZiAoIWlubmVyKSByZXR1cm4gb3BcbiAgICByZXR1cm4gbWsoUCwgJ3VuYXJ5X2V4cHJlc3Npb24nLCBvcC5zdGFydEluZGV4LCBpbm5lci5lbmRJbmRleCwgW29wLCBpbm5lcl0pXG4gIH1cbiAgcmV0dXJuIHBhcnNlQXJpdGhQb3N0Zml4KFAsIHN0b3AsIG1vZGUpXG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJpdGhQb3N0Zml4KFxuICBQOiBQYXJzZVN0YXRlLFxuICBzdG9wOiBzdHJpbmcsXG4gIG1vZGU6IEFyaXRoTW9kZSxcbik6IFRzTm9kZSB8IG51bGwge1xuICBjb25zdCBwcmltID0gcGFyc2VBcml0aFByaW1hcnkoUCwgc3RvcCwgbW9kZSlcbiAgaWYgKCFwcmltKSByZXR1cm4gbnVsbFxuICBjb25zdCBjID0gcGVlayhQLkwpXG4gIGNvbnN0IGMxID0gcGVlayhQLkwsIDEpXG4gIGlmICgoYyA9PT0gJysnICYmIGMxID09PSAnKycpIHx8IChjID09PSAnLScgJiYgYzEgPT09ICctJykpIHtcbiAgICBjb25zdCBzID0gUC5MLmJcbiAgICBhZHZhbmNlKFAuTClcbiAgICBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBvcCA9IG1rKFAsIGMgKyBjMSwgcywgUC5MLmIsIFtdKVxuICAgIHJldHVybiBtayhQLCAncG9zdGZpeF9leHByZXNzaW9uJywgcHJpbS5zdGFydEluZGV4LCBvcC5lbmRJbmRleCwgW3ByaW0sIG9wXSlcbiAgfVxuICByZXR1cm4gcHJpbVxufVxuXG5mdW5jdGlvbiBwYXJzZUFyaXRoUHJpbWFyeShcbiAgUDogUGFyc2VTdGF0ZSxcbiAgc3RvcDogc3RyaW5nLFxuICBtb2RlOiBBcml0aE1vZGUsXG4pOiBUc05vZGUgfCBudWxsIHtcbiAgc2tpcEJsYW5rcyhQLkwpXG4gIGlmIChpc0FyaXRoU3RvcChQLCBzdG9wKSkgcmV0dXJuIG51bGxcbiAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICBpZiAoYyA9PT0gJygnKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgYWR2YW5jZShQLkwpXG4gICAgY29uc3Qgb3BlbiA9IG1rKFAsICcoJywgcywgUC5MLmIsIFtdKVxuICAgIC8vIFBhcmVudGhlc2l6ZWQgZXhwcmVzc2lvbiBtYXkgY29udGFpbiBjb21tYS1zZXBhcmF0ZWQgZXhwcnNcbiAgICBjb25zdCBpbm5lcnMgPSBwYXJzZUFyaXRoQ29tbWFMaXN0KFAsICcpJywgbW9kZSlcbiAgICBza2lwQmxhbmtzKFAuTClcbiAgICBsZXQgY2xvc2U6IFRzTm9kZVxuICAgIGlmIChwZWVrKFAuTCkgPT09ICcpJykge1xuICAgICAgY29uc3QgY3MgPSBQLkwuYlxuICAgICAgYWR2YW5jZShQLkwpXG4gICAgICBjbG9zZSA9IG1rKFAsICcpJywgY3MsIFAuTC5iLCBbXSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UgPSBtayhQLCAnKScsIFAuTC5iLCBQLkwuYiwgW10pXG4gICAgfVxuICAgIHJldHVybiBtayhQLCAncGFyZW50aGVzaXplZF9leHByZXNzaW9uJywgb3Blbi5zdGFydEluZGV4LCBjbG9zZS5lbmRJbmRleCwgW1xuICAgICAgb3BlbixcbiAgICAgIC4uLmlubmVycyxcbiAgICAgIGNsb3NlLFxuICAgIF0pXG4gIH1cbiAgaWYgKGMgPT09ICdcIicpIHtcbiAgICByZXR1cm4gcGFyc2VEb3VibGVRdW90ZWQoUClcbiAgfVxuICBpZiAoYyA9PT0gJyQnKSB7XG4gICAgcmV0dXJuIHBhcnNlRG9sbGFyTGlrZShQKVxuICB9XG4gIGlmIChpc0RpZ2l0KGMpKSB7XG4gICAgY29uc3QgcyA9IFAuTC5iXG4gICAgd2hpbGUgKGlzRGlnaXQocGVlayhQLkwpKSkgYWR2YW5jZShQLkwpXG4gICAgLy8gSGV4OiAweDFmXG4gICAgaWYgKFxuICAgICAgUC5MLmIgLSBzID09PSAxICYmXG4gICAgICBjID09PSAnMCcgJiZcbiAgICAgIChwZWVrKFAuTCkgPT09ICd4JyB8fCBwZWVrKFAuTCkgPT09ICdYJylcbiAgICApIHtcbiAgICAgIGFkdmFuY2UoUC5MKVxuICAgICAgd2hpbGUgKGlzSGV4RGlnaXQocGVlayhQLkwpKSkgYWR2YW5jZShQLkwpXG4gICAgfVxuICAgIC8vIEJhc2Ugbm90YXRpb246IEJBU0UjRElHSVRTIGUuZy4gMiMxMDEwLCAxNiNmZlxuICAgIGVsc2UgaWYgKHBlZWsoUC5MKSA9PT0gJyMnKSB7XG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIHdoaWxlIChpc0Jhc2VEaWdpdChwZWVrKFAuTCkpKSBhZHZhbmNlKFAuTClcbiAgICB9XG4gICAgcmV0dXJuIG1rKFAsICdudW1iZXInLCBzLCBQLkwuYiwgW10pXG4gIH1cbiAgaWYgKGlzSWRlbnRTdGFydChjKSkge1xuICAgIGNvbnN0IHMgPSBQLkwuYlxuICAgIHdoaWxlIChpc0lkZW50Q2hhcihwZWVrKFAuTCkpKSBhZHZhbmNlKFAuTClcbiAgICBjb25zdCBuYyA9IHBlZWsoUC5MKVxuICAgIC8vIEFzc2lnbm1lbnQgaW4gJ2Fzc2lnbicgbW9kZSAoYy1zdHlsZSBmb3IgaW5pdCk6IGVtaXQgdmFyaWFibGVfYXNzaWdubWVudFxuICAgIC8vIHNvIGNoYWluZWQgYGEgPSBiID0gYyA9IDFgIG5lc3RzIGNvcnJlY3RseS4gT3RoZXIgbW9kZXMgdHJlYXQgYD1gIGFzIGFcbiAgICAvLyBiaW5hcnlfZXhwcmVzc2lvbiBvcGVyYXRvciB2aWEgdGhlIHByZWNlZGVuY2UgdGFibGUuXG4gICAgaWYgKG1vZGUgPT09ICdhc3NpZ24nKSB7XG4gICAgICBza2lwQmxhbmtzKFAuTClcbiAgICAgIGNvbnN0IGFjID0gcGVlayhQLkwpXG4gICAgICBjb25zdCBhYzEgPSBwZWVrKFAuTCwgMSlcbiAgICAgIGlmIChhYyA9PT0gJz0nICYmIGFjMSAhPT0gJz0nKSB7XG4gICAgICAgIGNvbnN0IHZuID0gbWsoUCwgJ3ZhcmlhYmxlX25hbWUnLCBzLCBQLkwuYiwgW10pXG4gICAgICAgIGNvbnN0IGVzID0gUC5MLmJcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIGNvbnN0IGVxID0gbWsoUCwgJz0nLCBlcywgUC5MLmIsIFtdKVxuICAgICAgICAvLyBSSFMgbWF5IGl0c2VsZiBiZSBhbm90aGVyIGFzc2lnbm1lbnQgKGNoYWluZWQpXG4gICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlQXJpdGhUZXJuYXJ5KFAsIHN0b3AsIG1vZGUpXG4gICAgICAgIGNvbnN0IGVuZCA9IHZhbCA/IHZhbC5lbmRJbmRleCA6IGVxLmVuZEluZGV4XG4gICAgICAgIGNvbnN0IGtpZHMgPSB2YWwgPyBbdm4sIGVxLCB2YWxdIDogW3ZuLCBlcV1cbiAgICAgICAgcmV0dXJuIG1rKFAsICd2YXJpYWJsZV9hc3NpZ25tZW50JywgcywgZW5kLCBraWRzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBTdWJzY3JpcHRcbiAgICBpZiAobmMgPT09ICdbJykge1xuICAgICAgY29uc3Qgdm4gPSBtayhQLCAndmFyaWFibGVfbmFtZScsIHMsIFAuTC5iLCBbXSlcbiAgICAgIGNvbnN0IGJyUyA9IFAuTC5iXG4gICAgICBhZHZhbmNlKFAuTClcbiAgICAgIGNvbnN0IGJyT3BlbiA9IG1rKFAsICdbJywgYnJTLCBQLkwuYiwgW10pXG4gICAgICBjb25zdCBpZHggPSBwYXJzZUFyaXRoVGVybmFyeShQLCAnXScsICd2YXInKSA/PyBwYXJzZURvbGxhckxpa2UoUClcbiAgICAgIHNraXBCbGFua3MoUC5MKVxuICAgICAgbGV0IGJyQ2xvc2U6IFRzTm9kZVxuICAgICAgaWYgKHBlZWsoUC5MKSA9PT0gJ10nKSB7XG4gICAgICAgIGNvbnN0IGNzID0gUC5MLmJcbiAgICAgICAgYWR2YW5jZShQLkwpXG4gICAgICAgIGJyQ2xvc2UgPSBtayhQLCAnXScsIGNzLCBQLkwuYiwgW10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBickNsb3NlID0gbWsoUCwgJ10nLCBQLkwuYiwgUC5MLmIsIFtdKVxuICAgICAgfVxuICAgICAgY29uc3Qga2lkcyA9IGlkeCA/IFt2biwgYnJPcGVuLCBpZHgsIGJyQ2xvc2VdIDogW3ZuLCBick9wZW4sIGJyQ2xvc2VdXG4gICAgICByZXR1cm4gbWsoUCwgJ3N1YnNjcmlwdCcsIHMsIGJyQ2xvc2UuZW5kSW5kZXgsIGtpZHMpXG4gICAgfVxuICAgIC8vIEJhcmUgaWRlbnRpZmllcjogdmFyaWFibGVfbmFtZSBpbiAndmFyJyBtb2RlLCB3b3JkIGluICd3b3JkJy8nYXNzaWduJyBtb2RlLlxuICAgIC8vICdhc3NpZ24nIG1vZGUgZmFsbHMgdGhyb3VnaCB0byB3b3JkIHdoZW4gbm8gYD1gIGZvbGxvd3MgKGMtc3R5bGUgZm9yXG4gICAgLy8gY29uZC91cGRhdGUgY2xhdXNlczogYGM8PTVgIFx1MjE5MiBiaW5hcnlfZXhwcmVzc2lvbih3b3JkLCBudW1iZXIpKS5cbiAgICBjb25zdCBpZGVudFR5cGUgPSBtb2RlID09PSAndmFyJyA/ICd2YXJpYWJsZV9uYW1lJyA6ICd3b3JkJ1xuICAgIHJldHVybiBtayhQLCBpZGVudFR5cGUsIHMsIFAuTC5iLCBbXSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0FyaXRoU3RvcChQOiBQYXJzZVN0YXRlLCBzdG9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgYyA9IHBlZWsoUC5MKVxuICBpZiAoc3RvcCA9PT0gJykpJykgcmV0dXJuIGMgPT09ICcpJyAmJiBwZWVrKFAuTCwgMSkgPT09ICcpJ1xuICBpZiAoc3RvcCA9PT0gJyknKSByZXR1cm4gYyA9PT0gJyknXG4gIGlmIChzdG9wID09PSAnOycpIHJldHVybiBjID09PSAnOydcbiAgaWYgKHN0b3AgPT09ICc6JykgcmV0dXJuIGMgPT09ICc6J1xuICBpZiAoc3RvcCA9PT0gJ10nKSByZXR1cm4gYyA9PT0gJ10nXG4gIGlmIChzdG9wID09PSAnfScpIHJldHVybiBjID09PSAnfSdcbiAgaWYgKHN0b3AgPT09ICc6fScpIHJldHVybiBjID09PSAnOicgfHwgYyA9PT0gJ30nXG4gIHJldHVybiBjID09PSAnJyB8fCBjID09PSAnXFxuJ1xufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7XG4gIGVuc3VyZVBhcnNlckluaXRpYWxpemVkLFxuICBnZXRQYXJzZXJNb2R1bGUsXG4gIHR5cGUgVHNOb2RlLFxufSBmcm9tICcuL2Jhc2hQYXJzZXIuanMnXG5cbmV4cG9ydCB0eXBlIE5vZGUgPSBUc05vZGVcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRDb21tYW5kRGF0YSB7XG4gIHJvb3ROb2RlOiBOb2RlXG4gIGVudlZhcnM6IHN0cmluZ1tdXG4gIGNvbW1hbmROb2RlOiBOb2RlIHwgbnVsbFxuICBvcmlnaW5hbENvbW1hbmQ6IHN0cmluZ1xufVxuXG5jb25zdCBNQVhfQ09NTUFORF9MRU5HVEggPSAxMDAwMFxuY29uc3QgREVDTEFSQVRJT05fQ09NTUFORFMgPSBuZXcgU2V0KFtcbiAgJ2V4cG9ydCcsXG4gICdkZWNsYXJlJyxcbiAgJ3R5cGVzZXQnLFxuICAncmVhZG9ubHknLFxuICAnbG9jYWwnLFxuICAndW5zZXQnLFxuICAndW5zZXRlbnYnLFxuXSlcbmNvbnN0IEFSR1VNRU5UX1RZUEVTID0gbmV3IFNldChbJ3dvcmQnLCAnc3RyaW5nJywgJ3Jhd19zdHJpbmcnLCAnbnVtYmVyJ10pXG5jb25zdCBTVUJTVElUVVRJT05fVFlQRVMgPSBuZXcgU2V0KFtcbiAgJ2NvbW1hbmRfc3Vic3RpdHV0aW9uJyxcbiAgJ3Byb2Nlc3Nfc3Vic3RpdHV0aW9uJyxcbl0pXG5jb25zdCBDT01NQU5EX1RZUEVTID0gbmV3IFNldChbJ2NvbW1hbmQnLCAnZGVjbGFyYXRpb25fY29tbWFuZCddKVxuXG5sZXQgbG9nZ2VkID0gZmFsc2VcbmZ1bmN0aW9uIGxvZ0xvYWRPbmNlKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKGxvZ2dlZCkgcmV0dXJuXG4gIGxvZ2dlZCA9IHRydWVcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIHN1Y2Nlc3MgPyAndHJlZS1zaXR0ZXI6IG5hdGl2ZSBtb2R1bGUgbG9hZGVkJyA6ICd0cmVlLXNpdHRlcjogdW5hdmFpbGFibGUnLFxuICApXG4gIGxvZ0V2ZW50KCd0ZW5ndV90cmVlX3NpdHRlcl9sb2FkJywgeyBzdWNjZXNzIH0pXG59XG5cbi8qKlxuICogQXdhaXRzIFdBU00gaW5pdCAoUGFyc2VyLmluaXQgKyBMYW5ndWFnZS5sb2FkKS4gTXVzdCBiZSBjYWxsZWQgYmVmb3JlXG4gKiBwYXJzZUNvbW1hbmQvcGFyc2VDb21tYW5kUmF3IGZvciB0aGUgcGFyc2VyIHRvIGJlIGF2YWlsYWJsZS4gSWRlbXBvdGVudC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUluaXRpYWxpemVkKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoZmVhdHVyZSgnVFJFRV9TSVRURVJfQkFTSCcpIHx8IGZlYXR1cmUoJ1RSRUVfU0lUVEVSX0JBU0hfU0hBRE9XJykpIHtcbiAgICBhd2FpdCBlbnN1cmVQYXJzZXJJbml0aWFsaXplZCgpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZChcbiAgY29tbWFuZDogc3RyaW5nLFxuKTogUHJvbWlzZTxQYXJzZWRDb21tYW5kRGF0YSB8IG51bGw+IHtcbiAgaWYgKCFjb21tYW5kIHx8IGNvbW1hbmQubGVuZ3RoID4gTUFYX0NPTU1BTkRfTEVOR1RIKSByZXR1cm4gbnVsbFxuXG4gIC8vIEdhdGU6IGFudC1vbmx5IHVudGlsIHBlbnRlc3QuIEV4dGVybmFsIGJ1aWxkcyBmYWxsIGJhY2sgdG8gbGVnYWN5XG4gIC8vIHJlZ2V4L3NoZWxsLXF1b3RlIHBhdGguIEd1YXJkaW5nIHRoZSB3aG9sZSBib2R5IGluc2lkZSB0aGUgcG9zaXRpdmVcbiAgLy8gYnJhbmNoIGxldHMgQnVuIERDRSB0aGUgTkFQSSBpbXBvcnQgQU5EIGtlZXBzIHRlbGVtZXRyeSBob25lc3QgXHUyMDE0IHdlXG4gIC8vIG9ubHkgZmlyZSB0ZW5ndV90cmVlX3NpdHRlcl9sb2FkIHdoZW4gYSBsb2FkIHdhcyBnZW51aW5lbHkgYXR0ZW1wdGVkLlxuICBpZiAoZmVhdHVyZSgnVFJFRV9TSVRURVJfQkFTSCcpKSB7XG4gICAgYXdhaXQgZW5zdXJlUGFyc2VySW5pdGlhbGl6ZWQoKVxuICAgIGNvbnN0IG1vZCA9IGdldFBhcnNlck1vZHVsZSgpXG4gICAgbG9nTG9hZE9uY2UobW9kICE9PSBudWxsKVxuICAgIGlmICghbW9kKSByZXR1cm4gbnVsbFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvb3ROb2RlID0gbW9kLnBhcnNlKGNvbW1hbmQpXG4gICAgICBpZiAoIXJvb3ROb2RlKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBjb21tYW5kTm9kZSA9IGZpbmRDb21tYW5kTm9kZShyb290Tm9kZSwgbnVsbClcbiAgICAgIGNvbnN0IGVudlZhcnMgPSBleHRyYWN0RW52VmFycyhjb21tYW5kTm9kZSlcblxuICAgICAgcmV0dXJuIHsgcm9vdE5vZGUsIGVudlZhcnMsIGNvbW1hbmROb2RlLCBvcmlnaW5hbENvbW1hbmQ6IGNvbW1hbmQgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBTRUNVUklUWTogU2VudGluZWwgZm9yIFwicGFyc2VyIHdhcyBsb2FkZWQgYW5kIGF0dGVtcHRlZCwgYnV0IGFib3J0ZWRcIlxuICogKHRpbWVvdXQgLyBub2RlIGJ1ZGdldCAvIFJ1c3QgcGFuaWMpLiBEaXN0aW5jdCBmcm9tIGBudWxsYCAobW9kdWxlIG5vdFxuICogbG9hZGVkKS4gQWR2ZXJzYXJpYWwgaW5wdXQgY2FuIHRyaWdnZXIgYWJvcnQgdW5kZXIgTUFYX0NPTU1BTkRfTEVOR1RIOlxuICogYCgoIGFbMF1bMF0uLi4gKSlgIHdpdGggfjI4MDAgc3Vic2NyaXB0cyBoaXRzIFBBUlNFX1RJTUVPVVRfTUlDUk9TLlxuICogQ2FsbGVycyBNVVNUIHRyZWF0IHRoaXMgYXMgZmFpbC1jbG9zZWQgKHRvby1jb21wbGV4KSwgTk9UIHJvdXRlIHRvIGxlZ2FjeS5cbiAqL1xuZXhwb3J0IGNvbnN0IFBBUlNFX0FCT1JURUQgPSBTeW1ib2woJ3BhcnNlLWFib3J0ZWQnKVxuXG4vKipcbiAqIFJhdyBwYXJzZSBcdTIwMTQgc2tpcHMgZmluZENvbW1hbmROb2RlL2V4dHJhY3RFbnZWYXJzIHdoaWNoIHRoZSBzZWN1cml0eVxuICogd2Fsa2VyIGluIGFzdC50cyBkb2Vzbid0IHVzZS4gU2F2ZXMgb25lIHRyZWUgd2FsayBwZXIgYmFzaCBjb21tYW5kLlxuICpcbiAqIFJldHVybnM6XG4gKiAgIC0gTm9kZTogcGFyc2Ugc3VjY2VlZGVkXG4gKiAgIC0gbnVsbDogbW9kdWxlIG5vdCBsb2FkZWQgLyBmZWF0dXJlIG9mZiAvIGVtcHR5IC8gb3Zlci1sZW5ndGhcbiAqICAgLSBQQVJTRV9BQk9SVEVEOiBtb2R1bGUgbG9hZGVkIGJ1dCBwYXJzZSBmYWlsZWQgKHRpbWVvdXQvcGFuaWMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmRSYXcoXG4gIGNvbW1hbmQ6IHN0cmluZyxcbik6IFByb21pc2U8Tm9kZSB8IG51bGwgfCB0eXBlb2YgUEFSU0VfQUJPUlRFRD4ge1xuICBpZiAoIWNvbW1hbmQgfHwgY29tbWFuZC5sZW5ndGggPiBNQVhfQ09NTUFORF9MRU5HVEgpIHJldHVybiBudWxsXG4gIGlmIChmZWF0dXJlKCdUUkVFX1NJVFRFUl9CQVNIJykgfHwgZmVhdHVyZSgnVFJFRV9TSVRURVJfQkFTSF9TSEFET1cnKSkge1xuICAgIGF3YWl0IGVuc3VyZVBhcnNlckluaXRpYWxpemVkKClcbiAgICBjb25zdCBtb2QgPSBnZXRQYXJzZXJNb2R1bGUoKVxuICAgIGxvZ0xvYWRPbmNlKG1vZCAhPT0gbnVsbClcbiAgICBpZiAoIW1vZCkgcmV0dXJuIG51bGxcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gbW9kLnBhcnNlKGNvbW1hbmQpXG4gICAgICAvLyBTRUNVUklUWTogTW9kdWxlIGxvYWRlZDsgbnVsbCBoZXJlID0gdGltZW91dC9ub2RlLWJ1ZGdldCBhYm9ydCBpblxuICAgICAgLy8gYmFzaFBhcnNlci50cyAoUEFSU0VfVElNRU9VVF9NUz01MCwgTUFYX05PREVTPTUwXzAwMCkuXG4gICAgICAvLyBQcmV2aW91c2x5IGNvbGxhcHNlZCBpbnRvIGByZXR1cm4gbnVsbGAgXHUyMTkyIHBhcnNlLXVuYXZhaWxhYmxlIFx1MjE5MiBsZWdhY3lcbiAgICAgIC8vIHBhdGgsIHdoaWNoIGxhY2tzIEVWQUxfTElLRV9CVUlMVElOUyBcdTIwMTQgYHRyYXBgLCBgZW5hYmxlYCwgYGhhc2hgIGxlYWtlZC5cbiAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RyZWVfc2l0dGVyX3BhcnNlX2Fib3J0Jywge1xuICAgICAgICAgIGNtZExlbmd0aDogY29tbWFuZC5sZW5ndGgsXG4gICAgICAgICAgcGFuaWM6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUEFSU0VfQUJPUlRFRFxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0gY2F0Y2gge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RyZWVfc2l0dGVyX3BhcnNlX2Fib3J0Jywge1xuICAgICAgICBjbWRMZW5ndGg6IGNvbW1hbmQubGVuZ3RoLFxuICAgICAgICBwYW5pYzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gUEFSU0VfQUJPUlRFRFxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBmaW5kQ29tbWFuZE5vZGUobm9kZTogTm9kZSwgcGFyZW50OiBOb2RlIHwgbnVsbCk6IE5vZGUgfCBudWxsIHtcbiAgY29uc3QgeyB0eXBlLCBjaGlsZHJlbiB9ID0gbm9kZVxuXG4gIGlmIChDT01NQU5EX1RZUEVTLmhhcyh0eXBlKSkgcmV0dXJuIG5vZGVcblxuICAvLyBWYXJpYWJsZSBhc3NpZ25tZW50IGZvbGxvd2VkIGJ5IGNvbW1hbmRcbiAgaWYgKHR5cGUgPT09ICd2YXJpYWJsZV9hc3NpZ25tZW50JyAmJiBwYXJlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGFyZW50LmNoaWxkcmVuLmZpbmQoXG4gICAgICAgIGMgPT4gQ09NTUFORF9UWVBFUy5oYXMoYy50eXBlKSAmJiBjLnN0YXJ0SW5kZXggPiBub2RlLnN0YXJ0SW5kZXgsXG4gICAgICApID8/IG51bGxcbiAgICApXG4gIH1cblxuICAvLyBQaXBlbGluZTogcmVjdXJzZSBpbnRvIGZpcnN0IGNoaWxkICh3aGljaCBtYXkgYmUgYSByZWRpcmVjdGVkX3N0YXRlbWVudClcbiAgaWYgKHR5cGUgPT09ICdwaXBlbGluZScpIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ29tbWFuZE5vZGUoY2hpbGQsIG5vZGUpXG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBSZWRpcmVjdGVkIHN0YXRlbWVudDogZmluZCB0aGUgY29tbWFuZCBpbnNpZGVcbiAgaWYgKHR5cGUgPT09ICdyZWRpcmVjdGVkX3N0YXRlbWVudCcpIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZmluZChjID0+IENPTU1BTkRfVFlQRVMuaGFzKGMudHlwZSkpID8/IG51bGxcbiAgfVxuXG4gIC8vIFJlY3Vyc2l2ZSBzZWFyY2hcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDb21tYW5kTm9kZShjaGlsZCwgbm9kZSlcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW52VmFycyhjb21tYW5kTm9kZTogTm9kZSB8IG51bGwpOiBzdHJpbmdbXSB7XG4gIGlmICghY29tbWFuZE5vZGUgfHwgY29tbWFuZE5vZGUudHlwZSAhPT0gJ2NvbW1hbmQnKSByZXR1cm4gW11cblxuICBjb25zdCBlbnZWYXJzOiBzdHJpbmdbXSA9IFtdXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgY29tbWFuZE5vZGUuY2hpbGRyZW4pIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ3ZhcmlhYmxlX2Fzc2lnbm1lbnQnKSB7XG4gICAgICBlbnZWYXJzLnB1c2goY2hpbGQudGV4dClcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09ICdjb21tYW5kX25hbWUnIHx8IGNoaWxkLnR5cGUgPT09ICd3b3JkJykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudlZhcnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RDb21tYW5kQXJndW1lbnRzKGNvbW1hbmROb2RlOiBOb2RlKTogc3RyaW5nW10ge1xuICAvLyBEZWNsYXJhdGlvbiBjb21tYW5kc1xuICBpZiAoY29tbWFuZE5vZGUudHlwZSA9PT0gJ2RlY2xhcmF0aW9uX2NvbW1hbmQnKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGNvbW1hbmROb2RlLmNoaWxkcmVuWzBdXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQgJiYgREVDTEFSQVRJT05fQ09NTUFORFMuaGFzKGZpcnN0Q2hpbGQudGV4dClcbiAgICAgID8gW2ZpcnN0Q2hpbGQudGV4dF1cbiAgICAgIDogW11cbiAgfVxuXG4gIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gW11cbiAgbGV0IGZvdW5kQ29tbWFuZE5hbWUgPSBmYWxzZVxuXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgY29tbWFuZE5vZGUuY2hpbGRyZW4pIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ3ZhcmlhYmxlX2Fzc2lnbm1lbnQnKSBjb250aW51ZVxuXG4gICAgLy8gQ29tbWFuZCBuYW1lXG4gICAgaWYgKFxuICAgICAgY2hpbGQudHlwZSA9PT0gJ2NvbW1hbmRfbmFtZScgfHxcbiAgICAgICghZm91bmRDb21tYW5kTmFtZSAmJiBjaGlsZC50eXBlID09PSAnd29yZCcpXG4gICAgKSB7XG4gICAgICBmb3VuZENvbW1hbmROYW1lID0gdHJ1ZVxuICAgICAgYXJncy5wdXNoKGNoaWxkLnRleHQpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIEFyZ3VtZW50c1xuICAgIGlmIChBUkdVTUVOVF9UWVBFUy5oYXMoY2hpbGQudHlwZSkpIHtcbiAgICAgIGFyZ3MucHVzaChzdHJpcFF1b3RlcyhjaGlsZC50ZXh0KSlcbiAgICB9IGVsc2UgaWYgKFNVQlNUSVRVVElPTl9UWVBFUy5oYXMoY2hpbGQudHlwZSkpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzXG59XG5cbmZ1bmN0aW9uIHN0cmlwUXVvdGVzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0ZXh0Lmxlbmd0aCA+PSAyICYmXG4gICAgKCh0ZXh0WzBdID09PSAnXCInICYmIHRleHQuYXQoLTEpID09PSAnXCInKSB8fFxuICAgICAgKHRleHRbMF0gPT09IFwiJ1wiICYmIHRleHQuYXQoLTEpID09PSBcIidcIikpXG4gICAgPyB0ZXh0LnNsaWNlKDEsIC0xKVxuICAgIDogdGV4dFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ08sU0FBUywwQkFBeUM7QUFDdkQsU0FBTztBQUNUO0FBR08sU0FBUyxrQkFBdUM7QUFDckQsU0FBTztBQUNUO0FBd0ZBLFNBQVMsVUFBVSxLQUFvQjtBQUNyQyxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxJQUFJO0FBQUEsSUFDVCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxVQUFVLENBQUM7QUFBQSxJQUNYLFdBQVc7QUFBQSxFQUNiO0FBQ0Y7QUFHQSxTQUFTLFFBQVEsR0FBZ0I7QUFDL0IsUUFBTSxJQUFJLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUM5QixJQUFFO0FBQ0YsTUFBSSxJQUFJLEtBQU07QUFDWixNQUFFO0FBQUEsRUFDSixXQUFXLElBQUksTUFBTztBQUNwQixNQUFFLEtBQUs7QUFBQSxFQUNULFdBQVcsS0FBSyxTQUFVLEtBQUssT0FBUTtBQUVyQyxNQUFFLEtBQUs7QUFDUCxNQUFFO0FBQUEsRUFDSixPQUFPO0FBQ0wsTUFBRSxLQUFLO0FBQUEsRUFDVDtBQUNGO0FBRUEsU0FBUyxLQUFLLEdBQVUsTUFBTSxHQUFXO0FBQ3ZDLFNBQU8sRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFLO0FBQ2pEO0FBRUEsU0FBUyxPQUFPLEdBQVUsU0FBeUI7QUFFakQsTUFBSSxFQUFFLFVBQVcsUUFBTyxFQUFFLFVBQVUsT0FBTztBQUUzQyxRQUFNLElBQUksSUFBSSxZQUFZLEVBQUUsTUFBTSxDQUFDO0FBQ25DLE1BQUksSUFBSTtBQUNSLE1BQUksSUFBSTtBQUNSLFNBQU8sSUFBSSxFQUFFLEtBQUs7QUFDaEIsTUFBRSxDQUFDLElBQUk7QUFDUCxVQUFNLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQztBQUM1QixRQUFJLElBQUksS0FBTTtBQUNaO0FBQ0E7QUFBQSxJQUNGLFdBQVcsSUFBSSxNQUFPO0FBQ3BCLFdBQUs7QUFDTDtBQUFBLElBQ0YsV0FBVyxLQUFLLFNBQVUsS0FBSyxPQUFRO0FBQ3JDLFFBQUUsSUFBSSxDQUFDLElBQUksSUFBSTtBQUNmLFdBQUs7QUFDTCxXQUFLO0FBQUEsSUFDUCxPQUFPO0FBQ0wsV0FBSztBQUNMO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxJQUFFLEVBQUUsR0FBRyxJQUFJO0FBQ1gsSUFBRSxZQUFZO0FBQ2QsU0FBTyxFQUFFLE9BQU87QUFDbEI7QUFFQSxTQUFTLFdBQVcsR0FBb0I7QUFFdEMsU0FDRyxLQUFLLE9BQU8sS0FBSyxPQUNqQixLQUFLLE9BQU8sS0FBSyxPQUNqQixLQUFLLE9BQU8sS0FBSyxPQUNsQixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTTtBQUVWO0FBRUEsU0FBUyxZQUFZLEdBQW9CO0FBQ3ZDLFNBQU8sV0FBVyxDQUFDLEtBQUssTUFBTTtBQUNoQztBQUVBLFNBQVMsYUFBYSxHQUFvQjtBQUN4QyxTQUFRLEtBQUssT0FBTyxLQUFLLE9BQVMsS0FBSyxPQUFPLEtBQUssT0FBUSxNQUFNO0FBQ25FO0FBRUEsU0FBUyxZQUFZLEdBQW9CO0FBQ3ZDLFNBQU8sYUFBYSxDQUFDLEtBQU0sS0FBSyxPQUFPLEtBQUs7QUFDOUM7QUFFQSxTQUFTLFFBQVEsR0FBb0I7QUFDbkMsU0FBTyxLQUFLLE9BQU8sS0FBSztBQUMxQjtBQUVBLFNBQVMsV0FBVyxHQUFvQjtBQUN0QyxTQUFPLFFBQVEsQ0FBQyxLQUFNLEtBQUssT0FBTyxLQUFLLE9BQVMsS0FBSyxPQUFPLEtBQUs7QUFDbkU7QUFFQSxTQUFTLFlBQVksR0FBb0I7QUFFdkMsU0FBTyxZQUFZLENBQUMsS0FBSyxNQUFNO0FBQ2pDO0FBT0EsU0FBUyxtQkFBbUIsR0FBb0I7QUFDOUMsU0FDRSxNQUFNLE1BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLFFBQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU07QUFFVjtBQUVBLFNBQVMsV0FBVyxHQUFnQjtBQUNsQyxTQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFDbEIsVUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDbkIsUUFBSSxNQUFNLE9BQU8sTUFBTSxPQUFRLE1BQU0sTUFBTTtBQUV6QyxjQUFRLENBQUM7QUFBQSxJQUNYLFdBQVcsTUFBTSxNQUFNO0FBQ3JCLFlBQU0sS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7QUFDeEIsVUFBSSxPQUFPLFFBQVMsT0FBTyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLE1BQU87QUFFM0QsZ0JBQVEsQ0FBQztBQUNULGdCQUFRLENBQUM7QUFDVCxZQUFJLE9BQU8sS0FBTSxTQUFRLENBQUM7QUFBQSxNQUM1QixXQUFXLE9BQU8sT0FBTyxPQUFPLEtBQU07QUFFcEMsZ0JBQVEsQ0FBQztBQUNULGdCQUFRLENBQUM7QUFBQSxNQUNYLE9BQU87QUFDTDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLE9BQU87QUFDTDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFNQSxTQUFTLFVBQVUsR0FBVSxNQUFxQixPQUFjO0FBQzlELGFBQVcsQ0FBQztBQUNaLFFBQU0sUUFBUSxFQUFFO0FBQ2hCLE1BQUksRUFBRSxLQUFLLEVBQUUsSUFBSyxRQUFPLEVBQUUsTUFBTSxPQUFPLE9BQU8sSUFBSSxPQUFPLEtBQUssTUFBTTtBQUVyRSxRQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNuQixRQUFNLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDcEIsUUFBTSxLQUFLLEtBQUssR0FBRyxDQUFDO0FBRXBCLE1BQUksTUFBTSxNQUFNO0FBQ2QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3pEO0FBRUEsTUFBSSxNQUFNLEtBQUs7QUFDYixVQUFNLEtBQUssRUFBRTtBQUNiLFdBQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBTSxTQUFRLENBQUM7QUFDcEQsV0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUFBLE1BQzFCO0FBQUEsTUFDQSxLQUFLLEVBQUU7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUdBLE1BQUksTUFBTSxPQUFPLE9BQU8sS0FBSztBQUMzQixZQUFRLENBQUM7QUFDVCxZQUFRLENBQUM7QUFDVCxXQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU8sTUFBTSxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQUEsRUFDcEQ7QUFDQSxNQUFJLE1BQU0sT0FBTyxPQUFPLEtBQUs7QUFDM0IsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3BEO0FBQ0EsTUFBSSxNQUFNLE9BQU8sT0FBTyxLQUFLO0FBQzNCLFlBQVEsQ0FBQztBQUNULFlBQVEsQ0FBQztBQUNULFdBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTyxNQUFNLE9BQU8sS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUNwRDtBQUNBLE1BQUksTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFDekMsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3JEO0FBQ0EsTUFBSSxNQUFNLE9BQU8sT0FBTyxLQUFLO0FBQzNCLFlBQVEsQ0FBQztBQUNULFlBQVEsQ0FBQztBQUNULFdBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTyxNQUFNLE9BQU8sS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUNwRDtBQUNBLE1BQUksTUFBTSxPQUFPLE9BQU8sS0FBSztBQUMzQixZQUFRLENBQUM7QUFDVCxZQUFRLENBQUM7QUFDVCxXQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU8sTUFBTSxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQUEsRUFDcEQ7QUFDQSxNQUFJLE1BQU0sT0FBTyxPQUFPLEtBQUs7QUFDM0IsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3BEO0FBQ0EsTUFBSSxNQUFNLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSztBQUN6QyxZQUFRLENBQUM7QUFDVCxZQUFRLENBQUM7QUFDVCxZQUFRLENBQUM7QUFDVCxXQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU8sT0FBTyxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQUEsRUFDckQ7QUFDQSxNQUFJLE1BQU0sT0FBTyxPQUFPLEtBQUs7QUFDM0IsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3BEO0FBQ0EsTUFBSSxNQUFNLE9BQU8sT0FBTyxLQUFLO0FBQzNCLFlBQVEsQ0FBQztBQUNULFlBQVEsQ0FBQztBQUNULFdBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTyxNQUFNLE9BQU8sS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUNwRDtBQUNBLE1BQUksTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFDekMsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3JEO0FBQ0EsTUFBSSxNQUFNLE9BQU8sT0FBTyxLQUFLO0FBQzNCLFlBQVEsQ0FBQztBQUNULFlBQVEsQ0FBQztBQUNULFdBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTyxNQUFNLE9BQU8sS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUNwRDtBQUNBLE1BQUksTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFDekMsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3JEO0FBQ0EsTUFBSSxNQUFNLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSztBQUN6QyxZQUFRLENBQUM7QUFDVCxZQUFRLENBQUM7QUFDVCxZQUFRLENBQUM7QUFDVCxXQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU8sT0FBTyxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQUEsRUFDckQ7QUFDQSxNQUFJLE1BQU0sT0FBTyxPQUFPLEtBQUs7QUFDM0IsWUFBUSxDQUFDO0FBQ1QsWUFBUSxDQUFDO0FBQ1QsV0FBTyxFQUFFLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUFBLEVBQ3BEO0FBQ0EsTUFB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QUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFDNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxNQUFNLENBQUM7QUFFNUMsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxLQUFLLENBQUM7QUFDM0MsTUFBSSxNQUFNLE9BQU8sT0FBTyxJQUFLLFFBQU8sQ0FBQyxLQUFLLENBQUM7QUFDM0MsTUFBSSxNQUFNLElBQUssUUFBTyxDQUFDLEtBQUssQ0FBQztBQUM3QixNQUFJLE1BQU0sSUFBSyxRQUFPLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQUksTUFBTSxJQUFLLFFBQU8sQ0FBQyxLQUFLLENBQUM7QUFDN0IsTUFBSSxNQUFNLElBQUssUUFB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QUNUO0FBRUEsU0FBUyxZQUFZLE1BQXNCO0FBQ3pDLFNBQU8sS0FBSyxVQUFVLE1BQ2xCLEtBQUssQ0FBQyxNQUFNLE9BQU8sS0FBSyxHQUFHLEVBQUUsTUFBTSxPQUNsQyxLQUFLLENBQUMsTUFBTSxPQUFPLEtBQUssR0FBRyxFQUFFLE1BQU0sT0FDcEMsS0FBSyxNQUFNLEdBQUcsRUFBRSxJQUNoQjtBQUNOO0FBck9BLElBa0JNLG9CQUNBLHNCQVNBLGdCQUNBLG9CQUlBLGVBRUYsUUF5RFM7QUE1RmI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZUEsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSx1QkFBdUIsb0JBQUksSUFBSTtBQUFBLE1BQ25DO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDO0FBQ0QsSUFBTSxpQkFBaUIsb0JBQUksSUFBSSxDQUFDLFFBQVEsVUFBVSxjQUFjLFFBQVEsQ0FBQztBQUN6RSxJQUFNLHFCQUFxQixvQkFBSSxJQUFJO0FBQUEsTUFDakM7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDO0FBQ0QsSUFBTSxnQkFBZ0Isb0JBQUksSUFBSSxDQUFDLFdBQVcscUJBQXFCLENBQUM7QUFFaEUsSUFBSSxTQUFTO0FBeUROLElBQU0sZ0JBQWdCLHVCQUFPLGVBQWU7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJjIiwgImVTdGFydCIsICJicmFjZURlcHRoIiwgImxhc3QiLCAia2lkcyIsICJzYXZlIiwgInNlcCIsICJkZyIsICJzIiwgInBhcnNlQ29tbWFuZCJdCn0K
