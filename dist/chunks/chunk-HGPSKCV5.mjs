#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  getFsImplementation,
  init_fsOperations
} from "./chunk-L2VTD674.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/platform.ts
import { readdir, readFile } from "fs/promises";
import { release as osRelease } from "os";
async function detectVcs(dir) {
  const detected = /* @__PURE__ */ new Set();
  if (process.env.P4PORT) {
    detected.add("perforce");
  }
  try {
    const targetDir = dir ?? getFsImplementation().cwd();
    const entries = new Set(await readdir(targetDir));
    for (const [marker, vcs] of VCS_MARKERS) {
      if (entries.has(marker)) {
        detected.add(vcs);
      }
    }
  } catch {
  }
  return [...detected];
}
var SUPPORTED_PLATFORMS, getPlatform, getWslVersion, getLinuxDistroInfo, VCS_MARKERS;
var init_platform = __esm({
  "src/utils/platform.ts"() {
    init_memoize();
    init_fsOperations();
    init_log();
    SUPPORTED_PLATFORMS = ["macos", "wsl"];
    getPlatform = memoize_default(() => {
      try {
        if (process.platform === "darwin") {
          return "macos";
        }
        if (process.platform === "win32") {
          return "windows";
        }
        if (process.platform === "linux") {
          try {
            const procVersion = getFsImplementation().readFileSync(
              "/proc/version",
              { encoding: "utf8" }
            );
            if (procVersion.toLowerCase().includes("microsoft") || procVersion.toLowerCase().includes("wsl")) {
              return "wsl";
            }
          } catch (error) {
            logError(error);
          }
          return "linux";
        }
        return "unknown";
      } catch (error) {
        logError(error);
        return "unknown";
      }
    });
    getWslVersion = memoize_default(() => {
      if (process.platform !== "linux") {
        return void 0;
      }
      try {
        const procVersion = getFsImplementation().readFileSync("/proc/version", {
          encoding: "utf8"
        });
        const wslVersionMatch = procVersion.match(/WSL(\d+)/i);
        if (wslVersionMatch && wslVersionMatch[1]) {
          return wslVersionMatch[1];
        }
        if (procVersion.toLowerCase().includes("microsoft")) {
          return "1";
        }
        return void 0;
      } catch (error) {
        logError(error);
        return void 0;
      }
    });
    getLinuxDistroInfo = memoize_default(
      async () => {
        if (process.platform !== "linux") {
          return void 0;
        }
        const result = {
          linuxKernel: osRelease()
        };
        try {
          const content = await readFile("/etc/os-release", "utf8");
          for (const line of content.split("\n")) {
            const match = line.match(/^(ID|VERSION_ID)=(.*)$/);
            if (match && match[1] && match[2]) {
              const value = match[2].replace(/^"|"$/g, "");
              if (match[1] === "ID") {
                result.linuxDistroId = value;
              } else {
                result.linuxDistroVersion = value;
              }
            }
          }
        } catch {
        }
        return result;
      }
    );
    VCS_MARKERS = [
      [".git", "git"],
      [".hg", "mercurial"],
      [".svn", "svn"],
      [".p4config", "perforce"],
      ["$tf", "tfs"],
      [".tfvc", "tfs"],
      [".jj", "jujutsu"],
      [".sl", "sapling"]
    ];
  }
});

