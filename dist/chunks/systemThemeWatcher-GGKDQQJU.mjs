#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getSystemThemeName,
  init_systemTheme
} from "./chunk-V7ZPGO35.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/systemThemeWatcher.ts
function watchSystemTheme(_internalQuerier, onChange) {
  onChange(getSystemThemeName());
  return () => {
  };
}
var init_systemThemeWatcher = __esm({
  "src/utils/systemThemeWatcher.ts"() {
    init_systemTheme();
  }
});
init_systemThemeWatcher();
export {
  watchSystemTheme
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3N5c3RlbVRoZW1lV2F0Y2hlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZ2V0U3lzdGVtVGhlbWVOYW1lLCB0eXBlIFN5c3RlbVRoZW1lIH0gZnJvbSAnLi9zeXN0ZW1UaGVtZS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoU3lzdGVtVGhlbWUoXG4gIF9pbnRlcm5hbFF1ZXJpZXI6IHVua25vd24sXG4gIG9uQ2hhbmdlOiAodGhlbWU6IFN5c3RlbVRoZW1lKSA9PiB2b2lkLFxuKTogKCkgPT4gdm9pZCB7XG4gIG9uQ2hhbmdlKGdldFN5c3RlbVRoZW1lTmFtZSgpKVxuICByZXR1cm4gKCkgPT4ge31cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUVPLFNBQVMsaUJBQ2Qsa0JBQ0EsVUFDWTtBQUNaLFdBQVMsbUJBQW1CLENBQUM7QUFDN0IsU0FBTyxNQUFNO0FBQUEsRUFBQztBQUNoQjtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
