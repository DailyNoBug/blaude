import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

export const DEFAULT_GRANT_FLAGS = {
  clipboardRead: false,
  clipboardWrite: false,
  systemKeyCombos: false,
};

export const API_RESIZE_PARAMS = {
  maxWidth: 1280,
  maxHeight: 800,
};

export function targetImageSize(width, height) {
  return [width, height];
}

export function buildComputerUseTools() {
  return [];
}

export function bindSessionContext() {
  return async () => ({
    content: [{ type: "text", text: "computer use is unavailable in this runtime" }],
  });
}

export function createComputerUseMcpServer() {
  const server = new Server(
    {
      name: "blaude/computer-use-stub",
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
        text: "Computer Use MCP is unavailable in this src compatibility runtime.",
      },
    ],
  }));

  return server;
}
