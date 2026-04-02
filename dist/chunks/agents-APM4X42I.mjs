#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  AGENT_SOURCE_GROUPS,
  compareAgentsByName,
  getOverrideSourceLabel,
  init_agentDisplay,
  resolveAgentModelDisplay,
  resolveAgentOverrides
} from "./chunk-Z5T6MVYH.mjs";
import {
  getActiveAgentsFromList,
  getAgentDefinitionsWithOverrides,
  init_loadAgentsDir
} from "./chunk-BQ2W5UUK.mjs";
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
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
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
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
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
import "./chunk-O5PZ3G6I.mjs";

// src/cli/handlers/agents.ts
init_agentDisplay();
init_loadAgentsDir();
init_cwd();
function formatAgent(agent) {
  const model = resolveAgentModelDisplay(agent);
  const parts = [agent.agentType];
  if (model) {
    parts.push(model);
  }
  if (agent.memory) {
    parts.push(`${agent.memory} memory`);
  }
  return parts.join(" \xB7 ");
}
async function agentsHandler() {
  const cwd = getCwd();
  const { allAgents } = await getAgentDefinitionsWithOverrides(cwd);
  const activeAgents = getActiveAgentsFromList(allAgents);
  const resolvedAgents = resolveAgentOverrides(allAgents, activeAgents);
  const lines = [];
  let totalActive = 0;
  for (const { label, source } of AGENT_SOURCE_GROUPS) {
    const groupAgents = resolvedAgents.filter((a) => a.source === source).sort(compareAgentsByName);
    if (groupAgents.length === 0) continue;
    lines.push(`${label}:`);
    for (const agent of groupAgents) {
      if (agent.overriddenBy) {
        const winnerSource = getOverrideSourceLabel(agent.overriddenBy);
        lines.push(`  (shadowed by ${winnerSource}) ${formatAgent(agent)}`);
      } else {
        lines.push(`  ${formatAgent(agent)}`);
        totalActive++;
      }
    }
    lines.push("");
  }
  if (lines.length === 0) {
    console.log("No agents found.");
  } else {
    console.log(`${totalActive} active agents
`);
    console.log(lines.join("\n").trimEnd());
  }
}
export {
  agentsHandler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9oYW5kbGVycy9hZ2VudHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQWdlbnRzIHN1YmNvbW1hbmQgaGFuZGxlciBcdTIwMTQgcHJpbnRzIHRoZSBsaXN0IG9mIGNvbmZpZ3VyZWQgYWdlbnRzLlxuICogRHluYW1pY2FsbHkgaW1wb3J0ZWQgb25seSB3aGVuIGBjbGF1ZGUgYWdlbnRzYCBydW5zLlxuICovXG5cbmltcG9ydCB7XG4gIEFHRU5UX1NPVVJDRV9HUk9VUFMsXG4gIGNvbXBhcmVBZ2VudHNCeU5hbWUsXG4gIGdldE92ZXJyaWRlU291cmNlTGFiZWwsXG4gIHR5cGUgUmVzb2x2ZWRBZ2VudCxcbiAgcmVzb2x2ZUFnZW50TW9kZWxEaXNwbGF5LFxuICByZXNvbHZlQWdlbnRPdmVycmlkZXMsXG59IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudERpc3BsYXkuanMnXG5pbXBvcnQge1xuICBnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdCxcbiAgZ2V0QWdlbnREZWZpbml0aW9uc1dpdGhPdmVycmlkZXMsXG59IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi4vLi4vdXRpbHMvY3dkLmpzJ1xuXG5mdW5jdGlvbiBmb3JtYXRBZ2VudChhZ2VudDogUmVzb2x2ZWRBZ2VudCk6IHN0cmluZyB7XG4gIGNvbnN0IG1vZGVsID0gcmVzb2x2ZUFnZW50TW9kZWxEaXNwbGF5KGFnZW50KVxuICBjb25zdCBwYXJ0cyA9IFthZ2VudC5hZ2VudFR5cGVdXG4gIGlmIChtb2RlbCkge1xuICAgIHBhcnRzLnB1c2gobW9kZWwpXG4gIH1cbiAgaWYgKGFnZW50Lm1lbW9yeSkge1xuICAgIHBhcnRzLnB1c2goYCR7YWdlbnQubWVtb3J5fSBtZW1vcnlgKVxuICB9XG4gIHJldHVybiBwYXJ0cy5qb2luKCcgXHUwMEI3ICcpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZ2VudHNIYW5kbGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBjd2QgPSBnZXRDd2QoKVxuICBjb25zdCB7IGFsbEFnZW50cyB9ID0gYXdhaXQgZ2V0QWdlbnREZWZpbml0aW9uc1dpdGhPdmVycmlkZXMoY3dkKVxuICBjb25zdCBhY3RpdmVBZ2VudHMgPSBnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdChhbGxBZ2VudHMpXG4gIGNvbnN0IHJlc29sdmVkQWdlbnRzID0gcmVzb2x2ZUFnZW50T3ZlcnJpZGVzKGFsbEFnZW50cywgYWN0aXZlQWdlbnRzKVxuXG4gIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gIGxldCB0b3RhbEFjdGl2ZSA9IDBcblxuICBmb3IgKGNvbnN0IHsgbGFiZWwsIHNvdXJjZSB9IG9mIEFHRU5UX1NPVVJDRV9HUk9VUFMpIHtcbiAgICBjb25zdCBncm91cEFnZW50cyA9IHJlc29sdmVkQWdlbnRzXG4gICAgICAuZmlsdGVyKGEgPT4gYS5zb3VyY2UgPT09IHNvdXJjZSlcbiAgICAgIC5zb3J0KGNvbXBhcmVBZ2VudHNCeU5hbWUpXG5cbiAgICBpZiAoZ3JvdXBBZ2VudHMubGVuZ3RoID09PSAwKSBjb250aW51ZVxuXG4gICAgbGluZXMucHVzaChgJHtsYWJlbH06YClcbiAgICBmb3IgKGNvbnN0IGFnZW50IG9mIGdyb3VwQWdlbnRzKSB7XG4gICAgICBpZiAoYWdlbnQub3ZlcnJpZGRlbkJ5KSB7XG4gICAgICAgIGNvbnN0IHdpbm5lclNvdXJjZSA9IGdldE92ZXJyaWRlU291cmNlTGFiZWwoYWdlbnQub3ZlcnJpZGRlbkJ5KVxuICAgICAgICBsaW5lcy5wdXNoKGAgIChzaGFkb3dlZCBieSAke3dpbm5lclNvdXJjZX0pICR7Zm9ybWF0QWdlbnQoYWdlbnQpfWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcy5wdXNoKGAgICR7Zm9ybWF0QWdlbnQoYWdlbnQpfWApXG4gICAgICAgIHRvdGFsQWN0aXZlKytcbiAgICAgIH1cbiAgICB9XG4gICAgbGluZXMucHVzaCgnJylcbiAgfVxuXG4gIGlmIChsaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2coJ05vIGFnZW50cyBmb3VuZC4nKVxuICB9IGVsc2Uge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhgJHt0b3RhbEFjdGl2ZX0gYWN0aXZlIGFnZW50c1xcbmApXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKGxpbmVzLmpvaW4oJ1xcbicpLnRyaW1FbmQoKSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFRQTtBQUlBO0FBRUEsU0FBUyxZQUFZLE9BQThCO0FBQ2pELFFBQU0sUUFBUSx5QkFBeUIsS0FBSztBQUM1QyxRQUFNLFFBQVEsQ0FBQyxNQUFNLFNBQVM7QUFDOUIsTUFBSSxPQUFPO0FBQ1QsVUFBTSxLQUFLLEtBQUs7QUFBQSxFQUNsQjtBQUNBLE1BQUksTUFBTSxRQUFRO0FBQ2hCLFVBQU0sS0FBSyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQUEsRUFDckM7QUFDQSxTQUFPLE1BQU0sS0FBSyxRQUFLO0FBQ3pCO0FBRUEsZUFBc0IsZ0JBQStCO0FBQ25ELFFBQU0sTUFBTSxPQUFPO0FBQ25CLFFBQU0sRUFBRSxVQUFVLElBQUksTUFBTSxpQ0FBaUMsR0FBRztBQUNoRSxRQUFNLGVBQWUsd0JBQXdCLFNBQVM7QUFDdEQsUUFBTSxpQkFBaUIsc0JBQXNCLFdBQVcsWUFBWTtBQUVwRSxRQUFNLFFBQWtCLENBQUM7QUFDekIsTUFBSSxjQUFjO0FBRWxCLGFBQVcsRUFBRSxPQUFPLE9BQU8sS0FBSyxxQkFBcUI7QUFDbkQsVUFBTSxjQUFjLGVBQ2pCLE9BQU8sT0FBSyxFQUFFLFdBQVcsTUFBTSxFQUMvQixLQUFLLG1CQUFtQjtBQUUzQixRQUFJLFlBQVksV0FBVyxFQUFHO0FBRTlCLFVBQU0sS0FBSyxHQUFHLEtBQUssR0FBRztBQUN0QixlQUFXLFNBQVMsYUFBYTtBQUMvQixVQUFJLE1BQU0sY0FBYztBQUN0QixjQUFNLGVBQWUsdUJBQXVCLE1BQU0sWUFBWTtBQUM5RCxjQUFNLEtBQUssa0JBQWtCLFlBQVksS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO0FBQUEsTUFDcEUsT0FBTztBQUNMLGNBQU0sS0FBSyxLQUFLLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDcEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLFVBQU0sS0FBSyxFQUFFO0FBQUEsRUFDZjtBQUVBLE1BQUksTUFBTSxXQUFXLEdBQUc7QUFFdEIsWUFBUSxJQUFJLGtCQUFrQjtBQUFBLEVBQ2hDLE9BQU87QUFFTCxZQUFRLElBQUksR0FBRyxXQUFXO0FBQUEsQ0FBa0I7QUFFNUMsWUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUUsUUFBUSxDQUFDO0FBQUEsRUFDeEM7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
