#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_color,
  init_ink,
  init_react_compiler_runtime,
  useTheme
} from "./chunk-IVRGECFY.mjs";
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import {
  init_setWith,
  setWith_default
} from "./chunk-Z6CSO4BY.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/treeify.ts
function treeify(obj, options = {}) {
  const {
    showValues = true,
    hideFunctions = false,
    themeName = "dark",
    treeCharColors = {}
  } = options;
  const lines = [];
  const visited = /* @__PURE__ */ new WeakSet();
  function colorize(text, colorKey) {
    if (!colorKey) return text;
    return color(colorKey, themeName)(text);
  }
  function growBranch(node, prefix, _isLast, depth = 0) {
    if (typeof node === "string") {
      lines.push(prefix + colorize(node, treeCharColors.value));
      return;
    }
    if (typeof node !== "object" || node === null) {
      if (showValues) {
        const valueStr = String(node);
        lines.push(prefix + colorize(valueStr, treeCharColors.value));
      }
      return;
    }
    if (visited.has(node)) {
      lines.push(prefix + colorize("[Circular]", treeCharColors.value));
      return;
    }
    visited.add(node);
    const keys2 = Object.keys(node).filter((key) => {
      const value = node[key];
      if (hideFunctions && typeof value === "function") return false;
      return true;
    });
    keys2.forEach((key, index) => {
      const value = node[key];
      const isLastKey = index === keys2.length - 1;
      const nodePrefix = depth === 0 && index === 0 ? "" : prefix;
      const treeChar = isLastKey ? DEFAULT_TREE_CHARS.lastBranch : DEFAULT_TREE_CHARS.branch;
      const coloredTreeChar = colorize(treeChar, treeCharColors.treeChar);
      const coloredKey = key.trim() === "" ? "" : colorize(key, treeCharColors.key);
      let line = nodePrefix + coloredTreeChar + (coloredKey ? " " + coloredKey : "");
      const shouldAddColon = key.trim() !== "";
      if (value && typeof value === "object" && visited.has(value)) {
        const coloredValue = colorize("[Circular]", treeCharColors.value);
        lines.push(
          line + (shouldAddColon ? ": " : line ? " " : "") + coloredValue
        );
      } else if (value && typeof value === "object" && !Array.isArray(value)) {
        lines.push(line);
        const continuationChar = isLastKey ? DEFAULT_TREE_CHARS.empty : DEFAULT_TREE_CHARS.line;
        const coloredContinuation = colorize(
          continuationChar,
          treeCharColors.treeChar
        );
        const nextPrefix = nodePrefix + coloredContinuation + " ";
        growBranch(value, nextPrefix, isLastKey, depth + 1);
      } else if (Array.isArray(value)) {
        lines.push(
          line + (shouldAddColon ? ": " : line ? " " : "") + "[Array(" + value.length + ")]"
        );
      } else if (showValues) {
        const valueStr = typeof value === "function" ? "[Function]" : String(value);
        const coloredValue = colorize(valueStr, treeCharColors.value);
        line += (shouldAddColon ? ": " : line ? " " : "") + coloredValue;
        lines.push(line);
      } else {
        lines.push(line);
      }
    });
  }
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return colorize("(empty)", treeCharColors.value);
  }
  if (keys.length === 1 && keys[0] !== void 0 && keys[0].trim() === "" && typeof obj[keys[0]] === "string") {
    const firstKey = keys[0];
    const coloredTreeChar = colorize(
      DEFAULT_TREE_CHARS.lastBranch,
      treeCharColors.treeChar
    );
    const coloredValue = colorize(obj[firstKey], treeCharColors.value);
    return coloredTreeChar + " " + coloredValue;
  }
  growBranch(obj, "", true);
  return lines.join("\n");
}
var DEFAULT_TREE_CHARS;
var init_treeify = __esm({
  "src/utils/treeify.ts"() {
    init_figures();
    init_color();
    DEFAULT_TREE_CHARS = {
      branch: figures_default.lineUpDownRight,
      // '├'
      lastBranch: figures_default.lineUpRight,
      // '└'
      line: figures_default.lineVertical,
      // '│'
      empty: " "
    };
  }
});

// src/components/ValidationErrorsList.tsx
function buildNestedTree(errors) {
  const tree = {};
  errors.forEach((error) => {
    if (!error.path) {
      tree[""] = error.message;
      return;
    }
    const pathParts = error.path.split(".");
    let modifiedPath = error.path;
    if (error.invalidValue !== null && error.invalidValue !== void 0 && pathParts.length > 0) {
      const newPathParts = [];
      for (let i = 0; i < pathParts.length; i++) {
        const part = pathParts[i];
        if (!part) continue;
        const numericPart = parseInt(part, 10);
        if (!isNaN(numericPart) && i === pathParts.length - 1) {
          let displayValue;
          if (typeof error.invalidValue === "string") {
            displayValue = `"${error.invalidValue}"`;
          } else if (error.invalidValue === null) {
            displayValue = "null";
          } else if (error.invalidValue === void 0) {
            displayValue = "undefined";
          } else {
            displayValue = String(error.invalidValue);
          }
          newPathParts.push(displayValue);
        } else {
          newPathParts.push(part);
        }
      }
      modifiedPath = newPathParts.join(".");
    }
    setWith_default(tree, modifiedPath, error.message, Object);
  });
  return tree;
}
function ValidationErrorsList(t0) {
  const $ = c(9);
  const {
    errors
  } = t0;
  const [themeName] = useTheme();
  if (errors.length === 0) {
    return null;
  }
  let T0;
  let t1;
  let t2;
  if ($[0] !== errors || $[1] !== themeName) {
    const errorsByFile = errors.reduce(_temp, {});
    const sortedFiles = Object.keys(errorsByFile).sort();
    T0 = ThemedBox_default;
    t1 = "column";
    t2 = sortedFiles.map((file_0) => {
      const fileErrors = errorsByFile[file_0] || [];
      fileErrors.sort(_temp2);
      const errorTree = buildNestedTree(fileErrors);
      const suggestionPairs = /* @__PURE__ */ new Map();
      fileErrors.forEach((error_0) => {
        if (error_0.suggestion || error_0.docLink) {
          const key = `${error_0.suggestion || ""}|${error_0.docLink || ""}`;
          if (!suggestionPairs.has(key)) {
            suggestionPairs.set(key, {
              suggestion: error_0.suggestion,
              docLink: error_0.docLink
            });
          }
        }
      });
      const treeOutput = treeify(errorTree, {
        showValues: true,
        themeName,
        treeCharColors: {
          treeChar: "inactive",
          key: "text",
          value: "inactive"
        }
      });
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: file_0, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, file_0), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, treeOutput)), suggestionPairs.size > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, Array.from(suggestionPairs.values()).map(_temp3)));
    });
    $[0] = errors;
    $[1] = themeName;
    $[2] = T0;
    $[3] = t1;
    $[4] = t2;
  } else {
    T0 = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  let t3;
  if ($[5] !== T0 || $[6] !== t1 || $[7] !== t2) {
    t3 = /* @__PURE__ */ createElement(T0, { flexDirection: t1 }, t2);
    $[5] = T0;
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function _temp3(pair, index) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: `suggestion-pair-${index}`, flexDirection: "column", marginBottom: 1 }, pair.suggestion && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, wrap: "wrap" }, pair.suggestion), pair.docLink && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, wrap: "wrap" }, "Learn more: ", pair.docLink));
}
function _temp2(a, b) {
  if (!a.path && b.path) {
    return -1;
  }
  if (a.path && !b.path) {
    return 1;
  }
  return (a.path || "").localeCompare(b.path || "");
}
function _temp(acc, error) {
  const file = error.file || "(file not specified)";
  if (!acc[file]) {
    acc[file] = [];
  }
  acc[file].push(error);
  return acc;
}
var init_ValidationErrorsList = __esm({
  "src/components/ValidationErrorsList.tsx"() {
    init_react_compiler_runtime();
    init_setWith();
    init_react();
    init_ink();
    init_treeify();
  }
});

