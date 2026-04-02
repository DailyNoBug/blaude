#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_memoize as init_memoize2,
  memoizeWithLRU
} from "./chunk-NT7W7YWD.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  execSync_DEPRECATED,
  init_execSyncWrapper
} from "./chunk-F5ODCUJD.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/windowsPaths.ts
import * as path from "path";
import * as pathWin32 from "path/win32";
function checkPathExists(path2) {
  try {
    execSync_DEPRECATED(`dir "${path2}"`, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}
function findExecutable(executable) {
  if (executable === "git") {
    const defaultLocations = [
      // check 64 bit before 32 bit
      "C:\\Program Files\\Git\\cmd\\git.exe",
      "C:\\Program Files (x86)\\Git\\cmd\\git.exe"
      // intentionally don't look for C:\Program Files\Git\mingw64\bin\git.exe
      // because that directory is the "raw" tools with no environment setup
    ];
    for (const location of defaultLocations) {
      if (checkPathExists(location)) {
        return location;
      }
    }
  }
  try {
    const result = execSync_DEPRECATED(`where.exe ${executable}`, {
      stdio: "pipe",
      encoding: "utf8"
    }).trim();
    const paths = result.split("\r\n").filter(Boolean);
    const cwd = getCwd().toLowerCase();
    for (const candidatePath of paths) {
      const normalizedPath = path.resolve(candidatePath).toLowerCase();
      const pathDir = path.dirname(normalizedPath).toLowerCase();
      if (pathDir === cwd || normalizedPath.startsWith(cwd + path.sep)) {
        logForDebugging(
          `Skipping potentially malicious executable in current directory: ${candidatePath}`
        );
        continue;
      }
      return candidatePath;
    }
    return null;
  } catch {
    return null;
  }
}
function setShellIfWindows() {
  if (process.platform === "win32") {
    const gitBashPath = findGitBashPath();
    process.env.SHELL = gitBashPath;
    logForDebugging(`Using bash path: "${gitBashPath}"`);
  }
}
var findGitBashPath, windowsPathToPosixPath, posixPathToWindowsPath;
var init_windowsPaths = __esm({
  "src/utils/windowsPaths.ts"() {
    init_memoize();
    init_cwd();
    init_debug();
    init_execSyncWrapper();
    init_memoize2();
    findGitBashPath = memoize_default(() => {
      if (process.env.CLAUDE_CODE_GIT_BASH_PATH) {
        if (checkPathExists(process.env.CLAUDE_CODE_GIT_BASH_PATH)) {
          return process.env.CLAUDE_CODE_GIT_BASH_PATH;
        }
        console.error(
          `Blaude was unable to find CLAUDE_CODE_GIT_BASH_PATH path "${process.env.CLAUDE_CODE_GIT_BASH_PATH}"`
        );
        process.exit(1);
      }
      const gitPath = findExecutable("git");
      if (gitPath) {
        const bashPath = pathWin32.join(gitPath, "..", "..", "bin", "bash.exe");
        if (checkPathExists(bashPath)) {
          return bashPath;
        }
      }
      console.error(
        "Blaude on Windows requires git-bash (https://git-scm.com/downloads/win). If installed but not in PATH, set environment variable pointing to your bash.exe, similar to: CLAUDE_CODE_GIT_BASH_PATH=C:\\Program Files\\Git\\bin\\bash.exe"
      );
      process.exit(1);
    });
    windowsPathToPosixPath = memoizeWithLRU(
      (windowsPath) => {
        if (windowsPath.startsWith("\\\\")) {
          return windowsPath.replace(/\\/g, "/");
        }
        const match = windowsPath.match(/^([A-Za-z]):[/\\]/);
        if (match) {
          const driveLetter = match[1].toLowerCase();
          return "/" + driveLetter + windowsPath.slice(2).replace(/\\/g, "/");
        }
        return windowsPath.replace(/\\/g, "/");
      },
      (p) => p,
      500
    );
    posixPathToWindowsPath = memoizeWithLRU(
      (posixPath) => {
        if (posixPath.startsWith("//")) {
          return posixPath.replace(/\//g, "\\");
        }
        const cygdriveMatch = posixPath.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
        if (cygdriveMatch) {
          const driveLetter = cygdriveMatch[1].toUpperCase();
          const rest = posixPath.slice(("/cygdrive/" + cygdriveMatch[1]).length);
          return driveLetter + ":" + (rest || "\\").replace(/\//g, "\\");
        }
        const driveMatch = posixPath.match(/^\/([A-Za-z])(\/|$)/);
        if (driveMatch) {
          const driveLetter = driveMatch[1].toUpperCase();
          const rest = posixPath.slice(2);
          return driveLetter + ":" + (rest || "\\").replace(/\//g, "\\");
        }
        return posixPath.replace(/\//g, "\\");
      },
      (p) => p,
      500
    );
  }
});

export {
  setShellIfWindows,
  findGitBashPath,
  windowsPathToPosixPath,
  posixPathToWindowsPath,
  init_windowsPaths
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3dpbmRvd3NQYXRocy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBwYXRoV2luMzIgZnJvbSAncGF0aC93aW4zMidcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4vY3dkLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGV4ZWNTeW5jX0RFUFJFQ0FURUQgfSBmcm9tICcuL2V4ZWNTeW5jV3JhcHBlci5qcydcbmltcG9ydCB7IG1lbW9pemVXaXRoTFJVIH0gZnJvbSAnLi9tZW1vaXplLmpzJ1xuXG4vKipcbiAqIENoZWNrIGlmIGEgZmlsZSBvciBkaXJlY3RvcnkgZXhpc3RzIG9uIFdpbmRvd3MgdXNpbmcgdGhlIGRpciBjb21tYW5kXG4gKiBAcGFyYW0gcGF0aCAtIFRoZSBwYXRoIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwYXRoIGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUGF0aEV4aXN0cyhwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBleGVjU3luY19ERVBSRUNBVEVEKGBkaXIgXCIke3BhdGh9XCJgLCB7IHN0ZGlvOiAncGlwZScgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEZpbmQgYW4gZXhlY3V0YWJsZSB1c2luZyB3aGVyZS5leGUgb24gV2luZG93c1xuICogQHBhcmFtIGV4ZWN1dGFibGUgLSBUaGUgbmFtZSBvZiB0aGUgZXhlY3V0YWJsZSB0byBmaW5kXG4gKiBAcmV0dXJucyBUaGUgcGF0aCB0byB0aGUgZXhlY3V0YWJsZSBvciBudWxsIGlmIG5vdCBmb3VuZFxuICovXG5mdW5jdGlvbiBmaW5kRXhlY3V0YWJsZShleGVjdXRhYmxlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgLy8gRm9yIGdpdCwgY2hlY2sgY29tbW9uIGluc3RhbGxhdGlvbiBsb2NhdGlvbnMgZmlyc3RcbiAgaWYgKGV4ZWN1dGFibGUgPT09ICdnaXQnKSB7XG4gICAgY29uc3QgZGVmYXVsdExvY2F0aW9ucyA9IFtcbiAgICAgIC8vIGNoZWNrIDY0IGJpdCBiZWZvcmUgMzIgYml0XG4gICAgICAnQzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxHaXRcXFxcY21kXFxcXGdpdC5leGUnLFxuICAgICAgJ0M6XFxcXFByb2dyYW0gRmlsZXMgKHg4NilcXFxcR2l0XFxcXGNtZFxcXFxnaXQuZXhlJyxcbiAgICAgIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgbG9vayBmb3IgQzpcXFByb2dyYW0gRmlsZXNcXEdpdFxcbWluZ3c2NFxcYmluXFxnaXQuZXhlXG4gICAgICAvLyBiZWNhdXNlIHRoYXQgZGlyZWN0b3J5IGlzIHRoZSBcInJhd1wiIHRvb2xzIHdpdGggbm8gZW52aXJvbm1lbnQgc2V0dXBcbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IGxvY2F0aW9uIG9mIGRlZmF1bHRMb2NhdGlvbnMpIHtcbiAgICAgIGlmIChjaGVja1BhdGhFeGlzdHMobG9jYXRpb24pKSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZhbGwgYmFjayB0byB3aGVyZS5leGVcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBleGVjU3luY19ERVBSRUNBVEVEKGB3aGVyZS5leGUgJHtleGVjdXRhYmxlfWAsIHtcbiAgICAgIHN0ZGlvOiAncGlwZScsXG4gICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgIH0pLnRyaW0oKVxuXG4gICAgLy8gU0VDVVJJVFk6IEZpbHRlciBvdXQgYW55IHJlc3VsdHMgZnJvbSB0aGUgY3VycmVudCBkaXJlY3RvcnlcbiAgICAvLyB0byBwcmV2ZW50IGV4ZWN1dGluZyBtYWxpY2lvdXMgZ2l0LmJhdC9jbWQvZXhlIGZpbGVzXG4gICAgY29uc3QgcGF0aHMgPSByZXN1bHQuc3BsaXQoJ1xcclxcbicpLmZpbHRlcihCb29sZWFuKVxuICAgIGNvbnN0IGN3ZCA9IGdldEN3ZCgpLnRvTG93ZXJDYXNlKClcblxuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlUGF0aCBvZiBwYXRocykge1xuICAgICAgLy8gTm9ybWFsaXplIGFuZCBjb21wYXJlIHBhdGhzIHRvIGVuc3VyZSB3ZSdyZSBub3QgaW4gY3VycmVudCBkaXJlY3RvcnlcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gcGF0aC5yZXNvbHZlKGNhbmRpZGF0ZVBhdGgpLnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHBhdGhEaXIgPSBwYXRoLmRpcm5hbWUobm9ybWFsaXplZFBhdGgpLnRvTG93ZXJDYXNlKClcblxuICAgICAgLy8gU2tpcCBpZiB0aGUgZXhlY3V0YWJsZSBpcyBpbiB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeVxuICAgICAgaWYgKHBhdGhEaXIgPT09IGN3ZCB8fCBub3JtYWxpemVkUGF0aC5zdGFydHNXaXRoKGN3ZCArIHBhdGguc2VwKSkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFNraXBwaW5nIHBvdGVudGlhbGx5IG1hbGljaW91cyBleGVjdXRhYmxlIGluIGN1cnJlbnQgZGlyZWN0b3J5OiAke2NhbmRpZGF0ZVBhdGh9YCxcbiAgICAgICAgKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbGlkIHBhdGggdGhhdCdzIG5vdCBpbiB0aGUgY3VycmVudCBkaXJlY3RvcnlcbiAgICAgIHJldHVybiBjYW5kaWRhdGVQYXRoXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIElmIFdpbmRvd3MsIHNldCB0aGUgU0hFTEwgZW52aXJvbm1lbnQgdmFyaWFibGUgdG8gZ2l0LWJhc2ggcGF0aC5cbiAqIFRoaXMgaXMgdXNlZCBieSBCYXNoVG9vbCBhbmQgU2hlbGwudHMgZm9yIHVzZXIgc2hlbGwgY29tbWFuZHMuXG4gKiBDT01TUEVDIGlzIGxlZnQgdW5jaGFuZ2VkIGZvciBzeXN0ZW0gcHJvY2VzcyBleGVjdXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaGVsbElmV2luZG93cygpOiB2b2lkIHtcbiAgLy8gS2VlcCB0aGlzIGNoZWNrIGRlcGVuZGVuY3ktZnJlZTogaW5pdC50cyBjYWxscyBpdCBvbiBldmVyeSBzdGFydHVwLCBhbmRcbiAgLy8gd2Ugb25seSBjYXJlIGFib3V0IG5hdGl2ZSBXaW5kb3dzIGhlcmUsIG5vdCBoaWdoZXItbGV2ZWwgcGxhdGZvcm1cbiAgLy8gY2xhc3NpZmljYXRpb24gKG1hY09TL1dTTC9MaW51eCkuIEF2b2lkaW5nIGdldFBsYXRmb3JtKCkgYWxzbyBrZWVwcyB0aGlzXG4gIC8vIHBhdGggb3V0IG9mIHRoZSBicm9hZGVyIHBsYXRmb3JtLWRldGVjdGlvbiBpbXBvcnQgZ3JhcGguXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgY29uc3QgZ2l0QmFzaFBhdGggPSBmaW5kR2l0QmFzaFBhdGgoKVxuICAgIHByb2Nlc3MuZW52LlNIRUxMID0gZ2l0QmFzaFBhdGhcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFVzaW5nIGJhc2ggcGF0aDogXCIke2dpdEJhc2hQYXRofVwiYClcbiAgfVxufVxuXG4vKipcbiAqIEZpbmQgdGhlIHBhdGggd2hlcmUgYGJhc2guZXhlYCBpbmNsdWRlZCB3aXRoIGdpdC1iYXNoIGV4aXN0cywgZXhpdGluZyB0aGUgcHJvY2VzcyBpZiBub3QgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kR2l0QmFzaFBhdGggPSBtZW1vaXplKCgpOiBzdHJpbmcgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfR0lUX0JBU0hfUEFUSCkge1xuICAgIGlmIChjaGVja1BhdGhFeGlzdHMocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfR0lUX0JBU0hfUEFUSCkpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9HSVRfQkFTSF9QQVRIXG4gICAgfVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEJsYXVkZSB3YXMgdW5hYmxlIHRvIGZpbmQgQ0xBVURFX0NPREVfR0lUX0JBU0hfUEFUSCBwYXRoIFwiJHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9HSVRfQkFTSF9QQVRIfVwiYCxcbiAgICApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIGNvbnN0IGdpdFBhdGggPSBmaW5kRXhlY3V0YWJsZSgnZ2l0JylcbiAgaWYgKGdpdFBhdGgpIHtcbiAgICBjb25zdCBiYXNoUGF0aCA9IHBhdGhXaW4zMi5qb2luKGdpdFBhdGgsICcuLicsICcuLicsICdiaW4nLCAnYmFzaC5leGUnKVxuICAgIGlmIChjaGVja1BhdGhFeGlzdHMoYmFzaFBhdGgpKSB7XG4gICAgICByZXR1cm4gYmFzaFBhdGhcbiAgICB9XG4gIH1cblxuICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ0JsYXVkZSBvbiBXaW5kb3dzIHJlcXVpcmVzIGdpdC1iYXNoIChodHRwczovL2dpdC1zY20uY29tL2Rvd25sb2Fkcy93aW4pLiBJZiBpbnN0YWxsZWQgYnV0IG5vdCBpbiBQQVRILCBzZXQgZW52aXJvbm1lbnQgdmFyaWFibGUgcG9pbnRpbmcgdG8geW91ciBiYXNoLmV4ZSwgc2ltaWxhciB0bzogQ0xBVURFX0NPREVfR0lUX0JBU0hfUEFUSD1DOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEdpdFxcXFxiaW5cXFxcYmFzaC5leGUnLFxuICApXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gIHByb2Nlc3MuZXhpdCgxKVxufSlcblxuLyoqIENvbnZlcnQgYSBXaW5kb3dzIHBhdGggdG8gYSBQT1NJWCBwYXRoIHVzaW5nIHB1cmUgSlMuICovXG5leHBvcnQgY29uc3Qgd2luZG93c1BhdGhUb1Bvc2l4UGF0aCA9IG1lbW9pemVXaXRoTFJVKFxuICAod2luZG93c1BhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgLy8gSGFuZGxlIFVOQyBwYXRoczogXFxcXHNlcnZlclxcc2hhcmUgLT4gLy9zZXJ2ZXIvc2hhcmVcbiAgICBpZiAod2luZG93c1BhdGguc3RhcnRzV2l0aCgnXFxcXFxcXFwnKSkge1xuICAgICAgcmV0dXJuIHdpbmRvd3NQYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKVxuICAgIH1cbiAgICAvLyBIYW5kbGUgZHJpdmUgbGV0dGVyIHBhdGhzOiBDOlxcVXNlcnNcXGZvbyAtPiAvYy9Vc2Vycy9mb29cbiAgICBjb25zdCBtYXRjaCA9IHdpbmRvd3NQYXRoLm1hdGNoKC9eKFtBLVphLXpdKTpbL1xcXFxdLylcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGRyaXZlTGV0dGVyID0gbWF0Y2hbMV0hLnRvTG93ZXJDYXNlKClcbiAgICAgIHJldHVybiAnLycgKyBkcml2ZUxldHRlciArIHdpbmRvd3NQYXRoLnNsaWNlKDIpLnJlcGxhY2UoL1xcXFwvZywgJy8nKVxuICAgIH1cbiAgICAvLyBBbHJlYWR5IFBPU0lYIG9yIHJlbGF0aXZlIFx1MjAxNCBqdXN0IGZsaXAgc2xhc2hlc1xuICAgIHJldHVybiB3aW5kb3dzUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJylcbiAgfSxcbiAgKHA6IHN0cmluZykgPT4gcCxcbiAgNTAwLFxuKVxuXG4vKiogQ29udmVydCBhIFBPU0lYIHBhdGggdG8gYSBXaW5kb3dzIHBhdGggdXNpbmcgcHVyZSBKUy4gKi9cbmV4cG9ydCBjb25zdCBwb3NpeFBhdGhUb1dpbmRvd3NQYXRoID0gbWVtb2l6ZVdpdGhMUlUoXG4gIChwb3NpeFBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgLy8gSGFuZGxlIFVOQyBwYXRoczogLy9zZXJ2ZXIvc2hhcmUgLT4gXFxcXHNlcnZlclxcc2hhcmVcbiAgICBpZiAocG9zaXhQYXRoLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHJldHVybiBwb3NpeFBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcJylcbiAgICB9XG4gICAgLy8gSGFuZGxlIC9jeWdkcml2ZS9jLy4uLiBmb3JtYXRcbiAgICBjb25zdCBjeWdkcml2ZU1hdGNoID0gcG9zaXhQYXRoLm1hdGNoKC9eXFwvY3lnZHJpdmVcXC8oW0EtWmEtel0pKFxcL3wkKS8pXG4gICAgaWYgKGN5Z2RyaXZlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGRyaXZlTGV0dGVyID0gY3lnZHJpdmVNYXRjaFsxXSEudG9VcHBlckNhc2UoKVxuICAgICAgY29uc3QgcmVzdCA9IHBvc2l4UGF0aC5zbGljZSgoJy9jeWdkcml2ZS8nICsgY3lnZHJpdmVNYXRjaFsxXSkubGVuZ3RoKVxuICAgICAgcmV0dXJuIGRyaXZlTGV0dGVyICsgJzonICsgKHJlc3QgfHwgJ1xcXFwnKS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICAgIH1cbiAgICAvLyBIYW5kbGUgL2MvLi4uIGZvcm1hdCAoTVNZUzIvR2l0IEJhc2gpXG4gICAgY29uc3QgZHJpdmVNYXRjaCA9IHBvc2l4UGF0aC5tYXRjaCgvXlxcLyhbQS1aYS16XSkoXFwvfCQpLylcbiAgICBpZiAoZHJpdmVNYXRjaCkge1xuICAgICAgY29uc3QgZHJpdmVMZXR0ZXIgPSBkcml2ZU1hdGNoWzFdIS50b1VwcGVyQ2FzZSgpXG4gICAgICBjb25zdCByZXN0ID0gcG9zaXhQYXRoLnNsaWNlKDIpXG4gICAgICByZXR1cm4gZHJpdmVMZXR0ZXIgKyAnOicgKyAocmVzdCB8fCAnXFxcXCcpLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgfVxuICAgIC8vIEFscmVhZHkgV2luZG93cyBvciByZWxhdGl2ZSBcdTIwMTQganVzdCBmbGlwIHNsYXNoZXNcbiAgICByZXR1cm4gcG9zaXhQYXRoLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gIH0sXG4gIChwOiBzdHJpbmcpID0+IHAsXG4gIDUwMCxcbilcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxZQUFZLFVBQVU7QUFDdEIsWUFBWSxlQUFlO0FBVzNCLFNBQVMsZ0JBQWdCQSxPQUF1QjtBQUM5QyxNQUFJO0FBQ0Ysd0JBQW9CLFFBQVFBLEtBQUksS0FBSyxFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQ3RELFdBQU87QUFBQSxFQUNULFFBQVE7QUFDTixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBT0EsU0FBUyxlQUFlLFlBQW1DO0FBRXpELE1BQUksZUFBZSxPQUFPO0FBQ3hCLFVBQU0sbUJBQW1CO0FBQUE7QUFBQSxNQUV2QjtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUEsSUFHRjtBQUVBLGVBQVcsWUFBWSxrQkFBa0I7QUFDdkMsVUFBSSxnQkFBZ0IsUUFBUSxHQUFHO0FBQzdCLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFHQSxNQUFJO0FBQ0YsVUFBTSxTQUFTLG9CQUFvQixhQUFhLFVBQVUsSUFBSTtBQUFBLE1BQzVELE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNaLENBQUMsRUFBRSxLQUFLO0FBSVIsVUFBTSxRQUFRLE9BQU8sTUFBTSxNQUFNLEVBQUUsT0FBTyxPQUFPO0FBQ2pELFVBQU0sTUFBTSxPQUFPLEVBQUUsWUFBWTtBQUVqQyxlQUFXLGlCQUFp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
