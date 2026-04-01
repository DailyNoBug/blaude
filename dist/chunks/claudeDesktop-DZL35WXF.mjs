#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  McpStdioServerConfigSchema,
  init_json,
  init_types,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import {
  SUPPORTED_PLATFORMS,
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import {
  getErrnoCode,
  init_errors
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/utils/claudeDesktop.ts
init_types();
init_errors();
init_json();
init_log();
init_platform();
import { readdir, readFile, stat } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
async function getClaudeDesktopConfigPath() {
  const platform = getPlatform();
  if (!SUPPORTED_PLATFORMS.includes(platform)) {
    throw new Error(
      `Unsupported platform: ${platform} - Blaude Desktop integration only works on macOS and WSL.`
    );
  }
  if (platform === "macos") {
    return join(
      homedir(),
      "Library",
      "Application Support",
      "Claude",
      "claude_desktop_config.json"
    );
  }
  const windowsHome = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;
  if (windowsHome) {
    const wslPath = windowsHome.replace(/^[A-Z]:/, "");
    const configPath = `/mnt/c${wslPath}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      await stat(configPath);
      return configPath;
    } catch {
    }
  }
  try {
    const usersDir = "/mnt/c/Users";
    try {
      const userDirs = await readdir(usersDir, { withFileTypes: true });
      for (const user of userDirs) {
        if (user.name === "Public" || user.name === "Default" || user.name === "Default User" || user.name === "All Users") {
          continue;
        }
        const potentialConfigPath = join(
          usersDir,
          user.name,
          "AppData",
          "Roaming",
          "Claude",
          "claude_desktop_config.json"
        );
        try {
          await stat(potentialConfigPath);
          return potentialConfigPath;
        } catch {
        }
      }
    } catch {
    }
  } catch (dirError) {
    logError(dirError);
  }
  throw new Error(
    "Could not find the Blaude Desktop config file in Windows. Make sure Blaude Desktop is installed on Windows."
  );
}
async function readClaudeDesktopMcpServers() {
  if (!SUPPORTED_PLATFORMS.includes(getPlatform())) {
    throw new Error(
      "Unsupported platform - Blaude Desktop integration only works on macOS and WSL."
    );
  }
  try {
    const configPath = await getClaudeDesktopConfigPath();
    let configContent;
    try {
      configContent = await readFile(configPath, { encoding: "utf8" });
    } catch (e) {
      const code = getErrnoCode(e);
      if (code === "ENOENT") {
        return {};
      }
      throw e;
    }
    const config = safeParseJSON(configContent);
    if (!config || typeof config !== "object") {
      return {};
    }
    const mcpServers = config.mcpServers;
    if (!mcpServers || typeof mcpServers !== "object") {
      return {};
    }
    const servers = {};
    for (const [name, serverConfig] of Object.entries(
      mcpServers
    )) {
      if (!serverConfig || typeof serverConfig !== "object") {
        continue;
      }
      const result = McpStdioServerConfigSchema().safeParse(serverConfig);
      if (result.success) {
        servers[name] = result.data;
      }
    }
    return servers;
  } catch (error) {
    logError(error);
    return {};
  }
}
export {
  getClaudeDesktopConfigPath,
  readClaudeDesktopMcpServers
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZURlc2t0b3AudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlYWRkaXIsIHJlYWRGaWxlLCBzdGF0IH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIHR5cGUgTWNwU2VydmVyQ29uZmlnLFxuICBNY3BTdGRpb1NlcnZlckNvbmZpZ1NjaGVtYSxcbn0gZnJvbSAnLi4vc2VydmljZXMvbWNwL3R5cGVzLmpzJ1xuaW1wb3J0IHsgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBzYWZlUGFyc2VKU09OIH0gZnJvbSAnLi9qc29uLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmltcG9ydCB7IGdldFBsYXRmb3JtLCBTVVBQT1JURURfUExBVEZPUk1TIH0gZnJvbSAnLi9wbGF0Zm9ybS5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsYXVkZURlc2t0b3BDb25maWdQYXRoKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKVxuXG4gIGlmICghU1VQUE9SVEVEX1BMQVRGT1JNUy5pbmNsdWRlcyhwbGF0Zm9ybSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5zdXBwb3J0ZWQgcGxhdGZvcm06ICR7cGxhdGZvcm19IC0gQmxhdWRlIERlc2t0b3AgaW50ZWdyYXRpb24gb25seSB3b3JrcyBvbiBtYWNPUyBhbmQgV1NMLmAsXG4gICAgKVxuICB9XG5cbiAgaWYgKHBsYXRmb3JtID09PSAnbWFjb3MnKSB7XG4gICAgcmV0dXJuIGpvaW4oXG4gICAgICBob21lZGlyKCksXG4gICAgICAnTGlicmFyeScsXG4gICAgICAnQXBwbGljYXRpb24gU3VwcG9ydCcsXG4gICAgICAnQ2xhdWRlJyxcbiAgICAgICdjbGF1ZGVfZGVza3RvcF9jb25maWcuanNvbicsXG4gICAgKVxuICB9XG5cbiAgLy8gRmlyc3QsIHRyeSB1c2luZyBVU0VSUFJPRklMRSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpZiBhdmFpbGFibGVcbiAgY29uc3Qgd2luZG93c0hvbWUgPSBwcm9jZXNzLmVudi5VU0VSUFJPRklMRVxuICAgID8gcHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEUucmVwbGFjZSgvXFxcXC9nLCAnLycpIC8vIENvbnZlcnQgV2luZG93cyBiYWNrc2xhc2hlcyB0byBmb3J3YXJkIHNsYXNoZXNcbiAgICA6IG51bGxcblxuICBpZiAod2luZG93c0hvbWUpIHtcbiAgICAvLyBSZW1vdmUgZHJpdmUgbGV0dGVyIGFuZCBjb252ZXJ0IHRvIFdTTCBwYXRoIGZvcm1hdFxuICAgIGNvbnN0IHdzbFBhdGggPSB3aW5kb3dzSG9tZS5yZXBsYWNlKC9eW0EtWl06LywgJycpXG4gICAgY29uc3QgY29uZmlnUGF0aCA9IGAvbW50L2Mke3dzbFBhdGh9L0FwcERhdGEvUm9hbWluZy9DbGF1ZGUvY2xhdWRlX2Rlc2t0b3BfY29uZmlnLmpzb25gXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZmlsZSBleGlzdHNcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3RhdChjb25maWdQYXRoKVxuICAgICAgcmV0dXJuIGNvbmZpZ1BhdGhcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZpbGUgZG9lc24ndCBleGlzdCwgY29udGludWVcbiAgICB9XG4gIH1cblxuICAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCAtIHRyeSB0byBjb25zdHJ1Y3QgcGF0aCBiYXNlZCBvbiB0eXBpY2FsIFdpbmRvd3MgdXNlciBsb2NhdGlvblxuICB0cnkge1xuICAgIC8vIExpc3QgdGhlIC9tbnQvYy9Vc2VycyBkaXJlY3RvcnkgdG8gZmluZCBwb3RlbnRpYWwgdXNlciBkaXJlY3Rvcmllc1xuICAgIGNvbnN0IHVzZXJzRGlyID0gJy9tbnQvYy9Vc2VycydcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IHJlYWRkaXIodXNlcnNEaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuXG4gICAgICAvLyBMb29rIGZvciBDbGF1ZGUgRGVza3RvcCBjb25maWcgaW4gZWFjaCB1c2VyIGRpcmVjdG9yeVxuICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB1c2VyLm5hbWUgPT09ICdQdWJsaWMnIHx8XG4gICAgICAgICAgdXNlci5uYW1lID09PSAnRGVmYXVsdCcgfHxcbiAgICAgICAgICB1c2VyLm5hbWUgPT09ICdEZWZhdWx0IFVzZXInIHx8XG4gICAgICAgICAgdXNlci5uYW1lID09PSAnQWxsIFVzZXJzJ1xuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZSAvLyBTa2lwIHN5c3RlbSBkaXJlY3Rvcmllc1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsQ29uZmlnUGF0aCA9IGpvaW4oXG4gICAgICAgICAgdXNlcnNEaXIsXG4gICAgICAgICAgdXNlci5uYW1lLFxuICAgICAgICAgICdBcHBEYXRhJyxcbiAgICAgICAgICAnUm9hbWluZycsXG4gICAgICAgICAgJ0NsYXVkZScsXG4gICAgICAgICAgJ2NsYXVkZV9kZXNrdG9wX2NvbmZpZy5qc29uJyxcbiAgICAgICAgKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgc3RhdChwb3RlbnRpYWxDb25maWdQYXRoKVxuICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxDb25maWdQYXRoXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIEZpbGUgZG9lc24ndCBleGlzdCwgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdXNlcnNEaXIgZG9lc24ndCBleGlzdCBvciBjYW4ndCBiZSByZWFkXG4gICAgfVxuICB9IGNhdGNoIChkaXJFcnJvcikge1xuICAgIGxvZ0Vycm9yKGRpckVycm9yKVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdDb3VsZCBub3QgZmluZCB0aGUgQmxhdWRlIERlc2t0b3AgY29uZmlnIGZpbGUgaW4gV2luZG93cy4gTWFrZSBzdXJlIEJsYXVkZSBEZXNrdG9wIGlzIGluc3RhbGxlZCBvbiBXaW5kb3dzLicsXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRDbGF1ZGVEZXNrdG9wTWNwU2VydmVycygpOiBQcm9taXNlPFxuICBSZWNvcmQ8c3RyaW5nLCBNY3BTZXJ2ZXJDb25maWc+XG4+IHtcbiAgaWYgKCFTVVBQT1JURURfUExBVEZPUk1TLmluY2x1ZGVzKGdldFBsYXRmb3JtKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1Vuc3VwcG9ydGVkIHBsYXRmb3JtIC0gQmxhdWRlIERlc2t0b3AgaW50ZWdyYXRpb24gb25seSB3b3JrcyBvbiBtYWNPUyBhbmQgV1NMLicsXG4gICAgKVxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnUGF0aCA9IGF3YWl0IGdldENsYXVkZURlc2t0b3BDb25maWdQYXRoKClcblxuICAgIGxldCBjb25maWdDb250ZW50OiBzdHJpbmdcbiAgICB0cnkge1xuICAgICAgY29uZmlnQ29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGNvbmZpZ1BhdGgsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KVxuICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZSlcbiAgICAgIGlmIChjb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICAgIHRocm93IGVcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSBzYWZlUGFyc2VKU09OKGNvbmZpZ0NvbnRlbnQpXG5cbiAgICBpZiAoIWNvbmZpZyB8fCB0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgbWNwU2VydmVycyA9IChjb25maWcgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pLm1jcFNlcnZlcnNcbiAgICBpZiAoIW1jcFNlcnZlcnMgfHwgdHlwZW9mIG1jcFNlcnZlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2ZXJzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZXJ2ZXJDb25maWc+ID0ge31cblxuICAgIGZvciAoY29uc3QgW25hbWUsIHNlcnZlckNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICBtY3BTZXJ2ZXJzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgICkpIHtcbiAgICAgIGlmICghc2VydmVyQ29uZmlnIHx8IHR5cGVvZiBzZXJ2ZXJDb25maWcgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1jcFN0ZGlvU2VydmVyQ29uZmlnU2NoZW1hKCkuc2FmZVBhcnNlKHNlcnZlckNvbmZpZylcblxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHNlcnZlcnNbbmFtZV0gPSByZXN1bHQuZGF0YVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXJ2ZXJzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVZBLFNBQVMsU0FBUyxVQUFVLFlBQVk7QUFDeEMsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsWUFBWTtBQVVyQixlQUFzQiw2QkFBOEM7QUFDbEUsUUFBTSxXQUFXLFlBQVk7QUFFN0IsTUFB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
