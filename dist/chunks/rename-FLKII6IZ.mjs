#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  generateSessionName,
  init_generateSessionName
} from "./chunk-FBWGG2RV.mjs";
import "./chunk-TUS5EHIO.mjs";
import {
  getBridgeBaseUrlOverride,
  getBridgeTokenOverride,
  init_bridgeConfig
} from "./chunk-HWCIXFFE.mjs";
import {
  getMessagesAfterCompactBoundary,
  getTranscriptPath,
  init_messages2 as init_messages,
  init_sessionStorage,
  saveAgentName,
  saveCustomTitle
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
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
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  init_teammate,
  isTeammate
} from "./chunk-GC6TKYZ3.mjs";
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
import "./chunk-ZAYB3WZV.mjs";
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

// src/commands/rename/rename.ts
async function call(onDone, context, args) {
  if (isTeammate()) {
    onDone(
      "Cannot rename: This session is a swarm teammate. Teammate names are set by the team leader.",
      { display: "system" }
    );
    return null;
  }
  let newName;
  if (!args || args.trim() === "") {
    const generated = await generateSessionName(
      getMessagesAfterCompactBoundary(context.messages),
      context.abortController.signal
    );
    if (!generated) {
      onDone(
        "Could not generate a name: no conversation context yet. Usage: /rename <name>",
        { display: "system" }
      );
      return null;
    }
    newName = generated;
  } else {
    newName = args.trim();
  }
  const sessionId = getSessionId();
  const fullPath = getTranscriptPath();
  await saveCustomTitle(sessionId, newName, fullPath);
  const appState = context.getAppState();
  const bridgeSessionId = appState.replBridgeSessionId;
  if (bridgeSessionId) {
    const tokenOverride = getBridgeTokenOverride();
    void import("./createSession-T2OW74B7.mjs").then(
      ({ updateBridgeSessionTitle }) => updateBridgeSessionTitle(bridgeSessionId, newName, {
        baseUrl: getBridgeBaseUrlOverride(),
        getAccessToken: tokenOverride ? () => tokenOverride : void 0
      }).catch(() => {
      })
    );
  }
  await saveAgentName(sessionId, newName, fullPath);
  context.setAppState((prev) => ({
    ...prev,
    standaloneAgentContext: {
      ...prev.standaloneAgentContext,
      name: newName
    }
  }));
  onDone(`Session renamed to: ${newName}`, { display: "system" });
  return null;
}
var init_rename = __esm({
  "src/commands/rename/rename.ts"() {
    init_state();
    init_bridgeConfig();
    init_messages();
    init_sessionStorage();
    init_teammate();
    init_generateSessionName();
  }
});
init_rename();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlbmFtZS9yZW5hbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7XG4gIGdldEJyaWRnZUJhc2VVcmxPdmVycmlkZSxcbiAgZ2V0QnJpZGdlVG9rZW5PdmVycmlkZSxcbn0gZnJvbSAnLi4vLi4vYnJpZGdlL2JyaWRnZUNvbmZpZy5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFVzZUNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG59IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQge1xuICBnZXRUcmFuc2NyaXB0UGF0aCxcbiAgc2F2ZUFnZW50TmFtZSxcbiAgc2F2ZUN1c3RvbVRpdGxlLFxufSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IGlzVGVhbW1hdGUgfSBmcm9tICcuLi8uLi91dGlscy90ZWFtbWF0ZS5qcydcbmltcG9ydCB7IGdlbmVyYXRlU2Vzc2lvbk5hbWUgfSBmcm9tICcuL2dlbmVyYXRlU2Vzc2lvbk5hbWUuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBvbkRvbmU6IExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbiAgY29udGV4dDogVG9vbFVzZUNvbnRleHQgJiBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBhcmdzOiBzdHJpbmcsXG4pOiBQcm9taXNlPG51bGw+IHtcbiAgLy8gUHJldmVudCB0ZWFtbWF0ZXMgZnJvbSByZW5hbWluZyAtIHRoZWlyIG5hbWVzIGFyZSBzZXQgYnkgdGVhbSBsZWFkZXJcbiAgaWYgKGlzVGVhbW1hdGUoKSkge1xuICAgIG9uRG9uZShcbiAgICAgICdDYW5ub3QgcmVuYW1lOiBUaGlzIHNlc3Npb24gaXMgYSBzd2FybSB0ZWFtbWF0ZS4gVGVhbW1hdGUgbmFtZXMgYXJlIHNldCBieSB0aGUgdGVhbSBsZWFkZXIuJyxcbiAgICAgIHsgZGlzcGxheTogJ3N5c3RlbScgfSxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxldCBuZXdOYW1lOiBzdHJpbmdcbiAgaWYgKCFhcmdzIHx8IGFyZ3MudHJpbSgpID09PSAnJykge1xuICAgIGNvbnN0IGdlbmVyYXRlZCA9IGF3YWl0IGdlbmVyYXRlU2Vzc2lvbk5hbWUoXG4gICAgICBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5KGNvbnRleHQubWVzc2FnZXMpLFxuICAgICAgY29udGV4dC5hYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgIClcbiAgICBpZiAoIWdlbmVyYXRlZCkge1xuICAgICAgb25Eb25lKFxuICAgICAgICAnQ291bGQgbm90IGdlbmVyYXRlIGEgbmFtZTogbm8gY29udmVyc2F0aW9uIGNvbnRleHQgeWV0LiBVc2FnZTogL3JlbmFtZSA8bmFtZT4nLFxuICAgICAgICB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0sXG4gICAgICApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBuZXdOYW1lID0gZ2VuZXJhdGVkXG4gIH0gZWxzZSB7XG4gICAgbmV3TmFtZSA9IGFyZ3MudHJpbSgpXG4gIH1cblxuICBjb25zdCBzZXNzaW9uSWQgPSBnZXRTZXNzaW9uSWQoKSBhcyBVVUlEXG4gIGNvbnN0IGZ1bGxQYXRoID0gZ2V0VHJhbnNjcmlwdFBhdGgoKVxuXG4gIC8vIEFsd2F5cyBzYXZlIHRoZSBjdXN0b20gdGl0bGUgKHNlc3Npb24gbmFtZSlcbiAgYXdhaXQgc2F2ZUN1c3RvbVRpdGxlKHNlc3Npb25JZCwgbmV3TmFtZSwgZnVsbFBhdGgpXG5cbiAgLy8gU3luYyB0aXRsZSB0byBicmlkZ2Ugc2Vzc2lvbiBvbiBjbGF1ZGUuYWkvY29kZSAoYmVzdC1lZmZvcnQsIG5vbi1ibG9ja2luZykuXG4gIC8vIHYyIGVudi1sZXNzIGJyaWRnZSBzdG9yZXMgY3NlXyogaW4gcmVwbEJyaWRnZVNlc3Npb25JZCBcdTIwMTRcbiAgLy8gdXBkYXRlQnJpZGdlU2Vzc2lvblRpdGxlIHJldGFncyBpbnRlcm5hbGx5IGZvciB0aGUgY29tcGF0IGVuZHBvaW50LlxuICBjb25zdCBhcHBTdGF0ZSA9IGNvbnRleHQuZ2V0QXBwU3RhdGUoKVxuICBjb25zdCBicmlkZ2VTZXNzaW9uSWQgPSBhcHBTdGF0ZS5yZXBsQnJpZGdlU2Vzc2lvbklkXG4gIGlmIChicmlkZ2VTZXNzaW9uSWQpIHtcbiAgICBjb25zdCB0b2tlbk92ZXJyaWRlID0gZ2V0QnJpZGdlVG9rZW5PdmVycmlkZSgpXG4gICAgdm9pZCBpbXBvcnQoJy4uLy4uL2JyaWRnZS9jcmVhdGVTZXNzaW9uLmpzJykudGhlbihcbiAgICAgICh7IHVwZGF0ZUJyaWRnZVNlc3Npb25UaXRsZSB9KSA9PlxuICAgICAgICB1cGRhdGVCcmlkZ2VTZXNzaW9uVGl0bGUoYnJpZGdlU2Vzc2lvbklkLCBuZXdOYW1lLCB7XG4gICAgICAgICAgYmFzZVVybDogZ2V0QnJpZGdlQmFzZVVybE92ZXJyaWRlKCksXG4gICAgICAgICAgZ2V0QWNjZXNzVG9rZW46IHRva2VuT3ZlcnJpZGUgPyAoKSA9PiB0b2tlbk92ZXJyaWRlIDogdW5kZWZpbmVkLFxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7fSksXG4gICAgKVxuICB9XG5cbiAgLy8gQWxzbyBwZXJzaXN0IGFzIHRoZSBzZXNzaW9uJ3MgYWdlbnQgbmFtZSBmb3IgcHJvbXB0LWJhciBkaXNwbGF5XG4gIGF3YWl0IHNhdmVBZ2VudE5hbWUoc2Vzc2lvbklkLCBuZXdOYW1lLCBmdWxsUGF0aClcbiAgY29udGV4dC5zZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgLi4ucHJldixcbiAgICBzdGFuZGFsb25lQWdlbnRDb250ZXh0OiB7XG4gICAgICAuLi5wcmV2LnN0YW5kYWxvbmVBZ2VudENvbnRleHQsXG4gICAgICBuYW1lOiBuZXdOYW1lLFxuICAgIH0sXG4gIH0pKVxuXG4gIG9uRG9uZShgU2Vzc2lvbiByZW5hbWVkIHRvOiAke25ld05hbWV9YCwgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICByZXR1cm4gbnVsbFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxlQUFzQixLQUNwQixRQUNBLFNBQ0EsTUFDZTtBQUVmLE1BQUksV0FBVyxHQUFHO0FBQ2hCO0FBQUEsTUFDRTtBQUFBLE1BQ0EsRUFBRSxTQUFTLFNBQVM7QUFBQSxJQUN0QjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBRUEsTUFBSTtBQUNKLE1BQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxNQUFNLElBQUk7QUFDL0IsVUFBTSxZQUFZLE1BQU07QUFBQSxNQUN0QixnQ0FBZ0MsUUFBUSxRQUFRO0FBQUEsTUFDaEQsUUFBUSxnQkFBZ0I7QUFBQSxJQUMxQjtBQUNBLFFBQUksQ0FBQyxXQUFXO0FBQ2Q7QUFBQSxRQUNFO0FBQUEsUUFDQSxFQUFFLFNBQVMsU0FBUztBQUFBLE1BQ3RCO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFDQSxjQUFVO0FBQUEsRUFDWixPQUFPO0FBQ0wsY0FBVSxLQUFLLEtBQUs7QUFBQSxFQUN0QjtBQUVBLFFBQU0sWUFBWSxhQUFhO0FBQy9CLFFBQU0sV0FBVyxrQkFBa0I7QUFHbkMsUUFBTSxnQkFBZ0IsV0FBVyxTQUFTLFFBQVE7QUFLbEQsUUFBTSxXQUFXLFFBQVEsWUFBWTtBQUNyQyxRQUFNLGtCQUFrQixTQUFTO0FBQ2pDLE1BQUksaUJBQWlCO0FBQ25CLFVBQU0sZ0JBQWdCLHVCQUF1QjtBQUM3QyxTQUFLLE9BQU8sOEJBQStCLEVBQUU7QUFBQSxNQUMzQyxDQUFDLEVBQUUseUJBQXlCLE1BQzFCLHlCQUF5QixpQkFBaUIsU0FBUztBQUFBLFFBQ2pELFNBQVMseUJBQXlCO0FBQUEsUUFDbEMsZ0JBQWdCLGdCQUFnQixNQUFNLGdCQUFnQjtBQUFBLE1BQ3hELENBQUMsRUFBRSxNQUFNLE1BQU07QUFBQSxNQUFDLENBQUM7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFHQSxRQUFNLGNBQWMsV0FBVyxTQUFTLFFBQVE7QUFDaEQsVUFBUSxZQUFZLFdBQVM7QUFBQSxJQUMzQixHQUFHO0FBQUEsSUFDSCx3QkFBd0I7QUFBQSxNQUN0QixHQUFHLEtBQUs7QUFBQSxNQUNSLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRixFQUFFO0FBRUYsU0FBTyx1QkFBdUIsT0FBTyxJQUFJLEVBQUUsU0FBUyxTQUFTLENBQUM7QUFDOUQsU0FBTztBQUNUO0FBdEZBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
