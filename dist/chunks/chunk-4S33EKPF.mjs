#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/lru-cache.mjs
var lru_cache_exports = {};
__export(lru_cache_exports, {
  LRUCache: () => LRUCache,
  default: () => lru_cache_default
});
import { createRequire } from "module";
var require2, mod, LRUCache, lru_cache_default;
var init_lru_cache = __esm({
  "scripts/shims/lru-cache.mjs"() {
    require2 = createRequire(import.meta.url);
    mod = require2("lru-cache");
    LRUCache = mod.LRUCache ?? mod.default ?? mod;
    lru_cache_default = mod.default ?? mod;
  }
});

export {
  LRUCache,
  lru_cache_exports,
  init_lru_cache
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9scnUtY2FjaGUubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSBcIm1vZHVsZVwiO1xuXG5jb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgbW9kID0gcmVxdWlyZShcImxydS1jYWNoZVwiKTtcblxuZXhwb3J0IGNvbnN0IExSVUNhY2hlID0gbW9kLkxSVUNhY2hlID8/IG1vZC5kZWZhdWx0ID8/IG1vZDtcbmV4cG9ydCBkZWZhdWx0IG1vZC5kZWZhdWx0ID8/IG1vZDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLHFCQUFxQjtBQUE5QixJQUVNQSxVQUNBLEtBRU8sVUFDTjtBQU5QO0FBQUE7QUFFQSxJQUFNQSxXQUFVLGNBQWMsWUFBWSxHQUFHO0FBQzdDLElBQU0sTUFBTUEsU0FBUSxXQUFXO0FBRXhCLElBQU0sV0FBVyxJQUFJLFlBQVksSUFBSSxXQUFXO0FBQ3ZELElBQU8sb0JBQVEsSUFBSSxXQUFXO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZSJdCn0K
