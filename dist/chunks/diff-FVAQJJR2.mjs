#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/diff/diff.tsx
var call;
var init_diff = __esm({
  "src/commands/diff/diff.tsx"() {
    init_react();
    call = async (onDone, context) => {
      const {
        DiffDialog
      } = await import("./DiffDialog-MTTTQMWL.mjs");
      return /* @__PURE__ */ createElement(DiffDialog, { messages: context.messages, onDone });
    };
  }
});
init_diff();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2RpZmYvZGlmZi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDYWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcblxuZXhwb3J0IGNvbnN0IGNhbGw6IExvY2FsSlNYQ29tbWFuZENhbGwgPSBhc3luYyAob25Eb25lLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgRGlmZkRpYWxvZyB9ID0gYXdhaXQgaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2RpZmYvRGlmZkRpYWxvZy5qcycpXG4gIHJldHVybiA8RGlmZkRpYWxvZyBtZXNzYWdlcz17Y29udGV4dC5tZXNzYWdlc30gb25Eb25lPXtvbkRvbmV9IC8+XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUdhQTtBQUhiOzs7QUFHTyxJQUFNQSxPQUE0QixPQUFPQyxRQUFRQyxZQUFZO0FBQ2xFLFlBQU07UUFBRUM7TUFBVyxJQUFJLE1BQU0sT0FBTywyQkFBcUM7QUFDekUsYUFBTyw4QkFBQyxjQUFXLFVBQVVELFFBQVFFLFVBQVUsUUFBZTtJQUNoRTs7OyIsCiAgIm5hbWVzIjogWyJjYWxsIiwgIm9uRG9uZSIsICJjb250ZXh0IiwgIkRpZmZEaWFsb2ciLCAibWVzc2FnZXMiXQp9Cg==
