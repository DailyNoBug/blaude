#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-DMI3EUWL.mjs";
import {
  createAbortController,
  createAssistantMessage,
  getDefaultAppState,
  getErrorParts,
  getTools,
  hasPermissionsToUseTool,
  init_AppStateStore,
  init_Shell,
  init_abortController,
  init_messages2 as init_messages,
  init_permissions,
  init_review,
  init_toolErrors,
  init_tools2 as init_tools,
  init_zodToJsonSchema,
  review_default,
  setCwd,
  zodToJsonSchema
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import {
  createFileStateCacheWithSizeLimit,
  init_fileStateCache
} from "./chunk-GYT5IJSH.mjs";
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
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Server,
  init_server,
  init_types
} from "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import {
  findToolByName,
  getEmptyToolPermissionContext,
  init_Tool
} from "./chunk-X6KULBXG.mjs";
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
import {
  getMainLoopModel,
  init_model
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
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
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/entrypoints/mcp.ts
init_server();
init_stdio();
init_types();
init_AppStateStore();
init_review();
init_Tool();
init_tools();
init_abortController();
init_fileStateCache();
init_log();
init_messages();
init_model();
init_permissions();
init_Shell();
init_slowOperations();
init_toolErrors();
init_zodToJsonSchema();
var MCP_COMMANDS = [review_default];
async function startMCPServer(cwd, debug, verbose) {
  const READ_FILE_STATE_CACHE_SIZE = 100;
  const readFileStateCache = createFileStateCacheWithSizeLimit(
    READ_FILE_STATE_CACHE_SIZE
  );
  setCwd(cwd);
  const server = new Server(
    {
      name: "claude/tengu",
      version: MACRO.VERSION
    },
    {
      capabilities: {
        tools: {}
      }
    }
  );
  server.setRequestHandler(
    ListToolsRequestSchema,
    async () => {
      const toolPermissionContext = getEmptyToolPermissionContext();
      const tools = getTools(toolPermissionContext);
      return {
        tools: await Promise.all(
          tools.map(async (tool) => {
            let outputSchema;
            if (tool.outputSchema) {
              const convertedSchema = zodToJsonSchema(tool.outputSchema);
              if (typeof convertedSchema === "object" && convertedSchema !== null && "type" in convertedSchema && convertedSchema.type === "object") {
                outputSchema = convertedSchema;
              }
            }
            return {
              ...tool,
              description: await tool.prompt({
                getToolPermissionContext: async () => toolPermissionContext,
                tools,
                agents: []
              }),
              inputSchema: zodToJsonSchema(tool.inputSchema),
              outputSchema
            };
          })
        )
      };
    }
  );
  server.setRequestHandler(
    CallToolRequestSchema,
    async ({ params: { name, arguments: args } }) => {
      const toolPermissionContext = getEmptyToolPermissionContext();
      const tools = getTools(toolPermissionContext);
      const tool = findToolByName(tools, name);
      if (!tool) {
        throw new Error(`Tool ${name} not found`);
      }
      const toolUseContext = {
        abortController: createAbortController(),
        options: {
          commands: MCP_COMMANDS,
          tools,
          mainLoopModel: getMainLoopModel(),
          thinkingConfig: { type: "disabled" },
          mcpClients: [],
          mcpResources: {},
          isNonInteractiveSession: true,
          debug,
          verbose,
          agentDefinitions: { activeAgents: [], allAgents: [] }
        },
        getAppState: () => getDefaultAppState(),
        setAppState: () => {
        },
        messages: [],
        readFileState: readFileStateCache,
        setInProgressToolUseIDs: () => {
        },
        setResponseLength: () => {
        },
        updateFileHistoryState: () => {
        },
        updateAttributionState: () => {
        }
      };
      try {
        if (!tool.isEnabled()) {
          throw new Error(`Tool ${name} is not enabled`);
        }
        const validationResult = await tool.validateInput?.(
          args ?? {},
          toolUseContext
        );
        if (validationResult && !validationResult.result) {
          throw new Error(
            `Tool ${name} input is invalid: ${validationResult.message}`
          );
        }
        const finalResult = await tool.call(
          args ?? {},
          toolUseContext,
          hasPermissionsToUseTool,
          createAssistantMessage({
            content: []
          })
        );
        return {
          content: [
            {
              type: "text",
              text: typeof finalResult === "string" ? finalResult : jsonStringify(finalResult.data)
            }
          ]
        };
      } catch (error) {
        logError(error);
        const parts = error instanceof Error ? getErrorParts(error) : [String(error)];
        const errorText = parts.filter(Boolean).join("\n").trim() || "Error";
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: errorText
            }
          ]
        };
      }
    }
  );
  async function runServer() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
  }
  return await runServer();
}
export {
  startMCPServer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2VudHJ5cG9pbnRzL21jcC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zZXJ2ZXIvaW5kZXguanMnXG5pbXBvcnQgeyBTdGRpb1NlcnZlclRyYW5zcG9ydCB9IGZyb20gJ0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc2VydmVyL3N0ZGlvLmpzJ1xuaW1wb3J0IHtcbiAgQ2FsbFRvb2xSZXF1ZXN0U2NoZW1hLFxuICB0eXBlIENhbGxUb29sUmVzdWx0LFxuICBMaXN0VG9vbHNSZXF1ZXN0U2NoZW1hLFxuICB0eXBlIExpc3RUb29sc1Jlc3VsdCxcbiAgdHlwZSBUb29sLFxufSBmcm9tICdAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2RrL3R5cGVzLmpzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEFwcFN0YXRlIH0gZnJvbSAnc3JjL3N0YXRlL0FwcFN0YXRlU3RvcmUuanMnXG5pbXBvcnQgcmV2aWV3IGZyb20gJy4uL2NvbW1hbmRzL3Jldmlldy5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHtcbiAgZmluZFRvb2xCeU5hbWUsXG4gIGdldEVtcHR5VG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICB0eXBlIFRvb2xVc2VDb250ZXh0LFxufSBmcm9tICcuLi9Ub29sLmpzJ1xuaW1wb3J0IHsgZ2V0VG9vbHMgfSBmcm9tICcuLi90b29scy5qcydcbmltcG9ydCB7IGNyZWF0ZUFib3J0Q29udHJvbGxlciB9IGZyb20gJy4uL3V0aWxzL2Fib3J0Q29udHJvbGxlci5qcydcbmltcG9ydCB7IGNyZWF0ZUZpbGVTdGF0ZUNhY2hlV2l0aFNpemVMaW1pdCB9IGZyb20gJy4uL3V0aWxzL2ZpbGVTdGF0ZUNhY2hlLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBjcmVhdGVBc3Npc3RhbnRNZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyBnZXRNYWluTG9vcE1vZGVsIH0gZnJvbSAnLi4vdXRpbHMvbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQgeyBoYXNQZXJtaXNzaW9uc1RvVXNlVG9vbCB9IGZyb20gJy4uL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgc2V0Q3dkIH0gZnJvbSAnLi4vdXRpbHMvU2hlbGwuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBnZXRFcnJvclBhcnRzIH0gZnJvbSAnLi4vdXRpbHMvdG9vbEVycm9ycy5qcydcbmltcG9ydCB7IHpvZFRvSnNvblNjaGVtYSB9IGZyb20gJy4uL3V0aWxzL3pvZFRvSnNvblNjaGVtYS5qcydcblxudHlwZSBUb29sSW5wdXQgPSBUb29sWydpbnB1dFNjaGVtYSddXG50eXBlIFRvb2xPdXRwdXQgPSBUb29sWydvdXRwdXRTY2hlbWEnXVxuXG5jb25zdCBNQ1BfQ09NTUFORFM6IENvbW1hbmRbXSA9IFtyZXZpZXddXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydE1DUFNlcnZlcihcbiAgY3dkOiBzdHJpbmcsXG4gIGRlYnVnOiBib29sZWFuLFxuICB2ZXJib3NlOiBib29sZWFuLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFVzZSBzaXplLWxpbWl0ZWQgTFJVIGNhY2hlIGZvciByZWFkRmlsZVN0YXRlIHRvIHByZXZlbnQgdW5ib3VuZGVkIG1lbW9yeSBncm93dGhcbiAgLy8gMTAwIGZpbGVzIGFuZCAyNU1CIGxpbWl0IHNob3VsZCBiZSBzdWZmaWNpZW50IGZvciBNQ1Agc2VydmVyIG9wZXJhdGlvbnNcbiAgY29uc3QgUkVBRF9GSUxFX1NUQVRFX0NBQ0hFX1NJWkUgPSAxMDBcbiAgY29uc3QgcmVhZEZpbGVTdGF0ZUNhY2hlID0gY3JlYXRlRmlsZVN0YXRlQ2FjaGVXaXRoU2l6ZUxpbWl0KFxuICAgIFJFQURfRklMRV9TVEFURV9DQUNIRV9TSVpFLFxuICApXG4gIHNldEN3ZChjd2QpXG4gIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoXG4gICAge1xuICAgICAgbmFtZTogJ2NsYXVkZS90ZW5ndScsXG4gICAgICB2ZXJzaW9uOiBNQUNSTy5WRVJTSU9OLFxuICAgIH0sXG4gICAge1xuICAgICAgY2FwYWJpbGl0aWVzOiB7XG4gICAgICAgIHRvb2xzOiB7fSxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxuXG4gIHNlcnZlci5zZXRSZXF1ZXN0SGFuZGxlcihcbiAgICBMaXN0VG9vbHNSZXF1ZXN0U2NoZW1hLFxuICAgIGFzeW5jICgpOiBQcm9taXNlPExpc3RUb29sc1Jlc3VsdD4gPT4ge1xuICAgICAgLy8gVE9ETzogQWxzbyByZS1leHBvc2UgYW55IE1DUCB0b29sc1xuICAgICAgY29uc3QgdG9vbFBlcm1pc3Npb25Db250ZXh0ID0gZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQoKVxuICAgICAgY29uc3QgdG9vbHMgPSBnZXRUb29scyh0b29sUGVybWlzc2lvbkNvbnRleHQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b29sczogYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgdG9vbHMubWFwKGFzeW5jIHRvb2wgPT4ge1xuICAgICAgICAgICAgbGV0IG91dHB1dFNjaGVtYTogVG9vbE91dHB1dCB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHRvb2wub3V0cHV0U2NoZW1hKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZFNjaGVtYSA9IHpvZFRvSnNvblNjaGVtYSh0b29sLm91dHB1dFNjaGVtYSlcbiAgICAgICAgICAgICAgLy8gTUNQIFNESyByZXF1aXJlcyBvdXRwdXRTY2hlbWEgdG8gaGF2ZSB0eXBlOiBcIm9iamVjdFwiIGF0IHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgLy8gU2tpcCBzY2hlbWFzIHdpdGggYW55T2Yvb25lT2YgYXQgcm9vdCAoZnJvbSB6LnVuaW9uLCB6LmRpc2NyaW1pbmF0ZWRVbmlvbiwgZXRjLilcbiAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW50aHJvcGljcy9jbGF1ZGUtY29kZS9pc3N1ZXMvODAxNFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnZlcnRlZFNjaGVtYSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRTY2hlbWEgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAndHlwZScgaW4gY29udmVydGVkU2NoZW1hICYmXG4gICAgICAgICAgICAgICAgY29udmVydGVkU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG91dHB1dFNjaGVtYSA9IGNvbnZlcnRlZFNjaGVtYSBhcyBUb29sT3V0cHV0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnRvb2wsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhd2FpdCB0b29sLnByb21wdCh7XG4gICAgICAgICAgICAgICAgZ2V0VG9vbFBlcm1pc3Npb25Db250ZXh0OiBhc3luYyAoKSA9PiB0b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgICAgICAgdG9vbHMsXG4gICAgICAgICAgICAgICAgYWdlbnRzOiBbXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGlucHV0U2NoZW1hOiB6b2RUb0pzb25TY2hlbWEodG9vbC5pbnB1dFNjaGVtYSkgYXMgVG9vbElucHV0LFxuICAgICAgICAgICAgICBvdXRwdXRTY2hlbWEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICB9XG4gICAgfSxcbiAgKVxuXG4gIHNlcnZlci5zZXRSZXF1ZXN0SGFuZGxlcihcbiAgICBDYWxsVG9vbFJlcXVlc3RTY2hlbWEsXG4gICAgYXN5bmMgKHsgcGFyYW1zOiB7IG5hbWUsIGFyZ3VtZW50czogYXJncyB9IH0pOiBQcm9taXNlPENhbGxUb29sUmVzdWx0PiA9PiB7XG4gICAgICBjb25zdCB0b29sUGVybWlzc2lvbkNvbnRleHQgPSBnZXRFbXB0eVRvb2xQZXJtaXNzaW9uQ29udGV4dCgpXG4gICAgICAvLyBUT0RPOiBBbHNvIHJlLWV4cG9zZSBhbnkgTUNQIHRvb2xzXG4gICAgICBjb25zdCB0b29scyA9IGdldFRvb2xzKHRvb2xQZXJtaXNzaW9uQ29udGV4dClcbiAgICAgIGNvbnN0IHRvb2wgPSBmaW5kVG9vbEJ5TmFtZSh0b29scywgbmFtZSlcbiAgICAgIGlmICghdG9vbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRvb2wgJHtuYW1lfSBub3QgZm91bmRgKVxuICAgICAgfVxuXG4gICAgICAvLyBBc3N1bWUgTUNQIHNlcnZlcnMgZG8gbm90IHJlYWQgbWVzc2FnZXMgc2VwYXJhdGVseSBmcm9tIHRoZSB0b29sXG4gICAgICAvLyBjYWxsIGFyZ3VtZW50cy5cbiAgICAgIGNvbnN0IHRvb2xVc2VDb250ZXh0OiBUb29sVXNlQ29udGV4dCA9IHtcbiAgICAgICAgYWJvcnRDb250cm9sbGVyOiBjcmVhdGVBYm9ydENvbnRyb2xsZXIoKSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGNvbW1hbmRzOiBNQ1BfQ09NTUFORFMsXG4gICAgICAgICAgdG9vbHMsXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbDogZ2V0TWFpbkxvb3BNb2RlbCgpLFxuICAgICAgICAgIHRoaW5raW5nQ29uZmlnOiB7IHR5cGU6ICdkaXNhYmxlZCcgfSxcbiAgICAgICAgICBtY3BDbGllbnRzOiBbXSxcbiAgICAgICAgICBtY3BSZXNvdXJjZXM6IHt9LFxuICAgICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiB0cnVlLFxuICAgICAgICAgIGRlYnVnLFxuICAgICAgICAgIHZlcmJvc2UsXG4gICAgICAgICAgYWdlbnREZWZpbml0aW9uczogeyBhY3RpdmVBZ2VudHM6IFtdLCBhbGxBZ2VudHM6IFtdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGdldEFwcFN0YXRlOiAoKSA9PiBnZXREZWZhdWx0QXBwU3RhdGUoKSxcbiAgICAgICAgc2V0QXBwU3RhdGU6ICgpID0+IHt9LFxuICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgIHJlYWRGaWxlU3RhdGU6IHJlYWRGaWxlU3RhdGVDYWNoZSxcbiAgICAgICAgc2V0SW5Qcm9ncmVzc1Rvb2xVc2VJRHM6ICgpID0+IHt9LFxuICAgICAgICBzZXRSZXNwb25zZUxlbmd0aDogKCkgPT4ge30sXG4gICAgICAgIHVwZGF0ZUZpbGVIaXN0b3J5U3RhdGU6ICgpID0+IHt9LFxuICAgICAgICB1cGRhdGVBdHRyaWJ1dGlvblN0YXRlOiAoKSA9PiB7fSxcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogdmFsaWRhdGUgaW5wdXQgdHlwZXMgd2l0aCB6b2RcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghdG9vbC5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVG9vbCAke25hbWV9IGlzIG5vdCBlbmFibGVkYClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gYXdhaXQgdG9vbC52YWxpZGF0ZUlucHV0Py4oXG4gICAgICAgICAgKGFyZ3MgYXMgbmV2ZXIpID8/IHt9LFxuICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICApXG4gICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0ICYmICF2YWxpZGF0aW9uUmVzdWx0LnJlc3VsdCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUb29sICR7bmFtZX0gaW5wdXQgaXMgaW52YWxpZDogJHt2YWxpZGF0aW9uUmVzdWx0Lm1lc3NhZ2V9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxSZXN1bHQgPSBhd2FpdCB0b29sLmNhbGwoXG4gICAgICAgICAgKGFyZ3MgPz8ge30pIGFzIG5ldmVyLFxuICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICAgIGhhc1Blcm1pc3Npb25zVG9Vc2VUb29sLFxuICAgICAgICAgIGNyZWF0ZUFzc2lzdGFudE1lc3NhZ2Uoe1xuICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgfSksXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgIHR5cGVvZiBmaW5hbFJlc3VsdCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgID8gZmluYWxSZXN1bHRcbiAgICAgICAgICAgICAgICAgIDoganNvblN0cmluZ2lmeShmaW5hbFJlc3VsdC5kYXRhKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRXJyb3IoZXJyb3IpXG5cbiAgICAgICAgY29uc3QgcGFydHMgPVxuICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBnZXRFcnJvclBhcnRzKGVycm9yKSA6IFtTdHJpbmcoZXJyb3IpXVxuICAgICAgICBjb25zdCBlcnJvclRleHQgPSBwYXJ0cy5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJykudHJpbSgpIHx8ICdFcnJvcidcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzRXJyb3I6IHRydWUsXG4gICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIHRleHQ6IGVycm9yVGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIClcblxuICBhc3luYyBmdW5jdGlvbiBydW5TZXJ2ZXIoKSB7XG4gICAgY29uc3QgdHJhbnNwb3J0ID0gbmV3IFN0ZGlvU2VydmVyVHJhbnNwb3J0KClcbiAgICBhd2FpdCBzZXJ2ZXIuY29ubmVjdCh0cmFuc3BvcnQpXG4gIH1cblxuICByZXR1cm4gYXdhaXQgcnVuU2VydmVyKClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNLGVBQTBCLENBQUMsY0FBTTtBQUV2QyxlQUFzQixlQUNwQixLQUNBLE9BQ0EsU0FDZTtBQUdmLFFBQU0sNkJBQTZCO0FBQ25DLFFBQU0scUJBQXFCO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0EsU0FBTyxHQUFHO0FBQ1YsUUFBTSxTQUFTLElBQUk7QUFBQSxJQUNqQjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsTUFDRSxjQUFjO0FBQUEsUUFDWixPQUFPLENBQUM7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsWUFBc0M7QUFFcEMsWUFBTSx3QkFBd0IsOEJBQThCO0FBQzVELFlBQU0sUUFBUSxTQUFTLHFCQUFxQjtBQUM1QyxhQUFPO0FBQUEsUUFDTCxPQUFPLE1B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
