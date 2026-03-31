#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_extend,
  require_json_bigint
} from "./chunk-GFCTD5CD.mjs";
import {
  require_base64_js
} from "./chunk-YNBJ2UYC.mjs";
import {
  require_ecdsa_sig_formatter,
  require_jws
} from "./chunk-IRT7NSD6.mjs";
import {
  __commonJS,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/package.json"(exports, module) {
    module.exports = {
      name: "gaxios",
      version: "7.1.4",
      description: "A simple common HTTP client specifically for Google APIs and services.",
      main: "build/cjs/src/index.js",
      types: "build/cjs/src/index.d.ts",
      files: [
        "build/"
      ],
      exports: {
        ".": {
          import: {
            types: "./build/esm/src/index.d.ts",
            default: "./build/esm/src/index.js"
          },
          require: {
            types: "./build/cjs/src/index.d.ts",
            default: "./build/cjs/src/index.js"
          }
        }
      },
      scripts: {
        lint: "gts check --no-inline-config",
        test: "c8 mocha build/esm/test",
        "presystem-test": "npm run compile",
        "system-test": "mocha build/esm/system-test --timeout 80000",
        compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs",
        fix: "gts fix",
        prepare: "npm run compile",
        pretest: "npm run compile",
        webpack: "webpack",
        "prebrowser-test": "npm run compile",
        "browser-test": "node build/browser-test/browser-test-runner.js",
        docs: "jsdoc -c .jsdoc.js",
        "docs-test": "linkinator docs",
        "predocs-test": "npm run docs",
        "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
        prelint: "cd samples; npm link ../; npm install",
        clean: "gts clean"
      },
      repository: {
        type: "git",
        directory: "packages/gaxios",
        url: "https://github.com/googleapis/google-cloud-node-core.git"
      },
      keywords: [
        "google"
      ],
      engines: {
        node: ">=18"
      },
      author: "Google, LLC",
      license: "Apache-2.0",
      devDependencies: {
        "@babel/plugin-proposal-private-methods": "^7.18.6",
        "@types/cors": "^2.8.6",
        "@types/express": "^5.0.0",
        "@types/extend": "^3.0.1",
        "@types/mocha": "^10.0.10",
        "@types/multiparty": "4.2.1",
        "@types/mv": "^2.1.0",
        "@types/ncp": "^2.0.8",
        "@types/node": "^22.13.1",
        "@types/sinon": "^17.0.3",
        "@types/tmp": "^0.2.6",
        assert: "^2.0.0",
        browserify: "^17.0.0",
        c8: "^10.1.3",
        cors: "^2.8.5",
        express: "^5.0.0",
        gts: "^6.0.2",
        "is-docker": "^3.0.0",
        jsdoc: "^4.0.4",
        "jsdoc-fresh": "^5.0.0",
        "jsdoc-region-tag": "^4.0.0",
        karma: "^6.0.0",
        "karma-chrome-launcher": "^3.0.0",
        "karma-coverage": "^2.0.0",
        "karma-firefox-launcher": "^2.0.0",
        "karma-mocha": "^2.0.0",
        "karma-remap-coverage": "^0.1.5",
        "karma-sourcemap-loader": "^0.4.0",
        "karma-webpack": "^5.0.1",
        linkinator: "^6.1.2",
        mocha: "^11.1.0",
        multiparty: "^4.2.1",
        mv: "^2.1.1",
        ncp: "^2.0.0",
        nock: "^14.0.5",
        "null-loader": "^4.0.1",
        "pack-n-play": "^4.0.0",
        puppeteer: "^24.0.0",
        sinon: "^21.0.0",
        "stream-browserify": "^3.0.0",
        tmp: "0.2.5",
        "ts-loader": "^9.5.2",
        typescript: "5.8.3",
        webpack: "^5.97.1",
        "webpack-cli": "^6.0.1"
      },
      dependencies: {
        extend: "^3.0.2",
        "https-proxy-agent": "^7.0.1",
        "node-fetch": "^3.3.2"
      },
      homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios"
    };
  }
});

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/util.cjs
var require_util = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/util.cjs"(exports, module) {
    "use strict";
    var pkg = require_package();
    module.exports = { pkg };
  }
});

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/common.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GaxiosError = exports.GAXIOS_ERROR_SYMBOL = void 0;
    exports.defaultErrorRedactor = defaultErrorRedactor;
    var extend_1 = __importDefault(require_extend());
    var util_cjs_1 = __importDefault(require_util());
    var pkg = util_cjs_1.default.pkg;
    exports.GAXIOS_ERROR_SYMBOL = /* @__PURE__ */ Symbol.for(`${pkg.name}-gaxios-error`);
    var GaxiosError = class _GaxiosError extends Error {
      config;
      response;
      /**
       * An error code.
       * Can be a system error code, DOMException error name, or any error's 'code' property where it is a `string`.
       *
       * It is only a `number` when the cause is sourced from an API-level error (AIP-193).
       *
       * @see {@link https://nodejs.org/api/errors.html#errorcode error.code}
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException#error_names DOMException#error_names}
       * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
       *
       * @example
       * 'ECONNRESET'
       *
       * @example
       * 'TimeoutError'
       *
       * @example
       * 500
       */
      code;
      /**
       * An HTTP Status code.
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response/status Response#status}
       *
       * @example
       * 500
       */
      status;
      /**
       * @deprecated use {@link GaxiosError.cause} instead.
       *
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause Error#cause}
       *
       * @privateRemarks
       *
       * We will want to remove this property later as the modern `cause` property is better suited
       * for displaying and relaying nested errors. Keeping this here makes the resulting
       * error log larger than it needs to be.
       *
       */
      error;
      /**
       * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
       *
       * @see {@link GAXIOS_ERROR_SYMBOL}
       * @see {@link GaxiosError[Symbol.hasInstance]}
       * @see {@link https://github.com/microsoft/TypeScript/issues/13965#issuecomment-278570200}
       * @see {@link https://stackoverflow.com/questions/46618852/require-and-instanceof}
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance#reverting_to_default_instanceof_behavior}
       */
      [exports.GAXIOS_ERROR_SYMBOL] = pkg.version;
      /**
       * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
       *
       * @see {@link GAXIOS_ERROR_SYMBOL}
       * @see {@link GaxiosError[GAXIOS_ERROR_SYMBOL]}
       */
      static [Symbol.hasInstance](instance) {
        if (instance && typeof instance === "object" && exports.GAXIOS_ERROR_SYMBOL in instance && instance[exports.GAXIOS_ERROR_SYMBOL] === pkg.version) {
          return true;
        }
        return Function.prototype[Symbol.hasInstance].call(_GaxiosError, instance);
      }
      constructor(message, config, response, cause) {
        super(message, { cause });
        this.config = config;
        this.response = response;
        this.error = cause instanceof Error ? cause : void 0;
        this.config = (0, extend_1.default)(true, {}, config);
        if (this.response) {
          this.response.config = (0, extend_1.default)(true, {}, this.response.config);
        }
        if (this.response) {
          try {
            this.response.data = translateData(
              this.config.responseType,
              // workaround for `node-fetch`'s `.data` deprecation...
              this.response?.bodyUsed ? this.response?.data : void 0
            );
          } catch {
          }
          this.status = this.response.status;
        }
        if (cause instanceof DOMException) {
          this.code = cause.name;
        } else if (cause && typeof cause === "object" && "code" in cause && (typeof cause.code === "string" || typeof cause.code === "number")) {
          this.code = cause.code;
        }
      }
      /**
       * An AIP-193 conforming error extractor.
       *
       * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
       *
       * @internal
       * @expiremental
       *
       * @param res the response object
       * @returns the extracted error information
       */
      static extractAPIErrorFromResponse(res, defaultErrorMessage = "The request failed") {
        let message = defaultErrorMessage;
        if (typeof res.data === "string") {
          message = res.data;
        }
        if (res.data && typeof res.data === "object" && "error" in res.data && res.data.error && !res.ok) {
          if (typeof res.data.error === "string") {
            return {
              message: res.data.error,
              code: res.status,
              status: res.statusText
            };
          }
          if (typeof res.data.error === "object") {
            message = "message" in res.data.error && typeof res.data.error.message === "string" ? res.data.error.message : message;
            const status = "status" in res.data.error && typeof res.data.error.status === "string" ? res.data.error.status : res.statusText;
            const code = "code" in res.data.error && typeof res.data.error.code === "number" ? res.data.error.code : res.status;
            if ("errors" in res.data.error && Array.isArray(res.data.error.errors)) {
              const errorMessages = [];
              for (const e of res.data.error.errors) {
                if (typeof e === "object" && "message" in e && typeof e.message === "string") {
                  errorMessages.push(e.message);
                }
              }
              return Object.assign({
                message: errorMessages.join("\n") || message,
                code,
                status
              }, res.data.error);
            }
            return Object.assign({
              message,
              code,
              status
            }, res.data.error);
          }
        }
        return {
          message,
          code: res.status,
          status: res.statusText
        };
      }
    };
    exports.GaxiosError = GaxiosError;
    function translateData(responseType, data) {
      switch (responseType) {
        case "stream":
          return data;
        case "json":
          return JSON.parse(JSON.stringify(data));
        case "arraybuffer":
          return JSON.parse(Buffer.from(data).toString("utf8"));
        case "blob":
          return JSON.parse(data.text());
        default:
          return data;
      }
    }
    function defaultErrorRedactor(data) {
      const REDACT = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      function redactHeaders(headers) {
        if (!headers)
          return;
        headers.forEach((_, key) => {
          if (/^authentication$/i.test(key) || /^authorization$/i.test(key) || /secret/i.test(key))
            headers.set(key, REDACT);
        });
      }
      function redactString(obj, key) {
        if (typeof obj === "object" && obj !== null && typeof obj[key] === "string") {
          const text = obj[key];
          if (/grant_type=/i.test(text) || /assertion=/i.test(text) || /secret/i.test(text)) {
            obj[key] = REDACT;
          }
        }
      }
      function redactObject(obj) {
        if (!obj || typeof obj !== "object") {
          return;
        } else if (obj instanceof FormData || obj instanceof URLSearchParams || // support `node-fetch` FormData/URLSearchParams
        "forEach" in obj && "set" in obj) {
          obj.forEach((_, key) => {
            if (["grant_type", "assertion"].includes(key) || /secret/.test(key)) {
              obj.set(key, REDACT);
            }
          });
        } else {
          if ("grant_type" in obj) {
            obj["grant_type"] = REDACT;
          }
          if ("assertion" in obj) {
            obj["assertion"] = REDACT;
          }
          if ("client_secret" in obj) {
            obj["client_secret"] = REDACT;
          }
        }
      }
      if (data.config) {
        redactHeaders(data.config.headers);
        redactString(data.config, "data");
        redactObject(data.config.data);
        redactString(data.config, "body");
        redactObject(data.config.body);
        if (data.config.url.searchParams.has("token")) {
          data.config.url.searchParams.set("token", REDACT);
        }
        if (data.config.url.searchParams.has("client_secret")) {
          data.config.url.searchParams.set("client_secret", REDACT);
        }
      }
      if (data.response) {
        defaultErrorRedactor({ config: data.response.config });
        redactHeaders(data.response.headers);
        if (data.response.bodyUsed) {
          redactString(data.response, "data");
          redactObject(data.response.data);
        }
      }
      return data;
    }
  }
});

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/retry.js
var require_retry = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRetryConfig = getRetryConfig;
    async function getRetryConfig(err) {
      let config = getConfig(err);
      if (!err || !err.config || !config && !err.config.retry) {
        return { shouldRetry: false };
      }
      config = config || {};
      config.currentRetryAttempt = config.currentRetryAttempt || 0;
      config.retry = config.retry === void 0 || config.retry === null ? 3 : config.retry;
      config.httpMethodsToRetry = config.httpMethodsToRetry || [
        "GET",
        "HEAD",
        "PUT",
        "OPTIONS",
        "DELETE"
      ];
      config.noResponseRetries = config.noResponseRetries === void 0 || config.noResponseRetries === null ? 2 : config.noResponseRetries;
      config.retryDelayMultiplier = config.retryDelayMultiplier ? config.retryDelayMultiplier : 2;
      config.timeOfFirstRequest = config.timeOfFirstRequest ? config.timeOfFirstRequest : Date.now();
      config.totalTimeout = config.totalTimeout ? config.totalTimeout : Number.MAX_SAFE_INTEGER;
      config.maxRetryDelay = config.maxRetryDelay ? config.maxRetryDelay : Number.MAX_SAFE_INTEGER;
      const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 408 - Retry ("Request Timeout")
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [100, 199],
        [408, 408],
        [429, 429],
        [500, 599]
      ];
      config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
      err.config.retryConfig = config;
      const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
      if (!await shouldRetryFn(err)) {
        return { shouldRetry: false, config: err.config };
      }
      const delay = getNextRetryDelay(config);
      err.config.retryConfig.currentRetryAttempt += 1;
      const backoff = config.retryBackoff ? config.retryBackoff(err, delay) : new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
      if (config.onRetryAttempt) {
        await config.onRetryAttempt(err);
      }
      await backoff;
      return { shouldRetry: true, config: err.config };
    }
    function shouldRetryRequest(err) {
      const config = getConfig(err);
      if (err.config.signal?.aborted && err.code !== "TimeoutError" || err.code === "AbortError") {
        return false;
      }
      if (!config || config.retry === 0) {
        return false;
      }
      if (!err.response && (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
      }
      if (!config.httpMethodsToRetry || !config.httpMethodsToRetry.includes(err.config.method?.toUpperCase() || "GET")) {
        return false;
      }
      if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry) {
          const status = err.response.status;
          if (status >= min && status <= max) {
            isInRange = true;
            break;
          }
        }
        if (!isInRange) {
          return false;
        }
      }
      config.currentRetryAttempt = config.currentRetryAttempt || 0;
      if (config.currentRetryAttempt >= config.retry) {
        return false;
      }
      return true;
    }
    function getConfig(err) {
      if (err && err.config && err.config.retryConfig) {
        return err.config.retryConfig;
      }
      return;
    }
    function getNextRetryDelay(config) {
      const retryDelay = config.currentRetryAttempt ? 0 : config.retryDelay ?? 100;
      const calculatedDelay = retryDelay + (Math.pow(config.retryDelayMultiplier, config.currentRetryAttempt) - 1) / 2 * 1e3;
      const maxAllowableDelay = config.totalTimeout - (Date.now() - config.timeOfFirstRequest);
      return Math.min(calculatedDelay, maxAllowableDelay, config.maxRetryDelay);
    }
  }
});

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/interceptor.js
var require_interceptor = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/interceptor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GaxiosInterceptorManager = void 0;
    var GaxiosInterceptorManager = class extends Set {
    };
    exports.GaxiosInterceptorManager = GaxiosInterceptorManager;
  }
});

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/gaxios.js
var require_gaxios = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/gaxios.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gaxios = void 0;
    var extend_1 = __importDefault(require_extend());
    var https_1 = __require("https");
    var common_js_1 = require_common();
    var retry_js_1 = require_retry();
    var stream_1 = __require("stream");
    var interceptor_js_1 = require_interceptor();
    var randomUUID = async () => globalThis.crypto?.randomUUID() || (await import("crypto")).randomUUID();
    var HTTP_STATUS_NO_CONTENT = 204;
    var Gaxios = class {
      agentCache = /* @__PURE__ */ new Map();
      /**
       * Default HTTP options that will be used for every HTTP request.
       */
      defaults;
      /**
       * Interceptors
       */
      interceptors;
      /**
       * The Gaxios class is responsible for making HTTP requests.
       * @param defaults The default set of options to be used for this instance.
       */
      constructor(defaults) {
        this.defaults = defaults || {};
        this.interceptors = {
          request: new interceptor_js_1.GaxiosInterceptorManager(),
          response: new interceptor_js_1.GaxiosInterceptorManager()
        };
      }
      /**
       * A {@link fetch `fetch`} compliant API for {@link Gaxios}.
       *
       * @remarks
       *
       * This is useful as a drop-in replacement for `fetch` API usage.
       *
       * @example
       *
       * ```ts
       * const gaxios = new Gaxios();
       * const myFetch: typeof fetch = (...args) => gaxios.fetch(...args);
       * await myFetch('https://example.com');
       * ```
       *
       * @param args `fetch` API or `Gaxios#request` parameters
       * @returns the {@link Response} with Gaxios-added properties
       */
      fetch(...args) {
        const input = args[0];
        const init = args[1];
        let url = void 0;
        const headers = new Headers();
        if (typeof input === "string") {
          url = new URL(input);
        } else if (input instanceof URL) {
          url = input;
        } else if (input && input.url) {
          url = new URL(input.url);
        }
        if (input && typeof input === "object" && "headers" in input) {
          _a.mergeHeaders(headers, input.headers);
        }
        if (init) {
          _a.mergeHeaders(headers, new Headers(init.headers));
        }
        if (typeof input === "object" && !(input instanceof URL)) {
          return this.request({ ...init, ...input, headers, url });
        } else {
          return this.request({ ...init, headers, url });
        }
      }
      /**
       * Perform an HTTP request with the given options.
       * @param opts Set of HTTP options that will be used for this HTTP request.
       */
      async request(opts = {}) {
        let prepared = await this.#prepareRequest(opts);
        prepared = await this.#applyRequestInterceptors(prepared);
        return this.#applyResponseInterceptors(this._request(prepared));
      }
      async _defaultAdapter(config) {
        const fetchImpl = config.fetchImplementation || this.defaults.fetchImplementation || await _a.#getFetch();
        const preparedOpts = { ...config };
        delete preparedOpts.data;
        const res = await fetchImpl(config.url, preparedOpts);
        const data = await this.getResponseData(config, res);
        if (!Object.getOwnPropertyDescriptor(res, "data")?.configurable) {
          Object.defineProperties(res, {
            data: {
              configurable: true,
              writable: true,
              enumerable: true,
              value: data
            }
          });
        }
        return Object.assign(res, { config, data });
      }
      /**
       * Internal, retryable version of the `request` method.
       * @param opts Set of HTTP options that will be used for this HTTP request.
       */
      async _request(opts) {
        try {
          let translatedResponse;
          if (opts.adapter) {
            translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
          } else {
            translatedResponse = await this._defaultAdapter(opts);
          }
          if (!opts.validateStatus(translatedResponse.status)) {
            if (opts.responseType === "stream") {
              const response = [];
              for await (const chunk of translatedResponse.data) {
                response.push(chunk);
              }
              translatedResponse.data = response.toString();
            }
            const errorInfo = common_js_1.GaxiosError.extractAPIErrorFromResponse(translatedResponse, `Request failed with status code ${translatedResponse.status}`);
            throw new common_js_1.GaxiosError(errorInfo?.message, opts, translatedResponse, errorInfo);
          }
          return translatedResponse;
        } catch (e) {
          let err;
          if (e instanceof common_js_1.GaxiosError) {
            err = e;
          } else if (e instanceof Error) {
            err = new common_js_1.GaxiosError(e.message, opts, void 0, e);
          } else {
            err = new common_js_1.GaxiosError("Unexpected Gaxios Error", opts, void 0, e);
          }
          const { shouldRetry, config } = await (0, retry_js_1.getRetryConfig)(err);
          if (shouldRetry && config) {
            err.config.retryConfig.currentRetryAttempt = config.retryConfig.currentRetryAttempt;
            opts.retryConfig = err.config?.retryConfig;
            this.#appendTimeoutToSignal(opts);
            return this._request(opts);
          }
          if (opts.errorRedactor) {
            opts.errorRedactor(err);
          }
          throw err;
        }
      }
      async getResponseData(opts, res) {
        if (res.status === HTTP_STATUS_NO_CONTENT) {
          return "";
        }
        if (opts.maxContentLength && res.headers.has("content-length") && opts.maxContentLength < Number.parseInt(res.headers?.get("content-length") || "")) {
          throw new common_js_1.GaxiosError("Response's `Content-Length` is over the limit.", opts, Object.assign(res, { config: opts }));
        }
        switch (opts.responseType) {
          case "stream":
            return res.body;
          case "json": {
            const data = await res.text();
            try {
              return JSON.parse(data);
            } catch {
              return data;
            }
          }
          case "arraybuffer":
            return res.arrayBuffer();
          case "blob":
            return res.blob();
          case "text":
            return res.text();
          default:
            return this.getResponseDataFromContentType(res);
        }
      }
      #urlMayUseProxy(url, noProxy = []) {
        const candidate = new URL(url);
        const noProxyList = [...noProxy];
        const noProxyEnvList = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(",") || [];
        for (const rule of noProxyEnvList) {
          noProxyList.push(rule.trim());
        }
        for (const rule of noProxyList) {
          if (rule instanceof RegExp) {
            if (rule.test(candidate.toString())) {
              return false;
            }
          } else if (rule instanceof URL) {
            if (rule.origin === candidate.origin) {
              return false;
            }
          } else if (rule.startsWith("*.") || rule.startsWith(".")) {
            const cleanedRule = rule.replace(/^\*\./, ".");
            if (candidate.hostname.endsWith(cleanedRule)) {
              return false;
            }
          } else if (rule === candidate.origin || rule === candidate.hostname || rule === candidate.href) {
            return false;
          }
        }
        return true;
      }
      /**
       * Applies the request interceptors. The request interceptors are applied after the
       * call to prepareRequest is completed.
       *
       * @param {GaxiosOptionsPrepared} options The current set of options.
       *
       * @returns {Promise<GaxiosOptionsPrepared>} Promise that resolves to the set of options or response after interceptors are applied.
       */
      async #applyRequestInterceptors(options) {
        let promiseChain = Promise.resolve(options);
        for (const interceptor of this.interceptors.request.values()) {
          if (interceptor) {
            promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
          }
        }
        return promiseChain;
      }
      /**
       * Applies the response interceptors. The response interceptors are applied after the
       * call to request is made.
       *
       * @param {GaxiosOptionsPrepared} options The current set of options.
       *
       * @returns {Promise<GaxiosOptionsPrepared>} Promise that resolves to the set of options or response after interceptors are applied.
       */
      async #applyResponseInterceptors(response) {
        let promiseChain = Promise.resolve(response);
        for (const interceptor of this.interceptors.response.values()) {
          if (interceptor) {
            promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
          }
        }
        return promiseChain;
      }
      /**
       * Validates the options, merges them with defaults, and prepare request.
       *
       * @param options The original options passed from the client.
       * @returns Prepared options, ready to make a request
       */
      async #prepareRequest(options) {
        const preparedHeaders = new Headers(this.defaults.headers);
        _a.mergeHeaders(preparedHeaders, options.headers);
        const opts = (0, extend_1.default)(true, {}, this.defaults, options);
        if (!opts.url) {
          throw new Error("URL is required.");
        }
        if (opts.baseURL) {
          opts.url = new URL(opts.url, opts.baseURL);
        }
        opts.url = new URL(opts.url);
        if (opts.params) {
          if (opts.paramsSerializer) {
            let additionalQueryParams = opts.paramsSerializer(opts.params);
            if (additionalQueryParams.startsWith("?")) {
              additionalQueryParams = additionalQueryParams.slice(1);
            }
            const prefix = opts.url.toString().includes("?") ? "&" : "?";
            opts.url = opts.url + prefix + additionalQueryParams;
          } else {
            const url = opts.url instanceof URL ? opts.url : new URL(opts.url);
            for (const [key, value] of new URLSearchParams(opts.params)) {
              url.searchParams.append(key, value);
            }
            opts.url = url;
          }
        }
        if (typeof options.maxContentLength === "number") {
          opts.size = options.maxContentLength;
        }
        if (typeof options.maxRedirects === "number") {
          opts.follow = options.maxRedirects;
        }
        const shouldDirectlyPassData = typeof opts.data === "string" || opts.data instanceof ArrayBuffer || opts.data instanceof Blob || // Node 18 does not have a global `File` object
        globalThis.File && opts.data instanceof File || opts.data instanceof FormData || opts.data instanceof stream_1.Readable || opts.data instanceof ReadableStream || opts.data instanceof String || opts.data instanceof URLSearchParams || ArrayBuffer.isView(opts.data) || // `Buffer` (Node.js), `DataView`, `TypedArray`
        /**
         * @deprecated `node-fetch` or another third-party's request types
         */
        ["Blob", "File", "FormData"].includes(opts.data?.constructor?.name || "");
        if (opts.multipart?.length) {
          const boundary = await randomUUID();
          preparedHeaders.set("content-type", `multipart/related; boundary=${boundary}`);
          opts.body = stream_1.Readable.from(this.getMultipartRequest(opts.multipart, boundary));
        } else if (shouldDirectlyPassData) {
          opts.body = opts.data;
        } else if (typeof opts.data === "object") {
          if (preparedHeaders.get("Content-Type") === "application/x-www-form-urlencoded") {
            opts.body = opts.paramsSerializer ? opts.paramsSerializer(opts.data) : new URLSearchParams(opts.data);
          } else {
            if (!preparedHeaders.has("content-type")) {
              preparedHeaders.set("content-type", "application/json");
            }
            opts.body = JSON.stringify(opts.data);
          }
        } else if (opts.data) {
          opts.body = opts.data;
        }
        opts.validateStatus = opts.validateStatus || this.validateStatus;
        opts.responseType = opts.responseType || "unknown";
        if (!preparedHeaders.has("accept") && opts.responseType === "json") {
          preparedHeaders.set("accept", "application/json");
        }
        const proxy = opts.proxy || process?.env?.HTTPS_PROXY || process?.env?.https_proxy || process?.env?.HTTP_PROXY || process?.env?.http_proxy;
        if (opts.agent) {
        } else if (proxy && this.#urlMayUseProxy(opts.url, opts.noProxy)) {
          const HttpsProxyAgent = await _a.#getProxyAgent();
          if (this.agentCache.has(proxy)) {
            opts.agent = this.agentCache.get(proxy);
          } else {
            opts.agent = new HttpsProxyAgent(proxy, {
              cert: opts.cert,
              key: opts.key
            });
            this.agentCache.set(proxy, opts.agent);
          }
        } else if (opts.cert && opts.key) {
          if (this.agentCache.has(opts.key)) {
            opts.agent = this.agentCache.get(opts.key);
          } else {
            opts.agent = new https_1.Agent({
              cert: opts.cert,
              key: opts.key
            });
            this.agentCache.set(opts.key, opts.agent);
          }
        }
        if (typeof opts.errorRedactor !== "function" && opts.errorRedactor !== false) {
          opts.errorRedactor = common_js_1.defaultErrorRedactor;
        }
        if (opts.body && !("duplex" in opts)) {
          opts.duplex = "half";
        }
        this.#appendTimeoutToSignal(opts);
        return Object.assign(opts, {
          headers: preparedHeaders,
          url: opts.url instanceof URL ? opts.url : new URL(opts.url)
        });
      }
      #appendTimeoutToSignal(opts) {
        if (opts.timeout) {
          const timeoutSignal = AbortSignal.timeout(opts.timeout);
          if (opts.signal && !opts.signal.aborted) {
            opts.signal = AbortSignal.any([opts.signal, timeoutSignal]);
          } else {
            opts.signal = timeoutSignal;
          }
        }
      }
      /**
       * By default, throw for any non-2xx status code
       * @param status status code from the HTTP response
       */
      validateStatus(status) {
        return status >= 200 && status < 300;
      }
      /**
       * Attempts to parse a response by looking at the Content-Type header.
       * @param {Response} response the HTTP response.
       * @returns a promise that resolves to the response data.
       */
      async getResponseDataFromContentType(response) {
        let contentType = response.headers.get("Content-Type");
        if (contentType === null) {
          return response.text();
        }
        contentType = contentType.toLowerCase();
        if (contentType.includes("application/json")) {
          let data = await response.text();
          try {
            data = JSON.parse(data);
          } catch {
          }
          return data;
        } else if (contentType.match(/^text\//)) {
          return response.text();
        } else {
          return response.blob();
        }
      }
      /**
       * Creates an async generator that yields the pieces of a multipart/related request body.
       * This implementation follows the spec: https://www.ietf.org/rfc/rfc2387.txt. However, recursive
       * multipart/related requests are not currently supported.
       *
       * @param {GaxiosMultipartOptions[]} multipartOptions the pieces to turn into a multipart/related body.
       * @param {string} boundary the boundary string to be placed between each part.
       */
      async *getMultipartRequest(multipartOptions, boundary) {
        const finale = `--${boundary}--`;
        for (const currentPart of multipartOptions) {
          const partContentType = currentPart.headers.get("Content-Type") || "application/octet-stream";
          const preamble = `--${boundary}\r
Content-Type: ${partContentType}\r
\r
`;
          yield preamble;
          if (typeof currentPart.content === "string") {
            yield currentPart.content;
          } else {
            yield* currentPart.content;
          }
          yield "\r\n";
        }
        yield finale;
      }
      /**
       * A cache for the lazily-loaded proxy agent.
       *
       * Should use {@link Gaxios[#getProxyAgent]} to retrieve.
       */
      // using `import` to dynamically import the types here
      static #proxyAgent;
      /**
       * A cache for the lazily-loaded fetch library.
       *
       * Should use {@link Gaxios[#getFetch]} to retrieve.
       */
      //
      static #fetch;
      /**
       * Imports, caches, and returns a proxy agent - if not already imported
       *
       * @returns A proxy agent
       */
      static async #getProxyAgent() {
        this.#proxyAgent ||= (await import("./https-proxy-agent-QVUKZOYX.mjs")).HttpsProxyAgent;
        return this.#proxyAgent;
      }
      static async #getFetch() {
        const hasWindow = typeof window !== "undefined" && !!window;
        this.#fetch ||= hasWindow ? window.fetch : (await import("./src-VLISA4TI.mjs")).default;
        return this.#fetch;
      }
      /**
       * Merges headers.
       * If the base headers do not exist a new `Headers` object will be returned.
       *
       * @remarks
       *
       * Using this utility can be helpful when the headers are not known to exist:
       * - if they exist as `Headers`, that instance will be used
       *   - it improves performance and allows users to use their existing references to their `Headers`
       * - if they exist in another form (`HeadersInit`), they will be used to create a new `Headers` object
       * - if the base headers do not exist a new `Headers` object will be created
       *
       * @param base headers to append/overwrite to
       * @param append headers to append/overwrite with
       * @returns the base headers instance with merged `Headers`
       */
      static mergeHeaders(base, ...append) {
        base = base instanceof Headers ? base : new Headers(base);
        for (const headers of append) {
          const add = headers instanceof Headers ? headers : new Headers(headers);
          add.forEach((value, key) => {
            key === "set-cookie" ? base.append(key, value) : base.set(key, value);
          });
        }
        return base;
      }
    };
    exports.Gaxios = Gaxios;
    _a = Gaxios;
  }
});

// node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.instance = exports.Gaxios = exports.GaxiosError = void 0;
    exports.request = request;
    var gaxios_js_1 = require_gaxios();
    Object.defineProperty(exports, "Gaxios", { enumerable: true, get: function() {
      return gaxios_js_1.Gaxios;
    } });
    var common_js_1 = require_common();
    Object.defineProperty(exports, "GaxiosError", { enumerable: true, get: function() {
      return common_js_1.GaxiosError;
    } });
    __exportStar(require_interceptor(), exports);
    exports.instance = new gaxios_js_1.Gaxios();
    async function request(opts) {
      return exports.instance.request(opts);
    }
  }
});

// node_modules/.pnpm/gcp-metadata@8.1.2/node_modules/gcp-metadata/build/src/gcp-residency.js
var require_gcp_residency = __commonJS({
  "node_modules/.pnpm/gcp-metadata@8.1.2/node_modules/gcp-metadata/build/src/gcp-residency.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GCE_LINUX_BIOS_PATHS = void 0;
    exports.isGoogleCloudServerless = isGoogleCloudServerless;
    exports.isGoogleComputeEngineLinux = isGoogleComputeEngineLinux;
    exports.isGoogleComputeEngineMACAddress = isGoogleComputeEngineMACAddress;
    exports.isGoogleComputeEngine = isGoogleComputeEngine;
    exports.detectGCPResidency = detectGCPResidency;
    var fs_1 = __require("fs");
    var os_1 = __require("os");
    exports.GCE_LINUX_BIOS_PATHS = {
      BIOS_DATE: "/sys/class/dmi/id/bios_date",
      BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
    };
    var GCE_MAC_ADDRESS_REGEX = /^42:01/;
    function isGoogleCloudServerless() {
      const isGFEnvironment = process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE;
      return !!isGFEnvironment;
    }
    function isGoogleComputeEngineLinux() {
      if ((0, os_1.platform)() !== "linux")
        return false;
      try {
        (0, fs_1.statSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
        const biosVendor = (0, fs_1.readFileSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
        return /Google/.test(biosVendor);
      } catch {
        return false;
      }
    }
    function isGoogleComputeEngineMACAddress() {
      const interfaces = (0, os_1.networkInterfaces)();
      for (const item of Object.values(interfaces)) {
        if (!item)
          continue;
        for (const { mac } of item) {
          if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
            return true;
          }
        }
      }
      return false;
    }
    function isGoogleComputeEngine() {
      return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
    }
    function detectGCPResidency() {
      return isGoogleCloudServerless() || isGoogleComputeEngine();
    }
  }
});

// node_modules/.pnpm/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/colours.js
var require_colours = __commonJS({
  "node_modules/.pnpm/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/colours.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Colours = void 0;
    var Colours = class _Colours {
      /**
       * @param stream The stream (e.g. process.stderr)
       * @returns true if the stream should have colourization enabled
       */
      static isEnabled(stream) {
        return stream && // May happen in browsers.
        stream.isTTY && (typeof stream.getColorDepth === "function" ? stream.getColorDepth() > 2 : true);
      }
      static refresh() {
        _Colours.enabled = _Colours.isEnabled(process === null || process === void 0 ? void 0 : process.stderr);
        if (!this.enabled) {
          _Colours.reset = "";
          _Colours.bright = "";
          _Colours.dim = "";
          _Colours.red = "";
          _Colours.green = "";
          _Colours.yellow = "";
          _Colours.blue = "";
          _Colours.magenta = "";
          _Colours.cyan = "";
          _Colours.white = "";
          _Colours.grey = "";
        } else {
          _Colours.reset = "\x1B[0m";
          _Colours.bright = "\x1B[1m";
          _Colours.dim = "\x1B[2m";
          _Colours.red = "\x1B[31m";
          _Colours.green = "\x1B[32m";
          _Colours.yellow = "\x1B[33m";
          _Colours.blue = "\x1B[34m";
          _Colours.magenta = "\x1B[35m";
          _Colours.cyan = "\x1B[36m";
          _Colours.white = "\x1B[37m";
          _Colours.grey = "\x1B[90m";
        }
      }
    };
    exports.Colours = Colours;
    Colours.enabled = false;
    Colours.reset = "";
    Colours.bright = "";
    Colours.dim = "";
    Colours.red = "";
    Colours.green = "";
    Colours.yellow = "";
    Colours.blue = "";
    Colours.magenta = "";
    Colours.cyan = "";
    Colours.white = "";
    Colours.grey = "";
    Colours.refresh();
  }
});

// node_modules/.pnpm/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/logging-utils.js
var require_logging_utils = __commonJS({
  "node_modules/.pnpm/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/logging-utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = exports.DebugLogBackendBase = exports.placeholder = exports.AdhocDebugLogger = exports.LogSeverity = void 0;
    exports.getNodeBackend = getNodeBackend;
    exports.getDebugBackend = getDebugBackend;
    exports.getStructuredBackend = getStructuredBackend;
    exports.setBackend = setBackend;
    exports.log = log;
    var events_1 = __require("events");
    var process2 = __importStar(__require("process"));
    var util = __importStar(__require("util"));
    var colours_1 = require_colours();
    var LogSeverity;
    (function(LogSeverity2) {
      LogSeverity2["DEFAULT"] = "DEFAULT";
      LogSeverity2["DEBUG"] = "DEBUG";
      LogSeverity2["INFO"] = "INFO";
      LogSeverity2["WARNING"] = "WARNING";
      LogSeverity2["ERROR"] = "ERROR";
    })(LogSeverity || (exports.LogSeverity = LogSeverity = {}));
    var AdhocDebugLogger = class extends events_1.EventEmitter {
      /**
       * @param upstream The backend will pass a function that will be
       *   called whenever our logger function is invoked.
       */
      constructor(namespace, upstream) {
        super();
        this.namespace = namespace;
        this.upstream = upstream;
        this.func = Object.assign(this.invoke.bind(this), {
          // Also add an instance pointer back to us.
          instance: this,
          // And pull over the EventEmitter functionality.
          on: (event, listener) => this.on(event, listener)
        });
        this.func.debug = (...args) => this.invokeSeverity(LogSeverity.DEBUG, ...args);
        this.func.info = (...args) => this.invokeSeverity(LogSeverity.INFO, ...args);
        this.func.warn = (...args) => this.invokeSeverity(LogSeverity.WARNING, ...args);
        this.func.error = (...args) => this.invokeSeverity(LogSeverity.ERROR, ...args);
        this.func.sublog = (namespace2) => log(namespace2, this.func);
      }
      invoke(fields, ...args) {
        if (this.upstream) {
          try {
            this.upstream(fields, ...args);
          } catch (e) {
          }
        }
        try {
          this.emit("log", fields, args);
        } catch (e) {
        }
      }
      invokeSeverity(severity, ...args) {
        this.invoke({ severity }, ...args);
      }
    };
    exports.AdhocDebugLogger = AdhocDebugLogger;
    exports.placeholder = new AdhocDebugLogger("", () => {
    }).func;
    var DebugLogBackendBase = class {
      constructor() {
        var _a;
        this.cached = /* @__PURE__ */ new Map();
        this.filters = [];
        this.filtersSet = false;
        let nodeFlag = (_a = process2.env[exports.env.nodeEnables]) !== null && _a !== void 0 ? _a : "*";
        if (nodeFlag === "all") {
          nodeFlag = "*";
        }
        this.filters = nodeFlag.split(",");
      }
      log(namespace, fields, ...args) {
        try {
          if (!this.filtersSet) {
            this.setFilters();
            this.filtersSet = true;
          }
          let logger = this.cached.get(namespace);
          if (!logger) {
            logger = this.makeLogger(namespace);
            this.cached.set(namespace, logger);
          }
          logger(fields, ...args);
        } catch (e) {
          console.error(e);
        }
      }
    };
    exports.DebugLogBackendBase = DebugLogBackendBase;
    var NodeBackend = class extends DebugLogBackendBase {
      constructor() {
        super(...arguments);
        this.enabledRegexp = /.*/g;
      }
      isEnabled(namespace) {
        return this.enabledRegexp.test(namespace);
      }
      makeLogger(namespace) {
        if (!this.enabledRegexp.test(namespace)) {
          return () => {
          };
        }
        return (fields, ...args) => {
          var _a;
          const nscolour = `${colours_1.Colours.green}${namespace}${colours_1.Colours.reset}`;
          const pid = `${colours_1.Colours.yellow}${process2.pid}${colours_1.Colours.reset}`;
          let level;
          switch (fields.severity) {
            case LogSeverity.ERROR:
              level = `${colours_1.Colours.red}${fields.severity}${colours_1.Colours.reset}`;
              break;
            case LogSeverity.INFO:
              level = `${colours_1.Colours.magenta}${fields.severity}${colours_1.Colours.reset}`;
              break;
            case LogSeverity.WARNING:
              level = `${colours_1.Colours.yellow}${fields.severity}${colours_1.Colours.reset}`;
              break;
            default:
              level = (_a = fields.severity) !== null && _a !== void 0 ? _a : LogSeverity.DEFAULT;
              break;
          }
          const msg = util.formatWithOptions({ colors: colours_1.Colours.enabled }, ...args);
          const filteredFields = Object.assign({}, fields);
          delete filteredFields.severity;
          const fieldsJson = Object.getOwnPropertyNames(filteredFields).length ? JSON.stringify(filteredFields) : "";
          const fieldsColour = fieldsJson ? `${colours_1.Colours.grey}${fieldsJson}${colours_1.Colours.reset}` : "";
          console.error("%s [%s|%s] %s%s", pid, nscolour, level, msg, fieldsJson ? ` ${fieldsColour}` : "");
        };
      }
      // Regexp patterns below are from here:
      // https://github.com/nodejs/node/blob/c0aebed4b3395bd65d54b18d1fd00f071002ac20/lib/internal/util/debuglog.js#L36
      setFilters() {
        const totalFilters = this.filters.join(",");
        const regexp = totalFilters.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
        this.enabledRegexp = new RegExp(`^${regexp}$`, "i");
      }
    };
    function getNodeBackend() {
      return new NodeBackend();
    }
    var DebugBackend = class extends DebugLogBackendBase {
      constructor(pkg) {
        super();
        this.debugPkg = pkg;
      }
      makeLogger(namespace) {
        const debugLogger = this.debugPkg(namespace);
        return (fields, ...args) => {
          debugLogger(args[0], ...args.slice(1));
        };
      }
      setFilters() {
        var _a;
        const existingFilters = (_a = process2.env["NODE_DEBUG"]) !== null && _a !== void 0 ? _a : "";
        process2.env["NODE_DEBUG"] = `${existingFilters}${existingFilters ? "," : ""}${this.filters.join(",")}`;
      }
    };
    function getDebugBackend(debugPkg) {
      return new DebugBackend(debugPkg);
    }
    var StructuredBackend = class extends DebugLogBackendBase {
      constructor(upstream) {
        var _a;
        super();
        this.upstream = (_a = upstream) !== null && _a !== void 0 ? _a : void 0;
      }
      makeLogger(namespace) {
        var _a;
        const debugLogger = (_a = this.upstream) === null || _a === void 0 ? void 0 : _a.makeLogger(namespace);
        return (fields, ...args) => {
          var _a2;
          const severity = (_a2 = fields.severity) !== null && _a2 !== void 0 ? _a2 : LogSeverity.INFO;
          const json = Object.assign({
            severity,
            message: util.format(...args)
          }, fields);
          const jsonString = JSON.stringify(json);
          if (debugLogger) {
            debugLogger(fields, jsonString);
          } else {
            console.log("%s", jsonString);
          }
        };
      }
      setFilters() {
        var _a;
        (_a = this.upstream) === null || _a === void 0 ? void 0 : _a.setFilters();
      }
    };
    function getStructuredBackend(upstream) {
      return new StructuredBackend(upstream);
    }
    exports.env = {
      /**
       * Filter wildcards specific to the Node syntax, and similar to the built-in
       * utils.debuglog() environment variable. If missing, disables logging.
       */
      nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
    };
    var loggerCache = /* @__PURE__ */ new Map();
    var cachedBackend = void 0;
    function setBackend(backend) {
      cachedBackend = backend;
      loggerCache.clear();
    }
    function log(namespace, parent) {
      if (!cachedBackend) {
        const enablesFlag = process2.env[exports.env.nodeEnables];
        if (!enablesFlag) {
          return exports.placeholder;
        }
      }
      if (!namespace) {
        return exports.placeholder;
      }
      if (parent) {
        namespace = `${parent.instance.namespace}:${namespace}`;
      }
      const existing = loggerCache.get(namespace);
      if (existing) {
        return existing.func;
      }
      if (cachedBackend === null) {
        return exports.placeholder;
      } else if (cachedBackend === void 0) {
        cachedBackend = getNodeBackend();
      }
      const logger = (() => {
        let previousBackend = void 0;
        const newLogger = new AdhocDebugLogger(namespace, (fields, ...args) => {
          if (previousBackend !== cachedBackend) {
            if (cachedBackend === null) {
              return;
            } else if (cachedBackend === void 0) {
              cachedBackend = getNodeBackend();
            }
            previousBackend = cachedBackend;
          }
          cachedBackend === null || cachedBackend === void 0 ? void 0 : cachedBackend.log(namespace, fields, ...args);
        });
        return newLogger;
      })();
      loggerCache.set(namespace, logger);
      return logger.func;
    }
  }
});

// node_modules/.pnpm/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_logging_utils(), exports);
  }
});

// node_modules/.pnpm/gcp-metadata@8.1.2/node_modules/gcp-metadata/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/.pnpm/gcp-metadata@8.1.2/node_modules/gcp-metadata/build/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gcpResidencyCache = exports.METADATA_SERVER_DETECTION = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = void 0;
    exports.instance = instance;
    exports.project = project;
    exports.universe = universe;
    exports.bulk = bulk;
    exports.isAvailable = isAvailable;
    exports.resetIsAvailableCache = resetIsAvailableCache;
    exports.getGCPResidency = getGCPResidency;
    exports.setGCPResidency = setGCPResidency;
    exports.requestTimeout = requestTimeout;
    var gaxios_1 = require_src();
    var jsonBigint = require_json_bigint();
    var gcp_residency_1 = require_gcp_residency();
    var logger = __importStar(require_src2());
    exports.BASE_PATH = "/computeMetadata/v1";
    exports.HOST_ADDRESS = "http://169.254.169.254";
    exports.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
    exports.HEADER_NAME = "Metadata-Flavor";
    exports.HEADER_VALUE = "Google";
    exports.HEADERS = Object.freeze({ [exports.HEADER_NAME]: exports.HEADER_VALUE });
    var log = logger.log("gcp-metadata");
    exports.METADATA_SERVER_DETECTION = Object.freeze({
      "assume-present": "don't try to ping the metadata server, but assume it's present",
      none: "don't try to ping the metadata server, but don't try to use it either",
      "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
      "ping-only": "skip the BIOS probe, and go straight to pinging"
    });
    function getBaseUrl(baseUrl) {
      if (!baseUrl) {
        baseUrl = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || exports.HOST_ADDRESS;
      }
      if (!/^https?:\/\//.test(baseUrl)) {
        baseUrl = `http://${baseUrl}`;
      }
      return new URL(exports.BASE_PATH, baseUrl).href;
    }
    function validate(options) {
      Object.keys(options).forEach((key) => {
        switch (key) {
          case "params":
          case "property":
          case "headers":
            break;
          case "qs":
            throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
          default:
            throw new Error(`'${key}' is not a valid configuration option.`);
        }
      });
    }
    async function metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
      const headers = new Headers(exports.HEADERS);
      let metadataKey = "";
      let params = {};
      if (typeof type === "object") {
        const metadataAccessor2 = type;
        new Headers(metadataAccessor2.headers).forEach((value, key) => headers.set(key, value));
        metadataKey = metadataAccessor2.metadataKey;
        params = metadataAccessor2.params || params;
        noResponseRetries = metadataAccessor2.noResponseRetries || noResponseRetries;
        fastFail = metadataAccessor2.fastFail || fastFail;
      } else {
        metadataKey = type;
      }
      if (typeof options === "string") {
        metadataKey += `/${options}`;
      } else {
        validate(options);
        if (options.property) {
          metadataKey += `/${options.property}`;
        }
        new Headers(options.headers).forEach((value, key) => headers.set(key, value));
        params = options.params || params;
      }
      const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
      const req = {
        url: `${getBaseUrl()}/${metadataKey}`,
        headers,
        retryConfig: { noResponseRetries },
        params,
        responseType: "text",
        timeout: requestTimeout()
      };
      log.info("instance request %j", req);
      const res = await requestMethod(req);
      log.info("instance metadata is %s", res.data);
      const metadataFlavor = res.headers.get(exports.HEADER_NAME);
      if (metadataFlavor !== exports.HEADER_VALUE) {
        throw new RangeError(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header. Expected '${exports.HEADER_VALUE}', got ${metadataFlavor ? `'${metadataFlavor}'` : "no header"}`);
      }
      if (typeof res.data === "string") {
        try {
          return jsonBigint.parse(res.data);
        } catch {
        }
      }
      return res.data;
    }
    async function fastFailMetadataRequest(options) {
      const secondaryOptions = {
        ...options,
        url: options.url?.toString().replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS))
      };
      const r1 = (0, gaxios_1.request)(options);
      const r2 = (0, gaxios_1.request)(secondaryOptions);
      return Promise.any([r1, r2]);
    }
    function instance(options) {
      return metadataAccessor("instance", options);
    }
    function project(options) {
      return metadataAccessor("project", options);
    }
    function universe(options) {
      return metadataAccessor("universe", options);
    }
    async function bulk(properties) {
      const r = {};
      await Promise.all(properties.map((item) => {
        return (async () => {
          const res = await metadataAccessor(item);
          const key = item.metadataKey;
          r[key] = res;
        })();
      }));
      return r;
    }
    function detectGCPAvailableRetries() {
      return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
    }
    var cachedIsAvailableResponse;
    async function isAvailable() {
      if (process.env.METADATA_SERVER_DETECTION) {
        const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
        if (!(value in exports.METADATA_SERVER_DETECTION)) {
          throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(exports.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
        }
        switch (value) {
          case "assume-present":
            return true;
          case "none":
            return false;
          case "bios-only":
            return getGCPResidency();
          case "ping-only":
        }
      }
      try {
        if (cachedIsAvailableResponse === void 0) {
          cachedIsAvailableResponse = metadataAccessor(
            "instance",
            void 0,
            detectGCPAvailableRetries(),
            // If the default HOST_ADDRESS has been overridden, we should not
            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
            // a non-GCP environment):
            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST)
          );
        }
        await cachedIsAvailableResponse;
        return true;
      } catch (e) {
        const err = e;
        if (process.env.DEBUG_AUTH) {
          console.info(err);
        }
        if (err.type === "request-timeout") {
          return false;
        }
        if (err.response && err.response.status === 404) {
          return false;
        } else {
          if (!(err.response && err.response.status === 404) && // A warning is emitted if we see an unexpected err.code, or err.code
          // is not populated:
          (!err.code || ![
            "EHOSTDOWN",
            "EHOSTUNREACH",
            "ENETUNREACH",
            "ENOENT",
            "ENOTFOUND",
            "ECONNREFUSED"
          ].includes(err.code.toString()))) {
            let code = "UNKNOWN";
            if (err.code)
              code = err.code.toString();
            process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, "MetadataLookupWarning");
          }
          return false;
        }
      }
    }
    function resetIsAvailableCache() {
      cachedIsAvailableResponse = void 0;
    }
    exports.gcpResidencyCache = null;
    function getGCPResidency() {
      if (exports.gcpResidencyCache === null) {
        setGCPResidency();
      }
      return exports.gcpResidencyCache;
    }
    function setGCPResidency(value = null) {
      exports.gcpResidencyCache = value !== null ? value : (0, gcp_residency_1.detectGCPResidency)();
    }
    function requestTimeout() {
      return getGCPResidency() ? 0 : 3e3;
    }
    __exportStar(require_gcp_residency(), exports);
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromArrayBufferToHex = fromArrayBufferToHex;
    function fromArrayBufferToHex(arrayBuffer) {
      const byteArray = Array.from(new Uint8Array(arrayBuffer));
      return byteArray.map((byte) => {
        return byte.toString(16).padStart(2, "0");
      }).join("");
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/browser/crypto.js
var require_crypto = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/browser/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserCrypto = void 0;
    var base64js = require_base64_js();
    var shared_1 = require_shared();
    var BrowserCrypto = class _BrowserCrypto {
      constructor() {
        if (typeof window === "undefined" || window.crypto === void 0 || window.crypto.subtle === void 0) {
          throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
        }
      }
      async sha256DigestBase64(str) {
        const inputBuffer = new TextEncoder().encode(str);
        const outputBuffer = await window.crypto.subtle.digest("SHA-256", inputBuffer);
        return base64js.fromByteArray(new Uint8Array(outputBuffer));
      }
      randomBytesBase64(count) {
        const array = new Uint8Array(count);
        window.crypto.getRandomValues(array);
        return base64js.fromByteArray(array);
      }
      static padBase64(base64) {
        while (base64.length % 4 !== 0) {
          base64 += "=";
        }
        return base64;
      }
      async verify(pubkey, data, signature) {
        const algo = {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
        const dataArray = new TextEncoder().encode(data);
        const signatureArray = base64js.toByteArray(_BrowserCrypto.padBase64(signature));
        const cryptoKey = await window.crypto.subtle.importKey("jwk", pubkey, algo, true, ["verify"]);
        const result = await window.crypto.subtle.verify(algo, cryptoKey, Buffer.from(signatureArray), dataArray);
        return result;
      }
      async sign(privateKey, data) {
        const algo = {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
        const dataArray = new TextEncoder().encode(data);
        const cryptoKey = await window.crypto.subtle.importKey("jwk", privateKey, algo, true, ["sign"]);
        const result = await window.crypto.subtle.sign(algo, cryptoKey, dataArray);
        return base64js.fromByteArray(new Uint8Array(result));
      }
      decodeBase64StringUtf8(base64) {
        const uint8array = base64js.toByteArray(_BrowserCrypto.padBase64(base64));
        const result = new TextDecoder().decode(uint8array);
        return result;
      }
      encodeBase64StringUtf8(text) {
        const uint8array = new TextEncoder().encode(text);
        const result = base64js.fromByteArray(uint8array);
        return result;
      }
      /**
       * Computes the SHA-256 hash of the provided string.
       * @param str The plain text string to hash.
       * @return A promise that resolves with the SHA-256 hash of the provided
       *   string in hexadecimal encoding.
       */
      async sha256DigestHex(str) {
        const inputBuffer = new TextEncoder().encode(str);
        const outputBuffer = await window.crypto.subtle.digest("SHA-256", inputBuffer);
        return (0, shared_1.fromArrayBufferToHex)(outputBuffer);
      }
      /**
       * Computes the HMAC hash of a message using the provided crypto key and the
       * SHA-256 algorithm.
       * @param key The secret crypto key in utf-8 or ArrayBuffer format.
       * @param msg The plain text message.
       * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
       *   format.
       */
      async signWithHmacSha256(key, msg) {
        const rawKey = typeof key === "string" ? key : String.fromCharCode(...new Uint16Array(key));
        const enc = new TextEncoder();
        const cryptoKey = await window.crypto.subtle.importKey("raw", enc.encode(rawKey), {
          name: "HMAC",
          hash: {
            name: "SHA-256"
          }
        }, false, ["sign"]);
        return window.crypto.subtle.sign("HMAC", cryptoKey, enc.encode(msg));
      }
    };
    exports.BrowserCrypto = BrowserCrypto;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/node/crypto.js
var require_crypto2 = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/node/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeCrypto = void 0;
    var crypto = __require("crypto");
    var NodeCrypto = class {
      async sha256DigestBase64(str) {
        return crypto.createHash("sha256").update(str).digest("base64");
      }
      randomBytesBase64(count) {
        return crypto.randomBytes(count).toString("base64");
      }
      async verify(pubkey, data, signature) {
        const verifier = crypto.createVerify("RSA-SHA256");
        verifier.update(data);
        verifier.end();
        return verifier.verify(pubkey, signature, "base64");
      }
      async sign(privateKey, data) {
        const signer = crypto.createSign("RSA-SHA256");
        signer.update(data);
        signer.end();
        return signer.sign(privateKey, "base64");
      }
      decodeBase64StringUtf8(base64) {
        return Buffer.from(base64, "base64").toString("utf-8");
      }
      encodeBase64StringUtf8(text) {
        return Buffer.from(text, "utf-8").toString("base64");
      }
      /**
       * Computes the SHA-256 hash of the provided string.
       * @param str The plain text string to hash.
       * @return A promise that resolves with the SHA-256 hash of the provided
       *   string in hexadecimal encoding.
       */
      async sha256DigestHex(str) {
        return crypto.createHash("sha256").update(str).digest("hex");
      }
      /**
       * Computes the HMAC hash of a message using the provided crypto key and the
       * SHA-256 algorithm.
       * @param key The secret crypto key in utf-8 or ArrayBuffer format.
       * @param msg The plain text message.
       * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
       *   format.
       */
      async signWithHmacSha256(key, msg) {
        const cryptoKey = typeof key === "string" ? key : toBuffer(key);
        return toArrayBuffer(crypto.createHmac("sha256", cryptoKey).update(msg).digest());
      }
    };
    exports.NodeCrypto = NodeCrypto;
    function toArrayBuffer(buffer) {
      const ab = new ArrayBuffer(buffer.length);
      const view = new Uint8Array(ab);
      for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
      }
      return ab;
    }
    function toBuffer(arrayBuffer) {
      return Buffer.from(arrayBuffer);
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/crypto.js
var require_crypto3 = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/crypto.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCrypto = createCrypto;
    exports.hasBrowserCrypto = hasBrowserCrypto;
    var crypto_1 = require_crypto();
    var crypto_2 = require_crypto2();
    __exportStar(require_shared(), exports);
    function createCrypto() {
      if (hasBrowserCrypto()) {
        return new crypto_1.BrowserCrypto();
      }
      return new crypto_2.NodeCrypto();
    }
    function hasBrowserCrypto() {
      return typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefined";
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/util.js
var require_util2 = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = void 0;
    exports.snakeToCamel = snakeToCamel;
    exports.originalOrCamelOptions = originalOrCamelOptions;
    exports.removeUndefinedValuesInObject = removeUndefinedValuesInObject;
    exports.isValidFile = isValidFile;
    exports.getWellKnownCertificateConfigFileLocation = getWellKnownCertificateConfigFileLocation;
    var fs = __require("fs");
    var os = __require("os");
    var path = __require("path");
    var WELL_KNOWN_CERTIFICATE_CONFIG_FILE = "certificate_config.json";
    var CLOUDSDK_CONFIG_DIRECTORY = "gcloud";
    function snakeToCamel(str) {
      return str.replace(/([_][^_])/g, (match) => match.slice(1).toUpperCase());
    }
    function originalOrCamelOptions(obj) {
      function get(key) {
        const o = obj || {};
        return o[key] ?? o[snakeToCamel(key)];
      }
      return { get };
    }
    var LRUCache = class {
      capacity;
      /**
       * Maps are in order. Thus, the older item is the first item.
       *
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
       */
      #cache = /* @__PURE__ */ new Map();
      maxAge;
      constructor(options) {
        this.capacity = options.capacity;
        this.maxAge = options.maxAge;
      }
      /**
       * Moves the key to the end of the cache.
       *
       * @param key the key to move
       * @param value the value of the key
       */
      #moveToEnd(key, value) {
        this.#cache.delete(key);
        this.#cache.set(key, {
          value,
          lastAccessed: Date.now()
        });
      }
      /**
       * Add an item to the cache.
       *
       * @param key the key to upsert
       * @param value the value of the key
       */
      set(key, value) {
        this.#moveToEnd(key, value);
        this.#evict();
      }
      /**
       * Get an item from the cache.
       *
       * @param key the key to retrieve
       */
      get(key) {
        const item = this.#cache.get(key);
        if (!item)
          return;
        this.#moveToEnd(key, item.value);
        this.#evict();
        return item.value;
      }
      /**
       * Maintain the cache based on capacity and TTL.
       */
      #evict() {
        const cutoffDate = this.maxAge ? Date.now() - this.maxAge : 0;
        let oldestItem = this.#cache.entries().next();
        while (!oldestItem.done && (this.#cache.size > this.capacity || // too many
        oldestItem.value[1].lastAccessed < cutoffDate)) {
          this.#cache.delete(oldestItem.value[0]);
          oldestItem = this.#cache.entries().next();
        }
      }
    };
    exports.LRUCache = LRUCache;
    function removeUndefinedValuesInObject(object) {
      Object.entries(object).forEach(([key, value]) => {
        if (value === void 0 || value === "undefined") {
          delete object[key];
        }
      });
      return object;
    }
    async function isValidFile(filePath) {
      try {
        const stats = await fs.promises.lstat(filePath);
        return stats.isFile();
      } catch (e) {
        return false;
      }
    }
    function getWellKnownCertificateConfigFileLocation() {
      const configDir = process.env.CLOUDSDK_CONFIG || (_isWindows() ? path.join(process.env.APPDATA || "", CLOUDSDK_CONFIG_DIRECTORY) : path.join(process.env.HOME || "", ".config", CLOUDSDK_CONFIG_DIRECTORY));
      return path.join(configDir, WELL_KNOWN_CERTIFICATE_CONFIG_FILE);
    }
    function _isWindows() {
      return os.platform().startsWith("win");
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/package.json
var require_package2 = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/package.json"(exports, module) {
    module.exports = {
      name: "google-auth-library",
      version: "10.6.2",
      author: "Google Inc.",
      description: "Google APIs Authentication Client Library for Node.js",
      engines: {
        node: ">=18"
      },
      main: "./build/src/index.js",
      types: "./build/src/index.d.ts",
      repository: {
        type: "git",
        directory: "packages/google-auth-library-nodejs",
        url: "https://github.com/googleapis/google-cloud-node-core.git"
      },
      keywords: [
        "google",
        "api",
        "google apis",
        "client",
        "client library"
      ],
      dependencies: {
        "base64-js": "^1.3.0",
        "ecdsa-sig-formatter": "^1.0.11",
        gaxios: "^7.1.4",
        "gcp-metadata": "8.1.2",
        "google-logging-utils": "1.1.3",
        jws: "^4.0.0"
      },
      devDependencies: {
        "@types/base64-js": "^1.2.5",
        "@types/jws": "^3.1.0",
        "@types/mocha": "^10.0.10",
        "@types/mv": "^2.1.0",
        "@types/ncp": "^2.0.8",
        "@types/node": "^24.0.0",
        "@types/sinon": "^21.0.0",
        "assert-rejects": "^1.0.0",
        c8: "^10.1.3",
        codecov: "^3.8.3",
        gts: "^6.0.2",
        "is-docker": "^3.0.0",
        jsdoc: "^4.0.4",
        "jsdoc-fresh": "^5.0.0",
        "jsdoc-region-tag": "^4.0.0",
        karma: "^6.0.0",
        "karma-chrome-launcher": "^3.0.0",
        "karma-coverage": "^2.0.0",
        "karma-firefox-launcher": "^2.0.0",
        "karma-mocha": "^2.0.0",
        "karma-sourcemap-loader": "^0.4.0",
        "karma-webpack": "^5.0.1",
        keypair: "^1.0.4",
        mocha: "^11.1.0",
        mv: "^2.1.1",
        ncp: "^2.0.0",
        nock: "^14.0.5",
        "null-loader": "^4.0.1",
        puppeteer: "^24.0.0",
        sinon: "^21.0.0",
        "ts-loader": "^9.5.2",
        typescript: "5.8.3",
        webpack: "^5.97.1",
        "webpack-cli": "^6.0.1"
      },
      files: [
        "build/src",
        "!build/src/**/*.map"
      ],
      scripts: {
        test: "c8 mocha build/test",
        clean: "gts clean",
        prepare: "npm run compile",
        lint: "gts check --no-inline-config",
        compile: "tsc -p .",
        fix: "gts fix",
        pretest: "npm run compile -- --sourceMap",
        docs: "jsdoc -c .jsdoc.js",
        "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
        "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
        "system-test": "mocha build/system-test --timeout 60000",
        "presystem-test": "npm run compile -- --sourceMap",
        webpack: "webpack",
        "browser-test": "karma start",
        "docs-test": "echo 'disabled until linkinator is fixed'",
        "predocs-test": "npm run docs",
        prelint: "cd samples; npm link ../; npm install"
      },
      license: "Apache-2.0",
      homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/google-auth-library-nodejs"
    };
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/shared.cjs
var require_shared2 = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/shared.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.USER_AGENT = exports.PRODUCT_NAME = exports.pkg = void 0;
    var pkg = require_package2();
    exports.pkg = pkg;
    var PRODUCT_NAME = "google-api-nodejs-client";
    exports.PRODUCT_NAME = PRODUCT_NAME;
    var USER_AGENT = `${PRODUCT_NAME}/${pkg.version}`;
    exports.USER_AGENT = USER_AGENT;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/authclient.js
var require_authclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/authclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthClient = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = exports.DEFAULT_UNIVERSE = void 0;
    var events_1 = __require("events");
    var gaxios_1 = require_src();
    var util_1 = require_util2();
    var google_logging_utils_1 = require_src2();
    var shared_cjs_1 = require_shared2();
    exports.DEFAULT_UNIVERSE = "googleapis.com";
    exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 5 * 60 * 1e3;
    var AuthClient = class _AuthClient extends events_1.EventEmitter {
      apiKey;
      projectId;
      /**
       * The quota project ID. The quota project can be used by client libraries for the billing purpose.
       * See {@link https://cloud.google.com/docs/quota Working with quotas}
       */
      quotaProjectId;
      /**
       * The {@link Gaxios `Gaxios`} instance used for making requests.
       */
      transporter;
      credentials = {};
      eagerRefreshThresholdMillis = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
      forceRefreshOnFailure = false;
      universeDomain = exports.DEFAULT_UNIVERSE;
      /**
       * Symbols that can be added to GaxiosOptions to specify the method name that is
       * making an RPC call, for logging purposes, as well as a string ID that can be
       * used to correlate calls and responses.
       */
      static RequestMethodNameSymbol = /* @__PURE__ */ Symbol("request method name");
      static RequestLogIdSymbol = /* @__PURE__ */ Symbol("request log id");
      constructor(opts = {}) {
        super();
        const options = (0, util_1.originalOrCamelOptions)(opts);
        this.apiKey = opts.apiKey;
        this.projectId = options.get("project_id") ?? null;
        this.quotaProjectId = options.get("quota_project_id");
        this.credentials = options.get("credentials") ?? {};
        this.universeDomain = options.get("universe_domain") ?? exports.DEFAULT_UNIVERSE;
        this.transporter = opts.transporter ?? new gaxios_1.Gaxios(opts.transporterOptions);
        if (options.get("useAuthRequestParameters") !== false) {
          this.transporter.interceptors.request.add(_AuthClient.DEFAULT_REQUEST_INTERCEPTOR);
          this.transporter.interceptors.response.add(_AuthClient.DEFAULT_RESPONSE_INTERCEPTOR);
        }
        if (opts.eagerRefreshThresholdMillis) {
          this.eagerRefreshThresholdMillis = opts.eagerRefreshThresholdMillis;
        }
        this.forceRefreshOnFailure = opts.forceRefreshOnFailure ?? false;
      }
      /**
       * A {@link fetch `fetch`} compliant API for {@link AuthClient}.
       *
       * @see {@link AuthClient.request} for the classic method.
       *
       * @remarks
       *
       * This is useful as a drop-in replacement for `fetch` API usage.
       *
       * @example
       *
       * ```ts
       * const authClient = new AuthClient();
       * const fetchWithAuthClient: typeof fetch = (...args) => authClient.fetch(...args);
       * await fetchWithAuthClient('https://example.com');
       * ```
       *
       * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
       * @returns the {@link GaxiosResponse} with Gaxios-added properties
       */
      fetch(...args) {
        const input = args[0];
        const init = args[1];
        let url = void 0;
        const headers = new Headers();
        if (typeof input === "string") {
          url = new URL(input);
        } else if (input instanceof URL) {
          url = input;
        } else if (input && input.url) {
          url = new URL(input.url);
        }
        if (input && typeof input === "object" && "headers" in input) {
          gaxios_1.Gaxios.mergeHeaders(headers, input.headers);
        }
        if (init) {
          gaxios_1.Gaxios.mergeHeaders(headers, new Headers(init.headers));
        }
        if (typeof input === "object" && !(input instanceof URL)) {
          return this.request({ ...init, ...input, headers, url });
        } else {
          return this.request({ ...init, headers, url });
        }
      }
      /**
       * Sets the auth credentials.
       */
      setCredentials(credentials) {
        this.credentials = credentials;
      }
      /**
       * Append additional headers, e.g., x-goog-user-project, shared across the
       * classes inheriting AuthClient. This method should be used by any method
       * that overrides getRequestMetadataAsync(), which is a shared helper for
       * setting request information in both gRPC and HTTP API calls.
       *
       * @param headers object to append additional headers to.
       */
      addSharedMetadataHeaders(headers) {
        if (!headers.has("x-goog-user-project") && // don't override a value the user sets.
        this.quotaProjectId) {
          headers.set("x-goog-user-project", this.quotaProjectId);
        }
        return headers;
      }
      /**
       * Adds the `x-goog-user-project` and `authorization` headers to the target Headers
       * object, if they exist on the source.
       *
       * @param target the headers to target
       * @param source the headers to source from
       * @returns the target headers
       */
      addUserProjectAndAuthHeaders(target, source) {
        const xGoogUserProject = source.get("x-goog-user-project");
        const authorizationHeader = source.get("authorization");
        if (xGoogUserProject) {
          target.set("x-goog-user-project", xGoogUserProject);
        }
        if (authorizationHeader) {
          target.set("authorization", authorizationHeader);
        }
        return target;
      }
      static log = (0, google_logging_utils_1.log)("auth");
      static DEFAULT_REQUEST_INTERCEPTOR = {
        resolved: async (config) => {
          if (!config.headers.has("x-goog-api-client")) {
            const nodeVersion = process.version.replace(/^v/, "");
            config.headers.set("x-goog-api-client", `gl-node/${nodeVersion}`);
          }
          const userAgent = config.headers.get("User-Agent");
          if (!userAgent) {
            config.headers.set("User-Agent", shared_cjs_1.USER_AGENT);
          } else if (!userAgent.includes(`${shared_cjs_1.PRODUCT_NAME}/`)) {
            config.headers.set("User-Agent", `${userAgent} ${shared_cjs_1.USER_AGENT}`);
          }
          try {
            const symbols = config;
            const methodName = symbols[_AuthClient.RequestMethodNameSymbol];
            const logId = `${Math.floor(Math.random() * 1e3)}`;
            symbols[_AuthClient.RequestLogIdSymbol] = logId;
            const logObject = {
              url: config.url,
              headers: config.headers
            };
            if (methodName) {
              _AuthClient.log.info("%s [%s] request %j", methodName, logId, logObject);
            } else {
              _AuthClient.log.info("[%s] request %j", logId, logObject);
            }
          } catch (e) {
          }
          return config;
        }
      };
      static DEFAULT_RESPONSE_INTERCEPTOR = {
        resolved: async (response) => {
          try {
            const symbols = response.config;
            const methodName = symbols[_AuthClient.RequestMethodNameSymbol];
            const logId = symbols[_AuthClient.RequestLogIdSymbol];
            if (methodName) {
              _AuthClient.log.info("%s [%s] response %j", methodName, logId, response.data);
            } else {
              _AuthClient.log.info("[%s] response %j", logId, response.data);
            }
          } catch (e) {
          }
          return response;
        },
        rejected: async (error) => {
          try {
            const symbols = error.config;
            const methodName = symbols[_AuthClient.RequestMethodNameSymbol];
            const logId = symbols[_AuthClient.RequestLogIdSymbol];
            if (methodName) {
              _AuthClient.log.info("%s [%s] error %j", methodName, logId, error.response?.data);
            } else {
              _AuthClient.log.error("[%s] error %j", logId, error.response?.data);
            }
          } catch (e) {
          }
          throw error;
        }
      };
      /**
       * Sets the method name that is making a Gaxios request, so that logging may tag
       * log lines with the operation.
       * @param config A Gaxios request config
       * @param methodName The method name making the call
       */
      static setMethodName(config, methodName) {
        try {
          const symbols = config;
          symbols[_AuthClient.RequestMethodNameSymbol] = methodName;
        } catch (e) {
        }
      }
      /**
       * Retry config for Auth-related requests.
       *
       * @remarks
       *
       * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
       * config as some downstream APIs would prefer if customers explicitly enable retries,
       * such as GCS.
       */
      static get RETRY_CONFIG() {
        return {
          retry: true,
          retryConfig: {
            httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
          }
        };
      }
    };
    exports.AuthClient = AuthClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/loginticket.js
var require_loginticket = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/loginticket.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginTicket = void 0;
    var LoginTicket = class {
      envelope;
      payload;
      /**
       * Create a simple class to extract user ID from an ID Token
       *
       * @param {string} env Envelope of the jwt
       * @param {TokenPayload} pay Payload of the jwt
       * @constructor
       */
      constructor(env, pay) {
        this.envelope = env;
        this.payload = pay;
      }
      getEnvelope() {
        return this.envelope;
      }
      getPayload() {
        return this.payload;
      }
      /**
       * Create a simple class to extract user ID from an ID Token
       *
       * @return The user ID
       */
      getUserId() {
        const payload = this.getPayload();
        if (payload && payload.sub) {
          return payload.sub;
        }
        return null;
      }
      /**
       * Returns attributes from the login ticket.  This can contain
       * various information about the user session.
       *
       * @return The envelope and payload
       */
      getAttributes() {
        return { envelope: this.getEnvelope(), payload: this.getPayload() };
      }
    };
    exports.LoginTicket = LoginTicket;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/oauth2client.js
var require_oauth2client = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/oauth2client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Client = exports.ClientAuthentication = exports.CertificateFormat = exports.CodeChallengeMethod = void 0;
    var gaxios_1 = require_src();
    var querystring = __require("querystring");
    var stream = __require("stream");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util_1 = require_util2();
    var crypto_1 = require_crypto3();
    var authclient_1 = require_authclient();
    var loginticket_1 = require_loginticket();
    var CodeChallengeMethod;
    (function(CodeChallengeMethod2) {
      CodeChallengeMethod2["Plain"] = "plain";
      CodeChallengeMethod2["S256"] = "S256";
    })(CodeChallengeMethod || (exports.CodeChallengeMethod = CodeChallengeMethod = {}));
    var CertificateFormat;
    (function(CertificateFormat2) {
      CertificateFormat2["PEM"] = "PEM";
      CertificateFormat2["JWK"] = "JWK";
    })(CertificateFormat || (exports.CertificateFormat = CertificateFormat = {}));
    var ClientAuthentication;
    (function(ClientAuthentication2) {
      ClientAuthentication2["ClientSecretPost"] = "ClientSecretPost";
      ClientAuthentication2["ClientSecretBasic"] = "ClientSecretBasic";
      ClientAuthentication2["None"] = "None";
    })(ClientAuthentication || (exports.ClientAuthentication = ClientAuthentication = {}));
    var OAuth2Client = class _OAuth2Client extends authclient_1.AuthClient {
      redirectUri;
      certificateCache = {};
      certificateExpiry = null;
      certificateCacheFormat = CertificateFormat.PEM;
      refreshTokenPromises = /* @__PURE__ */ new Map();
      endpoints;
      issuers;
      clientAuthentication;
      // TODO: refactor tests to make this private
      _clientId;
      // TODO: refactor tests to make this private
      _clientSecret;
      refreshHandler;
      /**
       * An OAuth2 Client for Google APIs.
       *
       * @param options The OAuth2 Client Options. Passing an `clientId` directly is **@DEPRECATED**.
       * @param clientSecret **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
       * @param redirectUri **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
       */
      constructor(options = {}, clientSecret, redirectUri) {
        super(typeof options === "object" ? options : {});
        if (typeof options !== "object") {
          options = {
            clientId: options,
            clientSecret,
            redirectUri
          };
        }
        this._clientId = options.clientId || options.client_id;
        this._clientSecret = options.clientSecret || options.client_secret;
        this.redirectUri = options.redirectUri || options.redirect_uris?.[0];
        this.endpoints = {
          tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
          oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
          oauth2TokenUrl: "https://oauth2.googleapis.com/token",
          oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
          oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
          oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
          oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
          ...options.endpoints
        };
        this.clientAuthentication = options.clientAuthentication || ClientAuthentication.ClientSecretPost;
        this.issuers = options.issuers || [
          "accounts.google.com",
          "https://accounts.google.com",
          this.universeDomain
        ];
      }
      /**
       * @deprecated use instance's {@link OAuth2Client.endpoints}
       */
      static GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
      /**
       * Clock skew - five minutes in seconds
       */
      static CLOCK_SKEW_SECS_ = 300;
      /**
       * The default max Token Lifetime is one day in seconds
       */
      static DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
      /**
       * Generates URL for consent page landing.
       * @param opts Options.
       * @return URL to consent page.
       */
      generateAuthUrl(opts = {}) {
        if (opts.code_challenge_method && !opts.code_challenge) {
          throw new Error("If a code_challenge_method is provided, code_challenge must be included.");
        }
        opts.response_type = opts.response_type || "code";
        opts.client_id = opts.client_id || this._clientId;
        opts.redirect_uri = opts.redirect_uri || this.redirectUri;
        if (Array.isArray(opts.scope)) {
          opts.scope = opts.scope.join(" ");
        }
        const rootUrl = this.endpoints.oauth2AuthBaseUrl.toString();
        return rootUrl + "?" + querystring.stringify(opts);
      }
      generateCodeVerifier() {
        throw new Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
      }
      /**
       * Convenience method to automatically generate a code_verifier, and its
       * resulting SHA256. If used, this must be paired with a S256
       * code_challenge_method.
       *
       * For a full example see:
       * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
       */
      async generateCodeVerifierAsync() {
        const crypto = (0, crypto_1.createCrypto)();
        const randomString = crypto.randomBytesBase64(96);
        const codeVerifier = randomString.replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-");
        const unencodedCodeChallenge = await crypto.sha256DigestBase64(codeVerifier);
        const codeChallenge = unencodedCodeChallenge.split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
        return { codeVerifier, codeChallenge };
      }
      getToken(codeOrOptions, callback) {
        const options = typeof codeOrOptions === "string" ? { code: codeOrOptions } : codeOrOptions;
        if (callback) {
          this.getTokenAsync(options).then((r) => callback(null, r.tokens, r.res), (e) => callback(e, null, e.response));
        } else {
          return this.getTokenAsync(options);
        }
      }
      async getTokenAsync(options) {
        const url = this.endpoints.oauth2TokenUrl.toString();
        const headers = new Headers();
        const values = {
          client_id: options.client_id || this._clientId,
          code_verifier: options.codeVerifier,
          code: options.code,
          grant_type: "authorization_code",
          redirect_uri: options.redirect_uri || this.redirectUri
        };
        if (this.clientAuthentication === ClientAuthentication.ClientSecretBasic) {
          const basic = Buffer.from(`${this._clientId}:${this._clientSecret}`);
          headers.set("authorization", `Basic ${basic.toString("base64")}`);
        }
        if (this.clientAuthentication === ClientAuthentication.ClientSecretPost) {
          values.client_secret = this._clientSecret;
        }
        const opts = {
          ..._OAuth2Client.RETRY_CONFIG,
          method: "POST",
          url,
          data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(values)),
          headers
        };
        authclient_1.AuthClient.setMethodName(opts, "getTokenAsync");
        const res = await this.transporter.request(opts);
        const tokens = res.data;
        if (res.data && res.data.expires_in) {
          tokens.expiry_date = (/* @__PURE__ */ new Date()).getTime() + res.data.expires_in * 1e3;
          delete tokens.expires_in;
        }
        this.emit("tokens", tokens);
        return { tokens, res };
      }
      /**
       * Refreshes the access token.
       * @param refresh_token Existing refresh token.
       * @private
       */
      async refreshToken(refreshToken) {
        if (!refreshToken) {
          return this.refreshTokenNoCache(refreshToken);
        }
        if (this.refreshTokenPromises.has(refreshToken)) {
          return this.refreshTokenPromises.get(refreshToken);
        }
        const p = this.refreshTokenNoCache(refreshToken).then((r) => {
          this.refreshTokenPromises.delete(refreshToken);
          return r;
        }, (e) => {
          this.refreshTokenPromises.delete(refreshToken);
          throw e;
        });
        this.refreshTokenPromises.set(refreshToken, p);
        return p;
      }
      async refreshTokenNoCache(refreshToken) {
        if (!refreshToken) {
          throw new Error("No refresh token is set.");
        }
        const url = this.endpoints.oauth2TokenUrl.toString();
        const data = {
          refresh_token: refreshToken,
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token"
        };
        let res;
        try {
          const opts = {
            ..._OAuth2Client.RETRY_CONFIG,
            method: "POST",
            url,
            data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(data))
          };
          authclient_1.AuthClient.setMethodName(opts, "refreshTokenNoCache");
          res = await this.transporter.request(opts);
        } catch (e) {
          if (e instanceof gaxios_1.GaxiosError && e.message === "invalid_grant" && e.response?.data && /ReAuth/i.test(e.response.data.error_description)) {
            e.message = JSON.stringify(e.response.data);
          }
          throw e;
        }
        const tokens = res.data;
        if (res.data && res.data.expires_in) {
          tokens.expiry_date = (/* @__PURE__ */ new Date()).getTime() + res.data.expires_in * 1e3;
          delete tokens.expires_in;
        }
        this.emit("tokens", tokens);
        return { tokens, res };
      }
      refreshAccessToken(callback) {
        if (callback) {
          this.refreshAccessTokenAsync().then((r) => callback(null, r.credentials, r.res), callback);
        } else {
          return this.refreshAccessTokenAsync();
        }
      }
      async refreshAccessTokenAsync() {
        const r = await this.refreshToken(this.credentials.refresh_token);
        const tokens = r.tokens;
        tokens.refresh_token = this.credentials.refresh_token;
        this.credentials = tokens;
        return { credentials: this.credentials, res: r.res };
      }
      getAccessToken(callback) {
        if (callback) {
          this.getAccessTokenAsync().then((r) => callback(null, r.token, r.res), callback);
        } else {
          return this.getAccessTokenAsync();
        }
      }
      async getAccessTokenAsync() {
        const shouldRefresh = !this.credentials.access_token || this.isTokenExpiring();
        if (shouldRefresh) {
          if (!this.credentials.refresh_token) {
            if (this.refreshHandler) {
              const refreshedAccessToken = await this.processAndValidateRefreshHandler();
              if (refreshedAccessToken?.access_token) {
                this.setCredentials(refreshedAccessToken);
                return { token: this.credentials.access_token };
              }
            } else {
              throw new Error("No refresh token or refresh handler callback is set.");
            }
          }
          const r = await this.refreshAccessTokenAsync();
          if (!r.credentials || r.credentials && !r.credentials.access_token) {
            throw new Error("Could not refresh access token.");
          }
          return { token: r.credentials.access_token, res: r.res };
        } else {
          return { token: this.credentials.access_token };
        }
      }
      /**
       * The main authentication interface.  It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * In OAuth2Client, the result has the form:
       * { authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders(url) {
        const headers = (await this.getRequestMetadataAsync(url)).headers;
        return headers;
      }
      async getRequestMetadataAsync(url) {
        url;
        const thisCreds = this.credentials;
        if (!thisCreds.access_token && !thisCreds.refresh_token && !this.apiKey && !this.refreshHandler) {
          throw new Error("No access, refresh token, API key or refresh handler callback is set.");
        }
        if (thisCreds.access_token && !this.isTokenExpiring()) {
          thisCreds.token_type = thisCreds.token_type || "Bearer";
          const headers2 = new Headers({
            authorization: thisCreds.token_type + " " + thisCreds.access_token
          });
          return { headers: this.addSharedMetadataHeaders(headers2) };
        }
        if (this.refreshHandler) {
          const refreshedAccessToken = await this.processAndValidateRefreshHandler();
          if (refreshedAccessToken?.access_token) {
            this.setCredentials(refreshedAccessToken);
            const headers2 = new Headers({
              authorization: "Bearer " + this.credentials.access_token
            });
            return { headers: this.addSharedMetadataHeaders(headers2) };
          }
        }
        if (this.apiKey) {
          return { headers: new Headers({ "X-Goog-Api-Key": this.apiKey }) };
        }
        let r = null;
        let tokens = null;
        try {
          r = await this.refreshToken(thisCreds.refresh_token);
          tokens = r.tokens;
        } catch (err) {
          const e = err;
          if (e.response && (e.response.status === 403 || e.response.status === 404)) {
            e.message = `Could not refresh access token: ${e.message}`;
          }
          throw e;
        }
        const credentials = this.credentials;
        credentials.token_type = credentials.token_type || "Bearer";
        tokens.refresh_token = credentials.refresh_token;
        this.credentials = tokens;
        const headers = new Headers({
          authorization: credentials.token_type + " " + tokens.access_token
        });
        return { headers: this.addSharedMetadataHeaders(headers), res: r.res };
      }
      /**
       * Generates an URL to revoke the given token.
       * @param token The existing token to be revoked.
       *
       * @deprecated use instance method {@link OAuth2Client.getRevokeTokenURL}
       */
      static getRevokeTokenUrl(token) {
        return new _OAuth2Client().getRevokeTokenURL(token).toString();
      }
      /**
       * Generates a URL to revoke the given token.
       *
       * @param token The existing token to be revoked.
       */
      getRevokeTokenURL(token) {
        const url = new URL(this.endpoints.oauth2RevokeUrl);
        url.searchParams.append("token", token);
        return url;
      }
      revokeToken(token, callback) {
        const opts = {
          ..._OAuth2Client.RETRY_CONFIG,
          url: this.getRevokeTokenURL(token).toString(),
          method: "POST"
        };
        authclient_1.AuthClient.setMethodName(opts, "revokeToken");
        if (callback) {
          this.transporter.request(opts).then((r) => callback(null, r), callback);
        } else {
          return this.transporter.request(opts);
        }
      }
      revokeCredentials(callback) {
        if (callback) {
          this.revokeCredentialsAsync().then((res) => callback(null, res), callback);
        } else {
          return this.revokeCredentialsAsync();
        }
      }
      async revokeCredentialsAsync() {
        const token = this.credentials.access_token;
        this.credentials = {};
        if (token) {
          return this.revokeToken(token);
        } else {
          throw new Error("No access token to revoke.");
        }
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      async requestAsync(opts, reAuthRetried = false) {
        try {
          const r = await this.getRequestMetadataAsync();
          opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
          this.addUserProjectAndAuthHeaders(opts.headers, r.headers);
          if (this.apiKey) {
            opts.headers.set("X-Goog-Api-Key", this.apiKey);
          }
          return await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const mayRequireRefresh = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure);
            const mayRequireRefreshWithNoRefreshToken = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && mayRequireRefresh) {
              await this.refreshAccessTokenAsync();
              return this.requestAsync(opts, true);
            } else if (!reAuthRetried && isAuthErr && !isReadableStream && mayRequireRefreshWithNoRefreshToken) {
              const refreshedAccessToken = await this.processAndValidateRefreshHandler();
              if (refreshedAccessToken?.access_token) {
                this.setCredentials(refreshedAccessToken);
              }
              return this.requestAsync(opts, true);
            }
          }
          throw e;
        }
      }
      verifyIdToken(options, callback) {
        if (callback && typeof callback !== "function") {
          throw new Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
        }
        if (callback) {
          this.verifyIdTokenAsync(options).then((r) => callback(null, r), callback);
        } else {
          return this.verifyIdTokenAsync(options);
        }
      }
      async verifyIdTokenAsync(options) {
        if (!options.idToken) {
          throw new Error("The verifyIdToken method requires an ID Token");
        }
        const response = await this.getFederatedSignonCertsAsync();
        const login = await this.verifySignedJwtWithCertsAsync(options.idToken, response.certs, options.audience, this.issuers, options.maxExpiry);
        return login;
      }
      /**
       * Obtains information about the provisioned access token.  Especially useful
       * if you want to check the scopes that were provisioned to a given token.
       *
       * @param accessToken Required.  The Access Token for which you want to get
       * user info.
       */
      async getTokenInfo(accessToken) {
        const { data } = await this.transporter.request({
          ..._OAuth2Client.RETRY_CONFIG,
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: `Bearer ${accessToken}`
          },
          url: this.endpoints.tokenInfoUrl.toString()
        });
        const info = Object.assign({
          expiry_date: (/* @__PURE__ */ new Date()).getTime() + data.expires_in * 1e3,
          scopes: data.scope.split(" ")
        }, data);
        delete info.expires_in;
        delete info.scope;
        return info;
      }
      getFederatedSignonCerts(callback) {
        if (callback) {
          this.getFederatedSignonCertsAsync().then((r) => callback(null, r.certs, r.res), callback);
        } else {
          return this.getFederatedSignonCertsAsync();
        }
      }
      async getFederatedSignonCertsAsync() {
        const nowTime = (/* @__PURE__ */ new Date()).getTime();
        const format = (0, crypto_1.hasBrowserCrypto)() ? CertificateFormat.JWK : CertificateFormat.PEM;
        if (this.certificateExpiry && nowTime < this.certificateExpiry.getTime() && this.certificateCacheFormat === format) {
          return { certs: this.certificateCache, format };
        }
        let res;
        let url;
        switch (format) {
          case CertificateFormat.PEM:
            url = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
            break;
          case CertificateFormat.JWK:
            url = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
            break;
          default:
            throw new Error(`Unsupported certificate format ${format}`);
        }
        try {
          const opts = {
            ..._OAuth2Client.RETRY_CONFIG,
            url
          };
          authclient_1.AuthClient.setMethodName(opts, "getFederatedSignonCertsAsync");
          res = await this.transporter.request(opts);
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Failed to retrieve verification certificates: ${e.message}`;
          }
          throw e;
        }
        const cacheControl = res?.headers.get("cache-control");
        let cacheAge = -1;
        if (cacheControl) {
          const maxAge = /max-age=(?<maxAge>[0-9]+)/.exec(cacheControl)?.groups?.maxAge;
          if (maxAge) {
            cacheAge = Number(maxAge) * 1e3;
          }
        }
        let certificates = {};
        switch (format) {
          case CertificateFormat.PEM:
            certificates = res.data;
            break;
          case CertificateFormat.JWK:
            for (const key of res.data.keys) {
              certificates[key.kid] = key;
            }
            break;
          default:
            throw new Error(`Unsupported certificate format ${format}`);
        }
        const now = /* @__PURE__ */ new Date();
        this.certificateExpiry = cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
        this.certificateCache = certificates;
        this.certificateCacheFormat = format;
        return { certs: certificates, format, res };
      }
      getIapPublicKeys(callback) {
        if (callback) {
          this.getIapPublicKeysAsync().then((r) => callback(null, r.pubkeys, r.res), callback);
        } else {
          return this.getIapPublicKeysAsync();
        }
      }
      async getIapPublicKeysAsync() {
        let res;
        const url = this.endpoints.oauth2IapPublicKeyUrl.toString();
        try {
          const opts = {
            ..._OAuth2Client.RETRY_CONFIG,
            url
          };
          authclient_1.AuthClient.setMethodName(opts, "getIapPublicKeysAsync");
          res = await this.transporter.request(opts);
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Failed to retrieve verification certificates: ${e.message}`;
          }
          throw e;
        }
        return { pubkeys: res.data, res };
      }
      verifySignedJwtWithCerts() {
        throw new Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
      }
      /**
       * Verify the id token is signed with the correct certificate
       * and is from the correct audience.
       * @param jwt The jwt to verify (The ID Token in this case).
       * @param certs The array of certs to test the jwt against.
       * @param requiredAudience The audience to test the jwt against.
       * @param issuers The allowed issuers of the jwt (Optional).
       * @param maxExpiry The max expiry the certificate can be (Optional).
       * @return Returns a promise resolving to LoginTicket on verification.
       */
      async verifySignedJwtWithCertsAsync(jwt, certs, requiredAudience, issuers, maxExpiry) {
        const crypto = (0, crypto_1.createCrypto)();
        if (!maxExpiry) {
          maxExpiry = _OAuth2Client.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
        }
        const segments = jwt.split(".");
        if (segments.length !== 3) {
          throw new Error("Wrong number of segments in token: " + jwt);
        }
        const signed = segments[0] + "." + segments[1];
        let signature = segments[2];
        let envelope;
        let payload;
        try {
          envelope = JSON.parse(crypto.decodeBase64StringUtf8(segments[0]));
        } catch (err) {
          if (err instanceof Error) {
            err.message = `Can't parse token envelope: ${segments[0]}': ${err.message}`;
          }
          throw err;
        }
        if (!envelope) {
          throw new Error("Can't parse token envelope: " + segments[0]);
        }
        try {
          payload = JSON.parse(crypto.decodeBase64StringUtf8(segments[1]));
        } catch (err) {
          if (err instanceof Error) {
            err.message = `Can't parse token payload '${segments[0]}`;
          }
          throw err;
        }
        if (!payload) {
          throw new Error("Can't parse token payload: " + segments[1]);
        }
        if (!Object.prototype.hasOwnProperty.call(certs, envelope.kid)) {
          throw new Error("No pem found for envelope: " + JSON.stringify(envelope));
        }
        const cert = certs[envelope.kid];
        if (envelope.alg === "ES256") {
          signature = formatEcdsa.joseToDer(signature, "ES256").toString("base64");
        }
        const verified = await crypto.verify(cert, signed, signature);
        if (!verified) {
          throw new Error("Invalid token signature: " + jwt);
        }
        if (!payload.iat) {
          throw new Error("No issue time in token: " + JSON.stringify(payload));
        }
        if (!payload.exp) {
          throw new Error("No expiration time in token: " + JSON.stringify(payload));
        }
        const iat = Number(payload.iat);
        if (isNaN(iat))
          throw new Error("iat field using invalid format");
        const exp = Number(payload.exp);
        if (isNaN(exp))
          throw new Error("exp field using invalid format");
        const now = (/* @__PURE__ */ new Date()).getTime() / 1e3;
        if (exp >= now + maxExpiry) {
          throw new Error("Expiration time too far in future: " + JSON.stringify(payload));
        }
        const earliest = iat - _OAuth2Client.CLOCK_SKEW_SECS_;
        const latest = exp + _OAuth2Client.CLOCK_SKEW_SECS_;
        if (now < earliest) {
          throw new Error("Token used too early, " + now + " < " + earliest + ": " + JSON.stringify(payload));
        }
        if (now > latest) {
          throw new Error("Token used too late, " + now + " > " + latest + ": " + JSON.stringify(payload));
        }
        if (issuers && issuers.indexOf(payload.iss) < 0) {
          throw new Error("Invalid issuer, expected one of [" + issuers + "], but got " + payload.iss);
        }
        if (typeof requiredAudience !== "undefined" && requiredAudience !== null) {
          const aud = payload.aud;
          let audVerified = false;
          if (requiredAudience.constructor === Array) {
            audVerified = requiredAudience.indexOf(aud) > -1;
          } else {
            audVerified = aud === requiredAudience;
          }
          if (!audVerified) {
            throw new Error("Wrong recipient, payload audience != requiredAudience");
          }
        }
        return new loginticket_1.LoginTicket(envelope, payload);
      }
      /**
       * Returns a promise that resolves with AccessTokenResponse type if
       * refreshHandler is defined.
       * If not, nothing is returned.
       */
      async processAndValidateRefreshHandler() {
        if (this.refreshHandler) {
          const accessTokenResponse = await this.refreshHandler();
          if (!accessTokenResponse.access_token) {
            throw new Error("No access token is returned by the refreshHandler callback.");
          }
          return accessTokenResponse;
        }
        return;
      }
      /**
       * Returns true if a token is expired or will expire within
       * eagerRefreshThresholdMillismilliseconds.
       * If there is no expiry time, assumes the token is not expired or expiring.
       */
      isTokenExpiring() {
        const expiryDate = this.credentials.expiry_date;
        return expiryDate ? expiryDate <= (/* @__PURE__ */ new Date()).getTime() + this.eagerRefreshThresholdMillis : false;
      }
    };
    exports.OAuth2Client = OAuth2Client;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/computeclient.js
var require_computeclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/computeclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Compute = void 0;
    var gaxios_1 = require_src();
    var gcpMetadata = require_src3();
    var oauth2client_1 = require_oauth2client();
    var Compute = class extends oauth2client_1.OAuth2Client {
      serviceAccountEmail;
      scopes;
      /**
       * Google Compute Engine service account credentials.
       *
       * Retrieve access token from the metadata server.
       * See: https://cloud.google.com/compute/docs/access/authenticate-workloads#applications
       */
      constructor(options = {}) {
        super(options);
        this.credentials = { expiry_date: 1, refresh_token: "compute-placeholder" };
        this.serviceAccountEmail = options.serviceAccountEmail || "default";
        this.scopes = Array.isArray(options.scopes) ? options.scopes : options.scopes ? [options.scopes] : [];
      }
      /**
       * Refreshes the access token.
       * @param refreshToken Unused parameter
       */
      async refreshTokenNoCache() {
        const tokenPath = `service-accounts/${this.serviceAccountEmail}/token`;
        let data;
        try {
          const instanceOptions = {
            property: tokenPath
          };
          if (this.scopes.length > 0) {
            instanceOptions.params = {
              scopes: this.scopes.join(",")
            };
          }
          data = await gcpMetadata.instance(instanceOptions);
        } catch (e) {
          if (e instanceof gaxios_1.GaxiosError) {
            e.message = `Could not refresh access token: ${e.message}`;
            this.wrapError(e);
          }
          throw e;
        }
        const tokens = data;
        if (data && data.expires_in) {
          tokens.expiry_date = (/* @__PURE__ */ new Date()).getTime() + data.expires_in * 1e3;
          delete tokens.expires_in;
        }
        this.emit("tokens", tokens);
        return { tokens, res: null };
      }
      /**
       * Fetches an ID token.
       * @param targetAudience the audience for the fetched ID token.
       */
      async fetchIdToken(targetAudience) {
        const idTokenPath = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${targetAudience}`;
        let idToken;
        try {
          const instanceOptions = {
            property: idTokenPath
          };
          idToken = await gcpMetadata.instance(instanceOptions);
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Could not fetch ID token: ${e.message}`;
          }
          throw e;
        }
        return idToken;
      }
      wrapError(e) {
        const res = e.response;
        if (res && res.status) {
          e.status = res.status;
          if (res.status === 403) {
            e.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + e.message;
          } else if (res.status === 404) {
            e.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + e.message;
          }
        }
      }
    };
    exports.Compute = Compute;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/idtokenclient.js
var require_idtokenclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/idtokenclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdTokenClient = void 0;
    var oauth2client_1 = require_oauth2client();
    var IdTokenClient = class extends oauth2client_1.OAuth2Client {
      targetAudience;
      idTokenProvider;
      /**
       * Google ID Token client
       *
       * Retrieve ID token from the metadata server.
       * See: https://cloud.google.com/docs/authentication/get-id-token#metadata-server
       */
      constructor(options) {
        super(options);
        this.targetAudience = options.targetAudience;
        this.idTokenProvider = options.idTokenProvider;
      }
      async getRequestMetadataAsync() {
        if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
          const idToken = await this.idTokenProvider.fetchIdToken(this.targetAudience);
          this.credentials = {
            id_token: idToken,
            expiry_date: this.getIdTokenExpiryDate(idToken)
          };
        }
        const headers = new Headers({
          authorization: "Bearer " + this.credentials.id_token
        });
        return { headers };
      }
      getIdTokenExpiryDate(idToken) {
        const payloadB64 = idToken.split(".")[1];
        if (payloadB64) {
          const payload = JSON.parse(Buffer.from(payloadB64, "base64").toString("ascii"));
          return payload.exp * 1e3;
        }
      }
    };
    exports.IdTokenClient = IdTokenClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/envDetect.js
var require_envDetect = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/envDetect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GCPEnv = void 0;
    exports.clear = clear;
    exports.getEnv = getEnv;
    var gcpMetadata = require_src3();
    var GCPEnv;
    (function(GCPEnv2) {
      GCPEnv2["APP_ENGINE"] = "APP_ENGINE";
      GCPEnv2["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
      GCPEnv2["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
      GCPEnv2["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
      GCPEnv2["CLOUD_RUN"] = "CLOUD_RUN";
      GCPEnv2["CLOUD_RUN_JOBS"] = "CLOUD_RUN_JOBS";
      GCPEnv2["NONE"] = "NONE";
    })(GCPEnv || (exports.GCPEnv = GCPEnv = {}));
    var envPromise;
    function clear() {
      envPromise = void 0;
    }
    async function getEnv() {
      if (envPromise) {
        return envPromise;
      }
      envPromise = getEnvMemoized();
      return envPromise;
    }
    async function getEnvMemoized() {
      let env = GCPEnv.NONE;
      if (isAppEngine()) {
        env = GCPEnv.APP_ENGINE;
      } else if (isCloudFunction()) {
        env = GCPEnv.CLOUD_FUNCTIONS;
      } else if (await isComputeEngine()) {
        if (await isKubernetesEngine()) {
          env = GCPEnv.KUBERNETES_ENGINE;
        } else if (isCloudRun()) {
          env = GCPEnv.CLOUD_RUN;
        } else if (isCloudRunJob()) {
          env = GCPEnv.CLOUD_RUN_JOBS;
        } else {
          env = GCPEnv.COMPUTE_ENGINE;
        }
      } else {
        env = GCPEnv.NONE;
      }
      return env;
    }
    function isAppEngine() {
      return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
    }
    function isCloudFunction() {
      return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
    }
    function isCloudRun() {
      return !!process.env.K_CONFIGURATION;
    }
    function isCloudRunJob() {
      return !!process.env.CLOUD_RUN_JOB;
    }
    async function isKubernetesEngine() {
      try {
        await gcpMetadata.instance("attributes/cluster-name");
        return true;
      } catch (e) {
        return false;
      }
    }
    async function isComputeEngine() {
      return gcpMetadata.isAvailable();
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/jwsSign.js
var require_jwsSign = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/jwsSign.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildPayloadForJwsSign = buildPayloadForJwsSign;
    exports.getJwsSign = getJwsSign;
    var jws_1 = require_jws();
    var ALG_RS256 = "RS256";
    var GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
    function buildPayloadForJwsSign(tokenOptions) {
      const iat = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      const payload = {
        iss: tokenOptions.iss,
        scope: tokenOptions.scope,
        aud: GOOGLE_TOKEN_URL,
        exp: iat + 3600,
        iat,
        sub: tokenOptions.sub,
        ...tokenOptions.additionalClaims
      };
      return payload;
    }
    function getJwsSign(tokenOptions) {
      const payload = buildPayloadForJwsSign(tokenOptions);
      return (0, jws_1.sign)({
        header: { alg: ALG_RS256 },
        payload,
        secret: tokenOptions.key
      });
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/getToken.js
var require_getToken = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/getToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getToken = getToken;
    var jwsSign_1 = require_jwsSign();
    var GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
    var GOOGLE_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:jwt-bearer";
    var generateRequestOptions = (tokenOptions) => {
      return {
        method: "POST",
        url: GOOGLE_TOKEN_URL,
        data: new URLSearchParams({
          grant_type: GOOGLE_GRANT_TYPE,
          // Grant type for JWT
          assertion: (0, jwsSign_1.getJwsSign)(tokenOptions)
        }),
        responseType: "json",
        retryConfig: {
          httpMethodsToRetry: ["POST"]
        }
      };
    };
    async function getToken(tokenOptions) {
      if (!tokenOptions.transporter) {
        throw new Error("No transporter set.");
      }
      try {
        const gaxiosOptions = generateRequestOptions(tokenOptions);
        const response = await tokenOptions.transporter.request(gaxiosOptions);
        return response.data;
      } catch (e) {
        const err = e;
        const errorData = err.response?.data;
        if (errorData?.error) {
          err.message = `${errorData.error}: ${errorData.error_description}`;
        }
        throw err;
      }
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/errorWithCode.js
var require_errorWithCode = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/errorWithCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ErrorWithCode = void 0;
    var ErrorWithCode = class extends Error {
      code;
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    exports.ErrorWithCode = ErrorWithCode;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/getCredentials.js
var require_getCredentials = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/getCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCredentials = getCredentials;
    var path = __require("path");
    var fs = __require("fs");
    var util_1 = __require("util");
    var errorWithCode_1 = require_errorWithCode();
    var readFile = fs.readFile ? (0, util_1.promisify)(fs.readFile) : async () => {
      throw new errorWithCode_1.ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
    };
    var ExtensionFiles;
    (function(ExtensionFiles2) {
      ExtensionFiles2["JSON"] = ".json";
      ExtensionFiles2["DER"] = ".der";
      ExtensionFiles2["CRT"] = ".crt";
      ExtensionFiles2["PEM"] = ".pem";
      ExtensionFiles2["P12"] = ".p12";
      ExtensionFiles2["PFX"] = ".pfx";
    })(ExtensionFiles || (ExtensionFiles = {}));
    var JsonCredentialsProvider = class {
      keyFilePath;
      constructor(keyFilePath) {
        this.keyFilePath = keyFilePath;
      }
      /**
       * Reads a JSON key file and extracts the private key and client email.
       * @returns A promise that resolves with the credentials.
       */
      async getCredentials() {
        const key = await readFile(this.keyFilePath, "utf8");
        let body;
        try {
          body = JSON.parse(key);
        } catch (error) {
          const err = error;
          throw new Error(`Invalid JSON key file: ${err.message}`);
        }
        const privateKey = body.private_key;
        const clientEmail = body.client_email;
        if (!privateKey || !clientEmail) {
          throw new errorWithCode_1.ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
        }
        return { privateKey, clientEmail };
      }
    };
    var PemCredentialsProvider = class {
      keyFilePath;
      constructor(keyFilePath) {
        this.keyFilePath = keyFilePath;
      }
      /**
       * Reads a PEM-like key file.
       * @returns A promise that resolves with the private key.
       */
      async getCredentials() {
        const privateKey = await readFile(this.keyFilePath, "utf8");
        return { privateKey };
      }
    };
    var P12CredentialsProvider = class {
      /**
       * Throws an error as P12/PFX certificates are not supported.
       * @returns A promise that rejects with an error.
       */
      async getCredentials() {
        throw new errorWithCode_1.ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
      }
    };
    var CredentialsProviderFactory = class {
      /**
       * Creates a credential provider based on the key file extension.
       * @param keyFilePath The path to the key file.
       * @returns An instance of a class that implements ICredentialsProvider.
       */
      static create(keyFilePath) {
        const keyFileExtension = path.extname(keyFilePath);
        switch (keyFileExtension) {
          case ExtensionFiles.JSON:
            return new JsonCredentialsProvider(keyFilePath);
          case ExtensionFiles.DER:
          case ExtensionFiles.CRT:
          case ExtensionFiles.PEM:
            return new PemCredentialsProvider(keyFilePath);
          case ExtensionFiles.P12:
          case ExtensionFiles.PFX:
            return new P12CredentialsProvider();
          default:
            throw new errorWithCode_1.ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
        }
      }
    };
    async function getCredentials(keyFilePath) {
      const provider = CredentialsProviderFactory.create(keyFilePath);
      return provider.getCredentials();
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/tokenHandler.js
var require_tokenHandler = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/tokenHandler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenHandler = void 0;
    var getToken_1 = require_getToken();
    var getCredentials_1 = require_getCredentials();
    var TokenHandler = class {
      /** The cached access token. */
      token;
      /** The expiration time of the cached access token. */
      tokenExpiresAt;
      /** A promise for an in-flight token request. */
      inFlightRequest;
      tokenOptions;
      /**
       * Creates an instance of TokenHandler.
       * @param tokenOptions The options for fetching tokens.
       * @param transporter The transporter to use for making requests.
       */
      constructor(tokenOptions) {
        this.tokenOptions = tokenOptions;
      }
      /**
       * Processes the credentials, loading them from a key file if necessary.
       * This method is called before any token request.
       */
      async processCredentials() {
        if (!this.tokenOptions.key && !this.tokenOptions.keyFile) {
          throw new Error("No key or keyFile set.");
        }
        if (!this.tokenOptions.key && this.tokenOptions.keyFile) {
          const credentials = await (0, getCredentials_1.getCredentials)(this.tokenOptions.keyFile);
          this.tokenOptions.key = credentials.privateKey;
          this.tokenOptions.email = credentials.clientEmail;
        }
      }
      /**
       * Checks if the cached token is expired or close to expiring.
       * @returns True if the token is expiring, false otherwise.
       */
      isTokenExpiring() {
        if (!this.token || !this.tokenExpiresAt) {
          return true;
        }
        const now = (/* @__PURE__ */ new Date()).getTime();
        const eagerRefreshThresholdMillis = this.tokenOptions.eagerRefreshThresholdMillis ?? 0;
        return this.tokenExpiresAt <= now + eagerRefreshThresholdMillis;
      }
      /**
       * Returns whether the token has completely expired.
       *
       * @returns true if the token has expired, false otherwise.
       */
      hasExpired() {
        const now = (/* @__PURE__ */ new Date()).getTime();
        if (this.token && this.tokenExpiresAt) {
          const now2 = (/* @__PURE__ */ new Date()).getTime();
          return now2 >= this.tokenExpiresAt;
        }
        return true;
      }
      /**
       * Fetches an access token, using a cached one if available and not expired.
       * @param forceRefresh If true, forces a new token to be fetched.
       * @returns A promise that resolves with the token data.
       */
      async getToken(forceRefresh) {
        await this.processCredentials();
        if (this.inFlightRequest && !forceRefresh) {
          return this.inFlightRequest;
        }
        if (this.token && !this.isTokenExpiring() && !forceRefresh) {
          return this.token;
        }
        try {
          this.inFlightRequest = (0, getToken_1.getToken)(this.tokenOptions);
          const token = await this.inFlightRequest;
          this.token = token;
          this.tokenExpiresAt = (/* @__PURE__ */ new Date()).getTime() + (token.expires_in ?? 0) * 1e3;
          return token;
        } finally {
          this.inFlightRequest = void 0;
        }
      }
    };
    exports.TokenHandler = TokenHandler;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/revokeToken.js
var require_revokeToken = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/revokeToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.revokeToken = revokeToken;
    var GOOGLE_REVOKE_TOKEN_URL = "https://oauth2.googleapis.com/revoke?token=";
    var DEFAULT_RETRY_VALUE = true;
    async function revokeToken(accessToken, transporter) {
      const url = GOOGLE_REVOKE_TOKEN_URL + accessToken;
      return await transporter.request({
        url,
        retry: DEFAULT_RETRY_VALUE
      });
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/googleToken.js
var require_googleToken = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/googleToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleToken = void 0;
    var gaxios_1 = require_src();
    var tokenHandler_1 = require_tokenHandler();
    var revokeToken_1 = require_revokeToken();
    var GoogleToken = class {
      /** The configuration options for this token instance. */
      tokenOptions;
      /** The handler for token fetching and caching logic. */
      tokenHandler;
      /**
       * Create a GoogleToken.
       *
       * @param options  Configuration object.
       */
      constructor(options) {
        this.tokenOptions = options || {};
        this.tokenOptions.transporter = this.tokenOptions.transporter || {
          request: (opts) => (0, gaxios_1.request)(opts)
        };
        if (!this.tokenOptions.iss) {
          this.tokenOptions.iss = this.tokenOptions.email;
        }
        if (typeof this.tokenOptions.scope === "object") {
          this.tokenOptions.scope = this.tokenOptions.scope.join(" ");
        }
        this.tokenHandler = new tokenHandler_1.TokenHandler(this.tokenOptions);
      }
      get expiresAt() {
        return this.tokenHandler.tokenExpiresAt;
      }
      /**
       * The most recent access token obtained by this client.
       */
      get accessToken() {
        return this.tokenHandler.token?.access_token;
      }
      /**
       * The most recent ID token obtained by this client.
       */
      get idToken() {
        return this.tokenHandler.token?.id_token;
      }
      /**
       * The token type of the most recent access token.
       */
      get tokenType() {
        return this.tokenHandler.token?.token_type;
      }
      /**
       * The refresh token for the current credentials.
       */
      get refreshToken() {
        return this.tokenHandler.token?.refresh_token;
      }
      /**
       * A boolean indicating if the current token has expired.
       */
      hasExpired() {
        return this.tokenHandler.hasExpired();
      }
      /**
       * A boolean indicating if the current token is expiring soon,
       * based on the `eagerRefreshThresholdMillis` option.
       */
      isTokenExpiring() {
        return this.tokenHandler.isTokenExpiring();
      }
      getToken(callbackOrOptions, opts = { forceRefresh: false }) {
        let callback;
        if (typeof callbackOrOptions === "function") {
          callback = callbackOrOptions;
        } else if (typeof callbackOrOptions === "object") {
          opts = callbackOrOptions;
        }
        const promise = this.tokenHandler.getToken(opts.forceRefresh ?? false);
        if (callback) {
          promise.then((token) => callback(null, token), callback);
        }
        return promise;
      }
      revokeToken(callback) {
        if (!this.accessToken) {
          return Promise.reject(new Error("No token to revoke."));
        }
        const promise = (0, revokeToken_1.revokeToken)(this.accessToken, this.tokenOptions.transporter);
        if (callback) {
          promise.then(() => callback(), callback);
        }
        this.tokenHandler = new tokenHandler_1.TokenHandler(this.tokenOptions);
      }
      /**
       * Returns the configuration options for this token instance.
       */
      get googleTokenOptions() {
        return this.tokenOptions;
      }
    };
    exports.GoogleToken = GoogleToken;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/jwtaccess.js
var require_jwtaccess = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/jwtaccess.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JWTAccess = void 0;
    var jws = require_jws();
    var util_1 = require_util2();
    var DEFAULT_HEADER = {
      alg: "RS256",
      typ: "JWT"
    };
    var JWTAccess = class _JWTAccess {
      email;
      key;
      keyId;
      projectId;
      eagerRefreshThresholdMillis;
      cache = new util_1.LRUCache({
        capacity: 500,
        maxAge: 60 * 60 * 1e3
      });
      /**
       * JWTAccess service account credentials.
       *
       * Create a new access token by using the credential to create a new JWT token
       * that's recognized as the access token.
       *
       * @param email the service account email address.
       * @param key the private key that will be used to sign the token.
       * @param keyId the ID of the private key used to sign the token.
       */
      constructor(email, key, keyId, eagerRefreshThresholdMillis) {
        this.email = email;
        this.key = key;
        this.keyId = keyId;
        this.eagerRefreshThresholdMillis = eagerRefreshThresholdMillis ?? 5 * 60 * 1e3;
      }
      /**
       * Ensures that we're caching a key appropriately, giving precedence to scopes vs. url
       *
       * @param url The URI being authorized.
       * @param scopes The scope or scopes being authorized
       * @returns A string that returns the cached key.
       */
      getCachedKey(url, scopes) {
        let cacheKey = url;
        if (scopes && Array.isArray(scopes) && scopes.length) {
          cacheKey = url ? `${url}_${scopes.join("_")}` : `${scopes.join("_")}`;
        } else if (typeof scopes === "string") {
          cacheKey = url ? `${url}_${scopes}` : scopes;
        }
        if (!cacheKey) {
          throw Error("Scopes or url must be provided");
        }
        return cacheKey;
      }
      /**
       * Get a non-expired access token, after refreshing if necessary.
       *
       * @param url The URI being authorized.
       * @param additionalClaims An object with a set of additional claims to
       * include in the payload.
       * @returns An object that includes the authorization header.
       */
      getRequestHeaders(url, additionalClaims, scopes) {
        const key = this.getCachedKey(url, scopes);
        const cachedToken = this.cache.get(key);
        const now = Date.now();
        if (cachedToken && cachedToken.expiration - now > this.eagerRefreshThresholdMillis) {
          return new Headers(cachedToken.headers);
        }
        const iat = Math.floor(Date.now() / 1e3);
        const exp = _JWTAccess.getExpirationTime(iat);
        let defaultClaims;
        if (Array.isArray(scopes)) {
          scopes = scopes.join(" ");
        }
        if (scopes) {
          defaultClaims = {
            iss: this.email,
            sub: this.email,
            scope: scopes,
            exp,
            iat
          };
        } else {
          defaultClaims = {
            iss: this.email,
            sub: this.email,
            aud: url,
            exp,
            iat
          };
        }
        if (additionalClaims) {
          for (const claim in defaultClaims) {
            if (additionalClaims[claim]) {
              throw new Error(`The '${claim}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
            }
          }
        }
        const header = this.keyId ? { ...DEFAULT_HEADER, kid: this.keyId } : DEFAULT_HEADER;
        const payload = Object.assign(defaultClaims, additionalClaims);
        const signedJWT = jws.sign({ header, payload, secret: this.key });
        const headers = new Headers({ authorization: `Bearer ${signedJWT}` });
        this.cache.set(key, {
          expiration: exp * 1e3,
          headers
        });
        return headers;
      }
      /**
       * Returns an expiration time for the JWT token.
       *
       * @param iat The issued at time for the JWT.
       * @returns An expiration time for the JWT.
       */
      static getExpirationTime(iat) {
        const exp = iat + 3600;
        return exp;
      }
      /**
       * Create a JWTAccess credentials instance using the given input options.
       * @param json The input object.
       */
      fromJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing the service account auth settings.");
        }
        if (!json.client_email) {
          throw new Error("The incoming JSON object does not contain a client_email field");
        }
        if (!json.private_key) {
          throw new Error("The incoming JSON object does not contain a private_key field");
        }
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
      }
      fromStream(inputStream, callback) {
        if (callback) {
          this.fromStreamAsync(inputStream).then(() => callback(), callback);
        } else {
          return this.fromStreamAsync(inputStream);
        }
      }
      fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            reject(new Error("Must pass in a stream containing the service account auth settings."));
          }
          let s = "";
          inputStream.setEncoding("utf8").on("data", (chunk) => s += chunk).on("error", reject).on("end", () => {
            try {
              const data = JSON.parse(s);
              this.fromJSON(data);
              resolve();
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    };
    exports.JWTAccess = JWTAccess;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/jwtclient.js
var require_jwtclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/jwtclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JWT = void 0;
    var googleToken_1 = require_googleToken();
    var getCredentials_1 = require_getCredentials();
    var jwtaccess_1 = require_jwtaccess();
    var oauth2client_1 = require_oauth2client();
    var authclient_1 = require_authclient();
    var JWT = class _JWT extends oauth2client_1.OAuth2Client {
      email;
      keyFile;
      key;
      keyId;
      defaultScopes;
      scopes;
      scope;
      subject;
      gtoken;
      additionalClaims;
      useJWTAccessWithScope;
      defaultServicePath;
      access;
      /**
       * JWT service account credentials.
       *
       * Retrieve access token using gtoken.
       *
       * @param options the
       */
      constructor(options = {}) {
        super(options);
        this.email = options.email;
        this.keyFile = options.keyFile;
        this.key = options.key;
        this.keyId = options.keyId;
        this.scopes = options.scopes;
        this.subject = options.subject;
        this.additionalClaims = options.additionalClaims;
        this.credentials = { refresh_token: "jwt-placeholder", expiry_date: 1 };
      }
      /**
       * Creates a copy of the credential with the specified scopes.
       * @param scopes List of requested scopes or a single scope.
       * @return The cloned instance.
       */
      createScoped(scopes) {
        const jwt = new _JWT(this);
        jwt.scopes = scopes;
        return jwt;
      }
      /**
       * Obtains the metadata to be sent with the request.
       *
       * @param url the URI being authorized.
       */
      async getRequestMetadataAsync(url) {
        url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
        const useSelfSignedJWT = !this.hasUserScopes() && url || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
        if (this.subject && this.universeDomain !== authclient_1.DEFAULT_UNIVERSE) {
          throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${authclient_1.DEFAULT_UNIVERSE}`);
        }
        if (!this.apiKey && useSelfSignedJWT) {
          if (this.additionalClaims && this.additionalClaims.target_audience) {
            const { tokens } = await this.refreshToken();
            return {
              headers: this.addSharedMetadataHeaders(new Headers({
                authorization: `Bearer ${tokens.id_token}`
              }))
            };
          } else {
            if (!this.access) {
              this.access = new jwtaccess_1.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
            }
            let scopes;
            if (this.hasUserScopes()) {
              scopes = this.scopes;
            } else if (!url) {
              scopes = this.defaultScopes;
            }
            const useScopes = this.useJWTAccessWithScope || this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
            const headers = await this.access.getRequestHeaders(
              url ?? void 0,
              this.additionalClaims,
              // Scopes take precedent over audience for signing,
              // so we only provide them if `useJWTAccessWithScope` is on or
              // if we are in a non-default universe
              useScopes ? scopes : void 0
            );
            return { headers: this.addSharedMetadataHeaders(headers) };
          }
        } else if (this.hasAnyScopes() || this.apiKey) {
          return super.getRequestMetadataAsync(url);
        } else {
          return { headers: new Headers() };
        }
      }
      /**
       * Fetches an ID token.
       * @param targetAudience the audience for the fetched ID token.
       */
      async fetchIdToken(targetAudience) {
        const gtoken = new googleToken_1.GoogleToken({
          iss: this.email,
          sub: this.subject,
          scope: this.scopes || this.defaultScopes,
          keyFile: this.keyFile,
          key: this.key,
          additionalClaims: { target_audience: targetAudience },
          transporter: this.transporter
        });
        await gtoken.getToken({
          forceRefresh: true
        });
        if (!gtoken.idToken) {
          throw new Error("Unknown error: Failed to fetch ID token");
        }
        return gtoken.idToken;
      }
      /**
       * Determine if there are currently scopes available.
       */
      hasUserScopes() {
        if (!this.scopes) {
          return false;
        }
        return this.scopes.length > 0;
      }
      /**
       * Are there any default or user scopes defined.
       */
      hasAnyScopes() {
        if (this.scopes && this.scopes.length > 0)
          return true;
        if (this.defaultScopes && this.defaultScopes.length > 0)
          return true;
        return false;
      }
      authorize(callback) {
        if (callback) {
          this.authorizeAsync().then((r) => callback(null, r), callback);
        } else {
          return this.authorizeAsync();
        }
      }
      async authorizeAsync() {
        const result = await this.refreshToken();
        if (!result) {
          throw new Error("No result returned");
        }
        this.credentials = result.tokens;
        this.credentials.refresh_token = "jwt-placeholder";
        this.key = this.gtoken.googleTokenOptions?.key;
        this.email = this.gtoken.googleTokenOptions?.iss;
        return result.tokens;
      }
      /**
       * Refreshes the access token.
       * @param refreshToken ignored
       * @private
       */
      async refreshTokenNoCache() {
        const gtoken = this.createGToken();
        const token = await gtoken.getToken({
          forceRefresh: this.isTokenExpiring()
        });
        const tokens = {
          access_token: token.access_token,
          token_type: "Bearer",
          expiry_date: gtoken.expiresAt,
          id_token: gtoken.idToken
        };
        this.emit("tokens", tokens);
        return { res: null, tokens };
      }
      /**
       * Create a gToken if it doesn't already exist.
       */
      createGToken() {
        if (!this.gtoken) {
          this.gtoken = new googleToken_1.GoogleToken({
            iss: this.email,
            sub: this.subject,
            scope: this.scopes || this.defaultScopes,
            keyFile: this.keyFile,
            key: this.key,
            additionalClaims: this.additionalClaims,
            transporter: this.transporter
          });
        }
        return this.gtoken;
      }
      /**
       * Create a JWT credentials instance using the given input options.
       * @param json The input object.
       *
       * @remarks
       *
       * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
       */
      fromJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing the service account auth settings.");
        }
        if (!json.client_email) {
          throw new Error("The incoming JSON object does not contain a client_email field");
        }
        if (!json.private_key) {
          throw new Error("The incoming JSON object does not contain a private_key field");
        }
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
        this.quotaProjectId = json.quota_project_id;
        this.universeDomain = json.universe_domain || this.universeDomain;
      }
      fromStream(inputStream, callback) {
        if (callback) {
          this.fromStreamAsync(inputStream).then(() => callback(), callback);
        } else {
          return this.fromStreamAsync(inputStream);
        }
      }
      fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            throw new Error("Must pass in a stream containing the service account auth settings.");
          }
          let s = "";
          inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
            try {
              const data = JSON.parse(s);
              this.fromJSON(data);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        });
      }
      /**
       * Creates a JWT credentials instance using an API Key for authentication.
       * @param apiKey The API Key in string form.
       */
      fromAPIKey(apiKey) {
        if (typeof apiKey !== "string") {
          throw new Error("Must provide an API Key string.");
        }
        this.apiKey = apiKey;
      }
      /**
       * Using the key or keyFile on the JWT client, obtain an object that contains
       * the key and the client email.
       */
      async getCredentials() {
        if (this.key) {
          return { private_key: this.key, client_email: this.email };
        } else if (this.keyFile) {
          const gtoken = this.createGToken();
          const creds = await (0, getCredentials_1.getCredentials)(this.keyFile);
          return { private_key: creds.privateKey, client_email: creds.clientEmail };
        }
        throw new Error("A key or a keyFile must be provided to getCredentials.");
      }
    };
    exports.JWT = JWT;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/refreshclient.js
var require_refreshclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/refreshclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserRefreshClient = exports.USER_REFRESH_ACCOUNT_TYPE = void 0;
    var oauth2client_1 = require_oauth2client();
    var authclient_1 = require_authclient();
    exports.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
    var UserRefreshClient = class _UserRefreshClient extends oauth2client_1.OAuth2Client {
      // TODO: refactor tests to make this private
      // In a future gts release, the _propertyName rule will be lifted.
      // This is also a hard one because `this.refreshToken` is a function.
      _refreshToken;
      /**
       * The User Refresh Token client.
       *
       * @param optionsOrClientId The User Refresh Token client options. Passing an `clientId` directly is **@DEPRECATED**.
       * @param clientSecret **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
       * @param refreshToken **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
       * @param eagerRefreshThresholdMillis **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
       * @param forceRefreshOnFailure **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
       */
      constructor(optionsOrClientId, clientSecret, refreshToken, eagerRefreshThresholdMillis, forceRefreshOnFailure) {
        const opts = optionsOrClientId && typeof optionsOrClientId === "object" ? optionsOrClientId : {
          clientId: optionsOrClientId,
          clientSecret,
          refreshToken,
          eagerRefreshThresholdMillis,
          forceRefreshOnFailure
        };
        super(opts);
        this._refreshToken = opts.refreshToken;
        this.credentials.refresh_token = opts.refreshToken;
      }
      /**
       * Refreshes the access token.
       * @param refreshToken An ignored refreshToken..
       * @param callback Optional callback.
       */
      async refreshTokenNoCache() {
        return super.refreshTokenNoCache(this._refreshToken);
      }
      async fetchIdToken(targetAudience) {
        const opts = {
          ..._UserRefreshClient.RETRY_CONFIG,
          url: this.endpoints.oauth2TokenUrl,
          method: "POST",
          data: new URLSearchParams({
            client_id: this._clientId,
            client_secret: this._clientSecret,
            grant_type: "refresh_token",
            refresh_token: this._refreshToken,
            target_audience: targetAudience
          }),
          responseType: "json"
        };
        authclient_1.AuthClient.setMethodName(opts, "fetchIdToken");
        const res = await this.transporter.request(opts);
        return res.data.id_token;
      }
      /**
       * Create a UserRefreshClient credentials instance using the given input
       * options.
       * @param json The input object.
       */
      fromJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing the user refresh token");
        }
        if (json.type !== "authorized_user") {
          throw new Error('The incoming JSON object does not have the "authorized_user" type');
        }
        if (!json.client_id) {
          throw new Error("The incoming JSON object does not contain a client_id field");
        }
        if (!json.client_secret) {
          throw new Error("The incoming JSON object does not contain a client_secret field");
        }
        if (!json.refresh_token) {
          throw new Error("The incoming JSON object does not contain a refresh_token field");
        }
        this._clientId = json.client_id;
        this._clientSecret = json.client_secret;
        this._refreshToken = json.refresh_token;
        this.credentials.refresh_token = json.refresh_token;
        this.quotaProjectId = json.quota_project_id;
        this.universeDomain = json.universe_domain || this.universeDomain;
      }
      fromStream(inputStream, callback) {
        if (callback) {
          this.fromStreamAsync(inputStream).then(() => callback(), callback);
        } else {
          return this.fromStreamAsync(inputStream);
        }
      }
      async fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            return reject(new Error("Must pass in a stream containing the user refresh token."));
          }
          let s = "";
          inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
            try {
              const data = JSON.parse(s);
              this.fromJSON(data);
              return resolve();
            } catch (err) {
              return reject(err);
            }
          });
        });
      }
      /**
       * Create a UserRefreshClient credentials instance using the given input
       * options.
       * @param json The input object.
       */
      static fromJSON(json) {
        const client = new _UserRefreshClient();
        client.fromJSON(json);
        return client;
      }
    };
    exports.UserRefreshClient = UserRefreshClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/impersonated.js
var require_impersonated = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/impersonated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Impersonated = exports.IMPERSONATED_ACCOUNT_TYPE = void 0;
    var oauth2client_1 = require_oauth2client();
    var gaxios_1 = require_src();
    var util_1 = require_util2();
    exports.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
    var Impersonated = class _Impersonated extends oauth2client_1.OAuth2Client {
      sourceClient;
      targetPrincipal;
      targetScopes;
      delegates;
      lifetime;
      endpoint;
      /**
       * Impersonated service account credentials.
       *
       * Create a new access token by impersonating another service account.
       *
       * Impersonated Credentials allowing credentials issued to a user or
       * service account to impersonate another. The source project using
       * Impersonated Credentials must enable the "IAMCredentials" API.
       * Also, the target service account must grant the orginating principal
       * the "Service Account Token Creator" IAM role.
       *
       * **IMPORTANT**: This method does not validate the credential configuration.
       * A security risk occurs when a credential configuration configured with
       * malicious URLs is used. When the credential configuration is accepted from
       * an untrusted source, you should validate it before using it with this
       * method. For more details, see
       * https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
       *
       * @param {object} options - The configuration object.
       * @param {object} [options.sourceClient] the source credential used as to
       * acquire the impersonated credentials.
       * @param {string} [options.targetPrincipal] the service account to
       * impersonate.
       * @param {string[]} [options.delegates] the chained list of delegates
       * required to grant the final access_token. If set, the sequence of
       * identities must have "Service Account Token Creator" capability granted to
       * the preceding identity. For example, if set to [serviceAccountB,
       * serviceAccountC], the sourceCredential must have the Token Creator role on
       * serviceAccountB. serviceAccountB must have the Token Creator on
       * serviceAccountC. Finally, C must have Token Creator on target_principal.
       * If left unset, sourceCredential must have that role on targetPrincipal.
       * @param {string[]} [options.targetScopes] scopes to request during the
       * authorization grant.
       * @param {number} [options.lifetime] number of seconds the delegated
       * credential should be valid for up to 3600 seconds by default, or 43,200
       * seconds by extending the token's lifetime, see:
       * https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-oauth
       * @param {string} [options.endpoint] api endpoint override.
       */
      constructor(options = {}) {
        super(options);
        this.credentials = {
          expiry_date: 1,
          refresh_token: "impersonated-placeholder"
        };
        this.sourceClient = options.sourceClient ?? new oauth2client_1.OAuth2Client();
        this.targetPrincipal = options.targetPrincipal ?? "";
        this.delegates = options.delegates ?? [];
        this.targetScopes = options.targetScopes ?? [];
        this.lifetime = options.lifetime ?? 3600;
        const usingExplicitUniverseDomain = !!(0, util_1.originalOrCamelOptions)(options).get("universe_domain");
        if (!usingExplicitUniverseDomain) {
          this.universeDomain = this.sourceClient.universeDomain;
        } else if (this.sourceClient.universeDomain !== this.universeDomain) {
          throw new RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
        }
        this.endpoint = options.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
      }
      /**
       * Signs some bytes.
       *
       * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/signBlob Reference Documentation}
       * @param blobToSign String to sign.
       *
       * @returns A {@link SignBlobResponse} denoting the keyID and signedBlob in base64 string
       */
      async sign(blobToSign) {
        await this.sourceClient.getAccessToken();
        const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
        const u = `${this.endpoint}/v1/${name}:signBlob`;
        const body = {
          delegates: this.delegates,
          payload: Buffer.from(blobToSign).toString("base64")
        };
        const res = await this.sourceClient.request({
          ..._Impersonated.RETRY_CONFIG,
          url: u,
          data: body,
          method: "POST"
        });
        return res.data;
      }
      /** The service account email to be impersonated. */
      getTargetPrincipal() {
        return this.targetPrincipal;
      }
      /**
       * Refreshes the access token.
       */
      async refreshToken() {
        try {
          await this.sourceClient.getAccessToken();
          const name = "projects/-/serviceAccounts/" + this.targetPrincipal;
          const u = `${this.endpoint}/v1/${name}:generateAccessToken`;
          const body = {
            delegates: this.delegates,
            scope: this.targetScopes,
            lifetime: this.lifetime + "s"
          };
          const res = await this.sourceClient.request({
            ..._Impersonated.RETRY_CONFIG,
            url: u,
            data: body,
            method: "POST"
          });
          const tokenResponse = res.data;
          this.credentials.access_token = tokenResponse.accessToken;
          this.credentials.expiry_date = Date.parse(tokenResponse.expireTime);
          return {
            tokens: this.credentials,
            res
          };
        } catch (error) {
          if (!(error instanceof Error))
            throw error;
          let status = 0;
          let message = "";
          if (error instanceof gaxios_1.GaxiosError) {
            status = error?.response?.data?.error?.status;
            message = error?.response?.data?.error?.message;
          }
          if (status && message) {
            error.message = `${status}: unable to impersonate: ${message}`;
            throw error;
          } else {
            error.message = `unable to impersonate: ${error}`;
            throw error;
          }
        }
      }
      /**
       * Generates an OpenID Connect ID token for a service account.
       *
       * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/generateIdToken Reference Documentation}
       *
       * @param targetAudience the audience for the fetched ID token.
       * @param options the for the request
       * @return an OpenID Connect ID token
       */
      async fetchIdToken(targetAudience, options) {
        await this.sourceClient.getAccessToken();
        const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
        const u = `${this.endpoint}/v1/${name}:generateIdToken`;
        const body = {
          delegates: this.delegates,
          audience: targetAudience,
          includeEmail: options?.includeEmail ?? true,
          useEmailAzp: options?.includeEmail ?? true
        };
        const res = await this.sourceClient.request({
          ..._Impersonated.RETRY_CONFIG,
          url: u,
          data: body,
          method: "POST"
        });
        return res.data.token;
      }
    };
    exports.Impersonated = Impersonated;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/oauth2common.js
var require_oauth2common = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/oauth2common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthClientAuthHandler = void 0;
    exports.getErrorFromOAuthErrorResponse = getErrorFromOAuthErrorResponse;
    var gaxios_1 = require_src();
    var crypto_1 = require_crypto3();
    var METHODS_SUPPORTING_REQUEST_BODY = ["PUT", "POST", "PATCH"];
    var OAuthClientAuthHandler = class {
      #crypto = (0, crypto_1.createCrypto)();
      #clientAuthentication;
      transporter;
      /**
       * Instantiates an OAuth client authentication handler.
       * @param options The OAuth Client Auth Handler instance options. Passing an `ClientAuthentication` directly is **@DEPRECATED**.
       */
      constructor(options) {
        if (options && "clientId" in options) {
          this.#clientAuthentication = options;
          this.transporter = new gaxios_1.Gaxios();
        } else {
          this.#clientAuthentication = options?.clientAuthentication;
          this.transporter = options?.transporter || new gaxios_1.Gaxios();
        }
      }
      /**
       * Applies client authentication on the OAuth request's headers or POST
       * body but does not process the request.
       * @param opts The GaxiosOptions whose headers or data are to be modified
       *   depending on the client authentication mechanism to be used.
       * @param bearerToken The optional bearer token to use for authentication.
       *   When this is used, no client authentication credentials are needed.
       */
      applyClientAuthenticationOptions(opts, bearerToken) {
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
        this.injectAuthenticatedHeaders(opts, bearerToken);
        if (!bearerToken) {
          this.injectAuthenticatedRequestBody(opts);
        }
      }
      /**
       * Applies client authentication on the request's header if either
       * basic authentication or bearer token authentication is selected.
       *
       * @param opts The GaxiosOptions whose headers or data are to be modified
       *   depending on the client authentication mechanism to be used.
       * @param bearerToken The optional bearer token to use for authentication.
       *   When this is used, no client authentication credentials are needed.
       */
      injectAuthenticatedHeaders(opts, bearerToken) {
        if (bearerToken) {
          opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers, {
            authorization: `Bearer ${bearerToken}`
          });
        } else if (this.#clientAuthentication?.confidentialClientType === "basic") {
          opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
          const clientId = this.#clientAuthentication.clientId;
          const clientSecret = this.#clientAuthentication.clientSecret || "";
          const base64EncodedCreds = this.#crypto.encodeBase64StringUtf8(`${clientId}:${clientSecret}`);
          gaxios_1.Gaxios.mergeHeaders(opts.headers, {
            authorization: `Basic ${base64EncodedCreds}`
          });
        }
      }
      /**
       * Applies client authentication on the request's body if request-body
       * client authentication is selected.
       *
       * @param opts The GaxiosOptions whose headers or data are to be modified
       *   depending on the client authentication mechanism to be used.
       */
      injectAuthenticatedRequestBody(opts) {
        if (this.#clientAuthentication?.confidentialClientType === "request-body") {
          const method = (opts.method || "GET").toUpperCase();
          if (!METHODS_SUPPORTING_REQUEST_BODY.includes(method)) {
            throw new Error(`${method} HTTP method does not support ${this.#clientAuthentication.confidentialClientType} client authentication`);
          }
          const headers = new Headers(opts.headers);
          const contentType = headers.get("content-type");
          if (contentType?.startsWith("application/x-www-form-urlencoded") || opts.data instanceof URLSearchParams) {
            const data = new URLSearchParams(opts.data ?? "");
            data.append("client_id", this.#clientAuthentication.clientId);
            data.append("client_secret", this.#clientAuthentication.clientSecret || "");
            opts.data = data;
          } else if (contentType?.startsWith("application/json")) {
            opts.data = opts.data || {};
            Object.assign(opts.data, {
              client_id: this.#clientAuthentication.clientId,
              client_secret: this.#clientAuthentication.clientSecret || ""
            });
          } else {
            throw new Error(`${contentType} content-types are not supported with ${this.#clientAuthentication.confidentialClientType} client authentication`);
          }
        }
      }
      /**
       * Retry config for Auth-related requests.
       *
       * @remarks
       *
       * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
       * config as some downstream APIs would prefer if customers explicitly enable retries,
       * such as GCS.
       */
      static get RETRY_CONFIG() {
        return {
          retry: true,
          retryConfig: {
            httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
          }
        };
      }
    };
    exports.OAuthClientAuthHandler = OAuthClientAuthHandler;
    function getErrorFromOAuthErrorResponse(resp, err) {
      const errorCode = resp.error;
      const errorDescription = resp.error_description;
      const errorUri = resp.error_uri;
      let message = `Error code ${errorCode}`;
      if (typeof errorDescription !== "undefined") {
        message += `: ${errorDescription}`;
      }
      if (typeof errorUri !== "undefined") {
        message += ` - ${errorUri}`;
      }
      const newError = new Error(message);
      if (err) {
        const keys = Object.keys(err);
        if (err.stack) {
          keys.push("stack");
        }
        keys.forEach((key) => {
          if (key !== "message") {
            Object.defineProperty(newError, key, {
              value: err[key],
              writable: false,
              enumerable: true
            });
          }
        });
      }
      return newError;
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/stscredentials.js
var require_stscredentials = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/stscredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StsCredentials = void 0;
    var gaxios_1 = require_src();
    var authclient_1 = require_authclient();
    var oauth2common_1 = require_oauth2common();
    var util_1 = require_util2();
    var StsCredentials = class _StsCredentials extends oauth2common_1.OAuthClientAuthHandler {
      #tokenExchangeEndpoint;
      /**
       * Initializes an STS credentials instance.
       *
       * @param options The STS credentials instance options. Passing an `tokenExchangeEndpoint` directly is **@DEPRECATED**.
       * @param clientAuthentication **@DEPRECATED**. Provide a {@link StsCredentialsConstructionOptions `StsCredentialsConstructionOptions`} object in the first parameter instead.
       */
      constructor(options = {
        tokenExchangeEndpoint: ""
      }, clientAuthentication) {
        if (typeof options !== "object" || options instanceof URL) {
          options = {
            tokenExchangeEndpoint: options,
            clientAuthentication
          };
        }
        super(options);
        this.#tokenExchangeEndpoint = options.tokenExchangeEndpoint;
      }
      /**
       * Exchanges the provided token for another type of token based on the
       * rfc8693 spec.
       * @param stsCredentialsOptions The token exchange options used to populate
       *   the token exchange request.
       * @param additionalHeaders Optional additional headers to pass along the
       *   request.
       * @param options Optional additional GCP-specific non-spec defined options
       *   to send with the request.
       *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
       * @return A promise that resolves with the token exchange response containing
       *   the requested token and its expiration time.
       */
      async exchangeToken(stsCredentialsOptions, headers, options) {
        const values = {
          grant_type: stsCredentialsOptions.grantType,
          resource: stsCredentialsOptions.resource,
          audience: stsCredentialsOptions.audience,
          scope: stsCredentialsOptions.scope?.join(" "),
          requested_token_type: stsCredentialsOptions.requestedTokenType,
          subject_token: stsCredentialsOptions.subjectToken,
          subject_token_type: stsCredentialsOptions.subjectTokenType,
          actor_token: stsCredentialsOptions.actingParty?.actorToken,
          actor_token_type: stsCredentialsOptions.actingParty?.actorTokenType,
          // Non-standard GCP-specific options.
          options: options && JSON.stringify(options)
        };
        const opts = {
          ..._StsCredentials.RETRY_CONFIG,
          url: this.#tokenExchangeEndpoint.toString(),
          method: "POST",
          headers,
          data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(values)),
          responseType: "json"
        };
        authclient_1.AuthClient.setMethodName(opts, "exchangeToken");
        this.applyClientAuthenticationOptions(opts);
        try {
          const response = await this.transporter.request(opts);
          const stsSuccessfulResponse = response.data;
          stsSuccessfulResponse.res = response;
          return stsSuccessfulResponse;
        } catch (error) {
          if (error instanceof gaxios_1.GaxiosError && error.response) {
            throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(
              error.response.data,
              // Preserve other fields from the original error.
              error
            );
          }
          throw error;
        }
      }
    };
    exports.StsCredentials = StsCredentials;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/baseexternalclient.js
var require_baseexternalclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/baseexternalclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseExternalAccountClient = exports.CLOUD_RESOURCE_MANAGER = exports.EXTERNAL_ACCOUNT_TYPE = exports.EXPIRATION_TIME_OFFSET = void 0;
    var gaxios_1 = require_src();
    var stream = __require("stream");
    var authclient_1 = require_authclient();
    var sts = require_stscredentials();
    var util_1 = require_util2();
    var shared_cjs_1 = require_shared2();
    var STS_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
    var STS_REQUEST_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
    var DEFAULT_OAUTH_SCOPE = "https://www.googleapis.com/auth/cloud-platform";
    var DEFAULT_TOKEN_LIFESPAN = 3600;
    exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1e3;
    exports.EXTERNAL_ACCOUNT_TYPE = "external_account";
    exports.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
    var WORKFORCE_AUDIENCE_PATTERN = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+";
    var DEFAULT_TOKEN_URL = "https://sts.{universeDomain}/v1/token";
    var BaseExternalAccountClient = class _BaseExternalAccountClient extends authclient_1.AuthClient {
      /**
       * OAuth scopes for the GCP access token to use. When not provided,
       * the default https://www.googleapis.com/auth/cloud-platform is
       * used.
       */
      scopes;
      projectNumber;
      audience;
      subjectTokenType;
      stsCredential;
      clientAuth;
      credentialSourceType;
      cachedAccessToken;
      serviceAccountImpersonationUrl;
      serviceAccountImpersonationLifetime;
      workforcePoolUserProject;
      configLifetimeRequested;
      tokenUrl;
      /**
       * @example
       * ```ts
       * new URL('https://cloudresourcemanager.googleapis.com/v1/projects/');
       * ```
       */
      cloudResourceManagerURL;
      supplierContext;
      /**
       * A pending access token request. Used for concurrent calls.
       */
      #pendingAccessToken = null;
      /**
       * Instantiate a BaseExternalAccountClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file. The camelCased options
       *   are aliases for the snake_cased options.
       */
      constructor(options) {
        super(options);
        const opts = (0, util_1.originalOrCamelOptions)(options);
        const type = opts.get("type");
        if (type && type !== exports.EXTERNAL_ACCOUNT_TYPE) {
          throw new Error(`Expected "${exports.EXTERNAL_ACCOUNT_TYPE}" type but received "${options.type}"`);
        }
        const clientId = opts.get("client_id");
        const clientSecret = opts.get("client_secret");
        this.tokenUrl = opts.get("token_url") ?? DEFAULT_TOKEN_URL.replace("{universeDomain}", this.universeDomain);
        const subjectTokenType = opts.get("subject_token_type");
        const workforcePoolUserProject = opts.get("workforce_pool_user_project");
        const serviceAccountImpersonationUrl = opts.get("service_account_impersonation_url");
        const serviceAccountImpersonation = opts.get("service_account_impersonation");
        const serviceAccountImpersonationLifetime = (0, util_1.originalOrCamelOptions)(serviceAccountImpersonation).get("token_lifetime_seconds");
        this.cloudResourceManagerURL = new URL(opts.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`);
        if (clientId) {
          this.clientAuth = {
            confidentialClientType: "basic",
            clientId,
            clientSecret
          };
        }
        this.stsCredential = new sts.StsCredentials({
          tokenExchangeEndpoint: this.tokenUrl,
          clientAuthentication: this.clientAuth
        });
        this.scopes = opts.get("scopes") || [DEFAULT_OAUTH_SCOPE];
        this.cachedAccessToken = null;
        this.audience = opts.get("audience");
        this.subjectTokenType = subjectTokenType;
        this.workforcePoolUserProject = workforcePoolUserProject;
        const workforceAudiencePattern = new RegExp(WORKFORCE_AUDIENCE_PATTERN);
        if (this.workforcePoolUserProject && !this.audience.match(workforceAudiencePattern)) {
          throw new Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
        }
        this.serviceAccountImpersonationUrl = serviceAccountImpersonationUrl;
        this.serviceAccountImpersonationLifetime = serviceAccountImpersonationLifetime;
        if (this.serviceAccountImpersonationLifetime) {
          this.configLifetimeRequested = true;
        } else {
          this.configLifetimeRequested = false;
          this.serviceAccountImpersonationLifetime = DEFAULT_TOKEN_LIFESPAN;
        }
        this.projectNumber = this.getProjectNumber(this.audience);
        this.supplierContext = {
          audience: this.audience,
          subjectTokenType: this.subjectTokenType,
          transporter: this.transporter
        };
      }
      /** The service account email to be impersonated, if available. */
      getServiceAccountEmail() {
        if (this.serviceAccountImpersonationUrl) {
          if (this.serviceAccountImpersonationUrl.length > 256) {
            throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
          }
          const re = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/;
          const result = re.exec(this.serviceAccountImpersonationUrl);
          return result?.groups?.email || null;
        }
        return null;
      }
      /**
       * Provides a mechanism to inject GCP access tokens directly.
       * When the provided credential expires, a new credential, using the
       * external account options, is retrieved.
       * @param credentials The Credentials object to set on the current client.
       */
      setCredentials(credentials) {
        super.setCredentials(credentials);
        this.cachedAccessToken = credentials;
      }
      /**
       * @return A promise that resolves with the current GCP access token
       *   response. If the current credential is expired, a new one is retrieved.
       */
      async getAccessToken() {
        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
          await this.refreshAccessTokenAsync();
        }
        return {
          token: this.cachedAccessToken.access_token,
          res: this.cachedAccessToken.res
        };
      }
      /**
       * The main authentication interface. It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * The result has the form:
       * { authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = new Headers({
          authorization: `Bearer ${accessTokenResponse.token}`
        });
        return this.addSharedMetadataHeaders(headers);
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      /**
       * @return A promise that resolves with the project ID corresponding to the
       *   current workload identity pool or current workforce pool if
       *   determinable. For workforce pool credential, it returns the project ID
       *   corresponding to the workforcePoolUserProject.
       *   This is introduced to match the current pattern of using the Auth
       *   library:
       *   const projectId = await auth.getProjectId();
       *   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
       *   const res = await client.request({ url });
       *   The resource may not have permission
       *   (resourcemanager.projects.get) to call this API or the required
       *   scopes may not be selected:
       *   https://cloud.google.com/resource-manager/reference/rest/v1/projects/get#authorization-scopes
       */
      async getProjectId() {
        const projectNumber = this.projectNumber || this.workforcePoolUserProject;
        if (this.projectId) {
          return this.projectId;
        } else if (projectNumber) {
          const headers = await this.getRequestHeaders();
          const opts = {
            ..._BaseExternalAccountClient.RETRY_CONFIG,
            headers,
            url: `${this.cloudResourceManagerURL.toString()}${projectNumber}`,
            responseType: "json"
          };
          authclient_1.AuthClient.setMethodName(opts, "getProjectId");
          const response = await this.transporter.request(opts);
          this.projectId = response.data.projectId;
          return this.projectId;
        }
        return null;
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
          const requestHeaders = await this.getRequestHeaders();
          opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
          this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
          response = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
              await this.refreshAccessTokenAsync();
              return await this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return response;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * External credentials are exchanged for GCP access tokens via the token
       * exchange endpoint and other settings provided in the client options
       * object.
       * If the service_account_impersonation_url is provided, an additional
       * step to exchange the external account GCP access token for a service
       * account impersonated token is performed.
       * @return A promise that resolves with the fresh GCP access tokens.
       */
      async refreshAccessTokenAsync() {
        this.#pendingAccessToken = this.#pendingAccessToken || this.#internalRefreshAccessTokenAsync();
        try {
          return await this.#pendingAccessToken;
        } finally {
          this.#pendingAccessToken = null;
        }
      }
      async #internalRefreshAccessTokenAsync() {
        const subjectToken = await this.retrieveSubjectToken();
        const stsCredentialsOptions = {
          grantType: STS_GRANT_TYPE,
          audience: this.audience,
          requestedTokenType: STS_REQUEST_TOKEN_TYPE,
          subjectToken,
          subjectTokenType: this.subjectTokenType,
          // generateAccessToken requires the provided access token to have
          // scopes:
          // https://www.googleapis.com/auth/iam or
          // https://www.googleapis.com/auth/cloud-platform
          // The new service account access token scopes will match the user
          // provided ones.
          scope: this.serviceAccountImpersonationUrl ? [DEFAULT_OAUTH_SCOPE] : this.getScopesArray()
        };
        const additionalOptions = !this.clientAuth && this.workforcePoolUserProject ? { userProject: this.workforcePoolUserProject } : void 0;
        const additionalHeaders = new Headers({
          "x-goog-api-client": this.getMetricsHeaderValue()
        });
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, additionalHeaders, additionalOptions);
        if (this.serviceAccountImpersonationUrl) {
          this.cachedAccessToken = await this.getImpersonatedAccessToken(stsResponse.access_token);
        } else if (stsResponse.expires_in) {
          this.cachedAccessToken = {
            access_token: stsResponse.access_token,
            expiry_date: (/* @__PURE__ */ new Date()).getTime() + stsResponse.expires_in * 1e3,
            res: stsResponse.res
          };
        } else {
          this.cachedAccessToken = {
            access_token: stsResponse.access_token,
            res: stsResponse.res
          };
        }
        this.credentials = {};
        Object.assign(this.credentials, this.cachedAccessToken);
        delete this.credentials.res;
        this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedAccessToken.expiry_date,
          access_token: this.cachedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null
        });
        return this.cachedAccessToken;
      }
      /**
       * Returns the workload identity pool project number if it is determinable
       * from the audience resource name.
       * @param audience The STS audience used to determine the project number.
       * @return The project number associated with the workload identity pool, if
       *   this can be determined from the STS audience field. Otherwise, null is
       *   returned.
       */
      getProjectNumber(audience) {
        const match = audience.match(/\/projects\/([^/]+)/);
        if (!match) {
          return null;
        }
        return match[1];
      }
      /**
       * Exchanges an external account GCP access token for a service
       * account impersonated access token using iamcredentials
       * GenerateAccessToken API.
       * @param token The access token to exchange for a service account access
       *   token.
       * @return A promise that resolves with the service account impersonated
       *   credentials response.
       */
      async getImpersonatedAccessToken(token) {
        const opts = {
          ..._BaseExternalAccountClient.RETRY_CONFIG,
          url: this.serviceAccountImpersonationUrl,
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
          },
          data: {
            scope: this.getScopesArray(),
            lifetime: this.serviceAccountImpersonationLifetime + "s"
          },
          responseType: "json"
        };
        authclient_1.AuthClient.setMethodName(opts, "getImpersonatedAccessToken");
        const response = await this.transporter.request(opts);
        const successResponse = response.data;
        return {
          access_token: successResponse.accessToken,
          // Convert from ISO format to timestamp.
          expiry_date: new Date(successResponse.expireTime).getTime(),
          res: response
        };
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param accessToken The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(accessToken) {
        const now = (/* @__PURE__ */ new Date()).getTime();
        return accessToken.expiry_date ? now >= accessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
      }
      /**
       * @return The list of scopes for the requested GCP access token.
       */
      getScopesArray() {
        if (typeof this.scopes === "string") {
          return [this.scopes];
        }
        return this.scopes || [DEFAULT_OAUTH_SCOPE];
      }
      getMetricsHeaderValue() {
        const nodeVersion = process.version.replace(/^v/, "");
        const saImpersonation = this.serviceAccountImpersonationUrl !== void 0;
        const credentialSourceType = this.credentialSourceType ? this.credentialSourceType : "unknown";
        return `gl-node/${nodeVersion} auth/${shared_cjs_1.pkg.version} google-byoid-sdk source/${credentialSourceType} sa-impersonation/${saImpersonation} config-lifetime/${this.configLifetimeRequested}`;
      }
      getTokenUrl() {
        return this.tokenUrl;
      }
    };
    exports.BaseExternalAccountClient = BaseExternalAccountClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/filesubjecttokensupplier.js
var require_filesubjecttokensupplier = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/filesubjecttokensupplier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileSubjectTokenSupplier = void 0;
    var util_1 = __require("util");
    var fs = __require("fs");
    var readFile = (0, util_1.promisify)(fs.readFile ?? (() => {
    }));
    var realpath = (0, util_1.promisify)(fs.realpath ?? (() => {
    }));
    var lstat = (0, util_1.promisify)(fs.lstat ?? (() => {
    }));
    var FileSubjectTokenSupplier = class {
      filePath;
      formatType;
      subjectTokenFieldName;
      /**
       * Instantiates a new file based subject token supplier.
       * @param opts The file subject token supplier options to build the supplier
       *   with.
       */
      constructor(opts) {
        this.filePath = opts.filePath;
        this.formatType = opts.formatType;
        this.subjectTokenFieldName = opts.subjectTokenFieldName;
      }
      /**
       * Returns the subject token stored at the file specified in the constructor.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link IdentityPoolClient}, contains the requested audience and subject
       *   token type for the external account identity. Not used.
       */
      async getSubjectToken() {
        let parsedFilePath = this.filePath;
        try {
          parsedFilePath = await realpath(parsedFilePath);
          if (!(await lstat(parsedFilePath)).isFile()) {
            throw new Error();
          }
        } catch (err) {
          if (err instanceof Error) {
            err.message = `The file at ${parsedFilePath} does not exist, or it is not a file. ${err.message}`;
          }
          throw err;
        }
        let subjectToken;
        const rawText = await readFile(parsedFilePath, { encoding: "utf8" });
        if (this.formatType === "text") {
          subjectToken = rawText;
        } else if (this.formatType === "json" && this.subjectTokenFieldName) {
          const json = JSON.parse(rawText);
          subjectToken = json[this.subjectTokenFieldName];
        }
        if (!subjectToken) {
          throw new Error("Unable to parse the subject_token from the credential_source file");
        }
        return subjectToken;
      }
    };
    exports.FileSubjectTokenSupplier = FileSubjectTokenSupplier;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/urlsubjecttokensupplier.js
var require_urlsubjecttokensupplier = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/urlsubjecttokensupplier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UrlSubjectTokenSupplier = void 0;
    var authclient_1 = require_authclient();
    var UrlSubjectTokenSupplier = class {
      url;
      headers;
      formatType;
      subjectTokenFieldName;
      additionalGaxiosOptions;
      /**
       * Instantiates a URL subject token supplier.
       * @param opts The URL subject token supplier options to build the supplier with.
       */
      constructor(opts) {
        this.url = opts.url;
        this.formatType = opts.formatType;
        this.subjectTokenFieldName = opts.subjectTokenFieldName;
        this.headers = opts.headers;
        this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
      }
      /**
       * Sends a GET request to the URL provided in the constructor and resolves
       * with the returned external subject token.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link IdentityPoolClient}, contains the requested audience and subject
       *   token type for the external account identity. Not used.
       */
      async getSubjectToken(context) {
        const opts = {
          ...this.additionalGaxiosOptions,
          url: this.url,
          method: "GET",
          headers: this.headers,
          responseType: this.formatType
        };
        authclient_1.AuthClient.setMethodName(opts, "getSubjectToken");
        let subjectToken;
        if (this.formatType === "text") {
          const response = await context.transporter.request(opts);
          subjectToken = response.data;
        } else if (this.formatType === "json" && this.subjectTokenFieldName) {
          const response = await context.transporter.request(opts);
          subjectToken = response.data[this.subjectTokenFieldName];
        }
        if (!subjectToken) {
          throw new Error("Unable to parse the subject_token from the credential_source URL");
        }
        return subjectToken;
      }
    };
    exports.UrlSubjectTokenSupplier = UrlSubjectTokenSupplier;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/certificatesubjecttokensupplier.js
var require_certificatesubjecttokensupplier = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/certificatesubjecttokensupplier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CertificateSubjectTokenSupplier = exports.InvalidConfigurationError = exports.CertificateSourceUnavailableError = exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = void 0;
    var util_1 = require_util2();
    var fs = __require("fs");
    var crypto_1 = __require("crypto");
    var https = __require("https");
    exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";
    var CertificateSourceUnavailableError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "CertificateSourceUnavailableError";
      }
    };
    exports.CertificateSourceUnavailableError = CertificateSourceUnavailableError;
    var InvalidConfigurationError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "InvalidConfigurationError";
      }
    };
    exports.InvalidConfigurationError = InvalidConfigurationError;
    var CertificateSubjectTokenSupplier = class {
      certificateConfigPath;
      trustChainPath;
      cert;
      key;
      /**
       * Initializes a new instance of the CertificateSubjectTokenSupplier.
       * @param opts The configuration options for the supplier.
       */
      constructor(opts) {
        if (!opts.useDefaultCertificateConfig && !opts.certificateConfigLocation) {
          throw new InvalidConfigurationError("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
        }
        if (opts.useDefaultCertificateConfig && opts.certificateConfigLocation) {
          throw new InvalidConfigurationError("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
        }
        this.trustChainPath = opts.trustChainPath;
        this.certificateConfigPath = opts.certificateConfigLocation ?? "";
      }
      /**
       * Creates an HTTPS agent configured with the client certificate and private key for mTLS.
       * @returns An mTLS-configured https.Agent.
       */
      async createMtlsHttpsAgent() {
        if (!this.key || !this.cert) {
          throw new InvalidConfigurationError("Cannot create mTLS Agent with missing certificate or key");
        }
        return new https.Agent({ key: this.key, cert: this.cert });
      }
      /**
       * Constructs the subject token, which is the base64-encoded certificate chain.
       * @returns A promise that resolves with the subject token.
       */
      async getSubjectToken() {
        this.certificateConfigPath = await this.#resolveCertificateConfigFilePath();
        const { certPath, keyPath } = await this.#getCertAndKeyPaths();
        ({ cert: this.cert, key: this.key } = await this.#getKeyAndCert(certPath, keyPath));
        return await this.#processChainFromPaths(this.cert);
      }
      /**
       * Resolves the absolute path to the certificate configuration file
       * by checking the "certificate_config_location" provided in the ADC file,
       * or the "GOOGLE_API_CERTIFICATE_CONFIG" environment variable
       * or in the default gcloud path.
       * @param overridePath An optional path to check first.
       * @returns The resolved file path.
       */
      async #resolveCertificateConfigFilePath() {
        const overridePath = this.certificateConfigPath;
        if (overridePath) {
          if (await (0, util_1.isValidFile)(overridePath)) {
            return overridePath;
          }
          throw new CertificateSourceUnavailableError(`Provided certificate config path is invalid: ${overridePath}`);
        }
        const envPath = process.env[exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
        if (envPath) {
          if (await (0, util_1.isValidFile)(envPath)) {
            return envPath;
          }
          throw new CertificateSourceUnavailableError(`Path from environment variable "${exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${envPath}`);
        }
        const wellKnownPath = (0, util_1.getWellKnownCertificateConfigFileLocation)();
        if (await (0, util_1.isValidFile)(wellKnownPath)) {
          return wellKnownPath;
        }
        throw new CertificateSourceUnavailableError(`Could not find certificate configuration file. Searched override path, the "${exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${wellKnownPath}).`);
      }
      /**
       * Reads and parses the certificate config JSON file to extract the certificate and key paths.
       * @returns An object containing the certificate and key paths.
       */
      async #getCertAndKeyPaths() {
        const configPath = this.certificateConfigPath;
        let fileContents;
        try {
          fileContents = await fs.promises.readFile(configPath, "utf8");
        } catch (err) {
          throw new CertificateSourceUnavailableError(`Failed to read certificate config file at: ${configPath}`);
        }
        try {
          const config = JSON.parse(fileContents);
          const certPath = config?.cert_configs?.workload?.cert_path;
          const keyPath = config?.cert_configs?.workload?.key_path;
          if (!certPath || !keyPath) {
            throw new InvalidConfigurationError(`Certificate config file (${configPath}) is missing required "cert_path" or "key_path" in the workload config.`);
          }
          return { certPath, keyPath };
        } catch (e) {
          if (e instanceof InvalidConfigurationError)
            throw e;
          throw new InvalidConfigurationError(`Failed to parse certificate config from ${configPath}: ${e.message}`);
        }
      }
      /**
       * Reads and parses the cert and key files get their content and check valid format.
       * @returns An object containing the cert content and key content in buffer format.
       */
      async #getKeyAndCert(certPath, keyPath) {
        let cert, key;
        try {
          cert = await fs.promises.readFile(certPath);
          new crypto_1.X509Certificate(cert);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          throw new CertificateSourceUnavailableError(`Failed to read certificate file at ${certPath}: ${message}`);
        }
        try {
          key = await fs.promises.readFile(keyPath);
          (0, crypto_1.createPrivateKey)(key);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          throw new CertificateSourceUnavailableError(`Failed to read private key file at ${keyPath}: ${message}`);
        }
        return { cert, key };
      }
      /**
       * Reads the leaf certificate and trust chain, combines them,
       * and returns a JSON array of base64-encoded certificates.
       * @returns A stringified JSON array of the certificate chain.
       */
      async #processChainFromPaths(leafCertBuffer) {
        const leafCert = new crypto_1.X509Certificate(leafCertBuffer);
        if (!this.trustChainPath) {
          return JSON.stringify([leafCert.raw.toString("base64")]);
        }
        try {
          const chainPems = await fs.promises.readFile(this.trustChainPath, "utf8");
          const pemBlocks = chainPems.match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? [];
          const chainCerts = pemBlocks.map((pem, index) => {
            try {
              return new crypto_1.X509Certificate(pem);
            } catch (err) {
              const message = err instanceof Error ? err.message : String(err);
              throw new InvalidConfigurationError(`Failed to parse certificate at index ${index} in trust chain file ${this.trustChainPath}: ${message}`);
            }
          });
          const leafIndex = chainCerts.findIndex((chainCert) => leafCert.raw.equals(chainCert.raw));
          let finalChain;
          if (leafIndex === -1) {
            finalChain = [leafCert, ...chainCerts];
          } else if (leafIndex === 0) {
            finalChain = chainCerts;
          } else {
            throw new InvalidConfigurationError(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${leafIndex}).`);
          }
          return JSON.stringify(finalChain.map((cert) => cert.raw.toString("base64")));
        } catch (err) {
          if (err instanceof InvalidConfigurationError)
            throw err;
          const message = err instanceof Error ? err.message : String(err);
          throw new CertificateSourceUnavailableError(`Failed to process certificate chain from ${this.trustChainPath}: ${message}`);
        }
      }
    };
    exports.CertificateSubjectTokenSupplier = CertificateSubjectTokenSupplier;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/identitypoolclient.js
var require_identitypoolclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/identitypoolclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdentityPoolClient = void 0;
    var baseexternalclient_1 = require_baseexternalclient();
    var util_1 = require_util2();
    var filesubjecttokensupplier_1 = require_filesubjecttokensupplier();
    var urlsubjecttokensupplier_1 = require_urlsubjecttokensupplier();
    var certificatesubjecttokensupplier_1 = require_certificatesubjecttokensupplier();
    var stscredentials_1 = require_stscredentials();
    var gaxios_1 = require_src();
    var IdentityPoolClient = class _IdentityPoolClient extends baseexternalclient_1.BaseExternalAccountClient {
      subjectTokenSupplier;
      /**
       * Instantiate an IdentityPoolClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid file-sourced or
       * url-sourced credential or a workforce pool user project is provided
       * with a non workforce audience.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file. The camelCased options
       *   are aliases for the snake_cased options.
       */
      constructor(options) {
        super(options);
        const opts = (0, util_1.originalOrCamelOptions)(options);
        const credentialSource = opts.get("credential_source");
        const subjectTokenSupplier = opts.get("subject_token_supplier");
        if (!credentialSource && !subjectTokenSupplier) {
          throw new Error("A credential source or subject token supplier must be specified.");
        }
        if (credentialSource && subjectTokenSupplier) {
          throw new Error("Only one of credential source or subject token supplier can be specified.");
        }
        if (subjectTokenSupplier) {
          this.subjectTokenSupplier = subjectTokenSupplier;
          this.credentialSourceType = "programmatic";
        } else {
          const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
          const formatOpts = (0, util_1.originalOrCamelOptions)(credentialSourceOpts.get("format"));
          const formatType = formatOpts.get("type") || "text";
          const formatSubjectTokenFieldName = formatOpts.get("subject_token_field_name");
          if (formatType !== "json" && formatType !== "text") {
            throw new Error(`Invalid credential_source format "${formatType}"`);
          }
          if (formatType === "json" && !formatSubjectTokenFieldName) {
            throw new Error("Missing subject_token_field_name for JSON credential_source format");
          }
          const file = credentialSourceOpts.get("file");
          const url = credentialSourceOpts.get("url");
          const certificate = credentialSourceOpts.get("certificate");
          const headers = credentialSourceOpts.get("headers");
          if (file && url || url && certificate || file && certificate) {
            throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
          } else if (file) {
            this.credentialSourceType = "file";
            this.subjectTokenSupplier = new filesubjecttokensupplier_1.FileSubjectTokenSupplier({
              filePath: file,
              formatType,
              subjectTokenFieldName: formatSubjectTokenFieldName
            });
          } else if (url) {
            this.credentialSourceType = "url";
            this.subjectTokenSupplier = new urlsubjecttokensupplier_1.UrlSubjectTokenSupplier({
              url,
              formatType,
              subjectTokenFieldName: formatSubjectTokenFieldName,
              headers,
              additionalGaxiosOptions: _IdentityPoolClient.RETRY_CONFIG
            });
          } else if (certificate) {
            this.credentialSourceType = "certificate";
            const certificateSubjecttokensupplier = new certificatesubjecttokensupplier_1.CertificateSubjectTokenSupplier({
              useDefaultCertificateConfig: certificate.use_default_certificate_config,
              certificateConfigLocation: certificate.certificate_config_location,
              trustChainPath: certificate.trust_chain_path
            });
            this.subjectTokenSupplier = certificateSubjecttokensupplier;
          } else {
            throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
          }
        }
      }
      /**
       * Triggered when a external subject token is needed to be exchanged for a GCP
       * access token via GCP STS endpoint. Gets a subject token by calling
       * the configured {@link SubjectTokenSupplier}
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        const subjectToken = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
        if (this.subjectTokenSupplier instanceof certificatesubjecttokensupplier_1.CertificateSubjectTokenSupplier) {
          const mtlsAgent = await this.subjectTokenSupplier.createMtlsHttpsAgent();
          this.stsCredential = new stscredentials_1.StsCredentials({
            tokenExchangeEndpoint: this.getTokenUrl(),
            clientAuthentication: this.clientAuth,
            transporter: new gaxios_1.Gaxios({ agent: mtlsAgent })
          });
          this.transporter = new gaxios_1.Gaxios({
            ...this.transporter.defaults || {},
            agent: mtlsAgent
          });
        }
        return subjectToken;
      }
    };
    exports.IdentityPoolClient = IdentityPoolClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/awsrequestsigner.js
var require_awsrequestsigner = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/awsrequestsigner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsRequestSigner = void 0;
    var gaxios_1 = require_src();
    var crypto_1 = require_crypto3();
    var AWS_ALGORITHM = "AWS4-HMAC-SHA256";
    var AWS_REQUEST_TYPE = "aws4_request";
    var AwsRequestSigner = class {
      getCredentials;
      region;
      crypto;
      /**
       * Instantiates an AWS API request signer used to send authenticated signed
       * requests to AWS APIs based on the AWS Signature Version 4 signing process.
       * This also provides a mechanism to generate the signed request without
       * sending it.
       * @param getCredentials A mechanism to retrieve AWS security credentials
       *   when needed.
       * @param region The AWS region to use.
       */
      constructor(getCredentials, region) {
        this.getCredentials = getCredentials;
        this.region = region;
        this.crypto = (0, crypto_1.createCrypto)();
      }
      /**
       * Generates the signed request for the provided HTTP request for calling
       * an AWS API. This follows the steps described at:
       * https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
       * @param amzOptions The AWS request options that need to be signed.
       * @return A promise that resolves with the GaxiosOptions containing the
       *   signed HTTP request parameters.
       */
      async getRequestOptions(amzOptions) {
        if (!amzOptions.url) {
          throw new RangeError('"url" is required in "amzOptions"');
        }
        const requestPayloadData = typeof amzOptions.data === "object" ? JSON.stringify(amzOptions.data) : amzOptions.data;
        const url = amzOptions.url;
        const method = amzOptions.method || "GET";
        const requestPayload = amzOptions.body || requestPayloadData;
        const additionalAmzHeaders = amzOptions.headers;
        const awsSecurityCredentials = await this.getCredentials();
        const uri = new URL(url);
        if (typeof requestPayload !== "string" && requestPayload !== void 0) {
          throw new TypeError(`'requestPayload' is expected to be a string if provided. Got: ${requestPayload}`);
        }
        const headerMap = await generateAuthenticationHeaderMap({
          crypto: this.crypto,
          host: uri.host,
          canonicalUri: uri.pathname,
          canonicalQuerystring: uri.search.slice(1),
          method,
          region: this.region,
          securityCredentials: awsSecurityCredentials,
          requestPayload,
          additionalAmzHeaders
        });
        const headers = gaxios_1.Gaxios.mergeHeaders(
          // Add x-amz-date if available.
          headerMap.amzDate ? { "x-amz-date": headerMap.amzDate } : {},
          {
            authorization: headerMap.authorizationHeader,
            host: uri.host
          },
          additionalAmzHeaders || {}
        );
        if (awsSecurityCredentials.token) {
          gaxios_1.Gaxios.mergeHeaders(headers, {
            "x-amz-security-token": awsSecurityCredentials.token
          });
        }
        const awsSignedReq = {
          url,
          method,
          headers
        };
        if (requestPayload !== void 0) {
          awsSignedReq.body = requestPayload;
        }
        return awsSignedReq;
      }
    };
    exports.AwsRequestSigner = AwsRequestSigner;
    async function sign(crypto, key, msg) {
      return await crypto.signWithHmacSha256(key, msg);
    }
    async function getSigningKey(crypto, key, dateStamp, region, serviceName) {
      const kDate = await sign(crypto, `AWS4${key}`, dateStamp);
      const kRegion = await sign(crypto, kDate, region);
      const kService = await sign(crypto, kRegion, serviceName);
      const kSigning = await sign(crypto, kService, "aws4_request");
      return kSigning;
    }
    async function generateAuthenticationHeaderMap(options) {
      const additionalAmzHeaders = gaxios_1.Gaxios.mergeHeaders(options.additionalAmzHeaders);
      const requestPayload = options.requestPayload || "";
      const serviceName = options.host.split(".")[0];
      const now = /* @__PURE__ */ new Date();
      const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, "");
      const dateStamp = now.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
      if (options.securityCredentials.token) {
        additionalAmzHeaders.set("x-amz-security-token", options.securityCredentials.token);
      }
      const amzHeaders = gaxios_1.Gaxios.mergeHeaders(
        {
          host: options.host
        },
        // Previously the date was not fixed with x-amz- and could be provided manually.
        // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
        additionalAmzHeaders.has("date") ? {} : { "x-amz-date": amzDate },
        additionalAmzHeaders
      );
      let canonicalHeaders = "";
      const signedHeadersList = [
        ...amzHeaders.keys()
      ].sort();
      signedHeadersList.forEach((key) => {
        canonicalHeaders += `${key}:${amzHeaders.get(key)}
`;
      });
      const signedHeaders = signedHeadersList.join(";");
      const payloadHash = await options.crypto.sha256DigestHex(requestPayload);
      const canonicalRequest = `${options.method.toUpperCase()}
${options.canonicalUri}
${options.canonicalQuerystring}
${canonicalHeaders}
${signedHeaders}
${payloadHash}`;
      const credentialScope = `${dateStamp}/${options.region}/${serviceName}/${AWS_REQUEST_TYPE}`;
      const stringToSign = `${AWS_ALGORITHM}
${amzDate}
${credentialScope}
` + await options.crypto.sha256DigestHex(canonicalRequest);
      const signingKey = await getSigningKey(options.crypto, options.securityCredentials.secretAccessKey, dateStamp, options.region, serviceName);
      const signature = await sign(options.crypto, signingKey, stringToSign);
      const authorizationHeader = `${AWS_ALGORITHM} Credential=${options.securityCredentials.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${(0, crypto_1.fromArrayBufferToHex)(signature)}`;
      return {
        // Do not return x-amz-date if date is available.
        amzDate: additionalAmzHeaders.has("date") ? void 0 : amzDate,
        authorizationHeader,
        canonicalQuerystring: options.canonicalQuerystring
      };
    }
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js
var require_defaultawssecuritycredentialssupplier = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultAwsSecurityCredentialsSupplier = void 0;
    var authclient_1 = require_authclient();
    var DefaultAwsSecurityCredentialsSupplier = class {
      regionUrl;
      securityCredentialsUrl;
      imdsV2SessionTokenUrl;
      additionalGaxiosOptions;
      /**
       * Instantiates a new DefaultAwsSecurityCredentialsSupplier using information
       * from the credential_source stored in the ADC file.
       * @param opts The default aws security credentials supplier options object to
       *   build the supplier with.
       */
      constructor(opts) {
        this.regionUrl = opts.regionUrl;
        this.securityCredentialsUrl = opts.securityCredentialsUrl;
        this.imdsV2SessionTokenUrl = opts.imdsV2SessionTokenUrl;
        this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
      }
      /**
       * Returns the active AWS region. This first checks to see if the region
       * is available as an environment variable. If it is not, then the supplier
       * will call the region URL.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link AwsClient}, contains the requested audience and subject token type
       *   for the external account identity.
       * @return A promise that resolves with the AWS region string.
       */
      async getAwsRegion(context) {
        if (this.#regionFromEnv) {
          return this.#regionFromEnv;
        }
        const metadataHeaders = new Headers();
        if (!this.#regionFromEnv && this.imdsV2SessionTokenUrl) {
          metadataHeaders.set("x-aws-ec2-metadata-token", await this.#getImdsV2SessionToken(context.transporter));
        }
        if (!this.regionUrl) {
          throw new RangeError('Unable to determine AWS region due to missing "options.credential_source.region_url"');
        }
        const opts = {
          ...this.additionalGaxiosOptions,
          url: this.regionUrl,
          method: "GET",
          responseType: "text",
          headers: metadataHeaders
        };
        authclient_1.AuthClient.setMethodName(opts, "getAwsRegion");
        const response = await context.transporter.request(opts);
        return response.data.substr(0, response.data.length - 1);
      }
      /**
       * Returns AWS security credentials. This first checks to see if the credentials
       * is available as environment variables. If it is not, then the supplier
       * will call the security credentials URL.
       * @param context {@link ExternalAccountSupplierContext} from the calling
       *   {@link AwsClient}, contains the requested audience and subject token type
       *   for the external account identity.
       * @return A promise that resolves with the AWS security credentials.
       */
      async getAwsSecurityCredentials(context) {
        if (this.#securityCredentialsFromEnv) {
          return this.#securityCredentialsFromEnv;
        }
        const metadataHeaders = new Headers();
        if (this.imdsV2SessionTokenUrl) {
          metadataHeaders.set("x-aws-ec2-metadata-token", await this.#getImdsV2SessionToken(context.transporter));
        }
        const roleName = await this.#getAwsRoleName(metadataHeaders, context.transporter);
        const awsCreds = await this.#retrieveAwsSecurityCredentials(roleName, metadataHeaders, context.transporter);
        return {
          accessKeyId: awsCreds.AccessKeyId,
          secretAccessKey: awsCreds.SecretAccessKey,
          token: awsCreds.Token
        };
      }
      /**
       * @param transporter The transporter to use for requests.
       * @return A promise that resolves with the IMDSv2 Session Token.
       */
      async #getImdsV2SessionToken(transporter) {
        const opts = {
          ...this.additionalGaxiosOptions,
          url: this.imdsV2SessionTokenUrl,
          method: "PUT",
          responseType: "text",
          headers: { "x-aws-ec2-metadata-token-ttl-seconds": "300" }
        };
        authclient_1.AuthClient.setMethodName(opts, "#getImdsV2SessionToken");
        const response = await transporter.request(opts);
        return response.data;
      }
      /**
       * @param headers The headers to be used in the metadata request.
       * @param transporter The transporter to use for requests.
       * @return A promise that resolves with the assigned role to the current
       *   AWS VM. This is needed for calling the security-credentials endpoint.
       */
      async #getAwsRoleName(headers, transporter) {
        if (!this.securityCredentialsUrl) {
          throw new Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
        }
        const opts = {
          ...this.additionalGaxiosOptions,
          url: this.securityCredentialsUrl,
          method: "GET",
          responseType: "text",
          headers
        };
        authclient_1.AuthClient.setMethodName(opts, "#getAwsRoleName");
        const response = await transporter.request(opts);
        return response.data;
      }
      /**
       * Retrieves the temporary AWS credentials by calling the security-credentials
       * endpoint as specified in the `credential_source` object.
       * @param roleName The role attached to the current VM.
       * @param headers The headers to be used in the metadata request.
       * @param transporter The transporter to use for requests.
       * @return A promise that resolves with the temporary AWS credentials
       *   needed for creating the GetCallerIdentity signed request.
       */
      async #retrieveAwsSecurityCredentials(roleName, headers, transporter) {
        const opts = {
          ...this.additionalGaxiosOptions,
          url: `${this.securityCredentialsUrl}/${roleName}`,
          headers,
          responseType: "json"
        };
        authclient_1.AuthClient.setMethodName(opts, "#retrieveAwsSecurityCredentials");
        const response = await transporter.request(opts);
        return response.data;
      }
      get #regionFromEnv() {
        return process.env["AWS_REGION"] || process.env["AWS_DEFAULT_REGION"] || null;
      }
      get #securityCredentialsFromEnv() {
        if (process.env["AWS_ACCESS_KEY_ID"] && process.env["AWS_SECRET_ACCESS_KEY"]) {
          return {
            accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
            secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
            token: process.env["AWS_SESSION_TOKEN"]
          };
        }
        return null;
      }
    };
    exports.DefaultAwsSecurityCredentialsSupplier = DefaultAwsSecurityCredentialsSupplier;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/awsclient.js
var require_awsclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/awsclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsClient = void 0;
    var awsrequestsigner_1 = require_awsrequestsigner();
    var baseexternalclient_1 = require_baseexternalclient();
    var defaultawssecuritycredentialssupplier_1 = require_defaultawssecuritycredentialssupplier();
    var util_1 = require_util2();
    var gaxios_1 = require_src();
    var AwsClient = class _AwsClient extends baseexternalclient_1.BaseExternalAccountClient {
      environmentId;
      awsSecurityCredentialsSupplier;
      regionalCredVerificationUrl;
      awsRequestSigner;
      region;
      static #DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL = "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15";
      /**
       * @deprecated AWS client no validates the EC2 metadata address.
       **/
      static AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
      /**
       * @deprecated AWS client no validates the EC2 metadata address.
       **/
      static AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
      /**
       * Instantiates an AwsClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid AWS credential.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file.
       */
      constructor(options) {
        super(options);
        const opts = (0, util_1.originalOrCamelOptions)(options);
        const credentialSource = opts.get("credential_source");
        const awsSecurityCredentialsSupplier = opts.get("aws_security_credentials_supplier");
        if (!credentialSource && !awsSecurityCredentialsSupplier) {
          throw new Error("A credential source or AWS security credentials supplier must be specified.");
        }
        if (credentialSource && awsSecurityCredentialsSupplier) {
          throw new Error("Only one of credential source or AWS security credentials supplier can be specified.");
        }
        if (awsSecurityCredentialsSupplier) {
          this.awsSecurityCredentialsSupplier = awsSecurityCredentialsSupplier;
          this.regionalCredVerificationUrl = _AwsClient.#DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL;
          this.credentialSourceType = "programmatic";
        } else {
          const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
          this.environmentId = credentialSourceOpts.get("environment_id");
          const regionUrl = credentialSourceOpts.get("region_url");
          const securityCredentialsUrl = credentialSourceOpts.get("url");
          const imdsV2SessionTokenUrl = credentialSourceOpts.get("imdsv2_session_token_url");
          this.awsSecurityCredentialsSupplier = new defaultawssecuritycredentialssupplier_1.DefaultAwsSecurityCredentialsSupplier({
            regionUrl,
            securityCredentialsUrl,
            imdsV2SessionTokenUrl
          });
          this.regionalCredVerificationUrl = credentialSourceOpts.get("regional_cred_verification_url");
          this.credentialSourceType = "aws";
          this.validateEnvironmentId();
        }
        this.awsRequestSigner = null;
        this.region = "";
      }
      validateEnvironmentId() {
        const match = this.environmentId?.match(/^(aws)(\d+)$/);
        if (!match || !this.regionalCredVerificationUrl) {
          throw new Error('No valid AWS "credential_source" provided');
        } else if (parseInt(match[2], 10) !== 1) {
          throw new Error(`aws version "${match[2]}" is not supported in the current build.`);
        }
      }
      /**
       * Triggered when an external subject token is needed to be exchanged for a
       * GCP access token via GCP STS endpoint. This will call the
       * {@link AwsSecurityCredentialsSupplier} to retrieve an AWS region and AWS
       * Security Credentials, then use them to create a signed AWS STS request that
       * can be exchanged for a GCP access token.
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        if (!this.awsRequestSigner) {
          this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext);
          this.awsRequestSigner = new awsrequestsigner_1.AwsRequestSigner(async () => {
            return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext);
          }, this.region);
        }
        const options = await this.awsRequestSigner.getRequestOptions({
          ..._AwsClient.RETRY_CONFIG,
          url: this.regionalCredVerificationUrl.replace("{region}", this.region),
          method: "POST"
        });
        const reformattedHeader = [];
        const extendedHeaders = gaxios_1.Gaxios.mergeHeaders({
          // The full, canonical resource name of the workload identity pool
          // provider, with or without the HTTPS prefix.
          // Including this header as part of the signature is recommended to
          // ensure data integrity.
          "x-goog-cloud-target-resource": this.audience
        }, options.headers);
        extendedHeaders.forEach((value, key) => reformattedHeader.push({ key, value }));
        return encodeURIComponent(JSON.stringify({
          url: options.url,
          method: options.method,
          headers: reformattedHeader
        }));
      }
    };
    exports.AwsClient = AwsClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/executable-response.js
var require_executable_response = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/executable-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidSubjectTokenError = exports.InvalidMessageFieldError = exports.InvalidCodeFieldError = exports.InvalidTokenTypeFieldError = exports.InvalidExpirationTimeFieldError = exports.InvalidSuccessFieldError = exports.InvalidVersionFieldError = exports.ExecutableResponseError = exports.ExecutableResponse = void 0;
    var SAML_SUBJECT_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:saml2";
    var OIDC_SUBJECT_TOKEN_TYPE1 = "urn:ietf:params:oauth:token-type:id_token";
    var OIDC_SUBJECT_TOKEN_TYPE2 = "urn:ietf:params:oauth:token-type:jwt";
    var ExecutableResponse = class {
      /**
       * The version of the Executable response. Only version 1 is currently supported.
       */
      version;
      /**
       * Whether the executable ran successfully.
       */
      success;
      /**
       * The epoch time for expiration of the token in seconds.
       */
      expirationTime;
      /**
       * The type of subject token in the response, currently supported values are:
       * urn:ietf:params:oauth:token-type:saml2
       * urn:ietf:params:oauth:token-type:id_token
       * urn:ietf:params:oauth:token-type:jwt
       */
      tokenType;
      /**
       * The error code from the executable.
       */
      errorCode;
      /**
       * The error message from the executable.
       */
      errorMessage;
      /**
       * The subject token from the executable, format depends on tokenType.
       */
      subjectToken;
      /**
       * Instantiates an ExecutableResponse instance using the provided JSON object
       * from the output of the executable.
       * @param responseJson Response from a 3rd party executable, loaded from a
       * run of the executable or a cached output file.
       */
      constructor(responseJson) {
        if (!responseJson.version) {
          throw new InvalidVersionFieldError("Executable response must contain a 'version' field.");
        }
        if (responseJson.success === void 0) {
          throw new InvalidSuccessFieldError("Executable response must contain a 'success' field.");
        }
        this.version = responseJson.version;
        this.success = responseJson.success;
        if (this.success) {
          this.expirationTime = responseJson.expiration_time;
          this.tokenType = responseJson.token_type;
          if (this.tokenType !== SAML_SUBJECT_TOKEN_TYPE && this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE1 && this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE2) {
            throw new InvalidTokenTypeFieldError(`Executable response must contain a 'token_type' field when successful and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`);
          }
          if (this.tokenType === SAML_SUBJECT_TOKEN_TYPE) {
            if (!responseJson.saml_response) {
              throw new InvalidSubjectTokenError(`Executable response must contain a 'saml_response' field when token_type=${SAML_SUBJECT_TOKEN_TYPE}.`);
            }
            this.subjectToken = responseJson.saml_response;
          } else {
            if (!responseJson.id_token) {
              throw new InvalidSubjectTokenError(`Executable response must contain a 'id_token' field when token_type=${OIDC_SUBJECT_TOKEN_TYPE1} or ${OIDC_SUBJECT_TOKEN_TYPE2}.`);
            }
            this.subjectToken = responseJson.id_token;
          }
        } else {
          if (!responseJson.code) {
            throw new InvalidCodeFieldError("Executable response must contain a 'code' field when unsuccessful.");
          }
          if (!responseJson.message) {
            throw new InvalidMessageFieldError("Executable response must contain a 'message' field when unsuccessful.");
          }
          this.errorCode = responseJson.code;
          this.errorMessage = responseJson.message;
        }
      }
      /**
       * @return A boolean representing if the response has a valid token. Returns
       * true when the response was successful and the token is not expired.
       */
      isValid() {
        return !this.isExpired() && this.success;
      }
      /**
       * @return A boolean representing if the response is expired. Returns true if the
       * provided timeout has passed.
       */
      isExpired() {
        return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1e3);
      }
    };
    exports.ExecutableResponse = ExecutableResponse;
    var ExecutableResponseError = class extends Error {
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.ExecutableResponseError = ExecutableResponseError;
    var InvalidVersionFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidVersionFieldError = InvalidVersionFieldError;
    var InvalidSuccessFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidSuccessFieldError = InvalidSuccessFieldError;
    var InvalidExpirationTimeFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidExpirationTimeFieldError = InvalidExpirationTimeFieldError;
    var InvalidTokenTypeFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidTokenTypeFieldError = InvalidTokenTypeFieldError;
    var InvalidCodeFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidCodeFieldError = InvalidCodeFieldError;
    var InvalidMessageFieldError = class extends ExecutableResponseError {
    };
    exports.InvalidMessageFieldError = InvalidMessageFieldError;
    var InvalidSubjectTokenError = class extends ExecutableResponseError {
    };
    exports.InvalidSubjectTokenError = InvalidSubjectTokenError;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/pluggable-auth-handler.js
var require_pluggable_auth_handler = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/pluggable-auth-handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PluggableAuthHandler = exports.ExecutableError = void 0;
    var executable_response_1 = require_executable_response();
    var childProcess = __require("child_process");
    var fs = __require("fs");
    var ExecutableError = class extends Error {
      /**
       * The exit code returned by the executable.
       */
      code;
      constructor(message, code) {
        super(`The executable failed with exit code: ${code} and error message: ${message}.`);
        this.code = code;
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.ExecutableError = ExecutableError;
    var PluggableAuthHandler = class _PluggableAuthHandler {
      commandComponents;
      timeoutMillis;
      outputFile;
      /**
       * Instantiates a PluggableAuthHandler instance using the provided
       * PluggableAuthHandlerOptions object.
       */
      constructor(options) {
        if (!options.command) {
          throw new Error("No command provided.");
        }
        this.commandComponents = _PluggableAuthHandler.parseCommand(options.command);
        this.timeoutMillis = options.timeoutMillis;
        if (!this.timeoutMillis) {
          throw new Error("No timeoutMillis provided.");
        }
        this.outputFile = options.outputFile;
      }
      /**
       * Calls user provided executable to get a 3rd party subject token and
       * returns the response.
       * @param envMap a Map of additional Environment Variables required for
       *   the executable.
       * @return A promise that resolves with the executable response.
       */
      retrieveResponseFromExecutable(envMap) {
        return new Promise((resolve, reject) => {
          const child = childProcess.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
            env: { ...process.env, ...Object.fromEntries(envMap) }
          });
          let output = "";
          child.stdout.on("data", (data) => {
            output += data;
          });
          child.stderr.on("data", (err) => {
            output += err;
          });
          const timeout = setTimeout(() => {
            child.removeAllListeners();
            child.kill();
            return reject(new Error("The executable failed to finish within the timeout specified."));
          }, this.timeoutMillis);
          child.on("close", (code) => {
            clearTimeout(timeout);
            if (code === 0) {
              try {
                const responseJson = JSON.parse(output);
                const response = new executable_response_1.ExecutableResponse(responseJson);
                return resolve(response);
              } catch (error) {
                if (error instanceof executable_response_1.ExecutableResponseError) {
                  return reject(error);
                }
                return reject(new executable_response_1.ExecutableResponseError(`The executable returned an invalid response: ${output}`));
              }
            } else {
              return reject(new ExecutableError(output, code.toString()));
            }
          });
        });
      }
      /**
       * Checks user provided output file for response from previous run of
       * executable and return the response if it exists, is formatted correctly, and is not expired.
       */
      async retrieveCachedResponse() {
        if (!this.outputFile || this.outputFile.length === 0) {
          return void 0;
        }
        let filePath;
        try {
          filePath = await fs.promises.realpath(this.outputFile);
        } catch {
          return void 0;
        }
        if (!(await fs.promises.lstat(filePath)).isFile()) {
          return void 0;
        }
        const responseString = await fs.promises.readFile(filePath, {
          encoding: "utf8"
        });
        if (responseString === "") {
          return void 0;
        }
        try {
          const responseJson = JSON.parse(responseString);
          const response = new executable_response_1.ExecutableResponse(responseJson);
          if (response.isValid()) {
            return new executable_response_1.ExecutableResponse(responseJson);
          }
          return void 0;
        } catch (error) {
          if (error instanceof executable_response_1.ExecutableResponseError) {
            throw error;
          }
          throw new executable_response_1.ExecutableResponseError(`The output file contained an invalid response: ${responseString}`);
        }
      }
      /**
       * Parses given command string into component array, splitting on spaces unless
       * spaces are between quotation marks.
       */
      static parseCommand(command) {
        const components = command.match(/(?:[^\s"]+|"[^"]*")+/g);
        if (!components) {
          throw new Error(`Provided command: "${command}" could not be parsed.`);
        }
        for (let i = 0; i < components.length; i++) {
          if (components[i][0] === '"' && components[i].slice(-1) === '"') {
            components[i] = components[i].slice(1, -1);
          }
        }
        return components;
      }
    };
    exports.PluggableAuthHandler = PluggableAuthHandler;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/pluggable-auth-client.js
var require_pluggable_auth_client = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/pluggable-auth-client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PluggableAuthClient = exports.ExecutableError = void 0;
    var baseexternalclient_1 = require_baseexternalclient();
    var executable_response_1 = require_executable_response();
    var pluggable_auth_handler_1 = require_pluggable_auth_handler();
    var pluggable_auth_handler_2 = require_pluggable_auth_handler();
    Object.defineProperty(exports, "ExecutableError", { enumerable: true, get: function() {
      return pluggable_auth_handler_2.ExecutableError;
    } });
    var DEFAULT_EXECUTABLE_TIMEOUT_MILLIS = 30 * 1e3;
    var MINIMUM_EXECUTABLE_TIMEOUT_MILLIS = 5 * 1e3;
    var MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS = 120 * 1e3;
    var GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES";
    var MAXIMUM_EXECUTABLE_VERSION = 1;
    var PluggableAuthClient = class extends baseexternalclient_1.BaseExternalAccountClient {
      /**
       * The command used to retrieve the third party token.
       */
      command;
      /**
       * The timeout in milliseconds for running executable,
       * set to default if none provided.
       */
      timeoutMillis;
      /**
       * The path to file to check for cached executable response.
       */
      outputFile;
      /**
       * Executable and output file handler.
       */
      handler;
      /**
       * Instantiates a PluggableAuthClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid pluggable auth credential.
       * @param options The external account options object typically loaded from
       *   the external account JSON credential file.
       */
      constructor(options) {
        super(options);
        if (!options.credential_source.executable) {
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        }
        this.command = options.credential_source.executable.command;
        if (!this.command) {
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        }
        if (options.credential_source.executable.timeout_millis === void 0) {
          this.timeoutMillis = DEFAULT_EXECUTABLE_TIMEOUT_MILLIS;
        } else {
          this.timeoutMillis = options.credential_source.executable.timeout_millis;
          if (this.timeoutMillis < MINIMUM_EXECUTABLE_TIMEOUT_MILLIS || this.timeoutMillis > MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS) {
            throw new Error(`Timeout must be between ${MINIMUM_EXECUTABLE_TIMEOUT_MILLIS} and ${MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS} milliseconds.`);
          }
        }
        this.outputFile = options.credential_source.executable.output_file;
        this.handler = new pluggable_auth_handler_1.PluggableAuthHandler({
          command: this.command,
          timeoutMillis: this.timeoutMillis,
          outputFile: this.outputFile
        });
        this.credentialSourceType = "executable";
      }
      /**
       * Triggered when an external subject token is needed to be exchanged for a
       * GCP access token via GCP STS endpoint.
       * This uses the `options.credential_source` object to figure out how
       * to retrieve the token using the current environment. In this case,
       * this calls a user provided executable which returns the subject token.
       * The logic is summarized as:
       * 1. Validated that the executable is allowed to run. The
       *    GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment must be set to
       *    1 for security reasons.
       * 2. If an output file is specified by the user, check the file location
       *    for a response. If the file exists and contains a valid response,
       *    return the subject token from the file.
       * 3. Call the provided executable and return response.
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        if (process.env[GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES] !== "1") {
          throw new Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
        }
        let executableResponse = void 0;
        if (this.outputFile) {
          executableResponse = await this.handler.retrieveCachedResponse();
        }
        if (!executableResponse) {
          const envMap = /* @__PURE__ */ new Map();
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience);
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType);
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0");
          if (this.outputFile) {
            envMap.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
          }
          const serviceAccountEmail = this.getServiceAccountEmail();
          if (serviceAccountEmail) {
            envMap.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", serviceAccountEmail);
          }
          executableResponse = await this.handler.retrieveResponseFromExecutable(envMap);
        }
        if (executableResponse.version > MAXIMUM_EXECUTABLE_VERSION) {
          throw new Error(`Version of executable is not currently supported, maximum supported version is ${MAXIMUM_EXECUTABLE_VERSION}.`);
        }
        if (!executableResponse.success) {
          throw new pluggable_auth_handler_1.ExecutableError(executableResponse.errorMessage, executableResponse.errorCode);
        }
        if (this.outputFile) {
          if (!executableResponse.expirationTime) {
            throw new executable_response_1.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
          }
        }
        if (executableResponse.isExpired()) {
          throw new Error("Executable response is expired.");
        }
        return executableResponse.subjectToken;
      }
    };
    exports.PluggableAuthClient = PluggableAuthClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/externalclient.js
var require_externalclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/externalclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExternalAccountClient = void 0;
    var baseexternalclient_1 = require_baseexternalclient();
    var identitypoolclient_1 = require_identitypoolclient();
    var awsclient_1 = require_awsclient();
    var pluggable_auth_client_1 = require_pluggable_auth_client();
    var ExternalAccountClient = class {
      constructor() {
        throw new Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
      }
      /**
       * This static method will instantiate the
       * corresponding type of external account credential depending on the
       * underlying credential source.
       *
       * **IMPORTANT**: This method does not validate the credential configuration.
       * A security risk occurs when a credential configuration configured with
       * malicious URLs is used. When the credential configuration is accepted from
       * an untrusted source, you should validate it before using it with this
       * method. For more details, see
       * https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
       *
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file.
       * @return A BaseExternalAccountClient instance or null if the options
       *   provided do not correspond to an external account credential.
       */
      static fromJSON(options) {
        if (options && options.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
          if (options.credential_source?.environment_id) {
            return new awsclient_1.AwsClient(options);
          } else if (options.credential_source?.executable) {
            return new pluggable_auth_client_1.PluggableAuthClient(options);
          } else {
            return new identitypoolclient_1.IdentityPoolClient(options);
          }
        } else {
          return null;
        }
      }
    };
    exports.ExternalAccountClient = ExternalAccountClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/externalAccountAuthorizedUserClient.js
var require_externalAccountAuthorizedUserClient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/externalAccountAuthorizedUserClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExternalAccountAuthorizedUserClient = exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
    var authclient_1 = require_authclient();
    var oauth2common_1 = require_oauth2common();
    var gaxios_1 = require_src();
    var stream = __require("stream");
    var baseexternalclient_1 = require_baseexternalclient();
    exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
    var DEFAULT_TOKEN_URL = "https://sts.{universeDomain}/v1/oauthtoken";
    var ExternalAccountAuthorizedUserHandler = class _ExternalAccountAuthorizedUserHandler extends oauth2common_1.OAuthClientAuthHandler {
      #tokenRefreshEndpoint;
      /**
       * Initializes an ExternalAccountAuthorizedUserHandler instance.
       * @param url The URL of the token refresh endpoint.
       * @param transporter The transporter to use for the refresh request.
       * @param clientAuthentication The client authentication credentials to use
       *   for the refresh request.
       */
      constructor(options) {
        super(options);
        this.#tokenRefreshEndpoint = options.tokenRefreshEndpoint;
      }
      /**
       * Requests a new access token from the token_url endpoint using the provided
       *   refresh token.
       * @param refreshToken The refresh token to use to generate a new access token.
       * @param additionalHeaders Optional additional headers to pass along the
       *   request.
       * @return A promise that resolves with the token refresh response containing
       *   the requested access token and its expiration time.
       */
      async refreshToken(refreshToken, headers) {
        const opts = {
          ..._ExternalAccountAuthorizedUserHandler.RETRY_CONFIG,
          url: this.#tokenRefreshEndpoint,
          method: "POST",
          headers,
          data: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken
          }),
          responseType: "json"
        };
        authclient_1.AuthClient.setMethodName(opts, "refreshToken");
        this.applyClientAuthenticationOptions(opts);
        try {
          const response = await this.transporter.request(opts);
          const tokenRefreshResponse = response.data;
          tokenRefreshResponse.res = response;
          return tokenRefreshResponse;
        } catch (error) {
          if (error instanceof gaxios_1.GaxiosError && error.response) {
            throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(
              error.response.data,
              // Preserve other fields from the original error.
              error
            );
          }
          throw error;
        }
      }
    };
    var ExternalAccountAuthorizedUserClient = class extends authclient_1.AuthClient {
      cachedAccessToken;
      externalAccountAuthorizedUserHandler;
      refreshToken;
      /**
       * Instantiates an ExternalAccountAuthorizedUserClient instances using the
       * provided JSON object loaded from a credentials files.
       * An error is throws if the credential is not valid.
       * @param options The external account authorized user option object typically
       *   from the external accoutn authorized user JSON credential file.
       */
      constructor(options) {
        super(options);
        if (options.universe_domain) {
          this.universeDomain = options.universe_domain;
        }
        this.refreshToken = options.refresh_token;
        const clientAuthentication = {
          confidentialClientType: "basic",
          clientId: options.client_id,
          clientSecret: options.client_secret
        };
        this.externalAccountAuthorizedUserHandler = new ExternalAccountAuthorizedUserHandler({
          tokenRefreshEndpoint: options.token_url ?? DEFAULT_TOKEN_URL.replace("{universeDomain}", this.universeDomain),
          transporter: this.transporter,
          clientAuthentication
        });
        this.cachedAccessToken = null;
        this.quotaProjectId = options.quota_project_id;
        if (typeof options?.eagerRefreshThresholdMillis !== "number") {
          this.eagerRefreshThresholdMillis = baseexternalclient_1.EXPIRATION_TIME_OFFSET;
        } else {
          this.eagerRefreshThresholdMillis = options.eagerRefreshThresholdMillis;
        }
        this.forceRefreshOnFailure = !!options?.forceRefreshOnFailure;
      }
      async getAccessToken() {
        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
          await this.refreshAccessTokenAsync();
        }
        return {
          token: this.cachedAccessToken.access_token,
          res: this.cachedAccessToken.res
        };
      }
      async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = new Headers({
          authorization: `Bearer ${accessTokenResponse.token}`
        });
        return this.addSharedMetadataHeaders(headers);
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
          const requestHeaders = await this.getRequestHeaders();
          opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
          this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
          response = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
              await this.refreshAccessTokenAsync();
              return await this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return response;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * @return A promise that resolves with the refreshed credential.
       */
      async refreshAccessTokenAsync() {
        const refreshResponse = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
        this.cachedAccessToken = {
          access_token: refreshResponse.access_token,
          expiry_date: (/* @__PURE__ */ new Date()).getTime() + refreshResponse.expires_in * 1e3,
          res: refreshResponse.res
        };
        if (refreshResponse.refresh_token !== void 0) {
          this.refreshToken = refreshResponse.refresh_token;
        }
        return this.cachedAccessToken;
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param credentials The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(credentials) {
        const now = (/* @__PURE__ */ new Date()).getTime();
        return credentials.expiry_date ? now >= credentials.expiry_date - this.eagerRefreshThresholdMillis : false;
      }
    };
    exports.ExternalAccountAuthorizedUserClient = ExternalAccountAuthorizedUserClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/googleauth.js
var require_googleauth = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/googleauth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleAuth = exports.GoogleAuthExceptionMessages = void 0;
    var child_process_1 = __require("child_process");
    var fs = __require("fs");
    var gaxios_1 = require_src();
    var gcpMetadata = require_src3();
    var os = __require("os");
    var path = __require("path");
    var crypto_1 = require_crypto3();
    var computeclient_1 = require_computeclient();
    var idtokenclient_1 = require_idtokenclient();
    var envDetect_1 = require_envDetect();
    var jwtclient_1 = require_jwtclient();
    var refreshclient_1 = require_refreshclient();
    var impersonated_1 = require_impersonated();
    var externalclient_1 = require_externalclient();
    var baseexternalclient_1 = require_baseexternalclient();
    var authclient_1 = require_authclient();
    var externalAccountAuthorizedUserClient_1 = require_externalAccountAuthorizedUserClient();
    var util_1 = require_util2();
    exports.GoogleAuthExceptionMessages = {
      API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
      NO_PROJECT_ID_FOUND: "Unable to detect a Project Id in the current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started",
      NO_CREDENTIALS_FOUND: "Unable to find credentials in current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started",
      NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
      NO_UNIVERSE_DOMAIN_FOUND: "Unable to detect a Universe Domain in the current environment.\nTo learn more about Universe Domain retrieval, visit: \nhttps://cloud.google.com/compute/docs/metadata/predefined-metadata-keys"
    };
    var GoogleAuth = class {
      /**
       * Caches a value indicating whether the auth layer is running on Google
       * Compute Engine.
       * @private
       */
      checkIsGCE = void 0;
      useJWTAccessWithScope;
      defaultServicePath;
      // Note:  this properly is only public to satisfy unit tests.
      // https://github.com/Microsoft/TypeScript/issues/5228
      get isGCE() {
        return this.checkIsGCE;
      }
      _findProjectIdPromise;
      _cachedProjectId;
      // To save the contents of the JSON credential file
      jsonContent = null;
      apiKey;
      cachedCredential = null;
      /**
       * A pending {@link AuthClient}. Used for concurrent {@link GoogleAuth.getClient} calls.
       */
      #pendingAuthClient = null;
      /**
       * Scopes populated by the client library by default. We differentiate between
       * these and user defined scopes when deciding whether to use a self-signed JWT.
       */
      defaultScopes;
      keyFilename;
      scopes;
      clientOptions = {};
      /**
       * Configuration is resolved in the following order of precedence:
       * - {@link GoogleAuthOptions.credentials `credentials`}
       * - {@link GoogleAuthOptions.keyFilename `keyFilename`}
       * - {@link GoogleAuthOptions.keyFile `keyFile`}
       *
       * {@link GoogleAuthOptions.clientOptions `clientOptions`} are passed to the
       * {@link AuthClient `AuthClient`s}.
       *
       * @param opts
       */
      constructor(opts = {}) {
        this._cachedProjectId = opts.projectId || null;
        this.cachedCredential = opts.authClient || null;
        this.keyFilename = opts.keyFilename || opts.keyFile;
        this.scopes = opts.scopes;
        this.clientOptions = opts.clientOptions || {};
        this.jsonContent = opts.credentials || null;
        this.apiKey = opts.apiKey || this.clientOptions.apiKey || null;
        if (this.apiKey && (this.jsonContent || this.clientOptions.credentials)) {
          throw new RangeError(exports.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
        }
        if (opts.universeDomain) {
          this.clientOptions.universeDomain = opts.universeDomain;
        }
      }
      // GAPIC client libraries should always use self-signed JWTs. The following
      // variables are set on the JWT client in order to indicate the type of library,
      // and sign the JWT with the correct audience and scopes (if not supplied).
      setGapicJWTValues(client) {
        client.defaultServicePath = this.defaultServicePath;
        client.useJWTAccessWithScope = this.useJWTAccessWithScope;
        client.defaultScopes = this.defaultScopes;
      }
      getProjectId(callback) {
        if (callback) {
          this.getProjectIdAsync().then((r) => callback(null, r), callback);
        } else {
          return this.getProjectIdAsync();
        }
      }
      /**
       * A temporary method for internal `getProjectId` usages where `null` is
       * acceptable. In a future major release, `getProjectId` should return `null`
       * (as the `Promise<string | null>` base signature describes) and this private
       * method should be removed.
       *
       * @returns Promise that resolves with project id (or `null`)
       */
      async getProjectIdOptional() {
        try {
          return await this.getProjectId();
        } catch (e) {
          if (e instanceof Error && e.message === exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) {
            return null;
          } else {
            throw e;
          }
        }
      }
      /**
       * A private method for finding and caching a projectId.
       *
       * Supports environments in order of precedence:
       * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
       * - GOOGLE_APPLICATION_CREDENTIALS JSON file
       * - Cloud SDK: `gcloud config config-helper --format json`
       * - GCE project ID from metadata server
       *
       * @returns projectId
       */
      async findAndCacheProjectId() {
        let projectId = null;
        projectId ||= await this.getProductionProjectId();
        projectId ||= await this.getFileProjectId();
        projectId ||= await this.getDefaultServiceProjectId();
        projectId ||= await this.getGCEProjectId();
        projectId ||= await this.getExternalAccountClientProjectId();
        if (projectId) {
          this._cachedProjectId = projectId;
          return projectId;
        } else {
          throw new Error(exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
        }
      }
      async getProjectIdAsync() {
        if (this._cachedProjectId) {
          return this._cachedProjectId;
        }
        if (!this._findProjectIdPromise) {
          this._findProjectIdPromise = this.findAndCacheProjectId();
        }
        return this._findProjectIdPromise;
      }
      /**
       * Retrieves a universe domain from the metadata server via
       * {@link gcpMetadata.universe}.
       *
       * @returns a universe domain
       */
      async getUniverseDomainFromMetadataServer() {
        let universeDomain;
        try {
          universeDomain = await gcpMetadata.universe("universe-domain");
          universeDomain ||= authclient_1.DEFAULT_UNIVERSE;
        } catch (e) {
          if (e && e?.response?.status === 404) {
            universeDomain = authclient_1.DEFAULT_UNIVERSE;
          } else {
            throw e;
          }
        }
        return universeDomain;
      }
      /**
       * Retrieves, caches, and returns the universe domain in the following order
       * of precedence:
       * - The universe domain in {@link GoogleAuth.clientOptions}
       * - An existing or ADC {@link AuthClient}'s universe domain
       * - {@link gcpMetadata.universe}, if {@link Compute} client
       *
       * @returns The universe domain
       */
      async getUniverseDomain() {
        let universeDomain = (0, util_1.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
        try {
          universeDomain ??= (await this.getClient()).universeDomain;
        } catch {
          universeDomain ??= authclient_1.DEFAULT_UNIVERSE;
        }
        return universeDomain;
      }
      /**
       * @returns Any scopes (user-specified or default scopes specified by the
       *   client library) that need to be set on the current Auth client.
       */
      getAnyScopes() {
        return this.scopes || this.defaultScopes;
      }
      getApplicationDefault(optionsOrCallback = {}, callback) {
        let options;
        if (typeof optionsOrCallback === "function") {
          callback = optionsOrCallback;
        } else {
          options = optionsOrCallback;
        }
        if (callback) {
          this.getApplicationDefaultAsync(options).then((r) => callback(null, r.credential, r.projectId), callback);
        } else {
          return this.getApplicationDefaultAsync(options);
        }
      }
      async getApplicationDefaultAsync(options = {}) {
        if (this.cachedCredential) {
          return await this.#prepareAndCacheClient(this.cachedCredential, null);
        }
        let credential;
        credential = await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
        if (credential) {
          if (credential instanceof jwtclient_1.JWT) {
            credential.scopes = this.scopes;
          } else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
            credential.scopes = this.getAnyScopes();
          }
          return await this.#prepareAndCacheClient(credential);
        }
        credential = await this._tryGetApplicationCredentialsFromWellKnownFile(options);
        if (credential) {
          if (credential instanceof jwtclient_1.JWT) {
            credential.scopes = this.scopes;
          } else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
            credential.scopes = this.getAnyScopes();
          }
          return await this.#prepareAndCacheClient(credential);
        }
        if (await this._checkIsGCE()) {
          options.scopes = this.getAnyScopes();
          return await this.#prepareAndCacheClient(new computeclient_1.Compute(options));
        }
        throw new Error(exports.GoogleAuthExceptionMessages.NO_ADC_FOUND);
      }
      async #prepareAndCacheClient(credential, quotaProjectIdOverride = process.env["GOOGLE_CLOUD_QUOTA_PROJECT"] || null) {
        const projectId = await this.getProjectIdOptional();
        if (quotaProjectIdOverride) {
          credential.quotaProjectId = quotaProjectIdOverride;
        }
        this.cachedCredential = credential;
        return { credential, projectId };
      }
      /**
       * Determines whether the auth layer is running on Google Compute Engine.
       * Checks for GCP Residency, then fallback to checking if metadata server
       * is available.
       *
       * @returns A promise that resolves with the boolean.
       * @api private
       */
      async _checkIsGCE() {
        if (this.checkIsGCE === void 0) {
          this.checkIsGCE = gcpMetadata.getGCPResidency() || await gcpMetadata.isAvailable();
        }
        return this.checkIsGCE;
      }
      /**
       * Attempts to load default credentials from the environment variable path..
       * @returns Promise that resolves with the OAuth2Client or null.
       * @api private
       */
      async _tryGetApplicationCredentialsFromEnvironmentVariable(options) {
        const credentialsPath = process.env["GOOGLE_APPLICATION_CREDENTIALS"] || process.env["google_application_credentials"];
        if (!credentialsPath || credentialsPath.length === 0) {
          return null;
        }
        try {
          return this._getApplicationCredentialsFromFilePath(credentialsPath, options);
        } catch (e) {
          if (e instanceof Error) {
            e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
          }
          throw e;
        }
      }
      /**
       * Attempts to load default credentials from a well-known file location
       * @return Promise that resolves with the OAuth2Client or null.
       * @api private
       */
      async _tryGetApplicationCredentialsFromWellKnownFile(options) {
        let location = null;
        if (this._isWindows()) {
          location = process.env["APPDATA"];
        } else {
          const home = process.env["HOME"];
          if (home) {
            location = path.join(home, ".config");
          }
        }
        if (location) {
          location = path.join(location, "gcloud", "application_default_credentials.json");
          if (!fs.existsSync(location)) {
            location = null;
          }
        }
        if (!location) {
          return null;
        }
        const client = await this._getApplicationCredentialsFromFilePath(location, options);
        return client;
      }
      /**
       * Attempts to load default credentials from a file at the given path..
       * @param filePath The path to the file to read.
       * @returns Promise that resolves with the OAuth2Client
       * @api private
       */
      async _getApplicationCredentialsFromFilePath(filePath, options = {}) {
        if (!filePath || filePath.length === 0) {
          throw new Error("The file path is invalid.");
        }
        try {
          filePath = fs.realpathSync(filePath);
          if (!fs.lstatSync(filePath).isFile()) {
            throw new Error();
          }
        } catch (err) {
          if (err instanceof Error) {
            err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
          }
          throw err;
        }
        const readStream = fs.createReadStream(filePath);
        return this.fromStream(readStream, options);
      }
      /**
       * Create a credentials instance using a given impersonated input options.
       * @param json The impersonated input object.
       * @returns JWT or UserRefresh Client with data
       */
      fromImpersonatedJSON(json) {
        if (!json) {
          throw new Error("Must pass in a JSON object containing an  impersonated refresh token");
        }
        if (json.type !== impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
          throw new Error(`The incoming JSON object does not have the "${impersonated_1.IMPERSONATED_ACCOUNT_TYPE}" type`);
        }
        if (!json.source_credentials) {
          throw new Error("The incoming JSON object does not contain a source_credentials field");
        }
        if (!json.service_account_impersonation_url) {
          throw new Error("The incoming JSON object does not contain a service_account_impersonation_url field");
        }
        const sourceClient = this.fromJSON(json.source_credentials);
        if (json.service_account_impersonation_url?.length > 256) {
          throw new RangeError(`Target principal is too long: ${json.service_account_impersonation_url}`);
        }
        const targetPrincipal = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(json.service_account_impersonation_url)?.groups?.target;
        if (!targetPrincipal) {
          throw new RangeError(`Cannot extract target principal from ${json.service_account_impersonation_url}`);
        }
        const targetScopes = (this.scopes || json.scopes || this.defaultScopes) ?? [];
        return new impersonated_1.Impersonated({
          ...json,
          sourceClient,
          targetPrincipal,
          targetScopes: Array.isArray(targetScopes) ? targetScopes : [targetScopes]
        });
      }
      /**
       * Create a credentials instance using the given input options.
       * This client is not cached.
       *
       * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
       *
       * @deprecated This method is being deprecated because of a potential security risk.
       *
       * This method does not validate the credential configuration. The security
       * risk occurs when a credential configuration is accepted from a source that
       * is not under your control and used without validation on your side.
       *
       * If you know that you will be loading credential configurations of a
       * specific type, it is recommended to use a credential-type-specific
       * constructor. This will ensure that an unexpected credential type with
       * potential for malicious intent is not loaded unintentionally. You might
       * still have to do validation for certain credential types. Please follow
       * the recommendation for that method. For example, if you want to load only
       * service accounts, you can use the `JWT` constructor:
       * ```
       * const {JWT} = require('google-auth-library');
       * const keys = require('/path/to/key.json');
       * const client = new JWT({
       *   email: keys.client_email,
       *   key: keys.private_key,
       *   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
       * });
       * ```
       *
       * If you are loading your credential configuration from an untrusted source and have
       * not mitigated the risks (e.g. by validating the configuration yourself), make
       * these changes as soon as possible to prevent security risks to your environment.
       *
       * Regardless of the method used, it is always your responsibility to validate
       * configurations received from external sources.
       *
       * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
       *
       * @param json The input object.
       * @param options The JWT or UserRefresh options for the client
       * @returns JWT or UserRefresh Client with data
       */
      fromJSON(json, options = {}) {
        let client;
        const preferredUniverseDomain = (0, util_1.originalOrCamelOptions)(options).get("universe_domain");
        if (json.type === refreshclient_1.USER_REFRESH_ACCOUNT_TYPE) {
          client = new refreshclient_1.UserRefreshClient(options);
          client.fromJSON(json);
        } else if (json.type === impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
          client = this.fromImpersonatedJSON(json);
        } else if (json.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
          client = externalclient_1.ExternalAccountClient.fromJSON({
            ...json,
            ...options
          });
          client.scopes = this.getAnyScopes();
        } else if (json.type === externalAccountAuthorizedUserClient_1.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) {
          client = new externalAccountAuthorizedUserClient_1.ExternalAccountAuthorizedUserClient({
            ...json,
            ...options
          });
        } else {
          options.scopes = this.scopes;
          client = new jwtclient_1.JWT(options);
          this.setGapicJWTValues(client);
          client.fromJSON(json);
        }
        if (preferredUniverseDomain) {
          client.universeDomain = preferredUniverseDomain;
        }
        return client;
      }
      /**
       * Return a JWT or UserRefreshClient from JavaScript object, caching both the
       * object used to instantiate and the client.
       * @param json The input object.
       * @param options The JWT or UserRefresh options for the client
       * @returns JWT or UserRefresh Client with data
       */
      _cacheClientFromJSON(json, options) {
        const client = this.fromJSON(json, options);
        this.jsonContent = json;
        this.cachedCredential = client;
        return client;
      }
      fromStream(inputStream, optionsOrCallback = {}, callback) {
        let options = {};
        if (typeof optionsOrCallback === "function") {
          callback = optionsOrCallback;
        } else {
          options = optionsOrCallback;
        }
        if (callback) {
          this.fromStreamAsync(inputStream, options).then((r) => callback(null, r), callback);
        } else {
          return this.fromStreamAsync(inputStream, options);
        }
      }
      fromStreamAsync(inputStream, options) {
        return new Promise((resolve, reject) => {
          if (!inputStream) {
            throw new Error("Must pass in a stream containing the Google auth settings.");
          }
          const chunks = [];
          inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => chunks.push(chunk)).on("end", () => {
            try {
              try {
                const data = JSON.parse(chunks.join(""));
                const r = this._cacheClientFromJSON(data, options);
                return resolve(r);
              } catch (err) {
                if (!this.keyFilename)
                  throw err;
                const client = new jwtclient_1.JWT({
                  ...this.clientOptions,
                  keyFile: this.keyFilename
                });
                this.cachedCredential = client;
                this.setGapicJWTValues(client);
                return resolve(client);
              }
            } catch (err) {
              return reject(err);
            }
          });
        });
      }
      /**
       * Create a credentials instance using the given API key string.
       * The created client is not cached. In order to create and cache it use the {@link GoogleAuth.getClient `getClient`} method after first providing an {@link GoogleAuth.apiKey `apiKey`}.
       *
       * @param apiKey The API key string
       * @param options An optional options object.
       * @returns A JWT loaded from the key
       */
      fromAPIKey(apiKey, options = {}) {
        return new jwtclient_1.JWT({ ...options, apiKey });
      }
      /**
       * Determines whether the current operating system is Windows.
       * @api private
       */
      _isWindows() {
        const sys = os.platform();
        if (sys && sys.length >= 3) {
          if (sys.substring(0, 3).toLowerCase() === "win") {
            return true;
          }
        }
        return false;
      }
      /**
       * Run the Google Cloud SDK command that prints the default project ID
       */
      async getDefaultServiceProjectId() {
        return new Promise((resolve) => {
          (0, child_process_1.exec)("gcloud config config-helper --format json", (err, stdout) => {
            if (!err && stdout) {
              try {
                const projectId = JSON.parse(stdout).configuration.properties.core.project;
                resolve(projectId);
                return;
              } catch (e) {
              }
            }
            resolve(null);
          });
        });
      }
      /**
       * Loads the project id from environment variables.
       * @api private
       */
      getProductionProjectId() {
        return process.env["GCLOUD_PROJECT"] || process.env["GOOGLE_CLOUD_PROJECT"] || process.env["gcloud_project"] || process.env["google_cloud_project"];
      }
      /**
       * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
       * @api private
       */
      async getFileProjectId() {
        if (this.cachedCredential) {
          return this.cachedCredential.projectId;
        }
        if (this.keyFilename) {
          const creds = await this.getClient();
          if (creds && creds.projectId) {
            return creds.projectId;
          }
        }
        const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
        if (r) {
          return r.projectId;
        } else {
          return null;
        }
      }
      /**
       * Gets the project ID from external account client if available.
       */
      async getExternalAccountClientProjectId() {
        if (!this.jsonContent || this.jsonContent.type !== baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
          return null;
        }
        const creds = await this.getClient();
        return await creds.getProjectId();
      }
      /**
       * Gets the Compute Engine project ID if it can be inferred.
       */
      async getGCEProjectId() {
        try {
          const r = await gcpMetadata.project("project-id");
          return r;
        } catch (e) {
          return null;
        }
      }
      getCredentials(callback) {
        if (callback) {
          this.getCredentialsAsync().then((r) => callback(null, r), callback);
        } else {
          return this.getCredentialsAsync();
        }
      }
      async getCredentialsAsync() {
        const client = await this.getClient();
        if (client instanceof impersonated_1.Impersonated) {
          return { client_email: client.getTargetPrincipal() };
        }
        if (client instanceof baseexternalclient_1.BaseExternalAccountClient) {
          const serviceAccountEmail = client.getServiceAccountEmail();
          if (serviceAccountEmail) {
            return {
              client_email: serviceAccountEmail,
              universe_domain: client.universeDomain
            };
          }
        }
        if (this.jsonContent) {
          return {
            client_email: this.jsonContent.client_email,
            private_key: this.jsonContent.private_key,
            universe_domain: this.jsonContent.universe_domain
          };
        }
        if (await this._checkIsGCE()) {
          const [client_email, universe_domain] = await Promise.all([
            gcpMetadata.instance("service-accounts/default/email"),
            this.getUniverseDomain()
          ]);
          return { client_email, universe_domain };
        }
        throw new Error(exports.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
      }
      /**
       * Automatically obtain an {@link AuthClient `AuthClient`} based on the
       * provided configuration. If no options were passed, use Application
       * Default Credentials.
       */
      async getClient() {
        if (this.cachedCredential) {
          return this.cachedCredential;
        }
        this.#pendingAuthClient = this.#pendingAuthClient || this.#determineClient();
        try {
          return await this.#pendingAuthClient;
        } finally {
          this.#pendingAuthClient = null;
        }
      }
      async #determineClient() {
        if (this.jsonContent) {
          return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
        } else if (this.keyFilename) {
          const filePath = path.resolve(this.keyFilename);
          const stream = fs.createReadStream(filePath);
          return await this.fromStreamAsync(stream, this.clientOptions);
        } else if (this.apiKey) {
          const client = await this.fromAPIKey(this.apiKey, this.clientOptions);
          client.scopes = this.scopes;
          const { credential } = await this.#prepareAndCacheClient(client);
          return credential;
        } else {
          const { credential } = await this.getApplicationDefaultAsync(this.clientOptions);
          return credential;
        }
      }
      /**
       * Creates a client which will fetch an ID token for authorization.
       * @param targetAudience the audience for the fetched ID token.
       * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
       */
      async getIdTokenClient(targetAudience) {
        const client = await this.getClient();
        if (!("fetchIdToken" in client)) {
          throw new Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
        }
        return new idtokenclient_1.IdTokenClient({ targetAudience, idTokenProvider: client });
      }
      /**
       * Automatically obtain application default credentials, and return
       * an access token for making requests.
       */
      async getAccessToken() {
        const client = await this.getClient();
        return (await client.getAccessToken()).token;
      }
      /**
       * Obtain the HTTP headers that will provide authorization for a given
       * request.
       */
      async getRequestHeaders(url) {
        const client = await this.getClient();
        return client.getRequestHeaders(url);
      }
      /**
       * Obtain credentials for a request, then attach the appropriate headers to
       * the request options.
       * @param opts Axios or Request options on which to attach the headers
       */
      async authorizeRequest(opts = {}) {
        const url = opts.url;
        const client = await this.getClient();
        const headers = await client.getRequestHeaders(url);
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers, headers);
        return opts;
      }
      /**
       * A {@link fetch `fetch`} compliant API for {@link GoogleAuth}.
       *
       * @see {@link GoogleAuth.request} for the classic method.
       *
       * @remarks
       *
       * This is useful as a drop-in replacement for `fetch` API usage.
       *
       * @example
       *
       * ```ts
       * const auth = new GoogleAuth();
       * const fetchWithAuth: typeof fetch = (...args) => auth.fetch(...args);
       * await fetchWithAuth('https://example.com');
       * ```
       *
       * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
       * @returns the {@link GaxiosResponse} with Gaxios-added properties
       */
      async fetch(...args) {
        const client = await this.getClient();
        return client.fetch(...args);
      }
      /**
       * Automatically obtain application default credentials, and make an
       * HTTP request using the given options.
       *
       * @see {@link GoogleAuth.fetch} for the modern method.
       *
       * @param opts Axios request options for the HTTP request.
       */
      async request(opts) {
        const client = await this.getClient();
        return client.request(opts);
      }
      /**
       * Determine the compute environment in which the code is running.
       */
      getEnv() {
        return (0, envDetect_1.getEnv)();
      }
      /**
       * Sign the given data with the current private key, or go out
       * to the IAM API to sign it.
       * @param data The data to be signed.
       * @param endpoint A custom endpoint to use.
       *
       * @example
       * ```
       * sign('data', 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/');
       * ```
       */
      async sign(data, endpoint) {
        const client = await this.getClient();
        const universe = await this.getUniverseDomain();
        endpoint = endpoint || `https://iamcredentials.${universe}/v1/projects/-/serviceAccounts/`;
        if (client instanceof impersonated_1.Impersonated) {
          const signed = await client.sign(data);
          return signed.signedBlob;
        }
        const crypto = (0, crypto_1.createCrypto)();
        if (client instanceof jwtclient_1.JWT && client.key) {
          const sign = await crypto.sign(client.key, data);
          return sign;
        }
        const creds = await this.getCredentials();
        if (!creds.client_email) {
          throw new Error("Cannot sign data without `client_email`.");
        }
        return this.signBlob(crypto, creds.client_email, data, endpoint);
      }
      async signBlob(crypto, emailOrUniqueId, data, endpoint) {
        const url = new URL(endpoint + `${emailOrUniqueId}:signBlob`);
        const res = await this.request({
          method: "POST",
          url: url.href,
          data: {
            payload: crypto.encodeBase64StringUtf8(data)
          },
          retry: true,
          retryConfig: {
            httpMethodsToRetry: ["POST"]
          }
        });
        return res.data.signedBlob;
      }
    };
    exports.GoogleAuth = GoogleAuth;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/iam.js
var require_iam = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/iam.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IAMAuth = void 0;
    var IAMAuth = class {
      selector;
      token;
      /**
       * IAM credentials.
       *
       * @param selector the iam authority selector
       * @param token the token
       * @constructor
       */
      constructor(selector, token) {
        this.selector = selector;
        this.token = token;
        this.selector = selector;
        this.token = token;
      }
      /**
       * Acquire the HTTP headers required to make an authenticated request.
       */
      getRequestHeaders() {
        return {
          "x-goog-iam-authority-selector": this.selector,
          "x-goog-iam-authorization-token": this.token
        };
      }
    };
    exports.IAMAuth = IAMAuth;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/downscopedclient.js
var require_downscopedclient = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/downscopedclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DownscopedClient = exports.EXPIRATION_TIME_OFFSET = exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
    var gaxios_1 = require_src();
    var stream = __require("stream");
    var authclient_1 = require_authclient();
    var sts = require_stscredentials();
    var STS_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
    var STS_REQUEST_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
    var STS_SUBJECT_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
    exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
    exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1e3;
    var DownscopedClient = class extends authclient_1.AuthClient {
      authClient;
      credentialAccessBoundary;
      cachedDownscopedAccessToken;
      stsCredential;
      /**
       * Instantiates a downscoped client object using the provided source
       * AuthClient and credential access boundary rules.
       * To downscope permissions of a source AuthClient, a Credential Access
       * Boundary that specifies which resources the new credential can access, as
       * well as an upper bound on the permissions that are available on each
       * resource, has to be defined. A downscoped client can then be instantiated
       * using the source AuthClient and the Credential Access Boundary.
       * @param options the {@link DownscopedClientOptions `DownscopedClientOptions`} to use. Passing an `AuthClient` directly is **@DEPRECATED**.
       * @param credentialAccessBoundary **@DEPRECATED**. Provide a {@link DownscopedClientOptions `DownscopedClientOptions`} object in the first parameter instead.
       */
      constructor(options, credentialAccessBoundary = {
        accessBoundary: {
          accessBoundaryRules: []
        }
      }) {
        super(options instanceof authclient_1.AuthClient ? {} : options);
        if (options instanceof authclient_1.AuthClient) {
          this.authClient = options;
          this.credentialAccessBoundary = credentialAccessBoundary;
        } else {
          this.authClient = options.authClient;
          this.credentialAccessBoundary = options.credentialAccessBoundary;
        }
        if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) {
          throw new Error("At least one access boundary rule needs to be defined.");
        } else if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > exports.MAX_ACCESS_BOUNDARY_RULES_COUNT) {
          throw new Error(`The provided access boundary has more than ${exports.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
        }
        for (const rule of this.credentialAccessBoundary.accessBoundary.accessBoundaryRules) {
          if (rule.availablePermissions.length === 0) {
            throw new Error("At least one permission should be defined in access boundary rules.");
          }
        }
        this.stsCredential = new sts.StsCredentials({
          tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token`
        });
        this.cachedDownscopedAccessToken = null;
      }
      /**
       * Provides a mechanism to inject Downscoped access tokens directly.
       * The expiry_date field is required to facilitate determination of the token
       * expiration which would make it easier for the token consumer to handle.
       * @param credentials The Credentials object to set on the current client.
       */
      setCredentials(credentials) {
        if (!credentials.expiry_date) {
          throw new Error("The access token expiry_date field is missing in the provided credentials.");
        }
        super.setCredentials(credentials);
        this.cachedDownscopedAccessToken = credentials;
      }
      async getAccessToken() {
        if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) {
          await this.refreshAccessTokenAsync();
        }
        return {
          token: this.cachedDownscopedAccessToken.access_token,
          expirationTime: this.cachedDownscopedAccessToken.expiry_date,
          res: this.cachedDownscopedAccessToken.res
        };
      }
      /**
       * The main authentication interface. It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * The result has the form:
       * { authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = new Headers({
          authorization: `Bearer ${accessTokenResponse.token}`
        });
        return this.addSharedMetadataHeaders(headers);
      }
      request(opts, callback) {
        if (callback) {
          this.requestAsync(opts).then((r) => callback(null, r), (e) => {
            return callback(e, e.response);
          });
        } else {
          return this.requestAsync(opts);
        }
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
          const requestHeaders = await this.getRequestHeaders();
          opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
          this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
          response = await this.transporter.request(opts);
        } catch (e) {
          const res = e.response;
          if (res) {
            const statusCode = res.status;
            const isReadableStream = res.config.data instanceof stream.Readable;
            const isAuthErr = statusCode === 401 || statusCode === 403;
            if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
              await this.refreshAccessTokenAsync();
              return await this.requestAsync(opts, true);
            }
          }
          throw e;
        }
        return response;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * GCP access tokens are retrieved from authclient object/source credential.
       * Then GCP access tokens are exchanged for downscoped access tokens via the
       * token exchange endpoint.
       * @return A promise that resolves with the fresh downscoped access token.
       */
      async refreshAccessTokenAsync() {
        const subjectToken = (await this.authClient.getAccessToken()).token;
        const stsCredentialsOptions = {
          grantType: STS_GRANT_TYPE,
          requestedTokenType: STS_REQUEST_TOKEN_TYPE,
          subjectToken,
          subjectTokenType: STS_SUBJECT_TOKEN_TYPE
        };
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, void 0, this.credentialAccessBoundary);
        const sourceCredExpireDate = this.authClient.credentials?.expiry_date || null;
        const expiryDate = stsResponse.expires_in ? (/* @__PURE__ */ new Date()).getTime() + stsResponse.expires_in * 1e3 : sourceCredExpireDate;
        this.cachedDownscopedAccessToken = {
          access_token: stsResponse.access_token,
          expiry_date: expiryDate,
          res: stsResponse.res
        };
        this.credentials = {};
        Object.assign(this.credentials, this.cachedDownscopedAccessToken);
        delete this.credentials.res;
        this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedDownscopedAccessToken.expiry_date,
          access_token: this.cachedDownscopedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null
        });
        return this.cachedDownscopedAccessToken;
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param downscopedAccessToken The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(downscopedAccessToken) {
        const now = (/* @__PURE__ */ new Date()).getTime();
        return downscopedAccessToken.expiry_date ? now >= downscopedAccessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
      }
    };
    exports.DownscopedClient = DownscopedClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/passthrough.js
var require_passthrough = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/passthrough.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PassThroughClient = void 0;
    var authclient_1 = require_authclient();
    var PassThroughClient = class extends authclient_1.AuthClient {
      /**
       * Creates a request without any authentication headers or checks.
       *
       * @remarks
       *
       * In testing environments it may be useful to change the provided
       * {@link AuthClient.transporter} for any desired request overrides/handling.
       *
       * @param opts
       * @returns The response of the request.
       */
      async request(opts) {
        return this.transporter.request(opts);
      }
      /**
       * A required method of the base class.
       * Always will return an empty object.
       *
       * @returns {}
       */
      async getAccessToken() {
        return {};
      }
      /**
       * A required method of the base class.
       * Always will return an empty object.
       *
       * @returns {}
       */
      async getRequestHeaders() {
        return new Headers();
      }
    };
    exports.PassThroughClient = PassThroughClient;
  }
});

// node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/index.js
var require_src4 = __commonJS({
  "node_modules/.pnpm/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoogleAuth = exports.auth = exports.PassThroughClient = exports.ExternalAccountAuthorizedUserClient = exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = exports.ExecutableError = exports.PluggableAuthClient = exports.DownscopedClient = exports.BaseExternalAccountClient = exports.ExternalAccountClient = exports.IdentityPoolClient = exports.AwsRequestSigner = exports.AwsClient = exports.UserRefreshClient = exports.LoginTicket = exports.ClientAuthentication = exports.OAuth2Client = exports.CodeChallengeMethod = exports.Impersonated = exports.JWT = exports.JWTAccess = exports.IdTokenClient = exports.IAMAuth = exports.GCPEnv = exports.Compute = exports.DEFAULT_UNIVERSE = exports.AuthClient = exports.gaxios = exports.gcpMetadata = void 0;
    var googleauth_1 = require_googleauth();
    Object.defineProperty(exports, "GoogleAuth", { enumerable: true, get: function() {
      return googleauth_1.GoogleAuth;
    } });
    exports.gcpMetadata = require_src3();
    exports.gaxios = require_src();
    var authclient_1 = require_authclient();
    Object.defineProperty(exports, "AuthClient", { enumerable: true, get: function() {
      return authclient_1.AuthClient;
    } });
    Object.defineProperty(exports, "DEFAULT_UNIVERSE", { enumerable: true, get: function() {
      return authclient_1.DEFAULT_UNIVERSE;
    } });
    var computeclient_1 = require_computeclient();
    Object.defineProperty(exports, "Compute", { enumerable: true, get: function() {
      return computeclient_1.Compute;
    } });
    var envDetect_1 = require_envDetect();
    Object.defineProperty(exports, "GCPEnv", { enumerable: true, get: function() {
      return envDetect_1.GCPEnv;
    } });
    var iam_1 = require_iam();
    Object.defineProperty(exports, "IAMAuth", { enumerable: true, get: function() {
      return iam_1.IAMAuth;
    } });
    var idtokenclient_1 = require_idtokenclient();
    Object.defineProperty(exports, "IdTokenClient", { enumerable: true, get: function() {
      return idtokenclient_1.IdTokenClient;
    } });
    var jwtaccess_1 = require_jwtaccess();
    Object.defineProperty(exports, "JWTAccess", { enumerable: true, get: function() {
      return jwtaccess_1.JWTAccess;
    } });
    var jwtclient_1 = require_jwtclient();
    Object.defineProperty(exports, "JWT", { enumerable: true, get: function() {
      return jwtclient_1.JWT;
    } });
    var impersonated_1 = require_impersonated();
    Object.defineProperty(exports, "Impersonated", { enumerable: true, get: function() {
      return impersonated_1.Impersonated;
    } });
    var oauth2client_1 = require_oauth2client();
    Object.defineProperty(exports, "CodeChallengeMethod", { enumerable: true, get: function() {
      return oauth2client_1.CodeChallengeMethod;
    } });
    Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function() {
      return oauth2client_1.OAuth2Client;
    } });
    Object.defineProperty(exports, "ClientAuthentication", { enumerable: true, get: function() {
      return oauth2client_1.ClientAuthentication;
    } });
    var loginticket_1 = require_loginticket();
    Object.defineProperty(exports, "LoginTicket", { enumerable: true, get: function() {
      return loginticket_1.LoginTicket;
    } });
    var refreshclient_1 = require_refreshclient();
    Object.defineProperty(exports, "UserRefreshClient", { enumerable: true, get: function() {
      return refreshclient_1.UserRefreshClient;
    } });
    var awsclient_1 = require_awsclient();
    Object.defineProperty(exports, "AwsClient", { enumerable: true, get: function() {
      return awsclient_1.AwsClient;
    } });
    var awsrequestsigner_1 = require_awsrequestsigner();
    Object.defineProperty(exports, "AwsRequestSigner", { enumerable: true, get: function() {
      return awsrequestsigner_1.AwsRequestSigner;
    } });
    var identitypoolclient_1 = require_identitypoolclient();
    Object.defineProperty(exports, "IdentityPoolClient", { enumerable: true, get: function() {
      return identitypoolclient_1.IdentityPoolClient;
    } });
    var externalclient_1 = require_externalclient();
    Object.defineProperty(exports, "ExternalAccountClient", { enumerable: true, get: function() {
      return externalclient_1.ExternalAccountClient;
    } });
    var baseexternalclient_1 = require_baseexternalclient();
    Object.defineProperty(exports, "BaseExternalAccountClient", { enumerable: true, get: function() {
      return baseexternalclient_1.BaseExternalAccountClient;
    } });
    var downscopedclient_1 = require_downscopedclient();
    Object.defineProperty(exports, "DownscopedClient", { enumerable: true, get: function() {
      return downscopedclient_1.DownscopedClient;
    } });
    var pluggable_auth_client_1 = require_pluggable_auth_client();
    Object.defineProperty(exports, "PluggableAuthClient", { enumerable: true, get: function() {
      return pluggable_auth_client_1.PluggableAuthClient;
    } });
    Object.defineProperty(exports, "ExecutableError", { enumerable: true, get: function() {
      return pluggable_auth_client_1.ExecutableError;
    } });
    var externalAccountAuthorizedUserClient_1 = require_externalAccountAuthorizedUserClient();
    Object.defineProperty(exports, "EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE", { enumerable: true, get: function() {
      return externalAccountAuthorizedUserClient_1.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE;
    } });
    Object.defineProperty(exports, "ExternalAccountAuthorizedUserClient", { enumerable: true, get: function() {
      return externalAccountAuthorizedUserClient_1.ExternalAccountAuthorizedUserClient;
    } });
    var passthrough_1 = require_passthrough();
    Object.defineProperty(exports, "PassThroughClient", { enumerable: true, get: function() {
      return passthrough_1.PassThroughClient;
    } });
    __exportStar(require_googleToken(), exports);
    var auth = new googleauth_1.GoogleAuth();
    exports.auth = auth;
  }
});
export default require_src4();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dheGlvc0A3LjEuNC9ub2RlX21vZHVsZXMvZ2F4aW9zL3BhY2thZ2UuanNvbiIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2F4aW9zQDcuMS40L25vZGVfbW9kdWxlcy9nYXhpb3Mvc3JjL3V0aWwuY3RzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nYXhpb3NANy4xLjQvbm9kZV9tb2R1bGVzL2dheGlvcy9zcmMvY29tbW9uLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nYXhpb3NANy4xLjQvbm9kZV9tb2R1bGVzL2dheGlvcy9zcmMvcmV0cnkudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dheGlvc0A3LjEuNC9ub2RlX21vZHVsZXMvZ2F4aW9zL3NyYy9pbnRlcmNlcHRvci50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2F4aW9zQDcuMS40L25vZGVfbW9kdWxlcy9nYXhpb3Mvc3JjL2dheGlvcy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2F4aW9zQDcuMS40L25vZGVfbW9kdWxlcy9nYXhpb3Mvc3JjL2luZGV4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nY3AtbWV0YWRhdGFAOC4xLjIvbm9kZV9tb2R1bGVzL2djcC1tZXRhZGF0YS9zcmMvZ2NwLXJlc2lkZW5jeS50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWxvZ2dpbmctdXRpbHNAMS4xLjMvbm9kZV9tb2R1bGVzL2dvb2dsZS1sb2dnaW5nLXV0aWxzL3NyYy9jb2xvdXJzLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtbG9nZ2luZy11dGlsc0AxLjEuMy9ub2RlX21vZHVsZXMvZ29vZ2xlLWxvZ2dpbmctdXRpbHMvc3JjL2xvZ2dpbmctdXRpbHMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1sb2dnaW5nLXV0aWxzQDEuMS4zL25vZGVfbW9kdWxlcy9nb29nbGUtbG9nZ2luZy11dGlscy9zcmMvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2djcC1tZXRhZGF0YUA4LjEuMi9ub2RlX21vZHVsZXMvZ2NwLW1ldGFkYXRhL3NyYy9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2NyeXB0by9zaGFyZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9jcnlwdG8vYnJvd3Nlci9jcnlwdG8uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9jcnlwdG8vbm9kZS9jcnlwdG8uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9jcnlwdG8vY3J5cHRvLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvdXRpbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvcGFja2FnZS5qc29uIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvc2hhcmVkLmNqcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvYXV0aGNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvbG9naW50aWNrZXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL29hdXRoMmNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvY29tcHV0ZWNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvaWR0b2tlbmNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvZW52RGV0ZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvZ3Rva2VuL2p3c1NpZ24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9ndG9rZW4vZ2V0VG9rZW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9ndG9rZW4vZXJyb3JXaXRoQ29kZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2d0b2tlbi9nZXRDcmVkZW50aWFscy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2d0b2tlbi90b2tlbkhhbmRsZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9ndG9rZW4vcmV2b2tlVG9rZW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9ndG9rZW4vZ29vZ2xlVG9rZW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL2p3dGFjY2Vzcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvand0Y2xpZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9yZWZyZXNoY2xpZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9pbXBlcnNvbmF0ZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL29hdXRoMmNvbW1vbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvc3RzY3JlZGVudGlhbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL2Jhc2VleHRlcm5hbGNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvZmlsZXN1YmplY3R0b2tlbnN1cHBsaWVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC91cmxzdWJqZWN0dG9rZW5zdXBwbGllci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvY2VydGlmaWNhdGVzdWJqZWN0dG9rZW5zdXBwbGllci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvaWRlbnRpdHlwb29sY2xpZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9hd3NyZXF1ZXN0c2lnbmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9kZWZhdWx0YXdzc2VjdXJpdHljcmVkZW50aWFsc3N1cHBsaWVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9hd3NjbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL2V4ZWN1dGFibGUtcmVzcG9uc2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL3BsdWdnYWJsZS1hdXRoLWhhbmRsZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL3BsdWdnYWJsZS1hdXRoLWNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ29vZ2xlLWF1dGgtbGlicmFyeUAxMC42LjIvbm9kZV9tb2R1bGVzL2dvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvZXh0ZXJuYWxjbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL2V4dGVybmFsQWNjb3VudEF1dGhvcml6ZWRVc2VyQ2xpZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9nb29nbGVhdXRoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9pYW0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL2Rvd25zY29wZWRjbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dvb2dsZS1hdXRoLWxpYnJhcnlAMTAuNi4yL25vZGVfbW9kdWxlcy9nb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL3Bhc3N0aHJvdWdoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9nb29nbGUtYXV0aC1saWJyYXJ5QDEwLjYuMi9ub2RlX21vZHVsZXMvZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwiZ2F4aW9zXCIsXG4gIFwidmVyc2lvblwiOiBcIjcuMS40XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIHNpbXBsZSBjb21tb24gSFRUUCBjbGllbnQgc3BlY2lmaWNhbGx5IGZvciBHb29nbGUgQVBJcyBhbmQgc2VydmljZXMuXCIsXG4gIFwibWFpblwiOiBcImJ1aWxkL2Nqcy9zcmMvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcImJ1aWxkL2Nqcy9zcmMvaW5kZXguZC50c1wiLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImJ1aWxkL1wiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IHtcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vYnVpbGQvZXNtL3NyYy9pbmRleC5kLnRzXCIsXG4gICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vYnVpbGQvZXNtL3NyYy9pbmRleC5qc1wiXG4gICAgICB9LFxuICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vYnVpbGQvY2pzL3NyYy9pbmRleC5kLnRzXCIsXG4gICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vYnVpbGQvY2pzL3NyYy9pbmRleC5qc1wiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwibGludFwiOiBcImd0cyBjaGVjayAtLW5vLWlubGluZS1jb25maWdcIixcbiAgICBcInRlc3RcIjogXCJjOCBtb2NoYSBidWlsZC9lc20vdGVzdFwiLFxuICAgIFwicHJlc3lzdGVtLXRlc3RcIjogXCJucG0gcnVuIGNvbXBpbGVcIixcbiAgICBcInN5c3RlbS10ZXN0XCI6IFwibW9jaGEgYnVpbGQvZXNtL3N5c3RlbS10ZXN0IC0tdGltZW91dCA4MDAwMFwiLFxuICAgIFwiY29tcGlsZVwiOiBcInRzYyAtYiAuL3RzY29uZmlnLmpzb24gLi90c2NvbmZpZy5janMuanNvbiAmJiBub2RlIHV0aWxzL2VuYWJsZS1lc20ubWpzXCIsXG4gICAgXCJmaXhcIjogXCJndHMgZml4XCIsXG4gICAgXCJwcmVwYXJlXCI6IFwibnBtIHJ1biBjb21waWxlXCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBjb21waWxlXCIsXG4gICAgXCJ3ZWJwYWNrXCI6IFwid2VicGFja1wiLFxuICAgIFwicHJlYnJvd3Nlci10ZXN0XCI6IFwibnBtIHJ1biBjb21waWxlXCIsXG4gICAgXCJicm93c2VyLXRlc3RcIjogXCJub2RlIGJ1aWxkL2Jyb3dzZXItdGVzdC9icm93c2VyLXRlc3QtcnVubmVyLmpzXCIsXG4gICAgXCJkb2NzXCI6IFwianNkb2MgLWMgLmpzZG9jLmpzXCIsXG4gICAgXCJkb2NzLXRlc3RcIjogXCJsaW5raW5hdG9yIGRvY3NcIixcbiAgICBcInByZWRvY3MtdGVzdFwiOiBcIm5wbSBydW4gZG9jc1wiLFxuICAgIFwic2FtcGxlcy10ZXN0XCI6IFwiY2Qgc2FtcGxlcy8gJiYgbnBtIGxpbmsgLi4vICYmIG5wbSB0ZXN0ICYmIGNkIC4uL1wiLFxuICAgIFwicHJlbGludFwiOiBcImNkIHNhbXBsZXM7IG5wbSBsaW5rIC4uLzsgbnBtIGluc3RhbGxcIixcbiAgICBcImNsZWFuXCI6IFwiZ3RzIGNsZWFuXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcImRpcmVjdG9yeVwiOiBcInBhY2thZ2VzL2dheGlvc1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWFwaXMvZ29vZ2xlLWNsb3VkLW5vZGUtY29yZS5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImdvb2dsZVwiXG4gIF0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xOFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwiR29vZ2xlLCBMTENcIixcbiAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlLTIuMFwiLFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1wiOiBcIl43LjE4LjZcIixcbiAgICBcIkB0eXBlcy9jb3JzXCI6IFwiXjIuOC42XCIsXG4gICAgXCJAdHlwZXMvZXhwcmVzc1wiOiBcIl41LjAuMFwiLFxuICAgIFwiQHR5cGVzL2V4dGVuZFwiOiBcIl4zLjAuMVwiLFxuICAgIFwiQHR5cGVzL21vY2hhXCI6IFwiXjEwLjAuMTBcIixcbiAgICBcIkB0eXBlcy9tdWx0aXBhcnR5XCI6IFwiNC4yLjFcIixcbiAgICBcIkB0eXBlcy9tdlwiOiBcIl4yLjEuMFwiLFxuICAgIFwiQHR5cGVzL25jcFwiOiBcIl4yLjAuOFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjIuMTMuMVwiLFxuICAgIFwiQHR5cGVzL3Npbm9uXCI6IFwiXjE3LjAuM1wiLFxuICAgIFwiQHR5cGVzL3RtcFwiOiBcIl4wLjIuNlwiLFxuICAgIFwiYXNzZXJ0XCI6IFwiXjIuMC4wXCIsXG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE3LjAuMFwiLFxuICAgIFwiYzhcIjogXCJeMTAuMS4zXCIsXG4gICAgXCJjb3JzXCI6IFwiXjIuOC41XCIsXG4gICAgXCJleHByZXNzXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJndHNcIjogXCJeNi4wLjJcIixcbiAgICBcImlzLWRvY2tlclwiOiBcIl4zLjAuMFwiLFxuICAgIFwianNkb2NcIjogXCJeNC4wLjRcIixcbiAgICBcImpzZG9jLWZyZXNoXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJqc2RvYy1yZWdpb24tdGFnXCI6IFwiXjQuMC4wXCIsXG4gICAgXCJrYXJtYVwiOiBcIl42LjAuMFwiLFxuICAgIFwia2FybWEtY2hyb21lLWxhdW5jaGVyXCI6IFwiXjMuMC4wXCIsXG4gICAgXCJrYXJtYS1jb3ZlcmFnZVwiOiBcIl4yLjAuMFwiLFxuICAgIFwia2FybWEtZmlyZWZveC1sYXVuY2hlclwiOiBcIl4yLjAuMFwiLFxuICAgIFwia2FybWEtbW9jaGFcIjogXCJeMi4wLjBcIixcbiAgICBcImthcm1hLXJlbWFwLWNvdmVyYWdlXCI6IFwiXjAuMS41XCIsXG4gICAgXCJrYXJtYS1zb3VyY2VtYXAtbG9hZGVyXCI6IFwiXjAuNC4wXCIsXG4gICAgXCJrYXJtYS13ZWJwYWNrXCI6IFwiXjUuMC4xXCIsXG4gICAgXCJsaW5raW5hdG9yXCI6IFwiXjYuMS4yXCIsXG4gICAgXCJtb2NoYVwiOiBcIl4xMS4xLjBcIixcbiAgICBcIm11bHRpcGFydHlcIjogXCJeNC4yLjFcIixcbiAgICBcIm12XCI6IFwiXjIuMS4xXCIsXG4gICAgXCJuY3BcIjogXCJeMi4wLjBcIixcbiAgICBcIm5vY2tcIjogXCJeMTQuMC41XCIsXG4gICAgXCJudWxsLWxvYWRlclwiOiBcIl40LjAuMVwiLFxuICAgIFwicGFjay1uLXBsYXlcIjogXCJeNC4wLjBcIixcbiAgICBcInB1cHBldGVlclwiOiBcIl4yNC4wLjBcIixcbiAgICBcInNpbm9uXCI6IFwiXjIxLjAuMFwiLFxuICAgIFwic3RyZWFtLWJyb3dzZXJpZnlcIjogXCJeMy4wLjBcIixcbiAgICBcInRtcFwiOiBcIjAuMi41XCIsXG4gICAgXCJ0cy1sb2FkZXJcIjogXCJeOS41LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCI1LjguM1wiLFxuICAgIFwid2VicGFja1wiOiBcIl41Ljk3LjFcIixcbiAgICBcIndlYnBhY2stY2xpXCI6IFwiXjYuMC4xXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZXh0ZW5kXCI6IFwiXjMuMC4yXCIsXG4gICAgXCJodHRwcy1wcm94eS1hZ2VudFwiOiBcIl43LjAuMVwiLFxuICAgIFwibm9kZS1mZXRjaFwiOiBcIl4zLjMuMlwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlYXBpcy9nb29nbGUtY2xvdWQtbm9kZS1jb3JlL3RyZWUvbWFpbi9wYWNrYWdlcy9nYXhpb3NcIlxufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjUgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21BcnJheUJ1ZmZlclRvSGV4ID0gZnJvbUFycmF5QnVmZmVyVG9IZXg7XG4vKipcbiAqIENvbnZlcnRzIGFuIEFycmF5QnVmZmVyIHRvIGEgaGV4YWRlY2ltYWwgc3RyaW5nLlxuICogQHBhcmFtIGFycmF5QnVmZmVyIFRoZSBBcnJheUJ1ZmZlciB0byBjb252ZXJ0IHRvIGhleGFkZWNpbWFsIHN0cmluZy5cbiAqIEByZXR1cm4gVGhlIGhleGFkZWNpbWFsIGVuY29kaW5nIG9mIHRoZSBBcnJheUJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyVG9IZXgoYXJyYXlCdWZmZXIpIHtcbiAgICAvLyBDb252ZXJ0IGJ1ZmZlciB0byBieXRlIGFycmF5LlxuICAgIGNvbnN0IGJ5dGVBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICAvLyBDb252ZXJ0IGJ5dGVzIHRvIGhleCBzdHJpbmcuXG4gICAgcmV0dXJuIGJ5dGVBcnJheVxuICAgICAgICAubWFwKGJ5dGUgPT4ge1xuICAgICAgICByZXR1cm4gYnl0ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB9KVxuICAgICAgICAuam9pbignJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFyZWQuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4vKiBnbG9iYWwgd2luZG93ICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJyb3dzZXJDcnlwdG8gPSB2b2lkIDA7XG4vLyBUaGlzIGZpbGUgaW1wbGVtZW50cyBjcnlwdG8gZnVuY3Rpb25zIHdlIG5lZWQgdXNpbmcgaW4tYnJvd3NlclxuLy8gU3VidGxlQ3J5cHRvIGludGVyZmFjZSBgd2luZG93LmNyeXB0by5zdWJ0bGVgLlxuY29uc3QgYmFzZTY0anMgPSByZXF1aXJlKFwiYmFzZTY0LWpzXCIpO1xuY29uc3Qgc2hhcmVkXzEgPSByZXF1aXJlKFwiLi4vc2hhcmVkXCIpO1xuY2xhc3MgQnJvd3NlckNyeXB0byB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgd2luZG93LmNyeXB0byA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICB3aW5kb3cuY3J5cHRvLnN1YnRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWJ0bGVDcnlwdG8gbm90IGZvdW5kLiBNYWtlIHN1cmUgaXQncyBhbiBodHRwczovLyB3ZWJzaXRlLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBzaGEyNTZEaWdlc3RCYXNlNjQoc3RyKSB7XG4gICAgICAgIC8vIFN1YnRsZUNyeXB0byBkaWdlc3QoKSBtZXRob2QgaXMgYXN5bmMsIHNvIHdlIG11c3QgbWFrZVxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBhc3luYyBhcyB3ZWxsLlxuICAgICAgICAvLyBUbyBjYWxjdWxhdGUgU0hBMjU2IGRpZ2VzdCB1c2luZyBTdWJ0bGVDcnlwdG8sIHdlIGZpcnN0XG4gICAgICAgIC8vIG5lZWQgdG8gY29udmVydCBhbiBpbnB1dCBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXI6XG4gICAgICAgIGNvbnN0IGlucHV0QnVmZmVyID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHN0cik7XG4gICAgICAgIC8vIFJlc3VsdCBpcyBBcnJheUJ1ZmZlciBhcyB3ZWxsLlxuICAgICAgICBjb25zdCBvdXRwdXRCdWZmZXIgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBpbnB1dEJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBiYXNlNjRqcy5mcm9tQnl0ZUFycmF5KG5ldyBVaW50OEFycmF5KG91dHB1dEJ1ZmZlcikpO1xuICAgIH1cbiAgICByYW5kb21CeXRlc0Jhc2U2NChjb3VudCkge1xuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGNvdW50KTtcbiAgICAgICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xuICAgICAgICByZXR1cm4gYmFzZTY0anMuZnJvbUJ5dGVBcnJheShhcnJheSk7XG4gICAgfVxuICAgIHN0YXRpYyBwYWRCYXNlNjQoYmFzZTY0KSB7XG4gICAgICAgIC8vIGJhc2U2NGpzIHJlcXVpcmVzIHBhZGRpbmcsIHNvIGxldCdzIGFkZCBzb21lICc9J1xuICAgICAgICB3aGlsZSAoYmFzZTY0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgICAgICAgIGJhc2U2NCArPSAnPSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U2NDtcbiAgICB9XG4gICAgYXN5bmMgdmVyaWZ5KHB1YmtleSwgZGF0YSwgc2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IGFsZ28gPSB7XG4gICAgICAgICAgICBuYW1lOiAnUlNBU1NBLVBLQ1MxLXYxXzUnLFxuICAgICAgICAgICAgaGFzaDogeyBuYW1lOiAnU0hBLTI1NicgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGRhdGEpO1xuICAgICAgICBjb25zdCBzaWduYXR1cmVBcnJheSA9IGJhc2U2NGpzLnRvQnl0ZUFycmF5KEJyb3dzZXJDcnlwdG8ucGFkQmFzZTY0KHNpZ25hdHVyZSkpO1xuICAgICAgICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ2p3aycsIHB1YmtleSwgYWxnbywgdHJ1ZSwgWyd2ZXJpZnknXSk7XG4gICAgICAgIC8vIFN1YnRsZUNyeXB0bydzIHZlcmlmeSBtZXRob2QgaXMgYXN5bmMgc28gd2UgbXVzdCBtYWtlXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGFzeW5jIGFzIHdlbGwuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLnZlcmlmeShhbGdvLCBjcnlwdG9LZXksIEJ1ZmZlci5mcm9tKHNpZ25hdHVyZUFycmF5KSwgZGF0YUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgc2lnbihwcml2YXRlS2V5LCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFsZ28gPSB7XG4gICAgICAgICAgICBuYW1lOiAnUlNBU1NBLVBLQ1MxLXYxXzUnLFxuICAgICAgICAgICAgaGFzaDogeyBuYW1lOiAnU0hBLTI1NicgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGRhdGEpO1xuICAgICAgICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ2p3aycsIHByaXZhdGVLZXksIGFsZ28sIHRydWUsIFsnc2lnbiddKTtcbiAgICAgICAgLy8gU3VidGxlQ3J5cHRvJ3Mgc2lnbiBtZXRob2QgaXMgYXN5bmMgc28gd2UgbXVzdCBtYWtlXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGFzeW5jIGFzIHdlbGwuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLnNpZ24oYWxnbywgY3J5cHRvS2V5LCBkYXRhQXJyYXkpO1xuICAgICAgICByZXR1cm4gYmFzZTY0anMuZnJvbUJ5dGVBcnJheShuZXcgVWludDhBcnJheShyZXN1bHQpKTtcbiAgICB9XG4gICAgZGVjb2RlQmFzZTY0U3RyaW5nVXRmOChiYXNlNjQpIHtcbiAgICAgICAgY29uc3QgdWludDhhcnJheSA9IGJhc2U2NGpzLnRvQnl0ZUFycmF5KEJyb3dzZXJDcnlwdG8ucGFkQmFzZTY0KGJhc2U2NCkpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUodWludDhhcnJheSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVuY29kZUJhc2U2NFN0cmluZ1V0ZjgodGV4dCkge1xuICAgICAgICBjb25zdCB1aW50OGFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHRleHQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBiYXNlNjRqcy5mcm9tQnl0ZUFycmF5KHVpbnQ4YXJyYXkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgU0hBLTI1NiBoYXNoIG9mIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gICAgICogQHBhcmFtIHN0ciBUaGUgcGxhaW4gdGV4dCBzdHJpbmcgdG8gaGFzaC5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFNIQS0yNTYgaGFzaCBvZiB0aGUgcHJvdmlkZWRcbiAgICAgKiAgIHN0cmluZyBpbiBoZXhhZGVjaW1hbCBlbmNvZGluZy5cbiAgICAgKi9cbiAgICBhc3luYyBzaGEyNTZEaWdlc3RIZXgoc3RyKSB7XG4gICAgICAgIC8vIFN1YnRsZUNyeXB0byBkaWdlc3QoKSBtZXRob2QgaXMgYXN5bmMsIHNvIHdlIG11c3QgbWFrZVxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBhc3luYyBhcyB3ZWxsLlxuICAgICAgICAvLyBUbyBjYWxjdWxhdGUgU0hBMjU2IGRpZ2VzdCB1c2luZyBTdWJ0bGVDcnlwdG8sIHdlIGZpcnN0XG4gICAgICAgIC8vIG5lZWQgdG8gY29udmVydCBhbiBpbnB1dCBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXI6XG4gICAgICAgIGNvbnN0IGlucHV0QnVmZmVyID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHN0cik7XG4gICAgICAgIC8vIFJlc3VsdCBpcyBBcnJheUJ1ZmZlciBhcyB3ZWxsLlxuICAgICAgICBjb25zdCBvdXRwdXRCdWZmZXIgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBpbnB1dEJ1ZmZlcik7XG4gICAgICAgIHJldHVybiAoMCwgc2hhcmVkXzEuZnJvbUFycmF5QnVmZmVyVG9IZXgpKG91dHB1dEJ1ZmZlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBITUFDIGhhc2ggb2YgYSBtZXNzYWdlIHVzaW5nIHRoZSBwcm92aWRlZCBjcnlwdG8ga2V5IGFuZCB0aGVcbiAgICAgKiBTSEEtMjU2IGFsZ29yaXRobS5cbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBzZWNyZXQgY3J5cHRvIGtleSBpbiB1dGYtOCBvciBBcnJheUJ1ZmZlciBmb3JtYXQuXG4gICAgICogQHBhcmFtIG1zZyBUaGUgcGxhaW4gdGV4dCBtZXNzYWdlLlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgSE1BQy1TSEEyNTYgaGFzaCBpbiBBcnJheUJ1ZmZlclxuICAgICAqICAgZm9ybWF0LlxuICAgICAqL1xuICAgIGFzeW5jIHNpZ25XaXRoSG1hY1NoYTI1NihrZXksIG1zZykge1xuICAgICAgICAvLyBDb252ZXJ0IGtleSwgaWYgcHJvdmlkZWQgaW4gQXJyYXlCdWZmZXIgZm9ybWF0LCB0byBzdHJpbmcuXG4gICAgICAgIGNvbnN0IHJhd0tleSA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGtleVxuICAgICAgICAgICAgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLm5ldyBVaW50MTZBcnJheShrZXkpKTtcbiAgICAgICAgY29uc3QgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IGNyeXB0b0tleSA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgZW5jLmVuY29kZShyYXdLZXkpLCB7XG4gICAgICAgICAgICBuYW1lOiAnSE1BQycsXG4gICAgICAgICAgICBoYXNoOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NIQS0yNTYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgZmFsc2UsIFsnc2lnbiddKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5jcnlwdG8uc3VidGxlLnNpZ24oJ0hNQUMnLCBjcnlwdG9LZXksIGVuYy5lbmNvZGUobXNnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ccm93c2VyQ3J5cHRvID0gQnJvd3NlckNyeXB0bztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyeXB0by5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTm9kZUNyeXB0byA9IHZvaWQgMDtcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5jbGFzcyBOb2RlQ3J5cHRvIHtcbiAgICBhc3luYyBzaGEyNTZEaWdlc3RCYXNlNjQoc3RyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHN0cikuZGlnZXN0KCdiYXNlNjQnKTtcbiAgICB9XG4gICAgcmFuZG9tQnl0ZXNCYXNlNjQoY291bnQpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyhjb3VudCkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH1cbiAgICBhc3luYyB2ZXJpZnkocHVia2V5LCBkYXRhLCBzaWduYXR1cmUpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZXIgPSBjcnlwdG8uY3JlYXRlVmVyaWZ5KCdSU0EtU0hBMjU2Jyk7XG4gICAgICAgIHZlcmlmaWVyLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgdmVyaWZpZXIuZW5kKCk7XG4gICAgICAgIHJldHVybiB2ZXJpZmllci52ZXJpZnkocHVia2V5LCBzaWduYXR1cmUsICdiYXNlNjQnKTtcbiAgICB9XG4gICAgYXN5bmMgc2lnbihwcml2YXRlS2V5LCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IGNyeXB0by5jcmVhdGVTaWduKCdSU0EtU0hBMjU2Jyk7XG4gICAgICAgIHNpZ25lci51cGRhdGUoZGF0YSk7XG4gICAgICAgIHNpZ25lci5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHNpZ25lci5zaWduKHByaXZhdGVLZXksICdiYXNlNjQnKTtcbiAgICB9XG4gICAgZGVjb2RlQmFzZTY0U3RyaW5nVXRmOChiYXNlNjQpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJhc2U2NCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICAgIH1cbiAgICBlbmNvZGVCYXNlNjRTdHJpbmdVdGY4KHRleHQpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRleHQsICd1dGYtOCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIFNIQS0yNTYgaGFzaCBvZiB0aGUgcHJvdmlkZWQgc3RyaW5nLlxuICAgICAqIEBwYXJhbSBzdHIgVGhlIHBsYWluIHRleHQgc3RyaW5nIHRvIGhhc2guXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBTSEEtMjU2IGhhc2ggb2YgdGhlIHByb3ZpZGVkXG4gICAgICogICBzdHJpbmcgaW4gaGV4YWRlY2ltYWwgZW5jb2RpbmcuXG4gICAgICovXG4gICAgYXN5bmMgc2hhMjU2RGlnZXN0SGV4KHN0cikge1xuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShzdHIpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBITUFDIGhhc2ggb2YgYSBtZXNzYWdlIHVzaW5nIHRoZSBwcm92aWRlZCBjcnlwdG8ga2V5IGFuZCB0aGVcbiAgICAgKiBTSEEtMjU2IGFsZ29yaXRobS5cbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBzZWNyZXQgY3J5cHRvIGtleSBpbiB1dGYtOCBvciBBcnJheUJ1ZmZlciBmb3JtYXQuXG4gICAgICogQHBhcmFtIG1zZyBUaGUgcGxhaW4gdGV4dCBtZXNzYWdlLlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgSE1BQy1TSEEyNTYgaGFzaCBpbiBBcnJheUJ1ZmZlclxuICAgICAqICAgZm9ybWF0LlxuICAgICAqL1xuICAgIGFzeW5jIHNpZ25XaXRoSG1hY1NoYTI1NihrZXksIG1zZykge1xuICAgICAgICBjb25zdCBjcnlwdG9LZXkgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IGtleSA6IHRvQnVmZmVyKGtleSk7XG4gICAgICAgIHJldHVybiB0b0FycmF5QnVmZmVyKGNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBjcnlwdG9LZXkpLnVwZGF0ZShtc2cpLmRpZ2VzdCgpKTtcbiAgICB9XG59XG5leHBvcnRzLk5vZGVDcnlwdG8gPSBOb2RlQ3J5cHRvO1xuLyoqXG4gKiBDb252ZXJ0cyBhIE5vZGUuanMgQnVmZmVyIHRvIGFuIEFycmF5QnVmZmVyLlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODYwOTI4OS9jb252ZXJ0LWEtYmluYXJ5LW5vZGVqcy1idWZmZXItdG8tamF2YXNjcmlwdC1hcnJheWJ1ZmZlclxuICogQHBhcmFtIGJ1ZmZlciBUaGUgQnVmZmVyIGlucHV0IHRvIGNvdmVydC5cbiAqIEByZXR1cm4gVGhlIEFycmF5QnVmZmVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheUJ1ZmZlcihidWZmZXIpIHtcbiAgICBjb25zdCBhYiA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXIubGVuZ3RoKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZpZXdbaV0gPSBidWZmZXJbaV07XG4gICAgfVxuICAgIHJldHVybiBhYjtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gQXJyYXlCdWZmZXIgdG8gYSBOb2RlLmpzIEJ1ZmZlci5cbiAqIEBwYXJhbSBhcnJheUJ1ZmZlciBUaGUgQXJyYXlCdWZmZXIgaW5wdXQgdG8gY292ZXJ0LlxuICogQHJldHVybiBUaGUgQnVmZmVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gdG9CdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3J5cHRvLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLyogZ2xvYmFsIHdpbmRvdyAqL1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNyeXB0byA9IGNyZWF0ZUNyeXB0bztcbmV4cG9ydHMuaGFzQnJvd3NlckNyeXB0byA9IGhhc0Jyb3dzZXJDcnlwdG87XG5jb25zdCBjcnlwdG9fMSA9IHJlcXVpcmUoXCIuL2Jyb3dzZXIvY3J5cHRvXCIpO1xuY29uc3QgY3J5cHRvXzIgPSByZXF1aXJlKFwiLi9ub2RlL2NyeXB0b1wiKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaGFyZWRcIiksIGV4cG9ydHMpO1xuLy8gQ3J5cHRvIGludGVyZmFjZSB3aWxsIHByb3ZpZGUgcmVxdWlyZWQgY3J5cHRvIGZ1bmN0aW9ucy5cbi8vIFVzZSBgY3JlYXRlQ3J5cHRvKClgIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGluc3RhbmNlXG4vLyBvZiBDcnlwdG8uIEl0IHdpbGwgZWl0aGVyIHVzZSBOb2RlLmpzIGBjcnlwdG9gIG1vZHVsZSwgb3Jcbi8vIHVzZSBicm93c2VyJ3MgU3VidGxlQ3J5cHRvIGludGVyZmFjZS4gU2luY2UgbW9zdCBvZiB0aGVcbi8vIFN1YnRsZUNyeXB0byBtZXRob2RzIHJldHVybiBwcm9taXNlcywgd2UgbXVzdCBtYWtlIHRob3NlXG4vLyBtZXRob2RzIHJldHVybiBwcm9taXNlcyBoZXJlIGFzIHdlbGwsIGV2ZW4gdGhvdWdoIGluIE5vZGUuanNcbi8vIHRoZXkgYXJlIHN5bmNocm9ub3VzLlxuZnVuY3Rpb24gY3JlYXRlQ3J5cHRvKCkge1xuICAgIGlmIChoYXNCcm93c2VyQ3J5cHRvKCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjcnlwdG9fMS5Ccm93c2VyQ3J5cHRvKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgY3J5cHRvXzIuTm9kZUNyeXB0bygpO1xufVxuZnVuY3Rpb24gaGFzQnJvd3NlckNyeXB0bygpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cuY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93LmNyeXB0by5zdWJ0bGUgIT09ICd1bmRlZmluZWQnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyeXB0by5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTFJVQ2FjaGUgPSB2b2lkIDA7XG5leHBvcnRzLnNuYWtlVG9DYW1lbCA9IHNuYWtlVG9DYW1lbDtcbmV4cG9ydHMub3JpZ2luYWxPckNhbWVsT3B0aW9ucyA9IG9yaWdpbmFsT3JDYW1lbE9wdGlvbnM7XG5leHBvcnRzLnJlbW92ZVVuZGVmaW5lZFZhbHVlc0luT2JqZWN0ID0gcmVtb3ZlVW5kZWZpbmVkVmFsdWVzSW5PYmplY3Q7XG5leHBvcnRzLmlzVmFsaWRGaWxlID0gaXNWYWxpZEZpbGU7XG5leHBvcnRzLmdldFdlbGxLbm93bkNlcnRpZmljYXRlQ29uZmlnRmlsZUxvY2F0aW9uID0gZ2V0V2VsbEtub3duQ2VydGlmaWNhdGVDb25maWdGaWxlTG9jYXRpb247XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IG9zID0gcmVxdWlyZShcIm9zXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgV0VMTF9LTk9XTl9DRVJUSUZJQ0FURV9DT05GSUdfRklMRSA9ICdjZXJ0aWZpY2F0ZV9jb25maWcuanNvbic7XG5jb25zdCBDTE9VRFNES19DT05GSUdfRElSRUNUT1JZID0gJ2djbG91ZCc7XG4vKipcbiAqIFJldHVybnMgdGhlIGNhbWVsIGNhc2Ugb2YgYSBwcm92aWRlZCBzdHJpbmcuXG4gKlxuICogQHJlbWFya3NcbiAqXG4gKiBNYXRjaCBhbnkgYF9gIGFuZCBub3QgYF9gIHBhaXIsIHRoZW4gcmV0dXJuIHRoZSB1cHBlcmNhc2Ugb2YgdGhlIG5vdCBgX2BcbiAqIGNoYXJhY3Rlci5cbiAqXG4gKiBAcGFyYW0gc3RyIHRoZSBzdHJpbmcgdG8gY29udmVydFxuICogQHJldHVybnMgdGhlIGNhbWVsQ2FzZSdkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzbmFrZVRvQ2FtZWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW19dW15fXSkvZywgbWF0Y2ggPT4gbWF0Y2guc2xpY2UoMSkudG9VcHBlckNhc2UoKSk7XG59XG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgYG9ialtrZXldYCBvciBgb2JqW2NhbWVsQ2FzZUtleV1gLCB3aXRoIGEgcHJlZmVyZW5jZVxuICogZm9yIG9yaWdpbmFsLCBub24tY2FtZWxDYXNlIGtleS5cbiAqXG4gKiBAcGFyYW0gb2JqIG9iamVjdCB0byBsb29rdXAgYSB2YWx1ZSBpblxuICogQHJldHVybnMgYSBgZ2V0YCBmdW5jdGlvbiBmb3IgZ2V0dGluZyBgb2JqW2tleSB8fCBzbmFrZUtleV1gLCBpZiBhdmFpbGFibGVcbiAqL1xuZnVuY3Rpb24gb3JpZ2luYWxPckNhbWVsT3B0aW9ucyhvYmopIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgYW4gaW5kZXggb2Ygb2JqZWN0LCBwcmVmZXJhYmx5IHNuYWtlX2Nhc2VcbiAgICAgKiBAcmV0dXJucyB0aGUgdmFsdWUgYG9ialtrZXkgfHwgc25ha2VLZXldYCwgaWYgYXZhaWxhYmxlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBvID0gKG9iaiB8fCB7fSk7XG4gICAgICAgIHJldHVybiBvW2tleV0gPz8gb1tzbmFrZVRvQ2FtZWwoa2V5KV07XG4gICAgfVxuICAgIHJldHVybiB7IGdldCB9O1xufVxuLyoqXG4gKiBBIHNpbXBsZSBMUlUgY2FjaGUgdXRpbGl0eS5cbiAqIE5vdCBtZWFudCBmb3IgZXh0ZXJuYWwgdXNhZ2UuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5jbGFzcyBMUlVDYWNoZSB7XG4gICAgY2FwYWNpdHk7XG4gICAgLyoqXG4gICAgICogTWFwcyBhcmUgaW4gb3JkZXIuIFRodXMsIHRoZSBvbGRlciBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtLlxuICAgICAqXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcH1cbiAgICAgKi9cbiAgICAjY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgbWF4QWdlO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYXBhY2l0eSA9IG9wdGlvbnMuY2FwYWNpdHk7XG4gICAgICAgIHRoaXMubWF4QWdlID0gb3B0aW9ucy5tYXhBZ2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBrZXkgdG8gdGhlIGVuZCBvZiB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gbW92ZVxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIGtleVxuICAgICAqL1xuICAgICNtb3ZlVG9FbmQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLiNjYWNoZS5kZWxldGUoa2V5KTtcbiAgICAgICAgdGhpcy4jY2FjaGUuc2V0KGtleSwge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBsYXN0QWNjZXNzZWQ6IERhdGUubm93KCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gaXRlbSB0byB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gdXBzZXJ0XG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUga2V5XG4gICAgICovXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy4jbW92ZVRvRW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB0aGlzLiNldmljdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaXRlbSBmcm9tIHRoZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byByZXRyaWV2ZVxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuI2NhY2hlLmdldChrZXkpO1xuICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI21vdmVUb0VuZChrZXksIGl0ZW0udmFsdWUpO1xuICAgICAgICB0aGlzLiNldmljdCgpO1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFpbnRhaW4gdGhlIGNhY2hlIGJhc2VkIG9uIGNhcGFjaXR5IGFuZCBUVEwuXG4gICAgICovXG4gICAgI2V2aWN0KCkge1xuICAgICAgICBjb25zdCBjdXRvZmZEYXRlID0gdGhpcy5tYXhBZ2UgPyBEYXRlLm5vdygpIC0gdGhpcy5tYXhBZ2UgOiAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmVjYXVzZSB3ZSBrbm93IE1hcHMgYXJlIGluIG9yZGVyLCB0aGlzIGl0ZW0gaXMgYm90aCB0aGVcbiAgICAgICAgICogbGFzdCBpdGVtIGluIHRoZSBsaXN0IChjYXBhY2l0eSkgYW5kIG9sZGVzdCAobWF4QWdlKS5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBvbGRlc3RJdGVtID0gdGhpcy4jY2FjaGUuZW50cmllcygpLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKCFvbGRlc3RJdGVtLmRvbmUgJiZcbiAgICAgICAgICAgICh0aGlzLiNjYWNoZS5zaXplID4gdGhpcy5jYXBhY2l0eSB8fCAvLyB0b28gbWFueVxuICAgICAgICAgICAgICAgIG9sZGVzdEl0ZW0udmFsdWVbMV0ubGFzdEFjY2Vzc2VkIDwgY3V0b2ZmRGF0ZSkgLy8gdG9vIG9sZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuI2NhY2hlLmRlbGV0ZShvbGRlc3RJdGVtLnZhbHVlWzBdKTtcbiAgICAgICAgICAgIG9sZGVzdEl0ZW0gPSB0aGlzLiNjYWNoZS5lbnRyaWVzKCkubmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5MUlVDYWNoZSA9IExSVUNhY2hlO1xuLy8gR2l2ZW4gYW5kIG9iamVjdCByZW1vdmUgZmllbGRzIHdoZXJlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbmZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFZhbHVlc0luT2JqZWN0KG9iamVjdCkge1xuICAgIE9iamVjdC5lbnRyaWVzKG9iamVjdCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iamVjdDtcbn1cbi8qKlxuICogSGVscGVyIHRvIGNoZWNrIGlmIGEgcGF0aCBwb2ludHMgdG8gYSB2YWxpZCBmaWxlLlxuICovXG5hc3luYyBmdW5jdGlvbiBpc1ZhbGlkRmlsZShmaWxlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMucHJvbWlzZXMubHN0YXQoZmlsZVBhdGgpO1xuICAgICAgICByZXR1cm4gc3RhdHMuaXNGaWxlKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZXMgdGhlIHdlbGwta25vd24gZ2Nsb3VkIGxvY2F0aW9uIGZvciB0aGUgY2VydGlmaWNhdGUgY29uZmlnIGZpbGUuXG4gKiBAcmV0dXJucyBUaGUgcGxhdGZvcm0tc3BlY2lmaWMgcGF0aCB0byB0aGUgY29uZmlndXJhdGlvbiBmaWxlLlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGdldFdlbGxLbm93bkNlcnRpZmljYXRlQ29uZmlnRmlsZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGNvbmZpZ0RpciA9IHByb2Nlc3MuZW52LkNMT1VEU0RLX0NPTkZJRyB8fFxuICAgICAgICAoX2lzV2luZG93cygpXG4gICAgICAgICAgICA/IHBhdGguam9pbihwcm9jZXNzLmVudi5BUFBEQVRBIHx8ICcnLCBDTE9VRFNES19DT05GSUdfRElSRUNUT1JZKVxuICAgICAgICAgICAgOiBwYXRoLmpvaW4ocHJvY2Vzcy5lbnYuSE9NRSB8fCAnJywgJy5jb25maWcnLCBDTE9VRFNES19DT05GSUdfRElSRUNUT1JZKSk7XG4gICAgcmV0dXJuIHBhdGguam9pbihjb25maWdEaXIsIFdFTExfS05PV05fQ0VSVElGSUNBVEVfQ09ORklHX0ZJTEUpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgb3BlcmF0aW5nIHN5c3RlbSBpcyBXaW5kb3dzLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgT1MgaXMgV2luZG93cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIF9pc1dpbmRvd3MoKSB7XG4gICAgcmV0dXJuIG9zLnBsYXRmb3JtKCkuc3RhcnRzV2l0aCgnd2luJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsICJ7XG4gIFwibmFtZVwiOiBcImdvb2dsZS1hdXRoLWxpYnJhcnlcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMTAuNi4yXCIsXG4gIFwiYXV0aG9yXCI6IFwiR29vZ2xlIEluYy5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdvb2dsZSBBUElzIEF1dGhlbnRpY2F0aW9uIENsaWVudCBMaWJyYXJ5IGZvciBOb2RlLmpzXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xOFwiXG4gIH0sXG4gIFwibWFpblwiOiBcIi4vYnVpbGQvc3JjL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2J1aWxkL3NyYy9pbmRleC5kLnRzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJkaXJlY3RvcnlcIjogXCJwYWNrYWdlcy9nb29nbGUtYXV0aC1saWJyYXJ5LW5vZGVqc1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWFwaXMvZ29vZ2xlLWNsb3VkLW5vZGUtY29yZS5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImdvb2dsZVwiLFxuICAgIFwiYXBpXCIsXG4gICAgXCJnb29nbGUgYXBpc1wiLFxuICAgIFwiY2xpZW50XCIsXG4gICAgXCJjbGllbnQgbGlicmFyeVwiXG4gIF0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhc2U2NC1qc1wiOiBcIl4xLjMuMFwiLFxuICAgIFwiZWNkc2Etc2lnLWZvcm1hdHRlclwiOiBcIl4xLjAuMTFcIixcbiAgICBcImdheGlvc1wiOiBcIl43LjEuNFwiLFxuICAgIFwiZ2NwLW1ldGFkYXRhXCI6IFwiOC4xLjJcIixcbiAgICBcImdvb2dsZS1sb2dnaW5nLXV0aWxzXCI6IFwiMS4xLjNcIixcbiAgICBcImp3c1wiOiBcIl40LjAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9iYXNlNjQtanNcIjogXCJeMS4yLjVcIixcbiAgICBcIkB0eXBlcy9qd3NcIjogXCJeMy4xLjBcIixcbiAgICBcIkB0eXBlcy9tb2NoYVwiOiBcIl4xMC4wLjEwXCIsXG4gICAgXCJAdHlwZXMvbXZcIjogXCJeMi4xLjBcIixcbiAgICBcIkB0eXBlcy9uY3BcIjogXCJeMi4wLjhcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjI0LjAuMFwiLFxuICAgIFwiQHR5cGVzL3Npbm9uXCI6IFwiXjIxLjAuMFwiLFxuICAgIFwiYXNzZXJ0LXJlamVjdHNcIjogXCJeMS4wLjBcIixcbiAgICBcImM4XCI6IFwiXjEwLjEuM1wiLFxuICAgIFwiY29kZWNvdlwiOiBcIl4zLjguM1wiLFxuICAgIFwiZ3RzXCI6IFwiXjYuMC4yXCIsXG4gICAgXCJpcy1kb2NrZXJcIjogXCJeMy4wLjBcIixcbiAgICBcImpzZG9jXCI6IFwiXjQuMC40XCIsXG4gICAgXCJqc2RvYy1mcmVzaFwiOiBcIl41LjAuMFwiLFxuICAgIFwianNkb2MtcmVnaW9uLXRhZ1wiOiBcIl40LjAuMFwiLFxuICAgIFwia2FybWFcIjogXCJeNi4wLjBcIixcbiAgICBcImthcm1hLWNocm9tZS1sYXVuY2hlclwiOiBcIl4zLjAuMFwiLFxuICAgIFwia2FybWEtY292ZXJhZ2VcIjogXCJeMi4wLjBcIixcbiAgICBcImthcm1hLWZpcmVmb3gtbGF1bmNoZXJcIjogXCJeMi4wLjBcIixcbiAgICBcImthcm1hLW1vY2hhXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJrYXJtYS1zb3VyY2VtYXAtbG9hZGVyXCI6IFwiXjAuNC4wXCIsXG4gICAgXCJrYXJtYS13ZWJwYWNrXCI6IFwiXjUuMC4xXCIsXG4gICAgXCJrZXlwYWlyXCI6IFwiXjEuMC40XCIsXG4gICAgXCJtb2NoYVwiOiBcIl4xMS4xLjBcIixcbiAgICBcIm12XCI6IFwiXjIuMS4xXCIsXG4gICAgXCJuY3BcIjogXCJeMi4wLjBcIixcbiAgICBcIm5vY2tcIjogXCJeMTQuMC41XCIsXG4gICAgXCJudWxsLWxvYWRlclwiOiBcIl40LjAuMVwiLFxuICAgIFwicHVwcGV0ZWVyXCI6IFwiXjI0LjAuMFwiLFxuICAgIFwic2lub25cIjogXCJeMjEuMC4wXCIsXG4gICAgXCJ0cy1sb2FkZXJcIjogXCJeOS41LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCI1LjguM1wiLFxuICAgIFwid2VicGFja1wiOiBcIl41Ljk3LjFcIixcbiAgICBcIndlYnBhY2stY2xpXCI6IFwiXjYuMC4xXCJcbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJidWlsZC9zcmNcIixcbiAgICBcIiFidWlsZC9zcmMvKiovKi5tYXBcIlxuICBdLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcImM4IG1vY2hhIGJ1aWxkL3Rlc3RcIixcbiAgICBcImNsZWFuXCI6IFwiZ3RzIGNsZWFuXCIsXG4gICAgXCJwcmVwYXJlXCI6IFwibnBtIHJ1biBjb21waWxlXCIsXG4gICAgXCJsaW50XCI6IFwiZ3RzIGNoZWNrIC0tbm8taW5saW5lLWNvbmZpZ1wiLFxuICAgIFwiY29tcGlsZVwiOiBcInRzYyAtcCAuXCIsXG4gICAgXCJmaXhcIjogXCJndHMgZml4XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBjb21waWxlIC0tIC0tc291cmNlTWFwXCIsXG4gICAgXCJkb2NzXCI6IFwianNkb2MgLWMgLmpzZG9jLmpzXCIsXG4gICAgXCJzYW1wbGVzLXNldHVwXCI6IFwiY2Qgc2FtcGxlcy8gJiYgbnBtIGxpbmsgLi4vICYmIG5wbSBydW4gc2V0dXAgJiYgY2QgLi4vXCIsXG4gICAgXCJzYW1wbGVzLXRlc3RcIjogXCJjZCBzYW1wbGVzLyAmJiBucG0gbGluayAuLi8gJiYgbnBtIHRlc3QgJiYgY2QgLi4vXCIsXG4gICAgXCJzeXN0ZW0tdGVzdFwiOiBcIm1vY2hhIGJ1aWxkL3N5c3RlbS10ZXN0IC0tdGltZW91dCA2MDAwMFwiLFxuICAgIFwicHJlc3lzdGVtLXRlc3RcIjogXCJucG0gcnVuIGNvbXBpbGUgLS0gLS1zb3VyY2VNYXBcIixcbiAgICBcIndlYnBhY2tcIjogXCJ3ZWJwYWNrXCIsXG4gICAgXCJicm93c2VyLXRlc3RcIjogXCJrYXJtYSBzdGFydFwiLFxuICAgIFwiZG9jcy10ZXN0XCI6IFwiZWNobyAnZGlzYWJsZWQgdW50aWwgbGlua2luYXRvciBpcyBmaXhlZCdcIixcbiAgICBcInByZWRvY3MtdGVzdFwiOiBcIm5wbSBydW4gZG9jc1wiLFxuICAgIFwicHJlbGludFwiOiBcImNkIHNhbXBsZXM7IG5wbSBsaW5rIC4uLzsgbnBtIGluc3RhbGxcIlxuICB9LFxuICBcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlYXBpcy9nb29nbGUtY2xvdWQtbm9kZS1jb3JlL3RyZWUvbWFpbi9wYWNrYWdlcy9nb29nbGUtYXV0aC1saWJyYXJ5LW5vZGVqc1wiXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVNFUl9BR0VOVCA9IGV4cG9ydHMuUFJPRFVDVF9OQU1FID0gZXhwb3J0cy5wa2cgPSB2b2lkIDA7XG5jb25zdCBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcbmV4cG9ydHMucGtnID0gcGtnO1xuY29uc3QgUFJPRFVDVF9OQU1FID0gJ2dvb2dsZS1hcGktbm9kZWpzLWNsaWVudCc7XG5leHBvcnRzLlBST0RVQ1RfTkFNRSA9IFBST0RVQ1RfTkFNRTtcbmNvbnN0IFVTRVJfQUdFTlQgPSBgJHtQUk9EVUNUX05BTUV9LyR7cGtnLnZlcnNpb259YDtcbmV4cG9ydHMuVVNFUl9BR0VOVCA9IFVTRVJfQUdFTlQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFyZWQuY2pzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDEyIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BdXRoQ2xpZW50ID0gZXhwb3J0cy5ERUZBVUxUX0VBR0VSX1JFRlJFU0hfVEhSRVNIT0xEX01JTExJUyA9IGV4cG9ydHMuREVGQVVMVF9VTklWRVJTRSA9IHZvaWQgMDtcbmNvbnN0IGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbmNvbnN0IGdheGlvc18xID0gcmVxdWlyZShcImdheGlvc1wiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3QgZ29vZ2xlX2xvZ2dpbmdfdXRpbHNfMSA9IHJlcXVpcmUoXCJnb29nbGUtbG9nZ2luZy11dGlsc1wiKTtcbmNvbnN0IHNoYXJlZF9janNfMSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQuY2pzXCIpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBjbG91ZCB1bml2ZXJzZVxuICpcbiAqIEBzZWUge0BsaW5rIEF1dGhKU09OT3B0aW9ucy51bml2ZXJzZV9kb21haW59XG4gKi9cbmV4cG9ydHMuREVGQVVMVF9VTklWRVJTRSA9ICdnb29nbGVhcGlzLmNvbSc7XG4vKipcbiAqIFRoZSBkZWZhdWx0IHtAbGluayBBdXRoQ2xpZW50T3B0aW9ucy5lYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXN9XG4gKi9cbmV4cG9ydHMuREVGQVVMVF9FQUdFUl9SRUZSRVNIX1RIUkVTSE9MRF9NSUxMSVMgPSA1ICogNjAgKiAxMDAwO1xuLyoqXG4gKiBUaGUgYmFzZSBvZiBhbGwgQXV0aCBDbGllbnRzLlxuICovXG5jbGFzcyBBdXRoQ2xpZW50IGV4dGVuZHMgZXZlbnRzXzEuRXZlbnRFbWl0dGVyIHtcbiAgICBhcGlLZXk7XG4gICAgcHJvamVjdElkO1xuICAgIC8qKlxuICAgICAqIFRoZSBxdW90YSBwcm9qZWN0IElELiBUaGUgcXVvdGEgcHJvamVjdCBjYW4gYmUgdXNlZCBieSBjbGllbnQgbGlicmFyaWVzIGZvciB0aGUgYmlsbGluZyBwdXJwb3NlLlxuICAgICAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2RvY3MvcXVvdGEgV29ya2luZyB3aXRoIHF1b3Rhc31cbiAgICAgKi9cbiAgICBxdW90YVByb2plY3RJZDtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIEdheGlvcyBgR2F4aW9zYH0gaW5zdGFuY2UgdXNlZCBmb3IgbWFraW5nIHJlcXVlc3RzLlxuICAgICAqL1xuICAgIHRyYW5zcG9ydGVyO1xuICAgIGNyZWRlbnRpYWxzID0ge307XG4gICAgZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzID0gZXhwb3J0cy5ERUZBVUxUX0VBR0VSX1JFRlJFU0hfVEhSRVNIT0xEX01JTExJUztcbiAgICBmb3JjZVJlZnJlc2hPbkZhaWx1cmUgPSBmYWxzZTtcbiAgICB1bml2ZXJzZURvbWFpbiA9IGV4cG9ydHMuREVGQVVMVF9VTklWRVJTRTtcbiAgICAvKipcbiAgICAgKiBTeW1ib2xzIHRoYXQgY2FuIGJlIGFkZGVkIHRvIEdheGlvc09wdGlvbnMgdG8gc3BlY2lmeSB0aGUgbWV0aG9kIG5hbWUgdGhhdCBpc1xuICAgICAqIG1ha2luZyBhbiBSUEMgY2FsbCwgZm9yIGxvZ2dpbmcgcHVycG9zZXMsIGFzIHdlbGwgYXMgYSBzdHJpbmcgSUQgdGhhdCBjYW4gYmVcbiAgICAgKiB1c2VkIHRvIGNvcnJlbGF0ZSBjYWxscyBhbmQgcmVzcG9uc2VzLlxuICAgICAqL1xuICAgIHN0YXRpYyBSZXF1ZXN0TWV0aG9kTmFtZVN5bWJvbCA9IFN5bWJvbCgncmVxdWVzdCBtZXRob2QgbmFtZScpO1xuICAgIHN0YXRpYyBSZXF1ZXN0TG9nSWRTeW1ib2wgPSBTeW1ib2woJ3JlcXVlc3QgbG9nIGlkJyk7XG4gICAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSAoMCwgdXRpbF8xLm9yaWdpbmFsT3JDYW1lbE9wdGlvbnMpKG9wdHMpO1xuICAgICAgICAvLyBTaGFyZWQgYXV0aCBvcHRpb25zXG4gICAgICAgIHRoaXMuYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG4gICAgICAgIHRoaXMucHJvamVjdElkID0gb3B0aW9ucy5nZXQoJ3Byb2plY3RfaWQnKSA/PyBudWxsO1xuICAgICAgICB0aGlzLnF1b3RhUHJvamVjdElkID0gb3B0aW9ucy5nZXQoJ3F1b3RhX3Byb2plY3RfaWQnKTtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuZ2V0KCdjcmVkZW50aWFscycpID8/IHt9O1xuICAgICAgICB0aGlzLnVuaXZlcnNlRG9tYWluID0gb3B0aW9ucy5nZXQoJ3VuaXZlcnNlX2RvbWFpbicpID8/IGV4cG9ydHMuREVGQVVMVF9VTklWRVJTRTtcbiAgICAgICAgLy8gU2hhcmVkIGNsaWVudCBvcHRpb25zXG4gICAgICAgIHRoaXMudHJhbnNwb3J0ZXIgPSBvcHRzLnRyYW5zcG9ydGVyID8/IG5ldyBnYXhpb3NfMS5HYXhpb3Mob3B0cy50cmFuc3BvcnRlck9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5nZXQoJ3VzZUF1dGhSZXF1ZXN0UGFyYW1ldGVycycpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRlci5pbnRlcmNlcHRvcnMucmVxdWVzdC5hZGQoQXV0aENsaWVudC5ERUZBVUxUX1JFUVVFU1RfSU5URVJDRVBUT1IpO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRlci5pbnRlcmNlcHRvcnMucmVzcG9uc2UuYWRkKEF1dGhDbGllbnQuREVGQVVMVF9SRVNQT05TRV9JTlRFUkNFUFRPUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzKSB7XG4gICAgICAgICAgICB0aGlzLmVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcyA9IG9wdHMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9yY2VSZWZyZXNoT25GYWlsdXJlID0gb3B0cy5mb3JjZVJlZnJlc2hPbkZhaWx1cmUgPz8gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEge0BsaW5rIGZldGNoIGBmZXRjaGB9IGNvbXBsaWFudCBBUEkgZm9yIHtAbGluayBBdXRoQ2xpZW50fS5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIEF1dGhDbGllbnQucmVxdWVzdH0gZm9yIHRoZSBjbGFzc2ljIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBhcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yIGBmZXRjaGAgQVBJIHVzYWdlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgYXV0aENsaWVudCA9IG5ldyBBdXRoQ2xpZW50KCk7XG4gICAgICogY29uc3QgZmV0Y2hXaXRoQXV0aENsaWVudDogdHlwZW9mIGZldGNoID0gKC4uLmFyZ3MpID0+IGF1dGhDbGllbnQuZmV0Y2goLi4uYXJncyk7XG4gICAgICogYXdhaXQgZmV0Y2hXaXRoQXV0aENsaWVudCgnaHR0cHM6Ly9leGFtcGxlLmNvbScpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3MgYGZldGNoYCBBUEkgb3Ige0BsaW5rIEdheGlvcy5mZXRjaCBgR2F4aW9zI2ZldGNoYH0gcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHRoZSB7QGxpbmsgR2F4aW9zUmVzcG9uc2V9IHdpdGggR2F4aW9zLWFkZGVkIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBmZXRjaCguLi5hcmdzKSB7XG4gICAgICAgIC8vIFVwIHRvIDIgcGFyYW1ldGVycyBpbiBlaXRoZXIgb3ZlcmxvYWRcbiAgICAgICAgY29uc3QgaW5wdXQgPSBhcmdzWzBdO1xuICAgICAgICBjb25zdCBpbml0ID0gYXJnc1sxXTtcbiAgICAgICAgbGV0IHVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIC8vIHByZXBhcmUgVVJMXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmwgPSBuZXcgVVJMKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIFVSTCkge1xuICAgICAgICAgICAgdXJsID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQgJiYgaW5wdXQudXJsKSB7XG4gICAgICAgICAgICB1cmwgPSBuZXcgVVJMKGlucHV0LnVybCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJlcGFyZSBoZWFkZXJzXG4gICAgICAgIGlmIChpbnB1dCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmICdoZWFkZXJzJyBpbiBpbnB1dCkge1xuICAgICAgICAgICAgZ2F4aW9zXzEuR2F4aW9zLm1lcmdlSGVhZGVycyhoZWFkZXJzLCBpbnB1dC5oZWFkZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5pdCkge1xuICAgICAgICAgICAgZ2F4aW9zXzEuR2F4aW9zLm1lcmdlSGVhZGVycyhoZWFkZXJzLCBuZXcgSGVhZGVycyhpbml0LmhlYWRlcnMpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmVwYXJlIHJlcXVlc3RcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgJiYgIShpbnB1dCBpbnN0YW5jZW9mIFVSTCkpIHtcbiAgICAgICAgICAgIC8vIGlucHV0IG11c3QgaGF2ZSBiZWVuIGEgbm9uLVVSTCBvYmplY3RcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyAuLi5pbml0LCAuLi5pbnB1dCwgaGVhZGVycywgdXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5wdXQgbXVzdCBoYXZlIGJlZW4gYSBzdHJpbmcgb3IgVVJMXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgLi4uaW5pdCwgaGVhZGVycywgdXJsIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGF1dGggY3JlZGVudGlhbHMuXG4gICAgICovXG4gICAgc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYWRkaXRpb25hbCBoZWFkZXJzLCBlLmcuLCB4LWdvb2ctdXNlci1wcm9qZWN0LCBzaGFyZWQgYWNyb3NzIHRoZVxuICAgICAqIGNsYXNzZXMgaW5oZXJpdGluZyBBdXRoQ2xpZW50LiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCBieSBhbnkgbWV0aG9kXG4gICAgICogdGhhdCBvdmVycmlkZXMgZ2V0UmVxdWVzdE1ldGFkYXRhQXN5bmMoKSwgd2hpY2ggaXMgYSBzaGFyZWQgaGVscGVyIGZvclxuICAgICAqIHNldHRpbmcgcmVxdWVzdCBpbmZvcm1hdGlvbiBpbiBib3RoIGdSUEMgYW5kIEhUVFAgQVBJIGNhbGxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGhlYWRlcnMgb2JqZWN0IHRvIGFwcGVuZCBhZGRpdGlvbmFsIGhlYWRlcnMgdG8uXG4gICAgICovXG4gICAgYWRkU2hhcmVkTWV0YWRhdGFIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICAgICAgLy8gcXVvdGFfcHJvamVjdF9pZCwgc3RvcmVkIGluIGFwcGxpY2F0aW9uX2RlZmF1bHRfY3JlZGVudGlhbHMuanNvbiwgaXMgc2V0IGluXG4gICAgICAgIC8vIHRoZSB4LWdvb2ctdXNlci1wcm9qZWN0IGhlYWRlciwgdG8gaW5kaWNhdGUgYW4gYWx0ZXJuYXRlIGFjY291bnQgZm9yXG4gICAgICAgIC8vIGJpbGxpbmcgYW5kIHF1b3RhOlxuICAgICAgICBpZiAoIWhlYWRlcnMuaGFzKCd4LWdvb2ctdXNlci1wcm9qZWN0JykgJiYgLy8gZG9uJ3Qgb3ZlcnJpZGUgYSB2YWx1ZSB0aGUgdXNlciBzZXRzLlxuICAgICAgICAgICAgdGhpcy5xdW90YVByb2plY3RJZCkge1xuICAgICAgICAgICAgaGVhZGVycy5zZXQoJ3gtZ29vZy11c2VyLXByb2plY3QnLCB0aGlzLnF1b3RhUHJvamVjdElkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYHgtZ29vZy11c2VyLXByb2plY3RgIGFuZCBgYXV0aG9yaXphdGlvbmAgaGVhZGVycyB0byB0aGUgdGFyZ2V0IEhlYWRlcnNcbiAgICAgKiBvYmplY3QsIGlmIHRoZXkgZXhpc3Qgb24gdGhlIHNvdXJjZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXQgdGhlIGhlYWRlcnMgdG8gdGFyZ2V0XG4gICAgICogQHBhcmFtIHNvdXJjZSB0aGUgaGVhZGVycyB0byBzb3VyY2UgZnJvbVxuICAgICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgaGVhZGVyc1xuICAgICAqL1xuICAgIGFkZFVzZXJQcm9qZWN0QW5kQXV0aEhlYWRlcnModGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgeEdvb2dVc2VyUHJvamVjdCA9IHNvdXJjZS5nZXQoJ3gtZ29vZy11c2VyLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgYXV0aG9yaXphdGlvbkhlYWRlciA9IHNvdXJjZS5nZXQoJ2F1dGhvcml6YXRpb24nKTtcbiAgICAgICAgaWYgKHhHb29nVXNlclByb2plY3QpIHtcbiAgICAgICAgICAgIHRhcmdldC5zZXQoJ3gtZ29vZy11c2VyLXByb2plY3QnLCB4R29vZ1VzZXJQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0aG9yaXphdGlvbkhlYWRlcikge1xuICAgICAgICAgICAgdGFyZ2V0LnNldCgnYXV0aG9yaXphdGlvbicsIGF1dGhvcml6YXRpb25IZWFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHN0YXRpYyBsb2cgPSAoMCwgZ29vZ2xlX2xvZ2dpbmdfdXRpbHNfMS5sb2cpKCdhdXRoJyk7XG4gICAgc3RhdGljIERFRkFVTFRfUkVRVUVTVF9JTlRFUkNFUFRPUiA9IHtcbiAgICAgICAgcmVzb2x2ZWQ6IGFzeW5jIChjb25maWcpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCBgeC1nb29nLWFwaS1jbGllbnRgLCBpZiBub3QgYWxyZWFkeSBzZXRcbiAgICAgICAgICAgIGlmICghY29uZmlnLmhlYWRlcnMuaGFzKCd4LWdvb2ctYXBpLWNsaWVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb24ucmVwbGFjZSgvXnYvLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuc2V0KCd4LWdvb2ctYXBpLWNsaWVudCcsIGBnbC1ub2RlLyR7bm9kZVZlcnNpb259YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgYFVzZXItQWdlbnRgXG4gICAgICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSBjb25maWcuaGVhZGVycy5nZXQoJ1VzZXItQWdlbnQnKTtcbiAgICAgICAgICAgIGlmICghdXNlckFnZW50KSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuc2V0KCdVc2VyLUFnZW50Jywgc2hhcmVkX2Nqc18xLlVTRVJfQUdFTlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXVzZXJBZ2VudC5pbmNsdWRlcyhgJHtzaGFyZWRfY2pzXzEuUFJPRFVDVF9OQU1FfS9gKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzLnNldCgnVXNlci1BZ2VudCcsIGAke3VzZXJBZ2VudH0gJHtzaGFyZWRfY2pzXzEuVVNFUl9BR0VOVH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9scyA9IGNvbmZpZztcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRob2ROYW1lID0gc3ltYm9sc1tBdXRoQ2xpZW50LlJlcXVlc3RNZXRob2ROYW1lU3ltYm9sXTtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXNuJ3QgbmVlZCB0byBiZSB2ZXJ5IHVuaXF1ZSBvciBpbnRlcmVzdGluZywgaXQncyBqdXN0IGFuIGFpZCBmb3JcbiAgICAgICAgICAgICAgICAvLyBtYXRjaGluZyByZXF1ZXN0cyB0byByZXNwb25zZXMuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9nSWQgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xuICAgICAgICAgICAgICAgIHN5bWJvbHNbQXV0aENsaWVudC5SZXF1ZXN0TG9nSWRTeW1ib2xdID0gbG9nSWQ7XG4gICAgICAgICAgICAgICAgLy8gQm9pbCBkb3duIHRoZSBvYmplY3Qgd2UncmUgcHJpbnRpbmcgb3V0LlxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ09iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjb25maWcudXJsLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhDbGllbnQubG9nLmluZm8oJyVzIFslc10gcmVxdWVzdCAlaicsIG1ldGhvZE5hbWUsIGxvZ0lkLCBsb2dPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aENsaWVudC5sb2cuaW5mbygnWyVzXSByZXF1ZXN0ICVqJywgbG9nSWQsIGxvZ09iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBMb2dnaW5nIG11c3Qgbm90IGNyZWF0ZSBuZXcgZXJyb3JzOyBzd2FsbG93IHRoZW0gYWxsLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHN0YXRpYyBERUZBVUxUX1JFU1BPTlNFX0lOVEVSQ0VQVE9SID0ge1xuICAgICAgICByZXNvbHZlZDogYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbHMgPSByZXNwb25zZS5jb25maWc7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IHN5bWJvbHNbQXV0aENsaWVudC5SZXF1ZXN0TWV0aG9kTmFtZVN5bWJvbF07XG4gICAgICAgICAgICAgICAgY29uc3QgbG9nSWQgPSBzeW1ib2xzW0F1dGhDbGllbnQuUmVxdWVzdExvZ0lkU3ltYm9sXTtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBBdXRoQ2xpZW50LmxvZy5pbmZvKCclcyBbJXNdIHJlc3BvbnNlICVqJywgbWV0aG9kTmFtZSwgbG9nSWQsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aENsaWVudC5sb2cuaW5mbygnWyVzXSByZXNwb25zZSAlaicsIGxvZ0lkLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIExvZ2dpbmcgbXVzdCBub3QgY3JlYXRlIG5ldyBlcnJvcnM7IHN3YWxsb3cgdGhlbSBhbGwuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdGVkOiBhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9scyA9IGVycm9yLmNvbmZpZztcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRob2ROYW1lID0gc3ltYm9sc1tBdXRoQ2xpZW50LlJlcXVlc3RNZXRob2ROYW1lU3ltYm9sXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dJZCA9IHN5bWJvbHNbQXV0aENsaWVudC5SZXF1ZXN0TG9nSWRTeW1ib2xdO1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhDbGllbnQubG9nLmluZm8oJyVzIFslc10gZXJyb3IgJWonLCBtZXRob2ROYW1lLCBsb2dJZCwgZXJyb3IucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aENsaWVudC5sb2cuZXJyb3IoJ1slc10gZXJyb3IgJWonLCBsb2dJZCwgZXJyb3IucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9nZ2luZyBtdXN0IG5vdCBjcmVhdGUgbmV3IGVycm9yczsgc3dhbGxvdyB0aGVtIGFsbC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlLXRocm93IHRoZSBlcnJvci5cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbWV0aG9kIG5hbWUgdGhhdCBpcyBtYWtpbmcgYSBHYXhpb3MgcmVxdWVzdCwgc28gdGhhdCBsb2dnaW5nIG1heSB0YWdcbiAgICAgKiBsb2cgbGluZXMgd2l0aCB0aGUgb3BlcmF0aW9uLlxuICAgICAqIEBwYXJhbSBjb25maWcgQSBHYXhpb3MgcmVxdWVzdCBjb25maWdcbiAgICAgKiBAcGFyYW0gbWV0aG9kTmFtZSBUaGUgbWV0aG9kIG5hbWUgbWFraW5nIHRoZSBjYWxsXG4gICAgICovXG4gICAgc3RhdGljIHNldE1ldGhvZE5hbWUoY29uZmlnLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xzID0gY29uZmlnO1xuICAgICAgICAgICAgc3ltYm9sc1tBdXRoQ2xpZW50LlJlcXVlc3RNZXRob2ROYW1lU3ltYm9sXSA9IG1ldGhvZE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIExvZ2dpbmcgbXVzdCBub3QgY3JlYXRlIG5ldyBlcnJvcnM7IHN3YWxsb3cgdGhlbSBhbGwuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cnkgY29uZmlnIGZvciBBdXRoLXJlbGF0ZWQgcmVxdWVzdHMuXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqXG4gICAgICogVGhpcyBpcyBub3QgYSBwYXJ0IG9mIHRoZSBkZWZhdWx0IHtAbGluayBBdXRoQ2xpZW50LnRyYW5zcG9ydGVyIHRyYW5zcG9ydGVyL2dheGlvc31cbiAgICAgKiBjb25maWcgYXMgc29tZSBkb3duc3RyZWFtIEFQSXMgd291bGQgcHJlZmVyIGlmIGN1c3RvbWVycyBleHBsaWNpdGx5IGVuYWJsZSByZXRyaWVzLFxuICAgICAqIHN1Y2ggYXMgR0NTLlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgUkVUUllfQ09ORklHKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmV0cnk6IHRydWUsXG4gICAgICAgICAgICByZXRyeUNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGh0dHBNZXRob2RzVG9SZXRyeTogWydHRVQnLCAnUFVUJywgJ1BPU1QnLCAnSEVBRCcsICdPUFRJT05TJywgJ0RFTEVURSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLkF1dGhDbGllbnQgPSBBdXRoQ2xpZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXV0aGNsaWVudC5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAxNCBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTG9naW5UaWNrZXQgPSB2b2lkIDA7XG5jbGFzcyBMb2dpblRpY2tldCB7XG4gICAgZW52ZWxvcGU7XG4gICAgcGF5bG9hZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzaW1wbGUgY2xhc3MgdG8gZXh0cmFjdCB1c2VyIElEIGZyb20gYW4gSUQgVG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbnYgRW52ZWxvcGUgb2YgdGhlIGp3dFxuICAgICAqIEBwYXJhbSB7VG9rZW5QYXlsb2FkfSBwYXkgUGF5bG9hZCBvZiB0aGUgand0XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZW52LCBwYXkpIHtcbiAgICAgICAgdGhpcy5lbnZlbG9wZSA9IGVudjtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5O1xuICAgIH1cbiAgICBnZXRFbnZlbG9wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW52ZWxvcGU7XG4gICAgfVxuICAgIGdldFBheWxvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBheWxvYWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNpbXBsZSBjbGFzcyB0byBleHRyYWN0IHVzZXIgSUQgZnJvbSBhbiBJRCBUb2tlblxuICAgICAqXG4gICAgICogQHJldHVybiBUaGUgdXNlciBJRFxuICAgICAqL1xuICAgIGdldFVzZXJJZCgpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMuZ2V0UGF5bG9hZCgpO1xuICAgICAgICBpZiAocGF5bG9hZCAmJiBwYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQuc3ViO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGF0dHJpYnV0ZXMgZnJvbSB0aGUgbG9naW4gdGlja2V0LiAgVGhpcyBjYW4gY29udGFpblxuICAgICAqIHZhcmlvdXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gVGhlIGVudmVsb3BlIGFuZCBwYXlsb2FkXG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHsgZW52ZWxvcGU6IHRoaXMuZ2V0RW52ZWxvcGUoKSwgcGF5bG9hZDogdGhpcy5nZXRQYXlsb2FkKCkgfTtcbiAgICB9XG59XG5leHBvcnRzLkxvZ2luVGlja2V0ID0gTG9naW5UaWNrZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2dpbnRpY2tldC5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0F1dGgyQ2xpZW50ID0gZXhwb3J0cy5DbGllbnRBdXRoZW50aWNhdGlvbiA9IGV4cG9ydHMuQ2VydGlmaWNhdGVGb3JtYXQgPSBleHBvcnRzLkNvZGVDaGFsbGVuZ2VNZXRob2QgPSB2b2lkIDA7XG5jb25zdCBnYXhpb3NfMSA9IHJlcXVpcmUoXCJnYXhpb3NcIik7XG5jb25zdCBxdWVyeXN0cmluZyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTtcbmNvbnN0IHN0cmVhbSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jb25zdCBmb3JtYXRFY2RzYSA9IHJlcXVpcmUoXCJlY2RzYS1zaWctZm9ybWF0dGVyXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBjcnlwdG9fMSA9IHJlcXVpcmUoXCIuLi9jcnlwdG8vY3J5cHRvXCIpO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbmNvbnN0IGxvZ2ludGlja2V0XzEgPSByZXF1aXJlKFwiLi9sb2dpbnRpY2tldFwiKTtcbnZhciBDb2RlQ2hhbGxlbmdlTWV0aG9kO1xuKGZ1bmN0aW9uIChDb2RlQ2hhbGxlbmdlTWV0aG9kKSB7XG4gICAgQ29kZUNoYWxsZW5nZU1ldGhvZFtcIlBsYWluXCJdID0gXCJwbGFpblwiO1xuICAgIENvZGVDaGFsbGVuZ2VNZXRob2RbXCJTMjU2XCJdID0gXCJTMjU2XCI7XG59KShDb2RlQ2hhbGxlbmdlTWV0aG9kIHx8IChleHBvcnRzLkNvZGVDaGFsbGVuZ2VNZXRob2QgPSBDb2RlQ2hhbGxlbmdlTWV0aG9kID0ge30pKTtcbnZhciBDZXJ0aWZpY2F0ZUZvcm1hdDtcbihmdW5jdGlvbiAoQ2VydGlmaWNhdGVGb3JtYXQpIHtcbiAgICBDZXJ0aWZpY2F0ZUZvcm1hdFtcIlBFTVwiXSA9IFwiUEVNXCI7XG4gICAgQ2VydGlmaWNhdGVGb3JtYXRbXCJKV0tcIl0gPSBcIkpXS1wiO1xufSkoQ2VydGlmaWNhdGVGb3JtYXQgfHwgKGV4cG9ydHMuQ2VydGlmaWNhdGVGb3JtYXQgPSBDZXJ0aWZpY2F0ZUZvcm1hdCA9IHt9KSk7XG4vKipcbiAqIFRoZSBjbGllbnQgYXV0aGVudGljYXRpb24gdHlwZS4gU3VwcG9ydGVkIHZhbHVlcyBhcmUgYmFzaWMsIHBvc3QsIGFuZCBub25lLlxuICogaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmM3NTkxI3NlY3Rpb24tMlxuICovXG52YXIgQ2xpZW50QXV0aGVudGljYXRpb247XG4oZnVuY3Rpb24gKENsaWVudEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgQ2xpZW50QXV0aGVudGljYXRpb25bXCJDbGllbnRTZWNyZXRQb3N0XCJdID0gXCJDbGllbnRTZWNyZXRQb3N0XCI7XG4gICAgQ2xpZW50QXV0aGVudGljYXRpb25bXCJDbGllbnRTZWNyZXRCYXNpY1wiXSA9IFwiQ2xpZW50U2VjcmV0QmFzaWNcIjtcbiAgICBDbGllbnRBdXRoZW50aWNhdGlvbltcIk5vbmVcIl0gPSBcIk5vbmVcIjtcbn0pKENsaWVudEF1dGhlbnRpY2F0aW9uIHx8IChleHBvcnRzLkNsaWVudEF1dGhlbnRpY2F0aW9uID0gQ2xpZW50QXV0aGVudGljYXRpb24gPSB7fSkpO1xuY2xhc3MgT0F1dGgyQ2xpZW50IGV4dGVuZHMgYXV0aGNsaWVudF8xLkF1dGhDbGllbnQge1xuICAgIHJlZGlyZWN0VXJpO1xuICAgIGNlcnRpZmljYXRlQ2FjaGUgPSB7fTtcbiAgICBjZXJ0aWZpY2F0ZUV4cGlyeSA9IG51bGw7XG4gICAgY2VydGlmaWNhdGVDYWNoZUZvcm1hdCA9IENlcnRpZmljYXRlRm9ybWF0LlBFTTtcbiAgICByZWZyZXNoVG9rZW5Qcm9taXNlcyA9IG5ldyBNYXAoKTtcbiAgICBlbmRwb2ludHM7XG4gICAgaXNzdWVycztcbiAgICBjbGllbnRBdXRoZW50aWNhdGlvbjtcbiAgICAvLyBUT0RPOiByZWZhY3RvciB0ZXN0cyB0byBtYWtlIHRoaXMgcHJpdmF0ZVxuICAgIF9jbGllbnRJZDtcbiAgICAvLyBUT0RPOiByZWZhY3RvciB0ZXN0cyB0byBtYWtlIHRoaXMgcHJpdmF0ZVxuICAgIF9jbGllbnRTZWNyZXQ7XG4gICAgcmVmcmVzaEhhbmRsZXI7XG4gICAgLyoqXG4gICAgICogQW4gT0F1dGgyIENsaWVudCBmb3IgR29vZ2xlIEFQSXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgT0F1dGgyIENsaWVudCBPcHRpb25zLiBQYXNzaW5nIGFuIGBjbGllbnRJZGAgZGlyZWN0bHkgaXMgKipAREVQUkVDQVRFRCoqLlxuICAgICAqIEBwYXJhbSBjbGllbnRTZWNyZXQgKipAREVQUkVDQVRFRCoqLiBQcm92aWRlIGEge0BsaW5rIE9BdXRoMkNsaWVudE9wdGlvbnMgYE9BdXRoMkNsaWVudE9wdGlvbnNgfSBvYmplY3QgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaSAqKkBERVBSRUNBVEVEKiouIFByb3ZpZGUgYSB7QGxpbmsgT0F1dGgyQ2xpZW50T3B0aW9ucyBgT0F1dGgyQ2xpZW50T3B0aW9uc2B9IG9iamVjdCBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyIGluc3RlYWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9LCBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCAtIHByb3ZpZGUgYSB7QGxpbmsgT0F1dGgyQ2xpZW50T3B0aW9ucyBgT0F1dGgyQ2xpZW50T3B0aW9uc2B9IG9iamVjdCBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyIGluc3RlYWRcbiAgICAgKi9cbiAgICBjbGllbnRTZWNyZXQsIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIC0gcHJvdmlkZSBhIHtAbGluayBPQXV0aDJDbGllbnRPcHRpb25zIGBPQXV0aDJDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlZGlyZWN0VXJpKSB7XG4gICAgICAgIHN1cGVyKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyA/IG9wdGlvbnMgOiB7fSk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbGllbnRJZCA9IG9wdGlvbnMuY2xpZW50SWQgfHwgb3B0aW9ucy5jbGllbnRfaWQ7XG4gICAgICAgIHRoaXMuX2NsaWVudFNlY3JldCA9IG9wdGlvbnMuY2xpZW50U2VjcmV0IHx8IG9wdGlvbnMuY2xpZW50X3NlY3JldDtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVyaSA9IG9wdGlvbnMucmVkaXJlY3RVcmkgfHwgb3B0aW9ucy5yZWRpcmVjdF91cmlzPy5bMF07XG4gICAgICAgIHRoaXMuZW5kcG9pbnRzID0ge1xuICAgICAgICAgICAgdG9rZW5JbmZvVXJsOiAnaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5pbmZvJyxcbiAgICAgICAgICAgIG9hdXRoMkF1dGhCYXNlVXJsOiAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGgnLFxuICAgICAgICAgICAgb2F1dGgyVG9rZW5Vcmw6ICdodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbicsXG4gICAgICAgICAgICBvYXV0aDJSZXZva2VVcmw6ICdodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS9yZXZva2UnLFxuICAgICAgICAgICAgb2F1dGgyRmVkZXJhdGVkU2lnbm9uUGVtQ2VydHNVcmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMnLFxuICAgICAgICAgICAgb2F1dGgyRmVkZXJhdGVkU2lnbm9uSndrQ2VydHNVcmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjMvY2VydHMnLFxuICAgICAgICAgICAgb2F1dGgySWFwUHVibGljS2V5VXJsOiAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaWFwL3ZlcmlmeS9wdWJsaWNfa2V5JyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuZW5kcG9pbnRzLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsaWVudEF1dGhlbnRpY2F0aW9uID1cbiAgICAgICAgICAgIG9wdGlvbnMuY2xpZW50QXV0aGVudGljYXRpb24gfHwgQ2xpZW50QXV0aGVudGljYXRpb24uQ2xpZW50U2VjcmV0UG9zdDtcbiAgICAgICAgdGhpcy5pc3N1ZXJzID0gb3B0aW9ucy5pc3N1ZXJzIHx8IFtcbiAgICAgICAgICAgICdhY2NvdW50cy5nb29nbGUuY29tJyxcbiAgICAgICAgICAgICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20nLFxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZURvbWFpbixcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIGluc3RhbmNlJ3Mge0BsaW5rIE9BdXRoMkNsaWVudC5lbmRwb2ludHN9XG4gICAgICovXG4gICAgc3RhdGljIEdPT0dMRV9UT0tFTl9JTkZPX1VSTCA9ICdodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbmluZm8nO1xuICAgIC8qKlxuICAgICAqIENsb2NrIHNrZXcgLSBmaXZlIG1pbnV0ZXMgaW4gc2Vjb25kc1xuICAgICAqL1xuICAgIHN0YXRpYyBDTE9DS19TS0VXX1NFQ1NfID0gMzAwO1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IG1heCBUb2tlbiBMaWZldGltZSBpcyBvbmUgZGF5IGluIHNlY29uZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgREVGQVVMVF9NQVhfVE9LRU5fTElGRVRJTUVfU0VDU18gPSA4NjQwMDtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgVVJMIGZvciBjb25zZW50IHBhZ2UgbGFuZGluZy5cbiAgICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zLlxuICAgICAqIEByZXR1cm4gVVJMIHRvIGNvbnNlbnQgcGFnZS5cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUF1dGhVcmwob3B0cyA9IHt9KSB7XG4gICAgICAgIGlmIChvcHRzLmNvZGVfY2hhbGxlbmdlX21ldGhvZCAmJiAhb3B0cy5jb2RlX2NoYWxsZW5nZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJZiBhIGNvZGVfY2hhbGxlbmdlX21ldGhvZCBpcyBwcm92aWRlZCwgY29kZV9jaGFsbGVuZ2UgbXVzdCBiZSBpbmNsdWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLnJlc3BvbnNlX3R5cGUgPSBvcHRzLnJlc3BvbnNlX3R5cGUgfHwgJ2NvZGUnO1xuICAgICAgICBvcHRzLmNsaWVudF9pZCA9IG9wdHMuY2xpZW50X2lkIHx8IHRoaXMuX2NsaWVudElkO1xuICAgICAgICBvcHRzLnJlZGlyZWN0X3VyaSA9IG9wdHMucmVkaXJlY3RfdXJpIHx8IHRoaXMucmVkaXJlY3RVcmk7XG4gICAgICAgIC8vIEFsbG93IHNjb3BlcyB0byBiZSBwYXNzZWQgZWl0aGVyIGFzIGFycmF5IG9yIGEgc3RyaW5nXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdHMuc2NvcGUpKSB7XG4gICAgICAgICAgICBvcHRzLnNjb3BlID0gb3B0cy5zY29wZS5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm9vdFVybCA9IHRoaXMuZW5kcG9pbnRzLm9hdXRoMkF1dGhCYXNlVXJsLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiAocm9vdFVybCArXG4gICAgICAgICAgICAnPycgK1xuICAgICAgICAgICAgcXVlcnlzdHJpbmcuc3RyaW5naWZ5KG9wdHMpKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVDb2RlVmVyaWZpZXIoKSB7XG4gICAgICAgIC8vIFRvIG1ha2UgdGhlIGNvZGUgY29tcGF0aWJsZSB3aXRoIGJyb3dzZXIgU3VidGxlQ3J5cHRvIHdlIG5lZWQgdG8gbWFrZVxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBhc3luYy5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZW5lcmF0ZUNvZGVWZXJpZmllciBpcyByZW1vdmVkLCBwbGVhc2UgdXNlIGdlbmVyYXRlQ29kZVZlcmlmaWVyQXN5bmMgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYSBjb2RlX3ZlcmlmaWVyLCBhbmQgaXRzXG4gICAgICogcmVzdWx0aW5nIFNIQTI1Ni4gSWYgdXNlZCwgdGhpcyBtdXN0IGJlIHBhaXJlZCB3aXRoIGEgUzI1NlxuICAgICAqIGNvZGVfY2hhbGxlbmdlX21ldGhvZC5cbiAgICAgKlxuICAgICAqIEZvciBhIGZ1bGwgZXhhbXBsZSBzZWU6XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWFwaXMvZ29vZ2xlLWF1dGgtbGlicmFyeS1ub2RlanMvYmxvYi9tYWluL3NhbXBsZXMvb2F1dGgyLWNvZGVWZXJpZmllci5qc1xuICAgICAqL1xuICAgIGFzeW5jIGdlbmVyYXRlQ29kZVZlcmlmaWVyQXN5bmMoKSB7XG4gICAgICAgIC8vIGJhc2U2NCBlbmNvZGluZyB1c2VzIDYgYml0cyBwZXIgY2hhcmFjdGVyLCBhbmQgd2Ugd2FudCB0byBnZW5lcmF0ZTEyOFxuICAgICAgICAvLyBjaGFyYWN0ZXJzLiA2KjEyOC84ID0gOTYuXG4gICAgICAgIGNvbnN0IGNyeXB0byA9ICgwLCBjcnlwdG9fMS5jcmVhdGVDcnlwdG8pKCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVN0cmluZyA9IGNyeXB0by5yYW5kb21CeXRlc0Jhc2U2NCg5Nik7XG4gICAgICAgIC8vIFRoZSB2YWxpZCBjaGFyYWN0ZXJzIGluIHRoZSBjb2RlX3ZlcmlmaWVyIGFyZSBbQS1aXS9bYS16XS9bMC05XS9cbiAgICAgICAgLy8gXCItXCIvXCIuXCIvXCJfXCIvXCJ+XCIuIEJhc2U2NCBlbmNvZGVkIHN0cmluZ3MgYXJlIHByZXR0eSBjbG9zZSwgc28gd2UncmUganVzdFxuICAgICAgICAvLyBzd2FwcGluZyBvdXQgYSBmZXcgY2hhcnMuXG4gICAgICAgIGNvbnN0IGNvZGVWZXJpZmllciA9IHJhbmRvbVN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAnficpXG4gICAgICAgICAgICAucmVwbGFjZSgvPS9nLCAnXycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICctJyk7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBiYXNlNjQgZW5jb2RlZCBTSEEyNTZcbiAgICAgICAgY29uc3QgdW5lbmNvZGVkQ29kZUNoYWxsZW5nZSA9IGF3YWl0IGNyeXB0by5zaGEyNTZEaWdlc3RCYXNlNjQoY29kZVZlcmlmaWVyKTtcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1c2UgYmFzZTY0VXJsRW5jb2RpbmcgaW5zdGVhZCBvZiBzdGFuZGFyZCBiYXNlNjRcbiAgICAgICAgY29uc3QgY29kZUNoYWxsZW5nZSA9IHVuZW5jb2RlZENvZGVDaGFsbGVuZ2VcbiAgICAgICAgICAgIC5zcGxpdCgnPScpWzBdXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbiAgICAgICAgcmV0dXJuIHsgY29kZVZlcmlmaWVyLCBjb2RlQ2hhbGxlbmdlIH07XG4gICAgfVxuICAgIGdldFRva2VuKGNvZGVPck9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgY29kZU9yT3B0aW9ucyA9PT0gJ3N0cmluZycgPyB7IGNvZGU6IGNvZGVPck9wdGlvbnMgfSA6IGNvZGVPck9wdGlvbnM7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nZXRUb2tlbkFzeW5jKG9wdGlvbnMpLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByLnRva2Vucywgci5yZXMpLCBlID0+IGNhbGxiYWNrKGUsIG51bGwsIGUucmVzcG9uc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuQXN5bmMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0VG9rZW5Bc3luYyhvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnRzLm9hdXRoMlRva2VuVXJsLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IG9wdGlvbnMuY2xpZW50X2lkIHx8IHRoaXMuX2NsaWVudElkLFxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogb3B0aW9ucy5jb2RlVmVyaWZpZXIsXG4gICAgICAgICAgICBjb2RlOiBvcHRpb25zLmNvZGUsXG4gICAgICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogb3B0aW9ucy5yZWRpcmVjdF91cmkgfHwgdGhpcy5yZWRpcmVjdFVyaSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuY2xpZW50QXV0aGVudGljYXRpb24gPT09IENsaWVudEF1dGhlbnRpY2F0aW9uLkNsaWVudFNlY3JldEJhc2ljKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke3RoaXMuX2NsaWVudElkfToke3RoaXMuX2NsaWVudFNlY3JldH1gKTtcbiAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdhdXRob3JpemF0aW9uJywgYEJhc2ljICR7YmFzaWMudG9TdHJpbmcoJ2Jhc2U2NCcpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsaWVudEF1dGhlbnRpY2F0aW9uID09PSBDbGllbnRBdXRoZW50aWNhdGlvbi5DbGllbnRTZWNyZXRQb3N0KSB7XG4gICAgICAgICAgICB2YWx1ZXMuY2xpZW50X3NlY3JldCA9IHRoaXMuX2NsaWVudFNlY3JldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgLi4uT0F1dGgyQ2xpZW50LlJFVFJZX0NPTkZJRyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgZGF0YTogbmV3IFVSTFNlYXJjaFBhcmFtcygoMCwgdXRpbF8xLnJlbW92ZVVuZGVmaW5lZFZhbHVlc0luT2JqZWN0KSh2YWx1ZXMpKSxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJ2dldFRva2VuQXN5bmMnKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSByZXMuZGF0YTtcbiAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmV4cGlyZXNfaW4pIHtcbiAgICAgICAgICAgIHRva2Vucy5leHBpcnlfZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmVzLmRhdGEuZXhwaXJlc19pbiAqIDEwMDA7XG4gICAgICAgICAgICBkZWxldGUgdG9rZW5zLmV4cGlyZXNfaW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCd0b2tlbnMnLCB0b2tlbnMpO1xuICAgICAgICByZXR1cm4geyB0b2tlbnMsIHJlcyB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGFjY2VzcyB0b2tlbi5cbiAgICAgKiBAcGFyYW0gcmVmcmVzaF90b2tlbiBFeGlzdGluZyByZWZyZXNoIHRva2VuLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgcmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbikge1xuICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuTm9DYWNoZShyZWZyZXNoVG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgcmVxdWVzdCB0byByZWZyZXNoIHVzaW5nIHRoZSBzYW1lIHRva2VuIGhhcyBzdGFydGVkLFxuICAgICAgICAvLyByZXR1cm4gdGhlIHNhbWUgcHJvbWlzZS5cbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaFRva2VuUHJvbWlzZXMuaGFzKHJlZnJlc2hUb2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlblByb21pc2VzLmdldChyZWZyZXNoVG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnJlZnJlc2hUb2tlbk5vQ2FjaGUocmVmcmVzaFRva2VuKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5Qcm9taXNlcy5kZWxldGUocmVmcmVzaFRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9LCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuUHJvbWlzZXMuZGVsZXRlKHJlZnJlc2hUb2tlbik7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5Qcm9taXNlcy5zZXQocmVmcmVzaFRva2VuLCBwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGFzeW5jIHJlZnJlc2hUb2tlbk5vQ2FjaGUocmVmcmVzaFRva2VuKSB7XG4gICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZnJlc2ggdG9rZW4gaXMgc2V0LicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnRzLm9hdXRoMlRva2VuVXJsLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuX2NsaWVudElkLFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5fY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICAuLi5PQXV0aDJDbGllbnQuUkVUUllfQ09ORklHLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXcgVVJMU2VhcmNoUGFyYW1zKCgwLCB1dGlsXzEucmVtb3ZlVW5kZWZpbmVkVmFsdWVzSW5PYmplY3QpKGRhdGEpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhdXRoY2xpZW50XzEuQXV0aENsaWVudC5zZXRNZXRob2ROYW1lKG9wdHMsICdyZWZyZXNoVG9rZW5Ob0NhY2hlJyk7XG4gICAgICAgICAgICAvLyByZXF1ZXN0IGZvciBuZXcgdG9rZW5cbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHRoaXMudHJhbnNwb3J0ZXIucmVxdWVzdChvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBnYXhpb3NfMS5HYXhpb3NFcnJvciAmJlxuICAgICAgICAgICAgICAgIGUubWVzc2FnZSA9PT0gJ2ludmFsaWRfZ3JhbnQnICYmXG4gICAgICAgICAgICAgICAgZS5yZXNwb25zZT8uZGF0YSAmJlxuICAgICAgICAgICAgICAgIC9SZUF1dGgvaS50ZXN0KGUucmVzcG9uc2UuZGF0YS5lcnJvcl9kZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbnMgPSByZXMuZGF0YTtcbiAgICAgICAgLy8gVE9ETzogZGUtZHVwbGljYXRlIHRoaXMgY29kZSBmcm9tIGEgZmV3IHNwb3RzXG4gICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5leHBpcmVzX2luKSB7XG4gICAgICAgICAgICB0b2tlbnMuZXhwaXJ5X2RhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHJlcy5kYXRhLmV4cGlyZXNfaW4gKiAxMDAwO1xuICAgICAgICAgICAgZGVsZXRlIHRva2Vucy5leHBpcmVzX2luO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgndG9rZW5zJywgdG9rZW5zKTtcbiAgICAgICAgcmV0dXJuIHsgdG9rZW5zLCByZXMgfTtcbiAgICB9XG4gICAgcmVmcmVzaEFjY2Vzc1Rva2VuKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWNjZXNzVG9rZW5Bc3luYygpLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByLmNyZWRlbnRpYWxzLCByLnJlcyksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuQXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IHIgPSBhd2FpdCB0aGlzLnJlZnJlc2hUb2tlbih0aGlzLmNyZWRlbnRpYWxzLnJlZnJlc2hfdG9rZW4pO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSByLnRva2VucztcbiAgICAgICAgdG9rZW5zLnJlZnJlc2hfdG9rZW4gPSB0aGlzLmNyZWRlbnRpYWxzLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB0b2tlbnM7XG4gICAgICAgIHJldHVybiB7IGNyZWRlbnRpYWxzOiB0aGlzLmNyZWRlbnRpYWxzLCByZXM6IHIucmVzIH07XG4gICAgfVxuICAgIGdldEFjY2Vzc1Rva2VuKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nZXRBY2Nlc3NUb2tlbkFzeW5jKCkudGhlbihyID0+IGNhbGxiYWNrKG51bGwsIHIudG9rZW4sIHIucmVzKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWNjZXNzVG9rZW5Bc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldEFjY2Vzc1Rva2VuQXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlZnJlc2ggPSAhdGhpcy5jcmVkZW50aWFscy5hY2Nlc3NfdG9rZW4gfHwgdGhpcy5pc1Rva2VuRXhwaXJpbmcoKTtcbiAgICAgICAgaWYgKHNob3VsZFJlZnJlc2gpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jcmVkZW50aWFscy5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmcmVzaEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmcmVzaGVkQWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnByb2Nlc3NBbmRWYWxpZGF0ZVJlZnJlc2hIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoZWRBY2Nlc3NUb2tlbj8uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENyZWRlbnRpYWxzKHJlZnJlc2hlZEFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRva2VuOiB0aGlzLmNyZWRlbnRpYWxzLmFjY2Vzc190b2tlbiB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZnJlc2ggdG9rZW4gb3IgcmVmcmVzaCBoYW5kbGVyIGNhbGxiYWNrIGlzIHNldC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByID0gYXdhaXQgdGhpcy5yZWZyZXNoQWNjZXNzVG9rZW5Bc3luYygpO1xuICAgICAgICAgICAgaWYgKCFyLmNyZWRlbnRpYWxzIHx8IChyLmNyZWRlbnRpYWxzICYmICFyLmNyZWRlbnRpYWxzLmFjY2Vzc190b2tlbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCByZWZyZXNoIGFjY2VzcyB0b2tlbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHRva2VuOiByLmNyZWRlbnRpYWxzLmFjY2Vzc190b2tlbiwgcmVzOiByLnJlcyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9rZW46IHRoaXMuY3JlZGVudGlhbHMuYWNjZXNzX3Rva2VuIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gYXV0aGVudGljYXRpb24gaW50ZXJmYWNlLiAgSXQgdGFrZXMgYW4gb3B0aW9uYWwgdXJsIHdoaWNoIHdoZW5cbiAgICAgKiBwcmVzZW50IGlzIHRoZSBlbmRwb2ludCBiZWluZyBhY2Nlc3NlZCwgYW5kIHJldHVybnMgYSBQcm9taXNlIHdoaWNoXG4gICAgICogcmVzb2x2ZXMgd2l0aCBhdXRob3JpemF0aW9uIGhlYWRlciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBJbiBPQXV0aDJDbGllbnQsIHRoZSByZXN1bHQgaGFzIHRoZSBmb3JtOlxuICAgICAqIHsgYXV0aG9yaXphdGlvbjogJ0JlYXJlciA8YWNjZXNzX3Rva2VuX3ZhbHVlPicgfVxuICAgICAqL1xuICAgIGFzeW5jIGdldFJlcXVlc3RIZWFkZXJzKHVybCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGF3YWl0IHRoaXMuZ2V0UmVxdWVzdE1ldGFkYXRhQXN5bmModXJsKSkuaGVhZGVycztcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuICAgIGFzeW5jIGdldFJlcXVlc3RNZXRhZGF0YUFzeW5jKHVybCkge1xuICAgICAgICB1cmw7XG4gICAgICAgIGNvbnN0IHRoaXNDcmVkcyA9IHRoaXMuY3JlZGVudGlhbHM7XG4gICAgICAgIGlmICghdGhpc0NyZWRzLmFjY2Vzc190b2tlbiAmJlxuICAgICAgICAgICAgIXRoaXNDcmVkcy5yZWZyZXNoX3Rva2VuICYmXG4gICAgICAgICAgICAhdGhpcy5hcGlLZXkgJiZcbiAgICAgICAgICAgICF0aGlzLnJlZnJlc2hIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjY2VzcywgcmVmcmVzaCB0b2tlbiwgQVBJIGtleSBvciByZWZyZXNoIGhhbmRsZXIgY2FsbGJhY2sgaXMgc2V0LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzQ3JlZHMuYWNjZXNzX3Rva2VuICYmICF0aGlzLmlzVG9rZW5FeHBpcmluZygpKSB7XG4gICAgICAgICAgICB0aGlzQ3JlZHMudG9rZW5fdHlwZSA9IHRoaXNDcmVkcy50b2tlbl90eXBlIHx8ICdCZWFyZXInO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzQ3JlZHMudG9rZW5fdHlwZSArICcgJyArIHRoaXNDcmVkcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IHRoaXMuYWRkU2hhcmVkTWV0YWRhdGFIZWFkZXJzKGhlYWRlcnMpIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgcmVmcmVzaEhhbmRsZXIgZXhpc3RzLCBjYWxsIHByb2Nlc3NBbmRWYWxpZGF0ZVJlZnJlc2hIYW5kbGVyKCkuXG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hIYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCByZWZyZXNoZWRBY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMucHJvY2Vzc0FuZFZhbGlkYXRlUmVmcmVzaEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGlmIChyZWZyZXNoZWRBY2Nlc3NUb2tlbj8uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscyhyZWZyZXNoZWRBY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5jcmVkZW50aWFscy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogdGhpcy5hZGRTaGFyZWRNZXRhZGF0YUhlYWRlcnMoaGVhZGVycykgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcGlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ1gtR29vZy1BcGktS2V5JzogdGhpcy5hcGlLZXkgfSkgfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgciA9IG51bGw7XG4gICAgICAgIGxldCB0b2tlbnMgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgciA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuKHRoaXNDcmVkcy5yZWZyZXNoX3Rva2VuKTtcbiAgICAgICAgICAgIHRva2VucyA9IHIudG9rZW5zO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBlcnI7XG4gICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJlxuICAgICAgICAgICAgICAgIChlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzIHx8IGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID0gYENvdWxkIG5vdCByZWZyZXNoIGFjY2VzcyB0b2tlbjogJHtlLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzO1xuICAgICAgICBjcmVkZW50aWFscy50b2tlbl90eXBlID0gY3JlZGVudGlhbHMudG9rZW5fdHlwZSB8fCAnQmVhcmVyJztcbiAgICAgICAgdG9rZW5zLnJlZnJlc2hfdG9rZW4gPSBjcmVkZW50aWFscy5yZWZyZXNoX3Rva2VuO1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gdG9rZW5zO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogY3JlZGVudGlhbHMudG9rZW5fdHlwZSArICcgJyArIHRva2Vucy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyBoZWFkZXJzOiB0aGlzLmFkZFNoYXJlZE1ldGFkYXRhSGVhZGVycyhoZWFkZXJzKSwgcmVzOiByLnJlcyB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gVVJMIHRvIHJldm9rZSB0aGUgZ2l2ZW4gdG9rZW4uXG4gICAgICogQHBhcmFtIHRva2VuIFRoZSBleGlzdGluZyB0b2tlbiB0byBiZSByZXZva2VkLlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIGluc3RhbmNlIG1ldGhvZCB7QGxpbmsgT0F1dGgyQ2xpZW50LmdldFJldm9rZVRva2VuVVJMfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSZXZva2VUb2tlblVybCh0b2tlbikge1xuICAgICAgICByZXR1cm4gbmV3IE9BdXRoMkNsaWVudCgpLmdldFJldm9rZVRva2VuVVJMKHRva2VuKS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBVUkwgdG8gcmV2b2tlIHRoZSBnaXZlbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbiBUaGUgZXhpc3RpbmcgdG9rZW4gdG8gYmUgcmV2b2tlZC5cbiAgICAgKi9cbiAgICBnZXRSZXZva2VUb2tlblVSTCh0b2tlbikge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuZW5kcG9pbnRzLm9hdXRoMlJldm9rZVVybCk7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgcmV2b2tlVG9rZW4odG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAuLi5PQXV0aDJDbGllbnQuUkVUUllfQ09ORklHLFxuICAgICAgICAgICAgdXJsOiB0aGlzLmdldFJldm9rZVRva2VuVVJMKHRva2VuKS50b1N0cmluZygpLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJ3Jldm9rZVRva2VuJyk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRlclxuICAgICAgICAgICAgICAgIC5yZXF1ZXN0KG9wdHMpXG4gICAgICAgICAgICAgICAgLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0ZXIucmVxdWVzdChvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXZva2VDcmVkZW50aWFscyhjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucmV2b2tlQ3JlZGVudGlhbHNBc3luYygpLnRoZW4ocmVzID0+IGNhbGxiYWNrKG51bGwsIHJlcyksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldm9rZUNyZWRlbnRpYWxzQXN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyByZXZva2VDcmVkZW50aWFsc0FzeW5jKCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuY3JlZGVudGlhbHMuYWNjZXNzX3Rva2VuO1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV2b2tlVG9rZW4odG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhY2Nlc3MgdG9rZW4gdG8gcmV2b2tlLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3Qob3B0cywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBc3luYyhvcHRzKS50aGVuKHIgPT4gY2FsbGJhY2sobnVsbCwgciksIGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlLCBlLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKG9wdHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3RBc3luYyhvcHRzLCByZUF1dGhSZXRyaWVkID0gZmFsc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCB0aGlzLmdldFJlcXVlc3RNZXRhZGF0YUFzeW5jKCk7XG4gICAgICAgICAgICBvcHRzLmhlYWRlcnMgPSBnYXhpb3NfMS5HYXhpb3MubWVyZ2VIZWFkZXJzKG9wdHMuaGVhZGVycyk7XG4gICAgICAgICAgICB0aGlzLmFkZFVzZXJQcm9qZWN0QW5kQXV0aEhlYWRlcnMob3B0cy5oZWFkZXJzLCByLmhlYWRlcnMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgb3B0cy5oZWFkZXJzLnNldCgnWC1Hb29nLUFwaS1LZXknLCB0aGlzLmFwaUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBlLnJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzO1xuICAgICAgICAgICAgICAgIC8vIFJldHJ5IHRoZSByZXF1ZXN0IGZvciBtZXRhZGF0YSBpZiB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgIC8vIC0gV2UgaGF2ZW4ndCBhbHJlYWR5IHJldHJpZWQuICBJdCBvbmx5IG1ha2VzIHNlbnNlIHRvIHJldHJ5IG9uY2UuXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgcmVzcG9uc2Ugd2FzIGEgNDAxIG9yIGEgNDAzXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgcmVxdWVzdCBkaWRuJ3Qgc2VuZCBhIHJlYWRhYmxlU3RyZWFtXG4gICAgICAgICAgICAgICAgLy8gLSBBbiBhY2Nlc3NfdG9rZW4gYW5kIHJlZnJlc2hfdG9rZW4gd2VyZSBhdmFpbGFibGUsIGJ1dCBlaXRoZXIgbm9cbiAgICAgICAgICAgICAgICAvLyAgIGV4cGlyeV9kYXRlIHdhcyBhdmFpbGFibGUgb3IgdGhlIGZvcmNlUmVmcmVzaE9uRmFpbHVyZSBmbGFnIGlzIHNldC5cbiAgICAgICAgICAgICAgICAvLyAgIFRoZSBhYnNlbnQgZXhwaXJ5X2RhdGUgY2FzZSBjYW4gaGFwcGVuIHdoZW4gZGV2ZWxvcGVycyBzdGFzaCB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGFjY2Vzc190b2tlbiBhbmQgcmVmcmVzaF90b2tlbiBmb3IgbGF0ZXIgdXNlLCBidXQgdGhlIGFjY2Vzc190b2tlblxuICAgICAgICAgICAgICAgIC8vICAgZmFpbHMgb24gdGhlIGZpcnN0IHRyeSBiZWNhdXNlIGl0J3MgZXhwaXJlZC4gU29tZSBkZXZlbG9wZXJzIG1heVxuICAgICAgICAgICAgICAgIC8vICAgY2hvb3NlIHRvIGVuYWJsZSBmb3JjZVJlZnJlc2hPbkZhaWx1cmUgdG8gbWl0aWdhdGUgdGltZS1yZWxhdGVkXG4gICAgICAgICAgICAgICAgLy8gICBlcnJvcnMuXG4gICAgICAgICAgICAgICAgLy8gT3IgdGhlIGZvbGxvd2luZyBjcml0ZXJpYSBhcmUgdHJ1ZTpcbiAgICAgICAgICAgICAgICAvLyAtIFdlIGhhdmVuJ3QgYWxyZWFkeSByZXRyaWVkLiAgSXQgb25seSBtYWtlcyBzZW5zZSB0byByZXRyeSBvbmNlLlxuICAgICAgICAgICAgICAgIC8vIC0gVGhlIHJlc3BvbnNlIHdhcyBhIDQwMSBvciBhIDQwM1xuICAgICAgICAgICAgICAgIC8vIC0gVGhlIHJlcXVlc3QgZGlkbid0IHNlbmQgYSByZWFkYWJsZVN0cmVhbVxuICAgICAgICAgICAgICAgIC8vIC0gTm8gcmVmcmVzaF90b2tlbiB3YXMgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gLSBBbiBhY2Nlc3NfdG9rZW4gYW5kIGEgcmVmcmVzaEhhbmRsZXIgY2FsbGJhY2sgd2VyZSBhdmFpbGFibGUsIGJ1dFxuICAgICAgICAgICAgICAgIC8vICAgZWl0aGVyIG5vIGV4cGlyeV9kYXRlIHdhcyBhdmFpbGFibGUgb3IgdGhlIGZvcmNlUmVmcmVzaE9uRmFpbHVyZVxuICAgICAgICAgICAgICAgIC8vICAgZmxhZyBpcyBzZXQuIFRoZSBhY2Nlc3NfdG9rZW4gZmFpbHMgb24gdGhlIGZpcnN0IHRyeSBiZWNhdXNlIGl0J3NcbiAgICAgICAgICAgICAgICAvLyAgIGV4cGlyZWQuIFNvbWUgZGV2ZWxvcGVycyBtYXkgY2hvb3NlIHRvIGVuYWJsZSBmb3JjZVJlZnJlc2hPbkZhaWx1cmVcbiAgICAgICAgICAgICAgICAvLyAgIHRvIG1pdGlnYXRlIHRpbWUtcmVsYXRlZCBlcnJvcnMuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5UmVxdWlyZVJlZnJlc2ggPSB0aGlzLmNyZWRlbnRpYWxzICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuYWNjZXNzX3Rva2VuICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMucmVmcmVzaF90b2tlbiAmJlxuICAgICAgICAgICAgICAgICAgICAoIXRoaXMuY3JlZGVudGlhbHMuZXhwaXJ5X2RhdGUgfHwgdGhpcy5mb3JjZVJlZnJlc2hPbkZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heVJlcXVpcmVSZWZyZXNoV2l0aE5vUmVmcmVzaFRva2VuID0gdGhpcy5jcmVkZW50aWFscyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzLmFjY2Vzc190b2tlbiAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5jcmVkZW50aWFscy5yZWZyZXNoX3Rva2VuICYmXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5jcmVkZW50aWFscy5leHBpcnlfZGF0ZSB8fCB0aGlzLmZvcmNlUmVmcmVzaE9uRmFpbHVyZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoSGFuZGxlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1JlYWRhYmxlU3RyZWFtID0gcmVzLmNvbmZpZy5kYXRhIGluc3RhbmNlb2Ygc3RyZWFtLlJlYWRhYmxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXV0aEVyciA9IHN0YXR1c0NvZGUgPT09IDQwMSB8fCBzdGF0dXNDb2RlID09PSA0MDM7XG4gICAgICAgICAgICAgICAgaWYgKCFyZUF1dGhSZXRyaWVkICYmXG4gICAgICAgICAgICAgICAgICAgIGlzQXV0aEVyciAmJlxuICAgICAgICAgICAgICAgICAgICAhaXNSZWFkYWJsZVN0cmVhbSAmJlxuICAgICAgICAgICAgICAgICAgICBtYXlSZXF1aXJlUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RBc3luYyhvcHRzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlQXV0aFJldHJpZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNBdXRoRXJyICYmXG4gICAgICAgICAgICAgICAgICAgICFpc1JlYWRhYmxlU3RyZWFtICYmXG4gICAgICAgICAgICAgICAgICAgIG1heVJlcXVpcmVSZWZyZXNoV2l0aE5vUmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hlZEFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5wcm9jZXNzQW5kVmFsaWRhdGVSZWZyZXNoSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmcmVzaGVkQWNjZXNzVG9rZW4/LmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscyhyZWZyZXNoZWRBY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKG9wdHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmVyaWZ5SWRUb2tlbihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHVzZWQgdG8gYWNjZXB0IHR3byBhcmd1bWVudHMgaW5zdGVhZCBvZiBhbiBvcHRpb25zIG9iamVjdC5cbiAgICAgICAgLy8gQ2hlY2sgdGhlIHR5cGVzIHRvIGhlbHAgdXNlcnMgdXBncmFkZSB3aXRoIGxlc3MgcGFpbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBjYW4gYmUgcmVtb3ZlZCBhZnRlciBhIDIuMCByZWxlYXNlLlxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9ucyBvYmplY3QgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgd2hpY2ggaW5jbHVkZXMgdGhlIGlkVG9rZW4sIGF1ZGllbmNlLCBhbmQgbWF4RXhwaXJ5LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlJZFRva2VuQXN5bmMob3B0aW9ucykudGhlbihyID0+IGNhbGxiYWNrKG51bGwsIHIpLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52ZXJpZnlJZFRva2VuQXN5bmMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgdmVyaWZ5SWRUb2tlbkFzeW5jKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmlkVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZlcmlmeUlkVG9rZW4gbWV0aG9kIHJlcXVpcmVzIGFuIElEIFRva2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldEZlZGVyYXRlZFNpZ25vbkNlcnRzQXN5bmMoKTtcbiAgICAgICAgY29uc3QgbG9naW4gPSBhd2FpdCB0aGlzLnZlcmlmeVNpZ25lZEp3dFdpdGhDZXJ0c0FzeW5jKG9wdGlvbnMuaWRUb2tlbiwgcmVzcG9uc2UuY2VydHMsIG9wdGlvbnMuYXVkaWVuY2UsIHRoaXMuaXNzdWVycywgb3B0aW9ucy5tYXhFeHBpcnkpO1xuICAgICAgICByZXR1cm4gbG9naW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3Zpc2lvbmVkIGFjY2VzcyB0b2tlbi4gIEVzcGVjaWFsbHkgdXNlZnVsXG4gICAgICogaWYgeW91IHdhbnQgdG8gY2hlY2sgdGhlIHNjb3BlcyB0aGF0IHdlcmUgcHJvdmlzaW9uZWQgdG8gYSBnaXZlbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiBSZXF1aXJlZC4gIFRoZSBBY2Nlc3MgVG9rZW4gZm9yIHdoaWNoIHlvdSB3YW50IHRvIGdldFxuICAgICAqIHVzZXIgaW5mby5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRUb2tlbkluZm8oYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLnRyYW5zcG9ydGVyLnJlcXVlc3Qoe1xuICAgICAgICAgICAgLi4uT0F1dGgyQ2xpZW50LlJFVFJZX0NPTkZJRyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogdGhpcy5lbmRwb2ludHMudG9rZW5JbmZvVXJsLnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbmZvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBleHBpcnlfZGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBkYXRhLmV4cGlyZXNfaW4gKiAxMDAwLFxuICAgICAgICAgICAgc2NvcGVzOiBkYXRhLnNjb3BlLnNwbGl0KCcgJyksXG4gICAgICAgIH0sIGRhdGEpO1xuICAgICAgICBkZWxldGUgaW5mby5leHBpcmVzX2luO1xuICAgICAgICBkZWxldGUgaW5mby5zY29wZTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuICAgIGdldEZlZGVyYXRlZFNpZ25vbkNlcnRzKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nZXRGZWRlcmF0ZWRTaWdub25DZXJ0c0FzeW5jKCkudGhlbihyID0+IGNhbGxiYWNrKG51bGwsIHIuY2VydHMsIHIucmVzKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmVkZXJhdGVkU2lnbm9uQ2VydHNBc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldEZlZGVyYXRlZFNpZ25vbkNlcnRzQXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gKDAsIGNyeXB0b18xLmhhc0Jyb3dzZXJDcnlwdG8pKClcbiAgICAgICAgICAgID8gQ2VydGlmaWNhdGVGb3JtYXQuSldLXG4gICAgICAgICAgICA6IENlcnRpZmljYXRlRm9ybWF0LlBFTTtcbiAgICAgICAgaWYgKHRoaXMuY2VydGlmaWNhdGVFeHBpcnkgJiZcbiAgICAgICAgICAgIG5vd1RpbWUgPCB0aGlzLmNlcnRpZmljYXRlRXhwaXJ5LmdldFRpbWUoKSAmJlxuICAgICAgICAgICAgdGhpcy5jZXJ0aWZpY2F0ZUNhY2hlRm9ybWF0ID09PSBmb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNlcnRzOiB0aGlzLmNlcnRpZmljYXRlQ2FjaGUsIGZvcm1hdCB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgICAgICBjYXNlIENlcnRpZmljYXRlRm9ybWF0LlBFTTpcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmVuZHBvaW50cy5vYXV0aDJGZWRlcmF0ZWRTaWdub25QZW1DZXJ0c1VybC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDZXJ0aWZpY2F0ZUZvcm1hdC5KV0s6XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5lbmRwb2ludHMub2F1dGgyRmVkZXJhdGVkU2lnbm9uSndrQ2VydHNVcmwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBjZXJ0aWZpY2F0ZSBmb3JtYXQgJHtmb3JtYXR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgLi4uT0F1dGgyQ2xpZW50LlJFVFJZX0NPTkZJRyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXV0aGNsaWVudF8xLkF1dGhDbGllbnQuc2V0TWV0aG9kTmFtZShvcHRzLCAnZ2V0RmVkZXJhdGVkU2lnbm9uQ2VydHNBc3luYycpO1xuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID0gYEZhaWxlZCB0byByZXRyaWV2ZSB2ZXJpZmljYXRpb24gY2VydGlmaWNhdGVzOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWNoZUNvbnRyb2wgPSByZXM/LmhlYWRlcnMuZ2V0KCdjYWNoZS1jb250cm9sJyk7XG4gICAgICAgIGxldCBjYWNoZUFnZSA9IC0xO1xuICAgICAgICBpZiAoY2FjaGVDb250cm9sKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhBZ2UgPSAvbWF4LWFnZT0oPzxtYXhBZ2U+WzAtOV0rKS8uZXhlYyhjYWNoZUNvbnRyb2wpPy5ncm91cHNcbiAgICAgICAgICAgICAgICA/Lm1heEFnZTtcbiAgICAgICAgICAgIGlmIChtYXhBZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSByZXN1bHRzIHdpdGggbWF4LWFnZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgICAgICBjYWNoZUFnZSA9IE51bWJlcihtYXhBZ2UpICogMTAwMDsgLy8gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNlcnRpZmljYXRlcyA9IHt9O1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgY2FzZSBDZXJ0aWZpY2F0ZUZvcm1hdC5QRU06XG4gICAgICAgICAgICAgICAgY2VydGlmaWNhdGVzID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENlcnRpZmljYXRlRm9ybWF0LkpXSzpcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiByZXMuZGF0YS5rZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlcnRpZmljYXRlc1trZXkua2lkXSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgY2VydGlmaWNhdGUgZm9ybWF0ICR7Zm9ybWF0fWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuY2VydGlmaWNhdGVFeHBpcnkgPVxuICAgICAgICAgICAgY2FjaGVBZ2UgPT09IC0xID8gbnVsbCA6IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgKyBjYWNoZUFnZSk7XG4gICAgICAgIHRoaXMuY2VydGlmaWNhdGVDYWNoZSA9IGNlcnRpZmljYXRlcztcbiAgICAgICAgdGhpcy5jZXJ0aWZpY2F0ZUNhY2hlRm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICByZXR1cm4geyBjZXJ0czogY2VydGlmaWNhdGVzLCBmb3JtYXQsIHJlcyB9O1xuICAgIH1cbiAgICBnZXRJYXBQdWJsaWNLZXlzKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nZXRJYXBQdWJsaWNLZXlzQXN5bmMoKS50aGVuKHIgPT4gY2FsbGJhY2sobnVsbCwgci5wdWJrZXlzLCByLnJlcyksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldElhcFB1YmxpY0tleXNBc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldElhcFB1YmxpY0tleXNBc3luYygpIHtcbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5lbmRwb2ludHMub2F1dGgySWFwUHVibGljS2V5VXJsLnRvU3RyaW5nKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIC4uLk9BdXRoMkNsaWVudC5SRVRSWV9DT05GSUcsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJ2dldElhcFB1YmxpY0tleXNBc3luYycpO1xuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID0gYEZhaWxlZCB0byByZXRyaWV2ZSB2ZXJpZmljYXRpb24gY2VydGlmaWNhdGVzOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwdWJrZXlzOiByZXMuZGF0YSwgcmVzIH07XG4gICAgfVxuICAgIHZlcmlmeVNpZ25lZEp3dFdpdGhDZXJ0cygpIHtcbiAgICAgICAgLy8gVG8gbWFrZSB0aGUgY29kZSBjb21wYXRpYmxlIHdpdGggYnJvd3NlciBTdWJ0bGVDcnlwdG8gd2UgbmVlZCB0byBtYWtlXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGFzeW5jLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlcmlmeVNpZ25lZEp3dFdpdGhDZXJ0cyBpcyByZW1vdmVkLCBwbGVhc2UgdXNlIHZlcmlmeVNpZ25lZEp3dFdpdGhDZXJ0c0FzeW5jIGluc3RlYWQuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFZlcmlmeSB0aGUgaWQgdG9rZW4gaXMgc2lnbmVkIHdpdGggdGhlIGNvcnJlY3QgY2VydGlmaWNhdGVcbiAgICAgKiBhbmQgaXMgZnJvbSB0aGUgY29ycmVjdCBhdWRpZW5jZS5cbiAgICAgKiBAcGFyYW0gand0IFRoZSBqd3QgdG8gdmVyaWZ5IChUaGUgSUQgVG9rZW4gaW4gdGhpcyBjYXNlKS5cbiAgICAgKiBAcGFyYW0gY2VydHMgVGhlIGFycmF5IG9mIGNlcnRzIHRvIHRlc3QgdGhlIGp3dCBhZ2FpbnN0LlxuICAgICAqIEBwYXJhbSByZXF1aXJlZEF1ZGllbmNlIFRoZSBhdWRpZW5jZSB0byB0ZXN0IHRoZSBqd3QgYWdhaW5zdC5cbiAgICAgKiBAcGFyYW0gaXNzdWVycyBUaGUgYWxsb3dlZCBpc3N1ZXJzIG9mIHRoZSBqd3QgKE9wdGlvbmFsKS5cbiAgICAgKiBAcGFyYW0gbWF4RXhwaXJ5IFRoZSBtYXggZXhwaXJ5IHRoZSBjZXJ0aWZpY2F0ZSBjYW4gYmUgKE9wdGlvbmFsKS5cbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyB0byBMb2dpblRpY2tldCBvbiB2ZXJpZmljYXRpb24uXG4gICAgICovXG4gICAgYXN5bmMgdmVyaWZ5U2lnbmVkSnd0V2l0aENlcnRzQXN5bmMoand0LCBjZXJ0cywgcmVxdWlyZWRBdWRpZW5jZSwgaXNzdWVycywgbWF4RXhwaXJ5KSB7XG4gICAgICAgIGNvbnN0IGNyeXB0byA9ICgwLCBjcnlwdG9fMS5jcmVhdGVDcnlwdG8pKCk7XG4gICAgICAgIGlmICghbWF4RXhwaXJ5KSB7XG4gICAgICAgICAgICBtYXhFeHBpcnkgPSBPQXV0aDJDbGllbnQuREVGQVVMVF9NQVhfVE9LRU5fTElGRVRJTUVfU0VDU187XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBqd3Quc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBudW1iZXIgb2Ygc2VnbWVudHMgaW4gdG9rZW46ICcgKyBqd3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ25lZCA9IHNlZ21lbnRzWzBdICsgJy4nICsgc2VnbWVudHNbMV07XG4gICAgICAgIGxldCBzaWduYXR1cmUgPSBzZWdtZW50c1syXTtcbiAgICAgICAgbGV0IGVudmVsb3BlO1xuICAgICAgICBsZXQgcGF5bG9hZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVudmVsb3BlID0gSlNPTi5wYXJzZShjcnlwdG8uZGVjb2RlQmFzZTY0U3RyaW5nVXRmOChzZWdtZW50c1swXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gYENhbid0IHBhcnNlIHRva2VuIGVudmVsb3BlOiAke3NlZ21lbnRzWzBdfSc6ICR7ZXJyLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVudmVsb3BlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBwYXJzZSB0b2tlbiBlbnZlbG9wZTogXCIgKyBzZWdtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNyeXB0by5kZWNvZGVCYXNlNjRTdHJpbmdVdGY4KHNlZ21lbnRzWzFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBgQ2FuJ3QgcGFyc2UgdG9rZW4gcGF5bG9hZCAnJHtzZWdtZW50c1swXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgcGFyc2UgdG9rZW4gcGF5bG9hZDogXCIgKyBzZWdtZW50c1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2VydHMsIGVudmVsb3BlLmtpZCkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlcmUncyBubyByZWFzb24gdG8gYXR0ZW1wdCB2ZXJpZmljYXRpb25cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGVtIGZvdW5kIGZvciBlbnZlbG9wZTogJyArIEpTT04uc3RyaW5naWZ5KGVudmVsb3BlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VydCA9IGNlcnRzW2VudmVsb3BlLmtpZF07XG4gICAgICAgIGlmIChlbnZlbG9wZS5hbGcgPT09ICdFUzI1NicpIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IGZvcm1hdEVjZHNhLmpvc2VUb0RlcihzaWduYXR1cmUsICdFUzI1NicpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IGNyeXB0by52ZXJpZnkoY2VydCwgc2lnbmVkLCBzaWduYXR1cmUpO1xuICAgICAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdG9rZW4gc2lnbmF0dXJlOiAnICsgand0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlzc3VlIHRpbWUgaW4gdG9rZW46ICcgKyBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXlsb2FkLmV4cCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBleHBpcmF0aW9uIHRpbWUgaW4gdG9rZW46ICcgKyBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWF0ID0gTnVtYmVyKHBheWxvYWQuaWF0KTtcbiAgICAgICAgaWYgKGlzTmFOKGlhdCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lhdCBmaWVsZCB1c2luZyBpbnZhbGlkIGZvcm1hdCcpO1xuICAgICAgICBjb25zdCBleHAgPSBOdW1iZXIocGF5bG9hZC5leHApO1xuICAgICAgICBpZiAoaXNOYU4oZXhwKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwIGZpZWxkIHVzaW5nIGludmFsaWQgZm9ybWF0Jyk7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgICAgICAgaWYgKGV4cCA+PSBub3cgKyBtYXhFeHBpcnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwaXJhdGlvbiB0aW1lIHRvbyBmYXIgaW4gZnV0dXJlOiAnICsgSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVhcmxpZXN0ID0gaWF0IC0gT0F1dGgyQ2xpZW50LkNMT0NLX1NLRVdfU0VDU187XG4gICAgICAgIGNvbnN0IGxhdGVzdCA9IGV4cCArIE9BdXRoMkNsaWVudC5DTE9DS19TS0VXX1NFQ1NfO1xuICAgICAgICBpZiAobm93IDwgZWFybGllc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG9rZW4gdXNlZCB0b28gZWFybHksICcgK1xuICAgICAgICAgICAgICAgIG5vdyArXG4gICAgICAgICAgICAgICAgJyA8ICcgK1xuICAgICAgICAgICAgICAgIGVhcmxpZXN0ICtcbiAgICAgICAgICAgICAgICAnOiAnICtcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdyA+IGxhdGVzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiB1c2VkIHRvbyBsYXRlLCAnICtcbiAgICAgICAgICAgICAgICBub3cgK1xuICAgICAgICAgICAgICAgICcgPiAnICtcbiAgICAgICAgICAgICAgICBsYXRlc3QgK1xuICAgICAgICAgICAgICAgICc6ICcgK1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNzdWVycyAmJiBpc3N1ZXJzLmluZGV4T2YocGF5bG9hZC5pc3MpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlzc3VlciwgZXhwZWN0ZWQgb25lIG9mIFsnICtcbiAgICAgICAgICAgICAgICBpc3N1ZXJzICtcbiAgICAgICAgICAgICAgICAnXSwgYnV0IGdvdCAnICtcbiAgICAgICAgICAgICAgICBwYXlsb2FkLmlzcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgdGhlIGF1ZGllbmNlIG1hdGNoZXMgaWYgd2UgaGF2ZSBvbmVcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlZEF1ZGllbmNlICE9PSAndW5kZWZpbmVkJyAmJiByZXF1aXJlZEF1ZGllbmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBhdWQgPSBwYXlsb2FkLmF1ZDtcbiAgICAgICAgICAgIGxldCBhdWRWZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVpcmVkQXVkaWVuY2UgaXMgYW4gYXJyYXksIGNoZWNrIGlmIGl0IGNvbnRhaW5zIHRva2VuXG4gICAgICAgICAgICAvLyBhdWRpZW5jZVxuICAgICAgICAgICAgaWYgKHJlcXVpcmVkQXVkaWVuY2UuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgYXVkVmVyaWZpZWQgPSByZXF1aXJlZEF1ZGllbmNlLmluZGV4T2YoYXVkKSA+IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkVmVyaWZpZWQgPSBhdWQgPT09IHJlcXVpcmVkQXVkaWVuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWF1ZFZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyByZWNpcGllbnQsIHBheWxvYWQgYXVkaWVuY2UgIT0gcmVxdWlyZWRBdWRpZW5jZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgbG9naW50aWNrZXRfMS5Mb2dpblRpY2tldChlbnZlbG9wZSwgcGF5bG9hZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBBY2Nlc3NUb2tlblJlc3BvbnNlIHR5cGUgaWZcbiAgICAgKiByZWZyZXNoSGFuZGxlciBpcyBkZWZpbmVkLlxuICAgICAqIElmIG5vdCwgbm90aGluZyBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBhc3luYyBwcm9jZXNzQW5kVmFsaWRhdGVSZWZyZXNoSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaEhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlZnJlc2hIYW5kbGVyKCk7XG4gICAgICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhY2Nlc3MgdG9rZW4gaXMgcmV0dXJuZWQgYnkgdGhlIHJlZnJlc2hIYW5kbGVyIGNhbGxiYWNrLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYSB0b2tlbiBpcyBleHBpcmVkIG9yIHdpbGwgZXhwaXJlIHdpdGhpblxuICAgICAqIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpc21pbGxpc2Vjb25kcy5cbiAgICAgKiBJZiB0aGVyZSBpcyBubyBleHBpcnkgdGltZSwgYXNzdW1lcyB0aGUgdG9rZW4gaXMgbm90IGV4cGlyZWQgb3IgZXhwaXJpbmcuXG4gICAgICovXG4gICAgaXNUb2tlbkV4cGlyaW5nKCkge1xuICAgICAgICBjb25zdCBleHBpcnlEYXRlID0gdGhpcy5jcmVkZW50aWFscy5leHBpcnlfZGF0ZTtcbiAgICAgICAgcmV0dXJuIGV4cGlyeURhdGVcbiAgICAgICAgICAgID8gZXhwaXJ5RGF0ZSA8PSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuT0F1dGgyQ2xpZW50ID0gT0F1dGgyQ2xpZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2F1dGgyY2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDEzIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21wdXRlID0gdm9pZCAwO1xuY29uc3QgZ2F4aW9zXzEgPSByZXF1aXJlKFwiZ2F4aW9zXCIpO1xuY29uc3QgZ2NwTWV0YWRhdGEgPSByZXF1aXJlKFwiZ2NwLW1ldGFkYXRhXCIpO1xuY29uc3Qgb2F1dGgyY2xpZW50XzEgPSByZXF1aXJlKFwiLi9vYXV0aDJjbGllbnRcIik7XG5jbGFzcyBDb21wdXRlIGV4dGVuZHMgb2F1dGgyY2xpZW50XzEuT0F1dGgyQ2xpZW50IHtcbiAgICBzZXJ2aWNlQWNjb3VudEVtYWlsO1xuICAgIHNjb3BlcztcbiAgICAvKipcbiAgICAgKiBHb29nbGUgQ29tcHV0ZSBFbmdpbmUgc2VydmljZSBhY2NvdW50IGNyZWRlbnRpYWxzLlxuICAgICAqXG4gICAgICogUmV0cmlldmUgYWNjZXNzIHRva2VuIGZyb20gdGhlIG1ldGFkYXRhIHNlcnZlci5cbiAgICAgKiBTZWU6IGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9jb21wdXRlL2RvY3MvYWNjZXNzL2F1dGhlbnRpY2F0ZS13b3JrbG9hZHMjYXBwbGljYXRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICAvLyBTdGFydCB3aXRoIGFuIGV4cGlyZWQgcmVmcmVzaCB0b2tlbiwgd2hpY2ggd2lsbCBhdXRvbWF0aWNhbGx5IGJlXG4gICAgICAgIC8vIHJlZnJlc2hlZCBiZWZvcmUgdGhlIGZpcnN0IEFQSSBjYWxsIGlzIG1hZGUuXG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7IGV4cGlyeV9kYXRlOiAxLCByZWZyZXNoX3Rva2VuOiAnY29tcHV0ZS1wbGFjZWhvbGRlcicgfTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlQWNjb3VudEVtYWlsID0gb3B0aW9ucy5zZXJ2aWNlQWNjb3VudEVtYWlsIHx8ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5zY29wZXMgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMuc2NvcGVzKVxuICAgICAgICAgICAgPyBvcHRpb25zLnNjb3Blc1xuICAgICAgICAgICAgOiBvcHRpb25zLnNjb3Blc1xuICAgICAgICAgICAgICAgID8gW29wdGlvbnMuc2NvcGVzXVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLlxuICAgICAqIEBwYXJhbSByZWZyZXNoVG9rZW4gVW51c2VkIHBhcmFtZXRlclxuICAgICAqL1xuICAgIGFzeW5jIHJlZnJlc2hUb2tlbk5vQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuUGF0aCA9IGBzZXJ2aWNlLWFjY291bnRzLyR7dGhpcy5zZXJ2aWNlQWNjb3VudEVtYWlsfS90b2tlbmA7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiB0b2tlblBhdGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU9wdGlvbnMucGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBzY29wZXM6IHRoaXMuc2NvcGVzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IGdjcE1ldGFkYXRhLmluc3RhbmNlKGluc3RhbmNlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgZ2F4aW9zXzEuR2F4aW9zRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2UgPSBgQ291bGQgbm90IHJlZnJlc2ggYWNjZXNzIHRva2VuOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcEVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbnMgPSBkYXRhO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmV4cGlyZXNfaW4pIHtcbiAgICAgICAgICAgIHRva2Vucy5leHBpcnlfZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZGF0YS5leHBpcmVzX2luICogMTAwMDtcbiAgICAgICAgICAgIGRlbGV0ZSB0b2tlbnMuZXhwaXJlc19pbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoJ3Rva2VucycsIHRva2Vucyk7XG4gICAgICAgIHJldHVybiB7IHRva2VucywgcmVzOiBudWxsIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYW4gSUQgdG9rZW4uXG4gICAgICogQHBhcmFtIHRhcmdldEF1ZGllbmNlIHRoZSBhdWRpZW5jZSBmb3IgdGhlIGZldGNoZWQgSUQgdG9rZW4uXG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hJZFRva2VuKHRhcmdldEF1ZGllbmNlKSB7XG4gICAgICAgIGNvbnN0IGlkVG9rZW5QYXRoID0gYHNlcnZpY2UtYWNjb3VudHMvJHt0aGlzLnNlcnZpY2VBY2NvdW50RW1haWx9L2lkZW50aXR5YCArXG4gICAgICAgICAgICBgP2Zvcm1hdD1mdWxsJmF1ZGllbmNlPSR7dGFyZ2V0QXVkaWVuY2V9YDtcbiAgICAgICAgbGV0IGlkVG9rZW47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IGlkVG9rZW5QYXRoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlkVG9rZW4gPSBhd2FpdCBnY3BNZXRhZGF0YS5pbnN0YW5jZShpbnN0YW5jZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID0gYENvdWxkIG5vdCBmZXRjaCBJRCB0b2tlbjogJHtlLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkVG9rZW47XG4gICAgfVxuICAgIHdyYXBFcnJvcihlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGUucmVzcG9uc2U7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cykge1xuICAgICAgICAgICAgZS5zdGF0dXMgPSByZXMuc3RhdHVzO1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgICAgIGUubWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICdBIEZvcmJpZGRlbiBlcnJvciB3YXMgcmV0dXJuZWQgd2hpbGUgYXR0ZW1wdGluZyB0byByZXRyaWV2ZSBhbiBhY2Nlc3MgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9rZW4gZm9yIHRoZSBDb21wdXRlIEVuZ2luZSBidWlsdC1pbiBzZXJ2aWNlIGFjY291bnQuIFRoaXMgbWF5IGJlIGJlY2F1c2UgdGhlIENvbXB1dGUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnRW5naW5lIGluc3RhbmNlIGRvZXMgbm90IGhhdmUgdGhlIGNvcnJlY3QgcGVybWlzc2lvbiBzY29wZXMgc3BlY2lmaWVkOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIGUubWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICdBIE5vdCBGb3VuZCBlcnJvciB3YXMgcmV0dXJuZWQgd2hpbGUgYXR0ZW1wdGluZyB0byByZXRyaWV2ZSBhbiBhY2Nlc3MnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0b2tlbiBmb3IgdGhlIENvbXB1dGUgRW5naW5lIGJ1aWx0LWluIHNlcnZpY2UgYWNjb3VudC4gVGhpcyBtYXkgYmUgYmVjYXVzZSB0aGUgQ29tcHV0ZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdFbmdpbmUgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBhbnkgcGVybWlzc2lvbiBzY29wZXMgc3BlY2lmaWVkOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ29tcHV0ZSA9IENvbXB1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wdXRlY2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JZFRva2VuQ2xpZW50ID0gdm9pZCAwO1xuY29uc3Qgb2F1dGgyY2xpZW50XzEgPSByZXF1aXJlKFwiLi9vYXV0aDJjbGllbnRcIik7XG5jbGFzcyBJZFRva2VuQ2xpZW50IGV4dGVuZHMgb2F1dGgyY2xpZW50XzEuT0F1dGgyQ2xpZW50IHtcbiAgICB0YXJnZXRBdWRpZW5jZTtcbiAgICBpZFRva2VuUHJvdmlkZXI7XG4gICAgLyoqXG4gICAgICogR29vZ2xlIElEIFRva2VuIGNsaWVudFxuICAgICAqXG4gICAgICogUmV0cmlldmUgSUQgdG9rZW4gZnJvbSB0aGUgbWV0YWRhdGEgc2VydmVyLlxuICAgICAqIFNlZTogaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2RvY3MvYXV0aGVudGljYXRpb24vZ2V0LWlkLXRva2VuI21ldGFkYXRhLXNlcnZlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudGFyZ2V0QXVkaWVuY2UgPSBvcHRpb25zLnRhcmdldEF1ZGllbmNlO1xuICAgICAgICB0aGlzLmlkVG9rZW5Qcm92aWRlciA9IG9wdGlvbnMuaWRUb2tlblByb3ZpZGVyO1xuICAgIH1cbiAgICBhc3luYyBnZXRSZXF1ZXN0TWV0YWRhdGFBc3luYygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNyZWRlbnRpYWxzLmlkX3Rva2VuIHx8XG4gICAgICAgICAgICAhdGhpcy5jcmVkZW50aWFscy5leHBpcnlfZGF0ZSB8fFxuICAgICAgICAgICAgdGhpcy5pc1Rva2VuRXhwaXJpbmcoKSkge1xuICAgICAgICAgICAgY29uc3QgaWRUb2tlbiA9IGF3YWl0IHRoaXMuaWRUb2tlblByb3ZpZGVyLmZldGNoSWRUb2tlbih0aGlzLnRhcmdldEF1ZGllbmNlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgaWRfdG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgICAgICAgZXhwaXJ5X2RhdGU6IHRoaXMuZ2V0SWRUb2tlbkV4cGlyeURhdGUoaWRUb2tlbiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0aGlzLmNyZWRlbnRpYWxzLmlkX3Rva2VuLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgaGVhZGVycyB9O1xuICAgIH1cbiAgICBnZXRJZFRva2VuRXhwaXJ5RGF0ZShpZFRva2VuKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWRCNjQgPSBpZFRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICAgIGlmIChwYXlsb2FkQjY0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShCdWZmZXIuZnJvbShwYXlsb2FkQjY0LCAnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJykpO1xuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQuZXhwICogMTAwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuSWRUb2tlbkNsaWVudCA9IElkVG9rZW5DbGllbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZHRva2VuY2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HQ1BFbnYgPSB2b2lkIDA7XG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5leHBvcnRzLmdldEVudiA9IGdldEVudjtcbmNvbnN0IGdjcE1ldGFkYXRhID0gcmVxdWlyZShcImdjcC1tZXRhZGF0YVwiKTtcbnZhciBHQ1BFbnY7XG4oZnVuY3Rpb24gKEdDUEVudikge1xuICAgIEdDUEVudltcIkFQUF9FTkdJTkVcIl0gPSBcIkFQUF9FTkdJTkVcIjtcbiAgICBHQ1BFbnZbXCJLVUJFUk5FVEVTX0VOR0lORVwiXSA9IFwiS1VCRVJORVRFU19FTkdJTkVcIjtcbiAgICBHQ1BFbnZbXCJDTE9VRF9GVU5DVElPTlNcIl0gPSBcIkNMT1VEX0ZVTkNUSU9OU1wiO1xuICAgIEdDUEVudltcIkNPTVBVVEVfRU5HSU5FXCJdID0gXCJDT01QVVRFX0VOR0lORVwiO1xuICAgIEdDUEVudltcIkNMT1VEX1JVTlwiXSA9IFwiQ0xPVURfUlVOXCI7XG4gICAgR0NQRW52W1wiQ0xPVURfUlVOX0pPQlNcIl0gPSBcIkNMT1VEX1JVTl9KT0JTXCI7XG4gICAgR0NQRW52W1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoR0NQRW52IHx8IChleHBvcnRzLkdDUEVudiA9IEdDUEVudiA9IHt9KSk7XG5sZXQgZW52UHJvbWlzZTtcbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGVudlByb21pc2UgPSB1bmRlZmluZWQ7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRFbnYoKSB7XG4gICAgaWYgKGVudlByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGVudlByb21pc2U7XG4gICAgfVxuICAgIGVudlByb21pc2UgPSBnZXRFbnZNZW1vaXplZCgpO1xuICAgIHJldHVybiBlbnZQcm9taXNlO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0RW52TWVtb2l6ZWQoKSB7XG4gICAgbGV0IGVudiA9IEdDUEVudi5OT05FO1xuICAgIGlmIChpc0FwcEVuZ2luZSgpKSB7XG4gICAgICAgIGVudiA9IEdDUEVudi5BUFBfRU5HSU5FO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0Nsb3VkRnVuY3Rpb24oKSkge1xuICAgICAgICBlbnYgPSBHQ1BFbnYuQ0xPVURfRlVOQ1RJT05TO1xuICAgIH1cbiAgICBlbHNlIGlmIChhd2FpdCBpc0NvbXB1dGVFbmdpbmUoKSkge1xuICAgICAgICBpZiAoYXdhaXQgaXNLdWJlcm5ldGVzRW5naW5lKCkpIHtcbiAgICAgICAgICAgIGVudiA9IEdDUEVudi5LVUJFUk5FVEVTX0VOR0lORTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Nsb3VkUnVuKCkpIHtcbiAgICAgICAgICAgIGVudiA9IEdDUEVudi5DTE9VRF9SVU47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDbG91ZFJ1bkpvYigpKSB7XG4gICAgICAgICAgICBlbnYgPSBHQ1BFbnYuQ0xPVURfUlVOX0pPQlM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnYgPSBHQ1BFbnYuQ09NUFVURV9FTkdJTkU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVudiA9IEdDUEVudi5OT05FO1xuICAgIH1cbiAgICByZXR1cm4gZW52O1xufVxuZnVuY3Rpb24gaXNBcHBFbmdpbmUoKSB7XG4gICAgcmV0dXJuICEhKHByb2Nlc3MuZW52LkdBRV9TRVJWSUNFIHx8IHByb2Nlc3MuZW52LkdBRV9NT0RVTEVfTkFNRSk7XG59XG5mdW5jdGlvbiBpc0Nsb3VkRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKHByb2Nlc3MuZW52LkZVTkNUSU9OX05BTUUgfHwgcHJvY2Vzcy5lbnYuRlVOQ1RJT05fVEFSR0VUKTtcbn1cbi8qKlxuICogVGhpcyBjaGVjayBvbmx5IHZlcmlmaWVzIHRoYXQgdGhlIGVudmlyb25tZW50IGlzIHJ1bm5pbmcga25hdGl2ZS5cbiAqIFRoaXMgbXVzdCBiZSBydW4gKmFmdGVyKiBjaGVja2luZyBmb3IgS3ViZXJuZXRlcywgb3RoZXJ3aXNlIGl0IHdpbGxcbiAqIHJldHVybiBhIGZhbHNlIHBvc2l0aXZlLlxuICovXG5mdW5jdGlvbiBpc0Nsb3VkUnVuKCkge1xuICAgIHJldHVybiAhIXByb2Nlc3MuZW52LktfQ09ORklHVVJBVElPTjtcbn1cbmZ1bmN0aW9uIGlzQ2xvdWRSdW5Kb2IoKSB7XG4gICAgcmV0dXJuICEhcHJvY2Vzcy5lbnYuQ0xPVURfUlVOX0pPQjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGlzS3ViZXJuZXRlc0VuZ2luZSgpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBnY3BNZXRhZGF0YS5pbnN0YW5jZSgnYXR0cmlidXRlcy9jbHVzdGVyLW5hbWUnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBpc0NvbXB1dGVFbmdpbmUoKSB7XG4gICAgcmV0dXJuIGdjcE1ldGFkYXRhLmlzQXZhaWxhYmxlKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnZEZXRlY3QuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjUgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJ1aWxkUGF5bG9hZEZvckp3c1NpZ24gPSBidWlsZFBheWxvYWRGb3JKd3NTaWduO1xuZXhwb3J0cy5nZXRKd3NTaWduID0gZ2V0SndzU2lnbjtcbmNvbnN0IGp3c18xID0gcmVxdWlyZShcImp3c1wiKTtcbi8qKiBUaGUgZGVmYXVsdCBhbGdvcml0aG0gZm9yIHNpZ25pbmcgSldUcy4gKi9cbmNvbnN0IEFMR19SUzI1NiA9ICdSUzI1Nic7XG4vKiogVGhlIFVSTCBmb3IgR29vZ2xlJ3MgT0F1dGggMi4wIHRva2VuIGVuZHBvaW50LiAqL1xuY29uc3QgR09PR0xFX1RPS0VOX1VSTCA9ICdodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbic7XG4vKipcbiAqIEJ1aWxkcyB0aGUgSldUIHBheWxvYWQgZm9yIHNpZ25pbmcuXG4gKiBAcGFyYW0gdG9rZW5PcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgdG9rZW4uXG4gKiBAcmV0dXJucyBUaGUgSldUIHBheWxvYWQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUGF5bG9hZEZvckp3c1NpZ24odG9rZW5PcHRpb25zKSB7XG4gICAgY29uc3QgaWF0ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIGlzczogdG9rZW5PcHRpb25zLmlzcyxcbiAgICAgICAgc2NvcGU6IHRva2VuT3B0aW9ucy5zY29wZSxcbiAgICAgICAgYXVkOiBHT09HTEVfVE9LRU5fVVJMLFxuICAgICAgICBleHA6IGlhdCArIDM2MDAsXG4gICAgICAgIGlhdCxcbiAgICAgICAgc3ViOiB0b2tlbk9wdGlvbnMuc3ViLFxuICAgICAgICAuLi50b2tlbk9wdGlvbnMuYWRkaXRpb25hbENsYWltcyxcbiAgICB9O1xuICAgIHJldHVybiBwYXlsb2FkO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgc2lnbmVkIEpXUyAoSlNPTiBXZWIgU2lnbmF0dXJlKS5cbiAqIEBwYXJhbSB0b2tlbk9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSB0b2tlbi5cbiAqIEByZXR1cm5zIFRoZSBzaWduZWQgSldTLlxuICovXG5mdW5jdGlvbiBnZXRKd3NTaWduKHRva2VuT3B0aW9ucykge1xuICAgIGNvbnN0IHBheWxvYWQgPSBidWlsZFBheWxvYWRGb3JKd3NTaWduKHRva2VuT3B0aW9ucyk7XG4gICAgcmV0dXJuICgwLCBqd3NfMS5zaWduKSh7XG4gICAgICAgIGhlYWRlcjogeyBhbGc6IEFMR19SUzI1NiB9LFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBzZWNyZXQ6IHRva2VuT3B0aW9ucy5rZXksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3NTaWduLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDI1IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRUb2tlbiA9IGdldFRva2VuO1xuY29uc3QgandzU2lnbl8xID0gcmVxdWlyZShcIi4vandzU2lnblwiKTtcbi8qKiBUaGUgVVJMIGZvciBHb29nbGUncyBPQXV0aCAyLjAgdG9rZW4gZW5kcG9pbnQuICovXG5jb25zdCBHT09HTEVfVE9LRU5fVVJMID0gJ2h0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuJztcbi8qKiBUaGUgZ3JhbnQgdHlwZSBmb3IgSldULWJhc2VkIGF1dGhvcml6YXRpb24uICovXG5jb25zdCBHT09HTEVfR1JBTlRfVFlQRSA9ICd1cm46aWV0ZjpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTpqd3QtYmVhcmVyJztcbi8qKlxuICogR2VuZXJhdGVzIHRoZSByZXF1ZXN0IG9wdGlvbnMgZm9yIGZldGNoaW5nIGEgdG9rZW4uXG4gKiBAcGFyYW0gdG9rZW5PcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgdG9rZW4uXG4gKiBAcmV0dXJucyBUaGUgR2F4aW9zIG9wdGlvbnMgZm9yIHRoZSByZXF1ZXN0LlxuICovXG5jb25zdCBnZW5lcmF0ZVJlcXVlc3RPcHRpb25zID0gKHRva2VuT3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6IEdPT0dMRV9UT0tFTl9VUkwsXG4gICAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgZ3JhbnRfdHlwZTogR09PR0xFX0dSQU5UX1RZUEUsIC8vIEdyYW50IHR5cGUgZm9yIEpXVFxuICAgICAgICAgICAgYXNzZXJ0aW9uOiAoMCwgandzU2lnbl8xLmdldEp3c1NpZ24pKHRva2VuT3B0aW9ucyksXG4gICAgICAgIH0pLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgcmV0cnlDb25maWc6IHtcbiAgICAgICAgICAgIGh0dHBNZXRob2RzVG9SZXRyeTogWydQT1NUJ10sXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4vKipcbiAqIEZldGNoZXMgYW4gYWNjZXNzIHRva2VuLlxuICogQHBhcmFtIHRva2VuT3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHRva2VuLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdG9rZW4gZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4odG9rZW5PcHRpb25zKSB7XG4gICAgaWYgKCF0b2tlbk9wdGlvbnMudHJhbnNwb3J0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0cmFuc3BvcnRlciBzZXQuJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdheGlvc09wdGlvbnMgPSBnZW5lcmF0ZVJlcXVlc3RPcHRpb25zKHRva2VuT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9rZW5PcHRpb25zLnRyYW5zcG9ydGVyLnJlcXVlc3QoZ2F4aW9zT3B0aW9ucyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBUaGUgZXJyb3IgaXMgcmUtdGhyb3duLCBidXQgd2Ugd2FudCB0byBmb3JtYXQgaXQgdG8gYmUgbW9yZVxuICAgICAgICAvLyBpbmZvcm1hdGl2ZS5cbiAgICAgICAgY29uc3QgZXJyID0gZTtcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gZXJyLnJlc3BvbnNlPy5kYXRhO1xuICAgICAgICBpZiAoZXJyb3JEYXRhPy5lcnJvcikge1xuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBgJHtlcnJvckRhdGEuZXJyb3J9OiAke2Vycm9yRGF0YS5lcnJvcl9kZXNjcmlwdGlvbn1gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRUb2tlbi5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAyNSBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXJyb3JXaXRoQ29kZSA9IHZvaWQgMDtcbmNsYXNzIEVycm9yV2l0aENvZGUgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29kZTtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIH1cbn1cbmV4cG9ydHMuRXJyb3JXaXRoQ29kZSA9IEVycm9yV2l0aENvZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcldpdGhDb2RlLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDI1IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRDcmVkZW50aWFscyA9IGdldENyZWRlbnRpYWxzO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IGVycm9yV2l0aENvZGVfMSA9IHJlcXVpcmUoXCIuL2Vycm9yV2l0aENvZGVcIik7XG5jb25zdCByZWFkRmlsZSA9IGZzLnJlYWRGaWxlXG4gICAgPyAoMCwgdXRpbF8xLnByb21pc2lmeSkoZnMucmVhZEZpbGUpXG4gICAgOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIGlmIHJ1bm5pbmcgaW4gdGhlIHdlYi1icm93c2VyLCBmcy5yZWFkRmlsZSBtYXkgbm90IGhhdmUgYmVlbiBzaGltbWVkLlxuICAgICAgICB0aHJvdyBuZXcgZXJyb3JXaXRoQ29kZV8xLkVycm9yV2l0aENvZGUoJ3VzZSBrZXkgcmF0aGVyIHRoYW4ga2V5RmlsZS4nLCAnTUlTU0lOR19DUkVERU5USUFMUycpO1xuICAgIH07XG52YXIgRXh0ZW5zaW9uRmlsZXM7XG4oZnVuY3Rpb24gKEV4dGVuc2lvbkZpbGVzKSB7XG4gICAgRXh0ZW5zaW9uRmlsZXNbXCJKU09OXCJdID0gXCIuanNvblwiO1xuICAgIEV4dGVuc2lvbkZpbGVzW1wiREVSXCJdID0gXCIuZGVyXCI7XG4gICAgRXh0ZW5zaW9uRmlsZXNbXCJDUlRcIl0gPSBcIi5jcnRcIjtcbiAgICBFeHRlbnNpb25GaWxlc1tcIlBFTVwiXSA9IFwiLnBlbVwiO1xuICAgIEV4dGVuc2lvbkZpbGVzW1wiUDEyXCJdID0gXCIucDEyXCI7XG4gICAgRXh0ZW5zaW9uRmlsZXNbXCJQRlhcIl0gPSBcIi5wZnhcIjtcbn0pKEV4dGVuc2lvbkZpbGVzIHx8IChFeHRlbnNpb25GaWxlcyA9IHt9KSk7XG4vKipcbiAqIFByb3ZpZGVzIGNyZWRlbnRpYWxzIGZyb20gYSBKU09OIGtleSBmaWxlLlxuICovXG5jbGFzcyBKc29uQ3JlZGVudGlhbHNQcm92aWRlciB7XG4gICAga2V5RmlsZVBhdGg7XG4gICAgY29uc3RydWN0b3Ioa2V5RmlsZVBhdGgpIHtcbiAgICAgICAgdGhpcy5rZXlGaWxlUGF0aCA9IGtleUZpbGVQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIEpTT04ga2V5IGZpbGUgYW5kIGV4dHJhY3RzIHRoZSBwcml2YXRlIGtleSBhbmQgY2xpZW50IGVtYWlsLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNyZWRlbnRpYWxzLlxuICAgICAqL1xuICAgIGFzeW5jIGdldENyZWRlbnRpYWxzKCkge1xuICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCByZWFkRmlsZSh0aGlzLmtleUZpbGVQYXRoLCAndXRmOCcpO1xuICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBlcnJvcjtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBKU09OIGtleSBmaWxlOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByaXZhdGVLZXkgPSBib2R5LnByaXZhdGVfa2V5O1xuICAgICAgICBjb25zdCBjbGllbnRFbWFpbCA9IGJvZHkuY2xpZW50X2VtYWlsO1xuICAgICAgICBpZiAoIXByaXZhdGVLZXkgfHwgIWNsaWVudEVtYWlsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JXaXRoQ29kZV8xLkVycm9yV2l0aENvZGUoJ3ByaXZhdGVfa2V5IGFuZCBjbGllbnRfZW1haWwgYXJlIHJlcXVpcmVkLicsICdNSVNTSU5HX0NSRURFTlRJQUxTJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcHJpdmF0ZUtleSwgY2xpZW50RW1haWwgfTtcbiAgICB9XG59XG4vKipcbiAqIFByb3ZpZGVzIGNyZWRlbnRpYWxzIGZyb20gYSBQRU0tbGlrZSBrZXkgZmlsZS5cbiAqL1xuY2xhc3MgUGVtQ3JlZGVudGlhbHNQcm92aWRlciB7XG4gICAga2V5RmlsZVBhdGg7XG4gICAgY29uc3RydWN0b3Ioa2V5RmlsZVBhdGgpIHtcbiAgICAgICAgdGhpcy5rZXlGaWxlUGF0aCA9IGtleUZpbGVQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIFBFTS1saWtlIGtleSBmaWxlLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHByaXZhdGUga2V5LlxuICAgICAqL1xuICAgIGFzeW5jIGdldENyZWRlbnRpYWxzKCkge1xuICAgICAgICBjb25zdCBwcml2YXRlS2V5ID0gYXdhaXQgcmVhZEZpbGUodGhpcy5rZXlGaWxlUGF0aCwgJ3V0ZjgnKTtcbiAgICAgICAgcmV0dXJuIHsgcHJpdmF0ZUtleSB9O1xuICAgIH1cbn1cbi8qKlxuICogSGFuZGxlcyB1bnN1cHBvcnRlZCBQMTIvUEZYIGNlcnRpZmljYXRlIHR5cGVzLlxuICovXG5jbGFzcyBQMTJDcmVkZW50aWFsc1Byb3ZpZGVyIHtcbiAgICAvKipcbiAgICAgKiBUaHJvd3MgYW4gZXJyb3IgYXMgUDEyL1BGWCBjZXJ0aWZpY2F0ZXMgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgICAqL1xuICAgIGFzeW5jIGdldENyZWRlbnRpYWxzKCkge1xuICAgICAgICB0aHJvdyBuZXcgZXJyb3JXaXRoQ29kZV8xLkVycm9yV2l0aENvZGUoJyoucDEyIGNlcnRpZmljYXRlcyBhcmUgbm90IHN1cHBvcnRlZCBhZnRlciB2Ni4xLjIuICcgK1xuICAgICAgICAgICAgJ0NvbnNpZGVyIHV0aWxpemluZyAqLmpzb24gZm9ybWF0IG9yIGNvbnZlcnRpbmcgKi5wMTIgdG8gKi5wZW0gdXNpbmcgdGhlIE9wZW5TU0wgQ0xJLicsICdVTktOT1dOX0NFUlRJRklDQVRFX1RZUEUnKTtcbiAgICB9XG59XG4vKipcbiAqIEZhY3RvcnkgY2xhc3MgdG8gY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSBjcmVkZW50aWFscyBwcm92aWRlci5cbiAqL1xuY2xhc3MgQ3JlZGVudGlhbHNQcm92aWRlckZhY3Rvcnkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIGJhc2VkIG9uIHRoZSBrZXkgZmlsZSBleHRlbnNpb24uXG4gICAgICogQHBhcmFtIGtleUZpbGVQYXRoIFRoZSBwYXRoIHRvIHRoZSBrZXkgZmlsZS5cbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBhIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJQ3JlZGVudGlhbHNQcm92aWRlci5cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGtleUZpbGVQYXRoKSB7XG4gICAgICAgIGNvbnN0IGtleUZpbGVFeHRlbnNpb24gPSBwYXRoLmV4dG5hbWUoa2V5RmlsZVBhdGgpO1xuICAgICAgICBzd2l0Y2ggKGtleUZpbGVFeHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRXh0ZW5zaW9uRmlsZXMuSlNPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25DcmVkZW50aWFsc1Byb3ZpZGVyKGtleUZpbGVQYXRoKTtcbiAgICAgICAgICAgIGNhc2UgRXh0ZW5zaW9uRmlsZXMuREVSOlxuICAgICAgICAgICAgY2FzZSBFeHRlbnNpb25GaWxlcy5DUlQ6XG4gICAgICAgICAgICBjYXNlIEV4dGVuc2lvbkZpbGVzLlBFTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBlbUNyZWRlbnRpYWxzUHJvdmlkZXIoa2V5RmlsZVBhdGgpO1xuICAgICAgICAgICAgY2FzZSBFeHRlbnNpb25GaWxlcy5QMTI6XG4gICAgICAgICAgICBjYXNlIEV4dGVuc2lvbkZpbGVzLlBGWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFAxMkNyZWRlbnRpYWxzUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9yV2l0aENvZGVfMS5FcnJvcldpdGhDb2RlKCdVbmtub3duIGNlcnRpZmljYXRlIHR5cGUuIFR5cGUgaXMgZGV0ZXJtaW5lZCBiYXNlZCBvbiBmaWxlIGV4dGVuc2lvbi4gJyArXG4gICAgICAgICAgICAgICAgICAgICdDdXJyZW50IHN1cHBvcnRlZCBleHRlbnNpb25zIGFyZSAqLmpzb24sIGFuZCAqLnBlbS4nLCAnVU5LTk9XTl9DRVJUSUZJQ0FURV9UWVBFJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEdpdmVuIGEga2V5RmlsZSwgZXh0cmFjdCB0aGUga2V5IGFuZCBjbGllbnQgZW1haWwgaWYgYXZhaWxhYmxlXG4gKiBAcGFyYW0ga2V5RmlsZSBQYXRoIHRvIGEganNvbiwgcGVtLCBvciBwMTIgZmlsZSB0aGF0IGNvbnRhaW5zIHRoZSBrZXkuXG4gKiBAcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBwcml2YXRlS2V5IGFuZCBjbGllbnRFbWFpbCBwcm9wZXJ0aWVzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldENyZWRlbnRpYWxzKGtleUZpbGVQYXRoKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBDcmVkZW50aWFsc1Byb3ZpZGVyRmFjdG9yeS5jcmVhdGUoa2V5RmlsZVBhdGgpO1xuICAgIHJldHVybiBwcm92aWRlci5nZXRDcmVkZW50aWFscygpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0Q3JlZGVudGlhbHMuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ub2tlbkhhbmRsZXIgPSB2b2lkIDA7XG5jb25zdCBnZXRUb2tlbl8xID0gcmVxdWlyZShcIi4vZ2V0VG9rZW5cIik7XG5jb25zdCBnZXRDcmVkZW50aWFsc18xID0gcmVxdWlyZShcIi4vZ2V0Q3JlZGVudGlhbHNcIik7XG4vKipcbiAqIE1hbmFnZXMgdGhlIGZldGNoaW5nIGFuZCBjYWNoaW5nIG9mIGFjY2VzcyB0b2tlbnMuXG4gKi9cbmNsYXNzIFRva2VuSGFuZGxlciB7XG4gICAgLyoqIFRoZSBjYWNoZWQgYWNjZXNzIHRva2VuLiAqL1xuICAgIHRva2VuO1xuICAgIC8qKiBUaGUgZXhwaXJhdGlvbiB0aW1lIG9mIHRoZSBjYWNoZWQgYWNjZXNzIHRva2VuLiAqL1xuICAgIHRva2VuRXhwaXJlc0F0O1xuICAgIC8qKiBBIHByb21pc2UgZm9yIGFuIGluLWZsaWdodCB0b2tlbiByZXF1ZXN0LiAqL1xuICAgIGluRmxpZ2h0UmVxdWVzdDtcbiAgICB0b2tlbk9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBUb2tlbkhhbmRsZXIuXG4gICAgICogQHBhcmFtIHRva2VuT3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgZmV0Y2hpbmcgdG9rZW5zLlxuICAgICAqIEBwYXJhbSB0cmFuc3BvcnRlciBUaGUgdHJhbnNwb3J0ZXIgdG8gdXNlIGZvciBtYWtpbmcgcmVxdWVzdHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodG9rZW5PcHRpb25zKSB7XG4gICAgICAgIHRoaXMudG9rZW5PcHRpb25zID0gdG9rZW5PcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIGNyZWRlbnRpYWxzLCBsb2FkaW5nIHRoZW0gZnJvbSBhIGtleSBmaWxlIGlmIG5lY2Vzc2FyeS5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIGFueSB0b2tlbiByZXF1ZXN0LlxuICAgICAqL1xuICAgIGFzeW5jIHByb2Nlc3NDcmVkZW50aWFscygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuT3B0aW9ucy5rZXkgJiYgIXRoaXMudG9rZW5PcHRpb25zLmtleUZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8ga2V5IG9yIGtleUZpbGUgc2V0LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy50b2tlbk9wdGlvbnMua2V5ICYmIHRoaXMudG9rZW5PcHRpb25zLmtleUZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgKDAsIGdldENyZWRlbnRpYWxzXzEuZ2V0Q3JlZGVudGlhbHMpKHRoaXMudG9rZW5PcHRpb25zLmtleUZpbGUpO1xuICAgICAgICAgICAgdGhpcy50b2tlbk9wdGlvbnMua2V5ID0gY3JlZGVudGlhbHMucHJpdmF0ZUtleTtcbiAgICAgICAgICAgIHRoaXMudG9rZW5PcHRpb25zLmVtYWlsID0gY3JlZGVudGlhbHMuY2xpZW50RW1haWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjYWNoZWQgdG9rZW4gaXMgZXhwaXJlZCBvciBjbG9zZSB0byBleHBpcmluZy5cbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0b2tlbiBpcyBleHBpcmluZywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzVG9rZW5FeHBpcmluZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuIHx8ICF0aGlzLnRva2VuRXhwaXJlc0F0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzID0gdGhpcy50b2tlbk9wdGlvbnMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzID8/IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuRXhwaXJlc0F0IDw9IG5vdyArIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSB0b2tlbiBoYXMgY29tcGxldGVseSBleHBpcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgdG9rZW4gaGFzIGV4cGlyZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBoYXNFeHBpcmVkKCkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMudG9rZW4gJiYgdGhpcy50b2tlbkV4cGlyZXNBdCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICByZXR1cm4gbm93ID49IHRoaXMudG9rZW5FeHBpcmVzQXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYW4gYWNjZXNzIHRva2VuLCB1c2luZyBhIGNhY2hlZCBvbmUgaWYgYXZhaWxhYmxlIGFuZCBub3QgZXhwaXJlZC5cbiAgICAgKiBAcGFyYW0gZm9yY2VSZWZyZXNoIElmIHRydWUsIGZvcmNlcyBhIG5ldyB0b2tlbiB0byBiZSBmZXRjaGVkLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHRva2VuIGRhdGEuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VG9rZW4oZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIC8vIEVuc3VyZSBjcmVkZW50aWFscyBhcmUgcHJvY2Vzc2VkIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NDcmVkZW50aWFscygpO1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGluLWZsaWdodCByZXF1ZXN0LCByZXR1cm4gaXQuXG4gICAgICAgIGlmICh0aGlzLmluRmxpZ2h0UmVxdWVzdCAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbkZsaWdodFJlcXVlc3Q7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkLCBub24tZXhwaXJpbmcgdG9rZW4sIHJldHVybiBpdC5cbiAgICAgICAgaWYgKHRoaXMudG9rZW4gJiYgIXRoaXMuaXNUb2tlbkV4cGlyaW5nKCkgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBmZXRjaCBhIG5ldyB0b2tlbi5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuaW5GbGlnaHRSZXF1ZXN0ID0gKDAsIGdldFRva2VuXzEuZ2V0VG9rZW4pKHRoaXMudG9rZW5PcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5pbkZsaWdodFJlcXVlc3Q7XG4gICAgICAgICAgICAvLyBDYWNoZSB0aGUgbmV3IHRva2VuIGFuZCBpdHMgZXhwaXJhdGlvbiB0aW1lLlxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgdGhpcy50b2tlbkV4cGlyZXNBdCA9XG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodG9rZW4uZXhwaXJlc19pbiA/PyAwKSAqIDEwMDA7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgaW4tZmxpZ2h0IHJlcXVlc3QgcHJvbWlzZSBvbmNlIGl0J3Mgc2V0dGxlZC5cbiAgICAgICAgICAgIHRoaXMuaW5GbGlnaHRSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Ub2tlbkhhbmRsZXIgPSBUb2tlbkhhbmRsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b2tlbkhhbmRsZXIuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjUgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldm9rZVRva2VuID0gcmV2b2tlVG9rZW47XG4vKiogVGhlIFVSTCBmb3IgR29vZ2xlJ3MgT0F1dGggMi4wIHRva2VuIHJldm9jYXRpb24gZW5kcG9pbnQuICovXG5jb25zdCBHT09HTEVfUkVWT0tFX1RPS0VOX1VSTCA9ICdodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS9yZXZva2U/dG9rZW49Jztcbi8qKiBUaGUgZGVmYXVsdCByZXRyeSBiZWhhdmlvciBmb3IgdGhlIHJldm9rZSB0b2tlbiByZXF1ZXN0LiAqL1xuY29uc3QgREVGQVVMVF9SRVRSWV9WQUxVRSA9IHRydWU7XG4vKipcbiAqIFJldm9rZXMgYSBnaXZlbiBhY2Nlc3MgdG9rZW4uXG4gKiBAcGFyYW0gYWNjZXNzVG9rZW4gVGhlIGFjY2VzcyB0b2tlbiB0byByZXZva2UuXG4gKiBAcGFyYW0gdHJhbnNwb3J0ZXIgVGhlIHRyYW5zcG9ydGVyIHRvIG1ha2UgdGhlIHJlcXVlc3Qgd2l0aC5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJldm9jYXRpb24gcmVzcG9uc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJldm9rZVRva2VuKGFjY2Vzc1Rva2VuLCB0cmFuc3BvcnRlcikge1xuICAgIGNvbnN0IHVybCA9IEdPT0dMRV9SRVZPS0VfVE9LRU5fVVJMICsgYWNjZXNzVG9rZW47XG4gICAgcmV0dXJuIGF3YWl0IHRyYW5zcG9ydGVyLnJlcXVlc3Qoe1xuICAgICAgICB1cmwsXG4gICAgICAgIHJldHJ5OiBERUZBVUxUX1JFVFJZX1ZBTFVFLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmV2b2tlVG9rZW4uanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjUgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdvb2dsZVRva2VuID0gdm9pZCAwO1xuY29uc3QgZ2F4aW9zXzEgPSByZXF1aXJlKFwiZ2F4aW9zXCIpO1xuY29uc3QgdG9rZW5IYW5kbGVyXzEgPSByZXF1aXJlKFwiLi90b2tlbkhhbmRsZXJcIik7XG5jb25zdCByZXZva2VUb2tlbl8xID0gcmVxdWlyZShcIi4vcmV2b2tlVG9rZW5cIik7XG4vKipcbiAqIFRoZSBHb29nbGVUb2tlbiBjbGFzcyBpcyB1c2VkIHRvIG1hbmFnZSBhdXRoZW50aWNhdGlvbiB3aXRoIEdvb2dsZSdzIE9BdXRoIDIuMCBhdXRob3JpemF0aW9uIHNlcnZlci5cbiAqIEl0IGhhbmRsZXMgZmV0Y2hpbmcsIGNhY2hpbmcsIGFuZCByZWZyZXNoaW5nIG9mIGFjY2VzcyB0b2tlbnMuXG4gKi9cbmNsYXNzIEdvb2dsZVRva2VuIHtcbiAgICAvKiogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhpcyB0b2tlbiBpbnN0YW5jZS4gKi9cbiAgICB0b2tlbk9wdGlvbnM7XG4gICAgLyoqIFRoZSBoYW5kbGVyIGZvciB0b2tlbiBmZXRjaGluZyBhbmQgY2FjaGluZyBsb2dpYy4gKi9cbiAgICB0b2tlbkhhbmRsZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgR29vZ2xlVG9rZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAgQ29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnRva2VuT3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIC8vIElmIGEgdHJhbnNwb3J0ZXIgaXMgbm90IHNldCwgYnkgZGVmYXVsdCBzZXQgaXQgdG8gdXNlIGdheGlvcy5cbiAgICAgICAgdGhpcy50b2tlbk9wdGlvbnMudHJhbnNwb3J0ZXIgPSB0aGlzLnRva2VuT3B0aW9ucy50cmFuc3BvcnRlciB8fCB7XG4gICAgICAgICAgICByZXF1ZXN0OiBvcHRzID0+ICgwLCBnYXhpb3NfMS5yZXF1ZXN0KShvcHRzKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuT3B0aW9ucy5pc3MpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5PcHRpb25zLmlzcyA9IHRoaXMudG9rZW5PcHRpb25zLmVtYWlsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50b2tlbk9wdGlvbnMuc2NvcGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuT3B0aW9ucy5zY29wZSA9IHRoaXMudG9rZW5PcHRpb25zLnNjb3BlLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2VuSGFuZGxlciA9IG5ldyB0b2tlbkhhbmRsZXJfMS5Ub2tlbkhhbmRsZXIodGhpcy50b2tlbk9wdGlvbnMpO1xuICAgIH1cbiAgICBnZXQgZXhwaXJlc0F0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkhhbmRsZXIudG9rZW5FeHBpcmVzQXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBtb3N0IHJlY2VudCBhY2Nlc3MgdG9rZW4gb2J0YWluZWQgYnkgdGhpcyBjbGllbnQuXG4gICAgICovXG4gICAgZ2V0IGFjY2Vzc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkhhbmRsZXIudG9rZW4/LmFjY2Vzc190b2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG1vc3QgcmVjZW50IElEIHRva2VuIG9idGFpbmVkIGJ5IHRoaXMgY2xpZW50LlxuICAgICAqL1xuICAgIGdldCBpZFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkhhbmRsZXIudG9rZW4/LmlkX3Rva2VuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgdG9rZW4gdHlwZSBvZiB0aGUgbW9zdCByZWNlbnQgYWNjZXNzIHRva2VuLlxuICAgICAqL1xuICAgIGdldCB0b2tlblR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuSGFuZGxlci50b2tlbj8udG9rZW5fdHlwZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHJlZnJlc2ggdG9rZW4gZm9yIHRoZSBjdXJyZW50IGNyZWRlbnRpYWxzLlxuICAgICAqL1xuICAgIGdldCByZWZyZXNoVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuSGFuZGxlci50b2tlbj8ucmVmcmVzaF90b2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGN1cnJlbnQgdG9rZW4gaGFzIGV4cGlyZWQuXG4gICAgICovXG4gICAgaGFzRXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5IYW5kbGVyLmhhc0V4cGlyZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGN1cnJlbnQgdG9rZW4gaXMgZXhwaXJpbmcgc29vbixcbiAgICAgKiBiYXNlZCBvbiB0aGUgYGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpc2Agb3B0aW9uLlxuICAgICAqL1xuICAgIGlzVG9rZW5FeHBpcmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5IYW5kbGVyLmlzVG9rZW5FeHBpcmluZygpO1xuICAgIH1cbiAgICBnZXRUb2tlbihjYWxsYmFja09yT3B0aW9ucywgb3B0cyA9IHsgZm9yY2VSZWZyZXNoOiBmYWxzZSB9KSB7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgdmFyaW91cyBtZXRob2Qgb3ZlcmxvYWRzLlxuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2tPck9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tPck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNhbGxiYWNrT3JPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb3B0cyA9IGNhbGxiYWNrT3JPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlbGVnYXRlIHRoZSB0b2tlbiBmZXRjaGluZyB0byB0aGUgdG9rZW4gaGFuZGxlci5cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMudG9rZW5IYW5kbGVyLmdldFRva2VuKG9wdHMuZm9yY2VSZWZyZXNoID8/IGZhbHNlKTtcbiAgICAgICAgLy8gSWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgdXNlIGl0LCBvdGhlcndpc2UgcmV0dXJuIHRoZSBwcm9taXNlLlxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbih0b2tlbiA9PiBjYWxsYmFjayhudWxsLCB0b2tlbiksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcmV2b2tlVG9rZW4oY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdObyB0b2tlbiB0byByZXZva2UuJykpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoMCwgcmV2b2tlVG9rZW5fMS5yZXZva2VUb2tlbikodGhpcy5hY2Nlc3NUb2tlbiwgdGhpcy50b2tlbk9wdGlvbnMudHJhbnNwb3J0ZXIpO1xuICAgICAgICAvLyBJZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCB1c2UgaXQuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IGNhbGxiYWNrKCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZnRlciByZXZva2luZywgcmVzZXQgdGhlIHRva2VuIGhhbmRsZXIgdG8gY2xlYXIgdGhlIGNhY2hlZCB0b2tlbi5cbiAgICAgICAgdGhpcy50b2tlbkhhbmRsZXIgPSBuZXcgdG9rZW5IYW5kbGVyXzEuVG9rZW5IYW5kbGVyKHRoaXMudG9rZW5PcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGlzIHRva2VuIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGdldCBnb29nbGVUb2tlbk9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuT3B0aW9ucztcbiAgICB9XG59XG5leHBvcnRzLkdvb2dsZVRva2VuID0gR29vZ2xlVG9rZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nb29nbGVUb2tlbi5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAxNSBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSldUQWNjZXNzID0gdm9pZCAwO1xuY29uc3QgandzID0gcmVxdWlyZShcImp3c1wiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3QgREVGQVVMVF9IRUFERVIgPSB7XG4gICAgYWxnOiAnUlMyNTYnLFxuICAgIHR5cDogJ0pXVCcsXG59O1xuY2xhc3MgSldUQWNjZXNzIHtcbiAgICBlbWFpbDtcbiAgICBrZXk7XG4gICAga2V5SWQ7XG4gICAgcHJvamVjdElkO1xuICAgIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcztcbiAgICBjYWNoZSA9IG5ldyB1dGlsXzEuTFJVQ2FjaGUoe1xuICAgICAgICBjYXBhY2l0eTogNTAwLFxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAxMDAwLFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEpXVEFjY2VzcyBzZXJ2aWNlIGFjY291bnQgY3JlZGVudGlhbHMuXG4gICAgICpcbiAgICAgKiBDcmVhdGUgYSBuZXcgYWNjZXNzIHRva2VuIGJ5IHVzaW5nIHRoZSBjcmVkZW50aWFsIHRvIGNyZWF0ZSBhIG5ldyBKV1QgdG9rZW5cbiAgICAgKiB0aGF0J3MgcmVjb2duaXplZCBhcyB0aGUgYWNjZXNzIHRva2VuLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVtYWlsIHRoZSBzZXJ2aWNlIGFjY291bnQgZW1haWwgYWRkcmVzcy5cbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBwcml2YXRlIGtleSB0aGF0IHdpbGwgYmUgdXNlZCB0byBzaWduIHRoZSB0b2tlbi5cbiAgICAgKiBAcGFyYW0ga2V5SWQgdGhlIElEIG9mIHRoZSBwcml2YXRlIGtleSB1c2VkIHRvIHNpZ24gdGhlIHRva2VuLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVtYWlsLCBrZXksIGtleUlkLCBlYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXMpIHtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5rZXlJZCA9IGtleUlkO1xuICAgICAgICB0aGlzLmVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcyA9XG4gICAgICAgICAgICBlYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXMgPz8gNSAqIDYwICogMTAwMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlcyB0aGF0IHdlJ3JlIGNhY2hpbmcgYSBrZXkgYXBwcm9wcmlhdGVseSwgZ2l2aW5nIHByZWNlZGVuY2UgdG8gc2NvcGVzIHZzLiB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSSSBiZWluZyBhdXRob3JpemVkLlxuICAgICAqIEBwYXJhbSBzY29wZXMgVGhlIHNjb3BlIG9yIHNjb3BlcyBiZWluZyBhdXRob3JpemVkXG4gICAgICogQHJldHVybnMgQSBzdHJpbmcgdGhhdCByZXR1cm5zIHRoZSBjYWNoZWQga2V5LlxuICAgICAqL1xuICAgIGdldENhY2hlZEtleSh1cmwsIHNjb3Blcykge1xuICAgICAgICBsZXQgY2FjaGVLZXkgPSB1cmw7XG4gICAgICAgIGlmIChzY29wZXMgJiYgQXJyYXkuaXNBcnJheShzY29wZXMpICYmIHNjb3Blcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhY2hlS2V5ID0gdXJsID8gYCR7dXJsfV8ke3Njb3Blcy5qb2luKCdfJyl9YCA6IGAke3Njb3Blcy5qb2luKCdfJyl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2NvcGVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2FjaGVLZXkgPSB1cmwgPyBgJHt1cmx9XyR7c2NvcGVzfWAgOiBzY29wZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWNoZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Njb3BlcyBvciB1cmwgbXVzdCBiZSBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZUtleTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgbm9uLWV4cGlyZWQgYWNjZXNzIHRva2VuLCBhZnRlciByZWZyZXNoaW5nIGlmIG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSSSBiZWluZyBhdXRob3JpemVkLlxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsQ2xhaW1zIEFuIG9iamVjdCB3aXRoIGEgc2V0IG9mIGFkZGl0aW9uYWwgY2xhaW1zIHRvXG4gICAgICogaW5jbHVkZSBpbiB0aGUgcGF5bG9hZC5cbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3QgdGhhdCBpbmNsdWRlcyB0aGUgYXV0aG9yaXphdGlvbiBoZWFkZXIuXG4gICAgICovXG4gICAgZ2V0UmVxdWVzdEhlYWRlcnModXJsLCBhZGRpdGlvbmFsQ2xhaW1zLCBzY29wZXMpIHtcbiAgICAgICAgLy8gUmV0dXJuIGNhY2hlZCBhdXRob3JpemF0aW9uIGhlYWRlcnMsIHVubGVzcyB3ZSBhcmUgd2l0aGluXG4gICAgICAgIC8vIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcyBtcyBvZiB0aGVtIGV4cGlyaW5nOlxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmdldENhY2hlZEtleSh1cmwsIHNjb3Blcyk7XG4gICAgICAgIGNvbnN0IGNhY2hlZFRva2VuID0gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGNhY2hlZFRva2VuICYmXG4gICAgICAgICAgICBjYWNoZWRUb2tlbi5leHBpcmF0aW9uIC0gbm93ID4gdGhpcy5lYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXMpIHtcbiAgICAgICAgICAgIC8vIENvcHlpbmcgaGVhZGVycyBpbnRvIGEgbmV3IGBIZWFkZXJzYCBvYmplY3QgdG8gYXZvaWQgcG90ZW50aWFsIGxlYWthZ2UgLVxuICAgICAgICAgICAgLy8gYXMgdGhpcyBpcyBhIGNhY2hlIGl0IGlzIHBvc3NpYmxlIGZvciBtdWx0aXBsZSByZXF1ZXN0cyB0byByZWZlcmVuY2UgdGhpc1xuICAgICAgICAgICAgLy8gc2FtZSB2YWx1ZS5cbiAgICAgICAgICAgIHJldHVybiBuZXcgSGVhZGVycyhjYWNoZWRUb2tlbi5oZWFkZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpYXQgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgY29uc3QgZXhwID0gSldUQWNjZXNzLmdldEV4cGlyYXRpb25UaW1lKGlhdCk7XG4gICAgICAgIGxldCBkZWZhdWx0Q2xhaW1zO1xuICAgICAgICAvLyBUdXJuIHNjb3BlcyBpbnRvIHNwYWNlLXNlcGFyYXRlZCBzdHJpbmdcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NvcGVzKSkge1xuICAgICAgICAgICAgc2NvcGVzID0gc2NvcGVzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBzY29wZXMgYXJlIHNwZWNpZmllZCwgc2lnbiB3aXRoIHNjb3Blc1xuICAgICAgICBpZiAoc2NvcGVzKSB7XG4gICAgICAgICAgICBkZWZhdWx0Q2xhaW1zID0ge1xuICAgICAgICAgICAgICAgIGlzczogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBzdWI6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlcyxcbiAgICAgICAgICAgICAgICBleHAsXG4gICAgICAgICAgICAgICAgaWF0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlZmF1bHRDbGFpbXMgPSB7XG4gICAgICAgICAgICAgICAgaXNzOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgIHN1YjogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBhdWQ6IHVybCxcbiAgICAgICAgICAgICAgICBleHAsXG4gICAgICAgICAgICAgICAgaWF0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBhZGRpdGlvbmFsQ2xhaW1zIGFyZSBwcm92aWRlZCwgZW5zdXJlIHRoZXkgZG8gbm90IGNvbGxpZGUgd2l0aFxuICAgICAgICAvLyBvdGhlciByZXF1aXJlZCBjbGFpbXMuXG4gICAgICAgIGlmIChhZGRpdGlvbmFsQ2xhaW1zKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNsYWltIGluIGRlZmF1bHRDbGFpbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkaXRpb25hbENsYWltc1tjbGFpbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7Y2xhaW19JyBwcm9wZXJ0eSBpcyBub3QgYWxsb3dlZCB3aGVuIHBhc3NpbmcgYWRkaXRpb25hbENsYWltcy4gVGhpcyBjbGFpbSBpcyBpbmNsdWRlZCBpbiB0aGUgSldUIGJ5IGRlZmF1bHQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMua2V5SWRcbiAgICAgICAgICAgID8geyAuLi5ERUZBVUxUX0hFQURFUiwga2lkOiB0aGlzLmtleUlkIH1cbiAgICAgICAgICAgIDogREVGQVVMVF9IRUFERVI7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDbGFpbXMsIGFkZGl0aW9uYWxDbGFpbXMpO1xuICAgICAgICAvLyBTaWduIHRoZSBqd3QgYW5kIGFkZCBpdCB0byB0aGUgY2FjaGVcbiAgICAgICAgY29uc3Qgc2lnbmVkSldUID0gandzLnNpZ24oeyBoZWFkZXIsIHBheWxvYWQsIHNlY3JldDogdGhpcy5rZXkgfSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzaWduZWRKV1R9YCB9KTtcbiAgICAgICAgdGhpcy5jYWNoZS5zZXQoa2V5LCB7XG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHAgKiAxMDAwLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGlyYXRpb24gdGltZSBmb3IgdGhlIEpXVCB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpYXQgVGhlIGlzc3VlZCBhdCB0aW1lIGZvciB0aGUgSldULlxuICAgICAqIEByZXR1cm5zIEFuIGV4cGlyYXRpb24gdGltZSBmb3IgdGhlIEpXVC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RXhwaXJhdGlvblRpbWUoaWF0KSB7XG4gICAgICAgIGNvbnN0IGV4cCA9IGlhdCArIDM2MDA7IC8vIDM2MDAgc2Vjb25kcyA9IDEgaG91clxuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBKV1RBY2Nlc3MgY3JlZGVudGlhbHMgaW5zdGFuY2UgdXNpbmcgdGhlIGdpdmVuIGlucHV0IG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGpzb24gVGhlIGlucHV0IG9iamVjdC5cbiAgICAgKi9cbiAgICBmcm9tSlNPTihqc29uKSB7XG4gICAgICAgIGlmICghanNvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHBhc3MgaW4gYSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBzZXJ2aWNlIGFjY291bnQgYXV0aCBzZXR0aW5ncy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWpzb24uY2xpZW50X2VtYWlsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbmNvbWluZyBKU09OIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGEgY2xpZW50X2VtYWlsIGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFqc29uLnByaXZhdGVfa2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbmNvbWluZyBKU09OIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGEgcHJpdmF0ZV9rZXkgZmllbGQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHRyYWN0IHRoZSByZWxldmFudCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBqc29uIGtleSBmaWxlLlxuICAgICAgICB0aGlzLmVtYWlsID0ganNvbi5jbGllbnRfZW1haWw7XG4gICAgICAgIHRoaXMua2V5ID0ganNvbi5wcml2YXRlX2tleTtcbiAgICAgICAgdGhpcy5rZXlJZCA9IGpzb24ucHJpdmF0ZV9rZXlfaWQ7XG4gICAgICAgIHRoaXMucHJvamVjdElkID0ganNvbi5wcm9qZWN0X2lkO1xuICAgIH1cbiAgICBmcm9tU3RyZWFtKGlucHV0U3RyZWFtLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJvbVN0cmVhbUFzeW5jKGlucHV0U3RyZWFtKS50aGVuKCgpID0+IGNhbGxiYWNrKCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21TdHJlYW1Bc3luYyhpbnB1dFN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnJvbVN0cmVhbUFzeW5jKGlucHV0U3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlucHV0U3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignTXVzdCBwYXNzIGluIGEgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIHNlcnZpY2UgYWNjb3VudCBhdXRoIHNldHRpbmdzLicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzID0gJyc7XG4gICAgICAgICAgICBpbnB1dFN0cmVhbVxuICAgICAgICAgICAgICAgIC5zZXRFbmNvZGluZygndXRmOCcpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgY2h1bmsgPT4gKHMgKz0gY2h1bmspKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCByZWplY3QpXG4gICAgICAgICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uocyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbUpTT04oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5KV1RBY2Nlc3MgPSBKV1RBY2Nlc3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3RhY2Nlc3MuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMTMgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkpXVCA9IHZvaWQgMDtcbmNvbnN0IGdvb2dsZVRva2VuXzEgPSByZXF1aXJlKFwiLi4vZ3Rva2VuL2dvb2dsZVRva2VuXCIpO1xuY29uc3QgZ2V0Q3JlZGVudGlhbHNfMSA9IHJlcXVpcmUoXCIuLi9ndG9rZW4vZ2V0Q3JlZGVudGlhbHNcIik7XG5jb25zdCBqd3RhY2Nlc3NfMSA9IHJlcXVpcmUoXCIuL2p3dGFjY2Vzc1wiKTtcbmNvbnN0IG9hdXRoMmNsaWVudF8xID0gcmVxdWlyZShcIi4vb2F1dGgyY2xpZW50XCIpO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbmNsYXNzIEpXVCBleHRlbmRzIG9hdXRoMmNsaWVudF8xLk9BdXRoMkNsaWVudCB7XG4gICAgZW1haWw7XG4gICAga2V5RmlsZTtcbiAgICBrZXk7XG4gICAga2V5SWQ7XG4gICAgZGVmYXVsdFNjb3BlcztcbiAgICBzY29wZXM7XG4gICAgc2NvcGU7XG4gICAgc3ViamVjdDtcbiAgICBndG9rZW47XG4gICAgYWRkaXRpb25hbENsYWltcztcbiAgICB1c2VKV1RBY2Nlc3NXaXRoU2NvcGU7XG4gICAgZGVmYXVsdFNlcnZpY2VQYXRoO1xuICAgIGFjY2VzcztcbiAgICAvKipcbiAgICAgKiBKV1Qgc2VydmljZSBhY2NvdW50IGNyZWRlbnRpYWxzLlxuICAgICAqXG4gICAgICogUmV0cmlldmUgYWNjZXNzIHRva2VuIHVzaW5nIGd0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IG9wdGlvbnMuZW1haWw7XG4gICAgICAgIHRoaXMua2V5RmlsZSA9IG9wdGlvbnMua2V5RmlsZTtcbiAgICAgICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICAgICAgdGhpcy5rZXlJZCA9IG9wdGlvbnMua2V5SWQ7XG4gICAgICAgIHRoaXMuc2NvcGVzID0gb3B0aW9ucy5zY29wZXM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsQ2xhaW1zID0gb3B0aW9ucy5hZGRpdGlvbmFsQ2xhaW1zO1xuICAgICAgICAvLyBTdGFydCB3aXRoIGFuIGV4cGlyZWQgcmVmcmVzaCB0b2tlbiwgd2hpY2ggd2lsbCBhdXRvbWF0aWNhbGx5IGJlXG4gICAgICAgIC8vIHJlZnJlc2hlZCBiZWZvcmUgdGhlIGZpcnN0IEFQSSBjYWxsIGlzIG1hZGUuXG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7IHJlZnJlc2hfdG9rZW46ICdqd3QtcGxhY2Vob2xkZXInLCBleHBpcnlfZGF0ZTogMSB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgY3JlZGVudGlhbCB3aXRoIHRoZSBzcGVjaWZpZWQgc2NvcGVzLlxuICAgICAqIEBwYXJhbSBzY29wZXMgTGlzdCBvZiByZXF1ZXN0ZWQgc2NvcGVzIG9yIGEgc2luZ2xlIHNjb3BlLlxuICAgICAqIEByZXR1cm4gVGhlIGNsb25lZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjcmVhdGVTY29wZWQoc2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGp3dCA9IG5ldyBKV1QodGhpcyk7XG4gICAgICAgIGp3dC5zY29wZXMgPSBzY29wZXM7XG4gICAgICAgIHJldHVybiBqd3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIG1ldGFkYXRhIHRvIGJlIHNlbnQgd2l0aCB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgdGhlIFVSSSBiZWluZyBhdXRob3JpemVkLlxuICAgICAqL1xuICAgIGFzeW5jIGdldFJlcXVlc3RNZXRhZGF0YUFzeW5jKHVybCkge1xuICAgICAgICB1cmwgPSB0aGlzLmRlZmF1bHRTZXJ2aWNlUGF0aCA/IGBodHRwczovLyR7dGhpcy5kZWZhdWx0U2VydmljZVBhdGh9L2AgOiB1cmw7XG4gICAgICAgIGNvbnN0IHVzZVNlbGZTaWduZWRKV1QgPSAoIXRoaXMuaGFzVXNlclNjb3BlcygpICYmIHVybCkgfHxcbiAgICAgICAgICAgICh0aGlzLnVzZUpXVEFjY2Vzc1dpdGhTY29wZSAmJiB0aGlzLmhhc0FueVNjb3BlcygpKSB8fFxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZURvbWFpbiAhPT0gYXV0aGNsaWVudF8xLkRFRkFVTFRfVU5JVkVSU0U7XG4gICAgICAgIGlmICh0aGlzLnN1YmplY3QgJiYgdGhpcy51bml2ZXJzZURvbWFpbiAhPT0gYXV0aGNsaWVudF8xLkRFRkFVTFRfVU5JVkVSU0UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBTZXJ2aWNlIEFjY291bnQgdXNlciBpcyBjb25maWd1cmVkIGZvciB0aGUgY3JlZGVudGlhbC4gRG9tYWluLXdpZGUgZGVsZWdhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGluIHVuaXZlcnNlcyBvdGhlciB0aGFuICR7YXV0aGNsaWVudF8xLkRFRkFVTFRfVU5JVkVSU0V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFwaUtleSAmJiB1c2VTZWxmU2lnbmVkSldUKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsQ2xhaW1zICYmXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsQ2xhaW1zLnRhcmdldF9hdWRpZW5jZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBhd2FpdCB0aGlzLnJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuYWRkU2hhcmVkTWV0YWRhdGFIZWFkZXJzKG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbnMuaWRfdG9rZW59YCxcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBubyBzY29wZXMgaGF2ZSBiZWVuIHNldCwgYnV0IGEgdXJpIGhhcyBiZWVuIHByb3ZpZGVkLiBVc2UgSldUQWNjZXNzXG4gICAgICAgICAgICAgICAgLy8gY3JlZGVudGlhbHMuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VzcyA9IG5ldyBqd3RhY2Nlc3NfMS5KV1RBY2Nlc3ModGhpcy5lbWFpbCwgdGhpcy5rZXksIHRoaXMua2V5SWQsIHRoaXMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNjb3BlcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNVc2VyU2NvcGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVzID0gdGhpcy5zY29wZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVzID0gdGhpcy5kZWZhdWx0U2NvcGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VTY29wZXMgPSB0aGlzLnVzZUpXVEFjY2Vzc1dpdGhTY29wZSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlRG9tYWluICE9PSBhdXRoY2xpZW50XzEuREVGQVVMVF9VTklWRVJTRTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgdGhpcy5hY2Nlc3MuZ2V0UmVxdWVzdEhlYWRlcnModXJsID8/IHVuZGVmaW5lZCwgdGhpcy5hZGRpdGlvbmFsQ2xhaW1zLCBcbiAgICAgICAgICAgICAgICAvLyBTY29wZXMgdGFrZSBwcmVjZWRlbnQgb3ZlciBhdWRpZW5jZSBmb3Igc2lnbmluZyxcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBvbmx5IHByb3ZpZGUgdGhlbSBpZiBgdXNlSldUQWNjZXNzV2l0aFNjb3BlYCBpcyBvbiBvclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBpbiBhIG5vbi1kZWZhdWx0IHVuaXZlcnNlXG4gICAgICAgICAgICAgICAgdXNlU2NvcGVzID8gc2NvcGVzIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoZWFkZXJzOiB0aGlzLmFkZFNoYXJlZE1ldGFkYXRhSGVhZGVycyhoZWFkZXJzKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzQW55U2NvcGVzKCkgfHwgdGhpcy5hcGlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRSZXF1ZXN0TWV0YWRhdGFBc3luYyh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgbm8gYXVkaWVuY2UsIGFwaUtleSwgb3Igc2NvcGVzIGFyZSBwcm92aWRlZCwgd2Ugc2hvdWxkIG5vdCBhdHRlbXB0XG4gICAgICAgICAgICAvLyB0byBwb3B1bGF0ZSBhbnkgaGVhZGVyczpcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGFuIElEIHRva2VuLlxuICAgICAqIEBwYXJhbSB0YXJnZXRBdWRpZW5jZSB0aGUgYXVkaWVuY2UgZm9yIHRoZSBmZXRjaGVkIElEIHRva2VuLlxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoSWRUb2tlbih0YXJnZXRBdWRpZW5jZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZ1Rva2VuIGZvciBmZXRjaGluZyBhbiBJRCB0b2tlblxuICAgICAgICBjb25zdCBndG9rZW4gPSBuZXcgZ29vZ2xlVG9rZW5fMS5Hb29nbGVUb2tlbih7XG4gICAgICAgICAgICBpc3M6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBzdWI6IHRoaXMuc3ViamVjdCxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnNjb3BlcyB8fCB0aGlzLmRlZmF1bHRTY29wZXMsXG4gICAgICAgICAgICBrZXlGaWxlOiB0aGlzLmtleUZpbGUsXG4gICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgYWRkaXRpb25hbENsYWltczogeyB0YXJnZXRfYXVkaWVuY2U6IHRhcmdldEF1ZGllbmNlIH0sXG4gICAgICAgICAgICB0cmFuc3BvcnRlcjogdGhpcy50cmFuc3BvcnRlcixcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGd0b2tlbi5nZXRUb2tlbih7XG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWd0b2tlbi5pZFRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZXJyb3I6IEZhaWxlZCB0byBmZXRjaCBJRCB0b2tlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBndG9rZW4uaWRUb2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBjdXJyZW50bHkgc2NvcGVzIGF2YWlsYWJsZS5cbiAgICAgKi9cbiAgICBoYXNVc2VyU2NvcGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2NvcGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFyZSB0aGVyZSBhbnkgZGVmYXVsdCBvciB1c2VyIHNjb3BlcyBkZWZpbmVkLlxuICAgICAqL1xuICAgIGhhc0FueVNjb3BlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NvcGVzICYmIHRoaXMuc2NvcGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFNjb3BlcyAmJiB0aGlzLmRlZmF1bHRTY29wZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGF1dGhvcml6ZShjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXplQXN5bmMoKS50aGVuKHIgPT4gY2FsbGJhY2sobnVsbCwgciksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhvcml6ZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgYXV0aG9yaXplQXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlc3VsdCByZXR1cm5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSByZXN1bHQudG9rZW5zO1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzLnJlZnJlc2hfdG9rZW4gPSAnand0LXBsYWNlaG9sZGVyJztcbiAgICAgICAgdGhpcy5rZXkgPSB0aGlzLmd0b2tlbi5nb29nbGVUb2tlbk9wdGlvbnM/LmtleTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IHRoaXMuZ3Rva2VuLmdvb2dsZVRva2VuT3B0aW9ucz8uaXNzO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRva2VucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBhY2Nlc3MgdG9rZW4uXG4gICAgICogQHBhcmFtIHJlZnJlc2hUb2tlbiBpZ25vcmVkXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyByZWZyZXNoVG9rZW5Ob0NhY2hlKCkge1xuICAgICAgICBjb25zdCBndG9rZW4gPSB0aGlzLmNyZWF0ZUdUb2tlbigpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGd0b2tlbi5nZXRUb2tlbih7XG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IHRoaXMuaXNUb2tlbkV4cGlyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRva2VuLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHRva2VuX3R5cGU6ICdCZWFyZXInLFxuICAgICAgICAgICAgZXhwaXJ5X2RhdGU6IGd0b2tlbi5leHBpcmVzQXQsXG4gICAgICAgICAgICBpZF90b2tlbjogZ3Rva2VuLmlkVG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW1pdCgndG9rZW5zJywgdG9rZW5zKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzOiBudWxsLCB0b2tlbnMgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZ1Rva2VuIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKi9cbiAgICBjcmVhdGVHVG9rZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5ndG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZ3Rva2VuID0gbmV3IGdvb2dsZVRva2VuXzEuR29vZ2xlVG9rZW4oe1xuICAgICAgICAgICAgICAgIGlzczogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBzdWI6IHRoaXMuc3ViamVjdCxcbiAgICAgICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZXMgfHwgdGhpcy5kZWZhdWx0U2NvcGVzLFxuICAgICAgICAgICAgICAgIGtleUZpbGU6IHRoaXMua2V5RmlsZSxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxDbGFpbXM6IHRoaXMuYWRkaXRpb25hbENsYWltcyxcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRlcjogdGhpcy50cmFuc3BvcnRlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmd0b2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgSldUIGNyZWRlbnRpYWxzIGluc3RhbmNlIHVzaW5nIHRoZSBnaXZlbiBpbnB1dCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBqc29uIFRoZSBpbnB1dCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqXG4gICAgICogKipJbXBvcnRhbnQqKjogSWYgeW91IGFjY2VwdCBhIGNyZWRlbnRpYWwgY29uZmlndXJhdGlvbiAoY3JlZGVudGlhbCBKU09OL0ZpbGUvU3RyZWFtKSBmcm9tIGFuIGV4dGVybmFsIHNvdXJjZSBmb3IgYXV0aGVudGljYXRpb24gdG8gR29vZ2xlIENsb3VkLCB5b3UgbXVzdCB2YWxpZGF0ZSBpdCBiZWZvcmUgcHJvdmlkaW5nIGl0IHRvIGFueSBHb29nbGUgQVBJIG9yIGxpYnJhcnkuIFByb3ZpZGluZyBhbiB1bnZhbGlkYXRlZCBjcmVkZW50aWFsIGNvbmZpZ3VyYXRpb24gdG8gR29vZ2xlIEFQSXMgY2FuIGNvbXByb21pc2UgdGhlIHNlY3VyaXR5IG9mIHlvdXIgc3lzdGVtcyBhbmQgZGF0YS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHJlZmVyIHRvIHtAbGluayBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vZG9jcy9hdXRoZW50aWNhdGlvbi9leHRlcm5hbC9leHRlcm5hbGx5LXNvdXJjZWQtY3JlZGVudGlhbHMgVmFsaWRhdGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9ucyBmcm9tIGV4dGVybmFsIHNvdXJjZXN9LlxuICAgICAqL1xuICAgIGZyb21KU09OKGpzb24pIHtcbiAgICAgICAgaWYgKCFqc29uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcGFzcyBpbiBhIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNlcnZpY2UgYWNjb3VudCBhdXRoIHNldHRpbmdzLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghanNvbi5jbGllbnRfZW1haWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSBjbGllbnRfZW1haWwgZmllbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWpzb24ucHJpdmF0ZV9rZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSBwcml2YXRlX2tleSBmaWVsZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uIGZyb20gdGhlIGpzb24ga2V5IGZpbGUuXG4gICAgICAgIHRoaXMuZW1haWwgPSBqc29uLmNsaWVudF9lbWFpbDtcbiAgICAgICAgdGhpcy5rZXkgPSBqc29uLnByaXZhdGVfa2V5O1xuICAgICAgICB0aGlzLmtleUlkID0ganNvbi5wcml2YXRlX2tleV9pZDtcbiAgICAgICAgdGhpcy5wcm9qZWN0SWQgPSBqc29uLnByb2plY3RfaWQ7XG4gICAgICAgIHRoaXMucXVvdGFQcm9qZWN0SWQgPSBqc29uLnF1b3RhX3Byb2plY3RfaWQ7XG4gICAgICAgIHRoaXMudW5pdmVyc2VEb21haW4gPSBqc29uLnVuaXZlcnNlX2RvbWFpbiB8fCB0aGlzLnVuaXZlcnNlRG9tYWluO1xuICAgIH1cbiAgICBmcm9tU3RyZWFtKGlucHV0U3RyZWFtLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJvbVN0cmVhbUFzeW5jKGlucHV0U3RyZWFtKS50aGVuKCgpID0+IGNhbGxiYWNrKCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21TdHJlYW1Bc3luYyhpbnB1dFN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnJvbVN0cmVhbUFzeW5jKGlucHV0U3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlucHV0U3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHBhc3MgaW4gYSBzdHJlYW0gY29udGFpbmluZyB0aGUgc2VydmljZSBhY2NvdW50IGF1dGggc2V0dGluZ3MuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcyA9ICcnO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW1cbiAgICAgICAgICAgICAgICAuc2V0RW5jb2RpbmcoJ3V0ZjgnKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCByZWplY3QpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgY2h1bmsgPT4gKHMgKz0gY2h1bmspKVxuICAgICAgICAgICAgICAgIC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb21KU09OKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBKV1QgY3JlZGVudGlhbHMgaW5zdGFuY2UgdXNpbmcgYW4gQVBJIEtleSBmb3IgYXV0aGVudGljYXRpb24uXG4gICAgICogQHBhcmFtIGFwaUtleSBUaGUgQVBJIEtleSBpbiBzdHJpbmcgZm9ybS5cbiAgICAgKi9cbiAgICBmcm9tQVBJS2V5KGFwaUtleSkge1xuICAgICAgICBpZiAodHlwZW9mIGFwaUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGFuIEFQSSBLZXkgc3RyaW5nLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVc2luZyB0aGUga2V5IG9yIGtleUZpbGUgb24gdGhlIEpXVCBjbGllbnQsIG9idGFpbiBhbiBvYmplY3QgdGhhdCBjb250YWluc1xuICAgICAqIHRoZSBrZXkgYW5kIHRoZSBjbGllbnQgZW1haWwuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q3JlZGVudGlhbHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcHJpdmF0ZV9rZXk6IHRoaXMua2V5LCBjbGllbnRfZW1haWw6IHRoaXMuZW1haWwgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleUZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGd0b2tlbiA9IHRoaXMuY3JlYXRlR1Rva2VuKCk7XG4gICAgICAgICAgICBjb25zdCBjcmVkcyA9IGF3YWl0ICgwLCBnZXRDcmVkZW50aWFsc18xLmdldENyZWRlbnRpYWxzKSh0aGlzLmtleUZpbGUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgcHJpdmF0ZV9rZXk6IGNyZWRzLnByaXZhdGVLZXksIGNsaWVudF9lbWFpbDogY3JlZHMuY2xpZW50RW1haWwgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Ega2V5IG9yIGEga2V5RmlsZSBtdXN0IGJlIHByb3ZpZGVkIHRvIGdldENyZWRlbnRpYWxzLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuSldUID0gSldUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9and0Y2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDE1IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyUmVmcmVzaENsaWVudCA9IGV4cG9ydHMuVVNFUl9SRUZSRVNIX0FDQ09VTlRfVFlQRSA9IHZvaWQgMDtcbmNvbnN0IG9hdXRoMmNsaWVudF8xID0gcmVxdWlyZShcIi4vb2F1dGgyY2xpZW50XCIpO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbmV4cG9ydHMuVVNFUl9SRUZSRVNIX0FDQ09VTlRfVFlQRSA9ICdhdXRob3JpemVkX3VzZXInO1xuY2xhc3MgVXNlclJlZnJlc2hDbGllbnQgZXh0ZW5kcyBvYXV0aDJjbGllbnRfMS5PQXV0aDJDbGllbnQge1xuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRlc3RzIHRvIG1ha2UgdGhpcyBwcml2YXRlXG4gICAgLy8gSW4gYSBmdXR1cmUgZ3RzIHJlbGVhc2UsIHRoZSBfcHJvcGVydHlOYW1lIHJ1bGUgd2lsbCBiZSBsaWZ0ZWQuXG4gICAgLy8gVGhpcyBpcyBhbHNvIGEgaGFyZCBvbmUgYmVjYXVzZSBgdGhpcy5yZWZyZXNoVG9rZW5gIGlzIGEgZnVuY3Rpb24uXG4gICAgX3JlZnJlc2hUb2tlbjtcbiAgICAvKipcbiAgICAgKiBUaGUgVXNlciBSZWZyZXNoIFRva2VuIGNsaWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zT3JDbGllbnRJZCBUaGUgVXNlciBSZWZyZXNoIFRva2VuIGNsaWVudCBvcHRpb25zLiBQYXNzaW5nIGFuIGBjbGllbnRJZGAgZGlyZWN0bHkgaXMgKipAREVQUkVDQVRFRCoqLlxuICAgICAqIEBwYXJhbSBjbGllbnRTZWNyZXQgKipAREVQUkVDQVRFRCoqLiBQcm92aWRlIGEge0BsaW5rIFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9ucyBgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2VuICoqQERFUFJFQ0FURUQqKi4gUHJvdmlkZSBhIHtAbGluayBVc2VyUmVmcmVzaENsaWVudE9wdGlvbnMgYFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9uc2B9IG9iamVjdCBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyIGluc3RlYWQuXG4gICAgICogQHBhcmFtIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcyAqKkBERVBSRUNBVEVEKiouIFByb3ZpZGUgYSB7QGxpbmsgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zIGBVc2VyUmVmcmVzaENsaWVudE9wdGlvbnNgfSBvYmplY3QgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBmb3JjZVJlZnJlc2hPbkZhaWx1cmUgKipAREVQUkVDQVRFRCoqLiBQcm92aWRlIGEge0BsaW5rIFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9ucyBgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zT3JDbGllbnRJZCwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgLSBwcm92aWRlIGEge0BsaW5rIFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9ucyBgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIGNsaWVudFNlY3JldCwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgLSBwcm92aWRlIGEge0BsaW5rIFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9ucyBgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlZnJlc2hUb2tlbiwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgLSBwcm92aWRlIGEge0BsaW5rIFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9ucyBgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcywgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgLSBwcm92aWRlIGEge0BsaW5rIFVzZXJSZWZyZXNoQ2xpZW50T3B0aW9ucyBgVXNlclJlZnJlc2hDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIGZvcmNlUmVmcmVzaE9uRmFpbHVyZSkge1xuICAgICAgICBjb25zdCBvcHRzID0gb3B0aW9uc09yQ2xpZW50SWQgJiYgdHlwZW9mIG9wdGlvbnNPckNsaWVudElkID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgPyBvcHRpb25zT3JDbGllbnRJZFxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6IG9wdGlvbnNPckNsaWVudElkLFxuICAgICAgICAgICAgICAgIGNsaWVudFNlY3JldCxcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICAgICAgZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzLFxuICAgICAgICAgICAgICAgIGZvcmNlUmVmcmVzaE9uRmFpbHVyZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB0aGlzLl9yZWZyZXNoVG9rZW4gPSBvcHRzLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscy5yZWZyZXNoX3Rva2VuID0gb3B0cy5yZWZyZXNoVG9rZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLlxuICAgICAqIEBwYXJhbSByZWZyZXNoVG9rZW4gQW4gaWdub3JlZCByZWZyZXNoVG9rZW4uLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBPcHRpb25hbCBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBhc3luYyByZWZyZXNoVG9rZW5Ob0NhY2hlKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVmcmVzaFRva2VuTm9DYWNoZSh0aGlzLl9yZWZyZXNoVG9rZW4pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaElkVG9rZW4odGFyZ2V0QXVkaWVuY2UpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIC4uLlVzZXJSZWZyZXNoQ2xpZW50LlJFVFJZX0NPTkZJRyxcbiAgICAgICAgICAgIHVybDogdGhpcy5lbmRwb2ludHMub2F1dGgyVG9rZW5VcmwsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5fY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5fY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLl9yZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2F1ZGllbmNlOiB0YXJnZXRBdWRpZW5jZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJ2ZldGNoSWRUb2tlbicpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnRyYW5zcG9ydGVyLnJlcXVlc3Qob3B0cyk7XG4gICAgICAgIHJldHVybiByZXMuZGF0YS5pZF90b2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgVXNlclJlZnJlc2hDbGllbnQgY3JlZGVudGlhbHMgaW5zdGFuY2UgdXNpbmcgdGhlIGdpdmVuIGlucHV0XG4gICAgICogb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0ganNvbiBUaGUgaW5wdXQgb2JqZWN0LlxuICAgICAqL1xuICAgIGZyb21KU09OKGpzb24pIHtcbiAgICAgICAgaWYgKCFqc29uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcGFzcyBpbiBhIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHVzZXIgcmVmcmVzaCB0b2tlbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqc29uLnR5cGUgIT09ICdhdXRob3JpemVkX3VzZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbmNvbWluZyBKU09OIG9iamVjdCBkb2VzIG5vdCBoYXZlIHRoZSBcImF1dGhvcml6ZWRfdXNlclwiIHR5cGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWpzb24uY2xpZW50X2lkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbmNvbWluZyBKU09OIG9iamVjdCBkb2VzIG5vdCBjb250YWluIGEgY2xpZW50X2lkIGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFqc29uLmNsaWVudF9zZWNyZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSBjbGllbnRfc2VjcmV0IGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFqc29uLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSByZWZyZXNoX3Rva2VuIGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xpZW50SWQgPSBqc29uLmNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fY2xpZW50U2VjcmV0ID0ganNvbi5jbGllbnRfc2VjcmV0O1xuICAgICAgICB0aGlzLl9yZWZyZXNoVG9rZW4gPSBqc29uLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMucmVmcmVzaF90b2tlbiA9IGpzb24ucmVmcmVzaF90b2tlbjtcbiAgICAgICAgdGhpcy5xdW90YVByb2plY3RJZCA9IGpzb24ucXVvdGFfcHJvamVjdF9pZDtcbiAgICAgICAgdGhpcy51bml2ZXJzZURvbWFpbiA9IGpzb24udW5pdmVyc2VfZG9tYWluIHx8IHRoaXMudW5pdmVyc2VEb21haW47XG4gICAgfVxuICAgIGZyb21TdHJlYW0oaW5wdXRTdHJlYW0sIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5mcm9tU3RyZWFtQXN5bmMoaW5wdXRTdHJlYW0pLnRoZW4oKCkgPT4gY2FsbGJhY2soKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVN0cmVhbUFzeW5jKGlucHV0U3RyZWFtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmcm9tU3RyZWFtQXN5bmMoaW5wdXRTdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5wdXRTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcignTXVzdCBwYXNzIGluIGEgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIHVzZXIgcmVmcmVzaCB0b2tlbi4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcyA9ICcnO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW1cbiAgICAgICAgICAgICAgICAuc2V0RW5jb2RpbmcoJ3V0ZjgnKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCByZWplY3QpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgY2h1bmsgPT4gKHMgKz0gY2h1bmspKVxuICAgICAgICAgICAgICAgIC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb21KU09OKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIFVzZXJSZWZyZXNoQ2xpZW50IGNyZWRlbnRpYWxzIGluc3RhbmNlIHVzaW5nIHRoZSBnaXZlbiBpbnB1dFxuICAgICAqIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGpzb24gVGhlIGlucHV0IG9iamVjdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVXNlclJlZnJlc2hDbGllbnQoKTtcbiAgICAgICAgY2xpZW50LmZyb21KU09OKGpzb24pO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlclJlZnJlc2hDbGllbnQgPSBVc2VyUmVmcmVzaENsaWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZnJlc2hjbGllbnQuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbXBlcnNvbmF0ZWQgPSBleHBvcnRzLklNUEVSU09OQVRFRF9BQ0NPVU5UX1RZUEUgPSB2b2lkIDA7XG5jb25zdCBvYXV0aDJjbGllbnRfMSA9IHJlcXVpcmUoXCIuL29hdXRoMmNsaWVudFwiKTtcbmNvbnN0IGdheGlvc18xID0gcmVxdWlyZShcImdheGlvc1wiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuZXhwb3J0cy5JTVBFUlNPTkFURURfQUNDT1VOVF9UWVBFID0gJ2ltcGVyc29uYXRlZF9zZXJ2aWNlX2FjY291bnQnO1xuY2xhc3MgSW1wZXJzb25hdGVkIGV4dGVuZHMgb2F1dGgyY2xpZW50XzEuT0F1dGgyQ2xpZW50IHtcbiAgICBzb3VyY2VDbGllbnQ7XG4gICAgdGFyZ2V0UHJpbmNpcGFsO1xuICAgIHRhcmdldFNjb3BlcztcbiAgICBkZWxlZ2F0ZXM7XG4gICAgbGlmZXRpbWU7XG4gICAgZW5kcG9pbnQ7XG4gICAgLyoqXG4gICAgICogSW1wZXJzb25hdGVkIHNlcnZpY2UgYWNjb3VudCBjcmVkZW50aWFscy5cbiAgICAgKlxuICAgICAqIENyZWF0ZSBhIG5ldyBhY2Nlc3MgdG9rZW4gYnkgaW1wZXJzb25hdGluZyBhbm90aGVyIHNlcnZpY2UgYWNjb3VudC5cbiAgICAgKlxuICAgICAqIEltcGVyc29uYXRlZCBDcmVkZW50aWFscyBhbGxvd2luZyBjcmVkZW50aWFscyBpc3N1ZWQgdG8gYSB1c2VyIG9yXG4gICAgICogc2VydmljZSBhY2NvdW50IHRvIGltcGVyc29uYXRlIGFub3RoZXIuIFRoZSBzb3VyY2UgcHJvamVjdCB1c2luZ1xuICAgICAqIEltcGVyc29uYXRlZCBDcmVkZW50aWFscyBtdXN0IGVuYWJsZSB0aGUgXCJJQU1DcmVkZW50aWFsc1wiIEFQSS5cbiAgICAgKiBBbHNvLCB0aGUgdGFyZ2V0IHNlcnZpY2UgYWNjb3VudCBtdXN0IGdyYW50IHRoZSBvcmdpbmF0aW5nIHByaW5jaXBhbFxuICAgICAqIHRoZSBcIlNlcnZpY2UgQWNjb3VudCBUb2tlbiBDcmVhdG9yXCIgSUFNIHJvbGUuXG4gICAgICpcbiAgICAgKiAqKklNUE9SVEFOVCoqOiBUaGlzIG1ldGhvZCBkb2VzIG5vdCB2YWxpZGF0ZSB0aGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uLlxuICAgICAqIEEgc2VjdXJpdHkgcmlzayBvY2N1cnMgd2hlbiBhIGNyZWRlbnRpYWwgY29uZmlndXJhdGlvbiBjb25maWd1cmVkIHdpdGhcbiAgICAgKiBtYWxpY2lvdXMgVVJMcyBpcyB1c2VkLiBXaGVuIHRoZSBjcmVkZW50aWFsIGNvbmZpZ3VyYXRpb24gaXMgYWNjZXB0ZWQgZnJvbVxuICAgICAqIGFuIHVudHJ1c3RlZCBzb3VyY2UsIHlvdSBzaG91bGQgdmFsaWRhdGUgaXQgYmVmb3JlIHVzaW5nIGl0IHdpdGggdGhpc1xuICAgICAqIG1ldGhvZC4gRm9yIG1vcmUgZGV0YWlscywgc2VlXG4gICAgICogaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2RvY3MvYXV0aGVudGljYXRpb24vZXh0ZXJuYWwvZXh0ZXJuYWxseS1zb3VyY2VkLWNyZWRlbnRpYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLnNvdXJjZUNsaWVudF0gdGhlIHNvdXJjZSBjcmVkZW50aWFsIHVzZWQgYXMgdG9cbiAgICAgKiBhY3F1aXJlIHRoZSBpbXBlcnNvbmF0ZWQgY3JlZGVudGlhbHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnRhcmdldFByaW5jaXBhbF0gdGhlIHNlcnZpY2UgYWNjb3VudCB0b1xuICAgICAqIGltcGVyc29uYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLmRlbGVnYXRlc10gdGhlIGNoYWluZWQgbGlzdCBvZiBkZWxlZ2F0ZXNcbiAgICAgKiByZXF1aXJlZCB0byBncmFudCB0aGUgZmluYWwgYWNjZXNzX3Rva2VuLiBJZiBzZXQsIHRoZSBzZXF1ZW5jZSBvZlxuICAgICAqIGlkZW50aXRpZXMgbXVzdCBoYXZlIFwiU2VydmljZSBBY2NvdW50IFRva2VuIENyZWF0b3JcIiBjYXBhYmlsaXR5IGdyYW50ZWQgdG9cbiAgICAgKiB0aGUgcHJlY2VkaW5nIGlkZW50aXR5LiBGb3IgZXhhbXBsZSwgaWYgc2V0IHRvIFtzZXJ2aWNlQWNjb3VudEIsXG4gICAgICogc2VydmljZUFjY291bnRDXSwgdGhlIHNvdXJjZUNyZWRlbnRpYWwgbXVzdCBoYXZlIHRoZSBUb2tlbiBDcmVhdG9yIHJvbGUgb25cbiAgICAgKiBzZXJ2aWNlQWNjb3VudEIuIHNlcnZpY2VBY2NvdW50QiBtdXN0IGhhdmUgdGhlIFRva2VuIENyZWF0b3Igb25cbiAgICAgKiBzZXJ2aWNlQWNjb3VudEMuIEZpbmFsbHksIEMgbXVzdCBoYXZlIFRva2VuIENyZWF0b3Igb24gdGFyZ2V0X3ByaW5jaXBhbC5cbiAgICAgKiBJZiBsZWZ0IHVuc2V0LCBzb3VyY2VDcmVkZW50aWFsIG11c3QgaGF2ZSB0aGF0IHJvbGUgb24gdGFyZ2V0UHJpbmNpcGFsLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLnRhcmdldFNjb3Blc10gc2NvcGVzIHRvIHJlcXVlc3QgZHVyaW5nIHRoZVxuICAgICAqIGF1dGhvcml6YXRpb24gZ3JhbnQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxpZmV0aW1lXSBudW1iZXIgb2Ygc2Vjb25kcyB0aGUgZGVsZWdhdGVkXG4gICAgICogY3JlZGVudGlhbCBzaG91bGQgYmUgdmFsaWQgZm9yIHVwIHRvIDM2MDAgc2Vjb25kcyBieSBkZWZhdWx0LCBvciA0MywyMDBcbiAgICAgKiBzZWNvbmRzIGJ5IGV4dGVuZGluZyB0aGUgdG9rZW4ncyBsaWZldGltZSwgc2VlOlxuICAgICAqIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9pYW0vZG9jcy9jcmVhdGluZy1zaG9ydC1saXZlZC1zZXJ2aWNlLWFjY291bnQtY3JlZGVudGlhbHMjc2EtY3JlZGVudGlhbHMtb2F1dGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZW5kcG9pbnRdIGFwaSBlbmRwb2ludCBvdmVycmlkZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIC8vIFN0YXJ0IHdpdGggYW4gZXhwaXJlZCByZWZyZXNoIHRva2VuLCB3aGljaCB3aWxsIGF1dG9tYXRpY2FsbHkgYmVcbiAgICAgICAgLy8gcmVmcmVzaGVkIGJlZm9yZSB0aGUgZmlyc3QgQVBJIGNhbGwgaXMgbWFkZS5cbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIGV4cGlyeV9kYXRlOiAxLFxuICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogJ2ltcGVyc29uYXRlZC1wbGFjZWhvbGRlcicsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc291cmNlQ2xpZW50ID0gb3B0aW9ucy5zb3VyY2VDbGllbnQgPz8gbmV3IG9hdXRoMmNsaWVudF8xLk9BdXRoMkNsaWVudCgpO1xuICAgICAgICB0aGlzLnRhcmdldFByaW5jaXBhbCA9IG9wdGlvbnMudGFyZ2V0UHJpbmNpcGFsID8/ICcnO1xuICAgICAgICB0aGlzLmRlbGVnYXRlcyA9IG9wdGlvbnMuZGVsZWdhdGVzID8/IFtdO1xuICAgICAgICB0aGlzLnRhcmdldFNjb3BlcyA9IG9wdGlvbnMudGFyZ2V0U2NvcGVzID8/IFtdO1xuICAgICAgICB0aGlzLmxpZmV0aW1lID0gb3B0aW9ucy5saWZldGltZSA/PyAzNjAwO1xuICAgICAgICBjb25zdCB1c2luZ0V4cGxpY2l0VW5pdmVyc2VEb21haW4gPSAhISgwLCB1dGlsXzEub3JpZ2luYWxPckNhbWVsT3B0aW9ucykob3B0aW9ucykuZ2V0KCd1bml2ZXJzZV9kb21haW4nKTtcbiAgICAgICAgaWYgKCF1c2luZ0V4cGxpY2l0VW5pdmVyc2VEb21haW4pIHtcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHVuaXZlcnNlIHdpdGggdGhlIHNvdXJjZSdzIHVuaXZlcnNlXG4gICAgICAgICAgICB0aGlzLnVuaXZlcnNlRG9tYWluID0gdGhpcy5zb3VyY2VDbGllbnQudW5pdmVyc2VEb21haW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zb3VyY2VDbGllbnQudW5pdmVyc2VEb21haW4gIT09IHRoaXMudW5pdmVyc2VEb21haW4pIHtcbiAgICAgICAgICAgIC8vIG5vbi1kZWZhdWx0IHVuaXZlcnNlIGFuZCBpcyBub3QgbWF0Y2hpbmcgdGhlIHNvdXJjZSAtIHRoaXMgY291bGQgYmUgYSBjcmVkZW50aWFsIGxlYWtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVbml2ZXJzZSBkb21haW4gJHt0aGlzLnNvdXJjZUNsaWVudC51bml2ZXJzZURvbWFpbn0gaW4gc291cmNlIGNyZWRlbnRpYWxzIGRvZXMgbm90IG1hdGNoICR7dGhpcy51bml2ZXJzZURvbWFpbn0gdW5pdmVyc2UgZG9tYWluIHNldCBmb3IgaW1wZXJzb25hdGVkIGNyZWRlbnRpYWxzLmApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPVxuICAgICAgICAgICAgb3B0aW9ucy5lbmRwb2ludCA/PyBgaHR0cHM6Ly9pYW1jcmVkZW50aWFscy4ke3RoaXMudW5pdmVyc2VEb21haW59YDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2lnbnMgc29tZSBieXRlcy5cbiAgICAgKlxuICAgICAqIHtAbGluayBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vaWFtL2RvY3MvcmVmZXJlbmNlL2NyZWRlbnRpYWxzL3Jlc3QvdjEvcHJvamVjdHMuc2VydmljZUFjY291bnRzL3NpZ25CbG9iIFJlZmVyZW5jZSBEb2N1bWVudGF0aW9ufVxuICAgICAqIEBwYXJhbSBibG9iVG9TaWduIFN0cmluZyB0byBzaWduLlxuICAgICAqXG4gICAgICogQHJldHVybnMgQSB7QGxpbmsgU2lnbkJsb2JSZXNwb25zZX0gZGVub3RpbmcgdGhlIGtleUlEIGFuZCBzaWduZWRCbG9iIGluIGJhc2U2NCBzdHJpbmdcbiAgICAgKi9cbiAgICBhc3luYyBzaWduKGJsb2JUb1NpZ24pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zb3VyY2VDbGllbnQuZ2V0QWNjZXNzVG9rZW4oKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGBwcm9qZWN0cy8tL3NlcnZpY2VBY2NvdW50cy8ke3RoaXMudGFyZ2V0UHJpbmNpcGFsfWA7XG4gICAgICAgIGNvbnN0IHUgPSBgJHt0aGlzLmVuZHBvaW50fS92MS8ke25hbWV9OnNpZ25CbG9iYDtcbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGRlbGVnYXRlczogdGhpcy5kZWxlZ2F0ZXMsXG4gICAgICAgICAgICBwYXlsb2FkOiBCdWZmZXIuZnJvbShibG9iVG9TaWduKS50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc291cmNlQ2xpZW50LnJlcXVlc3Qoe1xuICAgICAgICAgICAgLi4uSW1wZXJzb25hdGVkLlJFVFJZX0NPTkZJRyxcbiAgICAgICAgICAgIHVybDogdSxcbiAgICAgICAgICAgIGRhdGE6IGJvZHksXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9XG4gICAgLyoqIFRoZSBzZXJ2aWNlIGFjY291bnQgZW1haWwgdG8gYmUgaW1wZXJzb25hdGVkLiAqL1xuICAgIGdldFRhcmdldFByaW5jaXBhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0UHJpbmNpcGFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGFjY2VzcyB0b2tlbi5cbiAgICAgKi9cbiAgICBhc3luYyByZWZyZXNoVG9rZW4oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNvdXJjZUNsaWVudC5nZXRBY2Nlc3NUb2tlbigpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9ICdwcm9qZWN0cy8tL3NlcnZpY2VBY2NvdW50cy8nICsgdGhpcy50YXJnZXRQcmluY2lwYWw7XG4gICAgICAgICAgICBjb25zdCB1ID0gYCR7dGhpcy5lbmRwb2ludH0vdjEvJHtuYW1lfTpnZW5lcmF0ZUFjY2Vzc1Rva2VuYDtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICAgICAgZGVsZWdhdGVzOiB0aGlzLmRlbGVnYXRlcyxcbiAgICAgICAgICAgICAgICBzY29wZTogdGhpcy50YXJnZXRTY29wZXMsXG4gICAgICAgICAgICAgICAgbGlmZXRpbWU6IHRoaXMubGlmZXRpbWUgKyAncycsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5zb3VyY2VDbGllbnQucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgLi4uSW1wZXJzb25hdGVkLlJFVFJZX0NPTkZJRyxcbiAgICAgICAgICAgICAgICB1cmw6IHUsXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFscy5hY2Nlc3NfdG9rZW4gPSB0b2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFscy5leHBpcnlfZGF0ZSA9IERhdGUucGFyc2UodG9rZW5SZXNwb25zZS5leHBpcmVUaW1lKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9rZW5zOiB0aGlzLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIHJlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSAwO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGdheGlvc18xLkdheGlvc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcj8uc3RhdHVzO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yPy5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXR1cyAmJiBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9IGAke3N0YXR1c306IHVuYWJsZSB0byBpbXBlcnNvbmF0ZTogJHttZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gYHVuYWJsZSB0byBpbXBlcnNvbmF0ZTogJHtlcnJvcn1gO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBPcGVuSUQgQ29ubmVjdCBJRCB0b2tlbiBmb3IgYSBzZXJ2aWNlIGFjY291bnQuXG4gICAgICpcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2lhbS9kb2NzL3JlZmVyZW5jZS9jcmVkZW50aWFscy9yZXN0L3YxL3Byb2plY3RzLnNlcnZpY2VBY2NvdW50cy9nZW5lcmF0ZUlkVG9rZW4gUmVmZXJlbmNlIERvY3VtZW50YXRpb259XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0QXVkaWVuY2UgdGhlIGF1ZGllbmNlIGZvciB0aGUgZmV0Y2hlZCBJRCB0b2tlbi5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHJldHVybiBhbiBPcGVuSUQgQ29ubmVjdCBJRCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoSWRUb2tlbih0YXJnZXRBdWRpZW5jZSwgb3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnNvdXJjZUNsaWVudC5nZXRBY2Nlc3NUb2tlbigpO1xuICAgICAgICBjb25zdCBuYW1lID0gYHByb2plY3RzLy0vc2VydmljZUFjY291bnRzLyR7dGhpcy50YXJnZXRQcmluY2lwYWx9YDtcbiAgICAgICAgY29uc3QgdSA9IGAke3RoaXMuZW5kcG9pbnR9L3YxLyR7bmFtZX06Z2VuZXJhdGVJZFRva2VuYDtcbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGRlbGVnYXRlczogdGhpcy5kZWxlZ2F0ZXMsXG4gICAgICAgICAgICBhdWRpZW5jZTogdGFyZ2V0QXVkaWVuY2UsXG4gICAgICAgICAgICBpbmNsdWRlRW1haWw6IG9wdGlvbnM/LmluY2x1ZGVFbWFpbCA/PyB0cnVlLFxuICAgICAgICAgICAgdXNlRW1haWxBenA6IG9wdGlvbnM/LmluY2x1ZGVFbWFpbCA/PyB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnNvdXJjZUNsaWVudC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIC4uLkltcGVyc29uYXRlZC5SRVRSWV9DT05GSUcsXG4gICAgICAgICAgICB1cmw6IHUsXG4gICAgICAgICAgICBkYXRhOiBib2R5LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEudG9rZW47XG4gICAgfVxufVxuZXhwb3J0cy5JbXBlcnNvbmF0ZWQgPSBJbXBlcnNvbmF0ZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbXBlcnNvbmF0ZWQuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9BdXRoQ2xpZW50QXV0aEhhbmRsZXIgPSB2b2lkIDA7XG5leHBvcnRzLmdldEVycm9yRnJvbU9BdXRoRXJyb3JSZXNwb25zZSA9IGdldEVycm9yRnJvbU9BdXRoRXJyb3JSZXNwb25zZTtcbmNvbnN0IGdheGlvc18xID0gcmVxdWlyZShcImdheGlvc1wiKTtcbmNvbnN0IGNyeXB0b18xID0gcmVxdWlyZShcIi4uL2NyeXB0by9jcnlwdG9cIik7XG4vKiogTGlzdCBvZiBIVFRQIG1ldGhvZHMgdGhhdCBhY2NlcHQgcmVxdWVzdCBib2RpZXMuICovXG5jb25zdCBNRVRIT0RTX1NVUFBPUlRJTkdfUkVRVUVTVF9CT0RZID0gWydQVVQnLCAnUE9TVCcsICdQQVRDSCddO1xuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgaGFuZGxpbmcgY2xpZW50IGF1dGhlbnRpY2F0aW9uIGluIE9BdXRoLWJhc2VkXG4gKiBvcGVyYXRpb25zLlxuICogV2hlbiByZXF1ZXN0LWJvZHkgY2xpZW50IGF1dGhlbnRpY2F0aW9uIGlzIHVzZWQsIG9ubHkgYXBwbGljYXRpb24vanNvbiBhbmRcbiAqIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCBjb250ZW50IHR5cGVzIGZvciBIVFRQIG1ldGhvZHMgdGhhdCBzdXBwb3J0XG4gKiByZXF1ZXN0IGJvZGllcyBhcmUgc3VwcG9ydGVkLlxuICovXG5jbGFzcyBPQXV0aENsaWVudEF1dGhIYW5kbGVyIHtcbiAgICAjY3J5cHRvID0gKDAsIGNyeXB0b18xLmNyZWF0ZUNyeXB0bykoKTtcbiAgICAjY2xpZW50QXV0aGVudGljYXRpb247XG4gICAgdHJhbnNwb3J0ZXI7XG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGVzIGFuIE9BdXRoIGNsaWVudCBhdXRoZW50aWNhdGlvbiBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBPQXV0aCBDbGllbnQgQXV0aCBIYW5kbGVyIGluc3RhbmNlIG9wdGlvbnMuIFBhc3NpbmcgYW4gYENsaWVudEF1dGhlbnRpY2F0aW9uYCBkaXJlY3RseSBpcyAqKkBERVBSRUNBVEVEKiouXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiAnY2xpZW50SWQnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuI2NsaWVudEF1dGhlbnRpY2F0aW9uID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ZXIgPSBuZXcgZ2F4aW9zXzEuR2F4aW9zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNjbGllbnRBdXRoZW50aWNhdGlvbiA9IG9wdGlvbnM/LmNsaWVudEF1dGhlbnRpY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRlciA9IG9wdGlvbnM/LnRyYW5zcG9ydGVyIHx8IG5ldyBnYXhpb3NfMS5HYXhpb3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGNsaWVudCBhdXRoZW50aWNhdGlvbiBvbiB0aGUgT0F1dGggcmVxdWVzdCdzIGhlYWRlcnMgb3IgUE9TVFxuICAgICAqIGJvZHkgYnV0IGRvZXMgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIEdheGlvc09wdGlvbnMgd2hvc2UgaGVhZGVycyBvciBkYXRhIGFyZSB0byBiZSBtb2RpZmllZFxuICAgICAqICAgZGVwZW5kaW5nIG9uIHRoZSBjbGllbnQgYXV0aGVudGljYXRpb24gbWVjaGFuaXNtIHRvIGJlIHVzZWQuXG4gICAgICogQHBhcmFtIGJlYXJlclRva2VuIFRoZSBvcHRpb25hbCBiZWFyZXIgdG9rZW4gdG8gdXNlIGZvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKiAgIFdoZW4gdGhpcyBpcyB1c2VkLCBubyBjbGllbnQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgYXJlIG5lZWRlZC5cbiAgICAgKi9cbiAgICBhcHBseUNsaWVudEF1dGhlbnRpY2F0aW9uT3B0aW9ucyhvcHRzLCBiZWFyZXJUb2tlbikge1xuICAgICAgICBvcHRzLmhlYWRlcnMgPSBnYXhpb3NfMS5HYXhpb3MubWVyZ2VIZWFkZXJzKG9wdHMuaGVhZGVycyk7XG4gICAgICAgIC8vIEluamVjdCBhdXRoZW50aWNhdGVkIGhlYWRlci5cbiAgICAgICAgdGhpcy5pbmplY3RBdXRoZW50aWNhdGVkSGVhZGVycyhvcHRzLCBiZWFyZXJUb2tlbik7XG4gICAgICAgIC8vIEluamVjdCBhdXRoZW50aWNhdGVkIHJlcXVlc3QgYm9keS5cbiAgICAgICAgaWYgKCFiZWFyZXJUb2tlbikge1xuICAgICAgICAgICAgdGhpcy5pbmplY3RBdXRoZW50aWNhdGVkUmVxdWVzdEJvZHkob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBjbGllbnQgYXV0aGVudGljYXRpb24gb24gdGhlIHJlcXVlc3QncyBoZWFkZXIgaWYgZWl0aGVyXG4gICAgICogYmFzaWMgYXV0aGVudGljYXRpb24gb3IgYmVhcmVyIHRva2VuIGF1dGhlbnRpY2F0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIEdheGlvc09wdGlvbnMgd2hvc2UgaGVhZGVycyBvciBkYXRhIGFyZSB0byBiZSBtb2RpZmllZFxuICAgICAqICAgZGVwZW5kaW5nIG9uIHRoZSBjbGllbnQgYXV0aGVudGljYXRpb24gbWVjaGFuaXNtIHRvIGJlIHVzZWQuXG4gICAgICogQHBhcmFtIGJlYXJlclRva2VuIFRoZSBvcHRpb25hbCBiZWFyZXIgdG9rZW4gdG8gdXNlIGZvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgKiAgIFdoZW4gdGhpcyBpcyB1c2VkLCBubyBjbGllbnQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgYXJlIG5lZWRlZC5cbiAgICAgKi9cbiAgICBpbmplY3RBdXRoZW50aWNhdGVkSGVhZGVycyhvcHRzLCBiZWFyZXJUb2tlbikge1xuICAgICAgICAvLyBCZWFyZXIgdG9rZW4gcHJpb3JpdGl6ZWQgaGlnaGVyIHRoYW4gYmFzaWMgQXV0aC5cbiAgICAgICAgaWYgKGJlYXJlclRva2VuKSB7XG4gICAgICAgICAgICBvcHRzLmhlYWRlcnMgPSBnYXhpb3NfMS5HYXhpb3MubWVyZ2VIZWFkZXJzKG9wdHMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJUb2tlbn1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy4jY2xpZW50QXV0aGVudGljYXRpb24/LmNvbmZpZGVudGlhbENsaWVudFR5cGUgPT09ICdiYXNpYycpIHtcbiAgICAgICAgICAgIG9wdHMuaGVhZGVycyA9IGdheGlvc18xLkdheGlvcy5tZXJnZUhlYWRlcnMob3B0cy5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudElkID0gdGhpcy4jY2xpZW50QXV0aGVudGljYXRpb24uY2xpZW50SWQ7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRTZWNyZXQgPSB0aGlzLiNjbGllbnRBdXRoZW50aWNhdGlvbi5jbGllbnRTZWNyZXQgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRFbmNvZGVkQ3JlZHMgPSB0aGlzLiNjcnlwdG8uZW5jb2RlQmFzZTY0U3RyaW5nVXRmOChgJHtjbGllbnRJZH06JHtjbGllbnRTZWNyZXR9YCk7XG4gICAgICAgICAgICBnYXhpb3NfMS5HYXhpb3MubWVyZ2VIZWFkZXJzKG9wdHMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2U2NEVuY29kZWRDcmVkc31gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBjbGllbnQgYXV0aGVudGljYXRpb24gb24gdGhlIHJlcXVlc3QncyBib2R5IGlmIHJlcXVlc3QtYm9keVxuICAgICAqIGNsaWVudCBhdXRoZW50aWNhdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBHYXhpb3NPcHRpb25zIHdob3NlIGhlYWRlcnMgb3IgZGF0YSBhcmUgdG8gYmUgbW9kaWZpZWRcbiAgICAgKiAgIGRlcGVuZGluZyBvbiB0aGUgY2xpZW50IGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBiZSB1c2VkLlxuICAgICAqL1xuICAgIGluamVjdEF1dGhlbnRpY2F0ZWRSZXF1ZXN0Qm9keShvcHRzKSB7XG4gICAgICAgIGlmICh0aGlzLiNjbGllbnRBdXRoZW50aWNhdGlvbj8uY29uZmlkZW50aWFsQ2xpZW50VHlwZSA9PT0gJ3JlcXVlc3QtYm9keScpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IChvcHRzLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICghTUVUSE9EU19TVVBQT1JUSU5HX1JFUVVFU1RfQk9EWS5pbmNsdWRlcyhtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke21ldGhvZH0gSFRUUCBtZXRob2QgZG9lcyBub3Qgc3VwcG9ydCBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy4jY2xpZW50QXV0aGVudGljYXRpb24uY29uZmlkZW50aWFsQ2xpZW50VHlwZX0gYCArXG4gICAgICAgICAgICAgICAgICAgICdjbGllbnQgYXV0aGVudGljYXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEdldCBjb250ZW50LXR5cGVcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRzLmhlYWRlcnMpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgICAvLyBJbmplY3QgYXV0aGVudGljYXRlZCByZXF1ZXN0IGJvZHlcbiAgICAgICAgICAgIGlmIChjb250ZW50VHlwZT8uc3RhcnRzV2l0aCgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgfHxcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGEgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhvcHRzLmRhdGEgPz8gJycpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdjbGllbnRfaWQnLCB0aGlzLiNjbGllbnRBdXRoZW50aWNhdGlvbi5jbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2NsaWVudF9zZWNyZXQnLCB0aGlzLiNjbGllbnRBdXRoZW50aWNhdGlvbi5jbGllbnRTZWNyZXQgfHwgJycpO1xuICAgICAgICAgICAgICAgIG9wdHMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb250ZW50VHlwZT8uc3RhcnRzV2l0aCgnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5kYXRhID0gb3B0cy5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3B0cy5kYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy4jY2xpZW50QXV0aGVudGljYXRpb24uY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuI2NsaWVudEF1dGhlbnRpY2F0aW9uLmNsaWVudFNlY3JldCB8fCAnJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZW50VHlwZX0gY29udGVudC10eXBlcyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLiNjbGllbnRBdXRoZW50aWNhdGlvbi5jb25maWRlbnRpYWxDbGllbnRUeXBlfSBgICtcbiAgICAgICAgICAgICAgICAgICAgJ2NsaWVudCBhdXRoZW50aWNhdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJ5IGNvbmZpZyBmb3IgQXV0aC1yZWxhdGVkIHJlcXVlc3RzLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbm90IGEgcGFydCBvZiB0aGUgZGVmYXVsdCB7QGxpbmsgQXV0aENsaWVudC50cmFuc3BvcnRlciB0cmFuc3BvcnRlci9nYXhpb3N9XG4gICAgICogY29uZmlnIGFzIHNvbWUgZG93bnN0cmVhbSBBUElzIHdvdWxkIHByZWZlciBpZiBjdXN0b21lcnMgZXhwbGljaXRseSBlbmFibGUgcmV0cmllcyxcbiAgICAgKiBzdWNoIGFzIEdDUy5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJFVFJZX0NPTkZJRygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJldHJ5OiB0cnVlLFxuICAgICAgICAgICAgcmV0cnlDb25maWc6IHtcbiAgICAgICAgICAgICAgICBodHRwTWV0aG9kc1RvUmV0cnk6IFsnR0VUJywgJ1BVVCcsICdQT1NUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdERUxFVEUnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5PQXV0aENsaWVudEF1dGhIYW5kbGVyID0gT0F1dGhDbGllbnRBdXRoSGFuZGxlcjtcbi8qKlxuICogQ29udmVydHMgYW4gT0F1dGggZXJyb3IgcmVzcG9uc2UgdG8gYSBuYXRpdmUgSmF2YVNjcmlwdCBFcnJvci5cbiAqIEBwYXJhbSByZXNwIFRoZSBPQXV0aCBlcnJvciByZXNwb25zZSB0byBjb252ZXJ0IHRvIGEgbmF0aXZlIEVycm9yIG9iamVjdC5cbiAqIEBwYXJhbSBlcnIgVGhlIG9wdGlvbmFsIG9yaWdpbmFsIGVycm9yLiBJZiBwcm92aWRlZCwgdGhlIGVycm9yIHByb3BlcnRpZXNcbiAqICAgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBlcnJvci5cbiAqIEByZXR1cm4gVGhlIGNvbnZlcnRlZCBuYXRpdmUgRXJyb3Igb2JqZWN0LlxuICovXG5mdW5jdGlvbiBnZXRFcnJvckZyb21PQXV0aEVycm9yUmVzcG9uc2UocmVzcCwgZXJyKSB7XG4gICAgLy8gRXJyb3IgcmVzcG9uc2UuXG4gICAgY29uc3QgZXJyb3JDb2RlID0gcmVzcC5lcnJvcjtcbiAgICBjb25zdCBlcnJvckRlc2NyaXB0aW9uID0gcmVzcC5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBlcnJvclVyaSA9IHJlc3AuZXJyb3JfdXJpO1xuICAgIGxldCBtZXNzYWdlID0gYEVycm9yIGNvZGUgJHtlcnJvckNvZGV9YDtcbiAgICBpZiAodHlwZW9mIGVycm9yRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gYDogJHtlcnJvckRlc2NyaXB0aW9ufWA7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXJyb3JVcmkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCAtICR7ZXJyb3JVcml9YDtcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gb3JpZ2luYWwgZXJyb3IgdG8gbmV3bHkgZ2VuZXJhdGVkIGVycm9yLlxuICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVycik7XG4gICAgICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIC8vIENvcHkgZXJyb3Iuc3RhY2sgaWYgYXZhaWxhYmxlLlxuICAgICAgICAgICAga2V5cy5wdXNoKCdzdGFjaycpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgLy8gRG8gbm90IG92ZXJ3cml0ZSB0aGUgbWVzc2FnZSBmaWVsZC5cbiAgICAgICAgICAgIGlmIChrZXkgIT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdFcnJvciwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlcnJba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Vycm9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2F1dGgyY29tbW9uLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHNDcmVkZW50aWFscyA9IHZvaWQgMDtcbmNvbnN0IGdheGlvc18xID0gcmVxdWlyZShcImdheGlvc1wiKTtcbmNvbnN0IGF1dGhjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGhjbGllbnRcIik7XG5jb25zdCBvYXV0aDJjb21tb25fMSA9IHJlcXVpcmUoXCIuL29hdXRoMmNvbW1vblwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSBPQXV0aCAyLjAgdG9rZW4gZXhjaGFuZ2UgYmFzZWQgb25cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM4NjkzXG4gKi9cbmNsYXNzIFN0c0NyZWRlbnRpYWxzIGV4dGVuZHMgb2F1dGgyY29tbW9uXzEuT0F1dGhDbGllbnRBdXRoSGFuZGxlciB7XG4gICAgI3Rva2VuRXhjaGFuZ2VFbmRwb2ludDtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhbiBTVFMgY3JlZGVudGlhbHMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgU1RTIGNyZWRlbnRpYWxzIGluc3RhbmNlIG9wdGlvbnMuIFBhc3NpbmcgYW4gYHRva2VuRXhjaGFuZ2VFbmRwb2ludGAgZGlyZWN0bHkgaXMgKipAREVQUkVDQVRFRCoqLlxuICAgICAqIEBwYXJhbSBjbGllbnRBdXRoZW50aWNhdGlvbiAqKkBERVBSRUNBVEVEKiouIFByb3ZpZGUgYSB7QGxpbmsgU3RzQ3JlZGVudGlhbHNDb25zdHJ1Y3Rpb25PcHRpb25zIGBTdHNDcmVkZW50aWFsc0NvbnN0cnVjdGlvbk9wdGlvbnNgfSBvYmplY3QgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7XG4gICAgICAgIHRva2VuRXhjaGFuZ2VFbmRwb2ludDogJycsXG4gICAgfSwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgLSBwcm92aWRlIGEge0BsaW5rIFN0c0NyZWRlbnRpYWxzQ29uc3RydWN0aW9uT3B0aW9ucyBgU3RzQ3JlZGVudGlhbHNDb25zdHJ1Y3Rpb25PcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIGNsaWVudEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgb3B0aW9ucyBpbnN0YW5jZW9mIFVSTCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0b2tlbkV4Y2hhbmdlRW5kcG9pbnQ6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgY2xpZW50QXV0aGVudGljYXRpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLiN0b2tlbkV4Y2hhbmdlRW5kcG9pbnQgPSBvcHRpb25zLnRva2VuRXhjaGFuZ2VFbmRwb2ludDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhjaGFuZ2VzIHRoZSBwcm92aWRlZCB0b2tlbiBmb3IgYW5vdGhlciB0eXBlIG9mIHRva2VuIGJhc2VkIG9uIHRoZVxuICAgICAqIHJmYzg2OTMgc3BlYy5cbiAgICAgKiBAcGFyYW0gc3RzQ3JlZGVudGlhbHNPcHRpb25zIFRoZSB0b2tlbiBleGNoYW5nZSBvcHRpb25zIHVzZWQgdG8gcG9wdWxhdGVcbiAgICAgKiAgIHRoZSB0b2tlbiBleGNoYW5nZSByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBPcHRpb25hbCBhZGRpdGlvbmFsIGhlYWRlcnMgdG8gcGFzcyBhbG9uZyB0aGVcbiAgICAgKiAgIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgYWRkaXRpb25hbCBHQ1Atc3BlY2lmaWMgbm9uLXNwZWMgZGVmaW5lZCBvcHRpb25zXG4gICAgICogICB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXG4gICAgICogICBFeGFtcGxlOiBgJm9wdGlvbnM9JHtlbmNvZGVVcmlDb21wb25lbnQoSlNPTi5zdHJpbmdpZmllZChvcHRpb25zKSl9YFxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdG9rZW4gZXhjaGFuZ2UgcmVzcG9uc2UgY29udGFpbmluZ1xuICAgICAqICAgdGhlIHJlcXVlc3RlZCB0b2tlbiBhbmQgaXRzIGV4cGlyYXRpb24gdGltZS5cbiAgICAgKi9cbiAgICBhc3luYyBleGNoYW5nZVRva2VuKHN0c0NyZWRlbnRpYWxzT3B0aW9ucywgaGVhZGVycywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICBncmFudF90eXBlOiBzdHNDcmVkZW50aWFsc09wdGlvbnMuZ3JhbnRUeXBlLFxuICAgICAgICAgICAgcmVzb3VyY2U6IHN0c0NyZWRlbnRpYWxzT3B0aW9ucy5yZXNvdXJjZSxcbiAgICAgICAgICAgIGF1ZGllbmNlOiBzdHNDcmVkZW50aWFsc09wdGlvbnMuYXVkaWVuY2UsXG4gICAgICAgICAgICBzY29wZTogc3RzQ3JlZGVudGlhbHNPcHRpb25zLnNjb3BlPy5qb2luKCcgJyksXG4gICAgICAgICAgICByZXF1ZXN0ZWRfdG9rZW5fdHlwZTogc3RzQ3JlZGVudGlhbHNPcHRpb25zLnJlcXVlc3RlZFRva2VuVHlwZSxcbiAgICAgICAgICAgIHN1YmplY3RfdG9rZW46IHN0c0NyZWRlbnRpYWxzT3B0aW9ucy5zdWJqZWN0VG9rZW4sXG4gICAgICAgICAgICBzdWJqZWN0X3Rva2VuX3R5cGU6IHN0c0NyZWRlbnRpYWxzT3B0aW9ucy5zdWJqZWN0VG9rZW5UeXBlLFxuICAgICAgICAgICAgYWN0b3JfdG9rZW46IHN0c0NyZWRlbnRpYWxzT3B0aW9ucy5hY3RpbmdQYXJ0eT8uYWN0b3JUb2tlbixcbiAgICAgICAgICAgIGFjdG9yX3Rva2VuX3R5cGU6IHN0c0NyZWRlbnRpYWxzT3B0aW9ucy5hY3RpbmdQYXJ0eT8uYWN0b3JUb2tlblR5cGUsXG4gICAgICAgICAgICAvLyBOb24tc3RhbmRhcmQgR0NQLXNwZWNpZmljIG9wdGlvbnMuXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgLi4uU3RzQ3JlZGVudGlhbHMuUkVUUllfQ09ORklHLFxuICAgICAgICAgICAgdXJsOiB0aGlzLiN0b2tlbkV4Y2hhbmdlRW5kcG9pbnQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoKDAsIHV0aWxfMS5yZW1vdmVVbmRlZmluZWRWYWx1ZXNJbk9iamVjdCkodmFsdWVzKSksXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgfTtcbiAgICAgICAgYXV0aGNsaWVudF8xLkF1dGhDbGllbnQuc2V0TWV0aG9kTmFtZShvcHRzLCAnZXhjaGFuZ2VUb2tlbicpO1xuICAgICAgICAvLyBBcHBseSBPQXV0aCBjbGllbnQgYXV0aGVudGljYXRpb24uXG4gICAgICAgIHRoaXMuYXBwbHlDbGllbnRBdXRoZW50aWNhdGlvbk9wdGlvbnMob3B0cyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMudHJhbnNwb3J0ZXIucmVxdWVzdChvcHRzKTtcbiAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zdCBzdHNTdWNjZXNzZnVsUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgc3RzU3VjY2Vzc2Z1bFJlc3BvbnNlLnJlcyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIHN0c1N1Y2Nlc3NmdWxSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBlcnJvciB0byBPQXV0aEVycm9yLlxuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZ2F4aW9zXzEuR2F4aW9zRXJyb3IgJiYgZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoMCwgb2F1dGgyY29tbW9uXzEuZ2V0RXJyb3JGcm9tT0F1dGhFcnJvclJlc3BvbnNlKShlcnJvci5yZXNwb25zZS5kYXRhLCBcbiAgICAgICAgICAgICAgICAvLyBQcmVzZXJ2ZSBvdGhlciBmaWVsZHMgZnJvbSB0aGUgb3JpZ2luYWwgZXJyb3IuXG4gICAgICAgICAgICAgICAgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVxdWVzdCBjb3VsZCBmYWlsIGJlZm9yZSB0aGUgc2VydmVyIHJlc3BvbmRzLlxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlN0c0NyZWRlbnRpYWxzID0gU3RzQ3JlZGVudGlhbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHNjcmVkZW50aWFscy5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFzZUV4dGVybmFsQWNjb3VudENsaWVudCA9IGV4cG9ydHMuQ0xPVURfUkVTT1VSQ0VfTUFOQUdFUiA9IGV4cG9ydHMuRVhURVJOQUxfQUNDT1VOVF9UWVBFID0gZXhwb3J0cy5FWFBJUkFUSU9OX1RJTUVfT0ZGU0VUID0gdm9pZCAwO1xuY29uc3QgZ2F4aW9zXzEgPSByZXF1aXJlKFwiZ2F4aW9zXCIpO1xuY29uc3Qgc3RyZWFtID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNvbnN0IGF1dGhjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGhjbGllbnRcIik7XG5jb25zdCBzdHMgPSByZXF1aXJlKFwiLi9zdHNjcmVkZW50aWFsc1wiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3Qgc2hhcmVkX2Nqc18xID0gcmVxdWlyZShcIi4uL3NoYXJlZC5janNcIik7XG4vKipcbiAqIFRoZSByZXF1aXJlZCB0b2tlbiBleGNoYW5nZSBncmFudF90eXBlOiByZmM4NjkzI3NlY3Rpb24tMi4xXG4gKi9cbmNvbnN0IFNUU19HUkFOVF9UWVBFID0gJ3VybjppZXRmOnBhcmFtczpvYXV0aDpncmFudC10eXBlOnRva2VuLWV4Y2hhbmdlJztcbi8qKlxuICogVGhlIHJlcXVlc3RlZCB0b2tlbiBleGNoYW5nZSByZXF1ZXN0ZWRfdG9rZW5fdHlwZTogcmZjODY5MyNzZWN0aW9uLTIuMVxuICovXG5jb25zdCBTVFNfUkVRVUVTVF9UT0tFTl9UWVBFID0gJ3VybjppZXRmOnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOmFjY2Vzc190b2tlbic7XG4vKiogVGhlIGRlZmF1bHQgT0F1dGggc2NvcGUgdG8gcmVxdWVzdCB3aGVuIG5vbmUgaXMgcHJvdmlkZWQuICovXG5jb25zdCBERUZBVUxUX09BVVRIX1NDT1BFID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm0nO1xuLyoqIERlZmF1bHQgaW1wZXJzb25hdGVkIHRva2VuIGxpZmVzcGFuIGluIHNlY29uZHMuKi9cbmNvbnN0IERFRkFVTFRfVE9LRU5fTElGRVNQQU4gPSAzNjAwO1xuLyoqXG4gKiBPZmZzZXQgdG8gdGFrZSBpbnRvIGFjY291bnQgbmV0d29yayBkZWxheXMgYW5kIHNlcnZlciBjbG9jayBza2V3cy5cbiAqL1xuZXhwb3J0cy5FWFBJUkFUSU9OX1RJTUVfT0ZGU0VUID0gNSAqIDYwICogMTAwMDtcbi8qKlxuICogVGhlIGNyZWRlbnRpYWxzIEpTT04gZmlsZSB0eXBlIGZvciBleHRlcm5hbCBhY2NvdW50IGNsaWVudHMuXG4gKiBUaGVyZSBhcmUgMyB0eXBlcyBvZiBKU09OIGNvbmZpZ3M6XG4gKiAxLiBhdXRob3JpemVkX3VzZXIgPT4gR29vZ2xlIGVuZCB1c2VyIGNyZWRlbnRpYWxcbiAqIDIuIHNlcnZpY2VfYWNjb3VudCA9PiBHb29nbGUgc2VydmljZSBhY2NvdW50IGNyZWRlbnRpYWxcbiAqIDMuIGV4dGVybmFsX0FjY291bnQgPT4gbm9uLUdDUCBzZXJ2aWNlIChlZy4gQVdTLCBBenVyZSwgSzhzKVxuICovXG5leHBvcnRzLkVYVEVSTkFMX0FDQ09VTlRfVFlQRSA9ICdleHRlcm5hbF9hY2NvdW50Jztcbi8qKlxuICogQ2xvdWQgcmVzb3VyY2UgbWFuYWdlciBVUkwgdXNlZCB0byByZXRyaWV2ZSBwcm9qZWN0IGluZm9ybWF0aW9uLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgQmFzZUV4dGVybmFsQWNjb3VudENsaWVudC5jbG91ZFJlc291cmNlTWFuYWdlclVSTH0gaW5zdGVhZFxuICoqL1xuZXhwb3J0cy5DTE9VRF9SRVNPVVJDRV9NQU5BR0VSID0gJ2h0dHBzOi8vY2xvdWRyZXNvdXJjZW1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvJztcbi8qKiBUaGUgd29ya2ZvcmNlIGF1ZGllbmNlIHBhdHRlcm4uICovXG5jb25zdCBXT1JLRk9SQ0VfQVVESUVOQ0VfUEFUVEVSTiA9ICcvL2lhbVxcXFwuZ29vZ2xlYXBpc1xcXFwuY29tL2xvY2F0aW9ucy9bXi9dKy93b3JrZm9yY2VQb29scy9bXi9dKy9wcm92aWRlcnMvLisnO1xuY29uc3QgREVGQVVMVF9UT0tFTl9VUkwgPSAnaHR0cHM6Ly9zdHMue3VuaXZlcnNlRG9tYWlufS92MS90b2tlbic7XG4vKipcbiAqIEJhc2UgZXh0ZXJuYWwgYWNjb3VudCBjbGllbnQuIFRoaXMgaXMgdXNlZCB0byBpbnN0YW50aWF0ZSBBdXRoQ2xpZW50cyBmb3JcbiAqIGV4Y2hhbmdpbmcgZXh0ZXJuYWwgYWNjb3VudCBjcmVkZW50aWFscyBmb3IgR0NQIGFjY2VzcyB0b2tlbiBhbmQgYXV0aG9yaXppbmdcbiAqIHJlcXVlc3RzIHRvIEdDUCBBUElzLlxuICogVGhlIGJhc2UgY2xhc3MgaW1wbGVtZW50cyBjb21tb24gbG9naWMgZm9yIGV4Y2hhbmdpbmcgdmFyaW91cyB0eXBlIG9mXG4gKiBleHRlcm5hbCBjcmVkZW50aWFscyBmb3IgR0NQIGFjY2VzcyB0b2tlbi4gVGhlIGxvZ2ljIG9mIGRldGVybWluaW5nIGFuZFxuICogcmV0cmlldmluZyB0aGUgZXh0ZXJuYWwgY3JlZGVudGlhbCBiYXNlZCBvbiB0aGUgZW52aXJvbm1lbnQgYW5kXG4gKiBjcmVkZW50aWFsX3NvdXJjZSB3aWxsIGJlIGxlZnQgZm9yIHRoZSBzdWJjbGFzc2VzLlxuICovXG5jbGFzcyBCYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50IGV4dGVuZHMgYXV0aGNsaWVudF8xLkF1dGhDbGllbnQge1xuICAgIC8qKlxuICAgICAqIE9BdXRoIHNjb3BlcyBmb3IgdGhlIEdDUCBhY2Nlc3MgdG9rZW4gdG8gdXNlLiBXaGVuIG5vdCBwcm92aWRlZCxcbiAgICAgKiB0aGUgZGVmYXVsdCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtIGlzXG4gICAgICogdXNlZC5cbiAgICAgKi9cbiAgICBzY29wZXM7XG4gICAgcHJvamVjdE51bWJlcjtcbiAgICBhdWRpZW5jZTtcbiAgICBzdWJqZWN0VG9rZW5UeXBlO1xuICAgIHN0c0NyZWRlbnRpYWw7XG4gICAgY2xpZW50QXV0aDtcbiAgICBjcmVkZW50aWFsU291cmNlVHlwZTtcbiAgICBjYWNoZWRBY2Nlc3NUb2tlbjtcbiAgICBzZXJ2aWNlQWNjb3VudEltcGVyc29uYXRpb25Vcmw7XG4gICAgc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uTGlmZXRpbWU7XG4gICAgd29ya2ZvcmNlUG9vbFVzZXJQcm9qZWN0O1xuICAgIGNvbmZpZ0xpZmV0aW1lUmVxdWVzdGVkO1xuICAgIHRva2VuVXJsO1xuICAgIC8qKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgdHNcbiAgICAgKiBuZXcgVVJMKCdodHRwczovL2Nsb3VkcmVzb3VyY2VtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL3YxL3Byb2plY3RzLycpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGNsb3VkUmVzb3VyY2VNYW5hZ2VyVVJMO1xuICAgIHN1cHBsaWVyQ29udGV4dDtcbiAgICAvKipcbiAgICAgKiBBIHBlbmRpbmcgYWNjZXNzIHRva2VuIHJlcXVlc3QuIFVzZWQgZm9yIGNvbmN1cnJlbnQgY2FsbHMuXG4gICAgICovXG4gICAgI3BlbmRpbmdBY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGUgYSBCYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50IGluc3RhbmNlIHVzaW5nIHRoZSBwcm92aWRlZCBKU09OXG4gICAgICogb2JqZWN0IGxvYWRlZCBmcm9tIGFuIGV4dGVybmFsIGFjY291bnQgY3JlZGVudGlhbHMgZmlsZS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgZXh0ZXJuYWwgYWNjb3VudCBvcHRpb25zIG9iamVjdCB0eXBpY2FsbHkgbG9hZGVkXG4gICAgICogICBmcm9tIHRoZSBleHRlcm5hbCBhY2NvdW50IEpTT04gY3JlZGVudGlhbCBmaWxlLiBUaGUgY2FtZWxDYXNlZCBvcHRpb25zXG4gICAgICogICBhcmUgYWxpYXNlcyBmb3IgdGhlIHNuYWtlX2Nhc2VkIG9wdGlvbnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgY29uc3Qgb3B0cyA9ICgwLCB1dGlsXzEub3JpZ2luYWxPckNhbWVsT3B0aW9ucykob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvcHRzLmdldCgndHlwZScpO1xuICAgICAgICBpZiAodHlwZSAmJiB0eXBlICE9PSBleHBvcnRzLkVYVEVSTkFMX0FDQ09VTlRfVFlQRSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBcIiR7ZXhwb3J0cy5FWFRFUk5BTF9BQ0NPVU5UX1RZUEV9XCIgdHlwZSBidXQgYCArXG4gICAgICAgICAgICAgICAgYHJlY2VpdmVkIFwiJHtvcHRpb25zLnR5cGV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnRJZCA9IG9wdHMuZ2V0KCdjbGllbnRfaWQnKTtcbiAgICAgICAgY29uc3QgY2xpZW50U2VjcmV0ID0gb3B0cy5nZXQoJ2NsaWVudF9zZWNyZXQnKTtcbiAgICAgICAgdGhpcy50b2tlblVybCA9XG4gICAgICAgICAgICBvcHRzLmdldCgndG9rZW5fdXJsJykgPz9cbiAgICAgICAgICAgICAgICBERUZBVUxUX1RPS0VOX1VSTC5yZXBsYWNlKCd7dW5pdmVyc2VEb21haW59JywgdGhpcy51bml2ZXJzZURvbWFpbik7XG4gICAgICAgIGNvbnN0IHN1YmplY3RUb2tlblR5cGUgPSBvcHRzLmdldCgnc3ViamVjdF90b2tlbl90eXBlJyk7XG4gICAgICAgIGNvbnN0IHdvcmtmb3JjZVBvb2xVc2VyUHJvamVjdCA9IG9wdHMuZ2V0KCd3b3JrZm9yY2VfcG9vbF91c2VyX3Byb2plY3QnKTtcbiAgICAgICAgY29uc3Qgc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uVXJsID0gb3B0cy5nZXQoJ3NlcnZpY2VfYWNjb3VudF9pbXBlcnNvbmF0aW9uX3VybCcpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlQWNjb3VudEltcGVyc29uYXRpb24gPSBvcHRzLmdldCgnc2VydmljZV9hY2NvdW50X2ltcGVyc29uYXRpb24nKTtcbiAgICAgICAgY29uc3Qgc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uTGlmZXRpbWUgPSAoMCwgdXRpbF8xLm9yaWdpbmFsT3JDYW1lbE9wdGlvbnMpKHNlcnZpY2VBY2NvdW50SW1wZXJzb25hdGlvbikuZ2V0KCd0b2tlbl9saWZldGltZV9zZWNvbmRzJyk7XG4gICAgICAgIHRoaXMuY2xvdWRSZXNvdXJjZU1hbmFnZXJVUkwgPSBuZXcgVVJMKG9wdHMuZ2V0KCdjbG91ZF9yZXNvdXJjZV9tYW5hZ2VyX3VybCcpIHx8XG4gICAgICAgICAgICBgaHR0cHM6Ly9jbG91ZHJlc291cmNlbWFuYWdlci4ke3RoaXMudW5pdmVyc2VEb21haW59L3YxL3Byb2plY3RzL2ApO1xuICAgICAgICBpZiAoY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50QXV0aCA9IHtcbiAgICAgICAgICAgICAgICBjb25maWRlbnRpYWxDbGllbnRUeXBlOiAnYmFzaWMnLFxuICAgICAgICAgICAgICAgIGNsaWVudElkLFxuICAgICAgICAgICAgICAgIGNsaWVudFNlY3JldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHNDcmVkZW50aWFsID0gbmV3IHN0cy5TdHNDcmVkZW50aWFscyh7XG4gICAgICAgICAgICB0b2tlbkV4Y2hhbmdlRW5kcG9pbnQ6IHRoaXMudG9rZW5VcmwsXG4gICAgICAgICAgICBjbGllbnRBdXRoZW50aWNhdGlvbjogdGhpcy5jbGllbnRBdXRoLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY29wZXMgPSBvcHRzLmdldCgnc2NvcGVzJykgfHwgW0RFRkFVTFRfT0FVVEhfU0NPUEVdO1xuICAgICAgICB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdWRpZW5jZSA9IG9wdHMuZ2V0KCdhdWRpZW5jZScpO1xuICAgICAgICB0aGlzLnN1YmplY3RUb2tlblR5cGUgPSBzdWJqZWN0VG9rZW5UeXBlO1xuICAgICAgICB0aGlzLndvcmtmb3JjZVBvb2xVc2VyUHJvamVjdCA9IHdvcmtmb3JjZVBvb2xVc2VyUHJvamVjdDtcbiAgICAgICAgY29uc3Qgd29ya2ZvcmNlQXVkaWVuY2VQYXR0ZXJuID0gbmV3IFJlZ0V4cChXT1JLRk9SQ0VfQVVESUVOQ0VfUEFUVEVSTik7XG4gICAgICAgIGlmICh0aGlzLndvcmtmb3JjZVBvb2xVc2VyUHJvamVjdCAmJlxuICAgICAgICAgICAgIXRoaXMuYXVkaWVuY2UubWF0Y2god29ya2ZvcmNlQXVkaWVuY2VQYXR0ZXJuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3b3JrZm9yY2VQb29sVXNlclByb2plY3Qgc2hvdWxkIG5vdCBiZSBzZXQgZm9yIG5vbi13b3JrZm9yY2UgcG9vbCAnICtcbiAgICAgICAgICAgICAgICAnY3JlZGVudGlhbHMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXJ2aWNlQWNjb3VudEltcGVyc29uYXRpb25VcmwgPSBzZXJ2aWNlQWNjb3VudEltcGVyc29uYXRpb25Vcmw7XG4gICAgICAgIHRoaXMuc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uTGlmZXRpbWUgPVxuICAgICAgICAgICAgc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uTGlmZXRpbWU7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VBY2NvdW50SW1wZXJzb25hdGlvbkxpZmV0aW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0xpZmV0aW1lUmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnTGlmZXRpbWVSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uTGlmZXRpbWUgPSBERUZBVUxUX1RPS0VOX0xJRkVTUEFOO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdE51bWJlciA9IHRoaXMuZ2V0UHJvamVjdE51bWJlcih0aGlzLmF1ZGllbmNlKTtcbiAgICAgICAgdGhpcy5zdXBwbGllckNvbnRleHQgPSB7XG4gICAgICAgICAgICBhdWRpZW5jZTogdGhpcy5hdWRpZW5jZSxcbiAgICAgICAgICAgIHN1YmplY3RUb2tlblR5cGU6IHRoaXMuc3ViamVjdFRva2VuVHlwZSxcbiAgICAgICAgICAgIHRyYW5zcG9ydGVyOiB0aGlzLnRyYW5zcG9ydGVyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiogVGhlIHNlcnZpY2UgYWNjb3VudCBlbWFpbCB0byBiZSBpbXBlcnNvbmF0ZWQsIGlmIGF2YWlsYWJsZS4gKi9cbiAgICBnZXRTZXJ2aWNlQWNjb3VudEVtYWlsKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlQWNjb3VudEltcGVyc29uYXRpb25VcmwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2VBY2NvdW50SW1wZXJzb25hdGlvblVybC5sZW5ndGggPiAyNTYpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBQcmV2ZW50cyBET1MgYXR0YWNrcy5cbiAgICAgICAgICAgICAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlYXBpcy9nb29nbGUtYXV0aC1saWJyYXJ5LW5vZGVqcy9zZWN1cml0eS9jb2RlLXNjYW5uaW5nLzg0fVxuICAgICAgICAgICAgICAgICAqKi9cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVJMIGlzIHRvbyBsb25nOiAke3RoaXMuc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uVXJsfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGFyc2UgZW1haWwgZnJvbSBVUkwuIFRoZSBmb3JtYWwgbG9va3MgYXMgZm9sbG93czpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vaWFtY3JlZGVudGlhbHMuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvLS9zZXJ2aWNlQWNjb3VudHMvbmFtZUBwcm9qZWN0LWlkLmlhbS5nc2VydmljZWFjY291bnQuY29tOmdlbmVyYXRlQWNjZXNzVG9rZW5cbiAgICAgICAgICAgIGNvbnN0IHJlID0gL3NlcnZpY2VBY2NvdW50c1xcLyg/PGVtYWlsPlteOl0rKTpnZW5lcmF0ZUFjY2Vzc1Rva2VuJC87XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZS5leGVjKHRoaXMuc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uVXJsKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ/Lmdyb3Vwcz8uZW1haWwgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSBtZWNoYW5pc20gdG8gaW5qZWN0IEdDUCBhY2Nlc3MgdG9rZW5zIGRpcmVjdGx5LlxuICAgICAqIFdoZW4gdGhlIHByb3ZpZGVkIGNyZWRlbnRpYWwgZXhwaXJlcywgYSBuZXcgY3JlZGVudGlhbCwgdXNpbmcgdGhlXG4gICAgICogZXh0ZXJuYWwgYWNjb3VudCBvcHRpb25zLCBpcyByZXRyaWV2ZWQuXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxzIFRoZSBDcmVkZW50aWFscyBvYmplY3QgdG8gc2V0IG9uIHRoZSBjdXJyZW50IGNsaWVudC5cbiAgICAgKi9cbiAgICBzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjcmVkZW50aWFscyk7XG4gICAgICAgIHRoaXMuY2FjaGVkQWNjZXNzVG9rZW4gPSBjcmVkZW50aWFscztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjdXJyZW50IEdDUCBhY2Nlc3MgdG9rZW5cbiAgICAgKiAgIHJlc3BvbnNlLiBJZiB0aGUgY3VycmVudCBjcmVkZW50aWFsIGlzIGV4cGlyZWQsIGEgbmV3IG9uZSBpcyByZXRyaWV2ZWQuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIC8vIElmIGNhY2hlZCBhY2Nlc3MgdG9rZW4gaXMgdW5hdmFpbGFibGUgb3IgZXhwaXJlZCwgZm9yY2UgcmVmcmVzaC5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuIHx8IHRoaXMuaXNFeHBpcmVkKHRoaXMuY2FjaGVkQWNjZXNzVG9rZW4pKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIEdDUCBhY2Nlc3MgdG9rZW4gaW4gR2V0QWNjZXNzVG9rZW5SZXNwb25zZSBmb3JtYXQuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b2tlbjogdGhpcy5jYWNoZWRBY2Nlc3NUb2tlbi5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICByZXM6IHRoaXMuY2FjaGVkQWNjZXNzVG9rZW4ucmVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgbWFpbiBhdXRoZW50aWNhdGlvbiBpbnRlcmZhY2UuIEl0IHRha2VzIGFuIG9wdGlvbmFsIHVybCB3aGljaCB3aGVuXG4gICAgICogcHJlc2VudCBpcyB0aGUgZW5kcG9pbnQgYmVpbmcgYWNjZXNzZWQsIGFuZCByZXR1cm5zIGEgUHJvbWlzZSB3aGljaFxuICAgICAqIHJlc29sdmVzIHdpdGggYXV0aG9yaXphdGlvbiBoZWFkZXIgZmllbGRzLlxuICAgICAqXG4gICAgICogVGhlIHJlc3VsdCBoYXMgdGhlIGZvcm06XG4gICAgICogeyBhdXRob3JpemF0aW9uOiAnQmVhcmVyIDxhY2Nlc3NfdG9rZW5fdmFsdWU+JyB9XG4gICAgICovXG4gICAgYXN5bmMgZ2V0UmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW5SZXNwb25zZS50b2tlbn1gLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU2hhcmVkTWV0YWRhdGFIZWFkZXJzKGhlYWRlcnMpO1xuICAgIH1cbiAgICByZXF1ZXN0KG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QXN5bmMob3B0cykudGhlbihyID0+IGNhbGxiYWNrKG51bGwsIHIpLCBlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZSwgZS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RBc3luYyhvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHByb2plY3QgSUQgY29ycmVzcG9uZGluZyB0byB0aGVcbiAgICAgKiAgIGN1cnJlbnQgd29ya2xvYWQgaWRlbnRpdHkgcG9vbCBvciBjdXJyZW50IHdvcmtmb3JjZSBwb29sIGlmXG4gICAgICogICBkZXRlcm1pbmFibGUuIEZvciB3b3JrZm9yY2UgcG9vbCBjcmVkZW50aWFsLCBpdCByZXR1cm5zIHRoZSBwcm9qZWN0IElEXG4gICAgICogICBjb3JyZXNwb25kaW5nIHRvIHRoZSB3b3JrZm9yY2VQb29sVXNlclByb2plY3QuXG4gICAgICogICBUaGlzIGlzIGludHJvZHVjZWQgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgcGF0dGVybiBvZiB1c2luZyB0aGUgQXV0aFxuICAgICAqICAgbGlicmFyeTpcbiAgICAgKiAgIGNvbnN0IHByb2plY3RJZCA9IGF3YWl0IGF1dGguZ2V0UHJvamVjdElkKCk7XG4gICAgICogICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kbnMuZ29vZ2xlYXBpcy5jb20vZG5zL3YxL3Byb2plY3RzLyR7cHJvamVjdElkfWA7XG4gICAgICogICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucmVxdWVzdCh7IHVybCB9KTtcbiAgICAgKiAgIFRoZSByZXNvdXJjZSBtYXkgbm90IGhhdmUgcGVybWlzc2lvblxuICAgICAqICAgKHJlc291cmNlbWFuYWdlci5wcm9qZWN0cy5nZXQpIHRvIGNhbGwgdGhpcyBBUEkgb3IgdGhlIHJlcXVpcmVkXG4gICAgICogICBzY29wZXMgbWF5IG5vdCBiZSBzZWxlY3RlZDpcbiAgICAgKiAgIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9yZXNvdXJjZS1tYW5hZ2VyL3JlZmVyZW5jZS9yZXN0L3YxL3Byb2plY3RzL2dldCNhdXRob3JpemF0aW9uLXNjb3Blc1xuICAgICAqL1xuICAgIGFzeW5jIGdldFByb2plY3RJZCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IHRoaXMucHJvamVjdE51bWJlciB8fCB0aGlzLndvcmtmb3JjZVBvb2xVc2VyUHJvamVjdDtcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdElkKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gcHJldmlvdXNseSBkZXRlcm1pbmVkIHByb2plY3QgSUQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamVjdE51bWJlcikge1xuICAgICAgICAgICAgLy8gUHJlZmVyYWJsZSBub3QgdG8gdXNlIHJlcXVlc3QoKSB0byBhdm9pZCByZXRyaWFsIHBvbGljaWVzLlxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0UmVxdWVzdEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgLi4uQmFzZUV4dGVybmFsQWNjb3VudENsaWVudC5SRVRSWV9DT05GSUcsXG4gICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMuY2xvdWRSZXNvdXJjZU1hbmFnZXJVUkwudG9TdHJpbmcoKX0ke3Byb2plY3ROdW1iZXJ9YCxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhdXRoY2xpZW50XzEuQXV0aENsaWVudC5zZXRNZXRob2ROYW1lKG9wdHMsICdnZXRQcm9qZWN0SWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0SWQgPSByZXNwb25zZS5kYXRhLnByb2plY3RJZDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlcyB0aGUgcHJvdmlkZWQgSFRUUCByZXF1ZXN0LCBwcm9jZXNzZXMgaXQgYW5kIHJlc29sdmVzIHdpdGggdGhlXG4gICAgICogcmV0dXJuZWQgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIEhUVFAgcmVxdWVzdCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSByZUF1dGhSZXRyaWVkIFdoZXRoZXIgdGhlIGN1cnJlbnQgYXR0ZW1wdCBpcyBhIHJldHJ5IGFmdGVyIGEgZmFpbGVkIGF0dGVtcHQgZHVlIHRvIGFuIGF1dGggZmFpbHVyZS5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdEFzeW5jKG9wdHMsIHJlQXV0aFJldHJpZWQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0UmVxdWVzdEhlYWRlcnMoKTtcbiAgICAgICAgICAgIG9wdHMuaGVhZGVycyA9IGdheGlvc18xLkdheGlvcy5tZXJnZUhlYWRlcnMob3B0cy5oZWFkZXJzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVXNlclByb2plY3RBbmRBdXRoSGVhZGVycyhvcHRzLmhlYWRlcnMsIHJlcXVlc3RIZWFkZXJzKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBlLnJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzO1xuICAgICAgICAgICAgICAgIC8vIFJldHJ5IHRoZSByZXF1ZXN0IGZvciBtZXRhZGF0YSBpZiB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgIC8vIC0gV2UgaGF2ZW4ndCBhbHJlYWR5IHJldHJpZWQuICBJdCBvbmx5IG1ha2VzIHNlbnNlIHRvIHJldHJ5IG9uY2UuXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgcmVzcG9uc2Ugd2FzIGEgNDAxIG9yIGEgNDAzXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgcmVxdWVzdCBkaWRuJ3Qgc2VuZCBhIHJlYWRhYmxlU3RyZWFtXG4gICAgICAgICAgICAgICAgLy8gLSBmb3JjZVJlZnJlc2hPbkZhaWx1cmUgaXMgdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVhZGFibGVTdHJlYW0gPSByZXMuY29uZmlnLmRhdGEgaW5zdGFuY2VvZiBzdHJlYW0uUmVhZGFibGU7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBdXRoRXJyID0gc3RhdHVzQ29kZSA9PT0gNDAxIHx8IHN0YXR1c0NvZGUgPT09IDQwMztcbiAgICAgICAgICAgICAgICBpZiAoIXJlQXV0aFJldHJpZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNBdXRoRXJyICYmXG4gICAgICAgICAgICAgICAgICAgICFpc1JlYWRhYmxlU3RyZWFtICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZWZyZXNoT25GYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuQXN5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdEFzeW5jKG9wdHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb3JjZXMgdG9rZW4gcmVmcmVzaCwgZXZlbiBpZiB1bmV4cGlyZWQgdG9rZW5zIGFyZSBjdXJyZW50bHkgY2FjaGVkLlxuICAgICAqIEV4dGVybmFsIGNyZWRlbnRpYWxzIGFyZSBleGNoYW5nZWQgZm9yIEdDUCBhY2Nlc3MgdG9rZW5zIHZpYSB0aGUgdG9rZW5cbiAgICAgKiBleGNoYW5nZSBlbmRwb2ludCBhbmQgb3RoZXIgc2V0dGluZ3MgcHJvdmlkZWQgaW4gdGhlIGNsaWVudCBvcHRpb25zXG4gICAgICogb2JqZWN0LlxuICAgICAqIElmIHRoZSBzZXJ2aWNlX2FjY291bnRfaW1wZXJzb25hdGlvbl91cmwgaXMgcHJvdmlkZWQsIGFuIGFkZGl0aW9uYWxcbiAgICAgKiBzdGVwIHRvIGV4Y2hhbmdlIHRoZSBleHRlcm5hbCBhY2NvdW50IEdDUCBhY2Nlc3MgdG9rZW4gZm9yIGEgc2VydmljZVxuICAgICAqIGFjY291bnQgaW1wZXJzb25hdGVkIHRva2VuIGlzIHBlcmZvcm1lZC5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGZyZXNoIEdDUCBhY2Nlc3MgdG9rZW5zLlxuICAgICAqL1xuICAgIGFzeW5jIHJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCkge1xuICAgICAgICAvLyBVc2UgYW4gZXhpc3RpbmcgYWNjZXNzIHRva2VuIHJlcXVlc3QsIG9yIGNhY2hlIGEgbmV3IG9uZVxuICAgICAgICB0aGlzLiNwZW5kaW5nQWNjZXNzVG9rZW4gPVxuICAgICAgICAgICAgdGhpcy4jcGVuZGluZ0FjY2Vzc1Rva2VuIHx8IHRoaXMuI2ludGVybmFsUmVmcmVzaEFjY2Vzc1Rva2VuQXN5bmMoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNwZW5kaW5nQWNjZXNzVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAvLyBjbGVhciBwZW5kaW5nIGFjY2VzcyB0b2tlbiBmb3IgZnV0dXJlIHJlcXVlc3RzXG4gICAgICAgICAgICB0aGlzLiNwZW5kaW5nQWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jICNpbnRlcm5hbFJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgZXh0ZXJuYWwgY3JlZGVudGlhbC5cbiAgICAgICAgY29uc3Qgc3ViamVjdFRva2VuID0gYXdhaXQgdGhpcy5yZXRyaWV2ZVN1YmplY3RUb2tlbigpO1xuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIFNUUyBjcmVkZW50aWFscyBvcHRpb25zLlxuICAgICAgICBjb25zdCBzdHNDcmVkZW50aWFsc09wdGlvbnMgPSB7XG4gICAgICAgICAgICBncmFudFR5cGU6IFNUU19HUkFOVF9UWVBFLFxuICAgICAgICAgICAgYXVkaWVuY2U6IHRoaXMuYXVkaWVuY2UsXG4gICAgICAgICAgICByZXF1ZXN0ZWRUb2tlblR5cGU6IFNUU19SRVFVRVNUX1RPS0VOX1RZUEUsXG4gICAgICAgICAgICBzdWJqZWN0VG9rZW4sXG4gICAgICAgICAgICBzdWJqZWN0VG9rZW5UeXBlOiB0aGlzLnN1YmplY3RUb2tlblR5cGUsXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZUFjY2Vzc1Rva2VuIHJlcXVpcmVzIHRoZSBwcm92aWRlZCBhY2Nlc3MgdG9rZW4gdG8gaGF2ZVxuICAgICAgICAgICAgLy8gc2NvcGVzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9pYW0gb3JcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1cbiAgICAgICAgICAgIC8vIFRoZSBuZXcgc2VydmljZSBhY2NvdW50IGFjY2VzcyB0b2tlbiBzY29wZXMgd2lsbCBtYXRjaCB0aGUgdXNlclxuICAgICAgICAgICAgLy8gcHJvdmlkZWQgb25lcy5cbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnNlcnZpY2VBY2NvdW50SW1wZXJzb25hdGlvblVybFxuICAgICAgICAgICAgICAgID8gW0RFRkFVTFRfT0FVVEhfU0NPUEVdXG4gICAgICAgICAgICAgICAgOiB0aGlzLmdldFNjb3Blc0FycmF5KCksXG4gICAgICAgIH07XG4gICAgICAgIC8vIEV4Y2hhbmdlIHRoZSBleHRlcm5hbCBjcmVkZW50aWFscyBmb3IgYSBHQ1AgYWNjZXNzIHRva2VuLlxuICAgICAgICAvLyBDbGllbnQgYXV0aCBpcyBwcmlvcml0aXplZCBvdmVyIHBhc3NpbmcgdGhlIHdvcmtmb3JjZVBvb2xVc2VyUHJvamVjdFxuICAgICAgICAvLyBwYXJhbWV0ZXIgZm9yIFNUUyB0b2tlbiBleGNoYW5nZS5cbiAgICAgICAgY29uc3QgYWRkaXRpb25hbE9wdGlvbnMgPSAhdGhpcy5jbGllbnRBdXRoICYmIHRoaXMud29ya2ZvcmNlUG9vbFVzZXJQcm9qZWN0XG4gICAgICAgICAgICA/IHsgdXNlclByb2plY3Q6IHRoaXMud29ya2ZvcmNlUG9vbFVzZXJQcm9qZWN0IH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhZGRpdGlvbmFsSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICd4LWdvb2ctYXBpLWNsaWVudCc6IHRoaXMuZ2V0TWV0cmljc0hlYWRlclZhbHVlKCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdHNSZXNwb25zZSA9IGF3YWl0IHRoaXMuc3RzQ3JlZGVudGlhbC5leGNoYW5nZVRva2VuKHN0c0NyZWRlbnRpYWxzT3B0aW9ucywgYWRkaXRpb25hbEhlYWRlcnMsIGFkZGl0aW9uYWxPcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5nZXRJbXBlcnNvbmF0ZWRBY2Nlc3NUb2tlbihzdHNSZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0c1Jlc3BvbnNlLmV4cGlyZXNfaW4pIHtcbiAgICAgICAgICAgIC8vIFNhdmUgcmVzcG9uc2UgaW4gY2FjaGVkIGFjY2VzcyB0b2tlbi5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVkQWNjZXNzVG9rZW4gPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBzdHNSZXNwb25zZS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgZXhwaXJ5X2RhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgc3RzUmVzcG9uc2UuZXhwaXJlc19pbiAqIDEwMDAsXG4gICAgICAgICAgICAgICAgcmVzOiBzdHNSZXNwb25zZS5yZXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2F2ZSByZXNwb25zZSBpbiBjYWNoZWQgYWNjZXNzIHRva2VuLlxuICAgICAgICAgICAgdGhpcy5jYWNoZWRBY2Nlc3NUb2tlbiA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHN0c1Jlc3BvbnNlLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICByZXM6IHN0c1Jlc3BvbnNlLnJlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2F2ZSBjcmVkZW50aWFscy5cbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3JlZGVudGlhbHMsIHRoaXMuY2FjaGVkQWNjZXNzVG9rZW4pO1xuICAgICAgICBkZWxldGUgdGhpcy5jcmVkZW50aWFscy5yZXM7XG4gICAgICAgIC8vIFRyaWdnZXIgdG9rZW5zIGV2ZW50IHRvIG5vdGlmeSBleHRlcm5hbCBsaXN0ZW5lcnMuXG4gICAgICAgIHRoaXMuZW1pdCgndG9rZW5zJywge1xuICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGV4cGlyeV9kYXRlOiB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuLmV4cGlyeV9kYXRlLFxuICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHRva2VuX3R5cGU6ICdCZWFyZXInLFxuICAgICAgICAgICAgaWRfdG9rZW46IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXR1cm4gdGhlIGNhY2hlZCBhY2Nlc3MgdG9rZW4uXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JrbG9hZCBpZGVudGl0eSBwb29sIHByb2plY3QgbnVtYmVyIGlmIGl0IGlzIGRldGVybWluYWJsZVxuICAgICAqIGZyb20gdGhlIGF1ZGllbmNlIHJlc291cmNlIG5hbWUuXG4gICAgICogQHBhcmFtIGF1ZGllbmNlIFRoZSBTVFMgYXVkaWVuY2UgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHByb2plY3QgbnVtYmVyLlxuICAgICAqIEByZXR1cm4gVGhlIHByb2plY3QgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgd29ya2xvYWQgaWRlbnRpdHkgcG9vbCwgaWZcbiAgICAgKiAgIHRoaXMgY2FuIGJlIGRldGVybWluZWQgZnJvbSB0aGUgU1RTIGF1ZGllbmNlIGZpZWxkLiBPdGhlcndpc2UsIG51bGwgaXNcbiAgICAgKiAgIHJldHVybmVkLlxuICAgICAqL1xuICAgIGdldFByb2plY3ROdW1iZXIoYXVkaWVuY2UpIHtcbiAgICAgICAgLy8gU1RTIGF1ZGllbmNlIHBhdHRlcm46XG4gICAgICAgIC8vIC8vaWFtLmdvb2dsZWFwaXMuY29tL3Byb2plY3RzLyRQUk9KRUNUX05VTUJFUi9sb2NhdGlvbnMvLi4uXG4gICAgICAgIGNvbnN0IG1hdGNoID0gYXVkaWVuY2UubWF0Y2goL1xcL3Byb2plY3RzXFwvKFteL10rKS8pO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4Y2hhbmdlcyBhbiBleHRlcm5hbCBhY2NvdW50IEdDUCBhY2Nlc3MgdG9rZW4gZm9yIGEgc2VydmljZVxuICAgICAqIGFjY291bnQgaW1wZXJzb25hdGVkIGFjY2VzcyB0b2tlbiB1c2luZyBpYW1jcmVkZW50aWFsc1xuICAgICAqIEdlbmVyYXRlQWNjZXNzVG9rZW4gQVBJLlxuICAgICAqIEBwYXJhbSB0b2tlbiBUaGUgYWNjZXNzIHRva2VuIHRvIGV4Y2hhbmdlIGZvciBhIHNlcnZpY2UgYWNjb3VudCBhY2Nlc3NcbiAgICAgKiAgIHRva2VuLlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc2VydmljZSBhY2NvdW50IGltcGVyc29uYXRlZFxuICAgICAqICAgY3JlZGVudGlhbHMgcmVzcG9uc2UuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1wZXJzb25hdGVkQWNjZXNzVG9rZW4odG9rZW4pIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIC4uLkJhc2VFeHRlcm5hbEFjY291bnRDbGllbnQuUkVUUllfQ09ORklHLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnNlcnZpY2VBY2NvdW50SW1wZXJzb25hdGlvblVybCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHNjb3BlOiB0aGlzLmdldFNjb3Blc0FycmF5KCksXG4gICAgICAgICAgICAgICAgbGlmZXRpbWU6IHRoaXMuc2VydmljZUFjY291bnRJbXBlcnNvbmF0aW9uTGlmZXRpbWUgKyAncycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJ2dldEltcGVyc29uYXRlZEFjY2Vzc1Rva2VuJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICBjb25zdCBzdWNjZXNzUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBzdWNjZXNzUmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAvLyBDb252ZXJ0IGZyb20gSVNPIGZvcm1hdCB0byB0aW1lc3RhbXAuXG4gICAgICAgICAgICBleHBpcnlfZGF0ZTogbmV3IERhdGUoc3VjY2Vzc1Jlc3BvbnNlLmV4cGlyZVRpbWUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHJlczogcmVzcG9uc2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgY3JlZGVudGlhbHMgYXJlIGV4cGlyZWQgb3Igbm90LlxuICAgICAqIElmIHRoZXJlIGlzIG5vIGV4cGlyeSB0aW1lLCBhc3N1bWVzIHRoZSB0b2tlbiBpcyBub3QgZXhwaXJlZCBvciBleHBpcmluZy5cbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4gVGhlIGNyZWRlbnRpYWxzIHRvIGNoZWNrIGZvciBleHBpcmF0aW9uLlxuICAgICAqIEByZXR1cm4gV2hldGhlciB0aGUgY3JlZGVudGlhbHMgYXJlIGV4cGlyZWQgb3Igbm90LlxuICAgICAqL1xuICAgIGlzRXhwaXJlZChhY2Nlc3NUb2tlbikge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuLmV4cGlyeV9kYXRlXG4gICAgICAgICAgICA/IG5vdyA+PSBhY2Nlc3NUb2tlbi5leHBpcnlfZGF0ZSAtIHRoaXMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSBsaXN0IG9mIHNjb3BlcyBmb3IgdGhlIHJlcXVlc3RlZCBHQ1AgYWNjZXNzIHRva2VuLlxuICAgICAqL1xuICAgIGdldFNjb3Blc0FycmF5KCkge1xuICAgICAgICAvLyBTaW5jZSBzY29wZXMgY2FuIGJlIHByb3ZpZGVkIGFzIHN0cmluZyBvciBhcnJheSwgdGhlIHR5cGUgc2hvdWxkXG4gICAgICAgIC8vIGJlIG5vcm1hbGl6ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zY29wZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuc2NvcGVzXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMgfHwgW0RFRkFVTFRfT0FVVEhfU0NPUEVdO1xuICAgIH1cbiAgICBnZXRNZXRyaWNzSGVhZGVyVmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IG5vZGVWZXJzaW9uID0gcHJvY2Vzcy52ZXJzaW9uLnJlcGxhY2UoL152LywgJycpO1xuICAgICAgICBjb25zdCBzYUltcGVyc29uYXRpb24gPSB0aGlzLnNlcnZpY2VBY2NvdW50SW1wZXJzb25hdGlvblVybCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBjcmVkZW50aWFsU291cmNlVHlwZSA9IHRoaXMuY3JlZGVudGlhbFNvdXJjZVR5cGVcbiAgICAgICAgICAgID8gdGhpcy5jcmVkZW50aWFsU291cmNlVHlwZVxuICAgICAgICAgICAgOiAndW5rbm93bic7XG4gICAgICAgIHJldHVybiBgZ2wtbm9kZS8ke25vZGVWZXJzaW9ufSBhdXRoLyR7c2hhcmVkX2Nqc18xLnBrZy52ZXJzaW9ufSBnb29nbGUtYnlvaWQtc2RrIHNvdXJjZS8ke2NyZWRlbnRpYWxTb3VyY2VUeXBlfSBzYS1pbXBlcnNvbmF0aW9uLyR7c2FJbXBlcnNvbmF0aW9ufSBjb25maWctbGlmZXRpbWUvJHt0aGlzLmNvbmZpZ0xpZmV0aW1lUmVxdWVzdGVkfWA7XG4gICAgfVxuICAgIGdldFRva2VuVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlblVybDtcbiAgICB9XG59XG5leHBvcnRzLkJhc2VFeHRlcm5hbEFjY291bnRDbGllbnQgPSBCYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZWV4dGVybmFsY2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GaWxlU3ViamVjdFRva2VuU3VwcGxpZXIgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuLy8gZnMucmVhZGZpbGUgaXMgdW5kZWZpbmVkIGluIGJyb3dzZXIga2FybWEgdGVzdHMgY2F1c2luZ1xuLy8gYG5wbSBydW4gYnJvd3Nlci10ZXN0YCB0byBmYWlsIGFzIHRlc3Qub2F1dGgyLnRzIGltcG9ydHMgdGhpcyBmaWxlIHZpYVxuLy8gc3JjL2luZGV4LnRzLlxuLy8gRmFsbGJhY2sgdG8gdm9pZCBmdW5jdGlvbiB0byBhdm9pZCBwcm9taXNpZnkgdGhyb3dpbmcgYSBUeXBlRXJyb3IuXG5jb25zdCByZWFkRmlsZSA9ICgwLCB1dGlsXzEucHJvbWlzaWZ5KShmcy5yZWFkRmlsZSA/PyAoKCkgPT4geyB9KSk7XG5jb25zdCByZWFscGF0aCA9ICgwLCB1dGlsXzEucHJvbWlzaWZ5KShmcy5yZWFscGF0aCA/PyAoKCkgPT4geyB9KSk7XG5jb25zdCBsc3RhdCA9ICgwLCB1dGlsXzEucHJvbWlzaWZ5KShmcy5sc3RhdCA/PyAoKCkgPT4geyB9KSk7XG4vKipcbiAqIEludGVybmFsIHN1YmplY3QgdG9rZW4gc3VwcGxpZXIgaW1wbGVtZW50YXRpb24gdXNlZCB3aGVuIGEgZmlsZSBsb2NhdGlvblxuICogaXMgY29uZmlndXJlZCBpbiB0aGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uIHVzZWQgdG8gYnVpbGQgYW4ge0BsaW5rIElkZW50aXR5UG9vbENsaWVudH1cbiAqL1xuY2xhc3MgRmlsZVN1YmplY3RUb2tlblN1cHBsaWVyIHtcbiAgICBmaWxlUGF0aDtcbiAgICBmb3JtYXRUeXBlO1xuICAgIHN1YmplY3RUb2tlbkZpZWxkTmFtZTtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBuZXcgZmlsZSBiYXNlZCBzdWJqZWN0IHRva2VuIHN1cHBsaWVyLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBmaWxlIHN1YmplY3QgdG9rZW4gc3VwcGxpZXIgb3B0aW9ucyB0byBidWlsZCB0aGUgc3VwcGxpZXJcbiAgICAgKiAgIHdpdGguXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB0aGlzLmZpbGVQYXRoID0gb3B0cy5maWxlUGF0aDtcbiAgICAgICAgdGhpcy5mb3JtYXRUeXBlID0gb3B0cy5mb3JtYXRUeXBlO1xuICAgICAgICB0aGlzLnN1YmplY3RUb2tlbkZpZWxkTmFtZSA9IG9wdHMuc3ViamVjdFRva2VuRmllbGROYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdWJqZWN0IHRva2VuIHN0b3JlZCBhdCB0aGUgZmlsZSBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtAbGluayBFeHRlcm5hbEFjY291bnRTdXBwbGllckNvbnRleHR9IGZyb20gdGhlIGNhbGxpbmdcbiAgICAgKiAgIHtAbGluayBJZGVudGl0eVBvb2xDbGllbnR9LCBjb250YWlucyB0aGUgcmVxdWVzdGVkIGF1ZGllbmNlIGFuZCBzdWJqZWN0XG4gICAgICogICB0b2tlbiB0eXBlIGZvciB0aGUgZXh0ZXJuYWwgYWNjb3VudCBpZGVudGl0eS4gTm90IHVzZWQuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0U3ViamVjdFRva2VuKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYSBmaWxlIGF0IHRoZSBwYXRoLiBsc3RhdFN5bmMgd2lsbCB0aHJvdyBpZiB0aGVyZSBpc1xuICAgICAgICAvLyBub3RoaW5nIHRoZXJlLlxuICAgICAgICBsZXQgcGFyc2VkRmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBwYXRoIHRvIGFjdHVhbCBmaWxlIGluIGNhc2Ugb2Ygc3ltbGluay4gRXhwZWN0IGEgdGhyb3duIGVycm9yXG4gICAgICAgICAgICAvLyBpZiBub3QgcmVzb2x2YWJsZS5cbiAgICAgICAgICAgIHBhcnNlZEZpbGVQYXRoID0gYXdhaXQgcmVhbHBhdGgocGFyc2VkRmlsZVBhdGgpO1xuICAgICAgICAgICAgaWYgKCEoYXdhaXQgbHN0YXQocGFyc2VkRmlsZVBhdGgpKS5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gYFRoZSBmaWxlIGF0ICR7cGFyc2VkRmlsZVBhdGh9IGRvZXMgbm90IGV4aXN0LCBvciBpdCBpcyBub3QgYSBmaWxlLiAke2Vyci5tZXNzYWdlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1YmplY3RUb2tlbjtcbiAgICAgICAgY29uc3QgcmF3VGV4dCA9IGF3YWl0IHJlYWRGaWxlKHBhcnNlZEZpbGVQYXRoLCB7IGVuY29kaW5nOiAndXRmOCcgfSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdFR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgc3ViamVjdFRva2VuID0gcmF3VGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvcm1hdFR5cGUgPT09ICdqc29uJyAmJiB0aGlzLnN1YmplY3RUb2tlbkZpZWxkTmFtZSkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmF3VGV4dCk7XG4gICAgICAgICAgICBzdWJqZWN0VG9rZW4gPSBqc29uW3RoaXMuc3ViamVjdFRva2VuRmllbGROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN1YmplY3RUb2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgdGhlIHN1YmplY3RfdG9rZW4gZnJvbSB0aGUgY3JlZGVudGlhbF9zb3VyY2UgZmlsZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJqZWN0VG9rZW47XG4gICAgfVxufVxuZXhwb3J0cy5GaWxlU3ViamVjdFRva2VuU3VwcGxpZXIgPSBGaWxlU3ViamVjdFRva2VuU3VwcGxpZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlc3ViamVjdHRva2Vuc3VwcGxpZXIuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVybFN1YmplY3RUb2tlblN1cHBsaWVyID0gdm9pZCAwO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbi8qKlxuICogSW50ZXJuYWwgc3ViamVjdCB0b2tlbiBzdXBwbGllciBpbXBsZW1lbnRhdGlvbiB1c2VkIHdoZW4gYSBVUkxcbiAqIGlzIGNvbmZpZ3VyZWQgaW4gdGhlIGNyZWRlbnRpYWwgY29uZmlndXJhdGlvbiB1c2VkIHRvIGJ1aWxkIGFuIHtAbGluayBJZGVudGl0eVBvb2xDbGllbnR9XG4gKi9cbmNsYXNzIFVybFN1YmplY3RUb2tlblN1cHBsaWVyIHtcbiAgICB1cmw7XG4gICAgaGVhZGVycztcbiAgICBmb3JtYXRUeXBlO1xuICAgIHN1YmplY3RUb2tlbkZpZWxkTmFtZTtcbiAgICBhZGRpdGlvbmFsR2F4aW9zT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBVUkwgc3ViamVjdCB0b2tlbiBzdXBwbGllci5cbiAgICAgKiBAcGFyYW0gb3B0cyBUaGUgVVJMIHN1YmplY3QgdG9rZW4gc3VwcGxpZXIgb3B0aW9ucyB0byBidWlsZCB0aGUgc3VwcGxpZXIgd2l0aC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHRoaXMudXJsID0gb3B0cy51cmw7XG4gICAgICAgIHRoaXMuZm9ybWF0VHlwZSA9IG9wdHMuZm9ybWF0VHlwZTtcbiAgICAgICAgdGhpcy5zdWJqZWN0VG9rZW5GaWVsZE5hbWUgPSBvcHRzLnN1YmplY3RUb2tlbkZpZWxkTmFtZTtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gb3B0cy5oZWFkZXJzO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxHYXhpb3NPcHRpb25zID0gb3B0cy5hZGRpdGlvbmFsR2F4aW9zT3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBHRVQgcmVxdWVzdCB0byB0aGUgVVJMIHByb3ZpZGVkIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgcmVzb2x2ZXNcbiAgICAgKiB3aXRoIHRoZSByZXR1cm5lZCBleHRlcm5hbCBzdWJqZWN0IHRva2VuLlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtAbGluayBFeHRlcm5hbEFjY291bnRTdXBwbGllckNvbnRleHR9IGZyb20gdGhlIGNhbGxpbmdcbiAgICAgKiAgIHtAbGluayBJZGVudGl0eVBvb2xDbGllbnR9LCBjb250YWlucyB0aGUgcmVxdWVzdGVkIGF1ZGllbmNlIGFuZCBzdWJqZWN0XG4gICAgICogICB0b2tlbiB0eXBlIGZvciB0aGUgZXh0ZXJuYWwgYWNjb3VudCBpZGVudGl0eS4gTm90IHVzZWQuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0U3ViamVjdFRva2VuKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuYWRkaXRpb25hbEdheGlvc09wdGlvbnMsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogdGhpcy5mb3JtYXRUeXBlLFxuICAgICAgICB9O1xuICAgICAgICBhdXRoY2xpZW50XzEuQXV0aENsaWVudC5zZXRNZXRob2ROYW1lKG9wdHMsICdnZXRTdWJqZWN0VG9rZW4nKTtcbiAgICAgICAgbGV0IHN1YmplY3RUb2tlbjtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRleHQudHJhbnNwb3J0ZXIucmVxdWVzdChvcHRzKTtcbiAgICAgICAgICAgIHN1YmplY3RUb2tlbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb3JtYXRUeXBlID09PSAnanNvbicgJiYgdGhpcy5zdWJqZWN0VG9rZW5GaWVsZE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udGV4dC50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICAgICAgc3ViamVjdFRva2VuID0gcmVzcG9uc2UuZGF0YVt0aGlzLnN1YmplY3RUb2tlbkZpZWxkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdWJqZWN0VG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIHRoZSBzdWJqZWN0X3Rva2VuIGZyb20gdGhlIGNyZWRlbnRpYWxfc291cmNlIFVSTCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJqZWN0VG9rZW47XG4gICAgfVxufVxuZXhwb3J0cy5VcmxTdWJqZWN0VG9rZW5TdXBwbGllciA9IFVybFN1YmplY3RUb2tlblN1cHBsaWVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsc3ViamVjdHRva2Vuc3VwcGxpZXIuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjUgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNlcnRpZmljYXRlU3ViamVjdFRva2VuU3VwcGxpZXIgPSBleHBvcnRzLkludmFsaWRDb25maWd1cmF0aW9uRXJyb3IgPSBleHBvcnRzLkNlcnRpZmljYXRlU291cmNlVW5hdmFpbGFibGVFcnJvciA9IGV4cG9ydHMuQ0VSVElGSUNBVEVfQ09ORklHVVJBVElPTl9FTlZfVkFSSUFCTEUgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgY3J5cHRvXzEgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG5leHBvcnRzLkNFUlRJRklDQVRFX0NPTkZJR1VSQVRJT05fRU5WX1ZBUklBQkxFID0gJ0dPT0dMRV9BUElfQ0VSVElGSUNBVEVfQ09ORklHJztcbi8qKlxuICogVGhyb3duIHdoZW4gdGhlIGNlcnRpZmljYXRlIHNvdXJjZSBjYW5ub3QgYmUgbG9jYXRlZCBvciBhY2Nlc3NlZC5cbiAqL1xuY2xhc3MgQ2VydGlmaWNhdGVTb3VyY2VVbmF2YWlsYWJsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdDZXJ0aWZpY2F0ZVNvdXJjZVVuYXZhaWxhYmxlRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2VydGlmaWNhdGVTb3VyY2VVbmF2YWlsYWJsZUVycm9yID0gQ2VydGlmaWNhdGVTb3VyY2VVbmF2YWlsYWJsZUVycm9yO1xuLyoqXG4gKiBUaHJvd24gZm9yIGludmFsaWQgY29uZmlndXJhdGlvbiB0aGF0IGlzIG5vdCByZWxhdGVkIHRvIGZpbGUgYXZhaWxhYmlsaXR5LlxuICovXG5jbGFzcyBJbnZhbGlkQ29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQ29uZmlndXJhdGlvbkVycm9yJztcbiAgICB9XG59XG5leHBvcnRzLkludmFsaWRDb25maWd1cmF0aW9uRXJyb3IgPSBJbnZhbGlkQ29uZmlndXJhdGlvbkVycm9yO1xuLyoqXG4gKiBBIHN1YmplY3QgdG9rZW4gc3VwcGxpZXIgdGhhdCB1c2VzIGEgY2xpZW50IGNlcnRpZmljYXRlIGZvciBhdXRoZW50aWNhdGlvbi5cbiAqIEl0IHByb3ZpZGVzIHRoZSBjZXJ0aWZpY2F0ZSBjaGFpbiBhcyB0aGUgc3ViamVjdCB0b2tlbiBmb3IgaWRlbnRpdHkgZmVkZXJhdGlvbi5cbiAqL1xuY2xhc3MgQ2VydGlmaWNhdGVTdWJqZWN0VG9rZW5TdXBwbGllciB7XG4gICAgY2VydGlmaWNhdGVDb25maWdQYXRoO1xuICAgIHRydXN0Q2hhaW5QYXRoO1xuICAgIGNlcnQ7XG4gICAga2V5O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBDZXJ0aWZpY2F0ZVN1YmplY3RUb2tlblN1cHBsaWVyLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBzdXBwbGllci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cy51c2VEZWZhdWx0Q2VydGlmaWNhdGVDb25maWcgJiYgIW9wdHMuY2VydGlmaWNhdGVDb25maWdMb2NhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRDb25maWd1cmF0aW9uRXJyb3IoJ0VpdGhlciBgdXNlRGVmYXVsdENlcnRpZmljYXRlQ29uZmlnYCBtdXN0IGJlIHRydWUgb3IgYSBgY2VydGlmaWNhdGVDb25maWdMb2NhdGlvbmAgbXVzdCBiZSBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy51c2VEZWZhdWx0Q2VydGlmaWNhdGVDb25maWcgJiYgb3B0cy5jZXJ0aWZpY2F0ZUNvbmZpZ0xvY2F0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENvbmZpZ3VyYXRpb25FcnJvcignQm90aCBgdXNlRGVmYXVsdENlcnRpZmljYXRlQ29uZmlnYCBhbmQgYGNlcnRpZmljYXRlQ29uZmlnTG9jYXRpb25gIGNhbm5vdCBiZSBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRydXN0Q2hhaW5QYXRoID0gb3B0cy50cnVzdENoYWluUGF0aDtcbiAgICAgICAgdGhpcy5jZXJ0aWZpY2F0ZUNvbmZpZ1BhdGggPSBvcHRzLmNlcnRpZmljYXRlQ29uZmlnTG9jYXRpb24gPz8gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSFRUUFMgYWdlbnQgY29uZmlndXJlZCB3aXRoIHRoZSBjbGllbnQgY2VydGlmaWNhdGUgYW5kIHByaXZhdGUga2V5IGZvciBtVExTLlxuICAgICAqIEByZXR1cm5zIEFuIG1UTFMtY29uZmlndXJlZCBodHRwcy5BZ2VudC5cbiAgICAgKi9cbiAgICBhc3luYyBjcmVhdGVNdGxzSHR0cHNBZ2VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleSB8fCAhdGhpcy5jZXJ0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENvbmZpZ3VyYXRpb25FcnJvcignQ2Fubm90IGNyZWF0ZSBtVExTIEFnZW50IHdpdGggbWlzc2luZyBjZXJ0aWZpY2F0ZSBvciBrZXknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGh0dHBzLkFnZW50KHsga2V5OiB0aGlzLmtleSwgY2VydDogdGhpcy5jZXJ0IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIHRoZSBzdWJqZWN0IHRva2VuLCB3aGljaCBpcyB0aGUgYmFzZTY0LWVuY29kZWQgY2VydGlmaWNhdGUgY2hhaW4uXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc3ViamVjdCB0b2tlbi5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRTdWJqZWN0VG9rZW4oKSB7XG4gICAgICAgIC8vIFRoZSBcInN1YmplY3QgdG9rZW5cIiBpbiB0aGlzIGNvbnRleHQgaXMgdGhlIHByb2Nlc3NlZCBjZXJ0aWZpY2F0ZSBjaGFpbi5cbiAgICAgICAgdGhpcy5jZXJ0aWZpY2F0ZUNvbmZpZ1BhdGggPSBhd2FpdCB0aGlzLiNyZXNvbHZlQ2VydGlmaWNhdGVDb25maWdGaWxlUGF0aCgpO1xuICAgICAgICBjb25zdCB7IGNlcnRQYXRoLCBrZXlQYXRoIH0gPSBhd2FpdCB0aGlzLiNnZXRDZXJ0QW5kS2V5UGF0aHMoKTtcbiAgICAgICAgKHsgY2VydDogdGhpcy5jZXJ0LCBrZXk6IHRoaXMua2V5IH0gPSBhd2FpdCB0aGlzLiNnZXRLZXlBbmRDZXJ0KGNlcnRQYXRoLCBrZXlQYXRoKSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNwcm9jZXNzQ2hhaW5Gcm9tUGF0aHModGhpcy5jZXJ0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIGNlcnRpZmljYXRlIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqIGJ5IGNoZWNraW5nIHRoZSBcImNlcnRpZmljYXRlX2NvbmZpZ19sb2NhdGlvblwiIHByb3ZpZGVkIGluIHRoZSBBREMgZmlsZSxcbiAgICAgKiBvciB0aGUgXCJHT09HTEVfQVBJX0NFUlRJRklDQVRFX0NPTkZJR1wiIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgICogb3IgaW4gdGhlIGRlZmF1bHQgZ2Nsb3VkIHBhdGguXG4gICAgICogQHBhcmFtIG92ZXJyaWRlUGF0aCBBbiBvcHRpb25hbCBwYXRoIHRvIGNoZWNrIGZpcnN0LlxuICAgICAqIEByZXR1cm5zIFRoZSByZXNvbHZlZCBmaWxlIHBhdGguXG4gICAgICovXG4gICAgYXN5bmMgI3Jlc29sdmVDZXJ0aWZpY2F0ZUNvbmZpZ0ZpbGVQYXRoKCkge1xuICAgICAgICAvLyAxLiBDaGVjayBmb3IgdGhlIG92ZXJyaWRlIHBhdGggZnJvbSBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgICAgICBjb25zdCBvdmVycmlkZVBhdGggPSB0aGlzLmNlcnRpZmljYXRlQ29uZmlnUGF0aDtcbiAgICAgICAgaWYgKG92ZXJyaWRlUGF0aCkge1xuICAgICAgICAgICAgaWYgKGF3YWl0ICgwLCB1dGlsXzEuaXNWYWxpZEZpbGUpKG92ZXJyaWRlUGF0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGVQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IENlcnRpZmljYXRlU291cmNlVW5hdmFpbGFibGVFcnJvcihgUHJvdmlkZWQgY2VydGlmaWNhdGUgY29uZmlnIHBhdGggaXMgaW52YWxpZDogJHtvdmVycmlkZVBhdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMi4gQ2hlY2sgdGhlIHN0YW5kYXJkIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICAgICAgICBjb25zdCBlbnZQYXRoID0gcHJvY2Vzcy5lbnZbZXhwb3J0cy5DRVJUSUZJQ0FURV9DT05GSUdVUkFUSU9OX0VOVl9WQVJJQUJMRV07XG4gICAgICAgIGlmIChlbnZQYXRoKSB7XG4gICAgICAgICAgICBpZiAoYXdhaXQgKDAsIHV0aWxfMS5pc1ZhbGlkRmlsZSkoZW52UGF0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW52UGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBDZXJ0aWZpY2F0ZVNvdXJjZVVuYXZhaWxhYmxlRXJyb3IoYFBhdGggZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZSBcIiR7ZXhwb3J0cy5DRVJUSUZJQ0FURV9DT05GSUdVUkFUSU9OX0VOVl9WQVJJQUJMRX1cIiBpcyBpbnZhbGlkOiAke2VudlBhdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4gQ2hlY2sgdGhlIHdlbGwta25vd24gZ2Nsb3VkIGNvbmZpZyBsb2NhdGlvbi5cbiAgICAgICAgY29uc3Qgd2VsbEtub3duUGF0aCA9ICgwLCB1dGlsXzEuZ2V0V2VsbEtub3duQ2VydGlmaWNhdGVDb25maWdGaWxlTG9jYXRpb24pKCk7XG4gICAgICAgIGlmIChhd2FpdCAoMCwgdXRpbF8xLmlzVmFsaWRGaWxlKSh3ZWxsS25vd25QYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHdlbGxLbm93blBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNC4gSWYgbm9uZSBhcmUgZm91bmQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICB0aHJvdyBuZXcgQ2VydGlmaWNhdGVTb3VyY2VVbmF2YWlsYWJsZUVycm9yKCdDb3VsZCBub3QgZmluZCBjZXJ0aWZpY2F0ZSBjb25maWd1cmF0aW9uIGZpbGUuIFNlYXJjaGVkIG92ZXJyaWRlIHBhdGgsICcgK1xuICAgICAgICAgICAgYHRoZSBcIiR7ZXhwb3J0cy5DRVJUSUZJQ0FURV9DT05GSUdVUkFUSU9OX0VOVl9WQVJJQUJMRX1cIiBlbnYgdmFyLCBhbmQgdGhlIGdjbG91ZCBwYXRoICgke3dlbGxLbm93blBhdGh9KS5gKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhZHMgYW5kIHBhcnNlcyB0aGUgY2VydGlmaWNhdGUgY29uZmlnIEpTT04gZmlsZSB0byBleHRyYWN0IHRoZSBjZXJ0aWZpY2F0ZSBhbmQga2V5IHBhdGhzLlxuICAgICAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjZXJ0aWZpY2F0ZSBhbmQga2V5IHBhdGhzLlxuICAgICAqL1xuICAgIGFzeW5jICNnZXRDZXJ0QW5kS2V5UGF0aHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSB0aGlzLmNlcnRpZmljYXRlQ29uZmlnUGF0aDtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50cztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbGVDb250ZW50cyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGNvbmZpZ1BhdGgsICd1dGY4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENlcnRpZmljYXRlU291cmNlVW5hdmFpbGFibGVFcnJvcihgRmFpbGVkIHRvIHJlYWQgY2VydGlmaWNhdGUgY29uZmlnIGZpbGUgYXQ6ICR7Y29uZmlnUGF0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShmaWxlQ29udGVudHMpO1xuICAgICAgICAgICAgY29uc3QgY2VydFBhdGggPSBjb25maWc/LmNlcnRfY29uZmlncz8ud29ya2xvYWQ/LmNlcnRfcGF0aDtcbiAgICAgICAgICAgIGNvbnN0IGtleVBhdGggPSBjb25maWc/LmNlcnRfY29uZmlncz8ud29ya2xvYWQ/LmtleV9wYXRoO1xuICAgICAgICAgICAgaWYgKCFjZXJ0UGF0aCB8fCAha2V5UGF0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQ29uZmlndXJhdGlvbkVycm9yKGBDZXJ0aWZpY2F0ZSBjb25maWcgZmlsZSAoJHtjb25maWdQYXRofSkgaXMgbWlzc2luZyByZXF1aXJlZCBcImNlcnRfcGF0aFwiIG9yIFwia2V5X3BhdGhcIiBpbiB0aGUgd29ya2xvYWQgY29uZmlnLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgY2VydFBhdGgsIGtleVBhdGggfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnZhbGlkQ29uZmlndXJhdGlvbkVycm9yKVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENvbmZpZ3VyYXRpb25FcnJvcihgRmFpbGVkIHRvIHBhcnNlIGNlcnRpZmljYXRlIGNvbmZpZyBmcm9tICR7Y29uZmlnUGF0aH06ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWRzIGFuZCBwYXJzZXMgdGhlIGNlcnQgYW5kIGtleSBmaWxlcyBnZXQgdGhlaXIgY29udGVudCBhbmQgY2hlY2sgdmFsaWQgZm9ybWF0LlxuICAgICAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjZXJ0IGNvbnRlbnQgYW5kIGtleSBjb250ZW50IGluIGJ1ZmZlciBmb3JtYXQuXG4gICAgICovXG4gICAgYXN5bmMgI2dldEtleUFuZENlcnQoY2VydFBhdGgsIGtleVBhdGgpIHtcbiAgICAgICAgbGV0IGNlcnQsIGtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNlcnQgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZShjZXJ0UGF0aCk7XG4gICAgICAgICAgICBuZXcgY3J5cHRvXzEuWDUwOUNlcnRpZmljYXRlKGNlcnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ2VydGlmaWNhdGVTb3VyY2VVbmF2YWlsYWJsZUVycm9yKGBGYWlsZWQgdG8gcmVhZCBjZXJ0aWZpY2F0ZSBmaWxlIGF0ICR7Y2VydFBhdGh9OiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGtleSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGtleVBhdGgpO1xuICAgICAgICAgICAgKDAsIGNyeXB0b18xLmNyZWF0ZVByaXZhdGVLZXkpKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBDZXJ0aWZpY2F0ZVNvdXJjZVVuYXZhaWxhYmxlRXJyb3IoYEZhaWxlZCB0byByZWFkIHByaXZhdGUga2V5IGZpbGUgYXQgJHtrZXlQYXRofTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNlcnQsIGtleSB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFkcyB0aGUgbGVhZiBjZXJ0aWZpY2F0ZSBhbmQgdHJ1c3QgY2hhaW4sIGNvbWJpbmVzIHRoZW0sXG4gICAgICogYW5kIHJldHVybnMgYSBKU09OIGFycmF5IG9mIGJhc2U2NC1lbmNvZGVkIGNlcnRpZmljYXRlcy5cbiAgICAgKiBAcmV0dXJucyBBIHN0cmluZ2lmaWVkIEpTT04gYXJyYXkgb2YgdGhlIGNlcnRpZmljYXRlIGNoYWluLlxuICAgICAqL1xuICAgIGFzeW5jICNwcm9jZXNzQ2hhaW5Gcm9tUGF0aHMobGVhZkNlcnRCdWZmZXIpIHtcbiAgICAgICAgY29uc3QgbGVhZkNlcnQgPSBuZXcgY3J5cHRvXzEuWDUwOUNlcnRpZmljYXRlKGxlYWZDZXJ0QnVmZmVyKTtcbiAgICAgICAgLy8gSWYgbm8gdHJ1c3QgY2hhaW4gaXMgcHJvdmlkZWQsIGp1c3QgdXNlIHRoZSBzdWNjZXNzZnVsbHkgcGFyc2VkIGxlYWYgY2VydGlmaWNhdGUuXG4gICAgICAgIGlmICghdGhpcy50cnVzdENoYWluUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFtsZWFmQ2VydC5yYXcudG9TdHJpbmcoJ2Jhc2U2NCcpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIHRoZSB0cnVzdCBjaGFpbiBsb2dpYy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYWluUGVtcyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKHRoaXMudHJ1c3RDaGFpblBhdGgsICd1dGY4Jyk7XG4gICAgICAgICAgICBjb25zdCBwZW1CbG9ja3MgPSBjaGFpblBlbXMubWF0Y2goLy0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLVteLV0rLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLS9nKSA/PyBbXTtcbiAgICAgICAgICAgIGNvbnN0IGNoYWluQ2VydHMgPSBwZW1CbG9ja3MubWFwKChwZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBjcnlwdG9fMS5YNTA5Q2VydGlmaWNhdGUocGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaHJvdyBhIG1vcmUgcHJlY2lzZSBlcnJvciBpZiBhIHNpbmdsZSBjZXJ0aWZpY2F0ZSBpbiB0aGUgY2hhaW4gaXMgaW52YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRDb25maWd1cmF0aW9uRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBjZXJ0aWZpY2F0ZSBhdCBpbmRleCAke2luZGV4fSBpbiB0cnVzdCBjaGFpbiBmaWxlICR7dGhpcy50cnVzdENoYWluUGF0aH06ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGxlYWZJbmRleCA9IGNoYWluQ2VydHMuZmluZEluZGV4KGNoYWluQ2VydCA9PiBsZWFmQ2VydC5yYXcuZXF1YWxzKGNoYWluQ2VydC5yYXcpKTtcbiAgICAgICAgICAgIGxldCBmaW5hbENoYWluO1xuICAgICAgICAgICAgaWYgKGxlYWZJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBMZWFmIG5vdCBmb3VuZCwgc28gcHJlcGVuZCBpdCB0byB0aGUgY2hhaW4uXG4gICAgICAgICAgICAgICAgZmluYWxDaGFpbiA9IFtsZWFmQ2VydCwgLi4uY2hhaW5DZXJ0c107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZWFmSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBMZWFmIGlzIGFscmVhZHkgdGhlIGZpcnN0IGVsZW1lbnQsIHNvIHRoZSBjaGFpbiBpcyBjb3JyZWN0bHkgb3JkZXJlZC5cbiAgICAgICAgICAgICAgICBmaW5hbENoYWluID0gY2hhaW5DZXJ0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExlYWYgaXMgaW4gdGhlIGNoYWluIGJ1dCBub3QgYXQgdGhlIHRvcCwgd2hpY2ggaXMgaW52YWxpZC5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENvbmZpZ3VyYXRpb25FcnJvcihgTGVhZiBjZXJ0aWZpY2F0ZSBleGlzdHMgaW4gdGhlIHRydXN0IGNoYWluIGJ1dCBpcyBub3QgdGhlIGZpcnN0IGVudHJ5IChmb3VuZCBhdCBpbmRleCAke2xlYWZJbmRleH0pLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbmFsQ2hhaW4ubWFwKGNlcnQgPT4gY2VydC5yYXcudG9TdHJpbmcoJ2Jhc2U2NCcpKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gUmUtdGhyb3cgb3VyIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZXJyb3JzLlxuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEludmFsaWRDb25maWd1cmF0aW9uRXJyb3IpXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBDZXJ0aWZpY2F0ZVNvdXJjZVVuYXZhaWxhYmxlRXJyb3IoYEZhaWxlZCB0byBwcm9jZXNzIGNlcnRpZmljYXRlIGNoYWluIGZyb20gJHt0aGlzLnRydXN0Q2hhaW5QYXRofTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5DZXJ0aWZpY2F0ZVN1YmplY3RUb2tlblN1cHBsaWVyID0gQ2VydGlmaWNhdGVTdWJqZWN0VG9rZW5TdXBwbGllcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlcnRpZmljYXRlc3ViamVjdHRva2Vuc3VwcGxpZXIuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklkZW50aXR5UG9vbENsaWVudCA9IHZvaWQgMDtcbmNvbnN0IGJhc2VleHRlcm5hbGNsaWVudF8xID0gcmVxdWlyZShcIi4vYmFzZWV4dGVybmFsY2xpZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBmaWxlc3ViamVjdHRva2Vuc3VwcGxpZXJfMSA9IHJlcXVpcmUoXCIuL2ZpbGVzdWJqZWN0dG9rZW5zdXBwbGllclwiKTtcbmNvbnN0IHVybHN1YmplY3R0b2tlbnN1cHBsaWVyXzEgPSByZXF1aXJlKFwiLi91cmxzdWJqZWN0dG9rZW5zdXBwbGllclwiKTtcbmNvbnN0IGNlcnRpZmljYXRlc3ViamVjdHRva2Vuc3VwcGxpZXJfMSA9IHJlcXVpcmUoXCIuL2NlcnRpZmljYXRlc3ViamVjdHRva2Vuc3VwcGxpZXJcIik7XG5jb25zdCBzdHNjcmVkZW50aWFsc18xID0gcmVxdWlyZShcIi4vc3RzY3JlZGVudGlhbHNcIik7XG5jb25zdCBnYXhpb3NfMSA9IHJlcXVpcmUoXCJnYXhpb3NcIik7XG4vKipcbiAqIERlZmluZXMgdGhlIFVybC1zb3VyY2VkIGFuZCBmaWxlLXNvdXJjZWQgZXh0ZXJuYWwgYWNjb3VudCBjbGllbnRzIG1haW5seVxuICogdXNlZCBmb3IgSzhzIGFuZCBBenVyZSB3b3JrbG9hZHMuXG4gKi9cbmNsYXNzIElkZW50aXR5UG9vbENsaWVudCBleHRlbmRzIGJhc2VleHRlcm5hbGNsaWVudF8xLkJhc2VFeHRlcm5hbEFjY291bnRDbGllbnQge1xuICAgIHN1YmplY3RUb2tlblN1cHBsaWVyO1xuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlIGFuIElkZW50aXR5UG9vbENsaWVudCBpbnN0YW5jZSB1c2luZyB0aGUgcHJvdmlkZWQgSlNPTlxuICAgICAqIG9iamVjdCBsb2FkZWQgZnJvbSBhbiBleHRlcm5hbCBhY2NvdW50IGNyZWRlbnRpYWxzIGZpbGUuXG4gICAgICogQW4gZXJyb3IgaXMgdGhyb3duIGlmIHRoZSBjcmVkZW50aWFsIGlzIG5vdCBhIHZhbGlkIGZpbGUtc291cmNlZCBvclxuICAgICAqIHVybC1zb3VyY2VkIGNyZWRlbnRpYWwgb3IgYSB3b3JrZm9yY2UgcG9vbCB1c2VyIHByb2plY3QgaXMgcHJvdmlkZWRcbiAgICAgKiB3aXRoIGEgbm9uIHdvcmtmb3JjZSBhdWRpZW5jZS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgZXh0ZXJuYWwgYWNjb3VudCBvcHRpb25zIG9iamVjdCB0eXBpY2FsbHkgbG9hZGVkXG4gICAgICogICBmcm9tIHRoZSBleHRlcm5hbCBhY2NvdW50IEpTT04gY3JlZGVudGlhbCBmaWxlLiBUaGUgY2FtZWxDYXNlZCBvcHRpb25zXG4gICAgICogICBhcmUgYWxpYXNlcyBmb3IgdGhlIHNuYWtlX2Nhc2VkIG9wdGlvbnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgY29uc3Qgb3B0cyA9ICgwLCB1dGlsXzEub3JpZ2luYWxPckNhbWVsT3B0aW9ucykob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxTb3VyY2UgPSBvcHRzLmdldCgnY3JlZGVudGlhbF9zb3VyY2UnKTtcbiAgICAgICAgY29uc3Qgc3ViamVjdFRva2VuU3VwcGxpZXIgPSBvcHRzLmdldCgnc3ViamVjdF90b2tlbl9zdXBwbGllcicpO1xuICAgICAgICAvLyBWYWxpZGF0ZSBjcmVkZW50aWFsIHNvdXJjaW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgIGlmICghY3JlZGVudGlhbFNvdXJjZSAmJiAhc3ViamVjdFRva2VuU3VwcGxpZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBjcmVkZW50aWFsIHNvdXJjZSBvciBzdWJqZWN0IHRva2VuIHN1cHBsaWVyIG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcmVkZW50aWFsU291cmNlICYmIHN1YmplY3RUb2tlblN1cHBsaWVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgb25lIG9mIGNyZWRlbnRpYWwgc291cmNlIG9yIHN1YmplY3QgdG9rZW4gc3VwcGxpZXIgY2FuIGJlIHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ViamVjdFRva2VuU3VwcGxpZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdFRva2VuU3VwcGxpZXIgPSBzdWJqZWN0VG9rZW5TdXBwbGllcjtcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbFNvdXJjZVR5cGUgPSAncHJvZ3JhbW1hdGljJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWRlbnRpYWxTb3VyY2VPcHRzID0gKDAsIHV0aWxfMS5vcmlnaW5hbE9yQ2FtZWxPcHRpb25zKShjcmVkZW50aWFsU291cmNlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdE9wdHMgPSAoMCwgdXRpbF8xLm9yaWdpbmFsT3JDYW1lbE9wdGlvbnMpKGNyZWRlbnRpYWxTb3VyY2VPcHRzLmdldCgnZm9ybWF0JykpO1xuICAgICAgICAgICAgLy8gVGV4dCBpcyB0aGUgZGVmYXVsdCBmb3JtYXQgdHlwZS5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFR5cGUgPSBmb3JtYXRPcHRzLmdldCgndHlwZScpIHx8ICd0ZXh0JztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFN1YmplY3RUb2tlbkZpZWxkTmFtZSA9IGZvcm1hdE9wdHMuZ2V0KCdzdWJqZWN0X3Rva2VuX2ZpZWxkX25hbWUnKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXRUeXBlICE9PSAnanNvbicgJiYgZm9ybWF0VHlwZSAhPT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNyZWRlbnRpYWxfc291cmNlIGZvcm1hdCBcIiR7Zm9ybWF0VHlwZX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZvcm1hdFR5cGUgPT09ICdqc29uJyAmJiAhZm9ybWF0U3ViamVjdFRva2VuRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHN1YmplY3RfdG9rZW5fZmllbGRfbmFtZSBmb3IgSlNPTiBjcmVkZW50aWFsX3NvdXJjZSBmb3JtYXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBjcmVkZW50aWFsU291cmNlT3B0cy5nZXQoJ2ZpbGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGNyZWRlbnRpYWxTb3VyY2VPcHRzLmdldCgndXJsJyk7XG4gICAgICAgICAgICBjb25zdCBjZXJ0aWZpY2F0ZSA9IGNyZWRlbnRpYWxTb3VyY2VPcHRzLmdldCgnY2VydGlmaWNhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBjcmVkZW50aWFsU291cmNlT3B0cy5nZXQoJ2hlYWRlcnMnKTtcbiAgICAgICAgICAgIGlmICgoZmlsZSAmJiB1cmwpIHx8ICh1cmwgJiYgY2VydGlmaWNhdGUpIHx8IChmaWxlICYmIGNlcnRpZmljYXRlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWQgSWRlbnRpdHkgUG9vbCBcImNyZWRlbnRpYWxfc291cmNlXCIgcHJvdmlkZWQsIG11c3QgYmUgZWl0aGVyIGZpbGUsIHVybCwgb3IgY2VydGlmaWNhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsU291cmNlVHlwZSA9ICdmaWxlJztcbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RUb2tlblN1cHBsaWVyID0gbmV3IGZpbGVzdWJqZWN0dG9rZW5zdXBwbGllcl8xLkZpbGVTdWJqZWN0VG9rZW5TdXBwbGllcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRUeXBlOiBmb3JtYXRUeXBlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0VG9rZW5GaWVsZE5hbWU6IGZvcm1hdFN1YmplY3RUb2tlbkZpZWxkTmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbFNvdXJjZVR5cGUgPSAndXJsJztcbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RUb2tlblN1cHBsaWVyID0gbmV3IHVybHN1YmplY3R0b2tlbnN1cHBsaWVyXzEuVXJsU3ViamVjdFRva2VuU3VwcGxpZXIoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0VHlwZTogZm9ybWF0VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdFRva2VuRmllbGROYW1lOiBmb3JtYXRTdWJqZWN0VG9rZW5GaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxHYXhpb3NPcHRpb25zOiBJZGVudGl0eVBvb2xDbGllbnQuUkVUUllfQ09ORklHLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2VydGlmaWNhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxTb3VyY2VUeXBlID0gJ2NlcnRpZmljYXRlJztcbiAgICAgICAgICAgICAgICBjb25zdCBjZXJ0aWZpY2F0ZVN1YmplY3R0b2tlbnN1cHBsaWVyID0gbmV3IGNlcnRpZmljYXRlc3ViamVjdHRva2Vuc3VwcGxpZXJfMS5DZXJ0aWZpY2F0ZVN1YmplY3RUb2tlblN1cHBsaWVyKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlRGVmYXVsdENlcnRpZmljYXRlQ29uZmlnOiBjZXJ0aWZpY2F0ZS51c2VfZGVmYXVsdF9jZXJ0aWZpY2F0ZV9jb25maWcsXG4gICAgICAgICAgICAgICAgICAgIGNlcnRpZmljYXRlQ29uZmlnTG9jYXRpb246IGNlcnRpZmljYXRlLmNlcnRpZmljYXRlX2NvbmZpZ19sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdHJ1c3RDaGFpblBhdGg6IGNlcnRpZmljYXRlLnRydXN0X2NoYWluX3BhdGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0VG9rZW5TdXBwbGllciA9IGNlcnRpZmljYXRlU3ViamVjdHRva2Vuc3VwcGxpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkIElkZW50aXR5IFBvb2wgXCJjcmVkZW50aWFsX3NvdXJjZVwiIHByb3ZpZGVkLCBtdXN0IGJlIGVpdGhlciBmaWxlLCB1cmwsIG9yIGNlcnRpZmljYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgZXh0ZXJuYWwgc3ViamVjdCB0b2tlbiBpcyBuZWVkZWQgdG8gYmUgZXhjaGFuZ2VkIGZvciBhIEdDUFxuICAgICAqIGFjY2VzcyB0b2tlbiB2aWEgR0NQIFNUUyBlbmRwb2ludC4gR2V0cyBhIHN1YmplY3QgdG9rZW4gYnkgY2FsbGluZ1xuICAgICAqIHRoZSBjb25maWd1cmVkIHtAbGluayBTdWJqZWN0VG9rZW5TdXBwbGllcn1cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGV4dGVybmFsIHN1YmplY3QgdG9rZW4uXG4gICAgICovXG4gICAgYXN5bmMgcmV0cmlldmVTdWJqZWN0VG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IHN1YmplY3RUb2tlbiA9IGF3YWl0IHRoaXMuc3ViamVjdFRva2VuU3VwcGxpZXIuZ2V0U3ViamVjdFRva2VuKHRoaXMuc3VwcGxpZXJDb250ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuc3ViamVjdFRva2VuU3VwcGxpZXIgaW5zdGFuY2VvZiBjZXJ0aWZpY2F0ZXN1YmplY3R0b2tlbnN1cHBsaWVyXzEuQ2VydGlmaWNhdGVTdWJqZWN0VG9rZW5TdXBwbGllcikge1xuICAgICAgICAgICAgY29uc3QgbXRsc0FnZW50ID0gYXdhaXQgdGhpcy5zdWJqZWN0VG9rZW5TdXBwbGllci5jcmVhdGVNdGxzSHR0cHNBZ2VudCgpO1xuICAgICAgICAgICAgdGhpcy5zdHNDcmVkZW50aWFsID0gbmV3IHN0c2NyZWRlbnRpYWxzXzEuU3RzQ3JlZGVudGlhbHMoe1xuICAgICAgICAgICAgICAgIHRva2VuRXhjaGFuZ2VFbmRwb2ludDogdGhpcy5nZXRUb2tlblVybCgpLFxuICAgICAgICAgICAgICAgIGNsaWVudEF1dGhlbnRpY2F0aW9uOiB0aGlzLmNsaWVudEF1dGgsXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0ZXI6IG5ldyBnYXhpb3NfMS5HYXhpb3MoeyBhZ2VudDogbXRsc0FnZW50IH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydGVyID0gbmV3IGdheGlvc18xLkdheGlvcyh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMudHJhbnNwb3J0ZXIuZGVmYXVsdHMgfHwge30pLFxuICAgICAgICAgICAgICAgIGFnZW50OiBtdGxzQWdlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ViamVjdFRva2VuO1xuICAgIH1cbn1cbmV4cG9ydHMuSWRlbnRpdHlQb29sQ2xpZW50ID0gSWRlbnRpdHlQb29sQ2xpZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHlwb29sY2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bd3NSZXF1ZXN0U2lnbmVyID0gdm9pZCAwO1xuY29uc3QgZ2F4aW9zXzEgPSByZXF1aXJlKFwiZ2F4aW9zXCIpO1xuY29uc3QgY3J5cHRvXzEgPSByZXF1aXJlKFwiLi4vY3J5cHRvL2NyeXB0b1wiKTtcbi8qKiBBV1MgU2lnbmF0dXJlIFZlcnNpb24gNCBzaWduaW5nIGFsZ29yaXRobSBpZGVudGlmaWVyLiAgKi9cbmNvbnN0IEFXU19BTEdPUklUSE0gPSAnQVdTNC1ITUFDLVNIQTI1Nic7XG4vKipcbiAqIFRoZSB0ZXJtaW5hdGlvbiBzdHJpbmcgZm9yIHRoZSBBV1MgY3JlZGVudGlhbCBzY29wZSB2YWx1ZSBhcyBkZWZpbmVkIGluXG4gKiBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vZ2VuZXJhbC9sYXRlc3QvZ3Ivc2lndjQtY3JlYXRlLXN0cmluZy10by1zaWduLmh0bWxcbiAqL1xuY29uc3QgQVdTX1JFUVVFU1RfVFlQRSA9ICdhd3M0X3JlcXVlc3QnO1xuLyoqXG4gKiBJbXBsZW1lbnRzIGFuIEFXUyBBUEkgcmVxdWVzdCBzaWduZXIgYmFzZWQgb24gdGhlIEFXUyBTaWduYXR1cmUgVmVyc2lvbiA0XG4gKiBzaWduaW5nIHByb2Nlc3MuXG4gKiBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vZ2VuZXJhbC9sYXRlc3QvZ3Ivc2lnbmF0dXJlLXZlcnNpb24tNC5odG1sXG4gKi9cbmNsYXNzIEF3c1JlcXVlc3RTaWduZXIge1xuICAgIGdldENyZWRlbnRpYWxzO1xuICAgIHJlZ2lvbjtcbiAgICBjcnlwdG87XG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGVzIGFuIEFXUyBBUEkgcmVxdWVzdCBzaWduZXIgdXNlZCB0byBzZW5kIGF1dGhlbnRpY2F0ZWQgc2lnbmVkXG4gICAgICogcmVxdWVzdHMgdG8gQVdTIEFQSXMgYmFzZWQgb24gdGhlIEFXUyBTaWduYXR1cmUgVmVyc2lvbiA0IHNpZ25pbmcgcHJvY2Vzcy5cbiAgICAgKiBUaGlzIGFsc28gcHJvdmlkZXMgYSBtZWNoYW5pc20gdG8gZ2VuZXJhdGUgdGhlIHNpZ25lZCByZXF1ZXN0IHdpdGhvdXRcbiAgICAgKiBzZW5kaW5nIGl0LlxuICAgICAqIEBwYXJhbSBnZXRDcmVkZW50aWFscyBBIG1lY2hhbmlzbSB0byByZXRyaWV2ZSBBV1Mgc2VjdXJpdHkgY3JlZGVudGlhbHNcbiAgICAgKiAgIHdoZW4gbmVlZGVkLlxuICAgICAqIEBwYXJhbSByZWdpb24gVGhlIEFXUyByZWdpb24gdG8gdXNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdldENyZWRlbnRpYWxzLCByZWdpb24pIHtcbiAgICAgICAgdGhpcy5nZXRDcmVkZW50aWFscyA9IGdldENyZWRlbnRpYWxzO1xuICAgICAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSAoMCwgY3J5cHRvXzEuY3JlYXRlQ3J5cHRvKSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgdGhlIHNpZ25lZCByZXF1ZXN0IGZvciB0aGUgcHJvdmlkZWQgSFRUUCByZXF1ZXN0IGZvciBjYWxsaW5nXG4gICAgICogYW4gQVdTIEFQSS4gVGhpcyBmb2xsb3dzIHRoZSBzdGVwcyBkZXNjcmliZWQgYXQ6XG4gICAgICogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2dlbmVyYWwvbGF0ZXN0L2dyL3NpZ3Y0X3NpZ25pbmcuaHRtbFxuICAgICAqIEBwYXJhbSBhbXpPcHRpb25zIFRoZSBBV1MgcmVxdWVzdCBvcHRpb25zIHRoYXQgbmVlZCB0byBiZSBzaWduZWQuXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBHYXhpb3NPcHRpb25zIGNvbnRhaW5pbmcgdGhlXG4gICAgICogICBzaWduZWQgSFRUUCByZXF1ZXN0IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0UmVxdWVzdE9wdGlvbnMoYW16T3B0aW9ucykge1xuICAgICAgICBpZiAoIWFtek9wdGlvbnMudXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ1cmxcIiBpcyByZXF1aXJlZCBpbiBcImFtek9wdGlvbnNcIicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0cmluZ2lmeSBKU09OIHJlcXVlc3RzLiBUaGlzIHdpbGwgYmUgc2V0IGluIHRoZSByZXF1ZXN0IGJvZHkgb2YgdGhlXG4gICAgICAgIC8vIGdlbmVyYXRlZCBzaWduZWQgcmVxdWVzdC5cbiAgICAgICAgY29uc3QgcmVxdWVzdFBheWxvYWREYXRhID0gdHlwZW9mIGFtek9wdGlvbnMuZGF0YSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkoYW16T3B0aW9ucy5kYXRhKVxuICAgICAgICAgICAgOiBhbXpPcHRpb25zLmRhdGE7XG4gICAgICAgIGNvbnN0IHVybCA9IGFtek9wdGlvbnMudXJsO1xuICAgICAgICBjb25zdCBtZXRob2QgPSBhbXpPcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgICAgY29uc3QgcmVxdWVzdFBheWxvYWQgPSBhbXpPcHRpb25zLmJvZHkgfHwgcmVxdWVzdFBheWxvYWREYXRhO1xuICAgICAgICBjb25zdCBhZGRpdGlvbmFsQW16SGVhZGVycyA9IGFtek9wdGlvbnMuaGVhZGVycztcbiAgICAgICAgY29uc3QgYXdzU2VjdXJpdHlDcmVkZW50aWFscyA9IGF3YWl0IHRoaXMuZ2V0Q3JlZGVudGlhbHMoKTtcbiAgICAgICAgY29uc3QgdXJpID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RQYXlsb2FkICE9PSAnc3RyaW5nJyAmJiByZXF1ZXN0UGF5bG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAncmVxdWVzdFBheWxvYWQnIGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nIGlmIHByb3ZpZGVkLiBHb3Q6ICR7cmVxdWVzdFBheWxvYWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGVhZGVyTWFwID0gYXdhaXQgZ2VuZXJhdGVBdXRoZW50aWNhdGlvbkhlYWRlck1hcCh7XG4gICAgICAgICAgICBjcnlwdG86IHRoaXMuY3J5cHRvLFxuICAgICAgICAgICAgaG9zdDogdXJpLmhvc3QsXG4gICAgICAgICAgICBjYW5vbmljYWxVcmk6IHVyaS5wYXRobmFtZSxcbiAgICAgICAgICAgIGNhbm9uaWNhbFF1ZXJ5c3RyaW5nOiB1cmkuc2VhcmNoLnNsaWNlKDEpLFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgcmVnaW9uOiB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgIHNlY3VyaXR5Q3JlZGVudGlhbHM6IGF3c1NlY3VyaXR5Q3JlZGVudGlhbHMsXG4gICAgICAgICAgICByZXF1ZXN0UGF5bG9hZCxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxBbXpIZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIGFkZGl0aW9uYWwgb3B0aW9uYWwgaGVhZGVycywgZWcuIFgtQW16LVRhcmdldCwgQ29udGVudC1UeXBlLCBldGMuXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBnYXhpb3NfMS5HYXhpb3MubWVyZ2VIZWFkZXJzKFxuICAgICAgICAvLyBBZGQgeC1hbXotZGF0ZSBpZiBhdmFpbGFibGUuXG4gICAgICAgIGhlYWRlck1hcC5hbXpEYXRlID8geyAneC1hbXotZGF0ZSc6IGhlYWRlck1hcC5hbXpEYXRlIH0gOiB7fSwge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogaGVhZGVyTWFwLmF1dGhvcml6YXRpb25IZWFkZXIsXG4gICAgICAgICAgICBob3N0OiB1cmkuaG9zdCxcbiAgICAgICAgfSwgYWRkaXRpb25hbEFtekhlYWRlcnMgfHwge30pO1xuICAgICAgICBpZiAoYXdzU2VjdXJpdHlDcmVkZW50aWFscy50b2tlbikge1xuICAgICAgICAgICAgZ2F4aW9zXzEuR2F4aW9zLm1lcmdlSGVhZGVycyhoZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgJ3gtYW16LXNlY3VyaXR5LXRva2VuJzogYXdzU2VjdXJpdHlDcmVkZW50aWFscy50b2tlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF3c1NpZ25lZFJlcSA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlcXVlc3RQYXlsb2FkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3c1NpZ25lZFJlcS5ib2R5ID0gcmVxdWVzdFBheWxvYWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3c1NpZ25lZFJlcTtcbiAgICB9XG59XG5leHBvcnRzLkF3c1JlcXVlc3RTaWduZXIgPSBBd3NSZXF1ZXN0U2lnbmVyO1xuLyoqXG4gKiBDcmVhdGVzIHRoZSBITUFDLVNIQTI1NiBoYXNoIG9mIHRoZSBwcm92aWRlZCBtZXNzYWdlIHVzaW5nIHRoZVxuICogcHJvdmlkZWQga2V5LlxuICpcbiAqIEBwYXJhbSBjcnlwdG8gVGhlIGNyeXB0byBpbnN0YW5jZSB1c2VkIHRvIGZhY2lsaXRhdGUgY3J5cHRvZ3JhcGhpY1xuICogICBvcGVyYXRpb25zLlxuICogQHBhcmFtIGtleSBUaGUgSE1BQy1TSEEyNTYga2V5IHRvIHVzZS5cbiAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqIEByZXR1cm4gVGhlIGNvbXB1dGVkIGhhc2ggYnl0ZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNpZ24oY3J5cHRvLCBrZXksIG1zZykge1xuICAgIHJldHVybiBhd2FpdCBjcnlwdG8uc2lnbldpdGhIbWFjU2hhMjU2KGtleSwgbXNnKTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2lnbmluZyBrZXkgdXNlZCB0byBjYWxjdWxhdGUgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIEFXUyBTaWduYXR1cmUgVmVyc2lvbiA0IGJhc2VkIG9uOlxuICogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2dlbmVyYWwvbGF0ZXN0L2dyL3NpZ3Y0LWNhbGN1bGF0ZS1zaWduYXR1cmUuaHRtbFxuICpcbiAqIEBwYXJhbSBjcnlwdG8gVGhlIGNyeXB0byBpbnN0YW5jZSB1c2VkIHRvIGZhY2lsaXRhdGUgY3J5cHRvZ3JhcGhpY1xuICogICBvcGVyYXRpb25zLlxuICogQHBhcmFtIGtleSBUaGUgQVdTIHNlY3JldCBhY2Nlc3Mga2V5LlxuICogQHBhcmFtIGRhdGVTdGFtcCBUaGUgJyVZJW0lZCcgZGF0ZSBmb3JtYXQuXG4gKiBAcGFyYW0gcmVnaW9uIFRoZSBBV1MgcmVnaW9uLlxuICogQHBhcmFtIHNlcnZpY2VOYW1lIFRoZSBBV1Mgc2VydmljZSBuYW1lLCBlZy4gc3RzLlxuICogQHJldHVybiBUaGUgc2lnbmluZyBrZXkgYnl0ZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNpZ25pbmdLZXkoY3J5cHRvLCBrZXksIGRhdGVTdGFtcCwgcmVnaW9uLCBzZXJ2aWNlTmFtZSkge1xuICAgIGNvbnN0IGtEYXRlID0gYXdhaXQgc2lnbihjcnlwdG8sIGBBV1M0JHtrZXl9YCwgZGF0ZVN0YW1wKTtcbiAgICBjb25zdCBrUmVnaW9uID0gYXdhaXQgc2lnbihjcnlwdG8sIGtEYXRlLCByZWdpb24pO1xuICAgIGNvbnN0IGtTZXJ2aWNlID0gYXdhaXQgc2lnbihjcnlwdG8sIGtSZWdpb24sIHNlcnZpY2VOYW1lKTtcbiAgICBjb25zdCBrU2lnbmluZyA9IGF3YWl0IHNpZ24oY3J5cHRvLCBrU2VydmljZSwgJ2F3czRfcmVxdWVzdCcpO1xuICAgIHJldHVybiBrU2lnbmluZztcbn1cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBhdXRoZW50aWNhdGlvbiBoZWFkZXIgbWFwIG5lZWRlZCBmb3IgZ2VuZXJhdGluZyB0aGUgQVdTXG4gKiBTaWduYXR1cmUgVmVyc2lvbiA0IHNpZ25lZCByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBvcHRpb24gVGhlIG9wdGlvbnMgbmVlZGVkIHRvIGNvbXB1dGUgdGhlIGF1dGhlbnRpY2F0aW9uIGhlYWRlciBtYXAuXG4gKiBAcmV0dXJuIFRoZSBBV1MgYXV0aGVudGljYXRpb24gaGVhZGVyIG1hcCB3aGljaCBjb25zdGl0dXRlcyBvZiB0aGUgZm9sbG93aW5nXG4gKiAgIGNvbXBvbmVudHM6IGFtei1kYXRlLCBhdXRob3JpemF0aW9uIGhlYWRlciBhbmQgY2Fub25pY2FsIHF1ZXJ5IHN0cmluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBdXRoZW50aWNhdGlvbkhlYWRlck1hcChvcHRpb25zKSB7XG4gICAgY29uc3QgYWRkaXRpb25hbEFtekhlYWRlcnMgPSBnYXhpb3NfMS5HYXhpb3MubWVyZ2VIZWFkZXJzKG9wdGlvbnMuYWRkaXRpb25hbEFtekhlYWRlcnMpO1xuICAgIGNvbnN0IHJlcXVlc3RQYXlsb2FkID0gb3B0aW9ucy5yZXF1ZXN0UGF5bG9hZCB8fCAnJztcbiAgICAvLyBpYW0uYW1hem9uYXdzLmNvbSBob3N0ID0+IGlhbSBzZXJ2aWNlLlxuICAgIC8vIHN0cy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbSA9PiBzdHMgc2VydmljZS5cbiAgICBjb25zdCBzZXJ2aWNlTmFtZSA9IG9wdGlvbnMuaG9zdC5zcGxpdCgnLicpWzBdO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy8gRm9ybWF0OiAnJVklbSVkVCVIJU0lU1onLlxuICAgIGNvbnN0IGFtekRhdGUgPSBub3dcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoL1stOl0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC9cXC5bMC05XSsvLCAnJyk7XG4gICAgLy8gRm9ybWF0OiAnJVklbSVkJy5cbiAgICBjb25zdCBkYXRlU3RhbXAgPSBub3cudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bLV0vZywgJycpLnJlcGxhY2UoL1QuKi8sICcnKTtcbiAgICAvLyBBZGQgQVdTIHRva2VuIGlmIGF2YWlsYWJsZS5cbiAgICBpZiAob3B0aW9ucy5zZWN1cml0eUNyZWRlbnRpYWxzLnRva2VuKSB7XG4gICAgICAgIGFkZGl0aW9uYWxBbXpIZWFkZXJzLnNldCgneC1hbXotc2VjdXJpdHktdG9rZW4nLCBvcHRpb25zLnNlY3VyaXR5Q3JlZGVudGlhbHMudG9rZW4pO1xuICAgIH1cbiAgICAvLyBIZWFkZXIga2V5cyBuZWVkIHRvIGJlIHNvcnRlZCBhbHBoYWJldGljYWxseS5cbiAgICBjb25zdCBhbXpIZWFkZXJzID0gZ2F4aW9zXzEuR2F4aW9zLm1lcmdlSGVhZGVycyh7XG4gICAgICAgIGhvc3Q6IG9wdGlvbnMuaG9zdCxcbiAgICB9LCBcbiAgICAvLyBQcmV2aW91c2x5IHRoZSBkYXRlIHdhcyBub3QgZml4ZWQgd2l0aCB4LWFtei0gYW5kIGNvdWxkIGJlIHByb3ZpZGVkIG1hbnVhbGx5LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ib3RvL2JvdG9jb3JlL2Jsb2IvODc5Zjg0NDBhNGU5YWNlNWQzY2YxNDVjZThiM2Q1ZTVmZmI4OTJlZi90ZXN0cy91bml0L2F1dGgvYXdzNF90ZXN0c3VpdGUvZ2V0LWhlYWRlci12YWx1ZS10cmltLnJlcVxuICAgIGFkZGl0aW9uYWxBbXpIZWFkZXJzLmhhcygnZGF0ZScpID8ge30gOiB7ICd4LWFtei1kYXRlJzogYW16RGF0ZSB9LCBhZGRpdGlvbmFsQW16SGVhZGVycyk7XG4gICAgbGV0IGNhbm9uaWNhbEhlYWRlcnMgPSAnJztcbiAgICAvLyBUeXBlU2NyaXB0IGlzIG1pc3NpbmcgYEhlYWRlcnMja2V5c2AgYXQgdGhlIHRpbWUgb2Ygd3JpdGluZ1xuICAgIGNvbnN0IHNpZ25lZEhlYWRlcnNMaXN0ID0gW1xuICAgICAgICAuLi5hbXpIZWFkZXJzLmtleXMoKSxcbiAgICBdLnNvcnQoKTtcbiAgICBzaWduZWRIZWFkZXJzTGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNhbm9uaWNhbEhlYWRlcnMgKz0gYCR7a2V5fToke2FtekhlYWRlcnMuZ2V0KGtleSl9XFxuYDtcbiAgICB9KTtcbiAgICBjb25zdCBzaWduZWRIZWFkZXJzID0gc2lnbmVkSGVhZGVyc0xpc3Quam9pbignOycpO1xuICAgIGNvbnN0IHBheWxvYWRIYXNoID0gYXdhaXQgb3B0aW9ucy5jcnlwdG8uc2hhMjU2RGlnZXN0SGV4KHJlcXVlc3RQYXlsb2FkKTtcbiAgICAvLyBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vZ2VuZXJhbC9sYXRlc3QvZ3Ivc2lndjQtY3JlYXRlLWNhbm9uaWNhbC1yZXF1ZXN0Lmh0bWxcbiAgICBjb25zdCBjYW5vbmljYWxSZXF1ZXN0ID0gYCR7b3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKX1cXG5gICtcbiAgICAgICAgYCR7b3B0aW9ucy5jYW5vbmljYWxVcml9XFxuYCArXG4gICAgICAgIGAke29wdGlvbnMuY2Fub25pY2FsUXVlcnlzdHJpbmd9XFxuYCArXG4gICAgICAgIGAke2Nhbm9uaWNhbEhlYWRlcnN9XFxuYCArXG4gICAgICAgIGAke3NpZ25lZEhlYWRlcnN9XFxuYCArXG4gICAgICAgIGAke3BheWxvYWRIYXNofWA7XG4gICAgY29uc3QgY3JlZGVudGlhbFNjb3BlID0gYCR7ZGF0ZVN0YW1wfS8ke29wdGlvbnMucmVnaW9ufS8ke3NlcnZpY2VOYW1lfS8ke0FXU19SRVFVRVNUX1RZUEV9YDtcbiAgICAvLyBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vZ2VuZXJhbC9sYXRlc3QvZ3Ivc2lndjQtY3JlYXRlLXN0cmluZy10by1zaWduLmh0bWxcbiAgICBjb25zdCBzdHJpbmdUb1NpZ24gPSBgJHtBV1NfQUxHT1JJVEhNfVxcbmAgK1xuICAgICAgICBgJHthbXpEYXRlfVxcbmAgK1xuICAgICAgICBgJHtjcmVkZW50aWFsU2NvcGV9XFxuYCArXG4gICAgICAgIChhd2FpdCBvcHRpb25zLmNyeXB0by5zaGEyNTZEaWdlc3RIZXgoY2Fub25pY2FsUmVxdWVzdCkpO1xuICAgIC8vIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9nZW5lcmFsL2xhdGVzdC9nci9zaWd2NC1jYWxjdWxhdGUtc2lnbmF0dXJlLmh0bWxcbiAgICBjb25zdCBzaWduaW5nS2V5ID0gYXdhaXQgZ2V0U2lnbmluZ0tleShvcHRpb25zLmNyeXB0bywgb3B0aW9ucy5zZWN1cml0eUNyZWRlbnRpYWxzLnNlY3JldEFjY2Vzc0tleSwgZGF0ZVN0YW1wLCBvcHRpb25zLnJlZ2lvbiwgc2VydmljZU5hbWUpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ24ob3B0aW9ucy5jcnlwdG8sIHNpZ25pbmdLZXksIHN0cmluZ1RvU2lnbik7XG4gICAgLy8gaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2dlbmVyYWwvbGF0ZXN0L2dyL3NpZ3Y0LWFkZC1zaWduYXR1cmUtdG8tcmVxdWVzdC5odG1sXG4gICAgY29uc3QgYXV0aG9yaXphdGlvbkhlYWRlciA9IGAke0FXU19BTEdPUklUSE19IENyZWRlbnRpYWw9JHtvcHRpb25zLnNlY3VyaXR5Q3JlZGVudGlhbHMuYWNjZXNzS2V5SWR9L2AgK1xuICAgICAgICBgJHtjcmVkZW50aWFsU2NvcGV9LCBTaWduZWRIZWFkZXJzPSR7c2lnbmVkSGVhZGVyc30sIGAgK1xuICAgICAgICBgU2lnbmF0dXJlPSR7KDAsIGNyeXB0b18xLmZyb21BcnJheUJ1ZmZlclRvSGV4KShzaWduYXR1cmUpfWA7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gRG8gbm90IHJldHVybiB4LWFtei1kYXRlIGlmIGRhdGUgaXMgYXZhaWxhYmxlLlxuICAgICAgICBhbXpEYXRlOiBhZGRpdGlvbmFsQW16SGVhZGVycy5oYXMoJ2RhdGUnKSA/IHVuZGVmaW5lZCA6IGFtekRhdGUsXG4gICAgICAgIGF1dGhvcml6YXRpb25IZWFkZXIsXG4gICAgICAgIGNhbm9uaWNhbFF1ZXJ5c3RyaW5nOiBvcHRpb25zLmNhbm9uaWNhbFF1ZXJ5c3RyaW5nLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hd3NyZXF1ZXN0c2lnbmVyLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZWZhdWx0QXdzU2VjdXJpdHlDcmVkZW50aWFsc1N1cHBsaWVyID0gdm9pZCAwO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbi8qKlxuICogSW50ZXJuYWwgQVdTIHNlY3VyaXR5IGNyZWRlbnRpYWxzIHN1cHBsaWVyIGltcGxlbWVudGF0aW9uIHVzZWQgYnkge0BsaW5rIEF3c0NsaWVudH1cbiAqIHdoZW4gYSBjcmVkZW50aWFsIHNvdXJjZSBpcyBwcm92aWRlZCBpbnN0ZWFkIG9mIGEgdXNlciBkZWZpbmVkIHN1cHBsaWVyLlxuICogVGhlIGxvZ2ljIGlzIHN1bW1hcml6ZWQgYXM6XG4gKiAxLiBJZiBpbWRzdjJfc2Vzc2lvbl90b2tlbl91cmwgaXMgcHJvdmlkZWQgaW4gdGhlIGNyZWRlbnRpYWwgc291cmNlLCB0aGVuXG4gKiAgICBmZXRjaCB0aGUgYXdzIHNlc3Npb24gdG9rZW4gYW5kIGluY2x1ZGUgaXQgaW4gdGhlIGhlYWRlcnMgb2YgdGhlXG4gKiAgICBtZXRhZGF0YSByZXF1ZXN0cy4gVGhpcyBpcyBhIHJlcXVpcmVtZW50IGZvciBJRE1TdjIgYnV0IG9wdGlvbmFsXG4gKiAgICBmb3IgSURNU3YxLlxuICogMi4gUmV0cmlldmUgQVdTIHJlZ2lvbiBmcm9tIGF2YWlsYWJpbGl0eS16b25lLlxuICogM2EuIENoZWNrIEFXUyBjcmVkZW50aWFscyBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuIElmIG5vdCBmb3VuZCwgZ2V0XG4gKiAgICAgZnJvbSBzZWN1cml0eS1jcmVkZW50aWFscyBlbmRwb2ludC5cbiAqIDNiLiBHZXQgQVdTIGNyZWRlbnRpYWxzIGZyb20gc2VjdXJpdHktY3JlZGVudGlhbHMgZW5kcG9pbnQuIEluIG9yZGVyXG4gKiAgICAgdG8gcmV0cmlldmUgdGhpcywgdGhlIEFXUyByb2xlIG5lZWRzIHRvIGJlIGRldGVybWluZWQgYnkgY2FsbGluZ1xuICogICAgIHNlY3VyaXR5LWNyZWRlbnRpYWxzIGVuZHBvaW50IHdpdGhvdXQgYW55IGFyZ3VtZW50LiBUaGVuIHRoZVxuICogICAgIGNyZWRlbnRpYWxzIGNhbiBiZSByZXRyaWV2ZWQgdmlhOiBzZWN1cml0eS1jcmVkZW50aWFscy9yb2xlX25hbWVcbiAqIDQuIEdlbmVyYXRlIHRoZSBzaWduZWQgcmVxdWVzdCB0byBBV1MgU1RTIEdldENhbGxlcklkZW50aXR5IGFjdGlvbi5cbiAqIDUuIEluamVjdCB4LWdvb2ctY2xvdWQtdGFyZ2V0LXJlc291cmNlIGludG8gaGVhZGVyIGFuZCBzZXJpYWxpemUgdGhlXG4gKiAgICBzaWduZWQgcmVxdWVzdC4gVGhpcyB3aWxsIGJlIHRoZSBzdWJqZWN0LXRva2VuIHRvIHBhc3MgdG8gR0NQIFNUUy5cbiAqL1xuY2xhc3MgRGVmYXVsdEF3c1NlY3VyaXR5Q3JlZGVudGlhbHNTdXBwbGllciB7XG4gICAgcmVnaW9uVXJsO1xuICAgIHNlY3VyaXR5Q3JlZGVudGlhbHNVcmw7XG4gICAgaW1kc1YyU2Vzc2lvblRva2VuVXJsO1xuICAgIGFkZGl0aW9uYWxHYXhpb3NPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlcyBhIG5ldyBEZWZhdWx0QXdzU2VjdXJpdHlDcmVkZW50aWFsc1N1cHBsaWVyIHVzaW5nIGluZm9ybWF0aW9uXG4gICAgICogZnJvbSB0aGUgY3JlZGVudGlhbF9zb3VyY2Ugc3RvcmVkIGluIHRoZSBBREMgZmlsZS5cbiAgICAgKiBAcGFyYW0gb3B0cyBUaGUgZGVmYXVsdCBhd3Mgc2VjdXJpdHkgY3JlZGVudGlhbHMgc3VwcGxpZXIgb3B0aW9ucyBvYmplY3QgdG9cbiAgICAgKiAgIGJ1aWxkIHRoZSBzdXBwbGllciB3aXRoLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgdGhpcy5yZWdpb25VcmwgPSBvcHRzLnJlZ2lvblVybDtcbiAgICAgICAgdGhpcy5zZWN1cml0eUNyZWRlbnRpYWxzVXJsID0gb3B0cy5zZWN1cml0eUNyZWRlbnRpYWxzVXJsO1xuICAgICAgICB0aGlzLmltZHNWMlNlc3Npb25Ub2tlblVybCA9IG9wdHMuaW1kc1YyU2Vzc2lvblRva2VuVXJsO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxHYXhpb3NPcHRpb25zID0gb3B0cy5hZGRpdGlvbmFsR2F4aW9zT3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYWN0aXZlIEFXUyByZWdpb24uIFRoaXMgZmlyc3QgY2hlY2tzIHRvIHNlZSBpZiB0aGUgcmVnaW9uXG4gICAgICogaXMgYXZhaWxhYmxlIGFzIGFuIGVudmlyb25tZW50IHZhcmlhYmxlLiBJZiBpdCBpcyBub3QsIHRoZW4gdGhlIHN1cHBsaWVyXG4gICAgICogd2lsbCBjYWxsIHRoZSByZWdpb24gVVJMLlxuICAgICAqIEBwYXJhbSBjb250ZXh0IHtAbGluayBFeHRlcm5hbEFjY291bnRTdXBwbGllckNvbnRleHR9IGZyb20gdGhlIGNhbGxpbmdcbiAgICAgKiAgIHtAbGluayBBd3NDbGllbnR9LCBjb250YWlucyB0aGUgcmVxdWVzdGVkIGF1ZGllbmNlIGFuZCBzdWJqZWN0IHRva2VuIHR5cGVcbiAgICAgKiAgIGZvciB0aGUgZXh0ZXJuYWwgYWNjb3VudCBpZGVudGl0eS5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIEFXUyByZWdpb24gc3RyaW5nLlxuICAgICAqL1xuICAgIGFzeW5jIGdldEF3c1JlZ2lvbihjb250ZXh0KSB7XG4gICAgICAgIC8vIFByaW9yaXR5IG9yZGVyIGZvciByZWdpb24gZGV0ZXJtaW5hdGlvbjpcbiAgICAgICAgLy8gQVdTX1JFR0lPTiA+IEFXU19ERUZBVUxUX1JFR0lPTiA+IG1ldGFkYXRhIHNlcnZlci5cbiAgICAgICAgaWYgKHRoaXMuI3JlZ2lvbkZyb21FbnYpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNyZWdpb25Gcm9tRW52O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGlmICghdGhpcy4jcmVnaW9uRnJvbUVudiAmJiB0aGlzLmltZHNWMlNlc3Npb25Ub2tlblVybCkge1xuICAgICAgICAgICAgbWV0YWRhdGFIZWFkZXJzLnNldCgneC1hd3MtZWMyLW1ldGFkYXRhLXRva2VuJywgYXdhaXQgdGhpcy4jZ2V0SW1kc1YyU2Vzc2lvblRva2VuKGNvbnRleHQudHJhbnNwb3J0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVnaW9uVXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5hYmxlIHRvIGRldGVybWluZSBBV1MgcmVnaW9uIGR1ZSB0byBtaXNzaW5nICcgK1xuICAgICAgICAgICAgICAgICdcIm9wdGlvbnMuY3JlZGVudGlhbF9zb3VyY2UucmVnaW9uX3VybFwiJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuYWRkaXRpb25hbEdheGlvc09wdGlvbnMsXG4gICAgICAgICAgICB1cmw6IHRoaXMucmVnaW9uVXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgaGVhZGVyczogbWV0YWRhdGFIZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBhdXRoY2xpZW50XzEuQXV0aENsaWVudC5zZXRNZXRob2ROYW1lKG9wdHMsICdnZXRBd3NSZWdpb24nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250ZXh0LnRyYW5zcG9ydGVyLnJlcXVlc3Qob3B0cyk7XG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGNoYXJhY3Rlci4gRm9yIGV4YW1wbGUsIGlmIHVzLWVhc3QtMmIgaXMgcmV0dXJuZWQsXG4gICAgICAgIC8vIHRoZSByZWdpb24gd291bGQgYmUgdXMtZWFzdC0yLlxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5zdWJzdHIoMCwgcmVzcG9uc2UuZGF0YS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBBV1Mgc2VjdXJpdHkgY3JlZGVudGlhbHMuIFRoaXMgZmlyc3QgY2hlY2tzIHRvIHNlZSBpZiB0aGUgY3JlZGVudGlhbHNcbiAgICAgKiBpcyBhdmFpbGFibGUgYXMgZW52aXJvbm1lbnQgdmFyaWFibGVzLiBJZiBpdCBpcyBub3QsIHRoZW4gdGhlIHN1cHBsaWVyXG4gICAgICogd2lsbCBjYWxsIHRoZSBzZWN1cml0eSBjcmVkZW50aWFscyBVUkwuXG4gICAgICogQHBhcmFtIGNvbnRleHQge0BsaW5rIEV4dGVybmFsQWNjb3VudFN1cHBsaWVyQ29udGV4dH0gZnJvbSB0aGUgY2FsbGluZ1xuICAgICAqICAge0BsaW5rIEF3c0NsaWVudH0sIGNvbnRhaW5zIHRoZSByZXF1ZXN0ZWQgYXVkaWVuY2UgYW5kIHN1YmplY3QgdG9rZW4gdHlwZVxuICAgICAqICAgZm9yIHRoZSBleHRlcm5hbCBhY2NvdW50IGlkZW50aXR5LlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgQVdTIHNlY3VyaXR5IGNyZWRlbnRpYWxzLlxuICAgICAqL1xuICAgIGFzeW5jIGdldEF3c1NlY3VyaXR5Q3JlZGVudGlhbHMoY29udGV4dCkge1xuICAgICAgICAvLyBDaGVjayBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZm9yIHBlcm1hbmVudCBjcmVkZW50aWFscyBmaXJzdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2dlbmVyYWwvbGF0ZXN0L2dyL2F3cy1zZWMtY3JlZC10eXBlcy5odG1sXG4gICAgICAgIGlmICh0aGlzLiNzZWN1cml0eUNyZWRlbnRpYWxzRnJvbUVudikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NlY3VyaXR5Q3JlZGVudGlhbHNGcm9tRW52O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGlmICh0aGlzLmltZHNWMlNlc3Npb25Ub2tlblVybCkge1xuICAgICAgICAgICAgbWV0YWRhdGFIZWFkZXJzLnNldCgneC1hd3MtZWMyLW1ldGFkYXRhLXRva2VuJywgYXdhaXQgdGhpcy4jZ2V0SW1kc1YyU2Vzc2lvblRva2VuKGNvbnRleHQudHJhbnNwb3J0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaW5jZSB0aGUgcm9sZSBvbiBhIFZNIGNhbiBjaGFuZ2UsIHdlIGRvbid0IG5lZWQgdG8gY2FjaGUgaXQuXG4gICAgICAgIGNvbnN0IHJvbGVOYW1lID0gYXdhaXQgdGhpcy4jZ2V0QXdzUm9sZU5hbWUobWV0YWRhdGFIZWFkZXJzLCBjb250ZXh0LnRyYW5zcG9ydGVyKTtcbiAgICAgICAgLy8gVGVtcG9yYXJ5IGNyZWRlbnRpYWxzIHR5cGljYWxseSBsYXN0IGZvciBzZXZlcmFsIGhvdXJzLlxuICAgICAgICAvLyBFeHBpcmF0aW9uIGlzIHJldHVybmVkIGluIHJlc3BvbnNlLlxuICAgICAgICAvLyBDb25zaWRlciBmdXR1cmUgb3B0aW1pemF0aW9uIG9mIHRoaXMgbG9naWMgdG8gY2FjaGUgQVdTIHRva2Vuc1xuICAgICAgICAvLyB1bnRpbCB0aGVpciBuYXR1cmFsIGV4cGlyYXRpb24uXG4gICAgICAgIGNvbnN0IGF3c0NyZWRzID0gYXdhaXQgdGhpcy4jcmV0cmlldmVBd3NTZWN1cml0eUNyZWRlbnRpYWxzKHJvbGVOYW1lLCBtZXRhZGF0YUhlYWRlcnMsIGNvbnRleHQudHJhbnNwb3J0ZXIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3c0NyZWRzLkFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBhd3NDcmVkcy5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICB0b2tlbjogYXdzQ3JlZHMuVG9rZW4sXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0cmFuc3BvcnRlciBUaGUgdHJhbnNwb3J0ZXIgdG8gdXNlIGZvciByZXF1ZXN0cy5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIElNRFN2MiBTZXNzaW9uIFRva2VuLlxuICAgICAqL1xuICAgIGFzeW5jICNnZXRJbWRzVjJTZXNzaW9uVG9rZW4odHJhbnNwb3J0ZXIpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuYWRkaXRpb25hbEdheGlvc09wdGlvbnMsXG4gICAgICAgICAgICB1cmw6IHRoaXMuaW1kc1YyU2Vzc2lvblRva2VuVXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAneC1hd3MtZWMyLW1ldGFkYXRhLXRva2VuLXR0bC1zZWNvbmRzJzogJzMwMCcgfSxcbiAgICAgICAgfTtcbiAgICAgICAgYXV0aGNsaWVudF8xLkF1dGhDbGllbnQuc2V0TWV0aG9kTmFtZShvcHRzLCAnI2dldEltZHNWMlNlc3Npb25Ub2tlbicpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRyYW5zcG9ydGVyLnJlcXVlc3Qob3B0cyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaGVhZGVycyBUaGUgaGVhZGVycyB0byBiZSB1c2VkIGluIHRoZSBtZXRhZGF0YSByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB0cmFuc3BvcnRlciBUaGUgdHJhbnNwb3J0ZXIgdG8gdXNlIGZvciByZXF1ZXN0cy5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGFzc2lnbmVkIHJvbGUgdG8gdGhlIGN1cnJlbnRcbiAgICAgKiAgIEFXUyBWTS4gVGhpcyBpcyBuZWVkZWQgZm9yIGNhbGxpbmcgdGhlIHNlY3VyaXR5LWNyZWRlbnRpYWxzIGVuZHBvaW50LlxuICAgICAqL1xuICAgIGFzeW5jICNnZXRBd3NSb2xlTmFtZShoZWFkZXJzLCB0cmFuc3BvcnRlcikge1xuICAgICAgICBpZiAoIXRoaXMuc2VjdXJpdHlDcmVkZW50aWFsc1VybCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZGV0ZXJtaW5lIEFXUyByb2xlIG5hbWUgZHVlIHRvIG1pc3NpbmcgJyArXG4gICAgICAgICAgICAgICAgJ1wib3B0aW9ucy5jcmVkZW50aWFsX3NvdXJjZS51cmxcIicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmFkZGl0aW9uYWxHYXhpb3NPcHRpb25zLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnNlY3VyaXR5Q3JlZGVudGlhbHNVcmwsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBhdXRoY2xpZW50XzEuQXV0aENsaWVudC5zZXRNZXRob2ROYW1lKG9wdHMsICcjZ2V0QXdzUm9sZU5hbWUnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB0ZW1wb3JhcnkgQVdTIGNyZWRlbnRpYWxzIGJ5IGNhbGxpbmcgdGhlIHNlY3VyaXR5LWNyZWRlbnRpYWxzXG4gICAgICogZW5kcG9pbnQgYXMgc3BlY2lmaWVkIGluIHRoZSBgY3JlZGVudGlhbF9zb3VyY2VgIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gcm9sZU5hbWUgVGhlIHJvbGUgYXR0YWNoZWQgdG8gdGhlIGN1cnJlbnQgVk0uXG4gICAgICogQHBhcmFtIGhlYWRlcnMgVGhlIGhlYWRlcnMgdG8gYmUgdXNlZCBpbiB0aGUgbWV0YWRhdGEgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0gdHJhbnNwb3J0ZXIgVGhlIHRyYW5zcG9ydGVyIHRvIHVzZSBmb3IgcmVxdWVzdHMuXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB0ZW1wb3JhcnkgQVdTIGNyZWRlbnRpYWxzXG4gICAgICogICBuZWVkZWQgZm9yIGNyZWF0aW5nIHRoZSBHZXRDYWxsZXJJZGVudGl0eSBzaWduZWQgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhc3luYyAjcmV0cmlldmVBd3NTZWN1cml0eUNyZWRlbnRpYWxzKHJvbGVOYW1lLCBoZWFkZXJzLCB0cmFuc3BvcnRlcikge1xuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5hZGRpdGlvbmFsR2F4aW9zT3B0aW9ucyxcbiAgICAgICAgICAgIHVybDogYCR7dGhpcy5zZWN1cml0eUNyZWRlbnRpYWxzVXJsfS8ke3JvbGVOYW1lfWAsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJyNyZXRyaWV2ZUF3c1NlY3VyaXR5Q3JlZGVudGlhbHMnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gICAgZ2V0ICNyZWdpb25Gcm9tRW52KCkge1xuICAgICAgICAvLyBUaGUgQVdTIHJlZ2lvbiBjYW4gYmUgcHJvdmlkZWQgdGhyb3VnaCBBV1NfUkVHSU9OIG9yIEFXU19ERUZBVUxUX1JFR0lPTi5cbiAgICAgICAgLy8gT25seSBvbmUgaXMgcmVxdWlyZWQuXG4gICAgICAgIHJldHVybiAocHJvY2Vzcy5lbnZbJ0FXU19SRUdJT04nXSB8fCBwcm9jZXNzLmVudlsnQVdTX0RFRkFVTFRfUkVHSU9OJ10gfHwgbnVsbCk7XG4gICAgfVxuICAgIGdldCAjc2VjdXJpdHlDcmVkZW50aWFsc0Zyb21FbnYoKSB7XG4gICAgICAgIC8vIEJvdGggQVdTX0FDQ0VTU19LRVlfSUQgYW5kIEFXU19TRUNSRVRfQUNDRVNTX0tFWSBhcmUgcmVxdWlyZWQuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudlsnQVdTX0FDQ0VTU19LRVlfSUQnXSAmJlxuICAgICAgICAgICAgcHJvY2Vzcy5lbnZbJ0FXU19TRUNSRVRfQUNDRVNTX0tFWSddKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudlsnQVdTX0FDQ0VTU19LRVlfSUQnXSxcbiAgICAgICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52WydBV1NfU0VDUkVUX0FDQ0VTU19LRVknXSxcbiAgICAgICAgICAgICAgICB0b2tlbjogcHJvY2Vzcy5lbnZbJ0FXU19TRVNTSU9OX1RPS0VOJ10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuRGVmYXVsdEF3c1NlY3VyaXR5Q3JlZGVudGlhbHNTdXBwbGllciA9IERlZmF1bHRBd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0YXdzc2VjdXJpdHljcmVkZW50aWFsc3N1cHBsaWVyLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bd3NDbGllbnQgPSB2b2lkIDA7XG5jb25zdCBhd3NyZXF1ZXN0c2lnbmVyXzEgPSByZXF1aXJlKFwiLi9hd3NyZXF1ZXN0c2lnbmVyXCIpO1xuY29uc3QgYmFzZWV4dGVybmFsY2xpZW50XzEgPSByZXF1aXJlKFwiLi9iYXNlZXh0ZXJuYWxjbGllbnRcIik7XG5jb25zdCBkZWZhdWx0YXdzc2VjdXJpdHljcmVkZW50aWFsc3N1cHBsaWVyXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0YXdzc2VjdXJpdHljcmVkZW50aWFsc3N1cHBsaWVyXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBnYXhpb3NfMSA9IHJlcXVpcmUoXCJnYXhpb3NcIik7XG4vKipcbiAqIEFXUyBleHRlcm5hbCBhY2NvdW50IGNsaWVudC4gVGhpcyBpcyB1c2VkIGZvciBBV1Mgd29ya2xvYWRzLCB3aGVyZVxuICogQVdTIFNUUyBHZXRDYWxsZXJJZGVudGl0eSBzZXJpYWxpemVkIHNpZ25lZCByZXF1ZXN0cyBhcmUgZXhjaGFuZ2VkIGZvclxuICogR0NQIGFjY2VzcyB0b2tlbi5cbiAqL1xuY2xhc3MgQXdzQ2xpZW50IGV4dGVuZHMgYmFzZWV4dGVybmFsY2xpZW50XzEuQmFzZUV4dGVybmFsQWNjb3VudENsaWVudCB7XG4gICAgZW52aXJvbm1lbnRJZDtcbiAgICBhd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXI7XG4gICAgcmVnaW9uYWxDcmVkVmVyaWZpY2F0aW9uVXJsO1xuICAgIGF3c1JlcXVlc3RTaWduZXI7XG4gICAgcmVnaW9uO1xuICAgIHN0YXRpYyAjREVGQVVMVF9BV1NfUkVHSU9OQUxfQ1JFREVOVElBTF9WRVJJRklDQVRJT05fVVJMID0gJ2h0dHBzOi8vc3RzLntyZWdpb259LmFtYXpvbmF3cy5jb20/QWN0aW9uPUdldENhbGxlcklkZW50aXR5JlZlcnNpb249MjAxMS0wNi0xNSc7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgQVdTIGNsaWVudCBubyB2YWxpZGF0ZXMgdGhlIEVDMiBtZXRhZGF0YSBhZGRyZXNzLlxuICAgICAqKi9cbiAgICBzdGF0aWMgQVdTX0VDMl9NRVRBREFUQV9JUFY0X0FERFJFU1MgPSAnMTY5LjI1NC4xNjkuMjU0JztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBBV1MgY2xpZW50IG5vIHZhbGlkYXRlcyB0aGUgRUMyIG1ldGFkYXRhIGFkZHJlc3MuXG4gICAgICoqL1xuICAgIHN0YXRpYyBBV1NfRUMyX01FVEFEQVRBX0lQVjZfQUREUkVTUyA9ICdmZDAwOmVjMjo6MjU0JztcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYW4gQXdzQ2xpZW50IGluc3RhbmNlIHVzaW5nIHRoZSBwcm92aWRlZCBKU09OXG4gICAgICogb2JqZWN0IGxvYWRlZCBmcm9tIGFuIGV4dGVybmFsIGFjY291bnQgY3JlZGVudGlhbHMgZmlsZS5cbiAgICAgKiBBbiBlcnJvciBpcyB0aHJvd24gaWYgdGhlIGNyZWRlbnRpYWwgaXMgbm90IGEgdmFsaWQgQVdTIGNyZWRlbnRpYWwuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGV4dGVybmFsIGFjY291bnQgb3B0aW9ucyBvYmplY3QgdHlwaWNhbGx5IGxvYWRlZFxuICAgICAqICAgZnJvbSB0aGUgZXh0ZXJuYWwgYWNjb3VudCBKU09OIGNyZWRlbnRpYWwgZmlsZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBvcHRzID0gKDAsIHV0aWxfMS5vcmlnaW5hbE9yQ2FtZWxPcHRpb25zKShvcHRpb25zKTtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbFNvdXJjZSA9IG9wdHMuZ2V0KCdjcmVkZW50aWFsX3NvdXJjZScpO1xuICAgICAgICBjb25zdCBhd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXIgPSBvcHRzLmdldCgnYXdzX3NlY3VyaXR5X2NyZWRlbnRpYWxzX3N1cHBsaWVyJyk7XG4gICAgICAgIC8vIFZhbGlkYXRlIGNyZWRlbnRpYWwgc291cmNpbmcgY29uZmlndXJhdGlvbi5cbiAgICAgICAgaWYgKCFjcmVkZW50aWFsU291cmNlICYmICFhd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBjcmVkZW50aWFsIHNvdXJjZSBvciBBV1Mgc2VjdXJpdHkgY3JlZGVudGlhbHMgc3VwcGxpZXIgbXVzdCBiZSBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyZWRlbnRpYWxTb3VyY2UgJiYgYXdzU2VjdXJpdHlDcmVkZW50aWFsc1N1cHBsaWVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgb25lIG9mIGNyZWRlbnRpYWwgc291cmNlIG9yIEFXUyBzZWN1cml0eSBjcmVkZW50aWFscyBzdXBwbGllciBjYW4gYmUgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXdzU2VjdXJpdHlDcmVkZW50aWFsc1N1cHBsaWVyID0gYXdzU2VjdXJpdHlDcmVkZW50aWFsc1N1cHBsaWVyO1xuICAgICAgICAgICAgdGhpcy5yZWdpb25hbENyZWRWZXJpZmljYXRpb25VcmwgPVxuICAgICAgICAgICAgICAgIEF3c0NsaWVudC4jREVGQVVMVF9BV1NfUkVHSU9OQUxfQ1JFREVOVElBTF9WRVJJRklDQVRJT05fVVJMO1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsU291cmNlVHlwZSA9ICdwcm9ncmFtbWF0aWMnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3JlZGVudGlhbFNvdXJjZU9wdHMgPSAoMCwgdXRpbF8xLm9yaWdpbmFsT3JDYW1lbE9wdGlvbnMpKGNyZWRlbnRpYWxTb3VyY2UpO1xuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudElkID0gY3JlZGVudGlhbFNvdXJjZU9wdHMuZ2V0KCdlbnZpcm9ubWVudF9pZCcpO1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBvbmx5IHJlcXVpcmVkIGlmIHRoZSBBV1MgcmVnaW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlXG4gICAgICAgICAgICAvLyBBV1NfUkVHSU9OIG9yIEFXU19ERUZBVUxUX1JFR0lPTiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAgICAgICAgICBjb25zdCByZWdpb25VcmwgPSBjcmVkZW50aWFsU291cmNlT3B0cy5nZXQoJ3JlZ2lvbl91cmwnKTtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgb25seSByZXF1aXJlZCBpZiBBV1Mgc2VjdXJpdHkgY3JlZGVudGlhbHMgYXJlIG5vdCBhdmFpbGFibGUgaW5cbiAgICAgICAgICAgIC8vIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICAgICAgICAgIGNvbnN0IHNlY3VyaXR5Q3JlZGVudGlhbHNVcmwgPSBjcmVkZW50aWFsU291cmNlT3B0cy5nZXQoJ3VybCcpO1xuICAgICAgICAgICAgY29uc3QgaW1kc1YyU2Vzc2lvblRva2VuVXJsID0gY3JlZGVudGlhbFNvdXJjZU9wdHMuZ2V0KCdpbWRzdjJfc2Vzc2lvbl90b2tlbl91cmwnKTtcbiAgICAgICAgICAgIHRoaXMuYXdzU2VjdXJpdHlDcmVkZW50aWFsc1N1cHBsaWVyID1cbiAgICAgICAgICAgICAgICBuZXcgZGVmYXVsdGF3c3NlY3VyaXR5Y3JlZGVudGlhbHNzdXBwbGllcl8xLkRlZmF1bHRBd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXIoe1xuICAgICAgICAgICAgICAgICAgICByZWdpb25Vcmw6IHJlZ2lvblVybCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlDcmVkZW50aWFsc1VybDogc2VjdXJpdHlDcmVkZW50aWFsc1VybCxcbiAgICAgICAgICAgICAgICAgICAgaW1kc1YyU2Vzc2lvblRva2VuVXJsOiBpbWRzVjJTZXNzaW9uVG9rZW5VcmwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lvbmFsQ3JlZFZlcmlmaWNhdGlvblVybCA9IGNyZWRlbnRpYWxTb3VyY2VPcHRzLmdldCgncmVnaW9uYWxfY3JlZF92ZXJpZmljYXRpb25fdXJsJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxTb3VyY2VUeXBlID0gJ2F3cyc7XG4gICAgICAgICAgICAvLyBEYXRhIHZhbGlkYXRvcnMuXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlRW52aXJvbm1lbnRJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXdzUmVxdWVzdFNpZ25lciA9IG51bGw7XG4gICAgICAgIHRoaXMucmVnaW9uID0gJyc7XG4gICAgfVxuICAgIHZhbGlkYXRlRW52aXJvbm1lbnRJZCgpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLmVudmlyb25tZW50SWQ/Lm1hdGNoKC9eKGF3cykoXFxkKykkLyk7XG4gICAgICAgIGlmICghbWF0Y2ggfHwgIXRoaXMucmVnaW9uYWxDcmVkVmVyaWZpY2F0aW9uVXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkIEFXUyBcImNyZWRlbnRpYWxfc291cmNlXCIgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJzZUludChtYXRjaFsyXSwgMTApICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGF3cyB2ZXJzaW9uIFwiJHttYXRjaFsyXX1cIiBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGJ1aWxkLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFuIGV4dGVybmFsIHN1YmplY3QgdG9rZW4gaXMgbmVlZGVkIHRvIGJlIGV4Y2hhbmdlZCBmb3IgYVxuICAgICAqIEdDUCBhY2Nlc3MgdG9rZW4gdmlhIEdDUCBTVFMgZW5kcG9pbnQuIFRoaXMgd2lsbCBjYWxsIHRoZVxuICAgICAqIHtAbGluayBBd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXJ9IHRvIHJldHJpZXZlIGFuIEFXUyByZWdpb24gYW5kIEFXU1xuICAgICAqIFNlY3VyaXR5IENyZWRlbnRpYWxzLCB0aGVuIHVzZSB0aGVtIHRvIGNyZWF0ZSBhIHNpZ25lZCBBV1MgU1RTIHJlcXVlc3QgdGhhdFxuICAgICAqIGNhbiBiZSBleGNoYW5nZWQgZm9yIGEgR0NQIGFjY2VzcyB0b2tlbi5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGV4dGVybmFsIHN1YmplY3QgdG9rZW4uXG4gICAgICovXG4gICAgYXN5bmMgcmV0cmlldmVTdWJqZWN0VG9rZW4oKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgQVdTIHJlcXVlc3Qgc2lnbmVyIGlmIG5vdCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAoIXRoaXMuYXdzUmVxdWVzdFNpZ25lcikge1xuICAgICAgICAgICAgdGhpcy5yZWdpb24gPSBhd2FpdCB0aGlzLmF3c1NlY3VyaXR5Q3JlZGVudGlhbHNTdXBwbGllci5nZXRBd3NSZWdpb24odGhpcy5zdXBwbGllckNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5hd3NSZXF1ZXN0U2lnbmVyID0gbmV3IGF3c3JlcXVlc3RzaWduZXJfMS5Bd3NSZXF1ZXN0U2lnbmVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hd3NTZWN1cml0eUNyZWRlbnRpYWxzU3VwcGxpZXIuZ2V0QXdzU2VjdXJpdHlDcmVkZW50aWFscyh0aGlzLnN1cHBsaWVyQ29udGV4dCk7XG4gICAgICAgICAgICB9LCB0aGlzLnJlZ2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgc2lnbmVkIHJlcXVlc3QgdG8gQVdTIFNUUyBHZXRDYWxsZXJJZGVudGl0eSBBUEkuXG4gICAgICAgIC8vIFVzZSB0aGUgcmVxdWlyZWQgcmVnaW9uYWwgZW5kcG9pbnQuIE90aGVyd2lzZSwgdGhlIHJlcXVlc3Qgd2lsbCBmYWlsLlxuICAgICAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgdGhpcy5hd3NSZXF1ZXN0U2lnbmVyLmdldFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIC4uLkF3c0NsaWVudC5SRVRSWV9DT05GSUcsXG4gICAgICAgICAgICB1cmw6IHRoaXMucmVnaW9uYWxDcmVkVmVyaWZpY2F0aW9uVXJsLnJlcGxhY2UoJ3tyZWdpb259JywgdGhpcy5yZWdpb24pLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGUgR0NQIFNUUyBlbmRwb2ludCBleHBlY3RzIHRoZSBoZWFkZXJzIHRvIGJlIGZvcm1hdHRlZCBhczpcbiAgICAgICAgLy8gW1xuICAgICAgICAvLyAgIHtrZXk6ICd4LWFtei1kYXRlJywgdmFsdWU6ICcuLi4nfSxcbiAgICAgICAgLy8gICB7a2V5OiAnYXV0aG9yaXphdGlvbicsIHZhbHVlOiAnLi4uJ30sXG4gICAgICAgIC8vICAgLi4uXG4gICAgICAgIC8vIF1cbiAgICAgICAgLy8gQW5kIHRoZW4gc2VyaWFsaXplZCBhczpcbiAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gICB1cmw6ICcuLi4nLFxuICAgICAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAvLyAgIGhlYWRlcnM6IFt7a2V5OiAneC1hbXotZGF0ZScsIHZhbHVlOiAnLi4uJ30sIC4uLl1cbiAgICAgICAgLy8gfSkpXG4gICAgICAgIGNvbnN0IHJlZm9ybWF0dGVkSGVhZGVyID0gW107XG4gICAgICAgIGNvbnN0IGV4dGVuZGVkSGVhZGVycyA9IGdheGlvc18xLkdheGlvcy5tZXJnZUhlYWRlcnMoe1xuICAgICAgICAgICAgLy8gVGhlIGZ1bGwsIGNhbm9uaWNhbCByZXNvdXJjZSBuYW1lIG9mIHRoZSB3b3JrbG9hZCBpZGVudGl0eSBwb29sXG4gICAgICAgICAgICAvLyBwcm92aWRlciwgd2l0aCBvciB3aXRob3V0IHRoZSBIVFRQUyBwcmVmaXguXG4gICAgICAgICAgICAvLyBJbmNsdWRpbmcgdGhpcyBoZWFkZXIgYXMgcGFydCBvZiB0aGUgc2lnbmF0dXJlIGlzIHJlY29tbWVuZGVkIHRvXG4gICAgICAgICAgICAvLyBlbnN1cmUgZGF0YSBpbnRlZ3JpdHkuXG4gICAgICAgICAgICAneC1nb29nLWNsb3VkLXRhcmdldC1yZXNvdXJjZSc6IHRoaXMuYXVkaWVuY2UsXG4gICAgICAgIH0sIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIC8vIFJlZm9ybWF0IGhlYWRlciB0byBHQ1AgU1RTIGV4cGVjdGVkIGZvcm1hdC5cbiAgICAgICAgZXh0ZW5kZWRIZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHJlZm9ybWF0dGVkSGVhZGVyLnB1c2goeyBrZXksIHZhbHVlIH0pKTtcbiAgICAgICAgLy8gU2VyaWFsaXplIHRoZSByZWZvcm1hdHRlZCBzaWduZWQgcmVxdWVzdC5cbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlZm9ybWF0dGVkSGVhZGVyLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuZXhwb3J0cy5Bd3NDbGllbnQgPSBBd3NDbGllbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hd3NjbGllbnQuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludmFsaWRTdWJqZWN0VG9rZW5FcnJvciA9IGV4cG9ydHMuSW52YWxpZE1lc3NhZ2VGaWVsZEVycm9yID0gZXhwb3J0cy5JbnZhbGlkQ29kZUZpZWxkRXJyb3IgPSBleHBvcnRzLkludmFsaWRUb2tlblR5cGVGaWVsZEVycm9yID0gZXhwb3J0cy5JbnZhbGlkRXhwaXJhdGlvblRpbWVGaWVsZEVycm9yID0gZXhwb3J0cy5JbnZhbGlkU3VjY2Vzc0ZpZWxkRXJyb3IgPSBleHBvcnRzLkludmFsaWRWZXJzaW9uRmllbGRFcnJvciA9IGV4cG9ydHMuRXhlY3V0YWJsZVJlc3BvbnNlRXJyb3IgPSBleHBvcnRzLkV4ZWN1dGFibGVSZXNwb25zZSA9IHZvaWQgMDtcbmNvbnN0IFNBTUxfU1VCSkVDVF9UT0tFTl9UWVBFID0gJ3VybjppZXRmOnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnNhbWwyJztcbmNvbnN0IE9JRENfU1VCSkVDVF9UT0tFTl9UWVBFMSA9ICd1cm46aWV0ZjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTppZF90b2tlbic7XG5jb25zdCBPSURDX1NVQkpFQ1RfVE9LRU5fVFlQRTIgPSAndXJuOmlldGY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6and0Jztcbi8qKlxuICogRGVmaW5lcyB0aGUgcmVzcG9uc2Ugb2YgYSAzcmQgcGFydHkgZXhlY3V0YWJsZSBydW4gYnkgdGhlIHBsdWdnYWJsZSBhdXRoIGNsaWVudC5cbiAqL1xuY2xhc3MgRXhlY3V0YWJsZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgRXhlY3V0YWJsZSByZXNwb25zZS4gT25seSB2ZXJzaW9uIDEgaXMgY3VycmVudGx5IHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICB2ZXJzaW9uO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGV4ZWN1dGFibGUgcmFuIHN1Y2Nlc3NmdWxseS5cbiAgICAgKi9cbiAgICBzdWNjZXNzO1xuICAgIC8qKlxuICAgICAqIFRoZSBlcG9jaCB0aW1lIGZvciBleHBpcmF0aW9uIG9mIHRoZSB0b2tlbiBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIGV4cGlyYXRpb25UaW1lO1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHN1YmplY3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlLCBjdXJyZW50bHkgc3VwcG9ydGVkIHZhbHVlcyBhcmU6XG4gICAgICogdXJuOmlldGY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6c2FtbDJcbiAgICAgKiB1cm46aWV0ZjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTppZF90b2tlblxuICAgICAqIHVybjppZXRmOnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOmp3dFxuICAgICAqL1xuICAgIHRva2VuVHlwZTtcbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgY29kZSBmcm9tIHRoZSBleGVjdXRhYmxlLlxuICAgICAqL1xuICAgIGVycm9yQ29kZTtcbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBleGVjdXRhYmxlLlxuICAgICAqL1xuICAgIGVycm9yTWVzc2FnZTtcbiAgICAvKipcbiAgICAgKiBUaGUgc3ViamVjdCB0b2tlbiBmcm9tIHRoZSBleGVjdXRhYmxlLCBmb3JtYXQgZGVwZW5kcyBvbiB0b2tlblR5cGUuXG4gICAgICovXG4gICAgc3ViamVjdFRva2VuO1xuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlcyBhbiBFeGVjdXRhYmxlUmVzcG9uc2UgaW5zdGFuY2UgdXNpbmcgdGhlIHByb3ZpZGVkIEpTT04gb2JqZWN0XG4gICAgICogZnJvbSB0aGUgb3V0cHV0IG9mIHRoZSBleGVjdXRhYmxlLlxuICAgICAqIEBwYXJhbSByZXNwb25zZUpzb24gUmVzcG9uc2UgZnJvbSBhIDNyZCBwYXJ0eSBleGVjdXRhYmxlLCBsb2FkZWQgZnJvbSBhXG4gICAgICogcnVuIG9mIHRoZSBleGVjdXRhYmxlIG9yIGEgY2FjaGVkIG91dHB1dCBmaWxlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlSnNvbikge1xuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSByZXF1aXJlZCBmaWVsZHMgZXhpc3QgaW4gdGhlIGpzb24gcmVzcG9uc2UuXG4gICAgICAgIGlmICghcmVzcG9uc2VKc29uLnZlcnNpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkVmVyc2lvbkZpZWxkRXJyb3IoXCJFeGVjdXRhYmxlIHJlc3BvbnNlIG11c3QgY29udGFpbiBhICd2ZXJzaW9uJyBmaWVsZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlSnNvbi5zdWNjZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkU3VjY2Vzc0ZpZWxkRXJyb3IoXCJFeGVjdXRhYmxlIHJlc3BvbnNlIG11c3QgY29udGFpbiBhICdzdWNjZXNzJyBmaWVsZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gcmVzcG9uc2VKc29uLnZlcnNpb247XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IHJlc3BvbnNlSnNvbi5zdWNjZXNzO1xuICAgICAgICAvLyBWYWxpZGF0ZSByZXF1aXJlZCBmaWVsZHMgZm9yIGEgc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICAgICAgaWYgKHRoaXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IHJlc3BvbnNlSnNvbi5leHBpcmF0aW9uX3RpbWU7XG4gICAgICAgICAgICB0aGlzLnRva2VuVHlwZSA9IHJlc3BvbnNlSnNvbi50b2tlbl90eXBlO1xuICAgICAgICAgICAgLy8gVmFsaWRhdGUgdG9rZW4gdHlwZSBmaWVsZC5cbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuVHlwZSAhPT0gU0FNTF9TVUJKRUNUX1RPS0VOX1RZUEUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuVHlwZSAhPT0gT0lEQ19TVUJKRUNUX1RPS0VOX1RZUEUxICYmXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlblR5cGUgIT09IE9JRENfU1VCSkVDVF9UT0tFTl9UWVBFMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkVG9rZW5UeXBlRmllbGRFcnJvcihcIkV4ZWN1dGFibGUgcmVzcG9uc2UgbXVzdCBjb250YWluIGEgJ3Rva2VuX3R5cGUnIGZpZWxkIHdoZW4gc3VjY2Vzc2Z1bCBcIiArXG4gICAgICAgICAgICAgICAgICAgIGBhbmQgaXQgbXVzdCBiZSBvbmUgb2YgJHtPSURDX1NVQkpFQ1RfVE9LRU5fVFlQRTF9LCAke09JRENfU1VCSkVDVF9UT0tFTl9UWVBFMn0sIG9yICR7U0FNTF9TVUJKRUNUX1RPS0VOX1RZUEV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgc3ViamVjdCB0b2tlbi5cbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuVHlwZSA9PT0gU0FNTF9TVUJKRUNUX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlSnNvbi5zYW1sX3Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkU3ViamVjdFRva2VuRXJyb3IoYEV4ZWN1dGFibGUgcmVzcG9uc2UgbXVzdCBjb250YWluIGEgJ3NhbWxfcmVzcG9uc2UnIGZpZWxkIHdoZW4gdG9rZW5fdHlwZT0ke1NBTUxfU1VCSkVDVF9UT0tFTl9UWVBFfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0VG9rZW4gPSByZXNwb25zZUpzb24uc2FtbF9yZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2VKc29uLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkU3ViamVjdFRva2VuRXJyb3IoXCJFeGVjdXRhYmxlIHJlc3BvbnNlIG11c3QgY29udGFpbiBhICdpZF90b2tlbicgZmllbGQgd2hlbiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBgdG9rZW5fdHlwZT0ke09JRENfU1VCSkVDVF9UT0tFTl9UWVBFMX0gb3IgJHtPSURDX1NVQkpFQ1RfVE9LRU5fVFlQRTJ9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RUb2tlbiA9IHJlc3BvbnNlSnNvbi5pZF90b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEJvdGggY29kZSBhbmQgbWVzc2FnZSBtdXN0IGJlIHByb3ZpZGVkIGZvciB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VzLlxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZUpzb24uY29kZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQ29kZUZpZWxkRXJyb3IoXCJFeGVjdXRhYmxlIHJlc3BvbnNlIG11c3QgY29udGFpbiBhICdjb2RlJyBmaWVsZCB3aGVuIHVuc3VjY2Vzc2Z1bC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlSnNvbi5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRNZXNzYWdlRmllbGRFcnJvcihcIkV4ZWN1dGFibGUgcmVzcG9uc2UgbXVzdCBjb250YWluIGEgJ21lc3NhZ2UnIGZpZWxkIHdoZW4gdW5zdWNjZXNzZnVsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb2RlID0gcmVzcG9uc2VKc29uLmNvZGU7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlc3BvbnNlSnNvbi5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gQSBib29sZWFuIHJlcHJlc2VudGluZyBpZiB0aGUgcmVzcG9uc2UgaGFzIGEgdmFsaWQgdG9rZW4uIFJldHVybnNcbiAgICAgKiB0cnVlIHdoZW4gdGhlIHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsIGFuZCB0aGUgdG9rZW4gaXMgbm90IGV4cGlyZWQuXG4gICAgICovXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRXhwaXJlZCgpICYmIHRoaXMuc3VjY2VzcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIGlmIHRoZSByZXNwb25zZSBpcyBleHBpcmVkLiBSZXR1cm5zIHRydWUgaWYgdGhlXG4gICAgICogcHJvdmlkZWQgdGltZW91dCBoYXMgcGFzc2VkLlxuICAgICAqL1xuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmV4cGlyYXRpb25UaW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPCBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSk7XG4gICAgfVxufVxuZXhwb3J0cy5FeGVjdXRhYmxlUmVzcG9uc2UgPSBFeGVjdXRhYmxlUmVzcG9uc2U7XG4vKipcbiAqIEFuIGVycm9yIHRocm93biBieSB0aGUgRXhlY3V0YWJsZVJlc3BvbnNlIGNsYXNzLlxuICovXG5jbGFzcyBFeGVjdXRhYmxlUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhlY3V0YWJsZVJlc3BvbnNlRXJyb3IgPSBFeGVjdXRhYmxlUmVzcG9uc2VFcnJvcjtcbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlICd2ZXJzaW9uJyBmaWVsZCBpbiBhbiBleGVjdXRhYmxlIHJlc3BvbnNlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC5cbiAqL1xuY2xhc3MgSW52YWxpZFZlcnNpb25GaWVsZEVycm9yIGV4dGVuZHMgRXhlY3V0YWJsZVJlc3BvbnNlRXJyb3Ige1xufVxuZXhwb3J0cy5JbnZhbGlkVmVyc2lvbkZpZWxkRXJyb3IgPSBJbnZhbGlkVmVyc2lvbkZpZWxkRXJyb3I7XG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSAnc3VjY2VzcycgZmllbGQgaW4gYW4gZXhlY3V0YWJsZSByZXNwb25zZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuXG4gKi9cbmNsYXNzIEludmFsaWRTdWNjZXNzRmllbGRFcnJvciBleHRlbmRzIEV4ZWN1dGFibGVSZXNwb25zZUVycm9yIHtcbn1cbmV4cG9ydHMuSW52YWxpZFN1Y2Nlc3NGaWVsZEVycm9yID0gSW52YWxpZFN1Y2Nlc3NGaWVsZEVycm9yO1xuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgJ2V4cGlyYXRpb25fdGltZScgZmllbGQgaW4gYW4gZXhlY3V0YWJsZSByZXNwb25zZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuXG4gKi9cbmNsYXNzIEludmFsaWRFeHBpcmF0aW9uVGltZUZpZWxkRXJyb3IgZXh0ZW5kcyBFeGVjdXRhYmxlUmVzcG9uc2VFcnJvciB7XG59XG5leHBvcnRzLkludmFsaWRFeHBpcmF0aW9uVGltZUZpZWxkRXJyb3IgPSBJbnZhbGlkRXhwaXJhdGlvblRpbWVGaWVsZEVycm9yO1xuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgJ3Rva2VuX3R5cGUnIGZpZWxkIGluIGFuIGV4ZWN1dGFibGUgcmVzcG9uc2UgaXMgbWlzc2luZyBvciBpbnZhbGlkLlxuICovXG5jbGFzcyBJbnZhbGlkVG9rZW5UeXBlRmllbGRFcnJvciBleHRlbmRzIEV4ZWN1dGFibGVSZXNwb25zZUVycm9yIHtcbn1cbmV4cG9ydHMuSW52YWxpZFRva2VuVHlwZUZpZWxkRXJyb3IgPSBJbnZhbGlkVG9rZW5UeXBlRmllbGRFcnJvcjtcbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlICdjb2RlJyBmaWVsZCBpbiBhbiBleGVjdXRhYmxlIHJlc3BvbnNlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC5cbiAqL1xuY2xhc3MgSW52YWxpZENvZGVGaWVsZEVycm9yIGV4dGVuZHMgRXhlY3V0YWJsZVJlc3BvbnNlRXJyb3Ige1xufVxuZXhwb3J0cy5JbnZhbGlkQ29kZUZpZWxkRXJyb3IgPSBJbnZhbGlkQ29kZUZpZWxkRXJyb3I7XG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSAnbWVzc2FnZScgZmllbGQgaW4gYW4gZXhlY3V0YWJsZSByZXNwb25zZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuXG4gKi9cbmNsYXNzIEludmFsaWRNZXNzYWdlRmllbGRFcnJvciBleHRlbmRzIEV4ZWN1dGFibGVSZXNwb25zZUVycm9yIHtcbn1cbmV4cG9ydHMuSW52YWxpZE1lc3NhZ2VGaWVsZEVycm9yID0gSW52YWxpZE1lc3NhZ2VGaWVsZEVycm9yO1xuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgc3ViamVjdCB0b2tlbiBpbiBhbiBleGVjdXRhYmxlIHJlc3BvbnNlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC5cbiAqL1xuY2xhc3MgSW52YWxpZFN1YmplY3RUb2tlbkVycm9yIGV4dGVuZHMgRXhlY3V0YWJsZVJlc3BvbnNlRXJyb3Ige1xufVxuZXhwb3J0cy5JbnZhbGlkU3ViamVjdFRva2VuRXJyb3IgPSBJbnZhbGlkU3ViamVjdFRva2VuRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leGVjdXRhYmxlLXJlc3BvbnNlLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbHVnZ2FibGVBdXRoSGFuZGxlciA9IGV4cG9ydHMuRXhlY3V0YWJsZUVycm9yID0gdm9pZCAwO1xuY29uc3QgZXhlY3V0YWJsZV9yZXNwb25zZV8xID0gcmVxdWlyZShcIi4vZXhlY3V0YWJsZS1yZXNwb25zZVwiKTtcbmNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG4vKipcbiAqIEVycm9yIHRocm93biBmcm9tIHRoZSBleGVjdXRhYmxlIHJ1biBieSBQbHVnZ2FibGVBdXRoQ2xpZW50LlxuICovXG5jbGFzcyBFeGVjdXRhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqXG4gICAgICogVGhlIGV4aXQgY29kZSByZXR1cm5lZCBieSB0aGUgZXhlY3V0YWJsZS5cbiAgICAgKi9cbiAgICBjb2RlO1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcbiAgICAgICAgc3VwZXIoYFRoZSBleGVjdXRhYmxlIGZhaWxlZCB3aXRoIGV4aXQgY29kZTogJHtjb2RlfSBhbmQgZXJyb3IgbWVzc2FnZTogJHttZXNzYWdlfS5gKTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkV4ZWN1dGFibGVFcnJvciA9IEV4ZWN1dGFibGVFcnJvcjtcbi8qKlxuICogQSBoYW5kbGVyIHVzZWQgdG8gcmV0cmlldmUgM3JkIHBhcnR5IHRva2VuIHJlc3BvbnNlcyBmcm9tIHVzZXIgZGVmaW5lZFxuICogZXhlY3V0YWJsZXMgYW5kIGNhY2hlZCBmaWxlIG91dHB1dCBmb3IgdGhlIFBsdWdnYWJsZUF1dGhDbGllbnQgY2xhc3MuXG4gKi9cbmNsYXNzIFBsdWdnYWJsZUF1dGhIYW5kbGVyIHtcbiAgICBjb21tYW5kQ29tcG9uZW50cztcbiAgICB0aW1lb3V0TWlsbGlzO1xuICAgIG91dHB1dEZpbGU7XG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGVzIGEgUGx1Z2dhYmxlQXV0aEhhbmRsZXIgaW5zdGFuY2UgdXNpbmcgdGhlIHByb3ZpZGVkXG4gICAgICogUGx1Z2dhYmxlQXV0aEhhbmRsZXJPcHRpb25zIG9iamVjdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5jb21tYW5kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbW1hbmQgcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21tYW5kQ29tcG9uZW50cyA9IFBsdWdnYWJsZUF1dGhIYW5kbGVyLnBhcnNlQ29tbWFuZChvcHRpb25zLmNvbW1hbmQpO1xuICAgICAgICB0aGlzLnRpbWVvdXRNaWxsaXMgPSBvcHRpb25zLnRpbWVvdXRNaWxsaXM7XG4gICAgICAgIGlmICghdGhpcy50aW1lb3V0TWlsbGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRpbWVvdXRNaWxsaXMgcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdXRwdXRGaWxlID0gb3B0aW9ucy5vdXRwdXRGaWxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxscyB1c2VyIHByb3ZpZGVkIGV4ZWN1dGFibGUgdG8gZ2V0IGEgM3JkIHBhcnR5IHN1YmplY3QgdG9rZW4gYW5kXG4gICAgICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIGVudk1hcCBhIE1hcCBvZiBhZGRpdGlvbmFsIEVudmlyb25tZW50IFZhcmlhYmxlcyByZXF1aXJlZCBmb3JcbiAgICAgKiAgIHRoZSBleGVjdXRhYmxlLlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZXhlY3V0YWJsZSByZXNwb25zZS5cbiAgICAgKi9cbiAgICByZXRyaWV2ZVJlc3BvbnNlRnJvbUV4ZWN1dGFibGUoZW52TWFwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBTcGF3biBwcm9jZXNzIHRvIHJ1biBleGVjdXRhYmxlIHVzaW5nIGFkZGVkIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRQcm9jZXNzLnNwYXduKHRoaXMuY29tbWFuZENvbXBvbmVudHNbMF0sIHRoaXMuY29tbWFuZENvbXBvbmVudHMuc2xpY2UoMSksIHtcbiAgICAgICAgICAgICAgICBlbnY6IHsgLi4ucHJvY2Vzcy5lbnYsIC4uLk9iamVjdC5mcm9tRW50cmllcyhlbnZNYXApIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICAgICAgICAgIC8vIEFwcGVuZCBzdGRvdXQgdG8gb3V0cHV0IGFzIGV4ZWN1dGFibGUgcnVucy5cbiAgICAgICAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEFwcGVuZCBzdGRlcnIgYXMgZXhlY3V0YWJsZSBydW5zLlxuICAgICAgICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNldCB1cCBhIHRpbWVvdXQgdG8gZW5kIHRoZSBjaGlsZCBwcm9jZXNzIGFuZCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBLaWxsIGNoaWxkIHByb2Nlc3MgYW5kIHJlbW92ZSBsaXN0ZW5lcnMgc28gJ2Nsb3NlJyBldmVudCBkb2Vzbid0IGdldFxuICAgICAgICAgICAgICAgIC8vIHJlYWQgYWZ0ZXIgY2hpbGQgcHJvY2VzcyBpcyBraWxsZWQuXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgY2hpbGQua2lsbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdUaGUgZXhlY3V0YWJsZSBmYWlsZWQgdG8gZmluaXNoIHdpdGhpbiB0aGUgdGltZW91dCBzcGVjaWZpZWQuJykpO1xuICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0TWlsbGlzKTtcbiAgICAgICAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2FuY2VsIHRpbWVvdXQgaWYgZXhlY3V0YWJsZSBjbG9zZXMgYmVmb3JlIHRpbWVvdXQgaXMgcmVhY2hlZC5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGV4ZWN1dGFibGUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgdHJ5IHRvIHJldHVybiB0aGUgcGFyc2VkIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gSlNPTi5wYXJzZShvdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgZXhlY3V0YWJsZV9yZXNwb25zZV8xLkV4ZWN1dGFibGVSZXNwb25zZShyZXNwb25zZUpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXhlY3V0YWJsZV9yZXNwb25zZV8xLkV4ZWN1dGFibGVSZXNwb25zZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBleGVjdXRhYmxlX3Jlc3BvbnNlXzEuRXhlY3V0YWJsZVJlc3BvbnNlRXJyb3IoYFRoZSBleGVjdXRhYmxlIHJldHVybmVkIGFuIGludmFsaWQgcmVzcG9uc2U6ICR7b3V0cHV0fWApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXhlY3V0YWJsZUVycm9yKG91dHB1dCwgY29kZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdXNlciBwcm92aWRlZCBvdXRwdXQgZmlsZSBmb3IgcmVzcG9uc2UgZnJvbSBwcmV2aW91cyBydW4gb2ZcbiAgICAgKiBleGVjdXRhYmxlIGFuZCByZXR1cm4gdGhlIHJlc3BvbnNlIGlmIGl0IGV4aXN0cywgaXMgZm9ybWF0dGVkIGNvcnJlY3RseSwgYW5kIGlzIG5vdCBleHBpcmVkLlxuICAgICAqL1xuICAgIGFzeW5jIHJldHJpZXZlQ2FjaGVkUmVzcG9uc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5vdXRwdXRGaWxlIHx8IHRoaXMub3V0cHV0RmlsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGVQYXRoO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlsZVBhdGggPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFscGF0aCh0aGlzLm91dHB1dEZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIC8vIElmIGZpbGUgcGF0aCBjYW5ub3QgYmUgcmVzb2x2ZWQsIHJldHVybiB1bmRlZmluZWQuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IGZzLnByb21pc2VzLmxzdGF0KGZpbGVQYXRoKSkuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgIC8vIElmIHBhdGggZG9lcyBub3QgbGVhZCB0byBmaWxlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZVN0cmluZyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGZpbGVQYXRoLCB7XG4gICAgICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IG5ldyBleGVjdXRhYmxlX3Jlc3BvbnNlXzEuRXhlY3V0YWJsZVJlc3BvbnNlKHJlc3BvbnNlSnNvbik7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiByZXNwb25zZSBpcyBzdWNjZXNzZnVsIGFuZCB1bmV4cGlyZWQuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBleGVjdXRhYmxlX3Jlc3BvbnNlXzEuRXhlY3V0YWJsZVJlc3BvbnNlKHJlc3BvbnNlSnNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXhlY3V0YWJsZV9yZXNwb25zZV8xLkV4ZWN1dGFibGVSZXNwb25zZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgZXhlY3V0YWJsZV9yZXNwb25zZV8xLkV4ZWN1dGFibGVSZXNwb25zZUVycm9yKGBUaGUgb3V0cHV0IGZpbGUgY29udGFpbmVkIGFuIGludmFsaWQgcmVzcG9uc2U6ICR7cmVzcG9uc2VTdHJpbmd9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIGdpdmVuIGNvbW1hbmQgc3RyaW5nIGludG8gY29tcG9uZW50IGFycmF5LCBzcGxpdHRpbmcgb24gc3BhY2VzIHVubGVzc1xuICAgICAqIHNwYWNlcyBhcmUgYmV0d2VlbiBxdW90YXRpb24gbWFya3MuXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIC8vIFNwbGl0IHRoZSBjb21tYW5kIGludG8gY29tcG9uZW50cyBieSBzcGxpdHRpbmcgb24gc3BhY2VzLFxuICAgICAgICAvLyB1bmxlc3Mgc3BhY2VzIGFyZSBjb250YWluZWQgaW4gcXVvdGF0aW9uIG1hcmtzLlxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29tbWFuZC5tYXRjaCgvKD86W15cXHNcIl0rfFwiW15cIl0qXCIpKy9nKTtcbiAgICAgICAgaWYgKCFjb21wb25lbnRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb3ZpZGVkIGNvbW1hbmQ6IFwiJHtjb21tYW5kfVwiIGNvdWxkIG5vdCBiZSBwYXJzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHF1b3RhdGlvbiBtYXJrcyBmcm9tIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBlYWNoIGNvbXBvbmVudCBpZiB0aGV5IGFyZSBwcmVzZW50LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzW2ldWzBdID09PSAnXCInICYmIGNvbXBvbmVudHNbaV0uc2xpY2UoLTEpID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1tpXSA9IGNvbXBvbmVudHNbaV0uc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydHMuUGx1Z2dhYmxlQXV0aEhhbmRsZXIgPSBQbHVnZ2FibGVBdXRoSGFuZGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdnYWJsZS1hdXRoLWhhbmRsZXIuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsdWdnYWJsZUF1dGhDbGllbnQgPSBleHBvcnRzLkV4ZWN1dGFibGVFcnJvciA9IHZvaWQgMDtcbmNvbnN0IGJhc2VleHRlcm5hbGNsaWVudF8xID0gcmVxdWlyZShcIi4vYmFzZWV4dGVybmFsY2xpZW50XCIpO1xuY29uc3QgZXhlY3V0YWJsZV9yZXNwb25zZV8xID0gcmVxdWlyZShcIi4vZXhlY3V0YWJsZS1yZXNwb25zZVwiKTtcbmNvbnN0IHBsdWdnYWJsZV9hdXRoX2hhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL3BsdWdnYWJsZS1hdXRoLWhhbmRsZXJcIik7XG52YXIgcGx1Z2dhYmxlX2F1dGhfaGFuZGxlcl8yID0gcmVxdWlyZShcIi4vcGx1Z2dhYmxlLWF1dGgtaGFuZGxlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkV4ZWN1dGFibGVFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGx1Z2dhYmxlX2F1dGhfaGFuZGxlcl8yLkV4ZWN1dGFibGVFcnJvcjsgfSB9KTtcbi8qKlxuICogVGhlIGRlZmF1bHQgZXhlY3V0YWJsZSB0aW1lb3V0IHdoZW4gbm9uZSBpcyBwcm92aWRlZCwgaW4gbWlsbGlzZWNvbmRzLlxuICovXG5jb25zdCBERUZBVUxUX0VYRUNVVEFCTEVfVElNRU9VVF9NSUxMSVMgPSAzMCAqIDEwMDA7XG4vKipcbiAqIFRoZSBtaW5pbXVtIGFsbG93ZWQgZXhlY3V0YWJsZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcy5cbiAqL1xuY29uc3QgTUlOSU1VTV9FWEVDVVRBQkxFX1RJTUVPVVRfTUlMTElTID0gNSAqIDEwMDA7XG4vKipcbiAqIFRoZSBtYXhpbXVtIGFsbG93ZWQgZXhlY3V0YWJsZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcy5cbiAqL1xuY29uc3QgTUFYSU1VTV9FWEVDVVRBQkxFX1RJTUVPVVRfTUlMTElTID0gMTIwICogMTAwMDtcbi8qKlxuICogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIHRvIGNoZWNrIHRvIHNlZSBpZiBleGVjdXRhYmxlIGNhbiBiZSBydW4uXG4gKiBWYWx1ZSBtdXN0IGJlIHNldCB0byAnMScgZm9yIHRoZSBleGVjdXRhYmxlIHRvIHJ1bi5cbiAqL1xuY29uc3QgR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfQUxMT1dfRVhFQ1VUQUJMRVMgPSAnR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfQUxMT1dfRVhFQ1VUQUJMRVMnO1xuLyoqXG4gKiBUaGUgbWF4aW11bSBjdXJyZW50bHkgc3VwcG9ydGVkIGV4ZWN1dGFibGUgdmVyc2lvbi5cbiAqL1xuY29uc3QgTUFYSU1VTV9FWEVDVVRBQkxFX1ZFUlNJT04gPSAxO1xuLyoqXG4gKiBQbHVnZ2FibGVBdXRoQ2xpZW50IGVuYWJsZXMgdGhlIGV4Y2hhbmdlIG9mIHdvcmtsb2FkIGlkZW50aXR5IHBvb2wgZXh0ZXJuYWwgY3JlZGVudGlhbHMgZm9yXG4gKiBHb29nbGUgYWNjZXNzIHRva2VucyBieSByZXRyaWV2aW5nIDNyZCBwYXJ0eSB0b2tlbnMgdGhyb3VnaCBhIHVzZXIgc3VwcGxpZWQgZXhlY3V0YWJsZS4gVGhlc2VcbiAqIHNjcmlwdHMvZXhlY3V0YWJsZXMgYXJlIGNvbXBsZXRlbHkgaW5kZXBlbmRlbnQgb2YgdGhlIEdvb2dsZSBDbG91ZCBBdXRoIGxpYnJhcmllcy4gVGhlc2VcbiAqIGNyZWRlbnRpYWxzIHBsdWcgaW50byBBREMgYW5kIHdpbGwgY2FsbCB0aGUgc3BlY2lmaWVkIGV4ZWN1dGFibGUgdG8gcmV0cmlldmUgdGhlIDNyZCBwYXJ0eSB0b2tlblxuICogdG8gYmUgZXhjaGFuZ2VkIGZvciBhIEdvb2dsZSBhY2Nlc3MgdG9rZW4uXG4gKlxuICogPHA+VG8gdXNlIHRoZXNlIGNyZWRlbnRpYWxzLCB0aGUgR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfQUxMT1dfRVhFQ1VUQUJMRVMgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAqIG11c3QgYmUgc2V0IHRvICcxJy4gVGhpcyBpcyBmb3Igc2VjdXJpdHkgcmVhc29ucy5cbiAqXG4gKiA8cD5Cb3RoIE9JREMgYW5kIFNBTUwgYXJlIHN1cHBvcnRlZC4gVGhlIGV4ZWN1dGFibGUgbXVzdCBhZGhlcmUgdG8gYSBzcGVjaWZpYyByZXNwb25zZSBmb3JtYXRcbiAqIGRlZmluZWQgYmVsb3cuXG4gKlxuICogPHA+VGhlIGV4ZWN1dGFibGUgbXVzdCBwcmludCBvdXQgdGhlIDNyZCBwYXJ0eSB0b2tlbiB0byBTVERPVVQgaW4gSlNPTiBmb3JtYXQuIFdoZW4gYW5cbiAqIG91dHB1dF9maWxlIGlzIHNwZWNpZmllZCBpbiB0aGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uLCB0aGUgZXhlY3V0YWJsZSBtdXN0IGFsc28gaGFuZGxlIHdyaXRpbmcgdGhlXG4gKiBKU09OIHJlc3BvbnNlIHRvIHRoaXMgZmlsZS5cbiAqXG4gKiA8cHJlPlxuICogT0lEQyByZXNwb25zZSBzYW1wbGU6XG4gKiB7XG4gKiAgIFwidmVyc2lvblwiOiAxLFxuICogICBcInN1Y2Nlc3NcIjogdHJ1ZSxcbiAqICAgXCJ0b2tlbl90eXBlXCI6IFwidXJuOmlldGY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6aWRfdG9rZW5cIixcbiAqICAgXCJpZF90b2tlblwiOiBcIkhFQURFUi5QQVlMT0FELlNJR05BVFVSRVwiLFxuICogICBcImV4cGlyYXRpb25fdGltZVwiOiAxNjIwNDMzMzQxXG4gKiB9XG4gKlxuICogU0FNTDIgcmVzcG9uc2Ugc2FtcGxlOlxuICoge1xuICogICBcInZlcnNpb25cIjogMSxcbiAqICAgXCJzdWNjZXNzXCI6IHRydWUsXG4gKiAgIFwidG9rZW5fdHlwZVwiOiBcInVybjppZXRmOnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnNhbWwyXCIsXG4gKiAgIFwic2FtbF9yZXNwb25zZVwiOiBcIi4uLlwiLFxuICogICBcImV4cGlyYXRpb25fdGltZVwiOiAxNjIwNDMzMzQxXG4gKiB9XG4gKlxuICogRXJyb3IgcmVzcG9uc2Ugc2FtcGxlOlxuICoge1xuICogICBcInZlcnNpb25cIjogMSxcbiAqICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxuICogICBcImNvZGVcIjogXCI0MDFcIixcbiAqICAgXCJtZXNzYWdlXCI6IFwiRXJyb3IgbWVzc2FnZS5cIlxuICogfVxuICogPC9wcmU+XG4gKlxuICogPHA+VGhlIFwiZXhwaXJhdGlvbl90aW1lXCIgZmllbGQgaW4gdGhlIEpTT04gcmVzcG9uc2UgaXMgb25seSByZXF1aXJlZCBmb3Igc3VjY2Vzc2Z1bFxuICogcmVzcG9uc2VzIHdoZW4gYW4gb3V0cHV0IGZpbGUgd2FzIHNwZWNpZmllZCBpbiB0aGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uXG4gKlxuICogPHA+VGhlIGF1dGggbGlicmFyaWVzIHdpbGwgcG9wdWxhdGUgY2VydGFpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIGFjY2Vzc2libGUgYnkgdGhlXG4gKiBleGVjdXRhYmxlLCBzdWNoIGFzOiBHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9BVURJRU5DRSwgR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfVE9LRU5fVFlQRSxcbiAqIEdPT0dMRV9FWFRFUk5BTF9BQ0NPVU5UX0lOVEVSQUNUSVZFLCBHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9JTVBFUlNPTkFURURfRU1BSUwsIGFuZFxuICogR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfT1VUUFVUX0ZJTEUuXG4gKlxuICogPHA+UGxlYXNlIHNlZSB0aGlzIHJlcG9zaXRvcmllcyBSRUFETUUgZm9yIGEgY29tcGxldGUgZXhlY3V0YWJsZSByZXF1ZXN0L3Jlc3BvbnNlIHNwZWNpZmljYXRpb24uXG4gKi9cbmNsYXNzIFBsdWdnYWJsZUF1dGhDbGllbnQgZXh0ZW5kcyBiYXNlZXh0ZXJuYWxjbGllbnRfMS5CYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tbWFuZCB1c2VkIHRvIHJldHJpZXZlIHRoZSB0aGlyZCBwYXJ0eSB0b2tlbi5cbiAgICAgKi9cbiAgICBjb21tYW5kO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgcnVubmluZyBleGVjdXRhYmxlLFxuICAgICAqIHNldCB0byBkZWZhdWx0IGlmIG5vbmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgdGltZW91dE1pbGxpcztcbiAgICAvKipcbiAgICAgKiBUaGUgcGF0aCB0byBmaWxlIHRvIGNoZWNrIGZvciBjYWNoZWQgZXhlY3V0YWJsZSByZXNwb25zZS5cbiAgICAgKi9cbiAgICBvdXRwdXRGaWxlO1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGFibGUgYW5kIG91dHB1dCBmaWxlIGhhbmRsZXIuXG4gICAgICovXG4gICAgaGFuZGxlcjtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBQbHVnZ2FibGVBdXRoQ2xpZW50IGluc3RhbmNlIHVzaW5nIHRoZSBwcm92aWRlZCBKU09OXG4gICAgICogb2JqZWN0IGxvYWRlZCBmcm9tIGFuIGV4dGVybmFsIGFjY291bnQgY3JlZGVudGlhbHMgZmlsZS5cbiAgICAgKiBBbiBlcnJvciBpcyB0aHJvd24gaWYgdGhlIGNyZWRlbnRpYWwgaXMgbm90IGEgdmFsaWQgcGx1Z2dhYmxlIGF1dGggY3JlZGVudGlhbC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgZXh0ZXJuYWwgYWNjb3VudCBvcHRpb25zIG9iamVjdCB0eXBpY2FsbHkgbG9hZGVkIGZyb21cbiAgICAgKiAgIHRoZSBleHRlcm5hbCBhY2NvdW50IEpTT04gY3JlZGVudGlhbCBmaWxlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIGlmICghb3B0aW9ucy5jcmVkZW50aWFsX3NvdXJjZS5leGVjdXRhYmxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkIFBsdWdnYWJsZSBBdXRoIFwiY3JlZGVudGlhbF9zb3VyY2VcIiBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbW1hbmQgPSBvcHRpb25zLmNyZWRlbnRpYWxfc291cmNlLmV4ZWN1dGFibGUuY29tbWFuZDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWQgUGx1Z2dhYmxlIEF1dGggXCJjcmVkZW50aWFsX3NvdXJjZVwiIHByb3ZpZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm92aWRlZCB0aW1lb3V0IGV4aXN0cyBhbmQgaWYgaXQgaXMgdmFsaWQuXG4gICAgICAgIGlmIChvcHRpb25zLmNyZWRlbnRpYWxfc291cmNlLmV4ZWN1dGFibGUudGltZW91dF9taWxsaXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0TWlsbGlzID0gREVGQVVMVF9FWEVDVVRBQkxFX1RJTUVPVVRfTUlMTElTO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0TWlsbGlzID0gb3B0aW9ucy5jcmVkZW50aWFsX3NvdXJjZS5leGVjdXRhYmxlLnRpbWVvdXRfbWlsbGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dE1pbGxpcyA8IE1JTklNVU1fRVhFQ1VUQUJMRV9USU1FT1VUX01JTExJUyB8fFxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dE1pbGxpcyA+IE1BWElNVU1fRVhFQ1VUQUJMRV9USU1FT1VUX01JTExJUykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGltZW91dCBtdXN0IGJlIGJldHdlZW4gJHtNSU5JTVVNX0VYRUNVVEFCTEVfVElNRU9VVF9NSUxMSVN9IGFuZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7TUFYSU1VTV9FWEVDVVRBQkxFX1RJTUVPVVRfTUlMTElTfSBtaWxsaXNlY29uZHMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdXRwdXRGaWxlID0gb3B0aW9ucy5jcmVkZW50aWFsX3NvdXJjZS5leGVjdXRhYmxlLm91dHB1dF9maWxlO1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgcGx1Z2dhYmxlX2F1dGhfaGFuZGxlcl8xLlBsdWdnYWJsZUF1dGhIYW5kbGVyKHtcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMuY29tbWFuZCxcbiAgICAgICAgICAgIHRpbWVvdXRNaWxsaXM6IHRoaXMudGltZW91dE1pbGxpcyxcbiAgICAgICAgICAgIG91dHB1dEZpbGU6IHRoaXMub3V0cHV0RmlsZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbFNvdXJjZVR5cGUgPSAnZXhlY3V0YWJsZSc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFuIGV4dGVybmFsIHN1YmplY3QgdG9rZW4gaXMgbmVlZGVkIHRvIGJlIGV4Y2hhbmdlZCBmb3IgYVxuICAgICAqIEdDUCBhY2Nlc3MgdG9rZW4gdmlhIEdDUCBTVFMgZW5kcG9pbnQuXG4gICAgICogVGhpcyB1c2VzIHRoZSBgb3B0aW9ucy5jcmVkZW50aWFsX3NvdXJjZWAgb2JqZWN0IHRvIGZpZ3VyZSBvdXQgaG93XG4gICAgICogdG8gcmV0cmlldmUgdGhlIHRva2VuIHVzaW5nIHRoZSBjdXJyZW50IGVudmlyb25tZW50LiBJbiB0aGlzIGNhc2UsXG4gICAgICogdGhpcyBjYWxscyBhIHVzZXIgcHJvdmlkZWQgZXhlY3V0YWJsZSB3aGljaCByZXR1cm5zIHRoZSBzdWJqZWN0IHRva2VuLlxuICAgICAqIFRoZSBsb2dpYyBpcyBzdW1tYXJpemVkIGFzOlxuICAgICAqIDEuIFZhbGlkYXRlZCB0aGF0IHRoZSBleGVjdXRhYmxlIGlzIGFsbG93ZWQgdG8gcnVuLiBUaGVcbiAgICAgKiAgICBHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9BTExPV19FWEVDVVRBQkxFUyBlbnZpcm9ubWVudCBtdXN0IGJlIHNldCB0b1xuICAgICAqICAgIDEgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gICAgICogMi4gSWYgYW4gb3V0cHV0IGZpbGUgaXMgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyLCBjaGVjayB0aGUgZmlsZSBsb2NhdGlvblxuICAgICAqICAgIGZvciBhIHJlc3BvbnNlLiBJZiB0aGUgZmlsZSBleGlzdHMgYW5kIGNvbnRhaW5zIGEgdmFsaWQgcmVzcG9uc2UsXG4gICAgICogICAgcmV0dXJuIHRoZSBzdWJqZWN0IHRva2VuIGZyb20gdGhlIGZpbGUuXG4gICAgICogMy4gQ2FsbCB0aGUgcHJvdmlkZWQgZXhlY3V0YWJsZSBhbmQgcmV0dXJuIHJlc3BvbnNlLlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZXh0ZXJuYWwgc3ViamVjdCB0b2tlbi5cbiAgICAgKi9cbiAgICBhc3luYyByZXRyaWV2ZVN1YmplY3RUb2tlbigpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGV4ZWN1dGFibGUgaXMgYWxsb3dlZCB0byBydW4uXG4gICAgICAgIGlmIChwcm9jZXNzLmVudltHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9BTExPV19FWEVDVVRBQkxFU10gIT09ICcxJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbHVnZ2FibGUgQXV0aCBleGVjdXRhYmxlcyBuZWVkIHRvIGJlIGV4cGxpY2l0bHkgYWxsb3dlZCB0byBydW4gYnkgJyArXG4gICAgICAgICAgICAgICAgJ3NldHRpbmcgdGhlIEdPT0dMRV9FWFRFUk5BTF9BQ0NPVU5UX0FMTE9XX0VYRUNVVEFCTEVTIGVudmlyb25tZW50ICcgK1xuICAgICAgICAgICAgICAgICdWYXJpYWJsZSB0byAxLicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBleGVjdXRhYmxlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFRyeSB0byBnZXQgY2FjaGVkIGV4ZWN1dGFibGUgcmVzcG9uc2UgZnJvbSBvdXRwdXQgZmlsZS5cbiAgICAgICAgaWYgKHRoaXMub3V0cHV0RmlsZSkge1xuICAgICAgICAgICAgZXhlY3V0YWJsZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5oYW5kbGVyLnJldHJpZXZlQ2FjaGVkUmVzcG9uc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyByZXNwb25zZSBmcm9tIG91dHB1dCBmaWxlLCBjYWxsIHRoZSBleGVjdXRhYmxlLlxuICAgICAgICBpZiAoIWV4ZWN1dGFibGVSZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gU2V0IHVwIGVudmlyb25tZW50IG1hcCB3aXRoIHJlcXVpcmVkIHZhbHVlcyBmb3IgdGhlIGV4ZWN1dGFibGUuXG4gICAgICAgICAgICBjb25zdCBlbnZNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBlbnZNYXAuc2V0KCdHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9BVURJRU5DRScsIHRoaXMuYXVkaWVuY2UpO1xuICAgICAgICAgICAgZW52TWFwLnNldCgnR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfVE9LRU5fVFlQRScsIHRoaXMuc3ViamVjdFRva2VuVHlwZSk7XG4gICAgICAgICAgICAvLyBBbHdheXMgc2V0IHRvIDAgYmVjYXVzZSBpbnRlcmFjdGl2ZSBtb2RlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgICAgICBlbnZNYXAuc2V0KCdHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9JTlRFUkFDVElWRScsICcwJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRwdXRGaWxlKSB7XG4gICAgICAgICAgICAgICAgZW52TWFwLnNldCgnR09PR0xFX0VYVEVSTkFMX0FDQ09VTlRfT1VUUFVUX0ZJTEUnLCB0aGlzLm91dHB1dEZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VydmljZUFjY291bnRFbWFpbCA9IHRoaXMuZ2V0U2VydmljZUFjY291bnRFbWFpbCgpO1xuICAgICAgICAgICAgaWYgKHNlcnZpY2VBY2NvdW50RW1haWwpIHtcbiAgICAgICAgICAgICAgICBlbnZNYXAuc2V0KCdHT09HTEVfRVhURVJOQUxfQUNDT1VOVF9JTVBFUlNPTkFURURfRU1BSUwnLCBzZXJ2aWNlQWNjb3VudEVtYWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4ZWN1dGFibGVSZXNwb25zZSA9XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVyLnJldHJpZXZlUmVzcG9uc2VGcm9tRXhlY3V0YWJsZShlbnZNYXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleGVjdXRhYmxlUmVzcG9uc2UudmVyc2lvbiA+IE1BWElNVU1fRVhFQ1VUQUJMRV9WRVJTSU9OKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZlcnNpb24gb2YgZXhlY3V0YWJsZSBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCwgbWF4aW11bSBzdXBwb3J0ZWQgdmVyc2lvbiBpcyAke01BWElNVU1fRVhFQ1VUQUJMRV9WRVJTSU9OfS5gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGF0IHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsLlxuICAgICAgICBpZiAoIWV4ZWN1dGFibGVSZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcGx1Z2dhYmxlX2F1dGhfaGFuZGxlcl8xLkV4ZWN1dGFibGVFcnJvcihleGVjdXRhYmxlUmVzcG9uc2UuZXJyb3JNZXNzYWdlLCBleGVjdXRhYmxlUmVzcG9uc2UuZXJyb3JDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGF0IHJlc3BvbnNlIGNvbnRhaW5zIGV4cGlyYXRpb24gdGltZSBpZiBvdXRwdXQgZmlsZSB3YXMgc3BlY2lmaWVkLlxuICAgICAgICBpZiAodGhpcy5vdXRwdXRGaWxlKSB7XG4gICAgICAgICAgICBpZiAoIWV4ZWN1dGFibGVSZXNwb25zZS5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGVjdXRhYmxlX3Jlc3BvbnNlXzEuSW52YWxpZEV4cGlyYXRpb25UaW1lRmllbGRFcnJvcignVGhlIGV4ZWN1dGFibGUgcmVzcG9uc2UgbXVzdCBjb250YWluIHRoZSBgZXhwaXJhdGlvbl90aW1lYCBmaWVsZCBmb3Igc3VjY2Vzc2Z1bCByZXNwb25zZXMgd2hlbiBhbiBvdXRwdXRfZmlsZSBoYXMgYmVlbiBzcGVjaWZpZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCByZXNwb25zZSBpcyBub3QgZXhwaXJlZC5cbiAgICAgICAgaWYgKGV4ZWN1dGFibGVSZXNwb25zZS5pc0V4cGlyZWQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeGVjdXRhYmxlIHJlc3BvbnNlIGlzIGV4cGlyZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHN1YmplY3QgdG9rZW4gZnJvbSByZXNwb25zZS5cbiAgICAgICAgcmV0dXJuIGV4ZWN1dGFibGVSZXNwb25zZS5zdWJqZWN0VG9rZW47XG4gICAgfVxufVxuZXhwb3J0cy5QbHVnZ2FibGVBdXRoQ2xpZW50ID0gUGx1Z2dhYmxlQXV0aENsaWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdnYWJsZS1hdXRoLWNsaWVudC5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXh0ZXJuYWxBY2NvdW50Q2xpZW50ID0gdm9pZCAwO1xuY29uc3QgYmFzZWV4dGVybmFsY2xpZW50XzEgPSByZXF1aXJlKFwiLi9iYXNlZXh0ZXJuYWxjbGllbnRcIik7XG5jb25zdCBpZGVudGl0eXBvb2xjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2lkZW50aXR5cG9vbGNsaWVudFwiKTtcbmNvbnN0IGF3c2NsaWVudF8xID0gcmVxdWlyZShcIi4vYXdzY2xpZW50XCIpO1xuY29uc3QgcGx1Z2dhYmxlX2F1dGhfY2xpZW50XzEgPSByZXF1aXJlKFwiLi9wbHVnZ2FibGUtYXV0aC1jbGllbnRcIik7XG4vKipcbiAqIER1bW15IGNsYXNzIHdpdGggbm8gY29uc3RydWN0b3IuIERldmVsb3BlcnMgYXJlIGV4cGVjdGVkIHRvIHVzZSBmcm9tSlNPTi5cbiAqL1xuY2xhc3MgRXh0ZXJuYWxBY2NvdW50Q2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHRlcm5hbEFjY291bnRDbGllbnRzIHNob3VsZCBiZSBpbml0aWFsaXplZCB2aWE6ICcgK1xuICAgICAgICAgICAgJ0V4dGVybmFsQWNjb3VudENsaWVudC5mcm9tSlNPTigpLCAnICtcbiAgICAgICAgICAgICdkaXJlY3RseSB2aWEgZXhwbGljaXQgY29uc3RydWN0b3JzLCBlZy4gJyArXG4gICAgICAgICAgICAnbmV3IEF3c0NsaWVudChvcHRpb25zKSwgbmV3IElkZW50aXR5UG9vbENsaWVudChvcHRpb25zKSwgbmV3JyArXG4gICAgICAgICAgICAnUGx1Z2dhYmxlQXV0aENsaWVudE9wdGlvbnMsIG9yIHZpYSAnICtcbiAgICAgICAgICAgICduZXcgR29vZ2xlQXV0aChvcHRpb25zKS5nZXRDbGllbnQoKScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIHN0YXRpYyBtZXRob2Qgd2lsbCBpbnN0YW50aWF0ZSB0aGVcbiAgICAgKiBjb3JyZXNwb25kaW5nIHR5cGUgb2YgZXh0ZXJuYWwgYWNjb3VudCBjcmVkZW50aWFsIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiB1bmRlcmx5aW5nIGNyZWRlbnRpYWwgc291cmNlLlxuICAgICAqXG4gICAgICogKipJTVBPUlRBTlQqKjogVGhpcyBtZXRob2QgZG9lcyBub3QgdmFsaWRhdGUgdGhlIGNyZWRlbnRpYWwgY29uZmlndXJhdGlvbi5cbiAgICAgKiBBIHNlY3VyaXR5IHJpc2sgb2NjdXJzIHdoZW4gYSBjcmVkZW50aWFsIGNvbmZpZ3VyYXRpb24gY29uZmlndXJlZCB3aXRoXG4gICAgICogbWFsaWNpb3VzIFVSTHMgaXMgdXNlZC4gV2hlbiB0aGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uIGlzIGFjY2VwdGVkIGZyb21cbiAgICAgKiBhbiB1bnRydXN0ZWQgc291cmNlLCB5b3Ugc2hvdWxkIHZhbGlkYXRlIGl0IGJlZm9yZSB1c2luZyBpdCB3aXRoIHRoaXNcbiAgICAgKiBtZXRob2QuIEZvciBtb3JlIGRldGFpbHMsIHNlZVxuICAgICAqIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9kb2NzL2F1dGhlbnRpY2F0aW9uL2V4dGVybmFsL2V4dGVybmFsbHktc291cmNlZC1jcmVkZW50aWFscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBleHRlcm5hbCBhY2NvdW50IG9wdGlvbnMgb2JqZWN0IHR5cGljYWxseSBsb2FkZWRcbiAgICAgKiAgIGZyb20gdGhlIGV4dGVybmFsIGFjY291bnQgSlNPTiBjcmVkZW50aWFsIGZpbGUuXG4gICAgICogQHJldHVybiBBIEJhc2VFeHRlcm5hbEFjY291bnRDbGllbnQgaW5zdGFuY2Ugb3IgbnVsbCBpZiB0aGUgb3B0aW9uc1xuICAgICAqICAgcHJvdmlkZWQgZG8gbm90IGNvcnJlc3BvbmQgdG8gYW4gZXh0ZXJuYWwgYWNjb3VudCBjcmVkZW50aWFsLlxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudHlwZSA9PT0gYmFzZWV4dGVybmFsY2xpZW50XzEuRVhURVJOQUxfQUNDT1VOVF9UWVBFKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jcmVkZW50aWFsX3NvdXJjZT8uZW52aXJvbm1lbnRfaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGF3c2NsaWVudF8xLkF3c0NsaWVudChvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuY3JlZGVudGlhbF9zb3VyY2U/LmV4ZWN1dGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHBsdWdnYWJsZV9hdXRoX2NsaWVudF8xLlBsdWdnYWJsZUF1dGhDbGllbnQob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGlkZW50aXR5cG9vbGNsaWVudF8xLklkZW50aXR5UG9vbENsaWVudChvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5FeHRlcm5hbEFjY291bnRDbGllbnQgPSBFeHRlcm5hbEFjY291bnRDbGllbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHRlcm5hbGNsaWVudC5qcy5tYXAiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnQgPSBleHBvcnRzLkVYVEVSTkFMX0FDQ09VTlRfQVVUSE9SSVpFRF9VU0VSX1RZUEUgPSB2b2lkIDA7XG5jb25zdCBhdXRoY2xpZW50XzEgPSByZXF1aXJlKFwiLi9hdXRoY2xpZW50XCIpO1xuY29uc3Qgb2F1dGgyY29tbW9uXzEgPSByZXF1aXJlKFwiLi9vYXV0aDJjb21tb25cIik7XG5jb25zdCBnYXhpb3NfMSA9IHJlcXVpcmUoXCJnYXhpb3NcIik7XG5jb25zdCBzdHJlYW0gPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY29uc3QgYmFzZWV4dGVybmFsY2xpZW50XzEgPSByZXF1aXJlKFwiLi9iYXNlZXh0ZXJuYWxjbGllbnRcIik7XG4vKipcbiAqIFRoZSBjcmVkZW50aWFscyBKU09OIGZpbGUgdHlwZSBmb3IgZXh0ZXJuYWwgYWNjb3VudCBhdXRob3JpemVkIHVzZXIgY2xpZW50cy5cbiAqL1xuZXhwb3J0cy5FWFRFUk5BTF9BQ0NPVU5UX0FVVEhPUklaRURfVVNFUl9UWVBFID0gJ2V4dGVybmFsX2FjY291bnRfYXV0aG9yaXplZF91c2VyJztcbmNvbnN0IERFRkFVTFRfVE9LRU5fVVJMID0gJ2h0dHBzOi8vc3RzLnt1bml2ZXJzZURvbWFpbn0vdjEvb2F1dGh0b2tlbic7XG4vKipcbiAqIEhhbmRsZXIgZm9yIHRva2VuIHJlZnJlc2ggcmVxdWVzdHMgc2VudCB0byB0aGUgdG9rZW5fdXJsIGVuZHBvaW50IGZvciBleHRlcm5hbFxuICogYXV0aG9yaXplZCB1c2VyIGNyZWRlbnRpYWxzLlxuICovXG5jbGFzcyBFeHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckhhbmRsZXIgZXh0ZW5kcyBvYXV0aDJjb21tb25fMS5PQXV0aENsaWVudEF1dGhIYW5kbGVyIHtcbiAgICAjdG9rZW5SZWZyZXNoRW5kcG9pbnQ7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gRXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJIYW5kbGVyIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCBvZiB0aGUgdG9rZW4gcmVmcmVzaCBlbmRwb2ludC5cbiAgICAgKiBAcGFyYW0gdHJhbnNwb3J0ZXIgVGhlIHRyYW5zcG9ydGVyIHRvIHVzZSBmb3IgdGhlIHJlZnJlc2ggcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0gY2xpZW50QXV0aGVudGljYXRpb24gVGhlIGNsaWVudCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyB0byB1c2VcbiAgICAgKiAgIGZvciB0aGUgcmVmcmVzaCByZXF1ZXN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuI3Rva2VuUmVmcmVzaEVuZHBvaW50ID0gb3B0aW9ucy50b2tlblJlZnJlc2hFbmRwb2ludDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBuZXcgYWNjZXNzIHRva2VuIGZyb20gdGhlIHRva2VuX3VybCBlbmRwb2ludCB1c2luZyB0aGUgcHJvdmlkZWRcbiAgICAgKiAgIHJlZnJlc2ggdG9rZW4uXG4gICAgICogQHBhcmFtIHJlZnJlc2hUb2tlbiBUaGUgcmVmcmVzaCB0b2tlbiB0byB1c2UgdG8gZ2VuZXJhdGUgYSBuZXcgYWNjZXNzIHRva2VuLlxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBPcHRpb25hbCBhZGRpdGlvbmFsIGhlYWRlcnMgdG8gcGFzcyBhbG9uZyB0aGVcbiAgICAgKiAgIHJlcXVlc3QuXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB0b2tlbiByZWZyZXNoIHJlc3BvbnNlIGNvbnRhaW5pbmdcbiAgICAgKiAgIHRoZSByZXF1ZXN0ZWQgYWNjZXNzIHRva2VuIGFuZCBpdHMgZXhwaXJhdGlvbiB0aW1lLlxuICAgICAqL1xuICAgIGFzeW5jIHJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4sIGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIC4uLkV4dGVybmFsQWNjb3VudEF1dGhvcml6ZWRVc2VySGFuZGxlci5SRVRSWV9DT05GSUcsXG4gICAgICAgICAgICB1cmw6IHRoaXMuI3Rva2VuUmVmcmVzaEVuZHBvaW50LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgZGF0YTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50LnNldE1ldGhvZE5hbWUob3B0cywgJ3JlZnJlc2hUb2tlbicpO1xuICAgICAgICAvLyBBcHBseSBPQXV0aCBjbGllbnQgYXV0aGVudGljYXRpb24uXG4gICAgICAgIHRoaXMuYXBwbHlDbGllbnRBdXRoZW50aWNhdGlvbk9wdGlvbnMob3B0cyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMudHJhbnNwb3J0ZXIucmVxdWVzdChvcHRzKTtcbiAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zdCB0b2tlblJlZnJlc2hSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB0b2tlblJlZnJlc2hSZXNwb25zZS5yZXMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlblJlZnJlc2hSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBlcnJvciB0byBPQXV0aEVycm9yLlxuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZ2F4aW9zXzEuR2F4aW9zRXJyb3IgJiYgZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoMCwgb2F1dGgyY29tbW9uXzEuZ2V0RXJyb3JGcm9tT0F1dGhFcnJvclJlc3BvbnNlKShlcnJvci5yZXNwb25zZS5kYXRhLCBcbiAgICAgICAgICAgICAgICAvLyBQcmVzZXJ2ZSBvdGhlciBmaWVsZHMgZnJvbSB0aGUgb3JpZ2luYWwgZXJyb3IuXG4gICAgICAgICAgICAgICAgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVxdWVzdCBjb3VsZCBmYWlsIGJlZm9yZSB0aGUgc2VydmVyIHJlc3BvbmRzLlxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEV4dGVybmFsIEFjY291bnQgQXV0aG9yaXplZCBVc2VyIENsaWVudC4gVGhpcyBpcyB1c2VkIGZvciBPQXV0aDIgY3JlZGVudGlhbHNcbiAqIHNvdXJjZWQgdXNpbmcgZXh0ZXJuYWwgaWRlbnRpdGllcyB0aHJvdWdoIFdvcmtmb3JjZSBJZGVudGl0eSBGZWRlcmF0aW9uLlxuICogT2J0YWluaW5nIHRoZSBpbml0aWFsIGFjY2VzcyBhbmQgcmVmcmVzaCB0b2tlbiBjYW4gYmUgZG9uZSB0aHJvdWdoIHRoZVxuICogR29vZ2xlIENsb3VkIENMSS5cbiAqL1xuY2xhc3MgRXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnQgZXh0ZW5kcyBhdXRoY2xpZW50XzEuQXV0aENsaWVudCB7XG4gICAgY2FjaGVkQWNjZXNzVG9rZW47XG4gICAgZXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJIYW5kbGVyO1xuICAgIHJlZnJlc2hUb2tlbjtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYW4gRXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnQgaW5zdGFuY2VzIHVzaW5nIHRoZVxuICAgICAqIHByb3ZpZGVkIEpTT04gb2JqZWN0IGxvYWRlZCBmcm9tIGEgY3JlZGVudGlhbHMgZmlsZXMuXG4gICAgICogQW4gZXJyb3IgaXMgdGhyb3dzIGlmIHRoZSBjcmVkZW50aWFsIGlzIG5vdCB2YWxpZC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgZXh0ZXJuYWwgYWNjb3VudCBhdXRob3JpemVkIHVzZXIgb3B0aW9uIG9iamVjdCB0eXBpY2FsbHlcbiAgICAgKiAgIGZyb20gdGhlIGV4dGVybmFsIGFjY291dG4gYXV0aG9yaXplZCB1c2VyIEpTT04gY3JlZGVudGlhbCBmaWxlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLnVuaXZlcnNlX2RvbWFpbikge1xuICAgICAgICAgICAgdGhpcy51bml2ZXJzZURvbWFpbiA9IG9wdGlvbnMudW5pdmVyc2VfZG9tYWluO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcmVzaFRva2VuID0gb3B0aW9ucy5yZWZyZXNoX3Rva2VuO1xuICAgICAgICBjb25zdCBjbGllbnRBdXRoZW50aWNhdGlvbiA9IHtcbiAgICAgICAgICAgIGNvbmZpZGVudGlhbENsaWVudFR5cGU6ICdiYXNpYycsXG4gICAgICAgICAgICBjbGllbnRJZDogb3B0aW9ucy5jbGllbnRfaWQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IG9wdGlvbnMuY2xpZW50X3NlY3JldCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5leHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckhhbmRsZXIgPVxuICAgICAgICAgICAgbmV3IEV4dGVybmFsQWNjb3VudEF1dGhvcml6ZWRVc2VySGFuZGxlcih7XG4gICAgICAgICAgICAgICAgdG9rZW5SZWZyZXNoRW5kcG9pbnQ6IG9wdGlvbnMudG9rZW5fdXJsID8/XG4gICAgICAgICAgICAgICAgICAgIERFRkFVTFRfVE9LRU5fVVJMLnJlcGxhY2UoJ3t1bml2ZXJzZURvbWFpbn0nLCB0aGlzLnVuaXZlcnNlRG9tYWluKSxcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRlcjogdGhpcy50cmFuc3BvcnRlcixcbiAgICAgICAgICAgICAgICBjbGllbnRBdXRoZW50aWNhdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90YVByb2plY3RJZCA9IG9wdGlvbnMucXVvdGFfcHJvamVjdF9pZDtcbiAgICAgICAgLy8gQXMgdGhyZXNob2xkIGNvdWxkIGJlIHplcm8sXG4gICAgICAgIC8vIGVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcyB8fCBFWFBJUkFUSU9OX1RJTUVfT0ZGU0VUIHdpbGwgb3ZlcnJpZGUgdGhlXG4gICAgICAgIC8vIHplcm8gdmFsdWUuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucz8uZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5lYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXMgPSBiYXNlZXh0ZXJuYWxjbGllbnRfMS5FWFBJUkFUSU9OX1RJTUVfT0ZGU0VUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXMgPSBvcHRpb25zXG4gICAgICAgICAgICAgICAgLmVhZ2VyUmVmcmVzaFRocmVzaG9sZE1pbGxpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcmNlUmVmcmVzaE9uRmFpbHVyZSA9ICEhb3B0aW9ucz8uZm9yY2VSZWZyZXNoT25GYWlsdXJlO1xuICAgIH1cbiAgICBhc3luYyBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgLy8gSWYgY2FjaGVkIGFjY2VzcyB0b2tlbiBpcyB1bmF2YWlsYWJsZSBvciBleHBpcmVkLCBmb3JjZSByZWZyZXNoLlxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkQWNjZXNzVG9rZW4gfHwgdGhpcy5pc0V4cGlyZWQodGhpcy5jYWNoZWRBY2Nlc3NUb2tlbikpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gR0NQIGFjY2VzcyB0b2tlbiBpbiBHZXRBY2Nlc3NUb2tlblJlc3BvbnNlIGZvcm1hdC5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLmNhY2hlZEFjY2Vzc1Rva2VuLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHJlczogdGhpcy5jYWNoZWRBY2Nlc3NUb2tlbi5yZXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGFzeW5jIGdldFJlcXVlc3RIZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlblJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRBY2Nlc3NUb2tlbigpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VuUmVzcG9uc2UudG9rZW59YCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFNoYXJlZE1ldGFkYXRhSGVhZGVycyhoZWFkZXJzKTtcbiAgICB9XG4gICAgcmVxdWVzdChvcHRzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEFzeW5jKG9wdHMpLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByKSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGUsIGUucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlcyB0aGUgcHJvdmlkZWQgSFRUUCByZXF1ZXN0LCBwcm9jZXNzZXMgaXQgYW5kIHJlc29sdmVzIHdpdGggdGhlXG4gICAgICogcmV0dXJuZWQgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIEhUVFAgcmVxdWVzdCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSByZUF1dGhSZXRyaWVkIFdoZXRoZXIgdGhlIGN1cnJlbnQgYXR0ZW1wdCBpcyBhIHJldHJ5IGFmdGVyIGEgZmFpbGVkIGF0dGVtcHQgZHVlIHRvIGFuIGF1dGggZmFpbHVyZS5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdEFzeW5jKG9wdHMsIHJlQXV0aFJldHJpZWQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0UmVxdWVzdEhlYWRlcnMoKTtcbiAgICAgICAgICAgIG9wdHMuaGVhZGVycyA9IGdheGlvc18xLkdheGlvcy5tZXJnZUhlYWRlcnMob3B0cy5oZWFkZXJzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVXNlclByb2plY3RBbmRBdXRoSGVhZGVycyhvcHRzLmhlYWRlcnMsIHJlcXVlc3RIZWFkZXJzKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy50cmFuc3BvcnRlci5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBlLnJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzO1xuICAgICAgICAgICAgICAgIC8vIFJldHJ5IHRoZSByZXF1ZXN0IGZvciBtZXRhZGF0YSBpZiB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgIC8vIC0gV2UgaGF2ZW4ndCBhbHJlYWR5IHJldHJpZWQuICBJdCBvbmx5IG1ha2VzIHNlbnNlIHRvIHJldHJ5IG9uY2UuXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgcmVzcG9uc2Ugd2FzIGEgNDAxIG9yIGEgNDAzXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgcmVxdWVzdCBkaWRuJ3Qgc2VuZCBhIHJlYWRhYmxlU3RyZWFtXG4gICAgICAgICAgICAgICAgLy8gLSBmb3JjZVJlZnJlc2hPbkZhaWx1cmUgaXMgdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVhZGFibGVTdHJlYW0gPSByZXMuY29uZmlnLmRhdGEgaW5zdGFuY2VvZiBzdHJlYW0uUmVhZGFibGU7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBdXRoRXJyID0gc3RhdHVzQ29kZSA9PT0gNDAxIHx8IHN0YXR1c0NvZGUgPT09IDQwMztcbiAgICAgICAgICAgICAgICBpZiAoIXJlQXV0aFJldHJpZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNBdXRoRXJyICYmXG4gICAgICAgICAgICAgICAgICAgICFpc1JlYWRhYmxlU3RyZWFtICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZWZyZXNoT25GYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuQXN5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdEFzeW5jKG9wdHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb3JjZXMgdG9rZW4gcmVmcmVzaCwgZXZlbiBpZiB1bmV4cGlyZWQgdG9rZW5zIGFyZSBjdXJyZW50bHkgY2FjaGVkLlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVmcmVzaGVkIGNyZWRlbnRpYWwuXG4gICAgICovXG4gICAgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuQXN5bmMoKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggdGhlIGFjY2VzcyB0b2tlbiB1c2luZyB0aGUgcmVmcmVzaCB0b2tlbi5cbiAgICAgICAgY29uc3QgcmVmcmVzaFJlc3BvbnNlID0gYXdhaXQgdGhpcy5leHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckhhbmRsZXIucmVmcmVzaFRva2VuKHRoaXMucmVmcmVzaFRva2VuKTtcbiAgICAgICAgdGhpcy5jYWNoZWRBY2Nlc3NUb2tlbiA9IHtcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbjogcmVmcmVzaFJlc3BvbnNlLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIGV4cGlyeV9kYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHJlZnJlc2hSZXNwb25zZS5leHBpcmVzX2luICogMTAwMCxcbiAgICAgICAgICAgIHJlczogcmVmcmVzaFJlc3BvbnNlLnJlcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlZnJlc2hSZXNwb25zZS5yZWZyZXNoX3Rva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuID0gcmVmcmVzaFJlc3BvbnNlLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkQWNjZXNzVG9rZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgY3JlZGVudGlhbHMgYXJlIGV4cGlyZWQgb3Igbm90LlxuICAgICAqIElmIHRoZXJlIGlzIG5vIGV4cGlyeSB0aW1lLCBhc3N1bWVzIHRoZSB0b2tlbiBpcyBub3QgZXhwaXJlZCBvciBleHBpcmluZy5cbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbHMgVGhlIGNyZWRlbnRpYWxzIHRvIGNoZWNrIGZvciBleHBpcmF0aW9uLlxuICAgICAqIEByZXR1cm4gV2hldGhlciB0aGUgY3JlZGVudGlhbHMgYXJlIGV4cGlyZWQgb3Igbm90LlxuICAgICAqL1xuICAgIGlzRXhwaXJlZChjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxzLmV4cGlyeV9kYXRlXG4gICAgICAgICAgICA/IG5vdyA+PSBjcmVkZW50aWFscy5leHBpcnlfZGF0ZSAtIHRoaXMuZWFnZXJSZWZyZXNoVGhyZXNob2xkTWlsbGlzXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuRXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnQgPSBFeHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckNsaWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4dGVybmFsQWNjb3VudEF1dGhvcml6ZWRVc2VyQ2xpZW50LmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Hb29nbGVBdXRoID0gZXhwb3J0cy5Hb29nbGVBdXRoRXhjZXB0aW9uTWVzc2FnZXMgPSB2b2lkIDA7XG5jb25zdCBjaGlsZF9wcm9jZXNzXzEgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgZ2F4aW9zXzEgPSByZXF1aXJlKFwiZ2F4aW9zXCIpO1xuY29uc3QgZ2NwTWV0YWRhdGEgPSByZXF1aXJlKFwiZ2NwLW1ldGFkYXRhXCIpO1xuY29uc3Qgb3MgPSByZXF1aXJlKFwib3NcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBjcnlwdG9fMSA9IHJlcXVpcmUoXCIuLi9jcnlwdG8vY3J5cHRvXCIpO1xuY29uc3QgY29tcHV0ZWNsaWVudF8xID0gcmVxdWlyZShcIi4vY29tcHV0ZWNsaWVudFwiKTtcbmNvbnN0IGlkdG9rZW5jbGllbnRfMSA9IHJlcXVpcmUoXCIuL2lkdG9rZW5jbGllbnRcIik7XG5jb25zdCBlbnZEZXRlY3RfMSA9IHJlcXVpcmUoXCIuL2VudkRldGVjdFwiKTtcbmNvbnN0IGp3dGNsaWVudF8xID0gcmVxdWlyZShcIi4vand0Y2xpZW50XCIpO1xuY29uc3QgcmVmcmVzaGNsaWVudF8xID0gcmVxdWlyZShcIi4vcmVmcmVzaGNsaWVudFwiKTtcbmNvbnN0IGltcGVyc29uYXRlZF8xID0gcmVxdWlyZShcIi4vaW1wZXJzb25hdGVkXCIpO1xuY29uc3QgZXh0ZXJuYWxjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2V4dGVybmFsY2xpZW50XCIpO1xuY29uc3QgYmFzZWV4dGVybmFsY2xpZW50XzEgPSByZXF1aXJlKFwiLi9iYXNlZXh0ZXJuYWxjbGllbnRcIik7XG5jb25zdCBhdXRoY2xpZW50XzEgPSByZXF1aXJlKFwiLi9hdXRoY2xpZW50XCIpO1xuY29uc3QgZXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnRfMSA9IHJlcXVpcmUoXCIuL2V4dGVybmFsQWNjb3VudEF1dGhvcml6ZWRVc2VyQ2xpZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5leHBvcnRzLkdvb2dsZUF1dGhFeGNlcHRpb25NZXNzYWdlcyA9IHtcbiAgICBBUElfS0VZX1dJVEhfQ1JFREVOVElBTFM6ICdBUEkgS2V5cyBhbmQgQ3JlZGVudGlhbHMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSBhdXRoZW50aWNhdGlvbiBtZXRob2RzIGFuZCBjYW5ub3QgYmUgdXNlZCB0b2dldGhlci4nLFxuICAgIE5PX1BST0pFQ1RfSURfRk9VTkQ6ICdVbmFibGUgdG8gZGV0ZWN0IGEgUHJvamVjdCBJZCBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC4gXFxuJyArXG4gICAgICAgICdUbyBsZWFybiBtb3JlIGFib3V0IGF1dGhlbnRpY2F0aW9uIGFuZCBHb29nbGUgQVBJcywgdmlzaXQ6IFxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2RvY3MvYXV0aGVudGljYXRpb24vZ2V0dGluZy1zdGFydGVkJyxcbiAgICBOT19DUkVERU5USUFMU19GT1VORDogJ1VuYWJsZSB0byBmaW5kIGNyZWRlbnRpYWxzIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuIFxcbicgK1xuICAgICAgICAnVG8gbGVhcm4gbW9yZSBhYm91dCBhdXRoZW50aWNhdGlvbiBhbmQgR29vZ2xlIEFQSXMsIHZpc2l0OiBcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9kb2NzL2F1dGhlbnRpY2F0aW9uL2dldHRpbmctc3RhcnRlZCcsXG4gICAgTk9fQURDX0ZPVU5EOiAnQ291bGQgbm90IGxvYWQgdGhlIGRlZmF1bHQgY3JlZGVudGlhbHMuIEJyb3dzZSB0byBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vZG9jcy9hdXRoZW50aWNhdGlvbi9nZXR0aW5nLXN0YXJ0ZWQgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyxcbiAgICBOT19VTklWRVJTRV9ET01BSU5fRk9VTkQ6ICdVbmFibGUgdG8gZGV0ZWN0IGEgVW5pdmVyc2UgRG9tYWluIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxcbicgK1xuICAgICAgICAnVG8gbGVhcm4gbW9yZSBhYm91dCBVbml2ZXJzZSBEb21haW4gcmV0cmlldmFsLCB2aXNpdDogXFxuJyArXG4gICAgICAgICdodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vY29tcHV0ZS9kb2NzL21ldGFkYXRhL3ByZWRlZmluZWQtbWV0YWRhdGEta2V5cycsXG59O1xuY2xhc3MgR29vZ2xlQXV0aCB7XG4gICAgLyoqXG4gICAgICogQ2FjaGVzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhdXRoIGxheWVyIGlzIHJ1bm5pbmcgb24gR29vZ2xlXG4gICAgICogQ29tcHV0ZSBFbmdpbmUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjaGVja0lzR0NFID0gdW5kZWZpbmVkO1xuICAgIHVzZUpXVEFjY2Vzc1dpdGhTY29wZTtcbiAgICBkZWZhdWx0U2VydmljZVBhdGg7XG4gICAgLy8gTm90ZTogIHRoaXMgcHJvcGVybHkgaXMgb25seSBwdWJsaWMgdG8gc2F0aXNmeSB1bml0IHRlc3RzLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNTIyOFxuICAgIGdldCBpc0dDRSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tJc0dDRTtcbiAgICB9XG4gICAgX2ZpbmRQcm9qZWN0SWRQcm9taXNlO1xuICAgIF9jYWNoZWRQcm9qZWN0SWQ7XG4gICAgLy8gVG8gc2F2ZSB0aGUgY29udGVudHMgb2YgdGhlIEpTT04gY3JlZGVudGlhbCBmaWxlXG4gICAganNvbkNvbnRlbnQgPSBudWxsO1xuICAgIGFwaUtleTtcbiAgICBjYWNoZWRDcmVkZW50aWFsID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBBIHBlbmRpbmcge0BsaW5rIEF1dGhDbGllbnR9LiBVc2VkIGZvciBjb25jdXJyZW50IHtAbGluayBHb29nbGVBdXRoLmdldENsaWVudH0gY2FsbHMuXG4gICAgICovXG4gICAgI3BlbmRpbmdBdXRoQ2xpZW50ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBTY29wZXMgcG9wdWxhdGVkIGJ5IHRoZSBjbGllbnQgbGlicmFyeSBieSBkZWZhdWx0LiBXZSBkaWZmZXJlbnRpYXRlIGJldHdlZW5cbiAgICAgKiB0aGVzZSBhbmQgdXNlciBkZWZpbmVkIHNjb3BlcyB3aGVuIGRlY2lkaW5nIHdoZXRoZXIgdG8gdXNlIGEgc2VsZi1zaWduZWQgSldULlxuICAgICAqL1xuICAgIGRlZmF1bHRTY29wZXM7XG4gICAga2V5RmlsZW5hbWU7XG4gICAgc2NvcGVzO1xuICAgIGNsaWVudE9wdGlvbnMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBDb25maWd1cmF0aW9uIGlzIHJlc29sdmVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXIgb2YgcHJlY2VkZW5jZTpcbiAgICAgKiAtIHtAbGluayBHb29nbGVBdXRoT3B0aW9ucy5jcmVkZW50aWFscyBgY3JlZGVudGlhbHNgfVxuICAgICAqIC0ge0BsaW5rIEdvb2dsZUF1dGhPcHRpb25zLmtleUZpbGVuYW1lIGBrZXlGaWxlbmFtZWB9XG4gICAgICogLSB7QGxpbmsgR29vZ2xlQXV0aE9wdGlvbnMua2V5RmlsZSBga2V5RmlsZWB9XG4gICAgICpcbiAgICAgKiB7QGxpbmsgR29vZ2xlQXV0aE9wdGlvbnMuY2xpZW50T3B0aW9ucyBgY2xpZW50T3B0aW9uc2B9IGFyZSBwYXNzZWQgdG8gdGhlXG4gICAgICoge0BsaW5rIEF1dGhDbGllbnQgYEF1dGhDbGllbnRgc30uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICB0aGlzLl9jYWNoZWRQcm9qZWN0SWQgPSBvcHRzLnByb2plY3RJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlZENyZWRlbnRpYWwgPSBvcHRzLmF1dGhDbGllbnQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5rZXlGaWxlbmFtZSA9IG9wdHMua2V5RmlsZW5hbWUgfHwgb3B0cy5rZXlGaWxlO1xuICAgICAgICB0aGlzLnNjb3BlcyA9IG9wdHMuc2NvcGVzO1xuICAgICAgICB0aGlzLmNsaWVudE9wdGlvbnMgPSBvcHRzLmNsaWVudE9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMuanNvbkNvbnRlbnQgPSBvcHRzLmNyZWRlbnRpYWxzIHx8IG51bGw7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgdGhpcy5jbGllbnRPcHRpb25zLmFwaUtleSB8fCBudWxsO1xuICAgICAgICAvLyBDYW5ub3QgdXNlIGJvdGggQVBJIEtleSArIENyZWRlbnRpYWxzXG4gICAgICAgIGlmICh0aGlzLmFwaUtleSAmJiAodGhpcy5qc29uQ29udGVudCB8fCB0aGlzLmNsaWVudE9wdGlvbnMuY3JlZGVudGlhbHMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihleHBvcnRzLkdvb2dsZUF1dGhFeGNlcHRpb25NZXNzYWdlcy5BUElfS0VZX1dJVEhfQ1JFREVOVElBTFMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLnVuaXZlcnNlRG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudE9wdGlvbnMudW5pdmVyc2VEb21haW4gPSBvcHRzLnVuaXZlcnNlRG9tYWluO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEdBUElDIGNsaWVudCBsaWJyYXJpZXMgc2hvdWxkIGFsd2F5cyB1c2Ugc2VsZi1zaWduZWQgSldUcy4gVGhlIGZvbGxvd2luZ1xuICAgIC8vIHZhcmlhYmxlcyBhcmUgc2V0IG9uIHRoZSBKV1QgY2xpZW50IGluIG9yZGVyIHRvIGluZGljYXRlIHRoZSB0eXBlIG9mIGxpYnJhcnksXG4gICAgLy8gYW5kIHNpZ24gdGhlIEpXVCB3aXRoIHRoZSBjb3JyZWN0IGF1ZGllbmNlIGFuZCBzY29wZXMgKGlmIG5vdCBzdXBwbGllZCkuXG4gICAgc2V0R2FwaWNKV1RWYWx1ZXMoY2xpZW50KSB7XG4gICAgICAgIGNsaWVudC5kZWZhdWx0U2VydmljZVBhdGggPSB0aGlzLmRlZmF1bHRTZXJ2aWNlUGF0aDtcbiAgICAgICAgY2xpZW50LnVzZUpXVEFjY2Vzc1dpdGhTY29wZSA9IHRoaXMudXNlSldUQWNjZXNzV2l0aFNjb3BlO1xuICAgICAgICBjbGllbnQuZGVmYXVsdFNjb3BlcyA9IHRoaXMuZGVmYXVsdFNjb3BlcztcbiAgICB9XG4gICAgZ2V0UHJvamVjdElkKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0SWRBc3luYygpLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvamVjdElkQXN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHRlbXBvcmFyeSBtZXRob2QgZm9yIGludGVybmFsIGBnZXRQcm9qZWN0SWRgIHVzYWdlcyB3aGVyZSBgbnVsbGAgaXNcbiAgICAgKiBhY2NlcHRhYmxlLiBJbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLCBgZ2V0UHJvamVjdElkYCBzaG91bGQgcmV0dXJuIGBudWxsYFxuICAgICAqIChhcyB0aGUgYFByb21pc2U8c3RyaW5nIHwgbnVsbD5gIGJhc2Ugc2lnbmF0dXJlIGRlc2NyaWJlcykgYW5kIHRoaXMgcHJpdmF0ZVxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHByb2plY3QgaWQgKG9yIGBudWxsYClcbiAgICAgKi9cbiAgICBhc3luYyBnZXRQcm9qZWN0SWRPcHRpb25hbCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFByb2plY3RJZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yICYmXG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID09PSBleHBvcnRzLkdvb2dsZUF1dGhFeGNlcHRpb25NZXNzYWdlcy5OT19QUk9KRUNUX0lEX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJpdmF0ZSBtZXRob2QgZm9yIGZpbmRpbmcgYW5kIGNhY2hpbmcgYSBwcm9qZWN0SWQuXG4gICAgICpcbiAgICAgKiBTdXBwb3J0cyBlbnZpcm9ubWVudHMgaW4gb3JkZXIgb2YgcHJlY2VkZW5jZTpcbiAgICAgKiAtIEdDTE9VRF9QUk9KRUNUIG9yIEdPT0dMRV9DTE9VRF9QUk9KRUNUIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgICogLSBHT09HTEVfQVBQTElDQVRJT05fQ1JFREVOVElBTFMgSlNPTiBmaWxlXG4gICAgICogLSBDbG91ZCBTREs6IGBnY2xvdWQgY29uZmlnIGNvbmZpZy1oZWxwZXIgLS1mb3JtYXQganNvbmBcbiAgICAgKiAtIEdDRSBwcm9qZWN0IElEIGZyb20gbWV0YWRhdGEgc2VydmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwcm9qZWN0SWRcbiAgICAgKi9cbiAgICBhc3luYyBmaW5kQW5kQ2FjaGVQcm9qZWN0SWQoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBudWxsO1xuICAgICAgICBwcm9qZWN0SWQgfHw9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdGlvblByb2plY3RJZCgpO1xuICAgICAgICBwcm9qZWN0SWQgfHw9IGF3YWl0IHRoaXMuZ2V0RmlsZVByb2plY3RJZCgpO1xuICAgICAgICBwcm9qZWN0SWQgfHw9IGF3YWl0IHRoaXMuZ2V0RGVmYXVsdFNlcnZpY2VQcm9qZWN0SWQoKTtcbiAgICAgICAgcHJvamVjdElkIHx8PSBhd2FpdCB0aGlzLmdldEdDRVByb2plY3RJZCgpO1xuICAgICAgICBwcm9qZWN0SWQgfHw9IGF3YWl0IHRoaXMuZ2V0RXh0ZXJuYWxBY2NvdW50Q2xpZW50UHJvamVjdElkKCk7XG4gICAgICAgIGlmIChwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXhwb3J0cy5Hb29nbGVBdXRoRXhjZXB0aW9uTWVzc2FnZXMuTk9fUFJPSkVDVF9JRF9GT1VORCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0UHJvamVjdElkQXN5bmMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWRQcm9qZWN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9maW5kUHJvamVjdElkUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5fZmluZFByb2plY3RJZFByb21pc2UgPSB0aGlzLmZpbmRBbmRDYWNoZVByb2plY3RJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kUHJvamVjdElkUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgdW5pdmVyc2UgZG9tYWluIGZyb20gdGhlIG1ldGFkYXRhIHNlcnZlciB2aWFcbiAgICAgKiB7QGxpbmsgZ2NwTWV0YWRhdGEudW5pdmVyc2V9LlxuICAgICAqXG4gICAgICogQHJldHVybnMgYSB1bml2ZXJzZSBkb21haW5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRVbml2ZXJzZURvbWFpbkZyb21NZXRhZGF0YVNlcnZlcigpIHtcbiAgICAgICAgbGV0IHVuaXZlcnNlRG9tYWluO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdW5pdmVyc2VEb21haW4gPSBhd2FpdCBnY3BNZXRhZGF0YS51bml2ZXJzZSgndW5pdmVyc2UtZG9tYWluJyk7XG4gICAgICAgICAgICB1bml2ZXJzZURvbWFpbiB8fD0gYXV0aGNsaWVudF8xLkRFRkFVTFRfVU5JVkVSU0U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlICYmIGU/LnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHVuaXZlcnNlRG9tYWluID0gYXV0aGNsaWVudF8xLkRFRkFVTFRfVU5JVkVSU0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bml2ZXJzZURvbWFpbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzLCBjYWNoZXMsIGFuZCByZXR1cm5zIHRoZSB1bml2ZXJzZSBkb21haW4gaW4gdGhlIGZvbGxvd2luZyBvcmRlclxuICAgICAqIG9mIHByZWNlZGVuY2U6XG4gICAgICogLSBUaGUgdW5pdmVyc2UgZG9tYWluIGluIHtAbGluayBHb29nbGVBdXRoLmNsaWVudE9wdGlvbnN9XG4gICAgICogLSBBbiBleGlzdGluZyBvciBBREMge0BsaW5rIEF1dGhDbGllbnR9J3MgdW5pdmVyc2UgZG9tYWluXG4gICAgICogLSB7QGxpbmsgZ2NwTWV0YWRhdGEudW5pdmVyc2V9LCBpZiB7QGxpbmsgQ29tcHV0ZX0gY2xpZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgdW5pdmVyc2UgZG9tYWluXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VW5pdmVyc2VEb21haW4oKSB7XG4gICAgICAgIGxldCB1bml2ZXJzZURvbWFpbiA9ICgwLCB1dGlsXzEub3JpZ2luYWxPckNhbWVsT3B0aW9ucykodGhpcy5jbGllbnRPcHRpb25zKS5nZXQoJ3VuaXZlcnNlX2RvbWFpbicpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdW5pdmVyc2VEb21haW4gPz89IChhd2FpdCB0aGlzLmdldENsaWVudCgpKS51bml2ZXJzZURvbWFpbjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAvLyBjbGllbnQgb3IgQURDIGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgIHVuaXZlcnNlRG9tYWluID8/PSBhdXRoY2xpZW50XzEuREVGQVVMVF9VTklWRVJTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5pdmVyc2VEb21haW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIEFueSBzY29wZXMgKHVzZXItc3BlY2lmaWVkIG9yIGRlZmF1bHQgc2NvcGVzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiAgIGNsaWVudCBsaWJyYXJ5KSB0aGF0IG5lZWQgdG8gYmUgc2V0IG9uIHRoZSBjdXJyZW50IEF1dGggY2xpZW50LlxuICAgICAqL1xuICAgIGdldEFueVNjb3BlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVzIHx8IHRoaXMuZGVmYXVsdFNjb3BlcztcbiAgICB9XG4gICAgZ2V0QXBwbGljYXRpb25EZWZhdWx0KG9wdGlvbnNPckNhbGxiYWNrID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBvcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnNPckNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNPckNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nZXRBcHBsaWNhdGlvbkRlZmF1bHRBc3luYyhvcHRpb25zKS50aGVuKHIgPT4gY2FsbGJhY2sobnVsbCwgci5jcmVkZW50aWFsLCByLnByb2plY3RJZCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFwcGxpY2F0aW9uRGVmYXVsdEFzeW5jKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldEFwcGxpY2F0aW9uRGVmYXVsdEFzeW5jKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhIGNhY2hlZCBjcmVkZW50aWFsLCByZXR1cm4gaXQuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhbHNvIHByZXNlcnZlIG9uZSdzIGNvbmZpZ3VyZWQgcXVvdGEgcHJvamVjdCwgaW4gY2FzZSB0aGV5XG4gICAgICAgIC8vIHNldCBvbmUgZGlyZWN0bHkgb24gdGhlIGNyZWRlbnRpYWwgcHJldmlvdXNseS5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkQ3JlZGVudGlhbCkge1xuICAgICAgICAgICAgLy8gY2FjaGUsIHdoaWxlIHByZXNlcnZpbmcgZXhpc3RpbmcgcXVvdGEgcHJvamVjdCBwcmVmZXJlbmNlc1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI3ByZXBhcmVBbmRDYWNoZUNsaWVudCh0aGlzLmNhY2hlZENyZWRlbnRpYWwsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjcmVkZW50aWFsO1xuICAgICAgICAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBhIGxvY2FsIGVudmlyb25tZW50IHZhcmlhYmxlIHBvaW50aW5nIHRvIHRoZVxuICAgICAgICAvLyBsb2NhdGlvbiBvZiB0aGUgY3JlZGVudGlhbCBmaWxlLiBUaGlzIGlzIHR5cGljYWxseSB1c2VkIGluIGxvY2FsXG4gICAgICAgIC8vIGRldmVsb3BlciBzY2VuYXJpb3MuXG4gICAgICAgIGNyZWRlbnRpYWwgPVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fdHJ5R2V0QXBwbGljYXRpb25DcmVkZW50aWFsc0Zyb21FbnZpcm9ubWVudFZhcmlhYmxlKG9wdGlvbnMpO1xuICAgICAgICBpZiAoY3JlZGVudGlhbCkge1xuICAgICAgICAgICAgaWYgKGNyZWRlbnRpYWwgaW5zdGFuY2VvZiBqd3RjbGllbnRfMS5KV1QpIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsLnNjb3BlcyA9IHRoaXMuc2NvcGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3JlZGVudGlhbCBpbnN0YW5jZW9mIGJhc2VleHRlcm5hbGNsaWVudF8xLkJhc2VFeHRlcm5hbEFjY291bnRDbGllbnQpIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsLnNjb3BlcyA9IHRoaXMuZ2V0QW55U2NvcGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy4jcHJlcGFyZUFuZENhY2hlQ2xpZW50KGNyZWRlbnRpYWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvb2sgaW4gdGhlIHdlbGwta25vd24gY3JlZGVudGlhbCBmaWxlIGxvY2F0aW9uLlxuICAgICAgICBjcmVkZW50aWFsID1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3RyeUdldEFwcGxpY2F0aW9uQ3JlZGVudGlhbHNGcm9tV2VsbEtub3duRmlsZShvcHRpb25zKTtcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwpIHtcbiAgICAgICAgICAgIGlmIChjcmVkZW50aWFsIGluc3RhbmNlb2Ygand0Y2xpZW50XzEuSldUKSB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbC5zY29wZXMgPSB0aGlzLnNjb3BlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNyZWRlbnRpYWwgaW5zdGFuY2VvZiBiYXNlZXh0ZXJuYWxjbGllbnRfMS5CYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50KSB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbC5zY29wZXMgPSB0aGlzLmdldEFueVNjb3BlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI3ByZXBhcmVBbmRDYWNoZUNsaWVudChjcmVkZW50aWFsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBvbiBHQ0UuXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLl9jaGVja0lzR0NFKCkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NvcGVzID0gdGhpcy5nZXRBbnlTY29wZXMoKTtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNwcmVwYXJlQW5kQ2FjaGVDbGllbnQobmV3IGNvbXB1dGVjbGllbnRfMS5Db21wdXRlKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXhwb3J0cy5Hb29nbGVBdXRoRXhjZXB0aW9uTWVzc2FnZXMuTk9fQURDX0ZPVU5EKTtcbiAgICB9XG4gICAgYXN5bmMgI3ByZXBhcmVBbmRDYWNoZUNsaWVudChjcmVkZW50aWFsLCBxdW90YVByb2plY3RJZE92ZXJyaWRlID0gcHJvY2Vzcy5lbnZbJ0dPT0dMRV9DTE9VRF9RVU9UQV9QUk9KRUNUJ10gfHwgbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBhd2FpdCB0aGlzLmdldFByb2plY3RJZE9wdGlvbmFsKCk7XG4gICAgICAgIGlmIChxdW90YVByb2plY3RJZE92ZXJyaWRlKSB7XG4gICAgICAgICAgICBjcmVkZW50aWFsLnF1b3RhUHJvamVjdElkID0gcXVvdGFQcm9qZWN0SWRPdmVycmlkZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlZENyZWRlbnRpYWwgPSBjcmVkZW50aWFsO1xuICAgICAgICByZXR1cm4geyBjcmVkZW50aWFsLCBwcm9qZWN0SWQgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhdXRoIGxheWVyIGlzIHJ1bm5pbmcgb24gR29vZ2xlIENvbXB1dGUgRW5naW5lLlxuICAgICAqIENoZWNrcyBmb3IgR0NQIFJlc2lkZW5jeSwgdGhlbiBmYWxsYmFjayB0byBjaGVja2luZyBpZiBtZXRhZGF0YSBzZXJ2ZXJcbiAgICAgKiBpcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBib29sZWFuLlxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9jaGVja0lzR0NFKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0lzR0NFID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJc0dDRSA9XG4gICAgICAgICAgICAgICAgZ2NwTWV0YWRhdGEuZ2V0R0NQUmVzaWRlbmN5KCkgfHwgKGF3YWl0IGdjcE1ldGFkYXRhLmlzQXZhaWxhYmxlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSXNHQ0U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIGxvYWQgZGVmYXVsdCBjcmVkZW50aWFscyBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBwYXRoLi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgT0F1dGgyQ2xpZW50IG9yIG51bGwuXG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX3RyeUdldEFwcGxpY2F0aW9uQ3JlZGVudGlhbHNGcm9tRW52aXJvbm1lbnRWYXJpYWJsZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzUGF0aCA9IHByb2Nlc3MuZW52WydHT09HTEVfQVBQTElDQVRJT05fQ1JFREVOVElBTFMnXSB8fFxuICAgICAgICAgICAgcHJvY2Vzcy5lbnZbJ2dvb2dsZV9hcHBsaWNhdGlvbl9jcmVkZW50aWFscyddO1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzUGF0aCB8fCBjcmVkZW50aWFsc1BhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFwcGxpY2F0aW9uQ3JlZGVudGlhbHNGcm9tRmlsZVBhdGgoY3JlZGVudGlhbHNQYXRoLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGUubWVzc2FnZSA9IGBVbmFibGUgdG8gcmVhZCB0aGUgY3JlZGVudGlhbCBmaWxlIHNwZWNpZmllZCBieSB0aGUgR09PR0xFX0FQUExJQ0FUSU9OX0NSRURFTlRJQUxTIGVudmlyb25tZW50IHZhcmlhYmxlOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBsb2FkIGRlZmF1bHQgY3JlZGVudGlhbHMgZnJvbSBhIHdlbGwta25vd24gZmlsZSBsb2NhdGlvblxuICAgICAqIEByZXR1cm4gUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIE9BdXRoMkNsaWVudCBvciBudWxsLlxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF90cnlHZXRBcHBsaWNhdGlvbkNyZWRlbnRpYWxzRnJvbVdlbGxLbm93bkZpbGUob3B0aW9ucykge1xuICAgICAgICAvLyBGaXJzdCwgZmlndXJlIG91dCB0aGUgbG9jYXRpb24gb2YgdGhlIGZpbGUsIGRlcGVuZGluZyB1cG9uIHRoZSBPUyB0eXBlLlxuICAgICAgICBsZXQgbG9jYXRpb24gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5faXNXaW5kb3dzKCkpIHtcbiAgICAgICAgICAgIC8vIFdpbmRvd3NcbiAgICAgICAgICAgIGxvY2F0aW9uID0gcHJvY2Vzcy5lbnZbJ0FQUERBVEEnXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExpbnV4IG9yIE1hY1xuICAgICAgICAgICAgY29uc3QgaG9tZSA9IHByb2Nlc3MuZW52WydIT01FJ107XG4gICAgICAgICAgICBpZiAoaG9tZSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gcGF0aC5qb2luKGhvbWUsICcuY29uZmlnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZm91bmQgdGhlIHJvb3QgcGF0aCwgZXhwYW5kIGl0LlxuICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gcGF0aC5qb2luKGxvY2F0aW9uLCAnZ2Nsb3VkJywgJ2FwcGxpY2F0aW9uX2RlZmF1bHRfY3JlZGVudGlhbHMuanNvbicpO1xuICAgICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgZmlsZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIGZpbGUgc2VlbXMgdG8gZXhpc3QuIFRyeSB0byB1c2UgaXQuXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuX2dldEFwcGxpY2F0aW9uQ3JlZGVudGlhbHNGcm9tRmlsZVBhdGgobG9jYXRpb24sIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBsb2FkIGRlZmF1bHQgY3JlZGVudGlhbHMgZnJvbSBhIGZpbGUgYXQgdGhlIGdpdmVuIHBhdGguLlxuICAgICAqIEBwYXJhbSBmaWxlUGF0aCBUaGUgcGF0aCB0byB0aGUgZmlsZSB0byByZWFkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBPQXV0aDJDbGllbnRcbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfZ2V0QXBwbGljYXRpb25DcmVkZW50aWFsc0Zyb21GaWxlUGF0aChmaWxlUGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcGF0aCBsb29rcyBsaWtlIGEgc3RyaW5nLlxuICAgICAgICBpZiAoIWZpbGVQYXRoIHx8IGZpbGVQYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlsZSBwYXRoIGlzIGludmFsaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGEgZmlsZSBhdCB0aGUgcGF0aC4gbHN0YXRTeW5jIHdpbGwgdGhyb3cgaWYgdGhlcmUgaXNcbiAgICAgICAgLy8gbm90aGluZyB0aGVyZS5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgcGF0aCB0byBhY3R1YWwgZmlsZSBpbiBjYXNlIG9mIHN5bWxpbmsuIEV4cGVjdCBhIHRocm93biBlcnJvclxuICAgICAgICAgICAgLy8gaWYgbm90IHJlc29sdmFibGUuXG4gICAgICAgICAgICBmaWxlUGF0aCA9IGZzLnJlYWxwYXRoU3luYyhmaWxlUGF0aCk7XG4gICAgICAgICAgICBpZiAoIWZzLmxzdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IGBUaGUgZmlsZSBhdCAke2ZpbGVQYXRofSBkb2VzIG5vdCBleGlzdCwgb3IgaXQgaXMgbm90IGEgZmlsZS4gJHtlcnIubWVzc2FnZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBvcGVuIGEgcmVhZCBzdHJlYW0gb24gdGhlIGZpbGUsIGFuZCBwYXJzZSBpdC5cbiAgICAgICAgY29uc3QgcmVhZFN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tU3RyZWFtKHJlYWRTdHJlYW0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjcmVkZW50aWFscyBpbnN0YW5jZSB1c2luZyBhIGdpdmVuIGltcGVyc29uYXRlZCBpbnB1dCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBqc29uIFRoZSBpbXBlcnNvbmF0ZWQgaW5wdXQgb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIEpXVCBvciBVc2VyUmVmcmVzaCBDbGllbnQgd2l0aCBkYXRhXG4gICAgICovXG4gICAgZnJvbUltcGVyc29uYXRlZEpTT04oanNvbikge1xuICAgICAgICBpZiAoIWpzb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwYXNzIGluIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhbiAgaW1wZXJzb25hdGVkIHJlZnJlc2ggdG9rZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoanNvbi50eXBlICE9PSBpbXBlcnNvbmF0ZWRfMS5JTVBFUlNPTkFURURfQUNDT1VOVF9UWVBFKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBpbmNvbWluZyBKU09OIG9iamVjdCBkb2VzIG5vdCBoYXZlIHRoZSBcIiR7aW1wZXJzb25hdGVkXzEuSU1QRVJTT05BVEVEX0FDQ09VTlRfVFlQRX1cIiB0eXBlYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFqc29uLnNvdXJjZV9jcmVkZW50aWFscykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5jb21pbmcgSlNPTiBvYmplY3QgZG9lcyBub3QgY29udGFpbiBhIHNvdXJjZV9jcmVkZW50aWFscyBmaWVsZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghanNvbi5zZXJ2aWNlX2FjY291bnRfaW1wZXJzb25hdGlvbl91cmwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gYSBzZXJ2aWNlX2FjY291bnRfaW1wZXJzb25hdGlvbl91cmwgZmllbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VDbGllbnQgPSB0aGlzLmZyb21KU09OKGpzb24uc291cmNlX2NyZWRlbnRpYWxzKTtcbiAgICAgICAgaWYgKGpzb24uc2VydmljZV9hY2NvdW50X2ltcGVyc29uYXRpb25fdXJsPy5sZW5ndGggPiAyNTYpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJldmVudHMgRE9TIGF0dGFja3MuXG4gICAgICAgICAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlYXBpcy9nb29nbGUtYXV0aC1saWJyYXJ5LW5vZGVqcy9zZWN1cml0eS9jb2RlLXNjYW5uaW5nLzg1fVxuICAgICAgICAgICAgICoqL1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFRhcmdldCBwcmluY2lwYWwgaXMgdG9vIGxvbmc6ICR7anNvbi5zZXJ2aWNlX2FjY291bnRfaW1wZXJzb25hdGlvbl91cmx9YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0cmFjdCBzZXJ2aWNlIGFjY291bnQgZnJvbSBzZXJ2aWNlX2FjY291bnRfaW1wZXJzb25hdGlvbl91cmxcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJpbmNpcGFsID0gLyg/PHRhcmdldD5bXi9dKyk6KGdlbmVyYXRlQWNjZXNzVG9rZW58Z2VuZXJhdGVJZFRva2VuKSQvLmV4ZWMoanNvbi5zZXJ2aWNlX2FjY291bnRfaW1wZXJzb25hdGlvbl91cmwpPy5ncm91cHM/LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXRQcmluY2lwYWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBDYW5ub3QgZXh0cmFjdCB0YXJnZXQgcHJpbmNpcGFsIGZyb20gJHtqc29uLnNlcnZpY2VfYWNjb3VudF9pbXBlcnNvbmF0aW9uX3VybH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXRTY29wZXMgPSAodGhpcy5zY29wZXMgfHwganNvbi5zY29wZXMgfHwgdGhpcy5kZWZhdWx0U2NvcGVzKSA/PyBbXTtcbiAgICAgICAgcmV0dXJuIG5ldyBpbXBlcnNvbmF0ZWRfMS5JbXBlcnNvbmF0ZWQoe1xuICAgICAgICAgICAgLi4uanNvbixcbiAgICAgICAgICAgIHNvdXJjZUNsaWVudCxcbiAgICAgICAgICAgIHRhcmdldFByaW5jaXBhbCxcbiAgICAgICAgICAgIHRhcmdldFNjb3BlczogQXJyYXkuaXNBcnJheSh0YXJnZXRTY29wZXMpID8gdGFyZ2V0U2NvcGVzIDogW3RhcmdldFNjb3Blc10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjcmVkZW50aWFscyBpbnN0YW5jZSB1c2luZyB0aGUgZ2l2ZW4gaW5wdXQgb3B0aW9ucy5cbiAgICAgKiBUaGlzIGNsaWVudCBpcyBub3QgY2FjaGVkLlxuICAgICAqXG4gICAgICogKipJbXBvcnRhbnQqKjogSWYgeW91IGFjY2VwdCBhIGNyZWRlbnRpYWwgY29uZmlndXJhdGlvbiAoY3JlZGVudGlhbCBKU09OL0ZpbGUvU3RyZWFtKSBmcm9tIGFuIGV4dGVybmFsIHNvdXJjZSBmb3IgYXV0aGVudGljYXRpb24gdG8gR29vZ2xlIENsb3VkLCB5b3UgbXVzdCB2YWxpZGF0ZSBpdCBiZWZvcmUgcHJvdmlkaW5nIGl0IHRvIGFueSBHb29nbGUgQVBJIG9yIGxpYnJhcnkuIFByb3ZpZGluZyBhbiB1bnZhbGlkYXRlZCBjcmVkZW50aWFsIGNvbmZpZ3VyYXRpb24gdG8gR29vZ2xlIEFQSXMgY2FuIGNvbXByb21pc2UgdGhlIHNlY3VyaXR5IG9mIHlvdXIgc3lzdGVtcyBhbmQgZGF0YS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHJlZmVyIHRvIHtAbGluayBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vZG9jcy9hdXRoZW50aWNhdGlvbi9leHRlcm5hbC9leHRlcm5hbGx5LXNvdXJjZWQtY3JlZGVudGlhbHMgVmFsaWRhdGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9ucyBmcm9tIGV4dGVybmFsIHNvdXJjZXN9LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgYmVpbmcgZGVwcmVjYXRlZCBiZWNhdXNlIG9mIGEgcG90ZW50aWFsIHNlY3VyaXR5IHJpc2suXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBkb2VzIG5vdCB2YWxpZGF0ZSB0aGUgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uLiBUaGUgc2VjdXJpdHlcbiAgICAgKiByaXNrIG9jY3VycyB3aGVuIGEgY3JlZGVudGlhbCBjb25maWd1cmF0aW9uIGlzIGFjY2VwdGVkIGZyb20gYSBzb3VyY2UgdGhhdFxuICAgICAqIGlzIG5vdCB1bmRlciB5b3VyIGNvbnRyb2wgYW5kIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uIG9uIHlvdXIgc2lkZS5cbiAgICAgKlxuICAgICAqIElmIHlvdSBrbm93IHRoYXQgeW91IHdpbGwgYmUgbG9hZGluZyBjcmVkZW50aWFsIGNvbmZpZ3VyYXRpb25zIG9mIGFcbiAgICAgKiBzcGVjaWZpYyB0eXBlLCBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgYSBjcmVkZW50aWFsLXR5cGUtc3BlY2lmaWNcbiAgICAgKiBjb25zdHJ1Y3Rvci4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFuIHVuZXhwZWN0ZWQgY3JlZGVudGlhbCB0eXBlIHdpdGhcbiAgICAgKiBwb3RlbnRpYWwgZm9yIG1hbGljaW91cyBpbnRlbnQgaXMgbm90IGxvYWRlZCB1bmludGVudGlvbmFsbHkuIFlvdSBtaWdodFxuICAgICAqIHN0aWxsIGhhdmUgdG8gZG8gdmFsaWRhdGlvbiBmb3IgY2VydGFpbiBjcmVkZW50aWFsIHR5cGVzLiBQbGVhc2UgZm9sbG93XG4gICAgICogdGhlIHJlY29tbWVuZGF0aW9uIGZvciB0aGF0IG1ldGhvZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIGxvYWQgb25seVxuICAgICAqIHNlcnZpY2UgYWNjb3VudHMsIHlvdSBjYW4gdXNlIHRoZSBgSldUYCBjb25zdHJ1Y3RvcjpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCB7SldUfSA9IHJlcXVpcmUoJ2dvb2dsZS1hdXRoLWxpYnJhcnknKTtcbiAgICAgKiBjb25zdCBrZXlzID0gcmVxdWlyZSgnL3BhdGgvdG8va2V5Lmpzb24nKTtcbiAgICAgKiBjb25zdCBjbGllbnQgPSBuZXcgSldUKHtcbiAgICAgKiAgIGVtYWlsOiBrZXlzLmNsaWVudF9lbWFpbCxcbiAgICAgKiAgIGtleToga2V5cy5wcml2YXRlX2tleSxcbiAgICAgKiAgIHNjb3BlczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtJ10sXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBJZiB5b3UgYXJlIGxvYWRpbmcgeW91ciBjcmVkZW50aWFsIGNvbmZpZ3VyYXRpb24gZnJvbSBhbiB1bnRydXN0ZWQgc291cmNlIGFuZCBoYXZlXG4gICAgICogbm90IG1pdGlnYXRlZCB0aGUgcmlza3MgKGUuZy4gYnkgdmFsaWRhdGluZyB0aGUgY29uZmlndXJhdGlvbiB5b3Vyc2VsZiksIG1ha2VcbiAgICAgKiB0aGVzZSBjaGFuZ2VzIGFzIHNvb24gYXMgcG9zc2libGUgdG8gcHJldmVudCBzZWN1cml0eSByaXNrcyB0byB5b3VyIGVudmlyb25tZW50LlxuICAgICAqXG4gICAgICogUmVnYXJkbGVzcyBvZiB0aGUgbWV0aG9kIHVzZWQsIGl0IGlzIGFsd2F5cyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIHZhbGlkYXRlXG4gICAgICogY29uZmlndXJhdGlvbnMgcmVjZWl2ZWQgZnJvbSBleHRlcm5hbCBzb3VyY2VzLlxuICAgICAqXG4gICAgICogRm9yIG1vcmUgZGV0YWlscywgc2VlIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9kb2NzL2F1dGhlbnRpY2F0aW9uL2V4dGVybmFsL2V4dGVybmFsbHktc291cmNlZC1jcmVkZW50aWFscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBqc29uIFRoZSBpbnB1dCBvYmplY3QuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIEpXVCBvciBVc2VyUmVmcmVzaCBvcHRpb25zIGZvciB0aGUgY2xpZW50XG4gICAgICogQHJldHVybnMgSldUIG9yIFVzZXJSZWZyZXNoIENsaWVudCB3aXRoIGRhdGFcbiAgICAgKi9cbiAgICBmcm9tSlNPTihqc29uLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IGNsaWVudDtcbiAgICAgICAgLy8gdXNlcidzIHByZWZlcnJlZCB1bml2ZXJzZSBkb21haW5cbiAgICAgICAgY29uc3QgcHJlZmVycmVkVW5pdmVyc2VEb21haW4gPSAoMCwgdXRpbF8xLm9yaWdpbmFsT3JDYW1lbE9wdGlvbnMpKG9wdGlvbnMpLmdldCgndW5pdmVyc2VfZG9tYWluJyk7XG4gICAgICAgIGlmIChqc29uLnR5cGUgPT09IHJlZnJlc2hjbGllbnRfMS5VU0VSX1JFRlJFU0hfQUNDT1VOVF9UWVBFKSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcmVmcmVzaGNsaWVudF8xLlVzZXJSZWZyZXNoQ2xpZW50KG9wdGlvbnMpO1xuICAgICAgICAgICAgY2xpZW50LmZyb21KU09OKGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGpzb24udHlwZSA9PT0gaW1wZXJzb25hdGVkXzEuSU1QRVJTT05BVEVEX0FDQ09VTlRfVFlQRSkge1xuICAgICAgICAgICAgY2xpZW50ID0gdGhpcy5mcm9tSW1wZXJzb25hdGVkSlNPTihqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChqc29uLnR5cGUgPT09IGJhc2VleHRlcm5hbGNsaWVudF8xLkVYVEVSTkFMX0FDQ09VTlRfVFlQRSkge1xuICAgICAgICAgICAgY2xpZW50ID0gZXh0ZXJuYWxjbGllbnRfMS5FeHRlcm5hbEFjY291bnRDbGllbnQuZnJvbUpTT04oe1xuICAgICAgICAgICAgICAgIC4uLmpzb24sXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xpZW50LnNjb3BlcyA9IHRoaXMuZ2V0QW55U2NvcGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoanNvbi50eXBlID09PSBleHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckNsaWVudF8xLkVYVEVSTkFMX0FDQ09VTlRfQVVUSE9SSVpFRF9VU0VSX1RZUEUpIHtcbiAgICAgICAgICAgIGNsaWVudCA9IG5ldyBleHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckNsaWVudF8xLkV4dGVybmFsQWNjb3VudEF1dGhvcml6ZWRVc2VyQ2xpZW50KHtcbiAgICAgICAgICAgICAgICAuLi5qc29uLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NvcGVzID0gdGhpcy5zY29wZXM7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgand0Y2xpZW50XzEuSldUKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zZXRHYXBpY0pXVFZhbHVlcyhjbGllbnQpO1xuICAgICAgICAgICAgY2xpZW50LmZyb21KU09OKGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmZXJyZWRVbml2ZXJzZURvbWFpbikge1xuICAgICAgICAgICAgY2xpZW50LnVuaXZlcnNlRG9tYWluID0gcHJlZmVycmVkVW5pdmVyc2VEb21haW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgSldUIG9yIFVzZXJSZWZyZXNoQ2xpZW50IGZyb20gSmF2YVNjcmlwdCBvYmplY3QsIGNhY2hpbmcgYm90aCB0aGVcbiAgICAgKiBvYmplY3QgdXNlZCB0byBpbnN0YW50aWF0ZSBhbmQgdGhlIGNsaWVudC5cbiAgICAgKiBAcGFyYW0ganNvbiBUaGUgaW5wdXQgb2JqZWN0LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBKV1Qgb3IgVXNlclJlZnJlc2ggb3B0aW9ucyBmb3IgdGhlIGNsaWVudFxuICAgICAqIEByZXR1cm5zIEpXVCBvciBVc2VyUmVmcmVzaCBDbGllbnQgd2l0aCBkYXRhXG4gICAgICovXG4gICAgX2NhY2hlQ2xpZW50RnJvbUpTT04oanNvbiwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLmZyb21KU09OKGpzb24sIG9wdGlvbnMpO1xuICAgICAgICAvLyBjYWNoZSBib3RoIHJhdyBkYXRhIHVzZWQgdG8gaW5zdGFudGlhdGUgY2xpZW50IGFuZCBjbGllbnQgaXRzZWxmLlxuICAgICAgICB0aGlzLmpzb25Db250ZW50ID0ganNvbjtcbiAgICAgICAgdGhpcy5jYWNoZWRDcmVkZW50aWFsID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cbiAgICBmcm9tU3RyZWFtKGlucHV0U3RyZWFtLCBvcHRpb25zT3JDYWxsYmFjayA9IHt9LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnNPckNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNPckNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5mcm9tU3RyZWFtQXN5bmMoaW5wdXRTdHJlYW0sIG9wdGlvbnMpLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVN0cmVhbUFzeW5jKGlucHV0U3RyZWFtLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmcm9tU3RyZWFtQXN5bmMoaW5wdXRTdHJlYW0sIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5wdXRTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcGFzcyBpbiBhIHN0cmVhbSBjb250YWluaW5nIHRoZSBHb29nbGUgYXV0aCBzZXR0aW5ncy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW1cbiAgICAgICAgICAgICAgICAuc2V0RW5jb2RpbmcoJ3V0ZjgnKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCByZWplY3QpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgY2h1bmsgPT4gY2h1bmtzLnB1c2goY2h1bmspKVxuICAgICAgICAgICAgICAgIC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShjaHVua3Muam9pbignJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuX2NhY2hlQ2xpZW50RnJvbUpTT04oZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBmYWlsZWQgcGFyc2luZyB0aGlzLmtleUZpbGVOYW1lLCBhc3N1bWUgdGhhdCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgYSBQRU0gb3IgcDEyIGNlcnRpZmljYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleUZpbGVuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBqd3RjbGllbnRfMS5KV1Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2xpZW50T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlGaWxlOiB0aGlzLmtleUZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlZENyZWRlbnRpYWwgPSBjbGllbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhcGljSldUVmFsdWVzKGNsaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjbGllbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY3JlZGVudGlhbHMgaW5zdGFuY2UgdXNpbmcgdGhlIGdpdmVuIEFQSSBrZXkgc3RyaW5nLlxuICAgICAqIFRoZSBjcmVhdGVkIGNsaWVudCBpcyBub3QgY2FjaGVkLiBJbiBvcmRlciB0byBjcmVhdGUgYW5kIGNhY2hlIGl0IHVzZSB0aGUge0BsaW5rIEdvb2dsZUF1dGguZ2V0Q2xpZW50IGBnZXRDbGllbnRgfSBtZXRob2QgYWZ0ZXIgZmlyc3QgcHJvdmlkaW5nIGFuIHtAbGluayBHb29nbGVBdXRoLmFwaUtleSBgYXBpS2V5YH0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXBpS2V5IFRoZSBBUEkga2V5IHN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIEEgSldUIGxvYWRlZCBmcm9tIHRoZSBrZXlcbiAgICAgKi9cbiAgICBmcm9tQVBJS2V5KGFwaUtleSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgand0Y2xpZW50XzEuSldUKHsgLi4ub3B0aW9ucywgYXBpS2V5IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgb3BlcmF0aW5nIHN5c3RlbSBpcyBXaW5kb3dzLlxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pc1dpbmRvd3MoKSB7XG4gICAgICAgIGNvbnN0IHN5cyA9IG9zLnBsYXRmb3JtKCk7XG4gICAgICAgIGlmIChzeXMgJiYgc3lzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICBpZiAoc3lzLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpID09PSAnd2luJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVuIHRoZSBHb29nbGUgQ2xvdWQgU0RLIGNvbW1hbmQgdGhhdCBwcmludHMgdGhlIGRlZmF1bHQgcHJvamVjdCBJRFxuICAgICAqL1xuICAgIGFzeW5jIGdldERlZmF1bHRTZXJ2aWNlUHJvamVjdElkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAoMCwgY2hpbGRfcHJvY2Vzc18xLmV4ZWMpKCdnY2xvdWQgY29uZmlnIGNvbmZpZy1oZWxwZXIgLS1mb3JtYXQganNvbicsIChlcnIsIHN0ZG91dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIHN0ZG91dCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gSlNPTi5wYXJzZShzdGRvdXQpLmNvbmZpZ3VyYXRpb24ucHJvcGVydGllcy5jb3JlLnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgcHJvamVjdCBpZCBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBnZXRQcm9kdWN0aW9uUHJvamVjdElkKCkge1xuICAgICAgICByZXR1cm4gKHByb2Nlc3MuZW52WydHQ0xPVURfUFJPSkVDVCddIHx8XG4gICAgICAgICAgICBwcm9jZXNzLmVudlsnR09PR0xFX0NMT1VEX1BST0pFQ1QnXSB8fFxuICAgICAgICAgICAgcHJvY2Vzcy5lbnZbJ2djbG91ZF9wcm9qZWN0J10gfHxcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Wydnb29nbGVfY2xvdWRfcHJvamVjdCddKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIHByb2plY3QgaWQgZnJvbSB0aGUgR09PR0xFX0FQUExJQ0FUSU9OX0NSRURFTlRJQUxTIGpzb24gZmlsZS5cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRGaWxlUHJvamVjdElkKCkge1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRDcmVkZW50aWFsKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gcmVhZCB0aGUgcHJvamVjdCBJRCBmcm9tIHRoZSBjYWNoZWQgY3JlZGVudGlhbHMgZmlsZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkQ3JlZGVudGlhbC5wcm9qZWN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5zdXJlIHRoZSBwcm9qZWN0SWQgaXMgbG9hZGVkIGZyb20gdGhlIGtleUZpbGUgaWYgYXZhaWxhYmxlLlxuICAgICAgICBpZiAodGhpcy5rZXlGaWxlbmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3JlZHMgPSBhd2FpdCB0aGlzLmdldENsaWVudCgpO1xuICAgICAgICAgICAgaWYgKGNyZWRzICYmIGNyZWRzLnByb2plY3RJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVkcy5wcm9qZWN0SWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHRvIGxvYWQgYSBjcmVkZW50aWFscyBmaWxlIGFuZCByZWFkIGl0cyBwcm9qZWN0IElEXG4gICAgICAgIGNvbnN0IHIgPSBhd2FpdCB0aGlzLl90cnlHZXRBcHBsaWNhdGlvbkNyZWRlbnRpYWxzRnJvbUVudmlyb25tZW50VmFyaWFibGUoKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHJldHVybiByLnByb2plY3RJZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2plY3QgSUQgZnJvbSBleHRlcm5hbCBhY2NvdW50IGNsaWVudCBpZiBhdmFpbGFibGUuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0RXh0ZXJuYWxBY2NvdW50Q2xpZW50UHJvamVjdElkKCkge1xuICAgICAgICBpZiAoIXRoaXMuanNvbkNvbnRlbnQgfHwgdGhpcy5qc29uQ29udGVudC50eXBlICE9PSBiYXNlZXh0ZXJuYWxjbGllbnRfMS5FWFRFUk5BTF9BQ0NPVU5UX1RZUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNyZWRzID0gYXdhaXQgdGhpcy5nZXRDbGllbnQoKTtcbiAgICAgICAgLy8gRG8gbm90IHN1cHByZXNzIHRoZSB1bmRlcmx5aW5nIGVycm9yLCBhcyB0aGUgZXJyb3IgY291bGQgY29udGFpbiBoZWxwZnVsXG4gICAgICAgIC8vIGluZm9ybWF0aW9uIGZvciBkZWJ1Z2dpbmcgYW5kIGZpeGluZy4gVGhpcyBpcyBlc3BlY2lhbGx5IHRydWUgZm9yXG4gICAgICAgIC8vIGV4dGVybmFsIGFjY291bnQgY3JlZHMgYXMgaW4gb3JkZXIgdG8gZ2V0IHRoZSBwcm9qZWN0IElELCB0aGUgZm9sbG93aW5nXG4gICAgICAgIC8vIG9wZXJhdGlvbnMgaGF2ZSB0byBzdWNjZWVkOlxuICAgICAgICAvLyAxLiBWYWxpZCBjcmVkZW50aWFscyBmaWxlIHNob3VsZCBiZSBzdXBwbGllZC5cbiAgICAgICAgLy8gMi4gQWJpbGl0eSB0byByZXRyaWV2ZSBhY2Nlc3MgdG9rZW5zIGZyb20gU1RTIHRva2VuIGV4Y2hhbmdlIEFQSS5cbiAgICAgICAgLy8gMy4gQWJpbGl0eSB0byBleGNoYW5nZSBmb3Igc2VydmljZSBhY2NvdW50IGltcGVyc29uYXRlZCBjcmVkZW50aWFscyAoaWZcbiAgICAgICAgLy8gICAgZW5hYmxlZCkuXG4gICAgICAgIC8vIDQuIEFiaWxpdHkgdG8gZ2V0IHByb2plY3QgaW5mbyB1c2luZyB0aGUgYWNjZXNzIHRva2VuIGZyb20gc3RlcCAyIG9yIDMuXG4gICAgICAgIC8vIFdpdGhvdXQgc3VyZmFjaW5nIHRoZSBlcnJvciwgaXQgaXMgaGFyZGVyIGZvciBkZXZlbG9wZXJzIHRvIGRldGVybWluZVxuICAgICAgICAvLyB3aGljaCBzdGVwIHdlbnQgd3JvbmcuXG4gICAgICAgIHJldHVybiBhd2FpdCBjcmVkcy5nZXRQcm9qZWN0SWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgQ29tcHV0ZSBFbmdpbmUgcHJvamVjdCBJRCBpZiBpdCBjYW4gYmUgaW5mZXJyZWQuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0R0NFUHJvamVjdElkKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgciA9IGF3YWl0IGdjcE1ldGFkYXRhLnByb2plY3QoJ3Byb2plY3QtaWQnKTtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgYW55IGVycm9yc1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q3JlZGVudGlhbHMoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmdldENyZWRlbnRpYWxzQXN5bmMoKS50aGVuKHIgPT4gY2FsbGJhY2sobnVsbCwgciksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENyZWRlbnRpYWxzQXN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRDcmVkZW50aWFsc0FzeW5jKCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldENsaWVudCgpO1xuICAgICAgICBpZiAoY2xpZW50IGluc3RhbmNlb2YgaW1wZXJzb25hdGVkXzEuSW1wZXJzb25hdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBjbGllbnRfZW1haWw6IGNsaWVudC5nZXRUYXJnZXRQcmluY2lwYWwoKSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGllbnQgaW5zdGFuY2VvZiBiYXNlZXh0ZXJuYWxjbGllbnRfMS5CYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlQWNjb3VudEVtYWlsID0gY2xpZW50LmdldFNlcnZpY2VBY2NvdW50RW1haWwoKTtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlQWNjb3VudEVtYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBzZXJ2aWNlQWNjb3VudEVtYWlsLFxuICAgICAgICAgICAgICAgICAgICB1bml2ZXJzZV9kb21haW46IGNsaWVudC51bml2ZXJzZURvbWFpbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmpzb25Db250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudF9lbWFpbDogdGhpcy5qc29uQ29udGVudC5jbGllbnRfZW1haWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXk6IHRoaXMuanNvbkNvbnRlbnQucHJpdmF0ZV9rZXksXG4gICAgICAgICAgICAgICAgdW5pdmVyc2VfZG9tYWluOiB0aGlzLmpzb25Db250ZW50LnVuaXZlcnNlX2RvbWFpbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuX2NoZWNrSXNHQ0UoKSkge1xuICAgICAgICAgICAgY29uc3QgW2NsaWVudF9lbWFpbCwgdW5pdmVyc2VfZG9tYWluXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBnY3BNZXRhZGF0YS5pbnN0YW5jZSgnc2VydmljZS1hY2NvdW50cy9kZWZhdWx0L2VtYWlsJyksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVbml2ZXJzZURvbWFpbigpLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICByZXR1cm4geyBjbGllbnRfZW1haWwsIHVuaXZlcnNlX2RvbWFpbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihleHBvcnRzLkdvb2dsZUF1dGhFeGNlcHRpb25NZXNzYWdlcy5OT19DUkVERU5USUFMU19GT1VORCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgb2J0YWluIGFuIHtAbGluayBBdXRoQ2xpZW50IGBBdXRoQ2xpZW50YH0gYmFzZWQgb24gdGhlXG4gICAgICogcHJvdmlkZWQgY29uZmlndXJhdGlvbi4gSWYgbm8gb3B0aW9ucyB3ZXJlIHBhc3NlZCwgdXNlIEFwcGxpY2F0aW9uXG4gICAgICogRGVmYXVsdCBDcmVkZW50aWFscy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRDbGllbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZENyZWRlbnRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZENyZWRlbnRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlIGFuIGV4aXN0aW5nIGF1dGggY2xpZW50IHJlcXVlc3QsIG9yIGNhY2hlIGEgbmV3IG9uZVxuICAgICAgICB0aGlzLiNwZW5kaW5nQXV0aENsaWVudCA9XG4gICAgICAgICAgICB0aGlzLiNwZW5kaW5nQXV0aENsaWVudCB8fCB0aGlzLiNkZXRlcm1pbmVDbGllbnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNwZW5kaW5nQXV0aENsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBwZW5kaW5nIGF1dGggY2xpZW50IGluIGNhc2UgaXQgaXMgY2hhbmdlZCBsYXRlclxuICAgICAgICAgICAgdGhpcy4jcGVuZGluZ0F1dGhDbGllbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jICNkZXRlcm1pbmVDbGllbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmpzb25Db250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVDbGllbnRGcm9tSlNPTih0aGlzLmpzb25Db250ZW50LCB0aGlzLmNsaWVudE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMua2V5RmlsZW5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHRoaXMua2V5RmlsZW5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlUGF0aCk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mcm9tU3RyZWFtQXN5bmMoc3RyZWFtLCB0aGlzLmNsaWVudE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBpS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmZyb21BUElLZXkodGhpcy5hcGlLZXksIHRoaXMuY2xpZW50T3B0aW9ucyk7XG4gICAgICAgICAgICBjbGllbnQuc2NvcGVzID0gdGhpcy5zY29wZXM7XG4gICAgICAgICAgICBjb25zdCB7IGNyZWRlbnRpYWwgfSA9IGF3YWl0IHRoaXMuI3ByZXBhcmVBbmRDYWNoZUNsaWVudChjbGllbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IGNyZWRlbnRpYWwgfSA9IGF3YWl0IHRoaXMuZ2V0QXBwbGljYXRpb25EZWZhdWx0QXN5bmModGhpcy5jbGllbnRPcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiBjcmVkZW50aWFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjbGllbnQgd2hpY2ggd2lsbCBmZXRjaCBhbiBJRCB0b2tlbiBmb3IgYXV0aG9yaXphdGlvbi5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0QXVkaWVuY2UgdGhlIGF1ZGllbmNlIGZvciB0aGUgZmV0Y2hlZCBJRCB0b2tlbi5cbiAgICAgKiBAcmV0dXJucyBJZFRva2VuQ2xpZW50IGZvciBtYWtpbmcgSFRUUCBjYWxscyBhdXRoZW50aWNhdGVkIHdpdGggSUQgdG9rZW5zLlxuICAgICAqL1xuICAgIGFzeW5jIGdldElkVG9rZW5DbGllbnQodGFyZ2V0QXVkaWVuY2UpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRDbGllbnQoKTtcbiAgICAgICAgaWYgKCEoJ2ZldGNoSWRUb2tlbicgaW4gY2xpZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmV0Y2ggSUQgdG9rZW4gaW4gdGhpcyBlbnZpcm9ubWVudCwgdXNlIEdDRSBvciBzZXQgdGhlIEdPT0dMRV9BUFBMSUNBVElPTl9DUkVERU5USUFMUyBlbnZpcm9ubWVudCB2YXJpYWJsZSB0byBhIHNlcnZpY2UgYWNjb3VudCBjcmVkZW50aWFscyBKU09OIGZpbGUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBpZHRva2VuY2xpZW50XzEuSWRUb2tlbkNsaWVudCh7IHRhcmdldEF1ZGllbmNlLCBpZFRva2VuUHJvdmlkZXI6IGNsaWVudCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSBvYnRhaW4gYXBwbGljYXRpb24gZGVmYXVsdCBjcmVkZW50aWFscywgYW5kIHJldHVyblxuICAgICAqIGFuIGFjY2VzcyB0b2tlbiBmb3IgbWFraW5nIHJlcXVlc3RzLlxuICAgICAqL1xuICAgIGFzeW5jIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldENsaWVudCgpO1xuICAgICAgICByZXR1cm4gKGF3YWl0IGNsaWVudC5nZXRBY2Nlc3NUb2tlbigpKS50b2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT2J0YWluIHRoZSBIVFRQIGhlYWRlcnMgdGhhdCB3aWxsIHByb3ZpZGUgYXV0aG9yaXphdGlvbiBmb3IgYSBnaXZlblxuICAgICAqIHJlcXVlc3QuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0UmVxdWVzdEhlYWRlcnModXJsKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50KCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0UmVxdWVzdEhlYWRlcnModXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT2J0YWluIGNyZWRlbnRpYWxzIGZvciBhIHJlcXVlc3QsIHRoZW4gYXR0YWNoIHRoZSBhcHByb3ByaWF0ZSBoZWFkZXJzIHRvXG4gICAgICogdGhlIHJlcXVlc3Qgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gb3B0cyBBeGlvcyBvciBSZXF1ZXN0IG9wdGlvbnMgb24gd2hpY2ggdG8gYXR0YWNoIHRoZSBoZWFkZXJzXG4gICAgICovXG4gICAgYXN5bmMgYXV0aG9yaXplUmVxdWVzdChvcHRzID0ge30pIHtcbiAgICAgICAgY29uc3QgdXJsID0gb3B0cy51cmw7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50KCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBjbGllbnQuZ2V0UmVxdWVzdEhlYWRlcnModXJsKTtcbiAgICAgICAgb3B0cy5oZWFkZXJzID0gZ2F4aW9zXzEuR2F4aW9zLm1lcmdlSGVhZGVycyhvcHRzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gb3B0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSB7QGxpbmsgZmV0Y2ggYGZldGNoYH0gY29tcGxpYW50IEFQSSBmb3Ige0BsaW5rIEdvb2dsZUF1dGh9LlxuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgR29vZ2xlQXV0aC5yZXF1ZXN0fSBmb3IgdGhlIGNsYXNzaWMgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGFzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgYGZldGNoYCBBUEkgdXNhZ2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBhdXRoID0gbmV3IEdvb2dsZUF1dGgoKTtcbiAgICAgKiBjb25zdCBmZXRjaFdpdGhBdXRoOiB0eXBlb2YgZmV0Y2ggPSAoLi4uYXJncykgPT4gYXV0aC5mZXRjaCguLi5hcmdzKTtcbiAgICAgKiBhd2FpdCBmZXRjaFdpdGhBdXRoKCdodHRwczovL2V4YW1wbGUuY29tJyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJncyBgZmV0Y2hgIEFQSSBvciB7QGxpbmsgR2F4aW9zLmZldGNoIGBHYXhpb3MjZmV0Y2hgfSBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMgdGhlIHtAbGluayBHYXhpb3NSZXNwb25zZX0gd2l0aCBHYXhpb3MtYWRkZWQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGFzeW5jIGZldGNoKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5mZXRjaCguLi5hcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSBvYnRhaW4gYXBwbGljYXRpb24gZGVmYXVsdCBjcmVkZW50aWFscywgYW5kIG1ha2UgYW5cbiAgICAgKiBIVFRQIHJlcXVlc3QgdXNpbmcgdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBHb29nbGVBdXRoLmZldGNofSBmb3IgdGhlIG1vZGVybiBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0cyBBeGlvcyByZXF1ZXN0IG9wdGlvbnMgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdChvcHRzKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Q2xpZW50KCk7XG4gICAgICAgIHJldHVybiBjbGllbnQucmVxdWVzdChvcHRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHRoZSBjb21wdXRlIGVudmlyb25tZW50IGluIHdoaWNoIHRoZSBjb2RlIGlzIHJ1bm5pbmcuXG4gICAgICovXG4gICAgZ2V0RW52KCkge1xuICAgICAgICByZXR1cm4gKDAsIGVudkRldGVjdF8xLmdldEVudikoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2lnbiB0aGUgZ2l2ZW4gZGF0YSB3aXRoIHRoZSBjdXJyZW50IHByaXZhdGUga2V5LCBvciBnbyBvdXRcbiAgICAgKiB0byB0aGUgSUFNIEFQSSB0byBzaWduIGl0LlxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNpZ25lZC5cbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgQSBjdXN0b20gZW5kcG9pbnQgdG8gdXNlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBcbiAgICAgKiBzaWduKCdkYXRhJywgJ2h0dHBzOi8vaWFtY3JlZGVudGlhbHMuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvLS9zZXJ2aWNlQWNjb3VudHMvJyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYXN5bmMgc2lnbihkYXRhLCBlbmRwb2ludCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldENsaWVudCgpO1xuICAgICAgICBjb25zdCB1bml2ZXJzZSA9IGF3YWl0IHRoaXMuZ2V0VW5pdmVyc2VEb21haW4oKTtcbiAgICAgICAgZW5kcG9pbnQgPVxuICAgICAgICAgICAgZW5kcG9pbnQgfHxcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9pYW1jcmVkZW50aWFscy4ke3VuaXZlcnNlfS92MS9wcm9qZWN0cy8tL3NlcnZpY2VBY2NvdW50cy9gO1xuICAgICAgICBpZiAoY2xpZW50IGluc3RhbmNlb2YgaW1wZXJzb25hdGVkXzEuSW1wZXJzb25hdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduZWQgPSBhd2FpdCBjbGllbnQuc2lnbihkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBzaWduZWQuc2lnbmVkQmxvYjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjcnlwdG8gPSAoMCwgY3J5cHRvXzEuY3JlYXRlQ3J5cHRvKSgpO1xuICAgICAgICBpZiAoY2xpZW50IGluc3RhbmNlb2Ygand0Y2xpZW50XzEuSldUICYmIGNsaWVudC5rZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZ24gPSBhd2FpdCBjcnlwdG8uc2lnbihjbGllbnQua2V5LCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBzaWduO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNyZWRzID0gYXdhaXQgdGhpcy5nZXRDcmVkZW50aWFscygpO1xuICAgICAgICBpZiAoIWNyZWRzLmNsaWVudF9lbWFpbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2lnbiBkYXRhIHdpdGhvdXQgYGNsaWVudF9lbWFpbGAuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbkJsb2IoY3J5cHRvLCBjcmVkcy5jbGllbnRfZW1haWwsIGRhdGEsIGVuZHBvaW50KTtcbiAgICB9XG4gICAgYXN5bmMgc2lnbkJsb2IoY3J5cHRvLCBlbWFpbE9yVW5pcXVlSWQsIGRhdGEsIGVuZHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5kcG9pbnQgKyBgJHtlbWFpbE9yVW5pcXVlSWR9OnNpZ25CbG9iYCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogdXJsLmhyZWYsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZDogY3J5cHRvLmVuY29kZUJhc2U2NFN0cmluZ1V0ZjgoZGF0YSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0cnk6IHRydWUsXG4gICAgICAgICAgICByZXRyeUNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGh0dHBNZXRob2RzVG9SZXRyeTogWydQT1NUJ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhLnNpZ25lZEJsb2I7XG4gICAgfVxufVxuZXhwb3J0cy5Hb29nbGVBdXRoID0gR29vZ2xlQXV0aDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdvb2dsZWF1dGguanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMTQgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklBTUF1dGggPSB2b2lkIDA7XG5jbGFzcyBJQU1BdXRoIHtcbiAgICBzZWxlY3RvcjtcbiAgICB0b2tlbjtcbiAgICAvKipcbiAgICAgKiBJQU0gY3JlZGVudGlhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3IgdGhlIGlhbSBhdXRob3JpdHkgc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gdG9rZW4gdGhlIHRva2VuXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHRva2VuKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNxdWlyZSB0aGUgSFRUUCBoZWFkZXJzIHJlcXVpcmVkIHRvIG1ha2UgYW4gYXV0aGVudGljYXRlZCByZXF1ZXN0LlxuICAgICAqL1xuICAgIGdldFJlcXVlc3RIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3gtZ29vZy1pYW0tYXV0aG9yaXR5LXNlbGVjdG9yJzogdGhpcy5zZWxlY3RvcixcbiAgICAgICAgICAgICd4LWdvb2ctaWFtLWF1dGhvcml6YXRpb24tdG9rZW4nOiB0aGlzLnRva2VuLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuSUFNQXV0aCA9IElBTUF1dGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pYW0uanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRvd25zY29wZWRDbGllbnQgPSBleHBvcnRzLkVYUElSQVRJT05fVElNRV9PRkZTRVQgPSBleHBvcnRzLk1BWF9BQ0NFU1NfQk9VTkRBUllfUlVMRVNfQ09VTlQgPSB2b2lkIDA7XG5jb25zdCBnYXhpb3NfMSA9IHJlcXVpcmUoXCJnYXhpb3NcIik7XG5jb25zdCBzdHJlYW0gPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbmNvbnN0IHN0cyA9IHJlcXVpcmUoXCIuL3N0c2NyZWRlbnRpYWxzXCIpO1xuLyoqXG4gKiBUaGUgcmVxdWlyZWQgdG9rZW4gZXhjaGFuZ2UgZ3JhbnRfdHlwZTogcmZjODY5MyNzZWN0aW9uLTIuMVxuICovXG5jb25zdCBTVFNfR1JBTlRfVFlQRSA9ICd1cm46aWV0ZjpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTp0b2tlbi1leGNoYW5nZSc7XG4vKipcbiAqIFRoZSByZXF1ZXN0ZWQgdG9rZW4gZXhjaGFuZ2UgcmVxdWVzdGVkX3Rva2VuX3R5cGU6IHJmYzg2OTMjc2VjdGlvbi0yLjFcbiAqL1xuY29uc3QgU1RTX1JFUVVFU1RfVE9LRU5fVFlQRSA9ICd1cm46aWV0ZjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTphY2Nlc3NfdG9rZW4nO1xuLyoqXG4gKiBUaGUgcmVxdWVzdGVkIHRva2VuIGV4Y2hhbmdlIHN1YmplY3RfdG9rZW5fdHlwZTogcmZjODY5MyNzZWN0aW9uLTIuMVxuICovXG5jb25zdCBTVFNfU1VCSkVDVF9UT0tFTl9UWVBFID0gJ3VybjppZXRmOnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOmFjY2Vzc190b2tlbic7XG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhY2Nlc3MgYm91bmRhcnkgcnVsZXMgYSBDcmVkZW50aWFsIEFjY2VzcyBCb3VuZGFyeVxuICogY2FuIGNvbnRhaW4uXG4gKi9cbmV4cG9ydHMuTUFYX0FDQ0VTU19CT1VOREFSWV9SVUxFU19DT1VOVCA9IDEwO1xuLyoqXG4gKiBPZmZzZXQgdG8gdGFrZSBpbnRvIGFjY291bnQgbmV0d29yayBkZWxheXMgYW5kIHNlcnZlciBjbG9jayBza2V3cy5cbiAqL1xuZXhwb3J0cy5FWFBJUkFUSU9OX1RJTUVfT0ZGU0VUID0gNSAqIDYwICogMTAwMDtcbi8qKlxuICogRGVmaW5lcyBhIHNldCBvZiBHb29nbGUgY3JlZGVudGlhbHMgdGhhdCBhcmUgZG93bnNjb3BlZCBmcm9tIGFuIGV4aXN0aW5nIHNldFxuICogb2YgR29vZ2xlIE9BdXRoMiBjcmVkZW50aWFscy4gVGhpcyBpcyB1c2VmdWwgdG8gcmVzdHJpY3QgdGhlIElkZW50aXR5IGFuZFxuICogQWNjZXNzIE1hbmFnZW1lbnQgKElBTSkgcGVybWlzc2lvbnMgdGhhdCBhIHNob3J0LWxpdmVkIGNyZWRlbnRpYWwgY2FuIHVzZS5cbiAqIFRoZSBjb21tb24gcGF0dGVybiBvZiB1c2FnZSBpcyB0byBoYXZlIGEgdG9rZW4gYnJva2VyIHdpdGggZWxldmF0ZWQgYWNjZXNzXG4gKiBnZW5lcmF0ZSB0aGVzZSBkb3duc2NvcGVkIGNyZWRlbnRpYWxzIGZyb20gaGlnaGVyIGFjY2VzcyBzb3VyY2UgY3JlZGVudGlhbHNcbiAqIGFuZCBwYXNzIHRoZSBkb3duc2NvcGVkIHNob3J0LWxpdmVkIGFjY2VzcyB0b2tlbnMgdG8gYSB0b2tlbiBjb25zdW1lciB2aWFcbiAqIHNvbWUgc2VjdXJlIGF1dGhlbnRpY2F0ZWQgY2hhbm5lbCBmb3IgbGltaXRlZCBhY2Nlc3MgdG8gR29vZ2xlIENsb3VkIFN0b3JhZ2VcbiAqIHJlc291cmNlcy5cbiAqL1xuY2xhc3MgRG93bnNjb3BlZENsaWVudCBleHRlbmRzIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50IHtcbiAgICBhdXRoQ2xpZW50O1xuICAgIGNyZWRlbnRpYWxBY2Nlc3NCb3VuZGFyeTtcbiAgICBjYWNoZWREb3duc2NvcGVkQWNjZXNzVG9rZW47XG4gICAgc3RzQ3JlZGVudGlhbDtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBkb3duc2NvcGVkIGNsaWVudCBvYmplY3QgdXNpbmcgdGhlIHByb3ZpZGVkIHNvdXJjZVxuICAgICAqIEF1dGhDbGllbnQgYW5kIGNyZWRlbnRpYWwgYWNjZXNzIGJvdW5kYXJ5IHJ1bGVzLlxuICAgICAqIFRvIGRvd25zY29wZSBwZXJtaXNzaW9ucyBvZiBhIHNvdXJjZSBBdXRoQ2xpZW50LCBhIENyZWRlbnRpYWwgQWNjZXNzXG4gICAgICogQm91bmRhcnkgdGhhdCBzcGVjaWZpZXMgd2hpY2ggcmVzb3VyY2VzIHRoZSBuZXcgY3JlZGVudGlhbCBjYW4gYWNjZXNzLCBhc1xuICAgICAqIHdlbGwgYXMgYW4gdXBwZXIgYm91bmQgb24gdGhlIHBlcm1pc3Npb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBlYWNoXG4gICAgICogcmVzb3VyY2UsIGhhcyB0byBiZSBkZWZpbmVkLiBBIGRvd25zY29wZWQgY2xpZW50IGNhbiB0aGVuIGJlIGluc3RhbnRpYXRlZFxuICAgICAqIHVzaW5nIHRoZSBzb3VyY2UgQXV0aENsaWVudCBhbmQgdGhlIENyZWRlbnRpYWwgQWNjZXNzIEJvdW5kYXJ5LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSB7QGxpbmsgRG93bnNjb3BlZENsaWVudE9wdGlvbnMgYERvd25zY29wZWRDbGllbnRPcHRpb25zYH0gdG8gdXNlLiBQYXNzaW5nIGFuIGBBdXRoQ2xpZW50YCBkaXJlY3RseSBpcyAqKkBERVBSRUNBVEVEKiouXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxBY2Nlc3NCb3VuZGFyeSAqKkBERVBSRUNBVEVEKiouIFByb3ZpZGUgYSB7QGxpbmsgRG93bnNjb3BlZENsaWVudE9wdGlvbnMgYERvd25zY29wZWRDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKipcbiAgICAgKiBBdXRoQ2xpZW50IGlzIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eS5cbiAgICAgKi9cbiAgICBvcHRpb25zLCBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCAtIHByb3ZpZGUgYSB7QGxpbmsgRG93bnNjb3BlZENsaWVudE9wdGlvbnMgYERvd25zY29wZWRDbGllbnRPcHRpb25zYH0gb2JqZWN0IGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW5zdGVhZFxuICAgICAqL1xuICAgIGNyZWRlbnRpYWxBY2Nlc3NCb3VuZGFyeSA9IHtcbiAgICAgICAgYWNjZXNzQm91bmRhcnk6IHtcbiAgICAgICAgICAgIGFjY2Vzc0JvdW5kYXJ5UnVsZXM6IFtdLFxuICAgICAgICB9LFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyBpbnN0YW5jZW9mIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50ID8ge30gOiBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBhdXRoY2xpZW50XzEuQXV0aENsaWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoQ2xpZW50ID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbEFjY2Vzc0JvdW5kYXJ5ID0gY3JlZGVudGlhbEFjY2Vzc0JvdW5kYXJ5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRoQ2xpZW50ID0gb3B0aW9ucy5hdXRoQ2xpZW50O1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsQWNjZXNzQm91bmRhcnkgPSBvcHRpb25zLmNyZWRlbnRpYWxBY2Nlc3NCb3VuZGFyeTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayAxLTEwIEFjY2VzcyBCb3VuZGFyeSBSdWxlcyBhcmUgZGVmaW5lZCB3aXRoaW4gQ3JlZGVudGlhbCBBY2Nlc3NcbiAgICAgICAgLy8gQm91bmRhcnkuXG4gICAgICAgIGlmICh0aGlzLmNyZWRlbnRpYWxBY2Nlc3NCb3VuZGFyeS5hY2Nlc3NCb3VuZGFyeS5hY2Nlc3NCb3VuZGFyeVJ1bGVzXG4gICAgICAgICAgICAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0IGxlYXN0IG9uZSBhY2Nlc3MgYm91bmRhcnkgcnVsZSBuZWVkcyB0byBiZSBkZWZpbmVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3JlZGVudGlhbEFjY2Vzc0JvdW5kYXJ5LmFjY2Vzc0JvdW5kYXJ5LmFjY2Vzc0JvdW5kYXJ5UnVsZXMubGVuZ3RoID5cbiAgICAgICAgICAgIGV4cG9ydHMuTUFYX0FDQ0VTU19CT1VOREFSWV9SVUxFU19DT1VOVCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgYWNjZXNzIGJvdW5kYXJ5IGhhcyBtb3JlIHRoYW4gJyArXG4gICAgICAgICAgICAgICAgYCR7ZXhwb3J0cy5NQVhfQUNDRVNTX0JPVU5EQVJZX1JVTEVTX0NPVU5UfSBhY2Nlc3MgYm91bmRhcnkgcnVsZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgYXQgbGVhc3Qgb25lIHBlcm1pc3Npb24gc2hvdWxkIGJlIGRlZmluZWQgaW4gZWFjaCBBY2Nlc3MgQm91bmRhcnlcbiAgICAgICAgLy8gUnVsZS5cbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHRoaXMuY3JlZGVudGlhbEFjY2Vzc0JvdW5kYXJ5LmFjY2Vzc0JvdW5kYXJ5XG4gICAgICAgICAgICAuYWNjZXNzQm91bmRhcnlSdWxlcykge1xuICAgICAgICAgICAgaWYgKHJ1bGUuYXZhaWxhYmxlUGVybWlzc2lvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdCBsZWFzdCBvbmUgcGVybWlzc2lvbiBzaG91bGQgYmUgZGVmaW5lZCBpbiBhY2Nlc3MgYm91bmRhcnkgcnVsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHNDcmVkZW50aWFsID0gbmV3IHN0cy5TdHNDcmVkZW50aWFscyh7XG4gICAgICAgICAgICB0b2tlbkV4Y2hhbmdlRW5kcG9pbnQ6IGBodHRwczovL3N0cy4ke3RoaXMudW5pdmVyc2VEb21haW59L3YxL3Rva2VuYCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FjaGVkRG93bnNjb3BlZEFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSBtZWNoYW5pc20gdG8gaW5qZWN0IERvd25zY29wZWQgYWNjZXNzIHRva2VucyBkaXJlY3RseS5cbiAgICAgKiBUaGUgZXhwaXJ5X2RhdGUgZmllbGQgaXMgcmVxdWlyZWQgdG8gZmFjaWxpdGF0ZSBkZXRlcm1pbmF0aW9uIG9mIHRoZSB0b2tlblxuICAgICAqIGV4cGlyYXRpb24gd2hpY2ggd291bGQgbWFrZSBpdCBlYXNpZXIgZm9yIHRoZSB0b2tlbiBjb25zdW1lciB0byBoYW5kbGUuXG4gICAgICogQHBhcmFtIGNyZWRlbnRpYWxzIFRoZSBDcmVkZW50aWFscyBvYmplY3QgdG8gc2V0IG9uIHRoZSBjdXJyZW50IGNsaWVudC5cbiAgICAgKi9cbiAgICBzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzLmV4cGlyeV9kYXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhY2Nlc3MgdG9rZW4gZXhwaXJ5X2RhdGUgZmllbGQgaXMgbWlzc2luZyBpbiB0aGUgcHJvdmlkZWQgJyArXG4gICAgICAgICAgICAgICAgJ2NyZWRlbnRpYWxzLicpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKTtcbiAgICAgICAgdGhpcy5jYWNoZWREb3duc2NvcGVkQWNjZXNzVG9rZW4gPSBjcmVkZW50aWFscztcbiAgICB9XG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIC8vIElmIHRoZSBjYWNoZWQgYWNjZXNzIHRva2VuIGlzIHVuYXZhaWxhYmxlIG9yIGV4cGlyZWQsIGZvcmNlIHJlZnJlc2guXG4gICAgICAgIC8vIFRoZSBEb3duc2NvcGVkIGFjY2VzcyB0b2tlbiB3aWxsIGJlIHJldHVybmVkIGluXG4gICAgICAgIC8vIERvd25zY29wZWRBY2Nlc3NUb2tlblJlc3BvbnNlIGZvcm1hdC5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlZERvd25zY29wZWRBY2Nlc3NUb2tlbiB8fFxuICAgICAgICAgICAgdGhpcy5pc0V4cGlyZWQodGhpcy5jYWNoZWREb3duc2NvcGVkQWNjZXNzVG9rZW4pKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIERvd25zY29wZWQgYWNjZXNzIHRva2VuIGluIERvd25zY29wZWRBY2Nlc3NUb2tlblJlc3BvbnNlIGZvcm1hdC5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLmNhY2hlZERvd25zY29wZWRBY2Nlc3NUb2tlbi5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICBleHBpcmF0aW9uVGltZTogdGhpcy5jYWNoZWREb3duc2NvcGVkQWNjZXNzVG9rZW4uZXhwaXJ5X2RhdGUsXG4gICAgICAgICAgICByZXM6IHRoaXMuY2FjaGVkRG93bnNjb3BlZEFjY2Vzc1Rva2VuLnJlcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gYXV0aGVudGljYXRpb24gaW50ZXJmYWNlLiBJdCB0YWtlcyBhbiBvcHRpb25hbCB1cmwgd2hpY2ggd2hlblxuICAgICAqIHByZXNlbnQgaXMgdGhlIGVuZHBvaW50IGJlaW5nIGFjY2Vzc2VkLCBhbmQgcmV0dXJucyBhIFByb21pc2Ugd2hpY2hcbiAgICAgKiByZXNvbHZlcyB3aXRoIGF1dGhvcml6YXRpb24gaGVhZGVyIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIFRoZSByZXN1bHQgaGFzIHRoZSBmb3JtOlxuICAgICAqIHsgYXV0aG9yaXphdGlvbjogJ0JlYXJlciA8YWNjZXNzX3Rva2VuX3ZhbHVlPicgfVxuICAgICAqL1xuICAgIGFzeW5jIGdldFJlcXVlc3RIZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlblJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRBY2Nlc3NUb2tlbigpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VuUmVzcG9uc2UudG9rZW59YCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFNoYXJlZE1ldGFkYXRhSGVhZGVycyhoZWFkZXJzKTtcbiAgICB9XG4gICAgcmVxdWVzdChvcHRzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEFzeW5jKG9wdHMpLnRoZW4ociA9PiBjYWxsYmFjayhudWxsLCByKSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGUsIGUucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXV0aGVudGljYXRlcyB0aGUgcHJvdmlkZWQgSFRUUCByZXF1ZXN0LCBwcm9jZXNzZXMgaXQgYW5kIHJlc29sdmVzIHdpdGggdGhlXG4gICAgICogcmV0dXJuZWQgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIEhUVFAgcmVxdWVzdCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSByZUF1dGhSZXRyaWVkIFdoZXRoZXIgdGhlIGN1cnJlbnQgYXR0ZW1wdCBpcyBhIHJldHJ5IGFmdGVyIGEgZmFpbGVkIGF0dGVtcHQgZHVlIHRvIGFuIGF1dGggZmFpbHVyZVxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0QXN5bmMob3B0cywgcmVBdXRoUmV0cmllZCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gYXdhaXQgdGhpcy5nZXRSZXF1ZXN0SGVhZGVycygpO1xuICAgICAgICAgICAgb3B0cy5oZWFkZXJzID0gZ2F4aW9zXzEuR2F4aW9zLm1lcmdlSGVhZGVycyhvcHRzLmhlYWRlcnMpO1xuICAgICAgICAgICAgdGhpcy5hZGRVc2VyUHJvamVjdEFuZEF1dGhIZWFkZXJzKG9wdHMuaGVhZGVycywgcmVxdWVzdEhlYWRlcnMpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnRyYW5zcG9ydGVyLnJlcXVlc3Qob3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGUucmVzcG9uc2U7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXM7XG4gICAgICAgICAgICAgICAgLy8gUmV0cnkgdGhlIHJlcXVlc3QgZm9yIG1ldGFkYXRhIGlmIHRoZSBmb2xsb3dpbmcgY3JpdGVyaWEgYXJlIHRydWU6XG4gICAgICAgICAgICAgICAgLy8gLSBXZSBoYXZlbid0IGFscmVhZHkgcmV0cmllZC4gIEl0IG9ubHkgbWFrZXMgc2Vuc2UgdG8gcmV0cnkgb25jZS5cbiAgICAgICAgICAgICAgICAvLyAtIFRoZSByZXNwb25zZSB3YXMgYSA0MDEgb3IgYSA0MDNcbiAgICAgICAgICAgICAgICAvLyAtIFRoZSByZXF1ZXN0IGRpZG4ndCBzZW5kIGEgcmVhZGFibGVTdHJlYW1cbiAgICAgICAgICAgICAgICAvLyAtIGZvcmNlUmVmcmVzaE9uRmFpbHVyZSBpcyB0cnVlXG4gICAgICAgICAgICAgICAgY29uc3QgaXNSZWFkYWJsZVN0cmVhbSA9IHJlcy5jb25maWcuZGF0YSBpbnN0YW5jZW9mIHN0cmVhbS5SZWFkYWJsZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0F1dGhFcnIgPSBzdGF0dXNDb2RlID09PSA0MDEgfHwgc3RhdHVzQ29kZSA9PT0gNDAzO1xuICAgICAgICAgICAgICAgIGlmICghcmVBdXRoUmV0cmllZCAmJlxuICAgICAgICAgICAgICAgICAgICBpc0F1dGhFcnIgJiZcbiAgICAgICAgICAgICAgICAgICAgIWlzUmVhZGFibGVTdHJlYW0gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlZnJlc2hPbkZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoQWNjZXNzVG9rZW5Bc3luYygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0QXN5bmMob3B0cywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvcmNlcyB0b2tlbiByZWZyZXNoLCBldmVuIGlmIHVuZXhwaXJlZCB0b2tlbnMgYXJlIGN1cnJlbnRseSBjYWNoZWQuXG4gICAgICogR0NQIGFjY2VzcyB0b2tlbnMgYXJlIHJldHJpZXZlZCBmcm9tIGF1dGhjbGllbnQgb2JqZWN0L3NvdXJjZSBjcmVkZW50aWFsLlxuICAgICAqIFRoZW4gR0NQIGFjY2VzcyB0b2tlbnMgYXJlIGV4Y2hhbmdlZCBmb3IgZG93bnNjb3BlZCBhY2Nlc3MgdG9rZW5zIHZpYSB0aGVcbiAgICAgKiB0b2tlbiBleGNoYW5nZSBlbmRwb2ludC5cbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGZyZXNoIGRvd25zY29wZWQgYWNjZXNzIHRva2VuLlxuICAgICAqL1xuICAgIGFzeW5jIHJlZnJlc2hBY2Nlc3NUb2tlbkFzeW5jKCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSBHQ1AgYWNjZXNzIHRva2VuIGZyb20gc291cmNlIGNyZWRlbnRpYWwuXG4gICAgICAgIGNvbnN0IHN1YmplY3RUb2tlbiA9IChhd2FpdCB0aGlzLmF1dGhDbGllbnQuZ2V0QWNjZXNzVG9rZW4oKSkudG9rZW47XG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgU1RTIGNyZWRlbnRpYWxzIG9wdGlvbnMuXG4gICAgICAgIGNvbnN0IHN0c0NyZWRlbnRpYWxzT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGdyYW50VHlwZTogU1RTX0dSQU5UX1RZUEUsXG4gICAgICAgICAgICByZXF1ZXN0ZWRUb2tlblR5cGU6IFNUU19SRVFVRVNUX1RPS0VOX1RZUEUsXG4gICAgICAgICAgICBzdWJqZWN0VG9rZW46IHN1YmplY3RUb2tlbixcbiAgICAgICAgICAgIHN1YmplY3RUb2tlblR5cGU6IFNUU19TVUJKRUNUX1RPS0VOX1RZUEUsXG4gICAgICAgIH07XG4gICAgICAgIC8vIEV4Y2hhbmdlIHRoZSBzb3VyY2UgQXV0aENsaWVudCBhY2Nlc3MgdG9rZW4gZm9yIGEgRG93bnNjb3BlZCBhY2Nlc3NcbiAgICAgICAgLy8gdG9rZW4uXG4gICAgICAgIGNvbnN0IHN0c1Jlc3BvbnNlID0gYXdhaXQgdGhpcy5zdHNDcmVkZW50aWFsLmV4Y2hhbmdlVG9rZW4oc3RzQ3JlZGVudGlhbHNPcHRpb25zLCB1bmRlZmluZWQsIHRoaXMuY3JlZGVudGlhbEFjY2Vzc0JvdW5kYXJ5KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBTVFMgZW5kcG9pbnQgd2lsbCBvbmx5IHJldHVybiB0aGUgZXhwaXJhdGlvbiB0aW1lIGZvciB0aGUgZG93bnNjb3BlZFxuICAgICAgICAgKiBhY2Nlc3MgdG9rZW4gaWYgdGhlIG9yaWdpbmFsIGFjY2VzcyB0b2tlbiByZXByZXNlbnRzIGEgc2VydmljZSBhY2NvdW50LlxuICAgICAgICAgKiBUaGUgZG93bnNjb3BlZCB0b2tlbidzIGV4cGlyYXRpb24gdGltZSB3aWxsIGFsd2F5cyBtYXRjaCB0aGUgc291cmNlXG4gICAgICAgICAqIGNyZWRlbnRpYWwgZXhwaXJhdGlvbi4gV2hlbiBubyBleHBpcmVzX2luIGlzIHJldHVybmVkLCB3ZSBjYW4gY29weSB0aGVcbiAgICAgICAgICogc291cmNlIGNyZWRlbnRpYWwncyBleHBpcmF0aW9uIHRpbWUuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBzb3VyY2VDcmVkRXhwaXJlRGF0ZSA9IHRoaXMuYXV0aENsaWVudC5jcmVkZW50aWFscz8uZXhwaXJ5X2RhdGUgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZSA9IHN0c1Jlc3BvbnNlLmV4cGlyZXNfaW5cbiAgICAgICAgICAgID8gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBzdHNSZXNwb25zZS5leHBpcmVzX2luICogMTAwMFxuICAgICAgICAgICAgOiBzb3VyY2VDcmVkRXhwaXJlRGF0ZTtcbiAgICAgICAgLy8gU2F2ZSByZXNwb25zZSBpbiBjYWNoZWQgYWNjZXNzIHRva2VuLlxuICAgICAgICB0aGlzLmNhY2hlZERvd25zY29wZWRBY2Nlc3NUb2tlbiA9IHtcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbjogc3RzUmVzcG9uc2UuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgZXhwaXJ5X2RhdGU6IGV4cGlyeURhdGUsXG4gICAgICAgICAgICByZXM6IHN0c1Jlc3BvbnNlLnJlcyxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gU2F2ZSBjcmVkZW50aWFscy5cbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3JlZGVudGlhbHMsIHRoaXMuY2FjaGVkRG93bnNjb3BlZEFjY2Vzc1Rva2VuKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3JlZGVudGlhbHMucmVzO1xuICAgICAgICAvLyBUcmlnZ2VyIHRva2VucyBldmVudCB0byBub3RpZnkgZXh0ZXJuYWwgbGlzdGVuZXJzLlxuICAgICAgICB0aGlzLmVtaXQoJ3Rva2VucycsIHtcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IG51bGwsXG4gICAgICAgICAgICBleHBpcnlfZGF0ZTogdGhpcy5jYWNoZWREb3duc2NvcGVkQWNjZXNzVG9rZW4uZXhwaXJ5X2RhdGUsXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuY2FjaGVkRG93bnNjb3BlZEFjY2Vzc1Rva2VuLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHRva2VuX3R5cGU6ICdCZWFyZXInLFxuICAgICAgICAgICAgaWRfdG9rZW46IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXR1cm4gdGhlIGNhY2hlZCBhY2Nlc3MgdG9rZW4uXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZERvd25zY29wZWRBY2Nlc3NUb2tlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBjcmVkZW50aWFscyBhcmUgZXhwaXJlZCBvciBub3QuXG4gICAgICogSWYgdGhlcmUgaXMgbm8gZXhwaXJ5IHRpbWUsIGFzc3VtZXMgdGhlIHRva2VuIGlzIG5vdCBleHBpcmVkIG9yIGV4cGlyaW5nLlxuICAgICAqIEBwYXJhbSBkb3duc2NvcGVkQWNjZXNzVG9rZW4gVGhlIGNyZWRlbnRpYWxzIHRvIGNoZWNrIGZvciBleHBpcmF0aW9uLlxuICAgICAqIEByZXR1cm4gV2hldGhlciB0aGUgY3JlZGVudGlhbHMgYXJlIGV4cGlyZWQgb3Igbm90LlxuICAgICAqL1xuICAgIGlzRXhwaXJlZChkb3duc2NvcGVkQWNjZXNzVG9rZW4pIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBkb3duc2NvcGVkQWNjZXNzVG9rZW4uZXhwaXJ5X2RhdGVcbiAgICAgICAgICAgID8gbm93ID49XG4gICAgICAgICAgICAgICAgZG93bnNjb3BlZEFjY2Vzc1Rva2VuLmV4cGlyeV9kYXRlIC0gdGhpcy5lYWdlclJlZnJlc2hUaHJlc2hvbGRNaWxsaXNcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5Eb3duc2NvcGVkQ2xpZW50ID0gRG93bnNjb3BlZENsaWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvd25zY29wZWRjbGllbnQuanMubWFwIiwgIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhc3NUaHJvdWdoQ2xpZW50ID0gdm9pZCAwO1xuY29uc3QgYXV0aGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aGNsaWVudFwiKTtcbi8qKlxuICogQW4gQXV0aENsaWVudCB3aXRob3V0IGFueSBBdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbi4gVXNlZnVsIGZvcjpcbiAqIC0gQW5vbnltb3VzIGFjY2Vzc1xuICogLSBMb2NhbCBFbXVsYXRvcnNcbiAqIC0gVGVzdGluZyBFbnZpcm9ubWVudHNcbiAqXG4gKi9cbmNsYXNzIFBhc3NUaHJvdWdoQ2xpZW50IGV4dGVuZHMgYXV0aGNsaWVudF8xLkF1dGhDbGllbnQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSByZXF1ZXN0IHdpdGhvdXQgYW55IGF1dGhlbnRpY2F0aW9uIGhlYWRlcnMgb3IgY2hlY2tzLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKlxuICAgICAqIEluIHRlc3RpbmcgZW52aXJvbm1lbnRzIGl0IG1heSBiZSB1c2VmdWwgdG8gY2hhbmdlIHRoZSBwcm92aWRlZFxuICAgICAqIHtAbGluayBBdXRoQ2xpZW50LnRyYW5zcG9ydGVyfSBmb3IgYW55IGRlc2lyZWQgcmVxdWVzdCBvdmVycmlkZXMvaGFuZGxpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEByZXR1cm5zIFRoZSByZXNwb25zZSBvZiB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0KG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0ZXIucmVxdWVzdChvcHRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSByZXF1aXJlZCBtZXRob2Qgb2YgdGhlIGJhc2UgY2xhc3MuXG4gICAgICogQWx3YXlzIHdpbGwgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt9XG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSByZXF1aXJlZCBtZXRob2Qgb2YgdGhlIGJhc2UgY2xhc3MuXG4gICAgICogQWx3YXlzIHdpbGwgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt9XG4gICAgICovXG4gICAgYXN5bmMgZ2V0UmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSGVhZGVycygpO1xuICAgIH1cbn1cbmV4cG9ydHMuUGFzc1Rocm91Z2hDbGllbnQgPSBQYXNzVGhyb3VnaENsaWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhc3N0aHJvdWdoLmpzLm1hcCIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Hb29nbGVBdXRoID0gZXhwb3J0cy5hdXRoID0gZXhwb3J0cy5QYXNzVGhyb3VnaENsaWVudCA9IGV4cG9ydHMuRXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnQgPSBleHBvcnRzLkVYVEVSTkFMX0FDQ09VTlRfQVVUSE9SSVpFRF9VU0VSX1RZUEUgPSBleHBvcnRzLkV4ZWN1dGFibGVFcnJvciA9IGV4cG9ydHMuUGx1Z2dhYmxlQXV0aENsaWVudCA9IGV4cG9ydHMuRG93bnNjb3BlZENsaWVudCA9IGV4cG9ydHMuQmFzZUV4dGVybmFsQWNjb3VudENsaWVudCA9IGV4cG9ydHMuRXh0ZXJuYWxBY2NvdW50Q2xpZW50ID0gZXhwb3J0cy5JZGVudGl0eVBvb2xDbGllbnQgPSBleHBvcnRzLkF3c1JlcXVlc3RTaWduZXIgPSBleHBvcnRzLkF3c0NsaWVudCA9IGV4cG9ydHMuVXNlclJlZnJlc2hDbGllbnQgPSBleHBvcnRzLkxvZ2luVGlja2V0ID0gZXhwb3J0cy5DbGllbnRBdXRoZW50aWNhdGlvbiA9IGV4cG9ydHMuT0F1dGgyQ2xpZW50ID0gZXhwb3J0cy5Db2RlQ2hhbGxlbmdlTWV0aG9kID0gZXhwb3J0cy5JbXBlcnNvbmF0ZWQgPSBleHBvcnRzLkpXVCA9IGV4cG9ydHMuSldUQWNjZXNzID0gZXhwb3J0cy5JZFRva2VuQ2xpZW50ID0gZXhwb3J0cy5JQU1BdXRoID0gZXhwb3J0cy5HQ1BFbnYgPSBleHBvcnRzLkNvbXB1dGUgPSBleHBvcnRzLkRFRkFVTFRfVU5JVkVSU0UgPSBleHBvcnRzLkF1dGhDbGllbnQgPSBleHBvcnRzLmdheGlvcyA9IGV4cG9ydHMuZ2NwTWV0YWRhdGEgPSB2b2lkIDA7XG4vLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmNvbnN0IGdvb2dsZWF1dGhfMSA9IHJlcXVpcmUoXCIuL2F1dGgvZ29vZ2xlYXV0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdvb2dsZUF1dGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdvb2dsZWF1dGhfMS5Hb29nbGVBdXRoOyB9IH0pO1xuLy8gRXhwb3J0IGNvbW1vbiBkZXBzIHRvIGVuc3VyZSB0eXBlcy9pbnN0YW5jZXMgYXJlIHRoZSBleGFjdCBtYXRjaC4gVXNlZnVsXG4vLyBmb3IgY29uc2lzdGVudGx5IGNvbmZpZ3VyaW5nIHRoZSBsaWJyYXJ5IGFjcm9zcyB2ZXJzaW9ucy5cbmV4cG9ydHMuZ2NwTWV0YWRhdGEgPSByZXF1aXJlKFwiZ2NwLW1ldGFkYXRhXCIpO1xuZXhwb3J0cy5nYXhpb3MgPSByZXF1aXJlKFwiZ2F4aW9zXCIpO1xudmFyIGF1dGhjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvYXV0aGNsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkF1dGhDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGF1dGhjbGllbnRfMS5BdXRoQ2xpZW50OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiREVGQVVMVF9VTklWRVJTRVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXV0aGNsaWVudF8xLkRFRkFVTFRfVU5JVkVSU0U7IH0gfSk7XG52YXIgY29tcHV0ZWNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aC9jb21wdXRlY2xpZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29tcHV0ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcHV0ZWNsaWVudF8xLkNvbXB1dGU7IH0gfSk7XG52YXIgZW52RGV0ZWN0XzEgPSByZXF1aXJlKFwiLi9hdXRoL2VudkRldGVjdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdDUEVudlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW52RGV0ZWN0XzEuR0NQRW52OyB9IH0pO1xudmFyIGlhbV8xID0gcmVxdWlyZShcIi4vYXV0aC9pYW1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJQU1BdXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpYW1fMS5JQU1BdXRoOyB9IH0pO1xudmFyIGlkdG9rZW5jbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvaWR0b2tlbmNsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIklkVG9rZW5DbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlkdG9rZW5jbGllbnRfMS5JZFRva2VuQ2xpZW50OyB9IH0pO1xudmFyIGp3dGFjY2Vzc18xID0gcmVxdWlyZShcIi4vYXV0aC9qd3RhY2Nlc3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJKV1RBY2Nlc3NcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGp3dGFjY2Vzc18xLkpXVEFjY2VzczsgfSB9KTtcbnZhciBqd3RjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvand0Y2xpZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSldUXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBqd3RjbGllbnRfMS5KV1Q7IH0gfSk7XG52YXIgaW1wZXJzb25hdGVkXzEgPSByZXF1aXJlKFwiLi9hdXRoL2ltcGVyc29uYXRlZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkltcGVyc29uYXRlZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wZXJzb25hdGVkXzEuSW1wZXJzb25hdGVkOyB9IH0pO1xudmFyIG9hdXRoMmNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aC9vYXV0aDJjbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb2RlQ2hhbGxlbmdlTWV0aG9kXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBvYXV0aDJjbGllbnRfMS5Db2RlQ2hhbGxlbmdlTWV0aG9kOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiT0F1dGgyQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBvYXV0aDJjbGllbnRfMS5PQXV0aDJDbGllbnQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbGllbnRBdXRoZW50aWNhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gb2F1dGgyY2xpZW50XzEuQ2xpZW50QXV0aGVudGljYXRpb247IH0gfSk7XG52YXIgbG9naW50aWNrZXRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvbG9naW50aWNrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMb2dpblRpY2tldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbG9naW50aWNrZXRfMS5Mb2dpblRpY2tldDsgfSB9KTtcbnZhciByZWZyZXNoY2xpZW50XzEgPSByZXF1aXJlKFwiLi9hdXRoL3JlZnJlc2hjbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVc2VyUmVmcmVzaENsaWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVmcmVzaGNsaWVudF8xLlVzZXJSZWZyZXNoQ2xpZW50OyB9IH0pO1xudmFyIGF3c2NsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aC9hd3NjbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBd3NDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGF3c2NsaWVudF8xLkF3c0NsaWVudDsgfSB9KTtcbnZhciBhd3NyZXF1ZXN0c2lnbmVyXzEgPSByZXF1aXJlKFwiLi9hdXRoL2F3c3JlcXVlc3RzaWduZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBd3NSZXF1ZXN0U2lnbmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhd3NyZXF1ZXN0c2lnbmVyXzEuQXdzUmVxdWVzdFNpZ25lcjsgfSB9KTtcbnZhciBpZGVudGl0eXBvb2xjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvaWRlbnRpdHlwb29sY2xpZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSWRlbnRpdHlQb29sQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpZGVudGl0eXBvb2xjbGllbnRfMS5JZGVudGl0eVBvb2xDbGllbnQ7IH0gfSk7XG52YXIgZXh0ZXJuYWxjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvZXh0ZXJuYWxjbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFeHRlcm5hbEFjY291bnRDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4dGVybmFsY2xpZW50XzEuRXh0ZXJuYWxBY2NvdW50Q2xpZW50OyB9IH0pO1xudmFyIGJhc2VleHRlcm5hbGNsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aC9iYXNlZXh0ZXJuYWxjbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlZXh0ZXJuYWxjbGllbnRfMS5CYXNlRXh0ZXJuYWxBY2NvdW50Q2xpZW50OyB9IH0pO1xudmFyIGRvd25zY29wZWRjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvZG93bnNjb3BlZGNsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvd25zY29wZWRDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvd25zY29wZWRjbGllbnRfMS5Eb3duc2NvcGVkQ2xpZW50OyB9IH0pO1xudmFyIHBsdWdnYWJsZV9hdXRoX2NsaWVudF8xID0gcmVxdWlyZShcIi4vYXV0aC9wbHVnZ2FibGUtYXV0aC1jbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQbHVnZ2FibGVBdXRoQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbHVnZ2FibGVfYXV0aF9jbGllbnRfMS5QbHVnZ2FibGVBdXRoQ2xpZW50OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRXhlY3V0YWJsZUVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbHVnZ2FibGVfYXV0aF9jbGllbnRfMS5FeGVjdXRhYmxlRXJyb3I7IH0gfSk7XG52YXIgZXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnRfMSA9IHJlcXVpcmUoXCIuL2F1dGgvZXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFWFRFUk5BTF9BQ0NPVU5UX0FVVEhPUklaRURfVVNFUl9UWVBFXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBleHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckNsaWVudF8xLkVYVEVSTkFMX0FDQ09VTlRfQVVUSE9SSVpFRF9VU0VSX1RZUEU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFeHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckNsaWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXh0ZXJuYWxBY2NvdW50QXV0aG9yaXplZFVzZXJDbGllbnRfMS5FeHRlcm5hbEFjY291bnRBdXRob3JpemVkVXNlckNsaWVudDsgfSB9KTtcbnZhciBwYXNzdGhyb3VnaF8xID0gcmVxdWlyZShcIi4vYXV0aC9wYXNzdGhyb3VnaFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhc3NUaHJvdWdoQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXNzdGhyb3VnaF8xLlBhc3NUaHJvdWdoQ2xpZW50OyB9IH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2d0b2tlbi9nb29nbGVUb2tlblwiKSwgZXhwb3J0cyk7XG5jb25zdCBhdXRoID0gbmV3IGdvb2dsZWF1dGhfMS5Hb29nbGVBdXRoKCk7XG5leHBvcnRzLmF1dGggPSBhdXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLE9BQVM7QUFBQSxNQUNULE9BQVM7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBVztBQUFBLFFBQ1QsS0FBSztBQUFBLFVBQ0gsUUFBVTtBQUFBLFlBQ1IsT0FBUztBQUFBLFlBQ1QsU0FBVztBQUFBLFVBQ2I7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNULE9BQVM7QUFBQSxZQUNULFNBQVc7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVc7QUFBQSxRQUNULE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxRQUNSLGtCQUFrQjtBQUFBLFFBQ2xCLGVBQWU7QUFBQSxRQUNmLFNBQVc7QUFBQSxRQUNYLEtBQU87QUFBQSxRQUNQLFNBQVc7QUFBQSxRQUNYLFNBQVc7QUFBQSxRQUNYLFNBQVc7QUFBQSxRQUNYLG1CQUFtQjtBQUFBLFFBQ25CLGdCQUFnQjtBQUFBLFFBQ2hCLE1BQVE7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLFNBQVc7QUFBQSxRQUNYLE9BQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxZQUFjO0FBQUEsUUFDWixNQUFRO0FBQUEsUUFDUixXQUFhO0FBQUEsUUFDYixLQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFXO0FBQUEsUUFDVCxNQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsUUFBVTtBQUFB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LFlBQVksTUFBTSxLQUFLLFdBQVk7QUFBRSxhQUFPLHdCQUF3QjtBQUFBLElBQWlCLEVBQUUsQ0FBQztBQUM1SSxRQUFJLHdDQUF3QztBQUM1QyxXQUFPLGVBQWUsU0FBUyx5Q0FBeUMsRUFBRSxZQUFZLE1BQU0sS0FBSyxXQUFZO0FBQUUsYUFBTyxzQ0FBc0M7QUFBQSxJQUF1QyxFQUFFLENBQUM7QUFDdE0sV0FBTyxlQUFlLFNBQVMsdUNBQXVDLEVBQUUsWUFBWSxNQUFNLEtBQUssV0FBWTtBQUFFLGFBQU8sc0NBQXNDO0FBQUEsSUFBcUMsRUFBRSxDQUFDO0FBQ2xNLFFBQUksZ0JBQWdCO0FBQ3BCLFdBQU8sZUFBZSxTQUFTLHFCQUFxQixFQUFFLFlBQVksTUFBTSxLQUFLLFdBQVk7QUFBRSxhQUFPLGNBQWM7QUFBQSxJQUFtQixFQUFFLENBQUM7QUFDdEksaUJBQWEsdUJBQWlDLE9BQU87QUFDckQsUUFBTSxPQUFPLElBQUksYUFBYSxXQUFXO0FBQ3pDLFlBQVEsT0FBTztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInByb2Nlc3MiLCAiTG9nU2V2ZXJpdHkiLCAibmFtZXNwYWNlIiwgIl9hIiwgIm1ldGFkYXRhQWNjZXNzb3IiLCAicmVxdWlyZV9jcnlwdG8iLCAicmVxdWlyZV9jcnlwdG8iLCAiZXhwb3J0cyIsICJyZXF1aXJlX3V0aWwiLCAicmVxdWlyZV9wYWNrYWdlIiwgInJlcXVpcmVfc2hhcmVkIiwgIkNvZGVDaGFsbGVuZ2VNZXRob2QiLCAiQ2VydGlmaWNhdGVGb3JtYXQiLCAiQ2xpZW50QXV0aGVudGljYXRpb24iLCAiaGVhZGVycyIsICJHQ1BFbnYiLCAiRXh0ZW5zaW9uRmlsZXMiLCAibm93IiwgInJlcXVpcmVfc3JjIiwgImV4cG9ydHMiXQp9Cg==
