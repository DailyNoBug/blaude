#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  PermissionDialog,
  Select,
  init_PermissionDialog,
  init_select
} from "./chunk-FMU4URRE.mjs";
import {
  ThemedBox_default,
  ThemedText,
  init_ink
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useCallback,
  useEffect,
  useRef
} from "./chunk-TEJH3H3H.mjs";
import {
  getClaudeAIOAuthTokens,
  getGlobalConfig,
  init_auth,
  init_bridgeEnabled,
  init_config2 as init_config,
  isBridgeEnabled,
  saveGlobalConfig
} from "./chunk-NKGQGSP5.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/RemoteCallout.tsx
function RemoteCallout({
  onDone
}) {
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const handleCancel = useCallback(() => {
    onDoneRef.current("dismiss");
  }, []);
  useEffect(() => {
    saveGlobalConfig((current) => {
      if (current.remoteDialogSeen) return current;
      return {
        ...current,
        remoteDialogSeen: true
      };
    });
  }, []);
  const handleSelect = useCallback((value) => {
    onDoneRef.current(value);
  }, []);
  const options = [{
    label: "Enable Remote Control for this session",
    description: "Opens a secure connection to claude.ai.",
    value: "enable"
  }, {
    label: "Never mind",
    description: "You can always enable it later with /remote-control.",
    value: "dismiss"
  }];
  return /* @__PURE__ */ react_default.createElement(PermissionDialog, { title: "Remote Control" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2, paddingY: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Remote Control lets you access this CLI session from the web (claude.ai/code) or the Blaude app, so you can pick up where you left off on any device."), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, "You can disconnect remote access anytime by running /remote-control again.")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, onCancel: handleCancel }))));
}
function shouldShowRemoteCallout() {
  const config = getGlobalConfig();
  if (config.remoteDialogSeen) return false;
  if (!isBridgeEnabled()) return false;
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens?.accessToken) return false;
  return true;
}
var init_RemoteCallout = __esm({
  "src/components/RemoteCallout.tsx"() {
    init_react();
    init_bridgeEnabled();
    init_ink();
    init_auth();
    init_config();
    init_select();
    init_PermissionDialog();
  }
});

export {
  RemoteCallout,
  shouldShowRemoteCallout,
  init_RemoteCallout
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVtb3RlQ2FsbG91dC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlzQnJpZGdlRW5hYmxlZCB9IGZyb20gJy4uL2JyaWRnZS9icmlkZ2VFbmFibGVkLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQUlPQXV0aFRva2VucyB9IGZyb20gJy4uL3V0aWxzL2F1dGguanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgdHlwZSB7IE9wdGlvbldpdGhEZXNjcmlwdGlvbiB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IFBlcm1pc3Npb25EaWFsb2cgfSBmcm9tICcuL3Blcm1pc3Npb25zL1Blcm1pc3Npb25EaWFsb2cuanMnXG5cbnR5cGUgUmVtb3RlQ2FsbG91dFNlbGVjdGlvbiA9ICdlbmFibGUnIHwgJ2Rpc21pc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRG9uZTogKHNlbGVjdGlvbjogUmVtb3RlQ2FsbG91dFNlbGVjdGlvbikgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVtb3RlQ2FsbG91dCh7IG9uRG9uZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IG9uRG9uZVJlZiA9IHVzZVJlZihvbkRvbmUpXG4gIG9uRG9uZVJlZi5jdXJyZW50ID0gb25Eb25lXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIG9uRG9uZVJlZi5jdXJyZW50KCdkaXNtaXNzJylcbiAgfSwgW10pXG5cbiAgLy8gUGVybWFuZW50bHkgbWFyayBhcyBzZWVuIG9uIG1vdW50IHNvIGl0IG9ubHkgc2hvd3Mgb25jZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiB7XG4gICAgICBpZiAoY3VycmVudC5yZW1vdGVEaWFsb2dTZWVuKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgcmVtb3RlRGlhbG9nU2VlbjogdHJ1ZSB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBSZW1vdGVDYWxsb3V0U2VsZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgb25Eb25lUmVmLmN1cnJlbnQodmFsdWUpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9wdGlvbnM6IE9wdGlvbldpdGhEZXNjcmlwdGlvbjxSZW1vdGVDYWxsb3V0U2VsZWN0aW9uPltdID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnRW5hYmxlIFJlbW90ZSBDb250cm9sIGZvciB0aGlzIHNlc3Npb24nLFxuICAgICAgZGVzY3JpcHRpb246ICdPcGVucyBhIHNlY3VyZSBjb25uZWN0aW9uIHRvIGNsYXVkZS5haS4nLFxuICAgICAgdmFsdWU6ICdlbmFibGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdOZXZlciBtaW5kJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnWW91IGNhbiBhbHdheXMgZW5hYmxlIGl0IGxhdGVyIHdpdGggL3JlbW90ZS1jb250cm9sLicsXG4gICAgICB2YWx1ZTogJ2Rpc21pc3MnLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxQZXJtaXNzaW9uRGlhbG9nIHRpdGxlPVwiUmVtb3RlIENvbnRyb2xcIj5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdYPXsyfSBwYWRkaW5nWT17MX0+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBSZW1vdGUgQ29udHJvbCBsZXRzIHlvdSBhY2Nlc3MgdGhpcyBDTEkgc2Vzc2lvbiBmcm9tIHRoZSB3ZWJcbiAgICAgICAgICAgIChjbGF1ZGUuYWkvY29kZSkgb3IgdGhlIENsYXVkZSBhcHAsIHNvIHlvdSBjYW4gcGljayB1cCB3aGVyZSB5b3VcbiAgICAgICAgICAgIGxlZnQgb2ZmIG9uIGFueSBkZXZpY2UuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBZb3UgY2FuIGRpc2Nvbm5lY3QgcmVtb3RlIGFjY2VzcyBhbnl0aW1lIGJ5IHJ1bm5pbmcgL3JlbW90ZS1jb250cm9sXG4gICAgICAgICAgICBhZ2Fpbi5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxuICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvUGVybWlzc2lvbkRpYWxvZz5cbiAgKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdG8gc2hvdyB0aGUgcmVtb3RlIGNhbGxvdXQgKGZpcnN0LXRpbWUgZGlhbG9nKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFNob3dSZW1vdGVDYWxsb3V0KCk6IGJvb2xlYW4ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICBpZiAoY29uZmlnLnJlbW90ZURpYWxvZ1NlZW4pIHJldHVybiBmYWxzZVxuICBpZiAoIWlzQnJpZGdlRW5hYmxlZCgpKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgdG9rZW5zID0gZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpXG4gIGlmICghdG9rZW5zPy5hY2Nlc3NUb2tlbikgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0cnVlXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLFNBQVNBLGNBQWM7RUFBRUM7QUFBYyxHQUFvQjtBQUNoRSxRQUFNQyxZQUFZQyxPQUFPRixNQUFNO0FBQy9CQyxZQUFVRSxVQUFVSDtBQUVwQixRQUFNSSxlQUFlQyxZQUFZLE1BQVk7QUFDM0NKLGNBQVVFLFFBQVEsU0FBUztFQUM3QixHQUFHLENBQUEsQ0FBRTtBQUdMRyxZQUFVLE1BQU07QUFDZEMscUJBQWlCSixhQUFXO0FBQzFCLFVBQUlBLFFBQVFLLGlCQUFrQixRQUFPTDtBQUNyQyxhQUFPO1FBQUUsR0FBR0E7UUFBU0ssa0JBQWtCO01BQUs7SUFDOUMsQ0FBQztFQUNILEdBQUcsQ0FBQSxDQUFFO0FBRUwsUUFBTUMsZUFBZUosWUFBWSxDQUFDSyxVQUF3QztBQUN4RVQsY0FBVUUsUUFBUU8sS0FBSztFQUN6QixHQUFHLENBQUEsQ0FBRTtBQUVMLFFBQU1DLFVBQTJELENBQy9EO0lBQ0VDLE9BQU87SUFDUEMsYUFBYTtJQUNiSCxPQUFPO0VBQ1QsR0FDQTtJQUNFRSxPQUFPO0lBQ1BDLGFBQWE7SUFDYkgsT0FBTztFQUNULENBQUM7QUFHSCxTQUNFLDRDQUFDLG9CQUFpQixPQUFNLG9CQUN0Qiw0Q0FBQyxxQkFBSSxlQUFjLFVBQVMsVUFBVSxHQUFHLFVBQVUsS0FDakQsNENBQUMscUJBQUksY0FBYyxHQUFHLGVBQWMsWUFDbEMsNENBQUMsa0JBQUksdUpBSUwsR0FDQSw0Q0FBQyxrQkFBSyxHQUFDLEdBQ1AsNENBQUMsa0JBQUksNEVBR0wsQ0FDRixHQUNBLDRDQUFDLHlCQUNDLDRDQUFDLFVBQ0MsU0FDQSxVQUFVRCxjQUNWLFVBQVVMLGNBQWEsQ0FFM0IsQ0FDRixDQUNGO0FBRUo7QUFLTyxTQUFTVSwwQkFBbUM7QUFDakQsUUFBTUMsU0FBU0MsZ0JBQWdCO0FBQy9CLE1BQUlELE9BQU9QLGlCQUFrQixRQUFPO0FBQ3BDLE1BQUksQ0FBQ1MsZ0JBQWdCLEVBQUcsUUFBTztBQUMvQixRQUFNQyxTQUFTQyx1QkFBdUI7QUFDdEMsTUFBSSxDQUFDRCxRQUFRRSxZQUFhLFFBQU87QUFDakMsU0FBTztBQUNUO0FBckZBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OzsiLAogICJuYW1lcyI6IFsiUmVtb3RlQ2FsbG91dCIsICJvbkRvbmUiLCAib25Eb25lUmVmIiwgInVzZVJlZiIsICJjdXJyZW50IiwgImhhbmRsZUNhbmNlbCIsICJ1c2VDYWxsYmFjayIsICJ1c2VFZmZlY3QiLCAic2F2ZUdsb2JhbENvbmZpZyIsICJyZW1vdGVEaWFsb2dTZWVuIiwgImhhbmRsZVNlbGVjdCIsICJ2YWx1ZSIsICJvcHRpb25zIiwgImxhYmVsIiwgImRlc2NyaXB0aW9uIiwgInNob3VsZFNob3dSZW1vdGVDYWxsb3V0IiwgImNvbmZpZyIsICJnZXRHbG9iYWxDb25maWciLCAiaXNCcmlkZ2VFbmFibGVkIiwgInRva2VucyIsICJnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zIiwgImFjY2Vzc1Rva2VuIl0KfQo=
