#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getSettingsWithAllErrors,
  init_allErrors,
  init_notifications,
  init_useSettingsChange,
  useNotifications,
  useSettingsChange
} from "./chunk-FMU4URRE.mjs";
import {
  c,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  getIsRemoteMode,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/hooks/notifs/useSettingsErrors.tsx
function useSettingsErrors() {
  const $ = c(6);
  const {
    addNotification,
    removeNotification
  } = useNotifications();
  const [errors_0, setErrors] = useState(_temp);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      const {
        errors: errors_1
      } = getSettingsWithAllErrors();
      setErrors(errors_1);
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const handleSettingsChange = t0;
  useSettingsChange(handleSettingsChange);
  let t1;
  let t2;
  if ($[1] !== addNotification || $[2] !== errors_0 || $[3] !== removeNotification) {
    t1 = () => {
      if (getIsRemoteMode()) {
        return;
      }
      if (errors_0.length > 0) {
        const message = `Found ${errors_0.length} settings ${errors_0.length === 1 ? "issue" : "issues"} \xB7 /doctor for details`;
        addNotification({
          key: SETTINGS_ERRORS_NOTIFICATION_KEY,
          text: message,
          color: "warning",
          priority: "high",
          timeoutMs: 6e4
        });
      } else {
        removeNotification(SETTINGS_ERRORS_NOTIFICATION_KEY);
      }
    };
    t2 = [errors_0, addNotification, removeNotification];
    $[1] = addNotification;
    $[2] = errors_0;
    $[3] = removeNotification;
    $[4] = t1;
    $[5] = t2;
  } else {
    t1 = $[4];
    t2 = $[5];
  }
  useEffect(t1, t2);
  return errors_0;
}
function _temp() {
  const {
    errors
  } = getSettingsWithAllErrors();
  return errors;
}
var SETTINGS_ERRORS_NOTIFICATION_KEY;
var init_useSettingsErrors = __esm({
  "src/hooks/notifs/useSettingsErrors.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_notifications();
    init_state();
    init_allErrors();
    init_useSettingsChange();
    SETTINGS_ERRORS_NOTIFICATION_KEY = "settings-errors";
  }
});

