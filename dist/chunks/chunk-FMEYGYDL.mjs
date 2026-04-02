#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getDirectoryCompletions,
  init_directoryCompletion
} from "./chunk-7KIFCIXV.mjs";
import {
  PromptInputFooterSuggestions,
  init_PromptInputFooterSuggestions
} from "./chunk-OF3AAOLE.mjs";
import {
  Select,
  TextInput,
  addDirHelpMessage,
  init_TextInput,
  init_select,
  init_validation,
  validateDirectoryForWorkspace
} from "./chunk-BQ2W5UUK.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-UPQJMBLU.mjs";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-36ZVP56J.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_dist,
  init_ink,
  init_react_compiler_runtime,
  useDebounceCallback
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/permissions/rules/AddWorkspaceDirectory.tsx
function PermissionDescription() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Blaude will be able to read files in this directory and make edits when auto-accept edits is on.");
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function DirectoryDisplay(t0) {
  const $ = c(5);
  const {
    path
  } = t0;
  let t1;
  if ($[0] !== path) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { color: "permission" }, path);
    $[0] = path;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(PermissionDescription, null);
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t1) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2, gap: 1 }, t1, t2);
    $[3] = t1;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function DirectoryInput(t0) {
  const $ = c(14);
  const {
    value,
    onChange,
    onSubmit,
    error,
    suggestions,
    selectedSuggestion
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedText, null, "Enter the path to the directory:");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== onChange || $[2] !== onSubmit || $[3] !== value) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { borderDimColor: true, borderStyle: "round", marginY: 1, paddingLeft: 1 }, /* @__PURE__ */ createElement(TextInput, { showCursor: true, placeholder: `Directory path${figures_default.ellipsis}`, value, onChange, onSubmit, columns: 80, cursorOffset: value.length, onChangeCursorOffset: _temp }));
    $[1] = onChange;
    $[2] = onSubmit;
    $[3] = value;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== selectedSuggestion || $[6] !== suggestions) {
    t3 = suggestions.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(PromptInputFooterSuggestions, { suggestions, selectedSuggestion }));
    $[5] = selectedSuggestion;
    $[6] = suggestions;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== error) {
    t4 = error && /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error);
    $[8] = error;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== t2 || $[11] !== t3 || $[12] !== t4) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t1, t2, t3, t4);
    $[10] = t2;
    $[11] = t3;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function _temp() {
}
function AddWorkspaceDirectory(t0) {
  const $ = c(34);
  const {
    onAddDirectory,
    onCancel,
    permissionContext,
    directoryPath
  } = t0;
  const [directoryInput, setDirectoryInput] = useState("");
  const [error, setError] = useState(null);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [suggestions, setSuggestions] = useState(t1);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = async (path) => {
      if (!path) {
        setSuggestions([]);
        setSelectedSuggestion(0);
        return;
      }
      const completions = await getDirectoryCompletions(path);
      setSuggestions(completions);
      setSelectedSuggestion(0);
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const fetchSuggestions = t2;
  const debouncedFetchSuggestions = useDebounceCallback(fetchSuggestions, 100);
  let t3;
  let t4;
  if ($[2] !== debouncedFetchSuggestions || $[3] !== directoryInput) {
    t3 = () => {
      debouncedFetchSuggestions(directoryInput);
    };
    t4 = [directoryInput, debouncedFetchSuggestions];
    $[2] = debouncedFetchSuggestions;
    $[3] = directoryInput;
    $[4] = t3;
    $[5] = t4;
  } else {
    t3 = $[4];
    t4 = $[5];
  }
  useEffect(t3, t4);
  let t5;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = (suggestion) => {
      const newPath = suggestion.id + "/";
      setDirectoryInput(newPath);
      setError(null);
    };
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  const applySuggestion = t5;
  let t6;
  if ($[7] !== onAddDirectory || $[8] !== permissionContext) {
    t6 = async (newPath_0) => {
      const result = await validateDirectoryForWorkspace(newPath_0, permissionContext);
      if (result.resultType === "success") {
        onAddDirectory(result.absolutePath, false);
      } else {
        setError(addDirHelpMessage(result));
      }
    };
    $[7] = onAddDirectory;
    $[8] = permissionContext;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  const handleSubmit = t6;
  let t7;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      context: "Settings"
    };
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  useKeybinding("confirm:no", onCancel, t7);
  let t8;
  if ($[11] !== handleSubmit || $[12] !== selectedSuggestion || $[13] !== suggestions) {
    t8 = (e) => {
      if (suggestions.length > 0) {
        if (e.key === "tab") {
          e.preventDefault();
          const suggestion_0 = suggestions[selectedSuggestion];
          if (suggestion_0) {
            applySuggestion(suggestion_0);
          }
          return;
        }
        if (e.key === "return") {
          e.preventDefault();
          const suggestion_1 = suggestions[selectedSuggestion];
          if (suggestion_1) {
            handleSubmit(suggestion_1.id + "/");
          }
          return;
        }
        if (e.key === "up" || e.ctrl && e.key === "p") {
          e.preventDefault();
          setSelectedSuggestion((prev) => prev <= 0 ? suggestions.length - 1 : prev - 1);
          return;
        }
        if (e.key === "down" || e.ctrl && e.key === "n") {
          e.preventDefault();
          setSelectedSuggestion((prev_0) => prev_0 >= suggestions.length - 1 ? 0 : prev_0 + 1);
          return;
        }
      }
    };
    $[11] = handleSubmit;
    $[12] = selectedSuggestion;
    $[13] = suggestions;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  const handleKeyDown = t8;
  let t9;
  if ($[15] !== directoryPath || $[16] !== onAddDirectory || $[17] !== onCancel) {
    t9 = (value) => {
      if (!directoryPath) {
        return;
      }
      const selectionValue = value;
      bb64: switch (selectionValue) {
        case "yes-session": {
          onAddDirectory(directoryPath, false);
          break bb64;
        }
        case "yes-remember": {
          onAddDirectory(directoryPath, true);
          break bb64;
        }
        case "no": {
          onCancel();
        }
      }
    };
    $[15] = directoryPath;
    $[16] = onAddDirectory;
    $[17] = onCancel;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  const handleSelect = t9;
  const t10 = directoryPath ? void 0 : _temp2;
  let t11;
  if ($[19] !== directoryInput || $[20] !== directoryPath || $[21] !== error || $[22] !== handleSelect || $[23] !== handleSubmit || $[24] !== selectedSuggestion || $[25] !== suggestions) {
    t11 = directoryPath ? /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(DirectoryDisplay, { path: directoryPath }), /* @__PURE__ */ createElement(Select, { options: REMEMBER_DIRECTORY_OPTIONS, onChange: handleSelect, onCancel: () => handleSelect("no") })) : /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, marginX: 2 }, /* @__PURE__ */ createElement(PermissionDescription, null), /* @__PURE__ */ createElement(DirectoryInput, { value: directoryInput, onChange: setDirectoryInput, onSubmit: handleSubmit, error, suggestions, selectedSuggestion }));
    $[19] = directoryInput;
    $[20] = directoryPath;
    $[21] = error;
    $[22] = handleSelect;
    $[23] = handleSubmit;
    $[24] = selectedSuggestion;
    $[25] = suggestions;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  let t12;
  if ($[27] !== onCancel || $[28] !== t10 || $[29] !== t11) {
    t12 = /* @__PURE__ */ createElement(Dialog, { title: "Add directory to workspace", onCancel, color: "permission", isCancelActive: false, inputGuide: t10 }, t11);
    $[27] = onCancel;
    $[28] = t10;
    $[29] = t11;
    $[30] = t12;
  } else {
    t12 = $[30];
  }
  let t13;
  if ($[31] !== handleKeyDown || $[32] !== t12) {
    t13 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t12);
    $[31] = handleKeyDown;
    $[32] = t12;
    $[33] = t13;
  } else {
    t13 = $[33];
  }
  return t13;
}
function _temp2(exitState) {
  return exitState.pending ? /* @__PURE__ */ createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Tab", action: "complete" }), /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "add" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" }));
}
var REMEMBER_DIRECTORY_OPTIONS;
var init_AddWorkspaceDirectory = __esm({
  "src/components/permissions/rules/AddWorkspaceDirectory.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_dist();
    init_validation();
    init_TextInput();
    init_ink();
    init_useKeybinding();
    init_directoryCompletion();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_PromptInputFooterSuggestions();
    REMEMBER_DIRECTORY_OPTIONS = [{
      value: "yes-session",
      label: "Yes, for this session"
    }, {
      value: "yes-remember",
      label: "Yes, and remember this directory"
    }, {
      value: "no",
      label: "No"
    }];
  }
});

