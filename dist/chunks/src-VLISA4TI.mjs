#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  FormData,
  blobFrom,
  blobFromSync,
  fetch_blob_default,
  fileFrom,
  fileFromSync,
  file_default,
  formDataToBlob,
  init_esm_min,
  init_fetch_blob,
  init_from
} from "./chunk-MJUVHYJH.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/data-uri-to-buffer@4.0.1/node_modules/data-uri-to-buffer/dist/index.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else if (meta[i]) {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var dist_default;
var init_dist = __esm({
  "node_modules/.pnpm/data-uri-to-buffer@4.0.1/node_modules/data-uri-to-buffer/dist/index.js"() {
    dist_default = dataUriToBuffer;
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/errors/base.js
var FetchBaseError;
var init_base = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/errors/base.js"() {
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/errors/fetch-error.js
var FetchError;
var init_fetch_error = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/errors/fetch-error.js"() {
    init_base();
    FetchError = class extends FetchBaseError {
      /**
       * @param  {string} message -      Error message for human
       * @param  {string} [type] -        Error type for machine
       * @param  {SystemError} [systemError] - For Node.js system error
       */
      constructor(message, type, systemError) {
        super(message, type);
        if (systemError) {
          this.code = this.errno = systemError.code;
          this.erroredSysCall = systemError.syscall;
        }
      }
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/is.js
var NAME, isURLSearchParameters, isBlob, isAbortSignal, isDomainOrSubdomain, isSameProtocol;
var init_is = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/is.js"() {
    NAME = Symbol.toStringTag;
    isURLSearchParameters = (object) => {
      return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
    };
    isBlob = (object) => {
      return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
    };
    isAbortSignal = (object) => {
      return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
    };
    isDomainOrSubdomain = (destination, original) => {
      const orig = new URL(original).hostname;
      const dest = new URL(destination).hostname;
      return orig === dest || orig.endsWith(`.${dest}`);
    };
    isSameProtocol = (destination, original) => {
      const orig = new URL(original).protocol;
      const dest = new URL(destination).protocol;
      return orig === dest;
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/body.js
import Stream, { PassThrough } from "node:stream";
import { types, deprecate, promisify } from "node:util";
import { Buffer as Buffer2 } from "node:buffer";
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body } = data;
  if (body === null) {
    return Buffer2.alloc(0);
  }
  if (!(body instanceof Stream)) {
    return Buffer2.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error);
        throw error;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error) {
    const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, "system", error);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer2.from(accum.join(""));
      }
      return Buffer2.concat(accum, accumBytes);
    } catch (error) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, "system", error);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var pipeline, INTERNALS, Body, clone, getNonSpecFormDataBoundary, extractContentType, getTotalBytes, writeToStream;
