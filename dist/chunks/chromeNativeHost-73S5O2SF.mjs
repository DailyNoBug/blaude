#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import "./chunk-IW3X2UT7.mjs";
import {
  getSecureSocketPath,
  getSocketDir,
  init_common
} from "./chunk-B5LIYBEU.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  init_slowOperations,
  jsonParse,
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

// src/utils/claudeInChrome/chromeNativeHost.ts
import {
  appendFile,
  chmod,
  mkdir,
  readdir,
  rmdir,
  stat,
  unlink
} from "fs/promises";
import { createServer } from "net";
import { homedir, platform } from "os";
import { join } from "path";
init_lazySchema();
init_slowOperations();
init_common();
var VERSION = "1.0.0";
var MAX_MESSAGE_SIZE = 1024 * 1024;
var LOG_FILE = process.env.USER_TYPE === "ant" ? join(homedir(), ".claude", "debug", "chrome-native-host.txt") : void 0;
function log(message, ...args) {
  if (LOG_FILE) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const formattedArgs = args.length > 0 ? " " + jsonStringify(args) : "";
    const logLine = `[${timestamp}] [Claude Chrome Native Host] ${message}${formattedArgs}
`;
    void appendFile(LOG_FILE, logLine).catch(() => {
    });
  }
  console.error(`[Claude Chrome Native Host] ${message}`, ...args);
}
function sendChromeMessage(message) {
  const jsonBytes = Buffer.from(message, "utf-8");
  const lengthBuffer = Buffer.alloc(4);
  lengthBuffer.writeUInt32LE(jsonBytes.length, 0);
  process.stdout.write(lengthBuffer);
  process.stdout.write(jsonBytes);
}
async function runChromeNativeHost() {
  log("Initializing...");
  const host = new ChromeNativeHost();
  const messageReader = new ChromeMessageReader();
  await host.start();
  while (true) {
    const message = await messageReader.read();
    if (message === null) {
      break;
    }
    await host.handleMessage(message);
  }
  await host.stop();
}
var messageSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.string()
  }).passthrough()
);
var ChromeNativeHost = class {
  mcpClients = /* @__PURE__ */ new Map();
  nextClientId = 1;
  server = null;
  running = false;
  socketPath = null;
  async start() {
    if (this.running) {
      return;
    }
    this.socketPath = getSecureSocketPath();
    if (platform() !== "win32") {
      const socketDir = getSocketDir();
      try {
        const dirStats = await stat(socketDir);
        if (!dirStats.isDirectory()) {
          await unlink(socketDir);
        }
      } catch {
      }
      await mkdir(socketDir, { recursive: true, mode: 448 });
      await chmod(socketDir, 448).catch(() => {
      });
      try {
        const files = await readdir(socketDir);
        for (const file of files) {
          if (!file.endsWith(".sock")) {
            continue;
          }
          const pid = parseInt(file.replace(".sock", ""), 10);
          if (isNaN(pid)) {
            continue;
          }
          try {
            process.kill(pid, 0);
          } catch {
            await unlink(join(socketDir, file)).catch(() => {
            });
            log(`Removed stale socket for PID ${pid}`);
          }
        }
      } catch {
      }
    }
    log(`Creating socket listener: ${this.socketPath}`);
    this.server = createServer((socket) => this.handleMcpClient(socket));
    await new Promise((resolve, reject) => {
      this.server.listen(this.socketPath, () => {
        log("Socket server listening for connections");
        this.running = true;
        resolve();
      });
      this.server.on("error", (err) => {
        log("Socket server error:", err);
        reject(err);
      });
    });
    if (platform() !== "win32") {
      try {
        await chmod(this.socketPath, 384);
        log("Socket permissions set to 0600");
      } catch (e) {
        log("Failed to set socket permissions:", e);
      }
    }
  }
  async stop() {
    if (!this.running) {
      return;
    }
    for (const [, client] of this.mcpClients) {
      client.socket.destroy();
    }
    this.mcpClients.clear();
    if (this.server) {
      await new Promise((resolve) => {
        this.server.close(() => resolve());
      });
      this.server = null;
    }
    if (platform() !== "win32" && this.socketPath) {
      try {
        await unlink(this.socketPath);
        log("Cleaned up socket file");
      } catch {
      }
      try {
        const socketDir = getSocketDir();
        const remaining = await readdir(socketDir);
        if (remaining.length === 0) {
          await rmdir(socketDir);
          log("Removed empty socket directory");
        }
      } catch {
      }
    }
    this.running = false;
  }
  async isRunning() {
    return this.running;
  }
  async getClientCount() {
    return this.mcpClients.size;
  }
  async handleMessage(messageJson) {
    let rawMessage;
    try {
      rawMessage = jsonParse(messageJson);
    } catch (e) {
      log("Invalid JSON from Chrome:", e.message);
      sendChromeMessage(
        jsonStringify({
          type: "error",
          error: "Invalid message format"
        })
      );
      return;
    }
    const parsed = messageSchema().safeParse(rawMessage);
    if (!parsed.success) {
      log("Invalid message from Chrome:", parsed.error.message);
      sendChromeMessage(
        jsonStringify({
          type: "error",
          error: "Invalid message format"
        })
      );
      return;
    }
    const message = parsed.data;
    log(`Handling Chrome message type: ${message.type}`);
    switch (message.type) {
      case "ping":
        log("Responding to ping");
        sendChromeMessage(
          jsonStringify({
            type: "pong",
            timestamp: Date.now()
          })
        );
        break;
      case "get_status":
        sendChromeMessage(
          jsonStringify({
            type: "status_response",
            native_host_version: VERSION
          })
        );
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          log(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          const { type: _, ...data } = message;
          const responseData = Buffer.from(jsonStringify(data), "utf-8");
          const lengthBuffer = Buffer.alloc(4);
          lengthBuffer.writeUInt32LE(responseData.length, 0);
          const responseMsg = Buffer.concat([lengthBuffer, responseData]);
          for (const [id, client] of this.mcpClients) {
            try {
              client.socket.write(responseMsg);
            } catch (e) {
              log(`Failed to send to MCP client ${id}:`, e);
            }
          }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          log(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          const { type: _, ...data } = message;
          const notificationData = Buffer.from(jsonStringify(data), "utf-8");
          const lengthBuffer = Buffer.alloc(4);
          lengthBuffer.writeUInt32LE(notificationData.length, 0);
          const notificationMsg = Buffer.concat([
            lengthBuffer,
            notificationData
          ]);
          for (const [id, client] of this.mcpClients) {
            try {
              client.socket.write(notificationMsg);
            } catch (e) {
              log(`Failed to send notification to MCP client ${id}:`, e);
            }
          }
        }
        break;
      }
      default:
        log(`Unknown message type: ${message.type}`);
        sendChromeMessage(
          jsonStringify({
            type: "error",
            error: `Unknown message type: ${message.type}`
          })
        );
    }
  }
  handleMcpClient(socket) {
    const clientId = this.nextClientId++;
    const client = {
      id: clientId,
      socket,
      buffer: Buffer.alloc(0)
    };
    this.mcpClients.set(clientId, client);
    log(
      `MCP client ${clientId} connected. Total clients: ${this.mcpClients.size}`
    );
    sendChromeMessage(
      jsonStringify({
        type: "mcp_connected"
      })
    );
    socket.on("data", (data) => {
      client.buffer = Buffer.concat([client.buffer, data]);
      while (client.buffer.length >= 4) {
        const length = client.buffer.readUInt32LE(0);
        if (length === 0 || length > MAX_MESSAGE_SIZE) {
          log(`Invalid message length from MCP client ${clientId}: ${length}`);
          socket.destroy();
          return;
        }
        if (client.buffer.length < 4 + length) {
          break;
        }
        const messageBytes = client.buffer.slice(4, 4 + length);
        client.buffer = client.buffer.slice(4 + length);
        try {
          const request = jsonParse(
            messageBytes.toString("utf-8")
          );
          log(
            `Forwarding tool request from MCP client ${clientId}: ${request.method}`
          );
          sendChromeMessage(
            jsonStringify({
              type: "tool_request",
              method: request.method,
              params: request.params
            })
          );
        } catch (e) {
          log(`Failed to parse tool request from MCP client ${clientId}:`, e);
        }
      }
    });
    socket.on("error", (err) => {
      log(`MCP client ${clientId} error: ${err}`);
    });
    socket.on("close", () => {
      log(
        `MCP client ${clientId} disconnected. Remaining clients: ${this.mcpClients.size - 1}`
      );
      this.mcpClients.delete(clientId);
      sendChromeMessage(
        jsonStringify({
          type: "mcp_disconnected"
        })
      );
    });
  }
};
var ChromeMessageReader = class {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = false;
  constructor() {
    process.stdin.on("data", (chunk) => {
      this.buffer = Buffer.concat([this.buffer, chunk]);
      this.tryProcessMessage();
    });
    process.stdin.on("end", () => {
      this.closed = true;
      if (this.pendingResolve) {
        this.pendingResolve(null);
        this.pendingResolve = null;
      }
    });
    process.stdin.on("error", () => {
      this.closed = true;
      if (this.pendingResolve) {
        this.pendingResolve(null);
        this.pendingResolve = null;
      }
    });
  }
  tryProcessMessage() {
    if (!this.pendingResolve) {
      return;
    }
    if (this.buffer.length < 4) {
      return;
    }
    const length = this.buffer.readUInt32LE(0);
    if (length === 0 || length > MAX_MESSAGE_SIZE) {
      log(`Invalid message length: ${length}`);
      this.pendingResolve(null);
      this.pendingResolve = null;
      return;
    }
    if (this.buffer.length < 4 + length) {
      return;
    }
    const messageBytes = this.buffer.subarray(4, 4 + length);
    this.buffer = this.buffer.subarray(4 + length);
    const message = messageBytes.toString("utf-8");
    this.pendingResolve(message);
    this.pendingResolve = null;
  }
  async read() {
    if (this.closed) {
      return null;
    }
    if (this.buffer.length >= 4) {
      const length = this.buffer.readUInt32LE(0);
      if (length > 0 && length <= MAX_MESSAGE_SIZE && this.buffer.length >= 4 + length) {
        const messageBytes = this.buffer.subarray(4, 4 + length);
        this.buffer = this.buffer.subarray(4 + length);
        return messageBytes.toString("utf-8");
      }
    }
    return new Promise((resolve) => {
      this.pendingResolve = resolve;
      this.tryProcessMessage();
    });
  }
};
export {
  runChromeNativeHost,
  sendChromeMessage
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL2Nocm9tZU5hdGl2ZUhvc3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGJpb21lLWlnbm9yZS1hbGwgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogZmlsZSB1c2VzIGNvbnNvbGUgaW50ZW50aW9uYWxseVxuLyoqXG4gKiBDaHJvbWUgTmF0aXZlIEhvc3QgLSBQdXJlIFR5cGVTY3JpcHQgSW1wbGVtZW50YXRpb25cbiAqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyB0aGUgQ2hyb21lIG5hdGl2ZSBtZXNzYWdpbmcgaG9zdCBmdW5jdGlvbmFsaXR5LFxuICogcHJldmlvdXNseSBpbXBsZW1lbnRlZCBhcyBhIFJ1c3QgTkFQSSBiaW5kaW5nIGJ1dCBub3cgaW4gcHVyZSBUeXBlU2NyaXB0LlxuICovXG5cbmltcG9ydCB7XG4gIGFwcGVuZEZpbGUsXG4gIGNobW9kLFxuICBta2RpcixcbiAgcmVhZGRpcixcbiAgcm1kaXIsXG4gIHN0YXQsXG4gIHVubGluayxcbn0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIsIHR5cGUgU2VydmVyLCB0eXBlIFNvY2tldCB9IGZyb20gJ25ldCdcbmltcG9ydCB7IGhvbWVkaXIsIHBsYXRmb3JtIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyBsYXp5U2NoZW1hIH0gZnJvbSAnLi4vbGF6eVNjaGVtYS5qcydcbmltcG9ydCB7IGpzb25QYXJzZSwganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZ2V0U2VjdXJlU29ja2V0UGF0aCwgZ2V0U29ja2V0RGlyIH0gZnJvbSAnLi9jb21tb24uanMnXG5cbmNvbnN0IFZFUlNJT04gPSAnMS4wLjAnXG5jb25zdCBNQVhfTUVTU0FHRV9TSVpFID0gMTAyNCAqIDEwMjQgLy8gMU1CIC0gTWF4IG1lc3NhZ2Ugc2l6ZSB0aGF0IGNhbiBiZSBzZW50IHRvIENocm9tZVxuXG5jb25zdCBMT0dfRklMRSA9XG4gIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IGpvaW4oaG9tZWRpcigpLCAnLmNsYXVkZScsICdkZWJ1ZycsICdjaHJvbWUtbmF0aXZlLWhvc3QudHh0JylcbiAgICA6IHVuZGVmaW5lZFxuXG5mdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgaWYgKExPR19GSUxFKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgY29uc3QgZm9ybWF0dGVkQXJncyA9IGFyZ3MubGVuZ3RoID4gMCA/ICcgJyArIGpzb25TdHJpbmdpZnkoYXJncykgOiAnJ1xuICAgIGNvbnN0IGxvZ0xpbmUgPSBgWyR7dGltZXN0YW1wfV0gW0NsYXVkZSBDaHJvbWUgTmF0aXZlIEhvc3RdICR7bWVzc2FnZX0ke2Zvcm1hdHRlZEFyZ3N9XFxuYFxuICAgIC8vIEZpcmUtYW5kLWZvcmdldDogbG9nZ2luZyBpcyBiZXN0LWVmZm9ydCBhbmQgY2FsbGVycyAoaW5jbHVkaW5nIGV2ZW50XG4gICAgLy8gaGFuZGxlcnMpIGRvbid0IGF3YWl0XG4gICAgdm9pZCBhcHBlbmRGaWxlKExPR19GSUxFLCBsb2dMaW5lKS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBJZ25vcmUgZmlsZSB3cml0ZSBlcnJvcnNcbiAgICB9KVxuICB9XG4gIGNvbnNvbGUuZXJyb3IoYFtDbGF1ZGUgQ2hyb21lIE5hdGl2ZSBIb3N0XSAke21lc3NhZ2V9YCwgLi4uYXJncylcbn1cbi8qKlxuICogU2VuZCBhIG1lc3NhZ2UgdG8gc3Rkb3V0IChDaHJvbWUgbmF0aXZlIG1lc3NhZ2luZyBwcm90b2NvbClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDaHJvbWVNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBqc29uQnl0ZXMgPSBCdWZmZXIuZnJvbShtZXNzYWdlLCAndXRmLTgnKVxuICBjb25zdCBsZW5ndGhCdWZmZXIgPSBCdWZmZXIuYWxsb2MoNClcbiAgbGVuZ3RoQnVmZmVyLndyaXRlVUludDMyTEUoanNvbkJ5dGVzLmxlbmd0aCwgMClcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShsZW5ndGhCdWZmZXIpXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGpzb25CeXRlcylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkNocm9tZU5hdGl2ZUhvc3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxvZygnSW5pdGlhbGl6aW5nLi4uJylcblxuICBjb25zdCBob3N0ID0gbmV3IENocm9tZU5hdGl2ZUhvc3QoKVxuICBjb25zdCBtZXNzYWdlUmVhZGVyID0gbmV3IENocm9tZU1lc3NhZ2VSZWFkZXIoKVxuXG4gIC8vIFN0YXJ0IHRoZSBuYXRpdmUgaG9zdCBzZXJ2ZXJcbiAgYXdhaXQgaG9zdC5zdGFydCgpXG5cbiAgLy8gUHJvY2VzcyBtZXNzYWdlcyBmcm9tIENocm9tZSB1bnRpbCBzdGRpbiBjbG9zZXNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb25cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgbWVzc2FnZVJlYWRlci5yZWFkKClcbiAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkge1xuICAgICAgLy8gc3RkaW4gY2xvc2VkLCBDaHJvbWUgZGlzY29ubmVjdGVkXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGF3YWl0IGhvc3QuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICB9XG5cbiAgLy8gU3RvcCB0aGUgc2VydmVyXG4gIGF3YWl0IGhvc3Quc3RvcCgpXG59XG5cbmNvbnN0IG1lc3NhZ2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHR5cGU6IHouc3RyaW5nKCksXG4gICAgfSlcbiAgICAucGFzc3Rocm91Z2goKSxcbilcblxudHlwZSBUb29sUmVxdWVzdCA9IHtcbiAgbWV0aG9kOiBzdHJpbmdcbiAgcGFyYW1zPzogdW5rbm93blxufVxuXG50eXBlIE1jcENsaWVudCA9IHtcbiAgaWQ6IG51bWJlclxuICBzb2NrZXQ6IFNvY2tldFxuICBidWZmZXI6IEJ1ZmZlclxufVxuXG5jbGFzcyBDaHJvbWVOYXRpdmVIb3N0IHtcbiAgcHJpdmF0ZSBtY3BDbGllbnRzID0gbmV3IE1hcDxudW1iZXIsIE1jcENsaWVudD4oKVxuICBwcml2YXRlIG5leHRDbGllbnRJZCA9IDFcbiAgcHJpdmF0ZSBzZXJ2ZXI6IFNlcnZlciB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcnVubmluZyA9IGZhbHNlXG4gIHByaXZhdGUgc29ja2V0UGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNvY2tldFBhdGggPSBnZXRTZWN1cmVTb2NrZXRQYXRoKClcblxuICAgIGlmIChwbGF0Zm9ybSgpICE9PSAnd2luMzInKSB7XG4gICAgICBjb25zdCBzb2NrZXREaXIgPSBnZXRTb2NrZXREaXIoKVxuXG4gICAgICAvLyBNaWdyYXRlIGxlZ2FjeSBzb2NrZXQ6IGlmIHNvY2tldCBkaXIgcGF0aCBleGlzdHMgYXMgYSBmaWxlL3NvY2tldCwgcmVtb3ZlIGl0XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXJTdGF0cyA9IGF3YWl0IHN0YXQoc29ja2V0RGlyKVxuICAgICAgICBpZiAoIWRpclN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICBhd2FpdCB1bmxpbmsoc29ja2V0RGlyKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRG9lc24ndCBleGlzdCwgdGhhdCdzIGZpbmVcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHNvY2tldCBkaXJlY3Rvcnkgd2l0aCBzZWN1cmUgcGVybWlzc2lvbnNcbiAgICAgIGF3YWl0IG1rZGlyKHNvY2tldERpciwgeyByZWN1cnNpdmU6IHRydWUsIG1vZGU6IDBvNzAwIH0pXG5cbiAgICAgIC8vIEZpeCBwZXJtcyBpZiBkaXJlY3RvcnkgYWxyZWFkeSBleGlzdGVkXG4gICAgICBhd2FpdCBjaG1vZChzb2NrZXREaXIsIDBvNzAwKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIC8vIElnbm9yZVxuICAgICAgfSlcblxuICAgICAgLy8gQ2xlYW4gdXAgc3RhbGUgc29ja2V0c1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCByZWFkZGlyKHNvY2tldERpcilcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuc29jaycpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwaWQgPSBwYXJzZUludChmaWxlLnJlcGxhY2UoJy5zb2NrJywgJycpLCAxMClcbiAgICAgICAgICBpZiAoaXNOYU4ocGlkKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb2Nlc3Mua2lsbChwaWQsIDApXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGlzIGFsaXZlLCBsZWF2ZSBpdFxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gUHJvY2VzcyBpcyBkZWFkLCByZW1vdmUgc3RhbGUgc29ja2V0XG4gICAgICAgICAgICBhd2FpdCB1bmxpbmsoam9pbihzb2NrZXREaXIsIGZpbGUpKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxvZyhgUmVtb3ZlZCBzdGFsZSBzb2NrZXQgZm9yIFBJRCAke3BpZH1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIElnbm9yZSBlcnJvcnMgc2Nhbm5pbmcgZGlyZWN0b3J5XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGBDcmVhdGluZyBzb2NrZXQgbGlzdGVuZXI6ICR7dGhpcy5zb2NrZXRQYXRofWApXG5cbiAgICB0aGlzLnNlcnZlciA9IGNyZWF0ZVNlcnZlcihzb2NrZXQgPT4gdGhpcy5oYW5kbGVNY3BDbGllbnQoc29ja2V0KSlcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuc2VydmVyIS5saXN0ZW4odGhpcy5zb2NrZXRQYXRoISwgKCkgPT4ge1xuICAgICAgICBsb2coJ1NvY2tldCBzZXJ2ZXIgbGlzdGVuaW5nIGZvciBjb25uZWN0aW9ucycpXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWVcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNlcnZlciEub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgbG9nKCdTb2NrZXQgc2VydmVyIGVycm9yOicsIGVycilcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIFNldCBwZXJtaXNzaW9ucyBvbiBVbml4IChhZnRlciBsaXN0ZW4gcmVzb2x2ZXMgc28gc29ja2V0IGZpbGUgZXhpc3RzKVxuICAgIGlmIChwbGF0Zm9ybSgpICE9PSAnd2luMzInKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjaG1vZCh0aGlzLnNvY2tldFBhdGghLCAwbzYwMClcbiAgICAgICAgbG9nKCdTb2NrZXQgcGVybWlzc2lvbnMgc2V0IHRvIDA2MDAnKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2coJ0ZhaWxlZCB0byBzZXQgc29ja2V0IHBlcm1pc3Npb25zOicsIGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2xvc2UgYWxsIE1DUCBjbGllbnRzXG4gICAgZm9yIChjb25zdCBbLCBjbGllbnRdIG9mIHRoaXMubWNwQ2xpZW50cykge1xuICAgICAgY2xpZW50LnNvY2tldC5kZXN0cm95KClcbiAgICB9XG4gICAgdGhpcy5tY3BDbGllbnRzLmNsZWFyKClcblxuICAgIC8vIENsb3NlIHNlcnZlclxuICAgIGlmICh0aGlzLnNlcnZlcikge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMuc2VydmVyIS5jbG9zZSgoKSA9PiByZXNvbHZlKCkpXG4gICAgICB9KVxuICAgICAgdGhpcy5zZXJ2ZXIgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2xlYW51cCBzb2NrZXQgZmlsZVxuICAgIGlmIChwbGF0Zm9ybSgpICE9PSAnd2luMzInICYmIHRoaXMuc29ja2V0UGF0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdW5saW5rKHRoaXMuc29ja2V0UGF0aClcbiAgICAgICAgbG9nKCdDbGVhbmVkIHVwIHNvY2tldCBmaWxlJylcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBFTk9FTlQgaXMgZmluZSwgaWdub3JlXG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBkaXJlY3RvcnkgaWYgZW1wdHlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNvY2tldERpciA9IGdldFNvY2tldERpcigpXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IGF3YWl0IHJlYWRkaXIoc29ja2V0RGlyKVxuICAgICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGF3YWl0IHJtZGlyKHNvY2tldERpcilcbiAgICAgICAgICBsb2coJ1JlbW92ZWQgZW1wdHkgc29ja2V0IGRpcmVjdG9yeScpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxuICB9XG5cbiAgYXN5bmMgaXNSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmdcbiAgfVxuXG4gIGFzeW5jIGdldENsaWVudENvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMubWNwQ2xpZW50cy5zaXplXG4gIH1cblxuICBhc3luYyBoYW5kbGVNZXNzYWdlKG1lc3NhZ2VKc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcmF3TWVzc2FnZTogdW5rbm93blxuICAgIHRyeSB7XG4gICAgICByYXdNZXNzYWdlID0ganNvblBhcnNlKG1lc3NhZ2VKc29uKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZygnSW52YWxpZCBKU09OIGZyb20gQ2hyb21lOicsIChlIGFzIEVycm9yKS5tZXNzYWdlKVxuICAgICAgc2VuZENocm9tZU1lc3NhZ2UoXG4gICAgICAgIGpzb25TdHJpbmdpZnkoe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIG1lc3NhZ2UgZm9ybWF0JyxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcGFyc2VkID0gbWVzc2FnZVNjaGVtYSgpLnNhZmVQYXJzZShyYXdNZXNzYWdlKVxuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIGxvZygnSW52YWxpZCBtZXNzYWdlIGZyb20gQ2hyb21lOicsIHBhcnNlZC5lcnJvci5tZXNzYWdlKVxuICAgICAgc2VuZENocm9tZU1lc3NhZ2UoXG4gICAgICAgIGpzb25TdHJpbmdpZnkoe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIG1lc3NhZ2UgZm9ybWF0JyxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IHBhcnNlZC5kYXRhXG5cbiAgICBsb2coYEhhbmRsaW5nIENocm9tZSBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWApXG5cbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAncGluZyc6XG4gICAgICAgIGxvZygnUmVzcG9uZGluZyB0byBwaW5nJylcblxuICAgICAgICBzZW5kQ2hyb21lTWVzc2FnZShcbiAgICAgICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb25nJyxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdnZXRfc3RhdHVzJzpcbiAgICAgICAgc2VuZENocm9tZU1lc3NhZ2UoXG4gICAgICAgICAganNvblN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAnc3RhdHVzX3Jlc3BvbnNlJyxcbiAgICAgICAgICAgIG5hdGl2ZV9ob3N0X3ZlcnNpb246IFZFUlNJT04sXG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAndG9vbF9yZXNwb25zZSc6IHtcbiAgICAgICAgaWYgKHRoaXMubWNwQ2xpZW50cy5zaXplID4gMCkge1xuICAgICAgICAgIGxvZyhgRm9yd2FyZGluZyB0b29sIHJlc3BvbnNlIHRvICR7dGhpcy5tY3BDbGllbnRzLnNpemV9IE1DUCBjbGllbnRzYClcblxuICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIGRhdGEgcG9ydGlvbiAoZXZlcnl0aGluZyBleGNlcHQgJ3R5cGUnKVxuICAgICAgICAgIGNvbnN0IHsgdHlwZTogXywgLi4uZGF0YSB9ID0gbWVzc2FnZVxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IEJ1ZmZlci5mcm9tKGpzb25TdHJpbmdpZnkoZGF0YSksICd1dGYtOCcpXG4gICAgICAgICAgY29uc3QgbGVuZ3RoQnVmZmVyID0gQnVmZmVyLmFsbG9jKDQpXG4gICAgICAgICAgbGVuZ3RoQnVmZmVyLndyaXRlVUludDMyTEUocmVzcG9uc2VEYXRhLmxlbmd0aCwgMClcbiAgICAgICAgICBjb25zdCByZXNwb25zZU1zZyA9IEJ1ZmZlci5jb25jYXQoW2xlbmd0aEJ1ZmZlciwgcmVzcG9uc2VEYXRhXSlcblxuICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBjbGllbnRdIG9mIHRoaXMubWNwQ2xpZW50cykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY2xpZW50LnNvY2tldC53cml0ZShyZXNwb25zZU1zZylcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbG9nKGBGYWlsZWQgdG8gc2VuZCB0byBNQ1AgY2xpZW50ICR7aWR9OmAsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ25vdGlmaWNhdGlvbic6IHtcbiAgICAgICAgaWYgKHRoaXMubWNwQ2xpZW50cy5zaXplID4gMCkge1xuICAgICAgICAgIGxvZyhgRm9yd2FyZGluZyBub3RpZmljYXRpb24gdG8gJHt0aGlzLm1jcENsaWVudHMuc2l6ZX0gTUNQIGNsaWVudHNgKVxuXG4gICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZGF0YSBwb3J0aW9uIChldmVyeXRoaW5nIGV4Y2VwdCAndHlwZScpXG4gICAgICAgICAgY29uc3QgeyB0eXBlOiBfLCAuLi5kYXRhIH0gPSBtZXNzYWdlXG4gICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uRGF0YSA9IEJ1ZmZlci5mcm9tKGpzb25TdHJpbmdpZnkoZGF0YSksICd1dGYtOCcpXG4gICAgICAgICAgY29uc3QgbGVuZ3RoQnVmZmVyID0gQnVmZmVyLmFsbG9jKDQpXG4gICAgICAgICAgbGVuZ3RoQnVmZmVyLndyaXRlVUludDMyTEUobm90aWZpY2F0aW9uRGF0YS5sZW5ndGgsIDApXG4gICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uTXNnID0gQnVmZmVyLmNvbmNhdChbXG4gICAgICAgICAgICBsZW5ndGhCdWZmZXIsXG4gICAgICAgICAgICBub3RpZmljYXRpb25EYXRhLFxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgY2xpZW50XSBvZiB0aGlzLm1jcENsaWVudHMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNsaWVudC5zb2NrZXQud3JpdGUobm90aWZpY2F0aW9uTXNnKVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBsb2coYEZhaWxlZCB0byBzZW5kIG5vdGlmaWNhdGlvbiB0byBNQ1AgY2xpZW50ICR7aWR9OmAsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxvZyhgVW5rbm93biBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWApXG5cbiAgICAgICAgc2VuZENocm9tZU1lc3NhZ2UoXG4gICAgICAgICAganNvblN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3I6IGBVbmtub3duIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9YCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWNwQ2xpZW50KHNvY2tldDogU29ja2V0KTogdm9pZCB7XG4gICAgY29uc3QgY2xpZW50SWQgPSB0aGlzLm5leHRDbGllbnRJZCsrXG4gICAgY29uc3QgY2xpZW50OiBNY3BDbGllbnQgPSB7XG4gICAgICBpZDogY2xpZW50SWQsXG4gICAgICBzb2NrZXQsXG4gICAgICBidWZmZXI6IEJ1ZmZlci5hbGxvYygwKSxcbiAgICB9XG5cbiAgICB0aGlzLm1jcENsaWVudHMuc2V0KGNsaWVudElkLCBjbGllbnQpXG4gICAgbG9nKFxuICAgICAgYE1DUCBjbGllbnQgJHtjbGllbnRJZH0gY29ubmVjdGVkLiBUb3RhbCBjbGllbnRzOiAke3RoaXMubWNwQ2xpZW50cy5zaXplfWAsXG4gICAgKVxuXG4gICAgLy8gTm90aWZ5IENocm9tZSBvZiBjb25uZWN0aW9uXG4gICAgc2VuZENocm9tZU1lc3NhZ2UoXG4gICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgdHlwZTogJ21jcF9jb25uZWN0ZWQnLFxuICAgICAgfSksXG4gICAgKVxuXG4gICAgc29ja2V0Lm9uKCdkYXRhJywgKGRhdGE6IEJ1ZmZlcikgPT4ge1xuICAgICAgY2xpZW50LmJ1ZmZlciA9IEJ1ZmZlci5jb25jYXQoW2NsaWVudC5idWZmZXIsIGRhdGFdKVxuXG4gICAgICAvLyBQcm9jZXNzIGNvbXBsZXRlIG1lc3NhZ2VzXG4gICAgICB3aGlsZSAoY2xpZW50LmJ1ZmZlci5sZW5ndGggPj0gNCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjbGllbnQuYnVmZmVyLnJlYWRVSW50MzJMRSgwKVxuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDAgfHwgbGVuZ3RoID4gTUFYX01FU1NBR0VfU0laRSkge1xuICAgICAgICAgIGxvZyhgSW52YWxpZCBtZXNzYWdlIGxlbmd0aCBmcm9tIE1DUCBjbGllbnQgJHtjbGllbnRJZH06ICR7bGVuZ3RofWApXG4gICAgICAgICAgc29ja2V0LmRlc3Ryb3koKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsaWVudC5idWZmZXIubGVuZ3RoIDwgNCArIGxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrIC8vIFdhaXQgZm9yIG1vcmUgZGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZUJ5dGVzID0gY2xpZW50LmJ1ZmZlci5zbGljZSg0LCA0ICsgbGVuZ3RoKVxuICAgICAgICBjbGllbnQuYnVmZmVyID0gY2xpZW50LmJ1ZmZlci5zbGljZSg0ICsgbGVuZ3RoKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGpzb25QYXJzZShcbiAgICAgICAgICAgIG1lc3NhZ2VCeXRlcy50b1N0cmluZygndXRmLTgnKSxcbiAgICAgICAgICApIGFzIFRvb2xSZXF1ZXN0XG4gICAgICAgICAgbG9nKFxuICAgICAgICAgICAgYEZvcndhcmRpbmcgdG9vbCByZXF1ZXN0IGZyb20gTUNQIGNsaWVudCAke2NsaWVudElkfTogJHtyZXF1ZXN0Lm1ldGhvZH1gLFxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIEZvcndhcmQgdG8gQ2hyb21lXG4gICAgICAgICAgc2VuZENocm9tZU1lc3NhZ2UoXG4gICAgICAgICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgdHlwZTogJ3Rvb2xfcmVxdWVzdCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICAgIHBhcmFtczogcmVxdWVzdC5wYXJhbXMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2coYEZhaWxlZCB0byBwYXJzZSB0b29sIHJlcXVlc3QgZnJvbSBNQ1AgY2xpZW50ICR7Y2xpZW50SWR9OmAsIGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc29ja2V0Lm9uKCdlcnJvcicsIGVyciA9PiB7XG4gICAgICBsb2coYE1DUCBjbGllbnQgJHtjbGllbnRJZH0gZXJyb3I6ICR7ZXJyfWApXG4gICAgfSlcblxuICAgIHNvY2tldC5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICBsb2coXG4gICAgICAgIGBNQ1AgY2xpZW50ICR7Y2xpZW50SWR9IGRpc2Nvbm5lY3RlZC4gUmVtYWluaW5nIGNsaWVudHM6ICR7dGhpcy5tY3BDbGllbnRzLnNpemUgLSAxfWAsXG4gICAgICApXG4gICAgICB0aGlzLm1jcENsaWVudHMuZGVsZXRlKGNsaWVudElkKVxuXG4gICAgICAvLyBOb3RpZnkgQ2hyb21lIG9mIGRpc2Nvbm5lY3Rpb25cbiAgICAgIHNlbmRDaHJvbWVNZXNzYWdlKFxuICAgICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgICB0eXBlOiAnbWNwX2Rpc2Nvbm5lY3RlZCcsXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBDaHJvbWUgbWVzc2FnZSByZWFkZXIgdXNpbmcgYXN5bmMgc3RkaW4uIFN5bmNocm9ub3VzIHJlYWRzIGNhbiBjcmFzaCBCdW4sIHNvIHdlIHVzZVxuICogYXN5bmMgcmVhZHMgd2l0aCBhIGJ1ZmZlci5cbiAqL1xuY2xhc3MgQ2hyb21lTWVzc2FnZVJlYWRlciB7XG4gIHByaXZhdGUgYnVmZmVyID0gQnVmZmVyLmFsbG9jKDApXG4gIHByaXZhdGUgcGVuZGluZ1Jlc29sdmU6ICgodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBjbG9zZWQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHByb2Nlc3Muc3RkaW4ub24oJ2RhdGEnLCAoY2h1bms6IEJ1ZmZlcikgPT4ge1xuICAgICAgdGhpcy5idWZmZXIgPSBCdWZmZXIuY29uY2F0KFt0aGlzLmJ1ZmZlciwgY2h1bmtdKVxuICAgICAgdGhpcy50cnlQcm9jZXNzTWVzc2FnZSgpXG4gICAgfSlcblxuICAgIHByb2Nlc3Muc3RkaW4ub24oJ2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZVxuICAgICAgaWYgKHRoaXMucGVuZGluZ1Jlc29sdmUpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVzb2x2ZShudWxsKVxuICAgICAgICB0aGlzLnBlbmRpbmdSZXNvbHZlID0gbnVsbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcm9jZXNzLnN0ZGluLm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZVxuICAgICAgaWYgKHRoaXMucGVuZGluZ1Jlc29sdmUpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVzb2x2ZShudWxsKVxuICAgICAgICB0aGlzLnBlbmRpbmdSZXNvbHZlID0gbnVsbFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHRyeVByb2Nlc3NNZXNzYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wZW5kaW5nUmVzb2x2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTmVlZCBhdCBsZWFzdCA0IGJ5dGVzIGZvciBsZW5ndGggcHJlZml4XG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8IDQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYnVmZmVyLnJlYWRVSW50MzJMRSgwKVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBsZW5ndGggPiBNQVhfTUVTU0FHRV9TSVpFKSB7XG4gICAgICBsb2coYEludmFsaWQgbWVzc2FnZSBsZW5ndGg6ICR7bGVuZ3RofWApXG4gICAgICB0aGlzLnBlbmRpbmdSZXNvbHZlKG51bGwpXG4gICAgICB0aGlzLnBlbmRpbmdSZXNvbHZlID0gbnVsbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgZnVsbCBtZXNzYWdlXG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8IDQgKyBsZW5ndGgpIHtcbiAgICAgIHJldHVybiAvLyBXYWl0IGZvciBtb3JlIGRhdGFcbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IHRoZSBtZXNzYWdlXG4gICAgY29uc3QgbWVzc2FnZUJ5dGVzID0gdGhpcy5idWZmZXIuc3ViYXJyYXkoNCwgNCArIGxlbmd0aClcbiAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLnN1YmFycmF5KDQgKyBsZW5ndGgpXG5cbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUJ5dGVzLnRvU3RyaW5nKCd1dGYtOCcpXG4gICAgdGhpcy5wZW5kaW5nUmVzb2x2ZShtZXNzYWdlKVxuICAgIHRoaXMucGVuZGluZ1Jlc29sdmUgPSBudWxsXG4gIH1cblxuICBhc3luYyByZWFkKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBjb21wbGV0ZSBtZXNzYWdlIGJ1ZmZlcmVkXG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA+PSA0KSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmJ1ZmZlci5yZWFkVUludDMyTEUoMClcbiAgICAgIGlmIChcbiAgICAgICAgbGVuZ3RoID4gMCAmJlxuICAgICAgICBsZW5ndGggPD0gTUFYX01FU1NBR0VfU0laRSAmJlxuICAgICAgICB0aGlzLmJ1ZmZlci5sZW5ndGggPj0gNCArIGxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCeXRlcyA9IHRoaXMuYnVmZmVyLnN1YmFycmF5KDQsIDQgKyBsZW5ndGgpXG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuc3ViYXJyYXkoNCArIGxlbmd0aClcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VCeXRlcy50b1N0cmluZygndXRmLTgnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIG1vcmUgZGF0YVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucGVuZGluZ1Jlc29sdmUgPSByZXNvbHZlXG4gICAgICAvLyBJbiBjYXNlIGRhdGEgYXJyaXZlZCBiZXR3ZWVuIGNoZWNrIGFuZCBzZXR0aW5nIHBlbmRpbmdSZXNvbHZlXG4gICAgICB0aGlzLnRyeVByb2Nlc3NNZXNzYWdlKClcbiAgICB9KVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUNQLFNBQVMsb0JBQThDO0FBQ3ZELFNBQVMsU0FBUyxnQkFBZ0I7QUFDbEMsU0FBUyxZQUFZO0FBRXJCO0FBQ0E7QUFDQTtBQUVBLElBQU0sVUFBVTtBQUNoQixJQUFNLG1CQUFtQixPQUFPO0FBRWhDLElBQU0sV0FDSixRQUFRLElBQUksY0FBYyxRQUN0QixLQUFLLFFBQVEsR0FBRyxXQUFXLFNBQVMsd0JBQXdCLElBQzVEO0FBRU4sU0FBUyxJQUFJLFlBQW9CLE1BQXVCO0FBQ3RELE1BQUksVUFBVTtBQUNaLFVBQU0sYUFBWSxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUN6QyxVQUFNLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxNQUFNLGNBQWMsSUFBSSxJQUFJO0FBQ3BFLFVBQU0sVUFBVSxJQUFJLFNBQVMsaUNBQWlDLE9BQU8sR0FBRyxhQUFhO0FBQUE7QUFHckYsU0FBSyxXQUFXLFVBQVUsT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUFBLElBRS9DLENBQUM7QUFBQSxFQUNIO0FBQ0EsVUFBUSxNQUFNLCtCQUErQixPQUFPLElBQUksR0FBRyxJQUFJO0FBQ2pFO0FBSU8sU0FBUyxrQkFBa0IsU0FBdUI7QUFDdkQsUUFBTSxZQUFZLE9BQU8sS0FBSyxTQUFTLE9BQU87QUFDOUMsUUFBTSxlQUFlLE9BQU8sTUFBTSxDQUFDO0FBQ25DLGVBQWEsY0FBYyxVQUFVLFFBQVEsQ0FBQztBQUU5QyxVQUFRLE9BQU8sTUFBTSxZQUFZO0FBQ2pDLFVBQVEs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
