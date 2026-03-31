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

// scripts/shims/ant-claude-for-chrome-mcp.mjs
function createClaudeForChromeMcpServer() {
  const server = new Server(
    {
      name: "blaude/claude-in-chrome-stub",
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
        text: "Claude-in-Chrome MCP is unavailable in this src compatibility runtime."
      }
    ]
  }));
  return server;
}
async function runClaudeInChromeMcpServer() {
  throw new Error(
    "Claude-in-Chrome MCP is not available in the src compatibility runtime."
  );
}
var BROWSER_TOOLS;
var init_ant_claude_for_chrome_mcp = __esm({
  "scripts/shims/ant-claude-for-chrome-mcp.mjs"() {
    init_server();
    init_types();
    BROWSER_TOOLS = [];
  }
});

export {
  BROWSER_TOOLS,
  createClaudeForChromeMcpServer,
  runClaudeInChromeMcpServer,
  init_ant_claude_for_chrome_mcp
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9hbnQtY2xhdWRlLWZvci1jaHJvbWUtbWNwLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcIkBtb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc2VydmVyL2luZGV4LmpzXCI7XG5pbXBvcnQge1xuICBDYWxsVG9vbFJlcXVlc3RTY2hlbWEsXG4gIExpc3RUb29sc1JlcXVlc3RTY2hlbWEsXG59IGZyb20gXCJAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2RrL3R5cGVzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBCUk9XU0VSX1RPT0xTID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGF1ZGVGb3JDaHJvbWVNY3BTZXJ2ZXIoKSB7XG4gIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoXG4gICAge1xuICAgICAgbmFtZTogXCJibGF1ZGUvY2xhdWRlLWluLWNocm9tZS1zdHViXCIsXG4gICAgICB2ZXJzaW9uOiBnbG9iYWxUaGlzLk1BQ1JPPy5WRVJTSU9OID8/IFwiMC4wLjBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcGFiaWxpdGllczoge1xuICAgICAgICB0b29sczoge30sXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG5cbiAgc2VydmVyLnNldFJlcXVlc3RIYW5kbGVyKExpc3RUb29sc1JlcXVlc3RTY2hlbWEsIGFzeW5jICgpID0+ICh7XG4gICAgdG9vbHM6IFtdLFxuICB9KSk7XG5cbiAgc2VydmVyLnNldFJlcXVlc3RIYW5kbGVyKENhbGxUb29sUmVxdWVzdFNjaGVtYSwgYXN5bmMgKCkgPT4gKHtcbiAgICBpc0Vycm9yOiB0cnVlLFxuICAgIGNvbnRlbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHRleHQ6IFwiQ2xhdWRlLWluLUNocm9tZSBNQ1AgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBzcmMgY29tcGF0aWJpbGl0eSBydW50aW1lLlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9KSk7XG5cbiAgcmV0dXJuIHNlcnZlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkNsYXVkZUluQ2hyb21lTWNwU2VydmVyKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJDbGF1ZGUtaW4tQ2hyb21lIE1DUCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBzcmMgY29tcGF0aWJpbGl0eSBydW50aW1lLlwiLFxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7O0FBUU8sU0FBUyxpQ0FBaUM7QUFDL0MsUUFBTSxTQUFTLElBQUk7QUFBQSxJQUNqQjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUyxXQUFXLE9BQU8sV0FBVztBQUFBLElBQ3hDO0FBQUEsSUFDQTtBQUFBLE1BQ0UsY0FBYztBQUFBLFFBQ1osT0FBTyxDQUFDO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsU0FBTyxrQkFBa0Isd0JBQXdCLGFBQWE7QUFBQSxJQUM1RCxPQUFPLENBQUM7QUFBQSxFQUNWLEVBQUU7QUFFRixTQUFPLGtCQUFrQix1QkFBdUIsYUFBYTtBQUFBLElBQzNELFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGLEVBQUU7QUFFRixTQUFPO0FBQ1Q7QUFFQSxlQUFzQiw2QkFBNkI7QUFDakQsUUFBTSxJQUFJO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQTFDQSxJQU1hO0FBTmI7QUFBQTtBQUFBO0FBQ0E7QUFLTyxJQUFNLGdCQUFnQixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
