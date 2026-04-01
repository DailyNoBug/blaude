#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Login,
  init_login
} from "./chunk-MI6L4ZPB.mjs";
import {
  init_extra_usage_core,
  runExtraUsage
} from "./chunk-YZ6EEZQQ.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/extra-usage/extra-usage.tsx
async function call(onDone, context) {
  const result = await runExtraUsage();
  if (result.type === "message") {
    onDone(result.value);
    return null;
  }
  return /* @__PURE__ */ react_default.createElement(Login, { startingMessage: "Starting new login following /extra-usage. Exit with Ctrl-C to use existing account.", onDone: (success) => {
    context.onChangeAPIKey();
    onDone(success ? "Login successful" : "Login interrupted");
  } });
}
var init_extra_usage = __esm({
  "src/commands/extra-usage/extra-usage.tsx"() {
    init_react();
    init_login();
    init_extra_usage_core();
  }
});

export {
  call,
  init_extra_usage
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2V4dHJhLXVzYWdlL2V4dHJhLXVzYWdlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZE9uRG9uZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLmpzJ1xuaW1wb3J0IHsgcnVuRXh0cmFVc2FnZSB9IGZyb20gJy4vZXh0cmEtdXNhZ2UtY29yZS5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBjb250ZXh0OiBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGUgfCBudWxsPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bkV4dHJhVXNhZ2UoKVxuXG4gIGlmIChyZXN1bHQudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgb25Eb25lKHJlc3VsdC52YWx1ZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TG9naW5cbiAgICAgIHN0YXJ0aW5nTWVzc2FnZT17XG4gICAgICAgICdTdGFydGluZyBuZXcgbG9naW4gZm9sbG93aW5nIC9leHRyYS11c2FnZS4gRXhpdCB3aXRoIEN0cmwtQyB0byB1c2UgZXhpc3RpbmcgYWNjb3VudC4nXG4gICAgICB9XG4gICAgICBvbkRvbmU9e3N1Y2Nlc3MgPT4ge1xuICAgICAgICBjb250ZXh0Lm9uQ2hhbmdlQVBJS2V5KClcbiAgICAgICAgb25Eb25lKHN1Y2Nlc3MgPyAnTG9naW4gc3VjY2Vzc2Z1bCcgOiAnTG9naW4gaW50ZXJydXB0ZWQnKVxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLGVBQXNCQSxLQUNwQkMsUUFDQUMsU0FDaUM7QUFDakMsUUFBTUMsU0FBUyxNQUFNQyxjQUFjO0FBRW5DLE1BQUlELE9BQU9FLFNBQVMsV0FBVztBQUM3QkosV0FBT0UsT0FBT0csS0FBSztBQUNuQixXQUFPO0VBQ1Q7QUFFQSxTQUNFLDRDQUFDLFNBQ0MsaUJBQ0Usd0ZBRUYsUUFBUUMsYUFBVztBQUNqQkwsWUFBUU0sZUFBZTtBQUN2QlAsV0FBT00sVUFBVSxxQkFBcUIsbUJBQW1CO0VBQzNELEdBQUU7QUFHUjtBQTVCQTs7O0FBR0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJjYWxsIiwgIm9uRG9uZSIsICJjb250ZXh0IiwgInJlc3VsdCIsICJydW5FeHRyYVVzYWdlIiwgInR5cGUiLCAidmFsdWUiLCAic3VjY2VzcyIsICJvbkNoYW5nZUFQSUtleSJdCn0K
