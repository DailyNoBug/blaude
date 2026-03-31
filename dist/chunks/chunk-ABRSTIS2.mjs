#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Server,
  init_server,
  init_types
} from "./chunk-I4JSDM2A.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/ant-computer-use-mcp.mjs
function targetImageSize(width, height) {
  return [width, height];
}
function buildComputerUseTools() {
  return [];
}
function bindSessionContext() {
  return async () => ({
    content: [{ type: "text", text: "computer use is unavailable in this runtime" }]
  });
}
function createComputerUseMcpServer() {
  const server = new Server(
    {
      name: "blaude/computer-use-stub",
      version: globalThis.MACRO?.VERSION ?? "0.0.0"
    },
    {
      capabilities: {
        tools: {}
      }
    }
  );
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: []
  }));
  server.setRequestHandler(CallToolRequestSchema, async () => ({
    isError: true,
    content: [
      {
        type: "text",
        text: "Computer Use MCP is unavailable in this src compatibility runtime."
      }
    ]
  }));
  return server;
}
var DEFAULT_GRANT_FLAGS, API_RESIZE_PARAMS;
var init_ant_computer_use_mcp = __esm({
  "scripts/shims/ant-computer-use-mcp.mjs"() {
    init_server();
    init_types();
    DEFAULT_GRANT_FLAGS = {
      clipboardRead: false,
      clipboardWrite: false,
      systemKeyCombos: false
    };
    API_RESIZE_PARAMS = {
      maxWidth: 1280,
      maxHeight: 800
    };
  }
});

export {
  DEFAULT_GRANT_FLAGS,
  API_RESIZE_PARAMS,
  targetImageSize,
  buildComputerUseTools,
  bindSessionContext,
  createComputerUseMcpServer,
  init_ant_computer_use_mcp
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9hbnQtY29tcHV0ZXItdXNlLW1jcC5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2RrL3NlcnZlci9pbmRleC5qc1wiO1xuaW1wb3J0IHtcbiAgQ2FsbFRvb2xSZXF1ZXN0U2NoZW1hLFxuICBMaXN0VG9vbHNSZXF1ZXN0U2NoZW1hLFxufSBmcm9tIFwiQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay90eXBlcy5qc1wiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9HUkFOVF9GTEFHUyA9IHtcbiAgY2xpcGJvYXJkUmVhZDogZmFsc2UsXG4gIGNsaXBib2FyZFdyaXRlOiBmYWxzZSxcbiAgc3lzdGVtS2V5Q29tYm9zOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBBUElfUkVTSVpFX1BBUkFNUyA9IHtcbiAgbWF4V2lkdGg6IDEyODAsXG4gIG1heEhlaWdodDogODAwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEltYWdlU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbXB1dGVyVXNlVG9vbHMoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTZXNzaW9uQ29udGV4dCgpIHtcbiAgcmV0dXJuIGFzeW5jICgpID0+ICh7XG4gICAgY29udGVudDogW3sgdHlwZTogXCJ0ZXh0XCIsIHRleHQ6IFwiY29tcHV0ZXIgdXNlIGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgcnVudGltZVwiIH1dLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyVXNlTWNwU2VydmVyKCkge1xuICBjb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYmxhdWRlL2NvbXB1dGVyLXVzZS1zdHViXCIsXG4gICAgICB2ZXJzaW9uOiBnbG9iYWxUaGlzLk1BQ1JPPy5WRVJTSU9OID8/IFwiMC4wLjBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcGFiaWxpdGllczoge1xuICAgICAgICB0b29sczoge30sXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG5cbiAgc2VydmVyLnNldFJlcXVlc3RIYW5kbGVyKExpc3RUb29sc1JlcXVlc3RTY2hlbWEsIGFzeW5jICgpID0+ICh7XG4gICAgdG9vbHM6IFtdLFxuICB9KSk7XG5cbiAgc2VydmVyLnNldFJlcXVlc3RIYW5kbGVyKENhbGxUb29sUmVxdWVzdFNjaGVtYSwgYXN5bmMgKCkgPT4gKHtcbiAgICBpc0Vycm9yOiB0cnVlLFxuICAgIGNvbnRlbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHRleHQ6IFwiQ29tcHV0ZXIgVXNlIE1DUCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIHNyYyBjb21wYXRpYmlsaXR5IHJ1bnRpbWUuXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pKTtcblxuICByZXR1cm4gc2VydmVyO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVMsZ0JBQWdCLE9BQU8sUUFBUTtBQUM3QyxTQUFPLENBQUMsT0FBTyxNQUFNO0FBQ3ZCO0FBRU8sU0FBUyx3QkFBd0I7QUFDdEMsU0FBTyxDQUFDO0FBQ1Y7QUFFTyxTQUFTLHFCQUFxQjtBQUNuQyxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTLENBQUMsRUFBRSxNQUFNLFFBQVEsTUFBTSw4Q0FBOEMsQ0FBQztBQUFBLEVBQ2pGO0FBQ0Y7QUFFTyxTQUFTLDZCQUE2QjtBQUMzQyxRQUFNLFNBQVMsSUFBSTtBQUFBLElBQ2pCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTLFdBQVcsT0FBTyxXQUFXO0FBQUEsSUFDeEM7QUFBQSxJQUNBO0FBQUEsTUFDRSxjQUFjO0FBQUEsUUFDWixPQUFPLENBQUM7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxTQUFPLGtCQUFrQix3QkFBd0IsYUFBYTtBQUFBLElBQzVELE9BQU8sQ0FBQztBQUFBLEVBQ1YsRUFBRTtBQUVGLFNBQU8sa0JBQWtCLHVCQUF1QixhQUFhO0FBQUEsSUFDM0QsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0YsRUFBRTtBQUVGLFNBQU87QUFDVDtBQTNEQSxJQU1hLHFCQU1BO0FBWmI7QUFBQTtBQUFBO0FBQ0E7QUFLTyxJQUFNLHNCQUFzQjtBQUFBLE1BQ2pDLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLElBQ25CO0FBRU8sSUFBTSxvQkFBb0I7QUFBQSxNQUMvQixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsSUFDYjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
