#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  execa,
  init_execa
} from "./chunk-ZAYB3WZV.mjs";
import {
  execSync_DEPRECATED,
  init_execSyncWrapper
} from "./chunk-F5ODCUJD.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/which.ts
async function whichNodeAsync(command) {
  if (process.platform === "win32") {
    const result2 = await execa(`where.exe ${command}`, {
      shell: true,
      stderr: "ignore",
      reject: false
    });
    if (result2.exitCode !== 0 || !result2.stdout) {
      return null;
    }
    return result2.stdout.trim().split(/\r?\n/)[0] || null;
  }
  const result = await execa(`which ${command}`, {
    shell: true,
    stderr: "ignore",
    reject: false
  });
  if (result.exitCode !== 0 || !result.stdout) {
    return null;
  }
  return result.stdout.trim();
}
function whichNodeSync(command) {
  if (process.platform === "win32") {
    try {
      const result = execSync_DEPRECATED(`where.exe ${command}`, {
        encoding: "utf-8",
        stdio: ["ignore", "pipe", "ignore"]
      });
      const output = result.toString().trim();
      return output.split(/\r?\n/)[0] || null;
    } catch {
      return null;
    }
  }
  try {
    const result = execSync_DEPRECATED(`which ${command}`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"]
    });
    return result.toString().trim() || null;
  } catch {
    return null;
  }
}
var bunWhich, which, whichSync;
var init_which = __esm({
  "src/utils/which.ts"() {
    init_execa();
    init_execSyncWrapper();
    bunWhich = typeof Bun !== "undefined" && typeof Bun.which === "function" ? Bun.which : null;
    which = bunWhich ? async (command) => bunWhich(command) : whichNodeAsync;
    whichSync = bunWhich ?? whichNodeSync;
  }
});

