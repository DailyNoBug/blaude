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
      `Unsupported platform: ${platform} - Claude Desktop integration only works on macOS and WSL.`
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
    "Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows."
  );
}
async function readClaudeDesktopMcpServers() {
  if (!SUPPORTED_PLATFORMS.includes(getPlatform())) {
    throw new Error(
      "Unsupported platform - Claude Desktop integration only works on macOS and WSL."
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZURlc2t0b3AudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlYWRkaXIsIHJlYWRGaWxlLCBzdGF0IH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIHR5cGUgTWNwU2VydmVyQ29uZmlnLFxuICBNY3BTdGRpb1NlcnZlckNvbmZpZ1NjaGVtYSxcbn0gZnJvbSAnLi4vc2VydmljZXMvbWNwL3R5cGVzLmpzJ1xuaW1wb3J0IHsgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBzYWZlUGFyc2VKU09OIH0gZnJvbSAnLi9qc29uLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmltcG9ydCB7IGdldFBsYXRmb3JtLCBTVVBQT1JURURfUExBVEZPUk1TIH0gZnJvbSAnLi9wbGF0Zm9ybS5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsYXVkZURlc2t0b3BDb25maWdQYXRoKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKVxuXG4gIGlmICghU1VQUE9SVEVEX1BMQVRGT1JNUy5pbmNsdWRlcyhwbGF0Zm9ybSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5zdXBwb3J0ZWQgcGxhdGZvcm06ICR7cGxhdGZvcm19IC0gQ2xhdWRlIERlc2t0b3AgaW50ZWdyYXRpb24gb25seSB3b3JrcyBvbiBtYWNPUyBhbmQgV1NMLmAsXG4gICAgKVxuICB9XG5cbiAgaWYgKHBsYXRmb3JtID09PSAnbWFjb3MnKSB7XG4gICAgcmV0dXJuIGpvaW4oXG4gICAgICBob21lZGlyKCksXG4gICAgICAnTGlicmFyeScsXG4gICAgICAnQXBwbGljYXRpb24gU3VwcG9ydCcsXG4gICAgICAnQ2xhdWRlJyxcbiAgICAgICdjbGF1ZGVfZGVza3RvcF9jb25maWcuanNvbicsXG4gICAgKVxuICB9XG5cbiAgLy8gRmlyc3QsIHRyeSB1c2luZyBVU0VSUFJPRklMRSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpZiBhdmFpbGFibGVcbiAgY29uc3Qgd2luZG93c0hvbWUgPSBwcm9jZXNzLmVudi5VU0VSUFJPRklMRVxuICAgID8gcHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEUucmVwbGFjZSgvXFxcXC9nLCAnLycpIC8vIENvbnZlcnQgV2luZG93cyBiYWNrc2xhc2hlcyB0byBmb3J3YXJkIHNsYXNoZXNcbiAgICA6IG51bGxcblxuICBpZiAod2luZG93c0hvbWUpIHtcbiAgICAvLyBSZW1vdmUgZHJpdmUgbGV0dGVyIGFuZCBjb252ZXJ0IHRvIFdTTCBwYXRoIGZvcm1hdFxuICAgIGNvbnN0IHdzbFBhdGggPSB3aW5kb3dzSG9tZS5yZXBsYWNlKC9eW0EtWl06LywgJycpXG4gICAgY29uc3QgY29uZmlnUGF0aCA9IGAvbW50L2Mke3dzbFBhdGh9L0FwcERhdGEvUm9hbWluZy9DbGF1ZGUvY2xhdWRlX2Rlc2t0b3BfY29uZmlnLmpzb25gXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZmlsZSBleGlzdHNcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3RhdChjb25maWdQYXRoKVxuICAgICAgcmV0dXJuIGNvbmZpZ1BhdGhcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZpbGUgZG9lc24ndCBleGlzdCwgY29udGludWVcbiAgICB9XG4gIH1cblxuICAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCAtIHRyeSB0byBjb25zdHJ1Y3QgcGF0aCBiYXNlZCBvbiB0eXBpY2FsIFdpbmRvd3MgdXNlciBsb2NhdGlvblxuICB0cnkge1xuICAgIC8vIExpc3QgdGhlIC9tbnQvYy9Vc2VycyBkaXJlY3RvcnkgdG8gZmluZCBwb3RlbnRpYWwgdXNlciBkaXJlY3Rvcmllc1xuICAgIGNvbnN0IHVzZXJzRGlyID0gJy9tbnQvYy9Vc2VycydcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IHJlYWRkaXIodXNlcnNEaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuXG4gICAgICAvLyBMb29rIGZvciBDbGF1ZGUgRGVza3RvcCBjb25maWcgaW4gZWFjaCB1c2VyIGRpcmVjdG9yeVxuICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB1c2VyLm5hbWUgPT09ICdQdWJsaWMnIHx8XG4gICAgICAgICAgdXNlci5uYW1lID09PSAnRGVmYXVsdCcgfHxcbiAgICAgICAgICB1c2VyLm5hbWUgPT09ICdEZWZhdWx0IFVzZXInIHx8XG4gICAgICAgICAgdXNlci5uYW1lID09PSAnQWxsIFVzZXJzJ1xuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZSAvLyBTa2lwIHN5c3RlbSBkaXJlY3Rvcmllc1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsQ29uZmlnUGF0aCA9IGpvaW4oXG4gICAgICAgICAgdXNlcnNEaXIsXG4gICAgICAgICAgdXNlci5uYW1lLFxuICAgICAgICAgICdBcHBEYXRhJyxcbiAgICAgICAgICAnUm9hbWluZycsXG4gICAgICAgICAgJ0NsYXVkZScsXG4gICAgICAgICAgJ2NsYXVkZV9kZXNrdG9wX2NvbmZpZy5qc29uJyxcbiAgICAgICAgKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgc3RhdChwb3RlbnRpYWxDb25maWdQYXRoKVxuICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxDb25maWdQYXRoXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIEZpbGUgZG9lc24ndCBleGlzdCwgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gdXNlcnNEaXIgZG9lc24ndCBleGlzdCBvciBjYW4ndCBiZSByZWFkXG4gICAgfVxuICB9IGNhdGNoIChkaXJFcnJvcikge1xuICAgIGxvZ0Vycm9yKGRpckVycm9yKVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdDb3VsZCBub3QgZmluZCBDbGF1ZGUgRGVza3RvcCBjb25maWcgZmlsZSBpbiBXaW5kb3dzLiBNYWtlIHN1cmUgQ2xhdWRlIERlc2t0b3AgaXMgaW5zdGFsbGVkIG9uIFdpbmRvd3MuJyxcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZENsYXVkZURlc2t0b3BNY3BTZXJ2ZXJzKCk6IFByb21pc2U8XG4gIFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZz5cbj4ge1xuICBpZiAoIVNVUFBPUlRFRF9QTEFURk9STVMuaW5jbHVkZXMoZ2V0UGxhdGZvcm0oKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnVW5zdXBwb3J0ZWQgcGxhdGZvcm0gLSBDbGF1ZGUgRGVza3RvcCBpbnRlZ3JhdGlvbiBvbmx5IHdvcmtzIG9uIG1hY09TIGFuZCBXU0wuJyxcbiAgICApXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWdQYXRoID0gYXdhaXQgZ2V0Q2xhdWRlRGVza3RvcENvbmZpZ1BhdGgoKVxuXG4gICAgbGV0IGNvbmZpZ0NvbnRlbnQ6IHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICBjb25maWdDb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoY29uZmlnUGF0aCwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pXG4gICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgICAgaWYgKGNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgICAgdGhyb3cgZVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHNhZmVQYXJzZUpTT04oY29uZmlnQ29udGVudClcblxuICAgIGlmICghY29uZmlnIHx8IHR5cGVvZiBjb25maWcgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBtY3BTZXJ2ZXJzID0gKGNvbmZpZyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikubWNwU2VydmVyc1xuICAgIGlmICghbWNwU2VydmVycyB8fCB0eXBlb2YgbWNwU2VydmVycyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IHNlcnZlcnM6IFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZz4gPSB7fVxuXG4gICAgZm9yIChjb25zdCBbbmFtZSwgc2VydmVyQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIG1jcFNlcnZlcnMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgKSkge1xuICAgICAgaWYgKCFzZXJ2ZXJDb25maWcgfHwgdHlwZW9mIHNlcnZlckNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gTWNwU3RkaW9TZXJ2ZXJDb25maWdTY2hlbWEoKS5zYWZlUGFyc2Uoc2VydmVyQ29uZmlnKVxuXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgc2VydmVyc1tuYW1lXSA9IHJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcnZlcnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4ge31cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBVkEsU0FBUyxTQUFTLFVBQVUsWUFBWTtBQUN4QyxTQUFTLGVBQWU7QUFDeEIsU0FBUyxZQUFZO0FBVXJCLGVBQXNCLDZCQUE4QztBQUNsRSxRQUFNLFdBQVcsWUFBWTtBQUU3QixNQUFJLENB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