export {
  useSettingsErrors,
  init_useSettingsErrors
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2hvb2tzL25vdGlmcy91c2VTZXR0aW5nc0Vycm9ycy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb25zIH0gZnJvbSAnc3JjL2NvbnRleHQvbm90aWZpY2F0aW9ucy5qcydcbmltcG9ydCB7IGdldElzUmVtb3RlTW9kZSB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldFNldHRpbmdzV2l0aEFsbEVycm9ycyB9IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL2FsbEVycm9ycy5qcydcbmltcG9ydCB0eXBlIHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3MvdmFsaWRhdGlvbi5qcydcbmltcG9ydCB7IHVzZVNldHRpbmdzQ2hhbmdlIH0gZnJvbSAnLi4vdXNlU2V0dGluZ3NDaGFuZ2UuanMnXG5cbmNvbnN0IFNFVFRJTkdTX0VSUk9SU19OT1RJRklDQVRJT05fS0VZID0gJ3NldHRpbmdzLWVycm9ycydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNldHRpbmdzRXJyb3JzKCk6IFZhbGlkYXRpb25FcnJvcltdIHtcbiAgY29uc3QgeyBhZGROb3RpZmljYXRpb24sIHJlbW92ZU5vdGlmaWNhdGlvbiB9ID0gdXNlTm90aWZpY2F0aW9ucygpXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZTxWYWxpZGF0aW9uRXJyb3JbXT4oKCkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBnZXRTZXR0aW5nc1dpdGhBbGxFcnJvcnMoKVxuICAgIHJldHVybiBlcnJvcnNcbiAgfSlcblxuICBjb25zdCBoYW5kbGVTZXR0aW5nc0NoYW5nZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGVycm9ycyB9ID0gZ2V0U2V0dGluZ3NXaXRoQWxsRXJyb3JzKClcbiAgICBzZXRFcnJvcnMoZXJyb3JzKVxuICB9LCBbXSlcblxuICB1c2VTZXR0aW5nc0NoYW5nZShoYW5kbGVTZXR0aW5nc0NoYW5nZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChnZXRJc1JlbW90ZU1vZGUoKSkgcmV0dXJuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYEZvdW5kICR7ZXJyb3JzLmxlbmd0aH0gc2V0dGluZ3MgJHtlcnJvcnMubGVuZ3RoID09PSAxID8gJ2lzc3VlJyA6ICdpc3N1ZXMnfSDCtyAvZG9jdG9yIGZvciBkZXRhaWxzYFxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAga2V5OiBTRVRUSU5HU19FUlJPUlNfTk9USUZJQ0FUSU9OX0tFWSxcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgICAgY29sb3I6ICd3YXJuaW5nJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgdGltZW91dE1zOiA2MDAwMCxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU5vdGlmaWNhdGlvbihTRVRUSU5HU19FUlJPUlNfTk9USUZJQ0FUSU9OX0tFWSlcbiAgICB9XG4gIH0sIFtlcnJvcnMsIGFkZE5vdGlmaWNhdGlvbiwgcmVtb3ZlTm90aWZpY2F0aW9uXSlcblxuICByZXR1cm4gZXJyb3JzXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNPLFNBQUFBLG9CQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQ0wsUUFBQTtJQUFBQztJQUFBQztFQUFBLElBQWdEQyxpQkFBaUI7QUFDakUsUUFBQSxDQUFBQyxVQUFBQyxTQUFBLElBQTRCQyxTQUE0QkMsS0FHdkQ7QUFBQyxNQUFBQztBQUFBLE1BQUFULEVBQUEsQ0FBQSxNQUFBVSx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBRXVDRixTQUFBQSxNQUFBO0FBQ3ZDLFlBQUE7UUFBQUcsUUFBQUM7TUFBQSxJQUFtQkMseUJBQXlCO0FBQzVDUixnQkFBVU0sUUFBTTtJQUFDO0FBQ2xCWixNQUFBLENBQUEsSUFBQVM7RUFBQSxPQUFBO0FBQUFBLFNBQUFULEVBQUEsQ0FBQTtFQUFBO0FBSEQsUUFBQWUsdUJBQTZCTjtBQUs3Qk8sb0JBQWtCRCxvQkFBb0I7QUFBQyxNQUFBRTtBQUFBLE1BQUFDO0FBQUEsTUFBQWxCLEVBQUEsQ0FBQSxNQUFBRSxtQkFBQUYsRUFBQSxDQUFBLE1BQUFLLFlBQUFMLEVBQUEsQ0FBQSxNQUFBRyxvQkFBQTtBQUU3QmMsU0FBQUEsTUFBQTtBQUNSLFVBQUlFLGdCQUFnQixHQUFDO0FBQUE7TUFBQTtBQUNyQixVQUFJUCxTQUFNUSxTQUFVLEdBQUM7QUFDbkIsY0FBQUMsVUFBZ0IsU0FBU1QsU0FBTVEsTUFBTyxhQUFhUixTQUFNUSxXQUFZLElBQWxCLFVBQUEsUUFBd0M7QUFDM0ZsQix3QkFBZ0I7VUFBQW9CLEtBQ1RDO1VBQWdDQyxNQUMvQkg7VUFBT0ksT0FDTjtVQUFTQyxVQUNOO1VBQU1DLFdBQ0w7UUFDYixDQUFDO01BQUMsT0FBQTtBQUVGeEIsMkJBQW1Cb0IsZ0NBQWdDO01BQUM7SUFDckQ7QUFDQUwsU0FBQSxDQUFDTixVQUFRVixpQkFBaUJDLGtCQUFrQjtBQUFDSCxNQUFBLENBQUEsSUFBQUU7QUFBQUYsTUFBQSxDQUFBLElBQUFLO0FBQUFMLE1BQUEsQ0FBQSxJQUFBRztBQUFBSCxNQUFBLENBQUEsSUFBQWlCO0FBQUFqQixNQUFBLENBQUEsSUFBQWtCO0VBQUEsT0FBQTtBQUFBRCxTQUFBakIsRUFBQSxDQUFBO0FBQUFrQixTQUFBbEIsRUFBQSxDQUFBO0VBQUE7QUFkaEQ0QixZQUFVWCxJQWNQQyxFQUE2QztBQUFDLFNBRTFDTjtBQUFNO0FBOUJSLFNBQUFKLFFBQUE7QUFHSCxRQUFBO0lBQUFJO0VBQUEsSUFBbUJFLHlCQUF5QjtBQUFDLFNBQ3RDRjtBQUFNO0lBTlhXOzs7O0FBUE47QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLG1DQUFtQzs7OyIsCiAgIm5hbWVzIjogWyJ1c2VTZXR0aW5nc0Vycm9ycyIsICIkIiwgIl9jIiwgImFkZE5vdGlmaWNhdGlvbiIsICJyZW1vdmVOb3RpZmljYXRpb24iLCAidXNlTm90aWZpY2F0aW9ucyIsICJlcnJvcnNfMCIsICJzZXRFcnJvcnMiLCAidXNlU3RhdGUiLCAiX3RlbXAiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJlcnJvcnMiLCAiZXJyb3JzXzEiLCAiZ2V0U2V0dGluZ3NXaXRoQWxsRXJyb3JzIiwgImhhbmRsZVNldHRpbmdzQ2hhbmdlIiwgInVzZVNldHRpbmdzQ2hhbmdlIiwgInQxIiwgInQyIiwgImdldElzUmVtb3RlTW9kZSIsICJsZW5ndGgiLCAibWVzc2FnZSIsICJrZXkiLCAiU0VUVElOR1NfRVJST1JTX05PVElGSUNBVElPTl9LRVkiLCAidGV4dCIsICJjb2xvciIsICJwcmlvcml0eSIsICJ0aW1lb3V0TXMiLCAidXNlRWZmZWN0Il0KfQo=