var init_body = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/body.js"() {
    init_fetch_blob();
    init_esm_min();
    init_fetch_error();
    init_base();
    init_is();
    pipeline = promisify(Stream.pipeline);
    INTERNALS = /* @__PURE__ */ Symbol("Body internals");
    Body = class {
      constructor(body, {
        size = 0
      } = {}) {
        let boundary = null;
        if (body === null) {
          body = null;
        } else if (isURLSearchParameters(body)) {
          body = Buffer2.from(body.toString());
        } else if (isBlob(body)) {
        } else if (Buffer2.isBuffer(body)) {
        } else if (types.isAnyArrayBuffer(body)) {
          body = Buffer2.from(body);
        } else if (ArrayBuffer.isView(body)) {
          body = Buffer2.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof Stream) {
        } else if (body instanceof FormData) {
          body = formDataToBlob(body);
          boundary = body.type.split("=")[1];
        } else {
          body = Buffer2.from(String(body));
        }
        let stream = body;
        if (Buffer2.isBuffer(body)) {
          stream = Stream.Readable.from(body);
        } else if (isBlob(body)) {
          stream = Stream.Readable.from(body.stream());
        }
        this[INTERNALS] = {
          body,
          stream,
          boundary,
          disturbed: false,
          error: null
        };
        this.size = size;
        if (body instanceof Stream) {
          body.on("error", (error_) => {
            const error = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
            this[INTERNALS].error = error;
          });
        }
      }
      get body() {
        return this[INTERNALS].stream;
      }
      get bodyUsed() {
        return this[INTERNALS].disturbed;
      }
      /**
       * Decode response as ArrayBuffer
       *
       * @return  Promise
       */
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          const formData = new FormData();
          const parameters = new URLSearchParams(await this.text());
          for (const [name, value] of parameters) {
            formData.append(name, value);
          }
          return formData;
        }
        const { toFormData } = await import("./multipart-parser-TSYB5VJC.mjs");
        return toFormData(this.body, ct);
      }
      /**
       * Return raw response as Blob
       *
       * @return Promise
       */
      async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS].body && this[INTERNALS].body.type || "";
        const buf = await this.arrayBuffer();
        return new fetch_blob_default([buf], {
          type: ct
        });
      }
      /**
       * Decode response as json
       *
       * @return  Promise
       */
      async json() {
        const text = await this.text();
        return JSON.parse(text);
      }
      /**
       * Decode response as text
       *
       * @return  Promise
       */
      async text() {
        const buffer = await consumeBody(this);
        return new TextDecoder().decode(buffer);
      }
      /**
       * Decode response as buffer (non-spec api)
       *
       * @return  Promise
       */
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = deprecate(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true },
      data: { get: deprecate(
        () => {
        },
        "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
        "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
      ) }
    });
    clone = (instance, highWaterMark) => {
      let p1;
      let p2;
      let { body } = instance[INTERNALS];
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream && typeof body.getBoundary !== "function") {
        p1 = new PassThrough({ highWaterMark });
        p2 = new PassThrough({ highWaterMark });
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS].stream = p1;
        body = p2;
      }
      return body;
    };
    getNonSpecFormDataBoundary = deprecate(
      (body) => body.getBoundary(),
      "form-data doesn't follow the spec and requires special treatment. Use alternative package",
      "https://github.com/node-fetch/node-fetch/issues/1167"
    );
    extractContentType = (body, request) => {
      if (body === null) {
        return null;
      }
      if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      }
      if (isURLSearchParameters(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      }
      if (isBlob(body)) {
        return body.type || null;
      }
      if (Buffer2.isBuffer(body) || types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
      }
      if (body instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
      }
      if (body && typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
      }
      if (body instanceof Stream) {
        return null;
      }
      return "text/plain;charset=UTF-8";
    };
    getTotalBytes = (request) => {
      const { body } = request[INTERNALS];
      if (body === null) {
        return 0;
      }
      if (isBlob(body)) {
        return body.size;
      }
      if (Buffer2.isBuffer(body)) {
        return body.length;
      }
      if (body && typeof body.getLengthSync === "function") {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
      }
      return null;
    };
    writeToStream = async (dest, { body }) => {
      if (body === null) {
        dest.end();
      } else {
        await pipeline(body, dest);
      }
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/headers.js
import { types as types2 } from "node:util";
import http from "node:http";
function fromRawHeaders(headers = []) {
  return new Headers(
    headers.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []).filter(([name, value]) => {
      try {
        validateHeaderName(name);
        validateHeaderValue(name, String(value));
        return true;
      } catch {
        return false;
      }
    })
  );
}
var validateHeaderName, validateHeaderValue, Headers;
var init_headers = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/headers.js"() {
    validateHeaderName = typeof http.validateHeaderName === "function" ? http.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
        throw error;
      }
    };
    validateHeaderValue = typeof http.validateHeaderValue === "function" ? http.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error, "code", { value: "ERR_INVALID_CHAR" });
        throw error;
      }
    };
    Headers = class _Headers extends URLSearchParams {
      /**
       * Headers class
       *
       * @constructor
       * @param {HeadersInit} [init] - Response headers
       */
      constructor(init) {
        let result = [];
        if (init instanceof _Headers) {
          const raw = init.raw();
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]));
          }
        } else if (init == null) {
        } else if (typeof init === "object" && !types2.isBoxedPrimitive(init)) {
          const method = init[Symbol.iterator];
          if (method == null) {
            result.push(...Object.entries(init));
          } else {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            result = [...init].map((pair) => {
              if (typeof pair !== "object" || types2.isBoxedPrimitive(pair)) {
                throw new TypeError("Each header pair must be an iterable object");
              }
              return [...pair];
            }).map((pair) => {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              return [...pair];
            });
          }
        } else {
          throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        result = result.length > 0 ? result.map(([name, value]) => {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return [String(name).toLowerCase(), String(value)];
        }) : void 0;
        super(result);
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => {
                  validateHeaderName(name);
                  validateHeaderValue(name, String(value));
                  return URLSearchParams.prototype[p].call(
                    target,
                    String(name).toLowerCase(),
                    String(value)
                  );
                };
              case "delete":
              case "has":
              case "getAll":
                return (name) => {
                  validateHeaderName(name);
                  return URLSearchParams.prototype[p].call(
                    target,
                    String(name).toLowerCase()
                  );
                };
              case "keys":
                return () => {
                  target.sort();
                  return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                };
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
          return null;
        }
        let value = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase();
        }
        return value;
      }
      forEach(callback, thisArg = void 0) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
        }
      }
      *values() {
        for (const name of this.keys()) {
          yield this.get(name);
        }
      }
      /**
       * @type {() => IterableIterator<[string, string]>}
       */
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      /**
       * Node-fetch non-spec method
       * returning all headers and their values as array
       * @returns {Record<string, string[]>}
       */
      raw() {
        return [...this.keys()].reduce((result, key) => {
          result[key] = this.getAll(key);
          return result;
        }, {});
      }
      /**
       * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
       */
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key) => {
          const values = this.getAll(key);
          if (key === "host") {
            result[key] = values[0];
          } else {
            result[key] = values.length > 1 ? values : values[0];
          }
          return result;
        }, {});
      }
    };
    Object.defineProperties(
      Headers.prototype,
      ["get", "entries", "forEach", "values"].reduce((result, property) => {
        result[property] = { enumerable: true };
        return result;
      }, {})
    );
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/is-redirect.js
var redirectStatus, isRedirect;
var init_is_redirect = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/is-redirect.js"() {
    redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    isRedirect = (code) => {
      return redirectStatus.has(code);
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/response.js
var INTERNALS2, Response;
var init_response = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/response.js"() {
    init_headers();
    init_body();
    init_is_redirect();
    INTERNALS2 = /* @__PURE__ */ Symbol("Response internals");
    Response = class _Response extends Body {
      constructor(body = null, options = {}) {
        super(body, options);
        const status = options.status != null ? options.status : 200;
        const headers = new Headers(options.headers);
        if (body !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body, this);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS2] = {
          type: "default",
          url: options.url,
          status,
          statusText: options.statusText || "",
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        };
      }
      get type() {
        return this[INTERNALS2].type;
      }
      get url() {
        return this[INTERNALS2].url || "";
      }
      get status() {
        return this[INTERNALS2].status;
      }
      /**
       * Convenience property representing if the request ended normally
       */
      get ok() {
        return this[INTERNALS2].status >= 200 && this[INTERNALS2].status < 300;
      }
      get redirected() {
        return this[INTERNALS2].counter > 0;
      }
      get statusText() {
        return this[INTERNALS2].statusText;
      }
      get headers() {
        return this[INTERNALS2].headers;
      }
      get highWaterMark() {
        return this[INTERNALS2].highWaterMark;
      }
      /**
       * Clone this response
       *
       * @return  Response
       */
      clone() {
        return new _Response(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size,
          highWaterMark: this.highWaterMark
        });
      }
      /**
       * @param {string} url    The URL that the new response is to originate from.
       * @param {number} status An optional status code for the response (e.g., 302.)
       * @returns {Response}    A Response object.
       */
      static redirect(url, status = 302) {
        if (!isRedirect(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new _Response(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        });
      }
      static error() {
        const response = new _Response(null, { status: 0, statusText: "" });
        response[INTERNALS2].type = "error";
        return response;
      }
      static json(data = void 0, init = {}) {
        const body = JSON.stringify(data);
        if (body === void 0) {
          throw new TypeError("data is not JSON serializable");
        }
        const headers = new Headers(init && init.headers);
        if (!headers.has("content-type")) {
          headers.set("content-type", "application/json");
        }
        return new _Response(body, {
          ...init,
          headers
        });
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    Object.defineProperties(Response.prototype, {
      type: { enumerable: true },
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/get-search.js
var getSearch;
var init_get_search = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/get-search.js"() {
    getSearch = (parsedURL) => {
      if (parsedURL.search) {
        return parsedURL.search;
      }
      const lastOffset = parsedURL.href.length - 1;
      const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
      return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/referrer.js
import { isIP } from "node:net";
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = isIP(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (url.host === "localhost" || url.host.endsWith(".localhost")) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}
var ReferrerPolicy, DEFAULT_REFERRER_POLICY;
var init_referrer = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/utils/referrer.js"() {
    ReferrerPolicy = /* @__PURE__ */ new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
    DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/request.js
import { format as formatUrl } from "node:url";
import { deprecate as deprecate2 } from "node:util";
var INTERNALS3, isRequest, doBadDataWarn, Request, getNodeRequestOptions;
var init_request = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/request.js"() {
    init_headers();
    init_body();
    init_is();
    init_get_search();
    init_referrer();
    INTERNALS3 = /* @__PURE__ */ Symbol("Request internals");
    isRequest = (object) => {
      return typeof object === "object" && typeof object[INTERNALS3] === "object";
    };
    doBadDataWarn = deprecate2(
      () => {
      },
      ".data is not a valid RequestInit property, use .body instead",
      "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
    );
    Request = class _Request extends Body {
      constructor(input, init = {}) {
        let parsedURL;
        if (isRequest(input)) {
          parsedURL = new URL(input.url);
        } else {
          parsedURL = new URL(input);
          input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
          throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
        }
        let method = init.method || input.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(method)) {
          method = method.toUpperCase();
        }
        if (!isRequest(init) && "data" in init) {
          doBadDataWarn();
        }
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody, this);
          if (contentType) {
            headers.set("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init) {
          signal = init.signal;
        }
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        let referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === "") {
          referrer = "no-referrer";
        } else if (referrer) {
          const parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
          referrer = void 0;
        }
        this[INTERNALS3] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        };
        this.follow = init.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init.follow;
        this.compress = init.compress === void 0 ? input.compress === void 0 ? true : input.compress : init.compress;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
        this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
        this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
      }
      /** @returns {string} */
      get method() {
        return this[INTERNALS3].method;
      }
      /** @returns {string} */
      get url() {
        return formatUrl(this[INTERNALS3].parsedURL);
      }
      /** @returns {Headers} */
      get headers() {
        return this[INTERNALS3].headers;
      }
      get redirect() {
        return this[INTERNALS3].redirect;
      }
      /** @returns {AbortSignal} */
      get signal() {
        return this[INTERNALS3].signal;
      }
      // https://fetch.spec.whatwg.org/#dom-request-referrer
      get referrer() {
        if (this[INTERNALS3].referrer === "no-referrer") {
          return "";
        }
        if (this[INTERNALS3].referrer === "client") {
          return "about:client";
        }
        if (this[INTERNALS3].referrer) {
          return this[INTERNALS3].referrer.toString();
        }
        return void 0;
      }
      get referrerPolicy() {
        return this[INTERNALS3].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS3].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      /**
       * Clone this request
       *
       * @return  Request
       */
      clone() {
        return new _Request(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
      referrer: { enumerable: true },
      referrerPolicy: { enumerable: true }
    });
    getNodeRequestOptions = (request) => {
      const { parsedURL } = request[INTERNALS3];
      const headers = new Headers(request[INTERNALS3].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      let contentLengthValue = null;
      if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body !== null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
      }
      if (request.referrer && request.referrer !== "no-referrer") {
        request[INTERNALS3].referrer = determineRequestsReferrer(request);
      } else {
        request[INTERNALS3].referrer = "no-referrer";
      }
      if (request[INTERNALS3].referrer instanceof URL) {
        headers.set("Referer", request.referrer);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip, deflate, br");
      }
      let { agent } = request;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      const search = getSearch(parsedURL);
      const options = {
        // Overwrite search to retain trailing ? (issue #776)
        path: parsedURL.pathname + search,
        // The following options are not expressed in the URL
        method: request.method,
        headers: headers[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      };
      return {
        /** @type {URL} */
        parsedURL,
        options
      };
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/errors/abort-error.js
var AbortError;
var init_abort_error = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/errors/abort-error.js"() {
    init_base();
    AbortError = class extends FetchBaseError {
      constructor(message, type = "aborted") {
        super(message, type);
      }
    };
  }
});

// node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/index.js
import http2 from "node:http";
import https from "node:https";
import zlib from "node:zlib";
import Stream2, { PassThrough as PassThrough2, pipeline as pump } from "node:stream";
import { Buffer as Buffer3 } from "node:buffer";
async function fetch(url, options_) {
  return new Promise((resolve, reject) => {
    const request = new Request(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dist_default(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? https : http2).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error = new AbortError("The operation was aborted.");
      reject(error);
      if (request.body && request.body instanceof Stream2.Readable) {
        request.body.destroy(error);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL.toString(), options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, "system", error));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error) => {
      if (response && response.body) {
        response.body.destroy(error);
      }
    });
    if (process.version < "v14") {
      request_.on("socket", (s) => {
        let endedWithEventsCount;
        s.prependListener("end", () => {
          endedWithEventsCount = s._eventsCount;
        });
        s.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s._eventsCount && !hadError) {
            const error = new Error("Premature close");
            error.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        let locationURL = null;
        try {
          locationURL = location === null ? null : new URL(location, request.url);
        } catch {
          if (request.redirect !== "manual") {
            reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
            finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
              for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                requestOptions.headers.delete(name);
              }
            }
            if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream2.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve(fetch(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = pump(response_, new PassThrough2(), (error) => {
        if (error) {
          reject(error);
        }
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: zlib.Z_SYNC_FLUSH,
        finishFlush: zlib.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = pump(body, zlib.createGunzip(zlibOptions), (error) => {
          if (error) {
            reject(error);
          }
        });
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = pump(response_, new PassThrough2(), (error) => {
          if (error) {
            reject(error);
          }
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = pump(body, zlib.createInflate(), (error) => {
              if (error) {
                reject(error);
              }
            });
          } else {
            body = pump(body, zlib.createInflateRaw(), (error) => {
              if (error) {
                reject(error);
              }
            });
          }
          response = new Response(body, responseOptions);
          resolve(response);
        });
        raw.once("end", () => {
          if (!response) {
            response = new Response(body, responseOptions);
            resolve(response);
          }
        });
        return;
      }
      if (codings === "br") {
        body = pump(body, zlib.createBrotliDecompress(), (error) => {
          if (error) {
            reject(error);
          }
        });
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve(response);
    });
    writeToStream(request_, request).catch(reject);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = Buffer3.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error = new Error("Premature close");
        error.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error);
      }
    };
    const onData = (buf) => {
      properLastChunkReceived = Buffer3.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = Buffer3.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && Buffer3.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    };
    socket.prependListener("close", onSocketClose);
    socket.on("data", onData);
    request.on("close", () => {
      socket.removeListener("close", onSocketClose);
      socket.removeListener("data", onData);
    });
  });
}
var supportedSchemas;
var init_src = __esm({
  "node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/index.js"() {
    init_dist();
    init_body();
    init_response();
    init_headers();
    init_request();
    init_fetch_error();
    init_abort_error();
    init_is_redirect();
    init_esm_min();
    init_is();
    init_referrer();
    init_from();
    supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
  }
});
init_src();
export {
  AbortError,
  fetch_blob_default as Blob,
  FetchError,
  file_default as File,
  FormData,
  Headers,
  Request,
  Response,
  blobFrom,
  blobFromSync,
  fetch as default,
  fileFrom,
  fileFromSync,
  isRedirect
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RhdGEtdXJpLXRvLWJ1ZmZlckA0LjAuMS9ub2RlX21vZHVsZXMvZGF0YS11cmktdG8tYnVmZmVyL3NyYy9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjMuMi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvZXJyb3JzL2Jhc2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4zLjIvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2Vycm9ycy9mZXRjaC1lcnJvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjMuMi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvaXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4zLjIvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2JvZHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4zLjIvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2hlYWRlcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4zLjIvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3V0aWxzL2lzLXJlZGlyZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9ub2RlLWZldGNoQDMuMy4yL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9yZXNwb25zZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjMuMi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvZ2V0LXNlYXJjaC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjMuMi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvcmVmZXJyZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4zLjIvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3JlcXVlc3QuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4zLjIvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2Vycm9ycy9hYm9ydC1lcnJvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjMuMi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBpbnRlcmZhY2UgTWltZUJ1ZmZlciBleHRlbmRzIEJ1ZmZlciB7XG5cdHR5cGU6IHN0cmluZztcblx0dHlwZUZ1bGw6IHN0cmluZztcblx0Y2hhcnNldDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBgQnVmZmVyYCBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBkYXRhIFVSSSBgdXJpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpIERhdGEgVVJJIHRvIHR1cm4gaW50byBhIEJ1ZmZlciBpbnN0YW5jZVxuICogQHJldHVybnMge0J1ZmZlcn0gQnVmZmVyIGluc3RhbmNlIGZyb20gRGF0YSBVUklcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRhVXJpVG9CdWZmZXIodXJpOiBzdHJpbmcpOiBNaW1lQnVmZmVyIHtcblx0aWYgKCEvXmRhdGE6L2kudGVzdCh1cmkpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdCdgdXJpYCBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYSBEYXRhIFVSSSAobXVzdCBiZWdpbiB3aXRoIFwiZGF0YTpcIiknXG5cdFx0KTtcblx0fVxuXG5cdC8vIHN0cmlwIG5ld2xpbmVzXG5cdHVyaSA9IHVyaS5yZXBsYWNlKC9cXHI/XFxuL2csICcnKTtcblxuXHQvLyBzcGxpdCB0aGUgVVJJIHVwIGludG8gdGhlIFwibWV0YWRhdGFcIiBhbmQgdGhlIFwiZGF0YVwiIHBvcnRpb25zXG5cdGNvbnN0IGZpcnN0Q29tbWEgPSB1cmkuaW5kZXhPZignLCcpO1xuXHRpZiAoZmlyc3RDb21tYSA9PT0gLTEgfHwgZmlyc3RDb21tYSA8PSA0KSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbWFsZm9ybWVkIGRhdGE6IFVSSScpO1xuXHR9XG5cblx0Ly8gcmVtb3ZlIHRoZSBcImRhdGE6XCIgc2NoZW1lIGFuZCBwYXJzZSB0aGUgbWV0YWRhdGFcblx0Y29uc3QgbWV0YSA9IHVyaS5zdWJzdHJpbmcoNSwgZmlyc3RDb21tYSkuc3BsaXQoJzsnKTtcblxuXHRsZXQgY2hhcnNldCA9ICcnO1xuXHRsZXQgYmFzZTY0ID0gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBtZXRhWzBdIHx8ICd0ZXh0L3BsYWluJztcblx0bGV0IHR5cGVGdWxsID0gdHlwZTtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBtZXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKG1ldGFbaV0gPT09ICdiYXNlNjQnKSB7XG5cdFx0XHRiYXNlNjQgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZihtZXRhW2ldKSB7XG5cdFx0XHR0eXBlRnVsbCArPSBgOyR7ICBtZXRhW2ldfWA7XG5cdFx0XHRpZiAobWV0YVtpXS5pbmRleE9mKCdjaGFyc2V0PScpID09PSAwKSB7XG5cdFx0XHRcdGNoYXJzZXQgPSBtZXRhW2ldLnN1YnN0cmluZyg4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gZGVmYXVsdHMgdG8gVVMtQVNDSUkgb25seSBpZiB0eXBlIGlzIG5vdCBwcm92aWRlZFxuXHRpZiAoIW1ldGFbMF0gJiYgIWNoYXJzZXQubGVuZ3RoKSB7XG5cdFx0dHlwZUZ1bGwgKz0gJztjaGFyc2V0PVVTLUFTQ0lJJztcblx0XHRjaGFyc2V0ID0gJ1VTLUFTQ0lJJztcblx0fVxuXG5cdC8vIGdldCB0aGUgZW5jb2RlZCBkYXRhIHBvcnRpb24gYW5kIGRlY29kZSBVUkktZW5jb2RlZCBjaGFyc1xuXHRjb25zdCBlbmNvZGluZyA9IGJhc2U2NCA/ICdiYXNlNjQnIDogJ2FzY2lpJztcblx0Y29uc3QgZGF0YSA9IHVuZXNjYXBlKHVyaS5zdWJzdHJpbmcoZmlyc3RDb21tYSArIDEpKTtcblx0Y29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oZGF0YSwgZW5jb2RpbmcpIGFzIE1pbWVCdWZmZXI7XG5cblx0Ly8gc2V0IGAudHlwZWAgYW5kIGAudHlwZUZ1bGxgIHByb3BlcnRpZXMgdG8gTUlNRSB0eXBlXG5cdGJ1ZmZlci50eXBlID0gdHlwZTtcblx0YnVmZmVyLnR5cGVGdWxsID0gdHlwZUZ1bGw7XG5cblx0Ly8gc2V0IHRoZSBgLmNoYXJzZXRgIHByb3BlcnR5XG5cdGJ1ZmZlci5jaGFyc2V0ID0gY2hhcnNldDtcblxuXHRyZXR1cm4gYnVmZmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhVXJpVG9CdWZmZXI7XG4iLCAiZXhwb3J0IGNsYXNzIEZldGNoQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCB0eXBlKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0Ly8gSGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuXHRcdEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0fVxufVxuIiwgIlxuaW1wb3J0IHtGZXRjaEJhc2VFcnJvcn0gZnJvbSAnLi9iYXNlLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7eyBhZGRyZXNzPzogc3RyaW5nLCBjb2RlOiBzdHJpbmcsIGRlc3Q/OiBzdHJpbmcsIGVycm5vOiBudW1iZXIsIGluZm8/OiBvYmplY3QsIG1lc3NhZ2U6IHN0cmluZywgcGF0aD86IHN0cmluZywgcG9ydD86IG51bWJlciwgc3lzY2FsbDogc3RyaW5nfX0gU3lzdGVtRXJyb3JcbiovXG5cbi8qKlxuICogRmV0Y2hFcnJvciBpbnRlcmZhY2UgZm9yIG9wZXJhdGlvbmFsIGVycm9yc1xuICovXG5leHBvcnQgY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEZldGNoQmFzZUVycm9yIHtcblx0LyoqXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gbWVzc2FnZSAtICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cblx0ICogQHBhcmFtICB7c3RyaW5nfSBbdHlwZV0gLSAgICAgICAgRXJyb3IgdHlwZSBmb3IgbWFjaGluZVxuXHQgKiBAcGFyYW0gIHtTeXN0ZW1FcnJvcn0gW3N5c3RlbUVycm9yXSAtIEZvciBOb2RlLmpzIHN5c3RlbSBlcnJvclxuXHQgKi9cblx0Y29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSwgc3lzdGVtRXJyb3IpIHtcblx0XHRzdXBlcihtZXNzYWdlLCB0eXBlKTtcblx0XHQvLyBXaGVuIGVyci50eXBlIGlzIGBzeXN0ZW1gLCBlcnIuZXJyb3JlZFN5c0NhbGwgY29udGFpbnMgc3lzdGVtIGVycm9yIGFuZCBlcnIuY29kZSBjb250YWlucyBzeXN0ZW0gZXJyb3IgY29kZVxuXHRcdGlmIChzeXN0ZW1FcnJvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuXHRcdFx0dGhpcy5jb2RlID0gdGhpcy5lcnJubyA9IHN5c3RlbUVycm9yLmNvZGU7XG5cdFx0XHR0aGlzLmVycm9yZWRTeXNDYWxsID0gc3lzdGVtRXJyb3Iuc3lzY2FsbDtcblx0XHR9XG5cdH1cbn1cbiIsICIvKipcbiAqIElzLmpzXG4gKlxuICogT2JqZWN0IHR5cGUgY2hlY2tzLlxuICovXG5cbmNvbnN0IE5BTUUgPSBTeW1ib2wudG9TdHJpbmdUYWc7XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKiByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gvaXNzdWVzLzI5NiNpc3N1ZWNvbW1lbnQtMzA3NTk4MTQzXG4gKiBAcGFyYW0geyp9IG9iamVjdCAtIE9iamVjdCB0byBjaGVjayBmb3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc1VSTFNlYXJjaFBhcmFtZXRlcnMgPSBvYmplY3QgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIG9iamVjdC5hcHBlbmQgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmRlbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuZ2V0ID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5nZXRBbGwgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmhhcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3Quc2V0ID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5zb3J0ID09PSAnZnVuY3Rpb24nICYmXG5cdFx0b2JqZWN0W05BTUVdID09PSAnVVJMU2VhcmNoUGFyYW1zJ1xuXHQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqZWN0YCBpcyBhIFczQyBgQmxvYmAgb2JqZWN0ICh3aGljaCBgRmlsZWAgaW5oZXJpdHMgZnJvbSlcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IC0gT2JqZWN0IHRvIGNoZWNrIGZvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQmxvYiA9IG9iamVjdCA9PiB7XG5cdHJldHVybiAoXG5cdFx0b2JqZWN0ICYmXG5cdFx0dHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC50eXBlID09PSAnc3RyaW5nJyAmJlxuXHRcdHR5cGVvZiBvYmplY3Quc3RyZWFtID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9iamVjdFtOQU1FXSlcblx0KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gaW5zdGFuY2Ugb2YgQWJvcnRTaWduYWwuXG4gKiBAcGFyYW0geyp9IG9iamVjdCAtIE9iamVjdCB0byBjaGVjayBmb3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc0Fib3J0U2lnbmFsID0gb2JqZWN0ID0+IHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiAoXG5cdFx0XHRvYmplY3RbTkFNRV0gPT09ICdBYm9ydFNpZ25hbCcgfHxcblx0XHRcdG9iamVjdFtOQU1FXSA9PT0gJ0V2ZW50VGFyZ2V0J1xuXHRcdClcblx0KTtcbn07XG5cbi8qKlxuICogaXNEb21haW5PclN1YmRvbWFpbiByZXBvcnRzIHdoZXRoZXIgc3ViIGlzIGEgc3ViZG9tYWluIChvciBleGFjdCBtYXRjaCkgb2ZcbiAqIHRoZSBwYXJlbnQgZG9tYWluLlxuICpcbiAqIEJvdGggZG9tYWlucyBtdXN0IGFscmVhZHkgYmUgaW4gY2Fub25pY2FsIGZvcm0uXG4gKiBAcGFyYW0ge3N0cmluZ3xVUkx9IG9yaWdpbmFsXG4gKiBAcGFyYW0ge3N0cmluZ3xVUkx9IGRlc3RpbmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpc0RvbWFpbk9yU3ViZG9tYWluID0gKGRlc3RpbmF0aW9uLCBvcmlnaW5hbCkgPT4ge1xuXHRjb25zdCBvcmlnID0gbmV3IFVSTChvcmlnaW5hbCkuaG9zdG5hbWU7XG5cdGNvbnN0IGRlc3QgPSBuZXcgVVJMKGRlc3RpbmF0aW9uKS5ob3N0bmFtZTtcblxuXHRyZXR1cm4gb3JpZyA9PT0gZGVzdCB8fCBvcmlnLmVuZHNXaXRoKGAuJHtkZXN0fWApO1xufTtcblxuLyoqXG4gKiBpc1NhbWVQcm90b2NvbCByZXBvcnRzIHdoZXRoZXIgdGhlIHR3byBwcm92aWRlZCBVUkxzIHVzZSB0aGUgc2FtZSBwcm90b2NvbC5cbiAqXG4gKiBCb3RoIGRvbWFpbnMgbXVzdCBhbHJlYWR5IGJlIGluIGNhbm9uaWNhbCBmb3JtLlxuICogQHBhcmFtIHtzdHJpbmd8VVJMfSBvcmlnaW5hbFxuICogQHBhcmFtIHtzdHJpbmd8VVJMfSBkZXN0aW5hdGlvblxuICovXG5leHBvcnQgY29uc3QgaXNTYW1lUHJvdG9jb2wgPSAoZGVzdGluYXRpb24sIG9yaWdpbmFsKSA9PiB7XG5cdGNvbnN0IG9yaWcgPSBuZXcgVVJMKG9yaWdpbmFsKS5wcm90b2NvbDtcblx0Y29uc3QgZGVzdCA9IG5ldyBVUkwoZGVzdGluYXRpb24pLnByb3RvY29sO1xuXG5cdHJldHVybiBvcmlnID09PSBkZXN0O1xufTtcbiIsICJcbi8qKlxuICogQm9keS5qc1xuICpcbiAqIEJvZHkgaW50ZXJmYWNlIHByb3ZpZGVzIGNvbW1vbiBtZXRob2RzIGZvciBSZXF1ZXN0IGFuZCBSZXNwb25zZVxuICovXG5cbmltcG9ydCBTdHJlYW0sIHtQYXNzVGhyb3VnaH0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHt0eXBlcywgZGVwcmVjYXRlLCBwcm9taXNpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge0J1ZmZlcn0gZnJvbSAnbm9kZTpidWZmZXInO1xuXG5pbXBvcnQgQmxvYiBmcm9tICdmZXRjaC1ibG9iJztcbmltcG9ydCB7Rm9ybURhdGEsIGZvcm1EYXRhVG9CbG9ifSBmcm9tICdmb3JtZGF0YS1wb2x5ZmlsbC9lc20ubWluLmpzJztcblxuaW1wb3J0IHtGZXRjaEVycm9yfSBmcm9tICcuL2Vycm9ycy9mZXRjaC1lcnJvci5qcyc7XG5pbXBvcnQge0ZldGNoQmFzZUVycm9yfSBmcm9tICcuL2Vycm9ycy9iYXNlLmpzJztcbmltcG9ydCB7aXNCbG9iLCBpc1VSTFNlYXJjaFBhcmFtZXRlcnN9IGZyb20gJy4vdXRpbHMvaXMuanMnO1xuXG5jb25zdCBwaXBlbGluZSA9IHByb21pc2lmeShTdHJlYW0ucGlwZWxpbmUpO1xuY29uc3QgSU5URVJOQUxTID0gU3ltYm9sKCdCb2R5IGludGVybmFscycpO1xuXG4vKipcbiAqIEJvZHkgbWl4aW5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNib2R5XG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IHtcblx0Y29uc3RydWN0b3IoYm9keSwge1xuXHRcdHNpemUgPSAwXG5cdH0gPSB7fSkge1xuXHRcdGxldCBib3VuZGFyeSA9IG51bGw7XG5cblx0XHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gQm9keSBpcyB1bmRlZmluZWQgb3IgbnVsbFxuXHRcdFx0Ym9keSA9IG51bGw7XG5cdFx0fSBlbHNlIGlmIChpc1VSTFNlYXJjaFBhcmFtZXRlcnMoYm9keSkpIHtcblx0XHRcdC8vIEJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LnRvU3RyaW5nKCkpO1xuXHRcdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0XHQvLyBCb2R5IGlzIGJsb2Jcblx0XHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdFx0Ly8gQm9keSBpcyBCdWZmZXJcblx0XHR9IGVsc2UgaWYgKHR5cGVzLmlzQW55QXJyYXlCdWZmZXIoYm9keSkpIHtcblx0XHRcdC8vIEJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5KTtcblx0XHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdFx0Ly8gQm9keSBpcyBBcnJheUJ1ZmZlclZpZXdcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LmJ1ZmZlciwgYm9keS5ieXRlT2Zmc2V0LCBib2R5LmJ5dGVMZW5ndGgpO1xuXHRcdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdFx0Ly8gQm9keSBpcyBzdHJlYW1cblx0XHR9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuXHRcdFx0Ly8gQm9keSBpcyBGb3JtRGF0YVxuXHRcdFx0Ym9keSA9IGZvcm1EYXRhVG9CbG9iKGJvZHkpO1xuXHRcdFx0Ym91bmRhcnkgPSBib2R5LnR5cGUuc3BsaXQoJz0nKVsxXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTm9uZSBvZiB0aGUgYWJvdmVcblx0XHRcdC8vIGNvZXJjZSB0byBzdHJpbmcgdGhlbiBidWZmZXJcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShTdHJpbmcoYm9keSkpO1xuXHRcdH1cblxuXHRcdGxldCBzdHJlYW0gPSBib2R5O1xuXG5cdFx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdFx0c3RyZWFtID0gU3RyZWFtLlJlYWRhYmxlLmZyb20oYm9keSk7XG5cdFx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRcdHN0cmVhbSA9IFN0cmVhbS5SZWFkYWJsZS5mcm9tKGJvZHkuc3RyZWFtKCkpO1xuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxTXSA9IHtcblx0XHRcdGJvZHksXG5cdFx0XHRzdHJlYW0sXG5cdFx0XHRib3VuZGFyeSxcblx0XHRcdGRpc3R1cmJlZDogZmFsc2UsXG5cdFx0XHRlcnJvcjogbnVsbFxuXHRcdH07XG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcblxuXHRcdGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0XHRib2R5Lm9uKCdlcnJvcicsIGVycm9yXyA9PiB7XG5cdFx0XHRcdGNvbnN0IGVycm9yID0gZXJyb3JfIGluc3RhbmNlb2YgRmV0Y2hCYXNlRXJyb3IgP1xuXHRcdFx0XHRcdGVycm9yXyA6XG5cdFx0XHRcdFx0bmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHt0aGlzLnVybH06ICR7ZXJyb3JfLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycm9yXyk7XG5cdFx0XHRcdHRoaXNbSU5URVJOQUxTXS5lcnJvciA9IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGJvZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5zdHJlYW07XG5cdH1cblxuXHRnZXQgYm9keVVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQ7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIEFycmF5QnVmZmVyXG5cdCAqXG5cdCAqIEByZXR1cm4gIFByb21pc2Vcblx0ICovXG5cdGFzeW5jIGFycmF5QnVmZmVyKCkge1xuXHRcdGNvbnN0IHtidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGh9ID0gYXdhaXQgY29uc3VtZUJvZHkodGhpcyk7XG5cdFx0cmV0dXJuIGJ1ZmZlci5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCk7XG5cdH1cblxuXHRhc3luYyBmb3JtRGF0YSgpIHtcblx0XHRjb25zdCBjdCA9IHRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuXG5cdFx0aWYgKGN0LnN0YXJ0c1dpdGgoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpKSB7XG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVycyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXdhaXQgdGhpcy50ZXh0KCkpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgcGFyYW1ldGVycykge1xuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm9ybURhdGE7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3RvRm9ybURhdGF9ID0gYXdhaXQgaW1wb3J0KCcuL3V0aWxzL211bHRpcGFydC1wYXJzZXIuanMnKTtcblx0XHRyZXR1cm4gdG9Gb3JtRGF0YSh0aGlzLmJvZHksIGN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gcmF3IHJlc3BvbnNlIGFzIEJsb2Jcblx0ICpcblx0ICogQHJldHVybiBQcm9taXNlXG5cdCAqL1xuXHRhc3luYyBibG9iKCkge1xuXHRcdGNvbnN0IGN0ID0gKHRoaXMuaGVhZGVycyAmJiB0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkgfHwgKHRoaXNbSU5URVJOQUxTXS5ib2R5ICYmIHRoaXNbSU5URVJOQUxTXS5ib2R5LnR5cGUpIHx8ICcnO1xuXHRcdGNvbnN0IGJ1ZiA9IGF3YWl0IHRoaXMuYXJyYXlCdWZmZXIoKTtcblxuXHRcdHJldHVybiBuZXcgQmxvYihbYnVmXSwge1xuXHRcdFx0dHlwZTogY3Rcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvZGUgcmVzcG9uc2UgYXMganNvblxuXHQgKlxuXHQgKiBAcmV0dXJuICBQcm9taXNlXG5cdCAqL1xuXHRhc3luYyBqc29uKCkge1xuXHRcdGNvbnN0IHRleHQgPSBhd2FpdCB0aGlzLnRleHQoKTtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvZGUgcmVzcG9uc2UgYXMgdGV4dFxuXHQgKlxuXHQgKiBAcmV0dXJuICBQcm9taXNlXG5cdCAqL1xuXHRhc3luYyB0ZXh0KCkge1xuXHRcdGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGNvbnN1bWVCb2R5KHRoaXMpO1xuXHRcdHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYnVmZmVyKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvZGUgcmVzcG9uc2UgYXMgYnVmZmVyIChub24tc3BlYyBhcGkpXG5cdCAqXG5cdCAqIEByZXR1cm4gIFByb21pc2Vcblx0ICovXG5cdGJ1ZmZlcigpIHtcblx0XHRyZXR1cm4gY29uc3VtZUJvZHkodGhpcyk7XG5cdH1cbn1cblxuQm9keS5wcm90b3R5cGUuYnVmZmVyID0gZGVwcmVjYXRlKEJvZHkucHJvdG90eXBlLmJ1ZmZlciwgJ1BsZWFzZSB1c2UgXFwncmVzcG9uc2UuYXJyYXlCdWZmZXIoKVxcJyBpbnN0ZWFkIG9mIFxcJ3Jlc3BvbnNlLmJ1ZmZlcigpXFwnJywgJ25vZGUtZmV0Y2gjYnVmZmVyJyk7XG5cbi8vIEluIGJyb3dzZXJzLCBhbGwgcHJvcGVydGllcyBhcmUgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJvZHkucHJvdG90eXBlLCB7XG5cdGJvZHk6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0Ym9keVVzZWQ6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0YXJyYXlCdWZmZXI6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0YmxvYjoge2VudW1lcmFibGU6IHRydWV9LFxuXHRqc29uOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHRleHQ6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0ZGF0YToge2dldDogZGVwcmVjYXRlKCgpID0+IHt9LFxuXHRcdCdkYXRhIGRvZXNuXFwndCBleGlzdCwgdXNlIGpzb24oKSwgdGV4dCgpLCBhcnJheUJ1ZmZlcigpLCBvciBib2R5IGluc3RlYWQnLFxuXHRcdCdodHRwczovL2dpdGh1Yi5jb20vbm9kZS1mZXRjaC9ub2RlLWZldGNoL2lzc3Vlcy8xMDAwIChyZXNwb25zZSknKX1cbn0pO1xuXG4vKipcbiAqIENvbnN1bWUgYW5kIGNvbnZlcnQgYW4gZW50aXJlIEJvZHkgdG8gYSBCdWZmZXIuXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5LWNvbnN1bWUtYm9keVxuICpcbiAqIEByZXR1cm4gUHJvbWlzZVxuICovXG5hc3luYyBmdW5jdGlvbiBjb25zdW1lQm9keShkYXRhKSB7XG5cdGlmIChkYXRhW0lOVEVSTkFMU10uZGlzdHVyYmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgYm9keSB1c2VkIGFscmVhZHkgZm9yOiAke2RhdGEudXJsfWApO1xuXHR9XG5cblx0ZGF0YVtJTlRFUk5BTFNdLmRpc3R1cmJlZCA9IHRydWU7XG5cblx0aWYgKGRhdGFbSU5URVJOQUxTXS5lcnJvcikge1xuXHRcdHRocm93IGRhdGFbSU5URVJOQUxTXS5lcnJvcjtcblx0fVxuXG5cdGNvbnN0IHtib2R5fSA9IGRhdGE7XG5cblx0Ly8gQm9keSBpcyBudWxsXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcblx0fVxuXG5cdC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cblx0aWYgKCEoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcblx0XHRyZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBzdHJlYW1cblx0Ly8gZ2V0IHJlYWR5IHRvIGFjdHVhbGx5IGNvbnN1bWUgdGhlIGJvZHlcblx0Y29uc3QgYWNjdW0gPSBbXTtcblx0bGV0IGFjY3VtQnl0ZXMgPSAwO1xuXG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBib2R5KSB7XG5cdFx0XHRpZiAoZGF0YS5zaXplID4gMCAmJiBhY2N1bUJ5dGVzICsgY2h1bmsubGVuZ3RoID4gZGF0YS5zaXplKSB7XG5cdFx0XHRcdGNvbnN0IGVycm9yID0gbmV3IEZldGNoRXJyb3IoYGNvbnRlbnQgc2l6ZSBhdCAke2RhdGEudXJsfSBvdmVyIGxpbWl0OiAke2RhdGEuc2l6ZX1gLCAnbWF4LXNpemUnKTtcblx0XHRcdFx0Ym9keS5kZXN0cm95KGVycm9yKTtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cblx0XHRcdGFjY3VtQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0YWNjdW0ucHVzaChjaHVuayk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnN0IGVycm9yXyA9IGVycm9yIGluc3RhbmNlb2YgRmV0Y2hCYXNlRXJyb3IgPyBlcnJvciA6IG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7ZGF0YS51cmx9OiAke2Vycm9yLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycm9yKTtcblx0XHR0aHJvdyBlcnJvcl87XG5cdH1cblxuXHRpZiAoYm9keS5yZWFkYWJsZUVuZGVkID09PSB0cnVlIHx8IGJvZHkuX3JlYWRhYmxlU3RhdGUuZW5kZWQgPT09IHRydWUpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGFjY3VtLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnKSkge1xuXHRcdFx0XHRyZXR1cm4gQnVmZmVyLmZyb20oYWNjdW0uam9pbignJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gQnVmZmVyLmNvbmNhdChhY2N1bSwgYWNjdW1CeXRlcyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBGZXRjaEVycm9yKGBDb3VsZCBub3QgY3JlYXRlIEJ1ZmZlciBmcm9tIHJlc3BvbnNlIGJvZHkgZm9yICR7ZGF0YS51cmx9OiAke2Vycm9yLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycm9yKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEZldGNoRXJyb3IoYFByZW1hdHVyZSBjbG9zZSBvZiBzZXJ2ZXIgcmVzcG9uc2Ugd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7ZGF0YS51cmx9YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDbG9uZSBib2R5IGdpdmVuIFJlcy9SZXEgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGluc3RhbmNlICAgICAgIFJlc3BvbnNlIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIFN0cmluZyAgaGlnaFdhdGVyTWFyayAgaGlnaFdhdGVyTWFyayBmb3IgYm90aCBQYXNzVGhyb3VnaCBib2R5IHN0cmVhbXNcbiAqIEByZXR1cm4gIE1peGVkXG4gKi9cbmV4cG9ydCBjb25zdCBjbG9uZSA9IChpbnN0YW5jZSwgaGlnaFdhdGVyTWFyaykgPT4ge1xuXHRsZXQgcDE7XG5cdGxldCBwMjtcblx0bGV0IHtib2R5fSA9IGluc3RhbmNlW0lOVEVSTkFMU107XG5cblx0Ly8gRG9uJ3QgYWxsb3cgY2xvbmluZyBhIHVzZWQgYm9keVxuXHRpZiAoaW5zdGFuY2UuYm9keVVzZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjbG9uZSBib2R5IGFmdGVyIGl0IGlzIHVzZWQnKTtcblx0fVxuXG5cdC8vIENoZWNrIHRoYXQgYm9keSBpcyBhIHN0cmVhbSBhbmQgbm90IGZvcm0tZGF0YSBvYmplY3Rcblx0Ly8gbm90ZTogd2UgY2FuJ3QgY2xvbmUgdGhlIGZvcm0tZGF0YSBvYmplY3Qgd2l0aG91dCBoYXZpbmcgaXQgYXMgYSBkZXBlbmRlbmN5XG5cdGlmICgoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgJiYgKHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdC8vIFRlZSBpbnN0YW5jZSBib2R5XG5cdFx0cDEgPSBuZXcgUGFzc1Rocm91Z2goe2hpZ2hXYXRlck1hcmt9KTtcblx0XHRwMiA9IG5ldyBQYXNzVGhyb3VnaCh7aGlnaFdhdGVyTWFya30pO1xuXHRcdGJvZHkucGlwZShwMSk7XG5cdFx0Ym9keS5waXBlKHAyKTtcblx0XHQvLyBTZXQgaW5zdGFuY2UgYm9keSB0byB0ZWVkIGJvZHkgYW5kIHJldHVybiB0aGUgb3RoZXIgdGVlZCBib2R5XG5cdFx0aW5zdGFuY2VbSU5URVJOQUxTXS5zdHJlYW0gPSBwMTtcblx0XHRib2R5ID0gcDI7XG5cdH1cblxuXHRyZXR1cm4gYm9keTtcbn07XG5cbmNvbnN0IGdldE5vblNwZWNGb3JtRGF0YUJvdW5kYXJ5ID0gZGVwcmVjYXRlKFxuXHRib2R5ID0+IGJvZHkuZ2V0Qm91bmRhcnkoKSxcblx0J2Zvcm0tZGF0YSBkb2VzblxcJ3QgZm9sbG93IHRoZSBzcGVjIGFuZCByZXF1aXJlcyBzcGVjaWFsIHRyZWF0bWVudC4gVXNlIGFsdGVybmF0aXZlIHBhY2thZ2UnLFxuXHQnaHR0cHM6Ly9naXRodWIuY29tL25vZGUtZmV0Y2gvbm9kZS1mZXRjaC9pc3N1ZXMvMTE2Nydcbik7XG5cbi8qKlxuICogUGVyZm9ybXMgdGhlIG9wZXJhdGlvbiBcImV4dHJhY3QgYSBgQ29udGVudC1UeXBlYCB2YWx1ZSBmcm9tIHxvYmplY3R8XCIgYXNcbiAqIHNwZWNpZmllZCBpbiB0aGUgc3BlY2lmaWNhdGlvbjpcbiAqIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHlpbml0LWV4dHJhY3RcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBpbnN0YW5jZS5ib2R5IGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHthbnl9IGJvZHkgQW55IG9wdGlvbnMuYm9keSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0Q29udGVudFR5cGUgPSAoYm9keSwgcmVxdWVzdCkgPT4ge1xuXHQvLyBCb2R5IGlzIG51bGwgb3IgdW5kZWZpbmVkXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBCb2R5IGlzIHN0cmluZ1xuXHRpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRpZiAoaXNVUkxTZWFyY2hQYXJhbWV0ZXJzKGJvZHkpKSB7XG5cdFx0cmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCc7XG5cdH1cblxuXHQvLyBCb2R5IGlzIGJsb2Jcblx0aWYgKGlzQmxvYihib2R5KSkge1xuXHRcdHJldHVybiBib2R5LnR5cGUgfHwgbnVsbDtcblx0fVxuXG5cdC8vIEJvZHkgaXMgYSBCdWZmZXIgKEJ1ZmZlciwgQXJyYXlCdWZmZXIgb3IgQXJyYXlCdWZmZXJWaWV3KVxuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpIHx8IHR5cGVzLmlzQW55QXJyYXlCdWZmZXIoYm9keSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoYm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG5cdFx0cmV0dXJuIGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke3JlcXVlc3RbSU5URVJOQUxTXS5ib3VuZGFyeX1gO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0aWYgKGJvZHkgJiYgdHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gYG11bHRpcGFydC9mb3JtLWRhdGE7Ym91bmRhcnk9JHtnZXROb25TcGVjRm9ybURhdGFCb3VuZGFyeShib2R5KX1gO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBzdHJlYW0gLSBjYW4ndCByZWFsbHkgZG8gbXVjaCBhYm91dCB0aGlzXG5cdGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBCb2R5IGNvbnN0cnVjdG9yIGRlZmF1bHRzIG90aGVyIHRoaW5ncyB0byBzdHJpbmdcblx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xufTtcblxuLyoqXG4gKiBUaGUgRmV0Y2ggU3RhbmRhcmQgdHJlYXRzIHRoaXMgYXMgaWYgXCJ0b3RhbCBieXRlc1wiIGlzIGEgcHJvcGVydHkgb24gdGhlIGJvZHkuXG4gKiBGb3IgdXMsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBnZXQgaXQgd2l0aCBhIGZ1bmN0aW9uLlxuICpcbiAqIHJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS10b3RhbC1ieXRlc1xuICpcbiAqIEBwYXJhbSB7YW55fSBvYmouYm9keSBCb2R5IG9iamVjdCBmcm9tIHRoZSBCb2R5IGluc3RhbmNlLlxuICogQHJldHVybnMge251bWJlciB8IG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUb3RhbEJ5dGVzID0gcmVxdWVzdCA9PiB7XG5cdGNvbnN0IHtib2R5fSA9IHJlcXVlc3RbSU5URVJOQUxTXTtcblxuXHQvLyBCb2R5IGlzIG51bGwgb3IgdW5kZWZpbmVkXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHQvLyBCb2R5IGlzIEJsb2Jcblx0aWYgKGlzQmxvYihib2R5KSkge1xuXHRcdHJldHVybiBib2R5LnNpemU7XG5cdH1cblxuXHQvLyBCb2R5IGlzIEJ1ZmZlclxuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHkubGVuZ3RoO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0aWYgKGJvZHkgJiYgdHlwZW9mIGJvZHkuZ2V0TGVuZ3RoU3luYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBib2R5Lmhhc0tub3duTGVuZ3RoICYmIGJvZHkuaGFzS25vd25MZW5ndGgoKSA/IGJvZHkuZ2V0TGVuZ3RoU3luYygpIDogbnVsbDtcblx0fVxuXG5cdC8vIEJvZHkgaXMgc3RyZWFtXG5cdHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBXcml0ZSBhIEJvZHkgdG8gYSBOb2RlLmpzIFdyaXRhYmxlU3RyZWFtIChlLmcuIGh0dHAuUmVxdWVzdCkgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyZWFtLldyaXRhYmxlfSBkZXN0IFRoZSBzdHJlYW0gdG8gd3JpdGUgdG8uXG4gKiBAcGFyYW0gb2JqLmJvZHkgQm9keSBvYmplY3QgZnJvbSB0aGUgQm9keSBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgY29uc3Qgd3JpdGVUb1N0cmVhbSA9IGFzeW5jIChkZXN0LCB7Ym9keX0pID0+IHtcblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBCb2R5IGlzIG51bGxcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJvZHkgaXMgc3RyZWFtXG5cdFx0YXdhaXQgcGlwZWxpbmUoYm9keSwgZGVzdCk7XG5cdH1cbn07XG4iLCAiLyoqXG4gKiBIZWFkZXJzLmpzXG4gKlxuICogSGVhZGVycyBjbGFzcyBvZmZlcnMgY29udmVuaWVudCBoZWxwZXJzXG4gKi9cblxuaW1wb3J0IHt0eXBlc30gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBodHRwIGZyb20gJ25vZGU6aHR0cCc7XG5cbi8qIGM4IGlnbm9yZSBuZXh0IDkgKi9cbmNvbnN0IHZhbGlkYXRlSGVhZGVyTmFtZSA9IHR5cGVvZiBodHRwLnZhbGlkYXRlSGVhZGVyTmFtZSA9PT0gJ2Z1bmN0aW9uJyA/XG5cdGh0dHAudmFsaWRhdGVIZWFkZXJOYW1lIDpcblx0bmFtZSA9PiB7XG5cdFx0aWYgKCEvXltcXF5gXFwtXFx3ISMkJSYnKisufH5dKyQvLnRlc3QobmFtZSkpIHtcblx0XHRcdGNvbnN0IGVycm9yID0gbmV3IFR5cGVFcnJvcihgSGVhZGVyIG5hbWUgbXVzdCBiZSBhIHZhbGlkIEhUVFAgdG9rZW4gWyR7bmFtZX1dYCk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyb3IsICdjb2RlJywge3ZhbHVlOiAnRVJSX0lOVkFMSURfSFRUUF9UT0tFTid9KTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fTtcblxuLyogYzggaWdub3JlIG5leHQgOSAqL1xuY29uc3QgdmFsaWRhdGVIZWFkZXJWYWx1ZSA9IHR5cGVvZiBodHRwLnZhbGlkYXRlSGVhZGVyVmFsdWUgPT09ICdmdW5jdGlvbicgP1xuXHRodHRwLnZhbGlkYXRlSGVhZGVyVmFsdWUgOlxuXHQobmFtZSwgdmFsdWUpID0+IHtcblx0XHRpZiAoL1teXFx0XFx1MDAyMC1cXHUwMDdFXFx1MDA4MC1cXHUwMEZGXS8udGVzdCh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IGVycm9yID0gbmV3IFR5cGVFcnJvcihgSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGNvbnRlbnQgW1wiJHtuYW1lfVwiXWApO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnY29kZScsIHt2YWx1ZTogJ0VSUl9JTlZBTElEX0NIQVInfSk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cbi8qKlxuICogQHR5cGVkZWYge0hlYWRlcnMgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgSXRlcmFibGU8cmVhZG9ubHkgW3N0cmluZywgc3RyaW5nXT4gfCBJdGVyYWJsZTxJdGVyYWJsZTxzdHJpbmc+Pn0gSGVhZGVyc0luaXRcbiAqL1xuXG4vKipcbiAqIFRoaXMgRmV0Y2ggQVBJIGludGVyZmFjZSBhbGxvd3MgeW91IHRvIHBlcmZvcm0gdmFyaW91cyBhY3Rpb25zIG9uIEhUVFAgcmVxdWVzdCBhbmQgcmVzcG9uc2UgaGVhZGVycy5cbiAqIFRoZXNlIGFjdGlvbnMgaW5jbHVkZSByZXRyaWV2aW5nLCBzZXR0aW5nLCBhZGRpbmcgdG8sIGFuZCByZW1vdmluZy5cbiAqIEEgSGVhZGVycyBvYmplY3QgaGFzIGFuIGFzc29jaWF0ZWQgaGVhZGVyIGxpc3QsIHdoaWNoIGlzIGluaXRpYWxseSBlbXB0eSBhbmQgY29uc2lzdHMgb2YgemVybyBvciBtb3JlIG5hbWUgYW5kIHZhbHVlIHBhaXJzLlxuICogWW91IGNhbiBhZGQgdG8gdGhpcyB1c2luZyBtZXRob2RzIGxpa2UgYXBwZW5kKCkgKHNlZSBFeGFtcGxlcy4pXG4gKiBJbiBhbGwgbWV0aG9kcyBvZiB0aGlzIGludGVyZmFjZSwgaGVhZGVyIG5hbWVzIGFyZSBtYXRjaGVkIGJ5IGNhc2UtaW5zZW5zaXRpdmUgYnl0ZSBzZXF1ZW5jZS5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlcnMgZXh0ZW5kcyBVUkxTZWFyY2hQYXJhbXMge1xuXHQvKipcblx0ICogSGVhZGVycyBjbGFzc1xuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtIZWFkZXJzSW5pdH0gW2luaXRdIC0gUmVzcG9uc2UgaGVhZGVyc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoaW5pdCkge1xuXHRcdC8vIFZhbGlkYXRlIGFuZCBub3JtYWxpemUgaW5pdCBvYmplY3QgaW4gW25hbWUsIHZhbHVlKHMpXVtdXG5cdFx0LyoqIEB0eXBlIHtzdHJpbmdbXVtdfSAqL1xuXHRcdGxldCByZXN1bHQgPSBbXTtcblx0XHRpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcblx0XHRcdGNvbnN0IHJhdyA9IGluaXQucmF3KCk7XG5cdFx0XHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHJhdykpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goLi4udmFsdWVzLm1hcCh2YWx1ZSA9PiBbbmFtZSwgdmFsdWVdKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbml0ID09IG51bGwpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lcS1udWxsLCBlcWVxZXFcblx0XHRcdC8vIE5vIG9wXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgaW5pdCA9PT0gJ29iamVjdCcgJiYgIXR5cGVzLmlzQm94ZWRQcmltaXRpdmUoaW5pdCkpIHtcblx0XHRcdGNvbnN0IG1ldGhvZCA9IGluaXRbU3ltYm9sLml0ZXJhdG9yXTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLCBlcWVxZXFcblx0XHRcdGlmIChtZXRob2QgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBSZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz5cblx0XHRcdFx0cmVzdWx0LnB1c2goLi4uT2JqZWN0LmVudHJpZXMoaW5pdCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+XG5cdFx0XHRcdC8vIE5vdGU6IHBlciBzcGVjIHdlIGhhdmUgdG8gZmlyc3QgZXhoYXVzdCB0aGUgbGlzdHMgdGhlbiBwcm9jZXNzIHRoZW1cblx0XHRcdFx0cmVzdWx0ID0gWy4uLmluaXRdXG5cdFx0XHRcdFx0Lm1hcChwYWlyID0+IHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0dHlwZW9mIHBhaXIgIT09ICdvYmplY3QnIHx8IHR5cGVzLmlzQm94ZWRQcmltaXRpdmUocGFpcilcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgYW4gaXRlcmFibGUgb2JqZWN0Jyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBbLi4ucGFpcl07XG5cdFx0XHRcdFx0fSkubWFwKHBhaXIgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHBhaXIubGVuZ3RoICE9PSAyKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBhIG5hbWUvdmFsdWUgdHVwbGUnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIFsuLi5wYWlyXTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGNvbnN0cnVjdCBcXCdIZWFkZXJzXFwnOiBUaGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IG9mIHR5cGUgXFwnKHNlcXVlbmNlPHNlcXVlbmNlPEJ5dGVTdHJpbmc+PiBvciByZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz4pJyk7XG5cdFx0fVxuXG5cdFx0Ly8gVmFsaWRhdGUgYW5kIGxvd2VyY2FzZVxuXHRcdHJlc3VsdCA9XG5cdFx0XHRyZXN1bHQubGVuZ3RoID4gMCA/XG5cdFx0XHRcdHJlc3VsdC5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlck5hbWUobmFtZSk7XG5cdFx0XHRcdFx0dmFsaWRhdGVIZWFkZXJWYWx1ZShuYW1lLCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdFx0XHRyZXR1cm4gW1N0cmluZyhuYW1lKS50b0xvd2VyQ2FzZSgpLCBTdHJpbmcodmFsdWUpXTtcblx0XHRcdFx0fSkgOlxuXHRcdFx0XHR1bmRlZmluZWQ7XG5cblx0XHRzdXBlcihyZXN1bHQpO1xuXG5cdFx0Ly8gUmV0dXJuaW5nIGEgUHJveHkgdGhhdCB3aWxsIGxvd2VyY2FzZSBrZXkgbmFtZXMsIHZhbGlkYXRlIHBhcmFtZXRlcnMgYW5kIHNvcnQga2V5c1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cblx0XHRyZXR1cm4gbmV3IFByb3h5KHRoaXMsIHtcblx0XHRcdGdldCh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG5cdFx0XHRcdHN3aXRjaCAocCkge1xuXHRcdFx0XHRcdGNhc2UgJ2FwcGVuZCc6XG5cdFx0XHRcdFx0Y2FzZSAnc2V0Jzpcblx0XHRcdFx0XHRcdHJldHVybiAobmFtZSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGVIZWFkZXJOYW1lKG5hbWUpO1xuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlclZhbHVlKG5hbWUsIFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZVtwXS5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdFx0XHRTdHJpbmcobmFtZSkudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0XHRTdHJpbmcodmFsdWUpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdFx0XHRjYXNlICdoYXMnOlxuXHRcdFx0XHRcdGNhc2UgJ2dldEFsbCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmFtZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyTmFtZShuYW1lKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGVbcF0uY2FsbChcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0XHRcdFx0U3RyaW5nKG5hbWUpLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRjYXNlICdrZXlzJzpcblx0XHRcdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldC5zb3J0KCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgU2V0KFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUua2V5cy5jYWxsKHRhcmdldCkpLmtleXMoKTtcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcCwgcmVjZWl2ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0LyogYzggaWdub3JlIG5leHQgKi9cblx0fVxuXG5cdGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKTtcblx0fVxuXG5cdGdldChuYW1lKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy5nZXRBbGwobmFtZSk7XG5cdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCB2YWx1ZSA9IHZhbHVlcy5qb2luKCcsICcpO1xuXHRcdGlmICgvXmNvbnRlbnQtZW5jb2RpbmckL2kudGVzdChuYW1lKSkge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcgPSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy5rZXlzKCkpIHtcblx0XHRcdFJlZmxlY3QuYXBwbHkoY2FsbGJhY2ssIHRoaXNBcmcsIFt0aGlzLmdldChuYW1lKSwgbmFtZSwgdGhpc10pO1xuXHRcdH1cblx0fVxuXG5cdCogdmFsdWVzKCkge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLmtleXMoKSkge1xuXHRcdFx0eWllbGQgdGhpcy5nZXQobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHsoKSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFtzdHJpbmcsIHN0cmluZ10+fVxuXHQgKi9cblx0KiBlbnRyaWVzKCkge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLmtleXMoKSkge1xuXHRcdFx0eWllbGQgW25hbWUsIHRoaXMuZ2V0KG5hbWUpXTtcblx0XHR9XG5cdH1cblxuXHRbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG5cdH1cblxuXHQvKipcblx0ICogTm9kZS1mZXRjaCBub24tc3BlYyBtZXRob2Rcblx0ICogcmV0dXJuaW5nIGFsbCBoZWFkZXJzIGFuZCB0aGVpciB2YWx1ZXMgYXMgYXJyYXlcblx0ICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHN0cmluZ1tdPn1cblx0ICovXG5cdHJhdygpIHtcblx0XHRyZXR1cm4gWy4uLnRoaXMua2V5cygpXS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHRoaXMuZ2V0QWxsKGtleSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sIHt9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb3IgYmV0dGVyIGNvbnNvbGUubG9nKGhlYWRlcnMpIGFuZCBhbHNvIHRvIGNvbnZlcnQgSGVhZGVycyBpbnRvIE5vZGUuanMgUmVxdWVzdCBjb21wYXRpYmxlIGZvcm1hdFxuXHQgKi9cblx0W1N5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJyldKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5rZXlzKCldLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0QWxsKGtleSk7XG5cdFx0XHQvLyBIdHRwLnJlcXVlc3QoKSBvbmx5IHN1cHBvcnRzIHN0cmluZyBhcyBIb3N0IGhlYWRlci5cblx0XHRcdC8vIFRoaXMgaGFjayBtYWtlcyBzcGVjaWZ5aW5nIGN1c3RvbSBIb3N0IGhlYWRlciBwb3NzaWJsZS5cblx0XHRcdGlmIChrZXkgPT09ICdob3N0Jykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IHZhbHVlc1swXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWVzLmxlbmd0aCA+IDEgPyB2YWx1ZXMgOiB2YWx1ZXNbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSwge30pO1xuXHR9XG59XG5cbi8qKlxuICogUmUtc2hhcGluZyBvYmplY3QgZm9yIFdlYiBJREwgdGVzdHNcbiAqIE9ubHkgbmVlZCB0byBkbyBpdCBmb3Igb3ZlcnJpZGRlbiBtZXRob2RzXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuXHRIZWFkZXJzLnByb3RvdHlwZSxcblx0WydnZXQnLCAnZW50cmllcycsICdmb3JFYWNoJywgJ3ZhbHVlcyddLnJlZHVjZSgocmVzdWx0LCBwcm9wZXJ0eSkgPT4ge1xuXHRcdHJlc3VsdFtwcm9wZXJ0eV0gPSB7ZW51bWVyYWJsZTogdHJ1ZX07XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwge30pXG4pO1xuXG4vKipcbiAqIENyZWF0ZSBhIEhlYWRlcnMgb2JqZWN0IGZyb20gYW4gaHR0cC5JbmNvbWluZ01lc3NhZ2UucmF3SGVhZGVycywgaWdub3JpbmcgdGhvc2UgdGhhdCBkb1xuICogbm90IGNvbmZvcm0gdG8gSFRUUCBncmFtbWFyIHByb2R1Y3Rpb25zLlxuICogQHBhcmFtIHtpbXBvcnQoJ2h0dHAnKS5JbmNvbWluZ01lc3NhZ2VbJ3Jhd0hlYWRlcnMnXX0gaGVhZGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJhd0hlYWRlcnMoaGVhZGVycyA9IFtdKSB7XG5cdHJldHVybiBuZXcgSGVhZGVycyhcblx0XHRoZWFkZXJzXG5cdFx0XHQvLyBTcGxpdCBpbnRvIHBhaXJzXG5cdFx0XHQucmVkdWNlKChyZXN1bHQsIHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ICUgMiA9PT0gMCkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGFycmF5LnNsaWNlKGluZGV4LCBpbmRleCArIDIpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LCBbXSlcblx0XHRcdC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlck5hbWUobmFtZSk7XG5cdFx0XHRcdFx0dmFsaWRhdGVIZWFkZXJWYWx1ZShuYW1lLCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdCk7XG59XG4iLCAiY29uc3QgcmVkaXJlY3RTdGF0dXMgPSBuZXcgU2V0KFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF0pO1xuXG4vKipcbiAqIFJlZGlyZWN0IGNvZGUgbWF0Y2hpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZSAtIFN0YXR1cyBjb2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNSZWRpcmVjdCA9IGNvZGUgPT4ge1xuXHRyZXR1cm4gcmVkaXJlY3RTdGF0dXMuaGFzKGNvZGUpO1xufTtcbiIsICIvKipcbiAqIFJlc3BvbnNlLmpzXG4gKlxuICogUmVzcG9uc2UgY2xhc3MgcHJvdmlkZXMgY29udGVudCBkZWNvZGluZ1xuICovXG5cbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vaGVhZGVycy5qcyc7XG5pbXBvcnQgQm9keSwge2Nsb25lLCBleHRyYWN0Q29udGVudFR5cGV9IGZyb20gJy4vYm9keS5qcyc7XG5pbXBvcnQge2lzUmVkaXJlY3R9IGZyb20gJy4vdXRpbHMvaXMtcmVkaXJlY3QuanMnO1xuXG5jb25zdCBJTlRFUk5BTFMgPSBTeW1ib2woJ1Jlc3BvbnNlIGludGVybmFscycpO1xuXG4vKipcbiAqIFJlc3BvbnNlIGNsYXNzXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVzcG9uc2UtY2xhc3NcbiAqXG4gKiBAcGFyYW0gICBTdHJlYW0gIGJvZHkgIFJlYWRhYmxlIHN0cmVhbVxuICogQHBhcmFtICAgT2JqZWN0ICBvcHRzICBSZXNwb25zZSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgQm9keSB7XG5cdGNvbnN0cnVjdG9yKGJvZHkgPSBudWxsLCBvcHRpb25zID0ge30pIHtcblx0XHRzdXBlcihib2R5LCBvcHRpb25zKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLCBlcWVxZXEsIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG5cdFx0Y29uc3Qgc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgIT0gbnVsbCA/IG9wdGlvbnMuc3RhdHVzIDogMjAwO1xuXG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG5cblx0XHRpZiAoYm9keSAhPT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShib2R5LCB0aGlzKTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxTXSA9IHtcblx0XHRcdHR5cGU6ICdkZWZhdWx0Jyxcblx0XHRcdHVybDogb3B0aW9ucy51cmwsXG5cdFx0XHRzdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiBvcHRpb25zLnN0YXR1c1RleHQgfHwgJycsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0Y291bnRlcjogb3B0aW9ucy5jb3VudGVyLFxuXHRcdFx0aGlnaFdhdGVyTWFyazogb3B0aW9ucy5oaWdoV2F0ZXJNYXJrXG5cdFx0fTtcblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10udHlwZTtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS51cmwgfHwgJyc7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uc3RhdHVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIHByb3BlcnR5IHJlcHJlc2VudGluZyBpZiB0aGUgcmVxdWVzdCBlbmRlZCBub3JtYWxseVxuXHQgKi9cblx0Z2V0IG9rKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uc3RhdHVzID49IDIwMCAmJiB0aGlzW0lOVEVSTkFMU10uc3RhdHVzIDwgMzAwO1xuXHR9XG5cblx0Z2V0IHJlZGlyZWN0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5jb3VudGVyID4gMDtcblx0fVxuXG5cdGdldCBzdGF0dXNUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uc3RhdHVzVGV4dDtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uaGVhZGVycztcblx0fVxuXG5cdGdldCBoaWdoV2F0ZXJNYXJrKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uaGlnaFdhdGVyTWFyaztcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9uZSB0aGlzIHJlc3BvbnNlXG5cdCAqXG5cdCAqIEByZXR1cm4gIFJlc3BvbnNlXG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKGNsb25lKHRoaXMsIHRoaXMuaGlnaFdhdGVyTWFyayksIHtcblx0XHRcdHR5cGU6IHRoaXMudHlwZSxcblx0XHRcdHVybDogdGhpcy51cmwsXG5cdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuXHRcdFx0aGVhZGVyczogdGhpcy5oZWFkZXJzLFxuXHRcdFx0b2s6IHRoaXMub2ssXG5cdFx0XHRyZWRpcmVjdGVkOiB0aGlzLnJlZGlyZWN0ZWQsXG5cdFx0XHRzaXplOiB0aGlzLnNpemUsXG5cdFx0XHRoaWdoV2F0ZXJNYXJrOiB0aGlzLmhpZ2hXYXRlck1hcmtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgIFRoZSBVUkwgdGhhdCB0aGUgbmV3IHJlc3BvbnNlIGlzIHRvIG9yaWdpbmF0ZSBmcm9tLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzIEFuIG9wdGlvbmFsIHN0YXR1cyBjb2RlIGZvciB0aGUgcmVzcG9uc2UgKGUuZy4sIDMwMi4pXG5cdCAqIEByZXR1cm5zIHtSZXNwb25zZX0gICAgQSBSZXNwb25zZSBvYmplY3QuXG5cdCAqL1xuXHRzdGF0aWMgcmVkaXJlY3QodXJsLCBzdGF0dXMgPSAzMDIpIHtcblx0XHRpZiAoIWlzUmVkaXJlY3Qoc3RhdHVzKSkge1xuXHRcdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ZhaWxlZCB0byBleGVjdXRlIFwicmVkaXJlY3RcIiBvbiBcInJlc3BvbnNlXCI6IEludmFsaWQgc3RhdHVzIGNvZGUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0bG9jYXRpb246IG5ldyBVUkwodXJsKS50b1N0cmluZygpXG5cdFx0XHR9LFxuXHRcdFx0c3RhdHVzXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IoKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KTtcblx0XHRyZXNwb25zZVtJTlRFUk5BTFNdLnR5cGUgPSAnZXJyb3InO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXG5cdHN0YXRpYyBqc29uKGRhdGEgPSB1bmRlZmluZWQsIGluaXQgPSB7fSkge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuXHRcdGlmIChib2R5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgaXMgbm90IEpTT04gc2VyaWFsaXphYmxlJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQgJiYgaW5pdC5oZWFkZXJzKTtcblxuXHRcdGlmICghaGVhZGVycy5oYXMoJ2NvbnRlbnQtdHlwZScpKSB7XG5cdFx0XHRoZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHtcblx0XHRcdC4uLmluaXQsXG5cdFx0XHRoZWFkZXJzXG5cdFx0fSk7XG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuICdSZXNwb25zZSc7XG5cdH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVzcG9uc2UucHJvdG90eXBlLCB7XG5cdHR5cGU6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0dXJsOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHN0YXR1czoge2VudW1lcmFibGU6IHRydWV9LFxuXHRvazoge2VudW1lcmFibGU6IHRydWV9LFxuXHRyZWRpcmVjdGVkOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHN0YXR1c1RleHQ6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0aGVhZGVyczoge2VudW1lcmFibGU6IHRydWV9LFxuXHRjbG9uZToge2VudW1lcmFibGU6IHRydWV9XG59KTtcbiIsICJleHBvcnQgY29uc3QgZ2V0U2VhcmNoID0gcGFyc2VkVVJMID0+IHtcblx0aWYgKHBhcnNlZFVSTC5zZWFyY2gpIHtcblx0XHRyZXR1cm4gcGFyc2VkVVJMLnNlYXJjaDtcblx0fVxuXG5cdGNvbnN0IGxhc3RPZmZzZXQgPSBwYXJzZWRVUkwuaHJlZi5sZW5ndGggLSAxO1xuXHRjb25zdCBoYXNoID0gcGFyc2VkVVJMLmhhc2ggfHwgKHBhcnNlZFVSTC5ocmVmW2xhc3RPZmZzZXRdID09PSAnIycgPyAnIycgOiAnJyk7XG5cdHJldHVybiBwYXJzZWRVUkwuaHJlZltsYXN0T2Zmc2V0IC0gaGFzaC5sZW5ndGhdID09PSAnPycgPyAnPycgOiAnJztcbn07XG4iLCAiaW1wb3J0IHtpc0lQfSBmcm9tICdub2RlOm5ldCc7XG5cbi8qKlxuICogQGV4dGVybmFsIFVSTFxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1VSTHxVUkx9XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHV0aWxzL3JlZmVycmVyXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1yZWZlcnJlci1wb2xpY3kvI3N0cmlwLXVybHxSZWZlcnJlciBQb2xpY3kgXHUwMEE3OC40LiBTdHJpcCB1cmwgZm9yIHVzZSBhcyBhIHJlZmVycmVyfVxuICogQHBhcmFtIHtzdHJpbmd9IFVSTFxuICogQHBhcmFtIHtib29sZWFufSBbb3JpZ2luT25seT1mYWxzZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwVVJMRm9yVXNlQXNBUmVmZXJyZXIodXJsLCBvcmlnaW5Pbmx5ID0gZmFsc2UpIHtcblx0Ly8gMS4gSWYgdXJsIGlzIG51bGwsIHJldHVybiBubyByZWZlcnJlci5cblx0aWYgKHVybCA9PSBudWxsKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXEtbnVsbCwgZXFlcWVxXG5cdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdH1cblxuXHR1cmwgPSBuZXcgVVJMKHVybCk7XG5cblx0Ly8gMi4gSWYgdXJsJ3Mgc2NoZW1lIGlzIGEgbG9jYWwgc2NoZW1lLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0aWYgKC9eKGFib3V0fGJsb2J8ZGF0YSk6JC8udGVzdCh1cmwucHJvdG9jb2wpKSB7XG5cdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdH1cblxuXHQvLyAzLiBTZXQgdXJsJ3MgdXNlcm5hbWUgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0dXJsLnVzZXJuYW1lID0gJyc7XG5cblx0Ly8gNC4gU2V0IHVybCdzIHBhc3N3b3JkIHRvIG51bGwuXG5cdC8vIE5vdGU6IGBudWxsYCBhcHBlYXJzIHRvIGJlIGEgbWlzdGFrZSBhcyB0aGlzIGFjdHVhbGx5IHJlc3VsdHMgaW4gdGhlIHBhc3N3b3JkIGJlaW5nIGBcIm51bGxcImAuXG5cdHVybC5wYXNzd29yZCA9ICcnO1xuXG5cdC8vIDUuIFNldCB1cmwncyBmcmFnbWVudCB0byBudWxsLlxuXHQvLyBOb3RlOiBgbnVsbGAgYXBwZWFycyB0byBiZSBhIG1pc3Rha2UgYXMgdGhpcyBhY3R1YWxseSByZXN1bHRzIGluIHRoZSBmcmFnbWVudCBiZWluZyBgXCIjbnVsbFwiYC5cblx0dXJsLmhhc2ggPSAnJztcblxuXHQvLyA2LiBJZiB0aGUgb3JpZ2luLW9ubHkgZmxhZyBpcyB0cnVlLCB0aGVuOlxuXHRpZiAob3JpZ2luT25seSkge1xuXHRcdC8vIDYuMS4gU2V0IHVybCdzIHBhdGggdG8gbnVsbC5cblx0XHQvLyBOb3RlOiBgbnVsbGAgYXBwZWFycyB0byBiZSBhIG1pc3Rha2UgYXMgdGhpcyBhY3R1YWxseSByZXN1bHRzIGluIHRoZSBwYXRoIGJlaW5nIGBcIi9udWxsXCJgLlxuXHRcdHVybC5wYXRobmFtZSA9ICcnO1xuXG5cdFx0Ly8gNi4yLiBTZXQgdXJsJ3MgcXVlcnkgdG8gbnVsbC5cblx0XHQvLyBOb3RlOiBgbnVsbGAgYXBwZWFycyB0byBiZSBhIG1pc3Rha2UgYXMgdGhpcyBhY3R1YWxseSByZXN1bHRzIGluIHRoZSBxdWVyeSBiZWluZyBgXCI/bnVsbFwiYC5cblx0XHR1cmwuc2VhcmNoID0gJyc7XG5cdH1cblxuXHQvLyA3LiBSZXR1cm4gdXJsLlxuXHRyZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtcmVmZXJyZXItcG9saWN5LyNlbnVtZGVmLXJlZmVycmVycG9saWN5fGVudW0gUmVmZXJyZXJQb2xpY3l9XG4gKi9cbmV4cG9ydCBjb25zdCBSZWZlcnJlclBvbGljeSA9IG5ldyBTZXQoW1xuXHQnJyxcblx0J25vLXJlZmVycmVyJyxcblx0J25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJyxcblx0J3NhbWUtb3JpZ2luJyxcblx0J29yaWdpbicsXG5cdCdzdHJpY3Qtb3JpZ2luJyxcblx0J29yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXG5cdCdzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luJyxcblx0J3Vuc2FmZS11cmwnXG5dKTtcblxuLyoqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjLXJlZmVycmVyLXBvbGljeS8jZGVmYXVsdC1yZWZlcnJlci1wb2xpY3l8ZGVmYXVsdCByZWZlcnJlciBwb2xpY3l9XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFRkVSUkVSX1BPTElDWSA9ICdzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luJztcblxuLyoqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjLXJlZmVycmVyLXBvbGljeS8jcmVmZXJyZXItcG9saWNpZXN8UmVmZXJyZXIgUG9saWN5IFx1MDBBNzMuIFJlZmVycmVyIFBvbGljaWVzfVxuICogQHBhcmFtIHtzdHJpbmd9IHJlZmVycmVyUG9saWN5XG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZWZlcnJlclBvbGljeVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSZWZlcnJlclBvbGljeShyZWZlcnJlclBvbGljeSkge1xuXHRpZiAoIVJlZmVycmVyUG9saWN5LmhhcyhyZWZlcnJlclBvbGljeSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHJlZmVycmVyUG9saWN5OiAke3JlZmVycmVyUG9saWN5fWApO1xuXHR9XG5cblx0cmV0dXJuIHJlZmVycmVyUG9saWN5O1xufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtc2VjdXJlLWNvbnRleHRzLyNpcy1vcmlnaW4tdHJ1c3R3b3J0aHl8UmVmZXJyZXIgUG9saWN5IFx1MDBBNzMuMi4gSXMgb3JpZ2luIHBvdGVudGlhbGx5IHRydXN0d29ydGh5P31cbiAqIEBwYXJhbSB7ZXh0ZXJuYWw6VVJMfSB1cmxcbiAqIEByZXR1cm5zIGB0cnVlYDogXCJQb3RlbnRpYWxseSBUcnVzdHdvcnRoeVwiLCBgZmFsc2VgOiBcIk5vdCBUcnVzdHdvcnRoeVwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09yaWdpblBvdGVudGlhbGx5VHJ1c3R3b3J0aHkodXJsKSB7XG5cdC8vIDEuIElmIG9yaWdpbiBpcyBhbiBvcGFxdWUgb3JpZ2luLCByZXR1cm4gXCJOb3QgVHJ1c3R3b3J0aHlcIi5cblx0Ly8gTm90IGFwcGxpY2FibGVcblxuXHQvLyAyLiBBc3NlcnQ6IG9yaWdpbiBpcyBhIHR1cGxlIG9yaWdpbi5cblx0Ly8gTm90IGZvciBpbXBsZW1lbnRhdGlvbnNcblxuXHQvLyAzLiBJZiBvcmlnaW4ncyBzY2hlbWUgaXMgZWl0aGVyIFwiaHR0cHNcIiBvciBcIndzc1wiLCByZXR1cm4gXCJQb3RlbnRpYWxseSBUcnVzdHdvcnRoeVwiLlxuXHRpZiAoL14oaHR0cHx3cylzOiQvLnRlc3QodXJsLnByb3RvY29sKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gNC4gSWYgb3JpZ2luJ3MgaG9zdCBjb21wb25lbnQgbWF0Y2hlcyBvbmUgb2YgdGhlIENJRFIgbm90YXRpb25zIDEyNy4wLjAuMC84IG9yIDo6MS8xMjggW1JGQzQ2MzJdLCByZXR1cm4gXCJQb3RlbnRpYWxseSBUcnVzdHdvcnRoeVwiLlxuXHRjb25zdCBob3N0SXAgPSB1cmwuaG9zdC5yZXBsYWNlKC8oXlxcWyl8KF0kKS9nLCAnJyk7XG5cdGNvbnN0IGhvc3RJUFZlcnNpb24gPSBpc0lQKGhvc3RJcCk7XG5cblx0aWYgKGhvc3RJUFZlcnNpb24gPT09IDQgJiYgL14xMjdcXC4vLnRlc3QoaG9zdElwKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGhvc3RJUFZlcnNpb24gPT09IDYgJiYgL14oKCgwKzopezd9KXwoOjooMCs6KXswLDZ9KSkwKjEkLy50ZXN0KGhvc3RJcCkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIDUuIElmIG9yaWdpbidzIGhvc3QgY29tcG9uZW50IGlzIFwibG9jYWxob3N0XCIgb3IgZmFsbHMgd2l0aGluIFwiLmxvY2FsaG9zdFwiLCBhbmQgdGhlIHVzZXIgYWdlbnQgY29uZm9ybXMgdG8gdGhlIG5hbWUgcmVzb2x1dGlvbiBydWxlcyBpbiBbbGV0LWxvY2FsaG9zdC1iZS1sb2NhbGhvc3RdLCByZXR1cm4gXCJQb3RlbnRpYWxseSBUcnVzdHdvcnRoeVwiLlxuXHQvLyBXZSBhcmUgcmV0dXJuaW5nIEZBTFNFIGhlcmUgYmVjYXVzZSB3ZSBjYW5ub3QgZW5zdXJlIGNvbmZvcm1hbmNlIHRvXG5cdC8vIGxldC1sb2NhbGhvc3QtYmUtbG9hbGhvc3QgKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC13ZXN0LWxldC1sb2NhbGhvc3QtYmUtbG9jYWxob3N0KVxuXHRpZiAodXJsLmhvc3QgPT09ICdsb2NhbGhvc3QnIHx8IHVybC5ob3N0LmVuZHNXaXRoKCcubG9jYWxob3N0JykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyA2LiBJZiBvcmlnaW4ncyBzY2hlbWUgY29tcG9uZW50IGlzIGZpbGUsIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdGlmICh1cmwucHJvdG9jb2wgPT09ICdmaWxlOicpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIDcuIElmIG9yaWdpbidzIHNjaGVtZSBjb21wb25lbnQgaXMgb25lIHdoaWNoIHRoZSB1c2VyIGFnZW50IGNvbnNpZGVycyB0byBiZSBhdXRoZW50aWNhdGVkLCByZXR1cm4gXCJQb3RlbnRpYWxseSBUcnVzdHdvcnRoeVwiLlxuXHQvLyBOb3Qgc3VwcG9ydGVkXG5cblx0Ly8gOC4gSWYgb3JpZ2luIGhhcyBiZWVuIGNvbmZpZ3VyZWQgYXMgYSB0cnVzdHdvcnRoeSBvcmlnaW4sIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdC8vIE5vdCBzdXBwb3J0ZWRcblxuXHQvLyA5LiBSZXR1cm4gXCJOb3QgVHJ1c3R3b3J0aHlcIi5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtc2VjdXJlLWNvbnRleHRzLyNpcy11cmwtdHJ1c3R3b3J0aHl8UmVmZXJyZXIgUG9saWN5IFx1MDBBNzMuMy4gSXMgdXJsIHBvdGVudGlhbGx5IHRydXN0d29ydGh5P31cbiAqIEBwYXJhbSB7ZXh0ZXJuYWw6VVJMfSB1cmxcbiAqIEByZXR1cm5zIGB0cnVlYDogXCJQb3RlbnRpYWxseSBUcnVzdHdvcnRoeVwiLCBgZmFsc2VgOiBcIk5vdCBUcnVzdHdvcnRoeVwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkodXJsKSB7XG5cdC8vIDEuIElmIHVybCBpcyBcImFib3V0OmJsYW5rXCIgb3IgXCJhYm91dDpzcmNkb2NcIiwgcmV0dXJuIFwiUG90ZW50aWFsbHkgVHJ1c3R3b3J0aHlcIi5cblx0aWYgKC9eYWJvdXQ6KGJsYW5rfHNyY2RvYykkLy50ZXN0KHVybCkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIDIuIElmIHVybCdzIHNjaGVtZSBpcyBcImRhdGFcIiwgcmV0dXJuIFwiUG90ZW50aWFsbHkgVHJ1c3R3b3J0aHlcIi5cblx0aWYgKHVybC5wcm90b2NvbCA9PT0gJ2RhdGE6Jykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gTm90ZTogVGhlIG9yaWdpbiBvZiBibG9iOiBhbmQgZmlsZXN5c3RlbTogVVJMcyBpcyB0aGUgb3JpZ2luIG9mIHRoZSBjb250ZXh0IGluIHdoaWNoIHRoZXkgd2VyZVxuXHQvLyBjcmVhdGVkLiBUaGVyZWZvcmUsIGJsb2JzIGNyZWF0ZWQgaW4gYSB0cnVzdHdvcnRoeSBvcmlnaW4gd2lsbCB0aGVtc2VsdmVzIGJlIHBvdGVudGlhbGx5XG5cdC8vIHRydXN0d29ydGh5LlxuXHRpZiAoL14oYmxvYnxmaWxlc3lzdGVtKTokLy50ZXN0KHVybC5wcm90b2NvbCkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIDMuIFJldHVybiB0aGUgcmVzdWx0IG9mIGV4ZWN1dGluZyBcdTAwQTczLjIgSXMgb3JpZ2luIHBvdGVudGlhbGx5IHRydXN0d29ydGh5PyBvbiB1cmwncyBvcmlnaW4uXG5cdHJldHVybiBpc09yaWdpblBvdGVudGlhbGx5VHJ1c3R3b3J0aHkodXJsKTtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcmVmZXJyZXJVUkwgdG8gZW5mb3JjZSBhbnkgZXh0cmEgc2VjdXJpdHkgcG9saWN5IGNvbnNpZGVyYXRpb25zLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1yZWZlcnJlci1wb2xpY3kvI2RldGVybWluZS1yZXF1ZXN0cy1yZWZlcnJlcnxSZWZlcnJlciBQb2xpY3kgXHUwMEE3OC4zLiBEZXRlcm1pbmUgcmVxdWVzdCdzIFJlZmVycmVyfSwgc3RlcCA3XG4gKiBAY2FsbGJhY2sgbW9kdWxlOnV0aWxzL3JlZmVycmVyfnJlZmVycmVyVVJMQ2FsbGJhY2tcbiAqIEBwYXJhbSB7ZXh0ZXJuYWw6VVJMfSByZWZlcnJlclVSTFxuICogQHJldHVybnMge2V4dGVybmFsOlVSTH0gbW9kaWZpZWQgcmVmZXJyZXJVUkxcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSByZWZlcnJlck9yaWdpbiB0byBlbmZvcmNlIGFueSBleHRyYSBzZWN1cml0eSBwb2xpY3kgY29uc2lkZXJhdGlvbnMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjLXJlZmVycmVyLXBvbGljeS8jZGV0ZXJtaW5lLXJlcXVlc3RzLXJlZmVycmVyfFJlZmVycmVyIFBvbGljeSBcdTAwQTc4LjMuIERldGVybWluZSByZXF1ZXN0J3MgUmVmZXJyZXJ9LCBzdGVwIDdcbiAqIEBjYWxsYmFjayBtb2R1bGU6dXRpbHMvcmVmZXJyZXJ+cmVmZXJyZXJPcmlnaW5DYWxsYmFja1xuICogQHBhcmFtIHtleHRlcm5hbDpVUkx9IHJlZmVycmVyT3JpZ2luXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6VVJMfSBtb2RpZmllZCByZWZlcnJlck9yaWdpblxuICovXG5cbi8qKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1yZWZlcnJlci1wb2xpY3kvI2RldGVybWluZS1yZXF1ZXN0cy1yZWZlcnJlcnxSZWZlcnJlciBQb2xpY3kgXHUwMEE3OC4zLiBEZXRlcm1pbmUgcmVxdWVzdCdzIFJlZmVycmVyfVxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHttb2R1bGU6dXRpbHMvcmVmZXJyZXJ+cmVmZXJyZXJVUkxDYWxsYmFja30gby5yZWZlcnJlclVSTENhbGxiYWNrXG4gKiBAcGFyYW0ge21vZHVsZTp1dGlscy9yZWZlcnJlcn5yZWZlcnJlck9yaWdpbkNhbGxiYWNrfSBvLnJlZmVycmVyT3JpZ2luQ2FsbGJhY2tcbiAqIEByZXR1cm5zIHtleHRlcm5hbDpVUkx9IFJlcXVlc3QncyByZWZlcnJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lUmVxdWVzdHNSZWZlcnJlcihyZXF1ZXN0LCB7cmVmZXJyZXJVUkxDYWxsYmFjaywgcmVmZXJyZXJPcmlnaW5DYWxsYmFja30gPSB7fSkge1xuXHQvLyBUaGVyZSBhcmUgMiBub3RlcyBpbiB0aGUgc3BlY2lmaWNhdGlvbiBhYm91dCBpbnZhbGlkIHByZS1jb25kaXRpb25zLiAgV2UgcmV0dXJuIG51bGwsIGhlcmUsIGZvclxuXHQvLyB0aGVzZSBjYXNlczpcblx0Ly8gPiBOb3RlOiBJZiByZXF1ZXN0J3MgcmVmZXJyZXIgaXMgXCJuby1yZWZlcnJlclwiLCBGZXRjaCB3aWxsIG5vdCBjYWxsIGludG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vID4gTm90ZTogSWYgcmVxdWVzdCdzIHJlZmVycmVyIHBvbGljeSBpcyB0aGUgZW1wdHkgc3RyaW5nLCBGZXRjaCB3aWxsIG5vdCBjYWxsIGludG8gdGhpc1xuXHQvLyA+IGFsZ29yaXRobS5cblx0aWYgKHJlcXVlc3QucmVmZXJyZXIgPT09ICduby1yZWZlcnJlcicgfHwgcmVxdWVzdC5yZWZlcnJlclBvbGljeSA9PT0gJycpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIDEuIExldCBwb2xpY3kgYmUgcmVxdWVzdCdzIGFzc29jaWF0ZWQgcmVmZXJyZXIgcG9saWN5LlxuXHRjb25zdCBwb2xpY3kgPSByZXF1ZXN0LnJlZmVycmVyUG9saWN5O1xuXG5cdC8vIDIuIExldCBlbnZpcm9ubWVudCBiZSByZXF1ZXN0J3MgY2xpZW50LlxuXHQvLyBub3QgYXBwbGljYWJsZSB0byBub2RlLmpzXG5cblx0Ly8gMy4gU3dpdGNoIG9uIHJlcXVlc3QncyByZWZlcnJlcjpcblx0aWYgKHJlcXVlc3QucmVmZXJyZXIgPT09ICdhYm91dDpjbGllbnQnKSB7XG5cdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdH1cblxuXHQvLyBcImEgVVJMXCI6IExldCByZWZlcnJlclNvdXJjZSBiZSByZXF1ZXN0J3MgcmVmZXJyZXIuXG5cdGNvbnN0IHJlZmVycmVyU291cmNlID0gcmVxdWVzdC5yZWZlcnJlcjtcblxuXHQvLyA0LiBMZXQgcmVxdWVzdCdzIHJlZmVycmVyVVJMIGJlIHRoZSByZXN1bHQgb2Ygc3RyaXBwaW5nIHJlZmVycmVyU291cmNlIGZvciB1c2UgYXMgYSByZWZlcnJlci5cblx0bGV0IHJlZmVycmVyVVJMID0gc3RyaXBVUkxGb3JVc2VBc0FSZWZlcnJlcihyZWZlcnJlclNvdXJjZSk7XG5cblx0Ly8gNS4gTGV0IHJlZmVycmVyT3JpZ2luIGJlIHRoZSByZXN1bHQgb2Ygc3RyaXBwaW5nIHJlZmVycmVyU291cmNlIGZvciB1c2UgYXMgYSByZWZlcnJlciwgd2l0aCB0aGVcblx0Ly8gICAgb3JpZ2luLW9ubHkgZmxhZyBzZXQgdG8gdHJ1ZS5cblx0bGV0IHJlZmVycmVyT3JpZ2luID0gc3RyaXBVUkxGb3JVc2VBc0FSZWZlcnJlcihyZWZlcnJlclNvdXJjZSwgdHJ1ZSk7XG5cblx0Ly8gNi4gSWYgdGhlIHJlc3VsdCBvZiBzZXJpYWxpemluZyByZWZlcnJlclVSTCBpcyBhIHN0cmluZyB3aG9zZSBsZW5ndGggaXMgZ3JlYXRlciB0aGFuIDQwOTYsIHNldFxuXHQvLyAgICByZWZlcnJlclVSTCB0byByZWZlcnJlck9yaWdpbi5cblx0aWYgKHJlZmVycmVyVVJMLnRvU3RyaW5nKCkubGVuZ3RoID4gNDA5Nikge1xuXHRcdHJlZmVycmVyVVJMID0gcmVmZXJyZXJPcmlnaW47XG5cdH1cblxuXHQvLyA3LiBUaGUgdXNlciBhZ2VudCBNQVkgYWx0ZXIgcmVmZXJyZXJVUkwgb3IgcmVmZXJyZXJPcmlnaW4gYXQgdGhpcyBwb2ludCB0byBlbmZvcmNlIGFyYml0cmFyeVxuXHQvLyAgICBwb2xpY3kgY29uc2lkZXJhdGlvbnMgaW4gdGhlIGludGVyZXN0cyBvZiBtaW5pbWl6aW5nIGRhdGEgbGVha2FnZS4gRm9yIGV4YW1wbGUsIHRoZSB1c2VyXG5cdC8vICAgIGFnZW50IGNvdWxkIHN0cmlwIHRoZSBVUkwgZG93biB0byBhbiBvcmlnaW4sIG1vZGlmeSBpdHMgaG9zdCwgcmVwbGFjZSBpdCB3aXRoIGFuIGVtcHR5XG5cdC8vICAgIHN0cmluZywgZXRjLlxuXHRpZiAocmVmZXJyZXJVUkxDYWxsYmFjaykge1xuXHRcdHJlZmVycmVyVVJMID0gcmVmZXJyZXJVUkxDYWxsYmFjayhyZWZlcnJlclVSTCk7XG5cdH1cblxuXHRpZiAocmVmZXJyZXJPcmlnaW5DYWxsYmFjaykge1xuXHRcdHJlZmVycmVyT3JpZ2luID0gcmVmZXJyZXJPcmlnaW5DYWxsYmFjayhyZWZlcnJlck9yaWdpbik7XG5cdH1cblxuXHQvLyA4LkV4ZWN1dGUgdGhlIHN0YXRlbWVudHMgY29ycmVzcG9uZGluZyB0byB0aGUgdmFsdWUgb2YgcG9saWN5OlxuXHRjb25zdCBjdXJyZW50VVJMID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG5cblx0c3dpdGNoIChwb2xpY3kpIHtcblx0XHRjYXNlICduby1yZWZlcnJlcic6XG5cdFx0XHRyZXR1cm4gJ25vLXJlZmVycmVyJztcblxuXHRcdGNhc2UgJ29yaWdpbic6XG5cdFx0XHRyZXR1cm4gcmVmZXJyZXJPcmlnaW47XG5cblx0XHRjYXNlICd1bnNhZmUtdXJsJzpcblx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblxuXHRcdGNhc2UgJ3N0cmljdC1vcmlnaW4nOlxuXHRcdFx0Ly8gMS4gSWYgcmVmZXJyZXJVUkwgaXMgYSBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeSBVUkwgYW5kIHJlcXVlc3QncyBjdXJyZW50IFVSTCBpcyBub3QgYVxuXHRcdFx0Ly8gICAgcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHkgVVJMLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0XHRcdGlmIChpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkocmVmZXJyZXJVUkwpICYmICFpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkoY3VycmVudFVSTCkpIHtcblx0XHRcdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDIuIFJldHVybiByZWZlcnJlck9yaWdpbi5cblx0XHRcdHJldHVybiByZWZlcnJlck9yaWdpbi50b1N0cmluZygpO1xuXG5cdFx0Y2FzZSAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbic6XG5cdFx0XHQvLyAxLiBJZiB0aGUgb3JpZ2luIG9mIHJlZmVycmVyVVJMIGFuZCB0aGUgb3JpZ2luIG9mIHJlcXVlc3QncyBjdXJyZW50IFVSTCBhcmUgdGhlIHNhbWUsIHRoZW5cblx0XHRcdC8vICAgIHJldHVybiByZWZlcnJlclVSTC5cblx0XHRcdGlmIChyZWZlcnJlclVSTC5vcmlnaW4gPT09IGN1cnJlbnRVUkwub3JpZ2luKSB7XG5cdFx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMi4gSWYgcmVmZXJyZXJVUkwgaXMgYSBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeSBVUkwgYW5kIHJlcXVlc3QncyBjdXJyZW50IFVSTCBpcyBub3QgYVxuXHRcdFx0Ly8gICAgcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHkgVVJMLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0XHRcdGlmIChpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkocmVmZXJyZXJVUkwpICYmICFpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkoY3VycmVudFVSTCkpIHtcblx0XHRcdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDMuIFJldHVybiByZWZlcnJlck9yaWdpbi5cblx0XHRcdHJldHVybiByZWZlcnJlck9yaWdpbjtcblxuXHRcdGNhc2UgJ3NhbWUtb3JpZ2luJzpcblx0XHRcdC8vIDEuIElmIHRoZSBvcmlnaW4gb2YgcmVmZXJyZXJVUkwgYW5kIHRoZSBvcmlnaW4gb2YgcmVxdWVzdCdzIGN1cnJlbnQgVVJMIGFyZSB0aGUgc2FtZSwgdGhlblxuXHRcdFx0Ly8gICAgcmV0dXJuIHJlZmVycmVyVVJMLlxuXHRcdFx0aWYgKHJlZmVycmVyVVJMLm9yaWdpbiA9PT0gY3VycmVudFVSTC5vcmlnaW4pIHtcblx0XHRcdFx0cmV0dXJuIHJlZmVycmVyVVJMO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAyLiBSZXR1cm4gbm8gcmVmZXJyZXIuXG5cdFx0XHRyZXR1cm4gJ25vLXJlZmVycmVyJztcblxuXHRcdGNhc2UgJ29yaWdpbi13aGVuLWNyb3NzLW9yaWdpbic6XG5cdFx0XHQvLyAxLiBJZiB0aGUgb3JpZ2luIG9mIHJlZmVycmVyVVJMIGFuZCB0aGUgb3JpZ2luIG9mIHJlcXVlc3QncyBjdXJyZW50IFVSTCBhcmUgdGhlIHNhbWUsIHRoZW5cblx0XHRcdC8vICAgIHJldHVybiByZWZlcnJlclVSTC5cblx0XHRcdGlmIChyZWZlcnJlclVSTC5vcmlnaW4gPT09IGN1cnJlbnRVUkwub3JpZ2luKSB7XG5cdFx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIHJlZmVycmVyT3JpZ2luLlxuXHRcdFx0cmV0dXJuIHJlZmVycmVyT3JpZ2luO1xuXG5cdFx0Y2FzZSAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnOlxuXHRcdFx0Ly8gMS4gSWYgcmVmZXJyZXJVUkwgaXMgYSBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeSBVUkwgYW5kIHJlcXVlc3QncyBjdXJyZW50IFVSTCBpcyBub3QgYVxuXHRcdFx0Ly8gICAgcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHkgVVJMLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0XHRcdGlmIChpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkocmVmZXJyZXJVUkwpICYmICFpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkoY3VycmVudFVSTCkpIHtcblx0XHRcdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDIuIFJldHVybiByZWZlcnJlclVSTC5cblx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHJlZmVycmVyUG9saWN5OiAke3BvbGljeX1gKTtcblx0fVxufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtcmVmZXJyZXItcG9saWN5LyNwYXJzZS1yZWZlcnJlci1wb2xpY3ktZnJvbS1oZWFkZXJ8UmVmZXJyZXIgUG9saWN5IFx1MDBBNzguMS4gUGFyc2UgYSByZWZlcnJlciBwb2xpY3kgZnJvbSBhIFJlZmVycmVyLVBvbGljeSBoZWFkZXJ9XG4gKiBAcGFyYW0ge0hlYWRlcnN9IGhlYWRlcnMgUmVzcG9uc2UgaGVhZGVyc1xuICogQHJldHVybnMge3N0cmluZ30gcG9saWN5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlZmVycmVyUG9saWN5RnJvbUhlYWRlcihoZWFkZXJzKSB7XG5cdC8vIDEuIExldCBwb2xpY3ktdG9rZW5zIGJlIHRoZSByZXN1bHQgb2YgZXh0cmFjdGluZyBoZWFkZXIgbGlzdCB2YWx1ZXMgZ2l2ZW4gYFJlZmVycmVyLVBvbGljeWBcblx0Ly8gICAgYW5kIHJlc3BvbnNlXHUyMDE5cyBoZWFkZXIgbGlzdC5cblx0Y29uc3QgcG9saWN5VG9rZW5zID0gKGhlYWRlcnMuZ2V0KCdyZWZlcnJlci1wb2xpY3knKSB8fCAnJykuc3BsaXQoL1ssXFxzXSsvKTtcblxuXHQvLyAyLiBMZXQgcG9saWN5IGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdGxldCBwb2xpY3kgPSAnJztcblxuXHQvLyAzLiBGb3IgZWFjaCB0b2tlbiBpbiBwb2xpY3ktdG9rZW5zLCBpZiB0b2tlbiBpcyBhIHJlZmVycmVyIHBvbGljeSBhbmQgdG9rZW4gaXMgbm90IHRoZSBlbXB0eVxuXHQvLyAgICBzdHJpbmcsIHRoZW4gc2V0IHBvbGljeSB0byB0b2tlbi5cblx0Ly8gTm90ZTogVGhpcyBhbGdvcml0aG0gbG9vcHMgb3ZlciBtdWx0aXBsZSBwb2xpY3kgdmFsdWVzIHRvIGFsbG93IGRlcGxveW1lbnQgb2YgbmV3IHBvbGljeVxuXHQvLyB2YWx1ZXMgd2l0aCBmYWxsYmFja3MgZm9yIG9sZGVyIHVzZXIgYWdlbnRzLCBhcyBkZXNjcmliZWQgaW4gXHUwMEE3IDExLjEgVW5rbm93biBQb2xpY3kgVmFsdWVzLlxuXHRmb3IgKGNvbnN0IHRva2VuIG9mIHBvbGljeVRva2Vucykge1xuXHRcdGlmICh0b2tlbiAmJiBSZWZlcnJlclBvbGljeS5oYXModG9rZW4pKSB7XG5cdFx0XHRwb2xpY3kgPSB0b2tlbjtcblx0XHR9XG5cdH1cblxuXHQvLyA0LiBSZXR1cm4gcG9saWN5LlxuXHRyZXR1cm4gcG9saWN5O1xufVxuIiwgIi8qKlxuICogUmVxdWVzdC5qc1xuICpcbiAqIFJlcXVlc3QgY2xhc3MgY29udGFpbnMgc2VydmVyIG9ubHkgb3B0aW9uc1xuICpcbiAqIEFsbCBzcGVjIGFsZ29yaXRobSBzdGVwIG51bWJlcnMgYXJlIGJhc2VkIG9uIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnL2NvbW1pdC1zbmFwc2hvdHMvYWU3MTY4MjJjYjNhNjE4NDMyMjZjZDA5MGVlZmM2NTg5NDQ2YzFkMi8uXG4gKi9cblxuaW1wb3J0IHtmb3JtYXQgYXMgZm9ybWF0VXJsfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQge2RlcHJlY2F0ZX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vaGVhZGVycy5qcyc7XG5pbXBvcnQgQm9keSwge2Nsb25lLCBleHRyYWN0Q29udGVudFR5cGUsIGdldFRvdGFsQnl0ZXN9IGZyb20gJy4vYm9keS5qcyc7XG5pbXBvcnQge2lzQWJvcnRTaWduYWx9IGZyb20gJy4vdXRpbHMvaXMuanMnO1xuaW1wb3J0IHtnZXRTZWFyY2h9IGZyb20gJy4vdXRpbHMvZ2V0LXNlYXJjaC5qcyc7XG5pbXBvcnQge1xuXHR2YWxpZGF0ZVJlZmVycmVyUG9saWN5LCBkZXRlcm1pbmVSZXF1ZXN0c1JlZmVycmVyLCBERUZBVUxUX1JFRkVSUkVSX1BPTElDWVxufSBmcm9tICcuL3V0aWxzL3JlZmVycmVyLmpzJztcblxuY29uc3QgSU5URVJOQUxTID0gU3ltYm9sKCdSZXF1ZXN0IGludGVybmFscycpO1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIGluc3RhbmNlIG9mIFJlcXVlc3QuXG4gKlxuICogQHBhcmFtICB7Kn0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBpc1JlcXVlc3QgPSBvYmplY3QgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIG9iamVjdFtJTlRFUk5BTFNdID09PSAnb2JqZWN0J1xuXHQpO1xufTtcblxuY29uc3QgZG9CYWREYXRhV2FybiA9IGRlcHJlY2F0ZSgoKSA9PiB7fSxcblx0Jy5kYXRhIGlzIG5vdCBhIHZhbGlkIFJlcXVlc3RJbml0IHByb3BlcnR5LCB1c2UgLmJvZHkgaW5zdGVhZCcsXG5cdCdodHRwczovL2dpdGh1Yi5jb20vbm9kZS1mZXRjaC9ub2RlLWZldGNoL2lzc3Vlcy8xMDAwIChyZXF1ZXN0KScpO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3NcbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXF1ZXN0LWNsYXNzXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dCAgVXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIE9iamVjdCAgaW5pdCAgIEN1c3RvbSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBCb2R5IHtcblx0Y29uc3RydWN0b3IoaW5wdXQsIGluaXQgPSB7fSkge1xuXHRcdGxldCBwYXJzZWRVUkw7XG5cblx0XHQvLyBOb3JtYWxpemUgaW5wdXQgYW5kIGZvcmNlIFVSTCB0byBiZSBlbmNvZGVkIGFzIFVURi04IChodHRwczovL2dpdGh1Yi5jb20vbm9kZS1mZXRjaC9ub2RlLWZldGNoL2lzc3Vlcy8yNDUpXG5cdFx0aWYgKGlzUmVxdWVzdChpbnB1dCkpIHtcblx0XHRcdHBhcnNlZFVSTCA9IG5ldyBVUkwoaW5wdXQudXJsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFyc2VkVVJMID0gbmV3IFVSTChpbnB1dCk7XG5cdFx0XHRpbnB1dCA9IHt9O1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZWRVUkwudXNlcm5hbWUgIT09ICcnIHx8IHBhcnNlZFVSTC5wYXNzd29yZCAhPT0gJycpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7cGFyc2VkVVJMfSBpcyBhbiB1cmwgd2l0aCBlbWJlZGRlZCBjcmVkZW50aWFscy5gKTtcblx0XHR9XG5cblx0XHRsZXQgbWV0aG9kID0gaW5pdC5tZXRob2QgfHwgaW5wdXQubWV0aG9kIHx8ICdHRVQnO1xuXHRcdGlmICgvXihkZWxldGV8Z2V0fGhlYWR8b3B0aW9uc3xwb3N0fHB1dCkkL2kudGVzdChtZXRob2QpKSB7XG5cdFx0XHRtZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzUmVxdWVzdChpbml0KSAmJiAnZGF0YScgaW4gaW5pdCkge1xuXHRcdFx0ZG9CYWREYXRhV2FybigpO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLCBlcWVxZXFcblx0XHRpZiAoKGluaXQuYm9keSAhPSBudWxsIHx8IChpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwpKSAmJlxuXHRcdFx0KG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnSEVBRCcpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSZXF1ZXN0IHdpdGggR0VUL0hFQUQgbWV0aG9kIGNhbm5vdCBoYXZlIGJvZHknKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dEJvZHkgPSBpbml0LmJvZHkgP1xuXHRcdFx0aW5pdC5ib2R5IDpcblx0XHRcdChpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwgP1xuXHRcdFx0XHRjbG9uZShpbnB1dCkgOlxuXHRcdFx0XHRudWxsKTtcblxuXHRcdHN1cGVyKGlucHV0Qm9keSwge1xuXHRcdFx0c2l6ZTogaW5pdC5zaXplIHx8IGlucHV0LnNpemUgfHwgMFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQuaGVhZGVycyB8fCBpbnB1dC5oZWFkZXJzIHx8IHt9KTtcblxuXHRcdGlmIChpbnB1dEJvZHkgIT09IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoaW5wdXRCb2R5LCB0aGlzKTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzaWduYWwgPSBpc1JlcXVlc3QoaW5wdXQpID9cblx0XHRcdGlucHV0LnNpZ25hbCA6XG5cdFx0XHRudWxsO1xuXHRcdGlmICgnc2lnbmFsJyBpbiBpbml0KSB7XG5cdFx0XHRzaWduYWwgPSBpbml0LnNpZ25hbDtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCwgZXFlcWVxXG5cdFx0aWYgKHNpZ25hbCAhPSBudWxsICYmICFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHNpZ25hbCB0byBiZSBhbiBpbnN0YW5jZW9mIEFib3J0U2lnbmFsIG9yIEV2ZW50VGFyZ2V0Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gXHUwMEE3NS40LCBSZXF1ZXN0IGNvbnN0cnVjdG9yIHN0ZXBzLCBzdGVwIDE1LjFcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCwgZXFlcWVxXG5cdFx0bGV0IHJlZmVycmVyID0gaW5pdC5yZWZlcnJlciA9PSBudWxsID8gaW5wdXQucmVmZXJyZXIgOiBpbml0LnJlZmVycmVyO1xuXHRcdGlmIChyZWZlcnJlciA9PT0gJycpIHtcblx0XHRcdC8vIFx1MDBBNzUuNCwgUmVxdWVzdCBjb25zdHJ1Y3RvciBzdGVwcywgc3RlcCAxNS4yXG5cdFx0XHRyZWZlcnJlciA9ICduby1yZWZlcnJlcic7XG5cdFx0fSBlbHNlIGlmIChyZWZlcnJlcikge1xuXHRcdFx0Ly8gXHUwMEE3NS40LCBSZXF1ZXN0IGNvbnN0cnVjdG9yIHN0ZXBzLCBzdGVwIDE1LjMuMSwgMTUuMy4yXG5cdFx0XHRjb25zdCBwYXJzZWRSZWZlcnJlciA9IG5ldyBVUkwocmVmZXJyZXIpO1xuXHRcdFx0Ly8gXHUwMEE3NS40LCBSZXF1ZXN0IGNvbnN0cnVjdG9yIHN0ZXBzLCBzdGVwIDE1LjMuMywgMTUuMy40XG5cdFx0XHRyZWZlcnJlciA9IC9eYWJvdXQ6KFxcL1xcLyk/Y2xpZW50JC8udGVzdChwYXJzZWRSZWZlcnJlcikgPyAnY2xpZW50JyA6IHBhcnNlZFJlZmVycmVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWZlcnJlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRyZWRpcmVjdDogaW5pdC5yZWRpcmVjdCB8fCBpbnB1dC5yZWRpcmVjdCB8fCAnZm9sbG93Jyxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRwYXJzZWRVUkwsXG5cdFx0XHRzaWduYWwsXG5cdFx0XHRyZWZlcnJlclxuXHRcdH07XG5cblx0XHQvLyBOb2RlLWZldGNoLW9ubHkgb3B0aW9uc1xuXHRcdHRoaXMuZm9sbG93ID0gaW5pdC5mb2xsb3cgPT09IHVuZGVmaW5lZCA/IChpbnB1dC5mb2xsb3cgPT09IHVuZGVmaW5lZCA/IDIwIDogaW5wdXQuZm9sbG93KSA6IGluaXQuZm9sbG93O1xuXHRcdHRoaXMuY29tcHJlc3MgPSBpbml0LmNvbXByZXNzID09PSB1bmRlZmluZWQgPyAoaW5wdXQuY29tcHJlc3MgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBpbnB1dC5jb21wcmVzcykgOiBpbml0LmNvbXByZXNzO1xuXHRcdHRoaXMuY291bnRlciA9IGluaXQuY291bnRlciB8fCBpbnB1dC5jb3VudGVyIHx8IDA7XG5cdFx0dGhpcy5hZ2VudCA9IGluaXQuYWdlbnQgfHwgaW5wdXQuYWdlbnQ7XG5cdFx0dGhpcy5oaWdoV2F0ZXJNYXJrID0gaW5pdC5oaWdoV2F0ZXJNYXJrIHx8IGlucHV0LmhpZ2hXYXRlck1hcmsgfHwgMTYzODQ7XG5cdFx0dGhpcy5pbnNlY3VyZUhUVFBQYXJzZXIgPSBpbml0Lmluc2VjdXJlSFRUUFBhcnNlciB8fCBpbnB1dC5pbnNlY3VyZUhUVFBQYXJzZXIgfHwgZmFsc2U7XG5cblx0XHQvLyBcdTAwQTc1LjQsIFJlcXVlc3QgY29uc3RydWN0b3Igc3RlcHMsIHN0ZXAgMTYuXG5cdFx0Ly8gRGVmYXVsdCBpcyBlbXB0eSBzdHJpbmcgcGVyIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LXJlcXVlc3QtcmVmZXJyZXItcG9saWN5XG5cdFx0dGhpcy5yZWZlcnJlclBvbGljeSA9IGluaXQucmVmZXJyZXJQb2xpY3kgfHwgaW5wdXQucmVmZXJyZXJQb2xpY3kgfHwgJyc7XG5cdH1cblxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0IG1ldGhvZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLm1ldGhvZDtcblx0fVxuXG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiBmb3JtYXRVcmwodGhpc1tJTlRFUk5BTFNdLnBhcnNlZFVSTCk7XG5cdH1cblxuXHQvKiogQHJldHVybnMge0hlYWRlcnN9ICovXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uaGVhZGVycztcblx0fVxuXG5cdGdldCByZWRpcmVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnJlZGlyZWN0O1xuXHR9XG5cblx0LyoqIEByZXR1cm5zIHtBYm9ydFNpZ25hbH0gKi9cblx0Z2V0IHNpZ25hbCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnNpZ25hbDtcblx0fVxuXG5cdC8vIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdC1yZWZlcnJlclxuXHRnZXQgcmVmZXJyZXIoKSB7XG5cdFx0aWYgKHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlciA9PT0gJ25vLXJlZmVycmVyJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzW0lOVEVSTkFMU10ucmVmZXJyZXIgPT09ICdjbGllbnQnKSB7XG5cdFx0XHRyZXR1cm4gJ2Fib3V0OmNsaWVudCc7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlcikge1xuXHRcdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlci50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHRnZXQgcmVmZXJyZXJQb2xpY3koKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlclBvbGljeTtcblx0fVxuXG5cdHNldCByZWZlcnJlclBvbGljeShyZWZlcnJlclBvbGljeSkge1xuXHRcdHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlclBvbGljeSA9IHZhbGlkYXRlUmVmZXJyZXJQb2xpY3kocmVmZXJyZXJQb2xpY3kpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb25lIHRoaXMgcmVxdWVzdFxuXHQgKlxuXHQgKiBAcmV0dXJuICBSZXF1ZXN0XG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlcXVlc3QodGhpcyk7XG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuICdSZXF1ZXN0Jztcblx0fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXF1ZXN0LnByb3RvdHlwZSwge1xuXHRtZXRob2Q6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0dXJsOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGhlYWRlcnM6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0cmVkaXJlY3Q6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0Y2xvbmU6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0c2lnbmFsOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHJlZmVycmVyOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHJlZmVycmVyUG9saWN5OiB7ZW51bWVyYWJsZTogdHJ1ZX1cbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBSZXF1ZXN0IHRvIE5vZGUuanMgaHR0cCByZXF1ZXN0IG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IC0gQSBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuIFRoZSBvcHRpb25zIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gaHR0cC5yZXF1ZXN0XG4gKi9cbmV4cG9ydCBjb25zdCBnZXROb2RlUmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0ID0+IHtcblx0Y29uc3Qge3BhcnNlZFVSTH0gPSByZXF1ZXN0W0lOVEVSTkFMU107XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0W0lOVEVSTkFMU10uaGVhZGVycyk7XG5cblx0Ly8gRmV0Y2ggc3RlcCAxLjNcblx0aWYgKCFoZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0JywgJyovKicpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXBzIDIuNC0yLjdcblx0bGV0IGNvbnRlbnRMZW5ndGhWYWx1ZSA9IG51bGw7XG5cdGlmIChyZXF1ZXN0LmJvZHkgPT09IG51bGwgJiYgL14ocG9zdHxwdXQpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG5cdFx0Y29udGVudExlbmd0aFZhbHVlID0gJzAnO1xuXHR9XG5cblx0aWYgKHJlcXVlc3QuYm9keSAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IHRvdGFsQnl0ZXMgPSBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpO1xuXHRcdC8vIFNldCBDb250ZW50LUxlbmd0aCBpZiB0b3RhbEJ5dGVzIGlzIGEgbnVtYmVyICh0aGF0IGlzIG5vdCBOYU4pXG5cdFx0aWYgKHR5cGVvZiB0b3RhbEJ5dGVzID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKHRvdGFsQnl0ZXMpKSB7XG5cdFx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSBTdHJpbmcodG90YWxCeXRlcyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGNvbnRlbnRMZW5ndGhWYWx1ZSkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb250ZW50LUxlbmd0aCcsIGNvbnRlbnRMZW5ndGhWYWx1ZSk7XG5cdH1cblxuXHQvLyA0LjEuIE1haW4gZmV0Y2gsIHN0ZXAgMi42XG5cdC8vID4gSWYgcmVxdWVzdCdzIHJlZmVycmVyIHBvbGljeSBpcyB0aGUgZW1wdHkgc3RyaW5nLCB0aGVuIHNldCByZXF1ZXN0J3MgcmVmZXJyZXIgcG9saWN5IHRvIHRoZVxuXHQvLyA+IGRlZmF1bHQgcmVmZXJyZXIgcG9saWN5LlxuXHRpZiAocmVxdWVzdC5yZWZlcnJlclBvbGljeSA9PT0gJycpIHtcblx0XHRyZXF1ZXN0LnJlZmVycmVyUG9saWN5ID0gREVGQVVMVF9SRUZFUlJFUl9QT0xJQ1k7XG5cdH1cblxuXHQvLyA0LjEuIE1haW4gZmV0Y2gsIHN0ZXAgMi43XG5cdC8vID4gSWYgcmVxdWVzdCdzIHJlZmVycmVyIGlzIG5vdCBcIm5vLXJlZmVycmVyXCIsIHNldCByZXF1ZXN0J3MgcmVmZXJyZXIgdG8gdGhlIHJlc3VsdCBvZiBpbnZva2luZ1xuXHQvLyA+IGRldGVybWluZSByZXF1ZXN0J3MgcmVmZXJyZXIuXG5cdGlmIChyZXF1ZXN0LnJlZmVycmVyICYmIHJlcXVlc3QucmVmZXJyZXIgIT09ICduby1yZWZlcnJlcicpIHtcblx0XHRyZXF1ZXN0W0lOVEVSTkFMU10ucmVmZXJyZXIgPSBkZXRlcm1pbmVSZXF1ZXN0c1JlZmVycmVyKHJlcXVlc3QpO1xuXHR9IGVsc2Uge1xuXHRcdHJlcXVlc3RbSU5URVJOQUxTXS5yZWZlcnJlciA9ICduby1yZWZlcnJlcic7XG5cdH1cblxuXHQvLyA0LjUuIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCwgc3RlcCA2Ljlcblx0Ly8gPiBJZiBodHRwUmVxdWVzdCdzIHJlZmVycmVyIGlzIGEgVVJMLCB0aGVuIGFwcGVuZCBgUmVmZXJlcmAvaHR0cFJlcXVlc3QncyByZWZlcnJlciwgc2VyaWFsaXplZFxuXHQvLyA+ICBhbmQgaXNvbW9ycGhpYyBlbmNvZGVkLCB0byBodHRwUmVxdWVzdCdzIGhlYWRlciBsaXN0LlxuXHRpZiAocmVxdWVzdFtJTlRFUk5BTFNdLnJlZmVycmVyIGluc3RhbmNlb2YgVVJMKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1JlZmVyZXInLCByZXF1ZXN0LnJlZmVycmVyKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTFcblx0aWYgKCFoZWFkZXJzLmhhcygnVXNlci1BZ2VudCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnbm9kZS1mZXRjaCcpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xNVxuXHRpZiAocmVxdWVzdC5jb21wcmVzcyAmJiAhaGVhZGVycy5oYXMoJ0FjY2VwdC1FbmNvZGluZycpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdC1FbmNvZGluZycsICdnemlwLCBkZWZsYXRlLCBicicpO1xuXHR9XG5cblx0bGV0IHthZ2VudH0gPSByZXF1ZXN0O1xuXHRpZiAodHlwZW9mIGFnZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0YWdlbnQgPSBhZ2VudChwYXJzZWRVUkwpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgNC4yXG5cdC8vIGNodW5rZWQgZW5jb2RpbmcgaXMgaGFuZGxlZCBieSBOb2RlLmpzXG5cblx0Y29uc3Qgc2VhcmNoID0gZ2V0U2VhcmNoKHBhcnNlZFVSTCk7XG5cblx0Ly8gUGFzcyB0aGUgZnVsbCBVUkwgZGlyZWN0bHkgdG8gcmVxdWVzdCgpLCBidXQgb3ZlcndyaXRlIHRoZSBmb2xsb3dpbmdcblx0Ly8gb3B0aW9uczpcblx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHQvLyBPdmVyd3JpdGUgc2VhcmNoIHRvIHJldGFpbiB0cmFpbGluZyA/IChpc3N1ZSAjNzc2KVxuXHRcdHBhdGg6IHBhcnNlZFVSTC5wYXRobmFtZSArIHNlYXJjaCxcblx0XHQvLyBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIG5vdCBleHByZXNzZWQgaW4gdGhlIFVSTFxuXHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0aGVhZGVyczogaGVhZGVyc1tTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSgpLFxuXHRcdGluc2VjdXJlSFRUUFBhcnNlcjogcmVxdWVzdC5pbnNlY3VyZUhUVFBQYXJzZXIsXG5cdFx0YWdlbnRcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKiBAdHlwZSB7VVJMfSAqL1xuXHRcdHBhcnNlZFVSTCxcblx0XHRvcHRpb25zXG5cdH07XG59O1xuIiwgImltcG9ydCB7RmV0Y2hCYXNlRXJyb3J9IGZyb20gJy4vYmFzZS5qcyc7XG5cbi8qKlxuICogQWJvcnRFcnJvciBpbnRlcmZhY2UgZm9yIGNhbmNlbGxlZCByZXF1ZXN0c1xuICovXG5leHBvcnQgY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEZldGNoQmFzZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSA9ICdhYm9ydGVkJykge1xuXHRcdHN1cGVyKG1lc3NhZ2UsIHR5cGUpO1xuXHR9XG59XG4iLCAiLyoqXG4gKiBJbmRleC5qc1xuICpcbiAqIGEgcmVxdWVzdCBBUEkgY29tcGF0aWJsZSB3aXRoIHdpbmRvdy5mZXRjaFxuICpcbiAqIEFsbCBzcGVjIGFsZ29yaXRobSBzdGVwIG51bWJlcnMgYXJlIGJhc2VkIG9uIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnL2NvbW1pdC1zbmFwc2hvdHMvYWU3MTY4MjJjYjNhNjE4NDMyMjZjZDA5MGVlZmM2NTg5NDQ2YzFkMi8uXG4gKi9cblxuaW1wb3J0IGh0dHAgZnJvbSAnbm9kZTpodHRwJztcbmltcG9ydCBodHRwcyBmcm9tICdub2RlOmh0dHBzJztcbmltcG9ydCB6bGliIGZyb20gJ25vZGU6emxpYic7XG5pbXBvcnQgU3RyZWFtLCB7UGFzc1Rocm91Z2gsIHBpcGVsaW5lIGFzIHB1bXB9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5cbmltcG9ydCBkYXRhVXJpVG9CdWZmZXIgZnJvbSAnZGF0YS11cmktdG8tYnVmZmVyJztcblxuaW1wb3J0IHt3cml0ZVRvU3RyZWFtLCBjbG9uZX0gZnJvbSAnLi9ib2R5LmpzJztcbmltcG9ydCBSZXNwb25zZSBmcm9tICcuL3Jlc3BvbnNlLmpzJztcbmltcG9ydCBIZWFkZXJzLCB7ZnJvbVJhd0hlYWRlcnN9IGZyb20gJy4vaGVhZGVycy5qcyc7XG5pbXBvcnQgUmVxdWVzdCwge2dldE5vZGVSZXF1ZXN0T3B0aW9uc30gZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCB7RmV0Y2hFcnJvcn0gZnJvbSAnLi9lcnJvcnMvZmV0Y2gtZXJyb3IuanMnO1xuaW1wb3J0IHtBYm9ydEVycm9yfSBmcm9tICcuL2Vycm9ycy9hYm9ydC1lcnJvci5qcyc7XG5pbXBvcnQge2lzUmVkaXJlY3R9IGZyb20gJy4vdXRpbHMvaXMtcmVkaXJlY3QuanMnO1xuaW1wb3J0IHtGb3JtRGF0YX0gZnJvbSAnZm9ybWRhdGEtcG9seWZpbGwvZXNtLm1pbi5qcyc7XG5pbXBvcnQge2lzRG9tYWluT3JTdWJkb21haW4sIGlzU2FtZVByb3RvY29sfSBmcm9tICcuL3V0aWxzL2lzLmpzJztcbmltcG9ydCB7cGFyc2VSZWZlcnJlclBvbGljeUZyb21IZWFkZXJ9IGZyb20gJy4vdXRpbHMvcmVmZXJyZXIuanMnO1xuaW1wb3J0IHtcblx0QmxvYixcblx0RmlsZSxcblx0ZmlsZUZyb21TeW5jLFxuXHRmaWxlRnJvbSxcblx0YmxvYkZyb21TeW5jLFxuXHRibG9iRnJvbVxufSBmcm9tICdmZXRjaC1ibG9iL2Zyb20uanMnO1xuXG5leHBvcnQge0Zvcm1EYXRhLCBIZWFkZXJzLCBSZXF1ZXN0LCBSZXNwb25zZSwgRmV0Y2hFcnJvciwgQWJvcnRFcnJvciwgaXNSZWRpcmVjdH07XG5leHBvcnQge0Jsb2IsIEZpbGUsIGZpbGVGcm9tU3luYywgZmlsZUZyb20sIGJsb2JGcm9tU3luYywgYmxvYkZyb219O1xuXG5jb25zdCBzdXBwb3J0ZWRTY2hlbWFzID0gbmV3IFNldChbJ2RhdGE6JywgJ2h0dHA6JywgJ2h0dHBzOiddKTtcblxuLyoqXG4gKiBGZXRjaCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmcgfCBVUkwgfCBpbXBvcnQoJy4vcmVxdWVzdCcpLmRlZmF1bHR9IHVybCAtIEFic29sdXRlIHVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICB7Kn0gW29wdGlvbnNfXSAtIEZldGNoIG9wdGlvbnNcbiAqIEByZXR1cm4gIHtQcm9taXNlPGltcG9ydCgnLi9yZXNwb25zZScpLmRlZmF1bHQ+fVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaCh1cmwsIG9wdGlvbnNfKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Ly8gQnVpbGQgcmVxdWVzdCBvYmplY3Rcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBvcHRpb25zXyk7XG5cdFx0Y29uc3Qge3BhcnNlZFVSTCwgb3B0aW9uc30gPSBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCk7XG5cdFx0aWYgKCFzdXBwb3J0ZWRTY2hlbWFzLmhhcyhwYXJzZWRVUkwucHJvdG9jb2wpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBub2RlLWZldGNoIGNhbm5vdCBsb2FkICR7dXJsfS4gVVJMIHNjaGVtZSBcIiR7cGFyc2VkVVJMLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlZFVSTC5wcm90b2NvbCA9PT0gJ2RhdGE6Jykge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGRhdGFVcmlUb0J1ZmZlcihyZXF1ZXN0LnVybCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IG5ldyBSZXNwb25zZShkYXRhLCB7aGVhZGVyczogeydDb250ZW50LVR5cGUnOiBkYXRhLnR5cGVGdWxsfX0pO1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV3JhcCBodHRwLnJlcXVlc3QgaW50byBmZXRjaFxuXHRcdGNvbnN0IHNlbmQgPSAocGFyc2VkVVJMLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdDtcblx0XHRjb25zdCB7c2lnbmFsfSA9IHJlcXVlc3Q7XG5cdFx0bGV0IHJlc3BvbnNlID0gbnVsbDtcblxuXHRcdGNvbnN0IGFib3J0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgQWJvcnRFcnJvcignVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC4nKTtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRpZiAocmVxdWVzdC5ib2R5ICYmIHJlcXVlc3QuYm9keSBpbnN0YW5jZW9mIFN0cmVhbS5SZWFkYWJsZSkge1xuXHRcdFx0XHRyZXF1ZXN0LmJvZHkuZGVzdHJveShlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNwb25zZS5ib2R5LmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuXHRcdH07XG5cblx0XHRpZiAoc2lnbmFsICYmIHNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFib3J0QW5kRmluYWxpemUgPSAoKSA9PiB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCByZXF1ZXN0XG5cdFx0Y29uc3QgcmVxdWVzdF8gPSBzZW5kKHBhcnNlZFVSTC50b1N0cmluZygpLCBvcHRpb25zKTtcblxuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpbmFsaXplID0gKCkgPT4ge1xuXHRcdFx0cmVxdWVzdF8uYWJvcnQoKTtcblx0XHRcdGlmIChzaWduYWwpIHtcblx0XHRcdFx0c2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJlcXVlc3RfLm9uKCdlcnJvcicsIGVycm9yID0+IHtcblx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnJvci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnJvcikpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9KTtcblxuXHRcdGZpeFJlc3BvbnNlQ2h1bmtlZFRyYW5zZmVyQmFkRW5kaW5nKHJlcXVlc3RfLCBlcnJvciA9PiB7XG5cdFx0XHRpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuYm9keSkge1xuXHRcdFx0XHRyZXNwb25zZS5ib2R5LmRlc3Ryb3koZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0LyogYzggaWdub3JlIG5leHQgMTggKi9cblx0XHRpZiAocHJvY2Vzcy52ZXJzaW9uIDwgJ3YxNCcpIHtcblx0XHRcdC8vIEJlZm9yZSBOb2RlLmpzIDE0LCBwaXBlbGluZSgpIGRvZXMgbm90IGZ1bGx5IHN1cHBvcnQgYXN5bmMgaXRlcmF0b3JzIGFuZCBkb2VzIG5vdCBhbHdheXNcblx0XHRcdC8vIHByb3Blcmx5IGhhbmRsZSB3aGVuIHRoZSBzb2NrZXQgY2xvc2UvZW5kIGV2ZW50cyBhcmUgb3V0IG9mIG9yZGVyLlxuXHRcdFx0cmVxdWVzdF8ub24oJ3NvY2tldCcsIHMgPT4ge1xuXHRcdFx0XHRsZXQgZW5kZWRXaXRoRXZlbnRzQ291bnQ7XG5cdFx0XHRcdHMucHJlcGVuZExpc3RlbmVyKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZW5kZWRXaXRoRXZlbnRzQ291bnQgPSBzLl9ldmVudHNDb3VudDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHMucHJlcGVuZExpc3RlbmVyKCdjbG9zZScsIGhhZEVycm9yID0+IHtcblx0XHRcdFx0XHQvLyBpZiBlbmQgaGFwcGVuZWQgYmVmb3JlIGNsb3NlIGJ1dCB0aGUgc29ja2V0IGRpZG4ndCBlbWl0IGFuIGVycm9yLCBkbyBpdCBub3dcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UgJiYgZW5kZWRXaXRoRXZlbnRzQ291bnQgPCBzLl9ldmVudHNDb3VudCAmJiAhaGFkRXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdQcmVtYXR1cmUgY2xvc2UnKTtcblx0XHRcdFx0XHRcdGVycm9yLmNvZGUgPSAnRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UnO1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UuYm9keS5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdF8ub24oJ3Jlc3BvbnNlJywgcmVzcG9uc2VfID0+IHtcblx0XHRcdHJlcXVlc3RfLnNldFRpbWVvdXQoMCk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gZnJvbVJhd0hlYWRlcnMocmVzcG9uc2VfLnJhd0hlYWRlcnMpO1xuXG5cdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNVxuXHRcdFx0aWYgKGlzUmVkaXJlY3QocmVzcG9uc2VfLnN0YXR1c0NvZGUpKSB7XG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjJcblx0XHRcdFx0Y29uc3QgbG9jYXRpb24gPSBoZWFkZXJzLmdldCgnTG9jYXRpb24nKTtcblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4zXG5cdFx0XHRcdGxldCBsb2NhdGlvblVSTCA9IG51bGw7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bG9jYXRpb25VUkwgPSBsb2NhdGlvbiA9PT0gbnVsbCA/IG51bGwgOiBuZXcgVVJMKGxvY2F0aW9uLCByZXF1ZXN0LnVybCk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGVycm9yIGhlcmUgY2FuIG9ubHkgYmUgaW52YWxpZCBVUkwgaW4gTG9jYXRpb246IGhlYWRlclxuXHRcdFx0XHRcdC8vIGRvIG5vdCB0aHJvdyB3aGVuIG9wdGlvbnMucmVkaXJlY3QgPT0gbWFudWFsXG5cdFx0XHRcdFx0Ly8gbGV0IHRoZSB1c2VyIGV4dHJhY3QgdGhlIGVycm9ybmVvdXMgcmVkaXJlY3QgVVJMXG5cdFx0XHRcdFx0aWYgKHJlcXVlc3QucmVkaXJlY3QgIT09ICdtYW51YWwnKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHVyaSByZXF1ZXN0ZWQgcmVzcG9uZHMgd2l0aCBhbiBpbnZhbGlkIHJlZGlyZWN0IFVSTDogJHtsb2NhdGlvbn1gLCAnaW52YWxpZC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuNVxuXHRcdFx0XHRzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHVyaSByZXF1ZXN0ZWQgcmVzcG9uZHMgd2l0aCBhIHJlZGlyZWN0LCByZWRpcmVjdCBtb2RlIGlzIHNldCB0byBlcnJvcjogJHtyZXF1ZXN0LnVybH1gLCAnbm8tcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdGNhc2UgJ21hbnVhbCc6XG5cdFx0XHRcdFx0XHQvLyBOb3RoaW5nIHRvIGRvXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmb2xsb3cnOiB7XG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNVxuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3QuY291bnRlciA+PSByZXF1ZXN0LmZvbGxvdykge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG1heGltdW0gcmVkaXJlY3QgcmVhY2hlZCBhdDogJHtyZXF1ZXN0LnVybH1gLCAnbWF4LXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA2IChjb3VudGVyIGluY3JlbWVudClcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIG5ldyBSZXF1ZXN0IG9iamVjdC5cblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuXHRcdFx0XHRcdFx0XHRmb2xsb3c6IHJlcXVlc3QuZm9sbG93LFxuXHRcdFx0XHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIgKyAxLFxuXHRcdFx0XHRcdFx0XHRhZ2VudDogcmVxdWVzdC5hZ2VudCxcblx0XHRcdFx0XHRcdFx0Y29tcHJlc3M6IHJlcXVlc3QuY29tcHJlc3MsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IGNsb25lKHJlcXVlc3QpLFxuXHRcdFx0XHRcdFx0XHRzaWduYWw6IHJlcXVlc3Quc2lnbmFsLFxuXHRcdFx0XHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemUsXG5cdFx0XHRcdFx0XHRcdHJlZmVycmVyOiByZXF1ZXN0LnJlZmVycmVyLFxuXHRcdFx0XHRcdFx0XHRyZWZlcnJlclBvbGljeTogcmVxdWVzdC5yZWZlcnJlclBvbGljeVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gd2hlbiBmb3J3YXJkaW5nIHNlbnNpdGl2ZSBoZWFkZXJzIGxpa2UgXCJBdXRob3JpemF0aW9uXCIsXG5cdFx0XHRcdFx0XHQvLyBcIldXVy1BdXRoZW50aWNhdGVcIiwgYW5kIFwiQ29va2llXCIgdG8gdW50cnVzdGVkIHRhcmdldHMsXG5cdFx0XHRcdFx0XHQvLyBoZWFkZXJzIHdpbGwgYmUgaWdub3JlZCB3aGVuIGZvbGxvd2luZyBhIHJlZGlyZWN0IHRvIGEgZG9tYWluXG5cdFx0XHRcdFx0XHQvLyB0aGF0IGlzIG5vdCBhIHN1YmRvbWFpbiBtYXRjaCBvciBleGFjdCBtYXRjaCBvZiB0aGUgaW5pdGlhbCBkb21haW4uXG5cdFx0XHRcdFx0XHQvLyBGb3IgZXhhbXBsZSwgYSByZWRpcmVjdCBmcm9tIFwiZm9vLmNvbVwiIHRvIGVpdGhlciBcImZvby5jb21cIiBvciBcInN1Yi5mb28uY29tXCJcblx0XHRcdFx0XHRcdC8vIHdpbGwgZm9yd2FyZCB0aGUgc2Vuc2l0aXZlIGhlYWRlcnMsIGJ1dCBhIHJlZGlyZWN0IHRvIFwiYmFyLmNvbVwiIHdpbGwgbm90LlxuXHRcdFx0XHRcdFx0Ly8gaGVhZGVycyB3aWxsIGFsc28gYmUgaWdub3JlZCB3aGVuIGZvbGxvd2luZyBhIHJlZGlyZWN0IHRvIGEgZG9tYWluIHVzaW5nXG5cdFx0XHRcdFx0XHQvLyBhIGRpZmZlcmVudCBwcm90b2NvbC4gRm9yIGV4YW1wbGUsIGEgcmVkaXJlY3QgZnJvbSBcImh0dHBzOi8vZm9vLmNvbVwiIHRvIFwiaHR0cDovL2Zvby5jb21cIlxuXHRcdFx0XHRcdFx0Ly8gd2lsbCBub3QgZm9yd2FyZCB0aGUgc2Vuc2l0aXZlIGhlYWRlcnNcblx0XHRcdFx0XHRcdGlmICghaXNEb21haW5PclN1YmRvbWFpbihyZXF1ZXN0LnVybCwgbG9jYXRpb25VUkwpIHx8ICFpc1NhbWVQcm90b2NvbChyZXF1ZXN0LnVybCwgbG9jYXRpb25VUkwpKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbmFtZSBvZiBbJ2F1dGhvcml6YXRpb24nLCAnd3d3LWF1dGhlbnRpY2F0ZScsICdjb29raWUnLCAnY29va2llMiddKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdGlvbnMuaGVhZGVycy5kZWxldGUobmFtZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDlcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZV8uc3RhdHVzQ29kZSAhPT0gMzAzICYmIHJlcXVlc3QuYm9keSAmJiBvcHRpb25zXy5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcignQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW0nLCAndW5zdXBwb3J0ZWQtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDExXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwMyB8fCAoKHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAzMDEgfHwgcmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwMikgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLmJvZHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuZGVsZXRlKCdjb250ZW50LWxlbmd0aCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTRcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlUmVmZXJyZXJQb2xpY3kgPSBwYXJzZVJlZmVycmVyUG9saWN5RnJvbUhlYWRlcihoZWFkZXJzKTtcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZVJlZmVycmVyUG9saWN5KSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLnJlZmVycmVyUG9saWN5ID0gcmVzcG9uc2VSZWZlcnJlclBvbGljeTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDE1XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZldGNoKG5ldyBSZXF1ZXN0KGxvY2F0aW9uVVJMLCByZXF1ZXN0T3B0aW9ucykpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcihgUmVkaXJlY3Qgb3B0aW9uICcke3JlcXVlc3QucmVkaXJlY3R9JyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBvZiBSZXF1ZXN0UmVkaXJlY3RgKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUHJlcGFyZSByZXNwb25zZVxuXHRcdFx0aWYgKHNpZ25hbCkge1xuXHRcdFx0XHRyZXNwb25zZV8ub25jZSgnZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGJvZHkgPSBwdW1wKHJlc3BvbnNlXywgbmV3IFBhc3NUaHJvdWdoKCksIGVycm9yID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvMjkzNzZcblx0XHRcdC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cblx0XHRcdGlmIChwcm9jZXNzLnZlcnNpb24gPCAndjEyLjEwJykge1xuXHRcdFx0XHRyZXNwb25zZV8ub24oJ2Fib3J0ZWQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcG9uc2VPcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHJlcXVlc3QudXJsLFxuXHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlXy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZV8uc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0aGVhZGVycyxcblx0XHRcdFx0c2l6ZTogcmVxdWVzdC5zaXplLFxuXHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIsXG5cdFx0XHRcdGhpZ2hXYXRlck1hcms6IHJlcXVlc3QuaGlnaFdhdGVyTWFya1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjNcblx0XHRcdGNvbnN0IGNvZGluZ3MgPSBoZWFkZXJzLmdldCgnQ29udGVudC1FbmNvZGluZycpO1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuNDogaGFuZGxlIGNvbnRlbnQgY29kaW5nc1xuXG5cdFx0XHQvLyBpbiBmb2xsb3dpbmcgc2NlbmFyaW9zIHdlIGlnbm9yZSBjb21wcmVzc2lvbiBzdXBwb3J0XG5cdFx0XHQvLyAxLiBjb21wcmVzc2lvbiBzdXBwb3J0IGlzIGRpc2FibGVkXG5cdFx0XHQvLyAyLiBIRUFEIHJlcXVlc3Rcblx0XHRcdC8vIDMuIG5vIENvbnRlbnQtRW5jb2RpbmcgaGVhZGVyXG5cdFx0XHQvLyA0LiBubyBjb250ZW50IHJlc3BvbnNlICgyMDQpXG5cdFx0XHQvLyA1LiBjb250ZW50IG5vdCBtb2RpZmllZCByZXNwb25zZSAoMzA0KVxuXHRcdFx0aWYgKCFyZXF1ZXN0LmNvbXByZXNzIHx8IHJlcXVlc3QubWV0aG9kID09PSAnSEVBRCcgfHwgY29kaW5ncyA9PT0gbnVsbCB8fCByZXNwb25zZV8uc3RhdHVzQ29kZSA9PT0gMjA0IHx8IHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAzMDQpIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2VPcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yIE5vZGUgdjYrXG5cdFx0XHQvLyBCZSBsZXNzIHN0cmljdCB3aGVuIGRlY29kaW5nIGNvbXByZXNzZWQgcmVzcG9uc2VzLCBzaW5jZSBzb21ldGltZXNcblx0XHRcdC8vIHNlcnZlcnMgc2VuZCBzbGlnaHRseSBpbnZhbGlkIHJlc3BvbnNlcyB0aGF0IGFyZSBzdGlsbCBhY2NlcHRlZFxuXHRcdFx0Ly8gYnkgY29tbW9uIGJyb3dzZXJzLlxuXHRcdFx0Ly8gQWx3YXlzIHVzaW5nIFpfU1lOQ19GTFVTSCBpcyB3aGF0IGNVUkwgZG9lcy5cblx0XHRcdGNvbnN0IHpsaWJPcHRpb25zID0ge1xuXHRcdFx0XHRmbHVzaDogemxpYi5aX1NZTkNfRkxVU0gsXG5cdFx0XHRcdGZpbmlzaEZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gRm9yIGd6aXBcblx0XHRcdGlmIChjb2RpbmdzID09PSAnZ3ppcCcgfHwgY29kaW5ncyA9PT0gJ3gtZ3ppcCcpIHtcblx0XHRcdFx0Ym9keSA9IHB1bXAoYm9keSwgemxpYi5jcmVhdGVHdW56aXAoemxpYk9wdGlvbnMpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBkZWZsYXRlXG5cdFx0XHRpZiAoY29kaW5ncyA9PT0gJ2RlZmxhdGUnIHx8IGNvZGluZ3MgPT09ICd4LWRlZmxhdGUnKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgaW5mYW1vdXMgcmF3IGRlZmxhdGUgcmVzcG9uc2UgZnJvbSBvbGQgc2VydmVyc1xuXHRcdFx0XHQvLyBhIGhhY2sgZm9yIG9sZCBJSVMgYW5kIEFwYWNoZSBzZXJ2ZXJzXG5cdFx0XHRcdGNvbnN0IHJhdyA9IHB1bXAocmVzcG9uc2VfLCBuZXcgUGFzc1Rocm91Z2goKSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyYXcub25jZSgnZGF0YScsIGNodW5rID0+IHtcblx0XHRcdFx0XHQvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzUxOTgyOFxuXHRcdFx0XHRcdGlmICgoY2h1bmtbMF0gJiAweDBGKSA9PT0gMHgwOCkge1xuXHRcdFx0XHRcdFx0Ym9keSA9IHB1bXAoYm9keSwgemxpYi5jcmVhdGVJbmZsYXRlKCksIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBwdW1wKGJvZHksIHpsaWIuY3JlYXRlSW5mbGF0ZVJhdygpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyYXcub25jZSgnZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdC8vIFNvbWUgb2xkIElJUyBzZXJ2ZXJzIHJldHVybiB6ZXJvLWxlbmd0aCBPSyBkZWZsYXRlIHJlc3BvbnNlcywgc29cblx0XHRcdFx0XHQvLyAnZGF0YScgaXMgbmV2ZXIgZW1pdHRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gvcHVsbC85MDNcblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgYnJcblx0XHRcdGlmIChjb2RpbmdzID09PSAnYnInKSB7XG5cdFx0XHRcdGJvZHkgPSBwdW1wKGJvZHksIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIE90aGVyd2lzZSwgdXNlIHJlc3BvbnNlIGFzLWlzXG5cdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tdGhlblxuXHRcdHdyaXRlVG9TdHJlYW0ocmVxdWVzdF8sIHJlcXVlc3QpLmNhdGNoKHJlamVjdCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBmaXhSZXNwb25zZUNodW5rZWRUcmFuc2ZlckJhZEVuZGluZyhyZXF1ZXN0LCBlcnJvckNhbGxiYWNrKSB7XG5cdGNvbnN0IExBU1RfQ0hVTksgPSBCdWZmZXIuZnJvbSgnMFxcclxcblxcclxcbicpO1xuXG5cdGxldCBpc0NodW5rZWRUcmFuc2ZlciA9IGZhbHNlO1xuXHRsZXQgcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQgPSBmYWxzZTtcblx0bGV0IHByZXZpb3VzQ2h1bms7XG5cblx0cmVxdWVzdC5vbigncmVzcG9uc2UnLCByZXNwb25zZSA9PiB7XG5cdFx0Y29uc3Qge2hlYWRlcnN9ID0gcmVzcG9uc2U7XG5cdFx0aXNDaHVua2VkVHJhbnNmZXIgPSBoZWFkZXJzWyd0cmFuc2Zlci1lbmNvZGluZyddID09PSAnY2h1bmtlZCcgJiYgIWhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ107XG5cdH0pO1xuXG5cdHJlcXVlc3Qub24oJ3NvY2tldCcsIHNvY2tldCA9PiB7XG5cdFx0Y29uc3Qgb25Tb2NrZXRDbG9zZSA9ICgpID0+IHtcblx0XHRcdGlmIChpc0NodW5rZWRUcmFuc2ZlciAmJiAhcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQpIHtcblx0XHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ1ByZW1hdHVyZSBjbG9zZScpO1xuXHRcdFx0XHRlcnJvci5jb2RlID0gJ0VSUl9TVFJFQU1fUFJFTUFUVVJFX0NMT1NFJztcblx0XHRcdFx0ZXJyb3JDYWxsYmFjayhlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uRGF0YSA9IGJ1ZiA9PiB7XG5cdFx0XHRwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCA9IEJ1ZmZlci5jb21wYXJlKGJ1Zi5zbGljZSgtNSksIExBU1RfQ0hVTkspID09PSAwO1xuXG5cdFx0XHQvLyBTb21ldGltZXMgZmluYWwgMC1sZW5ndGggY2h1bmsgYW5kIGVuZCBvZiBtZXNzYWdlIGNvZGUgYXJlIGluIHNlcGFyYXRlIHBhY2tldHNcblx0XHRcdGlmICghcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQgJiYgcHJldmlvdXNDaHVuaykge1xuXHRcdFx0XHRwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCA9IChcblx0XHRcdFx0XHRCdWZmZXIuY29tcGFyZShwcmV2aW91c0NodW5rLnNsaWNlKC0zKSwgTEFTVF9DSFVOSy5zbGljZSgwLCAzKSkgPT09IDAgJiZcblx0XHRcdFx0XHRCdWZmZXIuY29tcGFyZShidWYuc2xpY2UoLTIpLCBMQVNUX0NIVU5LLnNsaWNlKDMpKSA9PT0gMFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmV2aW91c0NodW5rID0gYnVmO1xuXHRcdH07XG5cblx0XHRzb2NrZXQucHJlcGVuZExpc3RlbmVyKCdjbG9zZScsIG9uU29ja2V0Q2xvc2UpO1xuXHRcdHNvY2tldC5vbignZGF0YScsIG9uRGF0YSk7XG5cblx0XHRyZXF1ZXN0Lm9uKCdjbG9zZScsICgpID0+IHtcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvblNvY2tldENsb3NlKTtcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uRGF0YSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU0sU0FBVSxnQkFBZ0IsS0FBVztBQUMxQyxNQUFJLENBQUMsVUFBVSxLQUFLLEdBQUcsR0FBRztBQUN6QixVQUFNLElBQUksVUFDVCxrRUFBa0U7O0FBS3BFLFFBQU0sSUFBSSxRQUFRLFVBQVUsRUFBRTtBQUc5QixRQUFNLGFBQWEsSUFBSSxRQUFRLEdBQUc7QUFDbEMsTUFBSSxlQUFlLE1BQU0sY0FBYyxHQUFHO0FBQ3pDLFVBQU0sSUFBSSxVQUFVLHFCQUFxQjs7QUFJMUMsUUFBTSxPQUFPLElBQUksVUFBVSxHQUFHLFVBQVUsRUFBRSxNQUFNLEdBQUc7QUFFbkQsTUFBSSxVQUFVO0FBQ2QsTUFBSSxTQUFTO0FBQ2IsUUFBTSxPQUFPLEtBQUssQ0FBQyxLQUFLO0FBQ3hCLE1BQUksV0FBVztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDckMsUUFBSSxLQUFLLENBQUMsTUFBTSxVQUFVO0FBQ3pCLGVBQVM7ZUFDQSxLQUFLLENBQUMsR0FBRztBQUNsQixrQkFBWSxJQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFVBQUksS0FBSyxDQUFDLEVBQUUsUUFBUSxVQUFVLE1BQU0sR0FBRztBQUN0QyxrQkFBVSxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUM7Ozs7QUFLaEMsTUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxRQUFRO0FBQ2hDLGdCQUFZO0FBQ1osY0FBVTs7QUFJWCxRQUFNLFdBQVcsU0FBUyxXQUFXO0FBQ3JDLFFBQU0sT0FBTyxTQUFTLElBQUksVUFBVSxhQUFhLENBQUMsQ0FBQztBQUNuRCxRQUFNLFNBQVMsT0FBTyxLQUFLLE1BQU0sUUFBUTtBQUd6QyxTQUFPLE9BQU87QUFDZCxTQUFPLFdBQVc7QUFHbEIsU0FBTyxVQUFVO0FBRWpCLFNBQU87QUFDUjtBQTNEQSxJQTZEQTtBQTdEQTs7QUE2REEsSUFBQSxlQUFlOzs7OztBQ25FZixJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0saUJBQU4sY0FBNkIsTUFBTTtBQUFBLE1BQ3pDLFlBQVksU0FBUyxNQUFNO0FBQzFCLGNBQU0sT0FBTztBQUViLGNBQU0sa0JBQWtCLE1BQU0sS0FBSyxXQUFXO0FBRTlDLGFBQUssT0FBTztBQUFBLE1BQ2I7QUFBQSxNQUVBLElBQUksT0FBTztBQUNWLGVBQU8sS0FBSyxZQUFZO0FBQUEsTUFDekI7QUFBQSxNQUVBLEtBQUssT0FBTyxXQUFXLElBQUk7QUFDMUIsZUFBTyxLQUFLLFlBQVk7QUFBQSxNQUN6QjtBQUFBLElBQ0Q7QUFBQTtBQUFBOzs7QUNoQkEsSUFVYTtBQVZiO0FBQUE7QUFDQTtBQVNPLElBQU0sYUFBTixjQUF5QixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTTlDLFlBQVksU0FBUyxNQUFNLGFBQWE7QUFDdkMsY0FBTSxTQUFTLElBQUk7QUFFbkIsWUFBSSxhQUFhO0FBRWhCLGVBQUssT0FBTyxLQUFLLFFBQVEsWUFBWTtBQUNyQyxlQUFLLGlCQUFpQixZQUFZO0FBQUEsUUFDbkM7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBO0FBQUE7OztBQ3pCQSxJQU1NLE1BUU8sdUJBbUJBLFFBaUJBLGVBaUJBLHFCQWNBO0FBakZiO0FBQUE7QUFNQSxJQUFNLE9BQU8sT0FBTztBQVFiLElBQU0sd0JBQXdCLFlBQVU7QUFDOUMsYUFDQyxPQUFPLFdBQVcsWUFDbEIsT0FBTyxPQUFPLFdBQVcsY0FDekIsT0FBTyxPQUFPLFdBQVcsY0FDekIsT0FBTyxPQUFPLFFBQVEsY0FDdEIsT0FBTyxPQUFPLFdBQVcsY0FDekIsT0FBTyxPQUFPLFFBQVEsY0FDdEIsT0FBTyxPQUFPLFFBQVEsY0FDdEIsT0FBTyxPQUFPLFNBQVMsY0FDdkIsT0FBTyxJQUFJLE1BQU07QUFBQSxJQUVuQjtBQU9PLElBQU0sU0FBUyxZQUFVO0FBQy9CLGFBQ0MsVUFDQSxPQUFPLFdBQVcsWUFDbEIsT0FBTyxPQUFPLGdCQUFnQixjQUM5QixPQUFPLE9BQU8sU0FBUyxZQUN2QixPQUFPLE9BQU8sV0FBVyxjQUN6QixPQUFPLE9BQU8sZ0JBQWdCLGNBQzlCLGdCQUFnQixLQUFLLE9BQU8sSUFBSSxDQUFDO0FBQUEsSUFFbkM7QUFPTyxJQUFNLGdCQUFnQixZQUFVO0FBQ3RDLGFBQ0MsT0FBTyxXQUFXLGFBQ2pCLE9BQU8sSUFBSSxNQUFNLGlCQUNqQixPQUFPLElBQUksTUFBTTtBQUFBLElBR3BCO0FBVU8sSUFBTSxzQkFBc0IsQ0FBQyxhQUFhLGFBQWE7QUFDN0QsWUFBTSxPQUFPLElBQUksSUFBSSxRQUFRLEVBQUU7QUFDL0IsWUFBTSxPQUFPLElBQUksSUFBSSxXQUFXLEVBQUU7QUFFbEMsYUFBTyxTQUFTLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxFQUFFO0FBQUEsSUFDakQ7QUFTTyxJQUFNLGlCQUFpQixDQUFDLGFBQWEsYUFBYTtBQUN4RCxZQUFNLE9BQU8sSUFBSSxJQUFJLFFBQVEsRUFBRTtBQUMvQixZQUFNLE9BQU8sSUFBSSxJQUFJLFdBQVcsRUFBRTtBQUVsQyxhQUFPLFNBQVM7QUFBQSxJQUNqQjtBQUFBO0FBQUE7OztBQy9FQSxPQUFPLFVBQVMsbUJBQWtCO0FBQ2xDLFNBQVEsT0FBTyxXQUFXLGlCQUFnQjtBQUMxQyxTQUFRLFVBQUFBLGVBQWE7QUF3THJCLGVBQWUsWUFBWSxNQUFNO0FBQ2hDLE1BQUksS0FBSyxTQUFTLEVBQUUsV0FBVztBQUM5QixVQUFNLElBQUksVUFBVSwwQkFBMEIsS0FBSyxHQUFHLEVBQUU7QUFBQSxFQUN6RDtBQUVBLE9BQUssU0FBUyxFQUFFLFlBQVk7QUFFNUIsTUFBSSxLQUFLLFNBQVMsRUFBRSxPQUFPO0FBQzFCLFVBQU0sS0FBSyxTQUFTLEVBQUU7QUFBQSxFQUN2QjtBQUVBLFFBQU0sRUFBQyxLQUFJLElBQUk7QUFHZixNQUFJLFNBQVMsTUFBTTtBQUNsQixXQUFPQSxRQUFPLE1BQU0sQ0FBQztBQUFBLEVBQ3RCO0FBR0EsTUFBSSxFQUFFLGdCQUFnQixTQUFTO0FBQzlCLFdBQU9BLFFBQU8sTUFBTSxDQUFDO0FBQUEsRUFDdEI7QUFJQSxRQUFNLFFBQVEsQ0FBQztBQUNmLE1BQUksYUFBYTtBQUVqQixNQUFJO0FBQ0gscUJBQWlCLFNBQVMsTUFBTTtBQUMvQixVQUFJLEtBQUssT0FBTyxLQUFLLGFBQWEsTUFBTSxTQUFTLEtBQUssTUFBTTtBQUMzRCxjQUFNLFFBQVEsSUFBSSxXQUFXLG1CQUFtQixLQUFLLEdBQUcsZ0JBQWdCLEtBQUssSUFBSSxJQUFJLFVBQVU7QUFDL0YsYUFBSyxRQUFRLEtBQUs7QUFDbEIsY0FBTTtBQUFBLE1BQ1A7QUFFQSxvQkFBYyxNQUFNO0FBQ3BCLFlBQU0sS0FBSyxLQUFLO0FBQUEsSUFDakI7QUFBQSxFQUNELFNBQVMsT0FBTztBQUNmLFVBQU0sU0FBUyxpQkFBaUIsaUJBQWlCLFFBQVEsSUFBSSxXQUFXLCtDQUErQyxLQUFLLEdBQUcsS0FBSyxNQUFNLE9BQU8sSUFBSSxVQUFVLEtBQUs7QUFDcEssVUFBTTtBQUFBLEVBQ1A7QUFFQSxNQUFJLEtBQUssa0JBQWtCLFFBQVEsS0FBSyxlQUFlLFVBQVUsTUFBTTtBQUN0RSxRQUFJO0FBQ0gsVUFBSSxNQUFNLE1BQU0sT0FBSyxPQUFPLE1BQU0sUUFBUSxHQUFHO0FBQzVDLGVBQU9BLFFBQU8sS0FBSyxNQUFNLEtBQUssRUFBRSxDQUFDO0FBQUEsTUFDbEM7QUFFQSxhQUFPQSxRQUFPLE9BQU8sT0FBTyxVQUFVO0FBQUEsSUFDdkMsU0FBUyxPQUFPO0FBQ2YsWUFBTSxJQUFJLFdBQVcsa0RBQWtELEtBQUssR0FBRyxLQUFLLE1BQU0sT0FBTyxJQUFJLFVBQVUsS0FBSztBQUFBLElBQ3JIO0FBQUEsRUFDRCxPQUFPO0FBQ04sVUFBTSxJQUFJLFdBQVcsNERBQTRELEtBQUssR0FBRyxFQUFFO0FBQUEsRUFDNUY7QUFDRDtBQTFQQSxJQWtCTSxVQUNBLFdBV2UsTUFxT1IsT0EwQlAsNEJBZ0JPLG9CQXFEQSxlQWtDQTtBQXBZYjtBQUFBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU0sV0FBVyxVQUFVLE9BQU8sUUFBUTtBQUMxQyxJQUFNLFlBQVksdUJBQU8sZ0JBQWdCO0FBV3pDLElBQXFCLE9BQXJCLE1BQTBCO0FBQUEsTUFDekIsWUFBWSxNQUFNO0FBQUEsUUFDakIsT0FBTztBQUFBLE1BQ1IsSUFBSSxDQUFDLEdBQUc7QUFDUCxZQUFJLFdBQVc7QUFFZixZQUFJLFNBQVMsTUFBTTtBQUVsQixpQkFBTztBQUFBLFFBQ1IsV0FBVyxzQkFBc0IsSUFBSSxHQUFHO0FBRXZDLGlCQUFPQSxRQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFBQSxRQUNuQyxXQUFXLE9BQU8sSUFBSSxHQUFHO0FBQUEsUUFFekIsV0FBV0EsUUFBTyxTQUFTLElBQUksR0FBRztBQUFBLFFBRWxDLFdBQVcsTUFBTSxpQkFBaUIsSUFBSSxHQUFHO0FBRXhDLGlCQUFPQSxRQUFPLEtBQUssSUFBSTtBQUFBLFFBQ3hCLFdBQVcsWUFBWSxPQUFPLElBQUksR0FBRztBQUVwQyxpQkFBT0EsUUFBTyxLQUFLLEtBQUssUUFBUSxLQUFLLFlBQVksS0FBSyxVQUFVO0FBQUEsUUFDakUsV0FBVyxnQkFBZ0IsUUFBUTtBQUFBLFFBRW5DLFdBQVcsZ0JBQWdCLFVBQVU7QUFFcEMsaUJBQU8sZUFBZSxJQUFJO0FBQzFCLHFCQUFXLEtBQUssS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUEsUUFDbEMsT0FBTztBQUdOLGlCQUFPQSxRQUFPLEtBQUssT0FBTyxJQUFJLENBQUM7QUFBQSxRQUNoQztBQUVBLFlBQUksU0FBUztBQUViLFlBQUlBLFFBQU8sU0FBUyxJQUFJLEdBQUc7QUFDMUIsbUJBQVMsT0FBTyxTQUFTLEtBQUssSUFBSTtBQUFBLFFBQ25DLFdBQVcsT0FBTyxJQUFJLEdBQUc7QUFDeEIsbUJBQVMsT0FBTyxTQUFTLEtBQUssS0FBSyxPQUFPLENBQUM7QUFBQSxRQUM1QztBQUVBLGFBQUssU0FBUyxJQUFJO0FBQUEsVUFDakI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0EsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFFBQ1I7QUFDQSxhQUFLLE9BQU87QUFFWixZQUFJLGdCQUFnQixRQUFRO0FBQzNCLGVBQUssR0FBRyxTQUFTLFlBQVU7QUFDMUIsa0JBQU0sUUFBUSxrQkFBa0IsaUJBQy9CLFNBQ0EsSUFBSSxXQUFXLCtDQUErQyxLQUFLLEdBQUcsS0FBSyxPQUFPLE9BQU8sSUFBSSxVQUFVLE1BQU07QUFDOUcsaUJBQUssU0FBUyxFQUFFLFFBQVE7QUFBQSxVQUN6QixDQUFDO0FBQUEsUUFDRjtBQUFBLE1BQ0Q7QUFBQSxNQUVBLElBQUksT0FBTztBQUNWLGVBQU8sS0FBSyxTQUFTLEVBQUU7QUFBQSxNQUN4QjtBQUFBLE1BRUEsSUFBSSxXQUFXO0FBQ2QsZUFBTyxLQUFLLFNBQVMsRUFBRTtBQUFBLE1BQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0EsTUFBTSxjQUFjO0FBQ25CLGNBQU0sRUFBQyxRQUFRLFlBQVksV0FBVSxJQUFJLE1BQU0sWUFBWSxJQUFJO0FBQy9ELGVBQU8sT0FBTyxNQUFNLFlBQVksYUFBYSxVQUFVO0FBQUEsTUFDeEQ7QUFBQSxNQUVBLE1BQU0sV0FBVztBQUNoQixjQUFNLEtBQUssS0FBSyxRQUFRLElBQUksY0FBYztBQUUxQyxZQUFJLEdBQUcsV0FBVyxtQ0FBbUMsR0FBRztBQUN2RCxnQkFBTSxXQUFXLElBQUksU0FBUztBQUM5QixnQkFBTSxhQUFhLElBQUksZ0JBQWdCLE1BQU0sS0FBSyxLQUFLLENBQUM7QUFFeEQscUJBQVcsQ0FBQyxNQUFNLEtBQUssS0FBSyxZQUFZO0FBQ3ZDLHFCQUFTLE9BQU8sTUFBTSxLQUFLO0FBQUEsVUFDNUI7QUFFQSxpQkFBTztBQUFBLFFBQ1I7QUFFQSxjQUFNLEVBQUMsV0FBVSxJQUFJLE1BQU0sT0FBTyxpQ0FBNkI7QUFDL0QsZUFBTyxXQUFXLEtBQUssTUFBTSxFQUFFO0FBQUEsTUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxNQUFNLE9BQU87QUFDWixjQUFNLEtBQU0sS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLGNBQWMsS0FBTyxLQUFLLFNBQVMsRUFBRSxRQUFRLEtBQUssU0FBUyxFQUFFLEtBQUssUUFBUztBQUN4SCxjQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVk7QUFFbkMsZUFBTyxJQUFJLG1CQUFLLENBQUMsR0FBRyxHQUFHO0FBQUEsVUFDdEIsTUFBTTtBQUFBLFFBQ1AsQ0FBQztBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxNQUFNLE9BQU87QUFDWixjQUFNLE9BQU8sTUFBTSxLQUFLLEtBQUs7QUFDN0IsZUFBTyxLQUFLLE1BQU0sSUFBSTtBQUFBLE1BQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0EsTUFBTSxPQUFPO0FBQ1osY0FBTSxTQUFTLE1BQU0sWUFBWSxJQUFJO0FBQ3JDLGVBQU8sSUFBSSxZQUFZLEVBQUUsT0FBTyxNQUFNO0FBQUEsTUFDdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxTQUFTO0FBQ1IsZUFBTyxZQUFZLElBQUk7QUFBQSxNQUN4QjtBQUFBLElBQ0Q7QUFFQSxTQUFLLFVBQVUsU0FBUyxVQUFVLEtBQUssVUFBVSxRQUFRLHNFQUEwRSxtQkFBbUI7QUFHdEosV0FBTyxpQkFBaUIsS0FBSyxXQUFXO0FBQUEsTUFDdkMsTUFBTSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQ3ZCLFVBQVUsRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUMzQixhQUFhLEVBQUMsWUFBWSxLQUFJO0FBQUEsTUFDOUIsTUFBTSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQ3ZCLE1BQU0sRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUN2QixNQUFNLEVBQUMsWUFBWSxLQUFJO0FBQUEsTUFDdkIsTUFBTSxFQUFDLEtBQUs7QUFBQSxRQUFVLE1BQU07QUFBQSxRQUFDO0FBQUEsUUFDNUI7QUFBQSxRQUNBO0FBQUEsTUFBaUUsRUFBQztBQUFBLElBQ3BFLENBQUM7QUEyRU0sSUFBTSxRQUFRLENBQUMsVUFBVSxrQkFBa0I7QUFDakQsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJLEVBQUMsS0FBSSxJQUFJLFNBQVMsU0FBUztBQUcvQixVQUFJLFNBQVMsVUFBVTtBQUN0QixjQUFNLElBQUksTUFBTSxvQ0FBb0M7QUFBQSxNQUNyRDtBQUlBLFVBQUssZ0JBQWdCLFVBQVksT0FBTyxLQUFLLGdCQUFnQixZQUFhO0FBRXpFLGFBQUssSUFBSSxZQUFZLEVBQUMsY0FBYSxDQUFDO0FBQ3BDLGFBQUssSUFBSSxZQUFZLEVBQUMsY0FBYSxDQUFDO0FBQ3BDLGFBQUssS0FBSyxFQUFFO0FBQ1osYUFBSyxLQUFLLEVBQUU7QUFFWixpQkFBUyxTQUFTLEVBQUUsU0FBUztBQUM3QixlQUFPO0FBQUEsTUFDUjtBQUVBLGFBQU87QUFBQSxJQUNSO0FBRUEsSUFBTSw2QkFBNkI7QUFBQSxNQUNsQyxVQUFRLEtBQUssWUFBWTtBQUFBLE1BQ3pCO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFZTyxJQUFNLHFCQUFxQixDQUFDLE1BQU0sWUFBWTtBQUVwRCxVQUFJLFNBQVMsTUFBTTtBQUNsQixlQUFPO0FBQUEsTUFDUjtBQUdBLFVBQUksT0FBTyxTQUFTLFVBQVU7QUFDN0IsZUFBTztBQUFBLE1BQ1I7QUFHQSxVQUFJLHNCQUFzQixJQUFJLEdBQUc7QUFDaEMsZUFBTztBQUFBLE1BQ1I7QUFHQSxVQUFJLE9BQU8sSUFBSSxHQUFHO0FBQ2pCLGVBQU8sS0FBSyxRQUFRO0FBQUEsTUFDckI7QUFHQSxVQUFJQSxRQUFPLFNBQVMsSUFBSSxLQUFLLE1BQU0saUJBQWlCLElBQUksS0FBSyxZQUFZLE9BQU8sSUFBSSxHQUFHO0FBQ3RGLGVBQU87QUFBQSxNQUNSO0FBRUEsVUFBSSxnQkFBZ0IsVUFBVTtBQUM3QixlQUFPLGlDQUFpQyxRQUFRLFNBQVMsRUFBRSxRQUFRO0FBQUEsTUFDcEU7QUFHQSxVQUFJLFFBQVEsT0FBTyxLQUFLLGdCQUFnQixZQUFZO0FBQ25ELGVBQU8sZ0NBQWdDLDJCQUEyQixJQUFJLENBQUM7QUFBQSxNQUN4RTtBQUdBLFVBQUksZ0JBQWdCLFFBQVE7QUFDM0IsZUFBTztBQUFBLE1BQ1I7QUFHQSxhQUFPO0FBQUEsSUFDUjtBQVdPLElBQU0sZ0JBQWdCLGFBQVc7QUFDdkMsWUFBTSxFQUFDLEtBQUksSUFBSSxRQUFRLFNBQVM7QUFHaEMsVUFBSSxTQUFTLE1BQU07QUFDbEIsZUFBTztBQUFBLE1BQ1I7QUFHQSxVQUFJLE9BQU8sSUFBSSxHQUFHO0FBQ2pCLGVBQU8sS0FBSztBQUFBLE1BQ2I7QUFHQSxVQUFJQSxRQUFPLFNBQVMsSUFBSSxHQUFHO0FBQzFCLGVBQU8sS0FBSztBQUFBLE1BQ2I7QUFHQSxVQUFJLFFBQVEsT0FBTyxLQUFLLGtCQUFrQixZQUFZO0FBQ3JELGVBQU8sS0FBSyxrQkFBa0IsS0FBSyxlQUFlLElBQUksS0FBSyxjQUFjLElBQUk7QUFBQSxNQUM5RTtBQUdBLGFBQU87QUFBQSxJQUNSO0FBU08sSUFBTSxnQkFBZ0IsT0FBTyxNQUFNLEVBQUMsS0FBSSxNQUFNO0FBQ3BELFVBQUksU0FBUyxNQUFNO0FBRWxCLGFBQUssSUFBSTtBQUFBLE1BQ1YsT0FBTztBQUVOLGNBQU0sU0FBUyxNQUFNLElBQUk7QUFBQSxNQUMxQjtBQUFBLElBQ0Q7QUFBQTtBQUFBOzs7QUN0WUEsU0FBUSxTQUFBQyxjQUFZO0FBQ3BCLE9BQU8sVUFBVTtBQTZPVixTQUFTLGVBQWUsVUFBVSxDQUFDLEdBQUc7QUFDNUMsU0FBTyxJQUFJO0FBQUEsSUFDVixRQUVFLE9BQU8sQ0FBQyxRQUFRLE9BQU8sT0FBTyxVQUFVO0FBQ3hDLFVBQUksUUFBUSxNQUFNLEdBQUc7QUFDcEIsZUFBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLFFBQVEsQ0FBQyxDQUFDO0FBQUEsTUFDMUM7QUFFQSxhQUFPO0FBQUEsSUFDUixHQUFHLENBQUMsQ0FBQyxFQUNKLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNO0FBQzFCLFVBQUk7QUFDSCwyQkFBbUIsSUFBSTtBQUN2Qiw0QkFBb0IsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUN2QyxlQUFPO0FBQUEsTUFDUixRQUFRO0FBQ1AsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNELENBQUM7QUFBQSxFQUVIO0FBQ0Q7QUExUUEsSUFVTSxvQkFXQSxxQkFzQmU7QUEzQ3JCO0FBQUE7QUFVQSxJQUFNLHFCQUFxQixPQUFPLEtBQUssdUJBQXVCLGFBQzdELEtBQUsscUJBQ0wsVUFBUTtBQUNQLFVBQUksQ0FBQywwQkFBMEIsS0FBSyxJQUFJLEdBQUc7QUFDMUMsY0FBTSxRQUFRLElBQUksVUFBVSwyQ0FBMkMsSUFBSSxHQUFHO0FBQzlFLGVBQU8sZUFBZSxPQUFPLFFBQVEsRUFBQyxPQUFPLHlCQUF3QixDQUFDO0FBQ3RFLGNBQU07QUFBQSxNQUNQO0FBQUEsSUFDRDtBQUdELElBQU0sc0JBQXNCLE9BQU8sS0FBSyx3QkFBd0IsYUFDL0QsS0FBSyxzQkFDTCxDQUFDLE1BQU0sVUFBVTtBQUNoQixVQUFJLGtDQUFrQyxLQUFLLEtBQUssR0FBRztBQUNsRCxjQUFNLFFBQVEsSUFBSSxVQUFVLHlDQUF5QyxJQUFJLElBQUk7QUFDN0UsZUFBTyxlQUFlLE9BQU8sUUFBUSxFQUFDLE9BQU8sbUJBQWtCLENBQUM7QUFDaEUsY0FBTTtBQUFBLE1BQ1A7QUFBQSxJQUNEO0FBY0QsSUFBcUIsVUFBckIsTUFBcUIsaUJBQWdCLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT3BELFlBQVksTUFBTTtBQUdqQixZQUFJLFNBQVMsQ0FBQztBQUNkLFlBQUksZ0JBQWdCLFVBQVM7QUFDNUIsZ0JBQU0sTUFBTSxLQUFLLElBQUk7QUFDckIscUJBQVcsQ0FBQyxNQUFNLE1BQU0sS0FBSyxPQUFPLFFBQVEsR0FBRyxHQUFHO0FBQ2pELG1CQUFPLEtBQUssR0FBRyxPQUFPLElBQUksV0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFBQSxVQUNsRDtBQUFBLFFBQ0QsV0FBVyxRQUFRLE1BQU07QUFBQSxRQUV6QixXQUFXLE9BQU8sU0FBUyxZQUFZLENBQUNBLE9BQU0saUJBQWlCLElBQUksR0FBRztBQUNyRSxnQkFBTSxTQUFTLEtBQUssT0FBTyxRQUFRO0FBRW5DLGNBQUksVUFBVSxNQUFNO0FBRW5CLG1CQUFPLEtBQUssR0FBRyxPQUFPLFFBQVEsSUFBSSxDQUFDO0FBQUEsVUFDcEMsT0FBTztBQUNOLGdCQUFJLE9BQU8sV0FBVyxZQUFZO0FBQ2pDLG9CQUFNLElBQUksVUFBVSwrQkFBK0I7QUFBQSxZQUNwRDtBQUlBLHFCQUFTLENBQUMsR0FBRyxJQUFJLEVBQ2YsSUFBSSxVQUFRO0FBQ1osa0JBQ0MsT0FBTyxTQUFTLFlBQVlBLE9BQU0saUJBQWlCLElBQUksR0FDdEQ7QUFDRCxzQkFBTSxJQUFJLFVBQVUsNkNBQTZDO0FBQUEsY0FDbEU7QUFFQSxxQkFBTyxDQUFDLEdBQUcsSUFBSTtBQUFBLFlBQ2hCLENBQUMsRUFBRSxJQUFJLFVBQVE7QUFDZCxrQkFBSSxLQUFLLFdBQVcsR0FBRztBQUN0QixzQkFBTSxJQUFJLFVBQVUsNkNBQTZDO0FBQUEsY0FDbEU7QUFFQSxxQkFBTyxDQUFDLEdBQUcsSUFBSTtBQUFBLFlBQ2hCLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRCxPQUFPO0FBQ04sZ0JBQU0sSUFBSSxVQUFVLHNJQUF5STtBQUFBLFFBQzlKO0FBR0EsaUJBQ0MsT0FBTyxTQUFTLElBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTTtBQUM3Qiw2QkFBbUIsSUFBSTtBQUN2Qiw4QkFBb0IsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUN2QyxpQkFBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLFlBQVksR0FBRyxPQUFPLEtBQUssQ0FBQztBQUFBLFFBQ2xELENBQUMsSUFDRDtBQUVGLGNBQU0sTUFBTTtBQUlaLGVBQU8sSUFBSSxNQUFNLE1BQU07QUFBQSxVQUN0QixJQUFJLFFBQVEsR0FBRyxVQUFVO0FBQ3hCLG9CQUFRLEdBQUc7QUFBQSxjQUNWLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFDSix1QkFBTyxDQUFDLE1BQU0sVUFBVTtBQUN2QixxQ0FBbUIsSUFBSTtBQUN2QixzQ0FBb0IsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUN2Qyx5QkFBTyxnQkFBZ0IsVUFBVSxDQUFDLEVBQUU7QUFBQSxvQkFDbkM7QUFBQSxvQkFDQSxPQUFPLElBQUksRUFBRSxZQUFZO0FBQUEsb0JBQ3pCLE9BQU8sS0FBSztBQUFBLGtCQUNiO0FBQUEsZ0JBQ0Q7QUFBQSxjQUVELEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFDSix1QkFBTyxVQUFRO0FBQ2QscUNBQW1CLElBQUk7QUFDdkIseUJBQU8sZ0JBQWdCLFVBQVUsQ0FBQyxFQUFFO0FBQUEsb0JBQ25DO0FBQUEsb0JBQ0EsT0FBTyxJQUFJLEVBQUUsWUFBWTtBQUFBLGtCQUMxQjtBQUFBLGdCQUNEO0FBQUEsY0FFRCxLQUFLO0FBQ0osdUJBQU8sTUFBTTtBQUNaLHlCQUFPLEtBQUs7QUFDWix5QkFBTyxJQUFJLElBQUksZ0JBQWdCLFVBQVUsS0FBSyxLQUFLLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFBQSxnQkFDbEU7QUFBQSxjQUVEO0FBQ0MsdUJBQU8sUUFBUSxJQUFJLFFBQVEsR0FBRyxRQUFRO0FBQUEsWUFDeEM7QUFBQSxVQUNEO0FBQUEsUUFDRCxDQUFDO0FBQUEsTUFFRjtBQUFBLE1BRUEsS0FBSyxPQUFPLFdBQVcsSUFBSTtBQUMxQixlQUFPLEtBQUssWUFBWTtBQUFBLE1BQ3pCO0FBQUEsTUFFQSxXQUFXO0FBQ1YsZUFBTyxPQUFPLFVBQVUsU0FBUyxLQUFLLElBQUk7QUFBQSxNQUMzQztBQUFBLE1BRUEsSUFBSSxNQUFNO0FBQ1QsY0FBTSxTQUFTLEtBQUssT0FBTyxJQUFJO0FBQy9CLFlBQUksT0FBTyxXQUFXLEdBQUc7QUFDeEIsaUJBQU87QUFBQSxRQUNSO0FBRUEsWUFBSSxRQUFRLE9BQU8sS0FBSyxJQUFJO0FBQzVCLFlBQUksc0JBQXNCLEtBQUssSUFBSSxHQUFHO0FBQ3JDLGtCQUFRLE1BQU0sWUFBWTtBQUFBLFFBQzNCO0FBRUEsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUVBLFFBQVEsVUFBVSxVQUFVLFFBQVc7QUFDdEMsbUJBQVcsUUFBUSxLQUFLLEtBQUssR0FBRztBQUMvQixrQkFBUSxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM7QUFBQSxRQUM5RDtBQUFBLE1BQ0Q7QUFBQSxNQUVBLENBQUUsU0FBUztBQUNWLG1CQUFXLFFBQVEsS0FBSyxLQUFLLEdBQUc7QUFDL0IsZ0JBQU0sS0FBSyxJQUFJLElBQUk7QUFBQSxRQUNwQjtBQUFBLE1BQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLENBQUUsVUFBVTtBQUNYLG1CQUFXLFFBQVEsS0FBSyxLQUFLLEdBQUc7QUFDL0IsZ0JBQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxRQUM1QjtBQUFBLE1BQ0Q7QUFBQSxNQUVBLENBQUMsT0FBTyxRQUFRLElBQUk7QUFDbkIsZUFBTyxLQUFLLFFBQVE7QUFBQSxNQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9BLE1BQU07QUFDTCxlQUFPLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLFFBQVE7QUFDL0MsaUJBQU8sR0FBRyxJQUFJLEtBQUssT0FBTyxHQUFHO0FBQzdCLGlCQUFPO0FBQUEsUUFDUixHQUFHLENBQUMsQ0FBQztBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLENBQUMsdUJBQU8sSUFBSSw0QkFBNEIsQ0FBQyxJQUFJO0FBQzVDLGVBQU8sQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsUUFBUTtBQUMvQyxnQkFBTSxTQUFTLEtBQUssT0FBTyxHQUFHO0FBRzlCLGNBQUksUUFBUSxRQUFRO0FBQ25CLG1CQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7QUFBQSxVQUN2QixPQUFPO0FBQ04sbUJBQU8sR0FBRyxJQUFJLE9BQU8sU0FBUyxJQUFJLFNBQVMsT0FBTyxDQUFDO0FBQUEsVUFDcEQ7QUFFQSxpQkFBTztBQUFBLFFBQ1IsR0FBRyxDQUFDLENBQUM7QUFBQSxNQUNOO0FBQUEsSUFDRDtBQU1BLFdBQU87QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLENBQUMsT0FBTyxXQUFXLFdBQVcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLGFBQWE7QUFDcEUsZUFBTyxRQUFRLElBQUksRUFBQyxZQUFZLEtBQUk7QUFDcEMsZUFBTztBQUFBLE1BQ1IsR0FBRyxDQUFDLENBQUM7QUFBQSxJQUNOO0FBQUE7QUFBQTs7O0FDN09BLElBQU0sZ0JBUU87QUFSYjtBQUFBO0FBQUEsSUFBTSxpQkFBaUIsb0JBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxDQUFDO0FBUWpELElBQU0sYUFBYSxVQUFRO0FBQ2pDLGFBQU8sZUFBZSxJQUFJLElBQUk7QUFBQSxJQUMvQjtBQUFBO0FBQUE7OztBQ1ZBLElBVU1DLFlBV2U7QUFyQnJCO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFZLHVCQUFPLG9CQUFvQjtBQVc3QyxJQUFxQixXQUFyQixNQUFxQixrQkFBaUIsS0FBSztBQUFBLE1BQzFDLFlBQVksT0FBTyxNQUFNLFVBQVUsQ0FBQyxHQUFHO0FBQ3RDLGNBQU0sTUFBTSxPQUFPO0FBR25CLGNBQU0sU0FBUyxRQUFRLFVBQVUsT0FBTyxRQUFRLFNBQVM7QUFFekQsY0FBTSxVQUFVLElBQUksUUFBUSxRQUFRLE9BQU87QUFFM0MsWUFBSSxTQUFTLFFBQVEsQ0FBQyxRQUFRLElBQUksY0FBYyxHQUFHO0FBQ2xELGdCQUFNLGNBQWMsbUJBQW1CLE1BQU0sSUFBSTtBQUNqRCxjQUFJLGFBQWE7QUFDaEIsb0JBQVEsT0FBTyxnQkFBZ0IsV0FBVztBQUFBLFVBQzNDO0FBQUEsUUFDRDtBQUVBLGFBQUtBLFVBQVMsSUFBSTtBQUFBLFVBQ2pCLE1BQU07QUFBQSxVQUNOLEtBQUssUUFBUTtBQUFBLFVBQ2I7QUFBQSxVQUNBLFlBQVksUUFBUSxjQUFjO0FBQUEsVUFDbEM7QUFBQSxVQUNBLFNBQVMsUUFBUTtBQUFBLFVBQ2pCLGVBQWUsUUFBUTtBQUFBLFFBQ3hCO0FBQUEsTUFDRDtBQUFBLE1BRUEsSUFBSSxPQUFPO0FBQ1YsZUFBTyxLQUFLQSxVQUFTLEVBQUU7QUFBQSxNQUN4QjtBQUFBLE1BRUEsSUFBSSxNQUFNO0FBQ1QsZUFBTyxLQUFLQSxVQUFTLEVBQUUsT0FBTztBQUFBLE1BQy9CO0FBQUEsTUFFQSxJQUFJLFNBQVM7QUFDWixlQUFPLEtBQUtBLFVBQVMsRUFBRTtBQUFBLE1BQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxJQUFJLEtBQUs7QUFDUixlQUFPLEtBQUtBLFVBQVMsRUFBRSxVQUFVLE9BQU8sS0FBS0EsVUFBUyxFQUFFLFNBQVM7QUFBQSxNQUNsRTtBQUFBLE1BRUEsSUFBSSxhQUFhO0FBQ2hCLGVBQU8sS0FBS0EsVUFBUyxFQUFFLFVBQVU7QUFBQSxNQUNsQztBQUFBLE1BRUEsSUFBSSxhQUFhO0FBQ2hCLGVBQU8sS0FBS0EsVUFBUyxFQUFFO0FBQUEsTUFDeEI7QUFBQSxNQUVBLElBQUksVUFBVTtBQUNiLGVBQU8sS0FBS0EsVUFBUyxFQUFFO0FBQUEsTUFDeEI7QUFBQSxNQUVBLElBQUksZ0JBQWdCO0FBQ25CLGVBQU8sS0FBS0EsVUFBUyxFQUFFO0FBQUEsTUFDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxRQUFRO0FBQ1AsZUFBTyxJQUFJLFVBQVMsTUFBTSxNQUFNLEtBQUssYUFBYSxHQUFHO0FBQUEsVUFDcEQsTUFBTSxLQUFLO0FBQUEsVUFDWCxLQUFLLEtBQUs7QUFBQSxVQUNWLFFBQVEsS0FBSztBQUFBLFVBQ2IsWUFBWSxLQUFLO0FBQUEsVUFDakIsU0FBUyxLQUFLO0FBQUEsVUFDZCxJQUFJLEtBQUs7QUFBQSxVQUNULFlBQVksS0FBSztBQUFBLFVBQ2pCLE1BQU0sS0FBSztBQUFBLFVBQ1gsZUFBZSxLQUFLO0FBQUEsUUFDckIsQ0FBQztBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxPQUFPLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFDbEMsWUFBSSxDQUFDLFdBQVcsTUFBTSxHQUFHO0FBQ3hCLGdCQUFNLElBQUksV0FBVyxpRUFBaUU7QUFBQSxRQUN2RjtBQUVBLGVBQU8sSUFBSSxVQUFTLE1BQU07QUFBQSxVQUN6QixTQUFTO0FBQUEsWUFDUixVQUFVLElBQUksSUFBSSxHQUFHLEVBQUUsU0FBUztBQUFBLFVBQ2pDO0FBQUEsVUFDQTtBQUFBLFFBQ0QsQ0FBQztBQUFBLE1BQ0Y7QUFBQSxNQUVBLE9BQU8sUUFBUTtBQUNkLGNBQU0sV0FBVyxJQUFJLFVBQVMsTUFBTSxFQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUUsQ0FBQztBQUMvRCxpQkFBU0EsVUFBUyxFQUFFLE9BQU87QUFDM0IsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUVBLE9BQU8sS0FBSyxPQUFPLFFBQVcsT0FBTyxDQUFDLEdBQUc7QUFDeEMsY0FBTSxPQUFPLEtBQUssVUFBVSxJQUFJO0FBRWhDLFlBQUksU0FBUyxRQUFXO0FBQ3ZCLGdCQUFNLElBQUksVUFBVSwrQkFBK0I7QUFBQSxRQUNwRDtBQUVBLGNBQU0sVUFBVSxJQUFJLFFBQVEsUUFBUSxLQUFLLE9BQU87QUFFaEQsWUFBSSxDQUFDLFFBQVEsSUFBSSxjQUFjLEdBQUc7QUFDakMsa0JBQVEsSUFBSSxnQkFBZ0Isa0JBQWtCO0FBQUEsUUFDL0M7QUFFQSxlQUFPLElBQUksVUFBUyxNQUFNO0FBQUEsVUFDekIsR0FBRztBQUFBLFVBQ0g7QUFBQSxRQUNELENBQUM7QUFBQSxNQUNGO0FBQUEsTUFFQSxLQUFLLE9BQU8sV0FBVyxJQUFJO0FBQzFCLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUVBLFdBQU8saUJBQWlCLFNBQVMsV0FBVztBQUFBLE1BQzNDLE1BQU0sRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUN2QixLQUFLLEVBQUMsWUFBWSxLQUFJO0FBQUEsTUFDdEIsUUFBUSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQ3pCLElBQUksRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUNyQixZQUFZLEVBQUMsWUFBWSxLQUFJO0FBQUEsTUFDN0IsWUFBWSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQzdCLFNBQVMsRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUMxQixPQUFPLEVBQUMsWUFBWSxLQUFJO0FBQUEsSUFDekIsQ0FBQztBQUFBO0FBQUE7OztBQy9KRCxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0sWUFBWSxlQUFhO0FBQ3JDLFVBQUksVUFBVSxRQUFRO0FBQ3JCLGVBQU8sVUFBVTtBQUFBLE1BQ2xCO0FBRUEsWUFBTSxhQUFhLFVBQVUsS0FBSyxTQUFTO0FBQzNDLFlBQU0sT0FBTyxVQUFVLFNBQVMsVUFBVSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU07QUFDM0UsYUFBTyxVQUFVLEtBQUssYUFBYSxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFBQSxJQUNqRTtBQUFBO0FBQUE7OztBQ1JBLFNBQVEsWUFBVztBQWlCWixTQUFTLDBCQUEwQixLQUFLLGFBQWEsT0FBTztBQUVsRSxNQUFJLE9BQU8sTUFBTTtBQUNoQixXQUFPO0FBQUEsRUFDUjtBQUVBLFFBQU0sSUFBSSxJQUFJLEdBQUc7QUFHakIsTUFBSSx1QkFBdUIsS0FBSyxJQUFJLFFBQVEsR0FBRztBQUM5QyxXQUFPO0FBQUEsRUFDUjtBQUdBLE1BQUksV0FBVztBQUlmLE1BQUksV0FBVztBQUlmLE1BQUksT0FBTztBQUdYLE1BQUksWUFBWTtBQUdmLFFBQUksV0FBVztBQUlmLFFBQUksU0FBUztBQUFBLEVBQ2Q7QUFHQSxTQUFPO0FBQ1I7QUEyQk8sU0FBUyx1QkFBdUIsZ0JBQWdCO0FBQ3RELE1BQUksQ0FBQyxlQUFlLElBQUksY0FBYyxHQUFHO0FBQ3hDLFVBQU0sSUFBSSxVQUFVLDJCQUEyQixjQUFjLEVBQUU7QUFBQSxFQUNoRTtBQUVBLFNBQU87QUFDUjtBQU9PLFNBQVMsK0JBQStCLEtBQUs7QUFRbkQsTUFBSSxnQkFBZ0IsS0FBSyxJQUFJLFFBQVEsR0FBRztBQUN2QyxXQUFPO0FBQUEsRUFDUjtBQUdBLFFBQU0sU0FBUyxJQUFJLEtBQUssUUFBUSxlQUFlLEVBQUU7QUFDakQsUUFBTSxnQkFBZ0IsS0FBSyxNQUFNO0FBRWpDLE1BQUksa0JBQWtCLEtBQUssU0FBUyxLQUFLLE1BQU0sR0FBRztBQUNqRCxXQUFPO0FBQUEsRUFDUjtBQUVBLE1BQUksa0JBQWtCLEtBQUssbUNBQW1DLEtBQUssTUFBTSxHQUFHO0FBQzNFLFdBQU87QUFBQSxFQUNSO0FBS0EsTUFBSSxJQUFJLFNBQVMsZUFBZSxJQUFJLEtBQUssU0FBUyxZQUFZLEdBQUc7QUFDaEUsV0FBTztBQUFBLEVBQ1I7QUFHQSxNQUFJLElBQUksYUFBYSxTQUFTO0FBQzdCLFdBQU87QUFBQSxFQUNSO0FBU0EsU0FBTztBQUNSO0FBT08sU0FBUyw0QkFBNEIsS0FBSztBQUVoRCxNQUFJLHlCQUF5QixLQUFLLEdBQUcsR0FBRztBQUN2QyxXQUFPO0FBQUEsRUFDUjtBQUdBLE1BQUksSUFBSSxhQUFhLFNBQVM7QUFDN0IsV0FBTztBQUFBLEVBQ1I7QUFLQSxNQUFJLHVCQUF1QixLQUFLLElBQUksUUFBUSxHQUFHO0FBQzlDLFdBQU87QUFBQSxFQUNSO0FBR0EsU0FBTywrQkFBK0IsR0FBRztBQUMxQztBQTBCTyxTQUFTLDBCQUEwQixTQUFTLEVBQUMscUJBQXFCLHVCQUFzQixJQUFJLENBQUMsR0FBRztBQU10RyxNQUFJLFFBQVEsYUFBYSxpQkFBaUIsUUFBUSxtQkFBbUIsSUFBSTtBQUN4RSxXQUFPO0FBQUEsRUFDUjtBQUdBLFFBQU0sU0FBUyxRQUFRO0FBTXZCLE1BQUksUUFBUSxhQUFhLGdCQUFnQjtBQUN4QyxXQUFPO0FBQUEsRUFDUjtBQUdBLFFBQU0saUJBQWlCLFFBQVE7QUFHL0IsTUFBSSxjQUFjLDBCQUEwQixjQUFjO0FBSTFELE1BQUksaUJBQWlCLDBCQUEwQixnQkFBZ0IsSUFBSTtBQUluRSxNQUFJLFlBQVksU0FBUyxFQUFFLFNBQVMsTUFBTTtBQUN6QyxrQkFBYztBQUFBLEVBQ2Y7QUFNQSxNQUFJLHFCQUFxQjtBQUN4QixrQkFBYyxvQkFBb0IsV0FBVztBQUFBLEVBQzlDO0FBRUEsTUFBSSx3QkFBd0I7QUFDM0IscUJBQWlCLHVCQUF1QixjQUFjO0FBQUEsRUFDdkQ7QUFHQSxRQUFNLGFBQWEsSUFBSSxJQUFJLFFBQVEsR0FBRztBQUV0QyxVQUFRLFFBQVE7QUFBQSxJQUNmLEtBQUs7QUFDSixhQUFPO0FBQUEsSUFFUixLQUFLO0FBQ0osYUFBTztBQUFBLElBRVIsS0FBSztBQUNKLGFBQU87QUFBQSxJQUVSLEtBQUs7QUFHSixVQUFJLDRCQUE0QixXQUFXLEtBQUssQ0FBQyw0QkFBNEIsVUFBVSxHQUFHO0FBQ3pGLGVBQU87QUFBQSxNQUNSO0FBR0EsYUFBTyxlQUFlLFNBQVM7QUFBQSxJQUVoQyxLQUFLO0FBR0osVUFBSSxZQUFZLFdBQVcsV0FBVyxRQUFRO0FBQzdDLGVBQU87QUFBQSxNQUNSO0FBSUEsVUFBSSw0QkFBNEIsV0FBVyxLQUFLLENBQUMsNEJBQTRCLFVBQVUsR0FBRztBQUN6RixlQUFPO0FBQUEsTUFDUjtBQUdBLGFBQU87QUFBQSxJQUVSLEtBQUs7QUFHSixVQUFJLFlBQVksV0FBVyxXQUFXLFFBQVE7QUFDN0MsZUFBTztBQUFBLE1BQ1I7QUFHQSxhQUFPO0FBQUEsSUFFUixLQUFLO0FBR0osVUFBSSxZQUFZLFdBQVcsV0FBVyxRQUFRO0FBQzdDLGVBQU87QUFBQSxNQUNSO0FBR0EsYUFBTztBQUFBLElBRVIsS0FBSztBQUdKLFVBQUksNEJBQTRCLFdBQVcsS0FBSyxDQUFDLDRCQUE0QixVQUFVLEdBQUc7QUFDekYsZUFBTztBQUFBLE1BQ1I7QUFHQSxhQUFPO0FBQUEsSUFFUjtBQUNDLFlBQU0sSUFBSSxVQUFVLDJCQUEyQixNQUFNLEVBQUU7QUFBQSxFQUN6RDtBQUNEO0FBT08sU0FBUyw4QkFBOEIsU0FBUztBQUd0RCxRQUFNLGdCQUFnQixRQUFRLElBQUksaUJBQWlCLEtBQUssSUFBSSxNQUFNLFFBQVE7QUFHMUUsTUFBSSxTQUFTO0FBTWIsYUFBVyxTQUFTLGNBQWM7QUFDakMsUUFBSSxTQUFTLGVBQWUsSUFBSSxLQUFLLEdBQUc7QUFDdkMsZUFBUztBQUFBLElBQ1Y7QUFBQSxFQUNEO0FBR0EsU0FBTztBQUNSO0FBblZBLElBMkRhLGdCQWVBO0FBMUViO0FBQUE7QUEyRE8sSUFBTSxpQkFBaUIsb0JBQUksSUFBSTtBQUFBLE1BQ3JDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNELENBQUM7QUFLTSxJQUFNLDBCQUEwQjtBQUFBO0FBQUE7OztBQ2xFdkMsU0FBUSxVQUFVLGlCQUFnQjtBQUNsQyxTQUFRLGFBQUFDLGtCQUFnQjtBQVR4QixJQWtCTUMsWUFRQSxXQU9BLGVBYWUsU0FtTFI7QUFqT2I7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxhQUFZLHVCQUFPLG1CQUFtQjtBQVE1QyxJQUFNLFlBQVksWUFBVTtBQUMzQixhQUNDLE9BQU8sV0FBVyxZQUNsQixPQUFPLE9BQU9BLFVBQVMsTUFBTTtBQUFBLElBRS9CO0FBRUEsSUFBTSxnQkFBZ0JEO0FBQUEsTUFBVSxNQUFNO0FBQUEsTUFBQztBQUFBLE1BQ3RDO0FBQUEsTUFDQTtBQUFBLElBQWdFO0FBV2pFLElBQXFCLFVBQXJCLE1BQXFCLGlCQUFnQixLQUFLO0FBQUEsTUFDekMsWUFBWSxPQUFPLE9BQU8sQ0FBQyxHQUFHO0FBQzdCLFlBQUk7QUFHSixZQUFJLFVBQVUsS0FBSyxHQUFHO0FBQ3JCLHNCQUFZLElBQUksSUFBSSxNQUFNLEdBQUc7QUFBQSxRQUM5QixPQUFPO0FBQ04sc0JBQVksSUFBSSxJQUFJLEtBQUs7QUFDekIsa0JBQVEsQ0FBQztBQUFBLFFBQ1Y7QUFFQSxZQUFJLFVBQVUsYUFBYSxNQUFNLFVBQVUsYUFBYSxJQUFJO0FBQzNELGdCQUFNLElBQUksVUFBVSxHQUFHLFNBQVMsdUNBQXVDO0FBQUEsUUFDeEU7QUFFQSxZQUFJLFNBQVMsS0FBSyxVQUFVLE1BQU0sVUFBVTtBQUM1QyxZQUFJLHdDQUF3QyxLQUFLLE1BQU0sR0FBRztBQUN6RCxtQkFBUyxPQUFPLFlBQVk7QUFBQSxRQUM3QjtBQUVBLFlBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxVQUFVLE1BQU07QUFDdkMsd0JBQWM7QUFBQSxRQUNmO0FBR0EsYUFBSyxLQUFLLFFBQVEsUUFBUyxVQUFVLEtBQUssS0FBSyxNQUFNLFNBQVMsVUFDNUQsV0FBVyxTQUFTLFdBQVcsU0FBUztBQUN6QyxnQkFBTSxJQUFJLFVBQVUsK0NBQStDO0FBQUEsUUFDcEU7QUFFQSxjQUFNLFlBQVksS0FBSyxPQUN0QixLQUFLLE9BQ0osVUFBVSxLQUFLLEtBQUssTUFBTSxTQUFTLE9BQ25DLE1BQU0sS0FBSyxJQUNYO0FBRUYsY0FBTSxXQUFXO0FBQUEsVUFDaEIsTUFBTSxLQUFLLFFBQVEsTUFBTSxRQUFRO0FBQUEsUUFDbEMsQ0FBQztBQUVELGNBQU0sVUFBVSxJQUFJLFFBQVEsS0FBSyxXQUFXLE1BQU0sV0FBVyxDQUFDLENBQUM7QUFFL0QsWUFBSSxjQUFjLFFBQVEsQ0FBQyxRQUFRLElBQUksY0FBYyxHQUFHO0FBQ3ZELGdCQUFNLGNBQWMsbUJBQW1CLFdBQVcsSUFBSTtBQUN0RCxjQUFJLGFBQWE7QUFDaEIsb0JBQVEsSUFBSSxnQkFBZ0IsV0FBVztBQUFBLFVBQ3hDO0FBQUEsUUFDRDtBQUVBLFlBQUksU0FBUyxVQUFVLEtBQUssSUFDM0IsTUFBTSxTQUNOO0FBQ0QsWUFBSSxZQUFZLE1BQU07QUFDckIsbUJBQVMsS0FBSztBQUFBLFFBQ2Y7QUFHQSxZQUFJLFVBQVUsUUFBUSxDQUFDLGNBQWMsTUFBTSxHQUFHO0FBQzdDLGdCQUFNLElBQUksVUFBVSxnRUFBZ0U7QUFBQSxRQUNyRjtBQUlBLFlBQUksV0FBVyxLQUFLLFlBQVksT0FBTyxNQUFNLFdBQVcsS0FBSztBQUM3RCxZQUFJLGFBQWEsSUFBSTtBQUVwQixxQkFBVztBQUFBLFFBQ1osV0FBVyxVQUFVO0FBRXBCLGdCQUFNLGlCQUFpQixJQUFJLElBQUksUUFBUTtBQUV2QyxxQkFBVyx3QkFBd0IsS0FBSyxjQUFjLElBQUksV0FBVztBQUFBLFFBQ3RFLE9BQU87QUFDTixxQkFBVztBQUFBLFFBQ1o7QUFFQSxhQUFLQyxVQUFTLElBQUk7QUFBQSxVQUNqQjtBQUFBLFVBQ0EsVUFBVSxLQUFLLFlBQVksTUFBTSxZQUFZO0FBQUEsVUFDN0M7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNEO0FBR0EsYUFBSyxTQUFTLEtBQUssV0FBVyxTQUFhLE1BQU0sV0FBVyxTQUFZLEtBQUssTUFBTSxTQUFVLEtBQUs7QUFDbEcsYUFBSyxXQUFXLEtBQUssYUFBYSxTQUFhLE1BQU0sYUFBYSxTQUFZLE9BQU8sTUFBTSxXQUFZLEtBQUs7QUFDNUcsYUFBSyxVQUFVLEtBQUssV0FBVyxNQUFNLFdBQVc7QUFDaEQsYUFBSyxRQUFRLEtBQUssU0FBUyxNQUFNO0FBQ2pDLGFBQUssZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCO0FBQ2xFLGFBQUsscUJBQXFCLEtBQUssc0JBQXNCLE1BQU0sc0JBQXNCO0FBSWpGLGFBQUssaUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCO0FBQUEsTUFDdEU7QUFBQTtBQUFBLE1BR0EsSUFBSSxTQUFTO0FBQ1osZUFBTyxLQUFLQSxVQUFTLEVBQUU7QUFBQSxNQUN4QjtBQUFBO0FBQUEsTUFHQSxJQUFJLE1BQU07QUFDVCxlQUFPLFVBQVUsS0FBS0EsVUFBUyxFQUFFLFNBQVM7QUFBQSxNQUMzQztBQUFBO0FBQUEsTUFHQSxJQUFJLFVBQVU7QUFDYixlQUFPLEtBQUtBLFVBQVMsRUFBRTtBQUFBLE1BQ3hCO0FBQUEsTUFFQSxJQUFJLFdBQVc7QUFDZCxlQUFPLEtBQUtBLFVBQVMsRUFBRTtBQUFBLE1BQ3hCO0FBQUE7QUFBQSxNQUdBLElBQUksU0FBUztBQUNaLGVBQU8sS0FBS0EsVUFBUyxFQUFFO0FBQUEsTUFDeEI7QUFBQTtBQUFBLE1BR0EsSUFBSSxXQUFXO0FBQ2QsWUFBSSxLQUFLQSxVQUFTLEVBQUUsYUFBYSxlQUFlO0FBQy9DLGlCQUFPO0FBQUEsUUFDUjtBQUVBLFlBQUksS0FBS0EsVUFBUyxFQUFFLGFBQWEsVUFBVTtBQUMxQyxpQkFBTztBQUFBLFFBQ1I7QUFFQSxZQUFJLEtBQUtBLFVBQVMsRUFBRSxVQUFVO0FBQzdCLGlCQUFPLEtBQUtBLFVBQVMsRUFBRSxTQUFTLFNBQVM7QUFBQSxRQUMxQztBQUVBLGVBQU87QUFBQSxNQUNSO0FBQUEsTUFFQSxJQUFJLGlCQUFpQjtBQUNwQixlQUFPLEtBQUtBLFVBQVMsRUFBRTtBQUFBLE1BQ3hCO0FBQUEsTUFFQSxJQUFJLGVBQWUsZ0JBQWdCO0FBQ2xDLGFBQUtBLFVBQVMsRUFBRSxpQkFBaUIsdUJBQXVCLGNBQWM7QUFBQSxNQUN2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9BLFFBQVE7QUFDUCxlQUFPLElBQUksU0FBUSxJQUFJO0FBQUEsTUFDeEI7QUFBQSxNQUVBLEtBQUssT0FBTyxXQUFXLElBQUk7QUFDMUIsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBRUEsV0FBTyxpQkFBaUIsUUFBUSxXQUFXO0FBQUEsTUFDMUMsUUFBUSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQ3pCLEtBQUssRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUN0QixTQUFTLEVBQUMsWUFBWSxLQUFJO0FBQUEsTUFDMUIsVUFBVSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQzNCLE9BQU8sRUFBQyxZQUFZLEtBQUk7QUFBQSxNQUN4QixRQUFRLEVBQUMsWUFBWSxLQUFJO0FBQUEsTUFDekIsVUFBVSxFQUFDLFlBQVksS0FBSTtBQUFBLE1BQzNCLGdCQUFnQixFQUFDLFlBQVksS0FBSTtBQUFBLElBQ2xDLENBQUM7QUFRTSxJQUFNLHdCQUF3QixhQUFXO0FBQy9DLFlBQU0sRUFBQyxVQUFTLElBQUksUUFBUUEsVUFBUztBQUNyQyxZQUFNLFVBQVUsSUFBSSxRQUFRLFFBQVFBLFVBQVMsRUFBRSxPQUFPO0FBR3RELFVBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxHQUFHO0FBQzNCLGdCQUFRLElBQUksVUFBVSxLQUFLO0FBQUEsTUFDNUI7QUFHQSxVQUFJLHFCQUFxQjtBQUN6QixVQUFJLFFBQVEsU0FBUyxRQUFRLGdCQUFnQixLQUFLLFFBQVEsTUFBTSxHQUFHO0FBQ2xFLDZCQUFxQjtBQUFBLE1BQ3RCO0FBRUEsVUFBSSxRQUFRLFNBQVMsTUFBTTtBQUMxQixjQUFNLGFBQWEsY0FBYyxPQUFPO0FBRXhDLFlBQUksT0FBTyxlQUFlLFlBQVksQ0FBQyxPQUFPLE1BQU0sVUFBVSxHQUFHO0FBQ2hFLCtCQUFxQixPQUFPLFVBQVU7QUFBQSxRQUN2QztBQUFBLE1BQ0Q7QUFFQSxVQUFJLG9CQUFvQjtBQUN2QixnQkFBUSxJQUFJLGtCQUFrQixrQkFBa0I7QUFBQSxNQUNqRDtBQUtBLFVBQUksUUFBUSxtQkFBbUIsSUFBSTtBQUNsQyxnQkFBUSxpQkFBaUI7QUFBQSxNQUMxQjtBQUtBLFVBQUksUUFBUSxZQUFZLFFBQVEsYUFBYSxlQUFlO0FBQzNELGdCQUFRQSxVQUFTLEVBQUUsV0FBVywwQkFBMEIsT0FBTztBQUFBLE1BQ2hFLE9BQU87QUFDTixnQkFBUUEsVUFBUyxFQUFFLFdBQVc7QUFBQSxNQUMvQjtBQUtBLFVBQUksUUFBUUEsVUFBUyxFQUFFLG9CQUFvQixLQUFLO0FBQy9DLGdCQUFRLElBQUksV0FBVyxRQUFRLFFBQVE7QUFBQSxNQUN4QztBQUdBLFVBQUksQ0FBQyxRQUFRLElBQUksWUFBWSxHQUFHO0FBQy9CLGdCQUFRLElBQUksY0FBYyxZQUFZO0FBQUEsTUFDdkM7QUFHQSxVQUFJLFFBQVEsWUFBWSxDQUFDLFFBQVEsSUFBSSxpQkFBaUIsR0FBRztBQUN4RCxnQkFBUSxJQUFJLG1CQUFtQixtQkFBbUI7QUFBQSxNQUNuRDtBQUVBLFVBQUksRUFBQyxNQUFLLElBQUk7QUFDZCxVQUFJLE9BQU8sVUFBVSxZQUFZO0FBQ2hDLGdCQUFRLE1BQU0sU0FBUztBQUFBLE1BQ3hCO0FBS0EsWUFBTSxTQUFTLFVBQVUsU0FBUztBQUlsQyxZQUFNLFVBQVU7QUFBQTtBQUFBLFFBRWYsTUFBTSxVQUFVLFdBQVc7QUFBQTtBQUFBLFFBRTNCLFFBQVEsUUFBUTtBQUFBLFFBQ2hCLFNBQVMsUUFBUSx1QkFBTyxJQUFJLDRCQUE0QixDQUFDLEVBQUU7QUFBQSxRQUMzRCxvQkFBb0IsUUFBUTtBQUFBLFFBQzVCO0FBQUEsTUFDRDtBQUVBLGFBQU87QUFBQTtBQUFBLFFBRU47QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQTtBQUFBOzs7QUN4VEEsSUFLYTtBQUxiO0FBQUE7QUFBQTtBQUtPLElBQU0sYUFBTixjQUF5QixlQUFlO0FBQUEsTUFDOUMsWUFBWSxTQUFTLE9BQU8sV0FBVztBQUN0QyxjQUFNLFNBQVMsSUFBSTtBQUFBLE1BQ3BCO0FBQUEsSUFDRDtBQUFBO0FBQUE7OztBQ0RBLE9BQU9DLFdBQVU7QUFDakIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPQyxXQUFTLGVBQUFDLGNBQWEsWUFBWSxZQUFXO0FBQ3BELFNBQVEsVUFBQUMsZUFBYTtBQW1DckIsZUFBTyxNQUE2QixLQUFLLFVBQVU7QUFDbEQsU0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFFdkMsVUFBTSxVQUFVLElBQUksUUFBUSxLQUFLLFFBQVE7QUFDekMsVUFBTSxFQUFDLFdBQVcsUUFBTyxJQUFJLHNCQUFzQixPQUFPO0FBQzFELFFBQUksQ0FBQyxpQkFBaUIsSUFBSSxVQUFVLFFBQVEsR0FBRztBQUM5QyxZQUFNLElBQUksVUFBVSwwQkFBMEIsR0FBRyxpQkFBaUIsVUFBVSxTQUFTLFFBQVEsTUFBTSxFQUFFLENBQUMscUJBQXFCO0FBQUEsSUFDNUg7QUFFQSxRQUFJLFVBQVUsYUFBYSxTQUFTO0FBQ25DLFlBQU0sT0FBTyxhQUFnQixRQUFRLEdBQUc7QUFDeEMsWUFBTUMsWUFBVyxJQUFJLFNBQVMsTUFBTSxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsS0FBSyxTQUFRLEVBQUMsQ0FBQztBQUM5RSxjQUFRQSxTQUFRO0FBQ2hCO0FBQUEsSUFDRDtBQUdBLFVBQU0sUUFBUSxVQUFVLGFBQWEsV0FBVyxRQUFRSixPQUFNO0FBQzlELFVBQU0sRUFBQyxPQUFNLElBQUk7QUFDakIsUUFBSSxXQUFXO0FBRWYsVUFBTSxRQUFRLE1BQU07QUFDbkIsWUFBTSxRQUFRLElBQUksV0FBVyw0QkFBNEI7QUFDekQsYUFBTyxLQUFLO0FBQ1osVUFBSSxRQUFRLFFBQVEsUUFBUSxnQkFBZ0JDLFFBQU8sVUFBVTtBQUM1RCxnQkFBUSxLQUFLLFFBQVEsS0FBSztBQUFBLE1BQzNCO0FBRUEsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLE1BQU07QUFDaEM7QUFBQSxNQUNEO0FBRUEsZUFBUyxLQUFLLEtBQUssU0FBUyxLQUFLO0FBQUEsSUFDbEM7QUFFQSxRQUFJLFVBQVUsT0FBTyxTQUFTO0FBQzdCLFlBQU07QUFDTjtBQUFBLElBQ0Q7QUFFQSxVQUFNLG1CQUFtQixNQUFNO0FBQzlCLFlBQU07QUFDTixlQUFTO0FBQUEsSUFDVjtBQUdBLFVBQU0sV0FBVyxLQUFLLFVBQVUsU0FBUyxHQUFHLE9BQU87QUFFbkQsUUFBSSxRQUFRO0FBQ1gsYUFBTyxpQkFBaUIsU0FBUyxnQkFBZ0I7QUFBQSxJQUNsRDtBQUVBLFVBQU0sV0FBVyxNQUFNO0FBQ3RCLGVBQVMsTUFBTTtBQUNmLFVBQUksUUFBUTtBQUNYLGVBQU8sb0JBQW9CLFNBQVMsZ0JBQWdCO0FBQUEsTUFDckQ7QUFBQSxJQUNEO0FBRUEsYUFBUyxHQUFHLFNBQVMsV0FBUztBQUM3QixhQUFPLElBQUksV0FBVyxjQUFjLFFBQVEsR0FBRyxvQkFBb0IsTUFBTSxPQUFPLElBQUksVUFBVSxLQUFLLENBQUM7QUFDcEcsZUFBUztBQUFBLElBQ1YsQ0FBQztBQUVELHdDQUFvQyxVQUFVLFdBQVM7QUFDdEQsVUFBSSxZQUFZLFNBQVMsTUFBTTtBQUM5QixpQkFBUyxLQUFLLFFBQVEsS0FBSztBQUFBLE1BQzVCO0FBQUEsSUFDRCxDQUFDO0FBR0QsUUFBSSxRQUFRLFVBQVUsT0FBTztBQUc1QixlQUFTLEdBQUcsVUFBVSxPQUFLO0FBQzFCLFlBQUk7QUFDSixVQUFFLGdCQUFnQixPQUFPLE1BQU07QUFDOUIsaUNBQXVCLEVBQUU7QUFBQSxRQUMxQixDQUFDO0FBQ0QsVUFBRSxnQkFBZ0IsU0FBUyxjQUFZO0FBRXRDLGNBQUksWUFBWSx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO0FBQ25FLGtCQUFNLFFBQVEsSUFBSSxNQUFNLGlCQUFpQjtBQUN6QyxrQkFBTSxPQUFPO0FBQ2IscUJBQVMsS0FBSyxLQUFLLFNBQVMsS0FBSztBQUFBLFVBQ2xDO0FBQUEsUUFDRCxDQUFDO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDRjtBQUVBLGFBQVMsR0FBRyxZQUFZLGVBQWE7QUFDcEMsZUFBUyxXQUFXLENBQUM7QUFDckIsWUFBTSxVQUFVLGVBQWUsVUFBVSxVQUFVO0FBR25ELFVBQUksV0FBVyxVQUFVLFVBQVUsR0FBRztBQUVyQyxjQUFNLFdBQVcsUUFBUSxJQUFJLFVBQVU7QUFHdkMsWUFBSSxjQUFjO0FBQ2xCLFlBQUk7QUFDSCx3QkFBYyxhQUFhLE9BQU8sT0FBTyxJQUFJLElBQUksVUFBVSxRQUFRLEdBQUc7QUFBQSxRQUN2RSxRQUFRO0FBSVAsY0FBSSxRQUFRLGFBQWEsVUFBVTtBQUNsQyxtQkFBTyxJQUFJLFdBQVcsd0RBQXdELFFBQVEsSUFBSSxrQkFBa0IsQ0FBQztBQUM3RyxxQkFBUztBQUNUO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFHQSxnQkFBUSxRQUFRLFVBQVU7QUFBQSxVQUN6QixLQUFLO0FBQ0osbUJBQU8sSUFBSSxXQUFXLDBFQUEwRSxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQUM7QUFDN0gscUJBQVM7QUFDVDtBQUFBLFVBQ0QsS0FBSztBQUVKO0FBQUEsVUFDRCxLQUFLLFVBQVU7QUFFZCxnQkFBSSxnQkFBZ0IsTUFBTTtBQUN6QjtBQUFBLFlBQ0Q7QUFHQSxnQkFBSSxRQUFRLFdBQVcsUUFBUSxRQUFRO0FBQ3RDLHFCQUFPLElBQUksV0FBVyxnQ0FBZ0MsUUFBUSxHQUFHLElBQUksY0FBYyxDQUFDO0FBQ3BGLHVCQUFTO0FBQ1Q7QUFBQSxZQUNEO0FBSUEsa0JBQU0saUJBQWlCO0FBQUEsY0FDdEIsU0FBUyxJQUFJLFFBQVEsUUFBUSxPQUFPO0FBQUEsY0FDcEMsUUFBUSxRQUFRO0FBQUEsY0FDaEIsU0FBUyxRQUFRLFVBQVU7QUFBQSxjQUMzQixPQUFPLFFBQVE7QUFBQSxjQUNmLFVBQVUsUUFBUTtBQUFBLGNBQ2xCLFFBQVEsUUFBUTtBQUFBLGNBQ2hCLE1BQU0sTUFBTSxPQUFPO0FBQUEsY0FDbkIsUUFBUSxRQUFRO0FBQUEsY0FDaEIsTUFBTSxRQUFRO0FBQUEsY0FDZCxVQUFVLFFBQVE7QUFBQSxjQUNsQixnQkFBZ0IsUUFBUTtBQUFBLFlBQ3pCO0FBV0EsZ0JBQUksQ0FBQyxvQkFBb0IsUUFBUSxLQUFLLFdBQVcsS0FBSyxDQUFDLGVBQWUsUUFBUSxLQUFLLFdBQVcsR0FBRztBQUNoRyx5QkFBVyxRQUFRLENBQUMsaUJBQWlCLG9CQUFvQixVQUFVLFNBQVMsR0FBRztBQUM5RSwrQkFBZSxRQUFRLE9BQU8sSUFBSTtBQUFBLGNBQ25DO0FBQUEsWUFDRDtBQUdBLGdCQUFJLFVBQVUsZUFBZSxPQUFPLFFBQVEsUUFBUSxTQUFTLGdCQUFnQkEsUUFBTyxVQUFVO0FBQzdGLHFCQUFPLElBQUksV0FBVyw0REFBNEQsc0JBQXNCLENBQUM7QUFDekcsdUJBQVM7QUFDVDtBQUFBLFlBQ0Q7QUFHQSxnQkFBSSxVQUFVLGVBQWUsUUFBUyxVQUFVLGVBQWUsT0FBTyxVQUFVLGVBQWUsUUFBUSxRQUFRLFdBQVcsUUFBUztBQUNsSSw2QkFBZSxTQUFTO0FBQ3hCLDZCQUFlLE9BQU87QUFDdEIsNkJBQWUsUUFBUSxPQUFPLGdCQUFnQjtBQUFBLFlBQy9DO0FBR0Esa0JBQU0seUJBQXlCLDhCQUE4QixPQUFPO0FBQ3BFLGdCQUFJLHdCQUF3QjtBQUMzQiw2QkFBZSxpQkFBaUI7QUFBQSxZQUNqQztBQUdBLG9CQUFRLE1BQU0sSUFBSSxRQUFRLGFBQWEsY0FBYyxDQUFDLENBQUM7QUFDdkQscUJBQVM7QUFDVDtBQUFBLFVBQ0Q7QUFBQSxVQUVBO0FBQ0MsbUJBQU8sT0FBTyxJQUFJLFVBQVUsb0JBQW9CLFFBQVEsUUFBUSwyQ0FBMkMsQ0FBQztBQUFBLFFBQzlHO0FBQUEsTUFDRDtBQUdBLFVBQUksUUFBUTtBQUNYLGtCQUFVLEtBQUssT0FBTyxNQUFNO0FBQzNCLGlCQUFPLG9CQUFvQixTQUFTLGdCQUFnQjtBQUFBLFFBQ3JELENBQUM7QUFBQSxNQUNGO0FBRUEsVUFBSSxPQUFPLEtBQUssV0FBVyxJQUFJQyxhQUFZLEdBQUcsV0FBUztBQUN0RCxZQUFJLE9BQU87QUFDVixpQkFBTyxLQUFLO0FBQUEsUUFDYjtBQUFBLE1BQ0QsQ0FBQztBQUdELFVBQUksUUFBUSxVQUFVLFVBQVU7QUFDL0Isa0JBQVUsR0FBRyxXQUFXLGdCQUFnQjtBQUFBLE1BQ3pDO0FBRUEsWUFBTSxrQkFBa0I7QUFBQSxRQUN2QixLQUFLLFFBQVE7QUFBQSxRQUNiLFFBQVEsVUFBVTtBQUFBLFFBQ2xCLFlBQVksVUFBVTtBQUFBLFFBQ3RCO0FBQUEsUUFDQSxNQUFNLFFBQVE7QUFBQSxRQUNkLFNBQVMsUUFBUTtBQUFBLFFBQ2pCLGVBQWUsUUFBUTtBQUFBLE1BQ3hCO0FBR0EsWUFBTSxVQUFVLFFBQVEsSUFBSSxrQkFBa0I7QUFVOUMsVUFBSSxDQUFDLFFBQVEsWUFBWSxRQUFRLFdBQVcsVUFBVSxZQUFZLFFBQVEsVUFBVSxlQUFlLE9BQU8sVUFBVSxlQUFlLEtBQUs7QUFDdkksbUJBQVcsSUFBSSxTQUFTLE1BQU0sZUFBZTtBQUM3QyxnQkFBUSxRQUFRO0FBQ2hCO0FBQUEsTUFDRDtBQU9BLFlBQU0sY0FBYztBQUFBLFFBQ25CLE9BQU8sS0FBSztBQUFBLFFBQ1osYUFBYSxLQUFLO0FBQUEsTUFDbkI7QUFHQSxVQUFJLFlBQVksVUFBVSxZQUFZLFVBQVU7QUFDL0MsZUFBTyxLQUFLLE1BQU0sS0FBSyxhQUFhLFdBQVcsR0FBRyxXQUFTO0FBQzFELGNBQUksT0FBTztBQUNWLG1CQUFPLEtBQUs7QUFBQSxVQUNiO0FBQUEsUUFDRCxDQUFDO0FBQ0QsbUJBQVcsSUFBSSxTQUFTLE1BQU0sZUFBZTtBQUM3QyxnQkFBUSxRQUFRO0FBQ2hCO0FBQUEsTUFDRDtBQUdBLFVBQUksWUFBWSxhQUFhLFlBQVksYUFBYTtBQUdyRCxjQUFNLE1BQU0sS0FBSyxXQUFXLElBQUlBLGFBQVksR0FBRyxXQUFTO0FBQ3ZELGNBQUksT0FBTztBQUNWLG1CQUFPLEtBQUs7QUFBQSxVQUNiO0FBQUEsUUFDRCxDQUFDO0FBQ0QsWUFBSSxLQUFLLFFBQVEsV0FBUztBQUV6QixlQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVUsR0FBTTtBQUMvQixtQkFBTyxLQUFLLE1BQU0sS0FBSyxjQUFjLEdBQUcsV0FBUztBQUNoRCxrQkFBSSxPQUFPO0FBQ1YsdUJBQU8sS0FBSztBQUFBLGNBQ2I7QUFBQSxZQUNELENBQUM7QUFBQSxVQUNGLE9BQU87QUFDTixtQkFBTyxLQUFLLE1BQU0sS0FBSyxpQkFBaUIsR0FBRyxXQUFTO0FBQ25ELGtCQUFJLE9BQU87QUFDVix1QkFBTyxLQUFLO0FBQUEsY0FDYjtBQUFBLFlBQ0QsQ0FBQztBQUFBLFVBQ0Y7QUFFQSxxQkFBVyxJQUFJLFNBQVMsTUFBTSxlQUFlO0FBQzdDLGtCQUFRLFFBQVE7QUFBQSxRQUNqQixDQUFDO0FBQ0QsWUFBSSxLQUFLLE9BQU8sTUFBTTtBQUdyQixjQUFJLENBQUMsVUFBVTtBQUNkLHVCQUFXLElBQUksU0FBUyxNQUFNLGVBQWU7QUFDN0Msb0JBQVEsUUFBUTtBQUFBLFVBQ2pCO0FBQUEsUUFDRCxDQUFDO0FBQ0Q7QUFBQSxNQUNEO0FBR0EsVUFBSSxZQUFZLE1BQU07QUFDckIsZUFBTyxLQUFLLE1BQU0sS0FBSyx1QkFBdUIsR0FBRyxXQUFTO0FBQ3pELGNBQUksT0FBTztBQUNWLG1CQUFPLEtBQUs7QUFBQSxVQUNiO0FBQUEsUUFDRCxDQUFDO0FBQ0QsbUJBQVcsSUFBSSxTQUFTLE1BQU0sZUFBZTtBQUM3QyxnQkFBUSxRQUFRO0FBQ2hCO0FBQUEsTUFDRDtBQUdBLGlCQUFXLElBQUksU0FBUyxNQUFNLGVBQWU7QUFDN0MsY0FBUSxRQUFRO0FBQUEsSUFDakIsQ0FBQztBQUdELGtCQUFjLFVBQVUsT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUFBLEVBQzlDLENBQUM7QUFDRjtBQUVBLFNBQVMsb0NBQW9DLFNBQVMsZUFBZTtBQUNwRSxRQUFNLGFBQWFDLFFBQU8sS0FBSyxXQUFXO0FBRTFDLE1BQUksb0JBQW9CO0FBQ3hCLE1BQUksMEJBQTBCO0FBQzlCLE1BQUk7QUFFSixVQUFRLEdBQUcsWUFBWSxjQUFZO0FBQ2xDLFVBQU0sRUFBQyxRQUFPLElBQUk7QUFDbEIsd0JBQW9CLFFBQVEsbUJBQW1CLE1BQU0sYUFBYSxDQUFDLFFBQVEsZ0JBQWdCO0FBQUEsRUFDNUYsQ0FBQztBQUVELFVBQVEsR0FBRyxVQUFVLFlBQVU7QUFDOUIsVUFBTSxnQkFBZ0IsTUFBTTtBQUMzQixVQUFJLHFCQUFxQixDQUFDLHlCQUF5QjtBQUNsRCxjQUFNLFFBQVEsSUFBSSxNQUFNLGlCQUFpQjtBQUN6QyxjQUFNLE9BQU87QUFDYixzQkFBYyxLQUFLO0FBQUEsTUFDcEI7QUFBQSxJQUNEO0FBRUEsVUFBTSxTQUFTLFNBQU87QUFDckIsZ0NBQTBCQSxRQUFPLFFBQVEsSUFBSSxNQUFNLEVBQUUsR0FBRyxVQUFVLE1BQU07QUFHeEUsVUFBSSxDQUFDLDJCQUEyQixlQUFlO0FBQzlDLGtDQUNDQSxRQUFPLFFBQVEsY0FBYyxNQUFNLEVBQUUsR0FBRyxXQUFXLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxLQUNwRUEsUUFBTyxRQUFRLElBQUksTUFBTSxFQUFFLEdBQUcsV0FBVyxNQUFNLENBQUMsQ0FBQyxNQUFNO0FBQUEsTUFFekQ7QUFFQSxzQkFBZ0I7QUFBQSxJQUNqQjtBQUVBLFdBQU8sZ0JBQWdCLFNBQVMsYUFBYTtBQUM3QyxXQUFPLEdBQUcsUUFBUSxNQUFNO0FBRXhCLFlBQVEsR0FBRyxTQUFTLE1BQU07QUFDekIsYUFBTyxlQUFlLFNBQVMsYUFBYTtBQUM1QyxhQUFPLGVBQWUsUUFBUSxNQUFNO0FBQUEsSUFDckMsQ0FBQztBQUFBLEVBQ0YsQ0FBQztBQUNGO0FBaGFBLElBc0NNO0FBdENOO0FBQUE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQSxJQUFNLG1CQUFtQixvQkFBSSxJQUFJLENBQUMsU0FBUyxTQUFTLFFBQVEsQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIkJ1ZmZlciIsICJ0eXBlcyIsICJJTlRFUk5BTFMiLCAiZGVwcmVjYXRlIiwgIklOVEVSTkFMUyIsICJodHRwIiwgIlN0cmVhbSIsICJQYXNzVGhyb3VnaCIsICJCdWZmZXIiLCAicmVzcG9uc2UiXQp9Cg==
