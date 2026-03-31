import { spawn } from "child_process";

import { BLACK_VERSION } from "./version.mjs";

function normalizeArgs(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }
  return [];
}

function normalizeServerMap(rawServers = {}, cwd, env) {
  if (!rawServers || typeof rawServers !== "object") {
    return new Map();
  }

  const servers = new Map();
  for (const [name, config] of Object.entries(rawServers)) {
    if (!config || typeof config !== "object" || typeof config.command !== "string" || !config.command.trim()) {
      continue;
    }
    servers.set(name, {
      name,
      command: config.command,
      args: normalizeArgs(config.args),
      cwd: typeof config.cwd === "string" ? config.cwd : cwd,
      env: {
        ...env,
        ...Object.fromEntries(
          Object.entries(config.env ?? {}).map(([key, value]) => [key, String(value)]),
        ),
      },
      disabled: !!config.disabled,
    });
  }
  return servers;
}

function createFrameParser(onMessage) {
  let buffer = Buffer.alloc(0);

  return (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);

    while (buffer.length > 0) {
      const headerEnd = buffer.indexOf("\r\n\r\n");
      if (headerEnd === -1) {
        return;
      }

      const headerText = buffer.slice(0, headerEnd).toString("utf8");
      const match = /Content-Length:\s*(\d+)/i.exec(headerText);
      if (!match) {
        buffer = Buffer.alloc(0);
        return;
      }

      const contentLength = Number.parseInt(match[1], 10);
      const frameStart = headerEnd + 4;
      const frameEnd = frameStart + contentLength;
      if (buffer.length < frameEnd) {
        return;
      }

      const payload = buffer.slice(frameStart, frameEnd).toString("utf8");
      buffer = buffer.slice(frameEnd);

      try {
        onMessage(JSON.parse(payload));
      } catch {
        // Ignore malformed frames.
      }
    }
  };
}

class McpConnection {
  constructor(server) {
    this.server = server;
    this.child = null;
    this.pending = new Map();
    this.nextId = 1;
    this.initialized = false;
    this.stderr = [];
    this.closePromise = null;
  }

  async ensureStarted() {
    if (this.initialized) {
      return;
    }

    if (!this.child) {
      this.child = spawn(this.server.command, this.server.args, {
        cwd: this.server.cwd,
        env: this.server.env,
        stdio: ["pipe", "pipe", "pipe"],
      });

      const parser = createFrameParser((message) => this.handleMessage(message));
      this.child.stdout.on("data", (chunk) => parser(chunk));
      this.child.stderr.setEncoding("utf8");
      this.child.stderr.on("data", (chunk) => {
        this.stderr.push(String(chunk));
        this.stderr = this.stderr.slice(-20);
      });
      this.child.on("exit", (code) => {
        for (const [, pending] of this.pending) {
          pending.reject(new Error(`MCP server ${this.server.name} exited with code ${code ?? 0}.`));
        }
        this.pending.clear();
        this.child = null;
        this.initialized = false;
      });
    }

    await this.request("initialize", {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: {
        name: "blaude",
        version: BLACK_VERSION,
      },
    });
    await this.notify("notifications/initialized", {});
    this.initialized = true;
  }

  handleMessage(message) {
    if (message && Object.prototype.hasOwnProperty.call(message, "id") && this.pending.has(message.id)) {
      const pending = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) {
        pending.reject(new Error(message.error.message || `MCP error from ${this.server.name}`));
      } else {
        pending.resolve(message.result ?? null);
      }
    }
  }

  writeMessage(message) {
    if (!this.child?.stdin) {
      throw new Error(`MCP server ${this.server.name} is not running.`);
    }
    const json = JSON.stringify(message);
    const frame = `Content-Length: ${Buffer.byteLength(json, "utf8")}\r\n\r\n${json}`;
    this.child.stdin.write(frame, "utf8");
  }

  request(method, params) {
    return new Promise((resolve, reject) => {
      const id = this.nextId++;
      this.pending.set(id, { resolve, reject });
      this.writeMessage({
        jsonrpc: "2.0",
        id,
        method,
        params,
      });
    });
  }

  async notify(method, params) {
    this.writeMessage({
      jsonrpc: "2.0",
      method,
      params,
    });
  }

  async listTools() {
    await this.ensureStarted();
    const result = await this.request("tools/list", {});
    return Array.isArray(result?.tools) ? result.tools : [];
  }

  async callTool(name, args) {
    await this.ensureStarted();
    return this.request("tools/call", {
      name,
      arguments: args ?? {},
    });
  }

  async close() {
    if (!this.child) {
      return;
    }

    if (this.closePromise) {
      await this.closePromise;
      return;
    }

    const child = this.child;
    this.closePromise = new Promise((resolve) => {
      const finalize = () => {
        this.closePromise = null;
        resolve();
      };

      child.once("exit", finalize);
      child.stdin?.end();
      child.kill("SIGTERM");

      setTimeout(() => {
        if (this.child) {
          child.kill("SIGKILL");
        }
      }, 1_000).unref();
    });

    await this.closePromise;
  }
}

export function createMcpManager({ servers, cwd, env }) {
  const serverMap = normalizeServerMap(servers, cwd, env);
  const connections = new Map();

  function getConnection(name) {
    if (!serverMap.has(name)) {
      throw new Error(`Unknown MCP server: ${name}`);
    }
    if (!connections.has(name)) {
      connections.set(name, new McpConnection(serverMap.get(name)));
    }
    return connections.get(name);
  }

  return {
    listServers() {
      return Array.from(serverMap.values()).map((server) => ({
        name: server.name,
        command: server.command,
        args: server.args,
        disabled: server.disabled,
      }));
    },
    async listTools(serverName) {
      const connection = getConnection(serverName);
      return connection.listTools();
    },
    async callTool(serverName, toolName, args) {
      const connection = getConnection(serverName);
      return connection.callTool(toolName, args);
    },
    async close() {
      await Promise.all(Array.from(connections.values()).map((connection) => connection.close()));
      connections.clear();
    },
  };
}
