#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  CHANGELOG_URL,
  fetchAndStoreChangelog,
  getAllReleaseNotes,
  getStoredChangelog,
  init_releaseNotes
} from "./chunk-32FN4NML.mjs";
import "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/release-notes/release-notes.ts
function formatReleaseNotes(notes) {
  return notes.map(([version, notes2]) => {
    const header = `Version ${version}:`;
    const bulletPoints = notes2.map((note) => `\xB7 ${note}`).join("\n");
    return `${header}
${bulletPoints}`;
  }).join("\n\n");
}
async function call() {
  let freshNotes = [];
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout((rej) => rej(new Error("Timeout")), 500, reject);
    });
    await Promise.race([fetchAndStoreChangelog(), timeoutPromise]);
    freshNotes = getAllReleaseNotes(await getStoredChangelog());
  } catch {
  }
  if (freshNotes.length > 0) {
    return { type: "text", value: formatReleaseNotes(freshNotes) };
  }
  const cachedNotes = getAllReleaseNotes(await getStoredChangelog());
  if (cachedNotes.length > 0) {
    return { type: "text", value: formatReleaseNotes(cachedNotes) };
  }
  return {
    type: "text",
    value: `See the full changelog at: ${CHANGELOG_URL}`
  };
}
var init_release_notes = __esm({
  "src/commands/release-notes/release-notes.ts"() {
    init_releaseNotes();
  }
});
init_release_notes();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlbGVhc2Utbm90ZXMvcmVsZWFzZS1ub3Rlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBMb2NhbENvbW1hbmRSZXN1bHQgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHtcbiAgQ0hBTkdFTE9HX1VSTCxcbiAgZmV0Y2hBbmRTdG9yZUNoYW5nZWxvZyxcbiAgZ2V0QWxsUmVsZWFzZU5vdGVzLFxuICBnZXRTdG9yZWRDaGFuZ2Vsb2csXG59IGZyb20gJy4uLy4uL3V0aWxzL3JlbGVhc2VOb3Rlcy5qcydcblxuZnVuY3Rpb24gZm9ybWF0UmVsZWFzZU5vdGVzKG5vdGVzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmdbXV0+KTogc3RyaW5nIHtcbiAgcmV0dXJuIG5vdGVzXG4gICAgLm1hcCgoW3ZlcnNpb24sIG5vdGVzXSkgPT4ge1xuICAgICAgY29uc3QgaGVhZGVyID0gYFZlcnNpb24gJHt2ZXJzaW9ufTpgXG4gICAgICBjb25zdCBidWxsZXRQb2ludHMgPSBub3Rlcy5tYXAobm90ZSA9PiBgXHUwMEI3ICR7bm90ZX1gKS5qb2luKCdcXG4nKVxuICAgICAgcmV0dXJuIGAke2hlYWRlcn1cXG4ke2J1bGxldFBvaW50c31gXG4gICAgfSlcbiAgICAuam9pbignXFxuXFxuJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoKTogUHJvbWlzZTxMb2NhbENvbW1hbmRSZXN1bHQ+IHtcbiAgLy8gVHJ5IHRvIGZldGNoIHRoZSBsYXRlc3QgY2hhbmdlbG9nIHdpdGggYSA1MDBtcyB0aW1lb3V0XG4gIGxldCBmcmVzaE5vdGVzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmdbXV0+ID0gW11cblxuICB0cnkge1xuICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKF8sIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChyZWogPT4gcmVqKG5ldyBFcnJvcignVGltZW91dCcpKSwgNTAwLCByZWplY3QpXG4gICAgfSlcblxuICAgIGF3YWl0IFByb21pc2UucmFjZShbZmV0Y2hBbmRTdG9yZUNoYW5nZWxvZygpLCB0aW1lb3V0UHJvbWlzZV0pXG4gICAgZnJlc2hOb3RlcyA9IGdldEFsbFJlbGVhc2VOb3Rlcyhhd2FpdCBnZXRTdG9yZWRDaGFuZ2Vsb2coKSlcbiAgfSBjYXRjaCB7XG4gICAgLy8gRWl0aGVyIGZldGNoIGZhaWxlZCBvciB0aW1lZCBvdXQgLSBqdXN0IHVzZSBjYWNoZWQgbm90ZXNcbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgZnJlc2ggbm90ZXMgZnJvbSB0aGUgcXVpY2sgZmV0Y2gsIHVzZSB0aG9zZVxuICBpZiAoZnJlc2hOb3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogZm9ybWF0UmVsZWFzZU5vdGVzKGZyZXNoTm90ZXMpIH1cbiAgfVxuXG4gIC8vIE90aGVyd2lzZSBjaGVjayBjYWNoZWQgbm90ZXNcbiAgY29uc3QgY2FjaGVkTm90ZXMgPSBnZXRBbGxSZWxlYXNlTm90ZXMoYXdhaXQgZ2V0U3RvcmVkQ2hhbmdlbG9nKCkpXG4gIGlmIChjYWNoZWROb3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogZm9ybWF0UmVsZWFzZU5vdGVzKGNhY2hlZE5vdGVzKSB9XG4gIH1cblxuICAvLyBOb3RoaW5nIGF2YWlsYWJsZSwgc2hvdyBsaW5rXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlOiBgU2VlIHRoZSBmdWxsIGNoYW5nZWxvZyBhdDogJHtDSEFOR0VMT0dfVVJMfWAsXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxTQUFTLG1CQUFtQixPQUEwQztBQUNwRSxTQUFPLE1BQ0osSUFBSSxDQUFDLENBQUMsU0FBU0EsTUFBSyxNQUFNO0FBQ3pCLFVBQU0sU0FBUyxXQUFXLE9BQU87QUFDakMsVUFBTSxlQUFlQSxPQUFNLElBQUksVUFBUSxRQUFLLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSTtBQUM3RCxXQUFPLEdBQUcsTUFBTTtBQUFBLEVBQUssWUFBWTtBQUFBLEVBQ25DLENBQUMsRUFDQSxLQUFLLE1BQU07QUFDaEI7QUFFQSxlQUFzQixPQUFvQztBQUV4RCxNQUFJLGFBQXdDLENBQUM7QUFFN0MsTUFBSTtBQUNGLFVBQU0saUJBQWlCLElBQUksUUFBYyxDQUFDLEdBQUcsV0FBVztBQUN0RCxpQkFBVyxTQUFPLElBQUksSUFBSSxNQUFNLFNBQVMsQ0FBQyxHQUFHLEtBQUssTUFBTTtBQUFBLElBQzFELENBQUM7QUFFRCxVQUFNLFFBQVEsS0FBSyxDQUFDLHVCQUF1QixHQUFHLGNBQWMsQ0FBQztBQUM3RCxpQkFBYSxtQkFBbUIsTUFBTSxtQkFBbUIsQ0FBQztBQUFBLEVBQzVELFFBQVE7QUFBQSxFQUVSO0FBR0EsTUFBSSxXQUFXLFNBQVMsR0FBRztBQUN6QixXQUFPLEVBQUUsTUFBTSxRQUFRLE9BQU8sbUJBQW1CLFVBQVUsRUFBRTtBQUFBLEVBQy9EO0FBR0EsUUFBTSxjQUFjLG1CQUFtQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE1BQUksWUFBWSxTQUFTLEdBQUc7QUFDMUIsV0FBTyxFQUFFLE1BQU0sUUFBUSxPQUFPLG1CQUFtQixXQUFXLEVBQUU7QUFBQSxFQUNoRTtBQUdBLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU8sOEJBQThCLGFBQWE7QUFBQSxFQUNwRDtBQUNGO0FBakRBO0FBQUE7QUFDQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIm5vdGVzIl0KfQo=
