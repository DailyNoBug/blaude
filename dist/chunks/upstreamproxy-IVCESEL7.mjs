#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-O2ZQRVJU.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import {
  init_cleanupRegistry,
  init_debug,
  init_errors,
  isENOENT,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __require
} from "./chunk-O5PZ3G6I.mjs";

// src/upstreamproxy/upstreamproxy.ts
init_cleanupRegistry();
init_debug();
init_envUtils();
init_errors();
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { homedir } from "os";
import { join } from "path";

// src/upstreamproxy/relay.ts
init_debug();
init_mtls();
init_proxy();
import { createServer } from "node:net";
var nodeWSCtor;
var MAX_CHUNK_BYTES = 512 * 1024;
var PING_INTERVAL_MS = 3e4;
function encodeChunk(data) {
  const len = data.length;
  const varint = [];
  let n = len;
  while (n > 127) {
    varint.push(n & 127 | 128);
    n >>>= 7;
  }
  varint.push(n);
  const out = new Uint8Array(1 + varint.length + len);
  out[0] = 10;
  out.set(varint, 1);
  out.set(data, 1 + varint.length);
  return out;
}
function decodeChunk(buf) {
  if (buf.length === 0) return new Uint8Array(0);
  if (buf[0] !== 10) return null;
  let len = 0;
  let shift = 0;
  let i = 1;
  while (i < buf.length) {
    const b = buf[i];
    len |= (b & 127) << shift;
    i++;
    if ((b & 128) === 0) break;
    shift += 7;
    if (shift > 28) return null;
  }
  if (i + len > buf.length) return null;
  return buf.subarray(i, i + len);
}
function newConnState() {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    wsOpen: false,
    established: false,
    closed: false
  };
}
async function startUpstreamProxyRelay(opts) {
  const authHeader = "Basic " + Buffer.from(`${opts.sessionId}:${opts.token}`).toString("base64");
  const wsAuthHeader = `Bearer ${opts.token}`;
  const relay = typeof Bun !== "undefined" ? startBunRelay(opts.wsUrl, authHeader, wsAuthHeader) : await startNodeRelay(opts.wsUrl, authHeader, wsAuthHeader);
  logForDebugging(`[upstreamproxy] relay listening on 127.0.0.1:${relay.port}`);
  return relay;
}
function startBunRelay(wsUrl, authHeader, wsAuthHeader) {
  const server = Bun.listen({
    hostname: "127.0.0.1",
    port: 0,
    socket: {
      open(sock) {
        sock.data = { ...newConnState(), writeBuf: [] };
      },
      data(sock, data) {
        const st = sock.data;
        const adapter = {
          write: (payload) => {
            const bytes = typeof payload === "string" ? Buffer.from(payload, "utf8") : payload;
            if (st.writeBuf.length > 0) {
              st.writeBuf.push(bytes);
              return;
            }
            const n = sock.write(bytes);
            if (n < bytes.length) st.writeBuf.push(bytes.subarray(n));
          },
          end: () => sock.end()
        };
        handleData(adapter, st, data, wsUrl, authHeader, wsAuthHeader);
      },
      drain(sock) {
        const st = sock.data;
        while (st.writeBuf.length > 0) {
          const chunk = st.writeBuf[0];
          const n = sock.write(chunk);
          if (n < chunk.length) {
            st.writeBuf[0] = chunk.subarray(n);
            return;
          }
          st.writeBuf.shift();
        }
      },
      close(sock) {
        cleanupConn(sock.data);
      },
      error(sock, err) {
        logForDebugging(`[upstreamproxy] client socket error: ${err.message}`);
        cleanupConn(sock.data);
      }
    }
  });
  return {
    port: server.port,
    stop: () => server.stop(true)
  };
}
async function startNodeRelay(wsUrl, authHeader, wsAuthHeader) {
  nodeWSCtor = (await import("./wrapper-U6YMRWUE.mjs")).default;
  const states = /* @__PURE__ */ new WeakMap();
  const server = createServer((sock) => {
    const st = newConnState();
    states.set(sock, st);
    const adapter = {
      write: (payload) => {
        sock.write(typeof payload === "string" ? payload : Buffer.from(payload));
      },
      end: () => sock.end()
    };
    sock.on(
      "data",
      (data) => handleData(adapter, st, data, wsUrl, authHeader, wsAuthHeader)
    );
    sock.on("close", () => cleanupConn(states.get(sock)));
    sock.on("error", (err) => {
      logForDebugging(`[upstreamproxy] client socket error: ${err.message}`);
      cleanupConn(states.get(sock));
    });
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      if (addr === null || typeof addr === "string") {
        reject(new Error("upstreamproxy: server has no TCP address"));
        return;
      }
      resolve({
        port: addr.port,
        stop: () => server.close()
      });
    });
  });
}
function handleData(sock, st, data, wsUrl, authHeader, wsAuthHeader) {
  if (!st.ws) {
    st.connectBuf = Buffer.concat([st.connectBuf, data]);
    const headerEnd = st.connectBuf.indexOf("\r\n\r\n");
    if (headerEnd === -1) {
      if (st.connectBuf.length > 8192) {
        sock.write("HTTP/1.1 400 Bad Request\r\n\r\n");
        sock.end();
      }
      return;
    }
    const reqHead = st.connectBuf.subarray(0, headerEnd).toString("utf8");
    const firstLine = reqHead.split("\r\n")[0] ?? "";
    const m = firstLine.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!m) {
      sock.write("HTTP/1.1 405 Method Not Allowed\r\n\r\n");
      sock.end();
      return;
    }
    const trailing = st.connectBuf.subarray(headerEnd + 4);
    if (trailing.length > 0) {
      st.pending.push(Buffer.from(trailing));
    }
    st.connectBuf = Buffer.alloc(0);
    openTunnel(sock, st, firstLine, wsUrl, authHeader, wsAuthHeader);
    return;
  }
  if (!st.wsOpen) {
    st.pending.push(Buffer.from(data));
    return;
  }
  forwardToWs(st.ws, data);
}
function openTunnel(sock, st, connectLine, wsUrl, authHeader, wsAuthHeader) {
  const headers = {
    "Content-Type": "application/proto",
    Authorization: wsAuthHeader
  };
  let ws;
  if (nodeWSCtor) {
    ws = new nodeWSCtor(wsUrl, {
      headers,
      agent: getWebSocketProxyAgent(wsUrl),
      ...getWebSocketTLSOptions()
    });
  } else {
    ws = new globalThis.WebSocket(wsUrl, {
      // @ts-expect-error — Bun extension; not in lib.dom WebSocket types
      headers,
      proxy: getWebSocketProxyUrl(wsUrl),
      tls: getWebSocketTLSOptions() || void 0
    });
  }
  ws.binaryType = "arraybuffer";
  st.ws = ws;
  ws.onopen = () => {
    const head = `${connectLine}\r
Proxy-Authorization: ${authHeader}\r
\r
`;
    ws.send(encodeChunk(Buffer.from(head, "utf8")));
    st.wsOpen = true;
    for (const buf of st.pending) {
      forwardToWs(ws, buf);
    }
    st.pending = [];
    st.pinger = setInterval(sendKeepalive, PING_INTERVAL_MS, ws);
  };
  ws.onmessage = (ev) => {
    const raw = ev.data instanceof ArrayBuffer ? new Uint8Array(ev.data) : new Uint8Array(Buffer.from(ev.data));
    const payload = decodeChunk(raw);
    if (payload && payload.length > 0) {
      st.established = true;
      sock.write(payload);
    }
  };
  ws.onerror = (ev) => {
    const msg = "message" in ev ? String(ev.message) : "websocket error";
    logForDebugging(`[upstreamproxy] ws error: ${msg}`);
    if (st.closed) return;
    st.closed = true;
    if (!st.established) {
      sock.write("HTTP/1.1 502 Bad Gateway\r\n\r\n");
    }
    sock.end();
    cleanupConn(st);
  };
  ws.onclose = () => {
    if (st.closed) return;
    st.closed = true;
    sock.end();
    cleanupConn(st);
  };
}
function sendKeepalive(ws) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(encodeChunk(new Uint8Array(0)));
  }
}
function forwardToWs(ws, data) {
  if (ws.readyState !== WebSocket.OPEN) return;
  for (let off = 0; off < data.length; off += MAX_CHUNK_BYTES) {
    const slice = data.subarray(off, off + MAX_CHUNK_BYTES);
    ws.send(encodeChunk(slice));
  }
}
function cleanupConn(st) {
  if (!st) return;
  if (st.pinger) clearInterval(st.pinger);
  if (st.ws && st.ws.readyState <= WebSocket.OPEN) {
    try {
      st.ws.close();
    } catch {
    }
  }
  st.ws = void 0;
}

