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
} from "./chunk-3YFDS47A.mjs";
import {
  getActiveAgentsFromList,
  getAgentDefinitionsWithOverrides,
  init_loadAgentsDir
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
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
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
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
