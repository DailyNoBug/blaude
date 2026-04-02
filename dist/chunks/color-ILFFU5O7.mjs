#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  AGENT_COLORS,
  getTranscriptPath,
  init_agentColorManager,
  init_sessionStorage,
  saveAgentColor
} from "./chunk-5INIV6TQ.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-7RY6L7JT.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import {
  init_teammate,
  isTeammate
} from "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
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
import "./chunk-FOFMX5GB.mjs";
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
import {
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/color/color.ts
async function call(onDone, context, args) {
  if (isTeammate()) {
    onDone(
      "Cannot set color: This session is a swarm teammate. Teammate colors are assigned by the team leader.",
      { display: "system" }
    );
    return null;
  }
  if (!args || args.trim() === "") {
    const colorList = AGENT_COLORS.join(", ");
    onDone(`Please provide a color. Available colors: ${colorList}, default`, {
      display: "system"
    });
    return null;
  }
  const colorArg = args.trim().toLowerCase();
  if (RESET_ALIASES.includes(colorArg)) {
    const sessionId2 = getSessionId();
    const fullPath2 = getTranscriptPath();
    await saveAgentColor(sessionId2, "default", fullPath2);
    context.setAppState((prev) => ({
      ...prev,
      standaloneAgentContext: {
        ...prev.standaloneAgentContext,
        name: prev.standaloneAgentContext?.name ?? "",
        color: void 0
      }
    }));
    onDone("Session color reset to default", { display: "system" });
    return null;
  }
  if (!AGENT_COLORS.includes(colorArg)) {
    const colorList = AGENT_COLORS.join(", ");
    onDone(
      `Invalid color "${colorArg}". Available colors: ${colorList}, default`,
      { display: "system" }
    );
    return null;
  }
  const sessionId = getSessionId();
  const fullPath = getTranscriptPath();
  await saveAgentColor(sessionId, colorArg, fullPath);
  context.setAppState((prev) => ({
    ...prev,
    standaloneAgentContext: {
      ...prev.standaloneAgentContext,
      name: prev.standaloneAgentContext?.name ?? "",
      color: colorArg
    }
  }));
  onDone(`Session color set to: ${colorArg}`, { display: "system" });
  return null;
}
var RESET_ALIASES;
var init_color = __esm({
  "src/commands/color/color.ts"() {
    init_state();
    init_agentColorManager();
    init_sessionStorage();
    init_teammate();
    RESET_ALIASES = ["default", "reset", "none", "gray", "grey"];
  }
});
init_color();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2NvbG9yL2NvbG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IFVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBnZXRTZXNzaW9uSWQgfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7XG4gIEFHRU5UX0NPTE9SUyxcbiAgdHlwZSBBZ2VudENvbG9yTmFtZSxcbn0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50Q29sb3JNYW5hZ2VyLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG59IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQge1xuICBnZXRUcmFuc2NyaXB0UGF0aCxcbiAgc2F2ZUFnZW50Q29sb3IsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsgaXNUZWFtbWF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RlYW1tYXRlLmpzJ1xuXG5jb25zdCBSRVNFVF9BTElBU0VTID0gWydkZWZhdWx0JywgJ3Jlc2V0JywgJ25vbmUnLCAnZ3JheScsICdncmV5J10gYXMgY29uc3RcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBjb250ZXh0OiBUb29sVXNlQ29udGV4dCAmIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIGFyZ3M6IHN0cmluZyxcbik6IFByb21pc2U8bnVsbD4ge1xuICAvLyBUZWFtbWF0ZXMgY2Fubm90IHNldCB0aGVpciBvd24gY29sb3JcbiAgaWYgKGlzVGVhbW1hdGUoKSkge1xuICAgIG9uRG9uZShcbiAgICAgICdDYW5ub3Qgc2V0IGNvbG9yOiBUaGlzIHNlc3Npb24gaXMgYSBzd2FybSB0ZWFtbWF0ZS4gVGVhbW1hdGUgY29sb3JzIGFyZSBhc3NpZ25lZCBieSB0aGUgdGVhbSBsZWFkZXIuJyxcbiAgICAgIHsgZGlzcGxheTogJ3N5c3RlbScgfSxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICghYXJncyB8fCBhcmdzLnRyaW0oKSA9PT0gJycpIHtcbiAgICBjb25zdCBjb2xvckxpc3QgPSBBR0VOVF9DT0xPUlMuam9pbignLCAnKVxuICAgIG9uRG9uZShgUGxlYXNlIHByb3ZpZGUgYSBjb2xvci4gQXZhaWxhYmxlIGNvbG9yczogJHtjb2xvckxpc3R9LCBkZWZhdWx0YCwge1xuICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgfSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgY29sb3JBcmcgPSBhcmdzLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG5cbiAgLy8gSGFuZGxlIHJlc2V0IHRvIGRlZmF1bHQgKGdyYXkpXG4gIGlmIChSRVNFVF9BTElBU0VTLmluY2x1ZGVzKGNvbG9yQXJnIGFzICh0eXBlb2YgUkVTRVRfQUxJQVNFUylbbnVtYmVyXSkpIHtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBnZXRTZXNzaW9uSWQoKSBhcyBVVUlEXG4gICAgY29uc3QgZnVsbFBhdGggPSBnZXRUcmFuc2NyaXB0UGF0aCgpXG5cbiAgICAvLyBVc2UgXCJkZWZhdWx0XCIgc2VudGluZWwgKG5vdCBlbXB0eSBzdHJpbmcpIHNvIHRydXRoaW5lc3MgZ3VhcmRzXG4gICAgLy8gaW4gc2Vzc2lvblN0b3JhZ2UudHMgcGVyc2lzdCB0aGUgcmVzZXQgYWNyb3NzIHNlc3Npb24gcmVzdGFydHNcbiAgICBhd2FpdCBzYXZlQWdlbnRDb2xvcihzZXNzaW9uSWQsICdkZWZhdWx0JywgZnVsbFBhdGgpXG5cbiAgICBjb250ZXh0LnNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBzdGFuZGFsb25lQWdlbnRDb250ZXh0OiB7XG4gICAgICAgIC4uLnByZXYuc3RhbmRhbG9uZUFnZW50Q29udGV4dCxcbiAgICAgICAgbmFtZTogcHJldi5zdGFuZGFsb25lQWdlbnRDb250ZXh0Py5uYW1lID8/ICcnLFxuICAgICAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9KSlcblxuICAgIG9uRG9uZSgnU2Vzc2lvbiBjb2xvciByZXNldCB0byBkZWZhdWx0JywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoIUFHRU5UX0NPTE9SUy5pbmNsdWRlcyhjb2xvckFyZyBhcyBBZ2VudENvbG9yTmFtZSkpIHtcbiAgICBjb25zdCBjb2xvckxpc3QgPSBBR0VOVF9DT0xPUlMuam9pbignLCAnKVxuICAgIG9uRG9uZShcbiAgICAgIGBJbnZhbGlkIGNvbG9yIFwiJHtjb2xvckFyZ31cIi4gQXZhaWxhYmxlIGNvbG9yczogJHtjb2xvckxpc3R9LCBkZWZhdWx0YCxcbiAgICAgIHsgZGlzcGxheTogJ3N5c3RlbScgfSxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpIGFzIFVVSURcbiAgY29uc3QgZnVsbFBhdGggPSBnZXRUcmFuc2NyaXB0UGF0aCgpXG5cbiAgLy8gU2F2ZSB0byB0cmFuc2NyaXB0IGZvciBwZXJzaXN0ZW5jZSBhY3Jvc3Mgc2Vzc2lvbnNcbiAgYXdhaXQgc2F2ZUFnZW50Q29sb3Ioc2Vzc2lvbklkLCBjb2xvckFyZywgZnVsbFBhdGgpXG5cbiAgLy8gVXBkYXRlIEFwcFN0YXRlIGZvciBpbW1lZGlhdGUgZWZmZWN0XG4gIGNvbnRleHQuc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgIC4uLnByZXYsXG4gICAgc3RhbmRhbG9uZUFnZW50Q29udGV4dDoge1xuICAgICAgLi4ucHJldi5zdGFuZGFsb25lQWdlbnRDb250ZXh0LFxuICAgICAgbmFtZTogcHJldi5zdGFuZGFsb25lQWdlbnRDb250ZXh0Py5uYW1lID8/ICcnLFxuICAgICAgY29sb3I6IGNvbG9yQXJnIGFzIEFnZW50Q29sb3JOYW1lLFxuICAgIH0sXG4gIH0pKVxuXG4gIG9uRG9uZShgU2Vzc2lvbiBjb2xvciBzZXQgdG86ICR7Y29sb3JBcmd9YCwgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICByZXR1cm4gbnVsbFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsZUFBc0IsS0FDcEIsUUFDQSxTQUNBLE1BQ2U7QUFFZixNQUFJLFdBQVcsR0FBRztBQUNoQjtBQUFBLE1BQ0U7QUFBQSxNQUNBLEVBQUUsU0FBUyxTQUFTO0FBQUEsSUFDdEI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxNQUFNLElBQUk7QUFDL0IsVUFBTSxZQUFZLGFBQWEsS0FBSyxJQUFJO0FBQ3hDLFdBQU8sNkNBQTZDLFNBQVMsYUFBYTtBQUFBLE1BQ3hFLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFDRCxXQUFPO0FBQUEsRUFDVDtBQUVBLFFBQU0sV0FBVyxLQUFLLEtBQUssRUFBRSxZQUFZO0FBR3pDLE1BQUksY0FBYyxTQUFTLFFBQTBDLEdBQUc7QUFDdEUsVUFBTUEsYUFBWSxhQUFhO0FBQy9CLFVBQU1DLFlBQVcsa0JBQWtCO0FBSW5DLFVBQU0sZUFBZUQsWUFBVyxXQUFXQyxTQUFRO0FBRW5ELFlBQVEsWUFBWSxXQUFTO0FBQUEsTUFDM0IsR0FBRztBQUFBLE1BQ0gsd0JBQXdCO0FBQUEsUUFDdEIsR0FBRyxLQUFLO0FBQUEsUUFDUixNQUFNLEtBQUssd0JBQXdCLFFBQVE7QUFBQSxRQUMzQyxPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0YsRUFBRTtBQUVGLFdBQU8sa0NBQWtDLEVBQUUsU0FBUyxTQUFTLENBQUM7QUFDOUQsV0FBTztBQUFBLEVBQ1Q7QUFFQSxNQUFJLENBQUMsYUFBYSxTQUFTLFFBQTBCLEdBQUc7QUFDdEQsVUFBTSxZQUFZLGFBQWEsS0FBSyxJQUFJO0FBQ3hDO0FBQUEsTUFDRSxrQkFBa0IsUUFBUSx3QkFBd0IsU0FBUztBQUFBLE1BQzNELEVBQUUsU0FBUyxTQUFTO0FBQUEsSUFDdEI7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUVBLFFBQU0sWUFBWSxhQUFhO0FBQy9CLFFBQU0sV0FBVyxrQkFBa0I7QUFHbkMsUUFBTSxlQUFlLFdBQVcsVUFBVSxRQUFRO0FBR2xELFVBQVEsWUFBWSxXQUFTO0FBQUEsSUFDM0IsR0FBRztBQUFBLElBQ0gsd0JBQXdCO0FBQUEsTUFDdEIsR0FBRyxLQUFLO0FBQUEsTUFDUixNQUFNLEtBQUssd0JBQXdCLFFBQVE7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsRUFBRTtBQUVGLFNBQU8seUJBQXlCLFFBQVEsSUFBSSxFQUFFLFNBQVMsU0FBUyxDQUFDO0FBQ2pFLFNBQU87QUFDVDtBQTVGQSxJQWlCTTtBQWpCTjtBQUFBO0FBQ0E7QUFFQTtBQVFBO0FBSUE7QUFFQSxJQUFNLGdCQUFnQixDQUFDLFdBQVcsU0FBUyxRQUFRLFFBQVEsTUFBTTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInNlc3Npb25JZCIsICJmdWxsUGF0aCJdCn0K
