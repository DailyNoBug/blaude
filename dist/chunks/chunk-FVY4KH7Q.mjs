#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_which,
  which
} from "./chunk-LNQOFDTT.mjs";
import {
  execa,
  init_execa
} from "./chunk-ZAYB3WZV.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/github/ghAuthStatus.ts
async function getGhAuthStatus() {
  const ghPath = await which("gh");
  if (!ghPath) {
    return "not_installed";
  }
  const { exitCode } = await execa("gh", ["auth", "token"], {
    stdout: "ignore",
    stderr: "ignore",
    timeout: 5e3,
    reject: false
  });
  return exitCode === 0 ? "authenticated" : "not_authenticated";
}
var init_ghAuthStatus = __esm({
  "src/utils/github/ghAuthStatus.ts"() {
    init_execa();
    init_which();
  }
});

export {
  getGhAuthStatus,
  init_ghAuthStatus
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2dpdGh1Yi9naEF1dGhTdGF0dXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGV4ZWNhIH0gZnJvbSAnZXhlY2EnXG5pbXBvcnQgeyB3aGljaCB9IGZyb20gJy4uL3doaWNoLmpzJ1xuXG5leHBvcnQgdHlwZSBHaEF1dGhTdGF0dXMgPVxuICB8ICdhdXRoZW50aWNhdGVkJ1xuICB8ICdub3RfYXV0aGVudGljYXRlZCdcbiAgfCAnbm90X2luc3RhbGxlZCdcblxuLyoqXG4gKiBSZXR1cm5zIGdoIENMSSBpbnN0YWxsICsgYXV0aCBzdGF0dXMgZm9yIHRlbGVtZXRyeS5cbiAqIFVzZXMgd2hpY2goKSBmaXJzdCAoQnVuLndoaWNoIFx1MjAxNCBubyBzdWJwcm9jZXNzKSB0byBkZXRlY3QgaW5zdGFsbCwgdGhlblxuICogZXhpdCBjb2RlIG9mIGBnaCBhdXRoIHRva2VuYCB0byBkZXRlY3QgYXV0aC4gVXNlcyBgYXV0aCB0b2tlbmAgaW5zdGVhZCBvZlxuICogYGF1dGggc3RhdHVzYCBiZWNhdXNlIHRoZSBsYXR0ZXIgbWFrZXMgYSBuZXR3b3JrIHJlcXVlc3QgdG8gR2l0SHViJ3MgQVBJLFxuICogd2hpbGUgYGF1dGggdG9rZW5gIG9ubHkgcmVhZHMgbG9jYWwgY29uZmlnL2tleXJpbmcuIFNwYXducyB3aXRoXG4gKiBzdGRvdXQ6ICdpZ25vcmUnIHNvIHRoZSB0b2tlbiBuZXZlciBlbnRlcnMgdGhpcyBwcm9jZXNzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2hBdXRoU3RhdHVzKCk6IFByb21pc2U8R2hBdXRoU3RhdHVzPiB7XG4gIGNvbnN0IGdoUGF0aCA9IGF3YWl0IHdoaWNoKCdnaCcpXG4gIGlmICghZ2hQYXRoKSB7XG4gICAgcmV0dXJuICdub3RfaW5zdGFsbGVkJ1xuICB9XG4gIGNvbnN0IHsgZXhpdENvZGUgfSA9IGF3YWl0IGV4ZWNhKCdnaCcsIFsnYXV0aCcsICd0b2tlbiddLCB7XG4gICAgc3Rkb3V0OiAnaWdub3JlJyxcbiAgICBzdGRlcnI6ICdpZ25vcmUnLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgcmVqZWN0OiBmYWxzZSxcbiAgfSlcbiAgcmV0dXJuIGV4aXRDb2RlID09PSAwID8gJ2F1dGhlbnRpY2F0ZWQnIDogJ25vdF9hdXRoZW50aWNhdGVkJ1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxlQUFzQixrQkFBeUM7QUFDN0QsUUFBTSxTQUFTLE1BQU0sTUFBTSxJQUFJO0FBQy9CLE1BQUksQ0FBQyxRQUFRO0FBQ1gsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLEVBQUUsU0FBUyxJQUFJLE1BQU0sTUFBTSxNQUFNLENBQUMsUUFBUSxPQUFPLEdBQUc7QUFBQSxJQUN4RCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsRUFDVixDQUFDO0FBQ0QsU0FBTyxhQUFhLElBQUksa0JBQWtCO0FBQzVDO0FBNUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