// src/upstreamproxy/upstreamproxy.ts
var SESSION_TOKEN_PATH = "/run/ccr/session_token";
var SYSTEM_CA_BUNDLE = "/etc/ssl/certs/ca-certificates.crt";
var NO_PROXY_LIST = [
  "localhost",
  "127.0.0.1",
  "::1",
  "169.254.0.0/16",
  "10.0.0.0/8",
  "172.16.0.0/12",
  "192.168.0.0/16",
  // Anthropic API: no upstream route will ever match, and the MITM breaks
  // non-Bun runtimes (Python httpx/certifi doesn't trust the forged CA).
  // Three forms because NO_PROXY parsing differs across runtimes:
  //   *.anthropic.com  — Bun, curl, Go (glob match)
  //   .anthropic.com   — Python urllib/httpx (suffix match, strips leading dot)
  //   anthropic.com    — apex domain fallback
  "anthropic.com",
  ".anthropic.com",
  "*.anthropic.com",
  "github.com",
  "api.github.com",
  "*.github.com",
  "*.githubusercontent.com",
  "registry.npmjs.org",
  "pypi.org",
  "files.pythonhosted.org",
  "index.crates.io",
  "proxy.golang.org"
].join(",");
var state = { enabled: false };
async function initUpstreamProxy(opts) {
  if (!isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
    return state;
  }
  if (!isEnvTruthy(process.env.CCR_UPSTREAM_PROXY_ENABLED)) {
    return state;
  }
  const sessionId = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!sessionId) {
    logForDebugging(
      "[upstreamproxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled",
      { level: "warn" }
    );
    return state;
  }
  const tokenPath = opts?.tokenPath ?? SESSION_TOKEN_PATH;
  const token = await readToken(tokenPath);
  if (!token) {
    logForDebugging("[upstreamproxy] no session token file; proxy disabled");
    return state;
  }
  setNonDumpable();
  const baseUrl = opts?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com";
  const caBundlePath = opts?.caBundlePath ?? join(homedir(), ".ccr", "ca-bundle.crt");
  const caOk = await downloadCaBundle(
    baseUrl,
    opts?.systemCaPath ?? SYSTEM_CA_BUNDLE,
    caBundlePath
  );
  if (!caOk) return state;
  try {
    const wsUrl = baseUrl.replace(/^http/, "ws") + "/v1/code/upstreamproxy/ws";
    const relay = await startUpstreamProxyRelay({ wsUrl, sessionId, token });
    registerCleanup(async () => relay.stop());
    state = { enabled: true, port: relay.port, caBundlePath };
    logForDebugging(`[upstreamproxy] enabled on 127.0.0.1:${relay.port}`);
    await unlink(tokenPath).catch(() => {
      logForDebugging("[upstreamproxy] token file unlink failed", {
        level: "warn"
      });
    });
  } catch (err) {
    logForDebugging(
      `[upstreamproxy] relay start failed: ${err instanceof Error ? err.message : String(err)}; proxy disabled`,
      { level: "warn" }
    );
  }
  return state;
}
function getUpstreamProxyEnv() {
  if (!state.enabled || !state.port || !state.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      const inherited = {};
      for (const key of [
        "HTTPS_PROXY",
        "https_proxy",
        "NO_PROXY",
        "no_proxy",
        "SSL_CERT_FILE",
        "NODE_EXTRA_CA_CERTS",
        "REQUESTS_CA_BUNDLE",
        "CURL_CA_BUNDLE"
      ]) {
        if (process.env[key]) inherited[key] = process.env[key];
      }
      return inherited;
    }
    return {};
  }
  const proxyUrl = `http://127.0.0.1:${state.port}`;
  return {
    HTTPS_PROXY: proxyUrl,
    https_proxy: proxyUrl,
    NO_PROXY: NO_PROXY_LIST,
    no_proxy: NO_PROXY_LIST,
    SSL_CERT_FILE: state.caBundlePath,
    NODE_EXTRA_CA_CERTS: state.caBundlePath,
    REQUESTS_CA_BUNDLE: state.caBundlePath,
    CURL_CA_BUNDLE: state.caBundlePath
  };
}
function resetUpstreamProxyForTests() {
  state = { enabled: false };
}
async function readToken(path) {
  try {
    const raw = await readFile(path, "utf8");
    return raw.trim() || null;
  } catch (err) {
    if (isENOENT(err)) return null;
    logForDebugging(
      `[upstreamproxy] token read failed: ${err instanceof Error ? err.message : String(err)}`,
      { level: "warn" }
    );
    return null;
  }
}
function setNonDumpable() {
  if (process.platform !== "linux" || typeof Bun === "undefined") return;
  try {
    const ffi = __require("bun:ffi");
    const lib = ffi.dlopen("libc.so.6", {
      prctl: {
        args: ["int", "u64", "u64", "u64", "u64"],
        returns: "int"
      }
    });
    const PR_SET_DUMPABLE = 4;
    const rc = lib.symbols.prctl(PR_SET_DUMPABLE, 0n, 0n, 0n, 0n);
    if (rc !== 0) {
      logForDebugging(
        "[upstreamproxy] prctl(PR_SET_DUMPABLE,0) returned nonzero",
        {
          level: "warn"
        }
      );
    }
  } catch (err) {
    logForDebugging(
      `[upstreamproxy] prctl unavailable: ${err instanceof Error ? err.message : String(err)}`,
      { level: "warn" }
    );
  }
}
async function downloadCaBundle(baseUrl, systemCaPath, outPath) {
  try {
    const resp = await fetch(`${baseUrl}/v1/code/upstreamproxy/ca-cert`, {
      // Bun has no default fetch timeout — a hung endpoint would block CLI
      // startup forever. 5s is generous for a small PEM.
      signal: AbortSignal.timeout(5e3)
    });
    if (!resp.ok) {
      logForDebugging(
        `[upstreamproxy] ca-cert fetch ${resp.status}; proxy disabled`,
        { level: "warn" }
      );
      return false;
    }
    const ccrCa = await resp.text();
    const systemCa = await readFile(systemCaPath, "utf8").catch(() => "");
    await mkdir(join(outPath, ".."), { recursive: true });
    await writeFile(outPath, systemCa + "\n" + ccrCa, "utf8");
    return true;
  } catch (err) {
    logForDebugging(
      `[upstreamproxy] ca-cert download failed: ${err instanceof Error ? err.message : String(err)}; proxy disabled`,
      { level: "warn" }
    );
    return false;
  }
}
export {
  SESSION_TOKEN_PATH,
  getUpstreamProxyEnv,
  initUpstreamProxy,
  resetUpstreamProxyForTests
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3Vwc3RyZWFtcHJveHkvdXBzdHJlYW1wcm94eS50cyIsICIuLi8uLi9zcmMvdXBzdHJlYW1wcm94eS9yZWxheS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDQ1IgdXBzdHJlYW1wcm94eSBcdTIwMTQgY29udGFpbmVyLXNpZGUgd2lyaW5nLlxuICpcbiAqIFdoZW4gcnVubmluZyBpbnNpZGUgYSBDQ1Igc2Vzc2lvbiBjb250YWluZXIgd2l0aCB1cHN0cmVhbXByb3h5IGNvbmZpZ3VyZWQsXG4gKiB0aGlzIG1vZHVsZTpcbiAqICAgMS4gUmVhZHMgdGhlIHNlc3Npb24gdG9rZW4gZnJvbSAvcnVuL2Njci9zZXNzaW9uX3Rva2VuXG4gKiAgIDIuIFNldHMgcHJjdGwoUFJfU0VUX0RVTVBBQkxFLCAwKSB0byBibG9jayBzYW1lLVVJRCBwdHJhY2Ugb2YgdGhlIGhlYXBcbiAqICAgMy4gRG93bmxvYWRzIHRoZSB1cHN0cmVhbXByb3h5IENBIGNlcnQgYW5kIGNvbmNhdGVuYXRlcyBpdCB3aXRoIHRoZVxuICogICAgICBzeXN0ZW0gYnVuZGxlIHNvIGN1cmwvZ2gvcHl0aG9uIHRydXN0IHRoZSBNSVRNIHByb3h5XG4gKiAgIDQuIFN0YXJ0cyBhIGxvY2FsIENPTk5FQ1RcdTIxOTJXZWJTb2NrZXQgcmVsYXkgKHNlZSByZWxheS50cylcbiAqICAgNS4gVW5saW5rcyB0aGUgdG9rZW4gZmlsZSAodG9rZW4gc3RheXMgaGVhcC1vbmx5OyBmaWxlIGlzIGdvbmUgYmVmb3JlXG4gKiAgICAgIHRoZSBhZ2VudCBsb29wIGNhbiBzZWUgaXQsIGJ1dCBvbmx5IGFmdGVyIHRoZSByZWxheSBpcyBjb25maXJtZWQgdXBcbiAqICAgICAgc28gYSBzdXBlcnZpc29yIHJlc3RhcnQgY2FuIHJldHJ5KVxuICogICA2LiBFeHBvc2VzIEhUVFBTX1BST1hZIC8gU1NMX0NFUlRfRklMRSBlbnYgdmFycyBmb3IgYWxsIGFnZW50IHN1YnByb2Nlc3Nlc1xuICpcbiAqIEV2ZXJ5IHN0ZXAgZmFpbHMgb3BlbjogYW55IGVycm9yIGxvZ3MgYSB3YXJuaW5nIGFuZCBkaXNhYmxlcyB0aGUgcHJveHkuXG4gKiBBIGJyb2tlbiBwcm94eSBzZXR1cCBtdXN0IG5ldmVyIGJyZWFrIGFuIG90aGVyd2lzZS13b3JraW5nIHNlc3Npb24uXG4gKlxuICogRGVzaWduIGRvYzogYXBpLWdvL2Njci9kb2NzL3BsYW5zL0NDUl9BVVRIX0RFU0lHTi5tZCBcdTAwQTcgXCJXZWVrLTEgcGlsb3Qgc2NvcGVcIi5cbiAqL1xuXG5pbXBvcnQgeyBta2RpciwgcmVhZEZpbGUsIHVubGluaywgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4uL3V0aWxzL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGlzRU5PRU5UIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgc3RhcnRVcHN0cmVhbVByb3h5UmVsYXkgfSBmcm9tICcuL3JlbGF5LmpzJ1xuXG5leHBvcnQgY29uc3QgU0VTU0lPTl9UT0tFTl9QQVRIID0gJy9ydW4vY2NyL3Nlc3Npb25fdG9rZW4nXG5jb25zdCBTWVNURU1fQ0FfQlVORExFID0gJy9ldGMvc3NsL2NlcnRzL2NhLWNlcnRpZmljYXRlcy5jcnQnXG5cbi8vIEhvc3RzIHRoZSBwcm94eSBtdXN0IE5PVCBpbnRlcmNlcHQuIENvdmVycyBsb29wYmFjaywgUkZDMTkxOCwgdGhlIElNRFNcbi8vIHJhbmdlLCBhbmQgdGhlIHBhY2thZ2UgcmVnaXN0cmllcyArIEdpdEh1YiB0aGF0IENDUiBjb250YWluZXJzIGFscmVhZHlcbi8vIHJlYWNoIGRpcmVjdGx5LiBNaXJyb3JzIGFpcmxvY2svc2NyaXB0cy9zYW5kYm94LXNoZWxsLWNjci5zaC5cbmNvbnN0IE5PX1BST1hZX0xJU1QgPSBbXG4gICdsb2NhbGhvc3QnLFxuICAnMTI3LjAuMC4xJyxcbiAgJzo6MScsXG4gICcxNjkuMjU0LjAuMC8xNicsXG4gICcxMC4wLjAuMC84JyxcbiAgJzE3Mi4xNi4wLjAvMTInLFxuICAnMTkyLjE2OC4wLjAvMTYnLFxuICAvLyBBbnRocm9waWMgQVBJOiBubyB1cHN0cmVhbSByb3V0ZSB3aWxsIGV2ZXIgbWF0Y2gsIGFuZCB0aGUgTUlUTSBicmVha3NcbiAgLy8gbm9uLUJ1biBydW50aW1lcyAoUHl0aG9uIGh0dHB4L2NlcnRpZmkgZG9lc24ndCB0cnVzdCB0aGUgZm9yZ2VkIENBKS5cbiAgLy8gVGhyZWUgZm9ybXMgYmVjYXVzZSBOT19QUk9YWSBwYXJzaW5nIGRpZmZlcnMgYWNyb3NzIHJ1bnRpbWVzOlxuICAvLyAgICouYW50aHJvcGljLmNvbSAgXHUyMDE0IEJ1biwgY3VybCwgR28gKGdsb2IgbWF0Y2gpXG4gIC8vICAgLmFudGhyb3BpYy5jb20gICBcdTIwMTQgUHl0aG9uIHVybGxpYi9odHRweCAoc3VmZml4IG1hdGNoLCBzdHJpcHMgbGVhZGluZyBkb3QpXG4gIC8vICAgYW50aHJvcGljLmNvbSAgICBcdTIwMTQgYXBleCBkb21haW4gZmFsbGJhY2tcbiAgJ2FudGhyb3BpYy5jb20nLFxuICAnLmFudGhyb3BpYy5jb20nLFxuICAnKi5hbnRocm9waWMuY29tJyxcbiAgJ2dpdGh1Yi5jb20nLFxuICAnYXBpLmdpdGh1Yi5jb20nLFxuICAnKi5naXRodWIuY29tJyxcbiAgJyouZ2l0aHVidXNlcmNvbnRlbnQuY29tJyxcbiAgJ3JlZ2lzdHJ5Lm5wbWpzLm9yZycsXG4gICdweXBpLm9yZycsXG4gICdmaWxlcy5weXRob25ob3N0ZWQub3JnJyxcbiAgJ2luZGV4LmNyYXRlcy5pbycsXG4gICdwcm94eS5nb2xhbmcub3JnJyxcbl0uam9pbignLCcpXG5cbnR5cGUgVXBzdHJlYW1Qcm94eVN0YXRlID0ge1xuICBlbmFibGVkOiBib29sZWFuXG4gIHBvcnQ/OiBudW1iZXJcbiAgY2FCdW5kbGVQYXRoPzogc3RyaW5nXG59XG5cbmxldCBzdGF0ZTogVXBzdHJlYW1Qcm94eVN0YXRlID0geyBlbmFibGVkOiBmYWxzZSB9XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB1cHN0cmVhbXByb3h5LiBDYWxsZWQgb25jZSBmcm9tIGluaXQudHMuIFNhZmUgdG8gY2FsbCB3aGVuIHRoZVxuICogZmVhdHVyZSBpcyBvZmYgb3IgdGhlIHRva2VuIGZpbGUgaXMgYWJzZW50IFx1MjAxNCByZXR1cm5zIHtlbmFibGVkOiBmYWxzZX0uXG4gKlxuICogT3ZlcnJpZGFibGUgcGF0aHMgYXJlIGZvciB0ZXN0czsgcHJvZHVjdGlvbiB1c2VzIHRoZSBkZWZhdWx0cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRVcHN0cmVhbVByb3h5KG9wdHM/OiB7XG4gIHRva2VuUGF0aD86IHN0cmluZ1xuICBzeXN0ZW1DYVBhdGg/OiBzdHJpbmdcbiAgY2FCdW5kbGVQYXRoPzogc3RyaW5nXG4gIGNjckJhc2VVcmw/OiBzdHJpbmdcbn0pOiBQcm9taXNlPFVwc3RyZWFtUHJveHlTdGF0ZT4ge1xuICBpZiAoIWlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URSkpIHtcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuICAvLyBDQ1IgZXZhbHVhdGVzIGNjcl91cHN0cmVhbV9wcm94eV9lbmFibGVkIHNlcnZlci1zaWRlICh3aGVyZSBHcm93dGhCb29rIGlzXG4gIC8vIHdhcm0pIGFuZCBpbmplY3RzIHRoaXMgZW52IHZhciB2aWEgU3RhcnR1cENvbnRleHQuRW52aXJvbm1lbnRWYXJpYWJsZXMuXG4gIC8vIEV2ZXJ5IENDUiBzZXNzaW9uIGlzIGEgZnJlc2ggY29udGFpbmVyIHdpdGggbm8gR0IgY2FjaGUsIHNvIGEgY2xpZW50LXNpZGVcbiAgLy8gR0IgY2hlY2sgaGVyZSBhbHdheXMgcmV0dXJuZWQgdGhlIGRlZmF1bHQgKGZhbHNlKS5cbiAgaWYgKCFpc0VudlRydXRoeShwcm9jZXNzLmVudi5DQ1JfVVBTVFJFQU1fUFJPWFlfRU5BQkxFRCkpIHtcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb25JZCA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URV9TRVNTSU9OX0lEXG4gIGlmICghc2Vzc2lvbklkKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1t1cHN0cmVhbXByb3h5XSBDTEFVREVfQ09ERV9SRU1PVEVfU0VTU0lPTl9JRCB1bnNldDsgcHJveHkgZGlzYWJsZWQnLFxuICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgKVxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgY29uc3QgdG9rZW5QYXRoID0gb3B0cz8udG9rZW5QYXRoID8/IFNFU1NJT05fVE9LRU5fUEFUSFxuICBjb25zdCB0b2tlbiA9IGF3YWl0IHJlYWRUb2tlbih0b2tlblBhdGgpXG4gIGlmICghdG9rZW4pIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1t1cHN0cmVhbXByb3h5XSBubyBzZXNzaW9uIHRva2VuIGZpbGU7IHByb3h5IGRpc2FibGVkJylcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIHNldE5vbkR1bXBhYmxlKClcblxuICAvLyBDQ1IgaW5qZWN0cyBBTlRIUk9QSUNfQkFTRV9VUkwgdmlhIFN0YXJ0dXBDb250ZXh0IChzZXNzaW9uRXhlY3V0b3IudHMgL1xuICAvLyBzZXNzaW9uSGFuZGxlci50cykuIGdldE9hdXRoQ29uZmlnKCkgaXMgd3JvbmcgaGVyZTogaXQga2V5cyBvZmZcbiAgLy8gVVNFUl9UWVBFICsgVVNFX3tMT0NBTCxTVEFHSU5HfV9PQVVUSCwgbm9uZSBvZiB3aGljaCB0aGUgY29udGFpbmVyIHNldHMsXG4gIC8vIHNvIGl0IGFsd2F5cyByZXR1cm5lZCB0aGUgcHJvZCBVUkwgYW5kIHRoZSBDQSBmZXRjaCA0MDQnZC5cbiAgY29uc3QgYmFzZVVybCA9XG4gICAgb3B0cz8uY2NyQmFzZVVybCA/P1xuICAgIHByb2Nlc3MuZW52LkFOVEhST1BJQ19CQVNFX1VSTCA/P1xuICAgICdodHRwczovL2FwaS5hbnRocm9waWMuY29tJ1xuICBjb25zdCBjYUJ1bmRsZVBhdGggPVxuICAgIG9wdHM/LmNhQnVuZGxlUGF0aCA/PyBqb2luKGhvbWVkaXIoKSwgJy5jY3InLCAnY2EtYnVuZGxlLmNydCcpXG5cbiAgY29uc3QgY2FPayA9IGF3YWl0IGRvd25sb2FkQ2FCdW5kbGUoXG4gICAgYmFzZVVybCxcbiAgICBvcHRzPy5zeXN0ZW1DYVBhdGggPz8gU1lTVEVNX0NBX0JVTkRMRSxcbiAgICBjYUJ1bmRsZVBhdGgsXG4gIClcbiAgaWYgKCFjYU9rKSByZXR1cm4gc3RhdGVcblxuICB0cnkge1xuICAgIGNvbnN0IHdzVXJsID0gYmFzZVVybC5yZXBsYWNlKC9eaHR0cC8sICd3cycpICsgJy92MS9jb2RlL3Vwc3RyZWFtcHJveHkvd3MnXG4gICAgY29uc3QgcmVsYXkgPSBhd2FpdCBzdGFydFVwc3RyZWFtUHJveHlSZWxheSh7IHdzVXJsLCBzZXNzaW9uSWQsIHRva2VuIH0pXG4gICAgcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHJlbGF5LnN0b3AoKSlcbiAgICBzdGF0ZSA9IHsgZW5hYmxlZDogdHJ1ZSwgcG9ydDogcmVsYXkucG9ydCwgY2FCdW5kbGVQYXRoIH1cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFt1cHN0cmVhbXByb3h5XSBlbmFibGVkIG9uIDEyNy4wLjAuMToke3JlbGF5LnBvcnR9YClcbiAgICAvLyBPbmx5IHVubGluayBhZnRlciB0aGUgbGlzdGVuZXIgaXMgdXA6IGlmIENBIGRvd25sb2FkIG9yIGxpc3RlbigpXG4gICAgLy8gZmFpbHMsIGEgc3VwZXJ2aXNvciByZXN0YXJ0IGNhbiByZXRyeSB3aXRoIHRoZSB0b2tlbiBzdGlsbCBvbiBkaXNrLlxuICAgIGF3YWl0IHVubGluayh0b2tlblBhdGgpLmNhdGNoKCgpID0+IHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3Vwc3RyZWFtcHJveHldIHRva2VuIGZpbGUgdW5saW5rIGZhaWxlZCcsIHtcbiAgICAgICAgbGV2ZWw6ICd3YXJuJyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFt1cHN0cmVhbXByb3h5XSByZWxheSBzdGFydCBmYWlsZWQ6ICR7ZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpfTsgcHJveHkgZGlzYWJsZWRgLFxuICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbi8qKlxuICogRW52IHZhcnMgdG8gbWVyZ2UgaW50byBldmVyeSBhZ2VudCBzdWJwcm9jZXNzLiBFbXB0eSB3aGVuIHRoZSBwcm94eSBpc1xuICogZGlzYWJsZWQuIENhbGxlZCBmcm9tIHN1YnByb2Nlc3NFbnYoKSBzbyBCYXNoL01DUC9MU1AvaG9va3MgYWxsIGluaGVyaXRcbiAqIHRoZSBzYW1lIHJlY2lwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVwc3RyZWFtUHJveHlFbnYoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIGlmICghc3RhdGUuZW5hYmxlZCB8fCAhc3RhdGUucG9ydCB8fCAhc3RhdGUuY2FCdW5kbGVQYXRoKSB7XG4gICAgLy8gQ2hpbGQgQ0xJIHByb2Nlc3NlcyBjYW4ndCByZS1pbml0aWFsaXplIHRoZSByZWxheSAodG9rZW4gZmlsZSB3YXNcbiAgICAvLyB1bmxpbmtlZCBieSB0aGUgcGFyZW50KSwgYnV0IHRoZSBwYXJlbnQncyByZWxheSBpcyBzdGlsbCBydW5uaW5nIGFuZFxuICAgIC8vIHJlYWNoYWJsZSBhdCAxMjcuMC4wLjE6PHBvcnQ+LiBJZiB3ZSBpbmhlcml0ZWQgcHJveHkgdmFycyBmcm9tIHRoZVxuICAgIC8vIHBhcmVudCAoSFRUUFNfUFJPWFkgKyBTU0xfQ0VSVF9GSUxFIGJvdGggc2V0KSwgcGFzcyB0aGVtIHRocm91Z2ggc29cbiAgICAvLyBvdXIgc3VicHJvY2Vzc2VzIGFsc28gcm91dGUgdGhyb3VnaCB0aGUgcGFyZW50J3MgcmVsYXkuXG4gICAgaWYgKHByb2Nlc3MuZW52LkhUVFBTX1BST1hZICYmIHByb2Nlc3MuZW52LlNTTF9DRVJUX0ZJTEUpIHtcbiAgICAgIGNvbnN0IGluaGVyaXRlZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBbXG4gICAgICAgICdIVFRQU19QUk9YWScsXG4gICAgICAgICdodHRwc19wcm94eScsXG4gICAgICAgICdOT19QUk9YWScsXG4gICAgICAgICdub19wcm94eScsXG4gICAgICAgICdTU0xfQ0VSVF9GSUxFJyxcbiAgICAgICAgJ05PREVfRVhUUkFfQ0FfQ0VSVFMnLFxuICAgICAgICAnUkVRVUVTVFNfQ0FfQlVORExFJyxcbiAgICAgICAgJ0NVUkxfQ0FfQlVORExFJyxcbiAgICAgIF0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52W2tleV0pIGluaGVyaXRlZFtrZXldID0gcHJvY2Vzcy5lbnZba2V5XVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluaGVyaXRlZFxuICAgIH1cbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCBwcm94eVVybCA9IGBodHRwOi8vMTI3LjAuMC4xOiR7c3RhdGUucG9ydH1gXG4gIC8vIEhUVFBTIG9ubHk6IHRoZSByZWxheSBoYW5kbGVzIENPTk5FQ1QgYW5kIG5vdGhpbmcgZWxzZS4gUGxhaW4gSFRUUCBoYXNcbiAgLy8gbm8gY3JlZGVudGlhbHMgdG8gaW5qZWN0LCBzbyByb3V0aW5nIGl0IHRocm91Z2ggdGhlIHJlbGF5IHdvdWxkIGp1c3RcbiAgLy8gYnJlYWsgdGhlIHJlcXVlc3Qgd2l0aCBhIDQwNS5cbiAgcmV0dXJuIHtcbiAgICBIVFRQU19QUk9YWTogcHJveHlVcmwsXG4gICAgaHR0cHNfcHJveHk6IHByb3h5VXJsLFxuICAgIE5PX1BST1hZOiBOT19QUk9YWV9MSVNULFxuICAgIG5vX3Byb3h5OiBOT19QUk9YWV9MSVNULFxuICAgIFNTTF9DRVJUX0ZJTEU6IHN0YXRlLmNhQnVuZGxlUGF0aCxcbiAgICBOT0RFX0VYVFJBX0NBX0NFUlRTOiBzdGF0ZS5jYUJ1bmRsZVBhdGgsXG4gICAgUkVRVUVTVFNfQ0FfQlVORExFOiBzdGF0ZS5jYUJ1bmRsZVBhdGgsXG4gICAgQ1VSTF9DQV9CVU5ETEU6IHN0YXRlLmNhQnVuZGxlUGF0aCxcbiAgfVxufVxuXG4vKiogVGVzdC1vbmx5OiByZXNldCBtb2R1bGUgc3RhdGUgYmV0d2VlbiB0ZXN0IGNhc2VzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VXBzdHJlYW1Qcm94eUZvclRlc3RzKCk6IHZvaWQge1xuICBzdGF0ZSA9IHsgZW5hYmxlZDogZmFsc2UgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkVG9rZW4ocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3ID0gYXdhaXQgcmVhZEZpbGUocGF0aCwgJ3V0ZjgnKVxuICAgIHJldHVybiByYXcudHJpbSgpIHx8IG51bGxcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGlzRU5PRU5UKGVycikpIHJldHVybiBudWxsXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFt1cHN0cmVhbXByb3h5XSB0b2tlbiByZWFkIGZhaWxlZDogJHtlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycil9YCxcbiAgICAgIHsgbGV2ZWw6ICd3YXJuJyB9LFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogcHJjdGwoUFJfU0VUX0RVTVBBQkxFLCAwKSB2aWEgbGliYyBGRkkuIEJsb2NrcyBzYW1lLVVJRCBwdHJhY2Ugb2YgdGhpc1xuICogcHJvY2Vzcywgc28gYSBwcm9tcHQtaW5qZWN0ZWQgYGdkYiAtcCAkUFBJRGAgY2FuJ3Qgc2NyYXBlIHRoZSB0b2tlbiBmcm9tXG4gKiB0aGUgaGVhcC4gTGludXgtb25seTsgc2lsZW50bHkgbm8tb3BzIGVsc2V3aGVyZS5cbiAqL1xuZnVuY3Rpb24gc2V0Tm9uRHVtcGFibGUoKTogdm9pZCB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnbGludXgnIHx8IHR5cGVvZiBCdW4gPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgIGNvbnN0IGZmaSA9IHJlcXVpcmUoJ2J1bjpmZmknKSBhcyB0eXBlb2YgaW1wb3J0KCdidW46ZmZpJylcbiAgICBjb25zdCBsaWIgPSBmZmkuZGxvcGVuKCdsaWJjLnNvLjYnLCB7XG4gICAgICBwcmN0bDoge1xuICAgICAgICBhcmdzOiBbJ2ludCcsICd1NjQnLCAndTY0JywgJ3U2NCcsICd1NjQnXSxcbiAgICAgICAgcmV0dXJuczogJ2ludCcsXG4gICAgICB9LFxuICAgIH0gYXMgY29uc3QpXG4gICAgY29uc3QgUFJfU0VUX0RVTVBBQkxFID0gNFxuICAgIGNvbnN0IHJjID0gbGliLnN5bWJvbHMucHJjdGwoUFJfU0VUX0RVTVBBQkxFLCAwbiwgMG4sIDBuLCAwbilcbiAgICBpZiAocmMgIT09IDApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgJ1t1cHN0cmVhbXByb3h5XSBwcmN0bChQUl9TRVRfRFVNUEFCTEUsMCkgcmV0dXJuZWQgbm9uemVybycsXG4gICAgICAgIHtcbiAgICAgICAgICBsZXZlbDogJ3dhcm4nLFxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFt1cHN0cmVhbXByb3h5XSBwcmN0bCB1bmF2YWlsYWJsZTogJHtlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycil9YCxcbiAgICAgIHsgbGV2ZWw6ICd3YXJuJyB9LFxuICAgIClcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZENhQnVuZGxlKFxuICBiYXNlVXJsOiBzdHJpbmcsXG4gIHN5c3RlbUNhUGF0aDogc3RyaW5nLFxuICBvdXRQYXRoOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXNsaW50LXBsdWdpbi1uL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vdjEvY29kZS91cHN0cmVhbXByb3h5L2NhLWNlcnRgLCB7XG4gICAgICAvLyBCdW4gaGFzIG5vIGRlZmF1bHQgZmV0Y2ggdGltZW91dCBcdTIwMTQgYSBodW5nIGVuZHBvaW50IHdvdWxkIGJsb2NrIENMSVxuICAgICAgLy8gc3RhcnR1cCBmb3JldmVyLiA1cyBpcyBnZW5lcm91cyBmb3IgYSBzbWFsbCBQRU0uXG4gICAgICBzaWduYWw6IEFib3J0U2lnbmFsLnRpbWVvdXQoNTAwMCksXG4gICAgfSlcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFt1cHN0cmVhbXByb3h5XSBjYS1jZXJ0IGZldGNoICR7cmVzcC5zdGF0dXN9OyBwcm94eSBkaXNhYmxlZGAsXG4gICAgICAgIHsgbGV2ZWw6ICd3YXJuJyB9LFxuICAgICAgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGNjckNhID0gYXdhaXQgcmVzcC50ZXh0KClcbiAgICBjb25zdCBzeXN0ZW1DYSA9IGF3YWl0IHJlYWRGaWxlKHN5c3RlbUNhUGF0aCwgJ3V0ZjgnKS5jYXRjaCgoKSA9PiAnJylcbiAgICBhd2FpdCBta2Rpcihqb2luKG91dFBhdGgsICcuLicpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgIGF3YWl0IHdyaXRlRmlsZShvdXRQYXRoLCBzeXN0ZW1DYSArICdcXG4nICsgY2NyQ2EsICd1dGY4JylcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW3Vwc3RyZWFtcHJveHldIGNhLWNlcnQgZG93bmxvYWQgZmFpbGVkOiAke2VyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKX07IHByb3h5IGRpc2FibGVkYCxcbiAgICAgIHsgbGV2ZWw6ICd3YXJuJyB9LFxuICAgIClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGVzbGludC1wbHVnaW4tbi9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG4vKipcbiAqIENPTk5FQ1Qtb3Zlci1XZWJTb2NrZXQgcmVsYXkgZm9yIENDUiB1cHN0cmVhbXByb3h5LlxuICpcbiAqIExpc3RlbnMgb24gbG9jYWxob3N0IFRDUCwgYWNjZXB0cyBIVFRQIENPTk5FQ1QgZnJvbSBjdXJsL2doL2t1YmVjdGwvZXRjLFxuICogYW5kIHR1bm5lbHMgYnl0ZXMgb3ZlciBXZWJTb2NrZXQgdG8gdGhlIENDUiB1cHN0cmVhbXByb3h5IGVuZHBvaW50LlxuICogVGhlIENDUiBzZXJ2ZXItc2lkZSB0ZXJtaW5hdGVzIHRoZSB0dW5uZWwsIE1JVE1zIFRMUywgaW5qZWN0cyBvcmctY29uZmlndXJlZFxuICogY3JlZGVudGlhbHMgKGUuZy4gREQtQVBJLUtFWSksIGFuZCBmb3J3YXJkcyB0byB0aGUgcmVhbCB1cHN0cmVhbS5cbiAqXG4gKiBXSFkgV2ViU29ja2V0IGFuZCBub3QgcmF3IENPTk5FQ1Q6IENDUiBpbmdyZXNzIGlzIEdLRSBMNyB3aXRoIHBhdGgtcHJlZml4XG4gKiByb3V0aW5nOyB0aGVyZSdzIG5vIGNvbm5lY3RfbWF0Y2hlciBpbiBjZGstY29uc3RydWN0cy4gVGhlIHNlc3Npb24taW5ncmVzc1xuICogdHVubmVsIChzZXNzaW9ucy90dW5uZWwvdjFhbHBoYS90dW5uZWwucHJvdG8pIGFscmVhZHkgdXNlcyB0aGlzIHBhdHRlcm4uXG4gKlxuICogUHJvdG9jb2w6IGJ5dGVzIGFyZSB3cmFwcGVkIGluIFVwc3RyZWFtUHJveHlDaHVuayBwcm90b2J1ZiBtZXNzYWdlc1xuICogKGBtZXNzYWdlIFVwc3RyZWFtUHJveHlDaHVuayB7IGJ5dGVzIGRhdGEgPSAxOyB9YCkgZm9yIGNvbXBhdGliaWxpdHkgd2l0aFxuICogZ2F0ZXdheS5OZXdXZWJTb2NrZXRTdHJlYW1BZGFwdGVyIG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIsIHR5cGUgU29ja2V0IGFzIE5vZGVTb2NrZXQgfSBmcm9tICdub2RlOm5ldCdcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZ2V0V2ViU29ja2V0VExTT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL210bHMuanMnXG5pbXBvcnQgeyBnZXRXZWJTb2NrZXRQcm94eUFnZW50LCBnZXRXZWJTb2NrZXRQcm94eVVybCB9IGZyb20gJy4uL3V0aWxzL3Byb3h5LmpzJ1xuXG4vLyBUaGUgQ0NSIGNvbnRhaW5lciBydW5zIGJlaGluZCBhbiBlZ3Jlc3MgZ2F0ZXdheSBcdTIwMTQgZGlyZWN0IG91dGJvdW5kIGlzXG4vLyBibG9ja2VkLCBzbyB0aGUgV1MgdXBncmFkZSBtdXN0IGdvIHRocm91Z2ggdGhlIHNhbWUgSFRUUCBDT05ORUNUIHByb3h5XG4vLyBldmVyeXRoaW5nIGVsc2UgdXNlcy4gdW5kaWNpJ3MgZ2xvYmFsVGhpcy5XZWJTb2NrZXQgZG9lcyBub3QgY29uc3VsdFxuLy8gdGhlIGdsb2JhbCBkaXNwYXRjaGVyIGZvciB0aGUgdXBncmFkZSwgc28gdW5kZXIgTm9kZSB3ZSB1c2UgdGhlIHdzIHBhY2thZ2Vcbi8vIHdpdGggYW4gZXhwbGljaXQgYWdlbnQgKHNhbWUgcGF0dGVybiBhcyBTZXNzaW9uc1dlYlNvY2tldCkuIEJ1bidzIG5hdGl2ZVxuLy8gV2ViU29ja2V0IHRha2VzIGEgcHJveHkgVVJMIGRpcmVjdGx5LiBQcmVsb2FkZWQgaW4gc3RhcnROb2RlUmVsYXkgc29cbi8vIG9wZW5UdW5uZWwgc3RheXMgc3luY2hyb25vdXMgYW5kIHRoZSBDT05ORUNUIHN0YXRlIG1hY2hpbmUgZG9lc24ndCByYWNlLlxudHlwZSBXU0N0b3IgPSB0eXBlb2YgaW1wb3J0KCd3cycpLmRlZmF1bHRcbmxldCBub2RlV1NDdG9yOiBXU0N0b3IgfCB1bmRlZmluZWRcblxuLy8gSW50ZXJzZWN0aW9uIG9mIHRoZSBzdXJmYWNlIG9wZW5UdW5uZWwgdG91Y2hlcy4gQm90aCB1bmRpY2knc1xuLy8gZ2xvYmFsVGhpcy5XZWJTb2NrZXQgYW5kIHRoZSB3cyBwYWNrYWdlIHNhdGlzZnkgdGhpcyB2aWEgcHJvcGVydHktc3R5bGVcbi8vIG9uWCBoYW5kbGVycy5cbnR5cGUgV2ViU29ja2V0TGlrZSA9IFBpY2s8XG4gIFdlYlNvY2tldCxcbiAgfCAnb25vcGVuJ1xuICB8ICdvbm1lc3NhZ2UnXG4gIHwgJ29uZXJyb3InXG4gIHwgJ29uY2xvc2UnXG4gIHwgJ3NlbmQnXG4gIHwgJ2Nsb3NlJ1xuICB8ICdyZWFkeVN0YXRlJ1xuICB8ICdiaW5hcnlUeXBlJ1xuPlxuXG4vLyBFbnZveSBwZXItcmVxdWVzdCBidWZmZXIgY2FwLiBXZWVrLTEgRGF0YWRvZyBwYXlsb2FkcyB3b24ndCBoaXQgdGhpcywgYnV0XG4vLyBkZXNpZ24gZm9yIGl0IHNvIGdpdC1wdXNoIGRvZXNuJ3QgbmVlZCBhIHJlbGF5IHJld3JpdGUuXG5jb25zdCBNQVhfQ0hVTktfQllURVMgPSA1MTIgKiAxMDI0XG5cbi8vIFNpZGVjYXIgaWRsZSB0aW1lb3V0IGlzIDUwczsgcGluZyB3ZWxsIGluc2lkZSB0aGF0LlxuY29uc3QgUElOR19JTlRFUlZBTF9NUyA9IDMwXzAwMFxuXG4vKipcbiAqIEVuY29kZSBhbiBVcHN0cmVhbVByb3h5Q2h1bmsgcHJvdG9idWYgbWVzc2FnZSBieSBoYW5kLlxuICpcbiAqIEZvciBgbWVzc2FnZSBVcHN0cmVhbVByb3h5Q2h1bmsgeyBieXRlcyBkYXRhID0gMTsgfWAgdGhlIHdpcmUgZm9ybWF0IGlzOlxuICogICB0YWcgPSAoZmllbGRfbnVtYmVyIDw8IDMpIHwgd2lyZV90eXBlID0gKDEgPDwgMykgfCAyID0gMHgwYVxuICogICBmb2xsb3dlZCBieSB2YXJpbnQgbGVuZ3RoLCBmb2xsb3dlZCBieSB0aGUgYnl0ZXMuXG4gKlxuICogcHJvdG9idWZqcyB3b3VsZCBiZSB0aGUgZ2VuZXJhbCBhbnN3ZXI7IGZvciBhIHNpbmdsZS1maWVsZCBieXRlcyBtZXNzYWdlXG4gKiB0aGUgaGFuZCBlbmNvZGluZyBpcyAxMCBsaW5lcyBhbmQgYXZvaWRzIGEgcnVudGltZSBkZXAgaW4gdGhlIGhvdCBwYXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQ2h1bmsoZGF0YTogVWludDhBcnJheSk6IFVpbnQ4QXJyYXkge1xuICBjb25zdCBsZW4gPSBkYXRhLmxlbmd0aFxuICAvLyB2YXJpbnQgZW5jb2Rpbmcgb2YgbGVuZ3RoIFx1MjAxNCBtb3N0IGNodW5rcyBmaXQgaW4gMVx1MjAxMzMgbGVuZ3RoIGJ5dGVzXG4gIGNvbnN0IHZhcmludDogbnVtYmVyW10gPSBbXVxuICBsZXQgbiA9IGxlblxuICB3aGlsZSAobiA+IDB4N2YpIHtcbiAgICB2YXJpbnQucHVzaCgobiAmIDB4N2YpIHwgMHg4MClcbiAgICBuID4+Pj0gN1xuICB9XG4gIHZhcmludC5wdXNoKG4pXG4gIGNvbnN0IG91dCA9IG5ldyBVaW50OEFycmF5KDEgKyB2YXJpbnQubGVuZ3RoICsgbGVuKVxuICBvdXRbMF0gPSAweDBhXG4gIG91dC5zZXQodmFyaW50LCAxKVxuICBvdXQuc2V0KGRhdGEsIDEgKyB2YXJpbnQubGVuZ3RoKVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogRGVjb2RlIGFuIFVwc3RyZWFtUHJveHlDaHVuay4gUmV0dXJucyB0aGUgZGF0YSBmaWVsZCwgb3IgbnVsbCBpZiBtYWxmb3JtZWQuXG4gKiBUb2xlcmF0ZXMgdGhlIHNlcnZlciBzZW5kaW5nIGEgemVyby1sZW5ndGggY2h1bmsgKGtlZXBhbGl2ZSBzZW1hbnRpY3MpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlQ2h1bmsoYnVmOiBVaW50OEFycmF5KTogVWludDhBcnJheSB8IG51bGwge1xuICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApXG4gIGlmIChidWZbMF0gIT09IDB4MGEpIHJldHVybiBudWxsXG4gIGxldCBsZW4gPSAwXG4gIGxldCBzaGlmdCA9IDBcbiAgbGV0IGkgPSAxXG4gIHdoaWxlIChpIDwgYnVmLmxlbmd0aCkge1xuICAgIGNvbnN0IGIgPSBidWZbaV0hXG4gICAgbGVuIHw9IChiICYgMHg3ZikgPDwgc2hpZnRcbiAgICBpKytcbiAgICBpZiAoKGIgJiAweDgwKSA9PT0gMCkgYnJlYWtcbiAgICBzaGlmdCArPSA3XG4gICAgaWYgKHNoaWZ0ID4gMjgpIHJldHVybiBudWxsXG4gIH1cbiAgaWYgKGkgKyBsZW4gPiBidWYubGVuZ3RoKSByZXR1cm4gbnVsbFxuICByZXR1cm4gYnVmLnN1YmFycmF5KGksIGkgKyBsZW4pXG59XG5cbmV4cG9ydCB0eXBlIFVwc3RyZWFtUHJveHlSZWxheSA9IHtcbiAgcG9ydDogbnVtYmVyXG4gIHN0b3A6ICgpID0+IHZvaWRcbn1cblxudHlwZSBDb25uU3RhdGUgPSB7XG4gIHdzPzogV2ViU29ja2V0TGlrZVxuICBjb25uZWN0QnVmOiBCdWZmZXJcbiAgcGluZ2VyPzogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+XG4gIC8vIEJ5dGVzIHRoYXQgYXJyaXZlZCBhZnRlciB0aGUgQ09OTkVDVCBoZWFkZXIgYnV0IGJlZm9yZSB3cy5vbm9wZW4gZmlyZWQuXG4gIC8vIFRDUCBjYW4gY29hbGVzY2UgQ09OTkVDVCArIENsaWVudEhlbGxvIGludG8gb25lIHBhY2tldCwgYW5kIHRoZSBzb2NrZXQnc1xuICAvLyBkYXRhIGNhbGxiYWNrIGNhbiBmaXJlIGFnYWluIHdoaWxlIHRoZSBXUyBoYW5kc2hha2UgaXMgc3RpbGwgaW4gZmxpZ2h0LlxuICAvLyBCb3RoIGNhc2VzIHdvdWxkIHNpbGVudGx5IGRyb3AgYnl0ZXMgd2l0aG91dCB0aGlzIGJ1ZmZlci5cbiAgcGVuZGluZzogQnVmZmVyW11cbiAgd3NPcGVuOiBib29sZWFuXG4gIC8vIFNldCBvbmNlIHRoZSBzZXJ2ZXIncyAyMDAgQ29ubmVjdGlvbiBFc3RhYmxpc2hlZCBoYXMgYmVlbiBmb3J3YXJkZWQgYW5kXG4gIC8vIHRoZSB0dW5uZWwgaXMgY2FycnlpbmcgVExTLiBBZnRlciB0aGF0LCB3cml0aW5nIGEgcGxhaW50ZXh0IDUwMiB3b3VsZFxuICAvLyBjb3JydXB0IHRoZSBjbGllbnQncyBUTFMgc3RyZWFtIFx1MjAxNCBqdXN0IGNsb3NlIGluc3RlYWQuXG4gIGVzdGFibGlzaGVkOiBib29sZWFuXG4gIC8vIFdTIG9uZXJyb3IgaXMgYWx3YXlzIGZvbGxvd2VkIGJ5IG9uY2xvc2U7IHdpdGhvdXQgYSBndWFyZCB0aGUgc2Vjb25kXG4gIC8vIGhhbmRsZXIgd291bGQgc29jay5lbmQoKSBhbiBhbHJlYWR5LWVuZGVkIHNvY2tldC4gRmlyc3QgY2FsbGVyIHdpbnMuXG4gIGNsb3NlZDogYm9vbGVhblxufVxuXG4vKipcbiAqIE1pbmltYWwgc29ja2V0IGFic3RyYWN0aW9uIHNvIHRoZSBDT05ORUNUIHBhcnNlciBhbmQgV1MgdHVubmVsIHBsdW1iaW5nXG4gKiBhcmUgcnVudGltZS1hZ25vc3RpYy4gSW1wbGVtZW50YXRpb25zIGhhbmRsZSB3cml0ZSBiYWNrcHJlc3N1cmUgaW50ZXJuYWxseTpcbiAqIEJ1bidzIHNvY2sud3JpdGUoKSBkb2VzIHBhcnRpYWwgd3JpdGVzIGFuZCBuZWVkcyBleHBsaWNpdCB0YWlsLXF1ZXVlaW5nO1xuICogTm9kZSdzIG5ldC5Tb2NrZXQgYnVmZmVycyB1bmNvbmRpdGlvbmFsbHkgYW5kIG5ldmVyIGRyb3BzIGJ5dGVzLlxuICovXG50eXBlIENsaWVudFNvY2tldCA9IHtcbiAgd3JpdGU6IChkYXRhOiBVaW50OEFycmF5IHwgc3RyaW5nKSA9PiB2b2lkXG4gIGVuZDogKCkgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiBuZXdDb25uU3RhdGUoKTogQ29ublN0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0QnVmOiBCdWZmZXIuYWxsb2MoMCksXG4gICAgcGVuZGluZzogW10sXG4gICAgd3NPcGVuOiBmYWxzZSxcbiAgICBlc3RhYmxpc2hlZDogZmFsc2UsXG4gICAgY2xvc2VkOiBmYWxzZSxcbiAgfVxufVxuXG4vKipcbiAqIFN0YXJ0IHRoZSByZWxheS4gUmV0dXJucyB0aGUgZXBoZW1lcmFsIHBvcnQgaXQgYm91bmQgYW5kIGEgc3RvcCBmdW5jdGlvbi5cbiAqIFVzZXMgQnVuLmxpc3RlbiB3aGVuIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIE5vZGUncyBuZXQuY3JlYXRlU2VydmVyIFx1MjAxNCB0aGUgQ0NSXG4gKiBjb250YWluZXIgcnVucyB0aGUgQ0xJIHVuZGVyIE5vZGUsIG5vdCBCdW4uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFVwc3RyZWFtUHJveHlSZWxheShvcHRzOiB7XG4gIHdzVXJsOiBzdHJpbmdcbiAgc2Vzc2lvbklkOiBzdHJpbmdcbiAgdG9rZW46IHN0cmluZ1xufSk6IFByb21pc2U8VXBzdHJlYW1Qcm94eVJlbGF5PiB7XG4gIGNvbnN0IGF1dGhIZWFkZXIgPVxuICAgICdCYXNpYyAnICsgQnVmZmVyLmZyb20oYCR7b3B0cy5zZXNzaW9uSWR9OiR7b3B0cy50b2tlbn1gKS50b1N0cmluZygnYmFzZTY0JylcbiAgLy8gV1MgdXBncmFkZSBpdHNlbGYgaXMgYXV0aC1nYXRlZCAocHJvdG8gYXV0aG46IFBSSVZBVEVfQVBJKSBcdTIwMTQgdGhlIGdhdGV3YXlcbiAgLy8gd2FudHMgdGhlIHNlc3Npb24taW5ncmVzcyBKV1Qgb24gdGhlIHVwZ3JhZGUgcmVxdWVzdCwgc2VwYXJhdGUgZnJvbSB0aGVcbiAgLy8gUHJveHktQXV0aG9yaXphdGlvbiB0aGF0IHJpZGVzIGluc2lkZSB0aGUgdHVubmVsZWQgQ09OTkVDVC5cbiAgY29uc3Qgd3NBdXRoSGVhZGVyID0gYEJlYXJlciAke29wdHMudG9rZW59YFxuXG4gIGNvbnN0IHJlbGF5ID1cbiAgICB0eXBlb2YgQnVuICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBzdGFydEJ1blJlbGF5KG9wdHMud3NVcmwsIGF1dGhIZWFkZXIsIHdzQXV0aEhlYWRlcilcbiAgICAgIDogYXdhaXQgc3RhcnROb2RlUmVsYXkob3B0cy53c1VybCwgYXV0aEhlYWRlciwgd3NBdXRoSGVhZGVyKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhgW3Vwc3RyZWFtcHJveHldIHJlbGF5IGxpc3RlbmluZyBvbiAxMjcuMC4wLjE6JHtyZWxheS5wb3J0fWApXG4gIHJldHVybiByZWxheVxufVxuXG5mdW5jdGlvbiBzdGFydEJ1blJlbGF5KFxuICB3c1VybDogc3RyaW5nLFxuICBhdXRoSGVhZGVyOiBzdHJpbmcsXG4gIHdzQXV0aEhlYWRlcjogc3RyaW5nLFxuKTogVXBzdHJlYW1Qcm94eVJlbGF5IHtcbiAgLy8gQnVuIFRDUCBzb2NrZXRzIGRvbid0IGF1dG8tYnVmZmVyIHBhcnRpYWwgd3JpdGVzOiBzb2NrLndyaXRlKCkgcmV0dXJuc1xuICAvLyB0aGUgYnl0ZSBjb3VudCBhY3R1YWxseSBoYW5kZWQgdG8gdGhlIGtlcm5lbCwgYW5kIHRoZSByZW1haW5kZXIgaXNcbiAgLy8gc2lsZW50bHkgZHJvcHBlZC4gV2hlbiB0aGUga2VybmVsIGJ1ZmZlciBmaWxscywgd2UgcXVldWUgdGhlIHRhaWwgYW5kXG4gIC8vIGxldCB0aGUgZHJhaW4gaGFuZGxlciBmbHVzaCBpdC4gUGVyLXNvY2tldCBiZWNhdXNlIHRoZSBhZGFwdGVyIGNsb3N1cmVcbiAgLy8gb3V0bGl2ZXMgaW5kaXZpZHVhbCBoYW5kbGVyIGNhbGxzLlxuICB0eXBlIEJ1blN0YXRlID0gQ29ublN0YXRlICYgeyB3cml0ZUJ1ZjogVWludDhBcnJheVtdIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL3JlcXVpcmUtYnVuLXR5cGVvZi1ndWFyZCAtLSBjYWxsZXIgZGlzcGF0Y2hlcyBvbiB0eXBlb2YgQnVuXG4gIGNvbnN0IHNlcnZlciA9IEJ1bi5saXN0ZW48QnVuU3RhdGU+KHtcbiAgICBob3N0bmFtZTogJzEyNy4wLjAuMScsXG4gICAgcG9ydDogMCxcbiAgICBzb2NrZXQ6IHtcbiAgICAgIG9wZW4oc29jaykge1xuICAgICAgICBzb2NrLmRhdGEgPSB7IC4uLm5ld0Nvbm5TdGF0ZSgpLCB3cml0ZUJ1ZjogW10gfVxuICAgICAgfSxcbiAgICAgIGRhdGEoc29jaywgZGF0YSkge1xuICAgICAgICBjb25zdCBzdCA9IHNvY2suZGF0YVxuICAgICAgICBjb25zdCBhZGFwdGVyOiBDbGllbnRTb2NrZXQgPSB7XG4gICAgICAgICAgd3JpdGU6IHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPVxuICAgICAgICAgICAgICB0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IEJ1ZmZlci5mcm9tKHBheWxvYWQsICd1dGY4JylcbiAgICAgICAgICAgICAgICA6IHBheWxvYWRcbiAgICAgICAgICAgIGlmIChzdC53cml0ZUJ1Zi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHN0LndyaXRlQnVmLnB1c2goYnl0ZXMpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbiA9IHNvY2sud3JpdGUoYnl0ZXMpXG4gICAgICAgICAgICBpZiAobiA8IGJ5dGVzLmxlbmd0aCkgc3Qud3JpdGVCdWYucHVzaChieXRlcy5zdWJhcnJheShuKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuZDogKCkgPT4gc29jay5lbmQoKSxcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVEYXRhKGFkYXB0ZXIsIHN0LCBkYXRhLCB3c1VybCwgYXV0aEhlYWRlciwgd3NBdXRoSGVhZGVyKVxuICAgICAgfSxcbiAgICAgIGRyYWluKHNvY2spIHtcbiAgICAgICAgY29uc3Qgc3QgPSBzb2NrLmRhdGFcbiAgICAgICAgd2hpbGUgKHN0LndyaXRlQnVmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBjaHVuayA9IHN0LndyaXRlQnVmWzBdIVxuICAgICAgICAgIGNvbnN0IG4gPSBzb2NrLndyaXRlKGNodW5rKVxuICAgICAgICAgIGlmIChuIDwgY2h1bmsubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdC53cml0ZUJ1ZlswXSA9IGNodW5rLnN1YmFycmF5KG4pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgc3Qud3JpdGVCdWYuc2hpZnQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xvc2Uoc29jaykge1xuICAgICAgICBjbGVhbnVwQ29ubihzb2NrLmRhdGEpXG4gICAgICB9LFxuICAgICAgZXJyb3Ioc29jaywgZXJyKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW3Vwc3RyZWFtcHJveHldIGNsaWVudCBzb2NrZXQgZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgICAgY2xlYW51cENvbm4oc29jay5kYXRhKVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcG9ydDogc2VydmVyLnBvcnQsXG4gICAgc3RvcDogKCkgPT4gc2VydmVyLnN0b3AodHJ1ZSksXG4gIH1cbn1cblxuLy8gRXhwb3J0ZWQgc28gdGVzdHMgY2FuIGV4ZXJjaXNlIHRoZSBOb2RlIHBhdGggZGlyZWN0bHkgXHUyMDE0IHRoZSB0ZXN0IHJ1bm5lciBpc1xuLy8gQnVuLCBzbyB0aGUgcnVudGltZSBkaXNwYXRjaCBpbiBzdGFydFVwc3RyZWFtUHJveHlSZWxheSBhbHdheXMgcGlja3MgQnVuLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0Tm9kZVJlbGF5KFxuICB3c1VybDogc3RyaW5nLFxuICBhdXRoSGVhZGVyOiBzdHJpbmcsXG4gIHdzQXV0aEhlYWRlcjogc3RyaW5nLFxuKTogUHJvbWlzZTxVcHN0cmVhbVByb3h5UmVsYXk+IHtcbiAgbm9kZVdTQ3RvciA9IChhd2FpdCBpbXBvcnQoJ3dzJykpLmRlZmF1bHRcbiAgY29uc3Qgc3RhdGVzID0gbmV3IFdlYWtNYXA8Tm9kZVNvY2tldCwgQ29ublN0YXRlPigpXG5cbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHNvY2sgPT4ge1xuICAgIGNvbnN0IHN0ID0gbmV3Q29ublN0YXRlKClcbiAgICBzdGF0ZXMuc2V0KHNvY2ssIHN0KVxuICAgIC8vIE5vZGUncyBzb2NrLndyaXRlKCkgYnVmZmVycyBpbnRlcm5hbGx5IFx1MjAxNCBhIGZhbHNlIHJldHVybiBzaWduYWxzXG4gICAgLy8gYmFja3ByZXNzdXJlIGJ1dCB0aGUgYnl0ZXMgYXJlIGFscmVhZHkgcXVldWVkLCBzbyBubyB0YWlsLXRyYWNraW5nXG4gICAgLy8gbmVlZGVkIGZvciBjb3JyZWN0bmVzcy4gV2Vlay0xIHBheWxvYWRzIHdvbid0IHN0cmVzcyB0aGUgYnVmZmVyLlxuICAgIGNvbnN0IGFkYXB0ZXI6IENsaWVudFNvY2tldCA9IHtcbiAgICAgIHdyaXRlOiBwYXlsb2FkID0+IHtcbiAgICAgICAgc29jay53cml0ZSh0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgPyBwYXlsb2FkIDogQnVmZmVyLmZyb20ocGF5bG9hZCkpXG4gICAgICB9LFxuICAgICAgZW5kOiAoKSA9PiBzb2NrLmVuZCgpLFxuICAgIH1cbiAgICBzb2NrLm9uKCdkYXRhJywgZGF0YSA9PlxuICAgICAgaGFuZGxlRGF0YShhZGFwdGVyLCBzdCwgZGF0YSwgd3NVcmwsIGF1dGhIZWFkZXIsIHdzQXV0aEhlYWRlciksXG4gICAgKVxuICAgIHNvY2sub24oJ2Nsb3NlJywgKCkgPT4gY2xlYW51cENvbm4oc3RhdGVzLmdldChzb2NrKSkpXG4gICAgc29jay5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGBbdXBzdHJlYW1wcm94eV0gY2xpZW50IHNvY2tldCBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxuICAgICAgY2xlYW51cENvbm4oc3RhdGVzLmdldChzb2NrKSlcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2VydmVyLm9uY2UoJ2Vycm9yJywgcmVqZWN0KVxuICAgIHNlcnZlci5saXN0ZW4oMCwgJzEyNy4wLjAuMScsICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpXG4gICAgICBpZiAoYWRkciA9PT0gbnVsbCB8fCB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndXBzdHJlYW1wcm94eTogc2VydmVyIGhhcyBubyBUQ1AgYWRkcmVzcycpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlc29sdmUoe1xuICAgICAgICBwb3J0OiBhZGRyLnBvcnQsXG4gICAgICAgIHN0b3A6ICgpID0+IHNlcnZlci5jbG9zZSgpLFxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIFNoYXJlZCBwZXItY29ubmVjdGlvbiBkYXRhIGhhbmRsZXIuIFBoYXNlIDEgYWNjdW11bGF0ZXMgdGhlIENPTk5FQ1QgcmVxdWVzdDtcbiAqIHBoYXNlIDIgZm9yd2FyZHMgY2xpZW50IGJ5dGVzIG92ZXIgdGhlIFdTIHR1bm5lbC5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlRGF0YShcbiAgc29jazogQ2xpZW50U29ja2V0LFxuICBzdDogQ29ublN0YXRlLFxuICBkYXRhOiBCdWZmZXIsXG4gIHdzVXJsOiBzdHJpbmcsXG4gIGF1dGhIZWFkZXI6IHN0cmluZyxcbiAgd3NBdXRoSGVhZGVyOiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgLy8gUGhhc2UgMTogYWNjdW11bGF0ZSB1bnRpbCB3ZSd2ZSBzZWVuIHRoZSBmdWxsIENPTk5FQ1QgcmVxdWVzdFxuICAvLyAodGVybWluYXRlZCBieSBDUkxGIENSTEYpLiBjdXJsL2doIHNlbmQgdGhpcyBpbiBvbmUgcGFja2V0LCBidXRcbiAgLy8gZG9uJ3QgYXNzdW1lIHRoYXQuXG4gIGlmICghc3Qud3MpIHtcbiAgICBzdC5jb25uZWN0QnVmID0gQnVmZmVyLmNvbmNhdChbc3QuY29ubmVjdEJ1ZiwgZGF0YV0pXG4gICAgY29uc3QgaGVhZGVyRW5kID0gc3QuY29ubmVjdEJ1Zi5pbmRleE9mKCdcXHJcXG5cXHJcXG4nKVxuICAgIGlmIChoZWFkZXJFbmQgPT09IC0xKSB7XG4gICAgICAvLyBHdWFyZCBhZ2FpbnN0IGEgY2xpZW50IHRoYXQgbmV2ZXIgc2VuZHMgQ1JMRkNSTEYuXG4gICAgICBpZiAoc3QuY29ubmVjdEJ1Zi5sZW5ndGggPiA4MTkyKSB7XG4gICAgICAgIHNvY2sud3JpdGUoJ0hUVFAvMS4xIDQwMCBCYWQgUmVxdWVzdFxcclxcblxcclxcbicpXG4gICAgICAgIHNvY2suZW5kKClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZXFIZWFkID0gc3QuY29ubmVjdEJ1Zi5zdWJhcnJheSgwLCBoZWFkZXJFbmQpLnRvU3RyaW5nKCd1dGY4JylcbiAgICBjb25zdCBmaXJzdExpbmUgPSByZXFIZWFkLnNwbGl0KCdcXHJcXG4nKVswXSA/PyAnJ1xuICAgIGNvbnN0IG0gPSBmaXJzdExpbmUubWF0Y2goL15DT05ORUNUXFxzKyhcXFMrKVxccytIVFRQXFwvMVxcLlswMV0kL2kpXG4gICAgaWYgKCFtKSB7XG4gICAgICBzb2NrLndyaXRlKCdIVFRQLzEuMSA0MDUgTWV0aG9kIE5vdCBBbGxvd2VkXFxyXFxuXFxyXFxuJylcbiAgICAgIHNvY2suZW5kKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBTdGFzaCBhbnkgYnl0ZXMgdGhhdCBhcnJpdmVkIGFmdGVyIHRoZSBDT05ORUNUIGhlYWRlciBzb1xuICAgIC8vIG9wZW5UdW5uZWwgY2FuIGZsdXNoIHRoZW0gb25jZSB0aGUgV1MgaXMgb3Blbi5cbiAgICBjb25zdCB0cmFpbGluZyA9IHN0LmNvbm5lY3RCdWYuc3ViYXJyYXkoaGVhZGVyRW5kICsgNClcbiAgICBpZiAodHJhaWxpbmcubGVuZ3RoID4gMCkge1xuICAgICAgc3QucGVuZGluZy5wdXNoKEJ1ZmZlci5mcm9tKHRyYWlsaW5nKSlcbiAgICB9XG4gICAgc3QuY29ubmVjdEJ1ZiA9IEJ1ZmZlci5hbGxvYygwKVxuICAgIG9wZW5UdW5uZWwoc29jaywgc3QsIGZpcnN0TGluZSwgd3NVcmwsIGF1dGhIZWFkZXIsIHdzQXV0aEhlYWRlcilcbiAgICByZXR1cm5cbiAgfVxuICAvLyBQaGFzZSAyOiBXUyBleGlzdHMuIElmIGl0IGlzbid0IE9QRU4geWV0LCBidWZmZXI7IHdzLm9ub3BlbiB3aWxsXG4gIC8vIGZsdXNoLiBPbmNlIG9wZW4sIHB1bXAgY2xpZW50IGJ5dGVzIHRvIFdTIGluIGNodW5rcy5cbiAgaWYgKCFzdC53c09wZW4pIHtcbiAgICBzdC5wZW5kaW5nLnB1c2goQnVmZmVyLmZyb20oZGF0YSkpXG4gICAgcmV0dXJuXG4gIH1cbiAgZm9yd2FyZFRvV3Moc3Qud3MsIGRhdGEpXG59XG5cbmZ1bmN0aW9uIG9wZW5UdW5uZWwoXG4gIHNvY2s6IENsaWVudFNvY2tldCxcbiAgc3Q6IENvbm5TdGF0ZSxcbiAgY29ubmVjdExpbmU6IHN0cmluZyxcbiAgd3NVcmw6IHN0cmluZyxcbiAgYXV0aEhlYWRlcjogc3RyaW5nLFxuICB3c0F1dGhIZWFkZXI6IHN0cmluZyxcbik6IHZvaWQge1xuICAvLyBjb3JlL3dlYnNvY2tldC9zdHJlYW0uZ28gcGlja3MgSlNPTiB2cyBiaW5hcnktcHJvdG8gZnJvbSB0aGUgdXBncmFkZVxuICAvLyByZXF1ZXN0J3MgQ29udGVudC1UeXBlIGhlYWRlciAoZGVmYXVsdHMgdG8gSlNPTikuIFdpdGhvdXQgYXBwbGljYXRpb24vcHJvdG9cbiAgLy8gdGhlIHNlcnZlciBwcm90b2pzb24uVW5tYXJzaGFscyBvdXIgaGFuZC1lbmNvZGVkIGJpbmFyeSBjaHVua3MgYW5kIGZhaWxzXG4gIC8vIHNpbGVudGx5IHdpdGggRU9GLlxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vcHJvdG8nLFxuICAgIEF1dGhvcml6YXRpb246IHdzQXV0aEhlYWRlcixcbiAgfVxuICBsZXQgd3M6IFdlYlNvY2tldExpa2VcbiAgaWYgKG5vZGVXU0N0b3IpIHtcbiAgICB3cyA9IG5ldyBub2RlV1NDdG9yKHdzVXJsLCB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgYWdlbnQ6IGdldFdlYlNvY2tldFByb3h5QWdlbnQod3NVcmwpLFxuICAgICAgLi4uZ2V0V2ViU29ja2V0VExTT3B0aW9ucygpLFxuICAgIH0pIGFzIHVua25vd24gYXMgV2ViU29ja2V0TGlrZVxuICB9IGVsc2Uge1xuICAgIHdzID0gbmV3IGdsb2JhbFRoaXMuV2ViU29ja2V0KHdzVXJsLCB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFx1MjAxNCBCdW4gZXh0ZW5zaW9uOyBub3QgaW4gbGliLmRvbSBXZWJTb2NrZXQgdHlwZXNcbiAgICAgIGhlYWRlcnMsXG4gICAgICBwcm94eTogZ2V0V2ViU29ja2V0UHJveHlVcmwod3NVcmwpLFxuICAgICAgdGxzOiBnZXRXZWJTb2NrZXRUTFNPcHRpb25zKCkgfHwgdW5kZWZpbmVkLFxuICAgIH0pXG4gIH1cbiAgd3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgc3Qud3MgPSB3c1xuXG4gIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAvLyBGaXJzdCBjaHVuayBjYXJyaWVzIHRoZSBDT05ORUNUIGxpbmUgcGx1cyBQcm94eS1BdXRob3JpemF0aW9uIHNvIHRoZVxuICAgIC8vIHNlcnZlciBjYW4gYXV0aCB0aGUgdHVubmVsIGFuZCBrbm93IHRoZSB0YXJnZXQgaG9zdDpwb3J0LiBTZXJ2ZXJcbiAgICAvLyByZXNwb25kcyB3aXRoIGl0cyBvd24gXCJIVFRQLzEuMSAyMDBcIiBvdmVyIHRoZSB0dW5uZWw7IHdlIGp1c3QgcGlwZSBpdC5cbiAgICBjb25zdCBoZWFkID1cbiAgICAgIGAke2Nvbm5lY3RMaW5lfVxcclxcbmAgKyBgUHJveHktQXV0aG9yaXphdGlvbjogJHthdXRoSGVhZGVyfVxcclxcbmAgKyBgXFxyXFxuYFxuICAgIHdzLnNlbmQoZW5jb2RlQ2h1bmsoQnVmZmVyLmZyb20oaGVhZCwgJ3V0ZjgnKSkpXG4gICAgLy8gRmx1c2ggYW55dGhpbmcgdGhhdCBhcnJpdmVkIHdoaWxlIHRoZSBXUyBoYW5kc2hha2Ugd2FzIGluIGZsaWdodCBcdTIwMTRcbiAgICAvLyB0cmFpbGluZyBieXRlcyBmcm9tIHRoZSBDT05ORUNUIHBhY2tldCBhbmQgYW55IGRhdGEoKSBjYWxsYmFja3MgdGhhdFxuICAgIC8vIGZpcmVkIGJlZm9yZSBvbm9wZW4uXG4gICAgc3Qud3NPcGVuID0gdHJ1ZVxuICAgIGZvciAoY29uc3QgYnVmIG9mIHN0LnBlbmRpbmcpIHtcbiAgICAgIGZvcndhcmRUb1dzKHdzLCBidWYpXG4gICAgfVxuICAgIHN0LnBlbmRpbmcgPSBbXVxuICAgIC8vIE5vdCBhbGwgV1MgaW1wbGVtZW50YXRpb25zIGV4cG9zZSBwaW5nKCk7IGVtcHR5IGNodW5rIHdvcmtzIGFzIGFuXG4gICAgLy8gYXBwbGljYXRpb24tbGV2ZWwga2VlcGFsaXZlIHRoZSBzZXJ2ZXIgY2FuIGlnbm9yZS5cbiAgICBzdC5waW5nZXIgPSBzZXRJbnRlcnZhbChzZW5kS2VlcGFsaXZlLCBQSU5HX0lOVEVSVkFMX01TLCB3cylcbiAgfVxuXG4gIHdzLm9ubWVzc2FnZSA9IGV2ID0+IHtcbiAgICBjb25zdCByYXcgPVxuICAgICAgZXYuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyXG4gICAgICAgID8gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSlcbiAgICAgICAgOiBuZXcgVWludDhBcnJheShCdWZmZXIuZnJvbShldi5kYXRhKSlcbiAgICBjb25zdCBwYXlsb2FkID0gZGVjb2RlQ2h1bmsocmF3KVxuICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQubGVuZ3RoID4gMCkge1xuICAgICAgc3QuZXN0YWJsaXNoZWQgPSB0cnVlXG4gICAgICBzb2NrLndyaXRlKHBheWxvYWQpXG4gICAgfVxuICB9XG5cbiAgd3Mub25lcnJvciA9IGV2ID0+IHtcbiAgICBjb25zdCBtc2cgPSAnbWVzc2FnZScgaW4gZXYgPyBTdHJpbmcoZXYubWVzc2FnZSkgOiAnd2Vic29ja2V0IGVycm9yJ1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW3Vwc3RyZWFtcHJveHldIHdzIGVycm9yOiAke21zZ31gKVxuICAgIGlmIChzdC5jbG9zZWQpIHJldHVyblxuICAgIHN0LmNsb3NlZCA9IHRydWVcbiAgICBpZiAoIXN0LmVzdGFibGlzaGVkKSB7XG4gICAgICBzb2NrLndyaXRlKCdIVFRQLzEuMSA1MDIgQmFkIEdhdGV3YXlcXHJcXG5cXHJcXG4nKVxuICAgIH1cbiAgICBzb2NrLmVuZCgpXG4gICAgY2xlYW51cENvbm4oc3QpXG4gIH1cblxuICB3cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgIGlmIChzdC5jbG9zZWQpIHJldHVyblxuICAgIHN0LmNsb3NlZCA9IHRydWVcbiAgICBzb2NrLmVuZCgpXG4gICAgY2xlYW51cENvbm4oc3QpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZEtlZXBhbGl2ZSh3czogV2ViU29ja2V0TGlrZSk6IHZvaWQge1xuICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICB3cy5zZW5kKGVuY29kZUNodW5rKG5ldyBVaW50OEFycmF5KDApKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3J3YXJkVG9Xcyh3czogV2ViU29ja2V0TGlrZSwgZGF0YTogQnVmZmVyKTogdm9pZCB7XG4gIGlmICh3cy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikgcmV0dXJuXG4gIGZvciAobGV0IG9mZiA9IDA7IG9mZiA8IGRhdGEubGVuZ3RoOyBvZmYgKz0gTUFYX0NIVU5LX0JZVEVTKSB7XG4gICAgY29uc3Qgc2xpY2UgPSBkYXRhLnN1YmFycmF5KG9mZiwgb2ZmICsgTUFYX0NIVU5LX0JZVEVTKVxuICAgIHdzLnNlbmQoZW5jb2RlQ2h1bmsoc2xpY2UpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFudXBDb25uKHN0OiBDb25uU3RhdGUgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgaWYgKCFzdCkgcmV0dXJuXG4gIGlmIChzdC5waW5nZXIpIGNsZWFySW50ZXJ2YWwoc3QucGluZ2VyKVxuICBpZiAoc3Qud3MgJiYgc3Qud3MucmVhZHlTdGF0ZSA8PSBXZWJTb2NrZXQuT1BFTikge1xuICAgIHRyeSB7XG4gICAgICBzdC53cy5jbG9zZSgpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBhbHJlYWR5IGNsb3NpbmdcbiAgICB9XG4gIH1cbiAgc3Qud3MgPSB1bmRlZmluZWRcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQU5BLFNBQVMsT0FBTyxVQUFVLFFBQVEsaUJBQWlCO0FBQ25ELFNBQVMsZUFBZTtBQUN4QixTQUFTLFlBQVk7OztBQ0pyQjtBQUNBO0FBQ0E7QUFIQSxTQUFTLG9CQUErQztBQWF4RCxJQUFJO0FBbUJKLElBQU0sa0JBQWtCLE1BQU07QUFHOUIsSUFBTSxtQkFBbUI7QUFZbEIsU0FBUyxZQUFZLE1BQThCO0FBQ3hELFFBQU0sTUFBTSxLQUFLO0FBRWpCLFFBQU0sU0FBbUIsQ0FBQztBQUMxQixNQUFJLElBQUk7QUFDUixTQUFPLElBQUksS0FBTTtBQUNmLFdBQU8sS0FBTSxJQUFJLE1BQVEsR0FBSTtBQUM3QixXQUFPO0FBQUEsRUFDVDtBQUNB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
