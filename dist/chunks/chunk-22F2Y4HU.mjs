#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs28
} from "./chunk-GWXFHECT.mjs";
import {
  httpAuthSchemes_exports,
  init_httpAuthSchemes,
  init_protocols,
  protocols_exports,
  require_dist_cjs as require_dist_cjs12,
  require_dist_cjs10 as require_dist_cjs21,
  require_dist_cjs11 as require_dist_cjs22,
  require_dist_cjs12 as require_dist_cjs23,
  require_dist_cjs13 as require_dist_cjs24,
  require_dist_cjs14 as require_dist_cjs25,
  require_dist_cjs15 as require_dist_cjs26,
  require_dist_cjs16 as require_dist_cjs27,
  require_dist_cjs2 as require_dist_cjs13,
  require_dist_cjs3 as require_dist_cjs14,
  require_dist_cjs4 as require_dist_cjs15,
  require_dist_cjs5 as require_dist_cjs16,
  require_dist_cjs6 as require_dist_cjs17,
  require_dist_cjs7 as require_dist_cjs18,
  require_dist_cjs8 as require_dist_cjs19,
  require_dist_cjs9 as require_dist_cjs20
} from "./chunk-HVPHPOYV.mjs";
import {
  require_dist_cjs as require_dist_cjs29
} from "./chunk-OPTHXAMC.mjs";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-EZHETOM7.mjs";
import {
  require_dist_cjs as require_dist_cjs11
} from "./chunk-RR3PN36J.mjs";
import {
  client_exports,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  dist_es_exports,
  init_dist_es
} from "./chunk-NQOD3DYB.mjs";
import {
  init_schema,
  init_tslib_es6,
  require_dist_cjs as require_dist_cjs7,
  require_dist_cjs2 as require_dist_cjs8,
  require_dist_cjs3 as require_dist_cjs9,
  require_dist_cjs5 as require_dist_cjs10,
  schema_exports,
  tslib_es6_exports
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs2,
  require_dist_cjs3
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  require_dist_cjs as require_dist_cjs5
} from "./chunk-FONUB5ET.mjs";
import {
  require_dist_cjs3 as require_dist_cjs6
} from "./chunk-HJNATCD3.mjs";
import {
  __commonJS,
  __require,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+middleware-eventstream@3.972.8/node_modules/@aws-sdk/middleware-eventstream/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+middleware-eventstream@3.972.8/node_modules/@aws-sdk/middleware-eventstream/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs();
    function resolveEventStreamConfig(input) {
      const eventSigner = input.signer;
      const messageSigner = input.signer;
      const newInput = Object.assign(input, {
        eventSigner,
        messageSigner
      });
      const eventStreamPayloadHandler = newInput.eventStreamPayloadHandlerProvider(newInput);
      return Object.assign(newInput, {
        eventStreamPayloadHandler
      });
    }
    var eventStreamHandlingMiddleware = (options) => (next, context) => async (args) => {
      const { request } = args;
      if (!protocolHttp.HttpRequest.isInstance(request))
        return next(args);
      return options.eventStreamPayloadHandler.handle(next, args, context);
    };
    var eventStreamHandlingMiddlewareOptions = {
      tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
      name: "eventStreamHandlingMiddleware",
      relation: "after",
      toMiddleware: "awsAuthMiddleware",
      override: true
    };
    var eventStreamHeaderMiddleware = (next) => async (args) => {
      const { request } = args;
      if (!protocolHttp.HttpRequest.isInstance(request))
        return next(args);
      request.headers = {
        ...request.headers,
        "content-type": "application/vnd.amazon.eventstream",
        "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS"
      };
      return next({
        ...args,
        request
      });
    };
    var eventStreamHeaderMiddlewareOptions = {
      step: "build",
      tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
      name: "eventStreamHeaderMiddleware",
      override: true
    };
    var getEventStreamPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(eventStreamHandlingMiddleware(options), eventStreamHandlingMiddlewareOptions);
        clientStack.add(eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions);
      }
    });
    exports.eventStreamHandlingMiddleware = eventStreamHandlingMiddleware;
    exports.eventStreamHandlingMiddlewareOptions = eventStreamHandlingMiddlewareOptions;
    exports.eventStreamHeaderMiddleware = eventStreamHeaderMiddleware;
    exports.eventStreamHeaderMiddlewareOptions = eventStreamHeaderMiddlewareOptions;
    exports.getEventStreamPlugin = getEventStreamPlugin;
    exports.resolveEventStreamConfig = resolveEventStreamConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+util-format-url@3.972.8/node_modules/@aws-sdk/util-format-url/dist-cjs/index.js
var require_dist_cjs31 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+util-format-url@3.972.8/node_modules/@aws-sdk/util-format-url/dist-cjs/index.js"(exports) {
    "use strict";
    var querystringBuilder = require_dist_cjs2();
    function formatUrl(request) {
      const { port, query } = request;
      let { protocol, path, hostname } = request;
      if (protocol && protocol.slice(-1) !== ":") {
        protocol += ":";
      }
      if (port) {
        hostname += `:${port}`;
      }
      if (path && path.charAt(0) !== "/") {
        path = `/${path}`;
      }
      let queryString = query ? querystringBuilder.buildQueryString(query) : "";
      if (queryString && queryString[0] !== "?") {
        queryString = `?${queryString}`;
      }
      let auth = "";
      if (request.username != null || request.password != null) {
        const username = request.username ?? "";
        const password = request.password ?? "";
        auth = `${username}:${password}@`;
      }
      let fragment = "";
      if (request.fragment) {
        fragment = `#${request.fragment}`;
      }
      return `${protocol}//${auth}${hostname}${path}${queryString}${fragment}`;
    }
    exports.formatUrl = formatUrl;
  }
});

// node_modules/.pnpm/@smithy+is-array-buffer@2.2.0/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs32 = __commonJS({
  "node_modules/.pnpm/@smithy+is-array-buffer@2.2.0/node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      isArrayBuffer: () => isArrayBuffer
    });
    module.exports = __toCommonJS2(src_exports);
    var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/.pnpm/@smithy+util-buffer-from@2.2.0/node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs33 = __commonJS({
  "node_modules/.pnpm/@smithy+util-buffer-from@2.2.0/node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      fromArrayBuffer: () => fromArrayBuffer,
      fromString: () => fromString
    });
    module.exports = __toCommonJS2(src_exports);
    var import_is_array_buffer = require_dist_cjs32();
    var import_buffer = __require("buffer");
    var fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!(0, import_is_array_buffer.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return import_buffer.Buffer.from(input, offset, length);
    }, "fromArrayBuffer");
    var fromString = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
    }, "fromString");
  }
});

// node_modules/.pnpm/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs34 = __commonJS({
  "node_modules/.pnpm/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      fromUtf8: () => fromUtf8,
      toUint8Array: () => toUint8Array,
      toUtf8: () => toUtf8
    });
    module.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs33();
    var fromUtf8 = /* @__PURE__ */ __name((input) => {
      const buf = (0, import_util_buffer_from.fromString)(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
    var toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
    var toUtf8 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    }, "toUtf8");
  }
});

// node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_1 = require_dist_cjs34();
    var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer;
  }
});

// node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    exports.isEmptyData = isEmptyData;
  }
});

// node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/numToUint8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint8(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    exports.numToUint8 = numToUint8;
  }
});

// node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/uint32ArrayFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom(a_lookUpTable) {
      if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
          a_index += 1;
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    exports.uint32ArrayFrom = uint32ArrayFrom;
  }
});

// node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/index.js
var require_main = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/main/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/.pnpm/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/main/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/main/aws_crc32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_main();
    var index_1 = require_main2();
    var AwsCrc32 = (
      /** @class */
      (function() {
        function AwsCrc322() {
          this.crc32 = new index_1.Crc32();
        }
        AwsCrc322.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash))
            return;
          this.crc32.update((0, util_1.convertToBuffer)(toHash));
        };
        AwsCrc322.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, (0, util_1.numToUint8)(this.crc32.digest())];
            });
          });
        };
        AwsCrc322.prototype.reset = function() {
          this.crc32 = new index_1.Crc32();
        };
        return AwsCrc322;
      })()
    );
    exports.AwsCrc32 = AwsCrc32;
  }
});

// node_modules/.pnpm/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/main/index.js
var require_main2 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/main/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_main();
    function crc32(data) {
      return new Crc32().update(data).digest();
    }
    exports.crc32 = crc32;
    var Crc32 = (
      /** @class */
      (function() {
        function Crc322() {
          this.checksum = 4294967295;
        }
        Crc322.prototype.update = function(data) {
          var e_1, _a;
          try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
              var byte = data_1_1.value;
              this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return this;
        };
        Crc322.prototype.digest = function() {
          return (this.checksum ^ 4294967295) >>> 0;
        };
        return Crc322;
      })()
    );
    exports.Crc32 = Crc32;
    var a_lookUpTable = [
      0,
      1996959894,
      3993919788,
      2567524794,
      124634137,
      1886057615,
      3915621685,
      2657392035,
      249268274,
      2044508324,
      3772115230,
      2547177864,
      162941995,
      2125561021,
      3887607047,
      2428444049,
      498536548,
      1789927666,
      4089016648,
      2227061214,
      450548861,
      1843258603,
      4107580753,
      2211677639,
      325883990,
      1684777152,
      4251122042,
      2321926636,
      335633487,
      1661365465,
      4195302755,
      2366115317,
      997073096,
      1281953886,
      3579855332,
      2724688242,
      1006888145,
      1258607687,
      3524101629,
      2768942443,
      901097722,
      1119000684,
      3686517206,
      2898065728,
      853044451,
      1172266101,
      3705015759,
      2882616665,
      651767980,
      1373503546,
      3369554304,
      3218104598,
      565507253,
      1454621731,
      3485111705,
      3099436303,
      671266974,
      1594198024,
      3322730930,
      2970347812,
      795835527,
      1483230225,
      3244367275,
      3060149565,
      1994146192,
      31158534,
      2563907772,
      4023717930,
      1907459465,
      112637215,
      2680153253,
      3904427059,
      2013776290,
      251722036,
      2517215374,
      3775830040,
      2137656763,
      141376813,
      2439277719,
      3865271297,
      1802195444,
      476864866,
      2238001368,
      4066508878,
      1812370925,
      453092731,
      2181625025,
      4111451223,
      1706088902,
      314042704,
      2344532202,
      4240017532,
      1658658271,
      366619977,
      2362670323,
      4224994405,
      1303535960,
      984961486,
      2747007092,
      3569037538,
      1256170817,
      1037604311,
      2765210733,
      3554079995,
      1131014506,
      879679996,
      2909243462,
      3663771856,
      1141124467,
      855842277,
      2852801631,
      3708648649,
      1342533948,
      654459306,
      3188396048,
      3373015174,
      1466479909,
      544179635,
      3110523913,
      3462522015,
      1591671054,
      702138776,
      2966460450,
      3352799412,
      1504918807,
      783551873,
      3082640443,
      3233442989,
      3988292384,
      2596254646,
      62317068,
      1957810842,
      3939845945,
      2647816111,
      81470997,
      1943803523,
      3814918930,
      2489596804,
      225274430,
      2053790376,
      3826175755,
      2466906013,
      167816743,
      2097651377,
      4027552580,
      2265490386,
      503444072,
      1762050814,
      4150417245,
      2154129355,
      426522225,
      1852507879,
      4275313526,
      2312317920,
      282753626,
      1742555852,
      4189708143,
      2394877945,
      397917763,
      1622183637,
      3604390888,
      2714866558,
      953729732,
      1340076626,
      3518719985,
      2797360999,
      1068828381,
      1219638859,
      3624741850,
      2936675148,
      906185462,
      1090812512,
      3747672003,
      2825379669,
      829329135,
      1181335161,
      3412177804,
      3160834842,
      628085408,
      1382605366,
      3423369109,
      3138078467,
      570562233,
      1426400815,
      3317316542,
      2998733608,
      733239954,
      1555261956,
      3268935591,
      3050360625,
      752459403,
      1541320221,
      2607071920,
      3965973030,
      1969922972,
      40735498,
      2617837225,
      3943577151,
      1913087877,
      83908371,
      2512341634,
      3803740692,
      2075208622,
      213261112,
      2463272603,
      3855990285,
      2094854071,
      198958881,
      2262029012,
      4057260610,
      1759359992,
      534414190,
      2176718541,
      4139329115,
      1873836001,
      414664567,
      2282248934,
      4279200368,
      1711684554,
      285281116,
      2405801727,
      4167216745,
      1634467795,
      376229701,
      2685067896,
      3608007406,
      1308918612,
      956543938,
      2808555105,
      3495958263,
      1231636301,
      1047427035,
      2932959818,
      3654703836,
      1088359270,
      936918e3,
      2847714899,
      3736837829,
      1202900863,
      817233897,
      3183342108,
      3401237130,
      1404277552,
      615818150,
      3134207493,
      3453421203,
      1423857449,
      601450431,
      3009837614,
      3294710456,
      1567103746,
      711928724,
      3020668471,
      3272380065,
      1510334235,
      755167117
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
    var aws_crc32_1 = require_aws_crc32();
    Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
      return aws_crc32_1.AwsCrc32;
    } });
  }
});

// node_modules/.pnpm/@smithy+eventstream-codec@4.2.12/node_modules/@smithy/eventstream-codec/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-codec@4.2.12/node_modules/@smithy/eventstream-codec/dist-cjs/index.js"(exports) {
    "use strict";
    var crc32 = require_main2();
    var utilHexEncoding = require_dist_cjs9();
    var Int64 = class _Int64 {
      bytes;
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
          bytes[i] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(utilHexEncoding.toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    function negate(bytes) {
      for (let i = 0; i < 8; i++) {
        bytes[i] ^= 255;
      }
      for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
          break;
      }
    }
    var HeaderMarshaller = class {
      toUtf8;
      fromUtf8;
      constructor(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = this.fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = this.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(utilHexEncoding.fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
      parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
          const nameLength = headers.getUint8(position++);
          const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
          position += nameLength;
          switch (headers.getUint8(position++)) {
            case 0:
              out[name] = {
                type: BOOLEAN_TAG,
                value: true
              };
              break;
            case 1:
              out[name] = {
                type: BOOLEAN_TAG,
                value: false
              };
              break;
            case 2:
              out[name] = {
                type: BYTE_TAG,
                value: headers.getInt8(position++)
              };
              break;
            case 3:
              out[name] = {
                type: SHORT_TAG,
                value: headers.getInt16(position, false)
              };
              position += 2;
              break;
            case 4:
              out[name] = {
                type: INT_TAG,
                value: headers.getInt32(position, false)
              };
              position += 4;
              break;
            case 5:
              out[name] = {
                type: LONG_TAG,
                value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
              };
              position += 8;
              break;
            case 6:
              const binaryLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: BINARY_TAG,
                value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
              };
              position += binaryLength;
              break;
            case 7:
              const stringLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: STRING_TAG,
                value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
              };
              position += stringLength;
              break;
            case 8:
              out[name] = {
                type: TIMESTAMP_TAG,
                value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
              };
              position += 8;
              break;
            case 9:
              const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
              position += 16;
              out[name] = {
                type: UUID_TAG,
                value: `${utilHexEncoding.toHex(uuidBytes.subarray(0, 4))}-${utilHexEncoding.toHex(uuidBytes.subarray(4, 6))}-${utilHexEncoding.toHex(uuidBytes.subarray(6, 8))}-${utilHexEncoding.toHex(uuidBytes.subarray(8, 10))}-${utilHexEncoding.toHex(uuidBytes.subarray(10))}`
              };
              break;
            default:
              throw new Error(`Unrecognized header type tag`);
          }
        }
        return out;
      }
    };
    var BOOLEAN_TAG = "boolean";
    var BYTE_TAG = "byte";
    var SHORT_TAG = "short";
    var INT_TAG = "integer";
    var LONG_TAG = "long";
    var BINARY_TAG = "binary";
    var STRING_TAG = "string";
    var TIMESTAMP_TAG = "timestamp";
    var UUID_TAG = "uuid";
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var PRELUDE_MEMBER_LENGTH = 4;
    var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
    var CHECKSUM_LENGTH = 4;
    var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
    function splitMessage({ byteLength, byteOffset, buffer }) {
      if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
      }
      const view = new DataView(buffer, byteOffset, byteLength);
      const messageLength = view.getUint32(0, false);
      if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
      }
      const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
      const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
      const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
      const checksummer = new crc32.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
      if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
      }
      checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
      if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
      }
      return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
      };
    }
    var EventStreamCodec = class {
      headerMarshaller;
      messageBuffer;
      isEndOfStream;
      constructor(toUtf8, fromUtf8) {
        this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
      }
      feed(message) {
        this.messageBuffer.push(this.decode(message));
      }
      endOfStream() {
        this.isEndOfStream = true;
      }
      getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
          getMessage() {
            return message;
          },
          isEndOfStream() {
            return isEndOfStream;
          }
        };
      }
      getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
          getMessages() {
            return messages;
          },
          isEndOfStream() {
            return isEndOfStream;
          }
        };
      }
      encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new crc32.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
      }
      decode(message) {
        const { headers, body } = splitMessage(message);
        return { headers: this.headerMarshaller.parse(headers), body };
      }
      formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
      }
    };
    var MessageDecoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const bytes of this.options.inputStream) {
          const decoded = this.options.decoder.decode(bytes);
          yield decoded;
        }
      }
    };
    var MessageEncoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const msg of this.options.messageStream) {
          const encoded = this.options.encoder.encode(msg);
          yield encoded;
        }
        if (this.options.includeEndFrame) {
          yield new Uint8Array(0);
        }
      }
    };
    var SmithyMessageDecoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const message of this.options.messageStream) {
          const deserialized = await this.options.deserializer(message);
          if (deserialized === void 0)
            continue;
          yield deserialized;
        }
      }
    };
    var SmithyMessageEncoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const chunk of this.options.inputStream) {
          const payloadBuf = this.options.serializer(chunk);
          yield payloadBuf;
        }
      }
    };
    exports.EventStreamCodec = EventStreamCodec;
    exports.HeaderMarshaller = HeaderMarshaller;
    exports.Int64 = Int64;
    exports.MessageDecoderStream = MessageDecoderStream;
    exports.MessageEncoderStream = MessageEncoderStream;
    exports.SmithyMessageDecoderStream = SmithyMessageDecoderStream;
    exports.SmithyMessageEncoderStream = SmithyMessageEncoderStream;
  }
});

// node_modules/.pnpm/@smithy+eventstream-serde-universal@4.2.12/node_modules/@smithy/eventstream-serde-universal/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-serde-universal@4.2.12/node_modules/@smithy/eventstream-serde-universal/dist-cjs/index.js"(exports) {
    "use strict";
    var eventstreamCodec = require_dist_cjs35();
    function getChunkedStream(source) {
      let currentMessageTotalLength = 0;
      let currentMessagePendingLength = 0;
      let currentMessage = null;
      let messageLengthBuffer = null;
      const allocateMessage = (size) => {
        if (typeof size !== "number") {
          throw new Error("Attempted to allocate an event message where size was not a number: " + size);
        }
        currentMessageTotalLength = size;
        currentMessagePendingLength = 4;
        currentMessage = new Uint8Array(size);
        const currentMessageView = new DataView(currentMessage.buffer);
        currentMessageView.setUint32(0, size, false);
      };
      const iterator = async function* () {
        const sourceIterator = source[Symbol.asyncIterator]();
        while (true) {
          const { value, done } = await sourceIterator.next();
          if (done) {
            if (!currentMessageTotalLength) {
              return;
            } else if (currentMessageTotalLength === currentMessagePendingLength) {
              yield currentMessage;
            } else {
              throw new Error("Truncated event message received.");
            }
            return;
          }
          const chunkLength = value.length;
          let currentOffset = 0;
          while (currentOffset < chunkLength) {
            if (!currentMessage) {
              const bytesRemaining = chunkLength - currentOffset;
              if (!messageLengthBuffer) {
                messageLengthBuffer = new Uint8Array(4);
              }
              const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
              messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
              currentMessagePendingLength += numBytesForTotal;
              currentOffset += numBytesForTotal;
              if (currentMessagePendingLength < 4) {
                break;
              }
              allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
              messageLengthBuffer = null;
            }
            const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
            currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
            currentMessagePendingLength += numBytesToWrite;
            currentOffset += numBytesToWrite;
            if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
              yield currentMessage;
              currentMessage = null;
              currentMessageTotalLength = 0;
              currentMessagePendingLength = 0;
            }
          }
        }
      };
      return {
        [Symbol.asyncIterator]: iterator
      };
    }
    function getMessageUnmarshaller(deserializer, toUtf8) {
      return async function(message) {
        const { value: messageType } = message.headers[":message-type"];
        if (messageType === "error") {
          const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
          unmodeledError.name = message.headers[":error-code"].value;
          throw unmodeledError;
        } else if (messageType === "exception") {
          const code = message.headers[":exception-type"].value;
          const exception = { [code]: message };
          const deserializedException = await deserializer(exception);
          if (deserializedException.$unknown) {
            const error = new Error(toUtf8(message.body));
            error.name = code;
            throw error;
          }
          throw deserializedException[code];
        } else if (messageType === "event") {
          const event = {
            [message.headers[":event-type"].value]: message
          };
          const deserialized = await deserializer(event);
          if (deserialized.$unknown)
            return;
          return deserialized;
        } else {
          throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
        }
      };
    }
    var EventStreamMarshaller = class {
      eventStreamCodec;
      utfEncoder;
      constructor({ utf8Encoder, utf8Decoder }) {
        this.eventStreamCodec = new eventstreamCodec.EventStreamCodec(utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
      }
      deserialize(body, deserializer) {
        const inputStream = getChunkedStream(body);
        return new eventstreamCodec.SmithyMessageDecoderStream({
          messageStream: new eventstreamCodec.MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
          deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
        });
      }
      serialize(inputStream, serializer) {
        return new eventstreamCodec.MessageEncoderStream({
          messageStream: new eventstreamCodec.SmithyMessageEncoderStream({ inputStream, serializer }),
          encoder: this.eventStreamCodec,
          includeEndFrame: true
        });
      }
    };
    var eventStreamSerdeProvider = (options) => new EventStreamMarshaller(options);
    exports.EventStreamMarshaller = EventStreamMarshaller;
    exports.eventStreamSerdeProvider = eventStreamSerdeProvider;
  }
});

// node_modules/.pnpm/@smithy+eventstream-serde-browser@4.2.12/node_modules/@smithy/eventstream-serde-browser/dist-cjs/index.js
var require_dist_cjs37 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-serde-browser@4.2.12/node_modules/@smithy/eventstream-serde-browser/dist-cjs/index.js"(exports) {
    "use strict";
    var eventstreamSerdeUniversal = require_dist_cjs36();
    var readableStreamtoIterable = (readableStream) => ({
      [Symbol.asyncIterator]: async function* () {
        const reader = readableStream.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done)
              return;
            yield value;
          }
        } finally {
          reader.releaseLock();
        }
      }
    });
    var iterableToReadableStream = (asyncIterable) => {
      const iterator = asyncIterable[Symbol.asyncIterator]();
      return new ReadableStream({
        async pull(controller) {
          const { done, value } = await iterator.next();
          if (done) {
            return controller.close();
          }
          controller.enqueue(value);
        }
      });
    };
    var EventStreamMarshaller = class {
      universalMarshaller;
      constructor({ utf8Encoder, utf8Decoder }) {
        this.universalMarshaller = new eventstreamSerdeUniversal.EventStreamMarshaller({
          utf8Decoder,
          utf8Encoder
        });
      }
      deserialize(body, deserializer) {
        const bodyIterable = isReadableStream(body) ? readableStreamtoIterable(body) : body;
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
      }
      serialize(input, serializer) {
        const serialziedIterable = this.universalMarshaller.serialize(input, serializer);
        return typeof ReadableStream === "function" ? iterableToReadableStream(serialziedIterable) : serialziedIterable;
      }
    };
    var isReadableStream = (body) => typeof ReadableStream === "function" && body instanceof ReadableStream;
    var eventStreamSerdeProvider = (options) => new EventStreamMarshaller(options);
    exports.EventStreamMarshaller = EventStreamMarshaller;
    exports.eventStreamSerdeProvider = eventStreamSerdeProvider;
    exports.iterableToReadableStream = iterableToReadableStream;
    exports.readableStreamtoIterable = readableStreamtoIterable;
  }
});

// node_modules/.pnpm/@aws-sdk+middleware-websocket@3.972.14/node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js
var require_dist_cjs38 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+middleware-websocket@3.972.14/node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js"(exports) {
    "use strict";
    var utilFormatUrl = require_dist_cjs31();
    var eventstreamSerdeBrowser = require_dist_cjs37();
    var fetchHttpHandler = require_dist_cjs8();
    var protocolHttp = require_dist_cjs();
    var utilBase64 = require_dist_cjs7();
    var eventstreamCodec = require_dist_cjs35();
    var utilHexEncoding = require_dist_cjs9();
    var isWebSocketRequest = (request) => request.protocol === "ws:" || request.protocol === "wss:";
    var DEFAULT_WS_CONNECTION_TIMEOUT_MS = 3e3;
    var WebSocketFetchHandler = class _WebSocketFetchHandler {
      metadata = {
        handlerProtocol: "websocket/h1.1"
      };
      config = {};
      configPromise;
      httpHandler;
      sockets = {};
      static create(instanceOrOptions, httpHandler = new fetchHttpHandler.FetchHttpHandler()) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _WebSocketFetchHandler(instanceOrOptions, httpHandler);
      }
      constructor(options, httpHandler = new fetchHttpHandler.FetchHttpHandler()) {
        this.httpHandler = httpHandler;
        const setConfig = (opts) => {
          this.config = {
            ...opts ?? {}
          };
          return this.config;
        };
        if (typeof options === "function") {
          this.config = {};
          this.configPromise = options().then((opts) => {
            return setConfig(opts);
          });
        } else {
          this.configPromise = Promise.resolve(setConfig(options));
        }
      }
      destroy() {
        for (const [key, sockets] of Object.entries(this.sockets)) {
          for (const socket of sockets) {
            socket.close(1e3, `Socket closed through destroy() call`);
          }
          delete this.sockets[key];
        }
      }
      async handle(request) {
        this.config = await this.configPromise;
        const { logger } = this.config;
        if (!isWebSocketRequest(request)) {
          logger?.debug?.(`@aws-sdk - ws fetching ${request.protocol}${request.hostname}${request.path}`);
          return this.httpHandler.handle(request);
        }
        const url = utilFormatUrl.formatUrl(request);
        logger?.debug?.(`@aws-sdk - ws connecting ${url.split("?")[0]}`);
        const socket = new WebSocket(url);
        if (!this.sockets[url]) {
          this.sockets[url] = [];
        }
        this.sockets[url].push(socket);
        socket.binaryType = "arraybuffer";
        const { connectionTimeout = DEFAULT_WS_CONNECTION_TIMEOUT_MS } = this.config;
        await this.waitForReady(socket, connectionTimeout);
        const { body } = request;
        const bodyStream = getIterator(body);
        const asyncIterable = this.connect(socket, bodyStream);
        const outputPayload = toReadableStream(asyncIterable);
        return {
          response: new protocolHttp.HttpResponse({
            statusCode: 200,
            body: outputPayload
          })
        };
      }
      updateHttpClientConfig(key, value) {
        this.configPromise = this.configPromise.then((config) => {
          config[key] = value;
          return config;
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      removeNotUsableSockets(url) {
        this.sockets[url] = (this.sockets[url] ?? []).filter((socket) => ![WebSocket.CLOSING, WebSocket.CLOSED].includes(socket.readyState));
      }
      waitForReady(socket, connectionTimeout) {
        return new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            this.removeNotUsableSockets(socket.url);
            reject({
              $metadata: {
                httpStatusCode: 500,
                websocketSynthetic500Error: true
              }
            });
          }, connectionTimeout);
          socket.onopen = () => {
            clearTimeout(timeout);
            resolve();
          };
        });
      }
      connect(socket, data) {
        const messageQueue = [];
        let pendingResolve = null;
        let pendingReject = null;
        const push = (item) => {
          if (pendingResolve) {
            if (item.error) {
              pendingReject(item.error);
            } else {
              pendingResolve({ done: item.done, value: item.value });
            }
            pendingResolve = null;
            pendingReject = null;
          } else {
            messageQueue.push(item);
          }
        };
        socket.onmessage = (event) => {
          const { data: data2 } = event;
          if (typeof data2 === "string") {
            push({
              done: false,
              value: utilBase64.fromBase64(data2)
            });
          } else {
            push({
              done: false,
              value: new Uint8Array(data2)
            });
          }
        };
        socket.onerror = (event) => {
          socket.close();
          push({ done: true, error: event });
        };
        socket.onclose = () => {
          this.removeNotUsableSockets(socket.url);
          push({ done: true });
        };
        const outputStream = {
          [Symbol.asyncIterator]: () => ({
            async next() {
              if (messageQueue.length > 0) {
                const item = messageQueue.shift();
                if (item.error) {
                  throw item.error;
                }
                return { done: item.done, value: item.value };
              }
              return new Promise((resolve, reject) => {
                pendingResolve = resolve;
                pendingReject = reject;
              });
            }
          })
        };
        const send = async () => {
          try {
            for await (const chunk of data) {
              if (socket.readyState >= WebSocket.CLOSING) {
                break;
              } else {
                socket.send(chunk);
              }
            }
          } catch (err) {
            push({
              done: true,
              error: err
            });
          } finally {
            socket.close(1e3);
          }
        };
        send();
        return outputStream;
      }
    };
    var getIterator = (stream) => {
      if (stream[Symbol.asyncIterator]) {
        return stream;
      }
      if (isReadableStream(stream)) {
        return eventstreamSerdeBrowser.readableStreamtoIterable(stream);
      }
      return {
        [Symbol.asyncIterator]: async function* () {
          yield stream;
        }
      };
    };
    var toReadableStream = (asyncIterable) => typeof ReadableStream === "function" ? eventstreamSerdeBrowser.iterableToReadableStream(asyncIterable) : asyncIterable;
    var isReadableStream = (payload) => typeof ReadableStream === "function" && payload instanceof ReadableStream;
    var websocketEndpointMiddleware = (config, options) => (next) => (args) => {
      const { request } = args;
      if (protocolHttp.HttpRequest.isInstance(request) && config.requestHandler.metadata?.handlerProtocol?.toLowerCase().includes("websocket")) {
        request.protocol = "wss:";
        request.method = "GET";
        request.path = `${request.path}-websocket`;
        const { headers } = request;
        delete headers["content-type"];
        delete headers["x-amz-content-sha256"];
        for (const name of Object.keys(headers)) {
          if (name.indexOf(options.headerPrefix) === 0) {
            const chunkedName = name.replace(options.headerPrefix, "");
            request.query[chunkedName] = headers[name];
          }
        }
        if (headers["x-amz-user-agent"]) {
          request.query["user-agent"] = headers["x-amz-user-agent"];
        }
        request.headers = { host: headers.host ?? request.hostname };
      }
      return next(args);
    };
    var websocketEndpointMiddlewareOptions = {
      name: "websocketEndpointMiddleware",
      tags: ["WEBSOCKET", "EVENT_STREAM"],
      relation: "after",
      toMiddleware: "eventStreamHeaderMiddleware",
      override: true
    };
    var injectSessionIdMiddleware = () => (next) => async (args) => {
      const requestParams = {
        ...args.input
      };
      const response = await next(args);
      const output = response.output;
      if (requestParams.SessionId && output.SessionId == null) {
        output.SessionId = requestParams.SessionId;
      }
      return response;
    };
    var injectSessionIdMiddlewareOptions = {
      step: "initialize",
      name: "injectSessionIdMiddleware",
      tags: ["WEBSOCKET", "EVENT_STREAM"],
      override: true
    };
    var getWebSocketPlugin = (config, options) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(websocketEndpointMiddleware(config, options), websocketEndpointMiddlewareOptions);
        clientStack.add(injectSessionIdMiddleware(), injectSessionIdMiddlewareOptions);
      }
    });
    var WebsocketSignatureV4 = class {
      signer;
      constructor(options) {
        this.signer = options.signer;
      }
      presign(originalRequest, options = {}) {
        return this.signer.presign(originalRequest, options);
      }
      async sign(toSign, options) {
        if (protocolHttp.HttpRequest.isInstance(toSign) && isWebSocketRequest(toSign)) {
          const signedRequest = await this.signer.presign({ ...toSign, body: "" }, {
            ...options,
            expiresIn: 60,
            unsignableHeaders: new Set(Object.keys(toSign.headers).filter((header) => header !== "host"))
          });
          return {
            ...signedRequest,
            body: toSign.body
          };
        } else {
          return this.signer.sign(toSign, options);
        }
      }
      signMessage(message, args) {
        return this.signer.signMessage(message, args);
      }
    };
    var resolveWebSocketConfig = (input) => {
      const { signer } = input;
      return Object.assign(input, {
        signer: async (authScheme) => {
          const signerObj = await signer(authScheme);
          if (validateSigner(signerObj)) {
            return new WebsocketSignatureV4({ signer: signerObj });
          }
          throw new Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
        }
      });
    };
    var validateSigner = (signer) => !!signer;
    var EventSigningTransformStream = class extends TransformStream {
      constructor(initialSignature, messageSigner, eventStreamCodec, systemClockOffsetProvider) {
        let priorSignature = initialSignature;
        super({
          start() {
          },
          async transform(chunk, controller) {
            try {
              const now = new Date(Date.now() + await systemClockOffsetProvider());
              const dateHeader = {
                ":date": { type: "timestamp", value: now }
              };
              const signedMessage = await messageSigner.sign({
                message: {
                  body: chunk,
                  headers: dateHeader
                },
                priorSignature
              }, {
                signingDate: now
              });
              priorSignature = signedMessage.signature;
              const serializedSigned = eventStreamCodec.encode({
                headers: {
                  ...dateHeader,
                  ":chunk-signature": {
                    type: "binary",
                    value: utilHexEncoding.fromHex(signedMessage.signature)
                  }
                },
                body: chunk
              });
              controller.enqueue(serializedSigned);
            } catch (error) {
              controller.error(error);
            }
          }
        });
      }
    };
    var EventStreamPayloadHandler = class {
      messageSigner;
      eventStreamCodec;
      systemClockOffsetProvider;
      constructor(options) {
        this.messageSigner = options.messageSigner;
        this.eventStreamCodec = new eventstreamCodec.EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
        this.systemClockOffsetProvider = async () => options.systemClockOffset ?? 0;
      }
      async handle(next, args, context = {}) {
        const request = args.request;
        const { body: payload, headers, query } = request;
        if (!(payload instanceof ReadableStream)) {
          throw new Error("Eventstream payload must be a ReadableStream.");
        }
        const placeHolderStream = new TransformStream();
        request.body = placeHolderStream.readable;
        const match = (headers?.authorization ?? "").match(/Signature=(\w+)$/);
        let priorSignature = (match ?? [])[1] ?? (query && query["X-Amz-Signature"]) ?? "";
        if (context.__staticSignature) {
          priorSignature = "";
        }
        const signingStream = new EventSigningTransformStream(priorSignature, await this.messageSigner(), this.eventStreamCodec, this.systemClockOffsetProvider);
        payload.pipeThrough(signingStream).pipeThrough(placeHolderStream);
        let result;
        try {
          result = await next(args);
        } catch (e) {
          const p = payload.cancel?.();
          if (p instanceof Promise) {
            p.catch(() => {
            });
          }
          throw e;
        }
        return result;
      }
    };
    var eventStreamPayloadHandlerProvider = (options) => new EventStreamPayloadHandler(options);
    exports.WebSocketFetchHandler = WebSocketFetchHandler;
    exports.eventStreamPayloadHandlerProvider = eventStreamPayloadHandlerProvider;
    exports.getWebSocketPlugin = getWebSocketPlugin;
    exports.resolveWebSocketConfig = resolveWebSocketConfig;
  }
});

// node_modules/.pnpm/@smithy+eventstream-serde-config-resolver@4.3.12/node_modules/@smithy/eventstream-serde-config-resolver/dist-cjs/index.js
var require_dist_cjs39 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-serde-config-resolver@4.3.12/node_modules/@smithy/eventstream-serde-config-resolver/dist-cjs/index.js"(exports) {
    "use strict";
    var resolveEventStreamSerdeConfig = (input) => Object.assign(input, {
      eventStreamMarshaller: input.eventStreamSerdeProvider(input)
    });
    exports.resolveEventStreamSerdeConfig = resolveEventStreamSerdeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/auth/httpAuthSchemeProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveHttpAuthSchemeConfig = exports.defaultBedrockRuntimeHttpAuthSchemeProvider = exports.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = void 0;
    var httpAuthSchemes_1 = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var util_middleware_1 = require_dist_cjs10();
    var defaultBedrockRuntimeHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = defaultBedrockRuntimeHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "bedrock",
          region: authParameters.region
        },
        propertiesExtractor: (config, context) => ({
          signingProperties: {
            config,
            context
          }
        })
      };
    }
    function createSmithyApiHttpBearerAuthHttpAuthOption(authParameters) {
      return {
        schemeId: "smithy.api#httpBearerAuth",
        propertiesExtractor: ({ profile, filepath, configFilepath, ignoreCache }, context) => ({
          identityProperties: {
            profile,
            filepath,
            configFilepath,
            ignoreCache
          }
        })
      };
    }
    var defaultBedrockRuntimeHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
          options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports.defaultBedrockRuntimeHttpAuthSchemeProvider = defaultBedrockRuntimeHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig = (config) => {
      const token = (0, core_1.memoizeIdentityProvider)(config.token, core_1.isIdentityExpired, core_1.doesIdentityRequireRefresh);
      const config_0 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4Config)(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? []),
        token
      });
    };
    exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/package.json"(exports, module) {
    module.exports = {
      name: "@aws-sdk/client-bedrock-runtime",
      description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
      version: "3.1021.0",
      scripts: {
        build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline client-bedrock-runtime",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime",
        test: "yarn g:vitest run --passWithNoTests",
        "test:browser": "yarn g:vitest run -c vitest.config.browser.e2e.mts",
        "test:browser:watch": "yarn g:vitest watch -c vitest.config.browser.e2e.mts",
        "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts",
        "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
        "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs",
        "test:integration": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
        "test:integration:watch": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
        "test:watch": "yarn g:vitest watch --passWithNoTests"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.973.26",
        "@aws-sdk/credential-provider-node": "^3.972.29",
        "@aws-sdk/eventstream-handler-node": "^3.972.12",
        "@aws-sdk/middleware-eventstream": "^3.972.8",
        "@aws-sdk/middleware-host-header": "^3.972.8",
        "@aws-sdk/middleware-logger": "^3.972.8",
        "@aws-sdk/middleware-recursion-detection": "^3.972.9",
        "@aws-sdk/middleware-user-agent": "^3.972.28",
        "@aws-sdk/middleware-websocket": "^3.972.14",
        "@aws-sdk/region-config-resolver": "^3.972.10",
        "@aws-sdk/token-providers": "3.1021.0",
        "@aws-sdk/types": "^3.973.6",
        "@aws-sdk/util-endpoints": "^3.996.5",
        "@aws-sdk/util-user-agent-browser": "^3.972.8",
        "@aws-sdk/util-user-agent-node": "^3.973.14",
        "@smithy/config-resolver": "^4.4.13",
        "@smithy/core": "^3.23.13",
        "@smithy/eventstream-serde-browser": "^4.2.12",
        "@smithy/eventstream-serde-config-resolver": "^4.3.12",
        "@smithy/eventstream-serde-node": "^4.2.12",
        "@smithy/fetch-http-handler": "^5.3.15",
        "@smithy/hash-node": "^4.2.12",
        "@smithy/invalid-dependency": "^4.2.12",
        "@smithy/middleware-content-length": "^4.2.12",
        "@smithy/middleware-endpoint": "^4.4.28",
        "@smithy/middleware-retry": "^4.4.46",
        "@smithy/middleware-serde": "^4.2.16",
        "@smithy/middleware-stack": "^4.2.12",
        "@smithy/node-config-provider": "^4.3.12",
        "@smithy/node-http-handler": "^4.5.1",
        "@smithy/protocol-http": "^5.3.12",
        "@smithy/smithy-client": "^4.12.8",
        "@smithy/types": "^4.13.1",
        "@smithy/url-parser": "^4.2.12",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.44",
        "@smithy/util-defaults-mode-node": "^4.2.48",
        "@smithy/util-endpoints": "^3.3.3",
        "@smithy/util-middleware": "^4.2.12",
        "@smithy/util-retry": "^4.2.13",
        "@smithy/util-stream": "^4.5.21",
        "@smithy/util-utf8": "^4.2.2",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@smithy/snapshot-testing": "^2.0.4",
        "@tsconfig/node20": "20.1.8",
        "@types/node": "^20.14.8",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        premove: "4.0.0",
        typescript: "~5.8.3",
        vitest: "^4.0.17"
      },
      engines: {
        node: ">=20.0.0"
      },
      typesVersions: {
        "<4.5": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-bedrock-runtime"
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+eventstream-handler-node@3.972.12/node_modules/@aws-sdk/eventstream-handler-node/dist-cjs/index.js
var require_dist_cjs40 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+eventstream-handler-node@3.972.12/node_modules/@aws-sdk/eventstream-handler-node/dist-cjs/index.js"(exports) {
    "use strict";
    var eventstreamCodec = require_dist_cjs35();
    var node_stream = __require("node:stream");
    var EventSigningTransformStream = class extends node_stream.Transform {
      priorSignature;
      messageSigner;
      eventStreamCodec;
      systemClockOffsetProvider;
      constructor(options) {
        super({
          autoDestroy: true,
          readableObjectMode: true,
          writableObjectMode: true,
          ...options
        });
        this.priorSignature = options.priorSignature;
        this.eventStreamCodec = options.eventStreamCodec;
        this.messageSigner = options.messageSigner;
        this.systemClockOffsetProvider = options.systemClockOffsetProvider;
      }
      async _transform(chunk, encoding, callback) {
        try {
          const now = new Date(Date.now() + await this.systemClockOffsetProvider());
          const dateHeader = {
            ":date": { type: "timestamp", value: now }
          };
          const signedMessage = await this.messageSigner.sign({
            message: {
              body: chunk,
              headers: dateHeader
            },
            priorSignature: this.priorSignature
          }, {
            signingDate: now
          });
          this.priorSignature = signedMessage.signature;
          const serializedSigned = this.eventStreamCodec.encode({
            headers: {
              ...dateHeader,
              ":chunk-signature": {
                type: "binary",
                value: getSignatureBinary(signedMessage.signature)
              }
            },
            body: chunk
          });
          this.push(serializedSigned);
          return callback();
        } catch (err) {
          callback(err);
        }
      }
    };
    function getSignatureBinary(signature) {
      const buf = Buffer.from(signature, "hex");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    var EventStreamPayloadHandler = class {
      messageSigner;
      eventStreamCodec;
      systemClockOffsetProvider;
      constructor(options) {
        this.messageSigner = options.messageSigner;
        this.eventStreamCodec = new eventstreamCodec.EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
        this.systemClockOffsetProvider = async () => options.systemClockOffset ?? 0;
      }
      async handle(next, args, context = {}) {
        const request = args.request;
        const { body: payload, query } = request;
        if (!(payload instanceof node_stream.Readable)) {
          throw new Error("Eventstream payload must be a Readable stream.");
        }
        const payloadStream = payload;
        request.body = new node_stream.PassThrough({
          objectMode: true
        });
        const match = request.headers?.authorization?.match(/Signature=([\w]+)$/);
        let priorSignature = match?.[1] ?? query?.["X-Amz-Signature"] ?? "";
        if (context.__staticSignature) {
          priorSignature = "";
        }
        const signingStream = new EventSigningTransformStream({
          priorSignature,
          eventStreamCodec: this.eventStreamCodec,
          messageSigner: await this.messageSigner(),
          systemClockOffsetProvider: this.systemClockOffsetProvider
        });
        let resolvePipeline;
        const pipelineError = new Promise((resolve, reject) => {
          resolvePipeline = () => resolve(void 0);
          node_stream.pipeline(payloadStream, signingStream, request.body, (err) => {
            if (err) {
              reject(new Error(`Pipeline error in @aws-sdk/eventstream-handler-node: ${err.message}`, { cause: err }));
            }
          });
        });
        let result;
        try {
          result = await Promise.race([next(args), pipelineError]);
        } catch (e) {
          request.body.end();
          throw e;
        } finally {
          resolvePipeline();
        }
        return result;
      }
    };
    var eventStreamPayloadHandlerProvider = (options) => new EventStreamPayloadHandler(options);
    exports.eventStreamPayloadHandlerProvider = eventStreamPayloadHandlerProvider;
  }
});

// node_modules/.pnpm/@smithy+eventstream-serde-node@4.2.12/node_modules/@smithy/eventstream-serde-node/dist-cjs/index.js
var require_dist_cjs41 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-serde-node@4.2.12/node_modules/@smithy/eventstream-serde-node/dist-cjs/index.js"(exports) {
    "use strict";
    var eventstreamSerdeUniversal = require_dist_cjs36();
    var stream = __require("stream");
    async function* readabletoIterable(readStream) {
      let streamEnded = false;
      let generationEnded = false;
      const records = new Array();
      readStream.on("error", (err) => {
        if (!streamEnded) {
          streamEnded = true;
        }
        if (err) {
          throw err;
        }
      });
      readStream.on("data", (data) => {
        records.push(data);
      });
      readStream.on("end", () => {
        streamEnded = true;
      });
      while (!generationEnded) {
        const value = await new Promise((resolve) => setTimeout(() => resolve(records.shift()), 0));
        if (value) {
          yield value;
        }
        generationEnded = streamEnded && records.length === 0;
      }
    }
    var EventStreamMarshaller = class {
      universalMarshaller;
      constructor({ utf8Encoder, utf8Decoder }) {
        this.universalMarshaller = new eventstreamSerdeUniversal.EventStreamMarshaller({
          utf8Decoder,
          utf8Encoder
        });
      }
      deserialize(body, deserializer) {
        const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
      }
      serialize(input, serializer) {
        return stream.Readable.from(this.universalMarshaller.serialize(input, serializer));
      }
    };
    var eventStreamSerdeProvider = (options) => new EventStreamMarshaller(options);
    exports.EventStreamMarshaller = EventStreamMarshaller;
    exports.eventStreamSerdeProvider = eventStreamSerdeProvider;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/endpoint/ruleset.js
var require_ruleset = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/endpoint/ruleset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleSet = void 0;
    var s = "required";
    var t = "fn";
    var u = "argv";
    var v = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = { [s]: false, "type": "string" };
    var i = { [s]: true, "default": false, "type": "boolean" };
    var j = { [v]: "Endpoint" };
    var k = { [t]: c, [u]: [{ [v]: "UseFIPS" }, true] };
    var l = { [t]: c, [u]: [{ [v]: "UseDualStack" }, true] };
    var m = {};
    var n = { [t]: "getAttr", [u]: [{ [v]: g }, "supportsFIPS"] };
    var o = { [t]: c, [u]: [true, { [t]: "getAttr", [u]: [{ [v]: g }, "supportsDualStack"] }] };
    var p = [k];
    var q = [l];
    var r = [{ [v]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { rules: [{ conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }], type: f }, { rules: [{ conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: "aws.partition", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ rules: [{ endpoint: { url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ rules: [{ endpoint: { url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ rules: [{ endpoint: { url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { rules: [{ endpoint: { url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }], type: f }] };
    exports.ruleSet = _data;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/endpoint/endpointResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs16();
    var util_endpoints_2 = require_dist_cjs15();
    var ruleset_1 = require_ruleset();
    var cache = new util_endpoints_2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return cache.get(endpointParams, () => (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    };
    exports.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/models/BedrockRuntimeServiceException.js
var require_BedrockRuntimeServiceException = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/models/BedrockRuntimeServiceException.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BedrockRuntimeServiceException = exports.__ServiceException = void 0;
    var smithy_client_1 = require_dist_cjs11();
    Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
      return smithy_client_1.ServiceException;
    } });
    var BedrockRuntimeServiceException = class _BedrockRuntimeServiceException extends smithy_client_1.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _BedrockRuntimeServiceException.prototype);
      }
    };
    exports.BedrockRuntimeServiceException = BedrockRuntimeServiceException;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/models/errors.js
var require_errors = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/models/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModelStreamErrorException = exports.ModelTimeoutException = exports.ModelNotReadyException = exports.ModelErrorException = exports.ServiceUnavailableException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.ConflictException = exports.ValidationException = exports.ThrottlingException = exports.InternalServerException = exports.AccessDeniedException = void 0;
    var BedrockRuntimeServiceException_1 = require_BedrockRuntimeServiceException();
    var AccessDeniedException = class _AccessDeniedException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "AccessDeniedException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
      }
    };
    exports.AccessDeniedException = AccessDeniedException;
    var InternalServerException = class _InternalServerException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "InternalServerException";
      $fault = "server";
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
      }
    };
    exports.InternalServerException = InternalServerException;
    var ThrottlingException = class _ThrottlingException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ThrottlingException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ThrottlingException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ThrottlingException.prototype);
      }
    };
    exports.ThrottlingException = ThrottlingException;
    var ValidationException = class _ValidationException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ValidationException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ValidationException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ValidationException.prototype);
      }
    };
    exports.ValidationException = ValidationException;
    var ConflictException = class _ConflictException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ConflictException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ConflictException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ConflictException.prototype);
      }
    };
    exports.ConflictException = ConflictException;
    var ResourceNotFoundException = class _ResourceNotFoundException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    exports.ResourceNotFoundException = ResourceNotFoundException;
    var ServiceQuotaExceededException = class _ServiceQuotaExceededException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ServiceQuotaExceededException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ServiceQuotaExceededException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ServiceQuotaExceededException.prototype);
      }
    };
    exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
    var ServiceUnavailableException = class _ServiceUnavailableException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ServiceUnavailableException";
      $fault = "server";
      constructor(opts) {
        super({
          name: "ServiceUnavailableException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _ServiceUnavailableException.prototype);
      }
    };
    exports.ServiceUnavailableException = ServiceUnavailableException;
    var ModelErrorException = class _ModelErrorException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ModelErrorException";
      $fault = "client";
      originalStatusCode;
      resourceName;
      constructor(opts) {
        super({
          name: "ModelErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ModelErrorException.prototype);
        this.originalStatusCode = opts.originalStatusCode;
        this.resourceName = opts.resourceName;
      }
    };
    exports.ModelErrorException = ModelErrorException;
    var ModelNotReadyException = class _ModelNotReadyException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ModelNotReadyException";
      $fault = "client";
      $retryable = {};
      constructor(opts) {
        super({
          name: "ModelNotReadyException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ModelNotReadyException.prototype);
      }
    };
    exports.ModelNotReadyException = ModelNotReadyException;
    var ModelTimeoutException = class _ModelTimeoutException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ModelTimeoutException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ModelTimeoutException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ModelTimeoutException.prototype);
      }
    };
    exports.ModelTimeoutException = ModelTimeoutException;
    var ModelStreamErrorException = class _ModelStreamErrorException extends BedrockRuntimeServiceException_1.BedrockRuntimeServiceException {
      name = "ModelStreamErrorException";
      $fault = "client";
      originalStatusCode;
      originalMessage;
      constructor(opts) {
        super({
          name: "ModelStreamErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ModelStreamErrorException.prototype);
        this.originalStatusCode = opts.originalStatusCode;
        this.originalMessage = opts.originalMessage;
      }
    };
    exports.ModelStreamErrorException = ModelStreamErrorException;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/schemas/schemas_0.js
var require_schemas_0 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/schemas/schemas_0.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocumentPageLocation$ = exports.DocumentChunkLocation$ = exports.DocumentCharLocation$ = exports.DocumentBlock$ = exports.CountTokensResponse$ = exports.CountTokensRequest$ = exports.ConverseTrace$ = exports.ConverseTokensRequest$ = exports.ConverseStreamTrace$ = exports.ConverseStreamResponse$ = exports.ConverseStreamRequest$ = exports.ConverseStreamMetrics$ = exports.ConverseStreamMetadataEvent$ = exports.ConverseResponse$ = exports.ConverseRequest$ = exports.ConverseMetrics$ = exports.ContentBlockStopEvent$ = exports.ContentBlockStartEvent$ = exports.ContentBlockDeltaEvent$ = exports.CitationSourceContentDelta$ = exports.CitationsDelta$ = exports.CitationsContentBlock$ = exports.CitationsConfig$ = exports.Citation$ = exports.CachePointBlock$ = exports.CacheDetail$ = exports.BidirectionalOutputPayloadPart$ = exports.BidirectionalInputPayloadPart$ = exports.AutoToolChoice$ = exports.AudioBlock$ = exports.AsyncInvokeSummary$ = exports.AsyncInvokeS3OutputDataConfig$ = exports.ApplyGuardrailResponse$ = exports.ApplyGuardrailRequest$ = exports.AppliedGuardrailDetails$ = exports.AnyToolChoice$ = exports.errorTypeRegistries = exports.ValidationException$ = exports.ThrottlingException$ = exports.ServiceUnavailableException$ = exports.ServiceQuotaExceededException$ = exports.ResourceNotFoundException$ = exports.ModelTimeoutException$ = exports.ModelStreamErrorException$ = exports.ModelNotReadyException$ = exports.ModelErrorException$ = exports.InternalServerException$ = exports.ConflictException$ = exports.AccessDeniedException$ = exports.BedrockRuntimeServiceException$ = void 0;
    exports.InvokeModelResponse$ = exports.InvokeModelRequest$ = exports.InferenceConfiguration$ = exports.ImageBlockStart$ = exports.ImageBlockDelta$ = exports.ImageBlock$ = exports.GuardrailWordPolicyAssessment$ = exports.GuardrailUsage$ = exports.GuardrailTraceAssessment$ = exports.GuardrailTopicPolicyAssessment$ = exports.GuardrailTopic$ = exports.GuardrailTextCharactersCoverage$ = exports.GuardrailTextBlock$ = exports.GuardrailStreamConfiguration$ = exports.GuardrailSensitiveInformationPolicyAssessment$ = exports.GuardrailRegexFilter$ = exports.GuardrailPiiEntityFilter$ = exports.GuardrailOutputContent$ = exports.GuardrailManagedWord$ = exports.GuardrailInvocationMetrics$ = exports.GuardrailImageCoverage$ = exports.GuardrailImageBlock$ = exports.GuardrailCustomWord$ = exports.GuardrailCoverage$ = exports.GuardrailConverseTextBlock$ = exports.GuardrailConverseImageBlock$ = exports.GuardrailContextualGroundingPolicyAssessment$ = exports.GuardrailContextualGroundingFilter$ = exports.GuardrailContentPolicyAssessment$ = exports.GuardrailContentFilter$ = exports.GuardrailConfiguration$ = exports.GuardrailAutomatedReasoningValidFinding$ = exports.GuardrailAutomatedReasoningTranslationOption$ = exports.GuardrailAutomatedReasoningTranslationAmbiguousFinding$ = exports.GuardrailAutomatedReasoningTranslation$ = exports.GuardrailAutomatedReasoningTooComplexFinding$ = exports.GuardrailAutomatedReasoningStatement$ = exports.GuardrailAutomatedReasoningScenario$ = exports.GuardrailAutomatedReasoningSatisfiableFinding$ = exports.GuardrailAutomatedReasoningRule$ = exports.GuardrailAutomatedReasoningPolicyAssessment$ = exports.GuardrailAutomatedReasoningNoTranslationsFinding$ = exports.GuardrailAutomatedReasoningLogicWarning$ = exports.GuardrailAutomatedReasoningInvalidFinding$ = exports.GuardrailAutomatedReasoningInputTextReference$ = exports.GuardrailAutomatedReasoningImpossibleFinding$ = exports.GuardrailAssessment$ = exports.GetAsyncInvokeResponse$ = exports.GetAsyncInvokeRequest$ = exports.ErrorBlock$ = void 0;
    exports.DocumentSource$ = exports.DocumentContentBlock$ = exports.CountTokensInput$ = exports.ConverseStreamOutput$ = exports.ConverseOutput$ = exports.ContentBlockStart$ = exports.ContentBlockDelta$ = exports.ContentBlock$ = exports.CitationSourceContent$ = exports.CitationLocation$ = exports.CitationGeneratedContent$ = exports.AudioSource$ = exports.AsyncInvokeOutputDataConfig$ = exports.WebLocation$ = exports.VideoBlock$ = exports.ToolUseBlockStart$ = exports.ToolUseBlockDelta$ = exports.ToolUseBlock$ = exports.ToolSpecification$ = exports.ToolResultBlockStart$ = exports.ToolResultBlock$ = exports.ToolConfiguration$ = exports.TokenUsage$ = exports.Tag$ = exports.SystemTool$ = exports.StartAsyncInvokeResponse$ = exports.StartAsyncInvokeRequest$ = exports.SpecificToolChoice$ = exports.ServiceTier$ = exports.SearchResultLocation$ = exports.SearchResultContentBlock$ = exports.SearchResultBlock$ = exports.S3Location$ = exports.ReasoningTextBlock$ = exports.PromptRouterTrace$ = exports.PerformanceConfiguration$ = exports.PayloadPart$ = exports.OutputFormat$ = exports.OutputConfig$ = exports.MessageStopEvent$ = exports.MessageStartEvent$ = exports.Message$ = exports.ListAsyncInvokesResponse$ = exports.ListAsyncInvokesRequest$ = exports.JsonSchemaDefinition$ = exports.InvokeModelWithResponseStreamResponse$ = exports.InvokeModelWithResponseStreamRequest$ = exports.InvokeModelWithBidirectionalStreamResponse$ = exports.InvokeModelWithBidirectionalStreamRequest$ = exports.InvokeModelTokensRequest$ = void 0;
    exports.StartAsyncInvoke$ = exports.ListAsyncInvokes$ = exports.InvokeModelWithResponseStream$ = exports.InvokeModelWithBidirectionalStream$ = exports.InvokeModel$ = exports.GetAsyncInvoke$ = exports.CountTokens$ = exports.ConverseStream$ = exports.Converse$ = exports.ApplyGuardrail$ = exports.VideoSource$ = exports.ToolResultContentBlock$ = exports.ToolResultBlockDelta$ = exports.ToolInputSchema$ = exports.ToolChoice$ = exports.Tool$ = exports.SystemContentBlock$ = exports.ResponseStream$ = exports.ReasoningContentBlockDelta$ = exports.ReasoningContentBlock$ = exports.PromptVariableValues$ = exports.OutputFormatStructure$ = exports.InvokeModelWithBidirectionalStreamOutput$ = exports.InvokeModelWithBidirectionalStreamInput$ = exports.ImageSource$ = exports.GuardrailImageSource$ = exports.GuardrailConverseImageSource$ = exports.GuardrailConverseContentBlock$ = exports.GuardrailContentBlock$ = exports.GuardrailAutomatedReasoningFinding$ = void 0;
    var _A = "Accept";
    var _AB = "AudioBlock";
    var _ADE = "AccessDeniedException";
    var _AG = "ApplyGuardrail";
    var _AGD = "AppliedGuardrailDetails";
    var _AGR = "ApplyGuardrailRequest";
    var _AGRp = "ApplyGuardrailResponse";
    var _AIM = "AsyncInvokeMessage";
    var _AIODC = "AsyncInvokeOutputDataConfig";
    var _AIS = "AsyncInvokeSummary";
    var _AISODC = "AsyncInvokeS3OutputDataConfig";
    var _AISs = "AsyncInvokeSummaries";
    var _AS = "AudioSource";
    var _ATC = "AnyToolChoice";
    var _ATCu = "AutoToolChoice";
    var _B = "Body";
    var _BIPP = "BidirectionalInputPayloadPart";
    var _BOPP = "BidirectionalOutputPayloadPart";
    var _C = "Citation";
    var _CB = "ContentBlocks";
    var _CBD = "ContentBlockDelta";
    var _CBDE = "ContentBlockDeltaEvent";
    var _CBS = "ContentBlockStart";
    var _CBSE = "ContentBlockStartEvent";
    var _CBSEo = "ContentBlockStopEvent";
    var _CBo = "ContentBlock";
    var _CC = "CitationsConfig";
    var _CCB = "CitationsContentBlock";
    var _CD = "CacheDetail";
    var _CDL = "CacheDetailsList";
    var _CDi = "CitationsDelta";
    var _CE = "ConflictException";
    var _CGC = "CitationGeneratedContent";
    var _CGCL = "CitationGeneratedContentList";
    var _CL = "CitationLocation";
    var _CM = "ConverseMetrics";
    var _CO = "ConverseOutput";
    var _CPB = "CachePointBlock";
    var _CR = "ConverseRequest";
    var _CRo = "ConverseResponse";
    var _CS = "ConverseStream";
    var _CSC = "CitationSourceContent";
    var _CSCD = "CitationSourceContentDelta";
    var _CSCL = "CitationSourceContentList";
    var _CSCLD = "CitationSourceContentListDelta";
    var _CSM = "ConverseStreamMetrics";
    var _CSME = "ConverseStreamMetadataEvent";
    var _CSO = "ConverseStreamOutput";
    var _CSR = "ConverseStreamRequest";
    var _CSRo = "ConverseStreamResponse";
    var _CST = "ConverseStreamTrace";
    var _CT = "ConverseTrace";
    var _CTI = "CountTokensInput";
    var _CTR = "ConverseTokensRequest";
    var _CTRo = "CountTokensRequest";
    var _CTRou = "CountTokensResponse";
    var _CT_ = "Content-Type";
    var _CTo = "CountTokens";
    var _Ci = "Citations";
    var _Co = "Converse";
    var _DB = "DocumentBlock";
    var _DCB = "DocumentContentBlocks";
    var _DCBo = "DocumentContentBlock";
    var _DCL = "DocumentCharLocation";
    var _DCLo = "DocumentChunkLocation";
    var _DPL = "DocumentPageLocation";
    var _DS = "DocumentSource";
    var _EB = "ErrorBlock";
    var _GA = "GuardrailAssessment";
    var _GAI = "GetAsyncInvoke";
    var _GAIR = "GetAsyncInvokeRequest";
    var _GAIRe = "GetAsyncInvokeResponse";
    var _GAL = "GuardrailAssessmentList";
    var _GALM = "GuardrailAssessmentListMap";
    var _GAM = "GuardrailAssessmentMap";
    var _GARDSL = "GuardrailAutomatedReasoningDifferenceScenarioList";
    var _GARF = "GuardrailAutomatedReasoningFinding";
    var _GARFL = "GuardrailAutomatedReasoningFindingList";
    var _GARIF = "GuardrailAutomatedReasoningImpossibleFinding";
    var _GARIFu = "GuardrailAutomatedReasoningInvalidFinding";
    var _GARITR = "GuardrailAutomatedReasoningInputTextReference";
    var _GARITRL = "GuardrailAutomatedReasoningInputTextReferenceList";
    var _GARLW = "GuardrailAutomatedReasoningLogicWarning";
    var _GARNTF = "GuardrailAutomatedReasoningNoTranslationsFinding";
    var _GARPA = "GuardrailAutomatedReasoningPolicyAssessment";
    var _GARR = "GuardrailAutomatedReasoningRule";
    var _GARRL = "GuardrailAutomatedReasoningRuleList";
    var _GARS = "GuardrailAutomatedReasoningScenario";
    var _GARSF = "GuardrailAutomatedReasoningSatisfiableFinding";
    var _GARSL = "GuardrailAutomatedReasoningStatementList";
    var _GARSLC = "GuardrailAutomatedReasoningStatementLogicContent";
    var _GARSNLC = "GuardrailAutomatedReasoningStatementNaturalLanguageContent";
    var _GARSu = "GuardrailAutomatedReasoningStatement";
    var _GART = "GuardrailAutomatedReasoningTranslation";
    var _GARTAF = "GuardrailAutomatedReasoningTranslationAmbiguousFinding";
    var _GARTCF = "GuardrailAutomatedReasoningTooComplexFinding";
    var _GARTL = "GuardrailAutomatedReasoningTranslationList";
    var _GARTO = "GuardrailAutomatedReasoningTranslationOption";
    var _GARTOL = "GuardrailAutomatedReasoningTranslationOptionList";
    var _GARVF = "GuardrailAutomatedReasoningValidFinding";
    var _GC = "GuardrailConfiguration";
    var _GCB = "GuardrailContentBlock";
    var _GCBL = "GuardrailContentBlockList";
    var _GCCB = "GuardrailConverseContentBlock";
    var _GCF = "GuardrailContentFilter";
    var _GCFL = "GuardrailContentFilterList";
    var _GCGF = "GuardrailContextualGroundingFilter";
    var _GCGFu = "GuardrailContextualGroundingFilters";
    var _GCGPA = "GuardrailContextualGroundingPolicyAssessment";
    var _GCIB = "GuardrailConverseImageBlock";
    var _GCIS = "GuardrailConverseImageSource";
    var _GCPA = "GuardrailContentPolicyAssessment";
    var _GCTB = "GuardrailConverseTextBlock";
    var _GCW = "GuardrailCustomWord";
    var _GCWL = "GuardrailCustomWordList";
    var _GCu = "GuardrailCoverage";
    var _GIB = "GuardrailImageBlock";
    var _GIC = "GuardrailImageCoverage";
    var _GIM = "GuardrailInvocationMetrics";
    var _GIS = "GuardrailImageSource";
    var _GMW = "GuardrailManagedWord";
    var _GMWL = "GuardrailManagedWordList";
    var _GOC = "GuardrailOutputContent";
    var _GOCL = "GuardrailOutputContentList";
    var _GPEF = "GuardrailPiiEntityFilter";
    var _GPEFL = "GuardrailPiiEntityFilterList";
    var _GRF = "GuardrailRegexFilter";
    var _GRFL = "GuardrailRegexFilterList";
    var _GSC = "GuardrailStreamConfiguration";
    var _GSIPA = "GuardrailSensitiveInformationPolicyAssessment";
    var _GT = "GuardrailTopic";
    var _GTA = "GuardrailTraceAssessment";
    var _GTB = "GuardrailTextBlock";
    var _GTCC = "GuardrailTextCharactersCoverage";
    var _GTL = "GuardrailTopicList";
    var _GTPA = "GuardrailTopicPolicyAssessment";
    var _GU = "GuardrailUsage";
    var _GWPA = "GuardrailWordPolicyAssessment";
    var _IB = "ImageBlock";
    var _IBD = "ImageBlockDelta";
    var _IBS = "ImageBlockStart";
    var _IC = "InferenceConfiguration";
    var _IM = "InvokeModel";
    var _IMR = "InvokeModelRequest";
    var _IMRn = "InvokeModelResponse";
    var _IMTR = "InvokeModelTokensRequest";
    var _IMWBS = "InvokeModelWithBidirectionalStream";
    var _IMWBSI = "InvokeModelWithBidirectionalStreamInput";
    var _IMWBSO = "InvokeModelWithBidirectionalStreamOutput";
    var _IMWBSR = "InvokeModelWithBidirectionalStreamRequest";
    var _IMWBSRn = "InvokeModelWithBidirectionalStreamResponse";
    var _IMWRS = "InvokeModelWithResponseStream";
    var _IMWRSR = "InvokeModelWithResponseStreamRequest";
    var _IMWRSRn = "InvokeModelWithResponseStreamResponse";
    var _IS = "ImageSource";
    var _ISE = "InternalServerException";
    var _JSD = "JsonSchemaDefinition";
    var _LAI = "ListAsyncInvokes";
    var _LAIR = "ListAsyncInvokesRequest";
    var _LAIRi = "ListAsyncInvokesResponse";
    var _M = "Message";
    var _MEE = "ModelErrorException";
    var _MIP = "ModelInputPayload";
    var _MNRE = "ModelNotReadyException";
    var _MSE = "MessageStartEvent";
    var _MSEE = "ModelStreamErrorException";
    var _MSEe = "MessageStopEvent";
    var _MTE = "ModelTimeoutException";
    var _Me = "Messages";
    var _OC = "OutputConfig";
    var _OF = "OutputFormat";
    var _OFS = "OutputFormatStructure";
    var _PB = "PartBody";
    var _PC = "PerformanceConfiguration";
    var _PP = "PayloadPart";
    var _PRT = "PromptRouterTrace";
    var _PVM = "PromptVariableMap";
    var _PVV = "PromptVariableValues";
    var _RCB = "ReasoningContentBlock";
    var _RCBD = "ReasoningContentBlockDelta";
    var _RM = "RequestMetadata";
    var _RNFE = "ResourceNotFoundException";
    var _RS = "ResponseStream";
    var _RTB = "ReasoningTextBlock";
    var _SAI = "StartAsyncInvoke";
    var _SAIR = "StartAsyncInvokeRequest";
    var _SAIRt = "StartAsyncInvokeResponse";
    var _SCB = "SystemContentBlocks";
    var _SCBy = "SystemContentBlock";
    var _SL = "S3Location";
    var _SQEE = "ServiceQuotaExceededException";
    var _SRB = "SearchResultBlock";
    var _SRCB = "SearchResultContentBlock";
    var _SRCBe = "SearchResultContentBlocks";
    var _SRL = "SearchResultLocation";
    var _ST = "ServiceTier";
    var _STC = "SpecificToolChoice";
    var _STy = "SystemTool";
    var _SUE = "ServiceUnavailableException";
    var _T = "Tag";
    var _TC = "ToolConfiguration";
    var _TCo = "ToolChoice";
    var _TE = "ThrottlingException";
    var _TIS = "ToolInputSchema";
    var _TL = "TagList";
    var _TRB = "ToolResultBlock";
    var _TRBD = "ToolResultBlocksDelta";
    var _TRBDo = "ToolResultBlockDelta";
    var _TRBS = "ToolResultBlockStart";
    var _TRCB = "ToolResultContentBlocks";
    var _TRCBo = "ToolResultContentBlock";
    var _TS = "ToolSpecification";
    var _TU = "TokenUsage";
    var _TUB = "ToolUseBlock";
    var _TUBD = "ToolUseBlockDelta";
    var _TUBS = "ToolUseBlockStart";
    var _To = "Tools";
    var _Too = "Tool";
    var _VB = "VideoBlock";
    var _VE = "ValidationException";
    var _VS = "VideoSource";
    var _WL = "WebLocation";
    var _XABA = "X-Amzn-Bedrock-Accept";
    var _XABCT = "X-Amzn-Bedrock-Content-Type";
    var _XABG = "X-Amzn-Bedrock-GuardrailIdentifier";
    var _XABG_ = "X-Amzn-Bedrock-GuardrailVersion";
    var _XABPL = "X-Amzn-Bedrock-PerformanceConfig-Latency";
    var _XABST = "X-Amzn-Bedrock-Service-Tier";
    var _XABT = "X-Amzn-Bedrock-Trace";
    var _a = "action";
    var _aGD = "appliedGuardrailDetails";
    var _aIS = "asyncInvokeSummaries";
    var _aMRF = "additionalModelRequestFields";
    var _aMRFP = "additionalModelResponseFieldPaths";
    var _aMRFd = "additionalModelResponseFields";
    var _aR = "actionReason";
    var _aRP = "automatedReasoningPolicy";
    var _aRPU = "automatedReasoningPolicyUnits";
    var _aRPu = "automatedReasoningPolicies";
    var _ac = "accept";
    var _an = "any";
    var _as = "assessments";
    var _au = "audio";
    var _aut = "auto";
    var _b = "bytes";
    var _bO = "bucketOwner";
    var _bo = "body";
    var _c = "client";
    var _cBD = "contentBlockDelta";
    var _cBI = "contentBlockIndex";
    var _cBS = "contentBlockStart";
    var _cBSo = "contentBlockStop";
    var _cC = "citationsContent";
    var _cD = "cacheDetails";
    var _cFS = "claimsFalseScenario";
    var _cGP = "contextualGroundingPolicy";
    var _cGPU = "contextualGroundingPolicyUnits";
    var _cP = "contentPolicy";
    var _cPIU = "contentPolicyImageUnits";
    var _cPU = "contentPolicyUnits";
    var _cPa = "cachePoint";
    var _cR = "contradictingRules";
    var _cRIT = "cacheReadInputTokens";
    var _cRT = "clientRequestToken";
    var _cT = "contentType";
    var _cTS = "claimsTrueScenario";
    var _cW = "customWords";
    var _cWIT = "cacheWriteInputTokens";
    var _ch = "chunk";
    var _ci = "citations";
    var _cit = "citation";
    var _cl = "claims";
    var _co = "content";
    var _con = "context";
    var _conf = "confidence";
    var _conv = "converse";
    var _d = "delta";
    var _dC = "documentChar";
    var _dCo = "documentChunk";
    var _dI = "documentIndex";
    var _dP = "documentPage";
    var _dS = "differenceScenarios";
    var _de = "detected";
    var _des = "description";
    var _do = "domain";
    var _doc = "document";
    var _e = "error";
    var _eT = "endTime";
    var _en = "enabled";
    var _end = "end";
    var _f = "format";
    var _fM = "failureMessage";
    var _fS = "filterStrength";
    var _fi = "findings";
    var _fil = "filters";
    var _g = "guardrail";
    var _gA = "guardrailArn";
    var _gC = "guardrailCoverage";
    var _gCu = "guardrailConfig";
    var _gCua = "guardContent";
    var _gI = "guardrailId";
    var _gIu = "guardrailIdentifier";
    var _gO = "guardrailOrigin";
    var _gOu = "guardrailOwnership";
    var _gPL = "guardrailProcessingLatency";
    var _gV = "guardrailVersion";
    var _gu = "guarded";
    var _h = "http";
    var _hE = "httpError";
    var _hH = "httpHeader";
    var _hQ = "httpQuery";
    var _i = "input";
    var _iA = "invocationArn";
    var _iAn = "inputAssessment";
    var _iC = "inferenceConfig";
    var _iM = "invocationMetrics";
    var _iMI = "invokedModelId";
    var _iMn = "invokeModel";
    var _iS = "inputSchema";
    var _iSE = "internalServerException";
    var _iT = "inputTokens";
    var _id = "identifier";
    var _im = "images";
    var _ima = "image";
    var _imp = "impossible";
    var _in = "invalid";
    var _j = "json";
    var _jS = "jsonSchema";
    var _k = "key";
    var _kKI = "kmsKeyId";
    var _l = "location";
    var _lM = "latencyMs";
    var _lMT = "lastModifiedTime";
    var _lW = "logicWarning";
    var _la = "latency";
    var _lo = "logic";
    var _m = "message";
    var _mA = "modelArn";
    var _mI = "modelId";
    var _mIo = "modelInput";
    var _mO = "modelOutput";
    var _mR = "maxResults";
    var _mS = "messageStart";
    var _mSEE = "modelStreamErrorException";
    var _mSe = "messageStop";
    var _mT = "maxTokens";
    var _mTE = "modelTimeoutException";
    var _mWL = "managedWordLists";
    var _ma = "match";
    var _me = "messages";
    var _met = "metrics";
    var _meta = "metadata";
    var _n = "name";
    var _nL = "naturalLanguage";
    var _nT = "nextToken";
    var _nTo = "noTranslations";
    var _o = "outputs";
    var _oA = "outputAssessments";
    var _oC = "outputConfig";
    var _oDC = "outputDataConfig";
    var _oM = "originalMessage";
    var _oS = "outputScope";
    var _oSC = "originalStatusCode";
    var _oT = "outputTokens";
    var _op = "options";
    var _ou = "output";
    var _p = "premises";
    var _pC = "performanceConfig";
    var _pCL = "performanceConfigLatency";
    var _pE = "piiEntities";
    var _pR = "promptRouter";
    var _pV = "promptVariables";
    var _pVA = "policyVersionArn";
    var _q = "qualifiers";
    var _r = "regex";
    var _rC = "reasoningContent";
    var _rCe = "redactedContent";
    var _rM = "requestMetadata";
    var _rN = "resourceName";
    var _rT = "reasoningText";
    var _re = "regexes";
    var _ro = "role";
    var _s = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime";
    var _sB = "sortBy";
    var _sC = "sourceContent";
    var _sE = "statusEquals";
    var _sIP = "sensitiveInformationPolicy";
    var _sIPFU = "sensitiveInformationPolicyFreeUnits";
    var _sIPU = "sensitiveInformationPolicyUnits";
    var _sL = "s3Location";
    var _sO = "sortOrder";
    var _sODC = "s3OutputDataConfig";
    var _sPM = "streamProcessingMode";
    var _sR = "stopReason";
    var _sRI = "searchResultIndex";
    var _sRL = "searchResultLocation";
    var _sRe = "searchResult";
    var _sRu = "supportingRules";
    var _sS = "stopSequences";
    var _sT = "submitTime";
    var _sTA = "submitTimeAfter";
    var _sTB = "submitTimeBefore";
    var _sTe = "serviceTier";
    var _sTy = "systemTool";
    var _sU = "s3Uri";
    var _sUE = "serviceUnavailableException";
    var _sa = "satisfiable";
    var _sc = "score";
    var _sch = "schema";
    var _se = "server";
    var _si = "signature";
    var _so = "source";
    var _st = "status";
    var _sta = "start";
    var _stat = "statements";
    var _str = "stream";
    var _stre = "streaming";
    var _stri = "strict";
    var _stru = "structure";
    var _sy = "system";
    var _t = "ttl";
    var _tA = "translationAmbiguous";
    var _tC = "toolConfig";
    var _tCe = "textCharacters";
    var _tCo = "toolChoice";
    var _tCoo = "tooComplex";
    var _tE = "throttlingException";
    var _tF = "textFormat";
    var _tP = "topicPolicy";
    var _tPU = "topicPolicyUnits";
    var _tPo = "topP";
    var _tR = "toolResult";
    var _tS = "toolSpec";
    var _tT = "totalTokens";
    var _tU = "toolUse";
    var _tUI = "toolUseId";
    var _ta = "tags";
    var _te = "text";
    var _tem = "temperature";
    var _th = "threshold";
    var _ti = "title";
    var _to = "total";
    var _too = "tools";
    var _tool = "tool";
    var _top = "topics";
    var _tr = "trace";
    var _tra = "translation";
    var _tran = "translations";
    var _ty = "type";
    var _u = "usage";
    var _uC = "untranslatedClaims";
    var _uP = "untranslatedPremises";
    var _ur = "uri";
    var _url = "url";
    var _v = "value";
    var _vE = "validationException";
    var _va = "valid";
    var _vi = "video";
    var _w = "web";
    var _wP = "wordPolicy";
    var _wPU = "wordPolicyUnits";
    var n0 = "com.amazonaws.bedrockruntime";
    var schema_1 = (init_schema(), __toCommonJS(schema_exports));
    var BedrockRuntimeServiceException_1 = require_BedrockRuntimeServiceException();
    var errors_1 = require_errors();
    var _s_registry = schema_1.TypeRegistry.for(_s);
    exports.BedrockRuntimeServiceException$ = [-3, _s, "BedrockRuntimeServiceException", 0, [], []];
    _s_registry.registerError(exports.BedrockRuntimeServiceException$, BedrockRuntimeServiceException_1.BedrockRuntimeServiceException);
    var n0_registry = schema_1.TypeRegistry.for(n0);
    exports.AccessDeniedException$ = [
      -3,
      n0,
      _ADE,
      { [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.AccessDeniedException$, errors_1.AccessDeniedException);
    exports.ConflictException$ = [
      -3,
      n0,
      _CE,
      { [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ConflictException$, errors_1.ConflictException);
    exports.InternalServerException$ = [
      -3,
      n0,
      _ISE,
      { [_e]: _se, [_hE]: 500 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.InternalServerException$, errors_1.InternalServerException);
    exports.ModelErrorException$ = [
      -3,
      n0,
      _MEE,
      { [_e]: _c, [_hE]: 424 },
      [_m, _oSC, _rN],
      [0, 1, 0]
    ];
    n0_registry.registerError(exports.ModelErrorException$, errors_1.ModelErrorException);
    exports.ModelNotReadyException$ = [
      -3,
      n0,
      _MNRE,
      { [_e]: _c, [_hE]: 429 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ModelNotReadyException$, errors_1.ModelNotReadyException);
    exports.ModelStreamErrorException$ = [
      -3,
      n0,
      _MSEE,
      { [_e]: _c, [_hE]: 424 },
      [_m, _oSC, _oM],
      [0, 1, 0]
    ];
    n0_registry.registerError(exports.ModelStreamErrorException$, errors_1.ModelStreamErrorException);
    exports.ModelTimeoutException$ = [
      -3,
      n0,
      _MTE,
      { [_e]: _c, [_hE]: 408 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ModelTimeoutException$, errors_1.ModelTimeoutException);
    exports.ResourceNotFoundException$ = [
      -3,
      n0,
      _RNFE,
      { [_e]: _c, [_hE]: 404 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
    exports.ServiceQuotaExceededException$ = [
      -3,
      n0,
      _SQEE,
      { [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ServiceQuotaExceededException$, errors_1.ServiceQuotaExceededException);
    exports.ServiceUnavailableException$ = [
      -3,
      n0,
      _SUE,
      { [_e]: _se, [_hE]: 503 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ServiceUnavailableException$, errors_1.ServiceUnavailableException);
    exports.ThrottlingException$ = [
      -3,
      n0,
      _TE,
      { [_e]: _c, [_hE]: 429 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ThrottlingException$, errors_1.ThrottlingException);
    exports.ValidationException$ = [
      -3,
      n0,
      _VE,
      { [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ValidationException$, errors_1.ValidationException);
    exports.errorTypeRegistries = [
      _s_registry,
      n0_registry
    ];
    var AsyncInvokeMessage = [0, n0, _AIM, 8, 0];
    var Body = [0, n0, _B, 8, 21];
    var GuardrailAutomatedReasoningStatementLogicContent = [0, n0, _GARSLC, 8, 0];
    var GuardrailAutomatedReasoningStatementNaturalLanguageContent = [0, n0, _GARSNLC, 8, 0];
    var ModelInputPayload = [0, n0, _MIP, 8, 15];
    var PartBody = [0, n0, _PB, 8, 21];
    exports.AnyToolChoice$ = [
      3,
      n0,
      _ATC,
      0,
      [],
      []
    ];
    exports.AppliedGuardrailDetails$ = [
      3,
      n0,
      _AGD,
      0,
      [_gI, _gV, _gA, _gO, _gOu],
      [0, 0, 0, 64 | 0, 0]
    ];
    exports.ApplyGuardrailRequest$ = [
      3,
      n0,
      _AGR,
      0,
      [_gIu, _gV, _so, _co, _oS],
      [[0, 1], [0, 1], 0, [() => GuardrailContentBlockList, 0], 0],
      4
    ];
    exports.ApplyGuardrailResponse$ = [
      3,
      n0,
      _AGRp,
      0,
      [_u, _a, _o, _as, _aR, _gC],
      [() => exports.GuardrailUsage$, 0, () => GuardrailOutputContentList, [() => GuardrailAssessmentList, 0], 0, () => exports.GuardrailCoverage$],
      4
    ];
    exports.AsyncInvokeS3OutputDataConfig$ = [
      3,
      n0,
      _AISODC,
      0,
      [_sU, _kKI, _bO],
      [0, 0, 0],
      1
    ];
    exports.AsyncInvokeSummary$ = [
      3,
      n0,
      _AIS,
      0,
      [_iA, _mA, _sT, _oDC, _cRT, _st, _fM, _lMT, _eT],
      [0, 0, 5, () => exports.AsyncInvokeOutputDataConfig$, 0, 0, [() => AsyncInvokeMessage, 0], 5, 5],
      4
    ];
    exports.AudioBlock$ = [
      3,
      n0,
      _AB,
      0,
      [_f, _so, _e],
      [0, [() => exports.AudioSource$, 0], [() => exports.ErrorBlock$, 0]],
      2
    ];
    exports.AutoToolChoice$ = [
      3,
      n0,
      _ATCu,
      0,
      [],
      []
    ];
    exports.BidirectionalInputPayloadPart$ = [
      3,
      n0,
      _BIPP,
      8,
      [_b],
      [[() => PartBody, 0]]
    ];
    exports.BidirectionalOutputPayloadPart$ = [
      3,
      n0,
      _BOPP,
      8,
      [_b],
      [[() => PartBody, 0]]
    ];
    exports.CacheDetail$ = [
      3,
      n0,
      _CD,
      0,
      [_t, _iT],
      [0, 1],
      2
    ];
    exports.CachePointBlock$ = [
      3,
      n0,
      _CPB,
      0,
      [_ty, _t],
      [0, 0],
      1
    ];
    exports.Citation$ = [
      3,
      n0,
      _C,
      0,
      [_ti, _so, _sC, _l],
      [0, 0, () => CitationSourceContentList, () => exports.CitationLocation$]
    ];
    exports.CitationsConfig$ = [
      3,
      n0,
      _CC,
      0,
      [_en],
      [2],
      1
    ];
    exports.CitationsContentBlock$ = [
      3,
      n0,
      _CCB,
      0,
      [_co, _ci],
      [() => CitationGeneratedContentList, () => Citations]
    ];
    exports.CitationsDelta$ = [
      3,
      n0,
      _CDi,
      0,
      [_ti, _so, _sC, _l],
      [0, 0, () => CitationSourceContentListDelta, () => exports.CitationLocation$]
    ];
    exports.CitationSourceContentDelta$ = [
      3,
      n0,
      _CSCD,
      0,
      [_te],
      [0]
    ];
    exports.ContentBlockDeltaEvent$ = [
      3,
      n0,
      _CBDE,
      0,
      [_d, _cBI],
      [[() => exports.ContentBlockDelta$, 0], 1],
      2
    ];
    exports.ContentBlockStartEvent$ = [
      3,
      n0,
      _CBSE,
      0,
      [_sta, _cBI],
      [() => exports.ContentBlockStart$, 1],
      2
    ];
    exports.ContentBlockStopEvent$ = [
      3,
      n0,
      _CBSEo,
      0,
      [_cBI],
      [1],
      1
    ];
    exports.ConverseMetrics$ = [
      3,
      n0,
      _CM,
      0,
      [_lM],
      [1],
      1
    ];
    exports.ConverseRequest$ = [
      3,
      n0,
      _CR,
      0,
      [_mI, _me, _sy, _iC, _tC, _gCu, _aMRF, _pV, _aMRFP, _rM, _pC, _sTe, _oC],
      [[0, 1], [() => Messages, 0], [() => SystemContentBlocks, 0], () => exports.InferenceConfiguration$, () => exports.ToolConfiguration$, () => exports.GuardrailConfiguration$, 15, [() => PromptVariableMap, 0], 64 | 0, [() => RequestMetadata, 0], () => exports.PerformanceConfiguration$, () => exports.ServiceTier$, [() => exports.OutputConfig$, 0]],
      1
    ];
    exports.ConverseResponse$ = [
      3,
      n0,
      _CRo,
      0,
      [_ou, _sR, _u, _met, _aMRFd, _tr, _pC, _sTe],
      [[() => exports.ConverseOutput$, 0], 0, () => exports.TokenUsage$, () => exports.ConverseMetrics$, 15, [() => exports.ConverseTrace$, 0], () => exports.PerformanceConfiguration$, () => exports.ServiceTier$],
      4
    ];
    exports.ConverseStreamMetadataEvent$ = [
      3,
      n0,
      _CSME,
      0,
      [_u, _met, _tr, _pC, _sTe],
      [() => exports.TokenUsage$, () => exports.ConverseStreamMetrics$, [() => exports.ConverseStreamTrace$, 0], () => exports.PerformanceConfiguration$, () => exports.ServiceTier$],
      2
    ];
    exports.ConverseStreamMetrics$ = [
      3,
      n0,
      _CSM,
      0,
      [_lM],
      [1],
      1
    ];
    exports.ConverseStreamRequest$ = [
      3,
      n0,
      _CSR,
      0,
      [_mI, _me, _sy, _iC, _tC, _gCu, _aMRF, _pV, _aMRFP, _rM, _pC, _sTe, _oC],
      [[0, 1], [() => Messages, 0], [() => SystemContentBlocks, 0], () => exports.InferenceConfiguration$, () => exports.ToolConfiguration$, () => exports.GuardrailStreamConfiguration$, 15, [() => PromptVariableMap, 0], 64 | 0, [() => RequestMetadata, 0], () => exports.PerformanceConfiguration$, () => exports.ServiceTier$, [() => exports.OutputConfig$, 0]],
      1
    ];
    exports.ConverseStreamResponse$ = [
      3,
      n0,
      _CSRo,
      0,
      [_str],
      [[() => exports.ConverseStreamOutput$, 16]]
    ];
    exports.ConverseStreamTrace$ = [
      3,
      n0,
      _CST,
      0,
      [_g, _pR],
      [[() => exports.GuardrailTraceAssessment$, 0], () => exports.PromptRouterTrace$]
    ];
    exports.ConverseTokensRequest$ = [
      3,
      n0,
      _CTR,
      0,
      [_me, _sy, _tC, _aMRF],
      [[() => Messages, 0], [() => SystemContentBlocks, 0], () => exports.ToolConfiguration$, 15]
    ];
    exports.ConverseTrace$ = [
      3,
      n0,
      _CT,
      0,
      [_g, _pR],
      [[() => exports.GuardrailTraceAssessment$, 0], () => exports.PromptRouterTrace$]
    ];
    exports.CountTokensRequest$ = [
      3,
      n0,
      _CTRo,
      0,
      [_mI, _i],
      [[0, 1], [() => exports.CountTokensInput$, 0]],
      2
    ];
    exports.CountTokensResponse$ = [
      3,
      n0,
      _CTRou,
      0,
      [_iT],
      [1],
      1
    ];
    exports.DocumentBlock$ = [
      3,
      n0,
      _DB,
      0,
      [_n, _so, _f, _con, _ci],
      [0, () => exports.DocumentSource$, 0, 0, () => exports.CitationsConfig$],
      2
    ];
    exports.DocumentCharLocation$ = [
      3,
      n0,
      _DCL,
      0,
      [_dI, _sta, _end],
      [1, 1, 1]
    ];
    exports.DocumentChunkLocation$ = [
      3,
      n0,
      _DCLo,
      0,
      [_dI, _sta, _end],
      [1, 1, 1]
    ];
    exports.DocumentPageLocation$ = [
      3,
      n0,
      _DPL,
      0,
      [_dI, _sta, _end],
      [1, 1, 1]
    ];
    exports.ErrorBlock$ = [
      3,
      n0,
      _EB,
      8,
      [_m],
      [0]
    ];
    exports.GetAsyncInvokeRequest$ = [
      3,
      n0,
      _GAIR,
      0,
      [_iA],
      [[0, 1]],
      1
    ];
    exports.GetAsyncInvokeResponse$ = [
      3,
      n0,
      _GAIRe,
      0,
      [_iA, _mA, _st, _sT, _oDC, _cRT, _fM, _lMT, _eT],
      [0, 0, 0, 5, () => exports.AsyncInvokeOutputDataConfig$, 0, [() => AsyncInvokeMessage, 0], 5, 5],
      5
    ];
    exports.GuardrailAssessment$ = [
      3,
      n0,
      _GA,
      0,
      [_tP, _cP, _wP, _sIP, _cGP, _aRP, _iM, _aGD],
      [() => exports.GuardrailTopicPolicyAssessment$, () => exports.GuardrailContentPolicyAssessment$, () => exports.GuardrailWordPolicyAssessment$, () => exports.GuardrailSensitiveInformationPolicyAssessment$, () => exports.GuardrailContextualGroundingPolicyAssessment$, [() => exports.GuardrailAutomatedReasoningPolicyAssessment$, 0], () => exports.GuardrailInvocationMetrics$, () => exports.AppliedGuardrailDetails$]
    ];
    exports.GuardrailAutomatedReasoningImpossibleFinding$ = [
      3,
      n0,
      _GARIF,
      0,
      [_tra, _cR, _lW],
      [[() => exports.GuardrailAutomatedReasoningTranslation$, 0], () => GuardrailAutomatedReasoningRuleList, [() => exports.GuardrailAutomatedReasoningLogicWarning$, 0]]
    ];
    exports.GuardrailAutomatedReasoningInputTextReference$ = [
      3,
      n0,
      _GARITR,
      0,
      [_te],
      [[() => GuardrailAutomatedReasoningStatementNaturalLanguageContent, 0]]
    ];
    exports.GuardrailAutomatedReasoningInvalidFinding$ = [
      3,
      n0,
      _GARIFu,
      0,
      [_tra, _cR, _lW],
      [[() => exports.GuardrailAutomatedReasoningTranslation$, 0], () => GuardrailAutomatedReasoningRuleList, [() => exports.GuardrailAutomatedReasoningLogicWarning$, 0]]
    ];
    exports.GuardrailAutomatedReasoningLogicWarning$ = [
      3,
      n0,
      _GARLW,
      0,
      [_ty, _p, _cl],
      [0, [() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningStatementList, 0]]
    ];
    exports.GuardrailAutomatedReasoningNoTranslationsFinding$ = [
      3,
      n0,
      _GARNTF,
      0,
      [],
      []
    ];
    exports.GuardrailAutomatedReasoningPolicyAssessment$ = [
      3,
      n0,
      _GARPA,
      0,
      [_fi],
      [[() => GuardrailAutomatedReasoningFindingList, 0]]
    ];
    exports.GuardrailAutomatedReasoningRule$ = [
      3,
      n0,
      _GARR,
      0,
      [_id, _pVA],
      [0, 0]
    ];
    exports.GuardrailAutomatedReasoningSatisfiableFinding$ = [
      3,
      n0,
      _GARSF,
      0,
      [_tra, _cTS, _cFS, _lW],
      [[() => exports.GuardrailAutomatedReasoningTranslation$, 0], [() => exports.GuardrailAutomatedReasoningScenario$, 0], [() => exports.GuardrailAutomatedReasoningScenario$, 0], [() => exports.GuardrailAutomatedReasoningLogicWarning$, 0]]
    ];
    exports.GuardrailAutomatedReasoningScenario$ = [
      3,
      n0,
      _GARS,
      0,
      [_stat],
      [[() => GuardrailAutomatedReasoningStatementList, 0]]
    ];
    exports.GuardrailAutomatedReasoningStatement$ = [
      3,
      n0,
      _GARSu,
      0,
      [_lo, _nL],
      [[() => GuardrailAutomatedReasoningStatementLogicContent, 0], [() => GuardrailAutomatedReasoningStatementNaturalLanguageContent, 0]]
    ];
    exports.GuardrailAutomatedReasoningTooComplexFinding$ = [
      3,
      n0,
      _GARTCF,
      0,
      [],
      []
    ];
    exports.GuardrailAutomatedReasoningTranslation$ = [
      3,
      n0,
      _GART,
      0,
      [_p, _cl, _uP, _uC, _conf],
      [[() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningInputTextReferenceList, 0], [() => GuardrailAutomatedReasoningInputTextReferenceList, 0], 1]
    ];
    exports.GuardrailAutomatedReasoningTranslationAmbiguousFinding$ = [
      3,
      n0,
      _GARTAF,
      0,
      [_op, _dS],
      [[() => GuardrailAutomatedReasoningTranslationOptionList, 0], [() => GuardrailAutomatedReasoningDifferenceScenarioList, 0]]
    ];
    exports.GuardrailAutomatedReasoningTranslationOption$ = [
      3,
      n0,
      _GARTO,
      0,
      [_tran],
      [[() => GuardrailAutomatedReasoningTranslationList, 0]]
    ];
    exports.GuardrailAutomatedReasoningValidFinding$ = [
      3,
      n0,
      _GARVF,
      0,
      [_tra, _cTS, _sRu, _lW],
      [[() => exports.GuardrailAutomatedReasoningTranslation$, 0], [() => exports.GuardrailAutomatedReasoningScenario$, 0], () => GuardrailAutomatedReasoningRuleList, [() => exports.GuardrailAutomatedReasoningLogicWarning$, 0]]
    ];
    exports.GuardrailConfiguration$ = [
      3,
      n0,
      _GC,
      0,
      [_gIu, _gV, _tr],
      [0, 0, 0]
    ];
    exports.GuardrailContentFilter$ = [
      3,
      n0,
      _GCF,
      0,
      [_ty, _conf, _a, _fS, _de],
      [0, 0, 0, 0, 2],
      3
    ];
    exports.GuardrailContentPolicyAssessment$ = [
      3,
      n0,
      _GCPA,
      0,
      [_fil],
      [() => GuardrailContentFilterList],
      1
    ];
    exports.GuardrailContextualGroundingFilter$ = [
      3,
      n0,
      _GCGF,
      0,
      [_ty, _th, _sc, _a, _de],
      [0, 1, 1, 0, 2],
      4
    ];
    exports.GuardrailContextualGroundingPolicyAssessment$ = [
      3,
      n0,
      _GCGPA,
      0,
      [_fil],
      [() => GuardrailContextualGroundingFilters]
    ];
    exports.GuardrailConverseImageBlock$ = [
      3,
      n0,
      _GCIB,
      8,
      [_f, _so],
      [0, [() => exports.GuardrailConverseImageSource$, 0]],
      2
    ];
    exports.GuardrailConverseTextBlock$ = [
      3,
      n0,
      _GCTB,
      0,
      [_te, _q],
      [0, 64 | 0],
      1
    ];
    exports.GuardrailCoverage$ = [
      3,
      n0,
      _GCu,
      0,
      [_tCe, _im],
      [() => exports.GuardrailTextCharactersCoverage$, () => exports.GuardrailImageCoverage$]
    ];
    exports.GuardrailCustomWord$ = [
      3,
      n0,
      _GCW,
      0,
      [_ma, _a, _de],
      [0, 0, 2],
      2
    ];
    exports.GuardrailImageBlock$ = [
      3,
      n0,
      _GIB,
      8,
      [_f, _so],
      [0, [() => exports.GuardrailImageSource$, 0]],
      2
    ];
    exports.GuardrailImageCoverage$ = [
      3,
      n0,
      _GIC,
      0,
      [_gu, _to],
      [1, 1]
    ];
    exports.GuardrailInvocationMetrics$ = [
      3,
      n0,
      _GIM,
      0,
      [_gPL, _u, _gC],
      [1, () => exports.GuardrailUsage$, () => exports.GuardrailCoverage$]
    ];
    exports.GuardrailManagedWord$ = [
      3,
      n0,
      _GMW,
      0,
      [_ma, _ty, _a, _de],
      [0, 0, 0, 2],
      3
    ];
    exports.GuardrailOutputContent$ = [
      3,
      n0,
      _GOC,
      0,
      [_te],
      [0]
    ];
    exports.GuardrailPiiEntityFilter$ = [
      3,
      n0,
      _GPEF,
      0,
      [_ma, _ty, _a, _de],
      [0, 0, 0, 2],
      3
    ];
    exports.GuardrailRegexFilter$ = [
      3,
      n0,
      _GRF,
      0,
      [_a, _n, _ma, _r, _de],
      [0, 0, 0, 0, 2],
      1
    ];
    exports.GuardrailSensitiveInformationPolicyAssessment$ = [
      3,
      n0,
      _GSIPA,
      0,
      [_pE, _re],
      [() => GuardrailPiiEntityFilterList, () => GuardrailRegexFilterList],
      2
    ];
    exports.GuardrailStreamConfiguration$ = [
      3,
      n0,
      _GSC,
      0,
      [_gIu, _gV, _tr, _sPM],
      [0, 0, 0, 0]
    ];
    exports.GuardrailTextBlock$ = [
      3,
      n0,
      _GTB,
      0,
      [_te, _q],
      [0, 64 | 0],
      1
    ];
    exports.GuardrailTextCharactersCoverage$ = [
      3,
      n0,
      _GTCC,
      0,
      [_gu, _to],
      [1, 1]
    ];
    exports.GuardrailTopic$ = [
      3,
      n0,
      _GT,
      0,
      [_n, _ty, _a, _de],
      [0, 0, 0, 2],
      3
    ];
    exports.GuardrailTopicPolicyAssessment$ = [
      3,
      n0,
      _GTPA,
      0,
      [_top],
      [() => GuardrailTopicList],
      1
    ];
    exports.GuardrailTraceAssessment$ = [
      3,
      n0,
      _GTA,
      0,
      [_mO, _iAn, _oA, _aR],
      [64 | 0, [() => GuardrailAssessmentMap, 0], [() => GuardrailAssessmentListMap, 0], 0]
    ];
    exports.GuardrailUsage$ = [
      3,
      n0,
      _GU,
      0,
      [_tPU, _cPU, _wPU, _sIPU, _sIPFU, _cGPU, _cPIU, _aRPU, _aRPu],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      6
    ];
    exports.GuardrailWordPolicyAssessment$ = [
      3,
      n0,
      _GWPA,
      0,
      [_cW, _mWL],
      [() => GuardrailCustomWordList, () => GuardrailManagedWordList],
      2
    ];
    exports.ImageBlock$ = [
      3,
      n0,
      _IB,
      0,
      [_f, _so, _e],
      [0, [() => exports.ImageSource$, 0], [() => exports.ErrorBlock$, 0]],
      2
    ];
    exports.ImageBlockDelta$ = [
      3,
      n0,
      _IBD,
      0,
      [_so, _e],
      [[() => exports.ImageSource$, 0], [() => exports.ErrorBlock$, 0]]
    ];
    exports.ImageBlockStart$ = [
      3,
      n0,
      _IBS,
      0,
      [_f],
      [0],
      1
    ];
    exports.InferenceConfiguration$ = [
      3,
      n0,
      _IC,
      0,
      [_mT, _tem, _tPo, _sS],
      [1, 1, 1, 64 | 0]
    ];
    exports.InvokeModelRequest$ = [
      3,
      n0,
      _IMR,
      0,
      [_mI, _bo, _cT, _ac, _tr, _gIu, _gV, _pCL, _sTe],
      [[0, 1], [() => Body, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _A }], [0, { [_hH]: _XABT }], [0, { [_hH]: _XABG }], [0, { [_hH]: _XABG_ }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
      1
    ];
    exports.InvokeModelResponse$ = [
      3,
      n0,
      _IMRn,
      0,
      [_bo, _cT, _pCL, _sTe],
      [[() => Body, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
      2
    ];
    exports.InvokeModelTokensRequest$ = [
      3,
      n0,
      _IMTR,
      0,
      [_bo],
      [[() => Body, 0]],
      1
    ];
    exports.InvokeModelWithBidirectionalStreamRequest$ = [
      3,
      n0,
      _IMWBSR,
      0,
      [_mI, _bo],
      [[0, 1], [() => exports.InvokeModelWithBidirectionalStreamInput$, 16]],
      2
    ];
    exports.InvokeModelWithBidirectionalStreamResponse$ = [
      3,
      n0,
      _IMWBSRn,
      0,
      [_bo],
      [[() => exports.InvokeModelWithBidirectionalStreamOutput$, 16]],
      1
    ];
    exports.InvokeModelWithResponseStreamRequest$ = [
      3,
      n0,
      _IMWRSR,
      0,
      [_mI, _bo, _cT, _ac, _tr, _gIu, _gV, _pCL, _sTe],
      [[0, 1], [() => Body, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _XABA }], [0, { [_hH]: _XABT }], [0, { [_hH]: _XABG }], [0, { [_hH]: _XABG_ }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
      1
    ];
    exports.InvokeModelWithResponseStreamResponse$ = [
      3,
      n0,
      _IMWRSRn,
      0,
      [_bo, _cT, _pCL, _sTe],
      [[() => exports.ResponseStream$, 16], [0, { [_hH]: _XABCT }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
      2
    ];
    exports.JsonSchemaDefinition$ = [
      3,
      n0,
      _JSD,
      0,
      [_sch, _n, _des],
      [0, 0, 0],
      1
    ];
    exports.ListAsyncInvokesRequest$ = [
      3,
      n0,
      _LAIR,
      0,
      [_sTA, _sTB, _sE, _mR, _nT, _sB, _sO],
      [[5, { [_hQ]: _sTA }], [5, { [_hQ]: _sTB }], [0, { [_hQ]: _sE }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
    ];
    exports.ListAsyncInvokesResponse$ = [
      3,
      n0,
      _LAIRi,
      0,
      [_nT, _aIS],
      [0, [() => AsyncInvokeSummaries, 0]]
    ];
    exports.Message$ = [
      3,
      n0,
      _M,
      0,
      [_ro, _co],
      [0, [() => ContentBlocks, 0]],
      2
    ];
    exports.MessageStartEvent$ = [
      3,
      n0,
      _MSE,
      0,
      [_ro],
      [0],
      1
    ];
    exports.MessageStopEvent$ = [
      3,
      n0,
      _MSEe,
      0,
      [_sR, _aMRFd],
      [0, 15],
      1
    ];
    exports.OutputConfig$ = [
      3,
      n0,
      _OC,
      0,
      [_tF],
      [[() => exports.OutputFormat$, 0]]
    ];
    exports.OutputFormat$ = [
      3,
      n0,
      _OF,
      0,
      [_ty, _stru],
      [0, [() => exports.OutputFormatStructure$, 0]],
      2
    ];
    exports.PayloadPart$ = [
      3,
      n0,
      _PP,
      8,
      [_b],
      [[() => PartBody, 0]]
    ];
    exports.PerformanceConfiguration$ = [
      3,
      n0,
      _PC,
      0,
      [_la],
      [0]
    ];
    exports.PromptRouterTrace$ = [
      3,
      n0,
      _PRT,
      0,
      [_iMI],
      [0]
    ];
    exports.ReasoningTextBlock$ = [
      3,
      n0,
      _RTB,
      8,
      [_te, _si],
      [0, 0],
      1
    ];
    exports.S3Location$ = [
      3,
      n0,
      _SL,
      0,
      [_ur, _bO],
      [0, 0],
      1
    ];
    exports.SearchResultBlock$ = [
      3,
      n0,
      _SRB,
      0,
      [_so, _ti, _co, _ci],
      [0, 0, () => SearchResultContentBlocks, () => exports.CitationsConfig$],
      3
    ];
    exports.SearchResultContentBlock$ = [
      3,
      n0,
      _SRCB,
      0,
      [_te],
      [0],
      1
    ];
    exports.SearchResultLocation$ = [
      3,
      n0,
      _SRL,
      0,
      [_sRI, _sta, _end],
      [1, 1, 1]
    ];
    exports.ServiceTier$ = [
      3,
      n0,
      _ST,
      0,
      [_ty],
      [0],
      1
    ];
    exports.SpecificToolChoice$ = [
      3,
      n0,
      _STC,
      0,
      [_n],
      [0],
      1
    ];
    exports.StartAsyncInvokeRequest$ = [
      3,
      n0,
      _SAIR,
      0,
      [_mI, _mIo, _oDC, _cRT, _ta],
      [0, [() => ModelInputPayload, 0], () => exports.AsyncInvokeOutputDataConfig$, [0, 4], () => TagList],
      3
    ];
    exports.StartAsyncInvokeResponse$ = [
      3,
      n0,
      _SAIRt,
      0,
      [_iA],
      [0],
      1
    ];
    exports.SystemTool$ = [
      3,
      n0,
      _STy,
      0,
      [_n],
      [0],
      1
    ];
    exports.Tag$ = [
      3,
      n0,
      _T,
      0,
      [_k, _v],
      [0, 0],
      2
    ];
    exports.TokenUsage$ = [
      3,
      n0,
      _TU,
      0,
      [_iT, _oT, _tT, _cRIT, _cWIT, _cD],
      [1, 1, 1, 1, 1, () => CacheDetailsList],
      3
    ];
    exports.ToolConfiguration$ = [
      3,
      n0,
      _TC,
      0,
      [_too, _tCo],
      [() => Tools, () => exports.ToolChoice$],
      1
    ];
    exports.ToolResultBlock$ = [
      3,
      n0,
      _TRB,
      0,
      [_tUI, _co, _st, _ty],
      [0, [() => ToolResultContentBlocks, 0], 0, 0],
      2
    ];
    exports.ToolResultBlockStart$ = [
      3,
      n0,
      _TRBS,
      0,
      [_tUI, _ty, _st],
      [0, 0, 0],
      1
    ];
    exports.ToolSpecification$ = [
      3,
      n0,
      _TS,
      0,
      [_n, _iS, _des, _stri],
      [0, () => exports.ToolInputSchema$, 0, 2],
      2
    ];
    exports.ToolUseBlock$ = [
      3,
      n0,
      _TUB,
      0,
      [_tUI, _n, _i, _ty],
      [0, 0, 15, 0],
      3
    ];
    exports.ToolUseBlockDelta$ = [
      3,
      n0,
      _TUBD,
      0,
      [_i],
      [0],
      1
    ];
    exports.ToolUseBlockStart$ = [
      3,
      n0,
      _TUBS,
      0,
      [_tUI, _n, _ty],
      [0, 0, 0],
      2
    ];
    exports.VideoBlock$ = [
      3,
      n0,
      _VB,
      0,
      [_f, _so],
      [0, () => exports.VideoSource$],
      2
    ];
    exports.WebLocation$ = [
      3,
      n0,
      _WL,
      0,
      [_url, _do],
      [0, 0]
    ];
    var AdditionalModelResponseFieldPaths = 64 | 0;
    var AsyncInvokeSummaries = [
      1,
      n0,
      _AISs,
      0,
      [
        () => exports.AsyncInvokeSummary$,
        0
      ]
    ];
    var CacheDetailsList = [
      1,
      n0,
      _CDL,
      0,
      () => exports.CacheDetail$
    ];
    var CitationGeneratedContentList = [
      1,
      n0,
      _CGCL,
      0,
      () => exports.CitationGeneratedContent$
    ];
    var Citations = [
      1,
      n0,
      _Ci,
      0,
      () => exports.Citation$
    ];
    var CitationSourceContentList = [
      1,
      n0,
      _CSCL,
      0,
      () => exports.CitationSourceContent$
    ];
    var CitationSourceContentListDelta = [
      1,
      n0,
      _CSCLD,
      0,
      () => exports.CitationSourceContentDelta$
    ];
    var ContentBlocks = [
      1,
      n0,
      _CB,
      0,
      [
        () => exports.ContentBlock$,
        0
      ]
    ];
    var DocumentContentBlocks = [
      1,
      n0,
      _DCB,
      0,
      () => exports.DocumentContentBlock$
    ];
    var GuardrailAssessmentList = [
      1,
      n0,
      _GAL,
      0,
      [
        () => exports.GuardrailAssessment$,
        0
      ]
    ];
    var GuardrailAutomatedReasoningDifferenceScenarioList = [
      1,
      n0,
      _GARDSL,
      0,
      [
        () => exports.GuardrailAutomatedReasoningScenario$,
        0
      ]
    ];
    var GuardrailAutomatedReasoningFindingList = [
      1,
      n0,
      _GARFL,
      0,
      [
        () => exports.GuardrailAutomatedReasoningFinding$,
        0
      ]
    ];
    var GuardrailAutomatedReasoningInputTextReferenceList = [
      1,
      n0,
      _GARITRL,
      0,
      [
        () => exports.GuardrailAutomatedReasoningInputTextReference$,
        0
      ]
    ];
    var GuardrailAutomatedReasoningRuleList = [
      1,
      n0,
      _GARRL,
      0,
      () => exports.GuardrailAutomatedReasoningRule$
    ];
    var GuardrailAutomatedReasoningStatementList = [
      1,
      n0,
      _GARSL,
      0,
      [
        () => exports.GuardrailAutomatedReasoningStatement$,
        0
      ]
    ];
    var GuardrailAutomatedReasoningTranslationList = [
      1,
      n0,
      _GARTL,
      0,
      [
        () => exports.GuardrailAutomatedReasoningTranslation$,
        0
      ]
    ];
    var GuardrailAutomatedReasoningTranslationOptionList = [
      1,
      n0,
      _GARTOL,
      0,
      [
        () => exports.GuardrailAutomatedReasoningTranslationOption$,
        0
      ]
    ];
    var GuardrailContentBlockList = [
      1,
      n0,
      _GCBL,
      0,
      [
        () => exports.GuardrailContentBlock$,
        0
      ]
    ];
    var GuardrailContentFilterList = [
      1,
      n0,
      _GCFL,
      0,
      () => exports.GuardrailContentFilter$
    ];
    var GuardrailContentQualifierList = 64 | 0;
    var GuardrailContextualGroundingFilters = [
      1,
      n0,
      _GCGFu,
      0,
      () => exports.GuardrailContextualGroundingFilter$
    ];
    var GuardrailConverseContentQualifierList = 64 | 0;
    var GuardrailCustomWordList = [
      1,
      n0,
      _GCWL,
      0,
      () => exports.GuardrailCustomWord$
    ];
    var GuardrailManagedWordList = [
      1,
      n0,
      _GMWL,
      0,
      () => exports.GuardrailManagedWord$
    ];
    var GuardrailOriginList = 64 | 0;
    var GuardrailOutputContentList = [
      1,
      n0,
      _GOCL,
      0,
      () => exports.GuardrailOutputContent$
    ];
    var GuardrailPiiEntityFilterList = [
      1,
      n0,
      _GPEFL,
      0,
      () => exports.GuardrailPiiEntityFilter$
    ];
    var GuardrailRegexFilterList = [
      1,
      n0,
      _GRFL,
      0,
      () => exports.GuardrailRegexFilter$
    ];
    var GuardrailTopicList = [
      1,
      n0,
      _GTL,
      0,
      () => exports.GuardrailTopic$
    ];
    var Messages = [
      1,
      n0,
      _Me,
      0,
      [
        () => exports.Message$,
        0
      ]
    ];
    var ModelOutputs = 64 | 0;
    var NonEmptyStringList = 64 | 0;
    var SearchResultContentBlocks = [
      1,
      n0,
      _SRCBe,
      0,
      () => exports.SearchResultContentBlock$
    ];
    var SystemContentBlocks = [
      1,
      n0,
      _SCB,
      0,
      [
        () => exports.SystemContentBlock$,
        0
      ]
    ];
    var TagList = [
      1,
      n0,
      _TL,
      0,
      () => exports.Tag$
    ];
    var ToolResultBlocksDelta = [
      1,
      n0,
      _TRBD,
      0,
      () => exports.ToolResultBlockDelta$
    ];
    var ToolResultContentBlocks = [
      1,
      n0,
      _TRCB,
      0,
      [
        () => exports.ToolResultContentBlock$,
        0
      ]
    ];
    var Tools = [
      1,
      n0,
      _To,
      0,
      () => exports.Tool$
    ];
    var GuardrailAssessmentListMap = [
      2,
      n0,
      _GALM,
      0,
      [
        0,
        0
      ],
      [
        () => GuardrailAssessmentList,
        0
      ]
    ];
    var GuardrailAssessmentMap = [
      2,
      n0,
      _GAM,
      0,
      [
        0,
        0
      ],
      [
        () => exports.GuardrailAssessment$,
        0
      ]
    ];
    var PromptVariableMap = [
      2,
      n0,
      _PVM,
      8,
      0,
      () => exports.PromptVariableValues$
    ];
    var RequestMetadata = [
      2,
      n0,
      _RM,
      8,
      0,
      0
    ];
    exports.AsyncInvokeOutputDataConfig$ = [
      4,
      n0,
      _AIODC,
      0,
      [_sODC],
      [() => exports.AsyncInvokeS3OutputDataConfig$]
    ];
    exports.AudioSource$ = [
      4,
      n0,
      _AS,
      8,
      [_b, _sL],
      [21, () => exports.S3Location$]
    ];
    exports.CitationGeneratedContent$ = [
      4,
      n0,
      _CGC,
      0,
      [_te],
      [0]
    ];
    exports.CitationLocation$ = [
      4,
      n0,
      _CL,
      0,
      [_w, _dC, _dP, _dCo, _sRL],
      [() => exports.WebLocation$, () => exports.DocumentCharLocation$, () => exports.DocumentPageLocation$, () => exports.DocumentChunkLocation$, () => exports.SearchResultLocation$]
    ];
    exports.CitationSourceContent$ = [
      4,
      n0,
      _CSC,
      0,
      [_te],
      [0]
    ];
    exports.ContentBlock$ = [
      4,
      n0,
      _CBo,
      0,
      [_te, _ima, _doc, _vi, _au, _tU, _tR, _gCua, _cPa, _rC, _cC, _sRe],
      [0, [() => exports.ImageBlock$, 0], () => exports.DocumentBlock$, () => exports.VideoBlock$, [() => exports.AudioBlock$, 0], () => exports.ToolUseBlock$, [() => exports.ToolResultBlock$, 0], [() => exports.GuardrailConverseContentBlock$, 0], () => exports.CachePointBlock$, [() => exports.ReasoningContentBlock$, 0], () => exports.CitationsContentBlock$, () => exports.SearchResultBlock$]
    ];
    exports.ContentBlockDelta$ = [
      4,
      n0,
      _CBD,
      0,
      [_te, _tU, _tR, _rC, _cit, _ima],
      [0, () => exports.ToolUseBlockDelta$, () => ToolResultBlocksDelta, [() => exports.ReasoningContentBlockDelta$, 0], () => exports.CitationsDelta$, [() => exports.ImageBlockDelta$, 0]]
    ];
    exports.ContentBlockStart$ = [
      4,
      n0,
      _CBS,
      0,
      [_tU, _tR, _ima],
      [() => exports.ToolUseBlockStart$, () => exports.ToolResultBlockStart$, () => exports.ImageBlockStart$]
    ];
    exports.ConverseOutput$ = [
      4,
      n0,
      _CO,
      0,
      [_m],
      [[() => exports.Message$, 0]]
    ];
    exports.ConverseStreamOutput$ = [
      4,
      n0,
      _CSO,
      { [_stre]: 1 },
      [_mS, _cBS, _cBD, _cBSo, _mSe, _meta, _iSE, _mSEE, _vE, _tE, _sUE],
      [() => exports.MessageStartEvent$, () => exports.ContentBlockStartEvent$, [() => exports.ContentBlockDeltaEvent$, 0], () => exports.ContentBlockStopEvent$, () => exports.MessageStopEvent$, [() => exports.ConverseStreamMetadataEvent$, 0], [() => exports.InternalServerException$, 0], [() => exports.ModelStreamErrorException$, 0], [() => exports.ValidationException$, 0], [() => exports.ThrottlingException$, 0], [() => exports.ServiceUnavailableException$, 0]]
    ];
    exports.CountTokensInput$ = [
      4,
      n0,
      _CTI,
      0,
      [_iMn, _conv],
      [[() => exports.InvokeModelTokensRequest$, 0], [() => exports.ConverseTokensRequest$, 0]]
    ];
    exports.DocumentContentBlock$ = [
      4,
      n0,
      _DCBo,
      0,
      [_te],
      [0]
    ];
    exports.DocumentSource$ = [
      4,
      n0,
      _DS,
      0,
      [_b, _sL, _te, _co],
      [21, () => exports.S3Location$, 0, () => DocumentContentBlocks]
    ];
    exports.GuardrailAutomatedReasoningFinding$ = [
      4,
      n0,
      _GARF,
      0,
      [_va, _in, _sa, _imp, _tA, _tCoo, _nTo],
      [[() => exports.GuardrailAutomatedReasoningValidFinding$, 0], [() => exports.GuardrailAutomatedReasoningInvalidFinding$, 0], [() => exports.GuardrailAutomatedReasoningSatisfiableFinding$, 0], [() => exports.GuardrailAutomatedReasoningImpossibleFinding$, 0], [() => exports.GuardrailAutomatedReasoningTranslationAmbiguousFinding$, 0], () => exports.GuardrailAutomatedReasoningTooComplexFinding$, () => exports.GuardrailAutomatedReasoningNoTranslationsFinding$]
    ];
    exports.GuardrailContentBlock$ = [
      4,
      n0,
      _GCB,
      0,
      [_te, _ima],
      [() => exports.GuardrailTextBlock$, [() => exports.GuardrailImageBlock$, 0]]
    ];
    exports.GuardrailConverseContentBlock$ = [
      4,
      n0,
      _GCCB,
      0,
      [_te, _ima],
      [() => exports.GuardrailConverseTextBlock$, [() => exports.GuardrailConverseImageBlock$, 0]]
    ];
    exports.GuardrailConverseImageSource$ = [
      4,
      n0,
      _GCIS,
      8,
      [_b],
      [21]
    ];
    exports.GuardrailImageSource$ = [
      4,
      n0,
      _GIS,
      8,
      [_b],
      [21]
    ];
    exports.ImageSource$ = [
      4,
      n0,
      _IS,
      8,
      [_b, _sL],
      [21, () => exports.S3Location$]
    ];
    exports.InvokeModelWithBidirectionalStreamInput$ = [
      4,
      n0,
      _IMWBSI,
      { [_stre]: 1 },
      [_ch],
      [[() => exports.BidirectionalInputPayloadPart$, 0]]
    ];
    exports.InvokeModelWithBidirectionalStreamOutput$ = [
      4,
      n0,
      _IMWBSO,
      { [_stre]: 1 },
      [_ch, _iSE, _mSEE, _vE, _tE, _mTE, _sUE],
      [[() => exports.BidirectionalOutputPayloadPart$, 0], [() => exports.InternalServerException$, 0], [() => exports.ModelStreamErrorException$, 0], [() => exports.ValidationException$, 0], [() => exports.ThrottlingException$, 0], [() => exports.ModelTimeoutException$, 0], [() => exports.ServiceUnavailableException$, 0]]
    ];
    exports.OutputFormatStructure$ = [
      4,
      n0,
      _OFS,
      8,
      [_jS],
      [() => exports.JsonSchemaDefinition$]
    ];
    exports.PromptVariableValues$ = [
      4,
      n0,
      _PVV,
      0,
      [_te],
      [0]
    ];
    exports.ReasoningContentBlock$ = [
      4,
      n0,
      _RCB,
      8,
      [_rT, _rCe],
      [[() => exports.ReasoningTextBlock$, 0], 21]
    ];
    exports.ReasoningContentBlockDelta$ = [
      4,
      n0,
      _RCBD,
      8,
      [_te, _rCe, _si],
      [0, 21, 0]
    ];
    exports.ResponseStream$ = [
      4,
      n0,
      _RS,
      { [_stre]: 1 },
      [_ch, _iSE, _mSEE, _vE, _tE, _mTE, _sUE],
      [[() => exports.PayloadPart$, 0], [() => exports.InternalServerException$, 0], [() => exports.ModelStreamErrorException$, 0], [() => exports.ValidationException$, 0], [() => exports.ThrottlingException$, 0], [() => exports.ModelTimeoutException$, 0], [() => exports.ServiceUnavailableException$, 0]]
    ];
    exports.SystemContentBlock$ = [
      4,
      n0,
      _SCBy,
      0,
      [_te, _gCua, _cPa],
      [0, [() => exports.GuardrailConverseContentBlock$, 0], () => exports.CachePointBlock$]
    ];
    exports.Tool$ = [
      4,
      n0,
      _Too,
      0,
      [_tS, _sTy, _cPa],
      [() => exports.ToolSpecification$, () => exports.SystemTool$, () => exports.CachePointBlock$]
    ];
    exports.ToolChoice$ = [
      4,
      n0,
      _TCo,
      0,
      [_aut, _an, _tool],
      [() => exports.AutoToolChoice$, () => exports.AnyToolChoice$, () => exports.SpecificToolChoice$]
    ];
    exports.ToolInputSchema$ = [
      4,
      n0,
      _TIS,
      0,
      [_j],
      [15]
    ];
    exports.ToolResultBlockDelta$ = [
      4,
      n0,
      _TRBDo,
      0,
      [_te, _j],
      [0, 15]
    ];
    exports.ToolResultContentBlock$ = [
      4,
      n0,
      _TRCBo,
      0,
      [_j, _te, _ima, _doc, _vi, _sRe],
      [15, 0, [() => exports.ImageBlock$, 0], () => exports.DocumentBlock$, () => exports.VideoBlock$, () => exports.SearchResultBlock$]
    ];
    exports.VideoSource$ = [
      4,
      n0,
      _VS,
      0,
      [_b, _sL],
      [21, () => exports.S3Location$]
    ];
    exports.ApplyGuardrail$ = [
      9,
      n0,
      _AG,
      { [_h]: ["POST", "/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply", 200] },
      () => exports.ApplyGuardrailRequest$,
      () => exports.ApplyGuardrailResponse$
    ];
    exports.Converse$ = [
      9,
      n0,
      _Co,
      { [_h]: ["POST", "/model/{modelId}/converse", 200] },
      () => exports.ConverseRequest$,
      () => exports.ConverseResponse$
    ];
    exports.ConverseStream$ = [
      9,
      n0,
      _CS,
      { [_h]: ["POST", "/model/{modelId}/converse-stream", 200] },
      () => exports.ConverseStreamRequest$,
      () => exports.ConverseStreamResponse$
    ];
    exports.CountTokens$ = [
      9,
      n0,
      _CTo,
      { [_h]: ["POST", "/model/{modelId}/count-tokens", 200] },
      () => exports.CountTokensRequest$,
      () => exports.CountTokensResponse$
    ];
    exports.GetAsyncInvoke$ = [
      9,
      n0,
      _GAI,
      { [_h]: ["GET", "/async-invoke/{invocationArn}", 200] },
      () => exports.GetAsyncInvokeRequest$,
      () => exports.GetAsyncInvokeResponse$
    ];
    exports.InvokeModel$ = [
      9,
      n0,
      _IM,
      { [_h]: ["POST", "/model/{modelId}/invoke", 200] },
      () => exports.InvokeModelRequest$,
      () => exports.InvokeModelResponse$
    ];
    exports.InvokeModelWithBidirectionalStream$ = [
      9,
      n0,
      _IMWBS,
      { [_h]: ["POST", "/model/{modelId}/invoke-with-bidirectional-stream", 200] },
      () => exports.InvokeModelWithBidirectionalStreamRequest$,
      () => exports.InvokeModelWithBidirectionalStreamResponse$
    ];
    exports.InvokeModelWithResponseStream$ = [
      9,
      n0,
      _IMWRS,
      { [_h]: ["POST", "/model/{modelId}/invoke-with-response-stream", 200] },
      () => exports.InvokeModelWithResponseStreamRequest$,
      () => exports.InvokeModelWithResponseStreamResponse$
    ];
    exports.ListAsyncInvokes$ = [
      9,
      n0,
      _LAI,
      { [_h]: ["GET", "/async-invoke", 200] },
      () => exports.ListAsyncInvokesRequest$,
      () => exports.ListAsyncInvokesResponse$
    ];
    exports.StartAsyncInvoke$ = [
      9,
      n0,
      _SAI,
      { [_h]: ["POST", "/async-invoke", 200] },
      () => exports.StartAsyncInvokeRequest$,
      () => exports.StartAsyncInvokeResponse$
    ];
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/runtimeConfig.shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var httpAuthSchemes_1 = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var protocols_1 = (init_protocols(), __toCommonJS(protocols_exports));
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var smithy_client_1 = require_dist_cjs11();
    var url_parser_1 = require_dist_cjs5();
    var util_base64_1 = require_dist_cjs7();
    var util_utf8_1 = require_dist_cjs6();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
    var endpointResolver_1 = require_endpointResolver();
    var schemas_0_1 = require_schemas_0();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2023-09-30",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultBedrockRuntimeHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new httpAuthSchemes_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#httpBearerAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#httpBearerAuth"),
            signer: new core_1.HttpBearerAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        protocol: config?.protocol ?? protocols_1.AwsRestJsonProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.bedrockruntime",
          errorTypeRegistries: schemas_0_1.errorTypeRegistries,
          version: "2023-09-30",
          serviceTarget: "AmazonBedrockFrontendService"
        },
        serviceId: config?.serviceId ?? "Bedrock Runtime",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/runtimeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package());
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var httpAuthSchemes_1 = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var credential_provider_node_1 = require_dist_cjs29();
    var eventstream_handler_node_1 = require_dist_cjs40();
    var token_providers_1 = require_dist_cjs28();
    var util_user_agent_node_1 = require_dist_cjs23();
    var config_resolver_1 = require_dist_cjs19();
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var eventstream_serde_node_1 = require_dist_cjs41();
    var hash_node_1 = require_dist_cjs24();
    var middleware_retry_1 = require_dist_cjs22();
    var node_config_provider_1 = require_dist_cjs4();
    var node_http_handler_1 = require_dist_cjs3();
    var smithy_client_1 = require_dist_cjs11();
    var util_body_length_node_1 = require_dist_cjs25();
    var util_defaults_mode_node_1 = require_dist_cjs26();
    var util_retry_1 = require_dist_cjs17();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_1.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, client_1.emitWarningIfUnsupportedVersion)(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger,
        signingName: "bedrock"
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(httpAuthSchemes_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? eventstream_handler_node_1.eventStreamPayloadHandlerProvider,
        eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventstream_serde_node_1.eventStreamSerdeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new httpAuthSchemes_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#httpBearerAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#httpBearerAuth") || (async (idProps) => {
              try {
                return await (0, token_providers_1.fromEnvSigningName)({ signingName: "bedrock" })();
              } catch (error) {
                return await (0, token_providers_1.nodeProvider)(idProps)(idProps);
              }
            }),
            signer: new core_1.HttpBearerAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: node_http_handler_1.NodeHttp2Handler.create(config?.requestHandler ?? (async () => ({
          ...await defaultConfigProvider(),
          disableConcurrentStreams: true
        }))),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
var require_dist_cjs42 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-bedrock-runtime@3.1021.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js"(exports) {
    var middlewareEventstream = require_dist_cjs30();
    var middlewareHostHeader = require_dist_cjs12();
    var middlewareLogger = require_dist_cjs13();
    var middlewareRecursionDetection = require_dist_cjs14();
    var middlewareUserAgent = require_dist_cjs18();
    var middlewareWebsocket = require_dist_cjs38();
    var configResolver = require_dist_cjs19();
    var core = (init_dist_es(), __toCommonJS(dist_es_exports));
    var schema = (init_schema(), __toCommonJS(schema_exports));
    var eventstreamSerdeConfigResolver = require_dist_cjs39();
    var middlewareContentLength = require_dist_cjs20();
    var middlewareEndpoint = require_dist_cjs21();
    var middlewareRetry = require_dist_cjs22();
    var smithyClient = require_dist_cjs11();
    var httpAuthSchemeProvider = require_httpAuthSchemeProvider();
    var runtimeConfig = require_runtimeConfig();
    var regionConfigResolver = require_dist_cjs27();
    var protocolHttp = require_dist_cjs();
    var schemas_0 = require_schemas_0();
    var errors = require_errors();
    var BedrockRuntimeServiceException = require_BedrockRuntimeServiceException();
    var resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "bedrock"
      });
    };
    var commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var getHttpAuthExtensionConfiguration = (runtimeConfig2) => {
      const _httpAuthSchemes = runtimeConfig2.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig2.httpAuthSchemeProvider;
      let _credentials = runtimeConfig2.credentials;
      let _token = runtimeConfig2.token;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider2) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider2;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        },
        setToken(token) {
          _token = token;
        },
        token() {
          return _token;
        }
      };
    };
    var resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
        token: config.token()
      };
    };
    var resolveRuntimeExtensions = (runtimeConfig2, extensions) => {
      const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig2), smithyClient.getDefaultExtensionConfiguration(runtimeConfig2), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig2), getHttpAuthExtensionConfiguration(runtimeConfig2));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig2, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
    var BedrockRuntimeClient = class extends smithyClient.Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
        const _config_4 = configResolver.resolveRegionConfig(_config_3);
        const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
        const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
        const _config_7 = eventstreamSerdeConfigResolver.resolveEventStreamSerdeConfig(_config_6);
        const _config_8 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_7);
        const _config_9 = middlewareEventstream.resolveEventStreamConfig(_config_8);
        const _config_10 = middlewareWebsocket.resolveWebSocketConfig(_config_9);
        const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
        this.config = _config_11;
        this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "smithy.api#httpBearerAuth": config.token
          })
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    var ApplyGuardrailCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "ApplyGuardrail", {}).n("BedrockRuntimeClient", "ApplyGuardrailCommand").sc(schemas_0.ApplyGuardrail$).build() {
    };
    var ConverseCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "Converse", {}).n("BedrockRuntimeClient", "ConverseCommand").sc(schemas_0.Converse$).build() {
    };
    var ConverseStreamCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "ConverseStream", {
      eventStream: {
        output: true
      }
    }).n("BedrockRuntimeClient", "ConverseStreamCommand").sc(schemas_0.ConverseStream$).build() {
    };
    var CountTokensCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "CountTokens", {}).n("BedrockRuntimeClient", "CountTokensCommand").sc(schemas_0.CountTokens$).build() {
    };
    var GetAsyncInvokeCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "GetAsyncInvoke", {}).n("BedrockRuntimeClient", "GetAsyncInvokeCommand").sc(schemas_0.GetAsyncInvoke$).build() {
    };
    var InvokeModelCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "InvokeModel", {}).n("BedrockRuntimeClient", "InvokeModelCommand").sc(schemas_0.InvokeModel$).build() {
    };
    var InvokeModelWithBidirectionalStreamCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareEventstream.getEventStreamPlugin(config),
        middlewareWebsocket.getWebSocketPlugin(config, {
          headerPrefix: "x-amz-bedrock-"
        })
      ];
    }).s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
      eventStream: {
        input: true,
        output: true
      }
    }).n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand").sc(schemas_0.InvokeModelWithBidirectionalStream$).build() {
    };
    var InvokeModelWithResponseStreamCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
      eventStream: {
        output: true
      }
    }).n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand").sc(schemas_0.InvokeModelWithResponseStream$).build() {
    };
    var ListAsyncInvokesCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "ListAsyncInvokes", {}).n("BedrockRuntimeClient", "ListAsyncInvokesCommand").sc(schemas_0.ListAsyncInvokes$).build() {
    };
    var StartAsyncInvokeCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AmazonBedrockFrontendService", "StartAsyncInvoke", {}).n("BedrockRuntimeClient", "StartAsyncInvokeCommand").sc(schemas_0.StartAsyncInvoke$).build() {
    };
    var paginateListAsyncInvokes = core.createPaginator(BedrockRuntimeClient, ListAsyncInvokesCommand, "nextToken", "nextToken", "maxResults");
    var commands = {
      ApplyGuardrailCommand,
      ConverseCommand,
      ConverseStreamCommand,
      CountTokensCommand,
      GetAsyncInvokeCommand,
      InvokeModelCommand,
      InvokeModelWithBidirectionalStreamCommand,
      InvokeModelWithResponseStreamCommand,
      ListAsyncInvokesCommand,
      StartAsyncInvokeCommand
    };
    var paginators = {
      paginateListAsyncInvokes
    };
    var BedrockRuntime = class extends BedrockRuntimeClient {
    };
    smithyClient.createAggregatedClient(commands, BedrockRuntime, { paginators });
    var AsyncInvokeStatus = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress"
    };
    var SortAsyncInvocationBy = {
      SUBMISSION_TIME: "SubmissionTime"
    };
    var SortOrder = {
      ASCENDING: "Ascending",
      DESCENDING: "Descending"
    };
    var GuardrailImageFormat = {
      JPEG: "jpeg",
      PNG: "png"
    };
    var GuardrailContentQualifier = {
      GROUNDING_SOURCE: "grounding_source",
      GUARD_CONTENT: "guard_content",
      QUERY: "query"
    };
    var GuardrailOutputScope = {
      FULL: "FULL",
      INTERVENTIONS: "INTERVENTIONS"
    };
    var GuardrailContentSource = {
      INPUT: "INPUT",
      OUTPUT: "OUTPUT"
    };
    var GuardrailAction = {
      GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
      NONE: "NONE"
    };
    var GuardrailOrigin = {
      ACCOUNT_ENFORCED: "ACCOUNT_ENFORCED",
      ORGANIZATION_ENFORCED: "ORGANIZATION_ENFORCED",
      REQUEST: "REQUEST"
    };
    var GuardrailOwnership = {
      CROSS_ACCOUNT: "CROSS_ACCOUNT",
      SELF: "SELF"
    };
    var GuardrailAutomatedReasoningLogicWarningType = {
      ALWAYS_FALSE: "ALWAYS_FALSE",
      ALWAYS_TRUE: "ALWAYS_TRUE"
    };
    var GuardrailContentPolicyAction = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    };
    var GuardrailContentFilterConfidence = {
      HIGH: "HIGH",
      LOW: "LOW",
      MEDIUM: "MEDIUM",
      NONE: "NONE"
    };
    var GuardrailContentFilterStrength = {
      HIGH: "HIGH",
      LOW: "LOW",
      MEDIUM: "MEDIUM",
      NONE: "NONE"
    };
    var GuardrailContentFilterType = {
      HATE: "HATE",
      INSULTS: "INSULTS",
      MISCONDUCT: "MISCONDUCT",
      PROMPT_ATTACK: "PROMPT_ATTACK",
      SEXUAL: "SEXUAL",
      VIOLENCE: "VIOLENCE"
    };
    var GuardrailContextualGroundingPolicyAction = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    };
    var GuardrailContextualGroundingFilterType = {
      GROUNDING: "GROUNDING",
      RELEVANCE: "RELEVANCE"
    };
    var GuardrailSensitiveInformationPolicyAction = {
      ANONYMIZED: "ANONYMIZED",
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    };
    var GuardrailPiiEntityType = {
      ADDRESS: "ADDRESS",
      AGE: "AGE",
      AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
      AWS_SECRET_KEY: "AWS_SECRET_KEY",
      CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
      CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
      CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
      CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
      CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
      DRIVER_ID: "DRIVER_ID",
      EMAIL: "EMAIL",
      INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
      IP_ADDRESS: "IP_ADDRESS",
      LICENSE_PLATE: "LICENSE_PLATE",
      MAC_ADDRESS: "MAC_ADDRESS",
      NAME: "NAME",
      PASSWORD: "PASSWORD",
      PHONE: "PHONE",
      PIN: "PIN",
      SWIFT_CODE: "SWIFT_CODE",
      UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
      UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
      UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
      URL: "URL",
      USERNAME: "USERNAME",
      US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
      US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
      US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
      US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
      US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
      VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
    };
    var GuardrailTopicPolicyAction = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    };
    var GuardrailTopicType = {
      DENY: "DENY"
    };
    var GuardrailWordPolicyAction = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    };
    var GuardrailManagedWordType = {
      PROFANITY: "PROFANITY"
    };
    var GuardrailTrace = {
      DISABLED: "disabled",
      ENABLED: "enabled",
      ENABLED_FULL: "enabled_full"
    };
    var AudioFormat = {
      AAC: "aac",
      FLAC: "flac",
      M4A: "m4a",
      MKA: "mka",
      MKV: "mkv",
      MP3: "mp3",
      MP4: "mp4",
      MPEG: "mpeg",
      MPGA: "mpga",
      OGG: "ogg",
      OPUS: "opus",
      PCM: "pcm",
      WAV: "wav",
      WEBM: "webm",
      X_AAC: "x-aac"
    };
    var CacheTTL = {
      FIVE_MINUTES: "5m",
      ONE_HOUR: "1h"
    };
    var CachePointType = {
      DEFAULT: "default"
    };
    var DocumentFormat = {
      CSV: "csv",
      DOC: "doc",
      DOCX: "docx",
      HTML: "html",
      MD: "md",
      PDF: "pdf",
      TXT: "txt",
      XLS: "xls",
      XLSX: "xlsx"
    };
    var GuardrailConverseImageFormat = {
      JPEG: "jpeg",
      PNG: "png"
    };
    var GuardrailConverseContentQualifier = {
      GROUNDING_SOURCE: "grounding_source",
      GUARD_CONTENT: "guard_content",
      QUERY: "query"
    };
    var ImageFormat = {
      GIF: "gif",
      JPEG: "jpeg",
      PNG: "png",
      WEBP: "webp"
    };
    var VideoFormat = {
      FLV: "flv",
      MKV: "mkv",
      MOV: "mov",
      MP4: "mp4",
      MPEG: "mpeg",
      MPG: "mpg",
      THREE_GP: "three_gp",
      WEBM: "webm",
      WMV: "wmv"
    };
    var ToolResultStatus = {
      ERROR: "error",
      SUCCESS: "success"
    };
    var ToolUseType = {
      SERVER_TOOL_USE: "server_tool_use"
    };
    var ConversationRole = {
      ASSISTANT: "assistant",
      USER: "user"
    };
    var OutputFormatType = {
      JSON_SCHEMA: "json_schema"
    };
    var PerformanceConfigLatency = {
      OPTIMIZED: "optimized",
      STANDARD: "standard"
    };
    var ServiceTierType = {
      DEFAULT: "default",
      FLEX: "flex",
      PRIORITY: "priority",
      RESERVED: "reserved"
    };
    var StopReason = {
      CONTENT_FILTERED: "content_filtered",
      END_TURN: "end_turn",
      GUARDRAIL_INTERVENED: "guardrail_intervened",
      MALFORMED_MODEL_OUTPUT: "malformed_model_output",
      MALFORMED_TOOL_USE: "malformed_tool_use",
      MAX_TOKENS: "max_tokens",
      MODEL_CONTEXT_WINDOW_EXCEEDED: "model_context_window_exceeded",
      STOP_SEQUENCE: "stop_sequence",
      TOOL_USE: "tool_use"
    };
    var GuardrailStreamProcessingMode = {
      ASYNC: "async",
      SYNC: "sync"
    };
    var Trace = {
      DISABLED: "DISABLED",
      ENABLED: "ENABLED",
      ENABLED_FULL: "ENABLED_FULL"
    };
    exports.$Command = smithyClient.Command;
    exports.__Client = smithyClient.Client;
    exports.BedrockRuntimeServiceException = BedrockRuntimeServiceException.BedrockRuntimeServiceException;
    exports.ApplyGuardrailCommand = ApplyGuardrailCommand;
    exports.AsyncInvokeStatus = AsyncInvokeStatus;
    exports.AudioFormat = AudioFormat;
    exports.BedrockRuntime = BedrockRuntime;
    exports.BedrockRuntimeClient = BedrockRuntimeClient;
    exports.CachePointType = CachePointType;
    exports.CacheTTL = CacheTTL;
    exports.ConversationRole = ConversationRole;
    exports.ConverseCommand = ConverseCommand;
    exports.ConverseStreamCommand = ConverseStreamCommand;
    exports.CountTokensCommand = CountTokensCommand;
    exports.DocumentFormat = DocumentFormat;
    exports.GetAsyncInvokeCommand = GetAsyncInvokeCommand;
    exports.GuardrailAction = GuardrailAction;
    exports.GuardrailAutomatedReasoningLogicWarningType = GuardrailAutomatedReasoningLogicWarningType;
    exports.GuardrailContentFilterConfidence = GuardrailContentFilterConfidence;
    exports.GuardrailContentFilterStrength = GuardrailContentFilterStrength;
    exports.GuardrailContentFilterType = GuardrailContentFilterType;
    exports.GuardrailContentPolicyAction = GuardrailContentPolicyAction;
    exports.GuardrailContentQualifier = GuardrailContentQualifier;
    exports.GuardrailContentSource = GuardrailContentSource;
    exports.GuardrailContextualGroundingFilterType = GuardrailContextualGroundingFilterType;
    exports.GuardrailContextualGroundingPolicyAction = GuardrailContextualGroundingPolicyAction;
    exports.GuardrailConverseContentQualifier = GuardrailConverseContentQualifier;
    exports.GuardrailConverseImageFormat = GuardrailConverseImageFormat;
    exports.GuardrailImageFormat = GuardrailImageFormat;
    exports.GuardrailManagedWordType = GuardrailManagedWordType;
    exports.GuardrailOrigin = GuardrailOrigin;
    exports.GuardrailOutputScope = GuardrailOutputScope;
    exports.GuardrailOwnership = GuardrailOwnership;
    exports.GuardrailPiiEntityType = GuardrailPiiEntityType;
    exports.GuardrailSensitiveInformationPolicyAction = GuardrailSensitiveInformationPolicyAction;
    exports.GuardrailStreamProcessingMode = GuardrailStreamProcessingMode;
    exports.GuardrailTopicPolicyAction = GuardrailTopicPolicyAction;
    exports.GuardrailTopicType = GuardrailTopicType;
    exports.GuardrailTrace = GuardrailTrace;
    exports.GuardrailWordPolicyAction = GuardrailWordPolicyAction;
    exports.ImageFormat = ImageFormat;
    exports.InvokeModelCommand = InvokeModelCommand;
    exports.InvokeModelWithBidirectionalStreamCommand = InvokeModelWithBidirectionalStreamCommand;
    exports.InvokeModelWithResponseStreamCommand = InvokeModelWithResponseStreamCommand;
    exports.ListAsyncInvokesCommand = ListAsyncInvokesCommand;
    exports.OutputFormatType = OutputFormatType;
    exports.PerformanceConfigLatency = PerformanceConfigLatency;
    exports.ServiceTierType = ServiceTierType;
    exports.SortAsyncInvocationBy = SortAsyncInvocationBy;
    exports.SortOrder = SortOrder;
    exports.StartAsyncInvokeCommand = StartAsyncInvokeCommand;
    exports.StopReason = StopReason;
    exports.ToolResultStatus = ToolResultStatus;
    exports.ToolUseType = ToolUseType;
    exports.Trace = Trace;
    exports.VideoFormat = VideoFormat;
    exports.paginateListAsyncInvokes = paginateListAsyncInvokes;
    Object.prototype.hasOwnProperty.call(schemas_0, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: schemas_0["__proto__"]
    });
    Object.keys(schemas_0).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = schemas_0[k];
    });
    Object.prototype.hasOwnProperty.call(errors, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: errors["__proto__"]
    });
    Object.keys(errors).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = errors[k];
    });
  }
});

export {
  require_dist_cjs33 as require_dist_cjs,
  require_dist_cjs34 as require_dist_cjs2,
  require_dist_cjs42 as require_dist_cjs3
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK21pZGRsZXdhcmUtZXZlbnRzdHJlYW1AMy45NzIuOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbWlkZGxld2FyZS1ldmVudHN0cmVhbS9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrdXRpbC1mb3JtYXQtdXJsQDMuOTcyLjgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtZm9ybWF0LXVybC9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStpcy1hcnJheS1idWZmZXJAMi4yLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvaXMtYXJyYXktYnVmZmVyL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtYnVmZmVyLWZyb21AMi4yLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1idWZmZXItZnJvbS9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXV0ZjhAMi4zLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0byt1dGlsQDUuMi4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL3NyYy9jb252ZXJ0VG9CdWZmZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3MtY3J5cHRvK3V0aWxANS4yLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvc3JjL2lzRW1wdHlEYXRhLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0byt1dGlsQDUuMi4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL3NyYy9udW1Ub1VpbnQ4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0byt1dGlsQDUuMi4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL3NyYy91aW50MzJBcnJheUZyb20udHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3MtY3J5cHRvK3V0aWxANS4yLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvc3JjL2luZGV4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0bytjcmMzMkA1LjIuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvc3JjL2F3c19jcmMzMi50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rY3JjMzJANS4yLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL3NyYy9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStldmVudHN0cmVhbS1jb2RlY0A0LjIuMTIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvZXZlbnRzdHJlYW0tY29kZWMvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrZXZlbnRzdHJlYW0tc2VyZGUtdW5pdmVyc2FsQDQuMi4xMi9ub2RlX21vZHVsZXMvQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS11bml2ZXJzYWwvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrZXZlbnRzdHJlYW0tc2VyZGUtYnJvd3NlckA0LjIuMTIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtYnJvd3Nlci9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbWlkZGxld2FyZS13ZWJzb2NrZXRAMy45NzIuMTQvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL21pZGRsZXdhcmUtd2Vic29ja2V0L2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2V2ZW50c3RyZWFtLXNlcmRlLWNvbmZpZy1yZXNvbHZlckA0LjMuMTIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtY29uZmlnLXJlc29sdmVyL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjbGllbnQtYmVkcm9jay1ydW50aW1lQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jbGllbnQtYmVkcm9jay1ydW50aW1lL2Rpc3QtY2pzL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LWJlZHJvY2stcnVudGltZUAzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stcnVudGltZS9wYWNrYWdlLmpzb24iLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2V2ZW50c3RyZWFtLWhhbmRsZXItbm9kZUAzLjk3Mi4xMi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0taGFuZGxlci1ub2RlL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2V2ZW50c3RyZWFtLXNlcmRlLW5vZGVANC4yLjEyL25vZGVfbW9kdWxlcy9Ac21pdGh5L2V2ZW50c3RyZWFtLXNlcmRlLW5vZGUvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1iZWRyb2NrLXJ1bnRpbWVAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1iZWRyb2NrLXJ1bnRpbWUvZGlzdC1janMvZW5kcG9pbnQvcnVsZXNldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LWJlZHJvY2stcnVudGltZUAzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stcnVudGltZS9kaXN0LWNqcy9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjbGllbnQtYmVkcm9jay1ydW50aW1lQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jbGllbnQtYmVkcm9jay1ydW50aW1lL2Rpc3QtY2pzL21vZGVscy9CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1iZWRyb2NrLXJ1bnRpbWVAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1iZWRyb2NrLXJ1bnRpbWUvZGlzdC1janMvbW9kZWxzL2Vycm9ycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LWJlZHJvY2stcnVudGltZUAzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stcnVudGltZS9kaXN0LWNqcy9zY2hlbWFzL3NjaGVtYXNfMC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LWJlZHJvY2stcnVudGltZUAzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stcnVudGltZS9kaXN0LWNqcy9ydW50aW1lQ29uZmlnLnNoYXJlZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LWJlZHJvY2stcnVudGltZUAzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stcnVudGltZS9kaXN0LWNqcy9ydW50aW1lQ29uZmlnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjbGllbnQtYmVkcm9jay1ydW50aW1lQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jbGllbnQtYmVkcm9jay1ydW50aW1lL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbnZhciBwcm90b2NvbEh0dHAgPSByZXF1aXJlKCdAc21pdGh5L3Byb3RvY29sLWh0dHAnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUV2ZW50U3RyZWFtQ29uZmlnKGlucHV0KSB7XG4gICAgY29uc3QgZXZlbnRTaWduZXIgPSBpbnB1dC5zaWduZXI7XG4gICAgY29uc3QgbWVzc2FnZVNpZ25lciA9IGlucHV0LnNpZ25lcjtcbiAgICBjb25zdCBuZXdJbnB1dCA9IE9iamVjdC5hc3NpZ24oaW5wdXQsIHtcbiAgICAgICAgZXZlbnRTaWduZXIsXG4gICAgICAgIG1lc3NhZ2VTaWduZXIsXG4gICAgfSk7XG4gICAgY29uc3QgZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlciA9IG5ld0lucHV0LmV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXJQcm92aWRlcihuZXdJbnB1dCk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3SW5wdXQsIHtcbiAgICAgICAgZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlcixcbiAgICB9KTtcbn1cblxuY29uc3QgZXZlbnRTdHJlYW1IYW5kbGluZ01pZGRsZXdhcmUgPSAob3B0aW9ucykgPT4gKG5leHQsIGNvbnRleHQpID0+IGFzeW5jIChhcmdzKSA9PiB7XG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmICghcHJvdG9jb2xIdHRwLkh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpXG4gICAgICAgIHJldHVybiBuZXh0KGFyZ3MpO1xuICAgIHJldHVybiBvcHRpb25zLmV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXIuaGFuZGxlKG5leHQsIGFyZ3MsIGNvbnRleHQpO1xufTtcbmNvbnN0IGV2ZW50U3RyZWFtSGFuZGxpbmdNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICB0YWdzOiBbXCJFVkVOVF9TVFJFQU1cIiwgXCJTSUdOQVRVUkVcIiwgXCJIQU5ETEVcIl0sXG4gICAgbmFtZTogXCJldmVudFN0cmVhbUhhbmRsaW5nTWlkZGxld2FyZVwiLFxuICAgIHJlbGF0aW9uOiBcImFmdGVyXCIsXG4gICAgdG9NaWRkbGV3YXJlOiBcImF3c0F1dGhNaWRkbGV3YXJlXCIsXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5jb25zdCBldmVudFN0cmVhbUhlYWRlck1pZGRsZXdhcmUgPSAobmV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gICAgaWYgKCFwcm90b2NvbEh0dHAuSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSlcbiAgICAgICAgcmV0dXJuIG5leHQoYXJncyk7XG4gICAgcmVxdWVzdC5oZWFkZXJzID0ge1xuICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vdm5kLmFtYXpvbi5ldmVudHN0cmVhbVwiLFxuICAgICAgICBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI6IFwiU1RSRUFNSU5HLUFXUzQtSE1BQy1TSEEyNTYtRVZFTlRTXCIsXG4gICAgfTtcbiAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgfSk7XG59O1xuY29uc3QgZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICBzdGVwOiBcImJ1aWxkXCIsXG4gICAgdGFnczogW1wiRVZFTlRfU1RSRUFNXCIsIFwiSEVBREVSXCIsIFwiQ09OVEVOVF9UWVBFXCIsIFwiQ09OVEVOVF9TSEEyNTZcIl0sXG4gICAgbmFtZTogXCJldmVudFN0cmVhbUhlYWRlck1pZGRsZXdhcmVcIixcbiAgICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmNvbnN0IGdldEV2ZW50U3RyZWFtUGx1Z2luID0gKG9wdGlvbnMpID0+ICh7XG4gICAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICAgICAgY2xpZW50U3RhY2suYWRkUmVsYXRpdmVUbyhldmVudFN0cmVhbUhhbmRsaW5nTWlkZGxld2FyZShvcHRpb25zKSwgZXZlbnRTdHJlYW1IYW5kbGluZ01pZGRsZXdhcmVPcHRpb25zKTtcbiAgICAgICAgY2xpZW50U3RhY2suYWRkKGV2ZW50U3RyZWFtSGVhZGVyTWlkZGxld2FyZSwgZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlT3B0aW9ucyk7XG4gICAgfSxcbn0pO1xuXG5leHBvcnRzLmV2ZW50U3RyZWFtSGFuZGxpbmdNaWRkbGV3YXJlID0gZXZlbnRTdHJlYW1IYW5kbGluZ01pZGRsZXdhcmU7XG5leHBvcnRzLmV2ZW50U3RyZWFtSGFuZGxpbmdNaWRkbGV3YXJlT3B0aW9ucyA9IGV2ZW50U3RyZWFtSGFuZGxpbmdNaWRkbGV3YXJlT3B0aW9ucztcbmV4cG9ydHMuZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlID0gZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlO1xuZXhwb3J0cy5ldmVudFN0cmVhbUhlYWRlck1pZGRsZXdhcmVPcHRpb25zID0gZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlT3B0aW9ucztcbmV4cG9ydHMuZ2V0RXZlbnRTdHJlYW1QbHVnaW4gPSBnZXRFdmVudFN0cmVhbVBsdWdpbjtcbmV4cG9ydHMucmVzb2x2ZUV2ZW50U3RyZWFtQ29uZmlnID0gcmVzb2x2ZUV2ZW50U3RyZWFtQ29uZmlnO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHF1ZXJ5c3RyaW5nQnVpbGRlciA9IHJlcXVpcmUoJ0BzbWl0aHkvcXVlcnlzdHJpbmctYnVpbGRlcicpO1xuXG5mdW5jdGlvbiBmb3JtYXRVcmwocmVxdWVzdCkge1xuICAgIGNvbnN0IHsgcG9ydCwgcXVlcnkgfSA9IHJlcXVlc3Q7XG4gICAgbGV0IHsgcHJvdG9jb2wsIHBhdGgsIGhvc3RuYW1lIH0gPSByZXF1ZXN0O1xuICAgIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zbGljZSgtMSkgIT09IFwiOlwiKSB7XG4gICAgICAgIHByb3RvY29sICs9IFwiOlwiO1xuICAgIH1cbiAgICBpZiAocG9ydCkge1xuICAgICAgICBob3N0bmFtZSArPSBgOiR7cG9ydH1gO1xuICAgIH1cbiAgICBpZiAocGF0aCAmJiBwYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcbiAgICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgfVxuICAgIGxldCBxdWVyeVN0cmluZyA9IHF1ZXJ5ID8gcXVlcnlzdHJpbmdCdWlsZGVyLmJ1aWxkUXVlcnlTdHJpbmcocXVlcnkpIDogXCJcIjtcbiAgICBpZiAocXVlcnlTdHJpbmcgJiYgcXVlcnlTdHJpbmdbMF0gIT09IFwiP1wiKSB7XG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgfVxuICAgIGxldCBhdXRoID0gXCJcIjtcbiAgICBpZiAocmVxdWVzdC51c2VybmFtZSAhPSBudWxsIHx8IHJlcXVlc3QucGFzc3dvcmQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IHJlcXVlc3QudXNlcm5hbWUgPz8gXCJcIjtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSByZXF1ZXN0LnBhc3N3b3JkID8/IFwiXCI7XG4gICAgICAgIGF1dGggPSBgJHt1c2VybmFtZX06JHtwYXNzd29yZH1AYDtcbiAgICB9XG4gICAgbGV0IGZyYWdtZW50ID0gXCJcIjtcbiAgICBpZiAocmVxdWVzdC5mcmFnbWVudCkge1xuICAgICAgICBmcmFnbWVudCA9IGAjJHtyZXF1ZXN0LmZyYWdtZW50fWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7YXV0aH0ke2hvc3RuYW1lfSR7cGF0aH0ke3F1ZXJ5U3RyaW5nfSR7ZnJhZ21lbnR9YDtcbn1cblxuZXhwb3J0cy5mb3JtYXRVcmwgPSBmb3JtYXRVcmw7XG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIGlzQXJyYXlCdWZmZXI6ICgpID0+IGlzQXJyYXlCdWZmZXJcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xudmFyIGlzQXJyYXlCdWZmZXIgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChhcmcpID0+IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIGFyZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsIFwiaXNBcnJheUJ1ZmZlclwiKTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcblxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXlCdWZmZXJcbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIGZyb21BcnJheUJ1ZmZlcjogKCkgPT4gZnJvbUFycmF5QnVmZmVyLFxuICBmcm9tU3RyaW5nOiAoKSA9PiBmcm9tU3RyaW5nXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcbnZhciBpbXBvcnRfaXNfYXJyYXlfYnVmZmVyID0gcmVxdWlyZShcIkBzbWl0aHkvaXMtYXJyYXktYnVmZmVyXCIpO1xudmFyIGltcG9ydF9idWZmZXIgPSByZXF1aXJlKFwiYnVmZmVyXCIpO1xudmFyIGZyb21BcnJheUJ1ZmZlciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGlucHV0LCBvZmZzZXQgPSAwLCBsZW5ndGggPSBpbnB1dC5ieXRlTGVuZ3RoIC0gb2Zmc2V0KSA9PiB7XG4gIGlmICghKDAsIGltcG9ydF9pc19hcnJheV9idWZmZXIuaXNBcnJheUJ1ZmZlcikoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIEFycmF5QnVmZmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gIH1cbiAgcmV0dXJuIGltcG9ydF9idWZmZXIuQnVmZmVyLmZyb20oaW5wdXQsIG9mZnNldCwgbGVuZ3RoKTtcbn0sIFwiZnJvbUFycmF5QnVmZmVyXCIpO1xudmFyIGZyb21TdHJpbmcgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChpbnB1dCwgZW5jb2RpbmcpID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcImlucHV0XCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBpbnB1dH0gKCR7aW5wdXR9KWApO1xuICB9XG4gIHJldHVybiBlbmNvZGluZyA/IGltcG9ydF9idWZmZXIuQnVmZmVyLmZyb20oaW5wdXQsIGVuY29kaW5nKSA6IGltcG9ydF9idWZmZXIuQnVmZmVyLmZyb20oaW5wdXQpO1xufSwgXCJmcm9tU3RyaW5nXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZnJvbUFycmF5QnVmZmVyLFxuICBmcm9tU3RyaW5nXG59KTtcblxuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBmcm9tVXRmODogKCkgPT4gZnJvbVV0ZjgsXG4gIHRvVWludDhBcnJheTogKCkgPT4gdG9VaW50OEFycmF5LFxuICB0b1V0Zjg6ICgpID0+IHRvVXRmOFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9mcm9tVXRmOC50c1xudmFyIGltcG9ydF91dGlsX2J1ZmZlcl9mcm9tID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiKTtcbnZhciBmcm9tVXRmOCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGlucHV0KSA9PiB7XG4gIGNvbnN0IGJ1ZiA9ICgwLCBpbXBvcnRfdXRpbF9idWZmZXJfZnJvbS5mcm9tU3RyaW5nKShpbnB1dCwgXCJ1dGY4XCIpO1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG59LCBcImZyb21VdGY4XCIpO1xuXG4vLyBzcmMvdG9VaW50OEFycmF5LnRzXG52YXIgdG9VaW50OEFycmF5ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoZGF0YSkgPT4ge1xuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gIH1cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59LCBcInRvVWludDhBcnJheVwiKTtcblxuLy8gc3JjL3RvVXRmOC50c1xuXG52YXIgdG9VdGY4ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoaW5wdXQpID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlT2Zmc2V0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlTGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeS91dGlsLXV0Zjg6IHRvVXRmOCBlbmNvZGVyIGZ1bmN0aW9uIG9ubHkgYWNjZXB0cyBzdHJpbmcgfCBVaW50OEFycmF5LlwiKTtcbiAgfVxuICByZXR1cm4gKDAsIGltcG9ydF91dGlsX2J1ZmZlcl9mcm9tLmZyb21BcnJheUJ1ZmZlcikoaW5wdXQuYnVmZmVyLCBpbnB1dC5ieXRlT2Zmc2V0LCBpbnB1dC5ieXRlTGVuZ3RoKS50b1N0cmluZyhcInV0ZjhcIik7XG59LCBcInRvVXRmOFwiKTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcblxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZyb21VdGY4LFxuICB0b1VpbnQ4QXJyYXksXG4gIHRvVXRmOFxufSk7XG5cbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgZnJvbVV0ZjggYXMgZnJvbVV0ZjhCcm93c2VyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC11dGY4XCI7XG5cbi8vIFF1aWNrIHBvbHlmaWxsXG5jb25zdCBmcm9tVXRmOCA9XG4gIHR5cGVvZiBCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQnVmZmVyLmZyb21cbiAgICA/IChpbnB1dDogc3RyaW5nKSA9PiBCdWZmZXIuZnJvbShpbnB1dCwgXCJ1dGY4XCIpXG4gICAgOiBmcm9tVXRmOEJyb3dzZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9CdWZmZXIoZGF0YTogU291cmNlRGF0YSk6IFVpbnQ4QXJyYXkge1xuICAvLyBBbHJlYWR5IGEgVWludDgsIGRvIG5vdGhpbmdcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSByZXR1cm4gZGF0YTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFxuICAgICAgZGF0YS5idWZmZXIsXG4gICAgICBkYXRhLmJ5dGVPZmZzZXQsXG4gICAgICBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn1cbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eURhdGEoZGF0YTogU291cmNlRGF0YSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZGF0YS5sZW5ndGggPT09IDA7XG4gIH1cblxuICByZXR1cm4gZGF0YS5ieXRlTGVuZ3RoID09PSAwO1xufVxuIiwgIi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9VaW50OChudW06IG51bWJlcikge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgIChudW0gJiAweGZmMDAwMDAwKSA+PiAyNCxcbiAgICAobnVtICYgMHgwMGZmMDAwMCkgPj4gMTYsXG4gICAgKG51bSAmIDB4MDAwMGZmMDApID4+IDgsXG4gICAgbnVtICYgMHgwMDAwMDBmZixcbiAgXSk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIElFIDExIGRvZXMgbm90IHN1cHBvcnQgQXJyYXkuZnJvbSwgc28gd2UgZG8gaXQgbWFudWFsbHlcbmV4cG9ydCBmdW5jdGlvbiB1aW50MzJBcnJheUZyb20oYV9sb29rVXBUYWJsZTogQXJyYXk8bnVtYmVyPik6IFVpbnQzMkFycmF5IHtcbiAgaWYgKCFVaW50MzJBcnJheS5mcm9tKSB7XG4gICAgY29uc3QgcmV0dXJuX2FycmF5ID0gbmV3IFVpbnQzMkFycmF5KGFfbG9va1VwVGFibGUubGVuZ3RoKVxuICAgIGxldCBhX2luZGV4ID0gMFxuICAgIHdoaWxlIChhX2luZGV4IDwgYV9sb29rVXBUYWJsZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybl9hcnJheVthX2luZGV4XSA9IGFfbG9va1VwVGFibGVbYV9pbmRleF1cbiAgICAgIGFfaW5kZXggKz0gMVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuX2FycmF5XG4gIH1cbiAgcmV0dXJuIFVpbnQzMkFycmF5LmZyb20oYV9sb29rVXBUYWJsZSlcbn1cbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IHsgY29udmVydFRvQnVmZmVyIH0gZnJvbSBcIi4vY29udmVydFRvQnVmZmVyXCI7XG5leHBvcnQgeyBpc0VtcHR5RGF0YSB9IGZyb20gXCIuL2lzRW1wdHlEYXRhXCI7XG5leHBvcnQgeyBudW1Ub1VpbnQ4IH0gZnJvbSBcIi4vbnVtVG9VaW50OFwiO1xuZXhwb3J0IHt1aW50MzJBcnJheUZyb219IGZyb20gJy4vdWludDMyQXJyYXlGcm9tJztcbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU291cmNlRGF0YSwgQ2hlY2tzdW0gfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGNvbnZlcnRUb0J1ZmZlciwgaXNFbXB0eURhdGEsIG51bVRvVWludDggfSBmcm9tIFwiQGF3cy1jcnlwdG8vdXRpbFwiO1xuaW1wb3J0IHsgQ3JjMzIgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgQXdzQ3JjMzIgaW1wbGVtZW50cyBDaGVja3N1bSB7XG4gIHByaXZhdGUgY3JjMzIgPSBuZXcgQ3JjMzIoKTtcblxuICB1cGRhdGUodG9IYXNoOiBTb3VyY2VEYXRhKSB7XG4gICAgaWYgKGlzRW1wdHlEYXRhKHRvSGFzaCkpIHJldHVybjtcblxuICAgIHRoaXMuY3JjMzIudXBkYXRlKGNvbnZlcnRUb0J1ZmZlcih0b0hhc2gpKTtcbiAgfVxuXG4gIGFzeW5jIGRpZ2VzdCgpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICByZXR1cm4gbnVtVG9VaW50OCh0aGlzLmNyYzMyLmRpZ2VzdCgpKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JjMzIgPSBuZXcgQ3JjMzIoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7dWludDMyQXJyYXlGcm9tfSBmcm9tIFwiQGF3cy1jcnlwdG8vdXRpbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JjMzIoZGF0YTogVWludDhBcnJheSk6IG51bWJlciB7XG4gIHJldHVybiBuZXcgQ3JjMzIoKS51cGRhdGUoZGF0YSkuZGlnZXN0KCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmMzMiB7XG4gIHByaXZhdGUgY2hlY2tzdW0gPSAweGZmZmZmZmZmO1xuXG4gIHVwZGF0ZShkYXRhOiBVaW50OEFycmF5KTogdGhpcyB7XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGRhdGEpIHtcbiAgICAgIHRoaXMuY2hlY2tzdW0gPVxuICAgICAgICAodGhpcy5jaGVja3N1bSA+Pj4gOCkgXiBsb29rdXBUYWJsZVsodGhpcy5jaGVja3N1bSBeIGJ5dGUpICYgMHhmZl07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaWdlc3QoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuY2hlY2tzdW0gXiAweGZmZmZmZmZmKSA+Pj4gMDtcbiAgfVxufVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGFfbG9va1VwVGFibGUgPSBbXG4gIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4RUUwRTYxMkMsIDB4OTkwOTUxQkEsXG4gIDB4MDc2REM0MTksIDB4NzA2QUY0OEYsIDB4RTk2M0E1MzUsIDB4OUU2NDk1QTMsXG4gIDB4MEVEQjg4MzIsIDB4NzlEQ0I4QTQsIDB4RTBENUU5MUUsIDB4OTdEMkQ5ODgsXG4gIDB4MDlCNjRDMkIsIDB4N0VCMTdDQkQsIDB4RTdCODJEMDcsIDB4OTBCRjFEOTEsXG4gIDB4MURCNzEwNjQsIDB4NkFCMDIwRjIsIDB4RjNCOTcxNDgsIDB4ODRCRTQxREUsXG4gIDB4MUFEQUQ0N0QsIDB4NkREREU0RUIsIDB4RjRENEI1NTEsIDB4ODNEMzg1QzcsXG4gIDB4MTM2Qzk4NTYsIDB4NjQ2QkE4QzAsIDB4RkQ2MkY5N0EsIDB4OEE2NUM5RUMsXG4gIDB4MTQwMTVDNEYsIDB4NjMwNjZDRDksIDB4RkEwRjNENjMsIDB4OEQwODBERjUsXG4gIDB4M0I2RTIwQzgsIDB4NEM2OTEwNUUsIDB4RDU2MDQxRTQsIDB4QTI2NzcxNzIsXG4gIDB4M0MwM0U0RDEsIDB4NEIwNEQ0NDcsIDB4RDIwRDg1RkQsIDB4QTUwQUI1NkIsXG4gIDB4MzVCNUE4RkEsIDB4NDJCMjk4NkMsIDB4REJCQkM5RDYsIDB4QUNCQ0Y5NDAsXG4gIDB4MzJEODZDRTMsIDB4NDVERjVDNzUsIDB4RENENjBEQ0YsIDB4QUJEMTNENTksXG4gIDB4MjZEOTMwQUMsIDB4NTFERTAwM0EsIDB4QzhENzUxODAsIDB4QkZEMDYxMTYsXG4gIDB4MjFCNEY0QjUsIDB4NTZCM0M0MjMsIDB4Q0ZCQTk1OTksIDB4QjhCREE1MEYsXG4gIDB4MjgwMkI4OUUsIDB4NUYwNTg4MDgsIDB4QzYwQ0Q5QjIsIDB4QjEwQkU5MjQsXG4gIDB4MkY2RjdDODcsIDB4NTg2ODRDMTEsIDB4QzE2MTFEQUIsIDB4QjY2NjJEM0QsXG4gIDB4NzZEQzQxOTAsIDB4MDFEQjcxMDYsIDB4OThEMjIwQkMsIDB4RUZENTEwMkEsXG4gIDB4NzFCMTg1ODksIDB4MDZCNkI1MUYsIDB4OUZCRkU0QTUsIDB4RThCOEQ0MzMsXG4gIDB4NzgwN0M5QTIsIDB4MEYwMEY5MzQsIDB4OTYwOUE4OEUsIDB4RTEwRTk4MTgsXG4gIDB4N0Y2QTBEQkIsIDB4MDg2RDNEMkQsIDB4OTE2NDZDOTcsIDB4RTY2MzVDMDEsXG4gIDB4NkI2QjUxRjQsIDB4MUM2QzYxNjIsIDB4ODU2NTMwRDgsIDB4RjI2MjAwNEUsXG4gIDB4NkMwNjk1RUQsIDB4MUIwMUE1N0IsIDB4ODIwOEY0QzEsIDB4RjUwRkM0NTcsXG4gIDB4NjVCMEQ5QzYsIDB4MTJCN0U5NTAsIDB4OEJCRUI4RUEsIDB4RkNCOTg4N0MsXG4gIDB4NjJERDFEREYsIDB4MTVEQTJENDksIDB4OENEMzdDRjMsIDB4RkJENDRDNjUsXG4gIDB4NERCMjYxNTgsIDB4M0FCNTUxQ0UsIDB4QTNCQzAwNzQsIDB4RDRCQjMwRTIsXG4gIDB4NEFERkE1NDEsIDB4M0REODk1RDcsIDB4QTREMUM0NkQsIDB4RDNENkY0RkIsXG4gIDB4NDM2OUU5NkEsIDB4MzQ2RUQ5RkMsIDB4QUQ2Nzg4NDYsIDB4REE2MEI4RDAsXG4gIDB4NDQwNDJENzMsIDB4MzMwMzFERTUsIDB4QUEwQTRDNUYsIDB4REQwRDdDQzksXG4gIDB4NTAwNTcxM0MsIDB4MjcwMjQxQUEsIDB4QkUwQjEwMTAsIDB4QzkwQzIwODYsXG4gIDB4NTc2OEI1MjUsIDB4MjA2Rjg1QjMsIDB4Qjk2NkQ0MDksIDB4Q0U2MUU0OUYsXG4gIDB4NUVERUY5MEUsIDB4MjlEOUM5OTgsIDB4QjBEMDk4MjIsIDB4QzdEN0E4QjQsXG4gIDB4NTlCMzNEMTcsIDB4MkVCNDBEODEsIDB4QjdCRDVDM0IsIDB4QzBCQTZDQUQsXG4gIDB4RURCODgzMjAsIDB4OUFCRkIzQjYsIDB4MDNCNkUyMEMsIDB4NzRCMUQyOUEsXG4gIDB4RUFENTQ3MzksIDB4OUREMjc3QUYsIDB4MDREQjI2MTUsIDB4NzNEQzE2ODMsXG4gIDB4RTM2MzBCMTIsIDB4OTQ2NDNCODQsIDB4MEQ2RDZBM0UsIDB4N0E2QTVBQTgsXG4gIDB4RTQwRUNGMEIsIDB4OTMwOUZGOUQsIDB4MEEwMEFFMjcsIDB4N0QwNzlFQjEsXG4gIDB4RjAwRjkzNDQsIDB4ODcwOEEzRDIsIDB4MUUwMUYyNjgsIDB4NjkwNkMyRkUsXG4gIDB4Rjc2MjU3NUQsIDB4ODA2NTY3Q0IsIDB4MTk2QzM2NzEsIDB4NkU2QjA2RTcsXG4gIDB4RkVENDFCNzYsIDB4ODlEMzJCRTAsIDB4MTBEQTdBNUEsIDB4NjdERDRBQ0MsXG4gIDB4RjlCOURGNkYsIDB4OEVCRUVGRjksIDB4MTdCN0JFNDMsIDB4NjBCMDhFRDUsXG4gIDB4RDZENkEzRTgsIDB4QTFEMTkzN0UsIDB4MzhEOEMyQzQsIDB4NEZERkYyNTIsXG4gIDB4RDFCQjY3RjEsIDB4QTZCQzU3NjcsIDB4M0ZCNTA2REQsIDB4NDhCMjM2NEIsXG4gIDB4RDgwRDJCREEsIDB4QUYwQTFCNEMsIDB4MzYwMzRBRjYsIDB4NDEwNDdBNjAsXG4gIDB4REY2MEVGQzMsIDB4QTg2N0RGNTUsIDB4MzE2RThFRUYsIDB4NDY2OUJFNzksXG4gIDB4Q0I2MUIzOEMsIDB4QkM2NjgzMUEsIDB4MjU2RkQyQTAsIDB4NTI2OEUyMzYsXG4gIDB4Q0MwQzc3OTUsIDB4QkIwQjQ3MDMsIDB4MjIwMjE2QjksIDB4NTUwNTI2MkYsXG4gIDB4QzVCQTNCQkUsIDB4QjJCRDBCMjgsIDB4MkJCNDVBOTIsIDB4NUNCMzZBMDQsXG4gIDB4QzJEN0ZGQTcsIDB4QjVEMENGMzEsIDB4MkNEOTlFOEIsIDB4NUJERUFFMUQsXG4gIDB4OUI2NEMyQjAsIDB4RUM2M0YyMjYsIDB4NzU2QUEzOUMsIDB4MDI2RDkzMEEsXG4gIDB4OUMwOTA2QTksIDB4RUIwRTM2M0YsIDB4NzIwNzY3ODUsIDB4MDUwMDU3MTMsXG4gIDB4OTVCRjRBODIsIDB4RTJCODdBMTQsIDB4N0JCMTJCQUUsIDB4MENCNjFCMzgsXG4gIDB4OTJEMjhFOUIsIDB4RTVENUJFMEQsIDB4N0NEQ0VGQjcsIDB4MEJEQkRGMjEsXG4gIDB4ODZEM0QyRDQsIDB4RjFENEUyNDIsIDB4NjhEREIzRjgsIDB4MUZEQTgzNkUsXG4gIDB4ODFCRTE2Q0QsIDB4RjZCOTI2NUIsIDB4NkZCMDc3RTEsIDB4MThCNzQ3NzcsXG4gIDB4ODgwODVBRTYsIDB4RkYwRjZBNzAsIDB4NjYwNjNCQ0EsIDB4MTEwMTBCNUMsXG4gIDB4OEY2NTlFRkYsIDB4Rjg2MkFFNjksIDB4NjE2QkZGRDMsIDB4MTY2Q0NGNDUsXG4gIDB4QTAwQUUyNzgsIDB4RDcwREQyRUUsIDB4NEUwNDgzNTQsIDB4MzkwM0IzQzIsXG4gIDB4QTc2NzI2NjEsIDB4RDA2MDE2RjcsIDB4NDk2OTQ3NEQsIDB4M0U2RTc3REIsXG4gIDB4QUVEMTZBNEEsIDB4RDlENjVBREMsIDB4NDBERjBCNjYsIDB4MzdEODNCRjAsXG4gIDB4QTlCQ0FFNTMsIDB4REVCQjlFQzUsIDB4NDdCMkNGN0YsIDB4MzBCNUZGRTksXG4gIDB4QkRCREYyMUMsIDB4Q0FCQUMyOEEsIDB4NTNCMzkzMzAsIDB4MjRCNEEzQTYsXG4gIDB4QkFEMDM2MDUsIDB4Q0RENzA2OTMsIDB4NTRERTU3MjksIDB4MjNEOTY3QkYsXG4gIDB4QjM2NjdBMkUsIDB4QzQ2MTRBQjgsIDB4NUQ2ODFCMDIsIDB4MkE2RjJCOTQsXG4gIDB4QjQwQkJFMzcsIDB4QzMwQzhFQTEsIDB4NUEwNURGMUIsIDB4MkQwMkVGOEQsXG5dO1xuY29uc3QgbG9va3VwVGFibGU6IFVpbnQzMkFycmF5ID0gdWludDMyQXJyYXlGcm9tKGFfbG9va1VwVGFibGUpXG5leHBvcnQgeyBBd3NDcmMzMiB9IGZyb20gXCIuL2F3c19jcmMzMlwiO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGNyYzMyID0gcmVxdWlyZSgnQGF3cy1jcnlwdG8vY3JjMzInKTtcbnZhciB1dGlsSGV4RW5jb2RpbmcgPSByZXF1aXJlKCdAc21pdGh5L3V0aWwtaGV4LWVuY29kaW5nJyk7XG5cbmNsYXNzIEludDY0IHtcbiAgICBieXRlcztcbiAgICBjb25zdHJ1Y3RvcihieXRlcykge1xuICAgICAgICB0aGlzLmJ5dGVzID0gYnl0ZXM7XG4gICAgICAgIGlmIChieXRlcy5ieXRlTGVuZ3RoICE9PSA4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnQ2NCBidWZmZXJzIG11c3QgYmUgZXhhY3RseSA4IGJ5dGVzXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyID4gOV8yMjNfMzcyXzAzNl84NTRfNzc1XzgwNyB8fCBudW1iZXIgPCAtOTIyMzM3MjAzNjg1NDc3NmUzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bnVtYmVyfSBpcyB0b28gbGFyZ2UgKG9yLCBpZiBuZWdhdGl2ZSwgdG9vIHNtYWxsKSB0byByZXByZXNlbnQgYXMgYW4gSW50NjRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDgpO1xuICAgICAgICBmb3IgKGxldCBpID0gNywgcmVtYWluaW5nID0gTWF0aC5hYnMoTWF0aC5yb3VuZChudW1iZXIpKTsgaSA+IC0xICYmIHJlbWFpbmluZyA+IDA7IGktLSwgcmVtYWluaW5nIC89IDI1Nikge1xuICAgICAgICAgICAgYnl0ZXNbaV0gPSByZW1haW5pbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIG5lZ2F0ZShieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ2NChieXRlcyk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5ieXRlcy5zbGljZSgwKTtcbiAgICAgICAgY29uc3QgbmVnYXRpdmUgPSBieXRlc1swXSAmIDBiMTAwMDAwMDA7XG4gICAgICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICAgICAgbmVnYXRlKGJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodXRpbEhleEVuY29kaW5nLnRvSGV4KGJ5dGVzKSwgMTYpICogKG5lZ2F0aXZlID8gLTEgOiAxKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5lZ2F0ZShieXRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldIF49IDB4ZmY7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSA3OyBpID4gLTE7IGktLSkge1xuICAgICAgICBieXRlc1tpXSsrO1xuICAgICAgICBpZiAoYnl0ZXNbaV0gIT09IDApXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNsYXNzIEhlYWRlck1hcnNoYWxsZXIge1xuICAgIHRvVXRmODtcbiAgICBmcm9tVXRmODtcbiAgICBjb25zdHJ1Y3Rvcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgICAgIHRoaXMudG9VdGY4ID0gdG9VdGY4O1xuICAgICAgICB0aGlzLmZyb21VdGY4ID0gZnJvbVV0Zjg7XG4gICAgfVxuICAgIGZvcm1hdChoZWFkZXJzKSB7XG4gICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5mcm9tVXRmOChoZWFkZXJOYW1lKTtcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKFVpbnQ4QXJyYXkuZnJvbShbYnl0ZXMuYnl0ZUxlbmd0aF0pLCBieXRlcywgdGhpcy5mb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXJzW2hlYWRlck5hbWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtzLnJlZHVjZSgoY2FycnksIGJ5dGVzKSA9PiBjYXJyeSArIGJ5dGVzLmJ5dGVMZW5ndGgsIDApKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcbiAgICAgICAgICAgIG91dC5zZXQoY2h1bmssIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZm9ybWF0SGVhZGVyVmFsdWUoaGVhZGVyKSB7XG4gICAgICAgIHN3aXRjaCAoaGVhZGVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShbaGVhZGVyLnZhbHVlID8gMCA6IDFdKTtcbiAgICAgICAgICAgIGNhc2UgXCJieXRlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShbMiwgaGVhZGVyLnZhbHVlXSk7XG4gICAgICAgICAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBzaG9ydFZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMpKTtcbiAgICAgICAgICAgICAgICBzaG9ydFZpZXcuc2V0VWludDgoMCwgMyk7XG4gICAgICAgICAgICAgICAgc2hvcnRWaWV3LnNldEludDE2KDEsIGhlYWRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShzaG9ydFZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJpbnRlZ2VyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgaW50VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoNSkpO1xuICAgICAgICAgICAgICAgIGludFZpZXcuc2V0VWludDgoMCwgNCk7XG4gICAgICAgICAgICAgICAgaW50Vmlldy5zZXRJbnQzMigxLCBoZWFkZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoaW50Vmlldy5idWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcImxvbmdcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBsb25nQnl0ZXMgPSBuZXcgVWludDhBcnJheSg5KTtcbiAgICAgICAgICAgICAgICBsb25nQnl0ZXNbMF0gPSA1O1xuICAgICAgICAgICAgICAgIGxvbmdCeXRlcy5zZXQoaGVhZGVyLnZhbHVlLmJ5dGVzLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZ0J5dGVzO1xuICAgICAgICAgICAgY2FzZSBcImJpbmFyeVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJpblZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIGJpblZpZXcuc2V0VWludDgoMCwgNik7XG4gICAgICAgICAgICAgICAgYmluVmlldy5zZXRVaW50MTYoMSwgaGVhZGVyLnZhbHVlLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5CeXRlcyA9IG5ldyBVaW50OEFycmF5KGJpblZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICBiaW5CeXRlcy5zZXQoaGVhZGVyLnZhbHVlLCAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgdXRmOEJ5dGVzID0gdGhpcy5mcm9tVXRmOChoZWFkZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0clZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHN0clZpZXcuc2V0VWludDgoMCwgNyk7XG4gICAgICAgICAgICAgICAgc3RyVmlldy5zZXRVaW50MTYoMSwgdXRmOEJ5dGVzLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJCeXRlcyA9IG5ldyBVaW50OEFycmF5KHN0clZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICBzdHJCeXRlcy5zZXQodXRmOEJ5dGVzLCAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwidGltZXN0YW1wXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgdHNCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICAgICAgICAgIHRzQnl0ZXNbMF0gPSA4O1xuICAgICAgICAgICAgICAgIHRzQnl0ZXMuc2V0KEludDY0LmZyb21OdW1iZXIoaGVhZGVyLnZhbHVlLnZhbHVlT2YoKSkuYnl0ZXMsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0c0J5dGVzO1xuICAgICAgICAgICAgY2FzZSBcInV1aWRcIjpcbiAgICAgICAgICAgICAgICBpZiAoIVVVSURfUEFUVEVSTi50ZXN0KGhlYWRlci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVVSUQgcmVjZWl2ZWQ6ICR7aGVhZGVyLnZhbHVlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkQnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNyk7XG4gICAgICAgICAgICAgICAgdXVpZEJ5dGVzWzBdID0gOTtcbiAgICAgICAgICAgICAgICB1dWlkQnl0ZXMuc2V0KHV0aWxIZXhFbmNvZGluZy5mcm9tSGV4KGhlYWRlci52YWx1ZS5yZXBsYWNlKC9cXC0vZywgXCJcIikpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXVpZEJ5dGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlKGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0ge307XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGhlYWRlcnMuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbmFtZUxlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDgocG9zaXRpb24rKyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBuYW1lTGVuZ3RoKSk7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSBuYW1lTGVuZ3RoO1xuICAgICAgICAgICAgc3dpdGNoIChoZWFkZXJzLmdldFVpbnQ4KHBvc2l0aW9uKyspKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCT09MRUFOX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEJPT0xFQU5fVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEJZVEVfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGhlYWRlcnMuZ2V0SW50OChwb3NpdGlvbisrKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBTSE9SVF9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQxNihwb3NpdGlvbiwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IElOVF9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQzMihwb3NpdGlvbiwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExPTkdfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBJbnQ2NChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIDgpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5hcnlMZW5ndGggPSBoZWFkZXJzLmdldFVpbnQxNihwb3NpdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCSU5BUllfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgYmluYXJ5TGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gYmluYXJ5TGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDE2KHBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFNUUklOR19UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBzdHJpbmdMZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gc3RyaW5nTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRJTUVTVEFNUF9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUobmV3IEludDY0KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgOCkpLnZhbHVlT2YoKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXVpZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCAxNik7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDE2O1xuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVVUlEX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHt1dGlsSGV4RW5jb2RpbmcudG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDAsIDQpKX0tJHt1dGlsSGV4RW5jb2RpbmcudG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDQsIDYpKX0tJHt1dGlsSGV4RW5jb2RpbmcudG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDYsIDgpKX0tJHt1dGlsSGV4RW5jb2RpbmcudG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDgsIDEwKSl9LSR7dXRpbEhleEVuY29kaW5nLnRvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSgxMCkpfWAsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGhlYWRlciB0eXBlIHRhZ2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuY29uc3QgQk9PTEVBTl9UQUcgPSBcImJvb2xlYW5cIjtcbmNvbnN0IEJZVEVfVEFHID0gXCJieXRlXCI7XG5jb25zdCBTSE9SVF9UQUcgPSBcInNob3J0XCI7XG5jb25zdCBJTlRfVEFHID0gXCJpbnRlZ2VyXCI7XG5jb25zdCBMT05HX1RBRyA9IFwibG9uZ1wiO1xuY29uc3QgQklOQVJZX1RBRyA9IFwiYmluYXJ5XCI7XG5jb25zdCBTVFJJTkdfVEFHID0gXCJzdHJpbmdcIjtcbmNvbnN0IFRJTUVTVEFNUF9UQUcgPSBcInRpbWVzdGFtcFwiO1xuY29uc3QgVVVJRF9UQUcgPSBcInV1aWRcIjtcbmNvbnN0IFVVSURfUEFUVEVSTiA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tW2EtZjAtOV17NH0tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9JC87XG5cbmNvbnN0IFBSRUxVREVfTUVNQkVSX0xFTkdUSCA9IDQ7XG5jb25zdCBQUkVMVURFX0xFTkdUSCA9IFBSRUxVREVfTUVNQkVSX0xFTkdUSCAqIDI7XG5jb25zdCBDSEVDS1NVTV9MRU5HVEggPSA0O1xuY29uc3QgTUlOSU1VTV9NRVNTQUdFX0xFTkdUSCA9IFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIICogMjtcbmZ1bmN0aW9uIHNwbGl0TWVzc2FnZSh7IGJ5dGVMZW5ndGgsIGJ5dGVPZmZzZXQsIGJ1ZmZlciB9KSB7XG4gICAgaWYgKGJ5dGVMZW5ndGggPCBNSU5JTVVNX01FU1NBR0VfTEVOR1RIKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIG1lc3NhZ2UgdG9vIHNob3J0IHRvIGFjY29tbW9kYXRlIGV2ZW50IHN0cmVhbSBtZXNzYWdlIG92ZXJoZWFkXCIpO1xuICAgIH1cbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XG4gICAgY29uc3QgbWVzc2FnZUxlbmd0aCA9IHZpZXcuZ2V0VWludDMyKDAsIGZhbHNlKTtcbiAgICBpZiAoYnl0ZUxlbmd0aCAhPT0gbWVzc2FnZUxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBvcnRlZCBtZXNzYWdlIGxlbmd0aCBkb2VzIG5vdCBtYXRjaCByZWNlaXZlZCBtZXNzYWdlIGxlbmd0aFwiKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyTGVuZ3RoID0gdmlldy5nZXRVaW50MzIoUFJFTFVERV9NRU1CRVJfTEVOR1RILCBmYWxzZSk7XG4gICAgY29uc3QgZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX0xFTkdUSCwgZmFsc2UpO1xuICAgIGNvbnN0IGV4cGVjdGVkTWVzc2FnZUNoZWNrc3VtID0gdmlldy5nZXRVaW50MzIoYnl0ZUxlbmd0aCAtIENIRUNLU1VNX0xFTkdUSCwgZmFsc2UpO1xuICAgIGNvbnN0IGNoZWNrc3VtbWVyID0gbmV3IGNyYzMyLkNyYzMyKCkudXBkYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgUFJFTFVERV9MRU5HVEgpKTtcbiAgICBpZiAoZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gIT09IGNoZWNrc3VtbWVyLmRpZ2VzdCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHByZWx1ZGUgY2hlY2tzdW0gc3BlY2lmaWVkIGluIHRoZSBtZXNzYWdlICgke2V4cGVjdGVkUHJlbHVkZUNoZWNrc3VtfSkgZG9lcyBub3QgbWF0Y2ggdGhlIGNhbGN1bGF0ZWQgQ1JDMzIgY2hlY2tzdW0gKCR7Y2hlY2tzdW1tZXIuZGlnZXN0KCl9KWApO1xuICAgIH1cbiAgICBjaGVja3N1bW1lci51cGRhdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0ICsgUFJFTFVERV9MRU5HVEgsIGJ5dGVMZW5ndGggLSAoUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEgpKSk7XG4gICAgaWYgKGV4cGVjdGVkTWVzc2FnZUNoZWNrc3VtICE9PSBjaGVja3N1bW1lci5kaWdlc3QoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtZXNzYWdlIGNoZWNrc3VtICgke2NoZWNrc3VtbWVyLmRpZ2VzdCgpfSkgZGlkIG5vdCBtYXRjaCB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgJHtleHBlY3RlZE1lc3NhZ2VDaGVja3N1bX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczogbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCArIFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RILCBoZWFkZXJMZW5ndGgpLFxuICAgICAgICBib2R5OiBuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQgKyBQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCArIGhlYWRlckxlbmd0aCwgbWVzc2FnZUxlbmd0aCAtIGhlYWRlckxlbmd0aCAtIChQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCkpLFxuICAgIH07XG59XG5cbmNsYXNzIEV2ZW50U3RyZWFtQ29kZWMge1xuICAgIGhlYWRlck1hcnNoYWxsZXI7XG4gICAgbWVzc2FnZUJ1ZmZlcjtcbiAgICBpc0VuZE9mU3RyZWFtO1xuICAgIGNvbnN0cnVjdG9yKHRvVXRmOCwgZnJvbVV0ZjgpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJNYXJzaGFsbGVyID0gbmV3IEhlYWRlck1hcnNoYWxsZXIodG9VdGY4LCBmcm9tVXRmOCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmlzRW5kT2ZTdHJlYW0gPSBmYWxzZTtcbiAgICB9XG4gICAgZmVlZChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUJ1ZmZlci5wdXNoKHRoaXMuZGVjb2RlKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgIHRoaXMuaXNFbmRPZlN0cmVhbSA9IHRydWU7XG4gICAgfVxuICAgIGdldE1lc3NhZ2UoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VCdWZmZXIucG9wKCk7XG4gICAgICAgIGNvbnN0IGlzRW5kT2ZTdHJlYW0gPSB0aGlzLmlzRW5kT2ZTdHJlYW07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRNZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRW5kT2ZTdHJlYW07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRBdmFpbGFibGVNZXNzYWdlcygpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VCdWZmZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZUJ1ZmZlciA9IFtdO1xuICAgICAgICBjb25zdCBpc0VuZE9mU3RyZWFtID0gdGhpcy5pc0VuZE9mU3RyZWFtO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRW5kT2ZTdHJlYW07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbmNvZGUoeyBoZWFkZXJzOiByYXdIZWFkZXJzLCBib2R5IH0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuaGVhZGVyTWFyc2hhbGxlci5mb3JtYXQocmF3SGVhZGVycyk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhlYWRlcnMuYnl0ZUxlbmd0aCArIGJvZHkuYnl0ZUxlbmd0aCArIDE2O1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KG91dC5idWZmZXIsIG91dC5ieXRlT2Zmc2V0LCBvdXQuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNoZWNrc3VtID0gbmV3IGNyYzMyLkNyYzMyKCk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDAsIGxlbmd0aCwgZmFsc2UpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMig0LCBoZWFkZXJzLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIoOCwgY2hlY2tzdW0udXBkYXRlKG91dC5zdWJhcnJheSgwLCA4KSkuZGlnZXN0KCksIGZhbHNlKTtcbiAgICAgICAgb3V0LnNldChoZWFkZXJzLCAxMik7XG4gICAgICAgIG91dC5zZXQoYm9keSwgaGVhZGVycy5ieXRlTGVuZ3RoICsgMTIpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMihsZW5ndGggLSA0LCBjaGVja3N1bS51cGRhdGUob3V0LnN1YmFycmF5KDgsIGxlbmd0aCAtIDQpKS5kaWdlc3QoKSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBkZWNvZGUobWVzc2FnZSkge1xuICAgICAgICBjb25zdCB7IGhlYWRlcnMsIGJvZHkgfSA9IHNwbGl0TWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogdGhpcy5oZWFkZXJNYXJzaGFsbGVyLnBhcnNlKGhlYWRlcnMpLCBib2R5IH07XG4gICAgfVxuICAgIGZvcm1hdEhlYWRlcnMocmF3SGVhZGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChyYXdIZWFkZXJzKTtcbiAgICB9XG59XG5cbmNsYXNzIE1lc3NhZ2VEZWNvZGVyU3RyZWFtIHtcbiAgICBvcHRpb25zO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNJdGVyYXRvcigpO1xuICAgIH1cbiAgICBhc3luYyAqYXN5bmNJdGVyYXRvcigpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBieXRlcyBvZiB0aGlzLm9wdGlvbnMuaW5wdXRTdHJlYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLm9wdGlvbnMuZGVjb2Rlci5kZWNvZGUoYnl0ZXMpO1xuICAgICAgICAgICAgeWllbGQgZGVjb2RlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgTWVzc2FnZUVuY29kZXJTdHJlYW0ge1xuICAgIG9wdGlvbnM7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3luY0l0ZXJhdG9yKCk7XG4gICAgfVxuICAgIGFzeW5jICphc3luY0l0ZXJhdG9yKCkge1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IG1zZyBvZiB0aGlzLm9wdGlvbnMubWVzc2FnZVN0cmVhbSkge1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZCA9IHRoaXMub3B0aW9ucy5lbmNvZGVyLmVuY29kZShtc2cpO1xuICAgICAgICAgICAgeWllbGQgZW5jb2RlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluY2x1ZGVFbmRGcmFtZSkge1xuICAgICAgICAgICAgeWllbGQgbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFNtaXRoeU1lc3NhZ2VEZWNvZGVyU3RyZWFtIHtcbiAgICBvcHRpb25zO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNJdGVyYXRvcigpO1xuICAgIH1cbiAgICBhc3luYyAqYXN5bmNJdGVyYXRvcigpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIHRoaXMub3B0aW9ucy5tZXNzYWdlU3RyZWFtKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWQgPSBhd2FpdCB0aGlzLm9wdGlvbnMuZGVzZXJpYWxpemVyKG1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKGRlc2VyaWFsaXplZCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgeWllbGQgZGVzZXJpYWxpemVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTbWl0aHlNZXNzYWdlRW5jb2RlclN0cmVhbSB7XG4gICAgb3B0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jSXRlcmF0b3IoKTtcbiAgICB9XG4gICAgYXN5bmMgKmFzeW5jSXRlcmF0b3IoKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgdGhpcy5vcHRpb25zLmlucHV0U3RyZWFtKSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkQnVmID0gdGhpcy5vcHRpb25zLnNlcmlhbGl6ZXIoY2h1bmspO1xuICAgICAgICAgICAgeWllbGQgcGF5bG9hZEJ1ZjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5FdmVudFN0cmVhbUNvZGVjID0gRXZlbnRTdHJlYW1Db2RlYztcbmV4cG9ydHMuSGVhZGVyTWFyc2hhbGxlciA9IEhlYWRlck1hcnNoYWxsZXI7XG5leHBvcnRzLkludDY0ID0gSW50NjQ7XG5leHBvcnRzLk1lc3NhZ2VEZWNvZGVyU3RyZWFtID0gTWVzc2FnZURlY29kZXJTdHJlYW07XG5leHBvcnRzLk1lc3NhZ2VFbmNvZGVyU3RyZWFtID0gTWVzc2FnZUVuY29kZXJTdHJlYW07XG5leHBvcnRzLlNtaXRoeU1lc3NhZ2VEZWNvZGVyU3RyZWFtID0gU21pdGh5TWVzc2FnZURlY29kZXJTdHJlYW07XG5leHBvcnRzLlNtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtID0gU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXZlbnRzdHJlYW1Db2RlYyA9IHJlcXVpcmUoJ0BzbWl0aHkvZXZlbnRzdHJlYW0tY29kZWMnKTtcblxuZnVuY3Rpb24gZ2V0Q2h1bmtlZFN0cmVhbShzb3VyY2UpIHtcbiAgICBsZXQgY3VycmVudE1lc3NhZ2VUb3RhbExlbmd0aCA9IDA7XG4gICAgbGV0IGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCA9IDA7XG4gICAgbGV0IGN1cnJlbnRNZXNzYWdlID0gbnVsbDtcbiAgICBsZXQgbWVzc2FnZUxlbmd0aEJ1ZmZlciA9IG51bGw7XG4gICAgY29uc3QgYWxsb2NhdGVNZXNzYWdlID0gKHNpemUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gYWxsb2NhdGUgYW4gZXZlbnQgbWVzc2FnZSB3aGVyZSBzaXplIHdhcyBub3QgYSBudW1iZXI6IFwiICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1lc3NhZ2VUb3RhbExlbmd0aCA9IHNpemU7XG4gICAgICAgIGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCA9IDQ7XG4gICAgICAgIGN1cnJlbnRNZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNZXNzYWdlVmlldyA9IG5ldyBEYXRhVmlldyhjdXJyZW50TWVzc2FnZS5idWZmZXIpO1xuICAgICAgICBjdXJyZW50TWVzc2FnZVZpZXcuc2V0VWludDMyKDAsIHNpemUsIGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGl0ZXJhdG9yID0gYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc291cmNlSXRlcmF0b3IgPSBzb3VyY2VbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCBzb3VyY2VJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIGlmICghY3VycmVudE1lc3NhZ2VUb3RhbExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRNZXNzYWdlVG90YWxMZW5ndGggPT09IGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjdXJyZW50TWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRydW5jYXRlZCBldmVudCBtZXNzYWdlIHJlY2VpdmVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgY3VycmVudE9mZnNldCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudE9mZnNldCA8IGNodW5rTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlc1JlbWFpbmluZyA9IGNodW5rTGVuZ3RoIC0gY3VycmVudE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlTGVuZ3RoQnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGVuZ3RoQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoNCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtQnl0ZXNGb3JUb3RhbCA9IE1hdGgubWluKDQgLSBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGgsIGJ5dGVzUmVtYWluaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxlbmd0aEJ1ZmZlci5zZXQodmFsdWUuc2xpY2UoY3VycmVudE9mZnNldCwgY3VycmVudE9mZnNldCArIG51bUJ5dGVzRm9yVG90YWwpLCBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGggKz0gbnVtQnl0ZXNGb3JUb3RhbDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9mZnNldCArPSBudW1CeXRlc0ZvclRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb2NhdGVNZXNzYWdlKG5ldyBEYXRhVmlldyhtZXNzYWdlTGVuZ3RoQnVmZmVyLmJ1ZmZlcikuZ2V0VWludDMyKDAsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMZW5ndGhCdWZmZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBudW1CeXRlc1RvV3JpdGUgPSBNYXRoLm1pbihjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoIC0gY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoLCBjaHVua0xlbmd0aCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlLnNldCh2YWx1ZS5zbGljZShjdXJyZW50T2Zmc2V0LCBjdXJyZW50T2Zmc2V0ICsgbnVtQnl0ZXNUb1dyaXRlKSwgY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGggKz0gbnVtQnl0ZXNUb1dyaXRlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPZmZzZXQgKz0gbnVtQnl0ZXNUb1dyaXRlO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoICYmIGN1cnJlbnRNZXNzYWdlVG90YWxMZW5ndGggPT09IGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjdXJyZW50TWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06IGl0ZXJhdG9yLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2VVbm1hcnNoYWxsZXIoZGVzZXJpYWxpemVyLCB0b1V0ZjgpIHtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZTogbWVzc2FnZVR5cGUgfSA9IG1lc3NhZ2UuaGVhZGVyc1tcIjptZXNzYWdlLXR5cGVcIl07XG4gICAgICAgIGlmIChtZXNzYWdlVHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICBjb25zdCB1bm1vZGVsZWRFcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlLmhlYWRlcnNbXCI6ZXJyb3ItbWVzc2FnZVwiXS52YWx1ZSB8fCBcIlVua25vd25FcnJvclwiKTtcbiAgICAgICAgICAgIHVubW9kZWxlZEVycm9yLm5hbWUgPSBtZXNzYWdlLmhlYWRlcnNbXCI6ZXJyb3ItY29kZVwiXS52YWx1ZTtcbiAgICAgICAgICAgIHRocm93IHVubW9kZWxlZEVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VUeXBlID09PSBcImV4Y2VwdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gbWVzc2FnZS5oZWFkZXJzW1wiOmV4Y2VwdGlvbi10eXBlXCJdLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZXhjZXB0aW9uID0geyBbY29kZV06IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZEV4Y2VwdGlvbiA9IGF3YWl0IGRlc2VyaWFsaXplcihleGNlcHRpb24pO1xuICAgICAgICAgICAgaWYgKGRlc2VyaWFsaXplZEV4Y2VwdGlvbi4kdW5rbm93bikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHRvVXRmOChtZXNzYWdlLmJvZHkpKTtcbiAgICAgICAgICAgICAgICBlcnJvci5uYW1lID0gY29kZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGRlc2VyaWFsaXplZEV4Y2VwdGlvbltjb2RlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlVHlwZSA9PT0gXCJldmVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBbbWVzc2FnZS5oZWFkZXJzW1wiOmV2ZW50LXR5cGVcIl0udmFsdWVdOiBtZXNzYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZCA9IGF3YWl0IGRlc2VyaWFsaXplcihldmVudCk7XG4gICAgICAgICAgICBpZiAoZGVzZXJpYWxpemVkLiR1bmtub3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgVW5yZWNvZ25pemFibGUgZXZlbnQgdHlwZTogJHttZXNzYWdlLmhlYWRlcnNbXCI6ZXZlbnQtdHlwZVwiXS52YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNsYXNzIEV2ZW50U3RyZWFtTWFyc2hhbGxlciB7XG4gICAgZXZlbnRTdHJlYW1Db2RlYztcbiAgICB1dGZFbmNvZGVyO1xuICAgIGNvbnN0cnVjdG9yKHsgdXRmOEVuY29kZXIsIHV0ZjhEZWNvZGVyIH0pIHtcbiAgICAgICAgdGhpcy5ldmVudFN0cmVhbUNvZGVjID0gbmV3IGV2ZW50c3RyZWFtQ29kZWMuRXZlbnRTdHJlYW1Db2RlYyh1dGY4RW5jb2RlciwgdXRmOERlY29kZXIpO1xuICAgICAgICB0aGlzLnV0ZkVuY29kZXIgPSB1dGY4RW5jb2RlcjtcbiAgICB9XG4gICAgZGVzZXJpYWxpemUoYm9keSwgZGVzZXJpYWxpemVyKSB7XG4gICAgICAgIGNvbnN0IGlucHV0U3RyZWFtID0gZ2V0Q2h1bmtlZFN0cmVhbShib2R5KTtcbiAgICAgICAgcmV0dXJuIG5ldyBldmVudHN0cmVhbUNvZGVjLlNtaXRoeU1lc3NhZ2VEZWNvZGVyU3RyZWFtKHtcbiAgICAgICAgICAgIG1lc3NhZ2VTdHJlYW06IG5ldyBldmVudHN0cmVhbUNvZGVjLk1lc3NhZ2VEZWNvZGVyU3RyZWFtKHsgaW5wdXRTdHJlYW0sIGRlY29kZXI6IHRoaXMuZXZlbnRTdHJlYW1Db2RlYyB9KSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplcjogZ2V0TWVzc2FnZVVubWFyc2hhbGxlcihkZXNlcmlhbGl6ZXIsIHRoaXMudXRmRW5jb2RlciksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXJpYWxpemUoaW5wdXRTdHJlYW0sIHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBldmVudHN0cmVhbUNvZGVjLk1lc3NhZ2VFbmNvZGVyU3RyZWFtKHtcbiAgICAgICAgICAgIG1lc3NhZ2VTdHJlYW06IG5ldyBldmVudHN0cmVhbUNvZGVjLlNtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtKHsgaW5wdXRTdHJlYW0sIHNlcmlhbGl6ZXIgfSksXG4gICAgICAgICAgICBlbmNvZGVyOiB0aGlzLmV2ZW50U3RyZWFtQ29kZWMsXG4gICAgICAgICAgICBpbmNsdWRlRW5kRnJhbWU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyID0gKG9wdGlvbnMpID0+IG5ldyBFdmVudFN0cmVhbU1hcnNoYWxsZXIob3B0aW9ucyk7XG5cbmV4cG9ydHMuRXZlbnRTdHJlYW1NYXJzaGFsbGVyID0gRXZlbnRTdHJlYW1NYXJzaGFsbGVyO1xuZXhwb3J0cy5ldmVudFN0cmVhbVNlcmRlUHJvdmlkZXIgPSBldmVudFN0cmVhbVNlcmRlUHJvdmlkZXI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXZlbnRzdHJlYW1TZXJkZVVuaXZlcnNhbCA9IHJlcXVpcmUoJ0BzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtdW5pdmVyc2FsJyk7XG5cbmNvbnN0IHJlYWRhYmxlU3RyZWFtdG9JdGVyYWJsZSA9IChyZWFkYWJsZVN0cmVhbSkgPT4gKHtcbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiBhc3luYyBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSByZWFkYWJsZVN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5jb25zdCBpdGVyYWJsZVRvUmVhZGFibGVTdHJlYW0gPSAoYXN5bmNJdGVyYWJsZSkgPT4ge1xuICAgIGNvbnN0IGl0ZXJhdG9yID0gYXN5bmNJdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICAgICAgYXN5bmMgcHVsbChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUodmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcblxuY2xhc3MgRXZlbnRTdHJlYW1NYXJzaGFsbGVyIHtcbiAgICB1bml2ZXJzYWxNYXJzaGFsbGVyO1xuICAgIGNvbnN0cnVjdG9yKHsgdXRmOEVuY29kZXIsIHV0ZjhEZWNvZGVyIH0pIHtcbiAgICAgICAgdGhpcy51bml2ZXJzYWxNYXJzaGFsbGVyID0gbmV3IGV2ZW50c3RyZWFtU2VyZGVVbml2ZXJzYWwuRXZlbnRTdHJlYW1NYXJzaGFsbGVyKHtcbiAgICAgICAgICAgIHV0ZjhEZWNvZGVyLFxuICAgICAgICAgICAgdXRmOEVuY29kZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXNlcmlhbGl6ZShib2R5LCBkZXNlcmlhbGl6ZXIpIHtcbiAgICAgICAgY29uc3QgYm9keUl0ZXJhYmxlID0gaXNSZWFkYWJsZVN0cmVhbShib2R5KSA/IHJlYWRhYmxlU3RyZWFtdG9JdGVyYWJsZShib2R5KSA6IGJvZHk7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXZlcnNhbE1hcnNoYWxsZXIuZGVzZXJpYWxpemUoYm9keUl0ZXJhYmxlLCBkZXNlcmlhbGl6ZXIpO1xuICAgIH1cbiAgICBzZXJpYWxpemUoaW5wdXQsIHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgY29uc3Qgc2VyaWFsemllZEl0ZXJhYmxlID0gdGhpcy51bml2ZXJzYWxNYXJzaGFsbGVyLnNlcmlhbGl6ZShpbnB1dCwgc2VyaWFsaXplcik7XG4gICAgICAgIHJldHVybiB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09IFwiZnVuY3Rpb25cIiA/IGl0ZXJhYmxlVG9SZWFkYWJsZVN0cmVhbShzZXJpYWx6aWVkSXRlcmFibGUpIDogc2VyaWFsemllZEl0ZXJhYmxlO1xuICAgIH1cbn1cbmNvbnN0IGlzUmVhZGFibGVTdHJlYW0gPSAoYm9keSkgPT4gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiYgYm9keSBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtO1xuXG5jb25zdCBldmVudFN0cmVhbVNlcmRlUHJvdmlkZXIgPSAob3B0aW9ucykgPT4gbmV3IEV2ZW50U3RyZWFtTWFyc2hhbGxlcihvcHRpb25zKTtcblxuZXhwb3J0cy5FdmVudFN0cmVhbU1hcnNoYWxsZXIgPSBFdmVudFN0cmVhbU1hcnNoYWxsZXI7XG5leHBvcnRzLmV2ZW50U3RyZWFtU2VyZGVQcm92aWRlciA9IGV2ZW50U3RyZWFtU2VyZGVQcm92aWRlcjtcbmV4cG9ydHMuaXRlcmFibGVUb1JlYWRhYmxlU3RyZWFtID0gaXRlcmFibGVUb1JlYWRhYmxlU3RyZWFtO1xuZXhwb3J0cy5yZWFkYWJsZVN0cmVhbXRvSXRlcmFibGUgPSByZWFkYWJsZVN0cmVhbXRvSXRlcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbEZvcm1hdFVybCA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL3V0aWwtZm9ybWF0LXVybCcpO1xudmFyIGV2ZW50c3RyZWFtU2VyZGVCcm93c2VyID0gcmVxdWlyZSgnQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS1icm93c2VyJyk7XG52YXIgZmV0Y2hIdHRwSGFuZGxlciA9IHJlcXVpcmUoJ0BzbWl0aHkvZmV0Y2gtaHR0cC1oYW5kbGVyJyk7XG52YXIgcHJvdG9jb2xIdHRwID0gcmVxdWlyZSgnQHNtaXRoeS9wcm90b2NvbC1odHRwJyk7XG52YXIgdXRpbEJhc2U2NCA9IHJlcXVpcmUoJ0BzbWl0aHkvdXRpbC1iYXNlNjQnKTtcbnZhciBldmVudHN0cmVhbUNvZGVjID0gcmVxdWlyZSgnQHNtaXRoeS9ldmVudHN0cmVhbS1jb2RlYycpO1xudmFyIHV0aWxIZXhFbmNvZGluZyA9IHJlcXVpcmUoJ0BzbWl0aHkvdXRpbC1oZXgtZW5jb2RpbmcnKTtcblxuY29uc3QgaXNXZWJTb2NrZXRSZXF1ZXN0ID0gKHJlcXVlc3QpID0+IHJlcXVlc3QucHJvdG9jb2wgPT09IFwid3M6XCIgfHwgcmVxdWVzdC5wcm90b2NvbCA9PT0gXCJ3c3M6XCI7XG5cbmNvbnN0IERFRkFVTFRfV1NfQ09OTkVDVElPTl9USU1FT1VUX01TID0gMzAwMDtcbmNsYXNzIFdlYlNvY2tldEZldGNoSGFuZGxlciB7XG4gICAgbWV0YWRhdGEgPSB7XG4gICAgICAgIGhhbmRsZXJQcm90b2NvbDogXCJ3ZWJzb2NrZXQvaDEuMVwiLFxuICAgIH07XG4gICAgY29uZmlnID0ge307XG4gICAgY29uZmlnUHJvbWlzZTtcbiAgICBodHRwSGFuZGxlcjtcbiAgICBzb2NrZXRzID0ge307XG4gICAgc3RhdGljIGNyZWF0ZShpbnN0YW5jZU9yT3B0aW9ucywgaHR0cEhhbmRsZXIgPSBuZXcgZmV0Y2hIdHRwSGFuZGxlci5GZXRjaEh0dHBIYW5kbGVyKCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZU9yT3B0aW9ucz8uaGFuZGxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZU9yT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFdlYlNvY2tldEZldGNoSGFuZGxlcihpbnN0YW5jZU9yT3B0aW9ucywgaHR0cEhhbmRsZXIpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBodHRwSGFuZGxlciA9IG5ldyBmZXRjaEh0dHBIYW5kbGVyLkZldGNoSHR0cEhhbmRsZXIoKSkge1xuICAgICAgICB0aGlzLmh0dHBIYW5kbGVyID0gaHR0cEhhbmRsZXI7XG4gICAgICAgIGNvbnN0IHNldENvbmZpZyA9IChvcHRzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAuLi4ob3B0cyA/PyB7fSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnUHJvbWlzZSA9IG9wdGlvbnMoKS50aGVuKChvcHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldENvbmZpZyhvcHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb25maWdQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHNldENvbmZpZyhvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBzb2NrZXRzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNvY2tldHMpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNvY2tldCBvZiBzb2NrZXRzKSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKDEwMDAsIGBTb2NrZXQgY2xvc2VkIHRocm91Z2ggZGVzdHJveSgpIGNhbGxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGUocmVxdWVzdCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnUHJvbWlzZTtcbiAgICAgICAgY29uc3QgeyBsb2dnZXIgfSA9IHRoaXMuY29uZmlnO1xuICAgICAgICBpZiAoIWlzV2ViU29ja2V0UmVxdWVzdChyZXF1ZXN0KSkge1xuICAgICAgICAgICAgbG9nZ2VyPy5kZWJ1Zz8uKGBAYXdzLXNkayAtIHdzIGZldGNoaW5nICR7cmVxdWVzdC5wcm90b2NvbH0ke3JlcXVlc3QuaG9zdG5hbWV9JHtyZXF1ZXN0LnBhdGh9YCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwSGFuZGxlci5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gdXRpbEZvcm1hdFVybC5mb3JtYXRVcmwocmVxdWVzdCk7XG4gICAgICAgIGxvZ2dlcj8uZGVidWc/LihgQGF3cy1zZGsgLSB3cyBjb25uZWN0aW5nICR7dXJsLnNwbGl0KFwiP1wiKVswXX1gKTtcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgICAgICBpZiAoIXRoaXMuc29ja2V0c1t1cmxdKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldHNbdXJsXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc29ja2V0c1t1cmxdLnB1c2goc29ja2V0KTtcbiAgICAgICAgc29ja2V0LmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIGNvbnN0IHsgY29ubmVjdGlvblRpbWVvdXQgPSBERUZBVUxUX1dTX0NPTk5FQ1RJT05fVElNRU9VVF9NUyB9ID0gdGhpcy5jb25maWc7XG4gICAgICAgIGF3YWl0IHRoaXMud2FpdEZvclJlYWR5KHNvY2tldCwgY29ubmVjdGlvblRpbWVvdXQpO1xuICAgICAgICBjb25zdCB7IGJvZHkgfSA9IHJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IGJvZHlTdHJlYW0gPSBnZXRJdGVyYXRvcihib2R5KTtcbiAgICAgICAgY29uc3QgYXN5bmNJdGVyYWJsZSA9IHRoaXMuY29ubmVjdChzb2NrZXQsIGJvZHlTdHJlYW0pO1xuICAgICAgICBjb25zdCBvdXRwdXRQYXlsb2FkID0gdG9SZWFkYWJsZVN0cmVhbShhc3luY0l0ZXJhYmxlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiBuZXcgcHJvdG9jb2xIdHRwLkh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IG91dHB1dFBheWxvYWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnUHJvbWlzZSA9IHRoaXMuY29uZmlnUHJvbWlzZS50aGVuKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaHR0cEhhbmRsZXJDb25maWdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcgPz8ge307XG4gICAgfVxuICAgIHJlbW92ZU5vdFVzYWJsZVNvY2tldHModXJsKSB7XG4gICAgICAgIHRoaXMuc29ja2V0c1t1cmxdID0gKHRoaXMuc29ja2V0c1t1cmxdID8/IFtdKS5maWx0ZXIoKHNvY2tldCkgPT4gIVtXZWJTb2NrZXQuQ0xPU0lORywgV2ViU29ja2V0LkNMT1NFRF0uaW5jbHVkZXMoc29ja2V0LnJlYWR5U3RhdGUpKTtcbiAgICB9XG4gICAgd2FpdEZvclJlYWR5KHNvY2tldCwgY29ubmVjdGlvblRpbWVvdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZU5vdFVzYWJsZVNvY2tldHMoc29ja2V0LnVybCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgJG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwU3RhdHVzQ29kZTogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vic29ja2V0U3ludGhldGljNTAwRXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBjb25uZWN0aW9uVGltZW91dCk7XG4gICAgICAgICAgICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdChzb2NrZXQsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZVF1ZXVlID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nUmVzb2x2ZSA9IG51bGw7XG4gICAgICAgIGxldCBwZW5kaW5nUmVqZWN0ID0gbnVsbDtcbiAgICAgICAgY29uc3QgcHVzaCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZ1Jlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVqZWN0KGl0ZW0uZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Jlc29sdmUoeyBkb25lOiBpdGVtLmRvbmUsIHZhbHVlOiBpdGVtLnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZW5kaW5nUmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1JlamVjdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlUXVldWUucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBldmVudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHV0aWxCYXNlNjQuZnJvbUJhc2U2NChkYXRhKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBVaW50OEFycmF5KGRhdGEpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzb2NrZXQub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICBwdXNoKHsgZG9uZTogdHJ1ZSwgZXJyb3I6IGV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICBzb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTm90VXNhYmxlU29ja2V0cyhzb2NrZXQudXJsKTtcbiAgICAgICAgICAgIHB1c2goeyBkb25lOiB0cnVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvdXRwdXRTdHJlYW0gPSB7XG4gICAgICAgICAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG1lc3NhZ2VRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBpdGVtLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogaXRlbS5kb25lLCB2YWx1ZTogaXRlbS52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNlbmQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc29ja2V0LnJlYWR5U3RhdGUgPj0gV2ViU29ja2V0LkNMT1NJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LnNlbmQoY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzZW5kKCk7XG4gICAgICAgIHJldHVybiBvdXRwdXRTdHJlYW07XG4gICAgfVxufVxuY29uc3QgZ2V0SXRlcmF0b3IgPSAoc3RyZWFtKSA9PiB7XG4gICAgaWYgKHN0cmVhbVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW0oc3RyZWFtKSkge1xuICAgICAgICByZXR1cm4gZXZlbnRzdHJlYW1TZXJkZUJyb3dzZXIucmVhZGFibGVTdHJlYW10b0l0ZXJhYmxlKHN0cmVhbSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06IGFzeW5jIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCBzdHJlYW07XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5jb25zdCB0b1JlYWRhYmxlU3RyZWFtID0gKGFzeW5jSXRlcmFibGUpID0+IHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gXCJmdW5jdGlvblwiID8gZXZlbnRzdHJlYW1TZXJkZUJyb3dzZXIuaXRlcmFibGVUb1JlYWRhYmxlU3RyZWFtKGFzeW5jSXRlcmFibGUpIDogYXN5bmNJdGVyYWJsZTtcbmNvbnN0IGlzUmVhZGFibGVTdHJlYW0gPSAocGF5bG9hZCkgPT4gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiYgcGF5bG9hZCBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtO1xuXG5jb25zdCB3ZWJzb2NrZXRFbmRwb2ludE1pZGRsZXdhcmUgPSAoY29uZmlnLCBvcHRpb25zKSA9PiAobmV4dCkgPT4gKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gICAgaWYgKHByb3RvY29sSHR0cC5IdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpICYmXG4gICAgICAgIGNvbmZpZy5yZXF1ZXN0SGFuZGxlci5tZXRhZGF0YT8uaGFuZGxlclByb3RvY29sPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwid2Vic29ja2V0XCIpKSB7XG4gICAgICAgIHJlcXVlc3QucHJvdG9jb2wgPSBcIndzczpcIjtcbiAgICAgICAgcmVxdWVzdC5tZXRob2QgPSBcIkdFVFwiO1xuICAgICAgICByZXF1ZXN0LnBhdGggPSBgJHtyZXF1ZXN0LnBhdGh9LXdlYnNvY2tldGA7XG4gICAgICAgIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVxdWVzdDtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl07XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW1wieC1hbXotY29udGVudC1zaGEyNTZcIl07XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihvcHRpb25zLmhlYWRlclByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua2VkTmFtZSA9IG5hbWUucmVwbGFjZShvcHRpb25zLmhlYWRlclByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5xdWVyeVtjaHVua2VkTmFtZV0gPSBoZWFkZXJzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJzW1wieC1hbXotdXNlci1hZ2VudFwiXSkge1xuICAgICAgICAgICAgcmVxdWVzdC5xdWVyeVtcInVzZXItYWdlbnRcIl0gPSBoZWFkZXJzW1wieC1hbXotdXNlci1hZ2VudFwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSB7IGhvc3Q6IGhlYWRlcnMuaG9zdCA/PyByZXF1ZXN0Lmhvc3RuYW1lIH07XG4gICAgfVxuICAgIHJldHVybiBuZXh0KGFyZ3MpO1xufTtcbmNvbnN0IHdlYnNvY2tldEVuZHBvaW50TWlkZGxld2FyZU9wdGlvbnMgPSB7XG4gICAgbmFtZTogXCJ3ZWJzb2NrZXRFbmRwb2ludE1pZGRsZXdhcmVcIixcbiAgICB0YWdzOiBbXCJXRUJTT0NLRVRcIiwgXCJFVkVOVF9TVFJFQU1cIl0sXG4gICAgcmVsYXRpb246IFwiYWZ0ZXJcIixcbiAgICB0b01pZGRsZXdhcmU6IFwiZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlXCIsXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5jb25zdCBpbmplY3RTZXNzaW9uSWRNaWRkbGV3YXJlID0gKCkgPT4gKG5leHQpID0+IGFzeW5jIChhcmdzKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgICAgLi4uYXJncy5pbnB1dCxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV4dChhcmdzKTtcbiAgICBjb25zdCBvdXRwdXQgPSByZXNwb25zZS5vdXRwdXQ7XG4gICAgaWYgKHJlcXVlc3RQYXJhbXMuU2Vzc2lvbklkICYmIG91dHB1dC5TZXNzaW9uSWQgPT0gbnVsbCkge1xuICAgICAgICBvdXRwdXQuU2Vzc2lvbklkID0gcmVxdWVzdFBhcmFtcy5TZXNzaW9uSWQ7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbn07XG5jb25zdCBpbmplY3RTZXNzaW9uSWRNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICBzdGVwOiBcImluaXRpYWxpemVcIixcbiAgICBuYW1lOiBcImluamVjdFNlc3Npb25JZE1pZGRsZXdhcmVcIixcbiAgICB0YWdzOiBbXCJXRUJTT0NLRVRcIiwgXCJFVkVOVF9TVFJFQU1cIl0sXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5jb25zdCBnZXRXZWJTb2NrZXRQbHVnaW4gPSAoY29uZmlnLCBvcHRpb25zKSA9PiAoe1xuICAgIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgICAgIGNsaWVudFN0YWNrLmFkZFJlbGF0aXZlVG8od2Vic29ja2V0RW5kcG9pbnRNaWRkbGV3YXJlKGNvbmZpZywgb3B0aW9ucyksIHdlYnNvY2tldEVuZHBvaW50TWlkZGxld2FyZU9wdGlvbnMpO1xuICAgICAgICBjbGllbnRTdGFjay5hZGQoaW5qZWN0U2Vzc2lvbklkTWlkZGxld2FyZSgpLCBpbmplY3RTZXNzaW9uSWRNaWRkbGV3YXJlT3B0aW9ucyk7XG4gICAgfSxcbn0pO1xuXG5jbGFzcyBXZWJzb2NrZXRTaWduYXR1cmVWNCB7XG4gICAgc2lnbmVyO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zaWduZXIgPSBvcHRpb25zLnNpZ25lcjtcbiAgICB9XG4gICAgcHJlc2lnbihvcmlnaW5hbFJlcXVlc3QsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduZXIucHJlc2lnbihvcmlnaW5hbFJlcXVlc3QsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBzaWduKHRvU2lnbiwgb3B0aW9ucykge1xuICAgICAgICBpZiAocHJvdG9jb2xIdHRwLkh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UodG9TaWduKSAmJiBpc1dlYlNvY2tldFJlcXVlc3QodG9TaWduKSkge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmVkUmVxdWVzdCA9IGF3YWl0IHRoaXMuc2lnbmVyLnByZXNpZ24oeyAuLi50b1NpZ24sIGJvZHk6IFwiXCIgfSwge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZXhwaXJlc0luOiA2MCxcbiAgICAgICAgICAgICAgICB1bnNpZ25hYmxlSGVhZGVyczogbmV3IFNldChPYmplY3Qua2V5cyh0b1NpZ24uaGVhZGVycykuZmlsdGVyKChoZWFkZXIpID0+IGhlYWRlciAhPT0gXCJob3N0XCIpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zaWduZWRSZXF1ZXN0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHRvU2lnbi5ib2R5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25lci5zaWduKHRvU2lnbiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2lnbk1lc3NhZ2UobWVzc2FnZSwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSwgYXJncyk7XG4gICAgfVxufVxuXG5jb25zdCByZXNvbHZlV2ViU29ja2V0Q29uZmlnID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgeyBzaWduZXIgfSA9IGlucHV0O1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGlucHV0LCB7XG4gICAgICAgIHNpZ25lcjogYXN5bmMgKGF1dGhTY2hlbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25lck9iaiA9IGF3YWl0IHNpZ25lcihhdXRoU2NoZW1lKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZVNpZ25lcihzaWduZXJPYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJzb2NrZXRTaWduYXR1cmVWNCh7IHNpZ25lcjogc2lnbmVyT2JqIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgV2Vic29ja2V0U2lnbmF0dXJlVjQgc2lnbmVyLCBwbGVhc2UgY2hlY2sgdGhlIGNsaWVudCBjb25zdHJ1Y3Rvci5cIik7XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuY29uc3QgdmFsaWRhdGVTaWduZXIgPSAoc2lnbmVyKSA9PiAhIXNpZ25lcjtcblxuY2xhc3MgRXZlbnRTaWduaW5nVHJhbnNmb3JtU3RyZWFtIGV4dGVuZHMgVHJhbnNmb3JtU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsU2lnbmF0dXJlLCBtZXNzYWdlU2lnbmVyLCBldmVudFN0cmVhbUNvZGVjLCBzeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyKSB7XG4gICAgICAgIGxldCBwcmlvclNpZ25hdHVyZSA9IGluaXRpYWxTaWduYXR1cmU7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIHN0YXJ0KCkgeyB9LFxuICAgICAgICAgICAgYXN5bmMgdHJhbnNmb3JtKGNodW5rLCBjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIChhd2FpdCBzeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOmRhdGVcIjogeyB0eXBlOiBcInRpbWVzdGFtcFwiLCB2YWx1ZTogbm93IH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25lZE1lc3NhZ2UgPSBhd2FpdCBtZXNzYWdlU2lnbmVyLnNpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGNodW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGRhdGVIZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JTaWduYXR1cmU6IHByaW9yU2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduaW5nRGF0ZTogbm93LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JTaWduYXR1cmUgPSBzaWduZWRNZXNzYWdlLnNpZ25hdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZFNpZ25lZCA9IGV2ZW50U3RyZWFtQ29kZWMuZW5jb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRlSGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOmNodW5rLXNpZ25hdHVyZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1dGlsSGV4RW5jb2RpbmcuZnJvbUhleChzaWduZWRNZXNzYWdlLnNpZ25hdHVyZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBjaHVuayxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShzZXJpYWxpemVkU2lnbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlciB7XG4gICAgbWVzc2FnZVNpZ25lcjtcbiAgICBldmVudFN0cmVhbUNvZGVjO1xuICAgIHN5c3RlbUNsb2NrT2Zmc2V0UHJvdmlkZXI7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTaWduZXIgPSBvcHRpb25zLm1lc3NhZ2VTaWduZXI7XG4gICAgICAgIHRoaXMuZXZlbnRTdHJlYW1Db2RlYyA9IG5ldyBldmVudHN0cmVhbUNvZGVjLkV2ZW50U3RyZWFtQ29kZWMob3B0aW9ucy51dGY4RW5jb2Rlciwgb3B0aW9ucy51dGY4RGVjb2Rlcik7XG4gICAgICAgIHRoaXMuc3lzdGVtQ2xvY2tPZmZzZXRQcm92aWRlciA9IGFzeW5jICgpID0+IG9wdGlvbnMuc3lzdGVtQ2xvY2tPZmZzZXQgPz8gMDtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlKG5leHQsIGFyZ3MsIGNvbnRleHQgPSB7fSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXJncy5yZXF1ZXN0O1xuICAgICAgICBjb25zdCB7IGJvZHk6IHBheWxvYWQsIGhlYWRlcnMsIHF1ZXJ5IH0gPSByZXF1ZXN0O1xuICAgICAgICBpZiAoIShwYXlsb2FkIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudHN0cmVhbSBwYXlsb2FkIG11c3QgYmUgYSBSZWFkYWJsZVN0cmVhbS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxhY2VIb2xkZXJTdHJlYW0gPSBuZXcgVHJhbnNmb3JtU3RyZWFtKCk7XG4gICAgICAgIHJlcXVlc3QuYm9keSA9IHBsYWNlSG9sZGVyU3RyZWFtLnJlYWRhYmxlO1xuICAgICAgICBjb25zdCBtYXRjaCA9IChoZWFkZXJzPy5hdXRob3JpemF0aW9uID8/IFwiXCIpLm1hdGNoKC9TaWduYXR1cmU9KFxcdyspJC8pO1xuICAgICAgICBsZXQgcHJpb3JTaWduYXR1cmUgPSAobWF0Y2ggPz8gW10pWzFdID8/IChxdWVyeSAmJiBxdWVyeVtcIlgtQW16LVNpZ25hdHVyZVwiXSkgPz8gXCJcIjtcbiAgICAgICAgaWYgKGNvbnRleHQuX19zdGF0aWNTaWduYXR1cmUpIHtcbiAgICAgICAgICAgIHByaW9yU2lnbmF0dXJlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduaW5nU3RyZWFtID0gbmV3IEV2ZW50U2lnbmluZ1RyYW5zZm9ybVN0cmVhbShwcmlvclNpZ25hdHVyZSwgYXdhaXQgdGhpcy5tZXNzYWdlU2lnbmVyKCksIHRoaXMuZXZlbnRTdHJlYW1Db2RlYywgdGhpcy5zeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyKTtcbiAgICAgICAgcGF5bG9hZC5waXBlVGhyb3VnaChzaWduaW5nU3RyZWFtKS5waXBlVGhyb3VnaChwbGFjZUhvbGRlclN0cmVhbSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBuZXh0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gcGF5bG9hZC5jYW5jZWw/LigpO1xuICAgICAgICAgICAgaWYgKHAgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuY29uc3QgZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlclByb3ZpZGVyID0gKG9wdGlvbnMpID0+IG5ldyBFdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyKG9wdGlvbnMpO1xuXG5leHBvcnRzLldlYlNvY2tldEZldGNoSGFuZGxlciA9IFdlYlNvY2tldEZldGNoSGFuZGxlcjtcbmV4cG9ydHMuZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlclByb3ZpZGVyID0gZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlclByb3ZpZGVyO1xuZXhwb3J0cy5nZXRXZWJTb2NrZXRQbHVnaW4gPSBnZXRXZWJTb2NrZXRQbHVnaW47XG5leHBvcnRzLnJlc29sdmVXZWJTb2NrZXRDb25maWcgPSByZXNvbHZlV2ViU29ja2V0Q29uZmlnO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVzb2x2ZUV2ZW50U3RyZWFtU2VyZGVDb25maWcgPSAoaW5wdXQpID0+IE9iamVjdC5hc3NpZ24oaW5wdXQsIHtcbiAgICBldmVudFN0cmVhbU1hcnNoYWxsZXI6IGlucHV0LmV2ZW50U3RyZWFtU2VyZGVQcm92aWRlcihpbnB1dCksXG59KTtcblxuZXhwb3J0cy5yZXNvbHZlRXZlbnRTdHJlYW1TZXJkZUNvbmZpZyA9IHJlc29sdmVFdmVudFN0cmVhbVNlcmRlQ29uZmlnO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSBleHBvcnRzLmRlZmF1bHRCZWRyb2NrUnVudGltZUh0dHBBdXRoU2NoZW1lUHJvdmlkZXIgPSBleHBvcnRzLmRlZmF1bHRCZWRyb2NrUnVudGltZUh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgaHR0cEF1dGhTY2hlbWVzXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIik7XG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9jb3JlXCIpO1xuY29uc3QgdXRpbF9taWRkbGV3YXJlXzEgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIik7XG5jb25zdCBkZWZhdWx0QmVkcm9ja1J1bnRpbWVIdHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlciA9IGFzeW5jIChjb25maWcsIGNvbnRleHQsIGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BlcmF0aW9uOiAoMCwgdXRpbF9taWRkbGV3YXJlXzEuZ2V0U21pdGh5Q29udGV4dCkoY29udGV4dCkub3BlcmF0aW9uLFxuICAgICAgICByZWdpb246IGF3YWl0ICgwLCB1dGlsX21pZGRsZXdhcmVfMS5ub3JtYWxpemVQcm92aWRlcikoY29uZmlnLnJlZ2lvbikoKSB8fCAoKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgYHJlZ2lvbmAgdG8gYmUgY29uZmlndXJlZCBmb3IgYGF3cy5hdXRoI3NpZ3Y0YFwiKTtcbiAgICAgICAgfSkoKSxcbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdEJlZHJvY2tSdW50aW1lSHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIgPSBkZWZhdWx0QmVkcm9ja1J1bnRpbWVIdHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlcjtcbmZ1bmN0aW9uIGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgc2lnbmluZ1Byb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiYmVkcm9ja1wiLFxuICAgICAgICAgICAgcmVnaW9uOiBhdXRoUGFyYW1ldGVycy5yZWdpb24sXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BlcnRpZXNFeHRyYWN0b3I6IChjb25maWcsIGNvbnRleHQpID0+ICh7XG4gICAgICAgICAgICBzaWduaW5nUHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNtaXRoeUFwaUh0dHBCZWFyZXJBdXRoSHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWVJZDogXCJzbWl0aHkuYXBpI2h0dHBCZWFyZXJBdXRoXCIsXG4gICAgICAgIHByb3BlcnRpZXNFeHRyYWN0b3I6ICh7IHByb2ZpbGUsIGZpbGVwYXRoLCBjb25maWdGaWxlcGF0aCwgaWdub3JlQ2FjaGUsIH0sIGNvbnRleHQpID0+ICh7XG4gICAgICAgICAgICBpZGVudGl0eVByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgIGZpbGVwYXRoLFxuICAgICAgICAgICAgICAgIGNvbmZpZ0ZpbGVwYXRoLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNhY2hlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbmNvbnN0IGRlZmF1bHRCZWRyb2NrUnVudGltZUh0dHBBdXRoU2NoZW1lUHJvdmlkZXIgPSAoYXV0aFBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgc3dpdGNoIChhdXRoUGFyYW1ldGVycy5vcGVyYXRpb24pIHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlU21pdGh5QXBpSHR0cEJlYXJlckF1dGhIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcbmV4cG9ydHMuZGVmYXVsdEJlZHJvY2tSdW50aW1lSHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGRlZmF1bHRCZWRyb2NrUnVudGltZUh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG5jb25zdCByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSAoMCwgY29yZV8xLm1lbW9pemVJZGVudGl0eVByb3ZpZGVyKShjb25maWcudG9rZW4sIGNvcmVfMS5pc0lkZW50aXR5RXhwaXJlZCwgY29yZV8xLmRvZXNJZGVudGl0eVJlcXVpcmVSZWZyZXNoKTtcbiAgICBjb25zdCBjb25maWdfMCA9ICgwLCBodHRwQXV0aFNjaGVtZXNfMS5yZXNvbHZlQXdzU2RrU2lnVjRDb25maWcpKGNvbmZpZyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlnXzAsIHtcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6ICgwLCB1dGlsX21pZGRsZXdhcmVfMS5ub3JtYWxpemVQcm92aWRlcikoY29uZmlnLmF1dGhTY2hlbWVQcmVmZXJlbmNlID8/IFtdKSxcbiAgICAgICAgdG9rZW4sXG4gICAgfSk7XG59O1xuZXhwb3J0cy5yZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWc7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAYXdzLXNkay9jbGllbnQtYmVkcm9jay1ydW50aW1lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBV1MgU0RLIGZvciBKYXZhU2NyaXB0IEJlZHJvY2sgUnVudGltZSBDbGllbnQgZm9yIE5vZGUuanMsIEJyb3dzZXIgYW5kIFJlYWN0IE5hdGl2ZVwiLFxuICBcInZlcnNpb25cIjogXCIzLjEwMjEuMFwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJjb25jdXJyZW50bHkgJ3lhcm46YnVpbGQ6dHlwZXMnICd5YXJuOmJ1aWxkOmVzJyAmJiB5YXJuIGJ1aWxkOmNqc1wiLFxuICAgIFwiYnVpbGQ6Y2pzXCI6IFwibm9kZSAuLi8uLi9zY3JpcHRzL2NvbXBpbGF0aW9uL2lubGluZSBjbGllbnQtYmVkcm9jay1ydW50aW1lXCIsXG4gICAgXCJidWlsZDplc1wiOiBcInRzYyAtcCB0c2NvbmZpZy5lcy5qc29uXCIsXG4gICAgXCJidWlsZDppbmNsdWRlOmRlcHNcIjogXCJ5YXJuIGc6dHVyYm8gcnVuIGJ1aWxkIC1GPVxcXCIkbnBtX3BhY2thZ2VfbmFtZVxcXCJcIixcbiAgICBcImJ1aWxkOnR5cGVzXCI6IFwidHNjIC1wIHRzY29uZmlnLnR5cGVzLmpzb25cIixcbiAgICBcImJ1aWxkOnR5cGVzOmRvd25sZXZlbFwiOiBcImRvd25sZXZlbC1kdHMgZGlzdC10eXBlcyBkaXN0LXR5cGVzL3RzMy40XCIsXG4gICAgXCJjbGVhblwiOiBcInByZW1vdmUgZGlzdC1janMgZGlzdC1lcyBkaXN0LXR5cGVzIHRzY29uZmlnLmNqcy50c2J1aWxkaW5mbyB0c2NvbmZpZy5lcy50c2J1aWxkaW5mbyB0c2NvbmZpZy50eXBlcy50c2J1aWxkaW5mb1wiLFxuICAgIFwiZXh0cmFjdDpkb2NzXCI6IFwiYXBpLWV4dHJhY3RvciBydW4gLS1sb2NhbFwiLFxuICAgIFwiZ2VuZXJhdGU6Y2xpZW50XCI6IFwibm9kZSAuLi8uLi9zY3JpcHRzL2dlbmVyYXRlLWNsaWVudHMvc2luZ2xlLXNlcnZpY2UgLS1zb2xvIGJlZHJvY2stcnVudGltZVwiLFxuICAgIFwidGVzdFwiOiBcInlhcm4gZzp2aXRlc3QgcnVuIC0tcGFzc1dpdGhOb1Rlc3RzXCIsXG4gICAgXCJ0ZXN0OmJyb3dzZXJcIjogXCJ5YXJuIGc6dml0ZXN0IHJ1biAtYyB2aXRlc3QuY29uZmlnLmJyb3dzZXIuZTJlLm10c1wiLFxuICAgIFwidGVzdDpicm93c2VyOndhdGNoXCI6IFwieWFybiBnOnZpdGVzdCB3YXRjaCAtYyB2aXRlc3QuY29uZmlnLmJyb3dzZXIuZTJlLm10c1wiLFxuICAgIFwidGVzdDplMmVcIjogXCJ5YXJuIGc6dml0ZXN0IHJ1biAtYyB2aXRlc3QuY29uZmlnLmUyZS5tdHNcIixcbiAgICBcInRlc3Q6ZTJlOndhdGNoXCI6IFwieWFybiBnOnZpdGVzdCB3YXRjaCAtYyB2aXRlc3QuY29uZmlnLmUyZS5tdHNcIixcbiAgICBcInRlc3Q6aW5kZXhcIjogXCJ0c2MgLS1ub0VtaXQgLi90ZXN0L2luZGV4LXR5cGVzLnRzICYmIG5vZGUgLi90ZXN0L2luZGV4LW9iamVjdHMuc3BlYy5tanNcIixcbiAgICBcInRlc3Q6aW50ZWdyYXRpb25cIjogXCJ5YXJuIGc6dml0ZXN0IHJ1biAtLXBhc3NXaXRoTm9UZXN0cyAtYyB2aXRlc3QuY29uZmlnLmludGVnLm10c1wiLFxuICAgIFwidGVzdDppbnRlZ3JhdGlvbjp3YXRjaFwiOiBcInlhcm4gZzp2aXRlc3QgcnVuIC0tcGFzc1dpdGhOb1Rlc3RzIC1jIHZpdGVzdC5jb25maWcuaW50ZWcubXRzXCIsXG4gICAgXCJ0ZXN0OndhdGNoXCI6IFwieWFybiBnOnZpdGVzdCB3YXRjaCAtLXBhc3NXaXRoTm9UZXN0c1wiXG4gIH0sXG4gIFwibWFpblwiOiBcIi4vZGlzdC1janMvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC10eXBlcy9pbmRleC5kLnRzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0LWVzL2luZGV4LmpzXCIsXG4gIFwic2lkZUVmZmVjdHNcIjogZmFsc2UsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhd3MtY3J5cHRvL3NoYTI1Ni1icm93c2VyXCI6IFwiNS4yLjBcIixcbiAgICBcIkBhd3MtY3J5cHRvL3NoYTI1Ni1qc1wiOiBcIjUuMi4wXCIsXG4gICAgXCJAYXdzLXNkay9jb3JlXCI6IFwiXjMuOTczLjI2XCIsXG4gICAgXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLW5vZGVcIjogXCJeMy45NzIuMjlcIixcbiAgICBcIkBhd3Mtc2RrL2V2ZW50c3RyZWFtLWhhbmRsZXItbm9kZVwiOiBcIl4zLjk3Mi4xMlwiLFxuICAgIFwiQGF3cy1zZGsvbWlkZGxld2FyZS1ldmVudHN0cmVhbVwiOiBcIl4zLjk3Mi44XCIsXG4gICAgXCJAYXdzLXNkay9taWRkbGV3YXJlLWhvc3QtaGVhZGVyXCI6IFwiXjMuOTcyLjhcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtbG9nZ2VyXCI6IFwiXjMuOTcyLjhcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvblwiOiBcIl4zLjk3Mi45XCIsXG4gICAgXCJAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnRcIjogXCJeMy45NzIuMjhcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtd2Vic29ja2V0XCI6IFwiXjMuOTcyLjE0XCIsXG4gICAgXCJAYXdzLXNkay9yZWdpb24tY29uZmlnLXJlc29sdmVyXCI6IFwiXjMuOTcyLjEwXCIsXG4gICAgXCJAYXdzLXNkay90b2tlbi1wcm92aWRlcnNcIjogXCIzLjEwMjEuMFwiLFxuICAgIFwiQGF3cy1zZGsvdHlwZXNcIjogXCJeMy45NzMuNlwiLFxuICAgIFwiQGF3cy1zZGsvdXRpbC1lbmRwb2ludHNcIjogXCJeMy45OTYuNVwiLFxuICAgIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LWJyb3dzZXJcIjogXCJeMy45NzIuOFwiLFxuICAgIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIjogXCJeMy45NzMuMTRcIixcbiAgICBcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCI6IFwiXjQuNC4xM1wiLFxuICAgIFwiQHNtaXRoeS9jb3JlXCI6IFwiXjMuMjMuMTNcIixcbiAgICBcIkBzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtYnJvd3NlclwiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtY29uZmlnLXJlc29sdmVyXCI6IFwiXjQuMy4xMlwiLFxuICAgIFwiQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS1ub2RlXCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS9mZXRjaC1odHRwLWhhbmRsZXJcIjogXCJeNS4zLjE1XCIsXG4gICAgXCJAc21pdGh5L2hhc2gtbm9kZVwiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvaW52YWxpZC1kZXBlbmRlbmN5XCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS9taWRkbGV3YXJlLWNvbnRlbnQtbGVuZ3RoXCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI6IFwiXjQuNC4yOFwiLFxuICAgIFwiQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5XCI6IFwiXjQuNC40NlwiLFxuICAgIFwiQHNtaXRoeS9taWRkbGV3YXJlLXNlcmRlXCI6IFwiXjQuMi4xNlwiLFxuICAgIFwiQHNtaXRoeS9taWRkbGV3YXJlLXN0YWNrXCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS9ub2RlLWNvbmZpZy1wcm92aWRlclwiOiBcIl40LjMuMTJcIixcbiAgICBcIkBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXJcIjogXCJeNC41LjFcIixcbiAgICBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiOiBcIl41LjMuMTJcIixcbiAgICBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiOiBcIl40LjEyLjhcIixcbiAgICBcIkBzbWl0aHkvdHlwZXNcIjogXCJeNC4xMy4xXCIsXG4gICAgXCJAc21pdGh5L3VybC1wYXJzZXJcIjogXCJeNC4yLjEyXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtYmFzZTY0XCI6IFwiXjQuMy4yXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtYm9keS1sZW5ndGgtYnJvd3NlclwiOiBcIl40LjIuMlwiLFxuICAgIFwiQHNtaXRoeS91dGlsLWJvZHktbGVuZ3RoLW5vZGVcIjogXCJeNC4yLjNcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1kZWZhdWx0cy1tb2RlLWJyb3dzZXJcIjogXCJeNC4zLjQ0XCIsXG4gICAgXCJAc21pdGh5L3V0aWwtZGVmYXVsdHMtbW9kZS1ub2RlXCI6IFwiXjQuMi40OFwiLFxuICAgIFwiQHNtaXRoeS91dGlsLWVuZHBvaW50c1wiOiBcIl4zLjMuM1wiLFxuICAgIFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIjogXCJeNC4yLjEyXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtcmV0cnlcIjogXCJeNC4yLjEzXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtc3RyZWFtXCI6IFwiXjQuNS4yMVwiLFxuICAgIFwiQHNtaXRoeS91dGlsLXV0ZjhcIjogXCJeNC4yLjJcIixcbiAgICBcInRzbGliXCI6IFwiXjIuNi4yXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHNtaXRoeS9zbmFwc2hvdC10ZXN0aW5nXCI6IFwiXjIuMC40XCIsXG4gICAgXCJAdHNjb25maWcvbm9kZTIwXCI6IFwiMjAuMS44XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNC44XCIsXG4gICAgXCJjb25jdXJyZW50bHlcIjogXCI3LjAuMFwiLFxuICAgIFwiZG93bmxldmVsLWR0c1wiOiBcIjAuMTAuMVwiLFxuICAgIFwicHJlbW92ZVwiOiBcIjQuMC4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwifjUuOC4zXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeNC4wLjE3XCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTIwLjAuMFwiXG4gIH0sXG4gIFwidHlwZXNWZXJzaW9uc1wiOiB7XG4gICAgXCI8NC41XCI6IHtcbiAgICAgIFwiZGlzdC10eXBlcy8qXCI6IFtcbiAgICAgICAgXCJkaXN0LXR5cGVzL3RzMy40LypcIlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0LSovKipcIlxuICBdLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiQVdTIFNESyBmb3IgSmF2YVNjcmlwdCBUZWFtXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2F3cy5hbWF6b24uY29tL2phdmFzY3JpcHQvXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlLTIuMFwiLFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kaXN0LWVzL3J1bnRpbWVDb25maWdcIjogXCIuL2Rpc3QtZXMvcnVudGltZUNvbmZpZy5icm93c2VyXCJcbiAgfSxcbiAgXCJyZWFjdC1uYXRpdmVcIjoge1xuICAgIFwiLi9kaXN0LWVzL3J1bnRpbWVDb25maWdcIjogXCIuL2Rpc3QtZXMvcnVudGltZUNvbmZpZy5uYXRpdmVcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3Mtc2RrLWpzLXYzL3RyZWUvbWFpbi9jbGllbnRzL2NsaWVudC1iZWRyb2NrLXJ1bnRpbWVcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hd3MvYXdzLXNkay1qcy12My5naXRcIixcbiAgICBcImRpcmVjdG9yeVwiOiBcImNsaWVudHMvY2xpZW50LWJlZHJvY2stcnVudGltZVwiXG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBldmVudHN0cmVhbUNvZGVjID0gcmVxdWlyZSgnQHNtaXRoeS9ldmVudHN0cmVhbS1jb2RlYycpO1xudmFyIG5vZGVfc3RyZWFtID0gcmVxdWlyZSgnbm9kZTpzdHJlYW0nKTtcblxuY2xhc3MgRXZlbnRTaWduaW5nVHJhbnNmb3JtU3RyZWFtIGV4dGVuZHMgbm9kZV9zdHJlYW0uVHJhbnNmb3JtIHtcbiAgICBwcmlvclNpZ25hdHVyZTtcbiAgICBtZXNzYWdlU2lnbmVyO1xuICAgIGV2ZW50U3RyZWFtQ29kZWM7XG4gICAgc3lzdGVtQ2xvY2tPZmZzZXRQcm92aWRlcjtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGF1dG9EZXN0cm95OiB0cnVlLFxuICAgICAgICAgICAgcmVhZGFibGVPYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGVPYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJpb3JTaWduYXR1cmUgPSBvcHRpb25zLnByaW9yU2lnbmF0dXJlO1xuICAgICAgICB0aGlzLmV2ZW50U3RyZWFtQ29kZWMgPSBvcHRpb25zLmV2ZW50U3RyZWFtQ29kZWM7XG4gICAgICAgIHRoaXMubWVzc2FnZVNpZ25lciA9IG9wdGlvbnMubWVzc2FnZVNpZ25lcjtcbiAgICAgICAgdGhpcy5zeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyID0gb3B0aW9ucy5zeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyO1xuICAgIH1cbiAgICBhc3luYyBfdHJhbnNmb3JtKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAoYXdhaXQgdGhpcy5zeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyKCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVIZWFkZXIgPSB7XG4gICAgICAgICAgICAgICAgXCI6ZGF0ZVwiOiB7IHR5cGU6IFwidGltZXN0YW1wXCIsIHZhbHVlOiBub3cgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzaWduZWRNZXNzYWdlID0gYXdhaXQgdGhpcy5tZXNzYWdlU2lnbmVyLnNpZ24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogY2h1bmssXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGRhdGVIZWFkZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmlvclNpZ25hdHVyZTogdGhpcy5wcmlvclNpZ25hdHVyZSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzaWduaW5nRGF0ZTogbm93LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnByaW9yU2lnbmF0dXJlID0gc2lnbmVkTWVzc2FnZS5zaWduYXR1cmU7XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkU2lnbmVkID0gdGhpcy5ldmVudFN0cmVhbUNvZGVjLmVuY29kZSh7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAuLi5kYXRlSGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICBcIjpjaHVuay1zaWduYXR1cmVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaW5hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRTaWduYXR1cmVCaW5hcnkoc2lnbmVkTWVzc2FnZS5zaWduYXR1cmUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogY2h1bmssXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucHVzaChzZXJpYWxpemVkU2lnbmVkKTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRTaWduYXR1cmVCaW5hcnkoc2lnbmF0dXJlKSB7XG4gICAgY29uc3QgYnVmID0gQnVmZmVyLmZyb20oc2lnbmF0dXJlLCBcImhleFwiKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG59XG5cbmNsYXNzIEV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXIge1xuICAgIG1lc3NhZ2VTaWduZXI7XG4gICAgZXZlbnRTdHJlYW1Db2RlYztcbiAgICBzeXN0ZW1DbG9ja09mZnNldFByb3ZpZGVyO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2lnbmVyID0gb3B0aW9ucy5tZXNzYWdlU2lnbmVyO1xuICAgICAgICB0aGlzLmV2ZW50U3RyZWFtQ29kZWMgPSBuZXcgZXZlbnRzdHJlYW1Db2RlYy5FdmVudFN0cmVhbUNvZGVjKG9wdGlvbnMudXRmOEVuY29kZXIsIG9wdGlvbnMudXRmOERlY29kZXIpO1xuICAgICAgICB0aGlzLnN5c3RlbUNsb2NrT2Zmc2V0UHJvdmlkZXIgPSBhc3luYyAoKSA9PiBvcHRpb25zLnN5c3RlbUNsb2NrT2Zmc2V0ID8/IDA7XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZShuZXh0LCBhcmdzLCBjb250ZXh0ID0ge30pIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGFyZ3MucmVxdWVzdDtcbiAgICAgICAgY29uc3QgeyBib2R5OiBwYXlsb2FkLCBxdWVyeSB9ID0gcmVxdWVzdDtcbiAgICAgICAgaWYgKCEocGF5bG9hZCBpbnN0YW5jZW9mIG5vZGVfc3RyZWFtLlJlYWRhYmxlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnRzdHJlYW0gcGF5bG9hZCBtdXN0IGJlIGEgUmVhZGFibGUgc3RyZWFtLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXlsb2FkU3RyZWFtID0gcGF5bG9hZDtcbiAgICAgICAgcmVxdWVzdC5ib2R5ID0gbmV3IG5vZGVfc3RyZWFtLlBhc3NUaHJvdWdoKHtcbiAgICAgICAgICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtYXRjaCA9IHJlcXVlc3QuaGVhZGVycz8uYXV0aG9yaXphdGlvbj8ubWF0Y2goL1NpZ25hdHVyZT0oW1xcd10rKSQvKTtcbiAgICAgICAgbGV0IHByaW9yU2lnbmF0dXJlID0gbWF0Y2g/LlsxXSA/PyBxdWVyeT8uW1wiWC1BbXotU2lnbmF0dXJlXCJdID8/IFwiXCI7XG4gICAgICAgIGlmIChjb250ZXh0Ll9fc3RhdGljU2lnbmF0dXJlKSB7XG4gICAgICAgICAgICBwcmlvclNpZ25hdHVyZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbmluZ1N0cmVhbSA9IG5ldyBFdmVudFNpZ25pbmdUcmFuc2Zvcm1TdHJlYW0oe1xuICAgICAgICAgICAgcHJpb3JTaWduYXR1cmUsXG4gICAgICAgICAgICBldmVudFN0cmVhbUNvZGVjOiB0aGlzLmV2ZW50U3RyZWFtQ29kZWMsXG4gICAgICAgICAgICBtZXNzYWdlU2lnbmVyOiBhd2FpdCB0aGlzLm1lc3NhZ2VTaWduZXIoKSxcbiAgICAgICAgICAgIHN5c3RlbUNsb2NrT2Zmc2V0UHJvdmlkZXI6IHRoaXMuc3lzdGVtQ2xvY2tPZmZzZXRQcm92aWRlcixcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCByZXNvbHZlUGlwZWxpbmU7XG4gICAgICAgIGNvbnN0IHBpcGVsaW5lRXJyb3IgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlUGlwZWxpbmUgPSAoKSA9PiByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBub2RlX3N0cmVhbS5waXBlbGluZShwYXlsb2FkU3RyZWFtLCBzaWduaW5nU3RyZWFtLCByZXF1ZXN0LmJvZHksIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFBpcGVsaW5lIGVycm9yIGluIEBhd3Mtc2RrL2V2ZW50c3RyZWFtLWhhbmRsZXItbm9kZTogJHtlcnIubWVzc2FnZX1gLCB7IGNhdXNlOiBlcnIgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFByb21pc2UucmFjZShbbmV4dChhcmdzKSwgcGlwZWxpbmVFcnJvcl0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmJvZHkuZW5kKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgcmVzb2x2ZVBpcGVsaW5lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmNvbnN0IGV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXJQcm92aWRlciA9IChvcHRpb25zKSA9PiBuZXcgRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlcihvcHRpb25zKTtcblxuZXhwb3J0cy5ldmVudFN0cmVhbVBheWxvYWRIYW5kbGVyUHJvdmlkZXIgPSBldmVudFN0cmVhbVBheWxvYWRIYW5kbGVyUHJvdmlkZXI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXZlbnRzdHJlYW1TZXJkZVVuaXZlcnNhbCA9IHJlcXVpcmUoJ0BzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtdW5pdmVyc2FsJyk7XG52YXIgc3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbmFzeW5jIGZ1bmN0aW9uKiByZWFkYWJsZXRvSXRlcmFibGUocmVhZFN0cmVhbSkge1xuICAgIGxldCBzdHJlYW1FbmRlZCA9IGZhbHNlO1xuICAgIGxldCBnZW5lcmF0aW9uRW5kZWQgPSBmYWxzZTtcbiAgICBjb25zdCByZWNvcmRzID0gbmV3IEFycmF5KCk7XG4gICAgcmVhZFN0cmVhbS5vbihcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgaWYgKCFzdHJlYW1FbmRlZCkge1xuICAgICAgICAgICAgc3RyZWFtRW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlYWRTdHJlYW0ub24oXCJkYXRhXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIHJlY29yZHMucHVzaChkYXRhKTtcbiAgICB9KTtcbiAgICByZWFkU3RyZWFtLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICAgICAgc3RyZWFtRW5kZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHdoaWxlICghZ2VuZXJhdGlvbkVuZGVkKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShyZWNvcmRzLnNoaWZ0KCkpLCAwKSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2VuZXJhdGlvbkVuZGVkID0gc3RyZWFtRW5kZWQgJiYgcmVjb3Jkcy5sZW5ndGggPT09IDA7XG4gICAgfVxufVxuXG5jbGFzcyBFdmVudFN0cmVhbU1hcnNoYWxsZXIge1xuICAgIHVuaXZlcnNhbE1hcnNoYWxsZXI7XG4gICAgY29uc3RydWN0b3IoeyB1dGY4RW5jb2RlciwgdXRmOERlY29kZXIgfSkge1xuICAgICAgICB0aGlzLnVuaXZlcnNhbE1hcnNoYWxsZXIgPSBuZXcgZXZlbnRzdHJlYW1TZXJkZVVuaXZlcnNhbC5FdmVudFN0cmVhbU1hcnNoYWxsZXIoe1xuICAgICAgICAgICAgdXRmOERlY29kZXIsXG4gICAgICAgICAgICB1dGY4RW5jb2RlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc2VyaWFsaXplKGJvZHksIGRlc2VyaWFsaXplcikge1xuICAgICAgICBjb25zdCBib2R5SXRlcmFibGUgPSB0eXBlb2YgYm9keVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIiA/IGJvZHkgOiByZWFkYWJsZXRvSXRlcmFibGUoYm9keSk7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXZlcnNhbE1hcnNoYWxsZXIuZGVzZXJpYWxpemUoYm9keUl0ZXJhYmxlLCBkZXNlcmlhbGl6ZXIpO1xuICAgIH1cbiAgICBzZXJpYWxpemUoaW5wdXQsIHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5SZWFkYWJsZS5mcm9tKHRoaXMudW5pdmVyc2FsTWFyc2hhbGxlci5zZXJpYWxpemUoaW5wdXQsIHNlcmlhbGl6ZXIpKTtcbiAgICB9XG59XG5cbmNvbnN0IGV2ZW50U3RyZWFtU2VyZGVQcm92aWRlciA9IChvcHRpb25zKSA9PiBuZXcgRXZlbnRTdHJlYW1NYXJzaGFsbGVyKG9wdGlvbnMpO1xuXG5leHBvcnRzLkV2ZW50U3RyZWFtTWFyc2hhbGxlciA9IEV2ZW50U3RyZWFtTWFyc2hhbGxlcjtcbmV4cG9ydHMuZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyID0gZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ydWxlU2V0ID0gdm9pZCAwO1xuY29uc3QgcyA9IFwicmVxdWlyZWRcIiwgdCA9IFwiZm5cIiwgdSA9IFwiYXJndlwiLCB2ID0gXCJyZWZcIjtcbmNvbnN0IGEgPSB0cnVlLCBiID0gXCJpc1NldFwiLCBjID0gXCJib29sZWFuRXF1YWxzXCIsIGQgPSBcImVycm9yXCIsIGUgPSBcImVuZHBvaW50XCIsIGYgPSBcInRyZWVcIiwgZyA9IFwiUGFydGl0aW9uUmVzdWx0XCIsIGggPSB7IFtzXTogZmFsc2UsIFwidHlwZVwiOiBcInN0cmluZ1wiIH0sIGkgPSB7IFtzXTogdHJ1ZSwgXCJkZWZhdWx0XCI6IGZhbHNlLCBcInR5cGVcIjogXCJib29sZWFuXCIgfSwgaiA9IHsgW3ZdOiBcIkVuZHBvaW50XCIgfSwgayA9IHsgW3RdOiBjLCBbdV06IFt7IFt2XTogXCJVc2VGSVBTXCIgfSwgdHJ1ZV0gfSwgbCA9IHsgW3RdOiBjLCBbdV06IFt7IFt2XTogXCJVc2VEdWFsU3RhY2tcIiB9LCB0cnVlXSB9LCBtID0ge30sIG4gPSB7IFt0XTogXCJnZXRBdHRyXCIsIFt1XTogW3sgW3ZdOiBnIH0sIFwic3VwcG9ydHNGSVBTXCJdIH0sIG8gPSB7IFt0XTogYywgW3VdOiBbdHJ1ZSwgeyBbdF06IFwiZ2V0QXR0clwiLCBbdV06IFt7IFt2XTogZyB9LCBcInN1cHBvcnRzRHVhbFN0YWNrXCJdIH1dIH0sIHAgPSBba10sIHEgPSBbbF0sIHIgPSBbeyBbdl06IFwiUmVnaW9uXCIgfV07XG5jb25zdCBfZGF0YSA9IHsgdmVyc2lvbjogXCIxLjBcIiwgcGFyYW1ldGVyczogeyBSZWdpb246IGgsIFVzZUR1YWxTdGFjazogaSwgVXNlRklQUzogaSwgRW5kcG9pbnQ6IGggfSwgcnVsZXM6IFt7IGNvbmRpdGlvbnM6IFt7IFt0XTogYiwgW3VdOiBbal0gfV0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBwLCBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IEZJUFMgYW5kIGN1c3RvbSBlbmRwb2ludCBhcmUgbm90IHN1cHBvcnRlZFwiLCB0eXBlOiBkIH0sIHsgcnVsZXM6IFt7IGNvbmRpdGlvbnM6IHEsIGVycm9yOiBcIkludmFsaWQgQ29uZmlndXJhdGlvbjogRHVhbHN0YWNrIGFuZCBjdXN0b20gZW5kcG9pbnQgYXJlIG5vdCBzdXBwb3J0ZWRcIiwgdHlwZTogZCB9LCB7IGVuZHBvaW50OiB7IHVybDogaiwgcHJvcGVydGllczogbSwgaGVhZGVyczogbSB9LCB0eXBlOiBlIH1dLCB0eXBlOiBmIH1dLCB0eXBlOiBmIH0sIHsgcnVsZXM6IFt7IGNvbmRpdGlvbnM6IFt7IFt0XTogYiwgW3VdOiByIH1dLCBydWxlczogW3sgY29uZGl0aW9uczogW3sgW3RdOiBcImF3cy5wYXJ0aXRpb25cIiwgW3VdOiByLCBhc3NpZ246IGcgfV0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbaywgbF0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbeyBbdF06IGMsIFt1XTogW2EsIG5dIH0sIG9dLCBydWxlczogW3sgcnVsZXM6IFt7IGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL2JlZHJvY2stcnVudGltZS1maXBzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZHVhbFN0YWNrRG5zU3VmZml4fVwiLCBwcm9wZXJ0aWVzOiBtLCBoZWFkZXJzOiBtIH0sIHR5cGU6IGUgfV0sIHR5cGU6IGYgfV0sIHR5cGU6IGYgfSwgeyBlcnJvcjogXCJGSVBTIGFuZCBEdWFsU3RhY2sgYXJlIGVuYWJsZWQsIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IG9uZSBvciBib3RoXCIsIHR5cGU6IGQgfV0sIHR5cGU6IGYgfSwgeyBjb25kaXRpb25zOiBwLCBydWxlczogW3sgY29uZGl0aW9uczogW3sgW3RdOiBjLCBbdV06IFtuLCBhXSB9XSwgcnVsZXM6IFt7IHJ1bGVzOiBbeyBlbmRwb2ludDogeyB1cmw6IFwiaHR0cHM6Ly9iZWRyb2NrLXJ1bnRpbWUtZmlwcy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2Ruc1N1ZmZpeH1cIiwgcHJvcGVydGllczogbSwgaGVhZGVyczogbSB9LCB0eXBlOiBlIH1dLCB0eXBlOiBmIH1dLCB0eXBlOiBmIH0sIHsgZXJyb3I6IFwiRklQUyBpcyBlbmFibGVkIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IEZJUFNcIiwgdHlwZTogZCB9XSwgdHlwZTogZiB9LCB7IGNvbmRpdGlvbnM6IHEsIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbb10sIHJ1bGVzOiBbeyBydWxlczogW3sgZW5kcG9pbnQ6IHsgdXJsOiBcImh0dHBzOi8vYmVkcm9jay1ydW50aW1lLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZHVhbFN0YWNrRG5zU3VmZml4fVwiLCBwcm9wZXJ0aWVzOiBtLCBoZWFkZXJzOiBtIH0sIHR5cGU6IGUgfV0sIHR5cGU6IGYgfV0sIHR5cGU6IGYgfSwgeyBlcnJvcjogXCJEdWFsU3RhY2sgaXMgZW5hYmxlZCBidXQgdGhpcyBwYXJ0aXRpb24gZG9lcyBub3Qgc3VwcG9ydCBEdWFsU3RhY2tcIiwgdHlwZTogZCB9XSwgdHlwZTogZiB9LCB7IHJ1bGVzOiBbeyBlbmRwb2ludDogeyB1cmw6IFwiaHR0cHM6Ly9iZWRyb2NrLXJ1bnRpbWUue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkbnNTdWZmaXh9XCIsIHByb3BlcnRpZXM6IG0sIGhlYWRlcnM6IG0gfSwgdHlwZTogZSB9XSwgdHlwZTogZiB9XSwgdHlwZTogZiB9XSwgdHlwZTogZiB9LCB7IGVycm9yOiBcIkludmFsaWQgQ29uZmlndXJhdGlvbjogTWlzc2luZyBSZWdpb25cIiwgdHlwZTogZCB9XSwgdHlwZTogZiB9XSB9O1xuZXhwb3J0cy5ydWxlU2V0ID0gX2RhdGE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHRFbmRwb2ludFJlc29sdmVyID0gdm9pZCAwO1xuY29uc3QgdXRpbF9lbmRwb2ludHNfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay91dGlsLWVuZHBvaW50c1wiKTtcbmNvbnN0IHV0aWxfZW5kcG9pbnRzXzIgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWVuZHBvaW50c1wiKTtcbmNvbnN0IHJ1bGVzZXRfMSA9IHJlcXVpcmUoXCIuL3J1bGVzZXRcIik7XG5jb25zdCBjYWNoZSA9IG5ldyB1dGlsX2VuZHBvaW50c18yLkVuZHBvaW50Q2FjaGUoe1xuICAgIHNpemU6IDUwLFxuICAgIHBhcmFtczogW1wiRW5kcG9pbnRcIiwgXCJSZWdpb25cIiwgXCJVc2VEdWFsU3RhY2tcIiwgXCJVc2VGSVBTXCJdLFxufSk7XG5jb25zdCBkZWZhdWx0RW5kcG9pbnRSZXNvbHZlciA9IChlbmRwb2ludFBhcmFtcywgY29udGV4dCA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChlbmRwb2ludFBhcmFtcywgKCkgPT4gKDAsIHV0aWxfZW5kcG9pbnRzXzIucmVzb2x2ZUVuZHBvaW50KShydWxlc2V0XzEucnVsZVNldCwge1xuICAgICAgICBlbmRwb2ludFBhcmFtczogZW5kcG9pbnRQYXJhbXMsXG4gICAgICAgIGxvZ2dlcjogY29udGV4dC5sb2dnZXIsXG4gICAgfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIgPSBkZWZhdWx0RW5kcG9pbnRSZXNvbHZlcjtcbnV0aWxfZW5kcG9pbnRzXzIuY3VzdG9tRW5kcG9pbnRGdW5jdGlvbnMuYXdzID0gdXRpbF9lbmRwb2ludHNfMS5hd3NFbmRwb2ludEZ1bmN0aW9ucztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uID0gZXhwb3J0cy5fX1NlcnZpY2VFeGNlcHRpb24gPSB2b2lkIDA7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19TZXJ2aWNlRXhjZXB0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbWl0aHlfY2xpZW50XzEuU2VydmljZUV4Y2VwdGlvbjsgfSB9KTtcbmNsYXNzIEJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIHNtaXRoeV9jbGllbnRfMS5TZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24gPSBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb247XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24gPSBleHBvcnRzLk1vZGVsVGltZW91dEV4Y2VwdGlvbiA9IGV4cG9ydHMuTW9kZWxOb3RSZWFkeUV4Y2VwdGlvbiA9IGV4cG9ydHMuTW9kZWxFcnJvckV4Y2VwdGlvbiA9IGV4cG9ydHMuU2VydmljZVVuYXZhaWxhYmxlRXhjZXB0aW9uID0gZXhwb3J0cy5TZXJ2aWNlUXVvdGFFeGNlZWRlZEV4Y2VwdGlvbiA9IGV4cG9ydHMuUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvbiA9IGV4cG9ydHMuQ29uZmxpY3RFeGNlcHRpb24gPSBleHBvcnRzLlZhbGlkYXRpb25FeGNlcHRpb24gPSBleHBvcnRzLlRocm90dGxpbmdFeGNlcHRpb24gPSBleHBvcnRzLkludGVybmFsU2VydmVyRXhjZXB0aW9uID0gZXhwb3J0cy5BY2Nlc3NEZW5pZWRFeGNlcHRpb24gPSB2b2lkIDA7XG5jb25zdCBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb25fMSA9IHJlcXVpcmUoXCIuL0JlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvblwiKTtcbmNsYXNzIEFjY2Vzc0RlbmllZEV4Y2VwdGlvbiBleHRlbmRzIEJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbl8xLkJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiQWNjZXNzRGVuaWVkRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiQWNjZXNzRGVuaWVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEFjY2Vzc0RlbmllZEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWNjZXNzRGVuaWVkRXhjZXB0aW9uID0gQWNjZXNzRGVuaWVkRXhjZXB0aW9uO1xuY2xhc3MgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24gZXh0ZW5kcyBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb25fMS5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkludGVybmFsU2VydmVyRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJzZXJ2ZXJcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJzZXJ2ZXJcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkludGVybmFsU2VydmVyRXhjZXB0aW9uID0gSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb247XG5jbGFzcyBUaHJvdHRsaW5nRXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJUaHJvdHRsaW5nRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiVGhyb3R0bGluZ0V4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBUaHJvdHRsaW5nRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5UaHJvdHRsaW5nRXhjZXB0aW9uID0gVGhyb3R0bGluZ0V4Y2VwdGlvbjtcbmNsYXNzIFZhbGlkYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb25fMS5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIlZhbGlkYXRpb25FeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJWYWxpZGF0aW9uRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFZhbGlkYXRpb25FeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLlZhbGlkYXRpb25FeGNlcHRpb24gPSBWYWxpZGF0aW9uRXhjZXB0aW9uO1xuY2xhc3MgQ29uZmxpY3RFeGNlcHRpb24gZXh0ZW5kcyBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb25fMS5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkNvbmZsaWN0RXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29uZmxpY3RFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ29uZmxpY3RFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbmZsaWN0RXhjZXB0aW9uID0gQ29uZmxpY3RFeGNlcHRpb247XG5jbGFzcyBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uID0gUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvbjtcbmNsYXNzIFNlcnZpY2VRdW90YUV4Y2VlZGVkRXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJTZXJ2aWNlUXVvdGFFeGNlZWRlZEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlNlcnZpY2VRdW90YUV4Y2VlZGVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZpY2VRdW90YUV4Y2VlZGVkRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXJ2aWNlUXVvdGFFeGNlZWRlZEV4Y2VwdGlvbiA9IFNlcnZpY2VRdW90YUV4Y2VlZGVkRXhjZXB0aW9uO1xuY2xhc3MgU2VydmljZVVuYXZhaWxhYmxlRXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJTZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcInNlcnZlclwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJTZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJzZXJ2ZXJcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU2VydmljZVVuYXZhaWxhYmxlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb24gPSBTZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb247XG5jbGFzcyBNb2RlbEVycm9yRXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJNb2RlbEVycm9yRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBvcmlnaW5hbFN0YXR1c0NvZGU7XG4gICAgcmVzb3VyY2VOYW1lO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJNb2RlbEVycm9yRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE1vZGVsRXJyb3JFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXR1c0NvZGUgPSBvcHRzLm9yaWdpbmFsU3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZU5hbWUgPSBvcHRzLnJlc291cmNlTmFtZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGVsRXJyb3JFeGNlcHRpb24gPSBNb2RlbEVycm9yRXhjZXB0aW9uO1xuY2xhc3MgTW9kZWxOb3RSZWFkeUV4Y2VwdGlvbiBleHRlbmRzIEJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbl8xLkJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiTW9kZWxOb3RSZWFkeUV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgJHJldHJ5YWJsZSA9IHt9O1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJNb2RlbE5vdFJlYWR5RXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE1vZGVsTm90UmVhZHlFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGVsTm90UmVhZHlFeGNlcHRpb24gPSBNb2RlbE5vdFJlYWR5RXhjZXB0aW9uO1xuY2xhc3MgTW9kZWxUaW1lb3V0RXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJNb2RlbFRpbWVvdXRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJNb2RlbFRpbWVvdXRFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgTW9kZWxUaW1lb3V0RXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5Nb2RlbFRpbWVvdXRFeGNlcHRpb24gPSBNb2RlbFRpbWVvdXRFeGNlcHRpb247XG5jbGFzcyBNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uIGV4dGVuZHMgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBvcmlnaW5hbFN0YXR1c0NvZGU7XG4gICAgb3JpZ2luYWxNZXNzYWdlO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXR1c0NvZGUgPSBvcHRzLm9yaWdpbmFsU3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1lc3NhZ2UgPSBvcHRzLm9yaWdpbmFsTWVzc2FnZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24gPSBNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Eb2N1bWVudFBhZ2VMb2NhdGlvbiQgPSBleHBvcnRzLkRvY3VtZW50Q2h1bmtMb2NhdGlvbiQgPSBleHBvcnRzLkRvY3VtZW50Q2hhckxvY2F0aW9uJCA9IGV4cG9ydHMuRG9jdW1lbnRCbG9jayQgPSBleHBvcnRzLkNvdW50VG9rZW5zUmVzcG9uc2UkID0gZXhwb3J0cy5Db3VudFRva2Vuc1JlcXVlc3QkID0gZXhwb3J0cy5Db252ZXJzZVRyYWNlJCA9IGV4cG9ydHMuQ29udmVyc2VUb2tlbnNSZXF1ZXN0JCA9IGV4cG9ydHMuQ29udmVyc2VTdHJlYW1UcmFjZSQgPSBleHBvcnRzLkNvbnZlcnNlU3RyZWFtUmVzcG9uc2UkID0gZXhwb3J0cy5Db252ZXJzZVN0cmVhbVJlcXVlc3QkID0gZXhwb3J0cy5Db252ZXJzZVN0cmVhbU1ldHJpY3MkID0gZXhwb3J0cy5Db252ZXJzZVN0cmVhbU1ldGFkYXRhRXZlbnQkID0gZXhwb3J0cy5Db252ZXJzZVJlc3BvbnNlJCA9IGV4cG9ydHMuQ29udmVyc2VSZXF1ZXN0JCA9IGV4cG9ydHMuQ29udmVyc2VNZXRyaWNzJCA9IGV4cG9ydHMuQ29udGVudEJsb2NrU3RvcEV2ZW50JCA9IGV4cG9ydHMuQ29udGVudEJsb2NrU3RhcnRFdmVudCQgPSBleHBvcnRzLkNvbnRlbnRCbG9ja0RlbHRhRXZlbnQkID0gZXhwb3J0cy5DaXRhdGlvblNvdXJjZUNvbnRlbnREZWx0YSQgPSBleHBvcnRzLkNpdGF0aW9uc0RlbHRhJCA9IGV4cG9ydHMuQ2l0YXRpb25zQ29udGVudEJsb2NrJCA9IGV4cG9ydHMuQ2l0YXRpb25zQ29uZmlnJCA9IGV4cG9ydHMuQ2l0YXRpb24kID0gZXhwb3J0cy5DYWNoZVBvaW50QmxvY2skID0gZXhwb3J0cy5DYWNoZURldGFpbCQgPSBleHBvcnRzLkJpZGlyZWN0aW9uYWxPdXRwdXRQYXlsb2FkUGFydCQgPSBleHBvcnRzLkJpZGlyZWN0aW9uYWxJbnB1dFBheWxvYWRQYXJ0JCA9IGV4cG9ydHMuQXV0b1Rvb2xDaG9pY2UkID0gZXhwb3J0cy5BdWRpb0Jsb2NrJCA9IGV4cG9ydHMuQXN5bmNJbnZva2VTdW1tYXJ5JCA9IGV4cG9ydHMuQXN5bmNJbnZva2VTM091dHB1dERhdGFDb25maWckID0gZXhwb3J0cy5BcHBseUd1YXJkcmFpbFJlc3BvbnNlJCA9IGV4cG9ydHMuQXBwbHlHdWFyZHJhaWxSZXF1ZXN0JCA9IGV4cG9ydHMuQXBwbGllZEd1YXJkcmFpbERldGFpbHMkID0gZXhwb3J0cy5BbnlUb29sQ2hvaWNlJCA9IGV4cG9ydHMuZXJyb3JUeXBlUmVnaXN0cmllcyA9IGV4cG9ydHMuVmFsaWRhdGlvbkV4Y2VwdGlvbiQgPSBleHBvcnRzLlRocm90dGxpbmdFeGNlcHRpb24kID0gZXhwb3J0cy5TZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb24kID0gZXhwb3J0cy5TZXJ2aWNlUXVvdGFFeGNlZWRlZEV4Y2VwdGlvbiQgPSBleHBvcnRzLlJlc291cmNlTm90Rm91bmRFeGNlcHRpb24kID0gZXhwb3J0cy5Nb2RlbFRpbWVvdXRFeGNlcHRpb24kID0gZXhwb3J0cy5Nb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uJCA9IGV4cG9ydHMuTW9kZWxOb3RSZWFkeUV4Y2VwdGlvbiQgPSBleHBvcnRzLk1vZGVsRXJyb3JFeGNlcHRpb24kID0gZXhwb3J0cy5JbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiQgPSBleHBvcnRzLkNvbmZsaWN0RXhjZXB0aW9uJCA9IGV4cG9ydHMuQWNjZXNzRGVuaWVkRXhjZXB0aW9uJCA9IGV4cG9ydHMuQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uJCA9IHZvaWQgMDtcbmV4cG9ydHMuSW52b2tlTW9kZWxSZXNwb25zZSQgPSBleHBvcnRzLkludm9rZU1vZGVsUmVxdWVzdCQgPSBleHBvcnRzLkluZmVyZW5jZUNvbmZpZ3VyYXRpb24kID0gZXhwb3J0cy5JbWFnZUJsb2NrU3RhcnQkID0gZXhwb3J0cy5JbWFnZUJsb2NrRGVsdGEkID0gZXhwb3J0cy5JbWFnZUJsb2NrJCA9IGV4cG9ydHMuR3VhcmRyYWlsV29yZFBvbGljeUFzc2Vzc21lbnQkID0gZXhwb3J0cy5HdWFyZHJhaWxVc2FnZSQgPSBleHBvcnRzLkd1YXJkcmFpbFRyYWNlQXNzZXNzbWVudCQgPSBleHBvcnRzLkd1YXJkcmFpbFRvcGljUG9saWN5QXNzZXNzbWVudCQgPSBleHBvcnRzLkd1YXJkcmFpbFRvcGljJCA9IGV4cG9ydHMuR3VhcmRyYWlsVGV4dENoYXJhY3RlcnNDb3ZlcmFnZSQgPSBleHBvcnRzLkd1YXJkcmFpbFRleHRCbG9jayQgPSBleHBvcnRzLkd1YXJkcmFpbFN0cmVhbUNvbmZpZ3VyYXRpb24kID0gZXhwb3J0cy5HdWFyZHJhaWxTZW5zaXRpdmVJbmZvcm1hdGlvblBvbGljeUFzc2Vzc21lbnQkID0gZXhwb3J0cy5HdWFyZHJhaWxSZWdleEZpbHRlciQgPSBleHBvcnRzLkd1YXJkcmFpbFBpaUVudGl0eUZpbHRlciQgPSBleHBvcnRzLkd1YXJkcmFpbE91dHB1dENvbnRlbnQkID0gZXhwb3J0cy5HdWFyZHJhaWxNYW5hZ2VkV29yZCQgPSBleHBvcnRzLkd1YXJkcmFpbEludm9jYXRpb25NZXRyaWNzJCA9IGV4cG9ydHMuR3VhcmRyYWlsSW1hZ2VDb3ZlcmFnZSQgPSBleHBvcnRzLkd1YXJkcmFpbEltYWdlQmxvY2skID0gZXhwb3J0cy5HdWFyZHJhaWxDdXN0b21Xb3JkJCA9IGV4cG9ydHMuR3VhcmRyYWlsQ292ZXJhZ2UkID0gZXhwb3J0cy5HdWFyZHJhaWxDb252ZXJzZVRleHRCbG9jayQgPSBleHBvcnRzLkd1YXJkcmFpbENvbnZlcnNlSW1hZ2VCbG9jayQgPSBleHBvcnRzLkd1YXJkcmFpbENvbnRleHR1YWxHcm91bmRpbmdQb2xpY3lBc3Nlc3NtZW50JCA9IGV4cG9ydHMuR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ0ZpbHRlciQgPSBleHBvcnRzLkd1YXJkcmFpbENvbnRlbnRQb2xpY3lBc3Nlc3NtZW50JCA9IGV4cG9ydHMuR3VhcmRyYWlsQ29udGVudEZpbHRlciQgPSBleHBvcnRzLkd1YXJkcmFpbENvbmZpZ3VyYXRpb24kID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdWYWxpZEZpbmRpbmckID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbk9wdGlvbiQgPSBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uQW1iaWd1b3VzRmluZGluZyQgPSBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uJCA9IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVG9vQ29tcGxleEZpbmRpbmckID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnQkID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTY2VuYXJpbyQgPSBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NhdGlzZmlhYmxlRmluZGluZyQgPSBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1J1bGUkID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdQb2xpY3lBc3Nlc3NtZW50JCA9IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nTm9UcmFuc2xhdGlvbnNGaW5kaW5nJCA9IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nTG9naWNXYXJuaW5nJCA9IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW52YWxpZEZpbmRpbmckID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdJbnB1dFRleHRSZWZlcmVuY2UkID0gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdJbXBvc3NpYmxlRmluZGluZyQgPSBleHBvcnRzLkd1YXJkcmFpbEFzc2Vzc21lbnQkID0gZXhwb3J0cy5HZXRBc3luY0ludm9rZVJlc3BvbnNlJCA9IGV4cG9ydHMuR2V0QXN5bmNJbnZva2VSZXF1ZXN0JCA9IGV4cG9ydHMuRXJyb3JCbG9jayQgPSB2b2lkIDA7XG5leHBvcnRzLkRvY3VtZW50U291cmNlJCA9IGV4cG9ydHMuRG9jdW1lbnRDb250ZW50QmxvY2skID0gZXhwb3J0cy5Db3VudFRva2Vuc0lucHV0JCA9IGV4cG9ydHMuQ29udmVyc2VTdHJlYW1PdXRwdXQkID0gZXhwb3J0cy5Db252ZXJzZU91dHB1dCQgPSBleHBvcnRzLkNvbnRlbnRCbG9ja1N0YXJ0JCA9IGV4cG9ydHMuQ29udGVudEJsb2NrRGVsdGEkID0gZXhwb3J0cy5Db250ZW50QmxvY2skID0gZXhwb3J0cy5DaXRhdGlvblNvdXJjZUNvbnRlbnQkID0gZXhwb3J0cy5DaXRhdGlvbkxvY2F0aW9uJCA9IGV4cG9ydHMuQ2l0YXRpb25HZW5lcmF0ZWRDb250ZW50JCA9IGV4cG9ydHMuQXVkaW9Tb3VyY2UkID0gZXhwb3J0cy5Bc3luY0ludm9rZU91dHB1dERhdGFDb25maWckID0gZXhwb3J0cy5XZWJMb2NhdGlvbiQgPSBleHBvcnRzLlZpZGVvQmxvY2skID0gZXhwb3J0cy5Ub29sVXNlQmxvY2tTdGFydCQgPSBleHBvcnRzLlRvb2xVc2VCbG9ja0RlbHRhJCA9IGV4cG9ydHMuVG9vbFVzZUJsb2NrJCA9IGV4cG9ydHMuVG9vbFNwZWNpZmljYXRpb24kID0gZXhwb3J0cy5Ub29sUmVzdWx0QmxvY2tTdGFydCQgPSBleHBvcnRzLlRvb2xSZXN1bHRCbG9jayQgPSBleHBvcnRzLlRvb2xDb25maWd1cmF0aW9uJCA9IGV4cG9ydHMuVG9rZW5Vc2FnZSQgPSBleHBvcnRzLlRhZyQgPSBleHBvcnRzLlN5c3RlbVRvb2wkID0gZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlUmVzcG9uc2UkID0gZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlUmVxdWVzdCQgPSBleHBvcnRzLlNwZWNpZmljVG9vbENob2ljZSQgPSBleHBvcnRzLlNlcnZpY2VUaWVyJCA9IGV4cG9ydHMuU2VhcmNoUmVzdWx0TG9jYXRpb24kID0gZXhwb3J0cy5TZWFyY2hSZXN1bHRDb250ZW50QmxvY2skID0gZXhwb3J0cy5TZWFyY2hSZXN1bHRCbG9jayQgPSBleHBvcnRzLlMzTG9jYXRpb24kID0gZXhwb3J0cy5SZWFzb25pbmdUZXh0QmxvY2skID0gZXhwb3J0cy5Qcm9tcHRSb3V0ZXJUcmFjZSQgPSBleHBvcnRzLlBlcmZvcm1hbmNlQ29uZmlndXJhdGlvbiQgPSBleHBvcnRzLlBheWxvYWRQYXJ0JCA9IGV4cG9ydHMuT3V0cHV0Rm9ybWF0JCA9IGV4cG9ydHMuT3V0cHV0Q29uZmlnJCA9IGV4cG9ydHMuTWVzc2FnZVN0b3BFdmVudCQgPSBleHBvcnRzLk1lc3NhZ2VTdGFydEV2ZW50JCA9IGV4cG9ydHMuTWVzc2FnZSQgPSBleHBvcnRzLkxpc3RBc3luY0ludm9rZXNSZXNwb25zZSQgPSBleHBvcnRzLkxpc3RBc3luY0ludm9rZXNSZXF1ZXN0JCA9IGV4cG9ydHMuSnNvblNjaGVtYURlZmluaXRpb24kID0gZXhwb3J0cy5JbnZva2VNb2RlbFdpdGhSZXNwb25zZVN0cmVhbVJlc3BvbnNlJCA9IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1SZXF1ZXN0JCA9IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbVJlc3BvbnNlJCA9IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbVJlcXVlc3QkID0gZXhwb3J0cy5JbnZva2VNb2RlbFRva2Vuc1JlcXVlc3QkID0gdm9pZCAwO1xuZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlJCA9IGV4cG9ydHMuTGlzdEFzeW5jSW52b2tlcyQgPSBleHBvcnRzLkludm9rZU1vZGVsV2l0aFJlc3BvbnNlU3RyZWFtJCA9IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbSQgPSBleHBvcnRzLkludm9rZU1vZGVsJCA9IGV4cG9ydHMuR2V0QXN5bmNJbnZva2UkID0gZXhwb3J0cy5Db3VudFRva2VucyQgPSBleHBvcnRzLkNvbnZlcnNlU3RyZWFtJCA9IGV4cG9ydHMuQ29udmVyc2UkID0gZXhwb3J0cy5BcHBseUd1YXJkcmFpbCQgPSBleHBvcnRzLlZpZGVvU291cmNlJCA9IGV4cG9ydHMuVG9vbFJlc3VsdENvbnRlbnRCbG9jayQgPSBleHBvcnRzLlRvb2xSZXN1bHRCbG9ja0RlbHRhJCA9IGV4cG9ydHMuVG9vbElucHV0U2NoZW1hJCA9IGV4cG9ydHMuVG9vbENob2ljZSQgPSBleHBvcnRzLlRvb2wkID0gZXhwb3J0cy5TeXN0ZW1Db250ZW50QmxvY2skID0gZXhwb3J0cy5SZXNwb25zZVN0cmVhbSQgPSBleHBvcnRzLlJlYXNvbmluZ0NvbnRlbnRCbG9ja0RlbHRhJCA9IGV4cG9ydHMuUmVhc29uaW5nQ29udGVudEJsb2NrJCA9IGV4cG9ydHMuUHJvbXB0VmFyaWFibGVWYWx1ZXMkID0gZXhwb3J0cy5PdXRwdXRGb3JtYXRTdHJ1Y3R1cmUkID0gZXhwb3J0cy5JbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtT3V0cHV0JCA9IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbUlucHV0JCA9IGV4cG9ydHMuSW1hZ2VTb3VyY2UkID0gZXhwb3J0cy5HdWFyZHJhaWxJbWFnZVNvdXJjZSQgPSBleHBvcnRzLkd1YXJkcmFpbENvbnZlcnNlSW1hZ2VTb3VyY2UkID0gZXhwb3J0cy5HdWFyZHJhaWxDb252ZXJzZUNvbnRlbnRCbG9jayQgPSBleHBvcnRzLkd1YXJkcmFpbENvbnRlbnRCbG9jayQgPSBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0ZpbmRpbmckID0gdm9pZCAwO1xuY29uc3QgX0EgPSBcIkFjY2VwdFwiO1xuY29uc3QgX0FCID0gXCJBdWRpb0Jsb2NrXCI7XG5jb25zdCBfQURFID0gXCJBY2Nlc3NEZW5pZWRFeGNlcHRpb25cIjtcbmNvbnN0IF9BRyA9IFwiQXBwbHlHdWFyZHJhaWxcIjtcbmNvbnN0IF9BR0QgPSBcIkFwcGxpZWRHdWFyZHJhaWxEZXRhaWxzXCI7XG5jb25zdCBfQUdSID0gXCJBcHBseUd1YXJkcmFpbFJlcXVlc3RcIjtcbmNvbnN0IF9BR1JwID0gXCJBcHBseUd1YXJkcmFpbFJlc3BvbnNlXCI7XG5jb25zdCBfQUlNID0gXCJBc3luY0ludm9rZU1lc3NhZ2VcIjtcbmNvbnN0IF9BSU9EQyA9IFwiQXN5bmNJbnZva2VPdXRwdXREYXRhQ29uZmlnXCI7XG5jb25zdCBfQUlTID0gXCJBc3luY0ludm9rZVN1bW1hcnlcIjtcbmNvbnN0IF9BSVNPREMgPSBcIkFzeW5jSW52b2tlUzNPdXRwdXREYXRhQ29uZmlnXCI7XG5jb25zdCBfQUlTcyA9IFwiQXN5bmNJbnZva2VTdW1tYXJpZXNcIjtcbmNvbnN0IF9BUyA9IFwiQXVkaW9Tb3VyY2VcIjtcbmNvbnN0IF9BVEMgPSBcIkFueVRvb2xDaG9pY2VcIjtcbmNvbnN0IF9BVEN1ID0gXCJBdXRvVG9vbENob2ljZVwiO1xuY29uc3QgX0IgPSBcIkJvZHlcIjtcbmNvbnN0IF9CSVBQID0gXCJCaWRpcmVjdGlvbmFsSW5wdXRQYXlsb2FkUGFydFwiO1xuY29uc3QgX0JPUFAgPSBcIkJpZGlyZWN0aW9uYWxPdXRwdXRQYXlsb2FkUGFydFwiO1xuY29uc3QgX0MgPSBcIkNpdGF0aW9uXCI7XG5jb25zdCBfQ0IgPSBcIkNvbnRlbnRCbG9ja3NcIjtcbmNvbnN0IF9DQkQgPSBcIkNvbnRlbnRCbG9ja0RlbHRhXCI7XG5jb25zdCBfQ0JERSA9IFwiQ29udGVudEJsb2NrRGVsdGFFdmVudFwiO1xuY29uc3QgX0NCUyA9IFwiQ29udGVudEJsb2NrU3RhcnRcIjtcbmNvbnN0IF9DQlNFID0gXCJDb250ZW50QmxvY2tTdGFydEV2ZW50XCI7XG5jb25zdCBfQ0JTRW8gPSBcIkNvbnRlbnRCbG9ja1N0b3BFdmVudFwiO1xuY29uc3QgX0NCbyA9IFwiQ29udGVudEJsb2NrXCI7XG5jb25zdCBfQ0MgPSBcIkNpdGF0aW9uc0NvbmZpZ1wiO1xuY29uc3QgX0NDQiA9IFwiQ2l0YXRpb25zQ29udGVudEJsb2NrXCI7XG5jb25zdCBfQ0QgPSBcIkNhY2hlRGV0YWlsXCI7XG5jb25zdCBfQ0RMID0gXCJDYWNoZURldGFpbHNMaXN0XCI7XG5jb25zdCBfQ0RpID0gXCJDaXRhdGlvbnNEZWx0YVwiO1xuY29uc3QgX0NFID0gXCJDb25mbGljdEV4Y2VwdGlvblwiO1xuY29uc3QgX0NHQyA9IFwiQ2l0YXRpb25HZW5lcmF0ZWRDb250ZW50XCI7XG5jb25zdCBfQ0dDTCA9IFwiQ2l0YXRpb25HZW5lcmF0ZWRDb250ZW50TGlzdFwiO1xuY29uc3QgX0NMID0gXCJDaXRhdGlvbkxvY2F0aW9uXCI7XG5jb25zdCBfQ00gPSBcIkNvbnZlcnNlTWV0cmljc1wiO1xuY29uc3QgX0NPID0gXCJDb252ZXJzZU91dHB1dFwiO1xuY29uc3QgX0NQQiA9IFwiQ2FjaGVQb2ludEJsb2NrXCI7XG5jb25zdCBfQ1IgPSBcIkNvbnZlcnNlUmVxdWVzdFwiO1xuY29uc3QgX0NSbyA9IFwiQ29udmVyc2VSZXNwb25zZVwiO1xuY29uc3QgX0NTID0gXCJDb252ZXJzZVN0cmVhbVwiO1xuY29uc3QgX0NTQyA9IFwiQ2l0YXRpb25Tb3VyY2VDb250ZW50XCI7XG5jb25zdCBfQ1NDRCA9IFwiQ2l0YXRpb25Tb3VyY2VDb250ZW50RGVsdGFcIjtcbmNvbnN0IF9DU0NMID0gXCJDaXRhdGlvblNvdXJjZUNvbnRlbnRMaXN0XCI7XG5jb25zdCBfQ1NDTEQgPSBcIkNpdGF0aW9uU291cmNlQ29udGVudExpc3REZWx0YVwiO1xuY29uc3QgX0NTTSA9IFwiQ29udmVyc2VTdHJlYW1NZXRyaWNzXCI7XG5jb25zdCBfQ1NNRSA9IFwiQ29udmVyc2VTdHJlYW1NZXRhZGF0YUV2ZW50XCI7XG5jb25zdCBfQ1NPID0gXCJDb252ZXJzZVN0cmVhbU91dHB1dFwiO1xuY29uc3QgX0NTUiA9IFwiQ29udmVyc2VTdHJlYW1SZXF1ZXN0XCI7XG5jb25zdCBfQ1NSbyA9IFwiQ29udmVyc2VTdHJlYW1SZXNwb25zZVwiO1xuY29uc3QgX0NTVCA9IFwiQ29udmVyc2VTdHJlYW1UcmFjZVwiO1xuY29uc3QgX0NUID0gXCJDb252ZXJzZVRyYWNlXCI7XG5jb25zdCBfQ1RJID0gXCJDb3VudFRva2Vuc0lucHV0XCI7XG5jb25zdCBfQ1RSID0gXCJDb252ZXJzZVRva2Vuc1JlcXVlc3RcIjtcbmNvbnN0IF9DVFJvID0gXCJDb3VudFRva2Vuc1JlcXVlc3RcIjtcbmNvbnN0IF9DVFJvdSA9IFwiQ291bnRUb2tlbnNSZXNwb25zZVwiO1xuY29uc3QgX0NUXyA9IFwiQ29udGVudC1UeXBlXCI7XG5jb25zdCBfQ1RvID0gXCJDb3VudFRva2Vuc1wiO1xuY29uc3QgX0NpID0gXCJDaXRhdGlvbnNcIjtcbmNvbnN0IF9DbyA9IFwiQ29udmVyc2VcIjtcbmNvbnN0IF9EQiA9IFwiRG9jdW1lbnRCbG9ja1wiO1xuY29uc3QgX0RDQiA9IFwiRG9jdW1lbnRDb250ZW50QmxvY2tzXCI7XG5jb25zdCBfRENCbyA9IFwiRG9jdW1lbnRDb250ZW50QmxvY2tcIjtcbmNvbnN0IF9EQ0wgPSBcIkRvY3VtZW50Q2hhckxvY2F0aW9uXCI7XG5jb25zdCBfRENMbyA9IFwiRG9jdW1lbnRDaHVua0xvY2F0aW9uXCI7XG5jb25zdCBfRFBMID0gXCJEb2N1bWVudFBhZ2VMb2NhdGlvblwiO1xuY29uc3QgX0RTID0gXCJEb2N1bWVudFNvdXJjZVwiO1xuY29uc3QgX0VCID0gXCJFcnJvckJsb2NrXCI7XG5jb25zdCBfR0EgPSBcIkd1YXJkcmFpbEFzc2Vzc21lbnRcIjtcbmNvbnN0IF9HQUkgPSBcIkdldEFzeW5jSW52b2tlXCI7XG5jb25zdCBfR0FJUiA9IFwiR2V0QXN5bmNJbnZva2VSZXF1ZXN0XCI7XG5jb25zdCBfR0FJUmUgPSBcIkdldEFzeW5jSW52b2tlUmVzcG9uc2VcIjtcbmNvbnN0IF9HQUwgPSBcIkd1YXJkcmFpbEFzc2Vzc21lbnRMaXN0XCI7XG5jb25zdCBfR0FMTSA9IFwiR3VhcmRyYWlsQXNzZXNzbWVudExpc3RNYXBcIjtcbmNvbnN0IF9HQU0gPSBcIkd1YXJkcmFpbEFzc2Vzc21lbnRNYXBcIjtcbmNvbnN0IF9HQVJEU0wgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0RpZmZlcmVuY2VTY2VuYXJpb0xpc3RcIjtcbmNvbnN0IF9HQVJGID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdGaW5kaW5nXCI7XG5jb25zdCBfR0FSRkwgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0ZpbmRpbmdMaXN0XCI7XG5jb25zdCBfR0FSSUYgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0ltcG9zc2libGVGaW5kaW5nXCI7XG5jb25zdCBfR0FSSUZ1ID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdJbnZhbGlkRmluZGluZ1wiO1xuY29uc3QgX0dBUklUUiA9IFwiR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW5wdXRUZXh0UmVmZXJlbmNlXCI7XG5jb25zdCBfR0FSSVRSTCA9IFwiR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW5wdXRUZXh0UmVmZXJlbmNlTGlzdFwiO1xuY29uc3QgX0dBUkxXID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdMb2dpY1dhcm5pbmdcIjtcbmNvbnN0IF9HQVJOVEYgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ05vVHJhbnNsYXRpb25zRmluZGluZ1wiO1xuY29uc3QgX0dBUlBBID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdQb2xpY3lBc3Nlc3NtZW50XCI7XG5jb25zdCBfR0FSUiA9IFwiR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nUnVsZVwiO1xuY29uc3QgX0dBUlJMID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdSdWxlTGlzdFwiO1xuY29uc3QgX0dBUlMgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NjZW5hcmlvXCI7XG5jb25zdCBfR0FSU0YgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NhdGlzZmlhYmxlRmluZGluZ1wiO1xuY29uc3QgX0dBUlNMID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnRMaXN0XCI7XG5jb25zdCBfR0FSU0xDID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnRMb2dpY0NvbnRlbnRcIjtcbmNvbnN0IF9HQVJTTkxDID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnROYXR1cmFsTGFuZ3VhZ2VDb250ZW50XCI7XG5jb25zdCBfR0FSU3UgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudFwiO1xuY29uc3QgX0dBUlQgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uXCI7XG5jb25zdCBfR0FSVEFGID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbkFtYmlndW91c0ZpbmRpbmdcIjtcbmNvbnN0IF9HQVJUQ0YgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1Rvb0NvbXBsZXhGaW5kaW5nXCI7XG5jb25zdCBfR0FSVEwgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uTGlzdFwiO1xuY29uc3QgX0dBUlRPID0gXCJHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbk9wdGlvblwiO1xuY29uc3QgX0dBUlRPTCA9IFwiR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVHJhbnNsYXRpb25PcHRpb25MaXN0XCI7XG5jb25zdCBfR0FSVkYgPSBcIkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1ZhbGlkRmluZGluZ1wiO1xuY29uc3QgX0dDID0gXCJHdWFyZHJhaWxDb25maWd1cmF0aW9uXCI7XG5jb25zdCBfR0NCID0gXCJHdWFyZHJhaWxDb250ZW50QmxvY2tcIjtcbmNvbnN0IF9HQ0JMID0gXCJHdWFyZHJhaWxDb250ZW50QmxvY2tMaXN0XCI7XG5jb25zdCBfR0NDQiA9IFwiR3VhcmRyYWlsQ29udmVyc2VDb250ZW50QmxvY2tcIjtcbmNvbnN0IF9HQ0YgPSBcIkd1YXJkcmFpbENvbnRlbnRGaWx0ZXJcIjtcbmNvbnN0IF9HQ0ZMID0gXCJHdWFyZHJhaWxDb250ZW50RmlsdGVyTGlzdFwiO1xuY29uc3QgX0dDR0YgPSBcIkd1YXJkcmFpbENvbnRleHR1YWxHcm91bmRpbmdGaWx0ZXJcIjtcbmNvbnN0IF9HQ0dGdSA9IFwiR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ0ZpbHRlcnNcIjtcbmNvbnN0IF9HQ0dQQSA9IFwiR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ1BvbGljeUFzc2Vzc21lbnRcIjtcbmNvbnN0IF9HQ0lCID0gXCJHdWFyZHJhaWxDb252ZXJzZUltYWdlQmxvY2tcIjtcbmNvbnN0IF9HQ0lTID0gXCJHdWFyZHJhaWxDb252ZXJzZUltYWdlU291cmNlXCI7XG5jb25zdCBfR0NQQSA9IFwiR3VhcmRyYWlsQ29udGVudFBvbGljeUFzc2Vzc21lbnRcIjtcbmNvbnN0IF9HQ1RCID0gXCJHdWFyZHJhaWxDb252ZXJzZVRleHRCbG9ja1wiO1xuY29uc3QgX0dDVyA9IFwiR3VhcmRyYWlsQ3VzdG9tV29yZFwiO1xuY29uc3QgX0dDV0wgPSBcIkd1YXJkcmFpbEN1c3RvbVdvcmRMaXN0XCI7XG5jb25zdCBfR0N1ID0gXCJHdWFyZHJhaWxDb3ZlcmFnZVwiO1xuY29uc3QgX0dJQiA9IFwiR3VhcmRyYWlsSW1hZ2VCbG9ja1wiO1xuY29uc3QgX0dJQyA9IFwiR3VhcmRyYWlsSW1hZ2VDb3ZlcmFnZVwiO1xuY29uc3QgX0dJTSA9IFwiR3VhcmRyYWlsSW52b2NhdGlvbk1ldHJpY3NcIjtcbmNvbnN0IF9HSVMgPSBcIkd1YXJkcmFpbEltYWdlU291cmNlXCI7XG5jb25zdCBfR01XID0gXCJHdWFyZHJhaWxNYW5hZ2VkV29yZFwiO1xuY29uc3QgX0dNV0wgPSBcIkd1YXJkcmFpbE1hbmFnZWRXb3JkTGlzdFwiO1xuY29uc3QgX0dPQyA9IFwiR3VhcmRyYWlsT3V0cHV0Q29udGVudFwiO1xuY29uc3QgX0dPQ0wgPSBcIkd1YXJkcmFpbE91dHB1dENvbnRlbnRMaXN0XCI7XG5jb25zdCBfR1BFRiA9IFwiR3VhcmRyYWlsUGlpRW50aXR5RmlsdGVyXCI7XG5jb25zdCBfR1BFRkwgPSBcIkd1YXJkcmFpbFBpaUVudGl0eUZpbHRlckxpc3RcIjtcbmNvbnN0IF9HUkYgPSBcIkd1YXJkcmFpbFJlZ2V4RmlsdGVyXCI7XG5jb25zdCBfR1JGTCA9IFwiR3VhcmRyYWlsUmVnZXhGaWx0ZXJMaXN0XCI7XG5jb25zdCBfR1NDID0gXCJHdWFyZHJhaWxTdHJlYW1Db25maWd1cmF0aW9uXCI7XG5jb25zdCBfR1NJUEEgPSBcIkd1YXJkcmFpbFNlbnNpdGl2ZUluZm9ybWF0aW9uUG9saWN5QXNzZXNzbWVudFwiO1xuY29uc3QgX0dUID0gXCJHdWFyZHJhaWxUb3BpY1wiO1xuY29uc3QgX0dUQSA9IFwiR3VhcmRyYWlsVHJhY2VBc3Nlc3NtZW50XCI7XG5jb25zdCBfR1RCID0gXCJHdWFyZHJhaWxUZXh0QmxvY2tcIjtcbmNvbnN0IF9HVENDID0gXCJHdWFyZHJhaWxUZXh0Q2hhcmFjdGVyc0NvdmVyYWdlXCI7XG5jb25zdCBfR1RMID0gXCJHdWFyZHJhaWxUb3BpY0xpc3RcIjtcbmNvbnN0IF9HVFBBID0gXCJHdWFyZHJhaWxUb3BpY1BvbGljeUFzc2Vzc21lbnRcIjtcbmNvbnN0IF9HVSA9IFwiR3VhcmRyYWlsVXNhZ2VcIjtcbmNvbnN0IF9HV1BBID0gXCJHdWFyZHJhaWxXb3JkUG9saWN5QXNzZXNzbWVudFwiO1xuY29uc3QgX0lCID0gXCJJbWFnZUJsb2NrXCI7XG5jb25zdCBfSUJEID0gXCJJbWFnZUJsb2NrRGVsdGFcIjtcbmNvbnN0IF9JQlMgPSBcIkltYWdlQmxvY2tTdGFydFwiO1xuY29uc3QgX0lDID0gXCJJbmZlcmVuY2VDb25maWd1cmF0aW9uXCI7XG5jb25zdCBfSU0gPSBcIkludm9rZU1vZGVsXCI7XG5jb25zdCBfSU1SID0gXCJJbnZva2VNb2RlbFJlcXVlc3RcIjtcbmNvbnN0IF9JTVJuID0gXCJJbnZva2VNb2RlbFJlc3BvbnNlXCI7XG5jb25zdCBfSU1UUiA9IFwiSW52b2tlTW9kZWxUb2tlbnNSZXF1ZXN0XCI7XG5jb25zdCBfSU1XQlMgPSBcIkludm9rZU1vZGVsV2l0aEJpZGlyZWN0aW9uYWxTdHJlYW1cIjtcbmNvbnN0IF9JTVdCU0kgPSBcIkludm9rZU1vZGVsV2l0aEJpZGlyZWN0aW9uYWxTdHJlYW1JbnB1dFwiO1xuY29uc3QgX0lNV0JTTyA9IFwiSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbU91dHB1dFwiO1xuY29uc3QgX0lNV0JTUiA9IFwiSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbVJlcXVlc3RcIjtcbmNvbnN0IF9JTVdCU1JuID0gXCJJbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtUmVzcG9uc2VcIjtcbmNvbnN0IF9JTVdSUyA9IFwiSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1cIjtcbmNvbnN0IF9JTVdSU1IgPSBcIkludm9rZU1vZGVsV2l0aFJlc3BvbnNlU3RyZWFtUmVxdWVzdFwiO1xuY29uc3QgX0lNV1JTUm4gPSBcIkludm9rZU1vZGVsV2l0aFJlc3BvbnNlU3RyZWFtUmVzcG9uc2VcIjtcbmNvbnN0IF9JUyA9IFwiSW1hZ2VTb3VyY2VcIjtcbmNvbnN0IF9JU0UgPSBcIkludGVybmFsU2VydmVyRXhjZXB0aW9uXCI7XG5jb25zdCBfSlNEID0gXCJKc29uU2NoZW1hRGVmaW5pdGlvblwiO1xuY29uc3QgX0xBSSA9IFwiTGlzdEFzeW5jSW52b2tlc1wiO1xuY29uc3QgX0xBSVIgPSBcIkxpc3RBc3luY0ludm9rZXNSZXF1ZXN0XCI7XG5jb25zdCBfTEFJUmkgPSBcIkxpc3RBc3luY0ludm9rZXNSZXNwb25zZVwiO1xuY29uc3QgX00gPSBcIk1lc3NhZ2VcIjtcbmNvbnN0IF9NRUUgPSBcIk1vZGVsRXJyb3JFeGNlcHRpb25cIjtcbmNvbnN0IF9NSVAgPSBcIk1vZGVsSW5wdXRQYXlsb2FkXCI7XG5jb25zdCBfTU5SRSA9IFwiTW9kZWxOb3RSZWFkeUV4Y2VwdGlvblwiO1xuY29uc3QgX01TRSA9IFwiTWVzc2FnZVN0YXJ0RXZlbnRcIjtcbmNvbnN0IF9NU0VFID0gXCJNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uXCI7XG5jb25zdCBfTVNFZSA9IFwiTWVzc2FnZVN0b3BFdmVudFwiO1xuY29uc3QgX01URSA9IFwiTW9kZWxUaW1lb3V0RXhjZXB0aW9uXCI7XG5jb25zdCBfTWUgPSBcIk1lc3NhZ2VzXCI7XG5jb25zdCBfT0MgPSBcIk91dHB1dENvbmZpZ1wiO1xuY29uc3QgX09GID0gXCJPdXRwdXRGb3JtYXRcIjtcbmNvbnN0IF9PRlMgPSBcIk91dHB1dEZvcm1hdFN0cnVjdHVyZVwiO1xuY29uc3QgX1BCID0gXCJQYXJ0Qm9keVwiO1xuY29uc3QgX1BDID0gXCJQZXJmb3JtYW5jZUNvbmZpZ3VyYXRpb25cIjtcbmNvbnN0IF9QUCA9IFwiUGF5bG9hZFBhcnRcIjtcbmNvbnN0IF9QUlQgPSBcIlByb21wdFJvdXRlclRyYWNlXCI7XG5jb25zdCBfUFZNID0gXCJQcm9tcHRWYXJpYWJsZU1hcFwiO1xuY29uc3QgX1BWViA9IFwiUHJvbXB0VmFyaWFibGVWYWx1ZXNcIjtcbmNvbnN0IF9SQ0IgPSBcIlJlYXNvbmluZ0NvbnRlbnRCbG9ja1wiO1xuY29uc3QgX1JDQkQgPSBcIlJlYXNvbmluZ0NvbnRlbnRCbG9ja0RlbHRhXCI7XG5jb25zdCBfUk0gPSBcIlJlcXVlc3RNZXRhZGF0YVwiO1xuY29uc3QgX1JORkUgPSBcIlJlc291cmNlTm90Rm91bmRFeGNlcHRpb25cIjtcbmNvbnN0IF9SUyA9IFwiUmVzcG9uc2VTdHJlYW1cIjtcbmNvbnN0IF9SVEIgPSBcIlJlYXNvbmluZ1RleHRCbG9ja1wiO1xuY29uc3QgX1NBSSA9IFwiU3RhcnRBc3luY0ludm9rZVwiO1xuY29uc3QgX1NBSVIgPSBcIlN0YXJ0QXN5bmNJbnZva2VSZXF1ZXN0XCI7XG5jb25zdCBfU0FJUnQgPSBcIlN0YXJ0QXN5bmNJbnZva2VSZXNwb25zZVwiO1xuY29uc3QgX1NDQiA9IFwiU3lzdGVtQ29udGVudEJsb2Nrc1wiO1xuY29uc3QgX1NDQnkgPSBcIlN5c3RlbUNvbnRlbnRCbG9ja1wiO1xuY29uc3QgX1NMID0gXCJTM0xvY2F0aW9uXCI7XG5jb25zdCBfU1FFRSA9IFwiU2VydmljZVF1b3RhRXhjZWVkZWRFeGNlcHRpb25cIjtcbmNvbnN0IF9TUkIgPSBcIlNlYXJjaFJlc3VsdEJsb2NrXCI7XG5jb25zdCBfU1JDQiA9IFwiU2VhcmNoUmVzdWx0Q29udGVudEJsb2NrXCI7XG5jb25zdCBfU1JDQmUgPSBcIlNlYXJjaFJlc3VsdENvbnRlbnRCbG9ja3NcIjtcbmNvbnN0IF9TUkwgPSBcIlNlYXJjaFJlc3VsdExvY2F0aW9uXCI7XG5jb25zdCBfU1QgPSBcIlNlcnZpY2VUaWVyXCI7XG5jb25zdCBfU1RDID0gXCJTcGVjaWZpY1Rvb2xDaG9pY2VcIjtcbmNvbnN0IF9TVHkgPSBcIlN5c3RlbVRvb2xcIjtcbmNvbnN0IF9TVUUgPSBcIlNlcnZpY2VVbmF2YWlsYWJsZUV4Y2VwdGlvblwiO1xuY29uc3QgX1QgPSBcIlRhZ1wiO1xuY29uc3QgX1RDID0gXCJUb29sQ29uZmlndXJhdGlvblwiO1xuY29uc3QgX1RDbyA9IFwiVG9vbENob2ljZVwiO1xuY29uc3QgX1RFID0gXCJUaHJvdHRsaW5nRXhjZXB0aW9uXCI7XG5jb25zdCBfVElTID0gXCJUb29sSW5wdXRTY2hlbWFcIjtcbmNvbnN0IF9UTCA9IFwiVGFnTGlzdFwiO1xuY29uc3QgX1RSQiA9IFwiVG9vbFJlc3VsdEJsb2NrXCI7XG5jb25zdCBfVFJCRCA9IFwiVG9vbFJlc3VsdEJsb2Nrc0RlbHRhXCI7XG5jb25zdCBfVFJCRG8gPSBcIlRvb2xSZXN1bHRCbG9ja0RlbHRhXCI7XG5jb25zdCBfVFJCUyA9IFwiVG9vbFJlc3VsdEJsb2NrU3RhcnRcIjtcbmNvbnN0IF9UUkNCID0gXCJUb29sUmVzdWx0Q29udGVudEJsb2Nrc1wiO1xuY29uc3QgX1RSQ0JvID0gXCJUb29sUmVzdWx0Q29udGVudEJsb2NrXCI7XG5jb25zdCBfVFMgPSBcIlRvb2xTcGVjaWZpY2F0aW9uXCI7XG5jb25zdCBfVFUgPSBcIlRva2VuVXNhZ2VcIjtcbmNvbnN0IF9UVUIgPSBcIlRvb2xVc2VCbG9ja1wiO1xuY29uc3QgX1RVQkQgPSBcIlRvb2xVc2VCbG9ja0RlbHRhXCI7XG5jb25zdCBfVFVCUyA9IFwiVG9vbFVzZUJsb2NrU3RhcnRcIjtcbmNvbnN0IF9UbyA9IFwiVG9vbHNcIjtcbmNvbnN0IF9Ub28gPSBcIlRvb2xcIjtcbmNvbnN0IF9WQiA9IFwiVmlkZW9CbG9ja1wiO1xuY29uc3QgX1ZFID0gXCJWYWxpZGF0aW9uRXhjZXB0aW9uXCI7XG5jb25zdCBfVlMgPSBcIlZpZGVvU291cmNlXCI7XG5jb25zdCBfV0wgPSBcIldlYkxvY2F0aW9uXCI7XG5jb25zdCBfWEFCQSA9IFwiWC1BbXpuLUJlZHJvY2stQWNjZXB0XCI7XG5jb25zdCBfWEFCQ1QgPSBcIlgtQW16bi1CZWRyb2NrLUNvbnRlbnQtVHlwZVwiO1xuY29uc3QgX1hBQkcgPSBcIlgtQW16bi1CZWRyb2NrLUd1YXJkcmFpbElkZW50aWZpZXJcIjtcbmNvbnN0IF9YQUJHXyA9IFwiWC1BbXpuLUJlZHJvY2stR3VhcmRyYWlsVmVyc2lvblwiO1xuY29uc3QgX1hBQlBMID0gXCJYLUFtem4tQmVkcm9jay1QZXJmb3JtYW5jZUNvbmZpZy1MYXRlbmN5XCI7XG5jb25zdCBfWEFCU1QgPSBcIlgtQW16bi1CZWRyb2NrLVNlcnZpY2UtVGllclwiO1xuY29uc3QgX1hBQlQgPSBcIlgtQW16bi1CZWRyb2NrLVRyYWNlXCI7XG5jb25zdCBfYSA9IFwiYWN0aW9uXCI7XG5jb25zdCBfYUdEID0gXCJhcHBsaWVkR3VhcmRyYWlsRGV0YWlsc1wiO1xuY29uc3QgX2FJUyA9IFwiYXN5bmNJbnZva2VTdW1tYXJpZXNcIjtcbmNvbnN0IF9hTVJGID0gXCJhZGRpdGlvbmFsTW9kZWxSZXF1ZXN0RmllbGRzXCI7XG5jb25zdCBfYU1SRlAgPSBcImFkZGl0aW9uYWxNb2RlbFJlc3BvbnNlRmllbGRQYXRoc1wiO1xuY29uc3QgX2FNUkZkID0gXCJhZGRpdGlvbmFsTW9kZWxSZXNwb25zZUZpZWxkc1wiO1xuY29uc3QgX2FSID0gXCJhY3Rpb25SZWFzb25cIjtcbmNvbnN0IF9hUlAgPSBcImF1dG9tYXRlZFJlYXNvbmluZ1BvbGljeVwiO1xuY29uc3QgX2FSUFUgPSBcImF1dG9tYXRlZFJlYXNvbmluZ1BvbGljeVVuaXRzXCI7XG5jb25zdCBfYVJQdSA9IFwiYXV0b21hdGVkUmVhc29uaW5nUG9saWNpZXNcIjtcbmNvbnN0IF9hYyA9IFwiYWNjZXB0XCI7XG5jb25zdCBfYW4gPSBcImFueVwiO1xuY29uc3QgX2FzID0gXCJhc3Nlc3NtZW50c1wiO1xuY29uc3QgX2F1ID0gXCJhdWRpb1wiO1xuY29uc3QgX2F1dCA9IFwiYXV0b1wiO1xuY29uc3QgX2IgPSBcImJ5dGVzXCI7XG5jb25zdCBfYk8gPSBcImJ1Y2tldE93bmVyXCI7XG5jb25zdCBfYm8gPSBcImJvZHlcIjtcbmNvbnN0IF9jID0gXCJjbGllbnRcIjtcbmNvbnN0IF9jQkQgPSBcImNvbnRlbnRCbG9ja0RlbHRhXCI7XG5jb25zdCBfY0JJID0gXCJjb250ZW50QmxvY2tJbmRleFwiO1xuY29uc3QgX2NCUyA9IFwiY29udGVudEJsb2NrU3RhcnRcIjtcbmNvbnN0IF9jQlNvID0gXCJjb250ZW50QmxvY2tTdG9wXCI7XG5jb25zdCBfY0MgPSBcImNpdGF0aW9uc0NvbnRlbnRcIjtcbmNvbnN0IF9jRCA9IFwiY2FjaGVEZXRhaWxzXCI7XG5jb25zdCBfY0ZTID0gXCJjbGFpbXNGYWxzZVNjZW5hcmlvXCI7XG5jb25zdCBfY0dQID0gXCJjb250ZXh0dWFsR3JvdW5kaW5nUG9saWN5XCI7XG5jb25zdCBfY0dQVSA9IFwiY29udGV4dHVhbEdyb3VuZGluZ1BvbGljeVVuaXRzXCI7XG5jb25zdCBfY1AgPSBcImNvbnRlbnRQb2xpY3lcIjtcbmNvbnN0IF9jUElVID0gXCJjb250ZW50UG9saWN5SW1hZ2VVbml0c1wiO1xuY29uc3QgX2NQVSA9IFwiY29udGVudFBvbGljeVVuaXRzXCI7XG5jb25zdCBfY1BhID0gXCJjYWNoZVBvaW50XCI7XG5jb25zdCBfY1IgPSBcImNvbnRyYWRpY3RpbmdSdWxlc1wiO1xuY29uc3QgX2NSSVQgPSBcImNhY2hlUmVhZElucHV0VG9rZW5zXCI7XG5jb25zdCBfY1JUID0gXCJjbGllbnRSZXF1ZXN0VG9rZW5cIjtcbmNvbnN0IF9jVCA9IFwiY29udGVudFR5cGVcIjtcbmNvbnN0IF9jVFMgPSBcImNsYWltc1RydWVTY2VuYXJpb1wiO1xuY29uc3QgX2NXID0gXCJjdXN0b21Xb3Jkc1wiO1xuY29uc3QgX2NXSVQgPSBcImNhY2hlV3JpdGVJbnB1dFRva2Vuc1wiO1xuY29uc3QgX2NoID0gXCJjaHVua1wiO1xuY29uc3QgX2NpID0gXCJjaXRhdGlvbnNcIjtcbmNvbnN0IF9jaXQgPSBcImNpdGF0aW9uXCI7XG5jb25zdCBfY2wgPSBcImNsYWltc1wiO1xuY29uc3QgX2NvID0gXCJjb250ZW50XCI7XG5jb25zdCBfY29uID0gXCJjb250ZXh0XCI7XG5jb25zdCBfY29uZiA9IFwiY29uZmlkZW5jZVwiO1xuY29uc3QgX2NvbnYgPSBcImNvbnZlcnNlXCI7XG5jb25zdCBfZCA9IFwiZGVsdGFcIjtcbmNvbnN0IF9kQyA9IFwiZG9jdW1lbnRDaGFyXCI7XG5jb25zdCBfZENvID0gXCJkb2N1bWVudENodW5rXCI7XG5jb25zdCBfZEkgPSBcImRvY3VtZW50SW5kZXhcIjtcbmNvbnN0IF9kUCA9IFwiZG9jdW1lbnRQYWdlXCI7XG5jb25zdCBfZFMgPSBcImRpZmZlcmVuY2VTY2VuYXJpb3NcIjtcbmNvbnN0IF9kZSA9IFwiZGV0ZWN0ZWRcIjtcbmNvbnN0IF9kZXMgPSBcImRlc2NyaXB0aW9uXCI7XG5jb25zdCBfZG8gPSBcImRvbWFpblwiO1xuY29uc3QgX2RvYyA9IFwiZG9jdW1lbnRcIjtcbmNvbnN0IF9lID0gXCJlcnJvclwiO1xuY29uc3QgX2VUID0gXCJlbmRUaW1lXCI7XG5jb25zdCBfZW4gPSBcImVuYWJsZWRcIjtcbmNvbnN0IF9lbmQgPSBcImVuZFwiO1xuY29uc3QgX2YgPSBcImZvcm1hdFwiO1xuY29uc3QgX2ZNID0gXCJmYWlsdXJlTWVzc2FnZVwiO1xuY29uc3QgX2ZTID0gXCJmaWx0ZXJTdHJlbmd0aFwiO1xuY29uc3QgX2ZpID0gXCJmaW5kaW5nc1wiO1xuY29uc3QgX2ZpbCA9IFwiZmlsdGVyc1wiO1xuY29uc3QgX2cgPSBcImd1YXJkcmFpbFwiO1xuY29uc3QgX2dBID0gXCJndWFyZHJhaWxBcm5cIjtcbmNvbnN0IF9nQyA9IFwiZ3VhcmRyYWlsQ292ZXJhZ2VcIjtcbmNvbnN0IF9nQ3UgPSBcImd1YXJkcmFpbENvbmZpZ1wiO1xuY29uc3QgX2dDdWEgPSBcImd1YXJkQ29udGVudFwiO1xuY29uc3QgX2dJID0gXCJndWFyZHJhaWxJZFwiO1xuY29uc3QgX2dJdSA9IFwiZ3VhcmRyYWlsSWRlbnRpZmllclwiO1xuY29uc3QgX2dPID0gXCJndWFyZHJhaWxPcmlnaW5cIjtcbmNvbnN0IF9nT3UgPSBcImd1YXJkcmFpbE93bmVyc2hpcFwiO1xuY29uc3QgX2dQTCA9IFwiZ3VhcmRyYWlsUHJvY2Vzc2luZ0xhdGVuY3lcIjtcbmNvbnN0IF9nViA9IFwiZ3VhcmRyYWlsVmVyc2lvblwiO1xuY29uc3QgX2d1ID0gXCJndWFyZGVkXCI7XG5jb25zdCBfaCA9IFwiaHR0cFwiO1xuY29uc3QgX2hFID0gXCJodHRwRXJyb3JcIjtcbmNvbnN0IF9oSCA9IFwiaHR0cEhlYWRlclwiO1xuY29uc3QgX2hRID0gXCJodHRwUXVlcnlcIjtcbmNvbnN0IF9pID0gXCJpbnB1dFwiO1xuY29uc3QgX2lBID0gXCJpbnZvY2F0aW9uQXJuXCI7XG5jb25zdCBfaUFuID0gXCJpbnB1dEFzc2Vzc21lbnRcIjtcbmNvbnN0IF9pQyA9IFwiaW5mZXJlbmNlQ29uZmlnXCI7XG5jb25zdCBfaU0gPSBcImludm9jYXRpb25NZXRyaWNzXCI7XG5jb25zdCBfaU1JID0gXCJpbnZva2VkTW9kZWxJZFwiO1xuY29uc3QgX2lNbiA9IFwiaW52b2tlTW9kZWxcIjtcbmNvbnN0IF9pUyA9IFwiaW5wdXRTY2hlbWFcIjtcbmNvbnN0IF9pU0UgPSBcImludGVybmFsU2VydmVyRXhjZXB0aW9uXCI7XG5jb25zdCBfaVQgPSBcImlucHV0VG9rZW5zXCI7XG5jb25zdCBfaWQgPSBcImlkZW50aWZpZXJcIjtcbmNvbnN0IF9pbSA9IFwiaW1hZ2VzXCI7XG5jb25zdCBfaW1hID0gXCJpbWFnZVwiO1xuY29uc3QgX2ltcCA9IFwiaW1wb3NzaWJsZVwiO1xuY29uc3QgX2luID0gXCJpbnZhbGlkXCI7XG5jb25zdCBfaiA9IFwianNvblwiO1xuY29uc3QgX2pTID0gXCJqc29uU2NoZW1hXCI7XG5jb25zdCBfayA9IFwia2V5XCI7XG5jb25zdCBfa0tJID0gXCJrbXNLZXlJZFwiO1xuY29uc3QgX2wgPSBcImxvY2F0aW9uXCI7XG5jb25zdCBfbE0gPSBcImxhdGVuY3lNc1wiO1xuY29uc3QgX2xNVCA9IFwibGFzdE1vZGlmaWVkVGltZVwiO1xuY29uc3QgX2xXID0gXCJsb2dpY1dhcm5pbmdcIjtcbmNvbnN0IF9sYSA9IFwibGF0ZW5jeVwiO1xuY29uc3QgX2xvID0gXCJsb2dpY1wiO1xuY29uc3QgX20gPSBcIm1lc3NhZ2VcIjtcbmNvbnN0IF9tQSA9IFwibW9kZWxBcm5cIjtcbmNvbnN0IF9tSSA9IFwibW9kZWxJZFwiO1xuY29uc3QgX21JbyA9IFwibW9kZWxJbnB1dFwiO1xuY29uc3QgX21PID0gXCJtb2RlbE91dHB1dFwiO1xuY29uc3QgX21SID0gXCJtYXhSZXN1bHRzXCI7XG5jb25zdCBfbVMgPSBcIm1lc3NhZ2VTdGFydFwiO1xuY29uc3QgX21TRUUgPSBcIm1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb25cIjtcbmNvbnN0IF9tU2UgPSBcIm1lc3NhZ2VTdG9wXCI7XG5jb25zdCBfbVQgPSBcIm1heFRva2Vuc1wiO1xuY29uc3QgX21URSA9IFwibW9kZWxUaW1lb3V0RXhjZXB0aW9uXCI7XG5jb25zdCBfbVdMID0gXCJtYW5hZ2VkV29yZExpc3RzXCI7XG5jb25zdCBfbWEgPSBcIm1hdGNoXCI7XG5jb25zdCBfbWUgPSBcIm1lc3NhZ2VzXCI7XG5jb25zdCBfbWV0ID0gXCJtZXRyaWNzXCI7XG5jb25zdCBfbWV0YSA9IFwibWV0YWRhdGFcIjtcbmNvbnN0IF9uID0gXCJuYW1lXCI7XG5jb25zdCBfbkwgPSBcIm5hdHVyYWxMYW5ndWFnZVwiO1xuY29uc3QgX25UID0gXCJuZXh0VG9rZW5cIjtcbmNvbnN0IF9uVG8gPSBcIm5vVHJhbnNsYXRpb25zXCI7XG5jb25zdCBfbyA9IFwib3V0cHV0c1wiO1xuY29uc3QgX29BID0gXCJvdXRwdXRBc3Nlc3NtZW50c1wiO1xuY29uc3QgX29DID0gXCJvdXRwdXRDb25maWdcIjtcbmNvbnN0IF9vREMgPSBcIm91dHB1dERhdGFDb25maWdcIjtcbmNvbnN0IF9vTSA9IFwib3JpZ2luYWxNZXNzYWdlXCI7XG5jb25zdCBfb1MgPSBcIm91dHB1dFNjb3BlXCI7XG5jb25zdCBfb1NDID0gXCJvcmlnaW5hbFN0YXR1c0NvZGVcIjtcbmNvbnN0IF9vVCA9IFwib3V0cHV0VG9rZW5zXCI7XG5jb25zdCBfb3AgPSBcIm9wdGlvbnNcIjtcbmNvbnN0IF9vdSA9IFwib3V0cHV0XCI7XG5jb25zdCBfcCA9IFwicHJlbWlzZXNcIjtcbmNvbnN0IF9wQyA9IFwicGVyZm9ybWFuY2VDb25maWdcIjtcbmNvbnN0IF9wQ0wgPSBcInBlcmZvcm1hbmNlQ29uZmlnTGF0ZW5jeVwiO1xuY29uc3QgX3BFID0gXCJwaWlFbnRpdGllc1wiO1xuY29uc3QgX3BSID0gXCJwcm9tcHRSb3V0ZXJcIjtcbmNvbnN0IF9wViA9IFwicHJvbXB0VmFyaWFibGVzXCI7XG5jb25zdCBfcFZBID0gXCJwb2xpY3lWZXJzaW9uQXJuXCI7XG5jb25zdCBfcSA9IFwicXVhbGlmaWVyc1wiO1xuY29uc3QgX3IgPSBcInJlZ2V4XCI7XG5jb25zdCBfckMgPSBcInJlYXNvbmluZ0NvbnRlbnRcIjtcbmNvbnN0IF9yQ2UgPSBcInJlZGFjdGVkQ29udGVudFwiO1xuY29uc3QgX3JNID0gXCJyZXF1ZXN0TWV0YWRhdGFcIjtcbmNvbnN0IF9yTiA9IFwicmVzb3VyY2VOYW1lXCI7XG5jb25zdCBfclQgPSBcInJlYXNvbmluZ1RleHRcIjtcbmNvbnN0IF9yZSA9IFwicmVnZXhlc1wiO1xuY29uc3QgX3JvID0gXCJyb2xlXCI7XG5jb25zdCBfcyA9IFwic21pdGh5LnRzLnNkay5zeW50aGV0aWMuY29tLmFtYXpvbmF3cy5iZWRyb2NrcnVudGltZVwiO1xuY29uc3QgX3NCID0gXCJzb3J0QnlcIjtcbmNvbnN0IF9zQyA9IFwic291cmNlQ29udGVudFwiO1xuY29uc3QgX3NFID0gXCJzdGF0dXNFcXVhbHNcIjtcbmNvbnN0IF9zSVAgPSBcInNlbnNpdGl2ZUluZm9ybWF0aW9uUG9saWN5XCI7XG5jb25zdCBfc0lQRlUgPSBcInNlbnNpdGl2ZUluZm9ybWF0aW9uUG9saWN5RnJlZVVuaXRzXCI7XG5jb25zdCBfc0lQVSA9IFwic2Vuc2l0aXZlSW5mb3JtYXRpb25Qb2xpY3lVbml0c1wiO1xuY29uc3QgX3NMID0gXCJzM0xvY2F0aW9uXCI7XG5jb25zdCBfc08gPSBcInNvcnRPcmRlclwiO1xuY29uc3QgX3NPREMgPSBcInMzT3V0cHV0RGF0YUNvbmZpZ1wiO1xuY29uc3QgX3NQTSA9IFwic3RyZWFtUHJvY2Vzc2luZ01vZGVcIjtcbmNvbnN0IF9zUiA9IFwic3RvcFJlYXNvblwiO1xuY29uc3QgX3NSSSA9IFwic2VhcmNoUmVzdWx0SW5kZXhcIjtcbmNvbnN0IF9zUkwgPSBcInNlYXJjaFJlc3VsdExvY2F0aW9uXCI7XG5jb25zdCBfc1JlID0gXCJzZWFyY2hSZXN1bHRcIjtcbmNvbnN0IF9zUnUgPSBcInN1cHBvcnRpbmdSdWxlc1wiO1xuY29uc3QgX3NTID0gXCJzdG9wU2VxdWVuY2VzXCI7XG5jb25zdCBfc1QgPSBcInN1Ym1pdFRpbWVcIjtcbmNvbnN0IF9zVEEgPSBcInN1Ym1pdFRpbWVBZnRlclwiO1xuY29uc3QgX3NUQiA9IFwic3VibWl0VGltZUJlZm9yZVwiO1xuY29uc3QgX3NUZSA9IFwic2VydmljZVRpZXJcIjtcbmNvbnN0IF9zVHkgPSBcInN5c3RlbVRvb2xcIjtcbmNvbnN0IF9zVSA9IFwiczNVcmlcIjtcbmNvbnN0IF9zVUUgPSBcInNlcnZpY2VVbmF2YWlsYWJsZUV4Y2VwdGlvblwiO1xuY29uc3QgX3NhID0gXCJzYXRpc2ZpYWJsZVwiO1xuY29uc3QgX3NjID0gXCJzY29yZVwiO1xuY29uc3QgX3NjaCA9IFwic2NoZW1hXCI7XG5jb25zdCBfc2UgPSBcInNlcnZlclwiO1xuY29uc3QgX3NpID0gXCJzaWduYXR1cmVcIjtcbmNvbnN0IF9zbyA9IFwic291cmNlXCI7XG5jb25zdCBfc3QgPSBcInN0YXR1c1wiO1xuY29uc3QgX3N0YSA9IFwic3RhcnRcIjtcbmNvbnN0IF9zdGF0ID0gXCJzdGF0ZW1lbnRzXCI7XG5jb25zdCBfc3RyID0gXCJzdHJlYW1cIjtcbmNvbnN0IF9zdHJlID0gXCJzdHJlYW1pbmdcIjtcbmNvbnN0IF9zdHJpID0gXCJzdHJpY3RcIjtcbmNvbnN0IF9zdHJ1ID0gXCJzdHJ1Y3R1cmVcIjtcbmNvbnN0IF9zeSA9IFwic3lzdGVtXCI7XG5jb25zdCBfdCA9IFwidHRsXCI7XG5jb25zdCBfdEEgPSBcInRyYW5zbGF0aW9uQW1iaWd1b3VzXCI7XG5jb25zdCBfdEMgPSBcInRvb2xDb25maWdcIjtcbmNvbnN0IF90Q2UgPSBcInRleHRDaGFyYWN0ZXJzXCI7XG5jb25zdCBfdENvID0gXCJ0b29sQ2hvaWNlXCI7XG5jb25zdCBfdENvbyA9IFwidG9vQ29tcGxleFwiO1xuY29uc3QgX3RFID0gXCJ0aHJvdHRsaW5nRXhjZXB0aW9uXCI7XG5jb25zdCBfdEYgPSBcInRleHRGb3JtYXRcIjtcbmNvbnN0IF90UCA9IFwidG9waWNQb2xpY3lcIjtcbmNvbnN0IF90UFUgPSBcInRvcGljUG9saWN5VW5pdHNcIjtcbmNvbnN0IF90UG8gPSBcInRvcFBcIjtcbmNvbnN0IF90UiA9IFwidG9vbFJlc3VsdFwiO1xuY29uc3QgX3RTID0gXCJ0b29sU3BlY1wiO1xuY29uc3QgX3RUID0gXCJ0b3RhbFRva2Vuc1wiO1xuY29uc3QgX3RVID0gXCJ0b29sVXNlXCI7XG5jb25zdCBfdFVJID0gXCJ0b29sVXNlSWRcIjtcbmNvbnN0IF90YSA9IFwidGFnc1wiO1xuY29uc3QgX3RlID0gXCJ0ZXh0XCI7XG5jb25zdCBfdGVtID0gXCJ0ZW1wZXJhdHVyZVwiO1xuY29uc3QgX3RoID0gXCJ0aHJlc2hvbGRcIjtcbmNvbnN0IF90aSA9IFwidGl0bGVcIjtcbmNvbnN0IF90byA9IFwidG90YWxcIjtcbmNvbnN0IF90b28gPSBcInRvb2xzXCI7XG5jb25zdCBfdG9vbCA9IFwidG9vbFwiO1xuY29uc3QgX3RvcCA9IFwidG9waWNzXCI7XG5jb25zdCBfdHIgPSBcInRyYWNlXCI7XG5jb25zdCBfdHJhID0gXCJ0cmFuc2xhdGlvblwiO1xuY29uc3QgX3RyYW4gPSBcInRyYW5zbGF0aW9uc1wiO1xuY29uc3QgX3R5ID0gXCJ0eXBlXCI7XG5jb25zdCBfdSA9IFwidXNhZ2VcIjtcbmNvbnN0IF91QyA9IFwidW50cmFuc2xhdGVkQ2xhaW1zXCI7XG5jb25zdCBfdVAgPSBcInVudHJhbnNsYXRlZFByZW1pc2VzXCI7XG5jb25zdCBfdXIgPSBcInVyaVwiO1xuY29uc3QgX3VybCA9IFwidXJsXCI7XG5jb25zdCBfdiA9IFwidmFsdWVcIjtcbmNvbnN0IF92RSA9IFwidmFsaWRhdGlvbkV4Y2VwdGlvblwiO1xuY29uc3QgX3ZhID0gXCJ2YWxpZFwiO1xuY29uc3QgX3ZpID0gXCJ2aWRlb1wiO1xuY29uc3QgX3cgPSBcIndlYlwiO1xuY29uc3QgX3dQID0gXCJ3b3JkUG9saWN5XCI7XG5jb25zdCBfd1BVID0gXCJ3b3JkUG9saWN5VW5pdHNcIjtcbmNvbnN0IG4wID0gXCJjb20uYW1hem9uYXdzLmJlZHJvY2tydW50aW1lXCI7XG5jb25zdCBzY2hlbWFfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvcmUvc2NoZW1hXCIpO1xuY29uc3QgQmVkcm9ja1J1bnRpbWVTZXJ2aWNlRXhjZXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL0JlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvblwiKTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4uL21vZGVscy9lcnJvcnNcIik7XG5jb25zdCBfc19yZWdpc3RyeSA9IHNjaGVtYV8xLlR5cGVSZWdpc3RyeS5mb3IoX3MpO1xuZXhwb3J0cy5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24kID0gWy0zLCBfcywgXCJCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb25cIiwgMCwgW10sIFtdXTtcbl9zX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24kLCBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb25fMS5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24pO1xuY29uc3QgbjBfcmVnaXN0cnkgPSBzY2hlbWFfMS5UeXBlUmVnaXN0cnkuZm9yKG4wKTtcbmV4cG9ydHMuQWNjZXNzRGVuaWVkRXhjZXB0aW9uJCA9IFstMywgbjAsIF9BREUsXG4gICAgeyBbX2VdOiBfYywgW19oRV06IDQwMyB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLkFjY2Vzc0RlbmllZEV4Y2VwdGlvbiQsIGVycm9yc18xLkFjY2Vzc0RlbmllZEV4Y2VwdGlvbik7XG5leHBvcnRzLkNvbmZsaWN0RXhjZXB0aW9uJCA9IFstMywgbjAsIF9DRSxcbiAgICB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19tXSxcbiAgICBbMF1cbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKGV4cG9ydHMuQ29uZmxpY3RFeGNlcHRpb24kLCBlcnJvcnNfMS5Db25mbGljdEV4Y2VwdGlvbik7XG5leHBvcnRzLkludGVybmFsU2VydmVyRXhjZXB0aW9uJCA9IFstMywgbjAsIF9JU0UsXG4gICAgeyBbX2VdOiBfc2UsIFtfaEVdOiA1MDAgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5JbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiQsIGVycm9yc18xLkludGVybmFsU2VydmVyRXhjZXB0aW9uKTtcbmV4cG9ydHMuTW9kZWxFcnJvckV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfTUVFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MjQgfSxcbiAgICBbX20sIF9vU0MsIF9yTl0sXG4gICAgWzAsIDEsIDBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLk1vZGVsRXJyb3JFeGNlcHRpb24kLCBlcnJvcnNfMS5Nb2RlbEVycm9yRXhjZXB0aW9uKTtcbmV4cG9ydHMuTW9kZWxOb3RSZWFkeUV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfTU5SRSxcbiAgICB7IFtfZV06IF9jLCBbX2hFXTogNDI5IH0sXG4gICAgW19tXSxcbiAgICBbMF1cbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKGV4cG9ydHMuTW9kZWxOb3RSZWFkeUV4Y2VwdGlvbiQsIGVycm9yc18xLk1vZGVsTm90UmVhZHlFeGNlcHRpb24pO1xuZXhwb3J0cy5Nb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uJCA9IFstMywgbjAsIF9NU0VFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MjQgfSxcbiAgICBbX20sIF9vU0MsIF9vTV0sXG4gICAgWzAsIDEsIDBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLk1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24kLCBlcnJvcnNfMS5Nb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uKTtcbmV4cG9ydHMuTW9kZWxUaW1lb3V0RXhjZXB0aW9uJCA9IFstMywgbjAsIF9NVEUsXG4gICAgeyBbX2VdOiBfYywgW19oRV06IDQwOCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLk1vZGVsVGltZW91dEV4Y2VwdGlvbiQsIGVycm9yc18xLk1vZGVsVGltZW91dEV4Y2VwdGlvbik7XG5leHBvcnRzLlJlc291cmNlTm90Rm91bmRFeGNlcHRpb24kID0gWy0zLCBuMCwgX1JORkUsXG4gICAgeyBbX2VdOiBfYywgW19oRV06IDQwNCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLlJlc291cmNlTm90Rm91bmRFeGNlcHRpb24kLCBlcnJvcnNfMS5SZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uKTtcbmV4cG9ydHMuU2VydmljZVF1b3RhRXhjZWVkZWRFeGNlcHRpb24kID0gWy0zLCBuMCwgX1NRRUUsXG4gICAgeyBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLlNlcnZpY2VRdW90YUV4Y2VlZGVkRXhjZXB0aW9uJCwgZXJyb3JzXzEuU2VydmljZVF1b3RhRXhjZWVkZWRFeGNlcHRpb24pO1xuZXhwb3J0cy5TZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb24kID0gWy0zLCBuMCwgX1NVRSxcbiAgICB7IFtfZV06IF9zZSwgW19oRV06IDUwMyB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLlNlcnZpY2VVbmF2YWlsYWJsZUV4Y2VwdGlvbiQsIGVycm9yc18xLlNlcnZpY2VVbmF2YWlsYWJsZUV4Y2VwdGlvbik7XG5leHBvcnRzLlRocm90dGxpbmdFeGNlcHRpb24kID0gWy0zLCBuMCwgX1RFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MjkgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5UaHJvdHRsaW5nRXhjZXB0aW9uJCwgZXJyb3JzXzEuVGhyb3R0bGluZ0V4Y2VwdGlvbik7XG5leHBvcnRzLlZhbGlkYXRpb25FeGNlcHRpb24kID0gWy0zLCBuMCwgX1ZFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5WYWxpZGF0aW9uRXhjZXB0aW9uJCwgZXJyb3JzXzEuVmFsaWRhdGlvbkV4Y2VwdGlvbik7XG5leHBvcnRzLmVycm9yVHlwZVJlZ2lzdHJpZXMgPSBbXG4gICAgX3NfcmVnaXN0cnksXG4gICAgbjBfcmVnaXN0cnksXG5dO1xudmFyIEFzeW5jSW52b2tlTWVzc2FnZSA9IFswLCBuMCwgX0FJTSwgOCwgMF07XG52YXIgQm9keSA9IFswLCBuMCwgX0IsIDgsIDIxXTtcbnZhciBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnRMb2dpY0NvbnRlbnQgPSBbMCwgbjAsIF9HQVJTTEMsIDgsIDBdO1xudmFyIEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudE5hdHVyYWxMYW5ndWFnZUNvbnRlbnQgPSBbMCwgbjAsIF9HQVJTTkxDLCA4LCAwXTtcbnZhciBNb2RlbElucHV0UGF5bG9hZCA9IFswLCBuMCwgX01JUCwgOCwgMTVdO1xudmFyIFBhcnRCb2R5ID0gWzAsIG4wLCBfUEIsIDgsIDIxXTtcbmV4cG9ydHMuQW55VG9vbENob2ljZSQgPSBbMywgbjAsIF9BVEMsXG4gICAgMCxcbiAgICBbXSxcbiAgICBbXVxuXTtcbmV4cG9ydHMuQXBwbGllZEd1YXJkcmFpbERldGFpbHMkID0gWzMsIG4wLCBfQUdELFxuICAgIDAsXG4gICAgW19nSSwgX2dWLCBfZ0EsIF9nTywgX2dPdV0sXG4gICAgWzAsIDAsIDAsIDY0IHwgMCwgMF1cbl07XG5leHBvcnRzLkFwcGx5R3VhcmRyYWlsUmVxdWVzdCQgPSBbMywgbjAsIF9BR1IsXG4gICAgMCxcbiAgICBbX2dJdSwgX2dWLCBfc28sIF9jbywgX29TXSxcbiAgICBbWzAsIDFdLCBbMCwgMV0sIDAsIFsoKSA9PiBHdWFyZHJhaWxDb250ZW50QmxvY2tMaXN0LCAwXSwgMF0sIDRcbl07XG5leHBvcnRzLkFwcGx5R3VhcmRyYWlsUmVzcG9uc2UkID0gWzMsIG4wLCBfQUdScCxcbiAgICAwLFxuICAgIFtfdSwgX2EsIF9vLCBfYXMsIF9hUiwgX2dDXSxcbiAgICBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxVc2FnZSQsIDAsICgpID0+IEd1YXJkcmFpbE91dHB1dENvbnRlbnRMaXN0LCBbKCkgPT4gR3VhcmRyYWlsQXNzZXNzbWVudExpc3QsIDBdLCAwLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvdmVyYWdlJF0sIDRcbl07XG5leHBvcnRzLkFzeW5jSW52b2tlUzNPdXRwdXREYXRhQ29uZmlnJCA9IFszLCBuMCwgX0FJU09EQyxcbiAgICAwLFxuICAgIFtfc1UsIF9rS0ksIF9iT10sXG4gICAgWzAsIDAsIDBdLCAxXG5dO1xuZXhwb3J0cy5Bc3luY0ludm9rZVN1bW1hcnkkID0gWzMsIG4wLCBfQUlTLFxuICAgIDAsXG4gICAgW19pQSwgX21BLCBfc1QsIF9vREMsIF9jUlQsIF9zdCwgX2ZNLCBfbE1ULCBfZVRdLFxuICAgIFswLCAwLCA1LCAoKSA9PiBleHBvcnRzLkFzeW5jSW52b2tlT3V0cHV0RGF0YUNvbmZpZyQsIDAsIDAsIFsoKSA9PiBBc3luY0ludm9rZU1lc3NhZ2UsIDBdLCA1LCA1XSwgNFxuXTtcbmV4cG9ydHMuQXVkaW9CbG9jayQgPSBbMywgbjAsIF9BQixcbiAgICAwLFxuICAgIFtfZiwgX3NvLCBfZV0sXG4gICAgWzAsIFsoKSA9PiBleHBvcnRzLkF1ZGlvU291cmNlJCwgMF0sIFsoKSA9PiBleHBvcnRzLkVycm9yQmxvY2skLCAwXV0sIDJcbl07XG5leHBvcnRzLkF1dG9Ub29sQ2hvaWNlJCA9IFszLCBuMCwgX0FUQ3UsXG4gICAgMCxcbiAgICBbXSxcbiAgICBbXVxuXTtcbmV4cG9ydHMuQmlkaXJlY3Rpb25hbElucHV0UGF5bG9hZFBhcnQkID0gWzMsIG4wLCBfQklQUCxcbiAgICA4LFxuICAgIFtfYl0sXG4gICAgW1soKSA9PiBQYXJ0Qm9keSwgMF1dXG5dO1xuZXhwb3J0cy5CaWRpcmVjdGlvbmFsT3V0cHV0UGF5bG9hZFBhcnQkID0gWzMsIG4wLCBfQk9QUCxcbiAgICA4LFxuICAgIFtfYl0sXG4gICAgW1soKSA9PiBQYXJ0Qm9keSwgMF1dXG5dO1xuZXhwb3J0cy5DYWNoZURldGFpbCQgPSBbMywgbjAsIF9DRCxcbiAgICAwLFxuICAgIFtfdCwgX2lUXSxcbiAgICBbMCwgMV0sIDJcbl07XG5leHBvcnRzLkNhY2hlUG9pbnRCbG9jayQgPSBbMywgbjAsIF9DUEIsXG4gICAgMCxcbiAgICBbX3R5LCBfdF0sXG4gICAgWzAsIDBdLCAxXG5dO1xuZXhwb3J0cy5DaXRhdGlvbiQgPSBbMywgbjAsIF9DLFxuICAgIDAsXG4gICAgW190aSwgX3NvLCBfc0MsIF9sXSxcbiAgICBbMCwgMCwgKCkgPT4gQ2l0YXRpb25Tb3VyY2VDb250ZW50TGlzdCwgKCkgPT4gZXhwb3J0cy5DaXRhdGlvbkxvY2F0aW9uJF1cbl07XG5leHBvcnRzLkNpdGF0aW9uc0NvbmZpZyQgPSBbMywgbjAsIF9DQyxcbiAgICAwLFxuICAgIFtfZW5dLFxuICAgIFsyXSwgMVxuXTtcbmV4cG9ydHMuQ2l0YXRpb25zQ29udGVudEJsb2NrJCA9IFszLCBuMCwgX0NDQixcbiAgICAwLFxuICAgIFtfY28sIF9jaV0sXG4gICAgWygpID0+IENpdGF0aW9uR2VuZXJhdGVkQ29udGVudExpc3QsICgpID0+IENpdGF0aW9uc11cbl07XG5leHBvcnRzLkNpdGF0aW9uc0RlbHRhJCA9IFszLCBuMCwgX0NEaSxcbiAgICAwLFxuICAgIFtfdGksIF9zbywgX3NDLCBfbF0sXG4gICAgWzAsIDAsICgpID0+IENpdGF0aW9uU291cmNlQ29udGVudExpc3REZWx0YSwgKCkgPT4gZXhwb3J0cy5DaXRhdGlvbkxvY2F0aW9uJF1cbl07XG5leHBvcnRzLkNpdGF0aW9uU291cmNlQ29udGVudERlbHRhJCA9IFszLCBuMCwgX0NTQ0QsXG4gICAgMCxcbiAgICBbX3RlXSxcbiAgICBbMF1cbl07XG5leHBvcnRzLkNvbnRlbnRCbG9ja0RlbHRhRXZlbnQkID0gWzMsIG4wLCBfQ0JERSxcbiAgICAwLFxuICAgIFtfZCwgX2NCSV0sXG4gICAgW1soKSA9PiBleHBvcnRzLkNvbnRlbnRCbG9ja0RlbHRhJCwgMF0sIDFdLCAyXG5dO1xuZXhwb3J0cy5Db250ZW50QmxvY2tTdGFydEV2ZW50JCA9IFszLCBuMCwgX0NCU0UsXG4gICAgMCxcbiAgICBbX3N0YSwgX2NCSV0sXG4gICAgWygpID0+IGV4cG9ydHMuQ29udGVudEJsb2NrU3RhcnQkLCAxXSwgMlxuXTtcbmV4cG9ydHMuQ29udGVudEJsb2NrU3RvcEV2ZW50JCA9IFszLCBuMCwgX0NCU0VvLFxuICAgIDAsXG4gICAgW19jQkldLFxuICAgIFsxXSwgMVxuXTtcbmV4cG9ydHMuQ29udmVyc2VNZXRyaWNzJCA9IFszLCBuMCwgX0NNLFxuICAgIDAsXG4gICAgW19sTV0sXG4gICAgWzFdLCAxXG5dO1xuZXhwb3J0cy5Db252ZXJzZVJlcXVlc3QkID0gWzMsIG4wLCBfQ1IsXG4gICAgMCxcbiAgICBbX21JLCBfbWUsIF9zeSwgX2lDLCBfdEMsIF9nQ3UsIF9hTVJGLCBfcFYsIF9hTVJGUCwgX3JNLCBfcEMsIF9zVGUsIF9vQ10sXG4gICAgW1swLCAxXSwgWygpID0+IE1lc3NhZ2VzLCAwXSwgWygpID0+IFN5c3RlbUNvbnRlbnRCbG9ja3MsIDBdLCAoKSA9PiBleHBvcnRzLkluZmVyZW5jZUNvbmZpZ3VyYXRpb24kLCAoKSA9PiBleHBvcnRzLlRvb2xDb25maWd1cmF0aW9uJCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxDb25maWd1cmF0aW9uJCwgMTUsIFsoKSA9PiBQcm9tcHRWYXJpYWJsZU1hcCwgMF0sIDY0IHwgMCwgWygpID0+IFJlcXVlc3RNZXRhZGF0YSwgMF0sICgpID0+IGV4cG9ydHMuUGVyZm9ybWFuY2VDb25maWd1cmF0aW9uJCwgKCkgPT4gZXhwb3J0cy5TZXJ2aWNlVGllciQsIFsoKSA9PiBleHBvcnRzLk91dHB1dENvbmZpZyQsIDBdXSwgMVxuXTtcbmV4cG9ydHMuQ29udmVyc2VSZXNwb25zZSQgPSBbMywgbjAsIF9DUm8sXG4gICAgMCxcbiAgICBbX291LCBfc1IsIF91LCBfbWV0LCBfYU1SRmQsIF90ciwgX3BDLCBfc1RlXSxcbiAgICBbWygpID0+IGV4cG9ydHMuQ29udmVyc2VPdXRwdXQkLCAwXSwgMCwgKCkgPT4gZXhwb3J0cy5Ub2tlblVzYWdlJCwgKCkgPT4gZXhwb3J0cy5Db252ZXJzZU1ldHJpY3MkLCAxNSwgWygpID0+IGV4cG9ydHMuQ29udmVyc2VUcmFjZSQsIDBdLCAoKSA9PiBleHBvcnRzLlBlcmZvcm1hbmNlQ29uZmlndXJhdGlvbiQsICgpID0+IGV4cG9ydHMuU2VydmljZVRpZXIkXSwgNFxuXTtcbmV4cG9ydHMuQ29udmVyc2VTdHJlYW1NZXRhZGF0YUV2ZW50JCA9IFszLCBuMCwgX0NTTUUsXG4gICAgMCxcbiAgICBbX3UsIF9tZXQsIF90ciwgX3BDLCBfc1RlXSxcbiAgICBbKCkgPT4gZXhwb3J0cy5Ub2tlblVzYWdlJCwgKCkgPT4gZXhwb3J0cy5Db252ZXJzZVN0cmVhbU1ldHJpY3MkLCBbKCkgPT4gZXhwb3J0cy5Db252ZXJzZVN0cmVhbVRyYWNlJCwgMF0sICgpID0+IGV4cG9ydHMuUGVyZm9ybWFuY2VDb25maWd1cmF0aW9uJCwgKCkgPT4gZXhwb3J0cy5TZXJ2aWNlVGllciRdLCAyXG5dO1xuZXhwb3J0cy5Db252ZXJzZVN0cmVhbU1ldHJpY3MkID0gWzMsIG4wLCBfQ1NNLFxuICAgIDAsXG4gICAgW19sTV0sXG4gICAgWzFdLCAxXG5dO1xuZXhwb3J0cy5Db252ZXJzZVN0cmVhbVJlcXVlc3QkID0gWzMsIG4wLCBfQ1NSLFxuICAgIDAsXG4gICAgW19tSSwgX21lLCBfc3ksIF9pQywgX3RDLCBfZ0N1LCBfYU1SRiwgX3BWLCBfYU1SRlAsIF9yTSwgX3BDLCBfc1RlLCBfb0NdLFxuICAgIFtbMCwgMV0sIFsoKSA9PiBNZXNzYWdlcywgMF0sIFsoKSA9PiBTeXN0ZW1Db250ZW50QmxvY2tzLCAwXSwgKCkgPT4gZXhwb3J0cy5JbmZlcmVuY2VDb25maWd1cmF0aW9uJCwgKCkgPT4gZXhwb3J0cy5Ub29sQ29uZmlndXJhdGlvbiQsICgpID0+IGV4cG9ydHMuR3VhcmRyYWlsU3RyZWFtQ29uZmlndXJhdGlvbiQsIDE1LCBbKCkgPT4gUHJvbXB0VmFyaWFibGVNYXAsIDBdLCA2NCB8IDAsIFsoKSA9PiBSZXF1ZXN0TWV0YWRhdGEsIDBdLCAoKSA9PiBleHBvcnRzLlBlcmZvcm1hbmNlQ29uZmlndXJhdGlvbiQsICgpID0+IGV4cG9ydHMuU2VydmljZVRpZXIkLCBbKCkgPT4gZXhwb3J0cy5PdXRwdXRDb25maWckLCAwXV0sIDFcbl07XG5leHBvcnRzLkNvbnZlcnNlU3RyZWFtUmVzcG9uc2UkID0gWzMsIG4wLCBfQ1NSbyxcbiAgICAwLFxuICAgIFtfc3RyXSxcbiAgICBbWygpID0+IGV4cG9ydHMuQ29udmVyc2VTdHJlYW1PdXRwdXQkLCAxNl1dXG5dO1xuZXhwb3J0cy5Db252ZXJzZVN0cmVhbVRyYWNlJCA9IFszLCBuMCwgX0NTVCxcbiAgICAwLFxuICAgIFtfZywgX3BSXSxcbiAgICBbWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsVHJhY2VBc3Nlc3NtZW50JCwgMF0sICgpID0+IGV4cG9ydHMuUHJvbXB0Um91dGVyVHJhY2UkXVxuXTtcbmV4cG9ydHMuQ29udmVyc2VUb2tlbnNSZXF1ZXN0JCA9IFszLCBuMCwgX0NUUixcbiAgICAwLFxuICAgIFtfbWUsIF9zeSwgX3RDLCBfYU1SRl0sXG4gICAgW1soKSA9PiBNZXNzYWdlcywgMF0sIFsoKSA9PiBTeXN0ZW1Db250ZW50QmxvY2tzLCAwXSwgKCkgPT4gZXhwb3J0cy5Ub29sQ29uZmlndXJhdGlvbiQsIDE1XVxuXTtcbmV4cG9ydHMuQ29udmVyc2VUcmFjZSQgPSBbMywgbjAsIF9DVCxcbiAgICAwLFxuICAgIFtfZywgX3BSXSxcbiAgICBbWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsVHJhY2VBc3Nlc3NtZW50JCwgMF0sICgpID0+IGV4cG9ydHMuUHJvbXB0Um91dGVyVHJhY2UkXVxuXTtcbmV4cG9ydHMuQ291bnRUb2tlbnNSZXF1ZXN0JCA9IFszLCBuMCwgX0NUUm8sXG4gICAgMCxcbiAgICBbX21JLCBfaV0sXG4gICAgW1swLCAxXSwgWygpID0+IGV4cG9ydHMuQ291bnRUb2tlbnNJbnB1dCQsIDBdXSwgMlxuXTtcbmV4cG9ydHMuQ291bnRUb2tlbnNSZXNwb25zZSQgPSBbMywgbjAsIF9DVFJvdSxcbiAgICAwLFxuICAgIFtfaVRdLFxuICAgIFsxXSwgMVxuXTtcbmV4cG9ydHMuRG9jdW1lbnRCbG9jayQgPSBbMywgbjAsIF9EQixcbiAgICAwLFxuICAgIFtfbiwgX3NvLCBfZiwgX2NvbiwgX2NpXSxcbiAgICBbMCwgKCkgPT4gZXhwb3J0cy5Eb2N1bWVudFNvdXJjZSQsIDAsIDAsICgpID0+IGV4cG9ydHMuQ2l0YXRpb25zQ29uZmlnJF0sIDJcbl07XG5leHBvcnRzLkRvY3VtZW50Q2hhckxvY2F0aW9uJCA9IFszLCBuMCwgX0RDTCxcbiAgICAwLFxuICAgIFtfZEksIF9zdGEsIF9lbmRdLFxuICAgIFsxLCAxLCAxXVxuXTtcbmV4cG9ydHMuRG9jdW1lbnRDaHVua0xvY2F0aW9uJCA9IFszLCBuMCwgX0RDTG8sXG4gICAgMCxcbiAgICBbX2RJLCBfc3RhLCBfZW5kXSxcbiAgICBbMSwgMSwgMV1cbl07XG5leHBvcnRzLkRvY3VtZW50UGFnZUxvY2F0aW9uJCA9IFszLCBuMCwgX0RQTCxcbiAgICAwLFxuICAgIFtfZEksIF9zdGEsIF9lbmRdLFxuICAgIFsxLCAxLCAxXVxuXTtcbmV4cG9ydHMuRXJyb3JCbG9jayQgPSBbMywgbjAsIF9FQixcbiAgICA4LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xuZXhwb3J0cy5HZXRBc3luY0ludm9rZVJlcXVlc3QkID0gWzMsIG4wLCBfR0FJUixcbiAgICAwLFxuICAgIFtfaUFdLFxuICAgIFtbMCwgMV1dLCAxXG5dO1xuZXhwb3J0cy5HZXRBc3luY0ludm9rZVJlc3BvbnNlJCA9IFszLCBuMCwgX0dBSVJlLFxuICAgIDAsXG4gICAgW19pQSwgX21BLCBfc3QsIF9zVCwgX29EQywgX2NSVCwgX2ZNLCBfbE1ULCBfZVRdLFxuICAgIFswLCAwLCAwLCA1LCAoKSA9PiBleHBvcnRzLkFzeW5jSW52b2tlT3V0cHV0RGF0YUNvbmZpZyQsIDAsIFsoKSA9PiBBc3luY0ludm9rZU1lc3NhZ2UsIDBdLCA1LCA1XSwgNVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXNzZXNzbWVudCQgPSBbMywgbjAsIF9HQSxcbiAgICAwLFxuICAgIFtfdFAsIF9jUCwgX3dQLCBfc0lQLCBfY0dQLCBfYVJQLCBfaU0sIF9hR0RdLFxuICAgIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbFRvcGljUG9saWN5QXNzZXNzbWVudCQsICgpID0+IGV4cG9ydHMuR3VhcmRyYWlsQ29udGVudFBvbGljeUFzc2Vzc21lbnQkLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbFdvcmRQb2xpY3lBc3Nlc3NtZW50JCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxTZW5zaXRpdmVJbmZvcm1hdGlvblBvbGljeUFzc2Vzc21lbnQkLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvbnRleHR1YWxHcm91bmRpbmdQb2xpY3lBc3Nlc3NtZW50JCwgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nUG9saWN5QXNzZXNzbWVudCQsIDBdLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEludm9jYXRpb25NZXRyaWNzJCwgKCkgPT4gZXhwb3J0cy5BcHBsaWVkR3VhcmRyYWlsRGV0YWlscyRdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdJbXBvc3NpYmxlRmluZGluZyQgPSBbMywgbjAsIF9HQVJJRixcbiAgICAwLFxuICAgIFtfdHJhLCBfY1IsIF9sV10sXG4gICAgW1soKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uJCwgMF0sICgpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1J1bGVMaXN0LCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdMb2dpY1dhcm5pbmckLCAwXV1cbl07XG5leHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0lucHV0VGV4dFJlZmVyZW5jZSQgPSBbMywgbjAsIF9HQVJJVFIsXG4gICAgMCxcbiAgICBbX3RlXSxcbiAgICBbWygpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudE5hdHVyYWxMYW5ndWFnZUNvbnRlbnQsIDBdXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW52YWxpZEZpbmRpbmckID0gWzMsIG4wLCBfR0FSSUZ1LFxuICAgIDAsXG4gICAgW190cmEsIF9jUiwgX2xXXSxcbiAgICBbWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVHJhbnNsYXRpb24kLCAwXSwgKCkgPT4gR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nUnVsZUxpc3QsIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0xvZ2ljV2FybmluZyQsIDBdXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nTG9naWNXYXJuaW5nJCA9IFszLCBuMCwgX0dBUkxXLFxuICAgIDAsXG4gICAgW190eSwgX3AsIF9jbF0sXG4gICAgWzAsIFsoKSA9PiBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnRMaXN0LCAwXSwgWygpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudExpc3QsIDBdXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nTm9UcmFuc2xhdGlvbnNGaW5kaW5nJCA9IFszLCBuMCwgX0dBUk5URixcbiAgICAwLFxuICAgIFtdLFxuICAgIFtdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdQb2xpY3lBc3Nlc3NtZW50JCA9IFszLCBuMCwgX0dBUlBBLFxuICAgIDAsXG4gICAgW19maV0sXG4gICAgW1soKSA9PiBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdGaW5kaW5nTGlzdCwgMF1dXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdSdWxlJCA9IFszLCBuMCwgX0dBUlIsXG4gICAgMCxcbiAgICBbX2lkLCBfcFZBXSxcbiAgICBbMCwgMF1cbl07XG5leHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NhdGlzZmlhYmxlRmluZGluZyQgPSBbMywgbjAsIF9HQVJTRixcbiAgICAwLFxuICAgIFtfdHJhLCBfY1RTLCBfY0ZTLCBfbFddLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbiQsIDBdLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTY2VuYXJpbyQsIDBdLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTY2VuYXJpbyQsIDBdLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdMb2dpY1dhcm5pbmckLCAwXV1cbl07XG5leHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NjZW5hcmlvJCA9IFszLCBuMCwgX0dBUlMsXG4gICAgMCxcbiAgICBbX3N0YXRdLFxuICAgIFtbKCkgPT4gR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nU3RhdGVtZW50TGlzdCwgMF1dXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnQkID0gWzMsIG4wLCBfR0FSU3UsXG4gICAgMCxcbiAgICBbX2xvLCBfbkxdLFxuICAgIFtbKCkgPT4gR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nU3RhdGVtZW50TG9naWNDb250ZW50LCAwXSwgWygpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudE5hdHVyYWxMYW5ndWFnZUNvbnRlbnQsIDBdXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVG9vQ29tcGxleEZpbmRpbmckID0gWzMsIG4wLCBfR0FSVENGLFxuICAgIDAsXG4gICAgW10sXG4gICAgW11cbl07XG5leHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uJCA9IFszLCBuMCwgX0dBUlQsXG4gICAgMCxcbiAgICBbX3AsIF9jbCwgX3VQLCBfdUMsIF9jb25mXSxcbiAgICBbWygpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudExpc3QsIDBdLCBbKCkgPT4gR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nU3RhdGVtZW50TGlzdCwgMF0sIFsoKSA9PiBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdJbnB1dFRleHRSZWZlcmVuY2VMaXN0LCAwXSwgWygpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ0lucHV0VGV4dFJlZmVyZW5jZUxpc3QsIDBdLCAxXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVHJhbnNsYXRpb25BbWJpZ3VvdXNGaW5kaW5nJCA9IFszLCBuMCwgX0dBUlRBRixcbiAgICAwLFxuICAgIFtfb3AsIF9kU10sXG4gICAgW1soKSA9PiBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbk9wdGlvbkxpc3QsIDBdLCBbKCkgPT4gR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nRGlmZmVyZW5jZVNjZW5hcmlvTGlzdCwgMF1dXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbk9wdGlvbiQgPSBbMywgbjAsIF9HQVJUTyxcbiAgICAwLFxuICAgIFtfdHJhbl0sXG4gICAgW1soKSA9PiBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbkxpc3QsIDBdXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVmFsaWRGaW5kaW5nJCA9IFszLCBuMCwgX0dBUlZGLFxuICAgIDAsXG4gICAgW190cmEsIF9jVFMsIF9zUnUsIF9sV10sXG4gICAgW1soKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uJCwgMF0sIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NjZW5hcmlvJCwgMF0sICgpID0+IEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1J1bGVMaXN0LCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdMb2dpY1dhcm5pbmckLCAwXV1cbl07XG5leHBvcnRzLkd1YXJkcmFpbENvbmZpZ3VyYXRpb24kID0gWzMsIG4wLCBfR0MsXG4gICAgMCxcbiAgICBbX2dJdSwgX2dWLCBfdHJdLFxuICAgIFswLCAwLCAwXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udGVudEZpbHRlciQgPSBbMywgbjAsIF9HQ0YsXG4gICAgMCxcbiAgICBbX3R5LCBfY29uZiwgX2EsIF9mUywgX2RlXSxcbiAgICBbMCwgMCwgMCwgMCwgMl0sIDNcbl07XG5leHBvcnRzLkd1YXJkcmFpbENvbnRlbnRQb2xpY3lBc3Nlc3NtZW50JCA9IFszLCBuMCwgX0dDUEEsXG4gICAgMCxcbiAgICBbX2ZpbF0sXG4gICAgWygpID0+IEd1YXJkcmFpbENvbnRlbnRGaWx0ZXJMaXN0XSwgMVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ0ZpbHRlciQgPSBbMywgbjAsIF9HQ0dGLFxuICAgIDAsXG4gICAgW190eSwgX3RoLCBfc2MsIF9hLCBfZGVdLFxuICAgIFswLCAxLCAxLCAwLCAyXSwgNFxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ1BvbGljeUFzc2Vzc21lbnQkID0gWzMsIG4wLCBfR0NHUEEsXG4gICAgMCxcbiAgICBbX2ZpbF0sXG4gICAgWygpID0+IEd1YXJkcmFpbENvbnRleHR1YWxHcm91bmRpbmdGaWx0ZXJzXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udmVyc2VJbWFnZUJsb2NrJCA9IFszLCBuMCwgX0dDSUIsXG4gICAgOCxcbiAgICBbX2YsIF9zb10sXG4gICAgWzAsIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvbnZlcnNlSW1hZ2VTb3VyY2UkLCAwXV0sIDJcbl07XG5leHBvcnRzLkd1YXJkcmFpbENvbnZlcnNlVGV4dEJsb2NrJCA9IFszLCBuMCwgX0dDVEIsXG4gICAgMCxcbiAgICBbX3RlLCBfcV0sXG4gICAgWzAsIDY0IHwgMF0sIDFcbl07XG5leHBvcnRzLkd1YXJkcmFpbENvdmVyYWdlJCA9IFszLCBuMCwgX0dDdSxcbiAgICAwLFxuICAgIFtfdENlLCBfaW1dLFxuICAgIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbFRleHRDaGFyYWN0ZXJzQ292ZXJhZ2UkLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEltYWdlQ292ZXJhZ2UkXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQ3VzdG9tV29yZCQgPSBbMywgbjAsIF9HQ1csXG4gICAgMCxcbiAgICBbX21hLCBfYSwgX2RlXSxcbiAgICBbMCwgMCwgMl0sIDJcbl07XG5leHBvcnRzLkd1YXJkcmFpbEltYWdlQmxvY2skID0gWzMsIG4wLCBfR0lCLFxuICAgIDgsXG4gICAgW19mLCBfc29dLFxuICAgIFswLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxJbWFnZVNvdXJjZSQsIDBdXSwgMlxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsSW1hZ2VDb3ZlcmFnZSQgPSBbMywgbjAsIF9HSUMsXG4gICAgMCxcbiAgICBbX2d1LCBfdG9dLFxuICAgIFsxLCAxXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsSW52b2NhdGlvbk1ldHJpY3MkID0gWzMsIG4wLCBfR0lNLFxuICAgIDAsXG4gICAgW19nUEwsIF91LCBfZ0NdLFxuICAgIFsxLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbFVzYWdlJCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxDb3ZlcmFnZSRdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxNYW5hZ2VkV29yZCQgPSBbMywgbjAsIF9HTVcsXG4gICAgMCxcbiAgICBbX21hLCBfdHksIF9hLCBfZGVdLFxuICAgIFswLCAwLCAwLCAyXSwgM1xuXTtcbmV4cG9ydHMuR3VhcmRyYWlsT3V0cHV0Q29udGVudCQgPSBbMywgbjAsIF9HT0MsXG4gICAgMCxcbiAgICBbX3RlXSxcbiAgICBbMF1cbl07XG5leHBvcnRzLkd1YXJkcmFpbFBpaUVudGl0eUZpbHRlciQgPSBbMywgbjAsIF9HUEVGLFxuICAgIDAsXG4gICAgW19tYSwgX3R5LCBfYSwgX2RlXSxcbiAgICBbMCwgMCwgMCwgMl0sIDNcbl07XG5leHBvcnRzLkd1YXJkcmFpbFJlZ2V4RmlsdGVyJCA9IFszLCBuMCwgX0dSRixcbiAgICAwLFxuICAgIFtfYSwgX24sIF9tYSwgX3IsIF9kZV0sXG4gICAgWzAsIDAsIDAsIDAsIDJdLCAxXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxTZW5zaXRpdmVJbmZvcm1hdGlvblBvbGljeUFzc2Vzc21lbnQkID0gWzMsIG4wLCBfR1NJUEEsXG4gICAgMCxcbiAgICBbX3BFLCBfcmVdLFxuICAgIFsoKSA9PiBHdWFyZHJhaWxQaWlFbnRpdHlGaWx0ZXJMaXN0LCAoKSA9PiBHdWFyZHJhaWxSZWdleEZpbHRlckxpc3RdLCAyXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxTdHJlYW1Db25maWd1cmF0aW9uJCA9IFszLCBuMCwgX0dTQyxcbiAgICAwLFxuICAgIFtfZ0l1LCBfZ1YsIF90ciwgX3NQTV0sXG4gICAgWzAsIDAsIDAsIDBdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxUZXh0QmxvY2skID0gWzMsIG4wLCBfR1RCLFxuICAgIDAsXG4gICAgW190ZSwgX3FdLFxuICAgIFswLCA2NCB8IDBdLCAxXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxUZXh0Q2hhcmFjdGVyc0NvdmVyYWdlJCA9IFszLCBuMCwgX0dUQ0MsXG4gICAgMCxcbiAgICBbX2d1LCBfdG9dLFxuICAgIFsxLCAxXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsVG9waWMkID0gWzMsIG4wLCBfR1QsXG4gICAgMCxcbiAgICBbX24sIF90eSwgX2EsIF9kZV0sXG4gICAgWzAsIDAsIDAsIDJdLCAzXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxUb3BpY1BvbGljeUFzc2Vzc21lbnQkID0gWzMsIG4wLCBfR1RQQSxcbiAgICAwLFxuICAgIFtfdG9wXSxcbiAgICBbKCkgPT4gR3VhcmRyYWlsVG9waWNMaXN0XSwgMVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsVHJhY2VBc3Nlc3NtZW50JCA9IFszLCBuMCwgX0dUQSxcbiAgICAwLFxuICAgIFtfbU8sIF9pQW4sIF9vQSwgX2FSXSxcbiAgICBbNjQgfCAwLCBbKCkgPT4gR3VhcmRyYWlsQXNzZXNzbWVudE1hcCwgMF0sIFsoKSA9PiBHdWFyZHJhaWxBc3Nlc3NtZW50TGlzdE1hcCwgMF0sIDBdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxVc2FnZSQgPSBbMywgbjAsIF9HVSxcbiAgICAwLFxuICAgIFtfdFBVLCBfY1BVLCBfd1BVLCBfc0lQVSwgX3NJUEZVLCBfY0dQVSwgX2NQSVUsIF9hUlBVLCBfYVJQdV0sXG4gICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLCA2XG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxXb3JkUG9saWN5QXNzZXNzbWVudCQgPSBbMywgbjAsIF9HV1BBLFxuICAgIDAsXG4gICAgW19jVywgX21XTF0sXG4gICAgWygpID0+IEd1YXJkcmFpbEN1c3RvbVdvcmRMaXN0LCAoKSA9PiBHdWFyZHJhaWxNYW5hZ2VkV29yZExpc3RdLCAyXG5dO1xuZXhwb3J0cy5JbWFnZUJsb2NrJCA9IFszLCBuMCwgX0lCLFxuICAgIDAsXG4gICAgW19mLCBfc28sIF9lXSxcbiAgICBbMCwgWygpID0+IGV4cG9ydHMuSW1hZ2VTb3VyY2UkLCAwXSwgWygpID0+IGV4cG9ydHMuRXJyb3JCbG9jayQsIDBdXSwgMlxuXTtcbmV4cG9ydHMuSW1hZ2VCbG9ja0RlbHRhJCA9IFszLCBuMCwgX0lCRCxcbiAgICAwLFxuICAgIFtfc28sIF9lXSxcbiAgICBbWygpID0+IGV4cG9ydHMuSW1hZ2VTb3VyY2UkLCAwXSwgWygpID0+IGV4cG9ydHMuRXJyb3JCbG9jayQsIDBdXVxuXTtcbmV4cG9ydHMuSW1hZ2VCbG9ja1N0YXJ0JCA9IFszLCBuMCwgX0lCUyxcbiAgICAwLFxuICAgIFtfZl0sXG4gICAgWzBdLCAxXG5dO1xuZXhwb3J0cy5JbmZlcmVuY2VDb25maWd1cmF0aW9uJCA9IFszLCBuMCwgX0lDLFxuICAgIDAsXG4gICAgW19tVCwgX3RlbSwgX3RQbywgX3NTXSxcbiAgICBbMSwgMSwgMSwgNjQgfCAwXVxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxSZXF1ZXN0JCA9IFszLCBuMCwgX0lNUixcbiAgICAwLFxuICAgIFtfbUksIF9ibywgX2NULCBfYWMsIF90ciwgX2dJdSwgX2dWLCBfcENMLCBfc1RlXSxcbiAgICBbWzAsIDFdLCBbKCkgPT4gQm9keSwgMTZdLCBbMCwgeyBbX2hIXTogX0NUXyB9XSwgWzAsIHsgW19oSF06IF9BIH1dLCBbMCwgeyBbX2hIXTogX1hBQlQgfV0sIFswLCB7IFtfaEhdOiBfWEFCRyB9XSwgWzAsIHsgW19oSF06IF9YQUJHXyB9XSwgWzAsIHsgW19oSF06IF9YQUJQTCB9XSwgWzAsIHsgW19oSF06IF9YQUJTVCB9XV0sIDFcbl07XG5leHBvcnRzLkludm9rZU1vZGVsUmVzcG9uc2UkID0gWzMsIG4wLCBfSU1SbixcbiAgICAwLFxuICAgIFtfYm8sIF9jVCwgX3BDTCwgX3NUZV0sXG4gICAgW1soKSA9PiBCb2R5LCAxNl0sIFswLCB7IFtfaEhdOiBfQ1RfIH1dLCBbMCwgeyBbX2hIXTogX1hBQlBMIH1dLCBbMCwgeyBbX2hIXTogX1hBQlNUIH1dXSwgMlxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxUb2tlbnNSZXF1ZXN0JCA9IFszLCBuMCwgX0lNVFIsXG4gICAgMCxcbiAgICBbX2JvXSxcbiAgICBbWygpID0+IEJvZHksIDBdXSwgMVxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbVJlcXVlc3QkID0gWzMsIG4wLCBfSU1XQlNSLFxuICAgIDAsXG4gICAgW19tSSwgX2JvXSxcbiAgICBbWzAsIDFdLCBbKCkgPT4gZXhwb3J0cy5JbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtSW5wdXQkLCAxNl1dLCAyXG5dO1xuZXhwb3J0cy5JbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtUmVzcG9uc2UkID0gWzMsIG4wLCBfSU1XQlNSbixcbiAgICAwLFxuICAgIFtfYm9dLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5JbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtT3V0cHV0JCwgMTZdXSwgMVxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1SZXF1ZXN0JCA9IFszLCBuMCwgX0lNV1JTUixcbiAgICAwLFxuICAgIFtfbUksIF9ibywgX2NULCBfYWMsIF90ciwgX2dJdSwgX2dWLCBfcENMLCBfc1RlXSxcbiAgICBbWzAsIDFdLCBbKCkgPT4gQm9keSwgMTZdLCBbMCwgeyBbX2hIXTogX0NUXyB9XSwgWzAsIHsgW19oSF06IF9YQUJBIH1dLCBbMCwgeyBbX2hIXTogX1hBQlQgfV0sIFswLCB7IFtfaEhdOiBfWEFCRyB9XSwgWzAsIHsgW19oSF06IF9YQUJHXyB9XSwgWzAsIHsgW19oSF06IF9YQUJQTCB9XSwgWzAsIHsgW19oSF06IF9YQUJTVCB9XV0sIDFcbl07XG5leHBvcnRzLkludm9rZU1vZGVsV2l0aFJlc3BvbnNlU3RyZWFtUmVzcG9uc2UkID0gWzMsIG4wLCBfSU1XUlNSbixcbiAgICAwLFxuICAgIFtfYm8sIF9jVCwgX3BDTCwgX3NUZV0sXG4gICAgW1soKSA9PiBleHBvcnRzLlJlc3BvbnNlU3RyZWFtJCwgMTZdLCBbMCwgeyBbX2hIXTogX1hBQkNUIH1dLCBbMCwgeyBbX2hIXTogX1hBQlBMIH1dLCBbMCwgeyBbX2hIXTogX1hBQlNUIH1dXSwgMlxuXTtcbmV4cG9ydHMuSnNvblNjaGVtYURlZmluaXRpb24kID0gWzMsIG4wLCBfSlNELFxuICAgIDAsXG4gICAgW19zY2gsIF9uLCBfZGVzXSxcbiAgICBbMCwgMCwgMF0sIDFcbl07XG5leHBvcnRzLkxpc3RBc3luY0ludm9rZXNSZXF1ZXN0JCA9IFszLCBuMCwgX0xBSVIsXG4gICAgMCxcbiAgICBbX3NUQSwgX3NUQiwgX3NFLCBfbVIsIF9uVCwgX3NCLCBfc09dLFxuICAgIFtbNSwgeyBbX2hRXTogX3NUQSB9XSwgWzUsIHsgW19oUV06IF9zVEIgfV0sIFswLCB7IFtfaFFdOiBfc0UgfV0sIFsxLCB7IFtfaFFdOiBfbVIgfV0sIFswLCB7IFtfaFFdOiBfblQgfV0sIFswLCB7IFtfaFFdOiBfc0IgfV0sIFswLCB7IFtfaFFdOiBfc08gfV1dXG5dO1xuZXhwb3J0cy5MaXN0QXN5bmNJbnZva2VzUmVzcG9uc2UkID0gWzMsIG4wLCBfTEFJUmksXG4gICAgMCxcbiAgICBbX25ULCBfYUlTXSxcbiAgICBbMCwgWygpID0+IEFzeW5jSW52b2tlU3VtbWFyaWVzLCAwXV1cbl07XG5leHBvcnRzLk1lc3NhZ2UkID0gWzMsIG4wLCBfTSxcbiAgICAwLFxuICAgIFtfcm8sIF9jb10sXG4gICAgWzAsIFsoKSA9PiBDb250ZW50QmxvY2tzLCAwXV0sIDJcbl07XG5leHBvcnRzLk1lc3NhZ2VTdGFydEV2ZW50JCA9IFszLCBuMCwgX01TRSxcbiAgICAwLFxuICAgIFtfcm9dLFxuICAgIFswXSwgMVxuXTtcbmV4cG9ydHMuTWVzc2FnZVN0b3BFdmVudCQgPSBbMywgbjAsIF9NU0VlLFxuICAgIDAsXG4gICAgW19zUiwgX2FNUkZkXSxcbiAgICBbMCwgMTVdLCAxXG5dO1xuZXhwb3J0cy5PdXRwdXRDb25maWckID0gWzMsIG4wLCBfT0MsXG4gICAgMCxcbiAgICBbX3RGXSxcbiAgICBbWygpID0+IGV4cG9ydHMuT3V0cHV0Rm9ybWF0JCwgMF1dXG5dO1xuZXhwb3J0cy5PdXRwdXRGb3JtYXQkID0gWzMsIG4wLCBfT0YsXG4gICAgMCxcbiAgICBbX3R5LCBfc3RydV0sXG4gICAgWzAsIFsoKSA9PiBleHBvcnRzLk91dHB1dEZvcm1hdFN0cnVjdHVyZSQsIDBdXSwgMlxuXTtcbmV4cG9ydHMuUGF5bG9hZFBhcnQkID0gWzMsIG4wLCBfUFAsXG4gICAgOCxcbiAgICBbX2JdLFxuICAgIFtbKCkgPT4gUGFydEJvZHksIDBdXVxuXTtcbmV4cG9ydHMuUGVyZm9ybWFuY2VDb25maWd1cmF0aW9uJCA9IFszLCBuMCwgX1BDLFxuICAgIDAsXG4gICAgW19sYV0sXG4gICAgWzBdXG5dO1xuZXhwb3J0cy5Qcm9tcHRSb3V0ZXJUcmFjZSQgPSBbMywgbjAsIF9QUlQsXG4gICAgMCxcbiAgICBbX2lNSV0sXG4gICAgWzBdXG5dO1xuZXhwb3J0cy5SZWFzb25pbmdUZXh0QmxvY2skID0gWzMsIG4wLCBfUlRCLFxuICAgIDgsXG4gICAgW190ZSwgX3NpXSxcbiAgICBbMCwgMF0sIDFcbl07XG5leHBvcnRzLlMzTG9jYXRpb24kID0gWzMsIG4wLCBfU0wsXG4gICAgMCxcbiAgICBbX3VyLCBfYk9dLFxuICAgIFswLCAwXSwgMVxuXTtcbmV4cG9ydHMuU2VhcmNoUmVzdWx0QmxvY2skID0gWzMsIG4wLCBfU1JCLFxuICAgIDAsXG4gICAgW19zbywgX3RpLCBfY28sIF9jaV0sXG4gICAgWzAsIDAsICgpID0+IFNlYXJjaFJlc3VsdENvbnRlbnRCbG9ja3MsICgpID0+IGV4cG9ydHMuQ2l0YXRpb25zQ29uZmlnJF0sIDNcbl07XG5leHBvcnRzLlNlYXJjaFJlc3VsdENvbnRlbnRCbG9jayQgPSBbMywgbjAsIF9TUkNCLFxuICAgIDAsXG4gICAgW190ZV0sXG4gICAgWzBdLCAxXG5dO1xuZXhwb3J0cy5TZWFyY2hSZXN1bHRMb2NhdGlvbiQgPSBbMywgbjAsIF9TUkwsXG4gICAgMCxcbiAgICBbX3NSSSwgX3N0YSwgX2VuZF0sXG4gICAgWzEsIDEsIDFdXG5dO1xuZXhwb3J0cy5TZXJ2aWNlVGllciQgPSBbMywgbjAsIF9TVCxcbiAgICAwLFxuICAgIFtfdHldLFxuICAgIFswXSwgMVxuXTtcbmV4cG9ydHMuU3BlY2lmaWNUb29sQ2hvaWNlJCA9IFszLCBuMCwgX1NUQyxcbiAgICAwLFxuICAgIFtfbl0sXG4gICAgWzBdLCAxXG5dO1xuZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlUmVxdWVzdCQgPSBbMywgbjAsIF9TQUlSLFxuICAgIDAsXG4gICAgW19tSSwgX21JbywgX29EQywgX2NSVCwgX3RhXSxcbiAgICBbMCwgWygpID0+IE1vZGVsSW5wdXRQYXlsb2FkLCAwXSwgKCkgPT4gZXhwb3J0cy5Bc3luY0ludm9rZU91dHB1dERhdGFDb25maWckLCBbMCwgNF0sICgpID0+IFRhZ0xpc3RdLCAzXG5dO1xuZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlUmVzcG9uc2UkID0gWzMsIG4wLCBfU0FJUnQsXG4gICAgMCxcbiAgICBbX2lBXSxcbiAgICBbMF0sIDFcbl07XG5leHBvcnRzLlN5c3RlbVRvb2wkID0gWzMsIG4wLCBfU1R5LFxuICAgIDAsXG4gICAgW19uXSxcbiAgICBbMF0sIDFcbl07XG5leHBvcnRzLlRhZyQgPSBbMywgbjAsIF9ULFxuICAgIDAsXG4gICAgW19rLCBfdl0sXG4gICAgWzAsIDBdLCAyXG5dO1xuZXhwb3J0cy5Ub2tlblVzYWdlJCA9IFszLCBuMCwgX1RVLFxuICAgIDAsXG4gICAgW19pVCwgX29ULCBfdFQsIF9jUklULCBfY1dJVCwgX2NEXSxcbiAgICBbMSwgMSwgMSwgMSwgMSwgKCkgPT4gQ2FjaGVEZXRhaWxzTGlzdF0sIDNcbl07XG5leHBvcnRzLlRvb2xDb25maWd1cmF0aW9uJCA9IFszLCBuMCwgX1RDLFxuICAgIDAsXG4gICAgW190b28sIF90Q29dLFxuICAgIFsoKSA9PiBUb29scywgKCkgPT4gZXhwb3J0cy5Ub29sQ2hvaWNlJF0sIDFcbl07XG5leHBvcnRzLlRvb2xSZXN1bHRCbG9jayQgPSBbMywgbjAsIF9UUkIsXG4gICAgMCxcbiAgICBbX3RVSSwgX2NvLCBfc3QsIF90eV0sXG4gICAgWzAsIFsoKSA9PiBUb29sUmVzdWx0Q29udGVudEJsb2NrcywgMF0sIDAsIDBdLCAyXG5dO1xuZXhwb3J0cy5Ub29sUmVzdWx0QmxvY2tTdGFydCQgPSBbMywgbjAsIF9UUkJTLFxuICAgIDAsXG4gICAgW190VUksIF90eSwgX3N0XSxcbiAgICBbMCwgMCwgMF0sIDFcbl07XG5leHBvcnRzLlRvb2xTcGVjaWZpY2F0aW9uJCA9IFszLCBuMCwgX1RTLFxuICAgIDAsXG4gICAgW19uLCBfaVMsIF9kZXMsIF9zdHJpXSxcbiAgICBbMCwgKCkgPT4gZXhwb3J0cy5Ub29sSW5wdXRTY2hlbWEkLCAwLCAyXSwgMlxuXTtcbmV4cG9ydHMuVG9vbFVzZUJsb2NrJCA9IFszLCBuMCwgX1RVQixcbiAgICAwLFxuICAgIFtfdFVJLCBfbiwgX2ksIF90eV0sXG4gICAgWzAsIDAsIDE1LCAwXSwgM1xuXTtcbmV4cG9ydHMuVG9vbFVzZUJsb2NrRGVsdGEkID0gWzMsIG4wLCBfVFVCRCxcbiAgICAwLFxuICAgIFtfaV0sXG4gICAgWzBdLCAxXG5dO1xuZXhwb3J0cy5Ub29sVXNlQmxvY2tTdGFydCQgPSBbMywgbjAsIF9UVUJTLFxuICAgIDAsXG4gICAgW190VUksIF9uLCBfdHldLFxuICAgIFswLCAwLCAwXSwgMlxuXTtcbmV4cG9ydHMuVmlkZW9CbG9jayQgPSBbMywgbjAsIF9WQixcbiAgICAwLFxuICAgIFtfZiwgX3NvXSxcbiAgICBbMCwgKCkgPT4gZXhwb3J0cy5WaWRlb1NvdXJjZSRdLCAyXG5dO1xuZXhwb3J0cy5XZWJMb2NhdGlvbiQgPSBbMywgbjAsIF9XTCxcbiAgICAwLFxuICAgIFtfdXJsLCBfZG9dLFxuICAgIFswLCAwXVxuXTtcbnZhciBBZGRpdGlvbmFsTW9kZWxSZXNwb25zZUZpZWxkUGF0aHMgPSA2NCB8IDA7XG52YXIgQXN5bmNJbnZva2VTdW1tYXJpZXMgPSBbMSwgbjAsIF9BSVNzLFxuICAgIDAsIFsoKSA9PiBleHBvcnRzLkFzeW5jSW52b2tlU3VtbWFyeSQsXG4gICAgICAgIDBdXG5dO1xudmFyIENhY2hlRGV0YWlsc0xpc3QgPSBbMSwgbjAsIF9DREwsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5DYWNoZURldGFpbCRcbl07XG52YXIgQ2l0YXRpb25HZW5lcmF0ZWRDb250ZW50TGlzdCA9IFsxLCBuMCwgX0NHQ0wsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5DaXRhdGlvbkdlbmVyYXRlZENvbnRlbnQkXG5dO1xudmFyIENpdGF0aW9ucyA9IFsxLCBuMCwgX0NpLFxuICAgIDAsICgpID0+IGV4cG9ydHMuQ2l0YXRpb24kXG5dO1xudmFyIENpdGF0aW9uU291cmNlQ29udGVudExpc3QgPSBbMSwgbjAsIF9DU0NMLFxuICAgIDAsICgpID0+IGV4cG9ydHMuQ2l0YXRpb25Tb3VyY2VDb250ZW50JFxuXTtcbnZhciBDaXRhdGlvblNvdXJjZUNvbnRlbnRMaXN0RGVsdGEgPSBbMSwgbjAsIF9DU0NMRCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkNpdGF0aW9uU291cmNlQ29udGVudERlbHRhJFxuXTtcbnZhciBDb250ZW50QmxvY2tzID0gWzEsIG4wLCBfQ0IsXG4gICAgMCwgWygpID0+IGV4cG9ydHMuQ29udGVudEJsb2NrJCxcbiAgICAgICAgMF1cbl07XG52YXIgRG9jdW1lbnRDb250ZW50QmxvY2tzID0gWzEsIG4wLCBfRENCLFxuICAgIDAsICgpID0+IGV4cG9ydHMuRG9jdW1lbnRDb250ZW50QmxvY2skXG5dO1xudmFyIEd1YXJkcmFpbEFzc2Vzc21lbnRMaXN0ID0gWzEsIG4wLCBfR0FMLFxuICAgIDAsIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEFzc2Vzc21lbnQkLFxuICAgICAgICAwXVxuXTtcbnZhciBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdEaWZmZXJlbmNlU2NlbmFyaW9MaXN0ID0gWzEsIG4wLCBfR0FSRFNMLFxuICAgIDAsIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1NjZW5hcmlvJCxcbiAgICAgICAgMF1cbl07XG52YXIgR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nRmluZGluZ0xpc3QgPSBbMSwgbjAsIF9HQVJGTCxcbiAgICAwLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdGaW5kaW5nJCxcbiAgICAgICAgMF1cbl07XG52YXIgR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW5wdXRUZXh0UmVmZXJlbmNlTGlzdCA9IFsxLCBuMCwgX0dBUklUUkwsXG4gICAgMCwgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW5wdXRUZXh0UmVmZXJlbmNlJCxcbiAgICAgICAgMF1cbl07XG52YXIgR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nUnVsZUxpc3QgPSBbMSwgbjAsIF9HQVJSTCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1J1bGUkXG5dO1xudmFyIEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1N0YXRlbWVudExpc3QgPSBbMSwgbjAsIF9HQVJTTCxcbiAgICAwLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTdGF0ZW1lbnQkLFxuICAgICAgICAwXVxuXTtcbnZhciBHdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbkxpc3QgPSBbMSwgbjAsIF9HQVJUTCxcbiAgICAwLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbiQsXG4gICAgICAgIDBdXG5dO1xudmFyIEd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1RyYW5zbGF0aW9uT3B0aW9uTGlzdCA9IFsxLCBuMCwgX0dBUlRPTCxcbiAgICAwLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdUcmFuc2xhdGlvbk9wdGlvbiQsXG4gICAgICAgIDBdXG5dO1xudmFyIEd1YXJkcmFpbENvbnRlbnRCbG9ja0xpc3QgPSBbMSwgbjAsIF9HQ0JMLFxuICAgIDAsIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvbnRlbnRCbG9jayQsXG4gICAgICAgIDBdXG5dO1xudmFyIEd1YXJkcmFpbENvbnRlbnRGaWx0ZXJMaXN0ID0gWzEsIG4wLCBfR0NGTCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvbnRlbnRGaWx0ZXIkXG5dO1xudmFyIEd1YXJkcmFpbENvbnRlbnRRdWFsaWZpZXJMaXN0ID0gNjQgfCAwO1xudmFyIEd1YXJkcmFpbENvbnRleHR1YWxHcm91bmRpbmdGaWx0ZXJzID0gWzEsIG4wLCBfR0NHRnUsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxDb250ZXh0dWFsR3JvdW5kaW5nRmlsdGVyJFxuXTtcbnZhciBHdWFyZHJhaWxDb252ZXJzZUNvbnRlbnRRdWFsaWZpZXJMaXN0ID0gNjQgfCAwO1xudmFyIEd1YXJkcmFpbEN1c3RvbVdvcmRMaXN0ID0gWzEsIG4wLCBfR0NXTCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEN1c3RvbVdvcmQkXG5dO1xudmFyIEd1YXJkcmFpbE1hbmFnZWRXb3JkTGlzdCA9IFsxLCBuMCwgX0dNV0wsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxNYW5hZ2VkV29yZCRcbl07XG52YXIgR3VhcmRyYWlsT3JpZ2luTGlzdCA9IDY0IHwgMDtcbnZhciBHdWFyZHJhaWxPdXRwdXRDb250ZW50TGlzdCA9IFsxLCBuMCwgX0dPQ0wsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxPdXRwdXRDb250ZW50JFxuXTtcbnZhciBHdWFyZHJhaWxQaWlFbnRpdHlGaWx0ZXJMaXN0ID0gWzEsIG4wLCBfR1BFRkwsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxQaWlFbnRpdHlGaWx0ZXIkXG5dO1xudmFyIEd1YXJkcmFpbFJlZ2V4RmlsdGVyTGlzdCA9IFsxLCBuMCwgX0dSRkwsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxSZWdleEZpbHRlciRcbl07XG52YXIgR3VhcmRyYWlsVG9waWNMaXN0ID0gWzEsIG4wLCBfR1RMLFxuICAgIDAsICgpID0+IGV4cG9ydHMuR3VhcmRyYWlsVG9waWMkXG5dO1xudmFyIE1lc3NhZ2VzID0gWzEsIG4wLCBfTWUsXG4gICAgMCwgWygpID0+IGV4cG9ydHMuTWVzc2FnZSQsXG4gICAgICAgIDBdXG5dO1xudmFyIE1vZGVsT3V0cHV0cyA9IDY0IHwgMDtcbnZhciBOb25FbXB0eVN0cmluZ0xpc3QgPSA2NCB8IDA7XG52YXIgU2VhcmNoUmVzdWx0Q29udGVudEJsb2NrcyA9IFsxLCBuMCwgX1NSQ0JlLFxuICAgIDAsICgpID0+IGV4cG9ydHMuU2VhcmNoUmVzdWx0Q29udGVudEJsb2NrJFxuXTtcbnZhciBTeXN0ZW1Db250ZW50QmxvY2tzID0gWzEsIG4wLCBfU0NCLFxuICAgIDAsIFsoKSA9PiBleHBvcnRzLlN5c3RlbUNvbnRlbnRCbG9jayQsXG4gICAgICAgIDBdXG5dO1xudmFyIFRhZ0xpc3QgPSBbMSwgbjAsIF9UTCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLlRhZyRcbl07XG52YXIgVG9vbFJlc3VsdEJsb2Nrc0RlbHRhID0gWzEsIG4wLCBfVFJCRCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLlRvb2xSZXN1bHRCbG9ja0RlbHRhJFxuXTtcbnZhciBUb29sUmVzdWx0Q29udGVudEJsb2NrcyA9IFsxLCBuMCwgX1RSQ0IsXG4gICAgMCwgWygpID0+IGV4cG9ydHMuVG9vbFJlc3VsdENvbnRlbnRCbG9jayQsXG4gICAgICAgIDBdXG5dO1xudmFyIFRvb2xzID0gWzEsIG4wLCBfVG8sXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5Ub29sJFxuXTtcbnZhciBHdWFyZHJhaWxBc3Nlc3NtZW50TGlzdE1hcCA9IFsyLCBuMCwgX0dBTE0sXG4gICAgMCwgWzAsXG4gICAgICAgIDBdLFxuICAgIFsoKSA9PiBHdWFyZHJhaWxBc3Nlc3NtZW50TGlzdCxcbiAgICAgICAgMF1cbl07XG52YXIgR3VhcmRyYWlsQXNzZXNzbWVudE1hcCA9IFsyLCBuMCwgX0dBTSxcbiAgICAwLCBbMCxcbiAgICAgICAgMF0sXG4gICAgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXNzZXNzbWVudCQsXG4gICAgICAgIDBdXG5dO1xudmFyIFByb21wdFZhcmlhYmxlTWFwID0gWzIsIG4wLCBfUFZNLFxuICAgIDgsIDAsICgpID0+IGV4cG9ydHMuUHJvbXB0VmFyaWFibGVWYWx1ZXMkXG5dO1xudmFyIFJlcXVlc3RNZXRhZGF0YSA9IFsyLCBuMCwgX1JNLFxuICAgIDgsIDAsIDBcbl07XG5leHBvcnRzLkFzeW5jSW52b2tlT3V0cHV0RGF0YUNvbmZpZyQgPSBbNCwgbjAsIF9BSU9EQyxcbiAgICAwLFxuICAgIFtfc09EQ10sXG4gICAgWygpID0+IGV4cG9ydHMuQXN5bmNJbnZva2VTM091dHB1dERhdGFDb25maWckXVxuXTtcbmV4cG9ydHMuQXVkaW9Tb3VyY2UkID0gWzQsIG4wLCBfQVMsXG4gICAgOCxcbiAgICBbX2IsIF9zTF0sXG4gICAgWzIxLCAoKSA9PiBleHBvcnRzLlMzTG9jYXRpb24kXVxuXTtcbmV4cG9ydHMuQ2l0YXRpb25HZW5lcmF0ZWRDb250ZW50JCA9IFs0LCBuMCwgX0NHQyxcbiAgICAwLFxuICAgIFtfdGVdLFxuICAgIFswXVxuXTtcbmV4cG9ydHMuQ2l0YXRpb25Mb2NhdGlvbiQgPSBbNCwgbjAsIF9DTCxcbiAgICAwLFxuICAgIFtfdywgX2RDLCBfZFAsIF9kQ28sIF9zUkxdLFxuICAgIFsoKSA9PiBleHBvcnRzLldlYkxvY2F0aW9uJCwgKCkgPT4gZXhwb3J0cy5Eb2N1bWVudENoYXJMb2NhdGlvbiQsICgpID0+IGV4cG9ydHMuRG9jdW1lbnRQYWdlTG9jYXRpb24kLCAoKSA9PiBleHBvcnRzLkRvY3VtZW50Q2h1bmtMb2NhdGlvbiQsICgpID0+IGV4cG9ydHMuU2VhcmNoUmVzdWx0TG9jYXRpb24kXVxuXTtcbmV4cG9ydHMuQ2l0YXRpb25Tb3VyY2VDb250ZW50JCA9IFs0LCBuMCwgX0NTQyxcbiAgICAwLFxuICAgIFtfdGVdLFxuICAgIFswXVxuXTtcbmV4cG9ydHMuQ29udGVudEJsb2NrJCA9IFs0LCBuMCwgX0NCbyxcbiAgICAwLFxuICAgIFtfdGUsIF9pbWEsIF9kb2MsIF92aSwgX2F1LCBfdFUsIF90UiwgX2dDdWEsIF9jUGEsIF9yQywgX2NDLCBfc1JlXSxcbiAgICBbMCwgWygpID0+IGV4cG9ydHMuSW1hZ2VCbG9jayQsIDBdLCAoKSA9PiBleHBvcnRzLkRvY3VtZW50QmxvY2skLCAoKSA9PiBleHBvcnRzLlZpZGVvQmxvY2skLCBbKCkgPT4gZXhwb3J0cy5BdWRpb0Jsb2NrJCwgMF0sICgpID0+IGV4cG9ydHMuVG9vbFVzZUJsb2NrJCwgWygpID0+IGV4cG9ydHMuVG9vbFJlc3VsdEJsb2NrJCwgMF0sIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvbnZlcnNlQ29udGVudEJsb2NrJCwgMF0sICgpID0+IGV4cG9ydHMuQ2FjaGVQb2ludEJsb2NrJCwgWygpID0+IGV4cG9ydHMuUmVhc29uaW5nQ29udGVudEJsb2NrJCwgMF0sICgpID0+IGV4cG9ydHMuQ2l0YXRpb25zQ29udGVudEJsb2NrJCwgKCkgPT4gZXhwb3J0cy5TZWFyY2hSZXN1bHRCbG9jayRdXG5dO1xuZXhwb3J0cy5Db250ZW50QmxvY2tEZWx0YSQgPSBbNCwgbjAsIF9DQkQsXG4gICAgMCxcbiAgICBbX3RlLCBfdFUsIF90UiwgX3JDLCBfY2l0LCBfaW1hXSxcbiAgICBbMCwgKCkgPT4gZXhwb3J0cy5Ub29sVXNlQmxvY2tEZWx0YSQsICgpID0+IFRvb2xSZXN1bHRCbG9ja3NEZWx0YSwgWygpID0+IGV4cG9ydHMuUmVhc29uaW5nQ29udGVudEJsb2NrRGVsdGEkLCAwXSwgKCkgPT4gZXhwb3J0cy5DaXRhdGlvbnNEZWx0YSQsIFsoKSA9PiBleHBvcnRzLkltYWdlQmxvY2tEZWx0YSQsIDBdXVxuXTtcbmV4cG9ydHMuQ29udGVudEJsb2NrU3RhcnQkID0gWzQsIG4wLCBfQ0JTLFxuICAgIDAsXG4gICAgW190VSwgX3RSLCBfaW1hXSxcbiAgICBbKCkgPT4gZXhwb3J0cy5Ub29sVXNlQmxvY2tTdGFydCQsICgpID0+IGV4cG9ydHMuVG9vbFJlc3VsdEJsb2NrU3RhcnQkLCAoKSA9PiBleHBvcnRzLkltYWdlQmxvY2tTdGFydCRdXG5dO1xuZXhwb3J0cy5Db252ZXJzZU91dHB1dCQgPSBbNCwgbjAsIF9DTyxcbiAgICAwLFxuICAgIFtfbV0sXG4gICAgW1soKSA9PiBleHBvcnRzLk1lc3NhZ2UkLCAwXV1cbl07XG5leHBvcnRzLkNvbnZlcnNlU3RyZWFtT3V0cHV0JCA9IFs0LCBuMCwgX0NTTyxcbiAgICB7IFtfc3RyZV06IDEgfSxcbiAgICBbX21TLCBfY0JTLCBfY0JELCBfY0JTbywgX21TZSwgX21ldGEsIF9pU0UsIF9tU0VFLCBfdkUsIF90RSwgX3NVRV0sXG4gICAgWygpID0+IGV4cG9ydHMuTWVzc2FnZVN0YXJ0RXZlbnQkLCAoKSA9PiBleHBvcnRzLkNvbnRlbnRCbG9ja1N0YXJ0RXZlbnQkLCBbKCkgPT4gZXhwb3J0cy5Db250ZW50QmxvY2tEZWx0YUV2ZW50JCwgMF0sICgpID0+IGV4cG9ydHMuQ29udGVudEJsb2NrU3RvcEV2ZW50JCwgKCkgPT4gZXhwb3J0cy5NZXNzYWdlU3RvcEV2ZW50JCwgWygpID0+IGV4cG9ydHMuQ29udmVyc2VTdHJlYW1NZXRhZGF0YUV2ZW50JCwgMF0sIFsoKSA9PiBleHBvcnRzLkludGVybmFsU2VydmVyRXhjZXB0aW9uJCwgMF0sIFsoKSA9PiBleHBvcnRzLk1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24kLCAwXSwgWygpID0+IGV4cG9ydHMuVmFsaWRhdGlvbkV4Y2VwdGlvbiQsIDBdLCBbKCkgPT4gZXhwb3J0cy5UaHJvdHRsaW5nRXhjZXB0aW9uJCwgMF0sIFsoKSA9PiBleHBvcnRzLlNlcnZpY2VVbmF2YWlsYWJsZUV4Y2VwdGlvbiQsIDBdXVxuXTtcbmV4cG9ydHMuQ291bnRUb2tlbnNJbnB1dCQgPSBbNCwgbjAsIF9DVEksXG4gICAgMCxcbiAgICBbX2lNbiwgX2NvbnZdLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5JbnZva2VNb2RlbFRva2Vuc1JlcXVlc3QkLCAwXSwgWygpID0+IGV4cG9ydHMuQ29udmVyc2VUb2tlbnNSZXF1ZXN0JCwgMF1dXG5dO1xuZXhwb3J0cy5Eb2N1bWVudENvbnRlbnRCbG9jayQgPSBbNCwgbjAsIF9EQ0JvLFxuICAgIDAsXG4gICAgW190ZV0sXG4gICAgWzBdXG5dO1xuZXhwb3J0cy5Eb2N1bWVudFNvdXJjZSQgPSBbNCwgbjAsIF9EUyxcbiAgICAwLFxuICAgIFtfYiwgX3NMLCBfdGUsIF9jb10sXG4gICAgWzIxLCAoKSA9PiBleHBvcnRzLlMzTG9jYXRpb24kLCAwLCAoKSA9PiBEb2N1bWVudENvbnRlbnRCbG9ja3NdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdGaW5kaW5nJCA9IFs0LCBuMCwgX0dBUkYsXG4gICAgMCxcbiAgICBbX3ZhLCBfaW4sIF9zYSwgX2ltcCwgX3RBLCBfdENvbywgX25Ub10sXG4gICAgW1soKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ1ZhbGlkRmluZGluZyQsIDBdLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdJbnZhbGlkRmluZGluZyQsIDBdLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdTYXRpc2ZpYWJsZUZpbmRpbmckLCAwXSwgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nSW1wb3NzaWJsZUZpbmRpbmckLCAwXSwgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVHJhbnNsYXRpb25BbWJpZ3VvdXNGaW5kaW5nJCwgMF0sICgpID0+IGV4cG9ydHMuR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nVG9vQ29tcGxleEZpbmRpbmckLCAoKSA9PiBleHBvcnRzLkd1YXJkcmFpbEF1dG9tYXRlZFJlYXNvbmluZ05vVHJhbnNsYXRpb25zRmluZGluZyRdXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxDb250ZW50QmxvY2skID0gWzQsIG4wLCBfR0NCLFxuICAgIDAsXG4gICAgW190ZSwgX2ltYV0sXG4gICAgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsVGV4dEJsb2NrJCwgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsSW1hZ2VCbG9jayQsIDBdXVxuXTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udmVyc2VDb250ZW50QmxvY2skID0gWzQsIG4wLCBfR0NDQixcbiAgICAwLFxuICAgIFtfdGUsIF9pbWFdLFxuICAgIFsoKSA9PiBleHBvcnRzLkd1YXJkcmFpbENvbnZlcnNlVGV4dEJsb2NrJCwgWygpID0+IGV4cG9ydHMuR3VhcmRyYWlsQ29udmVyc2VJbWFnZUJsb2NrJCwgMF1dXG5dO1xuZXhwb3J0cy5HdWFyZHJhaWxDb252ZXJzZUltYWdlU291cmNlJCA9IFs0LCBuMCwgX0dDSVMsXG4gICAgOCxcbiAgICBbX2JdLFxuICAgIFsyMV1cbl07XG5leHBvcnRzLkd1YXJkcmFpbEltYWdlU291cmNlJCA9IFs0LCBuMCwgX0dJUyxcbiAgICA4LFxuICAgIFtfYl0sXG4gICAgWzIxXVxuXTtcbmV4cG9ydHMuSW1hZ2VTb3VyY2UkID0gWzQsIG4wLCBfSVMsXG4gICAgOCxcbiAgICBbX2IsIF9zTF0sXG4gICAgWzIxLCAoKSA9PiBleHBvcnRzLlMzTG9jYXRpb24kXVxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbUlucHV0JCA9IFs0LCBuMCwgX0lNV0JTSSxcbiAgICB7IFtfc3RyZV06IDEgfSxcbiAgICBbX2NoXSxcbiAgICBbWygpID0+IGV4cG9ydHMuQmlkaXJlY3Rpb25hbElucHV0UGF5bG9hZFBhcnQkLCAwXV1cbl07XG5leHBvcnRzLkludm9rZU1vZGVsV2l0aEJpZGlyZWN0aW9uYWxTdHJlYW1PdXRwdXQkID0gWzQsIG4wLCBfSU1XQlNPLFxuICAgIHsgW19zdHJlXTogMSB9LFxuICAgIFtfY2gsIF9pU0UsIF9tU0VFLCBfdkUsIF90RSwgX21URSwgX3NVRV0sXG4gICAgW1soKSA9PiBleHBvcnRzLkJpZGlyZWN0aW9uYWxPdXRwdXRQYXlsb2FkUGFydCQsIDBdLCBbKCkgPT4gZXhwb3J0cy5JbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiQsIDBdLCBbKCkgPT4gZXhwb3J0cy5Nb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uJCwgMF0sIFsoKSA9PiBleHBvcnRzLlZhbGlkYXRpb25FeGNlcHRpb24kLCAwXSwgWygpID0+IGV4cG9ydHMuVGhyb3R0bGluZ0V4Y2VwdGlvbiQsIDBdLCBbKCkgPT4gZXhwb3J0cy5Nb2RlbFRpbWVvdXRFeGNlcHRpb24kLCAwXSwgWygpID0+IGV4cG9ydHMuU2VydmljZVVuYXZhaWxhYmxlRXhjZXB0aW9uJCwgMF1dXG5dO1xuZXhwb3J0cy5PdXRwdXRGb3JtYXRTdHJ1Y3R1cmUkID0gWzQsIG4wLCBfT0ZTLFxuICAgIDgsXG4gICAgW19qU10sXG4gICAgWygpID0+IGV4cG9ydHMuSnNvblNjaGVtYURlZmluaXRpb24kXVxuXTtcbmV4cG9ydHMuUHJvbXB0VmFyaWFibGVWYWx1ZXMkID0gWzQsIG4wLCBfUFZWLFxuICAgIDAsXG4gICAgW190ZV0sXG4gICAgWzBdXG5dO1xuZXhwb3J0cy5SZWFzb25pbmdDb250ZW50QmxvY2skID0gWzQsIG4wLCBfUkNCLFxuICAgIDgsXG4gICAgW19yVCwgX3JDZV0sXG4gICAgW1soKSA9PiBleHBvcnRzLlJlYXNvbmluZ1RleHRCbG9jayQsIDBdLCAyMV1cbl07XG5leHBvcnRzLlJlYXNvbmluZ0NvbnRlbnRCbG9ja0RlbHRhJCA9IFs0LCBuMCwgX1JDQkQsXG4gICAgOCxcbiAgICBbX3RlLCBfckNlLCBfc2ldLFxuICAgIFswLCAyMSwgMF1cbl07XG5leHBvcnRzLlJlc3BvbnNlU3RyZWFtJCA9IFs0LCBuMCwgX1JTLFxuICAgIHsgW19zdHJlXTogMSB9LFxuICAgIFtfY2gsIF9pU0UsIF9tU0VFLCBfdkUsIF90RSwgX21URSwgX3NVRV0sXG4gICAgW1soKSA9PiBleHBvcnRzLlBheWxvYWRQYXJ0JCwgMF0sIFsoKSA9PiBleHBvcnRzLkludGVybmFsU2VydmVyRXhjZXB0aW9uJCwgMF0sIFsoKSA9PiBleHBvcnRzLk1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24kLCAwXSwgWygpID0+IGV4cG9ydHMuVmFsaWRhdGlvbkV4Y2VwdGlvbiQsIDBdLCBbKCkgPT4gZXhwb3J0cy5UaHJvdHRsaW5nRXhjZXB0aW9uJCwgMF0sIFsoKSA9PiBleHBvcnRzLk1vZGVsVGltZW91dEV4Y2VwdGlvbiQsIDBdLCBbKCkgPT4gZXhwb3J0cy5TZXJ2aWNlVW5hdmFpbGFibGVFeGNlcHRpb24kLCAwXV1cbl07XG5leHBvcnRzLlN5c3RlbUNvbnRlbnRCbG9jayQgPSBbNCwgbjAsIF9TQ0J5LFxuICAgIDAsXG4gICAgW190ZSwgX2dDdWEsIF9jUGFdLFxuICAgIFswLCBbKCkgPT4gZXhwb3J0cy5HdWFyZHJhaWxDb252ZXJzZUNvbnRlbnRCbG9jayQsIDBdLCAoKSA9PiBleHBvcnRzLkNhY2hlUG9pbnRCbG9jayRdXG5dO1xuZXhwb3J0cy5Ub29sJCA9IFs0LCBuMCwgX1RvbyxcbiAgICAwLFxuICAgIFtfdFMsIF9zVHksIF9jUGFdLFxuICAgIFsoKSA9PiBleHBvcnRzLlRvb2xTcGVjaWZpY2F0aW9uJCwgKCkgPT4gZXhwb3J0cy5TeXN0ZW1Ub29sJCwgKCkgPT4gZXhwb3J0cy5DYWNoZVBvaW50QmxvY2skXVxuXTtcbmV4cG9ydHMuVG9vbENob2ljZSQgPSBbNCwgbjAsIF9UQ28sXG4gICAgMCxcbiAgICBbX2F1dCwgX2FuLCBfdG9vbF0sXG4gICAgWygpID0+IGV4cG9ydHMuQXV0b1Rvb2xDaG9pY2UkLCAoKSA9PiBleHBvcnRzLkFueVRvb2xDaG9pY2UkLCAoKSA9PiBleHBvcnRzLlNwZWNpZmljVG9vbENob2ljZSRdXG5dO1xuZXhwb3J0cy5Ub29sSW5wdXRTY2hlbWEkID0gWzQsIG4wLCBfVElTLFxuICAgIDAsXG4gICAgW19qXSxcbiAgICBbMTVdXG5dO1xuZXhwb3J0cy5Ub29sUmVzdWx0QmxvY2tEZWx0YSQgPSBbNCwgbjAsIF9UUkJEbyxcbiAgICAwLFxuICAgIFtfdGUsIF9qXSxcbiAgICBbMCwgMTVdXG5dO1xuZXhwb3J0cy5Ub29sUmVzdWx0Q29udGVudEJsb2NrJCA9IFs0LCBuMCwgX1RSQ0JvLFxuICAgIDAsXG4gICAgW19qLCBfdGUsIF9pbWEsIF9kb2MsIF92aSwgX3NSZV0sXG4gICAgWzE1LCAwLCBbKCkgPT4gZXhwb3J0cy5JbWFnZUJsb2NrJCwgMF0sICgpID0+IGV4cG9ydHMuRG9jdW1lbnRCbG9jayQsICgpID0+IGV4cG9ydHMuVmlkZW9CbG9jayQsICgpID0+IGV4cG9ydHMuU2VhcmNoUmVzdWx0QmxvY2skXVxuXTtcbmV4cG9ydHMuVmlkZW9Tb3VyY2UkID0gWzQsIG4wLCBfVlMsXG4gICAgMCxcbiAgICBbX2IsIF9zTF0sXG4gICAgWzIxLCAoKSA9PiBleHBvcnRzLlMzTG9jYXRpb24kXVxuXTtcbmV4cG9ydHMuQXBwbHlHdWFyZHJhaWwkID0gWzksIG4wLCBfQUcsXG4gICAgeyBbX2hdOiBbXCJQT1NUXCIsIFwiL2d1YXJkcmFpbC97Z3VhcmRyYWlsSWRlbnRpZmllcn0vdmVyc2lvbi97Z3VhcmRyYWlsVmVyc2lvbn0vYXBwbHlcIiwgMjAwXSB9LCAoKSA9PiBleHBvcnRzLkFwcGx5R3VhcmRyYWlsUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuQXBwbHlHdWFyZHJhaWxSZXNwb25zZSRcbl07XG5leHBvcnRzLkNvbnZlcnNlJCA9IFs5LCBuMCwgX0NvLFxuICAgIHsgW19oXTogW1wiUE9TVFwiLCBcIi9tb2RlbC97bW9kZWxJZH0vY29udmVyc2VcIiwgMjAwXSB9LCAoKSA9PiBleHBvcnRzLkNvbnZlcnNlUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuQ29udmVyc2VSZXNwb25zZSRcbl07XG5leHBvcnRzLkNvbnZlcnNlU3RyZWFtJCA9IFs5LCBuMCwgX0NTLFxuICAgIHsgW19oXTogW1wiUE9TVFwiLCBcIi9tb2RlbC97bW9kZWxJZH0vY29udmVyc2Utc3RyZWFtXCIsIDIwMF0gfSwgKCkgPT4gZXhwb3J0cy5Db252ZXJzZVN0cmVhbVJlcXVlc3QkLCAoKSA9PiBleHBvcnRzLkNvbnZlcnNlU3RyZWFtUmVzcG9uc2UkXG5dO1xuZXhwb3J0cy5Db3VudFRva2VucyQgPSBbOSwgbjAsIF9DVG8sXG4gICAgeyBbX2hdOiBbXCJQT1NUXCIsIFwiL21vZGVsL3ttb2RlbElkfS9jb3VudC10b2tlbnNcIiwgMjAwXSB9LCAoKSA9PiBleHBvcnRzLkNvdW50VG9rZW5zUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuQ291bnRUb2tlbnNSZXNwb25zZSRcbl07XG5leHBvcnRzLkdldEFzeW5jSW52b2tlJCA9IFs5LCBuMCwgX0dBSSxcbiAgICB7IFtfaF06IFtcIkdFVFwiLCBcIi9hc3luYy1pbnZva2Uve2ludm9jYXRpb25Bcm59XCIsIDIwMF0gfSwgKCkgPT4gZXhwb3J0cy5HZXRBc3luY0ludm9rZVJlcXVlc3QkLCAoKSA9PiBleHBvcnRzLkdldEFzeW5jSW52b2tlUmVzcG9uc2UkXG5dO1xuZXhwb3J0cy5JbnZva2VNb2RlbCQgPSBbOSwgbjAsIF9JTSxcbiAgICB7IFtfaF06IFtcIlBPU1RcIiwgXCIvbW9kZWwve21vZGVsSWR9L2ludm9rZVwiLCAyMDBdIH0sICgpID0+IGV4cG9ydHMuSW52b2tlTW9kZWxSZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5JbnZva2VNb2RlbFJlc3BvbnNlJFxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbSQgPSBbOSwgbjAsIF9JTVdCUyxcbiAgICB7IFtfaF06IFtcIlBPU1RcIiwgXCIvbW9kZWwve21vZGVsSWR9L2ludm9rZS13aXRoLWJpZGlyZWN0aW9uYWwtc3RyZWFtXCIsIDIwMF0gfSwgKCkgPT4gZXhwb3J0cy5JbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbVJlc3BvbnNlJFxuXTtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW0kID0gWzksIG4wLCBfSU1XUlMsXG4gICAgeyBbX2hdOiBbXCJQT1NUXCIsIFwiL21vZGVsL3ttb2RlbElkfS9pbnZva2Utd2l0aC1yZXNwb25zZS1zdHJlYW1cIiwgMjAwXSB9LCAoKSA9PiBleHBvcnRzLkludm9rZU1vZGVsV2l0aFJlc3BvbnNlU3RyZWFtUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1SZXNwb25zZSRcbl07XG5leHBvcnRzLkxpc3RBc3luY0ludm9rZXMkID0gWzksIG4wLCBfTEFJLFxuICAgIHsgW19oXTogW1wiR0VUXCIsIFwiL2FzeW5jLWludm9rZVwiLCAyMDBdIH0sICgpID0+IGV4cG9ydHMuTGlzdEFzeW5jSW52b2tlc1JlcXVlc3QkLCAoKSA9PiBleHBvcnRzLkxpc3RBc3luY0ludm9rZXNSZXNwb25zZSRcbl07XG5leHBvcnRzLlN0YXJ0QXN5bmNJbnZva2UkID0gWzksIG4wLCBfU0FJLFxuICAgIHsgW19oXTogW1wiUE9TVFwiLCBcIi9hc3luYy1pbnZva2VcIiwgMjAwXSB9LCAoKSA9PiBleHBvcnRzLlN0YXJ0QXN5bmNJbnZva2VSZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlUmVzcG9uc2UkXG5dO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRSdW50aW1lQ29uZmlnID0gdm9pZCAwO1xuY29uc3QgaHR0cEF1dGhTY2hlbWVzXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIik7XG5jb25zdCBwcm90b2NvbHNfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL3Byb3RvY29sc1wiKTtcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvcmVcIik7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuY29uc3QgdXJsX3BhcnNlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXJsLXBhcnNlclwiKTtcbmNvbnN0IHV0aWxfYmFzZTY0XzEgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWJhc2U2NFwiKTtcbmNvbnN0IHV0aWxfdXRmOF8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11dGY4XCIpO1xuY29uc3QgaHR0cEF1dGhTY2hlbWVQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyXCIpO1xuY29uc3QgZW5kcG9pbnRSZXNvbHZlcl8xID0gcmVxdWlyZShcIi4vZW5kcG9pbnQvZW5kcG9pbnRSZXNvbHZlclwiKTtcbmNvbnN0IHNjaGVtYXNfMF8xID0gcmVxdWlyZShcIi4vc2NoZW1hcy9zY2hlbWFzXzBcIik7XG5jb25zdCBnZXRSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAyMy0wOS0zMFwiLFxuICAgICAgICBiYXNlNjREZWNvZGVyOiBjb25maWc/LmJhc2U2NERlY29kZXIgPz8gdXRpbF9iYXNlNjRfMS5mcm9tQmFzZTY0LFxuICAgICAgICBiYXNlNjRFbmNvZGVyOiBjb25maWc/LmJhc2U2NEVuY29kZXIgPz8gdXRpbF9iYXNlNjRfMS50b0Jhc2U2NCxcbiAgICAgICAgZGlzYWJsZUhvc3RQcmVmaXg6IGNvbmZpZz8uZGlzYWJsZUhvc3RQcmVmaXggPz8gZmFsc2UsXG4gICAgICAgIGVuZHBvaW50UHJvdmlkZXI6IGNvbmZpZz8uZW5kcG9pbnRQcm92aWRlciA/PyBlbmRwb2ludFJlc29sdmVyXzEuZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIsXG4gICAgICAgIGV4dGVuc2lvbnM6IGNvbmZpZz8uZXh0ZW5zaW9ucyA/PyBbXSxcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVQcm92aWRlcjogY29uZmlnPy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyID8/IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXJfMS5kZWZhdWx0QmVkcm9ja1J1bnRpbWVIdHRwQXV0aFNjaGVtZVByb3ZpZGVyLFxuICAgICAgICBodHRwQXV0aFNjaGVtZXM6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVzID8/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwiYXdzLmF1dGgjc2lndjRcIiksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgaHR0cEF1dGhTY2hlbWVzXzEuQXdzU2RrU2lnVjRTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNodHRwQmVhcmVyQXV0aFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwic21pdGh5LmFwaSNodHRwQmVhcmVyQXV0aFwiKSxcbiAgICAgICAgICAgICAgICBzaWduZXI6IG5ldyBjb3JlXzEuSHR0cEJlYXJlckF1dGhTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGxvZ2dlcjogY29uZmlnPy5sb2dnZXIgPz8gbmV3IHNtaXRoeV9jbGllbnRfMS5Ob09wTG9nZ2VyKCksXG4gICAgICAgIHByb3RvY29sOiBjb25maWc/LnByb3RvY29sID8/IHByb3RvY29sc18xLkF3c1Jlc3RKc29uUHJvdG9jb2wsXG4gICAgICAgIHByb3RvY29sU2V0dGluZ3M6IGNvbmZpZz8ucHJvdG9jb2xTZXR0aW5ncyA/PyB7XG4gICAgICAgICAgICBkZWZhdWx0TmFtZXNwYWNlOiBcImNvbS5hbWF6b25hd3MuYmVkcm9ja3J1bnRpbWVcIixcbiAgICAgICAgICAgIGVycm9yVHlwZVJlZ2lzdHJpZXM6IHNjaGVtYXNfMF8xLmVycm9yVHlwZVJlZ2lzdHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjIwMjMtMDktMzBcIixcbiAgICAgICAgICAgIHNlcnZpY2VUYXJnZXQ6IFwiQW1hem9uQmVkcm9ja0Zyb250ZW5kU2VydmljZVwiLFxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlSWQ6IGNvbmZpZz8uc2VydmljZUlkID8/IFwiQmVkcm9jayBSdW50aW1lXCIsXG4gICAgICAgIHVybFBhcnNlcjogY29uZmlnPy51cmxQYXJzZXIgPz8gdXJsX3BhcnNlcl8xLnBhcnNlVXJsLFxuICAgICAgICB1dGY4RGVjb2RlcjogY29uZmlnPy51dGY4RGVjb2RlciA/PyB1dGlsX3V0ZjhfMS5mcm9tVXRmOCxcbiAgICAgICAgdXRmOEVuY29kZXI6IGNvbmZpZz8udXRmOEVuY29kZXIgPz8gdXRpbF91dGY4XzEudG9VdGY4LFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRSdW50aW1lQ29uZmlnID0gZ2V0UnVudGltZUNvbmZpZztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0UnVudGltZUNvbmZpZyA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBwYWNrYWdlX2pzb25fMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIikpO1xuY29uc3QgY2xpZW50XzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY29yZS9jbGllbnRcIik7XG5jb25zdCBodHRwQXV0aFNjaGVtZXNfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL2h0dHBBdXRoU2NoZW1lc1wiKTtcbmNvbnN0IGNyZWRlbnRpYWxfcHJvdmlkZXJfbm9kZV8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItbm9kZVwiKTtcbmNvbnN0IGV2ZW50c3RyZWFtX2hhbmRsZXJfbm9kZV8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL2V2ZW50c3RyZWFtLWhhbmRsZXItbm9kZVwiKTtcbmNvbnN0IHRva2VuX3Byb3ZpZGVyc18xID0gcmVxdWlyZShcIkBhd3Mtc2RrL3Rva2VuLXByb3ZpZGVyc1wiKTtcbmNvbnN0IHV0aWxfdXNlcl9hZ2VudF9ub2RlXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIik7XG5jb25zdCBjb25maWdfcmVzb2x2ZXJfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvbmZpZy1yZXNvbHZlclwiKTtcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvcmVcIik7XG5jb25zdCBldmVudHN0cmVhbV9zZXJkZV9ub2RlXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS1ub2RlXCIpO1xuY29uc3QgaGFzaF9ub2RlXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9oYXNoLW5vZGVcIik7XG5jb25zdCBtaWRkbGV3YXJlX3JldHJ5XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5XCIpO1xuY29uc3Qgbm9kZV9jb25maWdfcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCJAc21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyXCIpO1xuY29uc3Qgbm9kZV9odHRwX2hhbmRsZXJfMSA9IHJlcXVpcmUoXCJAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyXCIpO1xuY29uc3Qgc21pdGh5X2NsaWVudF8xID0gcmVxdWlyZShcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiKTtcbmNvbnN0IHV0aWxfYm9keV9sZW5ndGhfbm9kZV8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC1ib2R5LWxlbmd0aC1ub2RlXCIpO1xuY29uc3QgdXRpbF9kZWZhdWx0c19tb2RlX25vZGVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtZGVmYXVsdHMtbW9kZS1ub2RlXCIpO1xuY29uc3QgdXRpbF9yZXRyeV8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC1yZXRyeVwiKTtcbmNvbnN0IHJ1bnRpbWVDb25maWdfc2hhcmVkXzEgPSByZXF1aXJlKFwiLi9ydW50aW1lQ29uZmlnLnNoYXJlZFwiKTtcbmNvbnN0IGdldFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgKDAsIHNtaXRoeV9jbGllbnRfMS5lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uKShwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGRlZmF1bHRzTW9kZSA9ICgwLCB1dGlsX2RlZmF1bHRzX21vZGVfbm9kZV8xLnJlc29sdmVEZWZhdWx0c01vZGVDb25maWcpKGNvbmZpZyk7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyID0gKCkgPT4gZGVmYXVsdHNNb2RlKCkudGhlbihzbWl0aHlfY2xpZW50XzEubG9hZENvbmZpZ3NGb3JEZWZhdWx0TW9kZSk7XG4gICAgY29uc3QgY2xpZW50U2hhcmVkVmFsdWVzID0gKDAsIHJ1bnRpbWVDb25maWdfc2hhcmVkXzEuZ2V0UnVudGltZUNvbmZpZykoY29uZmlnKTtcbiAgICAoMCwgY2xpZW50XzEuZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbikocHJvY2Vzcy52ZXJzaW9uKTtcbiAgICBjb25zdCBsb2FkZXJDb25maWcgPSB7XG4gICAgICAgIHByb2ZpbGU6IGNvbmZpZz8ucHJvZmlsZSxcbiAgICAgICAgbG9nZ2VyOiBjbGllbnRTaGFyZWRWYWx1ZXMubG9nZ2VyLFxuICAgICAgICBzaWduaW5nTmFtZTogXCJiZWRyb2NrXCIsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jbGllbnRTaGFyZWRWYWx1ZXMsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgcnVudGltZTogXCJub2RlXCIsXG4gICAgICAgIGRlZmF1bHRzTW9kZSxcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IGNvbmZpZz8uYXV0aFNjaGVtZVByZWZlcmVuY2UgPz8gKDAsIG5vZGVfY29uZmlnX3Byb3ZpZGVyXzEubG9hZENvbmZpZykoaHR0cEF1dGhTY2hlbWVzXzEuTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgICAgIGJvZHlMZW5ndGhDaGVja2VyOiBjb25maWc/LmJvZHlMZW5ndGhDaGVja2VyID8/IHV0aWxfYm9keV9sZW5ndGhfbm9kZV8xLmNhbGN1bGF0ZUJvZHlMZW5ndGgsXG4gICAgICAgIGNyZWRlbnRpYWxEZWZhdWx0UHJvdmlkZXI6IGNvbmZpZz8uY3JlZGVudGlhbERlZmF1bHRQcm92aWRlciA/PyBjcmVkZW50aWFsX3Byb3ZpZGVyX25vZGVfMS5kZWZhdWx0UHJvdmlkZXIsXG4gICAgICAgIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogY29uZmlnPy5kZWZhdWx0VXNlckFnZW50UHJvdmlkZXIgPz8gKDAsIHV0aWxfdXNlcl9hZ2VudF9ub2RlXzEuY3JlYXRlRGVmYXVsdFVzZXJBZ2VudFByb3ZpZGVyKSh7IHNlcnZpY2VJZDogY2xpZW50U2hhcmVkVmFsdWVzLnNlcnZpY2VJZCwgY2xpZW50VmVyc2lvbjogcGFja2FnZV9qc29uXzEuZGVmYXVsdC52ZXJzaW9uIH0pLFxuICAgICAgICBldmVudFN0cmVhbVBheWxvYWRIYW5kbGVyUHJvdmlkZXI6IGNvbmZpZz8uZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlclByb3ZpZGVyID8/IGV2ZW50c3RyZWFtX2hhbmRsZXJfbm9kZV8xLmV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXJQcm92aWRlcixcbiAgICAgICAgZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyOiBjb25maWc/LmV2ZW50U3RyZWFtU2VyZGVQcm92aWRlciA/PyBldmVudHN0cmVhbV9zZXJkZV9ub2RlXzEuZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyLFxuICAgICAgICBodHRwQXV0aFNjaGVtZXM6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVzID8/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwiYXdzLmF1dGgjc2lndjRcIiksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgaHR0cEF1dGhTY2hlbWVzXzEuQXdzU2RrU2lnVjRTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNodHRwQmVhcmVyQXV0aFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwic21pdGh5LmFwaSNodHRwQmVhcmVyQXV0aFwiKSB8fCAoYXN5bmMgKGlkUHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCAoMCwgdG9rZW5fcHJvdmlkZXJzXzEuZnJvbUVudlNpZ25pbmdOYW1lKSh7IHNpZ25pbmdOYW1lOiBcImJlZHJvY2tcIiB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0ICgwLCB0b2tlbl9wcm92aWRlcnNfMS5ub2RlUHJvdmlkZXIpKGlkUHJvcHMpKGlkUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgY29yZV8xLkh0dHBCZWFyZXJBdXRoU2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtYXhBdHRlbXB0czogY29uZmlnPy5tYXhBdHRlbXB0cyA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKShtaWRkbGV3YXJlX3JldHJ5XzEuTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgY29uZmlnKSxcbiAgICAgICAgcmVnaW9uOiBjb25maWc/LnJlZ2lvbiA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKShjb25maWdfcmVzb2x2ZXJfMS5OT0RFX1JFR0lPTl9DT05GSUdfT1BUSU9OUywgeyAuLi5jb25maWdfcmVzb2x2ZXJfMS5OT0RFX1JFR0lPTl9DT05GSUdfRklMRV9PUFRJT05TLCAuLi5sb2FkZXJDb25maWcgfSksXG4gICAgICAgIHJlcXVlc3RIYW5kbGVyOiBub2RlX2h0dHBfaGFuZGxlcl8xLk5vZGVIdHRwMkhhbmRsZXIuY3JlYXRlKGNvbmZpZz8ucmVxdWVzdEhhbmRsZXIgPz8gKGFzeW5jICgpID0+ICh7XG4gICAgICAgICAgICAuLi5hd2FpdCBkZWZhdWx0Q29uZmlnUHJvdmlkZXIoKSxcbiAgICAgICAgICAgIGRpc2FibGVDb25jdXJyZW50U3RyZWFtczogdHJ1ZVxuICAgICAgICB9KSkpLFxuICAgICAgICByZXRyeU1vZGU6IGNvbmZpZz8ucmV0cnlNb2RlID8/XG4gICAgICAgICAgICAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKSh7XG4gICAgICAgICAgICAgICAgLi4ubWlkZGxld2FyZV9yZXRyeV8xLk5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBhc3luYyAoKSA9PiAoYXdhaXQgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKCkpLnJldHJ5TW9kZSB8fCB1dGlsX3JldHJ5XzEuREVGQVVMVF9SRVRSWV9NT0RFLFxuICAgICAgICAgICAgfSwgY29uZmlnKSxcbiAgICAgICAgc2hhMjU2OiBjb25maWc/LnNoYTI1NiA/PyBoYXNoX25vZGVfMS5IYXNoLmJpbmQobnVsbCwgXCJzaGEyNTZcIiksXG4gICAgICAgIHN0cmVhbUNvbGxlY3RvcjogY29uZmlnPy5zdHJlYW1Db2xsZWN0b3IgPz8gbm9kZV9odHRwX2hhbmRsZXJfMS5zdHJlYW1Db2xsZWN0b3IsXG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBjb25maWc/LnVzZUR1YWxzdGFja0VuZHBvaW50ID8/ICgwLCBub2RlX2NvbmZpZ19wcm92aWRlcl8xLmxvYWRDb25maWcpKGNvbmZpZ19yZXNvbHZlcl8xLk5PREVfVVNFX0RVQUxTVEFDS19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBjb25maWc/LnVzZUZpcHNFbmRwb2ludCA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKShjb25maWdfcmVzb2x2ZXJfMS5OT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICB1c2VyQWdlbnRBcHBJZDogY29uZmlnPy51c2VyQWdlbnRBcHBJZCA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKSh1dGlsX3VzZXJfYWdlbnRfbm9kZV8xLk5PREVfQVBQX0lEX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRSdW50aW1lQ29uZmlnID0gZ2V0UnVudGltZUNvbmZpZztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBtaWRkbGV3YXJlRXZlbnRzdHJlYW0gPSByZXF1aXJlKCdAYXdzLXNkay9taWRkbGV3YXJlLWV2ZW50c3RyZWFtJyk7XG52YXIgbWlkZGxld2FyZUhvc3RIZWFkZXIgPSByZXF1aXJlKCdAYXdzLXNkay9taWRkbGV3YXJlLWhvc3QtaGVhZGVyJyk7XG52YXIgbWlkZGxld2FyZUxvZ2dlciA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL21pZGRsZXdhcmUtbG9nZ2VyJyk7XG52YXIgbWlkZGxld2FyZVJlY3Vyc2lvbkRldGVjdGlvbiA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvbicpO1xudmFyIG1pZGRsZXdhcmVVc2VyQWdlbnQgPSByZXF1aXJlKCdAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnQnKTtcbnZhciBtaWRkbGV3YXJlV2Vic29ja2V0ID0gcmVxdWlyZSgnQGF3cy1zZGsvbWlkZGxld2FyZS13ZWJzb2NrZXQnKTtcbnZhciBjb25maWdSZXNvbHZlciA9IHJlcXVpcmUoJ0BzbWl0aHkvY29uZmlnLXJlc29sdmVyJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BzbWl0aHkvY29yZScpO1xudmFyIHNjaGVtYSA9IHJlcXVpcmUoJ0BzbWl0aHkvY29yZS9zY2hlbWEnKTtcbnZhciBldmVudHN0cmVhbVNlcmRlQ29uZmlnUmVzb2x2ZXIgPSByZXF1aXJlKCdAc21pdGh5L2V2ZW50c3RyZWFtLXNlcmRlLWNvbmZpZy1yZXNvbHZlcicpO1xudmFyIG1pZGRsZXdhcmVDb250ZW50TGVuZ3RoID0gcmVxdWlyZSgnQHNtaXRoeS9taWRkbGV3YXJlLWNvbnRlbnQtbGVuZ3RoJyk7XG52YXIgbWlkZGxld2FyZUVuZHBvaW50ID0gcmVxdWlyZSgnQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50Jyk7XG52YXIgbWlkZGxld2FyZVJldHJ5ID0gcmVxdWlyZSgnQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5Jyk7XG52YXIgc21pdGh5Q2xpZW50ID0gcmVxdWlyZSgnQHNtaXRoeS9zbWl0aHktY2xpZW50Jyk7XG52YXIgaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IHJlcXVpcmUoJy4vYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyJyk7XG52YXIgcnVudGltZUNvbmZpZyA9IHJlcXVpcmUoJy4vcnVudGltZUNvbmZpZycpO1xudmFyIHJlZ2lvbkNvbmZpZ1Jlc29sdmVyID0gcmVxdWlyZSgnQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlcicpO1xudmFyIHByb3RvY29sSHR0cCA9IHJlcXVpcmUoJ0BzbWl0aHkvcHJvdG9jb2wtaHR0cCcpO1xudmFyIHNjaGVtYXNfMCA9IHJlcXVpcmUoJy4vc2NoZW1hcy9zY2hlbWFzXzAnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuL21vZGVscy9lcnJvcnMnKTtcbnZhciBCZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24gPSByZXF1aXJlKCcuL21vZGVscy9CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb24nKTtcblxuY29uc3QgcmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycyA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICB1c2VEdWFsc3RhY2tFbmRwb2ludDogb3B0aW9ucy51c2VEdWFsc3RhY2tFbmRwb2ludCA/PyBmYWxzZSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBvcHRpb25zLnVzZUZpcHNFbmRwb2ludCA/PyBmYWxzZSxcbiAgICAgICAgZGVmYXVsdFNpZ25pbmdOYW1lOiBcImJlZHJvY2tcIixcbiAgICB9KTtcbn07XG5jb25zdCBjb21tb25QYXJhbXMgPSB7XG4gICAgVXNlRklQUzogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJ1c2VGaXBzRW5kcG9pbnRcIiB9LFxuICAgIEVuZHBvaW50OiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcImVuZHBvaW50XCIgfSxcbiAgICBSZWdpb246IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwicmVnaW9uXCIgfSxcbiAgICBVc2VEdWFsU3RhY2s6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwidXNlRHVhbHN0YWNrRW5kcG9pbnRcIiB9LFxufTtcblxuY29uc3QgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBfaHR0cEF1dGhTY2hlbWVzID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZXM7XG4gICAgbGV0IF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgIGxldCBfY3JlZGVudGlhbHMgPSBydW50aW1lQ29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIGxldCBfdG9rZW4gPSBydW50aW1lQ29uZmlnLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lKGh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9odHRwQXV0aFNjaGVtZXMuZmluZEluZGV4KChzY2hlbWUpID0+IHNjaGVtZS5zY2hlbWVJZCA9PT0gaHR0cEF1dGhTY2hlbWUuc2NoZW1lSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF9odHRwQXV0aFNjaGVtZXMucHVzaChodHRwQXV0aFNjaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnNwbGljZShpbmRleCwgMSwgaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SHR0cEF1dGhTY2hlbWVQcm92aWRlcihodHRwQXV0aFNjaGVtZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBfY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWRlbnRpYWxzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRUb2tlbih0b2tlbikge1xuICAgICAgICAgICAgX3Rva2VuID0gdG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90b2tlbjtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmNvbnN0IHJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWcuaHR0cEF1dGhTY2hlbWVzKCksXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyKCksXG4gICAgICAgIGNyZWRlbnRpYWxzOiBjb25maWcuY3JlZGVudGlhbHMoKSxcbiAgICAgICAgdG9rZW46IGNvbmZpZy50b2tlbigpLFxuICAgIH07XG59O1xuXG5jb25zdCByZXNvbHZlUnVudGltZUV4dGVuc2lvbnMgPSAocnVudGltZUNvbmZpZywgZXh0ZW5zaW9ucykgPT4ge1xuICAgIGNvbnN0IGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKHJlZ2lvbkNvbmZpZ1Jlc29sdmVyLmdldEF3c1JlZ2lvbkV4dGVuc2lvbkNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZyksIHNtaXRoeUNsaWVudC5nZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgcHJvdG9jb2xIdHRwLmdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpKTtcbiAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmNvbmZpZ3VyZShleHRlbnNpb25Db25maWd1cmF0aW9uKSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocnVudGltZUNvbmZpZywgcmVnaW9uQ29uZmlnUmVzb2x2ZXIucmVzb2x2ZUF3c1JlZ2lvbkV4dGVuc2lvbkNvbmZpZ3VyYXRpb24oZXh0ZW5zaW9uQ29uZmlndXJhdGlvbiksIHNtaXRoeUNsaWVudC5yZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWcoZXh0ZW5zaW9uQ29uZmlndXJhdGlvbiksIHByb3RvY29sSHR0cC5yZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbn07XG5cbmNsYXNzIEJlZHJvY2tSdW50aW1lQ2xpZW50IGV4dGVuZHMgc21pdGh5Q2xpZW50LkNsaWVudCB7XG4gICAgY29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKC4uLltjb25maWd1cmF0aW9uXSkge1xuICAgICAgICBjb25zdCBfY29uZmlnXzAgPSBydW50aW1lQ29uZmlnLmdldFJ1bnRpbWVDb25maWcoY29uZmlndXJhdGlvbiB8fCB7fSk7XG4gICAgICAgIHN1cGVyKF9jb25maWdfMCk7XG4gICAgICAgIHRoaXMuaW5pdENvbmZpZyA9IF9jb25maWdfMDtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18xID0gcmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycyhfY29uZmlnXzApO1xuICAgICAgICBjb25zdCBfY29uZmlnXzIgPSBtaWRkbGV3YXJlVXNlckFnZW50LnJlc29sdmVVc2VyQWdlbnRDb25maWcoX2NvbmZpZ18xKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18zID0gbWlkZGxld2FyZVJldHJ5LnJlc29sdmVSZXRyeUNvbmZpZyhfY29uZmlnXzIpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzQgPSBjb25maWdSZXNvbHZlci5yZXNvbHZlUmVnaW9uQ29uZmlnKF9jb25maWdfMyk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNSA9IG1pZGRsZXdhcmVIb3N0SGVhZGVyLnJlc29sdmVIb3N0SGVhZGVyQ29uZmlnKF9jb25maWdfNCk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNiA9IG1pZGRsZXdhcmVFbmRwb2ludC5yZXNvbHZlRW5kcG9pbnRDb25maWcoX2NvbmZpZ181KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ183ID0gZXZlbnRzdHJlYW1TZXJkZUNvbmZpZ1Jlc29sdmVyLnJlc29sdmVFdmVudFN0cmVhbVNlcmRlQ29uZmlnKF9jb25maWdfNik7XG4gICAgICAgIGNvbnN0IF9jb25maWdfOCA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIucmVzb2x2ZUh0dHBBdXRoU2NoZW1lQ29uZmlnKF9jb25maWdfNyk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfOSA9IG1pZGRsZXdhcmVFdmVudHN0cmVhbS5yZXNvbHZlRXZlbnRTdHJlYW1Db25maWcoX2NvbmZpZ184KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18xMCA9IG1pZGRsZXdhcmVXZWJzb2NrZXQucmVzb2x2ZVdlYlNvY2tldENvbmZpZyhfY29uZmlnXzkpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzExID0gcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zKF9jb25maWdfMTAsIGNvbmZpZ3VyYXRpb24/LmV4dGVuc2lvbnMgfHwgW10pO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9jb25maWdfMTE7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShzY2hlbWEuZ2V0U2NoZW1hU2VyZGVQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKG1pZGRsZXdhcmVVc2VyQWdlbnQuZ2V0VXNlckFnZW50UGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShtaWRkbGV3YXJlUmV0cnkuZ2V0UmV0cnlQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKG1pZGRsZXdhcmVDb250ZW50TGVuZ3RoLmdldENvbnRlbnRMZW5ndGhQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKG1pZGRsZXdhcmVIb3N0SGVhZGVyLmdldEhvc3RIZWFkZXJQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKG1pZGRsZXdhcmVMb2dnZXIuZ2V0TG9nZ2VyUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShtaWRkbGV3YXJlUmVjdXJzaW9uRGV0ZWN0aW9uLmdldFJlY3Vyc2lvbkRldGVjdGlvblBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoY29yZS5nZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbih0aGlzLmNvbmZpZywge1xuICAgICAgICAgICAgaHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXI6IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIuZGVmYXVsdEJlZHJvY2tSdW50aW1lSHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIsXG4gICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyQ29uZmlnUHJvdmlkZXI6IGFzeW5jIChjb25maWcpID0+IG5ldyBjb3JlLkRlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnKHtcbiAgICAgICAgICAgICAgICBcImF3cy5hdXRoI3NpZ3Y0XCI6IGNvbmZpZy5jcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBcInNtaXRoeS5hcGkjaHR0cEJlYXJlckF1dGhcIjogY29uZmlnLnRva2VuLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGNvcmUuZ2V0SHR0cFNpZ25pbmdQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuY2xhc3MgQXBwbHlHdWFyZHJhaWxDb21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBbWF6b25CZWRyb2NrRnJvbnRlbmRTZXJ2aWNlXCIsIFwiQXBwbHlHdWFyZHJhaWxcIiwge30pXG4gICAgLm4oXCJCZWRyb2NrUnVudGltZUNsaWVudFwiLCBcIkFwcGx5R3VhcmRyYWlsQ29tbWFuZFwiKVxuICAgIC5zYyhzY2hlbWFzXzAuQXBwbHlHdWFyZHJhaWwkKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY2xhc3MgQ29udmVyc2VDb21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBbWF6b25CZWRyb2NrRnJvbnRlbmRTZXJ2aWNlXCIsIFwiQ29udmVyc2VcIiwge30pXG4gICAgLm4oXCJCZWRyb2NrUnVudGltZUNsaWVudFwiLCBcIkNvbnZlcnNlQ29tbWFuZFwiKVxuICAgIC5zYyhzY2hlbWFzXzAuQ29udmVyc2UkKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY2xhc3MgQ29udmVyc2VTdHJlYW1Db21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBbWF6b25CZWRyb2NrRnJvbnRlbmRTZXJ2aWNlXCIsIFwiQ29udmVyc2VTdHJlYW1cIiwge1xuICAgIGV2ZW50U3RyZWFtOiB7XG4gICAgICAgIG91dHB1dDogdHJ1ZSxcbiAgICB9LFxufSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiQ29udmVyc2VTdHJlYW1Db21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5Db252ZXJzZVN0cmVhbSQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBDb3VudFRva2Vuc0NvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChjb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFtYXpvbkJlZHJvY2tGcm9udGVuZFNlcnZpY2VcIiwgXCJDb3VudFRva2Vuc1wiLCB7fSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiQ291bnRUb2tlbnNDb21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5Db3VudFRva2VucyQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBHZXRBc3luY0ludm9rZUNvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChjb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFtYXpvbkJlZHJvY2tGcm9udGVuZFNlcnZpY2VcIiwgXCJHZXRBc3luY0ludm9rZVwiLCB7fSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiR2V0QXN5bmNJbnZva2VDb21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5HZXRBc3luY0ludm9rZSQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBJbnZva2VNb2RlbENvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChjb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFtYXpvbkJlZHJvY2tGcm9udGVuZFNlcnZpY2VcIiwgXCJJbnZva2VNb2RlbFwiLCB7fSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiSW52b2tlTW9kZWxDb21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5JbnZva2VNb2RlbCQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBJbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtQ29tbWFuZCBleHRlbmRzIHNtaXRoeUNsaWVudC5Db21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKGNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbXG4gICAgICAgIG1pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSksXG4gICAgICAgIG1pZGRsZXdhcmVFdmVudHN0cmVhbS5nZXRFdmVudFN0cmVhbVBsdWdpbihjb25maWcpLFxuICAgICAgICBtaWRkbGV3YXJlV2Vic29ja2V0LmdldFdlYlNvY2tldFBsdWdpbihjb25maWcsIHtcbiAgICAgICAgICAgIGhlYWRlclByZWZpeDogJ3gtYW16LWJlZHJvY2stJyxcbiAgICAgICAgfSksXG4gICAgXTtcbn0pXG4gICAgLnMoXCJBbWF6b25CZWRyb2NrRnJvbnRlbmRTZXJ2aWNlXCIsIFwiSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbVwiLCB7XG4gICAgZXZlbnRTdHJlYW06IHtcbiAgICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICAgIG91dHB1dDogdHJ1ZSxcbiAgICB9LFxufSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbUNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLkludm9rZU1vZGVsV2l0aEJpZGlyZWN0aW9uYWxTdHJlYW0kKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY2xhc3MgSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1Db21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBbWF6b25CZWRyb2NrRnJvbnRlbmRTZXJ2aWNlXCIsIFwiSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1cIiwge1xuICAgIGV2ZW50U3RyZWFtOiB7XG4gICAgICAgIG91dHB1dDogdHJ1ZSxcbiAgICB9LFxufSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1Db21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5JbnZva2VNb2RlbFdpdGhSZXNwb25zZVN0cmVhbSQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBMaXN0QXN5bmNJbnZva2VzQ29tbWFuZCBleHRlbmRzIHNtaXRoeUNsaWVudC5Db21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKGNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbbWlkZGxld2FyZUVuZHBvaW50LmdldEVuZHBvaW50UGx1Z2luKGNvbmZpZywgQ29tbWFuZC5nZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpKV07XG59KVxuICAgIC5zKFwiQW1hem9uQmVkcm9ja0Zyb250ZW5kU2VydmljZVwiLCBcIkxpc3RBc3luY0ludm9rZXNcIiwge30pXG4gICAgLm4oXCJCZWRyb2NrUnVudGltZUNsaWVudFwiLCBcIkxpc3RBc3luY0ludm9rZXNDb21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5MaXN0QXN5bmNJbnZva2VzJClcbiAgICAuYnVpbGQoKSB7XG59XG5cbmNsYXNzIFN0YXJ0QXN5bmNJbnZva2VDb21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBbWF6b25CZWRyb2NrRnJvbnRlbmRTZXJ2aWNlXCIsIFwiU3RhcnRBc3luY0ludm9rZVwiLCB7fSlcbiAgICAubihcIkJlZHJvY2tSdW50aW1lQ2xpZW50XCIsIFwiU3RhcnRBc3luY0ludm9rZUNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLlN0YXJ0QXN5bmNJbnZva2UkKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY29uc3QgcGFnaW5hdGVMaXN0QXN5bmNJbnZva2VzID0gY29yZS5jcmVhdGVQYWdpbmF0b3IoQmVkcm9ja1J1bnRpbWVDbGllbnQsIExpc3RBc3luY0ludm9rZXNDb21tYW5kLCBcIm5leHRUb2tlblwiLCBcIm5leHRUb2tlblwiLCBcIm1heFJlc3VsdHNcIik7XG5cbmNvbnN0IGNvbW1hbmRzID0ge1xuICAgIEFwcGx5R3VhcmRyYWlsQ29tbWFuZCxcbiAgICBDb252ZXJzZUNvbW1hbmQsXG4gICAgQ29udmVyc2VTdHJlYW1Db21tYW5kLFxuICAgIENvdW50VG9rZW5zQ29tbWFuZCxcbiAgICBHZXRBc3luY0ludm9rZUNvbW1hbmQsXG4gICAgSW52b2tlTW9kZWxDb21tYW5kLFxuICAgIEludm9rZU1vZGVsV2l0aEJpZGlyZWN0aW9uYWxTdHJlYW1Db21tYW5kLFxuICAgIEludm9rZU1vZGVsV2l0aFJlc3BvbnNlU3RyZWFtQ29tbWFuZCxcbiAgICBMaXN0QXN5bmNJbnZva2VzQ29tbWFuZCxcbiAgICBTdGFydEFzeW5jSW52b2tlQ29tbWFuZCxcbn07XG5jb25zdCBwYWdpbmF0b3JzID0ge1xuICAgIHBhZ2luYXRlTGlzdEFzeW5jSW52b2tlcyxcbn07XG5jbGFzcyBCZWRyb2NrUnVudGltZSBleHRlbmRzIEJlZHJvY2tSdW50aW1lQ2xpZW50IHtcbn1cbnNtaXRoeUNsaWVudC5jcmVhdGVBZ2dyZWdhdGVkQ2xpZW50KGNvbW1hbmRzLCBCZWRyb2NrUnVudGltZSwgeyBwYWdpbmF0b3JzIH0pO1xuXG5jb25zdCBBc3luY0ludm9rZVN0YXR1cyA9IHtcbiAgICBDT01QTEVURUQ6IFwiQ29tcGxldGVkXCIsXG4gICAgRkFJTEVEOiBcIkZhaWxlZFwiLFxuICAgIElOX1BST0dSRVNTOiBcIkluUHJvZ3Jlc3NcIixcbn07XG5jb25zdCBTb3J0QXN5bmNJbnZvY2F0aW9uQnkgPSB7XG4gICAgU1VCTUlTU0lPTl9USU1FOiBcIlN1Ym1pc3Npb25UaW1lXCIsXG59O1xuY29uc3QgU29ydE9yZGVyID0ge1xuICAgIEFTQ0VORElORzogXCJBc2NlbmRpbmdcIixcbiAgICBERVNDRU5ESU5HOiBcIkRlc2NlbmRpbmdcIixcbn07XG5jb25zdCBHdWFyZHJhaWxJbWFnZUZvcm1hdCA9IHtcbiAgICBKUEVHOiBcImpwZWdcIixcbiAgICBQTkc6IFwicG5nXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsQ29udGVudFF1YWxpZmllciA9IHtcbiAgICBHUk9VTkRJTkdfU09VUkNFOiBcImdyb3VuZGluZ19zb3VyY2VcIixcbiAgICBHVUFSRF9DT05URU5UOiBcImd1YXJkX2NvbnRlbnRcIixcbiAgICBRVUVSWTogXCJxdWVyeVwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbE91dHB1dFNjb3BlID0ge1xuICAgIEZVTEw6IFwiRlVMTFwiLFxuICAgIElOVEVSVkVOVElPTlM6IFwiSU5URVJWRU5USU9OU1wiLFxufTtcbmNvbnN0IEd1YXJkcmFpbENvbnRlbnRTb3VyY2UgPSB7XG4gICAgSU5QVVQ6IFwiSU5QVVRcIixcbiAgICBPVVRQVVQ6IFwiT1VUUFVUXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsQWN0aW9uID0ge1xuICAgIEdVQVJEUkFJTF9JTlRFUlZFTkVEOiBcIkdVQVJEUkFJTF9JTlRFUlZFTkVEXCIsXG4gICAgTk9ORTogXCJOT05FXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsT3JpZ2luID0ge1xuICAgIEFDQ09VTlRfRU5GT1JDRUQ6IFwiQUNDT1VOVF9FTkZPUkNFRFwiLFxuICAgIE9SR0FOSVpBVElPTl9FTkZPUkNFRDogXCJPUkdBTklaQVRJT05fRU5GT1JDRURcIixcbiAgICBSRVFVRVNUOiBcIlJFUVVFU1RcIixcbn07XG5jb25zdCBHdWFyZHJhaWxPd25lcnNoaXAgPSB7XG4gICAgQ1JPU1NfQUNDT1VOVDogXCJDUk9TU19BQ0NPVU5UXCIsXG4gICAgU0VMRjogXCJTRUxGXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nTG9naWNXYXJuaW5nVHlwZSA9IHtcbiAgICBBTFdBWVNfRkFMU0U6IFwiQUxXQVlTX0ZBTFNFXCIsXG4gICAgQUxXQVlTX1RSVUU6IFwiQUxXQVlTX1RSVUVcIixcbn07XG5jb25zdCBHdWFyZHJhaWxDb250ZW50UG9saWN5QWN0aW9uID0ge1xuICAgIEJMT0NLRUQ6IFwiQkxPQ0tFRFwiLFxuICAgIE5PTkU6IFwiTk9ORVwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbENvbnRlbnRGaWx0ZXJDb25maWRlbmNlID0ge1xuICAgIEhJR0g6IFwiSElHSFwiLFxuICAgIExPVzogXCJMT1dcIixcbiAgICBNRURJVU06IFwiTUVESVVNXCIsXG4gICAgTk9ORTogXCJOT05FXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsQ29udGVudEZpbHRlclN0cmVuZ3RoID0ge1xuICAgIEhJR0g6IFwiSElHSFwiLFxuICAgIExPVzogXCJMT1dcIixcbiAgICBNRURJVU06IFwiTUVESVVNXCIsXG4gICAgTk9ORTogXCJOT05FXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsQ29udGVudEZpbHRlclR5cGUgPSB7XG4gICAgSEFURTogXCJIQVRFXCIsXG4gICAgSU5TVUxUUzogXCJJTlNVTFRTXCIsXG4gICAgTUlTQ09ORFVDVDogXCJNSVNDT05EVUNUXCIsXG4gICAgUFJPTVBUX0FUVEFDSzogXCJQUk9NUFRfQVRUQUNLXCIsXG4gICAgU0VYVUFMOiBcIlNFWFVBTFwiLFxuICAgIFZJT0xFTkNFOiBcIlZJT0xFTkNFXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ1BvbGljeUFjdGlvbiA9IHtcbiAgICBCTE9DS0VEOiBcIkJMT0NLRURcIixcbiAgICBOT05FOiBcIk5PTkVcIixcbn07XG5jb25zdCBHdWFyZHJhaWxDb250ZXh0dWFsR3JvdW5kaW5nRmlsdGVyVHlwZSA9IHtcbiAgICBHUk9VTkRJTkc6IFwiR1JPVU5ESU5HXCIsXG4gICAgUkVMRVZBTkNFOiBcIlJFTEVWQU5DRVwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbFNlbnNpdGl2ZUluZm9ybWF0aW9uUG9saWN5QWN0aW9uID0ge1xuICAgIEFOT05ZTUlaRUQ6IFwiQU5PTllNSVpFRFwiLFxuICAgIEJMT0NLRUQ6IFwiQkxPQ0tFRFwiLFxuICAgIE5PTkU6IFwiTk9ORVwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbFBpaUVudGl0eVR5cGUgPSB7XG4gICAgQUREUkVTUzogXCJBRERSRVNTXCIsXG4gICAgQUdFOiBcIkFHRVwiLFxuICAgIEFXU19BQ0NFU1NfS0VZOiBcIkFXU19BQ0NFU1NfS0VZXCIsXG4gICAgQVdTX1NFQ1JFVF9LRVk6IFwiQVdTX1NFQ1JFVF9LRVlcIixcbiAgICBDQV9IRUFMVEhfTlVNQkVSOiBcIkNBX0hFQUxUSF9OVU1CRVJcIixcbiAgICBDQV9TT0NJQUxfSU5TVVJBTkNFX05VTUJFUjogXCJDQV9TT0NJQUxfSU5TVVJBTkNFX05VTUJFUlwiLFxuICAgIENSRURJVF9ERUJJVF9DQVJEX0NWVjogXCJDUkVESVRfREVCSVRfQ0FSRF9DVlZcIixcbiAgICBDUkVESVRfREVCSVRfQ0FSRF9FWFBJUlk6IFwiQ1JFRElUX0RFQklUX0NBUkRfRVhQSVJZXCIsXG4gICAgQ1JFRElUX0RFQklUX0NBUkRfTlVNQkVSOiBcIkNSRURJVF9ERUJJVF9DQVJEX05VTUJFUlwiLFxuICAgIERSSVZFUl9JRDogXCJEUklWRVJfSURcIixcbiAgICBFTUFJTDogXCJFTUFJTFwiLFxuICAgIElOVEVSTkFUSU9OQUxfQkFOS19BQ0NPVU5UX05VTUJFUjogXCJJTlRFUk5BVElPTkFMX0JBTktfQUNDT1VOVF9OVU1CRVJcIixcbiAgICBJUF9BRERSRVNTOiBcIklQX0FERFJFU1NcIixcbiAgICBMSUNFTlNFX1BMQVRFOiBcIkxJQ0VOU0VfUExBVEVcIixcbiAgICBNQUNfQUREUkVTUzogXCJNQUNfQUREUkVTU1wiLFxuICAgIE5BTUU6IFwiTkFNRVwiLFxuICAgIFBBU1NXT1JEOiBcIlBBU1NXT1JEXCIsXG4gICAgUEhPTkU6IFwiUEhPTkVcIixcbiAgICBQSU46IFwiUElOXCIsXG4gICAgU1dJRlRfQ09ERTogXCJTV0lGVF9DT0RFXCIsXG4gICAgVUtfTkFUSU9OQUxfSEVBTFRIX1NFUlZJQ0VfTlVNQkVSOiBcIlVLX05BVElPTkFMX0hFQUxUSF9TRVJWSUNFX05VTUJFUlwiLFxuICAgIFVLX05BVElPTkFMX0lOU1VSQU5DRV9OVU1CRVI6IFwiVUtfTkFUSU9OQUxfSU5TVVJBTkNFX05VTUJFUlwiLFxuICAgIFVLX1VOSVFVRV9UQVhQQVlFUl9SRUZFUkVOQ0VfTlVNQkVSOiBcIlVLX1VOSVFVRV9UQVhQQVlFUl9SRUZFUkVOQ0VfTlVNQkVSXCIsXG4gICAgVVJMOiBcIlVSTFwiLFxuICAgIFVTRVJOQU1FOiBcIlVTRVJOQU1FXCIsXG4gICAgVVNfQkFOS19BQ0NPVU5UX05VTUJFUjogXCJVU19CQU5LX0FDQ09VTlRfTlVNQkVSXCIsXG4gICAgVVNfQkFOS19ST1VUSU5HX05VTUJFUjogXCJVU19CQU5LX1JPVVRJTkdfTlVNQkVSXCIsXG4gICAgVVNfSU5ESVZJRFVBTF9UQVhfSURFTlRJRklDQVRJT05fTlVNQkVSOiBcIlVTX0lORElWSURVQUxfVEFYX0lERU5USUZJQ0FUSU9OX05VTUJFUlwiLFxuICAgIFVTX1BBU1NQT1JUX05VTUJFUjogXCJVU19QQVNTUE9SVF9OVU1CRVJcIixcbiAgICBVU19TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiBcIlVTX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVJcIixcbiAgICBWRUhJQ0xFX0lERU5USUZJQ0FUSU9OX05VTUJFUjogXCJWRUhJQ0xFX0lERU5USUZJQ0FUSU9OX05VTUJFUlwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbFRvcGljUG9saWN5QWN0aW9uID0ge1xuICAgIEJMT0NLRUQ6IFwiQkxPQ0tFRFwiLFxuICAgIE5PTkU6IFwiTk9ORVwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbFRvcGljVHlwZSA9IHtcbiAgICBERU5ZOiBcIkRFTllcIixcbn07XG5jb25zdCBHdWFyZHJhaWxXb3JkUG9saWN5QWN0aW9uID0ge1xuICAgIEJMT0NLRUQ6IFwiQkxPQ0tFRFwiLFxuICAgIE5PTkU6IFwiTk9ORVwiLFxufTtcbmNvbnN0IEd1YXJkcmFpbE1hbmFnZWRXb3JkVHlwZSA9IHtcbiAgICBQUk9GQU5JVFk6IFwiUFJPRkFOSVRZXCIsXG59O1xuY29uc3QgR3VhcmRyYWlsVHJhY2UgPSB7XG4gICAgRElTQUJMRUQ6IFwiZGlzYWJsZWRcIixcbiAgICBFTkFCTEVEOiBcImVuYWJsZWRcIixcbiAgICBFTkFCTEVEX0ZVTEw6IFwiZW5hYmxlZF9mdWxsXCIsXG59O1xuY29uc3QgQXVkaW9Gb3JtYXQgPSB7XG4gICAgQUFDOiBcImFhY1wiLFxuICAgIEZMQUM6IFwiZmxhY1wiLFxuICAgIE00QTogXCJtNGFcIixcbiAgICBNS0E6IFwibWthXCIsXG4gICAgTUtWOiBcIm1rdlwiLFxuICAgIE1QMzogXCJtcDNcIixcbiAgICBNUDQ6IFwibXA0XCIsXG4gICAgTVBFRzogXCJtcGVnXCIsXG4gICAgTVBHQTogXCJtcGdhXCIsXG4gICAgT0dHOiBcIm9nZ1wiLFxuICAgIE9QVVM6IFwib3B1c1wiLFxuICAgIFBDTTogXCJwY21cIixcbiAgICBXQVY6IFwid2F2XCIsXG4gICAgV0VCTTogXCJ3ZWJtXCIsXG4gICAgWF9BQUM6IFwieC1hYWNcIixcbn07XG5jb25zdCBDYWNoZVRUTCA9IHtcbiAgICBGSVZFX01JTlVURVM6IFwiNW1cIixcbiAgICBPTkVfSE9VUjogXCIxaFwiLFxufTtcbmNvbnN0IENhY2hlUG9pbnRUeXBlID0ge1xuICAgIERFRkFVTFQ6IFwiZGVmYXVsdFwiLFxufTtcbmNvbnN0IERvY3VtZW50Rm9ybWF0ID0ge1xuICAgIENTVjogXCJjc3ZcIixcbiAgICBET0M6IFwiZG9jXCIsXG4gICAgRE9DWDogXCJkb2N4XCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgTUQ6IFwibWRcIixcbiAgICBQREY6IFwicGRmXCIsXG4gICAgVFhUOiBcInR4dFwiLFxuICAgIFhMUzogXCJ4bHNcIixcbiAgICBYTFNYOiBcInhsc3hcIixcbn07XG5jb25zdCBHdWFyZHJhaWxDb252ZXJzZUltYWdlRm9ybWF0ID0ge1xuICAgIEpQRUc6IFwianBlZ1wiLFxuICAgIFBORzogXCJwbmdcIixcbn07XG5jb25zdCBHdWFyZHJhaWxDb252ZXJzZUNvbnRlbnRRdWFsaWZpZXIgPSB7XG4gICAgR1JPVU5ESU5HX1NPVVJDRTogXCJncm91bmRpbmdfc291cmNlXCIsXG4gICAgR1VBUkRfQ09OVEVOVDogXCJndWFyZF9jb250ZW50XCIsXG4gICAgUVVFUlk6IFwicXVlcnlcIixcbn07XG5jb25zdCBJbWFnZUZvcm1hdCA9IHtcbiAgICBHSUY6IFwiZ2lmXCIsXG4gICAgSlBFRzogXCJqcGVnXCIsXG4gICAgUE5HOiBcInBuZ1wiLFxuICAgIFdFQlA6IFwid2VicFwiLFxufTtcbmNvbnN0IFZpZGVvRm9ybWF0ID0ge1xuICAgIEZMVjogXCJmbHZcIixcbiAgICBNS1Y6IFwibWt2XCIsXG4gICAgTU9WOiBcIm1vdlwiLFxuICAgIE1QNDogXCJtcDRcIixcbiAgICBNUEVHOiBcIm1wZWdcIixcbiAgICBNUEc6IFwibXBnXCIsXG4gICAgVEhSRUVfR1A6IFwidGhyZWVfZ3BcIixcbiAgICBXRUJNOiBcIndlYm1cIixcbiAgICBXTVY6IFwid212XCIsXG59O1xuY29uc3QgVG9vbFJlc3VsdFN0YXR1cyA9IHtcbiAgICBFUlJPUjogXCJlcnJvclwiLFxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxufTtcbmNvbnN0IFRvb2xVc2VUeXBlID0ge1xuICAgIFNFUlZFUl9UT09MX1VTRTogXCJzZXJ2ZXJfdG9vbF91c2VcIixcbn07XG5jb25zdCBDb252ZXJzYXRpb25Sb2xlID0ge1xuICAgIEFTU0lTVEFOVDogXCJhc3Npc3RhbnRcIixcbiAgICBVU0VSOiBcInVzZXJcIixcbn07XG5jb25zdCBPdXRwdXRGb3JtYXRUeXBlID0ge1xuICAgIEpTT05fU0NIRU1BOiBcImpzb25fc2NoZW1hXCIsXG59O1xuY29uc3QgUGVyZm9ybWFuY2VDb25maWdMYXRlbmN5ID0ge1xuICAgIE9QVElNSVpFRDogXCJvcHRpbWl6ZWRcIixcbiAgICBTVEFOREFSRDogXCJzdGFuZGFyZFwiLFxufTtcbmNvbnN0IFNlcnZpY2VUaWVyVHlwZSA9IHtcbiAgICBERUZBVUxUOiBcImRlZmF1bHRcIixcbiAgICBGTEVYOiBcImZsZXhcIixcbiAgICBQUklPUklUWTogXCJwcmlvcml0eVwiLFxuICAgIFJFU0VSVkVEOiBcInJlc2VydmVkXCIsXG59O1xuY29uc3QgU3RvcFJlYXNvbiA9IHtcbiAgICBDT05URU5UX0ZJTFRFUkVEOiBcImNvbnRlbnRfZmlsdGVyZWRcIixcbiAgICBFTkRfVFVSTjogXCJlbmRfdHVyblwiLFxuICAgIEdVQVJEUkFJTF9JTlRFUlZFTkVEOiBcImd1YXJkcmFpbF9pbnRlcnZlbmVkXCIsXG4gICAgTUFMRk9STUVEX01PREVMX09VVFBVVDogXCJtYWxmb3JtZWRfbW9kZWxfb3V0cHV0XCIsXG4gICAgTUFMRk9STUVEX1RPT0xfVVNFOiBcIm1hbGZvcm1lZF90b29sX3VzZVwiLFxuICAgIE1BWF9UT0tFTlM6IFwibWF4X3Rva2Vuc1wiLFxuICAgIE1PREVMX0NPTlRFWFRfV0lORE9XX0VYQ0VFREVEOiBcIm1vZGVsX2NvbnRleHRfd2luZG93X2V4Y2VlZGVkXCIsXG4gICAgU1RPUF9TRVFVRU5DRTogXCJzdG9wX3NlcXVlbmNlXCIsXG4gICAgVE9PTF9VU0U6IFwidG9vbF91c2VcIixcbn07XG5jb25zdCBHdWFyZHJhaWxTdHJlYW1Qcm9jZXNzaW5nTW9kZSA9IHtcbiAgICBBU1lOQzogXCJhc3luY1wiLFxuICAgIFNZTkM6IFwic3luY1wiLFxufTtcbmNvbnN0IFRyYWNlID0ge1xuICAgIERJU0FCTEVEOiBcIkRJU0FCTEVEXCIsXG4gICAgRU5BQkxFRDogXCJFTkFCTEVEXCIsXG4gICAgRU5BQkxFRF9GVUxMOiBcIkVOQUJMRURfRlVMTFwiLFxufTtcblxuZXhwb3J0cy4kQ29tbWFuZCA9IHNtaXRoeUNsaWVudC5Db21tYW5kO1xuZXhwb3J0cy5fX0NsaWVudCA9IHNtaXRoeUNsaWVudC5DbGllbnQ7XG5leHBvcnRzLkJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbiA9IEJlZHJvY2tSdW50aW1lU2VydmljZUV4Y2VwdGlvbi5CZWRyb2NrUnVudGltZVNlcnZpY2VFeGNlcHRpb247XG5leHBvcnRzLkFwcGx5R3VhcmRyYWlsQ29tbWFuZCA9IEFwcGx5R3VhcmRyYWlsQ29tbWFuZDtcbmV4cG9ydHMuQXN5bmNJbnZva2VTdGF0dXMgPSBBc3luY0ludm9rZVN0YXR1cztcbmV4cG9ydHMuQXVkaW9Gb3JtYXQgPSBBdWRpb0Zvcm1hdDtcbmV4cG9ydHMuQmVkcm9ja1J1bnRpbWUgPSBCZWRyb2NrUnVudGltZTtcbmV4cG9ydHMuQmVkcm9ja1J1bnRpbWVDbGllbnQgPSBCZWRyb2NrUnVudGltZUNsaWVudDtcbmV4cG9ydHMuQ2FjaGVQb2ludFR5cGUgPSBDYWNoZVBvaW50VHlwZTtcbmV4cG9ydHMuQ2FjaGVUVEwgPSBDYWNoZVRUTDtcbmV4cG9ydHMuQ29udmVyc2F0aW9uUm9sZSA9IENvbnZlcnNhdGlvblJvbGU7XG5leHBvcnRzLkNvbnZlcnNlQ29tbWFuZCA9IENvbnZlcnNlQ29tbWFuZDtcbmV4cG9ydHMuQ29udmVyc2VTdHJlYW1Db21tYW5kID0gQ29udmVyc2VTdHJlYW1Db21tYW5kO1xuZXhwb3J0cy5Db3VudFRva2Vuc0NvbW1hbmQgPSBDb3VudFRva2Vuc0NvbW1hbmQ7XG5leHBvcnRzLkRvY3VtZW50Rm9ybWF0ID0gRG9jdW1lbnRGb3JtYXQ7XG5leHBvcnRzLkdldEFzeW5jSW52b2tlQ29tbWFuZCA9IEdldEFzeW5jSW52b2tlQ29tbWFuZDtcbmV4cG9ydHMuR3VhcmRyYWlsQWN0aW9uID0gR3VhcmRyYWlsQWN0aW9uO1xuZXhwb3J0cy5HdWFyZHJhaWxBdXRvbWF0ZWRSZWFzb25pbmdMb2dpY1dhcm5pbmdUeXBlID0gR3VhcmRyYWlsQXV0b21hdGVkUmVhc29uaW5nTG9naWNXYXJuaW5nVHlwZTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udGVudEZpbHRlckNvbmZpZGVuY2UgPSBHdWFyZHJhaWxDb250ZW50RmlsdGVyQ29uZmlkZW5jZTtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udGVudEZpbHRlclN0cmVuZ3RoID0gR3VhcmRyYWlsQ29udGVudEZpbHRlclN0cmVuZ3RoO1xuZXhwb3J0cy5HdWFyZHJhaWxDb250ZW50RmlsdGVyVHlwZSA9IEd1YXJkcmFpbENvbnRlbnRGaWx0ZXJUeXBlO1xuZXhwb3J0cy5HdWFyZHJhaWxDb250ZW50UG9saWN5QWN0aW9uID0gR3VhcmRyYWlsQ29udGVudFBvbGljeUFjdGlvbjtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udGVudFF1YWxpZmllciA9IEd1YXJkcmFpbENvbnRlbnRRdWFsaWZpZXI7XG5leHBvcnRzLkd1YXJkcmFpbENvbnRlbnRTb3VyY2UgPSBHdWFyZHJhaWxDb250ZW50U291cmNlO1xuZXhwb3J0cy5HdWFyZHJhaWxDb250ZXh0dWFsR3JvdW5kaW5nRmlsdGVyVHlwZSA9IEd1YXJkcmFpbENvbnRleHR1YWxHcm91bmRpbmdGaWx0ZXJUeXBlO1xuZXhwb3J0cy5HdWFyZHJhaWxDb250ZXh0dWFsR3JvdW5kaW5nUG9saWN5QWN0aW9uID0gR3VhcmRyYWlsQ29udGV4dHVhbEdyb3VuZGluZ1BvbGljeUFjdGlvbjtcbmV4cG9ydHMuR3VhcmRyYWlsQ29udmVyc2VDb250ZW50UXVhbGlmaWVyID0gR3VhcmRyYWlsQ29udmVyc2VDb250ZW50UXVhbGlmaWVyO1xuZXhwb3J0cy5HdWFyZHJhaWxDb252ZXJzZUltYWdlRm9ybWF0ID0gR3VhcmRyYWlsQ29udmVyc2VJbWFnZUZvcm1hdDtcbmV4cG9ydHMuR3VhcmRyYWlsSW1hZ2VGb3JtYXQgPSBHdWFyZHJhaWxJbWFnZUZvcm1hdDtcbmV4cG9ydHMuR3VhcmRyYWlsTWFuYWdlZFdvcmRUeXBlID0gR3VhcmRyYWlsTWFuYWdlZFdvcmRUeXBlO1xuZXhwb3J0cy5HdWFyZHJhaWxPcmlnaW4gPSBHdWFyZHJhaWxPcmlnaW47XG5leHBvcnRzLkd1YXJkcmFpbE91dHB1dFNjb3BlID0gR3VhcmRyYWlsT3V0cHV0U2NvcGU7XG5leHBvcnRzLkd1YXJkcmFpbE93bmVyc2hpcCA9IEd1YXJkcmFpbE93bmVyc2hpcDtcbmV4cG9ydHMuR3VhcmRyYWlsUGlpRW50aXR5VHlwZSA9IEd1YXJkcmFpbFBpaUVudGl0eVR5cGU7XG5leHBvcnRzLkd1YXJkcmFpbFNlbnNpdGl2ZUluZm9ybWF0aW9uUG9saWN5QWN0aW9uID0gR3VhcmRyYWlsU2Vuc2l0aXZlSW5mb3JtYXRpb25Qb2xpY3lBY3Rpb247XG5leHBvcnRzLkd1YXJkcmFpbFN0cmVhbVByb2Nlc3NpbmdNb2RlID0gR3VhcmRyYWlsU3RyZWFtUHJvY2Vzc2luZ01vZGU7XG5leHBvcnRzLkd1YXJkcmFpbFRvcGljUG9saWN5QWN0aW9uID0gR3VhcmRyYWlsVG9waWNQb2xpY3lBY3Rpb247XG5leHBvcnRzLkd1YXJkcmFpbFRvcGljVHlwZSA9IEd1YXJkcmFpbFRvcGljVHlwZTtcbmV4cG9ydHMuR3VhcmRyYWlsVHJhY2UgPSBHdWFyZHJhaWxUcmFjZTtcbmV4cG9ydHMuR3VhcmRyYWlsV29yZFBvbGljeUFjdGlvbiA9IEd1YXJkcmFpbFdvcmRQb2xpY3lBY3Rpb247XG5leHBvcnRzLkltYWdlRm9ybWF0ID0gSW1hZ2VGb3JtYXQ7XG5leHBvcnRzLkludm9rZU1vZGVsQ29tbWFuZCA9IEludm9rZU1vZGVsQ29tbWFuZDtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoQmlkaXJlY3Rpb25hbFN0cmVhbUNvbW1hbmQgPSBJbnZva2VNb2RlbFdpdGhCaWRpcmVjdGlvbmFsU3RyZWFtQ29tbWFuZDtcbmV4cG9ydHMuSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1Db21tYW5kID0gSW52b2tlTW9kZWxXaXRoUmVzcG9uc2VTdHJlYW1Db21tYW5kO1xuZXhwb3J0cy5MaXN0QXN5bmNJbnZva2VzQ29tbWFuZCA9IExpc3RBc3luY0ludm9rZXNDb21tYW5kO1xuZXhwb3J0cy5PdXRwdXRGb3JtYXRUeXBlID0gT3V0cHV0Rm9ybWF0VHlwZTtcbmV4cG9ydHMuUGVyZm9ybWFuY2VDb25maWdMYXRlbmN5ID0gUGVyZm9ybWFuY2VDb25maWdMYXRlbmN5O1xuZXhwb3J0cy5TZXJ2aWNlVGllclR5cGUgPSBTZXJ2aWNlVGllclR5cGU7XG5leHBvcnRzLlNvcnRBc3luY0ludm9jYXRpb25CeSA9IFNvcnRBc3luY0ludm9jYXRpb25CeTtcbmV4cG9ydHMuU29ydE9yZGVyID0gU29ydE9yZGVyO1xuZXhwb3J0cy5TdGFydEFzeW5jSW52b2tlQ29tbWFuZCA9IFN0YXJ0QXN5bmNJbnZva2VDb21tYW5kO1xuZXhwb3J0cy5TdG9wUmVhc29uID0gU3RvcFJlYXNvbjtcbmV4cG9ydHMuVG9vbFJlc3VsdFN0YXR1cyA9IFRvb2xSZXN1bHRTdGF0dXM7XG5leHBvcnRzLlRvb2xVc2VUeXBlID0gVG9vbFVzZVR5cGU7XG5leHBvcnRzLlRyYWNlID0gVHJhY2U7XG5leHBvcnRzLlZpZGVvRm9ybWF0ID0gVmlkZW9Gb3JtYXQ7XG5leHBvcnRzLnBhZ2luYXRlTGlzdEFzeW5jSW52b2tlcyA9IHBhZ2luYXRlTGlzdEFzeW5jSW52b2tlcztcbk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzY2hlbWFzXzAsICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBzY2hlbWFzXzBbJ19fcHJvdG9fXyddXG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKHNjaGVtYXNfMCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBrKSkgZXhwb3J0c1trXSA9IHNjaGVtYXNfMFtrXTtcbn0pO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVycm9ycywgJ19fcHJvdG9fXycpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fcHJvdG9fXycsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGVycm9yc1snX19wcm90b19fJ11cbiAgICB9KTtcblxuT2JqZWN0LmtleXMoZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gZXJyb3JzW2tdO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFJLGVBQWU7QUFFbkIsYUFBUyx5QkFBeUIsT0FBTztBQUNyQyxZQUFNLGNBQWMsTUFBTTtBQUMxQixZQUFNLGdCQUFnQixNQUFNO0FBQzVCLFlBQU0sV0FBVyxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQ2xDO0FBQUEsUUFDQTtBQUFBLE1BQ0osQ0FBQztBQUNELFlBQU0sNEJBQTRCLFNBQVMsa0NBQWtDLFFBQVE7QUFDckYsYUFBTyxPQUFPLE9BQU8sVUFBVTtBQUFBLFFBQzNCO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUVBLFFBQU0sZ0NBQWdDLENBQUMsWUFBWSxDQUFDLE1BQU0sWUFBWSxPQUFPLFNBQVM7QUFDbEYsWUFBTSxFQUFFLFFBQVEsSUFBSTtBQUNwQixVQUFJLENBQUMsYUFBYSxZQUFZLFdBQVcsT0FBTztBQUM1QyxlQUFPLEtBQUssSUFBSTtBQUNwQixhQUFPLFFBQVEsMEJBQTBCLE9BQU8sTUFBTSxNQUFNLE9BQU87QUFBQSxJQUN2RTtBQUNBLFFBQU0sdUNBQXVDO0FBQUEsTUFDekMsTUFBTSxDQUFDLGdCQUFnQixhQUFhLFFBQVE7QUFBQSxNQUM1QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDZDtBQUVBLFFBQU0sOEJBQThCLENBQUMsU0FBUyxPQUFPLFNBQVM7QUFDMUQsWUFBTSxFQUFFLFFB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QUFRLEVBQUUsU0FBUyxPQUFPLFlBQVksRUFBRSxRQUFRLEdBQUcsY0FBYyxHQUFHLFNBQVMsR0FBRyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZLEdBQUcsT0FBTyxxRUFBcUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxZQUFZLEdBQUcsT0FBTywwRUFBMEUsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxHQUFHLFlBQVksR0FBRyxTQUFTLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyw4RUFBOEUsWUFBWSxHQUFHLFNBQVMsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sbUZBQW1GLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLEdBQUcsT0FBTyxD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ZCxRQUFNLEtBQUs7QUFDWCxRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLEtBQUs7QUFDWCxRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE9BQU87QUFDYixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLE9BQU87QUFDYixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLE9BQU87QUFDYixRQUFNLFVBQVU7QUFDaEIsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFdBQVc7QUFDakIsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sU0FBUztBQUNmLFFBQU0sVUFBVTtBQUNoQixRQUFNLFdBQVc7QUFDakIsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFNBQVM7QUFDZixRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVU7QUFDaEIsUUFBTSxTQUFTO0FBQ2YsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxTQUFTO0FBQ2YsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sU0FBUztBQUNmLFFBQU0sVUFBVTtBQUNoQixRQUFNLFdBQVc7QUFDakIsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxLQUFLO0FBQ1gsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxLQUFLO0FBQ1gsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FB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LEtBQ3ZELENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLFdBQVcsS0FDMUQsT0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLE9BQU8sVUFBVSxXQUFXO0FBQUEsSUFDaEMsQ0FBQztBQUVMLFdBQU8sS0FBSyxTQUFTLEVBQUUsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsQ0FBQyxFQUFHLFNBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQztBQUFBLElBQ3RHLENBQUM7QUFDRCxXQUFPLFVBQVUsZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUNwRCxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixPQUFPLE9BQU8sV0FBVztBQUFBLElBQzdCLENBQUM7QUFFTCxXQUFPLEtBQUssTUFBTSxFQUFFLFFBQVEsU0FBVSxHQUFHO0FBQ3JDLFVBQUksTUFBTSxhQUFhLENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLENBQUMsRUFBRyxTQUFRLENBQUMsSUFBSSxPQUFPLENBQUM7QUFBQSxJQUNuRyxDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZV9kaXN0X2NqcyIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX190b0NvbW1vbkpTIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX190b0NvbW1vbkpTIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX190b0NvbW1vbkpTIiwgIkF3c0NyYzMyIiwgIkNyYzMyIiwgInJlcXVpcmVfZGlzdF9janMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgInJlcXVpcmVfZGlzdF9janMiLCAiZGF0YSIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgInJlcXVpcmVfZGlzdF9janMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgInJ1bnRpbWVDb25maWciLCAiaHR0cEF1dGhTY2hlbWVQcm92aWRlciJdCn0K