export {
  AddWorkspaceDirectory,
  init_AddWorkspaceDirectory
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvcGVybWlzc2lvbnMvcnVsZXMvQWRkV29ya3NwYWNlRGlyZWN0b3J5LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURlYm91bmNlQ2FsbGJhY2sgfSBmcm9tICd1c2Vob29rcy10cydcbmltcG9ydCB7XG4gIGFkZERpckhlbHBNZXNzYWdlLFxuICB2YWxpZGF0ZURpcmVjdG9yeUZvcldvcmtzcGFjZSxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbWFuZHMvYWRkLWRpci92YWxpZGF0aW9uLmpzJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dC5qcydcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4vLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFBlcm1pc3Npb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7IGdldERpcmVjdG9yeUNvbXBsZXRpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc3VnZ2VzdGlvbnMvZGlyZWN0b3J5Q29tcGxldGlvbi5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uLy4uL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHtcbiAgUHJvbXB0SW5wdXRGb290ZXJTdWdnZXN0aW9ucyxcbiAgdHlwZSBTdWdnZXN0aW9uSXRlbSxcbn0gZnJvbSAnLi4vLi4vUHJvbXB0SW5wdXQvUHJvbXB0SW5wdXRGb290ZXJTdWdnZXN0aW9ucy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25BZGREaXJlY3Rvcnk6IChwYXRoOiBzdHJpbmcsIHJlbWVtYmVyPzogYm9vbGVhbikgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICBwZXJtaXNzaW9uQ29udGV4dDogVG9vbFBlcm1pc3Npb25Db250ZXh0XG4gIGRpcmVjdG9yeVBhdGg/OiBzdHJpbmcgLy8gV2hlbiBkaXJlY3RvcnlQYXRoIGlzIHByb3ZpZGVkLCBzaG93IHNlbGVjdGlvbiBvcHRpb25zIGluc3RlYWQgb2YgaW5wdXRcbn1cblxudHlwZSBSZW1lbWJlckRpcmVjdG9yeU9wdGlvbiA9ICd5ZXMtc2Vzc2lvbicgfCAneWVzLXJlbWVtYmVyJyB8ICdubydcblxuY29uc3QgUkVNRU1CRVJfRElSRUNUT1JZX09QVElPTlM6IEFycmF5PHtcbiAgdmFsdWU6IFJlbWVtYmVyRGlyZWN0b3J5T3B0aW9uXG4gIGxhYmVsOiBzdHJpbmdcbn0+ID0gW1xuICB7XG4gICAgdmFsdWU6ICd5ZXMtc2Vzc2lvbicsXG4gICAgbGFiZWw6ICdZZXMsIGZvciB0aGlzIHNlc3Npb24nLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICd5ZXMtcmVtZW1iZXInLFxuICAgIGxhYmVsOiAnWWVzLCBhbmQgcmVtZW1iZXIgdGhpcyBkaXJlY3RvcnknLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdubycsXG4gICAgbGFiZWw6ICdObycsXG4gIH0sXG5dXG5cbmZ1bmN0aW9uIFBlcm1pc3Npb25EZXNjcmlwdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgQ2xhdWRlIENvZGUgd2lsbCBiZSBhYmxlIHRvIHJlYWQgZmlsZXMgaW4gdGhpcyBkaXJlY3RvcnkgYW5kIG1ha2UgZWRpdHNcbiAgICAgIHdoZW4gYXV0by1hY2NlcHQgZWRpdHMgaXMgb24uXG4gICAgPC9UZXh0PlxuICApXG59XG5cbmZ1bmN0aW9uIERpcmVjdG9yeURpc3BsYXkoeyBwYXRoIH06IHsgcGF0aDogc3RyaW5nIH0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdYPXsyfSBnYXA9ezF9PlxuICAgICAgPFRleHQgY29sb3I9XCJwZXJtaXNzaW9uXCI+e3BhdGh9PC9UZXh0PlxuICAgICAgPFBlcm1pc3Npb25EZXNjcmlwdGlvbiAvPlxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIERpcmVjdG9yeUlucHV0KHtcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBvblN1Ym1pdCxcbiAgZXJyb3IsXG4gIHN1Z2dlc3Rpb25zLFxuICBzZWxlY3RlZFN1Z2dlc3Rpb24sXG59OiB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU3VibWl0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBlcnJvcjogc3RyaW5nIHwgbnVsbFxuICBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbkl0ZW1bXVxuICBzZWxlY3RlZFN1Z2dlc3Rpb246IG51bWJlclxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8VGV4dD5FbnRlciB0aGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5OjwvVGV4dD5cbiAgICAgIDxCb3ggYm9yZGVyRGltQ29sb3IgYm9yZGVyU3R5bGU9XCJyb3VuZFwiIG1hcmdpblk9ezF9IHBhZGRpbmdMZWZ0PXsxfT5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICBwbGFjZWhvbGRlcj17YERpcmVjdG9yeSBwYXRoJHtmaWd1cmVzLmVsbGlwc2lzfWB9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgY29sdW1ucz17ODB9XG4gICAgICAgICAgY3Vyc29yT2Zmc2V0PXt2YWx1ZS5sZW5ndGh9XG4gICAgICAgICAgb25DaGFuZ2VDdXJzb3JPZmZzZXQ9eygpID0+IHt9fVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICB7c3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8UHJvbXB0SW5wdXRGb290ZXJTdWdnZXN0aW9uc1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnM9e3N1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgc2VsZWN0ZWRTdWdnZXN0aW9uPXtzZWxlY3RlZFN1Z2dlc3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAge2Vycm9yICYmIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0Pn1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQWRkV29ya3NwYWNlRGlyZWN0b3J5KHtcbiAgb25BZGREaXJlY3RvcnksXG4gIG9uQ2FuY2VsLFxuICBwZXJtaXNzaW9uQ29udGV4dCxcbiAgZGlyZWN0b3J5UGF0aCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW2RpcmVjdG9yeUlucHV0LCBzZXREaXJlY3RvcnlJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbc3VnZ2VzdGlvbnMsIHNldFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlPFN1Z2dlc3Rpb25JdGVtW10+KFtdKVxuICBjb25zdCBbc2VsZWN0ZWRTdWdnZXN0aW9uLCBzZXRTZWxlY3RlZFN1Z2dlc3Rpb25dID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gUkVNRU1CRVJfRElSRUNUT1JZX09QVElPTlMsIFtdKVxuXG4gIC8vIEZldGNoIGRpcmVjdG9yeSBjb21wbGV0aW9uc1xuICBjb25zdCBmZXRjaFN1Z2dlc3Rpb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgc2V0U3VnZ2VzdGlvbnMoW10pXG4gICAgICBzZXRTZWxlY3RlZFN1Z2dlc3Rpb24oMClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjb21wbGV0aW9ucyA9IGF3YWl0IGdldERpcmVjdG9yeUNvbXBsZXRpb25zKHBhdGgpXG4gICAgc2V0U3VnZ2VzdGlvbnMoY29tcGxldGlvbnMpXG4gICAgc2V0U2VsZWN0ZWRTdWdnZXN0aW9uKDApXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGRlYm91bmNlZEZldGNoU3VnZ2VzdGlvbnMgPSB1c2VEZWJvdW5jZUNhbGxiYWNrKGZldGNoU3VnZ2VzdGlvbnMsIDEwMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgZGVib3VuY2VkRmV0Y2hTdWdnZXN0aW9ucyhkaXJlY3RvcnlJbnB1dClcbiAgfSwgW2RpcmVjdG9yeUlucHV0LCBkZWJvdW5jZWRGZXRjaFN1Z2dlc3Rpb25zXSlcblxuICBjb25zdCBhcHBseVN1Z2dlc3Rpb24gPSB1c2VDYWxsYmFjaygoc3VnZ2VzdGlvbjogU3VnZ2VzdGlvbkl0ZW0pID0+IHtcbiAgICBjb25zdCBuZXdQYXRoID0gc3VnZ2VzdGlvbi5pZCArICcvJ1xuICAgIHNldERpcmVjdG9yeUlucHV0KG5ld1BhdGgpXG4gICAgc2V0RXJyb3IobnVsbClcbiAgICAvLyBTdWdnZXN0aW9ucyB3aWxsIHVwZGF0ZSB2aWEgdGhlIHVzZUVmZmVjdFxuICB9LCBbXSlcblxuICAvLyBIYW5kbGUgZGlyZWN0b3J5IHN1Ym1pc3Npb24gZnJvbSBpbnB1dFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAobmV3UGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZURpcmVjdG9yeUZvcldvcmtzcGFjZShcbiAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgcGVybWlzc2lvbkNvbnRleHQsXG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQucmVzdWx0VHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIG9uQWRkRGlyZWN0b3J5KHJlc3VsdC5hYnNvbHV0ZVBhdGgsIGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoYWRkRGlySGVscE1lc3NhZ2UocmVzdWx0KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtwZXJtaXNzaW9uQ29udGV4dCwgb25BZGREaXJlY3RvcnldLFxuICApXG5cbiAgLy8gSGFuZGxlIEVzYyB0byBjYW5jZWwgKEN0cmwrQyBoYW5kbGVkIGJ5IGdsb2JhbCBrZXliaW5kaW5ncylcbiAgLy8gVXNlIFNldHRpbmdzIGNvbnRleHQgc28gJ24nIGtleSBkb2Vzbid0IGNhbmNlbCAoYWxsb3dzIHR5cGluZyAnbicgaW4gaW5wdXQpXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBvbkNhbmNlbCwgeyBjb250ZXh0OiAnU2V0dGluZ3MnIH0pXG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUYWI6IGFjY2VwdCBzZWxlY3RlZCBzdWdnZXN0aW9uIGFuZCBjb250aW51ZSAoZm9yIGRyaWxsaW5nIGludG8gc3ViZGlycylcbiAgICAgICAgaWYgKGUua2V5ID09PSAndGFiJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBzdWdnZXN0aW9uc1tzZWxlY3RlZFN1Z2dlc3Rpb25dXG4gICAgICAgICAgaWYgKHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgIGFwcGx5U3VnZ2VzdGlvbihzdWdnZXN0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVudGVyOiBhcHBseSBzZWxlY3RlZCBzdWdnZXN0aW9uIGFuZCBzdWJtaXRcbiAgICAgICAgaWYgKGUua2V5ID09PSAncmV0dXJuJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBzdWdnZXN0aW9uc1tzZWxlY3RlZFN1Z2dlc3Rpb25dXG4gICAgICAgICAgaWYgKHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgIHZvaWQgaGFuZGxlU3VibWl0KHN1Z2dlc3Rpb24uaWQgKyAnLycpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAndXAnIHx8IChlLmN0cmwgJiYgZS5rZXkgPT09ICdwJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzZXRTZWxlY3RlZFN1Z2dlc3Rpb24ocHJldiA9PlxuICAgICAgICAgICAgcHJldiA8PSAwID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA6IHByZXYgLSAxLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2Rvd24nIHx8IChlLmN0cmwgJiYgZS5rZXkgPT09ICduJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzZXRTZWxlY3RlZFN1Z2dlc3Rpb24ocHJldiA9PlxuICAgICAgICAgICAgcHJldiA+PSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxID8gMCA6IHByZXYgKyAxLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3N1Z2dlc3Rpb25zLCBzZWxlY3RlZFN1Z2dlc3Rpb24sIGFwcGx5U3VnZ2VzdGlvbiwgaGFuZGxlU3VibWl0XSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWRpcmVjdG9yeVBhdGgpIHJldHVyblxuXG4gICAgICBjb25zdCBzZWxlY3Rpb25WYWx1ZSA9IHZhbHVlIGFzIFJlbWVtYmVyRGlyZWN0b3J5T3B0aW9uXG5cbiAgICAgIHN3aXRjaCAoc2VsZWN0aW9uVmFsdWUpIHtcbiAgICAgICAgY2FzZSAneWVzLXNlc3Npb24nOlxuICAgICAgICAgIG9uQWRkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIGZhbHNlKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3llcy1yZW1lbWJlcic6XG4gICAgICAgICAgb25BZGREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgdHJ1ZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdubyc6XG4gICAgICAgICAgb25DYW5jZWwoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSxcbiAgICBbZGlyZWN0b3J5UGF0aCwgb25BZGREaXJlY3RvcnksIG9uQ2FuY2VsXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgID5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9XCJBZGQgZGlyZWN0b3J5IHRvIHdvcmtzcGFjZVwiXG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgY29sb3I9XCJwZXJtaXNzaW9uXCJcbiAgICAgICAgaXNDYW5jZWxBY3RpdmU9e2ZhbHNlfVxuICAgICAgICBpbnB1dEd1aWRlPXtcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiBleGl0U3RhdGUgPT5cbiAgICAgICAgICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvVGV4dD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiVGFiXCIgYWN0aW9uPVwiY29tcGxldGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImFkZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2RpcmVjdG9yeVBhdGggPyAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICAgIDxEaXJlY3RvcnlEaXNwbGF5IHBhdGg9e2RpcmVjdG9yeVBhdGh9IC8+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ25vJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0gbWFyZ2luWD17Mn0+XG4gICAgICAgICAgICA8UGVybWlzc2lvbkRlc2NyaXB0aW9uIC8+XG4gICAgICAgICAgICA8RGlyZWN0b3J5SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2RpcmVjdG9yeUlucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RGlyZWN0b3J5SW5wdXR9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM9e3N1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgICBzZWxlY3RlZFN1Z2dlc3Rpb249e3NlbGVjdGVkU3VnZ2VzdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxTQUFBQSx3QkFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsQ0FBQTtBQUFBLE1BQUFDO0FBQUEsTUFBQUYsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFFSUYsU0FBQSw4QkFBQyxjQUFLLFVBQUEsUUFBUyxrR0FBQTtBQUdSRixNQUFBLENBQUEsSUFBQUU7RUFBQSxPQUFBO0FBQUFBLFNBQUFGLEVBQUEsQ0FBQTtFQUFBO0FBQUEsU0FIUEU7QUFHTztBQUlYLFNBQUFHLGlCQUFBSCxJQUFBO0FBQUEsUUFBQUYsSUFBQUMsRUFBQSxDQUFBO0FBQTBCLFFBQUE7SUFBQUs7RUFBQSxJQUFBSjtBQUEwQixNQUFBSztBQUFBLE1BQUFQLEVBQUEsQ0FBQSxNQUFBTSxNQUFBO0FBRzlDQyxTQUFBLDhCQUFDLGNBQVcsT0FBQSxnQkFBY0QsSUFBSztBQUFPTixNQUFBLENBQUEsSUFBQU07QUFBQU4sTUFBQSxDQUFBLElBQUFPO0VBQUEsT0FBQTtBQUFBQSxTQUFBUCxFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFRO0FBQUEsTUFBQVIsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDdENJLFNBQUEsOEJBQUMsMkJBQXFCO0FBQUdSLE1BQUEsQ0FBQSxJQUFBUTtFQUFBLE9BQUE7QUFBQUEsU0FBQVIsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUztBQUFBLE1BQUFULEVBQUEsQ0FBQSxNQUFBTyxJQUFBO0FBRjNCRSxTQUFBLDhCQUFDLHFCQUFrQixlQUFBLFVBQW1CLFVBQUEsR0FBUSxLQUFBLEtBQzVDRixJQUNBQyxFQUNGO0FBQU1SLE1BQUEsQ0FBQSxJQUFBTztBQUFBUCxNQUFBLENBQUEs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LFNBQWUsUUFBQSxPQUFLLEdBQ25ELDhCQUFDLDRCQUNRLFFBQUEsY0FDQyxTQUFBLFlBQ0MsVUFBQSxPQUNHLGFBQUEsVUFBUSxDQUV4QjtBQUNEO0lBdE9YTDs7OztBQWpDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQSxJQUFNQSw2QkFHRCxDQUNIO01BQ0UvRCxPQUFPO01BQ1BxRSxPQUFPO0lBQ1QsR0FDQTtNQUNFckUsT0FBTztNQUNQcUUsT0FBTztJQUNULEdBQ0E7TUFDRXJFLE9BQU87TUFDUHFFLE9BQU87SUFDVCxDQUFDOzs7IiwKICAibmFtZXMiOiBbIlBlcm1pc3Npb25EZXNjcmlwdGlvbiIsICIkIiwgIl9jIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAiRGlyZWN0b3J5RGlzcGxheSIsICJwYXRoIiwgInQxIiwgInQyIiwgInQzIiwgIkRpcmVjdG9yeUlucHV0IiwgInZhbHVlIiwgIm9uQ2hhbmdlIiwgIm9uU3VibWl0IiwgImVycm9yIiwgInN1Z2dlc3Rpb25zIiwgInNlbGVjdGVkU3VnZ2VzdGlvbiIsICJmaWd1cmVzIiwgImVsbGlwc2lzIiwgImxlbmd0aCIsICJfdGVtcCIsICJ0NCIsICJ0NSIsICJBZGRXb3Jrc3BhY2VEaXJlY3RvcnkiLCAib25BZGREaXJlY3RvcnkiLCAib25DYW5jZWwiLCAicGVybWlzc2lvbkNvbnRleHQiLCAiZGlyZWN0b3J5UGF0aCIsICJkaXJlY3RvcnlJbnB1dCIsICJzZXREaXJlY3RvcnlJbnB1dCIsICJ1c2VTdGF0ZSIsICJzZXRFcnJvciIsICJzZXRTdWdnZXN0aW9ucyIsICJzZXRTZWxlY3RlZFN1Z2dlc3Rpb24iLCAiY29tcGxldGlvbnMiLCAiZ2V0RGlyZWN0b3J5Q29tcGxldGlvbnMiLCAiZmV0Y2hTdWdnZXN0aW9ucyIsICJkZWJvdW5jZWRGZXRjaFN1Z2dlc3Rpb25zIiwgInVzZURlYm91bmNlQ2FsbGJhY2siLCAidXNlRWZmZWN0IiwgInN1Z2dlc3Rpb24iLCAibmV3UGF0aCIsICJpZCIsICJhcHBseVN1Z2dlc3Rpb24iLCAidDYiLCAibmV3UGF0aF8wIiwgInJlc3VsdCIsICJ2YWxpZGF0ZURpcmVjdG9yeUZvcldvcmtzcGFjZSIsICJyZXN1bHRUeXBlIiwgImFic29sdXRlUGF0aCIsICJhZGREaXJIZWxwTWVzc2FnZSIsICJoYW5kbGVTdWJtaXQiLCAidDciLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInQ4IiwgImUiLCAia2V5IiwgInByZXZlbnREZWZhdWx0IiwgInN1Z2dlc3Rpb25fMCIsICJzdWdnZXN0aW9uXzEiLCAiY3RybCIsICJwcmV2IiwgInByZXZfMCIsICJoYW5kbGVLZXlEb3duIiwgInQ5IiwgInNlbGVjdGlvblZhbHVlIiwgImJiNjQiLCAiaGFuZGxlU2VsZWN0IiwgInQxMCIsICJ1bmRlZmluZWQiLCAiX3RlbXAyIiwgInQxMSIsICJvcHRpb25zIiwgIlJFTUVNQkVSX0RJUkVDVE9SWV9PUFRJT05TIiwgInQxMiIsICJ0MTMiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJsYWJlbCJdCn0K