export {
  which,
  whichSync,
  init_which
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3doaWNoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBleGVjYSB9IGZyb20gJ2V4ZWNhJ1xuaW1wb3J0IHsgZXhlY1N5bmNfREVQUkVDQVRFRCB9IGZyb20gJy4vZXhlY1N5bmNXcmFwcGVyLmpzJ1xuXG5hc3luYyBmdW5jdGlvbiB3aGljaE5vZGVBc3luYyhjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAvLyBPbiBXaW5kb3dzLCB1c2Ugd2hlcmUuZXhlIGFuZCByZXR1cm4gdGhlIGZpcnN0IHJlc3VsdFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNhKGB3aGVyZS5leGUgJHtjb21tYW5kfWAsIHtcbiAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgc3RkZXJyOiAnaWdub3JlJyxcbiAgICAgIHJlamVjdDogZmFsc2UsXG4gICAgfSlcbiAgICBpZiAocmVzdWx0LmV4aXRDb2RlICE9PSAwIHx8ICFyZXN1bHQuc3Rkb3V0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICAvLyB3aGVyZS5leGUgcmV0dXJucyBtdWx0aXBsZSBwYXRocyBzZXBhcmF0ZWQgYnkgbmV3bGluZXMsIHJldHVybiB0aGUgZmlyc3RcbiAgICByZXR1cm4gcmVzdWx0LnN0ZG91dC50cmltKCkuc3BsaXQoL1xccj9cXG4vKVswXSB8fCBudWxsXG4gIH1cblxuICAvLyBPbiBQT1NJWCBzeXN0ZW1zIChtYWNPUywgTGludXgsIFdTTCksIHVzZSB3aGljaFxuICAvLyBDcm9zcy1wbGF0Zm9ybSBzYWZlOiBXaW5kb3dzIGlzIGhhbmRsZWQgYWJvdmVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1jcm9zcy1wbGF0Zm9ybS1wcm9jZXNzLWlzc3Vlc1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjYShgd2hpY2ggJHtjb21tYW5kfWAsIHtcbiAgICBzaGVsbDogdHJ1ZSxcbiAgICBzdGRlcnI6ICdpZ25vcmUnLFxuICAgIHJlamVjdDogZmFsc2UsXG4gIH0pXG4gIGlmIChyZXN1bHQuZXhpdENvZGUgIT09IDAgfHwgIXJlc3VsdC5zdGRvdXQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiByZXN1bHQuc3Rkb3V0LnRyaW0oKVxufVxuXG5mdW5jdGlvbiB3aGljaE5vZGVTeW5jKGNvbW1hbmQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBleGVjU3luY19ERVBSRUNBVEVEKGB3aGVyZS5leGUgJHtjb21tYW5kfWAsIHtcbiAgICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2lnbm9yZSddLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IG91dHB1dCA9IHJlc3VsdC50b1N0cmluZygpLnRyaW0oKVxuICAgICAgcmV0dXJuIG91dHB1dC5zcGxpdCgvXFxyP1xcbi8pWzBdIHx8IG51bGxcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBleGVjU3luY19ERVBSRUNBVEVEKGB3aGljaCAke2NvbW1hbmR9YCwge1xuICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgICBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpZ25vcmUnXSxcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKS50cmltKCkgfHwgbnVsbFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGJ1bldoaWNoID1cbiAgdHlwZW9mIEJ1biAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEJ1bi53aGljaCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gQnVuLndoaWNoXG4gICAgOiBudWxsXG5cbi8qKlxuICogRmluZHMgdGhlIGZ1bGwgcGF0aCB0byBhIGNvbW1hbmQgZXhlY3V0YWJsZS5cbiAqIFVzZXMgQnVuLndoaWNoIHdoZW4gcnVubmluZyBpbiBCdW4gKGZhc3QsIG5vIHByb2Nlc3Mgc3Bhd24pLFxuICogb3RoZXJ3aXNlIHNwYXducyB0aGUgcGxhdGZvcm0tYXBwcm9wcmlhdGUgY29tbWFuZC5cbiAqXG4gKiBAcGFyYW0gY29tbWFuZCAtIFRoZSBjb21tYW5kIG5hbWUgdG8gbG9vayB1cFxuICogQHJldHVybnMgVGhlIGZ1bGwgcGF0aCB0byB0aGUgY29tbWFuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAqL1xuZXhwb3J0IGNvbnN0IHdoaWNoOiAoY29tbWFuZDogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0gYnVuV2hpY2hcbiAgPyBhc3luYyBjb21tYW5kID0+IGJ1bldoaWNoKGNvbW1hbmQpXG4gIDogd2hpY2hOb2RlQXN5bmNcblxuLyoqXG4gKiBTeW5jaHJvbm91cyB2ZXJzaW9uIG9mIGB3aGljaGAuXG4gKlxuICogQHBhcmFtIGNvbW1hbmQgLSBUaGUgY29tbWFuZCBuYW1lIHRvIGxvb2sgdXBcbiAqIEByZXR1cm5zIFRoZSBmdWxsIHBhdGggdG8gdGhlIGNvbW1hbmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gKi9cbmV4cG9ydCBjb25zdCB3aGljaFN5bmM6IChjb21tYW5kOiBzdHJpbmcpID0+IHN0cmluZyB8IG51bGwgPVxuICBidW5XaGljaCA/PyB3aGljaE5vZGVTeW5jXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsZUFBZSxlQUFlLFNBQXlDO0FBQ3JFLE1BQUksUUFBUSxhQUFhLFNBQVM7QUFFaEMsVUFBTUEsVUFBUyxNQUFNLE1BQU0sYUFBYSxPQUFPLElBQUk7QUFBQSxNQUNqRCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsSUFDVixDQUFDO0FBQ0QsUUFBSUEsUUFBTyxhQUFhLEtBQUssQ0FBQ0EsUUFBTyxRQUFRO0FBQzNDLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBT0EsUUFBTyxPQUFPLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxDQUFDLEtBQUs7QUFBQSxFQUNuRDtBQUtBLFFBQU0sU0FBUyxNQUFNLE1BQU0sU0FBUyxPQUFPLElBQUk7QUFBQSxJQUM3QyxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVixDQUFDO0FBQ0QsTUFBSSxPQUFPLGFBQWEsS0FBSyxDQUFDLE9BQU8sUUFBUTtBQUMzQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU8sT0FBTyxPQUFPLEtBQUs7QUFDNUI7QUFFQSxTQUFTLGNBQWMsU0FBZ0M7QUFDckQsTUFBSSxRQUFRLGFBQWEsU0FBUztBQUNoQyxRQUFJO0FBQ0YsWUFBTSxTQUFTLG9CQUFvQixhQUFhLE9BQU8sSUFBSTtBQUFBLFFBQ3pELFVBQVU7QUFBQSxRQUNWLE9BQU8sQ0FBQyxVQUFVLFFBQVEsUUFBUTtBQUFBLE1BQ3BDLENBQUM7QUFDRCxZQUFNLFNBQVMsT0FBTyxTQUFTLEVBQUUsS0FBSztBQUN0QyxhQUFPLE9BQU8sTUFBTSxPQUFPLEVBQUUsQ0FBQyxLQUFLO0FBQUEsSUFDckMsUUFBUTtBQUNOLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUVBLE1BQUk7QUFDRixVQUFNLFNBQVMsb0JBQW9CLFNBQVMsT0FBTyxJQUFJO0FBQUEsTUFDckQsVUFBVTtBQUFBLE1BQ1YsT0FBTyxDQUFDLFVBQVUsUUFBUSxRQUFRO0FBQUEsSUFDcEMsQ0FBQztBQUNELFdBQU8sT0FBTyxTQUFTLEVBQUUsS0FBSyxLQUFLO0FBQUEsRUFDckMsUUFBUTtBQUNOLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUF2REEsSUF5RE0sVUFhTyxPQVVBO0FBaEZiO0FBQUE7QUFBQTtBQUNBO0FBd0RBLElBQU0sV0FDSixPQUFPLFFBQVEsZUFBZSxPQUFPLElBQUksVUFBVSxhQUMvQyxJQUFJLFFBQ0o7QUFVQyxJQUFNLFFBQXFELFdBQzlELE9BQU0sWUFBVyxTQUFTLE9BQU8sSUFDakM7QUFRRyxJQUFNLFlBQ1gsWUFBWTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlc3VsdCJdCn0K
