#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS,
  __esm,
  __require,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable } = __require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse };
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http = __require("http");
    var net = __require("net");
    var tls = __require("tls");
    var { randomBytes, createHash } = __require("crypto");
    var { Duplex, Readable } = __require("stream");
    var { URL } = __require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse };
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http = __require("http");
    var { Duplex } = __require("stream");
    var { createHash } = __require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// node_modules/.pnpm/ws@8.20.0/node_modules/ws/wrapper.mjs
var import_stream, import_extension, import_permessage_deflate, import_receiver, import_sender, import_subprotocol, import_websocket, import_websocket_server, wrapper_default;
var init_wrapper = __esm({
  "node_modules/.pnpm/ws@8.20.0/node_modules/ws/wrapper.mjs"() {
    import_stream = __toESM(require_stream(), 1);
    import_extension = __toESM(require_extension(), 1);
    import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
    import_receiver = __toESM(require_receiver(), 1);
    import_sender = __toESM(require_sender(), 1);
    import_subprotocol = __toESM(require_subprotocol(), 1);
    import_websocket = __toESM(require_websocket(), 1);
    import_websocket_server = __toESM(require_websocket_server(), 1);
    wrapper_default = import_websocket.default;
  }
});

export {
  import_stream,
  import_extension,
  import_permessage_deflate,
  import_receiver,
  import_sender,
  import_subprotocol,
  import_websocket,
  import_websocket_server,
  wrapper_default,
  init_wrapper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dzQDguMjAuMC9ub2RlX21vZHVsZXMvd3MvbGliL2NvbnN0YW50cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy9saWIvYnVmZmVyLXV0aWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dzQDguMjAuMC9ub2RlX21vZHVsZXMvd3MvbGliL2xpbWl0ZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dzQDguMjAuMC9ub2RlX21vZHVsZXMvd3MvbGliL3Blcm1lc3NhZ2UtZGVmbGF0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy9saWIvdmFsaWRhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy9saWIvcmVjZWl2ZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dzQDguMjAuMC9ub2RlX21vZHVsZXMvd3MvbGliL3NlbmRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy9saWIvZXZlbnQtdGFyZ2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93c0A4LjIwLjAvbm9kZV9tb2R1bGVzL3dzL2xpYi9leHRlbnNpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dzQDguMjAuMC9ub2RlX21vZHVsZXMvd3MvbGliL3dlYnNvY2tldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy9saWIvc3RyZWFtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93c0A4LjIwLjAvbm9kZV9tb2R1bGVzL3dzL2xpYi9zdWJwcm90b2NvbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy9saWIvd2Vic29ja2V0LXNlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NAOC4yMC4wL25vZGVfbW9kdWxlcy93cy93cmFwcGVyLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBCSU5BUllfVFlQRVMgPSBbJ25vZGVidWZmZXInLCAnYXJyYXlidWZmZXInLCAnZnJhZ21lbnRzJ107XG5jb25zdCBoYXNCbG9iID0gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnO1xuXG5pZiAoaGFzQmxvYikgQklOQVJZX1RZUEVTLnB1c2goJ2Jsb2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgQ0xPU0VfVElNRU9VVDogMzAwMDAsXG4gIEVNUFRZX0JVRkZFUjogQnVmZmVyLmFsbG9jKDApLFxuICBHVUlEOiAnMjU4RUFGQTUtRTkxNC00N0RBLTk1Q0EtQzVBQjBEQzg1QjExJyxcbiAgaGFzQmxvYixcbiAga0Zvck9uRXZlbnRBdHRyaWJ1dGU6IFN5bWJvbCgna0lzRm9yT25FdmVudEF0dHJpYnV0ZScpLFxuICBrTGlzdGVuZXI6IFN5bWJvbCgna0xpc3RlbmVyJyksXG4gIGtTdGF0dXNDb2RlOiBTeW1ib2woJ3N0YXR1cy1jb2RlJyksXG4gIGtXZWJTb2NrZXQ6IFN5bWJvbCgnd2Vic29ja2V0JyksXG4gIE5PT1A6ICgpID0+IHt9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBFTVBUWV9CVUZGRVIgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuXG4vKipcbiAqIE1lcmdlcyBhbiBhcnJheSBvZiBidWZmZXJzIGludG8gYSBuZXcgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyW119IGxpc3QgVGhlIGFycmF5IG9mIGJ1ZmZlcnMgdG8gY29uY2F0XG4gKiBAcGFyYW0ge051bWJlcn0gdG90YWxMZW5ndGggVGhlIHRvdGFsIGxlbmd0aCBvZiBidWZmZXJzIGluIHRoZSBsaXN0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IFRoZSByZXN1bHRpbmcgYnVmZmVyXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBFTVBUWV9CVUZGRVI7XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGxpc3RbMF07XG5cbiAgY29uc3QgdGFyZ2V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKHRvdGFsTGVuZ3RoKTtcbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnVmID0gbGlzdFtpXTtcbiAgICB0YXJnZXQuc2V0KGJ1Ziwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gYnVmLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChvZmZzZXQgPCB0b3RhbExlbmd0aCkge1xuICAgIHJldHVybiBuZXcgRmFzdEJ1ZmZlcih0YXJnZXQuYnVmZmVyLCB0YXJnZXQuYnl0ZU9mZnNldCwgb2Zmc2V0KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogTWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IHNvdXJjZSBUaGUgYnVmZmVyIHRvIG1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHBhcmFtIHtCdWZmZXJ9IG91dHB1dCBUaGUgYnVmZmVyIHdoZXJlIHRvIHN0b3JlIHRoZSByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCBhdCB3aGljaCB0byBzdGFydCB3cml0aW5nXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gbWFzay5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gX21hc2soc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRbb2Zmc2V0ICsgaV0gPSBzb3VyY2VbaV0gXiBtYXNrW2kgJiAzXTtcbiAgfVxufVxuXG4vKipcbiAqIFVubWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVubWFza1xuICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIF91bm1hc2soYnVmZmVyLCBtYXNrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgYnVmZmVyW2ldIF49IG1hc2tbaSAmIDNdO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBidWZmZXIgdG8gYW4gYEFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmIFRoZSBidWZmZXIgdG8gY29udmVydFxuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IENvbnZlcnRlZCBidWZmZXJcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9BcnJheUJ1ZmZlcihidWYpIHtcbiAgaWYgKGJ1Zi5sZW5ndGggPT09IGJ1Zi5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBidWYuYnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGRhdGFgIHRvIGEgYEJ1ZmZlcmAuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRhIFRoZSBkYXRhIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gVGhlIGJ1ZmZlclxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB0b0J1ZmZlcihkYXRhKSB7XG4gIHRvQnVmZmVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSByZXR1cm4gZGF0YTtcblxuICBsZXQgYnVmO1xuXG4gIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICBidWYgPSBuZXcgRmFzdEJ1ZmZlcihkYXRhKTtcbiAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICBidWYgPSBuZXcgRmFzdEJ1ZmZlcihkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgIHRvQnVmZmVyLnJlYWRPbmx5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYnVmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29uY2F0LFxuICBtYXNrOiBfbWFzayxcbiAgdG9BcnJheUJ1ZmZlcixcbiAgdG9CdWZmZXIsXG4gIHVubWFzazogX3VubWFza1xufTtcblxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG5pZiAoIXByb2Nlc3MuZW52LldTX05PX0JVRkZFUl9VVElMKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJ2J1ZmZlcnV0aWwnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzLm1hc2sgPSBmdW5jdGlvbiAoc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICBpZiAobGVuZ3RoIDwgNDgpIF9tYXNrKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgICBlbHNlIGJ1ZmZlclV0aWwubWFzayhzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cy51bm1hc2sgPSBmdW5jdGlvbiAoYnVmZmVyLCBtYXNrKSB7XG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCA8IDMyKSBfdW5tYXNrKGJ1ZmZlciwgbWFzayk7XG4gICAgICBlbHNlIGJ1ZmZlclV0aWwudW5tYXNrKGJ1ZmZlciwgbWFzayk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIENvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgdGhlIGVycm9yLlxuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBrRG9uZSA9IFN5bWJvbCgna0RvbmUnKTtcbmNvbnN0IGtSdW4gPSBTeW1ib2woJ2tSdW4nKTtcblxuLyoqXG4gKiBBIHZlcnkgc2ltcGxlIGpvYiBxdWV1ZSB3aXRoIGFkanVzdGFibGUgY29uY3VycmVuY3kuIEFkYXB0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL1NUUk1ML2FzeW5jLWxpbWl0ZXJcbiAqL1xuY2xhc3MgTGltaXRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBMaW1pdGVyYC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtjb25jdXJyZW5jeT1JbmZpbml0eV0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGpvYnMgYWxsb3dlZFxuICAgKiAgICAgdG8gcnVuIGNvbmN1cnJlbnRseVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uY3VycmVuY3kpIHtcbiAgICB0aGlzW2tEb25lXSA9ICgpID0+IHtcbiAgICAgIHRoaXMucGVuZGluZy0tO1xuICAgICAgdGhpc1trUnVuXSgpO1xuICAgIH07XG4gICAgdGhpcy5jb25jdXJyZW5jeSA9IGNvbmN1cnJlbmN5IHx8IEluZmluaXR5O1xuICAgIHRoaXMuam9icyA9IFtdO1xuICAgIHRoaXMucGVuZGluZyA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGpvYiB0byB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGpvYiBUaGUgam9iIHRvIHJ1blxuICAgKiBAcHVibGljXG4gICAqL1xuICBhZGQoam9iKSB7XG4gICAgdGhpcy5qb2JzLnB1c2goam9iKTtcbiAgICB0aGlzW2tSdW5dKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGpvYiBmcm9tIHRoZSBxdWV1ZSBhbmQgcnVucyBpdCBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtrUnVuXSgpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nID09PSB0aGlzLmNvbmN1cnJlbmN5KSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5qb2JzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgam9iID0gdGhpcy5qb2JzLnNoaWZ0KCk7XG5cbiAgICAgIHRoaXMucGVuZGluZysrO1xuICAgICAgam9iKHRoaXNba0RvbmVdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW1pdGVyO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcblxuY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcbmNvbnN0IExpbWl0ZXIgPSByZXF1aXJlKCcuL2xpbWl0ZXInKTtcbmNvbnN0IHsga1N0YXR1c0NvZGUgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuY29uc3QgVFJBSUxFUiA9IEJ1ZmZlci5mcm9tKFsweDAwLCAweDAwLCAweGZmLCAweGZmXSk7XG5jb25zdCBrUGVyTWVzc2FnZURlZmxhdGUgPSBTeW1ib2woJ3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3Qga1RvdGFsTGVuZ3RoID0gU3ltYm9sKCd0b3RhbC1sZW5ndGgnKTtcbmNvbnN0IGtDYWxsYmFjayA9IFN5bWJvbCgnY2FsbGJhY2snKTtcbmNvbnN0IGtCdWZmZXJzID0gU3ltYm9sKCdidWZmZXJzJyk7XG5jb25zdCBrRXJyb3IgPSBTeW1ib2woJ2Vycm9yJyk7XG5cbi8vXG4vLyBXZSBsaW1pdCB6bGliIGNvbmN1cnJlbmN5LCB3aGljaCBwcmV2ZW50cyBzZXZlcmUgbWVtb3J5IGZyYWdtZW50YXRpb25cbi8vIGFzIGRvY3VtZW50ZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy84ODcxI2lzc3VlY29tbWVudC0yNTA5MTU5MTNcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vd2Vic29ja2V0cy93cy9pc3N1ZXMvMTIwMlxuLy9cbi8vIEludGVudGlvbmFsbHkgZ2xvYmFsOyBpdCdzIHRoZSBnbG9iYWwgdGhyZWFkIHBvb2wgdGhhdCdzIGFuIGlzc3VlLlxuLy9cbmxldCB6bGliTGltaXRlcjtcblxuLyoqXG4gKiBwZXJtZXNzYWdlLWRlZmxhdGUgaW1wbGVtZW50YXRpb24uXG4gKi9cbmNsYXNzIFBlck1lc3NhZ2VEZWZsYXRlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBQZXJNZXNzYWdlRGVmbGF0ZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIHsoQm9vbGVhbnxOdW1iZXIpfSBbb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzXSBBZHZlcnRpc2Ugc3VwcG9ydFxuICAgKiAgICAgZm9yLCBvciByZXF1ZXN0LCBhIGN1c3RvbSBjbGllbnQgd2luZG93IHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcj1mYWxzZV0gQWR2ZXJ0aXNlL1xuICAgKiAgICAgYWNrbm93bGVkZ2UgZGlzYWJsaW5nIG9mIGNsaWVudCBjb250ZXh0IHRha2VvdmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0PTEwXSBUaGUgbnVtYmVyIG9mIGNvbmN1cnJlbnRcbiAgICogICAgIGNhbGxzIHRvIHpsaWJcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc1NlcnZlcj1mYWxzZV0gQ3JlYXRlIHRoZSBpbnN0YW5jZSBpbiBlaXRoZXJcbiAgICogICAgIHNlcnZlciBvciBjbGllbnQgbW9kZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4UGF5bG9hZD0wXSBUaGUgbWF4aW11bSBhbGxvd2VkIG1lc3NhZ2UgbGVuZ3RoXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0c10gUmVxdWVzdC9jb25maXJtIHRoZVxuICAgKiAgICAgdXNlIG9mIGEgY3VzdG9tIHNlcnZlciB3aW5kb3cgc2l6ZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyPWZhbHNlXSBSZXF1ZXN0L2FjY2VwdFxuICAgKiAgICAgZGlzYWJsaW5nIG9mIHNlcnZlciBjb250ZXh0IHRha2VvdmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy50aHJlc2hvbGQ9MTAyNF0gU2l6ZSAoaW4gYnl0ZXMpIGJlbG93IHdoaWNoXG4gICAqICAgICBtZXNzYWdlcyBzaG91bGQgbm90IGJlIGNvbXByZXNzZWQgaWYgY29udGV4dCB0YWtlb3ZlciBpcyBkaXNhYmxlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuemxpYkRlZmxhdGVPcHRpb25zXSBPcHRpb25zIHRvIHBhc3MgdG8gemxpYiBvblxuICAgKiAgICAgZGVmbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuemxpYkluZmxhdGVPcHRpb25zXSBPcHRpb25zIHRvIHBhc3MgdG8gemxpYiBvblxuICAgKiAgICAgaW5mbGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuX3RocmVzaG9sZCA9XG4gICAgICB0aGlzLl9vcHRpb25zLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fb3B0aW9ucy50aHJlc2hvbGQgOiAxMDI0O1xuICAgIHRoaXMuX21heFBheWxvYWQgPSB0aGlzLl9vcHRpb25zLm1heFBheWxvYWQgfCAwO1xuICAgIHRoaXMuX2lzU2VydmVyID0gISF0aGlzLl9vcHRpb25zLmlzU2VydmVyO1xuICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuICAgIHRoaXMuX2luZmxhdGUgPSBudWxsO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBudWxsO1xuXG4gICAgaWYgKCF6bGliTGltaXRlcikge1xuICAgICAgY29uc3QgY29uY3VycmVuY3kgPVxuICAgICAgICB0aGlzLl9vcHRpb25zLmNvbmN1cnJlbmN5TGltaXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gdGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0XG4gICAgICAgICAgOiAxMDtcbiAgICAgIHpsaWJMaW1pdGVyID0gbmV3IExpbWl0ZXIoY29uY3VycmVuY3kpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBleHRlbnNpb25OYW1lKCkge1xuICAgIHJldHVybiAncGVybWVzc2FnZS1kZWZsYXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVyLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEV4dGVuc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIG9mZmVyKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc2VydmVyTm9Db250ZXh0VGFrZW92ZXIpIHtcbiAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zZXJ2ZXJNYXhXaW5kb3dCaXRzKSB7XG4gICAgICBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cyA9IHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cykge1xuICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT0gbnVsbCkge1xuICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0IGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci9yZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gY29uZmlndXJhdGlvbnMgVGhlIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlcnMvcmVwb25zZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFjY2VwdGVkIGNvbmZpZ3VyYXRpb25cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWNjZXB0KGNvbmZpZ3VyYXRpb25zKSB7XG4gICAgY29uZmlndXJhdGlvbnMgPSB0aGlzLm5vcm1hbGl6ZVBhcmFtcyhjb25maWd1cmF0aW9ucyk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHRoaXMuX2lzU2VydmVyXG4gICAgICA/IHRoaXMuYWNjZXB0QXNTZXJ2ZXIoY29uZmlndXJhdGlvbnMpXG4gICAgICA6IHRoaXMuYWNjZXB0QXNDbGllbnQoY29uZmlndXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIGFsbCByZXNvdXJjZXMgdXNlZCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjbGVhbnVwKCkge1xuICAgIGlmICh0aGlzLl9pbmZsYXRlKSB7XG4gICAgICB0aGlzLl9pbmZsYXRlLmNsb3NlKCk7XG4gICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVmbGF0ZSkge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9kZWZsYXRlW2tDYWxsYmFja107XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1RoZSBkZWZsYXRlIHN0cmVhbSB3YXMgY2xvc2VkIHdoaWxlIGRhdGEgd2FzIGJlaW5nIHByb2Nlc3NlZCdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqICBBY2NlcHQgYW4gZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBvZmZlcnMgVGhlIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlcnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY2NlcHRBc1NlcnZlcihvZmZlcnMpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5fb3B0aW9ucztcbiAgICBjb25zdCBhY2NlcHRlZCA9IG9mZmVycy5maW5kKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKG9wdHMuc2VydmVyTm9Db250ZXh0VGFrZW92ZXIgPT09IGZhbHNlICYmXG4gICAgICAgICAgcGFyYW1zLnNlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyKSB8fFxuICAgICAgICAocGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgJiZcbiAgICAgICAgICAob3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICAgIG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA+IHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzKSkpIHx8XG4gICAgICAgICh0eXBlb2Ygb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICFwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKCFhY2NlcHRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb25lIG9mIHRoZSBleHRlbnNpb24gb2ZmZXJzIGNhbiBiZSBhY2NlcHRlZCcpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnNlcnZlck5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBhY2NlcHRlZC5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsaWVudE5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBhY2NlcHRlZC5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgYWNjZXB0ZWQuc2VydmVyX21heF93aW5kb3dfYml0cyA9IG9wdHMuc2VydmVyTWF4V2luZG93Qml0cztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICBhY2NlcHRlZC5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBhY2NlcHRlZC5jbGllbnRfbWF4X3dpbmRvd19iaXRzID09PSB0cnVlIHx8XG4gICAgICBvcHRzLmNsaWVudE1heFdpbmRvd0JpdHMgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBkZWxldGUgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cztcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjZXB0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0IHRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlc3BvbnNlIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gcmVzcG9uc2VcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY2NlcHRBc0NsaWVudChyZXNwb25zZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHJlc3BvbnNlWzBdO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3ZlciA9PT0gZmFsc2UgJiZcbiAgICAgIHBhcmFtcy5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHBhcmFtZXRlciBcImNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyXCInKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gZmFsc2UgfHxcbiAgICAgICh0eXBlb2YgdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cyA+IHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cylcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1VuZXhwZWN0ZWQgb3IgaW52YWxpZCBwYXJhbWV0ZXIgXCJjbGllbnRfbWF4X3dpbmRvd19iaXRzXCInXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbmZpZ3VyYXRpb25zIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzL3JlcG9uc2VcbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSBvZmZlcnMvcmVzcG9uc2Ugd2l0aCBub3JtYWxpemVkIHBhcmFtZXRlcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG5vcm1hbGl6ZVBhcmFtcyhjb25maWd1cmF0aW9ucykge1xuICAgIGNvbmZpZ3VyYXRpb25zLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyYW1zW2tleV07XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcIiR7a2V5fVwiIG11c3QgaGF2ZSBvbmx5IGEgc2luZ2xlIHZhbHVlYCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGllbnRfbWF4X3dpbmRvd19iaXRzJykge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gK3ZhbHVlO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG51bSkgfHwgbnVtIDwgOCB8fCBudW0gPiAxNSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IG51bTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1NlcnZlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgYEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcIiR7a2V5fVwiOiAke3ZhbHVlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3NlcnZlcl9tYXhfd2luZG93X2JpdHMnKSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gK3ZhbHVlO1xuICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pIHx8IG51bSA8IDggfHwgbnVtID4gMTUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IG51bTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlcicgfHxcbiAgICAgICAgICBrZXkgPT09ICdzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcidcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHBhcmFtZXRlciBcIiR7a2V5fVwiYCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzcyBkYXRhLiBDb25jdXJyZW5jeSBsaW1pdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZGVjb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgemxpYkxpbWl0ZXIuYWRkKChkb25lKSA9PiB7XG4gICAgICB0aGlzLl9kZWNvbXByZXNzKGRhdGEsIGZpbiwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHJlc3MgZGF0YS4gQ29uY3VycmVuY3kgbGltaXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHsoQnVmZmVyfFN0cmluZyl9IGRhdGEgRGF0YSB0byBjb21wcmVzc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgemxpYkxpbWl0ZXIuYWRkKChkb25lKSA9PiB7XG4gICAgICB0aGlzLl9jb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGVjb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9pc1NlcnZlciA/ICdjbGllbnQnIDogJ3NlcnZlcic7XG5cbiAgICBpZiAoIXRoaXMuX2luZmxhdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGAke2VuZHBvaW50fV9tYXhfd2luZG93X2JpdHNgO1xuICAgICAgY29uc3Qgd2luZG93Qml0cyA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnBhcmFtc1trZXldICE9PSAnbnVtYmVyJ1xuICAgICAgICAgID8gemxpYi5aX0RFRkFVTFRfV0lORE9XQklUU1xuICAgICAgICAgIDogdGhpcy5wYXJhbXNba2V5XTtcblxuICAgICAgdGhpcy5faW5mbGF0ZSA9IHpsaWIuY3JlYXRlSW5mbGF0ZVJhdyh7XG4gICAgICAgIC4uLnRoaXMuX29wdGlvbnMuemxpYkluZmxhdGVPcHRpb25zLFxuICAgICAgICB3aW5kb3dCaXRzXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2luZmxhdGVba1Blck1lc3NhZ2VEZWZsYXRlXSA9IHRoaXM7XG4gICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF0gPSAwO1xuICAgICAgdGhpcy5faW5mbGF0ZVtrQnVmZmVyc10gPSBbXTtcbiAgICAgIHRoaXMuX2luZmxhdGUub24oJ2Vycm9yJywgaW5mbGF0ZU9uRXJyb3IpO1xuICAgICAgdGhpcy5faW5mbGF0ZS5vbignZGF0YScsIGluZmxhdGVPbkRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuX2luZmxhdGVba0NhbGxiYWNrXSA9IGNhbGxiYWNrO1xuXG4gICAgdGhpcy5faW5mbGF0ZS53cml0ZShkYXRhKTtcbiAgICBpZiAoZmluKSB0aGlzLl9pbmZsYXRlLndyaXRlKFRSQUlMRVIpO1xuXG4gICAgdGhpcy5faW5mbGF0ZS5mbHVzaCgoKSA9PiB7XG4gICAgICBjb25zdCBlcnIgPSB0aGlzLl9pbmZsYXRlW2tFcnJvcl07XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYnVmZmVyVXRpbC5jb25jYXQoXG4gICAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdLFxuICAgICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF1cbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLl9pbmZsYXRlLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQpIHtcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdID0gW107XG5cbiAgICAgICAgaWYgKGZpbiAmJiB0aGlzLnBhcmFtc1tgJHtlbmRwb2ludH1fbm9fY29udGV4dF90YWtlb3ZlcmBdKSB7XG4gICAgICAgICAgdGhpcy5faW5mbGF0ZS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXByZXNzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIERhdGEgdG8gY29tcHJlc3NcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9pc1NlcnZlciA/ICdzZXJ2ZXInIDogJ2NsaWVudCc7XG5cbiAgICBpZiAoIXRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGAke2VuZHBvaW50fV9tYXhfd2luZG93X2JpdHNgO1xuICAgICAgY29uc3Qgd2luZG93Qml0cyA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnBhcmFtc1trZXldICE9PSAnbnVtYmVyJ1xuICAgICAgICAgID8gemxpYi5aX0RFRkFVTFRfV0lORE9XQklUU1xuICAgICAgICAgIDogdGhpcy5wYXJhbXNba2V5XTtcblxuICAgICAgdGhpcy5fZGVmbGF0ZSA9IHpsaWIuY3JlYXRlRGVmbGF0ZVJhdyh7XG4gICAgICAgIC4uLnRoaXMuX29wdGlvbnMuemxpYkRlZmxhdGVPcHRpb25zLFxuICAgICAgICB3aW5kb3dCaXRzXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZGVmbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2RlZmxhdGVba0J1ZmZlcnNdID0gW107XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUub24oJ2RhdGEnLCBkZWZsYXRlT25EYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kZWZsYXRlW2tDYWxsYmFja10gPSBjYWxsYmFjaztcblxuICAgIHRoaXMuX2RlZmxhdGUud3JpdGUoZGF0YSk7XG4gICAgdGhpcy5fZGVmbGF0ZS5mbHVzaCh6bGliLlpfU1lOQ19GTFVTSCwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9kZWZsYXRlKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBkZWZsYXRlIHN0cmVhbSB3YXMgY2xvc2VkIHdoaWxlIGRhdGEgd2FzIGJlaW5nIHByb2Nlc3NlZC5cbiAgICAgICAgLy9cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IGJ1ZmZlclV0aWwuY29uY2F0KFxuICAgICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSxcbiAgICAgICAgdGhpcy5fZGVmbGF0ZVtrVG90YWxMZW5ndGhdXG4gICAgICApO1xuXG4gICAgICBpZiAoZmluKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRmFzdEJ1ZmZlcihkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmxlbmd0aCAtIDQpO1xuICAgICAgfVxuXG4gICAgICAvL1xuICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGNhbGxiYWNrIHdpbGwgbm90IGJlIGNhbGxlZCBhZ2FpbiBpblxuICAgICAgLy8gYFBlck1lc3NhZ2VEZWZsYXRlI2NsZWFudXAoKWAuXG4gICAgICAvL1xuICAgICAgdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdID0gbnVsbDtcblxuICAgICAgdGhpcy5fZGVmbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2RlZmxhdGVba0J1ZmZlcnNdID0gW107XG5cbiAgICAgIGlmIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkge1xuICAgICAgICB0aGlzLl9kZWZsYXRlLnJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyTWVzc2FnZURlZmxhdGU7XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5EZWZsYXRlUmF3YCBzdHJlYW0gYCdkYXRhJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIEEgY2h1bmsgb2YgZGF0YVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZU9uRGF0YShjaHVuaykge1xuICB0aGlzW2tCdWZmZXJzXS5wdXNoKGNodW5rKTtcbiAgdGhpc1trVG90YWxMZW5ndGhdICs9IGNodW5rLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGB6bGliLkluZmxhdGVSYXdgIHN0cmVhbSBgJ2RhdGEnYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgQSBjaHVuayBvZiBkYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbmZsYXRlT25EYXRhKGNodW5rKSB7XG4gIHRoaXNba1RvdGFsTGVuZ3RoXSArPSBjaHVuay5sZW5ndGg7XG5cbiAgaWYgKFxuICAgIHRoaXNba1Blck1lc3NhZ2VEZWZsYXRlXS5fbWF4UGF5bG9hZCA8IDEgfHxcbiAgICB0aGlzW2tUb3RhbExlbmd0aF0gPD0gdGhpc1trUGVyTWVzc2FnZURlZmxhdGVdLl9tYXhQYXlsb2FkXG4gICkge1xuICAgIHRoaXNba0J1ZmZlcnNdLnB1c2goY2h1bmspO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXNba0Vycm9yXSA9IG5ldyBSYW5nZUVycm9yKCdNYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkJyk7XG4gIHRoaXNba0Vycm9yXS5jb2RlID0gJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCc7XG4gIHRoaXNba0Vycm9yXVtrU3RhdHVzQ29kZV0gPSAxMDA5O1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgaW5mbGF0ZU9uRGF0YSk7XG5cbiAgLy9cbiAgLy8gVGhlIGNob2ljZSB0byBlbXBsb3kgYHpsaWIucmVzZXQoKWAgb3ZlciBgemxpYi5jbG9zZSgpYCBpcyBkaWN0YXRlZCBieSB0aGVcbiAgLy8gZmFjdCB0aGF0IGluIE5vZGUuanMgdmVyc2lvbnMgcHJpb3IgdG8gMTMuMTAuMCwgdGhlIGNhbGxiYWNrIGZvclxuICAvLyBgemxpYi5mbHVzaCgpYCBpcyBub3QgY2FsbGVkIGlmIGB6bGliLmNsb3NlKClgIGlzIHVzZWQuIFV0aWxpemluZ1xuICAvLyBgemxpYi5yZXNldCgpYCBlbnN1cmVzIHRoYXQgZWl0aGVyIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkIG9yIGFuIGVycm9yIGlzXG4gIC8vIGVtaXR0ZWQuXG4gIC8vXG4gIHRoaXMucmVzZXQoKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGB6bGliLkluZmxhdGVSYXdgIHN0cmVhbSBgJ2Vycm9yJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlbWl0dGVkIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbmZsYXRlT25FcnJvcihlcnIpIHtcbiAgLy9cbiAgLy8gVGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGBabGliI2Nsb3NlKClgIGFzIHRoZSBoYW5kbGUgaXMgYXV0b21hdGljYWxseVxuICAvLyBjbG9zZWQgd2hlbiBhbiBlcnJvciBpcyBlbWl0dGVkLlxuICAvL1xuICB0aGlzW2tQZXJNZXNzYWdlRGVmbGF0ZV0uX2luZmxhdGUgPSBudWxsO1xuXG4gIGlmICh0aGlzW2tFcnJvcl0pIHtcbiAgICB0aGlzW2tDYWxsYmFja10odGhpc1trRXJyb3JdKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlcnJba1N0YXR1c0NvZGVdID0gMTAwNztcbiAgdGhpc1trQ2FsbGJhY2tdKGVycik7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IGlzVXRmOCB9ID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbmNvbnN0IHsgaGFzQmxvYiB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLy9cbi8vIEFsbG93ZWQgdG9rZW4gY2hhcmFjdGVyczpcbi8vXG4vLyAnIScsICcjJywgJyQnLCAnJScsICcmJywgJycnLCAnKicsICcrJywgJy0nLFxuLy8gJy4nLCAwLTksIEEtWiwgJ14nLCAnXycsICdgJywgYS16LCAnfCcsICd+J1xuLy9cbi8vIHRva2VuQ2hhcnNbMzJdID09PSAwIC8vICcgJ1xuLy8gdG9rZW5DaGFyc1szM10gPT09IDEgLy8gJyEnXG4vLyB0b2tlbkNoYXJzWzM0XSA9PT0gMCAvLyAnXCInXG4vLyAuLi5cbi8vXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRva2VuQ2hhcnMgPSBbXG4gIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIC8vIDAgLSAxNVxuICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAvLyAxNiAtIDMxXG4gIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIC8vIDMyIC0gNDdcbiAgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgLy8gNDggLSA2M1xuICAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAvLyA2NCAtIDc5XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIC8vIDgwIC0gOTVcbiAgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgLy8gOTYgLSAxMTFcbiAgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCAvLyAxMTIgLSAxMjdcbl07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGNvZGUgaXMgYWxsb3dlZCBpbiBhIGNsb3NlIGZyYW1lLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBzdGF0dXMgY29kZVxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBzdGF0dXMgY29kZSBpcyB2YWxpZCwgZWxzZSBgZmFsc2VgXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTdGF0dXNDb2RlKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSAxMDAwICYmXG4gICAgICBjb2RlIDw9IDEwMTQgJiZcbiAgICAgIGNvZGUgIT09IDEwMDQgJiZcbiAgICAgIGNvZGUgIT09IDEwMDUgJiZcbiAgICAgIGNvZGUgIT09IDEwMDYpIHx8XG4gICAgKGNvZGUgPj0gMzAwMCAmJiBjb2RlIDw9IDQ5OTkpXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gYnVmZmVyIGNvbnRhaW5zIG9ubHkgY29ycmVjdCBVVEYtOC5cbiAqIFBvcnRlZCBmcm9tIGh0dHBzOi8vd3d3LmNsLmNhbS5hYy51ay8lN0VtZ2syNS91Y3MvdXRmOF9jaGVjay5jIGJ5XG4gKiBNYXJrdXMgS3Vobi5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmIFRoZSBidWZmZXIgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgYnVmYCBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTgsIGVsc2UgYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBfaXNWYWxpZFVURjgoYnVmKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGlmICgoYnVmW2ldICYgMHg4MCkgPT09IDApIHtcbiAgICAgIC8vIDB4eHh4eHh4XG4gICAgICBpKys7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhlMCkgPT09IDB4YzApIHtcbiAgICAgIC8vIDExMHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAxID09PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldICYgMHhmZSkgPT09IDB4YzAgLy8gT3ZlcmxvbmdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gMjtcbiAgICB9IGVsc2UgaWYgKChidWZbaV0gJiAweGYwKSA9PT0gMHhlMCkge1xuICAgICAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgIGlmIChcbiAgICAgICAgaSArIDIgPj0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgMl0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldID09PSAweGUwICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4ODApIHx8IC8vIE92ZXJsb25nXG4gICAgICAgIChidWZbaV0gPT09IDB4ZWQgJiYgKGJ1ZltpICsgMV0gJiAweGUwKSA9PT0gMHhhMCkgLy8gU3Vycm9nYXRlIChVK0Q4MDAgLSBVK0RGRkYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDM7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmOCkgPT09IDB4ZjApIHtcbiAgICAgIC8vIDExMTEweHh4IDEweHh4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAzID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgM10gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldID09PSAweGYwICYmIChidWZbaSArIDFdICYgMHhmMCkgPT09IDB4ODApIHx8IC8vIE92ZXJsb25nXG4gICAgICAgIChidWZbaV0gPT09IDB4ZjQgJiYgYnVmW2kgKyAxXSA+IDB4OGYpIHx8XG4gICAgICAgIGJ1ZltpXSA+IDB4ZjQgLy8gPiBVKzEwRkZGRlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBgQmxvYmAuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdGVzdGVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGBCbG9iYCwgZWxzZSBgZmFsc2VgXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICBoYXNCbG9iICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5hcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWx1ZS50eXBlID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5zdHJlYW0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAodmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0Jsb2InIHx8XG4gICAgICB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRmlsZScpXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0Jsb2IsXG4gIGlzVmFsaWRTdGF0dXNDb2RlLFxuICBpc1ZhbGlkVVRGODogX2lzVmFsaWRVVEY4LFxuICB0b2tlbkNoYXJzXG59O1xuXG5pZiAoaXNVdGY4KSB7XG4gIG1vZHVsZS5leHBvcnRzLmlzVmFsaWRVVEY4ID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgIHJldHVybiBidWYubGVuZ3RoIDwgMjQgPyBfaXNWYWxpZFVURjgoYnVmKSA6IGlzVXRmOChidWYpO1xuICB9O1xufSAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi8gZWxzZSBpZiAoIXByb2Nlc3MuZW52LldTX05PX1VURl84X1ZBTElEQVRFKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXNWYWxpZFVURjggPSByZXF1aXJlKCd1dGYtOC12YWxpZGF0ZScpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMuaXNWYWxpZFVURjggPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgICByZXR1cm4gYnVmLmxlbmd0aCA8IDMyID8gX2lzVmFsaWRVVEY4KGJ1ZikgOiBpc1ZhbGlkVVRGOChidWYpO1xuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBDb250aW51ZSByZWdhcmRsZXNzIG9mIHRoZSBlcnJvci5cbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBXcml0YWJsZSB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9wZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IHtcbiAgQklOQVJZX1RZUEVTLFxuICBFTVBUWV9CVUZGRVIsXG4gIGtTdGF0dXNDb2RlLFxuICBrV2ViU29ja2V0XG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHsgY29uY2F0LCB0b0FycmF5QnVmZmVyLCB1bm1hc2sgfSA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcbmNvbnN0IHsgaXNWYWxpZFN0YXR1c0NvZGUsIGlzVmFsaWRVVEY4IH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuY29uc3QgRmFzdEJ1ZmZlciA9IEJ1ZmZlcltTeW1ib2wuc3BlY2llc107XG5cbmNvbnN0IEdFVF9JTkZPID0gMDtcbmNvbnN0IEdFVF9QQVlMT0FEX0xFTkdUSF8xNiA9IDE7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfNjQgPSAyO1xuY29uc3QgR0VUX01BU0sgPSAzO1xuY29uc3QgR0VUX0RBVEEgPSA0O1xuY29uc3QgSU5GTEFUSU5HID0gNTtcbmNvbnN0IERFRkVSX0VWRU5UID0gNjtcblxuLyoqXG4gKiBIeUJpIFJlY2VpdmVyIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBleHRlbmRzIFdyaXRhYmxlXG4gKi9cbmNsYXNzIFJlY2VpdmVyIGV4dGVuZHMgV3JpdGFibGUge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlY2VpdmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cz10cnVlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmJpbmFyeVR5cGU9bm9kZWJ1ZmZlcl0gVGhlIHR5cGUgZm9yIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5leHRlbnNpb25zXSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZFxuICAgKiAgICAgZXh0ZW5zaW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmlzU2VydmVyPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciB0byBvcGVyYXRlIGluXG4gICAqICAgICBjbGllbnQgb3Igc2VydmVyIG1vZGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIGxlbmd0aFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3JcbiAgICogICAgIG5vdCB0byBza2lwIFVURi04IHZhbGlkYXRpb24gZm9yIHRleHQgYW5kIGNsb3NlIG1lc3NhZ2VzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cyA9XG4gICAgICBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IG9wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50c1xuICAgICAgICA6IHRydWU7XG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IG9wdGlvbnMuYmluYXJ5VHlwZSB8fCBCSU5BUllfVFlQRVNbMF07XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IG9wdGlvbnMuZXh0ZW5zaW9ucyB8fCB7fTtcbiAgICB0aGlzLl9pc1NlcnZlciA9ICEhb3B0aW9ucy5pc1NlcnZlcjtcbiAgICB0aGlzLl9tYXhQYXlsb2FkID0gb3B0aW9ucy5tYXhQYXlsb2FkIHwgMDtcbiAgICB0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gPSAhIW9wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uO1xuICAgIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzID0gMDtcbiAgICB0aGlzLl9idWZmZXJzID0gW107XG5cbiAgICB0aGlzLl9jb21wcmVzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWFzayA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mcmFnbWVudGVkID0gMDtcbiAgICB0aGlzLl9tYXNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9maW4gPSBmYWxzZTtcbiAgICB0aGlzLl9vcGNvZGUgPSAwO1xuXG4gICAgdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcblxuICAgIHRoaXMuX2Vycm9yZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIGBXcml0YWJsZS5wcm90b3R5cGUuX3dyaXRlKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgVGhlIGNodW5rIG9mIGRhdGEgdG8gd3JpdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVuY29kaW5nIFRoZSBjaGFyYWN0ZXIgZW5jb2Rpbmcgb2YgYGNodW5rYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDA4ICYmIHRoaXMuX3N0YXRlID09IEdFVF9JTkZPKSByZXR1cm4gY2IoKTtcblxuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuICAgIHRoaXMuX2J1ZmZlcnMucHVzaChjaHVuayk7XG4gICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN1bWVzIGBuYCBieXRlcyBmcm9tIHRoZSBidWZmZXJlZCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGNvbnN1bWVcbiAgICogQHJldHVybiB7QnVmZmVyfSBUaGUgY29uc3VtZWQgYnl0ZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN1bWUobikge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gbjtcblxuICAgIGlmIChuID09PSB0aGlzLl9idWZmZXJzWzBdLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2J1ZmZlcnMuc2hpZnQoKTtcblxuICAgIGlmIChuIDwgdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnNbMF07XG4gICAgICB0aGlzLl9idWZmZXJzWzBdID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgIGJ1Zi5idWZmZXIsXG4gICAgICAgIGJ1Zi5ieXRlT2Zmc2V0ICsgbixcbiAgICAgICAgYnVmLmxlbmd0aCAtIG5cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBuZXcgRmFzdEJ1ZmZlcihidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgbik7XG4gICAgfVxuXG4gICAgY29uc3QgZHN0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4pO1xuXG4gICAgZG8ge1xuICAgICAgY29uc3QgYnVmID0gdGhpcy5fYnVmZmVyc1swXTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGRzdC5sZW5ndGggLSBuO1xuXG4gICAgICBpZiAobiA+PSBidWYubGVuZ3RoKSB7XG4gICAgICAgIGRzdC5zZXQodGhpcy5fYnVmZmVycy5zaGlmdCgpLCBvZmZzZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHN0LnNldChuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgbiksIG9mZnNldCk7XG4gICAgICAgIHRoaXMuX2J1ZmZlcnNbMF0gPSBuZXcgRmFzdEJ1ZmZlcihcbiAgICAgICAgICBidWYuYnVmZmVyLFxuICAgICAgICAgIGJ1Zi5ieXRlT2Zmc2V0ICsgbixcbiAgICAgICAgICBidWYubGVuZ3RoIC0gblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBuIC09IGJ1Zi5sZW5ndGg7XG4gICAgfSB3aGlsZSAobiA+IDApO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIHBhcnNpbmcgbG9vcC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXJ0TG9vcChjYikge1xuICAgIHRoaXMuX2xvb3AgPSB0cnVlO1xuXG4gICAgZG8ge1xuICAgICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xuICAgICAgICBjYXNlIEdFVF9JTkZPOlxuICAgICAgICAgIHRoaXMuZ2V0SW5mbyhjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzE2OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDE2KGNiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfUEFZTE9BRF9MRU5HVEhfNjQ6XG4gICAgICAgICAgdGhpcy5nZXRQYXlsb2FkTGVuZ3RoNjQoY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9NQVNLOlxuICAgICAgICAgIHRoaXMuZ2V0TWFzaygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9EQVRBOlxuICAgICAgICAgIHRoaXMuZ2V0RGF0YShjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSU5GTEFUSU5HOlxuICAgICAgICBjYXNlIERFRkVSX0VWRU5UOlxuICAgICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSB3aGlsZSAodGhpcy5fbG9vcCk7XG5cbiAgICBpZiAoIXRoaXMuX2Vycm9yZWQpIGNiKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIGZpcnN0IHR3byBieXRlcyBvZiBhIGZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5mbyhjYikge1xuICAgIGlmICh0aGlzLl9idWZmZXJlZEJ5dGVzIDwgMikge1xuICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuY29uc3VtZSgyKTtcblxuICAgIGlmICgoYnVmWzBdICYgMHgzMCkgIT09IDB4MDApIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1JTVjIgYW5kIFJTVjMgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMl8zJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXByZXNzZWQgPSAoYnVmWzBdICYgMHg0MCkgPT09IDB4NDA7XG5cbiAgICBpZiAoY29tcHJlc3NlZCAmJiAhdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAnUlNWMSBtdXN0IGJlIGNsZWFyJyxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgMTAwMixcbiAgICAgICAgJ1dTX0VSUl9VTkVYUEVDVEVEX1JTVl8xJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ZpbiA9IChidWZbMF0gJiAweDgwKSA9PT0gMHg4MDtcbiAgICB0aGlzLl9vcGNvZGUgPSBidWZbMF0gJiAweDBmO1xuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSBidWZbMV0gJiAweDdmO1xuXG4gICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwMCkge1xuICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9mcmFnbWVudGVkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdpbnZhbGlkIG9wY29kZSAwJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX09QQ09ERSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb3Bjb2RlID0gdGhpcy5fZnJhZ21lbnRlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwMSB8fCB0aGlzLl9vcGNvZGUgPT09IDB4MDIpIHtcbiAgICAgIGlmICh0aGlzLl9mcmFnbWVudGVkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgIGBpbnZhbGlkIG9wY29kZSAke3RoaXMuX29wY29kZX1gLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfT1BDT0RFJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb21wcmVzc2VkID0gY29tcHJlc3NlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wY29kZSA+IDB4MDcgJiYgdGhpcy5fb3Bjb2RlIDwgMHgwYikge1xuICAgICAgaWYgKCF0aGlzLl9maW4pIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ0ZJTiBtdXN0IGJlIHNldCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfRVhQRUNURURfRklOJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcHJlc3NlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnUlNWMSBtdXN0IGJlIGNsZWFyJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9VTkVYUEVDVEVEX1JTVl8xJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPiAweDdkIHx8XG4gICAgICAgICh0aGlzLl9vcGNvZGUgPT09IDB4MDggJiYgdGhpcy5fcGF5bG9hZExlbmd0aCA9PT0gMSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICBgaW52YWxpZCBwYXlsb2FkIGxlbmd0aCAke3RoaXMuX3BheWxvYWRMZW5ndGh9YCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX0NPTlRST0xfUEFZTE9BRF9MRU5HVEgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgYGludmFsaWQgb3Bjb2RlICR7dGhpcy5fb3Bjb2RlfWAsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfSU5WQUxJRF9PUENPREUnXG4gICAgICApO1xuXG4gICAgICBjYihlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9maW4gJiYgIXRoaXMuX2ZyYWdtZW50ZWQpIHRoaXMuX2ZyYWdtZW50ZWQgPSB0aGlzLl9vcGNvZGU7XG4gICAgdGhpcy5fbWFza2VkID0gKGJ1ZlsxXSAmIDB4ODApID09PSAweDgwO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VydmVyKSB7XG4gICAgICBpZiAoIXRoaXMuX21hc2tlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnTUFTSyBtdXN0IGJlIHNldCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfRVhQRUNURURfTUFTSydcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX21hc2tlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAnTUFTSyBtdXN0IGJlIGNsZWFyJyxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgMTAwMixcbiAgICAgICAgJ1dTX0VSUl9VTkVYUEVDVEVEX01BU0snXG4gICAgICApO1xuXG4gICAgICBjYihlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEyNikgdGhpcy5fc3RhdGUgPSBHRVRfUEFZTE9BRF9MRU5HVEhfMTY7XG4gICAgZWxzZSBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCA9PT0gMTI3KSB0aGlzLl9zdGF0ZSA9IEdFVF9QQVlMT0FEX0xFTkdUSF82NDtcbiAgICBlbHNlIHRoaXMuaGF2ZUxlbmd0aChjYik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBleHRlbmRlZCBwYXlsb2FkIGxlbmd0aCAoNysxNikuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQYXlsb2FkTGVuZ3RoMTYoY2IpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDIpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gdGhpcy5jb25zdW1lKDIpLnJlYWRVSW50MTZCRSgwKTtcbiAgICB0aGlzLmhhdmVMZW5ndGgoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXh0ZW5kZWQgcGF5bG9hZCBsZW5ndGggKDcrNjQpLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UGF5bG9hZExlbmd0aDY0KGNiKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCA4KSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYnVmID0gdGhpcy5jb25zdW1lKDgpO1xuICAgIGNvbnN0IG51bSA9IGJ1Zi5yZWFkVUludDMyQkUoMCk7XG5cbiAgICAvL1xuICAgIC8vIFRoZSBtYXhpbXVtIHNhZmUgaW50ZWdlciBpbiBKYXZhU2NyaXB0IGlzIDJeNTMgLSAxLiBBbiBlcnJvciBpcyByZXR1cm5lZFxuICAgIC8vIGlmIHBheWxvYWQgbGVuZ3RoIGlzIGdyZWF0ZXIgdGhhbiB0aGlzIG51bWJlci5cbiAgICAvL1xuICAgIGlmIChudW0gPiBNYXRoLnBvdygyLCA1MyAtIDMyKSAtIDEpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1Vuc3VwcG9ydGVkIFdlYlNvY2tldCBmcmFtZTogcGF5bG9hZCBsZW5ndGggPiAyXjUzIC0gMScsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICAxMDA5LFxuICAgICAgICAnV1NfRVJSX1VOU1VQUE9SVEVEX0RBVEFfUEFZTE9BRF9MRU5HVEgnXG4gICAgICApO1xuXG4gICAgICBjYihlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IG51bSAqIE1hdGgucG93KDIsIDMyKSArIGJ1Zi5yZWFkVUludDMyQkUoNCk7XG4gICAgdGhpcy5oYXZlTGVuZ3RoKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXlsb2FkIGxlbmd0aCBoYXMgYmVlbiByZWFkLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGF2ZUxlbmd0aChjYikge1xuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoICYmIHRoaXMuX29wY29kZSA8IDB4MDgpIHtcbiAgICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCArPSB0aGlzLl9wYXlsb2FkTGVuZ3RoO1xuICAgICAgaWYgKHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA+IHRoaXMuX21heFBheWxvYWQgJiYgdGhpcy5fbWF4UGF5bG9hZCA+IDApIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ01heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnLFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIDEwMDksXG4gICAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWFza2VkKSB0aGlzLl9zdGF0ZSA9IEdFVF9NQVNLO1xuICAgIGVsc2UgdGhpcy5fc3RhdGUgPSBHRVRfREFUQTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBtYXNrIGJ5dGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWFzaygpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDQpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXNrID0gdGhpcy5jb25zdW1lKDQpO1xuICAgIHRoaXMuX3N0YXRlID0gR0VUX0RBVEE7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgZGF0YSBieXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERhdGEoY2IpIHtcbiAgICBsZXQgZGF0YSA9IEVNUFRZX0JVRkZFUjtcblxuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IHRoaXMuX3BheWxvYWRMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSB0aGlzLmNvbnN1bWUodGhpcy5fcGF5bG9hZExlbmd0aCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fbWFza2VkICYmXG4gICAgICAgICh0aGlzLl9tYXNrWzBdIHwgdGhpcy5fbWFza1sxXSB8IHRoaXMuX21hc2tbMl0gfCB0aGlzLl9tYXNrWzNdKSAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHVubWFzayhkYXRhLCB0aGlzLl9tYXNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID4gMHgwNykge1xuICAgICAgdGhpcy5jb250cm9sTWVzc2FnZShkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbXByZXNzZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gSU5GTEFUSU5HO1xuICAgICAgdGhpcy5kZWNvbXByZXNzKGRhdGEsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIG1lc3NhZ2UgaXMgbm90IGNvbXByZXNzZWQgc28gaXRzIGxlbmd0aCBpcyB0aGUgc3VtIG9mIHRoZSBwYXlsb2FkXG4gICAgICAvLyBsZW5ndGggb2YgYWxsIGZyYWdtZW50cy5cbiAgICAgIC8vXG4gICAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoID0gdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoO1xuICAgICAgdGhpcy5fZnJhZ21lbnRzLnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhTWVzc2FnZShjYik7XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzc2VzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVjb21wcmVzcyhkYXRhLCBjYikge1xuICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTtcblxuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmRlY29tcHJlc3MoZGF0YSwgdGhpcy5fZmluLCAoZXJyLCBidWYpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuXG4gICAgICBpZiAoYnVmLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoICs9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLl9tZXNzYWdlTGVuZ3RoID4gdGhpcy5fbWF4UGF5bG9hZCAmJiB0aGlzLl9tYXhQYXlsb2FkID4gMCkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgICAnTWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDEwMDksXG4gICAgICAgICAgICAnV1NfRVJSX1VOU1VQUE9SVEVEX01FU1NBR0VfTEVOR1RIJ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjYihlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZnJhZ21lbnRzLnB1c2goYnVmKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhTWVzc2FnZShjYik7XG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IEdFVF9JTkZPKSB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGRhdGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRhdGFNZXNzYWdlKGNiKSB7XG4gICAgaWYgKCF0aGlzLl9maW4pIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZUxlbmd0aCA9IHRoaXMuX21lc3NhZ2VMZW5ndGg7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gdGhpcy5fZnJhZ21lbnRzO1xuXG4gICAgdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmFnbWVudGVkID0gMDtcbiAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDIpIHtcbiAgICAgIGxldCBkYXRhO1xuXG4gICAgICBpZiAodGhpcy5fYmluYXJ5VHlwZSA9PT0gJ25vZGVidWZmZXInKSB7XG4gICAgICAgIGRhdGEgPSBjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmluYXJ5VHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICBkYXRhID0gdG9BcnJheUJ1ZmZlcihjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICBkYXRhID0gbmV3IEJsb2IoZnJhZ21lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBmcmFnbWVudHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGRhdGEsIHRydWUpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBERUZFUl9FVkVOVDtcbiAgICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgICAgIHRoaXMuc3RhcnRMb29wKGNiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IGNvbmNhdChmcmFnbWVudHMsIG1lc3NhZ2VMZW5ndGgpO1xuXG4gICAgICBpZiAoIXRoaXMuX3NraXBVVEY4VmFsaWRhdGlvbiAmJiAhaXNWYWxpZFVURjgoYnVmKSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgRXJyb3IsXG4gICAgICAgICAgJ2ludmFsaWQgVVRGLTggc2VxdWVuY2UnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwNyxcbiAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfVVRGOCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBJTkZMQVRJTkcgfHwgdGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cykge1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBidWYsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgYnVmLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY29udHJvbCBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBEYXRhIHRvIGhhbmRsZVxuICAgKiBAcmV0dXJuIHsoRXJyb3J8UmFuZ2VFcnJvcnx1bmRlZmluZWQpfSBBIHBvc3NpYmxlIGVycm9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb250cm9sTWVzc2FnZShkYXRhLCBjYikge1xuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDgpIHtcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdCgnY29uY2x1ZGUnLCAxMDA1LCBFTVBUWV9CVUZGRVIpO1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGRhdGEucmVhZFVJbnQxNkJFKDApO1xuXG4gICAgICAgIGlmICghaXNWYWxpZFN0YXR1c0NvZGUoY29kZSkpIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICAgYGludmFsaWQgc3RhdHVzIGNvZGUgJHtjb2RlfWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgMTAwMixcbiAgICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9DTE9TRV9DT0RFJ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjYihlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnVmID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgICAgZGF0YS5idWZmZXIsXG4gICAgICAgICAgZGF0YS5ieXRlT2Zmc2V0ICsgMixcbiAgICAgICAgICBkYXRhLmxlbmd0aCAtIDJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3NraXBVVEY4VmFsaWRhdGlvbiAmJiAhaXNWYWxpZFVURjgoYnVmKSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICAgIEVycm9yLFxuICAgICAgICAgICAgJ2ludmFsaWQgVVRGLTggc2VxdWVuY2UnLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIDEwMDcsXG4gICAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfVVRGOCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0KCdjb25jbHVkZScsIGNvZGUsIGJ1Zik7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMpIHtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLl9vcGNvZGUgPT09IDB4MDkgPyAncGluZycgOiAncG9uZycsIGRhdGEpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGUgPSBERUZFUl9FVkVOVDtcbiAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLl9vcGNvZGUgPT09IDB4MDkgPyAncGluZycgOiAncG9uZycsIGRhdGEpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGFuIGVycm9yIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbihuZXc6RXJyb3J8UmFuZ2VFcnJvcil9IEVycm9yQ3RvciBUaGUgZXJyb3IgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcmVmaXggU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGFkZCBhIGRlZmF1bHQgcHJlZml4IHRvXG4gICAqICAgICBgbWVzc2FnZWBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c0NvZGUgVGhlIHN0YXR1cyBjb2RlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvckNvZGUgVGhlIGV4cG9zZWQgZXJyb3IgY29kZVxuICAgKiBAcmV0dXJuIHsoRXJyb3J8UmFuZ2VFcnJvcil9IFRoZSBlcnJvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlRXJyb3IoRXJyb3JDdG9yLCBtZXNzYWdlLCBwcmVmaXgsIHN0YXR1c0NvZGUsIGVycm9yQ29kZSkge1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvckN0b3IoXG4gICAgICBwcmVmaXggPyBgSW52YWxpZCBXZWJTb2NrZXQgZnJhbWU6ICR7bWVzc2FnZX1gIDogbWVzc2FnZVxuICAgICk7XG5cbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIHRoaXMuY3JlYXRlRXJyb3IpO1xuICAgIGVyci5jb2RlID0gZXJyb3JDb2RlO1xuICAgIGVycltrU3RhdHVzQ29kZV0gPSBzdGF0dXNDb2RlO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWNlaXZlcjtcbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5EdXBsZXhcIiB9XSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgRHVwbGV4IH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgcmFuZG9tRmlsbFN5bmMgfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCB7IEVNUFRZX0JVRkZFUiwga1dlYlNvY2tldCwgTk9PUCB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHsgaXNCbG9iLCBpc1ZhbGlkU3RhdHVzQ29kZSB9ID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5jb25zdCB7IG1hc2s6IGFwcGx5TWFzaywgdG9CdWZmZXIgfSA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcblxuY29uc3Qga0J5dGVMZW5ndGggPSBTeW1ib2woJ2tCeXRlTGVuZ3RoJyk7XG5jb25zdCBtYXNrQnVmZmVyID0gQnVmZmVyLmFsbG9jKDQpO1xuY29uc3QgUkFORE9NX1BPT0xfU0laRSA9IDggKiAxMDI0O1xubGV0IHJhbmRvbVBvb2w7XG5sZXQgcmFuZG9tUG9vbFBvaW50ZXIgPSBSQU5ET01fUE9PTF9TSVpFO1xuXG5jb25zdCBERUZBVUxUID0gMDtcbmNvbnN0IERFRkxBVElORyA9IDE7XG5jb25zdCBHRVRfQkxPQl9EQVRBID0gMjtcblxuLyoqXG4gKiBIeUJpIFNlbmRlciBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuY2xhc3MgU2VuZGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBTZW5kZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIGNvbm5lY3Rpb24gc29ja2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0ZW5zaW9uc10gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5lZ290aWF0ZWQgZXh0ZW5zaW9uc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGUgbWFza2luZ1xuICAgKiAgICAga2V5XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb2NrZXQsIGV4dGVuc2lvbnMsIGdlbmVyYXRlTWFzaykge1xuICAgIHRoaXMuX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zIHx8IHt9O1xuXG4gICAgaWYgKGdlbmVyYXRlTWFzaykge1xuICAgICAgdGhpcy5fZ2VuZXJhdGVNYXNrID0gZ2VuZXJhdGVNYXNrO1xuICAgICAgdGhpcy5fbWFza0J1ZmZlciA9IEJ1ZmZlci5hbGxvYyg0KTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb2NrZXQgPSBzb2NrZXQ7XG5cbiAgICB0aGlzLl9maXJzdEZyYWdtZW50ID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wcmVzcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyA9IDA7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9zdGF0ZSA9IERFRkFVTFQ7XG4gICAgdGhpcy5vbmVycm9yID0gTk9PUDtcbiAgICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcyBhIHBpZWNlIG9mIGRhdGEgYWNjb3JkaW5nIHRvIHRoZSBIeUJpIFdlYlNvY2tldCBwcm90b2NvbC5cbiAgICpcbiAgICogQHBhcmFtIHsoQnVmZmVyfFN0cmluZyl9IGRhdGEgVGhlIGRhdGEgdG8gZnJhbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBGSU4gYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmdlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gICAqICAgICBtYXNraW5nIGtleVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCdWZmZXJ9IFtvcHRpb25zLm1hc2tCdWZmZXJdIFRoZSBidWZmZXIgdXNlZCB0byBzdG9yZSB0aGUgbWFza2luZ1xuICAgKiAgICAga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm9wY29kZSBUaGUgb3Bjb2RlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVhZE9ubHk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmVcbiAgICogICAgIG1vZGlmaWVkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucnN2MT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIFJTVjEgYml0XG4gICAqIEByZXR1cm4geyhCdWZmZXJ8U3RyaW5nKVtdfSBUaGUgZnJhbWVkIGRhdGFcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc3RhdGljIGZyYW1lKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBsZXQgbWFzaztcbiAgICBsZXQgbWVyZ2UgPSBmYWxzZTtcbiAgICBsZXQgb2Zmc2V0ID0gMjtcbiAgICBsZXQgc2tpcE1hc2tpbmcgPSBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLm1hc2spIHtcbiAgICAgIG1hc2sgPSBvcHRpb25zLm1hc2tCdWZmZXIgfHwgbWFza0J1ZmZlcjtcblxuICAgICAgaWYgKG9wdGlvbnMuZ2VuZXJhdGVNYXNrKSB7XG4gICAgICAgIG9wdGlvbnMuZ2VuZXJhdGVNYXNrKG1hc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJhbmRvbVBvb2xQb2ludGVyID09PSBSQU5ET01fUE9PTF9TSVpFKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgICAgaWYgKHJhbmRvbVBvb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgbGF6aWx5IGluaXRpYWxpemVkIGJlY2F1c2Ugc2VydmVyLXNlbnQgZnJhbWVzIG11c3Qgbm90XG4gICAgICAgICAgICAvLyBiZSBtYXNrZWQgc28gaXQgbWF5IG5ldmVyIGJlIHVzZWQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmFuZG9tUG9vbCA9IEJ1ZmZlci5hbGxvYyhSQU5ET01fUE9PTF9TSVpFKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByYW5kb21GaWxsU3luYyhyYW5kb21Qb29sLCAwLCBSQU5ET01fUE9PTF9TSVpFKTtcbiAgICAgICAgICByYW5kb21Qb29sUG9pbnRlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBtYXNrWzBdID0gcmFuZG9tUG9vbFtyYW5kb21Qb29sUG9pbnRlcisrXTtcbiAgICAgICAgbWFza1sxXSA9IHJhbmRvbVBvb2xbcmFuZG9tUG9vbFBvaW50ZXIrK107XG4gICAgICAgIG1hc2tbMl0gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgICBtYXNrWzNdID0gcmFuZG9tUG9vbFtyYW5kb21Qb29sUG9pbnRlcisrXTtcbiAgICAgIH1cblxuICAgICAgc2tpcE1hc2tpbmcgPSAobWFza1swXSB8IG1hc2tbMV0gfCBtYXNrWzJdIHwgbWFza1szXSkgPT09IDA7XG4gICAgICBvZmZzZXQgPSA2O1xuICAgIH1cblxuICAgIGxldCBkYXRhTGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnMubWFzayB8fCBza2lwTWFza2luZykgJiZcbiAgICAgICAgb3B0aW9uc1trQnl0ZUxlbmd0aF0gIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGRhdGFMZW5ndGggPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICBtZXJnZSA9IG9wdGlvbnMubWFzayAmJiBvcHRpb25zLnJlYWRPbmx5ICYmICFza2lwTWFza2luZztcbiAgICB9XG5cbiAgICBsZXQgcGF5bG9hZExlbmd0aCA9IGRhdGFMZW5ndGg7XG5cbiAgICBpZiAoZGF0YUxlbmd0aCA+PSA2NTUzNikge1xuICAgICAgb2Zmc2V0ICs9IDg7XG4gICAgICBwYXlsb2FkTGVuZ3RoID0gMTI3O1xuICAgIH0gZWxzZSBpZiAoZGF0YUxlbmd0aCA+IDEyNSkge1xuICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICBwYXlsb2FkTGVuZ3RoID0gMTI2O1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShtZXJnZSA/IGRhdGFMZW5ndGggKyBvZmZzZXQgOiBvZmZzZXQpO1xuXG4gICAgdGFyZ2V0WzBdID0gb3B0aW9ucy5maW4gPyBvcHRpb25zLm9wY29kZSB8IDB4ODAgOiBvcHRpb25zLm9wY29kZTtcbiAgICBpZiAob3B0aW9ucy5yc3YxKSB0YXJnZXRbMF0gfD0gMHg0MDtcblxuICAgIHRhcmdldFsxXSA9IHBheWxvYWRMZW5ndGg7XG5cbiAgICBpZiAocGF5bG9hZExlbmd0aCA9PT0gMTI2KSB7XG4gICAgICB0YXJnZXQud3JpdGVVSW50MTZCRShkYXRhTGVuZ3RoLCAyKTtcbiAgICB9IGVsc2UgaWYgKHBheWxvYWRMZW5ndGggPT09IDEyNykge1xuICAgICAgdGFyZ2V0WzJdID0gdGFyZ2V0WzNdID0gMDtcbiAgICAgIHRhcmdldC53cml0ZVVJbnRCRShkYXRhTGVuZ3RoLCA0LCA2KTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMubWFzaykgcmV0dXJuIFt0YXJnZXQsIGRhdGFdO1xuXG4gICAgdGFyZ2V0WzFdIHw9IDB4ODA7XG4gICAgdGFyZ2V0W29mZnNldCAtIDRdID0gbWFza1swXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gM10gPSBtYXNrWzFdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAyXSA9IG1hc2tbMl07XG4gICAgdGFyZ2V0W29mZnNldCAtIDFdID0gbWFza1szXTtcblxuICAgIGlmIChza2lwTWFza2luZykgcmV0dXJuIFt0YXJnZXQsIGRhdGFdO1xuXG4gICAgaWYgKG1lcmdlKSB7XG4gICAgICBhcHBseU1hc2soZGF0YSwgbWFzaywgdGFyZ2V0LCBvZmZzZXQsIGRhdGFMZW5ndGgpO1xuICAgICAgcmV0dXJuIFt0YXJnZXRdO1xuICAgIH1cblxuICAgIGFwcGx5TWFzayhkYXRhLCBtYXNrLCBkYXRhLCAwLCBkYXRhTGVuZ3RoKTtcbiAgICByZXR1cm4gW3RhcmdldCwgZGF0YV07XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBjbG9zZSBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2NvZGVdIFRoZSBzdGF0dXMgY29kZSBjb21wb25lbnQgb2YgdGhlIGJvZHlcbiAgICogQHBhcmFtIHsoU3RyaW5nfEJ1ZmZlcil9IFtkYXRhXSBUaGUgbWVzc2FnZSBjb21wb25lbnQgb2YgdGhlIGJvZHlcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgdGhlIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZShjb2RlLCBkYXRhLCBtYXNrLCBjYikge1xuICAgIGxldCBidWY7XG5cbiAgICBpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBidWYgPSBFTVBUWV9CVUZGRVI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29kZSAhPT0gJ251bWJlcicgfHwgIWlzVmFsaWRTdGF0dXNDb2RlKGNvZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdmFsaWQgZXJyb3IgY29kZSBudW1iZXInKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgyKTtcbiAgICAgIGJ1Zi53cml0ZVVJbnQxNkJFKGNvZGUsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKTtcblxuICAgICAgaWYgKGxlbmd0aCA+IDEyMykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIG1lc3NhZ2UgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyMyBieXRlcycpO1xuICAgICAgfVxuXG4gICAgICBidWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMiArIGxlbmd0aCk7XG4gICAgICBidWYud3JpdGVVSW50MTZCRShjb2RlLCAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBidWYud3JpdGUoZGF0YSwgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWYuc2V0KGRhdGEsIDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBidWYubGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwOCxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHJzdjE6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBidWYsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoYnVmLCBvcHRpb25zKSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBpbmcgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcGluZyhkYXRhLCBtYXNrLCBjYikge1xuICAgIGxldCBieXRlTGVuZ3RoO1xuICAgIGxldCByZWFkT25seTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ5dGVMZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLnNpemU7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdG9CdWZmZXIoZGF0YSk7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICByZWFkT25seSA9IHRvQnVmZmVyLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIGlmIChieXRlTGVuZ3RoID4gMTI1KSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIGRhdGEgc2l6ZSBtdXN0IG5vdCBiZSBncmVhdGVyIHRoYW4gMTI1IGJ5dGVzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIFtrQnl0ZUxlbmd0aF06IGJ5dGVMZW5ndGgsXG4gICAgICBmaW46IHRydWUsXG4gICAgICBnZW5lcmF0ZU1hc2s6IHRoaXMuX2dlbmVyYXRlTWFzayxcbiAgICAgIG1hc2ssXG4gICAgICBtYXNrQnVmZmVyOiB0aGlzLl9tYXNrQnVmZmVyLFxuICAgICAgb3Bjb2RlOiAweDA5LFxuICAgICAgcmVhZE9ubHksXG4gICAgICByc3YxOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmdldEJsb2JEYXRhLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0QmxvYkRhdGEoZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICB0aGlzLmVucXVldWUoW3RoaXMuZGlzcGF0Y2gsIGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwb25nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBvbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDEyNSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlcycpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBieXRlTGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwYSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcnN2MTogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgZGF0YSBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmJpbmFyeT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGlzIGJpbmFyeVxuICAgKiAgICAgb3IgdGV4dFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvbXByZXNzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIGNvbXByZXNzIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZyYWdtZW50IGlzIHRoZVxuICAgKiAgICAgbGFzdCBvbmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFza1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTtcbiAgICBsZXQgb3Bjb2RlID0gb3B0aW9ucy5iaW5hcnkgPyAyIDogMTtcbiAgICBsZXQgcnN2MSA9IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZmlyc3RGcmFnbWVudCkge1xuICAgICAgdGhpcy5fZmlyc3RGcmFnbWVudCA9IGZhbHNlO1xuICAgICAgaWYgKFxuICAgICAgICByc3YxICYmXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlICYmXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlLnBhcmFtc1tcbiAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5faXNTZXJ2ZXJcbiAgICAgICAgICAgID8gJ3NlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyJ1xuICAgICAgICAgICAgOiAnY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXInXG4gICAgICAgIF1cbiAgICAgICkge1xuICAgICAgICByc3YxID0gYnl0ZUxlbmd0aCA+PSBwZXJNZXNzYWdlRGVmbGF0ZS5fdGhyZXNob2xkO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcHJlc3MgPSByc3YxO1xuICAgIH0gZWxzZSB7XG4gICAgICByc3YxID0gZmFsc2U7XG4gICAgICBvcGNvZGUgPSAwO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmZpbikgdGhpcy5fZmlyc3RGcmFnbWVudCA9IHRydWU7XG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnl0ZUxlbmd0aCxcbiAgICAgIGZpbjogb3B0aW9ucy5maW4sXG4gICAgICBnZW5lcmF0ZU1hc2s6IHRoaXMuX2dlbmVyYXRlTWFzayxcbiAgICAgIG1hc2s6IG9wdGlvbnMubWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGUsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJzdjFcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwYXRjaChkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb250ZW50cyBvZiBhIGJsb2IgYXMgYmluYXJ5IGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QmxvYn0gYmxvYiBUaGUgYmxvYlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb21wcmVzcz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzXG4gICAqICAgICB0aGUgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QmxvYkRhdGEoYmxvYiwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKSB7XG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyArPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9CTE9CX0RBVEE7XG5cbiAgICBibG9iXG4gICAgICAuYXJyYXlCdWZmZXIoKVxuICAgICAgLnRoZW4oKGFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zb2NrZXQuZGVzdHJveWVkKSB7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1RoZSBzb2NrZXQgd2FzIGNsb3NlZCB3aGlsZSB0aGUgYmxvYiB3YXMgYmVpbmcgcmVhZCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBgY2FsbENhbGxiYWNrc2AgaXMgY2FsbGVkIGluIHRoZSBuZXh0IHRpY2sgdG8gZW5zdXJlIHRoYXQgZXJyb3JzXG4gICAgICAgICAgLy8gdGhhdCBtaWdodCBiZSB0aHJvd24gaW4gdGhlIGNhbGxiYWNrcyBiZWhhdmUgbGlrZSBlcnJvcnMgdGhyb3duXG4gICAgICAgICAgLy8gb3V0c2lkZSB0aGUgcHJvbWlzZSBjaGFpbi5cbiAgICAgICAgICAvL1xuICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbENhbGxiYWNrcywgdGhpcywgZXJyLCBjYik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRvQnVmZmVyKGFycmF5QnVmZmVyKTtcblxuICAgICAgICBpZiAoIWNvbXByZXNzKSB7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBERUZBVUxUO1xuICAgICAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCBvcHRpb25zKSwgY2IpO1xuICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2goZGF0YSwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGBvbkVycm9yYCBpcyBjYWxsZWQgaW4gdGhlIG5leHQgdGljayBmb3IgdGhlIHNhbWUgcmVhc29uIHRoYXRcbiAgICAgICAgLy8gYGNhbGxDYWxsYmFja3NgIGFib3ZlIGlzLlxuICAgICAgICAvL1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKG9uRXJyb3IsIHRoaXMsIGVyciwgY2IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcHJlc3M9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzc1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmluPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgRklOIGJpdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgKiAgICAgbWFza2luZyBrZXlcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFza1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBbb3B0aW9ucy5tYXNrQnVmZmVyXSBUaGUgYnVmZmVyIHVzZWQgdG8gc3RvcmUgdGhlIG1hc2tpbmdcbiAgICogICAgIGtleVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5vcGNvZGUgVGhlIG9wY29kZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJlYWRPbmx5PWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBgZGF0YWAgY2FuIGJlXG4gICAqICAgICBtb2RpZmllZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJzdjE9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBSU1YxIGJpdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkaXNwYXRjaChkYXRhLCBjb21wcmVzcywgb3B0aW9ucywgY2IpIHtcbiAgICBpZiAoIWNvbXByZXNzKSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IG9wdGlvbnNba0J5dGVMZW5ndGhdO1xuICAgIHRoaXMuX3N0YXRlID0gREVGTEFUSU5HO1xuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmNvbXByZXNzKGRhdGEsIG9wdGlvbnMuZmluLCAoXywgYnVmKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc29ja2V0LmRlc3Ryb3llZCkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1RoZSBzb2NrZXQgd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBjb21wcmVzc2VkJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNhbGxDYWxsYmFja3ModGhpcywgZXJyLCBjYik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICAgIG9wdGlvbnMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShidWYsIG9wdGlvbnMpLCBjYik7XG4gICAgICB0aGlzLmRlcXVldWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBxdWV1ZWQgc2VuZCBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVxdWV1ZSgpIHtcbiAgICB3aGlsZSAodGhpcy5fc3RhdGUgPT09IERFRkFVTFQgJiYgdGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xuXG4gICAgICB0aGlzLl9idWZmZXJlZEJ5dGVzIC09IHBhcmFtc1szXVtrQnl0ZUxlbmd0aF07XG4gICAgICBSZWZsZWN0LmFwcGx5KHBhcmFtc1swXSwgdGhpcywgcGFyYW1zLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5xdWV1ZXMgYSBzZW5kIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIFNlbmQgb3BlcmF0aW9uIHBhcmFtZXRlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBlbnF1ZXVlKHBhcmFtcykge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gcGFyYW1zWzNdW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHsoQnVmZmVyIHwgU3RyaW5nKVtdfSBsaXN0IFRoZSBmcmFtZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbmRGcmFtZShsaXN0LCBjYikge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5fc29ja2V0LmNvcmsoKTtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzBdKTtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzFdLCBjYik7XG4gICAgICB0aGlzLl9zb2NrZXQudW5jb3JrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzBdLCBjYik7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VuZGVyO1xuXG4vKipcbiAqIENhbGxzIHF1ZXVlZCBjYWxsYmFja3Mgd2l0aCBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1NlbmRlcn0gc2VuZGVyIFRoZSBgU2VuZGVyYCBpbnN0YW5jZVxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBjYWxsIHRoZSBjYWxsYmFja3Mgd2l0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBUaGUgZmlyc3QgY2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbGxDYWxsYmFja3Moc2VuZGVyLCBlcnIsIGNiKSB7XG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKGVycik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZW5kZXIuX3F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc2VuZGVyLl9xdWV1ZVtpXTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhlcnIpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlcyBhIGBTZW5kZXJgIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7U2VuZGVyfSBzZW5kZXIgVGhlIGBTZW5kZXJgIGluc3RhbmNlXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIFRoZSBmaXJzdCBwZW5kaW5nIGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvbkVycm9yKHNlbmRlciwgZXJyLCBjYikge1xuICBjYWxsQ2FsbGJhY2tzKHNlbmRlciwgZXJyLCBjYik7XG4gIHNlbmRlci5vbmVycm9yKGVycik7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IGtGb3JPbkV2ZW50QXR0cmlidXRlLCBrTGlzdGVuZXIgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IGtDb2RlID0gU3ltYm9sKCdrQ29kZScpO1xuY29uc3Qga0RhdGEgPSBTeW1ib2woJ2tEYXRhJyk7XG5jb25zdCBrRXJyb3IgPSBTeW1ib2woJ2tFcnJvcicpO1xuY29uc3Qga01lc3NhZ2UgPSBTeW1ib2woJ2tNZXNzYWdlJyk7XG5jb25zdCBrUmVhc29uID0gU3ltYm9sKCdrUmVhc29uJyk7XG5jb25zdCBrVGFyZ2V0ID0gU3ltYm9sKCdrVGFyZ2V0Jyk7XG5jb25zdCBrVHlwZSA9IFN5bWJvbCgna1R5cGUnKTtcbmNvbnN0IGtXYXNDbGVhbiA9IFN5bWJvbCgna1dhc0NsZWFuJyk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGFuIGV2ZW50LlxuICovXG5jbGFzcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYEV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgdGhlIGB0eXBlYCBhcmd1bWVudCBpcyBub3Qgc3BlY2lmaWVkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpc1trVGFyZ2V0XSA9IG51bGw7XG4gICAgdGhpc1trVHlwZV0gPSB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpc1trVGFyZ2V0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXNba1R5cGVdO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudC5wcm90b3R5cGUsICd0YXJnZXQnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCAndHlwZScsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBjbG9zZSBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBDbG9zZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBDbG9zZUV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGFsbG93cyBmb3Igc2V0dGluZ1xuICAgKiAgICAgYXR0cmlidXRlcyB2aWEgb2JqZWN0IG1lbWJlcnMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY29kZT0wXSBUaGUgc3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlXG4gICAqICAgICBjb25uZWN0aW9uIHdhcyBjbG9zZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJlYXNvbj0nJ10gQSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgZXhwbGFpbmluZyB3aHlcbiAgICogICAgIHRoZSBjb25uZWN0aW9uIHdhcyBjbG9zZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy53YXNDbGVhbj1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZVxuICAgKiAgICAgY29ubmVjdGlvbiB3YXMgY2xlYW5seSBjbG9zZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trQ29kZV0gPSBvcHRpb25zLmNvZGUgPT09IHVuZGVmaW5lZCA/IDAgOiBvcHRpb25zLmNvZGU7XG4gICAgdGhpc1trUmVhc29uXSA9IG9wdGlvbnMucmVhc29uID09PSB1bmRlZmluZWQgPyAnJyA6IG9wdGlvbnMucmVhc29uO1xuICAgIHRoaXNba1dhc0NsZWFuXSA9IG9wdGlvbnMud2FzQ2xlYW4gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogb3B0aW9ucy53YXNDbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgZ2V0IGNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXNba0NvZGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgcmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzW2tSZWFzb25dO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IHdhc0NsZWFuKCkge1xuICAgIHJldHVybiB0aGlzW2tXYXNDbGVhbl07XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENsb3NlRXZlbnQucHJvdG90eXBlLCAnY29kZScsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ3JlYXNvbicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ3dhc0NsZWFuJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBlcnJvciBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBFcnJvckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBFcnJvckV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGFsbG93cyBmb3Igc2V0dGluZ1xuICAgKiAgICAgYXR0cmlidXRlcyB2aWEgb2JqZWN0IG1lbWJlcnMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLmVycm9yPW51bGxdIFRoZSBlcnJvciB0aGF0IGdlbmVyYXRlZCB0aGlzIGV2ZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tZXNzYWdlPScnXSBUaGUgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzW2tFcnJvcl0gPSBvcHRpb25zLmVycm9yID09PSB1bmRlZmluZWQgPyBudWxsIDogb3B0aW9ucy5lcnJvcjtcbiAgICB0aGlzW2tNZXNzYWdlXSA9IG9wdGlvbnMubWVzc2FnZSA9PT0gdW5kZWZpbmVkID8gJycgOiBvcHRpb25zLm1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBnZXQgZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXNba0Vycm9yXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXNba01lc3NhZ2VdO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckV2ZW50LnByb3RvdHlwZSwgJ2Vycm9yJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEVycm9yRXZlbnQucHJvdG90eXBlLCAnbWVzc2FnZScsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBtZXNzYWdlIGV2ZW50LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50XG4gKi9cbmNsYXNzIE1lc3NhZ2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgTWVzc2FnZUV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGFsbG93cyBmb3Igc2V0dGluZ1xuICAgKiAgICAgYXR0cmlidXRlcyB2aWEgb2JqZWN0IG1lbWJlcnMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLmRhdGE9bnVsbF0gVGhlIG1lc3NhZ2UgY29udGVudFxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzW2tEYXRhXSA9IG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzW2tEYXRhXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUV2ZW50LnByb3RvdHlwZSwgJ2RhdGEnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogVGhpcyBwcm92aWRlcyBtZXRob2RzIGZvciBlbXVsYXRpbmcgdGhlIGBFdmVudFRhcmdldGAgaW50ZXJmYWNlLiBJdCdzIG5vdFxuICogbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWl4aW5cbiAqL1xuY29uc3QgRXZlbnRUYXJnZXQgPSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3JcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gaGFuZGxlciBUaGUgbGlzdGVuZXIgdG8gYWRkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQW4gb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVzIGNoYXJhY3RlcmlzdGljcyBhYm91dFxuICAgKiAgICAgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMub25jZT1mYWxzZV0gQSBgQm9vbGVhbmAgaW5kaWNhdGluZyB0aGF0IHRoZVxuICAgKiAgICAgbGlzdGVuZXIgc2hvdWxkIGJlIGludm9rZWQgYXQgbW9zdCBvbmNlIGFmdGVyIGJlaW5nIGFkZGVkLiBJZiBgdHJ1ZWAsXG4gICAqICAgICB0aGUgbGlzdGVuZXIgd291bGQgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIHdoZW4gaW52b2tlZC5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKHR5cGUpKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFvcHRpb25zW2tGb3JPbkV2ZW50QXR0cmlidXRlXSAmJlxuICAgICAgICBsaXN0ZW5lcltrTGlzdGVuZXJdID09PSBoYW5kbGVyICYmXG4gICAgICAgICFsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHdyYXBwZXI7XG5cbiAgICBpZiAodHlwZSA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25NZXNzYWdlKGRhdGEsIGlzQmluYXJ5KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudCgnbWVzc2FnZScsIHtcbiAgICAgICAgICBkYXRhOiBpc0JpbmFyeSA/IGRhdGEgOiBkYXRhLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnRba1RhcmdldF0gPSB0aGlzO1xuICAgICAgICBjYWxsTGlzdGVuZXIoaGFuZGxlciwgdGhpcywgZXZlbnQpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHdyYXBwZXIgPSBmdW5jdGlvbiBvbkNsb3NlKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ2xvc2VFdmVudCgnY2xvc2UnLCB7XG4gICAgICAgICAgY29kZSxcbiAgICAgICAgICByZWFzb246IG1lc3NhZ2UudG9TdHJpbmcoKSxcbiAgICAgICAgICB3YXNDbGVhbjogdGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkICYmIHRoaXMuX2Nsb3NlRnJhbWVTZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb3BlbicpIHtcbiAgICAgIHdyYXBwZXIgPSBmdW5jdGlvbiBvbk9wZW4oKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdvcGVuJyk7XG5cbiAgICAgICAgZXZlbnRba1RhcmdldF0gPSB0aGlzO1xuICAgICAgICBjYWxsTGlzdGVuZXIoaGFuZGxlciwgdGhpcywgZXZlbnQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyYXBwZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdID0gISFvcHRpb25zW2tGb3JPbkV2ZW50QXR0cmlidXRlXTtcbiAgICB3cmFwcGVyW2tMaXN0ZW5lcl0gPSBoYW5kbGVyO1xuXG4gICAgaWYgKG9wdGlvbnMub25jZSkge1xuICAgICAgdGhpcy5vbmNlKHR5cGUsIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uKHR5cGUsIHdyYXBwZXIpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGV2ZW50IHR5cGUgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGhhbmRsZXIgVGhlIGxpc3RlbmVyIHRvIHJlbW92ZVxuICAgKiBAcHVibGljXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKHR5cGUpKSB7XG4gICAgICBpZiAobGlzdGVuZXJba0xpc3RlbmVyXSA9PT0gaGFuZGxlciAmJiAhbGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDbG9zZUV2ZW50LFxuICBFcnJvckV2ZW50LFxuICBFdmVudCxcbiAgRXZlbnRUYXJnZXQsXG4gIE1lc3NhZ2VFdmVudFxufTtcblxuLyoqXG4gKiBDYWxsIGFuIGV2ZW50IGxpc3RlbmVyXG4gKlxuICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIGNhbGxcbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgdmFsdWUgdG8gdXNlIGFzIGB0aGlzYGAgd2hlbiBjYWxsaW5nIHRoZSBsaXN0ZW5lclxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIHBhc3MgdG8gdGhlIGxpc3RlbmVyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxsTGlzdGVuZXIobGlzdGVuZXIsIHRoaXNBcmcsIGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdvYmplY3QnICYmIGxpc3RlbmVyLmhhbmRsZUV2ZW50KSB7XG4gICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGxpc3RlbmVyLmNhbGwodGhpc0FyZywgZXZlbnQpO1xuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IHRva2VuQ2hhcnMgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG4vKipcbiAqIEFkZHMgYW4gb2ZmZXIgdG8gdGhlIG1hcCBvZiBleHRlbnNpb24gb2ZmZXJzIG9yIGEgcGFyYW1ldGVyIHRvIHRoZSBtYXAgb2ZcbiAqIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlc3QgVGhlIG1hcCBvZiBleHRlbnNpb24gb2ZmZXJzIG9yIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBleHRlbnNpb24gb3IgcGFyYW1ldGVyIG5hbWVcbiAqIEBwYXJhbSB7KE9iamVjdHxCb29sZWFufFN0cmluZyl9IGVsZW0gVGhlIGV4dGVuc2lvbiBwYXJhbWV0ZXJzIG9yIHRoZVxuICogICAgIHBhcmFtZXRlciB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHVzaChkZXN0LCBuYW1lLCBlbGVtKSB7XG4gIGlmIChkZXN0W25hbWVdID09PSB1bmRlZmluZWQpIGRlc3RbbmFtZV0gPSBbZWxlbV07XG4gIGVsc2UgZGVzdFtuYW1lXS5wdXNoKGVsZW0pO1xufVxuXG4vKipcbiAqIFBhcnNlcyB0aGUgYFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9uc2AgaGVhZGVyIGludG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXIgVGhlIGZpZWxkIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHBhcnNlZCBvYmplY3RcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcGFyc2UoaGVhZGVyKSB7XG4gIGNvbnN0IG9mZmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgbXVzdFVuZXNjYXBlID0gZmFsc2U7XG4gIGxldCBpc0VzY2FwaW5nID0gZmFsc2U7XG4gIGxldCBpblF1b3RlcyA9IGZhbHNlO1xuICBsZXQgZXh0ZW5zaW9uTmFtZTtcbiAgbGV0IHBhcmFtTmFtZTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBjb2RlID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAoOyBpIDwgaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29kZSA9IGhlYWRlci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGV4dGVuc2lvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpICE9PSAwICYmXG4gICAgICAgIChjb2RlID09PSAweDIwIC8qICcgJyAqLyB8fCBjb2RlID09PSAweDA5KSAvKiAnXFx0JyAqL1xuICAgICAgKSB7XG4gICAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiAvKiAnOycgKi8gfHwgY29kZSA9PT0gMHgyYyAvKiAnLCcgKi8pIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIGlmIChjb2RlID09PSAweDJjKSB7XG4gICAgICAgICAgcHVzaChvZmZlcnMsIG5hbWUsIHBhcmFtcyk7XG4gICAgICAgICAgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHRlbnNpb25OYW1lID0gbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZW5kID09PSAtMSAmJiB0b2tlbkNoYXJzW2NvZGVdID09PSAxKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSB7XG4gICAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiB8fCBjb2RlID09PSAweDJjKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBwdXNoKHBhcmFtcywgaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpLCB0cnVlKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgICAgICAgICBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGV4dGVuc2lvbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDNkIC8qICc9JyAqLyAmJiBzdGFydCAhPT0gLTEgJiYgZW5kID09PSAtMSkge1xuICAgICAgICBwYXJhbU5hbWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGkpO1xuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGUgdmFsdWUgb2YgYSBxdW90ZWQtc3RyaW5nIGFmdGVyIHVuZXNjYXBpbmcgbXVzdCBjb25mb3JtIHRvIHRoZVxuICAgICAgLy8gdG9rZW4gQUJORiwgc28gb25seSB0b2tlbiBjaGFyYWN0ZXJzIGFyZSB2YWxpZC5cbiAgICAgIC8vIFJlZjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY0NTUjc2VjdGlvbi05LjFcbiAgICAgIC8vXG4gICAgICBpZiAoaXNFc2NhcGluZykge1xuICAgICAgICBpZiAodG9rZW5DaGFyc1tjb2RlXSAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgICAgZWxzZSBpZiAoIW11c3RVbmVzY2FwZSkgbXVzdFVuZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgaXNFc2NhcGluZyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpblF1b3Rlcykge1xuICAgICAgICBpZiAodG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyIC8qICdcIicgKi8gJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICAgICAgaW5RdW90ZXMgPSBmYWxzZTtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4NWMgLyogJ1xcJyAqLykge1xuICAgICAgICAgIGlzRXNjYXBpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjIgJiYgaGVhZGVyLmNoYXJDb2RlQXQoaSAtIDEpID09PSAweDNkKSB7XG4gICAgICAgIGluUXVvdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSAmJiB0b2tlbkNoYXJzW2NvZGVdID09PSAxKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnQgIT09IC0xICYmIChjb2RlID09PSAweDIwIHx8IGNvZGUgPT09IDB4MDkpKSB7XG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDNiIHx8IGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgaWYgKG11c3RVbmVzY2FwZSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG4gICAgICAgICAgbXVzdFVuZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdmFsdWUpO1xuICAgICAgICBpZiAoY29kZSA9PT0gMHgyYykge1xuICAgICAgICAgIHB1c2gob2ZmZXJzLCBleHRlbnNpb25OYW1lLCBwYXJhbXMpO1xuICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZXh0ZW5zaW9uTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gLTEgfHwgaW5RdW90ZXMgfHwgY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dCcpO1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGk7XG4gIGNvbnN0IHRva2VuID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICBpZiAoZXh0ZW5zaW9uTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHVzaChvZmZlcnMsIHRva2VuLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHVzaChwYXJhbXMsIHRva2VuLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG11c3RVbmVzY2FwZSkge1xuICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdG9rZW4ucmVwbGFjZSgvXFxcXC9nLCAnJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoKHBhcmFtcywgcGFyYW1OYW1lLCB0b2tlbik7XG4gICAgfVxuICAgIHB1c2gob2ZmZXJzLCBleHRlbnNpb25OYW1lLCBwYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIG9mZmVycztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnNgIGhlYWRlciBmaWVsZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9ucyBUaGUgbWFwIG9mIGV4dGVuc2lvbnMgYW5kIHBhcmFtZXRlcnMgdG8gZm9ybWF0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gb2JqZWN0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChleHRlbnNpb25zKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhleHRlbnNpb25zKVxuICAgIC5tYXAoKGV4dGVuc2lvbikgPT4ge1xuICAgICAgbGV0IGNvbmZpZ3VyYXRpb25zID0gZXh0ZW5zaW9uc1tleHRlbnNpb25dO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmZpZ3VyYXRpb25zKSkgY29uZmlndXJhdGlvbnMgPSBbY29uZmlndXJhdGlvbnNdO1xuICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zXG4gICAgICAgIC5tYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICAgIHJldHVybiBbZXh0ZW5zaW9uXVxuICAgICAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAubWFwKCh2KSA9PiAodiA9PT0gdHJ1ZSA/IGsgOiBgJHtrfT0ke3Z9YCkpXG4gICAgICAgICAgICAgICAgICAuam9pbignOyAnKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCc7ICcpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignLCAnKTtcbiAgICB9KVxuICAgIC5qb2luKCcsICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZm9ybWF0LCBwYXJzZSB9O1xuIiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXkR1cGxleHxSZWFkYWJsZSRcIiwgXCJjYXVnaHRFcnJvcnNcIjogXCJub25lXCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBuZXQgPSByZXF1aXJlKCduZXQnKTtcbmNvbnN0IHRscyA9IHJlcXVpcmUoJ3RscycpO1xuY29uc3QgeyByYW5kb21CeXRlcywgY3JlYXRlSGFzaCB9ID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5jb25zdCB7IER1cGxleCwgUmVhZGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgeyBVUkwgfSA9IHJlcXVpcmUoJ3VybCcpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCBSZWNlaXZlciA9IHJlcXVpcmUoJy4vcmVjZWl2ZXInKTtcbmNvbnN0IFNlbmRlciA9IHJlcXVpcmUoJy4vc2VuZGVyJyk7XG5jb25zdCB7IGlzQmxvYiB9ID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbmNvbnN0IHtcbiAgQklOQVJZX1RZUEVTLFxuICBDTE9TRV9USU1FT1VULFxuICBFTVBUWV9CVUZGRVIsXG4gIEdVSUQsXG4gIGtGb3JPbkV2ZW50QXR0cmlidXRlLFxuICBrTGlzdGVuZXIsXG4gIGtTdGF0dXNDb2RlLFxuICBrV2ViU29ja2V0LFxuICBOT09QXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHtcbiAgRXZlbnRUYXJnZXQ6IHsgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciB9XG59ID0gcmVxdWlyZSgnLi9ldmVudC10YXJnZXQnKTtcbmNvbnN0IHsgZm9ybWF0LCBwYXJzZSB9ID0gcmVxdWlyZSgnLi9leHRlbnNpb24nKTtcbmNvbnN0IHsgdG9CdWZmZXIgfSA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcblxuY29uc3Qga0Fib3J0ZWQgPSBTeW1ib2woJ2tBYm9ydGVkJyk7XG5jb25zdCBwcm90b2NvbFZlcnNpb25zID0gWzgsIDEzXTtcbmNvbnN0IHJlYWR5U3RhdGVzID0gWydDT05ORUNUSU5HJywgJ09QRU4nLCAnQ0xPU0lORycsICdDTE9TRUQnXTtcbmNvbnN0IHN1YnByb3RvY29sUmVnZXggPSAvXlshIyQlJicqK1xcLS4wLTlBLVpeX2B8YS16fl0rJC87XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgV2ViU29ja2V0LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBXZWJTb2NrZXRgLlxuICAgKlxuICAgKiBAcGFyYW0geyhTdHJpbmd8VVJMKX0gYWRkcmVzcyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3RcbiAgICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdKX0gW3Byb3RvY29sc10gVGhlIHN1YnByb3RvY29sc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbm5lY3Rpb24gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBCSU5BUllfVFlQRVNbMF07XG4gICAgdGhpcy5fY2xvc2VDb2RlID0gMTAwNjtcbiAgICB0aGlzLl9jbG9zZUZyYW1lUmVjZWl2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZUZyYW1lU2VudCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nsb3NlTWVzc2FnZSA9IEVNUFRZX0JVRkZFUjtcbiAgICB0aGlzLl9jbG9zZVRpbWVyID0gbnVsbDtcbiAgICB0aGlzLl9lcnJvckVtaXR0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9leHRlbnNpb25zID0ge307XG4gICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSAnJztcbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNPTk5FQ1RJTkc7XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSBudWxsO1xuICAgIHRoaXMuX3NlbmRlciA9IG51bGw7XG4gICAgdGhpcy5fc29ja2V0ID0gbnVsbDtcblxuICAgIGlmIChhZGRyZXNzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9idWZmZXJlZEFtb3VudCA9IDA7XG4gICAgICB0aGlzLl9pc1NlcnZlciA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVkaXJlY3RzID0gMDtcblxuICAgICAgaWYgKHByb3RvY29scyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3RvY29scyA9IFtdO1xuICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShwcm90b2NvbHMpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9jb2xzID09PSAnb2JqZWN0JyAmJiBwcm90b2NvbHMgIT09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zID0gcHJvdG9jb2xzO1xuICAgICAgICAgIHByb3RvY29scyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvY29scyA9IFtwcm90b2NvbHNdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluaXRBc0NsaWVudCh0aGlzLCBhZGRyZXNzLCBwcm90b2NvbHMsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvUG9uZyA9IG9wdGlvbnMuYXV0b1Bvbmc7XG4gICAgICB0aGlzLl9jbG9zZVRpbWVvdXQgPSBvcHRpb25zLmNsb3NlVGltZW91dDtcbiAgICAgIHRoaXMuX2lzU2VydmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIGhpc3RvcmljYWwgcmVhc29ucywgdGhlIGN1c3RvbSBcIm5vZGVidWZmZXJcIiB0eXBlIGlzIHVzZWQgYnkgdGhlIGRlZmF1bHRcbiAgICogaW5zdGVhZCBvZiBcImJsb2JcIi5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBiaW5hcnlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9iaW5hcnlUeXBlO1xuICB9XG5cbiAgc2V0IGJpbmFyeVR5cGUodHlwZSkge1xuICAgIGlmICghQklOQVJZX1RZUEVTLmluY2x1ZGVzKHR5cGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9iaW5hcnlUeXBlID0gdHlwZTtcblxuICAgIC8vXG4gICAgLy8gQWxsb3cgdG8gY2hhbmdlIGBiaW5hcnlUeXBlYCBvbiB0aGUgZmx5LlxuICAgIC8vXG4gICAgaWYgKHRoaXMuX3JlY2VpdmVyKSB0aGlzLl9yZWNlaXZlci5fYmluYXJ5VHlwZSA9IHR5cGU7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCBidWZmZXJlZEFtb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCkgcmV0dXJuIHRoaXMuX2J1ZmZlcmVkQW1vdW50O1xuXG4gICAgcmV0dXJuIHRoaXMuX3NvY2tldC5fd3JpdGFibGVTdGF0ZS5sZW5ndGggKyB0aGlzLl9zZW5kZXIuX2J1ZmZlcmVkQnl0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBleHRlbnNpb25zKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9leHRlbnNpb25zKS5qb2luKCk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25jbG9zZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25lcnJvcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25vcGVuKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCByZWFkeVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkeVN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIHRoZSBzb2NrZXQgYW5kIHRoZSBpbnRlcm5hbCByZXNvdXJjZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyXG4gICAqICAgICBhbnkgb2YgdGhlIGAnbWVzc2FnZSdgLCBgJ3BpbmcnYCwgYW5kIGAncG9uZydgIGV2ZW50cyBjYW4gYmUgZW1pdHRlZFxuICAgKiAgICAgbXVsdGlwbGUgdGltZXMgaW4gdGhlIHNhbWUgdGlja1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgKiAgICAgbWFza2luZyBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U29ja2V0KHNvY2tldCwgaGVhZCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IFJlY2VpdmVyKHtcbiAgICAgIGFsbG93U3luY2hyb25vdXNFdmVudHM6IG9wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cyxcbiAgICAgIGJpbmFyeVR5cGU6IHRoaXMuYmluYXJ5VHlwZSxcbiAgICAgIGV4dGVuc2lvbnM6IHRoaXMuX2V4dGVuc2lvbnMsXG4gICAgICBpc1NlcnZlcjogdGhpcy5faXNTZXJ2ZXIsXG4gICAgICBtYXhQYXlsb2FkOiBvcHRpb25zLm1heFBheWxvYWQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IG9wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZW5kZXIgPSBuZXcgU2VuZGVyKHNvY2tldCwgdGhpcy5fZXh0ZW5zaW9ucywgb3B0aW9ucy5nZW5lcmF0ZU1hc2spO1xuXG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9zZW5kZXIgPSBzZW5kZXI7XG4gICAgdGhpcy5fc29ja2V0ID0gc29ja2V0O1xuXG4gICAgcmVjZWl2ZXJba1dlYlNvY2tldF0gPSB0aGlzO1xuICAgIHNlbmRlcltrV2ViU29ja2V0XSA9IHRoaXM7XG4gICAgc29ja2V0W2tXZWJTb2NrZXRdID0gdGhpcztcblxuICAgIHJlY2VpdmVyLm9uKCdjb25jbHVkZScsIHJlY2VpdmVyT25Db25jbHVkZSk7XG4gICAgcmVjZWl2ZXIub24oJ2RyYWluJywgcmVjZWl2ZXJPbkRyYWluKTtcbiAgICByZWNlaXZlci5vbignZXJyb3InLCByZWNlaXZlck9uRXJyb3IpO1xuICAgIHJlY2VpdmVyLm9uKCdtZXNzYWdlJywgcmVjZWl2ZXJPbk1lc3NhZ2UpO1xuICAgIHJlY2VpdmVyLm9uKCdwaW5nJywgcmVjZWl2ZXJPblBpbmcpO1xuICAgIHJlY2VpdmVyLm9uKCdwb25nJywgcmVjZWl2ZXJPblBvbmcpO1xuXG4gICAgc2VuZGVyLm9uZXJyb3IgPSBzZW5kZXJPbkVycm9yO1xuXG4gICAgLy9cbiAgICAvLyBUaGVzZSBtZXRob2RzIG1heSBub3QgYmUgYXZhaWxhYmxlIGlmIGBzb2NrZXRgIGlzIGp1c3QgYSBgRHVwbGV4YC5cbiAgICAvL1xuICAgIGlmIChzb2NrZXQuc2V0VGltZW91dCkgc29ja2V0LnNldFRpbWVvdXQoMCk7XG4gICAgaWYgKHNvY2tldC5zZXROb0RlbGF5KSBzb2NrZXQuc2V0Tm9EZWxheSgpO1xuXG4gICAgaWYgKGhlYWQubGVuZ3RoID4gMCkgc29ja2V0LnVuc2hpZnQoaGVhZCk7XG5cbiAgICBzb2NrZXQub24oJ2Nsb3NlJywgc29ja2V0T25DbG9zZSk7XG4gICAgc29ja2V0Lm9uKCdkYXRhJywgc29ja2V0T25EYXRhKTtcbiAgICBzb2NrZXQub24oJ2VuZCcsIHNvY2tldE9uRW5kKTtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0Lk9QRU47XG4gICAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB0aGUgYCdjbG9zZSdgIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW1pdENsb3NlKCkge1xuICAgIGlmICghdGhpcy5fc29ja2V0KSB7XG4gICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICAgIHRoaXMuZW1pdCgnY2xvc2UnLCB0aGlzLl9jbG9zZUNvZGUsIHRoaXMuX2Nsb3NlTWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0uY2xlYW51cCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlY2VpdmVyLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0VEO1xuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCB0aGlzLl9jbG9zZUNvZGUsIHRoaXMuX2Nsb3NlTWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBjbG9zaW5nIGhhbmRzaGFrZS5cbiAgICpcbiAgICogICAgICAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tK1xuICAgKiAgICAgLSAtIC18d3MuY2xvc2UoKXwtLT58Y2xvc2UgZnJhbWV8LS0+fHdzLmNsb3NlKCl8LSAtIC1cbiAgICogICAgfCAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tKyAgICAgfFxuICAgKiAgICAgICAgICArLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLS0rICAgICAgICAgfFxuICAgKiBDTE9TSU5HICB8d3MuY2xvc2UoKXw8LS18Y2xvc2UgZnJhbWV8PC0tKy0tLS0tKyAgICAgICBDTE9TSU5HXG4gICAqICAgICAgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICB8XG4gICAqICAgIHwgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgKy0tLSsgICAgICAgIHxcbiAgICogICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLT58ZmlufCAtIC0gLSAtXG4gICAqICAgIHwgICAgICAgICArLS0tKyAgICAgICAgICAgICAgICAgICAgICB8ICAgKy0tLStcbiAgICogICAgIC0gLSAtIC0gLXxmaW58PC0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICogICAgICAgICAgICAgICstLS0rXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29kZV0gU3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2luZ1xuICAgKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyKX0gW2RhdGFdIFRoZSByZWFzb24gd2h5IHRoZSBjb25uZWN0aW9uIGlzXG4gICAqICAgICBjbG9zaW5nXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNvZGUsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIGNvbnN0IG1zZyA9ICdXZWJTb2NrZXQgd2FzIGNsb3NlZCBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gd2FzIGVzdGFibGlzaGVkJztcbiAgICAgIGFib3J0SGFuZHNoYWtlKHRoaXMsIHRoaXMuX3JlcSwgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0lORykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jbG9zZUZyYW1lU2VudCAmJlxuICAgICAgICAodGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkIHx8IHRoaXMuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgdGhpcy5fc2VuZGVyLmNsb3NlKGNvZGUsIGRhdGEsICF0aGlzLl9pc1NlcnZlciwgKGVycikgPT4ge1xuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgaGFuZGxlZCBieSB0aGUgYCdlcnJvcidgIGxpc3RlbmVyIG9uIHRoZSBzb2NrZXQuIFdlIG9ubHlcbiAgICAgIC8vIHdhbnQgdG8ga25vdyBpZiB0aGUgY2xvc2UgZnJhbWUgaGFzIGJlZW4gc2VudCBoZXJlLlxuICAgICAgLy9cbiAgICAgIGlmIChlcnIpIHJldHVybjtcblxuICAgICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCB8fFxuICAgICAgICB0aGlzLl9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXRDbG9zZVRpbWVyKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBhdXNlKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcgfHxcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fc29ja2V0LnBhdXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gW2RhdGFdIFRoZSBkYXRhIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbWFza10gSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2sgd2hpY2ggaXMgZXhlY3V0ZWQgd2hlbiB0aGUgcGluZyBpcyBzZW50XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBpbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ09OTkVDVElORykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgMCAoQ09OTkVDVElORyknKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZGF0YTtcbiAgICAgIGRhdGEgPSBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1hc2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gbWFzaztcbiAgICAgIG1hc2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBzZW5kQWZ0ZXJDbG9zZSh0aGlzLCBkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1hc2sgPT09IHVuZGVmaW5lZCkgbWFzayA9ICF0aGlzLl9pc1NlcnZlcjtcbiAgICB0aGlzLl9zZW5kZXIucGluZyhkYXRhIHx8IEVNUFRZX0JVRkZFUiwgbWFzaywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwb25nLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2tdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHBvbmcgaXMgc2VudFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGRhdGE7XG4gICAgICBkYXRhID0gbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG1hc2s7XG4gICAgICBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBvbmcoZGF0YSB8fCBFTVBUWV9CVUZGRVIsIG1hc2ssIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGhlIHNvY2tldC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVzdW1lKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcgfHxcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSB0aGlzLl9zb2NrZXQucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGRhdGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmJpbmFyeV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGlzIGJpbmFyeSBvclxuICAgKiAgICAgdGV4dFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvbXByZXNzXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3NcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj10cnVlXSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZnJhZ21lbnQgaXMgdGhlXG4gICAqICAgICBsYXN0IG9uZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hc2tdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gZGF0YSBpcyB3cml0dGVuIG91dFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzZW5kKGRhdGEsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBzZW5kQWZ0ZXJDbG9zZSh0aGlzLCBkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJpbmFyeTogdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnLFxuICAgICAgbWFzazogIXRoaXMuX2lzU2VydmVyLFxuICAgICAgY29tcHJlc3M6IHRydWUsXG4gICAgICBmaW46IHRydWUsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcblxuICAgIGlmICghdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbmRlci5zZW5kKGRhdGEgfHwgRU1QVFlfQlVGRkVSLCBvcHRzLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2libHkgY2xvc2UgdGhlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHRlcm1pbmF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIGNvbnN0IG1zZyA9ICdXZWJTb2NrZXQgd2FzIGNsb3NlZCBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gd2FzIGVzdGFibGlzaGVkJztcbiAgICAgIGFib3J0SGFuZHNoYWtlKHRoaXMsIHRoaXMuX3JlcSwgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc29ja2V0KSB7XG4gICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgICB0aGlzLl9zb2NrZXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDT05ORUNUSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDT05ORUNUSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ09OTkVDVElORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ09OTkVDVElOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDT05ORUNUSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ09OTkVDVElORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gT1BFTlxuICogQG1lbWJlcm9mIFdlYlNvY2tldFxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LCAnT1BFTicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ09QRU4nKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IE9QRU5cbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXQucHJvdG90eXBlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQucHJvdG90eXBlLCAnT1BFTicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ09QRU4nKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENMT1NJTkdcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ0NMT1NJTkcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TSU5HJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ0NMT1NJTkcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TSU5HJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TRURcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ0NMT1NFRCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NMT1NFRCcpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0VEXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ0NMT1NFRCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NMT1NFRCcpXG59KTtcblxuW1xuICAnYmluYXJ5VHlwZScsXG4gICdidWZmZXJlZEFtb3VudCcsXG4gICdleHRlbnNpb25zJyxcbiAgJ2lzUGF1c2VkJyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3JlYWR5U3RhdGUnLFxuICAndXJsJ1xuXS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgcHJvcGVydHksIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn0pO1xuXG4vL1xuLy8gQWRkIHRoZSBgb25vcGVuYCwgYG9uZXJyb3JgLCBgb25jbG9zZWAsIGFuZCBgb25tZXNzYWdlYCBhdHRyaWJ1dGVzLlxuLy8gU2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2NvbW1zLmh0bWwjdGhlLXdlYnNvY2tldC1pbnRlcmZhY2Vcbi8vXG5bJ29wZW4nLCAnZXJyb3InLCAnY2xvc2UnLCAnbWVzc2FnZSddLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgYG9uJHttZXRob2R9YCwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV0pIHJldHVybiBsaXN0ZW5lcltrTGlzdGVuZXJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHNldChoYW5kbGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKG1ldGhvZCkpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIobWV0aG9kLCBsaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihtZXRob2QsIGhhbmRsZXIsIHtcbiAgICAgICAgW2tGb3JPbkV2ZW50QXR0cmlidXRlXTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5XZWJTb2NrZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuV2ViU29ja2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJTb2NrZXQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIFdlYlNvY2tldCBjbGllbnQuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgY2xpZW50IHRvIGluaXRpYWxpemVcbiAqIEBwYXJhbSB7KFN0cmluZ3xVUkwpfSBhZGRyZXNzIFRoZSBVUkwgdG8gd2hpY2ggdG8gY29ubmVjdFxuICogQHBhcmFtIHtBcnJheX0gcHJvdG9jb2xzIFRoZSBzdWJwcm90b2NvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29ubmVjdGlvbiBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgYW55XG4gKiAgICAgb2YgdGhlIGAnbWVzc2FnZSdgLCBgJ3BpbmcnYCwgYW5kIGAncG9uZydgIGV2ZW50cyBjYW4gYmUgZW1pdHRlZCBtdWx0aXBsZVxuICogICAgIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b1Bvbmc9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gKiAgICAgYXV0b21hdGljYWxseSBzZW5kIGEgcG9uZyBpbiByZXNwb25zZSB0byBhIHBpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5jbG9zZVRpbWVvdXQ9MzAwMDBdIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0byB3YWl0XG4gKiAgICAgZm9yIHRoZSBjbG9zaW5nIGhhbmRzaGFrZSB0byBmaW5pc2ggYWZ0ZXIgYHdlYnNvY2tldC5jbG9zZSgpYCBpcyBjYWxsZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmZpbmlzaFJlcXVlc3RdIEEgZnVuY3Rpb24gd2hpY2ggY2FuIGJlIHVzZWQgdG9cbiAqICAgICBjdXN0b21pemUgdGhlIGhlYWRlcnMgb2YgZWFjaCBodHRwIHJlcXVlc3QgYmVmb3JlIGl0IGlzIHNlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZm9sbG93UmVkaXJlY3RzPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byBmb2xsb3dcbiAqICAgICByZWRpcmVjdHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmdlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgbWFza2luZyBrZXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5oYW5kc2hha2VUaW1lb3V0XSBUaW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlXG4gKiAgICAgaGFuZHNoYWtlIHJlcXVlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTEwNDg1NzYwMF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlXG4gKiAgICAgc2l6ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFJlZGlyZWN0cz0xMF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIHJlZGlyZWN0c1xuICogICAgIGFsbG93ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5vcmlnaW5dIFZhbHVlIG9mIHRoZSBgT3JpZ2luYCBvclxuICogICAgIGBTZWMtV2ViU29ja2V0LU9yaWdpbmAgaGVhZGVyXG4gKiBAcGFyYW0geyhCb29sZWFufE9iamVjdCl9IFtvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlPXRydWVdIEVuYWJsZS9kaXNhYmxlXG4gKiAgICAgcGVybWVzc2FnZS1kZWZsYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucHJvdG9jb2xWZXJzaW9uPTEzXSBWYWx1ZSBvZiB0aGVcbiAqICAgICBgU2VjLVdlYlNvY2tldC1WZXJzaW9uYCBoZWFkZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICogICAgIG5vdCB0byBza2lwIFVURi04IHZhbGlkYXRpb24gZm9yIHRleHQgYW5kIGNsb3NlIG1lc3NhZ2VzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0QXNDbGllbnQod2Vic29ja2V0LCBhZGRyZXNzLCBwcm90b2NvbHMsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiB0cnVlLFxuICAgIGF1dG9Qb25nOiB0cnVlLFxuICAgIGNsb3NlVGltZW91dDogQ0xPU0VfVElNRU9VVCxcbiAgICBwcm90b2NvbFZlcnNpb246IHByb3RvY29sVmVyc2lvbnNbMV0sXG4gICAgbWF4UGF5bG9hZDogMTAwICogMTAyNCAqIDEwMjQsXG4gICAgc2tpcFVURjhWYWxpZGF0aW9uOiBmYWxzZSxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdHJ1ZSxcbiAgICBmb2xsb3dSZWRpcmVjdHM6IGZhbHNlLFxuICAgIG1heFJlZGlyZWN0czogMTAsXG4gICAgLi4ub3B0aW9ucyxcbiAgICBzb2NrZXRQYXRoOiB1bmRlZmluZWQsXG4gICAgaG9zdG5hbWU6IHVuZGVmaW5lZCxcbiAgICBwcm90b2NvbDogdW5kZWZpbmVkLFxuICAgIHRpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhvc3Q6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgcG9ydDogdW5kZWZpbmVkXG4gIH07XG5cbiAgd2Vic29ja2V0Ll9hdXRvUG9uZyA9IG9wdHMuYXV0b1Bvbmc7XG4gIHdlYnNvY2tldC5fY2xvc2VUaW1lb3V0ID0gb3B0cy5jbG9zZVRpbWVvdXQ7XG5cbiAgaWYgKCFwcm90b2NvbFZlcnNpb25zLmluY2x1ZGVzKG9wdHMucHJvdG9jb2xWZXJzaW9uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVuc3VwcG9ydGVkIHByb3RvY29sIHZlcnNpb246ICR7b3B0cy5wcm90b2NvbFZlcnNpb259IGAgK1xuICAgICAgICBgKHN1cHBvcnRlZCB2ZXJzaW9uczogJHtwcm90b2NvbFZlcnNpb25zLmpvaW4oJywgJyl9KWBcbiAgICApO1xuICB9XG5cbiAgbGV0IHBhcnNlZFVybDtcblxuICBpZiAoYWRkcmVzcyBpbnN0YW5jZW9mIFVSTCkge1xuICAgIHBhcnNlZFVybCA9IGFkZHJlc3M7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZFVybCA9IG5ldyBVUkwoYWRkcmVzcyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2FkZHJlc3N9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHA6Jykge1xuICAgIHBhcnNlZFVybC5wcm90b2NvbCA9ICd3czonO1xuICB9IGVsc2UgaWYgKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcbiAgICBwYXJzZWRVcmwucHJvdG9jb2wgPSAnd3NzOic7XG4gIH1cblxuICB3ZWJzb2NrZXQuX3VybCA9IHBhcnNlZFVybC5ocmVmO1xuXG4gIGNvbnN0IGlzU2VjdXJlID0gcGFyc2VkVXJsLnByb3RvY29sID09PSAnd3NzOic7XG4gIGNvbnN0IGlzSXBjVXJsID0gcGFyc2VkVXJsLnByb3RvY29sID09PSAnd3MrdW5peDonO1xuICBsZXQgaW52YWxpZFVybE1lc3NhZ2U7XG5cbiAgaWYgKHBhcnNlZFVybC5wcm90b2NvbCAhPT0gJ3dzOicgJiYgIWlzU2VjdXJlICYmICFpc0lwY1VybCkge1xuICAgIGludmFsaWRVcmxNZXNzYWdlID1cbiAgICAgICdUaGUgVVJMXFwncyBwcm90b2NvbCBtdXN0IGJlIG9uZSBvZiBcIndzOlwiLCBcIndzczpcIiwgJyArXG4gICAgICAnXCJodHRwOlwiLCBcImh0dHBzOlwiLCBvciBcIndzK3VuaXg6XCInO1xuICB9IGVsc2UgaWYgKGlzSXBjVXJsICYmICFwYXJzZWRVcmwucGF0aG5hbWUpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9IFwiVGhlIFVSTCdzIHBhdGhuYW1lIGlzIGVtcHR5XCI7XG4gIH0gZWxzZSBpZiAocGFyc2VkVXJsLmhhc2gpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9ICdUaGUgVVJMIGNvbnRhaW5zIGEgZnJhZ21lbnQgaWRlbnRpZmllcic7XG4gIH1cblxuICBpZiAoaW52YWxpZFVybE1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgU3ludGF4RXJyb3IoaW52YWxpZFVybE1lc3NhZ2UpO1xuXG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzID09PSAwKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWZhdWx0UG9ydCA9IGlzU2VjdXJlID8gNDQzIDogODA7XG4gIGNvbnN0IGtleSA9IHJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIGNvbnN0IHJlcXVlc3QgPSBpc1NlY3VyZSA/IGh0dHBzLnJlcXVlc3QgOiBodHRwLnJlcXVlc3Q7XG4gIGNvbnN0IHByb3RvY29sU2V0ID0gbmV3IFNldCgpO1xuICBsZXQgcGVyTWVzc2FnZURlZmxhdGU7XG5cbiAgb3B0cy5jcmVhdGVDb25uZWN0aW9uID1cbiAgICBvcHRzLmNyZWF0ZUNvbm5lY3Rpb24gfHwgKGlzU2VjdXJlID8gdGxzQ29ubmVjdCA6IG5ldENvbm5lY3QpO1xuICBvcHRzLmRlZmF1bHRQb3J0ID0gb3B0cy5kZWZhdWx0UG9ydCB8fCBkZWZhdWx0UG9ydDtcbiAgb3B0cy5wb3J0ID0gcGFyc2VkVXJsLnBvcnQgfHwgZGVmYXVsdFBvcnQ7XG4gIG9wdHMuaG9zdCA9IHBhcnNlZFVybC5ob3N0bmFtZS5zdGFydHNXaXRoKCdbJylcbiAgICA/IHBhcnNlZFVybC5ob3N0bmFtZS5zbGljZSgxLCAtMSlcbiAgICA6IHBhcnNlZFVybC5ob3N0bmFtZTtcbiAgb3B0cy5oZWFkZXJzID0ge1xuICAgIC4uLm9wdHMuaGVhZGVycyxcbiAgICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogb3B0cy5wcm90b2NvbFZlcnNpb24sXG4gICAgJ1NlYy1XZWJTb2NrZXQtS2V5Jzoga2V5LFxuICAgIENvbm5lY3Rpb246ICdVcGdyYWRlJyxcbiAgICBVcGdyYWRlOiAnd2Vic29ja2V0J1xuICB9O1xuICBvcHRzLnBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWUgKyBwYXJzZWRVcmwuc2VhcmNoO1xuICBvcHRzLnRpbWVvdXQgPSBvcHRzLmhhbmRzaGFrZVRpbWVvdXQ7XG5cbiAgaWYgKG9wdHMucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZSA9IG5ldyBQZXJNZXNzYWdlRGVmbGF0ZSh7XG4gICAgICAuLi5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgICAgaXNTZXJ2ZXI6IGZhbHNlLFxuICAgICAgbWF4UGF5bG9hZDogb3B0cy5tYXhQYXlsb2FkXG4gICAgfSk7XG4gICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMnXSA9IGZvcm1hdCh7XG4gICAgICBbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV06IHBlck1lc3NhZ2VEZWZsYXRlLm9mZmVyKClcbiAgICB9KTtcbiAgfVxuICBpZiAocHJvdG9jb2xzLmxlbmd0aCkge1xuICAgIGZvciAoY29uc3QgcHJvdG9jb2wgb2YgcHJvdG9jb2xzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBwcm90b2NvbCAhPT0gJ3N0cmluZycgfHxcbiAgICAgICAgIXN1YnByb3RvY29sUmVnZXgudGVzdChwcm90b2NvbCkgfHxcbiAgICAgICAgcHJvdG9jb2xTZXQuaGFzKHByb3RvY29sKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAnQW4gaW52YWxpZCBvciBkdXBsaWNhdGVkIHN1YnByb3RvY29sIHdhcyBzcGVjaWZpZWQnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHByb3RvY29sU2V0LmFkZChwcm90b2NvbCk7XG4gICAgfVxuXG4gICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LVByb3RvY29sJ10gPSBwcm90b2NvbHMuam9pbignLCcpO1xuICB9XG4gIGlmIChvcHRzLm9yaWdpbikge1xuICAgIGlmIChvcHRzLnByb3RvY29sVmVyc2lvbiA8IDEzKSB7XG4gICAgICBvcHRzLmhlYWRlcnNbJ1NlYy1XZWJTb2NrZXQtT3JpZ2luJ10gPSBvcHRzLm9yaWdpbjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5oZWFkZXJzLk9yaWdpbiA9IG9wdHMub3JpZ2luO1xuICAgIH1cbiAgfVxuICBpZiAocGFyc2VkVXJsLnVzZXJuYW1lIHx8IHBhcnNlZFVybC5wYXNzd29yZCkge1xuICAgIG9wdHMuYXV0aCA9IGAke3BhcnNlZFVybC51c2VybmFtZX06JHtwYXJzZWRVcmwucGFzc3dvcmR9YDtcbiAgfVxuXG4gIGlmIChpc0lwY1VybCkge1xuICAgIGNvbnN0IHBhcnRzID0gb3B0cy5wYXRoLnNwbGl0KCc6Jyk7XG5cbiAgICBvcHRzLnNvY2tldFBhdGggPSBwYXJ0c1swXTtcbiAgICBvcHRzLnBhdGggPSBwYXJ0c1sxXTtcbiAgfVxuXG4gIGxldCByZXE7XG5cbiAgaWYgKG9wdHMuZm9sbG93UmVkaXJlY3RzKSB7XG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzID09PSAwKSB7XG4gICAgICB3ZWJzb2NrZXQuX29yaWdpbmFsSXBjID0gaXNJcGNVcmw7XG4gICAgICB3ZWJzb2NrZXQuX29yaWdpbmFsU2VjdXJlID0gaXNTZWN1cmU7XG4gICAgICB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aCA9IGlzSXBjVXJsXG4gICAgICAgID8gb3B0cy5zb2NrZXRQYXRoXG4gICAgICAgIDogcGFyc2VkVXJsLmhvc3Q7XG5cbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycztcblxuICAgICAgLy9cbiAgICAgIC8vIFNoYWxsb3cgY29weSB0aGUgdXNlciBwcm92aWRlZCBvcHRpb25zIHNvIHRoYXQgaGVhZGVycyBjYW4gYmUgY2hhbmdlZFxuICAgICAgLy8gd2l0aG91dCBtdXRhdGluZyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgLy9cbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIGhlYWRlcnM6IHt9IH07XG5cbiAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpKSB7XG4gICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3ZWJzb2NrZXQubGlzdGVuZXJDb3VudCgncmVkaXJlY3QnKSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNTYW1lSG9zdCA9IGlzSXBjVXJsXG4gICAgICAgID8gd2Vic29ja2V0Ll9vcmlnaW5hbElwY1xuICAgICAgICAgID8gb3B0cy5zb2NrZXRQYXRoID09PSB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aFxuICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgOiB3ZWJzb2NrZXQuX29yaWdpbmFsSXBjXG4gICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgIDogcGFyc2VkVXJsLmhvc3QgPT09IHdlYnNvY2tldC5fb3JpZ2luYWxIb3N0T3JTb2NrZXRQYXRoO1xuXG4gICAgICBpZiAoIWlzU2FtZUhvc3QgfHwgKHdlYnNvY2tldC5fb3JpZ2luYWxTZWN1cmUgJiYgIWlzU2VjdXJlKSkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBNYXRjaCBjdXJsIDcuNzcuMCBiZWhhdmlvciBhbmQgZHJvcCB0aGUgZm9sbG93aW5nIGhlYWRlcnMuIFRoZXNlXG4gICAgICAgIC8vIGhlYWRlcnMgYXJlIGFsc28gZHJvcHBlZCB3aGVuIGZvbGxvd2luZyBhIHJlZGlyZWN0IHRvIGEgc3ViZG9tYWluLlxuICAgICAgICAvL1xuICAgICAgICBkZWxldGUgb3B0cy5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgICAgIGRlbGV0ZSBvcHRzLmhlYWRlcnMuY29va2llO1xuXG4gICAgICAgIGlmICghaXNTYW1lSG9zdCkgZGVsZXRlIG9wdHMuaGVhZGVycy5ob3N0O1xuXG4gICAgICAgIG9wdHMuYXV0aCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIE1hdGNoIGN1cmwgNy43Ny4wIGJlaGF2aW9yIGFuZCBtYWtlIHRoZSBmaXJzdCBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHdpbi5cbiAgICAvLyBJZiB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciBpcyBzZXQsIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byBkbyBhcyBpdFxuICAgIC8vIHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICAgIC8vXG4gICAgaWYgKG9wdHMuYXV0aCAmJiAhb3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID1cbiAgICAgICAgJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShvcHRzLmF1dGgpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG5cbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IHJlcXVlc3Qob3B0cyk7XG5cbiAgICBpZiAod2Vic29ja2V0Ll9yZWRpcmVjdHMpIHtcbiAgICAgIC8vXG4gICAgICAvLyBVbmxpa2Ugd2hhdCBpcyBkb25lIGZvciB0aGUgYCd1cGdyYWRlJ2AgZXZlbnQsIG5vIGVhcmx5IGV4aXQgaXNcbiAgICAgIC8vIHRyaWdnZXJlZCBoZXJlIGlmIHRoZSB1c2VyIGNhbGxzIGB3ZWJzb2NrZXQuY2xvc2UoKWAgb3JcbiAgICAgIC8vIGB3ZWJzb2NrZXQudGVybWluYXRlKClgIGZyb20gYSBsaXN0ZW5lciBvZiB0aGUgYCdyZWRpcmVjdCdgIGV2ZW50LiBUaGlzXG4gICAgICAvLyBpcyBiZWNhdXNlIHRoZSB1c2VyIGNhbiBhbHNvIGNhbGwgYHJlcXVlc3QuZGVzdHJveSgpYCB3aXRoIGFuIGVycm9yXG4gICAgICAvLyBiZWZvcmUgY2FsbGluZyBgd2Vic29ja2V0LmNsb3NlKClgIG9yIGB3ZWJzb2NrZXQudGVybWluYXRlKClgIGFuZCB0aGlzXG4gICAgICAvLyB3b3VsZCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmcgZW1pdHRlZCBvbiB0aGUgYHJlcXVlc3RgIG9iamVjdCB3aXRoIG5vXG4gICAgICAvLyBgJ2Vycm9yJ2AgZXZlbnQgbGlzdGVuZXJzIGF0dGFjaGVkLlxuICAgICAgLy9cbiAgICAgIHdlYnNvY2tldC5lbWl0KCdyZWRpcmVjdCcsIHdlYnNvY2tldC51cmwsIHJlcSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcSA9IHdlYnNvY2tldC5fcmVxID0gcmVxdWVzdChvcHRzKTtcbiAgfVxuXG4gIGlmIChvcHRzLnRpbWVvdXQpIHtcbiAgICByZXEub24oJ3RpbWVvdXQnLCAoKSA9PiB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHJlcSwgJ09wZW5pbmcgaGFuZHNoYWtlIGhhcyB0aW1lZCBvdXQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcS5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgaWYgKHJlcSA9PT0gbnVsbCB8fCByZXFba0Fib3J0ZWRdKSByZXR1cm47XG5cbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IG51bGw7XG4gICAgZW1pdEVycm9yQW5kQ2xvc2Uod2Vic29ja2V0LCBlcnIpO1xuICB9KTtcblxuICByZXEub24oJ3Jlc3BvbnNlJywgKHJlcykgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzLmhlYWRlcnMubG9jYXRpb247XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xuXG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24gJiZcbiAgICAgIG9wdHMuZm9sbG93UmVkaXJlY3RzICYmXG4gICAgICBzdGF0dXNDb2RlID49IDMwMCAmJlxuICAgICAgc3RhdHVzQ29kZSA8IDQwMFxuICAgICkge1xuICAgICAgaWYgKCsrd2Vic29ja2V0Ll9yZWRpcmVjdHMgPiBvcHRzLm1heFJlZGlyZWN0cykge1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHJlcSwgJ01heGltdW0gcmVkaXJlY3RzIGV4Y2VlZGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVxLmFib3J0KCk7XG5cbiAgICAgIGxldCBhZGRyO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhZGRyID0gbmV3IFVSTChsb2NhdGlvbiwgYWRkcmVzcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBVUkw6ICR7bG9jYXRpb259YCk7XG4gICAgICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpbml0QXNDbGllbnQod2Vic29ja2V0LCBhZGRyLCBwcm90b2NvbHMsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAoIXdlYnNvY2tldC5lbWl0KCd1bmV4cGVjdGVkLXJlc3BvbnNlJywgcmVxLCByZXMpKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZShcbiAgICAgICAgd2Vic29ja2V0LFxuICAgICAgICByZXEsXG4gICAgICAgIGBVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZTogJHtyZXMuc3RhdHVzQ29kZX1gXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVxLm9uKCd1cGdyYWRlJywgKHJlcywgc29ja2V0LCBoZWFkKSA9PiB7XG4gICAgd2Vic29ja2V0LmVtaXQoJ3VwZ3JhZGUnLCByZXMpO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgdXNlciBtYXkgaGF2ZSBjbG9zZWQgdGhlIGNvbm5lY3Rpb24gZnJvbSBhIGxpc3RlbmVyIG9mIHRoZVxuICAgIC8vIGAndXBncmFkZSdgIGV2ZW50LlxuICAgIC8vXG4gICAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuQ09OTkVDVElORykgcmV0dXJuO1xuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSBudWxsO1xuXG4gICAgY29uc3QgdXBncmFkZSA9IHJlcy5oZWFkZXJzLnVwZ3JhZGU7XG5cbiAgICBpZiAodXBncmFkZSA9PT0gdW5kZWZpbmVkIHx8IHVwZ3JhZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3dlYnNvY2tldCcpIHtcbiAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCAnSW52YWxpZCBVcGdyYWRlIGhlYWRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpZ2VzdCA9IGNyZWF0ZUhhc2goJ3NoYTEnKVxuICAgICAgLnVwZGF0ZShrZXkgKyBHVUlEKVxuICAgICAgLmRpZ2VzdCgnYmFzZTY0Jyk7XG5cbiAgICBpZiAocmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtYWNjZXB0J10gIT09IGRpZ2VzdCkge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtQWNjZXB0IGhlYWRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZlclByb3QgPSByZXMuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1wcm90b2NvbCddO1xuICAgIGxldCBwcm90RXJyb3I7XG5cbiAgICBpZiAoc2VydmVyUHJvdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXByb3RvY29sU2V0LnNpemUpIHtcbiAgICAgICAgcHJvdEVycm9yID0gJ1NlcnZlciBzZW50IGEgc3VicHJvdG9jb2wgYnV0IG5vbmUgd2FzIHJlcXVlc3RlZCc7XG4gICAgICB9IGVsc2UgaWYgKCFwcm90b2NvbFNldC5oYXMoc2VydmVyUHJvdCkpIHtcbiAgICAgICAgcHJvdEVycm9yID0gJ1NlcnZlciBzZW50IGFuIGludmFsaWQgc3VicHJvdG9jb2wnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvdG9jb2xTZXQuc2l6ZSkge1xuICAgICAgcHJvdEVycm9yID0gJ1NlcnZlciBzZW50IG5vIHN1YnByb3RvY29sJztcbiAgICB9XG5cbiAgICBpZiAocHJvdEVycm9yKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgcHJvdEVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VydmVyUHJvdCkgd2Vic29ja2V0Ll9wcm90b2NvbCA9IHNlcnZlclByb3Q7XG5cbiAgICBjb25zdCBzZWNXZWJTb2NrZXRFeHRlbnNpb25zID0gcmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyddO1xuXG4gICAgaWYgKHNlY1dlYlNvY2tldEV4dGVuc2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICAnU2VydmVyIHNlbnQgYSBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyIGJ1dCBubyBleHRlbnNpb24gJyArXG4gICAgICAgICAgJ3dhcyByZXF1ZXN0ZWQnO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGV4dGVuc2lvbnM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV4dGVuc2lvbnMgPSBwYXJzZShzZWNXZWJTb2NrZXRFeHRlbnNpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHRlbnNpb25OYW1lcyA9IE9iamVjdC5rZXlzKGV4dGVuc2lvbnMpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGV4dGVuc2lvbk5hbWVzLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICBleHRlbnNpb25OYW1lc1swXSAhPT0gUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2VydmVyIGluZGljYXRlZCBhbiBleHRlbnNpb24gdGhhdCB3YXMgbm90IHJlcXVlc3RlZCc7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5hY2NlcHQoZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2Vic29ja2V0Ll9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdID1cbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU7XG4gICAgfVxuXG4gICAgd2Vic29ja2V0LnNldFNvY2tldChzb2NrZXQsIGhlYWQsIHtcbiAgICAgIGFsbG93U3luY2hyb25vdXNFdmVudHM6IG9wdHMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cyxcbiAgICAgIGdlbmVyYXRlTWFzazogb3B0cy5nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXhQYXlsb2FkOiBvcHRzLm1heFBheWxvYWQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IG9wdHMuc2tpcFVURjhWYWxpZGF0aW9uXG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChvcHRzLmZpbmlzaFJlcXVlc3QpIHtcbiAgICBvcHRzLmZpbmlzaFJlcXVlc3QocmVxLCB3ZWJzb2NrZXQpO1xuICB9IGVsc2Uge1xuICAgIHJlcS5lbmQoKTtcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgdGhlIGAnZXJyb3InYCBhbmQgYCdjbG9zZSdgIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd2Vic29ja2V0IFRoZSBXZWJTb2NrZXQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RXJyb3J9IFRoZSBlcnJvciB0byBlbWl0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycikge1xuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgLy9cbiAgLy8gVGhlIGZvbGxvd2luZyBhc3NpZ25tZW50IGlzIHByYWN0aWNhbGx5IHVzZWxlc3MgYW5kIGlzIGRvbmUgb25seSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuXG4gIC8vXG4gIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgd2Vic29ja2V0LmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgd2Vic29ja2V0LmVtaXRDbG9zZSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBuZXQuU29ja2V0YCBhbmQgaW5pdGlhdGUgYSBjb25uZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbm5lY3Rpb24gb3B0aW9uc1xuICogQHJldHVybiB7bmV0LlNvY2tldH0gVGhlIG5ld2x5IGNyZWF0ZWQgc29ja2V0IHVzZWQgdG8gc3RhcnQgdGhlIGNvbm5lY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5ldENvbm5lY3Qob3B0aW9ucykge1xuICBvcHRpb25zLnBhdGggPSBvcHRpb25zLnNvY2tldFBhdGg7XG4gIHJldHVybiBuZXQuY29ubmVjdChvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgdGxzLlRMU1NvY2tldGAgYW5kIGluaXRpYXRlIGEgY29ubmVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25uZWN0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm4ge3Rscy5UTFNTb2NrZXR9IFRoZSBuZXdseSBjcmVhdGVkIHNvY2tldCB1c2VkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0bHNDb25uZWN0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5wYXRoID0gdW5kZWZpbmVkO1xuXG4gIGlmICghb3B0aW9ucy5zZXJ2ZXJuYW1lICYmIG9wdGlvbnMuc2VydmVybmFtZSAhPT0gJycpIHtcbiAgICBvcHRpb25zLnNlcnZlcm5hbWUgPSBuZXQuaXNJUChvcHRpb25zLmhvc3QpID8gJycgOiBvcHRpb25zLmhvc3Q7XG4gIH1cblxuICByZXR1cm4gdGxzLmNvbm5lY3Qob3B0aW9ucyk7XG59XG5cbi8qKlxuICogQWJvcnQgdGhlIGhhbmRzaGFrZSBhbmQgZW1pdCBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd2Vic29ja2V0IFRoZSBXZWJTb2NrZXQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7KGh0dHAuQ2xpZW50UmVxdWVzdHxuZXQuU29ja2V0fHRscy5Tb2NrZXQpfSBzdHJlYW0gVGhlIHJlcXVlc3QgdG9cbiAqICAgICBhYm9ydCBvciB0aGUgc29ja2V0IHRvIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHN0cmVhbSwgbWVzc2FnZSkge1xuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcblxuICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVyciwgYWJvcnRIYW5kc2hha2UpO1xuXG4gIGlmIChzdHJlYW0uc2V0SGVhZGVyKSB7XG4gICAgc3RyZWFtW2tBYm9ydGVkXSA9IHRydWU7XG4gICAgc3RyZWFtLmFib3J0KCk7XG5cbiAgICBpZiAoc3RyZWFtLnNvY2tldCAmJiAhc3RyZWFtLnNvY2tldC5kZXN0cm95ZWQpIHtcbiAgICAgIC8vXG4gICAgICAvLyBPbiBOb2RlLmpzID49IDE0LjMuMCBgcmVxdWVzdC5hYm9ydCgpYCBkb2VzIG5vdCBkZXN0cm95IHRoZSBzb2NrZXQgaWZcbiAgICAgIC8vIGNhbGxlZCBhZnRlciB0aGUgcmVxdWVzdCBjb21wbGV0ZWQuIFNlZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzE4NjkuXG4gICAgICAvL1xuICAgICAgc3RyZWFtLnNvY2tldC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0RXJyb3JBbmRDbG9zZSwgd2Vic29ja2V0LCBlcnIpO1xuICB9IGVsc2Uge1xuICAgIHN0cmVhbS5kZXN0cm95KGVycik7XG4gICAgc3RyZWFtLm9uY2UoJ2Vycm9yJywgd2Vic29ja2V0LmVtaXQuYmluZCh3ZWJzb2NrZXQsICdlcnJvcicpKTtcbiAgICBzdHJlYW0ub25jZSgnY2xvc2UnLCB3ZWJzb2NrZXQuZW1pdENsb3NlLmJpbmQod2Vic29ja2V0KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGBwaW5nKClgLCBgcG9uZygpYCwgb3IgYHNlbmQoKWAgbWV0aG9kcyBhcmUgY2FsbGVkXG4gKiB3aGVuIHRoZSBgcmVhZHlTdGF0ZWAgYXR0cmlidXRlIGlzIGBDTE9TSU5HYCBvciBgQ0xPU0VEYC5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd2Vic29ja2V0IFRoZSBXZWJTb2NrZXQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Kn0gW2RhdGFdIFRoZSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRBZnRlckNsb3NlKHdlYnNvY2tldCwgZGF0YSwgY2IpIHtcbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zdCBsZW5ndGggPSBpc0Jsb2IoZGF0YSkgPyBkYXRhLnNpemUgOiB0b0J1ZmZlcihkYXRhKS5sZW5ndGg7XG5cbiAgICAvL1xuICAgIC8vIFRoZSBgX2J1ZmZlcmVkQW1vdW50YCBwcm9wZXJ0eSBpcyB1c2VkIG9ubHkgd2hlbiB0aGUgcGVlciBpcyBhIGNsaWVudCBhbmRcbiAgICAvLyB0aGUgb3BlbmluZyBoYW5kc2hha2UgZmFpbHMuIFVuZGVyIHRoZXNlIGNpcmN1bXN0YW5jZXMsIGluIGZhY3QsIHRoZVxuICAgIC8vIGBzZXRTb2NrZXQoKWAgbWV0aG9kIGlzIG5vdCBjYWxsZWQsIHNvIHRoZSBgX3NvY2tldGAgYW5kIGBfc2VuZGVyYFxuICAgIC8vIHByb3BlcnRpZXMgYXJlIHNldCB0byBgbnVsbGAuXG4gICAgLy9cbiAgICBpZiAod2Vic29ja2V0Ll9zb2NrZXQpIHdlYnNvY2tldC5fc2VuZGVyLl9idWZmZXJlZEJ5dGVzICs9IGxlbmd0aDtcbiAgICBlbHNlIHdlYnNvY2tldC5fYnVmZmVyZWRBbW91bnQgKz0gbGVuZ3RoO1xuICB9XG5cbiAgaWYgKGNiKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgYFdlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAke3dlYnNvY2tldC5yZWFkeVN0YXRlfSBgICtcbiAgICAgICAgYCgke3JlYWR5U3RhdGVzW3dlYnNvY2tldC5yZWFkeVN0YXRlXX0pYFxuICAgICk7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYiwgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2NvbmNsdWRlJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIHN0YXR1cyBjb2RlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gcmVhc29uIFRoZSByZWFzb24gZm9yIGNsb3NpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25Db25jbHVkZShjb2RlLCByZWFzb24pIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICB3ZWJzb2NrZXQuX2Nsb3NlRnJhbWVSZWNlaXZlZCA9IHRydWU7XG4gIHdlYnNvY2tldC5fY2xvc2VNZXNzYWdlID0gcmVhc29uO1xuICB3ZWJzb2NrZXQuX2Nsb3NlQ29kZSA9IGNvZGU7XG5cbiAgaWYgKHdlYnNvY2tldC5fc29ja2V0W2tXZWJTb2NrZXRdID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICB3ZWJzb2NrZXQuX3NvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gIHByb2Nlc3MubmV4dFRpY2socmVzdW1lLCB3ZWJzb2NrZXQuX3NvY2tldCk7XG5cbiAgaWYgKGNvZGUgPT09IDEwMDUpIHdlYnNvY2tldC5jbG9zZSgpO1xuICBlbHNlIHdlYnNvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2RyYWluJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVjZWl2ZXJPbkRyYWluKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIGlmICghd2Vic29ja2V0LmlzUGF1c2VkKSB3ZWJzb2NrZXQuX3NvY2tldC5yZXN1bWUoKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFJhbmdlRXJyb3J8RXJyb3IpfSBlcnIgVGhlIGVtaXR0ZWQgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25FcnJvcihlcnIpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAod2Vic29ja2V0Ll9zb2NrZXRba1dlYlNvY2tldF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHdlYnNvY2tldC5fc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgc29ja2V0T25EYXRhKTtcblxuICAgIC8vXG4gICAgLy8gT24gTm9kZS5qcyA8IDE0LjAuMCB0aGUgYCdlcnJvcidgIGV2ZW50IGlzIGVtaXR0ZWQgc3luY2hyb25vdXNseS4gU2VlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzE5NDAuXG4gICAgLy9cbiAgICBwcm9jZXNzLm5leHRUaWNrKHJlc3VtZSwgd2Vic29ja2V0Ll9zb2NrZXQpO1xuXG4gICAgd2Vic29ja2V0LmNsb3NlKGVycltrU3RhdHVzQ29kZV0pO1xuICB9XG5cbiAgaWYgKCF3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCkge1xuICAgIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICB3ZWJzb2NrZXQuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnZmluaXNoJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVjZWl2ZXJPbkZpbmlzaCgpIHtcbiAgdGhpc1trV2ViU29ja2V0XS5lbWl0Q2xvc2UoKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdtZXNzYWdlJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ8QXJyYXlCdWZmZXJ8QnVmZmVyW10pfSBkYXRhIFRoZSBtZXNzYWdlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQmluYXJ5IFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtZXNzYWdlIGlzIGJpbmFyeSBvciBub3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25NZXNzYWdlKGRhdGEsIGlzQmluYXJ5KSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdCgnbWVzc2FnZScsIGRhdGEsIGlzQmluYXJ5KTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdwaW5nJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgaW5jbHVkZWQgaW4gdGhlIHBpbmcgZnJhbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25QaW5nKGRhdGEpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAod2Vic29ja2V0Ll9hdXRvUG9uZykgd2Vic29ja2V0LnBvbmcoZGF0YSwgIXRoaXMuX2lzU2VydmVyLCBOT09QKTtcbiAgd2Vic29ja2V0LmVtaXQoJ3BpbmcnLCBkYXRhKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdwb25nJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgaW5jbHVkZWQgaW4gdGhlIHBvbmcgZnJhbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25Qb25nKGRhdGEpIHtcbiAgdGhpc1trV2ViU29ja2V0XS5lbWl0KCdwb25nJywgZGF0YSk7XG59XG5cbi8qKlxuICogUmVzdW1lIGEgcmVhZGFibGUgc3RyZWFtXG4gKlxuICogQHBhcmFtIHtSZWFkYWJsZX0gc3RyZWFtIFRoZSByZWFkYWJsZSBzdHJlYW1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0pIHtcbiAgc3RyZWFtLnJlc3VtZSgpO1xufVxuXG4vKipcbiAqIFRoZSBgU2VuZGVyYCBlcnJvciBldmVudCBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IFRoZSBlcnJvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZGVyT25FcnJvcihlcnIpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAod2Vic29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHJldHVybjtcbiAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHNldENsb3NlVGltZXIod2Vic29ja2V0KTtcbiAgfVxuXG4gIC8vXG4gIC8vIGBzb2NrZXQuZW5kKClgIGlzIHVzZWQgaW5zdGVhZCBvZiBgc29ja2V0LmRlc3Ryb3koKWAgdG8gYWxsb3cgdGhlIG90aGVyXG4gIC8vIHBlZXIgdG8gZmluaXNoIHNlbmRpbmcgcXVldWVkIGRhdGEuIFRoZXJlIGlzIG5vIG5lZWQgdG8gc2V0IGEgdGltZXIgaGVyZVxuICAvLyBiZWNhdXNlIGBDTE9TSU5HYCBtZWFucyB0aGF0IGl0IGlzIGFscmVhZHkgc2V0IG9yIG5vdCBuZWVkZWQuXG4gIC8vXG4gIHRoaXMuX3NvY2tldC5lbmQoKTtcblxuICBpZiAoIXdlYnNvY2tldC5fZXJyb3JFbWl0dGVkKSB7XG4gICAgd2Vic29ja2V0Ll9lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgIHdlYnNvY2tldC5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYSB0aW1lciB0byBkZXN0cm95IHRoZSB1bmRlcmx5aW5nIHJhdyBzb2NrZXQgb2YgYSBXZWJTb2NrZXQuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRDbG9zZVRpbWVyKHdlYnNvY2tldCkge1xuICB3ZWJzb2NrZXQuX2Nsb3NlVGltZXIgPSBzZXRUaW1lb3V0KFxuICAgIHdlYnNvY2tldC5fc29ja2V0LmRlc3Ryb3kuYmluZCh3ZWJzb2NrZXQuX3NvY2tldCksXG4gICAgd2Vic29ja2V0Ll9jbG9zZVRpbWVvdXRcbiAgKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2Nsb3NlJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc29ja2V0T25DbG9zZSgpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIHNvY2tldE9uQ2xvc2UpO1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgc29ja2V0T25EYXRhKTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZW5kJywgc29ja2V0T25FbmQpO1xuXG4gIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuXG4gIC8vXG4gIC8vIFRoZSBjbG9zZSBmcmFtZSBtaWdodCBub3QgaGF2ZSBiZWVuIHJlY2VpdmVkIG9yIHRoZSBgJ2VuZCdgIGV2ZW50IGVtaXR0ZWQsXG4gIC8vIGZvciBleGFtcGxlLCBpZiB0aGUgc29ja2V0IHdhcyBkZXN0cm95ZWQgZHVlIHRvIGFuIGVycm9yLiBFbnN1cmUgdGhhdCB0aGVcbiAgLy8gYHJlY2VpdmVyYCBzdHJlYW0gaXMgY2xvc2VkIGFmdGVyIHdyaXRpbmcgYW55IHJlbWFpbmluZyBidWZmZXJlZCBkYXRhIHRvXG4gIC8vIGl0LiBJZiB0aGUgcmVhZGFibGUgc2lkZSBvZiB0aGUgc29ja2V0IGlzIGluIGZsb3dpbmcgbW9kZSB0aGVuIHRoZXJlIGlzIG5vXG4gIC8vIGJ1ZmZlcmVkIGRhdGEgYXMgZXZlcnl0aGluZyBoYXMgYmVlbiBhbHJlYWR5IHdyaXR0ZW4uIElmIGluc3RlYWQsIHRoZVxuICAvLyBzb2NrZXQgaXMgcGF1c2VkLCBhbnkgcG9zc2libGUgYnVmZmVyZWQgZGF0YSB3aWxsIGJlIHJlYWQgYXMgYSBzaW5nbGVcbiAgLy8gY2h1bmsuXG4gIC8vXG4gIGlmIChcbiAgICAhdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkICYmXG4gICAgIXdlYnNvY2tldC5fY2xvc2VGcmFtZVJlY2VpdmVkICYmXG4gICAgIXdlYnNvY2tldC5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkICYmXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5sZW5ndGggIT09IDBcbiAgKSB7XG4gICAgY29uc3QgY2h1bmsgPSB0aGlzLnJlYWQodGhpcy5fcmVhZGFibGVTdGF0ZS5sZW5ndGgpO1xuXG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci53cml0ZShjaHVuayk7XG4gIH1cblxuICB3ZWJzb2NrZXQuX3JlY2VpdmVyLmVuZCgpO1xuXG4gIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG5cbiAgY2xlYXJUaW1lb3V0KHdlYnNvY2tldC5fY2xvc2VUaW1lcik7XG5cbiAgaWYgKFxuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQgfHxcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZFxuICApIHtcbiAgICB3ZWJzb2NrZXQuZW1pdENsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5vbignZXJyb3InLCByZWNlaXZlck9uRmluaXNoKTtcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLm9uKCdmaW5pc2gnLCByZWNlaXZlck9uRmluaXNoKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZGF0YSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBjaHVuayBBIGNodW5rIG9mIGRhdGFcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRGF0YShjaHVuaykge1xuICBpZiAoIXRoaXNba1dlYlNvY2tldF0uX3JlY2VpdmVyLndyaXRlKGNodW5rKSkge1xuICAgIHRoaXMucGF1c2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZW5kJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc29ja2V0T25FbmQoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gIHdlYnNvY2tldC5fcmVjZWl2ZXIuZW5kKCk7XG4gIHRoaXMuZW5kKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBzb2NrZXQgYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRXJyb3IoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBzb2NrZXRPbkVycm9yKTtcbiAgdGhpcy5vbignZXJyb3InLCBOT09QKTtcblxuICBpZiAod2Vic29ja2V0KSB7XG4gICAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5XZWJTb2NrZXQkXCIgfV0gKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgV2ViU29ja2V0ID0gcmVxdWlyZSgnLi93ZWJzb2NrZXQnKTtcbmNvbnN0IHsgRHVwbGV4IH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcblxuLyoqXG4gKiBFbWl0cyB0aGUgYCdjbG9zZSdgIGV2ZW50IG9uIGEgc3RyZWFtLlxuICpcbiAqIEBwYXJhbSB7RHVwbGV4fSBzdHJlYW0gVGhlIHN0cmVhbS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVtaXRDbG9zZShzdHJlYW0pIHtcbiAgc3RyZWFtLmVtaXQoJ2Nsb3NlJyk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgJ2VuZCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGR1cGxleE9uRW5kKCkge1xuICBpZiAoIXRoaXMuZGVzdHJveWVkICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGR1cGxleE9uRXJyb3IoZXJyKSB7XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZHVwbGV4T25FcnJvcik7XG4gIHRoaXMuZGVzdHJveSgpO1xuICBpZiAodGhpcy5saXN0ZW5lckNvdW50KCdlcnJvcicpID09PSAwKSB7XG4gICAgLy8gRG8gbm90IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvci5cbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFdyYXBzIGEgYFdlYlNvY2tldGAgaW4gYSBkdXBsZXggc3RyZWFtLlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3cyBUaGUgYFdlYlNvY2tldGAgdG8gd3JhcFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBmb3IgdGhlIGBEdXBsZXhgIGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJuIHtEdXBsZXh9IFRoZSBkdXBsZXggc3RyZWFtXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVdlYlNvY2tldFN0cmVhbSh3cywgb3B0aW9ucykge1xuICBsZXQgdGVybWluYXRlT25EZXN0cm95ID0gdHJ1ZTtcblxuICBjb25zdCBkdXBsZXggPSBuZXcgRHVwbGV4KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGF1dG9EZXN0cm95OiBmYWxzZSxcbiAgICBlbWl0Q2xvc2U6IGZhbHNlLFxuICAgIG9iamVjdE1vZGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlT2JqZWN0TW9kZTogZmFsc2VcbiAgfSk7XG5cbiAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBtZXNzYWdlKG1zZywgaXNCaW5hcnkpIHtcbiAgICBjb25zdCBkYXRhID1cbiAgICAgICFpc0JpbmFyeSAmJiBkdXBsZXguX3JlYWRhYmxlU3RhdGUub2JqZWN0TW9kZSA/IG1zZy50b1N0cmluZygpIDogbXNnO1xuXG4gICAgaWYgKCFkdXBsZXgucHVzaChkYXRhKSkgd3MucGF1c2UoKTtcbiAgfSk7XG5cbiAgd3Mub25jZSgnZXJyb3InLCBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICBpZiAoZHVwbGV4LmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgLy8gUHJldmVudCBgd3MudGVybWluYXRlKClgIGZyb20gYmVpbmcgY2FsbGVkIGJ5IGBkdXBsZXguX2Rlc3Ryb3koKWAuXG4gICAgLy9cbiAgICAvLyAtIElmIHRoZSBgJ2Vycm9yJ2AgZXZlbnQgaXMgZW1pdHRlZCBiZWZvcmUgdGhlIGAnb3BlbidgIGV2ZW50LCB0aGVuXG4gICAgLy8gICBgd3MudGVybWluYXRlKClgIGlzIGEgbm9vcCBhcyBubyBzb2NrZXQgaXMgYXNzaWduZWQuXG4gICAgLy8gLSBPdGhlcndpc2UsIHRoZSBlcnJvciBpcyByZS1lbWl0dGVkIGJ5IHRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlcnJvcidgXG4gICAgLy8gICBldmVudCBvZiB0aGUgYFJlY2VpdmVyYCBvYmplY3QuIFRoZSBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlcyB0aGVcbiAgICAvLyAgIGNvbm5lY3Rpb24gYnkgY2FsbGluZyBgd3MuY2xvc2UoKWAuIFRoaXMgYWxsb3dzIGEgY2xvc2UgZnJhbWUgdG8gYmVcbiAgICAvLyAgIHNlbnQgdG8gdGhlIG90aGVyIHBlZXIuIElmIGB3cy50ZXJtaW5hdGUoKWAgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoaXMsXG4gICAgLy8gICB0aGVuIHRoZSBjbG9zZSBmcmFtZSBtaWdodCBub3QgYmUgc2VudC5cbiAgICB0ZXJtaW5hdGVPbkRlc3Ryb3kgPSBmYWxzZTtcbiAgICBkdXBsZXguZGVzdHJveShlcnIpO1xuICB9KTtcblxuICB3cy5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChkdXBsZXguZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICBkdXBsZXgucHVzaChudWxsKTtcbiAgfSk7XG5cbiAgZHVwbGV4Ll9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2FsbGJhY2spIHtcbiAgICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gd3MuQ0xPU0VEKSB7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIGR1cGxleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuXG4gICAgd3Mub25jZSgnZXJyb3InLCBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuXG4gICAgd3Mub25jZSgnY2xvc2UnLCBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIGlmICghY2FsbGVkKSBjYWxsYmFjayhlcnIpO1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIGR1cGxleCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybWluYXRlT25EZXN0cm95KSB3cy50ZXJtaW5hdGUoKTtcbiAgfTtcblxuICBkdXBsZXguX2ZpbmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNPTk5FQ1RJTkcpIHtcbiAgICAgIHdzLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBkdXBsZXguX2ZpbmFsKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgYF9zb2NrZXRgIHByb3BlcnR5IGlzIGBudWxsYCBpdCBtZWFucyB0aGF0IGB3c2AgaXMgYVxuICAgIC8vIGNsaWVudCB3ZWJzb2NrZXQgYW5kIHRoZSBoYW5kc2hha2UgZmFpbGVkLiBJbiBmYWN0LCB3aGVuIHRoaXMgaGFwcGVucywgYVxuICAgIC8vIHNvY2tldCBpcyBuZXZlciBhc3NpZ25lZCB0byB0aGUgd2Vic29ja2V0LiBXYWl0IGZvciB0aGUgYCdlcnJvcidgIGV2ZW50XG4gICAgLy8gdGhhdCB3aWxsIGJlIGVtaXR0ZWQgYnkgdGhlIHdlYnNvY2tldC5cbiAgICBpZiAod3MuX3NvY2tldCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKHdzLl9zb2NrZXQuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICBpZiAoZHVwbGV4Ll9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQpIGR1cGxleC5kZXN0cm95KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdzLl9zb2NrZXQub25jZSgnZmluaXNoJywgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICAvLyBgZHVwbGV4YCBpcyBub3QgZGVzdHJveWVkIGhlcmUgYmVjYXVzZSB0aGUgYCdlbmQnYCBldmVudCB3aWxsIGJlXG4gICAgICAgIC8vIGVtaXR0ZWQgb24gYGR1cGxleGAgYWZ0ZXIgdGhpcyBgJ2ZpbmlzaCdgIGV2ZW50LiBUaGUgRU9GIHNpZ25hbGluZ1xuICAgICAgICAvLyBgbnVsbGAgY2h1bmsgaXMsIGluIGZhY3QsIHB1c2hlZCB3aGVuIHRoZSB3ZWJzb2NrZXQgZW1pdHMgYCdjbG9zZSdgLlxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgICB3cy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBkdXBsZXguX3JlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdzLmlzUGF1c2VkKSB3cy5yZXN1bWUoKTtcbiAgfTtcblxuICBkdXBsZXguX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gd3MuQ09OTkVDVElORykge1xuICAgICAgd3Mub25jZSgnb3BlbicsIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIGR1cGxleC5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cy5zZW5kKGNodW5rLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgZHVwbGV4Lm9uKCdlbmQnLCBkdXBsZXhPbkVuZCk7XG4gIGR1cGxleC5vbignZXJyb3InLCBkdXBsZXhPbkVycm9yKTtcbiAgcmV0dXJuIGR1cGxleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVXZWJTb2NrZXRTdHJlYW07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IHRva2VuQ2hhcnMgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYFNlYy1XZWJTb2NrZXQtUHJvdG9jb2xgIGhlYWRlciBpbnRvIGEgc2V0IG9mIHN1YnByb3RvY29sIG5hbWVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXIgVGhlIGZpZWxkIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm4ge1NldH0gVGhlIHN1YnByb3RvY29sIG5hbWVzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGhlYWRlcikge1xuICBjb25zdCBwcm90b2NvbHMgPSBuZXcgU2V0KCk7XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGk7IGkgPCBoZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2RlID0gaGVhZGVyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoZW5kID09PSAtMSAmJiB0b2tlbkNoYXJzW2NvZGVdID09PSAxKSB7XG4gICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGkgIT09IDAgJiZcbiAgICAgIChjb2RlID09PSAweDIwIC8qICcgJyAqLyB8fCBjb2RlID09PSAweDA5KSAvKiAnXFx0JyAqL1xuICAgICkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgc3RhcnQgIT09IC0xKSBlbmQgPSBpO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyYyAvKiAnLCcgKi8pIHtcbiAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuXG4gICAgICBjb25zdCBwcm90b2NvbCA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcblxuICAgICAgaWYgKHByb3RvY29scy5oYXMocHJvdG9jb2wpKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIFwiJHtwcm90b2NvbH1cIiBzdWJwcm90b2NvbCBpcyBkdXBsaWNhdGVkYCk7XG4gICAgICB9XG5cbiAgICAgIHByb3RvY29scy5hZGQocHJvdG9jb2wpO1xuICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSAtMSB8fCBlbmQgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dCcpO1xuICB9XG5cbiAgY29uc3QgcHJvdG9jb2wgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGkpO1xuXG4gIGlmIChwcm90b2NvbHMuaGFzKHByb3RvY29sKSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIFwiJHtwcm90b2NvbH1cIiBzdWJwcm90b2NvbCBpcyBkdXBsaWNhdGVkYCk7XG4gIH1cblxuICBwcm90b2NvbHMuYWRkKHByb3RvY29sKTtcbiAgcmV0dXJuIHByb3RvY29scztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlIH07XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeRHVwbGV4JFwiLCBcImNhdWdodEVycm9yc1wiOiBcIm5vbmVcIiB9XSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IHsgRHVwbGV4IH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgY3JlYXRlSGFzaCB9ID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbmNvbnN0IGV4dGVuc2lvbiA9IHJlcXVpcmUoJy4vZXh0ZW5zaW9uJyk7XG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCBzdWJwcm90b2NvbCA9IHJlcXVpcmUoJy4vc3VicHJvdG9jb2wnKTtcbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5jb25zdCB7IENMT1NFX1RJTUVPVVQsIEdVSUQsIGtXZWJTb2NrZXQgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IGtleVJlZ2V4ID0gL15bKy8wLTlBLVphLXpdezIyfT09JC87XG5cbmNvbnN0IFJVTk5JTkcgPSAwO1xuY29uc3QgQ0xPU0lORyA9IDE7XG5jb25zdCBDTE9TRUQgPSAyO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldCBzZXJ2ZXIuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIFdlYlNvY2tldFNlcnZlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBgV2ViU29ja2V0U2VydmVyYCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cz10cnVlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvUG9uZz10cnVlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIGF1dG9tYXRpY2FsbHkgc2VuZCBhIHBvbmcgaW4gcmVzcG9uc2UgdG8gYSBwaW5nXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5iYWNrbG9nPTUxMV0gVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBxdWV1ZSBvZlxuICAgKiAgICAgcGVuZGluZyBjb25uZWN0aW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNsaWVudFRyYWNraW5nPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0b1xuICAgKiAgICAgdHJhY2sgY2xpZW50c1xuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xvc2VUaW1lb3V0PTMwMDAwXSBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG9cbiAgICogICAgIHdhaXQgZm9yIHRoZSBjbG9zaW5nIGhhbmRzaGFrZSB0byBmaW5pc2ggYWZ0ZXIgYHdlYnNvY2tldC5jbG9zZSgpYCBpc1xuICAgKiAgICAgY2FsbGVkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmhhbmRsZVByb3RvY29sc10gQSBob29rIHRvIGhhbmRsZSBwcm90b2NvbHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmhvc3RdIFRoZSBob3N0bmFtZSB3aGVyZSB0byBiaW5kIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MTA0ODU3NjAwXSBUaGUgbWF4aW11bSBhbGxvd2VkIG1lc3NhZ2VcbiAgICogICAgIHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ub1NlcnZlcj1mYWxzZV0gRW5hYmxlIG5vIHNlcnZlciBtb2RlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wYXRoXSBBY2NlcHQgb25seSBjb25uZWN0aW9ucyBtYXRjaGluZyB0aGlzIHBhdGhcbiAgICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBbb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZT1mYWxzZV0gRW5hYmxlL2Rpc2FibGVcbiAgICogICAgIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucG9ydF0gVGhlIHBvcnQgd2hlcmUgdG8gYmluZCB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7KGh0dHAuU2VydmVyfGh0dHBzLlNlcnZlcil9IFtvcHRpb25zLnNlcnZlcl0gQSBwcmUtY3JlYXRlZCBIVFRQL1NcbiAgICogICAgIHNlcnZlciB0byB1c2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52ZXJpZnlDbGllbnRdIEEgaG9vayB0byByZWplY3QgY29ubmVjdGlvbnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuV2ViU29ja2V0PVdlYlNvY2tldF0gU3BlY2lmaWVzIHRoZSBgV2ViU29ja2V0YFxuICAgKiAgICAgY2xhc3MgdG8gdXNlLiBJdCBtdXN0IGJlIHRoZSBgV2ViU29ja2V0YCBjbGFzcyBvciBjbGFzcyB0aGF0IGV4dGVuZHMgaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSBBIGxpc3RlbmVyIGZvciB0aGUgYGxpc3RlbmluZ2AgZXZlbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiB0cnVlLFxuICAgICAgYXV0b1Bvbmc6IHRydWUsXG4gICAgICBtYXhQYXlsb2FkOiAxMDAgKiAxMDI0ICogMTAyNCxcbiAgICAgIHNraXBVVEY4VmFsaWRhdGlvbjogZmFsc2UsXG4gICAgICBwZXJNZXNzYWdlRGVmbGF0ZTogZmFsc2UsXG4gICAgICBoYW5kbGVQcm90b2NvbHM6IG51bGwsXG4gICAgICBjbGllbnRUcmFja2luZzogdHJ1ZSxcbiAgICAgIGNsb3NlVGltZW91dDogQ0xPU0VfVElNRU9VVCxcbiAgICAgIHZlcmlmeUNsaWVudDogbnVsbCxcbiAgICAgIG5vU2VydmVyOiBmYWxzZSxcbiAgICAgIGJhY2tsb2c6IG51bGwsIC8vIHVzZSBkZWZhdWx0ICg1MTEgYXMgaW1wbGVtZW50ZWQgaW4gbmV0LmpzKVxuICAgICAgc2VydmVyOiBudWxsLFxuICAgICAgaG9zdDogbnVsbCxcbiAgICAgIHBhdGg6IG51bGwsXG4gICAgICBwb3J0OiBudWxsLFxuICAgICAgV2ViU29ja2V0LFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICAob3B0aW9ucy5wb3J0ID09IG51bGwgJiYgIW9wdGlvbnMuc2VydmVyICYmICFvcHRpb25zLm5vU2VydmVyKSB8fFxuICAgICAgKG9wdGlvbnMucG9ydCAhPSBudWxsICYmIChvcHRpb25zLnNlcnZlciB8fCBvcHRpb25zLm5vU2VydmVyKSkgfHxcbiAgICAgIChvcHRpb25zLnNlcnZlciAmJiBvcHRpb25zLm5vU2VydmVyKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ09uZSBhbmQgb25seSBvbmUgb2YgdGhlIFwicG9ydFwiLCBcInNlcnZlclwiLCBvciBcIm5vU2VydmVyXCIgb3B0aW9ucyAnICtcbiAgICAgICAgICAnbXVzdCBiZSBzcGVjaWZpZWQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBvcnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBodHRwLlNUQVRVU19DT0RFU1s0MjZdO1xuXG4gICAgICAgIHJlcy53cml0ZUhlYWQoNDI2LCB7XG4gICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogYm9keS5sZW5ndGgsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmVuZChib2R5KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc2VydmVyLmxpc3RlbihcbiAgICAgICAgb3B0aW9ucy5wb3J0LFxuICAgICAgICBvcHRpb25zLmhvc3QsXG4gICAgICAgIG9wdGlvbnMuYmFja2xvZyxcbiAgICAgICAgY2FsbGJhY2tcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlcnZlcikge1xuICAgICAgdGhpcy5fc2VydmVyID0gb3B0aW9ucy5zZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NlcnZlcikge1xuICAgICAgY29uc3QgZW1pdENvbm5lY3Rpb24gPSB0aGlzLmVtaXQuYmluZCh0aGlzLCAnY29ubmVjdGlvbicpO1xuXG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMgPSBhZGRMaXN0ZW5lcnModGhpcy5fc2VydmVyLCB7XG4gICAgICAgIGxpc3RlbmluZzogdGhpcy5lbWl0LmJpbmQodGhpcywgJ2xpc3RlbmluZycpLFxuICAgICAgICBlcnJvcjogdGhpcy5lbWl0LmJpbmQodGhpcywgJ2Vycm9yJyksXG4gICAgICAgIHVwZ3JhZGU6IChyZXEsIHNvY2tldCwgaGVhZCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXBncmFkZShyZXEsIHNvY2tldCwgaGVhZCwgZW1pdENvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSA9PT0gdHJ1ZSkgb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSA9IHt9O1xuICAgIGlmIChvcHRpb25zLmNsaWVudFRyYWNraW5nKSB7XG4gICAgICB0aGlzLmNsaWVudHMgPSBuZXcgU2V0KCk7XG4gICAgICB0aGlzLl9zaG91bGRFbWl0Q2xvc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX3N0YXRlID0gUlVOTklORztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZCBhZGRyZXNzLCB0aGUgYWRkcmVzcyBmYW1pbHkgbmFtZSwgYW5kIHBvcnQgb2YgdGhlIHNlcnZlclxuICAgKiBhcyByZXBvcnRlZCBieSB0aGUgb3BlcmF0aW5nIHN5c3RlbSBpZiBsaXN0ZW5pbmcgb24gYW4gSVAgc29ja2V0LlxuICAgKiBJZiB0aGUgc2VydmVyIGlzIGxpc3RlbmluZyBvbiBhIHBpcGUgb3IgVU5JWCBkb21haW4gc29ja2V0LCB0aGUgbmFtZSBpc1xuICAgKiByZXR1cm5lZCBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogQHJldHVybiB7KE9iamVjdHxTdHJpbmd8bnVsbCl9IFRoZSBhZGRyZXNzIG9mIHRoZSBzZXJ2ZXJcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm5vU2VydmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzZXJ2ZXIgaXMgb3BlcmF0aW5nIGluIFwibm9TZXJ2ZXJcIiBtb2RlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9zZXJ2ZXIpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXIuYWRkcmVzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHNlcnZlciBmcm9tIGFjY2VwdGluZyBuZXcgY29ubmVjdGlvbnMgYW5kIGVtaXQgdGhlIGAnY2xvc2UnYCBldmVudFxuICAgKiB3aGVuIGFsbCBleGlzdGluZyBjb25uZWN0aW9ucyBhcmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIEEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIHRoZSBgJ2Nsb3NlJ2AgZXZlbnRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xvc2UoY2IpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHRoaXMub25jZSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2IobmV3IEVycm9yKCdUaGUgc2VydmVyIGlzIG5vdCBydW5uaW5nJykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjYikgdGhpcy5vbmNlKCdjbG9zZScsIGNiKTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gQ0xPU0lORykgcmV0dXJuO1xuICAgIHRoaXMuX3N0YXRlID0gQ0xPU0lORztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubm9TZXJ2ZXIgfHwgdGhpcy5vcHRpb25zLnNlcnZlcikge1xuICAgICAgaWYgKHRoaXMuX3NlcnZlcikge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzID0gdGhpcy5fc2VydmVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpZW50cykge1xuICAgICAgICBpZiAoIXRoaXMuY2xpZW50cy5zaXplKSB7XG4gICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Nob3VsZEVtaXRDbG9zZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VydmVyID0gdGhpcy5fc2VydmVyO1xuXG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycyA9IHRoaXMuX3NlcnZlciA9IG51bGw7XG5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSFRUUC9TIHNlcnZlciB3YXMgY3JlYXRlZCBpbnRlcm5hbGx5LiBDbG9zZSBpdCwgYW5kIHJlbHkgb24gaXRzXG4gICAgICAvLyBgJ2Nsb3NlJ2AgZXZlbnQuXG4gICAgICAvL1xuICAgICAgc2VydmVyLmNsb3NlKCgpID0+IHtcbiAgICAgICAgZW1pdENsb3NlKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlZSBpZiBhIGdpdmVuIHJlcXVlc3Qgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhpcyBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7aHR0cC5JbmNvbWluZ01lc3NhZ2V9IHJlcSBSZXF1ZXN0IG9iamVjdCB0byBpbnNwZWN0XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcmVxdWVzdCBpcyB2YWxpZCwgZWxzZSBgZmFsc2VgXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNob3VsZEhhbmRsZShyZXEpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnBhdGgpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmVxLnVybC5pbmRleE9mKCc/Jyk7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGluZGV4ICE9PSAtMSA/IHJlcS51cmwuc2xpY2UoMCwgaW5kZXgpIDogcmVxLnVybDtcblxuICAgICAgaWYgKHBhdGhuYW1lICE9PSB0aGlzLm9wdGlvbnMucGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIEhUVFAgVXBncmFkZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBoYW5kbGVVcGdyYWRlKHJlcSwgc29ja2V0LCBoZWFkLCBjYikge1xuICAgIHNvY2tldC5vbignZXJyb3InLCBzb2NrZXRPbkVycm9yKTtcblxuICAgIGNvbnN0IGtleSA9IHJlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWtleSddO1xuICAgIGNvbnN0IHVwZ3JhZGUgPSByZXEuaGVhZGVycy51cGdyYWRlO1xuICAgIGNvbnN0IHZlcnNpb24gPSArcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtdmVyc2lvbiddO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgSFRUUCBtZXRob2QnO1xuICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDUsIG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cGdyYWRlID09PSB1bmRlZmluZWQgfHwgdXBncmFkZS50b0xvd2VyQ2FzZSgpICE9PSAnd2Vic29ja2V0Jykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFVwZ3JhZGUgaGVhZGVyJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgIWtleVJlZ2V4LnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdNaXNzaW5nIG9yIGludmFsaWQgU2VjLVdlYlNvY2tldC1LZXkgaGVhZGVyJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAhPT0gMTMgJiYgdmVyc2lvbiAhPT0gOCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdNaXNzaW5nIG9yIGludmFsaWQgU2VjLVdlYlNvY2tldC1WZXJzaW9uIGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSwge1xuICAgICAgICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogJzEzLCA4J1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZEhhbmRsZShyZXEpKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDQwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjV2ViU29ja2V0UHJvdG9jb2wgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1wcm90b2NvbCddO1xuICAgIGxldCBwcm90b2NvbHMgPSBuZXcgU2V0KCk7XG5cbiAgICBpZiAoc2VjV2ViU29ja2V0UHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvdG9jb2xzID0gc3VicHJvdG9jb2wucGFyc2Uoc2VjV2ViU29ja2V0UHJvdG9jb2wpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBTZWMtV2ViU29ja2V0LVByb3RvY29sIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlY1dlYlNvY2tldEV4dGVuc2lvbnMgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1leHRlbnNpb25zJ107XG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlICYmXG4gICAgICBzZWNXZWJTb2NrZXRFeHRlbnNpb25zICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gbmV3IFBlck1lc3NhZ2VEZWZsYXRlKHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgICAgICBpc1NlcnZlcjogdHJ1ZSxcbiAgICAgICAgbWF4UGF5bG9hZDogdGhpcy5vcHRpb25zLm1heFBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBvZmZlcnMgPSBleHRlbnNpb24ucGFyc2Uoc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyk7XG5cbiAgICAgICAgaWYgKG9mZmVyc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlLmFjY2VwdChvZmZlcnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pO1xuICAgICAgICAgIGV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0gPSBwZXJNZXNzYWdlRGVmbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgICdJbnZhbGlkIG9yIHVuYWNjZXB0YWJsZSBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDAsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBPcHRpb25hbGx5IGNhbGwgZXh0ZXJuYWwgY2xpZW50IHZlcmlmaWNhdGlvbiBoYW5kbGVyLlxuICAgIC8vXG4gICAgaWYgKHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQpIHtcbiAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgIG9yaWdpbjpcbiAgICAgICAgICByZXEuaGVhZGVyc1tgJHt2ZXJzaW9uID09PSA4ID8gJ3NlYy13ZWJzb2NrZXQtb3JpZ2luJyA6ICdvcmlnaW4nfWBdLFxuICAgICAgICBzZWN1cmU6ICEhKHJlcS5zb2NrZXQuYXV0aG9yaXplZCB8fCByZXEuc29ja2V0LmVuY3J5cHRlZCksXG4gICAgICAgIHJlcVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoaW5mbywgKHZlcmlmaWVkLCBjb2RlLCBtZXNzYWdlLCBoZWFkZXJzKSA9PiB7XG4gICAgICAgICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSB8fCA0MDEsIG1lc3NhZ2UsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY29tcGxldGVVcGdyYWRlKFxuICAgICAgICAgICAgZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHByb3RvY29scyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgIGhlYWQsXG4gICAgICAgICAgICBjYlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnZlcmlmeUNsaWVudChpbmZvKSkgcmV0dXJuIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgNDAxKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBsZXRlVXBncmFkZShleHRlbnNpb25zLCBrZXksIHByb3RvY29scywgcmVxLCBzb2NrZXQsIGhlYWQsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlIHRoZSBjb25uZWN0aW9uIHRvIFdlYlNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnMgVGhlIGFjY2VwdGVkIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgdmFsdWUgb2YgdGhlIGBTZWMtV2ViU29ja2V0LUtleWAgaGVhZGVyXG4gICAqIEBwYXJhbSB7U2V0fSBwcm90b2NvbHMgVGhlIHN1YnByb3RvY29sc1xuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgY2FsbGVkIG1vcmUgdGhhbiBvbmNlIHdpdGggdGhlIHNhbWUgc29ja2V0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb21wbGV0ZVVwZ3JhZGUoZXh0ZW5zaW9ucywga2V5LCBwcm90b2NvbHMsIHJlcSwgc29ja2V0LCBoZWFkLCBjYikge1xuICAgIC8vXG4gICAgLy8gRGVzdHJveSB0aGUgc29ja2V0IGlmIHRoZSBjbGllbnQgaGFzIGFscmVhZHkgc2VudCBhIEZJTiBwYWNrZXQuXG4gICAgLy9cbiAgICBpZiAoIXNvY2tldC5yZWFkYWJsZSB8fCAhc29ja2V0LndyaXRhYmxlKSByZXR1cm4gc29ja2V0LmRlc3Ryb3koKTtcblxuICAgIGlmIChzb2NrZXRba1dlYlNvY2tldF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3NlcnZlci5oYW5kbGVVcGdyYWRlKCkgd2FzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB3aXRoIHRoZSBzYW1lICcgK1xuICAgICAgICAgICdzb2NrZXQsIHBvc3NpYmx5IGR1ZSB0byBhIG1pc2NvbmZpZ3VyYXRpb24nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdGF0ZSA+IFJVTk5JTkcpIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDUwMyk7XG5cbiAgICBjb25zdCBkaWdlc3QgPSBjcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUoa2V5ICsgR1VJRClcbiAgICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICdIVFRQLzEuMSAxMDEgU3dpdGNoaW5nIFByb3RvY29scycsXG4gICAgICAnVXBncmFkZTogd2Vic29ja2V0JyxcbiAgICAgICdDb25uZWN0aW9uOiBVcGdyYWRlJyxcbiAgICAgIGBTZWMtV2ViU29ja2V0LUFjY2VwdDogJHtkaWdlc3R9YFxuICAgIF07XG5cbiAgICBjb25zdCB3cyA9IG5ldyB0aGlzLm9wdGlvbnMuV2ViU29ja2V0KG51bGwsIHVuZGVmaW5lZCwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChwcm90b2NvbHMuc2l6ZSkge1xuICAgICAgLy9cbiAgICAgIC8vIE9wdGlvbmFsbHkgY2FsbCBleHRlcm5hbCBwcm90b2NvbCBzZWxlY3Rpb24gaGFuZGxlci5cbiAgICAgIC8vXG4gICAgICBjb25zdCBwcm90b2NvbCA9IHRoaXMub3B0aW9ucy5oYW5kbGVQcm90b2NvbHNcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzKHByb3RvY29scywgcmVxKVxuICAgICAgICA6IHByb3RvY29scy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cbiAgICAgIGlmIChwcm90b2NvbCkge1xuICAgICAgICBoZWFkZXJzLnB1c2goYFNlYy1XZWJTb2NrZXQtUHJvdG9jb2w6ICR7cHJvdG9jb2x9YCk7XG4gICAgICAgIHdzLl9wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdLnBhcmFtcztcbiAgICAgIGNvbnN0IHZhbHVlID0gZXh0ZW5zaW9uLmZvcm1hdCh7XG4gICAgICAgIFtQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTogW3BhcmFtc11cbiAgICAgIH0pO1xuICAgICAgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnM6ICR7dmFsdWV9YCk7XG4gICAgICB3cy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBBbGxvdyBleHRlcm5hbCBtb2RpZmljYXRpb24vaW5zcGVjdGlvbiBvZiBoYW5kc2hha2UgaGVhZGVycy5cbiAgICAvL1xuICAgIHRoaXMuZW1pdCgnaGVhZGVycycsIGhlYWRlcnMsIHJlcSk7XG5cbiAgICBzb2NrZXQud3JpdGUoaGVhZGVycy5jb25jYXQoJ1xcclxcbicpLmpvaW4oJ1xcclxcbicpKTtcbiAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICB3cy5zZXRTb2NrZXQoc29ja2V0LCBoZWFkLCB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiB0aGlzLm9wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cyxcbiAgICAgIG1heFBheWxvYWQ6IHRoaXMub3B0aW9ucy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiB0aGlzLm9wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jbGllbnRzKSB7XG4gICAgICB0aGlzLmNsaWVudHMuYWRkKHdzKTtcbiAgICAgIHdzLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbGllbnRzLmRlbGV0ZSh3cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZEVtaXRDbG9zZSAmJiAhdGhpcy5jbGllbnRzLnNpemUpIHtcbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRDbG9zZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNiKHdzLCByZXEpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0U2VydmVyO1xuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lcnMgb24gYW4gYEV2ZW50RW1pdHRlcmAgdXNpbmcgYSBtYXAgb2YgPGV2ZW50LCBsaXN0ZW5lcj5cbiAqIHBhaXJzLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBzZXJ2ZXIgVGhlIGV2ZW50IGVtaXR0ZXJcbiAqIEBwYXJhbSB7T2JqZWN0LjxTdHJpbmcsIEZ1bmN0aW9uPn0gbWFwIFRoZSBsaXN0ZW5lcnMgdG8gYWRkXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBhZGRlZCBsaXN0ZW5lcnMgd2hlblxuICogICAgIGNhbGxlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKHNlcnZlciwgbWFwKSB7XG4gIGZvciAoY29uc3QgZXZlbnQgb2YgT2JqZWN0LmtleXMobWFwKSkgc2VydmVyLm9uKGV2ZW50LCBtYXBbZXZlbnRdKTtcblxuICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgT2JqZWN0LmtleXMobWFwKSkge1xuICAgICAgc2VydmVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBtYXBbZXZlbnRdKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogRW1pdCBhIGAnY2xvc2UnYCBldmVudCBvbiBhbiBgRXZlbnRFbWl0dGVyYC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gc2VydmVyIFRoZSBldmVudCBlbWl0dGVyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0Q2xvc2Uoc2VydmVyKSB7XG4gIHNlcnZlci5fc3RhdGUgPSBDTE9TRUQ7XG4gIHNlcnZlci5lbWl0KCdjbG9zZScpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBzb2NrZXQgZXJyb3JzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRXJyb3IoKSB7XG4gIHRoaXMuZGVzdHJveSgpO1xufVxuXG4vKipcbiAqIENsb3NlIHRoZSBjb25uZWN0aW9uIHdoZW4gcHJlY29uZGl0aW9ucyBhcmUgbm90IGZ1bGZpbGxlZC5cbiAqXG4gKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBzb2NrZXQgb2YgdGhlIHVwZ3JhZGUgcmVxdWVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWVzc2FnZV0gVGhlIEhUVFAgcmVzcG9uc2UgYm9keVxuICogQHBhcmFtIHtPYmplY3R9IFtoZWFkZXJzXSBBZGRpdGlvbmFsIEhUVFAgcmVzcG9uc2UgaGVhZGVyc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2Uoc29ja2V0LCBjb2RlLCBtZXNzYWdlLCBoZWFkZXJzKSB7XG4gIC8vXG4gIC8vIFRoZSBzb2NrZXQgaXMgd3JpdGFibGUgdW5sZXNzIHRoZSB1c2VyIGRlc3Ryb3llZCBvciBlbmRlZCBpdCBiZWZvcmUgY2FsbGluZ1xuICAvLyBgc2VydmVyLmhhbmRsZVVwZ3JhZGUoKWAgb3IgaW4gdGhlIGB2ZXJpZnlDbGllbnRgIGZ1bmN0aW9uLCB3aGljaCBpcyBhIHVzZXJcbiAgLy8gZXJyb3IuIEhhbmRsaW5nIHRoaXMgZG9lcyBub3QgbWFrZSBtdWNoIHNlbnNlIGFzIHRoZSB3b3JzdCB0aGF0IGNhbiBoYXBwZW5cbiAgLy8gaXMgdGhhdCBzb21lIG9mIHRoZSBkYXRhIHdyaXR0ZW4gYnkgdGhlIHVzZXIgbWlnaHQgYmUgZGlzY2FyZGVkIGR1ZSB0byB0aGVcbiAgLy8gY2FsbCB0byBgc29ja2V0LmVuZCgpYCBiZWxvdywgd2hpY2ggdHJpZ2dlcnMgYW4gYCdlcnJvcidgIGV2ZW50IHRoYXQgaW5cbiAgLy8gdHVybiBjYXVzZXMgdGhlIHNvY2tldCB0byBiZSBkZXN0cm95ZWQuXG4gIC8vXG4gIG1lc3NhZ2UgPSBtZXNzYWdlIHx8IGh0dHAuU1RBVFVTX0NPREVTW2NvZGVdO1xuICBoZWFkZXJzID0ge1xuICAgIENvbm5lY3Rpb246ICdjbG9zZScsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnLFxuICAgICdDb250ZW50LUxlbmd0aCc6IEJ1ZmZlci5ieXRlTGVuZ3RoKG1lc3NhZ2UpLFxuICAgIC4uLmhlYWRlcnNcbiAgfTtcblxuICBzb2NrZXQub25jZSgnZmluaXNoJywgc29ja2V0LmRlc3Ryb3kpO1xuXG4gIHNvY2tldC5lbmQoXG4gICAgYEhUVFAvMS4xICR7Y29kZX0gJHtodHRwLlNUQVRVU19DT0RFU1tjb2RlXX1cXHJcXG5gICtcbiAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpXG4gICAgICAgIC5tYXAoKGgpID0+IGAke2h9OiAke2hlYWRlcnNbaF19YClcbiAgICAgICAgLmpvaW4oJ1xcclxcbicpICtcbiAgICAgICdcXHJcXG5cXHJcXG4nICtcbiAgICAgIG1lc3NhZ2VcbiAgKTtcbn1cblxuLyoqXG4gKiBFbWl0IGEgYCd3c0NsaWVudEVycm9yJ2AgZXZlbnQgb24gYSBgV2ViU29ja2V0U2VydmVyYCBpZiB0aGVyZSBpcyBhdCBsZWFzdFxuICogb25lIGxpc3RlbmVyIGZvciBpdCwgb3RoZXJ3aXNlIGNhbGwgYGFib3J0SGFuZHNoYWtlKClgLlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0U2VydmVyfSBzZXJ2ZXIgVGhlIFdlYlNvY2tldCBzZXJ2ZXJcbiAqIEBwYXJhbSB7aHR0cC5JbmNvbWluZ01lc3NhZ2V9IHJlcSBUaGUgcmVxdWVzdCBvYmplY3RcbiAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIHNvY2tldCBvZiB0aGUgdXBncmFkZSByZXF1ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgSFRUUCByZXNwb25zZSBzdGF0dXMgY29kZVxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIEhUVFAgcmVzcG9uc2UgYm9keVxuICogQHBhcmFtIHtPYmplY3R9IFtoZWFkZXJzXSBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IoXG4gIHNlcnZlcixcbiAgcmVxLFxuICBzb2NrZXQsXG4gIGNvZGUsXG4gIG1lc3NhZ2UsXG4gIGhlYWRlcnNcbikge1xuICBpZiAoc2VydmVyLmxpc3RlbmVyQ291bnQoJ3dzQ2xpZW50RXJyb3InKSkge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcik7XG5cbiAgICBzZXJ2ZXIuZW1pdCgnd3NDbGllbnRFcnJvcicsIGVyciwgc29ja2V0LCByZXEpO1xuICB9IGVsc2Uge1xuICAgIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycyk7XG4gIH1cbn1cbiIsICJpbXBvcnQgY3JlYXRlV2ViU29ja2V0U3RyZWFtIGZyb20gJy4vbGliL3N0cmVhbS5qcyc7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gJy4vbGliL2V4dGVuc2lvbi5qcyc7XG5pbXBvcnQgUGVyTWVzc2FnZURlZmxhdGUgZnJvbSAnLi9saWIvcGVybWVzc2FnZS1kZWZsYXRlLmpzJztcbmltcG9ydCBSZWNlaXZlciBmcm9tICcuL2xpYi9yZWNlaXZlci5qcyc7XG5pbXBvcnQgU2VuZGVyIGZyb20gJy4vbGliL3NlbmRlci5qcyc7XG5pbXBvcnQgc3VicHJvdG9jb2wgZnJvbSAnLi9saWIvc3VicHJvdG9jb2wuanMnO1xuaW1wb3J0IFdlYlNvY2tldCBmcm9tICcuL2xpYi93ZWJzb2NrZXQuanMnO1xuaW1wb3J0IFdlYlNvY2tldFNlcnZlciBmcm9tICcuL2xpYi93ZWJzb2NrZXQtc2VydmVyLmpzJztcblxuZXhwb3J0IHtcbiAgY3JlYXRlV2ViU29ja2V0U3RyZWFtLFxuICBleHRlbnNpb24sXG4gIFBlck1lc3NhZ2VEZWZsYXRlLFxuICBSZWNlaXZlcixcbiAgU2VuZGVyLFxuICBzdWJwcm90b2NvbCxcbiAgV2ViU29ja2V0LFxuICBXZWJTb2NrZXRTZXJ2ZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsUUFBTSxlQUFlLENBQUMsY0FBYyxlQUFlLFdBQVc7QUFDOUQsUUFBTSxVQUFVLE9BQU8sU0FBUztBQUVoQyxRQUFJLFFBQVMsY0FBYSxLQUFLLE1BQU07QUFFckMsV0FBTyxVQUFVO0FBQUEsTUFDZjtBQUFBLE1BQ0EsZUFBZTtBQUFBLE1BQ2YsY0FBYyxPQUFPLE1BQU0sQ0FBQztBQUFBLE1BQzVCLE1BQU07QUFBQSxNQUNOO0FBQUEsTUFDQSxzQkFBc0IsdUJBQU8sd0JBQXdCO0FBQUEsTUFDckQsV0FBVyx1QkFBTyxXQUFXO0FBQUEsTUFDN0IsYUFBYSx1QkFBTyxhQUFhO0FBQUEsTUFDakMsWUFBWSx1QkFBTyxXQUFXO0FBQUEsTUFDOUIsTUFBTSxNQUFNO0FBQUEsTUFBQztBQUFBLElBQ2Y7QUFBQTtBQUFBOzs7QUNsQkE7QUFBQTtBQUFBO0FBRUEsUUFBTSxFQUFFLGFBQWEsSUFBSTtBQUV6QixRQUFNLGFBQWEsT0FBTyxPQUFPLE9BQU87QUFVeEMsYUFBUyxPQUFP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YU87QUFwQlA7QUFBQTtBQUFBLG9CQUFrQztBQUNsQyx1QkFBc0I7QUFDdEIsZ0NBQThCO0FBQzlCLHNCQUFxQjtBQUNyQixvQkFBbUI7QUFDbkIseUJBQXdCO0FBQ3hCLHVCQUFzQjtBQUN0Qiw4QkFBNEI7QUFhNUIsSUFBTyxrQkFBUSxpQkFBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJQZXJNZXNzYWdlRGVmbGF0ZSIsICJkYXRhIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgIlJlY2VpdmVyIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgIlNlbmRlciIsICJleHRlbnNpb24iLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiUmVjZWl2ZXIiLCAiU2VuZGVyIiwgIldlYlNvY2tldCIsICJrZXkiLCAiV2ViU29ja2V0IiwgImNyZWF0ZVdlYlNvY2tldFN0cmVhbSIsICJlcnIiLCAicHJvdG9jb2wiLCAiZXh0ZW5zaW9uIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgInN1YnByb3RvY29sIiwgIldlYlNvY2tldCIsICJXZWJTb2NrZXRTZXJ2ZXIiLCAiV2ViU29ja2V0Il0KfQo=
