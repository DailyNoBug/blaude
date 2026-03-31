import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

export const BROWSER_TOOLS = [];

export function createClaudeForChromeMcpServer() {
  const server = new Server(
    {
      name: "blaude/claude-in-chrome-stub",
      version: globalThis.MACRO?.VERSION ?? "0.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [],
  }));

  server.setRequestHandler(CallToolRequestSchema, async () => ({
    isError: true,
    content: [
      {
        type: "text",
        text: "Claude-in-Chrome MCP is unavailable in this src compatibility runtime.",
      },
    ],
  }));

  return server;
}

export async function runClaudeInChromeMcpServer() {
  throw new Error(
    "Claude-in-Chrome MCP is not available in the src compatibility runtime.",
  );
}