export {
  ValidationErrorsList,
  init_ValidationErrorsList
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3RyZWVpZnkudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmFsaWRhdGlvbkVycm9yc0xpc3QudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vY29sb3IuanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lLCBUaGVtZU5hbWUgfSBmcm9tICcuL3RoZW1lLmpzJ1xuXG5leHBvcnQgdHlwZSBUcmVlTm9kZSA9IHtcbiAgW2tleTogc3RyaW5nXTogVHJlZU5vZGUgfCBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IHR5cGUgVHJlZWlmeU9wdGlvbnMgPSB7XG4gIHNob3dWYWx1ZXM/OiBib29sZWFuXG4gIGhpZGVGdW5jdGlvbnM/OiBib29sZWFuXG4gIHVzZUNvbG9ycz86IGJvb2xlYW5cbiAgdGhlbWVOYW1lPzogVGhlbWVOYW1lXG4gIHRyZWVDaGFyQ29sb3JzPzoge1xuICAgIHRyZWVDaGFyPzoga2V5b2YgVGhlbWUgLy8gQ29sb3IgZm9yIHRyZWUgY2hhcmFjdGVycyAoXHUyNTFDIFx1MjUxNCBcdTI1MDIpXG4gICAga2V5Pzoga2V5b2YgVGhlbWUgLy8gQ29sb3IgZm9yIHByb3BlcnR5IG5hbWVzXG4gICAgdmFsdWU/OiBrZXlvZiBUaGVtZSAvLyBDb2xvciBmb3IgdmFsdWVzXG4gIH1cbn1cblxudHlwZSBUcmVlQ2hhcmFjdGVycyA9IHtcbiAgYnJhbmNoOiBzdHJpbmdcbiAgbGFzdEJyYW5jaDogc3RyaW5nXG4gIGxpbmU6IHN0cmluZ1xuICBlbXB0eTogc3RyaW5nXG59XG5cbmNvbnN0IERFRkFVTFRfVFJFRV9DSEFSUzogVHJlZUNoYXJhY3RlcnMgPSB7XG4gIGJyYW5jaDogZmlndXJlcy5saW5lVXBEb3duUmlnaHQsIC8vICdcdTI1MUMnXG4gIGxhc3RCcmFuY2g6IGZpZ3VyZXMubGluZVVwUmlnaHQsIC8vICdcdTI1MTQnXG4gIGxpbmU6IGZpZ3VyZXMubGluZVZlcnRpY2FsLCAvLyAnXHUyNTAyJ1xuICBlbXB0eTogJyAnLFxufVxuXG4vKipcbiAqIEN1c3RvbSB0cmVlaWZ5IGltcGxlbWVudGF0aW9uIHdpdGggSW5rIHRoZW1lIGNvbG9yIHN1cHBvcnRcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9ub3RhdGVzdHVzZXIvdHJlZWlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJlZWlmeShvYmo6IFRyZWVOb2RlLCBvcHRpb25zOiBUcmVlaWZ5T3B0aW9ucyA9IHt9KTogc3RyaW5nIHtcbiAgY29uc3Qge1xuICAgIHNob3dWYWx1ZXMgPSB0cnVlLFxuICAgIGhpZGVGdW5jdGlvbnMgPSBmYWxzZSxcbiAgICB0aGVtZU5hbWUgPSAnZGFyaycsXG4gICAgdHJlZUNoYXJDb2xvcnMgPSB7fSxcbiAgfSA9IG9wdGlvbnNcblxuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXVxuICBjb25zdCB2aXNpdGVkID0gbmV3IFdlYWtTZXQ8b2JqZWN0PigpXG5cbiAgZnVuY3Rpb24gY29sb3JpemUodGV4dDogc3RyaW5nLCBjb2xvcktleT86IGtleW9mIFRoZW1lKTogc3RyaW5nIHtcbiAgICBpZiAoIWNvbG9yS2V5KSByZXR1cm4gdGV4dFxuICAgIHJldHVybiBjb2xvcihjb2xvcktleSwgdGhlbWVOYW1lKSh0ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gZ3Jvd0JyYW5jaChcbiAgICBub2RlOiBUcmVlTm9kZSB8IHN0cmluZyxcbiAgICBwcmVmaXg6IHN0cmluZyxcbiAgICBfaXNMYXN0OiBib29sZWFuLFxuICAgIGRlcHRoOiBudW1iZXIgPSAwLFxuICApOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsaW5lcy5wdXNoKHByZWZpeCArIGNvbG9yaXplKG5vZGUsIHRyZWVDaGFyQ29sb3JzLnZhbHVlKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgaWYgKHNob3dWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWVTdHIgPSBTdHJpbmcobm9kZSlcbiAgICAgICAgbGluZXMucHVzaChwcmVmaXggKyBjb2xvcml6ZSh2YWx1ZVN0ciwgdHJlZUNoYXJDb2xvcnMudmFsdWUpKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICBpZiAodmlzaXRlZC5oYXMobm9kZSkpIHtcbiAgICAgIGxpbmVzLnB1c2gocHJlZml4ICsgY29sb3JpemUoJ1tDaXJjdWxhcl0nLCB0cmVlQ2hhckNvbG9ycy52YWx1ZSkpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmlzaXRlZC5hZGQobm9kZSlcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhub2RlKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbm9kZVtrZXldXG4gICAgICBpZiAoaGlkZUZ1bmN0aW9ucyAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gICAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG5vZGVba2V5XVxuICAgICAgY29uc3QgaXNMYXN0S2V5ID0gaW5kZXggPT09IGtleXMubGVuZ3RoIC0gMVxuICAgICAgY29uc3Qgbm9kZVByZWZpeCA9IGRlcHRoID09PSAwICYmIGluZGV4ID09PSAwID8gJycgOiBwcmVmaXhcblxuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHRyZWUgY2hhcmFjdGVyIHRvIHVzZVxuICAgICAgY29uc3QgdHJlZUNoYXIgPSBpc0xhc3RLZXlcbiAgICAgICAgPyBERUZBVUxUX1RSRUVfQ0hBUlMubGFzdEJyYW5jaFxuICAgICAgICA6IERFRkFVTFRfVFJFRV9DSEFSUy5icmFuY2hcbiAgICAgIGNvbnN0IGNvbG9yZWRUcmVlQ2hhciA9IGNvbG9yaXplKHRyZWVDaGFyLCB0cmVlQ2hhckNvbG9ycy50cmVlQ2hhcilcbiAgICAgIGNvbnN0IGNvbG9yZWRLZXkgPVxuICAgICAgICBrZXkudHJpbSgpID09PSAnJyA/ICcnIDogY29sb3JpemUoa2V5LCB0cmVlQ2hhckNvbG9ycy5rZXkpXG5cbiAgICAgIGxldCBsaW5lID1cbiAgICAgICAgbm9kZVByZWZpeCArIGNvbG9yZWRUcmVlQ2hhciArIChjb2xvcmVkS2V5ID8gJyAnICsgY29sb3JlZEtleSA6ICcnKVxuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBzaG91bGQgYWRkIGEgY29sb24gKG5vdCBmb3IgZW1wdHkvd2hpdGVzcGFjZSBrZXlzKVxuICAgICAgY29uc3Qgc2hvdWxkQWRkQ29sb24gPSBrZXkudHJpbSgpICE9PSAnJ1xuXG4gICAgICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlIGJlZm9yZSByZWN1cnNpbmdcbiAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZpc2l0ZWQuaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBjb2xvcmVkVmFsdWUgPSBjb2xvcml6ZSgnW0NpcmN1bGFyXScsIHRyZWVDaGFyQ29sb3JzLnZhbHVlKVxuICAgICAgICBsaW5lcy5wdXNoKFxuICAgICAgICAgIGxpbmUgKyAoc2hvdWxkQWRkQ29sb24gPyAnOiAnIDogbGluZSA/ICcgJyA6ICcnKSArIGNvbG9yZWRWYWx1ZSxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udGludWF0aW9uIHByZWZpeCBmb3IgbmVzdGVkIGl0ZW1zXG4gICAgICAgIGNvbnN0IGNvbnRpbnVhdGlvbkNoYXIgPSBpc0xhc3RLZXlcbiAgICAgICAgICA/IERFRkFVTFRfVFJFRV9DSEFSUy5lbXB0eVxuICAgICAgICAgIDogREVGQVVMVF9UUkVFX0NIQVJTLmxpbmVcbiAgICAgICAgY29uc3QgY29sb3JlZENvbnRpbnVhdGlvbiA9IGNvbG9yaXplKFxuICAgICAgICAgIGNvbnRpbnVhdGlvbkNoYXIsXG4gICAgICAgICAgdHJlZUNoYXJDb2xvcnMudHJlZUNoYXIsXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgbmV4dFByZWZpeCA9IG5vZGVQcmVmaXggKyBjb2xvcmVkQ29udGludWF0aW9uICsgJyAnXG4gICAgICAgIGdyb3dCcmFuY2godmFsdWUsIG5leHRQcmVmaXgsIGlzTGFzdEtleSwgZGVwdGggKyAxKVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAvLyBIYW5kbGUgYXJyYXlzXG4gICAgICAgIGxpbmVzLnB1c2goXG4gICAgICAgICAgbGluZSArXG4gICAgICAgICAgICAoc2hvdWxkQWRkQ29sb24gPyAnOiAnIDogbGluZSA/ICcgJyA6ICcnKSArXG4gICAgICAgICAgICAnW0FycmF5KCcgK1xuICAgICAgICAgICAgdmFsdWUubGVuZ3RoICtcbiAgICAgICAgICAgICcpXScsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoc2hvd1ZhbHVlcykge1xuICAgICAgICAvLyBBZGQgdmFsdWUgaWYgc2hvd1ZhbHVlcyBpcyB0cnVlXG4gICAgICAgIGNvbnN0IHZhbHVlU3RyID1cbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyAnW0Z1bmN0aW9uXScgOiBTdHJpbmcodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbG9yZWRWYWx1ZSA9IGNvbG9yaXplKHZhbHVlU3RyLCB0cmVlQ2hhckNvbG9ycy52YWx1ZSlcbiAgICAgICAgbGluZSArPSAoc2hvdWxkQWRkQ29sb24gPyAnOiAnIDogbGluZSA/ICcgJyA6ICcnKSArIGNvbG9yZWRWYWx1ZVxuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXJ0IGdyb3dpbmcgdGhlIHRyZWVcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iailcbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbG9yaXplKCcoZW1wdHkpJywgdHJlZUNoYXJDb2xvcnMudmFsdWUpXG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgZm9yIHNpbmdsZSBlbXB0eS93aGl0ZXNwYWNlIHN0cmluZyBrZXlcbiAgaWYgKFxuICAgIGtleXMubGVuZ3RoID09PSAxICYmXG4gICAga2V5c1swXSAhPT0gdW5kZWZpbmVkICYmXG4gICAga2V5c1swXS50cmltKCkgPT09ICcnICYmXG4gICAgdHlwZW9mIG9ialtrZXlzWzBdXSA9PT0gJ3N0cmluZydcbiAgKSB7XG4gICAgY29uc3QgZmlyc3RLZXkgPSBrZXlzWzBdXG4gICAgY29uc3QgY29sb3JlZFRyZWVDaGFyID0gY29sb3JpemUoXG4gICAgICBERUZBVUxUX1RSRUVfQ0hBUlMubGFzdEJyYW5jaCxcbiAgICAgIHRyZWVDaGFyQ29sb3JzLnRyZWVDaGFyLFxuICAgIClcbiAgICBjb25zdCBjb2xvcmVkVmFsdWUgPSBjb2xvcml6ZShvYmpbZmlyc3RLZXldIGFzIHN0cmluZywgdHJlZUNoYXJDb2xvcnMudmFsdWUpXG4gICAgcmV0dXJuIGNvbG9yZWRUcmVlQ2hhciArICcgJyArIGNvbG9yZWRWYWx1ZVxuICB9XG5cbiAgZ3Jvd0JyYW5jaChvYmosICcnLCB0cnVlKVxuICByZXR1cm4gbGluZXMuam9pbignXFxuJylcbn1cbiIsICJpbXBvcnQgc2V0V2l0aCBmcm9tICdsb2Rhc2gtZXMvc2V0V2l0aC5qcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VUaGVtZSB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vdXRpbHMvc2V0dGluZ3MvdmFsaWRhdGlvbi5qcydcbmltcG9ydCB7IHR5cGUgVHJlZU5vZGUsIHRyZWVpZnkgfSBmcm9tICcuLi91dGlscy90cmVlaWZ5LmpzJ1xuXG4vKipcbiAqIEJ1aWxkcyBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZSBmcm9tIGRvdC1ub3RhdGlvbiBwYXRoc1xuICogVXNlcyBsb2Rhc2ggc2V0V2l0aCB0byBhdm9pZCBhdXRvbWF0aWMgYXJyYXkgY3JlYXRpb25cbiAqL1xuZnVuY3Rpb24gYnVpbGROZXN0ZWRUcmVlKGVycm9yczogVmFsaWRhdGlvbkVycm9yW10pOiBUcmVlTm9kZSB7XG4gIGNvbnN0IHRyZWU6IFRyZWVOb2RlID0ge31cblxuICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgaWYgKCFlcnJvci5wYXRoKSB7XG4gICAgICAvLyBSb290IGxldmVsIGVycm9yIC0gdXNlIGVtcHR5IHN0cmluZyBhcyBrZXlcbiAgICAgIHRyZWVbJyddID0gZXJyb3IubWVzc2FnZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGVuaGFuY2UgdGhlIHBhdGggd2l0aCBtZWFuaW5nZnVsIHZhbHVlc1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGVycm9yLnBhdGguc3BsaXQoJy4nKVxuICAgIGxldCBtb2RpZmllZFBhdGggPSBlcnJvci5wYXRoXG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGludmFsaWQgdmFsdWUsIHRyeSB0byBtYWtlIHRoZSBwYXRoIG1vcmUgcmVhZGFibGVcbiAgICBpZiAoXG4gICAgICBlcnJvci5pbnZhbGlkVmFsdWUgIT09IG51bGwgJiZcbiAgICAgIGVycm9yLmludmFsaWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBwYXRoUGFydHMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgY29uc3QgbmV3UGF0aFBhcnRzOiBzdHJpbmdbXSA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXRoUGFydHNbaV1cbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IG51bWVyaWNQYXJ0ID0gcGFyc2VJbnQocGFydCwgMTApXG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG51bWVyaWMgaW5kZXggYW5kIGl0J3MgdGhlIGxhc3QgcGFydCB3aGVyZSB3ZSBoYXZlIHRoZSBpbnZhbGlkIHZhbHVlXG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1BhcnQpICYmIGkgPT09IHBhdGhQYXJ0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgLy8gRm9ybWF0IHRoZSB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgIGxldCBkaXNwbGF5VmFsdWU6IHN0cmluZ1xuICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3IuaW52YWxpZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGlzcGxheVZhbHVlID0gYFwiJHtlcnJvci5pbnZhbGlkVmFsdWV9XCJgXG4gICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5pbnZhbGlkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9ICdudWxsJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IuaW52YWxpZFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9ICd1bmRlZmluZWQnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IFN0cmluZyhlcnJvci5pbnZhbGlkVmFsdWUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3UGF0aFBhcnRzLnB1c2goZGlzcGxheVZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEtlZXAgb3RoZXIgcGFydHMgYXMtaXNcbiAgICAgICAgICBuZXdQYXRoUGFydHMucHVzaChwYXJ0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVkUGF0aCA9IG5ld1BhdGhQYXJ0cy5qb2luKCcuJylcbiAgICB9XG5cbiAgICBzZXRXaXRoKHRyZWUsIG1vZGlmaWVkUGF0aCwgZXJyb3IubWVzc2FnZSwgT2JqZWN0KVxuICB9KVxuXG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogR3JvdXBzIGFuZCBkaXNwbGF5cyB2YWxpZGF0aW9uIGVycm9ycyB1c2luZyB0cmVlaWZ5IHdpdGggZGVkdXBsaWNhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yc0xpc3Qoe1xuICBlcnJvcnMsXG59OiB7XG4gIGVycm9yczogVmFsaWRhdGlvbkVycm9yW11cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbdGhlbWVOYW1lXSA9IHVzZVRoZW1lKClcblxuICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBHcm91cCBlcnJvcnMgYnkgZmlsZVxuICBjb25zdCBlcnJvcnNCeUZpbGUgPSBlcnJvcnMucmVkdWNlPFJlY29yZDxzdHJpbmcsIFZhbGlkYXRpb25FcnJvcltdPj4oXG4gICAgKGFjYywgZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlIHx8ICcoZmlsZSBub3Qgc3BlY2lmaWVkKSdcbiAgICAgIGlmICghYWNjW2ZpbGVdKSB7XG4gICAgICAgIGFjY1tmaWxlXSA9IFtdXG4gICAgICB9XG4gICAgICBhY2NbZmlsZV0hLnB1c2goZXJyb3IpXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSxcbiAgICB7fSxcbiAgKVxuXG4gIC8vIFNvcnQgZmlsZXMgYWxwaGFiZXRpY2FsbHlcbiAgY29uc3Qgc29ydGVkRmlsZXMgPSBPYmplY3Qua2V5cyhlcnJvcnNCeUZpbGUpLnNvcnQoKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICB7c29ydGVkRmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBmaWxlRXJyb3JzID0gZXJyb3JzQnlGaWxlW2ZpbGVdIHx8IFtdXG5cbiAgICAgICAgLy8gU29ydCBlcnJvcnMgYnkgcGF0aFxuICAgICAgICBmaWxlRXJyb3JzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoIWEucGF0aCAmJiBiLnBhdGgpIHJldHVybiAtMVxuICAgICAgICAgIGlmIChhLnBhdGggJiYgIWIucGF0aCkgcmV0dXJuIDFcbiAgICAgICAgICByZXR1cm4gKGEucGF0aCB8fCAnJykubG9jYWxlQ29tcGFyZShiLnBhdGggfHwgJycpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQnVpbGQgbmVzdGVkIHRyZWUgc3RydWN0dXJlIGZyb20gZXJyb3IgcGF0aHNcbiAgICAgICAgY29uc3QgZXJyb3JUcmVlID0gYnVpbGROZXN0ZWRUcmVlKGZpbGVFcnJvcnMpXG5cbiAgICAgICAgLy8gQ29sbGVjdCB1bmlxdWUgc3VnZ2VzdGlvbitkb2NMaW5rIHBhaXJzXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25QYWlycyA9IG5ldyBNYXA8XG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIHsgc3VnZ2VzdGlvbj86IHN0cmluZzsgZG9jTGluaz86IHN0cmluZyB9XG4gICAgICAgID4oKVxuXG4gICAgICAgIGZpbGVFcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yLnN1Z2dlc3Rpb24gfHwgZXJyb3IuZG9jTGluaykge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEga2V5IGZyb20gc3VnZ2VzdGlvbitkb2NMaW5rIGNvbWJpbmF0aW9uXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtlcnJvci5zdWdnZXN0aW9uIHx8ICcnfXwke2Vycm9yLmRvY0xpbmsgfHwgJyd9YFxuICAgICAgICAgICAgaWYgKCFzdWdnZXN0aW9uUGFpcnMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgc3VnZ2VzdGlvblBhaXJzLnNldChrZXksIHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uOiBlcnJvci5zdWdnZXN0aW9uLFxuICAgICAgICAgICAgICAgIGRvY0xpbms6IGVycm9yLmRvY0xpbmssXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFJlbmRlciB0aGUgdHJlZVxuICAgICAgICBjb25zdCB0cmVlT3V0cHV0ID0gdHJlZWlmeShlcnJvclRyZWUsIHtcbiAgICAgICAgICBzaG93VmFsdWVzOiB0cnVlLFxuICAgICAgICAgIHRoZW1lTmFtZSxcbiAgICAgICAgICB0cmVlQ2hhckNvbG9yczoge1xuICAgICAgICAgICAgdHJlZUNoYXI6ICdpbmFjdGl2ZScsXG4gICAgICAgICAgICBrZXk6ICd0ZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiAnaW5hY3RpdmUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IGtleT17ZmlsZX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQ+e2ZpbGV9PC9UZXh0PlxuICAgICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3RyZWVPdXRwdXR9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7LyogRGlzcGxheSB1bmlxdWUgc3VnZ2VzdGlvbitkb2NMaW5rIHBhaXJzICovfVxuICAgICAgICAgICAge3N1Z2dlc3Rpb25QYWlycy5zaXplID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgICAge0FycmF5LmZyb20oc3VnZ2VzdGlvblBhaXJzLnZhbHVlcygpKS5tYXAoKHBhaXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGtleT17YHN1Z2dlc3Rpb24tcGFpci0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209ezF9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwYWlyLnN1Z2dlc3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIHdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFpci5zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3BhaXIuZG9jTGluayAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3Igd3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExlYXJuIG1vcmU6IHtwYWlyLmRvY0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDTyxTQUFTLFFBQVEsS0FBZSxVQUEwQixDQUFDLEdBQVc7QUFDM0UsUUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLElBQ2IsZ0JBQWdCO0FBQUEsSUFDaEIsWUFBWTtBQUFBLElBQ1osaUJBQWlCLENBQUM7QUFBQSxFQUNwQixJQUFJO0FBRUosUUFBTSxRQUFrQixDQUFDO0FBQ3pCLFFBQU0sVUFBVSxvQkFBSSxRQUFnQjtBQUVwQyxXQUFTLFNBQVMsTUFBYyxVQUFnQztBQUM5RCxRQUFJLENBQUMsU0FBVSxRQUFPO0FBQ3RCLFdBQU8sTUFBTSxVQUFVLFNBQVMsRUFBRSxJQUFJO0FBQUEsRUFDeEM7QUFFQSxXQUFTLFdBQ1AsTUFDQSxRQUNBLFNBQ0EsUUFBZ0IsR0FDVjtBQUNOLFFBQUksT0FBTyxTQUFTLFVBQVU7QUFDNUIsWUFBTSxLQUFLLFNBQVMsU0FBUyxNQUFNLGVBQWUsS0FBSyxDQUFDO0FBQ3hEO0FBQUEsSUFDRjtBQUVBLFFBQUksT0FBTyxTQUFTLFlBQVksU0FBUyxNQUFNO0FBQzdDLFVBQUksWUFBWTtBQUNkLGNBQU0sV0FBVyxPQUFPLElBQUk7QUFDNUIsY0FBTSxLQUFLLFNBQVMsU0FBUyxVQUFVLGVBQWUsS0FBSyxDQUFDO0FBQUEsTUFDOUQ7QUFDQTtBQUFBLElBQ0Y7QUFHQSxRQUFJLFFBQVEsSUFBSSxJQUFJLEdBQUc7QUFDckIsWUFBTSxLQUFLLFNBQVMsU0FBUyxjQUFjLGVBQWUsS0FBSyxDQUFDO0FBQ2hFO0FBQUEsSUFDRjtBQUNBLFlBQVEsSUFBSSxJQUFJO0FBRWhCLFVBQU1BLFFBQU8sT0FBTyxLQUFLLElBQUksRUFBRSxPQUFPLFNBQU87QUFDM0MsWUFBTSxRQUFRLEtBQUssR0FBRztBQUN0QixVQUFJLGlCQUFpQixPQUFPLFVBQVUsV0FBWSxRQUFPO0FBQ3pELGFBQU87QUFBQSxJQUNULENBQUM7QUFFRCxJQUFBQSxNQUFLLFFBQVEsQ0FBQyxLQUFLLFVBQVU7QUFDM0IsWUFBTSxRQUFRLEtBQUssR0FBRztBQUN0QixZQUFNLFlBQVksVUFBVUEsTUFBSyxTQUFTO0FBQzFDLFlBQU0sYUFBYSxVQUFVLEtBQUssVUFBVSxJQUFJLEtBQUs7QUFHckQsWUFBTSxXQUFXLFlBQ2IsbUJBQW1CLGFBQ25CLG1CQUFtQjtBQUN2QixZQUFNLGtCQUFrQixTQUFTLFVBQVUsZUFBZSxRQUFRO0FBQ2xFLFlBQU0sYUFDSixJQUFJLEtBQUssTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLGVBQWUsR0FBRztBQUUzRCxVQUFJLE9BQ0YsYUFBYSxtQkFBbUIsYUFBYSxNQUFNLGFBQWE7QUFHbEUsWUFBTSxpQkFBaUIsSUFBSSxLQUFLLE1BQU07QUFHdEMsVUFBSSxTQUFTLE9BQU8sVUFBVSxZQUFZLFFBQVEsSUFBSSxLQUFLLEdBQUc7QUFDNUQsY0FBTSxlQUFlLFNBQVMsY0FBYyxlQUFlLEtBQUs7QUFDaEUsY0FBTTtBQUFBLFVBQ0osUUFBUSxpQkFBaUIsT0FBTyxPQUFPLE1BQU0sTUFBTTtBQUFBLFFBQ3JEO0FBQUEsTUFDRixXQUFXLFNBQVMsT0FBTyxVQUFVLFlBQVksQ0FBQyxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3RFLGNBQU0sS0FBSyxJQUFJO0FBRWYsY0FBTSxtQkFBbUIsWUFDckIsbUJBQW1CLFFBQ25CLG1CQUFtQjtBQUN2QixjQUFNLHNCQUFzQjtBQUFBLFVBQzFCO0FBQUEsVUFDQSxlQUFlO0FBQUEsUUFDakI7QUFDQSxjQUFNLGFBQWEsYUFBYSxzQkFBc0I7QUFDdEQsbUJBQVcsT0FBTyxZQUFZLFdBQVcsUUFBUSxDQUFDO0FBQUEsTUFDcEQsV0FBVyxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBRS9CLGNBQU07QUFBQSxVQUNKLFFBQ0csaUJBQWlCLE9BQU8sT0FBTyxNQUFNLE1BQ3RDLFlBQ0EsTUFBTSxTQUNOO0FBQUEsUUFDSjtBQUFBLE1BQ0YsV0FBVyxZQUFZO0FBRXJCLGNBQU0sV0FDSixPQUFPLFVBQVUsYUFBYSxlQUFlLE9BQU8sS0FBSztBQUMzRCxjQUFNLGVBQWUsU0FBUyxVQUFVLGVBQWUsS0FBSztBQUM1RCxpQkFBUyxpQkFBaUIsT0FBTyxPQUFPLE1BQU0sTUFBTTtBQUNwRCxjQUFNLEtBQUssSUFBSTtBQUFBLE1BQ2pCLE9BQU87QUFDTCxjQUFNLEtBQUssSUFBSTtBQUFBLE1BQ2pCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUdBLFFBQU0sT0FBTyxPQUFPLEtBQUssR0FBRztBQUM1QixNQUFJLEtBQUssV0FBVyxHQUFHO0FBQ3JCLFdBQU8sU0FBUyxXQUFXLGVBQWUsS0FBSztBQUFBLEVBQ2pEO0FBR0EsTUFDRSxLQUFLLFdBQVcsS0FDaEIsS0FBSyxDQUFDLE1BQU0sVUFDWixLQUFLLENBQUMsRUFBRSxLQUFLLE1BQU0sTUFDbkIsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLE1BQU0sVUFDeEI7QUFDQSxVQUFNLFdBQVcsS0FBSyxDQUFDO0FBQ3ZCLFVBQU0sa0JBQWtCO0FBQUEsTUFDdEIsbUJBQW1CO0FBQUEsTUFDbkIsZUFBZTtBQUFBLElBQ2pCO0FBQ0EsVUFBTSxlQUFlLFNBQVMsSUFBSSxRQUFRLEdBQWEsZUFBZSxLQUFLO0FBQzNFLFdBQU8sa0JBQWtCLE1BQU07QUFBQSxFQUNqQztBQUVBLGFBQVcsS0FBSyxJQUFJLElBQUk7QUFDeEIsU0FBTyxNQUFNLEtBQUssSUFBSTtBQUN4QjtBQXpLQSxJQTJCTTtBQTNCTjtBQUFBO0FBQUE7QUFDQTtBQTBCQSxJQUFNLHFCQUFxQztBQUFBLE1BQ3pDLFFBQVEsZ0JBQVE7QUFBQTtBQUFBLE1BQ2hCLFlBQVksZ0JBQVE7QUFBQTtBQUFBLE1BQ3BCLE1BQU0sZ0JBQVE7QUFBQTtBQUFBLE1BQ2QsT0FBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUN0QkEsU0FBU0MsZ0JBQWdCQyxRQUFxQztBQUM1RCxRQUFNQyxPQUFpQixDQUFDO0FBRXhCRCxTQUFPRSxRQUFRQyxXQUFTO0FBQ3RCLFFBQUksQ0FBQ0EsTUFBTUMsTUFBTTtBQUVmSCxXQUFLLEVBQUUsSUFBSUUsTUFBTUU7QUFDakI7SUFDRjtBQUdBLFVBQU1DLFlBQVlILE1BQU1DLEtBQUtHLE1BQU0sR0FBRztBQUN0QyxRQUFJQyxlQUFlTCxNQUFNQztBQUd6QixRQUNFRCxNQUFNTSxpQkFBaUIsUUFDdkJOLE1BQU1NLGlCQUFpQkMsVUFDdkJKLFVBQVVLLFNBQVMsR0FDbkI7QUFDQSxZQUFNQyxlQUF5QixDQUFBO0FBRS9CLGVBQVNDLElBQUksR0FBR0EsSUFBSVAsVUFBVUssUUFBUUUsS0FBSztBQUN6QyxjQUFNQyxPQUFPUixVQUFVTyxDQUFDO0FBQ3hCLFlBQUksQ0FBQ0MsS0FBTTtBQUVYLGNBQU1DLGNBQWNDLFNBQVNGLE1BQU0sRUFBRTtBQUdyQyxZQUFJLENBQUNHLE1BQU1GLFdBQVcsS0FBS0YsTUFBTVAsVUFBVUssU0FBUyxHQUFHO0FBRXJELGNBQUlPO0FBQ0osY0FBSSxPQUFPZixNQUFNTSxpQkFBaUIsVUFBVTtBQUMxQ1MsMkJBQWUsSUFBSWYsTUFBTU0sWUFBWTtVQUN2QyxXQUFXTixNQUFNTSxpQkFBaUIsTUFBTTtBQUN0Q1MsMkJBQWU7VUFDakIsV0FBV2YsTUFBTU0saUJBQWlCQyxRQUFXO0FBQzNDUSwyQkFBZTtVQUNqQixPQUFPO0FBQ0xBLDJCQUFlQyxPQUFPaEIsTUFBTU0sWUFBWTtVQUMxQztBQUVBRyx1QkFBYVEsS0FBS0YsWUFBWTtRQUNoQyxPQUFPO0FBRUxOLHVCQUFhUSxLQUFLTixJQUFJO1FBQ3hCO01BQ0Y7QUFFQU4scUJBQWVJLGFBQWFTLEtBQUssR0FBRztJQUN0QztBQUVBQyxvQkFBUXJCLE1BQU1PLGNBQWNMLE1BQU1FLFNBQVNrQixNQUFNO0VBQ25ELENBQUM7QUFFRCxTQUFPdEI7QUFDVDtBQUtPLFNBQUF1QixxQkFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsQ0FBQTtBQUE4QixRQUFBO0lBQUEzQjtFQUFBLElBQUF5QjtBQUtuQyxRQUFBLENBQUFHLFNBQUEsSUFBb0JDLFNBQVM7QUFFN0IsTUFBSTdCLE9BQU1XLFdBQVksR0FBQztBQUFBLFdBQ2Q7RUFBSTtBQUNaLE1BQUFtQjtBQUFBLE1BQUFDO0FBQUEsTUFBQUM7QUFBQSxNQUFBTixFQUFBLENBQUEsTUFBQTFCLFVBQUEwQixFQUFBLENBQUEsTUFBQUUsV0FBQTtBQUdELFVBQUFLLGVBQXFCakMsT0FBTWtDLE9BQ3pCQyxPQVFBLENBQUMsQ0FDSDtBQUdBLFVBQUFDLGNBQW9CYixPQUFNYyxLQUFNSixZQUFZLEVBQUNLLEtBQU07QUFHaERSLFNBQUFTO0FBQWtCUixTQUFBO0FBQ2hCQyxTQUFBSSxZQUFXSSxJQUFLQyxZQUFBO0FBQ2YsWUFBQUMsYUFBbUJULGFBQWFVLE1BQUksS0FBakIsQ0FBQTtBQUduQkQsaUJBQVVKLEtBQU1NLE1BSWY7QUFHRCxZQUFBQyxZQUFrQjlDLGdCQUFnQjJDLFVBQVU7QUFHNUMsWUFBQUksa0JBQXdCLG9CQUFJQyxJQUcxQjtBQUVGTCxpQkFBVXhDLFFBQVM4QyxhQUFBO0FBQ2pCLFlBQUk3QyxRQUFLOEMsY0FBZTlDLFFBQUsrQyxTQUFRO0FBRW5DLGdCQUFBQyxNQUFZLEdBQUdoRCxRQUFLOEMsY0FBTCxFQUFzQixJQUFJOUMsUUFBSytDLFdBQUwsRUFBbUI7QUFDNUQsY0FBSSxDQUFDSixnQkFBZU0sSUFBS0QsR0FBRyxHQUFDO0FBQzNCTCw0QkFBZU8sSUFBS0YsS0FBSztjQUFBRixZQUNYOUMsUUFBSzhDO2NBQVdDLFNBQ25CL0MsUUFBSytDO1lBQ2hCLENBQUM7VUFBQztRQUNIO01BQ0YsQ0FDRjtBQUdELFlBQUFJLGFBQW1CQyxRQUFRVixXQUFXO1FBQUFXLFlBQ3hCO1FBQUk1QjtRQUFBNkIsZ0JBRUE7VUFBQUMsVUFDSjtVQUFVUCxLQUNmO1VBQU1RLE9BQ0o7UUFDVDtNQUNGLENBQUM7QUFBQyxhQUdBLDhCQUFDLHFCQUFTaEIsS0FBQUEsUUFBb0IsZUFBQSxZQUM1Qiw4QkFBQyxrQkFBTUEsTUFBSyxHQUNaLDhCQUFDLHFCQUFnQixZQUFBLEtBQ2YsOEJBQUMsY0FBSyxVQUFBLFFBQVVXLFVBQVcsQ0FDN0IsR0FFQ1IsZ0JBQWVjLE9BQVEsS0FDdEIsOEJBQUMscUJBQWtCLGVBQUEsVUFBb0IsV0FBQSxLQUNwQ0MsTUFBS0MsS0FBTWhCLGdCQUFlaUIsT0FBUSxDQUFDLEVBQUN2QixJQUFLd0IsTUFpQnpDLENBQ0gsQ0FFSjtJQUFNLENBRVQ7QUFBQ3RDLE1BQUEsQ0FBQSxJQUFBMUI7QUFBQTBCLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQUk7QUFBQUosTUFBQSxDQUFBLElBQUFLO0FBQUFMLE1BQUEsQ0FBQSxJQUFBTTtFQUFBLE9BQUE7QUFBQUYsU0FBQUosRUFBQSxDQUFBO0FBQUFLLFNBQUFMLEVBQUEsQ0FBQTtBQUFBTSxTQUFBTixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUF1QztBQUFBLE1BQUF2QyxFQUFBLENBQUEsTUFBQUksTUFBQUosRUFBQSxDQUFBLE1BQUFLLE1BQUFMLEVBQUEsQ0FBQSxNQUFBTSxJQUFBO0FBM0VKaUMsU0FBQSw4QkFBQyxNQUFrQixlQUFBbEMsTUFDaEJDLEVBMkVIO0FBQU1OLE1BQUEsQ0FBQSxJQUFBSTtBQUFBSixNQUFBLENBQUEsSUFBQUs7QUFBQUwsTUFBQSxDQUFBLElBQUFNO0FBQUFOLE1BQUEsQ0FBQSxJQUFBdUM7RUFBQSxPQUFBO0FBQUFBLFNBQUF2QyxFQUFBLENBQUE7RUFBQTtBQUFBLFNBNUVOdUM7QUE0RU07QUF4R0gsU0FBQUQsT0FBQUUsTUFBQUMsT0FBQTtBQUFBLFNBa0ZXLDhCQUFDLHFCQUNNLEtBQUEsbUJBQW1CQSxLQUFLLElBQ2YsZUFBQSxVQUNBLGNBQUEsS0FFYkQsS0FBSWpCLGNBQ0gsOEJBQUMsY0FBSyxVQUFBLE1BQWMsTUFBQSxVQUNqQmlCLEtBQUlqQixVQUNQLEdBRURpQixLQUFJaEIsV0FDSCw4QkFBQyxjQUFLLFVBQUEsTUFBYyxNQUFBLFVBQU8sZ0JBQ1pnQixLQUFJaEIsT0FDbkIsQ0FFSjtBQUFNO0FBakdqQixTQUFBTixPQUFBd0IsR0FBQUMsR0FBQTtBQWtDRyxNQUFJLENBQUNELEVBQUNoRSxRQUFTaUUsRUFBQ2pFLE1BQUs7QUFBQSxXQUFTO0VBQUU7QUFDaEMsTUFBSWdFLEVBQUNoRSxRQUFELENBQVdpRSxFQUFDakUsTUFBSztBQUFBLFdBQVM7RUFBQztBQUFBLFVBQ3ZCZ0UsRUFBQ2hFLFFBQUQsSUFBWWtFLGNBQWdCRCxFQUFDakUsUUFBRCxFQUFZO0FBQUM7QUFwQ3BELFNBQUErQixNQUFBb0MsS0FBQXBFLE9BQUE7QUFjRCxRQUFBd0MsT0FBYXhDLE1BQUt3QyxRQUFMO0FBQ2IsTUFBSSxDQUFDNEIsSUFBSTVCLElBQUksR0FBQztBQUNaNEIsUUFBSTVCLElBQUksSUFBSSxDQUFBO0VBQUg7QUFFWDRCLE1BQUk1QixJQUFJLEVBQUN2QixLQUFPakIsS0FBSztBQUFDLFNBQ2ZvRTtBQUFHOzs7O0FBMUZoQjtBQUNBO0FBQ0E7QUFFQTs7OyIsCiAgIm5hbWVzIjogWyJrZXlzIiwgImJ1aWxkTmVzdGVkVHJlZSIsICJlcnJvcnMiLCAidHJlZSIsICJmb3JFYWNoIiwgImVycm9yIiwgInBhdGgiLCAibWVzc2FnZSIsICJwYXRoUGFydHMiLCAic3BsaXQiLCAibW9kaWZpZWRQYXRoIiwgImludmFsaWRWYWx1ZSIsICJ1bmRlZmluZWQiLCAibGVuZ3RoIiwgIm5ld1BhdGhQYXJ0cyIsICJpIiwgInBhcnQiLCAibnVtZXJpY1BhcnQiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAiZGlzcGxheVZhbHVlIiwgIlN0cmluZyIsICJwdXNoIiwgImpvaW4iLCAic2V0V2l0aCIsICJPYmplY3QiLCAiVmFsaWRhdGlvbkVycm9yc0xpc3QiLCAidDAiLCAiJCIsICJfYyIsICJ0aGVtZU5hbWUiLCAidXNlVGhlbWUiLCAiVDAiLCAidDEiLCAidDIiLCAiZXJyb3JzQnlGaWxlIiwgInJlZHVjZSIsICJfdGVtcCIsICJzb3J0ZWRGaWxlcyIsICJrZXlzIiwgInNvcnQiLCAiQm94IiwgIm1hcCIsICJmaWxlXzAiLCAiZmlsZUVycm9ycyIsICJmaWxlIiwgIl90ZW1wMiIsICJlcnJvclRyZWUiLCAic3VnZ2VzdGlvblBhaXJzIiwgIk1hcCIsICJlcnJvcl8wIiwgInN1Z2dlc3Rpb24iLCAiZG9jTGluayIsICJrZXkiLCAiaGFzIiwgInNldCIsICJ0cmVlT3V0cHV0IiwgInRyZWVpZnkiLCAic2hvd1ZhbHVlcyIsICJ0cmVlQ2hhckNvbG9ycyIsICJ0cmVlQ2hhciIsICJ2YWx1ZSIsICJzaXplIiwgIkFycmF5IiwgImZyb20iLCAidmFsdWVzIiwgIl90ZW1wMyIsICJ0MyIsICJwYWlyIiwgImluZGV4IiwgImEiLCAiYiIsICJsb2NhbGVDb21wYXJlIiwgImFjYyJdCn0K
