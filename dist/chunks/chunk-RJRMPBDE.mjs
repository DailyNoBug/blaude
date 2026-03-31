#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  __commonJS,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+util-uri-escape@4.2.2/node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/.pnpm/@smithy+util-uri-escape@4.2.2/node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports) {
    "use strict";
    var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
    var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
    var escapeUriPath = (uri) => uri.split("/").map(escapeUri).join("/");
    exports.escapeUri = escapeUri;
    exports.escapeUriPath = escapeUriPath;
  }
});

// node_modules/.pnpm/@smithy+querystring-builder@4.2.12/node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@smithy+querystring-builder@4.2.12/node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports) {
    "use strict";
    var utilUriEscape = require_dist_cjs2();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = utilUriEscape.escapeUri(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${utilUriEscape.escapeUri(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${utilUriEscape.escapeUri(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    exports.buildQueryString = buildQueryString;
  }
});

// node_modules/.pnpm/@smithy+node-http-handler@4.5.1/node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/.pnpm/@smithy+node-http-handler@4.5.1/node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports) {
    var protocolHttp = require_dist_cjs();
    var querystringBuilder = require_dist_cjs3();
    var node_https = __require("node:https");
    var node_stream = __require("node:stream");
    var http2 = __require("node:http2");
    function buildAbortError(abortSignal) {
      const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
      if (reason) {
        if (reason instanceof Error) {
          const abortError3 = new Error("Request aborted");
          abortError3.name = "AbortError";
          abortError3.cause = reason;
          return abortError3;
        }
        const abortError2 = new Error(String(reason));
        abortError2.name = "AbortError";
        return abortError2;
      }
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return abortError;
    }
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = (headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    };
    var timing = {
      setTimeout: (cb, ms) => setTimeout(cb, ms),
      clearTimeout: (timeoutId) => clearTimeout(timeoutId)
    };
    var DEFER_EVENT_LISTENER_TIME$2 = 1e3;
    var setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return -1;
      }
      const registerTimeout = (offset) => {
        const timeoutId = timing.setTimeout(() => {
          request.destroy();
          reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${timeoutInMs} ms.`), {
            name: "TimeoutError"
          }));
        }, timeoutInMs - offset);
        const doWithSocket = (socket) => {
          if (socket?.connecting) {
            socket.on("connect", () => {
              timing.clearTimeout(timeoutId);
            });
          } else {
            timing.clearTimeout(timeoutId);
          }
        };
        if (request.socket) {
          doWithSocket(request.socket);
        } else {
          request.on("socket", doWithSocket);
        }
      };
      if (timeoutInMs < 2e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME$2), DEFER_EVENT_LISTENER_TIME$2);
    };
    var setRequestTimeout = (req, reject, timeoutInMs = 0, throwOnRequestTimeout, logger) => {
      if (timeoutInMs) {
        return timing.setTimeout(() => {
          let msg = `@smithy/node-http-handler - [${throwOnRequestTimeout ? "ERROR" : "WARN"}] a request has exceeded the configured ${timeoutInMs} ms requestTimeout.`;
          if (throwOnRequestTimeout) {
            const error = Object.assign(new Error(msg), {
              name: "TimeoutError",
              code: "ETIMEDOUT"
            });
            req.destroy(error);
            reject(error);
          } else {
            msg += ` Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.`;
            logger?.warn?.(msg);
          }
        }, timeoutInMs);
      }
      return -1;
    };
    var DEFER_EVENT_LISTENER_TIME$1 = 3e3;
    var setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME$1) => {
      if (keepAlive !== true) {
        return -1;
      }
      const registerListener = () => {
        if (request.socket) {
          request.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
        } else {
          request.on("socket", (socket) => {
            socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
          });
        }
      };
      if (deferTimeMs === 0) {
        registerListener();
        return 0;
      }
      return timing.setTimeout(registerListener, deferTimeMs);
    };
    var DEFER_EVENT_LISTENER_TIME = 3e3;
    var setSocketTimeout = (request, reject, timeoutInMs = 0) => {
      const registerTimeout = (offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = () => {
          request.destroy();
          reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${timeoutInMs} ms of inactivity (configured by client requestHandler).`), { name: "TimeoutError" }));
        };
        if (request.socket) {
          request.socket.setTimeout(timeout, onTimeout);
          request.on("close", () => request.socket?.removeListener("timeout", onTimeout));
        } else {
          request.setTimeout(timeout, onTimeout);
        }
      };
      if (0 < timeoutInMs && timeoutInMs < 6e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
    };
    var MIN_WAIT_TIME = 6e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME, externalAgent = false) {
      const headers = request.headers ?? {};
      const expect = headers.Expect || headers.expect;
      let timeoutId = -1;
      let sendBody = true;
      if (!externalAgent && expect === "100-continue") {
        sendBody = await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              timing.clearTimeout(timeoutId);
              resolve(true);
            });
            httpRequest.on("response", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
            httpRequest.on("error", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
          })
        ]);
      }
      if (sendBody) {
        writeBody(httpRequest, request.body);
      }
    }
    function writeBody(httpRequest, body) {
      if (body instanceof node_stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        const isBuffer = Buffer.isBuffer(body);
        const isString = typeof body === "string";
        if (isBuffer || isString) {
          if (isBuffer && body.byteLength === 0) {
            httpRequest.end();
          } else {
            httpRequest.end(body);
          }
          return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
          httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
          return;
        }
        httpRequest.end(Buffer.from(body));
        return;
      }
      httpRequest.end();
    }
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var hAgent = void 0;
    var hRequest = void 0;
    var NodeHttpHandler = class _NodeHttpHandler {
      config;
      configProvider;
      socketWarningTimestamp = 0;
      externalAgent = false;
      metadata = { handlerProtocol: "http/1.1" };
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request, { abortSignal, requestTimeout } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        const config = this.config;
        const isSSL = request.protocol === "https:";
        if (!isSSL && !this.config.httpAgent) {
          this.config.httpAgent = await this.config.httpAgentProvider();
        }
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const timeouts = [];
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _reject(arg);
          };
          if (abortSignal?.aborted) {
            const abortError = buildAbortError(abortSignal);
            reject(abortError);
            return;
          }
          const headers = request.headers ?? {};
          const expectContinue = (headers.Expect ?? headers.expect) === "100-continue";
          let agent = isSSL ? config.httpsAgent : config.httpAgent;
          if (expectContinue && !this.externalAgent) {
            agent = new (isSSL ? node_https.Agent : hAgent)({
              keepAlive: false,
              maxSockets: Infinity
            });
          }
          timeouts.push(timing.setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, config.logger);
          }, config.socketAcquisitionWarningTimeout ?? (config.requestTimeout ?? 2e3) + (config.connectionTimeout ?? 1e3)));
          const queryString = querystringBuilder.buildQueryString(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          let hostname = request.hostname ?? "";
          if (hostname[0] === "[" && hostname.endsWith("]")) {
            hostname = request.hostname.slice(1, -1);
          } else {
            hostname = request.hostname;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: hostname,
            method: request.method,
            path,
            port: request.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? node_https.request : hRequest;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new protocolHttp.HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          if (abortSignal) {
            const onAbort = () => {
              req.destroy();
              const abortError = buildAbortError(abortSignal);
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const effectiveRequestTimeout = requestTimeout ?? config.requestTimeout;
          timeouts.push(setConnectionTimeout(req, reject, config.connectionTimeout));
          timeouts.push(setRequestTimeout(req, reject, effectiveRequestTimeout, config.throwOnRequestTimeout, config.logger ?? console));
          timeouts.push(setSocketTimeout(req, reject, config.socketTimeout));
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            timeouts.push(setSocketKeepAlive(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            }));
          }
          writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout, this.externalAgent).catch((e) => {
            timeouts.forEach(timing.clearTimeout);
            return _reject(e);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent, throwOnRequestTimeout, logger } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout,
          socketTimeout,
          socketAcquisitionWarningTimeout,
          throwOnRequestTimeout,
          httpAgentProvider: async () => {
            const { Agent, request } = await import("node:http");
            hRequest = request;
            hAgent = Agent;
            if (httpAgent instanceof hAgent || typeof httpAgent?.destroy === "function") {
              this.externalAgent = true;
              return httpAgent;
            }
            return new hAgent({ keepAlive, maxSockets, ...httpAgent });
          },
          httpsAgent: (() => {
            if (httpsAgent instanceof node_https.Agent || typeof httpsAgent?.destroy === "function") {
              this.externalAgent = true;
              return httpsAgent;
            }
            return new node_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger
        };
      }
    };
    var NodeHttp2ConnectionPool = class {
      sessions = [];
      constructor(sessions) {
        this.sessions = sessions ?? [];
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
    var NodeHttp2ConnectionManager = class {
      constructor(config) {
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      config;
      sessionCache = /* @__PURE__ */ new Map();
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = http2.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
            if (err) {
              throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString());
            }
          });
        }
        session.unref();
        const destroySessionCb = () => {
          session.destroy();
          this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
          session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
      }
      deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
          return;
        }
        if (!existingConnectionPool.contains(session)) {
          return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
      }
      release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
      }
      destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
          for (const session of connectionPool) {
            if (!session.destroyed) {
              session.destroy();
            }
            connectionPool.remove(session);
          }
          this.sessionCache.delete(key);
        }
      }
      setMaxConcurrentStreams(maxConcurrentStreams) {
        if (maxConcurrentStreams && maxConcurrentStreams <= 0) {
          throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
      }
      setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
      }
      getUrlString(request) {
        return request.destination.toString();
      }
    };
    var NodeHttp2Handler = class _NodeHttp2Handler {
      config;
      configProvider;
      metadata = { handlerProtocol: "h2" };
      connectionManager = new NodeHttp2ConnectionManager({});
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttp2Handler(instanceOrOptions);
      }
      constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((opts) => {
              resolve(opts || {});
            }).catch(reject);
          } else {
            resolve(options || {});
          }
        });
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal, requestTimeout } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout: configRequestTimeout, disableConcurrentStreams } = this.config;
        const effectiveRequestTimeout = requestTimeout ?? configRequestTimeout;
        return new Promise((_resolve, _reject) => {
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          };
          if (abortSignal?.aborted) {
            fulfilled = true;
            const abortError = buildAbortError(abortSignal);
            reject(abortError);
            return;
          }
          const { hostname, method, port, protocol, query } = request;
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
          const requestContext = { destination: new URL(authority) };
          const session = this.connectionManager.lease(requestContext, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = (err) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err);
          };
          const queryString = querystringBuilder.buildQueryString(query || {});
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [http2.constants.HTTP2_HEADER_PATH]: path,
            [http2.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new protocolHttp.HttpResponse({
              statusCode: headers[":status"] || -1,
              headers: getTransformedHeaders(headers),
              body: req
            });
            fulfilled = true;
            resolve({ response: httpResponse });
            if (disableConcurrentStreams) {
              session.close();
              this.connectionManager.deleteSession(authority, session);
            }
          });
          if (effectiveRequestTimeout) {
            req.setTimeout(effectiveRequestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${effectiveRequestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            const onAbort = () => {
              req.close();
              const abortError = buildAbortError(abortSignal);
              rejectWithDestroy(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
          });
          req.on("close", () => {
            session.unref();
            if (disableConcurrentStreams) {
              session.destroy();
            }
            if (!fulfilled) {
              rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
            }
          });
          writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    var Collector = class extends node_stream.Writable {
      bufferedBytes = [];
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    var streamCollector = (stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    };
    var isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
    async function collectReadableStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    exports.DEFAULT_REQUEST_TIMEOUT = DEFAULT_REQUEST_TIMEOUT;
    exports.NodeHttp2Handler = NodeHttp2Handler;
    exports.NodeHttpHandler = NodeHttpHandler;
    exports.streamCollector = streamCollector;
  }
});

export {
  require_dist_cjs2 as require_dist_cjs,
  require_dist_cjs3 as require_dist_cjs2,
  require_dist_cjs4 as require_dist_cjs3
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC11cmktZXNjYXBlQDQuMi4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXJpLWVzY2FwZS9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStxdWVyeXN0cmluZy1idWlsZGVyQDQuMi4xMi9ub2RlX21vZHVsZXMvQHNtaXRoeS9xdWVyeXN0cmluZy1idWlsZGVyL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K25vZGUtaHR0cC1oYW5kbGVyQDQuNS4xL25vZGVfbW9kdWxlcy9Ac21pdGh5L25vZGUtaHR0cC1oYW5kbGVyL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVzY2FwZVVyaSA9ICh1cmkpID0+IGVuY29kZVVSSUNvbXBvbmVudCh1cmkpLnJlcGxhY2UoL1shJygpKl0vZywgaGV4RW5jb2RlKTtcbmNvbnN0IGhleEVuY29kZSA9IChjKSA9PiBgJSR7Yy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfWA7XG5cbmNvbnN0IGVzY2FwZVVyaVBhdGggPSAodXJpKSA9PiB1cmkuc3BsaXQoXCIvXCIpLm1hcChlc2NhcGVVcmkpLmpvaW4oXCIvXCIpO1xuXG5leHBvcnRzLmVzY2FwZVVyaSA9IGVzY2FwZVVyaTtcbmV4cG9ydHMuZXNjYXBlVXJpUGF0aCA9IGVzY2FwZVVyaVBhdGg7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbFVyaUVzY2FwZSA9IHJlcXVpcmUoJ0BzbWl0aHkvdXRpbC11cmktZXNjYXBlJyk7XG5cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlTdHJpbmcocXVlcnkpIHtcbiAgICBjb25zdCBwYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkuc29ydCgpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcbiAgICAgICAga2V5ID0gdXRpbFVyaUVzY2FwZS5lc2NhcGVVcmkoa2V5KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaUxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGlMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goYCR7a2V5fT0ke3V0aWxVcmlFc2NhcGUuZXNjYXBlVXJpKHZhbHVlW2ldKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBxc0VudHJ5ID0ga2V5O1xuICAgICAgICAgICAgaWYgKHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHFzRW50cnkgKz0gYD0ke3V0aWxVcmlFc2NhcGUuZXNjYXBlVXJpKHZhbHVlKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydHMucHVzaChxc0VudHJ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFydHMuam9pbihcIiZcIik7XG59XG5cbmV4cG9ydHMuYnVpbGRRdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJvdG9jb2xIdHRwID0gcmVxdWlyZSgnQHNtaXRoeS9wcm90b2NvbC1odHRwJyk7XG52YXIgcXVlcnlzdHJpbmdCdWlsZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9xdWVyeXN0cmluZy1idWlsZGVyJyk7XG52YXIgbm9kZV9odHRwcyA9IHJlcXVpcmUoJ25vZGU6aHR0cHMnKTtcbnZhciBub2RlX3N0cmVhbSA9IHJlcXVpcmUoJ25vZGU6c3RyZWFtJyk7XG52YXIgaHR0cDIgPSByZXF1aXJlKCdub2RlOmh0dHAyJyk7XG5cbmZ1bmN0aW9uIGJ1aWxkQWJvcnRFcnJvcihhYm9ydFNpZ25hbCkge1xuICAgIGNvbnN0IHJlYXNvbiA9IGFib3J0U2lnbmFsICYmIHR5cGVvZiBhYm9ydFNpZ25hbCA9PT0gXCJvYmplY3RcIiAmJiBcInJlYXNvblwiIGluIGFib3J0U2lnbmFsXG4gICAgICAgID8gYWJvcnRTaWduYWwucmVhc29uXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIGlmIChyZWFzb24pIHtcbiAgICAgICAgaWYgKHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgICAgICAgICAgYWJvcnRFcnJvci5uYW1lID0gXCJBYm9ydEVycm9yXCI7XG4gICAgICAgICAgICBhYm9ydEVycm9yLmNhdXNlID0gcmVhc29uO1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0RXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihTdHJpbmcocmVhc29uKSk7XG4gICAgICAgIGFib3J0RXJyb3IubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICAgICAgICByZXR1cm4gYWJvcnRFcnJvcjtcbiAgICB9XG4gICAgY29uc3QgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiKTtcbiAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICByZXR1cm4gYWJvcnRFcnJvcjtcbn1cblxuY29uc3QgTk9ERUpTX1RJTUVPVVRfRVJST1JfQ09ERVMgPSBbXCJFQ09OTlJFU0VUXCIsIFwiRVBJUEVcIiwgXCJFVElNRURPVVRcIl07XG5cbmNvbnN0IGdldFRyYW5zZm9ybWVkSGVhZGVycyA9IChoZWFkZXJzKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRIZWFkZXJzID0ge307XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlclZhbHVlcyA9IGhlYWRlcnNbbmFtZV07XG4gICAgICAgIHRyYW5zZm9ybWVkSGVhZGVyc1tuYW1lXSA9IEFycmF5LmlzQXJyYXkoaGVhZGVyVmFsdWVzKSA/IGhlYWRlclZhbHVlcy5qb2luKFwiLFwiKSA6IGhlYWRlclZhbHVlcztcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkSGVhZGVycztcbn07XG5cbmNvbnN0IHRpbWluZyA9IHtcbiAgICBzZXRUaW1lb3V0OiAoY2IsIG1zKSA9PiBzZXRUaW1lb3V0KGNiLCBtcyksXG4gICAgY2xlYXJUaW1lb3V0OiAodGltZW91dElkKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKSxcbn07XG5cbmNvbnN0IERFRkVSX0VWRU5UX0xJU1RFTkVSX1RJTUUkMiA9IDEwMDA7XG5jb25zdCBzZXRDb25uZWN0aW9uVGltZW91dCA9IChyZXF1ZXN0LCByZWplY3QsIHRpbWVvdXRJbk1zID0gMCkgPT4ge1xuICAgIGlmICghdGltZW91dEluTXMpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBjb25zdCByZWdpc3RlclRpbWVvdXQgPSAob2Zmc2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHRpbWluZy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmVqZWN0KE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGBAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyIC0gdGhlIHJlcXVlc3Qgc29ja2V0IGRpZCBub3QgZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgd2l0aGluIHRoZSBjb25maWd1cmVkIHRpbWVvdXQgb2YgJHt0aW1lb3V0SW5Nc30gbXMuYCksIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRpbWVvdXRFcnJvclwiLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCB0aW1lb3V0SW5NcyAtIG9mZnNldCk7XG4gICAgICAgIGNvbnN0IGRvV2l0aFNvY2tldCA9IChzb2NrZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChzb2NrZXQ/LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nLmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGltaW5nLmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWVzdC5zb2NrZXQpIHtcbiAgICAgICAgICAgIGRvV2l0aFNvY2tldChyZXF1ZXN0LnNvY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uKFwic29ja2V0XCIsIGRvV2l0aFNvY2tldCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0aW1lb3V0SW5NcyA8IDIwMDApIHtcbiAgICAgICAgcmVnaXN0ZXJUaW1lb3V0KDApO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWluZy5zZXRUaW1lb3V0KHJlZ2lzdGVyVGltZW91dC5iaW5kKG51bGwsIERFRkVSX0VWRU5UX0xJU1RFTkVSX1RJTUUkMiksIERFRkVSX0VWRU5UX0xJU1RFTkVSX1RJTUUkMik7XG59O1xuXG5jb25zdCBzZXRSZXF1ZXN0VGltZW91dCA9IChyZXEsIHJlamVjdCwgdGltZW91dEluTXMgPSAwLCB0aHJvd09uUmVxdWVzdFRpbWVvdXQsIGxvZ2dlcikgPT4ge1xuICAgIGlmICh0aW1lb3V0SW5Ncykge1xuICAgICAgICByZXR1cm4gdGltaW5nLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGBAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyIC0gWyR7dGhyb3dPblJlcXVlc3RUaW1lb3V0ID8gXCJFUlJPUlwiIDogXCJXQVJOXCJ9XSBhIHJlcXVlc3QgaGFzIGV4Y2VlZGVkIHRoZSBjb25maWd1cmVkICR7dGltZW91dEluTXN9IG1zIHJlcXVlc3RUaW1lb3V0LmA7XG4gICAgICAgICAgICBpZiAodGhyb3dPblJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihtc2cpLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVGltZW91dEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFwiRVRJTUVET1VUXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVxLmRlc3Ryb3koZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtc2cgKz0gYCBJbml0IGNsaWVudCByZXF1ZXN0SGFuZGxlciB3aXRoIHRocm93T25SZXF1ZXN0VGltZW91dD10cnVlIHRvIHR1cm4gdGhpcyBpbnRvIGFuIGVycm9yLmA7XG4gICAgICAgICAgICAgICAgbG9nZ2VyPy53YXJuPy4obXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZW91dEluTXMpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBERUZFUl9FVkVOVF9MSVNURU5FUl9USU1FJDEgPSAzMDAwO1xuY29uc3Qgc2V0U29ja2V0S2VlcEFsaXZlID0gKHJlcXVlc3QsIHsga2VlcEFsaXZlLCBrZWVwQWxpdmVNc2VjcyB9LCBkZWZlclRpbWVNcyA9IERFRkVSX0VWRU5UX0xJU1RFTkVSX1RJTUUkMSkgPT4ge1xuICAgIGlmIChrZWVwQWxpdmUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBjb25zdCByZWdpc3Rlckxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdC5zb2NrZXQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc29ja2V0LnNldEtlZXBBbGl2ZShrZWVwQWxpdmUsIGtlZXBBbGl2ZU1zZWNzIHx8IDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5vbihcInNvY2tldFwiLCAoc29ja2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgc29ja2V0LnNldEtlZXBBbGl2ZShrZWVwQWxpdmUsIGtlZXBBbGl2ZU1zZWNzIHx8IDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChkZWZlclRpbWVNcyA9PT0gMCkge1xuICAgICAgICByZWdpc3Rlckxpc3RlbmVyKCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gdGltaW5nLnNldFRpbWVvdXQocmVnaXN0ZXJMaXN0ZW5lciwgZGVmZXJUaW1lTXMpO1xufTtcblxuY29uc3QgREVGRVJfRVZFTlRfTElTVEVORVJfVElNRSA9IDMwMDA7XG5jb25zdCBzZXRTb2NrZXRUaW1lb3V0ID0gKHJlcXVlc3QsIHJlamVjdCwgdGltZW91dEluTXMgPSAwKSA9PiB7XG4gICAgY29uc3QgcmVnaXN0ZXJUaW1lb3V0ID0gKG9mZnNldCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGltZW91dEluTXMgLSBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IG9uVGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmVqZWN0KE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGBAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyIC0gdGhlIHJlcXVlc3Qgc29ja2V0IHRpbWVkIG91dCBhZnRlciAke3RpbWVvdXRJbk1zfSBtcyBvZiBpbmFjdGl2aXR5IChjb25maWd1cmVkIGJ5IGNsaWVudCByZXF1ZXN0SGFuZGxlcikuYCksIHsgbmFtZTogXCJUaW1lb3V0RXJyb3JcIiB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXF1ZXN0LnNvY2tldCkge1xuICAgICAgICAgICAgcmVxdWVzdC5zb2NrZXQuc2V0VGltZW91dCh0aW1lb3V0LCBvblRpbWVvdXQpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbihcImNsb3NlXCIsICgpID0+IHJlcXVlc3Quc29ja2V0Py5yZW1vdmVMaXN0ZW5lcihcInRpbWVvdXRcIiwgb25UaW1lb3V0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFRpbWVvdXQodGltZW91dCwgb25UaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKDAgPCB0aW1lb3V0SW5NcyAmJiB0aW1lb3V0SW5NcyA8IDYwMDApIHtcbiAgICAgICAgcmVnaXN0ZXJUaW1lb3V0KDApO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWluZy5zZXRUaW1lb3V0KHJlZ2lzdGVyVGltZW91dC5iaW5kKG51bGwsIHRpbWVvdXRJbk1zID09PSAwID8gMCA6IERFRkVSX0VWRU5UX0xJU1RFTkVSX1RJTUUpLCBERUZFUl9FVkVOVF9MSVNURU5FUl9USU1FKTtcbn07XG5cbmNvbnN0IE1JTl9XQUlUX1RJTUUgPSA2XzAwMDtcbmFzeW5jIGZ1bmN0aW9uIHdyaXRlUmVxdWVzdEJvZHkoaHR0cFJlcXVlc3QsIHJlcXVlc3QsIG1heENvbnRpbnVlVGltZW91dE1zID0gTUlOX1dBSVRfVElNRSwgZXh0ZXJuYWxBZ2VudCA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycyA/PyB7fTtcbiAgICBjb25zdCBleHBlY3QgPSBoZWFkZXJzLkV4cGVjdCB8fCBoZWFkZXJzLmV4cGVjdDtcbiAgICBsZXQgdGltZW91dElkID0gLTE7XG4gICAgbGV0IHNlbmRCb2R5ID0gdHJ1ZTtcbiAgICBpZiAoIWV4dGVybmFsQWdlbnQgJiYgZXhwZWN0ID09PSBcIjEwMC1jb250aW51ZVwiKSB7XG4gICAgICAgIHNlbmRCb2R5ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGltZW91dElkID0gTnVtYmVyKHRpbWluZy5zZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodHJ1ZSksIE1hdGgubWF4KE1JTl9XQUlUX1RJTUUsIG1heENvbnRpbnVlVGltZW91dE1zKSkpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lm9uKFwiY29udGludWVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aW1pbmcuY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3Qub24oXCJyZXNwb25zZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWluZy5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3Qub24oXCJlcnJvclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWluZy5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGlmIChzZW5kQm9keSkge1xuICAgICAgICB3cml0ZUJvZHkoaHR0cFJlcXVlc3QsIHJlcXVlc3QuYm9keSk7XG4gICAgfVxufVxuZnVuY3Rpb24gd3JpdGVCb2R5KGh0dHBSZXF1ZXN0LCBib2R5KSB7XG4gICAgaWYgKGJvZHkgaW5zdGFuY2VvZiBub2RlX3N0cmVhbS5SZWFkYWJsZSkge1xuICAgICAgICBib2R5LnBpcGUoaHR0cFJlcXVlc3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChib2R5KSB7XG4gICAgICAgIGNvbnN0IGlzQnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyKGJvZHkpO1xuICAgICAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiO1xuICAgICAgICBpZiAoaXNCdWZmZXIgfHwgaXNTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc0J1ZmZlciAmJiBib2R5LmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5lbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0LmVuZChib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1aW50OCA9IGJvZHk7XG4gICAgICAgIGlmICh0eXBlb2YgdWludDggPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIHVpbnQ4LmJ1ZmZlciAmJlxuICAgICAgICAgICAgdHlwZW9mIHVpbnQ4LmJ5dGVPZmZzZXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiB1aW50OC5ieXRlTGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBodHRwUmVxdWVzdC5lbmQoQnVmZmVyLmZyb20odWludDguYnVmZmVyLCB1aW50OC5ieXRlT2Zmc2V0LCB1aW50OC5ieXRlTGVuZ3RoKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaHR0cFJlcXVlc3QuZW5kKEJ1ZmZlci5mcm9tKGJvZHkpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBodHRwUmVxdWVzdC5lbmQoKTtcbn1cblxuY29uc3QgREVGQVVMVF9SRVFVRVNUX1RJTUVPVVQgPSAwO1xubGV0IGhBZ2VudCA9IHVuZGVmaW5lZDtcbmxldCBoUmVxdWVzdCA9IHVuZGVmaW5lZDtcbmNsYXNzIE5vZGVIdHRwSGFuZGxlciB7XG4gICAgY29uZmlnO1xuICAgIGNvbmZpZ1Byb3ZpZGVyO1xuICAgIHNvY2tldFdhcm5pbmdUaW1lc3RhbXAgPSAwO1xuICAgIGV4dGVybmFsQWdlbnQgPSBmYWxzZTtcbiAgICBtZXRhZGF0YSA9IHsgaGFuZGxlclByb3RvY29sOiBcImh0dHAvMS4xXCIgfTtcbiAgICBzdGF0aWMgY3JlYXRlKGluc3RhbmNlT3JPcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VPck9wdGlvbnM/LmhhbmRsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VPck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlSHR0cEhhbmRsZXIoaW5zdGFuY2VPck9wdGlvbnMpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tTb2NrZXRVc2FnZShhZ2VudCwgc29ja2V0V2FybmluZ1RpbWVzdGFtcCwgbG9nZ2VyID0gY29uc29sZSkge1xuICAgICAgICBjb25zdCB7IHNvY2tldHMsIHJlcXVlc3RzLCBtYXhTb2NrZXRzIH0gPSBhZ2VudDtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhTb2NrZXRzICE9PSBcIm51bWJlclwiIHx8IG1heFNvY2tldHMgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc29ja2V0V2FybmluZ1RpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IDE1XzAwMDtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBpbnRlcnZhbCA8IHNvY2tldFdhcm5pbmdUaW1lc3RhbXApIHtcbiAgICAgICAgICAgIHJldHVybiBzb2NrZXRXYXJuaW5nVGltZXN0YW1wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb2NrZXRzICYmIHJlcXVlc3RzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9yaWdpbiBpbiBzb2NrZXRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0c0luVXNlID0gc29ja2V0c1tvcmlnaW5dPy5sZW5ndGggPz8gMDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0c0VucXVldWVkID0gcmVxdWVzdHNbb3JpZ2luXT8ubGVuZ3RoID8/IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNvY2tldHNJblVzZSA+PSBtYXhTb2NrZXRzICYmIHJlcXVlc3RzRW5xdWV1ZWQgPj0gMiAqIG1heFNvY2tldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyPy53YXJuPy4oYEBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXI6V0FSTiAtIHNvY2tldCB1c2FnZSBhdCBjYXBhY2l0eT0ke3NvY2tldHNJblVzZX0gYW5kICR7cmVxdWVzdHNFbnF1ZXVlZH0gYWRkaXRpb25hbCByZXF1ZXN0cyBhcmUgZW5xdWV1ZWQuXG5TZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3Nkay1mb3ItamF2YXNjcmlwdC92My9kZXZlbG9wZXItZ3VpZGUvbm9kZS1jb25maWd1cmluZy1tYXhzb2NrZXRzLmh0bWxcbm9yIGluY3JlYXNlIHNvY2tldEFjcXVpc2l0aW9uV2FybmluZ1RpbWVvdXQ9KG1pbGxpcykgaW4gdGhlIE5vZGVIdHRwSGFuZGxlciBjb25maWcuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ja2V0V2FybmluZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbmZpZ1Byb3ZpZGVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKF9vcHRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNvbHZlRGVmYXVsdENvbmZpZyhfb3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc29sdmVEZWZhdWx0Q29uZmlnKG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY29uZmlnPy5odHRwQWdlbnQ/LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jb25maWc/Lmh0dHBzQWdlbnQ/LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlKHJlcXVlc3QsIHsgYWJvcnRTaWduYWwsIHJlcXVlc3RUaW1lb3V0IH0gPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGlzU1NMID0gcmVxdWVzdC5wcm90b2NvbCA9PT0gXCJodHRwczpcIjtcbiAgICAgICAgaWYgKCFpc1NTTCAmJiAhdGhpcy5jb25maWcuaHR0cEFnZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5odHRwQWdlbnQgPSBhd2FpdCB0aGlzLmNvbmZpZy5odHRwQWdlbnRQcm92aWRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCB3cml0ZVJlcXVlc3RCb2R5UHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRzID0gW107XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlID0gYXN5bmMgKGFyZykgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IHdyaXRlUmVxdWVzdEJvZHlQcm9taXNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXRzLmZvckVhY2godGltaW5nLmNsZWFyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgX3Jlc29sdmUoYXJnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZWplY3QgPSBhc3luYyAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgICAgICAgICAgdGltZW91dHMuZm9yRWFjaCh0aW1pbmcuY2xlYXJUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBfcmVqZWN0KGFyZyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGFib3J0U2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IGJ1aWxkQWJvcnRFcnJvcihhYm9ydFNpZ25hbCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGFib3J0RXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnMgPz8ge307XG4gICAgICAgICAgICBjb25zdCBleHBlY3RDb250aW51ZSA9IChoZWFkZXJzLkV4cGVjdCA/PyBoZWFkZXJzLmV4cGVjdCkgPT09IFwiMTAwLWNvbnRpbnVlXCI7XG4gICAgICAgICAgICBsZXQgYWdlbnQgPSBpc1NTTCA/IGNvbmZpZy5odHRwc0FnZW50IDogY29uZmlnLmh0dHBBZ2VudDtcbiAgICAgICAgICAgIGlmIChleHBlY3RDb250aW51ZSAmJiAhdGhpcy5leHRlcm5hbEFnZW50KSB7XG4gICAgICAgICAgICAgICAgYWdlbnQgPSBuZXcgKGlzU1NMID8gbm9kZV9odHRwcy5BZ2VudCA6IGhBZ2VudCkoe1xuICAgICAgICAgICAgICAgICAgICBrZWVwQWxpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtYXhTb2NrZXRzOiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVvdXRzLnB1c2godGltaW5nLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0V2FybmluZ1RpbWVzdGFtcCA9IE5vZGVIdHRwSGFuZGxlci5jaGVja1NvY2tldFVzYWdlKGFnZW50LCB0aGlzLnNvY2tldFdhcm5pbmdUaW1lc3RhbXAsIGNvbmZpZy5sb2dnZXIpO1xuICAgICAgICAgICAgfSwgY29uZmlnLnNvY2tldEFjcXVpc2l0aW9uV2FybmluZ1RpbWVvdXQgPz8gKGNvbmZpZy5yZXF1ZXN0VGltZW91dCA/PyAyMDAwKSArIChjb25maWcuY29ubmVjdGlvblRpbWVvdXQgPz8gMTAwMCkpKTtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlzdHJpbmdCdWlsZGVyLmJ1aWxkUXVlcnlTdHJpbmcocmVxdWVzdC5xdWVyeSB8fCB7fSk7XG4gICAgICAgICAgICBsZXQgYXV0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVzZXJuYW1lICE9IG51bGwgfHwgcmVxdWVzdC5wYXNzd29yZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSByZXF1ZXN0LnVzZXJuYW1lID8/IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSByZXF1ZXN0LnBhc3N3b3JkID8/IFwiXCI7XG4gICAgICAgICAgICAgICAgYXV0aCA9IGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHJlcXVlc3QucGF0aDtcbiAgICAgICAgICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5mcmFnbWVudCkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYCMke3JlcXVlc3QuZnJhZ21lbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBob3N0bmFtZSA9IHJlcXVlc3QuaG9zdG5hbWUgPz8gXCJcIjtcbiAgICAgICAgICAgIGlmIChob3N0bmFtZVswXSA9PT0gXCJbXCIgJiYgaG9zdG5hbWUuZW5kc1dpdGgoXCJdXCIpKSB7XG4gICAgICAgICAgICAgICAgaG9zdG5hbWUgPSByZXF1ZXN0Lmhvc3RuYW1lLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RuYW1lID0gcmVxdWVzdC5ob3N0bmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5vZGVIdHRwc09wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGhvc3Q6IGhvc3RuYW1lLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBwb3J0OiByZXF1ZXN0LnBvcnQsXG4gICAgICAgICAgICAgICAgYWdlbnQsXG4gICAgICAgICAgICAgICAgYXV0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RnVuYyA9IGlzU1NMID8gbm9kZV9odHRwcy5yZXF1ZXN0IDogaFJlcXVlc3Q7XG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0RnVuYyhub2RlSHR0cHNPcHRpb25zLCAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0gbmV3IHByb3RvY29sSHR0cC5IdHRwUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiByZXMuc3RhdHVzQ29kZSB8fCAtMSxcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZXMuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZ2V0VHJhbnNmb3JtZWRIZWFkZXJzKHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogcmVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZXNwb25zZTogaHR0cFJlc3BvbnNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXEub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE5PREVKU19USU1FT1VUX0VSUk9SX0NPREVTLmluY2x1ZGVzKGVyci5jb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoT2JqZWN0LmFzc2lnbihlcnIsIHsgbmFtZTogXCJUaW1lb3V0RXJyb3JcIiB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhYm9ydFNpZ25hbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uQWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBidWlsZEFib3J0RXJyb3IoYWJvcnRTaWduYWwpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYWJvcnRFcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduYWwgPSBhYm9ydFNpZ25hbDtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmNlKFwiY2xvc2VcIiwgKCkgPT4gc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYm9ydFNpZ25hbC5vbmFib3J0ID0gb25BYm9ydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0ID8/IGNvbmZpZy5yZXF1ZXN0VGltZW91dDtcbiAgICAgICAgICAgIHRpbWVvdXRzLnB1c2goc2V0Q29ubmVjdGlvblRpbWVvdXQocmVxLCByZWplY3QsIGNvbmZpZy5jb25uZWN0aW9uVGltZW91dCkpO1xuICAgICAgICAgICAgdGltZW91dHMucHVzaChzZXRSZXF1ZXN0VGltZW91dChyZXEsIHJlamVjdCwgZWZmZWN0aXZlUmVxdWVzdFRpbWVvdXQsIGNvbmZpZy50aHJvd09uUmVxdWVzdFRpbWVvdXQsIGNvbmZpZy5sb2dnZXIgPz8gY29uc29sZSkpO1xuICAgICAgICAgICAgdGltZW91dHMucHVzaChzZXRTb2NrZXRUaW1lb3V0KHJlcSwgcmVqZWN0LCBjb25maWcuc29ja2V0VGltZW91dCkpO1xuICAgICAgICAgICAgY29uc3QgaHR0cEFnZW50ID0gbm9kZUh0dHBzT3B0aW9ucy5hZ2VudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaHR0cEFnZW50ID09PSBcIm9iamVjdFwiICYmIFwia2VlcEFsaXZlXCIgaW4gaHR0cEFnZW50KSB7XG4gICAgICAgICAgICAgICAgdGltZW91dHMucHVzaChzZXRTb2NrZXRLZWVwQWxpdmUocmVxLCB7XG4gICAgICAgICAgICAgICAgICAgIGtlZXBBbGl2ZTogaHR0cEFnZW50LmtlZXBBbGl2ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcEFsaXZlTXNlY3M6IGh0dHBBZ2VudC5rZWVwQWxpdmVNc2VjcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cml0ZVJlcXVlc3RCb2R5UHJvbWlzZSA9IHdyaXRlUmVxdWVzdEJvZHkocmVxLCByZXF1ZXN0LCBlZmZlY3RpdmVSZXF1ZXN0VGltZW91dCwgdGhpcy5leHRlcm5hbEFnZW50KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRzLmZvckVhY2godGltaW5nLmNsZWFyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWplY3QoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZUh0dHBDbGllbnRDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb25maWdQcm92aWRlciA9IHRoaXMuY29uZmlnUHJvdmlkZXIudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaHR0cEhhbmRsZXJDb25maWdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcgPz8ge307XG4gICAgfVxuICAgIHJlc29sdmVEZWZhdWx0Q29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyByZXF1ZXN0VGltZW91dCwgY29ubmVjdGlvblRpbWVvdXQsIHNvY2tldFRpbWVvdXQsIHNvY2tldEFjcXVpc2l0aW9uV2FybmluZ1RpbWVvdXQsIGh0dHBBZ2VudCwgaHR0cHNBZ2VudCwgdGhyb3dPblJlcXVlc3RUaW1lb3V0LCBsb2dnZXIsIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBjb25zdCBrZWVwQWxpdmUgPSB0cnVlO1xuICAgICAgICBjb25zdCBtYXhTb2NrZXRzID0gNTA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25uZWN0aW9uVGltZW91dCxcbiAgICAgICAgICAgIHJlcXVlc3RUaW1lb3V0LFxuICAgICAgICAgICAgc29ja2V0VGltZW91dCxcbiAgICAgICAgICAgIHNvY2tldEFjcXVpc2l0aW9uV2FybmluZ1RpbWVvdXQsXG4gICAgICAgICAgICB0aHJvd09uUmVxdWVzdFRpbWVvdXQsXG4gICAgICAgICAgICBodHRwQWdlbnRQcm92aWRlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgQWdlbnQsIHJlcXVlc3QgfSA9IGF3YWl0IGltcG9ydCgnbm9kZTpodHRwJyk7XG4gICAgICAgICAgICAgICAgaFJlcXVlc3QgPSByZXF1ZXN0O1xuICAgICAgICAgICAgICAgIGhBZ2VudCA9IEFnZW50O1xuICAgICAgICAgICAgICAgIGlmIChodHRwQWdlbnQgaW5zdGFuY2VvZiBoQWdlbnQgfHwgdHlwZW9mIGh0dHBBZ2VudD8uZGVzdHJveSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxBZ2VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodHRwQWdlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaEFnZW50KHsga2VlcEFsaXZlLCBtYXhTb2NrZXRzLCAuLi5odHRwQWdlbnQgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHR0cHNBZ2VudDogKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaHR0cHNBZ2VudCBpbnN0YW5jZW9mIG5vZGVfaHR0cHMuQWdlbnQgfHwgdHlwZW9mIGh0dHBzQWdlbnQ/LmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVybmFsQWdlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHR0cHNBZ2VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBub2RlX2h0dHBzLkFnZW50KHsga2VlcEFsaXZlLCBtYXhTb2NrZXRzLCAuLi5odHRwc0FnZW50IH0pO1xuICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIE5vZGVIdHRwMkNvbm5lY3Rpb25Qb29sIHtcbiAgICBzZXNzaW9ucyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25zKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbnMgPSBzZXNzaW9ucyA/PyBbXTtcbiAgICB9XG4gICAgcG9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvbnMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvZmZlckxhc3Qoc2Vzc2lvbikge1xuICAgICAgICB0aGlzLnNlc3Npb25zLnB1c2goc2Vzc2lvbik7XG4gICAgfVxuICAgIGNvbnRhaW5zKHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvbnMuaW5jbHVkZXMoc2Vzc2lvbik7XG4gICAgfVxuICAgIHJlbW92ZShzZXNzaW9uKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbnMgPSB0aGlzLnNlc3Npb25zLmZpbHRlcigocykgPT4gcyAhPT0gc2Vzc2lvbik7XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGRlc3Ryb3koY29ubmVjdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IHNlc3Npb24gb2YgdGhpcy5zZXNzaW9ucykge1xuICAgICAgICAgICAgaWYgKHNlc3Npb24gPT09IGNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlc3Npb24uZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgTm9kZUh0dHAyQ29ubmVjdGlvbk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5ICYmIHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5IDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwibWF4Q29uY3VycmVuY3kgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnO1xuICAgIHNlc3Npb25DYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBsZWFzZShyZXF1ZXN0Q29udGV4dCwgY29ubmVjdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmxTdHJpbmcocmVxdWVzdENvbnRleHQpO1xuICAgICAgICBjb25zdCBleGlzdGluZ1Bvb2wgPSB0aGlzLnNlc3Npb25DYWNoZS5nZXQodXJsKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nUG9vbCkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTZXNzaW9uID0gZXhpc3RpbmdQb29sLnBvbGwoKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Nlc3Npb24gJiYgIXRoaXMuY29uZmlnLmRpc2FibGVDb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1Nlc3Npb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGh0dHAyLmNvbm5lY3QodXJsKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICBzZXNzaW9uLnNldHRpbmdzKHsgbWF4Q29uY3VycmVudFN0cmVhbXM6IHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5IH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWwgdG8gc2V0IG1heENvbmN1cnJlbnRTdHJlYW1zIHRvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlbiBjcmVhdGluZyBuZXcgc2Vzc2lvbiBmb3IgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdENvbnRleHQuZGVzdGluYXRpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2Vzc2lvbi51bnJlZigpO1xuICAgICAgICBjb25zdCBkZXN0cm95U2Vzc2lvbkNiID0gKCkgPT4ge1xuICAgICAgICAgICAgc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVNlc3Npb24odXJsLCBzZXNzaW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2Vzc2lvbi5vbihcImdvYXdheVwiLCBkZXN0cm95U2Vzc2lvbkNiKTtcbiAgICAgICAgc2Vzc2lvbi5vbihcImVycm9yXCIsIGRlc3Ryb3lTZXNzaW9uQ2IpO1xuICAgICAgICBzZXNzaW9uLm9uKFwiZnJhbWVFcnJvclwiLCBkZXN0cm95U2Vzc2lvbkNiKTtcbiAgICAgICAgc2Vzc2lvbi5vbihcImNsb3NlXCIsICgpID0+IHRoaXMuZGVsZXRlU2Vzc2lvbih1cmwsIHNlc3Npb24pKTtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25Db25maWd1cmF0aW9uLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICAgICAgICBzZXNzaW9uLnNldFRpbWVvdXQoY29ubmVjdGlvbkNvbmZpZ3VyYXRpb24ucmVxdWVzdFRpbWVvdXQsIGRlc3Ryb3lTZXNzaW9uQ2IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25Qb29sID0gdGhpcy5zZXNzaW9uQ2FjaGUuZ2V0KHVybCkgfHwgbmV3IE5vZGVIdHRwMkNvbm5lY3Rpb25Qb29sKCk7XG4gICAgICAgIGNvbm5lY3Rpb25Qb29sLm9mZmVyTGFzdChzZXNzaW9uKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ2FjaGUuc2V0KHVybCwgY29ubmVjdGlvblBvb2wpO1xuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gICAgZGVsZXRlU2Vzc2lvbihhdXRob3JpdHksIHNlc3Npb24pIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb25uZWN0aW9uUG9vbCA9IHRoaXMuc2Vzc2lvbkNhY2hlLmdldChhdXRob3JpdHkpO1xuICAgICAgICBpZiAoIWV4aXN0aW5nQ29ubmVjdGlvblBvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV4aXN0aW5nQ29ubmVjdGlvblBvb2wuY29udGFpbnMoc2Vzc2lvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBleGlzdGluZ0Nvbm5lY3Rpb25Qb29sLnJlbW92ZShzZXNzaW9uKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ2FjaGUuc2V0KGF1dGhvcml0eSwgZXhpc3RpbmdDb25uZWN0aW9uUG9vbCk7XG4gICAgfVxuICAgIHJlbGVhc2UocmVxdWVzdENvbnRleHQsIHNlc3Npb24pIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmdldFVybFN0cmluZyhyZXF1ZXN0Q29udGV4dCk7XG4gICAgICAgIHRoaXMuc2Vzc2lvbkNhY2hlLmdldChjYWNoZUtleSk/Lm9mZmVyTGFzdChzZXNzaW9uKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBjb25uZWN0aW9uUG9vbF0gb2YgdGhpcy5zZXNzaW9uQ2FjaGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBjb25uZWN0aW9uUG9vbCkge1xuICAgICAgICAgICAgICAgIGlmICghc2Vzc2lvbi5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25Qb29sLnJlbW92ZShzZXNzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNhY2hlLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldE1heENvbmN1cnJlbnRTdHJlYW1zKG1heENvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgIGlmIChtYXhDb25jdXJyZW50U3RyZWFtcyAmJiBtYXhDb25jdXJyZW50U3RyZWFtcyA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIm1heENvbmN1cnJlbnRTdHJlYW1zIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5ID0gbWF4Q29uY3VycmVudFN0cmVhbXM7XG4gICAgfVxuICAgIHNldERpc2FibGVDb25jdXJyZW50U3RyZWFtcyhkaXNhYmxlQ29uY3VycmVudFN0cmVhbXMpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZGlzYWJsZUNvbmN1cnJlbmN5ID0gZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zO1xuICAgIH1cbiAgICBnZXRVcmxTdHJpbmcocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5kZXN0aW5hdGlvbi50b1N0cmluZygpO1xuICAgIH1cbn1cblxuY2xhc3MgTm9kZUh0dHAySGFuZGxlciB7XG4gICAgY29uZmlnO1xuICAgIGNvbmZpZ1Byb3ZpZGVyO1xuICAgIG1ldGFkYXRhID0geyBoYW5kbGVyUHJvdG9jb2w6IFwiaDJcIiB9O1xuICAgIGNvbm5lY3Rpb25NYW5hZ2VyID0gbmV3IE5vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyKHt9KTtcbiAgICBzdGF0aWMgY3JlYXRlKGluc3RhbmNlT3JPcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VPck9wdGlvbnM/LmhhbmRsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VPck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlSHR0cDJIYW5kbGVyKGluc3RhbmNlT3JPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbmZpZ1Byb3ZpZGVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG9wdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcHRzIHx8IHt9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlKHJlcXVlc3QsIHsgYWJvcnRTaWduYWwsIHJlcXVlc3RUaW1lb3V0IH0gPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnUHJvdmlkZXI7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLnNldERpc2FibGVDb25jdXJyZW50U3RyZWFtcyh0aGlzLmNvbmZpZy5kaXNhYmxlQ29uY3VycmVudFN0cmVhbXMgfHwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1heENvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uTWFuYWdlci5zZXRNYXhDb25jdXJyZW50U3RyZWFtcyh0aGlzLmNvbmZpZy5tYXhDb25jdXJyZW50U3RyZWFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByZXF1ZXN0VGltZW91dDogY29uZmlnUmVxdWVzdFRpbWVvdXQsIGRpc2FibGVDb25jdXJyZW50U3RyZWFtcyB9ID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgPz8gY29uZmlnUmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBmdWxmaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB3cml0ZVJlcXVlc3RCb2R5UHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmUgPSBhc3luYyAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgICAgICAgICAgX3Jlc29sdmUoYXJnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZWplY3QgPSBhc3luYyAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgICAgICAgICAgX3JlamVjdChhcmcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChhYm9ydFNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IGJ1aWxkQWJvcnRFcnJvcihhYm9ydFNpZ25hbCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGFib3J0RXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgaG9zdG5hbWUsIG1ldGhvZCwgcG9ydCwgcHJvdG9jb2wsIHF1ZXJ5IH0gPSByZXF1ZXN0O1xuICAgICAgICAgICAgbGV0IGF1dGggPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QudXNlcm5hbWUgIT0gbnVsbCB8fCByZXF1ZXN0LnBhc3N3b3JkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHJlcXVlc3QudXNlcm5hbWUgPz8gXCJcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IHJlcXVlc3QucGFzc3dvcmQgPz8gXCJcIjtcbiAgICAgICAgICAgICAgICBhdXRoID0gYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9QGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhdXRob3JpdHkgPSBgJHtwcm90b2NvbH0vLyR7YXV0aH0ke2hvc3RuYW1lfSR7cG9ydCA/IGA6JHtwb3J0fWAgOiBcIlwifWA7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0Q29udGV4dCA9IHsgZGVzdGluYXRpb246IG5ldyBVUkwoYXV0aG9yaXR5KSB9O1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIubGVhc2UocmVxdWVzdENvbnRleHQsIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0VGltZW91dDogdGhpcy5jb25maWc/LnNlc3Npb25UaW1lb3V0LFxuICAgICAgICAgICAgICAgIGRpc2FibGVDb25jdXJyZW50U3RyZWFtczogZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zIHx8IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZWplY3RXaXRoRGVzdHJveSA9IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVNlc3Npb24oc2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bGZpbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeXN0cmluZ0J1aWxkZXIuYnVpbGRRdWVyeVN0cmluZyhxdWVyeSB8fCB7fSk7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHJlcXVlc3QucGF0aDtcbiAgICAgICAgICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5mcmFnbWVudCkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYCMke3JlcXVlc3QuZnJhZ21lbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHNlc3Npb24ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgLi4ucmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIFtodHRwMi5jb25zdGFudHMuSFRUUDJfSEVBREVSX1BBVEhdOiBwYXRoLFxuICAgICAgICAgICAgICAgIFtodHRwMi5jb25zdGFudHMuSFRUUDJfSEVBREVSX01FVEhPRF06IG1ldGhvZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2Vzc2lvbi5yZWYoKTtcbiAgICAgICAgICAgIHJlcS5vbihcInJlc3BvbnNlXCIsIChoZWFkZXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0gbmV3IHByb3RvY29sSHR0cC5IdHRwUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBoZWFkZXJzW1wiOnN0YXR1c1wiXSB8fCAtMSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZ2V0VHJhbnNmb3JtZWRIZWFkZXJzKGhlYWRlcnMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiByZXEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVzcG9uc2U6IGh0dHBSZXNwb25zZSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uTWFuYWdlci5kZWxldGVTZXNzaW9uKGF1dGhvcml0eSwgc2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZWZmZWN0aXZlUmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICByZXEuc2V0VGltZW91dChlZmZlY3RpdmVSZXF1ZXN0VGltZW91dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXEuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dEVycm9yID0gbmV3IEVycm9yKGBTdHJlYW0gdGltZWQgb3V0IGJlY2F1c2Ugb2Ygbm8gYWN0aXZpdHkgZm9yICR7ZWZmZWN0aXZlUmVxdWVzdFRpbWVvdXR9IG1zYCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRFcnJvci5uYW1lID0gXCJUaW1lb3V0RXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0V2l0aERlc3Ryb3kodGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhYm9ydFNpZ25hbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uQWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gYnVpbGRBYm9ydEVycm9yKGFib3J0U2lnbmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0V2l0aERlc3Ryb3koYWJvcnRFcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduYWwgPSBhYm9ydFNpZ25hbDtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmNlKFwiY2xvc2VcIiwgKCkgPT4gc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYm9ydFNpZ25hbC5vbmFib3J0ID0gb25BYm9ydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXEub24oXCJmcmFtZUVycm9yXCIsICh0eXBlLCBjb2RlLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdFdpdGhEZXN0cm95KG5ldyBFcnJvcihgRnJhbWUgdHlwZSBpZCAke3R5cGV9IGluIHN0cmVhbSBpZCAke2lkfSBoYXMgZmFpbGVkIHdpdGggY29kZSAke2NvZGV9LmApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxLm9uKFwiZXJyb3JcIiwgcmVqZWN0V2l0aERlc3Ryb3kpO1xuICAgICAgICAgICAgcmVxLm9uKFwiYWJvcnRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0V2l0aERlc3Ryb3kobmV3IEVycm9yKGBIVFRQLzIgc3RyZWFtIGlzIGFibm9ybWFsbHkgYWJvcnRlZCBpbiBtaWQtY29tbXVuaWNhdGlvbiB3aXRoIHJlc3VsdCBjb2RlICR7cmVxLnJzdENvZGV9LmApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxLm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlc3Npb24udW5yZWYoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3RXaXRoRGVzdHJveShuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOiBodHRwMiByZXF1ZXN0IGRpZCBub3QgZ2V0IGEgcmVzcG9uc2VcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2UgPSB3cml0ZVJlcXVlc3RCb2R5KHJlcSwgcmVxdWVzdCwgZWZmZWN0aXZlUmVxdWVzdFRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNvbmZpZ1Byb3ZpZGVyID0gdGhpcy5jb25maWdQcm92aWRlci50aGVuKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBodHRwSGFuZGxlckNvbmZpZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZyA/PyB7fTtcbiAgICB9XG4gICAgZGVzdHJveVNlc3Npb24oc2Vzc2lvbikge1xuICAgICAgICBpZiAoIXNlc3Npb24uZGVzdHJveWVkKSB7XG4gICAgICAgICAgICBzZXNzaW9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29sbGVjdG9yIGV4dGVuZHMgbm9kZV9zdHJlYW0uV3JpdGFibGUge1xuICAgIGJ1ZmZlcmVkQnl0ZXMgPSBbXTtcbiAgICBfd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmJ1ZmZlcmVkQnl0ZXMucHVzaChjaHVuayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuXG5jb25zdCBzdHJlYW1Db2xsZWN0b3IgPSAoc3RyZWFtKSA9PiB7XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW1JbnN0YW5jZShzdHJlYW0pKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0UmVhZGFibGVTdHJlYW0oc3RyZWFtKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGVjdG9yID0gbmV3IENvbGxlY3RvcigpO1xuICAgICAgICBzdHJlYW0ucGlwZShjb2xsZWN0b3IpO1xuICAgICAgICBzdHJlYW0ub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb2xsZWN0b3IuZW5kKCk7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbGxlY3Rvci5vbihcImVycm9yXCIsIHJlamVjdCk7XG4gICAgICAgIGNvbGxlY3Rvci5vbihcImZpbmlzaFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KEJ1ZmZlci5jb25jYXQodGhpcy5idWZmZXJlZEJ5dGVzKSk7XG4gICAgICAgICAgICByZXNvbHZlKGJ5dGVzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuY29uc3QgaXNSZWFkYWJsZVN0cmVhbUluc3RhbmNlID0gKHN0cmVhbSkgPT4gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiYgc3RyZWFtIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW07XG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0UmVhZGFibGVTdHJlYW0oc3RyZWFtKSB7XG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICAgIGxldCBpc0RvbmUgPSBmYWxzZTtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICB3aGlsZSAoIWlzRG9uZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIGxlbmd0aCArPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaXNEb25lID0gZG9uZTtcbiAgICB9XG4gICAgY29uc3QgY29sbGVjdGVkID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgICBjb2xsZWN0ZWQuc2V0KGNodW5rLCBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGVkO1xufVxuXG5leHBvcnRzLkRFRkFVTFRfUkVRVUVTVF9USU1FT1VUID0gREVGQVVMVF9SRVFVRVNUX1RJTUVPVVQ7XG5leHBvcnRzLk5vZGVIdHRwMkhhbmRsZXIgPSBOb2RlSHR0cDJIYW5kbGVyO1xuZXhwb3J0cy5Ob2RlSHR0cEhhbmRsZXIgPSBOb2RlSHR0cEhhbmRsZXI7XG5leHBvcnRzLnN0cmVhbUNvbGxlY3RvciA9IHN0cmVhbUNvbGxlY3RvcjtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUE7QUFBQTtBQUVBLFFBQU0sWUFBWSxDQUFDLFFBQVEsbUJBQW1CLEdBQUcsRUFBRSxRQUFRLFlBQVksU0FBUztBQUNoRixRQUFNLFlBQVksQ0FBQyxNQUFNLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxTQUFT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TSxZQUFZLElBQUksVUFBVTtBQUNoQyxlQUFPLEtBQUssU0FBUztBQUNyQixlQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVE7QUFDeEIsb0JBQVUsSUFBSTtBQUNkLGlCQUFPLEdBQUc7QUFBQSxRQUNkLENBQUM7QUFDRCxrQkFBVSxHQUFHLFNBQVMsTUFBTTtBQUM1QixrQkFBVSxHQUFHLFVBQVUsV0FBWTtBQUMvQixnQkFBTSxRQUFRLElBQUksV0FBVyxPQUFPLE9BQU8sS0FBSyxhQUFhLENBQUM7QUFDOUQsa0JBQVEsS0FBSztBQUFBLFFBQ2pCLENBQUM7QUFBQSxNQUNMLENBQUM7QUFBQSxJQUNMO0FBQ0EsUUFBTSwyQkFBMkIsQ0FBQyxXQUFXLE9BQU8sbUJBQW1CLGNBQWMsa0JBQWtCO0FBQ3ZHLG1CQUFlLHNCQUFzQixRQUFRO0FBQ3pDLFlBQU0sU0FBUyxDQUFDO0FBQ2hCLFlBQU0sU0FBUyxPQUFPLFVBQVU7QUFDaEMsVUFBSSxTQUFTO0FBQ2IsVUFBSSxTQUFTO0FBQ2IsYUFBTyxDQUFDLFFBQVE7QUFDWixjQUFNLEVBQUUsTUFBTSxNQUFNLElBQUksTUFBTSxPQUFPLEtBQUs7QUFDMUMsWUFBSSxPQUFPO0FBQ1AsaUJBQU8sS0FBSyxLQUFLO0FBQ2pCLG9CQUFVLE1BQU07QUFBQSxRQUNwQjtBQUNBLGlCQUFTO0FBQUEsTUFDYjtBQUNBLFlBQU0sWUFBWSxJQUFJLFdBQVcsTUFBTTtBQUN2QyxVQUFJLFNBQVM7QUFDYixpQkFBVyxTQUFTLFFBQVE7QUFDeEIsa0JBQVUsSUFBSSxPQUFPLE1BQU07QUFDM0Isa0JBQVUsTUFBTTtBQUFBLE1BQ3BCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFFQSxZQUFRLDBCQUEwQjtBQUNsQyxZQUFRLG1CQUFtQjtBQUMzQixZQUFRLGtCQUFrQjtBQUMxQixZQUFRLGtCQUFrQjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfZGlzdF9janMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgImFib3J0RXJyb3IiXQp9Cg==