export {
  SUPPORTED_PLATFORMS,
  getPlatform,
  getWslVersion,
  getLinuxDistroInfo,
  detectVcs,
  init_platform
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3BsYXRmb3JtLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyByZWFkZGlyLCByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgeyByZWxlYXNlIGFzIG9zUmVsZWFzZSB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vZnNPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcblxuZXhwb3J0IHR5cGUgUGxhdGZvcm0gPSAnbWFjb3MnIHwgJ3dpbmRvd3MnIHwgJ3dzbCcgfCAnbGludXgnIHwgJ3Vua25vd24nXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JURURfUExBVEZPUk1TOiBQbGF0Zm9ybVtdID0gWydtYWNvcycsICd3c2wnXVxuXG5leHBvcnQgY29uc3QgZ2V0UGxhdGZvcm0gPSBtZW1vaXplKCgpOiBQbGF0Zm9ybSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgICByZXR1cm4gJ21hY29zJ1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgICByZXR1cm4gJ3dpbmRvd3MnXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpIHtcbiAgICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgaW4gV1NMIChXaW5kb3dzIFN1YnN5c3RlbSBmb3IgTGludXgpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9jVmVyc2lvbiA9IGdldEZzSW1wbGVtZW50YXRpb24oKS5yZWFkRmlsZVN5bmMoXG4gICAgICAgICAgJy9wcm9jL3ZlcnNpb24nLFxuICAgICAgICAgIHsgZW5jb2Rpbmc6ICd1dGY4JyB9LFxuICAgICAgICApXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9jVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtaWNyb3NvZnQnKSB8fFxuICAgICAgICAgIHByb2NWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3dzbCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAnd3NsJ1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBFcnJvciByZWFkaW5nIC9wcm9jL3ZlcnNpb24sIGFzc3VtZSByZWd1bGFyIExpbnV4XG4gICAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgfVxuXG4gICAgICAvLyBSZWd1bGFyIExpbnV4XG4gICAgICByZXR1cm4gJ2xpbnV4J1xuICAgIH1cblxuICAgIC8vIFVua25vd24gcGxhdGZvcm1cbiAgICByZXR1cm4gJ3Vua25vd24nXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuICd1bmtub3duJ1xuICB9XG59KVxuXG5leHBvcnQgY29uc3QgZ2V0V3NsVmVyc2lvbiA9IG1lbW9pemUoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gIC8vIE9ubHkgY2hlY2sgZm9yIFdTTCBvbiBMaW51eCBzeXN0ZW1zXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnbGludXgnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvY1ZlcnNpb24gPSBnZXRGc0ltcGxlbWVudGF0aW9uKCkucmVhZEZpbGVTeW5jKCcvcHJvYy92ZXJzaW9uJywge1xuICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICB9KVxuXG4gICAgLy8gRmlyc3QgY2hlY2sgZm9yIGV4cGxpY2l0IFdTTCB2ZXJzaW9uIG1hcmtlcnMgKGUuZy4sIFwiV1NMMlwiLCBcIldTTDNcIiwgZXRjLilcbiAgICBjb25zdCB3c2xWZXJzaW9uTWF0Y2ggPSBwcm9jVmVyc2lvbi5tYXRjaCgvV1NMKFxcZCspL2kpXG4gICAgaWYgKHdzbFZlcnNpb25NYXRjaCAmJiB3c2xWZXJzaW9uTWF0Y2hbMV0pIHtcbiAgICAgIHJldHVybiB3c2xWZXJzaW9uTWF0Y2hbMV1cbiAgICB9XG5cbiAgICAvLyBJZiBubyBleHBsaWNpdCBXU0wgdmVyc2lvbiBidXQgY29udGFpbnMgTWljcm9zb2Z0LCBhc3N1bWUgV1NMMVxuICAgIC8vIFRoaXMgaGFuZGxlcyB0aGUgb3JpZ2luYWwgV1NMMSBmb3JtYXQ6IFwiNC40LjAtMTkwNDEtTWljcm9zb2Z0XCJcbiAgICBpZiAocHJvY1ZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWljcm9zb2Z0JykpIHtcbiAgICAgIHJldHVybiAnMSdcbiAgICB9XG5cbiAgICAvLyBOb3QgV1NMIG9yIHVuYWJsZSB0byBkZXRlcm1pbmUgdmVyc2lvblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn0pXG5cbmV4cG9ydCB0eXBlIExpbnV4RGlzdHJvSW5mbyA9IHtcbiAgbGludXhEaXN0cm9JZD86IHN0cmluZ1xuICBsaW51eERpc3Ryb1ZlcnNpb24/OiBzdHJpbmdcbiAgbGludXhLZXJuZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldExpbnV4RGlzdHJvSW5mbyA9IG1lbW9pemUoXG4gIGFzeW5jICgpOiBQcm9taXNlPExpbnV4RGlzdHJvSW5mbyB8IHVuZGVmaW5lZD4gPT4ge1xuICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnbGludXgnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBMaW51eERpc3Ryb0luZm8gPSB7XG4gICAgICBsaW51eEtlcm5lbDogb3NSZWxlYXNlKCksXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZSgnL2V0Yy9vcy1yZWxlYXNlJywgJ3V0ZjgnKVxuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGNvbnRlbnQuc3BsaXQoJ1xcbicpKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXihJRHxWRVJTSU9OX0lEKT0oLiopJC8pXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWF0Y2hbMl0ucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICBpZiAobWF0Y2hbMV0gPT09ICdJRCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5saW51eERpc3Ryb0lkID0gdmFsdWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmxpbnV4RGlzdHJvVmVyc2lvbiA9IHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyAvZXRjL29zLXJlbGVhc2UgbWF5IG5vdCBleGlzdCBvbiBhbGwgTGludXggc3lzdGVtc1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbilcblxuY29uc3QgVkNTX01BUktFUlM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+ID0gW1xuICBbJy5naXQnLCAnZ2l0J10sXG4gIFsnLmhnJywgJ21lcmN1cmlhbCddLFxuICBbJy5zdm4nLCAnc3ZuJ10sXG4gIFsnLnA0Y29uZmlnJywgJ3BlcmZvcmNlJ10sXG4gIFsnJHRmJywgJ3RmcyddLFxuICBbJy50ZnZjJywgJ3RmcyddLFxuICBbJy5qaicsICdqdWp1dHN1J10sXG4gIFsnLnNsJywgJ3NhcGxpbmcnXSxcbl1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRldGVjdFZjcyhkaXI/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IGRldGVjdGVkID0gbmV3IFNldDxzdHJpbmc+KClcblxuICAvLyBDaGVjayBmb3IgUGVyZm9yY2UgdmlhIGVudiB2YXJcbiAgaWYgKHByb2Nlc3MuZW52LlA0UE9SVCkge1xuICAgIGRldGVjdGVkLmFkZCgncGVyZm9yY2UnKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0YXJnZXREaXIgPSBkaXIgPz8gZ2V0RnNJbXBsZW1lbnRhdGlvbigpLmN3ZCgpXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBTZXQoYXdhaXQgcmVhZGRpcih0YXJnZXREaXIpKVxuICAgIGZvciAoY29uc3QgW21hcmtlciwgdmNzXSBvZiBWQ1NfTUFSS0VSUykge1xuICAgICAgaWYgKGVudHJpZXMuaGFzKG1hcmtlcikpIHtcbiAgICAgICAgZGV0ZWN0ZWQuYWRkKHZjcylcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIERpcmVjdG9yeSBtYXkgbm90IGJlIHJlYWRhYmxlXG4gIH1cblxuICByZXR1cm4gWy4uLmRldGVjdGVkXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFNBQVMsZ0JBQWdCO0FBRWxDLFNBQVMsV0FBVyxpQkFBaUI7QUE4SHJDLGVBQXNCLFVBQVUsS0FBaUM7QUFDL0QsUUFBTSxXQUFXLG9CQUFJLElBQVk7QUFHakMsTUFBSSxRQUFRLElBQUksUUFBUTtBQUN0QixhQUFTLElBQUksVUFBVTtBQUFBLEVBQ3pCO0FBRUEsTUFBSTtBQUNGLFVBQU0sWUFBWSxPQUFPLG9CQUFvQixFQUFFLElBQUk7QUFDbkQsVUFBTSxVQUFVLElBQUksSUFBSSxNQUFNLFFBQVEsU0FBUyxDQUFDO0FBQ2hELGVBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxhQUFhO0FBQ3ZDLFVBQUksUUFBUSxJQUFJLE1BQU0sR0FBRztBQUN2QixpQkFBUyxJQUFJLEdBQUc7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGLFFBQVE7QUFBQSxFQUVSO0FBRUEsU0FBTyxDQUFDLEdBQUcsUUFBUTtBQUNyQjtB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
