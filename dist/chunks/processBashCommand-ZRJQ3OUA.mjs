#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  BashTool,
  PowerShellTool_exports,
  ShellProgressMessage,
  UserBashInputMessage,
  createSyntheticUserCaveatMessage,
  createUserInterruptionMessage,
  createUserMessage,
  escapeXml,
  init_BashTool,
  init_PowerShellTool,
  init_ShellProgressMessage,
  init_UserBashInputMessage,
  init_messages2 as init_messages,
  init_shellToolUtils,
  init_toolResultStorage,
  init_xml,
  isPowerShellToolEnabled,
  prepareUserContent,
  processToolResultBlock
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedBox_default,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-IVRGECFY.mjs";
import {
  Fragment,
  createElement,
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getInitialSettings,
  init_settings2 as init_settings
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
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
import "./chunk-ZAYB3WZV.mjs";
import {
  ShellError,
  errorMessage,
  init_errors
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/processUserInput/processBashCommand.tsx
init_react();
import { randomUUID } from "crypto";

// src/components/BashModeProgress.tsx
init_react_compiler_runtime();
init_react();
init_ink();
init_BashTool();
init_UserBashInputMessage();
init_ShellProgressMessage();
function BashModeProgress(t0) {
  const $ = c(8);
  const {
    input,
    progress,
    verbose
  } = t0;
  const t1 = `<bash-input>${input}</bash-input>`;
  let t2;
  if ($[0] !== t1) {
    t2 = /* @__PURE__ */ react_default.createElement(UserBashInputMessage, { addMargin: false, param: {
      text: t1,
      type: "text"
    } });
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== progress || $[3] !== verbose) {
    t3 = progress ? /* @__PURE__ */ react_default.createElement(ShellProgressMessage, { fullOutput: progress.fullOutput, output: progress.output, elapsedTimeSeconds: progress.elapsedTimeSeconds, totalLines: progress.totalLines, verbose }) : BashTool.renderToolUseProgressMessage?.([], {
      verbose,
      tools: [],
      terminalSize: void 0
    });
    $[2] = progress;
    $[3] = verbose;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t2 || $[6] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, t2, t3);
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
}

// src/utils/processUserInput/processBashCommand.tsx
init_BashTool();
init_analytics();
init_errors();
init_messages();

// src/utils/shell/resolveDefaultShell.ts
init_settings();
function resolveDefaultShell() {
  return getInitialSettings().defaultShell ?? "bash";
}

// src/utils/processUserInput/processBashCommand.tsx
init_shellToolUtils();
init_toolResultStorage();
init_xml();
async function processBashCommand(inputString, precedingInputBlocks, attachmentMessages, context, setToolJSX) {
  const usePowerShell = isPowerShellToolEnabled() && resolveDefaultShell() === "powershell";
  logEvent("tengu_input_bash", {
    powershell: usePowerShell
  });
  const userMessage = createUserMessage({
    content: prepareUserContent({
      inputString: `<bash-input>${inputString}</bash-input>`,
      precedingInputBlocks
    })
  });
  let jsx;
  setToolJSX({
    jsx: /* @__PURE__ */ createElement(BashModeProgress, { input: inputString, progress: null, verbose: context.options.verbose }),
    shouldHidePromptInput: false
  });
  try {
    const bashModeContext = {
      ...context,
      // TODO: Clean up this hack
      setToolJSX: (_) => {
        jsx = _?.jsx;
      }
    };
    const onProgress = (progress) => {
      setToolJSX({
        jsx: /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(BashModeProgress, { input: inputString, progress: progress.data, verbose: context.options.verbose }), jsx),
        shouldHidePromptInput: false,
        showSpinner: false
      });
    };
    let PowerShellTool = null;
    if (usePowerShell) {
      PowerShellTool = (init_PowerShellTool(), __toCommonJS(PowerShellTool_exports)).PowerShellTool;
    }
    const shellTool = PowerShellTool ?? BashTool;
    const response = PowerShellTool ? await PowerShellTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, void 0, void 0, onProgress) : await BashTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, void 0, void 0, onProgress);
    const data = response.data;
    if (!data) {
      throw new Error("No result received from shell command");
    }
    const stderr = data.stderr;
    const mapped = await processToolResultBlock(shellTool, {
      ...data,
      stderr: ""
    }, randomUUID());
    const stdout = typeof mapped.content === "string" ? mapped.content : escapeXml(data.stdout);
    return {
      messages: [createSyntheticUserCaveatMessage(), userMessage, ...attachmentMessages, createUserMessage({
        content: `<bash-stdout>${stdout}</bash-stdout><bash-stderr>${escapeXml(stderr)}</bash-stderr>`
      })],
      shouldQuery: false
    };
  } catch (e) {
    if (e instanceof ShellError) {
      if (e.interrupted) {
        return {
          messages: [createSyntheticUserCaveatMessage(), userMessage, createUserInterruptionMessage({
            toolUse: false
          }), ...attachmentMessages],
          shouldQuery: false
        };
      }
      return {
        messages: [createSyntheticUserCaveatMessage(), userMessage, ...attachmentMessages, createUserMessage({
          content: `<bash-stdout>${escapeXml(e.stdout)}</bash-stdout><bash-stderr>${escapeXml(e.stderr)}</bash-stderr>`
        })],
        shouldQuery: false
      };
    }
    return {
      messages: [createSyntheticUserCaveatMessage(), userMessage, ...attachmentMessages, createUserMessage({
        content: `<bash-stderr>Command failed: ${escapeXml(errorMessage(e))}</bash-stderr>`
      })],
      shouldQuery: false
    };
  } finally {
    setToolJSX(null);
  }
}
export {
  processBashCommand
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3Byb2Nlc3NVc2VySW5wdXQvcHJvY2Vzc0Jhc2hDb21tYW5kLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9CYXNoTW9kZVByb2dyZXNzLnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvc2hlbGwvcmVzb2x2ZURlZmF1bHRTaGVsbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBDb250ZW50QmxvY2tQYXJhbSB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhc2hNb2RlUHJvZ3Jlc3MgfSBmcm9tICdzcmMvY29tcG9uZW50cy9CYXNoTW9kZVByb2dyZXNzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTZXRUb29sSlNYRm4gfSBmcm9tICdzcmMvVG9vbC5qcydcbmltcG9ydCB7IEJhc2hUb29sIH0gZnJvbSAnc3JjL3Rvb2xzL0Jhc2hUb29sL0Jhc2hUb29sLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBBdHRhY2htZW50TWVzc2FnZSxcbiAgU3lzdGVtTWVzc2FnZSxcbiAgVXNlck1lc3NhZ2UsXG59IGZyb20gJ3NyYy90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHR5cGUgeyBTaGVsbFByb2dyZXNzIH0gZnJvbSAnc3JjL3R5cGVzL3Rvb2xzLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UsIFNoZWxsRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQge1xuICBjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSxcbiAgY3JlYXRlVXNlckludGVycnVwdGlvbk1lc3NhZ2UsXG4gIGNyZWF0ZVVzZXJNZXNzYWdlLFxuICBwcmVwYXJlVXNlckNvbnRlbnQsXG59IGZyb20gJy4uL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgcmVzb2x2ZURlZmF1bHRTaGVsbCB9IGZyb20gJy4uL3NoZWxsL3Jlc29sdmVEZWZhdWx0U2hlbGwuanMnXG5pbXBvcnQgeyBpc1Bvd2VyU2hlbGxUb29sRW5hYmxlZCB9IGZyb20gJy4uL3NoZWxsL3NoZWxsVG9vbFV0aWxzLmpzJ1xuaW1wb3J0IHsgcHJvY2Vzc1Rvb2xSZXN1bHRCbG9jayB9IGZyb20gJy4uL3Rvb2xSZXN1bHRTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgZXNjYXBlWG1sIH0gZnJvbSAnLi4veG1sLmpzJ1xuaW1wb3J0IHR5cGUgeyBQcm9jZXNzVXNlcklucHV0Q29udGV4dCB9IGZyb20gJy4vcHJvY2Vzc1VzZXJJbnB1dC5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NCYXNoQ29tbWFuZChcbiAgaW5wdXRTdHJpbmc6IHN0cmluZyxcbiAgcHJlY2VkaW5nSW5wdXRCbG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10sXG4gIGF0dGFjaG1lbnRNZXNzYWdlczogQXR0YWNobWVudE1lc3NhZ2VbXSxcbiAgY29udGV4dDogUHJvY2Vzc1VzZXJJbnB1dENvbnRleHQsXG4gIHNldFRvb2xKU1g6IFNldFRvb2xKU1hGbixcbik6IFByb21pc2U8e1xuICBtZXNzYWdlczogKFVzZXJNZXNzYWdlIHwgQXR0YWNobWVudE1lc3NhZ2UgfCBTeXN0ZW1NZXNzYWdlKVtdXG4gIHNob3VsZFF1ZXJ5OiBib29sZWFuXG59PiB7XG4gIC8vIFNoZWxsIHJvdXRpbmcgKGRvY3MvZGVzaWduL3BzLXNoZWxsLXNlbGVjdGlvbi5tZCDCpzUuMik6IGNvbnN1bHRcbiAgLy8gZGVmYXVsdFNoZWxsLCBmYWxsIGJhY2sgdG8gYmFzaC4gaXNQb3dlclNoZWxsVG9vbEVuYWJsZWQoKSBhcHBsaWVzIHRoZVxuICAvLyBzYW1lIHBsYXRmb3JtICsgZW52LXZhciBnYXRlIGFzIHRvb2xzLnRzIHNvIGlucHV0LWJveCByb3V0aW5nIG1hdGNoZXNcbiAgLy8gdG9vbC1saXN0IHZpc2liaWxpdHkuIENvbXB1dGVkIHVwIGZyb250IHNvIHRlbGVtZXRyeSByZWNvcmRzIHRoZVxuICAvLyBhY3R1YWwgc2hlbGwsIG5vdCB0aGUgcmF3IHNldHRpbmcuXG4gIGNvbnN0IHVzZVBvd2VyU2hlbGwgPVxuICAgIGlzUG93ZXJTaGVsbFRvb2xFbmFibGVkKCkgJiYgcmVzb2x2ZURlZmF1bHRTaGVsbCgpID09PSAncG93ZXJzaGVsbCdcblxuICBsb2dFdmVudCgndGVuZ3VfaW5wdXRfYmFzaCcsIHsgcG93ZXJzaGVsbDogdXNlUG93ZXJTaGVsbCB9KVxuXG4gIGNvbnN0IHVzZXJNZXNzYWdlID0gY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgIGNvbnRlbnQ6IHByZXBhcmVVc2VyQ29udGVudCh7XG4gICAgICBpbnB1dFN0cmluZzogYDxiYXNoLWlucHV0PiR7aW5wdXRTdHJpbmd9PC9iYXNoLWlucHV0PmAsXG4gICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICB9KSxcbiAgfSlcblxuICAvLyBjdHJsK2IgdG8gYmFja2dyb3VuZCBpbmRpY2F0b3JcbiAgbGV0IGpzeDogUmVhY3QuUmVhY3ROb2RlXG5cbiAgLy8gSnVzdCBzaG93IGluaXRpYWwgVUlcbiAgc2V0VG9vbEpTWCh7XG4gICAganN4OiAoXG4gICAgICA8QmFzaE1vZGVQcm9ncmVzc1xuICAgICAgICBpbnB1dD17aW5wdXRTdHJpbmd9XG4gICAgICAgIHByb2dyZXNzPXtudWxsfVxuICAgICAgICB2ZXJib3NlPXtjb250ZXh0Lm9wdGlvbnMudmVyYm9zZX1cbiAgICAgIC8+XG4gICAgKSxcbiAgICBzaG91bGRIaWRlUHJvbXB0SW5wdXQ6IGZhbHNlLFxuICB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYmFzaE1vZGVDb250ZXh0OiBQcm9jZXNzVXNlcklucHV0Q29udGV4dCA9IHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICAvLyBUT0RPOiBDbGVhbiB1cCB0aGlzIGhhY2tcbiAgICAgIHNldFRvb2xKU1g6IF8gPT4ge1xuICAgICAgICBqc3ggPSBfPy5qc3hcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gUHJvZ3Jlc3MgVUkg4oCUIHNoYXJlZCBhY3Jvc3MgYm90aCBzaGVsbCBiYWNrZW5kcyAoYm90aCBlbWl0IFNoZWxsUHJvZ3Jlc3MpXG4gICAgY29uc3Qgb25Qcm9ncmVzcyA9IChwcm9ncmVzczogeyBkYXRhOiBTaGVsbFByb2dyZXNzIH0pID0+IHtcbiAgICAgIHNldFRvb2xKU1goe1xuICAgICAgICBqc3g6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJhc2hNb2RlUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgaW5wdXQ9e2lucHV0U3RyaW5nIX1cbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzLmRhdGF9XG4gICAgICAgICAgICAgIHZlcmJvc2U9e2NvbnRleHQub3B0aW9ucy52ZXJib3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtqc3h9XG4gICAgICAgICAgPC8+XG4gICAgICAgICksXG4gICAgICAgIHNob3VsZEhpZGVQcm9tcHRJbnB1dDogZmFsc2UsXG4gICAgICAgIHNob3dTcGlubmVyOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gVXNlci1pbml0aWF0ZWQgYCFgIGNvbW1hbmRzIHJ1biBvdXRzaWRlIHNhbmRib3guIEJvdGggc2hlbGwgdG9vbHMgaG9ub3JcbiAgICAvLyBkYW5nZXJvdXNseURpc2FibGVTYW5kYm94IChjaGVja2VkIGFnYWluc3QgYXJlVW5zYW5kYm94ZWRDb21tYW5kc0FsbG93ZWQoKVxuICAgIC8vIGluIHNob3VsZFVzZVNhbmRib3gudHMpLiBQUyBzYW5kYm94IGlzIExpbnV4L21hY09TL1dTTDIgb25seSDigJQgb24gV2luZG93c1xuICAgIC8vIG5hdGl2ZSwgc2hvdWxkVXNlU2FuZGJveCgpIHJldHVybnMgZmFsc2UgcmVnYXJkbGVzcyAodW5zdXBwb3J0ZWQgcGxhdGZvcm0pLlxuICAgIC8vIExhenktcmVxdWlyZSBQb3dlclNoZWxsVG9vbCBzbyBpdHMgfjMwMEtCIGNodW5rIG9ubHkgbG9hZHMgd2hlbiB0aGVcbiAgICAvLyB1c2VyIGhhcyBhY3R1YWxseSBzZWxlY3RlZCB0aGUgcG93ZXJzaGVsbCBkZWZhdWx0IHNoZWxsLlxuICAgIHR5cGUgUFNNb2QgPSB0eXBlb2YgaW1wb3J0KCdzcmMvdG9vbHMvUG93ZXJTaGVsbFRvb2wvUG93ZXJTaGVsbFRvb2wuanMnKVxuICAgIGxldCBQb3dlclNoZWxsVG9vbDogUFNNb2RbJ1Bvd2VyU2hlbGxUb29sJ10gfCBudWxsID0gbnVsbFxuICAgIGlmICh1c2VQb3dlclNoZWxsKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICBQb3dlclNoZWxsVG9vbCA9IChcbiAgICAgICAgcmVxdWlyZSgnc3JjL3Rvb2xzL1Bvd2VyU2hlbGxUb29sL1Bvd2VyU2hlbGxUb29sLmpzJykgYXMgUFNNb2RcbiAgICAgICkuUG93ZXJTaGVsbFRvb2xcbiAgICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgIH1cbiAgICBjb25zdCBzaGVsbFRvb2wgPSBQb3dlclNoZWxsVG9vbCA/PyBCYXNoVG9vbFxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBQb3dlclNoZWxsVG9vbFxuICAgICAgPyBhd2FpdCBQb3dlclNoZWxsVG9vbC5jYWxsKFxuICAgICAgICAgIHsgY29tbWFuZDogaW5wdXRTdHJpbmcsIGRhbmdlcm91c2x5RGlzYWJsZVNhbmRib3g6IHRydWUgfSxcbiAgICAgICAgICBiYXNoTW9kZUNvbnRleHQsXG4gICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICApXG4gICAgICA6IGF3YWl0IEJhc2hUb29sLmNhbGwoXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29tbWFuZDogaW5wdXRTdHJpbmcsXG4gICAgICAgICAgICBkYW5nZXJvdXNseURpc2FibGVTYW5kYm94OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFzaE1vZGVDb250ZXh0LFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgKVxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVzdWx0IHJlY2VpdmVkIGZyb20gc2hlbGwgY29tbWFuZCcpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RkZXJyID0gZGF0YS5zdGRlcnJcbiAgICAvLyBSZXVzZSB0aGUgc2FtZSBmb3JtYXR0aW5nIHBpcGVsaW5lIGFzIGlubGluZSAhYGNtZGAgYmFzaCAocHJvbXB0U2hlbGxFeGVjdXRpb24pXG4gICAgLy8gYW5kIG1vZGVsLWluaXRpYXRlZCBCYXNoLiBXaGVuIEJhc2hUb29sLmNhbGwoKSBwZXJzaXN0cyBsYXJnZSBvdXRwdXQgdG8gZGlzayxcbiAgICAvLyBkYXRhLnBlcnNpc3RlZE91dHB1dFBhdGggaXMgc2V0IGFuZCB0aGUgZm9ybWF0dGVyIHdyYXBzIGluIDxwZXJzaXN0ZWQtb3V0cHV0Pi5cbiAgICAvLyBQYXNzIHN0ZGVycjonJyB0byBrZWVwIGl0IHNlcGFyYXRlIGZvciB0aGUgPGJhc2gtc3RkZXJyPiBVSSB0YWcuXG4gICAgY29uc3QgbWFwcGVkID0gYXdhaXQgcHJvY2Vzc1Rvb2xSZXN1bHRCbG9jayhcbiAgICAgIHNoZWxsVG9vbCxcbiAgICAgIHsgLi4uZGF0YSwgc3RkZXJyOiAnJyB9LFxuICAgICAgcmFuZG9tVVVJRCgpLFxuICAgIClcbiAgICAvLyBtYXBwZWQuY29udGVudCBtYXkgY29udGFpbiBvdXIgb3duIDxwZXJzaXN0ZWQtb3V0cHV0PiB3cmFwcGVyICh0cnVzdGVkXG4gICAgLy8gWE1MIGZyb20gYnVpbGRMYXJnZVRvb2xSZXN1bHRNZXNzYWdlKS4gRXNjYXBpbmcgaXQgd291bGQgdHVybiBzdHJ1Y3R1cmFsXG4gICAgLy8gdGFncyBpbnRvICZsdDtwZXJzaXN0ZWQtb3V0cHV0Jmd0OywgYnJlYWtpbmcgdGhlIG1vZGVsJ3MgcGFyc2UgYW5kXG4gICAgLy8gVXNlckJhc2hPdXRwdXRNZXNzYWdlJ3MgZXh0cmFjdFRhZy4gRXNjYXBlIHRoZSByYXcgZmFsbGJhY2sgb25seS5cbiAgICBjb25zdCBzdGRvdXQgPVxuICAgICAgdHlwZW9mIG1hcHBlZC5jb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG1hcHBlZC5jb250ZW50XG4gICAgICAgIDogZXNjYXBlWG1sKGRhdGEuc3Rkb3V0KVxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICBjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSgpLFxuICAgICAgICB1c2VyTWVzc2FnZSxcbiAgICAgICAgLi4uYXR0YWNobWVudE1lc3NhZ2VzLFxuICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogYDxiYXNoLXN0ZG91dD4ke3N0ZG91dH08L2Jhc2gtc3Rkb3V0PjxiYXNoLXN0ZGVycj4ke2VzY2FwZVhtbChzdGRlcnIpfTwvYmFzaC1zdGRlcnI+YCxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgc2hvdWxkUXVlcnk6IGZhbHNlLFxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgU2hlbGxFcnJvcikge1xuICAgICAgaWYgKGUuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY3JlYXRlU3ludGhldGljVXNlckNhdmVhdE1lc3NhZ2UoKSxcbiAgICAgICAgICAgIHVzZXJNZXNzYWdlLFxuICAgICAgICAgICAgY3JlYXRlVXNlckludGVycnVwdGlvbk1lc3NhZ2UoeyB0b29sVXNlOiBmYWxzZSB9KSxcbiAgICAgICAgICAgIC4uLmF0dGFjaG1lbnRNZXNzYWdlcyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSgpLFxuICAgICAgICAgIHVzZXJNZXNzYWdlLFxuICAgICAgICAgIC4uLmF0dGFjaG1lbnRNZXNzYWdlcyxcbiAgICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgICBjb250ZW50OiBgPGJhc2gtc3Rkb3V0PiR7ZXNjYXBlWG1sKGUuc3Rkb3V0KX08L2Jhc2gtc3Rkb3V0PjxiYXNoLXN0ZGVycj4ke2VzY2FwZVhtbChlLnN0ZGVycil9PC9iYXNoLXN0ZGVycj5gLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICBjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSgpLFxuICAgICAgICB1c2VyTWVzc2FnZSxcbiAgICAgICAgLi4uYXR0YWNobWVudE1lc3NhZ2VzLFxuICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogYDxiYXNoLXN0ZGVycj5Db21tYW5kIGZhaWxlZDogJHtlc2NhcGVYbWwoZXJyb3JNZXNzYWdlKGUpKX08L2Jhc2gtc3RkZXJyPmAsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgc2V0VG9vbEpTWChudWxsKVxuICB9XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgQmFzaFRvb2wgfSBmcm9tICcuLi90b29scy9CYXNoVG9vbC9CYXNoVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgU2hlbGxQcm9ncmVzcyB9IGZyb20gJy4uL3R5cGVzL3Rvb2xzLmpzJ1xuaW1wb3J0IHsgVXNlckJhc2hJbnB1dE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzL1VzZXJCYXNoSW5wdXRNZXNzYWdlLmpzJ1xuaW1wb3J0IHsgU2hlbGxQcm9ncmVzc01lc3NhZ2UgfSBmcm9tICcuL3NoZWxsL1NoZWxsUHJvZ3Jlc3NNZXNzYWdlLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBpbnB1dDogc3RyaW5nXG4gIHByb2dyZXNzOiBTaGVsbFByb2dyZXNzIHwgbnVsbFxuICB2ZXJib3NlOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCYXNoTW9kZVByb2dyZXNzKHtcbiAgaW5wdXQsXG4gIHByb2dyZXNzLFxuICB2ZXJib3NlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICA8VXNlckJhc2hJbnB1dE1lc3NhZ2VcbiAgICAgICAgYWRkTWFyZ2luPXtmYWxzZX1cbiAgICAgICAgcGFyYW09e3sgdGV4dDogYDxiYXNoLWlucHV0PiR7aW5wdXR9PC9iYXNoLWlucHV0PmAsIHR5cGU6ICd0ZXh0JyB9fVxuICAgICAgLz5cbiAgICAgIHtwcm9ncmVzcyA/IChcbiAgICAgICAgPFNoZWxsUHJvZ3Jlc3NNZXNzYWdlXG4gICAgICAgICAgZnVsbE91dHB1dD17cHJvZ3Jlc3MuZnVsbE91dHB1dH1cbiAgICAgICAgICBvdXRwdXQ9e3Byb2dyZXNzLm91dHB1dH1cbiAgICAgICAgICBlbGFwc2VkVGltZVNlY29uZHM9e3Byb2dyZXNzLmVsYXBzZWRUaW1lU2Vjb25kc31cbiAgICAgICAgICB0b3RhbExpbmVzPXtwcm9ncmVzcy50b3RhbExpbmVzfVxuICAgICAgICAgIHZlcmJvc2U9e3ZlcmJvc2V9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICBCYXNoVG9vbC5yZW5kZXJUb29sVXNlUHJvZ3Jlc3NNZXNzYWdlPy4oW10sIHtcbiAgICAgICAgICB2ZXJib3NlLFxuICAgICAgICAgIHRvb2xzOiBbXSxcbiAgICAgICAgICB0ZXJtaW5hbFNpemU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSlcbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncy5qcydcblxuLyoqXG4gKiBSZXNvbHZlIHRoZSBkZWZhdWx0IHNoZWxsIGZvciBpbnB1dC1ib3ggYCFgIGNvbW1hbmRzLlxuICpcbiAqIFJlc29sdXRpb24gb3JkZXIgKGRvY3MvZGVzaWduL3BzLXNoZWxsLXNlbGVjdGlvbi5tZCBcdTAwQTc0LjIpOlxuICogICBzZXR0aW5ncy5kZWZhdWx0U2hlbGwgXHUyMTkyICdiYXNoJ1xuICpcbiAqIFBsYXRmb3JtIGRlZmF1bHQgaXMgJ2Jhc2gnIGV2ZXJ5d2hlcmUgXHUyMDE0IHdlIGRvIE5PVCBhdXRvLWZsaXAgV2luZG93cyB0b1xuICogUG93ZXJTaGVsbCAod291bGQgYnJlYWsgZXhpc3RpbmcgV2luZG93cyB1c2VycyB3aXRoIGJhc2ggaG9va3MpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZURlZmF1bHRTaGVsbCgpOiAnYmFzaCcgfCAncG93ZXJzaGVsbCcge1xuICByZXR1cm4gZ2V0SW5pdGlhbFNldHRpbmdzKCkuZGVmYXVsdFNoZWxsID8/ICdiYXNoJ1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVVJLEVBQUVMLE1BQU0sQ0FBQyw4QkFBOEJDLFVBQVVJLEVBQUVULE1BQU0sQ0FBQztRQUMvRixDQUFDLENBQUM7UUFFSlEsYUFBYTtNQUNmO0lBQ0Y7QUFDQSxXQUFPO01BQ0xGLFVBQVUsQ0FDUkMsaUNBQWlDLEdBQ2pDL0IsYUFDQSxHQUFHUixvQkFDSFMsa0JBQWtCO1FBQ2hCQyxTQUFTLGdDQUFnQzJCLFVBQVVTLGFBQWFMLENBQUMsQ0FBQyxDQUFDO01BQ3JFLENBQUMsQ0FBQztNQUVKRCxhQUFhO0lBQ2Y7RUFDRixVQUFDO0FBQ0N0QyxlQUFXLElBQUk7RUFDakI7QUFDRjsiLAogICJuYW1lcyI6IFsicmFuZG9tVVVJRCIsICJCYXNoTW9kZVByb2dyZXNzIiwgInQwIiwgIiQiLCAiX2MiLCAiaW5wdXQiLCAicHJvZ3Jlc3MiLCAidmVyYm9zZSIsICJ0MSIsICJ0MiIsICJ0ZXh0IiwgInR5cGUiLCAidDMiLCAiZnVsbE91dHB1dCIsICJvdXRwdXQiLCAiZWxhcHNlZFRpbWVTZWNvbmRzIiwgInRvdGFsTGluZXMiLCAiQmFzaFRvb2wiLCAicmVuZGVyVG9vbFVzZVByb2dyZXNzTWVzc2FnZSIsICJ0b29scyIsICJ0ZXJtaW5hbFNpemUiLCAidW5kZWZpbmVkIiwgInQ0IiwgInByb2Nlc3NCYXNoQ29tbWFuZCIsICJpbnB1dFN0cmluZyIsICJwcmVjZWRpbmdJbnB1dEJsb2NrcyIsICJhdHRhY2htZW50TWVzc2FnZXMiLCAiY29udGV4dCIsICJzZXRUb29sSlNYIiwgInVzZVBvd2VyU2hlbGwiLCAiaXNQb3dlclNoZWxsVG9vbEVuYWJsZWQiLCAicmVzb2x2ZURlZmF1bHRTaGVsbCIsICJsb2dFdmVudCIsICJwb3dlcnNoZWxsIiwgInVzZXJNZXNzYWdlIiwgImNyZWF0ZVVzZXJNZXNzYWdlIiwgImNvbnRlbnQiLCAicHJlcGFyZVVzZXJDb250ZW50IiwgImpzeCIsICJvcHRpb25zIiwgInZlcmJvc2UiLCAic2hvdWxkSGlkZVByb21wdElucHV0IiwgImJhc2hNb2RlQ29udGV4dCIsICJfIiwgIm9uUHJvZ3Jlc3MiLCAicHJvZ3Jlc3MiLCAiZGF0YSIsICJzaG93U3Bpbm5lciIsICJQb3dlclNoZWxsVG9vbCIsICJyZXF1aXJlIiwgInNoZWxsVG9vbCIsICJCYXNoVG9vbCIsICJyZXNwb25zZSIsICJjYWxsIiwgImNvbW1hbmQiLCAiZGFuZ2Vyb3VzbHlEaXNhYmxlU2FuZGJveCIsICJ1bmRlZmluZWQiLCAiRXJyb3IiLCAic3RkZXJyIiwgIm1hcHBlZCIsICJwcm9jZXNzVG9vbFJlc3VsdEJsb2NrIiwgInJhbmRvbVVVSUQiLCAic3Rkb3V0IiwgImVzY2FwZVhtbCIsICJtZXNzYWdlcyIsICJjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSIsICJzaG91bGRRdWVyeSIsICJlIiwgIlNoZWxsRXJyb3IiLCAiaW50ZXJydXB0ZWQiLCAiY3JlYXRlVXNlckludGVycnVwdGlvbk1lc3NhZ2UiLCAidG9vbFVzZSIsICJlcnJvck1lc3NhZ2UiXQp9Cg==
