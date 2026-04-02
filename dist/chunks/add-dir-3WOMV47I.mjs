#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  AddWorkspaceDirectory,
  init_AddWorkspaceDirectory
} from "./chunk-6SZ7VLQK.mjs";
import "./chunk-O4YARGMF.mjs";
import "./chunk-6FVXPZRC.mjs";
import {
  MessageResponse,
  SandboxManager,
  addDirHelpMessage,
  applyPermissionUpdate,
  init_MessageResponse,
  init_PermissionUpdate,
  init_sandbox_adapter,
  init_validation,
  persistPermissionUpdate,
  validateDirectoryForWorkspace
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-2MSZ62QE.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-5MQ7MACZ.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  init_react,
  react_default,
  useEffect
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_source,
  source_default
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getAdditionalDirectoriesForClaudeMd,
  init_state,
  setAdditionalDirectoriesForClaudeMd
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/add-dir/add-dir.tsx
function AddDirError(t0) {
  const $ = c(10);
  const {
    message,
    args,
    onDone
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onDone) {
    t1 = () => {
      const timer = setTimeout(onDone, 0);
      return () => clearTimeout(timer);
    };
    t2 = [onDone];
    $[0] = onDone;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useEffect(t1, t2);
  let t3;
  if ($[3] !== args) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, figures_default.pointer, " /add-dir ", args);
    $[3] = args;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== message) {
    t4 = /* @__PURE__ */ react_default.createElement(MessageResponse, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, message));
    $[5] = message;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t3 || $[8] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t3, t4);
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
}
async function call(onDone, context, args) {
  const directoryPath = (args ?? "").trim();
  const appState = context.getAppState();
  const handleAddDirectory = async (path, remember = false) => {
    const destination = remember ? "localSettings" : "session";
    const permissionUpdate = {
      type: "addDirectories",
      directories: [path],
      destination
    };
    const latestAppState = context.getAppState();
    const updatedContext = applyPermissionUpdate(latestAppState.toolPermissionContext, permissionUpdate);
    context.setAppState((prev) => ({
      ...prev,
      toolPermissionContext: updatedContext
    }));
    const currentDirs = getAdditionalDirectoriesForClaudeMd();
    if (!currentDirs.includes(path)) {
      setAdditionalDirectoriesForClaudeMd([...currentDirs, path]);
    }
    SandboxManager.refreshConfig();
    let message;
    if (remember) {
      try {
        persistPermissionUpdate(permissionUpdate);
        message = `Added ${source_default.bold(path)} as a working directory and saved to local settings`;
      } catch (error) {
        message = `Added ${source_default.bold(path)} as a working directory. Failed to save to local settings: ${error instanceof Error ? error.message : "Unknown error"}`;
      }
    } else {
      message = `Added ${source_default.bold(path)} as a working directory for this session`;
    }
    const messageWithHint = `${message} ${source_default.dim("\xB7 /permissions to manage")}`;
    onDone(messageWithHint);
  };
  if (!directoryPath) {
    return /* @__PURE__ */ react_default.createElement(AddWorkspaceDirectory, { permissionContext: appState.toolPermissionContext, onAddDirectory: handleAddDirectory, onCancel: () => {
      onDone("Did not add a working directory.");
    } });
  }
  const result = await validateDirectoryForWorkspace(directoryPath, appState.toolPermissionContext);
  if (result.resultType !== "success") {
    const message = addDirHelpMessage(result);
    return /* @__PURE__ */ react_default.createElement(AddDirError, { message, args: args ?? "", onDone: () => onDone(message) });
  }
  return /* @__PURE__ */ react_default.createElement(AddWorkspaceDirectory, { directoryPath: result.absolutePath, permissionContext: appState.toolPermissionContext, onAddDirectory: handleAddDirectory, onCancel: () => {
    onDone(`Did not add ${source_default.bold(result.absolutePath)} as a working directory.`);
  } });
}
var init_add_dir = __esm({
  "src/commands/add-dir/add-dir.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_figures();
    init_react();
    init_state();
    init_MessageResponse();
    init_AddWorkspaceDirectory();
    init_ink();
    init_PermissionUpdate();
    init_sandbox_adapter();
    init_validation();
  }
});
init_add_dir();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2FkZC1kaXIvYWRkLWRpci50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBnZXRBZGRpdGlvbmFsRGlyZWN0b3JpZXNGb3JDbGF1ZGVNZCxcbiAgc2V0QWRkaXRpb25hbERpcmVjdG9yaWVzRm9yQ2xhdWRlTWQsXG59IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgTWVzc2FnZVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlUmVzcG9uc2UuanMnXG5pbXBvcnQgeyBBZGRXb3Jrc3BhY2VEaXJlY3RvcnkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Blcm1pc3Npb25zL3J1bGVzL0FkZFdvcmtzcGFjZURpcmVjdG9yeS5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7XG4gIGFwcGx5UGVybWlzc2lvblVwZGF0ZSxcbiAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25VcGRhdGUuanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25VcGRhdGVEZXN0aW5hdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25VcGRhdGVTY2hlbWEuanMnXG5pbXBvcnQgeyBTYW5kYm94TWFuYWdlciB9IGZyb20gJy4uLy4uL3V0aWxzL3NhbmRib3gvc2FuZGJveC1hZGFwdGVyLmpzJ1xuaW1wb3J0IHtcbiAgYWRkRGlySGVscE1lc3NhZ2UsXG4gIHZhbGlkYXRlRGlyZWN0b3J5Rm9yV29ya3NwYWNlLFxufSBmcm9tICcuL3ZhbGlkYXRpb24uanMnXG5cbmZ1bmN0aW9uIEFkZERpckVycm9yKHtcbiAgbWVzc2FnZSxcbiAgYXJncyxcbiAgb25Eb25lLFxufToge1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgYXJnczogc3RyaW5nXG4gIG9uRG9uZTogKCkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gV2UgbmVlZCB0byBkZWZlciBjYWxsaW5nIG9uRG9uZSB0byBhdm9pZCB0aGUgXCJyZXR1cm4gbnVsbFwiIGJ1ZyB3aGVyZVxuICAgIC8vIHRoZSBjb21wb25lbnQgdW5tb3VudHMgYmVmb3JlIFJlYWN0IGNhbiByZW5kZXIgdGhlIGVycm9yIG1lc3NhZ2UuXG4gICAgLy8gVXNpbmcgc2V0VGltZW91dCBlbnN1cmVzIHRoZSBlcnJvciBkaXNwbGF5cyBiZWZvcmUgdGhlIGNvbW1hbmQgZXhpdHMuXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KG9uRG9uZSwgMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxuICB9LCBbb25Eb25lXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIHtmaWd1cmVzLnBvaW50ZXJ9IC9hZGQtZGlyIHthcmdzfVxuICAgICAgPC9UZXh0PlxuICAgICAgPE1lc3NhZ2VSZXNwb25zZT5cbiAgICAgICAgPFRleHQ+e21lc3NhZ2V9PC9UZXh0PlxuICAgICAgPC9NZXNzYWdlUmVzcG9uc2U+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBjb250ZXh0OiBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBhcmdzPzogc3RyaW5nLFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGU+IHtcbiAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IChhcmdzID8/ICcnKS50cmltKClcbiAgY29uc3QgYXBwU3RhdGUgPSBjb250ZXh0LmdldEFwcFN0YXRlKClcblxuICAvLyBIZWxwZXIgdG8gaGFuZGxlIGFkZGluZyBhIGRpcmVjdG9yeSAoc2hhcmVkIGJ5IGJvdGggd2l0aC1wYXRoIGFuZCBuby1wYXRoIGNhc2VzKVxuICBjb25zdCBoYW5kbGVBZGREaXJlY3RvcnkgPSBhc3luYyAocGF0aDogc3RyaW5nLCByZW1lbWJlciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgZGVzdGluYXRpb246IFBlcm1pc3Npb25VcGRhdGVEZXN0aW5hdGlvbiA9IHJlbWVtYmVyXG4gICAgICA/ICdsb2NhbFNldHRpbmdzJ1xuICAgICAgOiAnc2Vzc2lvbidcblxuICAgIGNvbnN0IHBlcm1pc3Npb25VcGRhdGUgPSB7XG4gICAgICB0eXBlOiAnYWRkRGlyZWN0b3JpZXMnIGFzIGNvbnN0LFxuICAgICAgZGlyZWN0b3JpZXM6IFtwYXRoXSxcbiAgICAgIGRlc3RpbmF0aW9uLFxuICAgIH1cblxuICAgIC8vIEFwcGx5IHRvIHNlc3Npb24gY29udGV4dFxuICAgIGNvbnN0IGxhdGVzdEFwcFN0YXRlID0gY29udGV4dC5nZXRBcHBTdGF0ZSgpXG4gICAgY29uc3QgdXBkYXRlZENvbnRleHQgPSBhcHBseVBlcm1pc3Npb25VcGRhdGUoXG4gICAgICBsYXRlc3RBcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICBwZXJtaXNzaW9uVXBkYXRlLFxuICAgIClcbiAgICBjb250ZXh0LnNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQ6IHVwZGF0ZWRDb250ZXh0LFxuICAgIH0pKVxuXG4gICAgLy8gVXBkYXRlIHNhbmRib3ggY29uZmlnIHNvIEJhc2ggY29tbWFuZHMgY2FuIGFjY2VzcyB0aGUgbmV3IGRpcmVjdG9yeS5cbiAgICAvLyBCb290c3RyYXAgc3RhdGUgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3Igc2Vzc2lvbi1vbmx5IGRpcnM7IHBlcnNpc3RlZFxuICAgIC8vIGRpcnMgYXJlIHBpY2tlZCB1cCB2aWEgdGhlIHNldHRpbmdzIHN1YnNjcmlwdGlvbiwgYnV0IHdlIHJlZnJlc2hcbiAgICAvLyBlYWdlcmx5IGhlcmUgdG8gYXZvaWQgYSByYWNlIHdoZW4gdGhlIHVzZXIgYWN0cyBpbW1lZGlhdGVseS5cbiAgICBjb25zdCBjdXJyZW50RGlycyA9IGdldEFkZGl0aW9uYWxEaXJlY3Rvcmllc0ZvckNsYXVkZU1kKClcbiAgICBpZiAoIWN1cnJlbnREaXJzLmluY2x1ZGVzKHBhdGgpKSB7XG4gICAgICBzZXRBZGRpdGlvbmFsRGlyZWN0b3JpZXNGb3JDbGF1ZGVNZChbLi4uY3VycmVudERpcnMsIHBhdGhdKVxuICAgIH1cbiAgICBTYW5kYm94TWFuYWdlci5yZWZyZXNoQ29uZmlnKClcblxuICAgIGxldCBtZXNzYWdlOiBzdHJpbmdcblxuICAgIGlmIChyZW1lbWJlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGUocGVybWlzc2lvblVwZGF0ZSlcbiAgICAgICAgbWVzc2FnZSA9IGBBZGRlZCAke2NoYWxrLmJvbGQocGF0aCl9IGFzIGEgd29ya2luZyBkaXJlY3RvcnkgYW5kIHNhdmVkIHRvIGxvY2FsIHNldHRpbmdzYFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbWVzc2FnZSA9IGBBZGRlZCAke2NoYWxrLmJvbGQocGF0aCl9IGFzIGEgd29ya2luZyBkaXJlY3RvcnkuIEZhaWxlZCB0byBzYXZlIHRvIGxvY2FsIHNldHRpbmdzOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InfWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGBBZGRlZCAke2NoYWxrLmJvbGQocGF0aCl9IGFzIGEgd29ya2luZyBkaXJlY3RvcnkgZm9yIHRoaXMgc2Vzc2lvbmBcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlV2l0aEhpbnQgPSBgJHttZXNzYWdlfSAke2NoYWxrLmRpbSgnwrcgL3Blcm1pc3Npb25zIHRvIG1hbmFnZScpfWBcbiAgICBvbkRvbmUobWVzc2FnZVdpdGhIaW50KVxuICB9XG5cbiAgLy8gV2hlbiBubyBwYXRoIGlzIHByb3ZpZGVkLCBzaG93IEFkZFdvcmtzcGFjZURpcmVjdG9yeSBpbnB1dCBmb3JtIGRpcmVjdGx5XG4gIC8vIGFuZCByZXR1cm4gdG8gUkVQTCBhZnRlciBjb25maXJtYXRpb25cbiAgaWYgKCFkaXJlY3RvcnlQYXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBZGRXb3Jrc3BhY2VEaXJlY3RvcnlcbiAgICAgICAgcGVybWlzc2lvbkNvbnRleHQ9e2FwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dH1cbiAgICAgICAgb25BZGREaXJlY3Rvcnk9e2hhbmRsZUFkZERpcmVjdG9yeX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBvbkRvbmUoJ0RpZCBub3QgYWRkIGEgd29ya2luZyBkaXJlY3RvcnkuJylcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdmFsaWRhdGVEaXJlY3RvcnlGb3JXb3Jrc3BhY2UoXG4gICAgZGlyZWN0b3J5UGF0aCxcbiAgICBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gIClcblxuICBpZiAocmVzdWx0LnJlc3VsdFR5cGUgIT09ICdzdWNjZXNzJykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhZGREaXJIZWxwTWVzc2FnZShyZXN1bHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFkZERpckVycm9yXG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgIGFyZ3M9e2FyZ3MgPz8gJyd9XG4gICAgICAgIG9uRG9uZT17KCkgPT4gb25Eb25lKG1lc3NhZ2UpfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBZGRXb3Jrc3BhY2VEaXJlY3RvcnlcbiAgICAgIGRpcmVjdG9yeVBhdGg9e3Jlc3VsdC5hYnNvbHV0ZVBhdGh9XG4gICAgICBwZXJtaXNzaW9uQ29udGV4dD17YXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0fVxuICAgICAgb25BZGREaXJlY3Rvcnk9e2hhbmRsZUFkZERpcmVjdG9yeX1cbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgIG9uRG9uZShcbiAgICAgICAgICBgRGlkIG5vdCBhZGQgJHtjaGFsay5ib2xkKHJlc3VsdC5hYnNvbHV0ZVBhdGgpfSBhcyBhIHdvcmtpbmcgZGlyZWN0b3J5LmAsXG4gICAgICAgIClcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLFNBQUFBLFlBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBcUIsUUFBQTtJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFMO0FBUXBCLE1BQUFNO0FBQUEsTUFBQUM7QUFBQSxNQUFBTixFQUFBLENBQUEsTUFBQUksUUFBQTtBQUNXQyxTQUFBQSxNQUFBO0FBSVIsWUFBQUUsUUFBY0MsV0FBV0osUUFBUSxDQUFDO0FBQUMsYUFDNUIsTUFBTUssYUFBYUYsS0FBSztJQUFDO0FBQy9C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Z0IsT0FBT0UsZUFBZSxXQUFXO0FBQ25DLFVBQU1oRCxVQUFVaUQsa0JBQWtCSCxNQUFNO0FBRXhDLFdBQ0UsNENBQUMsZUFDQyxTQUNBLE1BQU03QyxRQUFRLElBQ2QsUUFBUSxNQUFNQyxPQUFPRixPQUFPLEdBQUU7RUFHcEM7QUFFQSxTQUNFLDRDQUFDLHlCQUNDLGVBQWU4QyxPQUFPSSxjQUN0QixtQkFBbUJoQyxTQUFTWSx1QkFDNUIsZ0JBQWdCVixvQkFDaEIsVUFBVSxNQUFNO0FBQ2RsQixXQUNFLGVBQWVzQyxlQUFNQyxLQUFLSyxPQUFPSSxZQUFZLENBQUMsMEJBQ2hEO0VBQ0YsR0FBRTtBQUdSOzs7O0FBekpBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBOzs7IiwKICAibmFtZXMiOiBbIkFkZERpckVycm9yIiwgInQwIiwgIiQiLCAiX2MiLCAibWVzc2FnZSIsICJhcmdzIiwgIm9uRG9uZSIsICJ0MSIsICJ0MiIsICJ0aW1lciIsICJzZXRUaW1lb3V0IiwgImNsZWFyVGltZW91dCIsICJ1c2VFZmZlY3QiLCAidDMiLCAiZmlndXJlcyIsICJwb2ludGVyIiwgInQ0IiwgInQ1IiwgImNhbGwiLCAiY29udGV4dCIsICJkaXJlY3RvcnlQYXRoIiwgInRyaW0iLCAiYXBwU3RhdGUiLCAiZ2V0QXBwU3RhdGUiLCAiaGFuZGxlQWRkRGlyZWN0b3J5IiwgInBhdGgiLCAicmVtZW1iZXIiLCAiZGVzdGluYXRpb24iLCAicGVybWlzc2lvblVwZGF0ZSIsICJ0eXBlIiwgImRpcmVjdG9yaWVzIiwgImxhdGVzdEFwcFN0YXRlIiwgInVwZGF0ZWRDb250ZXh0IiwgImFwcGx5UGVybWlzc2lvblVwZGF0ZSIsICJ0b29sUGVybWlzc2lvbkNvbnRleHQiLCAic2V0QXBwU3RhdGUiLCAicHJldiIsICJjdXJyZW50RGlycyIsICJnZXRBZGRpdGlvbmFsRGlyZWN0b3JpZXNGb3JDbGF1ZGVNZCIsICJpbmNsdWRlcyIsICJzZXRBZGRpdGlvbmFsRGlyZWN0b3JpZXNGb3JDbGF1ZGVNZCIsICJTYW5kYm94TWFuYWdlciIsICJyZWZyZXNoQ29uZmlnIiwgInBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlIiwgImNoYWxrIiwgImJvbGQiLCAiZXJyb3IiLCAiRXJyb3IiLCAibWVzc2FnZVdpdGhIaW50IiwgImRpbSIsICJyZXN1bHQiLCAidmFsaWRhdGVEaXJlY3RvcnlGb3JXb3Jrc3BhY2UiLCAicmVzdWx0VHlwZSIsICJhZGREaXJIZWxwTWVzc2FnZSIsICJhYnNvbHV0ZVBhdGgiXQp9Cg==
